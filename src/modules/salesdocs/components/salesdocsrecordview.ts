/*
SpiceUI 2018.10.001

Copyright (c) 2016-present, aac services.k.s - All rights reserved.
Redistribution and use in source and binary forms, without modification, are permitted provided that the following conditions are met:
- Redistributions of source code must retain this copyright and license notice, this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
- If used the SpiceCRM Logo needs to be displayed in the upper left corner of the screen in a minimum dimension of 31x31 pixels and be clearly visible, the icon needs to provide a link to http://www.spicecrm.io
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/

/**
 * @module ModuleSalesDocs
 */
import {
    Component
} from '@angular/core';
import {metadata} from '../../../services/metadata.service';
import {language} from '../../../services/language.service';
import {view} from "../../../services/view.service";
import {model} from "../../../services/model.service";
import {configurationService} from "../../../services/configuration.service";

/**
 * a specific recordview for the SalesDocs
 */
@Component({
    selector: 'salesdocs-record-view',
    templateUrl: './src/modules/salesdocs/templates/salesdocsrecordview.html',
})
export class SalesDocsRecordView {

    private initialized: boolean = false;

    /**
     * the rendered doc type
     */
    private _salesdoctype: string;

    /**
     * the componentset to render above the items
     */
    private headerComponentset: string = '';

    /**
     * teh compopnentset to render below the items
     */
    private footerComponentset: string = '';

    constructor(private metadata: metadata, private language: language, private view: view, private model: model, private configuration: configurationService) {
        this.model.data$.subscribe(recordData => {
            let docType = this.model.getField('salesdoctype');
            if (docType && docType != this._salesdoctype) {
                this.renderViewForDocType();
            } else if (!docType) {
                this.renderDefaultView();
            }
        });
    }


    /**
     * renders the view once receivede
     */
    private renderViewForDocType() {
        let docTypes = this.configuration.getData('salesdoctypes');
        if (docTypes && docTypes.find(docType => docType.name == this.model.getField('salesdoctype'))) {
            let docType = docTypes.find(docType => docType.name == this.model.getField('salesdoctype'));
            this.headerComponentset = docType.headercomponentset;
            this.footerComponentset = docType.footercomponentset;

            // check if displayOnly
            /*
            if(docType.displayonly == '1'){
                this.view.isEditable = false;
                this.model.acl.edit = false;
            }
             */
        }

        if (!this.headerComponentset || !this.footerComponentset) {
            let defaultConfig = this.metadata.getComponentConfig('SalesDocsRecordView', 'SalesDocs');
            if (!this.headerComponentset) this.headerComponentset = defaultConfig.headercomponentset;
            if (!this.footerComponentset) this.footerComponentset = defaultConfig.footercomponentset;
        }
        this.initialized = true;
    }

    /**
     * renders a default view
     */
    private renderDefaultView() {
        let componentConf = this.metadata.getComponentConfig('SalesDocsRecordView', this.model.module);
        this.headerComponentset = componentConf.headercomponentset;
        this.footerComponentset = componentConf.footercomponentset;
        this.initialized = true;
    }

}