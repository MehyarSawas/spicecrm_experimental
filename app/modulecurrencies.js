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
"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([["src_modules_currencies_modulecurrencies_ts"],{92022:(e,s,t)=>{t.r(s),t.d(s,{ModuleCurrencies:()=>N});var n=t(44755),i=t(53190),o=t(34826),r=t(19784),l=t(57239),c=t(84357),a=t(95030),d=t(55710),u=t(32294),g=t(62242),m=t(4154),p=t(55329),h=t(14505),b=t(25547),y=t(44044),f=t(13278),_=t(83463);function Z(e,s){if(1&e&&(g.TgZ(0,"tr",10)(1,"td"),g._uU(2),g.qZA(),g.TgZ(3,"td"),g._uU(4),g.qZA(),g.TgZ(5,"td"),g._uU(6),g.qZA(),g.TgZ(7,"td"),g._uU(8),g.qZA()()),2&e){const e=s.$implicit;g.xp6(2),g.Oqu(e.name),g.xp6(2),g.Oqu(e.iso),g.xp6(2),g.Oqu(e.symbol),g.xp6(2),g.Oqu(e.conversion_rate)}}let v=(()=>{class CurrencyList{metadata;language;backend;modal;currencies=[];constructor(e,s,t,n){this.metadata=e,this.language=s,this.backend=t,this.modal=n}ngOnInit(){this.currencies.shift()}static ɵfac=function(e){return new(e||CurrencyList)(g.Y36(m.Pu),g.Y36(p.d),g.Y36(h.y),g.Y36(y.o))};static ɵcmp=g.Xpm({type:CurrencyList,selectors:[["currency-list"]],inputs:{currencies:"currencies"},decls:16,vars:1,consts:[[1,"slds-p-around--medium"],[1,"slds-text-title--caps"],["label","LBL_CURRENCIES"],[1,"slds-table","slds-table--bordered","slds-table--cell-buffer"],["scope","col"],["label","LBL_NAME"],["label","LBL_ISO"],["label","LBL_SYMBOL"],["label","LBL_CONVERSION_RATE"],["style","vertical-align: middle","class","slds-align-top",4,"ngFor","ngForOf"],[1,"slds-align-top",2,"vertical-align","middle"]],template:function(e,s){1&e&&(g.TgZ(0,"div",0)(1,"h2",1),g._UZ(2,"system-label",2),g.qZA()(),g.TgZ(3,"table",3)(4,"thead")(5,"tr",1)(6,"th",4),g._UZ(7,"system-label",5),g.qZA(),g.TgZ(8,"th",4),g._UZ(9,"system-label",6),g.qZA(),g.TgZ(10,"th",4),g._UZ(11,"system-label",7),g.qZA(),g.TgZ(12,"th",4),g._UZ(13,"system-label",8),g.qZA()()(),g.TgZ(14,"tbody"),g.YNc(15,Z,9,4,"tr",9),g.qZA()()),2&e&&(g.xp6(15),g.Q6J("ngForOf",s.currencies))},dependencies:[n.sg,_._],encapsulation:2})}return CurrencyList})();var C=t(72656);function M(e,s){if(1&e){const e=g.EpF();g.TgZ(0,"div",5)(1,"div",6),g._UZ(2,"system-label",2),g.TgZ(3,"div",7)(4,"input",8),g.NdJ("ngModelChange",(function(s){g.CHM(e);const t=g.oxw();return g.KtG(t.name=s)})),g.qZA()()(),g.TgZ(5,"div",6),g._UZ(6,"system-label",2),g.TgZ(7,"div",7)(8,"input",8),g.NdJ("ngModelChange",(function(s){g.CHM(e);const t=g.oxw();return g.KtG(t.iso=s)})),g.qZA()()(),g.TgZ(9,"div",6),g._UZ(10,"system-label",2),g.TgZ(11,"div",7)(12,"input",8),g.NdJ("ngModelChange",(function(s){g.CHM(e);const t=g.oxw();return g.KtG(t.symbol=s)})),g.qZA()()(),g.TgZ(13,"div",6),g._UZ(14,"system-label",2),g.TgZ(15,"div",7)(16,"input",9),g.NdJ("ngModelChange",(function(s){g.CHM(e);const t=g.oxw();return g.KtG(t.conversion_rate=s)})),g.qZA()()(),g.TgZ(17,"button",10),g.NdJ("click",(function(){g.CHM(e);const s=g.oxw();return g.KtG(s.addCurrencyItem())})),g._UZ(18,"system-button-icon",11),g.qZA()()}if(2&e){const e=g.oxw();g.xp6(2),g.Q6J("label","LBL_NAME"),g.xp6(2),g.Q6J("ngModel",e.name),g.xp6(2),g.Q6J("label","LBL_ISO"),g.xp6(2),g.Q6J("ngModel",e.iso),g.xp6(2),g.Q6J("label","LBL_SYMBOL"),g.xp6(2),g.Q6J("ngModel",e.symbol),g.xp6(2),g.Q6J("label","LBL_CONVERSION_RATE"),g.xp6(2),g.Q6J("ngModel",e.conversion_rate)}}let x=(()=>{class AddCurrencyItem{metadata;language;backend;toast;new=new g.vpe;name;iso;symbol;conversion_rate=1;show=!1;constructor(e,s,t,n){this.metadata=e,this.language=s,this.backend=t,this.toast=n}toggleShow(){this.show=!this.show}addCurrencyItem(){let e={name:this.name,iso:this.iso,symbol:this.symbol,conversion_rate:this.conversion_rate};this.isMoreZero(this.conversion_rate)?this.backend.postRequest("module/Currencies/add",{},e).subscribe((e=>{e.status?this.new.emit(!0):this.toast.sendToast(this.language.getLabel("LBL_ERROR"),"error")})):this.toast.sendToast(this.language.getLabel("LBL_ERROR"),"error")}isMoreZero(e){return!!(0<e&&e)}static ɵfac=function(e){return new(e||AddCurrencyItem)(g.Y36(m.Pu),g.Y36(p.d),g.Y36(h.y),g.Y36(f.A))};static ɵcmp=g.Xpm({type:AddCurrencyItem,selectors:[["add-currency-item"]],outputs:{new:"new"},decls:5,vars:3,consts:[[1,"slds-p-around--medium"],[1,"slds-text-title--caps"],[3,"label"],[1,"slds-p-left--small",3,"icon","click"],["class","slds-grid slds-grid--align-spread slds-p-vertical--xx-small",4,"ngIf"],[1,"slds-grid","slds-grid--align-spread","slds-p-vertical--xx-small"],[1,"slds-form-element"],[1,"slds-form-element__control"],["type","text",1,"slds-input",3,"ngModel","ngModelChange"],["type","number",1,"slds-input",3,"ngModel","ngModelChange"],[1,"slds-button","slds-button-icon","slds-m-right_x-small",3,"click"],["icon","add"]],template:function(e,s){1&e&&(g.TgZ(0,"div",0)(1,"h2",1),g._UZ(2,"system-label",2),g.TgZ(3,"system-button-icon",3),g.NdJ("click",(function(){return s.toggleShow()})),g.qZA()(),g.YNc(4,M,19,8,"div",4),g.qZA()),2&e&&(g.xp6(2),g.Q6J("label","LBL_ADD"),g.xp6(1),g.Q6J("icon",s.show?"chevrondown":"chevronright"),g.xp6(1),g.Q6J("ngIf",s.show))},dependencies:[n.O5,a.Fj,a.wV,a.JJ,a.On,C.J,_._],encapsulation:2})}return AddCurrencyItem})();var L=t(94664);function w(e,s){1&e&&g._UZ(0,"system-spinner")}function J(e,s){if(1&e){const e=g.EpF();g.TgZ(0,"div"),g._uU(1),g.TgZ(2,"system-button-icon",6),g.NdJ("click",(function(){g.CHM(e);const s=g.oxw(2);return g.KtG(s.edit())})),g.qZA()()}if(2&e){const e=g.oxw(2);g.xp6(1),g.AsE(" ",e.defaultCurrency.name," (",e.defaultCurrency.symbol,") ")}}function A(e,s){if(1&e){const e=g.EpF();g.TgZ(0,"div",7)(1,"div",8),g._UZ(2,"system-label",9),g.TgZ(3,"div",10)(4,"input",11),g.NdJ("ngModelChange",(function(s){g.CHM(e);const t=g.oxw(2);return g.KtG(t.name=s)})),g.qZA()()(),g.TgZ(5,"div",8),g._UZ(6,"system-label",9),g.TgZ(7,"div",10)(8,"input",11),g.NdJ("ngModelChange",(function(s){g.CHM(e);const t=g.oxw(2);return g.KtG(t.iso=s)})),g.qZA()()(),g.TgZ(9,"div",8),g._UZ(10,"system-label",9),g.TgZ(11,"div",10)(12,"input",11),g.NdJ("ngModelChange",(function(s){g.CHM(e);const t=g.oxw(2);return g.KtG(t.symbol=s)})),g.qZA()()(),g.TgZ(13,"button",12),g.NdJ("click",(function(){g.CHM(e);const s=g.oxw(2);return g.KtG(s.cancel())})),g._UZ(14,"system-button-icon",13),g.qZA(),g.TgZ(15,"button",12),g.NdJ("click",(function(){g.CHM(e);const s=g.oxw(2);return g.KtG(s.savePreference())})),g._UZ(16,"system-button-icon",14),g.qZA()()}if(2&e){const e=g.oxw(2);g.xp6(2),g.Q6J("label","LBL_NAME"),g.xp6(2),g.Q6J("ngModel",e.name),g.xp6(2),g.Q6J("label","LBL_ISO"),g.xp6(2),g.Q6J("ngModel",e.iso),g.xp6(2),g.Q6J("label","LBL_SYMBOL"),g.xp6(2),g.Q6J("ngModel",e.symbol)}}function T(e,s){if(1&e&&(g.TgZ(0,"div",2)(1,"div")(2,"h2",3),g._UZ(3,"system-label",4),g.qZA()(),g.YNc(4,J,3,2,"div",0),g.YNc(5,A,17,6,"div",5),g.qZA()),2&e){const e=g.oxw();g.xp6(4),g.Q6J("ngIf",!e.editMode&&e.defaultCurrency),g.xp6(1),g.Q6J("ngIf",e.editMode)}}let q=(()=>{class SystemCurrency{metadata;language;backend;modal;view;toast;currencies=[];loading=!1;defaultCurrency={};iso="";name="";symbol="";conversion_rate="";constructor(e,s,t,n,i,o){this.metadata=e,this.language=s,this.backend=t,this.modal=n,this.view=i,this.toast=o}ngOnInit(){for(let e of this.currencies)-99==e.id&&(this.defaultCurrency=e);this.iso=this.defaultCurrency.iso,this.name=this.defaultCurrency.name,this.symbol=this.defaultCurrency.symbol,this.conversion_rate=this.defaultCurrency.conversion_rate}get editMode(){return this.view.isEditMode()}edit(){this.view.isEditable=!0,this.view.setEditMode()}cancel(){this.view.setViewMode()}savePreference(){let e={currencies:{default_currency_iso4217:this.iso,default_currency_name:this.name,default_currency_symbol:this.symbol,default_currency_conversion_rate:this.conversion_rate}};this.backend.postRequest("configuration/settings",{},e).subscribe((e=>{e.status?this.defaultCurrency={iso:this.iso,name:this.name,symbol:this.symbol,conversion_rate:this.conversion_rate}:this.toast.sendToast(this.language.getLabel("LBL_ERROR"),"error")})),this.view.setViewMode()}static ɵfac=function(e){return new(e||SystemCurrency)(g.Y36(m.Pu),g.Y36(p.d),g.Y36(h.y),g.Y36(y.o),g.Y36(u.e),g.Y36(f.A))};static ɵcmp=g.Xpm({type:SystemCurrency,selectors:[["system-currency"]],inputs:{currencies:"currencies"},decls:2,vars:2,consts:[[4,"ngIf"],["class","slds-p-around--medium",4,"ngIf"],[1,"slds-p-around--medium"],[1,"slds-text-title--caps"],["label","LBL_SYSTEM_CURRENCY"],["class","slds-grid slds-grid--align-spread slds-p-vertical--xx-small",4,"ngIf"],["icon","edit",1,"slds-p-left--small",3,"click"],[1,"slds-grid","slds-grid--align-spread","slds-p-vertical--xx-small"],[1,"slds-form-element"],[3,"label"],[1,"slds-form-element__control"],["type","text",1,"slds-input",3,"ngModel","ngModelChange"],[1,"slds-button","slds-button-icon","slds-m-right_x-small",3,"click"],["icon","close"],["icon","save"]],template:function(e,s){1&e&&(g.YNc(0,w,1,0,"system-spinner",0),g.YNc(1,T,6,2,"div",1)),2&e&&(g.Q6J("ngIf",s.loading),g.xp6(1),g.Q6J("ngIf",!s.loading))},dependencies:[n.O5,a.Fj,a.JJ,a.On,C.J,_._,L.W],encapsulation:2})}return SystemCurrency})();function Y(e,s){if(1&e){const e=g.EpF();g.TgZ(0,"div")(1,"div",1)(2,"div",2)(3,"h2",3),g._UZ(4,"system-label",4),g.qZA()()(),g.TgZ(5,"div",5),g._UZ(6,"system-currency",6),g.qZA(),g.TgZ(7,"add-currency-item",7),g.NdJ("new",(function(s){g.CHM(e);const t=g.oxw();return g.KtG(t.reload(s))})),g.qZA(),g._UZ(8,"currency-list",6),g.qZA()}if(2&e){const e=g.oxw();g.xp6(4),g.Q6J("label","LBL_CURRENCY"),g.xp6(2),g.Q6J("currencies",e.currencies),g.xp6(2),g.Q6J("currencies",e.currencies)}}let O=(()=>{class CurrencyManager{metadata;language;backend;currency;model;modal;toast;view;currencies=[];loading=!0;constructor(e,s,t,n,i,o,r,l){this.metadata=e,this.language=s,this.backend=t,this.currency=n,this.model=i,this.modal=o,this.toast=r,this.view=l}ngOnInit(){this.modal.openModal("SystemLoadingModal").subscribe((e=>{this.backend.getRequest("module/Currencies").subscribe((s=>{if(s)for(let e of s)this.currencies.push({id:e.id,name:e.name,iso:e.iso4217,symbol:e.symbol,conversion_rate:e.conversion_rate});else this.toast.sendToast(this.language.getLabel("LBL_ERROR"),"error");this.loading=!1,e.instance.self.destroy()}))}))}reload(e){e&&this.modal.openModal("SystemLoadingModal").subscribe((e=>{this.backend.getRequest("module/Currencies").subscribe((s=>{s?(this.currencies=s,this.currencies.shift()):this.toast.sendToast(this.language.getLabel("LBL_ERROR"),"error"),this.loading=!1,e.instance.self.destroy()}))}))}static ɵfac=function(e){return new(e||CurrencyManager)(g.Y36(m.Pu),g.Y36(p.d),g.Y36(h.y),g.Y36(b.A),g.Y36(d.o),g.Y36(y.o),g.Y36(f.A),g.Y36(u.e))};static ɵcmp=g.Xpm({type:CurrencyManager,selectors:[["currency-manager"]],features:[g._Bn([u.e,d.o])],decls:1,vars:1,consts:[[4,"ngIf"],[1,"slds-p-around--medium"],[1,"slds-grid","slds-grid--align-spread"],[1,"slds-text-heading--medium"],[3,"label"],[1,"slds-p-vertical--small"],[3,"currencies"],[3,"new"]],template:function(e,s){1&e&&g.YNc(0,Y,9,3,"div",0),2&e&&g.Q6J("ngIf",!s.loading)},dependencies:[n.O5,_._,v,x,q],encapsulation:2})}return CurrencyManager})(),N=(()=>{class ModuleCurrencies{static ɵfac=function(e){return new(e||ModuleCurrencies)};static ɵmod=g.oAB({type:ModuleCurrencies});static ɵinj=g.cJS({imports:[n.ez,a.u5,i.ObjectFields,o.GlobalComponents,r.ObjectComponents,l.SystemComponents,c.o]})}return ModuleCurrencies})();("undefined"==typeof ngJitMode||ngJitMode)&&g.kYT(N,{declarations:[O,v,x,q],imports:[n.ez,a.u5,i.ObjectFields,o.GlobalComponents,r.ObjectComponents,l.SystemComponents,c.o]})}}]);