"use strict";var __extends=this&&this.__extends||function(){var i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var innerSubscribe_1=require("../innerSubscribe");function expand(t,r,i){return void 0===r&&(r=Number.POSITIVE_INFINITY),r=(r||0)<1?Number.POSITIVE_INFINITY:r,function(e){return e.lift(new ExpandOperator(t,r,i))}}exports.expand=expand;var ExpandOperator=function(){function e(e,t,r){this.project=e,this.concurrent=t,this.scheduler=r}return e.prototype.call=function(e,t){return t.subscribe(new ExpandSubscriber(e,this.project,this.concurrent,this.scheduler))},e}();exports.ExpandOperator=ExpandOperator;var ExpandSubscriber=function(s){function o(e,t,r,i){var n=s.call(this,e)||this;return n.project=t,n.concurrent=r,n.scheduler=i,n.index=0,n.active=0,n.hasCompleted=!1,r<Number.POSITIVE_INFINITY&&(n.buffer=[]),n}return __extends(o,s),o.dispatch=function(e){var t=e.subscriber,r=e.result,i=e.value,n=e.index;t.subscribeToProjection(r,i,n)},o.prototype._next=function(e){var t=this.destination;if(t.closed)this._complete();else{var r=this.index++;if(this.active<this.concurrent){t.next(e);try{var i=(0,this.project)(e,r);if(this.scheduler){var n={subscriber:this,result:i,value:e,index:r};this.destination.add(this.scheduler.schedule(o.dispatch,0,n))}else this.subscribeToProjection(i,e,r)}catch(e){t.error(e)}}else this.buffer.push(e)}},o.prototype.subscribeToProjection=function(e,t,r){this.active++,this.destination.add(innerSubscribe_1.innerSubscribe(e,new innerSubscribe_1.SimpleInnerSubscriber(this)))},o.prototype._complete=function(){this.hasCompleted=!0,this.hasCompleted&&0===this.active&&this.destination.complete(),this.unsubscribe()},o.prototype.notifyNext=function(e){this._next(e)},o.prototype.notifyComplete=function(){var e=this.buffer;this.active--,e&&0<e.length&&this._next(e.shift()),this.hasCompleted&&0===this.active&&this.destination.complete()},o}(innerSubscribe_1.SimpleOuterSubscriber);exports.ExpandSubscriber=ExpandSubscriber;