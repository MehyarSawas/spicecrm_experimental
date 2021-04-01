"use strict";var __extends=this&&this.__extends||function(){var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var innerSubscribe_1=require("../innerSubscribe");function audit(e){return function(t){return t.lift(new AuditOperator(e))}}exports.audit=audit;var AuditOperator=function(){function t(t){this.durationSelector=t}return t.prototype.call=function(t,e){return e.subscribe(new AuditSubscriber(t,this.durationSelector))},t}(),AuditSubscriber=function(i){function t(t,e){var r=i.call(this,t)||this;return r.durationSelector=e,r.hasValue=!1,r}return __extends(t,i),t.prototype._next=function(t){if(this.value=t,this.hasValue=!0,!this.throttled){var e=void 0;try{e=(0,this.durationSelector)(t)}catch(t){return this.destination.error(t)}var r=innerSubscribe_1.innerSubscribe(e,new innerSubscribe_1.SimpleInnerSubscriber(this));!r||r.closed?this.clearThrottle():this.add(this.throttled=r)}},t.prototype.clearThrottle=function(){var t=this,e=t.value,r=t.hasValue,i=t.throttled;i&&(this.remove(i),this.throttled=void 0,i.unsubscribe()),r&&(this.value=void 0,this.hasValue=!1,this.destination.next(e))},t.prototype.notifyNext=function(){this.clearThrottle()},t.prototype.notifyComplete=function(){this.clearThrottle()},t}(innerSubscribe_1.SimpleOuterSubscriber);