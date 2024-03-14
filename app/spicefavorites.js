/*!
 * 
 *                     aacService
 *
 *                     release: 2023.03.001
 *
 *                     date: 2024-01-09 17:11:28
 *
 *                     build: 2023.03.001.1704816688524
 *
 */
"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([["src_include_spicefavorites_spicefavorites_ts"],{28009:(e,t,i)=>{i.r(t),i.d(t,{ModuleSpiceFavorites:()=>T});var s=i(44755),o=i(95030),l=i(84357),n=i(53190),d=i(34826),a=i(19784),c=i(57239),m=i(62242),r=i(64376),u=i(55329),f=i(83463),p=i(59621),g=i(83499),v=i(75767),_=i(1916),b=i(55710),h=i(32294),F=i(4154),Z=i(33634),y=i(55931),x=i(72656),S=i(44561),J=i(93333);function M(e,t){if(1&e&&(m.TgZ(0,"span"),m._uU(1),m.qZA()),2&e){const e=m.oxw();m.xp6(1),m.Oqu(e.model.data.summary_text)}}function k(e,t){if(1&e&&(m.TgZ(0,"li",8),m._UZ(1,"field-container",14),m.qZA()),2&e){const e=m.oxw().$implicit;m.xp6(1),m.Q6J("field",e.field)("fieldconfig",e.fieldconfig)}}function w(e,t){if(1&e&&(m.ynx(0),m.YNc(1,k,2,2,"li",13),m.BQk()),2&e){const e=t.$implicit,i=m.oxw();m.xp6(1),m.Q6J("ngIf",i.model.getField(e.field))}}let C=(()=>{class SpiceFavoritesItem{model;language;metadata;view;favorite;item={};mainfieldset;subfieldsetfields;constructor(e,t,i,s,o){this.model=e,this.language=t,this.metadata=i,this.view=s,this.favorite=o,this.view.displayLabels=!1}ngOnInit(){this.initializeModel(),this.loadConfig()}initializeModel(){this.model.module=this.item.module_name,this.model.id=this.item.item_id,this.model.setData(this.item.data)}loadConfig(){let e=this.metadata.getComponentConfig("GlobalHeaderSearchResultsItem",this.model.module);this.mainfieldset=e.mainfieldset,e&&e.subfieldset&&(this.subfieldsetfields=this.metadata.getFieldSetItems(e.subfieldset))}deleteFavorite(){this.favorite.deleteFavorite(this.model.module,this.model.id)}static ɵfac=function(e){return new(e||SpiceFavoritesItem)(m.Y36(b.o),m.Y36(u.d),m.Y36(F.Pu),m.Y36(h.e),m.Y36(r.G))};static ɵcmp=m.Xpm({type:SpiceFavoritesItem,selectors:[["spice-favorites-item"]],inputs:{item:"item"},features:[m._Bn([b.o,h.e])],decls:13,vars:6,consts:[["role","option",1,"slds-lookup__item-action","slds-media","slds-media--center"],["size","small",3,"module"],[1,"slds-media__body"],[1,"slds-lookup__result-text"],[4,"ngIf"],[3,"fieldset"],[1,"slds-lookup__result-meta","slds-text-body--small"],[1,"slds-list_horizontal","slds-has-dividers_right","slds-truncate"],[1,"slds-item"],[3,"module","singular"],[4,"ngFor","ngForOf"],[1,"slds-button","slds-button--icon","slds-button--icon-border",3,"click"],["icon","delete"],["class","slds-item",4,"ngIf"],["fielddisplayclass","slds-truncate",3,"field","fieldconfig"]],template:function(e,t){1&e&&(m.TgZ(0,"div",0),m._UZ(1,"system-icon",1),m.TgZ(2,"div",2)(3,"div",3),m.YNc(4,M,2,1,"span",4),m._UZ(5,"object-record-fieldset-horizontal-list",5),m.qZA(),m.TgZ(6,"span",6)(7,"ul",7)(8,"li",8),m._UZ(9,"system-label-modulename",9),m.qZA(),m.YNc(10,w,2,1,"ng-container",10),m.qZA()()(),m.TgZ(11,"button",11),m.NdJ("click",(function(){return t.deleteFavorite()})),m._UZ(12,"system-button-icon",12),m.qZA()()),2&e&&(m.xp6(1),m.Q6J("module",t.model.module),m.xp6(3),m.Q6J("ngIf",!t.mainfieldset),m.xp6(1),m.Q6J("fieldset",t.mainfieldset),m.xp6(4),m.Q6J("module",t.model.module)("singular",!0),m.xp6(1),m.Q6J("ngForOf",t.subfieldsetfields))},dependencies:[s.sg,s.O5,Z.j,y.Z,x.J,S.f,J.M],encapsulation:2})}return SpiceFavoritesItem})();function I(e,t){if(1&e&&m._UZ(0,"spice-favorites-item",6),2&e){const e=t.$implicit;m.Q6J("item",e)}}let O=(()=>{class SpiceFavoritesEditModal{favorite;language;self;constructor(e,t){this.favorite=e,this.language=t}close(){this.self.destroy()}static ɵfac=function(e){return new(e||SpiceFavoritesEditModal)(m.Y36(r.G),m.Y36(u.d))};static ɵcmp=m.Xpm({type:SpiceFavoritesEditModal,selectors:[["ng-component"]],decls:8,vars:2,consts:[[3,"close"],["label","LBL_EDIT_FAVORITES"],["margin","none",3,"grow"],["role","presentation","class","slds-listbox__item",3,"item",4,"ngFor","ngForOf"],[1,"slds-button","slds-button--neutral",3,"click"],["label","LBL_CLOSE"],["role","presentation",1,"slds-listbox__item",3,"item"]],template:function(e,t){1&e&&(m.TgZ(0,"system-modal")(1,"system-modal-header",0),m.NdJ("close",(function(){return t.close()})),m._UZ(2,"system-label",1),m.qZA(),m.TgZ(3,"system-modal-content",2),m.YNc(4,I,1,1,"spice-favorites-item",3),m.qZA(),m.TgZ(5,"system-modal-footer")(6,"button",4),m.NdJ("click",(function(){return t.close()})),m._UZ(7,"system-label",5),m.qZA()()()),2&e&&(m.xp6(3),m.Q6J("grow",!0),m.xp6(1),m.Q6J("ngForOf",t.favorite.favorites))},dependencies:[s.sg,f._,p.j,g.x,v.p,_.y,C],encapsulation:2})}return SpiceFavoritesEditModal})(),T=(()=>{class ModuleSpiceFavorites{static ɵfac=function(e){return new(e||ModuleSpiceFavorites)};static ɵmod=m.oAB({type:ModuleSpiceFavorites});static ɵinj=m.cJS({imports:[s.ez,o.u5,n.ObjectFields,d.GlobalComponents,a.ObjectComponents,c.SystemComponents,l.o]})}return ModuleSpiceFavorites})();("undefined"==typeof ngJitMode||ngJitMode)&&m.kYT(T,{declarations:[O,C],imports:[s.ez,o.u5,n.ObjectFields,d.GlobalComponents,a.ObjectComponents,c.SystemComponents,l.o]})}}]);