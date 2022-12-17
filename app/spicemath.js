/*!
 * 
 *                     aacService
 *
 *                     release: 2022.03.001
 *
 *                     date: 2022-12-17 18:35:22
 *
 *                     build: 2022.03.001.1671298522887
 *
 */
"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([["src_include_spicemath_spicemath_ts"],{7109:(t,e,i)=>{i.r(e),i.d(e,{ModuleSpiceMath:()=>A});var s=i(6895),n=i(433),l=i(4357),o=i(1227),a=i(3283),h=i(8363),r=i(1652),c=i(1571),u=i(7340),d=i(2422),p=i(2656);const g=["mainDisParent"],f=["mainDis2"],v=["subDisParent"],m=["subDis2"];function b(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"div",40)(1,"button",41),c.NdJ("click",(function(){const e=c.CHM(t).$implicit,i=c.oxw(2);return c.KtG(i.restoreHistory(i.history.indexOf(e)))})),c.TgZ(2,"span",42),c._uU(3),c.qZA(),c.TgZ(4,"span",43),c._uU(5),c.qZA()()()}if(2&t){const t=e.$implicit;c.xp6(3),c.Oqu(t.mainDisplay),c.xp6(2),c.Oqu(t.value)}}function x(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"div",33)(1,"div",34)(2,"div",35)(3,"button",36),c.NdJ("click",(function(){c.CHM(t);const e=c.oxw();return c.KtG(e.deleteHistory())})),c._UZ(4,"system-button-icon",37),c.qZA()(),c.TgZ(5,"div",38),c.YNc(6,b,6,2,"div",39),c.qZA()()()}if(2&t){const t=c.oxw();c.Q6J("@slideInOutHistory",t.historyState),c.xp6(6),c.Q6J("ngForOf",t.history)}}function y(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"button",44),c.NdJ("click",(function(){c.CHM(t);const e=c.oxw();return c.KtG(e.slideHistory())})),c._UZ(1,"system-button-icon",45),c.qZA()}}function k(t,e){if(1&t){const t=c.EpF();c.O4$(),c.kcU(),c.TgZ(0,"button",46),c.NdJ("click",(function(){c.CHM(t);const e=c.oxw();return c.KtG(e.slideHistory())})),c._UZ(1,"system-button-icon",45),c.qZA()}}function S(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"button",51),c.NdJ("click",(function(){const e=c.CHM(t).$implicit,i=c.oxw(2);return c.KtG(i.restoreHistory(i.history.indexOf(e)))})),c.TgZ(1,"span",42),c._uU(2),c.qZA(),c.TgZ(3,"span",43),c._uU(4),c.qZA()()}if(2&t){const t=e.$implicit;c.xp6(2),c.Oqu(t.mainDisplay),c.xp6(2),c.Oqu(t.value)}}function C(t,e){if(1&t){const t=c.EpF();c.O4$(),c.kcU(),c.TgZ(0,"div")(1,"div",47),c.YNc(2,S,5,2,"button",48),c.qZA(),c.TgZ(3,"div",49)(4,"button",50),c.NdJ("click",(function(){c.CHM(t);const e=c.oxw();return c.KtG(e.deleteHistory())})),c._UZ(5,"system-button-icon",37),c.qZA()()()}if(2&t){const t=c.oxw();c.Q6J("@slideInOutHistory",t.historyState),c.xp6(2),c.Q6J("ngForOf",t.history)}}const T=function(t,e){return{"slds-grid":t,"slds-grid--vertical":e,"slds-height_full":!0}};let Z=(()=>{class SpiceCalculator{constructor(t,e,i){this.cdRef=t,this.userPreferences=e,this.el=i,this.history=[],this.fontSizeSub="300%",this.fontSizeMain="250%",this.mainDisplayText="",this.showHistory=!1,this.fromModal=!1,this.negateCheck=!1,this.size=!1,this.check=!1,this.opCheck=!1,this.focus=!1,this.dotCheck=!1,this.numCount=0,this._value="",this.decimalSeparator=this.userPreferences.toUse.dec_sep??".",this.separator=","===this.decimalSeparator?".":","}get value(){return this._value}set value(t){"number"==typeof t&&(t=t.toString()),this._value=t,this.onChange(t)}slideHistory(t=!0){if(this.showHistory=!this.showHistory,this.size?(this.historyState=this.showHistory?"openTop":"closedTop",this.cdRef.detectChanges()):(this.historyState=this.showHistory?"openRight":"closedRight",this.cdRef.detectChanges()),t){for(let t=1;t<=10;t++)setTimeout((()=>this.sizeCheck("dynamicWidth")),40*t);setTimeout((()=>this.handleFontSize()),400)}}ngAfterViewInit(){setTimeout((()=>this.sizeCheck("all")),10),this.showHistory=!this.showHistory,this.slideHistory(),"modal"===this.el.nativeElement.parentElement.id&&(this.focus=!0,this.fromModal=!0)}sizeCheck(t){const e="0 0 "+this.subDis1.nativeElement.getBoundingClientRect().width.toString()+" "+this.subDis1.nativeElement.getBoundingClientRect().height.toString();if("dynamicWidth"===t){if(this.mainDis1.nativeElement.attributes.viewBox.value===e)return;return this.mainDis1.nativeElement.attributes.viewBox.value=e,this.subDis1.nativeElement.attributes.viewBox.value=e,this.handleFontSize(),this.sizeCheck("dynamicWidth")}this.mainDis1.nativeElement.attributes.viewBox.value=e,this.subDis1.nativeElement.attributes.viewBox.value=e,this.handleFontSize(),void 0!==this.el.nativeElement&&(this.el.nativeElement.getBoundingClientRect().width<=375&&!this.size?(this.size=!0,this.showHistory=!this.showHistory,setTimeout((()=>this.slideHistory(!1)),10)):this.el.nativeElement.getBoundingClientRect().width>375&&this.size&&(this.size=!1,this.showHistory=!this.showHistory,setTimeout((()=>this.slideHistory(!1)),10)))}deleteHistory(){this.history=[]}registerOnChange(t){this.onChange=t}registerOnTouched(t){}writeValue(t){this._value=null!=t?this.setSeparators(t):"",this.cdRef.detectChanges()}delete(){if(-1!==this.value.search(/Infinity/)||"Undefined Result"===this.value||this.check||""===this.value&&""===this.mainDisplayText)return;const t=this.value.slice(0,-1);""===this.value?(this.value=this.mainDisplayText.slice(0,-1),this.mainDisplayText="",this.negateCheck=!0,this.dotCheck=2===this.value.split(this.decimalSeparator).length,this.numCount=this.mainDisplayText.slice(0,-1).split(this.separator).join("").split(this.decimalSeparator).join("").length,this.opCheck=!1):1===this.value.length?(this.negateCheck=!1,this.value=""):(t===this.decimalSeparator&&(this.dotCheck=!1),this.value=this.setSeparators(this.value.slice(0,-1))),isNaN(parseFloat(t))||(this.numCount-=1),this.subDis2.nativeElement.attributes["font-size"].value=this.fontSizeSub,this.handleOverflow("sub")}onKeyPress(t){if(-1!==this.value.search(/Infinity/)||"Undefined Result"===this.value){if(t===this.mainDisplayText[this.opPosition-1])this.value="",this.mainDisplayText=this.mainDisplayText.slice(0,this.opPosition-1)+t,this.negateCheck=!1,this.numCount=0;else{if(isNaN(t))return;isNaN(t)||(this.value=t,this.mainDisplayText=this.mainDisplayText.slice(0,this.opPosition),this.negateCheck=!0,this.numCount=1)}return this.check=!1,this.dotCheck=!1,this.subDis2.nativeElement.attributes["font-size"].value=this.fontSizeSub,this.mainDis2.nativeElement.attributes["font-size"].value=this.fontSizeMain,void setTimeout((()=>this.handleOverflow("main")),10)}const e=this.value?this.value.slice(-1):this.mainDisplayText?this.mainDisplayText.slice(-1):"";if(t!==this.decimalSeparator||!this.check){if("-"!==t||this.negateCheck){if(-1!==["+","*","/","-"].indexOf(t)){if(this.value.slice(-1)===this.decimalSeparator)return;if(-1!==["+","*","/","-",""].indexOf(e)){if("-"===t||""===e||""!==this.value)return;return void(this.mainDisplayText=this.mainDisplayText.slice(0,-1)+t)}{this.check&&!parseFloat(t)&&(this.mainDisplayText="");const e=this.calculate("operator");return-1!==["Infinity","-Infinity","Undefined Result"].indexOf(e)?void(this.check=!0):(this.mainDisplayText=(this.opCheck?this.calculate("operator"):this.value)+t,this.value="",this.opPosition=this.mainDisplayText.length,this.opCheck=!0,this.negateCheck=!1,this.dotCheck=!1,this.check=!1,this.numCount=0,this.subDis2.nativeElement.attributes["font-size"].value=this.fontSizeSub,this.mainDis2.nativeElement.attributes["font-size"].value=this.fontSizeMain,void setTimeout((()=>this.handleOverflow("main")),10))}}if(-1!==["+","*","/","-","",this.decimalSeparator].indexOf(e)&&t===this.decimalSeparator||this.dotCheck&&t===this.decimalSeparator||this.numCount>=16)return;if(this.check)this.setSettings("default"),this.value=t,this.negateCheck=!0,this.numCount=1;else if("0"!==e||this.dotCheck||1!==this.value.length)t===this.decimalSeparator&&(this.dotCheck=!0,this.numCount-=1),this.value+=t,this.negateCheck=!0,this.numCount+=1;else{if("0"===t)return;isNaN(parseInt(t))?this.value+=t:this.value=t}}else this.value+="-",this.negateCheck=!0;0===this.history.length&&setTimeout((()=>this.handleFontSize()),10),this.value=this.setSeparators(this.value),setTimeout((()=>this.handleOverflow("sub")),10)}}calculate(t){let e,i,s,n=this.mainDisplayText[this.opPosition-1];if(""!==this.value&&""!==this.mainDisplayText&&-1===this.value.search(/Infinity/)&&"Undefined Result"!==this.value&&this.value.slice(0,-1)!==this.decimalSeparator&&!isNaN(parseInt(this.value[this.value.length-1]))){switch(this.check?(e=parseFloat(this.value.split(this.separator).join("").split(this.decimalSeparator).join(".")),i=parseFloat(this.mainDisplayText.slice(this.opPosition,-1).split(this.separator).join("").split(this.decimalSeparator).join(".")),this.mainDisplayText=this.value+n+this.mainDisplayText.substring(this.opPosition),this.opPosition=this.value.length+1):(e=parseFloat(this.mainDisplayText.slice(0,-1).split(this.separator).join("").split(this.decimalSeparator).join(".")),i=parseFloat(this.value.split(this.separator).join("").split(this.decimalSeparator).join(".")),this.mainDisplayText+=this.value+"="),n){case"+":s=e+i;break;case"-":s=e-i;break;case"*":s=e*i;break;case"/":s=e/i;break;default:console.log("calculation Error")}if(isNaN(s)||s===1/0?(s=isNaN(s)?"Undefined Result":"Infinity",this.value=s):s=this.setSeparators(this.checkZeros(s.toString()).split(".").join(this.decimalSeparator)),"operator"===t)return this.value=s,this.check=!1,this.addToHistory(),s;this.setSettings("calculation"),this.value=s,this.addToHistory(),setTimeout((()=>{this.handleOverflow("main"),this.handleOverflow("sub")}),10)}}setSettings(t){switch(t){case"default":this.mainDisplayText="",this.value="",this.opPosition=null,this.check=!1,this.negateCheck=!1,this.opCheck=!1,this.dotCheck=!1,this.numCount=0,this.subDis2.nativeElement.attributes["font-size"].value=this.fontSizeSub,this.mainDis2.nativeElement.attributes["font-size"].value=this.fontSizeMain;break;case"calculation":this.check=!0,this.negateCheck=!0,this.opCheck=!1,this.dotCheck=!1,this.numCount=0,this.subDis2.nativeElement.attributes["font-size"].value=this.fontSizeSub,this.mainDis2.nativeElement.attributes["font-size"].value=this.fontSizeMain;break;case"value":this.check&&this.setSettings("default"),this.value="",this.negateCheck=!1,this.dotCheck=!1,this.subDis2.nativeElement.attributes["font-size"].value=this.fontSizeSub}}onClick(t){this.fromModal||(this.focus=this.el.nativeElement.contains(t))}KeyEvent(t){if(!this.focus)return;if("c"===t.key&&t.ctrlKey)navigator.clipboard.writeText(this.value).then(),t.preventDefault();else if("-"===t.key&&t.ctrlKey)this.negate(),t.preventDefault();else if(t.ctrlKey&&"e"===t.key)this.setSettings("value"),t.preventDefault();else{if(t.ctrlKey)return;-1!==["1","2","3","4","5","6","7","8","9","0"].indexOf(t.key)||-1!==["+","*","/","-",this.decimalSeparator].indexOf(t.key)?(this.onKeyPress(t.key),t.preventDefault()):"Enter"===t.key?(this.calculate("enter"),t.preventDefault()):"c"===t.key||"C"===t.key?(this.setSettings("default"),t.preventDefault()):"Backspace"===t.key&&(this.delete(),t.preventDefault())}}handleOverflow(t){if("sub"===t){const e=this.subDis1.nativeElement.getBoundingClientRect().width,i=this.subDis2.nativeElement.getBoundingClientRect().width,s=parseFloat(this.subDis2.nativeElement.attributes["font-size"].value.slice(0,-1));if(e-5<=i)return this.subDis2.nativeElement.attributes["font-size"].value=(.99*s).toString()+"%",this.handleOverflow(t)}else{const e=this.mainDis1.nativeElement.getBoundingClientRect().width,i=this.mainDis2.nativeElement.getBoundingClientRect().width,s=parseFloat(this.mainDis2.nativeElement.attributes["font-size"].value.slice(0,-1));if(e-5<=i)return this.mainDis2.nativeElement.attributes["font-size"].value=(.99*s).toString()+"%",this.handleOverflow(t)}}handleFontSize(){const t=parseFloat(this.fontSizeSub.slice(0,-1));return 0!==this.subDis2.nativeElement.getBoundingClientRect().height&&this.subDis2.nativeElement.getBoundingClientRect().height<.9*this.subDis1.nativeElement.getBoundingClientRect().height?(this.fontSizeSub=(1.1*t).toString()+"%",this.subDis2.nativeElement.attributes["font-size"].value=this.fontSizeSub,this.fontSizeMain=(.8*t).toString()+"%",this.mainDis2.nativeElement.attributes["font-size"].value=(.8*t).toString()+"%",this.handleFontSize()):this.subDis2.nativeElement.getBoundingClientRect().height>1.1*this.subDis1.nativeElement.getBoundingClientRect().height?(this.fontSizeSub=(.9*t).toString()+"%",this.subDis2.nativeElement.attributes["font-size"].value=this.fontSizeSub,this.fontSizeMain=(.8*t).toString()+"%",this.mainDis2.nativeElement.attributes["font-size"].value=(.8*t).toString()+"%",this.handleFontSize()):void 0}restoreHistory(t){this.setSettings("calculation"),this.value=this.history[t].value,this.mainDisplayText=this.history[t].mainDisplay}addToHistory(){this.history.unshift({value:this.value,mainDisplay:this.mainDisplayText})}negate(){-1===this.value.search(/Infinity/)&&"Undefined Result"!==this.value&&this.check&&(this.value=this.setSeparators((-1*parseFloat(this.value.split(this.decimalSeparator).join("."))).toString().split(".").join(this.decimalSeparator)))}percent(){if(!this.opCheck||["-","+","*","/"].indexOf(this.mainDisplayText.slice(-1))&&!this.value)return;let t=parseFloat(this.value.split(this.separator).join("").split(this.decimalSeparator).join("."))/100;if("+"===this.mainDisplayText[this.opPosition-1]||"-"===this.mainDisplayText[this.opPosition-1]){const e=this.mainDisplayText.slice(0,-1).split(this.separator).join("").split(this.decimalSeparator).join(".");t=parseFloat(e)*t}this.value=this.setSeparators(t.toString().split(".").join(this.decimalSeparator)),this.dotCheck=-1!==this.value.indexOf(this.decimalSeparator),setTimeout((()=>{this.handleOverflow("sub"),this.handleOverflow("main")}),10)}setSeparators(t){if(-1!==t.search(/Infinity/)||"Undefined Result"===t)return t;let e=t.split(this.decimalSeparator);"-"===t[0]&&(e=t.substring(1).split(this.decimalSeparator)),-1!==t.search(/e[+]\d+/)&&(e=t.substring(0,t.search(/e[+]\d+/)).split(this.decimalSeparator));let i=e[0].length,s=e[0].split(this.separator).join("");if(i>3){let i=[];for(let t=1;t<=s.length;t++)t%3==0&&i.unshift(s.substr(s.length-t,3));return s=s.length===3*i.length?i.join(this.separator):s.substring(0,s.length-3*i.length)+this.separator+i.join(this.separator),e.splice(0,1,s),("-"===t[0]?"-":"")+e.join(this.decimalSeparator)}return t}checkZeros(t){if(-1!==t.indexOf(this.decimalSeparator)){const e=t.substring(0,t.indexOf(this.decimalSeparator)),i=t.substring(t.indexOf(this.decimalSeparator));t=-1!==t.search(/000000/)?e+i.substring(0,i.search(/000000/)):t}return t}}return SpiceCalculator.ɵfac=function(t){return new(t||SpiceCalculator)(c.Y36(c.sBO),c.Y36(d.z),c.Y36(c.SBq))},SpiceCalculator.ɵcmp=c.Xpm({type:SpiceCalculator,selectors:[["spice-calculator"]],viewQuery:function(t,e){if(1&t&&(c.Gf(g,5),c.Gf(f,5),c.Gf(v,5),c.Gf(m,5)),2&t){let t;c.iGM(t=c.CRH())&&(e.mainDis1=t.first),c.iGM(t=c.CRH())&&(e.mainDis2=t.first),c.iGM(t=c.CRH())&&(e.subDis1=t.first),c.iGM(t=c.CRH())&&(e.subDis2=t.first)}},hostBindings:function(t,e){1&t&&c.NdJ("click",(function(t){return e.onClick(t.target)}),!1,c.Jf7)("keydown",(function(t){return e.KeyEvent(t)}),!1,c.Jf7)},features:[c._Bn([{multi:!0,provide:n.JU,useExisting:(0,c.Gpc)((()=>SpiceCalculator))}])],decls:131,vars:13,consts:[[3,"ngClass"],["class","slds-size_1-of-1 slds-grid slds-grid--vertical","style","height: 5%;overflow: hidden; display:flex",4,"ngIf"],["class","slds-button slds-button_icon slds-button_icon slds-split-view__toggle-button slds-size_1-of-1","style","height: 4%; position: unset",3,"click",4,"ngIf"],[1,"slds-grid","slds-size--1-of-1","slds-height_full"],[1,"slds-grid","slds-grid--vertical","slds-m-around--small"],[1,"slds-p-bottom--xxx-small",2,"height","30%"],[1,"slds-has-dividers_around-space","slds-height_full"],[1,"slds-grid","slds-grid--vertical","slds-item","slds-height_full"],[2,"height","50%"],["id","subDis1","preserveAspectRatio","xMidYMid meet","width","100%","height","100%","viewBox","0 0 1 1",1,"slds-p-around--none","slds-m-around--none"],["mainDisParent",""],["x","100%","y","50%","text-anchor","end","dominant-baseline","central","font-size","150%"],["mainDis2",""],["subDisParent",""],["id","subDis2","x","100%","y","50%","text-anchor","end","dominant-baseline","central","font-size","300%"],["subDis2",""],[1,"slds-grid","slds-grid--vertical","slds-gutters_direct-xxx-small",2,"height","70%"],[1,"slds-grid","slds-gutters_direct-xxx-small","slds-height_full",2,"height","20%"],[1,"slds-col","slds-size_1-of-5","slds-p-top--xxx-small","slds-p-bottom--xxx-small","slds-height_full"],[1,"slds-button","slds-button--icon","slds-button--icon-border","slds-size--1-of-1","slds-height_full",3,"click"],[1,"slds-button__icon","slds-size_1-of-1",2,"height","45%","color","var(--color-grey-13)"],[0,"xlink","href","./vendor/sldassets/icons/utility-sprite/svg/symbols.svg#percent"],[1,"slds-button","slds-button_neutral","slds-size--1-of-1","slds-height_full","slds-p-around--none",3,"click"],["preserveAspectRatio","xMidYMid meet","width","100%","height","100%","viewBox","0 0 1 1",1,"ng-tns-c1-1","slds-p-around--none","slds-m-around--none"],["x","50%","y","50%","text-anchor","middle","dominant-baseline","central","font-size","4%"],[1,"slds-button","slds-button_neutral","slds-size--1-of-1","slds-height_full","slds-p-around--none",2,"font-size","100%",3,"click"],[1,"slds-button","slds-button--icon","slds-button--icon-border","slds-size--1-of-1","slds-height_full",2,"font-size","100%",3,"click"],[1,"slds-button__icon","slds-size--1-of-1",2,"height","45%","color","var(--color-grey-13)"],[0,"xlink","href","./vendor/sldassets/icons/utility-sprite/svg/symbols.svg#back"],[1,"slds-col","slds-size_1-of-4","slds-p-top--xxx-small","slds-p-bottom--xxx-small","slds-height_full"],[1,"slds-col","slds-size_1-of-4","slds-p-top--xxx-small","slds-height_full"],["class","slds-button slds-button_icon slds-button_icon slds-split-view__toggle-button slds-is-open","style","width: 3%; position: unset",3,"click",4,"ngIf"],[4,"ngIf"],[1,"slds-size_1-of-1","slds-grid","slds-grid--vertical",2,"height","5%","overflow","hidden","display","flex"],[1,"slds-grid","slds-height_full"],[1,"slds-m-around--xxx-small",2,"width","5%"],[1,"slds-button","slds-size--1-of-1","slds-height_full",3,"click"],["icon","delete",1,"slds-align--absolute-center"],[1,"slds-grid","slds-grid--vertical","slds-scrollable--y","slds-p-around--xx-small",2,"width","95%","display","flex","flex-direction","column-reverse"],["class","slds-m-around--xxx-small",4,"ngFor","ngForOf"],[1,"slds-m-around--xxx-small"],[1,"slds-button","slds-button_neutral","slds-grid","slds-grid--vertical","slds-p-around--x-small","slds-size--1-of-1",3,"click"],[1,"slds-text-heading--small","slds-size--1-of-1","slds-text-align--right",2,"overflow","hidden","font-size","0.75rem","float","right"],[1,"slds-text-heading_medium","slds-size--1-of-1","slds-text-align--right",2,"overflow","hidden","font-size","1rem","float","right"],[1,"slds-button","slds-button_icon","slds-button_icon","slds-split-view__toggle-button","slds-size_1-of-1",2,"height","4%","position","unset",3,"click"],["icon","refresh",2,"transform","scale(-0.75, 0.75)"],[1,"slds-button","slds-button_icon","slds-button_icon","slds-split-view__toggle-button","slds-is-open",2,"width","3%","position","unset",3,"click"],[1,"slds-grid","slds-grid--vertical","slds-scrollable--y","slds-p-around--xx-small",2,"height","95%","width","100%"],["class","slds-button slds-button_neutral slds-grid slds-grid--vertical slds-p-around--x-small slds-size--1-of-1 slds-m-around--xxx-small slds-m-left--none",3,"click",4,"ngFor","ngForOf"],[1,"slds-p-around--xxx-small",2,"height","5%"],[1,"slds-size--1-of-1","slds-button","slds-height_full",2,"float","right",3,"click"],[1,"slds-button","slds-button_neutral","slds-grid","slds-grid--vertical","slds-p-around--x-small","slds-size--1-of-1","slds-m-around--xxx-small","slds-m-left--none",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.YNc(1,x,7,2,"div",1),c.YNc(2,y,2,0,"button",2),c.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8),c.O4$(),c.TgZ(9,"svg",9,10)(11,"text",11,12),c._uU(13),c.qZA()()(),c.kcU(),c.TgZ(14,"div",8),c.O4$(),c.TgZ(15,"svg",9,13)(17,"text",14,15),c._uU(19),c.qZA()()()()()(),c.kcU(),c.TgZ(20,"div",16)(21,"div",17)(22,"div",18)(23,"button",19),c.NdJ("click",(function(){return e.percent()})),c.O4$(),c.TgZ(24,"svg",20),c._UZ(25,"use",21),c.qZA()()(),c.kcU(),c.TgZ(26,"div",18)(27,"button",22),c.NdJ("click",(function(){return e.setSettings("value")})),c.O4$(),c.TgZ(28,"svg",23)(29,"text",24),c._uU(30,"CE"),c.qZA()()()(),c.kcU(),c.TgZ(31,"div",18)(32,"button",25),c.NdJ("click",(function(){return e.setSettings("default")})),c.O4$(),c.TgZ(33,"svg",23)(34,"text",24),c._uU(35,"C"),c.qZA()()()(),c.kcU(),c.TgZ(36,"div",18)(37,"button",26),c.NdJ("click",(function(){return e.delete()})),c.O4$(),c.TgZ(38,"svg",27),c._UZ(39,"use",28),c.qZA()()(),c.kcU(),c.TgZ(40,"div",18)(41,"button",25),c.NdJ("click",(function(){return e.onKeyPress("/")})),c.O4$(),c.TgZ(42,"svg",23)(43,"text",24),c._uU(44,"/"),c.qZA()()()()(),c.kcU(),c.TgZ(45,"div",17)(46,"div",29)(47,"button",22),c.NdJ("click",(function(){return e.onKeyPress("7")})),c.O4$(),c.TgZ(48,"svg",23)(49,"text",24),c._uU(50,"7"),c.qZA()()()(),c.kcU(),c.TgZ(51,"div",29)(52,"button",22),c.NdJ("click",(function(){return e.onKeyPress("8")})),c.O4$(),c.TgZ(53,"svg",23)(54,"text",24),c._uU(55,"8"),c.qZA()()()(),c.kcU(),c.TgZ(56,"div",29)(57,"button",22),c.NdJ("click",(function(){return e.onKeyPress("9")})),c.O4$(),c.TgZ(58,"svg",23)(59,"text",24),c._uU(60,"9"),c.qZA()()()(),c.kcU(),c.TgZ(61,"div",29)(62,"button",22),c.NdJ("click",(function(){return e.onKeyPress("*")})),c.O4$(),c.TgZ(63,"svg",23)(64,"text",24),c._uU(65,"*"),c.qZA()()()()(),c.kcU(),c.TgZ(66,"div",17)(67,"div",29)(68,"button",22),c.NdJ("click",(function(){return e.onKeyPress("4")})),c.O4$(),c.TgZ(69,"svg",23)(70,"text",24),c._uU(71,"4"),c.qZA()()()(),c.kcU(),c.TgZ(72,"div",29)(73,"button",22),c.NdJ("click",(function(){return e.onKeyPress("5")})),c.O4$(),c.TgZ(74,"svg",23)(75,"text",24),c._uU(76,"5"),c.qZA()()()(),c.kcU(),c.TgZ(77,"div",29)(78,"button",22),c.NdJ("click",(function(){return e.onKeyPress("6")})),c.O4$(),c.TgZ(79,"svg",23)(80,"text",24),c._uU(81,"6"),c.qZA()()()(),c.kcU(),c.TgZ(82,"div",29)(83,"button",22),c.NdJ("click",(function(){return e.onKeyPress("-")})),c.O4$(),c.TgZ(84,"svg",23)(85,"text",24),c._uU(86,"-"),c.qZA()()()()(),c.kcU(),c.TgZ(87,"div",17)(88,"div",29)(89,"button",22),c.NdJ("click",(function(){return e.onKeyPress("1")})),c.O4$(),c.TgZ(90,"svg",23)(91,"text",24),c._uU(92,"1"),c.qZA()()()(),c.kcU(),c.TgZ(93,"div",29)(94,"button",22),c.NdJ("click",(function(){return e.onKeyPress("2")})),c.O4$(),c.TgZ(95,"svg",23)(96,"text",24),c._uU(97,"2"),c.qZA()()()(),c.kcU(),c.TgZ(98,"div",29)(99,"button",22),c.NdJ("click",(function(){return e.onKeyPress("3")})),c.O4$(),c.TgZ(100,"svg",23)(101,"text",24),c._uU(102,"3"),c.qZA()()()(),c.kcU(),c.TgZ(103,"div",29)(104,"button",22),c.NdJ("click",(function(){return e.onKeyPress("+")})),c.O4$(),c.TgZ(105,"svg",23)(106,"text",24),c._uU(107,"+"),c.qZA()()()()(),c.kcU(),c.TgZ(108,"div",17)(109,"div",30)(110,"button",22),c.NdJ("click",(function(){return e.negate()})),c.O4$(),c.TgZ(111,"svg",23)(112,"text",24),c._uU(113,"(-)"),c.qZA()()()(),c.kcU(),c.TgZ(114,"div",30)(115,"button",22),c.NdJ("click",(function(){return e.onKeyPress("0")})),c.O4$(),c.TgZ(116,"svg",23)(117,"text",24),c._uU(118,"0"),c.qZA()()()(),c.kcU(),c.TgZ(119,"div",30)(120,"button",22),c.NdJ("click",(function(){return e.onKeyPress(e.decimalSeparator)})),c.O4$(),c.TgZ(121,"svg",23)(122,"text",24),c._uU(123),c.qZA()()()(),c.kcU(),c.TgZ(124,"div",30)(125,"button",22),c.NdJ("click",(function(){return e.calculate("enter")})),c.O4$(),c.TgZ(126,"svg",23)(127,"text",24),c._uU(128,"="),c.qZA()()()()()()(),c.YNc(129,k,2,0,"button",31),c.YNc(130,C,6,2,"div",32),c.qZA()()),2&t&&(c.Q6J("ngClass",c.WLB(10,T,e.size,e.size)),c.xp6(1),c.Q6J("ngIf",e.size),c.xp6(1),c.Q6J("ngIf",e.size),c.xp6(1),c.Q6J("@slideInOutCalculatorTop",e.size?e.historyState:"ClosedCompletely"),c.xp6(1),c.Q6J("@slideInOutCalculatorRight",e.size?"closedRightCompletely":e.historyState),c.xp6(9),c.Oqu(e.mainDisplayText),c.xp6(6),c.Oqu(e.value),c.xp6(104),c.Oqu(e.decimalSeparator),c.xp6(6),c.Q6J("ngIf",!e.size),c.xp6(1),c.Q6J("ngIf",!e.size))},dependencies:[s.mk,s.sg,s.O5,p.J],encapsulation:2,data:{animation:[(0,u.X$)("slideInOutCalculatorRight",[(0,u.SB)("openRight",(0,u.oB)({width:"67%","margin-right":"12px"})),(0,u.SB)("closedRight",(0,u.oB)({width:"100%","margin-right":"12px"})),(0,u.SB)("closedRightCompletely",(0,u.oB)({width:"100%","margin-right":"12px"})),(0,u.eR)("openRight <=> closedRight",[(0,u.jt)("400ms")]),(0,u.eR)("openRight <=> closedRightCompletely",[(0,u.jt)("400ms")])]),(0,u.X$)("slideInOutCalculatorTop",[(0,u.SB)("closedTop",(0,u.oB)({width:"100%",height:"95%"})),(0,u.SB)("ClosedCompletely",(0,u.oB)({height:"100%"})),(0,u.SB)("openTop",(0,u.oB)({width:"100%",height:"66%"})),(0,u.eR)("openTop <=> closedTop",[(0,u.jt)("400ms")]),(0,u.eR)("openTop <=> closedCompletely",[(0,u.jt)("400ms")])]),(0,u.X$)("slideInOutHistory",[(0,u.SB)("openRight",(0,u.oB)({width:"30%","padding-left":"4px"})),(0,u.SB)("closedRight",(0,u.oB)({width:"0%","padding-left":"0"})),(0,u.SB)("closedRightCompletely",(0,u.oB)({width:"100%","padding-right":0})),(0,u.SB)("closedTop",(0,u.oB)({height:0})),(0,u.SB)("openTop",(0,u.oB)({height:"30%"})),(0,u.eR)("openTop <=> closedTop",[(0,u.jt)("400ms")]),(0,u.eR)("openRight <=> closedRight",[(0,u.jt)("400ms")])]),(0,u.X$)("slideInOutHistoryPanelTop",[(0,u.SB)("closedTop",(0,u.oB)({height:"0",padding:0})),(0,u.SB)("openTop",(0,u.oB)({height:"100%",padding:"4px"})),(0,u.eR)("openTop <=> closedTop",[(0,u.jt)("400ms")])])]},changeDetection:0}),SpiceCalculator})();var z=i(7579),_=i(3463),D=i(9621),w=i(3499),O=i(5767),U=i(1916);const J=["calculator"];function M(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"button",9),c.NdJ("click",(function(){c.CHM(t);const e=c.oxw();return c.KtG(e.cancel())})),c._UZ(1,"system-label",10),c.qZA()}}function R(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"button",11),c.NdJ("click",(function(){c.CHM(t);const e=c.oxw();return c.KtG(e.apply())})),c._UZ(1,"system-label",12),c.qZA()}}let B=(()=>{class SpiceCalculatorModal{constructor(t){this.userPreferences=t,this.trigger=!1,this.valueSubject=new z.x,this.value$=this.valueSubject.asObservable(),this.decimalSeparator=this.userPreferences.toUse.dec_sep??".",this.seperator=","===this.decimalSeparator?".":","}cancel(){this.self.destroy()}setValue(t){this.value=t}apply(){this.valueSubject.next(parseFloat(this.value.split(this.seperator).join("").split(this.decimalSeparator).join("."))),this.valueSubject.complete(),this.cancel()}}return SpiceCalculatorModal.ɵfac=function(t){return new(t||SpiceCalculatorModal)(c.Y36(d.z))},SpiceCalculatorModal.ɵcmp=c.Xpm({type:SpiceCalculatorModal,selectors:[["spice-calculator-modal"]],viewQuery:function(t,e){if(1&t&&c.Gf(J,5),2&t){let t;c.iGM(t=c.CRH())&&(e.spicecalculator=t.first)}},decls:10,vars:3,consts:[[1,"slds-small-size_1-of-6","slds-align_absolute-center"],[3,"close"],["label","LBL_CALCULATOR"],[1,"slds-p-around--none",2,"max-height","420px","padding","0"],["id","modal",2,"height","420px"],[2,"height","400px",3,"ngModel","ngModelChange"],["calculator",""],["class","slds-button slds-button--neutral",3,"click",4,"ngIf"],["class","slds-button slds-button--brand",3,"click",4,"ngIf"],[1,"slds-button","slds-button--neutral",3,"click"],["label","LBL_CANCEL"],[1,"slds-button","slds-button--brand",3,"click"],["label","LBL_APPLY"]],template:function(t,e){1&t&&(c.TgZ(0,"system-modal",0)(1,"system-modal-header",1),c.NdJ("close",(function(){return e.cancel()})),c._UZ(2,"system-label",2),c.qZA(),c.TgZ(3,"system-modal-content",3)(4,"div",4)(5,"spice-calculator",5,6),c.NdJ("ngModelChange",(function(t){return e.value=t})),c.qZA()()(),c.TgZ(7,"system-modal-footer"),c.YNc(8,M,2,0,"button",7),c.YNc(9,R,2,0,"button",8),c.qZA()()),2&t&&(c.xp6(5),c.Q6J("ngModel",e.value),c.xp6(3),c.Q6J("ngIf",e.trigger),c.xp6(1),c.Q6J("ngIf",e.trigger))},dependencies:[s.O5,n.JJ,n.On,_._,D.j,w.x,O.p,U.y,Z],encapsulation:2,changeDetection:0}),SpiceCalculatorModal})();var N=i(2294);const E=["spiceCalculator"];let q=(()=>{class SpiceCalculatorDashlet{constructor(t,e){this.el=t,this.view=e}sizeCheck(){"edit"===this.view.getMode()?(this.spiceCalculator.sizeCheck(),setTimeout((()=>this.sizeCheck()),1e3)):this.spiceCalculator.sizeCheck()}onResize(){console.log("resize"),this.spiceCalculator.sizeCheck("all")}ngAfterViewInit(){this.sizeCheck(),this.view.mode$.subscribe((t=>{"edit"===t&&this.sizeCheck()}))}}return SpiceCalculatorDashlet.ɵfac=function(t){return new(t||SpiceCalculatorDashlet)(c.Y36(c.SBq),c.Y36(N.e))},SpiceCalculatorDashlet.ɵcmp=c.Xpm({type:SpiceCalculatorDashlet,selectors:[["spice-calculator-dashlet"]],viewQuery:function(t,e){if(1&t&&c.Gf(E,5),2&t){let t;c.iGM(t=c.CRH())&&(e.spiceCalculator=t.first)}},hostBindings:function(t,e){1&t&&c.NdJ("resize",(function(){return e.onResize()}),!1,c.Jf7)},decls:3,vars:1,consts:[["id","dashlet",1,"slds-size--1-of-1","slds-height_full",2,"min-height","350px","min-width","270px"],[3,"ngModel","ngModelChange"],["spiceCalculator",""]],template:function(t,e){1&t&&(c.TgZ(0,"div",0)(1,"spice-calculator",1,2),c.NdJ("ngModelChange",(function(t){return e.value=t})),c.qZA()()),2&t&&(c.xp6(1),c.Q6J("ngModel",e.value))},dependencies:[n.JJ,n.On,Z],encapsulation:2,changeDetection:0}),SpiceCalculatorDashlet})(),A=(()=>{class ModuleSpiceMath{}return ModuleSpiceMath.ɵfac=function(t){return new(t||ModuleSpiceMath)},ModuleSpiceMath.ɵmod=c.oAB({type:ModuleSpiceMath}),ModuleSpiceMath.ɵinj=c.cJS({imports:[s.ez,n.u5,o.ObjectFields,a.GlobalComponents,h.ObjectComponents,r.SystemComponents,l.o]}),ModuleSpiceMath})();("undefined"==typeof ngJitMode||ngJitMode)&&c.kYT(A,{declarations:[B,Z,q],imports:[s.ez,n.u5,o.ObjectFields,a.GlobalComponents,h.ObjectComponents,r.SystemComponents,l.o],exports:[Z]})}}]);