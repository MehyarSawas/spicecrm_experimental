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
 * @module ModuleACLTerritories
 */
import {
    AfterViewInit,
    ComponentFactoryResolver,
    Component,
    ElementRef,
    NgModule,
    ViewChild,
    ViewContainerRef,
    Output,
    EventEmitter,
    Input,
    OnChanges,
    OnInit
} from '@angular/core';
import {model} from '../../../services/model.service';
import {language} from '../../../services/language.service';
import {metadata} from '../../../services/metadata.service';
import {backend} from '../../../services/backend.service';
import {modelutilities} from '../../../services/modelutilities.service';
import {modal} from '../../../services/modal.service';
import {ACLObjectsManagerObjectTerritoriesModal} from "./aclobjectsmanagerobjectterritoriesmodal";

@Component({
    templateUrl: './src/modules/aclterritories/templates/aclobjectsmanagerobjectterritories.html'
})
export class ACLObjectsManagerObjectTerritories {

    elements: Array<any> = [];
    elementvalues: Array<any> = [];

    constructor(private backend: backend, private metadata: metadata, private model: model, private language: language, private modal: modal) {
        this.loadTerritories();
    }

    loadTerritories(){
        this.backend.getRequest('spiceaclterritories/core/orgobjecttypes/bymodule/'+this.model.getFieldValue('spiceacltype_module')).subscribe(territoryData =>{
            this.elements = territoryData.elements;
            this.elementvalues = territoryData.elementvalues;
        })
    }

    getValue(id){
        let values = this.model.getFieldValue('territoryelementvalues');
        for(let value of values){
            if(value.spiceaclterritoryelement_id == id){
                let parsedValue = JSON.parse(value.value);
                return parsedValue.join(', ');
            }
        }
        return '';
    }

    setValue(id){

        // gather available values
        let availableValues = [{value: '*', description:'*'}];
        for(let elementvalue of this.elementvalues){
            if(elementvalue.spiceaclterritoryelement_id == id)
                availableValues.push({
                    value: elementvalue.elementvalue,
                    description: elementvalue.elementdescription,
                })
        }

        // get the value
        let currentValues = [];
        let values = this.model.getFieldValue('territoryelementvalues');
        for(let value of values){
            if(value.spiceaclterritoryelement_id == id){
                currentValues = JSON.parse(value.value);
            }
        }

        this.modal.openModal('ACLObjectsManagerObjectTerritoriesModal').subscribe(modalRef => {
            modalRef.instance.availableValues = availableValues;
            modalRef.instance.currentValues = currentValues;
            modalRef.instance.setValues.subscribe(setValues => {
                let valueSet = false;
                let values = this.model.getFieldValue('territoryelementvalues');
                for(let value of values){
                    if(value.spiceaclterritoryelement_id == id){
                        value.value = JSON.stringify(setValues);
                        valueSet = true;
                    }
                };
                // if value was not found yet ... add it
                if(!valueSet){
                    values.push({
                        spiceaclobject_id: this.model.id,
                        spiceaclterritoryelement_id: id,
                        value: JSON.stringify(setValues)
                    });
                }

                this.model.setField('territoryelementvalues', values);
            });
        });
    }

    get disabled(){
        return this.model.getFieldValue('status') == 'r'
    }

}