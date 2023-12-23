/**
 * @module ModuleSalesDocs
 */
import {
    Component, EventEmitter, Input, OnDestroy, OnInit, Output, SkipSelf
} from '@angular/core';
import {model} from "../../../services/model.service";
import {backend} from "../../../services/backend.service";
import {Subject, Subscription} from "rxjs";
import {helper} from "../../../services/helper.service";
import {modal} from "../../../services/modal.service";
import {language} from "../../../services/language.service";
import {toast} from "../../../services/toast.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {view} from "../../../services/view.service";
import {metadata} from "../../../services/metadata.service";
import {session} from "../../../services/session.service";
import {OutputRevisionsPDFTabContainer} from "./outputrevisionspdftabcontainer";

declare var moment: any

/**
 * a component for the tab container to preivew the PDF of a salesdoc
 */
@Component({
    selector: 'outputrevisions-pdf-tab-container-email',
    templateUrl: '../templates/outputrevisionspdftabcontaineremail.html',
    providers: [view, model]
})
export class OutputRevisionsPDFTabContainerEmail {

    /**
     * the fieldset
     */
    public fieldset: any = null;

    /**
     * the filelist
     */
    @Input() public filelist: any = {};

    /**
     * the content for the attachment
     */
    @Input() public attachmentContent: string;

    /**
     * email sent
     */
    @Output() public email_sent: EventEmitter<string> = new EventEmitter<string>();

    /**
     * reference to the dynamic aded compontent
     *
     * @private
     */
    public attachmentsPanelRef: any;

    /**
     * inidcates that we are sending
     */
    public sending: boolean = false;

    constructor(
        @SkipSelf() public parent: model,
        public model: model,
        public view: view,
        public backend: backend,
        public helper: helper,
        public modal: modal,
        public toast: toast,
        public language: language,
        public metadata: metadata,
        public session: session
    ) {
        // get the fieldset of the email area
        let componentconfig = this.metadata.getComponentConfig('ObjectActionOutputBeanModal');
        this.fieldset = componentconfig.fieldset_email;
    }


    public ngOnInit() {
        this.setModelData();
        this.setViewData();
    }


    /**
     * set all email-model data
     * set copy rules from parent
     */
    private setModelData() {
        this.model.module = "Emails";

        this.model.initialize(this.parent);

        // set the new model data
        let modelData: any = {};
        modelData.parent_type = this.parent.module;
        modelData.parent_id = this.parent.data.id;
        modelData.parent_name = this.parent.data.name;
        modelData.isNew = true;
        modelData.assigned_user_id = this.session.authData.userId;
        modelData.assigned_user_name = this.session.authData.userName;
        modelData.modified_by_id = this.session.authData.userId;
        modelData.modified_by_name = this.session.authData.userName;
        modelData.date_entered = new Date();
        modelData.date_modified = new Date();
        this.model.setFields(modelData);

        this.model.startEdit();
    }

    /**
     * if it is allowed: go to edit mode
     */
    private setViewData() {
        this.view.setEditMode();
        this.view.isEditable = true;
    }

    get isDirty(){
        return this.model.isDirty();
    }

    /**
     * return if we can send an email
     */
    get disabled() {
        let recipientAddresses = this.model.getFieldValue('recipient_addresses');
        let mailbox = this.model.getFieldValue('mailbox_id');
        let name = this.model.getFieldValue('name');
        let recipientTo = recipientAddresses ? recipientAddresses.find(re => re.address_type == 'to') : undefined;

        return (!name || !mailbox || !recipientAddresses || !recipientTo) ? true : this.sending;
    }


    public sendEmail() {
        let retSubject = new Subject();
        this.modal.openModal('SystemLoadingModal', false).subscribe(modalRef => {
            modalRef.instance.messagelabel = 'LBL_SENDING';

            this.sending = true;
            this.model.setFields({
                type: 'out',
                to_be_sent: '1',
                from_addr: this.model.getField('from_addr_name'),
                to_addrs: this.model.getField('to_addrs_names')
            });

            this.model.save().subscribe({
                    next: (success) => {
                        modalRef.instance.self.destroy();
                        // emit that the email has been sent
                        retSubject.next(true);
                    },
                    error: () => {
                        modalRef.instance.self.destroy();
                        this.sending = false;
                        retSubject.error('Error sending email');
                    }
                }
            );
        });
        return retSubject.asObservable();
    }

}
