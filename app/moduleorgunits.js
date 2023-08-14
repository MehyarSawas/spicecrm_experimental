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
"use strict";(self.webpackChunkcore=self.webpackChunkcore||[]).push([["src_modules_orgunits_moduleorgunits_ts"],{6814:(t,e,i)=>{i.r(e),i.d(e,{ModuleOrgunits:()=>j});var o=i(1180),s=i(4755),n=i(5030),r=i(3190),d=i(4826),l=i(6490),a=i(3735),u=i(4357),c=i(2242),g=i(7579),h=i(5710),m=i(4505);let p=(()=>{var t;class orgunitsViewService{constructor(t,e){(0,o.Z)(this,"model",void 0),(0,o.Z)(this,"backend",void 0),(0,o.Z)(this,"viewport",void 0),(0,o.Z)(this,"orgChart",void 0),(0,o.Z)(this,"updated$",new c.vpe),(0,o.Z)(this,"orgunits",[]),(0,o.Z)(this,"orgcharts",[]),(0,o.Z)(this,"orgchartElements",[]),(0,o.Z)(this,"connectors",[]),(0,o.Z)(this,"loading",!0),this.model=t,this.backend=e}loadOrgUnits(){let t=new g.x;return this.orgchartElements=[],this.orgunits=[],this.orgcharts=[],this.connectors=[],this.loading=!0,this.backend.getRequest(`module/OrgCharts/${this.model.id}/allOrgunits`).subscribe({next:e=>{this.orgunits=e.orgunits,this.orgcharts=e.orgcharts,window.setTimeout((()=>this.buildConnectors()),0),t.next(!0),t.complete(),this.loading=!1},error:e=>{this.loading=!1,t.error("could not load orgunits")}}),t.asObservable()}deleteOrgUnit(t){this.orgunits.splice(this.orgunits.findIndex((e=>e.id==t)),1),this.orgchartElements.splice(this.orgchartElements.findIndex((e=>e.id==t)),1),window.setTimeout((()=>this.buildConnectors()),0)}setNativeElement(t,e){let i=this.orgchartElements.find((e=>e.id==t));i?i.nativeElement=e:this.orgchartElements.push({id:t,nativeElement:e}),this.buildConnectors()}buildConnectors(){if(this.orgunits.length+this.orgcharts.length!=this.orgchartElements.length)return;this.connectors=[];let t=this.orgunits.find((t=>!t.parent_id));this.buildConnectorsForNode(t.id),this.updated$.emit(!0)}buildConnectorsForNode(t){let e=this.orgchartElements.find((e=>e.id==t)).nativeElement,i=this.viewport.getBoundingClientRect().top,o=this.viewport.getBoundingClientRect().left,s=(this.viewport.scrollWidth,this.viewport.scrollHeight,this.orgunits.filter((e=>e.parent_id==t)).map((t=>t.id)).concat(this.orgcharts.filter((e=>e.orgunit_id==t)).map((t=>t.id))));if(s.length>0){let t=e.getBoundingClientRect(),n=t.left+t.width/2-o,r=t.bottom-i,d=[],l=null,a=null,u=null;for(let t of s){let e=this.orgchartElements.find((e=>e.id==t)).nativeElement.getBoundingClientRect(),s=e.left+e.width/2-o,n=e.top-i;(!l||s>l)&&(l=s),(!u||s<u)&&(u=s),(!a||n<a)&&(a=n),d.push({cBoxX:s,cBoxY:n})}let c=r+(a-r)/2;this.connectors.push(`M ${n},${r} L ${n},${c}`),this.connectors.push(`M ${u},${c} L ${l},${c}`);for(let t of d)this.connectors.push(`M ${t.cBoxX},${c} L ${t.cBoxX},${t.cBoxY}`);for(let t of s)this.buildConnectorsForNode(t)}}}return t=orgunitsViewService,(0,o.Z)(orgunitsViewService,"ɵfac",(function(e){return new(e||t)(c.LFG(h.o),c.LFG(m.y))})),(0,o.Z)(orgunitsViewService,"ɵprov",c.Yz7({token:t,factory:t.ɵfac})),orgunitsViewService})();var v=i(2656),w=i(4664),f=i(6274),b=i(151),Z=i(1790),O=i(4044);let C=(()=>{var t;class OrgunitsChartViewBoxAdd{constructor(t,e,i,s,n){(0,o.Z)(this,"oview",void 0),(0,o.Z)(this,"backend",void 0),(0,o.Z)(this,"modal",void 0),(0,o.Z)(this,"model",void 0),(0,o.Z)(this,"parent",void 0),this.oview=t,this.backend=e,this.modal=i,this.model=s,this.parent=n}add(){this.modal.openModal("OrgunitsChartViewBoxAddOptions").subscribe((t=>{t.instance.selection.subscribe({next:t=>{switch(t){case"addorgunit":this.model.module="OrgUnits",this.model.initialize(),this.model.addModel(null,this.parent,{parent_id:this.parent.id,parent_name:this.parent.getField("name"),orgchart_id:this.oview.orgChart.id,orgchart_name:this.oview.orgChart.getField("name")}).subscribe({next:t=>{this.oview.orgunits.push(t)}});break;case"addorgchart":this.model.module="OrgCharts",this.model.initialize(),this.model.addModel(null,this.parent,{parent_id:this.oview.orgChart.getField("parent_id"),parent_type:this.oview.orgChart.getField("parent_type"),parent_name:this.oview.orgChart.getField("parent_name"),orgchart_id:this.oview.orgChart.id,orgchart_name:this.oview.orgChart.getField("name"),orgunit_id:this.parent.id,orgunit_name:this.parent.getField("name")}).subscribe({next:t=>{this.oview.orgcharts.push(t)}});break;case"selectorgunit":this.modal.openModal("ObjectModalModuleLookup").subscribe((t=>{t.instance.module="OrgUnits",t.instance.multiselect=!1,t.instance.selectedItems.subscribe((t=>{let e=this.modal.await("LBL_LOADING");this.backend.putRequest(`module/OrgCharts/${this.oview.orgChart.id}/orgunit/${this.parent.id}/${t[0].id}`).subscribe({next:t=>{this.oview.loadOrgUnits().subscribe({next:t=>{e.emit(!0)},error:()=>{e.emit(!0)}})},error:()=>{e.emit(!0)}})}))}));break;case"selectorgchart":this.modal.openModal("ObjectModalModuleLookup").subscribe((t=>{t.instance.module="OrgCharts",t.instance.multiselect=!1,t.instance.selectedItems.subscribe((t=>{}))}))}}})}))}}return t=OrgunitsChartViewBoxAdd,(0,o.Z)(OrgunitsChartViewBoxAdd,"ɵfac",(function(e){return new(e||t)(c.Y36(p),c.Y36(m.y),c.Y36(O.o),c.Y36(h.o),c.Y36(h.o,4))})),(0,o.Z)(OrgunitsChartViewBoxAdd,"ɵcmp",c.Xpm({type:t,selectors:[["orgunits-chart-view-box-add"]],features:[c._Bn([h.o])],decls:2,vars:0,consts:[[1,"slds-button","slds-button--icon",3,"click"],["icon","new",1,"slds-theme--inverse"]],template:function(t,e){1&t&&(c.TgZ(0,"button",0),c.NdJ("click",(function(){return e.add()})),c._UZ(1,"system-button-icon",1),c.qZA())},dependencies:[v.J],encapsulation:2})),OrgunitsChartViewBoxAdd})();const x=["box"],y=function(t,e){return{"slds-theme--alt-inverse":t,"slds-theme--info":e}};function _(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"div",7)(1,"button",8),c.NdJ("click",(function(){c.CHM(t);const e=c.oxw();return c.KtG(e.edit())})),c._UZ(2,"system-button-icon",9),c.qZA()()}if(2&t){const t=c.oxw();c.xp6(2),c.Q6J("ngClass",c.WLB(1,y,"OrgUnits"==t.nodemodule,"OrgCharts"==t.nodemodule))}}function B(t,e){1&t&&(c.TgZ(0,"div",10),c._UZ(1,"orgunits-chart-view-box-add"),c.qZA())}let J=(()=>{var t;class OrgunitsChartViewBox{constructor(t,e,i){(0,o.Z)(this,"oview",void 0),(0,o.Z)(this,"model",void 0),(0,o.Z)(this,"elementRef",void 0),(0,o.Z)(this,"boxElement",void 0),(0,o.Z)(this,"nodeid",void 0),(0,o.Z)(this,"nodemodule","OrgUnits"),(0,o.Z)(this,"displayButtons",!1),this.oview=t,this.model=e,this.elementRef=i}ngOnInit(){this.model.module=this.nodemodule,this.model.id=this.nodeid,this.model.initialize();let t="OrgCharts"==this.nodemodule?this.oview.orgcharts.find((t=>t.id==this.nodeid)):this.oview.orgunits.find((t=>t.id==this.nodeid));this.model.setData(t,!0,!0)}ngAfterViewInit(){this.oview.setNativeElement(this.nodeid,this.boxElement.nativeElement)}edit(){this.model.edit(!1)}delete(){this.model.delete().subscribe({next:()=>{this.oview.deleteOrgUnit(this.nodeid)}})}}return t=OrgunitsChartViewBox,(0,o.Z)(OrgunitsChartViewBox,"ɵfac",(function(e){return new(e||t)(c.Y36(p),c.Y36(h.o),c.Y36(c.SBq))})),(0,o.Z)(OrgunitsChartViewBox,"ɵcmp",c.Xpm({type:t,selectors:[["orgunits-chart-view-box"]],viewQuery:function(t,e){if(1&t&&c.Gf(x,5),2&t){let t;c.iGM(t=c.CRH())&&(e.boxElement=t.first)}},inputs:{nodeid:"nodeid",nodemodule:"nodemodule"},features:[c._Bn([h.o])],decls:8,vars:7,consts:[[1,"slds-is-relative",2,"margin","1rem auto","width","200px"],[1,"slds-p-around--small"],[1,"slds-box","slds-theme--alt-inverse","slds-align--absolute-center","slds-is-relative",3,"ngClass","mouseenter","mouseleave"],["box",""],["class","slds-is-absolute slds-grid","style","top: 5px; right: 5px;",4,"ngIf"],["system-model-popover","",1,"slds-m-around--small","slds-truncate"],["class","slds-is-absolute slds-grid","style","bottom: 3px; right: calc(50% - 8px);",4,"ngIf"],[1,"slds-is-absolute","slds-grid",2,"top","5px","right","5px"],[1,"slds-button","slds-button--icon",3,"click"],["icon","edit",3,"ngClass"],[1,"slds-is-absolute","slds-grid",2,"bottom","3px","right","calc(50% - 8px)"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0)(1,"div",1)(2,"div",2,3),c.NdJ("mouseenter",(function(){return e.displayButtons=!0}))("mouseleave",(function(){return e.displayButtons=!1})),c.YNc(4,_,3,4,"div",4),c.TgZ(5,"div",5),c._uU(6),c.qZA(),c.YNc(7,B,2,0,"div",6),c.qZA()()()),2&t&&(c.xp6(2),c.Q6J("ngClass",c.WLB(4,y,"OrgUnits"==e.nodemodule,"OrgCharts"==e.nodemodule)),c.xp6(2),c.Q6J("ngIf",e.displayButtons),c.xp6(2),c.hij(" ",e.model.data.name," "),c.xp6(1),c.Q6J("ngIf",e.displayButtons&&"OrgUnits"==e.nodemodule))},dependencies:[s.mk,s.O5,v.J,Z.g,C],encapsulation:2})),OrgunitsChartViewBox})();function A(t,e){if(1&t&&c._UZ(0,"orgunits-chart-view-orgunit",7),2&t){const t=c.oxw().$implicit;c.Q6J("orgunitid",t.id)}}function M(t,e){if(1&t&&c._UZ(0,"orgunits-chart-view-box",8),2&t){const t=c.oxw().$implicit;c.Q6J("nodeid",t.id)}}function U(t,e){if(1&t&&(c.TgZ(0,"div"),c.YNc(1,A,1,1,"orgunits-chart-view-orgunit",5),c.YNc(2,M,1,1,"orgunits-chart-view-box",6),c.qZA()),2&t){const t=e.$implicit;c.xp6(1),c.Q6J("ngIf","OrgUnits"==t.module),c.xp6(1),c.Q6J("ngIf","OrgCharts"==t.module)}}function k(t,e){if(1&t&&(c.ynx(0),c.TgZ(1,"div",3),c.YNc(2,U,3,2,"div",4),c.qZA(),c.BQk()),2&t){const t=c.oxw();c.xp6(2),c.Q6J("ngForOf",t.subUnits)("ngForTrackBy",t.trackByFn)}}let T=(()=>{var t;class OrgunitsChartOrgViewOrgunit{constructor(t){(0,o.Z)(this,"oview",void 0),(0,o.Z)(this,"orgunitid",void 0),this.oview=t}get subUnits(){let t=this.oview.orgunits.filter((t=>t.parent_id==this.orgunitid)).map((t=>({module:"OrgUnits",id:t.id,name:t.name}))),e=this.oview.orgcharts.filter((t=>t.orgunit_id==this.orgunitid)).map((t=>({module:"OrgCharts",id:t.id,name:t.name})));return t.concat(e).sort(((t,e)=>t.name.localeCompare(e.name)))}get subOrgUnits(){return this.oview.orgunits.filter((t=>t.parent_id==this.orgunitid))}get subOrgCharts(){return this.oview.orgcharts.filter((t=>t.orgunit_id==this.orgunitid))}trackByFn(t,e){return e.id}}return t=OrgunitsChartOrgViewOrgunit,(0,o.Z)(OrgunitsChartOrgViewOrgunit,"ɵfac",(function(e){return new(e||t)(c.Y36(p))})),(0,o.Z)(OrgunitsChartOrgViewOrgunit,"ɵcmp",c.Xpm({type:t,selectors:[["orgunits-chart-view-orgunit"]],inputs:{orgunitid:"orgunitid"},decls:3,vars:2,consts:[[3,"nodeid"],["box",""],[4,"ngIf"],[1,"slds-grid","slds-grid--align-center"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"orgunitid",4,"ngIf"],["nodemodule","OrgCharts",3,"nodeid",4,"ngIf"],[3,"orgunitid"],["nodemodule","OrgCharts",3,"nodeid"]],template:function(t,e){1&t&&(c._UZ(0,"orgunits-chart-view-box",0,1),c.YNc(2,k,3,2,"ng-container",2)),2&t&&(c.Q6J("nodeid",e.orgunitid),c.xp6(2),c.Q6J("ngIf",e.subOrgUnits.length+e.subOrgCharts.length>0))},dependencies:[s.sg,s.O5,t,J],encapsulation:2})),OrgunitsChartOrgViewOrgunit})();function V(t,e){if(1&t&&(c.O4$(),c.TgZ(0,"g"),c._UZ(1,"path",7),c.qZA()),2&t){const t=e.$implicit;c.xp6(1),c.uIk("d",t)}}function L(t,e){if(1&t&&(c.TgZ(0,"div",1),c.O4$(),c.TgZ(1,"svg",2)(2,"defs")(3,"filter",3),c._UZ(4,"feFlood",4)(5,"feComposite",5),c.qZA()(),c.YNc(6,V,2,1,"g",6),c.qZA()()),2&t){const t=c.oxw();c.xp6(1),c.uIk("height",t.oview.viewport.scrollHeight)("width",t.oview.viewport.scrollWidth),c.xp6(5),c.Q6J("ngForOf",t.oview.connectors)}}let N=(()=>{var t;class OrgunitsChartConnector{constructor(t){(0,o.Z)(this,"oview",void 0),this.oview=t}}return t=OrgunitsChartConnector,(0,o.Z)(OrgunitsChartConnector,"ɵfac",(function(e){return new(e||t)(c.Y36(p))})),(0,o.Z)(OrgunitsChartConnector,"ɵcmp",c.Xpm({type:t,selectors:[["orgunits-chart-connector"]],decls:1,vars:1,consts:[["class","slds-is-absolute__top",4,"ngIf"],[1,"slds-is-absolute__top"],["xmlns","http://www.w3.org/2000/svg"],["x","0","y","0","width","1","height","1"],["flood-color","white"],["in","SourceGraphic"],[4,"ngFor","ngForOf"],["fill","none","stroke-dasharray","","stroke-linejoin","round","stroke-width","1","stroke","#555"]],template:function(t,e){1&t&&c.YNc(0,L,7,3,"div",0),2&t&&c.Q6J("ngIf",e.oview.connectors.length>0)},dependencies:[s.sg,s.O5],encapsulation:2})),OrgunitsChartConnector})();const z=["orgviewport"];function F(t,e){if(1&t&&(c.TgZ(0,"div"),c._UZ(1,"orgunits-chart-connector"),c.TgZ(2,"div",11),c._UZ(3,"orgunits-chart-view-orgunit",12),c.qZA()()),2&t){const t=c.oxw();c.xp6(2),c.Q6J("ngStyle",t.zoomedStyle),c.xp6(1),c.Q6J("orgunitid",t.rootID)}}function I(t,e){1&t&&(c.TgZ(0,"div",13),c._UZ(1,"system-spinner",14),c.qZA())}let q=(()=>{var t;class OrgunitsChartView{onResize(){this.oview.connectors=[],window.setTimeout((()=>this.oview.buildConnectors()),0)}constructor(t,e,i){(0,o.Z)(this,"model",void 0),(0,o.Z)(this,"oview",void 0),(0,o.Z)(this,"cdRef",void 0),(0,o.Z)(this,"orgViewPort",void 0),(0,o.Z)(this,"zoomFactor",1),this.model=t,this.oview=e,this.cdRef=i,this.oview.updated$.subscribe((()=>{this.cdRef.detectChanges()})),this.oview.orgChart=this.model}ngAfterViewInit(){this.oview.viewport=this.orgViewPort?.nativeElement,this.oview.loadOrgUnits().subscribe({next:()=>{this.oview.viewport=this.orgViewPort?.nativeElement,this.oview.buildConnectors()}})}get rootID(){return this.oview.orgunits.find((t=>!t.parent_id)).id}get zoomedStyle(){return{transform:`scale(${this.zoomFactor})`}}zoomout(){this.zoomFactor>.1&&(this.zoomFactor-=.1),window.setTimeout((()=>this.oview.buildConnectors()),0)}zoomin(){this.zoomFactor<1&&(this.zoomFactor+=.1),window.setTimeout((()=>this.oview.buildConnectors()),0)}get zoom(){return 100*this.zoomFactor}set zoom(t){this.zoomFactor=t/100,window.setTimeout((()=>this.oview.buildConnectors()),0)}}return t=OrgunitsChartView,(0,o.Z)(OrgunitsChartView,"ɵfac",(function(e){return new(e||t)(c.Y36(h.o),c.Y36(p),c.Y36(c.sBO))})),(0,o.Z)(OrgunitsChartView,"ɵcmp",c.Xpm({type:t,selectors:[["orgunits-chart-view"]],viewQuery:function(t,e){if(1&t&&c.Gf(z,5),2&t){let t;c.iGM(t=c.CRH())&&(e.orgViewPort=t.first)}},hostBindings:function(t,e){1&t&&c.NdJ("resize",(function(){return e.onResize()}),!1,c.Jf7)},features:[c._Bn([p])],decls:13,vars:7,consts:[[1,"slds-size--1-of-1","slds-p-around--small"],[1,"slds-is-relative"],["orgviewport",""],[4,"ngIf"],["class","slds-size--1-of-1 slds-align--absolute-center","style","min-height: 300px",4,"ngIf"],[1,"slds-p-top--small","slds-grid","slds-grid--align-end","slds-grid--vertical-align-center"],["system-title","LBL_RELOAD",1,"slds-button","slds-button--icon",3,"disabled","click"],["icon","zoomout"],["min","10","max","100","step","10",1,"slds-p-horizontal--x-small",3,"displayValue","ngModel","ngModelChange"],["icon","zoomin"],["icon","refresh"],[3,"ngStyle"],[3,"orgunitid"],[1,"slds-size--1-of-1","slds-align--absolute-center",2,"min-height","300px"],["message","LBL_LOADING"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0)(1,"div",1,2),c.YNc(3,F,4,2,"div",3),c.qZA(),c.YNc(4,I,2,0,"div",4),c.qZA(),c.TgZ(5,"div",5)(6,"button",6),c.NdJ("click",(function(){return e.zoomout()})),c._UZ(7,"system-button-icon",7),c.qZA(),c.TgZ(8,"system-slider",8),c.NdJ("ngModelChange",(function(t){return e.zoom=t})),c.qZA(),c.TgZ(9,"button",6),c.NdJ("click",(function(){return e.zoomin()})),c._UZ(10,"system-button-icon",9),c.qZA(),c.TgZ(11,"button",6),c.NdJ("click",(function(){return e.oview.loadOrgUnits()})),c._UZ(12,"system-button-icon",10),c.qZA()()),2&t&&(c.xp6(3),c.Q6J("ngIf",e.oview.orgunits.length>0),c.xp6(1),c.Q6J("ngIf",0==e.oview.orgunits.length&&e.oview.loading),c.xp6(2),c.Q6J("disabled",e.oview.loading),c.xp6(2),c.Q6J("displayValue",!1)("ngModel",e.zoom),c.xp6(1),c.Q6J("disabled",e.oview.loading),c.xp6(2),c.Q6J("disabled",e.oview.loading))},dependencies:[s.O5,s.PC,n.JJ,n.On,v.J,w.W,f.f,b.S,T,N],encapsulation:2})),OrgunitsChartView})();var E=i(9901),Q=i(3463),Y=i(9621),$=i(3499),R=i(5767),S=i(1916);let G=(()=>{var t;class OrgunitsChartViewBoxAddOptions{constructor(){(0,o.Z)(this,"self",void 0),(0,o.Z)(this,"option","addorgunit"),(0,o.Z)(this,"selection",new c.vpe)}close(){this.self.destroy()}add(){this.selection.emit(this.option),this.self.destroy()}}return t=OrgunitsChartViewBoxAddOptions,(0,o.Z)(OrgunitsChartViewBoxAddOptions,"ɵfac",(function(e){return new(e||t)})),(0,o.Z)(OrgunitsChartViewBoxAddOptions,"ɵcmp",c.Xpm({type:t,selectors:[["orgunits-chart-view-box-add-options"]],decls:19,vars:4,consts:[["size","small"],["system-modal-header-noclose",""],["label","LBL_ACTION"],[1,"slds-align--absolute-center"],[1,"slds-grid","slds-grid--vertical"],["name","addoption","value","addorgunit",1,"slds-p-vertical--xx-small",3,"ngModel","ngModelChange"],["label","LBL_ADDORGUNIT"],["name","addoption","value","selectorgunit",1,"slds-p-vertical--xx-small",3,"ngModel","ngModelChange"],["label","LBL_SELECTORGUNIT"],["name","addoption","value","addorgchart",1,"slds-p-vertical--xx-small",3,"ngModel","ngModelChange"],["label","LBL_ADDORGCHART"],["name","addoption","value","selectorgchart",1,"slds-p-vertical--xx-small",3,"ngModel","ngModelChange"],["label","LBL_SELECTORGCHART"],[1,"slds-button","slds-button--neutral",3,"click"],["label","LBL_CANCEL"],[1,"slds-button","slds-button--brand",3,"click"],["label","LBL_OK"]],template:function(t,e){1&t&&(c.TgZ(0,"system-modal",0)(1,"system-modal-header",1),c._UZ(2,"system-label",2),c.qZA(),c.TgZ(3,"system-modal-content")(4,"div",3)(5,"div",4)(6,"system-input-radio",5),c.NdJ("ngModelChange",(function(t){return e.option=t})),c._UZ(7,"system-label",6),c.qZA(),c.TgZ(8,"system-input-radio",7),c.NdJ("ngModelChange",(function(t){return e.option=t})),c._UZ(9,"system-label",8),c.qZA(),c.TgZ(10,"system-input-radio",9),c.NdJ("ngModelChange",(function(t){return e.option=t})),c._UZ(11,"system-label",10),c.qZA(),c.TgZ(12,"system-input-radio",11),c.NdJ("ngModelChange",(function(t){return e.option=t})),c._UZ(13,"system-label",12),c.qZA()()()(),c.TgZ(14,"system-modal-footer")(15,"button",13),c.NdJ("click",(function(){return e.close()})),c._UZ(16,"system-label",14),c.qZA(),c.TgZ(17,"button",15),c.NdJ("click",(function(){return e.add()})),c._UZ(18,"system-label",16),c.qZA()()()),2&t&&(c.xp6(6),c.Q6J("ngModel",e.option),c.xp6(2),c.Q6J("ngModel",e.option),c.xp6(2),c.Q6J("ngModel",e.option),c.xp6(2),c.Q6J("ngModel",e.option))},dependencies:[n.JJ,n.On,E.A,Q._,Y.j,$.x,R.p,S.y],encapsulation:2})),OrgunitsChartViewBoxAddOptions})(),j=(()=>{var t;class ModuleOrgunits{}return t=ModuleOrgunits,(0,o.Z)(ModuleOrgunits,"ɵfac",(function(e){return new(e||t)})),(0,o.Z)(ModuleOrgunits,"ɵmod",c.oAB({type:t})),(0,o.Z)(ModuleOrgunits,"ɵinj",c.cJS({imports:[s.ez,n.u5,r.ObjectFields,d.GlobalComponents,l.ObjectComponents,a.SystemComponents,u.o]})),ModuleOrgunits})();("undefined"==typeof ngJitMode||ngJitMode)&&c.kYT(j,{declarations:[q,T,J,C,G,N],imports:[s.ez,n.u5,r.ObjectFields,d.GlobalComponents,l.ObjectComponents,a.SystemComponents,u.o]})}}]);