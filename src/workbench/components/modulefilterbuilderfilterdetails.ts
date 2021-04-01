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
 * @module WorkbenchModule
 */
import {
    Component, Input, OnChanges
} from '@angular/core';
import {backend} from '../../services/backend.service';
import {language} from '../../services/language.service';
import {toast} from "../../services/toast.service";
import {metadata} from "../../services/metadata.service";

/**
 * @ignore
 */
declare var _;

@Component({
    selector: 'module-builder-filter-details',
    templateUrl: './src/workbench/templates/modulefilterbuilderfilterdetails.html',
})
export class ModuleFilterBuilderFilterDetails implements OnChanges {

    @Input() private filter: any;
    private primaryGroup: any = {
        logicaloperator: 'and',
        groupscope: 'all',
        conditions: []
    }

    constructor(
        private backend: backend,
        private language: language,
        private metadata: metadata,
        private toast: toast,
    ) {

    }

    public ngOnChanges(): void {
        if (this.filter) {
            if (this.filter.filterdefs) {
                this.primaryGroup = typeof this.filter.filterdefs == 'string' ? JSON.parse(this.filter.filterdefs) : this.filter.filterdefs;
            } else {
                this.primaryGroup = {
                    logicaloperator: 'and',
                    conditions: []
                };
            }
        }
    }

    private save() {
        this.cleangroup(this.primaryGroup);
        this.filter.filterdefs = this.primaryGroup;
        this.metadata.setModuleFilter(this.filter.id, this.filter.name, this.filter.module, this.filter.type);
        this.backend.postRequest('sysmodulefilters/' + this.filter.module + '/' + this.filter.id, {}, this.filter)
            .subscribe(res => this.toast.sendToast(this.language.getLabel("LBL_DATA_SAVED") + ".", "success"));
    }

    private cleangroup(group) {
        for (let condition of group.conditions) {
            let i = group.conditions.indexOf(condition);
            if (condition.deleted === true) {
                group.conditions.splice(i, 1);
            } else {
                if (condition.conditions) {
                    this.cleangroup(group.conditions[i]);
                }
            }
        }
    }
}