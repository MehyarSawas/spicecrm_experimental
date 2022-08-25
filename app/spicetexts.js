/*!
 * 
 *                     aacService
 *
 *                     release: 2022.01.001
 *
 *                     date: 2022-08-25 13:14:25
 *
 *                     build: 2022.01.001.1661426065713
 *
 */
"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([["src_include_spicetexts_spicetexts_ts"],{5388:(e,t,s)=>{s.r(t),s.d(t,{SpiceTextsModule:()=>X});var l=s(2313),i=s(520),n=s(2382),a=s(6472),d=s(1706),o=s(4518),r=s(1549),g=s(9769),c=s(6040),u=s(4893),p=s(5710),h=s(5329),m=s(4505),x=s(5920),T=s(4154),f=s(3463),b=s(8859),y=s(9808),v=s(4044),M=s(6625),Z=s(3333);let S=(()=>{class SpiceTextsAddButton{constructor(e,t,s,l,i,n){this.model=e,this.modal=t,this.configurationService=s,this.language=l,this.metadata=i,this.relatedModels=n,this.spiceTexts=[],this.model.module="SpiceTexts"}get sysTextIds(){let e=this.configurationService.getData("systextids");return e?_.values(e).filter((e=>e.module==this.parent.module)):[]}get canAdd(){return this.metadata.checkModuleAcl("SpiceTexts","create")&&!this.allTranslated}get allTranslated(){return this.relatedModels.isloading||0==this.sysTextIds.length||this.spiceTexts.length>=this.sysTextIds.length*this.language.getAvialableLanguages().length}addModel(){this.parent&&!this.allTranslated&&this.modal.openModal("SpiceTextsAddModal",!0).subscribe((e=>{e&&(e.instance.spiceTexts=this.spiceTexts,e.instance.sysTextIds=this.sysTextIds,e.instance.parent=this.parent,e.instance.response.subscribe((e=>{e&&"object"==typeof e&&this.relatedModels.items.push(e)})))}))}}return SpiceTextsAddButton.ɵfac=function(e){return new(e||SpiceTextsAddButton)(u.Y36(p.o),u.Y36(v.o),u.Y36(M.C),u.Y36(h.d),u.Y36(T.Pu),u.Y36(c.j))},SpiceTextsAddButton.ɵcmp=u.Xpm({type:SpiceTextsAddButton,selectors:[["spice-texts-add-button"]],inputs:{parent:"parent",spiceTexts:"spiceTexts"},features:[u._Bn([p.o])],decls:3,vars:2,consts:[["title","add item",1,"slds-button","slds-button--neutral",3,"disabled","click"],["label","LBL_ADD"],["module","SpiceTexts",3,"singular"]],template:function(e,t){1&e&&(u.TgZ(0,"button",0),u.NdJ("click",(function(){return t.addModel()})),u._UZ(1,"system-label",1)(2,"system-label-modulename",2),u.qZA()),2&e&&(u.Q6J("disabled",!t.canAdd),u.xp6(2),u.Q6J("singular",!0))},directives:[f._,Z.M],encapsulation:2}),SpiceTextsAddButton})();var F=s(4664),A=s(7763),J=s(6438);function L(e,t){if(1&e&&(u.TgZ(0,"option",19),u._uU(1),u.qZA()),2&e){const e=t.$implicit,s=u.oxw();u.Q6J("value",e.language),u.xp6(1),u.hij(" ",s.language.getLabel(null==e?null:e.text)," ")}}function B(e,t){1&e&&(u.TgZ(0,"div",20),u._UZ(1,"system-spinner"),u.qZA())}const k=function(e,t){return{module:"SpiceTexts",id:e,data:t}};function C(e,t){if(1&e&&(u.TgZ(0,"div",21)(1,"div",22),u._UZ(2,"object-record-details"),u.qZA()()),2&e){const e=t.$implicit;u.xp6(1),u.Q6J("system-model-provider",u.WLB(1,k,e.id,e))}}function Y(e,t){1&e&&(u.TgZ(0,"div",20),u._UZ(1,"system-label",23),u.qZA())}let Q=(()=>{class SpiceTexts{constructor(e,t,s,l,i,n){this.model=e,this.language=t,this.backend=s,this.session=l,this.metadata=i,this.relatedModels=n,this.searchTerm="",this.languageFilter="all"}get moduleTexts(){return this.relatedModels.items.filter((e=>{let t=e.name.toLowerCase(),s=e.description.toLowerCase(),l=this.searchTerm.toLowerCase(),i=0==this.searchTerm.length||t.includes(l)||s.includes(l),n=this.languageFilter==e.text_language;return i&&("all"==this.languageFilter||n)}))}get sysLanguages(){return this.language.getAvialableLanguages()}ngOnInit(){this.loadModuleTexts()}loadModuleTexts(){this.relatedModels.id=this.model.id,this.relatedModels.module=this.model.module,this.relatedModels.loaditems=-1,this.relatedModels.relatedModule="SpiceTexts",this.relatedModels.getData()}trackByFn(e,t){return t.id}}return SpiceTexts.ɵfac=function(e){return new(e||SpiceTexts)(u.Y36(p.o),u.Y36(h.d),u.Y36(m.y),u.Y36(x.n),u.Y36(T.Pu),u.Y36(c.j))},SpiceTexts.ɵcmp=u.Xpm({type:SpiceTexts,selectors:[["ng-component"]],features:[u._Bn([c.j])],decls:20,vars:11,consts:[[1,"slds-grid","slds-grid--vertical-align-center","slds-p-around--x-small"],["for","searchField",1,"slds-item_label"],["label","LBL_SEARCH"],[1,"slds-col","slds-form-element","slds-m-left--x-small"],[1,"slds-form-element__control","slds-input-has-icon","slds-input-has-icon_right"],["icon","search","addclasses","slds-input__icon slds-input__icon--right"],["id","searchField","type","text","placeholder","search by",1,"slds-input",3,"ngModel","ngModelChange"],["for","languageFilter",1,"slds-item_label","slds-m-left--small","slds-m-right--xx-small"],["label","LBL_FILTER"],[1,"slds-form-element","slds-m-right--small"],[1,"slds-form-element__control"],[1,"slds-select_container"],["id","languageFilter",1,"slds-select",3,"ngModel","disabled","ngModelChange"],["value","all"],["label","LBL_ALL"],[3,"value",4,"ngFor","ngForOf","ngForTrackBy"],[3,"parent","spiceTexts"],["class","slds-align--absolute-center slds-m-top--large",4,"ngIf"],["class","slds-m-vertical--small",4,"ngFor","ngForOf","ngForTrackBy"],[3,"value"],[1,"slds-align--absolute-center","slds-m-top--large"],[1,"slds-m-vertical--small"],[1,"slds-box--border",2,"padding","0 .50rem",3,"system-model-provider"],["label","MSG_NO_RECORDS_FOUND"]],template:function(e,t){1&e&&(u.TgZ(0,"div",0)(1,"label",1),u._UZ(2,"system-label",2),u.qZA(),u.TgZ(3,"div",3)(4,"div",4),u._UZ(5,"system-utility-icon",5),u.TgZ(6,"input",6),u.NdJ("ngModelChange",(function(e){return t.searchTerm=e})),u.qZA()()(),u.TgZ(7,"label",7),u._UZ(8,"system-label",8),u.qZA(),u.TgZ(9,"div",9)(10,"div",10)(11,"div",11)(12,"select",12),u.NdJ("ngModelChange",(function(e){return t.languageFilter=e})),u.TgZ(13,"option",13),u._UZ(14,"system-label",14),u.qZA(),u.YNc(15,L,2,2,"option",15),u.qZA()()()(),u._UZ(16,"spice-texts-add-button",16),u.qZA(),u.YNc(17,B,2,0,"div",17),u.YNc(18,C,3,4,"div",18),u.YNc(19,Y,2,0,"div",17)),2&e&&(u.xp6(6),u.Q6J("ngModel",t.searchTerm),u.xp6(6),u.Q6J("ngModel",t.languageFilter)("disabled",0==(null==t.sysLanguages?null:t.sysLanguages.length)),u.xp6(3),u.Q6J("ngForOf",t.sysLanguages)("ngForTrackBy",t.trackByFn),u.xp6(1),u.Q6J("parent",t.model)("spiceTexts",t.relatedModels.items),u.xp6(1),u.Q6J("ngIf",t.relatedModels.isloading),u.xp6(1),u.Q6J("ngForOf",t.moduleTexts)("ngForTrackBy",t.trackByFn),u.xp6(1),u.Q6J("ngIf",!t.relatedModels.isloading&&0==(null==t.relatedModels.items?null:t.relatedModels.items.length)))},directives:[f._,b.r,n.Fj,n.JJ,n.On,n.EJ,n.YN,n.Kr,y.sg,S,y.O5,F.W,A.u,J.F],encapsulation:2}),SpiceTexts})();var q=s(7579),U=s(2294),I=s(9621),N=s(1916),O=s(3499),w=s(6367),j=s(5638),D=s(3634),E=s(5767);function z(e,t){if(1&e&&(u.TgZ(0,"option",22),u._UZ(1,"system-label",23),u.qZA()),2&e){const e=t.$implicit;u.Q6J("value",e.text_id),u.xp6(1),u.Q6J("label",e.label)}}function R(e,t){1&e&&u._UZ(0,"system-spinner",24)}function $(e,t){if(1&e&&(u.TgZ(0,"option",22),u._uU(1),u.qZA()),2&e){const e=t.$implicit;u.Q6J("value",e.language),u.xp6(1),u.hij(" ",e.text," ")}}function G(e,t){1&e&&u._UZ(0,"system-spinner",24)}const P=function(){return{required:!0}};let W=(()=>{class SpiceTextsAddModal{constructor(e,t,s,l,i){this.model=e,this.configurationService=t,this.view=s,this.backend=l,this.language=i,this.spiceTexts=[],this.sysTextIds=[],this.parent={},this.response=new q.x,this.self={},this.saveTriggered=!1,this.loading="",this.model.module="SpiceTexts"}get textId(){return this.model.getField("text_id")}set textId(e){this.model.setField("text_id",e),this.model.resetFieldMessages("text_id","error","validation"),this.loading="text_language",window.setTimeout((()=>this.loading=""),500)}get textLanguage(){return this.model.getField("text_language")}set textLanguage(e){this.model.setField("text_language",e),this.model.resetFieldMessages("text_language","error","validation"),this.loading="text_id",window.setTimeout((()=>this.loading=""),500)}get availableSysLanguages(){return this.language.getAvialableLanguages().filter((e=>{let t=_.groupBy(this.spiceTexts,"text_id"),s=0;for(let l in t)if(t.hasOwnProperty(l)){s+=t[l].find((t=>t.text_language==e.language))?1:0}let l=this.spiceTexts.find((t=>t.text_id==this.textId&&t.text_language==e.language));return s<this.sysTextIds.length&&!l}))}get availableSysTexts(){return this.sysTextIds.filter((e=>{let t=this.spiceTexts.filter((t=>t.text_id==e.text_id)),s=this.spiceTexts.find((t=>t.text_id==e.text_id&&t.text_language==this.textLanguage));return t.length<this.language.getAvialableLanguages().length&&!s}))}get isDisabledText(){return!this.availableSysTexts||0==this.availableSysTexts.length||"text_id"==this.loading}get isDisabledLang(){return!this.availableSysLanguages||0==this.availableSysLanguages.length||"text_language"==this.loading}ngOnInit(){this.initializeModel(),this.view.isEditable=!0,this.view.setEditMode()}getFieldStyle(e){return this.model.getFieldMessages(e,"error")?"slds-has-error":""}initializeModel(){this.model.initialize(),this.model.setFields({parent_id:this.parent.id,parent_type:this.parent.module})}trackByFn(e,t){return t.id}isLoading(e){return this.loading==e}save(){if(this.saveTriggered=!0,!this.model.validate())return this.saveTriggered=!1;let e=this.model.getField("description").slice(0,100);this.model.setField("name",e),this.model.save(!0).subscribe((e=>{this.response.next(e),this.response.complete(),this.self.destroy()}),(e=>{this.cancel()})),this.saveTriggered=!1}cancel(){this.response.next(!1),this.response.complete(),this.self.destroy()}}return SpiceTextsAddModal.ɵfac=function(e){return new(e||SpiceTextsAddModal)(u.Y36(p.o),u.Y36(M.C),u.Y36(U.e),u.Y36(m.y),u.Y36(h.d))},SpiceTextsAddModal.ɵcmp=u.Xpm({type:SpiceTextsAddModal,selectors:[["ng-component"]],features:[u._Bn([p.o,U.e])],decls:29,vars:17,consts:[["size","large"],[3,"close"],["module","SpiceTexts",3,"singular"],[1,"slds-grid"],[1,"slds-size--1-of-2","slds-p-right--small"],["fieldname","text_id",3,"fieldconfig"],[1,"slds-form-element",3,"ngClass"],[1,"slds-form-element__control"],[1,"slds-select_container"],["id","text_id",1,"slds-select",3,"ngModel","disabled","ngModelChange"],[3,"value",4,"ngFor","ngForOf","ngForTrackBy"],["fieldname","text_id"],["class","slds-is-absolute","size","15","style","right: 25px; top: 8px",4,"ngIf"],[1,"slds-size--1-of-2"],["fieldname","text_language",3,"fieldconfig"],["id","text_language",1,"slds-select",3,"ngModel","disabled","ngModelChange"],["fieldname","text_language"],["field","description","fielddisplayclass","slds-truncate"],[1,"slds-button","slds-button--neutral",3,"click"],["label","LBL_CANCEL"],[1,"slds-button","slds-button--brand",3,"click"],["label","LBL_SAVE"],[3,"value"],[3,"label"],["size","15",1,"slds-is-absolute",2,"right","25px","top","8px"]],template:function(e,t){1&e&&(u.TgZ(0,"system-modal",0)(1,"system-modal-header",1),u.NdJ("close",(function(){return t.cancel()})),u._UZ(2,"system-label-modulename",2),u.qZA(),u.TgZ(3,"system-modal-content")(4,"div",3)(5,"div",4),u._UZ(6,"field-label",5),u.TgZ(7,"div",6)(8,"div",7)(9,"div",8)(10,"select",9),u.NdJ("ngModelChange",(function(e){return t.textId=e})),u.YNc(11,z,2,2,"option",10),u.qZA()()(),u._UZ(12,"field-messages",11),u.YNc(13,R,1,0,"system-spinner",12),u.qZA()(),u.TgZ(14,"div",13),u._UZ(15,"field-label",14),u.TgZ(16,"div",6)(17,"div",7)(18,"div",8)(19,"select",15),u.NdJ("ngModelChange",(function(e){return t.textLanguage=e})),u.YNc(20,$,2,2,"option",10),u.qZA()()(),u._UZ(21,"field-messages",16),u.YNc(22,G,1,0,"system-spinner",12),u.qZA()()(),u._UZ(23,"field-container",17),u.qZA(),u.TgZ(24,"system-modal-footer")(25,"button",18),u.NdJ("click",(function(){return t.cancel()})),u._UZ(26,"system-label",19),u.qZA(),u.TgZ(27,"button",20),u.NdJ("click",(function(){return t.save()})),u._UZ(28,"system-label",21),u.qZA()()()),2&e&&(u.xp6(2),u.Q6J("singular",!0),u.xp6(4),u.Q6J("fieldconfig",u.DdM(15,P)),u.xp6(1),u.Q6J("ngClass",t.getFieldStyle("text_id")),u.xp6(3),u.Q6J("ngModel",t.textId)("disabled",t.isDisabledText),u.xp6(1),u.Q6J("ngForOf",t.availableSysTexts)("ngForTrackBy",t.trackByFn),u.xp6(2),u.Q6J("ngIf",t.isLoading("text_id")),u.xp6(2),u.Q6J("fieldconfig",u.DdM(16,P)),u.xp6(1),u.Q6J("ngClass",t.getFieldStyle("text_language")),u.xp6(3),u.Q6J("ngModel",t.textLanguage)("disabled",t.isDisabledLang),u.xp6(1),u.Q6J("ngForOf",t.availableSysLanguages)("ngForTrackBy",t.trackByFn),u.xp6(2),u.Q6J("ngIf",t.isLoading("text_language")))},directives:[I.j,N.y,Z.M,O.x,w.q,y.mk,n.EJ,n.JJ,n.On,y.sg,n.YN,n.Kr,f._,j.a,y.O5,F.W,D.j,E.p],encapsulation:2}),SpiceTextsAddModal})(),X=(()=>{class SpiceTextsModule{}return SpiceTextsModule.ɵfac=function(e){return new(e||SpiceTextsModule)},SpiceTextsModule.ɵmod=u.oAB({type:SpiceTextsModule}),SpiceTextsModule.ɵinj=u.cJS({imports:[[l.b2,i.JF,n.u5,a.SystemComponents,d.GlobalComponents,o.ObjectComponents,r.ObjectFields,g.o]]}),SpiceTextsModule})();("undefined"==typeof ngJitMode||ngJitMode)&&u.kYT(X,{declarations:[Q,S,W],imports:[l.b2,i.JF,n.u5,a.SystemComponents,d.GlobalComponents,o.ObjectComponents,r.ObjectFields,g.o]})}}]);