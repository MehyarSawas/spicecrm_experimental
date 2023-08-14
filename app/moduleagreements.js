/*!
 * 
 *                     aacService
 *
 *                     release: 2023.02.001
 *
 *                     date: 2023-08-14 15:46:31
 *
 *                     build: 2023.02.001.1692020791886
 *
 */
"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([["src_modules_agreements_moduleagreements_ts"],{2273:(e,t,s)=>{s.r(t),s.d(t,{ModuleAgreements:()=>L});var i=s(1180),o=s(4755),n=s(5030),d=s(3190),l=s(4826),a=s(6490),m=s(3735),r=s(4357),h=s(5710),c=s(2294),u=s(7579),v=s(2242),b=s(5329),g=s(3278),p=s(4154),A=s(4505),Z=s(4044),_=s(323),M=s(3348),f=s(6951),R=s(3463),N=s(9621),C=s(3499),y=s(5767),E=s(1916);let k=(()=>{var e;class AgreementsAddRevisionModal{constructor(e,t,s,o,n,d,l,a,m,r){(0,i.Z)(this,"language",void 0),(0,i.Z)(this,"model",void 0),(0,i.Z)(this,"parentModel",void 0),(0,i.Z)(this,"view",void 0),(0,i.Z)(this,"toast",void 0),(0,i.Z)(this,"metadata",void 0),(0,i.Z)(this,"backend",void 0),(0,i.Z)(this,"modal",void 0),(0,i.Z)(this,"modelattachments",void 0),(0,i.Z)(this,"router",void 0),(0,i.Z)(this,"componentset",""),(0,i.Z)(this,"spiceattachment",{}),(0,i.Z)(this,"self",void 0),(0,i.Z)(this,"files",{}),(0,i.Z)(this,"revComponent",{}),(0,i.Z)(this,"revNumber",1),(0,i.Z)(this,"revName",void 0),(0,i.Z)(this,"responseSubject",new u.x),this.language=e,this.model=t,this.parentModel=s,this.view=o,this.toast=n,this.metadata=d,this.backend=l,this.modal=a,this.modelattachments=m,this.router=r,this.model.module="AgreementRevisions",this.model.initialize()}ngOnInit(){this.metadata.getComponentConfig("AgreementsAddRevisionModal",this.model.module);this.componentset=this.revComponent.revComponent,this.view.isEditable=!0,this.view.setEditMode(),this.model.initialize(this.parentModel),this.model.startEdit(),this.modelattachments.module=this.model.module,this.modelattachments.id=this.model.id,this.generateRevNumb(),this.generateRevName()}generateRevNumb(){let e=this.parentModel.getRelatedRecords("agreementrevisions").sort(((e,t)=>e.version_number-t.version_number)).reverse();return e.length>0&&(this.revNumber=e[0].version_number+1),this.model.setField("version_number",this.revNumber),this.revNumber}generateRevName(){return this.revName=this.revNumber+"_"+this.spiceattachment.filename,this.model.setField("name",this.revName),this.revName}get canAdd(){return this.model.validate()}addRevision(e=!1){let t=this.model.data;this.model.validate()&&(this.modelattachments.files=[],this.modelattachments.uploadAttachmentsBase64(this.files).subscribe({next:s=>{this.model.data=t,this.model.save(),this.model.setField("id",this.model.id),this.parentModel.addRelatedRecords("agreementrevisions",[this.model.data],!1),this.responseSubject.next(!0),e&&this.router.navigate(["/module/AgreementRevisions/"+this.model.id])},error:()=>{this.toast.sendToast(this.language.getLabel("LBL_CREATING_REVISION_ATTACHMENT"),"error")}}),this.closeModal())}closeModal(){this.model.cancelEdit(),this.self.destroy()}}return e=AgreementsAddRevisionModal,(0,i.Z)(AgreementsAddRevisionModal,"ɵfac",(function(t){return new(t||e)(v.Y36(b.d),v.Y36(h.o),v.Y36(h.o,4),v.Y36(c.e),v.Y36(g.A),v.Y36(p.Pu),v.Y36(A.y),v.Y36(Z.o),v.Y36(_.H),v.Y36(M.F0))})),(0,i.Z)(AgreementsAddRevisionModal,"ɵcmp",v.Xpm({type:e,selectors:[["agreements-add-revision-modal"]],features:[v._Bn([c.e,h.o])],decls:13,vars:3,consts:[["size","medium"],[3,"close"],["label","LBL_ADD_REVISION"],[3,"componentset"],[1,"slds-grid","slds-grid--vertical-align-center"],[1,"slds-col--bump-left","slds-button","slds-button--neutral",3,"click"],["label","LBL_CANCEL"],[1,"slds-col--bump-left","slds-button","slds-button--brand",3,"disabled","click"],["label","LBL_SAVE"],["label","LBL_SAVE_AND_GO_TO_RECORD"]],template:function(e,t){1&e&&(v.TgZ(0,"system-modal",0)(1,"system-modal-header",1),v.NdJ("close",(function(){return t.closeModal()})),v._UZ(2,"system-label",2),v.qZA(),v.TgZ(3,"system-modal-content"),v._UZ(4,"system-componentset",3),v.qZA(),v.TgZ(5,"system-modal-footer")(6,"div",4)(7,"button",5),v.NdJ("click",(function(){return t.closeModal()})),v._UZ(8,"system-label",6),v.qZA(),v.TgZ(9,"button",7),v.NdJ("click",(function(){return t.addRevision()})),v._UZ(10,"system-label",8),v.qZA(),v.TgZ(11,"button",7),v.NdJ("click",(function(){return t.addRevision(!0)})),v._UZ(12,"system-label",9),v.qZA()()()()),2&e&&(v.xp6(4),v.Q6J("componentset",t.componentset),v.xp6(5),v.Q6J("disabled",!t.canAdd),v.xp6(2),v.Q6J("disabled",!t.canAdd))},dependencies:[f.E,R._,N.j,C.x,y.p,E.y],encapsulation:2})),AgreementsAddRevisionModal})(),L=(()=>{var e;class ModuleAgreements{}return e=ModuleAgreements,(0,i.Z)(ModuleAgreements,"ɵfac",(function(t){return new(t||e)})),(0,i.Z)(ModuleAgreements,"ɵmod",v.oAB({type:e})),(0,i.Z)(ModuleAgreements,"ɵinj",v.cJS({imports:[o.ez,n.u5,d.ObjectFields,l.GlobalComponents,a.ObjectComponents,m.SystemComponents,r.o]})),ModuleAgreements})();("undefined"==typeof ngJitMode||ngJitMode)&&v.kYT(L,{declarations:[k],imports:[o.ez,n.u5,d.ObjectFields,l.GlobalComponents,a.ObjectComponents,m.SystemComponents,r.o]})}}]);