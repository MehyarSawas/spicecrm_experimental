"use strict";var __extends=this&&this.__extends||function(){var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var Scheduler_1=require("../Scheduler"),AsyncScheduler=function(o){function n(e,t){void 0===t&&(t=Scheduler_1.Scheduler.now);var r=o.call(this,e,function(){return n.delegate&&n.delegate!==r?n.delegate.now():t()})||this;return r.actions=[],r.active=!1,r.scheduled=void 0,r}return __extends(n,o),n.prototype.schedule=function(e,t,r){return void 0===t&&(t=0),n.delegate&&n.delegate!==this?n.delegate.schedule(e,t,r):o.prototype.schedule.call(this,e,t,r)},n.prototype.flush=function(e){var t=this.actions;if(this.active)t.push(e);else{var r;this.active=!0;do{if(r=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,r){for(;e=t.shift();)e.unsubscribe();throw r}}},n}(Scheduler_1.Scheduler);exports.AsyncScheduler=AsyncScheduler;