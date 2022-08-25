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
"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([["src_modules_currencies_modulecurrencies_ts"],{2022:(e,s,t)=>{t.r(s),t.d(s,{ModuleCurrencies:()=>U});var n=t(9808),i=t(1549),r=t(1706),l=t(4518),o=t(6472),c=t(9769),d=t(2382),a=t(5710),u=t(2294),m=t(4893),g=t(4154),h=t(5329),y=t(4505),p=t(5547),b=t(4044),f=t(3278),Z=t(3463),C=t(4664),_=t(2656);function v(e,s){1&e&&m._UZ(0,"system-spinner")}function M(e,s){if(1&e){const e=m.EpF();m.TgZ(0,"div"),m._uU(1),m.TgZ(2,"system-button-icon",6),m.NdJ("click",(function(){m.CHM(e);return m.oxw(2).edit()})),m.qZA()()}if(2&e){const e=m.oxw(2);m.xp6(1),m.AsE(" ",e.defaultCurrency.name," (",e.defaultCurrency.symbol,") ")}}function x(e,s){if(1&e){const e=m.EpF();m.TgZ(0,"div",7)(1,"div",8),m._UZ(2,"system-label",9),m.TgZ(3,"div",10)(4,"input",11),m.NdJ("ngModelChange",(function(s){m.CHM(e);return m.oxw(2).name=s})),m.qZA()()(),m.TgZ(5,"div",8),m._UZ(6,"system-label",9),m.TgZ(7,"div",10)(8,"input",11),m.NdJ("ngModelChange",(function(s){m.CHM(e);return m.oxw(2).iso=s})),m.qZA()()(),m.TgZ(9,"div",8),m._UZ(10,"system-label",9),m.TgZ(11,"div",10)(12,"input",11),m.NdJ("ngModelChange",(function(s){m.CHM(e);return m.oxw(2).symbol=s})),m.qZA()()(),m.TgZ(13,"button",12),m.NdJ("click",(function(){m.CHM(e);return m.oxw(2).cancel()})),m._UZ(14,"system-button-icon",13),m.qZA(),m.TgZ(15,"button",12),m.NdJ("click",(function(){m.CHM(e);return m.oxw(2).savePreference()})),m._UZ(16,"system-button-icon",14),m.qZA()()}if(2&e){const e=m.oxw(2);m.xp6(2),m.Q6J("label","LBL_NAME"),m.xp6(2),m.Q6J("ngModel",e.name),m.xp6(2),m.Q6J("label","LBL_ISO"),m.xp6(2),m.Q6J("ngModel",e.iso),m.xp6(2),m.Q6J("label","LBL_SYMBOL"),m.xp6(2),m.Q6J("ngModel",e.symbol)}}function L(e,s){if(1&e&&(m.TgZ(0,"div",2)(1,"div")(2,"h2",3),m._UZ(3,"system-label",4),m.qZA()(),m.YNc(4,M,3,2,"div",0),m.YNc(5,x,17,6,"div",5),m.qZA()),2&e){const e=m.oxw();m.xp6(4),m.Q6J("ngIf",!e.editMode&&e.defaultCurrency),m.xp6(1),m.Q6J("ngIf",e.editMode)}}let w=(()=>{class SystemCurrency{constructor(e,s,t,n,i,r){this.metadata=e,this.language=s,this.backend=t,this.modal=n,this.view=i,this.toast=r,this.currencies=[],this.loading=!1,this.defaultCurrency={},this.iso="",this.name="",this.symbol=""}ngOnInit(){for(let e of this.currencies)-99==e.id&&(this.defaultCurrency=e);this.iso=this.defaultCurrency.iso,this.name=this.defaultCurrency.name,this.symbol=this.defaultCurrency.symbol}get editMode(){return this.view.isEditMode()}edit(){this.view.isEditable=!0,this.view.setEditMode()}cancel(){this.view.setViewMode()}savePreference(){let e=[{name:"default_currency_iso4217",value:this.iso},{name:"default_currency_name",value:this.name},{name:"default_currency_symbol",value:this.symbol}];this.backend.postRequest("admin/writesettings",{},e).subscribe((e=>{e.status?this.defaultCurrency={iso:this.iso,name:this.name,symbol:this.symbol}:this.toast.sendToast(this.language.getLabel("LBL_ERROR"),"error")})),this.view.setViewMode()}}return SystemCurrency.ɵfac=function(e){return new(e||SystemCurrency)(m.Y36(g.Pu),m.Y36(h.d),m.Y36(y.y),m.Y36(b.o),m.Y36(u.e),m.Y36(f.A))},SystemCurrency.ɵcmp=m.Xpm({type:SystemCurrency,selectors:[["system-currency"]],inputs:{currencies:"currencies"},decls:2,vars:2,consts:[[4,"ngIf"],["class","slds-p-around--medium",4,"ngIf"],[1,"slds-p-around--medium"],[1,"slds-text-title--caps"],["label","LBL_SYSTEM_CURRENCY"],["class","slds-grid slds-grid--align-spread slds-p-vertical--xx-small",4,"ngIf"],["icon","edit",1,"slds-p-left--small",3,"click"],[1,"slds-grid","slds-grid--align-spread","slds-p-vertical--xx-small"],[1,"slds-form-element"],[3,"label"],[1,"slds-form-element__control"],["type","text",1,"slds-input",3,"ngModel","ngModelChange"],[1,"slds-button","slds-button-icon","slds-m-right_x-small",3,"click"],["icon","close"],["icon","save"]],template:function(e,s){1&e&&(m.YNc(0,v,1,0,"system-spinner",0),m.YNc(1,L,6,2,"div",1)),2&e&&(m.Q6J("ngIf",s.loading),m.xp6(1),m.Q6J("ngIf",!s.loading))},directives:[n.O5,C.W,Z._,_.J,d.Fj,d.JJ,d.On],encapsulation:2}),SystemCurrency})();function A(e,s){if(1&e){const e=m.EpF();m.TgZ(0,"div",5)(1,"div",6),m._UZ(2,"system-label",2),m.TgZ(3,"div",7)(4,"input",8),m.NdJ("ngModelChange",(function(s){m.CHM(e);return m.oxw().name=s})),m.qZA()()(),m.TgZ(5,"div",6),m._UZ(6,"system-label",2),m.TgZ(7,"div",7)(8,"input",8),m.NdJ("ngModelChange",(function(s){m.CHM(e);return m.oxw().iso=s})),m.qZA()()(),m.TgZ(9,"div",6),m._UZ(10,"system-label",2),m.TgZ(11,"div",7)(12,"input",8),m.NdJ("ngModelChange",(function(s){m.CHM(e);return m.oxw().symbol=s})),m.qZA()()(),m.TgZ(13,"button",9),m.NdJ("click",(function(){m.CHM(e);return m.oxw().addCurrencyItem()})),m._UZ(14,"system-button-icon",10),m.qZA()()}if(2&e){const e=m.oxw();m.xp6(2),m.Q6J("label","LBL_NAME"),m.xp6(2),m.Q6J("ngModel",e.name),m.xp6(2),m.Q6J("label","LBL_ISO"),m.xp6(2),m.Q6J("ngModel",e.iso),m.xp6(2),m.Q6J("label","LBL_SYMBOL"),m.xp6(2),m.Q6J("ngModel",e.symbol)}}let J=(()=>{class AddCurrencyItem{constructor(e,s,t,n){this.metadata=e,this.language=s,this.backend=t,this.toast=n,this.new=new m.vpe,this.show=!1}toggleShow(){this.show=!this.show}addCurrencyItem(){let e={name:this.name,iso:this.iso,symbol:this.symbol};this.backend.postRequest("module/Currencies/add",{},e).subscribe((e=>{e.status?this.new.emit(!0):this.toast.sendToast(this.language.getLabel("LBL_ERROR"),"error")}))}}return AddCurrencyItem.ɵfac=function(e){return new(e||AddCurrencyItem)(m.Y36(g.Pu),m.Y36(h.d),m.Y36(y.y),m.Y36(f.A))},AddCurrencyItem.ɵcmp=m.Xpm({type:AddCurrencyItem,selectors:[["add-currency-item"]],outputs:{new:"new"},decls:5,vars:3,consts:[[1,"slds-p-around--medium"],[1,"slds-text-title--caps"],[3,"label"],[1,"slds-p-left--small",3,"icon","click"],["class","slds-grid slds-grid--align-spread slds-p-vertical--xx-small",4,"ngIf"],[1,"slds-grid","slds-grid--align-spread","slds-p-vertical--xx-small"],[1,"slds-form-element"],[1,"slds-form-element__control"],["type","text",1,"slds-input",3,"ngModel","ngModelChange"],[1,"slds-button","slds-button-icon","slds-m-right_x-small",3,"click"],["icon","add"]],template:function(e,s){1&e&&(m.TgZ(0,"div",0)(1,"h2",1),m._UZ(2,"system-label",2),m.TgZ(3,"system-button-icon",3),m.NdJ("click",(function(){return s.toggleShow()})),m.qZA()(),m.YNc(4,A,15,6,"div",4),m.qZA()),2&e&&(m.xp6(2),m.Q6J("label","LBL_ADD"),m.xp6(1),m.Q6J("icon",s.show?"chevrondown":"chevronright"),m.xp6(1),m.Q6J("ngIf",s.show))},directives:[Z._,_.J,n.O5,d.Fj,d.JJ,d.On],encapsulation:2}),AddCurrencyItem})();function T(e,s){if(1&e&&(m.TgZ(0,"tr",10)(1,"td"),m._uU(2),m.qZA(),m.TgZ(3,"td"),m._uU(4),m.qZA(),m.TgZ(5,"td"),m._uU(6),m.qZA(),m.TgZ(7,"td"),m._uU(8),m.qZA()()),2&e){const e=s.$implicit;m.xp6(2),m.Oqu(e.name),m.xp6(2),m.Oqu(e.iso),m.xp6(2),m.Oqu(e.symbol),m.xp6(2),m.Oqu(e.conversion_rate)}}let q=(()=>{class CurrencyList{constructor(e,s,t,n){this.metadata=e,this.language=s,this.backend=t,this.modal=n,this.currencies=[]}ngOnInit(){this.currencies.shift()}}return CurrencyList.ɵfac=function(e){return new(e||CurrencyList)(m.Y36(g.Pu),m.Y36(h.d),m.Y36(y.y),m.Y36(b.o))},CurrencyList.ɵcmp=m.Xpm({type:CurrencyList,selectors:[["currency-list"]],inputs:{currencies:"currencies"},decls:16,vars:1,consts:[[1,"slds-p-around--medium"],[1,"slds-text-title--caps"],["label","LBL_CURRENCIES"],[1,"slds-table","slds-table--bordered","slds-table--cell-buffer"],["scope","col"],["label","LBL_NAME"],["label","LBL_ISO"],["label","LBL_SYMBOL"],["label","LBL_CONVERSION_RATE"],["style","vertical-align: middle","class","slds-align-top",4,"ngFor","ngForOf"],[1,"slds-align-top",2,"vertical-align","middle"]],template:function(e,s){1&e&&(m.TgZ(0,"div",0)(1,"h2",1),m._UZ(2,"system-label",2),m.qZA()(),m.TgZ(3,"table",3)(4,"thead")(5,"tr",1)(6,"th",4),m._UZ(7,"system-label",5),m.qZA(),m.TgZ(8,"th",4),m._UZ(9,"system-label",6),m.qZA(),m.TgZ(10,"th",4),m._UZ(11,"system-label",7),m.qZA(),m.TgZ(12,"th",4),m._UZ(13,"system-label",8),m.qZA()()(),m.TgZ(14,"tbody"),m.YNc(15,T,9,4,"tr",9),m.qZA()()),2&e&&(m.xp6(15),m.Q6J("ngForOf",s.currencies))},directives:[Z._,n.sg],encapsulation:2}),CurrencyList})();function Y(e,s){if(1&e){const e=m.EpF();m.TgZ(0,"div")(1,"div",1)(2,"div",2)(3,"h2",3),m._UZ(4,"system-label",4),m.qZA()()(),m.TgZ(5,"div",5),m._UZ(6,"system-currency",6),m.qZA(),m.TgZ(7,"add-currency-item",7),m.NdJ("new",(function(s){m.CHM(e);return m.oxw().reload(s)})),m.qZA(),m._UZ(8,"currency-list",6),m.qZA()}if(2&e){const e=m.oxw();m.xp6(4),m.Q6J("label","LBL_CURRENCY"),m.xp6(2),m.Q6J("currencies",e.currencies),m.xp6(2),m.Q6J("currencies",e.currencies)}}let O=(()=>{class CurrencyManager{constructor(e,s,t,n,i,r,l,o){this.metadata=e,this.language=s,this.backend=t,this.currency=n,this.model=i,this.modal=r,this.toast=l,this.view=o,this.currencies=[],this.loading=!0}ngOnInit(){this.modal.openModal("SystemLoadingModal").subscribe((e=>{this.backend.getRequest("module/Currencies").subscribe((s=>{if(s)for(let e of s)this.currencies.push({id:e.id,name:e.name,iso:e.iso4217,symbol:e.symbol,conversion_rate:e.conversion_rate});else this.toast.sendToast(this.language.getLabel("LBL_ERROR"),"error");this.loading=!1,e.instance.self.destroy()}))}))}reload(e){e&&this.modal.openModal("SystemLoadingModal").subscribe((e=>{this.backend.getRequest("module/Currencies").subscribe((s=>{s?(this.currencies=s,this.currencies.shift()):this.toast.sendToast(this.language.getLabel("LBL_ERROR"),"error"),this.loading=!1,e.instance.self.destroy()}))}))}}return CurrencyManager.ɵfac=function(e){return new(e||CurrencyManager)(m.Y36(g.Pu),m.Y36(h.d),m.Y36(y.y),m.Y36(p.A),m.Y36(a.o),m.Y36(b.o),m.Y36(f.A),m.Y36(u.e))},CurrencyManager.ɵcmp=m.Xpm({type:CurrencyManager,selectors:[["currency-manager"]],features:[m._Bn([u.e,a.o])],decls:1,vars:1,consts:[[4,"ngIf"],[1,"slds-p-around--medium"],[1,"slds-grid","slds-grid--align-spread"],[1,"slds-text-heading--medium"],[3,"label"],[1,"slds-p-vertical--small"],[3,"currencies"],[3,"new"]],template:function(e,s){1&e&&m.YNc(0,Y,9,3,"div",0),2&e&&m.Q6J("ngIf",!s.loading)},directives:[n.O5,Z._,w,J,q],encapsulation:2}),CurrencyManager})(),U=(()=>{class ModuleCurrencies{}return ModuleCurrencies.ɵfac=function(e){return new(e||ModuleCurrencies)},ModuleCurrencies.ɵmod=m.oAB({type:ModuleCurrencies}),ModuleCurrencies.ɵinj=m.cJS({imports:[[n.ez,d.u5,i.ObjectFields,r.GlobalComponents,l.ObjectComponents,o.SystemComponents,c.o]]}),ModuleCurrencies})();("undefined"==typeof ngJitMode||ngJitMode)&&m.kYT(U,{declarations:[O,q,J,w],imports:[n.ez,d.u5,i.ObjectFields,r.GlobalComponents,l.ObjectComponents,o.SystemComponents,c.o]})}}]);