/** 
 * © 2015 - 2021 aac services k.s. All rights reserved.
 * release: 2021.01.001
 * date: 2021-04-05 19:59:36
 * build: 2021.01.001.1617645576203
 **/
"use strict";var __decorate=this&&this.__decorate||function(e,s,l,o){var t,a=arguments.length,i=a<3?s:null===o?o=Object.getOwnPropertyDescriptor(s,l):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,s,l,o);else for(var c=e.length-1;0<=c;c--)(t=e[c])&&(i=(a<3?t(i):3<a?t(s,l,i):t(s,l))||i);return 3<a&&i&&Object.defineProperty(s,l,i),i},__metadata=this&&this.__metadata||function(e,s){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,s)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ModuleGoogleAPI=exports.GoogleAPISettings=void 0;var common_1=require("@angular/common"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),directives_1=require("../../directives/directives"),objectfields_1=require("../../objectfields/objectfields"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),services_1=require("../../services/services"),GoogleAPISettings=function(){function GoogleAPISettings(e,s,l,o){this.language=e,this.metadata=s,this.backend=l,this.modal=o,this.configvalues={},this.loading=!1,this.serviceuserscope={calendar:!1,gmail_radonly:!1,gmail_compose:!1,gmail_modify:!1,contacts:!1}}return GoogleAPISettings.prototype.ngOnInit=function(){var s=this;this.loading=!0,this.backend.getRequest("configurator/editor/googleapi").subscribe(function(e){s.configvalues=e,s.loadScope(),s.loading=!1})},GoogleAPISettings.prototype.save=function(){this.backend.postRequest("configurator/editor/googleapi",[],this.configvalues)},GoogleAPISettings.prototype.loadScope=function(){for(var e=[],s=0,l=e=this.configvalues.hasOwnProperty("serviceuserscope")?this.configvalues.serviceuserscope.split(" "):e;s<l.length;s++)switch(l[s]){case"https://www.googleapis.com/auth/calendar":this.serviceuserscope.calendar=!0;break;case"https://www.googleapis.com/auth/contacts":this.serviceuserscope.contacts=!0;break;case"https://www.googleapis.com/auth/gmail.readonly":this.serviceuserscope.gmail_radonly=!0;break;case"https://www.googleapis.com/auth/gmail.compose":this.serviceuserscope.gmail_compose=!0;break;case"https://www.googleapis.com/auth/gmail.modify":this.serviceuserscope.gmail_modify=!0}},GoogleAPISettings.prototype.setScope=function(){var e=[];this.serviceuserscope.calendar&&e.push("https://www.googleapis.com/auth/calendar"),this.serviceuserscope.contacts&&e.push("https://www.googleapis.com/auth/contacts"),this.serviceuserscope.gmail_radonly&&e.push("https://www.googleapis.com/auth/gmail.readonly"),this.serviceuserscope.gmail_compose&&e.push("https://www.googleapis.com/auth/gmail.compose"),this.serviceuserscope.gmail_modify&&e.push("https://www.googleapis.com/auth/gmail.modify"),this.configvalues.serviceuserscope=e.join(" ")},__decorate([core_1.Component({template:'<div class="slds-grid slds-grid_vertical-align-center slds-grid--align-spread slds-p-around--small slds-border--bottom"><h2 class="slds-text-heading_medium"><system-label label="LBL_GOOGLEAPI_SETTINGS"></system-label></h2><button class="slds-button slds-button--brand" (click)="save()"><system-label label="LBL_SAVE"></system-label></button></div><div [system-overlay-loading-spinner]="loading" class="slds-p-horizontal--small slds-theme--default" system-to-bottom-noscroll><div class="slds-grid slds-grid--vertical-align-center slds-p-vertical--xx-small"><system-label class="slds-size--1-of-4" label="LBL_GOOGLE_MAPS_KEY"></system-label> <input type="text" class="slds-input slds-grow" [disabled]="loading" [(ngModel)]="configvalues.mapskey"></div><div class="slds-grid slds-grid--vertical-align-center slds-p-vertical--xx-small"><system-label class="slds-size--1-of-4" label="LBL_GOOGLE_CLIENTID"></system-label> <input type="text" class="slds-input slds-grow" [disabled]="loading" [(ngModel)]="configvalues.clientid"></div><div class="slds-grid slds-p-vertical--xx-small"><system-label class="slds-size--1-of-4 slds-p-vertical--xx-small" label="LBL_GOOGLE_CLIENTJSON"></system-label> <textarea class="slds-input slds-grow" rows="7" [disabled]="loading" [(ngModel)]="configvalues.calendarconfig"></textarea></div><div class="slds-grid slds-p-vertical--xx-small"><system-label class="slds-size--1-of-4 slds-p-vertical--xx-small" label="LBL_GOOGLE_SERVICEUSERKEY"></system-label> <textarea class="slds-input slds-grow" rows="7" [disabled]="loading" [(ngModel)]="configvalues.serviceuserkey"></textarea></div><div class="slds-grid slds-p-vertical--xx-small"><system-label class="slds-size--1-of-4 slds-p-vertical--xx-small" label="LBL_GOOGLE_SERVICEUSERSCOPE"></system-label><div class="slds-grow slds-form-element__control"><system-checkbox [(ngModel)]="serviceuserscope.calendar" (change)="setScope()" [disabled]="loading"><system-label label="LBL_GOOGLE_CALENDAR"></system-label></system-checkbox><system-checkbox [(ngModel)]="serviceuserscope.gmail_radonly" (change)="setScope()" [disabled]="loading"><system-label label="LBL_GOOGLE_GMAIL_READONLY"></system-label></system-checkbox><system-checkbox [(ngModel)]="serviceuserscope.gmail_compose" (change)="setScope()" [disabled]="loading"><system-label label="LBL_GOOGLE_GMAIL_COMPOSE"></system-label></system-checkbox><system-checkbox [(ngModel)]="serviceuserscope.gmail_modify" (change)="setScope()" [disabled]="loading"><system-label label="LBL_GOOGLE_GMAIL_MODIFY"></system-label></system-checkbox><system-checkbox [(ngModel)]="serviceuserscope.contacts" (change)="setScope()" [disabled]="loading"><system-label label="LBL_GOOGLE_CONTACTS"></system-label></system-checkbox></div></div><div class="slds-grid slds-grid--vertical-align-center slds-p-vertical--xx-small"><system-label class="slds-size--1-of-4" label="LBL_GOOGLE_NOTIFICATIONHOST"></system-label> <input type="text" class="slds-input slds-grow" [disabled]="loading" [(ngModel)]="configvalues.notificationhost"></div></div>'}),__metadata("design:paramtypes",[services_1.language,services_1.metadata,services_1.backend,services_1.modal])],GoogleAPISettings)}();exports.GoogleAPISettings=GoogleAPISettings;var ModuleGoogleAPI=function(){function ModuleGoogleAPI(){}return __decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents,directives_1.DirectivesModule],declarations:[GoogleAPISettings]})],ModuleGoogleAPI)}();exports.ModuleGoogleAPI=ModuleGoogleAPI;