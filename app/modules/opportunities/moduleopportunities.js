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
"use strict";var __decorate=this&&this.__decorate||function(e,t,s,n){var i,l=arguments.length,o=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,n);else for(var a=e.length-1;0<=a;a--)(i=e[a])&&(o=(l<3?i(o):3<l?i(t,s,o):i(t,s))||o);return 3<l&&o&&Object.defineProperty(t,s,o),o},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ModuleOpportunities=exports.OpportunityRevenueLineItem=exports.OpportunityRevenueLinesCreator=exports.OpportunityRevenueLines=exports.OpportunityRevenueLinesTab=exports.OpportunityRevenueLinesActiveLinesPipe=void 0;var common_1=require("@angular/common"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),directives_1=require("../../directives/directives"),objectfields_1=require("../../objectfields/objectfields"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),services_1=require("../../services/services"),OpportunityRevenueLinesActiveLinesPipe=function(){function e(){}return e.prototype.transform=function(e,t){for(var s=[],n=0,i=e;n<i.length;n++){var l=i[n];1!=l.deleted&&s.push(l)}return s},__decorate([core_1.Pipe({name:"opportunityrevenuelinesactivelinespipe",pure:!1})],e)}();exports.OpportunityRevenueLinesActiveLinesPipe=OpportunityRevenueLinesActiveLinesPipe;var OpportunityRevenueLinesTab=function(){function OpportunityRevenueLinesTab(e,t,s){this.language=e,this.metadata=t,this.model=s}return OpportunityRevenueLinesTab.prototype.ngOnInit=function(){},Object.defineProperty(OpportunityRevenueLinesTab.prototype,"canSplit",{get:function(){return this.model.getFieldValue("amount")&&this.model.getFieldValue("date_closed")},enumerable:!1,configurable:!0}),__decorate([core_1.Component({template:'<system-collapsable-tab tabtitle="LBL_OPPORTUNITYREVENUELINES"><div *ngIf="canSplit; else notready"><opportunity-revenue-lines></opportunity-revenue-lines></div><ng-template #notready><div class="slds-p-around--small slds-align--absolute-center"><system-label label="MSG_ENTERDATEANDAMOUNT"></system-label></div></ng-template></system-collapsable-tab>'}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.model])],OpportunityRevenueLinesTab)}();exports.OpportunityRevenueLinesTab=OpportunityRevenueLinesTab;var OpportunityRevenueLines=function(){function OpportunityRevenueLines(e,t,s,n,i,l,o){var a=this;this.language=e,this.metadata=t,this.model=s,this.view=n,this.modal=i,this.changeDetectorRef=l,this.viewContainerRef=o,this.revenueLines=[],this.model.data$.subscribe(function(e){a.loadRevenueLines(),a.checkCloseDate(),a.checkAmount(),a.checkConsistency()}),this.view.mode$.subscribe(function(e){a.loadRevenueLines(),a.checkConsistency()})}return OpportunityRevenueLines.prototype.ngOnInit=function(){this.loadRevenueLines(),this.checkCloseDate(),this.checkAmount(),this.checkConsistency()},Object.defineProperty(OpportunityRevenueLines.prototype,"canSplit",{get:function(){return this.closeDate&&this.totalAmount},enumerable:!1,configurable:!0}),Object.defineProperty(OpportunityRevenueLines.prototype,"hasActiveLines",{get:function(){return 0<this.revenueLines.filter(function(e){return 1!=e.deleted}).length},enumerable:!1,configurable:!0}),OpportunityRevenueLines.prototype.loadRevenueLines=function(){this.revenueLines=[];for(var e=0,t=this.model.getRelatedRecords("opportunityrevenuelines");e<t.length;e++){var s=t[e];this.revenueLines.push(s)}this.sortRevenueLines()},OpportunityRevenueLines.prototype.checkConsistency=function(){if(this.view.isEditMode()){var e=this.model.getField("amount");switch(this.model.getFieldValue("opportunityrevenuesplit")){case"split":for(var t=0,s=0,n=this.revenueLines;s<n.length;s++){var i=n[s];1!=i.deleted&&(t+=i.amount)}e!=t?this.model.setFieldMessage("error","total amount does not match","opportunityrevenuelines","opportunityrevenuelines"):this.model.resetFieldMessages("opportunityrevenuelines");break;case"rampup":var l=this.revenueLines.filter(function(e){return 1!=e.delete}).slice(-1).pop();l&&l.amount==e?this.model.resetFieldMessages("opportunityrevenuelines"):this.model.setFieldMessage("error","rampup amount does not match","opportunityrevenuelines","opportunityrevenuelines");break;default:this.model.resetFieldMessages("opportunityrevenuelines")}}},OpportunityRevenueLines.prototype.checkCloseDate=function(){var l=this;this.closeDate?"none"==this.model.getFieldValue("opportunityrevenuesplit")||this.model.getFieldValue("date_closed").isSame(this.closeDate,"day")||this.modal.confirm(this.language.getLabel("MSG_UPDATE_CHANGED_DATE",null,"long"),this.language.getLabel("MSG_UPDATE_CHANGED_DATE"),"shade").subscribe(function(e){if(e){for(var t=moment.duration(l.model.getFieldValue("date_closed").diff(l.closeDate)),s=0,n=l.revenueLines;s<n.length;s++){var i=n[s];1!=i.deleted&&i.revenue_date.add(t)}l.changeDetectorRef.detectChanges()}l.closeDate=l.model.getFieldValue("date_closed")}):this.closeDate=this.model.getFieldValue("date_closed")},OpportunityRevenueLines.prototype.checkAmount=function(){var l=this;this.totalAmount?"none"!=this.model.getFieldValue("opportunityrevenuesplit")&&this.model.getFieldValue("amount")!=this.totalAmount&&this.modal.confirm(this.language.getLabel("MSG_UPDATE_CHANGED_AMOUNT",null,"long"),this.language.getLabel("MSG_UPDATE_CHANGED_AMOUNT"),"shade").subscribe(function(e){if(e){for(var t=l.model.getFieldValue("amount")/l.totalAmount,s=0,n=l.revenueLines;s<n.length;s++){var i=n[s];1!=i.deleted&&(i.amount=Math.round(i.amount*t*100)/100)}l.changeDetectorRef.detectChanges()}l.totalAmount=l.model.getFieldValue("amount"),l.checkConsistency()}):this.totalAmount=this.model.getFieldValue("amount")},OpportunityRevenueLines.prototype.sortRevenueLines=function(){this.revenueLines.sort(function(e,t){return new moment(e.revenue_date).isBefore(new moment(t.revenue_date))?-1:1})},Object.defineProperty(OpportunityRevenueLines.prototype,"fieldMessages",{get:function(){if(this.view.isEditMode()){var e=this.model.getFieldMessages("opportunityrevenuelines");return e||[]}return[]},enumerable:!1,configurable:!0}),OpportunityRevenueLines.prototype.revalidate=function(){this.loadRevenueLines(),this.checkConsistency()},Object.defineProperty(OpportunityRevenueLines.prototype,"isEditing",{get:function(){return this.view.isEditMode()},enumerable:!1,configurable:!0}),OpportunityRevenueLines.prototype.initalizeLines=function(){var t=this;this.modal.openModal("OpportunityRevenueLinesCreator",!0,this.viewContainerRef.injector).subscribe(function(e){e.instance.generatorResult.subscribe(function(e){t.model.setField("opportunityrevenuesplit",e.opportunityrevenuesplit),t.model.setRelatedRecords("opportunityrevenuelines",e.revenueLines),t.loadRevenueLines(),t.checkConsistency()})})},OpportunityRevenueLines.prototype.addLine=function(){var e={id:this.model.utils.generateGuid(),amount:0,amount_usdollar:0,revenue_date:this.closeDate,deleted:!1};this.revenueLines.push(e),this.sortRevenueLines(),this.model.setRelatedRecords("opportunityrevenuelines",this.revenueLines)},OpportunityRevenueLines.prototype.deleteLine=function(t){var s=this;this.revenueLines.some(function(e){return e.id==t?(e.deleted=!0,s.model.setRelatedRecords("opportunityrevenuelines",s.revenueLines),!0):void 0}),this.hasActiveLines?this.loadRevenueLines():this.model.setField("opportunityrevenuesplit","none"),this.checkConsistency()},__decorate([core_1.Component({selector:"opportunity-revenue-lines",template:'<div *ngIf="hasActiveLines; else initialize"><div class="slds-p-around--x-small slds-grid slds-grid--vertical-align-center slds-grid--align-spread"><field-container field="opportunityrevenuesplit" [fieldconfig]="{readonly: true}"></field-container><field-container field="amount" [fieldconfig]="{readonly: true}"></field-container><field-container field="date_closed" [fieldconfig]="{readonly: true}"></field-container></div><table *ngIf="hasActiveLines" class="slds-table slds-table_cell-buffer slds-table_bordered"><thead><tr class="slds-line-height_reset"><th scope="col"><div class="slds-truncate"><system-label-fieldname module="OpportunityRevenueLines" field="revenue_date"></system-label-fieldname></div></th><th scope="col"><div class="slds-truncate"><system-label-fieldname module="OpportunityRevenueLines" field="amount"></system-label-fieldname></div></th><th class="slds-cell-shrink" scope="col"></th></tr></thead><tbody><tr class="slds-hint-parent" opportunity-revenue-line-item *ngFor="let revenueLine of revenueLines|opportunityrevenuelinesactivelinespipe" [revenueLine]="revenueLine" [closeDate]="closeDate" [totalAmount]="totalAmount" (update)="revalidate()" (delete)="deleteLine(revenueLine.id)"></tr></tbody></table><div *ngIf="isEditing" class="slds-p-around--small slds-grid slds-grid--vertical-align-center slds-grid--align-spread slds-wrap"><div class="slds-size--1-of-1 slds-large-size--1-of-2"><field-messages fieldname="opportunityrevenuelines"></field-messages></div><div class="slds-size--1-of-1 slds-large-size--1-of-2 slds-text-align--right"><button class="slds-button slds-button_icon slds-button_icon slds-button--icon-border" (click)="addLine()"><system-button-icon [icon]="\'add\'"></system-button-icon></button></div></div></div><ng-template #initialize><div class="slds-p-around--small slds-align--absolute-center"><button class="slds-button slds-button--neutral" [disabled]="!view.isEditMode()" (click)="initalizeLines()">initialize</button></div></ng-template>'}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.model,services_1.view,services_1.modal,core_1.ChangeDetectorRef,core_1.ViewContainerRef])],OpportunityRevenueLines)}();exports.OpportunityRevenueLines=OpportunityRevenueLines;var OpportunityRevenueLinesCreator=function(){function OpportunityRevenueLinesCreator(e,t,s){this.language=e,this.metadata=t,this.model=s,this.revenueLines=[],this.splittype="split",this.nooflines=1,this.periodcount=1,this.periodtype="M",this.generatorResult=new core_1.EventEmitter,this.componentconfig=this.metadata.getComponentConfig("OpportunityRevenueLinesCreator","OpportunityRevenueLines"),this.generate()}return Object.defineProperty(OpportunityRevenueLinesCreator.prototype,"canGenerate",{get:function(){return this.nooflines&&this.periodcount},enumerable:!1,configurable:!0}),OpportunityRevenueLinesCreator.prototype.close=function(){this.self.destroy()},OpportunityRevenueLinesCreator.prototype.generate=function(){this.revenueLines=[];for(var e=new moment(this.model.getFieldValue("date_closed")),t=0;t<this.nooflines;){var s=this.model.getFieldValue("amount")/this.nooflines;"rampup"==this.splittype&&(s*=t+1);s={id:this.model.utils.generateGuid(),amount:s,revenue_date:new moment(e),deleted:!1};this.revenueLines.push(s),e.add(this.periodcount,this.periodtype),t++}},OpportunityRevenueLinesCreator.prototype.deleteLine=function(t){var s=this;this.revenueLines.some(function(e){return e.id==t?(e.deleted=!0,s.model.setRelatedRecords("opportunityrevenuelines",s.revenueLines),!0):void 0})},OpportunityRevenueLinesCreator.prototype.save=function(){this.generatorResult.emit({opportunityrevenuesplit:this.splittype,revenueLines:this.revenueLines}),this.close()},__decorate([core_1.Component({template:'<system-modal><system-modal-header (close)="close()"><system-label label="LBL_OPPORTUNITYREVENUELINES"></system-label></system-modal-header><system-modal-content [grow]="true" margin="none"><system-collapsable-tab tabtitle="LBL_OPPORTUNITY"><div class="slds-p-around--small"><object-record-fieldset [fieldset]="componentconfig.fieldset"></object-record-fieldset></div></system-collapsable-tab><system-collapsable-tab tabtitle="LBL_GENERATOR"><div class="slds-p-around--small"><div class="slds-grid slds-grid--vertical-align-center slds-gutters_direct-x-small"><div><field-label fieldname="opportunityrevenuesplit"></field-label><div class="slds-col slds-grid slds-grid--vertical-align-center"><div class="slds-radio"><input type="radio" id="splittypesplit" value="split" name="splittype" [(ngModel)]="splittype"> <label class="slds-radio__label" for="splittypesplit"><span class="slds-radio_faux"></span> <span class="slds-form-element__label"><system-label label="LBL_SPLIT"></system-label></span></label></div><div class="slds-radio"><input type="radio" id="splittyperampup" value="rampup" name="splittype" [(ngModel)]="splittype"> <label class="slds-radio__label" for="splittyperampup"><span class="slds-radio_faux"></span> <span class="slds-form-element__label"><system-label label="LBL_RAMPUP"></system-label></span></label></div></div></div><div class="slds-col"><div class="slds-form-element"><label class="slds-form-element__label"><system-label label="LBL_OPPORTUNITYREVENUELINES"></system-label></label><div class="slds-form-element__control"><input type="text" [placeholder]="language.getLabel(\'LBL_OPPORTUNITYREVENUELINES\')" class="slds-input" [(ngModel)]="nooflines"></div></div></div><div class="slds-col"><div class="slds-form-element"><label class="slds-form-element__label"><system-label label="LBL_EVERY"></system-label></label><div class="slds-form-element__control"><input type="text" [placeholder]="language.getLabel(\'LBL_EVERY\')" class="slds-input" [(ngModel)]="periodcount"></div></div></div><div class="slds-col"><div class="slds-form-element"><label class="slds-form-element__label"><system-label label="LBL_PERIOD"></system-label></label><div class="slds-form-element__control"><div class="slds-select_container"><select class="slds-select" [(ngModel)]="periodtype"><option value="M"><system-label label="LBL_MONTH"></system-label></option><option value="y"><system-label label="LBL_YEAR"></system-label></option></select></div></div></div></div></div><div class="slds-p-top--x-small slds-text-align_right"><button class="slds-button slds-button--brand" [disabled]="!canGenerate" (click)="generate()"><system-label label="LBL_GENERATE"></system-label></button></div></div></system-collapsable-tab><system-collapsable-tab tabtitle="LBL_OPPORTUNITYREVENUELINES"><table class="slds-table slds-table_cell-buffer slds-table_bordered"><thead><tr class="slds-line-height_reset"><th scope="col"><div class="slds-truncate"><system-label-fieldname module="OpportunityRevenueLines" field="revenue_date"></system-label-fieldname></div></th><th scope="col"><div class="slds-truncate"><system-label-fieldname module="OpportunityRevenueLines" field="amount"></system-label-fieldname></div></th><th class="slds-cell-shrink" scope="col"></th></tr></thead><tbody><tr class="slds-hint-parent" opportunity-revenue-line-item *ngFor="let revenueLine of revenueLines" [revenueLine]="revenueLine" [closeDate]="closeDate" [totalAmount]="totalAmount" (delete)="deleteLine(revenueLine.id)"></tr></tbody></table></system-collapsable-tab></system-modal-content><system-modal-footer><button class="slds-button slds-button--neutral" (click)="close()"><system-label label="LBL_CLOSE"></system-label></button> <button class="slds-button slds-button--brand" (click)="save()"><system-label label="LBL_OK"></system-label></button></system-modal-footer></system-modal>'}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.model])],OpportunityRevenueLinesCreator)}();exports.OpportunityRevenueLinesCreator=OpportunityRevenueLinesCreator;var OpportunityRevenueLineItem=function(){function e(e,t,s){var n=this;this.model=e,this.view=t,this.language=s,this.update=new core_1.EventEmitter,this.delete=new core_1.EventEmitter,this.model.module="OpportunityRevenueLines",this.model.data$.subscribe(function(e){n.update.emit(!0)})}return e.prototype.ngOnChanges=function(){this.model.id=this.revenueLine.id,this.model.data=this.model.utils.backendModel2spice(this.model.module,this.revenueLine)},Object.defineProperty(e.prototype,"disabled",{get:function(){return!this.view.isEditMode()},enumerable:!1,configurable:!0}),e.prototype.deleteitem=function(){this.delete.emit(!0)},__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"revenueLine",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"closeDate",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"totalAmount",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],e.prototype,"update",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],e.prototype,"delete",void 0),__decorate([core_1.Component({selector:"[opportunity-revenue-line-item]",template:'<td [attr.data-label]="language.getFieldDisplayName(\'OpportunityRevenueLines\', \'revenue_date\')"><field-container field="revenue_date" fielddisplayclass="fielddisplayclass" [fieldconfig]="{hidelabel: true}"></field-container></td><td [attr.data-label]="language.getFieldDisplayName(\'OpportunityRevenueLines\', \'amount\')"><field-container field="amount" fielddisplayclass="fielddisplayclass" [fieldconfig]="{hidelabel: true}"></field-container></td><td><button class="slds-button slds-button_icon" [disabled]="disabled" (click)="deleteitem()"><system-button-icon icon="clear"></system-button-icon></button></td>',providers:[services_1.model]}),__metadata("design:paramtypes",[services_1.model,services_1.view,services_1.language])],e)}();exports.OpportunityRevenueLineItem=OpportunityRevenueLineItem;var ModuleOpportunities=function(){function ModuleOpportunities(){}return __decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents,directives_1.DirectivesModule],declarations:[OpportunityRevenueLinesActiveLinesPipe,OpportunityRevenueLinesTab,OpportunityRevenueLines,OpportunityRevenueLinesCreator,OpportunityRevenueLineItem]})],ModuleOpportunities)}();exports.ModuleOpportunities=ModuleOpportunities;