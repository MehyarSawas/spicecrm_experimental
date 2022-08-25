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
"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([["src_modules_contacts_modulecontacts_ts"],{1435:(e,s,t)=>{t.r(s),t.d(s,{ModuleContacts:()=>le});var i=t(9808),l=t(2382),a=t(9769),n=t(1549),o=t(1706),r=t(4518),c=t(6472),d=t(4893),u=t(5329),h=t(5710),g=t(4044),p=t(3463);let m=(()=>{class ContactNewslettersButton{constructor(e,s,t,i){this.language=e,this.model=s,this.modal=t,this.ViewContainerRef=i,this.disabled=!0}ngOnInit(){this.handleDisabled(),this.model.mode$.subscribe((e=>{this.handleDisabled()})),this.model.data$.subscribe((e=>{this.handleDisabled()}))}execute(){this.modal.openModal("ContactNewsletters",!0,this.ViewContainerRef.injector)}handleDisabled(){this.disabled=!(this.model.getField("email1")&&!this.model.isEditing&&this.model.checkAccess("edit"))}}return ContactNewslettersButton.ɵfac=function(e){return new(e||ContactNewslettersButton)(d.Y36(u.d),d.Y36(h.o),d.Y36(g.o),d.Y36(d.s_b))},ContactNewslettersButton.ɵcmp=d.Xpm({type:ContactNewslettersButton,selectors:[["contact-newsletters-button"]],decls:2,vars:0,consts:[["label","LBL_MANAGE_SUBSCRIPTIONS"]],template:function(e,s){1&e&&(d.TgZ(0,"span"),d._UZ(1,"system-label",0),d.qZA())},directives:[p._],encapsulation:2}),ContactNewslettersButton})();var b=t(4505),f=t(4154),_=t(9621),x=t(1916),Z=t(3499),w=t(2656),y=t(5767);function v(e,s){if(1&e){const e=d.EpF();d.TgZ(0,"li",16),d.NdJ("click",(function(){const s=d.CHM(e).$implicit;return d.oxw().selectNewsletter("available",s.id)})),d.TgZ(1,"span",17),d._uU(2),d.qZA()()}if(2&e){const e=s.$implicit,t=d.oxw();d.uIk("aria-selected",t.isSelected("available",e.id)),d.xp6(2),d.Oqu(e.summary_text)}}function L(e,s){if(1&e){const e=d.EpF();d.TgZ(0,"li",16),d.NdJ("click",(function(){const s=d.CHM(e).$implicit;return d.oxw().selectNewsletter("subscribed",s.id)})),d.TgZ(1,"span",17),d._uU(2),d.qZA()()}if(2&e){const e=s.$implicit,t=d.oxw();d.uIk("aria-selected",t.isSelected("subscribed",e.id)),d.xp6(2),d.Oqu(e.summary_text)}}let C=(()=>{class ContactNewsletters{constructor(e,s,t,i){this.language=e,this.backend=s,this.metadata=t,this.model=i,this.rawResult={},this.availableNewsLetters=[],this.subscribedNewsLetters=[],this.selectedAvailable=[],this.selectedSubscribed=[],this.multiselect=!1,this.self={},this.backend.getRequest("module/Contacts/"+this.model.id+"/newsletters/subscriptions").subscribe((e=>{this.rawResult=e;let s={};for(let t of e.news_type_list_arr)switch(t.list_type){case"default":s[t.campaign_id]||(s[t.campaign_id]={name:t.name},s[t.campaign_id].defaultList=t.prospect_list_id);break;case"exempt":s[t.campaign_id]||(s[t.campaign_id]={name:t.name}),s[t.campaign_id].exemptList=t.prospect_list_id}for(let t of e.current_plp_arr)for(let e in s)s[e].defaultList==t.prospect_list_id?(this.subscribedNewsLetters.push({id:e,summary_text:s[e].name,defaultList:s[e].defaultList,exemptList:s[e].exemptList}),delete s[e]):s[e].defaultList==t.prospect_list_id&&(this.availableNewsLetters.push({id:e,summary_text:s[e].name,defaultList:s[e].defaultList,exemptList:s[e].exemptList}),delete s[e]);for(let e in s)this.availableNewsLetters.push({id:e,summary_text:s[e].name,defaultList:s[e].defaultList,exemptList:s[e].exemptList}),delete s[e]}))}closePopup(){this.self.destroy()}keypressed(e){"keydown"===e.type&&"Control"===e.key&&!1===this.multiselect&&(this.multiselect=!0),"keyup"===e.type&&"Control"===e.key&&!0===this.multiselect&&(this.multiselect=!1)}isSelected(e,s){switch(e){case"available":return this.selectedAvailable.indexOf(s)>=0;case"subscribed":return this.selectedSubscribed.indexOf(s)>=0}}selectNewsletter(e,s){switch(e){case"available":!1===this.multiselect?this.selectedAvailable=[s]:this.selectedAvailable.indexOf(s)>=0?this.selectedAvailable.splice(this.selectedAvailable.indexOf(s),1):this.selectedAvailable.push(s);break;case"subscribed":!1===this.multiselect?this.selectedSubscribed=[s]:this.selectedSubscribed.indexOf(s)>=0?this.selectedSubscribed.splice(this.selectedSubscribed.indexOf(s),1):this.selectedSubscribed.push(s)}}subscribe(){this.selectedAvailable.forEach((e=>{this.availableNewsLetters.some(((s,t)=>{if(e==s.id)return this.subscribedNewsLetters.push(this.availableNewsLetters.splice(t,1)[0]),!0}))})),this.selectedAvailable=[]}unsubscribe(){this.selectedSubscribed.forEach((e=>{this.subscribedNewsLetters.some(((s,t)=>{if(e==s.id)return this.availableNewsLetters.push(this.subscribedNewsLetters.splice(t,1)[0]),!0}))})),this.selectedSubscribed=[]}save(){let e={subscribed:this.subscribedNewsLetters,unsubscribed:this.availableNewsLetters};this.backend.postRequest("module/Contacts/"+this.model.id+"/newsletters/subscriptions",{},e).subscribe((e=>{this.closePopup()}))}}return ContactNewsletters.ɵfac=function(e){return new(e||ContactNewsletters)(d.Y36(u.d),d.Y36(b.y),d.Y36(f.Pu),d.Y36(h.o))},ContactNewsletters.ɵcmp=d.Xpm({type:ContactNewsletters,selectors:[["contact-newsletters"]],decls:30,vars:7,consts:[[3,"close"],[1,"slds-text-heading--medium"],[1,"slds-picklist--draggable","slds-grid","slds-grid--align-center"],[1,"slds-grid","slds-grid--align-center"],[1,"slds-form-element"],["aria-label","select-1",1,"slds-form-element__label"],[1,"slds-picklist"],[1,"slds-picklist__options","slds-picklist__options--multi"],["draggable","false","class","slds-picklist__item","role","option",3,"click",4,"ngFor","ngForOf"],[1,"slds-grid","slds-grid--vertical"],[1,"slds-button","slds-button--icon-container",3,"disabled","click"],[3,"icon"],[1,"slds-button","slds-button--neutral",3,"click"],["label","LBL_CANCEL"],[1,"slds-button","slds-button--brand",3,"click"],["label","LBL_SAVE"],["draggable","false","role","option",1,"slds-picklist__item",3,"click"],[1,"slds-truncate"]],template:function(e,s){1&e&&(d.TgZ(0,"system-modal")(1,"system-modal-header",0),d.NdJ("close",(function(){return s.closePopup()})),d.TgZ(2,"h2",1),d._uU(3),d.qZA()(),d.TgZ(4,"system-modal-content")(5,"div",2)(6,"div",3)(7,"div",4)(8,"span",5),d._uU(9,"Available Newsletters"),d.qZA(),d.TgZ(10,"div",6)(11,"ul",7),d.YNc(12,v,3,2,"li",8),d.qZA()()(),d.TgZ(13,"div",9)(14,"button",10),d.NdJ("click",(function(){return s.unsubscribe()})),d._UZ(15,"system-button-icon",11),d.qZA(),d.TgZ(16,"button",10),d.NdJ("click",(function(){return s.subscribe()})),d._UZ(17,"system-button-icon",11),d.qZA()()(),d.TgZ(18,"div",3)(19,"div",4)(20,"span",5),d._uU(21,"Subscribed Newsletters"),d.qZA(),d.TgZ(22,"div",6)(23,"ul",7),d.YNc(24,L,3,2,"li",8),d.qZA()()()()()(),d.TgZ(25,"system-modal-footer")(26,"button",12),d.NdJ("click",(function(){return s.closePopup()})),d._UZ(27,"system-label",13),d.qZA(),d.TgZ(28,"button",14),d.NdJ("click",(function(){return s.save()})),d._UZ(29,"system-label",15),d.qZA()()()),2&e&&(d.xp6(3),d.hij("Newsletter Subscriptions for ",s.model.data.name,""),d.xp6(9),d.Q6J("ngForOf",s.availableNewsLetters),d.xp6(2),d.Q6J("disabled",0===s.selectedSubscribed.length),d.xp6(1),d.Q6J("icon","left"),d.xp6(1),d.Q6J("disabled",0===s.selectedAvailable.length),d.xp6(1),d.Q6J("icon","right"),d.xp6(7),d.Q6J("ngForOf",s.subscribedNewsLetters))},directives:[_.j,x.y,Z.x,i.sg,w.J,y.p,p._],encapsulation:2}),ContactNewsletters})(),A=(()=>{class ContactPortalButton{constructor(e,s,t,i,l){this.language=e,this.model=s,this.metadata=t,this.modal=i,this.viewContainerRef=l,this.disabled=!0}ngOnInit(){this.handleDisabled(),this.model.mode$.subscribe((e=>{this.handleDisabled()})),this.model.data$.subscribe((e=>{this.handleDisabled()}))}handleDisabled(){this.disabled=!((this.model.getField("email1")||this.model.getField("email_address_private"))&&!this.model.isEditing&&this.model.checkAccess("edit"))}execute(){this.modal.openModal("ContactPortalDetails",!0,this.viewContainerRef.injector)}}return ContactPortalButton.ɵfac=function(e){return new(e||ContactPortalButton)(d.Y36(u.d),d.Y36(h.o),d.Y36(f.Pu),d.Y36(g.o),d.Y36(d.s_b))},ContactPortalButton.ɵcmp=d.Xpm({type:ContactPortalButton,selectors:[["contact-portal-button"]],decls:2,vars:0,consts:[["label","LBL_PORTAL_INFORMATION"]],template:function(e,s){1&e&&(d.TgZ(0,"span"),d._UZ(1,"system-label",0),d.qZA())},directives:[p._],encapsulation:2}),ContactPortalButton})();var N=t(5698),T=t(3278),E=t(6625),P=t(4664),R=t(8594);function S(e,s){1&e&&(d.ynx(0),d._UZ(1,"system-label",8),d.BQk())}function U(e,s){1&e&&(d.ynx(0),d._UZ(1,"system-label",9),d.BQk())}function q(e,s){if(1&e&&(d.ynx(0),d.YNc(1,S,2,0,"ng-container",1),d.YNc(2,U,2,0,"ng-container",1),d.TgZ(3,"span",6)(4,"span",7),d._uU(5),d.qZA()(),d.BQk()),2&e){const e=d.oxw();d.xp6(1),d.Q6J("ngIf",e.isNewUser),d.xp6(1),d.Q6J("ngIf",!e.isNewUser),d.xp6(3),d.Oqu(e.model.data.name)}}function J(e,s){1&e&&(d.ynx(0),d._UZ(1,"system-label",10),d.BQk())}function M(e,s){1&e&&d._UZ(0,"system-spinner")}function k(e,s){1&e&&(d.TgZ(0,"div",33),d._UZ(1,"system-label",34),d.qZA())}function O(e,s){1&e&&(d.ynx(0),d.TgZ(1,"abbr",21),d._uU(2,"* "),d.qZA(),d._UZ(3,"system-label",35),d.BQk())}function Y(e,s){1&e&&(d.ynx(0),d._UZ(1,"system-label",36),d._uU(2,"?"),d.BQk())}function I(e,s){if(1&e&&(d.TgZ(0,"div",33),d._uU(1),d.qZA()),2&e){const e=d.oxw(2);d.xp6(1),d.Oqu(e.pwdError)}}function Q(e,s){if(1&e&&(d.TgZ(0,"div",37),d._UZ(1,"system-label",38),d._uU(2,":"),d._UZ(3,"br"),d._uU(4),d.qZA()),2&e){const e=d.oxw(2);d.xp6(4),d.hij(" ",e.pwdGuideline," ")}}function B(e,s){if(1&e&&(d.TgZ(0,"option",40),d._uU(1),d.qZA()),2&e){const e=s.$implicit,t=d.oxw(3);d.Q6J("value",e.id)("selected",t.user.aclRole===e.id),d.xp6(1),d.Oqu(e.name)}}function D(e,s){if(1&e){const e=d.EpF();d.TgZ(0,"div",12)(1,"label",13)(2,"abbr",21),d._uU(3,"* "),d.qZA(),d._UZ(4,"system-label",39),d.qZA(),d.TgZ(5,"div",15)(6,"div",29)(7,"select",30),d.NdJ("ngModelChange",(function(s){d.CHM(e);return d.oxw(2).user.aclRole=s})),d.YNc(8,B,2,3,"option",31),d.qZA()()()()}if(2&e){const e=d.oxw(2);d.xp6(7),d.Q6J("ngModel",e.user.aclRole),d.xp6(1),d.Q6J("ngForOf",e.aclRoles)}}function F(e,s){if(1&e&&(d.TgZ(0,"option",40),d._uU(1),d.qZA()),2&e){const e=s.$implicit,t=d.oxw(3);d.Q6J("value",e.id)("selected",t.user.aclProfile===e.id),d.xp6(1),d.Oqu(e.name)}}function W(e,s){if(1&e){const e=d.EpF();d.TgZ(0,"div",12)(1,"label",13)(2,"abbr",21),d._uU(3,"* "),d.qZA(),d._UZ(4,"system-label",41),d.qZA(),d.TgZ(5,"div",15)(6,"div",29)(7,"select",30),d.NdJ("ngModelChange",(function(s){d.CHM(e);return d.oxw(2).user.aclProfile=s})),d.YNc(8,F,2,3,"option",31),d.qZA()()()()}if(2&e){const e=d.oxw(2);d.xp6(7),d.Q6J("ngModel",e.user.aclProfile),d.xp6(1),d.Q6J("ngForOf",e.aclProfiles)}}function G(e,s){if(1&e&&(d.TgZ(0,"option",40),d._uU(1),d.qZA()),2&e){const e=s.$implicit,t=d.oxw(2);d.Q6J("value",e.id)("selected",t.user.portalRole===e.id),d.xp6(1),d.Oqu(e.name)}}function H(e,s){if(1&e&&(d.TgZ(0,"label",13),d._uU(1),d._UZ(2,"system-icon-help-text",42),d.qZA()),2&e){const e=d.oxw(2);d.xp6(1),d.hij("",e.language.getLabel("LBL_SET_DATE_TIME_PREFS")," "),d.xp6(1),d.Q6J("helpText",e.language.getLabel("HLP_SET_DATE_TIME_PREFS"))}}function j(e,s){if(1&e&&(d.TgZ(0,"label",13),d._uU(1),d._UZ(2,"system-icon-help-text",42),d.qZA()),2&e){const e=d.oxw(2);d.xp6(1),d.hij("",e.language.getLabel("LBL_RESET_DATE_TIME_PREFS")," "),d.xp6(1),d.Q6J("helpText",e.language.getLabel("HLP_RESET_DATE_TIME_PREFS"))}}const $=function(e){return{"slds-has-error":e}};function z(e,s){if(1&e){const e=d.EpF();d.TgZ(0,"div",11)(1,"div",12)(2,"label",13),d._UZ(3,"system-label",14),d.qZA(),d.TgZ(4,"div",15)(5,"label",16)(6,"input",17),d.NdJ("ngModelChange",(function(s){d.CHM(e);return d.oxw().user.active=s})),d.qZA(),d.TgZ(7,"span",18),d._UZ(8,"span",19),d.qZA()()()(),d.TgZ(9,"div",20)(10,"label",13)(11,"abbr",21),d._uU(12,"* "),d.qZA(),d._UZ(13,"system-label",22),d.qZA(),d.TgZ(14,"div",15)(15,"input",23),d.NdJ("ngModelChange",(function(s){d.CHM(e);return d.oxw().user.name=s}))("change",(function(){d.CHM(e);return d.oxw().testUsername()})),d.qZA(),d.YNc(16,k,2,0,"div",24),d.qZA()(),d.TgZ(17,"div",20)(18,"label",13),d.YNc(19,O,4,0,"ng-container",1),d.YNc(20,Y,3,0,"ng-container",1),d.qZA(),d.TgZ(21,"div",15)(22,"input",25),d.NdJ("ngModelChange",(function(s){d.CHM(e);return d.oxw().user.password=s})),d.qZA(),d.YNc(23,I,2,1,"div",24),d.YNc(24,Q,5,1,"div",26),d.qZA()(),d.YNc(25,D,9,2,"div",27),d.YNc(26,W,9,2,"div",27),d.TgZ(27,"div",12)(28,"label",13)(29,"abbr",21),d._uU(30,"* "),d.qZA(),d._UZ(31,"system-label",28),d.qZA(),d.TgZ(32,"div",15)(33,"div",29)(34,"select",30),d.NdJ("ngModelChange",(function(s){d.CHM(e);return d.oxw().user.portalRole=s})),d.YNc(35,G,2,3,"option",31),d.qZA()()()(),d.TgZ(36,"div",12),d.YNc(37,H,3,2,"label",32),d.YNc(38,j,3,2,"label",32),d.TgZ(39,"div",15)(40,"label",16)(41,"input",17),d.NdJ("ngModelChange",(function(s){d.CHM(e);return d.oxw().user.setDateTimePrefsWithSystemDefaults=s})),d.qZA(),d.TgZ(42,"span",18),d._UZ(43,"span",19),d.qZA()()()()()}if(2&e){const e=d.oxw();d.xp6(6),d.Q6J("ngModel",e.user.active),d.xp6(3),d.Q6J("ngClass",d.VKq(19,$,e.usernameAlreadyExists)),d.xp6(6),d.Q6J("ngModel",e.user.name)("disabled",e.usernameTesting),d.xp6(1),d.Q6J("ngIf",e.usernameAlreadyExists),d.xp6(1),d.Q6J("ngClass",d.VKq(21,$,e.pwdError)),d.xp6(2),d.Q6J("ngIf",e.isNewUser),d.xp6(1),d.Q6J("ngIf",!e.isNewUser),d.xp6(2),d.Q6J("ngModel",e.user.password)("ngClass",d.VKq(23,$,e.pwdError)),d.xp6(1),d.Q6J("ngIf",e.pwdError),d.xp6(1),d.Q6J("ngIf",e.pwdGuideline),d.xp6(1),d.Q6J("ngIf",e.aclRoles.length),d.xp6(1),d.Q6J("ngIf",e.aclProfiles.length),d.xp6(8),d.Q6J("ngModel",e.user.portalRole),d.xp6(1),d.Q6J("ngForOf",e.portalRoles),d.xp6(2),d.Q6J("ngIf",e.isNewUser),d.xp6(1),d.Q6J("ngIf",!e.isNewUser),d.xp6(3),d.Q6J("ngModel",e.user.setDateTimePrefsWithSystemDefaults)}}function V(e,s){if(1&e){const e=d.EpF();d.TgZ(0,"button",43),d.NdJ("click",(function(){d.CHM(e);return d.oxw().save()})),d._UZ(1,"system-label",44),d.qZA()}if(2&e){const e=d.oxw();d.Q6J("disabled",!e.canSave)}}let X=(()=>{class ContactPortalDetails{constructor(e,s,t,i,l,a){this.language=e,this.backend=s,this.metadata=t,this.model=i,this.toast=l,this.configuration=a,this.loaded=!1,this.user={active:!1,id:"",aclRole:"",aclProfile:"",portalRole:"",password:"",name:"",setDateTimePrefsWithSystemDefaults:!0},this.pwdGuideline="",this.pwdCheckRegex=new RegExp("//"),this.aclRoles=[],this.aclProfiles=[],this.portalRoles=[],this.self=void 0,this.usernameAlreadyExists=!1,this.usernameTesting=!1,this.isSaving=!1}ngOnInit(){this.getInfo(),this.backend.getRequest("module/Contacts/"+this.model.id+"/portalAccess").pipe((0,N.q)(1)).subscribe((e=>{e.aclRoles&&(this.aclRoles=e.aclRoles),e.aclProfiles&&(this.aclProfiles=e.aclProfiles),e.defaultPortalUserProfile&&(this.defaultPortalUserProfile=e.defaultPortalUserProfile),this.portalRoles=e.portalRoles,e.user&&e.user.id&&(this.user.active=e.user.status,this.user.id=e.user.id,e.user.aclRole&&(this.user.aclRole=e.user.aclRole),e.user.aclProfile&&(this.user.aclProfile=e.user.aclProfile),this.user.portalRole=e.user.portalRole,this.user.setDateTimePrefsWithSystemDefaults=!1),this.user.id||(this.aclRoles.some((e=>{if("Portal"===e.name)return this.user.aclRole=e.id,!0})),this.portalRoles.some((e=>{if("Portal"===e.name)return this.user.portalRole=e.id,!0}))),this.user.id?(this.user.name=e.user.username,this.loaded=!0):(this.user.name=this.model.getField("email1")?this.model.getField("email1"):this.model.getField("email_address_private"),this.testUsername(),1===this.aclProfiles.length?this.user.aclProfile=this.aclProfiles[0].id:this.defaultPortalUserProfile&&(this.user.aclProfile=this.defaultPortalUserProfile))}))}testUsername(){this.user.name&&(this.usernameTesting=!0,this.backend.getRequest("module/Contacts/"+this.model.id+"/testUsername",{username:this.user.name}).pipe((0,N.q)(1)).subscribe((e=>{e.error||(this.usernameAlreadyExists=e.exists,this.loaded=!0,this.usernameTesting=!1)})))}get pwdError(){return!!this.loaded&&(!(!this.user.password||this.pwdCheckRegex.test(this.user.password))&&this.language.getLabel("MSG_PWD_NOT_LEGAL"))}closeModal(){this.self.destroy()}get isNewUser(){return this.loaded&&""==this.user.id}get canSave(){if(this.isSaving)return!1;if(this.usernameTesting)return!1;if(!this.user.name||!this.user.portalRole||!this.user.aclRole&&this.aclRoles.length||!this.user.aclProfile&&this.aclProfiles.length)return!1;if(this.usernameAlreadyExists)return!1;if(this.isNewUser){if(!this.user.password||this.pwdError)return!1}else if(this.pwdError)return!1;return!0}save(){if(this.canSave){this.isSaving=!0;let e={status:this.user.active,aclRole:this.aclRoles.length?this.user.aclRole:void 0,aclProfile:this.aclProfiles.length?this.user.aclProfile:void 0,portalRole:this.user.portalRole,username:this.user.name,password:this.user.password,setDateTimePrefsWithSystemDefaults:this.user.setDateTimePrefsWithSystemDefaults};this.toast.clearToast(this.lastToast),this.isNewUser?this.backend.postRequest("module/Contacts/"+this.model.id+"/portalAccess",{},e).pipe((0,N.q)(1)).subscribe((e=>{e.success&&(this.lastToast=this.toast.sendToast("Portal user created successfully.","success")),this.closeModal()}),(e=>{this.lastToast=this.toast.sendToast("Error saving data of portal user.","error",e.error.error.message,!1),this.isSaving=!1})):this.backend.putRequest("module/Contacts/"+this.model.id+"/portalAccess",{},e).pipe((0,N.q)(1)).subscribe((e=>{e.success&&(this.lastToast=this.toast.sendToast("Portal user edited successfully.","success")),this.closeModal()}),(e=>{this.lastToast=this.toast.sendToast("Error saving data of portal user.","error",e.error.error.message,!1),this.isSaving=!1}))}}getInfo(){let e=this.configuration.getCapabilityConfig("userpassword");this.pwdCheckRegex=new RegExp(e.regex);let s=[];e.onelower&&s.push(this.language.getLabel("MSG_PASSWORD_ONELOWER")),e.oneupper&&s.push(this.language.getLabel("MSG_PASSWORD_ONEUPPER")),e.onenumber&&s.push(this.language.getLabel("MSG_PASSWORD_ONENUMBER")),e.onespecial&&s.push(this.language.getLabel("MSG_PASSWORD_ONESPECIAL")),e.minpwdlength&&s.push(this.language.getLabel("MSG_PASSWORD_LENGTH")+" "+e.minpwdlength),this.pwdGuideline=s.join(", ")}}return ContactPortalDetails.ɵfac=function(e){return new(e||ContactPortalDetails)(d.Y36(u.d),d.Y36(b.y),d.Y36(f.Pu),d.Y36(h.o),d.Y36(T.A),d.Y36(E.C))},ContactPortalDetails.ɵcmp=d.Xpm({type:ContactPortalDetails,selectors:[["contact-portal-details"]],decls:11,vars:5,consts:[[3,"close"],[4,"ngIf"],["class","slds-form slds-form_horizontal",4,"ngIf"],[1,"slds-button","slds-button--neutral",3,"click"],["label","LBL_CANCEL"],["class","slds-button slds-button--brand",3,"disabled","click",4,"ngIf"],[1,"slds-text-heading_small","slds-p-top_x-small",2,"display","block"],[1,"slds-p-horizontal--x-small","slds-theme--info","slds-text-color--inverse",2,"opacity","0.66"],["label","LBL_CREATE_PORTAL_USER"],["label","LBL_EDIT_PORTAL_USER"],["label","LBL_PORTAL_USER"],[1,"slds-form","slds-form_horizontal"],[1,"slds-form-element"],[1,"slds-form-element__label"],["label","LBL_ACTIVE"],[1,"slds-form-element__control"],[1,"slds-checkbox_toggle","slds-grid"],["type","checkbox","name","active",3,"ngModel","ngModelChange"],["aria-live","assertive",1,"slds-checkbox_faux_container"],[1,"slds-checkbox_faux"],[1,"slds-form-element",3,"ngClass"],["title","required",1,"slds-required"],["label","LBL_USER_NAME"],["type","text",1,"slds-input",3,"ngModel","disabled","ngModelChange","change"],["class","slds-form-element__help",4,"ngIf"],["type","text",1,"slds-input",3,"ngModel","ngClass","ngModelChange"],["class","slds-m-top--xx-small slds-form-element__help","style","color:inherit",4,"ngIf"],["class","slds-form-element",4,"ngIf"],["label","LBL_PORTAL_ROLE"],[1,"slds-select_container"],[1,"slds-select",3,"ngModel","ngModelChange"],[3,"value","selected",4,"ngFor","ngForOf"],["class","slds-form-element__label",4,"ngIf"],[1,"slds-form-element__help"],["label","MSG_USERNAME_ALREADY_EXISTS"],["label","LBL_PASSWORD"],["label","LBL_NEW_PWD"],[1,"slds-m-top--xx-small","slds-form-element__help",2,"color","inherit"],["label","LBL_PWD_GUIDELINE"],["label","LBL_ACL_ROLE"],[3,"value","selected"],["label","LBL_SPICEACLPROFILE"],[3,"helpText"],[1,"slds-button","slds-button--brand",3,"disabled","click"],["label","LBL_SAVE"]],template:function(e,s){1&e&&(d.TgZ(0,"system-modal")(1,"system-modal-header",0),d.NdJ("close",(function(){return s.closeModal()})),d.YNc(2,q,6,3,"ng-container",1),d.YNc(3,J,2,0,"ng-container",1),d.qZA(),d.TgZ(4,"system-modal-content"),d.YNc(5,M,1,0,"system-spinner",1),d.YNc(6,z,44,25,"div",2),d.qZA(),d.TgZ(7,"system-modal-footer")(8,"button",3),d.NdJ("click",(function(){return s.closeModal()})),d._UZ(9,"system-label",4),d.qZA(),d.YNc(10,V,2,1,"button",5),d.qZA()()),2&e&&(d.xp6(2),d.Q6J("ngIf",s.loaded),d.xp6(1),d.Q6J("ngIf",!s.loaded),d.xp6(2),d.Q6J("ngIf",!s.loaded),d.xp6(1),d.Q6J("ngIf",s.loaded),d.xp6(4),d.Q6J("ngIf",s.loaded))},directives:[_.j,x.y,i.O5,p._,Z.x,P.W,l.Wl,l.JJ,l.On,i.mk,l.Fj,l.EJ,i.sg,l.YN,l.Kr,R.h,y.p],encapsulation:2}),ContactPortalDetails})();var K=t(727),ee=t(8859);function se(e,s){if(1&e&&d._UZ(0,"system-utility-icon",5),2&e){const e=d.oxw();d.Q6J("icon",e.syncicon)}}function te(e,s){1&e&&d._UZ(0,"system-spinner",6)}let ie=(()=>{class ContactExchangeSyncButton{constructor(e,s,t,i,l,a,n){this.metadata=e,this.toast=s,this.language=t,this.model=i,this.modal=l,this.backend=a,this.configuration=n,this.isLoading=!1,this.hidden=!0,this.subscriptions=new K.w0,this.setHidden(),this.configuration.datachanged$.subscribe((e=>{"exchangeuserconfig"==e&&this.setHidden()}))}ngOnDestroy(){this.subscriptions.unsubscribe()}setHidden(){let e=this.configuration.getData("exchangeuserconfig"),s=this.metadata.getModuleDefs("Contacts");this.hidden=!e||e&&-1==(null==e?void 0:e.findIndex((e=>e.sysmodule_id==s.id)))}execute(){this.isLoading=!0,this.model.getField("sync_contact")?this.backend.deleteRequest(`module/Contacts/${this.model.id}/exchangesync`).subscribe((e=>{this.model.setField("sync_contact",!this.model.getField("sync_contact")),this.isLoading=!1}),(e=>{this.isLoading=!1})):this.backend.putRequest(`module/Contacts/${this.model.id}/exchangesync`).subscribe((e=>{e.message?this.toast.sendToast(e.message,"error"):this.model.setField("sync_contact",!this.model.getField("sync_contact")),this.isLoading=!1}),(e=>{this.isLoading=!1}))}get disabled(){return!(!this.isLoading&&!this.model.isLoading&&this.model.getField("email1")&&!this.model.isEditing)}get syncicon(){return this.model.getField("sync_contact")?"check":"add"}}return ContactExchangeSyncButton.ɵfac=function(e){return new(e||ContactExchangeSyncButton)(d.Y36(f.Pu),d.Y36(T.A),d.Y36(u.d),d.Y36(h.o),d.Y36(g.o),d.Y36(b.y),d.Y36(E.C))},ContactExchangeSyncButton.ɵcmp=d.Xpm({type:ContactExchangeSyncButton,selectors:[["ng-component"]],decls:5,vars:2,consts:[[1,"slds-grid","slds-grid--vertical-align-center"],["size","xx-small",3,"icon",4,"ngIf"],["size","12",4,"ngIf"],[1,"slds-p-left--xx-small"],["label","LBL_EXCHANGE"],["size","xx-small",3,"icon"],["size","12"]],template:function(e,s){1&e&&(d.TgZ(0,"div",0),d.YNc(1,se,1,1,"system-utility-icon",1),d.YNc(2,te,1,0,"system-spinner",2),d.TgZ(3,"div",3),d._UZ(4,"system-label",4),d.qZA()()),2&e&&(d.xp6(1),d.Q6J("ngIf",!s.isLoading),d.xp6(1),d.Q6J("ngIf",s.isLoading))},directives:[i.O5,ee.r,P.W,p._],encapsulation:2}),ContactExchangeSyncButton})(),le=(()=>{class ModuleContacts{}return ModuleContacts.ɵfac=function(e){return new(e||ModuleContacts)},ModuleContacts.ɵmod=d.oAB({type:ModuleContacts}),ModuleContacts.ɵinj=d.cJS({imports:[[i.ez,l.u5,n.ObjectFields,o.GlobalComponents,r.ObjectComponents,c.SystemComponents,a.o]]}),ModuleContacts})();("undefined"==typeof ngJitMode||ngJitMode)&&d.kYT(le,{declarations:[m,C,A,X,ie],imports:[i.ez,l.u5,n.ObjectFields,o.GlobalComponents,r.ObjectComponents,c.SystemComponents,a.o]})}}]);