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
    Component, Injector
} from '@angular/core';
import {modelutilities} from '../../services/modelutilities.service';
import {backend} from '../../services/backend.service';
import {broadcast} from '../../services/broadcast.service';
import {modal} from '../../services/modal.service';
import {metadata} from '../../services/metadata.service';
import {language} from '../../services/language.service';


import {dictionarymanager} from '../services/dictionarymanager.service';
import {DictionaryIndex, DictionaryItem} from "../interfaces/dictionarymanager.interfaces";

/**
 * displays the indexes related to the dictionary definition selected
 */
@Component({
    selector: 'dictionary-manager-indexes',
    templateUrl: './src/workbench/templates/dictionarymanagerindexes.html',
})
export class DictionaryManagerIndexes {

    constructor(private dictionarymanager: dictionarymanager, private metadata: metadata, private language: language, private modal: modal, private injector: Injector, private modelutilities: modelutilities) {
    }

    /**
     * gets all non deleted entries sorted by name
     */
    get dictionaryIndexes(): DictionaryIndex[] {

        // return an empty array when no DictionaryDefinition is set
        if (!this.dictionarymanager.currentDictionaryDefinition) return [];

        return this.dictionarymanager.dictionaryindexes.filter(d => d.deleted == 0 && d.sysdictionarydefinition_id == this.dictionarymanager.currentDictionaryDefinition).sort((a, b) => a.name.localeCompare(b.name) ? 1 : -1);
    }

    /**
     * gets all non deleted entries sorted by name
     */
    get dictionaryIndexesForTemplates(): any[] {
        let relatedindexes: any[] = [];

        for(let item of this.dictionarymanager.dictionaryitems.filter(d => d.deleted == 0 && d.sysdictionary_ref_id && d.sysdictionarydefinition_id == this.dictionarymanager.currentDictionaryDefinition)){
            let relIndexes = this.dictionarymanager.dictionaryindexes.filter(d => d.deleted == 0 && d.sysdictionarydefinition_id == item.sysdictionary_ref_id);
            if(relIndexes.length > 0) {
                relatedindexes.push({
                    relatedTemplateId: item.sysdictionary_ref_id,
                    indexes: relIndexes
                });
            }
        }

        return relatedindexes;
    }

    /**
     * react to the click to add a new dictionary definition
     */
    private addIndex(event: MouseEvent) {
        event.stopPropagation();
        this.modal.openModal('DictionaryManagerIndexAdd', true, this.injector);
    }

    /**
     * prompts the user and delets the dictionary definition
     *
     * @param event
     * @param id
     */
    private deleteIndex(event: MouseEvent, id: string) {
        event.stopPropagation();
        this.modal.prompt('confirm', this.language.getLabel('MSG_DELETE_RECORD', '', 'long'), this.language.getLabel('MSG_DELETE_RECORD')).subscribe(answer => {
            if (answer) {
                let di = this.dictionarymanager.dictionaryindexes.find(f => f.id == id).deleted = 1;
            }
        });
    }

    /**
     * returns a list of index fields
     * @param indexid
     * @private
     */
    private getIndexFields(indexid: string): string {
        let indexfields = [];

        for (let field of this.dictionarymanager.dictionaryindexitems.filter(i => i.sysdictionaryindex_id == indexid && i.deleted == 0).sort((a, b) => a.sequence > b.sequence ? 1 : -1)) {
            let name = this.dictionarymanager.dictionaryitems.find(di => di.id == field.sysdictionaryitem_id)?.name;
            if (name) indexfields.push(name);
        }

        return indexfields.join();
    }

    /**
     * sets the current active id
     *
     * @param id
     */
    private setActiveId(id) {
        this.dictionarymanager.currentDictionaryIndex = id;
    }
}