"use strict";function applyMixins(e,t){for(var p=0,r=t.length;p<r;p++)for(var o=t[p],i=Object.getOwnPropertyNames(o.prototype),n=0,s=i.length;n<s;n++){var a=i[n];e.prototype[a]=o.prototype[a]}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.applyMixins=applyMixins;