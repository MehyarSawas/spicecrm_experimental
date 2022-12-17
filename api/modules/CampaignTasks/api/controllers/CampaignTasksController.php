<?php
/***** SPICE-HEADER-SPACEHOLDER *****/

namespace SpiceCRM\modules\CampaignTasks\api\controllers;

use SpiceCRM\includes\database\DBManagerFactory;
use SpiceCRM\includes\ErrorHandlers\Exception;
use SpiceCRM\includes\ErrorHandlers\ForbiddenException;
use SpiceCRM\includes\utils\DBUtils;
use SpiceCRM\data\BeanFactory;
use SpiceCRM\includes\ErrorHandlers\NotFoundException;
use SpiceCRM\data\api\handlers\SpiceBeanHandler;
use SpiceCRM\includes\authentication\AuthenticationController;
use SpiceCRM\modules\CampaignTasks\CampaignTask;
use SpiceCRM\modules\SpiceACL\SpiceACL;
use Psr\Http\Message\ServerRequestInterface as Request;
use SpiceCRM\includes\SpiceSlim\SpiceResponse as Response;
use SpiceCRM\includes\TimeDate;

class CampaignTasksController
{
    public function getCampaignTaskItems(Request $req, Response $res, array $args): Response
    {
        $timedate = TimeDate::getInstance();

        if (!SpiceACL::getInstance()->checkAccess('CampaignTasks', 'detail', true))
            throw (new ForbiddenException("Forbidden for details in module CampaignTasks."))->setErrorCode('noModuleDetails');

        $getParams = $req->getQueryParams();
        $now = $timedate->nowDb();
        $campaignLog = BeanFactory::getBean('CampaignLog');
        $list = $campaignLog->get_list(
            "planned_activity_date DESC",
            "campaigntask_id = '{$args['id']}' AND IFNULL(planned_activity_date, '$now') <= '$now' AND activity_type != 'completed'",
            $getParams['offset'] ?: 0,
            $getParams['limit'] ?: 10,
            $getParams['limit'] ?: -1);

        // get a KREST Handler
        $KRESTModuleHandler = new SpiceBeanHandler();

        // empty items structure for the return
        $items = [];

        foreach ($list['list'] as $item) {
            $seed = BeanFactory::getBean($item->target_type, $item->target_id);
            $items[] = [
                'campaignlog_id' => $item->id,
                'campaignlog_activity_type' => $item->activity_type,
                'campaignlog_activity_date' => $item->activity_date,
                'campaignlog_related_id' => $item->related_id,
                'campaignlog_planned_activity_date' => $item->planned_activity_date,
                'campaignlog_target_type' => $item->target_type,
                'campaignlog_hits' => $item->hits,
                // tbd
                'data' => $KRESTModuleHandler->mapBeanToArray($item->target_type, $seed)
            ];
        }

        return $res->withJson(['items' => $items, 'row_count' => $list['row_count']]);
    }

    /**
     * activates the campaign tasks and writes the campaign log entries
     * prospect lists of type test will be ignored
     *
     * @param Request $req
     * @param Response $res
     * @param array $args
     * @return Response
     * @throws ForbiddenException
     */
    public function activateCampaignTask(Request $req, Response $res, array $args): Response
    {
        // ACL Check
        if (!SpiceACL::getInstance()->checkAccess('CampaignTasks', 'edit', true))
            throw (new ForbiddenException("Forbidden to edit in module CampaignTasks."))->setErrorCode('noModuleEdit');

        /** @var CampaignTask load the campaign task **/
        $campaignTask = BeanFactory::getBean('CampaignTasks', $args['id']);

        $status = 'targeted';
        switch ($campaignTask->campaigntask_type) {
            case 'Mail':
                $status = 'sent';
                break;
            case 'Feedback':
                $status = 'queued';
                break;
        }

        // activate the campaigntask
        $campaignTask->activate($status);
        return $res->withJson(['success' => true, 'id' => $args['id']]);
    }
    /**
     * activates the campaign tasks and writes the campaign log entries
     * where the source for campaignlog is an event registration
     * prospect lists of type test will be ignored
     *
     * @param Request $req
     * @param Response $res
     * @param array $args
     * @return Response
     * @throws ForbiddenException
     */
    public function activateEventTask(Request $req, Response $res, array $args): Response
    {
        // ACL Check
        if (!SpiceACL::getInstance()->checkAccess('CampaignTasks', 'edit', true))
            throw (new ForbiddenException("Forbidden to edit in module CampaignTasks."))->setErrorCode('noModuleEdit');

        /** @var CampaignTask load the campaign task**/
        $campaignTask = BeanFactory::getBean('CampaignTasks', $args['id']);

        $status = 'queued';

        // activate the campaigntask
        $success = $campaignTask->activateFromEvent($status);
        return $res->withJson(['success' => $success, 'id' => $args['id']]);
    }


    public function exportCampaignTask(Request $req, Response $res, array $args): Response
    {
        // ACL Check
        if (!SpiceACL::getInstance()->checkAccess('CampaignTasks', 'export', true))
            throw (new ForbiddenException("Forbidden to export for module CampaignTasks."));

        /** @var CampaignTask load the campaign task **/
        $campaignTask = BeanFactory::getBean('CampaignTasks', $args['id']);

        // activate the campaigntask
        $campaignTask->export();

    }

    /**
     * send a test email to the test prospect lists in the campaign task
     *
     * @param Request $req
     * @param Response $res
     * @param array $args
     * @return Response
     */
    public function sendCampaignTaskTestEmail(Request $req, Response $res, array $args): Response
    {
        $campaignTask = BeanFactory::getBean('CampaignTasks', $args['id']);
        return $res->withJson($campaignTask->sendTestEmail());
    }

    /**
     * queus the emails to be sent
     *
     * @param Request $req
     * @param Response $res
     * @param array $args
     * @return Response
     */
    public function queueCampaignTaskEmail(Request $req, Response $res, array $args): Response
    {
        /** @var CampaignTask load the campaign task **/
        $campaignTask = BeanFactory::getBean('CampaignTasks', $args['id']);
        $campaignTask->activate('queued');
        return $res->withJson(['success' => true]);
    }

    /**
     * queus the emails to be sent
     *
     * @param Request $req
     * @param Response $res
     * @param array $args
     * @return Response
     */
    public function liveCompileEmailBody(Request $req, Response $res, array $args): Response
    {
        $params = $req->getParsedBody();
        /** @var EmailTemplate **/
        $emailTemplate = BeanFactory::getBean('EmailTemplates');
        $emailTemplate->body_html = $params['html'];
        $bean = BeanFactory::getBean($args['parentmodule'], $args['parentid']);

        $campaignTask = BeanFactory::getBean('CampaignTasks', $args['id']);

        # set the current user to the one assigned to the task. fallback set the admin user
        $current_user = AuthenticationController::getInstance()->getCurrentUser();
        $user = BeanFactory::getBean('Users', $campaignTask->assigned_user_id ?: '1');
        AuthenticationController::getInstance()->setCurrentUser($user);

        $parsedTpl = $emailTemplate->parse($bean);

        # reset the current user for the system after parsing
        AuthenticationController::getInstance()->setCurrentUser($current_user);

        return $res->withJson(['html' => DBUtils::fromHtml(wordwrap($parsedTpl['body_html'], true))]);
    }

    /**
     * returns a list of reports that can be used to export a campaign task target list
     *
     * @param Request $req
     * @param Response $res
     * @param array $args
     * @return Response
     */
    public function getExportReports(Request $req, Response $res, array $args): Response
    {
        $retArray = [];

        /** @var KReport **/
        $report = BeanFactory::getBean('KReports');
        $reports = $report->get_full_list('name', "report_module = 'CampaignTasks' AND ( integration_params LIKE '%\"kexcelexport\":1%' OR integration_params LIKE '%\"kcsvexport\":1%')");
        foreach ($reports as $report) {
            $integrationPramns = json_decode(html_entity_decode($report->integration_params));
            $retArray[] = [
                'id' => $report->id,
                'name' => $report->name,
                'description' => $report->description,
                'xls' => $integrationPramns->activePlugins->kexcelexport == 1 ? true : false,
                'csv' => $integrationPramns->activePlugins->kcsvexport == 1 ? true : false
            ];
        }

        return $res->withJson($retArray);
    }

    /**
     * returns a mail merge PDF for the given campaign task
     *
     * @param Request $req
     * @param Response $res
     * @param array $args
     * @return Response
     * @throws Exception
     * @throws NotFoundException
     */
    public function mailmergeCampaignTask(Request $req, Response $res, array $args): Response
    {
        $getParam = $req->getQueryParams();

        /** @var CampaignTask $campaignTask load the campaign task */
        $campaignTask = BeanFactory::getBean('CampaignTasks', $args['id']);
        if (!$campaignTask) {
            throw new NotFoundException('CampaignTask not found');
        }

        $mailMergeSubject = $campaignTask->email_subject;
        $mailMergeBody = $campaignTask->email_body;


        $mailMergeResult = $campaignTask->mailMerge($getParam['start'], $getParam['limit'], $mailMergeSubject, $mailMergeBody);
        // generate the PDF
        return $res->withJson(['content' => base64_encode($mailMergeResult['pdfcontent']), 'inactiveCount' => $mailMergeResult['inactiveCount']]);
    }

    /**
     * returns the number of targets ina  targetlist
     *
     * @param Request $req
     * @param Response $res
     * @param array $args
     * @return Response
     * @throws Exception
     * @throws NotFoundException
     */
    public function getTargetCount(Request $req, Response $res, array $args): Response
    {
        /** @var CampaignTask $campaignTask */
        $campaignTask = BeanFactory::getBean('CampaignTasks', $args['id']);
        if (!$campaignTask) {
            throw new NotFoundException('CampaignTask not found');
        }
        return $res->withJson(['count' => $campaignTask->getTargetCount()]);
    }
}
