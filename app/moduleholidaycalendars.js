/*!
 * 
 *                     aacService
 *
 *                     release: 2023.03.001
 *
 *                     date: 2024-01-03 13:43:56
 *
 *                     build: 2023.03.001.1704285836024
 *
 */
"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([["src_modules_holidaycalendars_moduleholidaycalendars_ts"],{48395:(e,t,s)=>{s.r(t),s.d(t,{ModuleHolidayCalendars:()=>w});var a=s(44755),l=s(95030),d=s(84357),i=s(53190),o=s(34826),n=s(19784),r=s(57239),c=s(55710),m=s(42644),u=s(62242),y=s(55329),h=s(4154),g=s(20586),p=s(72656),C=s(83463),b=s(93333),f=s(7763),H=s(73194),L=s(23814),Z=s(66040),_=s(37588),v=s(31058);let x=(()=>{class HolidayCalendarListDays{language;model;metadata;relatedmodels;calendarid;componentconfig;listfields;constructor(e,t,s,a){this.language=e,this.model=t,this.metadata=s,this.relatedmodels=a,this.relatedmodels.module="SystemHolidayCalendars",this.relatedmodels.relatedModule="SystemHolidayCalendarDays",this.relatedmodels.linkName="systemholidaycalendardays",this.relatedmodels.loaditems=1e3,this.componentconfig=this.metadata.getComponentConfig("HolidayCalendarListDays","SystemHolidayCalendarDays"),this.listfields=this.metadata.getFieldSetFields(this.componentconfig.fieldset)}ngOnChanges(e){this.relatedmodels.id=this.calendarid,this.relatedmodels.resetData(),this.relatedmodels.getData().subscribe((e=>{this.relatedmodels.items.sort(((e,t)=>moment(e.holiday_date).isBefore(moment(t.holiday_date))?1:-1))}))}static ɵfac=function(e){return new(e||HolidayCalendarListDays)(u.Y36(y.d),u.Y36(c.o),u.Y36(h.Pu),u.Y36(Z.j))};static ɵcmp=u.Xpm({type:HolidayCalendarListDays,selectors:[["holiday-calendar-list-days"]],inputs:{calendarid:"calendarid"},features:[u._Bn([Z.j]),u.TTD],decls:2,vars:2,consts:[["system-to-bottom",""],[3,"listfields","listitemactionset"]],template:function(e,t){1&e&&(u.TgZ(0,"div",0),u._UZ(1,"object-relatedlist-table",1),u.qZA()),2&e&&(u.xp6(1),u.Q6J("listfields",t.listfields)("listitemactionset",t.componentconfig.actionset))},dependencies:[_.K,v.H],encapsulation:2})}return HolidayCalendarListDays})();const A=function(e){return{"slds-theme--inverse":e}},D=function(e){return{module:"SystemHolidayCalendars",data:e}};function M(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"div",15),u.NdJ("click",(function(){const t=u.CHM(e).$implicit,s=u.oxw();return u.KtG(s.activeCalendar=t.id)})),u.TgZ(1,"div",16)(2,"span"),u._uU(3),u.qZA(),u._UZ(4,"object-action-menu",17),u.qZA()()}if(2&e){const e=t.$implicit,s=u.oxw();u.Q6J("ngClass",u.VKq(5,A,e.id==s.activeCalendar)),u.xp6(1),u.Q6J("system-model-provider",u.VKq(7,D,e)),u.xp6(2),u.Oqu(e.name),u.xp6(1),u.Q6J("buttonsize","x-small")("actionset",s.actionset)}}function J(e,t){if(1&e&&u._UZ(0,"holiday-calendar-list-days",18),2&e){const e=u.oxw();u.Q6J("calendarid",e.activeCalendar)}}let k=(()=>{class HolidayCalendarList{language;modellist;model;metadata;_activeCalendarID;actionset;constructor(e,t,s,a){this.language=e,this.modellist=t,this.model=s,this.metadata=a;let l=this.metadata.getComponentConfig("HolidayCalendarList","SystemHolidayCalendars");this.actionset=l.actionset}ngOnInit(){this.modellist.initialize("SystemHolidayCalendars"),this.modellist.getListData(),this.model.module="SystemHolidayCalendars"}refresh(){this.activeCalendar=void 0,this.modellist.reLoadList()}set activeCalendar(e){this._activeCalendarID=e}get activeCalendar(){return this._activeCalendarID}addCalendar(){this.model.module="SystemHolidayCalendars",this.model.id="",this.model.initialize(),this.model.addModel()}addDay(){this.model.module="SystemHolidayCalendarDays",this.model.id="",this.model.initialize(),this.model.addModel(null,null,{systemholidaycalendar_id:this.activeCalendar})}static ɵfac=function(e){return new(e||HolidayCalendarList)(u.Y36(y.d),u.Y36(m.t),u.Y36(c.o),u.Y36(h.Pu))};static ɵcmp=u.Xpm({type:HolidayCalendarList,selectors:[["holiday-calendar-list"]],features:[u._Bn([m.t,c.o])],decls:17,vars:3,consts:[[1,"slds-grid","slds-grid_vertical-align-center","slds-grid--align-spread","slds-p-around--small"],[1,"slds-text-heading_medium"],["module","SystemHolidayCalendars"],[1,"slds-grid"],[1,"slds-button","slds-button--neutral",3,"click"],["icon","add"],["label","LBL_CALENDAR"],[1,"slds-button","slds-button--neutral",3,"disabled","click"],["label","LBL_DAY"],[1,"slds-button","slds-button_icon","slds-button_icon-border-filled",3,"click"],["icon","refresh"],["system-to-bottom-noscroll","","system-view-provider","",1,"slds-size--1-of-4","slds-theme--default"],["class","slds-box--border slds-m-around--xx-small",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"slds-size--3-of-4","slds-border--left","slds-theme--shade"],[3,"calendarid",4,"ngIf"],[1,"slds-box--border","slds-m-around--xx-small",3,"ngClass","click"],[1,"slds-p-around--x-small","slds-grid","slds-grid--vertical-align-center","slds-grid--align-spread",3,"system-model-provider"],[3,"buttonsize","actionset"],[3,"calendarid"]],template:function(e,t){1&e&&(u.TgZ(0,"div",0)(1,"h2",1),u._UZ(2,"system-label-modulename",2),u.qZA(),u.TgZ(3,"div",3)(4,"button",4),u.NdJ("click",(function(){return t.addCalendar()})),u._UZ(5,"system-button-icon",5)(6,"system-label",6),u.qZA(),u.TgZ(7,"button",7),u.NdJ("click",(function(){return t.addDay()})),u._UZ(8,"system-button-icon",5)(9,"system-label",8),u.qZA(),u.TgZ(10,"button",9),u.NdJ("click",(function(){return t.refresh()})),u._UZ(11,"system-button-icon",10),u.qZA()()(),u.TgZ(12,"div",3)(13,"div",11),u.YNc(14,M,5,9,"div",12),u.qZA(),u.TgZ(15,"div",13),u.YNc(16,J,1,1,"holiday-calendar-list-days",14),u.qZA()()),2&e&&(u.xp6(7),u.Q6J("disabled",!t.activeCalendar),u.xp6(7),u.Q6J("ngForOf",t.modellist.listData.list),u.xp6(2),u.Q6J("ngIf",t.activeCalendar))},dependencies:[a.mk,a.sg,a.O5,g.g,p.J,C._,b.M,f.u,H.t,L.V,x],encapsulation:2})}return HolidayCalendarList})();var Y=s(14505),T=s(13278),q=s(59621),B=s(83499),O=s(75767),S=s(1916);let z=(()=>{class HolidayCalendarListGetHolidaysModal{backend;model;toast;self;country;year;constructor(e,t,s){this.backend=e,this.model=t,this.toast=s}close(){this.self.destroy()}load(){this.backend.getRequest(`module/SystemHolidayCalendars/${this.model.id}/calendarific/${this.country}/${this.year}`).subscribe((e=>{this.close()}),(e=>{this.toast.sendToast("Error loading Holidays","error"),console.log(e)}))}static ɵfac=function(e){return new(e||HolidayCalendarListGetHolidaysModal)(u.Y36(Y.y),u.Y36(c.o),u.Y36(T.A))};static ɵcmp=u.Xpm({type:HolidayCalendarListGetHolidaysModal,selectors:[["holiday-calendar-list-get-holidays-modal"]],decls:16,vars:2,consts:[["size","prompt"],[3,"close"],["label","LBL_LOAD_HOLIDAYS"],[1,"slds-grid","slds-grid--vertical"],[1,"slds-grid","slds-p-vertical--x-small"],["label","LBL_COUNTRY",1,"slds-size--1-of-2"],["maxlength","2","type","text",1,"slds-input","slds-size--1-of-2",3,"ngModel","ngModelChange"],["label","LBL_YEAR",1,"slds-size--1-of-2"],["maxlength","4","type","number",1,"slds-input","slds-size--1-of-2",3,"ngModel","ngModelChange"],[1,"slds-button","slds-button--neutral",3,"click"],["label","LBL_CANCEL"],[1,"slds-button","slds-button--brand",3,"click"],["label","LBL_LOAD"]],template:function(e,t){1&e&&(u.TgZ(0,"system-modal",0)(1,"system-modal-header",1),u.NdJ("close",(function(){return t.close()})),u._UZ(2,"system-label",2),u.qZA(),u.TgZ(3,"system-modal-content")(4,"div",3)(5,"div",4),u._UZ(6,"system-label",5),u.TgZ(7,"input",6),u.NdJ("ngModelChange",(function(e){return t.country=e})),u.qZA()(),u.TgZ(8,"div",4),u._UZ(9,"system-label",7),u.TgZ(10,"input",8),u.NdJ("ngModelChange",(function(e){return t.year=e})),u.qZA()()()(),u.TgZ(11,"system-modal-footer")(12,"button",9),u.NdJ("click",(function(){return t.close()})),u._UZ(13,"system-label",10),u.qZA(),u.TgZ(14,"button",11),u.NdJ("click",(function(){return t.load()})),u._UZ(15,"system-label",12),u.qZA()()()),2&e&&(u.xp6(7),u.Q6J("ngModel",t.country),u.xp6(3),u.Q6J("ngModel",t.year))},dependencies:[l.Fj,l.wV,l.JJ,l.nD,l.On,C._,q.j,B.x,O.p,S.y],encapsulation:2})}return HolidayCalendarListGetHolidaysModal})();var N=s(44044),U=s(26625);let j=(()=>{class HolidayCalendarListGetHolidaysButton{model;modal;configuration;injector;disabled=!0;constructor(e,t,s,a){this.model=e,this.modal=t,this.configuration=s,this.injector=a,this.enableButton()}enableButton(){let e=this.configuration.getCapabilityConfig("holidaycalendars");e?.calendarific&&(this.disabled=!1)}execute(){this.modal.openModal("HolidayCalendarListGetHolidaysModal",!0,this.injector)}static ɵfac=function(e){return new(e||HolidayCalendarListGetHolidaysButton)(u.Y36(c.o),u.Y36(N.o),u.Y36(U.C),u.Y36(u.zs3))};static ɵcmp=u.Xpm({type:HolidayCalendarListGetHolidaysButton,selectors:[["holiday-calendar-list-get-holidays-button"]],decls:1,vars:0,consts:[["label","LBL_LOAD_HOLIDAYS"]],template:function(e,t){1&e&&u._UZ(0,"system-label",0)},dependencies:[C._],encapsulation:2})}return HolidayCalendarListGetHolidaysButton})(),w=(()=>{class ModuleHolidayCalendars{static ɵfac=function(e){return new(e||ModuleHolidayCalendars)};static ɵmod=u.oAB({type:ModuleHolidayCalendars});static ɵinj=u.cJS({imports:[a.ez,l.u5,i.ObjectFields,o.GlobalComponents,n.ObjectComponents,r.SystemComponents,d.o]})}return ModuleHolidayCalendars})();("undefined"==typeof ngJitMode||ngJitMode)&&u.kYT(w,{declarations:[k,x,z,j],imports:[a.ez,l.u5,i.ObjectFields,o.GlobalComponents,n.ObjectComponents,r.SystemComponents,d.o],exports:[x]})}}]);