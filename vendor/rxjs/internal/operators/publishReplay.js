"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var ReplaySubject_1=require("../ReplaySubject"),multicast_1=require("./multicast");function publishReplay(e,t,u,i){u&&"function"!=typeof u&&(i=u);var r="function"==typeof u?u:void 0,l=new ReplaySubject_1.ReplaySubject(e,t,i);return function(e){return multicast_1.multicast(function(){return l},r)(e)}}exports.publishReplay=publishReplay;