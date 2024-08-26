function Ob(e,n){for(var r=0;r<n.length;r++){const s=n[r];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in e)){const l=Object.getOwnPropertyDescriptor(s,a);l&&Object.defineProperty(e,a,l.get?l:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=r(a);fetch(a.href,l)}})();var Wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nm={exports:{}},vd={},Lm={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fo=Symbol.for("react.element"),Fb=Symbol.for("react.portal"),Bb=Symbol.for("react.fragment"),Db=Symbol.for("react.strict_mode"),zb=Symbol.for("react.profiler"),Wb=Symbol.for("react.provider"),Hb=Symbol.for("react.context"),Ub=Symbol.for("react.forward_ref"),Gb=Symbol.for("react.suspense"),Vb=Symbol.for("react.memo"),Yb=Symbol.for("react.lazy"),k1=Symbol.iterator;function Zb(e){return e===null||typeof e!="object"?null:(e=k1&&e[k1]||e["@@iterator"],typeof e=="function"?e:null)}var _m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$m=Object.assign,Im={};function Ba(e,n,r){this.props=e,this.context=n,this.refs=Im,this.updater=r||_m}Ba.prototype.isReactComponent={};Ba.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Ba.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Em(){}Em.prototype=Ba.prototype;function Ch(e,n,r){this.props=e,this.context=n,this.refs=Im,this.updater=r||_m}var kh=Ch.prototype=new Em;kh.constructor=Ch;$m(kh,Ba.prototype);kh.isPureReactComponent=!0;var S1=Array.isArray,Mm=Object.prototype.hasOwnProperty,Sh={current:null},Am={key:!0,ref:!0,__self:!0,__source:!0};function Pm(e,n,r){var s,a={},l=null,o=null;if(n!=null)for(s in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)Mm.call(n,s)&&!Am.hasOwnProperty(s)&&(a[s]=n[s]);var i=arguments.length-2;if(i===1)a.children=r;else if(1<i){for(var c=Array(i),h=0;h<i;h++)c[h]=arguments[h+2];a.children=c}if(e&&e.defaultProps)for(s in i=e.defaultProps,i)a[s]===void 0&&(a[s]=i[s]);return{$$typeof:fo,type:e,key:l,ref:o,props:a,_owner:Sh.current}}function qb(e,n){return{$$typeof:fo,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Th(e){return typeof e=="object"&&e!==null&&e.$$typeof===fo}function Kb(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return n[r]})}var T1=/\/+/g;function bc(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Kb(""+e.key):n.toString(36)}function hi(e,n,r,s,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case fo:case Fb:o=!0}}if(o)return o=e,a=a(o),e=s===""?"."+bc(o,0):s,S1(a)?(r="",e!=null&&(r=e.replace(T1,"$&/")+"/"),hi(a,n,r,"",function(h){return h})):a!=null&&(Th(a)&&(a=qb(a,r+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(T1,"$&/")+"/")+e)),n.push(a)),1;if(o=0,s=s===""?".":s+":",S1(e))for(var i=0;i<e.length;i++){l=e[i];var c=s+bc(l,i);o+=hi(l,n,r,c,a)}else if(c=Zb(e),typeof c=="function")for(e=c.call(e),i=0;!(l=e.next()).done;)l=l.value,c=s+bc(l,i++),o+=hi(l,n,r,c,a);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function zo(e,n,r){if(e==null)return e;var s=[],a=0;return hi(e,s,"","",function(l){return n.call(r,l,a++)}),s}function Qb(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Gn={current:null},pi={transition:null},Xb={ReactCurrentDispatcher:Gn,ReactCurrentBatchConfig:pi,ReactCurrentOwner:Sh};Ce.Children={map:zo,forEach:function(e,n,r){zo(e,function(){n.apply(this,arguments)},r)},count:function(e){var n=0;return zo(e,function(){n++}),n},toArray:function(e){return zo(e,function(n){return n})||[]},only:function(e){if(!Th(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ce.Component=Ba;Ce.Fragment=Bb;Ce.Profiler=zb;Ce.PureComponent=Ch;Ce.StrictMode=Db;Ce.Suspense=Gb;Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xb;Ce.cloneElement=function(e,n,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=$m({},e.props),a=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=Sh.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in n)Mm.call(n,c)&&!Am.hasOwnProperty(c)&&(s[c]=n[c]===void 0&&i!==void 0?i[c]:n[c])}var c=arguments.length-2;if(c===1)s.children=r;else if(1<c){i=Array(c);for(var h=0;h<c;h++)i[h]=arguments[h+2];s.children=i}return{$$typeof:fo,type:e.type,key:a,ref:l,props:s,_owner:o}};Ce.createContext=function(e){return e={$$typeof:Hb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wb,_context:e},e.Consumer=e};Ce.createElement=Pm;Ce.createFactory=function(e){var n=Pm.bind(null,e);return n.type=e,n};Ce.createRef=function(){return{current:null}};Ce.forwardRef=function(e){return{$$typeof:Ub,render:e}};Ce.isValidElement=Th;Ce.lazy=function(e){return{$$typeof:Yb,_payload:{_status:-1,_result:e},_init:Qb}};Ce.memo=function(e,n){return{$$typeof:Vb,type:e,compare:n===void 0?null:n}};Ce.startTransition=function(e){var n=pi.transition;pi.transition={};try{e()}finally{pi.transition=n}};Ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ce.useCallback=function(e,n){return Gn.current.useCallback(e,n)};Ce.useContext=function(e){return Gn.current.useContext(e)};Ce.useDebugValue=function(){};Ce.useDeferredValue=function(e){return Gn.current.useDeferredValue(e)};Ce.useEffect=function(e,n){return Gn.current.useEffect(e,n)};Ce.useId=function(){return Gn.current.useId()};Ce.useImperativeHandle=function(e,n,r){return Gn.current.useImperativeHandle(e,n,r)};Ce.useInsertionEffect=function(e,n){return Gn.current.useInsertionEffect(e,n)};Ce.useLayoutEffect=function(e,n){return Gn.current.useLayoutEffect(e,n)};Ce.useMemo=function(e,n){return Gn.current.useMemo(e,n)};Ce.useReducer=function(e,n,r){return Gn.current.useReducer(e,n,r)};Ce.useRef=function(e){return Gn.current.useRef(e)};Ce.useState=function(e){return Gn.current.useState(e)};Ce.useSyncExternalStore=function(e,n,r){return Gn.current.useSyncExternalStore(e,n,r)};Ce.useTransition=function(){return Gn.current.useTransition()};Ce.version="18.2.0";Lm.exports=Ce;var F=Lm.exports;const cn=Kt(F),N1=Ob({__proto__:null,default:cn},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jb=F,e8=Symbol.for("react.element"),n8=Symbol.for("react.fragment"),t8=Object.prototype.hasOwnProperty,r8=Jb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s8={key:!0,ref:!0,__self:!0,__source:!0};function Rm(e,n,r){var s,a={},l=null,o=null;r!==void 0&&(l=""+r),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(s in n)t8.call(n,s)&&!s8.hasOwnProperty(s)&&(a[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)a[s]===void 0&&(a[s]=n[s]);return{$$typeof:e8,type:e,key:l,ref:o,props:a,_owner:r8.current}}vd.Fragment=n8;vd.jsx=Rm;vd.jsxs=Rm;Nm.exports=vd;var t=Nm.exports,iu={},Om={exports:{}},gt={},Fm={exports:{}},Bm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(z,Z){var X=z.length;z.push(Z);e:for(;0<X;){var ae=X-1>>>1,pe=z[ae];if(0<a(pe,Z))z[ae]=Z,z[X]=pe,X=ae;else break e}}function r(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var Z=z[0],X=z.pop();if(X!==Z){z[0]=X;e:for(var ae=0,pe=z.length,Dn=pe>>>1;ae<Dn;){var fe=2*(ae+1)-1,Je=z[fe],Ye=fe+1,pn=z[Ye];if(0>a(Je,X))Ye<pe&&0>a(pn,Je)?(z[ae]=pn,z[Ye]=X,ae=Ye):(z[ae]=Je,z[fe]=X,ae=fe);else if(Ye<pe&&0>a(pn,X))z[ae]=pn,z[Ye]=X,ae=Ye;else break e}}return Z}function a(z,Z){var X=z.sortIndex-Z.sortIndex;return X!==0?X:z.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,i=o.now();e.unstable_now=function(){return o.now()-i}}var c=[],h=[],m=1,x=null,w=3,$=!1,_=!1,C=!1,E=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(z){for(var Z=r(h);Z!==null;){if(Z.callback===null)s(h);else if(Z.startTime<=z)s(h),Z.sortIndex=Z.expirationTime,n(c,Z);else break;Z=r(h)}}function g(z){if(C=!1,v(z),!_)if(r(c)!==null)_=!0,Fe(N);else{var Z=r(h);Z!==null&&Ve(g,Z.startTime-z)}}function N(z,Z){_=!1,C&&(C=!1,b(R),R=-1),$=!0;var X=w;try{for(v(Z),x=r(c);x!==null&&(!(x.expirationTime>Z)||z&&!he());){var ae=x.callback;if(typeof ae=="function"){x.callback=null,w=x.priorityLevel;var pe=ae(x.expirationTime<=Z);Z=e.unstable_now(),typeof pe=="function"?x.callback=pe:x===r(c)&&s(c),v(Z)}else s(c);x=r(c)}if(x!==null)var Dn=!0;else{var fe=r(h);fe!==null&&Ve(g,fe.startTime-Z),Dn=!1}return Dn}finally{x=null,w=X,$=!1}}var k=!1,A=null,R=-1,D=5,Y=-1;function he(){return!(e.unstable_now()-Y<D)}function ie(){if(A!==null){var z=e.unstable_now();Y=z;var Z=!0;try{Z=A(!0,z)}finally{Z?De():(k=!1,A=null)}}else k=!1}var De;if(typeof f=="function")De=function(){f(ie)};else if(typeof MessageChannel<"u"){var sn=new MessageChannel,Ge=sn.port2;sn.port1.onmessage=ie,De=function(){Ge.postMessage(null)}}else De=function(){E(ie,0)};function Fe(z){A=z,k||(k=!0,De())}function Ve(z,Z){R=E(function(){z(e.unstable_now())},Z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){_||$||(_=!0,Fe(N))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(z){switch(w){case 1:case 2:case 3:var Z=3;break;default:Z=w}var X=w;w=Z;try{return z()}finally{w=X}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=w;w=z;try{return Z()}finally{w=X}},e.unstable_scheduleCallback=function(z,Z,X){var ae=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ae+X:ae):X=ae,z){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=X+pe,z={id:m++,callback:Z,priorityLevel:z,startTime:X,expirationTime:pe,sortIndex:-1},X>ae?(z.sortIndex=X,n(h,z),r(c)===null&&z===r(h)&&(C?(b(R),R=-1):C=!0,Ve(g,X-ae))):(z.sortIndex=pe,n(c,z),_||$||(_=!0,Fe(N))),z},e.unstable_shouldYield=he,e.unstable_wrapCallback=function(z){var Z=w;return function(){var X=w;w=Z;try{return z.apply(this,arguments)}finally{w=X}}}})(Bm);Fm.exports=Bm;var a8=Fm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm=F,mt=a8;function V(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zm=new Set,Hl={};function Ps(e,n){_a(e,n),_a(e+"Capture",n)}function _a(e,n){for(Hl[e]=n,e=0;e<n.length;e++)zm.add(n[e])}var hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=Object.prototype.hasOwnProperty,l8=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,L1={},_1={};function o8(e){return du.call(_1,e)?!0:du.call(L1,e)?!1:l8.test(e)?_1[e]=!0:(L1[e]=!0,!1)}function i8(e,n,r,s){if(r!==null&&r.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function d8(e,n,r,s){if(n===null||typeof n>"u"||i8(e,n,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Vn(e,n,r,s,a,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var En={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){En[e]=new Vn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];En[n]=new Vn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){En[e]=new Vn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){En[e]=new Vn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){En[e]=new Vn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){En[e]=new Vn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){En[e]=new Vn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){En[e]=new Vn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){En[e]=new Vn(e,5,!1,e.toLowerCase(),null,!1,!1)});var Nh=/[\-:]([a-z])/g;function Lh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Nh,Lh);En[n]=new Vn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Nh,Lh);En[n]=new Vn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Nh,Lh);En[n]=new Vn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){En[e]=new Vn(e,1,!1,e.toLowerCase(),null,!1,!1)});En.xlinkHref=new Vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){En[e]=new Vn(e,1,!1,e.toLowerCase(),null,!0,!0)});function _h(e,n,r,s){var a=En.hasOwnProperty(n)?En[n]:null;(a!==null?a.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(d8(n,r,a,s)&&(r=null),s||a===null?o8(n)&&(r===null?e.removeAttribute(n):e.setAttribute(n,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(n=a.attributeName,s=a.attributeNamespace,r===null?e.removeAttribute(n):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,s?e.setAttributeNS(s,n,r):e.setAttribute(n,r))))}var xr=Dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wo=Symbol.for("react.element"),la=Symbol.for("react.portal"),oa=Symbol.for("react.fragment"),$h=Symbol.for("react.strict_mode"),cu=Symbol.for("react.profiler"),Wm=Symbol.for("react.provider"),Hm=Symbol.for("react.context"),Ih=Symbol.for("react.forward_ref"),uu=Symbol.for("react.suspense"),hu=Symbol.for("react.suspense_list"),Eh=Symbol.for("react.memo"),_r=Symbol.for("react.lazy"),Um=Symbol.for("react.offscreen"),$1=Symbol.iterator;function il(e){return e===null||typeof e!="object"?null:(e=$1&&e[$1]||e["@@iterator"],typeof e=="function"?e:null)}var tn=Object.assign,yc;function yl(e){if(yc===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);yc=n&&n[1]||""}return`
`+yc+e}var wc=!1;function jc(e,n){if(!e||wc)return"";wc=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(h){var s=h}Reflect.construct(e,[],n)}else{try{n.call()}catch(h){s=h}e.call(n.prototype)}else{try{throw Error()}catch(h){s=h}e()}}catch(h){if(h&&s&&typeof h.stack=="string"){for(var a=h.stack.split(`
`),l=s.stack.split(`
`),o=a.length-1,i=l.length-1;1<=o&&0<=i&&a[o]!==l[i];)i--;for(;1<=o&&0<=i;o--,i--)if(a[o]!==l[i]){if(o!==1||i!==1)do if(o--,i--,0>i||a[o]!==l[i]){var c=`
`+a[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=i);break}}}finally{wc=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?yl(e):""}function c8(e){switch(e.tag){case 5:return yl(e.type);case 16:return yl("Lazy");case 13:return yl("Suspense");case 19:return yl("SuspenseList");case 0:case 2:case 15:return e=jc(e.type,!1),e;case 11:return e=jc(e.type.render,!1),e;case 1:return e=jc(e.type,!0),e;default:return""}}function pu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case oa:return"Fragment";case la:return"Portal";case cu:return"Profiler";case $h:return"StrictMode";case uu:return"Suspense";case hu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hm:return(e.displayName||"Context")+".Consumer";case Wm:return(e._context.displayName||"Context")+".Provider";case Ih:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Eh:return n=e.displayName||null,n!==null?n:pu(e.type)||"Memo";case _r:n=e._payload,e=e._init;try{return pu(e(n))}catch{}}return null}function u8(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pu(n);case 8:return n===$h?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Gr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gm(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function h8(e){var n=Gm(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,l=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(o){s=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(o){s=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ho(e){e._valueTracker||(e._valueTracker=h8(e))}function Vm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),s="";return e&&(s=Gm(e)?e.checked?"true":"false":e.value),e=s,e!==r?(n.setValue(e),!0):!1}function Ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fu(e,n){var r=n.checked;return tn({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function I1(e,n){var r=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;r=Gr(n.value!=null?n.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ym(e,n){n=n.checked,n!=null&&_h(e,"checked",n,!1)}function mu(e,n){Ym(e,n);var r=Gr(n.value),s=n.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?gu(e,n.type,r):n.hasOwnProperty("defaultValue")&&gu(e,n.type,Gr(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function E1(e,n,r){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,r||n===e.value||(e.value=n),e.defaultValue=n}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function gu(e,n,r){(n!=="number"||Ri(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var wl=Array.isArray;function wa(e,n,r,s){if(e=e.options,n){n={};for(var a=0;a<r.length;a++)n["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=n.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&s&&(e[r].defaultSelected=!0)}else{for(r=""+Gr(r),n=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function vu(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(V(91));return tn({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function M1(e,n){var r=n.value;if(r==null){if(r=n.children,n=n.defaultValue,r!=null){if(n!=null)throw Error(V(92));if(wl(r)){if(1<r.length)throw Error(V(93));r=r[0]}n=r}n==null&&(n=""),r=n}e._wrapperState={initialValue:Gr(r)}}function Zm(e,n){var r=Gr(n.value),s=Gr(n.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),n.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function A1(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function qm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xu(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?qm(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Uo,Km=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,r,s,a){MSApp.execUnsafeLocalFunction(function(){return e(n,r,s,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Uo=Uo||document.createElement("div"),Uo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Uo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ul(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var $l={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},p8=["Webkit","ms","Moz","O"];Object.keys($l).forEach(function(e){p8.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),$l[n]=$l[e]})});function Qm(e,n,r){return n==null||typeof n=="boolean"||n===""?"":r||typeof n!="number"||n===0||$l.hasOwnProperty(e)&&$l[e]?(""+n).trim():n+"px"}function Xm(e,n){e=e.style;for(var r in n)if(n.hasOwnProperty(r)){var s=r.indexOf("--")===0,a=Qm(r,n[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,a):e[r]=a}}var f8=tn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bu(e,n){if(n){if(f8[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(V(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(V(61))}if(n.style!=null&&typeof n.style!="object")throw Error(V(62))}}function yu(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wu=null;function Mh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ju=null,ja=null,Ca=null;function P1(e){if(e=vo(e)){if(typeof ju!="function")throw Error(V(280));var n=e.stateNode;n&&(n=jd(n),ju(e.stateNode,e.type,n))}}function Jm(e){ja?Ca?Ca.push(e):Ca=[e]:ja=e}function eg(){if(ja){var e=ja,n=Ca;if(Ca=ja=null,P1(e),n)for(e=0;e<n.length;e++)P1(n[e])}}function ng(e,n){return e(n)}function tg(){}var Cc=!1;function rg(e,n,r){if(Cc)return e(n,r);Cc=!0;try{return ng(e,n,r)}finally{Cc=!1,(ja!==null||Ca!==null)&&(tg(),eg())}}function Gl(e,n){var r=e.stateNode;if(r===null)return null;var s=jd(r);if(s===null)return null;r=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(V(231,n,typeof r));return r}var Cu=!1;if(hr)try{var dl={};Object.defineProperty(dl,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",dl,dl),window.removeEventListener("test",dl,dl)}catch{Cu=!1}function m8(e,n,r,s,a,l,o,i,c){var h=Array.prototype.slice.call(arguments,3);try{n.apply(r,h)}catch(m){this.onError(m)}}var Il=!1,Oi=null,Fi=!1,ku=null,g8={onError:function(e){Il=!0,Oi=e}};function v8(e,n,r,s,a,l,o,i,c){Il=!1,Oi=null,m8.apply(g8,arguments)}function x8(e,n,r,s,a,l,o,i,c){if(v8.apply(this,arguments),Il){if(Il){var h=Oi;Il=!1,Oi=null}else throw Error(V(198));Fi||(Fi=!0,ku=h)}}function Rs(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function sg(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function R1(e){if(Rs(e)!==e)throw Error(V(188))}function b8(e){var n=e.alternate;if(!n){if(n=Rs(e),n===null)throw Error(V(188));return n!==e?null:e}for(var r=e,s=n;;){var a=r.return;if(a===null)break;var l=a.alternate;if(l===null){if(s=a.return,s!==null){r=s;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===r)return R1(a),e;if(l===s)return R1(a),n;l=l.sibling}throw Error(V(188))}if(r.return!==s.return)r=a,s=l;else{for(var o=!1,i=a.child;i;){if(i===r){o=!0,r=a,s=l;break}if(i===s){o=!0,s=a,r=l;break}i=i.sibling}if(!o){for(i=l.child;i;){if(i===r){o=!0,r=l,s=a;break}if(i===s){o=!0,s=l,r=a;break}i=i.sibling}if(!o)throw Error(V(189))}}if(r.alternate!==s)throw Error(V(190))}if(r.tag!==3)throw Error(V(188));return r.stateNode.current===r?e:n}function ag(e){return e=b8(e),e!==null?lg(e):null}function lg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=lg(e);if(n!==null)return n;e=e.sibling}return null}var og=mt.unstable_scheduleCallback,O1=mt.unstable_cancelCallback,y8=mt.unstable_shouldYield,w8=mt.unstable_requestPaint,ln=mt.unstable_now,j8=mt.unstable_getCurrentPriorityLevel,Ah=mt.unstable_ImmediatePriority,ig=mt.unstable_UserBlockingPriority,Bi=mt.unstable_NormalPriority,C8=mt.unstable_LowPriority,dg=mt.unstable_IdlePriority,xd=null,Zt=null;function k8(e){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(xd,e,void 0,(e.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:N8,S8=Math.log,T8=Math.LN2;function N8(e){return e>>>=0,e===0?32:31-(S8(e)/T8|0)|0}var Go=64,Vo=4194304;function jl(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Di(e,n){var r=e.pendingLanes;if(r===0)return 0;var s=0,a=e.suspendedLanes,l=e.pingedLanes,o=r&268435455;if(o!==0){var i=o&~a;i!==0?s=jl(i):(l&=o,l!==0&&(s=jl(l)))}else o=r&~a,o!==0?s=jl(o):l!==0&&(s=jl(l));if(s===0)return 0;if(n!==0&&n!==s&&!(n&a)&&(a=s&-s,l=n&-n,a>=l||a===16&&(l&4194240)!==0))return n;if(s&4&&(s|=r&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)r=31-Ft(n),a=1<<r,s|=e[r],n&=~a;return s}function L8(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _8(e,n){for(var r=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Ft(l),i=1<<o,c=a[o];c===-1?(!(i&r)||i&s)&&(a[o]=L8(i,n)):c<=n&&(e.expiredLanes|=i),l&=~i}}function Su(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cg(){var e=Go;return Go<<=1,!(Go&4194240)&&(Go=64),e}function kc(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function mo(e,n,r){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ft(n),e[n]=r}function $8(e,n){var r=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Ft(r),l=1<<a;n[a]=0,s[a]=-1,e[a]=-1,r&=~l}}function Ph(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var s=31-Ft(r),a=1<<s;a&n|e[s]&n&&(e[s]|=n),r&=~a}}var Oe=0;function ug(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hg,Rh,pg,fg,mg,Tu=!1,Yo=[],Or=null,Fr=null,Br=null,Vl=new Map,Yl=new Map,Ir=[],I8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function F1(e,n){switch(e){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":Vl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yl.delete(n.pointerId)}}function cl(e,n,r,s,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:r,eventSystemFlags:s,nativeEvent:l,targetContainers:[a]},n!==null&&(n=vo(n),n!==null&&Rh(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function E8(e,n,r,s,a){switch(n){case"focusin":return Or=cl(Or,e,n,r,s,a),!0;case"dragenter":return Fr=cl(Fr,e,n,r,s,a),!0;case"mouseover":return Br=cl(Br,e,n,r,s,a),!0;case"pointerover":var l=a.pointerId;return Vl.set(l,cl(Vl.get(l)||null,e,n,r,s,a)),!0;case"gotpointercapture":return l=a.pointerId,Yl.set(l,cl(Yl.get(l)||null,e,n,r,s,a)),!0}return!1}function gg(e){var n=ws(e.target);if(n!==null){var r=Rs(n);if(r!==null){if(n=r.tag,n===13){if(n=sg(r),n!==null){e.blockedOn=n,mg(e.priority,function(){pg(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=Nu(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);wu=s,r.target.dispatchEvent(s),wu=null}else return n=vo(r),n!==null&&Rh(n),e.blockedOn=r,!1;n.shift()}return!0}function B1(e,n,r){fi(e)&&r.delete(n)}function M8(){Tu=!1,Or!==null&&fi(Or)&&(Or=null),Fr!==null&&fi(Fr)&&(Fr=null),Br!==null&&fi(Br)&&(Br=null),Vl.forEach(B1),Yl.forEach(B1)}function ul(e,n){e.blockedOn===n&&(e.blockedOn=null,Tu||(Tu=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,M8)))}function Zl(e){function n(a){return ul(a,e)}if(0<Yo.length){ul(Yo[0],e);for(var r=1;r<Yo.length;r++){var s=Yo[r];s.blockedOn===e&&(s.blockedOn=null)}}for(Or!==null&&ul(Or,e),Fr!==null&&ul(Fr,e),Br!==null&&ul(Br,e),Vl.forEach(n),Yl.forEach(n),r=0;r<Ir.length;r++)s=Ir[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<Ir.length&&(r=Ir[0],r.blockedOn===null);)gg(r),r.blockedOn===null&&Ir.shift()}var ka=xr.ReactCurrentBatchConfig,zi=!0;function A8(e,n,r,s){var a=Oe,l=ka.transition;ka.transition=null;try{Oe=1,Oh(e,n,r,s)}finally{Oe=a,ka.transition=l}}function P8(e,n,r,s){var a=Oe,l=ka.transition;ka.transition=null;try{Oe=4,Oh(e,n,r,s)}finally{Oe=a,ka.transition=l}}function Oh(e,n,r,s){if(zi){var a=Nu(e,n,r,s);if(a===null)Ac(e,n,s,Wi,r),F1(e,s);else if(E8(a,e,n,r,s))s.stopPropagation();else if(F1(e,s),n&4&&-1<I8.indexOf(e)){for(;a!==null;){var l=vo(a);if(l!==null&&hg(l),l=Nu(e,n,r,s),l===null&&Ac(e,n,s,Wi,r),l===a)break;a=l}a!==null&&s.stopPropagation()}else Ac(e,n,s,null,r)}}var Wi=null;function Nu(e,n,r,s){if(Wi=null,e=Mh(s),e=ws(e),e!==null)if(n=Rs(e),n===null)e=null;else if(r=n.tag,r===13){if(e=sg(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Wi=e,null}function vg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j8()){case Ah:return 1;case ig:return 4;case Bi:case C8:return 16;case dg:return 536870912;default:return 16}default:return 16}}var Mr=null,Fh=null,mi=null;function xg(){if(mi)return mi;var e,n=Fh,r=n.length,s,a="value"in Mr?Mr.value:Mr.textContent,l=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(s=1;s<=o&&n[r-s]===a[l-s];s++);return mi=a.slice(e,1<s?1-s:void 0)}function gi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Zo(){return!0}function D1(){return!1}function vt(e){function n(r,s,a,l,o){this._reactName=r,this._targetInst=a,this.type=s,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(r=e[i],this[i]=r?r(l):l[i]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Zo:D1,this.isPropagationStopped=D1,this}return tn(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),n}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bh=vt(Da),go=tn({},Da,{view:0,detail:0}),R8=vt(go),Sc,Tc,hl,bd=tn({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hl&&(hl&&e.type==="mousemove"?(Sc=e.screenX-hl.screenX,Tc=e.screenY-hl.screenY):Tc=Sc=0,hl=e),Sc)},movementY:function(e){return"movementY"in e?e.movementY:Tc}}),z1=vt(bd),O8=tn({},bd,{dataTransfer:0}),F8=vt(O8),B8=tn({},go,{relatedTarget:0}),Nc=vt(B8),D8=tn({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),z8=vt(D8),W8=tn({},Da,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),H8=vt(W8),U8=tn({},Da,{data:0}),W1=vt(U8),G8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z8(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Y8[e])?!!n[e]:!1}function Dh(){return Z8}var q8=tn({},go,{key:function(e){if(e.key){var n=G8[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?V8[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dh,charCode:function(e){return e.type==="keypress"?gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),K8=vt(q8),Q8=tn({},bd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),H1=vt(Q8),X8=tn({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dh}),J8=vt(X8),ey=tn({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),ny=vt(ey),ty=tn({},bd,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ry=vt(ty),sy=[9,13,27,32],zh=hr&&"CompositionEvent"in window,El=null;hr&&"documentMode"in document&&(El=document.documentMode);var ay=hr&&"TextEvent"in window&&!El,bg=hr&&(!zh||El&&8<El&&11>=El),U1=" ",G1=!1;function yg(e,n){switch(e){case"keyup":return sy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ia=!1;function ly(e,n){switch(e){case"compositionend":return wg(n);case"keypress":return n.which!==32?null:(G1=!0,U1);case"textInput":return e=n.data,e===U1&&G1?null:e;default:return null}}function oy(e,n){if(ia)return e==="compositionend"||!zh&&yg(e,n)?(e=xg(),mi=Fh=Mr=null,ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bg&&n.locale!=="ko"?null:n.data;default:return null}}var iy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function V1(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!iy[e.type]:n==="textarea"}function jg(e,n,r,s){Jm(s),n=Hi(n,"onChange"),0<n.length&&(r=new Bh("onChange","change",null,r,s),e.push({event:r,listeners:n}))}var Ml=null,ql=null;function dy(e){Mg(e,0)}function yd(e){var n=ua(e);if(Vm(n))return e}function cy(e,n){if(e==="change")return n}var Cg=!1;if(hr){var Lc;if(hr){var _c="oninput"in document;if(!_c){var Y1=document.createElement("div");Y1.setAttribute("oninput","return;"),_c=typeof Y1.oninput=="function"}Lc=_c}else Lc=!1;Cg=Lc&&(!document.documentMode||9<document.documentMode)}function Z1(){Ml&&(Ml.detachEvent("onpropertychange",kg),ql=Ml=null)}function kg(e){if(e.propertyName==="value"&&yd(ql)){var n=[];jg(n,ql,e,Mh(e)),rg(dy,n)}}function uy(e,n,r){e==="focusin"?(Z1(),Ml=n,ql=r,Ml.attachEvent("onpropertychange",kg)):e==="focusout"&&Z1()}function hy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yd(ql)}function py(e,n){if(e==="click")return yd(n)}function fy(e,n){if(e==="input"||e==="change")return yd(n)}function my(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Dt=typeof Object.is=="function"?Object.is:my;function Kl(e,n){if(Dt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),s=Object.keys(n);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var a=r[s];if(!du.call(n,a)||!Dt(e[a],n[a]))return!1}return!0}function q1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function K1(e,n){var r=q1(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=n&&s>=n)return{node:r,offset:n-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=q1(r)}}function Sg(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Sg(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tg(){for(var e=window,n=Ri();n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Ri(e.document)}return n}function Wh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function gy(e){var n=Tg(),r=e.focusedElem,s=e.selectionRange;if(n!==r&&r&&r.ownerDocument&&Sg(r.ownerDocument.documentElement,r)){if(s!==null&&Wh(r)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(e,r.value.length);else if(e=(n=r.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,l=Math.min(s.start,a);s=s.end===void 0?l:Math.min(s.end,a),!e.extend&&l>s&&(a=s,s=l,l=a),a=K1(r,l);var o=K1(r,s);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),l>s?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=r;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)e=n[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vy=hr&&"documentMode"in document&&11>=document.documentMode,da=null,Lu=null,Al=null,_u=!1;function Q1(e,n,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;_u||da==null||da!==Ri(s)||(s=da,"selectionStart"in s&&Wh(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Al&&Kl(Al,s)||(Al=s,s=Hi(Lu,"onSelect"),0<s.length&&(n=new Bh("onSelect","select",null,n,r),e.push({event:n,listeners:s}),n.target=da)))}function qo(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var ca={animationend:qo("Animation","AnimationEnd"),animationiteration:qo("Animation","AnimationIteration"),animationstart:qo("Animation","AnimationStart"),transitionend:qo("Transition","TransitionEnd")},$c={},Ng={};hr&&(Ng=document.createElement("div").style,"AnimationEvent"in window||(delete ca.animationend.animation,delete ca.animationiteration.animation,delete ca.animationstart.animation),"TransitionEvent"in window||delete ca.transitionend.transition);function wd(e){if($c[e])return $c[e];if(!ca[e])return e;var n=ca[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Ng)return $c[e]=n[r];return e}var Lg=wd("animationend"),_g=wd("animationiteration"),$g=wd("animationstart"),Ig=wd("transitionend"),Eg=new Map,X1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(e,n){Eg.set(e,n),Ps(n,[e])}for(var Ic=0;Ic<X1.length;Ic++){var Ec=X1[Ic],xy=Ec.toLowerCase(),by=Ec[0].toUpperCase()+Ec.slice(1);qr(xy,"on"+by)}qr(Lg,"onAnimationEnd");qr(_g,"onAnimationIteration");qr($g,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(Ig,"onTransitionEnd");_a("onMouseEnter",["mouseout","mouseover"]);_a("onMouseLeave",["mouseout","mouseover"]);_a("onPointerEnter",["pointerout","pointerover"]);_a("onPointerLeave",["pointerout","pointerover"]);Ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cl));function J1(e,n,r){var s=e.type||"unknown-event";e.currentTarget=r,x8(s,n,void 0,e),e.currentTarget=null}function Mg(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],a=s.event;s=s.listeners;e:{var l=void 0;if(n)for(var o=s.length-1;0<=o;o--){var i=s[o],c=i.instance,h=i.currentTarget;if(i=i.listener,c!==l&&a.isPropagationStopped())break e;J1(a,i,h),l=c}else for(o=0;o<s.length;o++){if(i=s[o],c=i.instance,h=i.currentTarget,i=i.listener,c!==l&&a.isPropagationStopped())break e;J1(a,i,h),l=c}}}if(Fi)throw e=ku,Fi=!1,ku=null,e}function qe(e,n){var r=n[Au];r===void 0&&(r=n[Au]=new Set);var s=e+"__bubble";r.has(s)||(Ag(n,e,2,!1),r.add(s))}function Mc(e,n,r){var s=0;n&&(s|=4),Ag(r,e,s,n)}var Ko="_reactListening"+Math.random().toString(36).slice(2);function Ql(e){if(!e[Ko]){e[Ko]=!0,zm.forEach(function(r){r!=="selectionchange"&&(yy.has(r)||Mc(r,!1,e),Mc(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ko]||(n[Ko]=!0,Mc("selectionchange",!1,n))}}function Ag(e,n,r,s){switch(vg(n)){case 1:var a=A8;break;case 4:a=P8;break;default:a=Oh}r=a.bind(null,n,r,e),a=void 0,!Cu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(n,r,{capture:!0,passive:a}):e.addEventListener(n,r,!0):a!==void 0?e.addEventListener(n,r,{passive:a}):e.addEventListener(n,r,!1)}function Ac(e,n,r,s,a){var l=s;if(!(n&1)&&!(n&2)&&s!==null)e:for(;;){if(s===null)return;var o=s.tag;if(o===3||o===4){var i=s.stateNode.containerInfo;if(i===a||i.nodeType===8&&i.parentNode===a)break;if(o===4)for(o=s.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;o=o.return}for(;i!==null;){if(o=ws(i),o===null)return;if(c=o.tag,c===5||c===6){s=l=o;continue e}i=i.parentNode}}s=s.return}rg(function(){var h=l,m=Mh(r),x=[];e:{var w=Eg.get(e);if(w!==void 0){var $=Bh,_=e;switch(e){case"keypress":if(gi(r)===0)break e;case"keydown":case"keyup":$=K8;break;case"focusin":_="focus",$=Nc;break;case"focusout":_="blur",$=Nc;break;case"beforeblur":case"afterblur":$=Nc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=z1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=F8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=J8;break;case Lg:case _g:case $g:$=z8;break;case Ig:$=ny;break;case"scroll":$=R8;break;case"wheel":$=ry;break;case"copy":case"cut":case"paste":$=H8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=H1}var C=(n&4)!==0,E=!C&&e==="scroll",b=C?w!==null?w+"Capture":null:w;C=[];for(var f=h,v;f!==null;){v=f;var g=v.stateNode;if(v.tag===5&&g!==null&&(v=g,b!==null&&(g=Gl(f,b),g!=null&&C.push(Xl(f,g,v)))),E)break;f=f.return}0<C.length&&(w=new $(w,_,null,r,m),x.push({event:w,listeners:C}))}}if(!(n&7)){e:{if(w=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",w&&r!==wu&&(_=r.relatedTarget||r.fromElement)&&(ws(_)||_[pr]))break e;if(($||w)&&(w=m.window===m?m:(w=m.ownerDocument)?w.defaultView||w.parentWindow:window,$?(_=r.relatedTarget||r.toElement,$=h,_=_?ws(_):null,_!==null&&(E=Rs(_),_!==E||_.tag!==5&&_.tag!==6)&&(_=null)):($=null,_=h),$!==_)){if(C=z1,g="onMouseLeave",b="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(C=H1,g="onPointerLeave",b="onPointerEnter",f="pointer"),E=$==null?w:ua($),v=_==null?w:ua(_),w=new C(g,f+"leave",$,r,m),w.target=E,w.relatedTarget=v,g=null,ws(m)===h&&(C=new C(b,f+"enter",_,r,m),C.target=v,C.relatedTarget=E,g=C),E=g,$&&_)n:{for(C=$,b=_,f=0,v=C;v;v=ea(v))f++;for(v=0,g=b;g;g=ea(g))v++;for(;0<f-v;)C=ea(C),f--;for(;0<v-f;)b=ea(b),v--;for(;f--;){if(C===b||b!==null&&C===b.alternate)break n;C=ea(C),b=ea(b)}C=null}else C=null;$!==null&&e2(x,w,$,C,!1),_!==null&&E!==null&&e2(x,E,_,C,!0)}}e:{if(w=h?ua(h):window,$=w.nodeName&&w.nodeName.toLowerCase(),$==="select"||$==="input"&&w.type==="file")var N=cy;else if(V1(w))if(Cg)N=fy;else{N=hy;var k=uy}else($=w.nodeName)&&$.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(N=py);if(N&&(N=N(e,h))){jg(x,N,r,m);break e}k&&k(e,w,h),e==="focusout"&&(k=w._wrapperState)&&k.controlled&&w.type==="number"&&gu(w,"number",w.value)}switch(k=h?ua(h):window,e){case"focusin":(V1(k)||k.contentEditable==="true")&&(da=k,Lu=h,Al=null);break;case"focusout":Al=Lu=da=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,Q1(x,r,m);break;case"selectionchange":if(vy)break;case"keydown":case"keyup":Q1(x,r,m)}var A;if(zh)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ia?yg(e,r)&&(R="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(R="onCompositionStart");R&&(bg&&r.locale!=="ko"&&(ia||R!=="onCompositionStart"?R==="onCompositionEnd"&&ia&&(A=xg()):(Mr=m,Fh="value"in Mr?Mr.value:Mr.textContent,ia=!0)),k=Hi(h,R),0<k.length&&(R=new W1(R,e,null,r,m),x.push({event:R,listeners:k}),A?R.data=A:(A=wg(r),A!==null&&(R.data=A)))),(A=ay?ly(e,r):oy(e,r))&&(h=Hi(h,"onBeforeInput"),0<h.length&&(m=new W1("onBeforeInput","beforeinput",null,r,m),x.push({event:m,listeners:h}),m.data=A))}Mg(x,n)})}function Xl(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Hi(e,n){for(var r=n+"Capture",s=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Gl(e,r),l!=null&&s.unshift(Xl(e,l,a)),l=Gl(e,n),l!=null&&s.push(Xl(e,l,a))),e=e.return}return s}function ea(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function e2(e,n,r,s,a){for(var l=n._reactName,o=[];r!==null&&r!==s;){var i=r,c=i.alternate,h=i.stateNode;if(c!==null&&c===s)break;i.tag===5&&h!==null&&(i=h,a?(c=Gl(r,l),c!=null&&o.unshift(Xl(r,c,i))):a||(c=Gl(r,l),c!=null&&o.push(Xl(r,c,i)))),r=r.return}o.length!==0&&e.push({event:n,listeners:o})}var wy=/\r\n?/g,jy=/\u0000|\uFFFD/g;function n2(e){return(typeof e=="string"?e:""+e).replace(wy,`
`).replace(jy,"")}function Qo(e,n,r){if(n=n2(n),n2(e)!==n&&r)throw Error(V(425))}function Ui(){}var $u=null,Iu=null;function Eu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Mu=typeof setTimeout=="function"?setTimeout:void 0,Cy=typeof clearTimeout=="function"?clearTimeout:void 0,t2=typeof Promise=="function"?Promise:void 0,ky=typeof queueMicrotask=="function"?queueMicrotask:typeof t2<"u"?function(e){return t2.resolve(null).then(e).catch(Sy)}:Mu;function Sy(e){setTimeout(function(){throw e})}function Pc(e,n){var r=n,s=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(s===0){e.removeChild(a),Zl(n);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=a}while(r);Zl(n)}function Dr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function r2(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}var za=Math.random().toString(36).slice(2),Yt="__reactFiber$"+za,Jl="__reactProps$"+za,pr="__reactContainer$"+za,Au="__reactEvents$"+za,Ty="__reactListeners$"+za,Ny="__reactHandles$"+za;function ws(e){var n=e[Yt];if(n)return n;for(var r=e.parentNode;r;){if(n=r[pr]||r[Yt]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=r2(e);e!==null;){if(r=e[Yt])return r;e=r2(e)}return n}e=r,r=e.parentNode}return null}function vo(e){return e=e[Yt]||e[pr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ua(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function jd(e){return e[Jl]||null}var Pu=[],ha=-1;function Kr(e){return{current:e}}function Qe(e){0>ha||(e.current=Pu[ha],Pu[ha]=null,ha--)}function Ue(e,n){ha++,Pu[ha]=e.current,e.current=n}var Vr={},Bn=Kr(Vr),tt=Kr(!1),_s=Vr;function $a(e,n){var r=e.type.contextTypes;if(!r)return Vr;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in r)a[l]=n[l];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function rt(e){return e=e.childContextTypes,e!=null}function Gi(){Qe(tt),Qe(Bn)}function s2(e,n,r){if(Bn.current!==Vr)throw Error(V(168));Ue(Bn,n),Ue(tt,r)}function Pg(e,n,r){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var a in s)if(!(a in n))throw Error(V(108,u8(e)||"Unknown",a));return tn({},r,s)}function Vi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vr,_s=Bn.current,Ue(Bn,e),Ue(tt,tt.current),!0}function a2(e,n,r){var s=e.stateNode;if(!s)throw Error(V(169));r?(e=Pg(e,n,_s),s.__reactInternalMemoizedMergedChildContext=e,Qe(tt),Qe(Bn),Ue(Bn,e)):Qe(tt),Ue(tt,r)}var lr=null,Cd=!1,Rc=!1;function Rg(e){lr===null?lr=[e]:lr.push(e)}function Ly(e){Cd=!0,Rg(e)}function Qr(){if(!Rc&&lr!==null){Rc=!0;var e=0,n=Oe;try{var r=lr;for(Oe=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}lr=null,Cd=!1}catch(a){throw lr!==null&&(lr=lr.slice(e+1)),og(Ah,Qr),a}finally{Oe=n,Rc=!1}}return null}var pa=[],fa=0,Yi=null,Zi=0,yt=[],wt=0,$s=null,or=1,ir="";function gs(e,n){pa[fa++]=Zi,pa[fa++]=Yi,Yi=e,Zi=n}function Og(e,n,r){yt[wt++]=or,yt[wt++]=ir,yt[wt++]=$s,$s=e;var s=or;e=ir;var a=32-Ft(s)-1;s&=~(1<<a),r+=1;var l=32-Ft(n)+a;if(30<l){var o=a-a%5;l=(s&(1<<o)-1).toString(32),s>>=o,a-=o,or=1<<32-Ft(n)+a|r<<a|s,ir=l+e}else or=1<<l|r<<a|s,ir=e}function Hh(e){e.return!==null&&(gs(e,1),Og(e,1,0))}function Uh(e){for(;e===Yi;)Yi=pa[--fa],pa[fa]=null,Zi=pa[--fa],pa[fa]=null;for(;e===$s;)$s=yt[--wt],yt[wt]=null,ir=yt[--wt],yt[wt]=null,or=yt[--wt],yt[wt]=null}var ft=null,pt=null,Xe=!1,Pt=null;function Fg(e,n){var r=jt(5,null,null,0);r.elementType="DELETED",r.stateNode=n,r.return=e,n=e.deletions,n===null?(e.deletions=[r],e.flags|=16):n.push(r)}function l2(e,n){switch(e.tag){case 5:var r=e.type;return n=n.nodeType!==1||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ft=e,pt=Dr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ft=e,pt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(r=$s!==null?{id:or,overflow:ir}:null,e.memoizedState={dehydrated:n,treeContext:r,retryLane:1073741824},r=jt(18,null,null,0),r.stateNode=n,r.return=e,e.child=r,ft=e,pt=null,!0):!1;default:return!1}}function Ru(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ou(e){if(Xe){var n=pt;if(n){var r=n;if(!l2(e,n)){if(Ru(e))throw Error(V(418));n=Dr(r.nextSibling);var s=ft;n&&l2(e,n)?Fg(s,r):(e.flags=e.flags&-4097|2,Xe=!1,ft=e)}}else{if(Ru(e))throw Error(V(418));e.flags=e.flags&-4097|2,Xe=!1,ft=e}}}function o2(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ft=e}function Xo(e){if(e!==ft)return!1;if(!Xe)return o2(e),Xe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Eu(e.type,e.memoizedProps)),n&&(n=pt)){if(Ru(e))throw Bg(),Error(V(418));for(;n;)Fg(e,n),n=Dr(n.nextSibling)}if(o2(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(n===0){pt=Dr(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++}e=e.nextSibling}pt=null}}else pt=ft?Dr(e.stateNode.nextSibling):null;return!0}function Bg(){for(var e=pt;e;)e=Dr(e.nextSibling)}function Ia(){pt=ft=null,Xe=!1}function Gh(e){Pt===null?Pt=[e]:Pt.push(e)}var _y=xr.ReactCurrentBatchConfig;function Et(e,n){if(e&&e.defaultProps){n=tn({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}var qi=Kr(null),Ki=null,ma=null,Vh=null;function Yh(){Vh=ma=Ki=null}function Zh(e){var n=qi.current;Qe(qi),e._currentValue=n}function Fu(e,n,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===r)break;e=e.return}}function Sa(e,n){Ki=e,Vh=ma=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(nt=!0),e.firstContext=null)}function kt(e){var n=e._currentValue;if(Vh!==e)if(e={context:e,memoizedValue:n,next:null},ma===null){if(Ki===null)throw Error(V(308));ma=e,Ki.dependencies={lanes:0,firstContext:e}}else ma=ma.next=e;return n}var js=null;function qh(e){js===null?js=[e]:js.push(e)}function Dg(e,n,r,s){var a=n.interleaved;return a===null?(r.next=r,qh(n)):(r.next=a.next,a.next=r),n.interleaved=r,fr(e,s)}function fr(e,n){e.lanes|=n;var r=e.alternate;for(r!==null&&(r.lanes|=n),r=e,e=e.return;e!==null;)e.childLanes|=n,r=e.alternate,r!==null&&(r.childLanes|=n),r=e,e=e.return;return r.tag===3?r.stateNode:null}var $r=!1;function Kh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zg(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function cr(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function zr(e,n,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,$e&2){var a=s.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),s.pending=n,fr(e,r)}return a=s.interleaved,a===null?(n.next=n,qh(s)):(n.next=a.next,a.next=n),s.interleaved=n,fr(e,r)}function vi(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,r|=s,n.lanes=r,Ph(e,r)}}function i2(e,n){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var a=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?a=l=o:l=l.next=o,r=r.next}while(r!==null);l===null?a=l=n:l=l.next=n}else a=l=n;r={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}function Qi(e,n,r,s){var a=e.updateQueue;$r=!1;var l=a.firstBaseUpdate,o=a.lastBaseUpdate,i=a.shared.pending;if(i!==null){a.shared.pending=null;var c=i,h=c.next;c.next=null,o===null?l=h:o.next=h,o=c;var m=e.alternate;m!==null&&(m=m.updateQueue,i=m.lastBaseUpdate,i!==o&&(i===null?m.firstBaseUpdate=h:i.next=h,m.lastBaseUpdate=c))}if(l!==null){var x=a.baseState;o=0,m=h=c=null,i=l;do{var w=i.lane,$=i.eventTime;if((s&w)===w){m!==null&&(m=m.next={eventTime:$,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var _=e,C=i;switch(w=n,$=r,C.tag){case 1:if(_=C.payload,typeof _=="function"){x=_.call($,x,w);break e}x=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=C.payload,w=typeof _=="function"?_.call($,x,w):_,w==null)break e;x=tn({},x,w);break e;case 2:$r=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,w=a.effects,w===null?a.effects=[i]:w.push(i))}else $={eventTime:$,lane:w,tag:i.tag,payload:i.payload,callback:i.callback,next:null},m===null?(h=m=$,c=x):m=m.next=$,o|=w;if(i=i.next,i===null){if(i=a.shared.pending,i===null)break;w=i,i=w.next,w.next=null,a.lastBaseUpdate=w,a.shared.pending=null}}while(!0);if(m===null&&(c=x),a.baseState=c,a.firstBaseUpdate=h,a.lastBaseUpdate=m,n=a.shared.interleaved,n!==null){a=n;do o|=a.lane,a=a.next;while(a!==n)}else l===null&&(a.shared.lanes=0);Es|=o,e.lanes=o,e.memoizedState=x}}function d2(e,n,r){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],a=s.callback;if(a!==null){if(s.callback=null,s=r,typeof a!="function")throw Error(V(191,a));a.call(s)}}}var Wg=new Dm.Component().refs;function Bu(e,n,r,s){n=e.memoizedState,r=r(s,n),r=r==null?n:tn({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var kd={isMounted:function(e){return(e=e._reactInternals)?Rs(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var s=Un(),a=Hr(e),l=cr(s,a);l.payload=n,r!=null&&(l.callback=r),n=zr(e,l,a),n!==null&&(Bt(n,e,a,s),vi(n,e,a))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var s=Un(),a=Hr(e),l=cr(s,a);l.tag=1,l.payload=n,r!=null&&(l.callback=r),n=zr(e,l,a),n!==null&&(Bt(n,e,a,s),vi(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Un(),s=Hr(e),a=cr(r,s);a.tag=2,n!=null&&(a.callback=n),n=zr(e,a,s),n!==null&&(Bt(n,e,s,r),vi(n,e,s))}};function c2(e,n,r,s,a,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,l,o):n.prototype&&n.prototype.isPureReactComponent?!Kl(r,s)||!Kl(a,l):!0}function Hg(e,n,r){var s=!1,a=Vr,l=n.contextType;return typeof l=="object"&&l!==null?l=kt(l):(a=rt(n)?_s:Bn.current,s=n.contextTypes,l=(s=s!=null)?$a(e,a):Vr),n=new n(r,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=kd,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),n}function u2(e,n,r,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,s),n.state!==e&&kd.enqueueReplaceState(n,n.state,null)}function Du(e,n,r,s){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs=Wg,Kh(e);var l=n.contextType;typeof l=="object"&&l!==null?a.context=kt(l):(l=rt(n)?_s:Bn.current,a.context=$a(e,l)),a.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Bu(e,n,l,r),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&kd.enqueueReplaceState(a,a.state,null),Qi(e,r,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function pl(e,n,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(V(309));var s=r.stateNode}if(!s)throw Error(V(147,e));var a=s,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var i=a.refs;i===Wg&&(i=a.refs={}),o===null?delete i[l]:i[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(V(284));if(!r._owner)throw Error(V(290,e))}return e}function Jo(e,n){throw e=Object.prototype.toString.call(n),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function h2(e){var n=e._init;return n(e._payload)}function Ug(e){function n(b,f){if(e){var v=b.deletions;v===null?(b.deletions=[f],b.flags|=16):v.push(f)}}function r(b,f){if(!e)return null;for(;f!==null;)n(b,f),f=f.sibling;return null}function s(b,f){for(b=new Map;f!==null;)f.key!==null?b.set(f.key,f):b.set(f.index,f),f=f.sibling;return b}function a(b,f){return b=Ur(b,f),b.index=0,b.sibling=null,b}function l(b,f,v){return b.index=v,e?(v=b.alternate,v!==null?(v=v.index,v<f?(b.flags|=2,f):v):(b.flags|=2,f)):(b.flags|=1048576,f)}function o(b){return e&&b.alternate===null&&(b.flags|=2),b}function i(b,f,v,g){return f===null||f.tag!==6?(f=Hc(v,b.mode,g),f.return=b,f):(f=a(f,v),f.return=b,f)}function c(b,f,v,g){var N=v.type;return N===oa?m(b,f,v.props.children,g,v.key):f!==null&&(f.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===_r&&h2(N)===f.type)?(g=a(f,v.props),g.ref=pl(b,f,v),g.return=b,g):(g=Ci(v.type,v.key,v.props,null,b.mode,g),g.ref=pl(b,f,v),g.return=b,g)}function h(b,f,v,g){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Uc(v,b.mode,g),f.return=b,f):(f=a(f,v.children||[]),f.return=b,f)}function m(b,f,v,g,N){return f===null||f.tag!==7?(f=Ls(v,b.mode,g,N),f.return=b,f):(f=a(f,v),f.return=b,f)}function x(b,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Hc(""+f,b.mode,v),f.return=b,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Wo:return v=Ci(f.type,f.key,f.props,null,b.mode,v),v.ref=pl(b,null,f),v.return=b,v;case la:return f=Uc(f,b.mode,v),f.return=b,f;case _r:var g=f._init;return x(b,g(f._payload),v)}if(wl(f)||il(f))return f=Ls(f,b.mode,v,null),f.return=b,f;Jo(b,f)}return null}function w(b,f,v,g){var N=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return N!==null?null:i(b,f,""+v,g);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wo:return v.key===N?c(b,f,v,g):null;case la:return v.key===N?h(b,f,v,g):null;case _r:return N=v._init,w(b,f,N(v._payload),g)}if(wl(v)||il(v))return N!==null?null:m(b,f,v,g,null);Jo(b,v)}return null}function $(b,f,v,g,N){if(typeof g=="string"&&g!==""||typeof g=="number")return b=b.get(v)||null,i(f,b,""+g,N);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wo:return b=b.get(g.key===null?v:g.key)||null,c(f,b,g,N);case la:return b=b.get(g.key===null?v:g.key)||null,h(f,b,g,N);case _r:var k=g._init;return $(b,f,v,k(g._payload),N)}if(wl(g)||il(g))return b=b.get(v)||null,m(f,b,g,N,null);Jo(f,g)}return null}function _(b,f,v,g){for(var N=null,k=null,A=f,R=f=0,D=null;A!==null&&R<v.length;R++){A.index>R?(D=A,A=null):D=A.sibling;var Y=w(b,A,v[R],g);if(Y===null){A===null&&(A=D);break}e&&A&&Y.alternate===null&&n(b,A),f=l(Y,f,R),k===null?N=Y:k.sibling=Y,k=Y,A=D}if(R===v.length)return r(b,A),Xe&&gs(b,R),N;if(A===null){for(;R<v.length;R++)A=x(b,v[R],g),A!==null&&(f=l(A,f,R),k===null?N=A:k.sibling=A,k=A);return Xe&&gs(b,R),N}for(A=s(b,A);R<v.length;R++)D=$(A,b,R,v[R],g),D!==null&&(e&&D.alternate!==null&&A.delete(D.key===null?R:D.key),f=l(D,f,R),k===null?N=D:k.sibling=D,k=D);return e&&A.forEach(function(he){return n(b,he)}),Xe&&gs(b,R),N}function C(b,f,v,g){var N=il(v);if(typeof N!="function")throw Error(V(150));if(v=N.call(v),v==null)throw Error(V(151));for(var k=N=null,A=f,R=f=0,D=null,Y=v.next();A!==null&&!Y.done;R++,Y=v.next()){A.index>R?(D=A,A=null):D=A.sibling;var he=w(b,A,Y.value,g);if(he===null){A===null&&(A=D);break}e&&A&&he.alternate===null&&n(b,A),f=l(he,f,R),k===null?N=he:k.sibling=he,k=he,A=D}if(Y.done)return r(b,A),Xe&&gs(b,R),N;if(A===null){for(;!Y.done;R++,Y=v.next())Y=x(b,Y.value,g),Y!==null&&(f=l(Y,f,R),k===null?N=Y:k.sibling=Y,k=Y);return Xe&&gs(b,R),N}for(A=s(b,A);!Y.done;R++,Y=v.next())Y=$(A,b,R,Y.value,g),Y!==null&&(e&&Y.alternate!==null&&A.delete(Y.key===null?R:Y.key),f=l(Y,f,R),k===null?N=Y:k.sibling=Y,k=Y);return e&&A.forEach(function(ie){return n(b,ie)}),Xe&&gs(b,R),N}function E(b,f,v,g){if(typeof v=="object"&&v!==null&&v.type===oa&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Wo:e:{for(var N=v.key,k=f;k!==null;){if(k.key===N){if(N=v.type,N===oa){if(k.tag===7){r(b,k.sibling),f=a(k,v.props.children),f.return=b,b=f;break e}}else if(k.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===_r&&h2(N)===k.type){r(b,k.sibling),f=a(k,v.props),f.ref=pl(b,k,v),f.return=b,b=f;break e}r(b,k);break}else n(b,k);k=k.sibling}v.type===oa?(f=Ls(v.props.children,b.mode,g,v.key),f.return=b,b=f):(g=Ci(v.type,v.key,v.props,null,b.mode,g),g.ref=pl(b,f,v),g.return=b,b=g)}return o(b);case la:e:{for(k=v.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){r(b,f.sibling),f=a(f,v.children||[]),f.return=b,b=f;break e}else{r(b,f);break}else n(b,f);f=f.sibling}f=Uc(v,b.mode,g),f.return=b,b=f}return o(b);case _r:return k=v._init,E(b,f,k(v._payload),g)}if(wl(v))return _(b,f,v,g);if(il(v))return C(b,f,v,g);Jo(b,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(r(b,f.sibling),f=a(f,v),f.return=b,b=f):(r(b,f),f=Hc(v,b.mode,g),f.return=b,b=f),o(b)):r(b,f)}return E}var Ea=Ug(!0),Gg=Ug(!1),xo={},qt=Kr(xo),eo=Kr(xo),no=Kr(xo);function Cs(e){if(e===xo)throw Error(V(174));return e}function Qh(e,n){switch(Ue(no,n),Ue(eo,e),Ue(qt,xo),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:xu(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=xu(n,e)}Qe(qt),Ue(qt,n)}function Ma(){Qe(qt),Qe(eo),Qe(no)}function Vg(e){Cs(no.current);var n=Cs(qt.current),r=xu(n,e.type);n!==r&&(Ue(eo,e),Ue(qt,r))}function Xh(e){eo.current===e&&(Qe(qt),Qe(eo))}var en=Kr(0);function Xi(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Oc=[];function Jh(){for(var e=0;e<Oc.length;e++)Oc[e]._workInProgressVersionPrimary=null;Oc.length=0}var xi=xr.ReactCurrentDispatcher,Fc=xr.ReactCurrentBatchConfig,Is=0,nn=null,xn=null,Cn=null,Ji=!1,Pl=!1,to=0,$y=0;function Rn(){throw Error(V(321))}function ep(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!Dt(e[r],n[r]))return!1;return!0}function np(e,n,r,s,a,l){if(Is=l,nn=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,xi.current=e===null||e.memoizedState===null?Ay:Py,e=r(s,a),Pl){l=0;do{if(Pl=!1,to=0,25<=l)throw Error(V(301));l+=1,Cn=xn=null,n.updateQueue=null,xi.current=Ry,e=r(s,a)}while(Pl)}if(xi.current=ed,n=xn!==null&&xn.next!==null,Is=0,Cn=xn=nn=null,Ji=!1,n)throw Error(V(300));return e}function tp(){var e=to!==0;return to=0,e}function Gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?nn.memoizedState=Cn=e:Cn=Cn.next=e,Cn}function St(){if(xn===null){var e=nn.alternate;e=e!==null?e.memoizedState:null}else e=xn.next;var n=Cn===null?nn.memoizedState:Cn.next;if(n!==null)Cn=n,xn=e;else{if(e===null)throw Error(V(310));xn=e,e={memoizedState:xn.memoizedState,baseState:xn.baseState,baseQueue:xn.baseQueue,queue:xn.queue,next:null},Cn===null?nn.memoizedState=Cn=e:Cn=Cn.next=e}return Cn}function ro(e,n){return typeof n=="function"?n(e):n}function Bc(e){var n=St(),r=n.queue;if(r===null)throw Error(V(311));r.lastRenderedReducer=e;var s=xn,a=s.baseQueue,l=r.pending;if(l!==null){if(a!==null){var o=a.next;a.next=l.next,l.next=o}s.baseQueue=a=l,r.pending=null}if(a!==null){l=a.next,s=s.baseState;var i=o=null,c=null,h=l;do{var m=h.lane;if((Is&m)===m)c!==null&&(c=c.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),s=h.hasEagerState?h.eagerState:e(s,h.action);else{var x={lane:m,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};c===null?(i=c=x,o=s):c=c.next=x,nn.lanes|=m,Es|=m}h=h.next}while(h!==null&&h!==l);c===null?o=s:c.next=i,Dt(s,n.memoizedState)||(nt=!0),n.memoizedState=s,n.baseState=o,n.baseQueue=c,r.lastRenderedState=s}if(e=r.interleaved,e!==null){a=e;do l=a.lane,nn.lanes|=l,Es|=l,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[n.memoizedState,r.dispatch]}function Dc(e){var n=St(),r=n.queue;if(r===null)throw Error(V(311));r.lastRenderedReducer=e;var s=r.dispatch,a=r.pending,l=n.memoizedState;if(a!==null){r.pending=null;var o=a=a.next;do l=e(l,o.action),o=o.next;while(o!==a);Dt(l,n.memoizedState)||(nt=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),r.lastRenderedState=l}return[l,s]}function Yg(){}function Zg(e,n){var r=nn,s=St(),a=n(),l=!Dt(s.memoizedState,a);if(l&&(s.memoizedState=a,nt=!0),s=s.queue,rp(Qg.bind(null,r,s,e),[e]),s.getSnapshot!==n||l||Cn!==null&&Cn.memoizedState.tag&1){if(r.flags|=2048,so(9,Kg.bind(null,r,s,a,n),void 0,null),kn===null)throw Error(V(349));Is&30||qg(r,n,a)}return a}function qg(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=nn.updateQueue,n===null?(n={lastEffect:null,stores:null},nn.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function Kg(e,n,r,s){n.value=r,n.getSnapshot=s,Xg(n)&&Jg(e)}function Qg(e,n,r){return r(function(){Xg(n)&&Jg(e)})}function Xg(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Dt(e,r)}catch{return!0}}function Jg(e){var n=fr(e,1);n!==null&&Bt(n,e,1,-1)}function p2(e){var n=Gt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:e},n.queue=e,e=e.dispatch=My.bind(null,nn,e),[n.memoizedState,e]}function so(e,n,r,s){return e={tag:e,create:n,destroy:r,deps:s,next:null},n=nn.updateQueue,n===null?(n={lastEffect:null,stores:null},nn.updateQueue=n,n.lastEffect=e.next=e):(r=n.lastEffect,r===null?n.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,n.lastEffect=e)),e}function e3(){return St().memoizedState}function bi(e,n,r,s){var a=Gt();nn.flags|=e,a.memoizedState=so(1|n,r,void 0,s===void 0?null:s)}function Sd(e,n,r,s){var a=St();s=s===void 0?null:s;var l=void 0;if(xn!==null){var o=xn.memoizedState;if(l=o.destroy,s!==null&&ep(s,o.deps)){a.memoizedState=so(n,r,l,s);return}}nn.flags|=e,a.memoizedState=so(1|n,r,l,s)}function f2(e,n){return bi(8390656,8,e,n)}function rp(e,n){return Sd(2048,8,e,n)}function n3(e,n){return Sd(4,2,e,n)}function t3(e,n){return Sd(4,4,e,n)}function r3(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function s3(e,n,r){return r=r!=null?r.concat([e]):null,Sd(4,4,r3.bind(null,n,e),r)}function sp(){}function a3(e,n){var r=St();n=n===void 0?null:n;var s=r.memoizedState;return s!==null&&n!==null&&ep(n,s[1])?s[0]:(r.memoizedState=[e,n],e)}function l3(e,n){var r=St();n=n===void 0?null:n;var s=r.memoizedState;return s!==null&&n!==null&&ep(n,s[1])?s[0]:(e=e(),r.memoizedState=[e,n],e)}function o3(e,n,r){return Is&21?(Dt(r,n)||(r=cg(),nn.lanes|=r,Es|=r,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=r)}function Iy(e,n){var r=Oe;Oe=r!==0&&4>r?r:4,e(!0);var s=Fc.transition;Fc.transition={};try{e(!1),n()}finally{Oe=r,Fc.transition=s}}function i3(){return St().memoizedState}function Ey(e,n,r){var s=Hr(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},d3(e))c3(n,r);else if(r=Dg(e,n,r,s),r!==null){var a=Un();Bt(r,e,s,a),u3(r,n,s)}}function My(e,n,r){var s=Hr(e),a={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(d3(e))c3(n,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,i=l(o,r);if(a.hasEagerState=!0,a.eagerState=i,Dt(i,o)){var c=n.interleaved;c===null?(a.next=a,qh(n)):(a.next=c.next,c.next=a),n.interleaved=a;return}}catch{}finally{}r=Dg(e,n,a,s),r!==null&&(a=Un(),Bt(r,e,s,a),u3(r,n,s))}}function d3(e){var n=e.alternate;return e===nn||n!==null&&n===nn}function c3(e,n){Pl=Ji=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function u3(e,n,r){if(r&4194240){var s=n.lanes;s&=e.pendingLanes,r|=s,n.lanes=r,Ph(e,r)}}var ed={readContext:kt,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},Ay={readContext:kt,useCallback:function(e,n){return Gt().memoizedState=[e,n===void 0?null:n],e},useContext:kt,useEffect:f2,useImperativeHandle:function(e,n,r){return r=r!=null?r.concat([e]):null,bi(4194308,4,r3.bind(null,n,e),r)},useLayoutEffect:function(e,n){return bi(4194308,4,e,n)},useInsertionEffect:function(e,n){return bi(4,2,e,n)},useMemo:function(e,n){var r=Gt();return n=n===void 0?null:n,e=e(),r.memoizedState=[e,n],e},useReducer:function(e,n,r){var s=Gt();return n=r!==void 0?r(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=Ey.bind(null,nn,e),[s.memoizedState,e]},useRef:function(e){var n=Gt();return e={current:e},n.memoizedState=e},useState:p2,useDebugValue:sp,useDeferredValue:function(e){return Gt().memoizedState=e},useTransition:function(){var e=p2(!1),n=e[0];return e=Iy.bind(null,e[1]),Gt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,r){var s=nn,a=Gt();if(Xe){if(r===void 0)throw Error(V(407));r=r()}else{if(r=n(),kn===null)throw Error(V(349));Is&30||qg(s,n,r)}a.memoizedState=r;var l={value:r,getSnapshot:n};return a.queue=l,f2(Qg.bind(null,s,l,e),[e]),s.flags|=2048,so(9,Kg.bind(null,s,l,r,n),void 0,null),r},useId:function(){var e=Gt(),n=kn.identifierPrefix;if(Xe){var r=ir,s=or;r=(s&~(1<<32-Ft(s)-1)).toString(32)+r,n=":"+n+"R"+r,r=to++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=$y++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Py={readContext:kt,useCallback:a3,useContext:kt,useEffect:rp,useImperativeHandle:s3,useInsertionEffect:n3,useLayoutEffect:t3,useMemo:l3,useReducer:Bc,useRef:e3,useState:function(){return Bc(ro)},useDebugValue:sp,useDeferredValue:function(e){var n=St();return o3(n,xn.memoizedState,e)},useTransition:function(){var e=Bc(ro)[0],n=St().memoizedState;return[e,n]},useMutableSource:Yg,useSyncExternalStore:Zg,useId:i3,unstable_isNewReconciler:!1},Ry={readContext:kt,useCallback:a3,useContext:kt,useEffect:rp,useImperativeHandle:s3,useInsertionEffect:n3,useLayoutEffect:t3,useMemo:l3,useReducer:Dc,useRef:e3,useState:function(){return Dc(ro)},useDebugValue:sp,useDeferredValue:function(e){var n=St();return xn===null?n.memoizedState=e:o3(n,xn.memoizedState,e)},useTransition:function(){var e=Dc(ro)[0],n=St().memoizedState;return[e,n]},useMutableSource:Yg,useSyncExternalStore:Zg,useId:i3,unstable_isNewReconciler:!1};function Aa(e,n){try{var r="",s=n;do r+=c8(s),s=s.return;while(s);var a=r}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:a,digest:null}}function zc(e,n,r){return{value:e,source:null,stack:r??null,digest:n??null}}function zu(e,n){try{console.error(n.value)}catch(r){setTimeout(function(){throw r})}}var Oy=typeof WeakMap=="function"?WeakMap:Map;function h3(e,n,r){r=cr(-1,r),r.tag=3,r.payload={element:null};var s=n.value;return r.callback=function(){td||(td=!0,Qu=s),zu(e,n)},r}function p3(e,n,r){r=cr(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=n.value;r.payload=function(){return s(a)},r.callback=function(){zu(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){zu(e,n),typeof s!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),r}function m2(e,n,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Oy;var a=new Set;s.set(n,a)}else a=s.get(n),a===void 0&&(a=new Set,s.set(n,a));a.has(r)||(a.add(r),e=Qy.bind(null,e,n,r),n.then(e,e))}function g2(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function v2(e,n,r,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(n=cr(-1,1),n.tag=2,zr(r,n,1))),r.lanes|=1),e)}var Fy=xr.ReactCurrentOwner,nt=!1;function Wn(e,n,r,s){n.child=e===null?Gg(n,null,r,s):Ea(n,e.child,r,s)}function x2(e,n,r,s,a){r=r.render;var l=n.ref;return Sa(n,a),s=np(e,n,r,s,l,a),r=tp(),e!==null&&!nt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,mr(e,n,a)):(Xe&&r&&Hh(n),n.flags|=1,Wn(e,n,s,a),n.child)}function b2(e,n,r,s,a){if(e===null){var l=r.type;return typeof l=="function"&&!hp(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(n.tag=15,n.type=l,f3(e,n,l,s,a)):(e=Ci(r.type,null,s,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&a)){var o=l.memoizedProps;if(r=r.compare,r=r!==null?r:Kl,r(o,s)&&e.ref===n.ref)return mr(e,n,a)}return n.flags|=1,e=Ur(l,s),e.ref=n.ref,e.return=n,n.child=e}function f3(e,n,r,s,a){if(e!==null){var l=e.memoizedProps;if(Kl(l,s)&&e.ref===n.ref)if(nt=!1,n.pendingProps=s=l,(e.lanes&a)!==0)e.flags&131072&&(nt=!0);else return n.lanes=e.lanes,mr(e,n,a)}return Wu(e,n,r,s,a)}function m3(e,n,r){var s=n.pendingProps,a=s.children,l=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ue(va,it),it|=r;else{if(!(r&1073741824))return e=l!==null?l.baseLanes|r:r,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Ue(va,it),it|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=l!==null?l.baseLanes:r,Ue(va,it),it|=s}else l!==null?(s=l.baseLanes|r,n.memoizedState=null):s=r,Ue(va,it),it|=s;return Wn(e,n,a,r),n.child}function g3(e,n){var r=n.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(n.flags|=512,n.flags|=2097152)}function Wu(e,n,r,s,a){var l=rt(r)?_s:Bn.current;return l=$a(n,l),Sa(n,a),r=np(e,n,r,s,l,a),s=tp(),e!==null&&!nt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,mr(e,n,a)):(Xe&&s&&Hh(n),n.flags|=1,Wn(e,n,r,a),n.child)}function y2(e,n,r,s,a){if(rt(r)){var l=!0;Vi(n)}else l=!1;if(Sa(n,a),n.stateNode===null)yi(e,n),Hg(n,r,s),Du(n,r,s,a),s=!0;else if(e===null){var o=n.stateNode,i=n.memoizedProps;o.props=i;var c=o.context,h=r.contextType;typeof h=="object"&&h!==null?h=kt(h):(h=rt(r)?_s:Bn.current,h=$a(n,h));var m=r.getDerivedStateFromProps,x=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";x||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==s||c!==h)&&u2(n,o,s,h),$r=!1;var w=n.memoizedState;o.state=w,Qi(n,s,o,a),c=n.memoizedState,i!==s||w!==c||tt.current||$r?(typeof m=="function"&&(Bu(n,r,m,s),c=n.memoizedState),(i=$r||c2(n,r,i,s,w,c,h))?(x||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=c),o.props=s,o.state=c,o.context=h,s=i):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{o=n.stateNode,zg(e,n),i=n.memoizedProps,h=n.type===n.elementType?i:Et(n.type,i),o.props=h,x=n.pendingProps,w=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=kt(c):(c=rt(r)?_s:Bn.current,c=$a(n,c));var $=r.getDerivedStateFromProps;(m=typeof $=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==x||w!==c)&&u2(n,o,s,c),$r=!1,w=n.memoizedState,o.state=w,Qi(n,s,o,a);var _=n.memoizedState;i!==x||w!==_||tt.current||$r?(typeof $=="function"&&(Bu(n,r,$,s),_=n.memoizedState),(h=$r||c2(n,r,h,s,w,_,c)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(s,_,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(s,_,c)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&w===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&w===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=_),o.props=s,o.state=_,o.context=c,s=h):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&w===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&w===e.memoizedState||(n.flags|=1024),s=!1)}return Hu(e,n,r,s,l,a)}function Hu(e,n,r,s,a,l){g3(e,n);var o=(n.flags&128)!==0;if(!s&&!o)return a&&a2(n,r,!1),mr(e,n,l);s=n.stateNode,Fy.current=n;var i=o&&typeof r.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&o?(n.child=Ea(n,e.child,null,l),n.child=Ea(n,null,i,l)):Wn(e,n,i,l),n.memoizedState=s.state,a&&a2(n,r,!0),n.child}function v3(e){var n=e.stateNode;n.pendingContext?s2(e,n.pendingContext,n.pendingContext!==n.context):n.context&&s2(e,n.context,!1),Qh(e,n.containerInfo)}function w2(e,n,r,s,a){return Ia(),Gh(a),n.flags|=256,Wn(e,n,r,s),n.child}var Uu={dehydrated:null,treeContext:null,retryLane:0};function Gu(e){return{baseLanes:e,cachePool:null,transitions:null}}function x3(e,n,r){var s=n.pendingProps,a=en.current,l=!1,o=(n.flags&128)!==0,i;if((i=o)||(i=e!==null&&e.memoizedState===null?!1:(a&2)!==0),i?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Ue(en,a&1),e===null)return Ou(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=s.children,e=s.fallback,l?(s=n.mode,l=n.child,o={mode:"hidden",children:o},!(s&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ld(o,s,0,null),e=Ls(e,s,r,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Gu(r),n.memoizedState=Uu,e):ap(n,o));if(a=e.memoizedState,a!==null&&(i=a.dehydrated,i!==null))return By(e,n,o,s,i,a,r);if(l){l=s.fallback,o=n.mode,a=e.child,i=a.sibling;var c={mode:"hidden",children:s.children};return!(o&1)&&n.child!==a?(s=n.child,s.childLanes=0,s.pendingProps=c,n.deletions=null):(s=Ur(a,c),s.subtreeFlags=a.subtreeFlags&14680064),i!==null?l=Ur(i,l):(l=Ls(l,o,r,null),l.flags|=2),l.return=n,s.return=n,s.sibling=l,n.child=s,s=l,l=n.child,o=e.child.memoizedState,o=o===null?Gu(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~r,n.memoizedState=Uu,s}return l=e.child,e=l.sibling,s=Ur(l,{mode:"visible",children:s.children}),!(n.mode&1)&&(s.lanes=r),s.return=n,s.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=s,n.memoizedState=null,s}function ap(e,n){return n=Ld({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ei(e,n,r,s){return s!==null&&Gh(s),Ea(n,e.child,null,r),e=ap(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function By(e,n,r,s,a,l,o){if(r)return n.flags&256?(n.flags&=-257,s=zc(Error(V(422))),ei(e,n,o,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=s.fallback,a=n.mode,s=Ld({mode:"visible",children:s.children},a,0,null),l=Ls(l,a,o,null),l.flags|=2,s.return=n,l.return=n,s.sibling=l,n.child=s,n.mode&1&&Ea(n,e.child,null,o),n.child.memoizedState=Gu(o),n.memoizedState=Uu,l);if(!(n.mode&1))return ei(e,n,o,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var i=s.dgst;return s=i,l=Error(V(419)),s=zc(l,s,void 0),ei(e,n,o,s)}if(i=(o&e.childLanes)!==0,nt||i){if(s=kn,s!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|o)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,fr(e,a),Bt(s,e,a,-1))}return up(),s=zc(Error(V(421))),ei(e,n,o,s)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=Xy.bind(null,e),a._reactRetry=n,null):(e=l.treeContext,pt=Dr(a.nextSibling),ft=n,Xe=!0,Pt=null,e!==null&&(yt[wt++]=or,yt[wt++]=ir,yt[wt++]=$s,or=e.id,ir=e.overflow,$s=n),n=ap(n,s.children),n.flags|=4096,n)}function j2(e,n,r){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Fu(e.return,n,r)}function Wc(e,n,r,s,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:a}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=s,l.tail=r,l.tailMode=a)}function b3(e,n,r){var s=n.pendingProps,a=s.revealOrder,l=s.tail;if(Wn(e,n,s.children,r),s=en.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&j2(e,r,n);else if(e.tag===19)j2(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Ue(en,s),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(r=n.child,a=null;r!==null;)e=r.alternate,e!==null&&Xi(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=n.child,n.child=null):(a=r.sibling,r.sibling=null),Wc(n,!1,a,r,l);break;case"backwards":for(r=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Xi(e)===null){n.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Wc(n,!0,r,null,l);break;case"together":Wc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function yi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function mr(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),Es|=n.lanes,!(r&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(V(153));if(n.child!==null){for(e=n.child,r=Ur(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Ur(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function Dy(e,n,r){switch(n.tag){case 3:v3(n),Ia();break;case 5:Vg(n);break;case 1:rt(n.type)&&Vi(n);break;case 4:Qh(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,a=n.memoizedProps.value;Ue(qi,s._currentValue),s._currentValue=a;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(Ue(en,en.current&1),n.flags|=128,null):r&n.child.childLanes?x3(e,n,r):(Ue(en,en.current&1),e=mr(e,n,r),e!==null?e.sibling:null);Ue(en,en.current&1);break;case 19:if(s=(r&n.childLanes)!==0,e.flags&128){if(s)return b3(e,n,r);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ue(en,en.current),s)break;return null;case 22:case 23:return n.lanes=0,m3(e,n,r)}return mr(e,n,r)}var y3,Vu,w3,j3;y3=function(e,n){for(var r=n.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Vu=function(){};w3=function(e,n,r,s){var a=e.memoizedProps;if(a!==s){e=n.stateNode,Cs(qt.current);var l=null;switch(r){case"input":a=fu(e,a),s=fu(e,s),l=[];break;case"select":a=tn({},a,{value:void 0}),s=tn({},s,{value:void 0}),l=[];break;case"textarea":a=vu(e,a),s=vu(e,s),l=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ui)}bu(r,s);var o;r=null;for(h in a)if(!s.hasOwnProperty(h)&&a.hasOwnProperty(h)&&a[h]!=null)if(h==="style"){var i=a[h];for(o in i)i.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Hl.hasOwnProperty(h)?l||(l=[]):(l=l||[]).push(h,null));for(h in s){var c=s[h];if(i=a!=null?a[h]:void 0,s.hasOwnProperty(h)&&c!==i&&(c!=null||i!=null))if(h==="style")if(i){for(o in i)!i.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&i[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(l||(l=[]),l.push(h,r)),r=c;else h==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(l=l||[]).push(h,c)):h==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(h,""+c):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Hl.hasOwnProperty(h)?(c!=null&&h==="onScroll"&&qe("scroll",e),l||i===c||(l=[])):(l=l||[]).push(h,c))}r&&(l=l||[]).push("style",r);var h=l;(n.updateQueue=h)&&(n.flags|=4)}};j3=function(e,n,r,s){r!==s&&(n.flags|=4)};function fl(e,n){if(!Xe)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function On(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(n)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=r,n}function zy(e,n,r){var s=n.pendingProps;switch(Uh(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return On(n),null;case 1:return rt(n.type)&&Gi(),On(n),null;case 3:return s=n.stateNode,Ma(),Qe(tt),Qe(Bn),Jh(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Xo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Pt!==null&&(eh(Pt),Pt=null))),Vu(e,n),On(n),null;case 5:Xh(n);var a=Cs(no.current);if(r=n.type,e!==null&&n.stateNode!=null)w3(e,n,r,s,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(V(166));return On(n),null}if(e=Cs(qt.current),Xo(n)){s=n.stateNode,r=n.type;var l=n.memoizedProps;switch(s[Yt]=n,s[Jl]=l,e=(n.mode&1)!==0,r){case"dialog":qe("cancel",s),qe("close",s);break;case"iframe":case"object":case"embed":qe("load",s);break;case"video":case"audio":for(a=0;a<Cl.length;a++)qe(Cl[a],s);break;case"source":qe("error",s);break;case"img":case"image":case"link":qe("error",s),qe("load",s);break;case"details":qe("toggle",s);break;case"input":I1(s,l),qe("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!l.multiple},qe("invalid",s);break;case"textarea":M1(s,l),qe("invalid",s)}bu(r,l),a=null;for(var o in l)if(l.hasOwnProperty(o)){var i=l[o];o==="children"?typeof i=="string"?s.textContent!==i&&(l.suppressHydrationWarning!==!0&&Qo(s.textContent,i,e),a=["children",i]):typeof i=="number"&&s.textContent!==""+i&&(l.suppressHydrationWarning!==!0&&Qo(s.textContent,i,e),a=["children",""+i]):Hl.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&qe("scroll",s)}switch(r){case"input":Ho(s),E1(s,l,!0);break;case"textarea":Ho(s),A1(s);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(s.onclick=Ui)}s=a,n.updateQueue=s,s!==null&&(n.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qm(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=o.createElement(r,{is:s.is}):(e=o.createElement(r),r==="select"&&(o=e,s.multiple?o.multiple=!0:s.size&&(o.size=s.size))):e=o.createElementNS(e,r),e[Yt]=n,e[Jl]=s,y3(e,n,!1,!1),n.stateNode=e;e:{switch(o=yu(r,s),r){case"dialog":qe("cancel",e),qe("close",e),a=s;break;case"iframe":case"object":case"embed":qe("load",e),a=s;break;case"video":case"audio":for(a=0;a<Cl.length;a++)qe(Cl[a],e);a=s;break;case"source":qe("error",e),a=s;break;case"img":case"image":case"link":qe("error",e),qe("load",e),a=s;break;case"details":qe("toggle",e),a=s;break;case"input":I1(e,s),a=fu(e,s),qe("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=tn({},s,{value:void 0}),qe("invalid",e);break;case"textarea":M1(e,s),a=vu(e,s),qe("invalid",e);break;default:a=s}bu(r,a),i=a;for(l in i)if(i.hasOwnProperty(l)){var c=i[l];l==="style"?Xm(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Km(e,c)):l==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Ul(e,c):typeof c=="number"&&Ul(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Hl.hasOwnProperty(l)?c!=null&&l==="onScroll"&&qe("scroll",e):c!=null&&_h(e,l,c,o))}switch(r){case"input":Ho(e),E1(e,s,!1);break;case"textarea":Ho(e),A1(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Gr(s.value));break;case"select":e.multiple=!!s.multiple,l=s.value,l!=null?wa(e,!!s.multiple,l,!1):s.defaultValue!=null&&wa(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ui)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return On(n),null;case 6:if(e&&n.stateNode!=null)j3(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(V(166));if(r=Cs(no.current),Cs(qt.current),Xo(n)){if(s=n.stateNode,r=n.memoizedProps,s[Yt]=n,(l=s.nodeValue!==r)&&(e=ft,e!==null))switch(e.tag){case 3:Qo(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qo(s.nodeValue,r,(e.mode&1)!==0)}l&&(n.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[Yt]=n,n.stateNode=s}return On(n),null;case 13:if(Qe(en),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Xe&&pt!==null&&n.mode&1&&!(n.flags&128))Bg(),Ia(),n.flags|=98560,l=!1;else if(l=Xo(n),s!==null&&s.dehydrated!==null){if(e===null){if(!l)throw Error(V(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(V(317));l[Yt]=n}else Ia(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;On(n),l=!1}else Pt!==null&&(eh(Pt),Pt=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=r,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,n.mode&1&&(e===null||en.current&1?bn===0&&(bn=3):up())),n.updateQueue!==null&&(n.flags|=4),On(n),null);case 4:return Ma(),Vu(e,n),e===null&&Ql(n.stateNode.containerInfo),On(n),null;case 10:return Zh(n.type._context),On(n),null;case 17:return rt(n.type)&&Gi(),On(n),null;case 19:if(Qe(en),l=n.memoizedState,l===null)return On(n),null;if(s=(n.flags&128)!==0,o=l.rendering,o===null)if(s)fl(l,!1);else{if(bn!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Xi(e),o!==null){for(n.flags|=128,fl(l,!1),s=o.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=r,r=n.child;r!==null;)l=r,e=s,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ue(en,en.current&1|2),n.child}e=e.sibling}l.tail!==null&&ln()>Pa&&(n.flags|=128,s=!0,fl(l,!1),n.lanes=4194304)}else{if(!s)if(e=Xi(o),e!==null){if(n.flags|=128,s=!0,r=e.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),fl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Xe)return On(n),null}else 2*ln()-l.renderingStartTime>Pa&&r!==1073741824&&(n.flags|=128,s=!0,fl(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(r=l.last,r!==null?r.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=ln(),n.sibling=null,r=en.current,Ue(en,s?r&1|2:r&1),n):(On(n),null);case 22:case 23:return cp(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&n.mode&1?it&1073741824&&(On(n),n.subtreeFlags&6&&(n.flags|=8192)):On(n),null;case 24:return null;case 25:return null}throw Error(V(156,n.tag))}function Wy(e,n){switch(Uh(n),n.tag){case 1:return rt(n.type)&&Gi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ma(),Qe(tt),Qe(Bn),Jh(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Xh(n),null;case 13:if(Qe(en),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(V(340));Ia()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Qe(en),null;case 4:return Ma(),null;case 10:return Zh(n.type._context),null;case 22:case 23:return cp(),null;case 24:return null;default:return null}}var ni=!1,Fn=!1,Hy=typeof WeakSet=="function"?WeakSet:Set,ee=null;function ga(e,n){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){an(e,n,s)}else r.current=null}function Yu(e,n,r){try{r()}catch(s){an(e,n,s)}}var C2=!1;function Uy(e,n){if($u=zi,e=Tg(),Wh(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var a=s.anchorOffset,l=s.focusNode;s=s.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var o=0,i=-1,c=-1,h=0,m=0,x=e,w=null;n:for(;;){for(var $;x!==r||a!==0&&x.nodeType!==3||(i=o+a),x!==l||s!==0&&x.nodeType!==3||(c=o+s),x.nodeType===3&&(o+=x.nodeValue.length),($=x.firstChild)!==null;)w=x,x=$;for(;;){if(x===e)break n;if(w===r&&++h===a&&(i=o),w===l&&++m===s&&(c=o),($=x.nextSibling)!==null)break;x=w,w=x.parentNode}x=$}r=i===-1||c===-1?null:{start:i,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Iu={focusedElem:e,selectionRange:r},zi=!1,ee=n;ee!==null;)if(n=ee,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ee=e;else for(;ee!==null;){n=ee;try{var _=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var C=_.memoizedProps,E=_.memoizedState,b=n.stateNode,f=b.getSnapshotBeforeUpdate(n.elementType===n.type?C:Et(n.type,C),E);b.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(g){an(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,ee=e;break}ee=n.return}return _=C2,C2=!1,_}function Rl(e,n,r){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&Yu(n,r,l)}a=a.next}while(a!==s)}}function Td(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==n)}}function Zu(e){var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof n=="function"?n(e):n.current=e}}function C3(e){var n=e.alternate;n!==null&&(e.alternate=null,C3(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Yt],delete n[Jl],delete n[Au],delete n[Ty],delete n[Ny])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function k3(e){return e.tag===5||e.tag===3||e.tag===4}function k2(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||k3(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qu(e,n,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Ui));else if(s!==4&&(e=e.child,e!==null))for(qu(e,n,r),e=e.sibling;e!==null;)qu(e,n,r),e=e.sibling}function Ku(e,n,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ku(e,n,r),e=e.sibling;e!==null;)Ku(e,n,r),e=e.sibling}var Nn=null,At=!1;function Tr(e,n,r){for(r=r.child;r!==null;)S3(e,n,r),r=r.sibling}function S3(e,n,r){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(xd,r)}catch{}switch(r.tag){case 5:Fn||ga(r,n);case 6:var s=Nn,a=At;Nn=null,Tr(e,n,r),Nn=s,At=a,Nn!==null&&(At?(e=Nn,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Nn.removeChild(r.stateNode));break;case 18:Nn!==null&&(At?(e=Nn,r=r.stateNode,e.nodeType===8?Pc(e.parentNode,r):e.nodeType===1&&Pc(e,r),Zl(e)):Pc(Nn,r.stateNode));break;case 4:s=Nn,a=At,Nn=r.stateNode.containerInfo,At=!0,Tr(e,n,r),Nn=s,At=a;break;case 0:case 11:case 14:case 15:if(!Fn&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var l=a,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Yu(r,n,o),a=a.next}while(a!==s)}Tr(e,n,r);break;case 1:if(!Fn&&(ga(r,n),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(i){an(r,n,i)}Tr(e,n,r);break;case 21:Tr(e,n,r);break;case 22:r.mode&1?(Fn=(s=Fn)||r.memoizedState!==null,Tr(e,n,r),Fn=s):Tr(e,n,r);break;default:Tr(e,n,r)}}function S2(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Hy),n.forEach(function(s){var a=Jy.bind(null,e,s);r.has(s)||(r.add(s),s.then(a,a))})}}function It(e,n){var r=n.deletions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];try{var l=e,o=n,i=o;e:for(;i!==null;){switch(i.tag){case 5:Nn=i.stateNode,At=!1;break e;case 3:Nn=i.stateNode.containerInfo,At=!0;break e;case 4:Nn=i.stateNode.containerInfo,At=!0;break e}i=i.return}if(Nn===null)throw Error(V(160));S3(l,o,a),Nn=null,At=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(h){an(a,n,h)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)T3(n,e),n=n.sibling}function T3(e,n){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(n,e),zt(e),s&4){try{Rl(3,e,e.return),Td(3,e)}catch(C){an(e,e.return,C)}try{Rl(5,e,e.return)}catch(C){an(e,e.return,C)}}break;case 1:It(n,e),zt(e),s&512&&r!==null&&ga(r,r.return);break;case 5:if(It(n,e),zt(e),s&512&&r!==null&&ga(r,r.return),e.flags&32){var a=e.stateNode;try{Ul(a,"")}catch(C){an(e,e.return,C)}}if(s&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,o=r!==null?r.memoizedProps:l,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&l.type==="radio"&&l.name!=null&&Ym(a,l),yu(i,o);var h=yu(i,l);for(o=0;o<c.length;o+=2){var m=c[o],x=c[o+1];m==="style"?Xm(a,x):m==="dangerouslySetInnerHTML"?Km(a,x):m==="children"?Ul(a,x):_h(a,m,x,h)}switch(i){case"input":mu(a,l);break;case"textarea":Zm(a,l);break;case"select":var w=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var $=l.value;$!=null?wa(a,!!l.multiple,$,!1):w!==!!l.multiple&&(l.defaultValue!=null?wa(a,!!l.multiple,l.defaultValue,!0):wa(a,!!l.multiple,l.multiple?[]:"",!1))}a[Jl]=l}catch(C){an(e,e.return,C)}}break;case 6:if(It(n,e),zt(e),s&4){if(e.stateNode===null)throw Error(V(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(C){an(e,e.return,C)}}break;case 3:if(It(n,e),zt(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Zl(n.containerInfo)}catch(C){an(e,e.return,C)}break;case 4:It(n,e),zt(e);break;case 13:It(n,e),zt(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(ip=ln())),s&4&&S2(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(Fn=(h=Fn)||m,It(n,e),Fn=h):It(n,e),zt(e),s&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!m&&e.mode&1)for(ee=e,m=e.child;m!==null;){for(x=ee=m;ee!==null;){switch(w=ee,$=w.child,w.tag){case 0:case 11:case 14:case 15:Rl(4,w,w.return);break;case 1:ga(w,w.return);var _=w.stateNode;if(typeof _.componentWillUnmount=="function"){s=w,r=w.return;try{n=s,_.props=n.memoizedProps,_.state=n.memoizedState,_.componentWillUnmount()}catch(C){an(s,r,C)}}break;case 5:ga(w,w.return);break;case 22:if(w.memoizedState!==null){N2(x);continue}}$!==null?($.return=w,ee=$):N2(x)}m=m.sibling}e:for(m=null,x=e;;){if(x.tag===5){if(m===null){m=x;try{a=x.stateNode,h?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(i=x.stateNode,c=x.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=Qm("display",o))}catch(C){an(e,e.return,C)}}}else if(x.tag===6){if(m===null)try{x.stateNode.nodeValue=h?"":x.memoizedProps}catch(C){an(e,e.return,C)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;m===x&&(m=null),x=x.return}m===x&&(m=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:It(n,e),zt(e),s&4&&S2(e);break;case 21:break;default:It(n,e),zt(e)}}function zt(e){var n=e.flags;if(n&2){try{e:{for(var r=e.return;r!==null;){if(k3(r)){var s=r;break e}r=r.return}throw Error(V(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(Ul(a,""),s.flags&=-33);var l=k2(e);Ku(e,l,a);break;case 3:case 4:var o=s.stateNode.containerInfo,i=k2(e);qu(e,i,o);break;default:throw Error(V(161))}}catch(c){an(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Gy(e,n,r){ee=e,N3(e)}function N3(e,n,r){for(var s=(e.mode&1)!==0;ee!==null;){var a=ee,l=a.child;if(a.tag===22&&s){var o=a.memoizedState!==null||ni;if(!o){var i=a.alternate,c=i!==null&&i.memoizedState!==null||Fn;i=ni;var h=Fn;if(ni=o,(Fn=c)&&!h)for(ee=a;ee!==null;)o=ee,c=o.child,o.tag===22&&o.memoizedState!==null?L2(a):c!==null?(c.return=o,ee=c):L2(a);for(;l!==null;)ee=l,N3(l),l=l.sibling;ee=a,ni=i,Fn=h}T2(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,ee=l):T2(e)}}function T2(e){for(;ee!==null;){var n=ee;if(n.flags&8772){var r=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Fn||Td(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!Fn)if(r===null)s.componentDidMount();else{var a=n.elementType===n.type?r.memoizedProps:Et(n.type,r.memoizedProps);s.componentDidUpdate(a,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&d2(n,l,s);break;case 3:var o=n.updateQueue;if(o!==null){if(r=null,n.child!==null)switch(n.child.tag){case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}d2(n,o,r)}break;case 5:var i=n.stateNode;if(r===null&&n.flags&4){r=i;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var h=n.alternate;if(h!==null){var m=h.memoizedState;if(m!==null){var x=m.dehydrated;x!==null&&Zl(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}Fn||n.flags&512&&Zu(n)}catch(w){an(n,n.return,w)}}if(n===e){ee=null;break}if(r=n.sibling,r!==null){r.return=n.return,ee=r;break}ee=n.return}}function N2(e){for(;ee!==null;){var n=ee;if(n===e){ee=null;break}var r=n.sibling;if(r!==null){r.return=n.return,ee=r;break}ee=n.return}}function L2(e){for(;ee!==null;){var n=ee;try{switch(n.tag){case 0:case 11:case 15:var r=n.return;try{Td(4,n)}catch(c){an(n,r,c)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var a=n.return;try{s.componentDidMount()}catch(c){an(n,a,c)}}var l=n.return;try{Zu(n)}catch(c){an(n,l,c)}break;case 5:var o=n.return;try{Zu(n)}catch(c){an(n,o,c)}}}catch(c){an(n,n.return,c)}if(n===e){ee=null;break}var i=n.sibling;if(i!==null){i.return=n.return,ee=i;break}ee=n.return}}var Vy=Math.ceil,nd=xr.ReactCurrentDispatcher,lp=xr.ReactCurrentOwner,Ct=xr.ReactCurrentBatchConfig,$e=0,kn=null,un=null,In=0,it=0,va=Kr(0),bn=0,ao=null,Es=0,Nd=0,op=0,Ol=null,et=null,ip=0,Pa=1/0,sr=null,td=!1,Qu=null,Wr=null,ti=!1,Ar=null,rd=0,Fl=0,Xu=null,wi=-1,ji=0;function Un(){return $e&6?ln():wi!==-1?wi:wi=ln()}function Hr(e){return e.mode&1?$e&2&&In!==0?In&-In:_y.transition!==null?(ji===0&&(ji=cg()),ji):(e=Oe,e!==0||(e=window.event,e=e===void 0?16:vg(e.type)),e):1}function Bt(e,n,r,s){if(50<Fl)throw Fl=0,Xu=null,Error(V(185));mo(e,r,s),(!($e&2)||e!==kn)&&(e===kn&&(!($e&2)&&(Nd|=r),bn===4&&Er(e,In)),st(e,s),r===1&&$e===0&&!(n.mode&1)&&(Pa=ln()+500,Cd&&Qr()))}function st(e,n){var r=e.callbackNode;_8(e,n);var s=Di(e,e===kn?In:0);if(s===0)r!==null&&O1(r),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(r!=null&&O1(r),n===1)e.tag===0?Ly(_2.bind(null,e)):Rg(_2.bind(null,e)),ky(function(){!($e&6)&&Qr()}),r=null;else{switch(ug(s)){case 1:r=Ah;break;case 4:r=ig;break;case 16:r=Bi;break;case 536870912:r=dg;break;default:r=Bi}r=P3(r,L3.bind(null,e))}e.callbackPriority=n,e.callbackNode=r}}function L3(e,n){if(wi=-1,ji=0,$e&6)throw Error(V(327));var r=e.callbackNode;if(Ta()&&e.callbackNode!==r)return null;var s=Di(e,e===kn?In:0);if(s===0)return null;if(s&30||s&e.expiredLanes||n)n=sd(e,s);else{n=s;var a=$e;$e|=2;var l=$3();(kn!==e||In!==n)&&(sr=null,Pa=ln()+500,Ns(e,n));do try{qy();break}catch(i){_3(e,i)}while(!0);Yh(),nd.current=l,$e=a,un!==null?n=0:(kn=null,In=0,n=bn)}if(n!==0){if(n===2&&(a=Su(e),a!==0&&(s=a,n=Ju(e,a))),n===1)throw r=ao,Ns(e,0),Er(e,s),st(e,ln()),r;if(n===6)Er(e,s);else{if(a=e.current.alternate,!(s&30)&&!Yy(a)&&(n=sd(e,s),n===2&&(l=Su(e),l!==0&&(s=l,n=Ju(e,l))),n===1))throw r=ao,Ns(e,0),Er(e,s),st(e,ln()),r;switch(e.finishedWork=a,e.finishedLanes=s,n){case 0:case 1:throw Error(V(345));case 2:vs(e,et,sr);break;case 3:if(Er(e,s),(s&130023424)===s&&(n=ip+500-ln(),10<n)){if(Di(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){Un(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Mu(vs.bind(null,e,et,sr),n);break}vs(e,et,sr);break;case 4:if(Er(e,s),(s&4194240)===s)break;for(n=e.eventTimes,a=-1;0<s;){var o=31-Ft(s);l=1<<o,o=n[o],o>a&&(a=o),s&=~l}if(s=a,s=ln()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Vy(s/1960))-s,10<s){e.timeoutHandle=Mu(vs.bind(null,e,et,sr),s);break}vs(e,et,sr);break;case 5:vs(e,et,sr);break;default:throw Error(V(329))}}}return st(e,ln()),e.callbackNode===r?L3.bind(null,e):null}function Ju(e,n){var r=Ol;return e.current.memoizedState.isDehydrated&&(Ns(e,n).flags|=256),e=sd(e,n),e!==2&&(n=et,et=r,n!==null&&eh(n)),e}function eh(e){et===null?et=e:et.push.apply(et,e)}function Yy(e){for(var n=e;;){if(n.flags&16384){var r=n.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var a=r[s],l=a.getSnapshot;a=a.value;try{if(!Dt(l(),a))return!1}catch{return!1}}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Er(e,n){for(n&=~op,n&=~Nd,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var r=31-Ft(n),s=1<<r;e[r]=-1,n&=~s}}function _2(e){if($e&6)throw Error(V(327));Ta();var n=Di(e,0);if(!(n&1))return st(e,ln()),null;var r=sd(e,n);if(e.tag!==0&&r===2){var s=Su(e);s!==0&&(n=s,r=Ju(e,s))}if(r===1)throw r=ao,Ns(e,0),Er(e,n),st(e,ln()),r;if(r===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,vs(e,et,sr),st(e,ln()),null}function dp(e,n){var r=$e;$e|=1;try{return e(n)}finally{$e=r,$e===0&&(Pa=ln()+500,Cd&&Qr())}}function Ms(e){Ar!==null&&Ar.tag===0&&!($e&6)&&Ta();var n=$e;$e|=1;var r=Ct.transition,s=Oe;try{if(Ct.transition=null,Oe=1,e)return e()}finally{Oe=s,Ct.transition=r,$e=n,!($e&6)&&Qr()}}function cp(){it=va.current,Qe(va)}function Ns(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Cy(r)),un!==null)for(r=un.return;r!==null;){var s=r;switch(Uh(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Gi();break;case 3:Ma(),Qe(tt),Qe(Bn),Jh();break;case 5:Xh(s);break;case 4:Ma();break;case 13:Qe(en);break;case 19:Qe(en);break;case 10:Zh(s.type._context);break;case 22:case 23:cp()}r=r.return}if(kn=e,un=e=Ur(e.current,null),In=it=n,bn=0,ao=null,op=Nd=Es=0,et=Ol=null,js!==null){for(n=0;n<js.length;n++)if(r=js[n],s=r.interleaved,s!==null){r.interleaved=null;var a=s.next,l=r.pending;if(l!==null){var o=l.next;l.next=a,s.next=o}r.pending=s}js=null}return e}function _3(e,n){do{var r=un;try{if(Yh(),xi.current=ed,Ji){for(var s=nn.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}Ji=!1}if(Is=0,Cn=xn=nn=null,Pl=!1,to=0,lp.current=null,r===null||r.return===null){bn=1,ao=n,un=null;break}e:{var l=e,o=r.return,i=r,c=n;if(n=In,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=c,m=i,x=m.tag;if(!(m.mode&1)&&(x===0||x===11||x===15)){var w=m.alternate;w?(m.updateQueue=w.updateQueue,m.memoizedState=w.memoizedState,m.lanes=w.lanes):(m.updateQueue=null,m.memoizedState=null)}var $=g2(o);if($!==null){$.flags&=-257,v2($,o,i,l,n),$.mode&1&&m2(l,h,n),n=$,c=h;var _=n.updateQueue;if(_===null){var C=new Set;C.add(c),n.updateQueue=C}else _.add(c);break e}else{if(!(n&1)){m2(l,h,n),up();break e}c=Error(V(426))}}else if(Xe&&i.mode&1){var E=g2(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),v2(E,o,i,l,n),Gh(Aa(c,i));break e}}l=c=Aa(c,i),bn!==4&&(bn=2),Ol===null?Ol=[l]:Ol.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var b=h3(l,c,n);i2(l,b);break e;case 1:i=c;var f=l.type,v=l.stateNode;if(!(l.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Wr===null||!Wr.has(v)))){l.flags|=65536,n&=-n,l.lanes|=n;var g=p3(l,i,n);i2(l,g);break e}}l=l.return}while(l!==null)}E3(r)}catch(N){n=N,un===r&&r!==null&&(un=r=r.return);continue}break}while(!0)}function $3(){var e=nd.current;return nd.current=ed,e===null?ed:e}function up(){(bn===0||bn===3||bn===2)&&(bn=4),kn===null||!(Es&268435455)&&!(Nd&268435455)||Er(kn,In)}function sd(e,n){var r=$e;$e|=2;var s=$3();(kn!==e||In!==n)&&(sr=null,Ns(e,n));do try{Zy();break}catch(a){_3(e,a)}while(!0);if(Yh(),$e=r,nd.current=s,un!==null)throw Error(V(261));return kn=null,In=0,bn}function Zy(){for(;un!==null;)I3(un)}function qy(){for(;un!==null&&!y8();)I3(un)}function I3(e){var n=A3(e.alternate,e,it);e.memoizedProps=e.pendingProps,n===null?E3(e):un=n,lp.current=null}function E3(e){var n=e;do{var r=n.alternate;if(e=n.return,n.flags&32768){if(r=Wy(r,n),r!==null){r.flags&=32767,un=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{bn=6,un=null;return}}else if(r=zy(r,n,it),r!==null){un=r;return}if(n=n.sibling,n!==null){un=n;return}un=n=e}while(n!==null);bn===0&&(bn=5)}function vs(e,n,r){var s=Oe,a=Ct.transition;try{Ct.transition=null,Oe=1,Ky(e,n,r,s)}finally{Ct.transition=a,Oe=s}return null}function Ky(e,n,r,s){do Ta();while(Ar!==null);if($e&6)throw Error(V(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if($8(e,l),e===kn&&(un=kn=null,In=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ti||(ti=!0,P3(Bi,function(){return Ta(),null})),l=(r.flags&15990)!==0,r.subtreeFlags&15990||l){l=Ct.transition,Ct.transition=null;var o=Oe;Oe=1;var i=$e;$e|=4,lp.current=null,Uy(e,r),T3(r,e),gy(Iu),zi=!!$u,Iu=$u=null,e.current=r,Gy(r),w8(),$e=i,Oe=o,Ct.transition=l}else e.current=r;if(ti&&(ti=!1,Ar=e,rd=a),l=e.pendingLanes,l===0&&(Wr=null),k8(r.stateNode),st(e,ln()),n!==null)for(s=e.onRecoverableError,r=0;r<n.length;r++)a=n[r],s(a.value,{componentStack:a.stack,digest:a.digest});if(td)throw td=!1,e=Qu,Qu=null,e;return rd&1&&e.tag!==0&&Ta(),l=e.pendingLanes,l&1?e===Xu?Fl++:(Fl=0,Xu=e):Fl=0,Qr(),null}function Ta(){if(Ar!==null){var e=ug(rd),n=Ct.transition,r=Oe;try{if(Ct.transition=null,Oe=16>e?16:e,Ar===null)var s=!1;else{if(e=Ar,Ar=null,rd=0,$e&6)throw Error(V(331));var a=$e;for($e|=4,ee=e.current;ee!==null;){var l=ee,o=l.child;if(ee.flags&16){var i=l.deletions;if(i!==null){for(var c=0;c<i.length;c++){var h=i[c];for(ee=h;ee!==null;){var m=ee;switch(m.tag){case 0:case 11:case 15:Rl(8,m,l)}var x=m.child;if(x!==null)x.return=m,ee=x;else for(;ee!==null;){m=ee;var w=m.sibling,$=m.return;if(C3(m),m===h){ee=null;break}if(w!==null){w.return=$,ee=w;break}ee=$}}}var _=l.alternate;if(_!==null){var C=_.child;if(C!==null){_.child=null;do{var E=C.sibling;C.sibling=null,C=E}while(C!==null)}}ee=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,ee=o;else e:for(;ee!==null;){if(l=ee,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Rl(9,l,l.return)}var b=l.sibling;if(b!==null){b.return=l.return,ee=b;break e}ee=l.return}}var f=e.current;for(ee=f;ee!==null;){o=ee;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,ee=v;else e:for(o=f;ee!==null;){if(i=ee,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Td(9,i)}}catch(N){an(i,i.return,N)}if(i===o){ee=null;break e}var g=i.sibling;if(g!==null){g.return=i.return,ee=g;break e}ee=i.return}}if($e=a,Qr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(xd,e)}catch{}s=!0}return s}finally{Oe=r,Ct.transition=n}}return!1}function $2(e,n,r){n=Aa(r,n),n=h3(e,n,1),e=zr(e,n,1),n=Un(),e!==null&&(mo(e,1,n),st(e,n))}function an(e,n,r){if(e.tag===3)$2(e,e,r);else for(;n!==null;){if(n.tag===3){$2(n,e,r);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Wr===null||!Wr.has(s))){e=Aa(r,e),e=p3(n,e,1),n=zr(n,e,1),e=Un(),n!==null&&(mo(n,1,e),st(n,e));break}}n=n.return}}function Qy(e,n,r){var s=e.pingCache;s!==null&&s.delete(n),n=Un(),e.pingedLanes|=e.suspendedLanes&r,kn===e&&(In&r)===r&&(bn===4||bn===3&&(In&130023424)===In&&500>ln()-ip?Ns(e,0):op|=r),st(e,n)}function M3(e,n){n===0&&(e.mode&1?(n=Vo,Vo<<=1,!(Vo&130023424)&&(Vo=4194304)):n=1);var r=Un();e=fr(e,n),e!==null&&(mo(e,n,r),st(e,r))}function Xy(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),M3(e,r)}function Jy(e,n){var r=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(V(314))}s!==null&&s.delete(n),M3(e,r)}var A3;A3=function(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps||tt.current)nt=!0;else{if(!(e.lanes&r)&&!(n.flags&128))return nt=!1,Dy(e,n,r);nt=!!(e.flags&131072)}else nt=!1,Xe&&n.flags&1048576&&Og(n,Zi,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;yi(e,n),e=n.pendingProps;var a=$a(n,Bn.current);Sa(n,r),a=np(null,n,s,e,a,r);var l=tp();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,rt(s)?(l=!0,Vi(n)):l=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Kh(n),a.updater=kd,n.stateNode=a,a._reactInternals=n,Du(n,s,e,r),n=Hu(null,n,s,!0,l,r)):(n.tag=0,Xe&&l&&Hh(n),Wn(null,n,a,r),n=n.child),n;case 16:s=n.elementType;e:{switch(yi(e,n),e=n.pendingProps,a=s._init,s=a(s._payload),n.type=s,a=n.tag=n7(s),e=Et(s,e),a){case 0:n=Wu(null,n,s,e,r);break e;case 1:n=y2(null,n,s,e,r);break e;case 11:n=x2(null,n,s,e,r);break e;case 14:n=b2(null,n,s,Et(s.type,e),r);break e}throw Error(V(306,s,""))}return n;case 0:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:Et(s,a),Wu(e,n,s,a,r);case 1:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:Et(s,a),y2(e,n,s,a,r);case 3:e:{if(v3(n),e===null)throw Error(V(387));s=n.pendingProps,l=n.memoizedState,a=l.element,zg(e,n),Qi(n,s,null,r);var o=n.memoizedState;if(s=o.element,l.isDehydrated)if(l={element:s,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){a=Aa(Error(V(423)),n),n=w2(e,n,s,r,a);break e}else if(s!==a){a=Aa(Error(V(424)),n),n=w2(e,n,s,r,a);break e}else for(pt=Dr(n.stateNode.containerInfo.firstChild),ft=n,Xe=!0,Pt=null,r=Gg(n,null,s,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ia(),s===a){n=mr(e,n,r);break e}Wn(e,n,s,r)}n=n.child}return n;case 5:return Vg(n),e===null&&Ou(n),s=n.type,a=n.pendingProps,l=e!==null?e.memoizedProps:null,o=a.children,Eu(s,a)?o=null:l!==null&&Eu(s,l)&&(n.flags|=32),g3(e,n),Wn(e,n,o,r),n.child;case 6:return e===null&&Ou(n),null;case 13:return x3(e,n,r);case 4:return Qh(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Ea(n,null,s,r):Wn(e,n,s,r),n.child;case 11:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:Et(s,a),x2(e,n,s,a,r);case 7:return Wn(e,n,n.pendingProps,r),n.child;case 8:return Wn(e,n,n.pendingProps.children,r),n.child;case 12:return Wn(e,n,n.pendingProps.children,r),n.child;case 10:e:{if(s=n.type._context,a=n.pendingProps,l=n.memoizedProps,o=a.value,Ue(qi,s._currentValue),s._currentValue=o,l!==null)if(Dt(l.value,o)){if(l.children===a.children&&!tt.current){n=mr(e,n,r);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var i=l.dependencies;if(i!==null){o=l.child;for(var c=i.firstContext;c!==null;){if(c.context===s){if(l.tag===1){c=cr(-1,r&-r),c.tag=2;var h=l.updateQueue;if(h!==null){h=h.shared;var m=h.pending;m===null?c.next=c:(c.next=m.next,m.next=c),h.pending=c}}l.lanes|=r,c=l.alternate,c!==null&&(c.lanes|=r),Fu(l.return,r,n),i.lanes|=r;break}c=c.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(V(341));o.lanes|=r,i=o.alternate,i!==null&&(i.lanes|=r),Fu(o,r,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Wn(e,n,a.children,r),n=n.child}return n;case 9:return a=n.type,s=n.pendingProps.children,Sa(n,r),a=kt(a),s=s(a),n.flags|=1,Wn(e,n,s,r),n.child;case 14:return s=n.type,a=Et(s,n.pendingProps),a=Et(s.type,a),b2(e,n,s,a,r);case 15:return f3(e,n,n.type,n.pendingProps,r);case 17:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:Et(s,a),yi(e,n),n.tag=1,rt(s)?(e=!0,Vi(n)):e=!1,Sa(n,r),Hg(n,s,a),Du(n,s,a,r),Hu(null,n,s,!0,e,r);case 19:return b3(e,n,r);case 22:return m3(e,n,r)}throw Error(V(156,n.tag))};function P3(e,n){return og(e,n)}function e7(e,n,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,n,r,s){return new e7(e,n,r,s)}function hp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function n7(e){if(typeof e=="function")return hp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ih)return 11;if(e===Eh)return 14}return 2}function Ur(e,n){var r=e.alternate;return r===null?(r=jt(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ci(e,n,r,s,a,l){var o=2;if(s=e,typeof e=="function")hp(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case oa:return Ls(r.children,a,l,n);case $h:o=8,a|=8;break;case cu:return e=jt(12,r,n,a|2),e.elementType=cu,e.lanes=l,e;case uu:return e=jt(13,r,n,a),e.elementType=uu,e.lanes=l,e;case hu:return e=jt(19,r,n,a),e.elementType=hu,e.lanes=l,e;case Um:return Ld(r,a,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wm:o=10;break e;case Hm:o=9;break e;case Ih:o=11;break e;case Eh:o=14;break e;case _r:o=16,s=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return n=jt(o,r,n,a),n.elementType=e,n.type=s,n.lanes=l,n}function Ls(e,n,r,s){return e=jt(7,e,s,n),e.lanes=r,e}function Ld(e,n,r,s){return e=jt(22,e,s,n),e.elementType=Um,e.lanes=r,e.stateNode={isHidden:!1},e}function Hc(e,n,r){return e=jt(6,e,null,n),e.lanes=r,e}function Uc(e,n,r){return n=jt(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function t7(e,n,r,s,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kc(0),this.expirationTimes=kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kc(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function pp(e,n,r,s,a,l,o,i,c){return e=new t7(e,n,r,i,c),n===1?(n=1,l===!0&&(n|=8)):n=0,l=jt(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kh(l),e}function r7(e,n,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:la,key:s==null?null:""+s,children:e,containerInfo:n,implementation:r}}function R3(e){if(!e)return Vr;e=e._reactInternals;e:{if(Rs(e)!==e||e.tag!==1)throw Error(V(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(rt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(V(171))}if(e.tag===1){var r=e.type;if(rt(r))return Pg(e,r,n)}return n}function O3(e,n,r,s,a,l,o,i,c){return e=pp(r,s,!0,e,a,l,o,i,c),e.context=R3(null),r=e.current,s=Un(),a=Hr(r),l=cr(s,a),l.callback=n??null,zr(r,l,a),e.current.lanes=a,mo(e,a,s),st(e,s),e}function _d(e,n,r,s){var a=n.current,l=Un(),o=Hr(a);return r=R3(r),n.context===null?n.context=r:n.pendingContext=r,n=cr(l,o),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=zr(a,n,o),e!==null&&(Bt(e,a,o,l),vi(e,a,o)),o}function ad(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function I2(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function fp(e,n){I2(e,n),(e=e.alternate)&&I2(e,n)}function s7(){return null}var F3=typeof reportError=="function"?reportError:function(e){console.error(e)};function mp(e){this._internalRoot=e}$d.prototype.render=mp.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(V(409));_d(e,n,null,null)};$d.prototype.unmount=mp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ms(function(){_d(null,e,null,null)}),n[pr]=null}};function $d(e){this._internalRoot=e}$d.prototype.unstable_scheduleHydration=function(e){if(e){var n=fg();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Ir.length&&n!==0&&n<Ir[r].priority;r++);Ir.splice(r,0,e),r===0&&gg(e)}};function gp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Id(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function E2(){}function a7(e,n,r,s,a){if(a){if(typeof s=="function"){var l=s;s=function(){var h=ad(o);l.call(h)}}var o=O3(n,s,e,0,null,!1,!1,"",E2);return e._reactRootContainer=o,e[pr]=o.current,Ql(e.nodeType===8?e.parentNode:e),Ms(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var i=s;s=function(){var h=ad(c);i.call(h)}}var c=pp(e,0,!1,null,null,!1,!1,"",E2);return e._reactRootContainer=c,e[pr]=c.current,Ql(e.nodeType===8?e.parentNode:e),Ms(function(){_d(n,c,r,s)}),c}function Ed(e,n,r,s,a){var l=r._reactRootContainer;if(l){var o=l;if(typeof a=="function"){var i=a;a=function(){var c=ad(o);i.call(c)}}_d(n,o,e,a)}else o=a7(r,n,e,a,s);return ad(o)}hg=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var r=jl(n.pendingLanes);r!==0&&(Ph(n,r|1),st(n,ln()),!($e&6)&&(Pa=ln()+500,Qr()))}break;case 13:Ms(function(){var s=fr(e,1);if(s!==null){var a=Un();Bt(s,e,1,a)}}),fp(e,1)}};Rh=function(e){if(e.tag===13){var n=fr(e,134217728);if(n!==null){var r=Un();Bt(n,e,134217728,r)}fp(e,134217728)}};pg=function(e){if(e.tag===13){var n=Hr(e),r=fr(e,n);if(r!==null){var s=Un();Bt(r,e,n,s)}fp(e,n)}};fg=function(){return Oe};mg=function(e,n){var r=Oe;try{return Oe=e,n()}finally{Oe=r}};ju=function(e,n,r){switch(n){case"input":if(mu(e,r),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<r.length;n++){var s=r[n];if(s!==e&&s.form===e.form){var a=jd(s);if(!a)throw Error(V(90));Vm(s),mu(s,a)}}}break;case"textarea":Zm(e,r);break;case"select":n=r.value,n!=null&&wa(e,!!r.multiple,n,!1)}};ng=dp;tg=Ms;var l7={usingClientEntryPoint:!1,Events:[vo,ua,jd,Jm,eg,dp]},ml={findFiberByHostInstance:ws,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},o7={bundleType:ml.bundleType,version:ml.version,rendererPackageName:ml.rendererPackageName,rendererConfig:ml.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ag(e),e===null?null:e.stateNode},findFiberByHostInstance:ml.findFiberByHostInstance||s7,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ri.isDisabled&&ri.supportsFiber)try{xd=ri.inject(o7),Zt=ri}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l7;gt.createPortal=function(e,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gp(n))throw Error(V(200));return r7(e,n,null,r)};gt.createRoot=function(e,n){if(!gp(e))throw Error(V(299));var r=!1,s="",a=F3;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=pp(e,1,!1,null,null,r,!1,s,a),e[pr]=n.current,Ql(e.nodeType===8?e.parentNode:e),new mp(n)};gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=ag(n),e=e===null?null:e.stateNode,e};gt.flushSync=function(e){return Ms(e)};gt.hydrate=function(e,n,r){if(!Id(n))throw Error(V(200));return Ed(null,e,n,!0,r)};gt.hydrateRoot=function(e,n,r){if(!gp(e))throw Error(V(405));var s=r!=null&&r.hydratedSources||null,a=!1,l="",o=F3;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),n=O3(n,null,e,1,r??null,a,!1,l,o),e[pr]=n.current,Ql(e),s)for(e=0;e<s.length;e++)r=s[e],a=r._getVersion,a=a(r._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[r,a]:n.mutableSourceEagerHydrationData.push(r,a);return new $d(n)};gt.render=function(e,n,r){if(!Id(n))throw Error(V(200));return Ed(null,e,n,!1,r)};gt.unmountComponentAtNode=function(e){if(!Id(e))throw Error(V(40));return e._reactRootContainer?(Ms(function(){Ed(null,null,e,!1,function(){e._reactRootContainer=null,e[pr]=null})}),!0):!1};gt.unstable_batchedUpdates=dp;gt.unstable_renderSubtreeIntoContainer=function(e,n,r,s){if(!Id(r))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return Ed(e,n,r,!1,s)};gt.version="18.2.0-next-9e3b772b8-20220608";function B3(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B3)}catch(e){console.error(e)}}B3(),Om.exports=gt;var D3=Om.exports,M2=D3;iu.createRoot=M2.createRoot,iu.hydrateRoot=M2.hydrateRoot;function i7(e,n){if(e==null)return{};var r={},s=Object.keys(e),a,l;for(l=0;l<s.length;l++)a=s[l],!(n.indexOf(a)>=0)&&(r[a]=e[a]);return r}function d7(e,n){if(e==null)return{};var r=i7(e,n),s,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)s=l[a],!(n.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}function nh(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,s=new Array(n);r<n;r++)s[r]=e[r];return s}function c7(e){if(Array.isArray(e))return nh(e)}function u7(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function h7(e,n){if(e){if(typeof e=="string")return nh(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return nh(e,n)}}function p7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f7(e){return c7(e)||u7(e)||h7(e)||p7()}function lo(e){"@babel/helpers - typeof";return lo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},lo(e)}function m7(e,n){if(lo(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var s=r.call(e,n||"default");if(lo(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function g7(e){var n=m7(e,"string");return lo(n)==="symbol"?n:String(n)}function z3(e,n,r){return n=g7(n),n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function th(){return th=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},th.apply(this,arguments)}function A2(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,s)}return r}function xa(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?A2(Object(r),!0).forEach(function(s){z3(e,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A2(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})}return e}function v7(e){var n=e.length;if(n===0||n===1)return e;if(n===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(n===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(n>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var Gc={};function x7(e){if(e.length===0||e.length===1)return e;var n=e.join(".");return Gc[n]||(Gc[n]=v7(e)),Gc[n]}function b7(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,s=e.filter(function(l){return l!=="token"}),a=x7(s);return a.reduce(function(l,o){return xa(xa({},l),r[o])},n)}function P2(e){return e.join(" ")}function y7(e,n){var r=0;return function(s){return r+=1,s.map(function(a,l){return W3({node:a,stylesheet:e,useInlineStyles:n,key:"code-segment-".concat(r,"-").concat(l)})})}}function W3(e){var n=e.node,r=e.stylesheet,s=e.style,a=s===void 0?{}:s,l=e.useInlineStyles,o=e.key,i=n.properties,c=n.type,h=n.tagName,m=n.value;if(c==="text")return m;if(h){var x=y7(r,l),w;if(!l)w=xa(xa({},i),{},{className:P2(i.className)});else{var $=Object.keys(r).reduce(function(b,f){return f.split(".").forEach(function(v){b.includes(v)||b.push(v)}),b},[]),_=i.className&&i.className.includes("token")?["token"]:[],C=i.className&&_.concat(i.className.filter(function(b){return!$.includes(b)}));w=xa(xa({},i),{},{className:P2(C)||void 0,style:b7(i.className,Object.assign({},i.style,a),r)})}var E=x(n.children);return cn.createElement(h,th({key:o},w),E)}}const w7=function(e,n){var r=e.listLanguages();return r.indexOf(n)!==-1};var j7=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function R2(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,s)}return r}function Vt(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?R2(Object(r),!0).forEach(function(s){z3(e,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R2(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})}return e}var C7=/\n/g;function k7(e){return e.match(C7)}function S7(e){var n=e.lines,r=e.startingLineNumber,s=e.style;return n.map(function(a,l){var o=l+r;return cn.createElement("span",{key:"line-".concat(l),className:"react-syntax-highlighter-line-number",style:typeof s=="function"?s(o):s},"".concat(o,`
`))})}function T7(e){var n=e.codeString,r=e.codeStyle,s=e.containerStyle,a=s===void 0?{float:"left",paddingRight:"10px"}:s,l=e.numberStyle,o=l===void 0?{}:l,i=e.startingLineNumber;return cn.createElement("code",{style:Object.assign({},r,a)},S7({lines:n.replace(/\n$/,"").split(`
`),style:o,startingLineNumber:i}))}function N7(e){return"".concat(e.toString().length,".25em")}function H3(e,n){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:n},children:[{type:"text",value:e}]}}function U3(e,n,r){var s={display:"inline-block",minWidth:N7(r),paddingRight:"1em",textAlign:"right",userSelect:"none"},a=typeof e=="function"?e(n):e,l=Vt(Vt({},s),a);return l}function ki(e){var n=e.children,r=e.lineNumber,s=e.lineNumberStyle,a=e.largestLineNumber,l=e.showInlineLineNumbers,o=e.lineProps,i=o===void 0?{}:o,c=e.className,h=c===void 0?[]:c,m=e.showLineNumbers,x=e.wrapLongLines,w=typeof i=="function"?i(r):i;if(w.className=h,r&&l){var $=U3(s,r,a);n.unshift(H3(r,$))}return x&m&&(w.style=Vt(Vt({},w.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:w,children:n}}function G3(e){for(var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],s=0;s<e.length;s++){var a=e[s];if(a.type==="text")r.push(ki({children:[a],className:f7(new Set(n))}));else if(a.children){var l=n.concat(a.properties.className);G3(a.children,l).forEach(function(o){return r.push(o)})}}return r}function L7(e,n,r,s,a,l,o,i,c){var h,m=G3(e.value),x=[],w=-1,$=0;function _(N,k){var A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return ki({children:N,lineNumber:k,lineNumberStyle:i,largestLineNumber:o,showInlineLineNumbers:a,lineProps:r,className:A,showLineNumbers:s,wrapLongLines:c})}function C(N,k){if(s&&k&&a){var A=U3(i,k,o);N.unshift(H3(k,A))}return N}function E(N,k){var A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return n||A.length>0?_(N,k,A):C(N,k)}for(var b=function(){var k=m[$],A=k.children[0].value,R=k7(A);if(R){var D=A.split(`
`);D.forEach(function(Y,he){var ie=s&&x.length+l,De={type:"text",value:"".concat(Y,`
`)};if(he===0){var sn=m.slice(w+1,$).concat(ki({children:[De],className:k.properties.className})),Ge=E(sn,ie);x.push(Ge)}else if(he===D.length-1){var Fe=m[$+1]&&m[$+1].children&&m[$+1].children[0],Ve={type:"text",value:"".concat(Y)};if(Fe){var z=ki({children:[Ve],className:k.properties.className});m.splice($+1,0,z)}else{var Z=[Ve],X=E(Z,ie,k.properties.className);x.push(X)}}else{var ae=[De],pe=E(ae,ie,k.properties.className);x.push(pe)}}),w=$}$++};$<m.length;)b();if(w!==m.length-1){var f=m.slice(w+1,m.length);if(f&&f.length){var v=s&&x.length+l,g=E(f,v);x.push(g)}}return n?x:(h=[]).concat.apply(h,x)}function _7(e){var n=e.rows,r=e.stylesheet,s=e.useInlineStyles;return n.map(function(a,l){return W3({node:a,stylesheet:r,useInlineStyles:s,key:"code-segement".concat(l)})})}function V3(e){return e&&typeof e.highlightAuto<"u"}function $7(e){var n=e.astGenerator,r=e.language,s=e.code,a=e.defaultCodeValue;if(V3(n)){var l=w7(n,r);return r==="text"?{value:a,language:"text"}:l?n.highlight(r,s):n.highlightAuto(s)}try{return r&&r!=="text"?{value:n.highlight(s,r)}:{value:a}}catch{return{value:a}}}function I7(e,n){return function(s){var a=s.language,l=s.children,o=s.style,i=o===void 0?n:o,c=s.customStyle,h=c===void 0?{}:c,m=s.codeTagProps,x=m===void 0?{className:a?"language-".concat(a):void 0,style:Vt(Vt({},i['code[class*="language-"]']),i['code[class*="language-'.concat(a,'"]')])}:m,w=s.useInlineStyles,$=w===void 0?!0:w,_=s.showLineNumbers,C=_===void 0?!1:_,E=s.showInlineLineNumbers,b=E===void 0?!0:E,f=s.startingLineNumber,v=f===void 0?1:f,g=s.lineNumberContainerStyle,N=s.lineNumberStyle,k=N===void 0?{}:N,A=s.wrapLines,R=s.wrapLongLines,D=R===void 0?!1:R,Y=s.lineProps,he=Y===void 0?{}:Y,ie=s.renderer,De=s.PreTag,sn=De===void 0?"pre":De,Ge=s.CodeTag,Fe=Ge===void 0?"code":Ge,Ve=s.code,z=Ve===void 0?(Array.isArray(l)?l[0]:l)||"":Ve,Z=s.astGenerator,X=d7(s,j7);Z=Z||e;var ae=C?cn.createElement(T7,{containerStyle:g,codeStyle:x.style||{},numberStyle:k,startingLineNumber:v,codeString:z}):null,pe=i.hljs||i['pre[class*="language-"]']||{backgroundColor:"#fff"},Dn=V3(Z)?"hljs":"prismjs",fe=$?Object.assign({},X,{style:Object.assign({},pe,h)}):Object.assign({},X,{className:X.className?"".concat(Dn," ").concat(X.className):Dn,style:Object.assign({},h)});if(D?x.style=Vt(Vt({},x.style),{},{whiteSpace:"pre-wrap"}):x.style=Vt(Vt({},x.style),{},{whiteSpace:"pre"}),!Z)return cn.createElement(sn,fe,ae,cn.createElement(Fe,x,z));(A===void 0&&ie||D)&&(A=!0),ie=ie||_7;var Je=[{type:"text",value:z}],Ye=$7({astGenerator:Z,language:a,code:z,defaultCodeValue:Je});Ye.language===null&&(Ye.value=Je);var pn=Ye.value.length+v,Pn=L7(Ye,A,he,C,b,v,pn,k,D);return cn.createElement(sn,fe,cn.createElement(Fe,x,!b&&ae,ie({rows:Pn,stylesheet:i,useInlineStyles:$})))}}var E7=A7,M7=Object.prototype.hasOwnProperty;function A7(){for(var e={},n=0;n<arguments.length;n++){var r=arguments[n];for(var s in r)M7.call(r,s)&&(e[s]=r[s])}return e}var Y3=Z3,vp=Z3.prototype;vp.space=null;vp.normal={};vp.property={};function Z3(e,n,r){this.property=e,this.normal=n,r&&(this.space=r)}var O2=E7,P7=Y3,R7=O7;function O7(e){for(var n=e.length,r=[],s=[],a=-1,l,o;++a<n;)l=e[a],r.push(l.property),s.push(l.normal),o=l.space;return new P7(O2.apply(null,r),O2.apply(null,s),o)}var xp=F7;function F7(e){return e.toLowerCase()}var q3=K3,Tt=K3.prototype;Tt.space=null;Tt.attribute=null;Tt.property=null;Tt.boolean=!1;Tt.booleanish=!1;Tt.overloadedBoolean=!1;Tt.number=!1;Tt.commaSeparated=!1;Tt.spaceSeparated=!1;Tt.commaOrSpaceSeparated=!1;Tt.mustUseProperty=!1;Tt.defined=!1;function K3(e,n){this.property=e,this.attribute=n}var Qt={},B7=0;Qt.boolean=Os();Qt.booleanish=Os();Qt.overloadedBoolean=Os();Qt.number=Os();Qt.spaceSeparated=Os();Qt.commaSeparated=Os();Qt.commaOrSpaceSeparated=Os();function Os(){return Math.pow(2,++B7)}var Q3=q3,F2=Qt,X3=bp;bp.prototype=new Q3;bp.prototype.defined=!0;var J3=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],D7=J3.length;function bp(e,n,r,s){var a=-1,l;for(B2(this,"space",s),Q3.call(this,e,n);++a<D7;)l=J3[a],B2(this,l,(r&F2[l])===F2[l])}function B2(e,n,r){r&&(e[n]=r)}var D2=xp,z7=Y3,W7=X3,bo=H7;function H7(e){var n=e.space,r=e.mustUseProperty||[],s=e.attributes||{},a=e.properties,l=e.transform,o={},i={},c,h;for(c in a)h=new W7(c,l(s,c),a[c],n),r.indexOf(c)!==-1&&(h.mustUseProperty=!0),o[c]=h,i[D2(c)]=c,i[D2(h.attribute)]=c;return new z7(o,i,n)}var U7=bo,G7=U7({space:"xlink",transform:V7,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function V7(e,n){return"xlink:"+n.slice(5).toLowerCase()}var Y7=bo,Z7=Y7({space:"xml",transform:q7,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function q7(e,n){return"xml:"+n.slice(3).toLowerCase()}var K7=Q7;function Q7(e,n){return n in e?e[n]:n}var X7=K7,e5=J7;function J7(e,n){return X7(e,n.toLowerCase())}var e9=bo,n9=e5,t9=e9({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:n9,properties:{xmlns:null,xmlnsXLink:null}}),yp=Qt,r9=bo,Qn=yp.booleanish,bt=yp.number,ps=yp.spaceSeparated,s9=r9({transform:a9,properties:{ariaActiveDescendant:null,ariaAtomic:Qn,ariaAutoComplete:null,ariaBusy:Qn,ariaChecked:Qn,ariaColCount:bt,ariaColIndex:bt,ariaColSpan:bt,ariaControls:ps,ariaCurrent:null,ariaDescribedBy:ps,ariaDetails:null,ariaDisabled:Qn,ariaDropEffect:ps,ariaErrorMessage:null,ariaExpanded:Qn,ariaFlowTo:ps,ariaGrabbed:Qn,ariaHasPopup:null,ariaHidden:Qn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ps,ariaLevel:bt,ariaLive:null,ariaModal:Qn,ariaMultiLine:Qn,ariaMultiSelectable:Qn,ariaOrientation:null,ariaOwns:ps,ariaPlaceholder:null,ariaPosInSet:bt,ariaPressed:Qn,ariaReadOnly:Qn,ariaRelevant:null,ariaRequired:Qn,ariaRoleDescription:ps,ariaRowCount:bt,ariaRowIndex:bt,ariaRowSpan:bt,ariaSelected:Qn,ariaSetSize:bt,ariaSort:null,ariaValueMax:bt,ariaValueMin:bt,ariaValueNow:bt,ariaValueText:null,role:null}});function a9(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}var Wa=Qt,l9=bo,o9=e5,ye=Wa.boolean,i9=Wa.overloadedBoolean,gl=Wa.booleanish,Ze=Wa.number,zn=Wa.spaceSeparated,si=Wa.commaSeparated,d9=l9({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:o9,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:si,acceptCharset:zn,accessKey:zn,action:null,allow:null,allowFullScreen:ye,allowPaymentRequest:ye,allowUserMedia:ye,alt:null,as:null,async:ye,autoCapitalize:null,autoComplete:zn,autoFocus:ye,autoPlay:ye,capture:ye,charSet:null,checked:ye,cite:null,className:zn,cols:Ze,colSpan:null,content:null,contentEditable:gl,controls:ye,controlsList:zn,coords:Ze|si,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ye,defer:ye,dir:null,dirName:null,disabled:ye,download:i9,draggable:gl,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ye,formTarget:null,headers:zn,height:Ze,hidden:ye,high:Ze,href:null,hrefLang:null,htmlFor:zn,httpEquiv:zn,id:null,imageSizes:null,imageSrcSet:si,inputMode:null,integrity:null,is:null,isMap:ye,itemId:null,itemProp:zn,itemRef:zn,itemScope:ye,itemType:zn,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ye,low:Ze,manifest:null,max:null,maxLength:Ze,media:null,method:null,min:null,minLength:Ze,multiple:ye,muted:ye,name:null,nonce:null,noModule:ye,noValidate:ye,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ye,optimum:Ze,pattern:null,ping:zn,placeholder:null,playsInline:ye,poster:null,preload:null,readOnly:ye,referrerPolicy:null,rel:zn,required:ye,reversed:ye,rows:Ze,rowSpan:Ze,sandbox:zn,scope:null,scoped:ye,seamless:ye,selected:ye,shape:null,size:Ze,sizes:null,slot:null,span:Ze,spellCheck:gl,src:null,srcDoc:null,srcLang:null,srcSet:si,start:Ze,step:null,style:null,tabIndex:Ze,target:null,title:null,translate:null,type:null,typeMustMatch:ye,useMap:null,value:gl,width:Ze,wrap:null,align:null,aLink:null,archive:zn,axis:null,background:null,bgColor:null,border:Ze,borderColor:null,bottomMargin:Ze,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ye,declare:ye,event:null,face:null,frame:null,frameBorder:null,hSpace:Ze,leftMargin:Ze,link:null,longDesc:null,lowSrc:null,marginHeight:Ze,marginWidth:Ze,noResize:ye,noHref:ye,noShade:ye,noWrap:ye,object:null,profile:null,prompt:null,rev:null,rightMargin:Ze,rules:null,scheme:null,scrolling:gl,standby:null,summary:null,text:null,topMargin:Ze,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Ze,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ye,disableRemotePlayback:ye,prefix:null,property:null,results:Ze,security:null,unselectable:null}}),c9=R7,u9=G7,h9=Z7,p9=t9,f9=s9,m9=d9,g9=c9([h9,u9,p9,f9,m9]),v9=xp,x9=X3,b9=q3,wp="data",y9=C9,w9=/^data[-\w.:]+$/i,n5=/-[a-z]/g,j9=/[A-Z]/g;function C9(e,n){var r=v9(n),s=n,a=b9;return r in e.normal?e.property[e.normal[r]]:(r.length>4&&r.slice(0,4)===wp&&w9.test(n)&&(n.charAt(4)==="-"?s=k9(n):n=S9(n),a=x9),new a(s,n))}function k9(e){var n=e.slice(5).replace(n5,N9);return wp+n.charAt(0).toUpperCase()+n.slice(1)}function S9(e){var n=e.slice(4);return n5.test(n)?e:(n=n.replace(j9,T9),n.charAt(0)!=="-"&&(n="-"+n),wp+n)}function T9(e){return"-"+e.toLowerCase()}function N9(e){return e.charAt(1).toUpperCase()}var L9=_9,z2=/[#.]/g;function _9(e,n){for(var r=e||"",s=n||"div",a={},l=0,o,i,c;l<r.length;)z2.lastIndex=l,c=z2.exec(r),o=r.slice(l,c?c.index:r.length),o&&(i?i==="#"?a.id=o:a.className?a.className.push(o):a.className=[o]:s=o,l+=o.length),c&&(i=c[0],l++);return{type:"element",tagName:s,properties:a,children:[]}}var jp={};jp.parse=E9;jp.stringify=M9;var W2="",$9=" ",I9=/[ \t\n\r\f]+/g;function E9(e){var n=String(e||W2).trim();return n===W2?[]:n.split(I9)}function M9(e){return e.join($9).trim()}var Cp={};Cp.parse=A9;Cp.stringify=P9;var rh=",",H2=" ",kl="";function A9(e){for(var n=[],r=String(e||kl),s=r.indexOf(rh),a=0,l=!1,o;!l;)s===-1&&(s=r.length,l=!0),o=r.slice(a,s).trim(),(o||!l)&&n.push(o),a=s+1,s=r.indexOf(rh,a);return n}function P9(e,n){var r=n||{},s=r.padLeft===!1?kl:H2,a=r.padRight?H2:kl;return e[e.length-1]===kl&&(e=e.concat(kl)),e.join(a+rh+s).trim()}var R9=y9,U2=xp,O9=L9,G2=jp.parse,V2=Cp.parse,F9=D9,B9={}.hasOwnProperty;function D9(e,n,r){var s=r?G9(r):null;return a;function a(o,i){var c=O9(o,n),h=Array.prototype.slice.call(arguments,2),m=c.tagName.toLowerCase(),x;if(c.tagName=s&&B9.call(s,m)?s[m]:m,i&&z9(i,c)&&(h.unshift(i),i=null),i)for(x in i)l(c.properties,x,i[x]);return t5(c.children,h),c.tagName==="template"&&(c.content={type:"root",children:c.children},c.children=[]),c}function l(o,i,c){var h,m,x;c==null||c!==c||(h=R9(e,i),m=h.property,x=c,typeof x=="string"&&(h.spaceSeparated?x=G2(x):h.commaSeparated?x=V2(x):h.commaOrSpaceSeparated&&(x=G2(V2(x).join(" ")))),m==="style"&&typeof c!="string"&&(x=U9(x)),m==="className"&&o.className&&(x=o.className.concat(x)),o[m]=H9(h,m,x))}}function z9(e,n){return typeof e=="string"||"length"in e||W9(n.tagName,e)}function W9(e,n){var r=n.type;return e==="input"||!r||typeof r!="string"?!1:typeof n.children=="object"&&"length"in n.children?!0:(r=r.toLowerCase(),e==="button"?r!=="menu"&&r!=="submit"&&r!=="reset"&&r!=="button":"value"in n)}function t5(e,n){var r,s;if(typeof n=="string"||typeof n=="number"){e.push({type:"text",value:String(n)});return}if(typeof n=="object"&&"length"in n){for(r=-1,s=n.length;++r<s;)t5(e,n[r]);return}if(typeof n!="object"||!("type"in n))throw new Error("Expected node, nodes, or string, got `"+n+"`");e.push(n)}function H9(e,n,r){var s,a,l;if(typeof r!="object"||!("length"in r))return Y2(e,n,r);for(a=r.length,s=-1,l=[];++s<a;)l[s]=Y2(e,n,r[s]);return l}function Y2(e,n,r){var s=r;return e.number||e.positiveNumber?!isNaN(s)&&s!==""&&(s=Number(s)):(e.boolean||e.overloadedBoolean)&&typeof s=="string"&&(s===""||U2(r)===U2(n))&&(s=!0),s}function U9(e){var n=[],r;for(r in e)n.push([r,e[r]].join(": "));return n.join("; ")}function G9(e){for(var n=e.length,r=-1,s={},a;++r<n;)a=e[r],s[a.toLowerCase()]=a;return s}var V9=g9,Y9=F9,r5=Y9(V9,"div");r5.displayName="html";var Z9=r5,q9=Z9;const K9="Æ",Q9="&",X9="Á",J9="Â",ew="À",nw="Å",tw="Ã",rw="Ä",sw="©",aw="Ç",lw="Ð",ow="É",iw="Ê",dw="È",cw="Ë",uw=">",hw="Í",pw="Î",fw="Ì",mw="Ï",gw="<",vw="Ñ",xw="Ó",bw="Ô",yw="Ò",ww="Ø",jw="Õ",Cw="Ö",kw='"',Sw="®",Tw="Þ",Nw="Ú",Lw="Û",_w="Ù",$w="Ü",Iw="Ý",Ew="á",Mw="â",Aw="´",Pw="æ",Rw="à",Ow="&",Fw="å",Bw="ã",Dw="ä",zw="¦",Ww="ç",Hw="¸",Uw="¢",Gw="©",Vw="¤",Yw="°",Zw="÷",qw="é",Kw="ê",Qw="è",Xw="ð",Jw="ë",ej="½",nj="¼",tj="¾",rj=">",sj="í",aj="î",lj="¡",oj="ì",ij="¿",dj="ï",cj="«",uj="<",hj="¯",pj="µ",fj="·",mj=" ",gj="¬",vj="ñ",xj="ó",bj="ô",yj="ò",wj="ª",jj="º",Cj="ø",kj="õ",Sj="ö",Tj="¶",Nj="±",Lj="£",_j='"',$j="»",Ij="®",Ej="§",Mj="­",Aj="¹",Pj="²",Rj="³",Oj="ß",Fj="þ",Bj="×",Dj="ú",zj="û",Wj="ù",Hj="¨",Uj="ü",Gj="ý",Vj="¥",Yj="ÿ",Zj={AElig:K9,AMP:Q9,Aacute:X9,Acirc:J9,Agrave:ew,Aring:nw,Atilde:tw,Auml:rw,COPY:sw,Ccedil:aw,ETH:lw,Eacute:ow,Ecirc:iw,Egrave:dw,Euml:cw,GT:uw,Iacute:hw,Icirc:pw,Igrave:fw,Iuml:mw,LT:gw,Ntilde:vw,Oacute:xw,Ocirc:bw,Ograve:yw,Oslash:ww,Otilde:jw,Ouml:Cw,QUOT:kw,REG:Sw,THORN:Tw,Uacute:Nw,Ucirc:Lw,Ugrave:_w,Uuml:$w,Yacute:Iw,aacute:Ew,acirc:Mw,acute:Aw,aelig:Pw,agrave:Rw,amp:Ow,aring:Fw,atilde:Bw,auml:Dw,brvbar:zw,ccedil:Ww,cedil:Hw,cent:Uw,copy:Gw,curren:Vw,deg:Yw,divide:Zw,eacute:qw,ecirc:Kw,egrave:Qw,eth:Xw,euml:Jw,frac12:ej,frac14:nj,frac34:tj,gt:rj,iacute:sj,icirc:aj,iexcl:lj,igrave:oj,iquest:ij,iuml:dj,laquo:cj,lt:uj,macr:hj,micro:pj,middot:fj,nbsp:mj,not:gj,ntilde:vj,oacute:xj,ocirc:bj,ograve:yj,ordf:wj,ordm:jj,oslash:Cj,otilde:kj,ouml:Sj,para:Tj,plusmn:Nj,pound:Lj,quot:_j,raquo:$j,reg:Ij,sect:Ej,shy:Mj,sup1:Aj,sup2:Pj,sup3:Rj,szlig:Oj,thorn:Fj,times:Bj,uacute:Dj,ucirc:zj,ugrave:Wj,uml:Hj,uuml:Uj,yacute:Gj,yen:Vj,yuml:Yj},qj={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var s5=Kj;function Kj(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=48&&n<=57}var Qj=Xj;function Xj(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=97&&n<=102||n>=65&&n<=70||n>=48&&n<=57}var Jj=eC;function eC(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=97&&n<=122||n>=65&&n<=90}var nC=Jj,tC=s5,rC=sC;function sC(e){return nC(e)||tC(e)}var ai,aC=59,lC=oC;function oC(e){var n="&"+e+";",r;return ai=ai||document.createElement("i"),ai.innerHTML=n,r=ai.textContent,r.charCodeAt(r.length-1)===aC&&e!=="semi"||r===n?!1:r}var Z2=Zj,q2=qj,iC=s5,dC=Qj,a5=rC,cC=lC,uC=kC,hC={}.hasOwnProperty,na=String.fromCharCode,pC=Function.prototype,K2={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},fC=9,Q2=10,mC=12,gC=32,X2=38,vC=59,xC=60,bC=61,yC=35,wC=88,jC=120,CC=65533,sa="named",kp="hexadecimal",Sp="decimal",Tp={};Tp[kp]=16;Tp[Sp]=10;var Md={};Md[sa]=a5;Md[Sp]=iC;Md[kp]=dC;var l5=1,o5=2,i5=3,d5=4,c5=5,sh=6,u5=7,Xr={};Xr[l5]="Named character references must be terminated by a semicolon";Xr[o5]="Numeric character references must be terminated by a semicolon";Xr[i5]="Named character references cannot be empty";Xr[d5]="Numeric character references cannot be empty";Xr[c5]="Named character references must be known";Xr[sh]="Numeric character references cannot be disallowed";Xr[u5]="Numeric character references cannot be outside the permissible Unicode range";function kC(e,n){var r={},s,a;n||(n={});for(a in K2)s=n[a],r[a]=s??K2[a];return(r.position.indent||r.position.start)&&(r.indent=r.position.indent||[],r.position=r.position.start),SC(e,r)}function SC(e,n){var r=n.additional,s=n.nonTerminated,a=n.text,l=n.reference,o=n.warning,i=n.textContext,c=n.referenceContext,h=n.warningContext,m=n.position,x=n.indent||[],w=e.length,$=0,_=-1,C=m.column||1,E=m.line||1,b="",f=[],v,g,N,k,A,R,D,Y,he,ie,De,sn,Ge,Fe,Ve,z,Z,X,ae;for(typeof r=="string"&&(r=r.charCodeAt(0)),z=pe(),Y=o?Dn:pC,$--,w++;++$<w;)if(A===Q2&&(C=x[_]||1),A=e.charCodeAt($),A===X2){if(D=e.charCodeAt($+1),D===fC||D===Q2||D===mC||D===gC||D===X2||D===xC||D!==D||r&&D===r){b+=na(A),C++;continue}for(Ge=$+1,sn=Ge,ae=Ge,D===yC?(ae=++sn,D=e.charCodeAt(ae),D===wC||D===jC?(Fe=kp,ae=++sn):Fe=Sp):Fe=sa,v="",De="",k="",Ve=Md[Fe],ae--;++ae<w&&(D=e.charCodeAt(ae),!!Ve(D));)k+=na(D),Fe===sa&&hC.call(Z2,k)&&(v=k,De=Z2[k]);N=e.charCodeAt(ae)===vC,N&&(ae++,g=Fe===sa?cC(k):!1,g&&(v=k,De=g)),X=1+ae-Ge,!N&&!s||(k?Fe===sa?(N&&!De?Y(c5,1):(v!==k&&(ae=sn+v.length,X=1+ae-sn,N=!1),N||(he=v?l5:i5,n.attribute?(D=e.charCodeAt(ae),D===bC?(Y(he,X),De=null):a5(D)?De=null:Y(he,X)):Y(he,X))),R=De):(N||Y(o5,X),R=parseInt(k,Tp[Fe]),TC(R)?(Y(u5,X),R=na(CC)):R in q2?(Y(sh,X),R=q2[R]):(ie="",NC(R)&&Y(sh,X),R>65535&&(R-=65536,ie+=na(R>>>10|55296),R=56320|R&1023),R=ie+na(R))):Fe!==sa&&Y(d5,X)),R?(fe(),z=pe(),$=ae-1,C+=ae-Ge+1,f.push(R),Z=pe(),Z.offset++,l&&l.call(c,R,{start:z,end:Z},e.slice(Ge-1,ae)),z=Z):(k=e.slice(Ge-1,ae),b+=k,C+=k.length,$=ae-1)}else A===10&&(E++,_++,C=0),A===A?(b+=na(A),C++):fe();return f.join("");function pe(){return{line:E,column:C,offset:$+(m.offset||0)}}function Dn(Je,Ye){var pn=pe();pn.column+=Ye,pn.offset+=Ye,o.call(h,Xr[Je],pn,Je)}function fe(){b&&(f.push(b),a&&a.call(i,b,{start:z,end:pe()}),b="")}}function TC(e){return e>=55296&&e<=57343||e>1114111}function NC(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var h5={exports:{}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var r=function(s){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,l=0,o={},i={manual:s.Prism&&s.Prism.manual,disableWorkerMessageHandler:s.Prism&&s.Prism.disableWorkerMessageHandler,util:{encode:function f(v){return v instanceof c?new c(v.type,f(v.content),v.alias):Array.isArray(v)?v.map(f):v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(f){return Object.prototype.toString.call(f).slice(8,-1)},objId:function(f){return f.__id||Object.defineProperty(f,"__id",{value:++l}),f.__id},clone:function f(v,g){g=g||{};var N,k;switch(i.util.type(v)){case"Object":if(k=i.util.objId(v),g[k])return g[k];N={},g[k]=N;for(var A in v)v.hasOwnProperty(A)&&(N[A]=f(v[A],g));return N;case"Array":return k=i.util.objId(v),g[k]?g[k]:(N=[],g[k]=N,v.forEach(function(R,D){N[D]=f(R,g)}),N);default:return v}},getLanguage:function(f){for(;f;){var v=a.exec(f.className);if(v)return v[1].toLowerCase();f=f.parentElement}return"none"},setLanguage:function(f,v){f.className=f.className.replace(RegExp(a,"gi"),""),f.classList.add("language-"+v)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(N){var f=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(N.stack)||[])[1];if(f){var v=document.getElementsByTagName("script");for(var g in v)if(v[g].src==f)return v[g]}return null}},isActive:function(f,v,g){for(var N="no-"+v;f;){var k=f.classList;if(k.contains(v))return!0;if(k.contains(N))return!1;f=f.parentElement}return!!g}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(f,v){var g=i.util.clone(i.languages[f]);for(var N in v)g[N]=v[N];return g},insertBefore:function(f,v,g,N){N=N||i.languages;var k=N[f],A={};for(var R in k)if(k.hasOwnProperty(R)){if(R==v)for(var D in g)g.hasOwnProperty(D)&&(A[D]=g[D]);g.hasOwnProperty(R)||(A[R]=k[R])}var Y=N[f];return N[f]=A,i.languages.DFS(i.languages,function(he,ie){ie===Y&&he!=f&&(this[he]=A)}),A},DFS:function f(v,g,N,k){k=k||{};var A=i.util.objId;for(var R in v)if(v.hasOwnProperty(R)){g.call(v,R,v[R],N||R);var D=v[R],Y=i.util.type(D);Y==="Object"&&!k[A(D)]?(k[A(D)]=!0,f(D,g,null,k)):Y==="Array"&&!k[A(D)]&&(k[A(D)]=!0,f(D,g,R,k))}}},plugins:{},highlightAll:function(f,v){i.highlightAllUnder(document,f,v)},highlightAllUnder:function(f,v,g){var N={callback:g,container:f,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",N),N.elements=Array.prototype.slice.apply(N.container.querySelectorAll(N.selector)),i.hooks.run("before-all-elements-highlight",N);for(var k=0,A;A=N.elements[k++];)i.highlightElement(A,v===!0,N.callback)},highlightElement:function(f,v,g){var N=i.util.getLanguage(f),k=i.languages[N];i.util.setLanguage(f,N);var A=f.parentElement;A&&A.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(A,N);var R=f.textContent,D={element:f,language:N,grammar:k,code:R};function Y(ie){D.highlightedCode=ie,i.hooks.run("before-insert",D),D.element.innerHTML=D.highlightedCode,i.hooks.run("after-highlight",D),i.hooks.run("complete",D),g&&g.call(D.element)}if(i.hooks.run("before-sanity-check",D),A=D.element.parentElement,A&&A.nodeName.toLowerCase()==="pre"&&!A.hasAttribute("tabindex")&&A.setAttribute("tabindex","0"),!D.code){i.hooks.run("complete",D),g&&g.call(D.element);return}if(i.hooks.run("before-highlight",D),!D.grammar){Y(i.util.encode(D.code));return}if(v&&s.Worker){var he=new Worker(i.filename);he.onmessage=function(ie){Y(ie.data)},he.postMessage(JSON.stringify({language:D.language,code:D.code,immediateClose:!0}))}else Y(i.highlight(D.code,D.grammar,D.language))},highlight:function(f,v,g){var N={code:f,grammar:v,language:g};if(i.hooks.run("before-tokenize",N),!N.grammar)throw new Error('The language "'+N.language+'" has no grammar.');return N.tokens=i.tokenize(N.code,N.grammar),i.hooks.run("after-tokenize",N),c.stringify(i.util.encode(N.tokens),N.language)},tokenize:function(f,v){var g=v.rest;if(g){for(var N in g)v[N]=g[N];delete v.rest}var k=new x;return w(k,k.head,f),m(f,k,v,k.head,0),_(k)},hooks:{all:{},add:function(f,v){var g=i.hooks.all;g[f]=g[f]||[],g[f].push(v)},run:function(f,v){var g=i.hooks.all[f];if(!(!g||!g.length))for(var N=0,k;k=g[N++];)k(v)}},Token:c};s.Prism=i;function c(f,v,g,N){this.type=f,this.content=v,this.alias=g,this.length=(N||"").length|0}c.stringify=function f(v,g){if(typeof v=="string")return v;if(Array.isArray(v)){var N="";return v.forEach(function(Y){N+=f(Y,g)}),N}var k={type:v.type,content:f(v.content,g),tag:"span",classes:["token",v.type],attributes:{},language:g},A=v.alias;A&&(Array.isArray(A)?Array.prototype.push.apply(k.classes,A):k.classes.push(A)),i.hooks.run("wrap",k);var R="";for(var D in k.attributes)R+=" "+D+'="'+(k.attributes[D]||"").replace(/"/g,"&quot;")+'"';return"<"+k.tag+' class="'+k.classes.join(" ")+'"'+R+">"+k.content+"</"+k.tag+">"};function h(f,v,g,N){f.lastIndex=v;var k=f.exec(g);if(k&&N&&k[1]){var A=k[1].length;k.index+=A,k[0]=k[0].slice(A)}return k}function m(f,v,g,N,k,A){for(var R in g)if(!(!g.hasOwnProperty(R)||!g[R])){var D=g[R];D=Array.isArray(D)?D:[D];for(var Y=0;Y<D.length;++Y){if(A&&A.cause==R+","+Y)return;var he=D[Y],ie=he.inside,De=!!he.lookbehind,sn=!!he.greedy,Ge=he.alias;if(sn&&!he.pattern.global){var Fe=he.pattern.toString().match(/[imsuy]*$/)[0];he.pattern=RegExp(he.pattern.source,Fe+"g")}for(var Ve=he.pattern||he,z=N.next,Z=k;z!==v.tail&&!(A&&Z>=A.reach);Z+=z.value.length,z=z.next){var X=z.value;if(v.length>f.length)return;if(!(X instanceof c)){var ae=1,pe;if(sn){if(pe=h(Ve,Z,f,De),!pe||pe.index>=f.length)break;var Ye=pe.index,Dn=pe.index+pe[0].length,fe=Z;for(fe+=z.value.length;Ye>=fe;)z=z.next,fe+=z.value.length;if(fe-=z.value.length,Z=fe,z.value instanceof c)continue;for(var Je=z;Je!==v.tail&&(fe<Dn||typeof Je.value=="string");Je=Je.next)ae++,fe+=Je.value.length;ae--,X=f.slice(Z,fe),pe.index-=Z}else if(pe=h(Ve,0,X,De),!pe)continue;var Ye=pe.index,pn=pe[0],Pn=X.slice(0,Ye),ts=X.slice(Ye+pn.length),rs=Z+X.length;A&&rs>A.reach&&(A.reach=rs);var Xt=z.prev;Pn&&(Xt=w(v,Xt,Pn),Z+=Pn.length),$(v,Xt,ae);var Ya=new c(R,ie?i.tokenize(pn,ie):pn,Ge,pn);if(z=w(v,Xt,Ya),ts&&w(v,z,ts),ae>1){var ss={cause:R+","+Y,reach:rs};m(f,v,g,z.prev,Z,ss),A&&ss.reach>A.reach&&(A.reach=ss.reach)}}}}}}function x(){var f={value:null,prev:null,next:null},v={value:null,prev:f,next:null};f.next=v,this.head=f,this.tail=v,this.length=0}function w(f,v,g){var N=v.next,k={value:g,prev:v,next:N};return v.next=k,N.prev=k,f.length++,k}function $(f,v,g){for(var N=v.next,k=0;k<g&&N!==f.tail;k++)N=N.next;v.next=N,N.prev=v,f.length-=k}function _(f){for(var v=[],g=f.head.next;g!==f.tail;)v.push(g.value),g=g.next;return v}if(!s.document)return s.addEventListener&&(i.disableWorkerMessageHandler||s.addEventListener("message",function(f){var v=JSON.parse(f.data),g=v.language,N=v.code,k=v.immediateClose;s.postMessage(i.highlight(N,i.languages[g],g)),k&&s.close()},!1)),i;var C=i.util.currentScript();C&&(i.filename=C.src,C.hasAttribute("data-manual")&&(i.manual=!0));function E(){i.manual||i.highlightAll()}if(!i.manual){var b=document.readyState;b==="loading"||b==="interactive"&&C&&C.defer?document.addEventListener("DOMContentLoaded",E):window.requestAnimationFrame?window.requestAnimationFrame(E):window.setTimeout(E,16)}return i}(n);e.exports&&(e.exports=r),typeof Wl<"u"&&(Wl.Prism=r)})(h5);var LC=h5.exports,_C=Np;Np.displayName="markup";Np.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function Np(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(r,s){var a={};a["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[s]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};l["language-"+s]={pattern:/[\s\S]+/,inside:e.languages[s]};var o={};o[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:l},e.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(n,r){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:e.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var p5=Lp;Lp.displayName="css";Lp.aliases=[];function Lp(e){(function(n){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var s=n.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))})(e)}const $C=Kt(p5);var IC=_p;_p.displayName="clike";_p.aliases=[];function _p(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var EC=$p;$p.displayName="javascript";$p.aliases=["js"];function $p(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var Sl=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof Wl=="object"?Wl:{},MC=qC();Sl.Prism={manual:!0,disableWorkerMessageHandler:!0};var AC=q9,PC=uC,f5=LC,RC=_C,OC=p5,FC=IC,BC=EC;MC();var Ip={}.hasOwnProperty;function m5(){}m5.prototype=f5;var hn=new m5,DC=hn;hn.highlight=WC;hn.register=yo;hn.alias=zC;hn.registered=HC;hn.listLanguages=UC;yo(RC);yo(OC);yo(FC);yo(BC);hn.util.encode=YC;hn.Token.stringify=GC;function yo(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");hn.languages[e.displayName]===void 0&&e(hn)}function zC(e,n){var r=hn.languages,s=e,a,l,o,i;n&&(s={},s[e]=n);for(a in s)for(l=s[a],l=typeof l=="string"?[l]:l,o=l.length,i=-1;++i<o;)r[l[i]]=r[a]}function WC(e,n){var r=f5.highlight,s;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(hn.util.type(n)==="Object")s=n,n=null;else{if(typeof n!="string")throw new Error("Expected `string` for `name`, got `"+n+"`");if(Ip.call(hn.languages,n))s=hn.languages[n];else throw new Error("Unknown language: `"+n+"` is not registered")}return r.call(this,e,s,n)}function HC(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return Ip.call(hn.languages,e)}function UC(){var e=hn.languages,n=[],r;for(r in e)Ip.call(e,r)&&typeof e[r]=="object"&&n.push(r);return n}function GC(e,n,r){var s;return typeof e=="string"?{type:"text",value:e}:hn.util.type(e)==="Array"?VC(e,n):(s={type:e.type,content:hn.Token.stringify(e.content,n,r),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:r},e.alias&&(s.classes=s.classes.concat(e.alias)),hn.hooks.run("wrap",s),AC(s.tag+"."+s.classes.join("."),ZC(s.attributes),s.content))}function VC(e,n){for(var r=[],s=e.length,a=-1,l;++a<s;)l=e[a],l!==""&&l!==null&&l!==void 0&&r.push(l);for(a=-1,s=r.length;++a<s;)l=r[a],r[a]=hn.Token.stringify(l,n,r);return r}function YC(e){return e}function ZC(e){var n;for(n in e)e[n]=PC(e[n]);return e}function qC(){var e="Prism"in Sl,n=e?Sl.Prism:void 0;return r;function r(){e?Sl.Prism=n:delete Sl.Prism,e=void 0,n=void 0}}const Ep=Kt(DC);var br=I7(Ep,{});br.registerLanguage=function(e,n){return Ep.register(n)};br.alias=function(e,n){return Ep.alias(e,n)};var KC=Mp;Mp.displayName="bash";Mp.aliases=["shell"];function Mp(e){(function(n){var r="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",s={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:s,environment:{pattern:RegExp("\\$"+r),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+r),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};n.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+r),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:s}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+r),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},s.inside=n.languages.bash;for(var l=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],o=a.variable[1].inside,i=0;i<l.length;i++)o[l[i]]=n.languages.bash[l[i]];n.languages.shell=n.languages.bash})(e)}const QC=Kt(KC);var XC=Ap;Ap.displayName="json";Ap.aliases=["webmanifest"];function Ap(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}const JC=Kt(XC);var ek=Pp;Pp.displayName="jsx";Pp.aliases=[];function Pp(e){(function(n){var r=n.util.clone(n.languages.javascript),s=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,l=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function o(h,m){return h=h.replace(/<S>/g,function(){return s}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return l}),RegExp(h,m)}l=o(l).source,n.languages.jsx=n.languages.extend("markup",r),n.languages.jsx.tag.pattern=o(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),n.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,n.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,n.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,n.languages.jsx.tag.inside.comment=r.comment,n.languages.insertBefore("inside","attr-name",{spread:{pattern:o(/<SPREAD>/.source),inside:n.languages.jsx}},n.languages.jsx.tag),n.languages.insertBefore("inside","special-attr",{script:{pattern:o(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:n.languages.jsx}}},n.languages.jsx.tag);var i=function(h){return h?typeof h=="string"?h:typeof h.content=="string"?h.content:h.content.map(i).join(""):""},c=function(h){for(var m=[],x=0;x<h.length;x++){var w=h[x],$=!1;if(typeof w!="string"&&(w.type==="tag"&&w.content[0]&&w.content[0].type==="tag"?w.content[0].content[0].content==="</"?m.length>0&&m[m.length-1].tagName===i(w.content[0].content[1])&&m.pop():w.content[w.content.length-1].content==="/>"||m.push({tagName:i(w.content[0].content[1]),openedBraces:0}):m.length>0&&w.type==="punctuation"&&w.content==="{"?m[m.length-1].openedBraces++:m.length>0&&m[m.length-1].openedBraces>0&&w.type==="punctuation"&&w.content==="}"?m[m.length-1].openedBraces--:$=!0),($||typeof w=="string")&&m.length>0&&m[m.length-1].openedBraces===0){var _=i(w);x<h.length-1&&(typeof h[x+1]=="string"||h[x+1].type==="plain-text")&&(_+=i(h[x+1]),h.splice(x+1,1)),x>0&&(typeof h[x-1]=="string"||h[x-1].type==="plain-text")&&(_=i(h[x-1])+_,h.splice(x-1,1),x--),h[x]=new n.Token("plain-text",_,null,_)}w.content&&typeof w.content!="string"&&c(w.content)}};n.hooks.add("after-tokenize",function(h){h.language!=="jsx"&&h.language!=="tsx"||c(h.tokens)})})(e)}const nk=Kt(ek);var tk=Rp;Rp.displayName="scss";Rp.aliases=[];function Rp(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const rk=Kt(tk);var sk=Op;Op.displayName="yaml";Op.aliases=["yml"];function Op(e){(function(n){var r=/[*&][^\s[\]{},]+/,s=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+s.source+"(?:[ 	]+"+r.source+")?|"+r.source+"(?:[ 	]+"+s.source+")?)",l=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),o=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function i(c,h){h=(h||"").replace(/m/g,"")+"m";var m=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<value>>/g,function(){return c});return RegExp(m,h)}n.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return a})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<key>>/g,function(){return"(?:"+l+"|"+o+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:i(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:i(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:i(o),lookbehind:!0,greedy:!0},number:{pattern:i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:s,important:r,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},n.languages.yml=n.languages.yaml})(e)}const ak=Kt(sk);function g5(e){return typeof e=="string"}function lk(e){return Array.isArray(e)}function ok(e){return e===void 0}function ik(e){return e===null}function _n(e){return!(ok(e)||ik(e))}function dk(e){return!_n(e)}function ck(...e){throw new Error(e.join(""))}const uk=e=>e;function hk(){return Intl.DateTimeFormat().resolvedOptions().locale}hk();const wo=(e,n,r=1)=>{const s=n<e?-Math.abs(r):r;return Array(1+Math.floor(Math.abs((n-e)/r))).fill(e).map((a,l)=>a+l*s)};function v5(e,n=/,\s*|\s+/){return dk(e)?[]:g5(e)?e.length?e.split(n):[]:lk(e)?e:[e]}function pk(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function fk(e){return new Promise(n=>setTimeout(n,e))}br.registerLanguage("jsx",nk);br.registerLanguage("json",JC);br.registerLanguage("css",$C);br.registerLanguage("scss",rk);br.registerLanguage("bash",QC);br.registerLanguage("yaml",ak);const _e=({code:e,language:n="jsx",caption:r,expand:s=!1,fixed:a=s,className:l=""})=>{const[o,i]=F.useState(!1),[c,h]=F.useState(s),m=()=>{navigator.clipboard.writeText(e),i(!0),fk(2e3).then(()=>i(!1))};return t.jsxs("div",{className:`codeblock ${l} ${c?"expanded":""} ${a?"fixed-open":"expandable"}`,children:[!!r&&t.jsx("h4",{className:"caption",children:r}),t.jsxs("div",{className:"controls",children:[t.jsx("div",{className:"expand",onClick:()=>h(!c),children:c?"Compress":"Expand"}),t.jsx("div",{className:`clipboard ${o?"copied":""}`,onClick:m,children:o?"Copied":"Copy"})]}),t.jsx(br,{language:n,showLineNumbers:!0,useInlineStyles:!1,customStyle:{},children:mk(e)})]})},mk=e=>e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/\/\*\s*REAL\s*\*\/.*?\/\*\s*UNREAL\s*\*\//g,"").replaceAll(/{\/\*\s*(UN?)PRETEND\s*\*\/}/g,"").replace(/\n+$/,""),Ot=({children:e,code:n,caption:r,language:s,expand:a,className:l=""})=>t.jsxs("div",{className:`grid-2 gap-8 top stack-desktop ${l}`,children:[t.jsx("div",{className:"wide",children:e}),t.jsx(_e,{code:n,caption:r,language:s,expand:a,className:"mar-b-8"})]}),gk=`// define your brand hue and color name
$purple-hue:   295;
$brand-hue:    $purple-hue;
$brand-color:  'purple';

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,vk=`// define your own brand colors...
$purple-hue:   295;
$teal-hue:     160;
$blue-hue:     215;
$brand-hue:    $purple-hue;
$brand-color:  'purple';
$brand-colors: (
  primary:   $brand-color,
  secondary: 'teal',
  tertiary:  'blue',
);

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,xk=`// define your own brand colors and greyscale hues...
$purple-hue:   295;
$teal-hue:     160;
$blue-hue:     215;
$brand-hue:    $purple-hue;
$brand-color:  'purple';
$grey-hue:     $brand-hue;
$grey20-hue:   $teal-hue;
$grey40-hue:   $blue-hue;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,bk=`// define the colors that you want to use...
$color-names:
  'red', 'orange', 'teal', 'blue', 'green', 'purple',
  'grey', 'grey20';

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`;/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ee(){return Ee=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},Ee.apply(this,arguments)}var gn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(gn||(gn={}));const J2="popstate";function yk(e){e===void 0&&(e={});function n(s,a){let{pathname:l,search:o,hash:i}=s.location;return oo("",{pathname:l,search:o,hash:i},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(s,a){return typeof a=="string"?a:As(a)}return jk(n,r,null,e)}function Se(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Ra(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function wk(){return Math.random().toString(36).substr(2,8)}function e0(e,n){return{usr:e.state,key:e.key,idx:n}}function oo(e,n,r,s){return r===void 0&&(r=null),Ee({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Jr(n):n,{state:r,key:n&&n.key||s||wk()})}function As(e){let{pathname:n="/",search:r="",hash:s=""}=e;return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function Jr(e){let n={};if(e){let r=e.indexOf("#");r>=0&&(n.hash=e.substr(r),e=e.substr(0,r));let s=e.indexOf("?");s>=0&&(n.search=e.substr(s),e=e.substr(0,s)),e&&(n.pathname=e)}return n}function jk(e,n,r,s){s===void 0&&(s={});let{window:a=document.defaultView,v5Compat:l=!1}=s,o=a.history,i=gn.Pop,c=null,h=m();h==null&&(h=0,o.replaceState(Ee({},o.state,{idx:h}),""));function m(){return(o.state||{idx:null}).idx}function x(){i=gn.Pop;let E=m(),b=E==null?null:E-h;h=E,c&&c({action:i,location:C.location,delta:b})}function w(E,b){i=gn.Push;let f=oo(C.location,E,b);h=m()+1;let v=e0(f,h),g=C.createHref(f);try{o.pushState(v,"",g)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;a.location.assign(g)}l&&c&&c({action:i,location:C.location,delta:1})}function $(E,b){i=gn.Replace;let f=oo(C.location,E,b);h=m();let v=e0(f,h),g=C.createHref(f);o.replaceState(v,"",g),l&&c&&c({action:i,location:C.location,delta:0})}function _(E){let b=a.location.origin!=="null"?a.location.origin:a.location.href,f=typeof E=="string"?E:As(E);return Se(b,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,b)}let C={get action(){return i},get location(){return e(a,o)},listen(E){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(J2,x),c=E,()=>{a.removeEventListener(J2,x),c=null}},createHref(E){return n(a,E)},createURL:_,encodeLocation(E){let b=_(E);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:w,replace:$,go(E){return o.go(E)}};return C}var vn;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vn||(vn={}));const Ck=new Set(["lazy","caseSensitive","path","id","index","children"]);function kk(e){return e.index===!0}function ah(e,n,r,s){return r===void 0&&(r=[]),s===void 0&&(s={}),e.map((a,l)=>{let o=[...r,l],i=typeof a.id=="string"?a.id:o.join("-");if(Se(a.index!==!0||!a.children,"Cannot specify children on an index route"),Se(!s[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),kk(a)){let c=Ee({},a,n(a),{id:i});return s[i]=c,c}else{let c=Ee({},a,n(a),{id:i,children:void 0});return s[i]=c,a.children&&(c.children=ah(a.children,n,o,s)),c}})}function ba(e,n,r){r===void 0&&(r="/");let s=typeof n=="string"?Jr(n):n,a=Ha(s.pathname||"/",r);if(a==null)return null;let l=x5(e);Sk(l);let o=null;for(let i=0;o==null&&i<l.length;++i)o=Ak(l[i],Ok(a));return o}function x5(e,n,r,s){n===void 0&&(n=[]),r===void 0&&(r=[]),s===void 0&&(s="");let a=(l,o,i)=>{let c={relativePath:i===void 0?l.path||"":i,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};c.relativePath.startsWith("/")&&(Se(c.relativePath.startsWith(s),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(s.length));let h=ur([s,c.relativePath]),m=r.concat(c);l.children&&l.children.length>0&&(Se(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),x5(l.children,n,m,h)),!(l.path==null&&!l.index)&&n.push({path:h,score:Ek(h,l.index),routesMeta:m})};return e.forEach((l,o)=>{var i;if(l.path===""||!((i=l.path)!=null&&i.includes("?")))a(l,o);else for(let c of b5(l.path))a(l,o,c)}),n}function b5(e){let n=e.split("/");if(n.length===0)return[];let[r,...s]=n,a=r.endsWith("?"),l=r.replace(/\?$/,"");if(s.length===0)return a?[l,""]:[l];let o=b5(s.join("/")),i=[];return i.push(...o.map(c=>c===""?l:[l,c].join("/"))),a&&i.push(...o),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function Sk(e){e.sort((n,r)=>n.score!==r.score?r.score-n.score:Mk(n.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}const Tk=/^:\w+$/,Nk=3,Lk=2,_k=1,$k=10,Ik=-2,n0=e=>e==="*";function Ek(e,n){let r=e.split("/"),s=r.length;return r.some(n0)&&(s+=Ik),n&&(s+=Lk),r.filter(a=>!n0(a)).reduce((a,l)=>a+(Tk.test(l)?Nk:l===""?_k:$k),s)}function Mk(e,n){return e.length===n.length&&e.slice(0,-1).every((s,a)=>s===n[a])?e[e.length-1]-n[n.length-1]:0}function Ak(e,n){let{routesMeta:r}=e,s={},a="/",l=[];for(let o=0;o<r.length;++o){let i=r[o],c=o===r.length-1,h=a==="/"?n:n.slice(a.length)||"/",m=Pk({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},h);if(!m)return null;Object.assign(s,m.params);let x=i.route;l.push({params:s,pathname:ur([a,m.pathname]),pathnameBase:zk(ur([a,m.pathnameBase])),route:x}),m.pathnameBase!=="/"&&(a=ur([a,m.pathnameBase]))}return l}function Pk(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=Rk(e.path,e.caseSensitive,e.end),a=n.match(r);if(!a)return null;let l=a[0],o=l.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:s.reduce((h,m,x)=>{if(m==="*"){let w=i[x]||"";o=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}return h[m]=Fk(i[x]||"",m),h},{}),pathname:l,pathnameBase:o,pattern:e}}function Rk(e,n,r){n===void 0&&(n=!1),r===void 0&&(r=!0),Ra(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,i)=>(s.push(i),"/([^\\/]+)"));return e.endsWith("*")?(s.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),s]}function Ok(e){try{return decodeURI(e)}catch(n){return Ra(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Fk(e,n){try{return decodeURIComponent(e)}catch(r){return Ra(!1,'The value for the URL param "'+n+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function Ha(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let r=n.endsWith("/")?n.length-1:n.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}function Bk(e,n){n===void 0&&(n="/");let{pathname:r,search:s="",hash:a=""}=typeof e=="string"?Jr(e):e;return{pathname:r?r.startsWith("/")?r:Dk(r,n):n,search:Wk(s),hash:Hk(a)}}function Dk(e,n){let r=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Vc(e,n,r,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ad(e){return e.filter((n,r)=>r===0||n.route.path&&n.route.path.length>0)}function Fp(e,n,r,s){s===void 0&&(s=!1);let a;typeof e=="string"?a=Jr(e):(a=Ee({},e),Se(!a.pathname||!a.pathname.includes("?"),Vc("?","pathname","search",a)),Se(!a.pathname||!a.pathname.includes("#"),Vc("#","pathname","hash",a)),Se(!a.search||!a.search.includes("#"),Vc("#","search","hash",a)));let l=e===""||a.pathname==="",o=l?"/":a.pathname,i;if(s||o==null)i=r;else{let x=n.length-1;if(o.startsWith("..")){let w=o.split("/");for(;w[0]==="..";)w.shift(),x-=1;a.pathname=w.join("/")}i=x>=0?n[x]:"/"}let c=Bk(a,i),h=o&&o!=="/"&&o.endsWith("/"),m=(l||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(h||m)&&(c.pathname+="/"),c}const ur=e=>e.join("/").replace(/\/\/+/g,"/"),zk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Wk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Hk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Bp{constructor(n,r,s,a){a===void 0&&(a=!1),this.status=n,this.statusText=r||"",this.internal=a,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}}function y5(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const w5=["post","put","patch","delete"],Uk=new Set(w5),Gk=["get",...w5],Vk=new Set(Gk),Yk=new Set([301,302,303,307,308]),Zk=new Set([307,308]),Yc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},qk={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},t0={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},j5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kk=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function Qk(e){const n=e.window?e.window:typeof window<"u"?window:void 0,r=typeof n<"u"&&typeof n.document<"u"&&typeof n.document.createElement<"u",s=!r;Se(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let P=e.detectErrorBoundary;a=O=>({hasErrorBoundary:P(O)})}else a=Kk;let l={},o=ah(e.routes,a,void 0,l),i,c=e.basename||"/",h=Ee({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),m=null,x=new Set,w=null,$=null,_=null,C=e.hydrationData!=null,E=ba(o,e.history.location,c),b=null;if(E==null){let P=Mt(404,{pathname:e.history.location.pathname}),{matches:O,route:H}=d0(o);E=O,b={[H.id]:P}}let f=!E.some(P=>P.route.lazy)&&(!E.some(P=>P.route.loader)||e.hydrationData!=null),v,g={historyAction:e.history.action,location:e.history.location,matches:E,initialized:f,navigation:Yc,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||b,fetchers:new Map,blockers:new Map},N=gn.Pop,k=!1,A,R=!1,D=!1,Y=[],he=[],ie=new Map,De=0,sn=-1,Ge=new Map,Fe=new Set,Ve=new Map,z=new Map,Z=new Map,X=!1;function ae(){return m=e.history.listen(P=>{let{action:O,location:H,delta:q}=P;if(X){X=!1;return}Ra(Z.size===0||q!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let oe=el({currentLocation:g.location,nextLocation:H,historyAction:O});if(oe&&q!=null){X=!0,e.history.go(q*-1),os(oe,{state:"blocked",location:H,proceed(){os(oe,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),e.history.go(q)},reset(){wr(oe),fe({blockers:new Map(v.state.blockers)})}});return}return Pn(O,H)}),g.initialized||Pn(gn.Pop,g.location),v}function pe(){m&&m(),x.clear(),A&&A.abort(),g.fetchers.forEach((P,O)=>Ka(O)),g.blockers.forEach((P,O)=>wr(O))}function Dn(P){return x.add(P),()=>x.delete(P)}function fe(P){g=Ee({},g,P),x.forEach(O=>O(g))}function Je(P,O){var H,q;let oe=g.actionData!=null&&g.navigation.formMethod!=null&&ar(g.navigation.formMethod)&&g.navigation.state==="loading"&&((H=P.state)==null?void 0:H._isRedirect)!==!0,de;O.actionData?Object.keys(O.actionData).length>0?de=O.actionData:de=null:oe?de=g.actionData:de=null;let ce=O.loaderData?i0(g.loaderData,O.loaderData,O.matches||[],O.errors):g.loaderData;for(let[se]of Z)wr(se);let ue=k===!0||g.navigation.formMethod!=null&&ar(g.navigation.formMethod)&&((q=P.state)==null?void 0:q._isRedirect)!==!0;i&&(o=i,i=void 0),fe(Ee({},O,{actionData:de,loaderData:ce,historyAction:N,location:P,initialized:!0,navigation:Yc,revalidation:"idle",restoreScrollPosition:$o(P,O.matches||g.matches),preventScrollReset:ue,blockers:new Map(g.blockers)})),R||N===gn.Pop||(N===gn.Push?e.history.push(P,P.state):N===gn.Replace&&e.history.replace(P,P.state)),N=gn.Pop,k=!1,R=!1,D=!1,Y=[],he=[]}async function Ye(P,O){if(typeof P=="number"){e.history.go(P);return}let H=lh(g.location,g.matches,c,h.v7_prependBasename,P,O==null?void 0:O.fromRouteId,O==null?void 0:O.relative),{path:q,submission:oe,error:de}=r0(h.v7_normalizeFormMethod,!1,H,O),ce=g.location,ue=oo(g.location,q,O&&O.state);ue=Ee({},ue,e.history.encodeLocation(ue));let se=O&&O.replace!=null?O.replace:void 0,Te=gn.Push;se===!0?Te=gn.Replace:se===!1||oe!=null&&ar(oe.formMethod)&&oe.formAction===g.location.pathname+g.location.search&&(Te=gn.Replace);let Me=O&&"preventScrollReset"in O?O.preventScrollReset===!0:void 0,yn=el({currentLocation:ce,nextLocation:ue,historyAction:Te});if(yn){os(yn,{state:"blocked",location:ue,proceed(){os(yn,{state:"proceeding",proceed:void 0,reset:void 0,location:ue}),Ye(P,O)},reset(){wr(yn),fe({blockers:new Map(g.blockers)})}});return}return await Pn(Te,ue,{submission:oe,pendingError:de,preventScrollReset:Me,replace:O&&O.replace})}function pn(){if(qa(),fe({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Pn(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Pn(N||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function Pn(P,O,H){A&&A.abort(),A=null,N=P,R=(H&&H.startUninterruptedRevalidation)===!0,_o(g.location,g.matches),k=(H&&H.preventScrollReset)===!0;let q=i||o,oe=H&&H.overrideNavigation,de=ba(q,O,c);if(!de){let on=Mt(404,{pathname:O.pathname}),{matches:fn,route:xt}=d0(q);Ds(),Je(O,{matches:fn,loaderData:{},errors:{[xt.id]:on}});return}if(g.initialized&&!D&&tS(g.location,O)&&!(H&&H.submission&&ar(H.submission.formMethod))){Je(O,{matches:de});return}A=new AbortController;let ce=xl(e.history,O,A.signal,H&&H.submission),ue,se;if(H&&H.pendingError)se={[ya(de).route.id]:H.pendingError};else if(H&&H.submission&&ar(H.submission.formMethod)){let on=await ts(ce,O,H.submission,de,{replace:H.replace});if(on.shortCircuited)return;ue=on.pendingActionData,se=on.pendingActionError,oe=Ee({state:"loading",location:O},H.submission),ce=new Request(ce.url,{signal:ce.signal})}let{shortCircuited:Te,loaderData:Me,errors:yn}=await rs(ce,O,de,oe,H&&H.submission,H&&H.fetcherSubmission,H&&H.replace,ue,se);Te||(A=null,Je(O,Ee({matches:de},ue?{actionData:ue}:{},{loaderData:Me,errors:yn})))}async function ts(P,O,H,q,oe){qa();let de=Ee({state:"submitting",location:O},H);fe({navigation:de});let ce,ue=oh(q,O);if(!ue.route.action&&!ue.route.lazy)ce={type:vn.error,error:Mt(405,{method:P.method,pathname:O.pathname,routeId:ue.route.id})};else if(ce=await vl("action",P,ue,q,l,a,c),P.signal.aborted)return{shortCircuited:!0};if(Na(ce)){let se;return oe&&oe.replace!=null?se=oe.replace:se=ce.location===g.location.pathname+g.location.search,await as(g,ce,{submission:H,replace:se}),{shortCircuited:!0}}if(Bl(ce)){let se=ya(q,ue.route.id);return(oe&&oe.replace)!==!0&&(N=gn.Push),{pendingActionData:{},pendingActionError:{[se.route.id]:ce.error}}}if(ks(ce))throw Mt(400,{type:"defer-action"});return{pendingActionData:{[ue.route.id]:ce.data}}}async function rs(P,O,H,q,oe,de,ce,ue,se){let Te=q;Te||(Te=Ee({state:"loading",location:O,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},oe));let Me=oe||de?oe||de:Te.formMethod&&Te.formAction&&Te.formData&&Te.formEncType?{formMethod:Te.formMethod,formAction:Te.formAction,formData:Te.formData,formEncType:Te.formEncType}:void 0,yn=i||o,[on,fn]=s0(e.history,g,H,Me,O,D,Y,he,Ve,yn,c,ue,se);if(Ds(Be=>!(H&&H.some(qn=>qn.route.id===Be))||on&&on.some(qn=>qn.route.id===Be)),on.length===0&&fn.length===0){let Be=Xa();return Je(O,Ee({matches:H,loaderData:{},errors:se||null},ue?{actionData:ue}:{},Be?{fetchers:new Map(g.fetchers)}:{})),{shortCircuited:!0}}if(!R){fn.forEach(qn=>{let er=g.fetchers.get(qn.key),mn={state:"loading",data:er&&er.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(qn.key,mn)});let Be=ue||g.actionData;fe(Ee({navigation:Te},Be?Object.keys(Be).length===0?{actionData:null}:{actionData:Be}:{},fn.length>0?{fetchers:new Map(g.fetchers)}:{}))}sn=++De,fn.forEach(Be=>{Be.controller&&ie.set(Be.key,Be.controller)});let xt=()=>fn.forEach(Be=>Jt(Be.key));A&&A.signal.addEventListener("abort",xt);let{results:is,loaderResults:nl,fetcherResults:zs}=await To(g.matches,H,on,fn,P);if(P.signal.aborted)return{shortCircuited:!0};A&&A.signal.removeEventListener("abort",xt),fn.forEach(Be=>ie.delete(Be.key));let Nt=c0(is);if(Nt)return await as(g,Nt,{replace:ce}),{shortCircuited:!0};let{loaderData:ds,errors:Ws}=o0(g,H,on,nl,se,fn,zs,z);z.forEach((Be,qn)=>{Be.subscribe(er=>{(er||Be.done)&&z.delete(qn)})});let tl=Xa(),rl=Ja(sn),Hs=tl||rl||fn.length>0;return Ee({loaderData:ds,errors:Ws},Hs?{fetchers:new Map(g.fetchers)}:{})}function Xt(P){return g.fetchers.get(P)||qk}function Ya(P,O,H,q){if(s)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ie.has(P)&&Jt(P);let oe=i||o,de=lh(g.location,g.matches,c,h.v7_prependBasename,H,O,q==null?void 0:q.relative),ce=ba(oe,de,c);if(!ce){ls(P,O,Mt(404,{pathname:de}));return}let{path:ue,submission:se}=r0(h.v7_normalizeFormMethod,!0,de,q),Te=oh(ce,ue);if(k=(q&&q.preventScrollReset)===!0,se&&ar(se.formMethod)){ss(P,O,ue,Te,ce,se);return}Ve.set(P,{routeId:O,path:ue}),Za(P,O,ue,Te,ce,se)}async function ss(P,O,H,q,oe,de){if(qa(),Ve.delete(P),!q.route.action&&!q.route.lazy){let mn=Mt(405,{method:de.formMethod,pathname:H,routeId:O});ls(P,O,mn);return}let ce=g.fetchers.get(P),ue=Ee({state:"submitting"},de,{data:ce&&ce.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(P,ue),fe({fetchers:new Map(g.fetchers)});let se=new AbortController,Te=xl(e.history,H,se.signal,de);ie.set(P,se);let Me=await vl("action",Te,q,oe,l,a,c);if(Te.signal.aborted){ie.get(P)===se&&ie.delete(P);return}if(Na(Me)){ie.delete(P),Fe.add(P);let mn=Ee({state:"loading"},de,{data:void 0," _hasFetcherDoneAnything ":!0});return g.fetchers.set(P,mn),fe({fetchers:new Map(g.fetchers)}),as(g,Me,{submission:de,isFetchActionRedirect:!0})}if(Bl(Me)){ls(P,O,Me.error);return}if(ks(Me))throw Mt(400,{type:"defer-action"});let yn=g.navigation.location||g.location,on=xl(e.history,yn,se.signal),fn=i||o,xt=g.navigation.state!=="idle"?ba(fn,g.navigation.location,c):g.matches;Se(xt,"Didn't find any matches after fetcher action");let is=++De;Ge.set(P,is);let nl=Ee({state:"loading",data:Me.data},de,{" _hasFetcherDoneAnything ":!0});g.fetchers.set(P,nl);let[zs,Nt]=s0(e.history,g,xt,de,yn,D,Y,he,Ve,fn,c,{[q.route.id]:Me.data},void 0);Nt.filter(mn=>mn.key!==P).forEach(mn=>{let sl=mn.key,Io=g.fetchers.get(sl),Eo={state:"loading",data:Io&&Io.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(sl,Eo),mn.controller&&ie.set(sl,mn.controller)}),fe({fetchers:new Map(g.fetchers)});let ds=()=>Nt.forEach(mn=>Jt(mn.key));se.signal.addEventListener("abort",ds);let{results:Ws,loaderResults:tl,fetcherResults:rl}=await To(g.matches,xt,zs,Nt,on);if(se.signal.aborted)return;se.signal.removeEventListener("abort",ds),Ge.delete(P),ie.delete(P),Nt.forEach(mn=>ie.delete(mn.key));let Hs=c0(Ws);if(Hs)return as(g,Hs);let{loaderData:Be,errors:qn}=o0(g,g.matches,zs,tl,void 0,Nt,rl,z);if(g.fetchers.has(P)){let mn={state:"idle",data:Me.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(P,mn)}let er=Ja(is);g.navigation.state==="loading"&&is>sn?(Se(N,"Expected pending action"),A&&A.abort(),Je(g.navigation.location,{matches:xt,loaderData:Be,errors:qn,fetchers:new Map(g.fetchers)})):(fe(Ee({errors:qn,loaderData:i0(g.loaderData,Be,xt,qn)},er||Nt.length>0?{fetchers:new Map(g.fetchers)}:{})),D=!1)}async function Za(P,O,H,q,oe,de){let ce=g.fetchers.get(P),ue=Ee({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},de,{data:ce&&ce.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(P,ue),fe({fetchers:new Map(g.fetchers)});let se=new AbortController,Te=xl(e.history,H,se.signal);ie.set(P,se);let Me=await vl("loader",Te,q,oe,l,a,c);if(ks(Me)&&(Me=await T5(Me,Te.signal,!0)||Me),ie.get(P)===se&&ie.delete(P),Te.signal.aborted)return;if(Na(Me)){Fe.add(P),await as(g,Me);return}if(Bl(Me)){let on=ya(g.matches,O);g.fetchers.delete(P),fe({fetchers:new Map(g.fetchers),errors:{[on.route.id]:Me.error}});return}Se(!ks(Me),"Unhandled fetcher deferred data");let yn={state:"idle",data:Me.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(P,yn),fe({fetchers:new Map(g.fetchers)})}async function as(P,O,H){let{submission:q,replace:oe,isFetchActionRedirect:de}=H===void 0?{}:H;O.revalidate&&(D=!0);let ce=oo(P.location,O.location,Ee({_isRedirect:!0},de?{_isFetchActionRedirect:!0}:{}));if(Se(ce,"Expected a location on the redirect navigation"),j5.test(O.location)&&r){let on=e.history.createURL(O.location),fn=Ha(on.pathname,c)==null;if(n.location.origin!==on.origin||fn){oe?n.location.replace(O.location):n.location.assign(O.location);return}}A=null;let ue=oe===!0?gn.Replace:gn.Push,{formMethod:se,formAction:Te,formEncType:Me,formData:yn}=P.navigation;!q&&se&&Te&&yn&&Me&&(q={formMethod:se,formAction:Te,formEncType:Me,formData:yn}),Zk.has(O.status)&&q&&ar(q.formMethod)?await Pn(ue,ce,{submission:Ee({},q,{formAction:O.location}),preventScrollReset:k}):de?await Pn(ue,ce,{overrideNavigation:{state:"loading",location:ce,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:q,preventScrollReset:k}):await Pn(ue,ce,{overrideNavigation:{state:"loading",location:ce,formMethod:q?q.formMethod:void 0,formAction:q?q.formAction:void 0,formEncType:q?q.formEncType:void 0,formData:q?q.formData:void 0},preventScrollReset:k})}async function To(P,O,H,q,oe){let de=await Promise.all([...H.map(se=>vl("loader",oe,se,O,l,a,c)),...q.map(se=>se.matches&&se.match&&se.controller?vl("loader",xl(e.history,se.path,se.controller.signal),se.match,se.matches,l,a,c):{type:vn.error,error:Mt(404,{pathname:se.path})})]),ce=de.slice(0,H.length),ue=de.slice(H.length);return await Promise.all([u0(P,H,ce,ce.map(()=>oe.signal),!1,g.loaderData),u0(P,q.map(se=>se.match),ue,q.map(se=>se.controller?se.controller.signal:null),!0)]),{results:de,loaderResults:ce,fetcherResults:ue}}function qa(){D=!0,Y.push(...Ds()),Ve.forEach((P,O)=>{ie.has(O)&&(he.push(O),Jt(O))})}function ls(P,O,H){let q=ya(g.matches,O);Ka(P),fe({errors:{[q.route.id]:H},fetchers:new Map(g.fetchers)})}function Ka(P){let O=g.fetchers.get(P);ie.has(P)&&!(O&&O.state==="loading"&&Ge.has(P))&&Jt(P),Ve.delete(P),Ge.delete(P),Fe.delete(P),g.fetchers.delete(P)}function Jt(P){let O=ie.get(P);Se(O,"Expected fetch controller: "+P),O.abort(),ie.delete(P)}function Qa(P){for(let O of P){let q={state:"idle",data:Xt(O).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(O,q)}}function Xa(){let P=[],O=!1;for(let H of Fe){let q=g.fetchers.get(H);Se(q,"Expected fetcher: "+H),q.state==="loading"&&(Fe.delete(H),P.push(H),O=!0)}return Qa(P),O}function Ja(P){let O=[];for(let[H,q]of Ge)if(q<P){let oe=g.fetchers.get(H);Se(oe,"Expected fetcher: "+H),oe.state==="loading"&&(Jt(H),Ge.delete(H),O.push(H))}return Qa(O),O.length>0}function No(P,O){let H=g.blockers.get(P)||t0;return Z.get(P)!==O&&Z.set(P,O),H}function wr(P){g.blockers.delete(P),Z.delete(P)}function os(P,O){let H=g.blockers.get(P)||t0;Se(H.state==="unblocked"&&O.state==="blocked"||H.state==="blocked"&&O.state==="blocked"||H.state==="blocked"&&O.state==="proceeding"||H.state==="blocked"&&O.state==="unblocked"||H.state==="proceeding"&&O.state==="unblocked","Invalid blocker state transition: "+H.state+" -> "+O.state),g.blockers.set(P,O),fe({blockers:new Map(g.blockers)})}function el(P){let{currentLocation:O,nextLocation:H,historyAction:q}=P;if(Z.size===0)return;Z.size>1&&Ra(!1,"A router only supports one blocker at a time");let oe=Array.from(Z.entries()),[de,ce]=oe[oe.length-1],ue=g.blockers.get(de);if(!(ue&&ue.state==="proceeding")&&ce({currentLocation:O,nextLocation:H,historyAction:q}))return de}function Ds(P){let O=[];return z.forEach((H,q)=>{(!P||P(q))&&(H.cancel(),O.push(q),z.delete(q))}),O}function Lo(P,O,H){if(w=P,_=O,$=H||(q=>q.key),!C&&g.navigation===Yc){C=!0;let q=$o(g.location,g.matches);q!=null&&fe({restoreScrollPosition:q})}return()=>{w=null,_=null,$=null}}function _o(P,O){if(w&&$&&_){let H=O.map(oe=>h0(oe,g.loaderData)),q=$(P,H)||P.key;w[q]=_()}}function $o(P,O){if(w&&$&&_){let H=O.map(de=>h0(de,g.loaderData)),q=$(P,H)||P.key,oe=w[q];if(typeof oe=="number")return oe}return null}function Gd(P){l={},i=ah(P,a,void 0,l)}return v={get basename(){return c},get state(){return g},get routes(){return o},initialize:ae,subscribe:Dn,enableScrollRestoration:Lo,navigate:Ye,fetch:Ya,revalidate:pn,createHref:P=>e.history.createHref(P),encodeLocation:P=>e.history.encodeLocation(P),getFetcher:Xt,deleteFetcher:Ka,dispose:pe,getBlocker:No,deleteBlocker:wr,_internalFetchControllers:ie,_internalActiveDeferreds:z,_internalSetRoutes:Gd},v}function Xk(e){return e!=null&&"formData"in e}function lh(e,n,r,s,a,l,o){let i,c;if(l!=null&&o!=="path"){i=[];for(let m of n)if(i.push(m),m.route.id===l){c=m;break}}else i=n,c=n[n.length-1];let h=Fp(a||".",Ad(i).map(m=>m.pathnameBase),Ha(e.pathname,r)||e.pathname,o==="path");return a==null&&(h.search=e.search,h.hash=e.hash),(a==null||a===""||a===".")&&c&&c.route.index&&!Dp(h.search)&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),s&&r!=="/"&&(h.pathname=h.pathname==="/"?r:ur([r,h.pathname])),As(h)}function r0(e,n,r,s){if(!s||!Xk(s))return{path:r};if(s.formMethod&&!aS(s.formMethod))return{path:r,error:Mt(405,{method:s.formMethod})};let a;if(s.formData){let i=s.formMethod||"get";if(a={formMethod:e?i.toUpperCase():i.toLowerCase(),formAction:S5(r),formEncType:s&&s.formEncType||"application/x-www-form-urlencoded",formData:s.formData},ar(a.formMethod))return{path:r,submission:a}}let l=Jr(r),o=k5(s.formData);return n&&l.search&&Dp(l.search)&&o.append("index",""),l.search="?"+o,{path:As(l),submission:a}}function Jk(e,n){let r=e;if(n){let s=e.findIndex(a=>a.route.id===n);s>=0&&(r=e.slice(0,s))}return r}function s0(e,n,r,s,a,l,o,i,c,h,m,x,w){let $=w?Object.values(w)[0]:x?Object.values(x)[0]:void 0,_=e.createURL(n.location),C=e.createURL(a),E=w?Object.keys(w)[0]:void 0,f=Jk(r,E).filter((g,N)=>{if(g.route.lazy)return!0;if(g.route.loader==null)return!1;if(eS(n.loaderData,n.matches[N],g)||o.some(R=>R===g.route.id))return!0;let k=n.matches[N],A=g;return a0(g,Ee({currentUrl:_,currentParams:k.params,nextUrl:C,nextParams:A.params},s,{actionResult:$,defaultShouldRevalidate:l||_.pathname+_.search===C.pathname+C.search||_.search!==C.search||C5(k,A)}))}),v=[];return c.forEach((g,N)=>{if(!r.some(D=>D.route.id===g.routeId))return;let k=ba(h,g.path,m);if(!k){v.push({key:N,routeId:g.routeId,path:g.path,matches:null,match:null,controller:null});return}let A=oh(k,g.path);if(i.includes(N)){v.push({key:N,routeId:g.routeId,path:g.path,matches:k,match:A,controller:new AbortController});return}a0(A,Ee({currentUrl:_,currentParams:n.matches[n.matches.length-1].params,nextUrl:C,nextParams:r[r.length-1].params},s,{actionResult:$,defaultShouldRevalidate:l}))&&v.push({key:N,routeId:g.routeId,path:g.path,matches:k,match:A,controller:new AbortController})}),[f,v]}function eS(e,n,r){let s=!n||r.route.id!==n.route.id,a=e[r.route.id]===void 0;return s||a}function C5(e,n){let r=e.route.path;return e.pathname!==n.pathname||r!=null&&r.endsWith("*")&&e.params["*"]!==n.params["*"]}function a0(e,n){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(n);if(typeof r=="boolean")return r}return n.defaultShouldRevalidate}async function l0(e,n,r){if(!e.lazy)return;let s=await e.lazy();if(!e.lazy)return;let a=r[e.id];Se(a,"No route found in manifest");let l={};for(let o in s){let c=a[o]!==void 0&&o!=="hasErrorBoundary";Ra(!c,'Route "'+a.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!c&&!Ck.has(o)&&(l[o]=s[o])}Object.assign(a,l),Object.assign(a,Ee({},n(a),{lazy:void 0}))}async function vl(e,n,r,s,a,l,o,i,c,h){i===void 0&&(i=!1),c===void 0&&(c=!1);let m,x,w,$=E=>{let b,f=new Promise((v,g)=>b=g);return w=()=>b(),n.signal.addEventListener("abort",w),Promise.race([E({request:n,params:r.params,context:h}),f])};try{let E=r.route[e];if(r.route.lazy)if(E)x=(await Promise.all([$(E),l0(r.route,l,a)]))[0];else if(await l0(r.route,l,a),E=r.route[e],E)x=await $(E);else if(e==="action"){let b=new URL(n.url),f=b.pathname+b.search;throw Mt(405,{method:n.method,pathname:f,routeId:r.route.id})}else return{type:vn.data,data:void 0};else if(E)x=await $(E);else{let b=new URL(n.url),f=b.pathname+b.search;throw Mt(404,{pathname:f})}Se(x!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+r.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(E){m=vn.error,x=E}finally{w&&n.signal.removeEventListener("abort",w)}if(sS(x)){let E=x.status;if(Yk.has(E)){let v=x.headers.get("Location");if(Se(v,"Redirects returned/thrown from loaders/actions must have a Location header"),!j5.test(v))v=lh(new URL(n.url),s.slice(0,s.indexOf(r)+1),o,!0,v);else if(!i){let g=new URL(n.url),N=v.startsWith("//")?new URL(g.protocol+v):new URL(v),k=Ha(N.pathname,o)!=null;N.origin===g.origin&&k&&(v=N.pathname+N.search+N.hash)}if(i)throw x.headers.set("Location",v),x;return{type:vn.redirect,status:E,location:v,revalidate:x.headers.get("X-Remix-Revalidate")!==null}}if(c)throw{type:m||vn.data,response:x};let b,f=x.headers.get("Content-Type");return f&&/\bapplication\/json\b/.test(f)?b=await x.json():b=await x.text(),m===vn.error?{type:m,error:new Bp(E,x.statusText,b),headers:x.headers}:{type:vn.data,data:b,statusCode:x.status,headers:x.headers}}if(m===vn.error)return{type:m,error:x};if(rS(x)){var _,C;return{type:vn.deferred,deferredData:x,statusCode:(_=x.init)==null?void 0:_.status,headers:((C=x.init)==null?void 0:C.headers)&&new Headers(x.init.headers)}}return{type:vn.data,data:x}}function xl(e,n,r,s){let a=e.createURL(S5(n)).toString(),l={signal:r};if(s&&ar(s.formMethod)){let{formMethod:o,formEncType:i,formData:c}=s;l.method=o.toUpperCase(),l.body=i==="application/x-www-form-urlencoded"?k5(c):c}return new Request(a,l)}function k5(e){let n=new URLSearchParams;for(let[r,s]of e.entries())n.append(r,s instanceof File?s.name:s);return n}function nS(e,n,r,s,a){let l={},o=null,i,c=!1,h={};return r.forEach((m,x)=>{let w=n[x].route.id;if(Se(!Na(m),"Cannot handle redirect results in processLoaderData"),Bl(m)){let $=ya(e,w),_=m.error;s&&(_=Object.values(s)[0],s=void 0),o=o||{},o[$.route.id]==null&&(o[$.route.id]=_),l[w]=void 0,c||(c=!0,i=y5(m.error)?m.error.status:500),m.headers&&(h[w]=m.headers)}else ks(m)?(a.set(w,m.deferredData),l[w]=m.deferredData.data):l[w]=m.data,m.statusCode!=null&&m.statusCode!==200&&!c&&(i=m.statusCode),m.headers&&(h[w]=m.headers)}),s&&(o=s,l[Object.keys(s)[0]]=void 0),{loaderData:l,errors:o,statusCode:i||200,loaderHeaders:h}}function o0(e,n,r,s,a,l,o,i){let{loaderData:c,errors:h}=nS(n,r,s,a,i);for(let m=0;m<l.length;m++){let{key:x,match:w,controller:$}=l[m];Se(o!==void 0&&o[m]!==void 0,"Did not find corresponding fetcher result");let _=o[m];if(!($&&$.signal.aborted))if(Bl(_)){let C=ya(e.matches,w==null?void 0:w.route.id);h&&h[C.route.id]||(h=Ee({},h,{[C.route.id]:_.error})),e.fetchers.delete(x)}else if(Na(_))Se(!1,"Unhandled fetcher revalidation redirect");else if(ks(_))Se(!1,"Unhandled fetcher deferred data");else{let C={state:"idle",data:_.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(x,C)}}return{loaderData:c,errors:h}}function i0(e,n,r,s){let a=Ee({},n);for(let l of r){let o=l.route.id;if(n.hasOwnProperty(o)?n[o]!==void 0&&(a[o]=n[o]):e[o]!==void 0&&l.route.loader&&(a[o]=e[o]),s&&s.hasOwnProperty(o))break}return a}function ya(e,n){return(n?e.slice(0,e.findIndex(s=>s.route.id===n)+1):[...e]).reverse().find(s=>s.route.hasErrorBoundary===!0)||e[0]}function d0(e){let n=e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:n}],route:n}}function Mt(e,n){let{pathname:r,routeId:s,method:a,type:l}=n===void 0?{}:n,o="Unknown Server Error",i="Unknown @remix-run/router error";return e===400?(o="Bad Request",a&&r&&s?i="You made a "+a+' request to "'+r+'" but '+('did not provide a `loader` for route "'+s+'", ')+"so there is no way to handle the request.":l==="defer-action"&&(i="defer() is not supported in actions")):e===403?(o="Forbidden",i='Route "'+s+'" does not match URL "'+r+'"'):e===404?(o="Not Found",i='No route matches URL "'+r+'"'):e===405&&(o="Method Not Allowed",a&&r&&s?i="You made a "+a.toUpperCase()+' request to "'+r+'" but '+('did not provide an `action` for route "'+s+'", ')+"so there is no way to handle the request.":a&&(i='Invalid request method "'+a.toUpperCase()+'"')),new Bp(e||500,o,new Error(i),!0)}function c0(e){for(let n=e.length-1;n>=0;n--){let r=e[n];if(Na(r))return r}}function S5(e){let n=typeof e=="string"?Jr(e):e;return As(Ee({},n,{hash:""}))}function tS(e,n){return e.pathname!==n.pathname||e.search!==n.search?!1:e.hash===""?n.hash!=="":e.hash===n.hash?!0:n.hash!==""}function ks(e){return e.type===vn.deferred}function Bl(e){return e.type===vn.error}function Na(e){return(e&&e.type)===vn.redirect}function rS(e){let n=e;return n&&typeof n=="object"&&typeof n.data=="object"&&typeof n.subscribe=="function"&&typeof n.cancel=="function"&&typeof n.resolveData=="function"}function sS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function aS(e){return Vk.has(e.toLowerCase())}function ar(e){return Uk.has(e.toLowerCase())}async function u0(e,n,r,s,a,l){for(let o=0;o<r.length;o++){let i=r[o],c=n[o];if(!c)continue;let h=e.find(x=>x.route.id===c.route.id),m=h!=null&&!C5(h,c)&&(l&&l[c.route.id])!==void 0;if(ks(i)&&(a||m)){let x=s[o];Se(x,"Expected an AbortSignal for revalidating fetcher deferred result"),await T5(i,x,a).then(w=>{w&&(r[o]=w||r[o])})}}}async function T5(e,n,r){if(r===void 0&&(r=!1),!await e.deferredData.resolveData(n)){if(r)try{return{type:vn.data,data:e.deferredData.unwrappedData}}catch(a){return{type:vn.error,error:a}}return{type:vn.data,data:e.deferredData.data}}}function Dp(e){return new URLSearchParams(e).getAll("index").some(n=>n==="")}function h0(e,n){let{route:r,pathname:s,params:a}=e;return{id:r.id,pathname:s,params:a,data:n[r.id],handle:r.handle}}function oh(e,n){let r=typeof n=="string"?Jr(n).search:n.search;if(e[e.length-1].route.index&&Dp(r||""))return e[e.length-1];let s=Ad(e);return s[s.length-1]}/**
 * React Router v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ih(){return ih=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},ih.apply(this,arguments)}const Pd=F.createContext(null),zp=F.createContext(null),Fs=F.createContext(null),Wp=F.createContext(null),es=F.createContext({outlet:null,matches:[],isDataRoute:!1}),N5=F.createContext(null);function lS(e,n){let{relative:r}=n===void 0?{}:n;jo()||Se(!1);let{basename:s,navigator:a}=F.useContext(Fs),{hash:l,pathname:o,search:i}=Hp(e,{relative:r}),c=o;return s!=="/"&&(c=o==="/"?s:ur([s,o])),a.createHref({pathname:c,search:i,hash:l})}function jo(){return F.useContext(Wp)!=null}function Ua(){return jo()||Se(!1),F.useContext(Wp).location}function L5(e){F.useContext(Fs).static||F.useLayoutEffect(e)}function oS(){let{isDataRoute:e}=F.useContext(es);return e?wS():iS()}function iS(){jo()||Se(!1);let e=F.useContext(Pd),{basename:n,navigator:r}=F.useContext(Fs),{matches:s}=F.useContext(es),{pathname:a}=Ua(),l=JSON.stringify(Ad(s).map(c=>c.pathnameBase)),o=F.useRef(!1);return L5(()=>{o.current=!0}),F.useCallback(function(c,h){if(h===void 0&&(h={}),!o.current)return;if(typeof c=="number"){r.go(c);return}let m=Fp(c,JSON.parse(l),a,h.relative==="path");e==null&&n!=="/"&&(m.pathname=m.pathname==="/"?n:ur([n,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[n,r,l,a,e])}const dS=F.createContext(null);function cS(e){let n=F.useContext(es).outlet;return n&&F.createElement(dS.Provider,{value:e},n)}function Hp(e,n){let{relative:r}=n===void 0?{}:n,{matches:s}=F.useContext(es),{pathname:a}=Ua(),l=JSON.stringify(Ad(s).map(o=>o.pathnameBase));return F.useMemo(()=>Fp(e,JSON.parse(l),a,r==="path"),[e,l,a,r])}function uS(e,n,r){jo()||Se(!1);let{navigator:s}=F.useContext(Fs),{matches:a}=F.useContext(es),l=a[a.length-1],o=l?l.params:{};l&&l.pathname;let i=l?l.pathnameBase:"/";l&&l.route;let c=Ua(),h;h=c;let m=h.pathname||"/",x=i==="/"?m:m.slice(i.length)||"/",w=ba(e,{pathname:x});return gS(w&&w.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:ur([i,s.encodeLocation?s.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?i:ur([i,s.encodeLocation?s.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),a,r)}function hS(){let e=yS(),n=y5(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},n),r?F.createElement("pre",{style:a},r):null,null)}const pS=F.createElement(hS,null);class fS extends F.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,r){return r.location!==n.location||r.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error||r.error,location:r.location,revalidation:n.revalidation||r.revalidation}}componentDidCatch(n,r){console.error("React Router caught the following error during render",n,r)}render(){return this.state.error?F.createElement(es.Provider,{value:this.props.routeContext},F.createElement(N5.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mS(e){let{routeContext:n,match:r,children:s}=e,a=F.useContext(Pd);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),F.createElement(es.Provider,{value:n},s)}function gS(e,n,r){var s;if(n===void 0&&(n=[]),r===void 0&&(r=null),e==null){var a;if((a=r)!=null&&a.errors)e=r.matches;else return null}let l=e,o=(s=r)==null?void 0:s.errors;if(o!=null){let i=l.findIndex(c=>c.route.id&&(o==null?void 0:o[c.route.id]));i>=0||Se(!1),l=l.slice(0,Math.min(l.length,i+1))}return l.reduceRight((i,c,h)=>{let m=c.route.id?o==null?void 0:o[c.route.id]:null,x=null;r&&(x=c.route.errorElement||pS);let w=n.concat(l.slice(0,h+1)),$=()=>{let _;return m?_=x:c.route.Component?_=F.createElement(c.route.Component,null):c.route.element?_=c.route.element:_=i,F.createElement(mS,{match:c,routeContext:{outlet:i,matches:w,isDataRoute:r!=null},children:_})};return r&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?F.createElement(fS,{location:r.location,revalidation:r.revalidation,component:x,error:m,children:$(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):$()},null)}var dh;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(dh||(dh={}));var io;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(io||(io={}));function vS(e){let n=F.useContext(Pd);return n||Se(!1),n}function xS(e){let n=F.useContext(zp);return n||Se(!1),n}function bS(e){let n=F.useContext(es);return n||Se(!1),n}function _5(e){let n=bS(),r=n.matches[n.matches.length-1];return r.route.id||Se(!1),r.route.id}function yS(){var e;let n=F.useContext(N5),r=xS(io.UseRouteError),s=_5(io.UseRouteError);return n||((e=r.errors)==null?void 0:e[s])}function wS(){let{router:e}=vS(dh.UseNavigateStable),n=_5(io.UseNavigateStable),r=F.useRef(!1);return L5(()=>{r.current=!0}),F.useCallback(function(a,l){l===void 0&&(l={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,ih({fromRouteId:n},l)))},[e,n])}const p0="startTransition";function jS(e){let{fallbackElement:n,router:r}=e,[s,a]=F.useState(r.state),l=F.useCallback(h=>{p0 in N1?N1[p0](()=>a(h)):a(h)},[a]);F.useLayoutEffect(()=>r.subscribe(l),[r,l]);let o=F.useMemo(()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:h=>r.navigate(h),push:(h,m,x)=>r.navigate(h,{state:m,preventScrollReset:x==null?void 0:x.preventScrollReset}),replace:(h,m,x)=>r.navigate(h,{replace:!0,state:m,preventScrollReset:x==null?void 0:x.preventScrollReset})}),[r]),i=r.basename||"/",c=F.useMemo(()=>({router:r,navigator:o,static:!1,basename:i}),[r,o,i]);return F.createElement(F.Fragment,null,F.createElement(Pd.Provider,{value:c},F.createElement(zp.Provider,{value:s},F.createElement(SS,{basename:i,location:s.location,navigationType:s.historyAction,navigator:o},s.initialized?F.createElement(CS,{routes:r.routes,state:s}):n))),null)}function CS(e){let{routes:n,state:r}=e;return uS(n,void 0,r)}function kS(e){return cS(e.context)}function SS(e){let{basename:n="/",children:r=null,location:s,navigationType:a=gn.Pop,navigator:l,static:o=!1}=e;jo()&&Se(!1);let i=n.replace(/^\/*/,"/"),c=F.useMemo(()=>({basename:i,navigator:l,static:o}),[i,l,o]);typeof s=="string"&&(s=Jr(s));let{pathname:h="/",search:m="",hash:x="",state:w=null,key:$="default"}=s,_=F.useMemo(()=>{let C=Ha(h,i);return C==null?null:{location:{pathname:C,search:m,hash:x,state:w,key:$},navigationType:a}},[i,h,m,x,w,$,a]);return _==null?null:F.createElement(Fs.Provider,{value:c},F.createElement(Wp.Provider,{children:r,value:_}))}var f0;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(f0||(f0={}));new Promise(()=>{});function TS(e){let n={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(n,{element:F.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(n,{errorElement:F.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),n}/**
 * React Router DOM v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oa(){return Oa=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},Oa.apply(this,arguments)}function $5(e,n){if(e==null)return{};var r={},s=Object.keys(e),a,l;for(l=0;l<s.length;l++)a=s[l],!(n.indexOf(a)>=0)&&(r[a]=e[a]);return r}function NS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function LS(e,n){return e.button===0&&(!n||n==="_self")&&!NS(e)}const _S=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],$S=["aria-current","caseSensitive","className","end","style","to","children"];function IS(e,n){return Qk({basename:n==null?void 0:n.basename,future:Oa({},n==null?void 0:n.future,{v7_prependBasename:!0}),history:yk({window:n==null?void 0:n.window}),hydrationData:(n==null?void 0:n.hydrationData)||ES(),routes:e,mapRouteProperties:TS}).initialize()}function ES(){var e;let n=(e=window)==null?void 0:e.__staticRouterHydrationData;return n&&n.errors&&(n=Oa({},n,{errors:MS(n.errors)})),n}function MS(e){if(!e)return null;let n=Object.entries(e),r={};for(let[s,a]of n)if(a&&a.__type==="RouteErrorResponse")r[s]=new Bp(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){let l=new Error(a.message);l.stack="",r[s]=l}else r[s]=a;return r}const AS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",PS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,RS=F.forwardRef(function(n,r){let{onClick:s,relative:a,reloadDocument:l,replace:o,state:i,target:c,to:h,preventScrollReset:m}=n,x=$5(n,_S),{basename:w}=F.useContext(Fs),$,_=!1;if(typeof h=="string"&&PS.test(h)&&($=h,AS))try{let f=new URL(window.location.href),v=h.startsWith("//")?new URL(f.protocol+h):new URL(h),g=Ha(v.pathname,w);v.origin===f.origin&&g!=null?h=g+v.search+v.hash:_=!0}catch{}let C=lS(h,{relative:a}),E=FS(h,{replace:o,state:i,target:c,preventScrollReset:m,relative:a});function b(f){s&&s(f),f.defaultPrevented||E(f)}return F.createElement("a",Oa({},x,{href:$||C,onClick:_||l?s:b,ref:r,target:c}))}),OS=F.forwardRef(function(n,r){let{"aria-current":s="page",caseSensitive:a=!1,className:l="",end:o=!1,style:i,to:c,children:h}=n,m=$5(n,$S),x=Hp(c,{relative:m.relative}),w=Ua(),$=F.useContext(zp),{navigator:_}=F.useContext(Fs),C=_.encodeLocation?_.encodeLocation(x).pathname:x.pathname,E=w.pathname,b=$&&$.navigation&&$.navigation.location?$.navigation.location.pathname:null;a||(E=E.toLowerCase(),b=b?b.toLowerCase():null,C=C.toLowerCase());let f=E===C||!o&&E.startsWith(C)&&E.charAt(C.length)==="/",v=b!=null&&(b===C||!o&&b.startsWith(C)&&b.charAt(C.length)==="/"),g=f?s:void 0,N;typeof l=="function"?N=l({isActive:f,isPending:v}):N=[l,f?"active":null,v?"pending":null].filter(Boolean).join(" ");let k=typeof i=="function"?i({isActive:f,isPending:v}):i;return F.createElement(RS,Oa({},m,{"aria-current":g,className:N,ref:r,style:k,to:c}),typeof h=="function"?h({isActive:f,isPending:v}):h)});var m0;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(m0||(m0={}));var g0;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(g0||(g0={}));function FS(e,n){let{target:r,replace:s,state:a,preventScrollReset:l,relative:o}=n===void 0?{}:n,i=oS(),c=Ua(),h=Hp(e,{relative:o});return F.useCallback(m=>{if(LS(m,r)){m.preventDefault();let x=s!==void 0?s:As(c)===As(h);i(e,{replace:x,state:a,preventScrollReset:l,relative:o})}},[c,i,h,s,a,r,e,l,o])}const dr=({to:e,className:n="",exact:r,children:s,text:a,onClick:l,label:o,style:i})=>t.jsx(OS,{to:e,onClick:l,end:r&&"end",className:({isActive:c})=>`${n} ${c?"active":""}`,"aria-label":o,style:i,children:s||a}),rn=(e,n)=>(r={})=>t.jsx(dr,{to:e,text:n,...r}),BS=rn("/getting-started/installation","installation"),DS=rn("/colors/utilities","color"),I5=rn("/colors/ranges","color ranges"),Up=rn("/colors/brand","brand colors"),E5=rn("/colors/palette","custom palette"),zS=rn("/colors/variables","CSS custom properties"),WS=rn("/utilities","utility classes"),Rd=rn("/utilities/borders","border"),yr=rn("/utilities/flex","flex"),ns=rn("/utilities/grid","grid"),HS=rn("/utilities/size","size"),US=rn("/utilities/shadows","shadow"),Od=rn("/utilities/spacing","spacing"),GS=rn("/utilities/split","split"),VS=rn("/utilities/stack","stacking"),M5=rn("/utilities/widths","width"),Gp=rn("/components/alerts","alerts"),YS=rn("/components/icons","icons"),ZS=rn("/components/menus","menus"),qS=rn("/components/tables","tables"),Vp=rn("/forms","forms"),KS=rn("/forms/text","text"),QS=rn("/forms/checkboxes","checkbox"),XS=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Brand Colours"}),t.jsx("p",{children:"The palette is designed to be adjustable so that you can match it to your brand colors."}),t.jsx("h2",{children:"Brand Hue and Color"}),t.jsx(Ot,{code:gk,caption:"Brand Color",language:"scss",expand:!0,children:t.jsxs("p",{children:["You should pick a color that is closest to your brand color and adjust the hue to match it if necessary.  Then define that as the"," ",t.jsx("code",{children:"$brand-hue"})," and set the ",t.jsx("code",{children:"$brand-color"})," by name."]})}),t.jsx("h2",{children:"Multiple Brand Colors"}),t.jsx(Ot,{code:vk,caption:"Brand Colors",language:"scss",expand:!0,children:t.jsxs("p",{children:["If you have multiple brand colors you can set them using the"," ",t.jsx("code",{children:"$brand-colors"})," variable.  You can call them whatever you like (we're using ",t.jsx("code",{children:"primary"}),", ",t.jsx("code",{children:"secondary"})," ","and ",t.jsx("code",{children:"tertiary"})," in this example). You should define one to be the primary ",t.jsx("code",{children:"$brand-color"})," and set the ",t.jsx("code",{children:"$brand-hue"})]})}),t.jsx("h2",{children:"Greyscale Colors"}),t.jsxs(Ot,{code:xk,caption:"Greyscale Colors",language:"scss",expand:!0,children:[t.jsxs("p",{children:["An important side-effect of setting ",t.jsx("code",{children:"$brand-hue"})," is that it will set the hue of the greyscale color ranges to match it."]}),t.jsxs("p",{children:["If you want to use different hues for the greyscale color ranges then you can do that using the ",t.jsx("code",{children:"$grey-hue"}),","," ",t.jsx("code",{children:"$grey20-hue"})," and ",t.jsx("code",{children:"$grey40-hue"})," variables."]})]}),t.jsx("h2",{children:"Culling the Palette"}),t.jsxs(Ot,{code:bk,caption:"Selecting Colors",language:"scss",expand:!0,children:[t.jsx("p",{children:"The chances are that you aren't going to need all of the colors defined in the standard palette.  You can reduce the size of the generated CSS file by excluding any that you don't need."}),t.jsxs("p",{children:["Set the ",t.jsx("code",{children:"$color-names"})," variable to list those that you want to keep.  Note that ",t.jsx("code",{children:"red"}),", ",t.jsx("code",{children:"orange"}),","," ",t.jsx("code",{children:"green"}),", ",t.jsx("code",{children:"blue"})," and ",t.jsx("code",{children:"grey"})," are used by various components, including ",t.jsx(Vp,{})," and"," ",t.jsx(Gp,{})," so you'll probably want to keep those."]})]})]}),JS=Object.freeze(Object.defineProperty({__proto__:null,default:XS},Symbol.toStringTag,{value:"Module"})),eT={bars:"M0 96C0 78 14 64 32 64H416c18 0 32 14 32 32s-14 32-32 32H32C14 128 0 114 0 96zM0 256c0-18 14-32 32-32H416c18 0 32 14 32 32s-14 32-32 32H32c-18 0-32-14-32-32zM448 416c0 18-14 32-32 32H32c-18 0-32-14-32-32s14-32 32-32H416c18 0 32 14 32 32z",check:"M486,91C499,104 499,127 486,140L212,422C198,435 177,435 163,422L26,281C13,267 13,245 26,231C39,217 61,217 75,231L187,347L438,91C451,77 473,77 486,91L486,91Z",cross:"M456,109C470,94 470,71 456,56C441,42 418,42 403,56L256,204L109,56C94,42 71,42 56,56C42,71 42,94 56,109L204,256L56,403C42,418 42,441 56,456C71,470 94,470 109,456L256,308L403,456C418,470 441,470 456,456C470,441 470,418 456,403L308,256L456,109Z",github:"M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z",info:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13 0-24-11-24-24s11-24 24-24h48c13 0 24 11 24 24v88h8c13 0 24 11 24 24s-11 24-24 24H216c-13 0-24-11-24-24s11-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",lock:"M159,133L159,226L301,226L301,133C301,94 269,62 230,62C191,62 159,94 159,133ZM101,226L101,133C101,62 159,4 230,4C301,4 359,62 359,133L359,226L373,226C404,226 430,252 430,283L430,455C430,486 404,512 373,512L87,512C56,512 30,486 30,455L30,283C30,252 56,226 87,226L101,226Z",pen:"M356,34L311,79L433,201L478,156C502,132 502,94 478,71L441,34C418,10 380,10 356,34L356,34ZM290,100L71,319C61,329 54,341 50,355L16,468C14,476 16,484 22,490C28,496 36,498 44,496L157,462C171,458 183,451 192,442L412,222L290,100Z",plus:"M292,56C292,36 276,20 256,20C236,20 220,36 220,56L220,220L56,220C36,220 20,236 20,256C20,276 36,292 56,292L220,292L220,456C220,476 236,492 256,492C276,492 292,476 292,456L292,292L456,292C476,292 492,276 492,256C492,236 476,220 456,220L292,220L292,56Z",trash:"M173,33L166,46L76,46C59,46 46,59 46,76C46,93 59,106 76,106L436,106C453,106 466,93 466,76C466,59 453,46 436,46L346,46L339,33C334,22 324,16 312,16L200,16C188,16 178,22 173,33ZM436,136L76,136L96,454C97,478 117,496 141,496L371,496C395,496 415,478 416,454L436,136Z",undo:"M168,224L40,224C27,224 16,213 16,200L16,72C16,62 22,54 31,50C40,46 50,48 57,55L99,97C186,10 327,10 414,98C502,185 502,327 414,414C327,502 185,502 98,414C85,402 85,382 98,369C110,357 130,357 143,369C205,432 307,432 369,369C432,307 432,205 369,143C307,81 207,80 144,142L185,183C192,190 194,200 190,209C187,218 178,224 168,224Z",unlock:"M313,131C313,92 345,60 384,60C423,60 455,92 455,131L455,174C455,190 468,203 484,203C499,203 512,190 512,174L512,131C512,61 455,3 384,3C313,3 256,61 256,131L256,227L57,227C26,227 0,253 0,284L0,455C0,486 26,512 57,512L341,512C373,512 398,486 398,455L398,284C398,253 373,227 341,227L313,227L313,131Z",checked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083ZM88.43,298.82C75.421,285.811 75.421,264.689 88.43,251.68C101.439,238.671 122.561,238.671 135.57,251.68L202,318.11L376.43,143.68C389.439,130.671 410.561,130.671 423.57,143.68C436.579,156.689 436.579,177.811 423.57,190.82L225.57,388.82C212.553,401.838 191.447,401.838 178.43,388.82L88.43,298.82Z",unchecked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083Z"},nT=e=>{const n=eT[e]||ck(`Invalid icon name: ${e}`);return g5(n)?{path:n,width:512,height:512}:n},v0=({path:e,onClick:n,width:r=512,height:s=512,style:a,className:l="",fill:o="currentColor"})=>t.jsx("svg",{"aria-hidden":"true",focusable:"false",className:`${l} icon`,style:a,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${r} ${s}`,onClick:n,children:t.jsx("path",{d:e,fill:o})}),Fa=({name:e,...n})=>e?t.jsx(v0,{...n,...nT(e)}):t.jsx(v0,{...n}),Bs=({color:e,selected:n,select:r,iconColor:s="white",className:a="",alt:l=t.jsx(t.Fragment,{children:" "})})=>t.jsx("button",{className:`${a} ${e} icon ${n?"focus":""}`,onClick:r,children:n?t.jsx(Fa,{name:"check",className:s}):l}),tT="Badger CSS",rT="Badger CSS palette",sT="badger-css",aT="",lT={red:{name:"Red",hue:0,stops:{0:{h:0,s:65,l:5,hex:"#150404"},5:{h:0,s:66,l:8,hex:"#220707"},10:{h:0,s:68,l:11,hex:"#2f0909"},15:{h:0,s:69,l:15,hex:"#410c0c"},20:{h:0,s:70,l:18,hex:"#4e0e0e"},25:{h:0,s:71,l:22,hex:"#601010"},30:{h:0,s:72,l:27,hex:"#761313"},35:{h:0,s:73,l:31,hex:"#891515"},40:{h:0,s:73,l:36,hex:"#9f1919"},45:{h:0,s:74,l:42,hex:"#ba1c1c"},50:{h:0,s:74,l:48,hex:"#d52020"},55:{h:0,s:74,l:55,hex:"#e13737"},60:{h:0,s:75,l:62,hex:"#e75555"},65:{h:0,s:75,l:68,hex:"#eb7070"},70:{h:0,s:74,l:74,hex:"#ee8c8c"},75:{h:0,s:74,l:80,hex:"#f2a6a6"},80:{h:0,s:74,l:84,hex:"#f4b8b8"},85:{h:0,s:73,l:88,hex:"#f7caca"},90:{h:0,s:73,l:92,hex:"#f9dcdc"},95:{h:0,s:72,l:95,hex:"#fbe9e9"},100:{h:0,s:71,l:98,hex:"#fef6f6"}},curves:{h:{min:0,max:0,minControl:{x:30,y:0},maxControl:{x:70,y:0}},s:{min:65,max:71,minControl:{x:31,y:74},maxControl:{x:63,y:78}},l:{min:5,max:98,minControl:{x:62,y:42},maxControl:{x:53,y:72}}},uri:"red"},brown:{name:"Brown",hue:14,stops:{0:{h:10,s:52,l:5,hex:"#130806"},5:{h:11,s:53,l:8,hex:"#1f0e0a"},10:{h:11,s:54,l:11,hex:"#2b120d"},15:{h:12,s:54,l:14,hex:"#371810"},20:{h:13,s:55,l:17,hex:"#431e14"},25:{h:13,s:56,l:20,hex:"#502316"},30:{h:13,s:56,l:24,hex:"#5f2a1b"},35:{h:14,s:56,l:28,hex:"#6f321f"},40:{h:14,s:57,l:32,hex:"#803923"},45:{h:14,s:57,l:37,hex:"#944229"},50:{h:14,s:57,l:42,hex:"#a84b2e"},55:{h:14,s:58,l:47,hex:"#bd5332"},60:{h:14,s:58,l:53,hex:"#cd6242"},65:{h:15,s:58,l:60,hex:"#d47b5e"},70:{h:15,s:58,l:67,hex:"#dc927a"},75:{h:15,s:58,l:75,hex:"#e4ad9a"},80:{h:14,s:58,l:81,hex:"#ebc0b2"},85:{h:14,s:58,l:87,hex:"#f1d4cb"},90:{h:14,s:58,l:92,hex:"#f6e4df"},95:{h:14,s:57,l:95,hex:"#faeeeb"},100:{h:14,s:57,l:98,hex:"#fdf8f7"}},curves:{h:{min:10,max:14,minControl:{x:30,y:15},maxControl:{x:70,y:15}},s:{min:52,max:57,minControl:{x:35,y:58},maxControl:{x:66,y:59}},l:{min:5,max:98,minControl:{x:72,y:43},maxControl:{x:67,y:82}}},uri:"brown"},orange:{name:"Orange",hue:26,stops:{0:{h:27,s:93,l:5,hex:"#190c01"},5:{h:27,s:94,l:8,hex:"#281201"},10:{h:26,s:94,l:11,hex:"#361902"},15:{h:26,s:95,l:14,hex:"#461f02"},20:{h:26,s:96,l:18,hex:"#5a2802"},25:{h:26,s:96,l:21,hex:"#692f02"},30:{h:26,s:96,l:25,hex:"#7d3803"},35:{h:26,s:97,l:30,hex:"#974302"},40:{h:26,s:97,l:35,hex:"#b04e03"},45:{h:26,s:97,l:40,hex:"#c95903"},50:{h:26,s:97,l:46,hex:"#e76604"},55:{h:26,s:96,l:52,hex:"#fa750f"},60:{h:26,s:96,l:59,hex:"#fb8932"},65:{h:26,s:95,l:65,hex:"#fb9a51"},70:{h:27,s:94,l:72,hex:"#fbb174"},75:{h:27,s:93,l:78,hex:"#fbc293"},80:{h:28,s:92,l:83,hex:"#fcd1ac"},85:{h:28,s:91,l:88,hex:"#fcdfc5"},90:{h:29,s:90,l:91,hex:"#fde7d3"},95:{h:30,s:88,l:95,hex:"#fdf2e7"},100:{h:32,s:87,l:97,hex:"#fef8f1"}},curves:{h:{min:27,max:32,minControl:{x:30,y:25},maxControl:{x:77,y:24}},s:{min:93,max:87,minControl:{x:46,y:100},maxControl:{x:64,y:97}},l:{min:5,max:97,minControl:{x:62,y:39},maxControl:{x:62,y:80}}},uri:"orange"},yellow:{name:"Yellow",hue:41,stops:{0:{h:30,s:90,l:5,hex:"#180d01"},5:{h:31,s:91,l:8,hex:"#271502"},10:{h:33,s:92,l:10,hex:"#311c02"},15:{h:34,s:93,l:13,hex:"#402502"},20:{h:35,s:94,l:17,hex:"#543203"},25:{h:36,s:95,l:20,hex:"#633d03"},30:{h:37,s:96,l:24,hex:"#784b02"},35:{h:38,s:96,l:28,hex:"#8c5a03"},40:{h:39,s:97,l:33,hex:"#a66d03"},45:{h:40,s:97,l:38,hex:"#bf8003"},50:{h:41,s:97,l:43,hex:"#d89503"},55:{h:41,s:96,l:48,hex:"#f0a505"},60:{h:42,s:95,l:54,hex:"#f9b61a"},65:{h:43,s:94,l:60,hex:"#f9c339"},70:{h:43,s:93,l:66,hex:"#f9cb58"},75:{h:44,s:92,l:72,hex:"#f9d676"},80:{h:44,s:90,l:77,hex:"#f9dd90"},85:{h:44,s:88,l:82,hex:"#f9e4a9"},90:{h:45,s:86,l:87,hex:"#faecc1"},95:{h:45,s:84,l:92,hex:"#fcf3d9"},100:{h:45,s:82,l:96,hex:"#fdf9ec"}},curves:{h:{min:30,max:45,minControl:{x:28,y:38},maxControl:{x:70,y:45}},s:{min:90,max:82,minControl:{x:44,y:100},maxControl:{x:58,y:100}},l:{min:5,max:96,minControl:{x:52,y:31},maxControl:{x:64,y:67}}},uri:"yellow"},olive:{name:"Olive",hue:68,stops:{0:{h:72,s:66,l:4,hex:"#0e1103"},5:{h:72,s:68,l:6,hex:"#161a05"},10:{h:71,s:70,l:9,hex:"#212707"},15:{h:71,s:72,l:12,hex:"#2d3509"},20:{h:70,s:73,l:15,hex:"#39420a"},25:{h:70,s:74,l:18,hex:"#45500c"},30:{h:69,s:74,l:21,hex:"#515d0e"},35:{h:69,s:74,l:25,hex:"#616f11"},40:{h:69,s:73,l:29,hex:"#708014"},45:{h:68,s:70,l:33,hex:"#7f8f19"},50:{h:68,s:66,l:37,hex:"#8c9d20"},55:{h:67,s:60,l:43,hex:"#a0af2c"},60:{h:67,s:55,l:48,hex:"#aebe37"},65:{h:66,s:52,l:54,hex:"#bac74d"},70:{h:66,s:50,l:61,hex:"#c3cd6a"},75:{h:65,s:49,l:68,hex:"#cfd585"},80:{h:65,s:48,l:75,hex:"#d9dea1"},85:{h:65,s:49,l:82,hex:"#e4e8bb"},90:{h:64,s:49,l:87,hex:"#eceece"},95:{h:64,s:51,l:93,hex:"#f5f6e4"},100:{h:64,s:52,l:97,hex:"#fbfbf3"}},curves:{h:{min:72,max:64,minControl:{x:30,y:70},maxControl:{x:69,y:65}},s:{min:66,max:52,minControl:{x:69,y:96},maxControl:{x:37,y:33}},l:{min:4,max:97,minControl:{x:67,y:35},maxControl:{x:72,y:75}}},uri:"olive"},green:{name:"Green",hue:117,stops:{0:{h:117,s:45,l:5,hex:"#081207"},5:{h:117,s:48,l:8,hex:"#0c1e0b"},10:{h:117,s:50,l:11,hex:"#0f2a0e"},15:{h:117,s:52,l:14,hex:"#133611"},20:{h:117,s:53,l:17,hex:"#174214"},25:{h:117,s:54,l:21,hex:"#1c5219"},30:{h:117,s:55,l:25,hex:"#20631d"},35:{h:117,s:55,l:29,hex:"#257321"},40:{h:117,s:55,l:33,hex:"#2a8226"},45:{h:117,s:54,l:38,hex:"#32952d"},50:{h:117,s:54,l:43,hex:"#38a932"},55:{h:117,s:53,l:48,hex:"#40bb3a"},60:{h:117,s:52,l:54,hex:"#53c74d"},65:{h:117,s:51,l:60,hex:"#6acd65"},70:{h:117,s:50,l:66,hex:"#81d47d"},75:{h:117,s:48,l:73,hex:"#9cdb99"},80:{h:117,s:47,l:79,hex:"#b3e3b0"},85:{h:117,s:46,l:85,hex:"#c9eac7"},90:{h:118,s:45,l:90,hex:"#dbf1da"},95:{h:118,s:44,l:94,hex:"#e9f6e9"},100:{h:118,s:43,l:98,hex:"#f8fcf8"}},curves:{h:{min:117,max:118,minControl:{x:30,y:118},maxControl:{x:57,y:116}},s:{min:45,max:43,minControl:{x:34,y:65},maxControl:{x:64,y:49}},l:{min:5,max:98,minControl:{x:61,y:38},maxControl:{x:72,y:79}}},uri:"green"},teal:{name:"Teal",hue:165,stops:{0:{h:165,s:52,l:5,hex:"#061310"},5:{h:165,s:56,l:7,hex:"#081c17"},10:{h:165,s:59,l:10,hex:"#0a2921"},15:{h:165,s:61,l:13,hex:"#0d352b"},20:{h:165,s:62,l:15,hex:"#0f3e32"},25:{h:165,s:63,l:18,hex:"#114b3c"},30:{h:165,s:63,l:21,hex:"#145746"},35:{h:165,s:63,l:25,hex:"#186854"},40:{h:165,s:62,l:29,hex:"#1c7861"},45:{h:165,s:60,l:33,hex:"#22876d"},50:{h:165,s:59,l:37,hex:"#27967a"},55:{h:165,s:58,l:42,hex:"#2da98a"},60:{h:165,s:57,l:47,hex:"#34bc9a"},65:{h:165,s:56,l:53,hex:"#44caa9"},70:{h:165,s:55,l:60,hex:"#61d1b5"},75:{h:165,s:54,l:67,hex:"#7dd8c2"},80:{h:165,s:54,l:75,hex:"#9de2d0"},85:{h:165,s:55,l:81,hex:"#b4e9dc"},90:{h:165,s:55,l:88,hex:"#d0f1e9"},95:{h:165,s:57,l:93,hex:"#e3f7f2"},100:{h:165,s:58,l:98,hex:"#f7fdfb"}},curves:{h:{min:165,max:165,minControl:{x:30,y:165},maxControl:{x:70,y:165}},s:{min:52,max:58,minControl:{x:34,y:81},maxControl:{x:55,y:43}},l:{min:5,max:98,minControl:{x:71,y:38},maxControl:{x:68,y:69}}},uri:"teal"},blue:{name:"Blue",hue:206,stops:{0:{h:210,s:72,l:5,hex:"#040d16"},5:{h:210,s:74,l:8,hex:"#051423"},10:{h:209,s:75,l:11,hex:"#071d31"},15:{h:209,s:77,l:15,hex:"#092744"},20:{h:209,s:78,l:18,hex:"#0a2f52"},25:{h:208,s:79,l:22,hex:"#0c3b64"},30:{h:208,s:80,l:26,hex:"#0d4677"},35:{h:207,s:81,l:31,hex:"#0f558f"},40:{h:207,s:82,l:35,hex:"#1061a2"},45:{h:207,s:83,l:41,hex:"#1271bf"},50:{h:206,s:84,l:46,hex:"#1382d8"},55:{h:206,s:84,l:52,hex:"#1e92eb"},60:{h:205,s:85,l:58,hex:"#39a3ef"},65:{h:205,s:85,l:65,hex:"#5ab2f2"},70:{h:205,s:85,l:71,hex:"#76c0f4"},75:{h:205,s:85,l:77,hex:"#92cdf6"},80:{h:204,s:84,l:82,hex:"#abd9f8"},85:{h:204,s:84,l:87,hex:"#c2e3fa"},90:{h:204,s:83,l:91,hex:"#d5ecfb"},95:{h:204,s:82,l:95,hex:"#e8f4fd"},100:{h:204,s:81,l:98,hex:"#f6fbfe"}},curves:{h:{min:210,max:204,minControl:{x:42,y:207},maxControl:{x:70,y:204}},s:{min:72,max:81,minControl:{x:43,y:86},maxControl:{x:69,y:88}},l:{min:5,max:98,minControl:{x:61,y:41},maxControl:{x:64,y:78}}},uri:"blue"},indigo:{name:"Indigo",hue:236,stops:{0:{h:234,s:50,l:7,hex:"#090b1b"},5:{h:234,s:52,l:11,hex:"#0d102b"},10:{h:235,s:54,l:16,hex:"#13163f"},15:{h:235,s:56,l:21,hex:"#181d54"},20:{h:235,s:58,l:27,hex:"#1d246d"},25:{h:235,s:61,l:32,hex:"#202883"},30:{h:236,s:64,l:38,hex:"#232b9f"},35:{h:236,s:67,l:44,hex:"#252fbb"},40:{h:236,s:71,l:50,hex:"#2531da"},45:{h:236,s:75,l:56,hex:"#3b46e3"},50:{h:236,s:78,l:62,hex:"#535dea"},55:{h:236,s:81,l:67,hex:"#6770ef"},60:{h:236,s:82,l:72,hex:"#7d85f2"},65:{h:235,s:82,l:77,hex:"#949cf4"},70:{h:235,s:82,l:81,hex:"#a7adf6"},75:{h:235,s:81,l:85,hex:"#babff8"},80:{h:235,s:79,l:89,hex:"#cdd0f9"},85:{h:235,s:77,l:92,hex:"#dbdefa"},90:{h:235,s:75,l:94,hex:"#e4e6fb"},95:{h:235,s:72,l:97,hex:"#f2f3fd"},100:{h:235,s:70,l:99,hex:"#fbfbfe"}},curves:{h:{min:234,max:235,minControl:{x:30,y:237},maxControl:{x:70,y:235}},s:{min:50,max:70,minControl:{x:60,y:69},maxControl:{x:40,y:100}},l:{min:7,max:99,minControl:{x:39,y:40},maxControl:{x:53,y:80}}},uri:"indigo"},violet:{name:"Violet",uri:"violet",hue:259,stops:{0:{h:271,s:53,l:8,hex:"#150a1f"},5:{h:269,s:53,l:12,hex:"#1e0e2f"},10:{h:268,s:54,l:16,hex:"#27133f"},15:{h:266,s:55,l:21,hex:"#321853"},20:{h:265,s:56,l:26,hex:"#3c1d67"},25:{h:264,s:57,l:31,hex:"#46227c"},30:{h:263,s:59,l:36,hex:"#4f2692"},35:{h:262,s:62,l:42,hex:"#5929ae"},40:{h:261,s:66,l:48,hex:"#622acb"},45:{h:260,s:71,l:53,hex:"#6b32dc"},50:{h:259,s:76,l:59,hex:"#7947e6"},55:{h:258,s:79,l:65,hex:"#8a5fec"},60:{h:258,s:81,l:71,hex:"#9d79f1"},65:{h:257,s:82,l:76,hex:"#ac90f4"},70:{h:257,s:82,l:80,hex:"#baa2f6"},75:{h:256,s:82,l:85,hex:"#cab9f8"},80:{h:256,s:81,l:88,hex:"#d5c8f9"},85:{h:255,s:80,l:92,hex:"#e2dafb"},90:{h:255,s:79,l:94,hex:"#eae4fc"},95:{h:255,s:78,l:97,hex:"#f4f1fd"},100:{h:255,s:77,l:99,hex:"#fbfafe"}},curves:{h:{min:271,max:255,minControl:{x:33,y:260},maxControl:{x:70,y:255}},s:{min:53,max:77,minControl:{x:68,y:57},maxControl:{x:26,y:96}},l:{min:8,max:99,minControl:{x:45,y:43},maxControl:{x:58,y:83}}}},purple:{name:"Purple",hue:284,stops:{0:{h:294,s:47,l:6,hex:"#150816"},5:{h:293,s:50,l:8,hex:"#1c0a1f"},10:{h:292,s:53,l:11,hex:"#270d2b"},15:{h:290,s:56,l:14,hex:"#311038"},20:{h:289,s:59,l:18,hex:"#3f1349"},25:{h:288,s:62,l:22,hex:"#4d155b"},30:{h:287,s:64,l:26,hex:"#5a186d"},35:{h:286,s:67,l:31,hex:"#6b1a84"},40:{h:286,s:69,l:37,hex:"#811d9f"},45:{h:285,s:71,l:43,hex:"#9520bc"},50:{h:284,s:73,l:49,hex:"#a822d8"},55:{h:283,s:74,l:55,hex:"#b137e1"},60:{h:283,s:75,l:62,hex:"#be55e7"},65:{h:282,s:77,l:68,hex:"#c76fec"},70:{h:282,s:77,l:75,hex:"#d38ef0"},75:{h:281,s:78,l:80,hex:"#dba4f4"},80:{h:281,s:79,l:85,hex:"#e4bbf7"},85:{h:280,s:79,l:90,hex:"#ecd1fa"},90:{h:280,s:80,l:94,hex:"#f4e3fc"},95:{h:280,s:80,l:97,hex:"#f9f1fd"},100:{h:280,s:80,l:99,hex:"#fdfafe"}},curves:{h:{min:294,max:280,minControl:{x:32,y:286},maxControl:{x:67,y:280}},s:{min:47,max:80,minControl:{x:34,y:67},maxControl:{x:51,y:79}},l:{min:6,max:99,minControl:{x:48,y:26},maxControl:{x:64,y:85}}},uri:"purple"},pink:{name:"Pink",hue:313,stops:{0:{h:314,s:64,l:5,hex:"#150511"},5:{h:314,s:66,l:7,hex:"#1e0618"},10:{h:313,s:69,l:10,hex:"#2b0823"},15:{h:313,s:71,l:13,hex:"#390a2e"},20:{h:313,s:73,l:16,hex:"#470b3a"},25:{h:313,s:74,l:19,hex:"#540d45"},30:{h:313,s:76,l:23,hex:"#670e54"},35:{h:313,s:77,l:27,hex:"#7a1063"},40:{h:313,s:77,l:32,hex:"#901375"},45:{h:313,s:78,l:37,hex:"#a81588"},50:{h:313,s:77,l:42,hex:"#be199a"},55:{h:313,s:77,l:48,hex:"#d91cb0"},60:{h:313,s:76,l:55,hex:"#e335be"},65:{h:313,s:76,l:63,hex:"#e859c9"},70:{h:312,s:75,l:70,hex:"#ec79d5"},75:{h:312,s:74,l:77,hex:"#f099de"},80:{h:312,s:73,l:83,hex:"#f3b4e7"},85:{h:312,s:72,l:88,hex:"#f6caee"},90:{h:311,s:71,l:92,hex:"#f9dcf4"},95:{h:311,s:70,l:96,hex:"#fceef9"},100:{h:310,s:69,l:99,hex:"#fefbfe"}},curves:{h:{min:314,max:310,minControl:{x:26,y:311},maxControl:{x:67,y:315}},s:{min:64,max:69,minControl:{x:45,y:87},maxControl:{x:58,y:75}},l:{min:5,max:99,minControl:{x:64,y:34},maxControl:{x:62,y:78}}},uri:"pink"},maroon:{name:"Maroon",hue:339,stops:{0:{h:339,s:57,l:6,hex:"#18070d"},5:{h:339,s:62,l:8,hex:"#210811"},10:{h:339,s:66,l:11,hex:"#2f0a16"},15:{h:339,s:70,l:13,hex:"#380a1a"},20:{h:339,s:74,l:17,hex:"#4b0b22"},25:{h:339,s:76,l:20,hex:"#5a0c27"},30:{h:339,s:79,l:24,hex:"#6e0d2f"},35:{h:339,s:81,l:29,hex:"#860e38"},40:{h:339,s:82,l:33,hex:"#990f3f"},45:{h:339,s:83,l:39,hex:"#b6114b"},50:{h:339,s:84,l:45,hex:"#d31256"},55:{h:339,s:84,l:51,hex:"#eb1963"},60:{h:339,s:84,l:57,hex:"#ed3576"},65:{h:339,s:83,l:64,hex:"#ef578c"},70:{h:339,s:82,l:71,hex:"#f278a3"},75:{h:339,s:81,l:77,hex:"#f495b6"},80:{h:339,s:79,l:83,hex:"#f6b1c9"},85:{h:339,s:78,l:88,hex:"#f8c9d9"},90:{h:339,s:76,l:92,hex:"#fadbe6"},95:{h:339,s:73,l:96,hex:"#fcedf3"},100:{h:339,s:71,l:99,hex:"#fefbfc"}},curves:{h:{min:339,max:339,minControl:{x:26,y:339},maxControl:{x:67,y:339}},s:{min:57,max:71,minControl:{x:32,y:90},maxControl:{x:62,y:90}},l:{min:6,max:99,minControl:{x:54,y:28},maxControl:{x:64,y:79}}},uri:"maroon"},grey:{name:"Grey",hue:200,stops:{0:{h:200,s:5,l:5,hex:"#0c0d0d"},5:{h:200,s:5,l:10,hex:"#181a1b"},10:{h:200,s:5,l:14,hex:"#222425"},15:{h:200,s:5,l:19,hex:"#2e3133"},20:{h:200,s:5,l:23,hex:"#383c3e"},25:{h:200,s:5,l:28,hex:"#44494b"},30:{h:200,s:5,l:33,hex:"#505658"},35:{h:200,s:5,l:37,hex:"#5a6063"},40:{h:200,s:5,l:42,hex:"#666d70"},45:{h:200,s:5,l:47,hex:"#727a7e"},50:{h:200,s:5,l:52,hex:"#7e878b"},55:{h:200,s:5,l:56,hex:"#899194"},60:{h:200,s:5,l:61,hex:"#979da1"},65:{h:200,s:5,l:66,hex:"#a4aaad"},70:{h:200,s:5,l:71,hex:"#b1b6b9"},75:{h:200,s:5,l:75,hex:"#bcc0c2"},80:{h:200,s:5,l:80,hex:"#c9cdcf"},85:{h:200,s:5,l:85,hex:"#d7d9db"},90:{h:200,s:5,l:89,hex:"#e2e3e4"},95:{h:200,s:5,l:94,hex:"#eff0f0"},100:{h:200,s:5,l:98,hex:"#fafafa"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:5,max:5,minControl:{x:30,y:5},maxControl:{x:70,y:5}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey",greyscale:!0},grey20:{name:"Grey20",hue:200,stops:{0:{h:200,s:20,l:5,hex:"#0a0e0f"},5:{h:200,s:20,l:10,hex:"#141b1f"},10:{h:200,s:20,l:14,hex:"#1d262b"},15:{h:200,s:20,l:19,hex:"#27343a"},20:{h:200,s:20,l:23,hex:"#2f3f46"},25:{h:200,s:20,l:28,hex:"#394c56"},30:{h:200,s:20,l:33,hex:"#435a65"},35:{h:200,s:20,l:37,hex:"#4b6571"},40:{h:200,s:20,l:42,hex:"#567281"},45:{h:200,s:20,l:47,hex:"#608090"},50:{h:200,s:20,l:52,hex:"#6c8d9d"},55:{h:200,s:20,l:56,hex:"#7896a5"},60:{h:200,s:20,l:61,hex:"#88a2af"},65:{h:200,s:20,l:66,hex:"#97aeba"},70:{h:200,s:20,l:71,hex:"#a6bac4"},75:{h:200,s:20,l:75,hex:"#b3c3cc"},80:{h:200,s:20,l:80,hex:"#c2cfd6"},85:{h:200,s:20,l:85,hex:"#d1dbe0"},90:{h:200,s:20,l:89,hex:"#dde5e9"},95:{h:200,s:20,l:94,hex:"#edf1f3"},100:{h:200,s:20,l:98,hex:"#f9fafb"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:20,max:20,minControl:{x:30,y:20},maxControl:{x:70,y:20}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey20",greyscale:!0},grey40:{name:"Grey40",hue:200,stops:{0:{h:200,s:40,l:5,hex:"#080e12"},5:{h:200,s:40,l:10,hex:"#0f1d24"},10:{h:200,s:40,l:14,hex:"#152832"},15:{h:200,s:40,l:19,hex:"#1d3744"},20:{h:200,s:40,l:23,hex:"#234252"},25:{h:200,s:40,l:28,hex:"#2b5164"},30:{h:200,s:40,l:33,hex:"#325f76"},35:{h:200,s:40,l:37,hex:"#396b84"},40:{h:200,s:40,l:42,hex:"#407996"},45:{h:200,s:40,l:47,hex:"#4888a8"},50:{h:200,s:40,l:52,hex:"#5495b6"},55:{h:200,s:40,l:56,hex:"#629ebc"},60:{h:200,s:40,l:61,hex:"#74a9c3"},65:{h:200,s:40,l:66,hex:"#86b4cb"},70:{h:200,s:40,l:71,hex:"#97bfd3"},75:{h:200,s:40,l:75,hex:"#a6c8d9"},80:{h:200,s:40,l:80,hex:"#b8d3e0"},85:{h:200,s:40,l:85,hex:"#c9dee8"},90:{h:200,s:40,l:89,hex:"#d8e7ee"},95:{h:200,s:40,l:94,hex:"#eaf2f6"},100:{h:200,s:40,l:98,hex:"#f8fbfc"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:40,max:40,minControl:{x:30,y:40},maxControl:{x:70,y:40}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey40",greyscale:!0}},Yr={name:tT,comment:rT,uri:sT,source:aT,ranges:lT},ld=Object.keys(Yr.ranges),oT=Object.entries(Yr.ranges).filter(([,e])=>!e.greyscale).map(([e])=>e),iT=Object.entries(Yr.ranges).filter(([,e])=>e.greyscale).map(([e])=>e),dT=({range:e,setRange:n})=>t.jsxs("div",{children:[t.jsxs("div",{className:"flex space mar-b-0",children:[t.jsx("h3",{children:"Color Range"}),t.jsx("h4",{children:_n(e)&&t.jsx("code",{children:e||""})})]}),t.jsxs("div",{className:"grid-fit gap-2",style:{"--min-width":"2em"},children:[t.jsx(x0,{colors:oT,range:e,setRange:n}),t.jsx("div",{children:" "}),t.jsx(Bs,{color:"brand",selected:e==="brand",select:()=>n("brand")}),t.jsx(x0,{colors:iT,range:e,setRange:n})]})]}),x0=({range:e,setRange:n,colors:r})=>r.map(s=>t.jsx(Bs,{color:s,select:()=>n(s),selected:e==s},s)),li=({stop:e,setStop:n,className:r,title:s,prefix:a})=>t.jsxs("div",{children:[t.jsxs("div",{className:"flex space mar-b-0",children:[t.jsx("h3",{children:s}),t.jsx("h4",{children:_n(e)&&t.jsxs("code",{children:[a,"-",e]})})]}),t.jsx("div",{className:`${r} grid-fit gap-2`,style:{"--min-width":"2em"},children:wo(0,100,5).map(l=>t.jsx(Bs,{color:`bgc-${l} bdc-${l} fgc-${l>50?"0":"100"} bgd-${l} bdd-${l} fgd-${l>50?"0":"100"}`,iconColor:l>50?"black":"white",selected:e===l,select:()=>n(l)},l))})]}),cT=[0,1,2,3,4,6,8,10,12,16,20,24,28,32],b0=({spacing:e,setSpacing:n,className:r,title:s,prefix:a,range:l})=>t.jsxs("div",{children:[t.jsxs("div",{className:"flex space mar-b-0",children:[t.jsx("h3",{children:s}),t.jsx("h4",{children:_n(e)&&t.jsxs("code",{children:[a,"-",e]})})]}),t.jsx("div",{className:`${r} grid-fit gap-2`,style:{"--min-width":"2em"},children:cT.map(o=>t.jsx(Bs,{color:l,className:"wide",alt:t.jsx("span",{className:"font-mono",children:o}),selected:e===o,select:()=>n(o)},o))})]}),uT=["smallest","smaller","small","medium","large","larger","largest"],hT=({size:e,setSize:n,title:r="Size",range:s})=>t.jsxs("div",{children:[t.jsxs("div",{className:"flex space mar-b-0",children:[t.jsx("h3",{children:r}),t.jsx("h4",{children:_n(e)&&t.jsx("code",{children:e})})]}),t.jsx("div",{className:"grid-fit gap-2",style:{"--min-width":"2em"},children:uT.map(a=>t.jsx(Bs,{color:s,className:"wide",alt:t.jsx("span",{className:"font-mono",children:a}),selected:e===a,select:()=>n(a)},a))})]}),pT=[0,1,2,3,4,5,6,8,10],y0=({border:e,setBorder:n,className:r,title:s,prefix:a,range:l})=>t.jsxs("div",{children:[t.jsxs("div",{className:"flex space mar-b-0",children:[t.jsx("h3",{children:s}),t.jsx("h4",{children:_n(e)&&t.jsxs("code",{children:[a,"-",e]})})]}),t.jsx("div",{className:`${r} grid-fit gap-2`,style:{"--min-width":"2em"},children:pT.map(o=>t.jsx(Bs,{color:l,className:"wide",alt:t.jsx("span",{className:"font-mono",children:o}),selected:e===o,select:()=>n(o)},o))})]}),fT=({checked:e,toggle:n,label:r})=>t.jsx("div",{className:"field",children:t.jsxs("label",{className:"checkbox border no-focus wide",children:[t.jsx("input",{type:"checkbox",checked:e,onChange:n}),r]})}),mT=({shadow:e,setShadow:n,className:r,title:s="Shadow",prefix:a="shadow",range:l})=>t.jsxs("div",{children:[t.jsxs("div",{className:"flex space mar-b-0",children:[t.jsx("h3",{children:s}),t.jsx("h4",{children:_n(e)&&t.jsxs("code",{children:[a,"-",e]})})]}),t.jsx("div",{className:`${r} grid-fit gap-2`,style:{"--min-width":"2em"},children:wo(0,5).map(o=>t.jsx(Bs,{color:l,className:"wide",alt:t.jsx("span",{className:"font-mono",children:o}),selected:e===o,select:()=>n(o)},o))})]}),gT=({options:e,setOption:n,toggleOption:r})=>t.jsxs("div",{className:"surface-5 pad-4",children:[t.jsxs("div",{className:"flex space baseline stack-desktop mar-b-2",children:[t.jsx("h2",{className:"mar-v-none",children:"Controls"}),t.jsx("h3",{className:"text-right mar-v-none",children:t.jsx("code",{children:'class="..."'})})]}),t.jsxs("div",{className:"grid gap-2 small",children:[t.jsx(dT,{range:e.range,setRange:n("range")}),t.jsx(li,{title:"Background Color Stop",prefix:"bgc",className:e.range,stop:e.bgc,setStop:n("bgc")}),t.jsx(li,{title:"Foreground Color Stop",prefix:"fgc",className:e.range,stop:e.fgc,setStop:n("fgc")}),t.jsx(li,{title:"Heading Color Stop",prefix:"hdc",className:e.range,stop:e.hdc,setStop:n("hdc")}),t.jsx(li,{title:"Border Color Stop",prefix:"bdc",className:e.range,stop:e.bdc,setStop:n("bdc")}),t.jsx(y0,{title:"Border Width",prefix:"bdw",border:e.bdw,setBorder:n("bdw"),range:e.range}),t.jsx(y0,{title:"Border Radius",prefix:"bdr",border:e.bdr,setBorder:n("bdr"),range:e.range}),t.jsx(hT,{title:"Size",size:e.size,setSize:n("size"),range:e.range}),t.jsx(b0,{title:"Margin",prefix:"mar",className:e.mar,spacing:e.mar,setSpacing:n("mar"),range:e.range}),t.jsx(b0,{title:"Padding",prefix:"pad",className:e.pad,spacing:e.pad,setSpacing:n("pad"),range:e.range}),t.jsx(mT,{title:"Shadow",prefix:"shadow",shadow:e.shadow,setShadow:n("shadow"),range:e.range}),t.jsxs("div",{children:[t.jsx("h3",{className:"mar-b-2",children:"Options"}),t.jsx("div",{className:"grid-fill",style:{"--min-width":"10rem"},children:t.jsx(fT,{label:"Show Border",checked:e.border,toggle:r("border")})})]})]})]}),Co=e=>e.filter(n=>_n(n)&&n).join(" ").replace(/^\s+/,"").replaceAll(/\s+/g," "),A5=(e,n={},...r)=>Co(Object.entries(e).reduce((s,[a,l])=>(l&&s.push(n[a]||a),s),[...r])),P5=(e,n="",...r)=>Co([...v5(n).filter(s=>e[s]),...r]),vT=({options:e})=>{const n=xT(e);return t.jsxs("div",{className:"surface-5 pad-4",children:[t.jsxs("div",{className:"flex space baseline stack-desktop mar-b-2",children:[t.jsx("h2",{className:"mar-v-none",children:"Output"}),t.jsx("div",{className:"text-right",children:t.jsxs("code",{children:['class="',n,'"']})})]}),t.jsx("div",{className:"border surface-4",style:{borderStyle:"dotted"},children:t.jsxs("div",{className:n,children:[t.jsx("h3",{className:"mar-b-2",children:"It's One Louder"}),"You see, most... most blokes, you know, will be playing at ten. You're on ten here... all the way up... all the way up... all the way up. You're on ten on your guitar...where can you go from there? Where? Nowhere. Exactly. What we do is if we need that extra... push over the cliff... you know what we do? Put it up to eleven. Eleven. Exactly. One louder."]})})]})},xT=e=>Co([e.range,_n(e.bgc)?`bgc-${e.bgc}`:"",_n(e.fgc)?`fgc-${e.fgc}`:"",_n(e.hdc)?`hdc-${e.hdc}`:"",_n(e.bdc)?`bdc-${e.bdc}`:"",_n(e.bdw)?`bdw-${e.bdw}`:"",_n(e.bdr)?`bdr-${e.bdr}`:"",e.size,_n(e.mar)?`mar-${e.mar}`:"",_n(e.pad)?`pad-${e.pad}`:"",_n(e.shadow)?`shadow-${e.shadow}`:"",e.border?"border":""]),bT=()=>{const[e,n]=F.useState({range:"brand",bgc:90,fgc:30,hdc:20,bdc:60,bdr:3,bdw:2,pad:4,mar:6,shadow:2,border:!0}),r=a=>()=>n(l=>({...l,[a]:!l[a]})),s=a=>l=>n(o=>({...o,[a]:l}));return t.jsxs("div",{className:"grid gap-8",children:[t.jsx(vT,{options:e}),t.jsx(gT,{options:e,setOption:s,toggleOption:r})]})},yT=()=>t.jsxs("div",{children:[t.jsx("h1",{children:"Color Demo"}),t.jsxs("div",{className:"grid-2 gap-h-8 stack-desktop",children:[t.jsxs("div",{children:[t.jsxs("p",{children:["One of the novel approaches that Badger CSS employs is to provide CSS classes for each of the colors in the palette.  There are then further CSS classes that can be used to select the particular shade (or color"," ",'"stop") from that range to use for the background, foreground, heading and border colors.']}),t.jsxs("p",{children:["One benefit of this approach is that it allows you to design color agnostic components that work with both light and dark themes, and can then be used with any color range.  For some examples, see the ",t.jsx(Gp,{})," and ",t.jsx(qS,{})," pages."]}),t.jsx("p",{children:"Another more practical benefit is that it avoid the combinatorial explosion of CSS classes required to cover every combination of color range and stop for foreground, background, heading and border colors."})]}),t.jsxs("div",{children:[t.jsx("p",{children:"Further utility classes are provided for selecting font size, border width and radius, margins, padding, shadows and various layout options. They're similar to what you'll find in other CSS toolkits."}),t.jsx("p",{children:"The choice about what is included and what isn't is entirely arbitrary but I lean towards minimalism and have only included the kind of utility classes that I use in most, if not all web sites. It's really easy for you to add in your own utility classes, or change the settings for the provided utilities, if you want to."}),t.jsx("p",{children:"So without further ado, click on the buttons below to select different colors and layout options.  Each one selects a CSS class which affects the way the output is displayed."})]})]}),t.jsx(bT,{})]}),wT=Object.freeze(Object.defineProperty({__proto__:null,default:yT},Symbol.toStringTag,{value:"Module"})),S=({Component:e,code:n,html:r,children:s,className:a="",caption:l,fixed:o,expand:i,language:c})=>t.jsxs("div",{className:`example grid-2 gap-8 stack-desktop ${a}`,children:[t.jsx("div",{className:"source",children:t.jsx(_e,{caption:l,code:n||r,expand:i,fixed:o,language:r?"html":c})}),!!s&&t.jsx("div",{className:"interim",children:s}),e?t.jsxs("div",{className:"output",children:[t.jsx("h4",{className:"caption",children:"Output"}),t.jsx(e,{})]}):null,r?t.jsxs("div",{className:"output",children:[t.jsx("h4",{className:"caption",children:"Output"}),t.jsx("div",{dangerouslySetInnerHTML:{__html:r}})]}):null]}),jT=`<div class="gradient pad-8 fgc-100">
  Default gradient
</div>`,CT=`<div class="grid-1 gap-2">
  <div class="red gradient pad-8 fgc-90">
    Red gradient
  </div>
  <div class="brown gradient pad-8 fgc-90">
    Brown gradient
  </div>
  <div class="orange gradient pad-8 fgc-90">
    Orange gradient
  </div>
  <div class="yellow gradient pad-8 fgc-90">
    Yellow gradient
  </div>
  <div class="olive gradient pad-8 fgc-90">
    Olive gradient
  </div>
  <div class="green gradient pad-8 fgc-90">
    Green gradient
  </div>
  <div class="teal gradient pad-8 fgc-90">
    Teal gradient
  </div>
  <div class="blue gradient pad-8 fgc-90">
    Blue gradient
  </div>
  <div class="indigo gradient pad-8 fgc-90">
    Indigo gradient
  </div>
  <div class="violet gradient pad-8 fgc-90">
    Violet gradient
  </div>
  <div class="purple gradient pad-8 fgc-90">
    Purple gradient
  </div>
  <div class="pink gradient pad-8 fgc-90">
    Pink gradient
  </div>
  <div class="maroon gradient pad-8 fgc-90">
    Maroon gradient
  </div>
</div>`,kT=`<div class="grid-1 gap-2">
  <div class="red gradient angle-0 pad-8 fgc-100">
    Gradient angle 0&deg;
  </div>
  <div class="brown gradient angle-30 pad-8 fgc-100">
    Gradient angle 30&deg;
  </div>
  <div class="yellow gradient angle-60 pad-8 fgc-100">
    Gradient angle 60&deg;
  </div>
  <div class="orange gradient angle-90 pad-8 fgc-100">
    Gradient angle 90&deg;
  </div>
  <div class="olive gradient angle-120 pad-8 fgc-100">
    Gradient angle 120&deg;
  </div>
  <div class="green gradient angle-150 pad-8 fgc-100">
    Gradient angle 150&deg;
  </div>
  <div class="teal gradient angle-180 pad-8 fgc-100">
    Gradient angle 180&deg;
  </div>
  <div class="blue gradient angle-210 pad-8 fgc-100">
    Gradient angle 210&deg;
  </div>
  <div class="indigo gradient angle-240 pad-8 fgc-100">
    Gradient angle 240&deg;
  </div>
  <div class="violet gradient angle-270 pad-8 fgc-100">
    Gradient angle 270&deg;
  </div>
  <div class="purple gradient angle-300 pad-8 fgc-100">
    Gradient angle 300&deg;
  </div>
  <div class="pink gradient angle-330 pad-8 fgc-100">
    Gradient angle 330&deg;
  </div>
</div>
`,ST=`<style>
  .red-yellow {
    --gradient-from: var(--red-40);
    --gradient-to: var(--yellow-60);
  }
  .olive-green {
    --gradient-from: var(--olive-50);
    --gradient-to: var(--green-60);
  }
  .violet-purple {
    --gradient-from: var(--violet-40);
    --gradient-to: var(--purple-60);
  }
  .one-louder {
    --gradient-angle: 11deg;
  }
</style>
<div class="grid-1 gap-2">
  <div class="red-yellow one-louder gradient pad-8 fgc-100">
    Red / Yellow Gradient
  </div>
  <div class="olive-green one-louder gradient pad-8 fgc-100">
    Olive / Green Gradient
  </div>
  <div class="violet-purple one-louder gradient pad-8 fgc-100">
    Violet / Purple Gradient
  </div>
</div>
`,TT=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Color Gradients"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"gradient"})," class can be added to an element to add a linear gradient background.  The default colors are"," ",t.jsx("code",{children:"color-40"})," and ",t.jsx("code",{children:"color-60"}),", both of which default to the corresponding shades of grey.  The default angle is 0° (i.e. bottom to top)."]}),t.jsx(S,{html:jT,caption:"Default Gradient",expand:!0}),t.jsx("h2",{children:"Color Ranges"}),t.jsx("p",{children:"Add one of the standard color classes to set the color range."}),t.jsx(S,{html:CT,caption:"Gradient Colors",expand:!0}),t.jsx("h2",{children:"Gradient Angle"}),t.jsxs("p",{children:["The gradient angle can be set using one of the ",t.jsx("code",{children:"angle-NNN"})," classes where ",t.jsx("code",{children:"NNN"})," is a multiple of 30 (degrees)."]}),t.jsx(S,{html:kT,caption:"Gradient Angle",expand:!0}),t.jsx("h2",{children:"Custom Gradients"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"--gradient-from"})," and ",t.jsx("code",{children:"--gradient-to"})," CSS custom properties define the start and end colors for the gradient. The ",t.jsx("code",{children:"--gradient-angle"})," property sets the gradient angle."]}),t.jsx(S,{html:ST,caption:"Custom Gradients",expand:!0})]}),NT=Object.freeze(Object.defineProperty({__proto__:null,default:TT},Symbol.toStringTag,{value:"Module"}));var R5={exports:{}};/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */(function(e,n){(function(r,s){e.exports=s()})(Wl,function(){for(var r=function(d,u,p){return u===void 0&&(u=0),p===void 0&&(p=1),d<u?u:d>p?p:d},s=r,a=function(d){d._clipped=!1,d._unclipped=d.slice(0);for(var u=0;u<=3;u++)u<3?((d[u]<0||d[u]>255)&&(d._clipped=!0),d[u]=s(d[u],0,255)):u===3&&(d[u]=s(d[u],0,1));return d},l={},o=0,i=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];o<i.length;o+=1){var c=i[o];l["[object "+c+"]"]=c.toLowerCase()}var h=function(d){return l[Object.prototype.toString.call(d)]||"object"},m=h,x=function(d,u){return u===void 0&&(u=null),d.length>=3?Array.prototype.slice.call(d):m(d[0])=="object"&&u?u.split("").filter(function(p){return d[0][p]!==void 0}).map(function(p){return d[0][p]}):d[0]},w=h,$=function(d){if(d.length<2)return null;var u=d.length-1;return w(d[u])=="string"?d[u].toLowerCase():null},_=Math.PI,C={clip_rgb:a,limit:r,type:h,unpack:x,last:$,PI:_,TWOPI:_*2,PITHIRD:_/3,DEG2RAD:_/180,RAD2DEG:180/_},E={format:{},autodetect:[]},b=C.last,f=C.clip_rgb,v=C.type,g=E,N=function(){for(var u=[],p=arguments.length;p--;)u[p]=arguments[p];var y=this;if(v(u[0])==="object"&&u[0].constructor&&u[0].constructor===this.constructor)return u[0];var T=b(u),L=!1;if(!T){L=!0,g.sorted||(g.autodetect=g.autodetect.sort(function(W,K){return K.p-W.p}),g.sorted=!0);for(var j=0,I=g.autodetect;j<I.length;j+=1){var M=I[j];if(T=M.test.apply(M,u),T)break}}if(g.format[T]){var B=g.format[T].apply(null,L?u:u.slice(0,-1));y._rgb=f(B)}else throw new Error("unknown format: "+u);y._rgb.length===3&&y._rgb.push(1)};N.prototype.toString=function(){return v(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var k=N,A=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];return new(Function.prototype.bind.apply(A.Color,[null].concat(d)))};A.Color=k,A.version="2.4.2";var R=A,D=C.unpack,Y=Math.max,he=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];var p=D(d,"rgb"),y=p[0],T=p[1],L=p[2];y=y/255,T=T/255,L=L/255;var j=1-Y(y,Y(T,L)),I=j<1?1/(1-j):0,M=(1-y-j)*I,B=(1-T-j)*I,W=(1-L-j)*I;return[M,B,W,j]},ie=he,De=C.unpack,sn=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];d=De(d,"cmyk");var p=d[0],y=d[1],T=d[2],L=d[3],j=d.length>4?d[4]:1;return L===1?[0,0,0,j]:[p>=1?0:255*(1-p)*(1-L),y>=1?0:255*(1-y)*(1-L),T>=1?0:255*(1-T)*(1-L),j]},Ge=sn,Fe=R,Ve=k,z=E,Z=C.unpack,X=C.type,ae=ie;Ve.prototype.cmyk=function(){return ae(this._rgb)},Fe.cmyk=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];return new(Function.prototype.bind.apply(Ve,[null].concat(d,["cmyk"])))},z.format.cmyk=Ge,z.autodetect.push({p:2,test:function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];if(d=Z(d,"cmyk"),X(d)==="array"&&d.length===4)return"cmyk"}});var pe=C.unpack,Dn=C.last,fe=function(d){return Math.round(d*100)/100},Je=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];var p=pe(d,"hsla"),y=Dn(d)||"lsa";return p[0]=fe(p[0]||0),p[1]=fe(p[1]*100)+"%",p[2]=fe(p[2]*100)+"%",y==="hsla"||p.length>3&&p[3]<1?(p[3]=p.length>3?p[3]:1,y="hsla"):p.length=3,y+"("+p.join(",")+")"},Ye=Je,pn=C.unpack,Pn=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];d=pn(d,"rgba");var p=d[0],y=d[1],T=d[2];p/=255,y/=255,T/=255;var L=Math.min(p,y,T),j=Math.max(p,y,T),I=(j+L)/2,M,B;return j===L?(M=0,B=Number.NaN):M=I<.5?(j-L)/(j+L):(j-L)/(2-j-L),p==j?B=(y-T)/(j-L):y==j?B=2+(T-p)/(j-L):T==j&&(B=4+(p-y)/(j-L)),B*=60,B<0&&(B+=360),d.length>3&&d[3]!==void 0?[B,M,I,d[3]]:[B,M,I]},ts=Pn,rs=C.unpack,Xt=C.last,Ya=Ye,ss=ts,Za=Math.round,as=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];var p=rs(d,"rgba"),y=Xt(d)||"rgb";return y.substr(0,3)=="hsl"?Ya(ss(p),y):(p[0]=Za(p[0]),p[1]=Za(p[1]),p[2]=Za(p[2]),(y==="rgba"||p.length>3&&p[3]<1)&&(p[3]=p.length>3?p[3]:1,y="rgba"),y+"("+p.slice(0,y==="rgb"?3:4).join(",")+")")},To=as,qa=C.unpack,ls=Math.round,Ka=function(){for(var d,u=[],p=arguments.length;p--;)u[p]=arguments[p];u=qa(u,"hsl");var y=u[0],T=u[1],L=u[2],j,I,M;if(T===0)j=I=M=L*255;else{var B=[0,0,0],W=[0,0,0],K=L<.5?L*(1+T):L+T-L*T,U=2*L-K,ne=y/360;B[0]=ne+1/3,B[1]=ne,B[2]=ne-1/3;for(var J=0;J<3;J++)B[J]<0&&(B[J]+=1),B[J]>1&&(B[J]-=1),6*B[J]<1?W[J]=U+(K-U)*6*B[J]:2*B[J]<1?W[J]=K:3*B[J]<2?W[J]=U+(K-U)*(2/3-B[J])*6:W[J]=U;d=[ls(W[0]*255),ls(W[1]*255),ls(W[2]*255)],j=d[0],I=d[1],M=d[2]}return u.length>3?[j,I,M,u[3]]:[j,I,M,1]},Jt=Ka,Qa=Jt,Xa=E,Ja=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,No=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,wr=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,os=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,el=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,Ds=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Lo=Math.round,_o=function(d){d=d.toLowerCase().trim();var u;if(Xa.format.named)try{return Xa.format.named(d)}catch{}if(u=d.match(Ja)){for(var p=u.slice(1,4),y=0;y<3;y++)p[y]=+p[y];return p[3]=1,p}if(u=d.match(No)){for(var T=u.slice(1,5),L=0;L<4;L++)T[L]=+T[L];return T}if(u=d.match(wr)){for(var j=u.slice(1,4),I=0;I<3;I++)j[I]=Lo(j[I]*2.55);return j[3]=1,j}if(u=d.match(os)){for(var M=u.slice(1,5),B=0;B<3;B++)M[B]=Lo(M[B]*2.55);return M[3]=+M[3],M}if(u=d.match(el)){var W=u.slice(1,4);W[1]*=.01,W[2]*=.01;var K=Qa(W);return K[3]=1,K}if(u=d.match(Ds)){var U=u.slice(1,4);U[1]*=.01,U[2]*=.01;var ne=Qa(U);return ne[3]=+u[4],ne}};_o.test=function(d){return Ja.test(d)||No.test(d)||wr.test(d)||os.test(d)||el.test(d)||Ds.test(d)};var $o=_o,Gd=R,P=k,O=E,H=C.type,q=To,oe=$o;P.prototype.css=function(d){return q(this._rgb,d)},Gd.css=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];return new(Function.prototype.bind.apply(P,[null].concat(d,["css"])))},O.format.css=oe,O.autodetect.push({p:5,test:function(d){for(var u=[],p=arguments.length-1;p-- >0;)u[p]=arguments[p+1];if(!u.length&&H(d)==="string"&&oe.test(d))return"css"}});var de=k,ce=R,ue=E,se=C.unpack;ue.format.gl=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];var p=se(d,"rgba");return p[0]*=255,p[1]*=255,p[2]*=255,p},ce.gl=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];return new(Function.prototype.bind.apply(de,[null].concat(d,["gl"])))},de.prototype.gl=function(){var d=this._rgb;return[d[0]/255,d[1]/255,d[2]/255,d[3]]};var Te=C.unpack,Me=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];var p=Te(d,"rgb"),y=p[0],T=p[1],L=p[2],j=Math.min(y,T,L),I=Math.max(y,T,L),M=I-j,B=M*100/255,W=j/(255-M)*100,K;return M===0?K=Number.NaN:(y===I&&(K=(T-L)/M),T===I&&(K=2+(L-y)/M),L===I&&(K=4+(y-T)/M),K*=60,K<0&&(K+=360)),[K,B,W]},yn=Me,on=C.unpack,fn=Math.floor,xt=function(){for(var d,u,p,y,T,L,j=[],I=arguments.length;I--;)j[I]=arguments[I];j=on(j,"hcg");var M=j[0],B=j[1],W=j[2],K,U,ne;W=W*255;var J=B*255;if(B===0)K=U=ne=W;else{M===360&&(M=0),M>360&&(M-=360),M<0&&(M+=360),M/=60;var ge=fn(M),je=M-ge,Ne=W*(1-B),Ie=Ne+J*(1-je),Sn=Ne+J*je,jn=Ne+J;switch(ge){case 0:d=[jn,Sn,Ne],K=d[0],U=d[1],ne=d[2];break;case 1:u=[Ie,jn,Ne],K=u[0],U=u[1],ne=u[2];break;case 2:p=[Ne,jn,Sn],K=p[0],U=p[1],ne=p[2];break;case 3:y=[Ne,Ie,jn],K=y[0],U=y[1],ne=y[2];break;case 4:T=[Sn,Ne,jn],K=T[0],U=T[1],ne=T[2];break;case 5:L=[jn,Ne,Ie],K=L[0],U=L[1],ne=L[2];break}}return[K,U,ne,j.length>3?j[3]:1]},is=xt,nl=C.unpack,zs=C.type,Nt=R,ds=k,Ws=E,tl=yn;ds.prototype.hcg=function(){return tl(this._rgb)},Nt.hcg=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];return new(Function.prototype.bind.apply(ds,[null].concat(d,["hcg"])))},Ws.format.hcg=is,Ws.autodetect.push({p:1,test:function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];if(d=nl(d,"hcg"),zs(d)==="array"&&d.length===3)return"hcg"}});var rl=C.unpack,Hs=C.last,Be=Math.round,qn=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];var p=rl(d,"rgba"),y=p[0],T=p[1],L=p[2],j=p[3],I=Hs(d)||"auto";j===void 0&&(j=1),I==="auto"&&(I=j<1?"rgba":"rgb"),y=Be(y),T=Be(T),L=Be(L);var M=y<<16|T<<8|L,B="000000"+M.toString(16);B=B.substr(B.length-6);var W="0"+Be(j*255).toString(16);switch(W=W.substr(W.length-2),I.toLowerCase()){case"rgba":return"#"+B+W;case"argb":return"#"+W+B;default:return"#"+B}},er=qn,mn=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,sl=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,Io=function(d){if(d.match(mn)){(d.length===4||d.length===7)&&(d=d.substr(1)),d.length===3&&(d=d.split(""),d=d[0]+d[0]+d[1]+d[1]+d[2]+d[2]);var u=parseInt(d,16),p=u>>16,y=u>>8&255,T=u&255;return[p,y,T,1]}if(d.match(sl)){(d.length===5||d.length===9)&&(d=d.substr(1)),d.length===4&&(d=d.split(""),d=d[0]+d[0]+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]);var L=parseInt(d,16),j=L>>24&255,I=L>>16&255,M=L>>8&255,B=Math.round((L&255)/255*100)/100;return[j,I,M,B]}throw new Error("unknown hex color: "+d)},Eo=Io,o4=R,gf=k,i4=C.type,vf=E,d4=er;gf.prototype.hex=function(d){return d4(this._rgb,d)},o4.hex=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];return new(Function.prototype.bind.apply(gf,[null].concat(d,["hex"])))},vf.format.hex=Eo,vf.autodetect.push({p:4,test:function(d){for(var u=[],p=arguments.length-1;p-- >0;)u[p]=arguments[p+1];if(!u.length&&i4(d)==="string"&&[3,4,5,6,7,8,9].indexOf(d.length)>=0)return"hex"}});var c4=C.unpack,xf=C.TWOPI,u4=Math.min,h4=Math.sqrt,p4=Math.acos,f4=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];var p=c4(d,"rgb"),y=p[0],T=p[1],L=p[2];y/=255,T/=255,L/=255;var j,I=u4(y,T,L),M=(y+T+L)/3,B=M>0?1-I/M:0;return B===0?j=NaN:(j=(y-T+(y-L))/2,j/=h4((y-T)*(y-T)+(y-L)*(T-L)),j=p4(j),L>T&&(j=xf-j),j/=xf),[j*360,B,M]},m4=f4,g4=C.unpack,Vd=C.limit,Us=C.TWOPI,Yd=C.PITHIRD,Gs=Math.cos,v4=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];d=g4(d,"hsi");var p=d[0],y=d[1],T=d[2],L,j,I;return isNaN(p)&&(p=0),isNaN(y)&&(y=0),p>360&&(p-=360),p<0&&(p+=360),p/=360,p<1/3?(I=(1-y)/3,L=(1+y*Gs(Us*p)/Gs(Yd-Us*p))/3,j=1-(I+L)):p<2/3?(p-=1/3,L=(1-y)/3,j=(1+y*Gs(Us*p)/Gs(Yd-Us*p))/3,I=1-(L+j)):(p-=2/3,j=(1-y)/3,I=(1+y*Gs(Us*p)/Gs(Yd-Us*p))/3,L=1-(j+I)),L=Vd(T*L*3),j=Vd(T*j*3),I=Vd(T*I*3),[L*255,j*255,I*255,d.length>3?d[3]:1]},x4=v4,b4=C.unpack,y4=C.type,w4=R,bf=k,yf=E,j4=m4;bf.prototype.hsi=function(){return j4(this._rgb)},w4.hsi=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];return new(Function.prototype.bind.apply(bf,[null].concat(d,["hsi"])))},yf.format.hsi=x4,yf.autodetect.push({p:2,test:function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];if(d=b4(d,"hsi"),y4(d)==="array"&&d.length===3)return"hsi"}});var C4=C.unpack,k4=C.type,S4=R,wf=k,jf=E,T4=ts;wf.prototype.hsl=function(){return T4(this._rgb)},S4.hsl=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];return new(Function.prototype.bind.apply(wf,[null].concat(d,["hsl"])))},jf.format.hsl=Jt,jf.autodetect.push({p:2,test:function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];if(d=C4(d,"hsl"),k4(d)==="array"&&d.length===3)return"hsl"}});var N4=C.unpack,L4=Math.min,_4=Math.max,$4=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];d=N4(d,"rgb");var p=d[0],y=d[1],T=d[2],L=L4(p,y,T),j=_4(p,y,T),I=j-L,M,B,W;return W=j/255,j===0?(M=Number.NaN,B=0):(B=I/j,p===j&&(M=(y-T)/I),y===j&&(M=2+(T-p)/I),T===j&&(M=4+(p-y)/I),M*=60,M<0&&(M+=360)),[M,B,W]},I4=$4,E4=C.unpack,M4=Math.floor,A4=function(){for(var d,u,p,y,T,L,j=[],I=arguments.length;I--;)j[I]=arguments[I];j=E4(j,"hsv");var M=j[0],B=j[1],W=j[2],K,U,ne;if(W*=255,B===0)K=U=ne=W;else{M===360&&(M=0),M>360&&(M-=360),M<0&&(M+=360),M/=60;var J=M4(M),ge=M-J,je=W*(1-B),Ne=W*(1-B*ge),Ie=W*(1-B*(1-ge));switch(J){case 0:d=[W,Ie,je],K=d[0],U=d[1],ne=d[2];break;case 1:u=[Ne,W,je],K=u[0],U=u[1],ne=u[2];break;case 2:p=[je,W,Ie],K=p[0],U=p[1],ne=p[2];break;case 3:y=[je,Ne,W],K=y[0],U=y[1],ne=y[2];break;case 4:T=[Ie,je,W],K=T[0],U=T[1],ne=T[2];break;case 5:L=[W,je,Ne],K=L[0],U=L[1],ne=L[2];break}}return[K,U,ne,j.length>3?j[3]:1]},P4=A4,R4=C.unpack,O4=C.type,F4=R,Cf=k,kf=E,B4=I4;Cf.prototype.hsv=function(){return B4(this._rgb)},F4.hsv=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];return new(Function.prototype.bind.apply(Cf,[null].concat(d,["hsv"])))},kf.format.hsv=P4,kf.autodetect.push({p:2,test:function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];if(d=R4(d,"hsv"),O4(d)==="array"&&d.length===3)return"hsv"}});var Mo={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},Vs=Mo,D4=C.unpack,Sf=Math.pow,z4=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];var p=D4(d,"rgb"),y=p[0],T=p[1],L=p[2],j=W4(y,T,L),I=j[0],M=j[1],B=j[2],W=116*M-16;return[W<0?0:W,500*(I-M),200*(M-B)]},Zd=function(d){return(d/=255)<=.04045?d/12.92:Sf((d+.055)/1.055,2.4)},qd=function(d){return d>Vs.t3?Sf(d,1/3):d/Vs.t2+Vs.t0},W4=function(d,u,p){d=Zd(d),u=Zd(u),p=Zd(p);var y=qd((.4124564*d+.3575761*u+.1804375*p)/Vs.Xn),T=qd((.2126729*d+.7151522*u+.072175*p)/Vs.Yn),L=qd((.0193339*d+.119192*u+.9503041*p)/Vs.Zn);return[y,T,L]},Tf=z4,Ys=Mo,H4=C.unpack,U4=Math.pow,G4=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];d=H4(d,"lab");var p=d[0],y=d[1],T=d[2],L,j,I,M,B,W;return j=(p+16)/116,L=isNaN(y)?j:j+y/500,I=isNaN(T)?j:j-T/200,j=Ys.Yn*Qd(j),L=Ys.Xn*Qd(L),I=Ys.Zn*Qd(I),M=Kd(3.2404542*L-1.5371385*j-.4985314*I),B=Kd(-.969266*L+1.8760108*j+.041556*I),W=Kd(.0556434*L-.2040259*j+1.0572252*I),[M,B,W,d.length>3?d[3]:1]},Kd=function(d){return 255*(d<=.00304?12.92*d:1.055*U4(d,1/2.4)-.055)},Qd=function(d){return d>Ys.t1?d*d*d:Ys.t2*(d-Ys.t0)},Nf=G4,V4=C.unpack,Y4=C.type,Z4=R,Lf=k,_f=E,q4=Tf;Lf.prototype.lab=function(){return q4(this._rgb)},Z4.lab=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];return new(Function.prototype.bind.apply(Lf,[null].concat(d,["lab"])))},_f.format.lab=Nf,_f.autodetect.push({p:2,test:function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];if(d=V4(d,"lab"),Y4(d)==="array"&&d.length===3)return"lab"}});var K4=C.unpack,Q4=C.RAD2DEG,X4=Math.sqrt,J4=Math.atan2,ex=Math.round,nx=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];var p=K4(d,"lab"),y=p[0],T=p[1],L=p[2],j=X4(T*T+L*L),I=(J4(L,T)*Q4+360)%360;return ex(j*1e4)===0&&(I=Number.NaN),[y,j,I]},$f=nx,tx=C.unpack,rx=Tf,sx=$f,ax=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];var p=tx(d,"rgb"),y=p[0],T=p[1],L=p[2],j=rx(y,T,L),I=j[0],M=j[1],B=j[2];return sx(I,M,B)},lx=ax,ox=C.unpack,ix=C.DEG2RAD,dx=Math.sin,cx=Math.cos,ux=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];var p=ox(d,"lch"),y=p[0],T=p[1],L=p[2];return isNaN(L)&&(L=0),L=L*ix,[y,cx(L)*T,dx(L)*T]},If=ux,hx=C.unpack,px=If,fx=Nf,mx=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];d=hx(d,"lch");var p=d[0],y=d[1],T=d[2],L=px(p,y,T),j=L[0],I=L[1],M=L[2],B=fx(j,I,M),W=B[0],K=B[1],U=B[2];return[W,K,U,d.length>3?d[3]:1]},Ef=mx,gx=C.unpack,vx=Ef,xx=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];var p=gx(d,"hcl").reverse();return vx.apply(void 0,p)},bx=xx,yx=C.unpack,wx=C.type,Mf=R,Ao=k,Xd=E,Af=lx;Ao.prototype.lch=function(){return Af(this._rgb)},Ao.prototype.hcl=function(){return Af(this._rgb).reverse()},Mf.lch=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];return new(Function.prototype.bind.apply(Ao,[null].concat(d,["lch"])))},Mf.hcl=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];return new(Function.prototype.bind.apply(Ao,[null].concat(d,["hcl"])))},Xd.format.lch=Ef,Xd.format.hcl=bx,["lch","hcl"].forEach(function(d){return Xd.autodetect.push({p:2,test:function(){for(var u=[],p=arguments.length;p--;)u[p]=arguments[p];if(u=yx(u,d),wx(u)==="array"&&u.length===3)return d}})});var jx={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},Pf=jx,Cx=k,Rf=E,kx=C.type,al=Pf,Sx=Eo,Tx=er;Cx.prototype.name=function(){for(var d=Tx(this._rgb,"rgb"),u=0,p=Object.keys(al);u<p.length;u+=1){var y=p[u];if(al[y]===d)return y.toLowerCase()}return d},Rf.format.named=function(d){if(d=d.toLowerCase(),al[d])return Sx(al[d]);throw new Error("unknown color name: "+d)},Rf.autodetect.push({p:5,test:function(d){for(var u=[],p=arguments.length-1;p-- >0;)u[p]=arguments[p+1];if(!u.length&&kx(d)==="string"&&al[d.toLowerCase()])return"named"}});var Nx=C.unpack,Lx=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];var p=Nx(d,"rgb"),y=p[0],T=p[1],L=p[2];return(y<<16)+(T<<8)+L},_x=Lx,$x=C.type,Ix=function(d){if($x(d)=="number"&&d>=0&&d<=16777215){var u=d>>16,p=d>>8&255,y=d&255;return[u,p,y,1]}throw new Error("unknown num color: "+d)},Ex=Ix,Mx=R,Of=k,Ff=E,Ax=C.type,Px=_x;Of.prototype.num=function(){return Px(this._rgb)},Mx.num=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];return new(Function.prototype.bind.apply(Of,[null].concat(d,["num"])))},Ff.format.num=Ex,Ff.autodetect.push({p:5,test:function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];if(d.length===1&&Ax(d[0])==="number"&&d[0]>=0&&d[0]<=16777215)return"num"}});var Rx=R,Jd=k,Bf=E,Df=C.unpack,zf=C.type,Wf=Math.round;Jd.prototype.rgb=function(d){return d===void 0&&(d=!0),d===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(Wf)},Jd.prototype.rgba=function(d){return d===void 0&&(d=!0),this._rgb.slice(0,4).map(function(u,p){return p<3?d===!1?u:Wf(u):u})},Rx.rgb=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];return new(Function.prototype.bind.apply(Jd,[null].concat(d,["rgb"])))},Bf.format.rgb=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];var p=Df(d,"rgba");return p[3]===void 0&&(p[3]=1),p},Bf.autodetect.push({p:3,test:function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];if(d=Df(d,"rgba"),zf(d)==="array"&&(d.length===3||d.length===4&&zf(d[3])=="number"&&d[3]>=0&&d[3]<=1))return"rgb"}});var Po=Math.log,Ox=function(d){var u=d/100,p,y,T;return u<66?(p=255,y=u<6?0:-155.25485562709179-.44596950469579133*(y=u-2)+104.49216199393888*Po(y),T=u<20?0:-254.76935184120902+.8274096064007395*(T=u-10)+115.67994401066147*Po(T)):(p=351.97690566805693+.114206453784165*(p=u-55)-40.25366309332127*Po(p),y=325.4494125711974+.07943456536662342*(y=u-50)-28.0852963507957*Po(y),T=255),[p,y,T,1]},Hf=Ox,Fx=Hf,Bx=C.unpack,Dx=Math.round,zx=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];for(var p=Bx(d,"rgb"),y=p[0],T=p[2],L=1e3,j=4e4,I=.4,M;j-L>I;){M=(j+L)*.5;var B=Fx(M);B[2]/B[0]>=T/y?j=M:L=M}return Dx(M)},Wx=zx,ec=R,Ro=k,nc=E,Hx=Wx;Ro.prototype.temp=Ro.prototype.kelvin=Ro.prototype.temperature=function(){return Hx(this._rgb)},ec.temp=ec.kelvin=ec.temperature=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];return new(Function.prototype.bind.apply(Ro,[null].concat(d,["temp"])))},nc.format.temp=nc.format.kelvin=nc.format.temperature=Hf;var Ux=C.unpack,tc=Math.cbrt,Gx=Math.pow,Vx=Math.sign,Yx=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];var p=Ux(d,"rgb"),y=p[0],T=p[1],L=p[2],j=[rc(y/255),rc(T/255),rc(L/255)],I=j[0],M=j[1],B=j[2],W=tc(.4122214708*I+.5363325363*M+.0514459929*B),K=tc(.2119034982*I+.6806995451*M+.1073969566*B),U=tc(.0883024619*I+.2817188376*M+.6299787005*B);return[.2104542553*W+.793617785*K-.0040720468*U,1.9779984951*W-2.428592205*K+.4505937099*U,.0259040371*W+.7827717662*K-.808675766*U]},Uf=Yx;function rc(d){var u=Math.abs(d);return u<.04045?d/12.92:(Vx(d)||1)*Gx((u+.055)/1.055,2.4)}var Zx=C.unpack,Oo=Math.pow,qx=Math.sign,Kx=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];d=Zx(d,"lab");var p=d[0],y=d[1],T=d[2],L=Oo(p+.3963377774*y+.2158037573*T,3),j=Oo(p-.1055613458*y-.0638541728*T,3),I=Oo(p-.0894841775*y-1.291485548*T,3);return[255*sc(4.0767416621*L-3.3077115913*j+.2309699292*I),255*sc(-1.2684380046*L+2.6097574011*j-.3413193965*I),255*sc(-.0041960863*L-.7034186147*j+1.707614701*I),d.length>3?d[3]:1]},Gf=Kx;function sc(d){var u=Math.abs(d);return u>.0031308?(qx(d)||1)*(1.055*Oo(u,1/2.4)-.055):d*12.92}var Qx=C.unpack,Xx=C.type,Jx=R,Vf=k,Yf=E,e6=Uf;Vf.prototype.oklab=function(){return e6(this._rgb)},Jx.oklab=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];return new(Function.prototype.bind.apply(Vf,[null].concat(d,["oklab"])))},Yf.format.oklab=Gf,Yf.autodetect.push({p:3,test:function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];if(d=Qx(d,"oklab"),Xx(d)==="array"&&d.length===3)return"oklab"}});var n6=C.unpack,t6=Uf,r6=$f,s6=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];var p=n6(d,"rgb"),y=p[0],T=p[1],L=p[2],j=t6(y,T,L),I=j[0],M=j[1],B=j[2];return r6(I,M,B)},a6=s6,l6=C.unpack,o6=If,i6=Gf,d6=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];d=l6(d,"lch");var p=d[0],y=d[1],T=d[2],L=o6(p,y,T),j=L[0],I=L[1],M=L[2],B=i6(j,I,M),W=B[0],K=B[1],U=B[2];return[W,K,U,d.length>3?d[3]:1]},c6=d6,u6=C.unpack,h6=C.type,p6=R,Zf=k,qf=E,f6=a6;Zf.prototype.oklch=function(){return f6(this._rgb)},p6.oklch=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];return new(Function.prototype.bind.apply(Zf,[null].concat(d,["oklch"])))},qf.format.oklch=c6,qf.autodetect.push({p:3,test:function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];if(d=u6(d,"oklch"),h6(d)==="array"&&d.length===3)return"oklch"}});var Kf=k,m6=C.type;Kf.prototype.alpha=function(d,u){return u===void 0&&(u=!1),d!==void 0&&m6(d)==="number"?u?(this._rgb[3]=d,this):new Kf([this._rgb[0],this._rgb[1],this._rgb[2],d],"rgb"):this._rgb[3]};var g6=k;g6.prototype.clipped=function(){return this._rgb._clipped||!1};var cs=k,v6=Mo;cs.prototype.darken=function(d){d===void 0&&(d=1);var u=this,p=u.lab();return p[0]-=v6.Kn*d,new cs(p,"lab").alpha(u.alpha(),!0)},cs.prototype.brighten=function(d){return d===void 0&&(d=1),this.darken(-d)},cs.prototype.darker=cs.prototype.darken,cs.prototype.brighter=cs.prototype.brighten;var x6=k;x6.prototype.get=function(d){var u=d.split("."),p=u[0],y=u[1],T=this[p]();if(y){var L=p.indexOf(y)-(p.substr(0,2)==="ok"?2:0);if(L>-1)return T[L];throw new Error("unknown channel "+y+" in mode "+p)}else return T};var Zs=k,b6=C.type,y6=Math.pow,w6=1e-7,j6=20;Zs.prototype.luminance=function(d){if(d!==void 0&&b6(d)==="number"){if(d===0)return new Zs([0,0,0,this._rgb[3]],"rgb");if(d===1)return new Zs([255,255,255,this._rgb[3]],"rgb");var u=this.luminance(),p="rgb",y=j6,T=function(j,I){var M=j.interpolate(I,.5,p),B=M.luminance();return Math.abs(d-B)<w6||!y--?M:B>d?T(j,M):T(M,I)},L=(u>d?T(new Zs([0,0,0]),this):T(this,new Zs([255,255,255]))).rgb();return new Zs(L.concat([this._rgb[3]]))}return C6.apply(void 0,this._rgb.slice(0,3))};var C6=function(d,u,p){return d=ac(d),u=ac(u),p=ac(p),.2126*d+.7152*u+.0722*p},ac=function(d){return d/=255,d<=.03928?d/12.92:y6((d+.055)/1.055,2.4)},at={},Qf=k,Xf=C.type,Fo=at,Jf=function(d,u,p){p===void 0&&(p=.5);for(var y=[],T=arguments.length-3;T-- >0;)y[T]=arguments[T+3];var L=y[0]||"lrgb";if(!Fo[L]&&!y.length&&(L=Object.keys(Fo)[0]),!Fo[L])throw new Error("interpolation mode "+L+" is not defined");return Xf(d)!=="object"&&(d=new Qf(d)),Xf(u)!=="object"&&(u=new Qf(u)),Fo[L](d,u,p).alpha(d.alpha()+p*(u.alpha()-d.alpha()))},e1=k,k6=Jf;e1.prototype.mix=e1.prototype.interpolate=function(d,u){u===void 0&&(u=.5);for(var p=[],y=arguments.length-2;y-- >0;)p[y]=arguments[y+2];return k6.apply(void 0,[this,d,u].concat(p))};var n1=k;n1.prototype.premultiply=function(d){d===void 0&&(d=!1);var u=this._rgb,p=u[3];return d?(this._rgb=[u[0]*p,u[1]*p,u[2]*p,p],this):new n1([u[0]*p,u[1]*p,u[2]*p,p],"rgb")};var lc=k,S6=Mo;lc.prototype.saturate=function(d){d===void 0&&(d=1);var u=this,p=u.lch();return p[1]+=S6.Kn*d,p[1]<0&&(p[1]=0),new lc(p,"lch").alpha(u.alpha(),!0)},lc.prototype.desaturate=function(d){return d===void 0&&(d=1),this.saturate(-d)};var t1=k,r1=C.type;t1.prototype.set=function(d,u,p){p===void 0&&(p=!1);var y=d.split("."),T=y[0],L=y[1],j=this[T]();if(L){var I=T.indexOf(L)-(T.substr(0,2)==="ok"?2:0);if(I>-1){if(r1(u)=="string")switch(u.charAt(0)){case"+":j[I]+=+u;break;case"-":j[I]+=+u;break;case"*":j[I]*=+u.substr(1);break;case"/":j[I]/=+u.substr(1);break;default:j[I]=+u}else if(r1(u)==="number")j[I]=u;else throw new Error("unsupported value for Color.set");var M=new t1(j,T);return p?(this._rgb=M._rgb,this):M}throw new Error("unknown channel "+L+" in mode "+T)}else return j};var T6=k,N6=function(d,u,p){var y=d._rgb,T=u._rgb;return new T6(y[0]+p*(T[0]-y[0]),y[1]+p*(T[1]-y[1]),y[2]+p*(T[2]-y[2]),"rgb")};at.rgb=N6;var L6=k,oc=Math.sqrt,qs=Math.pow,_6=function(d,u,p){var y=d._rgb,T=y[0],L=y[1],j=y[2],I=u._rgb,M=I[0],B=I[1],W=I[2];return new L6(oc(qs(T,2)*(1-p)+qs(M,2)*p),oc(qs(L,2)*(1-p)+qs(B,2)*p),oc(qs(j,2)*(1-p)+qs(W,2)*p),"rgb")};at.lrgb=_6;var $6=k,I6=function(d,u,p){var y=d.lab(),T=u.lab();return new $6(y[0]+p*(T[0]-y[0]),y[1]+p*(T[1]-y[1]),y[2]+p*(T[2]-y[2]),"lab")};at.lab=I6;var s1=k,Ks=function(d,u,p,y){var T,L,j,I;y==="hsl"?(j=d.hsl(),I=u.hsl()):y==="hsv"?(j=d.hsv(),I=u.hsv()):y==="hcg"?(j=d.hcg(),I=u.hcg()):y==="hsi"?(j=d.hsi(),I=u.hsi()):y==="lch"||y==="hcl"?(y="hcl",j=d.hcl(),I=u.hcl()):y==="oklch"&&(j=d.oklch().reverse(),I=u.oklch().reverse());var M,B,W,K,U,ne;(y.substr(0,1)==="h"||y==="oklch")&&(T=j,M=T[0],W=T[1],U=T[2],L=I,B=L[0],K=L[1],ne=L[2]);var J,ge,je,Ne;return!isNaN(M)&&!isNaN(B)?(B>M&&B-M>180?Ne=B-(M+360):B<M&&M-B>180?Ne=B+360-M:Ne=B-M,ge=M+p*Ne):isNaN(M)?isNaN(B)?ge=Number.NaN:(ge=B,(U==1||U==0)&&y!="hsv"&&(J=K)):(ge=M,(ne==1||ne==0)&&y!="hsv"&&(J=W)),J===void 0&&(J=W+p*(K-W)),je=U+p*(ne-U),y==="oklch"?new s1([je,J,ge],y):new s1([ge,J,je],y)},E6=Ks,a1=function(d,u,p){return E6(d,u,p,"lch")};at.lch=a1,at.hcl=a1;var M6=k,A6=function(d,u,p){var y=d.num(),T=u.num();return new M6(y+p*(T-y),"num")};at.num=A6;var P6=Ks,R6=function(d,u,p){return P6(d,u,p,"hcg")};at.hcg=R6;var O6=Ks,F6=function(d,u,p){return O6(d,u,p,"hsi")};at.hsi=F6;var B6=Ks,D6=function(d,u,p){return B6(d,u,p,"hsl")};at.hsl=D6;var z6=Ks,W6=function(d,u,p){return z6(d,u,p,"hsv")};at.hsv=W6;var H6=k,U6=function(d,u,p){var y=d.oklab(),T=u.oklab();return new H6(y[0]+p*(T[0]-y[0]),y[1]+p*(T[1]-y[1]),y[2]+p*(T[2]-y[2]),"oklab")};at.oklab=U6;var G6=Ks,V6=function(d,u,p){return G6(d,u,p,"oklch")};at.oklch=V6;var ic=k,Y6=C.clip_rgb,dc=Math.pow,cc=Math.sqrt,uc=Math.PI,l1=Math.cos,o1=Math.sin,Z6=Math.atan2,q6=function(d,u,p){u===void 0&&(u="lrgb"),p===void 0&&(p=null);var y=d.length;p||(p=Array.from(new Array(y)).map(function(){return 1}));var T=y/p.reduce(function(ge,je){return ge+je});if(p.forEach(function(ge,je){p[je]*=T}),d=d.map(function(ge){return new ic(ge)}),u==="lrgb")return K6(d,p);for(var L=d.shift(),j=L.get(u),I=[],M=0,B=0,W=0;W<j.length;W++)if(j[W]=(j[W]||0)*p[0],I.push(isNaN(j[W])?0:p[0]),u.charAt(W)==="h"&&!isNaN(j[W])){var K=j[W]/180*uc;M+=l1(K)*p[0],B+=o1(K)*p[0]}var U=L.alpha()*p[0];d.forEach(function(ge,je){var Ne=ge.get(u);U+=ge.alpha()*p[je+1];for(var Ie=0;Ie<j.length;Ie++)if(!isNaN(Ne[Ie]))if(I[Ie]+=p[je+1],u.charAt(Ie)==="h"){var Sn=Ne[Ie]/180*uc;M+=l1(Sn)*p[je+1],B+=o1(Sn)*p[je+1]}else j[Ie]+=Ne[Ie]*p[je+1]});for(var ne=0;ne<j.length;ne++)if(u.charAt(ne)==="h"){for(var J=Z6(B/I[ne],M/I[ne])/uc*180;J<0;)J+=360;for(;J>=360;)J-=360;j[ne]=J}else j[ne]=j[ne]/I[ne];return U/=y,new ic(j,u).alpha(U>.99999?1:U,!0)},K6=function(d,u){for(var p=d.length,y=[0,0,0,0],T=0;T<d.length;T++){var L=d[T],j=u[T]/p,I=L._rgb;y[0]+=dc(I[0],2)*j,y[1]+=dc(I[1],2)*j,y[2]+=dc(I[2],2)*j,y[3]+=I[3]*j}return y[0]=cc(y[0]),y[1]=cc(y[1]),y[2]=cc(y[2]),y[3]>.9999999&&(y[3]=1),new ic(Y6(y))},Lt=R,Qs=C.type,Q6=Math.pow,hc=function(d){var u="rgb",p=Lt("#ccc"),y=0,T=[0,1],L=[],j=[0,0],I=!1,M=[],B=!1,W=0,K=1,U=!1,ne={},J=!0,ge=1,je=function(G){if(G=G||["#fff","#000"],G&&Qs(G)==="string"&&Lt.brewer&&Lt.brewer[G.toLowerCase()]&&(G=Lt.brewer[G.toLowerCase()]),Qs(G)==="array"){G.length===1&&(G=[G[0],G[0]]),G=G.slice(0);for(var le=0;le<G.length;le++)G[le]=Lt(G[le]);L.length=0;for(var be=0;be<G.length;be++)L.push(be/(G.length-1))}return Kn(),M=G},Ne=function(G){if(I!=null){for(var le=I.length-1,be=0;be<le&&G>=I[be];)be++;return be-1}return 0},Ie=function(G){return G},Sn=function(G){return G},jn=function(G,le){var be,ve;if(le==null&&(le=!1),isNaN(G)||G===null)return p;if(le)ve=G;else if(I&&I.length>2){var Tn=Ne(G);ve=Tn/(I.length-2)}else K!==W?ve=(G-W)/(K-W):ve=1;ve=Sn(ve),le||(ve=Ie(ve)),ge!==1&&(ve=Q6(ve,ge)),ve=j[0]+ve*(1-j[0]-j[1]),ve=Math.min(1,Math.max(0,ve));var ze=Math.floor(ve*1e4);if(J&&ne[ze])be=ne[ze];else{if(Qs(M)==="array")for(var Le=0;Le<L.length;Le++){var Ae=L[Le];if(ve<=Ae){be=M[Le];break}if(ve>=Ae&&Le===L.length-1){be=M[Le];break}if(ve>Ae&&ve<L[Le+1]){ve=(ve-Ae)/(L[Le+1]-Ae),be=Lt.interpolate(M[Le],M[Le+1],ve,u);break}}else Qs(M)==="function"&&(be=M(ve));J&&(ne[ze]=be)}return be},Kn=function(){return ne={}};je(d);var ke=function(G){var le=Lt(jn(G));return B&&le[B]?le[B]():le};return ke.classes=function(G){if(G!=null){if(Qs(G)==="array")I=G,T=[G[0],G[G.length-1]];else{var le=Lt.analyze(T);G===0?I=[le.min,le.max]:I=Lt.limits(le,"e",G)}return ke}return I},ke.domain=function(G){if(!arguments.length)return T;W=G[0],K=G[G.length-1],L=[];var le=M.length;if(G.length===le&&W!==K)for(var be=0,ve=Array.from(G);be<ve.length;be+=1){var Tn=ve[be];L.push((Tn-W)/(K-W))}else{for(var ze=0;ze<le;ze++)L.push(ze/(le-1));if(G.length>2){var Le=G.map(function(Pe,Re){return Re/(G.length-1)}),Ae=G.map(function(Pe){return(Pe-W)/(K-W)});Ae.every(function(Pe,Re){return Le[Re]===Pe})||(Sn=function(Pe){if(Pe<=0||Pe>=1)return Pe;for(var Re=0;Pe>=Ae[Re+1];)Re++;var $t=(Pe-Ae[Re])/(Ae[Re+1]-Ae[Re]),kr=Le[Re]+$t*(Le[Re+1]-Le[Re]);return kr})}}return T=[W,K],ke},ke.mode=function(G){return arguments.length?(u=G,Kn(),ke):u},ke.range=function(G,le){return je(G),ke},ke.out=function(G){return B=G,ke},ke.spread=function(G){return arguments.length?(y=G,ke):y},ke.correctLightness=function(G){return G==null&&(G=!0),U=G,Kn(),U?Ie=function(le){for(var be=jn(0,!0).lab()[0],ve=jn(1,!0).lab()[0],Tn=be>ve,ze=jn(le,!0).lab()[0],Le=be+(ve-be)*le,Ae=ze-Le,Pe=0,Re=1,$t=20;Math.abs(Ae)>.01&&$t-- >0;)(function(){return Tn&&(Ae*=-1),Ae<0?(Pe=le,le+=(Re-le)*.5):(Re=le,le+=(Pe-le)*.5),ze=jn(le,!0).lab()[0],Ae=ze-Le})();return le}:Ie=function(le){return le},ke},ke.padding=function(G){return G!=null?(Qs(G)==="number"&&(G=[G,G]),j=G,ke):j},ke.colors=function(G,le){arguments.length<2&&(le="hex");var be=[];if(arguments.length===0)be=M.slice(0);else if(G===1)be=[ke(.5)];else if(G>1){var ve=T[0],Tn=T[1]-ve;be=X6(0,G).map(function(Re){return ke(ve+Re/(G-1)*Tn)})}else{d=[];var ze=[];if(I&&I.length>2)for(var Le=1,Ae=I.length,Pe=1<=Ae;Pe?Le<Ae:Le>Ae;Pe?Le++:Le--)ze.push((I[Le-1]+I[Le])*.5);else ze=T;be=ze.map(function(Re){return ke(Re)})}return Lt[le]&&(be=be.map(function(Re){return Re[le]()})),be},ke.cache=function(G){return G!=null?(J=G,ke):J},ke.gamma=function(G){return G!=null?(ge=G,ke):ge},ke.nodata=function(G){return G!=null?(p=Lt(G),ke):p},ke};function X6(d,u,p){for(var y=[],T=d<u,L=u,j=d;T?j<L:j>L;T?j++:j--)y.push(j);return y}var ll=k,J6=hc,eb=function(d){for(var u=[1,1],p=1;p<d;p++){for(var y=[1],T=1;T<=u.length;T++)y[T]=(u[T]||0)+u[T-1];u=y}return u},nb=function(d){var u,p,y,T,L,j,I;if(d=d.map(function(U){return new ll(U)}),d.length===2)u=d.map(function(U){return U.lab()}),L=u[0],j=u[1],T=function(U){var ne=[0,1,2].map(function(J){return L[J]+U*(j[J]-L[J])});return new ll(ne,"lab")};else if(d.length===3)p=d.map(function(U){return U.lab()}),L=p[0],j=p[1],I=p[2],T=function(U){var ne=[0,1,2].map(function(J){return(1-U)*(1-U)*L[J]+2*(1-U)*U*j[J]+U*U*I[J]});return new ll(ne,"lab")};else if(d.length===4){var M;y=d.map(function(U){return U.lab()}),L=y[0],j=y[1],I=y[2],M=y[3],T=function(U){var ne=[0,1,2].map(function(J){return(1-U)*(1-U)*(1-U)*L[J]+3*(1-U)*(1-U)*U*j[J]+3*(1-U)*U*U*I[J]+U*U*U*M[J]});return new ll(ne,"lab")}}else if(d.length>=5){var B,W,K;B=d.map(function(U){return U.lab()}),K=d.length-1,W=eb(K),T=function(U){var ne=1-U,J=[0,1,2].map(function(ge){return B.reduce(function(je,Ne,Ie){return je+W[Ie]*Math.pow(ne,K-Ie)*Math.pow(U,Ie)*Ne[ge]},0)});return new ll(J,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return T},tb=function(d){var u=nb(d);return u.scale=function(){return J6(u)},u},pc=R,_t=function(d,u,p){if(!_t[p])throw new Error("unknown blend mode "+p);return _t[p](d,u)},jr=function(d){return function(u,p){var y=pc(p).rgb(),T=pc(u).rgb();return pc.rgb(d(y,T))}},Cr=function(d){return function(u,p){var y=[];return y[0]=d(u[0],p[0]),y[1]=d(u[1],p[1]),y[2]=d(u[2],p[2]),y}},rb=function(d){return d},sb=function(d,u){return d*u/255},ab=function(d,u){return d>u?u:d},lb=function(d,u){return d>u?d:u},ob=function(d,u){return 255*(1-(1-d/255)*(1-u/255))},ib=function(d,u){return u<128?2*d*u/255:255*(1-2*(1-d/255)*(1-u/255))},db=function(d,u){return 255*(1-(1-u/255)/(d/255))},cb=function(d,u){return d===255?255:(d=255*(u/255)/(1-d/255),d>255?255:d)};_t.normal=jr(Cr(rb)),_t.multiply=jr(Cr(sb)),_t.screen=jr(Cr(ob)),_t.overlay=jr(Cr(ib)),_t.darken=jr(Cr(ab)),_t.lighten=jr(Cr(lb)),_t.dodge=jr(Cr(cb)),_t.burn=jr(Cr(db));for(var ub=_t,fc=C.type,hb=C.clip_rgb,pb=C.TWOPI,fb=Math.pow,mb=Math.sin,gb=Math.cos,i1=R,vb=function(d,u,p,y,T){d===void 0&&(d=300),u===void 0&&(u=-1.5),p===void 0&&(p=1),y===void 0&&(y=1),T===void 0&&(T=[0,1]);var L=0,j;fc(T)==="array"?j=T[1]-T[0]:(j=0,T=[T,T]);var I=function(M){var B=pb*((d+120)/360+u*M),W=fb(T[0]+j*M,y),K=L!==0?p[0]+M*L:p,U=K*W*(1-W)/2,ne=gb(B),J=mb(B),ge=W+U*(-.14861*ne+1.78277*J),je=W+U*(-.29227*ne-.90649*J),Ne=W+U*(1.97294*ne);return i1(hb([ge*255,je*255,Ne*255,1]))};return I.start=function(M){return M==null?d:(d=M,I)},I.rotations=function(M){return M==null?u:(u=M,I)},I.gamma=function(M){return M==null?y:(y=M,I)},I.hue=function(M){return M==null?p:(p=M,fc(p)==="array"?(L=p[1]-p[0],L===0&&(p=p[1])):L=0,I)},I.lightness=function(M){return M==null?T:(fc(M)==="array"?(T=M,j=M[1]-M[0]):(T=[M,M],j=0),I)},I.scale=function(){return i1.scale(I)},I.hue(p),I},xb=k,bb="0123456789abcdef",yb=Math.floor,wb=Math.random,jb=function(){for(var d="#",u=0;u<6;u++)d+=bb.charAt(yb(wb()*16));return new xb(d,"hex")},mc=h,d1=Math.log,Cb=Math.pow,kb=Math.floor,Sb=Math.abs,c1=function(d,u){u===void 0&&(u=null);var p={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return mc(d)==="object"&&(d=Object.values(d)),d.forEach(function(y){u&&mc(y)==="object"&&(y=y[u]),y!=null&&!isNaN(y)&&(p.values.push(y),p.sum+=y,y<p.min&&(p.min=y),y>p.max&&(p.max=y),p.count+=1)}),p.domain=[p.min,p.max],p.limits=function(y,T){return u1(p,y,T)},p},u1=function(d,u,p){u===void 0&&(u="equal"),p===void 0&&(p=7),mc(d)=="array"&&(d=c1(d));var y=d.min,T=d.max,L=d.values.sort(function(vc,xc){return vc-xc});if(p===1)return[y,T];var j=[];if(u.substr(0,1)==="c"&&(j.push(y),j.push(T)),u.substr(0,1)==="e"){j.push(y);for(var I=1;I<p;I++)j.push(y+I/p*(T-y));j.push(T)}else if(u.substr(0,1)==="l"){if(y<=0)throw new Error("Logarithmic scales are only possible for values > 0");var M=Math.LOG10E*d1(y),B=Math.LOG10E*d1(T);j.push(y);for(var W=1;W<p;W++)j.push(Cb(10,M+W/p*(B-M)));j.push(T)}else if(u.substr(0,1)==="q"){j.push(y);for(var K=1;K<p;K++){var U=(L.length-1)*K/p,ne=kb(U);if(ne===U)j.push(L[ne]);else{var J=U-ne;j.push(L[ne]*(1-J)+L[ne+1]*J)}}j.push(T)}else if(u.substr(0,1)==="k"){var ge,je=L.length,Ne=new Array(je),Ie=new Array(p),Sn=!0,jn=0,Kn=null;Kn=[],Kn.push(y);for(var ke=1;ke<p;ke++)Kn.push(y+ke/p*(T-y));for(Kn.push(T);Sn;){for(var G=0;G<p;G++)Ie[G]=0;for(var le=0;le<je;le++)for(var be=L[le],ve=Number.MAX_VALUE,Tn=void 0,ze=0;ze<p;ze++){var Le=Sb(Kn[ze]-be);Le<ve&&(ve=Le,Tn=ze),Ie[Tn]++,Ne[le]=Tn}for(var Ae=new Array(p),Pe=0;Pe<p;Pe++)Ae[Pe]=null;for(var Re=0;Re<je;Re++)ge=Ne[Re],Ae[ge]===null?Ae[ge]=L[Re]:Ae[ge]+=L[Re];for(var $t=0;$t<p;$t++)Ae[$t]*=1/Ie[$t];Sn=!1;for(var kr=0;kr<p;kr++)if(Ae[kr]!==Kn[kr]){Sn=!0;break}Kn=Ae,jn++,jn>200&&(Sn=!1)}for(var Sr={},Xs=0;Xs<p;Xs++)Sr[Xs]=[];for(var Js=0;Js<je;Js++)ge=Ne[Js],Sr[ge].push(L[Js]);for(var tr=[],us=0;us<p;us++)tr.push(Sr[us][0]),tr.push(Sr[us][Sr[us].length-1]);tr=tr.sort(function(vc,xc){return vc-xc}),j.push(tr[0]);for(var ol=1;ol<tr.length;ol+=2){var hs=tr[ol];!isNaN(hs)&&j.indexOf(hs)===-1&&j.push(hs)}}return j},h1={analyze:c1,limits:u1},p1=k,Tb=function(d,u){d=new p1(d),u=new p1(u);var p=d.luminance(),y=u.luminance();return p>y?(p+.05)/(y+.05):(y+.05)/(p+.05)},f1=k,nr=Math.sqrt,dn=Math.pow,Nb=Math.min,Lb=Math.max,m1=Math.atan2,g1=Math.abs,Bo=Math.cos,v1=Math.sin,_b=Math.exp,x1=Math.PI,$b=function(d,u,p,y,T){p===void 0&&(p=1),y===void 0&&(y=1),T===void 0&&(T=1);var L=function(hs){return 360*hs/(2*x1)},j=function(hs){return 2*x1*hs/360};d=new f1(d),u=new f1(u);var I=Array.from(d.lab()),M=I[0],B=I[1],W=I[2],K=Array.from(u.lab()),U=K[0],ne=K[1],J=K[2],ge=(M+U)/2,je=nr(dn(B,2)+dn(W,2)),Ne=nr(dn(ne,2)+dn(J,2)),Ie=(je+Ne)/2,Sn=.5*(1-nr(dn(Ie,7)/(dn(Ie,7)+dn(25,7)))),jn=B*(1+Sn),Kn=ne*(1+Sn),ke=nr(dn(jn,2)+dn(W,2)),G=nr(dn(Kn,2)+dn(J,2)),le=(ke+G)/2,be=L(m1(W,jn)),ve=L(m1(J,Kn)),Tn=be>=0?be:be+360,ze=ve>=0?ve:ve+360,Le=g1(Tn-ze)>180?(Tn+ze+360)/2:(Tn+ze)/2,Ae=1-.17*Bo(j(Le-30))+.24*Bo(j(2*Le))+.32*Bo(j(3*Le+6))-.2*Bo(j(4*Le-63)),Pe=ze-Tn;Pe=g1(Pe)<=180?Pe:ze<=Tn?Pe+360:Pe-360,Pe=2*nr(ke*G)*v1(j(Pe)/2);var Re=U-M,$t=G-ke,kr=1+.015*dn(ge-50,2)/nr(20+dn(ge-50,2)),Sr=1+.045*le,Xs=1+.015*le*Ae,Js=30*_b(-dn((Le-275)/25,2)),tr=2*nr(dn(le,7)/(dn(le,7)+dn(25,7))),us=-tr*v1(2*j(Js)),ol=nr(dn(Re/(p*kr),2)+dn($t/(y*Sr),2)+dn(Pe/(T*Xs),2)+us*($t/(y*Sr))*(Pe/(T*Xs)));return Lb(0,Nb(100,ol))},b1=k,Ib=function(d,u,p){p===void 0&&(p="lab"),d=new b1(d),u=new b1(u);var y=d.get(p),T=u.get(p),L=0;for(var j in y){var I=(y[j]||0)-(T[j]||0);L+=I*I}return Math.sqrt(L)},Eb=k,Mb=function(){for(var d=[],u=arguments.length;u--;)d[u]=arguments[u];try{return new(Function.prototype.bind.apply(Eb,[null].concat(d))),!0}catch{return!1}},y1=R,w1=hc,Ab={cool:function(){return w1([y1.hsl(180,1,.9),y1.hsl(250,.7,.4)])},hot:function(){return w1(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Do={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},gc=0,j1=Object.keys(Do);gc<j1.length;gc+=1){var C1=j1[gc];Do[C1.toLowerCase()]=Do[C1]}var Pb=Do,wn=R;wn.average=q6,wn.bezier=tb,wn.blend=ub,wn.cubehelix=vb,wn.mix=wn.interpolate=Jf,wn.random=jb,wn.scale=hc,wn.analyze=h1.analyze,wn.contrast=Tb,wn.deltaE=$b,wn.distance=Ib,wn.limits=h1.limits,wn.valid=Mb,wn.scales=Ab,wn.colors=Pf,wn.brewer=Pb;var Rb=wn;return Rb})})(R5);var LT=R5.exports;const _T=Kt(LT);function $T(e){const{h:n,s:r,l:s}=e;return _T.hsl(n,r/100,s/100)}const IT=e=>$T(e).luminance(),O5=e=>IT(e)<.5,La=({label:e,checked:n,toggle:r})=>t.jsxs("label",{className:"checkbox no-focus inline",children:[t.jsx("input",{type:"checkbox",checked:n,onChange:r}),e]}),F5=`// redefine any of the following hues to taste...
$red-hue:       0;
$brown-hue:    14;
$orange-hue:   26;
$yellow-hue:   41;
$olive-hue:    68;
$green-hue:   117;
$teal-hue:    165;
$blue-hue:    206;
$indigo-hue:  236;
$violet-hue:  259;
$purple-hue:  284;
$pink-hue:    313;
$maroon-hue:  339;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,ET=()=>{const[e,n]=F.useState({names:!1,info:!1,show5s:!1}),r=o=>n(i=>({...i,[o]:!i[o]})),s=()=>r("names"),a=()=>r("info"),l=()=>r("show5s");return t.jsxs("div",{className:"prose",children:[t.jsx("h1",{children:"Standard Colors"}),t.jsx("p",{children:"The following greyscale ranges are also defined."}),t.jsxs("div",{className:"flex space end",children:[t.jsx("h2",{children:"Greyscale Ranges"}),t.jsxs("div",{className:"text-right color-options",children:[t.jsx(La,{label:"Show Names",checked:e.names,toggle:s}),t.jsx(La,{label:"Show Info",checked:e.info,toggle:a}),t.jsx(La,{label:"Show 5s",checked:e.show5s,toggle:l})]})]}),t.jsx("div",{className:`ranges ${e.names?"names":"nameless"}`,children:ld.filter(o=>Yr.ranges[o].greyscale).map(o=>t.jsx(MT,{uri:o,range:Yr.ranges[o],options:e},o))}),t.jsx("h2",{children:"Brand Hue"}),t.jsxs("p",{children:["The greyscale ranges are designed to based on your primary brand color. The ",t.jsx("code",{children:"grey"})," range is desaturated to around 5%.  The"," ",t.jsx("code",{children:"grey20"})," and ",t.jsx("code",{children:"grey40"})," ranges are saturated to around 20% and 40% respectively."]}),t.jsxs("p",{children:["The brand color for this website is ",t.jsx("code",{children:"violet"})," which is why these greyscales have a violet tinge to them."]}),t.jsxs("p",{children:["Each of the colours show above has a corresponding SCSS variable composed of the color name and stop delimited by a hyphen, e.g."," ",t.jsx("code",{children:"$red-0"})," through to ",t.jsx("code",{children:"$grey-100"}),".  They are also defined as CSS custom properties, e.g. ",t.jsx("code",{children:"--red-0"})," through to ",t.jsx("code",{children:"--grey-100"}),"."]}),t.jsxs("p",{children:["Each range of colors is built from a base hue.  These are defined in SASS variables using the SASS ",t.jsx("code",{children:"!default"})," flag.  If you want to adjust the hues you can set any of these SASS variables before importing the main ",t.jsx("code",{children:"badger-ui.scss"})," component."]}),t.jsx(_e,{code:F5,caption:"Customising Hues",language:"scss",expand:!0}),t.jsx("h2",{children:"TODO"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Editing or updating a palette using Badger Color"}),t.jsx("li",{children:"Expanding the palette into SCSS files"}),t.jsx("li",{children:"Customising the palette using SCSS variables"}),t.jsx("li",{children:"Customising the color hues"}),t.jsx("li",{children:"Defining your brand color"}),t.jsx("li",{children:"Adding/editing CSS scopes"}),t.jsx("li",{children:"Including or omitting colors"})]})]})},MT=({uri:e,range:n,options:r})=>t.jsxs("div",{className:"range",children:[r.names&&t.jsx("h3",{children:n.name}),t.jsx("div",{className:"swatches",children:wo(0,100,r.show5s?5:10).map(s=>t.jsx(AT,{uri:e,range:n,stop:s,options:r},s))})]}),AT=({uri:e,range:n,stop:r,options:s})=>{const a=n.stops[r];return t.jsx("div",{className:`swatch ${O5(a)?"dark":"light"}`,style:{backgroundColor:`var(--${e}-${r})`},children:s.info&&t.jsx(B5,{uri:e,stop:r,color:a})})},B5=({uri:e,stop:n,color:r})=>t.jsxs("div",{children:[t.jsxs("div",{className:"stop",children:[e,"-",n]}),t.jsxs("div",{className:"specs",children:[r.hex,t.jsx("br",{}),"h:",r.h,"°",t.jsx("br",{}),"s:",r.s,"%",t.jsx("br",{}),"l:",r.l,"%"]})]}),PT=Object.freeze(Object.defineProperty({__proto__:null,Info:B5,default:ET},Symbol.toStringTag,{value:"Module"})),RT=`# Path to the palette data file (exported from
# badger-color) relative to the project root
palette: config/my-palette.json

# Path to the SCSS output directory, also
# relative to the project root
output: styles/color

# Your default brand color
brandColor: blue
`,OT=`{
  "scripts": {
    "palette": "badger-css-palette-scss -c config/export-my-palette.yaml -v"
  }
}`,FT=`## using npm
$ npm run palette

## using yarn
$ yarn run palette

## using pnpm
$ pnpm run palette`,BT=`// Load the default helpers and configuration files
@import '@abw/badger-css/styles/helpers/all.scss';
@import '@abw/badger-css/styles/config/all.scss';

// Load your custom palette
@import "color/palette.scss";

// Then the default utilities, form styles and other components
@import "@abw/badger-css/styles/utilities/all.scss";
@import "@abw/badger-css/styles/forms/all.scss";
@import "@abw/badger-css/styles/components/all.scss";
`,DT=`// Replace this:
// @import "@abw/badger-css/styles/badger.scss";

// With something like this (you may need to adjust
// the path prefix, depending on where you're loading
// it from, e.g. "../styles/badger.scss")
@import "styles/badger.scss";`,re=({children:e,align:n="top"})=>t.jsx("div",{className:`grid-2 gap-h-8 stack-desktop ${n}`,style:{"--prose-width":"100%"},children:e}),zT=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Custom Palette"}),t.jsxs(re,{children:[t.jsxs("div",{children:[t.jsx("p",{children:"The pre-defined color palette is a good starting point for building a web site.  There's a certain amount of flexibility built in to the SASS source files: you can adjust the hues of the different color ranges, define your own brand color or colors, and specify which of the color ranges you want to include (and implicitly, which ones you don't want)."}),t.jsxs("p",{children:["When you need a bit more flexibility you can head over to the"," ",t.jsx("a",{href:"https://abw.github.io/badger-color/",children:"Badger Color"})," web app and either customise one of the standard palettes or design your own palette from scratch."]})]}),t.jsxs("div",{children:[t.jsx("p",{children:"You can then download the palette data as a JSON file and use the script provided to generate the SCSS configuration files for your palette, ready to integrate into Badger CSS.  At any point you can upload the palette back into Badger Color, make some adjustments, download it again and repeat the process."}),t.jsxs("p",{children:["You'll need to have ",t.jsx("code",{children:"@abw/badger-css"})," installed as a developer dependency for your project for these next steps to work. See the ",t.jsx(BS,{})," page for details (TL;DR:"," ",t.jsx("code",{children:"npm add -D @abw/badger-css"})," or the equivalent with ",t.jsx("code",{children:"yarn"})," or ",t.jsx("code",{children:"pnpm"}),")."]})]})]}),t.jsx("h2",{children:"Palette Configuration File"}),t.jsxs(re,{children:[t.jsxs("div",{children:[t.jsxs("p",{children:["For these examples, we'll assume that you've download your custom palette file and saved it in a ",t.jsx("code",{children:"config"})," directory under your project root as ",t.jsx("code",{children:"my-palette.json"}),".  It doesn't have to be in the ",t.jsx("code",{children:"config"})," directory - you can put it anywhere you like in your project."]}),t.jsxs("p",{children:["You then need to create a configuration file like the one shown here.  It can be a YAML file or JSON file, you can call it anything you like (as long as it has a ",t.jsx("code",{children:".yaml"})," or ",t.jsx("code",{children:".json"})," ","file extension), and you can put it anywhere you like in your project. Here we'll assume it's called"," ",t.jsx("code",{children:"export-my-palette.yaml"})," and is also located in the ",t.jsx("code",{children:"config"})," directory under the project root."]}),t.jsxs("p",{children:["You should define ",t.jsx("code",{children:"palette"})," to be the path to your palette data file (relative to the project root), and"," ",t.jsx("code",{children:"output"})," to be a path to the directory where you want the SCSS files to be written (also relative to the project root)."]}),t.jsxs("p",{children:["You can also define your brand color as ",t.jsx("code",{children:"brandColor"}),". There are other configuration options you can specify but we'll keep it simple for now."]})]}),t.jsx(_e,{code:RT,caption:"config/export-my-palette.yaml",language:"yaml",expand:!0})]}),t.jsxs("h2",{children:["Adding a ",t.jsx("code",{children:"package.json"})," Script"]}),t.jsxs(re,{children:[t.jsxs("div",{children:[t.jsxs("p",{children:["Then add a line to the ",t.jsx("code",{children:"scripts"})," section of your"," ",t.jsx("code",{children:"package.json"})," file like this."]}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"-c"})," (or ",t.jsx("code",{children:"--config"})," if you prefer verbosity) option tells it where your config file is located.  The ",t.jsx("code",{children:"-v"})," ","(or ",t.jsx("code",{children:"--verbose"}),") option enables messages to tell you what it's doing.  You can leave this off if you prefer."]})]}),t.jsx(_e,{code:OT,caption:"package.json",language:"json",expand:!0})]}),t.jsx("h2",{children:"Export the Palette as SCSS"}),t.jsxs(re,{children:[t.jsxs("div",{children:[t.jsxs("p",{children:["You can then ",t.jsx("code",{children:"run palette"})," from the command line using"," ",t.jsx("code",{children:"npm"}),", ",t.jsx("code",{children:"yarn"})," or ",t.jsx("code",{children:"pnpm"}),", depending on which package manager you're using."]}),t.jsxs("p",{children:["If you've got the verbose mode enabled, you should see a message reporting each color range being written to a file in"," ",t.jsx("code",{children:"style/color/range/XXX"}),", and the main palette index file being written to ",t.jsx("code",{children:"style/color/palette.scss"}),"."]})]}),t.jsx(_e,{code:FT,caption:"Exporting the palette",language:"bash",expand:!0})]}),t.jsxs("h2",{children:["Defining a Custom ",t.jsx("code",{children:"badger.scss"})," File"]}),t.jsxs(re,{children:[t.jsxs("div",{children:[t.jsxs("p",{children:["Now you need to define your own version of the main"," ",t.jsx("code",{children:"badger.scss"})," which loads your palette instead of the default one."]}),t.jsxs("p",{children:["In this example we'll assume that it's saved as",t.jsx("code",{children:"badger.scss"})," in the ",t.jsx("code",{children:"styles"})," directory, alongside the newly created ",t.jsx("code",{children:"color"})," directory that has been exported from the palette."]}),t.jsx("p",{children:"This is also a good place to set any SASS variables that change the defaults for Badger CSS.  They should go at the top of this file."})]}),t.jsx(_e,{code:BT,caption:"Custom badger.scss",language:"scss",expand:!0})]}),t.jsxs("h2",{children:["Replace the Standard ",t.jsx("code",{children:"badger.scss"})," File"]}),t.jsxs(re,{children:[t.jsx("div",{children:t.jsxs("p",{children:["Now you just need to include the new file ",t.jsx("code",{children:"badger.scss"})," ","into your website or main stylesheet.  If you were previously loading the default ",t.jsx("code",{children:"badger.scss"})," then should change the path to point to your new local ",t.jsx("code",{children:"badger.scss"})," file."]})}),t.jsx(_e,{code:DT,caption:"Including your badger.scss",language:"scss",expand:!0})]})]}),WT=Object.freeze(Object.defineProperty({__proto__:null,default:zT},Symbol.toStringTag,{value:"Module"})),HT=`// define the hues for the greyscale colors...
$grey-hue:   40;
$grey20-hue: 40;
$grey40-hue: 40;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,UT=()=>{const[e,n]=F.useState({names:!1,info:!1,show5s:!1}),r=o=>n(i=>({...i,[o]:!i[o]})),s=()=>r("names"),a=()=>r("info"),l=()=>r("show5s");return t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Standard Colors"}),t.jsxs(re,{children:[t.jsxs("p",{children:["The following standard color ranges are defined.  This palette was created using ",t.jsx("a",{href:"https://abw.github.io/badger-color",children:"Badger Color"}),", a companion to this library.  You can use it to clone and update this palette or to create your own palettes from scratch."]}),t.jsxs("p",{children:["Each color range is divided into color ",t.jsx("em",{children:"stops"}),".  They range in increments of 5 from ",t.jsx("code",{children:"0"})," which is very close to black, up to"," ",t.jsx("code",{children:"100"}),", which is very close to white."]})]}),t.jsx(w0,{title:"Color Ranges",colors:ld.filter(o=>!Yr.ranges[o].greyscale),options:e,toggleNames:s,toggleInfo:a,toggleShow5s:l}),t.jsx("h2",{children:"Range Hues"}),t.jsx(Ot,{code:F5,caption:"Customising Hues",language:"scss",expand:!0,children:t.jsxs("p",{children:["Each range of colors is built from a base hue.  These are defined in SASS variables using the SASS ",t.jsx("code",{children:"!default"})," flag.  If you want to adjust the hues you can set any of these SASS variables before importing the main ",t.jsx("code",{children:"badger.scss"})," component."]})}),t.jsx(w0,{title:"Greyscale Ranges",colors:ld.filter(o=>Yr.ranges[o].greyscale),options:e,toggleNames:s,toggleInfo:a,toggleShow5s:l}),t.jsxs(Ot,{code:HT,caption:"Customising Greyscale Hues",language:"scss",className:"mar-t-8",expand:!0,children:[t.jsxs("p",{children:["Three greyscale color ranges are also defined.  They are designed to be based on your primary brand color. The ",t.jsx("code",{children:"grey"})," range is desaturated to around 5%.  The"," ",t.jsx("code",{children:"grey20"})," and ",t.jsx("code",{children:"grey40"})," ranges are saturated to around 20% and 40% respectively."]}),t.jsxs("p",{children:["The brand color for this website is ",t.jsx("code",{children:"blue"})," which is why these greyscales have a blue tinge to them.  You can set the hues for these color ranges using the ",t.jsx("code",{children:"$grey-hue"}),","," ",t.jsx("code",{children:"$grey20-hue"})," and ",t.jsx("code",{children:"$grey40-hue"})," variables."]})]}),t.jsxs("p",{className:"mar-t-4",children:[t.jsx(Up,{text:"Read on"})," to see how you can define your own brand color and automatically get greyscales to match."]})]})},w0=({title:e,colors:n,options:r,toggleNames:s,toggleInfo:a,toggleShow5s:l})=>t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flex space end",children:[t.jsx("h2",{children:e}),t.jsxs("div",{className:"text-right color-options",children:[t.jsx(La,{label:"Show Names",checked:r.names,toggle:s}),t.jsx(La,{label:"Show Info",checked:r.info,toggle:a}),t.jsx(La,{label:"Show 5s",checked:r.show5s,toggle:l})]})]}),t.jsx("div",{className:`ranges ${r.names?"names":"nameless"}`,children:n.map(o=>t.jsx(GT,{uri:o,range:Yr.ranges[o],options:r},o))})]}),GT=({uri:e,range:n,options:r})=>t.jsxs("div",{className:"range",children:[r.names&&t.jsx("h3",{children:n.name}),t.jsx("div",{className:"swatches",children:wo(0,100,r.show5s?5:10).map(s=>t.jsx(VT,{uri:e,range:n,stop:s,options:r},s))})]}),VT=({uri:e,range:n,stop:r,options:s})=>{const a=n.stops[r];return t.jsx("div",{className:`swatch ${O5(a)?"dark":"light"}`,style:{backgroundColor:`var(--${e}-${r})`},children:s.info&&t.jsx(D5,{uri:e,stop:r,color:a})})},D5=({uri:e,stop:n,color:r})=>t.jsxs("div",{children:[t.jsxs("div",{className:"stop",children:[e,"-",n]}),t.jsxs("div",{className:"specs",children:[r.hex,t.jsx("br",{}),"h:",r.h,"°",t.jsx("br",{}),"s:",r.s,"%",t.jsx("br",{}),"l:",r.l,"%"]})]}),YT=Object.freeze(Object.defineProperty({__proto__:null,Info:D5,default:UT},Symbol.toStringTag,{value:"Module"})),ZT=`<div class="
  violet border pad-4 bdr-2 bdw-2
  fgc-40 bgc-85 hdc-30 bdc-70
">
  <h3>Colors</h3>
  Foreground color violet-40<br/>
  Background color violet-85<br/>
  Heading color violet-30<br/>
  Border color violet-70<br/>
</div>
`,qT=`<div class="
  orange border pad-4 bdr-2 bdw-2
  fgc-40 bgc-80 hdc-30 bdc-60
  fgd-70 bgd-10 hdd-50 bdd-30
">
  <h3>Light Theme (default)</h3>
  <p>
    Foreground color orange-40 <br/>
    Background color orange-80<br/>
    Heading color orange-30<br/>
    Border color orange-60
  </p>
  <h3>Dark Theme</h3>
  <p>
    Foreground color orange-70 <br/>
    Background color orange-10<br/>
    Heading color orange-50<br/>
    Border color orange-30
  </p>
</div>
`,KT=`<div class="inverse pad-2">
  Inverse text
</div>
<div class="inverse red pad-2">
  Inverse red text
</div>
<div class="inverse green pad-2">
  Inverse red text
</div>
<div class="inverse blue pad-2">
  Inverse blue text
</div>
<div class="inverse violet pad-2">
  <h3>Inverse Violet Heading</h3>
</div>
`,QT=`<div class="red grid-3 gap-2">
  <div class="bgc-80 pad-2">
    <div class="fgc-10">red-10</div>
    <div class="fgc-20">red-20</div>
    <div class="fgc-30">red-30</div>
  </div>
  <div class="bgc-70 pad-2">
    <div class="fgc-40">red-40</div>
    <div class="fgc-50">red-50</div>
    <div class="fgc-60">red-60</div>
  </div>
  <div class="bgc-60 pad-2">
    <div class="fgc-70">red-70</div>
    <div class="fgc-80">red-80</div>
    <div class="fgc-90">red-90</div>
  </div>
</div>
`,XT=`<!-- Explicit color range -->
<button class="solid red mar-b-4">
  Solid Red Button
</button>

<div class="red alert mar-b-4">
  <div class="headline">Danger!</div>
  Red Alert
</div>

<table class="red shaded mar-b-4">
  <tbody>
    <tr>
      <th>Red</th>
      <td>Table</td>
    </tr>
  </tbody>
</table>

<div class="green">
  <!-- Inherited color range -->
  <button class="solid mar-b-4">
    Solid Green Button
  </button>

  <div class="alert mar-b-4">
    <div class="headline">Success!</div>
    Green Alert
  </div>

  <table class="shaded">
    <tbody>
      <tr>
        <th>Green</th>
        <td>Table</td>
      </tr>
    </tbody>
  </table>
</div>`,JT=`<div>
  <style>
    .my-component {
      color: var(--color-40);
      background-color: var(--color-90);
      border: 1px solid var(--color-70);
      padding: 1rem 2rem;
    }
    [data-theme=dark] .my-component {
      color: var(--color-60);
      background-color: var(--color-10);
      border: 1px solid var(--color-30);
    }
  </style>
  <div class="grid-1 gap-v-4">
    <div class="my-component">
      This is my component.
    </div>
    <div class="red my-component">
      This is my component in red.
    </div>
    <div class="orange my-component">
      This is my component in orange.
    </div>
    <div class="yellow my-component">
      This is my component in yellow.
    </div>
    <div class="olive my-component">
      This is my component in olive.
    </div>
    <div class="green my-component">
      This is my component in green.
    </div>
    <div class="teal my-component">
      This is my component in teal.
    </div>
    <div class="blue my-component">
      This is my component in blue.
    </div>
    <div class="indigo my-component">
      This is my component in indigo.
    </div>
    <div class="violet my-component">
      This is my component in violet.
    </div>
    <div class="purple my-component">
      This is my component in purple.
    </div>
    <div class="pink my-component">
      This is my component in pink.
    </div>
    <div class="maroon my-component">
      This is my component in maroon.
    </div>
  </div>
</div>
`,Zr=({title:e="Note",children:n,className:r=""})=>t.jsxs("div",{className:`info alert flex top border small ${r}`,children:[t.jsx(Fa,{name:"info",className:"side-icon"}),t.jsxs("div",{children:[t.jsx("h3",{children:e}),n]})]}),Si=({scope:e,to:n,from:r="color",size:s="smallish",abbreviate:a=!1})=>t.jsxs("table",{className:`${e} ${s} celled striped properties mar-b-8`,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Variable"}),t.jsx("th",{children:"Mapped To"})]})}),t.jsx("tbody",{children:wo(0,100,5).map(l=>t.jsx(eN,{n:l,from:r,to:n,abbreviate:a},l))})]}),eN=({from:e,to:n,n:r,abbreviate:s})=>!s||r<=10||r>=90?t.jsxs("tr",{children:[t.jsxs("td",{className:"font-mono nowrap",children:["--",e,"-",r]}),t.jsxs("td",{className:"font-mono nowrap",children:["--",n,"-",r]})]},r):r===15?t.jsxs("tr",{children:[t.jsx("td",{className:"font-mono nowrap",children:"..etc..."}),t.jsx("td",{className:"font-mono nowrap",children:"...etc..."})]},r):null,nN=["red","brown","orange"],tN=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Color Utilities"}),t.jsx("h2",{children:"Color Classes"}),t.jsxs(re,{children:[t.jsxs("p",{children:["Each of the color ranges defined in your palette has a corresponding class. For example, the ",t.jsx("code",{children:"red"})," class can be used to select the red color range.  Some of the colors also have semantic aliases, e.g. ",t.jsx("code",{children:"error"})," and ",t.jsx("code",{children:"invalid"})," are aliases for"," ",t.jsx("code",{children:"red"}),"."]}),t.jsxs("p",{children:["Selecting a color range doesn't have much of a visible effect by itself.  The important things is that it maps the ",t.jsx("code",{children:"--color-N"})," ","CSS custom properties to the equivalent stops from the selected color range.  For example, in the scope of the ",t.jsx("code",{children:"red"})," CSS class, the"," ",t.jsx("code",{children:"--color-0"})," property is mapped to ",t.jsx("code",{children:"--red-0"}),","," ",t.jsx("code",{children:"--color-5"})," is mapped to ",t.jsx("code",{children:"--red-5"}),","," ",t.jsx("code",{children:"--color-10"})," to ",t.jsx("code",{children:"--red-10"})," and so on up to 100."]})]}),t.jsxs("div",{className:"small flex gap-4",children:[nN.map(e=>t.jsxs("div",{children:[t.jsxs("h3",{className:"font-mono mar-b-2",children:[".",e," ","{"," ... ","}"]}),t.jsx(Si,{scope:e,to:e,abbreviate:!0})]},e)),t.jsx("div",{children:t.jsx("h3",{className:"font-mono mar-b-2",children:"...etc"})})]}),t.jsx("h2",{children:"Foreground, Background and Border Colors"}),t.jsxs(re,{children:[t.jsxs("p",{children:["The ",t.jsx("code",{children:"fgc-N"}),", ",t.jsx("code",{children:"bgc-N"}),", ",t.jsx("code",{children:"hdc-N"})," and"," ",t.jsx("code",{children:"bdc-N"})," classes can be used to select a stop from the color range for the foreground color, background color, heading color and border color, respectively."]}),t.jsxs("p",{children:["For example, the ",t.jsx("code",{children:"bgc-80"})," CSS class will set the background color to whatever color is mapped to ",t.jsx("code",{children:"--color-80"}),".  In the scope of the ",t.jsx("code",{children:"red"})," CSS class, that will be ",t.jsx("code",{children:"--red-80"}),"."]})]}),t.jsxs("div",{className:"grid-2 gap-8 stack-desktop",children:[t.jsx(j0,{classes:[["fgc-N","--color",t.jsxs(t.Fragment,{children:[t.jsx("b",{children:"f"}),"ore",t.jsx("b",{children:"g"}),"round ",t.jsx("b",{children:"c"}),"olor stop ",t.jsx("code",{children:"N"})]})],["bgc-N","--background-color",t.jsxs(t.Fragment,{children:[t.jsx("b",{children:"b"}),"ack",t.jsx("b",{children:"g"}),"round ",t.jsx("b",{children:"c"}),"olor stop ",t.jsx("code",{children:"N"})]})],["hdc-N","--heading-color",t.jsxs(t.Fragment,{children:[t.jsx("b",{children:"h"}),"ea",t.jsx("b",{children:"d"}),"ing ",t.jsx("b",{children:"c"}),"olor stop ",t.jsx("code",{children:"N"})]})],["bdc-N","--border-color",t.jsxs(t.Fragment,{children:[t.jsx("b",{children:"b"}),"or",t.jsx("b",{children:"d"}),"er ",t.jsx("b",{children:"c"}),"olor stop ",t.jsx("code",{children:"N"})]})]]}),t.jsx("div",{children:t.jsxs(Zr,{children:["The ",t.jsx("code",{children:"bdc-N"})," classes are designed to be used in conjunction with the ",t.jsx("code",{children:"border"})," class and other classes for setting ",t.jsx(Rd,{}),".  A ",t.jsx("code",{children:"bdc-N"})," class will set the color border, but you won't see any effect unless you also add the ",t.jsx("code",{children:"border"})," class."]})})]}),t.jsx(S,{html:ZT,caption:"Color Classes",expand:!0}),t.jsx("h2",{children:"Dark Theme"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"fgd-N"}),", ",t.jsx("code",{children:"bgd-N"}),", ",t.jsx("code",{children:"hdd-N"})," and"," ",t.jsx("code",{children:"bdd-N"})," classes are equivalents of the above for when a dark theme is selected.  You can set foreground, background, heading and border colors for both light and dark themes and they will be switched in automatically."]}),t.jsxs(re,{children:[t.jsx(j0,{classes:[["fgd-N","--color",t.jsxs(t.Fragment,{children:[t.jsx("b",{children:"f"}),"ore",t.jsx("b",{children:"g"}),"round ",t.jsx("b",{children:"d"}),"ark theme color stop ",t.jsx("code",{children:"N"})]})],["bgd-N","--background-color",t.jsxs(t.Fragment,{children:[t.jsx("b",{children:"b"}),"ack",t.jsx("b",{children:"g"}),"round ",t.jsx("b",{children:"d"}),"ark theme color stop ",t.jsx("code",{children:"N"})]})],["hdd-N","--heading-color",t.jsxs(t.Fragment,{children:[t.jsx("b",{children:"h"}),"ea",t.jsx("b",{children:"d"}),"ing ",t.jsx("b",{children:"d"}),"ark theme color stop ",t.jsx("code",{children:"N"})]})],["bdd-N","--border-color",t.jsxs(t.Fragment,{children:[t.jsx("b",{children:"b"}),"or",t.jsx("b",{children:"d"}),"er ",t.jsx("b",{children:"d"}),"ark theme color stop ",t.jsx("code",{children:"N"})]})]]}),t.jsxs(Zr,{children:["The same rule applies for ",t.jsx("code",{children:"bdd-N"})," as it does for"," ",t.jsx("code",{children:"bdc-N"})," - it selects the border color but you still need to add the ",t.jsx("code",{children:"border"})," class to make the border visible."]})]}),t.jsx(S,{html:qT,caption:"Dark Theme",expand:!0}),t.jsx("h2",{children:"Color Inheritance"}),t.jsx("p",{children:"CSS custom properties are inherited by child elements.  This means you can select a color range on an element and all children will inherit that color range."}),t.jsx(S,{html:QT,caption:"Color Inheritance",expand:!0}),t.jsx("h2",{children:"Easy Component Coloring"}),t.jsxs("p",{children:["This effect is used by various badger-css components. They use the generic ",t.jsx("code",{children:"--color-N"})," properties to define colors and can then be rendered using any color range."]}),t.jsx(S,{html:XT,caption:"Color Components"}),t.jsx("h2",{children:"Creating Your Own Colored Components"}),t.jsxs(re,{children:[t.jsxs("p",{children:["You can employ this in your own components by using the"," ",t.jsx("code",{children:"--color-N"})," CSS custom properties to define your component colours."]}),t.jsxs("p",{children:["This is particularly useful when implementing components for both light and dark themes.  You only need to specify which ",t.jsx("code",{children:"--color-N"})," stops you want to use in each case.  You don't need to write separate CSS rules for each of the colors you might want to use."]})]}),t.jsx(S,{html:JT,caption:"Custom Components"}),t.jsx("h2",{children:"Inverse Colors"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"inverse"})," CSS class can be added as a shortcut to define an inverse color block."]}),t.jsx(S,{html:KT,caption:"Inverse Colors",expand:!0})]}),j0=({classes:e})=>t.jsxs("table",{className:"brand celled striped mar-b-8",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Class"}),t.jsx("th",{children:"Property"}),t.jsx("th",{children:"Description"})]})}),t.jsx("tbody",{children:e.map(n=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:n[0]})}),t.jsx("td",{children:t.jsx("code",{children:n[1]})}),t.jsx("td",{children:n[2]})]},n[0]))})]}),rN=Object.freeze(Object.defineProperty({__proto__:null,default:tN},Symbol.toStringTag,{value:"Module"})),sN=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Color Variables"}),t.jsx("h2",{children:"SASS Color Variables"}),t.jsxs("p",{children:["Each stop in a color range has a SASS variable defined, e.g.",t.jsx("code",{children:"$red-0"}),", ",t.jsx("code",{children:"$red-5"}),","," ",t.jsx("code",{children:"$red-10"})," and so on.  You can use these in your SASS components as necessary."]}),t.jsx("h2",{children:"CSS Custom Properties"}),t.jsxs(re,{children:[t.jsxs("div",{children:[t.jsxs("p",{children:["Each of the colour stops also has a corresponding CSS custom property (a.k.a. CSS variable) defined, e.g.",t.jsx("code",{children:"--red-0"}),", ",t.jsx("code",{children:"--red-5"}),","," ",t.jsx("code",{children:"--red-10"})," and so on.  You can use these in your CSS files, e.g. as ",t.jsx("code",{children:"color: var(--red-10)"}),"."]}),t.jsxs("p",{children:["Each of your brand colors will also have CSS custom properties defined. If you're using the default ",t.jsx("code",{children:"brand"})," name then they will be ",t.jsx("code",{children:"--brand-0"}),", ",t.jsx("code",{children:"--brand-5"}),","," ",t.jsx("code",{children:"--brand-10"})," and so on."]})]}),t.jsxs("p",{children:["If you have defined a different set of names via"," ",t.jsx("code",{children:"$brand-colors"})," then they will have corresponding names.  For example, if you defined the names in your ",t.jsx("code",{children:"$brand-colors"})," to be ",t.jsx("code",{children:"primary"}),","," ",t.jsx("code",{children:"secondary"})," and ",t.jsx("code",{children:"tertiary"})," then the custom properties will be ",t.jsx("code",{children:"--primary-0"}),","," ",t.jsx("code",{children:"--secondary-0"}),", ",t.jsx("code",{children:"--tertiary-0"}),", and so on."]})]}),t.jsx("h2",{children:"Color Switching"}),t.jsxs(re,{children:[t.jsxs("p",{children:["CSS custom properties are defined for a generic color, appropriately named ",t.jsx("code",{children:"color"}),".  By default they are mapped to grey."]}),t.jsx("div",{children:t.jsx(Si,{scope:"grey",to:"grey"})})]}),t.jsxs(re,{children:[t.jsxs("p",{children:["CSS scopes will be generated for each color range which map the generic colors to the colors from that range.  For example, the"," ",t.jsx("code",{children:".red"})," class selector scope will map the colors as shown here."]}),t.jsxs("div",{children:[t.jsxs("h3",{className:"font-mono mar-b-2",children:[".red ","{"," ... ","}"]}),t.jsx(Si,{scope:"red",to:"red",abbreviate:!0})]})]}),t.jsxs(re,{children:[t.jsxs("div",{children:[t.jsxs("p",{children:["Scopes will also be generated for your brand colors, either using the default ",t.jsx("code",{children:"brand"})," name or the custom names you have defined using ",t.jsx("code",{children:"$brand-colors"}),"."]}),t.jsxs("p",{children:["For example, in the ",t.jsx("code",{children:".brand"})," scope the colors will be mapped as follows."]})]}),t.jsxs("div",{children:[t.jsxs("h3",{className:"font-mono mar-b-2",children:[".brand ","{"," ... ","}"]}),t.jsx(Si,{scope:"brand",to:"brand",abbreviate:!0})]})]}),t.jsxs("p",{children:["The benefit of this approach is that it allows you to define UI components using the generic colors ",t.jsx("code",{children:"--color-N"}),".  By default they will appear in grey, but adding a CSS class matching the color name will switch in the appropriate color range."]}),t.jsx("h2",{children:"CSS Scope Aliases"}),t.jsxs("p",{children:["A number of additional CSS scopes are defined for some of the colors. For example, the CSS scope created for the ",t.jsx("code",{children:"red"})," color range is actually ",t.jsx("code",{children:".red, .error, .invalid"}),".  This allows you to add the ",t.jsx("code",{children:"red"}),", ",t.jsx("code",{children:"error"})," or ",t.jsx("code",{children:"invalid"})," CSS class to an element to have the red color range selected."]}),t.jsxs("p",{children:["This is used by ",t.jsx(Vp,{})," and ",t.jsx(Gp,{}),", for example, to provide semantic names for the colors."]})]}),aN=Object.freeze(Object.defineProperty({__proto__:null,default:sN},Symbol.toStringTag,{value:"Module"})),lN=`<div class="alert">
  This is an alert.
  This is a <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">link</a>.
</div>
<div class="info alert">
  This is an info alert.
  This is a <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">link</a>.
</div>
<div class="success alert">
  This is a success alert.
  This is a <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">link</a>.
</div>
<div class="warning alert">
  This is a warning alert.
  This is a <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">link</a>.
</div>
<div class="error alert mar-b-0">
  This is an error alert.
  This is a <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">link</a>.
</div>
`,oN=`<div class="alert border">
  This is an alert with a border
</div>
<div class="info alert border">
  This is an info alert with a border
</div>
<div class="success alert border">
  This is a success alert with a border
</div>
<div class="warning alert border">
  This is a warning alert with a border
</div>
<div class="error alert border">
  This is an error alert with a border
</div>
`,iN=`<div class="alert">
  <h3>Alert</h3>
  This is an alert
</div>
<div class="info alert">
  <h3>Info</h3>
  This is an info alert
</div>
<div class="success alert">
  <h3>Success</h3>
  This is a success alert
</div>
<div class="warning alert">
  <h3>Warning</h3>
  This is a warning alert
</div>
<div class="error alert">
  <h3>Error</h3>
  This is an error alert
</div>`,dN=`<div class="grid-2 gap-4">
  <div class="alert">
    <div class="headline">Alert</div>
    Alert with headline
  </div>
  <div class="alert border shadow-2">
    <div class="headline">Alert</div>
    Alert with headline and border
  </div>
  <div class="info alert">
    <div class="headline">Info</div>
    Info with headline
  </div>
  <div class="info alert border shadow-2">
    <div class="headline">Info</div>
    Info with headline and border
  </div>
  <div class="success alert">
    <div class="headline">Success</div>
    Success with headline
  </div>
  <div class="success alert border shadow-2">
    <div class="headline">Success</div>
    Success with headline and border
  </div>
  <div class="warning alert">
    <div class="headline">Warning</div>
    Warning with headline
  </div>
  <div class="warning alert border shadow-2">
    <div class="headline">Warning</div>
    Warning with headline and border
  </div>
  <div class="error alert">
    <div class="headline">Error</div>
    Error with headline
  </div>
  <div class="error alert border shadow-2">
    <div class="headline">Error</div>
    Error with headline and border
  </div>
</div>`,cN=`<div class="surface-3 pad-8">
  <div class="stripe alert shadow-2">
    This is a stripe alert
  </div>
  <div class="info stripe alert shadow-2">
    This is an info stripe alert
  </div>
  <div class="success stripe alert shadow-2">
    This is a success stripe alert
  </div>
  <div class="warning stripe alert shadow-2">
    This is a warning stripe alert
  </div>
  <div class="error stripe alert shadow-2">
    This is an error stripe alert
  </div>
</div>`,Yp=({color:e,setColor:n})=>t.jsxs("select",{name:"color",required:!0,value:e,onChange:r=>n(r.target.value),children:[t.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Color"}),t.jsx("option",{value:"",children:"Default"}),ld.map(r=>t.jsx("option",{value:r,children:r},r))]}),uN=["smallest","smaller","small","medium","large","larger","largest"],Zp=({size:e,setSize:n})=>t.jsxs("select",{name:"size",required:!0,value:e,onChange:r=>n(r.target.value),children:[t.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),t.jsx("option",{value:"",children:"Default"}),uN.map(r=>t.jsx("option",{value:r,children:r},r))]}),hN=[0,1,2,3,4,5,6,8,10],qp=({radius:e,setRadius:n})=>t.jsxs("select",{name:"radius",required:!0,value:e,onChange:r=>n(r.target.value),children:[t.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),t.jsx("option",{value:"",children:"Default"}),hN.map(r=>t.jsxs("option",{value:r,children:["radius: ",r]},r))]}),pN=[1,2,3,4,5],z5=({shadow:e,setShadow:n})=>t.jsxs("select",{name:"shadow",required:!0,value:e,onChange:r=>n(r.target.value),children:[t.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),t.jsx("option",{value:"",children:"Default"}),pN.map(r=>t.jsxs("option",{value:r,children:["shadow: ",r]},r))]}),Ln=({checked:e,toggle:n,label:r})=>t.jsxs("label",{className:"checkbox border no-focus",children:[t.jsx("input",{type:"checkbox",checked:e,onChange:n}),r]}),fN=[0,1,2,3,4,5,6,8,10],W5=({borderWidth:e,setBorderWidth:n})=>t.jsxs("select",{name:"borderWidth",required:!0,value:e,onChange:r=>n(r.target.value),children:[t.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),t.jsx("option",{value:"",children:"Default"}),fN.map(r=>t.jsxs("option",{value:r,children:["width: ",r]},r))]}),mN=()=>{const[e,n]=F.useState({body:!0}),r=a=>()=>n(l=>({...l,[a]:!l[a]})),s=a=>l=>n(o=>({...o,[a]:l}));return t.jsxs("div",{className:"example grid-2 gap-8 stack-desktop",children:[t.jsx(gN,{options:e,setOption:s,toggleOption:r}),t.jsxs("div",{children:[t.jsx("h3",{className:"mar-b-2",children:"Output"}),t.jsx("div",{className:"output",children:t.jsx(vN,{options:e})})]})]})},gN=({options:e,toggleOption:n,setOption:r})=>{const s=n("headline"),a=n("heading"),l=n("border"),o=n("stripe"),i=r("type"),c=r("size"),h=r("color"),m=r("radius"),x=r("shadow"),w=r("borderWidth"),_=`<div class="${H5(e)}">
  ...
</div>`;return t.jsxs("div",{children:[t.jsx("h3",{className:"mar-b-2",children:"Options"}),t.jsxs("div",{className:"grid-3 gap-4 stack-tablet top",children:[t.jsx(Ln,{checked:e.headline,toggle:s,label:"Headline"}),t.jsx(Ln,{checked:e.head,toggle:a,label:"Heading"}),t.jsx(Ln,{checked:e.stripe,toggle:o,label:"Stripe"}),t.jsx(Ln,{checked:e.border,toggle:l,label:"Border"}),t.jsx(W5,{borderWidth:e.borderWidth,setBorderWidth:w}),t.jsx(qp,{radius:e.radius,setRadius:m})]}),t.jsxs("div",{className:"grid-4 gap-4 stack-tablet mar-t-4",children:[t.jsx(xN,{type:e.type,setType:i}),t.jsx(Yp,{color:e.color,setColor:h}),t.jsx(Zp,{size:e.size,setSize:c}),t.jsx(z5,{radius:e.shadow,setShadow:x})]}),t.jsx("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),t.jsx(_e,{code:_,language:"html",expand:!0})]})},H5=e=>Co([e.color,e.type,e.size,e.border&&"border",e.stripe&&"stripe",e.radius&&`bdr-${e.radius}`,e.shadow&&`shadow-${e.shadow}`,e.borderWidth&&`bdw-${e.borderWidth}`,"alert"]),vN=({options:e})=>{const n=H5(e);return t.jsxs("div",{className:n,children:[e.headline&&t.jsx("div",{className:"headline",children:"This is a headline"}),e.heading&&t.jsx("h3",{children:"Hello World!"}),t.jsxs("p",{children:["This is an alert.  This is some ",t.jsx("b",{children:"bold text"}),". This is a ",t.jsx("a",{href:"/",children:"link"}),"."]}),t.jsx("button",{children:"Default Button"}),t.jsx("button",{className:"red mar-l-2",children:"Red Button"})]})},xN=({type:e,setType:n})=>t.jsxs("select",{name:"type",required:!0,value:e,onChange:r=>n(r.target.value),children:[t.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),t.jsx("option",{value:"",children:"Default"}),["info","warning","success","error"].map(r=>t.jsx("option",{value:r,children:r},r))]}),bN=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Alerts"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"alert"})," class can be used to display alerts. Add any of the ",t.jsx("code",{children:"info"}),", ",t.jsx("code",{children:"success"}),","," ",t.jsx("code",{children:"warning"})," or ",t.jsx("code",{children:"error"})," classes to set the color."]}),t.jsx("h2",{children:"Demo"}),t.jsx("p",{children:"Select the options to determine how the alert is displayed. Note that some options are mutually exclusive (e.g. stripe and border)."}),t.jsx(mN,{}),t.jsx("h2",{children:"Default Alerts"}),t.jsx(S,{html:lN,language:"html",caption:"Alerts"}),t.jsx("h2",{children:"Alerts With Borders"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"border"})," class to add a border."]}),t.jsx(S,{html:oN,language:"html",caption:"Added Borders"}),t.jsx("h2",{children:"Alert Headings"}),t.jsx("p",{children:"Headings are displayed in a slightly darker color than the body text."}),t.jsx(S,{html:iN,language:"html",caption:"Alert Headings"}),t.jsx("h2",{children:"Alert Headlines"}),t.jsxs("p",{children:["Add an element with the ",t.jsx("code",{children:"headline"})," class to really make it stand out.  This works well with and without borders.  Throw in a"," ",t.jsx(US,{})," if you want to make it really pop."]}),t.jsx(S,{html:dN,language:"html",caption:"Alert Headlines"}),t.jsx("h2",{children:"Stripe Alerts"}),t.jsxs("p",{children:["For a more subdued look, try adding the ",t.jsx("code",{children:"stripe"})," class."]}),t.jsx(S,{html:cN,language:"html",caption:"Stripe Alert"})]}),yN=Object.freeze(Object.defineProperty({__proto__:null,default:bN},Symbol.toStringTag,{value:"Module"})),wN=`<div class="flex gap-4">
  <div class="badge">Badge 1</div>
  <div class="badge">Badge 2</div>
</div>
`,jN=`<div class="flex wrap gap-2">
  <div class="red badge">Red badge</div>
  <div class="brown badge">Brown badge</div>
  <div class="orange badge">Orange badge</div>
  <div class="yellow badge">Yellow badge</div>
  <div class="olive badge">Olive badge</div>
  <div class="green badge">Green badge</div>
  <div class="teal badge">Teal badge</div>
  <div class="blue badge">Blue badge</div>
  <div class="indigo badge">Indigo badge</div>
  <div class="violet badge">Violet badge</div>
  <div class="purple badge">Purple badge</div>
  <div class="pink badge">Pink badge</div>
  <div class="maroon badge">Maroon badge</div>
</div>
`,CN=`<div class="flex wrap middle gap-2">
  <span class="smallest badge">Smallest badge</span>
  <span class="smaller badge">Smaller badge</span>
  <span class="small badge">Small badge</span>
  <span class="large badge">Large badge</span>
  <span class="larger badge">Larger badge</span>
  <span class="largest badge">Largest badge</span>
</div>
`,kN=`<div class="flex wrap middle gap-2">
  <span class="badge bdw-4">Border width 4</span>
  <span class="badge bdr-2">Border radius 2</span>
  <span class="badge bdc-50">Border color stop 50</span>
</div>
`,SN=`<div class="badge tag">Badge Tag</div>
`,TN=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Badges"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"badge"})," class to an element to make it a badge."]}),t.jsx(S,{html:wN,language:"html",caption:"Badge",expand:!0}),t.jsx("h2",{children:"Badge Colors"}),t.jsxs("p",{children:["Add any of the ",t.jsx(DS,{})," range classes to set the badge color."]}),t.jsx(S,{html:jN,language:"html",caption:"Badge Colors",expand:!0}),t.jsx("h2",{children:"Badge Sizes"}),t.jsxs("p",{children:["Add any of the ",t.jsx(HS,{})," utility classesto set the badge size."]}),t.jsx(S,{html:CN,language:"html",caption:"Badge Sizes",expand:!0}),t.jsx("h2",{children:"Badge Borders"}),t.jsxs("p",{children:["Use any of the ",t.jsx(Rd,{})," utility classes to modify the border width, radius or color stop."]}),t.jsx(S,{html:kN,language:"html",caption:"Badge Borders",expand:!0}),t.jsx("h2",{children:"Badge Tags"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"tag"})," class to make the badge look like tag."]}),t.jsx(S,{html:SN,language:"html",caption:"Badge Tags",expand:!0})]}),NN=Object.freeze(Object.defineProperty({__proto__:null,default:TN},Symbol.toStringTag,{value:"Module"})),LN=`<div class="grid-1 gap-4">
  <details>
    <summary>Click on this title to disclose the content</summary>
    <p>
      Hello World!
    </p>
  </details>

  <details class="small">
    <summary>
      This is small
    </summary>
    <p>
      Hello World!
    </p>
  </details>

  <details class="large">
    <summary>
      This is large
    </summary>
    <p>
      Hello World!
    </p>
  </details>

  <details>
    <summary class="larger">
      This has a larger summary...
    </summary>
    <p>
      ...but the content is regular sized
    </p>
  </details>

  <details>
    <summary class="largest">
      The largest summary!
    </summary>
    <p class="large">
      A large paragraph.
    </p>
    <p class="small">
      A small paragraph.
    </p>
  </details>
</div>
`,_N=`<div class="grid-1 gap-4">
  <details class="border">
    <summary>
      This has a border
    </summary>
    <p>
      You are witnesses at the new birth of Spinal Tap Mark II,
      hope you enjoy our new direction... on the bass:
      Derek Smalls, he wrote this...
    </p>
  </details>

  <details class="border bdr-2">
    <summary>
      This has a border and border radius
    </summary>
    <p>
      You are witnesses at the new birth of Spinal Tap Mark II,
      hope you enjoy our new direction... on the bass:
      Derek Smalls, he wrote this...
    </p>
  </details>

  <details class="border bdr-2 bdw-2">
    <summary>
      This has a border, border radius and border width of 2
    </summary>
    <p>
      You are witnesses at the new birth of Spinal Tap Mark II,
      hope you enjoy our new direction... on the bass:
      Derek Smalls, he wrote this...
    </p>
  </details>

  <details class="border bdr-2 bdc-30 bdd-70">
    <summary>
      This has custom border colors for both light and dark mode
    </summary>
    <p>
      You are witnesses at the new birth of Spinal Tap Mark II,
      hope you enjoy our new direction... on the bass:
      Derek Smalls, he wrote this...
    </p>
  </details>
</div>`,$N=`<div class="grid-1 gap-4">
  <details class="lined">
    <summary>
      This is lined
    </summary>
    <p>
      I believe virtually everything I read, and I think that is what makes
      me more of a selective human, than someone who doesn't believe anything.
    </p>
  </details>

  <details class="border lined">
    <summary>
      This is lined with a border
    </summary>
    <div>
      I believe virtually everything I read, and I think that is what makes
      me more of a selective human, than someone who doesn't believe anything.
    </div>
  </details>

  <details class="border lined bdr-2">
    <summary>
      This lined with a border and border radius
    </summary>
    <div>
      I believe virtually everything I read, and I think that is what makes
      me more of a selective human, than someone who doesn't believe anything.
    </div>
  </details>
</div>`,IN=`<div class="grid-1 gap-4">
  <details class="shaded">
    <summary>
      This is shaded
    </summary>
    <p>
      I'm really influenced by Mozart and Bach, It's sort of in between
      those, really, it's like a Mach piece really.
    </p>
  </details>

  <details class="shaded lined">
    <summary>
      This is shaded and lined
    </summary>
    <p>
      I'm really influenced by Mozart and Bach, It's sort of in between
      those, really, it's like a Mach piece really.
    </p>
  </details>

  <details class="shaded border">
    <summary>
      This is shaded and has a border
    </summary>
    <p>
      I'm really influenced by Mozart and Bach, It's sort of in between
      those, really, it's like a Mach piece really.
    </p>
  </details>

  <details class="shaded lined border">
    <summary>
      This is shaded, lined and has a border
    </summary>
    <p>
      I'm really influenced by Mozart and Bach, It's sort of in between
      those, really, it's like a Mach piece really.
    </p>
  </details>

  <details class="shaded lined border bdr-4">
    <summary>
      This is shaded, lined and has a border and border radius
    </summary>
    <p>
      I'm really influenced by Mozart and Bach, It's sort of in between
      those, really, it's like a Mach piece really.
    </p>
  </details>

  <details class="border lined shaded red">
    <summary>
      Red Shaded
    </summary>
    <p>
      I'm really influenced by Mozart and Bach, It's sort of in between
      those, really, it's like a Mach piece really.
    </p>
  </details>

  <details class="border lined shaded green">
    <summary>
      Green Shaded
    </summary>
    <p>
      I'm really influenced by Mozart and Bach, It's sort of in between
      those, really, it's like a Mach piece really.
    </p>
  </details>

  <details class="border lined shaded blue">
    <summary>
      Blue Shaded
    </summary>
    <p>
      I'm really influenced by Mozart and Bach, It's sort of in between
      those, really, it's like a Mach piece really.
    </p>
  </details>
</div>`,EN=`<style>
  .custom-details {
    --icon-svg: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' %3e%3cpolyline points='6 6 6 9 12 15 18 9 18 6' style='fill:none;stroke:rgba%280%2C0%2C0%2C0.5%29%0A;stroke-width:4;stroke-linecap:round;stroke-linejoin:round'%3e%3c/polyline%3e%3c/svg%3e");
    --icon-rotate: -180deg;
    --icon-transition: 0.5s;
    --border-width: 2px;
    --border-radius: 0.75em;
    --line-width: 1px;
    --body-padding: 2em;
    --head-margin: 1em;
    --border-color: var(--color-40);
    --line-color: var(--color-0);
    --head-shade-back: var(--color-80);
    --head-shade-text: var(--color-20);
    --hover-shade-back: var(--color-70);
    --hover-shade-text: var(--color-0);
    --body-shade-back: var(--color-40);
    --body-shade-text: var(--color-90);
    --shade-transition: 0.4s;
    box-shadow: var(--shadow-2);
  }
</style>
<div class="grid-1 gap-4">
  <details class="custom-details border radius shaded lined">
    <summary>
      This is a custom styled details widget
    </summary>
    <p>
      Hello World!
    </p>
  </details>
  <details class="red custom-details border radius shaded lined">
    <summary>
      This is a custom styled details widget in red
    </summary>
    <p>
      Hello World!
    </p>
  </details>
  <details class="green custom-details border radius shaded lined">
    <summary>
      This is a custom styled details widget in green
    </summary>
    <p>
      Hello World!
    </p>
  </details>
  <details class="blue custom-details border radius shaded lined">
    <summary>
      This is a custom styled details widget in blue
    </summary>
    <p>
      Hello World!
    </p>
  </details>
</div>
`,MN=`<details class="no-icon">
  <summary>
    No division
  </summary>
  <p>
    It's like you become one with the guys in the band. I mean there's,
    there's no division, you just, the music just unites people, with
    the players.
  </p>
</details>

<details class="border lined bdr-2 no-icon mar-v-4">
  <summary>
    Visionaries
  </summary>
  <p>
    We're very lucky in the sense that we've got two visionaries in the band.
    David and Nigel are both like, uh, like poets, you know, like Shelley or
    Byron, or people like that.
  </p>
</details>

<div class="details border lined open bdr-2 no-icon">
  <div class="summary">
    Luke warm water
  </div>
  <p>
    The two totally distinct types of visionaries,
    it's like fire and ice, basically, you see and I feel my role in the band,
    is to be kind of in the middle of that, kind of like lukewarm water, in a
    sense.
  </p>
</div>
`,AN=`<div class="accordion">
  <details class="border lined bdr-2">
    <summary>
      Item one
    </summary>
    <p>
      Maybe we just fix the choreography. Keep the dwarf clear.
      So they won't trod upon it.
    </p>
  </details>
  <details class="border lined bdr-2">
    <summary>
      Item two
    </summary>
    <p>
      I don't think that's the issue. I think it's symptomatic that
      maybe you're taking on more than you can... uh... handle. It's
      not exactly the first time you've messed things up is it?
    </p>
  </details>
  <details class="border lined bdr-2">
    <summary>
      Item three
    </summary>
    <p>
      I think he's right, there is something about this, that's so black,
      it's like: "How much more black could this be?" and the answer is:
      "None, none... more black."
    </p>
  </details>
</div>
`,PN=`<details class="border lined" open>
  <summary>
    This details element demonstrates the problem
  </summary>
  <form>
    <div class="surface-2 border pad-2 mar-b-4">
      Normal block elements seem to be OK
    </div>
    <div class="field">
      <label>An input has width:100% by default and is too wide</label>
      <input type="text" value="Hello World!"/>
    </div>
    <div class="wide inverse blue pad-h-2 bdr-1 cols-2 mar-b-4">
      Blue box with .wide (width: 100%) is too wide
    </div>
    <div class="grid-2 gap-4">
      <div class="inverse green pad-2 bdr-1">
        Grid cell
        <div class="wide surface-3">
          .wide is ok
        </div>
      </div>
      <div class="inverse red pad-2 bdr-1">
        Grid cell
        <div class="wide pad-h-2 surface-3">
          .wide with padding is not
        </div>
      </div>
    </div>
  </form>
</details>
`,RN=`<div class="details lined border open">
  <div class="summary">
    This is a "fake" details element
  </div>
  <div class="wide inverse blue pad-h-2 bdr-1 cols-2 mar-b-4">
    Blue box with .wide (width: 100%) is not too wide
  </div>
  <p class="wide surface-4 pad-3 border">
    He did a twist on it. A twist and it... He did, he did. He turned it
    around. We shoulda thought of that. We were so close. I mean if we
    had all you guys tied up, that probably woulda been fine. But it's,
    it's still a stupid cover. It's such a fine line between stupid and...
    and clever. Yeah, and clever. Just that little turnabout...
  </p>
</div>

<div class="details mar-t-4">
  <div class="summary">
    This is closed
  </div>
</div>

<div class="details border mar-t-4">
  <div class="summary">
    This is closed and has a border
  </div>
</div>

<div class="details shaded border bdr-2 mar-t-4">
  <div class="summary">
    This is closed and is shaded with a border
  </div>
</div>`,ON=`<div class="accordion">
  <div class="details border shaded lined open bdr-2">
    <div class="summary">
      Item one
    </div>
    <p>
      Maybe we just fix the choreography. Keep the dwarf clear.
      So they won't trod upon it.
    </p>
  </div>
  <div class="details border shaded lined bdr-2">
    <div class="summary">
      Item two
    </div>
  </div>
  <div class="details border shaded lined bdr-2">
    <div class="summary">
      Item three
    </div>
  </div>
</div>
`,FN=()=>{const[e,n]=F.useState({body:!0}),r=a=>()=>n(l=>({...l,[a]:!l[a]})),s=a=>l=>n(o=>({...o,[a]:l}));return t.jsxs("div",{className:"example grid-2 gap-8 stack-desktop",children:[t.jsx(BN,{options:e,setOption:s,toggleOption:r}),t.jsxs("div",{children:[t.jsx("h3",{className:"mar-b-2",children:"Output"}),t.jsx("div",{className:"output",children:t.jsx(DN,{options:e})})]})]})},BN=({options:e,toggleOption:n,setOption:r})=>{const s=n("border"),a=n("shaded"),l=n("lined"),o=r("size"),i=r("color"),c=r("radius"),h=r("shadow"),m=r("borderWidth"),w=`<details class="${U5(e)}">
  ...
</details>`;return t.jsxs("div",{children:[t.jsx("h3",{className:"mar-b-2",children:"Options"}),t.jsxs("div",{className:"grid-3 gap-4 stack-tablet top",children:[t.jsx(Ln,{checked:e.lined,toggle:l,label:"Lined"}),t.jsx(Ln,{checked:e.shaded,toggle:a,label:"Shaded"})]}),t.jsxs("div",{className:"grid-3 gap-4 stack-tablet top mar-t-4",children:[t.jsx(Ln,{checked:e.border,toggle:s,label:"Border"}),t.jsx(W5,{borderWidth:e.borderWidth,setBorderWidth:m}),t.jsx(qp,{radius:e.radius,setRadius:c})]}),t.jsxs("div",{className:"grid-3 gap-4 stack-tablet mar-t-4",children:[t.jsx(Yp,{color:e.color,setColor:i}),t.jsx(Zp,{size:e.size,setSize:o}),t.jsx(z5,{radius:e.shadow,setShadow:h})]}),t.jsx("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),t.jsx(_e,{code:w,language:"html",expand:!0})]})},U5=e=>Co([e.color,e.size,e.lined&&"lined",e.shaded&&"shaded",e.border&&"border",e.radius&&`bdr-${e.radius}`,e.shadow&&`shadow-${e.shadow}`,e.borderWidth&&`bdw-${e.borderWidth}`]),DN=({options:e})=>{const n=U5(e);return t.jsxs("details",{className:n,children:[t.jsx("summary",{children:"This is a demo details widget - click to reveal"}),t.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),t.jsx("p",{children:"I really think you're just making a much too big thing out of it."}),t.jsx("p",{children:"Making a big thing out of it would've been a good idea."})]})},zN=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Details"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"details"})," HTML element can be used to create a disclosure widget."]}),t.jsx("h2",{children:"Demo"}),t.jsx("p",{children:"Select the options to determine how the details widget is displayed."}),t.jsx(FN,{}),t.jsx("h2",{children:"Default Style"}),t.jsxs("p",{children:["The default style will be applied without the need for any special CSS classes.  You can add any of the utility classes (e.g. the size classes like ",t.jsx("code",{children:"small"}),", ",t.jsx("code",{children:"large"}),", etc.) to change the basic appearance of either the whole widget, the summary, or any of the content elements."]}),t.jsx(S,{html:LN,language:"html",caption:"Default Style"}),t.jsx("h2",{children:"Border Style"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"border"})," class to add a border.  The usual"," ",t.jsx("code",{children:"bdr-N"})," classes can be added to set the border radius"," ","and ",t.jsx("code",{children:"bdw-N"})," to set the border width."]}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"bdc-N"})," classes can be used to set the border color stop, and ",t.jsx("code",{children:"bdd-N"})," classes for the border color stop in dark mode."]}),t.jsx(S,{html:_N,language:"html",caption:"Details With Borders"}),t.jsx("h2",{children:"Lined Style"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"lined"})," class can be added to put an additional border line between the summary header and body content."]}),t.jsx(S,{html:$N,language:"html",caption:"Details With Borders"}),t.jsx("h2",{children:"Shaded Style"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"shaded"})," class to shade the background colors. You can add any of the color classes to change the color palette."]}),t.jsx(S,{html:IN,language:"html",caption:"Shaded Details"}),t.jsx("h2",{children:"No Icon"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"no-icon"})," class if you don't want the default icon.  This applies to both native ",t.jsx("code",{children:"details"})," elements (like the first two examples below) and also ",t.jsx("code",{children:"div.details"})," element (like the third example, which is non-interactive)."]}),t.jsx(S,{html:MN,language:"html",caption:"no-icon"}),t.jsx("h2",{children:"Custom Styling"}),t.jsx("p",{children:"There are a number of CSS variables that you can set to change the styling."}),t.jsx(S,{html:EN,language:"html",caption:"Custom Styling"}),t.jsx("h2",{children:"Accordion"}),t.jsxs("p",{children:["You can wrap a number of ",t.jsx("code",{children:"details"})," elements in a container with the ",t.jsx("code",{children:"accordion"})," class.  This applies some additional styling rules to remove redundant lines between successive elements. It will also remove any border radii except on the first and last elements."]}),t.jsx(S,{html:AN,language:"html",caption:"Accordion"}),t.jsx("h2",{children:"Layout Issues"}),t.jsxs("p",{children:["I've noticed some strange layout problems.  Content inside the details body seems to get confused about how wide 100% is.  I suspect (but don't know for certain at this time) that this is because the browser is using a shadow DOM to render the details element. The example below shows demonstrates the problem. There's also a ",t.jsx("a",{href:"https://codepen.io/abw-the-bashful/pen/jORQNZM",children:"a codepen here"})," ","which demonstrates it in isolation."]}),t.jsx(S,{html:PN,language:"html",caption:"Layout problems"}),t.jsxs("p",{children:["To sidestep this problem, there are also CSS classes for applying the details styles to other elements so you can build your own details widget.  Add the ",t.jsx("code",{children:"details"})," class to a container element and ",t.jsx("code",{children:"summary"})," to an immediate child element.  The"," ",t.jsx("code",{children:"open"})," class should be added to the container to indicate that it's open."]}),t.jsx("p",{children:"Note that the example shown here aren't interactive so click on them won't have any effect."}),t.jsx(S,{html:RN,language:"html",caption:"Alternate classes"}),t.jsxs("p",{children:["This also applies to elements in an ",t.jsx("code",{children:"accordion"})," container. Note that the example below isn't interactive."]}),t.jsx(S,{html:ON,language:"html",caption:"Accordion classes"})]}),WN=Object.freeze(Object.defineProperty({__proto__:null,default:zN},Symbol.toStringTag,{value:"Module"})),Fd=({open:e,close:n,className:r,children:s})=>{const a=F.useRef(null);return F.useEffect(()=>{const{current:l}=a;e?l.showModal():l.close()},[e]),t.jsxs("dialog",{ref:a,className:r,children:[!!n&&t.jsx("div",{className:"close",onClick:n,children:t.jsx(Fa,{name:"cross"})}),s]})},HN=()=>{const[e,n]=F.useState(!1),r=()=>n(!1);return t.jsxs("div",{className:"output",children:[t.jsx("button",{onClick:()=>n(!0),className:"blue",children:"Show Dialog"}),t.jsxs(Fd,{open:e,close:r,children:[t.jsx("h1",{className:"mar-v-4",children:"Hello World!"}),t.jsx("p",{children:"This is a dialog."})]})]})},UN=()=>{const[e,n]=F.useState(!1),r=()=>n(!1);return t.jsxs("div",{className:"output",children:[t.jsx("button",{onClick:()=>n(!0),className:"blue",children:"Show Tall Dialog"}),t.jsxs(Fd,{open:e,close:r,children:[t.jsx("h1",{className:"mar-b-4",children:"Tall Dialog"}),t.jsxs("div",{className:"mobile block-center",children:[t.jsx("p",{children:"David. David. David. Wait, please, wait a minute. Have you any idea what it will costs to dress up the band as animals? Oh, it don't cost nothing. It really doesn't. They're not animals, they're signs of the zodiac. They're animals. It's a way to fight the drabs. You know we've got the drabs. Well that's true. I think mine would look good - better in dubly. If it was done in dubly."}),t.jsx("p",{children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion. Well let's hear yours. Let's hear your suggestion. Stonehenge! Stonehenge. It's the best production value we've ever had on stage. But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't... Not yet we don't. Let's start... Please, please just a moment. Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this... I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore. I know, so we build a new one. And this is it, look! Consider... consider it done. So you're just going to take care of it like that. You're going to find someone to design it... using that as a plan? Let's try. Let's try. If you can do it, I'll do the number."}),t.jsx("p",{children:`This looks actually perfect. I mean it's, uh, the right proportions. It'll be this color right? Yeah. That's... that's... that's just terrific. It almost looks like the real thing. When we get the actual, uh, set, when we get the piece, it'll... it'll follow exactly these specifications. I mean even these contours and everything? Um, I'm not understanding it. What do you mean "the actual piece?" Well I mean... I mean when you build the actual piece... But this is what you asked for, isn't it? What? Well this is the piece. This is the piece? Yes. Are you telling me that this is it? This is scenery? Have you ever been to Stonehenge? No, I haven't been to Stonehenge. The triptychs are... the triptychs are twenty feet high. You can stand four men up them! Ian, I was... I was... I was supposed to build it eighteen inches high. This is insane. This isn't a piece of scenery. Look, look. Look, this is what I was asked to build. Eighteen inches. Right here, it specified eighteen inches. I was given this napkin, I mean... Forget this! Fuck the napkin!!!`}),t.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object. I really think you're just making a much too big thing out of it. Making a big thing out of it would've been a good idea. Nigel gave me a drawing that said eighteen inches. Alright? I know he did, and that's what I'm talking about. Now, whether he knows the difference between feet and inches is not my problem. I do what I'm told. But you're not as confused as him are you? I mean it's not your job to be as confused as Nigel is."}),t.jsx("p",{children:"It's my job to do what I'm asked to do by the creative element of this band. And that's what I did. C'mon... The audience were laughing. So it became a comedy number. Yes it did! Yes it fucking well did, and it was not pleasant to be part of the comedy on stage. Backstage, perhaps, it was very amusing."}),t.jsx("p",{children:"Maybe we just fix the choreography. Keep the dwarf clear. What do you mean? So they won't trod upon it."})]})]})]})},GN=()=>{const[e,n]=F.useState(!1),r=()=>n(!1);return t.jsxs("div",{className:"output",children:[t.jsx("button",{onClick:()=>n(!0),className:"blue",children:"Show Wide Dialog"}),t.jsxs(Fd,{open:e,close:r,children:[t.jsx("h1",{className:"mar-b-4",children:"Wide Dialog"}),t.jsx("p",{children:"David. David. David. Wait, please, wait a minute. Have you any idea what it will costs to dress up the band as animals? Oh, it don't cost nothing. It really doesn't. They're not animals, they're signs of the zodiac. They're animals. It's a way to fight the drabs. You know we've got the drabs. Well that's true. I think mine would look good - better in dubly. If it was done in dubly."}),t.jsx("p",{children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion. Well let's hear yours. Let's hear your suggestion. Stonehenge! Stonehenge. It's the best production value we've ever had on stage. But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't... Not yet we don't. Let's start... Please, please just a moment. Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this... I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore. I know, so we build a new one. And this is it, look! Consider... consider it done. So you're just going to take care of it like that. You're going to find someone to design it... using that as a plan? Let's try. Let's try. If you can do it, I'll do the number."}),t.jsx("p",{children:`This looks actually perfect. I mean it's, uh, the right proportions. It'll be this color right? Yeah. That's... that's... that's just terrific. It almost looks like the real thing. When we get the actual, uh, set, when we get the piece, it'll... it'll follow exactly these specifications. I mean even these contours and everything? Um, I'm not understanding it. What do you mean "the actual piece?" Well I mean... I mean when you build the actual piece... But this is what you asked for, isn't it? What? Well this is the piece. This is the piece? Yes. Are you telling me that this is it? This is scenery? Have you ever been to Stonehenge? No, I haven't been to Stonehenge. The triptychs are... the triptychs are twenty feet high. You can stand four men up them! Ian, I was... I was... I was supposed to build it eighteen inches high. This is insane. This isn't a piece of scenery. Look, look. Look, this is what I was asked to build. Eighteen inches. Right here, it specified eighteen inches. I was given this napkin, I mean... Forget this! Fuck the napkin!!!`}),t.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object. I really think you're just making a much too big thing out of it. Making a big thing out of it would've been a good idea. Nigel gave me a drawing that said eighteen inches. Alright? I know he did, and that's what I'm talking about. Now, whether he knows the difference between feet and inches is not my problem. I do what I'm told. But you're not as confused as him are you? I mean it's not your job to be as confused as Nigel is."}),t.jsx("p",{children:"It's my job to do what I'm asked to do by the creative element of this band. And that's what I did. C'mon... The audience were laughing. So it became a comedy number. Yes it did! Yes it fucking well did, and it was not pleasant to be part of the comedy on stage. Backstage, perhaps, it was very amusing."}),t.jsx("p",{children:"Maybe we just fix the choreography. Keep the dwarf clear. What do you mean? So they won't trod upon it."})]})]})},VN=()=>{const[e,n]=F.useState(!1),r=()=>n(!1);return t.jsxs("div",{className:"output",children:[t.jsx("button",{onClick:()=>n(!0),className:"blue",children:"Show Dialog Article"}),t.jsx(Fd,{open:e,children:t.jsxs("article",{children:[t.jsx("header",{children:t.jsx("h3",{children:"User Login"})}),t.jsxs("form",{className:"width-20rem",children:[t.jsxs("div",{className:"field wide",children:[t.jsx("label",{children:"Email Address"}),t.jsx("input",{name:"email",className:"wide"})]}),t.jsxs("div",{className:"field mar-b-8",children:[t.jsx("label",{children:"Password"}),t.jsx("input",{name:"password",type:"password",className:"wide"})]})]}),t.jsxs("footer",{className:"text-right",children:[t.jsx("button",{className:"grey outline",onClick:r,children:"Cancel"}),t.jsx("button",{className:"blue mar-l-4",onClick:r,children:"Login"})]})]})})]})},YN=`<dialog open>
  <div className="close" onClick={yourCloseHandler}>
    <Icon name="cross"/>
  </div>
  <h1>Hello World!</h1>
  <p>
    This is a dialog.
  </p>
</dialog>`,ZN=`<dialog open>
  <article>
    <header>
      <h3>User Login</h3>
    </header>
    <form class="width-20rem">
      <div class="field wide">
        <label>Email Address</label>
        <input name="email" class="wide"/>
      </div>
      <div className="field mar-b-8">
        <label>Password</label>
        <input name="password" type="password" class="wide"/>
      </div>
    </form>
    <footer class="text-right">
      <button class="grey outline" onClick={yourCloseHandler}>
        Cancel
      </button>
      <button class="blue mar-l-4" onClick={yourSaveHandler}>
        Login
      </button>
    </footer>
  </article>
</dialog>
`,qN=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Dialog"}),t.jsxs("p",{children:["Some default styling is provided for the ",t.jsx("code",{children:"dialog"})," element which can be used to display modals."]}),t.jsx("h2",{children:"Close Button"}),t.jsxs("p",{children:["A child element with the ",t.jsx("code",{children:"close"})," CSS class can be used to create a close button."]}),t.jsxs(re,{children:[t.jsx(_e,{code:YN,caption:"Dialog",language:"html",className:"mar-b-8",expand:!0}),t.jsx(HN,{})]}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"$dialog-max-width"})," SASS variable defaults to"," ",t.jsx("code",{children:"80vw"})," and is set as the ",t.jsx("code",{children:"--max-width"})," CSS variable in the scope of a ",t.jsx("code",{children:"dialog"})," element. Similarly the ",t.jsx("code",{children:"$dialog-max-height"})," SASS variable defaults to"," ",t.jsx("code",{children:"90vh"})," and is set as the ",t.jsx("code",{children:"--max-height"})," CSS variable."]}),t.jsx("p",{children:"In general, you can constrain the width of the content and the dialog which size appropriately."}),t.jsxs(re,{children:[t.jsx(GN,{}),t.jsx(UN,{})]}),t.jsx("h2",{children:"Header and Footer"}),t.jsxs("p",{children:["You can add ",t.jsx("code",{children:"header"})," and ",t.jsx("code",{children:"footer"})," elements to a dialog.  To be semantically correct, you should enclose them in an"," ",t.jsx("code",{children:"article"})," element."]}),t.jsxs(re,{children:[t.jsx(_e,{code:ZN,caption:"Header and Footer",language:"html",className:"mar-b-8",expand:!0}),t.jsx(VN,{})]})]}),KN=Object.freeze(Object.defineProperty({__proto__:null,default:qN},Symbol.toStringTag,{value:"Module"})),QN=`<svg
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
  aria-hidden="true" focusable="false" role="img"
  class="icon"
>
  <path
    d="M64,268L184,388L448,124"
    style="fill:none;stroke:currentColor;stroke-width:65"
  />
</svg>
Check!`,XN=`<div class="small">
  <svg
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
    aria-hidden="true" focusable="false" role="img"
    class="icon"
  >
    <path
      d="M64,268L184,388L448,124"
      style="fill:none;stroke:currentColor;stroke-width:65"
    />
  </svg>
  Check!
</div>

<div class="large">
  <svg
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
    aria-hidden="true" focusable="false" role="img"
    class="icon"
  >
    <path
      d="M64,268L184,388L448,124"
      style="fill:none;stroke:currentColor;stroke-width:65"
    />
  </svg>
  Check!
</div>`,JN=`<div class="red fgc-50 large">
  <svg
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
    aria-hidden="true" role="img" focusable="false"
    class="icon"
  >
    <path
      d="M64,268L184,388L448,124"
      style="fill:none;stroke:currentColor;stroke-width:65"
    />
  </svg>
  Check!
</div>

<div class="green fgc-50 large">
  <svg
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
    aria-hidden="true" role="img" focusable="false"
    class="icon"
  >
    <path
      d="M64,268L184,388L448,124"
      style="fill:none;stroke:currentColor;stroke-width:65"
    />
  </svg>
  Check!
</div>`,eL=`<svg
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 20"
  aria-hidden="true" role="img" focusable="false"
  class="icon red x6" style="fill:none;stroke-width:2"
>
  <circle cx="10" cy="10" r="8" class="stc-10 std-90"/>
  <circle cx="30" cy="10" r="8" class="stc-30 std-70"/>
  <circle cx="50" cy="10" r="8" class="stc-50 std-50"/>
  <circle cx="70" cy="10" r="8" class="stc-70 std-30"/>
  <circle cx="90" cy="10" r="8" class="stc-90 std-10"/>
</svg>

<svg
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20"
  aria-hidden="true" role="img" focusable="false"
  class="icon green x6 mar-t-6" style="stroke:none"
>
  <circle cx="10" cy="10" r="8" class="flc-10 fld-90"/>
  <circle cx="30" cy="10" r="8" class="flc-30 fld-70"/>
  <circle cx="50" cy="10" r="8" class="flc-50 fld-50"/>
  <circle cx="70" cy="10" r="8" class="flc-70 fld-30"/>
  <circle cx="90" cy="10" r="8" class="flc-90 fld-10"/>
</svg>
`,nL=`<svg
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
  aria-hidden="true" focusable="false" role="img"
  class="larger icon green fgc-50 bgc-90 bgd-20"
>
  <rect
    x="32" y="32" width="448" height="448"
    style="stroke-width:32"
    class="fill-bg stroke-fg"
  />
  <path
    d="M112,270L200,360L400,160"
    style="stroke-width:48;fill:none"
    class="stroke-fg"
  />
</svg>

<svg
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
  aria-hidden="true" focusable="false" role="img"
  class="larger icon green fgc-100 bgc-50"
>
  <rect
    x="32" y="32" width="448" height="448"
    style="stroke-width:32"
    class="fill-bg stroke-bg"
  />
  <path
    d="M112,270L200,360L400,160"
    style="stroke-width:48;fill:none"
    class="stroke-fg"
  />
</svg>
`,tL=`<div class="larger">
  <style>
    svg.icon.checkbox {
      --unfilled: var(--color-90);
      .box {
        transition: all 0.5s;
        fill:   var(--unfilled);
        stroke: var(--color-50);
      }
      .check {
        stroke: none;
      }
    }
    svg.icon.checkbox:hover {
      .box {
        fill:   var(--color-50);
        stroke: var(--color-50);
      }
      .check {
        stroke: var(--color-100);
      }
    }
    [data-theme=dark] svg.icon.checkbox .box {
      --unfilled: var(--color-20);
    }
  </style>
  <svg
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
    aria-hidden="true" focusable="false" role="img"
    class="blue checkbox icon"
  >
    <rect
      x="32" y="32" width="448" height="448"
      style="stroke-width:32"
      class="box"
    />
    <path
      d="M112,270L200,360L400,160"
      style="stroke-width:48;fill:none"
      class="check"
    />
  </svg>
  Hover over the checkbox!
</div>
`,rL=`<svg
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
  aria-hidden="true" focusable="false" role="img"
  class="icon spin x2 red fgc-50"
>
  <path
    d="M495.95,166.65C499.15,175.35 496.45,185.05 489.55,191.25L458.65,219.35C450.95,226.45 447.25,236.85 447.75,247.25C447.85,250.15 447.95,253.05 447.95,256.05C447.95,259.05 447.85,261.95 447.75,264.85C447.25,275.35 450.85,285.75 458.65,292.75L489.55,320.85C496.45,327.05 499.15,336.75 495.95,345.45C491.55,357.35 486.25,368.75 480.15,379.75L475.45,387.85C468.85,398.85 461.45,409.25 453.35,419.05C447.45,426.25 437.65,428.65 428.85,425.85L389.15,413.25C379.15,410.05 368.35,412.15 359.45,417.85C354.55,420.95 349.55,423.95 344.35,426.55C335.05,431.35 327.85,439.75 325.55,449.95L316.65,490.65C314.65,499.75 307.65,506.95 298.45,508.45C284.65,510.75 270.45,511.95 255.95,511.95C241.45,511.95 227.25,510.75 213.45,508.45C204.25,506.95 197.25,499.75 195.25,490.65L186.35,449.95C184.15,439.75 176.85,431.35 167.55,426.55C162.35,423.85 157.35,420.95 152.45,417.85C143.65,412.15 132.75,410.05 122.75,413.25L83.15,425.95C74.35,428.75 64.55,426.25 58.65,419.15C50.55,409.35 43.15,398.95 36.55,387.95L31.85,379.85C25.75,368.85 20.45,357.45 16.05,345.55C12.85,336.85 15.55,327.15 22.45,320.95L53.35,292.85C61.05,285.75 64.75,275.35 64.25,264.95C64.15,262.05 64.05,259.15 64.05,256.15C64.05,253.15 64.15,250.25 64.25,247.35C64.75,236.85 61.15,226.45 53.35,219.45L22.45,191.25C15.55,185.05 12.85,175.35 16.05,166.65C20.45,154.75 25.75,143.35 31.85,132.35L36.55,124.25C43.15,113.25 50.55,102.85 58.65,93.05C64.55,85.85 74.35,83.45 83.15,86.25L122.85,98.85C132.85,102.05 143.65,99.95 152.55,94.25C157.45,91.15 162.45,88.15 167.65,85.55C176.95,80.75 184.15,72.35 186.45,62.15L195.35,21.45C197.35,12.35 204.35,5.15 213.55,3.65C227.35,1.25 241.55,0.05 256.05,0.05C270.55,0.05 284.75,1.25 298.55,3.55C307.75,5.05 314.75,12.25 316.75,21.35L325.65,62.05C327.85,72.25 335.05,80.65 344.45,85.45C349.65,88.15 354.65,91.05 359.55,94.15C368.35,99.85 379.25,101.85 389.25,98.75L428.95,86.15C437.75,83.35 447.55,85.85 453.45,92.95C461.55,102.75 468.95,113.15 475.55,124.15L480.25,132.25C486.35,143.25 491.65,154.65 496.05,166.55L495.95,166.65ZM256.05,336.05C299.937,336.05 336.05,299.937 336.05,256.05C336.05,212.163 299.937,176.05 256.05,176.05C212.163,176.05 176.05,212.163 176.05,256.05C176.05,299.937 212.163,336.05 256.05,336.05Z"
    style="fill: none; stroke: currentColor; stroke-width:65"
  />
</svg>

<svg
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
  aria-hidden="true" focusable="false" role="img"
  class="icon spin reverse x2 brown fgc-50 mar-l-2"
>
  <path
    d="M495.95,166.65C499.15,175.35 496.45,185.05 489.55,191.25L458.65,219.35C450.95,226.45 447.25,236.85 447.75,247.25C447.85,250.15 447.95,253.05 447.95,256.05C447.95,259.05 447.85,261.95 447.75,264.85C447.25,275.35 450.85,285.75 458.65,292.75L489.55,320.85C496.45,327.05 499.15,336.75 495.95,345.45C491.55,357.35 486.25,368.75 480.15,379.75L475.45,387.85C468.85,398.85 461.45,409.25 453.35,419.05C447.45,426.25 437.65,428.65 428.85,425.85L389.15,413.25C379.15,410.05 368.35,412.15 359.45,417.85C354.55,420.95 349.55,423.95 344.35,426.55C335.05,431.35 327.85,439.75 325.55,449.95L316.65,490.65C314.65,499.75 307.65,506.95 298.45,508.45C284.65,510.75 270.45,511.95 255.95,511.95C241.45,511.95 227.25,510.75 213.45,508.45C204.25,506.95 197.25,499.75 195.25,490.65L186.35,449.95C184.15,439.75 176.85,431.35 167.55,426.55C162.35,423.85 157.35,420.95 152.45,417.85C143.65,412.15 132.75,410.05 122.75,413.25L83.15,425.95C74.35,428.75 64.55,426.25 58.65,419.15C50.55,409.35 43.15,398.95 36.55,387.95L31.85,379.85C25.75,368.85 20.45,357.45 16.05,345.55C12.85,336.85 15.55,327.15 22.45,320.95L53.35,292.85C61.05,285.75 64.75,275.35 64.25,264.95C64.15,262.05 64.05,259.15 64.05,256.15C64.05,253.15 64.15,250.25 64.25,247.35C64.75,236.85 61.15,226.45 53.35,219.45L22.45,191.25C15.55,185.05 12.85,175.35 16.05,166.65C20.45,154.75 25.75,143.35 31.85,132.35L36.55,124.25C43.15,113.25 50.55,102.85 58.65,93.05C64.55,85.85 74.35,83.45 83.15,86.25L122.85,98.85C132.85,102.05 143.65,99.95 152.55,94.25C157.45,91.15 162.45,88.15 167.65,85.55C176.95,80.75 184.15,72.35 186.45,62.15L195.35,21.45C197.35,12.35 204.35,5.15 213.55,3.65C227.35,1.25 241.55,0.05 256.05,0.05C270.55,0.05 284.75,1.25 298.55,3.55C307.75,5.05 314.75,12.25 316.75,21.35L325.65,62.05C327.85,72.25 335.05,80.65 344.45,85.45C349.65,88.15 354.65,91.05 359.55,94.15C368.35,99.85 379.25,101.85 389.25,98.75L428.95,86.15C437.75,83.35 447.55,85.85 453.45,92.95C461.55,102.75 468.95,113.15 475.55,124.15L480.25,132.25C486.35,143.25 491.65,154.65 496.05,166.55L495.95,166.65ZM256.05,336.05C299.937,336.05 336.05,299.937 336.05,256.05C336.05,212.163 299.937,176.05 256.05,176.05C212.163,176.05 176.05,212.163 176.05,256.05C176.05,299.937 212.163,336.05 256.05,336.05Z"
    style="fill: none; stroke: currentColor; stroke-width:65"
  />
</svg>

<svg
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
  aria-hidden="true" focusable="false" role="img"
  class="icon spin fast x2 orange fgc-50 mar-l-2"
>
  <path
    d="M495.95,166.65C499.15,175.35 496.45,185.05 489.55,191.25L458.65,219.35C450.95,226.45 447.25,236.85 447.75,247.25C447.85,250.15 447.95,253.05 447.95,256.05C447.95,259.05 447.85,261.95 447.75,264.85C447.25,275.35 450.85,285.75 458.65,292.75L489.55,320.85C496.45,327.05 499.15,336.75 495.95,345.45C491.55,357.35 486.25,368.75 480.15,379.75L475.45,387.85C468.85,398.85 461.45,409.25 453.35,419.05C447.45,426.25 437.65,428.65 428.85,425.85L389.15,413.25C379.15,410.05 368.35,412.15 359.45,417.85C354.55,420.95 349.55,423.95 344.35,426.55C335.05,431.35 327.85,439.75 325.55,449.95L316.65,490.65C314.65,499.75 307.65,506.95 298.45,508.45C284.65,510.75 270.45,511.95 255.95,511.95C241.45,511.95 227.25,510.75 213.45,508.45C204.25,506.95 197.25,499.75 195.25,490.65L186.35,449.95C184.15,439.75 176.85,431.35 167.55,426.55C162.35,423.85 157.35,420.95 152.45,417.85C143.65,412.15 132.75,410.05 122.75,413.25L83.15,425.95C74.35,428.75 64.55,426.25 58.65,419.15C50.55,409.35 43.15,398.95 36.55,387.95L31.85,379.85C25.75,368.85 20.45,357.45 16.05,345.55C12.85,336.85 15.55,327.15 22.45,320.95L53.35,292.85C61.05,285.75 64.75,275.35 64.25,264.95C64.15,262.05 64.05,259.15 64.05,256.15C64.05,253.15 64.15,250.25 64.25,247.35C64.75,236.85 61.15,226.45 53.35,219.45L22.45,191.25C15.55,185.05 12.85,175.35 16.05,166.65C20.45,154.75 25.75,143.35 31.85,132.35L36.55,124.25C43.15,113.25 50.55,102.85 58.65,93.05C64.55,85.85 74.35,83.45 83.15,86.25L122.85,98.85C132.85,102.05 143.65,99.95 152.55,94.25C157.45,91.15 162.45,88.15 167.65,85.55C176.95,80.75 184.15,72.35 186.45,62.15L195.35,21.45C197.35,12.35 204.35,5.15 213.55,3.65C227.35,1.25 241.55,0.05 256.05,0.05C270.55,0.05 284.75,1.25 298.55,3.55C307.75,5.05 314.75,12.25 316.75,21.35L325.65,62.05C327.85,72.25 335.05,80.65 344.45,85.45C349.65,88.15 354.65,91.05 359.55,94.15C368.35,99.85 379.25,101.85 389.25,98.75L428.95,86.15C437.75,83.35 447.55,85.85 453.45,92.95C461.55,102.75 468.95,113.15 475.55,124.15L480.25,132.25C486.35,143.25 491.65,154.65 496.05,166.55L495.95,166.65ZM256.05,336.05C299.937,336.05 336.05,299.937 336.05,256.05C336.05,212.163 299.937,176.05 256.05,176.05C212.163,176.05 176.05,212.163 176.05,256.05C176.05,299.937 212.163,336.05 256.05,336.05Z"
    style="fill: none; stroke: currentColor; stroke-width:65"
  />
</svg>

<svg
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
  aria-hidden="true" focusable="false" role="img"
  class="icon spin slow x2 yellow fgc-50 mar-l-2"
>
  <path
    d="M495.95,166.65C499.15,175.35 496.45,185.05 489.55,191.25L458.65,219.35C450.95,226.45 447.25,236.85 447.75,247.25C447.85,250.15 447.95,253.05 447.95,256.05C447.95,259.05 447.85,261.95 447.75,264.85C447.25,275.35 450.85,285.75 458.65,292.75L489.55,320.85C496.45,327.05 499.15,336.75 495.95,345.45C491.55,357.35 486.25,368.75 480.15,379.75L475.45,387.85C468.85,398.85 461.45,409.25 453.35,419.05C447.45,426.25 437.65,428.65 428.85,425.85L389.15,413.25C379.15,410.05 368.35,412.15 359.45,417.85C354.55,420.95 349.55,423.95 344.35,426.55C335.05,431.35 327.85,439.75 325.55,449.95L316.65,490.65C314.65,499.75 307.65,506.95 298.45,508.45C284.65,510.75 270.45,511.95 255.95,511.95C241.45,511.95 227.25,510.75 213.45,508.45C204.25,506.95 197.25,499.75 195.25,490.65L186.35,449.95C184.15,439.75 176.85,431.35 167.55,426.55C162.35,423.85 157.35,420.95 152.45,417.85C143.65,412.15 132.75,410.05 122.75,413.25L83.15,425.95C74.35,428.75 64.55,426.25 58.65,419.15C50.55,409.35 43.15,398.95 36.55,387.95L31.85,379.85C25.75,368.85 20.45,357.45 16.05,345.55C12.85,336.85 15.55,327.15 22.45,320.95L53.35,292.85C61.05,285.75 64.75,275.35 64.25,264.95C64.15,262.05 64.05,259.15 64.05,256.15C64.05,253.15 64.15,250.25 64.25,247.35C64.75,236.85 61.15,226.45 53.35,219.45L22.45,191.25C15.55,185.05 12.85,175.35 16.05,166.65C20.45,154.75 25.75,143.35 31.85,132.35L36.55,124.25C43.15,113.25 50.55,102.85 58.65,93.05C64.55,85.85 74.35,83.45 83.15,86.25L122.85,98.85C132.85,102.05 143.65,99.95 152.55,94.25C157.45,91.15 162.45,88.15 167.65,85.55C176.95,80.75 184.15,72.35 186.45,62.15L195.35,21.45C197.35,12.35 204.35,5.15 213.55,3.65C227.35,1.25 241.55,0.05 256.05,0.05C270.55,0.05 284.75,1.25 298.55,3.55C307.75,5.05 314.75,12.25 316.75,21.35L325.65,62.05C327.85,72.25 335.05,80.65 344.45,85.45C349.65,88.15 354.65,91.05 359.55,94.15C368.35,99.85 379.25,101.85 389.25,98.75L428.95,86.15C437.75,83.35 447.55,85.85 453.45,92.95C461.55,102.75 468.95,113.15 475.55,124.15L480.25,132.25C486.35,143.25 491.65,154.65 496.05,166.55L495.95,166.65ZM256.05,336.05C299.937,336.05 336.05,299.937 336.05,256.05C336.05,212.163 299.937,176.05 256.05,176.05C212.163,176.05 176.05,212.163 176.05,256.05C176.05,299.937 212.163,336.05 256.05,336.05Z"
    style="fill: none; stroke: currentColor; stroke-width:65"
  />
</svg>
`,sL=`<svg
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
  aria-hidden="true" focusable="false" role="img"
  class="icon beat x2 red fgc-50"
>
  <path
    d="M256,128C298,48 382,48 424,88C466,128 466,208 424,288C394,348 319,408 256,448C193,408 118,348 88,288C46,208 46,128 88,88C130,48 214,48 256,128Z"
    style="fill: none; stroke: currentColor; stroke-width:65"
  />
</svg>

<svg
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
  aria-hidden="true" focusable="false" role="img"
  class="icon beat fast x2 red fgc-50 mar-l-2"
>
  <path
    d="M256,128C298,48 382,48 424,88C466,128 466,208 424,288C394,348 319,408 256,448C193,408 118,348 88,288C46,208 46,128 88,88C130,48 214,48 256,128Z"
    style="fill: none; stroke: currentColor; stroke-width:65"
  />
</svg>

<svg
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
  aria-hidden="true" focusable="false" role="img"
  class="icon beat slow x2 red fgc-50 mar-l-2"
>
  <path
    d="M256,128C298,48 382,48 424,88C466,128 466,208 424,288C394,348 319,408 256,448C193,408 118,348 88,288C46,208 46,128 88,88C130,48 214,48 256,128Z"
    style="fill: none; stroke: currentColor; stroke-width:65"
  />
</svg>

`,aL=()=>t.jsxs("div",{className:"flow prose",children:[t.jsx("h1",{children:"Icons"}),t.jsxs("p",{children:["Some basic styles are included for SVG icons. Add the ",t.jsx("code",{children:"icon"})," ","class to an inline SVG image to use them."]}),t.jsx(S,{html:QN,language:"html",caption:"Icon"}),t.jsx("h2",{children:"Sizing"}),t.jsx("p",{children:"Icons are sized in em units meaning they scale with text in different sizes."}),t.jsx(S,{html:XN,language:"html",caption:"Icon Sizes"}),t.jsx("h2",{children:"Fill and Stroke Colors"}),t.jsxs("p",{children:["SVG icons can use ",t.jsx("code",{children:"currentColor"})," for either the"," ",t.jsx("code",{children:"fill"})," or ",t.jsx("code",{children:"stroke"})," properties to inherit the current text color."]}),t.jsx(S,{html:JN,language:"html",caption:"Icon Colors"}),t.jsxs(re,{align:"bottom",children:[t.jsxs("div",{children:[t.jsxs("p",{children:["SVG elements can use the ",t.jsx("code",{children:"fill-fg"})," and ",t.jsx("code",{children:"fill-bg"})," ","classes to set the fill color to the current foreground or background colors respectively.  Similarly the ",t.jsx("code",{children:"stroke-fg"})," and"," ",t.jsx("code",{children:"stroke-bg"})," will set the stroke color to the foreground or"," ","background color."]}),t.jsxs("p",{children:["These CSS rules are scoped to all ",t.jsx("code",{children:"svg"})," elements rather",t.jsx("code",{children:"svg.icon"})," specifically.  So you can use them in any SVG images, not just icons."]})]}),t.jsxs(Zr,{children:["CSS styles can only be applied to inline SVG elements.  They don't work for SVG images loaded using the ",t.jsx("code",{children:"img"})," ","tag or applied using a ",t.jsx("code",{children:"background-image"})," style."]})]}),t.jsx(S,{html:nL,language:"html",caption:"Icon Style"}),t.jsxs("p",{children:["You can also use the ",t.jsx("code",{children:"flc-N"})," and ",t.jsx("code",{children:"stc-N"})," classes to set the fill color or stroke color of an SVG element to a stop in the current palette.  The ",t.jsx("code",{children:"fld-N"})," and ",t.jsx("code",{children:"std-N"})," classes allow you to set different fill or stroke color stops for dark mode."]}),t.jsx(S,{html:eL,language:"html",caption:"Icon Style"}),t.jsx("h2",{children:"Custom Styling"}),t.jsxs("p",{children:["You can define your own styles to target different elements in an SVG icon.  This example illustrated the use of generic"," ",t.jsx("code",{children:"--color-N"})," variables to set the fill and stroke styles on elements in an icon.  The only thing that's determining the color range is the ",t.jsx("code",{children:"blue"})," class on the ",t.jsx("code",{children:"svg"})," ","element.  Change that to the name of any other color range and the styles will work equally well."]}),t.jsxs("p",{children:["Also note the use of the"," ",t.jsx("code",{children:"--unfilled"})," custom property which sets the background color for the unchecked checkbox.  This allows us to set different color stops for use in light and dark themes."]}),t.jsx(S,{html:tL,language:"html",caption:"Icon Style"}),t.jsx("h2",{children:"Animation Effects"}),t.jsxs(re,{align:"end",children:[t.jsxs("div",{children:[t.jsxs("p",{children:["The ",t.jsx("code",{children:"spin"})," CSS class will make the icon spin.  Ideal for spinners!  Add the ",t.jsx("code",{children:"reverse"})," class to reverse the direction."]}),t.jsxs("p",{children:["The default animation time is 2s.  You can add the ",t.jsx("code",{children:"fast"})," CSS class to double the speed (animation time is 1s) or ",t.jsx("code",{children:"slow"})," to halve it (animation time is 4s).  Or you can set the"," ",t.jsx("code",{children:"--icon-animation-time"})," property to anything you like."]})]}),t.jsxs(Zr,{children:["These animations are disabled if the user's browser has the ",t.jsx("code",{children:"prefers-reduced-motion"})," option set to ",t.jsx("code",{children:"reduce"}),"."]})]}),t.jsx(S,{html:rL,language:"html",caption:"Icon Spin"}),t.jsx(re,{align:"end",children:t.jsxs("div",{children:[t.jsxs("p",{children:["The ",t.jsx("code",{children:"beat"})," CSS class will make the icon beat."]}),t.jsxs("p",{children:["The default animation time here is 1s.  The ",t.jsx("code",{children:"fast"})," class doubles the speed (animation time is 0.5s) and the ",t.jsx("code",{children:"slow"})," class halves it (animation speed is 2s)."]})]})}),t.jsx(S,{html:sL,language:"html",caption:"Icon Beat"})]}),lL=Object.freeze(Object.defineProperty({__proto__:null,default:aL},Symbol.toStringTag,{value:"Module"})),oL=`<div class="menu">
  <div class="item">
    Item One
  </div>
  <div class="item">
    Item Two
  </div>
  <div class="item">
    Item Three
  </div>
</div>`,iL=`<div class="menu lined">
  <div class="item">
    Item One
  </div>
  <div class="item">
    Item Two
  </div>
  <div class="item">
    Item Three
  </div>
</div>`,dL=`<div class="menu border">
  <div class="item">
    Item One
  </div>
  <div class="item">
    Item Two
  </div>
  <div class="item">
    Item Three
  </div>
</div>`,cL=`<div class="menu border">
  <div class="item">
    Some <span class="red fgc-50">red</span> text
  </div>
  <div class="item">
    Some <span class="green inverse pad-h">green inverse</span> text
  </div>
  <div class="item">
    Some <span class="blue fgc-50">blue</span> text
  </div>
  <div class="item flex gap-2 middle">
    An <span class="orange badge">orange badge</span>
  </div>
  <div class="item flex gap-2 middle">
    A <span class="teal button">teal button</span>
  </div>
  <div class="item flex gap-2 middle">
    <svg
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
      aria-hidden="true" focusable="false" role="img"
      class="icon blue fgc-50 bgc-80 pad"
    >
      <path
        d="M64,268L184,388L448,124"
        style="fill:none;stroke:currentColor;stroke-width:65"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
      aria-hidden="true" focusable="false" role="img"
      class="icon orange fgc-50 bgc-80 pad"
    >
      <path
        d="M64,268L184,388L448,124"
        style="fill:none;stroke:currentColor;stroke-width:65"
      />
    </svg>
  </div>
</div>`,uL=`<div class="menu border bdr-2">
  <div class="item">
    Item One
  </div>
  <div class="item">
    Item Two
  </div>
  <div class="item">
    Item Three
  </div>
</div>

<div class="menu border bdr-2 bdw-2 mar-t-4">
  <div class="item">
    Item One
  </div>
  <div class="item">
    Item Two
  </div>
  <div class="item">
    Item Three
  </div>
</div>`,hL=`<div class="menu border bdr-2">
  <div class="item disabled">
    Disabled Item One
  </div>
  <div class="item" aria-disabled="true">
    Disabled Item Two
  </div>
</div>
`,pL=`<div class="menu border bdr-2">
  <div class="item">
    Item One
  </div>
  <div class="item no-hover">
    Item Two (no-hover)
  </div>
  <div class="item">
    Item Three
  </div>
</div>
`,fL=`<div class="menu border bdr-2">
  <div class="item no-hover">
    Item One
  </div>
  <div class="item active">
    Item Two (active)
  </div>
  <div class="item no-hover">
    Item Three
  </div>
</div>
`,mL=`<div class="menu border bdr-2">
  <div class="item no-hover">
    Item One
  </div>
  <div class="item selected">
    Item Two (selected)
  </div>
  <div class="item no-hover">
    Item Three
  </div>
</div>
`,gL=`<div class="menu border bdr-2">
  <div class="item heading no-hover">
    Animals
  </div>
  <div class="item">
    Aardvark
  </div>
  <div class="item">
    Badger
  </div>
  <div class="item">
    Camel
  </div>
  <div class="item heading no-hover">
    Places
  </div>
  <div class="item">
    Airport
  </div>
  <div class="item">
    Bowling Alley
  </div>
  <div class="item">
    Car Park
  </div>
</div>
`,vL=`<div class="menu border bdr-2">
  <div class="item">
    Aardvark
  </div>
  <div class="item">
    Badger
  </div>
  <div class="item">
    Camel
  </div>
  <div class="separator"></div>
  <div class="item">
    Airport
  </div>
  <div class="item">
    Bowling Alley
  </div>
  <div class="item">
    Car Park
  </div>
</div>
`,xL=`<div class="menu border bdr-2">
  <div class="item heading no-hover">
    Animals
  </div>
  <div class="item heading no-hover indent-1">
    Mammals
  </div>
  <div class="item indent-2">
    Aardvark
  </div>
  <div class="item indent-2">
    Badger
  </div>
  <div class="item indent-2">
    Camel
  </div>
  <div class="item heading no-hover indent-1">
    Reptiles
  </div>
  <div class="item indent-2">
    Alligator
  </div>
  <div class="item indent-2">
    Boa
  </div>
  <div class="item indent-2">
    Coral Snake
  </div>
</div>
`,bL=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Menu"}),t.jsxs("p",{children:["To render a simple vertical menu, add the ",t.jsx("code",{children:"menu"})," class to a container and ",t.jsx("code",{children:"item"})," to each child item."]}),t.jsx(S,{html:oL,language:"html",caption:"Menu"}),t.jsx("h2",{children:"Lined Style"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"lined"})," class can be added to put a line between each item."]}),t.jsx(S,{html:iL,language:"html",caption:"Lined"}),t.jsx("h2",{children:"Border Style"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"border"})," class can be added to put a border around the menu and lines between each item."]}),t.jsx(S,{html:dL,language:"html",caption:"Border"}),t.jsxs("p",{children:["You can add any of the other ",t.jsx(Rd,{})," utility classes to control the border width, radius, color, etc."]}),t.jsx(S,{html:uL,language:"html",caption:"Border Style"}),t.jsx("h2",{children:"Colors"}),t.jsx("p",{children:"Note that the hover/active color is set on child elements to prevent colored text becoming unreadable when an item is active.  Inverse colors, buttons and badges will have their backgrounds set to a pale variant of the background color."}),t.jsx(S,{html:cL,language:"html",caption:"Colors"}),t.jsx("h2",{children:"Disabled Items"}),t.jsxs("p",{children:["You can add the ",t.jsx("code",{children:"disabled"})," CSS class or set the"," ",t.jsx("code",{children:"aria-disabled"})," attribute to ",t.jsx("code",{children:"true"})," to disable an option in the menu."]}),t.jsx(S,{html:hL,language:"html",caption:"Disabled Items"}),t.jsx("h2",{children:"No Hover Items"}),t.jsxs("p",{children:["You can add the ",t.jsx("code",{children:"no-hover"})," CSS class if you want to disable the styling for hovered items."]}),t.jsx(S,{html:pL,language:"html",caption:"No Hover Items"}),t.jsx("h2",{children:"Active Item"}),t.jsxs("p",{children:["You can add the ",t.jsx("code",{children:"active"})," CSS class to indicate an active item.  This would typically be used in conjunction with"," ",t.jsx("code",{children:"no-hover"})," when you're implementing a UI component where the active element is determine by other means (e.g. mouseEnter events, keyboard control, etc)."]}),t.jsx(S,{html:fL,language:"html",caption:"Active Item"}),t.jsx("h2",{children:"Selected Item"}),t.jsxs("p",{children:["You can add the ",t.jsx("code",{children:"selected"})," CSS class to indicate a selected item."]}),t.jsx(S,{html:mL,language:"html",caption:"Selected Item"}),t.jsx("h2",{children:"Heading Item"}),t.jsxs("p",{children:["You can add the ",t.jsx("code",{children:"heading"})," CSS class to an item to denote it as a heading."]}),t.jsx(S,{html:gL,language:"html",caption:"Heading Item"}),t.jsx("h2",{children:"Separator"}),t.jsxs("p",{children:["You can add a ",t.jsx("code",{children:"separator"})," CSS class to an element to render a separator."]}),t.jsx(S,{html:vL,language:"html",caption:"Item Separator"}),t.jsx("h2",{children:"Indented Items"}),t.jsxs("p",{children:["You can add the ",t.jsx("code",{children:"indent-N"})," CSS class to an item to indent it. The value for ",t.jsx("code",{children:"N"})," can be 1 to 4."]}),t.jsx(S,{html:xL,language:"html",caption:"Indented Items"}),t.jsx("h2",{children:"Styling"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"$selectable-color"})," SASS variable can be used to set the color range used to indicate selectable items.  The default value is ",t.jsx("code",{children:'"brand"'})]}),t.jsxs("p",{children:["You can also set the ",t.jsx("code",{children:"--selectable-color"})," and"," ",t.jsx("code",{children:"--selectable-background"})," CSS custom properties to change the foreground and background colors respectively.  The default value for ",t.jsx("code",{children:"--selectable-color"})," is ",t.jsx("code",{children:"var(--brand-100)"})," ","and for ",t.jsx("code",{children:"--selectable-background"})," is ",t.jsx("code",{children:"var(--brand-50)"})," when using a light theme and ",t.jsx("code",{children:"var(--brand-40)"})," for the dark theme.  The ",t.jsx("code",{children:"--selected-color"})," is used for selected items. That defaults to ",t.jsx("code",{children:"--brand-40"})," for a light theme and"," ",t.jsx("code",{children:"--brand-30"})," for a dark theme."]})]}),yL=Object.freeze(Object.defineProperty({__proto__:null,default:bL},Symbol.toStringTag,{value:"Module"})),wL=`<div class="relative">
  <div class="overlay flex center middle larger pad-8">
    I do not, for one, think that the problem was that the
    band was down. I think that the problem may have been...
    that there was a Stonehenge monument on the stage that
    was in danger of being crushed by a dwarf. Alright? That
    tended to understate the hugeness of the object.
  </div>
  <p>
    May I make a suggestion? May I make a suggestion?
    I've got one other suggestion.
  </p>
  <p>
    Well let's hear yours. Let's hear your suggestion.
  </p>
  <p>
    Stonehenge! It's the best production value we've
    ever had on stage.
  </p>
  <p>
    But we haven't got the equipment. We haven't got the
    equipment, we haven't got Stonehenge, we haven't...
  </p>
  <p>
    Not yet we don't. Let's start... Musically, musically
    we all know it. Musically we all know it. Right? No
    problems musically. We go right on stage. And it's quite
    simple. This is you know... Ian can take care of this...
  </p>
  <p>
    I know what the Stonehenge monument looks like.
    We don't have that piece of scenery anymore.
  </p>
  <p>
    I know, so we build a new one. And this is it, look!
  </p>
</div>`,jL=`<div class="overlay fixed flex center middle">
  I do not, for one, think that the problem was that the
  band was down. I think that the problem may have been...
  that there was a Stonehenge monument on the stage that
  was in danger of being crushed by a dwarf. Alright? That
  tended to understate the hugeness of the object.
</div>
`,CL=`<div class="light overlay flex center middle larger pad-8">
  Maybe we just fix the choreography.
  Keep the dwarf clear. So they won&apos;t
  trod upon it.
</div>`,kL=`<div class="dark overlay flex center middle larger pad-8">
  Maybe we just fix the choreography.
  Keep the dwarf clear. So they won&apos;t
  trod upon it.
</div>`,SL=({className:e,title:n="Show Overlay"})=>{const[r,s]=F.useState(!1),a=()=>s(!0),l=()=>s(!1);return r?t.jsx("div",{className:`overlay fixed flex center middle ${e}`,children:t.jsxs("div",{className:"max-width-40rem",children:[t.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),t.jsx("button",{onClick:l,className:"red",children:"Hide Overlay"})]})}):t.jsx("div",{children:t.jsx("button",{onClick:a,className:"green",children:n})})},C0=({className:e,title:n="Show Overlay"})=>{const[r,s]=F.useState(!1),a=()=>s(!0),l=()=>s(!1);return r?t.jsx("div",{className:`overlay fixed flex center middle ${e}`,children:t.jsxs("div",{className:"max-width-40rem",children:[t.jsx("p",{className:"larger",children:"Maybe we just fix the choreography. Keep the dwarf clear. So they won't trod upon it."}),t.jsx("button",{onClick:l,className:"red",children:"Hide Overlay"})]})}):t.jsx("div",{children:t.jsx("button",{onClick:a,className:"green",children:n})})},TL=()=>{const[e,n]=F.useState(!1),r=()=>n(!0),s=()=>n(!1);return t.jsxs("div",{className:"relative pad-6 border",children:[e&&t.jsx("div",{className:"overlay flex middle center pad-8",children:t.jsxs("div",{children:[t.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),t.jsx("button",{onClick:s,className:"red",children:"Hide Overlay"})]})}),t.jsx("p",{className:"mar-t-none",children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion."}),t.jsx("p",{children:"Well let's hear yours. Let's hear your suggestion."}),t.jsx("p",{children:"Stonehenge! It's the best production value we've ever had on stage."}),t.jsx("p",{children:"But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't..."}),t.jsx("p",{children:"Not yet we don't. Let's start... Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this..."}),t.jsx("p",{children:"I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore."}),t.jsx("p",{children:"I know, so we build a new one. And this is it, look!"}),t.jsx("button",{onClick:r,className:"green",children:"Show Overlay"})]})},NL=()=>t.jsxs("div",{className:"prose",children:[t.jsx("h1",{children:"Overlay"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"overlay"})," class to an element to make it an overlay. The default positioning is ",t.jsx("code",{children:"absolute"})," so it will fill to cover the nearest parent that has positioning set to ",t.jsx("code",{children:"relative"}),"."]}),t.jsxs(re,{children:[t.jsx(_e,{code:wL,language:"html",caption:"Overlay"}),t.jsx("div",{className:"output",children:t.jsx(TL,{})})]}),t.jsx("h2",{children:"Fixed Viewport"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"fixed"})," class to set the overlay position to"," ",t.jsx("code",{children:"fixed"})," so that it covers the entire viewport."]}),t.jsxs(re,{children:[t.jsx(_e,{code:jL,caption:"Fixed",language:"html",className:"mar-b-8"}),t.jsx("div",{className:"output",children:t.jsx(SL,{})})]}),t.jsx("h2",{children:"Light and Dark"}),t.jsxs("p",{children:["The default overlay color is white for a light theme and black for a dark theme.  You can explicitly add the ",t.jsx("code",{children:"light"})," or"," ",t.jsx("code",{children:"dark"})," CSS class if you want a particular color overlay regardless of the theme."]}),t.jsxs(re,{children:[t.jsx(_e,{code:CL,language:"html",caption:"Light Overlay"}),t.jsx("div",{className:"output",children:t.jsx(C0,{className:"light",title:"Show Light Overlay"})})]}),t.jsxs(re,{align:"mar-t-8",children:[t.jsx(_e,{code:kL,language:"html",caption:"Dark Overlay"}),t.jsx("div",{className:"output",children:t.jsx(C0,{className:"dark",title:"Show Dark Overlay"})})]})]}),LL=Object.freeze(Object.defineProperty({__proto__:null,default:NL},Symbol.toStringTag,{value:"Module"})),_L=()=>{const[e,n]=F.useState({head1:!0,body:!0,foot1:!0,celled:!0,shaded:!0,striped:!0}),r=a=>()=>n(l=>({...l,[a]:!l[a]})),s=a=>l=>n(o=>({...o,[a]:l}));return t.jsxs("div",{className:"example grid-2 gap-8 stack-desktop",children:[t.jsx($L,{options:e,setOption:s,toggleOption:r}),t.jsxs("div",{children:[t.jsx("h3",{className:"mar-b-2",children:"Output"}),t.jsx("div",{className:"output",children:t.jsx(IL,{options:e})})]})]})},$L=({options:e,toggleOption:n,setOption:r})=>{const s=n("head1"),a=n("head2"),l=n("body"),o=n("foot1"),i=n("foot2"),c=n("wide"),h=n("celled"),m=n("shaded"),x=n("lined"),w=n("striped"),$=r("size"),_=r("color"),C=r("radius"),b=`<table class="${P5(e,"wide celled shaded lined striped",e.color,e.size,e.radius&&`bdr-${e.radius}`)}">
  ...
</table>`;return t.jsxs("div",{children:[t.jsx("h3",{className:"mar-b-2",children:"Options"}),t.jsxs("div",{className:"grid-4 gap-4 top stack-tablet",children:[t.jsx(Ln,{checked:e.wide,toggle:c,label:"Wide"}),t.jsx(Yp,{color:e.color,setColor:_}),t.jsx(Zp,{size:e.size,setSize:$}),t.jsx(qp,{radius:e.radius,setRadius:C}),t.jsx(Ln,{checked:e.lined,toggle:x,label:"Lined"}),t.jsx(Ln,{checked:e.celled,toggle:h,label:"Celled"}),t.jsx(Ln,{checked:e.shaded,toggle:m,label:"Shaded"}),t.jsx(Ln,{checked:e.striped,toggle:w,label:"Striped"})]}),t.jsxs("div",{className:"grid-3 gap-4 stack-tablet mar-t-4",children:[t.jsx(Ln,{checked:e.head1,toggle:s,label:"Header"}),t.jsx(Ln,{checked:e.body,toggle:l,label:"Body"}),t.jsx(Ln,{checked:e.foot1,toggle:o,label:"Footer"})]}),t.jsxs("div",{className:"grid-2 gap-4 stack-tablet mar-t-4",children:[t.jsx(Ln,{checked:e.head2,toggle:a,label:"Pre-header"}),t.jsx(Ln,{checked:e.foot2,toggle:i,label:"Post-footer"})]}),t.jsx("div",{className:"grid-5 gap-4 stack-tablet mar-t-4"}),t.jsx("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),t.jsx(_e,{code:b,language:"html",expand:!0})]})},IL=({options:e})=>{const n=A5(e,{},e.color,e.size,e.radius&&`bdr-${e.radius}`);return t.jsxs("table",{className:n,children:[(e.head1||e.head2)&&t.jsxs("thead",{children:[e.head2&&t.jsx("tr",{children:t.jsx("th",{colSpan:"3",className:"text-center",children:"Spinal Tap"})}),e.head1&&t.jsxs("tr",{children:[t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Instrument"}),t.jsx("th",{children:"Danger Level"})]})]}),e.body&&t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"Nigel"}),t.jsx("td",{children:"Tufnel"}),t.jsx("td",{children:"Guitar"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"David"}),t.jsx("td",{children:"St.Hubbins"}),t.jsx("td",{children:"Guitar"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Derek"}),t.jsx("td",{children:"Smalls"}),t.jsx("td",{children:"Bass"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Viv"}),t.jsx("td",{children:"Savage"}),t.jsx("td",{children:"Keyboards"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Mick"}),t.jsx("td",{children:"Shrimpton"}),t.jsx("td",{children:"Drums"})]})]}),(e.foot1||e.foot2)&&t.jsxs("tfoot",{children:[e.foot1&&t.jsxs("tr",{children:[t.jsx("th",{colSpan:"2",className:"text-right",children:"Total"}),t.jsx("th",{children:"5"})]}),e.foot2&&t.jsx("tr",{children:t.jsx("th",{colSpan:"3",className:"text-center",children:"Tap into America!"})})]})]})},EL=`<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nigel</td>
      <td>Guitar</td>
    </tr>
    <tr>
      <td>David</td>
      <td>Guitar</td>
    </tr>
    <tr>
      <td>Derek</td>
      <td>Bass</td>
    </tr>
    <tr>
      <td>Viv</td>
      <td>Keyboards</td>
    </tr>
    <tr>
      <td>Mick</td>
      <td>Drums</td>
    </tr>
  </tbody>
</table>`,ML=`<table class="celled">
  <thead>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nigel</td>
      <td>Guitar</td>
    </tr>
    <tr>
      <td>David</td>
      <td>Guitar</td>
    </tr>
    <tr>
      <td>Derek</td>
      <td>Bass</td>
    </tr>
    <tr>
      <td>Viv</td>
      <td>Keyboards</td>
    </tr>
    <tr>
      <td>Mick</td>
      <td>Drums</td>
    </tr>
  </tbody>
</table>`,AL=`<table class="shaded">
  <thead>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nigel</td>
      <td>Guitar</td>
    </tr>
    <tr>
      <td>David</td>
      <td>Guitar</td>
    </tr>
    <tr>
      <td>Derek</td>
      <td>Bass</td>
    </tr>
    <tr>
      <td>Viv</td>
      <td>Keyboards</td>
    </tr>
    <tr>
      <td>Mick</td>
      <td>Drums</td>
    </tr>
  </tbody>
</table>`,PL=`<table class="lined">
  <thead>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nigel</td>
      <td>Guitar</td>
    </tr>
    <tr>
      <td>David</td>
      <td>Guitar</td>
    </tr>
    <tr>
      <td>Derek</td>
      <td>Bass</td>
    </tr>
    <tr>
      <td>Viv</td>
      <td>Keyboards</td>
    </tr>
    <tr>
      <td>Mick</td>
      <td>Drums</td>
    </tr>
  </tbody>
</table>`,RL=`<table class="striped">
  <thead>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nigel</td>
      <td>Guitar</td>
    </tr>
    <tr>
      <td>David</td>
      <td>Guitar</td>
    </tr>
    <tr>
      <td>Derek</td>
      <td>Bass</td>
    </tr>
    <tr>
      <td>Viv</td>
      <td>Keyboards</td>
    </tr>
    <tr>
      <td>Mick</td>
      <td>Drums</td>
    </tr>
  </tbody>
</table>`,OL=`<table class="shaded celled">
  <thead>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nigel</th>
      <td>Guitar</td>
    </tr>
    <tr>
      <th>David</th>
      <td>Guitar</td>
    </tr>
    <tr>
      <th>Derek</th>
      <td>Bass</td>
    </tr>
    <tr>
      <th>Viv</th>
      <td>Keyboards</td>
    </tr>
    <tr>
      <th>Mick</th>
      <td>Drums</td>
    </tr>
  </tbody>
</table>`,FL=`<table class="compressed celled lined striped">
  <thead>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nigel</td>
      <td>Guitar</td>
    </tr>
    <tr>
      <td>David</td>
      <td>Guitar</td>
    </tr>
    <tr>
      <td>Derek</td>
      <td>Bass</td>
    </tr>
    <tr>
      <td>Viv</td>
      <td>Keyboards</td>
    </tr>
    <tr>
      <td>Mick</td>
      <td>Drums</td>
    </tr>
  </tbody>
</table>`,BL=`<table class="expanded celled lined striped">
  <thead>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nigel</td>
      <td>Guitar</td>
    </tr>
    <tr>
      <td>David</td>
      <td>Guitar</td>
    </tr>
    <tr>
      <td>Derek</td>
      <td>Bass</td>
    </tr>
    <tr>
      <td>Viv</td>
      <td>Keyboards</td>
    </tr>
    <tr>
      <td>Mick</td>
      <td>Drums</td>
    </tr>
  </tbody>
</table>`,DL=`<table class="brand striped celled">
  <thead>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nigel</td>
      <td>Guitar</td>
    </tr>
    <tr>
      <td>David</td>
      <td>Guitar</td>
    </tr>
    <tr>
      <td>Derek</td>
      <td>Bass</td>
    </tr>
    <tr>
      <td>Viv</td>
      <td>Keyboards</td>
    </tr>
    <tr>
      <td>Mick</td>
      <td>Drums</td>
    </tr>
  </tbody>
</table>`,zL=`<table class="shaded lined wide">
  <thead>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
      <th>Danger Level</th>
    </tr>
  </thead>
  <tbody>
    <tr class="green">
      <td>Nigel</td>
      <td>Guitar</td>
      <td>Low</td>
    </tr>
    <tr class="green">
      <td>David</td>
      <td>Guitar</td>
      <td>Low</td>
    </tr>
    <tr class="orange">
      <td>Derek</td>
      <td>Bass</td>
      <td>Medium</td>
    </tr>
    <tr class="orange">
      <td>Viv</td>
      <td>Keyboards</td>
      <td>Medium</td>
    </tr>
    <tr class="red">
      <td>Mick</td>
      <td>Drums</td>
      <td>High</td>
    </tr>
  </tbody>
</table>`,WL=`<table class="celled shaded">
  <thead>
    <tr>
      <th>Name</th>
      <th>Plays</th>
      <th>Alignment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="large">Nigel</td>
      <td>
        Guitar<br/>
        Mandolin
      </td>
      <td><code>middle</code> (default)</td>
    </tr>
    <tr class="top">
      <td class="large">David</td>
      <td>
        Guitar<br/>
        Quality footwear
      </td>
      <td><code>top</code></td>
    </tr>
    <tr class="baseline">
      <td class="large">Derek</td>
      <td>
        Bass<br/>
        Lukewarm water
      </td>
      <td><code>baseline</code></td>
    </tr>
    <tr class="middle">
      <td class="large">Viv</td>
      <td>
        Keyboards<br/>
        Rocket fuel
      </td>
      <td><code>middle</code> (explicit)</td>
    </tr>
    <tr class="bottom">
      <td class="large">Mick</td>
      <td>
        Drums<br/>
        Explosives
      </td>
      <td><code>bottom</code></td>
    </tr>
  </tbody>
</table>

<table class="celled shaded mar-t-2">
  <tbody>
    <tr>
      <td class="large baseline">
        Align<br/>
        Cells
      </td>
      <td class="small top"><code>top</code></td>
      <td class="small baseline"><code>baseline</code></td>
      <td class="small middle"><code>middle</code></td>
      <td class="small bottom"><code>bottom</code></td>
    </tr>
  </tbody>
</table>`,HL=`<table class="celled shaded selectable">
  <thead>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nigel</td>
      <td>Guitar</td>
    </tr>
    <tr>
      <td>David</td>
      <td>Guitar</td>
    </tr>
    <tr>
      <td>Derek</td>
      <td>Bass</td>
    </tr>
    <tr>
      <td>Viv</td>
      <td>Keyboards</td>
    </tr>
    <tr>
      <td>Mick</td>
      <td>Drums</td>
    </tr>
  </tbody>
</table>`,UL=`<div class="flex top wrap gap-4">
  <style>
    table.rounded {
      --border-radius: 10px;
      --padding-v:     0.5rem;
      --padding-h:     1rem;
    }
  </style>
  <table class="red shaded striped rounded">
    <thead>
      <tr>
        <th>Name</th>
        <th>Instrument</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nigel</td>
        <td>Guitar</td>
      </tr>
      <tr>
        <td>David</td>
        <td>Guitar</td>
      </tr>
      <tr>
        <td>Derek</td>
        <td>Bass</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>Total</th>
        <th>3</th>
      </tr>
    </tfoot>
  </table>
  <table class="orange shaded striped rounded">
    <thead>
      <tr>
        <th>Name</th>
        <th>Instrument</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nigel</td>
        <td>Guitar</td>
      </tr>
      <tr>
        <td>David</td>
        <td>Guitar</td>
      </tr>
      <tr>
        <td>Derek</td>
        <td>Bass</td>
      </tr>
    </tbody>
  </table>
  <table class="blue celled striped rounded">
    <tbody>
      <tr>
        <td>Nigel</td>
        <td>Guitar</td>
      </tr>
      <tr>
        <td>David</td>
        <td>Guitar</td>
      </tr>
      <tr>
        <td>Derek</td>
        <td>Bass</td>
      </tr>
    </tbody>
  </table>
</div>`,GL=()=>t.jsxs("div",{className:"prose",children:[t.jsx("h1",{children:"Tables"}),t.jsx("p",{children:"Badger CSS contains some basic table styling by default and a number of additional classes you can add to snazz things up."}),t.jsx("h2",{children:"Demo"}),t.jsx("p",{children:"Select the options to determine how the table is displayed."}),t.jsx(_L,{}),t.jsx("h2",{children:"Default Table"}),t.jsx("p",{children:"The default table style is plain."}),t.jsx(S,{html:EL,language:"html",caption:"Table"}),t.jsx("h2",{children:"Lined Table"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"lined"})," class to add borders between lines."]}),t.jsx(S,{html:PL,language:"html",caption:"Lined Table"}),t.jsx("h2",{children:"Celled Table"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"celled"})," class to add cell borders."]}),t.jsx(S,{html:ML,language:"html",caption:"Celled Table"}),t.jsx("h2",{children:"Shaded Table"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"shaded"})," class to add background colors."]}),t.jsx(S,{html:AL,language:"html",caption:"Shaded Table"}),t.jsx("h2",{children:"Striped Table"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"striped"})," class to add alternate background colors for rows."]}),t.jsx(S,{html:RL,language:"html",caption:"Striped Table"}),t.jsx("h2",{children:"Heading Cells"}),t.jsxs("p",{children:["This example shows ",t.jsx("code",{children:"th"})," elements in a row."]}),t.jsx(S,{html:OL,language:"html",caption:"Row Headings"}),t.jsx("h2",{children:"Compressed Table"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"compresses"})," class to reduce the padding."]}),t.jsx(S,{html:FL,language:"html",caption:"Compressed Table"}),t.jsx("h2",{children:"Expanded Table"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"expanded"})," class to increase the padding."]}),t.jsx(S,{html:BL,language:"html",caption:"Expanded Table"}),t.jsx("h2",{children:"Colored Table"}),t.jsx("p",{children:"Add color classes to change the base color."}),t.jsx(S,{html:DL,language:"html",caption:"Colored Table"}),t.jsx("h2",{children:"Colored Rows"}),t.jsx("p",{children:"Add color classes to rows to get different background colors."}),t.jsx(S,{html:zL,language:"html",caption:"Colored Rows"}),t.jsx("h2",{children:"Selectable Rows"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"selectable"})," class to make the rows appear selectable. This uses the same colours as ",t.jsx(ZS,{})," which can be changed using the ",t.jsx("code",{children:"$selectable-color"})," SASS variable or the ",t.jsx("code",{children:"--selectable-color"})," and ",t.jsx("code",{children:"--selectable-background"})," ","CSS custom properties."]}),t.jsx(S,{html:HL,language:"html",caption:"Selectable Rows"}),t.jsx("h2",{children:"Vertical Alignment"}),t.jsxs("p",{children:["The default vertical alignment for a table is ",t.jsx("code",{children:"middle"}),".  Add the ",t.jsx("code",{children:"top"}),", ",t.jsx("code",{children:"baseline"}),", ",t.jsx("code",{children:"middle"})," or"," ",t.jsx("code",{children:"bottom"})," classes to the ",t.jsx("code",{children:"table"})," element or any"," ",t.jsx("code",{children:"tr"}),", ",t.jsx("code",{children:"th"})," or ",t.jsx("code",{children:"td"})," elements to change it. You can also set the ",t.jsx("code",{children:"--valign"})," CSS custom property to any of those values."]}),t.jsx(S,{html:WL,language:"html",caption:"Vertical Alignment"}),t.jsx("h2",{children:"Customised Table"}),t.jsx("p",{children:"You can customise tables using CSS properties."}),t.jsx(S,{html:UL,language:"html",caption:"Rounded Table"})]}),VL=Object.freeze(Object.defineProperty({__proto__:null,default:GL},Symbol.toStringTag,{value:"Module"})),YL=`<div class="tabset">
  <ul class="tabs">
    <li>One</li>
    <li class="active">Two</li>
    <li>Three</li>
    <li class="disabled">Four</li>
  </ul>
</div>`,ZL=`<div class="tabset lined">
  <ul class="tabs">
    <li>One</li>
    <li class="active">Two</li>
    <li>Three</li>
    <li class="disabled">Four</li>
  </ul>
</div>`,qL=`<div class="tabset brand solid lined">
  <ul class="tabs">
    <li>One</li>
    <li class="active">Two</li>
    <li>Three</li>
    <li class="disabled">Four</li>
  </ul>
</div>`,KL=`<div class="tabset brand solid lined center">
  <ul class="tabs">
    <li>One</li>
    <li class="active">Two</li>
    <li>Three</li>
  </ul>
</div>`,QL=`<div class="tabset brand solid lined right">
  <ul class="tabs">
    <li>One</li>
    <li class="active">Two</li>
    <li>Three</li>
  </ul>
</div>`,XL=`<div class="tabset brand solid lined" style="--tab-line-width: 3px">
  <ul class="tabs">
    <li>One</li>
    <li class="active">Two</li>
    <li>Three</li>
    <li>Four</li>
    <li>Five</li>
    <li>Six</li>
    <li>Seven</li>
    <li>Eight</li>
    <li>Nine</li>
    <li>Ten</li>
    <li>Eleven</li>
  </ul>
</div>`,JL=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Tabs"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"tabset"})," class to a container and then define a set of elements with the ",t.jsx("code",{children:"tab"})," class.  The"," ",t.jsx("code",{children:"disabled"})," class can be added to a tab to disable it."]}),t.jsx(S,{html:YL,language:"html",caption:"Tabs"}),t.jsx("h2",{children:"Lined"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"lined"})," class to the ",t.jsx("code",{children:"tabset"})," to add a line under the tabs."]}),t.jsx(S,{html:ZL,language:"html",caption:"Lined Tabs"}),t.jsx("h2",{children:"Solid"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"solid"})," class to the ",t.jsx("code",{children:"tabset"})," for solid tabs."]}),t.jsx(S,{html:qL,language:"html",caption:"Solid Tabs"}),t.jsx("h2",{children:"Center"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"center"})," class to the ",t.jsx("code",{children:"tabset"})," to align the tabs in the center."]}),t.jsx(S,{html:KL,language:"html",caption:"Center Tabs"}),t.jsx("h2",{children:"Right"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"right"})," class to the ",t.jsx("code",{children:"tabset"})," to align the tabs to the right."]}),t.jsx(S,{html:QL,language:"html",caption:"Right Tabs"}),t.jsx("h2",{children:"Scroll"}),t.jsx("p",{children:"If there are too many tabs to be displayed then they will appear in a horizontally scrolling element."}),t.jsx(S,{html:XL,language:"html",caption:"Scrolling Tabs"})]}),e_=Object.freeze(Object.defineProperty({__proto__:null,default:JL},Symbol.toStringTag,{value:"Module"})),n_=`<button
  data-tooltip
  aria-label="This is a tooltip"
>
    Hover to see tooltip
</button>
`,t_=`<div class="flex space">
  <button
    data-tooltip="right"
    aria-label="This is a tooltip to the right"
  >
    Tooltip right
  </button>
  <button
    data-tooltip="top"
    aria-label="This is a tooltip above"
  >
    Tooltip up
  </button>
  <button
    data-tooltip="bottom"
    aria-label="This is a tooltip below"
  >
    Tooltip down
  </button>
  <button
    data-tooltip="left"
    aria-label="This is a tooltip to the left"
  >
    Tooltip left
  </button>
</div>
`,r_=`<div class="flex space">
  <button
    data-tooltip="top left"
    aria-label="This is a tooltip to the top left"
  >
    Tooltip top left
  </button>
  <button
    data-tooltip="top right"
    aria-label="This is a tooltip to the top right"
  >
    Tooltip top right
  </button>
</div>
<div class="flex space mar-t-4">
  <button
    data-tooltip="bottom left"
    aria-label="This is a tooltip to the bottom left"
  >
    Tooltip bottom left
  </button>
  <button
    data-tooltip="bottom right"
    aria-label="This is a tooltip to the bottom right"
  >
    Tooltip bottom right
  </button>
</div>`,s_=`<button
  data-tooltip
  aria-label="This is a tooltip with a lot of text which should wrap after a certain point"
  class="mar-r-4"
>
  normal
</button>
<button
  data-tooltip
  aria-label="This is a tooltip with a lot of text which goes up to eleven because it's one longer"
  class="tt-wide mar-r-4"
>
  wide
</button>
<button
  data-tooltip
  aria-label="Nothing shall come of nothing,
  speak again Cordelia"
  class="tt-wide"
>
  newline
</button>
`,a_=`<button data-tooltip>
  Spin̈al Tap
  <div class="tooltip width-30 pad-none border bdc-10 bdd-90 bdw-2">
    <table class="wide orange shaded lined">
      <tbody>
        <tr>
          <th class="nowrap text-left">Nigel Tufnel</th>
          <td>Guitar</td>
        </tr>
        <tr>
          <th class="nowrap text-left">David Saint Hubbins</th>
          <td>Guitar</td>
        </tr>
        <tr>
          <th class="nowrap text-left">Derek Smalls</th>
          <td>Bass</td>
        </tr>
        <tr>
          <th class="nowrap text-left">Viv Savage</th>
          <td>Keyboards</td>
        </tr>
        <tr>
          <th class="nowrap text-left">Mick Shrimpton</th>
          <td>Drums</td>
        </tr>
      </tbody>
    </table>
  </div>
</button>
`,l_=`<style>
  .big-blue-tooltips {
    --tooltip-font-size: 1.25rem;
    --tooltip-font-weight: 500;
    --tooltip-padding: 0.75em 1.5em;
    --tooltip-radius: 0.5em;
    --tooltip-margin: 10px;
    --tooltip-arrow: 16px;
    --tooltip-background: var(--blue-50);
    --tooltip-color: var(--blue-90);
    --tooltip-shadow: 3px 3px 12px rgba(0, 0, 0, 0.3);
  }
  [data-theme=dark] .big-blue-tooltips {
    --tooltip-color: var(--blue-0);
  }
</style>
<div class="big-blue-tooltips">
  <div class="flex space">
    <button
      data-tooltip="top left"
      aria-label="This is a tooltip to the top left"
    >
      Tooltip top left
    </button>
    <button
      data-tooltip="top right"
      aria-label="This is a tooltip to the top right"
    >
      Tooltip top right
    </button>
  </div>
  <div class="flex space mar-t-4">
    <button
      data-tooltip="bottom left"
      aria-label="This is a tooltip to the bottom left"
    >
      Tooltip bottom left
    </button>
    <button
      data-tooltip="bottom right"
      aria-label="This is a tooltip to the bottom right"
    >
      Tooltip bottom right
    </button>
  </div>
</div>`,o_=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Tooltips"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"data-tooltip"})," attribute to an element to enable a tooltip.  The tooltip text should be defined in the ",t.jsx("code",{children:"aria-label"})," ","property so that it's also accessible to screen readers."]}),t.jsx(S,{html:n_,language:"html",caption:"Tooltip"}),t.jsx("h2",{children:"Tooltip Position"}),t.jsxs("p",{children:["You can set the ",t.jsx("code",{children:"data-tooltip"})," attribute to any of"," ",t.jsx("code",{children:"left"}),", ",t.jsx("code",{children:"right"}),", ",t.jsx("code",{children:"top"})," or"," ",t.jsx("code",{children:"bottom"})," to set the tooltip position."]}),t.jsx(S,{html:t_,language:"html",caption:"Tooltip Position"}),t.jsxs("p",{children:["You can also combine them as "," ",t.jsx("code",{children:"top left"}),", ",t.jsx("code",{children:"top right"}),", ",t.jsx("code",{children:"bottom left"})," ","and ",t.jsx("code",{children:"bottom right"}),"."]}),t.jsx(S,{html:r_,language:"html",caption:"Tooltip Corners"}),t.jsx("h2",{children:"Wrapping"}),t.jsxs("p",{children:["The tooltip has a minimum and maximum width set to keep things sensible. You can add the ",t.jsx("code",{children:"tt-wide"})," class if you want the tooltip to extend to the full width of the tooltip text."]}),t.jsxs("p",{children:["You can add newlines to the ",t.jsx("code",{children:"aria-label"})," property if you want to force line breaks."]}),t.jsx(S,{html:s_,language:"html",caption:"Tooltip Wrapping"}),t.jsx("h2",{children:"Content"}),t.jsxs("p",{children:["As an alternative to setting the ",t.jsx("code",{children:"aria-label"})," you can define the tooltip content in a child element with the"," ",t.jsx("code",{children:"tooltip"})," CSS class."]}),t.jsx(S,{html:a_,language:"html",caption:"Tooltip Content"}),t.jsx("h2",{children:"Custom Tooltip Style"}),t.jsx("p",{children:"There are a number of SCSS variables that can be used to set the defaults, or you can use CSS variables to create custom tooltip styles."}),t.jsx(S,{html:l_,language:"html",caption:"Custom Tooltips"})]}),i_=Object.freeze(Object.defineProperty({__proto__:null,default:o_},Symbol.toStringTag,{value:"Module"})),d_=`@import "helpers/all.scss";
@import "config/all.scss";
@import "color/palette.scss";
@import "utilities/all.scss";
@import "forms/all.scss";
@import "components/all.scss";
`,c_=`/* helpers/all.scss */
@import "functions.scss";
@import "mixins.scss";`,u_=`/* config/all.scss */
@import "namespaces.scss";
@import "units.scss";
`,h_=`/* utilities/all.scss */
@import "reset.scss";
@import "alignment.scss";
@import "borders.scss";
@import "breakpoints.scss";
@import "color.scss";
@import "columns.scss";
@import "conform.scss";
@import "dark.scss";
@import "display.scss";
@import "flex.scss";
@import "fonts.scss";
@import "gradients.scss";
@import "grid.scss";
@import "layout.scss";
@import "position.scss";
@import "scroll.scss";
@import "shadows.scss";
@import "sizes.scss";
@import "spacing.scss";
@import "split.scss";
@import "styles.scss";
@import "surfaces.scss";
@import "typography.scss";
@import "weights.scss";
@import "widths.scss";
@import "wrap.scss";
@import "responsive.scss";
`,p_=`/* forms/all.scss */
@import "config.scss";
@import "buttons.scss";
@import "input.scss";
@import "inputs.scss";
@import "select.scss";
@import "switches.scss";
@import "range.scss";
@import "fields.scss";
@import "fieldset.scss";`,f_=`/* components/all.scss */
@import "alerts";
@import "badges";
@import "details";
@import "dialog";
// @import "dropdown";
@import "icons";
@import "menu";
@import "overlay";
@import "selectable";
@import "tables";
@import "tabs";
@import "tooltips";
`,m_=`@import "@abw/badger-css/styles/helpers/all.scss";
@import "@abw/badger-css/styles/config/all.scss";
@import "@abw/badger-css/styles/color/palette.scss";
@import "@abw/badger-css/styles/utilities/all.scss";
@import "@abw/badger-css/styles/forms/all.scss";
@import "@abw/badger-css/styles/components/all.scss";
`,k0={helpers:c_,config:u_,utilities:h_,forms:p_,components:f_},g_=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Customising With Sass"}),t.jsxs(re,{children:[t.jsx("div",{children:t.jsxs("p",{children:["This is what the main ",t.jsx("code",{children:"badger.scss"})," file looks like."]})}),t.jsx(_e,{code:d_,caption:"badger.scss",language:"scss",expand:!0})]}),t.jsxs("h2",{children:["Custom ",t.jsx("code",{children:"badger.scss"})]}),t.jsxs(re,{children:[t.jsxs("div",{children:[t.jsxs("p",{children:["You can create your own version of this file if you want to pick and choose which parts you want and don't want. You just need to prefix each file path with"," ",t.jsx("code",{children:"@abw/badger-css/styles"}),"."]}),t.jsxs("p",{children:["For example, instead of",t.jsx("code",{children:'@import "helpers/all.scss";'})," you would write"," ",t.jsx("code",{children:'@import "@abw/badger-css/styles/helpers/all.scss";'}),"."]})]}),t.jsx(_e,{code:m_,caption:"Custom badger.scss",language:"scss",expand:!0})]}),t.jsx("h2",{children:"Other Files"}),t.jsxs("p",{children:["Each of the ",t.jsx("code",{children:"all.scss"})," file is an index which loads the other files in that directory.  The first two, ",t.jsx("code",{children:"helpers/all.scss"})," ","and ",t.jsx("code",{children:"config/all.scss"})," are mandatory.  They don't generate any output, but define variables and helper functions required by the other files."]}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"config/palette.scss"})," is a special case.  It's generated automatically from a palette configuration file.  You can create your own palette to replace the builtin palette if you want to.  You can read more about it on the ",t.jsx(E5,{})," page."]}),t.jsxs("p",{children:["The remaining files are up for grabs.  For example, you can omit the"," ",t.jsx("code",{children:"forms/all.scss"})," if you're not interesting in the form styles, or the ",t.jsx("code",{children:"components/all.scss"})," if you don't want any of the components.  The ",t.jsx("code",{children:"utilities/all.scss"})," is also optional, although you might find that some of the components depend on utility classes contained therein."]}),t.jsx("p",{children:"Or you can create your own versions of those file to pick and choose which parts you want."}),t.jsx(v_,{})]}),v_=()=>{const[e,n]=F.useState("helpers");return t.jsxs(re,{children:[t.jsxs("div",{children:[t.jsxs("p",{children:["This is what the ",t.jsxs("code",{children:[e,"/all.scss"]})," file looks like."]}),t.jsx("div",{className:"buttons mar-b-4",children:Object.keys(k0).map(r=>t.jsx("button",{onClick:()=>n(r),className:r===e?"brand":"grey outline",children:r},r))}),t.jsxs("p",{children:["You can browse the source code for these files"," ",t.jsx("a",{href:"https://github.com/abw/badger-css/tree/master/styles",children:"on Github"}),"."]})]}),t.jsx(_e,{code:k0[e],caption:`${e}/all.scss`,language:"scss",expand:!0})]})},x_=Object.freeze(Object.defineProperty({__proto__:null,default:g_},Symbol.toStringTag,{value:"Module"})),fs=(e="rem",n=.25)=>[0,1,2,3,4,6,8,10,12,16,20,24,28,32].reduce((r,s)=>({...r,[s]:{vars:{unit:`${s} unit${s==1?"":"s"} (${s*n}${e})`}}}),{}),S0=e=>({t:{vars:{sides:"the top"},more:fs(e)},r:{vars:{sides:"the right"},more:fs(e)},b:{vars:{sides:"the right"},more:fs(e)},l:{vars:{sides:"the left"},more:fs(e)},v:{vars:{sides:"the top and bottom (v = vertical)"},more:fs(e)},h:{vars:{sides:"the left and right (h = horizontal)"},more:fs(e)},...fs(e)}),T0=e=>[2,4,6,8,10,12,14,16,18,20,30,40,50,60,70,90,100].reduce((n,r)=>({...n,[`${r}rem`]:{description:()=>e(r)}}),{}),N0=e=>[2,4,6,8,10,12,14,16,18,20,30,40,50,60,70,90,100].reduce((n,r)=>({...n,[`${r*16}px`]:{description:()=>e(r*16)}}),{}),b_={mar:{vars:{unit:"1 unit (0.25rem)",sides:"all sides"},description:e=>`Add ${e.unit} margin to ${e.sides}`,more:S0("rem")},pad:{vars:{unit:"1 unit (0.25em)",sides:"all sides"},description:e=>`Add ${e.unit} margin to ${e.sides}`,more:S0("em")},width:{more:{...T0(e=>`Set width to ${e}rem (${e*16}px)`),...N0(e=>`Set width to ${e}px`)}},max:{more:{width:{more:{...T0(e=>`Set max-width to ${e}rem (${e*16}px)`),...N0(e=>`Set max-width to ${e}px`)}}}},text:{more:{left:{description:()=>"Align text to the left"},right:{description:()=>"Align text to the right"},center:{description:()=>"Align text to the center"}}},block:{more:{left:{description:()=>"Align block to the left"},right:{description:()=>"Align block to the right"},center:{description:()=>"Align block to the center"}}},display:{more:{inline:{description:()=>"Display element inline"},block:{description:()=>"Display element as a block"},"inline-block":{description:()=>"Display element as an inline block"}}},font:{more:{sans:{description:()=>"Use a sans-serif font"},serif:{description:()=>"Use a serif font"},system:{description:()=>"Use the system font"},mono:{description:()=>"Use a monospaced font"}}}},y_=e=>{const n=e.split("-");let r=[],s=[],a=[],l={},o=b_,i;for(;n.length;){const c=n.shift(),h=o[c];if(h)console.log(`matched ${c}`),i=h.description||i,h.vars&&(l={...l,...h.vars}),r.push(c),o=h.more||{},a=Object.keys(o);else{s.push(c);break}}return{good:r,rest:s,vars:l,next:a,description:i?i(l):null}},w_=e=>v5(e).filter(n=>!n.match(/^\s*$/)).map(y_),j_=()=>{const[e,n]=F.useState("");return t.jsxs("div",{children:[t.jsx("h1",{children:"Class Decoder"}),t.jsx("p",{children:"Enter one or more Badger-CSS classes for an explanation."}),t.jsxs("form",{className:"max-width-30rem",children:[t.jsxs("div",{className:"field",children:[t.jsx("label",{children:"CSS Classes"}),t.jsx("input",{type:"text",className:"wide",value:e,onChange:r=>n(r.target.value)})]}),t.jsx("button",{type:"button",className:"reset grey button outline",onClick:()=>n(""),children:"Reset"})]}),t.jsx("div",{children:!!e.length&&t.jsx(C_,{input:e})})]})},C_=({input:e})=>{const n=w_(e);return console.log("results: ",n),t.jsx("table",{className:"celled border bdr-2 mar-t-4",children:t.jsx("tbody",{children:n.map((r,s)=>t.jsxs("tr",{children:[t.jsxs("td",{className:"font-mono bgc-95 bgd-10 split-4",children:[t.jsx("span",{className:"green fgc-50",children:r.good.join("-")}),!!r.rest.length&&t.jsxs("span",{className:"red fgc-50",children:[!!r.good.length&&"-",r.rest.join("-")]})]}),t.jsx("td",{className:"bgc-100 bgd-5",children:r.description}),t.jsx("td",{className:"bgc-100 bgd-5 font-mono small",children:!!r.next.length&&r.next.map(a=>`-${a} `)})]},s))})})},k_=Object.freeze(Object.defineProperty({__proto__:null,default:j_},Symbol.toStringTag,{value:"Module"})),S_=`<div class="grid-fit gap-2">
  <button class="brand">Brand</button>
  <button class="grey40">Grey 40</button>
  <button class="grey20">Grey 20</button>
  <button class="grey">Grey</button>
  <button class="red">Red</button>
  <button class="brown">Brown</button>
  <button class="orange">Orange</button>
  <button class="yellow">Yellow</button>
  <button class="olive">Olive</button>
  <button class="green">Green</button>
  <button class="teal">Teal</button>
  <button class="blue">Blue</button>
  <button class="indigo">Indigo</button>
  <button class="violet">Violet</button>
  <button class="purple">Purple</button>
  <button class="pink">Pink</button>
  <button class="maroon">Maroon</button>
</div>
`,T_=`<div class="grid-2 gap-2">
  <button class="brand" disabled>Brand:disabled</button>
  <button class="brand disabled">Brand.disabled</button>
  <button class="brand outline" disabled>Brand:disabled</button>
  <button class="brand outline disabled">Brand.disabled</button>
</div>
`,N_=`<div class="grid-fit gap-2">
  <button class="bright brand">Brand</button>
  <button class="bright grey40">Grey 40</button>
  <button class="bright grey20">Grey 20</button>
  <button class="bright grey">Grey</button>
  <button class="bright red">Red</button>
  <button class="bright brown">Brown</button>
  <button class="bright orange">Orange</button>
  <button class="bright yellow">Yellow</button>
  <button class="bright olive">Olive</button>
  <button class="bright green">Green</button>
  <button class="bright teal">Teal</button>
  <button class="bright blue">Blue</button>
  <button class="bright indigo">Indigo</button>
  <button class="bright violet">Violet</button>
  <button class="bright purple">Purple</button>
  <button class="bright pink">Pink</button>
  <button class="bright maroon">Maroon</button>
</div>
`,L_=`<div class="grid-fit gap-2">
  <button class="dark brand">Brand</button>
  <button class="dark grey40">Grey 40</button>
  <button class="dark grey20">Grey 20</button>
  <button class="dark grey">Grey</button>
  <button class="dark red">Red</button>
  <button class="dark brown">Brown</button>
  <button class="dark orange">Orange</button>
  <button class="dark yellow">Yellow</button>
  <button class="dark olive">Olive</button>
  <button class="dark green">Green</button>
  <button class="dark teal">Teal</button>
  <button class="dark blue">Blue</button>
  <button class="dark indigo">Indigo</button>
  <button class="dark violet">Violet</button>
  <button class="dark purple">Purple</button>
  <button class="dark pink">Pink</button>
  <button class="dark maroon">Maroon</button>
</div>
`,__=`<div class="grid-fit gap-2">
  <button class="outline">Default</button>
  <button class="outline brand">Brand</button>
  <button class="outline grey40">Grey 40</button>
  <button class="outline grey20">Grey 20</button>
  <button class="outline grey">Grey</button>
  <button class="outline red">Red</button>
  <button class="outline brown">Brown</button>
  <button class="outline orange">Orange</button>
  <button class="outline yellow">Yellow</button>
  <button class="outline olive">Olive</button>
  <button class="outline green">Green</button>
  <button class="outline teal">Teal</button>
  <button class="outline blue">Blue</button>
  <button class="outline indigo">Indigo</button>
  <button class="outline violet">Violet</button>
  <button class="outline purple">Purple</button>
  <button class="outline pink">Pink</button>
  <button class="outline maroon">Maroon</button>
</div>
`,$_=`<div class="grid-fit gap-2">
  <button class="bare brand">Brand</button>
  <button class="bare grey40">Grey 40</button>
  <button class="bare grey20">Grey 20</button>
  <button class="bare grey">Grey</button>
  <button class="bare red">Red</button>
  <button class="bare brown">Brown</button>
  <button class="bare orange">Orange</button>
  <button class="bare yellow">Yellow</button>
  <button class="bare olive">Olive</button>
  <button class="bare green">Green</button>
  <button class="bare teal">Teal</button>
  <button class="bare blue">Blue</button>
  <button class="bare indigo">Indigo</button>
  <button class="bare violet">Violet</button>
  <button class="bare purple">Purple</button>
  <button class="bare pink">Pink</button>
  <button class="bare maroon">Maroon</button>
</div>
`,I_=`<div class="grid-fit gap-2">
  <button class="shaded">Default</button>
  <button class="shaded brand">Brand</button>
  <button class="shaded grey40">Grey 40</button>
  <button class="shaded grey20">Grey 20</button>
  <button class="shaded grey">Grey</button>
  <button class="shaded red">Red</button>
  <button class="shaded brown">Brown</button>
  <button class="shaded orange">Orange</button>
  <button class="shaded yellow">Yellow</button>
  <button class="shaded olive">Olive</button>
  <button class="shaded green">Green</button>
  <button class="shaded teal">Teal</button>
  <button class="shaded blue">Blue</button>
  <button class="shaded indigo">Indigo</button>
  <button class="shaded violet">Violet</button>
  <button class="shaded purple">Purple</button>
  <button class="shaded pink">Pink</button>
  <button class="shaded maroon">Maroon</button>
</div>
`,E_=`<div class="grid-fit gap-2">
  <span class="button">Default</span>
  <span class="red shaded button">Red Shaded</span>
  <span class="orange outline button">Orange Outline</span>
</div>
`,M_=`<div class="flex wrap gap-4">
  <button class="yellow solid">
    No Icon
  </button>

  <button class="olive">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true" focusable="false"
      class="icon on-left" role="img"
      viewBox="0 0 512 512"
    >
      <path
        d="M64,268L184,388L448,124"
        style="fill:none;stroke:currentColor;stroke-width:65"
      />
    </svg>
    Icon on Left
  </button>

  <button class="green">
    <span>Icon on Right</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true" focusable="false"
      class="icon on-right" role="img"
      viewBox="0 0 512 512"
    >
      <path
        d="M64,268L184,388L448,124"
        style="fill:none;stroke:currentColor;stroke-width:65"
      />
    </svg>
  </button>
</div>`,A_=`<div class="flex gap-4">
  <button class="teal">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true" focusable="false"
      class="icon" role="img"
      viewBox="0 0 512 512"
    >
      <path
        d="M64,268L184,388L448,124"
        style="fill:none;stroke:currentColor;stroke-width:65"
      />
    </svg>
  </button>

  <button class="blue pad-h-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true" focusable="false"
      class="icon" role="img"
      viewBox="0 0 512 512"
    >
      <path
        d="M64,268L184,388L448,124"
        style="fill:none;stroke:currentColor;stroke-width:65"
      />
    </svg>
  </button>

  <button class="indigo icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true" focusable="false"
      class="icon" role="img"
      viewBox="0 0 512 512"
    >
      <path
        d="M64,268L184,388L448,124"
        style="fill:none;stroke:currentColor;stroke-width:65"
      />
    </svg>
  </button>
</div>`,P_=`<div class="buttons">
  <button class="red">
    Red
  </button>
  <button class="brown">
    Brown
  </button>
  <button class="orange">
    Orange
  </button>
  <button class="yellow">
    Yellow
  </button>
</div>

<div class="buttons mar-t-4">
  <button class="red outline">
    Red
  </button>
  <button class="brown outline">
    Brown
  </button>
  <button class="orange outline">
    Orange
  </button>
  <button class="yellow outline">
    Yellow
  </button>
</div>

<div class="buttons brand mar-t-4">
  <button class="outline bdr-4">
    Unselected
  </button>
  <button>
    Selected
  </button>
  <button class="outline bdr-4">
    Unselected
  </button>
</div>
`,R_=()=>t.jsxs("div",{className:"prose",children:[t.jsx("h1",{children:"Buttons"}),t.jsxs("p",{children:["For the sake of accessibility, buttons should usually be rendered using the ",t.jsx("code",{children:"button"})," element.  I mean, that's what it's there for, right?  For those cases when you really need to make a link or something else look like a button you can add the"," ",t.jsx("code",{children:"button"})," class."]}),t.jsxs("div",{className:"small flex gap-2",children:[t.jsx("button",{children:"button element"}),t.jsx("a",{href:"/",className:"button",children:"button class"})]}),t.jsxs("p",{children:["The default button color is grey. Any one of the color classes (e.g. ",t.jsx("code",{children:"red"}),", ",t.jsx("code",{children:"green"}),", etc) can be added to get different colors."]}),t.jsx("p",{children:"Button color stops automatically adapt between light and dark modes."}),t.jsx("h2",{children:"Default Style"}),t.jsx("p",{children:"The default button style is solid."}),t.jsx(S,{html:S_,language:"html",caption:"Buttons"}),t.jsx("h2",{children:"Bright Colors"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"bright"})," CSS class to make the buttons brighter."]}),t.jsx(S,{html:N_,language:"html",caption:"Bright Buttons"}),t.jsx("h2",{children:"Dark Colors"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"dark"})," CSS class to make the buttons darker."]}),t.jsx(S,{html:L_,language:"html",caption:"Dark Buttons"}),t.jsx("h2",{children:"Outline Style"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"outline"})," class for outline buttons."]}),t.jsx(S,{html:__,caption:"Outline Buttons"}),t.jsx("h2",{children:"Bare Naked Buttons"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"bare"})," class for remove the background and border completely."]}),t.jsx(S,{html:$_,caption:"Bare Buttons"}),t.jsx("h2",{children:"Shaded Style"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"shaded"})," class for subtly shaded buttons.  It's only a matter of time until flat design is out and shaded is back in. Be ahead of the curve!"]}),t.jsx(S,{html:I_,caption:"Shaded Buttons"}),t.jsx("h2",{children:"Button Class"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"button"})," class to any non-button element to give it the button styling.  You can also add the ",t.jsx("code",{children:"outline"})," and/or"," ",t.jsx("code",{children:"shaded"})," classes."]}),t.jsx(S,{html:E_,caption:".button class"}),t.jsx("h2",{children:"Disabled Buttons"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"disabled"})," attribute or ",t.jsx("code",{children:"disabled"})," CSS class to disable a button."]}),t.jsx(S,{html:T_,language:"html",caption:"Disabled Buttons"}),t.jsx("h2",{children:"Button Icons"}),t.jsxs("p",{children:["You can add SVG ",t.jsx(YS,{})," to buttons. You can set the margins for icons manually using the ",t.jsx("code",{children:"mar-N"})," ","classes described on the ",t.jsx(Od,{})," page. The ",t.jsx("code",{children:"on-left"})," and ",t.jsx("code",{children:"on-right"})," classes are provided as shortcuts and are equivalent to ",t.jsx("code",{children:"mar-r-2"})," and ",t.jsx("code",{children:"mar-l-2"}),", respectively."]}),t.jsx(S,{html:M_,caption:"Button icons"}),t.jsx("h2",{children:"Button Padding"}),t.jsx("p",{children:"The default padding for buttons is larger in the horizontal direction (4 units = 1em) than it is in the vertical direction (1 unit = 0.25em). This isn't as unbalanced as it initially seems when you factor in the line-height (1.5), which effectively results in  the vertical padding being equivalent to 2 units (0.5em)."}),t.jsxs("p",{children:["If you have a button that only contains an icon then it can look a bit strange, as shown in the first button here.  Adding the ",t.jsx("code",{children:"pad-h-2"})," class to the button will reduce the horizontal padding to 2 units (0.5em) which will even things out, as shown in the second button.  Or you can add the ",t.jsx("code",{children:"icon"})," class to the button which will have the same effect and doesn't require you to remember how many units of padding you need to set."]}),t.jsx(S,{html:A_,caption:"Button padding"}),t.jsx("h2",{children:"Button Sets"}),t.jsxs("p",{children:["Button sets can be created by adding a container with the"," ",t.jsx("code",{children:"buttons"})," class."]}),t.jsx(S,{html:P_,caption:"Button Sets"})]}),O_=Object.freeze(Object.defineProperty({__proto__:null,default:R_},Symbol.toStringTag,{value:"Module"})),F_=`<label>
  <input type="checkbox">
  Option 1
</label>

<label class="checkbox">
  <input type="checkbox">
  Option 2
</label>

<label class="checkbox disabled">
  <input type="checkbox">
  Disabled option
</label>
`,B_=`<label class="inline">
  <input type="checkbox">
  Option 1
</label>

<label class="inline checkbox">
  <input type="checkbox">
  Option 2
</label>
`,D_=`<label class="inline border">
  <input type="checkbox">
  Inline checkbox with border
</label>

<label class="border mar-t-2">
  <input type="checkbox">
  Wide checkbox with border
</label>

<div class="grid-2 gap-2 mar-t-2">
  <label class="border">
    <input type="checkbox">
    Grid checkbox
  </label>

  <label class="border checkbox">
    <input type="checkbox">
    Grid checkbox
  </label>
</div>

<div class="grid gap-2 mar-t-2">
  <label class="border">
    <input type="checkbox">
    Wide grid checkbox with gap
  </label>

  <label class="border">
    <input type="checkbox" disabled>
    Disabled wide grid checkbox with gap
  </label>
</div>

`,z_=`<label>
  <input type="checkbox" role="switch">
  Default
</label>

<label>
  <input type="checkbox" role="switch" class="round">
  Round
</label>

<label>
  <input type="checkbox" role="switch" class="square">
  Square
</label>

<label>
  <input type="checkbox" role="switch" disabled>
  Disabled
</label>

<style>
input[type=checkbox][role=switch].custom {
  --unit-size: 1.2em;
  --border-width: 3px;
  --shadow-opacity: 0.15;
  --border-radius: 0.5em;
  --border-color: var(--red-50);
  --background-color: var(--red-60);
  --switch-color: var(--red-90);
}
input[type=checkbox][role=switch].custom:checked {
  --border-color: var(--green-50);
  --background-color: var(--green-60);
  --switch-color: var(--green-90);
}
[data-theme=dark] input[type=checkbox][role=switch].custom {
  --border-color: var(--red-30);
  --background-color: var(--red-40);
  --switch-color: var(--red-80);
}
[data-theme=dark] input[type=checkbox][role=switch].custom:checked {
  --border-color: var(--green-30);
  --background-color: var(--green-40);
  --switch-color: var(--green-80);
}
</style>
<label class="no-focus">
  <input type="checkbox" role="switch" class="custom">
  Custom
</label>
`,W_=`<style>
  .shaded.checkbox {
    color:            var(--color-20);
    background-color: var(--color-95);
    border-color:     var(--color-70);
    accent-color:     var(--color-40);
    margin-right:     0.5em;
  }
  .shaded.checkbox:hover {
    color:            var(--color-0);
    background-color: var(--color-90);
    border-color:     var(--color-60);
  }
  [data-theme=dark] .shaded.checkbox {
    color:            var(--color-80);
    background-color: var(--color-15);
    border-color:     var(--color-30);
    accent-color:     var(--color-70);
  }
  [data-theme=dark] .shaded.checkbox:hover {
    color:            var(--color-100);
    background-color: var(--color-20);
    border-color:     var(--color-40);
  }
</style>
<div class="grid gap-2">
  <label class="shaded border checkbox">
    <input type="checkbox">
    Grey 1
  </label>
  <label class="red shaded border checkbox">
    <input type="checkbox">
    Red
  </label>
  <label class="green shaded border checkbox">
    <input type="checkbox">
    Green
  </label>
  <label class="blue shaded border checkbox">
    <input type="checkbox">
    Blue
  </label>
</div>`,H_=()=>t.jsxs("div",{className:"prose",children:[t.jsx("h1",{children:"Checkboxes"}),t.jsx("h2",{children:"Checkbox Class"}),t.jsxs("p",{children:["The usual approach to creating a checkbox is to define a"," ",t.jsx("code",{children:"label"})," that contains an ",t.jsx("code",{children:"input"})," with a",t.jsx("code",{children:'type="label"'})," attribute.  This has the benefit that clicking on the label will toggle the checkbox input."]}),t.jsxs("p",{children:["Badger-CSS identifies labels that include a checkbox input using the ",t.jsx("code",{children:":has()"})," CSS selector. All the major browsers currently support it, although Firefox was a bit late to the party, only adding support in v121 released on 19th December 2023."]}),t.jsxs("p",{children:["As a work-around to support older versions of Firefox, you can add the ",t.jsx("code",{children:"checkbox"})," class to the ",t.jsx("code",{children:"label"}),"."]}),t.jsx(S,{html:F_,language:"html",caption:"Checkboxes"}),t.jsx("h2",{children:"Inline Checkboxes"}),t.jsxs("p",{children:["Checkboxes are full-width by default. Add the ",t.jsx("code",{children:"inline"})," class to give it a fluid width."]}),t.jsx(S,{html:B_,language:"html",caption:"Inline Checkboxes"}),t.jsx("h2",{children:"Checkbox Borders"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"border"})," class for borders.  You may need to manually add margins using the ",t.jsx(Od,{text:"margin"})," utility classes, or contain multiple checkboxes using the "," ",t.jsx(yr,{})," or ",t.jsx(ns,{})," container classes and set the gap between elements."]}),t.jsx(S,{html:D_,language:"html",caption:"Border Checkboxes"}),t.jsx("h2",{children:"Checkbox Switches"}),t.jsxs("p",{children:["Set the ",t.jsx("code",{children:"role"})," to ",t.jsx("code",{children:"switch"})," to display the checkbox as a switch.  Add the ",t.jsx("code",{children:"round"})," class for a fully rounded switch or ",t.jsx("code",{children:"square"})," for square corners."]}),t.jsx("p",{children:"The background color for enabled switches will be based on your brand color.  There are a number of CSS properties you can set to customise the style."}),t.jsx(S,{html:z_,language:"html",caption:"Checkbox Switch"}),t.jsx("h2",{children:"Custom Checkboxes"}),t.jsx(S,{html:W_,language:"html",caption:"Custom Checkboxes"})]}),U_=Object.freeze(Object.defineProperty({__proto__:null,default:H_},Symbol.toStringTag,{value:"Module"})),G_=`<div class="field">
  <label>Label</label>
  <input type="text" value="Input value">
  <div class="help">Help message</div>
</div>`,V_=`<div class="field">
  <label>Inline Text Input</label>
  <input type="text" class="inline">
  <div class="help">Help message</div>
</div>

<div class="field mar-t-8">
  <label>Wide Text Input</label>
  <input type="text">
  <div class="help">Help message</div>
</div>
`,Y_=`<div class="field">
  <label>Inline Checkbox</label>
  <label class="border inline">
    <input type="checkbox" name="one">
    Inline checkbox
  </label>
  <div class="help">Help message</div>
</div>

<div class="field">
  <label>Wide Checkbox</label>
  <label class="border wide">
    <input type="checkbox" name="one">
    Wide checkbox
  </label>
  <div class="help">Help message</div>
</div>`,Z_=`<div class="field">
  <label>Inline Radio Buttons</label>
  <label class="inline">
    <input type="radio" name="one">
    Badger
  </label>
  <label class="inline">
    <input type="radio" name="one">
    Mushroom
  </label>
  <label class="inline">
    <input type="radio" name="one">
    Snake
  </label>
  <div class="help">Help message</div>
</div>

<div class="field mar-t-8">
  <label>Wide Radio Buttons</label>
  <label>
    <input type="radio" name="one">
    Badger
  </label>
  <label>
    <input type="radio" name="one">
    Mushroom
  </label>
  <label>
    <input type="radio" name="one">
    Snake
  </label>
  <div class="help">Help message</div>
</div>
`,q_=`<div class="field invalid">
  <label>Do you like badgers?</label>
  <input type="text" value="No, I don't">
  <div class="help">I'm sorry, but you're wrong</div>
</div>

<div class="field invalid">
  <label>Tell me more...</label>
  <textarea>I think ferrets are better</textarea>
  <div class="help">You are clearly insane</div>
</div>

<div class="field invalid">
  <label class="checkbox">
    <input type="checkbox">
    I accept that badgers are great
  </label>
  <div class="help">You must welcome our badger overlords!</div>
</div>`,K_=`<div class="field valid">
  <label>Do you like badgers?</label>
  <input type="text" value="Yes, they're great">
  <div class="help">You are correct!</div>
</div>

<div class="field valid">
  <label>Tell me more...</label>
  <textarea>They're black, white and fluffy</textarea>
  <div class="help">You are wise in the ways of badgers</div>
</div>

<div class="field valid">
  <label class="checkbox">
    <input type="checkbox" checked>
    I accept that badgers are great
  </label>
  <div class="help">You have excellent taste!</div>
</div>`,Q_=`<div class="field required">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
<div class="field required">
  <label>Terms</label>
  <label class="Xcheckbox">
    <input type="checkbox">
    I accept the terms and conditions
  </label>
</div>`,X_=`<style>
  .mandatory-text {
    --required-text: 'MANDATORY';
  }
</style>
<div class="field required mandatory-text">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
`,J_=`<div class="field optional">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>`,e$=`<style>
  .not-required {
    --optional-text: 'NOT REQUIRED';
  }
</style>
<div class="field optional not-required">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
`,n$=`<div class="grid-3 gap-4">
  <div class="field mar-b-none">
    <label>Label</label>
    <input type="text" value="Input value">
  </div>
  <div class="field mar-b-none pad-t-label">
    <input type="text" value="Input value">
  </div>
  <div class="field mar-b-none">
    <button class="wide blue mar-t-label">
      Search
    </button>
  </div>
</div>`,t$=`<div class="grid-2 gap-4">
  <div>
    <h4 class="mar-b-2">Help Prefix</h4>
    <div class="field valid">
      <label>Valid Field</label>
      <input type="text" value="Yes, they're great">
      <div class="help">Correct!</div>
    </div>
    <div class="field invalid">
      <label>Invalid Field</label>
      <input type="text" value="Yes, they're great">
      <div class="help">Incorrect!</div>
    </div>
  </div>

  <div data-badger-help-prefix="none">
    <h4 class="mar-b-2">No Help Prefix</h4>
    <div class="field valid">
      <label>Valid Field Without Help Prefix</label>
      <input type="text" value="Yes, they're great">
      <div class="help">Correct!</div>
    </div>
    <div class="field invalid">
      <label>Invalid Field Without Help Prefix</label>
      <input type="text" value="Yes, they're great">
      <div class="help">Incorrect!</div>
    </div>
  </div>
</div>`,r$=`// define your own text for the
// required and/or optional labels...
$field-required-text: '"Important"';
$field-optional-text: '"Not Required"';

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,s$=()=>t.jsxs("div",{className:"prose",children:[t.jsx("h1",{children:"Form Fields"}),t.jsx("p",{children:"Form fields are usually comprised of more than just an input. A label is usually present and sometimes an additional help message too."}),t.jsx("h2",{children:"Field Class"}),t.jsxs("p",{children:["Create a container with the ",t.jsx("code",{children:"field"})," class. You can then add a ",t.jsx("code",{children:"label"})," for the field. If you want to display additional help for the input then give it the ",t.jsx("code",{children:"help"})," class."]}),t.jsx(S,{html:G_,language:"html",caption:"Form Field"}),t.jsx("h2",{children:"Field Width"}),t.jsxs("p",{children:["Fields are wide by default, but you can add the ",t.jsx("code",{children:"inline"})," class to the input element or containing label in the case of checkboxes and radio buttons."]}),t.jsx(S,{html:V_,language:"html",caption:"Text Field"}),t.jsx(S,{html:Y_,language:"html",caption:"Checkbox Field"}),t.jsx(S,{html:Z_,language:"html",caption:"Radio Button Field"}),t.jsx("h2",{children:"Invalid Field"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"invalid"})," class to the ",t.jsx("code",{children:"field"})," to indicate fields that are invalid."]}),t.jsx(S,{html:q_,language:"html",caption:"Invalid Field"}),t.jsx("h2",{children:"Valid Field"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"valid"})," class to the ",t.jsx("code",{children:"field"})," to indicate fields that have passed validation."]}),t.jsx(S,{html:K_,language:"html",caption:"Valid Field"}),t.jsx("h2",{children:"Required Field"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"required"})," class to the ",t.jsx("code",{children:"field"})," if you want an additional tag added to the label."]}),t.jsx(S,{html:Q_,language:"html",caption:"Required Field"}),t.jsxs("p",{children:["You can use the ",t.jsx("code",{children:"--required-text"})," CSS variable to change the text displayed."]}),t.jsx(S,{html:X_,language:"html",caption:"Custom Required Field"}),t.jsx("h2",{children:"Optional Field"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"optional"})," class to the ",t.jsx("code",{children:"field"})," if you want an additional tag added to the label."]}),t.jsx(S,{html:J_,language:"html",caption:"Optional Field"}),t.jsxs("p",{children:["You can use the ",t.jsx("code",{children:"--optional-text"})," CSS variable to change the text displayed."]}),t.jsx(S,{html:e$,language:"html",caption:"Custom Optional Field"}),t.jsxs(re,{children:[t.jsxs("p",{children:["You can also change the text displayed for either the required and/or optional labels on a global level by setting the"," ",t.jsx("code",{children:"$field-required-text"})," and ",t.jsx("code",{children:"$field-optional-text"})," ","SASS variables. Be warned that you need to quote the values twice, so that the value defined includes a set of quotes, as shown here."]}),t.jsx(_e,{code:r$,caption:"Required Text",language:"scss",className:"mar-b-8",expand:!0})]}),t.jsx("h2",{children:"Label Spacing"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"mar-t-label"})," and ",t.jsx("code",{children:"pad-t-label"})," classes will add a margin or padding to the top of an element that matches the height of a field label.  This is useful if you want to vertically align inputs or other elements where some fields have label and others don't."]}),t.jsx(S,{html:n$,language:"html",caption:"Label Spacing"}),t.jsx("h2",{children:"Help Prefix"}),t.jsxs("p",{children:["The validation messages on valid and invalid fields have a prefix added by default - a check mark for valid fields and a cross for invalid ones. If you don't like this then you can always customise the CSS (by adding a rule for ",t.jsx("code",{children:".field"})," that sets"," ",t.jsx("code",{children:'--help-prefix: ""'})," and"," ",t.jsx("code",{children:"--help-prefix-margin: 0;"}),").  Or you can add a",t.jsx("code",{children:'data-badger-help-prefix="none"'})," attribute to a container element."]}),t.jsx(S,{html:t$,language:"html",caption:"Help Prefix"})]}),a$=Object.freeze(Object.defineProperty({__proto__:null,default:s$},Symbol.toStringTag,{value:"Module"})),l$=`<fieldset>
  <legend>Fieldset</legend>
  <div class="field">
    <label>Label</label>
    <input type="text" value="Input value">
    <div class="help">Help message</div>
  </div>
  <div class="field">
    <label>Label</label>
    <input type="text" value="Input value">
    <div class="help">Help message</div>
  </div>
</fieldset>`,o$=()=>t.jsxs("div",{className:"prose",children:[t.jsx("h1",{children:"Form Field Sets"}),t.jsxs("p",{children:["You can group related fields together in a ",t.jsx("code",{children:"fieldset"}),"."]}),t.jsx("h2",{children:"Fieldset Container"}),t.jsx(S,{html:l$,language:"html",caption:"Form Fieldset"})]}),i$=Object.freeze(Object.defineProperty({__proto__:null,default:o$},Symbol.toStringTag,{value:"Module"})),L0=`<div class="field">
  <label>Inputs and buttons should be...</label>
  <div class="flex end gap-4">
    <input type="text" name="input-1" class="wide" value="...styled consistently"/>
    <button class="brand outline">Search</button>
  </div>
</div>

<div class="field required">
  <label>What is your name?</label>
  <input
    type="text" name="input-2" class="wide"
    placeholder="Placeholder text"
  />
  <div class="help">This is an example of some extra help</div>
</div>

<div class="field optional">
  <label>
    What is your favourite animal?
  </label>
  <select name="animal" class="wide" required>
    <option value="" hidden disabled selected>Choose an animal</option>
    <option value="ant">Ant</option>
    <option value="badger">Badger</option>
    <option value="cat">Cat</option>
    <option value="dog">Dog</option>
    <option value="elephant">Elephant</option>
    <option value="ferret">Ferret</option>
    <option value="goldfish">Goldfish</option>
  </select>
</div>

<div class="field">
  <label>
    Why do you like badgers?
  </label>
  <textarea rows="5" class="wide" placeholder="I like badgers because..."></textarea>
</div>

<fieldset class="pad-b-0">
  <legend>Valid and Invalid Fields</legend>
  <div class="grid-2 gap-4">
    <div class="field valid">
      <label>This is Good</label>
      <input type="text" name="input-2" class="wide" value="Valid input"/>
      <div class="help">Well done!</div>
    </div>
    <div class="field invalid">
      <label>This is Bad</label>
      <input type="text" name="input-2" class="wide" value="Invalid input"/>
      <div class="help">Oh dear!  Try again.</div>
    </div>
  </div>
</fieldset>

<fieldset>
  <legend>Boxed Checkboxes and Radio Buttons</legend>
  <div class="field">
    <label>Select any of these</label>
    <div class="flex end gap-4">
      <label class="checkbox border">
        <input type="checkbox">
        Badger
      </label>
      <label class="checkbox border">
        <input type="checkbox">
        Mushroom
      </label>
      <label class="checkbox border">
        <input type="checkbox">
        Snake
      </label>
    </div>
  </div>

  <div class="field mar-b-2">
    <label>Pick a color</label>
    <div class="flex end gap-4">
      <label class="red shaded radio border">
        <input type="radio" name="color">
        Red
      </label>
      <label class="green shaded radio border">
        <input type="radio" name="color">
        Green
      </label>
      <label class="blue shaded radio border">
        <input type="radio" name="color">
        Blue
      </label>
    </div>
  </div>
</fieldset>

<fieldset>
  <legend>Plain Old Checkboxes</legend>
  <div class="field">
    <label class="checkbox">
      <input type="checkbox">
      I have read the terms and conditions
    </label>
  </div>
  <div class="field">
    <label class="checkbox baseline">
      <input type="checkbox">
      I don't want to opt out of
      not being excluded from the
      list of people who don't care
      about not receiving your
      your marketing emails

    </label>
  </div>
  <div class="field">
    <label class="checkbox wide">
      <input type="checkbox" disabled>
      We don't need no stinkin' badgers
    </label>
  </div>
</fieldset>

<div class="field">
  <label>Range Slider</label>
  <input type="range">
</div>

<div class="text-right">
  <button class="solid brand">Submit</button>
</div>
`,d$=`<div class="field optional">
  <label>Default field</label>
  <div class="flex gap-4">
    <input type="text" name="input-1" class="wide" placeholder="Placeholder text"/>
    <input type="text" name="input-1" class="wide" value="Input text"/>
  </div>
</div>
<div class="focus field required">
  <label>Focussed field</label>
  <div class="flex gap-4">
    <input type="text" name="input-1" class="wide" placeholder="Placeholder text"/>
    <input type="text" name="input-1" class="wide" value="Input text"/>
  </div>
</div>
<div class="valid field">
  <label>Valid field</label>
  <div class="flex gap-4">
    <div>
      <input type="text" name="input-1" class="wide" placeholder="Placeholder text"/>
    </div>
    <div>
      <input type="text" name="input-1" class="wide" value="Input text"/>
      <div class="help">Yes, well done!</div>
    </div>
  </div>
</div>
<div class="invalid field">
  <label>Invalid field</label>
  <div class="flex gap-4">
    <div>
      <input type="text" name="input-1" class="wide" placeholder="Placeholder text"/>
    </div>
    <div>
      <input type="text" name="input-1" class="wide" value="Input text"/>
      <div class="help">Sorry, that's wrong!</div>
    </div>
  </div>
</div>
<div class="field">
  <label>Field with prefix</label>
  <div class="inputs">
    <div class="prefix shaded lined">https://</div>
    <input type="text"/>
  </div>
  <div class="help">This is a message</div>
</div>
<div class="field">
  <label>Checkboxes</label>
  <div class="flex gap-4">
    <label class="checkbox wide border">
      <input type="checkbox"> Boxed
    </label>
    <label class="checkbox wide">
      <input type="checkbox"> Unboxed
    </label>
  </div>
</div>
`,c$=`<div class="grid-1 gap-4">
  <div class="flex bottom gap-4">
    <input
      type="text" name="input-1"
      class="wide no-focus" placeholder="Search"
    />
    <button class="brand no-focus">Search</button>
  </div>

  <div class="flex bottom gap-2">
    <label class="radio border no-focus">
      <input type="radio" name="color">
      Alpha
    </label>
    <label class="radio border no-focus">
      <input type="radio" name="color">
      Bravo
    </label>
    <label class="radio border no-focus">
      <input type="radio" name="color">
      Charlie
    </label>
  </div>

  <select name="animal" class="wide no-focus" required>
    <option value="" hidden disabled selected>Select...</option>
    <option value="badger">Badger</option>
    <option value="mushroom">Mushroom</option>
    <option value="snake">Snake</option>
  </select>


  <label class="checkbox border no-focus">
    <input type="checkbox">
    Badger
  </label>

  <div class="text-right">
    <button class="solid brand no-focus">Submit</button>
  </div>
</div>`,u$=`<div>
  <div class="field">
    <label>Outset focus (default)</label>
    <input
      type="text" name="input-1"
      class="wide" placeholder="Focus Me"
    />
  </div>
  <div class="flex space">
    <button class="outline">Cancel</button>
    <button class="brand">Submit</button>
  </div>
</div>

<div data-badger-focus="inset" class="mar-t-8">
  <div class="field">
    <label>Inset focus</label>
    <input
      type="text" name="input-2"
      class="wide" placeholder="Focus Me"
    />
  </div>
  <div class="flex space">
    <button class="outline">Cancel</button>
    <button class="brand">Submit</button>
  </div>
</div>`,h$=["smallest","smaller","small","medium","large","larger","largest"],p$=({size:e,setSize:n})=>t.jsx("div",{children:h$.map(r=>t.jsxs("label",{children:[t.jsx("input",{type:"radio",name:"size",value:r,checked:r===e,onChange:s=>n(s.target.value)}),r]},r))}),f$=()=>{const[e,n]=F.useState({}),r=a=>()=>n(l=>({...l,[a]:!l[a]})),s=a=>l=>n(o=>({...o,[a]:l}));return t.jsxs("div",{className:"example flex gap-8 stack-desktop",children:[t.jsx("div",{className:"split-4",children:t.jsx(m$,{options:e,setOption:s,toggleOption:r})}),t.jsxs("div",{className:"split-3-4",children:[t.jsx("h3",{className:"mar-b-2",children:"Output"}),t.jsx("div",{className:"output",children:t.jsx(g$,{options:e})})]})]})},m$=({options:e,setOption:n})=>{const r=n("size"),a=`<form class="${P5(e,{},e.size)}">
  ...
</form>`;return t.jsxs("div",{children:[t.jsx("h3",{className:"mar-b-2",children:"Select Size"}),t.jsx("div",{className:"border surface-4 pad-4 bdr-1",children:t.jsx(p$,{size:e.size,setSize:r})}),t.jsx("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),t.jsx(_e,{code:a,language:"html",expand:!0})]})},g$=({options:e})=>{const n=A5(e,{},e.size);return t.jsxs("form",{className:n,children:[t.jsxs("div",{className:"field",children:[t.jsx("label",{children:"Text Input"}),t.jsxs("div",{className:"flex end gap-4",children:[t.jsx("input",{type:"text",name:"input-1",className:"wide",placeholder:"Search"}),t.jsx("button",{className:"brand outline",children:"Search"})]})]}),t.jsxs("div",{className:"field",children:[t.jsx("label",{children:"Radio Buttons"}),t.jsxs("div",{className:"flex gap-4 stack-tablet",children:[t.jsxs("label",{className:"radio border",children:[t.jsx("input",{type:"radio",name:"color"}),"Nigel"]}),t.jsxs("label",{className:"radio border",children:[t.jsx("input",{type:"radio",name:"color"}),"David"]}),t.jsxs("label",{className:"radio border",children:[t.jsx("input",{type:"radio",name:"color"}),"Derek"]})]})]}),t.jsxs("div",{className:"grid-2 gap-4 stack-tablet",children:[t.jsxs("div",{className:"field",children:[t.jsx("label",{children:"Select Input"}),t.jsxs("select",{name:"animal",className:"wide",required:!0,children:[t.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Choose an animal"}),t.jsx("option",{value:"ant",children:"Ant"}),t.jsx("option",{value:"badger",children:"Badger"}),t.jsx("option",{value:"cat",children:"Cat"}),t.jsx("option",{value:"dog",children:"Dog"}),t.jsx("option",{value:"elephant",children:"Elephant"}),t.jsx("option",{value:"ferret",children:"Ferret"}),t.jsx("option",{value:"goldfish",children:"Goldfish"})]})]}),t.jsxs("div",{className:"field",children:[t.jsx("label",{children:"Checkbox"}),t.jsxs("label",{className:"checkbox border",children:[t.jsx("input",{type:"checkbox"}),"I like badgers"]})]})]}),t.jsxs("label",{className:"checkbox inline",children:[t.jsx("input",{type:"checkbox",role:"switch"}),"Turn it on"]}),t.jsxs("label",{className:"checkbox inline",children:[t.jsx("input",{type:"checkbox",role:"switch"}),"Turn it on again"]}),t.jsx("div",{className:"text-right",children:t.jsx("button",{className:"solid brand",children:"Submit"})})]})};var Ga={};/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G5=F;function me(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xn=Object.prototype.hasOwnProperty,v$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_0={},$0={};function V5(e){return Xn.call($0,e)?!0:Xn.call(_0,e)?!1:v$.test(e)?$0[e]=!0:(_0[e]=!0,!1)}function Yn(e,n,r,s,a,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var Mn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Mn[e]=new Yn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Mn[n]=new Yn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Mn[e]=new Yn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Mn[e]=new Yn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Mn[e]=new Yn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Mn[e]=new Yn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Mn[e]=new Yn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Mn[e]=new Yn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Mn[e]=new Yn(e,5,!1,e.toLowerCase(),null,!1,!1)});var Kp=/[\-:]([a-z])/g;function Qp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Kp,Qp);Mn[n]=new Yn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Kp,Qp);Mn[n]=new Yn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Kp,Qp);Mn[n]=new Yn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Mn[e]=new Yn(e,1,!1,e.toLowerCase(),null,!1,!1)});Mn.xlinkHref=new Yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Mn[e]=new Yn(e,1,!1,e.toLowerCase(),null,!0,!0)});var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},x$=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(e){x$.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ti[n]=Ti[e]})});var b$=/["'&<>]/;function Hn(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var n=b$.exec(e);if(n){var r="",s,a=0;for(s=n.index;s<e.length;s++){switch(e.charCodeAt(s)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#x27;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}a!==s&&(r+=e.substring(a,s)),a=s+1,r+=n}e=a!==s?r+e.substring(a,s):r}return e}var y$=/([A-Z])/g,w$=/^ms-/,ch=Array.isArray;function rr(e,n){return{insertionMode:e,selectedValue:n}}function j$(e,n,r){switch(n){case"select":return rr(1,r.value!=null?r.value:r.defaultValue);case"svg":return rr(2,null);case"math":return rr(3,null);case"foreignObject":return rr(1,null);case"table":return rr(4,null);case"thead":case"tbody":case"tfoot":return rr(5,null);case"colgroup":return rr(7,null);case"tr":return rr(6,null)}return 4<=e.insertionMode||e.insertionMode===0?rr(1,null):e}var I0=new Map;function Y5(e,n,r){if(typeof r!="object")throw Error(me(62));n=!0;for(var s in r)if(Xn.call(r,s)){var a=r[s];if(a!=null&&typeof a!="boolean"&&a!==""){if(s.indexOf("--")===0){var l=Hn(s);a=Hn((""+a).trim())}else{l=s;var o=I0.get(l);o!==void 0||(o=Hn(l.replace(y$,"-$1").toLowerCase().replace(w$,"-ms-")),I0.set(l,o)),l=o,a=typeof a=="number"?a===0||Xn.call(Ti,s)?""+a:a+"px":Hn((""+a).trim())}n?(n=!1,e.push(' style="',l,":",a)):e.push(";",l,":",a)}}n||e.push('"')}function lt(e,n,r,s){switch(r){case"style":Y5(e,n,s);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N"){if(n=Mn.hasOwnProperty(r)?Mn[r]:null,n!==null){switch(typeof s){case"function":case"symbol":return;case"boolean":if(!n.acceptsBooleans)return}switch(r=n.attributeName,n.type){case 3:s&&e.push(" ",r,'=""');break;case 4:s===!0?e.push(" ",r,'=""'):s!==!1&&e.push(" ",r,'="',Hn(s),'"');break;case 5:isNaN(s)||e.push(" ",r,'="',Hn(s),'"');break;case 6:!isNaN(s)&&1<=s&&e.push(" ",r,'="',Hn(s),'"');break;default:n.sanitizeURL&&(s=""+s),e.push(" ",r,'="',Hn(s),'"')}}else if(V5(r)){switch(typeof s){case"function":case"symbol":return;case"boolean":if(n=r.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-")return}e.push(" ",r,'="',Hn(s),'"')}}}function Ni(e,n,r){if(n!=null){if(r!=null)throw Error(me(60));if(typeof n!="object"||!("__html"in n))throw Error(me(61));n=n.__html,n!=null&&e.push(""+n)}}function C$(e){var n="";return G5.Children.forEach(e,function(r){r!=null&&(n+=r)}),n}function Zc(e,n,r,s){e.push(Wt(r));var a=r=null,l;for(l in n)if(Xn.call(n,l)){var o=n[l];if(o!=null)switch(l){case"children":r=o;break;case"dangerouslySetInnerHTML":a=o;break;default:lt(e,s,l,o)}}return e.push(">"),Ni(e,a,r),typeof r=="string"?(e.push(Hn(r)),null):r}var k$=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,E0=new Map;function Wt(e){var n=E0.get(e);if(n===void 0){if(!k$.test(e))throw Error(me(65,e));n="<"+e,E0.set(e,n)}return n}function S$(e,n,r,s,a){switch(n){case"select":e.push(Wt("select"));var l=null,o=null;for(m in r)if(Xn.call(r,m)){var i=r[m];if(i!=null)switch(m){case"children":l=i;break;case"dangerouslySetInnerHTML":o=i;break;case"defaultValue":case"value":break;default:lt(e,s,m,i)}}return e.push(">"),Ni(e,o,l),l;case"option":o=a.selectedValue,e.push(Wt("option"));var c=i=null,h=null,m=null;for(l in r)if(Xn.call(r,l)){var x=r[l];if(x!=null)switch(l){case"children":i=x;break;case"selected":h=x;break;case"dangerouslySetInnerHTML":m=x;break;case"value":c=x;default:lt(e,s,l,x)}}if(o!=null)if(r=c!==null?""+c:C$(i),ch(o)){for(s=0;s<o.length;s++)if(""+o[s]===r){e.push(' selected=""');break}}else""+o===r&&e.push(' selected=""');else h&&e.push(' selected=""');return e.push(">"),Ni(e,m,i),i;case"textarea":e.push(Wt("textarea")),m=o=l=null;for(i in r)if(Xn.call(r,i)&&(c=r[i],c!=null))switch(i){case"children":m=c;break;case"value":l=c;break;case"defaultValue":o=c;break;case"dangerouslySetInnerHTML":throw Error(me(91));default:lt(e,s,i,c)}if(l===null&&o!==null&&(l=o),e.push(">"),m!=null){if(l!=null)throw Error(me(92));if(ch(m)&&1<m.length)throw Error(me(93));l=""+m}return typeof l=="string"&&l[0]===`
`&&e.push(`
`),l!==null&&e.push(Hn(""+l)),null;case"input":e.push(Wt("input")),c=m=i=l=null;for(o in r)if(Xn.call(r,o)&&(h=r[o],h!=null))switch(o){case"children":case"dangerouslySetInnerHTML":throw Error(me(399,"input"));case"defaultChecked":c=h;break;case"defaultValue":i=h;break;case"checked":m=h;break;case"value":l=h;break;default:lt(e,s,o,h)}return m!==null?lt(e,s,"checked",m):c!==null&&lt(e,s,"checked",c),l!==null?lt(e,s,"value",l):i!==null&&lt(e,s,"value",i),e.push("/>"),null;case"menuitem":e.push(Wt("menuitem"));for(var w in r)if(Xn.call(r,w)&&(l=r[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(me(400));default:lt(e,s,w,l)}return e.push(">"),null;case"title":e.push(Wt("title")),l=null;for(x in r)if(Xn.call(r,x)&&(o=r[x],o!=null))switch(x){case"children":l=o;break;case"dangerouslySetInnerHTML":throw Error(me(434));default:lt(e,s,x,o)}return e.push(">"),l;case"listing":case"pre":e.push(Wt(n)),o=l=null;for(c in r)if(Xn.call(r,c)&&(i=r[c],i!=null))switch(c){case"children":l=i;break;case"dangerouslySetInnerHTML":o=i;break;default:lt(e,s,c,i)}if(e.push(">"),o!=null){if(l!=null)throw Error(me(60));if(typeof o!="object"||!("__html"in o))throw Error(me(61));r=o.__html,r!=null&&(typeof r=="string"&&0<r.length&&r[0]===`
`?e.push(`
`,r):e.push(""+r))}return typeof l=="string"&&l[0]===`
`&&e.push(`
`),l;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Wt(n));for(var $ in r)if(Xn.call(r,$)&&(l=r[$],l!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(me(399,n));default:lt(e,s,$,l)}return e.push("/>"),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Zc(e,r,n,s);case"html":return a.insertionMode===0&&e.push("<!DOCTYPE html>"),Zc(e,r,n,s);default:if(n.indexOf("-")===-1&&typeof r.is!="string")return Zc(e,r,n,s);e.push(Wt(n)),o=l=null;for(h in r)if(Xn.call(r,h)&&(i=r[h],i!=null))switch(h){case"children":l=i;break;case"dangerouslySetInnerHTML":o=i;break;case"style":Y5(e,s,i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:V5(h)&&typeof i!="function"&&typeof i!="symbol"&&e.push(" ",h,'="',Hn(i),'"')}return e.push(">"),Ni(e,o,l),l}}function M0(e,n,r){if(e.push('<!--$?--><template id="'),r===null)throw Error(me(395));return e.push(r),e.push('"></template>')}function T$(e,n,r,s){switch(r.insertionMode){case 0:case 1:return e.push('<div hidden id="'),e.push(n.segmentPrefix),n=s.toString(16),e.push(n),e.push('">');case 2:return e.push('<svg aria-hidden="true" style="display:none" id="'),e.push(n.segmentPrefix),n=s.toString(16),e.push(n),e.push('">');case 3:return e.push('<math aria-hidden="true" style="display:none" id="'),e.push(n.segmentPrefix),n=s.toString(16),e.push(n),e.push('">');case 4:return e.push('<table hidden id="'),e.push(n.segmentPrefix),n=s.toString(16),e.push(n),e.push('">');case 5:return e.push('<table hidden><tbody id="'),e.push(n.segmentPrefix),n=s.toString(16),e.push(n),e.push('">');case 6:return e.push('<table hidden><tr id="'),e.push(n.segmentPrefix),n=s.toString(16),e.push(n),e.push('">');case 7:return e.push('<table hidden><colgroup id="'),e.push(n.segmentPrefix),n=s.toString(16),e.push(n),e.push('">');default:throw Error(me(397))}}function N$(e,n){switch(n.insertionMode){case 0:case 1:return e.push("</div>");case 2:return e.push("</svg>");case 3:return e.push("</math>");case 4:return e.push("</table>");case 5:return e.push("</tbody></table>");case 6:return e.push("</tr></table>");case 7:return e.push("</colgroup></table>");default:throw Error(me(397))}}var L$=/[<\u2028\u2029]/g;function qc(e){return JSON.stringify(e).replace(L$,function(n){switch(n){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}function _$(e,n){return n=n===void 0?"":n,{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:n+"P:",segmentPrefix:n+"S:",boundaryPrefix:n+"B:",idPrefix:n,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:e}}function A0(e,n,r,s){return r.generateStaticMarkup?(e.push(Hn(n)),!1):(n===""?e=s:(s&&e.push("<!-- -->"),e.push(Hn(n)),e=!0),e)}var Dl=Object.assign,$$=Symbol.for("react.element"),Z5=Symbol.for("react.portal"),q5=Symbol.for("react.fragment"),K5=Symbol.for("react.strict_mode"),Q5=Symbol.for("react.profiler"),X5=Symbol.for("react.provider"),J5=Symbol.for("react.context"),ev=Symbol.for("react.forward_ref"),nv=Symbol.for("react.suspense"),tv=Symbol.for("react.suspense_list"),rv=Symbol.for("react.memo"),Xp=Symbol.for("react.lazy"),I$=Symbol.for("react.scope"),E$=Symbol.for("react.debug_trace_mode"),M$=Symbol.for("react.legacy_hidden"),A$=Symbol.for("react.default_value"),P0=Symbol.iterator;function uh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q5:return"Fragment";case Z5:return"Portal";case Q5:return"Profiler";case K5:return"StrictMode";case nv:return"Suspense";case tv:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case J5:return(e.displayName||"Context")+".Consumer";case X5:return(e._context.displayName||"Context")+".Provider";case ev:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rv:return n=e.displayName||null,n!==null?n:uh(e.type)||"Memo";case Xp:n=e._payload,e=e._init;try{return uh(e(n))}catch{}}return null}var sv={};function R0(e,n){if(e=e.contextTypes,!e)return sv;var r={},s;for(s in e)r[s]=n[s];return r}var Ss=null;function Bd(e,n){if(e!==n){e.context._currentValue2=e.parentValue,e=e.parent;var r=n.parent;if(e===null){if(r!==null)throw Error(me(401))}else{if(r===null)throw Error(me(401));Bd(e,r)}n.context._currentValue2=n.value}}function av(e){e.context._currentValue2=e.parentValue,e=e.parent,e!==null&&av(e)}function lv(e){var n=e.parent;n!==null&&lv(n),e.context._currentValue2=e.value}function ov(e,n){if(e.context._currentValue2=e.parentValue,e=e.parent,e===null)throw Error(me(402));e.depth===n.depth?Bd(e,n):ov(e,n)}function iv(e,n){var r=n.parent;if(r===null)throw Error(me(402));e.depth===r.depth?Bd(e,r):iv(e,r),n.context._currentValue2=n.value}function od(e){var n=Ss;n!==e&&(n===null?lv(e):e===null?av(n):n.depth===e.depth?Bd(n,e):n.depth>e.depth?ov(n,e):iv(n,e),Ss=e)}var O0={isMounted:function(){return!1},enqueueSetState:function(e,n){e=e._reactInternals,e.queue!==null&&e.queue.push(n)},enqueueReplaceState:function(e,n){e=e._reactInternals,e.replace=!0,e.queue=[n]},enqueueForceUpdate:function(){}};function F0(e,n,r,s){var a=e.state!==void 0?e.state:null;e.updater=O0,e.props=r,e.state=a;var l={queue:[],replace:!1};e._reactInternals=l;var o=n.contextType;if(e.context=typeof o=="object"&&o!==null?o._currentValue2:s,o=n.getDerivedStateFromProps,typeof o=="function"&&(o=o(r,a),a=o==null?a:Dl({},a,o),e.state=a),typeof n.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(n=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),n!==e.state&&O0.enqueueReplaceState(e,e.state,null),l.queue!==null&&0<l.queue.length)if(n=l.queue,o=l.replace,l.queue=null,l.replace=!1,o&&n.length===1)e.state=n[0];else{for(l=o?n[0]:e.state,a=!0,o=o?1:0;o<n.length;o++){var i=n[o];i=typeof i=="function"?i.call(e,l,r,s):i,i!=null&&(a?(a=!1,l=Dl({},l,i)):Dl(l,i))}e.state=l}else l.queue=null}var P$={id:1,overflow:""};function hh(e,n,r){var s=e.id;e=e.overflow;var a=32-Li(s)-1;s&=~(1<<a),r+=1;var l=32-Li(n)+a;if(30<l){var o=a-a%5;return l=(s&(1<<o)-1).toString(32),s>>=o,a-=o,{id:1<<32-Li(n)+a|r<<a|s,overflow:l+e}}return{id:1<<l|r<<a|s,overflow:e}}var Li=Math.clz32?Math.clz32:F$,R$=Math.log,O$=Math.LN2;function F$(e){return e>>>=0,e===0?32:31-(R$(e)/O$|0)|0}function B$(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var D$=typeof Object.is=="function"?Object.is:B$,gr=null,Jp=null,_i=null,We=null,Tl=!1,id=!1,co=0,Pr=null,Dd=0;function xs(){if(gr===null)throw Error(me(321));return gr}function B0(){if(0<Dd)throw Error(me(312));return{memoizedState:null,queue:null,next:null}}function ef(){return We===null?_i===null?(Tl=!1,_i=We=B0()):(Tl=!0,We=_i):We.next===null?(Tl=!1,We=We.next=B0()):(Tl=!0,We=We.next),We}function nf(){Jp=gr=null,id=!1,_i=null,Dd=0,We=Pr=null}function dv(e,n){return typeof n=="function"?n(e):n}function D0(e,n,r){if(gr=xs(),We=ef(),Tl){var s=We.queue;if(n=s.dispatch,Pr!==null&&(r=Pr.get(s),r!==void 0)){Pr.delete(s),s=We.memoizedState;do s=e(s,r.action),r=r.next;while(r!==null);return We.memoizedState=s,[s,n]}return[We.memoizedState,n]}return e=e===dv?typeof n=="function"?n():n:r!==void 0?r(n):n,We.memoizedState=e,e=We.queue={last:null,dispatch:null},e=e.dispatch=z$.bind(null,gr,e),[We.memoizedState,e]}function z0(e,n){if(gr=xs(),We=ef(),n=n===void 0?null:n,We!==null){var r=We.memoizedState;if(r!==null&&n!==null){var s=r[1];e:if(s===null)s=!1;else{for(var a=0;a<s.length&&a<n.length;a++)if(!D$(n[a],s[a])){s=!1;break e}s=!0}if(s)return r[0]}}return e=e(),We.memoizedState=[e,n],e}function z$(e,n,r){if(25<=Dd)throw Error(me(301));if(e===gr)if(id=!0,e={action:r,next:null},Pr===null&&(Pr=new Map),r=Pr.get(n),r===void 0)Pr.set(n,e);else{for(n=r;n.next!==null;)n=n.next;n.next=e}}function W$(){throw Error(me(394))}function oi(){}var W0={readContext:function(e){return e._currentValue2},useContext:function(e){return xs(),e._currentValue2},useMemo:z0,useReducer:D0,useRef:function(e){gr=xs(),We=ef();var n=We.memoizedState;return n===null?(e={current:e},We.memoizedState=e):n},useState:function(e){return D0(dv,e)},useInsertionEffect:oi,useLayoutEffect:function(){},useCallback:function(e,n){return z0(function(){return e},n)},useImperativeHandle:oi,useEffect:oi,useDebugValue:oi,useDeferredValue:function(e){return xs(),e},useTransition:function(){return xs(),[!1,W$]},useId:function(){var e=Jp.treeContext,n=e.overflow;e=e.id,e=(e&~(1<<32-Li(e)-1)).toString(32)+n;var r=$i;if(r===null)throw Error(me(404));return n=co++,e=":"+r.idPrefix+"R"+e,0<n&&(e+="H"+n.toString(32)),e+":"},useMutableSource:function(e,n){return xs(),n(e._source)},useSyncExternalStore:function(e,n,r){if(r===void 0)throw Error(me(407));return r()}},$i=null,Kc=G5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function H$(e){return console.error(e),null}function Nl(){}function U$(e,n,r,s,a,l,o,i,c){var h=[],m=new Set;return n={destination:null,responseState:n,progressiveChunkSize:s===void 0?12800:s,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:m,pingedTasks:h,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:a===void 0?H$:a,onAllReady:Nl,onShellReady:o===void 0?Nl:o,onShellError:Nl,onFatalError:Nl},r=dd(n,0,null,r,!1,!1),r.parentFlushed=!0,e=tf(n,e,null,r,m,sv,null,P$),h.push(e),n}function tf(e,n,r,s,a,l,o,i){e.allPendingTasks++,r===null?e.pendingRootTasks++:r.pendingTasks++;var c={node:n,ping:function(){var h=e.pingedTasks;h.push(c),h.length===1&&hv(e)},blockedBoundary:r,blockedSegment:s,abortSet:a,legacyContext:l,context:o,treeContext:i};return a.add(c),c}function dd(e,n,r,s,a,l){return{status:0,id:-1,index:n,parentFlushed:!1,chunks:[],children:[],formatContext:s,boundary:r,lastPushedText:a,textEmbedded:l}}function uo(e,n){if(e=e.onError(n),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function cd(e,n){var r=e.onShellError;r(n),r=e.onFatalError,r(n),e.destination!==null?(e.status=2,e.destination.destroy(n)):(e.status=1,e.fatalError=n)}function H0(e,n,r,s,a){for(gr={},Jp=n,co=0,e=r(s,a);id;)id=!1,co=0,Dd+=1,We=null,e=r(s,a);return nf(),e}function U0(e,n,r,s){var a=r.render(),l=s.childContextTypes;if(l!=null){var o=n.legacyContext;if(typeof r.getChildContext!="function")s=o;else{r=r.getChildContext();for(var i in r)if(!(i in l))throw Error(me(108,uh(s)||"Unknown",i));s=Dl({},o,r)}n.legacyContext=s,dt(e,n,a),n.legacyContext=o}else dt(e,n,a)}function G0(e,n){if(e&&e.defaultProps){n=Dl({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}function ph(e,n,r,s,a){if(typeof r=="function")if(r.prototype&&r.prototype.isReactComponent){a=R0(r,n.legacyContext);var l=r.contextType;l=new r(s,typeof l=="object"&&l!==null?l._currentValue2:a),F0(l,r,s,a),U0(e,n,l,r)}else{l=R0(r,n.legacyContext),a=H0(e,n,r,s,l);var o=co!==0;if(typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0)F0(a,r,s,l),U0(e,n,a,r);else if(o){s=n.treeContext,n.treeContext=hh(s,1,0);try{dt(e,n,a)}finally{n.treeContext=s}}else dt(e,n,a)}else if(typeof r=="string"){switch(a=n.blockedSegment,l=S$(a.chunks,r,s,e.responseState,a.formatContext),a.lastPushedText=!1,o=a.formatContext,a.formatContext=j$(o,r,s),fh(e,n,l),a.formatContext=o,r){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:a.chunks.push("</",r,">")}a.lastPushedText=!1}else{switch(r){case M$:case E$:case K5:case Q5:case q5:dt(e,n,s.children);return;case tv:dt(e,n,s.children);return;case I$:throw Error(me(343));case nv:e:{r=n.blockedBoundary,a=n.blockedSegment,l=s.fallback,s=s.children,o=new Set;var i={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:o,errorDigest:null},c=dd(e,a.chunks.length,i,a.formatContext,!1,!1);a.children.push(c),a.lastPushedText=!1;var h=dd(e,0,null,a.formatContext,!1,!1);h.parentFlushed=!0,n.blockedBoundary=i,n.blockedSegment=h;try{if(fh(e,n,s),e.responseState.generateStaticMarkup||h.lastPushedText&&h.textEmbedded&&h.chunks.push("<!-- -->"),h.status=1,ud(i,h),i.pendingTasks===0)break e}catch(m){h.status=4,i.forceClientRender=!0,i.errorDigest=uo(e,m)}finally{n.blockedBoundary=r,n.blockedSegment=a}n=tf(e,l,r,c,o,n.legacyContext,n.context,n.treeContext),e.pingedTasks.push(n)}return}if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ev:if(s=H0(e,n,r.render,s,a),co!==0){r=n.treeContext,n.treeContext=hh(r,1,0);try{dt(e,n,s)}finally{n.treeContext=r}}else dt(e,n,s);return;case rv:r=r.type,s=G0(r,s),ph(e,n,r,s,a);return;case X5:if(a=s.children,r=r._context,s=s.value,l=r._currentValue2,r._currentValue2=s,o=Ss,Ss=s={parent:o,depth:o===null?0:o.depth+1,context:r,parentValue:l,value:s},n.context=s,dt(e,n,a),e=Ss,e===null)throw Error(me(403));s=e.parentValue,e.context._currentValue2=s===A$?e.context._defaultValue:s,e=Ss=e.parent,n.context=e;return;case J5:s=s.children,s=s(r._currentValue2),dt(e,n,s);return;case Xp:a=r._init,r=a(r._payload),s=G0(r,s),ph(e,n,r,s,void 0);return}throw Error(me(130,r==null?r:typeof r,""))}}function dt(e,n,r){if(n.node=r,typeof r=="object"&&r!==null){switch(r.$$typeof){case $$:ph(e,n,r.type,r.props,r.ref);return;case Z5:throw Error(me(257));case Xp:var s=r._init;r=s(r._payload),dt(e,n,r);return}if(ch(r)){V0(e,n,r);return}if(r===null||typeof r!="object"?s=null:(s=P0&&r[P0]||r["@@iterator"],s=typeof s=="function"?s:null),s&&(s=s.call(r))){if(r=s.next(),!r.done){var a=[];do a.push(r.value),r=s.next();while(!r.done);V0(e,n,a)}return}throw e=Object.prototype.toString.call(r),Error(me(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}typeof r=="string"?(s=n.blockedSegment,s.lastPushedText=A0(n.blockedSegment.chunks,r,e.responseState,s.lastPushedText)):typeof r=="number"&&(s=n.blockedSegment,s.lastPushedText=A0(n.blockedSegment.chunks,""+r,e.responseState,s.lastPushedText))}function V0(e,n,r){for(var s=r.length,a=0;a<s;a++){var l=n.treeContext;n.treeContext=hh(l,s,a);try{fh(e,n,r[a])}finally{n.treeContext=l}}}function fh(e,n,r){var s=n.blockedSegment.formatContext,a=n.legacyContext,l=n.context;try{return dt(e,n,r)}catch(c){if(nf(),typeof c=="object"&&c!==null&&typeof c.then=="function"){r=c;var o=n.blockedSegment,i=dd(e,o.chunks.length,null,o.formatContext,o.lastPushedText,!0);o.children.push(i),o.lastPushedText=!1,e=tf(e,n.node,n.blockedBoundary,i,n.abortSet,n.legacyContext,n.context,n.treeContext).ping,r.then(e,e),n.blockedSegment.formatContext=s,n.legacyContext=a,n.context=l,od(l)}else throw n.blockedSegment.formatContext=s,n.legacyContext=a,n.context=l,od(l),c}}function G$(e){var n=e.blockedBoundary;e=e.blockedSegment,e.status=3,uv(this,n,e)}function cv(e,n,r){var s=e.blockedBoundary;e.blockedSegment.status=3,s===null?(n.allPendingTasks--,n.status!==2&&(n.status=2,n.destination!==null&&n.destination.push(null))):(s.pendingTasks--,s.forceClientRender||(s.forceClientRender=!0,e=r===void 0?Error(me(432)):r,s.errorDigest=n.onError(e),s.parentFlushed&&n.clientRenderedBoundaries.push(s)),s.fallbackAbortableTasks.forEach(function(a){return cv(a,n,r)}),s.fallbackAbortableTasks.clear(),n.allPendingTasks--,n.allPendingTasks===0&&(s=n.onAllReady,s()))}function ud(e,n){if(n.chunks.length===0&&n.children.length===1&&n.children[0].boundary===null){var r=n.children[0];r.id=n.id,r.parentFlushed=!0,r.status===1&&ud(e,r)}else e.completedSegments.push(n)}function uv(e,n,r){if(n===null){if(r.parentFlushed){if(e.completedRootSegment!==null)throw Error(me(389));e.completedRootSegment=r}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=Nl,n=e.onShellReady,n())}else n.pendingTasks--,n.forceClientRender||(n.pendingTasks===0?(r.parentFlushed&&r.status===1&&ud(n,r),n.parentFlushed&&e.completedBoundaries.push(n),n.fallbackAbortableTasks.forEach(G$,e),n.fallbackAbortableTasks.clear()):r.parentFlushed&&r.status===1&&(ud(n,r),n.completedSegments.length===1&&n.parentFlushed&&e.partialBoundaries.push(n)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function hv(e){if(e.status!==2){var n=Ss,r=Kc.current;Kc.current=W0;var s=$i;$i=e.responseState;try{var a=e.pingedTasks,l;for(l=0;l<a.length;l++){var o=a[l],i=e,c=o.blockedSegment;if(c.status===0){od(o.context);try{dt(i,o,o.node),i.responseState.generateStaticMarkup||c.lastPushedText&&c.textEmbedded&&c.chunks.push("<!-- -->"),o.abortSet.delete(o),c.status=1,uv(i,o.blockedBoundary,c)}catch(_){if(nf(),typeof _=="object"&&_!==null&&typeof _.then=="function"){var h=o.ping;_.then(h,h)}else{o.abortSet.delete(o),c.status=4;var m=o.blockedBoundary,x=_,w=uo(i,x);if(m===null?cd(i,x):(m.pendingTasks--,m.forceClientRender||(m.forceClientRender=!0,m.errorDigest=w,m.parentFlushed&&i.clientRenderedBoundaries.push(m))),i.allPendingTasks--,i.allPendingTasks===0){var $=i.onAllReady;$()}}}finally{}}}a.splice(0,l),e.destination!==null&&rf(e,e.destination)}catch(_){uo(e,_),cd(e,_)}finally{$i=s,Kc.current=r,r===W0&&od(n)}}}function ii(e,n,r){switch(r.parentFlushed=!0,r.status){case 0:var s=r.id=e.nextSegmentId++;return r.lastPushedText=!1,r.textEmbedded=!1,e=e.responseState,n.push('<template id="'),n.push(e.placeholderPrefix),e=s.toString(16),n.push(e),n.push('"></template>');case 1:r.status=2;var a=!0;s=r.chunks;var l=0;r=r.children;for(var o=0;o<r.length;o++){for(a=r[o];l<a.index;l++)n.push(s[l]);a=zd(e,n,a)}for(;l<s.length-1;l++)n.push(s[l]);return l<s.length&&(a=n.push(s[l])),a;default:throw Error(me(390))}}function zd(e,n,r){var s=r.boundary;if(s===null)return ii(e,n,r);if(s.parentFlushed=!0,s.forceClientRender)return e.responseState.generateStaticMarkup||(s=s.errorDigest,n.push("<!--$!-->"),n.push("<template"),s&&(n.push(' data-dgst="'),s=Hn(s),n.push(s),n.push('"')),n.push("></template>")),ii(e,n,r),e=e.responseState.generateStaticMarkup?!0:n.push("<!--/$-->"),e;if(0<s.pendingTasks){s.rootSegmentID=e.nextSegmentId++,0<s.completedSegments.length&&e.partialBoundaries.push(s);var a=e.responseState,l=a.nextSuspenseID++;return a=a.boundaryPrefix+l.toString(16),s=s.id=a,M0(n,e.responseState,s),ii(e,n,r),n.push("<!--/$-->")}if(s.byteSize>e.progressiveChunkSize)return s.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(s),M0(n,e.responseState,s.id),ii(e,n,r),n.push("<!--/$-->");if(e.responseState.generateStaticMarkup||n.push("<!--$-->"),r=s.completedSegments,r.length!==1)throw Error(me(391));return zd(e,n,r[0]),e=e.responseState.generateStaticMarkup?!0:n.push("<!--/$-->"),e}function Y0(e,n,r){return T$(n,e.responseState,r.formatContext,r.id),zd(e,n,r),N$(n,r.formatContext)}function Z0(e,n,r){for(var s=r.completedSegments,a=0;a<s.length;a++)pv(e,n,r,s[a]);if(s.length=0,e=e.responseState,s=r.id,r=r.rootSegmentID,n.push(e.startInlineScript),e.sentCompleteBoundaryFunction?n.push('$RC("'):(e.sentCompleteBoundaryFunction=!0,n.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')),s===null)throw Error(me(395));return r=r.toString(16),n.push(s),n.push('","'),n.push(e.segmentPrefix),n.push(r),n.push('")<\/script>')}function pv(e,n,r,s){if(s.status===2)return!0;var a=s.id;if(a===-1){if((s.id=r.rootSegmentID)===-1)throw Error(me(392));return Y0(e,n,s)}return Y0(e,n,s),e=e.responseState,n.push(e.startInlineScript),e.sentCompleteSegmentFunction?n.push('$RS("'):(e.sentCompleteSegmentFunction=!0,n.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')),n.push(e.segmentPrefix),a=a.toString(16),n.push(a),n.push('","'),n.push(e.placeholderPrefix),n.push(a),n.push('")<\/script>')}function rf(e,n){try{var r=e.completedRootSegment;if(r!==null&&e.pendingRootTasks===0){zd(e,n,r),e.completedRootSegment=null;var s=e.responseState.bootstrapChunks;for(r=0;r<s.length-1;r++)n.push(s[r]);r<s.length&&n.push(s[r])}var a=e.clientRenderedBoundaries,l;for(l=0;l<a.length;l++){var o=a[l];s=n;var i=e.responseState,c=o.id,h=o.errorDigest,m=o.errorMessage,x=o.errorComponentStack;if(s.push(i.startInlineScript),i.sentClientRenderFunction?s.push('$RX("'):(i.sentClientRenderFunction=!0,s.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')),c===null)throw Error(me(395));if(s.push(c),s.push('"'),h||m||x){s.push(",");var w=qc(h||"");s.push(w)}if(m||x){s.push(",");var $=qc(m||"");s.push($)}if(x){s.push(",");var _=qc(x);s.push(_)}if(!s.push(")<\/script>")){e.destination=null,l++,a.splice(0,l);return}}a.splice(0,l);var C=e.completedBoundaries;for(l=0;l<C.length;l++)if(!Z0(e,n,C[l])){e.destination=null,l++,C.splice(0,l);return}C.splice(0,l);var E=e.partialBoundaries;for(l=0;l<E.length;l++){var b=E[l];e:{a=e,o=n;var f=b.completedSegments;for(i=0;i<f.length;i++)if(!pv(a,o,b,f[i])){i++,f.splice(0,i);var v=!1;break e}f.splice(0,i),v=!0}if(!v){e.destination=null,l++,E.splice(0,l);return}}E.splice(0,l);var g=e.completedBoundaries;for(l=0;l<g.length;l++)if(!Z0(e,n,g[l])){e.destination=null,l++,g.splice(0,l);return}g.splice(0,l)}finally{e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&n.push(null)}}function V$(e,n){try{var r=e.abortableTasks;r.forEach(function(s){return cv(s,e,n)}),r.clear(),e.destination!==null&&rf(e,e.destination)}catch(s){uo(e,s),cd(e,s)}}function Y$(){}function fv(e,n,r,s){var a=!1,l=null,o="",i={push:function(h){return h!==null&&(o+=h),!0},destroy:function(h){a=!0,l=h}},c=!1;if(e=U$(e,_$(r,n?n.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,Y$,void 0,function(){c=!0}),hv(e),V$(e,s),e.status===1)e.status=2,i.destroy(e.fatalError);else if(e.status!==2&&e.destination===null){e.destination=i;try{rf(e,i)}catch(h){uo(e,h),cd(e,h)}}if(a)throw l;if(!c)throw Error(me(426));return o}Ga.renderToNodeStream=function(){throw Error(me(207))};Ga.renderToStaticMarkup=function(e,n){return fv(e,n,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};Ga.renderToStaticNodeStream=function(){throw Error(me(208))};Ga.renderToString=function(e,n){return fv(e,n,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};Ga.version="18.2.0";var sf={};/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv=F;function xe(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ct=null,ut=0;function te(e,n){if(n.length!==0)if(512<n.length)0<ut&&(e.enqueue(new Uint8Array(ct.buffer,0,ut)),ct=new Uint8Array(512),ut=0),e.enqueue(n);else{var r=ct.length-ut;r<n.length&&(r===0?e.enqueue(ct):(ct.set(n.subarray(0,r),ut),e.enqueue(ct),n=n.subarray(r)),ct=new Uint8Array(512),ut=0),ct.set(n,ut),ut+=n.length}}function Ke(e,n){return te(e,n),!0}function q0(e){ct&&0<ut&&(e.enqueue(new Uint8Array(ct.buffer,0,ut)),ct=null,ut=0)}var gv=new TextEncoder;function we(e){return gv.encode(e)}function Q(e){return gv.encode(e)}function vv(e,n){typeof e.error=="function"?e.error(n):e.close()}var Jn=Object.prototype.hasOwnProperty,Z$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,K0={},Q0={};function xv(e){return Jn.call(Q0,e)?!0:Jn.call(K0,e)?!1:Z$.test(e)?Q0[e]=!0:(K0[e]=!0,!1)}function Zn(e,n,r,s,a,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var An={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){An[e]=new Zn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];An[n]=new Zn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){An[e]=new Zn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){An[e]=new Zn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){An[e]=new Zn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){An[e]=new Zn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){An[e]=new Zn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){An[e]=new Zn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){An[e]=new Zn(e,5,!1,e.toLowerCase(),null,!1,!1)});var af=/[\-:]([a-z])/g;function lf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(af,lf);An[n]=new Zn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(af,lf);An[n]=new Zn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(af,lf);An[n]=new Zn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){An[e]=new Zn(e,1,!1,e.toLowerCase(),null,!1,!1)});An.xlinkHref=new Zn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){An[e]=new Zn(e,1,!1,e.toLowerCase(),null,!0,!0)});var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},q$=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(e){q$.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ii[n]=Ii[e]})});var K$=/["'&<>]/;function $n(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var n=K$.exec(e);if(n){var r="",s,a=0;for(s=n.index;s<e.length;s++){switch(e.charCodeAt(s)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#x27;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}a!==s&&(r+=e.substring(a,s)),a=s+1,r+=n}e=a!==s?r+e.substring(a,s):r}return e}var Q$=/([A-Z])/g,X$=/^ms-/,mh=Array.isArray,J$=Q("<script>"),eI=Q("<\/script>"),nI=Q('<script src="'),tI=Q('<script type="module" src="'),X0=Q('" async=""><\/script>'),rI=/(<\/|<)(s)(cript)/gi;function sI(e,n,r,s){return""+n+(r==="s"?"\\u0073":"\\u0053")+s}function aI(e,n,r,s,a){e=e===void 0?"":e,n=n===void 0?J$:Q('<script nonce="'+$n(n)+'">');var l=[];if(r!==void 0&&l.push(n,we((""+r).replace(rI,sI)),eI),s!==void 0)for(r=0;r<s.length;r++)l.push(nI,we($n(s[r])),X0);if(a!==void 0)for(s=0;s<a.length;s++)l.push(tI,we($n(a[s])),X0);return{bootstrapChunks:l,startInlineScript:n,placeholderPrefix:Q(e+"P:"),segmentPrefix:Q(e+"S:"),boundaryPrefix:e+"B:",idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function Ht(e,n){return{insertionMode:e,selectedValue:n}}function lI(e){return Ht(e==="http://www.w3.org/2000/svg"?2:e==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function oI(e,n,r){switch(n){case"select":return Ht(1,r.value!=null?r.value:r.defaultValue);case"svg":return Ht(2,null);case"math":return Ht(3,null);case"foreignObject":return Ht(1,null);case"table":return Ht(4,null);case"thead":case"tbody":case"tfoot":return Ht(5,null);case"colgroup":return Ht(7,null);case"tr":return Ht(6,null)}return 4<=e.insertionMode||e.insertionMode===0?Ht(1,null):e}var of=Q("<!-- -->");function J0(e,n,r,s){return n===""?s:(s&&e.push(of),e.push(we($n(n))),!0)}var em=new Map,iI=Q(' style="'),nm=Q(":"),dI=Q(";");function bv(e,n,r){if(typeof r!="object")throw Error(xe(62));n=!0;for(var s in r)if(Jn.call(r,s)){var a=r[s];if(a!=null&&typeof a!="boolean"&&a!==""){if(s.indexOf("--")===0){var l=we($n(s));a=we($n((""+a).trim()))}else{l=s;var o=em.get(l);o!==void 0||(o=Q($n(l.replace(Q$,"-$1").toLowerCase().replace(X$,"-ms-"))),em.set(l,o)),l=o,a=typeof a=="number"?a===0||Jn.call(Ii,s)?we(""+a):we(a+"px"):we($n((""+a).trim()))}n?(n=!1,e.push(iI,l,nm,a)):e.push(dI,l,nm,a)}}n||e.push(bs)}var Nr=Q(" "),aa=Q('="'),bs=Q('"'),tm=Q('=""');function ot(e,n,r,s){switch(r){case"style":bv(e,n,s);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N"){if(n=An.hasOwnProperty(r)?An[r]:null,n!==null){switch(typeof s){case"function":case"symbol":return;case"boolean":if(!n.acceptsBooleans)return}switch(r=we(n.attributeName),n.type){case 3:s&&e.push(Nr,r,tm);break;case 4:s===!0?e.push(Nr,r,tm):s!==!1&&e.push(Nr,r,aa,we($n(s)),bs);break;case 5:isNaN(s)||e.push(Nr,r,aa,we($n(s)),bs);break;case 6:!isNaN(s)&&1<=s&&e.push(Nr,r,aa,we($n(s)),bs);break;default:n.sanitizeURL&&(s=""+s),e.push(Nr,r,aa,we($n(s)),bs)}}else if(xv(r)){switch(typeof s){case"function":case"symbol":return;case"boolean":if(n=r.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-")return}e.push(Nr,we(r),aa,we($n(s)),bs)}}}var Lr=Q(">"),rm=Q("/>");function Ei(e,n,r){if(n!=null){if(r!=null)throw Error(xe(60));if(typeof n!="object"||!("__html"in n))throw Error(xe(61));n=n.__html,n!=null&&e.push(we(""+n))}}function cI(e){var n="";return mv.Children.forEach(e,function(r){r!=null&&(n+=r)}),n}var Qc=Q(' selected=""');function Xc(e,n,r,s){e.push(Ut(r));var a=r=null,l;for(l in n)if(Jn.call(n,l)){var o=n[l];if(o!=null)switch(l){case"children":r=o;break;case"dangerouslySetInnerHTML":a=o;break;default:ot(e,s,l,o)}}return e.push(Lr),Ei(e,a,r),typeof r=="string"?(e.push(we($n(r))),null):r}var Jc=Q(`
`),uI=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,sm=new Map;function Ut(e){var n=sm.get(e);if(n===void 0){if(!uI.test(e))throw Error(xe(65,e));n=Q("<"+e),sm.set(e,n)}return n}var hI=Q("<!DOCTYPE html>");function pI(e,n,r,s,a){switch(n){case"select":e.push(Ut("select"));var l=null,o=null;for(m in r)if(Jn.call(r,m)){var i=r[m];if(i!=null)switch(m){case"children":l=i;break;case"dangerouslySetInnerHTML":o=i;break;case"defaultValue":case"value":break;default:ot(e,s,m,i)}}return e.push(Lr),Ei(e,o,l),l;case"option":o=a.selectedValue,e.push(Ut("option"));var c=i=null,h=null,m=null;for(l in r)if(Jn.call(r,l)){var x=r[l];if(x!=null)switch(l){case"children":i=x;break;case"selected":h=x;break;case"dangerouslySetInnerHTML":m=x;break;case"value":c=x;default:ot(e,s,l,x)}}if(o!=null)if(r=c!==null?""+c:cI(i),mh(o)){for(s=0;s<o.length;s++)if(""+o[s]===r){e.push(Qc);break}}else""+o===r&&e.push(Qc);else h&&e.push(Qc);return e.push(Lr),Ei(e,m,i),i;case"textarea":e.push(Ut("textarea")),m=o=l=null;for(i in r)if(Jn.call(r,i)&&(c=r[i],c!=null))switch(i){case"children":m=c;break;case"value":l=c;break;case"defaultValue":o=c;break;case"dangerouslySetInnerHTML":throw Error(xe(91));default:ot(e,s,i,c)}if(l===null&&o!==null&&(l=o),e.push(Lr),m!=null){if(l!=null)throw Error(xe(92));if(mh(m)&&1<m.length)throw Error(xe(93));l=""+m}return typeof l=="string"&&l[0]===`
`&&e.push(Jc),l!==null&&e.push(we($n(""+l))),null;case"input":e.push(Ut("input")),c=m=i=l=null;for(o in r)if(Jn.call(r,o)&&(h=r[o],h!=null))switch(o){case"children":case"dangerouslySetInnerHTML":throw Error(xe(399,"input"));case"defaultChecked":c=h;break;case"defaultValue":i=h;break;case"checked":m=h;break;case"value":l=h;break;default:ot(e,s,o,h)}return m!==null?ot(e,s,"checked",m):c!==null&&ot(e,s,"checked",c),l!==null?ot(e,s,"value",l):i!==null&&ot(e,s,"value",i),e.push(rm),null;case"menuitem":e.push(Ut("menuitem"));for(var w in r)if(Jn.call(r,w)&&(l=r[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(xe(400));default:ot(e,s,w,l)}return e.push(Lr),null;case"title":e.push(Ut("title")),l=null;for(x in r)if(Jn.call(r,x)&&(o=r[x],o!=null))switch(x){case"children":l=o;break;case"dangerouslySetInnerHTML":throw Error(xe(434));default:ot(e,s,x,o)}return e.push(Lr),l;case"listing":case"pre":e.push(Ut(n)),o=l=null;for(c in r)if(Jn.call(r,c)&&(i=r[c],i!=null))switch(c){case"children":l=i;break;case"dangerouslySetInnerHTML":o=i;break;default:ot(e,s,c,i)}if(e.push(Lr),o!=null){if(l!=null)throw Error(xe(60));if(typeof o!="object"||!("__html"in o))throw Error(xe(61));r=o.__html,r!=null&&(typeof r=="string"&&0<r.length&&r[0]===`
`?e.push(Jc,we(r)):e.push(we(""+r)))}return typeof l=="string"&&l[0]===`
`&&e.push(Jc),l;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Ut(n));for(var $ in r)if(Jn.call(r,$)&&(l=r[$],l!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(xe(399,n));default:ot(e,s,$,l)}return e.push(rm),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Xc(e,r,n,s);case"html":return a.insertionMode===0&&e.push(hI),Xc(e,r,n,s);default:if(n.indexOf("-")===-1&&typeof r.is!="string")return Xc(e,r,n,s);e.push(Ut(n)),o=l=null;for(h in r)if(Jn.call(r,h)&&(i=r[h],i!=null))switch(h){case"children":l=i;break;case"dangerouslySetInnerHTML":o=i;break;case"style":bv(e,s,i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:xv(h)&&typeof i!="function"&&typeof i!="symbol"&&e.push(Nr,we(h),aa,we($n(i)),bs)}return e.push(Lr),Ei(e,o,l),l}}var fI=Q("</"),mI=Q(">"),gI=Q('<template id="'),vI=Q('"></template>'),xI=Q("<!--$-->"),bI=Q('<!--$?--><template id="'),yI=Q('"></template>'),wI=Q("<!--$!-->"),jI=Q("<!--/$-->"),CI=Q("<template"),kI=Q('"'),SI=Q(' data-dgst="');Q(' data-msg="');Q(' data-stck="');var TI=Q("></template>");function am(e,n,r){if(te(e,bI),r===null)throw Error(xe(395));return te(e,r),Ke(e,yI)}var NI=Q('<div hidden id="'),LI=Q('">'),_I=Q("</div>"),$I=Q('<svg aria-hidden="true" style="display:none" id="'),II=Q('">'),EI=Q("</svg>"),MI=Q('<math aria-hidden="true" style="display:none" id="'),AI=Q('">'),PI=Q("</math>"),RI=Q('<table hidden id="'),OI=Q('">'),FI=Q("</table>"),BI=Q('<table hidden><tbody id="'),DI=Q('">'),zI=Q("</tbody></table>"),WI=Q('<table hidden><tr id="'),HI=Q('">'),UI=Q("</tr></table>"),GI=Q('<table hidden><colgroup id="'),VI=Q('">'),YI=Q("</colgroup></table>");function ZI(e,n,r,s){switch(r.insertionMode){case 0:case 1:return te(e,NI),te(e,n.segmentPrefix),te(e,we(s.toString(16))),Ke(e,LI);case 2:return te(e,$I),te(e,n.segmentPrefix),te(e,we(s.toString(16))),Ke(e,II);case 3:return te(e,MI),te(e,n.segmentPrefix),te(e,we(s.toString(16))),Ke(e,AI);case 4:return te(e,RI),te(e,n.segmentPrefix),te(e,we(s.toString(16))),Ke(e,OI);case 5:return te(e,BI),te(e,n.segmentPrefix),te(e,we(s.toString(16))),Ke(e,DI);case 6:return te(e,WI),te(e,n.segmentPrefix),te(e,we(s.toString(16))),Ke(e,HI);case 7:return te(e,GI),te(e,n.segmentPrefix),te(e,we(s.toString(16))),Ke(e,VI);default:throw Error(xe(397))}}function qI(e,n){switch(n.insertionMode){case 0:case 1:return Ke(e,_I);case 2:return Ke(e,EI);case 3:return Ke(e,PI);case 4:return Ke(e,FI);case 5:return Ke(e,zI);case 6:return Ke(e,UI);case 7:return Ke(e,YI);default:throw Error(xe(397))}}var KI=Q('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),QI=Q('$RS("'),XI=Q('","'),JI=Q('")<\/script>'),eE=Q('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),nE=Q('$RC("'),tE=Q('","'),rE=Q('")<\/script>'),sE=Q('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),aE=Q('$RX("'),lE=Q('"'),oE=Q(")<\/script>"),eu=Q(","),iE=/[<\u2028\u2029]/g;function nu(e){return JSON.stringify(e).replace(iE,function(n){switch(n){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var zl=Object.assign,dE=Symbol.for("react.element"),yv=Symbol.for("react.portal"),wv=Symbol.for("react.fragment"),jv=Symbol.for("react.strict_mode"),Cv=Symbol.for("react.profiler"),kv=Symbol.for("react.provider"),Sv=Symbol.for("react.context"),Tv=Symbol.for("react.forward_ref"),Nv=Symbol.for("react.suspense"),Lv=Symbol.for("react.suspense_list"),_v=Symbol.for("react.memo"),df=Symbol.for("react.lazy"),cE=Symbol.for("react.scope"),uE=Symbol.for("react.debug_trace_mode"),hE=Symbol.for("react.legacy_hidden"),pE=Symbol.for("react.default_value"),lm=Symbol.iterator;function gh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wv:return"Fragment";case yv:return"Portal";case Cv:return"Profiler";case jv:return"StrictMode";case Nv:return"Suspense";case Lv:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sv:return(e.displayName||"Context")+".Consumer";case kv:return(e._context.displayName||"Context")+".Provider";case Tv:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _v:return n=e.displayName||null,n!==null?n:gh(e.type)||"Memo";case df:n=e._payload,e=e._init;try{return gh(e(n))}catch{}}return null}var $v={};function om(e,n){if(e=e.contextTypes,!e)return $v;var r={},s;for(s in e)r[s]=n[s];return r}var Ts=null;function Wd(e,n){if(e!==n){e.context._currentValue=e.parentValue,e=e.parent;var r=n.parent;if(e===null){if(r!==null)throw Error(xe(401))}else{if(r===null)throw Error(xe(401));Wd(e,r)}n.context._currentValue=n.value}}function Iv(e){e.context._currentValue=e.parentValue,e=e.parent,e!==null&&Iv(e)}function Ev(e){var n=e.parent;n!==null&&Ev(n),e.context._currentValue=e.value}function Mv(e,n){if(e.context._currentValue=e.parentValue,e=e.parent,e===null)throw Error(xe(402));e.depth===n.depth?Wd(e,n):Mv(e,n)}function Av(e,n){var r=n.parent;if(r===null)throw Error(xe(402));e.depth===r.depth?Wd(e,r):Av(e,r),n.context._currentValue=n.value}function hd(e){var n=Ts;n!==e&&(n===null?Ev(e):e===null?Iv(n):n.depth===e.depth?Wd(n,e):n.depth>e.depth?Mv(n,e):Av(n,e),Ts=e)}var im={isMounted:function(){return!1},enqueueSetState:function(e,n){e=e._reactInternals,e.queue!==null&&e.queue.push(n)},enqueueReplaceState:function(e,n){e=e._reactInternals,e.replace=!0,e.queue=[n]},enqueueForceUpdate:function(){}};function dm(e,n,r,s){var a=e.state!==void 0?e.state:null;e.updater=im,e.props=r,e.state=a;var l={queue:[],replace:!1};e._reactInternals=l;var o=n.contextType;if(e.context=typeof o=="object"&&o!==null?o._currentValue:s,o=n.getDerivedStateFromProps,typeof o=="function"&&(o=o(r,a),a=o==null?a:zl({},a,o),e.state=a),typeof n.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(n=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),n!==e.state&&im.enqueueReplaceState(e,e.state,null),l.queue!==null&&0<l.queue.length)if(n=l.queue,o=l.replace,l.queue=null,l.replace=!1,o&&n.length===1)e.state=n[0];else{for(l=o?n[0]:e.state,a=!0,o=o?1:0;o<n.length;o++){var i=n[o];i=typeof i=="function"?i.call(e,l,r,s):i,i!=null&&(a?(a=!1,l=zl({},l,i)):zl(l,i))}e.state=l}else l.queue=null}var fE={id:1,overflow:""};function vh(e,n,r){var s=e.id;e=e.overflow;var a=32-Mi(s)-1;s&=~(1<<a),r+=1;var l=32-Mi(n)+a;if(30<l){var o=a-a%5;return l=(s&(1<<o)-1).toString(32),s>>=o,a-=o,{id:1<<32-Mi(n)+a|r<<a|s,overflow:l+e}}return{id:1<<l|r<<a|s,overflow:e}}var Mi=Math.clz32?Math.clz32:vE,mE=Math.log,gE=Math.LN2;function vE(e){return e>>>=0,e===0?32:31-(mE(e)/gE|0)|0}function xE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var bE=typeof Object.is=="function"?Object.is:xE,vr=null,cf=null,Ai=null,He=null,Ll=!1,pd=!1,ho=0,Rr=null,Hd=0;function ys(){if(vr===null)throw Error(xe(321));return vr}function cm(){if(0<Hd)throw Error(xe(312));return{memoizedState:null,queue:null,next:null}}function uf(){return He===null?Ai===null?(Ll=!1,Ai=He=cm()):(Ll=!0,He=Ai):He.next===null?(Ll=!1,He=He.next=cm()):(Ll=!0,He=He.next),He}function hf(){cf=vr=null,pd=!1,Ai=null,Hd=0,He=Rr=null}function Pv(e,n){return typeof n=="function"?n(e):n}function um(e,n,r){if(vr=ys(),He=uf(),Ll){var s=He.queue;if(n=s.dispatch,Rr!==null&&(r=Rr.get(s),r!==void 0)){Rr.delete(s),s=He.memoizedState;do s=e(s,r.action),r=r.next;while(r!==null);return He.memoizedState=s,[s,n]}return[He.memoizedState,n]}return e=e===Pv?typeof n=="function"?n():n:r!==void 0?r(n):n,He.memoizedState=e,e=He.queue={last:null,dispatch:null},e=e.dispatch=yE.bind(null,vr,e),[He.memoizedState,e]}function hm(e,n){if(vr=ys(),He=uf(),n=n===void 0?null:n,He!==null){var r=He.memoizedState;if(r!==null&&n!==null){var s=r[1];e:if(s===null)s=!1;else{for(var a=0;a<s.length&&a<n.length;a++)if(!bE(n[a],s[a])){s=!1;break e}s=!0}if(s)return r[0]}}return e=e(),He.memoizedState=[e,n],e}function yE(e,n,r){if(25<=Hd)throw Error(xe(301));if(e===vr)if(pd=!0,e={action:r,next:null},Rr===null&&(Rr=new Map),r=Rr.get(n),r===void 0)Rr.set(n,e);else{for(n=r;n.next!==null;)n=n.next;n.next=e}}function wE(){throw Error(xe(394))}function di(){}var pm={readContext:function(e){return e._currentValue},useContext:function(e){return ys(),e._currentValue},useMemo:hm,useReducer:um,useRef:function(e){vr=ys(),He=uf();var n=He.memoizedState;return n===null?(e={current:e},He.memoizedState=e):n},useState:function(e){return um(Pv,e)},useInsertionEffect:di,useLayoutEffect:function(){},useCallback:function(e,n){return hm(function(){return e},n)},useImperativeHandle:di,useEffect:di,useDebugValue:di,useDeferredValue:function(e){return ys(),e},useTransition:function(){return ys(),[!1,wE]},useId:function(){var e=cf.treeContext,n=e.overflow;e=e.id,e=(e&~(1<<32-Mi(e)-1)).toString(32)+n;var r=Pi;if(r===null)throw Error(xe(404));return n=ho++,e=":"+r.idPrefix+"R"+e,0<n&&(e+="H"+n.toString(32)),e+":"},useMutableSource:function(e,n){return ys(),n(e._source)},useSyncExternalStore:function(e,n,r){if(r===void 0)throw Error(xe(407));return r()}},Pi=null,tu=mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function jE(e){return console.error(e),null}function _l(){}function CE(e,n,r,s,a,l,o,i,c){var h=[],m=new Set;return n={destination:null,responseState:n,progressiveChunkSize:s===void 0?12800:s,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:m,pingedTasks:h,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:a===void 0?jE:a,onAllReady:l===void 0?_l:l,onShellReady:o===void 0?_l:o,onShellError:i===void 0?_l:i,onFatalError:c===void 0?_l:c},r=fd(n,0,null,r,!1,!1),r.parentFlushed=!0,e=pf(n,e,null,r,m,$v,null,fE),h.push(e),n}function pf(e,n,r,s,a,l,o,i){e.allPendingTasks++,r===null?e.pendingRootTasks++:r.pendingTasks++;var c={node:n,ping:function(){var h=e.pingedTasks;h.push(c),h.length===1&&Fv(e)},blockedBoundary:r,blockedSegment:s,abortSet:a,legacyContext:l,context:o,treeContext:i};return a.add(c),c}function fd(e,n,r,s,a,l){return{status:0,id:-1,index:n,parentFlushed:!1,chunks:[],children:[],formatContext:s,boundary:r,lastPushedText:a,textEmbedded:l}}function po(e,n){if(e=e.onError(n),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function md(e,n){var r=e.onShellError;r(n),r=e.onFatalError,r(n),e.destination!==null?(e.status=2,vv(e.destination,n)):(e.status=1,e.fatalError=n)}function fm(e,n,r,s,a){for(vr={},cf=n,ho=0,e=r(s,a);pd;)pd=!1,ho=0,Hd+=1,He=null,e=r(s,a);return hf(),e}function mm(e,n,r,s){var a=r.render(),l=s.childContextTypes;if(l!=null){var o=n.legacyContext;if(typeof r.getChildContext!="function")s=o;else{r=r.getChildContext();for(var i in r)if(!(i in l))throw Error(xe(108,gh(s)||"Unknown",i));s=zl({},o,r)}n.legacyContext=s,ht(e,n,a),n.legacyContext=o}else ht(e,n,a)}function gm(e,n){if(e&&e.defaultProps){n=zl({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}function xh(e,n,r,s,a){if(typeof r=="function")if(r.prototype&&r.prototype.isReactComponent){a=om(r,n.legacyContext);var l=r.contextType;l=new r(s,typeof l=="object"&&l!==null?l._currentValue:a),dm(l,r,s,a),mm(e,n,l,r)}else{l=om(r,n.legacyContext),a=fm(e,n,r,s,l);var o=ho!==0;if(typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0)dm(a,r,s,l),mm(e,n,a,r);else if(o){s=n.treeContext,n.treeContext=vh(s,1,0);try{ht(e,n,a)}finally{n.treeContext=s}}else ht(e,n,a)}else if(typeof r=="string"){switch(a=n.blockedSegment,l=pI(a.chunks,r,s,e.responseState,a.formatContext),a.lastPushedText=!1,o=a.formatContext,a.formatContext=oI(o,r,s),bh(e,n,l),a.formatContext=o,r){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:a.chunks.push(fI,we(r),mI)}a.lastPushedText=!1}else{switch(r){case hE:case uE:case jv:case Cv:case wv:ht(e,n,s.children);return;case Lv:ht(e,n,s.children);return;case cE:throw Error(xe(343));case Nv:e:{r=n.blockedBoundary,a=n.blockedSegment,l=s.fallback,s=s.children,o=new Set;var i={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:o,errorDigest:null},c=fd(e,a.chunks.length,i,a.formatContext,!1,!1);a.children.push(c),a.lastPushedText=!1;var h=fd(e,0,null,a.formatContext,!1,!1);h.parentFlushed=!0,n.blockedBoundary=i,n.blockedSegment=h;try{if(bh(e,n,s),h.lastPushedText&&h.textEmbedded&&h.chunks.push(of),h.status=1,gd(i,h),i.pendingTasks===0)break e}catch(m){h.status=4,i.forceClientRender=!0,i.errorDigest=po(e,m)}finally{n.blockedBoundary=r,n.blockedSegment=a}n=pf(e,l,r,c,o,n.legacyContext,n.context,n.treeContext),e.pingedTasks.push(n)}return}if(typeof r=="object"&&r!==null)switch(r.$$typeof){case Tv:if(s=fm(e,n,r.render,s,a),ho!==0){r=n.treeContext,n.treeContext=vh(r,1,0);try{ht(e,n,s)}finally{n.treeContext=r}}else ht(e,n,s);return;case _v:r=r.type,s=gm(r,s),xh(e,n,r,s,a);return;case kv:if(a=s.children,r=r._context,s=s.value,l=r._currentValue,r._currentValue=s,o=Ts,Ts=s={parent:o,depth:o===null?0:o.depth+1,context:r,parentValue:l,value:s},n.context=s,ht(e,n,a),e=Ts,e===null)throw Error(xe(403));s=e.parentValue,e.context._currentValue=s===pE?e.context._defaultValue:s,e=Ts=e.parent,n.context=e;return;case Sv:s=s.children,s=s(r._currentValue),ht(e,n,s);return;case df:a=r._init,r=a(r._payload),s=gm(r,s),xh(e,n,r,s,void 0);return}throw Error(xe(130,r==null?r:typeof r,""))}}function ht(e,n,r){if(n.node=r,typeof r=="object"&&r!==null){switch(r.$$typeof){case dE:xh(e,n,r.type,r.props,r.ref);return;case yv:throw Error(xe(257));case df:var s=r._init;r=s(r._payload),ht(e,n,r);return}if(mh(r)){vm(e,n,r);return}if(r===null||typeof r!="object"?s=null:(s=lm&&r[lm]||r["@@iterator"],s=typeof s=="function"?s:null),s&&(s=s.call(r))){if(r=s.next(),!r.done){var a=[];do a.push(r.value),r=s.next();while(!r.done);vm(e,n,a)}return}throw e=Object.prototype.toString.call(r),Error(xe(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}typeof r=="string"?(s=n.blockedSegment,s.lastPushedText=J0(n.blockedSegment.chunks,r,e.responseState,s.lastPushedText)):typeof r=="number"&&(s=n.blockedSegment,s.lastPushedText=J0(n.blockedSegment.chunks,""+r,e.responseState,s.lastPushedText))}function vm(e,n,r){for(var s=r.length,a=0;a<s;a++){var l=n.treeContext;n.treeContext=vh(l,s,a);try{bh(e,n,r[a])}finally{n.treeContext=l}}}function bh(e,n,r){var s=n.blockedSegment.formatContext,a=n.legacyContext,l=n.context;try{return ht(e,n,r)}catch(c){if(hf(),typeof c=="object"&&c!==null&&typeof c.then=="function"){r=c;var o=n.blockedSegment,i=fd(e,o.chunks.length,null,o.formatContext,o.lastPushedText,!0);o.children.push(i),o.lastPushedText=!1,e=pf(e,n.node,n.blockedBoundary,i,n.abortSet,n.legacyContext,n.context,n.treeContext).ping,r.then(e,e),n.blockedSegment.formatContext=s,n.legacyContext=a,n.context=l,hd(l)}else throw n.blockedSegment.formatContext=s,n.legacyContext=a,n.context=l,hd(l),c}}function kE(e){var n=e.blockedBoundary;e=e.blockedSegment,e.status=3,Ov(this,n,e)}function Rv(e,n,r){var s=e.blockedBoundary;e.blockedSegment.status=3,s===null?(n.allPendingTasks--,n.status!==2&&(n.status=2,n.destination!==null&&n.destination.close())):(s.pendingTasks--,s.forceClientRender||(s.forceClientRender=!0,e=r===void 0?Error(xe(432)):r,s.errorDigest=n.onError(e),s.parentFlushed&&n.clientRenderedBoundaries.push(s)),s.fallbackAbortableTasks.forEach(function(a){return Rv(a,n,r)}),s.fallbackAbortableTasks.clear(),n.allPendingTasks--,n.allPendingTasks===0&&(s=n.onAllReady,s()))}function gd(e,n){if(n.chunks.length===0&&n.children.length===1&&n.children[0].boundary===null){var r=n.children[0];r.id=n.id,r.parentFlushed=!0,r.status===1&&gd(e,r)}else e.completedSegments.push(n)}function Ov(e,n,r){if(n===null){if(r.parentFlushed){if(e.completedRootSegment!==null)throw Error(xe(389));e.completedRootSegment=r}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=_l,n=e.onShellReady,n())}else n.pendingTasks--,n.forceClientRender||(n.pendingTasks===0?(r.parentFlushed&&r.status===1&&gd(n,r),n.parentFlushed&&e.completedBoundaries.push(n),n.fallbackAbortableTasks.forEach(kE,e),n.fallbackAbortableTasks.clear()):r.parentFlushed&&r.status===1&&(gd(n,r),n.completedSegments.length===1&&n.parentFlushed&&e.partialBoundaries.push(n)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function Fv(e){if(e.status!==2){var n=Ts,r=tu.current;tu.current=pm;var s=Pi;Pi=e.responseState;try{var a=e.pingedTasks,l;for(l=0;l<a.length;l++){var o=a[l],i=e,c=o.blockedSegment;if(c.status===0){hd(o.context);try{ht(i,o,o.node),c.lastPushedText&&c.textEmbedded&&c.chunks.push(of),o.abortSet.delete(o),c.status=1,Ov(i,o.blockedBoundary,c)}catch(_){if(hf(),typeof _=="object"&&_!==null&&typeof _.then=="function"){var h=o.ping;_.then(h,h)}else{o.abortSet.delete(o),c.status=4;var m=o.blockedBoundary,x=_,w=po(i,x);if(m===null?md(i,x):(m.pendingTasks--,m.forceClientRender||(m.forceClientRender=!0,m.errorDigest=w,m.parentFlushed&&i.clientRenderedBoundaries.push(m))),i.allPendingTasks--,i.allPendingTasks===0){var $=i.onAllReady;$()}}}finally{}}}a.splice(0,l),e.destination!==null&&ff(e,e.destination)}catch(_){po(e,_),md(e,_)}finally{Pi=s,tu.current=r,r===pm&&hd(n)}}}function ci(e,n,r){switch(r.parentFlushed=!0,r.status){case 0:var s=r.id=e.nextSegmentId++;return r.lastPushedText=!1,r.textEmbedded=!1,e=e.responseState,te(n,gI),te(n,e.placeholderPrefix),e=we(s.toString(16)),te(n,e),Ke(n,vI);case 1:r.status=2;var a=!0;s=r.chunks;var l=0;r=r.children;for(var o=0;o<r.length;o++){for(a=r[o];l<a.index;l++)te(n,s[l]);a=Ud(e,n,a)}for(;l<s.length-1;l++)te(n,s[l]);return l<s.length&&(a=Ke(n,s[l])),a;default:throw Error(xe(390))}}function Ud(e,n,r){var s=r.boundary;if(s===null)return ci(e,n,r);if(s.parentFlushed=!0,s.forceClientRender)s=s.errorDigest,Ke(n,wI),te(n,CI),s&&(te(n,SI),te(n,we($n(s))),te(n,kI)),Ke(n,TI),ci(e,n,r);else if(0<s.pendingTasks){s.rootSegmentID=e.nextSegmentId++,0<s.completedSegments.length&&e.partialBoundaries.push(s);var a=e.responseState,l=a.nextSuspenseID++;a=Q(a.boundaryPrefix+l.toString(16)),s=s.id=a,am(n,e.responseState,s),ci(e,n,r)}else if(s.byteSize>e.progressiveChunkSize)s.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(s),am(n,e.responseState,s.id),ci(e,n,r);else{if(Ke(n,xI),r=s.completedSegments,r.length!==1)throw Error(xe(391));Ud(e,n,r[0])}return Ke(n,jI)}function xm(e,n,r){return ZI(n,e.responseState,r.formatContext,r.id),Ud(e,n,r),qI(n,r.formatContext)}function bm(e,n,r){for(var s=r.completedSegments,a=0;a<s.length;a++)Bv(e,n,r,s[a]);if(s.length=0,e=e.responseState,s=r.id,r=r.rootSegmentID,te(n,e.startInlineScript),e.sentCompleteBoundaryFunction?te(n,nE):(e.sentCompleteBoundaryFunction=!0,te(n,eE)),s===null)throw Error(xe(395));return r=we(r.toString(16)),te(n,s),te(n,tE),te(n,e.segmentPrefix),te(n,r),Ke(n,rE)}function Bv(e,n,r,s){if(s.status===2)return!0;var a=s.id;if(a===-1){if((s.id=r.rootSegmentID)===-1)throw Error(xe(392));return xm(e,n,s)}return xm(e,n,s),e=e.responseState,te(n,e.startInlineScript),e.sentCompleteSegmentFunction?te(n,QI):(e.sentCompleteSegmentFunction=!0,te(n,KI)),te(n,e.segmentPrefix),a=we(a.toString(16)),te(n,a),te(n,XI),te(n,e.placeholderPrefix),te(n,a),Ke(n,JI)}function ff(e,n){ct=new Uint8Array(512),ut=0;try{var r=e.completedRootSegment;if(r!==null&&e.pendingRootTasks===0){Ud(e,n,r),e.completedRootSegment=null;var s=e.responseState.bootstrapChunks;for(r=0;r<s.length-1;r++)te(n,s[r]);r<s.length&&Ke(n,s[r])}var a=e.clientRenderedBoundaries,l;for(l=0;l<a.length;l++){var o=a[l];s=n;var i=e.responseState,c=o.id,h=o.errorDigest,m=o.errorMessage,x=o.errorComponentStack;if(te(s,i.startInlineScript),i.sentClientRenderFunction?te(s,aE):(i.sentClientRenderFunction=!0,te(s,sE)),c===null)throw Error(xe(395));te(s,c),te(s,lE),(h||m||x)&&(te(s,eu),te(s,we(nu(h||"")))),(m||x)&&(te(s,eu),te(s,we(nu(m||"")))),x&&(te(s,eu),te(s,we(nu(x)))),Ke(s,oE)}a.splice(0,l);var w=e.completedBoundaries;for(l=0;l<w.length;l++)bm(e,n,w[l]);w.splice(0,l),q0(n),ct=new Uint8Array(512),ut=0;var $=e.partialBoundaries;for(l=0;l<$.length;l++){var _=$[l];e:{a=e,o=n;var C=_.completedSegments;for(i=0;i<C.length;i++)if(!Bv(a,o,_,C[i])){i++,C.splice(0,i);var E=!1;break e}C.splice(0,i),E=!0}if(!E){e.destination=null,l++,$.splice(0,l);return}}$.splice(0,l);var b=e.completedBoundaries;for(l=0;l<b.length;l++)bm(e,n,b[l]);b.splice(0,l)}finally{q0(n),e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&n.close()}}function ym(e,n){try{var r=e.abortableTasks;r.forEach(function(s){return Rv(s,e,n)}),r.clear(),e.destination!==null&&ff(e,e.destination)}catch(s){po(e,s),md(e,s)}}sf.renderToReadableStream=function(e,n){return new Promise(function(r,s){var a,l,o=new Promise(function(m,x){l=m,a=x}),i=CE(e,aI(n?n.identifierPrefix:void 0,n?n.nonce:void 0,n?n.bootstrapScriptContent:void 0,n?n.bootstrapScripts:void 0,n?n.bootstrapModules:void 0),lI(n?n.namespaceURI:void 0),n?n.progressiveChunkSize:void 0,n?n.onError:void 0,l,function(){var m=new ReadableStream({type:"bytes",pull:function(x){if(i.status===1)i.status=2,vv(x,i.fatalError);else if(i.status!==2&&i.destination===null){i.destination=x;try{ff(i,x)}catch(w){po(i,w),md(i,w)}}},cancel:function(){ym(i)}},{highWaterMark:0});m.allReady=o,r(m)},function(m){o.catch(function(){}),s(m)},a);if(n&&n.signal){var c=n.signal,h=function(){ym(i,c.reason),c.removeEventListener("abort",h)};c.addEventListener("abort",h)}Fv(i)})};sf.version="18.2.0";var Va,Dv;Va=Ga,Dv=sf;Va.version;var SE=Va.renderToString;Va.renderToStaticMarkup;Va.renderToNodeStream;Va.renderToStaticNodeStream;Dv.renderToReadableStream;var zv={exports:{}},TE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",NE=TE,LE=NE;function Wv(){}function Hv(){}Hv.resetWarningCache=Wv;var _E=function(){function e(s,a,l,o,i,c){if(c!==LE){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function n(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:Hv,resetWarningCache:Wv};return r.PropTypes=r,r};zv.exports=_E();var $E=zv.exports;const Rt=Kt($E);var IE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Uv(e,n){return e(n={exports:{}},n.exports),n.exports}var EE=Uv(function(e){(function(n){var r=function(E,b,f){if(!c(b)||m(b)||x(b)||w(b)||i(b))return b;var v,g=0,N=0;if(h(b))for(v=[],N=b.length;g<N;g++)v.push(r(E,b[g],f));else for(var k in v={},b)Object.prototype.hasOwnProperty.call(b,k)&&(v[E(k,f)]=r(E,b[k],f));return v},s=function(E){return $(E)?E:(E=E.replace(/[\-_\s]+(.)?/g,function(b,f){return f?f.toUpperCase():""})).substr(0,1).toLowerCase()+E.substr(1)},a=function(E){var b=s(E);return b.substr(0,1).toUpperCase()+b.substr(1)},l=function(E,b){return function(f,v){var g=(v=v||{}).separator||"_",N=v.split||/(?=[A-Z])/;return f.split(N).join(g)}(E,b).toLowerCase()},o=Object.prototype.toString,i=function(E){return typeof E=="function"},c=function(E){return E===Object(E)},h=function(E){return o.call(E)=="[object Array]"},m=function(E){return o.call(E)=="[object Date]"},x=function(E){return o.call(E)=="[object RegExp]"},w=function(E){return o.call(E)=="[object Boolean]"},$=function(E){return(E-=0)==E},_=function(E,b){var f=b&&"process"in b?b.process:b;return typeof f!="function"?E:function(v,g){return f(v,E,g)}},C={camelize:s,decamelize:l,pascalize:a,depascalize:l,camelizeKeys:function(E,b){return r(_(s,b),E)},decamelizeKeys:function(E,b){return r(_(l,b),E,b)},pascalizeKeys:function(E,b){return r(_(a,b),E)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=C:n.humps=C})(IE)}).decamelize,ME=function(e){if(Array.isArray(e))return e},AE=function(e,n){if(typeof Symbol<"u"&&Symbol.iterator in Object(e)){var r=[],s=!0,a=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(s=(o=i.next()).done)&&(r.push(o.value),!n||r.length!==n);s=!0);}catch(c){a=!0,l=c}finally{try{s||i.return==null||i.return()}finally{if(a)throw l}}return r}},wm=function(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,s=new Array(n);r<n;r++)s[r]=e[r];return s},PE=function(e,n){if(e){if(typeof e=="string")return wm(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?wm(e,n):void 0}},RE=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},OE=function(e,n){return ME(e)||AE(e,n)||PE(e,n)||RE()},Gv=Uv(function(e){function n(){return e.exports=n=Object.assign||function(r){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(r[l]=a[l])}return r},n.apply(this,arguments)}e.exports=n}),FE=function(e,n){if(e==null)return{};var r,s,a={},l=Object.keys(e);for(s=0;s<l.length;s++)r=l[s],n.indexOf(r)>=0||(a[r]=e[r]);return a},Vv=function(e,n){if(e==null)return{};var r,s,a=FE(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)r=l[s],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a},BE=F.createContext(null);function yh(e){var n=e.children,r=Vv(e,["children"]);return typeof n!="string"&&(n=SE(n)),cn.createElement("template",Gv({},r,{dangerouslySetInnerHTML:{__html:n}}))}function wh(e){var n=e.root,r=e.children;return D3.createPortal(r,n)}function DE(e){var n=F.forwardRef(function(r,s){var a,l,o=r.mode,i=r.delegatesFocus,c=r.styleSheets,h=r.ssr,m=r.children,x=Vv(r,["mode","delegatesFocus","styleSheets","ssr","children"]),w=(l=F.useRef((a=s)&&a.current),F.useEffect(function(){a&&(a.current=l.current)},[a]),l),$=F.useState(null),_=OE($,2),C=_[0],E=_[1],b="node_".concat(o).concat(i);return F.useLayoutEffect(function(){if(w.current)try{if(typeof s=="function"&&s(w.current),h){var f=w.current.shadowRoot;return void E(f)}var v=w.current.attachShadow({mode:o,delegatesFocus:i});c.length>0&&(v.adoptedStyleSheets=c),E(v)}catch(g){(function(N){var k=N.error,A=N.styleSheets,R=N.root;switch(k.name){case"NotSupportedError":A.length>0&&(R.adoptedStyleSheets=A);break;default:throw k}})({error:g,styleSheets:c,root:C})}},[s,w,c]),cn.createElement(cn.Fragment,null,cn.createElement(e.tag,Gv({key:b,ref:w},x),(C||h)&&cn.createElement(BE.Provider,{value:C},h?cn.createElement(yh,{shadowroot:"open"},e.render({root:C,ssr:h,children:m})):cn.createElement(wh,{root:C},e.render({root:C,ssr:h,children:m})))))});return n.propTypes={mode:Rt.oneOf(["open","closed"]),delegatesFocus:Rt.bool,styleSheets:Rt.arrayOf(Rt.instanceOf(globalThis.CSSStyleSheet)),ssr:Rt.bool,children:Rt.node},n.defaultProps={mode:"open",delegatesFocus:!1,styleSheets:[],ssr:!1,children:null},n}yh.propTypes={children:Rt.oneOfType([Rt.string,Rt.node])},yh.defaultProps={children:""},wh.propTypes={root:Rt.object.isRequired,children:Rt.node},wh.defaultProps={children:null};var ru=new Map;function zE(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"core",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(s){return s.children};return new Proxy(e,{get:function(s,a){var l=EE(a,{separator:"-"}),o="".concat(n,"-").concat(l);return ru.has(o)||ru.set(o,DE({tag:l,render:r})),ru.get(o)}})}var WE=zE();const HE=()=>t.jsxs("div",{className:"prose",children:[t.jsx("h1",{children:"Forms"}),t.jsxs("blockquote",{className:"intro",children:["There is something about styling forms, that's so not fun. It's like ",t.jsx("em",{children:'"How much less fun could this be?"'})," ","and the answer is ",t.jsx("em",{children:'"None, none... less fun."'}),t.jsx("div",{className:"attrib",children:"Nigel Tufnel's website designer"})]}),t.jsx("h2",{children:"None Less Fun"}),t.jsxs(re,{children:[t.jsxs("div",{children:[t.jsx("p",{children:"Anyone reading this who is old enough to have served in the browser wars will no doubt be rolling their eyes at this point, thinking that kids these days don't know how lucky they are."}),t.jsxs("p",{children:["It's certainly true that things are ",t.jsx("i",{children:"much"})," better than they used.  But despite all the advances in CSS support and cross-browser compatibility, the default styling for HTML forms still looks like 1995 called and asked for its website back."]})]}),t.jsxs("div",{children:[t.jsx("p",{children:"Badger CSS includes form styling presets, supporting both light and dark themes out of the box. It uses native form components for accessibility and mobile friendliness.  Everything is configurable if you want to change things, but you don't have to."}),t.jsx("p",{children:"Here's the same form rendered twice.  Once with the default HTML styling and again with the default Badger CSS styles.  In case you're wondering, there's no Javascript in any of these forms.  It's all just vanilla HTML and CSS."})]})]}),t.jsxs("div",{className:"grid-2 gap-8 mar-t-10 stack-desktop",children:[t.jsxs("div",{className:"output",children:[t.jsx("h3",{className:"mar-v",children:"Default HTML Form Styles"}),t.jsx("h4",{className:"mar-t mar-b-8",children:"Would you been seen holding this?"}),t.jsx(WE.div,{children:t.jsx("div",{dangerouslySetInnerHTML:{__html:L0}})})]}),t.jsxs("div",{className:"output",children:[t.jsx("h3",{className:"mar-v",children:"Badger CSS Form Styles"}),t.jsx("h4",{className:"mar-t mar-b-8",children:"Beautiful plumage!"}),t.jsx("div",{dangerouslySetInnerHTML:{__html:L0}})]})]}),t.jsx("h2",{className:"mar-t-8",children:"Adaptive Sizes"}),t.jsxs(re,{children:[t.jsxs("p",{children:["All form components are sized using ems and will adapt to whatever the current text size is.  If you want a small form, for example, then you just need to add a ",t.jsx("code",{children:"small"})," class to the form or one of its parent containers."]}),t.jsx(Zr,{title:"Try it out",className:"mar-t-4",children:"Try selecting different sizes from the options below and see how the form inputs scale."})]}),t.jsx(f$,{}),t.jsx("h2",{children:"Accessibility and Focus"}),t.jsxs(re,{children:[t.jsxs("div",{children:[t.jsx("p",{children:"If you've played with any of the forms above you may have noticed the prominent ring around inputs when focussed.  This is important for accessibility to clearly indicate which field is selected."}),t.jsxs("p",{children:["For buttons, checkboxes and radio buttons we use the ",t.jsx("code",{children:":focus-visible"})," selector instead of ",t.jsx("code",{children:":focus"}),".  This will add the focus ring when the element is navigated to using the keyboard (e.g. by pressing the TAB key) but not when the element is directly clicked on.  After all, if you've just clicked on an element then it's usually safe to assume you know that it has the focus."]})]}),t.jsx("div",{children:t.jsxs("p",{children:["By default the focus ring is displayed outside the input or button. You can add the ",t.jsx("code",{children:'data-badger-focus="inset"'})," attribute to a container element to switch the focus ring to be inset for any inputs or buttons contained within it."]})})]}),t.jsx(S,{html:u$,language:"html"}),t.jsxs("p",{children:["If for some reason you really, really need to disabled it because you're indicating the focus some other way then you can add the"," ",t.jsx("code",{children:"no-focus"})," class to the inputs."]}),t.jsx(S,{html:c$,language:"html"}),t.jsx("h2",{children:"Themes and Surfaces"}),t.jsxs(re,{children:[t.jsx("p",{children:"Styling forms is made that much harder these days by the need to support both light and dark themes.  On top of that we might want to have forms included on different surfaces with varying levels of background intensity. Thanks to the magic of CSS custom properties we can tweak the colors used to render forms depending on the background color of the container."}),t.jsx("p",{children:"In these examples below it may not be immediately obvious that the colors are slightly different but they are.  They're different so that they look more-or-less the same, while providing adequate contrast."})]}),t.jsx("div",{className:"grid-3 gap-4 stack-widescreen mar-b-8",children:["surface","surface-1","surface-2","surface-3","surface-4","surface-5"].map(e=>t.jsxs("div",{className:`${e} pad-6 border shadow-2`,children:[t.jsx("h3",{className:"font-mono mar-b-3",children:e}),t.jsx("div",{dangerouslySetInnerHTML:{__html:d$}})]},e))})]}),UE=Object.freeze(Object.defineProperty({__proto__:null,default:HE},Symbol.toStringTag,{value:"Module"})),GE=`<div class="input">
  Ceci n'est pas une entrée
</div>
`,VE=`<div class="input inline">
  Ceci n'est pas une entrée
</div>
`,YE=`<div class="input no-hover">
  Ceci n'est pas une entrée
</div>
`,ZE=`<div class="grid-2 gap-4">
  <div class="input">
    Ceci n'est pas une entrée
  </div>
  <div class="input">
    Ceci n'est pas une entrée
  </div>
</div>

<div class="flex gap-4 mar-t-4">
  <div class="input">
    Ceci n'est pas une entrée
  </div>
  <div class="input">
    Ceci n'est pas une entrée
  </div>
</div>
`,qE=`<div class="input" disabled>
  Ceci n'est pas une entrée
</div>

<div class="input disabled mar-t-4">
  Ceci n'est pas une entrée
</div>
`,KE=()=>t.jsxs("div",{className:"prose",children:[t.jsx("h1",{children:"Fake Input"}),t.jsxs("p",{children:["If you want something that isn't an input to look like an input then you can add the ",t.jsx("code",{children:"input"})," CSS class."]}),t.jsx(S,{html:GE,language:"html",caption:"Inline Text Input"}),t.jsx("h2",{children:"Inline Input"}),t.jsxs("p",{children:["Just like regular inputs, they are full-width by default. Add the ",t.jsx("code",{children:"inline"})," class to give it a fluid width."]}),t.jsx(S,{html:VE,language:"html",caption:"Inline Text Input"}),t.jsx("h2",{children:"No Hover"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"no-hover"})," class if you don't want it to change appearance on hover."]}),t.jsx(S,{html:YE,language:"html",caption:"No Hover"}),t.jsx("h2",{children:"Grid and Flex Layout"}),t.jsxs("p",{children:["You can also use the ",t.jsx(ns,{})," and ",t.jsx(yr,{})," classes to control layout."]}),t.jsx(S,{html:ZE,language:"html",caption:"Grid and Flex"}),t.jsx("h2",{children:"Disabled Inputs"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"disabled"})," attribute or CSS class if you want it to look disabled."]}),t.jsx(S,{html:qE,language:"html",caption:"Not an Input"})]}),QE=Object.freeze(Object.defineProperty({__proto__:null,default:KE},Symbol.toStringTag,{value:"Module"})),XE=`<style>
  input.cc {
    font-family: var(--font-mono);
    width: 3.5em;
    appearance: none;
  }
  input.cc::-webkit-outer-spin-button,
  input.cc::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
<div class="inputs inline">
  <div class="prefix">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      class="icon"
    >
      <path
        d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"
        fill="currentColor"
      />
    </svg>
  </div>
  <input
    name="cc1" type="number" size="4"
    placeholder="0000"
    class="inline cc"
  />
  <input
    name="cc2" type="number" size="4"
    placeholder="0000"
    class="inline cc"
  />
  <input
    name="cc3" type="number" size="4"
    placeholder="0000"
    class="inline cc"
  />
  <input
    name="cc4" type="number" size="4"
    placeholder="0000"
    class="inline cc"
  />
</div>`,JE=`<style>
  input.n {
    appearance: none;
  }
  input.year {
    width: 3.5em;
  }
  input.month {
    /* width: 6em; */
  }
  input.day {
    width: 3em;
  }
  input.n::-webkit-outer-spin-button,
  input.n::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
<div class="inputs inline">
  <div class="prefix shaded lined">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      class="icon"
    >
      <path
        d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"
        fill="currentColor"
      />
    </svg>
  </div>
  <input
    name="day" type="number" size="2"
    placeholder="Day"
    class="day n inline"
    required
  />
  <select
    name="month"
    placeholder="Month"
    class="month inline n"
    required
  >
    <option value="" hidden disabled selected>Month</option>
    <option value="01">January</option>
    <option value="02">February</option>
    <option value="03">March</option>
    <option value="04">April</option>
    <option value="05">May</option>
    <option value="06">June</option>
    <option value="07">July</option>
    <option value="08">August</option>
    <option value="09">September</option>
    <option value="10">October</option>
    <option value="11">November</option>
    <option value="12">December</option>
  </select>
  <input
    name="year" type="number" size="4"
    placeholder="Year"
    class="year n inline"
    required
  />
</div>`,eM=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Multiple Input"}),t.jsx("p",{children:"Sometimes you need to create a form component that looks like a single input but is comprised of multiple inputs or other elements."}),t.jsxs("p",{children:["In this case you can wrap them up in a container with the ",t.jsx("code",{children:"inputs"})," class.  See the"," ",t.jsx(dr,{to:"/forms/prefix-suffix",text:"Prefix and Suffix"})," page for details on adding the prefix icon."]}),t.jsx("h2",{children:"Credit Card Number"}),t.jsx("p",{children:"In this example we create an input for a credit card number. This demo doesn't have any interactive functionality and leaves a lot to be desired in terms of user experience.  For example, you can enter more than 4 numbers in each section, the focus doesn't automatically switch from one block to the next, and so on. But this is only supposed to be a demonstration of the styling, not the functionality."}),t.jsx("p",{children:"Making it work properly is left as an exercise for the reader."}),t.jsx(S,{html:XE,language:"html",caption:"Credit Card"}),t.jsx("h2",{children:"Date"}),t.jsx("p",{children:"This is also a less-than-perfect implementation in terms of functionality, but it demonstrates the form."}),t.jsx(S,{html:JE,language:"html",caption:"Date"})]}),nM=Object.freeze(Object.defineProperty({__proto__:null,default:eM},Symbol.toStringTag,{value:"Module"})),tM=`<div class="field">
  <label>Inline text input</label>
  <div class="inputs">
    <div class="prefix">
      £
    </div>
    <input type="text" class="inline">
    <div class="suffix">
      .00
    </div>
  </div>
</div>

<div class="field">
  <label>Wide text input</label>
  <div class="inputs">
    <div class="prefix">
      £
    </div>
    <input type="text">
    <div class="suffix">
      .00
    </div>
  </div>
</div>

<div class="grid-2 gap-4">
  <div class="valid field">
    <label>Valid field</label>
    <div class="inputs">
      <div class="prefix">
        £
      </div>
      <input type="text">
      <div class="suffix">
        .00
      </div>
    </div>
  </div>
  <div class="invalid field">
    <label>Invalid field</label>
    <div class="inputs">
      <div class="prefix">
        £
      </div>
      <input type="text">
      <div class="suffix">
        .00
      </div>
    </div>
  </div>
</div>
`,rM=`<div class="grid-3 gap-4 stack-tablet">
  <div class="field">
    <label>Shaded</label>
    <div class="inputs">
      <div class="shaded prefix">
        £
      </div>
      <input type="text">
      <div class="shaded suffix">
        .00
      </div>
    </div>
  </div>
  <div class="field valid">
    <label>Valid</label>
    <div class="inputs">
      <div class="shaded prefix">
        £
      </div>
      <input type="text">
      <div class="shaded suffix">
        .00
      </div>
    </div>
  </div>
  <div class="field invalid">
    <label>Invalid</label>
    <div class="inputs">
      <div class="shaded prefix">
        £
      </div>
      <input type="text">
      <div class="shaded suffix">
        .00
      </div>
    </div>
  </div>
</div>

`,sM=`<div class="grid-3 gap-4 stack-tablet">
  <div class="field">
    <label>Lined</label>
    <div class="inputs">
      <div class="lined prefix">
        £
      </div>
      <input type="text">
      <div class="lined suffix">
        .00
      </div>
    </div>
  </div>
  <div class="field valid">
    <label>Valid</label>
    <div class="inputs">
      <div class="lined prefix">
        £
      </div>
      <input type="text">
      <div class="lined suffix">
        .00
      </div>
    </div>
  </div>
  <div class="field invalid">
    <label>Invalid</label>
    <div class="inputs">
      <div class="lined prefix">
        £
      </div>
      <input type="text">
      <div class="lined suffix">
        .00
      </div>
    </div>
  </div>
</div>

`,aM=`<div class="grid-3 gap-4 stack-tablet">
  <div class="field">
    <label>Shaded and lined</label>
    <div class="inputs">
      <div class="shaded lined prefix">
        £
      </div>
      <input type="text">
      <div class="shaded lined suffix">
        .00
      </div>
    </div>
  </div>
  <div class="field valid">
    <label>valid</label>
    <div class="inputs">
      <div class="shaded lined prefix">
        £
      </div>
      <input type="text">
      <div class="shaded lined suffix">
        .00
      </div>
    </div>
  </div>
  <div class="field invalid">
    <label>valid</label>
    <div class="inputs">
      <div class="shaded lined prefix">
        £
      </div>
      <input type="text">
      <div class="shaded lined suffix">
        .00
      </div>
    </div>
  </div>
</div>

`,lM=`<div class="field">
  <label>Text input</label>
  <div class="inputs">
    <div class="prefix shaded lined">
      £
    </div>
    <input type="text"/>
  </div>
</div>

<div class="field">
  <label>Inline text input</label>
  <div class="inputs">
    <div class="prefix shaded lined">
      £
    </div>
    <input type="text" class="inline">
  </div>
</div>
`,oM=`<div class="field">
  <label>Text area input</label>
  <div class="inputs">
    <div class="prefix shaded lined">
      £
    </div>
    <textarea>Go one louder</textarea>
  </div>
</div>

<div class="field">
  <label>Inline text area input</label>
  <div class="inputs">
    <div class="prefix shaded lined">
      £
    </div>
    <textarea class="inline">Go one louder</textarea>
  </div>
</div>
`,iM=`<div class="field">
  <label>Select input</label>
  <div class="inputs">
    <div class="prefix shaded lined">
      £
    </div>
    <select>
      <option value="10">Ten</option>
      <option value="11">Eleven</option>
    </select>
  </div>
</div>

<div class="field">
  <label>Inline select input</label>
  <div class="inputs">
    <div class="prefix shaded lined">
      £
    </div>
    <select class="inline">
      <option value="10">Ten</option>
      <option value="11">Eleven</option>
    </select>
  </div>
</div>

`,dM=`<div class="field">
  <label>Bordered checkbox</label>
  <div class="inputs">
    <div class="prefix shaded lined">
      £
    </div>
    <label class="border">
      <input type="checkbox">
      Eleven
    </label>
  </div>
</div>

<div class="field">
  <label>Inline bordered checkbox</label>
  <div class="inputs">
    <div class="prefix shaded lined">
      £
    </div>
    <label class="border inline">
      <input type="checkbox">
      Eleven
    </label>
  </div>
</div>

`,cM=`<div class="field">
  <label>Fake Input</label>
  <div class="inputs">
    <div class="prefix shaded lined">
      £
    </div>
    <div class="input" tabIndex="0">
      Fake Input
    </div>
  </div>
</div>
`,uM=`<div class="field">
  <label>Text input</label>
  <div class="inputs">
    <input type="text"/>
    <div class="suffix shaded lined">
      %
    </div>
  </div>
</div>

<div class="field">
  <label>Inline text input</label>
  <div class="inputs">
    <input type="text" class="inline"/>
    <div class="suffix shaded lined">
      %
    </div>
  </div>
</div>
`,hM=`<div class="field">
  <label>Text area input</label>
  <div class="inputs">
    <textarea>
    </textarea>
    <div class="suffix shaded lined">
      %
    </div>
  </div>
</div>

<div class="field">
  <label>Inline text area input</label>
  <div class="inputs">
    <textarea class="inline">
    </textarea>
    <div class="suffix shaded lined">
      %
    </div>
  </div>
</div>
`,pM=`<div class="field">
  <label>Select input</label>
  <div class="inputs">
    <select>
      <option value="10">Ten</option>
      <option value="11">Eleven</option>
    </select>
    <div class="suffix shaded lined">
      £
    </div>
  </div>
</div>

<div class="field">
  <label>Inline select input</label>
  <div class="inputs">
    <select class="inline">
      <option value="10">Ten</option>
      <option value="11">Eleven</option>
    </select>
    <div class="suffix shaded lined">
      £
    </div>
  </div>
</div>
`,fM=`<div class="field">
  <label>Bordered checkboxes</label>
  <div class="inputs">
    <label class="border">
      <input type="checkbox">
      Eleven
    </label>
    <div class="suffix shaded lined">
      %
    </div>
  </div>
</div>

<div class="field">
  <label>Inline bordered checkboxes</label>
  <div class="inputs">
    <label class="border inline">
      <input type="checkbox">
      Eleven
    </label>
    <div class="suffix shaded lined">
      %
    </div>
  </div>
</div>
`,mM=()=>t.jsxs("div",{className:"prose",children:[t.jsx("h1",{children:"Prefix and Suffix"}),t.jsxs("p",{children:["You can add prefixes and suffixes to form fields, or any combination of ",t.jsx(dr,{to:"/forms/multi-inputs",text:"inputs"}),". Not only do the colours and focus rings work correctly, but they also adapt their colors for ",t.jsx("code",{children:"valid"})," and ",t.jsx("code",{children:"invalid"})," fields."]}),t.jsx(S,{html:tM,language:"html",caption:"Prefix and Suffix"}),t.jsx("h2",{children:"Shaded"}),t.jsxs("p",{children:["To visually distinguish a prefix or suffix you you can add the ",t.jsx("code",{children:"shaded"})," class..."]}),t.jsx(S,{html:rM,language:"html",caption:"Shaded"}),t.jsx("h2",{children:"Lined"}),t.jsxs("p",{children:["...or the ",t.jsx("code",{children:"lined"})," class."]}),t.jsx(S,{html:sM,language:"html",caption:"Lined"}),t.jsx("h2",{children:"Shaded and Lined"}),t.jsx("p",{children:"...or both."}),t.jsx(S,{html:aM,language:"html",caption:"Shaded and Lined"}),t.jsx("h2",{children:"Input Prefix"}),t.jsxs("p",{children:["If you want to add a prefix to a field you should enclose the input in an element with the ",t.jsx("code",{children:"inputs"})," class and add the"," ",t.jsx("code",{children:"prefix"})," class to the prefix element.  You can add a prefix to a text input, textarea, select or a checkbox or radio option with the ",t.jsx("code",{children:"border"})," class set.  You can try it without the "," ",t.jsx("code",{children:"border"})," but the effect is lost somewhat."]}),t.jsx("h3",{children:"Text Input With Prefix"}),t.jsx(S,{html:lM,language:"html",caption:"Text Prefix"}),t.jsx("h3",{children:"Text Area Input With Prefix"}),t.jsx(S,{html:oM,language:"html",caption:"Text Area Prefix"}),t.jsx("h3",{children:"Select Input With Prefix"}),t.jsx(S,{html:iM,language:"html",caption:"Select Prefix"}),t.jsx("h3",{children:"Checkbox With Prefix"}),t.jsxs("p",{children:["This only really works with checkboxes that have the"," ",t.jsx("code",{children:"border"})," class"]}),t.jsx(S,{html:dM,language:"html",caption:"Checkbox Prefix"}),t.jsx("h3",{children:"Fake Input"}),t.jsxs("p",{children:["Instead of an input you can add the ",t.jsx("code",{children:"input"})," CSS class to any element."]}),t.jsx(S,{html:cM,language:"html",caption:"Fake Input Prefix"}),t.jsx("h2",{children:"Input Suffix"}),t.jsxs("p",{children:["Adding an input suffix is just the same, except for giving your suffix element the ",t.jsx("code",{children:"suffix"})," class and putting it after the input."]}),t.jsx("h3",{children:"Text Input With Suffix"}),t.jsx(S,{html:uM,language:"html",caption:"Text Suffix"}),t.jsx("h3",{children:"Text Area Input With Suffix"}),t.jsx(S,{html:hM,language:"html",caption:"Text Area Suffix"}),t.jsx("h3",{children:"Select Input With Suffix"}),t.jsx(S,{html:pM,language:"html",caption:"Select Suffix"}),t.jsx("h3",{children:"Checkbox With Suffix"}),t.jsxs("p",{children:["This only really works with checkboxes that have the"," ",t.jsx("code",{children:"border"})," class"]}),t.jsx(S,{html:fM,language:"html",caption:"Checkbox Suffix"})]}),gM=Object.freeze(Object.defineProperty({__proto__:null,default:mM},Symbol.toStringTag,{value:"Module"})),vM=`<label>
  <input type="radio" name="one">
  Option 1a
</label>
<label>
  <input type="radio" name="one">
  Option 1b
</label>
<label class="radio disabled">
  <input type="radio" name="one">
  Disabled Option
</label>
`,xM=`<label class="inline radio">
  <input type="radio" name="two">
  Option 2a
</label>
<label class="inline radio">
  <input type="radio" name="two">
  Option 2b
</label>
<label class="inline radio">
  <input type="radio" name="two">
  Option 2c
</label>
`,bM=`<label class="inline border">
  <input type="radio" name="one">
  Inline 1
</label>
<label class="inline border mar-l-2">
  <input type="radio" name="one">
  Inline 2
</label>

<label class="border mar-t-8">
  <input type="radio" name="two">
  Wide 1
</label>
<label class="border mar-t-2">
  <input type="radio" name="two">
  Wide 2
</label>

<div class="grid-3 gap-2 mar-t-8">
  <label class="border">
    <input type="radio" name="three">
    Grid 1
  </label>
  <label class="border">
    <input type="radio" name="three">
    Grid 2
  </label>
  <label class="border">
    <input type="radio" name="three" disabled>
    Disabled
  </label>
</div>
`,yM=`<div>
  <style>
    .shaded.radio {
      color:            var(--color-40);
      background-color: var(--color-95);
      border-color:     var(--color-70);
      accent-color:     var(--color-40);
      margin-bottom:    0.5em;
    }
    .shaded.radio:hover {
      color:            var(--color-0);
      background-color: var(--color-90);
      border-color:     var(--color-60);
    }
    [data-theme=dark] .shaded.radio {
      color:            var(--color-80);
      background-color: var(--color-15);
      border-color:     var(--color-30);
      accent-color:     var(--color-70);
    }
    [data-theme=dark] .shaded.radio:hover {
      color:            var(--color-100);
      background-color: var(--color-20);
      border-color:     var(--color-40);
    }
  </style>
  <label class="red shaded wide radio">
    <input type="radio" name="color">
    Red
  </label>
  <label class="orange shaded wide radio">
    <input type="radio" name="color">
    Orange
  </label>
  <label class="yellow shaded wide radio">
    <input type="radio" name="color">
    Yellow
  </label>
  <label class="green shaded wide radio">
    <input type="radio" name="color">
    Green
  </label>
  <label class="blue shaded wide radio">
    <input type="radio" name="color">
    Blue
  </label>
</div>`,wM=()=>t.jsxs("div",{className:"prose",children:[t.jsx("h1",{children:"Radio Buttons"}),t.jsx("h2",{children:"Radio Class"}),t.jsxs("p",{children:["Radio buttons are implemented much like"," ",t.jsx(QS,{text:"checkboxes"}),".  Create a"," ",t.jsx("code",{children:"label"})," enclosing an ",t.jsx("code",{children:"input"})," with the"," ",t.jsx("code",{children:'type="radio"'})," attribute."]}),t.jsxs("p",{children:["Badger-CSS identifies labels that include a radio button input using the ",t.jsx("code",{children:":has()"})," CSS selector. All the major browsers currently support it, although Firefox was a bit late to the party, only adding support in v121 released on 19th December 2023."]}),t.jsxs("p",{children:["As a work-around to support older versions of Firefox, you can add the ",t.jsx("code",{children:"radio"})," class to the ",t.jsx("code",{children:"label"}),"."]}),t.jsx(S,{html:vM,language:"html",caption:"Radio Buttons"}),t.jsx("h2",{children:"Inline Radio Buttons"}),t.jsxs("p",{children:["Radio buttons are full-width by default. Add the ",t.jsx("code",{children:"inline"})," class to give them a fluid width."]}),t.jsx(S,{html:xM,language:"html",caption:"Inline Radio Buttons"}),t.jsx("h2",{children:"Radio Button Borders"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"border"})," class for borders.  You may need to manually add margins using the ",t.jsx(Od,{text:"margin"})," utility classes, or contain multiple checkboxes using the "," ",t.jsx(yr,{})," or ",t.jsx(ns,{})," container classes and set the gap between elements."]}),t.jsx(S,{html:bM,language:"html",caption:"Border Radio Buttons"}),t.jsx("h2",{children:"Custom Radio Buttons"}),t.jsx(S,{html:yM,language:"html",caption:"Custom Checkboxes"})]}),jM=Object.freeze(Object.defineProperty({__proto__:null,default:wM},Symbol.toStringTag,{value:"Module"})),CM=`<select name="animal">
  <option value="">-- Choose an animal --</option>
  <option value="ant">Ant</option>
  <option value="badger">Badger</option>
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
  <option value="elephant">Elephant</option>
  <option value="ferret">Ferret</option>
  <option value="goldfish" disabled>Goldfish</option>
</select>
`,kM=`<select name="animal" class="inline">
  <option value="badger">Badger</option>
  <option value="mushroom">Mushroom</option>
  <option value="snake">Snake</option>
</select>
<select name="color" class="inline mar-l-2">
  <option value="badger">Badger</option>
  <option value="mushroom">Mushroom</option>
  <option value="snake">Snake</option>
</select>
`,SM=`<div class="grid-2 gap-4">
  <select name="animal">
    <option value="badger">Badger</option>
    <option value="mushroom">Mushroom</option>
    <option value="snake">Snake</option>
  </select>
  <select name="color">
    <option value="badger">Badger</option>
    <option value="mushroom">Mushroom</option>
    <option value="snake">Snake</option>
  </select>
</div>

<div class="flex gap-4 mar-t-4">
  <select name="animal">
    <option value="badger">Badger</option>
    <option value="mushroom">Mushroom</option>
    <option value="snake">Snake</option>
  </select>
  <select name="color" disabled>
    <option value="badger">Disabled</option>
    <option value="mushroom">Mushroom</option>
    <option value="snake">Snake</option>
  </select>
</div>
`,TM=`<select name="animal" required>
  <option value="" hidden disabled selected>Choose an animal</option>
  <option value="ant">Ant</option>
  <option value="badger">Badger</option>
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
  <option value="elephant">Elephant</option>
  <option value="ferret">Ferret</option>
  <option value="goldfish">Goldfish</option>
</select>
`,NM=`<div class="small flex top gap-4 mar-b-4">
  <input type="text" value="Text Field" class="flex-grow">
  <select name="animal">
    <option value="badger">Badger</option>
    <option value="mushroom">Mushroom</option>
    <option value="snake">Snake</option>
  </select>
  <button class="brand">Button</button>
</div>

<div class="grid-3 flex top gap-4 mar-b-4">
  <input type="text" value="Text Field" class="flex-grow">
  <select name="animal">
    <option value="badger">Badger</option>
    <option value="mushroom">Mushroom</option>
    <option value="snake">Snake</option>
  </select>
  <button class="brand">Button</button>
</div>

<div class="large flex top gap-4">
  <input type="text" value="Text Field" class="flex-grow">
  <select name="animal">
    <option value="badger">Badger</option>
    <option value="mushroom">Mushroom</option>
    <option value="snake">Snake</option>
  </select>
  <button class="brand">Button</button>
</div>
`,LM=`<select name="animal">
  <option value="">-- Choose an animal --</option>
  <optgroup label="Insects">
    <option value="ant">Ant</option>
    <option value="beetle">Beetle</option>
    <option value="cockroach">Cockroach</option>
  </optgroup>
  <optgroup label="Mammals">
    <option value="antelope">Antelope</option>
    <option value="badger">Badger</option>
    <option value="cat">Cat</option>
  </optgroup>
</select>
`,_M=`<div>
  <style>
    select.double {
      --arrow-down: url("data:image/svg+xml;charset=UTF-8,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3,9L8,14L13,9M3,2L8,7L13,2' style='fill:none;stroke:%23888;stroke-width:2;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round'%2F%3E%3C%2Fsvg%3E");
    }
  </style>
  <select name="animal" class="double" required>
    <option value="" hidden disabled selected>Choose an animal</option>
    <option value="ant">Ant</option>
    <option value="badger">Badger</option>
    <option value="cat">Cat</option>
    <option value="dog">Dog</option>
    <option value="elephant">Elephant</option>
    <option value="ferret">Ferret</option>
    <option value="goldfish">Goldfish</option>
  </select>
</div>

`,$M=()=>t.jsxs("div",{className:"prose",children:[t.jsx("h1",{children:"Select Input"}),t.jsx("p",{children:"Select inputs are the bane of web developers and designers everywhere. There are notoriously difficult to style.  They don't want to align with other elements.  Their size is often wrong.  And just when you think you've finally cracked it, you look at it on another browser and see that it's all on the wonk."}),t.jsx("p",{children:"I have wasted far too many hours of my life starting at forms like this one trying to get everything the same size and aligned properly."}),t.jsx(S,{html:NM,language:"html",caption:"Select Alignment"}),t.jsxs("p",{children:["The least bad solution is to set ",t.jsx("code",{children:"appearance: none"})," to remove the browser-specific rendering quirks.  The problem then is that you also lose drop down arrow indicating that it's a select input.  So we have to put that back in using an SVG background image. But you don't need to worry about that - I did so you don't have to."]}),t.jsx(S,{html:CM,language:"html",caption:"Select Input"}),t.jsx("h2",{children:"Inline Select Input"}),t.jsxs("p",{children:["Select inputs are full-width by default.  Add the ",t.jsx("code",{children:"inline"})," ","class to make them only as wide as necessary."]}),t.jsx(S,{html:kM,language:"html",caption:"Inline Select"}),t.jsx("h2",{children:"Grid and Flex Layout"}),t.jsxs("p",{children:["You can also use the ",t.jsx(ns,{})," and ",t.jsx(yr,{})," classes to control layout."]}),t.jsx(S,{html:SM,language:"html",caption:"Grid/Flex"}),t.jsx("h2",{children:"Custom Icon"}),t.jsxs("p",{children:["You can define your own drop down arrow icon using the"," ",t.jsx("code",{children:"--arrow-down"})," property.  It's a little bit tricky because you have to URI encode the SVG and define it as shown in this example.  If you've got an SVG icon with a simple path and your icon is 16px square then you can copy the definition from this example and insert your path data into the ",t.jsx("code",{children:"path d='...'"})," part."]}),t.jsxs("p",{children:["Note that you can't use ",t.jsx("code",{children:"currentColor"})," to set the stroke or fill color.  You can define separate ",t.jsx("code",{children:"--arrow-down"})," ","properties for you light and dark themes, or you can use a neutral color like ",t.jsx("code",{children:"#888"})," which works well in both cases."]}),t.jsx(S,{html:_M,language:"html",caption:"Custom Icon"}),t.jsx("h2",{children:"Placeholder"}),t.jsxs("p",{children:["Another annoying thing about select inputs is that they don't support the ",t.jsx("code",{children:"placeholder"})," attribute.  You can work around the problem by adding the ",t.jsx("code",{children:"required"})," attribute to the"," ",t.jsx("code",{children:"select"})," input and the ",t.jsx("code",{children:"hidden"}),","," ",t.jsx("code",{children:"disabled"})," and ",t.jsx("code",{children:"selected"})," attributes to the first option which contains your placeholder text."]}),t.jsx(S,{html:TM,language:"html",caption:"Select Placeholder"}),t.jsx("h2",{children:"Option Groups"}),t.jsxs("p",{children:["You can group options using the ",t.jsx("code",{children:"optgroup"})," element."]}),t.jsx(S,{html:LM,language:"html",caption:"Option Groups"})]}),IM=Object.freeze(Object.defineProperty({__proto__:null,default:$M},Symbol.toStringTag,{value:"Module"})),EM=`<style>
  form.shaded {
    --input-padding-v: 0.5em;
    --input-padding-h: 1em;
    --input-border-width: 2px;
    --input-border-radius: 8px;
    --input-focus-ring-width: 6px;
    --input-focus-ring-gap: 3px;
    --input-border-color: var(--grey-80);
    --input-background-color: linear-gradient(
      180deg,
      var(--color-90) 0%,
      var(--color-95) 20%,
      var(--color-100) 100%
    );
    --input-hover-background-color: linear-gradient(
      180deg,
      var(--color-90) 0%,
      var(--color-95) 40%,
      var(--color-100) 100%
    );
    --input-focus-background-color: linear-gradient(
      180deg,
      var(--blue-90) 0%,
      var(--blue-95) 20%,
      var(--blue-100) 100%
    );
  }
  form.shaded .field {
    --label-size: var(--size-medium);
    --label-inset: 0;
  }
  form.shaded .field.valid {
    --input-border-color: var(--green-80);
    --input-background-color: linear-gradient(
      180deg,
      var(--green-90) 0%,
      var(--green-95) 20%,
      var(--green-100) 100%
    );
    --input-hover-background-color: linear-gradient(
      180deg,
      var(--green-90) 0%,
      var(--green-95) 40%,
      var(--green-100) 140%
    );
  }
  form.shaded .field.invalid {
    --input-border-color: var(--red-80);
    --input-background-color: linear-gradient(
      180deg,
      var(--red-90) 0%,
      var(--red-95) 20%,
      var(--red-100) 100%
    );
    --input-hover-background-color: linear-gradient(
      180deg,
      var(--red-90) 0%,
      var(--red-95) 40%,
      var(--red-100) 140%
    );
  }
  [data-theme=dark] form.shaded {
    --input-background-color: linear-gradient(
      180deg,
      var(--color-10) 0%,
      var(--color-5) 20%,
      var(--color-0) 100%
    );
    --input-hover-background-color: linear-gradient(
      180deg,
      var(--color-10) 0%,
      var(--color-5) 40%,
      var(--color-0) 100%
    );
    --input-focus-background-color: linear-gradient(
      180deg,
      var(--blue-10) 0%,
      var(--blue-5) 20%,
      var(--blue-0) 100%
    );
  }
  [data-theme=dark] form.shaded .field.valid {
    --input-border-color: var(--green-20);
    --input-background-color: linear-gradient(
      180deg,
      var(--green-10) 0%,
      var(--green-5) 20%,
      var(--green-0) 100%
    );
    --input-hover-background-color: linear-gradient(
      180deg,
      var(--green-10) 0%,
      var(--green-5) 40%,
      var(--green-0) 140%
    );
  }
  [data-theme=dark] form.shaded .field.invalid {
    --input-border-color: var(--red-20);
    --input-background-color: linear-gradient(
      180deg,
      var(--red-10) 0%,
      var(--red-5) 20%,
      var(--red-0) 100%
    );
    --input-hover-background-color: linear-gradient(
      180deg,
      var(--red-10) 0%,
      var(--red-5) 40%,
      var(--red-0) 140%
    );
  }
</style>
<form class="shaded">
  <div class="field">
    <label>Text input</label>
    <input type="text" name="t" class="wide"/>
  </div>
  <div class="grid-2 gap-4">
    <div class="field valid">
      <label>Text input - valid</label>
      <input type="text" name="t" class="wide"/>
      <div class="help">This is a valid field</div>
    </div>
    <div class="field invalid">
      <label>Text input - invalid</label>
      <input type="text" name="t" class="wide"/>
      <div class="help">This is an invalid field</div>
    </div>
  </div>
  <div class="field">
    <label>Textarea input</label>
    <textarea name="ta" class="wide"></textarea>
  </div>
  <div class="field">
    <label>Password input</label>
    <input type="password" name="p" class="wide"/>
  </div>
  <div class="field">
    <label>Select input</label>
    <select name="s" class="wide">
      <option value="" hidden disabled selected>Choose an animal</option>
      <option value="ant">Ant</option>
      <option value="badger">Badger</option>
      <option value="cat">Cat</option>
      <option value="dog">Dog</option>
      <option value="elephant">Elephant</option>
    </select>
  </div>
  <div class="field">
    <label>Checkbox input</label>
    <label class="checkbox border wide">
      <input type="checkbox" name="c">
      Checkbox
    </label>
  </div>
  <div class="field">
    <label>Radio button input</label>
    <div class="flex gap-4">
      <label class="radio border">
        <input type="radio" name="r">
        Radio 1
      </label>
      <label class="radio border">
        <input type="radio" name="r">
        Radio 2
      </label>
      <label class="radio border">
        <input type="radio" name="r">
        Radio 3
      </label>
      <label class="radio border">
        <input type="radio" name="r">
        Radio 4
      </label>
    </div>
  </div>
</form>`,MM=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Form Styling"}),t.jsx("p",{children:"There are numerous CSS properties that you can set to change the styling."}),t.jsx(S,{html:EM,language:"html",caption:"Form Styling",expand:!0})]}),AM=Object.freeze(Object.defineProperty({__proto__:null,default:MM},Symbol.toStringTag,{value:"Module"})),PM=`<input
  type="text"
  name="my-input"
  placeholder="Placeholder text"
/>
`,RM=`<input
  type="text"
  name="my-input"
  placeholder="Inline"
  class="inline"
/>
`,OM=`<div class="grid-2 gap-4">
  <input
    type="text" name="my-input"
    placeholder="First name"
  />
  <input
    type="text" name="my-input"
    placeholder="Surname"
  />
</div>

<div class="flex gap-4 mar-t-4">
  <input
    type="text" name="my-input"
    placeholder="First name"
  />
  <input
    type="text" name="my-input"
    placeholder="Surname"
  />
</div>
`,FM=`<div class="grid-3 gap-4">
  <input
    type="password" name="password"
    placeholder="Password"
  />
  <input
    type="number" name="number"
    placeholder="Number"
  />
  <input
    type="tel" name="tel"
    placeholder="Telephone"
  />
  <input
    type="date" name="date"
  />
  <input
    type="time" name="time"
    placeholder="Select a time"
  />
  <input
    type="color" name="color"
    placeholder="Choose a color"
  />
</div>
`,BM=`<div class="grid-2 gap-4">
  <input
    type="text"
    name="disabled-input"
    value="This is disabled"
    disabled
  />
  <input
    type="text"
    name="disabled-input"
    value="This is disabled"
    class="disabled"
  />
</div>`,DM=()=>t.jsxs("div",{className:"prose",children:[t.jsx("h1",{children:"Text Input"}),t.jsx("p",{children:"Text inputs are perhaps the most common kind of input."}),t.jsx(S,{html:PM,language:"html",caption:"Text Input"}),t.jsx("h2",{children:"Inline Text Input"}),t.jsxs("p",{children:["Inputs are full-width by default. Add the ",t.jsx("code",{children:"inline"})," class to give it a fluid width."]}),t.jsx(S,{html:RM,language:"html",caption:"Inline Text Input"}),t.jsx("h2",{children:"Grid and Flex Layout"}),t.jsxs("p",{children:["You can also use the ",t.jsx(ns,{})," and ",t.jsx(yr,{})," classes to control layout."]}),t.jsx(S,{html:OM,language:"html",caption:"Grid and Flex"}),t.jsx("h2",{children:"Other Input Types"}),t.jsxs("p",{children:["You can set the ",t.jsx("code",{children:"type"})," to one of the other text-based input types (e.g. ",t.jsx("code",{children:"password"}),", ",t.jsx("code",{children:"number"}),","," ",t.jsx("code",{children:"telephone"}),", ",t.jsx("code",{children:"date"}),", ",t.jsx("code",{children:"time"}),", etc). There's also some styling provided for the ",t.jsx("code",{children:"color"})," type although it's notoriously hard to style and the appearance can vary on different browsers, devices and operating systems."]}),t.jsx(S,{html:FM,language:"html",caption:"Other Input Types"}),t.jsx("h2",{children:"Disabled Text Input"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"disabled"})," attribute to disable the input or the ",t.jsx("code",{children:"disabled"})," CSS class."]}),t.jsx(S,{html:BM,language:"html",caption:"Disabled Text Input"})]}),zM=Object.freeze(Object.defineProperty({__proto__:null,default:DM},Symbol.toStringTag,{value:"Module"})),WM=`<textarea
  rows="5"
  placeholder="I like badgers because..."
></textarea>
`,HM=`<textarea
  rows="5"
  class="inline"
  placeholder="I like badgers because..."
></textarea>
`,UM=`<div class="grid-2 gap-4">
  <textarea
    rows="5"
    placeholder="Badgers are brilliant..."
  ></textarea>
  <textarea
    rows="5"
    placeholder="Mushrooms are magic..."
  ></textarea>
</div>

<div class="flex gap-4 mar-t-4">
  <textarea
    rows="5"
    placeholder="Snakes are scary..."
  ></textarea>
  <textarea
    rows="5"
    placeholder="Grids are groovy, flex is fab..."
  ></textarea>
</div>

`,GM=`<textarea
  rows="5"
  placeholder="Badgers are brilliant..."
  disabled
></textarea>

<textarea
  rows="5"
  placeholder="Mushrooms are magic..."
  class="disabled"
></textarea>
`,VM=()=>t.jsxs("div",{children:[t.jsx("h1",{children:"Text Area Input"}),t.jsxs("p",{children:["Text area inputs are much like ",t.jsx(KS,{})," inputs."]}),t.jsxs("p",{children:["One thing to note (that always catches me out) - if you want placeholder text to appear then you have to make sure there is ",t.jsx("em",{children:"nothing"})," ","(not even a newline) between the opening and closing ",t.jsx("code",{children:"textarea"})," tags."]}),t.jsx(S,{html:WM,language:"html",caption:"Text Area Input",expand:!0}),t.jsx("h2",{children:"Inline Text Area Input"}),t.jsxs("p",{children:["Text area inputs are full-width by default.  Add the"," ",t.jsx("code",{children:"inline"})," class to give them a fluid width."]}),t.jsx(S,{html:HM,language:"html",caption:"Inline Text Area Input",expand:!0}),t.jsx("h2",{children:"Grid and Flex Layout"}),t.jsxs("p",{children:["You can also use the ",t.jsx(ns,{})," and ",t.jsx(yr,{})," classes to control layout."]}),t.jsx(S,{html:UM,language:"html",caption:"Grid and Flex"}),t.jsx("h2",{children:"Disabled Text Area Input"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"disabled"})," attribute to disabled the input or the ",t.jsx("code",{children:"disabled"})," CSS class."]}),t.jsx(S,{html:GM,language:"html",caption:"Disabled Text Area Input"})]}),YM=Object.freeze(Object.defineProperty({__proto__:null,default:VM},Symbol.toStringTag,{value:"Module"})),ZM=e=>F.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},F.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),F.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),F.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),F.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),F.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),F.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),F.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),qM=()=>t.jsxs("div",{className:"prose",children:[t.jsx("h1",{children:"What's Wrong With It?"}),t.jsx("p",{className:"intro wide",children:"There are many, many CSS toolkits and UI frameworks already out there to choose from. If you're looking for something that's stable, reliable, comprehensive and well-supported then this probably isn't for you."}),t.jsxs(re,{children:[t.jsxs("div",{children:[t.jsx("h2",{children:"Work in Progress"}),t.jsx("p",{children:"This is a work in progress.  It started out life as an ad-hoc collection of CSS classes that I copy and pasted between projects.  Then it became part of Bader UI, a collection of React components implementing some basic UI widgets.  Now it's being moved out into its own module which concentrates on just the CSS without any dependency on React."}),t.jsx("p",{children:"One of the reasons that I'm moving it into a new module is because it gives me the opportunity to break backwards compatibility.  There are some things that, given the chance to do again, I would do differently. This gives me that chance and hopefully I won't make too many bad decisions that I later come to regret.  But until I've had a chance to eat my own dog food and build a few sites with it, I can't predict what's going to work well and what isn't."}),t.jsx("p",{children:"I'm also migrating everything to use modern CSS techniques which are now well supported by browsers.  That means that a lot of things that were previously hard become much easier.  But different."}),t.jsx("p",{children:"As a result, this module is still in a state of flux.  If you build anything with it now then there's a good chance that something will break in the near future."}),t.jsx("h2",{children:"Some Assembly Required"}),t.jsx("p",{children:"If you have a good working knowledge of modern CSS and SASS then you should be able to easily adapt it to your needs.  Nearly everything is customisable, either through SASS variables, CSS custom properties, or by using the provided scripts to build your own toolkit."}),t.jsxs("p",{children:["You don't need to buy in to the whole package.  As well as being customisable it's also modular.  With a small amount of effort you can configure it to include the bits your want and ignore the rest. Or you can browse the source code and borrow the ",t.jsx("i",{children:"ideas"})," that you think are useful."]}),t.jsx("p",{children:"Just remember that this is aimed more at people who already know how to build web sites and are familiar with CSS. If you're looking for a fully-featured, widely used and well supported UI toolkit that does everything for you then there are plenty of others to choose from."}),t.jsx("p",{children:"If you don't like the sound of that then these probably aren't the badgers you're looking for.  You can go about your business. Move along."})]}),t.jsxs("div",{children:[t.jsx("h2",{children:"Opinionated and Selfish Software"}),t.jsxs("p",{children:["This is based on my personal collection of CSS styles and utility classes that I use on a daily basis in my job building web sites for clients. It's Open Source and you're welcome to use it but be aware that it's something that I built for ",t.jsx("em",{children:"me"})," to help"," ",t.jsx("em",{children:"me"})," get my job done."]}),t.jsx("p",{children:"I didn't build it for you (unless you're one of my clients) and I don't really have the time or inclination to promote it, increase the user base or provide unpaid support for it.  It's not my intention for this to be the next great CSS toolkit - there are plenty of those already. My goal isn't to change the World, only to make it a slightly better place."}),t.jsx("p",{children:"So be warned that it does things the way I like to do them.  You may not agree with all my decisions, but that's fine.  They're my decisions to make, not yours.  It's free software (in both senses: free speech and free beer) and if you don't like it then you're entitled to a full refund of the price you paid."}),t.jsx("p",{children:"On the plus-side, the Badger-UI toolkit contains a lot of tried and tested techniques for managing web site styles that have been honed over nearly 30 years of experience.  It contains the features that I can't live without when I'm building a web site.  Of course, you may have different ideas about the best way to do it, but this is what works for me.  It's supposed to be a reasonable starting point not the final destination."}),t.jsx("div",{className:"text-center",children:t.jsx(ZM,{style:{width:"12em",marginTop:"2rem"}})})]})]})]}),KM=Object.freeze(Object.defineProperty({__proto__:null,default:qM},Symbol.toStringTag,{value:"Module"})),Yv=({path:e,onClick:n,width:r=512,height:s=512,style:a,className:l="night-and-day--icon",fill:o="currentColor"})=>t.jsx("svg",{"aria-hidden":"true",focusable:"false",className:l,style:a,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${r} ${s}`,onClick:n,children:t.jsx("path",{d:e,fill:o})}),Zv=e=>t.jsx(Yv,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),qv=({Icon:e,caption:n,onClick:r,iconClass:s,iconStyle:a,captionStyle:l,className:o="night-and-day--switcher",captionClass:i="night-and-day--caption",style:c={display:"inline-block"}})=>t.jsxs("div",{className:o,onClick:r,style:c,children:[t.jsx(e,{style:a,className:s}),!!n&&t.jsx("div",{className:i,style:l,children:n})]}),QM=e=>{const{setDark:n}=ko();return t.jsx(qv,{Icon:Zv,onClick:n,...e})},Kv=e=>t.jsx(Yv,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),XM=e=>{const{setLight:n}=ko();return t.jsx(qv,{Icon:Kv,onClick:n,...e})},JM=({sunrise:e={},nightfall:n={}})=>{const{isLight:r,setLight:s,setDark:a}=ko();return r?t.jsx(XM,{onClick:a,...e}):t.jsx(QM,{onClick:s,...n})},Qv=F.createContext(),ko=()=>F.useContext(Qv),ui="dark",su="light",Xv="(prefers-color-scheme: dark)",eA=()=>{var e;return(e=window==null?void 0:window.matchMedia)==null?void 0:e.call(window,Xv).matches},ta=window==null?void 0:window.localStorage,nA=e=>e.split(" "),jm=(e,n="")=>`${e} ${n}`,tA=({storageKey:e,defaultVariant:n,children:r})=>{const s=e?ta==null?void 0:ta.getItem(e):null,[a,l=""]=s?nA(s):[eA(),null],[o,i]=F.useState(a===ui),[c,h]=F.useState(l||n),m=_=>{i(_),e&&ta&&ta.setItem(e,jm(_?ui:su,c))},x=_=>{h(_),e&&ta&&ta.setItem(e,jm(o?ui:su,_))},w=_=>m(_.matches);F.useEffect(()=>{if(window&&window.matchMedia){const _=window.matchMedia(Xv);return _.addEventListener("change",w),()=>_==null?void 0:_.removeEventListener("change",w)}},[]);const $={isDark:o,isLight:!o,setDark:()=>m(!0),setLight:()=>m(!1),setIsDark:i,toggleTheme:()=>m(!o),theme:o?ui:su,variant:c,setVariant:x};return t.jsx(Qv.Provider,{value:$,children:r})},rA=()=>t.jsxs("div",{className:"prose",children:[t.jsx("h1",{children:"What's Good About It?"}),t.jsx("p",{className:"intro wide",children:"If you're wondering what makes Badger CSS better than all the other CSS frameworks and UI toolkits out there then the short and simple answer is that it isn't.  It's just another one to add to the pile."}),t.jsxs(re,{children:[t.jsxs("div",{children:[t.jsx("h2",{children:"A Solid Foundation"}),t.jsx("p",{children:"Badger CSS is a collection of tools and techniques that I've built up over many years (nearly 30) of building web sites.  It's what works for me and maybe it will work for you too.  But I'm not making any promises."}),t.jsx("p",{children:"It's supposed to be a starting point, not a destination.  If you're building a web site and you want a reasonable foundation to build your styles on then it might be better for you than a more fully-featured toolkit that has everything including the kitchen sink."}),t.jsx("h2",{children:"Small(ish) and Simple"}),t.jsx("p",{children:"The default Badger CSS stylesheet is around 15kb minimised and compressed (around 100kb uncompressed).  That includes all 16 color ranges which you probably aren't ever going to need in practice. If you define your own palette with a limited set of colors then you can reduce the size a fair bit."}),t.jsx("h2",{children:"Modern CSS"}),t.jsx("p",{children:"It is based on modern CSS techniques and works in all modern browsers. In particular it makes heavy use of CSS custom properties that you can easily change as required. Behind the scenes it is built using SASS (specifically SCSS) which gives you more opportunities for configuring and extending it."}),t.jsx("h2",{children:"Color Management"}),t.jsxs("p",{children:["Badger CSS uses a novel approach to defining and selecting"," ",t.jsx(I5,{}),".  The color palette was created using ",t.jsx("a",{href:"https://abw.github.io/badger-color",children:"Badger Color"})," (which itself was created for this specific task) and you can use it to create your own custom palettes if necessary. The palette data that it generates can be automatically expanded out to SASS component files, ready to be used in Badger CSS."]}),t.jsxs("p",{children:["You can easily change the hues of the standard palette to match your ",t.jsx(Up,{}),".  It will automatically create greyscale color ranges based on your primary brand color."]}),t.jsxs("p",{children:["The use of ",t.jsx(zS,{})," to define color ranges, and CSS class scopes to select them, makes it easy to create UI components that work automatically with any color range. It also makes it easy to define different color schemes for light and dark themes."]}),t.jsx("h2",{children:"Utility Classes"}),t.jsxs("p",{children:["Badger CSS comes with a core set of ",t.jsx(WS,{})," for ad-hoc styling. They are intentionally limited to the kind of things that I find myself using all the time.  If you prefer the approach of"," ",t.jsx("a",{href:"https://tailwindcss.com/",children:"Tailwind"})," that provides CSS classes for absolutely everything then you know where to find it."]}),t.jsxs("p",{children:["I'm not knocking Tailwind, by the way.  CSS utility classes are an ",t.jsx("em",{children:"extremely"}),` useful set of tools to have in your toolkit. I just think they should be limited in their scope and not a replacement for writing "proper" CSS when it's more appropriate to do so.`]}),t.jsx("h2",{children:"Form Styling"}),t.jsxs("p",{children:["Styling ",t.jsx(Vp,{})," is not much fun. I have wasted many hours, days, even weeks of my life trying to get form styling just right and I never want to have to do it again."]}),t.jsxs("p",{children:["If you've got better things to do than trying to figure out why your ",t.jsx("code",{children:"select"})," component is 1 pixel shorter than your text ",t.jsx("code",{children:"input"})," component then take a look at what Badger CSS has to offer.  It provides basic styles for all the standard form components and has smoothed over a lot of the problems so you don't have to worry too much about them.  Spend the time you save playing with your kids or flying a kite."]}),t.jsx("h2",{children:"UI Components"}),t.jsx("p",{children:"Badger CSS has styling for a limited set of UI components. It's not really supposed to be a complete UI toolkit (because the World already has enough of them), but rather to be a foundation on which UI components can be built."}),t.jsxs("p",{children:["Experience has taught me that off-the-shelf UI components (even ones that I've written myself) often need a fair bit of tweaking to match the styling for a particular site.  Sometimes it's easier just to write them from scratch as they're needed.  CSS has come a long way since the days when we relied on toolkits like"," ",t.jsx("a",{href:"https://getbootstrap.com/",children:"Bootstrap"})," to provide a consistent cross-browser experience."]}),t.jsx("p",{children:"That said, it's useful to have a reasonable starting point for some of the common UI components: things like alerts, dialogs, dropdown menus, overlays, tables and tooltips.  You can easily customise Badger CSS to remove anything you don't want."})]}),t.jsxs("div",{children:[t.jsx("h2",{children:"Light and Dark Themes"}),t.jsx("p",{children:"Everything contains styling for both light and dark themes, out of the box."}),t.jsx(sA,{})]})]})]}),sA=()=>{const{theme:e,toggleTheme:n,isDark:r}=ko();return t.jsxs("div",{children:[t.jsxs("button",{onClick:n,className:"mar-b-4",children:[t.jsxs("span",{className:"mar-r-2",children:["Switch to the ",r?"light":"dark"," side"]}),r?t.jsx(Kv,{}):t.jsx(Zv,{})]}),t.jsx(aA,{theme:e})]})},aA=({theme:e})=>t.jsx("div",{children:t.jsxs("div",{className:"surface pad-4 border",children:[t.jsxs("h3",{className:"mar-t-0",children:[pk(e)," Theme"]}),t.jsxs("div",{className:"field mar-t-4",children:[t.jsx("label",{children:"Form Field"}),t.jsx("input",{type:"text",name:"a"}),t.jsx("div",{className:"help",children:"Field help"})]}),t.jsxs("div",{className:"field valid",children:[t.jsx("label",{children:"Valid Field"}),t.jsx("input",{type:"text",name:"b"}),t.jsx("div",{className:"help",children:"This is fine"})]}),t.jsxs("div",{className:"field invalid",children:[t.jsx("label",{children:"Invalid Field"}),t.jsx("input",{type:"text",name:"c"}),t.jsx("div",{className:"help",children:"This is not so good"})]}),t.jsxs("div",{className:"field mar-t-4",children:[t.jsx("label",{children:"Input Prefix/Suffix"}),t.jsxs("div",{className:"inputs",children:[t.jsx("div",{className:"prefix",children:"£"}),t.jsx("input",{type:"text",name:"d"}),t.jsx("div",{className:"suffix",children:".00"})]})]}),t.jsxs("div",{className:"field mar-t-4",children:[t.jsx("label",{children:"Shaded and Lined Prefix/Suffix"}),t.jsxs("div",{className:"inputs",children:[t.jsx("div",{className:"prefix shaded lined",children:t.jsx(Fa,{name:"unlock"})}),t.jsx("input",{type:"text",name:"e"}),t.jsx("div",{className:"suffix shaded lined",children:t.jsx(Fa,{name:"check"})})]})]}),t.jsxs("div",{className:"field",children:[t.jsx("label",{children:"Select"}),t.jsxs("select",{name:"animal",required:!0,children:[t.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Choose an animal"}),t.jsx("option",{value:"ant",children:"Ant"}),t.jsx("option",{value:"badger",children:"Badger"}),t.jsx("option",{value:"cat",children:"Cat"}),t.jsx("option",{value:"dog",children:"Dog"})]})]}),t.jsxs("label",{className:"inline radio",children:[t.jsx("input",{type:"radio",name:"radio1"}),"Radio"]}),t.jsxs("label",{className:"inline radio",children:[t.jsx("input",{type:"radio",name:"radio1"}),"Buttons"]}),t.jsxs("label",{children:[t.jsx("input",{type:"checkbox"}),"Checkbox"]}),t.jsxs("div",{className:"mar-t-4 grid-2 gap-4",children:[t.jsxs("label",{className:"inline radio border",children:[t.jsx("input",{type:"radio",name:"radio2"}),"Radio"]}),t.jsxs("label",{className:"inline radio border",children:[t.jsx("input",{type:"radio",name:"radio2"}),"Buttons"]})]}),t.jsx("div",{className:"mar-t-4",children:t.jsxs("label",{className:"border",children:[t.jsx("input",{type:"checkbox"}),"Checkbox"]})}),t.jsxs("label",{className:"mar-t-4",children:[t.jsx("input",{type:"checkbox",role:"switch"}),"Turn it on again"]}),t.jsxs("div",{className:"flex space mar-t-4",children:[t.jsx("button",{className:"grey outline",children:"Reset"}),t.jsx("button",{className:"blue",children:"Submit"})]}),t.jsx("div",{className:"success alert border mar-t-4",children:"Success alert"}),t.jsx("div",{className:"error alert border",children:"Error alert!"}),t.jsx("div",{className:"info alert border",children:"Info alert"}),t.jsxs("details",{className:"shaded lined border orange bdr-1",children:[t.jsx("summary",{children:"Revealable Details"}),t.jsx("p",{children:"Hello World!"})]}),t.jsx("div",{"data-tooltip":"top left","aria-label":"This is a tooltip!",className:"violet border pad-2 pad-h-4 bgc-95 bgd-5 bdc-80 bdd-20 mar-t-4 Xtext-center bdr-1",children:"Hover here for tooltip"}),t.jsxs("table",{className:"wide striped celled mar-t-4",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Instrument"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"Nigel"}),t.jsx("td",{children:"Guitar"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"David"}),t.jsx("td",{children:"Guitar"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Derek"}),t.jsx("td",{children:"Bass"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Viv"}),t.jsx("td",{children:"Keyboards"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Mick"}),t.jsx("td",{children:"Drums"})]})]})]})]})}),lA=Object.freeze(Object.defineProperty({__proto__:null,default:rA},Symbol.toStringTag,{value:"Module"})),oA=`<link
  rel="stylesheet"
  href="https://unpkg.com/@abw/badger-css/dist/styles/badger.min.css"
/>`,iA=`## using npm
$ npm add -D @abw/badger-css

## using yarn
$ yarn add -D @abw/badger-css

## using pnpm
$ pnpm add -D @abw/badger-css`,dA="import '@abw/badger-css/styles/badger.min.css';",cA="@import '@abw/badger-css/styles/badger.scss';",uA=`$ git clone https://github.com/abw/badger-css.git
$ cd badger-css
$ sass styles/badger.scss > your-badger-file.css`,hA=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Installation"}),t.jsx("h2",{children:"No Installation Required!"}),t.jsxs(re,{children:[t.jsxs("p",{children:["You don't need to install anything to get starting using Badger CSS in a website.  Simply add the following tag to the"," ",t.jsx("code",{children:"<head>"})," section of your web page."]}),t.jsx(_e,{code:oA,caption:"Unpkg Link",language:"html",className:"mar-b-8",expand:!0})]}),t.jsx("h2",{children:"Adding to a Javascript Project"}),t.jsxs(re,{children:[t.jsxs("p",{children:["If you want to configure, modify or adapt Badger CSS then you should add ",t.jsx("code",{children:"@abw/badger-css"})," to your Javascript project using your favourite package manager.  In most cases you should be able to add it as a development dependency using the ",t.jsx("code",{children:"-D"})," option."]}),t.jsx(_e,{code:iA,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0})]}),t.jsx("h2",{children:"Importing the CSS"}),t.jsxs(re,{children:[t.jsxs("div",{children:[t.jsx("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script like so:"}),t.jsxs("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",t.jsx("code",{children:"node_modules"})," directory."]})]}),t.jsx(_e,{code:dA,caption:"Importing CSS",language:"js",className:"mar-b-8",expand:!0})]}),t.jsx("h2",{children:"Importing the SCSS"}),t.jsxs(re,{children:[t.jsxs("div",{children:[t.jsx("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components.  This gives you the flexibility to configure the default options, or to pick and choose which components you want to include."}),t.jsx("p",{children:"Add the following line to your main SCSS stylesheet source."})]}),t.jsx(_e,{code:cA,caption:"Importing SCSS",language:"scss",className:"mar-b-8",expand:!0})]}),t.jsx("h2",{children:"Going it Alone"}),t.jsxs(re,{children:[t.jsxs("p",{children:["If you're not using Javascript but want to play with the SCSS source files then you can check out the project repository from Github and run ",t.jsx("code",{children:"sass"})," to compile the source files into CSS."]}),t.jsx(_e,{code:uA,caption:"CSS from SASS",language:"shell",className:"mar-b-8",expand:!0})]})]}),pA=Object.freeze(Object.defineProperty({__proto__:null,default:hA},Symbol.toStringTag,{value:"Module"})),fA=e=>F.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 717 337",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},F.createElement("path",{className:"white",d:"M248.362,204.8C251.303,208.841 251.506,216.92 246.886,220.486C247.235,215.811 245.076,210.416 243.385,207.987C242.142,206.2 237.32,201.909 232.525,201.457C236.319,199.212 245.27,200.55 248.362,204.8ZM380.931,288.851C382.012,292.919 365.895,290.457 365.767,303.096C365.703,309.466 368.575,313.608 364.949,314.116C360.977,314.673 360.493,310.692 359.8,305.449C358.316,294.227 366.194,290.723 373.729,288.466C380.03,286.58 380.512,287.273 380.931,288.851ZM250.509,198.166C250.116,197.944 249.715,197.73 249.306,197.524C237.097,191.351 222.986,194.646 217.814,204.876C213.744,212.926 216.415,222.888 223.688,229.775C220.646,228.505 217.677,226.862 214.911,224.779C198.663,212.542 195.441,190.333 199.289,185.248C202.588,180.888 226.299,177.823 242.548,190.06C245.688,192.424 248.324,195.199 250.509,198.166ZM234.492,31.758C231.75,33.423 225.901,22.543 215.941,24.48C210.088,25.619 206.755,23.124 210.523,20.119C221.225,11.585 239.546,28.689 234.492,31.758ZM99.149,58.412C89.72,51.898 79.11,48.569 67.051,51.951C58.397,54.378 52.734,60.065 49.994,67.45C48.707,67.555 47.4,67.691 46.084,67.853C38.149,68.832 29.859,70.741 23.646,72.288C42.126,47.476 64.861,38.817 87.003,38.714L88.566,38.707L88.864,37.173C90.304,29.757 86.13,22.597 75.216,17.044C99.723,11.821 129.948,17.277 146.178,26.501L148.305,27.709L148.955,25.351C149.908,21.892 149.675,13.343 143.798,5.723C174.533,11.177 197.842,21.068 216.166,33.985C250.062,62.777 267.98,100.361 283.213,136.181C299.907,175.44 313.396,212.581 341.026,233.82C341.522,234.342 342.023,234.861 342.528,235.377C350.993,244.039 366.478,256.93 385.23,273.49C387.358,275.369 389.327,277.224 391.08,279.038C386.966,279.245 381.675,280.641 374.911,282.18C352.689,287.237 351.849,297.009 354.41,312.963C355.723,321.141 359.376,324.914 364.644,326.161C344.448,331.711 334.138,335.299 309.216,330.594C270.323,323.25 233.474,308.826 222.734,303.773C222.54,303.387 222.214,303.065 221.786,302.881C207.397,296.693 197.713,288.82 193.624,279.767C195.586,278.724 197.158,277.535 198.531,276.583C199.395,275.985 199.61,274.797 199.011,273.933C198.412,273.069 197.225,272.854 196.361,273.453C193.368,275.527 189.319,279.035 181.419,278.358C180.371,278.268 179.448,279.046 179.359,280.093C179.269,281.14 180.046,282.063 181.094,282.153C184.73,282.464 187.673,282.036 190.117,281.255C194.043,289.991 202.664,297.858 215.527,304.192C190.321,313.397 168.064,307.288 148.128,295.655C126.82,283.221 108.129,264.526 91.308,250.982C77.307,239.708 64.463,232.065 52.581,233.695C45.172,234.711 38.017,239.243 31.166,248.886C20.017,224.385 34.815,199.803 49.449,184.213L50.995,182.566L49.11,181.321C34.813,171.879 18.601,177.687 7.799,189.755C6.995,180.056 11.532,165.892 18.973,152.99C26.481,139.972 37,128.18 48.427,123.711C118.961,110.252 153.156,169.713 188.827,221.409C209.775,251.767 256.49,287.586 345.223,316.241C340.436,301.054 342.628,293.783 346.067,286.802C324.7,276.815 298.269,260.277 280.877,228.797C233.283,142.653 212.43,81.347 143.665,64.082C131.685,61.074 116.053,57.87 99.149,58.412ZM99.066,72.542C97.614,80.151 74.887,58.073 70.407,69.969C62.107,92.007 54.173,79.428 56.142,73.447C66.246,42.754 100.4,65.551 99.066,72.542Z",style:{fill:"white"}}),F.createElement("path",{className:"black",d:"M48.845,71.376C48.085,71.452 47.319,71.538 46.55,71.633C36.384,72.888 25.625,75.704 19.567,77.251L14.706,78.493L17.519,74.338C36.933,45.669 61.411,35.483 85.316,34.929C85.679,28.465 80.142,22.804 68.715,18.305L63.513,16.258L68.883,14.704C94.004,7.433 126.953,12.429 145.602,21.872C145.715,17.476 143.99,10.119 137.262,4.358L132.173,0L138.793,1.03C164.858,5.083 185.888,12.137 203.193,21.438C203.366,21.5 203.539,21.563 203.712,21.626C205.114,17.121 209.176,13.252 216.656,13.924C236.466,15.704 240.708,25.62 241.751,43.904C266.891,65.236 284.026,95.363 297.467,125.916C309.511,153.29 318.589,181.001 327.822,202.999C331.443,211.626 335.086,219.374 338.942,225.872C340.965,228.196 343.066,230.479 345.252,232.715C353.685,241.344 369.071,254.139 387.751,270.635C391.391,273.849 394.564,277.022 397.067,280.061C399.65,281.424 401.411,284.251 402.569,289.316C402.766,289.952 402.91,290.575 403,291.183C403.044,291.476 403.078,291.773 403.104,292.073C403.406,293.909 403.652,295.979 403.849,298.307C404.631,307.557 401.813,319.773 387.422,323.48C384.617,324.202 381.912,324.872 379.338,325.409C375.566,326.623 372.295,327.675 372.296,327.675C350.779,335.844 336.841,339.686 308.509,334.336C267.627,326.617 228.986,311.137 219.844,306.606C192.192,317.895 167.885,311.593 146.209,298.945C124.732,286.413 105.872,267.6 88.919,253.949C82.285,248.607 75.954,244.066 69.867,241.062C64.049,238.191 58.481,236.73 53.099,237.468C45.892,238.456 39.128,243.397 32.519,253.689L30.774,256.406L29.24,253.565C15.116,227.399 29.491,200.652 45.081,183.337C31.813,176.104 17.177,183.299 8.174,195.3L5.878,198.362L4.821,194.683C1.901,184.524 6.568,166.875 15.674,151.087C21.122,141.64 28.135,132.887 35.912,126.766C24.827,130.039 12.898,135.014 0,141.953C13.007,107.592 30.082,86.63 48.343,74.289C48.468,73.299 48.636,72.327 48.845,71.376ZM248.362,204.8C245.27,200.55 236.319,199.212 232.525,201.457C237.32,201.909 242.142,206.2 243.385,207.987C245.076,210.416 247.235,215.811 246.886,220.486C251.506,216.92 251.303,208.841 248.362,204.8ZM380.931,288.851C380.512,287.273 380.03,286.58 373.729,288.466C366.194,290.723 358.316,294.227 359.8,305.449C360.493,310.692 360.977,314.673 364.949,314.116C368.575,313.608 365.703,309.466 365.767,303.096C365.895,290.457 382.012,292.919 380.931,288.851ZM250.509,198.166C248.324,195.199 245.688,192.424 242.548,190.06C226.299,177.823 202.588,180.888 199.289,185.248C195.441,190.333 198.663,212.542 214.911,224.779C217.677,226.862 220.646,228.505 223.688,229.775C216.415,222.888 213.744,212.926 217.814,204.876C222.986,194.646 237.097,191.351 249.306,197.524C249.715,197.73 250.116,197.944 250.509,198.166ZM234.492,31.758C239.546,28.689 221.225,11.585 210.523,20.119C206.755,23.124 210.088,25.619 215.941,24.48C225.901,22.543 231.75,33.423 234.492,31.758ZM99.149,58.412C116.053,57.87 131.685,61.074 143.665,64.082C212.43,81.347 233.283,142.653 280.877,228.797C298.269,260.277 324.7,276.815 346.067,286.802C342.628,293.783 340.436,301.054 345.223,316.241C256.49,287.586 209.775,251.767 188.827,221.409C153.156,169.713 118.961,110.252 48.427,123.711C37,128.18 26.481,139.972 18.973,152.99C11.532,165.892 6.995,180.056 7.799,189.755C18.601,177.687 34.813,171.879 49.11,181.321L50.995,182.566L49.449,184.213C34.815,199.803 20.017,224.385 31.166,248.886C38.017,239.243 45.172,234.711 52.581,233.695C64.463,232.065 77.307,239.708 91.308,250.982C108.129,264.526 126.82,283.221 148.128,295.655C168.064,307.288 190.321,313.397 215.527,304.192C202.664,297.858 194.043,289.991 190.117,281.255C187.673,282.036 184.73,282.464 181.094,282.153C180.046,282.063 179.269,281.14 179.359,280.093C179.448,279.046 180.371,278.268 181.419,278.358C189.319,279.035 193.368,275.527 196.361,273.453C197.225,272.854 198.412,273.069 199.011,273.933C199.61,274.797 199.395,275.985 198.531,276.583C197.158,277.535 195.586,278.724 193.624,279.767C197.713,288.82 207.397,296.693 221.786,302.881C222.214,303.065 222.54,303.387 222.734,303.773C233.474,308.826 270.323,323.25 309.216,330.594C334.138,335.299 344.448,331.711 364.644,326.161C359.376,324.914 355.723,321.141 354.41,312.963C351.849,297.009 352.689,287.237 374.911,282.18C381.675,280.641 386.966,279.245 391.08,279.038C389.327,277.224 387.358,275.369 385.23,273.49C366.478,256.93 350.993,244.039 342.528,235.377C342.023,234.861 341.522,234.342 341.026,233.82C313.396,212.581 299.907,175.44 283.213,136.181C267.98,100.361 250.062,62.777 216.166,33.985C197.842,21.068 174.533,11.177 143.798,5.723C149.675,13.343 149.908,21.892 148.955,25.351L148.305,27.709L146.178,26.501C129.948,17.277 99.723,11.821 75.216,17.044C86.13,22.597 90.304,29.757 88.864,37.173L88.566,38.707L87.003,38.714C64.861,38.817 42.126,47.476 23.646,72.288C29.859,70.741 38.149,68.832 46.084,67.853C47.4,67.691 48.707,67.555 49.994,67.45C52.734,60.065 58.397,54.378 67.051,51.951C79.11,48.569 89.72,51.898 99.149,58.412ZM99.066,72.542C100.4,65.551 66.246,42.754 56.142,73.447C54.173,79.428 62.107,92.007 70.407,69.969C74.887,58.073 97.614,80.151 99.066,72.542Z"}),F.createElement("path",{className:"badger",d:"M347.242,14.148C348.016,13.915 349.256,13.664 350.96,13.392C352.664,13.121 354.406,12.986 356.188,12.986C357.892,12.986 359.421,13.102 360.777,13.334C362.132,13.567 363.274,14.031 364.204,14.729C365.133,15.426 365.83,16.374 366.295,17.575C366.76,18.775 366.992,20.344 366.992,22.28L366.992,33.666C368.928,32.891 370.768,32.349 372.511,32.039C374.253,31.729 376.17,31.574 378.261,31.574C381.979,31.574 385.503,32.233 388.834,33.549C392.164,34.866 395.107,36.783 397.663,39.3C400.219,41.817 402.233,44.935 403.704,48.653C405.176,52.37 405.912,56.669 405.912,61.548C405.912,66.583 405.157,70.978 403.646,74.735C402.136,78.491 400.025,81.608 397.315,84.087C394.604,86.565 391.293,88.444 387.381,89.722C383.47,90.999 379.152,91.638 374.428,91.638C369.316,91.638 364.978,91.038 361.416,89.838C357.853,88.637 354.832,87.146 352.354,85.365C348.946,82.964 347.242,79.866 347.242,76.071L347.242,14.148ZM374.428,76.071C377.99,76.071 380.759,74.851 382.734,72.411C384.709,69.971 385.697,66.35 385.697,61.548C385.697,56.669 384.69,53.029 382.676,50.628C380.662,48.227 377.952,47.026 374.544,47.026C372.995,47.026 371.659,47.181 370.536,47.491C369.413,47.801 368.193,48.265 366.876,48.885L366.876,74.212C367.728,74.754 368.754,75.199 369.955,75.548C371.155,75.896 372.646,76.071 374.428,76.071ZM439.023,31.574C443.205,31.574 447.02,32 450.466,32.852C453.913,33.704 456.856,35.002 459.296,36.744C461.735,38.487 463.614,40.694 464.93,43.366C466.247,46.039 466.905,49.195 466.905,52.835L466.905,78.859C466.905,80.873 466.344,82.518 465.221,83.796C464.098,85.074 462.762,86.178 461.213,87.108C456.178,90.128 449.091,91.638 439.952,91.638C435.847,91.638 432.149,91.251 428.857,90.477C425.565,89.702 422.738,88.54 420.376,86.991C418.014,85.442 416.194,83.467 414.916,81.066C413.638,78.665 412.999,75.877 412.999,72.701C412.999,67.357 414.586,63.252 417.762,60.387C420.938,57.521 425.856,55.739 432.517,55.042L447.736,53.416L447.736,52.603C447.736,50.356 446.748,48.749 444.773,47.781C442.798,46.813 439.952,46.329 436.234,46.329C433.291,46.329 430.425,46.639 427.637,47.258C424.849,47.878 422.332,48.653 420.086,49.582C419.079,48.885 418.227,47.82 417.53,46.387C416.833,44.954 416.484,43.463 416.484,41.914C416.484,39.9 416.968,38.293 417.936,37.093C418.904,35.892 420.395,34.866 422.409,34.014C424.655,33.162 427.308,32.542 430.367,32.155C433.427,31.768 436.312,31.574 439.023,31.574ZM439.952,77.232C441.269,77.232 442.721,77.097 444.309,76.826C445.896,76.555 447.078,76.187 447.852,75.722L447.852,66.428L439.487,67.125C437.319,67.28 435.537,67.744 434.143,68.519C432.749,69.294 432.052,70.455 432.052,72.004C432.052,73.553 432.652,74.812 433.853,75.78C435.053,76.748 437.086,77.232 439.952,77.232ZM476.548,61.548C476.548,56.436 477.323,52.002 478.872,48.246C480.421,44.489 482.57,41.372 485.32,38.894C488.069,36.415 491.283,34.576 494.962,33.375C498.641,32.175 502.611,31.574 506.871,31.574C508.42,31.574 509.93,31.71 511.402,31.981C512.873,32.252 514.074,32.581 515.003,32.968L515.003,14.148C515.778,13.915 517.017,13.664 518.721,13.392C520.425,13.121 522.167,12.986 523.949,12.986C525.653,12.986 527.182,13.102 528.538,13.334C529.893,13.567 531.036,14.031 531.965,14.729C532.895,15.426 533.592,16.374 534.056,17.575C534.521,18.775 534.753,20.344 534.753,22.28L534.753,77.349C534.753,80.989 533.049,83.893 529.642,86.062C527.395,87.533 524.491,88.831 520.928,89.954C517.365,91.077 513.26,91.638 508.613,91.638C503.579,91.638 499.067,90.941 495.079,89.547C491.09,88.153 487.721,86.139 484.971,83.506C482.222,80.873 480.13,77.716 478.697,74.037C477.265,70.358 476.548,66.195 476.548,61.548ZM509.543,47.026C505.36,47.026 502.146,48.227 499.9,50.628C497.654,53.029 496.531,56.669 496.531,61.548C496.531,66.35 497.576,69.971 499.668,72.411C501.759,74.851 504.779,76.071 508.73,76.071C510.124,76.071 511.382,75.858 512.505,75.432C513.628,75.006 514.5,74.522 515.119,73.979L515.119,48.42C513.57,47.491 511.711,47.026 509.543,47.026ZM574.603,31.574C579.017,31.574 583.025,32.136 586.627,33.259C590.228,34.382 593.268,35.834 595.747,37.616C597.296,38.7 598.516,39.9 599.407,41.217C600.297,42.534 600.743,44.238 600.743,46.329L600.743,86.991C600.743,91.096 599.968,94.64 598.419,97.622C596.87,100.604 594.759,103.082 592.087,105.057C589.415,107.032 586.278,108.484 582.677,109.414C579.075,110.343 575.222,110.808 571.117,110.808C564.069,110.808 558.531,109.859 554.504,107.961C550.476,106.064 548.462,102.985 548.462,98.725C548.462,96.944 548.83,95.376 549.566,94.02C550.302,92.665 551.135,91.638 552.064,90.941C554.31,92.181 556.847,93.226 559.674,94.078C562.501,94.93 565.424,95.356 568.445,95.356C572.627,95.356 575.958,94.659 578.436,93.265C580.915,91.871 582.154,89.625 582.154,86.527L582.154,84.668C578.979,86.062 575.106,86.759 570.536,86.759C567.051,86.759 563.74,86.236 560.603,85.191C557.466,84.145 554.717,82.518 552.354,80.311C549.992,78.104 548.095,75.257 546.662,71.772C545.229,68.287 544.512,64.143 544.512,59.341C544.512,54.616 545.268,50.511 546.778,47.026C548.288,43.541 550.379,40.656 553.051,38.371C555.724,36.086 558.899,34.382 562.578,33.259C566.257,32.136 570.265,31.574 574.603,31.574ZM581.806,48.42C581.263,48.11 580.47,47.801 579.424,47.491C578.378,47.181 577.081,47.026 575.532,47.026C571.737,47.026 568.89,48.091 566.993,50.221C565.095,52.351 564.146,55.391 564.146,59.341C564.146,63.833 565.095,67.067 566.993,69.042C568.89,71.017 571.311,72.004 574.254,72.004C577.43,72.004 579.947,71.269 581.806,69.797L581.806,48.42ZM642.799,91.638C638.229,91.638 633.989,90.999 630.078,89.722C626.166,88.444 622.758,86.527 619.854,83.971C616.949,81.415 614.665,78.201 612.999,74.328C611.334,70.455 610.502,65.924 610.502,60.735C610.502,55.623 611.334,51.228 612.999,47.549C614.665,43.87 616.853,40.849 619.563,38.487C622.274,36.125 625.372,34.382 628.858,33.259C632.343,32.136 635.906,31.574 639.546,31.574C643.651,31.574 647.388,32.194 650.757,33.433C654.126,34.672 657.031,36.376 659.471,38.545C661.91,40.714 663.808,43.308 665.163,46.329C666.519,49.35 667.197,52.641 667.197,56.204C667.197,58.837 666.461,60.851 664.989,62.245C663.518,63.64 661.465,64.53 658.832,64.917L630.136,69.216C630.988,71.772 632.73,73.689 635.364,74.967C637.997,76.245 641.018,76.884 644.426,76.884C647.601,76.884 650.602,76.477 653.429,75.664C656.256,74.851 658.561,73.902 660.342,72.818C661.581,73.592 662.627,74.676 663.479,76.071C664.331,77.465 664.757,78.936 664.757,80.485C664.757,83.971 663.13,86.565 659.877,88.269C657.399,89.586 654.611,90.477 651.512,90.941C648.414,91.406 645.51,91.638 642.799,91.638ZM639.546,45.98C637.687,45.98 636.08,46.29 634.725,46.91C633.369,47.529 632.266,48.323 631.414,49.292C630.562,50.26 629.923,51.344 629.497,52.545C629.071,53.745 628.819,54.965 628.742,56.204L648.608,52.951C648.376,51.402 647.524,49.853 646.052,48.304C644.581,46.755 642.412,45.98 639.546,45.98ZM696.473,89.663C695.699,89.896 694.479,90.128 692.814,90.36C691.149,90.593 689.425,90.709 687.644,90.709C685.94,90.709 684.41,90.593 683.055,90.36C681.699,90.128 680.557,89.663 679.628,88.966C678.698,88.269 677.982,87.321 677.478,86.12C676.975,84.919 676.723,83.351 676.723,81.415L676.723,46.561C676.723,44.78 677.052,43.25 677.711,41.972C678.369,40.694 679.318,39.552 680.557,38.545C681.796,37.538 683.326,36.628 685.146,35.815C686.966,35.002 688.922,34.285 691.013,33.666C693.104,33.046 695.273,32.562 697.519,32.213C699.765,31.865 702.011,31.691 704.257,31.691C707.975,31.691 710.918,32.407 713.087,33.84C715.256,35.273 716.34,37.616 716.34,40.869C716.34,41.953 716.185,43.018 715.875,44.063C715.565,45.109 715.178,46.058 714.713,46.91C713.087,46.91 711.422,46.987 709.718,47.142C708.014,47.297 706.349,47.529 704.722,47.839C703.096,48.149 701.566,48.478 700.133,48.827C698.7,49.175 697.48,49.582 696.473,50.047L696.473,89.663Z"}),F.createElement("path",{className:"css",d:"M586.337,162.306C584.4,162.306 582.561,162.616 580.818,163.236C579.075,163.855 577.565,164.765 576.287,165.966C575.009,167.166 573.983,168.657 573.208,170.439C572.434,172.22 572.047,174.311 572.047,176.712C572.047,181.514 573.421,185.116 576.171,187.517C578.92,189.918 582.27,191.119 586.22,191.119C588.544,191.119 590.558,190.847 592.262,190.305C593.966,189.763 595.476,189.182 596.793,188.563C598.342,189.647 599.503,190.828 600.278,192.106C601.052,193.384 601.44,194.914 601.44,196.695C601.44,199.871 599.929,202.33 596.909,204.072C593.888,205.815 589.706,206.686 584.361,206.686C579.482,206.686 575.067,205.97 571.117,204.537C567.167,203.104 563.779,201.09 560.952,198.496C558.125,195.901 555.937,192.784 554.388,189.143C552.838,185.503 552.064,181.476 552.064,177.061C552.064,171.949 552.897,167.476 554.562,163.642C556.227,159.809 558.492,156.652 561.358,154.174C564.224,151.695 567.535,149.837 571.291,148.597C575.048,147.358 579.017,146.738 583.2,146.738C588.776,146.738 593.075,147.745 596.095,149.759C599.116,151.773 600.626,154.367 600.626,157.543C600.626,159.015 600.278,160.389 599.581,161.667C598.884,162.945 598.071,164.049 597.141,164.978C595.824,164.359 594.237,163.759 592.378,163.178C590.519,162.597 588.505,162.306 586.337,162.306ZM657.786,188.098C657.786,193.984 655.579,198.593 651.164,201.923C646.749,205.254 640.243,206.919 631.646,206.919C628.393,206.919 625.372,206.686 622.584,206.222C619.796,205.757 617.414,205.041 615.439,204.072C613.464,203.104 611.915,201.884 610.792,200.413C609.669,198.941 609.107,197.199 609.107,195.185C609.107,193.326 609.495,191.758 610.269,190.48C611.044,189.202 611.973,188.137 613.057,187.285C615.304,188.524 617.879,189.628 620.783,190.596C623.688,191.564 627.038,192.048 630.833,192.048C633.234,192.048 635.073,191.699 636.351,191.002C637.629,190.305 638.268,189.376 638.268,188.214C638.268,187.13 637.803,186.278 636.874,185.658C635.945,185.039 634.396,184.535 632.227,184.148L628.742,183.451C622.003,182.134 616.988,180.062 613.696,177.235C610.405,174.408 608.759,170.361 608.759,165.095C608.759,162.229 609.379,159.634 610.618,157.311C611.857,154.987 613.6,153.051 615.846,151.502C618.092,149.953 620.783,148.752 623.92,147.9C627.057,147.048 630.523,146.622 634.318,146.622C637.184,146.622 639.875,146.835 642.392,147.261C644.91,147.687 647.098,148.326 648.957,149.178C650.815,150.03 652.287,151.134 653.371,152.489C654.456,153.845 654.998,155.452 654.998,157.311C654.998,159.092 654.669,160.622 654.01,161.9C653.352,163.178 652.519,164.243 651.512,165.095C650.893,164.707 649.963,164.301 648.724,163.875C647.485,163.449 646.13,163.061 644.658,162.713C643.186,162.364 641.695,162.074 640.185,161.842C638.675,161.609 637.3,161.493 636.061,161.493C633.505,161.493 631.53,161.784 630.136,162.364C628.742,162.945 628.044,163.855 628.044,165.095C628.044,165.947 628.432,166.644 629.206,167.186C629.981,167.728 631.452,168.231 633.621,168.696L637.223,169.509C644.658,171.213 649.944,173.556 653.081,176.538C656.218,179.52 657.786,183.373 657.786,188.098ZM714.946,188.098C714.946,193.984 712.738,198.593 708.324,201.923C703.909,205.254 697.403,206.919 688.806,206.919C685.553,206.919 682.532,206.686 679.744,206.222C676.955,205.757 674.574,205.041 672.599,204.072C670.624,203.104 669.075,201.884 667.952,200.413C666.829,198.941 666.267,197.199 666.267,195.185C666.267,193.326 666.654,191.758 667.429,190.48C668.203,189.202 669.133,188.137 670.217,187.285C672.463,188.524 675.039,189.628 677.943,190.596C680.847,191.564 684.197,192.048 687.992,192.048C690.393,192.048 692.233,191.699 693.511,191.002C694.789,190.305 695.428,189.376 695.428,188.214C695.428,187.13 694.963,186.278 694.034,185.658C693.104,185.039 691.555,184.535 689.387,184.148L685.901,183.451C679.163,182.134 674.148,180.062 670.856,177.235C667.564,174.408 665.919,170.361 665.919,165.095C665.919,162.229 666.538,159.634 667.777,157.311C669.017,154.987 670.759,153.051 673.005,151.502C675.252,149.953 677.943,148.752 681.08,147.9C684.217,147.048 687.683,146.622 691.478,146.622C694.343,146.622 697.035,146.835 699.552,147.261C702.069,147.687 704.257,148.326 706.116,149.178C707.975,150.03 709.447,151.134 710.531,152.489C711.615,153.845 712.157,155.452 712.157,157.311C712.157,159.092 711.828,160.622 711.17,161.9C710.512,163.178 709.679,164.243 708.672,165.095C708.053,164.707 707.123,164.301 705.884,163.875C704.645,163.449 703.289,163.061 701.818,162.713C700.346,162.364 698.855,162.074 697.345,161.842C695.834,161.609 694.46,161.493 693.22,161.493C690.665,161.493 688.689,161.784 687.295,162.364C685.901,162.945 685.204,163.855 685.204,165.095C685.204,165.947 685.591,166.644 686.366,167.186C687.14,167.728 688.612,168.231 690.781,168.696L694.382,169.509C701.818,171.213 707.104,173.556 710.241,176.538C713.377,179.52 714.946,183.373 714.946,188.098Z"})),mA=()=>t.jsx("div",{children:t.jsxs("div",{className:"pad-t-8 flow",children:[t.jsxs("div",{className:"grid-2 gap-12 start stack-laptop",children:[t.jsx("div",{children:t.jsx(fA,{className:"badger-css"})}),t.jsxs("div",{children:[t.jsx("h1",{className:"mar-b-none",children:"Modern, minimal CSS presets"}),t.jsx("h2",{className:"mar-t-none small mar-b-2",children:"Powered by Badgers"}),t.jsx("p",{className:"larger",children:"Badger CSS is my personal collection of CSS utilities and styling for forms and other commonly used components."}),t.jsxs("p",{className:"large",children:["It can be used by itself as a good starting point for any web site.  It also provides the basic styles used by "," ",t.jsx("a",{href:"https://badgerpower.com/badger-form/",target:"_blank",rel:"noreferrer",children:"Badger Form"})," ","and"," ",t.jsx("a",{href:"https://badgerpower.com/badger-react-ui/",target:"_blank",rel:"noreferrer",children:"Badger React UI"})]})]})]}),t.jsxs("p",{className:"large",children:["You've probably heard of CSS ",t.jsx("b",{children:"reset"})," stylesheets that provide sensible defaults for HTML elements to smooth out some of the inconsistencies between browsers.  And no doubt you're aware of the plethora of fully-featured CSS ",t.jsx("b",{children:"toolkits"})," that implement all manner of styles for UI components."]}),t.jsxs("p",{className:"large",children:["Badger CSS sits somewhere between the two.  It provides some sensible"," ",t.jsx("b",{children:"presets"})," for HTML elements that you can use out of the box and expect to get reasonable results.  It's highly configurable and is really designed to be a starting point for building your own CSS stylesheets, design systems and UI toolkits."]}),t.jsx("h2",{children:"Features"}),t.jsxs("div",{className:"grid-2 gap-4 stack-laptop",children:[t.jsxs("div",{className:"surface-5 pad-a-4 border bdr-1",children:[t.jsx("h3",{children:"Cool Colors"}),t.jsxs("ul",{className:"pad-l-4",children:[t.jsxs("li",{children:["Hand-crafted palette with ",t.jsx(I5,{text:"13 color ranges"})," ","and 3 greyscales, each containing 21 color stops from none more black to a whiter shade of pale."]}),t.jsxs("li",{children:["Easily adapt the palette to match your ",t.jsx(Up,{}),"."]}),t.jsxs("li",{children:["Create and your own custom palette using ",t.jsx("a",{href:"https://abw.github.io/badger-color/",children:"Badger Color"})," and"," ",t.jsx(E5,{text:"import it"})," into Badger CSS."]})]})]}),t.jsxs("div",{className:"surface-5 pad-a-4 border bdr-1",children:[t.jsx("h3",{children:"Useful Utilities"}),t.jsxs("ul",{className:"pad-l-4",children:[t.jsx("li",{children:"Utility classes for the things you need to do most often."}),t.jsx("li",{children:"Useful for prototyping or ad-hoc styling."}),t.jsx("li",{children:"CSS custom properties for applying them into your own custom styles."}),t.jsx("li",{children:"All configurable by SASS variables."})]})]}),t.jsxs("div",{className:"surface-5 pad-a-4 border bdr-1",children:[t.jsx("h3",{children:"Fantastic Forms"}),t.jsxs("ul",{className:"pad-l-4",children:[t.jsxs("li",{children:[t.jsx("i",{children:"Mostly Classless"})," styling providing sensible and modern defaults for HTML forms."]}),t.jsx("li",{children:"Minimal additional markup required."}),t.jsx("li",{children:"Easily modified using CSS properties and/or SASS variables."})]})]}),t.jsxs("div",{className:"surface-5 pad-a-4 border bdr-1",children:[t.jsx("h3",{children:"Cunning Components"}),t.jsxs("ul",{className:"pad-l-4",children:[t.jsx("li",{children:"A basic set of components that you just can't live without."}),t.jsx("li",{children:"Different variations of the basic styles."}),t.jsx("li",{children:"Automatically adapt to any color range or brand colors."}),t.jsx("li",{children:"Configurable and customisable, using CSS properties and/or SASS variables."})]})]})]}),t.jsxs("div",{className:"grid-2 gap-4",children:[t.jsx(dr,{to:"/getting-started/installation",text:"Getting Started",className:"brand button"}),t.jsx(dr,{to:"/colors/demo",text:"Color Demo",className:"brand button"}),t.jsx(dr,{to:"/getting-started/good",text:"What's Good?",className:"brand button"}),t.jsx(dr,{to:"/getting-started/bad",text:"What's Bad?",className:"brand button"})]})]})}),gA=Object.freeze(Object.defineProperty({__proto__:null,default:mA},Symbol.toStringTag,{value:"Module"})),vA=`<div class="flex gap-4 stack-laptop">
  <div class="split-3 inverse blue pad-a-2 bdr-1 font-mono text-center">
    split-3
  </div>
  <div class="split-2-3 inverse teal pad-a-2 bdr-1 font-mono text-center">
    split-2-3
  </div>
</div>`,xA=()=>t.jsxs("div",{className:"flow",children:[t.jsx("h1",{children:"Flexbox Stacking"}),t.jsxs("p",{children:['I "optimised" the flex stacking rules and broke the case where the child elements have an explicit width, e.g. when using'," ",t.jsx("code",{children:"split-N"})," classes.  These should stack when the screen width is less than 960px.  With my optimisation in place they didn't but they should now."]}),t.jsx(S,{html:vA,caption:"Even Splits"})]}),bA=Object.freeze(Object.defineProperty({__proto__:null,default:xA},Symbol.toStringTag,{value:"Module"})),yA=`<details class="border lined">
  <summary>Outer 1</summary>
  <details>
    <summary>Inner 1</summary>
    Inner 1 Content
  </details>
</details>

<div class="details border lined mar-t-4">
  <div class="summary">Outer 2</div>
  <div class="body">
    <div class="details">
      <div class="summary">Inner 2</div>
      <div class="body">
        Inner 2 Content
      </div>
    </div>
  </div>
</div>`,wA=()=>t.jsxs("div",{className:"flow",children:[t.jsx("h1",{children:"Nested Details"}),t.jsx("p",{children:"When details are nested inside each other the icons are wrong."}),t.jsx(S,{html:yA,caption:"Nested Details"})]}),jA=Object.freeze(Object.defineProperty({__proto__:null,default:wA},Symbol.toStringTag,{value:"Module"})),CA=`<div class="block-left width-12rem border pad-2">
  Block left
</div>
<div class="block-center width-12rem border pad-2 mar-t-4">
  Block center
</div>
<div class="block-right width-12rem border pad-2 mar-t-4">
  Block right
</div>
`,kA=`<div class="text-left border pad-2 mar-b-2">
  Text on the left
</div>
<div class="text-center border pad-2 mar-b-2">
  Text in the center
</div>
<div class="text-right border pad-2">
  Text on the right
</div>`,SA=`<div class="text-right border pad-4">
  Text on the right
  <div class="text-left border pad-2 mar-v-2">
    Text on the left
  </div>
  Text on the right
</div>`,TA=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Alignment"}),t.jsx("h2",{children:"Text Alignment"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"text-left"}),", ",t.jsx("code",{children:"text-center"})," and"," ",t.jsx("code",{children:"text-right"})," CSS classes to set the text alignment."]}),t.jsx(S,{html:kA,caption:"Text Alignment",expand:!0}),t.jsxs("p",{children:["Text is aligned left by default making the ",t.jsx("code",{children:"text-left"})," ","class ",t.jsx("em",{children:"mostly"})," redundant.  However it can be useful to reset the alignment to the left for a block that would otherwise be aligned centrally or to the right"]}),t.jsx(S,{html:SA,caption:"Text Left",expand:!0}),t.jsx("h2",{children:"Block Alignment"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"block-left"}),", ",t.jsx("code",{children:"block-center"})," and"," ",t.jsx("code",{children:"block-right"})," CSS classes to align a block to the left, in the center, or on the right, respectively."]}),t.jsxs("p",{children:["You'll need to set a block width to stop it from expanding to fill the full width of the parent element.  You can do that using one of the"," ",t.jsx(M5,{})," utility classes."]}),t.jsx(S,{html:CA,caption:"Block Alignment",expand:!0})]}),NA=Object.freeze(Object.defineProperty({__proto__:null,default:TA},Symbol.toStringTag,{value:"Module"})),LA=`<div class="border pad-4">
  This element has a border.
</div>
`,_A=`<div class="grid-1 gap-2">
  <div class="border bdw-1 pad-2">
    Border width 1
  </div>
  <div class="border bdw-2 pad-2">
    Border width 2
  </div>
  <div class="border bdw-3 pad-2">
    Border width 3
  </div>
  <div class="border bdw-4 pad-2">
    Border width 4
  </div>
  <div class="border bdw-5 pad-2">
    Border width 5
  </div>
  <div class="border bdw-6 pad-2">
    Border width 6
  </div>
  <div class="border bdw-8 pad-2">
    Border width 8
  </div>
  <div class="border bdw-10 pad-2">
    Border width 10
  </div>
</div>`,$A=`<div class="grid-2 gap-2">
  <div class="bdc-10 border pad-4">
    Border color 10
  </div>
  <div class="bdc-20 border pad-4">
    Border color 20
  </div>
  <div class="bdc-30 border pad-4">
    Border color 30
  </div>
  <div class="bdc-40 border pad-4">
    Border color 40
  </div>
  <div class="bdc-50 border pad-4">
    Border color 50
  </div>
  <div class="bdc-60 border pad-4">
    Border color 60
  </div>
  <div class="bdc-70 border pad-4">
    Border color 70
  </div>
  <div class="bdc-80 border pad-4">
    Border color 80
  </div>
  <div class="red bdc-50 border pad-4">
    Red border color 50
  </div>
  <div class="green bdc-50 border pad-4">
    Green border color 50
  </div>
  <div class="blue bdc-50 border pad-4">
    Blue border color 50
  </div>
  <div class="violet bdc-50 border pad-4">
    Violet border color 50
  </div>
</div>
<div class="orange bdc-70 bdd-30 border pad-4 mar-t-2">
  Orange border color 70 light / 30 dark
</div>
`,IA=`<div class="border pad-4 mar-b-2">
  This element has a border with the default radius.
  By default there is none, none more radius.
</div>
<div class="grid-2 gap-2">
  <div class="bdr-1 border pad-4">
    This element has a border with 1 unit of radius.
  </div>
  <div class="bdr-2 border pad-4">
    This element has a border with 2 units of radius.
  </div>
  <div class="bdr-3 border pad-4">
    This element has a border with 3 units of radius.
  </div>
  <div class="bdr-4 border pad-4">
    This element has a border with 4 units of radius.
  </div>
  <div class="bdr-5 border pad-4">
    This element has a border with 5 units of radius.
  </div>
  <div class="bdr-6 border pad-4">
    This element has a border with 6 units of radius.
  </div>
  <div class="bdr-8 border pad-4">
    This element has a border with 8 units of radius.
  </div>
  <div class="bdr-10 border pad-4">
    This element has a border with 10 units of radius.
  </div>
</div>
`,EA=`<div class="grid-3 gap-4 pad-t-2">
  <button class="brand solid">default</button>
  <button class="brand solid bdr-0">bdr-0</button>
  <button class="brand solid square">square</button>
</div>
<div class="grid-3 gap-4 pad-t-2">
  <input type="text" value="default">
  <input type="text" value="bdr-0" class="bdr-0">
  <input type="text" value="square" class="square">
</div>
`,MA=`<div class="bdr-6 surface-1 pad-2 border grid-1 gap-2">
  <div class="bdr-t-4 bdr-b-0 surface-3 pad-2 border grid-2 gap-2 shadow-2">
    <div class="bdr-0 bdr-tl-2 surface-5 border pad-2 shadow-1">
      A
    </div>
    <div class="bdr-0 bdr-tr-2 surface-5 border pad-2 shadow-1">
      B
    </div>
  </div>
  <div class="bdr-b-4 bdr-t-0 surface-3 pad-2 border grid-2 gap-2 shadow-2">
    <div class="bdr-0 bdr-bl-2 surface-5 border pad-2 shadow-1">
      C
    </div>
    <div class="bdr-0 bdr-br-2 surface-5 border pad-2 shadow-1">
      D
    </div>
  </div>
</div>`,AA=`<style>
  .frame {
    --border-width:  3px;
    --border-color:  var(--blue-50);
    --border-radius: 10px;
  }
  .rounder {
    --border-radius: 20px;
  }
  .wider {
    --border-width:  6px;
  }
  .danger {
    --border-color: var(--red-50);
  }
</style>
<div>
  <div class="frame border pad-4 mar-b-4">
    This element has a wide border.
  </div>
  <div class="rounder frame border pad-4 mar-b-4">
    This has a rounder border.
  </div>
  <div class="wider frame border pad-4 mar-b-4">
    This has a wider border.
  </div>
  <div class="wider rounder danger frame border pad-4 mar-b-4">
    This has a wider rounder red border.
  </div>
</div>
<div class="inverse red pad-4" style="--border-radius: 20px">
  If you don't have the <code>border</code> or one of the
  <code>bdr-N</code> classes then setting the
  <code>--border-radius</code> property won't have any effect.
</div>
<div class="inverse green radius pad-4 mar-t-4" style="--border-radius: 20px">
  Add the <code>radius</code> class if you need to force the
  <code>--border-radius</code> property to take effect.
</div>
`,PA=`<div class="grid-1 gap-4">
  <div class="alert bdr-4">
    <div class="headline">Alert!</div>
    An alert with border radius of 4 units.
  </div>
  <div class="grid-2">
    <button class="solid red bdr-l-5 bdr-r-0">Left</button>
    <button class="solid green bdr-r-5 bdr-l-0">Right</button>
  </div>
  <table class="bdr-r-4 lined striped brand even-2">
    <tbody>
      <tr><th>Nigel Tufnel</th><td>Guitar</td></tr>
      <tr><th>David St.Hubbins</th><td>Guitar</td></tr>
      <tr><th>Derek Smalls</th><td>Bass</td></tr>
      <tr><th>Viv Savage</th><td>Keyboards</td></tr>
      <tr><th>Mick Shrimpton</th><td>Drums</td></tr>
    </tbody>
  </table>
  <div class="surface-1 bdr-6 pad-2">
    <div class="surface-3 bdr-4 pad-4 mar-b-6 shadow-2">
      A surface with radius of 4 units inside
      a surface with radius of 6 units.
    </div>
    <div class="surface-3 bdr-4 pad-2 shadow-1">
      <div class="surface-5 bdr-2 pad-4 mar-b-2 shadow-1">
        A surface with radius of 2 units inside
        a surface with radius of 4 units inside
        a surface with radius of 6 units.
      </div>
      <div class="surface-5 bdr-2 pad-4 shadow-1">
        Ditto
      </div>
    </div>
  </div>
</div>
`,RA=`// define your own $border-width-values...
$border-width-values: 1, 2, 3, 5, 8, 13, 21, 34;
// ...and/or set the $border-width-prefix...
$border-width-prefix: 'br-wd';

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,OA=`// define your own $border-radius-values...
$border-radius-values: 1, 2, 3, 5, 8, 13, 21, 34;
// ...and/or set the $border-width-prefix...
$border-radius-prefix: 'br-rd';

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,FA=({properties:e})=>t.jsxs("table",{className:"brand celled striped properties wide",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Property"}),t.jsx("th",{children:"Default"}),t.jsx("th",{children:"Description"})]})}),t.jsx("tbody",{children:e.map(n=>t.jsxs("tr",{children:[t.jsx("td",{className:"key nowrap",children:t.jsx("code",{children:n[0]})}),t.jsx("td",{className:"nowrap",children:n[1]}),t.jsx("td",{children:n[2]})]},n[0]))})]}),BA=({sets:e})=>t.jsx("div",{className:`grid-${e.length} gap-8 stack-desktop mar-b-8`,children:e.map(n=>t.jsxs("div",{children:[t.jsx("h4",{className:"mar-b-2",children:n.title}),t.jsx(FA,{properties:n.properties}),!!n.notes&&t.jsx("div",{className:"smallish info alert",children:n.notes})]},n.title))}),DA=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Borders"}),t.jsx("h2",{children:"Border Class"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"border"})," CSS class to an element to give it a border."]}),t.jsx(S,{html:LA,caption:"Border",expand:!0}),t.jsx("h2",{children:"Border Width"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"bdw-N"})," CSS class to set the border width, where"," ",t.jsx("code",{children:"N"})," is in pixel units."]}),t.jsx(S,{html:_A,caption:"Border Width",expand:!0}),t.jsxs("div",{className:"grid-2 gap-8 stack-desktop",children:[t.jsxs("div",{className:"wide",children:[t.jsxs("p",{children:["The pre-defined values for ",t.jsx("code",{children:"N"})," are"," ",t.jsx("code",{children:"0"}),", ",t.jsx("code",{children:"1"}),", ",t.jsx("code",{children:"2"}),", ",t.jsx("code",{children:"3"}),","," ",t.jsx("code",{children:"4"}),", ",t.jsx("code",{children:"5"}),", ",t.jsx("code",{children:"6"}),", ",t.jsx("code",{children:"8"})," and"," ",t.jsx("code",{children:"10"}),"."]}),t.jsxs("p",{children:["You can set the ",t.jsx("code",{children:"$border-width-values"})," SCSS variable if you want to define a different set of values. You can also use the ",t.jsx("code",{children:"$border-width-prefix"})," to define a different prefix for the border width classes if you don't like ",t.jsx("code",{children:"bdw"}),"."]}),t.jsxs("p",{children:["In the example shown here the generated CSS classes would be"," ",t.jsx("code",{children:"br-wd-1"}),", ",t.jsx("code",{children:"br-wd-2"}),","," ",t.jsx("code",{children:"br-wd-3"}),", ",t.jsx("code",{children:"br-wd-5"})," and so on."]})]}),t.jsx(_e,{code:RA,caption:"Custom Border Widths",language:"scss",className:"mar-b-8",expand:!0})]}),t.jsx("h2",{children:"Border Color"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"bdc-N"})," CSS class to set the border color, where"," ",t.jsx("code",{children:"N"})," is a color stop (0, 5, 10, etc) for the current color range.  Use ",t.jsx("code",{children:"bdd-N"})," to set a different color for dark mode."]}),t.jsx(S,{html:$A,caption:"Border Color"}),t.jsx("h2",{children:"Border Radius"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"bdr-N"})," classes to set the radius of borders. The ",t.jsx("code",{children:"-N"})," multiplier is a multiple of the base unit radius (0.25rem by default)."]}),t.jsx(S,{html:IA,caption:"Border Radius",expand:!0}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"bdr-0"})," class can be used to ",t.jsx("i",{children:"explicitly"})," set the border radius to 0. The ",t.jsx("code",{children:"square"})," class is an alias for"," ",t.jsx("code",{children:"bdr-0"})," with the added benefit of having the"," ",t.jsx("code",{children:"!important"})," flag set for when you really need to drive the point home."]}),t.jsx("p",{children:"They can be used to remove the corner radius from components which have them by default, like buttons and form fields."}),t.jsx(S,{html:EA,caption:"Square Corners",expand:!0}),t.jsxs("div",{className:"grid-2 gap-8 stack-desktop",children:[t.jsxs("div",{className:"wide",children:[t.jsxs("p",{children:["The pre-defined values for ",t.jsx("code",{children:"N"})," are"," ",t.jsx("code",{children:"0"}),", ",t.jsx("code",{children:"1"}),", ",t.jsx("code",{children:"2"}),", ",t.jsx("code",{children:"3"}),","," ",t.jsx("code",{children:"4"}),", ",t.jsx("code",{children:"5"}),", ",t.jsx("code",{children:"6"}),", ",t.jsx("code",{children:"8"})," and"," ",t.jsx("code",{children:"10"}),"."]}),t.jsxs("p",{children:["You can set the ",t.jsx("code",{children:"$border-radius-values"})," SCSS variable if you want to define a different set of values. You can also use the ",t.jsx("code",{children:"$border-radius-prefix"})," to define a different prefix for the border radius classes if you don't like ",t.jsx("code",{children:"bdr"}),"."]}),t.jsxs("p",{children:["In the example shown here the generated CSS classes would be"," ",t.jsx("code",{children:"br-rd-1"}),", ",t.jsx("code",{children:"br-rd-2"}),","," ",t.jsx("code",{children:"br-rd-3"}),", ",t.jsx("code",{children:"br-rd-5"})," and so on."]})]}),t.jsx(_e,{code:OA,caption:"Custom Border Radius",language:"scss",className:"mar-b-8",expand:!0})]}),t.jsx("h2",{children:"Border Radius Corners"}),t.jsx("p",{children:"You can independently set the radius for different corners using these classes."}),t.jsxs("div",{className:"grid-2 gap-8 stack-desktop",children:[t.jsxs("table",{className:"brand border lined striped mar-b-8",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Class"}),t.jsx("th",{children:"Description"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"bdr-t-N"})}),t.jsx("td",{children:"Top left and top right corner radius"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"bdr-b-N"})}),t.jsx("td",{children:"Bottom left and bottom right corner radius"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"bdr-l-N"})}),t.jsx("td",{children:"Top left and bottom left corner radius"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"bdr-r-N"})}),t.jsx("td",{children:"Top right and bottom right corner radius"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"bdr-tl-N"})}),t.jsx("td",{children:"Top left corner radius"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"bdr-tr-N"})}),t.jsx("td",{children:"Top right corner radius"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"bdr-bl-N"})}),t.jsx("td",{children:"Bottom left corner radius"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"bdr-br-N"})}),t.jsx("td",{children:"Bottom right corner radius"})]})]})]}),t.jsx("div",{children:t.jsxs(Zr,{children:["If you set a custom ",t.jsx("code",{children:"$border-radius-prefix"})," as shown above then your CSS classes will start with your chosen prefix instead of ",t.jsx("code",{children:"bdr"})," as shown here."]})})]}),t.jsx(S,{html:MA,caption:"Border Radius Corners",expand:!0}),t.jsx("h2",{children:"No Border Required!"}),t.jsxs("p",{children:["You don't need to have a border displayed to set the border radius. The ",t.jsx("code",{children:"bdr-N"})," classes can be used to set the border radius on various components."]}),t.jsx(S,{html:PA,caption:"Radius Components",expand:!0}),t.jsx("h2",{children:"Border Properties"}),t.jsxs("p",{children:["The following properties are used to define the border style. Note that the ",t.jsx("code",{children:"--border-radius"})," is only applied to elements that use either the ",t.jsx("code",{children:"border"})," class or one of the ",t.jsx("code",{children:"bdr-N"})," classes.  But you can add the"," ",t.jsx("code",{children:"radius"})," class to make it sit up and take notice of your"," ",t.jsx("code",{children:"--border-radius"})," custom property."]}),t.jsx(BA,{sets:[{title:"Defaults",properties:[["--border-width",t.jsx("code",{children:"1px"},"1px"),"Border width"],["--border-style",t.jsx("code",{children:"solid"},"solid"),t.jsxs("span",{children:["Border style: ",t.jsx("code",{children:"solid"}),", ",t.jsx("code",{children:"dotted"}),", ",t.jsx("code",{children:"dashed"}),", etc."]},"desc")],["--border-radius",t.jsx("code",{children:"var(--unit-radius)"},"radius"),"Border radius"],["--border-color",t.jsx("code",{children:"var(--color-75)"},"color"),"Border color from current color range"]]},{title:"Dark Theme",properties:[["--border-color",t.jsx("code",{children:"var(--color-25)"},"color"),"Border color from current color range"]]}]}),t.jsx("h2",{children:"Setting Custom Properties"}),t.jsx(S,{html:AA,caption:"Custom Border Style",expand:!0})]}),zA=Object.freeze(Object.defineProperty({__proto__:null,default:DA},Symbol.toStringTag,{value:"Module"})),Jv=`// define your own breakpoints...
$breakpoints: (
  'mobile':     30rem,
  'tablet':     50rem,
  'laptop':     70rem,
  'desktop':    80rem,
  'widescreen': 90rem
) !default;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";`,mf={mobile:30,tablet:45,laptop:60,desktop:75,widescreen:90},WA=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Breakpoints"}),t.jsx("h2",{children:"Breakpoint Names"}),t.jsxs(re,{children:[t.jsx("p",{children:"The breakpoint names and their corresponding widths in rems and pixels (assuming 1rem = 16px) are shown below."}),t.jsxs("p",{children:["You can set the ",t.jsx("code",{children:"$breakpoints"})," SASS variable if you want to define a different set of breakpoints."]})]}),t.jsx(Ot,{code:Jv,caption:"Custom Breakpoints",language:"scss",expand:!0,children:t.jsxs("table",{className:"brand celled striped properties small wide mar-b-2",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Class"}),t.jsx("th",{children:"Rems"}),t.jsx("th",{children:"Pixels"})]})}),t.jsx("tbody",{children:Object.entries(mf).map(([e,n])=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:e})}),t.jsxs("td",{children:[n,"rem"]}),t.jsxs("td",{children:[n*16,"px"]})]},e))})]})}),t.jsx("h2",{children:"Breakpoint Widths"}),t.jsxs(re,{children:[t.jsxs("div",{children:[t.jsx("p",{children:"You can add one of the breakpoint classes to an element to give it a maximum width."}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"block-center"})," class to center a block, or ",t.jsx("code",{children:"block-right"})," to right align it."]})]}),t.jsx(Zr,{title:"Try it out!",children:"Try resizing your browser window and see how the elements below respond."})]}),t.jsx("div",{className:"mobile surface-2 border pad-4",children:t.jsx("h3",{className:"font-mono",children:".mobile"})}),t.jsx("div",{className:"tablet surface-2 border pad-4",children:t.jsx("h3",{className:"font-mono",children:".tablet"})}),t.jsx("div",{className:"laptop surface-2 border pad-4",children:t.jsx("h3",{className:"font-mono",children:".laptop"})}),t.jsx("div",{className:"desktop surface-2 border pad-4",children:t.jsx("h3",{className:"font-mono",children:".desktop"})}),t.jsx("div",{className:"widescreen surface-2 border pad-4",children:t.jsx("h3",{className:"font-mono",children:".widescreen"})}),t.jsx("div",{className:"mobile block-center surface-2 border pad-4",children:t.jsx("h3",{className:"font-mono",children:".mobile.block-center"})}),t.jsx("div",{className:"tablet block-right surface-2 border pad-4",children:t.jsx("h3",{className:"font-mono",children:".tablet.block-right"})})]}),HA=Object.freeze(Object.defineProperty({__proto__:null,BreakpointRems:mf,default:WA},Symbol.toStringTag,{value:"Module"})),UA=`<div class="columns-2">
  <p>
    If you were to have something written
    as your epitaph... "Here lies David
    St. Hubbins... and why not?" You feel
    that sums up your... your life? No,
    it's the first thing I could think of.
    It doesn't sum up anything, really.
  </p>
  <p>
    I'm a real fish nut. I really like fish...
    What kind of fish? Well, in the United
    States, you have cod... I like cod. And
    I love tuna... those little cans you've
    got here... tuna fish... no bones!
  </p>
  <p>
    If you could not play rock'n roll, what
    would you do? Well, I suppose I could,
    uh, work in a shop of some kind or...
    or do uh... freelance... selling of some
    sort of...uh... product, you know... A
    salesman, like, maybe in a haberdasher,
    or maybe like a... uh a chapeau shop, or
    something... you know, like: "Would you...
    what size do you wear, sir?" and then you
    answer me. Uh... seven and a quarter.
    "I think we have that...", you see,
    something like that I could do. "No! We're
    all out, do you wear black?", see, that
    sort of thing, I think I could probably
    muster up. Yeah, do you think you'd be
    happy doing that? Well, I don't know,
    wh-wh-what are the hours?
  </p>
</div>`,GA=`<div class="columns-3">
  <p>
    If you were to have something written
    as your epitaph... "Here lies David
    St. Hubbins... and why not?" You feel
    that sums up your... your life? No,
    it's the first thing I could think of.
    It doesn't sum up anything, really.
  </p>
  <p>
    I'm a real fish nut. I really like fish...
    What kind of fish? Well, in the United
    States, you have cod... I like cod. And
    I love tuna... those little cans you've
    got here... tuna fish... no bones!
  </p>
  <p>
    If you could not play rock'n roll, what
    would you do? Well, I suppose I could,
    uh, work in a shop of some kind or...
    or do uh... freelance... selling of some
    sort of...uh... product, you know... A
    salesman, like, maybe in a haberdasher,
    or maybe like a... uh a chapeau shop, or
    something... you know, like: "Would you...
    what size do you wear, sir?" and then you
    answer me. Uh... seven and a quarter.
    "I think we have that...", you see,
    something like that I could do. "No! We're
    all out, do you wear black?", see, that
    sort of thing, I think I could probably
    muster up. Yeah, do you think you'd be
    happy doing that? Well, I don't know,
    wh-wh-what are the hours?
  </p>
</div>`,VA=`<div class="columns-2 gap-12">
  <p>
    David, David, every, every movie, in every cinema is about death; death
    sells!
  </p>
  <p>
      I think he's right, there is something
      about this, that's that's so black,
      it's like: "How much more black could
      this be?" and the answer is:
      "None, none... more black."
  </p>
</div>`,YA=`<div class="columns-2" style="--column-gap: 4rem">
  <p>
    Yeah, I like it, just been fooling
    about with it for a few months now,
    very delicate... Yeah, it's part of
    a... trilogy really, a musical
    trilogy I'm doing, in, D minor, which
    I always find is really the saddest
    of all keys really.
  </p>
  <p>
    I don't know why, but it makes people
    weep instantly. You play a "baaaaa...
    baaaaaa..." it's the horn part.
    "...baaaa, baaaaa...", yeah, just
    simple lines intertwining, you know
    very much like, I'm really influenced
    by Mozart and Bach, It's sort of in
    between those, really, it's like a
    Mach piece really.
  </p>
</div>`,ZA=`<div class="columns-2 stack-laptop">
  <p>
    If you were to have something written
    as your epitaph... "Here lies David
    St. Hubbins... and why not?" You feel
    that sums up your... your life? No,
    it's the first thing I could think of.
    It doesn't sum up anything, really.
  </p>
  <p>
    I'm a real fish nut. I really like fish...
    What kind of fish? Well, in the United
    States, you have cod... I like cod. And
    I love tuna... those little cans you've
    got here... tuna fish... no bones!
  </p>
  <p>
    If you could not play rock'n roll, what
    would you do? Well, I suppose I could,
    uh, work in a shop of some kind or...
    or do uh... freelance... selling of some
    sort of...uh... product, you know... A
    salesman, like, maybe in a haberdasher,
    or maybe like a... uh a chapeau shop, or
    something... you know, like: "Would you...
    what size do you wear, sir?" and then you
    answer me. Uh... seven and a quarter.
    "I think we have that...", you see,
    something like that I could do. "No! We're
    all out, do you wear black?", see, that
    sort of thing, I think I could probably
    muster up. Yeah, do you think you'd be
    happy doing that? Well, I don't know,
    wh-wh-what are the hours?
  </p>
</div>`,qA=()=>t.jsxs("div",{className:"flow",children:[t.jsx("h1",{children:"Columns"}),t.jsxs("p",{className:"columns-2 stack-desktop",children:["The ",t.jsx("code",{children:"columns-N"})," class can be added to split text into",t.jsx("code",{children:"N"})," columns, from 1 to 5."]}),t.jsx("h2",{className:"font-mono",children:"Two Columns"}),t.jsxs("p",{className:"columns-2 stack-desktop",children:["The ",t.jsx("code",{children:"columns-2"})," class splits the text into two columns."]}),t.jsx(S,{html:UA,caption:"Two Columns"}),t.jsx("h2",{className:"font-mono",children:"Three Columns"}),t.jsxs("p",{className:"columns-3 stack-desktop",children:["The ",t.jsx("code",{children:"columns-3"})," class splits the text into two columns. And so on..."]}),t.jsx(S,{html:GA,caption:"Three Columns"}),t.jsx("h2",{className:"font-mono",children:"Gaps"}),t.jsxs("p",{className:"columns-2 stack-desktop",children:["Add on of the ",t.jsx("code",{children:"gap-N"})," classes to define the gap between the columns (where ",t.jsx("code",{children:"N"})," is in units of 0.25rem from 1 to 16)."]}),t.jsx(S,{html:VA,caption:"Column Gap"}),t.jsx("h2",{className:"font-mono",children:"--column-gap"}),t.jsxs("p",{className:"columns-2 stack-desktop",children:["Alternately, you can set the ",t.jsx("code",{children:"--column-gap"})," CSS property to anything you like."]}),t.jsx(S,{html:YA,caption:"Gap Property"}),t.jsx("h2",{className:"font-mono",children:"Stacking"}),t.jsxs("p",{className:"columns-2 stack-desktop",children:["Add one of the ",t.jsx("code",{children:"stack-XXX"})," ",t.jsx(VS,{text:"breakpoint stacking"})," classes (e.g."," ",t.jsx("code",{children:"stack-mobile"}),", ",t.jsx("code",{children:"stack-tablet"}),", etc).  To have the columns reduce to one when the screen width is less than the breakpoint width."]}),t.jsx(S,{html:ZA,caption:"Stacking Columns"})]}),KA=Object.freeze(Object.defineProperty({__proto__:null,default:qA},Symbol.toStringTag,{value:"Module"})),QA=()=>t.jsxs("div",{className:"flow",children:[t.jsx("h1",{children:"Conform"}),t.jsxs("p",{className:"mar-b-none",children:["The ",t.jsx("code",{children:"conform"})," class creates a fluid container that stretches to the full width of the parent element with some padding on each side."]}),t.jsxs("p",{children:["By itself it's not particularly interesting.  There's really not much difference between this and defining an element with horizontal padding, e.g. using ",t.jsx("code",{children:"pad-h-8"}),"..."]}),t.jsxs("div",{className:"conform surface-2 border flow pad-v-6",children:[t.jsx("h3",{className:"font-mono",children:"conform"}),t.jsx("p",{className:"mar-b-none",children:"We're very lucky in the sense that we've got two visionaries in the band.  David and Nigel are both like, uh, like poets, you know, like Shelley or Byron, or people like that. The two totally distinct types of visionaries.  It's like fire and ice, basically, you see, and I feel my role in the band, is to be kind of in the middle of that, kind of like lukewarm water, in a sense."})]}),t.jsx("h2",{children:"Breakpoint Widths"}),t.jsxs("div",{className:"conform-mobile surface-2 border pad-v-6",children:[t.jsx("h3",{className:"font-mono",children:"conform-mobile"}),t.jsxs("p",{className:"mar-v-4",children:["...but it gets more interesting when you add a breakpoint suffix to set the conform width, e.g. ",t.jsx("code",{children:"conform-mobile"}),".  Now the conform will be centered and contained to the breakpoint size."]}),t.jsxs("p",{children:["Now you may be wondering how this is any different to using the"," ",t.jsx("code",{children:"mobile"})," class to set the width and"," ",t.jsx("code",{children:"block-center"})," to center it?  Well it all comes down to being able to break out of the box."]}),t.jsxs("section",{className:"popout blue bgc-30 fgc-90 pad-v-6",children:[t.jsx("h3",{className:"fgc-100 font-mono",children:"popout"}),t.jsx("p",{className:"mar-t-4 mar-b-none",children:"This is a popout section.  It's pushed out a bit wider than the normal conform."})]}),t.jsx("p",{className:"mar-v-4",children:"He did a twist on it. A twist and it... He did, he did. He turned it around. We shoulda thought of that. We were so close. I mean if we had all you guys tied up, that probably woulda been fine."}),t.jsxs("section",{className:"feature indigo bgc-30 fgc-90 pad-v-6",children:[t.jsx("h3",{className:"fgc-100 font-mono",children:"feature"}),t.jsx("p",{className:"mar-t-4 mar-b-none",children:"This is a feature section.  It's pushed out even further than the normal conform.  How much more wider could this be? And the answer is..."})]}),t.jsx("p",{className:"mar-v-4",children:"But it's, it's still a stupid cover. It's such a fine line between stupid and... and clever. Yeah, and clever. Just that little turnabout..."}),t.jsxs("section",{className:"full-width violet bgc-30 fgc-90 pad-h-8 pad-v-6",children:[t.jsx("h3",{className:"fgc-100 font-mono",children:"full-width"}),t.jsx("p",{className:"mar-t-4 mar-b-none",children:"...a lot wider!  This is a full-width section.  You see, most... most blokes, you know, will be playing at ten. You're on ten here... all the way up... all the way up... all the way up. You're on ten on your guitar...where can you go from there? Where? Nowhere. Exactly. What we do is if we need that extra... push over the cliff... you know what we do? Put it up to eleven. Eleven. Exactly. One louder."})]}),t.jsx("p",{className:"mar-v-4",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),t.jsxs("section",{className:"full-width conform-mobile purple bgc-30 fgc-90 pad-v-6",children:[t.jsx("h3",{className:"fgc-100 font-mono",children:"conform-mobile"}),t.jsx("p",{className:"mar-t-4 mar-b-none",children:"You can add a conform class to a full-width section and it will contain the conform.  So you get a full width background, but contained conform."})]}),t.jsx("p",{className:"mar-t-4 mar-b-none",children:`And I don't think that a sexy cover is the answer for why an album sells or doesn't sell because you tell me, the "White Album", what was that? There was nothing on that goddamn cover.`})]}),t.jsx("h2",{children:"Rem / px Widths"}),t.jsxs("div",{className:"conform-20rem surface-2 border pad-t-6",children:[t.jsx("h3",{className:"font-mono",children:"conform-20rem"}),t.jsxs("p",{className:"mar-t-4",children:["You can add any of the ",t.jsx("code",{children:"-Nrem"})," or ",t.jsx("code",{children:"-Npx"})," suffixes to the conform class and the conform will be set to that width. See the ",t.jsx(M5,{})," utilities page."]}),t.jsx("p",{className:"mar-v-4",children:`It's a matter of compromise, we made a joke, and it was a long time ago, they're making it like a big deal. That's true. You know, if we were serious and we said "yes she should be forced to sniff... smell the glove" then you'd have a point you know but it's all a joke, isn't it, we're making fun of that sort of thing. It is and it isn't, she should be made to smell it, but... But not you know over and over again.`}),t.jsx("section",{className:"full-width conform-20rem maroon bgc-30 fgc-90 pad-v-6",style:{"--link-text":"var(--color-70)","--link-hover":"var(--color-80)"},children:t.jsxs("p",{className:"mar-v-none large",children:["Shout out to"," ",t.jsx("a",{href:"https://www.youtube.com/watch?v=c13gpBrnGEw",children:"Kevin Powell"})," and"," ",t.jsx("a",{href:"https://ryanmulligan.dev/blog/layout-breakouts/",children:"Ryan Mulligan"})," ","for this technique!"]})})]})]}),XA=Object.freeze(Object.defineProperty({__proto__:null,default:QA},Symbol.toStringTag,{value:"Module"})),JA=`<div class="inline border pad-2">
  This is an <code>inline</code> div
</div>
<span class="block border pad-2 mar-t-4 mar-b-2">
  This is a <code>block</code> span.
</span>
<span class="inline-block border pad-2 mar-r-2">
  This is an <code>inline-block</code>
</span>
<span class="inline-block border pad-2 mar-r-2">
  This is an <code>inline-block</code>
</span>
`,eP=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Display"}),t.jsx("h2",{children:"Display Modes"}),t.jsxs(re,{children:[t.jsxs("p",{children:["The ",t.jsx("code",{children:"inline"}),", ",t.jsx("code",{children:"block"})," and"," ",t.jsx("code",{children:"inline-block"})," CSS classes can be used to set the"," ",t.jsx("code",{children:"display"})," mode.   These are useful when you have an element that would normally have one display type that you want displayed in a different way."]}),t.jsxs("p",{children:["See the ",t.jsx(yr,{})," and ",t.jsx(ns,{})," pages for information about using flex and grid display modes."]})]}),t.jsx(S,{html:JA,caption:"Display Modes",expand:!0})]}),nP=Object.freeze(Object.defineProperty({__proto__:null,default:eP},Symbol.toStringTag,{value:"Module"})),tP=`<div class="flex">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>`,rP=`<div class="flex top">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,sP=`<div class="flex middle">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,aP=`<div class="flex bottom">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,lP=`<div class="flex baseline">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,oP=`<div class="flex top gap-4">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,iP=`<div class="flex left gap-2">
  <h1 class="red bgc-50 fgc-90 pad-h-2">
    A
  </h1>
  <h1 class="brown bgc-50 fgc-90 pad-h-2">
    B
  </h1>
  <h1 class="orange bgc-50 fgc-90 pad-h-2">
    C
  </h1>
</div>
`,dP=`<div class="flex center gap-2">
  <h1 class="red bgc-50 fgc-90 pad-h-2">
    A
  </h1>
  <h1 class="brown bgc-50 fgc-90 pad-h-2">
    B
  </h1>
  <h1 class="orange bgc-50 fgc-90 pad-h-2">
    C
  </h1>
</div>
`,cP=`<div class="flex right gap-2">
  <h1 class="red bgc-50 fgc-90 pad-h-2">
    A
  </h1>
  <h1 class="brown bgc-50 fgc-90 pad-h-2">
    B
  </h1>
  <h1 class="orange bgc-50 fgc-90 pad-h-2">
    C
  </h1>
</div>
`,uP=`<div class="flex space">
  <h1 class="red bgc-50 fgc-90 pad-h-2">
    A
  </h1>
  <h1 class="brown bgc-50 fgc-90 pad-h-2">
    B
  </h1>
  <h1 class="orange bgc-50 fgc-90 pad-h-2">
    C
  </h1>
</div>
`,hP=`<div class="flex evenly">
  <h1 class="red bgc-50 fgc-90 pad-h-2">
    A
  </h1>
  <h1 class="brown bgc-50 fgc-90 pad-h-2">
    B
  </h1>
  <h1 class="orange bgc-50 fgc-90 pad-h-2">
    C
  </h1>
</div>
`,pP=`<div class="flex gap-2 red">
  <button>These</button>
  <button>buttons</button>
  <button>will</button>
  <button>not</button>
  <button>wrap</button>
  <button>which</button>
  <button>can</button>
  <button>be</button>
  <button>annoying</button>
</div>

<div class="flex wrap gap-2 green mar-t-4">
  <button>These</button>
  <button>buttons</button>
  <button>will</button>
  <button>wrap</button>
  <button>which</button>
  <button>makes</button>
  <button>me</button>
  <button>happy</button>
</div>
`,fP=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Flex"}),t.jsx("h2",{children:"Flex Classes"}),t.jsxs("p",{children:["Use the ",t.jsx("code",{children:"flex"})," CSS class to set the ",t.jsx("code",{children:"display"})," ","mode to ",t.jsx("code",{children:"flex"}),".  The default alignment mode"," ","(i.e. the ",t.jsx("code",{children:"align-items"})," CSS property) is ",t.jsx("code",{children:"stretch"}),"."]}),t.jsx(S,{html:tP,caption:".flex",expand:!0}),t.jsx("h2",{children:"Gaps"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"gap-N"})," classes can be used to add a gap between successive elements.  Here ",t.jsx("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit (",t.jsx("code",{children:"0.25rem"})," by default)."]}),t.jsx(S,{html:oP,caption:".flex.gap-4",expand:!0}),t.jsx("h2",{children:"Flex Top"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"top"})," (or ",t.jsx("code",{children:"start"}),") class to align the items to the stop."]}),t.jsx(S,{html:rP,caption:".flex.top",expand:!0}),t.jsx("h2",{children:"Flex Middle"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"middle"})," class to align the items to the middle."]}),t.jsx(S,{html:sP,caption:".flex.middle",expand:!0}),t.jsx("h2",{children:"Flex Baseline"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"baseline"})," class to align the items to the text baseline."]}),t.jsx(S,{html:lP,caption:".flex.baseline",expand:!0}),t.jsx("h2",{children:"Flex Bottom"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"bottom"})," (or ",t.jsx("code",{children:"end"}),") class to align the items to the bottom."]}),t.jsx(S,{html:aP,caption:".flex.bottom",expand:!0}),t.jsx("h2",{children:"Flex Left"}),t.jsxs("p",{children:["Items are align to the left (technically, ",t.jsx("code",{children:"flex-start"}),") by default but you can add the ",t.jsx("code",{children:"left"})," class if you want to make it explicit."]}),t.jsx(S,{html:iP,caption:".flex.left",expand:!0}),t.jsx("h2",{children:"Flex Center"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"center"})," class to align the items to the center."]}),t.jsx(S,{html:dP,caption:".flex.center",expand:!0}),t.jsx("h2",{children:"Flex Right"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"right"})," class to align the items to the right."]}),t.jsx(S,{html:cP,caption:".flex.right",expand:!0}),t.jsx("h2",{children:"Flex Space"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"space"})," class to space the items as much as possible. This is equivalent to setting the ",t.jsx("code",{children:"justify-content"})," CSS property to ",t.jsx("code",{children:"space-between"}),"."]}),t.jsx(S,{html:uP,caption:".flex.space",expand:!0}),t.jsx("h2",{children:"Flex Evenly"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"evenly"})," class to divide the space evenly between and around the items.  This is equivalent to setting the"," ",t.jsx("code",{children:"justify-content"})," CSS property to ",t.jsx("code",{children:"space-evenly"}),"."]}),t.jsx(S,{html:hP,caption:".flex.evenly",expand:!0}),t.jsx("h2",{children:"Flex Wrap"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"wrap"})," class to set the ",t.jsx("code",{children:"flex-wrap"})," property to ",t.jsx("code",{children:"wrap"}),"."]}),t.jsx(S,{html:pP,caption:".flex.wrap",expand:!0})]}),mP=Object.freeze(Object.defineProperty({__proto__:null,default:fP},Symbol.toStringTag,{value:"Module"})),gP=`<div class="text-italic larger">
  Italic
</div>
<div class="text-underline larger">
  Underline
</div>
<div class="text-strike larger">
  Strike
</div>
<div class="text-uppercase larger">
  Upper Case
</div>
<div class="text-lowercase larger">
  Lower Case
</div>
<div class="text-capitalize larger">
  text capitalize
</div>
`,vP=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Font Styles"}),t.jsx("p",{children:"The following classes are defined for common font styles."}),t.jsx(S,{html:gP,caption:"Font Styles",expand:!0})]}),xP=Object.freeze(Object.defineProperty({__proto__:null,default:vP},Symbol.toStringTag,{value:"Module"})),bP=`<div class="weight-thin larger">
  Thin
</div>
<div class="weight-extra-light larger">
  Extra Light
</div>
<div class="weight-light larger">
  Light
</div>
<div class="weight-regular larger">
  Regular
</div>
<div class="weight-medium larger">
  Medium
</div>
<div class="weight-semi-bold larger">
  Semi Bold
</div>
<div class="weight-bold larger">
  Bold
</div>
<div class="weight-extra-bold larger">
  Extra Bold
</div>
<div class="weight-black larger">
  Black
</div>`,yP=`<div class="weight-100 larger">
  100
</div>
<div class="weight-200 larger">
  200
</div>
<div class="weight-300 larger">
  300
</div>
<div class="weight-400 larger">
  400
</div>
<div class="weight-500 larger">
  500
</div>
<div class="weight-600 larger">
  600
</div>
<div class="weight-700 larger">
  700
</div>
<div class="weight-800 larger">
  800
</div>
<div class="weight-900 larger">
  900
</div>`,wP=`<div class="thin larger">
  Thin
</div>
<div class="bold larger">
  Bold
</div>
<div class="thick larger">
  Thick
</div>
`,jP=`// define your own font weights...
$font-weights: (
  'thin':         100,
  'extra-light':  200,
  'light':        300,
  'regular':      400,
  'medium':       500,
  'semi-bold':    600,
  'bold':         700,
  'extra-bold':   800,
  'black':        900,
) !default;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,CP=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Font Weights"}),t.jsx("h2",{children:"Weight Names"}),t.jsxs(re,{children:[t.jsxs("p",{children:["The ",t.jsx("code",{children:"weight-<name>"})," classes can be used to set the font weight."]}),t.jsxs("p",{children:["The values for ",t.jsx("code",{children:"<name>"})," can be",t.jsx("code",{children:"thin"}),", ",t.jsx("code",{children:"extra-light"}),", ",t.jsx("code",{children:"light"}),","," ",t.jsx("code",{children:"regular"}),", ",t.jsx("code",{children:"medium"}),", ",t.jsx("code",{children:"semi-bold"}),","," ",t.jsx("code",{children:"bold"}),", ",t.jsx("code",{children:"extra-bold"})," or ",t.jsx("code",{children:"black"}),"."]})]}),t.jsx(S,{html:bP,caption:"Weight Names",expand:!0}),t.jsx("h2",{children:"Weight Numbers"}),t.jsxs(re,{children:[t.jsx("p",{children:"Alternately you can use the corresponding weight numbers."}),t.jsxs("p",{children:["Those numbers can be"," ",t.jsx("code",{children:"100"}),", ",t.jsx("code",{children:"200"}),", ",t.jsx("code",{children:"300"}),","," ",t.jsx("code",{children:"400"}),", ",t.jsx("code",{children:"500"}),", ",t.jsx("code",{children:"600"}),","," ",t.jsx("code",{children:"700"}),", ",t.jsx("code",{children:"800"})," or ",t.jsx("code",{children:"900"}),"."]})]}),t.jsx(S,{html:yP,caption:"Weight Numbers",expand:!0}),t.jsx("h2",{children:"Weight Aliases"}),t.jsxs("p",{children:["There are some short-cut aliases for the common cases.  Note that we use ",t.jsx("code",{children:"thick"})," rather than ",t.jsx("code",{children:"black"})," to avoid any confusion with the color black."]}),t.jsx(S,{html:wP,caption:"Weight Aliases",expand:!0}),t.jsx("h2",{children:"Custom Weights"}),t.jsxs(re,{children:[t.jsxs("p",{children:["You can set the ",t.jsx("code",{children:"$font-weights"})," SASS variable if you want to define a different set of font weights."]}),t.jsx(_e,{code:jP,caption:"Font Weights",language:"scss",className:"mar-b-8",expand:!0})]})]}),kP=Object.freeze(Object.defineProperty({__proto__:null,default:CP},Symbol.toStringTag,{value:"Module"})),SP=`<div class="large">
  <p class="font-sans">Sans-serif Font</p>
  <p class="font-serif">Serif Font</p>
  <p class="font-mono">Mono Font</p>
</div>
`,TP=`// redefine any of the following fonts to taste...
$font-sans:   'Open Sans', Helvetica, sans-serif;
$font-serif:  'Times New Roman', Times, Baskerville, Georgia, serif;
$font-mono:   Monaco, 'Bitstream Vera Sans Mono', 'Lucida Console', Terminal, monospace;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,NP=`// define your own font names...
$sans:  Helvetica, sans-serif;
$serif: 'Times New Roman', Georgia, serif;
$mono:   Monaco, Terminal, monospace;

// ...and alias them in $fonts...
$fonts: (
  body: $sans,
  head: $serif,
  code: $mono,
);

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,LP=`p {
  font-family: $font-sans;
}
`,_P=`p {
  font-family: var(--font-sans);
}
`,$P=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Fonts"}),t.jsx("h2",{children:"Font Classes"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"font-sans"})," CSS class can be used to select a sans-serif font, ",t.jsx("code",{children:"font-serif"})," for a serif font or ",t.jsx("code",{children:"font-mono"})," ","for a monospaced font."]}),t.jsx(S,{html:SP,caption:"Fonts",expand:!0}),t.jsx("h2",{children:"Font Stacks"}),t.jsx("p",{children:"The default font stacks are designed to provide a consistent appearance across different browsers and platforms.  They should usually match the operating system default UI font and should be available in all font weights.  There are also backup fonts included to render emojis."}),t.jsx("table",{className:"small brand celled shaded wide font-mono",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("th",{className:"nowrap",children:"$font-sans"}),t.jsx("td",{children:'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'})]}),t.jsxs("tr",{children:[t.jsx("th",{className:"nowrap",children:"$font-serif"}),t.jsx("td",{children:'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'})]}),t.jsxs("tr",{children:[t.jsx("th",{className:"nowrap",children:"$font-mono"}),t.jsx("td",{children:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'})]})]})}),t.jsx("h2",{children:"Font Variables"}),t.jsx("p",{children:"Each of the above fonts is defined by a SASS variable which you can override to define your own font stacks."}),t.jsx(_e,{code:TP,caption:"Customising Fonts",language:"scss",className:"mar-b-8",expand:!0}),t.jsxs("p",{children:["These variables are exposed as the corresponding CSS custom properties:"," ",t.jsx("code",{children:"--font-sans"}),", ",t.jsx("code",{children:"--font-serif"}),","," ","and ",t.jsx("code",{children:"--font-mono"}),"."]}),t.jsxs("div",{className:"grid-2 gap-4 stack-laptop mar-b-8",children:[t.jsx(_e,{code:LP,caption:"Font Variables in SCSS",language:"scss",expand:!0}),t.jsx(_e,{code:_P,caption:"Font Variables in CSS",language:"css",expand:!0})]}),t.jsx("h2",{children:"Custom Fonts"}),t.jsxs(re,{children:[t.jsxs("div",{children:[t.jsx("p",{children:"You can define your own names for fonts."}),t.jsxs("p",{children:["In this case the CSS classes created will be ",t.jsx("code",{children:"font-body"}),","," ",t.jsx("code",{children:"font-head"})," and ",t.jsx("code",{children:"font-code"}),".  The fonts will also be defined as the ",t.jsx("code",{children:"--font-body"}),", ",t.jsx("code",{children:"--font-head"}),","," ","and ",t.jsx("code",{children:"--font-code"})," CSS custom properties."]})]}),t.jsx(_e,{code:NP,caption:"Font Aliases",language:"scss",className:"mar-b-8",expand:!0})]})]}),IP=Object.freeze(Object.defineProperty({__proto__:null,default:$P},Symbol.toStringTag,{value:"Module"})),EP=`<h3 class="mar-b-2"><code>grid-2</code></h3>
<div class="grid-2">
  <div class="teal bgc-50 fgc-90 pad-4">
    teal
  </div>
  <div class="blue bgc-50 fgc-90 pad-4">
    blue
  </div>
  <div class="indigo bgc-50 fgc-90 pad-4">
    indigo
  </div>
  <div class="violet bgc-50 fgc-90 pad-4">
    violet
  </div>
</div>

<h3 class="mar-v-2"><code>grid-4</code></h3>
<div class="grid-4 text-center">
  <div class="teal bgc-50 fgc-90">1</div>
  <div class="blue bgc-50 fgc-90">2</div>
  <div class="indigo bgc-50 fgc-90">3</div>
  <div class="violet bgc-50 fgc-90">4</div>
</div>

<h3 class="mar-v-2"><code>grid-8</code></h3>
<div class="grid-8 text-center">
  <div class="green  bgc-50 fgc-90">1</div>
  <div class="teal   bgc-50 fgc-90">2</div>
  <div class="blue   bgc-50 fgc-90">3</div>
  <div class="indigo bgc-50 fgc-90">4</div>
  <div class="violet bgc-50 fgc-90">5</div>
  <div class="purple bgc-50 fgc-90">6</div>
  <div class="pink   bgc-50 fgc-90">7</div>
  <div class="maroon bgc-50 fgc-90">8</div>
</div>
`,MP=`<div class="grid gap-4">
  <div class="teal bgc-50 fgc-90 pad-4">
    A
  </div>
  <div class="blue bgc-50 fgc-90 pad-4">
    B
  </div>
  <div class="indigo bgc-50 fgc-90 pad-4">
    C
  </div>
  <div class="violet bgc-50 fgc-90 pad-4">
    D
  </div>
</div>
`,AP=`<div class="grid-2 gap-4">
  <div class="teal bgc-50 fgc-90 pad-4">
    teal
  </div>
  <div class="blue bgc-50 fgc-90 pad-4">
    blue
  </div>
  <div class="indigo bgc-50 fgc-90 pad-4">
    indigo
  </div>
  <div class="violet bgc-50 fgc-90 pad-4">
    violet
  </div>
</div>
`,PP=`<div class="grid-2 gap-v-8 gap-h-2">
  <div class="teal bgc-50 fgc-90 pad-4">
    teal
  </div>
  <div class="blue bgc-50 fgc-90 pad-4">
    blue
  </div>
  <div class="indigo bgc-50 fgc-90 pad-4">
    indigo
  </div>
  <div class="violet bgc-50 fgc-90 pad-4">
    violet
  </div>
</div>
`,RP=`<div class="grid-3 gap-2 top">
  <div class="red bgc-70 fgc-20 pad-4">
    I do not, for one, think that the problem was that the
    band was down.
    I think that the problem may have been...
    that there was a Stonehenge monument on the stage that
    was in danger of being crushed by a dwarf. Alright?
    That tended to understate the hugeness of the object.
  </div>
  <div class="orange bgc-70 fgc-20 pad-4">
    I really think you're just making a much too big thing
    out of it.
  </div>
  <div class="yellow bgc-70 fgc-20 pad-4">
    Making a big thing out of it would've been a
    good idea.
  </div>
</div>
`,OP=`<div class="grid-3 gap-2 middle">
  <div class="red bgc-70 fgc-20 pad-4">
    I do not, for one, think that the problem was that the
    band was down.
    I think that the problem may have been...
    that there was a Stonehenge monument on the stage that
    was in danger of being crushed by a dwarf. Alright?
    That tended to understate the hugeness of the object.
  </div>
  <div class="orange bgc-70 fgc-20 pad-4">
    I really think you're just making a much too big thing
    out of it.
  </div>
  <div class="yellow bgc-70 fgc-20 pad-4">
    Making a big thing out of it would've been a
    good idea.
  </div>
</div>
`,FP=`<div class="grid-3 gap-2 bottom">
  <div class="red bgc-70 fgc-20 pad-4">
    I do not, for one, think that the problem was that the
    band was down.
    I think that the problem may have been...
    that there was a Stonehenge monument on the stage that
    was in danger of being crushed by a dwarf. Alright?
    That tended to understate the hugeness of the object.
  </div>
  <div class="orange bgc-70 fgc-20 pad-4">
    I really think you're just making a much too big thing
    out of it.
  </div>
  <div class="yellow bgc-70 fgc-20 pad-4">
    Making a big thing out of it would've been a
    good idea.
  </div>
</div>
`,BP=`<div class="grid-fit gap-2">
  <div class="red bgc-50 fgc-95 pad-2">
    Red
  </div>
  <div class="brown bgc-50 fgc-95 pad-2">
    Brown
  </div>
  <div class="orange bgc-50 fgc-95 pad-2">
    Orange
  </div>
  <div class="yellow bgc-50 fgc-95 pad-2">
    Yellow
  </div>
  <div class="olive bgc-50 fgc-95 pad-2">
    Olive
  </div>
  <div class="green bgc-50 fgc-95 pad-2">
    Green
  </div>
  <div class="teal bgc-50 fgc-95 pad-2">
    Teal
  </div>
  <div class="blue bgc-50 fgc-95 pad-2">
    Blue
  </div>
  <div class="indigo bgc-50 fgc-95 pad-2">
    Indigo
  </div>
  <div class="violet bgc-50 fgc-95 pad-2">
    Violet
  </div>
  <div class="purple bgc-50 fgc-95 pad-2">
    Purple
  </div>
  <div class="pink bgc-50 fgc-95 pad-2">
    Pink
  </div>
  <div class="maroon bgc-50 fgc-95 pad-2">
    Maroon
  </div>
</div>
`,DP=`<div class="grid-fit gap-2" style="--min-width: 200px">
  <div class="red bgc-50 fgc-95 pad-2">
    Red
  </div>
  <div class="brown bgc-50 fgc-95 pad-2">
    Brown
  </div>
  <div class="orange bgc-50 fgc-95 pad-2">
    Orange
  </div>
  <div class="yellow bgc-50 fgc-95 pad-2">
    Yellow
  </div>
  <div class="olive bgc-50 fgc-95 pad-2">
    Olive
  </div>
  <div class="green bgc-50 fgc-95 pad-2">
    Green
  </div>
  <div class="teal bgc-50 fgc-95 pad-2">
    Teal
  </div>
  <div class="blue bgc-50 fgc-95 pad-2">
    Blue
  </div>
  <div class="indigo bgc-50 fgc-95 pad-2">
    Indigo
  </div>
  <div class="violet bgc-50 fgc-95 pad-2">
    Violet
  </div>
  <div class="purple bgc-50 fgc-95 pad-2">
    Purple
  </div>
  <div class="pink bgc-50 fgc-95 pad-2">
    Pink
  </div>
  <div class="maroon bgc-50 fgc-95 pad-2">
    Maroon
  </div>
</div>
`,zP=`<h3><code>grid-fit</code></h3>

<div class="grid-fit gap-2 mar-t-2 mar-b-4">
  <div class="red bgc-50 fgc-95 pad-2">
    Red
  </div>
  <div class="brown bgc-50 fgc-95 pad-2">
    Brown
  </div>
  <div class="orange bgc-50 fgc-95 pad-2">
    Orange
  </div>
</div>

<h3><code>grid-fill</code></h3>
<div class="grid-fill gap-2 mar-t-2">
  <div class="red bgc-50 fgc-95 pad-2">
    Red
  </div>
  <div class="brown bgc-50 fgc-95 pad-2">
    Brown
  </div>
  <div class="orange bgc-50 fgc-95 pad-2">
    Orange
  </div>
</div>
`,WP=`<style>
  label.checkbox-overlap {
    --bgcolor: var(--color-90);
    padding: 0 !important;
  }
  label.checkbox-overlap:hover {
    --bgcolor: var(--color-85);
  }
  label.checkbox-overlap .state {
    background-color: var(--bgcolor);
    padding: 0.25rem 1rem;
    text-align: center;
  }
  label.checkbox-overlap .on.state {
    visibility: hidden;
  }
  label.checkbox-overlap:has(:checked) .on.state {
    --bgcolor: var(--blue-50);
    color: white;
    visibility: visible;
  }
</style>

<label class="checkbox-overlap no-focus">
  <div class="grid overlap mar-r-2">
    <input type="checkbox"/>
    <div class="state off">Off</div>
    <div class="state on">On</div>
  </div>
  Some text goes here
</label>
`,HP=`<div class="grid overlap">
  <img src="/badger-css/badger-forest.jpg" width="100%"/>
  <h1 class="fgc-100 pad-2 x3 weight-600" style="width: 70%">
    Anyone for mushrooms?
  </h1>
</div>
`,UP=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Grid"}),t.jsx("h2",{children:"Grid Columns"}),t.jsxs("p",{children:["Use a ",t.jsx("code",{children:"grid-N"})," CSS class to set the ",t.jsx("code",{children:"display"})," ","mode to ",t.jsx("code",{children:"grid"})," where ",t.jsx("code",{children:"N"})," is the number of columns from 2 to 16."]}),t.jsx(S,{html:EP,caption:"Grid Columns",expand:!0}),t.jsx("h2",{children:"Gaps"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"gap-N"})," classes can be used to add a gap between successive elements.  Here ",t.jsx("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit (",t.jsx("code",{children:"0.25rem"})," by default)."]}),t.jsx(S,{html:AP,caption:"Grid Gaps",expand:!0}),t.jsx("h2",{children:"Vertical and Horizontal Gaps"}),t.jsxs("p",{children:["The the ",t.jsx("code",{children:"gap-v-N"})," and ",t.jsx("code",{children:"gap-h-N"})," classes can be used to define the vertical and horizontal gaps separately. Again, ",t.jsx("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit."]}),t.jsx(S,{html:PP,caption:"Grid Gaps",expand:!0}),t.jsx("h2",{children:"Single Column Grid"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"grid"})," CSS class (or ",t.jsx("code",{children:"grid-1"})," which does the same thing) creates a single column grid.  It's useful because it then allows you to use the ",t.jsx("code",{children:"gap-N"})," classes to add a vertical gap between child components."]}),t.jsx(S,{html:MP,caption:"Single Column Grid",expand:!0}),t.jsx("h2",{children:"Grid Fit"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"grid-fit"})," CSS class will fit as many items into the grid as it can and then wrap onto the next line."]}),t.jsx(S,{html:BP,caption:"Grid Fit"}),t.jsx("h2",{children:"Grid Fill"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"grid-fill"})," CSS class is similar to ",t.jsx("code",{children:"grid-fit"}),". The difference between them is what happens when there are't enough items to fill the container width.  ",t.jsx("code",{children:"grid-fit"})," will stretch them whereas ",t.jsx("code",{children:"grid-fill"})," will not."]}),t.jsx(S,{html:zP,caption:"Grid Fill"}),t.jsx("h2",{children:"Grid Fit/Fill Size"}),t.jsxs("p",{children:["Both ",t.jsx("code",{children:"grid-fit"})," and ",t.jsx("code",{children:"grid-fill"})," can define a minimum size for each child element.  By default this is"," ",t.jsx("code",{children:"100px"})," wide.  You can set the ",t.jsx("code",{children:"--min-width"})," property to change it."]}),t.jsx(S,{html:DP,caption:"Grid Size"}),t.jsx("h2",{children:"Grid Top"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"top"})," (or ",t.jsx("code",{children:"start"}),") CSS class to align items to the top of grid columns."]}),t.jsx(S,{html:RP,caption:"Grid Top",expand:!0}),t.jsx("h2",{children:"Grid Middle"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"middle"})," CSS class to align items to the middle of grid columns."]}),t.jsx(S,{html:OP,caption:"Grid Middle",expand:!0}),t.jsx("h2",{children:"Grid Bottom"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"bottom"})," (or ",t.jsx("code",{children:"end"}),") CSS class to align items to the end of grid columns."]}),t.jsx(S,{html:FP,caption:"Grid Bottom",expand:!0}),t.jsx("h2",{children:"Grid Overlap"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"overlap"})," CSS class to stack all children of the grid on top of each other.  This can be used when you want to layer some content on top of a background, for example."]}),t.jsx(S,{html:HP,caption:"Grid Overlap",expand:!0}),t.jsx("p",{children:"You can also use it to hide previous components.  In this example, we create a label with a checkbox input (which is functional) but hide it with overlaid content."}),t.jsx(S,{html:WP,caption:"Grid Overlap",expand:!0}),t.jsx("p",{children:"Why is this useful?"})]}),GP=Object.freeze(Object.defineProperty({__proto__:null,default:UP},Symbol.toStringTag,{value:"Module"})),VP=()=>t.jsxs("div",{className:"prose",children:[t.jsx("h1",{children:"Utility Classes"}),t.jsxs("p",{className:"intro wide",children:["CSS utility classes are ",t.jsx("i",{children:"extremely"})," useful for applying styles to elements on an ad-hoc basis.  But they shouldn't be used as a substitute for writing CSS for reusable styles."]}),t.jsxs(re,{children:[t.jsxs("div",{children:[t.jsx("h2",{children:"Moderation in All Things"}),t.jsxs("p",{children:["Some CSS frameworks, most notably"," ",t.jsx("a",{href:"https://tailwindcss.com/",children:"tailwind.css"}),", have taken this to the extreme where everything is a utility class and you never need to write any CSS at all. Although this approach has some merits for rapid prototyping, I personally wouldn't use it when building a non-trivial site because I think that it can have a negative impact on readability and maintainability."]}),t.jsxs("p",{children:["I prefer to take the pragmatic approach and use utility classes to apply ",t.jsx("i",{children:"exceptional"})," styling to elements that don't warrant having their own dedicated CSS classes.  The general rule that I follow is to create dedicated CSS classes for components that I'm using in different places in a site.  For example, a product card, a user avatar, button and form styling, and so.  This ensures that they are consistent and can easily be changed across the whole site by updating the rules in the stylesheet."]}),t.jsxs("p",{children:["For styling that depends on the context in which an element is being used, I'll generally reach for utility classes. By far the most useful of these, and the ones that I use more than any other, are the ",t.jsx("code",{children:"mar"})," and ",t.jsx("code",{children:"pad"}),` utility classes to add custom margins and padding.  The amount of margin or padding required on an element will often depend on the other elements around it, so there isn't a "one size fits all" solution. Other useful utility classes include those to set the font size, add a border or drop shadow, or to set the layout to use flexbox or grid.`]}),t.jsx("h2",{children:"CSS Custom Properties"}),t.jsxs("p",{children:['CSS custom properties or CSS variables as they are also know, are an incredibly powerful addition to the toolkit for any web designer or developer.  They allow you to define reusable "snippets" of CSS that can easily be applied to different elements.  They can be used to replace much of the functionality that was previously only accessible by using variables and/or mixins in a CSS pre-processing language like'," ",t.jsx("a",{href:"https://sass-lang.com/",children:"SASS"}),"."]})]}),t.jsxs("div",{children:[t.jsx("h2",{children:"SASS Variables"}),t.jsx("p",{children:"Although CSS custom properties have largely removed the need for CSS pre-processors like SASS, there are still benefits to be had from using them.  One benefit is that they can help to reduce bloat in your CSS files.  SASS allows you to define variables that can be used to implement system-wide configuration options that are then compiled into the generated CSS files.  In contrast, any CSS custom properties that you use must be included in the CSS and, if overdone, can lead to significant increases in the file size."}),t.jsx("h2",{children:"When to Use Each?"}),t.jsx("p",{children:"The general rule that I follow is to use SASS variables for configuration options that I might want to change on a site-wide basis but generally remain constant throughout the site.  For example, the default font face, the breakpoints, the colors or default spacing units.  It's useful to have these defined as variables because it allows me to plug Badger CSS into a project, tweak the default settings, and then get coding.  If at some point in the future I decide they're not quite right, or if the client or a designer wants me to change them, then it should be easy to do so, and they should be applied universally."}),t.jsx("p",{children:"For styles that I might want to change in different parts of the site, need to reflect some application state (e.g. the differences between a success, warning or error message), or that should have different properties depending on the user selecting a light or dark theme, then CSS properties are generally the way to go."}),t.jsx("p",{children:"For styles that need to be applied on an ad-hoc basis, utility classes are what I reach for."})]})]})]}),YP=Object.freeze(Object.defineProperty({__proto__:null,default:VP},Symbol.toStringTag,{value:"Module"})),ZP=`<div class="relative border" style="height: 140px">
  <div class="absolute top left orange bgc-50 fgc-100 pad-2">
    Top Left
  </div>
  <div class="absolute top right orange bgc-50 fgc-100 pad-2">
    Top Right
  </div>
  <div class="absolute bottom left orange bgc-50 fgc-100 pad-2">
    Bottom Left
  </div>
  <div class="absolute bottom right orange bgc-50 fgc-100 pad-2">
    Bottom Right
  </div>
<div>
`,qP=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Position"}),t.jsx("h2",{children:"Position Classes"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"absolute"}),", ",t.jsx("code",{children:"relative"})," and"," ",t.jsx("code",{children:"fixed"})," CSS classes to set the position type."]}),t.jsxs("p",{children:["For elements that are set to ",t.jsx("code",{children:"absolute"})," or ",t.jsx("code",{children:"fixed"})," ","position, the ",t.jsx("code",{children:"top"}),", ",t.jsx("code",{children:"bottom"}),", ",t.jsx("code",{children:"left"})," ","and ",t.jsx("code",{children:"right"})," classes can be used to position them against the corresponding edge of the closest parent element with the"," ",t.jsx("code",{children:"relative"})," position type."]}),t.jsx(S,{html:ZP,caption:"Position",expand:!0})]}),KP=Object.freeze(Object.defineProperty({__proto__:null,default:qP},Symbol.toStringTag,{value:"Module"})),QP=`<div class="scroll-x border pad-2 nowrap mar-b-2">
  Yeah, I like it, just been fooling about with it for a few months now, very delicate... Yeah, it's part of a... trilogy really, a musical trilogy I'm doing, in, D minor, which I always find is really the saddest of all keys really. I don't know why, but it makes people weep instantly. You play a "baaaaa... baaaaaa..." it's the horn part. "...baaaa, baaaaa...", yeah, just simple lines intertwining, you know very much like, I'm really influenced by Mozart and Bach, It's sort of in between those, really, it's like a Mach piece really.<
</div>
`,XP=`<div class="scroll-y border pad-2" style="height: 7rem">
  Yeah, I like it, just been fooling about with it for a few months
  now, very delicate... Yeah, it's part of a... trilogy really, a
  musical trilogy I'm doing, in, D minor, which I always find is really
  the saddest of all keys really. I don't know why, but it makes people
  weep instantly. You play a "baaaaa... baaaaaa..." it's the horn part.
  "...baaaa, baaaaa...", yeah, just simple lines intertwining, you
  know very much like, I'm really influenced by Mozart and Bach,
  It's sort of in between those, really, it's like a Mach piece
  really.
</div>`,JP=`<div class="scroll-x border pad-4 nowrap">
  <span data-tooltip aria-label="Meles Meles">Badger</span>
  <span data-tooltip="bottom" aria-label="Fly Agaric">mushroom</span>
  <span data-tooltip="top right" aria-label="Danger Noodle">snake</span>.
</div>`,eR=`<div class="scroll-x overflow-hack nowrap">
  <span data-tooltip="bottom left" aria-label="Meles Meles">Badger</span>
  <span data-tooltip="bottom" aria-label="Fly Agaric">mushroom</span>
  <span data-tooltip="bottom right" aria-label="Danger Noodle">snake</span>.
</div>
`,nR=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Scolling"}),t.jsx("h2",{children:"Scroll Classes"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"scroll-x"})," or ",t.jsx("code",{children:"scroll-y"})," CSS classes to set ",t.jsx("code",{children:"overflow-x"})," or ",t.jsx("code",{children:"overflow-y"})," to ",t.jsx("code",{children:"scroll"}),", respectively."]}),t.jsx("p",{children:`Be warned that you'll also need to set widths and/or heights as appropriate to stop the layout engine from doing the "right" thing and expanding the containers to fit the content.`}),t.jsx(S,{html:QP,caption:"scroll-x",expand:!0}),t.jsx(S,{html:XP,caption:"scroll-y",expand:!0}),t.jsx("h2",{children:"Overflow Hack"}),t.jsxs("p",{children:["One problem with explicit scrolling classes is that it can prevent overflow from being visible.  When ",t.jsx("code",{children:"overflow-x"})," is set to ",t.jsx("code",{children:"scroll"}),", ",t.jsx("code",{children:"overflow-y"})," is implicitly set to"," ",t.jsx("code",{children:"auto"})," which equates to the same thing as ",t.jsx("code",{children:"hidden"}),". To the best of my knowledge there's no way to override this built-in behaviour (please correct me if I'm wrong).  The problem here is that any overflowing content in a scrolling container will be hidden."]}),t.jsx("p",{children:"For example, try hovering over the words in the text below to trigger some tooltips.  You'll see that the tooltips are hidden because it can't overflow outside the container."}),t.jsx(S,{html:JP,caption:"Overflow Hidden",expand:!0}),t.jsxs("p",{children:["There's a partial work-around this this, which is at best a dirty, dirty hack.  Add the ",t.jsx("code",{children:"overflow-hack"})," class to your container and it will add ",t.jsx("code",{children:"100vh"})," of padding to the bottom, and"," ",t.jsx("code",{children:"-100vh"})," of margin.  That will at least allow content to overflow the bottom of the container.  It's not possible to safely add padding and margins to all four sides because the element will then overlay and interfere with other elements."]}),t.jsx(S,{html:eR,caption:"overflow-hack",expand:!0})]}),tR=Object.freeze(Object.defineProperty({__proto__:null,default:nR},Symbol.toStringTag,{value:"Module"})),rR=`<div class="surface-3 pad-8">
  <div class="shadow-1 surface-5 pad-4 mar-b-8">
    shadow-1
  </div>
  <div class="shadow-2 surface-5 pad-4 mar-b-8">
    shadow-2
  </div>
  <div class="shadow-3 surface-5 pad-4 mar-b-8">
    shadow-3
  </div>
  <div class="shadow-4 surface-5 pad-4 mar-b-8">
    shadow-4
  </div>
  <div class="shadow-5 surface-5 pad-4">
    shadow-5
  </div>
</div>`,sR=`<div class="surface-3 pad-8">
  <style>
    .shadow-example {
      box-shadow: var(--shadow-2);
    }
  </style>
  <div class="shadow-example surface-5 pad-4">
    This element has the a box shadow applied
    using a CSS custom property.
  </div>
</div>
`,aR=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Shadows"}),t.jsx("h2",{children:"Shadow Classes"}),t.jsxs("p",{children:["Use the ",t.jsx("code",{children:"shadow-1"}),", ",t.jsx("code",{children:"shadow-2"}),","," ",t.jsx("code",{children:"shadow-3"}),", ",t.jsx("code",{children:"shadow-4"})," and ",t.jsx("code",{children:"shadow-5"})," ","CSS classes to add a box shadow of progressively larger size.  Larger shadows can be used to suggest that an element is lifted higher off the background and thus appears closer to the foreground."]}),t.jsx(S,{html:rR,caption:"Shadows",expand:!0}),t.jsx("h2",{children:"Shadow Properties"}),t.jsxs(re,{children:[t.jsxs("p",{children:["The shadow styles are defined as CSS custom properties, (e.g."," ",t.jsx("code",{children:"--shadow-1"}),", ",t.jsx("code",{children:"--shadow-2"}),", etc).  The colors and opacities used for the shadows depend on both the shadow depth and color theme.  For the default light theme the base color is"," ",t.jsx("code",{children:"--grey-0"})," and the shadows are more transparent.  For the dark theme, where shadows need to be a bit more prominent to be visible, the base color is ",t.jsx("code",{children:"black"})," and the shadows are more opaque."]}),t.jsxs("p",{children:["The benefit of CSS custom properties is that you can easily apply them to your own style rules.  In this example we define a"," ",t.jsx("code",{children:".shadow-example"})," rule which adds a ",t.jsx("code",{children:"box-shadow"})," using the ",t.jsx("code",{children:"--shadow-2"})," custom property.  The shadow color will be set correctly for both light and dark themes so you don't need to worry about defining separate rules for each."]})]}),t.jsx(S,{html:sR,caption:"Shadow Style",expand:!0})]}),lR=Object.freeze(Object.defineProperty({__proto__:null,default:aR},Symbol.toStringTag,{value:"Module"})),oR=`<div class="smallest">Smallest text</div>
<div class="smaller">Smaller text</div>
<div class="small">Small text</div>
<div>Normal size text</div>
<div class="large">Large text</div>
<div class="larger">Larger text</div>
<div class="largest">Largest text</div>
`,iR=`<div>x1</div>
<div class="x2">x2</div>
<div class="x3">x3</div>
<div class="x4">x4</div>
<div class="x5">x5</div>
<div class="x6">x6</div>
<div class="x7">x7</div>
<div class="x8">x8</div>
<div class="x9">x9</div>
<div class="x10">x10</div>
`,dR=`// define your own text sizes...
$sizes: (
  xxs: 0.625rem   // 10px
  xs:  0.75rem,   // 12px
  s:   0.875rem,  // 14px
  m:   1rem,      // 16px
  l:   1.25rem,   // 20px
  xl:  1.5rem,    // 24px
  xxl: 2rem,      // 32px
);

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";`,cR=({heading1:e="Class",heading2:n="Rem Size",heading3:r=t.jsxs(t.Fragment,{children:["Pixel Size ",t.jsx("span",{className:"smaller",children:"(when 1rem=16px)"})]}),rows:s})=>t.jsxs("table",{className:"brand celled striped properties small wide mar-b-2",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:e}),t.jsx("th",{children:n}),t.jsx("th",{children:r})]})}),t.jsx("tbody",{children:s.map(a=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:a[0]})}),t.jsx("td",{children:a[1]}),t.jsx("td",{children:a[2]})]},a[0]))})]}),uR=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Text Sizes"}),t.jsx("h2",{children:"Size Classes"}),t.jsxs("p",{children:["Use the ",t.jsx("code",{children:"smallest"}),", ",t.jsx("code",{children:"smaller"}),","," ",t.jsx("code",{children:"small"}),", ",t.jsx("code",{children:"medium"})," (default)"," ",t.jsx("code",{children:"large"}),", ",t.jsx("code",{children:"larger"})," and ",t.jsx("code",{children:"largest"})," CSS classes to set the text size. These are defined as SASS variables which you can override (e.g. ",t.jsx("code",{children:"$size-large"}),") and CSS custom properties which you can use in your own stylesheets or inline styles (e.g. ",t.jsx("code",{children:"--size-large"}),")."]}),t.jsx(S,{html:oR,caption:"Text Sizes",expand:!0}),t.jsx("h2",{children:"Default Sizes"}),t.jsxs(re,{children:[t.jsx("p",{children:"The pre-defined values for the sizes are shown here."}),t.jsx(cR,{rows:[["smallest","0.625rem","10px"],["smaller","0.75rem","12px"],["small","0.875rem","14px"],["medium","1rem","16px"],["large","1.25rem","20px"],["larger","1.5rem","24px"],["largest","2rem","32px"]]})]}),t.jsx("h2",{children:"Custom Sizes"}),t.jsxs(Ot,{code:dR,caption:"Custom Sizes",language:"scss",expand:!0,children:[t.jsxs("p",{children:["You can set the ",t.jsx("code",{children:"$sizes"})," SCSS variable if you want to define a different set of sizes, either to give them different names or values."]}),t.jsxs("p",{children:["In the example shown here the generated CSS classes would be"," ",t.jsx("code",{children:"xxs"}),", ",t.jsx("code",{children:"xs"}),", ",t.jsx("code",{children:"s"}),","," ",t.jsx("code",{children:"m"}),", ",t.jsx("code",{children:"l"}),", ",t.jsx("code",{children:"xl"})," and ",t.jsx("code",{children:"xxl"}),"."]})]}),t.jsx("h2",{children:"Size Multipliers"}),t.jsxs("p",{children:["For larger text sizes you can use the size multiple classes:"," ",t.jsx("code",{children:"x2"}),", ",t.jsx("code",{children:"x3"}),", etc., up to ",t.jsx("code",{children:"x10"}),". These are all multiples of ",t.jsx("code",{children:"1rem"}),"."]}),t.jsx(S,{html:iR,caption:"Text Sizes",expand:!0})]}),hR=Object.freeze(Object.defineProperty({__proto__:null,default:uR},Symbol.toStringTag,{value:"Module"})),pR=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
  <div class="mar surface pad-2">
    This has 1 unit of margin.
  </div>
</div>
`,fR=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
  <div class="mar-2 surface pad-2">
    This has 2 units of margin.
  </div>
</div>
<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
  <div class="mar-4 surface pad-2">
    This has 4 units of margin.
  </div>
</div>
<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
  <div class="mar-8 surface pad-2">
    This has 8 units of margin.
  </div>
</div>
`,mR=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
  <div class="mar-t-4 surface pad-2">
    4 units of margin on top
  </div>
</div>
<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
  <div class="mar-r-4 surface pad-2">
    4 units of margin on right
  </div>
</div>
<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
  <div class="mar-b-4 surface pad-2">
    4 units of margin on bottom
  </div>
</div>
<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
  <div class="mar-l-4 surface pad-2">
    4 units of margin on left
  </div>
</div>
<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
  <div class="mar-v-4 surface pad-2">
    4 units of margin on top and bottom (vertical)
  </div>
</div>
<div class="grey20 bgc-50 fgc-90 bdc-40 border">
  <div class="mar-h-4 surface pad-2">
    4 units of margin on left and right (horizontal)
  </div>
</div>
`,gR=`<div class="pad-2 grey20 bgc-50 fgc-90 mar-b-2">
  Two units of padding all around.
</div>
<div class="pad-v-4 pad-h-8 grey20 bgc-50 fgc-90 border">
  Four units of padding vertically and eight units
  horizontally
</div>
`,vR=`<div class="grid-1 gap-4 surface-3 pad-4">
  <div class="pad-4 surface-5 small">
    Four units of padding - small
  </div>
  <div class="pad-4 surface-5">
    Four units of padding - medium
  </div>
  <div class="pad-4 surface-5 large">
    Four units of padding - large
  </div>
</div>
`,xR=`<div class="grid-2 gap-4 font-mono">
  <div class="flex column start gap-2">
    <button class="pad inverse blue">
      pad
    </button>
    <button class="pad-2 inverse indigo">
      pad-2
    </button>
    <button class="pad-3 inverse violet">
      pad-3
    </button>
    <button class="pad-4 inverse purple">
      pad-4
    </button>
  </div>
  <div class="flex column start gap-2">
    <button class="pad-a inverse blue font-mono">
      pad-a
    </button>
    <button class="pad-a-2 inverse indigo font-mono">
      pad-a-2
    </button>
    <button class="pad-a-3 inverse violet">
      pad-a-3
    </button>
    <button class="pad-a-4 inverse purple">
      pad-a-4
    </button>
  </div>
</div>
`,bR=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Spacing"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"mar"})," and ",t.jsx("code",{children:"pad"})," CSS utility classes can be used to set the margins and padding for and element."]}),t.jsx("h2",{children:"Margins"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"mar"})," class by itself will add 1 unit of margin to all four sides of an element.  The default unit size is ",t.jsx("code",{children:"0.25rem"}),"."]}),t.jsx(S,{html:pR,caption:"Margins",expand:!0}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"mar-N"})," classes will add multiples of the unit, where ",t.jsx("code",{children:"N"})," is one of the values:"," ",t.jsx("code",{children:"0"}),", ",t.jsx("code",{children:"1"}),", ",t.jsx("code",{children:"2"}),", ",t.jsx("code",{children:"3"}),","," ",t.jsx("code",{children:"4"}),", ",t.jsx("code",{children:"6"}),", ",t.jsx("code",{children:"8"}),", ",t.jsx("code",{children:"10"}),","," ",t.jsx("code",{children:"12"}),", ",t.jsx("code",{children:"16"}),", ",t.jsx("code",{children:"20"}),","," ",t.jsx("code",{children:"24"}),", ",t.jsx("code",{children:"28"})," or ",t.jsx("code",{children:"32"}),".  The"," ",t.jsx("code",{children:"mar-1"})," class is effectively the same as just ",t.jsx("code",{children:"mar"})," ","but is included for completeness.  Also note that ",t.jsx("code",{children:"mar-0"})," can be used to remove any margin that would otherwise be present on an element."]}),t.jsx(S,{html:fR,caption:"Margin Multiple",expand:!0}),t.jsx("h2",{children:"Margin Directions"}),t.jsxs("p",{children:["You can also specify the direction for the margin using the"," ",t.jsx("code",{children:"mar-t"})," (top), ",t.jsx("code",{children:"mar-r"})," (right),"," ",t.jsx("code",{children:"mar-b"})," (bottom), ",t.jsx("code",{children:"mar-l"})," (left),"," ",t.jsx("code",{children:"mar-v"})," (vertical: top and bottom) and"," ",t.jsx("code",{children:"mar-h"})," (horizontal: left and right) classes. The default is 1 unit of margin or a ",t.jsx("code",{children:"-N"})," suffix can be added as a multiplier.  For example ",t.jsx("code",{children:"mar-t-4"})," to add 4 units of margin to the top of an element."]}),t.jsx(S,{html:mR,caption:"Margin Direction",expand:!0}),t.jsx("h2",{children:"Padding"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"pad"})," and related utility classes work in the same way but add padding inside the element."]}),t.jsx(S,{html:gR,caption:"Padding",expand:!0}),t.jsxs("p",{children:["One important thing to note is that padding is applied in multiples of 0.25",t.jsx("b",{children:"em"})," whereas margins use 0.25",t.jsx("b",{children:"rem"}),".  This is because you usually want spacing around elements to be consistent (which rem provides) but padding inside an element should be based on the text size (which em provides)."]}),t.jsx(S,{html:vR,caption:"Pad Sizes",expand:!0}),t.jsx("h2",{children:"Adaptive"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"pad-a-N"})," utility classes apply adaptive padding.  In the horizontal direction N units of padding will be added.  In the vertical direction N-1 units will be added."]}),t.jsx("p",{children:"Consider the example below.  The buttons in the left column have equal padding in both directions, whereas those in the right column have adaptive padding.  Counterintuitively, the padding in the right buttons looks more balanced, particularly at low values.  This is because the line height of the text is typically around 1.5 (or slightly less) resulting in around 0.25em of implicit vertical padding in the text before the additional padding is added.  By adding one unit less of padding in the vertical direction the adaptive padding classes cancel out this imbalance."}),t.jsx(S,{html:xR,caption:"Adaptive Padding",expand:!0})]}),yR=Object.freeze(Object.defineProperty({__proto__:null,default:bR},Symbol.toStringTag,{value:"Module"})),wR=`<div class="flex gap-4">
  <div class="split-2 red bgc-50 fgc-100 hdc-80 pad-2">
    <h4 class="smallest font-mono">split-2</h4>
    This element which will only ever be
    half the width of the container, no matter how
    much the flex layout engine wants to make it
    grow
  </div>
  <div class="split-2 brown bgc-50 fgc-100 hdc-80 pad-2">
    <h4 class="smallest font-mono">split-2</h4>
    This won't shrink.
  </div>
</div>

<div class="flex gap-4 mar-t-4">
  <div class="split-3 orange bgc-50 fgc-100 hdc-80 pad-2">
    <h4 class="smallest font-mono">split-3</h4>
    I do not, for one, think that the problem was that
    the band was down. I think that the problem may
    have been... that there was a Stonehenge monument
    on the stage that was in danger of being crushed
    by a dwarf. Alright? That tended to understate the
    hugeness of the object.
  </div>
  <div class="split-3 yellow bgc-50 fgc-100 hdc-80 pad-2">
    <h4 class="smallest font-mono">split-3</h4>
    I really think you're just making a much too big
    thing out of it.
  </div>
  <div class="split-3 olive bgc-50 fgc-100 hdc-80 pad-2">
    <h4 class="smallest font-mono">split-3</h4>
    Making a big thing out of it would've been a good idea.
  </div>
</div>
`,jR=`<div class="flex gap-4">
  <div class="split-3 green bgc-50 fgc-100 hdc-80 pad-2">
    <h4 class="smallest font-mono">split-3</h4>
    If you could not play rock'n roll, what would you do?
  </div>
  <div class="split-2-3 teal bgc-50 fgc-100 hdc-80 pad-2">
    <h4 class="smallest font-mono">split-2-3</h4>
    Well, I suppose I could, uh, work in a shop of some
    kind or... or do uh... freelance... selling of some
    sort of... uh... product, you know... A salesman,
    like, maybe in a haberdasher, or maybe like a... uh
    a chapeau shop, or something... you know.
  </div>
</div>

<div class="flex gap-4 mar-t-4">
  <div class="split-7 blue bgc-50 fgc-100 hdc-80 pad-2">
    <h4 class="smallest font-mono">split-7</h4>
    What size do you wear, sir?
  </div>
  <div class="split-2-7 indigo bgc-50 fgc-100 hdc-80 pad-2">
    <h4 class="smallest font-mono">split-2-7</h4>
    Uh... seven and a quarter.
  </div>
  <div class="split-4-7 violet bgc-50 fgc-100 hdc-80 pad-2">
    <h4 class="smallest font-mono">split-4-7</h4>
    "I think we have that...", you see, something
    like that I could do. "No! We're all out, do
    you wear black?",
  </div>
</div>
`,CR=`<table class="wide shaded lined">
  <thead>
    <tr>
      <th class="split-8">ID</th>
      <th class="split-4">Name</th>
      <th class="split-2">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr valign="top">
      <td>1234</td>
      <td>
        This column shouldn't grow any wider, even though
        the layout engine really, really wants to make it
        grow to contain the content.
      </td>
      <td>One half</td>
    </tr>
  </thead>
</table>

<table class="wide shaded lined mar-t-4">
  <thead>
    <tr>
      <th class="split-8">ID</th>
      <th class="split-4">Name</th>
      <th class="split-2">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr valign="top">
      <td>9</td>
      <td>Nine</td>
      <td>Not as loud as ten</td>
    </tr>
    <tr valign="top">
      <td>10</td>
      <td>Ten</td>
      <td>The loudest for most blokes</td>
    </tr>
    <tr valign="top">
      <td>11</td>
      <td>Eleven</td>
      <td>
        Well, it's one louder.
        What we go up to when we need the push
        over the cliff.
      </td>
    </tr>
  </thead>
</table>
`,kR=`// redefine $splits to include what you want...
$splits: (
  'split-2':    50%,
  'split-3':    33.33333333%,
  'split-4':    25%,
  'split-5':    20%,
  'split-6':    16.66666666%,
  'split-7':    14.28571429%,
  'split-8':    12.5%,
) !default;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";`,SR=[["2","One half","50%"],["3","One third","33.33333333%"],["2-3","Two thirds","66.66666666%"],["4","One quarter","25%"],["3-4","Three quarters","75%"],["5","One fifth","20%"],["2-5","Two fifths","40%"],["3-5","Three fifths","60%"],["4-5","Four fifths","80%"],["6","One sixth","16.66666666%"],["5-6","Five sixth","83.33333333%"],["7","One seventh","14.28571429%"],["2-7","Two sevenths","28.57142858%"],["3-7","Three sevenths","42.85714287%"],["4-7","Four sevenths","57.14285716%"],["5-7","Five sevenths","71.42857145%"],["6-7","Six sevenths","85.71428574%"],["8","One eighth","12.5%"],["3-8","Three eighths","37.5%"],["5-8","Five eighths","62.5%"],["7-8","Seven eighths","87.5%"],["9","One ninth","11.11111111%"],["2-9","Two ninths","22.22222222%"],["4-9","Four ninths","44.44444444%"],["5-9","Five ninths","55.55555555%"],["7-9","Seven ninths","77.77777777%"],["8-9","Eight ninths","88.88888888%"],["10","One tenth","10%"],["3-10","Three tenths","30%"],["7-10","Seven tenths","70%"],["9-10","Nine tenths","90%"],["11","One eleventh","9.090909090%"],["12","One twelfth","8.333333333%"],["13","One thirteenth","7.692307692%"],["14","One fourteenth","7.142857142%"],["15","One fifteenth","6.666666666%"],["16","One sixteenth","6.25%"]],TR=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Split"}),t.jsx("h2",{children:"Evenly Split Columns"}),t.jsxs(re,{children:[t.jsxs("p",{children:["The ",t.jsx("code",{children:"split-N"})," classes can be used to set the width of an element to a fraction of the width of the parent container. For example, ",t.jsx("code",{children:"split-2"})," sets the width to one half,"," ",t.jsx("code",{children:"split-3"})," to one third, and so on.  The value for"," ",t.jsx("code",{children:"N"})," can be anything from 2 to 16."]}),t.jsxs("p",{children:["They can be useful in conjunction with the ",t.jsx(yr,{})," classes to constrain columns to be a particular width.  Otherwise the flexbox layout engine will try to expand the width of columns that have more content."]})]}),t.jsx(S,{html:wR,caption:"Even Splits"}),t.jsx("h2",{children:"Unevenly Split Columns"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"split-N-M"})," classes can be used to create uneven splits. For example, ",t.jsx("code",{children:"split-2-5"})," creates a columns that is two fifths of the width."]}),t.jsxs("p",{children:["These are defined for all uneven splits up to tenths (e.g. there's a ",t.jsx("code",{children:"split-3-10"})," class for three tenths, but no ",t.jsx("code",{children:"split-3-11"})," ","for three elevenths).  Not that redundant classes are not included. For example, there's no ",t.jsx("code",{children:"split-3-6"})," class because it's one half or ",t.jsx("code",{children:"split-2"}),"."]}),t.jsx(S,{html:jR,caption:"Uneven Splits"}),t.jsx("h2",{children:"Tables"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"split-*"})," classes also work with table columns. This can be useful to prevent the layout engine from expanding columns to fit the content.  It's especially useful if you have multiple tables and you want the columns to be the same width in each of the tables."]}),t.jsx(S,{html:CR,caption:"Table Splits"}),t.jsx("h2",{children:"Split Classes"}),t.jsxs(re,{children:[t.jsx("p",{children:"The CSS classes and their corresponding widths are listed below."}),t.jsxs("p",{children:["You can set the ",t.jsx("code",{children:"$splits"})," SASS variable if you want to define a different set of splits."]})]}),t.jsx(Ot,{code:kR,caption:"Custom Splits",language:"scss",expand:!0,children:t.jsxs("table",{className:"brand celled striped properties small wide mar-b-2",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Class"}),t.jsx("th",{children:"Size"}),t.jsx("th",{children:"%age Width"})]})}),t.jsx("tbody",{children:SR.map(e=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("code",{children:["split-",e[0]]})}),t.jsx("td",{children:e[1]}),t.jsx("td",{children:e[2]})]},e[0]))})]})})]}),NR=Object.freeze(Object.defineProperty({__proto__:null,default:TR},Symbol.toStringTag,{value:"Module"}));var LR=Object.defineProperty,_R=(e,n,r)=>n in e?LR(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,au=(e,n,r)=>(_R(e,typeof n!="symbol"?n+"":n,r),r);function $R(e={},n={},r={}){return Object.entries(n).reduce((s,[a,l])=>{const o=r[l];return o!==null&&typeof o<"u"&&(s[a]=o),s},{...e})}function IR(e,n=[]){return(typeof n=="string"?n.split(/,\s*|\s+/):n).reduce((r,s)=>{const a=e[s]||PR(`Cannot expose non-existent action method: ${s}`);return r[s]=a.bind(e),r},{})}function ER(e,n){const r=e.debug??n.debug,s=Cm(e.debugPrefix??n.debugPrefix,e),a=Cm(e.debugColor??n.debugColor,e);return r?s?(l,...o)=>console.log(`%c${s}%c${l}`,`color: ${a}`,"color:black",...o):console.log.bind(console):()=>{}}function MR(e){return Array.isArray(e)}function e4(e){return typeof e=="function"}function Cm(e,n){return e4(e)?e(n):e}function AR(e){return MR(e)?e:[e]}function PR(...e){throw new Error(e.join(""))}const RR=(e,n={})=>{const r=cn.createContext(n);return{Context:r,Provider:s=>t.jsx(e,{...s,render:a=>t.jsx(r.Provider,{value:a,children:s.children})}),Consumer:s=>a=>t.jsx(r.Consumer,{children:l=>t.jsx(s,{...l,...a})}),Children:({children:s})=>AR(s).map((a,l)=>e4(a)?t.jsx(r.Consumer,{children:a},l):a),Use:()=>cn.useContext(r)}};class lu extends cn.Component{constructor(n){super(n);const r=this.constructor;this.debug=ER(n,r),this.state=$R(r.initialState,r.initialProps,n),this.actions=IR(this,r.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}}au(lu,"initialState",{}),au(lu,"initialProps",{}),au(lu,"actions",[]);const OR="unknown",n4="mobile",t4="tablet",FR="laptop",BR="desktop",DR="widescreen",zR="ultra",WR={[OR]:0,[n4]:480,[t4]:720,[FR]:960,[BR]:1200,[DR]:1440},HR=e=>{const n=Object.entries(WR).find(([,r])=>e<=r);return n?n[0]:zR},UR=()=>typeof window>"u"?!1:window.innerWidth,GR=()=>{const[e,n]=F.useState(!1),[r,s]=F.useState(!1),a=()=>{const l=UR();n(l);const o=HR(l);s(o)};return F.useEffect(()=>(a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}),[]),{width:e,breakpoint:r}},jh="sidebar",VR="no-sidebar",YR="open",ZR="closed",qR=({render:e})=>{const{width:n,breakpoint:r}=GR(),{theme:s,variant:a,setVariant:l}=ko(),[o,i]=F.useState(!1),c=()=>i(!0),h=()=>i(!1),m=()=>i(w=>!w);return e({width:n,breakpoint:r,theme:s,variant:a,setVariant:l,sidebarOpen:o,setSidebarOpen:i,openSidebar:c,closeSidebar:h,sidebarIconClick:()=>{r===n4||r===t4?m():a===jh?(l(VR),h()):(l(jh),c())}})},So=RR(qR),{Context:zO,Provider:WO,Consumer:HO,Children:UO,Use:KR}=So,QR=({width:e,breakpoint:n})=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Stacking Split Columns"}),t.jsxs("p",{children:["One of the problems with creating columns using"," ",t.jsx(ns,{}),", ",t.jsx(yr,{})," and  ",t.jsx(GS,{})," is that sometimes a user's screen size isn't large enough to accommodate them."]}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"stack-*"})," classes can be used to stack columns when the screen size is narrower than a threshold breakpoint. These are ",t.jsx("code",{children:"stack-mobile"}),", ",t.jsx("code",{children:"stack-tablet"}),","," ",t.jsx("code",{children:"stack-laptop"}),", ",t.jsx("code",{children:"stack-desktop"})," and"," ",t.jsx("code",{children:"stack-widescreen"}),"."]}),t.jsx("h2",{children:"Grid Stacking"}),t.jsxs(re,{children:[t.jsxs("p",{children:["This example shows how adding a ",t.jsx("code",{children:"stack-*"})," class to an element that has one of the ",t.jsx("code",{children:"grid-*"})," classes will cause the columns to be stacked at different breakpoints."]}),t.jsx(Zr,{title:"Try it out!",children:"Try resizing your browser window and see how the grid elements below get stacked."})]}),t.jsxs("div",{className:"grid-1 gap-4",children:[t.jsx(km,{width:e,breakpoint:n}),t.jsx(ms,{stack:"widescreen"}),t.jsx(ms,{stack:"desktop"}),t.jsx(ms,{stack:"laptop"}),t.jsx(ms,{stack:"tablet"}),t.jsx(ms,{stack:"mobile"})]}),t.jsx("h2",{children:"Flexbox Stacking"}),t.jsxs("p",{children:["This example shows the same thing for ",t.jsx("code",{children:"flex"})," containers."]}),t.jsxs("div",{className:"grid-1 gap-4",children:[t.jsx(km,{width:e,breakpoint:n}),t.jsx(bl,{stack:"widescreen"}),t.jsx(bl,{stack:"desktop"}),t.jsx(bl,{stack:"laptop"}),t.jsx(bl,{stack:"tablet"}),t.jsx(bl,{stack:"mobile"})]}),t.jsx("h2",{children:"Container Query Stacking"}),t.jsxs(re,{children:[t.jsxs("div",{children:[t.jsx("p",{children:"The stacking examples shown above use media queries that are based on the width of the browser viewport.  The problem with this is that your content may be inside a container that doesn't extend to the full width of the viewport.  This is the problem that container queries were designed to solve."}),t.jsxs("p",{children:["All you need to do is add the ",t.jsx("code",{children:"container"})," class to a container element.  Any elements contained within that have ",t.jsx("code",{children:"stack-*"}),"classes will then use the width of the container element instead of the browser window."]})]}),t.jsxs("div",{children:[t.jsxs("p",{children:["You can have multiple ",t.jsx("code",{children:".container"})," elements nested and the ",t.jsx("code",{children:"stack-*"})," elements will use the width of the closest parent with a ",t.jsx("code",{children:"container"})," class."]}),t.jsxs("p",{children:["In this example the container is set to a maximum width of 35rem which is below the 45rem that triggers the ",t.jsx("code",{children:"stack-tablet"})," breakpoint, but above the 30rem that triggers the ",t.jsx("code",{children:"stack-mobile"})," breakpoint. Of course, your mileage may vary depending on what size screen you're using, but if you have a window size wide enough to display the 35rem container then you should see the first set of elements stacking and the second set displayed in a grid."]})]})]}),t.jsxs(XR,{width:"35rem",breakpoint:"tablet",children:[t.jsx(ms,{stack:"tablet"}),t.jsx(ms,{stack:"mobile"})]}),t.jsx("h2",{children:"Breakpoint Names"}),t.jsxs(re,{children:[t.jsx("p",{children:"The breakpoint names and their corresponding widths in rems and pixels (assuming 1rem = 16px) are shown below."}),t.jsxs("p",{children:["You can set the ",t.jsx("code",{children:"$breakpoints"})," SASS variable if you want to define a different set of breakpoints."]})]}),t.jsx(Ot,{code:Jv,caption:"Custom Breakpoints",language:"scss",expand:!0,children:t.jsxs("table",{className:"brand celled striped properties small wide mar-b-2",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Class"}),t.jsx("th",{children:"Rems"}),t.jsx("th",{children:"Pixels"})]})}),t.jsx("tbody",{children:Object.entries(mf).map(([r,s])=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:r})}),t.jsxs("td",{children:[s,"rem"]}),t.jsxs("td",{children:[s*16,"px"]})]},r))})]})})]}),km=({width:e,breakpoint:n})=>t.jsxs("div",{className:"flex start center gap-4 stack-mobile",children:[t.jsxs("div",{className:"inverse pad-a-2 bdr-1 mar-b-2 text-center",children:["Screen width: ",t.jsxs("span",{className:"font-mono",children:[e,"px"]})]}),t.jsxs("div",{className:"inverse pad-a-2 bdr-1 mar-b-2 text-center",children:["Breakpoint: ",t.jsx("span",{className:"font-mono",children:n})]})]}),XR=({width:e,breakpoint:n,children:r})=>t.jsxs("div",{className:`grid-1 gap-4 container block-center max-width-${e}`,children:[t.jsxs("div",{className:"flex start center gap-4 stack-mobile",children:[t.jsxs("div",{className:"inverse pad-a-2 bdr-1 mar-b-2 text-center",children:["Container max width: ",t.jsx("span",{className:"font-mono",children:e})]}),t.jsxs("div",{className:"inverse pad-a-2 bdr-1 mar-b-2 text-center",children:["Breakpoint: ",t.jsx("span",{className:"font-mono",children:n})]})]}),r]}),bl=({stack:e})=>t.jsx(r4,{className:"flex center gap-4 wrap",stack:e}),ms=({stack:e})=>t.jsx(r4,{className:"grid-fit gap-4",stack:e}),r4=({className:e,stack:n})=>t.jsxs("div",{className:"border bdr-2 pad-a-4 paper",children:[t.jsxs("div",{className:"text-center font-mono small mar-b-2 ",children:[".",e.split(" ").join("."),".",t.jsxs("b",{children:["stack-",n]})]}),t.jsxs("div",{className:`${e} stack-${n}`,children:[t.jsx("div",{className:"inverse pad-a-2 bdr-1 red    ",children:"Red"}),t.jsx("div",{className:"inverse pad-a-2 bdr-1 brown  ",children:"Brown"}),t.jsx("div",{className:"inverse pad-a-2 bdr-1 orange ",children:"Orange"}),t.jsx("div",{className:"inverse pad-a-2 bdr-1 yellow ",children:"Yellow"}),t.jsx("div",{className:"inverse pad-a-2 bdr-1 olive  ",children:"Olive"}),t.jsx("div",{className:"inverse pad-a-2 bdr-1 green  ",children:"Green"}),t.jsx("div",{className:"inverse pad-a-2 bdr-1 teal   ",children:"Teal"}),t.jsx("div",{className:"inverse pad-a-2 bdr-1 blue   ",children:"Blue"}),t.jsx("div",{className:"inverse pad-a-2 bdr-1 indigo ",children:"Indigo"}),t.jsx("div",{className:"inverse pad-a-2 bdr-1 violet ",children:"Violet"}),t.jsx("div",{className:"inverse pad-a-2 bdr-1 purple ",children:"Purple"}),t.jsx("div",{className:"inverse pad-a-2 bdr-1 pink   ",children:"Pink"}),t.jsx("div",{className:"inverse pad-a-2 bdr-1 maroon ",children:"Maroon"})]})]}),JR=So.Consumer(QR),eO=Object.freeze(Object.defineProperty({__proto__:null,default:JR},Symbol.toStringTag,{value:"Module"})),nO=`<div class="surface border pad-2">
  <div class="surface-1 pad-2 mar-b-2">
    surface-1
  </div>
  <div class="surface-2 pad-2 mar-b-2">
    surface-2
  </div>
  <div class="surface-3 pad-2 mar-b-2">
    surface-3
  </div>
  <div class="surface-4 pad-2 mar-b-2">
    surface-4
  </div>
  <div class="surface-5 pad-2 mar-b-2">
    surface-5
  </div>
  <div class="surface-1 shadow-1 pad-4">
    surface-1
    <div class="surface-2 shadow-1 pad-4 mar-t-4">
      surface-2
      <div class="surface-3 shadow-2 pad-4 mar-t-4">
        surface-3
        <div class="surface-4 shadow-3 pad-4 mar-t-4">
          surface-4
          <div class="surface-5 shadow-4 pad-4 mar-t-4">
            surface-5
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`,tO=`<div class="grid-2 gap-2 surface-3 pad-2">
  <div class="surface pad-2">
    surface
  </div>
  <div class="paper pad-2">
    paper (alias)
  </div>
</div>
`,rO=`<div class="surface-1 border pad-2 mar-b-2">
  surface-1
</div>
<div class="surface-2 border pad-2 mar-b-2">
  surface-2
</div>
<div class="surface-3 border pad-2 mar-b-2">
  surface-3
</div>
<div class="surface-4 border pad-2 mar-b-2">
  surface-4
</div>
<div class="surface-5 border pad-2 mar-b-2">
  surface-5
</div>
<div class="surface-1 border shadow-1 pad-2 bdr-8">
  <div class="surface-2 border shadow-2 pad-2 bdr-6">
    <div class="surface-3 border shadow-3 pad-2 bdr-4">
      <div class="surface-4 border shadow-4 pad-2 bdr-2">
        <div class="surface-5 border shadow-5 pad-2">
          Nested surfaces with borders
        </div>
      </div>
    </div>
  </div>
</div>
`,sO=`<div class="grid-3 gap-2 smallish">
  <div class="red surface-1 pad-2 border">
    red surface-1
  </div>
  <div class="green surface-1 pad-2 border">
    green surface-1
  </div>
  <div class="blue surface-1 pad-2 border">
    blue surface-1
  </div>
  <div class="red surface-2 pad-2 border">
    red surface-2
  </div>
  <div class="green surface-2 pad-2 border">
    green surface-2
  </div>
  <div class="blue surface-2 pad-2 border">
    blue surface-2
  </div>
  <div class="red surface-3 pad-2 border">
    red surface-3
  </div>
  <div class="green surface-3 pad-2 border">
    green surface-3
  </div>
  <div class="blue surface-3 pad-2 border">
    blue surface-3
  </div>
  <div class="red surface-4 pad-2 border">
    red surface-4
  </div>
  <div class="green surface-4 pad-2 border">
    green surface-4
  </div>
  <div class="blue surface-4 pad-2 border">
    blue surface-4
  </div>
  <div class="red surface-5 pad-2 border">
    red surface-5
  </div>
  <div class="green surface-5 pad-2 border">
    green surface-5
  </div>
  <div class="blue surface-5 pad-2 border">
    blue surface-5
  </div>
</div>
`,aO=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Surfaces"}),t.jsxs("p",{children:['When building UI components it can be useful to think in terms of "surfaces", with each surface getting progressively "closer" to the user and demanding their closer attention. You may want to combine these with the ',t.jsx("code",{children:"shadow-N"})," classes to further emphasise the effect."]}),t.jsx("p",{children:"As a general rule surfaces that are in the foreground should be lighter than those in the background.  Note that this applies to dark themes as well as light themes."}),t.jsx("h2",{children:"Surface Classes"}),t.jsxs("p",{children:["Use the ",t.jsx("code",{children:"surface-1"}),", ",t.jsx("code",{children:"surface-2"}),","," ",t.jsx("code",{children:"surface-3"}),", ",t.jsx("code",{children:"surface-4"})," and"," ",t.jsx("code",{children:"surface-5"})," CSS classes to define elements with appropriate background and text colors to achieve this effect.  The lower numbers are meant to be further in the background with higher numbers being closer to the foreground."]}),t.jsx(S,{html:nO,caption:"Surfaces",expand:!0}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"surface"})," class is a special case being used here to apply a background color for the examples.  When using a light theme this"," ","is ",t.jsx("code",{children:"white"})," and for a dark theme it is ",t.jsx("code",{children:"black"}),". This also has the ",t.jsx("code",{children:"paper"})," alias (which I find easier to remember)."]}),t.jsx(S,{html:tO,caption:"surface / paper",expand:!0}),t.jsxs("p",{children:["The styles are defined using CSS variables for the foreground, background and border colors, e.g. ",t.jsx("code",{children:"--color"}),", ",t.jsx("code",{children:"--background-color"})," ","and ",t.jsx("code",{children:"--border-color"}),". In turn these are defined using the ",t.jsx("code",{children:"grey"})," color range depending on the color theme. For example, the ",t.jsx("code",{children:"--background-color"}),"for ",t.jsx("code",{children:"--surface-3"}),"is defined to be ",t.jsx("code",{children:"--color-90"})," by default, and ",t.jsx("code",{children:"--color-10"})," when the dark theme is in effect."]}),t.jsx("h2",{children:"Surfaces With Borders"}),t.jsxs("p",{children:["Add the ",t.jsx("code",{children:"border"})," CSS class to add a border around a surface. You can also add the ",t.jsx(Rd,{className:"code",text:"bdr-N"})," classes to set the border radius."]}),t.jsx(S,{html:rO,caption:"Surface Borders",expand:!0}),t.jsx("h2",{children:"Colored Surfaces"}),t.jsx("p",{children:"Add any of the color classes to get different colored surfaces."}),t.jsx(S,{html:sO,caption:"Color Surfaces"})]}),lO=Object.freeze(Object.defineProperty({__proto__:null,default:aO},Symbol.toStringTag,{value:"Module"})),oO=`<div class="flex gap-2 mar-b-2">
  <code>H1</code>
  <h1>
    It was in the Isle of Lucy jazz-blues festival.
  </h1>
</div>
<div class="flex gap-2 mar-b-2">
  <code>H2</code>
  <h2>
    And it was tragic really. He exploded on stage.
    Just like that he went up.
  </h2>
</div>
<div class="flex gap-2 mar-b-2">
  <code>H3</code>
  <h3>
    He just was like a flash of green light and that was it,
    nothing was left.
  </h3>
</div>
<div class="flex gap-2 mar-b-2">
  <code>H4</code>
  <h4>
    Well, there was a little green globule on his drum seat.
  </h4>
</div>
<div class="flex gap-2 mar-b-2">
  <code>H5</code>
  <h5>
    Like a stain, really.
  </h5>
</div>
<div class="flex gap-2 mar-b-2">
  <code>H6</code>
  <h6>
    It was a small stain,
  </h6>
</div>
`,iO=`<div class="flow">
  <h1>This is a H1 Heading</h1>
  <p>
    Before I met Jeanine, my life was cosmically in shambles, it was, ah, I was
    using bits and pieces of whatever Eastern philosophies happened to drift
    through my transom and she sort of sorted it out for me, straightened it out
    for me, gave me a path, you know, a path to follow.
  </p>

  <h2>This is a H2 Heading</h2>
  <p>
    This one... this 'course is a custom three-pickup 'Paul. This is my radio...
    unit... So I strap this...this piece on, you know, right down in here when
    I'm on stage and... It's a wireless. Wireless, exactly. And... uh I can play
    without all the mucky-muck. You can run anywhere on stage with that. Exactly.
  </p>

  <h3>This is a H3 Heading</h3>
  <p>
    We're very lucky in the sense that we've got two visionaries in the David and
    Nigel are both like, uh, like poets, you know, like Shelley or Byron, or
    people like that. The two totally distinct types of visionaries, it's like
    fire and ice, basically, you see and I feel my role in the band, is to be
    kind of in the middle of that, kind of like lukewarm water, in a sense.
  </p>

  <h4>This is a H4 Heading</h4>
  <p>
    Ohh, quite exiting, quite exiting this computer magic, wheeeee... How many uh
    planets have you destroyed, Viv? Well, four or five, fifth time around I
    think... really five galaxies gone, you know...
  </p>

  <h5>This is a H5 Heading</h5>
  <p>
    It's my job to do what I'm asked to do by the creative element of this band.
    And that's what I did. C'mon... The audience were laughing. So it became a
    comedy number. Yes it did! Yes it fucking well did, and it was not pleasant
    to be part of the comedy on stage. Backstage, perhaps, it was very amusing.
  </p>

  <h6>This is a H6 Heading</h6>
  <p>
    I believe virtually everything I read, and I think that is what makes me more
    of a selective human, than someone who doesn't believe anything.
  </p>
</div>`,dO=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Typography"}),t.jsx("h2",{children:"Headings"}),t.jsxs("p",{children:["Headings have ",t.jsx("code",{children:"text-wrap: balance"})," set to balance the length of long lines.  The ",t.jsx("code",{children:"line-height"})," is reduced to ",t.jsx("code",{children:"1.3"}),"."]}),t.jsxs("p",{children:["Margins and padding are removed by default.  You can add them in yourself, either using the ",t.jsx(Od,{})," utiltiy classes or globally to match your site style. Or use something like the ",t.jsx("code",{children:"flow"})," class (see below) to add margins between elements where appropriate."]}),t.jsx(S,{html:oO,caption:"Headings"}),t.jsx("h2",{children:"Flow"}),t.jsxs("p",{children:["Use the ",t.jsx("code",{children:"flow"})," class on a container to add spacing between block elements.  Thanks to"," ",t.jsx("a",{href:"https://andy-bell.co.uk/my-favourite-3-lines-of-css/",children:"Andy Bell"})," ","for this one."]}),t.jsx(S,{html:iO,caption:"Flow"})]}),cO=Object.freeze(Object.defineProperty({__proto__:null,default:dO},Symbol.toStringTag,{value:"Module"})),uO=`<div class="grid-1 gap-4">
  <input type="text" value="A wide input"/>
  <button class="blue wide">
    A wide button
  </button>
</div>`,hO=`<div class="fgc-100 grid-1 gap-2 scroll-x">
  <style>
    .wb {
      padding: 0.25rem;
      font-size: var(--size-smaller);
      background-color: var(--color-50);
      border-right: 5px solid var(--color-40);
    }
  </style>
  <div class="width-2rem   red     wb">2rem</div>
  <div class="width-3rem   brown   wb">3rem</div>
  <div class="width-4rem   orange  wb">4rem</div>
  <div class="width-5rem   yellow  wb">5rem</div>
  <div class="width-6rem   olive   wb">6rem</div>
  <div class="width-8rem   green   wb">8rem</div>
  <div class="width-10rem  teal    wb">10rem</div>
  <div class="width-12rem  blue    wb">12rem</div>
  <div class="width-14rem  indigo  wb">14rem</div>
  <div class="width-16rem  violet  wb">16rem</div>
  <div class="width-18rem  purple  wb">18rem</div>
  <div class="width-20rem  pink    wb">20rem</div>
  <div class="width-25rem  maroon  wb">25rem</div>
  <div class="width-30rem  red     wb">30rem</div>
  <div class="width-35rem  brown   wb">35rem</div>
  <div class="width-40rem  orange  wb">40rem</div>
  <div class="width-45rem  yellow  wb">45rem</div>
  <div class="width-50rem  olive   wb">50rem</div>
  <div class="width-60rem  green   wb">60rem</div>
  <div class="width-70rem  teal    wb">70rem</div>
  <div class="width-80rem  blue    wb">80rem</div>
  <div class="width-90rem  indigo  wb">90rem</div>
  <div class="width-100rem violet  wb">100rem</div>
</div>`,pO=`<div class="fgc-100 grid-1 gap-2 scroll-x">
  <style>
    .wb {
      padding: 0.25rem;
      font-size: var(--size-smaller);
      background-color: var(--color-50);
      border-right: 5px solid var(--color-40);
    }
  </style>
  <div class="width-32px   red     wb">32px</div>
  <div class="width-48px   brown   wb">48px</div>
  <div class="width-64px   orange  wb">64px</div>
  <div class="width-80px   yellow  wb">80px</div>
  <div class="width-96px   olive   wb">96px</div>
  <div class="width-128px  green   wb">128px</div>
  <div class="width-160px  teal    wb">160px</div>
  <div class="width-192px  blue    wb">192px</div>
  <div class="width-224px  indigo  wb">224px</div>
  <div class="width-256px  violet  wb">256px</div>
  <div class="width-288px  purple  wb">288px</div>
  <div class="width-320px  pink    wb">320px</div>
  <div class="width-400px  maroon  wb">400px</div>
  <div class="width-480px  red     wb">480px</div>
  <div class="width-560px  brown   wb">560px</div>
  <div class="width-640px  orange  wb">640px</div>
  <div class="width-720px  yellow  wb">720px</div>
  <div class="width-800px  olive   wb">800px</div>
  <div class="width-960px  green   wb">960px</div>
  <div class="width-1120px teal    wb">1120px</div>
  <div class="width-1280px blue    wb">1280px</div>
  <div class="width-1440px indigo  wb">1440px</div>
  <div class="width-1600px violet  wb">1600px</div>
</div>`,fO=`<div class="fgc-100 grid-1 gap-2 scroll-x">
  <style>
    .wb {
      padding: 0.25rem;
      font-size: var(--size-smaller);
      background-color: var(--color-50);
      border-right: 5px solid var(--color-40);
    }
  </style>
  <div class="max-width-2rem   red     wb">2rem</div>
  <div class="max-width-3rem   brown   wb">3rem</div>
  <div class="max-width-4rem   orange  wb">4rem</div>
  <div class="max-width-5rem   yellow  wb">5rem</div>
  <div class="max-width-6rem   olive   wb">6rem</div>
  <div class="max-width-8rem   green   wb">8rem</div>
  <div class="max-width-10rem  teal    wb">10rem</div>
  <div class="max-width-12rem  blue    wb">12rem</div>
  <div class="max-width-14rem  indigo  wb">14rem</div>
  <div class="max-width-16rem  violet  wb">16rem</div>
  <div class="max-width-18rem  purple  wb">18rem</div>
  <div class="max-width-20rem  pink    wb">20rem</div>
  <div class="max-width-25rem  maroon  wb">25rem</div>
  <div class="max-width-30rem  red     wb">30rem</div>
  <div class="max-width-35rem  brown   wb">35rem</div>
  <div class="max-width-40rem  orange  wb">40rem</div>
  <div class="max-width-45rem  yellow  wb">45rem</div>
  <div class="max-width-50rem  olive   wb">50rem</div>
  <div class="max-width-60rem  green   wb">60rem</div>
  <div class="max-width-70rem  teal    wb">70rem</div>
  <div class="max-width-80rem  blue    wb">80rem</div>
  <div class="max-width-90rem  indigo  wb">90rem</div>
  <div class="max-width-100rem violet  wb">100rem</div>
</div>`,mO=`// define your own range of rem widths...
$rem-widths:
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 25, 30,
  35, 40, 45, 50, 60, 70, 80, 90, 100 !default;

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,gO=(e,n=uk,r="or")=>t.jsxs(t.Fragment,{children:[e.slice(0,e.length-2).map(s=>t.jsxs(t.Fragment,{children:[n(s),", "]})),n(e.at(-2))," ",r," ",n(e.at(-1))]}),Sm=[2,3,4,5,6,8,10,12,14,16,18,20,25,30,35,40,45,50,60,70,80,90,100],vO=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Widths"}),t.jsx("h2",{children:"Wide"}),t.jsxs("p",{children:["Use the ",t.jsx("code",{children:"wide"})," CSS class to set an inline element to expand to the full width of the container."]}),t.jsx(S,{html:uO,caption:"Wide",expand:!0}),t.jsx("h2",{children:"Width Classes"}),t.jsxs(re,{children:[t.jsxs("p",{children:["The ",t.jsx("code",{children:"width-Nrem"})," classes can be used to set the width of an element to a number of rem units."]}),t.jsxs("p",{children:["The values for ",t.jsx("code",{children:"N"})," can be"," ",gO(Sm,e=>t.jsx("code",{children:e})),"."]})]}),t.jsx(S,{html:hO,caption:"Widths",expand:!0}),t.jsx("h2",{children:"Pixel Width Classes"}),t.jsxs("p",{children:["If you prefer to think in pixels, you can use the corresponding"," ",t.jsx("code",{children:"width-Npx"})," classes instead."]}),t.jsx(S,{html:pO,caption:"Widths in Px",expand:!0}),t.jsx("h2",{children:"Max Width Classes"}),t.jsxs(re,{children:[t.jsxs("p",{children:["The ",t.jsx("code",{children:"max-width-Nrem"})," classes can be used to set the maximum width of an element to a number of rem units.  In this case the width of the element will be constrained to the width of the parent element. You can also use the corresponding ",t.jsx("code",{children:"max-width-Npx"})," classes if you prefer to think in pixels."]}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"width-*"})," and ",t.jsx("code",{children:"max-width-*"})," classes work by using the ",t.jsx("code",{children:"--width"})," custom property which is set to the appropriate number of rem units based on the ",t.jsx("code",{children:"-Nrem"})," ","or ",t.jsx("code",{children:"-Npx"})," suffix."]})]}),t.jsx(S,{html:fO,caption:"Widths",expand:!0}),t.jsx("h2",{children:"Rem/Pixel Sizes"}),t.jsxs(re,{children:[t.jsx("p",{children:"The corresponding pixel widths (assuming 1rem = 16px) for each of the classes are shown below."}),t.jsxs("p",{children:["You can set the ",t.jsx("code",{children:"$rem-widths"})," SASS variable if you want to define a different set of width classes."]})]}),t.jsx(Ot,{code:mO,caption:"Custom Sizes",language:"scss",expand:!0,children:t.jsxs("table",{className:"brand celled striped properties small wide mar-b-2",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Rem Class"}),t.jsx("th",{children:"Pixel Class"}),t.jsx("th",{children:"Rems"}),t.jsx("th",{children:"Pixels"})]})}),t.jsx("tbody",{children:Sm.map(e=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("code",{children:["width-",e,"rem"]})}),t.jsx("td",{children:t.jsxs("code",{children:["width-",e*16,"px"]})}),t.jsx("td",{children:e}),t.jsx("td",{children:e*16})]},e))})]})})]}),xO=Object.freeze(Object.defineProperty({__proto__:null,default:vO},Symbol.toStringTag,{value:"Module"})),bO=`<div class="grid-1 gap-6">
  <div>
    <div class="small">wrap</div>
    <div class="largest">
      Can I raise a practical question at this point? Are We gonna do Stonehenge tomorrow?
    </div>
  </div>
  <div>
    <div class="small">balance</div>
    <div class="largest wrap-balance">
      Can I raise a practical question at this point? Are We gonna do Stonehenge tomorrow?
    </div>
  </div>
  <div>
    <div class="small">pretty</div>
    <div class="largest wrap-pretty">
      Can I raise a practical question at this point? Are We gonna do Stonehenge tomorrow?
    </div>
  </div>
  <div>
    <div class="small">stable</div>
    <div class="largest wrap-stable">
      Can I raise a practical question at this point? Are We gonna do Stonehenge tomorrow?
    </div>
  </div>
  <div class="scroll-x">
    <div class="small">nowrap (in a scroll-x container)</div>
    <div class="largest nowrap">
      Can I raise a practical question at this point? Are We gonna do Stonehenge tomorrow?
    </div>
  </div>
</div>`,yO=()=>t.jsxs("div",{className:"prose flow",children:[t.jsx("h1",{children:"Wrap"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"wrap"})," CSS class sets the ",t.jsx("code",{children:"text-wrap"})," to"," ",t.jsx("code",{children:"wrap"})," (which is the default).The ",t.jsx("code",{children:"nowrap"})," class unsurprisingly sets it to ",t.jsx("code",{children:"nowrap"}),".  The ",t.jsx("code",{children:"wrap-balance"}),","," ",t.jsx("code",{children:"wrap-pretty"})," and ",t.jsx("code",{children:"wrap-stable"})," classes set it to ",t.jsx("code",{children:"balance"}),", ",t.jsx("code",{children:"pretty"})," and ",t.jsx("code",{children:"stable"})," respectively."]}),t.jsx("p",{children:"You may not see much difference between them.  Try resizing your browser window to see how they flow differently."}),t.jsx(S,{html:bO,caption:"wrap"})]}),wO=Object.freeze(Object.defineProperty({__proto__:null,default:yO},Symbol.toStringTag,{value:"Module"})),s4=e=>F.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},viewBox:"0 0 512 428",...e},F.createElement("path",{d:"M315 260c4 5 4 15-2 19 0-5-2-12-5-15-1-3-7-8-13-9 5-3 16-1 20 5Zm168 106c1 5-19 2-19 18 0 8 3 13-1 14-5 1-6-4-7-11-2-14 8-19 18-21 8-3 8-2 9 0ZM318 251l-2-1c-15-7-33-3-40 10-5 10-2 22 8 31l-12-6c-20-16-24-44-19-50 4-6 34-10 54 6l11 10ZM297 40c-3 2-11-11-23-9-8 1-12-2-7-5 13-11 37 10 30 14ZM126 74c-12-8-26-12-41-8-11 3-18 10-22 19l-5 1c-10 1-20 4-28 6 23-32 52-43 80-43h2l1-2c1-9-4-18-18-25 31-7 70 0 90 12l3 1 1-3c1-4 1-15-7-25 39 7 69 20 92 36 43 37 66 84 85 130 21 49 38 96 73 123l2 2 54 49 8 7c-6 0-12 2-21 4-28 6-29 18-26 39 2 10 6 15 13 16-25 7-39 12-70 6a535 535 0 0 1-111-35c-18-8-30-18-36-29l7-4a2 2 0 0 0-3-4c-4 2-9 7-19 6a2 2 0 0 0 0 5l11-2c5 12 16 22 32 30-32 11-60 3-85-11-27-16-51-40-72-57-18-14-34-24-49-22-10 1-19 7-27 19-15-31 4-62 23-82l2-2-3-1c-18-12-38-5-52 11-1-13 5-31 14-47 10-17 23-32 37-37 90-17 133 58 178 124 27 38 86 83 199 120-7-19-4-29 1-37-27-13-61-34-83-74-60-109-87-187-174-209-15-4-35-8-56-7Zm0 18c-2 10-31-18-37-3-10 28-20 12-18 4 13-39 56-10 55-1Z",fill:"currentColor"})),jO=e=>F.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},F.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z",fill:"currentColor"})),a4="1.1.17",l4="2024-08-26",Tm="2018",ou=l4.match(/^(\d+)/)[1],CO=ou===Tm?ou:`${Tm} - ${ou}`,kO=({sidebarIconClick:e})=>t.jsx("header",{children:t.jsxs("nav",{children:[t.jsxs("div",{children:[t.jsx(Fa,{name:"bars",className:"toggle-sidebar action",onClick:e}),t.jsx(dr,{to:"/",className:"home mar-l-2",text:"Badger-CSS"}),t.jsxs("span",{className:"small mar-l-2",children:["v",a4]})]}),t.jsxs("div",{className:"flex middle gap-4",children:[t.jsx("a",{href:"https://badgerpower.com/",target:"_blank",rel:"noreferrer",children:t.jsx(s4,{className:"badgerpower"})}),t.jsx("a",{href:"https://github.com/abw/badger-css",target:"_blank",rel:"noreferrer",children:t.jsx(jO,{className:"night-and-day--icon"})}),t.jsx(JM,{})]})]})}),SO=So.Consumer(kO),ra=({title:e,items:n})=>t.jsxs("div",{className:"menu",children:[t.jsx("h4",{children:e}),n.map(r=>t.jsx(dr,{...r},r.to))]}),TO=[{to:"/getting-started/installation",text:"Installation"},{to:"/getting-started/good",text:"What's good about it?"},{to:"/getting-started/bad",text:"What's wrong with it?"}],NO=[{to:"/colors/demo",text:"Color Demo"},{to:"/colors/ranges",text:"Color Ranges"},{to:"/colors/brand",text:"Brand Colors"},{to:"/colors/variables",text:"Color Variables"},{to:"/colors/utilities",text:"Color Utilities"},{to:"/colors/gradients",text:"Color Gradients"},{to:"/colors/palette",text:"Custom Palette"}],LO=[{to:"/utilities/",text:"Introduction"},{to:"/utilities/alignment",text:"Alignment"},{to:"/utilities/borders",text:"Borders"},{to:"/utilities/breakpoints",text:"Breakpoints"},{to:"/utilities/columns",text:"Columns"},{to:"/utilities/conform",text:"Conform"},{to:"/utilities/display",text:"Display"},{to:"/utilities/flex",text:"Flex"},{to:"/utilities/fonts",text:"Fonts"},{to:"/utilities/font-styles",text:"Font Styles"},{to:"/utilities/font-weights",text:"Font Weights"},{to:"/utilities/grid",text:"Grid"},{to:"/utilities/position",text:"Position"},{to:"/utilities/scrolling",text:"Scrolling"},{to:"/utilities/shadows",text:"Shadows"},{to:"/utilities/sizes",text:"Text Sizes"},{to:"/utilities/spacing",text:"Spacing"},{to:"/utilities/split",text:"Splits"},{to:"/utilities/stack",text:"Stacking"},{to:"/utilities/surfaces",text:"Surfaces"},{to:"/utilities/typography",text:"Typography"},{to:"/utilities/widths",text:"Widths"},{to:"/utilities/wrap",text:"Wrap"}],_O=[{to:"/forms/",text:"Introduction"},{to:"/forms/buttons",text:"Buttons"},{to:"/forms/checkboxes",text:"Checkboxes"},{to:"/forms/radio-buttons",text:"Radio Buttons"},{to:"/forms/select",text:"Select Inputs"},{to:"/forms/text",text:"Text Inputs"},{to:"/forms/textarea",text:"Text Area Inputs"},{to:"/forms/input",text:"Fake Inputs"},{to:"/forms/multi-inputs",text:"Multiple Inputs"},{to:"/forms/field",text:"Form Fields"},{to:"/forms/prefix-suffix",text:"Prefix and Suffix"},{to:"/forms/fieldset",text:"Form Field Sets"},{to:"/forms/styling",text:"Form Styling"}],$O=[{to:"/components/alerts",text:"Alerts"},{to:"/components/badges",text:"Badges"},{to:"/components/details",text:"Details"},{to:"/components/dialog",text:"Dialog"},{to:"/components/icons",text:"SVG Icons"},{to:"/components/menus",text:"Menus"},{to:"/components/overlay",text:"Overlay"},{to:"/components/tables",text:"Tables"},{to:"/components/tabs",text:"Tabs"},{to:"/components/tooltips",text:"Tooltips"}],IO=[{to:"/customising/sass",text:"Custom Stylesheet"}];const EO=({closeSidebar:e})=>t.jsxs("div",{onClick:e,children:[t.jsx(ra,{title:"Getting Started",items:TO}),t.jsx(ra,{title:"Colors",items:NO}),t.jsx(ra,{title:"Utilities",items:LO}),t.jsx(ra,{title:"Forms",items:_O}),t.jsx(ra,{title:"Components",items:$O}),t.jsx(ra,{title:"Customising",items:IO}),!1]}),MO=So.Consumer(EO),AO=()=>t.jsx("footer",{children:t.jsxs("nav",{className:"flex space middle gap-4 stack-tablet",children:[t.jsx("div",{children:t.jsxs("a",{href:"https://badgerpower.com",target:"_blank",rel:"noreferrer",className:"badgerpower",children:[t.jsx(s4,{}),"Badger Powered"]})}),t.jsxs("div",{children:["© Copyright ",CO," ",t.jsx("a",{href:"https://github.com/abw",target:"_blank",rel:"noreferrer",children:"Andy Wardley"})]}),t.jsxs("div",{children:["v",a4," - ",l4]})]})});function PO(){const{pathname:e}=Ua();return F.useEffect(()=>RO(document.getElementById("content")),[e]),null}function RO(e){e==null||e.scrollTo({top:0,left:0})}const OO=()=>{const{theme:e,variant:n,sidebarOpen:r}=KR();return t.jsxs("div",{id:"site","data-sidebar":n,"data-sidebar-action":r?YR:ZR,"data-theme":e,children:[t.jsx(SO,{}),t.jsxs("div",{id:"app",children:[t.jsx(PO,{}),t.jsx("aside",{children:t.jsx(MO,{})}),t.jsx("main",{id:"content",children:t.jsx(kS,{})})]}),t.jsx(AO,{})]})},FO=Object.assign({"../pages/colors/brand.jsx":JS,"../pages/colors/demo.jsx":wT,"../pages/colors/gradients.jsx":NT,"../pages/colors/greyscale.jsx":PT,"../pages/colors/palette.jsx":WT,"../pages/colors/ranges.jsx":YT,"../pages/colors/utilities.jsx":rN,"../pages/colors/variables.jsx":aN,"../pages/components/alerts.jsx":yN,"../pages/components/badges.jsx":NN,"../pages/components/details.jsx":WN,"../pages/components/dialog.jsx":KN,"../pages/components/icons.jsx":lL,"../pages/components/menus.jsx":yL,"../pages/components/overlay.jsx":LL,"../pages/components/tables.jsx":VL,"../pages/components/tabs.jsx":e_,"../pages/components/tooltips.jsx":i_,"../pages/customising/sass.jsx":x_,"../pages/decoder.jsx":k_,"../pages/forms/buttons.jsx":O_,"../pages/forms/checkboxes.jsx":U_,"../pages/forms/field.jsx":a$,"../pages/forms/fieldset.jsx":i$,"../pages/forms/index.jsx":UE,"../pages/forms/input.jsx":QE,"../pages/forms/multi-inputs.jsx":nM,"../pages/forms/prefix-suffix.jsx":gM,"../pages/forms/radio-buttons.jsx":jM,"../pages/forms/select.jsx":IM,"../pages/forms/styling.jsx":AM,"../pages/forms/text.jsx":zM,"../pages/forms/textarea.jsx":YM,"../pages/getting-started/bad.jsx":KM,"../pages/getting-started/good.jsx":lA,"../pages/getting-started/installation.jsx":pA,"../pages/index.jsx":gA,"../pages/test/flex-stack.jsx":bA,"../pages/test/nested-details.jsx":jA,"../pages/utilities/alignment.jsx":NA,"../pages/utilities/borders.jsx":zA,"../pages/utilities/breakpoints.jsx":HA,"../pages/utilities/columns.jsx":KA,"../pages/utilities/conform.jsx":XA,"../pages/utilities/display.jsx":nP,"../pages/utilities/flex.jsx":mP,"../pages/utilities/font-styles.jsx":xP,"../pages/utilities/font-weights.jsx":kP,"../pages/utilities/fonts.jsx":IP,"../pages/utilities/grid.jsx":GP,"../pages/utilities/index.jsx":YP,"../pages/utilities/position.jsx":KP,"../pages/utilities/scrolling.jsx":tR,"../pages/utilities/shadows.jsx":lR,"../pages/utilities/sizes.jsx":hR,"../pages/utilities/spacing.jsx":yR,"../pages/utilities/split.jsx":NR,"../pages/utilities/stack.jsx":eO,"../pages/utilities/surfaces.jsx":lO,"../pages/utilities/typography.jsx":cO,"../pages/utilities/widths.jsx":xO,"../pages/utilities/wrap.jsx":wO}),BO=Object.entries(FO).filter(([e])=>!e.match(/\/_/)).map(([e,n])=>({path:e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,""),Component:n.default})),DO=IS([{path:"/",element:t.jsx(OO,{}),children:BO}],{basename:"/badger-css/"});iu.createRoot(document.getElementById("root")).render(t.jsx(cn.StrictMode,{children:t.jsx(tA,{storageKey:"theme",defaultVariant:jh,children:t.jsx(So.Provider,{children:t.jsx(jS,{router:DO})})})}));
