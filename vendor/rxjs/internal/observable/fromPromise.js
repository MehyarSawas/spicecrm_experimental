"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var Observable_1=require("../Observable"),subscribeToPromise_1=require("../util/subscribeToPromise"),schedulePromise_1=require("../scheduled/schedulePromise");function fromPromise(e,r){return r?schedulePromise_1.schedulePromise(e,r):new Observable_1.Observable(subscribeToPromise_1.subscribeToPromise(e))}exports.fromPromise=fromPromise;