<?php
/*********************************************************************************
 * This file is part of SpiceCRM. SpiceCRM is an enhancement of SugarCRM Community Edition
 * and is developed by aac services k.s.. All rights are (c) 2016 by aac services k.s.
 * You can contact us at info@spicecrm.io
 *
 * SpiceCRM is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version
 *
 * The interactive user interfaces in modified source and object code versions
 * of this program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU Affero General Public License version 3.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License version 3,
 * these Appropriate Legal Notices must retain the display of the "Powered by
 * SugarCRM" logo. If the display of the logo is not reasonably feasible for
 * technical reasons, the Appropriate Legal Notices must display the words
 * "Powered by SugarCRM".
 *
 * SpiceCRM is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 ********************************************************************************/

namespace SpiceCRM\modules\SpiceImports\api\controllers;

use SpiceCRM\includes\database\DBManagerFactory;
use SpiceCRM\includes\ErrorHandlers\ForbiddenException;
use SpiceCRM\data\BeanFactory;
use SpiceCRM\modules\SpiceACL\SpiceACL;
use Psr\Http\Message\ServerRequestInterface as Request;
use SpiceCRM\includes\SpiceSlim\SpiceResponse as Response;

class SpiceImportsController{

    /**
     * get the saved spice imports
     *
     * @param Request $req
     * @param Response $res
     * @param array $args
     * @return Response
     * @throws ForbiddenException
     */
    public function getSavedImports(Request $req, Response $res, array $args): Response {
        if (!SpiceACL::getInstance()->checkAccess('SpiceImports', 'list', true)) {
            throw (new ForbiddenException("Forbidden for details in module SpiceImports."))
                ->setErrorCode('noModuleDetails');
        }

        $bean = BeanFactory::getBean('SpiceImports');
        return $res->withJson($bean->getSavedImports($args['beanName']));
    }

    /**
     * get the file previews
     * @param $req
     * @param $res
     * @param $args
     * @return mixed
     * @throws ForbiddenException
     */

    public function getFilePreview(Request $req, Response $res, array $args): Response {
        if (!SpiceACL::getInstance()->checkAccess('SpiceImports', 'edit', true)) {
            throw (new ForbiddenException("Forbidden for details in module SpiceImports."))
                ->setErrorCode('noModuleDetails');
        }

        $params = $req->getQueryParams();
        $bean = BeanFactory::getBean('SpiceImports');
        return $res->withJson($bean->getFilePreview($params));
    }

    /**
     * delete the import files
     * @param $req
     * @param $res
     * @param $args
     * @return mixed
     * @throws ForbiddenException
     */

    public function deleteImportFile(Request $req, Response $res, array $args): Response {
        if (!SpiceACL::getInstance()->checkAccess('SpiceImports', 'delete', true)) {
            throw (new ForbiddenException("Forbidden to delete in module SpiceImports."))
                ->setErrorCode('noModuleDelete');
        }

        $filemd5 = $req->getQueryParams()['filemd5'];
        $bean = BeanFactory::getBean('SpiceImports');
        return $res->withJson($bean->deleteImportFile($filemd5));

    }

    /**
     * saves data from an import
     * @param $req
     * @param $res
     * @param $args
     * @return mixed
     * @throws ForbiddenException
     */

    public function saveFromImport(Request $req, Response $res, array $args): Response {
            if (!SpiceACL::getInstance()->checkAccess('SpiceImports', 'edit', true)) {
                throw (new ForbiddenException("Forbidden for details in module SpiceImports."))
                    ->setErrorCode('noModuleDetails');
            }

            $postParams = $req->getQueryParams() ?: [];
            $bean = BeanFactory::getBean('SpiceImports');
            return $res->withJson($bean->saveFromImport($postParams));
    }

    /**
     * get the spice import log entries
     * @param $req
     * @param $res
     * @param $args
     * @return mixed
     * @throws ForbiddenException
     */

    public function getImportLog(Request $req, Response $res, array $args): Response {
        if (!SpiceACL::getInstance()->checkAccess('SpiceImports', 'detail', true)) {
            throw (new ForbiddenException("Forbidden for details in module SpiceImports."))
                ->setErrorCode('noModuleDetails');
        }

        $id = $args['importId'];
        $db = DBManagerFactory::getInstance();
        $logs = [];

        $res = $db->query("SELECT * FROM spiceimportlogs WHERE import_id = '$id'");
        while ($log = $db->fetchByAssoc($res)) {
            $logs[] = $log;
        }

        return $res->withJson($logs);
    }


}