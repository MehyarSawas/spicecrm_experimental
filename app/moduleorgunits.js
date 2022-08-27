/*!
 * 
 *                     aacService
 *
 *                     release: 2022.02.001
 *
 *                     date: 2022-08-27 21:23:03
 *
 *                     build: 2022.02.001.1661628183471
 *
 */
"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([["src_modules_orgunits_moduleorgunits_ts"],{6814:(t,e,i)=>{i.r(e),i.d(e,{ModuleOrgunits:()=>G});var o=i(6895),n=i(433),s=i(3121),r=i(3283),d=i(4518),l=i(5478),a=i(4357),u=i(1571),c=i(7579),g=i(5710),h=i(4505);let m=(()=>{class orgunitsViewService{constructor(t,e){this.model=t,this.backend=e,this.updated$=new u.vpe,this.orgunits=[],this.orgcharts=[],this.orgchartElements=[],this.connectors=[],this.loading=!0}loadOrgUnits(){let t=new c.x;return this.orgchartElements=[],this.orgunits=[],this.orgcharts=[],this.connectors=[],this.loading=!0,this.backend.getRequest(`module/OrgCharts/${this.model.id}/allOrgunits`).subscribe({next:e=>{this.orgunits=e.orgunits,this.orgcharts=e.orgcharts,window.setTimeout((()=>this.buildConnectors()),0),t.next(!0),t.complete(),this.loading=!1},error:e=>{this.loading=!1,t.error("could not load orgunits")}}),t.asObservable()}deleteOrgUnit(t){this.orgunits.splice(this.orgunits.findIndex((e=>e.id==t)),1),this.orgchartElements.splice(this.orgchartElements.findIndex((e=>e.id==t)),1),window.setTimeout((()=>this.buildConnectors()),0)}setNativeElement(t,e){let i=this.orgchartElements.find((e=>e.id==t));i?i.nativeElement=e:this.orgchartElements.push({id:t,nativeElement:e}),this.buildConnectors()}buildConnectors(){if(this.orgunits.length+this.orgcharts.length!=this.orgchartElements.length)return;this.connectors=[];let t=this.orgunits.find((t=>!t.parent_id));this.buildConnectorsForNode(t.id),this.updated$.emit(!0)}buildConnectorsForNode(t){let e=this.orgchartElements.find((e=>e.id==t)).nativeElement,i=this.viewport.getBoundingClientRect().top,o=this.viewport.getBoundingClientRect().left,n=(this.viewport.scrollWidth,this.viewport.scrollHeight,this.orgunits.filter((e=>e.parent_id==t)).map((t=>t.id)).concat(this.orgcharts.filter((e=>e.orgunit_id==t)).map((t=>t.id))));if(n.length>0){let t=e.getBoundingClientRect(),s=t.left+t.width/2-o,r=t.bottom-i,d=[],l=null,a=null,u=null;for(let t of n){let e=this.orgchartElements.find((e=>e.id==t)).nativeElement.getBoundingClientRect(),n=e.left+e.width/2-o,s=e.top-i;(!l||n>l)&&(l=n),(!u||n<u)&&(u=n),(!a||s<a)&&(a=s),d.push({cBoxX:n,cBoxY:s})}let c=r+(a-r)/2;this.connectors.push(`M ${s},${r} L ${s},${c}`),this.connectors.push(`M ${u},${c} L ${l},${c}`);for(let t of d)this.connectors.push(`M ${t.cBoxX},${c} L ${t.cBoxX},${t.cBoxY}`);for(let t of n)this.buildConnectorsForNode(t)}}}return orgunitsViewService.ɵfac=function(t){return new(t||orgunitsViewService)(u.LFG(g.o),u.LFG(h.y))},orgunitsViewService.ɵprov=u.Yz7({token:orgunitsViewService,factory:orgunitsViewService.ɵfac}),orgunitsViewService})();var p=i(2656),w=i(4664),v=i(6274),f=i(151),b=i(1790),O=i(4044);let C=(()=>{class OrgunitsChartViewBoxAdd{constructor(t,e,i,o,n){this.oview=t,this.backend=e,this.modal=i,this.model=o,this.parent=n}add(){this.modal.openModal("OrgunitsChartViewBoxAddOptions").subscribe((t=>{t.instance.selection.subscribe({next:t=>{switch(t){case"addorgunit":this.model.module="OrgUnits",this.model.initialize(),this.model.addModel(null,this.parent,{parent_id:this.parent.id,parent_name:this.parent.getField("name"),orgchart_id:this.oview.orgChart.id,orgchart_name:this.oview.orgChart.getField("name")}).subscribe({next:t=>{this.oview.orgunits.push(t)}});break;case"addorgchart":this.model.module="OrgCharts",this.model.initialize(),this.model.addModel(null,this.parent,{parent_id:this.oview.orgChart.getField("parent_id"),parent_type:this.oview.orgChart.getField("parent_type"),parent_name:this.oview.orgChart.getField("parent_name"),orgchart_id:this.oview.orgChart.id,orgchart_name:this.oview.orgChart.getField("name"),orgunit_id:this.parent.id,orgunit_name:this.parent.getField("name")}).subscribe({next:t=>{this.oview.orgcharts.push(t)}});break;case"selectorgunit":this.modal.openModal("ObjectModalModuleLookup").subscribe((t=>{t.instance.module="OrgUnits",t.instance.multiselect=!1,t.instance.selectedItems.subscribe((t=>{let e=this.modal.await("LBL_LOADING");this.backend.putRequest(`module/OrgCharts/${this.oview.orgChart.id}/orgunit/${this.parent.id}/${t[0].id}`).subscribe({next:t=>{this.oview.loadOrgUnits().subscribe({next:t=>{e.emit(!0)},error:()=>{e.emit(!0)}})},error:()=>{e.emit(!0)}})}))}));break;case"selectorgchart":this.modal.openModal("ObjectModalModuleLookup").subscribe((t=>{t.instance.module="OrgCharts",t.instance.multiselect=!1,t.instance.selectedItems.subscribe((t=>{}))}))}}})}))}}return OrgunitsChartViewBoxAdd.ɵfac=function(t){return new(t||OrgunitsChartViewBoxAdd)(u.Y36(m),u.Y36(h.y),u.Y36(O.o),u.Y36(g.o),u.Y36(g.o,4))},OrgunitsChartViewBoxAdd.ɵcmp=u.Xpm({type:OrgunitsChartViewBoxAdd,selectors:[["orgunits-chart-view-box-add"]],features:[u._Bn([g.o])],decls:2,vars:0,consts:[[1,"slds-button","slds-button--icon",3,"click"],["icon","new",1,"slds-theme--inverse"]],template:function(t,e){1&t&&(u.TgZ(0,"button",0),u.NdJ("click",(function(){return e.add()})),u._UZ(1,"system-button-icon",1),u.qZA())},dependencies:[p.J],encapsulation:2}),OrgunitsChartViewBoxAdd})();const x=["box"],Z=function(t,e){return{"slds-theme--alt-inverse":t,"slds-theme--info":e}};function y(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"div",7)(1,"button",8),u.NdJ("click",(function(){u.CHM(t);const e=u.oxw();return u.KtG(e.edit())})),u._UZ(2,"system-button-icon",9),u.qZA()()}if(2&t){const t=u.oxw();u.xp6(2),u.Q6J("ngClass",u.WLB(1,Z,"OrgUnits"==t.nodemodule,"OrgCharts"==t.nodemodule))}}function _(t,e){1&t&&(u.TgZ(0,"div",10),u._UZ(1,"orgunits-chart-view-box-add"),u.qZA())}let B=(()=>{class OrgunitsChartViewBox{constructor(t,e,i){this.oview=t,this.model=e,this.elementRef=i,this.nodemodule="OrgUnits",this.displayButtons=!1}ngOnInit(){this.model.module=this.nodemodule,this.model.id=this.nodeid,this.model.initialize();let t="OrgCharts"==this.nodemodule?this.oview.orgcharts.find((t=>t.id==this.nodeid)):this.oview.orgunits.find((t=>t.id==this.nodeid));this.model.setData(t,!0,!0)}ngAfterViewInit(){this.oview.setNativeElement(this.nodeid,this.boxElement.nativeElement)}edit(){this.model.edit(!1)}delete(){this.model.delete().subscribe({next:()=>{this.oview.deleteOrgUnit(this.nodeid)}})}}return OrgunitsChartViewBox.ɵfac=function(t){return new(t||OrgunitsChartViewBox)(u.Y36(m),u.Y36(g.o),u.Y36(u.SBq))},OrgunitsChartViewBox.ɵcmp=u.Xpm({type:OrgunitsChartViewBox,selectors:[["orgunits-chart-view-box"]],viewQuery:function(t,e){if(1&t&&u.Gf(x,5),2&t){let t;u.iGM(t=u.CRH())&&(e.boxElement=t.first)}},inputs:{nodeid:"nodeid",nodemodule:"nodemodule"},features:[u._Bn([g.o])],decls:8,vars:7,consts:[[1,"slds-is-relative",2,"margin","1rem auto","width","200px"],[1,"slds-p-around--small"],[1,"slds-box","slds-theme--alt-inverse","slds-align--absolute-center","slds-is-relative",3,"ngClass","mouseenter","mouseleave"],["box",""],["class","slds-is-absolute slds-grid","style","top: 5px; right: 5px;",4,"ngIf"],["system-model-popover","",1,"slds-m-around--small","slds-truncate"],["class","slds-is-absolute slds-grid","style","bottom: 3px; right: calc(50% - 8px);",4,"ngIf"],[1,"slds-is-absolute","slds-grid",2,"top","5px","right","5px"],[1,"slds-button","slds-button--icon",3,"click"],["icon","edit",3,"ngClass"],[1,"slds-is-absolute","slds-grid",2,"bottom","3px","right","calc(50% - 8px)"]],template:function(t,e){1&t&&(u.TgZ(0,"div",0)(1,"div",1)(2,"div",2,3),u.NdJ("mouseenter",(function(){return e.displayButtons=!0}))("mouseleave",(function(){return e.displayButtons=!1})),u.YNc(4,y,3,4,"div",4),u.TgZ(5,"div",5),u._uU(6),u.qZA(),u.YNc(7,_,2,0,"div",6),u.qZA()()()),2&t&&(u.xp6(2),u.Q6J("ngClass",u.WLB(4,Z,"OrgUnits"==e.nodemodule,"OrgCharts"==e.nodemodule)),u.xp6(2),u.Q6J("ngIf",e.displayButtons),u.xp6(2),u.hij(" ",e.model.data.name," "),u.xp6(1),u.Q6J("ngIf",e.displayButtons&&"OrgUnits"==e.nodemodule))},dependencies:[o.mk,o.O5,p.J,b.g,C],encapsulation:2}),OrgunitsChartViewBox})();function A(t,e){if(1&t&&u._UZ(0,"orgunits-chart-view-orgunit",7),2&t){const t=u.oxw().$implicit;u.Q6J("orgunitid",t.id)}}function J(t,e){if(1&t&&u._UZ(0,"orgunits-chart-view-box",8),2&t){const t=u.oxw().$implicit;u.Q6J("nodeid",t.id)}}function V(t,e){if(1&t&&(u.TgZ(0,"div"),u.YNc(1,A,1,1,"orgunits-chart-view-orgunit",5),u.YNc(2,J,1,1,"orgunits-chart-view-box",6),u.qZA()),2&t){const t=e.$implicit;u.xp6(1),u.Q6J("ngIf","OrgUnits"==t.module),u.xp6(1),u.Q6J("ngIf","OrgCharts"==t.module)}}function M(t,e){if(1&t&&(u.ynx(0),u.TgZ(1,"div",3),u.YNc(2,V,3,2,"div",4),u.qZA(),u.BQk()),2&t){const t=u.oxw();u.xp6(2),u.Q6J("ngForOf",t.subUnits)("ngForTrackBy",t.trackByFn)}}let U=(()=>{class OrgunitsChartOrgViewOrgunit{constructor(t){this.oview=t}get subUnits(){let t=this.oview.orgunits.filter((t=>t.parent_id==this.orgunitid)).map((t=>({module:"OrgUnits",id:t.id,name:t.name}))),e=this.oview.orgcharts.filter((t=>t.orgunit_id==this.orgunitid)).map((t=>({module:"OrgCharts",id:t.id,name:t.name})));return t.concat(e).sort(((t,e)=>t.name.localeCompare(e.name)))}get subOrgUnits(){return this.oview.orgunits.filter((t=>t.parent_id==this.orgunitid))}get subOrgCharts(){return this.oview.orgcharts.filter((t=>t.orgunit_id==this.orgunitid))}trackByFn(t,e){return e.id}}return OrgunitsChartOrgViewOrgunit.ɵfac=function(t){return new(t||OrgunitsChartOrgViewOrgunit)(u.Y36(m))},OrgunitsChartOrgViewOrgunit.ɵcmp=u.Xpm({type:OrgunitsChartOrgViewOrgunit,selectors:[["orgunits-chart-view-orgunit"]],inputs:{orgunitid:"orgunitid"},decls:3,vars:2,consts:[[3,"nodeid"],["box",""],[4,"ngIf"],[1,"slds-grid","slds-grid--align-center"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"orgunitid",4,"ngIf"],["nodemodule","OrgCharts",3,"nodeid",4,"ngIf"],[3,"orgunitid"],["nodemodule","OrgCharts",3,"nodeid"]],template:function(t,e){1&t&&(u._UZ(0,"orgunits-chart-view-box",0,1),u.YNc(2,M,3,2,"ng-container",2)),2&t&&(u.Q6J("nodeid",e.orgunitid),u.xp6(2),u.Q6J("ngIf",e.subOrgUnits.length+e.subOrgCharts.length>0))},dependencies:[o.sg,o.O5,OrgunitsChartOrgViewOrgunit,B],encapsulation:2}),OrgunitsChartOrgViewOrgunit})();function T(t,e){if(1&t&&(u.O4$(),u.TgZ(0,"g"),u._UZ(1,"path",7),u.qZA()),2&t){const t=e.$implicit;u.xp6(1),u.uIk("d",t)}}function k(t,e){if(1&t&&(u.TgZ(0,"div",1),u.O4$(),u.TgZ(1,"svg",2)(2,"defs")(3,"filter",3),u._UZ(4,"feFlood",4)(5,"feComposite",5),u.qZA()(),u.YNc(6,T,2,1,"g",6),u.qZA()()),2&t){const t=u.oxw();u.xp6(1),u.uIk("height",t.oview.viewport.scrollHeight)("width",t.oview.viewport.scrollWidth),u.xp6(5),u.Q6J("ngForOf",t.oview.connectors)}}let L=(()=>{class OrgunitsChartConnector{constructor(t){this.oview=t}}return OrgunitsChartConnector.ɵfac=function(t){return new(t||OrgunitsChartConnector)(u.Y36(m))},OrgunitsChartConnector.ɵcmp=u.Xpm({type:OrgunitsChartConnector,selectors:[["orgunits-chart-connector"]],decls:1,vars:1,consts:[["class","slds-is-absolute__top",4,"ngIf"],[1,"slds-is-absolute__top"],["xmlns","http://www.w3.org/2000/svg"],["x","0","y","0","width","1","height","1"],["flood-color","white"],["in","SourceGraphic"],[4,"ngFor","ngForOf"],["fill","none","stroke-dasharray","","stroke-linejoin","round","stroke-width","1","stroke","#555"]],template:function(t,e){1&t&&u.YNc(0,k,7,3,"div",0),2&t&&u.Q6J("ngIf",e.oview.connectors.length>0)},dependencies:[o.sg,o.O5],encapsulation:2}),OrgunitsChartConnector})();const N=["orgviewport"];function z(t,e){if(1&t&&(u.TgZ(0,"div"),u._UZ(1,"orgunits-chart-connector"),u.TgZ(2,"div",11),u._UZ(3,"orgunits-chart-view-orgunit",12),u.qZA()()),2&t){const t=u.oxw();u.xp6(2),u.Q6J("ngStyle",t.zoomedStyle),u.xp6(1),u.Q6J("orgunitid",t.rootID)}}function F(t,e){1&t&&(u.TgZ(0,"div",13),u._UZ(1,"system-spinner",14),u.qZA())}let I=(()=>{class OrgunitsChartView{constructor(t,e,i){this.model=t,this.oview=e,this.cdRef=i,this.zoomFactor=1,this.oview.updated$.subscribe((()=>{this.cdRef.detectChanges()})),this.oview.orgChart=this.model}onResize(){this.oview.connectors=[],window.setTimeout((()=>this.oview.buildConnectors()),0)}ngAfterViewInit(){this.oview.viewport=this.orgViewPort?.nativeElement,this.oview.loadOrgUnits().subscribe({next:()=>{this.oview.viewport=this.orgViewPort?.nativeElement,this.oview.buildConnectors()}})}get rootID(){return this.oview.orgunits.find((t=>!t.parent_id)).id}get zoomedStyle(){return{transform:`scale(${this.zoomFactor})`}}zoomout(){this.zoomFactor>.1&&(this.zoomFactor-=.1),window.setTimeout((()=>this.oview.buildConnectors()),0)}zoomin(){this.zoomFactor<1&&(this.zoomFactor+=.1),window.setTimeout((()=>this.oview.buildConnectors()),0)}get zoom(){return 100*this.zoomFactor}set zoom(t){this.zoomFactor=t/100,window.setTimeout((()=>this.oview.buildConnectors()),0)}}return OrgunitsChartView.ɵfac=function(t){return new(t||OrgunitsChartView)(u.Y36(g.o),u.Y36(m),u.Y36(u.sBO))},OrgunitsChartView.ɵcmp=u.Xpm({type:OrgunitsChartView,selectors:[["orgunits-chart-view"]],viewQuery:function(t,e){if(1&t&&u.Gf(N,5),2&t){let t;u.iGM(t=u.CRH())&&(e.orgViewPort=t.first)}},hostBindings:function(t,e){1&t&&u.NdJ("resize",(function(){return e.onResize()}),!1,u.Jf7)},features:[u._Bn([m])],decls:13,vars:7,consts:[[1,"slds-size--1-of-1","slds-p-around--small"],[1,"slds-is-relative"],["orgviewport",""],[4,"ngIf"],["class","slds-size--1-of-1 slds-align--absolute-center","style","min-height: 300px",4,"ngIf"],[1,"slds-p-top--small","slds-grid","slds-grid--align-end","slds-grid--vertical-align-center"],["system-title","LBL_RELOAD",1,"slds-button","slds-button--icon",3,"disabled","click"],["icon","zoomout"],["min","10","max","100","step","10",1,"slds-p-horizontal--x-small",3,"displayValue","ngModel","ngModelChange"],["icon","zoomin"],["icon","refresh"],[3,"ngStyle"],[3,"orgunitid"],[1,"slds-size--1-of-1","slds-align--absolute-center",2,"min-height","300px"],["message","LBL_LOADING"]],template:function(t,e){1&t&&(u.TgZ(0,"div",0)(1,"div",1,2),u.YNc(3,z,4,2,"div",3),u.qZA(),u.YNc(4,F,2,0,"div",4),u.qZA(),u.TgZ(5,"div",5)(6,"button",6),u.NdJ("click",(function(){return e.zoomout()})),u._UZ(7,"system-button-icon",7),u.qZA(),u.TgZ(8,"system-slider",8),u.NdJ("ngModelChange",(function(t){return e.zoom=t})),u.qZA(),u.TgZ(9,"button",6),u.NdJ("click",(function(){return e.zoomin()})),u._UZ(10,"system-button-icon",9),u.qZA(),u.TgZ(11,"button",6),u.NdJ("click",(function(){return e.oview.loadOrgUnits()})),u._UZ(12,"system-button-icon",10),u.qZA()()),2&t&&(u.xp6(3),u.Q6J("ngIf",e.oview.orgunits.length>0),u.xp6(1),u.Q6J("ngIf",0==e.oview.orgunits.length&&e.oview.loading),u.xp6(2),u.Q6J("disabled",e.oview.loading),u.xp6(2),u.Q6J("displayValue",!1)("ngModel",e.zoom),u.xp6(1),u.Q6J("disabled",e.oview.loading),u.xp6(2),u.Q6J("disabled",e.oview.loading))},dependencies:[o.O5,o.PC,n.JJ,n.On,p.J,w.W,v.f,f.S,U,L],encapsulation:2}),OrgunitsChartView})();var q=i(9901),Q=i(3463),E=i(9621),Y=i(3499),$=i(5767),R=i(1916);let S=(()=>{class OrgunitsChartViewBoxAddOptions{constructor(){this.option="addorgunit",this.selection=new u.vpe}close(){this.self.destroy()}add(){this.selection.emit(this.option),this.self.destroy()}}return OrgunitsChartViewBoxAddOptions.ɵfac=function(t){return new(t||OrgunitsChartViewBoxAddOptions)},OrgunitsChartViewBoxAddOptions.ɵcmp=u.Xpm({type:OrgunitsChartViewBoxAddOptions,selectors:[["orgunits-chart-view-box-add-options"]],decls:19,vars:4,consts:[["size","small"],["system-modal-header-noclose",""],["label","LBL_ACTION"],[1,"slds-align--absolute-center"],[1,"slds-grid","slds-grid--vertical"],["name","addoption","value","addorgunit",1,"slds-p-vertical--xx-small",3,"ngModel","ngModelChange"],["label","LBL_ADDORGUNIT"],["name","addoption","value","selectorgunit",1,"slds-p-vertical--xx-small",3,"ngModel","ngModelChange"],["label","LBL_SELECTORGUNIT"],["name","addoption","value","addorgchart",1,"slds-p-vertical--xx-small",3,"ngModel","ngModelChange"],["label","LBL_ADDORGCHART"],["name","addoption","value","selectorgchart",1,"slds-p-vertical--xx-small",3,"ngModel","ngModelChange"],["label","LBL_SELECTORGCHART"],[1,"slds-button","slds-button--neutral",3,"click"],["label","LBL_CANCEL"],[1,"slds-button","slds-button--brand",3,"click"],["label","LBL_OK"]],template:function(t,e){1&t&&(u.TgZ(0,"system-modal",0)(1,"system-modal-header",1),u._UZ(2,"system-label",2),u.qZA(),u.TgZ(3,"system-modal-content")(4,"div",3)(5,"div",4)(6,"system-input-radio",5),u.NdJ("ngModelChange",(function(t){return e.option=t})),u._UZ(7,"system-label",6),u.qZA(),u.TgZ(8,"system-input-radio",7),u.NdJ("ngModelChange",(function(t){return e.option=t})),u._UZ(9,"system-label",8),u.qZA(),u.TgZ(10,"system-input-radio",9),u.NdJ("ngModelChange",(function(t){return e.option=t})),u._UZ(11,"system-label",10),u.qZA(),u.TgZ(12,"system-input-radio",11),u.NdJ("ngModelChange",(function(t){return e.option=t})),u._UZ(13,"system-label",12),u.qZA()()()(),u.TgZ(14,"system-modal-footer")(15,"button",13),u.NdJ("click",(function(){return e.close()})),u._UZ(16,"system-label",14),u.qZA(),u.TgZ(17,"button",15),u.NdJ("click",(function(){return e.add()})),u._UZ(18,"system-label",16),u.qZA()()()),2&t&&(u.xp6(6),u.Q6J("ngModel",e.option),u.xp6(2),u.Q6J("ngModel",e.option),u.xp6(2),u.Q6J("ngModel",e.option),u.xp6(2),u.Q6J("ngModel",e.option))},dependencies:[n.JJ,n.On,q.A,Q._,E.j,Y.x,$.p,R.y],encapsulation:2}),OrgunitsChartViewBoxAddOptions})(),G=(()=>{class ModuleOrgunits{}return ModuleOrgunits.ɵfac=function(t){return new(t||ModuleOrgunits)},ModuleOrgunits.ɵmod=u.oAB({type:ModuleOrgunits}),ModuleOrgunits.ɵinj=u.cJS({imports:[o.ez,n.u5,s.ObjectFields,r.GlobalComponents,d.ObjectComponents,l.SystemComponents,a.o]}),ModuleOrgunits})();("undefined"==typeof ngJitMode||ngJitMode)&&u.kYT(G,{declarations:[I,U,B,C,S,L],imports:[o.ez,n.u5,s.ObjectFields,r.GlobalComponents,d.ObjectComponents,l.SystemComponents,a.o]})}}]);