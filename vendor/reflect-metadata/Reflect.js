var Reflect;!function(n){!function(){var e="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),t=r(n);function r(r,n){return function(e,t){"function"!=typeof r[e]&&Object.defineProperty(r,e,{configurable:!0,writable:!0,value:t}),n&&n(e,t)}}void 0===e.Reflect?e.Reflect=n:t=r(e.Reflect,t),function(e){var s=Object.prototype.hasOwnProperty,t=typeof Symbol==="function",u=t&&typeof Symbol.toPrimitive!=="undefined"?Symbol.toPrimitive:"@@toPrimitive",f=t&&typeof Symbol.iterator!=="undefined"?Symbol.iterator:"@@iterator",r=typeof Object.create==="function",n={__proto__:[]}instanceof Array,i=!r&&!n,c={create:r?function(){return ie(Object.create(null))}:n?function(){return ie({__proto__:null})}:function(){return ie({})},has:i?function(e,t){return s.call(e,t)}:function(e,t){return t in e},get:i?function(e,t){return s.call(e,t)?e[t]:undefined}:function(e,t){return e[t]}},o=Object.getPrototypeOf(Function),a=typeof process==="object"&&process.env&&process.env["REFLECT_METADATA_USE_MAP_POLYFILL"]==="true",h=!a&&typeof Map==="function"&&typeof Map.prototype.entries==="function"?Map:te(),y=!a&&typeof Set==="function"&&typeof Set.prototype.entries==="function"?Set:re(),p,l=new(!a&&typeof WeakMap==="function"?WeakMap:ne());function v(e,t,r,n){if(!L(r)){if(!B(e))throw new TypeError;if(!F(t))throw new TypeError;if(!F(n)&&!L(n)&&!U(n))throw new TypeError;if(U(n))n=undefined;r=q(r);return j(e,t,r,n)}else{if(!B(e))throw new TypeError;if(!H(t))throw new TypeError;return O(e,t)}}function d(r,n){function e(e,t){if(!F(e))throw new TypeError;if(!L(t)&&!J(t))throw new TypeError;R(r,n,e,t)}return e}function _(e,t,r,n){if(!F(r))throw new TypeError;if(!L(n))n=q(n);return R(e,t,r,n)}function w(e,t,r){if(!F(t))throw new TypeError;if(!L(r))r=q(r);return M(e,t,r)}function g(e,t,r){if(!F(t))throw new TypeError;if(!L(r))r=q(r);return A(e,t,r)}function b(e,t,r){if(!F(t))throw new TypeError;if(!L(r))r=q(r);return P(e,t,r)}function k(e,t,r){if(!F(t))throw new TypeError;if(!L(r))r=q(r);return S(e,t,r)}function m(e,t){if(!F(e))throw new TypeError;if(!L(t))t=q(t);return I(e,t)}function E(e,t){if(!F(e))throw new TypeError;if(!L(t))t=q(t);return K(e,t)}function T(e,t,r){if(!F(t))throw new TypeError;if(!L(r))r=q(r);var n=x(t,r,false);if(L(n))return false;if(!n.delete(e))return false;if(n.size>0)return true;var i=l.get(t);i.delete(r);if(i.size>0)return true;l.delete(t);return true}function O(e,t){for(var r=e.length-1;r>=0;--r){var n=e[r];var i=n(t);if(!L(i)&&!U(i)){if(!H(i))throw new TypeError;t=i}}return t}function j(e,t,r,n){for(var i=e.length-1;i>=0;--i){var u=e[i];var o=u(t,r,n);if(!L(o)&&!U(o)){if(!F(o))throw new TypeError;n=o}}return n}function x(e,t,r){var n=l.get(e);if(L(n)){if(!r)return undefined;n=new h;l.set(e,n)}var i=n.get(t);if(L(i)){if(!r)return undefined;i=new h;n.set(t,i)}return i}function M(e,t,r){var n=A(e,t,r);if(n)return true;var i=ee(t);if(!U(i))return M(e,i,r);return false}function A(e,t,r){var n=x(t,r,false);if(L(n))return false;return D(n.has(e))}function P(e,t,r){var n=A(e,t,r);if(n)return S(e,t,r);var i=ee(t);if(!U(i))return P(e,i,r);return undefined}function S(e,t,r){var n=x(t,r,false);if(L(n))return undefined;return n.get(e)}function R(e,t,r,n){var i=x(r,n,true);i.set(e,t)}function I(e,t){var r=K(e,t);var n=ee(e);if(n===null)return r;var i=I(n,t);if(i.length<=0)return r;if(r.length<=0)return i;var u=new y;var o=[];for(var f=0,a=r;f<a.length;f++){var s=a[f];var c=u.has(s);if(!c){u.add(s);o.push(s)}}for(var h=0,p=i;h<p.length;h++){var s=p[h];var c=u.has(s);if(!c){u.add(s);o.push(s)}}return o}function K(e,t){var r=[];var n=x(e,t,false);if(L(n))return r;var i=n.keys();var u=Q(i);var o=0;while(true){var f=Z(u);if(!f){r.length=o;return r}var a=X(f);try{r[o]=a}catch(e){try{$(u)}finally{throw e}}o++}}function z(e){if(e===null)return 1;switch(typeof e){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return e===null?1:6;default:return 6}}function L(e){return e===undefined}function U(e){return e===null}function C(e){return typeof e==="symbol"}function F(e){return typeof e==="object"?e!==null:typeof e==="function"}function W(e,t){switch(z(e)){case 0:return e;case 1:return e;case 2:return e;case 3:return e;case 4:return e;case 5:return e}var r=t===3?"string":t===5?"number":"default";var n=N(e,u);if(n!==undefined){var i=n.call(e,r);if(F(i))throw new TypeError;return i}return V(e,r==="default"?"number":r)}function V(e,t){if(t==="string"){var r=e.toString;if(G(r)){var n=r.call(e);if(!F(n))return n}var i=e.valueOf;if(G(i)){var n=i.call(e);if(!F(n))return n}}else{var i=e.valueOf;if(G(i)){var n=i.call(e);if(!F(n))return n}var u=e.toString;if(G(u)){var n=u.call(e);if(!F(n))return n}}throw new TypeError}function D(e){return!!e}function Y(e){return""+e}function q(e){var t=W(e,3);if(C(t))return t;return Y(t)}function B(e){return Array.isArray?Array.isArray(e):e instanceof Object?e instanceof Array:Object.prototype.toString.call(e)==="[object Array]"}function G(e){return typeof e==="function"}function H(e){return typeof e==="function"}function J(e){switch(z(e)){case 3:return true;case 4:return true;default:return false}}function N(e,t){var r=e[t];if(r===undefined||r===null)return undefined;if(!G(r))throw new TypeError;return r}function Q(e){var t=N(e,f);if(!G(t))throw new TypeError;var r=t.call(e);if(!F(r))throw new TypeError;return r}function X(e){return e.value}function Z(e){var t=e.next();return t.done?false:t}function $(e){var t=e["return"];if(t)t.call(e)}function ee(e){var t=Object.getPrototypeOf(e);if(typeof e!=="function"||e===o)return t;if(t!==o)return t;var r=e.prototype;var n=r&&Object.getPrototypeOf(r);if(n==null||n===Object.prototype)return t;var i=n.constructor;if(typeof i!=="function")return t;if(i===e)return t;return i}function te(){var i={};var r=[];var t=function(){function e(e,t,r){this._index=0;this._keys=e;this._values=t;this._selector=r}e.prototype["@@iterator"]=function(){return this};e.prototype[f]=function(){return this};e.prototype.next=function(){var e=this._index;if(e>=0&&e<this._keys.length){var t=this._selector(this._keys[e],this._values[e]);if(e+1>=this._keys.length){this._index=-1;this._keys=r;this._values=r}else{this._index++}return{value:t,done:false}}return{value:undefined,done:true}};e.prototype.throw=function(e){if(this._index>=0){this._index=-1;this._keys=r;this._values=r}throw e};e.prototype.return=function(e){if(this._index>=0){this._index=-1;this._keys=r;this._values=r}return{value:e,done:true}};return e}();return function(){function e(){this._keys=[];this._values=[];this._cacheKey=i;this._cacheIndex=-2}Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:true,configurable:true});e.prototype.has=function(e){return this._find(e,false)>=0};e.prototype.get=function(e){var t=this._find(e,false);return t>=0?this._values[t]:undefined};e.prototype.set=function(e,t){var r=this._find(e,true);this._values[r]=t;return this};e.prototype.delete=function(e){var t=this._find(e,false);if(t>=0){var r=this._keys.length;for(var n=t+1;n<r;n++){this._keys[n-1]=this._keys[n];this._values[n-1]=this._values[n]}this._keys.length--;this._values.length--;if(e===this._cacheKey){this._cacheKey=i;this._cacheIndex=-2}return true}return false};e.prototype.clear=function(){this._keys.length=0;this._values.length=0;this._cacheKey=i;this._cacheIndex=-2};e.prototype.keys=function(){return new t(this._keys,this._values,n)};e.prototype.values=function(){return new t(this._keys,this._values,u)};e.prototype.entries=function(){return new t(this._keys,this._values,o)};e.prototype["@@iterator"]=function(){return this.entries()};e.prototype[f]=function(){return this.entries()};e.prototype._find=function(e,t){if(this._cacheKey!==e){this._cacheIndex=this._keys.indexOf(this._cacheKey=e)}if(this._cacheIndex<0&&t){this._cacheIndex=this._keys.length;this._keys.push(e);this._values.push(undefined)}return this._cacheIndex};return e}();function n(e,t){return e}function u(e,t){return t}function o(e,t){return[e,t]}}function re(){return function(){function e(){this._map=new h}Object.defineProperty(e.prototype,"size",{get:function(){return this._map.size},enumerable:true,configurable:true});e.prototype.has=function(e){return this._map.has(e)};e.prototype.add=function(e){return this._map.set(e,e),this};e.prototype.delete=function(e){return this._map.delete(e)};e.prototype.clear=function(){this._map.clear()};e.prototype.keys=function(){return this._map.keys()};e.prototype.values=function(){return this._map.values()};e.prototype.entries=function(){return this._map.entries()};e.prototype["@@iterator"]=function(){return this.keys()};e.prototype[f]=function(){return this.keys()};return e}()}function ne(){var i=16;var t=c.create();var r=n();return function(){function e(){this._key=n()}e.prototype.has=function(e){var t=u(e,false);return t!==undefined?c.has(t,this._key):false};e.prototype.get=function(e){var t=u(e,false);return t!==undefined?c.get(t,this._key):undefined};e.prototype.set=function(e,t){var r=u(e,true);r[this._key]=t;return this};e.prototype.delete=function(e){var t=u(e,false);return t!==undefined?delete t[this._key]:false};e.prototype.clear=function(){this._key=n()};return e}();function n(){var e;do{e="@@WeakMap@@"+a()}while(c.has(t,e));t[e]=true;return e}function u(e,t){if(!s.call(e,r)){if(!t)return undefined;Object.defineProperty(e,r,{value:c.create()})}return e[r]}function o(e,t){for(var r=0;r<t;++r)e[r]=Math.random()*255|0;return e}function f(e){if(typeof Uint8Array==="function"){if(typeof crypto!=="undefined")return crypto.getRandomValues(new Uint8Array(e));if(typeof msCrypto!=="undefined")return msCrypto.getRandomValues(new Uint8Array(e));return o(new Uint8Array(e),e)}return o(new Array(e),e)}function a(){var e=f(i);e[6]=e[6]&79|64;e[8]=e[8]&191|128;var t="";for(var r=0;r<i;++r){var n=e[r];if(r===4||r===6||r===8)t+="-";if(n<16)t+="0";t+=n.toString(16).toLowerCase()}return t}}function ie(e){e.__=undefined;delete e.__;return e}e("decorate",v),e("metadata",d),e("defineMetadata",_),e("hasMetadata",w),e("hasOwnMetadata",g),e("getMetadata",b),e("getOwnMetadata",k),e("getMetadataKeys",m),e("getOwnMetadataKeys",E),e("deleteMetadata",T)}(t)}()}(Reflect=Reflect||{});