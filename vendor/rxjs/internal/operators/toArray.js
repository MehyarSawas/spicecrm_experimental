"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var reduce_1=require("./reduce");function toArrayReducer(r,e,t){return 0===t?[e]:(r.push(e),r)}function toArray(){return reduce_1.reduce(toArrayReducer,[])}exports.toArray=toArray;