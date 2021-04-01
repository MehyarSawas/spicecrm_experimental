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
 * release: 2021.01.001
 * date: 2021-03-18 21:30:15
 * build: 2021.01.001.1616099416007
 **/
"use strict";var __decorate=this&&this.__decorate||function(e,t,o,s){var c,n=arguments.length,i=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,s);else for(var r=e.length-1;0<=r;r--)(c=e[r])&&(i=(n<3?c(i):3<n?c(t,o,i):c(t,o))||i);return 3<n&&i&&Object.defineProperty(t,o,i),i},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ModuleAsterisk=exports.AsteriskToolbarIndicator=void 0;var common_1=require("@angular/common"),core_1=require("@angular/core"),forms_1=require("@angular/forms"),services_1=require("../../services/services"),objectfields_1=require("../../objectfields/objectfields"),globalcomponents_1=require("../../globalcomponents/globalcomponents"),objectcomponents_1=require("../../objectcomponents/objectcomponents"),systemcomponents_1=require("../../systemcomponents/systemcomponents"),directives_1=require("../../directives/directives"),AsteriskToolbarIndicator=function(){function AsteriskToolbarIndicator(e,t,o,s,c){var n=this;this.language=e,this.backend=t,this.toast=o,this.dockedComposer=s,this.telephony=c,this.status="initial",this.callevent="",this.extension="",this.activeCall={callnumber:"",callevent:"",callid:"",direction:""},this.backend.getRequest("asterisk/userext").subscribe(function(e){e.extension&&(n.extension=e.extension,n.connect())})}return AsteriskToolbarIndicator.prototype.connect=function(){var t=this;this.socket=socketIo("http://asterisk.spicecrm.io:3000?room="+this.extension),this.socket.on("connect",function(e){t.status="connected"}),this.socket.on("disconnect",function(){t.status="disconnect"}),this.socket.on("message",function(e){t.setCallStatus(e.text)})},AsteriskToolbarIndicator.prototype.ngOnDestroy=function(){"connected"==this.status&&this.socket.disconnect()},Object.defineProperty(AsteriskToolbarIndicator.prototype,"color",{get:function(){var e="";switch(this.status){case"connected":e="green";break;case"disconnect":e="red";break;default:e="grey"}return e},enumerable:!1,configurable:!0}),AsteriskToolbarIndicator.prototype.toggleconnect=function(){"connected"==this.status?this.socket.disconnect():this.socket.connect()},AsteriskToolbarIndicator.prototype.setCallStatus=function(e){switch(this.callevent=e.event||"",this.activeCall.callevent=e.event,this.activeCall.callid=e.callId,this.activeCall.callnumber=e.outsideNo,this.activeCall.direction=e.direction,e.event){case"OUTBOUND":case"RING":this.telephony.calls.push(this.activeCall)}},AsteriskToolbarIndicator.prototype.simulatecall=function(){},__decorate([core_1.Component({template:'<div class="slds-grid slds-grid--vertical-align-center slds-m-horizontal--xx-small" (click)="toggleconnect()" (dblclick)="simulatecall()" [title]="status"><system-custom-icon icon="asterisk" size="x-small" [color]="color"></system-custom-icon><div class="slds-p-horizontal--xx-small">{{extension}}</div></div>'}),__metadata("design:paramtypes",[services_1.language,services_1.backend,services_1.toast,services_1.dockedComposer,services_1.telephony])],AsteriskToolbarIndicator)}();exports.AsteriskToolbarIndicator=AsteriskToolbarIndicator;var ModuleAsterisk=function(){function ModuleAsterisk(){}return __decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,objectfields_1.ObjectFields,globalcomponents_1.GlobalComponents,objectcomponents_1.ObjectComponents,systemcomponents_1.SystemComponents,directives_1.DirectivesModule],declarations:[AsteriskToolbarIndicator],providers:[services_1.userpreferences]})],ModuleAsterisk)}();exports.ModuleAsterisk=ModuleAsterisk;