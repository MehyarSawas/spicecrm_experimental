"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var switchMap_1=require("./switchMap");function switchMapTo(t,e){return e?switchMap_1.switchMap(function(){return t},e):switchMap_1.switchMap(function(){return t})}exports.switchMapTo=switchMapTo;