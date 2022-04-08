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
 * © 2015 - 2021 aac services k.s. All rights reserved.
 * release: 2021.03.001
 * date: 2021-11-22 14:19:12
 * build: 2021.03.001.1637587152303
 **/
"use strict";var __extends=this&&this.__extends||function(){var a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])})(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function s(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,s=1,a=arguments.length;s<a;s++)for(var i in t=arguments[s])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},__decorate=this&&this.__decorate||function(e,t,s,a){var i,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,a);else for(var r=e.length-1;0<=r;r--)(i=e[r])&&(n=(o<3?i(n):3<o?i(t,s,n):i(t,s))||n);return 3<o&&n&&Object.defineProperty(t,s,n),n},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__param=this&&this.__param||function(s,a){return function(e,t){a(e,t,s)}},__awaiter=this&&this.__awaiter||function(e,n,r,l){return new(r=r||Promise)(function(s,t){function a(e){try{o(l.next(e))}catch(e){t(e)}}function i(e){try{o(l.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?s(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,i)}o((l=l.apply(e,n||[])).next())})},__generator=this&&this.__generator||function(s,a){var i,o,n,r={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(i)throw new TypeError("Generator is already executing.");for(;r;)try{if(i=1,o&&(n=2&t[0]?o.return:t[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,t[1])).done)return n;switch(o=0,(t=n?[2&t[0],n.value]:t)[0]){case 0:case 1:n=t;break;case 4:return r.label++,{value:t[1],done:!1};case 5:r.label++,o=t[1],t=[0];continue;case 7:t=r.ops.pop(),r.trys.pop();continue;default:if(!(n=0<(n=r.trys).length&&n[n.length-1])&&(6===t[0]||2===t[0])){r=0;continue}if(3===t[0]&&(!n||t[1]>n[0]&&t[1]<n[3])){r.label=t[1];break}if(6===t[0]&&r.label<n[1]){r.label=n[1],n=t;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(t);break}n[2]&&r.ops.pop(),r.trys.pop();continue}t=a.call(s,r)}catch(e){t=[6,e],o=0}finally{i=n=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ModuleBonusPrograms=exports.BonusCardNewRelatedButton=exports.BonusCardNewButton=exports.BonusCardBulkExtendButton=exports.BonusCardExtendButton=exports.BonusCardValidityDateField=exports.BonusProgramValidityTypesField=void 0;var common_1=require("@angular/common"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),directives_1=require("../../directives/directives"),objectfields_1=require("../../objectfields/objectfields"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),services_1=require("../../services/services"),router_1=require("@angular/router"),BonusProgramValidityTypesField=function(r){function BonusProgramValidityTypesField(e,t,s,a,i,o){var n=r.call(this,e,t,s,a,i)||this;return n.model=e,n.view=t,n.language=s,n.metadata=a,n.router=i,n.configurationService=o,n.types=[],n.loadTypes(),n}return __extends(BonusProgramValidityTypesField,r),Object.defineProperty(BonusProgramValidityTypesField.prototype,"value",{get:function(){return this.model.getField("validity_date_method")},set:function(t){var s=this;this.model.setField("validity_date_method",t),this.types.some(function(e){if(e.method==t)return s.model.setField("validity_date_editable",e.editing_allowed),!0})},enumerable:!1,configurable:!0}),BonusProgramValidityTypesField.prototype.loadTypes=function(){this.types=this.configurationService.getData("sysbonusprogramvaliditytypes")},__decorate([core_1.Component({template:'<field-label *ngIf="displayLabel" [fieldname]="fieldname" [fieldconfig]="fieldconfig"></field-label><field-generic-display *ngIf="!isEditMode()" [fielddisplayclass]="fielddisplayclass" [fieldconfig]="fieldconfig" [editable]="isEditable()"><ng-container *ngFor="let type of types"><system-label *ngIf="value == type.method" [label]="type.label"></system-label></ng-container></field-generic-display><div *ngIf="isEditable() && isEditMode()" class="slds-form-element__control slds-m-vertical--xx-small" [ngClass]="css_classes"><div class="slds-form-element"><div class="slds-form-element__control"><div class="slds-select_container"><select [(ngModel)]="value" [disabled]="types?.length === 0" class="slds-select"><option></option><option *ngFor="let type of types" [value]="type.method"><system-label [label]="type.label"></system-label></option></select></div></div></div><field-messages [fieldname]="fieldname"></field-messages></div>'}),__metadata("design:paramtypes",[services_1.model,services_1.view,services_1.language,services_1.metadata,router_1.Router,services_1.configurationService])],BonusProgramValidityTypesField)}(objectfields_1.fieldGeneric);exports.BonusProgramValidityTypesField=BonusProgramValidityTypesField;var BonusCardValidityDateField=function(n){function BonusCardValidityDateField(e,t,s,a,i){var o=n.call(this,e,t,s,a,i)||this;return o.model=e,o.view=t,o.language=s,o.metadata=a,o.router=i,o}return __extends(BonusCardValidityDateField,n),BonusCardValidityDateField.prototype.isEditable=function(e){return void 0===e&&(e=this.fieldname),1==this.model.data.validity_date_editable&&n.prototype.isEditable.call(this,e)},__decorate([core_1.Component({template:'<ng-container *ngIf="!isEditMode()"><field-label *ngIf="displayLabel" [fieldname]="fieldname" [fieldconfig]="fieldconfig"></field-label><field-generic-display [fielddisplayclass]="fielddisplayclass" [editable]="isEditable()" [fieldconfig]="fieldconfig"><system-display-datetime [date]="startDate" [displayTime]="false"></system-display-datetime>-<system-display-datetime [date]="endDate" [displayTime]="false"></system-display-datetime></field-generic-display></ng-container><div *ngIf="isEditable() && isEditMode()" class="slds-form-element__control slds-p-around--xx-small" [ngClass]="css_classes"><div class="slds-grid slds-gutters_direct-xx-small"><div class="slds-size--1-of-2 slds-col"><div class="slds-form-element"><label class="slds-form-element__label"><system-label label="LBL_DATE_START"></system-label></label><system-input-date [(ngModel)]="startDate"></system-input-date></div></div><div class="slds-size--1-of-2 slds-col"><div class="slds-form-element"><label class="slds-form-element__label"><system-label label="LBL_DATE_END"></system-label></label><system-input-date [(ngModel)]="endDate"></system-input-date></div></div></div><field-messages [fieldname]="fieldname"></field-messages></div>'}),__metadata("design:paramtypes",[services_1.model,services_1.view,services_1.language,services_1.metadata,router_1.Router])],BonusCardValidityDateField)}(objectfields_1.fieldDateSpan);exports.BonusCardValidityDateField=BonusCardValidityDateField;var BonusCardExtendButton=function(){function BonusCardExtendButton(e,t,s,a,i,o,n,r,l,d){this.extensionModel=e,this.bonusCardModel=t,this.language=s,this.metadata=a,this.modal=i,this.backend=o,this.toast=n,this.router=r,this.modelUtilities=l,this.userpreferences=d}return BonusCardExtendButton.prototype.execute=function(){var e=this,o=this.modal.await(this.language.getLabel("LBL_CALCULATING")),t="module/BonusCards/"+this.bonusCardModel.id+"/extensionvaliditydate";this.backend.getRequest(t).subscribe(function(i){return __awaiter(e,void 0,void 0,function(){var t,s,a;return __generator(this,function(e){switch(e.label){case 0:return(o.next(),o.complete(),i.extendable)?[3,1]:(this.toast.sendToast(this.language.getLabel("MSG_EXTENDING_NOT_ALLOWED")),[3,6]);case 1:return t=i.date?this.modelUtilities.backend2spice("BonusCards","valid_until",i.date):(new moment).add("1","years"),a=this.bonusCardModel.data.valid_until.format(this.userpreferences.getDateFormat()),s=this.bonusCardModel.data.purchase_date.format(this.userpreferences.getDateFormat()),s=this.language.getLabel("LBL_PURCHASE_DATE")+" "+s+" "+this.language.getLabel("LBL_VALID_UNTIL")+" "+a+" \n "+this.language.getLabel("LBL_NEW_VALID_UNTIL_DATE"),a=void 0,i.editable?[4,this.modal.prompt("input_date",s,"LBL_EXTEND","shade",t).toPromise()]:[3,3];case 2:return a=e.sent(),t=a,[3,5];case 3:return s+=" "+t.format(this.userpreferences.getDateFormat()),[4,this.modal.confirm(s,"LBL_EXTEND").toPromise()];case 4:a=e.sent(),e.label=5;case 5:if(!a)return[2];this.bonusCardModel.startEdit(),this.bonusCardModel.setField("valid_until",t),this.bonusCardModel.save(),this.extensionModel.module="BonusCardExtensions",this.extensionModel.initialize(),this.extensionModel.setFields({valid_until:t,bonuscard_id:this.bonusCardModel.id}),this.extensionModel.save(),e.label=6;case 6:return[2]}})})},function(){return e.toast.sendToast(e.language.getLabel("ERR_FAILED_TO_EXECUTE"))})},__decorate([core_1.Component({template:'<system-label label="LBL_EXTEND"></system-label>',providers:[services_1.model]}),__param(1,core_1.SkipSelf()),__metadata("design:paramtypes",[services_1.model,services_1.model,services_1.language,services_1.metadata,services_1.modal,services_1.backend,services_1.toast,router_1.Router,services_1.modelutilities,services_1.userpreferences])],BonusCardExtendButton)}();exports.BonusCardExtendButton=BonusCardExtendButton;var BonusCardBulkExtendButton=function(){function BonusCardBulkExtendButton(e,t,s,a,i,o,n,r,l,d,u,c){this.model=e,this.bonusCardModel=t,this.view=s,this.language=a,this.metadata=i,this.modellist=o,this.modal=n,this.backend=r,this.toast=l,this.router=d,this.modelUtilities=u,this.userpreferences=c}return Object.defineProperty(BonusCardBulkExtendButton.prototype,"exportCount",{get:function(){var e;return null!==(e=this.modellist.getSelectedCount())&&void 0!==e?e:this.modellist.listData.totalcount},enumerable:!1,configurable:!0}),Object.defineProperty(BonusCardBulkExtendButton.prototype,"disabled",{get:function(){return 0==this.modellist.getSelectedCount()},enumerable:!1,configurable:!0}),BonusCardBulkExtendButton.prototype.execute=function(){var e=this,i=this.modal.await(this.language.getLabel("LBL_PROCESSING")),t=this.modellist.getSelectedIDs();this.backend.getRequest("module/BonusCards/extendablecards",{cardsIds:t}).subscribe(function(a){return __awaiter(e,void 0,void 0,function(){var t,s=this;return __generator(this,function(e){switch(e.label){case 0:return(i.next(),i.complete(),0==(null===(t=a.cardsIds)||void 0===t?void 0:t.length))?[2,this.toast.sendToast(this.language.getLabel("MSG_EXTENDING_NOT_ALLOWED"))]:(t=this.language.getLabel("MSG_CARDS_TO_EXTEND")+" "+a.cardsIds.length,[4,this.modal.confirm(t,"LBL_BULK_EXTEND").toPromise()]);case 1:return e.sent()?(this.backend.postRequest("module/BonusCards/bulkextend",null,{cardsIds:a.cardsIds}).subscribe(function(){s.toast.sendToast(s.language.getLabel("MSG_SUCCESSFULLY_EXTENDED"))},function(){s.toast.sendToast(s.language.getLabel("ERR_FAILED_TO_EXECUTE"))}),[2]):[2]}})})},function(){return e.toast.sendToast(e.language.getLabel("ERR_FAILED_TO_EXECUTE"))})},__decorate([core_1.Component({template:'<span><system-label label="LBL_BULK_EXTEND"></system-label> ({{exportCount}})</span>',providers:[services_1.model]}),__param(1,core_1.SkipSelf()),__metadata("design:paramtypes",[services_1.model,services_1.model,services_1.view,services_1.language,services_1.metadata,services_1.modellist,services_1.modal,services_1.backend,services_1.toast,router_1.Router,services_1.modelutilities,services_1.userpreferences])],BonusCardBulkExtendButton)}();exports.BonusCardBulkExtendButton=BonusCardBulkExtendButton;var BonusCardNewButton=function(){function BonusCardNewButton(e,t,s,a,i,o,n,r){this.language=e,this.metadata=t,this.modal=s,this.toast=a,this.backend=i,this.model=o,this.parentModel=n,this.modelUtilities=r,this.disabled=!0}return BonusCardNewButton.prototype.execute=function(){return __awaiter(this,void 0,void 0,function(){var t,s,a=this;return __generator(this,function(e){switch(e.label){case 0:return"BonusPrograms"==this.parentModel.module&&this.parentModel.id?(t={id:this.parentModel.id,name:this.parentModel.data.summary_text},[3,3]):[3,1];case 1:return[4,this.promptProgramSelection()];case 2:t=e.sent(),e.label=3;case 3:return[4,this.backend.getRequest("module/BonusCards/program/"+t.id+"/validitydates").toPromise().catch(function(){return a.toast.sendToast(a.language.getLabel("ERR_FAILED_TO_EXECUTE"))})];case 4:return s=(s=e.sent())||{date_start:new moment,date_end:(new moment).add(1,"years")},this.addNew(__assign(__assign({},t),s)),[2]}})})},BonusCardNewButton.prototype.ngOnInit=function(){this.model.module="BonusCards",this.metadata.checkModuleAcl(this.model.module,"create")&&(this.disabled=!1)},BonusCardNewButton.prototype.addNew=function(e){var t;this.model.id=void 0,this.model.initialize(),e&&(t={bonusprogram_id:e.id,bonusprogram_name:e.name,purchase_date:this.modelUtilities.backend2spice(this.model.module,"purchase_date",e.date_start),valid_until:this.modelUtilities.backend2spice(this.model.module,"valid_until",e.date_end)}),this.model.addModel("",this.parentModel,t)},BonusCardNewButton.prototype.promptProgramSelection=function(){return __awaiter(this,void 0,void 0,function(){var t,s,a,i,o=this;return __generator(this,function(e){switch(e.label){case 0:return s={start:0,limit:1e3},t=[{sortfield:"last_run_date",sortdirection:"DESC"}],[4,this.backend.getList("BonusPrograms",t,s).toPromise().catch(function(){return o.toast.sendToast(o.language.getLabel("ERR_FAILED_TO_EXECUTE"))})];case 1:return null!=(s=e.sent())&&s.list&&0!==s.list.length?(a=s.list.map(function(e){return{value:e.id,display:e.summary_text}}),[4,this.modal.prompt("input","MSG_SELECT_PROGRAM","LBL_BONUSCARD","shade",null,a,!0).toPromise()]):(this.toast.sendToast("LBL_NO_PROGRAMS_FOUND","warning"),[2,void 0]);case 2:return(i=e.sent())?[2,{id:i,name:a.find(function(e){return e.value==i}).display}]:[2,void 0]}})})},__decorate([core_1.Component({selector:"bonus-cards-new-button",template:'<system-label label="LBL_NEW"></system-label>',providers:[services_1.model]}),__param(6,core_1.SkipSelf()),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.modal,services_1.toast,services_1.backend,services_1.model,services_1.model,services_1.modelutilities])],BonusCardNewButton)}(),BonusCardNewRelatedButton=function(u){function BonusCardNewRelatedButton(e,t,s,a,i,o,n,r,l){var d=u.call(this,e,t,s,a,i,o,n,r)||this;return d.language=e,d.metadata=t,d.modal=s,d.toast=a,d.backend=i,d.model=o,d.parentModel=n,d.modelUtilities=r,d.relatedModels=l,d.disabled=!0,d}return __extends(BonusCardNewRelatedButton,u),BonusCardNewRelatedButton.prototype.addNew=function(e){var t,s=this;this.model.id=void 0,e&&(t={bonusprogram_id:e.id,bonusprogram_name:e.name,purchase_date:this.modelUtilities.backend2spice(this.model.module,"purchase_date",e.date_start),valid_until:this.modelUtilities.backend2spice(this.model.module,"valid_until",e.date_end)}),this.parentModel.data.id||(this.parentModel.data.id=this.parentModel.id),this.model.addModel("",this.parentModel,t).subscribe(function(e){0!=e&&s.relatedModels.addItems([e])})},__decorate([core_1.Component({selector:"bonus-cards-new-related-button",template:'<system-label label="LBL_NEW"></system-label>',providers:[services_1.model]}),__param(6,core_1.SkipSelf()),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.modal,services_1.toast,services_1.backend,services_1.model,services_1.model,services_1.modelutilities,services_1.relatedmodels])],BonusCardNewRelatedButton)}(exports.BonusCardNewButton=BonusCardNewButton);exports.BonusCardNewRelatedButton=BonusCardNewRelatedButton;var ModuleBonusPrograms=function(){function ModuleBonusPrograms(){}return __decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents,directives_1.DirectivesModule],declarations:[BonusProgramValidityTypesField,BonusCardValidityDateField,BonusCardExtendButton,BonusCardBulkExtendButton,BonusCardNewButton,BonusCardNewRelatedButton]})],ModuleBonusPrograms)}();exports.ModuleBonusPrograms=ModuleBonusPrograms;