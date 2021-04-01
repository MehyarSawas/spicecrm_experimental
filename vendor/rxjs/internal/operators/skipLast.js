"use strict";var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var Subscriber_1=require("../Subscriber"),ArgumentOutOfRangeError_1=require("../util/ArgumentOutOfRangeError");function skipLast(r){return function(t){return t.lift(new SkipLastOperator(r))}}exports.skipLast=skipLast;var SkipLastOperator=function(){function t(t){if(this._skipCount=t,this._skipCount<0)throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError}return t.prototype.call=function(t,r){return 0===this._skipCount?r.subscribe(new Subscriber_1.Subscriber(t)):r.subscribe(new SkipLastSubscriber(t,this._skipCount))},t}(),SkipLastSubscriber=function(e){function t(t,r){var n=e.call(this,t)||this;return n._skipCount=r,n._count=0,n._ring=new Array(r),n}return __extends(t,e),t.prototype._next=function(t){var r=this._skipCount,n=this._count++;if(n<r)this._ring[n]=t;else{var e=n%r,i=this._ring,s=i[e];i[e]=t,this.destination.next(s)}},t}(Subscriber_1.Subscriber);