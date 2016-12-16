/* * *******************************************************************************
* This file is part of KReporter. KReporter is an enhancement developed
* by aac services k.s.. All rights are (c) 2016 by aac services k.s.
*
* This Version of the KReporter is licensed software and may only be used in
* alignment with the License Agreement received with this Software.
* This Software is copyrighted and may not be further distributed without
* witten consent of aac services k.s.
*
* You can contact us at info@kreporter.org
******************************************************************************* */
Ext.define("SpiceCRM.KReporter.Viewer.controller.plugins.googlechartsvizController",{extend:"Ext.app.ViewController",alias:"controller.KReportViewer.plugins.googlechartsvizController",whereOverride:[],loadMask:null,config:{listen:{global:{goolgeVizLoaded:function(){this.view.wrapper||this.view.drawChart()}}}}}),Ext.define("SpiceCRM.KReporter.Viewer.visualizationplugins.googlechartsviz",{extend:"Ext.panel.Panel",chartData:void 0,wrapper:void 0,border:!1,loadMask:void 0,controller:"KReportViewer.plugins.googlechartsvizController",renderVisualization:function(a){},initComponent:function(){this.update("<div id='"+this.uid+"'></div>"),this.callParent()},loadCallback:function(a){a.drawChart()},drawChart:function(){this.chartData.options.height||(this.chartData.options.height=this.height),this.wrapper=new google.visualization.ChartWrapper(this.chartData),this.wrapper.draw()},updateChart:function(a){this.chartData=a,this.wrapper.setDataTable(a.data.dataTable),this.wrapper.draw()},listeners:{afterrender:function(){this.chartData&&("undefined"==typeof google||"undefined"==typeof google.visualization?Ext.Loader.loadScript({url:"https://www.google.com/jsapi",onLoad:function(){google.load("visualization","1",{callback:function(){Ext.globalEvents.fireEvent("goolgeVizLoaded")},packages:["corechart","geochart","sankey"]})},scope:this}):new Ext.util.DelayedTask(function(){Ext.globalEvents.fireEvent("goolgeVizLoaded")}).delay(500))},resize:function(){this.wrapper&&this.wrapper.draw()}},exportChart:function(){return btoa(unescape(encodeURIComponent(this.findSvg(document.getElementById(this.id)))))},findSvg:function(a){return void 0!==typeof a.children&&a.children.length>0&&("svg"==a.children[0].tagName?a.innerHTML:this.findSvg(a.children[0]))}});