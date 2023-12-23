/*!
 * 
 *                     aacService
 *
 *                     release: 2023.03.001
 *
 *                     date: 2023-12-23 08:43:25
 *
 *                     build: 2023.03.001.1703317405420
 *
 */
"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([["src_include_sendinblue_sendinbluemodule_ts"],{1887:(e,t,s)=>{s.r(t),s.d(t,{SendinBlueModule:()=>Z});var n=s(4755),l=s(5030),a=s(4357),o=s(3190),i=s(4826),d=s(9784),c=s(7239),u=s(2242),r=s(5329),m=s(4154),b=s(5710),h=s(4044),g=s(4505),p=s(3278),S=s(3463);let L=(()=>{class SendinBlueButton{language;metadata;model;modal;injector;backend;toast;constructor(e,t,s,n,l,a,o){this.language=e,this.metadata=t,this.model=s,this.modal=n,this.injector=l,this.backend=a,this.toast=o}get disabled(){return"0"==this.model.getFieldValue("entry_count")}execute(){let e=this.modal.await(this.language.getLabel("LBL_LOADING"));this.backend.getRequest(`channels/emarketing/sendinblue/${this.model.module}/${this.model.id}`).subscribe((t=>{e.emit(!0),t?this.modal.openModal("SendinBlueModal",!0,this.injector).subscribe((e=>{e.instance.contacts=t.synced})):this.toast.sendToast(this.language.getLabel("ERR_FAILED_TO_EXECUTE"),"error")}))}static ɵfac=function(e){return new(e||SendinBlueButton)(u.Y36(r.d),u.Y36(m.Pu),u.Y36(b.o),u.Y36(h.o),u.Y36(u.zs3),u.Y36(g.y),u.Y36(p.A))};static ɵcmp=u.Xpm({type:SendinBlueButton,selectors:[["sendinblue-button"]],decls:2,vars:2,consts:[["label","LBL_SENDINBLUE"]],template:function(e,t){1&e&&(u.TgZ(0,"span"),u._UZ(1,"system-label",0),u.qZA()),2&e&&u.ekj("disabled",t.disabled)},dependencies:[S._],encapsulation:2})}return SendinBlueButton})();var B=s(3348),E=s(9621),y=s(3499),f=s(5767),T=s(1916);function U(e,t){if(1&e&&(u.TgZ(0,"div"),u._uU(1),u._UZ(2,"system-label",1)(3,"system-label",1),u.qZA()),2&e){const e=u.oxw();u.xp6(1),u.hij(" ",e.contacts.length," "),u.xp6(1),u.Q6J("label","MSG_SENDINBLUE_FOUND"),u.xp6(1),u.Q6J("label","MSG_SENDINBLUE_UPDATE_LIST")}}function M(e,t){1&e&&(u.TgZ(0,"div"),u._UZ(1,"system-label",1),u.qZA()),2&e&&(u.xp6(1),u.Q6J("label","MSG_SENDINBLUE_UPDATE_LIST"))}let N=(()=>{class SendinBlueModal{language;router;metadata;backend;model;modal;toast;contacts=[];self={};constructor(e,t,s,n,l,a,o){this.language=e,this.router=t,this.metadata=s,this.backend=n,this.model=l,this.modal=a,this.toast=o}updateSendInBlueList(){const e=this.model.getFieldValue("ext_id");_.isEmpty(e)?(this.toast.sendToast(this.language.getLabel("MSG_NO_EXT_ID"),"error"),this.close()):this.modal.openModal("SystemLoadingModal").subscribe((t=>{t.instance.messagelabel="LBL_UPDATING",this.backend.postRequest(`channels/emarketing/sendinblue/${this.model.module}/${this.model.id}/${e}`,{}).subscribe((e=>{e?(t.instance.self.destroy(),this.close(),this.toast.sendToast(this.language.getLabel("MSG_SUCCESSFULLY_EXECUTED"),"success")):this.toast.sendToast(this.language.getLabel("ERR_FAILED_TO_EXECUTE"),"error")}))}))}close(){this.self.destroy()}static ɵfac=function(e){return new(e||SendinBlueModal)(u.Y36(r.d),u.Y36(B.F0),u.Y36(m.Pu),u.Y36(g.y),u.Y36(b.o),u.Y36(h.o),u.Y36(p.A))};static ɵcmp=u.Xpm({type:SendinBlueModal,selectors:[["sendinblue-modal"]],decls:11,vars:5,consts:[[3,"close"],[3,"label"],[4,"ngIf"],[1,"slds-button","slds-button--brand",3,"click"]],template:function(e,t){1&e&&(u.TgZ(0,"system-modal")(1,"system-modal-header",0),u.NdJ("close",(function(){return t.close()})),u._UZ(2,"system-label",1),u.qZA(),u.TgZ(3,"system-modal-content"),u.YNc(4,U,4,3,"div",2),u.YNc(5,M,2,1,"div",2),u.qZA(),u.TgZ(6,"system-modal-footer")(7,"button",3),u.NdJ("click",(function(){return t.close()})),u._UZ(8,"system-label",1),u.qZA(),u.TgZ(9,"button",3),u.NdJ("click",(function(){return t.updateSendInBlueList()})),u._UZ(10,"system-label",1),u.qZA()()()),2&e&&(u.xp6(2),u.Q6J("label","LBL_SENDINBLUE"),u.xp6(2),u.Q6J("ngIf",t.contacts.length>0),u.xp6(1),u.Q6J("ngIf",0==t.contacts.length),u.xp6(3),u.Q6J("label","LBL_CANCEL"),u.xp6(2),u.Q6J("label","LBL_UPDATE"))},dependencies:[n.O5,S._,E.j,y.x,f.p,T.y],encapsulation:2})}return SendinBlueModal})(),Z=(()=>{class SendinBlueModule{static ɵfac=function(e){return new(e||SendinBlueModule)};static ɵmod=u.oAB({type:SendinBlueModule});static ɵinj=u.cJS({imports:[n.ez,l.u5,o.ObjectFields,i.GlobalComponents,d.ObjectComponents,c.SystemComponents,a.o,l.UX]})}return SendinBlueModule})();("undefined"==typeof ngJitMode||ngJitMode)&&u.kYT(Z,{declarations:[L,N],imports:[n.ez,l.u5,o.ObjectFields,i.GlobalComponents,d.ObjectComponents,c.SystemComponents,a.o,l.UX]})}}]);