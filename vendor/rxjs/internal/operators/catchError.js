"use strict";var __extends=this&&this.__extends||function(){var n=function(r,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var e in t)t.hasOwnProperty(e)&&(r[e]=t[e])})(r,t)};return function(r,t){function e(){this.constructor=r}n(r,t),r.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}}();Object.defineProperty(exports,"__esModule",{value:!0});var innerSubscribe_1=require("../innerSubscribe");function catchError(n){return function(r){var t=new CatchOperator(n),e=r.lift(t);return t.caught=e}}exports.catchError=catchError;var CatchOperator=function(){function r(r){this.selector=r}return r.prototype.call=function(r,t){return t.subscribe(new CatchSubscriber(r,this.selector,this.caught))},r}(),CatchSubscriber=function(i){function r(r,t,e){var n=i.call(this,r)||this;return n.selector=t,n.caught=e,n}return __extends(r,i),r.prototype.error=function(r){if(!this.isStopped){var t=void 0;try{t=this.selector(r,this.caught)}catch(r){return void i.prototype.error.call(this,r)}this._unsubscribeAndRecycle();var e=new innerSubscribe_1.SimpleInnerSubscriber(this);this.add(e);var n=innerSubscribe_1.innerSubscribe(t,e);n!==e&&this.add(n)}},r}(innerSubscribe_1.SimpleOuterSubscriber);