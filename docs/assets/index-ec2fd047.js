function s6(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(r,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();var Oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var u1={exports:{}},pc={},h1={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ci=Symbol.for("react.element"),c6=Symbol.for("react.portal"),d6=Symbol.for("react.fragment"),u6=Symbol.for("react.strict_mode"),h6=Symbol.for("react.profiler"),f6=Symbol.for("react.provider"),p6=Symbol.for("react.context"),g6=Symbol.for("react.forward_ref"),m6=Symbol.for("react.suspense"),v6=Symbol.for("react.memo"),y6=Symbol.for("react.lazy"),h0=Symbol.iterator;function b6(e){return e===null||typeof e!="object"?null:(e=h0&&e[h0]||e["@@iterator"],typeof e=="function"?e:null)}var f1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p1=Object.assign,g1={};function Pl(e,t,n){this.props=e,this.context=t,this.refs=g1,this.updater=n||f1}Pl.prototype.isReactComponent={};Pl.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function m1(){}m1.prototype=Pl.prototype;function gh(e,t,n){this.props=e,this.context=t,this.refs=g1,this.updater=n||f1}var mh=gh.prototype=new m1;mh.constructor=gh;p1(mh,Pl.prototype);mh.isPureReactComponent=!0;var f0=Array.isArray,v1=Object.prototype.hasOwnProperty,vh={current:null},y1={key:!0,ref:!0,__self:!0,__source:!0};function b1(e,t,n){var r,a={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)v1.call(t,r)&&!y1.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var d=Array(s),f=0;f<s;f++)d[f]=arguments[f+2];a.children=d}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:ci,type:e,key:o,ref:i,props:a,_owner:vh.current}}function w6(e,t){return{$$typeof:ci,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function yh(e){return typeof e=="object"&&e!==null&&e.$$typeof===ci}function x6(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var p0=/\/+/g;function gd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?x6(""+e.key):t.toString(36)}function ss(e,t,n,r,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ci:case c6:i=!0}}if(i)return i=e,a=a(i),e=r===""?"."+gd(i,0):r,f0(a)?(n="",e!=null&&(n=e.replace(p0,"$&/")+"/"),ss(a,t,n,"",function(f){return f})):a!=null&&(yh(a)&&(a=w6(a,n+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(p0,"$&/")+"/")+e)),t.push(a)),1;if(i=0,r=r===""?".":r+":",f0(e))for(var s=0;s<e.length;s++){o=e[s];var d=r+gd(o,s);i+=ss(o,t,n,d,a)}else if(d=b6(e),typeof d=="function")for(e=d.call(e),s=0;!(o=e.next()).done;)o=o.value,d=r+gd(o,s++),i+=ss(o,t,n,d,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Oi(e,t,n){if(e==null)return e;var r=[],a=0;return ss(e,r,"","",function(o){return t.call(n,o,a++)}),r}function S6(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Wt={current:null},cs={transition:null},C6={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:cs,ReactCurrentOwner:vh};ke.Children={map:Oi,forEach:function(e,t,n){Oi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Oi(e,function(){t++}),t},toArray:function(e){return Oi(e,function(t){return t})||[]},only:function(e){if(!yh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ke.Component=Pl;ke.Fragment=d6;ke.Profiler=h6;ke.PureComponent=gh;ke.StrictMode=u6;ke.Suspense=m6;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C6;ke.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=p1({},e.props),a=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=vh.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(d in t)v1.call(t,d)&&!y1.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&s!==void 0?s[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){s=Array(d);for(var f=0;f<d;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:ci,type:e.type,key:a,ref:o,props:r,_owner:i}};ke.createContext=function(e){return e={$$typeof:p6,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:f6,_context:e},e.Consumer=e};ke.createElement=b1;ke.createFactory=function(e){var t=b1.bind(null,e);return t.type=e,t};ke.createRef=function(){return{current:null}};ke.forwardRef=function(e){return{$$typeof:g6,render:e}};ke.isValidElement=yh;ke.lazy=function(e){return{$$typeof:y6,_payload:{_status:-1,_result:e},_init:S6}};ke.memo=function(e,t){return{$$typeof:v6,type:e,compare:t===void 0?null:t}};ke.startTransition=function(e){var t=cs.transition;cs.transition={};try{e()}finally{cs.transition=t}};ke.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ke.useCallback=function(e,t){return Wt.current.useCallback(e,t)};ke.useContext=function(e){return Wt.current.useContext(e)};ke.useDebugValue=function(){};ke.useDeferredValue=function(e){return Wt.current.useDeferredValue(e)};ke.useEffect=function(e,t){return Wt.current.useEffect(e,t)};ke.useId=function(){return Wt.current.useId()};ke.useImperativeHandle=function(e,t,n){return Wt.current.useImperativeHandle(e,t,n)};ke.useInsertionEffect=function(e,t){return Wt.current.useInsertionEffect(e,t)};ke.useLayoutEffect=function(e,t){return Wt.current.useLayoutEffect(e,t)};ke.useMemo=function(e,t){return Wt.current.useMemo(e,t)};ke.useReducer=function(e,t,n){return Wt.current.useReducer(e,t,n)};ke.useRef=function(e){return Wt.current.useRef(e)};ke.useState=function(e){return Wt.current.useState(e)};ke.useSyncExternalStore=function(e,t,n){return Wt.current.useSyncExternalStore(e,t,n)};ke.useTransition=function(){return Wt.current.useTransition()};ke.version="18.2.0";h1.exports=ke;var B=h1.exports;const $t=Gr(B),g0=s6({__proto__:null,default:$t},[B]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k6=B,_6=Symbol.for("react.element"),T6=Symbol.for("react.fragment"),$6=Object.prototype.hasOwnProperty,E6=k6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N6={key:!0,ref:!0,__self:!0,__source:!0};function w1(e,t,n){var r,a={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)$6.call(t,r)&&!N6.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:_6,type:e,key:o,ref:i,props:a,_owner:E6.current}}pc.Fragment=T6;pc.jsx=w1;pc.jsxs=w1;u1.exports=pc;var bh=u1.exports;const Rn=bh.Fragment,l=bh.jsx,h=bh.jsxs;var nu={},x1={exports:{}},gn={},S1={exports:{}},C1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(U,Z){var J=U.length;U.push(Z);e:for(;0<J;){var le=J-1>>>1,fe=U[le];if(0<a(fe,Z))U[le]=Z,U[J]=fe,J=le;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var Z=U[0],J=U.pop();if(J!==Z){U[0]=J;e:for(var le=0,fe=U.length,Dt=fe>>>1;le<Dt;){var pe=2*(le+1)-1,et=U[pe],Ye=pe+1,ht=U[Ye];if(0>a(et,J))Ye<fe&&0>a(ht,et)?(U[le]=ht,U[Ye]=J,le=Ye):(U[le]=et,U[pe]=J,le=pe);else if(Ye<fe&&0>a(ht,J))U[le]=ht,U[Ye]=J,le=Ye;else break e}}return Z}function a(U,Z){var J=U.sortIndex-Z.sortIndex;return J!==0?J:U.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var d=[],f=[],m=1,b=null,S=3,I=!1,N=!1,C=!1,L=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(U){for(var Z=n(f);Z!==null;){if(Z.callback===null)r(f);else if(Z.startTime<=U)r(f),Z.sortIndex=Z.expirationTime,t(d,Z);else break;Z=n(f)}}function v(U){if(C=!1,y(U),!N)if(n(d)!==null)N=!0,De($);else{var Z=n(f);Z!==null&&Ge(v,Z.startTime-U)}}function $(U,Z){N=!1,C&&(C=!1,w(A),A=-1),I=!0;var J=S;try{for(y(Z),b=n(d);b!==null&&(!(b.expirationTime>Z)||U&&!he());){var le=b.callback;if(typeof le=="function"){b.callback=null,S=b.priorityLevel;var fe=le(b.expirationTime<=Z);Z=e.unstable_now(),typeof fe=="function"?b.callback=fe:b===n(d)&&r(d),y(Z)}else r(d);b=n(d)}if(b!==null)var Dt=!0;else{var pe=n(f);pe!==null&&Ge(v,pe.startTime-Z),Dt=!1}return Dt}finally{b=null,S=J,I=!1}}var _=!1,M=null,A=-1,j=5,q=-1;function he(){return!(e.unstable_now()-q<j)}function se(){if(M!==null){var U=e.unstable_now();q=U;var Z=!0;try{Z=M(!0,U)}finally{Z?Be():(_=!1,M=null)}}else _=!1}var Be;if(typeof g=="function")Be=function(){g(se)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,Ve=at.port2;at.port1.onmessage=se,Be=function(){Ve.postMessage(null)}}else Be=function(){L(se,0)};function De(U){M=U,_||(_=!0,Be())}function Ge(U,Z){A=L(function(){U(e.unstable_now())},Z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_continueExecution=function(){N||I||(N=!0,De($))},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return S},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(U){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var J=S;S=Z;try{return U()}finally{S=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(U,Z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var J=S;S=U;try{return Z()}finally{S=J}},e.unstable_scheduleCallback=function(U,Z,J){var le=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?le+J:le):J=le,U){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=J+fe,U={id:m++,callback:Z,priorityLevel:U,startTime:J,expirationTime:fe,sortIndex:-1},J>le?(U.sortIndex=J,t(f,U),n(d)===null&&U===n(f)&&(C?(w(A),A=-1):C=!0,Ge(v,J-le))):(U.sortIndex=fe,t(d,U),N||I||(N=!0,De($))),U},e.unstable_shouldYield=he,e.unstable_wrapCallback=function(U){var Z=S;return function(){var J=S;S=Z;try{return U.apply(this,arguments)}finally{S=J}}}})(C1);S1.exports=C1;var I6=S1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k1=B,pn=I6;function Y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _1=new Set,Do={};function La(e,t){kl(e,t),kl(e+"Capture",t)}function kl(e,t){for(Do[e]=t,e=0;e<t.length;e++)_1.add(t[e])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=Object.prototype.hasOwnProperty,L6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m0={},v0={};function R6(e){return ru.call(v0,e)?!0:ru.call(m0,e)?!1:L6.test(e)?v0[e]=!0:(m0[e]=!0,!1)}function P6(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function M6(e,t,n,r){if(t===null||typeof t>"u"||P6(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ht(e,t,n,r,a,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){It[e]=new Ht(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];It[t]=new Ht(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){It[e]=new Ht(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){It[e]=new Ht(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){It[e]=new Ht(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){It[e]=new Ht(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){It[e]=new Ht(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){It[e]=new Ht(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){It[e]=new Ht(e,5,!1,e.toLowerCase(),null,!1,!1)});var wh=/[\-:]([a-z])/g;function xh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wh,xh);It[t]=new Ht(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wh,xh);It[t]=new Ht(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wh,xh);It[t]=new Ht(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){It[e]=new Ht(e,1,!1,e.toLowerCase(),null,!1,!1)});It.xlinkHref=new Ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){It[e]=new Ht(e,1,!1,e.toLowerCase(),null,!0,!0)});function Sh(e,t,n,r){var a=It.hasOwnProperty(t)?It[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(M6(t,n,a,r)&&(n=null),r||a===null?R6(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vr=k1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Di=Symbol.for("react.element"),tl=Symbol.for("react.portal"),nl=Symbol.for("react.fragment"),Ch=Symbol.for("react.strict_mode"),au=Symbol.for("react.profiler"),T1=Symbol.for("react.provider"),$1=Symbol.for("react.context"),kh=Symbol.for("react.forward_ref"),lu=Symbol.for("react.suspense"),ou=Symbol.for("react.suspense_list"),_h=Symbol.for("react.memo"),$r=Symbol.for("react.lazy"),E1=Symbol.for("react.offscreen"),y0=Symbol.iterator;function no(e){return e===null||typeof e!="object"?null:(e=y0&&e[y0]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Object.assign,md;function go(e){if(md===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);md=t&&t[1]||""}return`
`+md+e}var vd=!1;function yd(e,t){if(!e||vd)return"";vd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var a=f.stack.split(`
`),o=r.stack.split(`
`),i=a.length-1,s=o.length-1;1<=i&&0<=s&&a[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(a[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||a[i]!==o[s]){var d=`
`+a[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=s);break}}}finally{vd=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?go(e):""}function F6(e){switch(e.tag){case 5:return go(e.type);case 16:return go("Lazy");case 13:return go("Suspense");case 19:return go("SuspenseList");case 0:case 2:case 15:return e=yd(e.type,!1),e;case 11:return e=yd(e.type.render,!1),e;case 1:return e=yd(e.type,!0),e;default:return""}}function iu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nl:return"Fragment";case tl:return"Portal";case au:return"Profiler";case Ch:return"StrictMode";case lu:return"Suspense";case ou:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $1:return(e.displayName||"Context")+".Consumer";case T1:return(e._context.displayName||"Context")+".Provider";case kh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _h:return t=e.displayName||null,t!==null?t:iu(e.type)||"Memo";case $r:t=e._payload,e=e._init;try{return iu(e(t))}catch{}}return null}function A6(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return iu(t);case 8:return t===Ch?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function N1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function O6(e){var t=N1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zi(e){e._valueTracker||(e._valueTracker=O6(e))}function I1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=N1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function su(e,t){var n=t.checked;return rt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function b0(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function L1(e,t){t=t.checked,t!=null&&Sh(e,"checked",t,!1)}function cu(e,t){L1(e,t);var n=Wr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?du(e,t.type,n):t.hasOwnProperty("defaultValue")&&du(e,t.type,Wr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function w0(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function du(e,t,n){(t!=="number"||Rs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mo=Array.isArray;function ml(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wr(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function uu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Y(91));return rt({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function x0(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Y(92));if(mo(n)){if(1<n.length)throw Error(Y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wr(n)}}function R1(e,t){var n=Wr(t.value),r=Wr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function S0(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function P1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?P1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bi,M1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bi=Bi||document.createElement("div"),Bi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D6=["Webkit","ms","Moz","O"];Object.keys(_o).forEach(function(e){D6.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_o[t]=_o[e]})});function F1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_o.hasOwnProperty(e)&&_o[e]?(""+t).trim():t+"px"}function A1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=F1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var z6=rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fu(e,t){if(t){if(z6[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Y(62))}}function pu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gu=null;function Th(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mu=null,vl=null,yl=null;function C0(e){if(e=hi(e)){if(typeof mu!="function")throw Error(Y(280));var t=e.stateNode;t&&(t=bc(t),mu(e.stateNode,e.type,t))}}function O1(e){vl?yl?yl.push(e):yl=[e]:vl=e}function D1(){if(vl){var e=vl,t=yl;if(yl=vl=null,C0(e),t)for(e=0;e<t.length;e++)C0(t[e])}}function z1(e,t){return e(t)}function B1(){}var bd=!1;function j1(e,t,n){if(bd)return e(t,n);bd=!0;try{return z1(e,t,n)}finally{bd=!1,(vl!==null||yl!==null)&&(B1(),D1())}}function Bo(e,t){var n=e.stateNode;if(n===null)return null;var r=bc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Y(231,t,typeof n));return n}var vu=!1;if(ur)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){vu=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{vu=!1}function B6(e,t,n,r,a,o,i,s,d){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(m){this.onError(m)}}var To=!1,Ps=null,Ms=!1,yu=null,j6={onError:function(e){To=!0,Ps=e}};function U6(e,t,n,r,a,o,i,s,d){To=!1,Ps=null,B6.apply(j6,arguments)}function W6(e,t,n,r,a,o,i,s,d){if(U6.apply(this,arguments),To){if(To){var f=Ps;To=!1,Ps=null}else throw Error(Y(198));Ms||(Ms=!0,yu=f)}}function Ra(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function U1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k0(e){if(Ra(e)!==e)throw Error(Y(188))}function H6(e){var t=e.alternate;if(!t){if(t=Ra(e),t===null)throw Error(Y(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return k0(a),e;if(o===r)return k0(a),t;o=o.sibling}throw Error(Y(188))}if(n.return!==r.return)n=a,r=o;else{for(var i=!1,s=a.child;s;){if(s===n){i=!0,n=a,r=o;break}if(s===r){i=!0,r=a,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=a;break}if(s===r){i=!0,r=o,n=a;break}s=s.sibling}if(!i)throw Error(Y(189))}}if(n.alternate!==r)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?e:t}function W1(e){return e=H6(e),e!==null?H1(e):null}function H1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=H1(e);if(t!==null)return t;e=e.sibling}return null}var V1=pn.unstable_scheduleCallback,_0=pn.unstable_cancelCallback,V6=pn.unstable_shouldYield,G6=pn.unstable_requestPaint,ot=pn.unstable_now,Y6=pn.unstable_getCurrentPriorityLevel,$h=pn.unstable_ImmediatePriority,G1=pn.unstable_UserBlockingPriority,Fs=pn.unstable_NormalPriority,q6=pn.unstable_LowPriority,Y1=pn.unstable_IdlePriority,gc=null,Zn=null;function Z6(e){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(gc,e,void 0,(e.current.flags&128)===128)}catch{}}var Dn=Math.clz32?Math.clz32:X6,Q6=Math.log,K6=Math.LN2;function X6(e){return e>>>=0,e===0?32:31-(Q6(e)/K6|0)|0}var ji=64,Ui=4194304;function vo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function As(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~a;s!==0?r=vo(s):(o&=i,o!==0&&(r=vo(o)))}else i=n&~a,i!==0?r=vo(i):o!==0&&(r=vo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Dn(t),a=1<<n,r|=e[n],t&=~a;return r}function J6(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ew(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Dn(o),s=1<<i,d=a[i];d===-1?(!(s&n)||s&r)&&(a[i]=J6(s,t)):d<=t&&(e.expiredLanes|=s),o&=~s}}function bu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function q1(){var e=ji;return ji<<=1,!(ji&4194240)&&(ji=64),e}function wd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function di(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Dn(t),e[t]=n}function tw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Dn(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}function Eh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Dn(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var Oe=0;function Z1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Q1,Nh,K1,X1,J1,wu=!1,Wi=[],Fr=null,Ar=null,Or=null,jo=new Map,Uo=new Map,Nr=[],nw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function T0(e,t){switch(e){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":jo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(t.pointerId)}}function ao(e,t,n,r,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},t!==null&&(t=hi(t),t!==null&&Nh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function rw(e,t,n,r,a){switch(t){case"focusin":return Fr=ao(Fr,e,t,n,r,a),!0;case"dragenter":return Ar=ao(Ar,e,t,n,r,a),!0;case"mouseover":return Or=ao(Or,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return jo.set(o,ao(jo.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Uo.set(o,ao(Uo.get(o)||null,e,t,n,r,a)),!0}return!1}function ev(e){var t=ma(e.target);if(t!==null){var n=Ra(t);if(n!==null){if(t=n.tag,t===13){if(t=U1(n),t!==null){e.blockedOn=t,J1(e.priority,function(){K1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ds(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gu=r,n.target.dispatchEvent(r),gu=null}else return t=hi(n),t!==null&&Nh(t),e.blockedOn=n,!1;t.shift()}return!0}function $0(e,t,n){ds(e)&&n.delete(t)}function aw(){wu=!1,Fr!==null&&ds(Fr)&&(Fr=null),Ar!==null&&ds(Ar)&&(Ar=null),Or!==null&&ds(Or)&&(Or=null),jo.forEach($0),Uo.forEach($0)}function lo(e,t){e.blockedOn===t&&(e.blockedOn=null,wu||(wu=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,aw)))}function Wo(e){function t(a){return lo(a,e)}if(0<Wi.length){lo(Wi[0],e);for(var n=1;n<Wi.length;n++){var r=Wi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Fr!==null&&lo(Fr,e),Ar!==null&&lo(Ar,e),Or!==null&&lo(Or,e),jo.forEach(t),Uo.forEach(t),n=0;n<Nr.length;n++)r=Nr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)ev(n),n.blockedOn===null&&Nr.shift()}var bl=vr.ReactCurrentBatchConfig,Os=!0;function lw(e,t,n,r){var a=Oe,o=bl.transition;bl.transition=null;try{Oe=1,Ih(e,t,n,r)}finally{Oe=a,bl.transition=o}}function ow(e,t,n,r){var a=Oe,o=bl.transition;bl.transition=null;try{Oe=4,Ih(e,t,n,r)}finally{Oe=a,bl.transition=o}}function Ih(e,t,n,r){if(Os){var a=xu(e,t,n,r);if(a===null)Id(e,t,r,Ds,n),T0(e,r);else if(rw(a,e,t,n,r))r.stopPropagation();else if(T0(e,r),t&4&&-1<nw.indexOf(e)){for(;a!==null;){var o=hi(a);if(o!==null&&Q1(o),o=xu(e,t,n,r),o===null&&Id(e,t,r,Ds,n),o===a)break;a=o}a!==null&&r.stopPropagation()}else Id(e,t,r,null,n)}}var Ds=null;function xu(e,t,n,r){if(Ds=null,e=Th(r),e=ma(e),e!==null)if(t=Ra(e),t===null)e=null;else if(n=t.tag,n===13){if(e=U1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ds=e,null}function tv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y6()){case $h:return 1;case G1:return 4;case Fs:case q6:return 16;case Y1:return 536870912;default:return 16}default:return 16}}var Lr=null,Lh=null,us=null;function nv(){if(us)return us;var e,t=Lh,n=t.length,r,a="value"in Lr?Lr.value:Lr.textContent,o=a.length;for(e=0;e<n&&t[e]===a[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===a[o-r];r++);return us=a.slice(e,1<r?1-r:void 0)}function hs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hi(){return!0}function E0(){return!1}function mn(e){function t(n,r,a,o,i){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Hi:E0,this.isPropagationStopped=E0,this}return rt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hi)},persist:function(){},isPersistent:Hi}),t}var Ml={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rh=mn(Ml),ui=rt({},Ml,{view:0,detail:0}),iw=mn(ui),xd,Sd,oo,mc=rt({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ph,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(xd=e.screenX-oo.screenX,Sd=e.screenY-oo.screenY):Sd=xd=0,oo=e),xd)},movementY:function(e){return"movementY"in e?e.movementY:Sd}}),N0=mn(mc),sw=rt({},mc,{dataTransfer:0}),cw=mn(sw),dw=rt({},ui,{relatedTarget:0}),Cd=mn(dw),uw=rt({},Ml,{animationName:0,elapsedTime:0,pseudoElement:0}),hw=mn(uw),fw=rt({},Ml,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pw=mn(fw),gw=rt({},Ml,{data:0}),I0=mn(gw),mw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yw[e])?!!t[e]:!1}function Ph(){return bw}var ww=rt({},ui,{key:function(e){if(e.key){var t=mw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ph,charCode:function(e){return e.type==="keypress"?hs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xw=mn(ww),Sw=rt({},mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),L0=mn(Sw),Cw=rt({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ph}),kw=mn(Cw),_w=rt({},Ml,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tw=mn(_w),$w=rt({},mc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ew=mn($w),Nw=[9,13,27,32],Mh=ur&&"CompositionEvent"in window,$o=null;ur&&"documentMode"in document&&($o=document.documentMode);var Iw=ur&&"TextEvent"in window&&!$o,rv=ur&&(!Mh||$o&&8<$o&&11>=$o),R0=String.fromCharCode(32),P0=!1;function av(e,t){switch(e){case"keyup":return Nw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rl=!1;function Lw(e,t){switch(e){case"compositionend":return lv(t);case"keypress":return t.which!==32?null:(P0=!0,R0);case"textInput":return e=t.data,e===R0&&P0?null:e;default:return null}}function Rw(e,t){if(rl)return e==="compositionend"||!Mh&&av(e,t)?(e=nv(),us=Lh=Lr=null,rl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rv&&t.locale!=="ko"?null:t.data;default:return null}}var Pw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function M0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pw[e.type]:t==="textarea"}function ov(e,t,n,r){O1(r),t=zs(t,"onChange"),0<t.length&&(n=new Rh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Eo=null,Ho=null;function Mw(e){vv(e,0)}function vc(e){var t=ol(e);if(I1(t))return e}function Fw(e,t){if(e==="change")return t}var iv=!1;if(ur){var kd;if(ur){var _d="oninput"in document;if(!_d){var F0=document.createElement("div");F0.setAttribute("oninput","return;"),_d=typeof F0.oninput=="function"}kd=_d}else kd=!1;iv=kd&&(!document.documentMode||9<document.documentMode)}function A0(){Eo&&(Eo.detachEvent("onpropertychange",sv),Ho=Eo=null)}function sv(e){if(e.propertyName==="value"&&vc(Ho)){var t=[];ov(t,Ho,e,Th(e)),j1(Mw,t)}}function Aw(e,t,n){e==="focusin"?(A0(),Eo=t,Ho=n,Eo.attachEvent("onpropertychange",sv)):e==="focusout"&&A0()}function Ow(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vc(Ho)}function Dw(e,t){if(e==="click")return vc(t)}function zw(e,t){if(e==="input"||e==="change")return vc(t)}function Bw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bn=typeof Object.is=="function"?Object.is:Bw;function Vo(e,t){if(Bn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!ru.call(t,a)||!Bn(e[a],t[a]))return!1}return!0}function O0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function D0(e,t){var n=O0(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=O0(n)}}function cv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dv(){for(var e=window,t=Rs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rs(e.document)}return t}function Fh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jw(e){var t=dv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&cv(n.ownerDocument.documentElement,n)){if(r!==null&&Fh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=r.end===void 0?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=D0(n,o);var i=D0(n,r);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Uw=ur&&"documentMode"in document&&11>=document.documentMode,al=null,Su=null,No=null,Cu=!1;function z0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cu||al==null||al!==Rs(r)||(r=al,"selectionStart"in r&&Fh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),No&&Vo(No,r)||(No=r,r=zs(Su,"onSelect"),0<r.length&&(t=new Rh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=al)))}function Vi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ll={animationend:Vi("Animation","AnimationEnd"),animationiteration:Vi("Animation","AnimationIteration"),animationstart:Vi("Animation","AnimationStart"),transitionend:Vi("Transition","TransitionEnd")},Td={},uv={};ur&&(uv=document.createElement("div").style,"AnimationEvent"in window||(delete ll.animationend.animation,delete ll.animationiteration.animation,delete ll.animationstart.animation),"TransitionEvent"in window||delete ll.transitionend.transition);function yc(e){if(Td[e])return Td[e];if(!ll[e])return e;var t=ll[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in uv)return Td[e]=t[n];return e}var hv=yc("animationend"),fv=yc("animationiteration"),pv=yc("animationstart"),gv=yc("transitionend"),mv=new Map,B0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(e,t){mv.set(e,t),La(t,[e])}for(var $d=0;$d<B0.length;$d++){var Ed=B0[$d],Ww=Ed.toLowerCase(),Hw=Ed[0].toUpperCase()+Ed.slice(1);Yr(Ww,"on"+Hw)}Yr(hv,"onAnimationEnd");Yr(fv,"onAnimationIteration");Yr(pv,"onAnimationStart");Yr("dblclick","onDoubleClick");Yr("focusin","onFocus");Yr("focusout","onBlur");Yr(gv,"onTransitionEnd");kl("onMouseEnter",["mouseout","mouseover"]);kl("onMouseLeave",["mouseout","mouseover"]);kl("onPointerEnter",["pointerout","pointerover"]);kl("onPointerLeave",["pointerout","pointerover"]);La("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));La("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));La("onBeforeInput",["compositionend","keypress","textInput","paste"]);La("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));La("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));La("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vw=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function j0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,W6(r,t,void 0,e),e.currentTarget=null}function vv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],d=s.instance,f=s.currentTarget;if(s=s.listener,d!==o&&a.isPropagationStopped())break e;j0(a,s,f),o=d}else for(i=0;i<r.length;i++){if(s=r[i],d=s.instance,f=s.currentTarget,s=s.listener,d!==o&&a.isPropagationStopped())break e;j0(a,s,f),o=d}}}if(Ms)throw e=yu,Ms=!1,yu=null,e}function Ze(e,t){var n=t[Eu];n===void 0&&(n=t[Eu]=new Set);var r=e+"__bubble";n.has(r)||(yv(t,e,2,!1),n.add(r))}function Nd(e,t,n){var r=0;t&&(r|=4),yv(n,e,r,t)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function Go(e){if(!e[Gi]){e[Gi]=!0,_1.forEach(function(n){n!=="selectionchange"&&(Vw.has(n)||Nd(n,!1,e),Nd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gi]||(t[Gi]=!0,Nd("selectionchange",!1,t))}}function yv(e,t,n,r){switch(tv(t)){case 1:var a=lw;break;case 4:a=ow;break;default:a=Ih}n=a.bind(null,t,n,e),a=void 0,!vu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Id(e,t,n,r,a){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(i===4)for(i=r.return;i!==null;){var d=i.tag;if((d===3||d===4)&&(d=i.stateNode.containerInfo,d===a||d.nodeType===8&&d.parentNode===a))return;i=i.return}for(;s!==null;){if(i=ma(s),i===null)return;if(d=i.tag,d===5||d===6){r=o=i;continue e}s=s.parentNode}}r=r.return}j1(function(){var f=o,m=Th(n),b=[];e:{var S=mv.get(e);if(S!==void 0){var I=Rh,N=e;switch(e){case"keypress":if(hs(n)===0)break e;case"keydown":case"keyup":I=xw;break;case"focusin":N="focus",I=Cd;break;case"focusout":N="blur",I=Cd;break;case"beforeblur":case"afterblur":I=Cd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=N0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=cw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=kw;break;case hv:case fv:case pv:I=hw;break;case gv:I=Tw;break;case"scroll":I=iw;break;case"wheel":I=Ew;break;case"copy":case"cut":case"paste":I=pw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=L0}var C=(t&4)!==0,L=!C&&e==="scroll",w=C?S!==null?S+"Capture":null:S;C=[];for(var g=f,y;g!==null;){y=g;var v=y.stateNode;if(y.tag===5&&v!==null&&(y=v,w!==null&&(v=Bo(g,w),v!=null&&C.push(Yo(g,v,y)))),L)break;g=g.return}0<C.length&&(S=new I(S,N,null,n,m),b.push({event:S,listeners:C}))}}if(!(t&7)){e:{if(S=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",S&&n!==gu&&(N=n.relatedTarget||n.fromElement)&&(ma(N)||N[hr]))break e;if((I||S)&&(S=m.window===m?m:(S=m.ownerDocument)?S.defaultView||S.parentWindow:window,I?(N=n.relatedTarget||n.toElement,I=f,N=N?ma(N):null,N!==null&&(L=Ra(N),N!==L||N.tag!==5&&N.tag!==6)&&(N=null)):(I=null,N=f),I!==N)){if(C=N0,v="onMouseLeave",w="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(C=L0,v="onPointerLeave",w="onPointerEnter",g="pointer"),L=I==null?S:ol(I),y=N==null?S:ol(N),S=new C(v,g+"leave",I,n,m),S.target=L,S.relatedTarget=y,v=null,ma(m)===f&&(C=new C(w,g+"enter",N,n,m),C.target=y,C.relatedTarget=L,v=C),L=v,I&&N)t:{for(C=I,w=N,g=0,y=C;y;y=Qa(y))g++;for(y=0,v=w;v;v=Qa(v))y++;for(;0<g-y;)C=Qa(C),g--;for(;0<y-g;)w=Qa(w),y--;for(;g--;){if(C===w||w!==null&&C===w.alternate)break t;C=Qa(C),w=Qa(w)}C=null}else C=null;I!==null&&U0(b,S,I,C,!1),N!==null&&L!==null&&U0(b,L,N,C,!0)}}e:{if(S=f?ol(f):window,I=S.nodeName&&S.nodeName.toLowerCase(),I==="select"||I==="input"&&S.type==="file")var $=Fw;else if(M0(S))if(iv)$=zw;else{$=Ow;var _=Aw}else(I=S.nodeName)&&I.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&($=Dw);if($&&($=$(e,f))){ov(b,$,n,m);break e}_&&_(e,S,f),e==="focusout"&&(_=S._wrapperState)&&_.controlled&&S.type==="number"&&du(S,"number",S.value)}switch(_=f?ol(f):window,e){case"focusin":(M0(_)||_.contentEditable==="true")&&(al=_,Su=f,No=null);break;case"focusout":No=Su=al=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,z0(b,n,m);break;case"selectionchange":if(Uw)break;case"keydown":case"keyup":z0(b,n,m)}var M;if(Mh)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else rl?av(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(rv&&n.locale!=="ko"&&(rl||A!=="onCompositionStart"?A==="onCompositionEnd"&&rl&&(M=nv()):(Lr=m,Lh="value"in Lr?Lr.value:Lr.textContent,rl=!0)),_=zs(f,A),0<_.length&&(A=new I0(A,e,null,n,m),b.push({event:A,listeners:_}),M?A.data=M:(M=lv(n),M!==null&&(A.data=M)))),(M=Iw?Lw(e,n):Rw(e,n))&&(f=zs(f,"onBeforeInput"),0<f.length&&(m=new I0("onBeforeInput","beforeinput",null,n,m),b.push({event:m,listeners:f}),m.data=M))}vv(b,t)})}function Yo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zs(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Bo(e,n),o!=null&&r.unshift(Yo(e,o,a)),o=Bo(e,t),o!=null&&r.push(Yo(e,o,a))),e=e.return}return r}function Qa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function U0(e,t,n,r,a){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,d=s.alternate,f=s.stateNode;if(d!==null&&d===r)break;s.tag===5&&f!==null&&(s=f,a?(d=Bo(n,o),d!=null&&i.unshift(Yo(n,d,s))):a||(d=Bo(n,o),d!=null&&i.push(Yo(n,d,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Gw=/\r\n?/g,Yw=/\u0000|\uFFFD/g;function W0(e){return(typeof e=="string"?e:""+e).replace(Gw,`
`).replace(Yw,"")}function Yi(e,t,n){if(t=W0(t),W0(e)!==t&&n)throw Error(Y(425))}function Bs(){}var ku=null,_u=null;function Tu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $u=typeof setTimeout=="function"?setTimeout:void 0,qw=typeof clearTimeout=="function"?clearTimeout:void 0,H0=typeof Promise=="function"?Promise:void 0,Zw=typeof queueMicrotask=="function"?queueMicrotask:typeof H0<"u"?function(e){return H0.resolve(null).then(e).catch(Qw)}:$u;function Qw(e){setTimeout(function(){throw e})}function Ld(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Wo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Wo(t)}function Dr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function V0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fl=Math.random().toString(36).slice(2),qn="__reactFiber$"+Fl,qo="__reactProps$"+Fl,hr="__reactContainer$"+Fl,Eu="__reactEvents$"+Fl,Kw="__reactListeners$"+Fl,Xw="__reactHandles$"+Fl;function ma(e){var t=e[qn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hr]||n[qn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=V0(e);e!==null;){if(n=e[qn])return n;e=V0(e)}return t}e=n,n=e.parentNode}return null}function hi(e){return e=e[qn]||e[hr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ol(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Y(33))}function bc(e){return e[qo]||null}var Nu=[],il=-1;function qr(e){return{current:e}}function Xe(e){0>il||(e.current=Nu[il],Nu[il]=null,il--)}function He(e,t){il++,Nu[il]=e.current,e.current=t}var Hr={},Ot=qr(Hr),en=qr(!1),_a=Hr;function _l(e,t){var n=e.type.contextTypes;if(!n)return Hr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in n)a[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function tn(e){return e=e.childContextTypes,e!=null}function js(){Xe(en),Xe(Ot)}function G0(e,t,n){if(Ot.current!==Hr)throw Error(Y(168));He(Ot,t),He(en,n)}function bv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(Y(108,A6(e)||"Unknown",a));return rt({},n,r)}function Us(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hr,_a=Ot.current,He(Ot,e),He(en,en.current),!0}function Y0(e,t,n){var r=e.stateNode;if(!r)throw Error(Y(169));n?(e=bv(e,t,_a),r.__reactInternalMemoizedMergedChildContext=e,Xe(en),Xe(Ot),He(Ot,e)):Xe(en),He(en,n)}var or=null,wc=!1,Rd=!1;function wv(e){or===null?or=[e]:or.push(e)}function Jw(e){wc=!0,wv(e)}function Zr(){if(!Rd&&or!==null){Rd=!0;var e=0,t=Oe;try{var n=or;for(Oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}or=null,wc=!1}catch(a){throw or!==null&&(or=or.slice(e+1)),V1($h,Zr),a}finally{Oe=t,Rd=!1}}return null}var sl=[],cl=0,Ws=null,Hs=0,bn=[],wn=0,Ta=null,ir=1,sr="";function ua(e,t){sl[cl++]=Hs,sl[cl++]=Ws,Ws=e,Hs=t}function xv(e,t,n){bn[wn++]=ir,bn[wn++]=sr,bn[wn++]=Ta,Ta=e;var r=ir;e=sr;var a=32-Dn(r)-1;r&=~(1<<a),n+=1;var o=32-Dn(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,ir=1<<32-Dn(t)+a|n<<a|r,sr=o+e}else ir=1<<o|n<<a|r,sr=e}function Ah(e){e.return!==null&&(ua(e,1),xv(e,1,0))}function Oh(e){for(;e===Ws;)Ws=sl[--cl],sl[cl]=null,Hs=sl[--cl],sl[cl]=null;for(;e===Ta;)Ta=bn[--wn],bn[wn]=null,sr=bn[--wn],bn[wn]=null,ir=bn[--wn],bn[wn]=null}var fn=null,hn=null,Je=!1,An=null;function Sv(e,t){var n=xn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function q0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,fn=e,hn=Dr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,fn=e,hn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ta!==null?{id:ir,overflow:sr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,fn=e,hn=null,!0):!1;default:return!1}}function Iu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Lu(e){if(Je){var t=hn;if(t){var n=t;if(!q0(e,t)){if(Iu(e))throw Error(Y(418));t=Dr(n.nextSibling);var r=fn;t&&q0(e,t)?Sv(r,n):(e.flags=e.flags&-4097|2,Je=!1,fn=e)}}else{if(Iu(e))throw Error(Y(418));e.flags=e.flags&-4097|2,Je=!1,fn=e}}}function Z0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;fn=e}function qi(e){if(e!==fn)return!1;if(!Je)return Z0(e),Je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Tu(e.type,e.memoizedProps)),t&&(t=hn)){if(Iu(e))throw Cv(),Error(Y(418));for(;t;)Sv(e,t),t=Dr(t.nextSibling)}if(Z0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){hn=Dr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}hn=null}}else hn=fn?Dr(e.stateNode.nextSibling):null;return!0}function Cv(){for(var e=hn;e;)e=Dr(e.nextSibling)}function Tl(){hn=fn=null,Je=!1}function Dh(e){An===null?An=[e]:An.push(e)}var e8=vr.ReactCurrentBatchConfig;function Pn(e,t){if(e&&e.defaultProps){t=rt({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Vs=qr(null),Gs=null,dl=null,zh=null;function Bh(){zh=dl=Gs=null}function jh(e){var t=Vs.current;Xe(Vs),e._currentValue=t}function Ru(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function wl(e,t){Gs=e,zh=dl=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Jt=!0),e.firstContext=null)}function kn(e){var t=e._currentValue;if(zh!==e)if(e={context:e,memoizedValue:t,next:null},dl===null){if(Gs===null)throw Error(Y(308));dl=e,Gs.dependencies={lanes:0,firstContext:e}}else dl=dl.next=e;return t}var va=null;function Uh(e){va===null?va=[e]:va.push(e)}function kv(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Uh(t)):(n.next=a.next,a.next=n),t.interleaved=n,fr(e,r)}function fr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Er=!1;function Wh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _v(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function cr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ne&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,fr(e,n)}return a=r.interleaved,a===null?(t.next=t,Uh(r)):(t.next=a.next,a.next=t),r.interleaved=t,fr(e,n)}function fs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Eh(e,n)}}function Q0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?a=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?a=o=t:o=o.next=t}else a=o=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ys(e,t,n,r){var a=e.updateQueue;Er=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var d=s,f=d.next;d.next=null,i===null?o=f:i.next=f,i=d;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==i&&(s===null?m.firstBaseUpdate=f:s.next=f,m.lastBaseUpdate=d))}if(o!==null){var b=a.baseState;i=0,m=f=d=null,s=o;do{var S=s.lane,I=s.eventTime;if((r&S)===S){m!==null&&(m=m.next={eventTime:I,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var N=e,C=s;switch(S=t,I=n,C.tag){case 1:if(N=C.payload,typeof N=="function"){b=N.call(I,b,S);break e}b=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=C.payload,S=typeof N=="function"?N.call(I,b,S):N,S==null)break e;b=rt({},b,S);break e;case 2:Er=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,S=a.effects,S===null?a.effects=[s]:S.push(s))}else I={eventTime:I,lane:S,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(f=m=I,d=b):m=m.next=I,i|=S;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;S=s,s=S.next,S.next=null,a.lastBaseUpdate=S,a.shared.pending=null}}while(1);if(m===null&&(d=b),a.baseState=d,a.firstBaseUpdate=f,a.lastBaseUpdate=m,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);Ea|=i,e.lanes=i,e.memoizedState=b}}function K0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(Y(191,a));a.call(r)}}}var Tv=new k1.Component().refs;function Pu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:rt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xc={isMounted:function(e){return(e=e._reactInternals)?Ra(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ut(),a=jr(e),o=cr(r,a);o.payload=t,n!=null&&(o.callback=n),t=zr(e,o,a),t!==null&&(zn(t,e,a,r),fs(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ut(),a=jr(e),o=cr(r,a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=zr(e,o,a),t!==null&&(zn(t,e,a,r),fs(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ut(),r=jr(e),a=cr(n,r);a.tag=2,t!=null&&(a.callback=t),t=zr(e,a,r),t!==null&&(zn(t,e,r,n),fs(t,e,r))}};function X0(e,t,n,r,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Vo(n,r)||!Vo(a,o):!0}function $v(e,t,n){var r=!1,a=Hr,o=t.contextType;return typeof o=="object"&&o!==null?o=kn(o):(a=tn(t)?_a:Ot.current,r=t.contextTypes,o=(r=r!=null)?_l(e,a):Hr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function J0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xc.enqueueReplaceState(t,t.state,null)}function Mu(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=Tv,Wh(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=kn(o):(o=tn(t)?_a:Ot.current,a.context=_l(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Pu(e,t,o,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&xc.enqueueReplaceState(a,a.state,null),Ys(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function io(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Y(309));var r=n.stateNode}if(!r)throw Error(Y(147,e));var a=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=a.refs;s===Tv&&(s=a.refs={}),i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(Y(284));if(!n._owner)throw Error(Y(290,e))}return e}function Zi(e,t){throw e=Object.prototype.toString.call(t),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function eg(e){var t=e._init;return t(e._payload)}function Ev(e){function t(w,g){if(e){var y=w.deletions;y===null?(w.deletions=[g],w.flags|=16):y.push(g)}}function n(w,g){if(!e)return null;for(;g!==null;)t(w,g),g=g.sibling;return null}function r(w,g){for(w=new Map;g!==null;)g.key!==null?w.set(g.key,g):w.set(g.index,g),g=g.sibling;return w}function a(w,g){return w=Ur(w,g),w.index=0,w.sibling=null,w}function o(w,g,y){return w.index=y,e?(y=w.alternate,y!==null?(y=y.index,y<g?(w.flags|=2,g):y):(w.flags|=2,g)):(w.flags|=1048576,g)}function i(w){return e&&w.alternate===null&&(w.flags|=2),w}function s(w,g,y,v){return g===null||g.tag!==6?(g=zd(y,w.mode,v),g.return=w,g):(g=a(g,y),g.return=w,g)}function d(w,g,y,v){var $=y.type;return $===nl?m(w,g,y.props.children,v,y.key):g!==null&&(g.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===$r&&eg($)===g.type)?(v=a(g,y.props),v.ref=io(w,g,y),v.return=w,v):(v=bs(y.type,y.key,y.props,null,w.mode,v),v.ref=io(w,g,y),v.return=w,v)}function f(w,g,y,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Bd(y,w.mode,v),g.return=w,g):(g=a(g,y.children||[]),g.return=w,g)}function m(w,g,y,v,$){return g===null||g.tag!==7?(g=ka(y,w.mode,v,$),g.return=w,g):(g=a(g,y),g.return=w,g)}function b(w,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=zd(""+g,w.mode,y),g.return=w,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Di:return y=bs(g.type,g.key,g.props,null,w.mode,y),y.ref=io(w,null,g),y.return=w,y;case tl:return g=Bd(g,w.mode,y),g.return=w,g;case $r:var v=g._init;return b(w,v(g._payload),y)}if(mo(g)||no(g))return g=ka(g,w.mode,y,null),g.return=w,g;Zi(w,g)}return null}function S(w,g,y,v){var $=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return $!==null?null:s(w,g,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Di:return y.key===$?d(w,g,y,v):null;case tl:return y.key===$?f(w,g,y,v):null;case $r:return $=y._init,S(w,g,$(y._payload),v)}if(mo(y)||no(y))return $!==null?null:m(w,g,y,v,null);Zi(w,y)}return null}function I(w,g,y,v,$){if(typeof v=="string"&&v!==""||typeof v=="number")return w=w.get(y)||null,s(g,w,""+v,$);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Di:return w=w.get(v.key===null?y:v.key)||null,d(g,w,v,$);case tl:return w=w.get(v.key===null?y:v.key)||null,f(g,w,v,$);case $r:var _=v._init;return I(w,g,y,_(v._payload),$)}if(mo(v)||no(v))return w=w.get(y)||null,m(g,w,v,$,null);Zi(g,v)}return null}function N(w,g,y,v){for(var $=null,_=null,M=g,A=g=0,j=null;M!==null&&A<y.length;A++){M.index>A?(j=M,M=null):j=M.sibling;var q=S(w,M,y[A],v);if(q===null){M===null&&(M=j);break}e&&M&&q.alternate===null&&t(w,M),g=o(q,g,A),_===null?$=q:_.sibling=q,_=q,M=j}if(A===y.length)return n(w,M),Je&&ua(w,A),$;if(M===null){for(;A<y.length;A++)M=b(w,y[A],v),M!==null&&(g=o(M,g,A),_===null?$=M:_.sibling=M,_=M);return Je&&ua(w,A),$}for(M=r(w,M);A<y.length;A++)j=I(M,w,A,y[A],v),j!==null&&(e&&j.alternate!==null&&M.delete(j.key===null?A:j.key),g=o(j,g,A),_===null?$=j:_.sibling=j,_=j);return e&&M.forEach(function(he){return t(w,he)}),Je&&ua(w,A),$}function C(w,g,y,v){var $=no(y);if(typeof $!="function")throw Error(Y(150));if(y=$.call(y),y==null)throw Error(Y(151));for(var _=$=null,M=g,A=g=0,j=null,q=y.next();M!==null&&!q.done;A++,q=y.next()){M.index>A?(j=M,M=null):j=M.sibling;var he=S(w,M,q.value,v);if(he===null){M===null&&(M=j);break}e&&M&&he.alternate===null&&t(w,M),g=o(he,g,A),_===null?$=he:_.sibling=he,_=he,M=j}if(q.done)return n(w,M),Je&&ua(w,A),$;if(M===null){for(;!q.done;A++,q=y.next())q=b(w,q.value,v),q!==null&&(g=o(q,g,A),_===null?$=q:_.sibling=q,_=q);return Je&&ua(w,A),$}for(M=r(w,M);!q.done;A++,q=y.next())q=I(M,w,A,q.value,v),q!==null&&(e&&q.alternate!==null&&M.delete(q.key===null?A:q.key),g=o(q,g,A),_===null?$=q:_.sibling=q,_=q);return e&&M.forEach(function(se){return t(w,se)}),Je&&ua(w,A),$}function L(w,g,y,v){if(typeof y=="object"&&y!==null&&y.type===nl&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Di:e:{for(var $=y.key,_=g;_!==null;){if(_.key===$){if($=y.type,$===nl){if(_.tag===7){n(w,_.sibling),g=a(_,y.props.children),g.return=w,w=g;break e}}else if(_.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===$r&&eg($)===_.type){n(w,_.sibling),g=a(_,y.props),g.ref=io(w,_,y),g.return=w,w=g;break e}n(w,_);break}else t(w,_);_=_.sibling}y.type===nl?(g=ka(y.props.children,w.mode,v,y.key),g.return=w,w=g):(v=bs(y.type,y.key,y.props,null,w.mode,v),v.ref=io(w,g,y),v.return=w,w=v)}return i(w);case tl:e:{for(_=y.key;g!==null;){if(g.key===_)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(w,g.sibling),g=a(g,y.children||[]),g.return=w,w=g;break e}else{n(w,g);break}else t(w,g);g=g.sibling}g=Bd(y,w.mode,v),g.return=w,w=g}return i(w);case $r:return _=y._init,L(w,g,_(y._payload),v)}if(mo(y))return N(w,g,y,v);if(no(y))return C(w,g,y,v);Zi(w,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(w,g.sibling),g=a(g,y),g.return=w,w=g):(n(w,g),g=zd(y,w.mode,v),g.return=w,w=g),i(w)):n(w,g)}return L}var $l=Ev(!0),Nv=Ev(!1),fi={},Qn=qr(fi),Zo=qr(fi),Qo=qr(fi);function ya(e){if(e===fi)throw Error(Y(174));return e}function Hh(e,t){switch(He(Qo,t),He(Zo,e),He(Qn,fi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hu(t,e)}Xe(Qn),He(Qn,t)}function El(){Xe(Qn),Xe(Zo),Xe(Qo)}function Iv(e){ya(Qo.current);var t=ya(Qn.current),n=hu(t,e.type);t!==n&&(He(Zo,e),He(Qn,n))}function Vh(e){Zo.current===e&&(Xe(Qn),Xe(Zo))}var tt=qr(0);function qs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pd=[];function Gh(){for(var e=0;e<Pd.length;e++)Pd[e]._workInProgressVersionPrimary=null;Pd.length=0}var ps=vr.ReactCurrentDispatcher,Md=vr.ReactCurrentBatchConfig,$a=0,nt=null,mt=null,xt=null,Zs=!1,Io=!1,Ko=0,t8=0;function Mt(){throw Error(Y(321))}function Yh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Bn(e[n],t[n]))return!1;return!0}function qh(e,t,n,r,a,o){if($a=o,nt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ps.current=e===null||e.memoizedState===null?l8:o8,e=n(r,a),Io){o=0;do{if(Io=!1,Ko=0,25<=o)throw Error(Y(301));o+=1,xt=mt=null,t.updateQueue=null,ps.current=i8,e=n(r,a)}while(Io)}if(ps.current=Qs,t=mt!==null&&mt.next!==null,$a=0,xt=mt=nt=null,Zs=!1,t)throw Error(Y(300));return e}function Zh(){var e=Ko!==0;return Ko=0,e}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?nt.memoizedState=xt=e:xt=xt.next=e,xt}function _n(){if(mt===null){var e=nt.alternate;e=e!==null?e.memoizedState:null}else e=mt.next;var t=xt===null?nt.memoizedState:xt.next;if(t!==null)xt=t,mt=e;else{if(e===null)throw Error(Y(310));mt=e,e={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},xt===null?nt.memoizedState=xt=e:xt=xt.next=e}return xt}function Xo(e,t){return typeof t=="function"?t(e):t}function Fd(e){var t=_n(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var r=mt,a=r.baseQueue,o=n.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}r.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,r=r.baseState;var s=i=null,d=null,f=o;do{var m=f.lane;if(($a&m)===m)d!==null&&(d=d.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var b={lane:m,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};d===null?(s=d=b,i=r):d=d.next=b,nt.lanes|=m,Ea|=m}f=f.next}while(f!==null&&f!==o);d===null?i=r:d.next=s,Bn(r,t.memoizedState)||(Jt=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do o=a.lane,nt.lanes|=o,Ea|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ad(e){var t=_n(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);Bn(o,t.memoizedState)||(Jt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Lv(){}function Rv(e,t){var n=nt,r=_n(),a=t(),o=!Bn(r.memoizedState,a);if(o&&(r.memoizedState=a,Jt=!0),r=r.queue,Qh(Fv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||xt!==null&&xt.memoizedState.tag&1){if(n.flags|=2048,Jo(9,Mv.bind(null,n,r,a,t),void 0,null),St===null)throw Error(Y(349));$a&30||Pv(n,t,a)}return a}function Pv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=nt.updateQueue,t===null?(t={lastEffect:null,stores:null},nt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mv(e,t,n,r){t.value=n,t.getSnapshot=r,Av(t)&&Ov(e)}function Fv(e,t,n){return n(function(){Av(t)&&Ov(e)})}function Av(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Bn(e,n)}catch{return!0}}function Ov(e){var t=fr(e,1);t!==null&&zn(t,e,1,-1)}function tg(e){var t=Gn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:e},t.queue=e,e=e.dispatch=a8.bind(null,nt,e),[t.memoizedState,e]}function Jo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=nt.updateQueue,t===null?(t={lastEffect:null,stores:null},nt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Dv(){return _n().memoizedState}function gs(e,t,n,r){var a=Gn();nt.flags|=e,a.memoizedState=Jo(1|t,n,void 0,r===void 0?null:r)}function Sc(e,t,n,r){var a=_n();r=r===void 0?null:r;var o=void 0;if(mt!==null){var i=mt.memoizedState;if(o=i.destroy,r!==null&&Yh(r,i.deps)){a.memoizedState=Jo(t,n,o,r);return}}nt.flags|=e,a.memoizedState=Jo(1|t,n,o,r)}function ng(e,t){return gs(8390656,8,e,t)}function Qh(e,t){return Sc(2048,8,e,t)}function zv(e,t){return Sc(4,2,e,t)}function Bv(e,t){return Sc(4,4,e,t)}function jv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uv(e,t,n){return n=n!=null?n.concat([e]):null,Sc(4,4,jv.bind(null,t,e),n)}function Kh(){}function Wv(e,t){var n=_n();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hv(e,t){var n=_n();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vv(e,t,n){return $a&21?(Bn(n,t)||(n=q1(),nt.lanes|=n,Ea|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Jt=!0),e.memoizedState=n)}function n8(e,t){var n=Oe;Oe=n!==0&&4>n?n:4,e(!0);var r=Md.transition;Md.transition={};try{e(!1),t()}finally{Oe=n,Md.transition=r}}function Gv(){return _n().memoizedState}function r8(e,t,n){var r=jr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yv(e))qv(t,n);else if(n=kv(e,t,n,r),n!==null){var a=Ut();zn(n,e,r,a),Zv(n,t,r)}}function a8(e,t,n){var r=jr(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yv(e))qv(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(a.hasEagerState=!0,a.eagerState=s,Bn(s,i)){var d=t.interleaved;d===null?(a.next=a,Uh(t)):(a.next=d.next,d.next=a),t.interleaved=a;return}}catch{}finally{}n=kv(e,t,a,r),n!==null&&(a=Ut(),zn(n,e,r,a),Zv(n,t,r))}}function Yv(e){var t=e.alternate;return e===nt||t!==null&&t===nt}function qv(e,t){Io=Zs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Eh(e,n)}}var Qs={readContext:kn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},l8={readContext:kn,useCallback:function(e,t){return Gn().memoizedState=[e,t===void 0?null:t],e},useContext:kn,useEffect:ng,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,gs(4194308,4,jv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gs(4194308,4,e,t)},useInsertionEffect:function(e,t){return gs(4,2,e,t)},useMemo:function(e,t){var n=Gn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Gn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=r8.bind(null,nt,e),[r.memoizedState,e]},useRef:function(e){var t=Gn();return e={current:e},t.memoizedState=e},useState:tg,useDebugValue:Kh,useDeferredValue:function(e){return Gn().memoizedState=e},useTransition:function(){var e=tg(!1),t=e[0];return e=n8.bind(null,e[1]),Gn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=nt,a=Gn();if(Je){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=t(),St===null)throw Error(Y(349));$a&30||Pv(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ng(Fv.bind(null,r,o,e),[e]),r.flags|=2048,Jo(9,Mv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Gn(),t=St.identifierPrefix;if(Je){var n=sr,r=ir;n=(r&~(1<<32-Dn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ko++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=t8++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},o8={readContext:kn,useCallback:Wv,useContext:kn,useEffect:Qh,useImperativeHandle:Uv,useInsertionEffect:zv,useLayoutEffect:Bv,useMemo:Hv,useReducer:Fd,useRef:Dv,useState:function(){return Fd(Xo)},useDebugValue:Kh,useDeferredValue:function(e){var t=_n();return Vv(t,mt.memoizedState,e)},useTransition:function(){var e=Fd(Xo)[0],t=_n().memoizedState;return[e,t]},useMutableSource:Lv,useSyncExternalStore:Rv,useId:Gv,unstable_isNewReconciler:!1},i8={readContext:kn,useCallback:Wv,useContext:kn,useEffect:Qh,useImperativeHandle:Uv,useInsertionEffect:zv,useLayoutEffect:Bv,useMemo:Hv,useReducer:Ad,useRef:Dv,useState:function(){return Ad(Xo)},useDebugValue:Kh,useDeferredValue:function(e){var t=_n();return mt===null?t.memoizedState=e:Vv(t,mt.memoizedState,e)},useTransition:function(){var e=Ad(Xo)[0],t=_n().memoizedState;return[e,t]},useMutableSource:Lv,useSyncExternalStore:Rv,useId:Gv,unstable_isNewReconciler:!1};function Nl(e,t){try{var n="",r=t;do n+=F6(r),r=r.return;while(r);var a=n}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function Od(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var s8=typeof WeakMap=="function"?WeakMap:Map;function Qv(e,t,n){n=cr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xs||(Xs=!0,Vu=r),Fu(e,t)},n}function Kv(e,t,n){n=cr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Fu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Fu(e,t),typeof r!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function rg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new s8;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=S8.bind(null,e,t,n),t.then(e,e))}function ag(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lg(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=cr(-1,1),t.tag=2,zr(n,t,1))),n.lanes|=1),e)}var c8=vr.ReactCurrentOwner,Jt=!1;function Bt(e,t,n,r){t.child=e===null?Nv(t,null,n,r):$l(t,e.child,n,r)}function og(e,t,n,r,a){n=n.render;var o=t.ref;return wl(t,a),r=qh(e,t,n,r,o,a),n=Zh(),e!==null&&!Jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,pr(e,t,a)):(Je&&n&&Ah(t),t.flags|=1,Bt(e,t,r,a),t.child)}function ig(e,t,n,r,a){if(e===null){var o=n.type;return typeof o=="function"&&!lf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Xv(e,t,o,r,a)):(e=bs(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Vo,n(i,r)&&e.ref===t.ref)return pr(e,t,a)}return t.flags|=1,e=Ur(o,r),e.ref=t.ref,e.return=t,t.child=e}function Xv(e,t,n,r,a){if(e!==null){var o=e.memoizedProps;if(Vo(o,r)&&e.ref===t.ref)if(Jt=!1,t.pendingProps=r=o,(e.lanes&a)!==0)e.flags&131072&&(Jt=!0);else return t.lanes=e.lanes,pr(e,t,a)}return Au(e,t,n,r,a)}function Jv(e,t,n){var r=t.pendingProps,a=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(hl,on),on|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,He(hl,on),on|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,He(hl,on),on|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,He(hl,on),on|=r;return Bt(e,t,a,n),t.child}function e2(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Au(e,t,n,r,a){var o=tn(n)?_a:Ot.current;return o=_l(t,o),wl(t,a),n=qh(e,t,n,r,o,a),r=Zh(),e!==null&&!Jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,pr(e,t,a)):(Je&&r&&Ah(t),t.flags|=1,Bt(e,t,n,a),t.child)}function sg(e,t,n,r,a){if(tn(n)){var o=!0;Us(t)}else o=!1;if(wl(t,a),t.stateNode===null)ms(e,t),$v(t,n,r),Mu(t,n,r,a),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var d=i.context,f=n.contextType;typeof f=="object"&&f!==null?f=kn(f):(f=tn(n)?_a:Ot.current,f=_l(t,f));var m=n.getDerivedStateFromProps,b=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||d!==f)&&J0(t,i,r,f),Er=!1;var S=t.memoizedState;i.state=S,Ys(t,r,i,a),d=t.memoizedState,s!==r||S!==d||en.current||Er?(typeof m=="function"&&(Pu(t,n,m,r),d=t.memoizedState),(s=Er||X0(t,n,s,r,S,d,f))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),i.props=r,i.state=d,i.context=f,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,_v(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:Pn(t.type,s),i.props=f,b=t.pendingProps,S=i.context,d=n.contextType,typeof d=="object"&&d!==null?d=kn(d):(d=tn(n)?_a:Ot.current,d=_l(t,d));var I=n.getDerivedStateFromProps;(m=typeof I=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==b||S!==d)&&J0(t,i,r,d),Er=!1,S=t.memoizedState,i.state=S,Ys(t,r,i,a);var N=t.memoizedState;s!==b||S!==N||en.current||Er?(typeof I=="function"&&(Pu(t,n,I,r),N=t.memoizedState),(f=Er||X0(t,n,f,r,S,N,d)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,N,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,N,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),i.props=r,i.state=N,i.context=d,r=f):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),r=!1)}return Ou(e,t,n,r,o,a)}function Ou(e,t,n,r,a,o){e2(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return a&&Y0(t,n,!1),pr(e,t,o);r=t.stateNode,c8.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=$l(t,e.child,null,o),t.child=$l(t,null,s,o)):Bt(e,t,s,o),t.memoizedState=r.state,a&&Y0(t,n,!0),t.child}function t2(e){var t=e.stateNode;t.pendingContext?G0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&G0(e,t.context,!1),Hh(e,t.containerInfo)}function cg(e,t,n,r,a){return Tl(),Dh(a),t.flags|=256,Bt(e,t,n,r),t.child}var Du={dehydrated:null,treeContext:null,retryLane:0};function zu(e){return{baseLanes:e,cachePool:null,transitions:null}}function n2(e,t,n){var r=t.pendingProps,a=tt.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),He(tt,a&1),e===null)return Lu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=_c(i,r,0,null),e=ka(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=zu(n),t.memoizedState=Du,e):Xh(t,i));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return d8(e,t,i,r,s,a,n);if(o){o=r.fallback,i=t.mode,a=e.child,s=a.sibling;var d={mode:"hidden",children:r.children};return!(i&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Ur(a,d),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?o=Ur(s,o):(o=ka(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?zu(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Du,r}return o=e.child,e=o.sibling,r=Ur(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xh(e,t){return t=_c({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Qi(e,t,n,r){return r!==null&&Dh(r),$l(t,e.child,null,n),e=Xh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function d8(e,t,n,r,a,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Od(Error(Y(422))),Qi(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=_c({mode:"visible",children:r.children},a,0,null),o=ka(o,a,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&$l(t,e.child,null,i),t.child.memoizedState=zu(i),t.memoizedState=Du,o);if(!(t.mode&1))return Qi(e,t,i,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(Y(419)),r=Od(o,r,void 0),Qi(e,t,i,r)}if(s=(i&e.childLanes)!==0,Jt||s){if(r=St,r!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|i)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,fr(e,a),zn(r,e,a,-1))}return af(),r=Od(Error(Y(421))),Qi(e,t,i,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=C8.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,hn=Dr(a.nextSibling),fn=t,Je=!0,An=null,e!==null&&(bn[wn++]=ir,bn[wn++]=sr,bn[wn++]=Ta,ir=e.id,sr=e.overflow,Ta=t),t=Xh(t,r.children),t.flags|=4096,t)}function dg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ru(e.return,t,n)}function Dd(e,t,n,r,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function r2(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(Bt(e,t,r.children,n),r=tt.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dg(e,n,t);else if(e.tag===19)dg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(He(tt,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&qs(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Dd(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&qs(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Dd(t,!0,n,null,o);break;case"together":Dd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ms(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ea|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Y(153));if(t.child!==null){for(e=t.child,n=Ur(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ur(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function u8(e,t,n){switch(t.tag){case 3:t2(t),Tl();break;case 5:Iv(t);break;case 1:tn(t.type)&&Us(t);break;case 4:Hh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;He(Vs,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(He(tt,tt.current&1),t.flags|=128,null):n&t.child.childLanes?n2(e,t,n):(He(tt,tt.current&1),e=pr(e,t,n),e!==null?e.sibling:null);He(tt,tt.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return r2(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),He(tt,tt.current),r)break;return null;case 22:case 23:return t.lanes=0,Jv(e,t,n)}return pr(e,t,n)}var a2,Bu,l2,o2;a2=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bu=function(){};l2=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,ya(Qn.current);var o=null;switch(n){case"input":a=su(e,a),r=su(e,r),o=[];break;case"select":a=rt({},a,{value:void 0}),r=rt({},r,{value:void 0}),o=[];break;case"textarea":a=uu(e,a),r=uu(e,r),o=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bs)}fu(n,r);var i;n=null;for(f in a)if(!r.hasOwnProperty(f)&&a.hasOwnProperty(f)&&a[f]!=null)if(f==="style"){var s=a[f];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Do.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var d=r[f];if(s=a!=null?a[f]:void 0,r.hasOwnProperty(f)&&d!==s&&(d!=null||s!=null))if(f==="style")if(s){for(i in s)!s.hasOwnProperty(i)||d&&d.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in d)d.hasOwnProperty(i)&&s[i]!==d[i]&&(n||(n={}),n[i]=d[i])}else n||(o||(o=[]),o.push(f,n)),n=d;else f==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,s=s?s.__html:void 0,d!=null&&s!==d&&(o=o||[]).push(f,d)):f==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(f,""+d):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Do.hasOwnProperty(f)?(d!=null&&f==="onScroll"&&Ze("scroll",e),o||s===d||(o=[])):(o=o||[]).push(f,d))}n&&(o=o||[]).push("style",n);var f=o;(t.updateQueue=f)&&(t.flags|=4)}};o2=function(e,t,n,r){n!==r&&(t.flags|=4)};function so(e,t){if(!Je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ft(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function h8(e,t,n){var r=t.pendingProps;switch(Oh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(t),null;case 1:return tn(t.type)&&js(),Ft(t),null;case 3:return r=t.stateNode,El(),Xe(en),Xe(Ot),Gh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,An!==null&&(qu(An),An=null))),Bu(e,t),Ft(t),null;case 5:Vh(t);var a=ya(Qo.current);if(n=t.type,e!==null&&t.stateNode!=null)l2(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(Y(166));return Ft(t),null}if(e=ya(Qn.current),qi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[qn]=t,r[qo]=o,e=(t.mode&1)!==0,n){case"dialog":Ze("cancel",r),Ze("close",r);break;case"iframe":case"object":case"embed":Ze("load",r);break;case"video":case"audio":for(a=0;a<yo.length;a++)Ze(yo[a],r);break;case"source":Ze("error",r);break;case"img":case"image":case"link":Ze("error",r),Ze("load",r);break;case"details":Ze("toggle",r);break;case"input":b0(r,o),Ze("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ze("invalid",r);break;case"textarea":x0(r,o),Ze("invalid",r)}fu(n,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Yi(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Yi(r.textContent,s,e),a=["children",""+s]):Do.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Ze("scroll",r)}switch(n){case"input":zi(r),w0(r,o,!0);break;case"textarea":zi(r),S0(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Bs)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=P1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[qn]=t,e[qo]=r,a2(e,t,!1,!1),t.stateNode=e;e:{switch(i=pu(n,r),n){case"dialog":Ze("cancel",e),Ze("close",e),a=r;break;case"iframe":case"object":case"embed":Ze("load",e),a=r;break;case"video":case"audio":for(a=0;a<yo.length;a++)Ze(yo[a],e);a=r;break;case"source":Ze("error",e),a=r;break;case"img":case"image":case"link":Ze("error",e),Ze("load",e),a=r;break;case"details":Ze("toggle",e),a=r;break;case"input":b0(e,r),a=su(e,r),Ze("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=rt({},r,{value:void 0}),Ze("invalid",e);break;case"textarea":x0(e,r),a=uu(e,r),Ze("invalid",e);break;default:a=r}fu(n,a),s=a;for(o in s)if(s.hasOwnProperty(o)){var d=s[o];o==="style"?A1(e,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&M1(e,d)):o==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&zo(e,d):typeof d=="number"&&zo(e,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Do.hasOwnProperty(o)?d!=null&&o==="onScroll"&&Ze("scroll",e):d!=null&&Sh(e,o,d,i))}switch(n){case"input":zi(e),w0(e,r,!1);break;case"textarea":zi(e),S0(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ml(e,!!r.multiple,o,!1):r.defaultValue!=null&&ml(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Bs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ft(t),null;case 6:if(e&&t.stateNode!=null)o2(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(Y(166));if(n=ya(Qo.current),ya(Qn.current),qi(t)){if(r=t.stateNode,n=t.memoizedProps,r[qn]=t,(o=r.nodeValue!==n)&&(e=fn,e!==null))switch(e.tag){case 3:Yi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qn]=t,t.stateNode=r}return Ft(t),null;case 13:if(Xe(tt),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Je&&hn!==null&&t.mode&1&&!(t.flags&128))Cv(),Tl(),t.flags|=98560,o=!1;else if(o=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(Y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Y(317));o[qn]=t}else Tl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ft(t),o=!1}else An!==null&&(qu(An),An=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||tt.current&1?vt===0&&(vt=3):af())),t.updateQueue!==null&&(t.flags|=4),Ft(t),null);case 4:return El(),Bu(e,t),e===null&&Go(t.stateNode.containerInfo),Ft(t),null;case 10:return jh(t.type._context),Ft(t),null;case 17:return tn(t.type)&&js(),Ft(t),null;case 19:if(Xe(tt),o=t.memoizedState,o===null)return Ft(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)so(o,!1);else{if(vt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=qs(e),i!==null){for(t.flags|=128,so(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return He(tt,tt.current&1|2),t.child}e=e.sibling}o.tail!==null&&ot()>Il&&(t.flags|=128,r=!0,so(o,!1),t.lanes=4194304)}else{if(!r)if(e=qs(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),so(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Je)return Ft(t),null}else 2*ot()-o.renderingStartTime>Il&&n!==1073741824&&(t.flags|=128,r=!0,so(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ot(),t.sibling=null,n=tt.current,He(tt,r?n&1|2:n&1),t):(Ft(t),null);case 22:case 23:return rf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?on&1073741824&&(Ft(t),t.subtreeFlags&6&&(t.flags|=8192)):Ft(t),null;case 24:return null;case 25:return null}throw Error(Y(156,t.tag))}function f8(e,t){switch(Oh(t),t.tag){case 1:return tn(t.type)&&js(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return El(),Xe(en),Xe(Ot),Gh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vh(t),null;case 13:if(Xe(tt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Y(340));Tl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Xe(tt),null;case 4:return El(),null;case 10:return jh(t.type._context),null;case 22:case 23:return rf(),null;case 24:return null;default:return null}}var Ki=!1,At=!1,p8=typeof WeakSet=="function"?WeakSet:Set,te=null;function ul(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){lt(e,t,r)}else n.current=null}function ju(e,t,n){try{n()}catch(r){lt(e,t,r)}}var ug=!1;function g8(e,t){if(ku=Os,e=dv(),Fh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,d=-1,f=0,m=0,b=e,S=null;t:for(;;){for(var I;b!==n||a!==0&&b.nodeType!==3||(s=i+a),b!==o||r!==0&&b.nodeType!==3||(d=i+r),b.nodeType===3&&(i+=b.nodeValue.length),(I=b.firstChild)!==null;)S=b,b=I;for(;;){if(b===e)break t;if(S===n&&++f===a&&(s=i),S===o&&++m===r&&(d=i),(I=b.nextSibling)!==null)break;b=S,S=b.parentNode}b=I}n=s===-1||d===-1?null:{start:s,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(_u={focusedElem:e,selectionRange:n},Os=!1,te=t;te!==null;)if(t=te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,te=e;else for(;te!==null;){t=te;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var C=N.memoizedProps,L=N.memoizedState,w=t.stateNode,g=w.getSnapshotBeforeUpdate(t.elementType===t.type?C:Pn(t.type,C),L);w.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(v){lt(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,te=e;break}te=t.return}return N=ug,ug=!1,N}function Lo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&ju(t,n,o)}a=a.next}while(a!==r)}}function Cc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Uu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function i2(e){var t=e.alternate;t!==null&&(e.alternate=null,i2(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qn],delete t[qo],delete t[Eu],delete t[Kw],delete t[Xw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function s2(e){return e.tag===5||e.tag===3||e.tag===4}function hg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||s2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bs));else if(r!==4&&(e=e.child,e!==null))for(Wu(e,t,n),e=e.sibling;e!==null;)Wu(e,t,n),e=e.sibling}function Hu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hu(e,t,n),e=e.sibling;e!==null;)Hu(e,t,n),e=e.sibling}var _t=null,Fn=!1;function kr(e,t,n){for(n=n.child;n!==null;)c2(e,t,n),n=n.sibling}function c2(e,t,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(gc,n)}catch{}switch(n.tag){case 5:At||ul(n,t);case 6:var r=_t,a=Fn;_t=null,kr(e,t,n),_t=r,Fn=a,_t!==null&&(Fn?(e=_t,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_t.removeChild(n.stateNode));break;case 18:_t!==null&&(Fn?(e=_t,n=n.stateNode,e.nodeType===8?Ld(e.parentNode,n):e.nodeType===1&&Ld(e,n),Wo(e)):Ld(_t,n.stateNode));break;case 4:r=_t,a=Fn,_t=n.stateNode.containerInfo,Fn=!0,kr(e,t,n),_t=r,Fn=a;break;case 0:case 11:case 14:case 15:if(!At&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&ju(n,t,i),a=a.next}while(a!==r)}kr(e,t,n);break;case 1:if(!At&&(ul(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){lt(n,t,s)}kr(e,t,n);break;case 21:kr(e,t,n);break;case 22:n.mode&1?(At=(r=At)||n.memoizedState!==null,kr(e,t,n),At=r):kr(e,t,n);break;default:kr(e,t,n)}}function fg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new p8),t.forEach(function(r){var a=k8.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Ln(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:_t=s.stateNode,Fn=!1;break e;case 3:_t=s.stateNode.containerInfo,Fn=!0;break e;case 4:_t=s.stateNode.containerInfo,Fn=!0;break e}s=s.return}if(_t===null)throw Error(Y(160));c2(o,i,a),_t=null,Fn=!1;var d=a.alternate;d!==null&&(d.return=null),a.return=null}catch(f){lt(a,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)d2(t,e),t=t.sibling}function d2(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ln(t,e),jn(e),r&4){try{Lo(3,e,e.return),Cc(3,e)}catch(C){lt(e,e.return,C)}try{Lo(5,e,e.return)}catch(C){lt(e,e.return,C)}}break;case 1:Ln(t,e),jn(e),r&512&&n!==null&&ul(n,n.return);break;case 5:if(Ln(t,e),jn(e),r&512&&n!==null&&ul(n,n.return),e.flags&32){var a=e.stateNode;try{zo(a,"")}catch(C){lt(e,e.return,C)}}if(r&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&L1(a,o),pu(s,i);var f=pu(s,o);for(i=0;i<d.length;i+=2){var m=d[i],b=d[i+1];m==="style"?A1(a,b):m==="dangerouslySetInnerHTML"?M1(a,b):m==="children"?zo(a,b):Sh(a,m,b,f)}switch(s){case"input":cu(a,o);break;case"textarea":R1(a,o);break;case"select":var S=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var I=o.value;I!=null?ml(a,!!o.multiple,I,!1):S!==!!o.multiple&&(o.defaultValue!=null?ml(a,!!o.multiple,o.defaultValue,!0):ml(a,!!o.multiple,o.multiple?[]:"",!1))}a[qo]=o}catch(C){lt(e,e.return,C)}}break;case 6:if(Ln(t,e),jn(e),r&4){if(e.stateNode===null)throw Error(Y(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(C){lt(e,e.return,C)}}break;case 3:if(Ln(t,e),jn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wo(t.containerInfo)}catch(C){lt(e,e.return,C)}break;case 4:Ln(t,e),jn(e);break;case 13:Ln(t,e),jn(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(tf=ot())),r&4&&fg(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(At=(f=At)||m,Ln(t,e),At=f):Ln(t,e),jn(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!m&&e.mode&1)for(te=e,m=e.child;m!==null;){for(b=te=m;te!==null;){switch(S=te,I=S.child,S.tag){case 0:case 11:case 14:case 15:Lo(4,S,S.return);break;case 1:ul(S,S.return);var N=S.stateNode;if(typeof N.componentWillUnmount=="function"){r=S,n=S.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(C){lt(r,n,C)}}break;case 5:ul(S,S.return);break;case 22:if(S.memoizedState!==null){gg(b);continue}}I!==null?(I.return=S,te=I):gg(b)}m=m.sibling}e:for(m=null,b=e;;){if(b.tag===5){if(m===null){m=b;try{a=b.stateNode,f?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=b.stateNode,d=b.memoizedProps.style,i=d!=null&&d.hasOwnProperty("display")?d.display:null,s.style.display=F1("display",i))}catch(C){lt(e,e.return,C)}}}else if(b.tag===6){if(m===null)try{b.stateNode.nodeValue=f?"":b.memoizedProps}catch(C){lt(e,e.return,C)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;m===b&&(m=null),b=b.return}m===b&&(m=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:Ln(t,e),jn(e),r&4&&fg(e);break;case 21:break;default:Ln(t,e),jn(e)}}function jn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(s2(n)){var r=n;break e}n=n.return}throw Error(Y(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(zo(a,""),r.flags&=-33);var o=hg(e);Hu(e,o,a);break;case 3:case 4:var i=r.stateNode.containerInfo,s=hg(e);Wu(e,s,i);break;default:throw Error(Y(161))}}catch(d){lt(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function m8(e,t,n){te=e,u2(e)}function u2(e,t,n){for(var r=(e.mode&1)!==0;te!==null;){var a=te,o=a.child;if(a.tag===22&&r){var i=a.memoizedState!==null||Ki;if(!i){var s=a.alternate,d=s!==null&&s.memoizedState!==null||At;s=Ki;var f=At;if(Ki=i,(At=d)&&!f)for(te=a;te!==null;)i=te,d=i.child,i.tag===22&&i.memoizedState!==null?mg(a):d!==null?(d.return=i,te=d):mg(a);for(;o!==null;)te=o,u2(o),o=o.sibling;te=a,Ki=s,At=f}pg(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,te=o):pg(e)}}function pg(e){for(;te!==null;){var t=te;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:At||Cc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!At)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Pn(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&K0(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}K0(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var m=f.memoizedState;if(m!==null){var b=m.dehydrated;b!==null&&Wo(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}At||t.flags&512&&Uu(t)}catch(S){lt(t,t.return,S)}}if(t===e){te=null;break}if(n=t.sibling,n!==null){n.return=t.return,te=n;break}te=t.return}}function gg(e){for(;te!==null;){var t=te;if(t===e){te=null;break}var n=t.sibling;if(n!==null){n.return=t.return,te=n;break}te=t.return}}function mg(e){for(;te!==null;){var t=te;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Cc(4,t)}catch(d){lt(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(d){lt(t,a,d)}}var o=t.return;try{Uu(t)}catch(d){lt(t,o,d)}break;case 5:var i=t.return;try{Uu(t)}catch(d){lt(t,i,d)}}}catch(d){lt(t,t.return,d)}if(t===e){te=null;break}var s=t.sibling;if(s!==null){s.return=t.return,te=s;break}te=t.return}}var v8=Math.ceil,Ks=vr.ReactCurrentDispatcher,Jh=vr.ReactCurrentOwner,Sn=vr.ReactCurrentBatchConfig,Ne=0,St=null,dt=null,Nt=0,on=0,hl=qr(0),vt=0,ei=null,Ea=0,kc=0,ef=0,Ro=null,Xt=null,tf=0,Il=1/0,ar=null,Xs=!1,Vu=null,Br=null,Xi=!1,Rr=null,Js=0,Po=0,Gu=null,vs=-1,ys=0;function Ut(){return Ne&6?ot():vs!==-1?vs:vs=ot()}function jr(e){return e.mode&1?Ne&2&&Nt!==0?Nt&-Nt:e8.transition!==null?(ys===0&&(ys=q1()),ys):(e=Oe,e!==0||(e=window.event,e=e===void 0?16:tv(e.type)),e):1}function zn(e,t,n,r){if(50<Po)throw Po=0,Gu=null,Error(Y(185));di(e,n,r),(!(Ne&2)||e!==St)&&(e===St&&(!(Ne&2)&&(kc|=n),vt===4&&Ir(e,Nt)),nn(e,r),n===1&&Ne===0&&!(t.mode&1)&&(Il=ot()+500,wc&&Zr()))}function nn(e,t){var n=e.callbackNode;ew(e,t);var r=As(e,e===St?Nt:0);if(r===0)n!==null&&_0(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_0(n),t===1)e.tag===0?Jw(vg.bind(null,e)):wv(vg.bind(null,e)),Zw(function(){!(Ne&6)&&Zr()}),n=null;else{switch(Z1(r)){case 1:n=$h;break;case 4:n=G1;break;case 16:n=Fs;break;case 536870912:n=Y1;break;default:n=Fs}n=b2(n,h2.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function h2(e,t){if(vs=-1,ys=0,Ne&6)throw Error(Y(327));var n=e.callbackNode;if(xl()&&e.callbackNode!==n)return null;var r=As(e,e===St?Nt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ec(e,r);else{t=r;var a=Ne;Ne|=2;var o=p2();(St!==e||Nt!==t)&&(ar=null,Il=ot()+500,Ca(e,t));do try{w8();break}catch(s){f2(e,s)}while(1);Bh(),Ks.current=o,Ne=a,dt!==null?t=0:(St=null,Nt=0,t=vt)}if(t!==0){if(t===2&&(a=bu(e),a!==0&&(r=a,t=Yu(e,a))),t===1)throw n=ei,Ca(e,0),Ir(e,r),nn(e,ot()),n;if(t===6)Ir(e,r);else{if(a=e.current.alternate,!(r&30)&&!y8(a)&&(t=ec(e,r),t===2&&(o=bu(e),o!==0&&(r=o,t=Yu(e,o))),t===1))throw n=ei,Ca(e,0),Ir(e,r),nn(e,ot()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(Y(345));case 2:ha(e,Xt,ar);break;case 3:if(Ir(e,r),(r&130023424)===r&&(t=tf+500-ot(),10<t)){if(As(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ut(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=$u(ha.bind(null,e,Xt,ar),t);break}ha(e,Xt,ar);break;case 4:if(Ir(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var i=31-Dn(r);o=1<<i,i=t[i],i>a&&(a=i),r&=~o}if(r=a,r=ot()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*v8(r/1960))-r,10<r){e.timeoutHandle=$u(ha.bind(null,e,Xt,ar),r);break}ha(e,Xt,ar);break;case 5:ha(e,Xt,ar);break;default:throw Error(Y(329))}}}return nn(e,ot()),e.callbackNode===n?h2.bind(null,e):null}function Yu(e,t){var n=Ro;return e.current.memoizedState.isDehydrated&&(Ca(e,t).flags|=256),e=ec(e,t),e!==2&&(t=Xt,Xt=n,t!==null&&qu(t)),e}function qu(e){Xt===null?Xt=e:Xt.push.apply(Xt,e)}function y8(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!Bn(o(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ir(e,t){for(t&=~ef,t&=~kc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Dn(t),r=1<<n;e[n]=-1,t&=~r}}function vg(e){if(Ne&6)throw Error(Y(327));xl();var t=As(e,0);if(!(t&1))return nn(e,ot()),null;var n=ec(e,t);if(e.tag!==0&&n===2){var r=bu(e);r!==0&&(t=r,n=Yu(e,r))}if(n===1)throw n=ei,Ca(e,0),Ir(e,t),nn(e,ot()),n;if(n===6)throw Error(Y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ha(e,Xt,ar),nn(e,ot()),null}function nf(e,t){var n=Ne;Ne|=1;try{return e(t)}finally{Ne=n,Ne===0&&(Il=ot()+500,wc&&Zr())}}function Na(e){Rr!==null&&Rr.tag===0&&!(Ne&6)&&xl();var t=Ne;Ne|=1;var n=Sn.transition,r=Oe;try{if(Sn.transition=null,Oe=1,e)return e()}finally{Oe=r,Sn.transition=n,Ne=t,!(Ne&6)&&Zr()}}function rf(){on=hl.current,Xe(hl)}function Ca(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qw(n)),dt!==null)for(n=dt.return;n!==null;){var r=n;switch(Oh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&js();break;case 3:El(),Xe(en),Xe(Ot),Gh();break;case 5:Vh(r);break;case 4:El();break;case 13:Xe(tt);break;case 19:Xe(tt);break;case 10:jh(r.type._context);break;case 22:case 23:rf()}n=n.return}if(St=e,dt=e=Ur(e.current,null),Nt=on=t,vt=0,ei=null,ef=kc=Ea=0,Xt=Ro=null,va!==null){for(t=0;t<va.length;t++)if(n=va[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=a,r.next=i}n.pending=r}va=null}return e}function f2(e,t){do{var n=dt;try{if(Bh(),ps.current=Qs,Zs){for(var r=nt.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Zs=!1}if($a=0,xt=mt=nt=null,Io=!1,Ko=0,Jh.current=null,n===null||n.return===null){vt=1,ei=t,dt=null;break}e:{var o=e,i=n.return,s=n,d=t;if(t=Nt,s.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var f=d,m=s,b=m.tag;if(!(m.mode&1)&&(b===0||b===11||b===15)){var S=m.alternate;S?(m.updateQueue=S.updateQueue,m.memoizedState=S.memoizedState,m.lanes=S.lanes):(m.updateQueue=null,m.memoizedState=null)}var I=ag(i);if(I!==null){I.flags&=-257,lg(I,i,s,o,t),I.mode&1&&rg(o,f,t),t=I,d=f;var N=t.updateQueue;if(N===null){var C=new Set;C.add(d),t.updateQueue=C}else N.add(d);break e}else{if(!(t&1)){rg(o,f,t),af();break e}d=Error(Y(426))}}else if(Je&&s.mode&1){var L=ag(i);if(L!==null){!(L.flags&65536)&&(L.flags|=256),lg(L,i,s,o,t),Dh(Nl(d,s));break e}}o=d=Nl(d,s),vt!==4&&(vt=2),Ro===null?Ro=[o]:Ro.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var w=Qv(o,d,t);Q0(o,w);break e;case 1:s=d;var g=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Br===null||!Br.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Kv(o,s,t);Q0(o,v);break e}}o=o.return}while(o!==null)}m2(n)}catch($){t=$,dt===n&&n!==null&&(dt=n=n.return);continue}break}while(1)}function p2(){var e=Ks.current;return Ks.current=Qs,e===null?Qs:e}function af(){(vt===0||vt===3||vt===2)&&(vt=4),St===null||!(Ea&268435455)&&!(kc&268435455)||Ir(St,Nt)}function ec(e,t){var n=Ne;Ne|=2;var r=p2();(St!==e||Nt!==t)&&(ar=null,Ca(e,t));do try{b8();break}catch(a){f2(e,a)}while(1);if(Bh(),Ne=n,Ks.current=r,dt!==null)throw Error(Y(261));return St=null,Nt=0,vt}function b8(){for(;dt!==null;)g2(dt)}function w8(){for(;dt!==null&&!V6();)g2(dt)}function g2(e){var t=y2(e.alternate,e,on);e.memoizedProps=e.pendingProps,t===null?m2(e):dt=t,Jh.current=null}function m2(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=f8(n,t),n!==null){n.flags&=32767,dt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{vt=6,dt=null;return}}else if(n=h8(n,t,on),n!==null){dt=n;return}if(t=t.sibling,t!==null){dt=t;return}dt=t=e}while(t!==null);vt===0&&(vt=5)}function ha(e,t,n){var r=Oe,a=Sn.transition;try{Sn.transition=null,Oe=1,x8(e,t,n,r)}finally{Sn.transition=a,Oe=r}return null}function x8(e,t,n,r){do xl();while(Rr!==null);if(Ne&6)throw Error(Y(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(tw(e,o),e===St&&(dt=St=null,Nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xi||(Xi=!0,b2(Fs,function(){return xl(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Sn.transition,Sn.transition=null;var i=Oe;Oe=1;var s=Ne;Ne|=4,Jh.current=null,g8(e,n),d2(n,e),jw(_u),Os=!!ku,_u=ku=null,e.current=n,m8(n),G6(),Ne=s,Oe=i,Sn.transition=o}else e.current=n;if(Xi&&(Xi=!1,Rr=e,Js=a),o=e.pendingLanes,o===0&&(Br=null),Z6(n.stateNode),nn(e,ot()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Xs)throw Xs=!1,e=Vu,Vu=null,e;return Js&1&&e.tag!==0&&xl(),o=e.pendingLanes,o&1?e===Gu?Po++:(Po=0,Gu=e):Po=0,Zr(),null}function xl(){if(Rr!==null){var e=Z1(Js),t=Sn.transition,n=Oe;try{if(Sn.transition=null,Oe=16>e?16:e,Rr===null)var r=!1;else{if(e=Rr,Rr=null,Js=0,Ne&6)throw Error(Y(331));var a=Ne;for(Ne|=4,te=e.current;te!==null;){var o=te,i=o.child;if(te.flags&16){var s=o.deletions;if(s!==null){for(var d=0;d<s.length;d++){var f=s[d];for(te=f;te!==null;){var m=te;switch(m.tag){case 0:case 11:case 15:Lo(8,m,o)}var b=m.child;if(b!==null)b.return=m,te=b;else for(;te!==null;){m=te;var S=m.sibling,I=m.return;if(i2(m),m===f){te=null;break}if(S!==null){S.return=I,te=S;break}te=I}}}var N=o.alternate;if(N!==null){var C=N.child;if(C!==null){N.child=null;do{var L=C.sibling;C.sibling=null,C=L}while(C!==null)}}te=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,te=i;else e:for(;te!==null;){if(o=te,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Lo(9,o,o.return)}var w=o.sibling;if(w!==null){w.return=o.return,te=w;break e}te=o.return}}var g=e.current;for(te=g;te!==null;){i=te;var y=i.child;if(i.subtreeFlags&2064&&y!==null)y.return=i,te=y;else e:for(i=g;te!==null;){if(s=te,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Cc(9,s)}}catch($){lt(s,s.return,$)}if(s===i){te=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,te=v;break e}te=s.return}}if(Ne=a,Zr(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(gc,e)}catch{}r=!0}return r}finally{Oe=n,Sn.transition=t}}return!1}function yg(e,t,n){t=Nl(n,t),t=Qv(e,t,1),e=zr(e,t,1),t=Ut(),e!==null&&(di(e,1,t),nn(e,t))}function lt(e,t,n){if(e.tag===3)yg(e,e,n);else for(;t!==null;){if(t.tag===3){yg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Br===null||!Br.has(r))){e=Nl(n,e),e=Kv(t,e,1),t=zr(t,e,1),e=Ut(),t!==null&&(di(t,1,e),nn(t,e));break}}t=t.return}}function S8(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ut(),e.pingedLanes|=e.suspendedLanes&n,St===e&&(Nt&n)===n&&(vt===4||vt===3&&(Nt&130023424)===Nt&&500>ot()-tf?Ca(e,0):ef|=n),nn(e,t)}function v2(e,t){t===0&&(e.mode&1?(t=Ui,Ui<<=1,!(Ui&130023424)&&(Ui=4194304)):t=1);var n=Ut();e=fr(e,t),e!==null&&(di(e,t,n),nn(e,n))}function C8(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),v2(e,n)}function k8(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Y(314))}r!==null&&r.delete(t),v2(e,n)}var y2;y2=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||en.current)Jt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Jt=!1,u8(e,t,n);Jt=!!(e.flags&131072)}else Jt=!1,Je&&t.flags&1048576&&xv(t,Hs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ms(e,t),e=t.pendingProps;var a=_l(t,Ot.current);wl(t,n),a=qh(null,t,r,e,a,n);var o=Zh();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tn(r)?(o=!0,Us(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Wh(t),a.updater=xc,t.stateNode=a,a._reactInternals=t,Mu(t,r,e,n),t=Ou(null,t,r,!0,o,n)):(t.tag=0,Je&&o&&Ah(t),Bt(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ms(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=T8(r),e=Pn(r,e),a){case 0:t=Au(null,t,r,e,n);break e;case 1:t=sg(null,t,r,e,n);break e;case 11:t=og(null,t,r,e,n);break e;case 14:t=ig(null,t,r,Pn(r.type,e),n);break e}throw Error(Y(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Pn(r,a),Au(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Pn(r,a),sg(e,t,r,a,n);case 3:e:{if(t2(t),e===null)throw Error(Y(387));r=t.pendingProps,o=t.memoizedState,a=o.element,_v(e,t),Ys(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Nl(Error(Y(423)),t),t=cg(e,t,r,n,a);break e}else if(r!==a){a=Nl(Error(Y(424)),t),t=cg(e,t,r,n,a);break e}else for(hn=Dr(t.stateNode.containerInfo.firstChild),fn=t,Je=!0,An=null,n=Nv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tl(),r===a){t=pr(e,t,n);break e}Bt(e,t,r,n)}t=t.child}return t;case 5:return Iv(t),e===null&&Lu(t),r=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,Tu(r,a)?i=null:o!==null&&Tu(r,o)&&(t.flags|=32),e2(e,t),Bt(e,t,i,n),t.child;case 6:return e===null&&Lu(t),null;case 13:return n2(e,t,n);case 4:return Hh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$l(t,null,r,n):Bt(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Pn(r,a),og(e,t,r,a,n);case 7:return Bt(e,t,t.pendingProps,n),t.child;case 8:return Bt(e,t,t.pendingProps.children,n),t.child;case 12:return Bt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value,He(Vs,r._currentValue),r._currentValue=i,o!==null)if(Bn(o.value,i)){if(o.children===a.children&&!en.current){t=pr(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var d=s.firstContext;d!==null;){if(d.context===r){if(o.tag===1){d=cr(-1,n&-n),d.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var m=f.pending;m===null?d.next=d:(d.next=m.next,m.next=d),f.pending=d}}o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),Ru(o.return,n,t),s.lanes|=n;break}d=d.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(Y(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ru(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Bt(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,wl(t,n),a=kn(a),r=r(a),t.flags|=1,Bt(e,t,r,n),t.child;case 14:return r=t.type,a=Pn(r,t.pendingProps),a=Pn(r.type,a),ig(e,t,r,a,n);case 15:return Xv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Pn(r,a),ms(e,t),t.tag=1,tn(r)?(e=!0,Us(t)):e=!1,wl(t,n),$v(t,r,a),Mu(t,r,a,n),Ou(null,t,r,!0,e,n);case 19:return r2(e,t,n);case 22:return Jv(e,t,n)}throw Error(Y(156,t.tag))};function b2(e,t){return V1(e,t)}function _8(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(e,t,n,r){return new _8(e,t,n,r)}function lf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function T8(e){if(typeof e=="function")return lf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kh)return 11;if(e===_h)return 14}return 2}function Ur(e,t){var n=e.alternate;return n===null?(n=xn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bs(e,t,n,r,a,o){var i=2;if(r=e,typeof e=="function")lf(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case nl:return ka(n.children,a,o,t);case Ch:i=8,a|=8;break;case au:return e=xn(12,n,t,a|2),e.elementType=au,e.lanes=o,e;case lu:return e=xn(13,n,t,a),e.elementType=lu,e.lanes=o,e;case ou:return e=xn(19,n,t,a),e.elementType=ou,e.lanes=o,e;case E1:return _c(n,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case T1:i=10;break e;case $1:i=9;break e;case kh:i=11;break e;case _h:i=14;break e;case $r:i=16,r=null;break e}throw Error(Y(130,e==null?e:typeof e,""))}return t=xn(i,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function ka(e,t,n,r){return e=xn(7,e,r,t),e.lanes=n,e}function _c(e,t,n,r){return e=xn(22,e,r,t),e.elementType=E1,e.lanes=n,e.stateNode={isHidden:!1},e}function zd(e,t,n){return e=xn(6,e,null,t),e.lanes=n,e}function Bd(e,t,n){return t=xn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $8(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wd(0),this.expirationTimes=wd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wd(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function of(e,t,n,r,a,o,i,s,d){return e=new $8(e,t,n,s,d),t===1?(t=1,o===!0&&(t|=8)):t=0,o=xn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wh(o),e}function E8(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tl,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function w2(e){if(!e)return Hr;e=e._reactInternals;e:{if(Ra(e)!==e||e.tag!==1)throw Error(Y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Y(171))}if(e.tag===1){var n=e.type;if(tn(n))return bv(e,n,t)}return t}function x2(e,t,n,r,a,o,i,s,d){return e=of(n,r,!0,e,a,o,i,s,d),e.context=w2(null),n=e.current,r=Ut(),a=jr(n),o=cr(r,a),o.callback=t??null,zr(n,o,a),e.current.lanes=a,di(e,a,r),nn(e,r),e}function Tc(e,t,n,r){var a=t.current,o=Ut(),i=jr(a);return n=w2(n),t.context===null?t.context=n:t.pendingContext=n,t=cr(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=zr(a,t,i),e!==null&&(zn(e,a,i,o),fs(e,a,i)),i}function tc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sf(e,t){bg(e,t),(e=e.alternate)&&bg(e,t)}function N8(){return null}var S2=typeof reportError=="function"?reportError:function(e){console.error(e)};function cf(e){this._internalRoot=e}$c.prototype.render=cf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Y(409));Tc(e,t,null,null)};$c.prototype.unmount=cf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Na(function(){Tc(null,e,null,null)}),t[hr]=null}};function $c(e){this._internalRoot=e}$c.prototype.unstable_scheduleHydration=function(e){if(e){var t=X1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nr.length&&t!==0&&t<Nr[n].priority;n++);Nr.splice(n,0,e),n===0&&ev(e)}};function df(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ec(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wg(){}function I8(e,t,n,r,a){if(a){if(typeof r=="function"){var o=r;r=function(){var f=tc(i);o.call(f)}}var i=x2(t,r,e,0,null,!1,!1,"",wg);return e._reactRootContainer=i,e[hr]=i.current,Go(e.nodeType===8?e.parentNode:e),Na(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var f=tc(d);s.call(f)}}var d=of(e,0,!1,null,null,!1,!1,"",wg);return e._reactRootContainer=d,e[hr]=d.current,Go(e.nodeType===8?e.parentNode:e),Na(function(){Tc(t,d,n,r)}),d}function Nc(e,t,n,r,a){var o=n._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var s=a;a=function(){var d=tc(i);s.call(d)}}Tc(t,i,e,a)}else i=I8(n,t,e,a,r);return tc(i)}Q1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vo(t.pendingLanes);n!==0&&(Eh(t,n|1),nn(t,ot()),!(Ne&6)&&(Il=ot()+500,Zr()))}break;case 13:Na(function(){var r=fr(e,1);if(r!==null){var a=Ut();zn(r,e,1,a)}}),sf(e,1)}};Nh=function(e){if(e.tag===13){var t=fr(e,134217728);if(t!==null){var n=Ut();zn(t,e,134217728,n)}sf(e,134217728)}};K1=function(e){if(e.tag===13){var t=jr(e),n=fr(e,t);if(n!==null){var r=Ut();zn(n,e,t,r)}sf(e,t)}};X1=function(){return Oe};J1=function(e,t){var n=Oe;try{return Oe=e,t()}finally{Oe=n}};mu=function(e,t,n){switch(t){case"input":if(cu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=bc(r);if(!a)throw Error(Y(90));I1(r),cu(r,a)}}}break;case"textarea":R1(e,n);break;case"select":t=n.value,t!=null&&ml(e,!!n.multiple,t,!1)}};z1=nf;B1=Na;var L8={usingClientEntryPoint:!1,Events:[hi,ol,bc,O1,D1,nf]},co={findFiberByHostInstance:ma,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},R8={bundleType:co.bundleType,version:co.version,rendererPackageName:co.rendererPackageName,rendererConfig:co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=W1(e),e===null?null:e.stateNode},findFiberByHostInstance:co.findFiberByHostInstance||N8,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ji.isDisabled&&Ji.supportsFiber)try{gc=Ji.inject(R8),Zn=Ji}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L8;gn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!df(t))throw Error(Y(200));return E8(e,t,null,n)};gn.createRoot=function(e,t){if(!df(e))throw Error(Y(299));var n=!1,r="",a=S2;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=of(e,1,!1,null,null,n,!1,r,a),e[hr]=t.current,Go(e.nodeType===8?e.parentNode:e),new cf(t)};gn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=W1(t),e=e===null?null:e.stateNode,e};gn.flushSync=function(e){return Na(e)};gn.hydrate=function(e,t,n){if(!Ec(t))throw Error(Y(200));return Nc(null,e,t,!0,n)};gn.hydrateRoot=function(e,t,n){if(!df(e))throw Error(Y(405));var r=n!=null&&n.hydratedSources||null,a=!1,o="",i=S2;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=x2(t,null,e,1,n??null,a,!1,o,i),e[hr]=t.current,Go(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new $c(t)};gn.render=function(e,t,n){if(!Ec(t))throw Error(Y(200));return Nc(null,e,t,!1,n)};gn.unmountComponentAtNode=function(e){if(!Ec(e))throw Error(Y(40));return e._reactRootContainer?(Na(function(){Nc(null,null,e,!1,function(){e._reactRootContainer=null,e[hr]=null})}),!0):!1};gn.unstable_batchedUpdates=nf;gn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ec(n))throw Error(Y(200));if(e==null||e._reactInternals===void 0)throw Error(Y(38));return Nc(e,t,n,!1,r)};gn.version="18.2.0-next-9e3b772b8-20220608";function C2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C2)}catch(e){console.error(e)}}C2(),x1.exports=gn;var k2=x1.exports,xg=k2;nu.createRoot=xg.createRoot,nu.hydrateRoot=xg.hydrateRoot;function P8(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function M8(e,t){if(e==null)return{};var n=P8(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Zu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function F8(e){if(Array.isArray(e))return Zu(e)}function A8(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function O8(e,t){if(e){if(typeof e=="string")return Zu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zu(e,t)}}function D8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z8(e){return F8(e)||A8(e)||O8(e)||D8()}function ti(e){"@babel/helpers - typeof";return ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ti(e)}function B8(e,t){if(ti(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ti(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function j8(e){var t=B8(e,"string");return ti(t)==="symbol"?t:String(t)}function _2(e,t,n){return t=j8(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qu(){return Qu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qu.apply(this,arguments)}function Sg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function fl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sg(Object(n),!0).forEach(function(r){_2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function U8(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var jd={};function W8(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return jd[t]||(jd[t]=U8(e)),jd[t]}function H8(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=e.filter(function(o){return o!=="token"}),a=W8(r);return a.reduce(function(o,i){return fl(fl({},o),n[i])},t)}function Cg(e){return e.join(" ")}function V8(e,t){var n=0;return function(r){return n+=1,r.map(function(a,o){return T2({node:a,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(o)})})}}function T2(e){var t=e.node,n=e.stylesheet,r=e.style,a=r===void 0?{}:r,o=e.useInlineStyles,i=e.key,s=t.properties,d=t.type,f=t.tagName,m=t.value;if(d==="text")return m;if(f){var b=V8(n,o),S;if(!o)S=fl(fl({},s),{},{className:Cg(s.className)});else{var I=Object.keys(n).reduce(function(w,g){return g.split(".").forEach(function(y){w.includes(y)||w.push(y)}),w},[]),N=s.className&&s.className.includes("token")?["token"]:[],C=s.className&&N.concat(s.className.filter(function(w){return!I.includes(w)}));S=fl(fl({},s),{},{className:Cg(C)||void 0,style:H8(s.className,Object.assign({},s.style,a),n)})}var L=b(t.children);return $t.createElement(f,Qu({key:i},S),L)}}const G8=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var Y8=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function kg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Yn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kg(Object(n),!0).forEach(function(r){_2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var q8=/\n/g;function Z8(e){return e.match(q8)}function Q8(e){var t=e.lines,n=e.startingLineNumber,r=e.style;return t.map(function(a,o){var i=o+n;return $t.createElement("span",{key:"line-".concat(o),className:"react-syntax-highlighter-line-number",style:typeof r=="function"?r(i):r},"".concat(i,`
`))})}function K8(e){var t=e.codeString,n=e.codeStyle,r=e.containerStyle,a=r===void 0?{float:"left",paddingRight:"10px"}:r,o=e.numberStyle,i=o===void 0?{}:o,s=e.startingLineNumber;return $t.createElement("code",{style:Object.assign({},n,a)},Q8({lines:t.replace(/\n$/,"").split(`
`),style:i,startingLineNumber:s}))}function X8(e){return"".concat(e.toString().length,".25em")}function $2(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function E2(e,t,n){var r={display:"inline-block",minWidth:X8(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},a=typeof e=="function"?e(t):e,o=Yn(Yn({},r),a);return o}function ws(e){var t=e.children,n=e.lineNumber,r=e.lineNumberStyle,a=e.largestLineNumber,o=e.showInlineLineNumbers,i=e.lineProps,s=i===void 0?{}:i,d=e.className,f=d===void 0?[]:d,m=e.showLineNumbers,b=e.wrapLongLines,S=typeof s=="function"?s(n):s;if(S.className=f,n&&o){var I=E2(r,n,a);t.unshift($2(n,I))}return b&m&&(S.style=Yn(Yn({},S.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:S,children:t}}function N2(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=0;r<e.length;r++){var a=e[r];if(a.type==="text")n.push(ws({children:[a],className:z8(new Set(t))}));else if(a.children){var o=t.concat(a.properties.className);N2(a.children,o).forEach(function(i){return n.push(i)})}}return n}function J8(e,t,n,r,a,o,i,s,d){var f,m=N2(e.value),b=[],S=-1,I=0;function N($,_){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return ws({children:$,lineNumber:_,lineNumberStyle:s,largestLineNumber:i,showInlineLineNumbers:a,lineProps:n,className:M,showLineNumbers:r,wrapLongLines:d})}function C($,_){if(r&&_&&a){var M=E2(s,_,i);$.unshift($2(_,M))}return $}function L($,_){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||M.length>0?N($,_,M):C($,_)}for(var w=function(){var _=m[I],M=_.children[0].value,A=Z8(M);if(A){var j=M.split(`
`);j.forEach(function(q,he){var se=r&&b.length+o,Be={type:"text",value:"".concat(q,`
`)};if(he===0){var at=m.slice(S+1,I).concat(ws({children:[Be],className:_.properties.className})),Ve=L(at,se);b.push(Ve)}else if(he===j.length-1){var De=m[I+1]&&m[I+1].children&&m[I+1].children[0],Ge={type:"text",value:"".concat(q)};if(De){var U=ws({children:[Ge],className:_.properties.className});m.splice(I+1,0,U)}else{var Z=[Ge],J=L(Z,se,_.properties.className);b.push(J)}}else{var le=[Be],fe=L(le,se,_.properties.className);b.push(fe)}}),S=I}I++};I<m.length;)w();if(S!==m.length-1){var g=m.slice(S+1,m.length);if(g&&g.length){var y=r&&b.length+o,v=L(g,y);b.push(v)}}return t?b:(f=[]).concat.apply(f,b)}function ex(e){var t=e.rows,n=e.stylesheet,r=e.useInlineStyles;return t.map(function(a,o){return T2({node:a,stylesheet:n,useInlineStyles:r,key:"code-segement".concat(o)})})}function I2(e){return e&&typeof e.highlightAuto<"u"}function tx(e){var t=e.astGenerator,n=e.language,r=e.code,a=e.defaultCodeValue;if(I2(t)){var o=G8(t,n);return n==="text"?{value:a,language:"text"}:o?t.highlight(n,r):t.highlightAuto(r)}try{return n&&n!=="text"?{value:t.highlight(r,n)}:{value:a}}catch{return{value:a}}}function nx(e,t){return function(r){var a=r.language,o=r.children,i=r.style,s=i===void 0?t:i,d=r.customStyle,f=d===void 0?{}:d,m=r.codeTagProps,b=m===void 0?{className:a?"language-".concat(a):void 0,style:Yn(Yn({},s['code[class*="language-"]']),s['code[class*="language-'.concat(a,'"]')])}:m,S=r.useInlineStyles,I=S===void 0?!0:S,N=r.showLineNumbers,C=N===void 0?!1:N,L=r.showInlineLineNumbers,w=L===void 0?!0:L,g=r.startingLineNumber,y=g===void 0?1:g,v=r.lineNumberContainerStyle,$=r.lineNumberStyle,_=$===void 0?{}:$,M=r.wrapLines,A=r.wrapLongLines,j=A===void 0?!1:A,q=r.lineProps,he=q===void 0?{}:q,se=r.renderer,Be=r.PreTag,at=Be===void 0?"pre":Be,Ve=r.CodeTag,De=Ve===void 0?"code":Ve,Ge=r.code,U=Ge===void 0?(Array.isArray(o)?o[0]:o)||"":Ge,Z=r.astGenerator,J=M8(r,Y8);Z=Z||e;var le=C?$t.createElement(K8,{containerStyle:v,codeStyle:b.style||{},numberStyle:_,startingLineNumber:y,codeString:U}):null,fe=s.hljs||s['pre[class*="language-"]']||{backgroundColor:"#fff"},Dt=I2(Z)?"hljs":"prismjs",pe=I?Object.assign({},J,{style:Object.assign({},fe,f)}):Object.assign({},J,{className:J.className?"".concat(Dt," ").concat(J.className):Dt,style:Object.assign({},f)});if(j?b.style=Yn(Yn({},b.style),{},{whiteSpace:"pre-wrap"}):b.style=Yn(Yn({},b.style),{},{whiteSpace:"pre"}),!Z)return $t.createElement(at,pe,le,$t.createElement(De,b,U));(M===void 0&&se||j)&&(M=!0),se=se||ex;var et=[{type:"text",value:U}],Ye=tx({astGenerator:Z,language:a,code:U,defaultCodeValue:et});Ye.language===null&&(Ye.value=et);var ht=Ye.value.length+y,Pt=J8(Ye,M,he,C,w,y,ht,_,j);return $t.createElement(at,pe,$t.createElement(De,b,!w&&le,se({rows:Pt,stylesheet:s,useInlineStyles:I})))}}var rx=lx,ax=Object.prototype.hasOwnProperty;function lx(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)ax.call(n,r)&&(e[r]=n[r])}return e}var L2=R2,uf=R2.prototype;uf.space=null;uf.normal={};uf.property={};function R2(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var _g=rx,ox=L2,ix=sx;function sx(e){for(var t=e.length,n=[],r=[],a=-1,o,i;++a<t;)o=e[a],n.push(o.property),r.push(o.normal),i=o.space;return new ox(_g.apply(null,n),_g.apply(null,r),i)}var hf=cx;function cx(e){return e.toLowerCase()}var P2=M2,Tn=M2.prototype;Tn.space=null;Tn.attribute=null;Tn.property=null;Tn.boolean=!1;Tn.booleanish=!1;Tn.overloadedBoolean=!1;Tn.number=!1;Tn.commaSeparated=!1;Tn.spaceSeparated=!1;Tn.commaOrSpaceSeparated=!1;Tn.mustUseProperty=!1;Tn.defined=!1;function M2(e,t){this.property=e,this.attribute=t}var Kn={},dx=0;Kn.boolean=Pa();Kn.booleanish=Pa();Kn.overloadedBoolean=Pa();Kn.number=Pa();Kn.spaceSeparated=Pa();Kn.commaSeparated=Pa();Kn.commaOrSpaceSeparated=Pa();function Pa(){return Math.pow(2,++dx)}var F2=P2,Tg=Kn,A2=ff;ff.prototype=new F2;ff.prototype.defined=!0;var O2=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],ux=O2.length;function ff(e,t,n,r){var a=-1,o;for($g(this,"space",r),F2.call(this,e,t);++a<ux;)o=O2[a],$g(this,o,(n&Tg[o])===Tg[o])}function $g(e,t,n){n&&(e[t]=n)}var Eg=hf,hx=L2,fx=A2,pi=px;function px(e){var t=e.space,n=e.mustUseProperty||[],r=e.attributes||{},a=e.properties,o=e.transform,i={},s={},d,f;for(d in a)f=new fx(d,o(r,d),a[d],t),n.indexOf(d)!==-1&&(f.mustUseProperty=!0),i[d]=f,s[Eg(d)]=d,s[Eg(f.attribute)]=d;return new hx(i,s,t)}var gx=pi,mx=gx({space:"xlink",transform:vx,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function vx(e,t){return"xlink:"+t.slice(5).toLowerCase()}var yx=pi,bx=yx({space:"xml",transform:wx,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function wx(e,t){return"xml:"+t.slice(3).toLowerCase()}var xx=Sx;function Sx(e,t){return t in e?e[t]:t}var Cx=xx,D2=kx;function kx(e,t){return Cx(e,t.toLowerCase())}var _x=pi,Tx=D2,$x=_x({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Tx,properties:{xmlns:null,xmlnsXLink:null}}),pf=Kn,Ex=pi,Zt=pf.booleanish,yn=pf.number,ca=pf.spaceSeparated,Nx=Ex({transform:Ix,properties:{ariaActiveDescendant:null,ariaAtomic:Zt,ariaAutoComplete:null,ariaBusy:Zt,ariaChecked:Zt,ariaColCount:yn,ariaColIndex:yn,ariaColSpan:yn,ariaControls:ca,ariaCurrent:null,ariaDescribedBy:ca,ariaDetails:null,ariaDisabled:Zt,ariaDropEffect:ca,ariaErrorMessage:null,ariaExpanded:Zt,ariaFlowTo:ca,ariaGrabbed:Zt,ariaHasPopup:null,ariaHidden:Zt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ca,ariaLevel:yn,ariaLive:null,ariaModal:Zt,ariaMultiLine:Zt,ariaMultiSelectable:Zt,ariaOrientation:null,ariaOwns:ca,ariaPlaceholder:null,ariaPosInSet:yn,ariaPressed:Zt,ariaReadOnly:Zt,ariaRelevant:null,ariaRequired:Zt,ariaRoleDescription:ca,ariaRowCount:yn,ariaRowIndex:yn,ariaRowSpan:yn,ariaSelected:Zt,ariaSetSize:yn,ariaSort:null,ariaValueMax:yn,ariaValueMin:yn,ariaValueNow:yn,ariaValueText:null,role:null}});function Ix(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var Al=Kn,Lx=pi,Rx=D2,we=Al.boolean,Px=Al.overloadedBoolean,uo=Al.booleanish,qe=Al.number,zt=Al.spaceSeparated,es=Al.commaSeparated,Mx=Lx({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Rx,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:es,acceptCharset:zt,accessKey:zt,action:null,allow:null,allowFullScreen:we,allowPaymentRequest:we,allowUserMedia:we,alt:null,as:null,async:we,autoCapitalize:null,autoComplete:zt,autoFocus:we,autoPlay:we,capture:we,charSet:null,checked:we,cite:null,className:zt,cols:qe,colSpan:null,content:null,contentEditable:uo,controls:we,controlsList:zt,coords:qe|es,crossOrigin:null,data:null,dateTime:null,decoding:null,default:we,defer:we,dir:null,dirName:null,disabled:we,download:Px,draggable:uo,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:we,formTarget:null,headers:zt,height:qe,hidden:we,high:qe,href:null,hrefLang:null,htmlFor:zt,httpEquiv:zt,id:null,imageSizes:null,imageSrcSet:es,inputMode:null,integrity:null,is:null,isMap:we,itemId:null,itemProp:zt,itemRef:zt,itemScope:we,itemType:zt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:we,low:qe,manifest:null,max:null,maxLength:qe,media:null,method:null,min:null,minLength:qe,multiple:we,muted:we,name:null,nonce:null,noModule:we,noValidate:we,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:we,optimum:qe,pattern:null,ping:zt,placeholder:null,playsInline:we,poster:null,preload:null,readOnly:we,referrerPolicy:null,rel:zt,required:we,reversed:we,rows:qe,rowSpan:qe,sandbox:zt,scope:null,scoped:we,seamless:we,selected:we,shape:null,size:qe,sizes:null,slot:null,span:qe,spellCheck:uo,src:null,srcDoc:null,srcLang:null,srcSet:es,start:qe,step:null,style:null,tabIndex:qe,target:null,title:null,translate:null,type:null,typeMustMatch:we,useMap:null,value:uo,width:qe,wrap:null,align:null,aLink:null,archive:zt,axis:null,background:null,bgColor:null,border:qe,borderColor:null,bottomMargin:qe,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:we,declare:we,event:null,face:null,frame:null,frameBorder:null,hSpace:qe,leftMargin:qe,link:null,longDesc:null,lowSrc:null,marginHeight:qe,marginWidth:qe,noResize:we,noHref:we,noShade:we,noWrap:we,object:null,profile:null,prompt:null,rev:null,rightMargin:qe,rules:null,scheme:null,scrolling:uo,standby:null,summary:null,text:null,topMargin:qe,valueType:null,version:null,vAlign:null,vLink:null,vSpace:qe,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:we,disableRemotePlayback:we,prefix:null,property:null,results:qe,security:null,unselectable:null}}),Fx=ix,Ax=mx,Ox=bx,Dx=$x,zx=Nx,Bx=Mx,jx=Fx([Ox,Ax,Dx,zx,Bx]),Ux=hf,Wx=A2,Hx=P2,gf="data",Vx=qx,Gx=/^data[-\w.:]+$/i,z2=/-[a-z]/g,Yx=/[A-Z]/g;function qx(e,t){var n=Ux(t),r=t,a=Hx;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===gf&&Gx.test(t)&&(t.charAt(4)==="-"?r=Zx(t):t=Qx(t),a=Wx),new a(r,t))}function Zx(e){var t=e.slice(5).replace(z2,Xx);return gf+t.charAt(0).toUpperCase()+t.slice(1)}function Qx(e){var t=e.slice(4);return z2.test(t)?e:(t=t.replace(Yx,Kx),t.charAt(0)!=="-"&&(t="-"+t),gf+t)}function Kx(e){return"-"+e.toLowerCase()}function Xx(e){return e.charAt(1).toUpperCase()}var Jx=e9,Ng=/[#.]/g;function e9(e,t){for(var n=e||"",r=t||"div",a={},o=0,i,s,d;o<n.length;)Ng.lastIndex=o,d=Ng.exec(n),i=n.slice(o,d?d.index:n.length),i&&(s?s==="#"?a.id=i:a.className?a.className.push(i):a.className=[i]:r=i,o+=i.length),d&&(s=d[0],o++);return{type:"element",tagName:r,properties:a,children:[]}}var mf={};mf.parse=r9;mf.stringify=a9;var Ig="",t9=" ",n9=/[ \t\n\r\f]+/g;function r9(e){var t=String(e||Ig).trim();return t===Ig?[]:t.split(n9)}function a9(e){return e.join(t9).trim()}var vf={};vf.parse=l9;vf.stringify=o9;var Ku=",",Lg=" ",bo="";function l9(e){for(var t=[],n=String(e||bo),r=n.indexOf(Ku),a=0,o=!1,i;!o;)r===-1&&(r=n.length,o=!0),i=n.slice(a,r).trim(),(i||!o)&&t.push(i),a=r+1,r=n.indexOf(Ku,a);return t}function o9(e,t){var n=t||{},r=n.padLeft===!1?bo:Lg,a=n.padRight?Lg:bo;return e[e.length-1]===bo&&(e=e.concat(bo)),e.join(a+Ku+r).trim()}var i9=Vx,Rg=hf,s9=Jx,Pg=mf.parse,Mg=vf.parse,c9=u9,d9={}.hasOwnProperty;function u9(e,t,n){var r=n?m9(n):null;return a;function a(i,s){var d=s9(i,t),f=Array.prototype.slice.call(arguments,2),m=d.tagName.toLowerCase(),b;if(d.tagName=r&&d9.call(r,m)?r[m]:m,s&&h9(s,d)&&(f.unshift(s),s=null),s)for(b in s)o(d.properties,b,s[b]);return B2(d.children,f),d.tagName==="template"&&(d.content={type:"root",children:d.children},d.children=[]),d}function o(i,s,d){var f,m,b;d==null||d!==d||(f=i9(e,s),m=f.property,b=d,typeof b=="string"&&(f.spaceSeparated?b=Pg(b):f.commaSeparated?b=Mg(b):f.commaOrSpaceSeparated&&(b=Pg(Mg(b).join(" ")))),m==="style"&&typeof d!="string"&&(b=g9(b)),m==="className"&&i.className&&(b=i.className.concat(b)),i[m]=p9(f,m,b))}}function h9(e,t){return typeof e=="string"||"length"in e||f9(t.tagName,e)}function f9(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function B2(e,t){var n,r;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,r=t.length;++n<r;)B2(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function p9(e,t,n){var r,a,o;if(typeof n!="object"||!("length"in n))return Fg(e,t,n);for(a=n.length,r=-1,o=[];++r<a;)o[r]=Fg(e,t,n[r]);return o}function Fg(e,t,n){var r=n;return e.number||e.positiveNumber?!isNaN(r)&&r!==""&&(r=Number(r)):(e.boolean||e.overloadedBoolean)&&typeof r=="string"&&(r===""||Rg(n)===Rg(t))&&(r=!0),r}function g9(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function m9(e){for(var t=e.length,n=-1,r={},a;++n<t;)a=e[n],r[a.toLowerCase()]=a;return r}var v9=jx,y9=c9,j2=y9(v9,"div");j2.displayName="html";var b9=j2,w9=b9;const x9="Æ",S9="&",C9="Á",k9="Â",_9="À",T9="Å",$9="Ã",E9="Ä",N9="©",I9="Ç",L9="Ð",R9="É",P9="Ê",M9="È",F9="Ë",A9=">",O9="Í",D9="Î",z9="Ì",B9="Ï",j9="<",U9="Ñ",W9="Ó",H9="Ô",V9="Ò",G9="Ø",Y9="Õ",q9="Ö",Z9='"',Q9="®",K9="Þ",X9="Ú",J9="Û",e7="Ù",t7="Ü",n7="Ý",r7="á",a7="â",l7="´",o7="æ",i7="à",s7="&",c7="å",d7="ã",u7="ä",h7="¦",f7="ç",p7="¸",g7="¢",m7="©",v7="¤",y7="°",b7="÷",w7="é",x7="ê",S7="è",C7="ð",k7="ë",_7="½",T7="¼",$7="¾",E7=">",N7="í",I7="î",L7="¡",R7="ì",P7="¿",M7="ï",F7="«",A7="<",O7="¯",D7="µ",z7="·",B7=" ",j7="¬",U7="ñ",W7="ó",H7="ô",V7="ò",G7="ª",Y7="º",q7="ø",Z7="õ",Q7="ö",K7="¶",X7="±",J7="£",eS='"',tS="»",nS="®",rS="§",aS="­",lS="¹",oS="²",iS="³",sS="ß",cS="þ",dS="×",uS="ú",hS="û",fS="ù",pS="¨",gS="ü",mS="ý",vS="¥",yS="ÿ",bS={AElig:x9,AMP:S9,Aacute:C9,Acirc:k9,Agrave:_9,Aring:T9,Atilde:$9,Auml:E9,COPY:N9,Ccedil:I9,ETH:L9,Eacute:R9,Ecirc:P9,Egrave:M9,Euml:F9,GT:A9,Iacute:O9,Icirc:D9,Igrave:z9,Iuml:B9,LT:j9,Ntilde:U9,Oacute:W9,Ocirc:H9,Ograve:V9,Oslash:G9,Otilde:Y9,Ouml:q9,QUOT:Z9,REG:Q9,THORN:K9,Uacute:X9,Ucirc:J9,Ugrave:e7,Uuml:t7,Yacute:n7,aacute:r7,acirc:a7,acute:l7,aelig:o7,agrave:i7,amp:s7,aring:c7,atilde:d7,auml:u7,brvbar:h7,ccedil:f7,cedil:p7,cent:g7,copy:m7,curren:v7,deg:y7,divide:b7,eacute:w7,ecirc:x7,egrave:S7,eth:C7,euml:k7,frac12:_7,frac14:T7,frac34:$7,gt:E7,iacute:N7,icirc:I7,iexcl:L7,igrave:R7,iquest:P7,iuml:M7,laquo:F7,lt:A7,macr:O7,micro:D7,middot:z7,nbsp:B7,not:j7,ntilde:U7,oacute:W7,ocirc:H7,ograve:V7,ordf:G7,ordm:Y7,oslash:q7,otilde:Z7,ouml:Q7,para:K7,plusmn:X7,pound:J7,quot:eS,raquo:tS,reg:nS,sect:rS,shy:aS,sup1:lS,sup2:oS,sup3:iS,szlig:sS,thorn:cS,times:dS,uacute:uS,ucirc:hS,ugrave:fS,uml:pS,uuml:gS,yacute:mS,yen:vS,yuml:yS},wS={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var U2=xS;function xS(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var SS=CS;function CS(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var kS=_S;function _S(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var TS=kS,$S=U2,ES=NS;function NS(e){return TS(e)||$S(e)}var ts,IS=59,LS=RS;function RS(e){var t="&"+e+";",n;return ts=ts||document.createElement("i"),ts.innerHTML=t,n=ts.textContent,n.charCodeAt(n.length-1)===IS&&e!=="semi"||n===t?!1:n}var Ag=bS,Og=wS,PS=U2,MS=SS,W2=ES,FS=LS,AS=ZS,OS={}.hasOwnProperty,Ka=String.fromCharCode,DS=Function.prototype,Dg={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},zS=9,zg=10,BS=12,jS=32,Bg=38,US=59,WS=60,HS=61,VS=35,GS=88,YS=120,qS=65533,Ja="named",yf="hexadecimal",bf="decimal",wf={};wf[yf]=16;wf[bf]=10;var Ic={};Ic[Ja]=W2;Ic[bf]=PS;Ic[yf]=MS;var H2=1,V2=2,G2=3,Y2=4,q2=5,Xu=6,Z2=7,Qr={};Qr[H2]="Named character references must be terminated by a semicolon";Qr[V2]="Numeric character references must be terminated by a semicolon";Qr[G2]="Named character references cannot be empty";Qr[Y2]="Numeric character references cannot be empty";Qr[q2]="Named character references must be known";Qr[Xu]="Numeric character references cannot be disallowed";Qr[Z2]="Numeric character references cannot be outside the permissible Unicode range";function ZS(e,t){var n={},r,a;t||(t={});for(a in Dg)r=t[a],n[a]=r??Dg[a];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),QS(e,n)}function QS(e,t){var n=t.additional,r=t.nonTerminated,a=t.text,o=t.reference,i=t.warning,s=t.textContext,d=t.referenceContext,f=t.warningContext,m=t.position,b=t.indent||[],S=e.length,I=0,N=-1,C=m.column||1,L=m.line||1,w="",g=[],y,v,$,_,M,A,j,q,he,se,Be,at,Ve,De,Ge,U,Z,J,le;for(typeof n=="string"&&(n=n.charCodeAt(0)),U=fe(),q=i?Dt:DS,I--,S++;++I<S;)if(M===zg&&(C=b[N]||1),M=e.charCodeAt(I),M===Bg){if(j=e.charCodeAt(I+1),j===zS||j===zg||j===BS||j===jS||j===Bg||j===WS||j!==j||n&&j===n){w+=Ka(M),C++;continue}for(Ve=I+1,at=Ve,le=Ve,j===VS?(le=++at,j=e.charCodeAt(le),j===GS||j===YS?(De=yf,le=++at):De=bf):De=Ja,y="",Be="",_="",Ge=Ic[De],le--;++le<S&&(j=e.charCodeAt(le),!!Ge(j));)_+=Ka(j),De===Ja&&OS.call(Ag,_)&&(y=_,Be=Ag[_]);$=e.charCodeAt(le)===US,$&&(le++,v=De===Ja?FS(_):!1,v&&(y=_,Be=v)),J=1+le-Ve,!$&&!r||(_?De===Ja?($&&!Be?q(q2,1):(y!==_&&(le=at+y.length,J=1+le-at,$=!1),$||(he=y?H2:G2,t.attribute?(j=e.charCodeAt(le),j===HS?(q(he,J),Be=null):W2(j)?Be=null:q(he,J)):q(he,J))),A=Be):($||q(V2,J),A=parseInt(_,wf[De]),KS(A)?(q(Z2,J),A=Ka(qS)):A in Og?(q(Xu,J),A=Og[A]):(se="",XS(A)&&q(Xu,J),A>65535&&(A-=65536,se+=Ka(A>>>10|55296),A=56320|A&1023),A=se+Ka(A))):De!==Ja&&q(Y2,J)),A?(pe(),U=fe(),I=le-1,C+=le-Ve+1,g.push(A),Z=fe(),Z.offset++,o&&o.call(d,A,{start:U,end:Z},e.slice(Ve-1,le)),U=Z):(_=e.slice(Ve-1,le),w+=_,C+=_.length,I=le-1)}else M===10&&(L++,N++,C=0),M===M?(w+=Ka(M),C++):pe();return g.join("");function fe(){return{line:L,column:C,offset:I+(m.offset||0)}}function Dt(et,Ye){var ht=fe();ht.column+=Ye,ht.offset+=Ye,i.call(f,Qr[et],ht,et)}function pe(){w&&(g.push(w),a&&a.call(s,w,{start:U,end:fe()}),w="")}}function KS(e){return e>=55296&&e<=57343||e>1114111}function XS(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var Q2={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,i={},s={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function g(y){return y instanceof d?new d(y.type,g(y.content),y.alias):Array.isArray(y)?y.map(g):y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++o}),g.__id},clone:function g(y,v){v=v||{};var $,_;switch(s.util.type(y)){case"Object":if(_=s.util.objId(y),v[_])return v[_];$={},v[_]=$;for(var M in y)y.hasOwnProperty(M)&&($[M]=g(y[M],v));return $;case"Array":return _=s.util.objId(y),v[_]?v[_]:($=[],v[_]=$,y.forEach(function(A,j){$[j]=g(A,v)}),$);default:return y}},getLanguage:function(g){for(;g;){var y=a.exec(g.className);if(y)return y[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,y){g.className=g.className.replace(RegExp(a,"gi"),""),g.classList.add("language-"+y)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch($){var g=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec($.stack)||[])[1];if(g){var y=document.getElementsByTagName("script");for(var v in y)if(y[v].src==g)return y[v]}return null}},isActive:function(g,y,v){for(var $="no-"+y;g;){var _=g.classList;if(_.contains(y))return!0;if(_.contains($))return!1;g=g.parentElement}return!!v}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(g,y){var v=s.util.clone(s.languages[g]);for(var $ in y)v[$]=y[$];return v},insertBefore:function(g,y,v,$){$=$||s.languages;var _=$[g],M={};for(var A in _)if(_.hasOwnProperty(A)){if(A==y)for(var j in v)v.hasOwnProperty(j)&&(M[j]=v[j]);v.hasOwnProperty(A)||(M[A]=_[A])}var q=$[g];return $[g]=M,s.languages.DFS(s.languages,function(he,se){se===q&&he!=g&&(this[he]=M)}),M},DFS:function g(y,v,$,_){_=_||{};var M=s.util.objId;for(var A in y)if(y.hasOwnProperty(A)){v.call(y,A,y[A],$||A);var j=y[A],q=s.util.type(j);q==="Object"&&!_[M(j)]?(_[M(j)]=!0,g(j,v,null,_)):q==="Array"&&!_[M(j)]&&(_[M(j)]=!0,g(j,v,A,_))}}},plugins:{},highlightAll:function(g,y){s.highlightAllUnder(document,g,y)},highlightAllUnder:function(g,y,v){var $={callback:v,container:g,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",$),$.elements=Array.prototype.slice.apply($.container.querySelectorAll($.selector)),s.hooks.run("before-all-elements-highlight",$);for(var _=0,M;M=$.elements[_++];)s.highlightElement(M,y===!0,$.callback)},highlightElement:function(g,y,v){var $=s.util.getLanguage(g),_=s.languages[$];s.util.setLanguage(g,$);var M=g.parentElement;M&&M.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(M,$);var A=g.textContent,j={element:g,language:$,grammar:_,code:A};function q(se){j.highlightedCode=se,s.hooks.run("before-insert",j),j.element.innerHTML=j.highlightedCode,s.hooks.run("after-highlight",j),s.hooks.run("complete",j),v&&v.call(j.element)}if(s.hooks.run("before-sanity-check",j),M=j.element.parentElement,M&&M.nodeName.toLowerCase()==="pre"&&!M.hasAttribute("tabindex")&&M.setAttribute("tabindex","0"),!j.code){s.hooks.run("complete",j),v&&v.call(j.element);return}if(s.hooks.run("before-highlight",j),!j.grammar){q(s.util.encode(j.code));return}if(y&&r.Worker){var he=new Worker(s.filename);he.onmessage=function(se){q(se.data)},he.postMessage(JSON.stringify({language:j.language,code:j.code,immediateClose:!0}))}else q(s.highlight(j.code,j.grammar,j.language))},highlight:function(g,y,v){var $={code:g,grammar:y,language:v};if(s.hooks.run("before-tokenize",$),!$.grammar)throw new Error('The language "'+$.language+'" has no grammar.');return $.tokens=s.tokenize($.code,$.grammar),s.hooks.run("after-tokenize",$),d.stringify(s.util.encode($.tokens),$.language)},tokenize:function(g,y){var v=y.rest;if(v){for(var $ in v)y[$]=v[$];delete y.rest}var _=new b;return S(_,_.head,g),m(g,_,y,_.head,0),N(_)},hooks:{all:{},add:function(g,y){var v=s.hooks.all;v[g]=v[g]||[],v[g].push(y)},run:function(g,y){var v=s.hooks.all[g];if(!(!v||!v.length))for(var $=0,_;_=v[$++];)_(y)}},Token:d};r.Prism=s;function d(g,y,v,$){this.type=g,this.content=y,this.alias=v,this.length=($||"").length|0}d.stringify=function g(y,v){if(typeof y=="string")return y;if(Array.isArray(y)){var $="";return y.forEach(function(q){$+=g(q,v)}),$}var _={type:y.type,content:g(y.content,v),tag:"span",classes:["token",y.type],attributes:{},language:v},M=y.alias;M&&(Array.isArray(M)?Array.prototype.push.apply(_.classes,M):_.classes.push(M)),s.hooks.run("wrap",_);var A="";for(var j in _.attributes)A+=" "+j+'="'+(_.attributes[j]||"").replace(/"/g,"&quot;")+'"';return"<"+_.tag+' class="'+_.classes.join(" ")+'"'+A+">"+_.content+"</"+_.tag+">"};function f(g,y,v,$){g.lastIndex=y;var _=g.exec(v);if(_&&$&&_[1]){var M=_[1].length;_.index+=M,_[0]=_[0].slice(M)}return _}function m(g,y,v,$,_,M){for(var A in v)if(!(!v.hasOwnProperty(A)||!v[A])){var j=v[A];j=Array.isArray(j)?j:[j];for(var q=0;q<j.length;++q){if(M&&M.cause==A+","+q)return;var he=j[q],se=he.inside,Be=!!he.lookbehind,at=!!he.greedy,Ve=he.alias;if(at&&!he.pattern.global){var De=he.pattern.toString().match(/[imsuy]*$/)[0];he.pattern=RegExp(he.pattern.source,De+"g")}for(var Ge=he.pattern||he,U=$.next,Z=_;U!==y.tail&&!(M&&Z>=M.reach);Z+=U.value.length,U=U.next){var J=U.value;if(y.length>g.length)return;if(!(J instanceof d)){var le=1,fe;if(at){if(fe=f(Ge,Z,g,Be),!fe||fe.index>=g.length)break;var Ye=fe.index,Dt=fe.index+fe[0].length,pe=Z;for(pe+=U.value.length;Ye>=pe;)U=U.next,pe+=U.value.length;if(pe-=U.value.length,Z=pe,U.value instanceof d)continue;for(var et=U;et!==y.tail&&(pe<Dt||typeof et.value=="string");et=et.next)le++,pe+=et.value.length;le--,J=g.slice(Z,pe),fe.index-=Z}else if(fe=f(Ge,0,J,Be),!fe)continue;var Ye=fe.index,ht=fe[0],Pt=J.slice(0,Ye),Xr=J.slice(Ye+ht.length),Jr=Z+J.length;M&&Jr>M.reach&&(M.reach=Jr);var Xn=U.prev;Pt&&(Xn=S(y,Xn,Pt),Z+=Pt.length),I(y,Xn,le);var jl=new d(A,se?s.tokenize(ht,se):ht,Ve,ht);if(U=S(y,Xn,jl),Xr&&S(y,U,Xr),le>1){var ea={cause:A+","+q,reach:Jr};m(g,y,v,U.prev,Z,ea),M&&ea.reach>M.reach&&(M.reach=ea.reach)}}}}}}function b(){var g={value:null,prev:null,next:null},y={value:null,prev:g,next:null};g.next=y,this.head=g,this.tail=y,this.length=0}function S(g,y,v){var $=y.next,_={value:v,prev:y,next:$};return y.next=_,$.prev=_,g.length++,_}function I(g,y,v){for(var $=y.next,_=0;_<v&&$!==g.tail;_++)$=$.next;y.next=$,$.prev=y,g.length-=_}function N(g){for(var y=[],v=g.head.next;v!==g.tail;)y.push(v.value),v=v.next;return y}if(!r.document)return r.addEventListener&&(s.disableWorkerMessageHandler||r.addEventListener("message",function(g){var y=JSON.parse(g.data),v=y.language,$=y.code,_=y.immediateClose;r.postMessage(s.highlight($,s.languages[v],v)),_&&r.close()},!1)),s;var C=s.util.currentScript();C&&(s.filename=C.src,C.hasAttribute("data-manual")&&(s.manual=!0));function L(){s.manual||s.highlightAll()}if(!s.manual){var w=document.readyState;w==="loading"||w==="interactive"&&C&&C.defer?document.addEventListener("DOMContentLoaded",L):window.requestAnimationFrame?window.requestAnimationFrame(L):window.setTimeout(L,16)}return s}(t);e.exports&&(e.exports=n),typeof Oo<"u"&&(Oo.Prism=n)})(Q2);var JS=Q2.exports,eC=xf;xf.displayName="markup";xf.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function xf(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,r){var a={};a["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[r]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};o["language-"+r]={pattern:/[\s\S]+/,inside:e.languages[r]};var i={};i[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:o},e.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var K2=Sf;Sf.displayName="css";Sf.aliases=[];function Sf(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var r=t.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(e)}const tC=Gr(K2);var nC=Cf;Cf.displayName="clike";Cf.aliases=[];function Cf(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var rC=kf;kf.displayName="javascript";kf.aliases=["js"];function kf(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var wo=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof Oo=="object"?Oo:{},aC=wC();wo.Prism={manual:!0,disableWorkerMessageHandler:!0};var lC=w9,oC=AS,X2=JS,iC=eC,sC=K2,cC=nC,dC=rC;aC();var _f={}.hasOwnProperty;function J2(){}J2.prototype=X2;var ut=new J2,uC=ut;ut.highlight=fC;ut.register=gi;ut.alias=hC;ut.registered=pC;ut.listLanguages=gC;gi(iC);gi(sC);gi(cC);gi(dC);ut.util.encode=yC;ut.Token.stringify=mC;function gi(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");ut.languages[e.displayName]===void 0&&e(ut)}function hC(e,t){var n=ut.languages,r=e,a,o,i,s;t&&(r={},r[e]=t);for(a in r)for(o=r[a],o=typeof o=="string"?[o]:o,i=o.length,s=-1;++s<i;)n[o[s]]=n[a]}function fC(e,t){var n=X2.highlight,r;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(ut.util.type(t)==="Object")r=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(_f.call(ut.languages,t))r=ut.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,r,t)}function pC(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return _f.call(ut.languages,e)}function gC(){var e=ut.languages,t=[],n;for(n in e)_f.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function mC(e,t,n){var r;return typeof e=="string"?{type:"text",value:e}:ut.util.type(e)==="Array"?vC(e,t):(r={type:e.type,content:ut.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(r.classes=r.classes.concat(e.alias)),ut.hooks.run("wrap",r),lC(r.tag+"."+r.classes.join("."),bC(r.attributes),r.content))}function vC(e,t){for(var n=[],r=e.length,a=-1,o;++a<r;)o=e[a],o!==""&&o!==null&&o!==void 0&&n.push(o);for(a=-1,r=n.length;++a<r;)o=n[a],n[a]=ut.Token.stringify(o,t,n);return n}function yC(e){return e}function bC(e){var t;for(t in e)e[t]=oC(e[t]);return e}function wC(){var e="Prism"in wo,t=e?wo.Prism:void 0;return n;function n(){e?wo.Prism=t:delete wo.Prism,e=void 0,t=void 0}}const Tf=Gr(uC);var $f=nx(Tf,{});$f.registerLanguage=function(e,t){return Tf.register(t)};$f.alias=function(e,t){return Tf.alias(e,t)};const mi=$f;var xC=Ef;Ef.displayName="bash";Ef.aliases=["shell"];function Ef(e){(function(t){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:r,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=t.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=a.variable[1].inside,s=0;s<o.length;s++)i[o[s]]=t.languages.bash[o[s]];t.languages.shell=t.languages.bash})(e)}const SC=Gr(xC);var CC=Nf;Nf.displayName="jsx";Nf.aliases=[];function Nf(e){(function(t){var n=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,o=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function i(f,m){return f=f.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return o}),RegExp(f,m)}o=i(o).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:i(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:i(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var s=function(f){return f?typeof f=="string"?f:typeof f.content=="string"?f.content:f.content.map(s).join(""):""},d=function(f){for(var m=[],b=0;b<f.length;b++){var S=f[b],I=!1;if(typeof S!="string"&&(S.type==="tag"&&S.content[0]&&S.content[0].type==="tag"?S.content[0].content[0].content==="</"?m.length>0&&m[m.length-1].tagName===s(S.content[0].content[1])&&m.pop():S.content[S.content.length-1].content==="/>"||m.push({tagName:s(S.content[0].content[1]),openedBraces:0}):m.length>0&&S.type==="punctuation"&&S.content==="{"?m[m.length-1].openedBraces++:m.length>0&&m[m.length-1].openedBraces>0&&S.type==="punctuation"&&S.content==="}"?m[m.length-1].openedBraces--:I=!0),(I||typeof S=="string")&&m.length>0&&m[m.length-1].openedBraces===0){var N=s(S);b<f.length-1&&(typeof f[b+1]=="string"||f[b+1].type==="plain-text")&&(N+=s(f[b+1]),f.splice(b+1,1)),b>0&&(typeof f[b-1]=="string"||f[b-1].type==="plain-text")&&(N=s(f[b-1])+N,f.splice(b-1,1),b--),f[b]=new t.Token("plain-text",N,null,N)}S.content&&typeof S.content!="string"&&d(S.content)}};t.hooks.add("after-tokenize",function(f){f.language!=="jsx"&&f.language!=="tsx"||d(f.tokens)})})(e)}const kC=Gr(CC);var _C=If;If.displayName="scss";If.aliases=[];function If(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const TC=Gr(_C);function ey(e){return typeof e=="string"}function $C(e){return Array.isArray(e)}function EC(e){return e===void 0}function NC(e){return e===null}function Tt(e){return!(EC(e)||NC(e))}function IC(e){return!Tt(e)}function LC(...e){throw new Error(e.join(""))}function RC(){return Intl.DateTimeFormat().resolvedOptions().locale}RC();const vi=(e,t,n=1)=>{const r=t<e?-Math.abs(n):n;return Array(1+Math.floor(Math.abs((t-e)/n))).fill(e).map((a,o)=>a+o*r)};function ty(e){return IC(e)?[]:ey(e)?e.length?e.split(/,\s*|\s+/):[]:$C(e)?e:[e]}function PC(e){return new Promise(t=>setTimeout(t,e))}mi.registerLanguage("jsx",kC);mi.registerLanguage("css",tC);mi.registerLanguage("scss",TC);mi.registerLanguage("bash",SC);const Ke=({code:e,language:t="jsx",caption:n,expand:r=!1,fixed:a=r,className:o=""})=>{const[i,s]=B.useState(!1),[d,f]=B.useState(r),m=()=>{navigator.clipboard.writeText(e),s(!0),PC(2e3).then(()=>s(!1))};return h("div",{className:`codeblock ${o} ${d?"expanded":""} ${a?"fixed-open":"expandable"}`,children:[!!n&&l("h4",{className:"caption",children:n}),h("div",{className:"controls",children:[l("div",{className:"expand",onClick:()=>f(!d),children:d?"Compress":"Expand"}),l("div",{className:`clipboard ${i?"copied":""}`,onClick:m,children:i?"Copied":"Copy"})]}),l(mi,{language:t,showLineNumbers:!0,useInlineStyles:!1,customStyle:{},children:MC(e)})]})},MC=e=>e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/\/\*\s*REAL\s*\*\/.*?\/\*\s*UNREAL\s*\*\//g,"").replaceAll(/{\/\*\s*(UN?)PRETEND\s*\*\/}/g,"").replace(/\n+$/,""),FC=`// define your brand hue and color name
$purple-hue:   295;
$brand-hue:    $purple-hue;
$brand-color:  'purple';

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,AC=`// define your own brand colors...
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
`,OC=`// define your own brand colors and greyscale hues...
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
`,DC=`// define the colors that you want to use...
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
 */function Re(){return Re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Re.apply(this,arguments)}var ct;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ct||(ct={}));const jg="popstate";function zC(e){e===void 0&&(e={});function t(r,a){let{pathname:o,search:i,hash:s}=r.location;return ni("",{pathname:o,search:i,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:Ia(a)}return jC(t,n,null,e)}function Ce(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ll(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function BC(){return Math.random().toString(36).substr(2,8)}function Ug(e,t){return{usr:e.state,key:e.key,idx:t}}function ni(e,t,n,r){return n===void 0&&(n=null),Re({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?yr(t):t,{state:n,key:t&&t.key||r||BC()})}function Ia(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function yr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function jC(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:o=!1}=r,i=a.history,s=ct.Pop,d=null,f=m();f==null&&(f=0,i.replaceState(Re({},i.state,{idx:f}),""));function m(){return(i.state||{idx:null}).idx}function b(){s=ct.Pop;let L=m(),w=L==null?null:L-f;f=L,d&&d({action:s,location:C.location,delta:w})}function S(L,w){s=ct.Push;let g=ni(C.location,L,w);n&&n(g,L),f=m()+1;let y=Ug(g,f),v=C.createHref(g);try{i.pushState(y,"",v)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;a.location.assign(v)}o&&d&&d({action:s,location:C.location,delta:1})}function I(L,w){s=ct.Replace;let g=ni(C.location,L,w);n&&n(g,L),f=m();let y=Ug(g,f),v=C.createHref(g);i.replaceState(y,"",v),o&&d&&d({action:s,location:C.location,delta:0})}function N(L){let w=a.location.origin!=="null"?a.location.origin:a.location.href,g=typeof L=="string"?L:Ia(L);return Ce(w,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,w)}let C={get action(){return s},get location(){return e(a,i)},listen(L){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(jg,b),d=L,()=>{a.removeEventListener(jg,b),d=null}},createHref(L){return t(a,L)},createURL:N,encodeLocation(L){let w=N(L);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:S,replace:I,go(L){return i.go(L)}};return C}var gt;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(gt||(gt={}));const UC=new Set(["lazy","caseSensitive","path","id","index","children"]);function WC(e){return e.index===!0}function Ju(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((a,o)=>{let i=[...n,o],s=typeof a.id=="string"?a.id:i.join("-");if(Ce(a.index!==!0||!a.children,"Cannot specify children on an index route"),Ce(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),WC(a)){let d=Re({},a,t(a),{id:s});return r[s]=d,d}else{let d=Re({},a,t(a),{id:s,children:void 0});return r[s]=d,a.children&&(d.children=Ju(a.children,t,i,r)),d}})}function pl(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?yr(t):t,a=Ol(r.pathname||"/",n);if(a==null)return null;let o=ny(e);HC(o);let i=null;for(let s=0;i==null&&s<o.length;++s)i=JC(o[s],nk(a));return i}function ny(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(o,i,s)=>{let d={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};d.relativePath.startsWith("/")&&(Ce(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let f=dr([r,d.relativePath]),m=n.concat(d);o.children&&o.children.length>0&&(Ce(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),ny(o.children,t,m,f)),!(o.path==null&&!o.index)&&t.push({path:f,score:KC(f,o.index),routesMeta:m})};return e.forEach((o,i)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))a(o,i);else for(let d of ry(o.path))a(o,i,d)}),t}function ry(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let i=ry(r.join("/")),s=[];return s.push(...i.map(d=>d===""?o:[o,d].join("/"))),a&&s.push(...i),s.map(d=>e.startsWith("/")&&d===""?"/":d)}function HC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:XC(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const VC=/^:\w+$/,GC=3,YC=2,qC=1,ZC=10,QC=-2,Wg=e=>e==="*";function KC(e,t){let n=e.split("/"),r=n.length;return n.some(Wg)&&(r+=QC),t&&(r+=YC),n.filter(a=>!Wg(a)).reduce((a,o)=>a+(VC.test(o)?GC:o===""?qC:ZC),r)}function XC(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function JC(e,t){let{routesMeta:n}=e,r={},a="/",o=[];for(let i=0;i<n.length;++i){let s=n[i],d=i===n.length-1,f=a==="/"?t:t.slice(a.length)||"/",m=ek({path:s.relativePath,caseSensitive:s.caseSensitive,end:d},f);if(!m)return null;Object.assign(r,m.params);let b=s.route;o.push({params:r,pathname:dr([a,m.pathname]),pathnameBase:ok(dr([a,m.pathnameBase])),route:b}),m.pathnameBase!=="/"&&(a=dr([a,m.pathnameBase]))}return o}function ek(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=tk(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((f,m,b)=>{if(m==="*"){let S=s[b]||"";i=o.slice(0,o.length-S.length).replace(/(.)\/+$/,"$1")}return f[m]=rk(s[b]||"",m),f},{}),pathname:o,pathnameBase:i,pattern:e}}function tk(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ll(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function nk(e){try{return decodeURI(e)}catch(t){return Ll(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function rk(e,t){try{return decodeURIComponent(e)}catch(n){return Ll(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ol(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ak(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?yr(e):e;return{pathname:n?n.startsWith("/")?n:lk(n,t):t,search:ik(r),hash:sk(a)}}function lk(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Ud(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Lc(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Lf(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=yr(e):(a=Re({},e),Ce(!a.pathname||!a.pathname.includes("?"),Ud("?","pathname","search",a)),Ce(!a.pathname||!a.pathname.includes("#"),Ud("#","pathname","hash",a)),Ce(!a.search||!a.search.includes("#"),Ud("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,s;if(r||i==null)s=n;else{let b=t.length-1;if(i.startsWith("..")){let S=i.split("/");for(;S[0]==="..";)S.shift(),b-=1;a.pathname=S.join("/")}s=b>=0?t[b]:"/"}let d=ak(a,s),f=i&&i!=="/"&&i.endsWith("/"),m=(o||i===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(f||m)&&(d.pathname+="/"),d}const dr=e=>e.join("/").replace(/\/\/+/g,"/"),ok=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ik=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,sk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Rf{constructor(t,n,r,a){a===void 0&&(a=!1),this.status=t,this.statusText=n||"",this.internal=a,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function ay(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ly=["post","put","patch","delete"],ck=new Set(ly),dk=["get",...ly],uk=new Set(dk),hk=new Set([301,302,303,307,308]),fk=new Set([307,308]),Wd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},pk={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Hg={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},oy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gk=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function mk(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;Ce(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let F=e.detectErrorBoundary;a=O=>({hasErrorBoundary:F(O)})}else a=gk;let o={},i=Ju(e.routes,a,void 0,o),s,d=e.basename||"/",f=Re({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),m=null,b=new Set,S=null,I=null,N=null,C=e.hydrationData!=null,L=pl(i,e.history.location,d),w=null;if(L==null){let F=Mn(404,{pathname:e.history.location.pathname}),{matches:O,route:H}=Kg(i);L=O,w={[H.id]:F}}let g=!L.some(F=>F.route.lazy)&&(!L.some(F=>F.route.loader)||e.hydrationData!=null),y,v={historyAction:e.history.action,location:e.history.location,matches:L,initialized:g,navigation:Wd,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||w,fetchers:new Map,blockers:new Map},$=ct.Pop,_=!1,M,A=!1,j=!1,q=[],he=[],se=new Map,Be=0,at=-1,Ve=new Map,De=new Set,Ge=new Map,U=new Map,Z=new Map,J=!1;function le(){return m=e.history.listen(F=>{let{action:O,location:H,delta:Q}=F;if(J){J=!1;return}Ll(Z.size===0||Q!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ie=ql({currentLocation:v.location,nextLocation:H,historyAction:O});if(ie&&Q!=null){J=!0,e.history.go(Q*-1),ra(ie,{state:"blocked",location:H,proceed(){ra(ie,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),e.history.go(Q)},reset(){br(ie),pe({blockers:new Map(y.state.blockers)})}});return}return Pt(O,H)}),v.initialized||Pt(ct.Pop,v.location),y}function fe(){m&&m(),b.clear(),M&&M.abort(),v.fetchers.forEach((F,O)=>Hl(O)),v.blockers.forEach((F,O)=>br(O))}function Dt(F){return b.add(F),()=>b.delete(F)}function pe(F){v=Re({},v,F),b.forEach(O=>O(v))}function et(F,O){var H,Q;let ie=v.actionData!=null&&v.navigation.formMethod!=null&&lr(v.navigation.formMethod)&&v.navigation.state==="loading"&&((H=F.state)==null?void 0:H._isRedirect)!==!0,ce;O.actionData?Object.keys(O.actionData).length>0?ce=O.actionData:ce=null:ie?ce=v.actionData:ce=null;let de=O.loaderData?Qg(v.loaderData,O.loaderData,O.matches||[],O.errors):v.loaderData;for(let[ae]of Z)br(ae);let ue=_===!0||v.navigation.formMethod!=null&&lr(v.navigation.formMethod)&&((Q=F.state)==null?void 0:Q._isRedirect)!==!0;s&&(i=s,s=void 0),pe(Re({},O,{actionData:ce,loaderData:de,historyAction:$,location:F,initialized:!0,navigation:Wd,revalidation:"idle",restoreScrollPosition:Ti(F,O.matches||v.matches),preventScrollReset:ue,blockers:new Map(v.blockers)})),A||$===ct.Pop||($===ct.Push?e.history.push(F,F.state):$===ct.Replace&&e.history.replace(F,F.state)),$=ct.Pop,_=!1,A=!1,j=!1,q=[],he=[]}async function Ye(F,O){if(typeof F=="number"){e.history.go(F);return}let H=eh(v.location,v.matches,d,f.v7_prependBasename,F,O==null?void 0:O.fromRouteId,O==null?void 0:O.relative),{path:Q,submission:ie,error:ce}=Vg(f.v7_normalizeFormMethod,!1,H,O),de=v.location,ue=ni(v.location,Q,O&&O.state);ue=Re({},ue,e.history.encodeLocation(ue));let ae=O&&O.replace!=null?O.replace:void 0,Te=ct.Push;ae===!0?Te=ct.Replace:ae===!1||ie!=null&&lr(ie.formMethod)&&ie.formAction===v.location.pathname+v.location.search&&(Te=ct.Replace);let Pe=O&&"preventScrollReset"in O?O.preventScrollReset===!0:void 0,yt=ql({currentLocation:de,nextLocation:ue,historyAction:Te});if(yt){ra(yt,{state:"blocked",location:ue,proceed(){ra(yt,{state:"proceeding",proceed:void 0,reset:void 0,location:ue}),Ye(F,O)},reset(){br(yt),pe({blockers:new Map(v.blockers)})}});return}return await Pt(Te,ue,{submission:ie,pendingError:ce,preventScrollReset:Pe,replace:O&&O.replace})}function ht(){if(Wl(),pe({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){Pt(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}Pt($||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function Pt(F,O,H){M&&M.abort(),M=null,$=F,A=(H&&H.startUninterruptedRevalidation)===!0,_i(v.location,v.matches),_=(H&&H.preventScrollReset)===!0;let Q=s||i,ie=H&&H.overrideNavigation,ce=pl(Q,O,d);if(!ce){let it=Mn(404,{pathname:O.pathname}),{matches:ft,route:vn}=Kg(Q);Aa(),et(O,{matches:ft,loaderData:{},errors:{[vn.id]:it}});return}if(v.initialized&&!j&&xk(v.location,O)&&!(H&&H.submission&&lr(H.submission.formMethod))){et(O,{matches:ce});return}M=new AbortController;let de=fo(e.history,O,M.signal,H&&H.submission),ue,ae;if(H&&H.pendingError)ae={[gl(ce).route.id]:H.pendingError};else if(H&&H.submission&&lr(H.submission.formMethod)){let it=await Xr(de,O,H.submission,ce,{replace:H.replace});if(it.shortCircuited)return;ue=it.pendingActionData,ae=it.pendingActionError,ie=Re({state:"loading",location:O},H.submission),de=new Request(de.url,{signal:de.signal})}let{shortCircuited:Te,loaderData:Pe,errors:yt}=await Jr(de,O,ce,ie,H&&H.submission,H&&H.fetcherSubmission,H&&H.replace,ue,ae);Te||(M=null,et(O,Re({matches:ce},ue?{actionData:ue}:{},{loaderData:Pe,errors:yt})))}async function Xr(F,O,H,Q,ie){Wl();let ce=Re({state:"submitting",location:O},H);pe({navigation:ce});let de,ue=th(Q,O);if(!ue.route.action&&!ue.route.lazy)de={type:gt.error,error:Mn(405,{method:F.method,pathname:O.pathname,routeId:ue.route.id})};else if(de=await ho("action",F,ue,Q,o,a,d),F.signal.aborted)return{shortCircuited:!0};if(Sl(de)){let ae;return ie&&ie.replace!=null?ae=ie.replace:ae=de.location===v.location.pathname+v.location.search,await ta(v,de,{submission:H,replace:ae}),{shortCircuited:!0}}if(Mo(de)){let ae=gl(Q,ue.route.id);return(ie&&ie.replace)!==!0&&($=ct.Push),{pendingActionData:{},pendingActionError:{[ae.route.id]:de.error}}}if(ba(de))throw Mn(400,{type:"defer-action"});return{pendingActionData:{[ue.route.id]:de.data}}}async function Jr(F,O,H,Q,ie,ce,de,ue,ae){let Te=Q;Te||(Te=Re({state:"loading",location:O,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ie));let Pe=ie||ce?ie||ce:Te.formMethod&&Te.formAction&&Te.formData&&Te.formEncType?{formMethod:Te.formMethod,formAction:Te.formAction,formData:Te.formData,formEncType:Te.formEncType}:void 0,yt=s||i,[it,ft]=Gg(e.history,v,H,Pe,O,j,q,he,Ge,yt,d,ue,ae);if(Aa(ze=>!(H&&H.some(Yt=>Yt.route.id===ze))||it&&it.some(Yt=>Yt.route.id===ze)),it.length===0&&ft.length===0){let ze=Gl();return et(O,Re({matches:H,loaderData:{},errors:ae||null},ue?{actionData:ue}:{},ze?{fetchers:new Map(v.fetchers)}:{})),{shortCircuited:!0}}if(!A){ft.forEach(Yt=>{let er=v.fetchers.get(Yt.key),pt={state:"loading",data:er&&er.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(Yt.key,pt)});let ze=ue||v.actionData;pe(Re({navigation:Te},ze?Object.keys(ze).length===0?{actionData:null}:{actionData:ze}:{},ft.length>0?{fetchers:new Map(v.fetchers)}:{}))}at=++Be,ft.forEach(ze=>{ze.controller&&se.set(ze.key,ze.controller)});let vn=()=>ft.forEach(ze=>Jn(ze.key));M&&M.signal.addEventListener("abort",vn);let{results:aa,loaderResults:Zl,fetcherResults:Oa}=await Si(v.matches,H,it,ft,F);if(F.signal.aborted)return{shortCircuited:!0};M&&M.signal.removeEventListener("abort",vn),ft.forEach(ze=>se.delete(ze.key));let $n=Xg(aa);if($n)return await ta(v,$n,{replace:de}),{shortCircuited:!0};let{loaderData:la,errors:Da}=Zg(v,H,it,Zl,ae,ft,Oa,U);U.forEach((ze,Yt)=>{ze.subscribe(er=>{(er||ze.done)&&U.delete(Yt)})});let Ql=Gl(),Kl=Yl(at),za=Ql||Kl||ft.length>0;return Re({loaderData:la,errors:Da},za?{fetchers:new Map(v.fetchers)}:{})}function Xn(F){return v.fetchers.get(F)||pk}function jl(F,O,H,Q){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");se.has(F)&&Jn(F);let ie=s||i,ce=eh(v.location,v.matches,d,f.v7_prependBasename,H,O,Q==null?void 0:Q.relative),de=pl(ie,ce,d);if(!de){na(F,O,Mn(404,{pathname:ce}));return}let{path:ue,submission:ae}=Vg(f.v7_normalizeFormMethod,!0,ce,Q),Te=th(de,ue);if(_=(Q&&Q.preventScrollReset)===!0,ae&&lr(ae.formMethod)){ea(F,O,ue,Te,de,ae);return}Ge.set(F,{routeId:O,path:ue}),Ul(F,O,ue,Te,de,ae)}async function ea(F,O,H,Q,ie,ce){if(Wl(),Ge.delete(F),!Q.route.action&&!Q.route.lazy){let pt=Mn(405,{method:ce.formMethod,pathname:H,routeId:O});na(F,O,pt);return}let de=v.fetchers.get(F),ue=Re({state:"submitting"},ce,{data:de&&de.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(F,ue),pe({fetchers:new Map(v.fetchers)});let ae=new AbortController,Te=fo(e.history,H,ae.signal,ce);se.set(F,ae);let Pe=await ho("action",Te,Q,ie,o,a,d);if(Te.signal.aborted){se.get(F)===ae&&se.delete(F);return}if(Sl(Pe)){se.delete(F),De.add(F);let pt=Re({state:"loading"},ce,{data:void 0," _hasFetcherDoneAnything ":!0});return v.fetchers.set(F,pt),pe({fetchers:new Map(v.fetchers)}),ta(v,Pe,{submission:ce,isFetchActionRedirect:!0})}if(Mo(Pe)){na(F,O,Pe.error);return}if(ba(Pe))throw Mn(400,{type:"defer-action"});let yt=v.navigation.location||v.location,it=fo(e.history,yt,ae.signal),ft=s||i,vn=v.navigation.state!=="idle"?pl(ft,v.navigation.location,d):v.matches;Ce(vn,"Didn't find any matches after fetcher action");let aa=++Be;Ve.set(F,aa);let Zl=Re({state:"loading",data:Pe.data},ce,{" _hasFetcherDoneAnything ":!0});v.fetchers.set(F,Zl);let[Oa,$n]=Gg(e.history,v,vn,ce,yt,j,q,he,Ge,ft,d,{[Q.route.id]:Pe.data},void 0);$n.filter(pt=>pt.key!==F).forEach(pt=>{let Xl=pt.key,$i=v.fetchers.get(Xl),Ei={state:"loading",data:$i&&$i.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(Xl,Ei),pt.controller&&se.set(Xl,pt.controller)}),pe({fetchers:new Map(v.fetchers)});let la=()=>$n.forEach(pt=>Jn(pt.key));ae.signal.addEventListener("abort",la);let{results:Da,loaderResults:Ql,fetcherResults:Kl}=await Si(v.matches,vn,Oa,$n,it);if(ae.signal.aborted)return;ae.signal.removeEventListener("abort",la),Ve.delete(F),se.delete(F),$n.forEach(pt=>se.delete(pt.key));let za=Xg(Da);if(za)return ta(v,za);let{loaderData:ze,errors:Yt}=Zg(v,v.matches,Oa,Ql,void 0,$n,Kl,U);if(v.fetchers.has(F)){let pt={state:"idle",data:Pe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(F,pt)}let er=Yl(aa);v.navigation.state==="loading"&&aa>at?(Ce($,"Expected pending action"),M&&M.abort(),et(v.navigation.location,{matches:vn,loaderData:ze,errors:Yt,fetchers:new Map(v.fetchers)})):(pe(Re({errors:Yt,loaderData:Qg(v.loaderData,ze,vn,Yt)},er||$n.length>0?{fetchers:new Map(v.fetchers)}:{})),j=!1)}async function Ul(F,O,H,Q,ie,ce){let de=v.fetchers.get(F),ue=Re({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ce,{data:de&&de.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(F,ue),pe({fetchers:new Map(v.fetchers)});let ae=new AbortController,Te=fo(e.history,H,ae.signal);se.set(F,ae);let Pe=await ho("loader",Te,Q,ie,o,a,d);if(ba(Pe)&&(Pe=await dy(Pe,Te.signal,!0)||Pe),se.get(F)===ae&&se.delete(F),Te.signal.aborted)return;if(Sl(Pe)){De.add(F),await ta(v,Pe);return}if(Mo(Pe)){let it=gl(v.matches,O);v.fetchers.delete(F),pe({fetchers:new Map(v.fetchers),errors:{[it.route.id]:Pe.error}});return}Ce(!ba(Pe),"Unhandled fetcher deferred data");let yt={state:"idle",data:Pe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(F,yt),pe({fetchers:new Map(v.fetchers)})}async function ta(F,O,H){let{submission:Q,replace:ie,isFetchActionRedirect:ce}=H===void 0?{}:H;O.revalidate&&(j=!0);let de=ni(F.location,O.location,Re({_isRedirect:!0},ce?{_isFetchActionRedirect:!0}:{}));if(Ce(de,"Expected a location on the redirect navigation"),oy.test(O.location)&&n){let it=e.history.createURL(O.location),ft=Ol(it.pathname,d)==null;if(t.location.origin!==it.origin||ft){ie?t.location.replace(O.location):t.location.assign(O.location);return}}M=null;let ue=ie===!0?ct.Replace:ct.Push,{formMethod:ae,formAction:Te,formEncType:Pe,formData:yt}=F.navigation;!Q&&ae&&Te&&yt&&Pe&&(Q={formMethod:ae,formAction:Te,formEncType:Pe,formData:yt}),fk.has(O.status)&&Q&&lr(Q.formMethod)?await Pt(ue,de,{submission:Re({},Q,{formAction:O.location}),preventScrollReset:_}):ce?await Pt(ue,de,{overrideNavigation:{state:"loading",location:de,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:Q,preventScrollReset:_}):await Pt(ue,de,{overrideNavigation:{state:"loading",location:de,formMethod:Q?Q.formMethod:void 0,formAction:Q?Q.formAction:void 0,formEncType:Q?Q.formEncType:void 0,formData:Q?Q.formData:void 0},preventScrollReset:_})}async function Si(F,O,H,Q,ie){let ce=await Promise.all([...H.map(ae=>ho("loader",ie,ae,O,o,a,d)),...Q.map(ae=>ae.matches&&ae.match&&ae.controller?ho("loader",fo(e.history,ae.path,ae.controller.signal),ae.match,ae.matches,o,a,d):{type:gt.error,error:Mn(404,{pathname:ae.path})})]),de=ce.slice(0,H.length),ue=ce.slice(H.length);return await Promise.all([Jg(F,H,de,de.map(()=>ie.signal),!1,v.loaderData),Jg(F,Q.map(ae=>ae.match),ue,Q.map(ae=>ae.controller?ae.controller.signal:null),!0)]),{results:ce,loaderResults:de,fetcherResults:ue}}function Wl(){j=!0,q.push(...Aa()),Ge.forEach((F,O)=>{se.has(O)&&(he.push(O),Jn(O))})}function na(F,O,H){let Q=gl(v.matches,O);Hl(F),pe({errors:{[Q.route.id]:H},fetchers:new Map(v.fetchers)})}function Hl(F){let O=v.fetchers.get(F);se.has(F)&&!(O&&O.state==="loading"&&Ve.has(F))&&Jn(F),Ge.delete(F),Ve.delete(F),De.delete(F),v.fetchers.delete(F)}function Jn(F){let O=se.get(F);Ce(O,"Expected fetch controller: "+F),O.abort(),se.delete(F)}function Vl(F){for(let O of F){let Q={state:"idle",data:Xn(O).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(O,Q)}}function Gl(){let F=[],O=!1;for(let H of De){let Q=v.fetchers.get(H);Ce(Q,"Expected fetcher: "+H),Q.state==="loading"&&(De.delete(H),F.push(H),O=!0)}return Vl(F),O}function Yl(F){let O=[];for(let[H,Q]of Ve)if(Q<F){let ie=v.fetchers.get(H);Ce(ie,"Expected fetcher: "+H),ie.state==="loading"&&(Jn(H),Ve.delete(H),O.push(H))}return Vl(O),O.length>0}function Ci(F,O){let H=v.blockers.get(F)||Hg;return Z.get(F)!==O&&Z.set(F,O),H}function br(F){v.blockers.delete(F),Z.delete(F)}function ra(F,O){let H=v.blockers.get(F)||Hg;Ce(H.state==="unblocked"&&O.state==="blocked"||H.state==="blocked"&&O.state==="blocked"||H.state==="blocked"&&O.state==="proceeding"||H.state==="blocked"&&O.state==="unblocked"||H.state==="proceeding"&&O.state==="unblocked","Invalid blocker state transition: "+H.state+" -> "+O.state),v.blockers.set(F,O),pe({blockers:new Map(v.blockers)})}function ql(F){let{currentLocation:O,nextLocation:H,historyAction:Q}=F;if(Z.size===0)return;Z.size>1&&Ll(!1,"A router only supports one blocker at a time");let ie=Array.from(Z.entries()),[ce,de]=ie[ie.length-1],ue=v.blockers.get(ce);if(!(ue&&ue.state==="proceeding")&&de({currentLocation:O,nextLocation:H,historyAction:Q}))return ce}function Aa(F){let O=[];return U.forEach((H,Q)=>{(!F||F(Q))&&(H.cancel(),O.push(Q),U.delete(Q))}),O}function ki(F,O,H){if(S=F,N=O,I=H||(Q=>Q.key),!C&&v.navigation===Wd){C=!0;let Q=Ti(v.location,v.matches);Q!=null&&pe({restoreScrollPosition:Q})}return()=>{S=null,N=null,I=null}}function _i(F,O){if(S&&I&&N){let H=O.map(ie=>em(ie,v.loaderData)),Q=I(F,H)||F.key;S[Q]=N()}}function Ti(F,O){if(S&&I&&N){let H=O.map(ce=>em(ce,v.loaderData)),Q=I(F,H)||F.key,ie=S[Q];if(typeof ie=="number")return ie}return null}function jc(F){o={},s=Ju(F,a,void 0,o)}return y={get basename(){return d},get state(){return v},get routes(){return i},initialize:le,subscribe:Dt,enableScrollRestoration:ki,navigate:Ye,fetch:jl,revalidate:ht,createHref:F=>e.history.createHref(F),encodeLocation:F=>e.history.encodeLocation(F),getFetcher:Xn,deleteFetcher:Hl,dispose:fe,getBlocker:Ci,deleteBlocker:br,_internalFetchControllers:se,_internalActiveDeferreds:U,_internalSetRoutes:jc},y}function vk(e){return e!=null&&"formData"in e}function eh(e,t,n,r,a,o,i){let s,d;if(o!=null&&i!=="path"){s=[];for(let m of t)if(s.push(m),m.route.id===o){d=m;break}}else s=t,d=t[t.length-1];let f=Lf(a||".",Lc(s).map(m=>m.pathnameBase),Ol(e.pathname,n)||e.pathname,i==="path");return a==null&&(f.search=e.search,f.hash=e.hash),(a==null||a===""||a===".")&&d&&d.route.index&&!Pf(f.search)&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(f.pathname=f.pathname==="/"?n:dr([n,f.pathname])),Ia(f)}function Vg(e,t,n,r){if(!r||!vk(r))return{path:n};if(r.formMethod&&!kk(r.formMethod))return{path:n,error:Mn(405,{method:r.formMethod})};let a;if(r.formData){let s=r.formMethod||"get";if(a={formMethod:e?s.toUpperCase():s.toLowerCase(),formAction:cy(n),formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:r.formData},lr(a.formMethod))return{path:n,submission:a}}let o=yr(n),i=sy(r.formData);return t&&o.search&&Pf(o.search)&&i.append("index",""),o.search="?"+i,{path:Ia(o),submission:a}}function yk(e,t){let n=e;if(t){let r=e.findIndex(a=>a.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Gg(e,t,n,r,a,o,i,s,d,f,m,b,S){let I=S?Object.values(S)[0]:b?Object.values(b)[0]:void 0,N=e.createURL(t.location),C=e.createURL(a),L=S?Object.keys(S)[0]:void 0,g=yk(n,L).filter((v,$)=>{if(v.route.lazy)return!0;if(v.route.loader==null)return!1;if(bk(t.loaderData,t.matches[$],v)||i.some(A=>A===v.route.id))return!0;let _=t.matches[$],M=v;return Yg(v,Re({currentUrl:N,currentParams:_.params,nextUrl:C,nextParams:M.params},r,{actionResult:I,defaultShouldRevalidate:o||N.pathname+N.search===C.pathname+C.search||N.search!==C.search||iy(_,M)}))}),y=[];return d.forEach((v,$)=>{if(!n.some(j=>j.route.id===v.routeId))return;let _=pl(f,v.path,m);if(!_){y.push({key:$,routeId:v.routeId,path:v.path,matches:null,match:null,controller:null});return}let M=th(_,v.path);if(s.includes($)){y.push({key:$,routeId:v.routeId,path:v.path,matches:_,match:M,controller:new AbortController});return}Yg(M,Re({currentUrl:N,currentParams:t.matches[t.matches.length-1].params,nextUrl:C,nextParams:n[n.length-1].params},r,{actionResult:I,defaultShouldRevalidate:o}))&&y.push({key:$,routeId:v.routeId,path:v.path,matches:_,match:M,controller:new AbortController})}),[g,y]}function bk(e,t,n){let r=!t||n.route.id!==t.route.id,a=e[n.route.id]===void 0;return r||a}function iy(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Yg(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function qg(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let a=n[e.id];Ce(a,"No route found in manifest");let o={};for(let i in r){let d=a[i]!==void 0&&i!=="hasErrorBoundary";Ll(!d,'Route "'+a.id+'" has a static property "'+i+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+i+'" will be ignored.')),!d&&!UC.has(i)&&(o[i]=r[i])}Object.assign(a,o),Object.assign(a,Re({},t(a),{lazy:void 0}))}async function ho(e,t,n,r,a,o,i,s,d,f){s===void 0&&(s=!1),d===void 0&&(d=!1);let m,b,S,I=L=>{let w,g=new Promise((y,v)=>w=v);return S=()=>w(),t.signal.addEventListener("abort",S),Promise.race([L({request:t,params:n.params,context:f}),g])};try{let L=n.route[e];if(n.route.lazy)if(L)b=(await Promise.all([I(L),qg(n.route,o,a)]))[0];else if(await qg(n.route,o,a),L=n.route[e],L)b=await I(L);else if(e==="action"){let w=new URL(t.url),g=w.pathname+w.search;throw Mn(405,{method:t.method,pathname:g,routeId:n.route.id})}else return{type:gt.data,data:void 0};else if(L)b=await I(L);else{let w=new URL(t.url),g=w.pathname+w.search;throw Mn(404,{pathname:g})}Ce(b!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(L){m=gt.error,b=L}finally{S&&t.signal.removeEventListener("abort",S)}if(Ck(b)){let L=b.status;if(hk.has(L)){let y=b.headers.get("Location");if(Ce(y,"Redirects returned/thrown from loaders/actions must have a Location header"),!oy.test(y))y=eh(new URL(t.url),r.slice(0,r.indexOf(n)+1),i,!0,y);else if(!s){let v=new URL(t.url),$=y.startsWith("//")?new URL(v.protocol+y):new URL(y),_=Ol($.pathname,i)!=null;$.origin===v.origin&&_&&(y=$.pathname+$.search+$.hash)}if(s)throw b.headers.set("Location",y),b;return{type:gt.redirect,status:L,location:y,revalidate:b.headers.get("X-Remix-Revalidate")!==null}}if(d)throw{type:m||gt.data,response:b};let w,g=b.headers.get("Content-Type");return g&&/\bapplication\/json\b/.test(g)?w=await b.json():w=await b.text(),m===gt.error?{type:m,error:new Rf(L,b.statusText,w),headers:b.headers}:{type:gt.data,data:w,statusCode:b.status,headers:b.headers}}if(m===gt.error)return{type:m,error:b};if(Sk(b)){var N,C;return{type:gt.deferred,deferredData:b,statusCode:(N=b.init)==null?void 0:N.status,headers:((C=b.init)==null?void 0:C.headers)&&new Headers(b.init.headers)}}return{type:gt.data,data:b}}function fo(e,t,n,r){let a=e.createURL(cy(t)).toString(),o={signal:n};if(r&&lr(r.formMethod)){let{formMethod:i,formEncType:s,formData:d}=r;o.method=i.toUpperCase(),o.body=s==="application/x-www-form-urlencoded"?sy(d):d}return new Request(a,o)}function sy(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function wk(e,t,n,r,a){let o={},i=null,s,d=!1,f={};return n.forEach((m,b)=>{let S=t[b].route.id;if(Ce(!Sl(m),"Cannot handle redirect results in processLoaderData"),Mo(m)){let I=gl(e,S),N=m.error;r&&(N=Object.values(r)[0],r=void 0),i=i||{},i[I.route.id]==null&&(i[I.route.id]=N),o[S]=void 0,d||(d=!0,s=ay(m.error)?m.error.status:500),m.headers&&(f[S]=m.headers)}else ba(m)?(a.set(S,m.deferredData),o[S]=m.deferredData.data):o[S]=m.data,m.statusCode!=null&&m.statusCode!==200&&!d&&(s=m.statusCode),m.headers&&(f[S]=m.headers)}),r&&(i=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:i,statusCode:s||200,loaderHeaders:f}}function Zg(e,t,n,r,a,o,i,s){let{loaderData:d,errors:f}=wk(t,n,r,a,s);for(let m=0;m<o.length;m++){let{key:b,match:S,controller:I}=o[m];Ce(i!==void 0&&i[m]!==void 0,"Did not find corresponding fetcher result");let N=i[m];if(!(I&&I.signal.aborted))if(Mo(N)){let C=gl(e.matches,S==null?void 0:S.route.id);f&&f[C.route.id]||(f=Re({},f,{[C.route.id]:N.error})),e.fetchers.delete(b)}else if(Sl(N))Ce(!1,"Unhandled fetcher revalidation redirect");else if(ba(N))Ce(!1,"Unhandled fetcher deferred data");else{let C={state:"idle",data:N.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(b,C)}}return{loaderData:d,errors:f}}function Qg(e,t,n,r){let a=Re({},t);for(let o of n){let i=o.route.id;if(t.hasOwnProperty(i)?t[i]!==void 0&&(a[i]=t[i]):e[i]!==void 0&&o.route.loader&&(a[i]=e[i]),r&&r.hasOwnProperty(i))break}return a}function gl(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Kg(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Mn(e,t){let{pathname:n,routeId:r,method:a,type:o}=t===void 0?{}:t,i="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(i="Bad Request",a&&n&&r?s="You made a "+a+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(s="defer() is not supported in actions")):e===403?(i="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(i="Not Found",s='No route matches URL "'+n+'"'):e===405&&(i="Method Not Allowed",a&&n&&r?s="You made a "+a.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":a&&(s='Invalid request method "'+a.toUpperCase()+'"')),new Rf(e||500,i,new Error(s),!0)}function Xg(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Sl(n))return n}}function cy(e){let t=typeof e=="string"?yr(e):e;return Ia(Re({},t,{hash:""}))}function xk(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function ba(e){return e.type===gt.deferred}function Mo(e){return e.type===gt.error}function Sl(e){return(e&&e.type)===gt.redirect}function Sk(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Ck(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function kk(e){return uk.has(e.toLowerCase())}function lr(e){return ck.has(e.toLowerCase())}async function Jg(e,t,n,r,a,o){for(let i=0;i<n.length;i++){let s=n[i],d=t[i];if(!d)continue;let f=e.find(b=>b.route.id===d.route.id),m=f!=null&&!iy(f,d)&&(o&&o[d.route.id])!==void 0;if(ba(s)&&(a||m)){let b=r[i];Ce(b,"Expected an AbortSignal for revalidating fetcher deferred result"),await dy(s,b,a).then(S=>{S&&(n[i]=S||n[i])})}}}async function dy(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:gt.data,data:e.deferredData.unwrappedData}}catch(a){return{type:gt.error,error:a}}return{type:gt.data,data:e.deferredData.data}}}function Pf(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function em(e,t){let{route:n,pathname:r,params:a}=e;return{id:n.id,pathname:r,params:a,data:t[n.id],handle:n.handle}}function th(e,t){let n=typeof t=="string"?yr(t).search:t.search;if(e[e.length-1].route.index&&Pf(n||""))return e[e.length-1];let r=Lc(e);return r[r.length-1]}/**
 * React Router v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nc(){return nc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nc.apply(this,arguments)}const Rc=B.createContext(null),Mf=B.createContext(null),Ma=B.createContext(null),Pc=B.createContext(null),Kr=B.createContext({outlet:null,matches:[],isDataRoute:!1}),uy=B.createContext(null);function _k(e,t){let{relative:n}=t===void 0?{}:t;yi()||Ce(!1);let{basename:r,navigator:a}=B.useContext(Ma),{hash:o,pathname:i,search:s}=Ff(e,{relative:n}),d=i;return r!=="/"&&(d=i==="/"?r:dr([r,i])),a.createHref({pathname:d,search:s,hash:o})}function yi(){return B.useContext(Pc)!=null}function Dl(){return yi()||Ce(!1),B.useContext(Pc).location}function hy(e){B.useContext(Ma).static||B.useLayoutEffect(e)}function Tk(){let{isDataRoute:e}=B.useContext(Kr);return e?Bk():$k()}function $k(){yi()||Ce(!1);let e=B.useContext(Rc),{basename:t,navigator:n}=B.useContext(Ma),{matches:r}=B.useContext(Kr),{pathname:a}=Dl(),o=JSON.stringify(Lc(r).map(d=>d.pathnameBase)),i=B.useRef(!1);return hy(()=>{i.current=!0}),B.useCallback(function(d,f){if(f===void 0&&(f={}),!i.current)return;if(typeof d=="number"){n.go(d);return}let m=Lf(d,JSON.parse(o),a,f.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:dr([t,m.pathname])),(f.replace?n.replace:n.push)(m,f.state,f)},[t,n,o,a,e])}const Ek=B.createContext(null);function Nk(e){let t=B.useContext(Kr).outlet;return t&&B.createElement(Ek.Provider,{value:e},t)}function Ff(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=B.useContext(Kr),{pathname:a}=Dl(),o=JSON.stringify(Lc(r).map(i=>i.pathnameBase));return B.useMemo(()=>Lf(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function Ik(e,t,n){yi()||Ce(!1);let{navigator:r}=B.useContext(Ma),{matches:a}=B.useContext(Kr),o=a[a.length-1],i=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let d=Dl(),f;if(t){var m;let C=typeof t=="string"?yr(t):t;s==="/"||(m=C.pathname)!=null&&m.startsWith(s)||Ce(!1),f=C}else f=d;let b=f.pathname||"/",S=s==="/"?b:b.slice(s.length)||"/",I=pl(e,{pathname:S}),N=Fk(I&&I.map(C=>Object.assign({},C,{params:Object.assign({},i,C.params),pathname:dr([s,r.encodeLocation?r.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?s:dr([s,r.encodeLocation?r.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),a,n);return t&&N?B.createElement(Pc.Provider,{value:{location:nc({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:ct.Pop}},N):N}function Lk(){let e=zk(),t=ay(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},t),n?B.createElement("pre",{style:a},n):null,o)}const Rk=B.createElement(Lk,null);class Pk extends B.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?B.createElement(Kr.Provider,{value:this.props.routeContext},B.createElement(uy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Mk(e){let{routeContext:t,match:n,children:r}=e,a=B.useContext(Rc);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),B.createElement(Kr.Provider,{value:t},r)}function Fk(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let o=e,i=(r=n)==null?void 0:r.errors;if(i!=null){let s=o.findIndex(d=>d.route.id&&(i==null?void 0:i[d.route.id]));s>=0||Ce(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,d,f)=>{let m=d.route.id?i==null?void 0:i[d.route.id]:null,b=null;n&&(b=d.route.errorElement||Rk);let S=t.concat(o.slice(0,f+1)),I=()=>{let N;return m?N=b:d.route.Component?N=B.createElement(d.route.Component,null):d.route.element?N=d.route.element:N=s,B.createElement(Mk,{match:d,routeContext:{outlet:s,matches:S,isDataRoute:n!=null},children:N})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?B.createElement(Pk,{location:n.location,revalidation:n.revalidation,component:b,error:m,children:I(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):I()},null)}var nh;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(nh||(nh={}));var ri;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(ri||(ri={}));function Ak(e){let t=B.useContext(Rc);return t||Ce(!1),t}function Ok(e){let t=B.useContext(Mf);return t||Ce(!1),t}function Dk(e){let t=B.useContext(Kr);return t||Ce(!1),t}function fy(e){let t=Dk(),n=t.matches[t.matches.length-1];return n.route.id||Ce(!1),n.route.id}function zk(){var e;let t=B.useContext(uy),n=Ok(ri.UseRouteError),r=fy(ri.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Bk(){let{router:e}=Ak(nh.UseNavigateStable),t=fy(ri.UseNavigateStable),n=B.useRef(!1);return hy(()=>{n.current=!0}),B.useCallback(function(a,o){o===void 0&&(o={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,nc({fromRouteId:t},o)))},[e,t])}const tm="startTransition";function jk(e){let{fallbackElement:t,router:n}=e,[r,a]=B.useState(n.state),o=B.useCallback(f=>{tm in g0?g0[tm](()=>a(f)):a(f)},[a]);B.useLayoutEffect(()=>n.subscribe(o),[n,o]);let i=B.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:f=>n.navigate(f),push:(f,m,b)=>n.navigate(f,{state:m,preventScrollReset:b==null?void 0:b.preventScrollReset}),replace:(f,m,b)=>n.navigate(f,{replace:!0,state:m,preventScrollReset:b==null?void 0:b.preventScrollReset})}),[n]),s=n.basename||"/",d=B.useMemo(()=>({router:n,navigator:i,static:!1,basename:s}),[n,i,s]);return B.createElement(B.Fragment,null,B.createElement(Rc.Provider,{value:d},B.createElement(Mf.Provider,{value:r},B.createElement(Hk,{basename:s,location:r.location,navigationType:r.historyAction,navigator:i},r.initialized?B.createElement(Uk,{routes:n.routes,state:r}):t))),null)}function Uk(e){let{routes:t,state:n}=e;return Ik(t,void 0,n)}function Wk(e){return Nk(e.context)}function Hk(e){let{basename:t="/",children:n=null,location:r,navigationType:a=ct.Pop,navigator:o,static:i=!1}=e;yi()&&Ce(!1);let s=t.replace(/^\/*/,"/"),d=B.useMemo(()=>({basename:s,navigator:o,static:i}),[s,o,i]);typeof r=="string"&&(r=yr(r));let{pathname:f="/",search:m="",hash:b="",state:S=null,key:I="default"}=r,N=B.useMemo(()=>{let C=Ol(f,s);return C==null?null:{location:{pathname:C,search:m,hash:b,state:S,key:I},navigationType:a}},[s,f,m,b,S,I,a]);return N==null?null:B.createElement(Ma.Provider,{value:d},B.createElement(Pc.Provider,{children:n,value:N}))}var nm;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(nm||(nm={}));new Promise(()=>{});function Vk(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:B.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:B.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rl(){return Rl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rl.apply(this,arguments)}function py(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Gk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Yk(e,t){return e.button===0&&(!t||t==="_self")&&!Gk(e)}const qk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Zk=["aria-current","caseSensitive","className","end","style","to","children"];function Qk(e,t){return mk({basename:t==null?void 0:t.basename,future:Rl({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:zC({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Kk(),routes:e,mapRouteProperties:Vk}).initialize()}function Kk(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Rl({},t,{errors:Xk(t.errors)})),t}function Xk(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,a]of t)if(a&&a.__type==="RouteErrorResponse")n[r]=new Rf(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){let o=new Error(a.message);o.stack="",n[r]=o}else n[r]=a;return n}const Jk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",e_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,t_=B.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:o,replace:i,state:s,target:d,to:f,preventScrollReset:m}=t,b=py(t,qk),{basename:S}=B.useContext(Ma),I,N=!1;if(typeof f=="string"&&e_.test(f)&&(I=f,Jk))try{let g=new URL(window.location.href),y=f.startsWith("//")?new URL(g.protocol+f):new URL(f),v=Ol(y.pathname,S);y.origin===g.origin&&v!=null?f=v+y.search+y.hash:N=!0}catch{}let C=_k(f,{relative:a}),L=r_(f,{replace:i,state:s,target:d,preventScrollReset:m,relative:a});function w(g){r&&r(g),g.defaultPrevented||L(g)}return B.createElement("a",Rl({},b,{href:I||C,onClick:N||o?r:w,ref:n,target:d}))}),n_=B.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:o="",end:i=!1,style:s,to:d,children:f}=t,m=py(t,Zk),b=Ff(d,{relative:m.relative}),S=Dl(),I=B.useContext(Mf),{navigator:N}=B.useContext(Ma),C=N.encodeLocation?N.encodeLocation(b).pathname:b.pathname,L=S.pathname,w=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;a||(L=L.toLowerCase(),w=w?w.toLowerCase():null,C=C.toLowerCase());let g=L===C||!i&&L.startsWith(C)&&L.charAt(C.length)==="/",y=w!=null&&(w===C||!i&&w.startsWith(C)&&w.charAt(C.length)==="/"),v=g?r:void 0,$;typeof o=="function"?$=o({isActive:g,isPending:y}):$=[o,g?"active":null,y?"pending":null].filter(Boolean).join(" ");let _=typeof s=="function"?s({isActive:g,isPending:y}):s;return B.createElement(t_,Rl({},m,{"aria-current":v,className:$,ref:n,style:_,to:d}),typeof f=="function"?f({isActive:g,isPending:y}):f)});var rm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(rm||(rm={}));var am;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(am||(am={}));function r_(e,t){let{target:n,replace:r,state:a,preventScrollReset:o,relative:i}=t===void 0?{}:t,s=Tk(),d=Dl(),f=Ff(e,{relative:i});return B.useCallback(m=>{if(Yk(m,n)){m.preventDefault();let b=r!==void 0?r:Ia(d)===Ia(f);s(e,{replace:b,state:a,preventScrollReset:o,relative:i})}},[d,s,f,r,a,n,e,o,i])}const Ie=({to:e,className:t="",exact:n,children:r,text:a,onClick:o,label:i,style:s})=>l(n_,{to:e,onClick:o,end:n&&"end",className:({isActive:d})=>`${t} ${d?"active":""}`,"aria-label":i,style:s,children:r||a}),a_=()=>h("div",{className:"prose",children:[l("h1",{children:"Brand Colours"}),l("p",{children:"The palette is designed to be adjustable so that you can match it to your brand colors."}),l("h2",{children:"Brand Hue and Color"}),h("p",{children:["You should pick a color that is closest to your brand color and adjust the hue to match it if necessary.  Then define that as the"," ",l("code",{children:"$brand-hue"})," and set the ",l("code",{children:"$brand-color"})," by name."]}),l(Ke,{code:FC,caption:"Brand Color",language:"scss",expand:!0}),l("h2",{children:"Multiple Brand Colors"}),h("p",{children:["If you have multiple brand colors you can set them using the"," ",l("code",{children:"$brand-colors"})," variable.  You can call them whatever you like (we're using ",l("code",{children:"primary"}),", ",l("code",{children:"secondary"})," ","and ",l("code",{children:"tertiary"})," in this example). You should define one to be the primary ",l("code",{children:"$brand-color"})," and set the ",l("code",{children:"$brand-hue"})]}),l(Ke,{code:AC,caption:"Brand Colors",language:"scss",expand:!0}),l("h2",{children:"Greyscale Colors"}),h("p",{children:["An important side-effect of setting ",l("code",{children:"$brand-hue"})," is that it will set the hue of the greyscale color ranges to match it."]}),h("p",{children:["If you want to use different hues for the greyscale color ranges then you can do that using the ",l("code",{children:"$grey-hue"}),","," ",l("code",{children:"$grey20-hue"})," and ",l("code",{children:"$grey40-hue"})," variables."]}),l(Ke,{code:OC,caption:"Greyscale Colors",language:"scss",expand:!0}),l("h2",{children:"Culling the Palette"}),l("p",{children:"The chances are that you aren't going to need all of the colors defined in the standard palette.  You can reduce the size of the generated CSS file by excluding any that you don't need."}),h("p",{children:["Set the ",l("code",{children:"$color-names"})," variable to list those that you want to keep.  Note that ",l("code",{children:"red"}),", ",l("code",{children:"orange"}),","," ",l("code",{children:"green"}),", ",l("code",{children:"blue"})," and ",l("code",{children:"grey"})," are used by various components, including ",l(Ie,{to:"/forms/",text:"forms"})," and"," ",l(Ie,{to:"/components/alerts",text:"alerts"})," so you'll probably want to keep those."]}),l(Ke,{code:DC,caption:"Selecting Colors",language:"scss",expand:!0})]}),l_=Object.freeze(Object.defineProperty({__proto__:null,default:a_},Symbol.toStringTag,{value:"Module"})),o_="Badger CSS Desaturation Light",i_="Palette cloned from Badger CSS 2023-09-30 11:17:47",s_="badger-css-desaturation-light",c_="",d_={red:{name:"Red",hue:0,stops:{0:{h:0,s:65,l:5,hex:"#150404"},5:{h:0,s:66,l:8,hex:"#220707"},10:{h:0,s:68,l:11,hex:"#2f0909"},15:{h:0,s:69,l:15,hex:"#410c0c"},20:{h:0,s:70,l:18,hex:"#4e0e0e"},25:{h:0,s:71,l:22,hex:"#601010"},30:{h:0,s:72,l:27,hex:"#761313"},35:{h:0,s:73,l:31,hex:"#891515"},40:{h:0,s:73,l:36,hex:"#9f1919"},45:{h:0,s:74,l:42,hex:"#ba1c1c"},50:{h:0,s:74,l:48,hex:"#d52020"},55:{h:0,s:74,l:55,hex:"#e13737"},60:{h:0,s:73,l:62,hex:"#e55757"},65:{h:0,s:72,l:68,hex:"#e87373"},70:{h:0,s:71,l:74,hex:"#ec8e8e"},75:{h:0,s:69,l:80,hex:"#efa9a9"},80:{h:0,s:66,l:84,hex:"#f1bbbb"},85:{h:0,s:62,l:88,hex:"#f3cdcd"},90:{h:0,s:56,l:92,hex:"#f6dfdf"},95:{h:0,s:48,l:95,hex:"#f8ecec"},100:{h:0,s:33,l:98,hex:"#fcf8f8"}},curves:{h:{min:0,max:0,minControl:{x:30,y:0},maxControl:{x:70,y:0}},s:{min:65,max:33,minControl:{x:31,y:74},maxControl:{x:88,y:89}},l:{min:5,max:98,minControl:{x:62,y:42},maxControl:{x:53,y:72}}},uri:"red"},brown:{name:"Brown",hue:14,stops:{0:{h:10,s:52,l:5,hex:"#130806"},5:{h:11,s:53,l:8,hex:"#1f0e0a"},10:{h:11,s:54,l:11,hex:"#2b120d"},15:{h:12,s:54,l:14,hex:"#371810"},20:{h:13,s:55,l:17,hex:"#431e14"},25:{h:13,s:56,l:20,hex:"#502316"},30:{h:13,s:56,l:24,hex:"#5f2a1b"},35:{h:14,s:57,l:28,hex:"#70321f"},40:{h:14,s:57,l:32,hex:"#803923"},45:{h:14,s:57,l:37,hex:"#944229"},50:{h:14,s:57,l:42,hex:"#a84b2e"},55:{h:14,s:56,l:47,hex:"#bb5435"},60:{h:14,s:56,l:53,hex:"#ca6344"},65:{h:15,s:55,l:60,hex:"#d17d61"},70:{h:15,s:53,l:67,hex:"#d7957e"},75:{h:15,s:51,l:75,hex:"#e0af9f"},80:{h:14,s:49,l:81,hex:"#e6c2b7"},85:{h:14,s:45,l:87,hex:"#edd6cf"},90:{h:14,s:41,l:92,hex:"#f3e6e2"},95:{h:14,s:34,l:95,hex:"#f7f0ee"},100:{h:14,s:23,l:98,hex:"#fbf9f9"}},curves:{h:{min:10,max:14,minControl:{x:30,y:15},maxControl:{x:70,y:15}},s:{min:52,max:23,minControl:{x:35,y:58},maxControl:{x:86,y:66}},l:{min:5,max:98,minControl:{x:72,y:43},maxControl:{x:67,y:82}}},uri:"brown"},orange:{name:"Orange",hue:26,stops:{0:{h:27,s:93,l:5,hex:"#190c01"},5:{h:27,s:94,l:8,hex:"#281201"},10:{h:26,s:94,l:11,hex:"#361902"},15:{h:26,s:95,l:14,hex:"#461f02"},20:{h:26,s:95,l:18,hex:"#5a2802"},25:{h:26,s:95,l:21,hex:"#682f03"},30:{h:26,s:96,l:25,hex:"#7d3803"},35:{h:26,s:96,l:30,hex:"#964303"},40:{h:26,s:96,l:35,hex:"#af4e04"},45:{h:26,s:96,l:40,hex:"#c85904"},50:{h:26,s:95,l:46,hex:"#e56606"},55:{h:26,s:95,l:52,hex:"#f97510"},60:{h:26,s:94,l:59,hex:"#f98934"},65:{h:26,s:92,l:65,hex:"#f89b54"},70:{h:27,s:90,l:72,hex:"#f8b177"},75:{h:27,s:87,l:78,hex:"#f8c296"},80:{h:28,s:84,l:83,hex:"#f8d1af"},85:{h:28,s:78,l:88,hex:"#f8dfc9"},90:{h:29,s:71,l:91,hex:"#f8e8d8"},95:{h:30,s:58,l:95,hex:"#faf2eb"},100:{h:32,s:26,l:97,hex:"#f9f7f5"}},curves:{h:{min:27,max:32,minControl:{x:30,y:25},maxControl:{x:77,y:24}},s:{min:93,max:24,minControl:{x:59,y:100},maxControl:{x:97,y:100}},l:{min:5,max:97,minControl:{x:62,y:39},maxControl:{x:62,y:80}}},uri:"orange"},yellow:{name:"Yellow",hue:41,stops:{0:{h:30,s:90,l:5,hex:"#180d01"},5:{h:31,s:91,l:8,hex:"#271502"},10:{h:33,s:92,l:10,hex:"#311c02"},15:{h:34,s:92,l:13,hex:"#402503"},20:{h:35,s:93,l:17,hex:"#543203"},25:{h:36,s:93,l:20,hex:"#623c04"},30:{h:37,s:94,l:24,hex:"#774b04"},35:{h:38,s:94,l:28,hex:"#8b5904"},40:{h:39,s:95,l:33,hex:"#a46c04"},45:{h:40,s:95,l:38,hex:"#bd8005"},50:{h:41,s:94,l:43,hex:"#d59307"},55:{h:41,s:94,l:48,hex:"#eda507"},60:{h:42,s:93,l:54,hex:"#f7b51d"},65:{h:43,s:91,l:60,hex:"#f6c13c"},70:{h:43,s:89,l:66,hex:"#f5ca5b"},75:{h:44,s:86,l:72,hex:"#f5d47a"},80:{h:44,s:82,l:77,hex:"#f4db94"},85:{h:44,s:77,l:82,hex:"#f4e2ae"},90:{h:45,s:68,l:87,hex:"#f4e9c7"},95:{h:45,s:53,l:92,hex:"#f5f0e0"},100:{h:45,s:21,l:96,hex:"#f7f6f3"}},curves:{h:{min:30,max:45,minControl:{x:28,y:38},maxControl:{x:70,y:45}},s:{min:90,max:20,minControl:{x:63,y:100},maxControl:{x:94,y:100}},l:{min:5,max:96,minControl:{x:52,y:31},maxControl:{x:64,y:67}}},uri:"yellow"},olive:{name:"Olive",hue:68,stops:{0:{h:72,s:66,l:4,hex:"#0e1103"},5:{h:72,s:68,l:6,hex:"#161a05"},10:{h:71,s:70,l:9,hex:"#212707"},15:{h:71,s:71,l:12,hex:"#2c3409"},20:{h:70,s:72,l:15,hex:"#39420b"},25:{h:70,s:73,l:18,hex:"#444f0c"},30:{h:69,s:74,l:21,hex:"#515d0e"},35:{h:69,s:74,l:25,hex:"#616f11"},40:{h:69,s:74,l:29,hex:"#708113"},45:{h:68,s:73,l:33,hex:"#819217"},50:{h:68,s:72,l:37,hex:"#90a21a"},55:{h:67,s:70,l:43,hex:"#a8ba21"},60:{h:67,s:68,l:48,hex:"#bace27"},65:{h:66,s:65,l:54,hex:"#c7d63d"},70:{h:66,s:60,l:61,hex:"#cbd760"},75:{h:65,s:55,l:68,hex:"#d3da81"},80:{h:65,s:49,l:75,hex:"#d9dea0"},85:{h:65,s:41,l:82,hex:"#e1e4be"},90:{h:64,s:33,l:87,hex:"#e7e9d3"},95:{h:64,s:24,l:93,hex:"#f1f1e9"},100:{h:64,s:16,l:97,hex:"#f8f9f6"}},curves:{h:{min:72,max:64,minControl:{x:30,y:70},maxControl:{x:69,y:65}},s:{min:66,max:16,minControl:{x:69,y:93},maxControl:{x:81,y:44}},l:{min:4,max:97,minControl:{x:67,y:35},maxControl:{x:72,y:75}}},uri:"olive"},green:{name:"Green",hue:117,stops:{0:{h:117,s:45,l:5,hex:"#081207"},5:{h:117,s:48,l:8,hex:"#0c1e0b"},10:{h:117,s:50,l:11,hex:"#0f2a0e"},15:{h:117,s:52,l:14,hex:"#133611"},20:{h:117,s:53,l:17,hex:"#174214"},25:{h:117,s:54,l:21,hex:"#1c5219"},30:{h:117,s:55,l:25,hex:"#20631d"},35:{h:117,s:55,l:29,hex:"#257321"},40:{h:117,s:55,l:33,hex:"#2a8226"},45:{h:117,s:54,l:38,hex:"#32952d"},50:{h:117,s:54,l:43,hex:"#38a932"},55:{h:117,s:52,l:48,hex:"#41ba3b"},60:{h:117,s:51,l:54,hex:"#54c64e"},65:{h:117,s:49,l:60,hex:"#6ccb67"},70:{h:117,s:47,l:66,hex:"#84d180"},75:{h:117,s:44,l:73,hex:"#9fd89c"},80:{h:117,s:40,l:79,hex:"#b6dfb4"},85:{h:117,s:36,l:85,hex:"#cce7cb"},90:{h:118,s:31,l:90,hex:"#deedde"},95:{h:118,s:24,l:94,hex:"#ecf3ec"},100:{h:118,s:16,l:98,hex:"#f9fbf9"}},curves:{h:{min:117,max:118,minControl:{x:30,y:118},maxControl:{x:57,y:116}},s:{min:45,max:16,minControl:{x:34,y:65},maxControl:{x:81,y:54}},l:{min:5,max:98,minControl:{x:61,y:38},maxControl:{x:72,y:79}}},uri:"green"},teal:{name:"Teal",hue:165,stops:{0:{h:165,s:52,l:5,hex:"#061310"},5:{h:165,s:56,l:7,hex:"#081c17"},10:{h:165,s:59,l:10,hex:"#0a2921"},15:{h:165,s:61,l:13,hex:"#0d352b"},20:{h:165,s:62,l:15,hex:"#0f3e32"},25:{h:165,s:63,l:18,hex:"#114b3c"},30:{h:165,s:64,l:21,hex:"#135847"},35:{h:165,s:63,l:25,hex:"#186854"},40:{h:165,s:63,l:29,hex:"#1b7961"},45:{h:165,s:62,l:33,hex:"#20886e"},50:{h:165,s:60,l:37,hex:"#26977b"},55:{h:165,s:58,l:42,hex:"#2da98a"},60:{h:165,s:56,l:47,hex:"#35bb99"},65:{h:165,s:53,l:53,hex:"#48c7a7"},70:{h:165,s:50,l:60,hex:"#66ccb3"},75:{h:165,s:46,l:67,hex:"#84d2be"},80:{h:165,s:41,l:75,hex:"#a5d9cc"},85:{h:165,s:36,l:81,hex:"#bde0d7"},90:{h:165,s:30,l:88,hex:"#d7eae5"},95:{h:165,s:23,l:93,hex:"#e9f1ef"},100:{h:165,s:13,l:98,hex:"#f9fbfa"}},curves:{h:{min:165,max:165,minControl:{x:30,y:165},maxControl:{x:70,y:165}},s:{min:52,max:13,minControl:{x:34,y:81},maxControl:{x:83,y:51}},l:{min:5,max:98,minControl:{x:71,y:38},maxControl:{x:68,y:69}}},uri:"teal"},blue:{name:"Blue",hue:206,stops:{0:{h:210,s:72,l:5,hex:"#040d16"},5:{h:210,s:74,l:8,hex:"#051423"},10:{h:209,s:75,l:11,hex:"#071d31"},15:{h:209,s:77,l:15,hex:"#092744"},20:{h:209,s:78,l:18,hex:"#0a2f52"},25:{h:208,s:79,l:22,hex:"#0c3b64"},30:{h:208,s:80,l:26,hex:"#0d4677"},35:{h:207,s:81,l:31,hex:"#0f558f"},40:{h:207,s:82,l:35,hex:"#1061a2"},45:{h:207,s:83,l:41,hex:"#1271bf"},50:{h:206,s:83,l:46,hex:"#1482d7"},55:{h:206,s:82,l:52,hex:"#2092e9"},60:{h:205,s:82,l:58,hex:"#3ca3ec"},65:{h:205,s:80,l:65,hex:"#5eb2ed"},70:{h:205,s:79,l:71,hex:"#7bbfef"},75:{h:205,s:76,l:77,hex:"#98ccf1"},80:{h:204,s:72,l:82,hex:"#b0d8f2"},85:{h:204,s:66,l:87,hex:"#c8e2f4"},90:{h:204,s:59,l:91,hex:"#dbebf6"},95:{h:204,s:46,l:95,hex:"#ecf3f8"},100:{h:204,s:22,l:98,hex:"#f9fafb"}},curves:{h:{min:210,max:204,minControl:{x:42,y:207},maxControl:{x:70,y:204}},s:{min:72,max:22,minControl:{x:43,y:86},maxControl:{x:91,y:99}},l:{min:5,max:98,minControl:{x:61,y:41},maxControl:{x:64,y:78}}},uri:"blue"},indigo:{name:"Indigo",hue:236,stops:{0:{h:234,s:50,l:7,hex:"#090b1b"},5:{h:234,s:53,l:11,hex:"#0d102b"},10:{h:235,s:56,l:16,hex:"#121640"},15:{h:235,s:58,l:21,hex:"#161c55"},20:{h:235,s:61,l:27,hex:"#1b226f"},25:{h:235,s:64,l:32,hex:"#1d2686"},30:{h:236,s:67,l:38,hex:"#2029a2"},35:{h:236,s:69,l:44,hex:"#232dbe"},40:{h:236,s:72,l:50,hex:"#2430db"},45:{h:236,s:74,l:56,hex:"#3c47e2"},50:{h:236,s:75,l:62,hex:"#555fe7"},55:{h:236,s:76,l:67,hex:"#6b73eb"},60:{h:236,s:76,l:72,hex:"#8189ee"},65:{h:235,s:75,l:77,hex:"#98a0f0"},70:{h:235,s:72,l:81,hex:"#acb1f1"},75:{h:235,s:68,l:85,hex:"#bfc3f3"},80:{h:235,s:63,l:89,hex:"#d1d4f5"},85:{h:235,s:55,l:92,hex:"#dfe1f6"},90:{h:235,s:45,l:94,hex:"#e9eaf7"},95:{h:235,s:33,l:97,hex:"#f5f5fa"},100:{h:235,s:20,l:99,hex:"#fcfcfd"}},curves:{h:{min:234,max:235,minControl:{x:30,y:237},maxControl:{x:70,y:235}},s:{min:50,max:20,minControl:{x:53,y:79},maxControl:{x:72,y:100}},l:{min:7,max:99,minControl:{x:39,y:40},maxControl:{x:53,y:80}}},uri:"indigo"},violet:{name:"Violet",uri:"violet",hue:259,stops:{0:{h:271,s:53,l:8,hex:"#150a1f"},5:{h:269,s:55,l:12,hex:"#1e0e2f"},10:{h:268,s:56,l:16,hex:"#271240"},15:{h:266,s:58,l:21,hex:"#311655"},20:{h:265,s:60,l:26,hex:"#3c1b6a"},25:{h:264,s:62,l:31,hex:"#451e80"},30:{h:263,s:65,l:36,hex:"#4e2097"},35:{h:262,s:67,l:42,hex:"#5823b3"},40:{h:261,s:69,l:48,hex:"#6126cf"},45:{h:260,s:72,l:53,hex:"#6a31dd"},50:{h:259,s:73,l:59,hex:"#7a4ae3"},55:{h:258,s:75,l:65,hex:"#8b63e9"},60:{h:258,s:75,l:71,hex:"#9f7eed"},65:{h:257,s:73,l:76,hex:"#ae95ee"},70:{h:257,s:70,l:80,hex:"#bda8f0"},75:{h:256,s:64,l:85,hex:"#cdc0f1"},80:{h:256,s:58,l:88,hex:"#d8cff2"},85:{h:255,s:51,l:92,hex:"#e5e0f5"},90:{h:255,s:43,l:94,hex:"#ece9f6"},95:{h:255,s:35,l:97,hex:"#f6f5fa"},100:{h:255,s:27,l:99,hex:"#fcfcfd"}},curves:{h:{min:271,max:255,minControl:{x:33,y:260},maxControl:{x:70,y:255}},s:{min:53,max:27,minControl:{x:64,y:73},maxControl:{x:56,y:100}},l:{min:8,max:99,minControl:{x:45,y:43},maxControl:{x:58,y:83}}}},purple:{name:"Purple",hue:284,stops:{0:{h:294,s:47,l:6,hex:"#150816"},5:{h:293,s:50,l:8,hex:"#1c0a1f"},10:{h:292,s:53,l:11,hex:"#270d2b"},15:{h:290,s:56,l:14,hex:"#311038"},20:{h:289,s:59,l:18,hex:"#3f1349"},25:{h:288,s:62,l:22,hex:"#4d155b"},30:{h:287,s:65,l:26,hex:"#5b176d"},35:{h:286,s:67,l:31,hex:"#6b1a84"},40:{h:286,s:69,l:37,hex:"#811d9f"},45:{h:285,s:71,l:43,hex:"#9520bc"},50:{h:284,s:72,l:49,hex:"#a723d7"},55:{h:283,s:73,l:55,hex:"#b138e0"},60:{h:283,s:73,l:62,hex:"#bd57e5"},65:{h:282,s:72,l:68,hex:"#c573e8"},70:{h:282,s:70,l:75,hex:"#d193ec"},75:{h:281,s:67,l:80,hex:"#d9aaee"},80:{h:281,s:61,l:85,hex:"#e1c1f0"},85:{h:280,s:54,l:90,hex:"#ead8f3"},90:{h:280,s:46,l:94,hex:"#f2e9f7"},95:{h:280,s:35,l:97,hex:"#f8f5fa"},100:{h:280,s:22,l:99,hex:"#fdfcfd"}},curves:{h:{min:294,max:280,minControl:{x:32,y:286},maxControl:{x:67,y:280}},s:{min:47,max:22,minControl:{x:51,y:78},maxControl:{x:74,y:94}},l:{min:6,max:99,minControl:{x:48,y:26},maxControl:{x:64,y:85}}},uri:"purple"},pink:{name:"Pink",hue:313,stops:{0:{h:314,s:64,l:5,hex:"#150511"},5:{h:314,s:66,l:7,hex:"#1e0618"},10:{h:313,s:69,l:10,hex:"#2b0823"},15:{h:313,s:71,l:13,hex:"#390a2e"},20:{h:313,s:72,l:16,hex:"#460b39"},25:{h:313,s:74,l:19,hex:"#540d45"},30:{h:313,s:75,l:23,hex:"#670f54"},35:{h:313,s:76,l:27,hex:"#791163"},40:{h:313,s:77,l:32,hex:"#901375"},45:{h:313,s:77,l:37,hex:"#a71688"},50:{h:313,s:76,l:42,hex:"#bc1a99"},55:{h:313,s:76,l:48,hex:"#d71daf"},60:{h:313,s:74,l:55,hex:"#e137bc"},65:{h:313,s:72,l:63,hex:"#e55dc7"},70:{h:312,s:70,l:70,hex:"#e87dd3"},75:{h:312,s:66,l:77,hex:"#eb9edc"},80:{h:312,s:61,l:83,hex:"#eeb9e4"},85:{h:312,s:55,l:88,hex:"#f1d0ea"},90:{h:311,s:47,l:92,hex:"#f4e1f1"},95:{h:311,s:37,l:96,hex:"#f9f1f7"},100:{h:310,s:21,l:99,hex:"#fdfcfd"}},curves:{h:{min:314,max:310,minControl:{x:26,y:311},maxControl:{x:67,y:315}},s:{min:64,max:21,minControl:{x:45,y:87},maxControl:{x:84,y:82}},l:{min:5,max:99,minControl:{x:64,y:34},maxControl:{x:62,y:78}}},uri:"pink"},maroon:{name:"Maroon",hue:339,stops:{0:{h:339,s:57,l:6,hex:"#18070d"},5:{h:339,s:62,l:8,hex:"#210811"},10:{h:339,s:66,l:11,hex:"#2f0a16"},15:{h:339,s:69,l:13,hex:"#380a1a"},20:{h:339,s:73,l:17,hex:"#4b0c22"},25:{h:339,s:76,l:20,hex:"#5a0c27"},30:{h:339,s:79,l:24,hex:"#6e0d2f"},35:{h:339,s:81,l:29,hex:"#860e38"},40:{h:339,s:83,l:33,hex:"#9a0e3f"},45:{h:339,s:84,l:39,hex:"#b7104a"},50:{h:339,s:84,l:45,hex:"#d31256"},55:{h:339,s:84,l:51,hex:"#eb1963"},60:{h:339,s:84,l:57,hex:"#ed3576"},65:{h:339,s:82,l:64,hex:"#ee588d"},70:{h:339,s:80,l:71,hex:"#f07aa3"},75:{h:339,s:76,l:77,hex:"#f198b7"},80:{h:339,s:71,l:83,hex:"#f2b5ca"},85:{h:339,s:64,l:88,hex:"#f4cddb"},90:{h:339,s:55,l:92,hex:"#f6dfe7"},95:{h:339,s:41,l:96,hex:"#f9f1f4"},100:{h:339,s:21,l:99,hex:"#fdfcfc"}},curves:{h:{min:339,max:339,minControl:{x:26,y:339},maxControl:{x:67,y:339}},s:{min:57,max:21,minControl:{x:43,y:97},maxControl:{x:85,y:100}},l:{min:6,max:99,minControl:{x:54,y:28},maxControl:{x:64,y:79}}},uri:"maroon"},grey:{name:"Grey",hue:200,stops:{0:{h:200,s:5,l:5,hex:"#0c0d0d"},5:{h:200,s:5,l:10,hex:"#181a1b"},10:{h:200,s:5,l:14,hex:"#222425"},15:{h:200,s:5,l:19,hex:"#2e3133"},20:{h:200,s:5,l:23,hex:"#383c3e"},25:{h:200,s:5,l:28,hex:"#44494b"},30:{h:200,s:5,l:33,hex:"#505658"},35:{h:200,s:5,l:37,hex:"#5a6063"},40:{h:200,s:5,l:42,hex:"#666d70"},45:{h:200,s:5,l:47,hex:"#727a7e"},50:{h:200,s:5,l:52,hex:"#7e878b"},55:{h:200,s:5,l:56,hex:"#899194"},60:{h:200,s:5,l:61,hex:"#979da1"},65:{h:200,s:5,l:66,hex:"#a4aaad"},70:{h:200,s:5,l:71,hex:"#b1b6b9"},75:{h:200,s:5,l:75,hex:"#bcc0c2"},80:{h:200,s:5,l:80,hex:"#c9cdcf"},85:{h:200,s:5,l:85,hex:"#d7d9db"},90:{h:200,s:5,l:89,hex:"#e2e3e4"},95:{h:200,s:5,l:94,hex:"#eff0f0"},100:{h:200,s:5,l:98,hex:"#fafafa"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:5,max:5,minControl:{x:30,y:5},maxControl:{x:70,y:5}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey",greyscale:!0},grey20:{name:"Grey20",hue:200,stops:{0:{h:200,s:20,l:5,hex:"#0a0e0f"},5:{h:200,s:20,l:10,hex:"#141b1f"},10:{h:200,s:20,l:14,hex:"#1d262b"},15:{h:200,s:20,l:19,hex:"#27343a"},20:{h:200,s:20,l:23,hex:"#2f3f46"},25:{h:200,s:20,l:28,hex:"#394c56"},30:{h:200,s:20,l:33,hex:"#435a65"},35:{h:200,s:20,l:37,hex:"#4b6571"},40:{h:200,s:20,l:42,hex:"#567281"},45:{h:200,s:20,l:47,hex:"#608090"},50:{h:200,s:20,l:52,hex:"#6c8d9d"},55:{h:200,s:20,l:56,hex:"#7896a5"},60:{h:200,s:20,l:61,hex:"#88a2af"},65:{h:200,s:20,l:66,hex:"#97aeba"},70:{h:200,s:20,l:71,hex:"#a6bac4"},75:{h:200,s:20,l:75,hex:"#b3c3cc"},80:{h:200,s:20,l:80,hex:"#c2cfd6"},85:{h:200,s:20,l:85,hex:"#d1dbe0"},90:{h:200,s:20,l:89,hex:"#dde5e9"},95:{h:200,s:20,l:94,hex:"#edf1f3"},100:{h:200,s:20,l:98,hex:"#f9fafb"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:20,max:20,minControl:{x:30,y:20},maxControl:{x:70,y:20}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey20",greyscale:!0},grey40:{name:"Grey40",hue:200,stops:{0:{h:200,s:40,l:5,hex:"#080e12"},5:{h:200,s:40,l:10,hex:"#0f1d24"},10:{h:200,s:40,l:14,hex:"#152832"},15:{h:200,s:40,l:19,hex:"#1d3744"},20:{h:200,s:40,l:23,hex:"#234252"},25:{h:200,s:40,l:28,hex:"#2b5164"},30:{h:200,s:40,l:33,hex:"#325f76"},35:{h:200,s:40,l:37,hex:"#396b84"},40:{h:200,s:40,l:42,hex:"#407996"},45:{h:200,s:40,l:47,hex:"#4888a8"},50:{h:200,s:40,l:52,hex:"#5495b6"},55:{h:200,s:40,l:56,hex:"#629ebc"},60:{h:200,s:40,l:61,hex:"#74a9c3"},65:{h:200,s:40,l:66,hex:"#86b4cb"},70:{h:200,s:40,l:71,hex:"#97bfd3"},75:{h:200,s:40,l:75,hex:"#a6c8d9"},80:{h:200,s:40,l:80,hex:"#b8d3e0"},85:{h:200,s:40,l:85,hex:"#c9dee8"},90:{h:200,s:40,l:89,hex:"#d8e7ee"},95:{h:200,s:40,l:94,hex:"#eaf2f6"},100:{h:200,s:40,l:98,hex:"#f8fbfc"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:40,max:40,minControl:{x:30,y:40},maxControl:{x:70,y:40}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey40",greyscale:!0}},Vr={name:o_,comment:i_,uri:s_,source:c_,ranges:d_},rc=Object.keys(Vr.ranges),u_=Object.entries(Vr.ranges).filter(([,e])=>!e.greyscale).map(([e])=>e),h_=Object.entries(Vr.ranges).filter(([,e])=>e.greyscale).map(([e])=>e);var gy={exports:{}};/**
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
 */(function(e,t){(function(n,r){e.exports=r()})(Oo,function(){for(var n=function(c,u,p){return u===void 0&&(u=0),p===void 0&&(p=1),c<u?u:c>p?p:c},r=n,a=function(c){c._clipped=!1,c._unclipped=c.slice(0);for(var u=0;u<=3;u++)u<3?((c[u]<0||c[u]>255)&&(c._clipped=!0),c[u]=r(c[u],0,255)):u===3&&(c[u]=r(c[u],0,1));return c},o={},i=0,s=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];i<s.length;i+=1){var d=s[i];o["[object "+d+"]"]=d.toLowerCase()}var f=function(c){return o[Object.prototype.toString.call(c)]||"object"},m=f,b=function(c,u){return u===void 0&&(u=null),c.length>=3?Array.prototype.slice.call(c):m(c[0])=="object"&&u?u.split("").filter(function(p){return c[0][p]!==void 0}).map(function(p){return c[0][p]}):c[0]},S=f,I=function(c){if(c.length<2)return null;var u=c.length-1;return S(c[u])=="string"?c[u].toLowerCase():null},N=Math.PI,C={clip_rgb:a,limit:n,type:f,unpack:b,last:I,PI:N,TWOPI:N*2,PITHIRD:N/3,DEG2RAD:N/180,RAD2DEG:180/N},L={format:{},autodetect:[]},w=C.last,g=C.clip_rgb,y=C.type,v=L,$=function(){for(var u=[],p=arguments.length;p--;)u[p]=arguments[p];var x=this;if(y(u[0])==="object"&&u[0].constructor&&u[0].constructor===this.constructor)return u[0];var T=w(u),E=!1;if(!T){E=!0,v.sorted||(v.autodetect=v.autodetect.sort(function(W,K){return K.p-W.p}),v.sorted=!0);for(var k=0,R=v.autodetect;k<R.length;k+=1){var P=R[k];if(T=P.test.apply(P,u),T)break}}if(v.format[T]){var z=v.format[T].apply(null,E?u:u.slice(0,-1));x._rgb=g(z)}else throw new Error("unknown format: "+u);x._rgb.length===3&&x._rgb.push(1)};$.prototype.toString=function(){return y(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var _=$,M=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(M.Color,[null].concat(c)))};M.Color=_,M.version="2.4.2";var A=M,j=C.unpack,q=Math.max,he=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=j(c,"rgb"),x=p[0],T=p[1],E=p[2];x=x/255,T=T/255,E=E/255;var k=1-q(x,q(T,E)),R=k<1?1/(1-k):0,P=(1-x-k)*R,z=(1-T-k)*R,W=(1-E-k)*R;return[P,z,W,k]},se=he,Be=C.unpack,at=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=Be(c,"cmyk");var p=c[0],x=c[1],T=c[2],E=c[3],k=c.length>4?c[4]:1;return E===1?[0,0,0,k]:[p>=1?0:255*(1-p)*(1-E),x>=1?0:255*(1-x)*(1-E),T>=1?0:255*(1-T)*(1-E),k]},Ve=at,De=A,Ge=_,U=L,Z=C.unpack,J=C.type,le=se;Ge.prototype.cmyk=function(){return le(this._rgb)},De.cmyk=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(Ge,[null].concat(c,["cmyk"])))},U.format.cmyk=Ve,U.autodetect.push({p:2,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=Z(c,"cmyk"),J(c)==="array"&&c.length===4)return"cmyk"}});var fe=C.unpack,Dt=C.last,pe=function(c){return Math.round(c*100)/100},et=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=fe(c,"hsla"),x=Dt(c)||"lsa";return p[0]=pe(p[0]||0),p[1]=pe(p[1]*100)+"%",p[2]=pe(p[2]*100)+"%",x==="hsla"||p.length>3&&p[3]<1?(p[3]=p.length>3?p[3]:1,x="hsla"):p.length=3,x+"("+p.join(",")+")"},Ye=et,ht=C.unpack,Pt=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=ht(c,"rgba");var p=c[0],x=c[1],T=c[2];p/=255,x/=255,T/=255;var E=Math.min(p,x,T),k=Math.max(p,x,T),R=(k+E)/2,P,z;return k===E?(P=0,z=Number.NaN):P=R<.5?(k-E)/(k+E):(k-E)/(2-k-E),p==k?z=(x-T)/(k-E):x==k?z=2+(T-p)/(k-E):T==k&&(z=4+(p-x)/(k-E)),z*=60,z<0&&(z+=360),c.length>3&&c[3]!==void 0?[z,P,R,c[3]]:[z,P,R]},Xr=Pt,Jr=C.unpack,Xn=C.last,jl=Ye,ea=Xr,Ul=Math.round,ta=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=Jr(c,"rgba"),x=Xn(c)||"rgb";return x.substr(0,3)=="hsl"?jl(ea(p),x):(p[0]=Ul(p[0]),p[1]=Ul(p[1]),p[2]=Ul(p[2]),(x==="rgba"||p.length>3&&p[3]<1)&&(p[3]=p.length>3?p[3]:1,x="rgba"),x+"("+p.slice(0,x==="rgb"?3:4).join(",")+")")},Si=ta,Wl=C.unpack,na=Math.round,Hl=function(){for(var c,u=[],p=arguments.length;p--;)u[p]=arguments[p];u=Wl(u,"hsl");var x=u[0],T=u[1],E=u[2],k,R,P;if(T===0)k=R=P=E*255;else{var z=[0,0,0],W=[0,0,0],K=E<.5?E*(1+T):E+T-E*T,V=2*E-K,ne=x/360;z[0]=ne+1/3,z[1]=ne,z[2]=ne-1/3;for(var ee=0;ee<3;ee++)z[ee]<0&&(z[ee]+=1),z[ee]>1&&(z[ee]-=1),6*z[ee]<1?W[ee]=V+(K-V)*6*z[ee]:2*z[ee]<1?W[ee]=K:3*z[ee]<2?W[ee]=V+(K-V)*(2/3-z[ee])*6:W[ee]=V;c=[na(W[0]*255),na(W[1]*255),na(W[2]*255)],k=c[0],R=c[1],P=c[2]}return u.length>3?[k,R,P,u[3]]:[k,R,P,1]},Jn=Hl,Vl=Jn,Gl=L,Yl=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,Ci=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,br=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,ra=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,ql=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,Aa=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,ki=Math.round,_i=function(c){c=c.toLowerCase().trim();var u;if(Gl.format.named)try{return Gl.format.named(c)}catch{}if(u=c.match(Yl)){for(var p=u.slice(1,4),x=0;x<3;x++)p[x]=+p[x];return p[3]=1,p}if(u=c.match(Ci)){for(var T=u.slice(1,5),E=0;E<4;E++)T[E]=+T[E];return T}if(u=c.match(br)){for(var k=u.slice(1,4),R=0;R<3;R++)k[R]=ki(k[R]*2.55);return k[3]=1,k}if(u=c.match(ra)){for(var P=u.slice(1,5),z=0;z<3;z++)P[z]=ki(P[z]*2.55);return P[3]=+P[3],P}if(u=c.match(ql)){var W=u.slice(1,4);W[1]*=.01,W[2]*=.01;var K=Vl(W);return K[3]=1,K}if(u=c.match(Aa)){var V=u.slice(1,4);V[1]*=.01,V[2]*=.01;var ne=Vl(V);return ne[3]=+u[4],ne}};_i.test=function(c){return Yl.test(c)||Ci.test(c)||br.test(c)||ra.test(c)||ql.test(c)||Aa.test(c)};var Ti=_i,jc=A,F=_,O=L,H=C.type,Q=Si,ie=Ti;F.prototype.css=function(c){return Q(this._rgb,c)},jc.css=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(F,[null].concat(c,["css"])))},O.format.css=ie,O.autodetect.push({p:5,test:function(c){for(var u=[],p=arguments.length-1;p-- >0;)u[p]=arguments[p+1];if(!u.length&&H(c)==="string"&&ie.test(c))return"css"}});var ce=_,de=A,ue=L,ae=C.unpack;ue.format.gl=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=ae(c,"rgba");return p[0]*=255,p[1]*=255,p[2]*=255,p},de.gl=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(ce,[null].concat(c,["gl"])))},ce.prototype.gl=function(){var c=this._rgb;return[c[0]/255,c[1]/255,c[2]/255,c[3]]};var Te=C.unpack,Pe=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=Te(c,"rgb"),x=p[0],T=p[1],E=p[2],k=Math.min(x,T,E),R=Math.max(x,T,E),P=R-k,z=P*100/255,W=k/(255-P)*100,K;return P===0?K=Number.NaN:(x===R&&(K=(T-E)/P),T===R&&(K=2+(E-x)/P),E===R&&(K=4+(x-T)/P),K*=60,K<0&&(K+=360)),[K,z,W]},yt=Pe,it=C.unpack,ft=Math.floor,vn=function(){for(var c,u,p,x,T,E,k=[],R=arguments.length;R--;)k[R]=arguments[R];k=it(k,"hcg");var P=k[0],z=k[1],W=k[2],K,V,ne;W=W*255;var ee=z*255;if(z===0)K=V=ne=W;else{P===360&&(P=0),P>360&&(P-=360),P<0&&(P+=360),P/=60;var me=ft(P),Se=P-me,$e=W*(1-z),Le=$e+ee*(1-Se),Ct=$e+ee*Se,wt=$e+ee;switch(me){case 0:c=[wt,Ct,$e],K=c[0],V=c[1],ne=c[2];break;case 1:u=[Le,wt,$e],K=u[0],V=u[1],ne=u[2];break;case 2:p=[$e,wt,Ct],K=p[0],V=p[1],ne=p[2];break;case 3:x=[$e,Le,wt],K=x[0],V=x[1],ne=x[2];break;case 4:T=[Ct,$e,wt],K=T[0],V=T[1],ne=T[2];break;case 5:E=[wt,$e,Le],K=E[0],V=E[1],ne=E[2];break}}return[K,V,ne,k.length>3?k[3]:1]},aa=vn,Zl=C.unpack,Oa=C.type,$n=A,la=_,Da=L,Ql=yt;la.prototype.hcg=function(){return Ql(this._rgb)},$n.hcg=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(la,[null].concat(c,["hcg"])))},Da.format.hcg=aa,Da.autodetect.push({p:1,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=Zl(c,"hcg"),Oa(c)==="array"&&c.length===3)return"hcg"}});var Kl=C.unpack,za=C.last,ze=Math.round,Yt=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=Kl(c,"rgba"),x=p[0],T=p[1],E=p[2],k=p[3],R=za(c)||"auto";k===void 0&&(k=1),R==="auto"&&(R=k<1?"rgba":"rgb"),x=ze(x),T=ze(T),E=ze(E);var P=x<<16|T<<8|E,z="000000"+P.toString(16);z=z.substr(z.length-6);var W="0"+ze(k*255).toString(16);switch(W=W.substr(W.length-2),R.toLowerCase()){case"rgba":return"#"+z+W;case"argb":return"#"+W+z;default:return"#"+z}},er=Yt,pt=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,Xl=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,$i=function(c){if(c.match(pt)){(c.length===4||c.length===7)&&(c=c.substr(1)),c.length===3&&(c=c.split(""),c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]);var u=parseInt(c,16),p=u>>16,x=u>>8&255,T=u&255;return[p,x,T,1]}if(c.match(Xl)){(c.length===5||c.length===9)&&(c=c.substr(1)),c.length===4&&(c=c.split(""),c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]+c[3]+c[3]);var E=parseInt(c,16),k=E>>24&255,R=E>>16&255,P=E>>8&255,z=Math.round((E&255)/255*100)/100;return[k,R,P,z]}throw new Error("unknown hex color: "+c)},Ei=$i,Rb=A,ap=_,Pb=C.type,lp=L,Mb=er;ap.prototype.hex=function(c){return Mb(this._rgb,c)},Rb.hex=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(ap,[null].concat(c,["hex"])))},lp.format.hex=Ei,lp.autodetect.push({p:4,test:function(c){for(var u=[],p=arguments.length-1;p-- >0;)u[p]=arguments[p+1];if(!u.length&&Pb(c)==="string"&&[3,4,5,6,7,8,9].indexOf(c.length)>=0)return"hex"}});var Fb=C.unpack,op=C.TWOPI,Ab=Math.min,Ob=Math.sqrt,Db=Math.acos,zb=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=Fb(c,"rgb"),x=p[0],T=p[1],E=p[2];x/=255,T/=255,E/=255;var k,R=Ab(x,T,E),P=(x+T+E)/3,z=P>0?1-R/P:0;return z===0?k=NaN:(k=(x-T+(x-E))/2,k/=Ob((x-T)*(x-T)+(x-E)*(T-E)),k=Db(k),E>T&&(k=op-k),k/=op),[k*360,z,P]},Bb=zb,jb=C.unpack,Uc=C.limit,Ba=C.TWOPI,Wc=C.PITHIRD,ja=Math.cos,Ub=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=jb(c,"hsi");var p=c[0],x=c[1],T=c[2],E,k,R;return isNaN(p)&&(p=0),isNaN(x)&&(x=0),p>360&&(p-=360),p<0&&(p+=360),p/=360,p<1/3?(R=(1-x)/3,E=(1+x*ja(Ba*p)/ja(Wc-Ba*p))/3,k=1-(R+E)):p<2/3?(p-=1/3,E=(1-x)/3,k=(1+x*ja(Ba*p)/ja(Wc-Ba*p))/3,R=1-(E+k)):(p-=2/3,k=(1-x)/3,R=(1+x*ja(Ba*p)/ja(Wc-Ba*p))/3,E=1-(k+R)),E=Uc(T*E*3),k=Uc(T*k*3),R=Uc(T*R*3),[E*255,k*255,R*255,c.length>3?c[3]:1]},Wb=Ub,Hb=C.unpack,Vb=C.type,Gb=A,ip=_,sp=L,Yb=Bb;ip.prototype.hsi=function(){return Yb(this._rgb)},Gb.hsi=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(ip,[null].concat(c,["hsi"])))},sp.format.hsi=Wb,sp.autodetect.push({p:2,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=Hb(c,"hsi"),Vb(c)==="array"&&c.length===3)return"hsi"}});var qb=C.unpack,Zb=C.type,Qb=A,cp=_,dp=L,Kb=Xr;cp.prototype.hsl=function(){return Kb(this._rgb)},Qb.hsl=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(cp,[null].concat(c,["hsl"])))},dp.format.hsl=Jn,dp.autodetect.push({p:2,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=qb(c,"hsl"),Zb(c)==="array"&&c.length===3)return"hsl"}});var Xb=C.unpack,Jb=Math.min,e3=Math.max,t3=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=Xb(c,"rgb");var p=c[0],x=c[1],T=c[2],E=Jb(p,x,T),k=e3(p,x,T),R=k-E,P,z,W;return W=k/255,k===0?(P=Number.NaN,z=0):(z=R/k,p===k&&(P=(x-T)/R),x===k&&(P=2+(T-p)/R),T===k&&(P=4+(p-x)/R),P*=60,P<0&&(P+=360)),[P,z,W]},n3=t3,r3=C.unpack,a3=Math.floor,l3=function(){for(var c,u,p,x,T,E,k=[],R=arguments.length;R--;)k[R]=arguments[R];k=r3(k,"hsv");var P=k[0],z=k[1],W=k[2],K,V,ne;if(W*=255,z===0)K=V=ne=W;else{P===360&&(P=0),P>360&&(P-=360),P<0&&(P+=360),P/=60;var ee=a3(P),me=P-ee,Se=W*(1-z),$e=W*(1-z*me),Le=W*(1-z*(1-me));switch(ee){case 0:c=[W,Le,Se],K=c[0],V=c[1],ne=c[2];break;case 1:u=[$e,W,Se],K=u[0],V=u[1],ne=u[2];break;case 2:p=[Se,W,Le],K=p[0],V=p[1],ne=p[2];break;case 3:x=[Se,$e,W],K=x[0],V=x[1],ne=x[2];break;case 4:T=[Le,Se,W],K=T[0],V=T[1],ne=T[2];break;case 5:E=[W,Se,$e],K=E[0],V=E[1],ne=E[2];break}}return[K,V,ne,k.length>3?k[3]:1]},o3=l3,i3=C.unpack,s3=C.type,c3=A,up=_,hp=L,d3=n3;up.prototype.hsv=function(){return d3(this._rgb)},c3.hsv=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(up,[null].concat(c,["hsv"])))},hp.format.hsv=o3,hp.autodetect.push({p:2,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=i3(c,"hsv"),s3(c)==="array"&&c.length===3)return"hsv"}});var Ni={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},Ua=Ni,u3=C.unpack,fp=Math.pow,h3=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=u3(c,"rgb"),x=p[0],T=p[1],E=p[2],k=f3(x,T,E),R=k[0],P=k[1],z=k[2],W=116*P-16;return[W<0?0:W,500*(R-P),200*(P-z)]},Hc=function(c){return(c/=255)<=.04045?c/12.92:fp((c+.055)/1.055,2.4)},Vc=function(c){return c>Ua.t3?fp(c,1/3):c/Ua.t2+Ua.t0},f3=function(c,u,p){c=Hc(c),u=Hc(u),p=Hc(p);var x=Vc((.4124564*c+.3575761*u+.1804375*p)/Ua.Xn),T=Vc((.2126729*c+.7151522*u+.072175*p)/Ua.Yn),E=Vc((.0193339*c+.119192*u+.9503041*p)/Ua.Zn);return[x,T,E]},pp=h3,Wa=Ni,p3=C.unpack,g3=Math.pow,m3=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=p3(c,"lab");var p=c[0],x=c[1],T=c[2],E,k,R,P,z,W;return k=(p+16)/116,E=isNaN(x)?k:k+x/500,R=isNaN(T)?k:k-T/200,k=Wa.Yn*Yc(k),E=Wa.Xn*Yc(E),R=Wa.Zn*Yc(R),P=Gc(3.2404542*E-1.5371385*k-.4985314*R),z=Gc(-.969266*E+1.8760108*k+.041556*R),W=Gc(.0556434*E-.2040259*k+1.0572252*R),[P,z,W,c.length>3?c[3]:1]},Gc=function(c){return 255*(c<=.00304?12.92*c:1.055*g3(c,1/2.4)-.055)},Yc=function(c){return c>Wa.t1?c*c*c:Wa.t2*(c-Wa.t0)},gp=m3,v3=C.unpack,y3=C.type,b3=A,mp=_,vp=L,w3=pp;mp.prototype.lab=function(){return w3(this._rgb)},b3.lab=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(mp,[null].concat(c,["lab"])))},vp.format.lab=gp,vp.autodetect.push({p:2,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=v3(c,"lab"),y3(c)==="array"&&c.length===3)return"lab"}});var x3=C.unpack,S3=C.RAD2DEG,C3=Math.sqrt,k3=Math.atan2,_3=Math.round,T3=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=x3(c,"lab"),x=p[0],T=p[1],E=p[2],k=C3(T*T+E*E),R=(k3(E,T)*S3+360)%360;return _3(k*1e4)===0&&(R=Number.NaN),[x,k,R]},yp=T3,$3=C.unpack,E3=pp,N3=yp,I3=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=$3(c,"rgb"),x=p[0],T=p[1],E=p[2],k=E3(x,T,E),R=k[0],P=k[1],z=k[2];return N3(R,P,z)},L3=I3,R3=C.unpack,P3=C.DEG2RAD,M3=Math.sin,F3=Math.cos,A3=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=R3(c,"lch"),x=p[0],T=p[1],E=p[2];return isNaN(E)&&(E=0),E=E*P3,[x,F3(E)*T,M3(E)*T]},bp=A3,O3=C.unpack,D3=bp,z3=gp,B3=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=O3(c,"lch");var p=c[0],x=c[1],T=c[2],E=D3(p,x,T),k=E[0],R=E[1],P=E[2],z=z3(k,R,P),W=z[0],K=z[1],V=z[2];return[W,K,V,c.length>3?c[3]:1]},wp=B3,j3=C.unpack,U3=wp,W3=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=j3(c,"hcl").reverse();return U3.apply(void 0,p)},H3=W3,V3=C.unpack,G3=C.type,xp=A,Ii=_,qc=L,Sp=L3;Ii.prototype.lch=function(){return Sp(this._rgb)},Ii.prototype.hcl=function(){return Sp(this._rgb).reverse()},xp.lch=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(Ii,[null].concat(c,["lch"])))},xp.hcl=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(Ii,[null].concat(c,["hcl"])))},qc.format.lch=wp,qc.format.hcl=H3,["lch","hcl"].forEach(function(c){return qc.autodetect.push({p:2,test:function(){for(var u=[],p=arguments.length;p--;)u[p]=arguments[p];if(u=V3(u,c),G3(u)==="array"&&u.length===3)return c}})});var Y3={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},Cp=Y3,q3=_,kp=L,Z3=C.type,Jl=Cp,Q3=Ei,K3=er;q3.prototype.name=function(){for(var c=K3(this._rgb,"rgb"),u=0,p=Object.keys(Jl);u<p.length;u+=1){var x=p[u];if(Jl[x]===c)return x.toLowerCase()}return c},kp.format.named=function(c){if(c=c.toLowerCase(),Jl[c])return Q3(Jl[c]);throw new Error("unknown color name: "+c)},kp.autodetect.push({p:5,test:function(c){for(var u=[],p=arguments.length-1;p-- >0;)u[p]=arguments[p+1];if(!u.length&&Z3(c)==="string"&&Jl[c.toLowerCase()])return"named"}});var X3=C.unpack,J3=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=X3(c,"rgb"),x=p[0],T=p[1],E=p[2];return(x<<16)+(T<<8)+E},e4=J3,t4=C.type,n4=function(c){if(t4(c)=="number"&&c>=0&&c<=16777215){var u=c>>16,p=c>>8&255,x=c&255;return[u,p,x,1]}throw new Error("unknown num color: "+c)},r4=n4,a4=A,_p=_,Tp=L,l4=C.type,o4=e4;_p.prototype.num=function(){return o4(this._rgb)},a4.num=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(_p,[null].concat(c,["num"])))},Tp.format.num=r4,Tp.autodetect.push({p:5,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c.length===1&&l4(c[0])==="number"&&c[0]>=0&&c[0]<=16777215)return"num"}});var i4=A,Zc=_,$p=L,Ep=C.unpack,Np=C.type,Ip=Math.round;Zc.prototype.rgb=function(c){return c===void 0&&(c=!0),c===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(Ip)},Zc.prototype.rgba=function(c){return c===void 0&&(c=!0),this._rgb.slice(0,4).map(function(u,p){return p<3?c===!1?u:Ip(u):u})},i4.rgb=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(Zc,[null].concat(c,["rgb"])))},$p.format.rgb=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=Ep(c,"rgba");return p[3]===void 0&&(p[3]=1),p},$p.autodetect.push({p:3,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=Ep(c,"rgba"),Np(c)==="array"&&(c.length===3||c.length===4&&Np(c[3])=="number"&&c[3]>=0&&c[3]<=1))return"rgb"}});var Li=Math.log,s4=function(c){var u=c/100,p,x,T;return u<66?(p=255,x=u<6?0:-155.25485562709179-.44596950469579133*(x=u-2)+104.49216199393888*Li(x),T=u<20?0:-254.76935184120902+.8274096064007395*(T=u-10)+115.67994401066147*Li(T)):(p=351.97690566805693+.114206453784165*(p=u-55)-40.25366309332127*Li(p),x=325.4494125711974+.07943456536662342*(x=u-50)-28.0852963507957*Li(x),T=255),[p,x,T,1]},Lp=s4,c4=Lp,d4=C.unpack,u4=Math.round,h4=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];for(var p=d4(c,"rgb"),x=p[0],T=p[2],E=1e3,k=4e4,R=.4,P;k-E>R;){P=(k+E)*.5;var z=c4(P);z[2]/z[0]>=T/x?k=P:E=P}return u4(P)},f4=h4,Qc=A,Ri=_,Kc=L,p4=f4;Ri.prototype.temp=Ri.prototype.kelvin=Ri.prototype.temperature=function(){return p4(this._rgb)},Qc.temp=Qc.kelvin=Qc.temperature=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(Ri,[null].concat(c,["temp"])))},Kc.format.temp=Kc.format.kelvin=Kc.format.temperature=Lp;var g4=C.unpack,Xc=Math.cbrt,m4=Math.pow,v4=Math.sign,y4=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=g4(c,"rgb"),x=p[0],T=p[1],E=p[2],k=[Jc(x/255),Jc(T/255),Jc(E/255)],R=k[0],P=k[1],z=k[2],W=Xc(.4122214708*R+.5363325363*P+.0514459929*z),K=Xc(.2119034982*R+.6806995451*P+.1073969566*z),V=Xc(.0883024619*R+.2817188376*P+.6299787005*z);return[.2104542553*W+.793617785*K-.0040720468*V,1.9779984951*W-2.428592205*K+.4505937099*V,.0259040371*W+.7827717662*K-.808675766*V]},Rp=y4;function Jc(c){var u=Math.abs(c);return u<.04045?c/12.92:(v4(c)||1)*m4((u+.055)/1.055,2.4)}var b4=C.unpack,Pi=Math.pow,w4=Math.sign,x4=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=b4(c,"lab");var p=c[0],x=c[1],T=c[2],E=Pi(p+.3963377774*x+.2158037573*T,3),k=Pi(p-.1055613458*x-.0638541728*T,3),R=Pi(p-.0894841775*x-1.291485548*T,3);return[255*ed(4.0767416621*E-3.3077115913*k+.2309699292*R),255*ed(-1.2684380046*E+2.6097574011*k-.3413193965*R),255*ed(-.0041960863*E-.7034186147*k+1.707614701*R),c.length>3?c[3]:1]},Pp=x4;function ed(c){var u=Math.abs(c);return u>.0031308?(w4(c)||1)*(1.055*Pi(u,1/2.4)-.055):c*12.92}var S4=C.unpack,C4=C.type,k4=A,Mp=_,Fp=L,_4=Rp;Mp.prototype.oklab=function(){return _4(this._rgb)},k4.oklab=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(Mp,[null].concat(c,["oklab"])))},Fp.format.oklab=Pp,Fp.autodetect.push({p:3,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=S4(c,"oklab"),C4(c)==="array"&&c.length===3)return"oklab"}});var T4=C.unpack,$4=Rp,E4=yp,N4=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=T4(c,"rgb"),x=p[0],T=p[1],E=p[2],k=$4(x,T,E),R=k[0],P=k[1],z=k[2];return E4(R,P,z)},I4=N4,L4=C.unpack,R4=bp,P4=Pp,M4=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=L4(c,"lch");var p=c[0],x=c[1],T=c[2],E=R4(p,x,T),k=E[0],R=E[1],P=E[2],z=P4(k,R,P),W=z[0],K=z[1],V=z[2];return[W,K,V,c.length>3?c[3]:1]},F4=M4,A4=C.unpack,O4=C.type,D4=A,Ap=_,Op=L,z4=I4;Ap.prototype.oklch=function(){return z4(this._rgb)},D4.oklch=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(Ap,[null].concat(c,["oklch"])))},Op.format.oklch=F4,Op.autodetect.push({p:3,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=A4(c,"oklch"),O4(c)==="array"&&c.length===3)return"oklch"}});var Dp=_,B4=C.type;Dp.prototype.alpha=function(c,u){return u===void 0&&(u=!1),c!==void 0&&B4(c)==="number"?u?(this._rgb[3]=c,this):new Dp([this._rgb[0],this._rgb[1],this._rgb[2],c],"rgb"):this._rgb[3]};var j4=_;j4.prototype.clipped=function(){return this._rgb._clipped||!1};var oa=_,U4=Ni;oa.prototype.darken=function(c){c===void 0&&(c=1);var u=this,p=u.lab();return p[0]-=U4.Kn*c,new oa(p,"lab").alpha(u.alpha(),!0)},oa.prototype.brighten=function(c){return c===void 0&&(c=1),this.darken(-c)},oa.prototype.darker=oa.prototype.darken,oa.prototype.brighter=oa.prototype.brighten;var W4=_;W4.prototype.get=function(c){var u=c.split("."),p=u[0],x=u[1],T=this[p]();if(x){var E=p.indexOf(x)-(p.substr(0,2)==="ok"?2:0);if(E>-1)return T[E];throw new Error("unknown channel "+x+" in mode "+p)}else return T};var Ha=_,H4=C.type,V4=Math.pow,G4=1e-7,Y4=20;Ha.prototype.luminance=function(c){if(c!==void 0&&H4(c)==="number"){if(c===0)return new Ha([0,0,0,this._rgb[3]],"rgb");if(c===1)return new Ha([255,255,255,this._rgb[3]],"rgb");var u=this.luminance(),p="rgb",x=Y4,T=function(k,R){var P=k.interpolate(R,.5,p),z=P.luminance();return Math.abs(c-z)<G4||!x--?P:z>c?T(k,P):T(P,R)},E=(u>c?T(new Ha([0,0,0]),this):T(this,new Ha([255,255,255]))).rgb();return new Ha(E.concat([this._rgb[3]]))}return q4.apply(void 0,this._rgb.slice(0,3))};var q4=function(c,u,p){return c=td(c),u=td(u),p=td(p),.2126*c+.7152*u+.0722*p},td=function(c){return c/=255,c<=.03928?c/12.92:V4((c+.055)/1.055,2.4)},rn={},zp=_,Bp=C.type,Mi=rn,jp=function(c,u,p){p===void 0&&(p=.5);for(var x=[],T=arguments.length-3;T-- >0;)x[T]=arguments[T+3];var E=x[0]||"lrgb";if(!Mi[E]&&!x.length&&(E=Object.keys(Mi)[0]),!Mi[E])throw new Error("interpolation mode "+E+" is not defined");return Bp(c)!=="object"&&(c=new zp(c)),Bp(u)!=="object"&&(u=new zp(u)),Mi[E](c,u,p).alpha(c.alpha()+p*(u.alpha()-c.alpha()))},Up=_,Z4=jp;Up.prototype.mix=Up.prototype.interpolate=function(c,u){u===void 0&&(u=.5);for(var p=[],x=arguments.length-2;x-- >0;)p[x]=arguments[x+2];return Z4.apply(void 0,[this,c,u].concat(p))};var Wp=_;Wp.prototype.premultiply=function(c){c===void 0&&(c=!1);var u=this._rgb,p=u[3];return c?(this._rgb=[u[0]*p,u[1]*p,u[2]*p,p],this):new Wp([u[0]*p,u[1]*p,u[2]*p,p],"rgb")};var nd=_,Q4=Ni;nd.prototype.saturate=function(c){c===void 0&&(c=1);var u=this,p=u.lch();return p[1]+=Q4.Kn*c,p[1]<0&&(p[1]=0),new nd(p,"lch").alpha(u.alpha(),!0)},nd.prototype.desaturate=function(c){return c===void 0&&(c=1),this.saturate(-c)};var Hp=_,Vp=C.type;Hp.prototype.set=function(c,u,p){p===void 0&&(p=!1);var x=c.split("."),T=x[0],E=x[1],k=this[T]();if(E){var R=T.indexOf(E)-(T.substr(0,2)==="ok"?2:0);if(R>-1){if(Vp(u)=="string")switch(u.charAt(0)){case"+":k[R]+=+u;break;case"-":k[R]+=+u;break;case"*":k[R]*=+u.substr(1);break;case"/":k[R]/=+u.substr(1);break;default:k[R]=+u}else if(Vp(u)==="number")k[R]=u;else throw new Error("unsupported value for Color.set");var P=new Hp(k,T);return p?(this._rgb=P._rgb,this):P}throw new Error("unknown channel "+E+" in mode "+T)}else return k};var K4=_,X4=function(c,u,p){var x=c._rgb,T=u._rgb;return new K4(x[0]+p*(T[0]-x[0]),x[1]+p*(T[1]-x[1]),x[2]+p*(T[2]-x[2]),"rgb")};rn.rgb=X4;var J4=_,rd=Math.sqrt,Va=Math.pow,e5=function(c,u,p){var x=c._rgb,T=x[0],E=x[1],k=x[2],R=u._rgb,P=R[0],z=R[1],W=R[2];return new J4(rd(Va(T,2)*(1-p)+Va(P,2)*p),rd(Va(E,2)*(1-p)+Va(z,2)*p),rd(Va(k,2)*(1-p)+Va(W,2)*p),"rgb")};rn.lrgb=e5;var t5=_,n5=function(c,u,p){var x=c.lab(),T=u.lab();return new t5(x[0]+p*(T[0]-x[0]),x[1]+p*(T[1]-x[1]),x[2]+p*(T[2]-x[2]),"lab")};rn.lab=n5;var Gp=_,Ga=function(c,u,p,x){var T,E,k,R;x==="hsl"?(k=c.hsl(),R=u.hsl()):x==="hsv"?(k=c.hsv(),R=u.hsv()):x==="hcg"?(k=c.hcg(),R=u.hcg()):x==="hsi"?(k=c.hsi(),R=u.hsi()):x==="lch"||x==="hcl"?(x="hcl",k=c.hcl(),R=u.hcl()):x==="oklch"&&(k=c.oklch().reverse(),R=u.oklch().reverse());var P,z,W,K,V,ne;(x.substr(0,1)==="h"||x==="oklch")&&(T=k,P=T[0],W=T[1],V=T[2],E=R,z=E[0],K=E[1],ne=E[2]);var ee,me,Se,$e;return!isNaN(P)&&!isNaN(z)?(z>P&&z-P>180?$e=z-(P+360):z<P&&P-z>180?$e=z+360-P:$e=z-P,me=P+p*$e):isNaN(P)?isNaN(z)?me=Number.NaN:(me=z,(V==1||V==0)&&x!="hsv"&&(ee=K)):(me=P,(ne==1||ne==0)&&x!="hsv"&&(ee=W)),ee===void 0&&(ee=W+p*(K-W)),Se=V+p*(ne-V),x==="oklch"?new Gp([Se,ee,me],x):new Gp([me,ee,Se],x)},r5=Ga,Yp=function(c,u,p){return r5(c,u,p,"lch")};rn.lch=Yp,rn.hcl=Yp;var a5=_,l5=function(c,u,p){var x=c.num(),T=u.num();return new a5(x+p*(T-x),"num")};rn.num=l5;var o5=Ga,i5=function(c,u,p){return o5(c,u,p,"hcg")};rn.hcg=i5;var s5=Ga,c5=function(c,u,p){return s5(c,u,p,"hsi")};rn.hsi=c5;var d5=Ga,u5=function(c,u,p){return d5(c,u,p,"hsl")};rn.hsl=u5;var h5=Ga,f5=function(c,u,p){return h5(c,u,p,"hsv")};rn.hsv=f5;var p5=_,g5=function(c,u,p){var x=c.oklab(),T=u.oklab();return new p5(x[0]+p*(T[0]-x[0]),x[1]+p*(T[1]-x[1]),x[2]+p*(T[2]-x[2]),"oklab")};rn.oklab=g5;var m5=Ga,v5=function(c,u,p){return m5(c,u,p,"oklch")};rn.oklch=v5;var ad=_,y5=C.clip_rgb,ld=Math.pow,od=Math.sqrt,id=Math.PI,qp=Math.cos,Zp=Math.sin,b5=Math.atan2,w5=function(c,u,p){u===void 0&&(u="lrgb"),p===void 0&&(p=null);var x=c.length;p||(p=Array.from(new Array(x)).map(function(){return 1}));var T=x/p.reduce(function(me,Se){return me+Se});if(p.forEach(function(me,Se){p[Se]*=T}),c=c.map(function(me){return new ad(me)}),u==="lrgb")return x5(c,p);for(var E=c.shift(),k=E.get(u),R=[],P=0,z=0,W=0;W<k.length;W++)if(k[W]=(k[W]||0)*p[0],R.push(isNaN(k[W])?0:p[0]),u.charAt(W)==="h"&&!isNaN(k[W])){var K=k[W]/180*id;P+=qp(K)*p[0],z+=Zp(K)*p[0]}var V=E.alpha()*p[0];c.forEach(function(me,Se){var $e=me.get(u);V+=me.alpha()*p[Se+1];for(var Le=0;Le<k.length;Le++)if(!isNaN($e[Le]))if(R[Le]+=p[Se+1],u.charAt(Le)==="h"){var Ct=$e[Le]/180*id;P+=qp(Ct)*p[Se+1],z+=Zp(Ct)*p[Se+1]}else k[Le]+=$e[Le]*p[Se+1]});for(var ne=0;ne<k.length;ne++)if(u.charAt(ne)==="h"){for(var ee=b5(z/R[ne],P/R[ne])/id*180;ee<0;)ee+=360;for(;ee>=360;)ee-=360;k[ne]=ee}else k[ne]=k[ne]/R[ne];return V/=x,new ad(k,u).alpha(V>.99999?1:V,!0)},x5=function(c,u){for(var p=c.length,x=[0,0,0,0],T=0;T<c.length;T++){var E=c[T],k=u[T]/p,R=E._rgb;x[0]+=ld(R[0],2)*k,x[1]+=ld(R[1],2)*k,x[2]+=ld(R[2],2)*k,x[3]+=R[3]*k}return x[0]=od(x[0]),x[1]=od(x[1]),x[2]=od(x[2]),x[3]>.9999999&&(x[3]=1),new ad(y5(x))},En=A,Ya=C.type,S5=Math.pow,sd=function(c){var u="rgb",p=En("#ccc"),x=0,T=[0,1],E=[],k=[0,0],R=!1,P=[],z=!1,W=0,K=1,V=!1,ne={},ee=!0,me=1,Se=function(G){if(G=G||["#fff","#000"],G&&Ya(G)==="string"&&En.brewer&&En.brewer[G.toLowerCase()]&&(G=En.brewer[G.toLowerCase()]),Ya(G)==="array"){G.length===1&&(G=[G[0],G[0]]),G=G.slice(0);for(var oe=0;oe<G.length;oe++)G[oe]=En(G[oe]);E.length=0;for(var be=0;be<G.length;be++)E.push(be/(G.length-1))}return qt(),P=G},$e=function(G){if(R!=null){for(var oe=R.length-1,be=0;be<oe&&G>=R[be];)be++;return be-1}return 0},Le=function(G){return G},Ct=function(G){return G},wt=function(G,oe){var be,ve;if(oe==null&&(oe=!1),isNaN(G)||G===null)return p;if(oe)ve=G;else if(R&&R.length>2){var kt=$e(G);ve=kt/(R.length-2)}else K!==W?ve=(G-W)/(K-W):ve=1;ve=Ct(ve),oe||(ve=Le(ve)),me!==1&&(ve=S5(ve,me)),ve=k[0]+ve*(1-k[0]-k[1]),ve=Math.min(1,Math.max(0,ve));var je=Math.floor(ve*1e4);if(ee&&ne[je])be=ne[je];else{if(Ya(P)==="array")for(var Ee=0;Ee<E.length;Ee++){var Me=E[Ee];if(ve<=Me){be=P[Ee];break}if(ve>=Me&&Ee===E.length-1){be=P[Ee];break}if(ve>Me&&ve<E[Ee+1]){ve=(ve-Me)/(E[Ee+1]-Me),be=En.interpolate(P[Ee],P[Ee+1],ve,u);break}}else Ya(P)==="function"&&(be=P(ve));ee&&(ne[je]=be)}return be},qt=function(){return ne={}};Se(c);var _e=function(G){var oe=En(wt(G));return z&&oe[z]?oe[z]():oe};return _e.classes=function(G){if(G!=null){if(Ya(G)==="array")R=G,T=[G[0],G[G.length-1]];else{var oe=En.analyze(T);G===0?R=[oe.min,oe.max]:R=En.limits(oe,"e",G)}return _e}return R},_e.domain=function(G){if(!arguments.length)return T;W=G[0],K=G[G.length-1],E=[];var oe=P.length;if(G.length===oe&&W!==K)for(var be=0,ve=Array.from(G);be<ve.length;be+=1){var kt=ve[be];E.push((kt-W)/(K-W))}else{for(var je=0;je<oe;je++)E.push(je/(oe-1));if(G.length>2){var Ee=G.map(function(Fe,Ae){return Ae/(G.length-1)}),Me=G.map(function(Fe){return(Fe-W)/(K-W)});Me.every(function(Fe,Ae){return Ee[Ae]===Fe})||(Ct=function(Fe){if(Fe<=0||Fe>=1)return Fe;for(var Ae=0;Fe>=Me[Ae+1];)Ae++;var In=(Fe-Me[Ae])/(Me[Ae+1]-Me[Ae]),Sr=Ee[Ae]+In*(Ee[Ae+1]-Ee[Ae]);return Sr})}}return T=[W,K],_e},_e.mode=function(G){return arguments.length?(u=G,qt(),_e):u},_e.range=function(G,oe){return Se(G),_e},_e.out=function(G){return z=G,_e},_e.spread=function(G){return arguments.length?(x=G,_e):x},_e.correctLightness=function(G){return G==null&&(G=!0),V=G,qt(),V?Le=function(oe){for(var be=wt(0,!0).lab()[0],ve=wt(1,!0).lab()[0],kt=be>ve,je=wt(oe,!0).lab()[0],Ee=be+(ve-be)*oe,Me=je-Ee,Fe=0,Ae=1,In=20;Math.abs(Me)>.01&&In-- >0;)(function(){return kt&&(Me*=-1),Me<0?(Fe=oe,oe+=(Ae-oe)*.5):(Ae=oe,oe+=(Fe-oe)*.5),je=wt(oe,!0).lab()[0],Me=je-Ee})();return oe}:Le=function(oe){return oe},_e},_e.padding=function(G){return G!=null?(Ya(G)==="number"&&(G=[G,G]),k=G,_e):k},_e.colors=function(G,oe){arguments.length<2&&(oe="hex");var be=[];if(arguments.length===0)be=P.slice(0);else if(G===1)be=[_e(.5)];else if(G>1){var ve=T[0],kt=T[1]-ve;be=C5(0,G,!1).map(function(Ae){return _e(ve+Ae/(G-1)*kt)})}else{c=[];var je=[];if(R&&R.length>2)for(var Ee=1,Me=R.length,Fe=1<=Me;Fe?Ee<Me:Ee>Me;Fe?Ee++:Ee--)je.push((R[Ee-1]+R[Ee])*.5);else je=T;be=je.map(function(Ae){return _e(Ae)})}return En[oe]&&(be=be.map(function(Ae){return Ae[oe]()})),be},_e.cache=function(G){return G!=null?(ee=G,_e):ee},_e.gamma=function(G){return G!=null?(me=G,_e):me},_e.nodata=function(G){return G!=null?(p=En(G),_e):p},_e};function C5(c,u,p){for(var x=[],T=c<u,E=p?T?u+1:u-1:u,k=c;T?k<E:k>E;T?k++:k--)x.push(k);return x}var eo=_,k5=sd,_5=function(c){for(var u=[1,1],p=1;p<c;p++){for(var x=[1],T=1;T<=u.length;T++)x[T]=(u[T]||0)+u[T-1];u=x}return u},T5=function(c){var u,p,x,T,E,k,R;if(c=c.map(function(V){return new eo(V)}),c.length===2)u=c.map(function(V){return V.lab()}),E=u[0],k=u[1],T=function(V){var ne=[0,1,2].map(function(ee){return E[ee]+V*(k[ee]-E[ee])});return new eo(ne,"lab")};else if(c.length===3)p=c.map(function(V){return V.lab()}),E=p[0],k=p[1],R=p[2],T=function(V){var ne=[0,1,2].map(function(ee){return(1-V)*(1-V)*E[ee]+2*(1-V)*V*k[ee]+V*V*R[ee]});return new eo(ne,"lab")};else if(c.length===4){var P;x=c.map(function(V){return V.lab()}),E=x[0],k=x[1],R=x[2],P=x[3],T=function(V){var ne=[0,1,2].map(function(ee){return(1-V)*(1-V)*(1-V)*E[ee]+3*(1-V)*(1-V)*V*k[ee]+3*(1-V)*V*V*R[ee]+V*V*V*P[ee]});return new eo(ne,"lab")}}else if(c.length>=5){var z,W,K;z=c.map(function(V){return V.lab()}),K=c.length-1,W=_5(K),T=function(V){var ne=1-V,ee=[0,1,2].map(function(me){return z.reduce(function(Se,$e,Le){return Se+W[Le]*Math.pow(ne,K-Le)*Math.pow(V,Le)*$e[me]},0)});return new eo(ee,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return T},$5=function(c){var u=T5(c);return u.scale=function(){return k5(u)},u},cd=A,Nn=function(c,u,p){if(!Nn[p])throw new Error("unknown blend mode "+p);return Nn[p](c,u)},wr=function(c){return function(u,p){var x=cd(p).rgb(),T=cd(u).rgb();return cd.rgb(c(x,T))}},xr=function(c){return function(u,p){var x=[];return x[0]=c(u[0],p[0]),x[1]=c(u[1],p[1]),x[2]=c(u[2],p[2]),x}},E5=function(c){return c},N5=function(c,u){return c*u/255},I5=function(c,u){return c>u?u:c},L5=function(c,u){return c>u?c:u},R5=function(c,u){return 255*(1-(1-c/255)*(1-u/255))},P5=function(c,u){return u<128?2*c*u/255:255*(1-2*(1-c/255)*(1-u/255))},M5=function(c,u){return 255*(1-(1-u/255)/(c/255))},F5=function(c,u){return c===255?255:(c=255*(u/255)/(1-c/255),c>255?255:c)};Nn.normal=wr(xr(E5)),Nn.multiply=wr(xr(N5)),Nn.screen=wr(xr(R5)),Nn.overlay=wr(xr(P5)),Nn.darken=wr(xr(I5)),Nn.lighten=wr(xr(L5)),Nn.dodge=wr(xr(F5)),Nn.burn=wr(xr(M5));for(var A5=Nn,dd=C.type,O5=C.clip_rgb,D5=C.TWOPI,z5=Math.pow,B5=Math.sin,j5=Math.cos,Qp=A,U5=function(c,u,p,x,T){c===void 0&&(c=300),u===void 0&&(u=-1.5),p===void 0&&(p=1),x===void 0&&(x=1),T===void 0&&(T=[0,1]);var E=0,k;dd(T)==="array"?k=T[1]-T[0]:(k=0,T=[T,T]);var R=function(P){var z=D5*((c+120)/360+u*P),W=z5(T[0]+k*P,x),K=E!==0?p[0]+P*E:p,V=K*W*(1-W)/2,ne=j5(z),ee=B5(z),me=W+V*(-.14861*ne+1.78277*ee),Se=W+V*(-.29227*ne-.90649*ee),$e=W+V*(1.97294*ne);return Qp(O5([me*255,Se*255,$e*255,1]))};return R.start=function(P){return P==null?c:(c=P,R)},R.rotations=function(P){return P==null?u:(u=P,R)},R.gamma=function(P){return P==null?x:(x=P,R)},R.hue=function(P){return P==null?p:(p=P,dd(p)==="array"?(E=p[1]-p[0],E===0&&(p=p[1])):E=0,R)},R.lightness=function(P){return P==null?T:(dd(P)==="array"?(T=P,k=P[1]-P[0]):(T=[P,P],k=0),R)},R.scale=function(){return Qp.scale(R)},R.hue(p),R},W5=_,H5="0123456789abcdef",V5=Math.floor,G5=Math.random,Y5=function(){for(var c="#",u=0;u<6;u++)c+=H5.charAt(V5(G5()*16));return new W5(c,"hex")},ud=f,Kp=Math.log,q5=Math.pow,Z5=Math.floor,Q5=Math.abs,Xp=function(c,u){u===void 0&&(u=null);var p={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return ud(c)==="object"&&(c=Object.values(c)),c.forEach(function(x){u&&ud(x)==="object"&&(x=x[u]),x!=null&&!isNaN(x)&&(p.values.push(x),p.sum+=x,x<p.min&&(p.min=x),x>p.max&&(p.max=x),p.count+=1)}),p.domain=[p.min,p.max],p.limits=function(x,T){return Jp(p,x,T)},p},Jp=function(c,u,p){u===void 0&&(u="equal"),p===void 0&&(p=7),ud(c)=="array"&&(c=Xp(c));var x=c.min,T=c.max,E=c.values.sort(function(fd,pd){return fd-pd});if(p===1)return[x,T];var k=[];if(u.substr(0,1)==="c"&&(k.push(x),k.push(T)),u.substr(0,1)==="e"){k.push(x);for(var R=1;R<p;R++)k.push(x+R/p*(T-x));k.push(T)}else if(u.substr(0,1)==="l"){if(x<=0)throw new Error("Logarithmic scales are only possible for values > 0");var P=Math.LOG10E*Kp(x),z=Math.LOG10E*Kp(T);k.push(x);for(var W=1;W<p;W++)k.push(q5(10,P+W/p*(z-P)));k.push(T)}else if(u.substr(0,1)==="q"){k.push(x);for(var K=1;K<p;K++){var V=(E.length-1)*K/p,ne=Z5(V);if(ne===V)k.push(E[ne]);else{var ee=V-ne;k.push(E[ne]*(1-ee)+E[ne+1]*ee)}}k.push(T)}else if(u.substr(0,1)==="k"){var me,Se=E.length,$e=new Array(Se),Le=new Array(p),Ct=!0,wt=0,qt=null;qt=[],qt.push(x);for(var _e=1;_e<p;_e++)qt.push(x+_e/p*(T-x));for(qt.push(T);Ct;){for(var G=0;G<p;G++)Le[G]=0;for(var oe=0;oe<Se;oe++)for(var be=E[oe],ve=Number.MAX_VALUE,kt=void 0,je=0;je<p;je++){var Ee=Q5(qt[je]-be);Ee<ve&&(ve=Ee,kt=je),Le[kt]++,$e[oe]=kt}for(var Me=new Array(p),Fe=0;Fe<p;Fe++)Me[Fe]=null;for(var Ae=0;Ae<Se;Ae++)me=$e[Ae],Me[me]===null?Me[me]=E[Ae]:Me[me]+=E[Ae];for(var In=0;In<p;In++)Me[In]*=1/Le[In];Ct=!1;for(var Sr=0;Sr<p;Sr++)if(Me[Sr]!==qt[Sr]){Ct=!0;break}qt=Me,wt++,wt>200&&(Ct=!1)}for(var Cr={},qa=0;qa<p;qa++)Cr[qa]=[];for(var Za=0;Za<Se;Za++)me=$e[Za],Cr[me].push(E[Za]);for(var nr=[],ia=0;ia<p;ia++)nr.push(Cr[ia][0]),nr.push(Cr[ia][Cr[ia].length-1]);nr=nr.sort(function(fd,pd){return fd-pd}),k.push(nr[0]);for(var to=1;to<nr.length;to+=2){var sa=nr[to];!isNaN(sa)&&k.indexOf(sa)===-1&&k.push(sa)}}return k},e0={analyze:Xp,limits:Jp},t0=_,K5=function(c,u){c=new t0(c),u=new t0(u);var p=c.luminance(),x=u.luminance();return p>x?(p+.05)/(x+.05):(x+.05)/(p+.05)},n0=_,tr=Math.sqrt,st=Math.pow,X5=Math.min,J5=Math.max,r0=Math.atan2,a0=Math.abs,Fi=Math.cos,l0=Math.sin,e6=Math.exp,o0=Math.PI,t6=function(c,u,p,x,T){p===void 0&&(p=1),x===void 0&&(x=1),T===void 0&&(T=1);var E=function(sa){return 360*sa/(2*o0)},k=function(sa){return 2*o0*sa/360};c=new n0(c),u=new n0(u);var R=Array.from(c.lab()),P=R[0],z=R[1],W=R[2],K=Array.from(u.lab()),V=K[0],ne=K[1],ee=K[2],me=(P+V)/2,Se=tr(st(z,2)+st(W,2)),$e=tr(st(ne,2)+st(ee,2)),Le=(Se+$e)/2,Ct=.5*(1-tr(st(Le,7)/(st(Le,7)+st(25,7)))),wt=z*(1+Ct),qt=ne*(1+Ct),_e=tr(st(wt,2)+st(W,2)),G=tr(st(qt,2)+st(ee,2)),oe=(_e+G)/2,be=E(r0(W,wt)),ve=E(r0(ee,qt)),kt=be>=0?be:be+360,je=ve>=0?ve:ve+360,Ee=a0(kt-je)>180?(kt+je+360)/2:(kt+je)/2,Me=1-.17*Fi(k(Ee-30))+.24*Fi(k(2*Ee))+.32*Fi(k(3*Ee+6))-.2*Fi(k(4*Ee-63)),Fe=je-kt;Fe=a0(Fe)<=180?Fe:je<=kt?Fe+360:Fe-360,Fe=2*tr(_e*G)*l0(k(Fe)/2);var Ae=V-P,In=G-_e,Sr=1+.015*st(me-50,2)/tr(20+st(me-50,2)),Cr=1+.045*oe,qa=1+.015*oe*Me,Za=30*e6(-st((Ee-275)/25,2)),nr=2*tr(st(oe,7)/(st(oe,7)+st(25,7))),ia=-nr*l0(2*k(Za)),to=tr(st(Ae/(p*Sr),2)+st(In/(x*Cr),2)+st(Fe/(T*qa),2)+ia*(In/(x*Cr))*(Fe/(T*qa)));return J5(0,X5(100,to))},i0=_,n6=function(c,u,p){p===void 0&&(p="lab"),c=new i0(c),u=new i0(u);var x=c.get(p),T=u.get(p),E=0;for(var k in x){var R=(x[k]||0)-(T[k]||0);E+=R*R}return Math.sqrt(E)},r6=_,a6=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];try{return new(Function.prototype.bind.apply(r6,[null].concat(c))),!0}catch{return!1}},s0=A,c0=sd,l6={cool:function(){return c0([s0.hsl(180,1,.9),s0.hsl(250,.7,.4)])},hot:function(){return c0(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Ai={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},hd=0,d0=Object.keys(Ai);hd<d0.length;hd+=1){var u0=d0[hd];Ai[u0.toLowerCase()]=Ai[u0]}var o6=Ai,bt=A;bt.average=w5,bt.bezier=$5,bt.blend=A5,bt.cubehelix=U5,bt.mix=bt.interpolate=jp,bt.random=Y5,bt.scale=sd,bt.analyze=e0.analyze,bt.contrast=K5,bt.deltaE=t6,bt.distance=n6,bt.limits=e0.limits,bt.valid=a6,bt.scales=l6,bt.colors=Cp,bt.brewer=o6;var i6=bt;return i6})})(gy);var f_=gy.exports;const p_=Gr(f_);function g_(e){const{h:t,s:n,l:r}=e;return p_.hsl(t,n/100,r/100)}const m_=e=>g_(e).luminance(),my=e=>m_(e)<.5,Cl=({label:e,checked:t,toggle:n})=>h("label",{className:"checkbox no-focus",children:[l("input",{type:"checkbox",checked:t,onChange:n}),e]}),vy=`// redefine any of the following hues to taste...
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
`,v_=()=>{const[e,t]=B.useState({names:!1,info:!1,show5s:!1}),n=i=>t(s=>({...s,[i]:!s[i]})),r=()=>n("names"),a=()=>n("info"),o=()=>n("show5s");return h("div",{className:"prose",children:[l("h1",{children:"Standard Colors"}),l("p",{children:"The following greyscale ranges are also defined."}),h("div",{className:"flex space end",children:[l("h2",{children:"Greyscale Ranges"}),h("div",{className:"text-right color-options",children:[l(Cl,{label:"Show Names",checked:e.names,toggle:r}),l(Cl,{label:"Show Info",checked:e.info,toggle:a}),l(Cl,{label:"Show 5s",checked:e.show5s,toggle:o})]})]}),l("div",{className:`ranges ${e.names?"names":"nameless"}`,children:rc.filter(i=>Vr.ranges[i].greyscale).map(i=>l(y_,{uri:i,range:Vr.ranges[i],options:e},i))}),l("h2",{children:"Brand Hue"}),h("p",{children:["The greyscale ranges are designed to based on your primary brand color. The ",l("code",{children:"grey"})," range is desaturated to around 5%.  The"," ",l("code",{children:"grey20"})," and ",l("code",{children:"grey40"})," ranges are saturated to around 20% and 40% respectively."]}),h("p",{children:["The brand color for this website is ",l("code",{children:"violet"})," which is why these greyscales have a violet tinge to them."]}),h("p",{children:["Each of the colours show above has a corresponding SCSS variable composed of the color name and stop delimited by a hyphen, e.g."," ",l("code",{children:"$red-0"})," through to ",l("code",{children:"$grey-100"}),".  They are also defined as CSS custom properties, e.g. ",l("code",{children:"--red-0"})," through to ",l("code",{children:"--grey-100"}),"."]}),h("p",{children:["Each range of colors is built from a base hue.  These are defined in SASS variables using the SASS ",l("code",{children:"!default"})," flag.  If you want to adjust the hues you can set any of these SASS variables before importing the main ",l("code",{children:"badger-ui.scss"})," component."]}),l(Ke,{code:vy,caption:"Customising Hues",language:"scss",expand:!0}),l("h2",{children:"TODO"}),h("ul",{children:[l("li",{children:"Editing or updating a palette using Badger Color"}),l("li",{children:"Expanding the palette into SCSS files"}),l("li",{children:"Customising the palette using SCSS variables"}),l("li",{children:"Customising the color hues"}),l("li",{children:"Defining your brand color"}),l("li",{children:"Adding/editing CSS scopes"}),l("li",{children:"Including or omitting colors"})]})]})},y_=({uri:e,range:t,options:n})=>h("div",{className:"range",children:[n.names&&l("h3",{children:t.name}),l("div",{className:"swatches",children:vi(0,100,n.show5s?5:10).map(r=>l(b_,{uri:e,range:t,stop:r,options:n},r))})]}),b_=({uri:e,range:t,stop:n,options:r})=>{const a=t.stops[n];return l("div",{className:`swatch ${my(a)?"dark":"light"}`,style:{backgroundColor:`var(--${e}-${n})`},children:r.info&&l(yy,{uri:e,stop:n,color:a})})},yy=({uri:e,stop:t,color:n})=>h("div",{children:[h("div",{className:"stop",children:[e,"-",t]}),h("div",{className:"specs",children:[n.hex,l("br",{}),"h:",n.h,"°",l("br",{}),"s:",n.s,"%",l("br",{}),"l:",n.l,"%"]})]}),w_=Object.freeze(Object.defineProperty({__proto__:null,Info:yy,default:v_},Symbol.toStringTag,{value:"Module"})),x_=`// define the hues for the greyscale colors...
$grey-hue:   40;
$grey20-hue: 40;
$grey40-hue: 40;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,bi=({children:e,code:t,caption:n,language:r,expand:a,className:o=""})=>h("div",{className:`grid-2 gap-8 start stack-desktop ${o}`,children:[l("div",{children:e}),l(Ke,{code:t,caption:n,language:r,expand:a,className:"mar-b-8"})]}),S_=()=>{const[e,t]=B.useState({names:!1,info:!1,show5s:!1}),n=i=>t(s=>({...s,[i]:!s[i]})),r=()=>n("names"),a=()=>n("info"),o=()=>n("show5s");return h("div",{className:"prose",children:[l("h1",{children:"Standard Colors"}),h("p",{children:["The following standard color ranges are defined.  This palette was created using ",l("a",{href:"https://abw.github.io/badger-color",children:"Badger Color"}),", a companion to this library.  You can use it to clone and update this palette or to create your own palettes from scratch."]}),h("p",{children:["Each color range is divided into color ",l("em",{children:"stops"}),".  They range in increments of 5 from ",l("code",{children:"0"})," which is very close to black, up to"," ",l("code",{children:"100"}),", which is very close to white."]}),l(lm,{title:"Color Ranges",colors:rc.filter(i=>!Vr.ranges[i].greyscale),options:e,toggleNames:r,toggleInfo:a,toggleShow5s:o}),h("p",{children:["Each range of colors is built from a base hue.  These are defined in SASS variables using the SASS ",l("code",{children:"!default"})," flag.  If you want to adjust the hues you can set any of these SASS variables before importing the main ",l("code",{children:"badger.scss"})," component."]}),l(Ke,{code:vy,caption:"Customising Hues",language:"scss",expand:!0}),l(lm,{title:"Greyscale Ranges",colors:rc.filter(i=>Vr.ranges[i].greyscale),options:e,toggleNames:r,toggleInfo:a,toggleShow5s:o}),h(bi,{code:x_,caption:"Customising Greyscale Hues",language:"scss",className:"mar-t-8",expand:!0,children:[h("p",{children:["Three greyscale color ranges are also defined.  They are designed to be based on your primary brand color. The ",l("code",{children:"grey"})," range is desaturated to around 5%.  The"," ",l("code",{children:"grey20"})," and ",l("code",{children:"grey40"})," ranges are saturated to around 20% and 40% respectively."]}),h("p",{children:["The brand color for this website is ",l("code",{children:"violet"})," which is why these greyscales have a violet tinge to them.  You can set the hues for these color ranges using the ",l("code",{children:"$grey-hue"}),","," ",l("code",{children:"$grey20-hue"})," and ",l("code",{children:"$grey40-hue"})," variables."]})]}),h("p",{className:"mar-t-4",children:[l(Ie,{to:"/colors/brand",text:"Read on"})," to see how you can define your own brand color and automatically get greyscales to match."]})]})},lm=({title:e,colors:t,options:n,toggleNames:r,toggleInfo:a,toggleShow5s:o})=>h(Rn,{children:[h("div",{className:"flex space end",children:[l("h2",{children:e}),h("div",{className:"text-right color-options",children:[l(Cl,{label:"Show Names",checked:n.names,toggle:r}),l(Cl,{label:"Show Info",checked:n.info,toggle:a}),l(Cl,{label:"Show 5s",checked:n.show5s,toggle:o})]})]}),l("div",{className:`ranges ${n.names?"names":"nameless"}`,children:t.map(i=>l(C_,{uri:i,range:Vr.ranges[i],options:n},i))})]}),C_=({uri:e,range:t,options:n})=>h("div",{className:"range",children:[n.names&&l("h3",{children:t.name}),l("div",{className:"swatches",children:vi(0,100,n.show5s?5:10).map(r=>l(k_,{uri:e,range:t,stop:r,options:n},r))})]}),k_=({uri:e,range:t,stop:n,options:r})=>{const a=t.stops[n];return l("div",{className:`swatch ${my(a)?"dark":"light"}`,style:{backgroundColor:`var(--${e}-${n})`},children:r.info&&l(by,{uri:e,stop:n,color:a})})},by=({uri:e,stop:t,color:n})=>h("div",{children:[h("div",{className:"stop",children:[e,"-",t]}),h("div",{className:"specs",children:[n.hex,l("br",{}),"h:",n.h,"°",l("br",{}),"s:",n.s,"%",l("br",{}),"l:",n.l,"%"]})]}),__=Object.freeze(Object.defineProperty({__proto__:null,Info:by,default:S_},Symbol.toStringTag,{value:"Module"})),xs=({scope:e,to:t,from:n="color",size:r="smallish"})=>h("table",{className:`${e} ${r} celled striped properties mar-b-8`,children:[l("thead",{children:h("tr",{children:[l("th",{children:"Variable"}),l("th",{children:"Mapped To"})]})}),l("tbody",{children:vi(0,100,5).map(a=>h("tr",{children:[h("td",{className:"font-mono",children:["--",n,"-",a]}),h("td",{className:"font-mono",children:["--",t,"-",a]})]},a))})]}),T_=()=>h("div",{className:"prose",children:[l("h1",{children:"Color Variables"}),l("h2",{children:"SASS Color Variables"}),h("p",{children:["Each stop in a color range has a SASS variable defined, e.g.",l("code",{children:"$red-0"}),", ",l("code",{children:"$red-5"}),","," ",l("code",{children:"$red-10"})," and so on.  You can use these in your SASS components as necessary."]}),l("h2",{children:"CSS Custom Properties"}),h("p",{children:["Each of the colour stops also has a corresponding CSS custom property (a.k.a. CSS variable) defined, e.g.",l("code",{children:"--red-0"}),", ",l("code",{children:"--red-5"}),","," ",l("code",{children:"--red-10"})," and so on.  You can use these in your CSS files, e.g. as ",l("code",{children:"color: var(--red-10)"}),"."]}),h("p",{children:["Each of your brand colors will also have CSS custom properties defined. If you're using the default ",l("code",{children:"brand"})," name then they will be ",l("code",{children:"--brand-0"}),", ",l("code",{children:"--brand-5"}),","," ",l("code",{children:"--brand-10"})," and so on."]}),h("p",{children:["If you have defined a different set of names via"," ",l("code",{children:"$brand-colors"})," then they will have corresponding names.  For example, if you defined the names in your ",l("code",{children:"$brand-colors"})," to be ",l("code",{children:"primary"}),","," ",l("code",{children:"secondary"})," and ",l("code",{children:"tertiary"})," then the custom properties will be ",l("code",{children:"--primary-0"}),","," ",l("code",{children:"--secondary-0"}),", ",l("code",{children:"--tertiary-0"}),", and so on."]}),l("h2",{children:"Color Switching"}),h("p",{children:["CSS custom properties are defined for a generic color, appropriately named ",l("code",{children:"color"}),".  By default they are mapped to grey."]}),l(xs,{scope:"grey",to:"grey"}),h("p",{children:["CSS scopes will be generated for each color range which map the generic colors to the colors from that range.  For example, the"," ",l("code",{children:".red"})," class selector scope will map the colors as shown here."]}),h("h3",{className:"font-mono mar-b-2",children:[".red ","{"," ... ","}"]}),l(xs,{scope:"red",to:"red"}),h("p",{children:["Scopes will also be generated for your brand colors, either using the default ",l("code",{children:"brand"})," name or the custom names you have defined using ",l("code",{children:"$brand-colors"}),"."]}),h("p",{children:["For example, in the ",l("code",{children:".brand"})," scope the colors will be mapped as follows."]}),h("h3",{className:"font-mono mar-b-2",children:[".brand ","{"," ... ","}"]}),l(xs,{scope:"brand",to:"brand"}),h("p",{children:["The benefit of this approach is that it allows you to define UI components using the generic colors ",l("code",{children:"--color-N"}),".  By default they will appear in grey, but adding a CSS class matching the color name will switch in the appropriate color range."]}),l("h2",{children:"CSS Scope Aliases"}),h("p",{children:["A number of additional CSS scopes are defined for some of the colors. For example, the CSS scope created for the ",l("code",{children:"red"})," color range is actually ",l("code",{children:".red, .error, .invalid"}),".  This allows you to add the ",l("code",{children:"red"}),", ",l("code",{children:"error"})," or ",l("code",{children:"invalid"})," CSS class to an element to have the red color range selected."]}),h("p",{children:["This is used by ",l(Ie,{to:"/forms",text:"forms"})," and "," ",l(Ie,{to:"/components/alerts",text:"alerts"}),", for example, to provide semantic names for the colors."]}),l("h2",{children:"TODO"}),h("ul",{children:[l("li",{children:"Editing or updating a palette using Badger Color"}),l("li",{children:"Expanding the palette into SCSS files"}),l("li",{children:"Adding/editing CSS scopes"})]})]}),$_=Object.freeze(Object.defineProperty({__proto__:null,default:T_},Symbol.toStringTag,{value:"Module"})),D=({Component:e,code:t,html:n,children:r,className:a="",caption:o,fixed:i,expand:s,language:d})=>h("div",{className:`example grid-2 gap-8 stack-desktop ${a}`,children:[l("div",{className:"source",children:l(Ke,{caption:o,code:t||n,expand:s,fixed:i,language:n?"html":d})}),!!r&&l("div",{className:"interim",children:r}),e?h("div",{className:"output",children:[l("h4",{className:"caption",children:"Output"}),l(e,{})]}):null,n?h("div",{className:"output",children:[l("h4",{className:"caption",children:"Output"}),l("div",{dangerouslySetInnerHTML:{__html:n}})]}):null]}),E_=`<div class="alert">
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
`,N_=`<div class="alert border">
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
`,I_=`<div class="alert">
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
</div>`,L_=`<div class="grid-2 gap-4">
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
</div>`,R_=`<div class="surface-3 pad-8">
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
</div>`,Af=({color:e,setColor:t})=>h("select",{name:"color",required:!0,value:e,onChange:n=>t(n.target.value),children:[l("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Color"}),l("option",{value:"",children:"Default"}),rc.map(n=>l("option",{value:n,children:n},n))]}),P_=["smallest","smaller","small","medium","large","larger","largest"],Of=({size:e,setSize:t})=>h("select",{name:"size",required:!0,value:e,onChange:n=>t(n.target.value),children:[l("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),l("option",{value:"",children:"Default"}),P_.map(n=>l("option",{value:n,children:n},n))]}),M_=[0,1,2,3,4,5,6,8,10],Df=({radius:e,setRadius:t})=>h("select",{name:"radius",required:!0,value:e,onChange:n=>t(n.target.value),children:[l("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),l("option",{value:"",children:"Default"}),M_.map(n=>h("option",{value:n,children:["radius: ",n]},n))]}),wi=e=>e.filter(t=>Tt(t)&&t).join(" ").replace(/^\s+/,"").replaceAll(/\s+/g," "),F_=(e,t={},...n)=>wi(Object.entries(e).reduce((r,[a,o])=>(o&&r.push(t[a]||a),r),[...n])),A_=(e,t="",...n)=>wi([...ty(t).filter(r=>e[r]),...n]),O_=[1,2,3,4,5],wy=({shadow:e,setShadow:t})=>h("select",{name:"shadow",required:!0,value:e,onChange:n=>t(n.target.value),children:[l("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),l("option",{value:"",children:"Default"}),O_.map(n=>h("option",{value:n,children:["shadow: ",n]},n))]}),wa=({checked:e,toggle:t,label:n})=>l("div",{className:"field",children:h("label",{className:"checkbox border no-focus wide",children:[l("input",{type:"checkbox",checked:e,onChange:t}),n]})}),D_=[0,1,2,3,4,5,6,8,10],xy=({borderWidth:e,setBorderWidth:t})=>h("select",{name:"borderWidth",required:!0,value:e,onChange:n=>t(n.target.value),children:[l("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),l("option",{value:"",children:"Default"}),D_.map(n=>h("option",{value:n,children:["width: ",n]},n))]}),z_=()=>{const[e,t]=B.useState({body:!0});return h("div",{className:"example grid-2 gap-8 stack-desktop",children:[l(B_,{options:e,setOption:a=>o=>t(i=>({...i,[a]:o})),toggleOption:a=>()=>t(o=>({...o,[a]:!o[a]}))}),h("div",{children:[l("h3",{className:"mar-b-2",children:"Output"}),l("div",{className:"output",children:l(j_,{options:e})})]})]})},B_=({options:e,toggleOption:t,setOption:n})=>{const r=t("headline"),a=t("heading"),o=t("border"),i=t("stripe"),s=n("type"),d=n("size"),f=n("color"),m=n("radius"),b=n("shadow"),S=n("borderWidth"),N=`<div class="${Sy(e)}">
  ...
</div>`;return h("div",{children:[l("h3",{className:"mar-b-2",children:"Options"}),h("div",{className:"grid-5 gap-4 stack-tablet start",children:[l(wa,{checked:e.headline,toggle:r,label:"Headline"}),l(wa,{checked:e.head,toggle:a,label:"Heading"}),l(wa,{checked:e.stripe,toggle:i,label:"Stripe"}),l(wa,{checked:e.border,toggle:o,label:"Border"}),l(xy,{borderWidth:e.borderWidth,setBorderWidth:S})]}),h("div",{className:"grid-5 gap-4 stack-tablet mar-t-4",children:[l(U_,{type:e.type,setType:s}),l(Af,{color:e.color,setColor:f}),l(Of,{size:e.size,setSize:d}),l(Df,{radius:e.radius,setRadius:m}),l(wy,{radius:e.shadow,setShadow:b})]}),l("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),l(Ke,{code:N,language:"html",expand:!0})]})},Sy=e=>wi([e.color,e.type,e.size,e.border&&"border",e.stripe&&"stripe",e.radius&&`bdr-${e.radius}`,e.shadow&&`shadow-${e.shadow}`,e.borderWidth&&`bdw-${e.borderWidth}`,"alert"]),j_=({options:e})=>{const t=Sy(e);return h("div",{className:t,children:[e.headline&&l("div",{className:"headline",children:"This is a headline"}),e.heading&&l("h3",{children:"Hello World!"}),h("p",{children:["This is an alert.  This is some ",l("b",{children:"bold text"}),". This is a ",l("a",{href:"/",children:"link"}),"."]}),l("button",{children:"Default Button"}),l("button",{className:"red mar-l-2",children:"Red Button"})]})},U_=({type:e,setType:t})=>h("select",{name:"type",required:!0,value:e,onChange:n=>t(n.target.value),children:[l("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),l("option",{value:"",children:"Default"}),["info","warning","success","error"].map(n=>l("option",{value:n,children:n},n))]}),W_=()=>h("div",{className:"prose",children:[l("h1",{children:"Alerts"}),h("p",{children:["The ",l("code",{children:"alert"})," class can be used to display alerts. Add any of the ",l("code",{children:"info"}),", ",l("code",{children:"success"}),","," ",l("code",{children:"warning"})," or ",l("code",{children:"error"})," classes to set the color."]}),l("h2",{children:"Demo"}),l("p",{children:"Select the options to determine how the alert is displayed. Note that some options are mutually exclusive (e.g. stripe and border)."}),l(z_,{}),l("h2",{children:"Default Alerts"}),l(D,{html:E_,language:"html",caption:"Alerts"}),l("h2",{children:"Alerts With Borders"}),h("p",{children:["Add the ",l("code",{children:"border"})," class to add a border."]}),l(D,{html:N_,language:"html",caption:"Added Borders"}),l("h2",{children:"Alert Headings"}),l("p",{children:"Headings are displayed in a slightly darker color than the body text."}),l(D,{html:I_,language:"html",caption:"Alert Headings"}),l("h2",{children:"Alert Headlines"}),h("p",{children:["Add an element with the ",l("code",{children:"headline"})," class to really make it stand out.  This works well with and without borders.  Throw in a"," ",l(Ie,{to:"/utilities/shadows",text:"shadow"})," if you want to make it really pop."]}),l(D,{html:L_,language:"html",caption:"Alert Headlines"}),l("h2",{children:"Stripe Alerts"}),h("p",{children:["For a more subdued look, try adding the ",l("code",{children:"stripe"})," class."]}),l(D,{html:R_,language:"html",caption:"Stripe Alert"})]}),H_=Object.freeze(Object.defineProperty({__proto__:null,default:W_},Symbol.toStringTag,{value:"Module"})),V_=`<div class="grid-1 gap-4">
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
`,G_=`<div class="grid-1 gap-4">
  <details class="border">
    <summary>
      This has a border
    </summary>
    <p>
      Hello World!
    </p>
  </details>

  <details class="border bdr-2">
    <summary>
      This has a border and border radius
    </summary>
    <p>
      Hello World!
    </p>
  </details>

  <details class="border bdr-2 bdw-2">
    <summary>
      This has a border, border radius and border width of 2
    </summary>
    <p>
      Hello World!
    </p>
  </details>

  <details class="border bdr-2 bdc-30 bdd-70">
    <summary>
      This has custom border colors for both light and dark mode
    </summary>
    <p>
      Hello World!
    </p>
  </details>
</div>`,Y_=`<div class="grid-1 gap-4">
  <details class="lined">
    <summary>
      This is lined
    </summary>
    <p>
      Hello World!
    </p>
  </details>

  <details class="border lined">
    <summary>
      This is lined with a border
    </summary>
    <p>
      Hello World!
    </p>
  </details>

  <details class="border lined bdr-2">
    <summary>
      This lined with a border and border radius
    </summary>
    <p>
      Hello World!
    </p>
  </details>
</div>`,q_=`<div class="grid-1 gap-4">
  <details class="shaded">
    <summary>
      This is shaded
    </summary>
    <p>
      Hello World!
    </p>
  </details>

  <details class="shaded lined">
    <summary>
      This is shaded and lined
    </summary>
    <p>
      Hello World!
    </p>
  </details>

  <details class="shaded border">
    <summary>
      This is shaded and has a border
    </summary>
    <p>
      Hello World!
    </p>
  </details>

  <details class="shaded lined border">
    <summary>
      This is shaded, lined and has a border
    </summary>
    <p>
      Paragraph One
    </p>
  </details>

  <details class="shaded lined border bdr-4">
    <summary>
      This is shaded, lined and has a border and border radius
    </summary>
    <p>
      Paragraph One
    </p>
  </details>

  <details class="border lined shaded red">
    <summary>
      Red Shaded
    </summary>
    <p>
      Paragraph One
    </p>
  </details>

  <details class="border lined shaded green">
    <summary>
      Green Shaded
    </summary>
    <p>
      Paragraph One
    </p>
  </details>

  <details class="border lined shaded blue">
    <summary>
      Blue Shaded
    </summary>
    <p>
      Paragraph One
    </p>
  </details>
</div>`,Z_=`<style>
  .custom-details {
    --icon-svg: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' %3e%3cpolyline points='6 6 6 9 12 15 18 9 18 6' style='fill:none;stroke:rgba%28255%2C100%2C0%2C0.9%29%0A;stroke-width:4;stroke-linecap:round;stroke-linejoin:round'%3e%3c/polyline%3e%3c/svg%3e");
    --icon-rotate: -180deg;
    --icon-transition: 0.5s;
    --border-width: 4px;
    --border-radius: 0.75em;
    --line-width: 1px;
    --body-padding: 2em;
    --head-margin: 1em;
    --border-color: var(--color-20);
    --line-color: var(--color-0);
    --head-shade-back: var(--color-30);
    --head-shade-text: var(--color-80);
    --hover-shade-back: var(--color-20);
    --hover-shade-text: var(--color-90);
    --body-shade-back: var(--color-40);
    --body-shade-text: var(--color-90);
    --shade-transition: 0.4s;
    box-shadow: var(--shadow-2);
  }
</style>
<div class="grid-1 gap-4">
  <details class="custom-details border shaded lined">
    <summary>
      This is a custom styled details widget
    </summary>
    <p>
      Hello World!
    </p>
  </details>
  <details class="red custom-details border shaded lined">
    <summary>
      This is a custom styled details widget in red
    </summary>
    <p>
      Hello World!
    </p>
  </details>
  <details class="green custom-details border shaded lined">
    <summary>
      This is a custom styled details widget in green
    </summary>
    <p>
      Hello World!
    </p>
  </details>
  <details class="blue custom-details border shaded lined">
    <summary>
      This is a custom styled details widget in blue
    </summary>
    <p>
      Hello World!
    </p>
  </details>
</div>
`,Q_=()=>{const[e,t]=B.useState({body:!0});return h("div",{className:"example grid-2 gap-8 stack-desktop",children:[l(K_,{options:e,setOption:a=>o=>t(i=>({...i,[a]:o})),toggleOption:a=>()=>t(o=>({...o,[a]:!o[a]}))}),h("div",{children:[l("h3",{className:"mar-b-2",children:"Output"}),l("div",{className:"output",children:l(X_,{options:e})})]})]})},K_=({options:e,toggleOption:t,setOption:n})=>{const r=t("border"),a=t("shaded"),o=t("lined"),i=n("size"),s=n("color"),d=n("radius"),f=n("shadow"),m=n("borderWidth"),S=`<div class="${Cy(e)}">
  ...
</div>`;return h("div",{children:[l("h3",{className:"mar-b-2",children:"Options"}),h("div",{className:"grid-3 gap-4 stack-tablet start",children:[l(wa,{checked:e.lined,toggle:o,label:"Lined"}),l(wa,{checked:e.shaded,toggle:a,label:"Shaded"})]}),h("div",{className:"grid-3 gap-4 stack-tablet start",children:[l(wa,{checked:e.border,toggle:r,label:"Border"}),l(xy,{borderWidth:e.borderWidth,setBorderWidth:m}),l(Df,{radius:e.radius,setRadius:d})]}),h("div",{className:"grid-3 gap-4 stack-tablet",children:[l(Af,{color:e.color,setColor:s}),l(Of,{size:e.size,setSize:i}),l(wy,{radius:e.shadow,setShadow:f})]}),l("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),l(Ke,{code:S,language:"html",expand:!0})]})},Cy=e=>wi([e.color,e.size,e.lined&&"lined",e.shaded&&"shaded",e.border&&"border",e.radius&&`bdr-${e.radius}`,e.shadow&&`shadow-${e.shadow}`,e.borderWidth&&`bdw-${e.borderWidth}`]),X_=({options:e})=>{const t=Cy(e);return h("details",{className:t,children:[l("summary",{children:"This is a demo details widget - click to reveal"}),l("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),l("p",{children:"I really think you're just making a much too big thing out of it."}),l("p",{children:"Making a big thing out of it would've been a good idea."})]})},J_=()=>h("div",{className:"prose",children:[l("h1",{children:"Details"}),h("p",{children:["The ",l("code",{children:"details"})," HTML element can be used to create a disclosure widget."]}),l("h2",{children:"Demo"}),l("p",{children:"Select the options to determine how the details widget is displayed."}),l(Q_,{}),l("h2",{children:"Default Style"}),h("p",{children:["The default style will be applied without the need for any special CSS classes.  You can add any of the utility classes (e.g. the size classes like ",l("code",{children:"small"}),", ",l("code",{children:"large"}),", etc.) to change the basic appearance of either the whole widget, the summary, or any of the content elements."]}),l(D,{html:V_,language:"html",caption:"Default Style"}),l("h2",{children:"Border Style"}),h("p",{children:["Add the ",l("code",{children:"border"})," class to add a border.  The usual"," ",l("code",{children:"bdr-N"})," classes can be added to set the border radius"," ","and ",l("code",{children:"bdw-N"})," to set the border width."]}),h("p",{children:["The ",l("code",{children:"bdc-N"})," classes can be used to set the border color stop, and ",l("code",{children:"bdd-N"})," classes for the border color stop in dark mode."]}),l(D,{html:G_,language:"html",caption:"Details With Borders"}),l("h2",{children:"Lined Style"}),h("p",{children:["The ",l("code",{children:"lined"})," class can be added to put an additional border line between the summary header and body content."]}),l(D,{html:Y_,language:"html",caption:"Details With Borders"}),l("h2",{children:"Shaded Style"}),h("p",{children:["Add the ",l("code",{children:"shaded"})," class to shade the background colors. You can add any of the color classes to change the color palette."]}),l(D,{html:q_,language:"html",caption:"Shaded Details"}),l("h2",{children:"Custom Styling"}),l("p",{children:"There are a number of CSS variables that you can set to change the styling."}),l(D,{html:Z_,language:"html",caption:"Custom Styling"})]}),eT=Object.freeze(Object.defineProperty({__proto__:null,default:J_},Symbol.toStringTag,{value:"Module"})),tT={bars:"M0 96C0 78 14 64 32 64H416c18 0 32 14 32 32s-14 32-32 32H32C14 128 0 114 0 96zM0 256c0-18 14-32 32-32H416c18 0 32 14 32 32s-14 32-32 32H32c-18 0-32-14-32-32zM448 416c0 18-14 32-32 32H32c-18 0-32-14-32-32s14-32 32-32H416c18 0 32 14 32 32z",check:"M486,91C499,104 499,127 486,140L212,422C198,435 177,435 163,422L26,281C13,267 13,245 26,231C39,217 61,217 75,231L187,347L438,91C451,77 473,77 486,91L486,91Z",cross:"M456,109C470,94 470,71 456,56C441,42 418,42 403,56L256,204L109,56C94,42 71,42 56,56C42,71 42,94 56,109L204,256L56,403C42,418 42,441 56,456C71,470 94,470 109,456L256,308L403,456C418,470 441,470 456,456C470,441 470,418 456,403L308,256L456,109Z",github:"M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z",info:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13 0-24-11-24-24s11-24 24-24h48c13 0 24 11 24 24v88h8c13 0 24 11 24 24s-11 24-24 24H216c-13 0-24-11-24-24s11-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",lock:"M159,133L159,226L301,226L301,133C301,94 269,62 230,62C191,62 159,94 159,133ZM101,226L101,133C101,62 159,4 230,4C301,4 359,62 359,133L359,226L373,226C404,226 430,252 430,283L430,455C430,486 404,512 373,512L87,512C56,512 30,486 30,455L30,283C30,252 56,226 87,226L101,226Z",pen:"M356,34L311,79L433,201L478,156C502,132 502,94 478,71L441,34C418,10 380,10 356,34L356,34ZM290,100L71,319C61,329 54,341 50,355L16,468C14,476 16,484 22,490C28,496 36,498 44,496L157,462C171,458 183,451 192,442L412,222L290,100Z",plus:"M292,56C292,36 276,20 256,20C236,20 220,36 220,56L220,220L56,220C36,220 20,236 20,256C20,276 36,292 56,292L220,292L220,456C220,476 236,492 256,492C276,492 292,476 292,456L292,292L456,292C476,292 492,276 492,256C492,236 476,220 456,220L292,220L292,56Z",trash:"M173,33L166,46L76,46C59,46 46,59 46,76C46,93 59,106 76,106L436,106C453,106 466,93 466,76C466,59 453,46 436,46L346,46L339,33C334,22 324,16 312,16L200,16C188,16 178,22 173,33ZM436,136L76,136L96,454C97,478 117,496 141,496L371,496C395,496 415,478 416,454L436,136Z",undo:"M168,224L40,224C27,224 16,213 16,200L16,72C16,62 22,54 31,50C40,46 50,48 57,55L99,97C186,10 327,10 414,98C502,185 502,327 414,414C327,502 185,502 98,414C85,402 85,382 98,369C110,357 130,357 143,369C205,432 307,432 369,369C432,307 432,205 369,143C307,81 207,80 144,142L185,183C192,190 194,200 190,209C187,218 178,224 168,224Z",unlock:"M313,131C313,92 345,60 384,60C423,60 455,92 455,131L455,174C455,190 468,203 484,203C499,203 512,190 512,174L512,131C512,61 455,3 384,3C313,3 256,61 256,131L256,227L57,227C26,227 0,253 0,284L0,455C0,486 26,512 57,512L341,512C373,512 398,486 398,455L398,284C398,253 373,227 341,227L313,227L313,131Z",checked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083ZM88.43,298.82C75.421,285.811 75.421,264.689 88.43,251.68C101.439,238.671 122.561,238.671 135.57,251.68L202,318.11L376.43,143.68C389.439,130.671 410.561,130.671 423.57,143.68C436.579,156.689 436.579,177.811 423.57,190.82L225.57,388.82C212.553,401.838 191.447,401.838 178.43,388.82L88.43,298.82Z",unchecked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083Z"},nT=e=>{const t=tT[e]||LC(`Invalid icon name: ${e}`);return ey(t)?{path:t,width:512,height:512}:t},om=({path:e,onClick:t,width:n=512,height:r=512,style:a,className:o="",fill:i="currentColor"})=>l("svg",{"aria-hidden":"true",focusable:"false",className:`${o} icon`,style:a,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n} ${r}`,onClick:t,children:l("path",{d:e,fill:i})}),Mc=({name:e,...t})=>e?l(om,{...t,...nT(e)}):l(om,{...t}),zf=({open:e,close:t,className:n,children:r})=>{const a=B.useRef(null);return B.useEffect(()=>{const{current:o}=a;e?o.showModal():o.close()},[e]),h("dialog",{ref:a,className:n,children:[l("div",{className:"close",onClick:t,children:l(Mc,{name:"cross"})}),r]})},rT=()=>{const[e,t]=B.useState(!1);return h("div",{className:"output",children:[l("button",{onClick:()=>t(!0),className:"blue",children:"Show Dialog"}),h(zf,{open:e,close:()=>t(!1),children:[l("h1",{children:"Hello World!"}),l("p",{children:"This is a dialog."})]})]})},aT=()=>{const[e,t]=B.useState(!1);return h("div",{className:"output",children:[l("button",{onClick:()=>t(!0),className:"blue",children:"Show Tall Dialog"}),h(zf,{open:e,close:()=>t(!1),children:[l("h1",{children:"Tall Dialog"}),h("div",{className:"mobile block-center",children:[l("p",{children:"David. David. David. Wait, please, wait a minute. Have you any idea what it will costs to dress up the band as animals? Oh, it don't cost nothing. It really doesn't. They're not animals, they're signs of the zodiac. They're animals. It's a way to fight the drabs. You know we've got the drabs. Well that's true. I think mine would look good - better in dubly. If it was done in dubly."}),l("p",{children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion. Well let's hear yours. Let's hear your suggestion. Stonehenge! Stonehenge. It's the best production value we've ever had on stage. But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't... Not yet we don't. Let's start... Please, please just a moment. Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this... I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore. I know, so we build a new one. And this is it, look! Consider... consider it done. So you're just going to take care of it like that. You're going to find someone to design it... using that as a plan? Let's try. Let's try. If you can do it, I'll do the number."}),l("p",{children:`This looks actually perfect. I mean it's, uh, the right proportions. It'll be this color right? Yeah. That's... that's... that's just terrific. It almost looks like the real thing. When we get the actual, uh, set, when we get the piece, it'll... it'll follow exactly these specifications. I mean even these contours and everything? Um, I'm not understanding it. What do you mean "the actual piece?" Well I mean... I mean when you build the actual piece... But this is what you asked for, isn't it? What? Well this is the piece. This is the piece? Yes. Are you telling me that this is it? This is scenery? Have you ever been to Stonehenge? No, I haven't been to Stonehenge. The triptychs are... the triptychs are twenty feet high. You can stand four men up them! Ian, I was... I was... I was supposed to build it eighteen inches high. This is insane. This isn't a piece of scenery. Look, look. Look, this is what I was asked to build. Eighteen inches. Right here, it specified eighteen inches. I was given this napkin, I mean... Forget this! Fuck the napkin!!!`}),l("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object. I really think you're just making a much too big thing out of it. Making a big thing out of it would've been a good idea. Nigel gave me a drawing that said eighteen inches. Alright? I know he did, and that's what I'm talking about. Now, whether he knows the difference between feet and inches is not my problem. I do what I'm told. But you're not as confused as him are you? I mean it's not your job to be as confused as Nigel is."}),l("p",{children:"It's my job to do what I'm asked to do by the creative element of this band. And that's what I did. C'mon... The audience were laughing. So it became a comedy number. Yes it did! Yes it fucking well did, and it was not pleasant to be part of the comedy on stage. Backstage, perhaps, it was very amusing."}),l("p",{children:"Maybe we just fix the choreography. Keep the dwarf clear. What do you mean? So they won't trod upon it."})]})]})]})},lT=()=>{const[e,t]=B.useState(!1);return h("div",{className:"output",children:[l("button",{onClick:()=>t(!0),className:"blue",children:"Show Wide Dialog"}),h(zf,{open:e,close:()=>t(!1),children:[l("h1",{children:"Wide Dialog"}),l("p",{children:"David. David. David. Wait, please, wait a minute. Have you any idea what it will costs to dress up the band as animals? Oh, it don't cost nothing. It really doesn't. They're not animals, they're signs of the zodiac. They're animals. It's a way to fight the drabs. You know we've got the drabs. Well that's true. I think mine would look good - better in dubly. If it was done in dubly."}),l("p",{children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion. Well let's hear yours. Let's hear your suggestion. Stonehenge! Stonehenge. It's the best production value we've ever had on stage. But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't... Not yet we don't. Let's start... Please, please just a moment. Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this... I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore. I know, so we build a new one. And this is it, look! Consider... consider it done. So you're just going to take care of it like that. You're going to find someone to design it... using that as a plan? Let's try. Let's try. If you can do it, I'll do the number."}),l("p",{children:`This looks actually perfect. I mean it's, uh, the right proportions. It'll be this color right? Yeah. That's... that's... that's just terrific. It almost looks like the real thing. When we get the actual, uh, set, when we get the piece, it'll... it'll follow exactly these specifications. I mean even these contours and everything? Um, I'm not understanding it. What do you mean "the actual piece?" Well I mean... I mean when you build the actual piece... But this is what you asked for, isn't it? What? Well this is the piece. This is the piece? Yes. Are you telling me that this is it? This is scenery? Have you ever been to Stonehenge? No, I haven't been to Stonehenge. The triptychs are... the triptychs are twenty feet high. You can stand four men up them! Ian, I was... I was... I was supposed to build it eighteen inches high. This is insane. This isn't a piece of scenery. Look, look. Look, this is what I was asked to build. Eighteen inches. Right here, it specified eighteen inches. I was given this napkin, I mean... Forget this! Fuck the napkin!!!`}),l("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object. I really think you're just making a much too big thing out of it. Making a big thing out of it would've been a good idea. Nigel gave me a drawing that said eighteen inches. Alright? I know he did, and that's what I'm talking about. Now, whether he knows the difference between feet and inches is not my problem. I do what I'm told. But you're not as confused as him are you? I mean it's not your job to be as confused as Nigel is."}),l("p",{children:"It's my job to do what I'm asked to do by the creative element of this band. And that's what I did. C'mon... The audience were laughing. So it became a comedy number. Yes it did! Yes it fucking well did, and it was not pleasant to be part of the comedy on stage. Backstage, perhaps, it was very amusing."}),l("p",{children:"Maybe we just fix the choreography. Keep the dwarf clear. What do you mean? So they won't trod upon it."})]})]})},oT=`<dialog open>
  <div className="close" onClick={yourCloseHandler}>
    <Icon name="cross"/>
  </div>
  <h1>Hello World!</h1>
  <p>
    This is a dialog.
  </p>
</dialog>`,Cn=({children:e,align:t="start"})=>l("div",{className:`grid-2 gap-h-8 stack-desktop ${t}`,style:{"--prose-width":"100%"},children:e}),iT=()=>h("div",{className:"prose",children:[l("h1",{children:"Dialog"}),h("p",{children:["Some default styling is provided for the ",l("code",{children:"dialog"})," element which can be used to display modals."]}),h("p",{children:["A immediate child element with the ",l("code",{children:"close"})," CSS class can be used to create a close button."]}),h(Cn,{children:[l(Ke,{code:oT,caption:"Dialog",language:"html",className:"mar-b-8",expand:!0}),l(rT,{})]}),h("p",{children:["The ",l("code",{children:"$dialog-max-width"})," SASS variable defaults to"," ",l("code",{children:"80vw"})," and is set as the ",l("code",{children:"--max-width"})," CSS variable in the scope of a ",l("code",{children:"dialog"})," element. Similarly the ",l("code",{children:"$dialog-max-height"})," SASS variable defaults to"," ",l("code",{children:"90vh"})," and is set as the ",l("code",{children:"--max-height"})," CSS variable."]}),l("p",{children:"In general, you can constrain the width of the content and the dialog which size appropriately."}),h(Cn,{children:[l(lT,{}),l(aT,{})]})]}),sT=Object.freeze(Object.defineProperty({__proto__:null,default:iT},Symbol.toStringTag,{value:"Module"})),cT=`<svg
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
  aria-hidden="true" focusable="false" role="img"
  class="icon"
>
  <path
    d="M64,268L184,388L448,124"
    style="fill:none;stroke:currentColor;stroke-width:65"
  />
</svg>
Check!`,dT=`<div class="small">
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
</div>`,uT=`<div class="red fgc-50 large">
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
</div>`,hT=`<svg
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
`,fT=`<div class="larger">
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
    .dark svg.icon.checkbox .box {
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
`,ai=({title:e="Note",children:t})=>h("div",{className:"info alert flex start border small",children:[l(Mc,{name:"info",className:"side-icon"}),h("div",{children:[l("h3",{children:e}),t]})]}),pT=()=>h("div",{className:"prose",children:[l("h1",{children:"Icons"}),h("p",{children:["Some basic styles are included for SVG icons. Add the ",l("code",{children:"icon"})," ","class to an inline SVG image to use them."]}),l(D,{html:cT,language:"html",caption:"Icon"}),l("p",{children:"Icons are sized in em units meaning they scale with text in different sizes."}),l(D,{html:dT,language:"html",caption:"Icon Sizes"}),h("p",{children:["SVG icons can use ",l("code",{children:"currentColor"})," for either the"," ",l("code",{children:"fill"})," or ",l("code",{children:"stroke"})," properties to inherit the current text color."]}),l(D,{html:uT,language:"html",caption:"Icon Colors"}),h("div",{className:"grid-2 gap-8 stack-desktop",children:[h("div",{children:[h("p",{children:["SVG elements can use the ",l("code",{children:"fill-fg"})," and ",l("code",{children:"fill-bg"})," ","classes to set the fill color to the current foreground or background colors respectively.  Similarly the ",l("code",{children:"stroke-fg"})," and"," ",l("code",{children:"stroke-bg"})," will set the stroke color to the foreground or"," ","background color."]}),h("p",{children:["These CSS rules are scoped to all ",l("code",{children:"svg"})," elements rather",l("code",{children:"svg.icon"})," specifically.  So you can use them in any SVG images, not just icons."]})]}),l("div",{children:h(ai,{children:["CSS styles can only be applied to inline SVG elements.  They don't work for SVG images loaded using the ",l("code",{children:"img"})," ","tag or applied using a ",l("code",{children:"background-image"})," style."]})})]}),l(D,{html:hT,language:"html",caption:"Icon Style"}),h("p",{children:["You can define your own styles to target different elements in an SVG icon.  This example illustrated the use of generic"," ",l("code",{children:"--color-N"})," variables to set the fill and stroke styles on elements in an icon.  The only thing that's determining the color range is the ",l("code",{children:"blue"})," class on the ",l("code",{children:"svg"})," ","element.  Change that to the name of any other color range and the styles will work equally well."]}),h("p",{children:["Also note the use of the"," ",l("code",{children:"--unfilled"})," custom property which sets the background color for the unchecked checkbox.  This allows us to set different color stops for use in light and dark themes."]}),l(D,{html:fT,language:"html",caption:"Icon Style"})]}),gT=Object.freeze(Object.defineProperty({__proto__:null,default:pT},Symbol.toStringTag,{value:"Module"})),mT=()=>{const[e,t]=B.useState({head1:!0,body:!0,foot1:!0});return h("div",{className:"example grid-2 gap-8 stack-desktop",children:[l(vT,{options:e,setOption:a=>o=>t(i=>({...i,[a]:o})),toggleOption:a=>()=>t(o=>({...o,[a]:!o[a]}))}),h("div",{children:[l("h3",{className:"mar-b-2",children:"Output"}),l("div",{className:"output",children:l(yT,{options:e})})]})]})},vT=({options:e,toggleOption:t,setOption:n})=>{const r=t("head1"),a=t("head2"),o=t("body"),i=t("foot1"),s=t("foot2"),d=t("wide"),f=t("celled"),m=t("shaded"),b=t("lined"),S=t("striped"),I=n("size"),N=n("color"),C=n("radius"),w=`<table class="${A_(e,"wide celled shaded lined striped",e.color,e.size,e.radius&&`bdr-${e.radius}`)}">
  ...
</table>`;return h("div",{children:[l("h3",{className:"mar-b-2",children:"Options"}),h("div",{className:"grid-5 gap-4 stack-tablet",children:[l(Un,{checked:e.wide,toggle:d,label:"Wide"}),l(Un,{checked:e.celled,toggle:f,label:"Celled"}),l(Un,{checked:e.shaded,toggle:m,label:"Shaded"}),l(Un,{checked:e.lined,toggle:b,label:"Lined"}),l(Un,{checked:e.striped,toggle:S,label:"Striped"})]}),h("div",{className:"grid-5 gap-4 stack-tablet mar-t-4",children:[l(Un,{checked:e.head1,toggle:r,label:"Header"}),l(Un,{checked:e.body,toggle:o,label:"Body"}),l(Un,{checked:e.foot1,toggle:i,label:"Footer"}),l(Un,{checked:e.head2,toggle:a,label:"Pre-header"}),l(Un,{checked:e.foot2,toggle:s,label:"Post-footer"})]}),h("div",{className:"grid-5 gap-4 stack-tablet mar-t-4",children:[l(Af,{color:e.color,setColor:N}),l(Of,{size:e.size,setSize:I}),l(Df,{radius:e.radius,setRadius:C})]}),l("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),l(Ke,{code:w,language:"html",expand:!0})]})},Un=({checked:e,toggle:t,label:n})=>l("div",{className:"field",children:h("label",{className:"checkbox border no-focus wide",children:[l("input",{type:"checkbox",checked:e,onChange:t}),n]})}),yT=({options:e})=>{const t=F_(e,{},e.color,e.size,e.radius&&`bdr-${e.radius}`);return h("table",{className:t,children:[(e.head1||e.head2)&&h("thead",{children:[e.head2&&l("tr",{children:l("th",{colSpan:"3",className:"text-center",children:"Spinal Tap"})}),e.head1&&h("tr",{children:[l("th",{children:"Name"}),l("th",{children:"Instrument"}),l("th",{children:"Danger Level"})]})]}),e.body&&h("tbody",{children:[h("tr",{children:[l("td",{children:"Nigel"}),l("td",{children:"Tufnel"}),l("td",{children:"Guitar"})]}),h("tr",{children:[l("td",{children:"David"}),l("td",{children:"St.Hubbins"}),l("td",{children:"Guitar"})]}),h("tr",{children:[l("td",{children:"Derek"}),l("td",{children:"Smalls"}),l("td",{children:"Bass"})]}),h("tr",{children:[l("td",{children:"Viv"}),l("td",{children:"Savage"}),l("td",{children:"Keyboards"})]}),h("tr",{children:[l("td",{children:"Mick"}),l("td",{children:"Shrimpton"}),l("td",{children:"Drums"})]})]}),(e.foot1||e.foot2)&&h("tfoot",{children:[e.foot1&&h("tr",{children:[l("th",{colSpan:"2",className:"text-right",children:"Total"}),l("th",{children:"5"})]}),e.foot2&&l("tr",{children:l("th",{colSpan:"3",className:"text-center",children:"Tap into America!"})})]})]})},bT=`<table>
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
</table>`,wT=`<table class="celled">
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
</table>`,xT=`<table class="shaded">
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
</table>`,ST=`<table class="shaded lined">
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
</table>`,CT=`<table class="striped">
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
</table>`,kT=`<table class="brand striped celled">
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
</table>`,_T=`<table class="shaded lined wide">
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
</table>`,TT=`<div class="flex start gap-4">
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
  <table class="green shaded striped rounded">
    <tbody>
      <tr>
        <td>Nigel</td>
      </tr>
      <tr>
        <td>David</td>
      </tr>
      <tr>
        <td>Derek</td>
      </tr>
    </tbody>
  </table>
</div>`,$T=()=>h("div",{className:"prose",children:[l("h1",{children:"Tables"}),l("p",{children:"Badger CSS contains some basic table styling by default and a number of additional classes you can add to snazz things up."}),l("h2",{children:"Demo"}),l("p",{children:"Select the options to determine how the table is displayed."}),l(mT,{}),l("h2",{children:"Default Table"}),l(D,{html:bT,language:"html",caption:"Table"}),l("h2",{children:"Celled Table"}),l(D,{html:wT,language:"html",caption:"Celled Table"}),l("h2",{children:"Shaded Table"}),l(D,{html:xT,language:"html",caption:"Shaded Table"}),l("h2",{children:"Lined Table"}),l(D,{html:ST,language:"html",caption:"Lined Table"}),l("h2",{children:"Striped Table"}),l(D,{html:CT,language:"html",caption:"Striped Table"}),l("h2",{children:"Colored Table"}),l(D,{html:kT,language:"html",caption:"Colored Table"}),l("h2",{children:"Colored Rows"}),l(D,{html:_T,language:"html",caption:"Colored Rows"}),l("h2",{children:"Customised Table"}),l(D,{html:TT,language:"html",caption:"Rounded Table"})]}),ET=Object.freeze(Object.defineProperty({__proto__:null,default:$T},Symbol.toStringTag,{value:"Module"})),NT=`<button
  data-tooltip
  aria-label="This is a tooltip"
>
    Hover to see tooltip
</button>
`,IT=`<div class="flex space">
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
`,LT=`<div class="flex space">
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
</div>`,RT=`<style>
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
  .dark .big-blue-tooltips {
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
</div>`,PT=()=>h("div",{className:"prose",children:[l("h1",{children:"Tooltips"}),h("p",{children:["Add the ",l("code",{children:"data-tooltip"})," attribute to an element to enable a tooltip.  The tooltip text should be defined in the ",l("code",{children:"aria-label"})," ","property so that it's also accessible to screen readers."]}),l(D,{html:NT,language:"html",caption:"Tooltip"}),l("h2",{children:"Tooltip Position"}),h("p",{children:["You can set the ",l("code",{children:"data-tooltip"})," attribute to any of"," ",l("code",{children:"left"}),", ",l("code",{children:"right"}),", ",l("code",{children:"top"})," or"," ",l("code",{children:"bottom"})," to set the tooltip position."]}),l(D,{html:IT,language:"html",caption:"Tooltip Position"}),h("p",{children:["You can also combine them as "," ",l("code",{children:"top left"}),", ",l("code",{children:"top right"}),", ",l("code",{children:"bottom left"})," ","and ",l("code",{children:"bottom right"}),"."]}),l(D,{html:LT,language:"html",caption:"Tooltip Corners"}),l("p",{children:"There are a number of SCSS variables that can be used to set the defaults, or you can use CSS variables to create custom tooltip styles."}),l(D,{html:RT,language:"html",caption:"Custom Tooltips"})]}),MT=Object.freeze(Object.defineProperty({__proto__:null,default:PT},Symbol.toStringTag,{value:"Module"})),da=(e="rem",t=.25)=>[0,1,2,3,4,6,8,10,12,16,20,24,28,32].reduce((n,r)=>({...n,[r]:{vars:{unit:`${r} unit${r==1?"":"s"} (${r*t}${e})`}}}),{}),im=e=>({t:{vars:{sides:"the top"},more:da(e)},r:{vars:{sides:"the right"},more:da(e)},b:{vars:{sides:"the right"},more:da(e)},l:{vars:{sides:"the left"},more:da(e)},v:{vars:{sides:"the top and bottom (v = vertical)"},more:da(e)},h:{vars:{sides:"the left and right (h = horizontal)"},more:da(e)},...da(e)}),sm=e=>[2,4,6,8,10,12,14,16,18,20,30,40,50,60,70,90,100].reduce((t,n)=>({...t,[`${n}rem`]:{description:()=>e(n)}}),{}),cm=e=>[2,4,6,8,10,12,14,16,18,20,30,40,50,60,70,90,100].reduce((t,n)=>({...t,[`${n*16}px`]:{description:()=>e(n*16)}}),{}),FT={mar:{vars:{unit:"1 unit (0.25rem)",sides:"all sides"},description:e=>`Add ${e.unit} margin to ${e.sides}`,more:im("rem")},pad:{vars:{unit:"1 unit (0.25em)",sides:"all sides"},description:e=>`Add ${e.unit} margin to ${e.sides}`,more:im("em")},width:{more:{...sm(e=>`Set width to ${e}rem (${e*16}px)`),...cm(e=>`Set width to ${e}px`)}},max:{more:{width:{more:{...sm(e=>`Set max-width to ${e}rem (${e*16}px)`),...cm(e=>`Set max-width to ${e}px`)}}}},text:{more:{left:{description:()=>"Align text to the left"},right:{description:()=>"Align text to the right"},center:{description:()=>"Align text to the center"}}},block:{more:{left:{description:()=>"Align block to the left"},right:{description:()=>"Align block to the right"},center:{description:()=>"Align block to the center"}}},display:{more:{inline:{description:()=>"Display element inline"},block:{description:()=>"Display element as a block"},"inline-block":{description:()=>"Display element as an inline block"}}},font:{more:{sans:{description:()=>"Use a sans-serif font"},serif:{description:()=>"Use a serif font"},system:{description:()=>"Use the system font"},mono:{description:()=>"Use a monospaced font"}}}},AT=e=>{const t=e.split("-");let n=[],r=[],a=[],o={},i=FT,s;for(;t.length;){const d=t.shift(),f=i[d];if(f)console.log(`matched ${d}`),s=f.description||s,f.vars&&(o={...o,...f.vars}),n.push(d),i=f.more||{},a=Object.keys(i);else{r.push(d);break}}return{good:n,rest:r,vars:o,next:a,description:s?s(o):null}},OT=e=>ty(e).filter(t=>!t.match(/^\s*$/)).map(AT),DT=()=>{const[e,t]=B.useState("");return h("div",{children:[l("h1",{children:"Class Decoder"}),l("p",{children:"Enter one or more Badger-CSS classes for an explanation."}),h("form",{className:"max-width-30rem",children:[h("div",{className:"field",children:[l("label",{children:"CSS Classes"}),l("input",{type:"text",className:"wide",value:e,onChange:n=>t(n.target.value)})]}),l("button",{type:"button",className:"reset grey button outline",onClick:()=>t(""),children:"Reset"})]}),l("div",{children:!!e.length&&l(zT,{input:e})})]})},zT=({input:e})=>{const t=OT(e);return console.log("results: ",t),l("table",{className:"celled border bdr-2 mar-t-4",children:l("tbody",{children:t.map((n,r)=>h("tr",{children:[h("td",{className:"font-mono bgc-95 bgd-10 split-4",children:[l("span",{className:"green fgc-50",children:n.good.join("-")}),!!n.rest.length&&h("span",{className:"red fgc-50",children:[!!n.good.length&&"-",n.rest.join("-")]})]}),l("td",{className:"bgc-100 bgd-5",children:n.description}),l("td",{className:"bgc-100 bgd-5 font-mono small",children:!!n.next.length&&n.next.map(a=>`-${a} `)})]},r))})})},BT=Object.freeze(Object.defineProperty({__proto__:null,default:DT},Symbol.toStringTag,{value:"Module"})),Fa=({color:e,selected:t,select:n,iconColor:r="white",className:a="",alt:o=l(Rn,{children:" "})})=>l("button",{className:`${a} ${e} icon ${t?"focus":""}`,onClick:n,children:t?l(Mc,{name:"check",className:r}):o}),jT=({range:e,setRange:t})=>h("div",{children:[h("div",{className:"flex space mar-b-0",children:[l("h3",{children:"Color Range"}),l("h4",{children:Tt(e)&&l("code",{children:e||""})})]}),h("div",{className:"grid-fit gap-2",style:{"--min-width":"2em"},children:[l(dm,{colors:u_,range:e,setRange:t}),l("div",{children:" "}),l(Fa,{color:"brand",selected:e==="brand",select:()=>t("brand")}),l(dm,{colors:h_,range:e,setRange:t})]})]}),dm=({range:e,setRange:t,colors:n})=>n.map(r=>l(Fa,{color:r,select:()=>t(r),selected:e==r},r)),ns=({stop:e,setStop:t,className:n,title:r,prefix:a})=>h("div",{children:[h("div",{className:"flex space mar-b-0",children:[l("h3",{children:r}),l("h4",{children:Tt(e)&&h("code",{children:[a,"-",e]})})]}),l("div",{className:`${n} grid-fit gap-2`,style:{"--min-width":"2em"},children:vi(0,100,5).map(o=>l(Fa,{color:`bgc-${o} bdc-${o} fgc-${o>50?"0":"100"} bgd-${o} bdd-${o} fgd-${o>50?"0":"100"}`,iconColor:o>50?"black":"white",selected:e===o,select:()=>t(o)},o))})]}),UT=[0,1,2,3,4,6,8,10,12,16,20,24,28,32],um=({spacing:e,setSpacing:t,className:n,title:r,prefix:a,range:o})=>h("div",{children:[h("div",{className:"flex space mar-b-0",children:[l("h3",{children:r}),l("h4",{children:Tt(e)&&h("code",{children:[a,"-",e]})})]}),l("div",{className:`${n} grid-fit gap-2`,style:{"--min-width":"2em"},children:UT.map(i=>l(Fa,{color:o,className:"wide",alt:l("span",{className:"font-mono",children:i}),selected:e===i,select:()=>t(i)},i))})]}),WT=["smallest","smaller","small","medium","large","larger","largest"],HT=({size:e,setSize:t,title:n="Size",range:r})=>h("div",{children:[h("div",{className:"flex space mar-b-0",children:[l("h3",{children:n}),l("h4",{children:Tt(e)&&l("code",{children:e})})]}),l("div",{className:"grid-fit gap-2",style:{"--min-width":"2em"},children:WT.map(a=>l(Fa,{color:r,className:"wide",alt:l("span",{className:"font-mono",children:a}),selected:e===a,select:()=>t(a)},a))})]}),VT=[0,1,2,3,4,5,6,8,10],hm=({border:e,setBorder:t,className:n,title:r,prefix:a,range:o})=>h("div",{children:[h("div",{className:"flex space mar-b-0",children:[l("h3",{children:r}),l("h4",{children:Tt(e)&&h("code",{children:[a,"-",e]})})]}),l("div",{className:`${n} grid-fit gap-2`,style:{"--min-width":"2em"},children:VT.map(i=>l(Fa,{color:o,className:"wide",alt:l("span",{className:"font-mono",children:i}),selected:e===i,select:()=>t(i)},i))})]}),GT=({checked:e,toggle:t,label:n})=>l("div",{className:"field",children:h("label",{className:"checkbox border no-focus wide",children:[l("input",{type:"checkbox",checked:e,onChange:t}),n]})}),YT=({shadow:e,setShadow:t,className:n,title:r="Shadow",prefix:a="shadow",range:o})=>h("div",{children:[h("div",{className:"flex space mar-b-0",children:[l("h3",{children:r}),l("h4",{children:Tt(e)&&h("code",{children:[a,"-",e]})})]}),l("div",{className:`${n} grid-fit gap-2`,style:{"--min-width":"2em"},children:vi(0,5).map(i=>l(Fa,{color:o,className:"wide",alt:l("span",{className:"font-mono",children:i}),selected:e===i,select:()=>t(i)},i))})]}),qT=({options:e,setOption:t,toggleOption:n})=>h("div",{className:"surface-5 pad-4",children:[h("div",{className:"flex space baseline stack-desktop mar-b-2",children:[l("h2",{className:"mar-v-none",children:"Controls"}),l("h3",{className:"text-right mar-v-none",children:l("code",{children:'class="..."'})})]}),h("div",{className:"grid gap-2 small",children:[l(jT,{range:e.range,setRange:t("range")}),l(ns,{title:"Background Color Stop",prefix:"bgc",className:e.range,stop:e.bgc,setStop:t("bgc")}),l(ns,{title:"Foreground Color Stop",prefix:"fgc",className:e.range,stop:e.fgc,setStop:t("fgc")}),l(ns,{title:"Heading Color Stop",prefix:"hdc",className:e.range,stop:e.hdc,setStop:t("hdc")}),l(ns,{title:"Border Color Stop",prefix:"bdc",className:e.range,stop:e.bdc,setStop:t("bdc")}),l(hm,{title:"Border Width",prefix:"bdw",border:e.bdw,setBorder:t("bdw"),range:e.range}),l(hm,{title:"Border Radius",prefix:"bdr",border:e.bdr,setBorder:t("bdr"),range:e.range}),l(HT,{title:"Size",size:e.size,setSize:t("size"),range:e.range}),l(um,{title:"Margin",prefix:"mar",className:e.mar,spacing:e.mar,setSpacing:t("mar"),range:e.range}),l(um,{title:"Padding",prefix:"pad",className:e.pad,spacing:e.pad,setSpacing:t("pad"),range:e.range}),l(YT,{title:"Shadow",prefix:"shadow",shadow:e.shadow,setShadow:t("shadow"),range:e.range}),h("div",{children:[l("h3",{className:"mar-b-2",children:"Options"}),l("div",{className:"grid-fill",style:{"--min-width":"10rem"},children:l(GT,{label:"Show Border",checked:e.border,toggle:n("border")})})]})]})]}),ZT=({options:e})=>{const t=QT(e);return h("div",{className:"surface-5 pad-4",children:[h("div",{className:"flex space baseline stack-desktop mar-b-2",children:[l("h2",{className:"mar-v-none",children:"Output"}),l("div",{className:"text-right",children:h("code",{children:['class="',t,'"']})})]}),l("div",{className:"border surface-4",style:{borderStyle:"dotted"},children:h("div",{className:t,children:[l("h3",{className:"mar-b-2",children:"It's One Louder"}),"You see, most... most blokes, you know, will be playing at ten. You're on ten here... all the way up... all the way up... all the way up. You're on ten on your guitar...where can you go from there? Where? Nowhere. Exactly. What we do is if we need that extra... push over the cliff... you know what we do? Put it up to eleven. Eleven. Exactly. One louder."]})})]})},QT=e=>wi([e.range,Tt(e.bgc)?`bgc-${e.bgc}`:"",Tt(e.fgc)?`fgc-${e.fgc}`:"",Tt(e.hdc)?`hdc-${e.hdc}`:"",Tt(e.bdc)?`bdc-${e.bdc}`:"",Tt(e.bdw)?`bdw-${e.bdw}`:"",Tt(e.bdr)?`bdr-${e.bdr}`:"",e.size,Tt(e.mar)?`mar-${e.mar}`:"",Tt(e.pad)?`pad-${e.pad}`:"",Tt(e.shadow)?`shadow-${e.shadow}`:"",e.border?"border":""]),KT=()=>{const[e,t]=B.useState({range:"brand",bgc:90,fgc:30,hdc:20,bdc:60,bdr:3,bdw:2,pad:4,mar:6,shadow:2,border:!0});return h("div",{className:"grid gap-8",children:[l(ZT,{options:e}),l(qT,{options:e,setOption:a=>o=>t(i=>({...i,[a]:o})),toggleOption:a=>()=>t(o=>({...o,[a]:!o[a]}))})]})},XT=()=>h("div",{children:[l("h1",{children:"Demo"}),h("div",{className:"grid-2 gap-h-8 stack-desktop",children:[h("div",{children:[h("p",{children:["One of the novel approaches that Badger CSS employs is to provide CSS classes for each of the colors in the palette.  There are then further CSS classes that can be used to select the particular shade (or color"," ",'"stop") from that range to use for the background, foreground, heading and border colors.']}),h("p",{children:["One benefit of this approach is that it allows you to design color agnostic components that work with both light and dark themes, and can then be used with any color range.  For some examples, see the"," ",l(Ie,{to:"/components/alerts",text:"Alerts"})," and "," ",l(Ie,{to:"/components/tables",text:"Tables"})," pages"]}),l("p",{children:"Another more practical benefit is that it avoid the combinatorial explosion of CSS classes required to cover every combination of color range and stop for foreground, background, heading and border colors."})]}),h("div",{children:[l("p",{children:"Further utility classes are provided for selecting font size, border width and radius, margins, padding, shadows and various layout options. They're similar to what you'll find in other CSS toolkits."}),l("p",{children:"The choice about what is included and what isn't is entirely arbitrary but I lean towards minimalism and have only included the kind of utility classes that I use in most, if not all web sites. It's really easy for you to add in your own utility classes, or change the settings for the provided utilities, if you want to."}),l("p",{children:"So without further ado, click on the buttons below to select different colors and layout options.  Each one selects a CSS class which affects the way the output is displayed."})]})]}),l(KT,{})]}),JT=Object.freeze(Object.defineProperty({__proto__:null,default:XT},Symbol.toStringTag,{value:"Module"})),e$=`<div class="grid-fit gap-2">
  <button>Default</button>
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
`,t$=`<div class="grid-fit gap-2">
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
`,n$=`<div class="grid-fit gap-2">
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
`,r$=`<div class="grid-fit gap-2">
  <span class="button">Default</span>
  <span class="red shaded button">Red Shaded</span>
  <span class="orange outline button">Orange Outline</span>
</div>
`,a$=`<div class="flex start gap-4">
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
</div>`,l$=`<div class="flex start gap-4">
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
</div>`,o$=()=>h("div",{className:"prose",children:[l("h1",{children:"Buttons"}),h("p",{children:["For the sake of accessibility, buttons should usually be rendered using the ",l("code",{children:"button"})," element.  I mean, that's what it's there for, right?  For those cases when you really need to make a link or something else look like a button you can add the"," ",l("code",{children:"button"})," class."]}),h("p",{children:["The default button color is grey. Any one of the color classes (e.g. ",l("code",{children:"red"}),", ",l("code",{children:"green"}),", etc) can be added to get different colors."]}),l("p",{children:"Button color stops automatically adapt between light and dark modes."}),l("h2",{children:"Default Style"}),l("p",{children:"The default button style is solid."}),l(D,{html:e$,language:"html",caption:"Buttons"}),l("h2",{children:"Outline Style"}),h("p",{children:["Add the ",l("code",{children:"outline"})," class for outline buttons."]}),l(D,{html:t$,caption:"Outline Buttons"}),l("h2",{children:"Shaded Style"}),h("p",{children:["Add the ",l("code",{children:"shade"})," class for subtly shaded buttons.  It's only a matter of time until flat design is out and shaded is back in. Be ahead of the curve!"]}),l(D,{html:n$,caption:"Shaded Buttons"}),l("h2",{children:"Button Class"}),h("p",{children:["Add the ",l("code",{children:"button"})," class to any non-button element to give it the button styling.  You can also add the ",l("code",{children:"outline"})," and/or"," ",l("code",{children:"shaded"})," classes."]}),l(D,{html:r$,caption:".button class"}),l("h2",{children:"Button Icons"}),h("p",{children:["You can add ",l(Ie,{to:"/components/icons",text:"SVG Icons"})," to buttons. You can set the margins for icons manually using the ",l("code",{children:"mar-N"})," ","classes described on the ",l(Ie,{to:"/utilities/spacing",text:"spacing"})," page. The ",l("code",{children:"on-left"})," and ",l("code",{children:"on-right"})," classes are provided as shortcuts and are equivalent to ",l("code",{children:"mar-r-2"})," and ",l("code",{children:"mar-l-2"}),", respectively."]}),l(D,{html:a$,caption:"Button icons"}),l("h2",{children:"Button Padding"}),l("p",{children:"The default padding for buttons is larger in the horizontal direction (4 units = 1em) than it is in the vertical direction (1 unit = 0.25em). This isn't as unbalanced as it initially seems when you factor in the line-height (1.5), which effectively results in  the vertical padding being equivalent to 2 units (0.5em)."}),h("p",{children:["If you have a button that only contains an icon then it can look a bit strange, as shown in the first button here.  Adding the ",l("code",{children:"pad-h-2"})," class to the button will reduce the horizontal padding to 2 units (0.5em) which will even things out, as shown in the second button.  Or you can add the ",l("code",{children:"icon"})," class to the button which will have the same effect and doesn't require you to remember how many units of padding you need to set."]}),l(D,{html:l$,caption:"Button padding"})]}),i$=Object.freeze(Object.defineProperty({__proto__:null,default:o$},Symbol.toStringTag,{value:"Module"})),s$=`<label>
  <input type="checkbox">
  Option 1
</label>

<label class="checkbox">
  <input type="checkbox">
  Option 2
</label>
`,c$=`<label class="wide">
  <input type="checkbox">
  Option 1
</label>

<label class="wide checkbox">
  <input type="checkbox">
  Option 2
</label>
`,d$=`<div class="grid-2 gap-2">
  <label class="border">
    <input type="checkbox">
    Option 1
  </label>

  <label class="border checkbox">
    <input type="checkbox">
    Option 2
  </label>
</div>

<div class="grid gap-2 mar-t-2">
  <label class="border wide">
    <input type="checkbox">
    Full-width checkbox option 3
  </label>

  <label class="border checkbox wide">
    <input type="checkbox">
    Full-width checkbox option 4
  </label>
</div>
`,u$=`<div>
  <style>
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
    .dark .shaded.checkbox {
      color:            var(--color-80);
      background-color: var(--color-15);
      border-color:     var(--color-30);
      accent-color:     var(--color-70);
    }
    .dark .shaded.checkbox:hover {
      color:            var(--color-100);
      background-color: var(--color-20);
      border-color:     var(--color-40);
    }
  </style>
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
</div>`,h$=()=>h("div",{children:[l("h1",{children:"Checkboxes"}),l("h2",{children:"Checkbox Class"}),h("p",{children:["The usual approach to creating a checkbox is to define a"," ",l("code",{children:"label"})," that contains an ",l("code",{children:"input"})," with a",l("code",{children:'type="label"'})," attribute."]}),h("p",{children:["That will work fine on most browsers.  However at the time of writing (July 2023), Firefox (v115) still doesn't support the"," ",l("code",{children:":has()"})," CSS selector that this depends upon.  Although the other major browsers currently support it and we're expecting it to be implemented in Firefox soon."]}),h("p",{children:["As a work-around you can add the ",l("code",{children:"checkbox"})," class to the"," ",l("code",{children:"label"}),"."]}),l(D,{html:s$,language:"html",caption:"Checkboxes"}),l("h2",{children:"Wide Checkboxes"}),h("p",{children:["Add the ",l("code",{children:"wide"})," class for full-width checkboxes."]}),l(D,{html:c$,language:"html",caption:"Wide Checkboxes"}),l("h2",{children:"Checkbox Borders"}),h("p",{children:["Add the ",l("code",{children:"border"})," class for borders."]}),l(D,{html:d$,language:"html",caption:"Border Checkboxes"}),l("h2",{children:"Custom Checkboxes"}),l(D,{html:u$,language:"html",caption:"Custom Checkboxes"})]}),f$=Object.freeze(Object.defineProperty({__proto__:null,default:h$},Symbol.toStringTag,{value:"Module"})),p$=`<div class="field">
  <label>Label</label>
  <input type="text" value="Input value">
  <div class="help">Help message</div>
</div>`,g$=`<div class="field invalid">
  <label>Do you like badgers?</label>
  <input type="text" value="No, I don't">
  <div class="help">I'm sorry, but you're wrong</div>
</div>

<div class="field invalid">
  <label class="checkbox">
    <input type="checkbox">
    I accept that badgers are great
  </label>
  <div class="help">You must welcome our badger overlords!</div>
</div>`,m$=`<div class="field valid">
  <label>Do you like badgers?</label>
  <input type="text" value="Yes, they're great">
  <div class="help">You are correct!</div>
</div>

<div class="field valid">
  <label class="checkbox">
    <input type="checkbox" checked>
    I accept that badgers are great
  </label>
  <div class="help">You have excellent taste!</div>
</div>`,v$=`<div class="field required">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
<div class="field required">
  <label>Terms</label>
  <label class="Xcheckbox">
    <input type="checkbox">
    I accept the terms and conditions
  </label>
</div>`,y$=`<style>
  .mandatory-text {
    --required-text: 'MANDATORY';
  }
</style>
<div class="field required mandatory-text">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
`,b$=`<div class="field optional">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>`,w$=`<style>
  .not-required {
    --optional-text: 'NOT REQUIRED';
  }
</style>
<div class="field optional not-required">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
`,x$=`// define your own text for the required/optional labels...
$field-required-text: '"Important"';
$field-optional-text: '"Not Required"';

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,S$=`<div class="field">
  <label>Price</label>
  <div class="input">
    <div class="prefix">
      £
    </div>
    <input type="text"/>
  </div>
</div>

<div class="field">
  <label>Wide Input</label>
  <div class="input wide">
    <div class="prefix">
      £
    </div>
    <input type="text">
  </div>
</div>

<div class="field">
  <label>Also works with textarea elements</label>
  <div class="input">
    <div class="prefix">
      £
    </div>
    <textarea>Go one louder</textarea>
  </div>
</div>

<div class="field">
  <label>And bordered checkboxes</label>
  <div class="input">
    <div class="prefix">
      £
    </div>
    <label class="checkbox border">
      <input type="checkbox">
      Eleven
    </label>
  </div>
</div>

<div class="field">
  <label>And select elements</label>
  <div class="input">
    <div class="prefix">
      £
    </div>
    <select>
      <option value="10">Ten</option>
      <option value="11">Eleven</option>
    </select>
  </div>
</div>
`,C$=`<div class="field">
  <label>Discount</label>
  <div class="input">
    <input type="text"/>
    <div class="suffix">
      %
    </div>
  </div>
</div>

<div class="field">
  <label>Wide Input</label>
  <div class="input wide">
    <input type="text"/>
    <div class="suffix">
      %
    </div>
  </div>
</div>

<div class="field">
  <label>Also works with textarea elements</label>
  <div class="input">
    <textarea>Go one louder</textarea>
    <div class="suffix">
      %
    </div>
  </div>
</div>

<div class="field">
  <label>And bordered checkboxes</label>
  <div class="input">
    <label class="checkbox border">
      <input type="checkbox">
      Eleven
    </label>
    <div class="suffix">
      %
    </div>
  </div>
</div>

<div class="field">
  <label>And select elements</label>
  <div class="input">
    <select>
      <option value="10">Ten</option>
      <option value="11">Eleven</option>
    </select>
    <div class="suffix">
      £
    </div>
  </div>
</div>
`,k$=`<div class="field">
  <label>Price</label>
  <div class="input">
    <div class="prefix">
      £
    </div>
    <input type="text">
    <div class="suffix">
      .00
    </div>
  </div>
</div>

<div class="valid field">
  <label>Valid Field</label>
  <div class="input">
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
  <label>Invalid Field</label>
  <div class="input">
    <div class="prefix">
      £
    </div>
    <input type="text">
    <div class="suffix">
      .00
    </div>
  </div>
</div>
`,_$=()=>h("div",{className:"prose",children:[l("h1",{children:"Form Fields"}),l("p",{children:"Form fields are usually comprised of more than just an input. A label is usually present and sometimes an additional help message too."}),l("h2",{children:"Field Class"}),h("p",{children:["Create a container with the ",l("code",{children:"field"})," class. Any help message should have the ",l("code",{children:"help"})," class."]}),l(D,{html:p$,language:"html",caption:"Form Field"}),l("h2",{children:"Invalid Field"}),h("p",{children:["Add the ",l("code",{children:"invalid"})," class to the ",l("code",{children:"field"})," to indicate fields that are invalid."]}),l(D,{html:g$,language:"html",caption:"Invalid Field"}),l("h2",{children:"Valid Field"}),h("p",{children:["Add the ",l("code",{children:"valid"})," class to the ",l("code",{children:"field"})," to indicate fields that have passed validation."]}),l(D,{html:m$,language:"html",caption:"Valid Field"}),l("h2",{children:"Required Field"}),h("p",{children:["Add the ",l("code",{children:"required"})," class to the ",l("code",{children:"field"})," if you want an additional tag added to the label."]}),l(D,{html:v$,language:"html",caption:"Required Field"}),h("p",{children:["You can use the ",l("code",{children:"--required-text"})," CSS variable to change the text displayed."]}),l(D,{html:y$,language:"html",caption:"Custom Required Field"}),l("h2",{children:"Optional Field"}),h("p",{children:["Add the ",l("code",{children:"optional"})," class to the ",l("code",{children:"field"})," if you want an additional tag added to the label."]}),l(D,{html:b$,language:"html",caption:"Optional Field"}),h("p",{children:["You can use the ",l("code",{children:"--optional-text"})," CSS variable to change the text displayed."]}),l(D,{html:w$,language:"html",caption:"Custom Optional Field"}),h("p",{children:["You can also change the text displayed for either the required and/or optional labels on a global level by setting the"," ",l("code",{children:"$field-required-text"})," and ",l("code",{children:"$field-optional-text"})," ","SASS variables. Be warned that you need to quote the values twice, so that the value defined includes a set of quotes, as shown here."]}),l(Ke,{code:x$,caption:"Required Text",language:"scss",className:"mar-b-8",expand:!0}),l("h2",{children:"Input Prefix"}),h("p",{children:["If you want to add a prefix to a field you should enclose the input in an element with the ",l("code",{children:"input"})," class and add the"," ",l("code",{children:"prefix"})," class to the prefix element.  You can add a prefix to a text input, textarea, select or a checkbox or radio option with the ",l("code",{children:"border"})," class set.  You can try it without the "," ",l("code",{children:"border"})," but the effect is lost somewhat."]}),h("p",{children:["If you want a wide input then add the ",l("code",{children:"wide"})," class to the"," ",l("code",{children:"input"})," container element."]}),l(D,{html:S$,language:"html",caption:"Input Prefix"}),l("h2",{children:"Input Suffix"}),h("p",{children:["Adding an input suffix is just the same, except for giving your suffix element the ",l("code",{children:"suffix"})," class and putting it after the input."]}),l(D,{html:C$,language:"html",caption:"Input Suffix"}),l("h2",{children:"Prefix and Suffix"}),h("p",{children:["You can add both a ",l("code",{children:"prefix"})," and a ",l("code",{children:"suffix"}),". Not only do the colours and focus rings work correctly, but they also adapt their colors for ",l("code",{children:"valid"})," and ",l("code",{children:"invalid"})," fields."]}),l(D,{html:k$,language:"html",caption:"Prefix and Suffix"})]}),T$=Object.freeze(Object.defineProperty({__proto__:null,default:_$},Symbol.toStringTag,{value:"Module"})),$$=`<fieldset>
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
</fieldset>`,E$=()=>h("div",{className:"prose",children:[l("h1",{children:"Form Field Sets"}),h("p",{children:["You can group related fields together in a ",l("code",{children:"fieldset"}),"."]}),l("h2",{children:"Fieldset Container"}),l(D,{html:$$,language:"html",caption:"Form Fieldset"})]}),N$=Object.freeze(Object.defineProperty({__proto__:null,default:E$},Symbol.toStringTag,{value:"Module"})),fm=`<div class="field">
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
    <label class="checkbox wide">
      <input type="checkbox">
      I have read the terms and conditions
    </label>
  </div>
  <div class="field">
    <label class="checkbox wide baseline">
      <input type="checkbox">
      I don't want to opt out of not being excluded from the<br/>
      list of people who don't care about not receiving your<br/>
      your marketing emails
    </label>
  </div>
  <div class="field">
    <label class="checkbox wide disabled">
      <input type="checkbox" disabled>
      We don't need no stinkin' badgers
    </label>
  </div>
</fieldset>

<div class="text-right">
  <button class="solid brand">Submit</button>
</div>
`,I$=`<div class="grid-1 gap-4">
  <div class="field">
    <label>Text Input</label>
    <div class="flex end gap-4">
      <input type="text" name="input-1" class="wide" placeholder="Search"/>
      <button class="brand">Search</button>
    </div>
  </div>


  <div class="flex end gap-4">
    <label class="radio border">
      <input type="radio" name="color">
      Alpha
    </label>
    <label class="radio border">
      <input type="radio" name="color">
      Bravo
    </label>
    <label class="radio border">
      <input type="radio" name="color">
      Charlie
    </label>
  </div>

  <div class="grid-2 gap-4">
    <div class="field">
      <label>Select Input</label>
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
      <label>Like Badgers?</label>
      <label class="checkbox border wide">
        <input type="checkbox">
        Yes
      </label>
    </div>
  </div>

  <div class="text-right">
    <button class="solid brand">Submit</button>
  </div>
</div>`,L$=`<div class="field optional">
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
    <input type="text" name="input-1" class="wide" placeholder="Placeholder text"/>
    <input type="text" name="input-1" class="wide" value="Input text"/>
  </div>
</div>
<div class="invalid field">
  <label>Invalid field</label>
  <div class="flex gap-4">
    <input type="text" name="input-1" class="wide" placeholder="Placeholder text"/>
    <input type="text" name="input-1" class="wide" value="Input text"/>
  </div>
</div>
<div class="field">
  <label>Field with prefix</label>
  <div class="input wide">
    <div class="prefix">https://</div>
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
`,R$=`<div class="grid-1 gap-4">
  <div class="flex end gap-4">
    <input
      type="text" name="input-1"
      class="wide no-focus" placeholder="Search"
    />
    <button class="brand no-focus">Search</button>
  </div>

  <div class="flex end gap-2">
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
</div>`;var zl={};/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky=B;function ge(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qt=Object.prototype.hasOwnProperty,P$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pm={},gm={};function _y(e){return Qt.call(gm,e)?!0:Qt.call(pm,e)?!1:P$.test(e)?gm[e]=!0:(pm[e]=!0,!1)}function Vt(e,t,n,r,a,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var Lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Lt[e]=new Vt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Lt[t]=new Vt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Lt[e]=new Vt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Lt[e]=new Vt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Lt[e]=new Vt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Lt[e]=new Vt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Lt[e]=new Vt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Lt[e]=new Vt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Lt[e]=new Vt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bf=/[\-:]([a-z])/g;function jf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bf,jf);Lt[t]=new Vt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bf,jf);Lt[t]=new Vt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bf,jf);Lt[t]=new Vt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Lt[e]=new Vt(e,1,!1,e.toLowerCase(),null,!1,!1)});Lt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Lt[e]=new Vt(e,1,!1,e.toLowerCase(),null,!0,!0)});var Ss={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},M$=["Webkit","ms","Moz","O"];Object.keys(Ss).forEach(function(e){M$.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ss[t]=Ss[e]})});var F$=/["'&<>]/;function jt(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=F$.exec(e);if(t){var n="",r,a=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}a!==r&&(n+=e.substring(a,r)),a=r+1,n+=t}e=a!==r?n+e.substring(a,r):n}return e}var A$=/([A-Z])/g,O$=/^ms-/,rh=Array.isArray;function rr(e,t){return{insertionMode:e,selectedValue:t}}function D$(e,t,n){switch(t){case"select":return rr(1,n.value!=null?n.value:n.defaultValue);case"svg":return rr(2,null);case"math":return rr(3,null);case"foreignObject":return rr(1,null);case"table":return rr(4,null);case"thead":case"tbody":case"tfoot":return rr(5,null);case"colgroup":return rr(7,null);case"tr":return rr(6,null)}return 4<=e.insertionMode||e.insertionMode===0?rr(1,null):e}var mm=new Map;function Ty(e,t,n){if(typeof n!="object")throw Error(ge(62));t=!0;for(var r in n)if(Qt.call(n,r)){var a=n[r];if(a!=null&&typeof a!="boolean"&&a!==""){if(r.indexOf("--")===0){var o=jt(r);a=jt((""+a).trim())}else{o=r;var i=mm.get(o);i!==void 0||(i=jt(o.replace(A$,"-$1").toLowerCase().replace(O$,"-ms-")),mm.set(o,i)),o=i,a=typeof a=="number"?a===0||Qt.call(Ss,r)?""+a:a+"px":jt((""+a).trim())}t?(t=!1,e.push(' style="',o,":",a)):e.push(";",o,":",a)}}t||e.push('"')}function an(e,t,n,r){switch(n){case"style":Ty(e,t,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N"){if(t=Lt.hasOwnProperty(n)?Lt[n]:null,t!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(n=t.attributeName,t.type){case 3:r&&e.push(" ",n,'=""');break;case 4:r===!0?e.push(" ",n,'=""'):r!==!1&&e.push(" ",n,'="',jt(r),'"');break;case 5:isNaN(r)||e.push(" ",n,'="',jt(r),'"');break;case 6:!isNaN(r)&&1<=r&&e.push(" ",n,'="',jt(r),'"');break;default:t.sanitizeURL&&(r=""+r),e.push(" ",n,'="',jt(r),'"')}}else if(_y(n)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(t=n.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-")return}e.push(" ",n,'="',jt(r),'"')}}}function Cs(e,t,n){if(t!=null){if(n!=null)throw Error(ge(60));if(typeof t!="object"||!("__html"in t))throw Error(ge(61));t=t.__html,t!=null&&e.push(""+t)}}function z$(e){var t="";return ky.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function Hd(e,t,n,r){e.push(Wn(n));var a=n=null,o;for(o in t)if(Qt.call(t,o)){var i=t[o];if(i!=null)switch(o){case"children":n=i;break;case"dangerouslySetInnerHTML":a=i;break;default:an(e,r,o,i)}}return e.push(">"),Cs(e,a,n),typeof n=="string"?(e.push(jt(n)),null):n}var B$=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,vm=new Map;function Wn(e){var t=vm.get(e);if(t===void 0){if(!B$.test(e))throw Error(ge(65,e));t="<"+e,vm.set(e,t)}return t}function j$(e,t,n,r,a){switch(t){case"select":e.push(Wn("select"));var o=null,i=null;for(m in n)if(Qt.call(n,m)){var s=n[m];if(s!=null)switch(m){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"defaultValue":case"value":break;default:an(e,r,m,s)}}return e.push(">"),Cs(e,i,o),o;case"option":i=a.selectedValue,e.push(Wn("option"));var d=s=null,f=null,m=null;for(o in n)if(Qt.call(n,o)){var b=n[o];if(b!=null)switch(o){case"children":s=b;break;case"selected":f=b;break;case"dangerouslySetInnerHTML":m=b;break;case"value":d=b;default:an(e,r,o,b)}}if(i!=null)if(n=d!==null?""+d:z$(s),rh(i)){for(r=0;r<i.length;r++)if(""+i[r]===n){e.push(' selected=""');break}}else""+i===n&&e.push(' selected=""');else f&&e.push(' selected=""');return e.push(">"),Cs(e,m,s),s;case"textarea":e.push(Wn("textarea")),m=i=o=null;for(s in n)if(Qt.call(n,s)&&(d=n[s],d!=null))switch(s){case"children":m=d;break;case"value":o=d;break;case"defaultValue":i=d;break;case"dangerouslySetInnerHTML":throw Error(ge(91));default:an(e,r,s,d)}if(o===null&&i!==null&&(o=i),e.push(">"),m!=null){if(o!=null)throw Error(ge(92));if(rh(m)&&1<m.length)throw Error(ge(93));o=""+m}return typeof o=="string"&&o[0]===`
`&&e.push(`
`),o!==null&&e.push(jt(""+o)),null;case"input":e.push(Wn("input")),d=m=s=o=null;for(i in n)if(Qt.call(n,i)&&(f=n[i],f!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(ge(399,"input"));case"defaultChecked":d=f;break;case"defaultValue":s=f;break;case"checked":m=f;break;case"value":o=f;break;default:an(e,r,i,f)}return m!==null?an(e,r,"checked",m):d!==null&&an(e,r,"checked",d),o!==null?an(e,r,"value",o):s!==null&&an(e,r,"value",s),e.push("/>"),null;case"menuitem":e.push(Wn("menuitem"));for(var S in n)if(Qt.call(n,S)&&(o=n[S],o!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(ge(400));default:an(e,r,S,o)}return e.push(">"),null;case"title":e.push(Wn("title")),o=null;for(b in n)if(Qt.call(n,b)&&(i=n[b],i!=null))switch(b){case"children":o=i;break;case"dangerouslySetInnerHTML":throw Error(ge(434));default:an(e,r,b,i)}return e.push(">"),o;case"listing":case"pre":e.push(Wn(t)),i=o=null;for(d in n)if(Qt.call(n,d)&&(s=n[d],s!=null))switch(d){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;default:an(e,r,d,s)}if(e.push(">"),i!=null){if(o!=null)throw Error(ge(60));if(typeof i!="object"||!("__html"in i))throw Error(ge(61));n=i.__html,n!=null&&(typeof n=="string"&&0<n.length&&n[0]===`
`?e.push(`
`,n):e.push(""+n))}return typeof o=="string"&&o[0]===`
`&&e.push(`
`),o;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Wn(t));for(var I in n)if(Qt.call(n,I)&&(o=n[I],o!=null))switch(I){case"children":case"dangerouslySetInnerHTML":throw Error(ge(399,t));default:an(e,r,I,o)}return e.push("/>"),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Hd(e,n,t,r);case"html":return a.insertionMode===0&&e.push("<!DOCTYPE html>"),Hd(e,n,t,r);default:if(t.indexOf("-")===-1&&typeof n.is!="string")return Hd(e,n,t,r);e.push(Wn(t)),i=o=null;for(f in n)if(Qt.call(n,f)&&(s=n[f],s!=null))switch(f){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"style":Ty(e,r,s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:_y(f)&&typeof s!="function"&&typeof s!="symbol"&&e.push(" ",f,'="',jt(s),'"')}return e.push(">"),Cs(e,i,o),o}}function ym(e,t,n){if(e.push('<!--$?--><template id="'),n===null)throw Error(ge(395));return e.push(n),e.push('"></template>')}function U$(e,t,n,r){switch(n.insertionMode){case 0:case 1:return e.push('<div hidden id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 2:return e.push('<svg aria-hidden="true" style="display:none" id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 3:return e.push('<math aria-hidden="true" style="display:none" id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 4:return e.push('<table hidden id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 5:return e.push('<table hidden><tbody id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 6:return e.push('<table hidden><tr id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 7:return e.push('<table hidden><colgroup id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');default:throw Error(ge(397))}}function W$(e,t){switch(t.insertionMode){case 0:case 1:return e.push("</div>");case 2:return e.push("</svg>");case 3:return e.push("</math>");case 4:return e.push("</table>");case 5:return e.push("</tbody></table>");case 6:return e.push("</tr></table>");case 7:return e.push("</colgroup></table>");default:throw Error(ge(397))}}var H$=/[<\u2028\u2029]/g;function Vd(e){return JSON.stringify(e).replace(H$,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}function V$(e,t){return t=t===void 0?"":t,{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:t+"P:",segmentPrefix:t+"S:",boundaryPrefix:t+"B:",idPrefix:t,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:e}}function bm(e,t,n,r){return n.generateStaticMarkup?(e.push(jt(t)),!1):(t===""?e=r:(r&&e.push("<!-- -->"),e.push(jt(t)),e=!0),e)}var Fo=Object.assign,G$=Symbol.for("react.element"),$y=Symbol.for("react.portal"),Ey=Symbol.for("react.fragment"),Ny=Symbol.for("react.strict_mode"),Iy=Symbol.for("react.profiler"),Ly=Symbol.for("react.provider"),Ry=Symbol.for("react.context"),Py=Symbol.for("react.forward_ref"),My=Symbol.for("react.suspense"),Fy=Symbol.for("react.suspense_list"),Ay=Symbol.for("react.memo"),Uf=Symbol.for("react.lazy"),Y$=Symbol.for("react.scope"),q$=Symbol.for("react.debug_trace_mode"),Z$=Symbol.for("react.legacy_hidden"),Q$=Symbol.for("react.default_value"),wm=Symbol.iterator;function ah(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ey:return"Fragment";case $y:return"Portal";case Iy:return"Profiler";case Ny:return"StrictMode";case My:return"Suspense";case Fy:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ry:return(e.displayName||"Context")+".Consumer";case Ly:return(e._context.displayName||"Context")+".Provider";case Py:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ay:return t=e.displayName||null,t!==null?t:ah(e.type)||"Memo";case Uf:t=e._payload,e=e._init;try{return ah(e(t))}catch{}}return null}var Oy={};function xm(e,t){if(e=e.contextTypes,!e)return Oy;var n={},r;for(r in e)n[r]=t[r];return n}var xa=null;function Fc(e,t){if(e!==t){e.context._currentValue2=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(ge(401))}else{if(n===null)throw Error(ge(401));Fc(e,n)}t.context._currentValue2=t.value}}function Dy(e){e.context._currentValue2=e.parentValue,e=e.parent,e!==null&&Dy(e)}function zy(e){var t=e.parent;t!==null&&zy(t),e.context._currentValue2=e.value}function By(e,t){if(e.context._currentValue2=e.parentValue,e=e.parent,e===null)throw Error(ge(402));e.depth===t.depth?Fc(e,t):By(e,t)}function jy(e,t){var n=t.parent;if(n===null)throw Error(ge(402));e.depth===n.depth?Fc(e,n):jy(e,n),t.context._currentValue2=t.value}function ac(e){var t=xa;t!==e&&(t===null?zy(e):e===null?Dy(t):t.depth===e.depth?Fc(t,e):t.depth>e.depth?By(t,e):jy(t,e),xa=e)}var Sm={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function Cm(e,t,n,r){var a=e.state!==void 0?e.state:null;e.updater=Sm,e.props=n,e.state=a;var o={queue:[],replace:!1};e._reactInternals=o;var i=t.contextType;if(e.context=typeof i=="object"&&i!==null?i._currentValue2:r,i=t.getDerivedStateFromProps,typeof i=="function"&&(i=i(n,a),a=i==null?a:Fo({},a,i),e.state=a),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&Sm.enqueueReplaceState(e,e.state,null),o.queue!==null&&0<o.queue.length)if(t=o.queue,i=o.replace,o.queue=null,o.replace=!1,i&&t.length===1)e.state=t[0];else{for(o=i?t[0]:e.state,a=!0,i=i?1:0;i<t.length;i++){var s=t[i];s=typeof s=="function"?s.call(e,o,n,r):s,s!=null&&(a?(a=!1,o=Fo({},o,s)):Fo(o,s))}e.state=o}else o.queue=null}var K$={id:1,overflow:""};function lh(e,t,n){var r=e.id;e=e.overflow;var a=32-ks(r)-1;r&=~(1<<a),n+=1;var o=32-ks(t)+a;if(30<o){var i=a-a%5;return o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,{id:1<<32-ks(t)+a|n<<a|r,overflow:o+e}}return{id:1<<o|n<<a|r,overflow:e}}var ks=Math.clz32?Math.clz32:eE,X$=Math.log,J$=Math.LN2;function eE(e){return e>>>=0,e===0?32:31-(X$(e)/J$|0)|0}function tE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nE=typeof Object.is=="function"?Object.is:tE,gr=null,Wf=null,_s=null,Ue=null,xo=!1,lc=!1,li=0,Pr=null,Ac=0;function fa(){if(gr===null)throw Error(ge(321));return gr}function km(){if(0<Ac)throw Error(ge(312));return{memoizedState:null,queue:null,next:null}}function Hf(){return Ue===null?_s===null?(xo=!1,_s=Ue=km()):(xo=!0,Ue=_s):Ue.next===null?(xo=!1,Ue=Ue.next=km()):(xo=!0,Ue=Ue.next),Ue}function Vf(){Wf=gr=null,lc=!1,_s=null,Ac=0,Ue=Pr=null}function Uy(e,t){return typeof t=="function"?t(e):t}function _m(e,t,n){if(gr=fa(),Ue=Hf(),xo){var r=Ue.queue;if(t=r.dispatch,Pr!==null&&(n=Pr.get(r),n!==void 0)){Pr.delete(r),r=Ue.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return Ue.memoizedState=r,[r,t]}return[Ue.memoizedState,t]}return e=e===Uy?typeof t=="function"?t():t:n!==void 0?n(t):t,Ue.memoizedState=e,e=Ue.queue={last:null,dispatch:null},e=e.dispatch=rE.bind(null,gr,e),[Ue.memoizedState,e]}function Tm(e,t){if(gr=fa(),Ue=Hf(),t=t===void 0?null:t,Ue!==null){var n=Ue.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var a=0;a<r.length&&a<t.length;a++)if(!nE(t[a],r[a])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),Ue.memoizedState=[e,t],e}function rE(e,t,n){if(25<=Ac)throw Error(ge(301));if(e===gr)if(lc=!0,e={action:n,next:null},Pr===null&&(Pr=new Map),n=Pr.get(t),n===void 0)Pr.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function aE(){throw Error(ge(394))}function rs(){}var $m={readContext:function(e){return e._currentValue2},useContext:function(e){return fa(),e._currentValue2},useMemo:Tm,useReducer:_m,useRef:function(e){gr=fa(),Ue=Hf();var t=Ue.memoizedState;return t===null?(e={current:e},Ue.memoizedState=e):t},useState:function(e){return _m(Uy,e)},useInsertionEffect:rs,useLayoutEffect:function(){},useCallback:function(e,t){return Tm(function(){return e},t)},useImperativeHandle:rs,useEffect:rs,useDebugValue:rs,useDeferredValue:function(e){return fa(),e},useTransition:function(){return fa(),[!1,aE]},useId:function(){var e=Wf.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-ks(e)-1)).toString(32)+t;var n=Ts;if(n===null)throw Error(ge(404));return t=li++,e=":"+n.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return fa(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(ge(407));return n()}},Ts=null,Gd=ky.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function lE(e){return console.error(e),null}function So(){}function oE(e,t,n,r,a,o,i,s,d){var f=[],m=new Set;return t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:m,pingedTasks:f,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:a===void 0?lE:a,onAllReady:o===void 0?So:o,onShellReady:i===void 0?So:i,onShellError:s===void 0?So:s,onFatalError:d===void 0?So:d},n=oc(t,0,null,n,!1,!1),n.parentFlushed=!0,e=Gf(t,e,null,n,m,Oy,null,K$),f.push(e),t}function Gf(e,t,n,r,a,o,i,s){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var d={node:t,ping:function(){var f=e.pingedTasks;f.push(d),f.length===1&&Vy(e)},blockedBoundary:n,blockedSegment:r,abortSet:a,legacyContext:o,context:i,treeContext:s};return a.add(d),d}function oc(e,t,n,r,a,o){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:a,textEmbedded:o}}function oi(e,t){if(e=e.onError(t),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function ic(e,t){var n=e.onShellError;n(t),n=e.onFatalError,n(t),e.destination!==null?(e.status=2,e.destination.destroy(t)):(e.status=1,e.fatalError=t)}function Em(e,t,n,r,a){for(gr={},Wf=t,li=0,e=n(r,a);lc;)lc=!1,li=0,Ac+=1,Ue=null,e=n(r,a);return Vf(),e}function Nm(e,t,n,r){var a=n.render(),o=r.childContextTypes;if(o!=null){var i=t.legacyContext;if(typeof n.getChildContext!="function")r=i;else{n=n.getChildContext();for(var s in n)if(!(s in o))throw Error(ge(108,ah(r)||"Unknown",s));r=Fo({},i,n)}t.legacyContext=r,sn(e,t,a),t.legacyContext=i}else sn(e,t,a)}function Im(e,t){if(e&&e.defaultProps){t=Fo({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function oh(e,t,n,r,a){if(typeof n=="function")if(n.prototype&&n.prototype.isReactComponent){a=xm(n,t.legacyContext);var o=n.contextType;o=new n(r,typeof o=="object"&&o!==null?o._currentValue2:a),Cm(o,n,r,a),Nm(e,t,o,n)}else{o=xm(n,t.legacyContext),a=Em(e,t,n,r,o);var i=li!==0;if(typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0)Cm(a,n,r,o),Nm(e,t,a,n);else if(i){r=t.treeContext,t.treeContext=lh(r,1,0);try{sn(e,t,a)}finally{t.treeContext=r}}else sn(e,t,a)}else if(typeof n=="string"){switch(a=t.blockedSegment,o=j$(a.chunks,n,r,e.responseState,a.formatContext),a.lastPushedText=!1,i=a.formatContext,a.formatContext=D$(i,n,r),ih(e,t,o),a.formatContext=i,n){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:a.chunks.push("</",n,">")}a.lastPushedText=!1}else{switch(n){case Z$:case q$:case Ny:case Iy:case Ey:sn(e,t,r.children);return;case Fy:sn(e,t,r.children);return;case Y$:throw Error(ge(343));case My:e:{n=t.blockedBoundary,a=t.blockedSegment,o=r.fallback,r=r.children,i=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:i,errorDigest:null},d=oc(e,a.chunks.length,s,a.formatContext,!1,!1);a.children.push(d),a.lastPushedText=!1;var f=oc(e,0,null,a.formatContext,!1,!1);f.parentFlushed=!0,t.blockedBoundary=s,t.blockedSegment=f;try{if(ih(e,t,r),e.responseState.generateStaticMarkup||f.lastPushedText&&f.textEmbedded&&f.chunks.push("<!-- -->"),f.status=1,sc(s,f),s.pendingTasks===0)break e}catch(m){f.status=4,s.forceClientRender=!0,s.errorDigest=oi(e,m)}finally{t.blockedBoundary=n,t.blockedSegment=a}t=Gf(e,o,n,d,i,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Py:if(r=Em(e,t,n.render,r,a),li!==0){n=t.treeContext,t.treeContext=lh(n,1,0);try{sn(e,t,r)}finally{t.treeContext=n}}else sn(e,t,r);return;case Ay:n=n.type,r=Im(n,r),oh(e,t,n,r,a);return;case Ly:if(a=r.children,n=n._context,r=r.value,o=n._currentValue2,n._currentValue2=r,i=xa,xa=r={parent:i,depth:i===null?0:i.depth+1,context:n,parentValue:o,value:r},t.context=r,sn(e,t,a),e=xa,e===null)throw Error(ge(403));r=e.parentValue,e.context._currentValue2=r===Q$?e.context._defaultValue:r,e=xa=e.parent,t.context=e;return;case Ry:r=r.children,r=r(n._currentValue2),sn(e,t,r);return;case Uf:a=n._init,n=a(n._payload),r=Im(n,r),oh(e,t,n,r,void 0);return}throw Error(ge(130,n==null?n:typeof n,""))}}function sn(e,t,n){if(t.node=n,typeof n=="object"&&n!==null){switch(n.$$typeof){case G$:oh(e,t,n.type,n.props,n.ref);return;case $y:throw Error(ge(257));case Uf:var r=n._init;n=r(n._payload),sn(e,t,n);return}if(rh(n)){Lm(e,t,n);return}if(n===null||typeof n!="object"?r=null:(r=wm&&n[wm]||n["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(n))){if(n=r.next(),!n.done){var a=[];do a.push(n.value),n=r.next();while(!n.done);Lm(e,t,a)}return}throw e=Object.prototype.toString.call(n),Error(ge(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}typeof n=="string"?(r=t.blockedSegment,r.lastPushedText=bm(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText)):typeof n=="number"&&(r=t.blockedSegment,r.lastPushedText=bm(t.blockedSegment.chunks,""+n,e.responseState,r.lastPushedText))}function Lm(e,t,n){for(var r=n.length,a=0;a<r;a++){var o=t.treeContext;t.treeContext=lh(o,r,a);try{ih(e,t,n[a])}finally{t.treeContext=o}}}function ih(e,t,n){var r=t.blockedSegment.formatContext,a=t.legacyContext,o=t.context;try{return sn(e,t,n)}catch(d){if(Vf(),typeof d=="object"&&d!==null&&typeof d.then=="function"){n=d;var i=t.blockedSegment,s=oc(e,i.chunks.length,null,i.formatContext,i.lastPushedText,!0);i.children.push(s),i.lastPushedText=!1,e=Gf(e,t.node,t.blockedBoundary,s,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=a,t.context=o,ac(o)}else throw t.blockedSegment.formatContext=r,t.legacyContext=a,t.context=o,ac(o),d}}function iE(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,Hy(this,t,e)}function Wy(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.push(null))):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(ge(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(a){return Wy(a,t,n)}),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady,r()))}function sc(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&sc(e,n)}else e.completedSegments.push(t)}function Hy(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(ge(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=So,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&sc(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(iE,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(sc(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function Vy(e){if(e.status!==2){var t=xa,n=Gd.current;Gd.current=$m;var r=Ts;Ts=e.responseState;try{var a=e.pingedTasks,o;for(o=0;o<a.length;o++){var i=a[o],s=e,d=i.blockedSegment;if(d.status===0){ac(i.context);try{sn(s,i,i.node),s.responseState.generateStaticMarkup||d.lastPushedText&&d.textEmbedded&&d.chunks.push("<!-- -->"),i.abortSet.delete(i),d.status=1,Hy(s,i.blockedBoundary,d)}catch(N){if(Vf(),typeof N=="object"&&N!==null&&typeof N.then=="function"){var f=i.ping;N.then(f,f)}else{i.abortSet.delete(i),d.status=4;var m=i.blockedBoundary,b=N,S=oi(s,b);if(m===null?ic(s,b):(m.pendingTasks--,m.forceClientRender||(m.forceClientRender=!0,m.errorDigest=S,m.parentFlushed&&s.clientRenderedBoundaries.push(m))),s.allPendingTasks--,s.allPendingTasks===0){var I=s.onAllReady;I()}}}finally{}}}a.splice(0,o),e.destination!==null&&Yf(e,e.destination)}catch(N){oi(e,N),ic(e,N)}finally{Ts=r,Gd.current=n,n===$m&&ac(t)}}}function as(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,t.push('<template id="'),t.push(e.placeholderPrefix),e=r.toString(16),t.push(e),t.push('"></template>');case 1:n.status=2;var a=!0;r=n.chunks;var o=0;n=n.children;for(var i=0;i<n.length;i++){for(a=n[i];o<a.index;o++)t.push(r[o]);a=Oc(e,t,a)}for(;o<r.length-1;o++)t.push(r[o]);return o<r.length&&(a=t.push(r[o])),a;default:throw Error(ge(390))}}function Oc(e,t,n){var r=n.boundary;if(r===null)return as(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)return e.responseState.generateStaticMarkup||(r=r.errorDigest,t.push("<!--$!-->"),t.push("<template"),r&&(t.push(' data-dgst="'),r=jt(r),t.push(r),t.push('"')),t.push("></template>")),as(e,t,n),e=e.responseState.generateStaticMarkup?!0:t.push("<!--/$-->"),e;if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var a=e.responseState,o=a.nextSuspenseID++;return a=a.boundaryPrefix+o.toString(16),r=r.id=a,ym(t,e.responseState,r),as(e,t,n),t.push("<!--/$-->")}if(r.byteSize>e.progressiveChunkSize)return r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),ym(t,e.responseState,r.id),as(e,t,n),t.push("<!--/$-->");if(e.responseState.generateStaticMarkup||t.push("<!--$-->"),n=r.completedSegments,n.length!==1)throw Error(ge(391));return Oc(e,t,n[0]),e=e.responseState.generateStaticMarkup?!0:t.push("<!--/$-->"),e}function Rm(e,t,n){return U$(t,e.responseState,n.formatContext,n.id),Oc(e,t,n),W$(t,n.formatContext)}function Pm(e,t,n){for(var r=n.completedSegments,a=0;a<r.length;a++)Gy(e,t,n,r[a]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,t.push(e.startInlineScript),e.sentCompleteBoundaryFunction?t.push('$RC("'):(e.sentCompleteBoundaryFunction=!0,t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')),r===null)throw Error(ge(395));return n=n.toString(16),t.push(r),t.push('","'),t.push(e.segmentPrefix),t.push(n),t.push('")<\/script>')}function Gy(e,t,n,r){if(r.status===2)return!0;var a=r.id;if(a===-1){if((r.id=n.rootSegmentID)===-1)throw Error(ge(392));return Rm(e,t,r)}return Rm(e,t,r),e=e.responseState,t.push(e.startInlineScript),e.sentCompleteSegmentFunction?t.push('$RS("'):(e.sentCompleteSegmentFunction=!0,t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')),t.push(e.segmentPrefix),a=a.toString(16),t.push(a),t.push('","'),t.push(e.placeholderPrefix),t.push(a),t.push('")<\/script>')}function Yf(e,t){try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){Oc(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)t.push(r[n]);n<r.length&&t.push(r[n])}var a=e.clientRenderedBoundaries,o;for(o=0;o<a.length;o++){var i=a[o];r=t;var s=e.responseState,d=i.id,f=i.errorDigest,m=i.errorMessage,b=i.errorComponentStack;if(r.push(s.startInlineScript),s.sentClientRenderFunction?r.push('$RX("'):(s.sentClientRenderFunction=!0,r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')),d===null)throw Error(ge(395));if(r.push(d),r.push('"'),f||m||b){r.push(",");var S=Vd(f||"");r.push(S)}if(m||b){r.push(",");var I=Vd(m||"");r.push(I)}if(b){r.push(",");var N=Vd(b);r.push(N)}if(!r.push(")<\/script>")){e.destination=null,o++,a.splice(0,o);return}}a.splice(0,o);var C=e.completedBoundaries;for(o=0;o<C.length;o++)if(!Pm(e,t,C[o])){e.destination=null,o++,C.splice(0,o);return}C.splice(0,o);var L=e.partialBoundaries;for(o=0;o<L.length;o++){var w=L[o];e:{a=e,i=t;var g=w.completedSegments;for(s=0;s<g.length;s++)if(!Gy(a,i,w,g[s])){s++,g.splice(0,s);var y=!1;break e}g.splice(0,s),y=!0}if(!y){e.destination=null,o++,L.splice(0,o);return}}L.splice(0,o);var v=e.completedBoundaries;for(o=0;o<v.length;o++)if(!Pm(e,t,v[o])){e.destination=null,o++,v.splice(0,o);return}v.splice(0,o)}finally{e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.push(null)}}function sE(e,t){try{var n=e.abortableTasks;n.forEach(function(r){return Wy(r,e,t)}),n.clear(),e.destination!==null&&Yf(e,e.destination)}catch(r){oi(e,r),ic(e,r)}}function cE(){}function Yy(e,t,n,r){var a=!1,o=null,i="",s={push:function(f){return f!==null&&(i+=f),!0},destroy:function(f){a=!0,o=f}},d=!1;if(e=oE(e,V$(n,t?t.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,cE,void 0,function(){d=!0},void 0,void 0),Vy(e),sE(e,r),e.status===1)e.status=2,s.destroy(e.fatalError);else if(e.status!==2&&e.destination===null){e.destination=s;try{Yf(e,s)}catch(f){oi(e,f),ic(e,f)}}if(a)throw o;if(!d)throw Error(ge(426));return i}zl.renderToNodeStream=function(){throw Error(ge(207))};zl.renderToStaticMarkup=function(e,t){return Yy(e,t,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};zl.renderToStaticNodeStream=function(){throw Error(ge(208))};zl.renderToString=function(e,t){return Yy(e,t,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};zl.version="18.2.0";var qf={};/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qy=B;function ye(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cn=null,dn=0;function re(e,t){if(t.length!==0)if(512<t.length)0<dn&&(e.enqueue(new Uint8Array(cn.buffer,0,dn)),cn=new Uint8Array(512),dn=0),e.enqueue(t);else{var n=cn.length-dn;n<t.length&&(n===0?e.enqueue(cn):(cn.set(t.subarray(0,n),dn),e.enqueue(cn),t=t.subarray(n)),cn=new Uint8Array(512),dn=0),cn.set(t,dn),dn+=t.length}}function Qe(e,t){return re(e,t),!0}function Mm(e){cn&&0<dn&&(e.enqueue(new Uint8Array(cn.buffer,0,dn)),cn=null,dn=0)}var Zy=new TextEncoder;function xe(e){return Zy.encode(e)}function X(e){return Zy.encode(e)}function Qy(e,t){typeof e.error=="function"?e.error(t):e.close()}var Kt=Object.prototype.hasOwnProperty,dE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fm={},Am={};function Ky(e){return Kt.call(Am,e)?!0:Kt.call(Fm,e)?!1:dE.test(e)?Am[e]=!0:(Fm[e]=!0,!1)}function Gt(e,t,n,r,a,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var Rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Rt[e]=new Gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Rt[t]=new Gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Rt[e]=new Gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Rt[e]=new Gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Rt[e]=new Gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Rt[e]=new Gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Rt[e]=new Gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Rt[e]=new Gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Rt[e]=new Gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zf=/[\-:]([a-z])/g;function Qf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zf,Qf);Rt[t]=new Gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zf,Qf);Rt[t]=new Gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zf,Qf);Rt[t]=new Gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Rt[e]=new Gt(e,1,!1,e.toLowerCase(),null,!1,!1)});Rt.xlinkHref=new Gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Rt[e]=new Gt(e,1,!1,e.toLowerCase(),null,!0,!0)});var $s={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uE=["Webkit","ms","Moz","O"];Object.keys($s).forEach(function(e){uE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$s[t]=$s[e]})});var hE=/["'&<>]/;function Et(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=hE.exec(e);if(t){var n="",r,a=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}a!==r&&(n+=e.substring(a,r)),a=r+1,n+=t}e=a!==r?n+e.substring(a,r):n}return e}var fE=/([A-Z])/g,pE=/^ms-/,sh=Array.isArray,gE=X("<script>"),mE=X("<\/script>"),vE=X('<script src="'),yE=X('<script type="module" src="'),Om=X('" async=""><\/script>'),bE=/(<\/|<)(s)(cript)/gi;function wE(e,t,n,r){return""+t+(n==="s"?"\\u0073":"\\u0053")+r}function xE(e,t,n,r,a){e=e===void 0?"":e,t=t===void 0?gE:X('<script nonce="'+Et(t)+'">');var o=[];if(n!==void 0&&o.push(t,xe((""+n).replace(bE,wE)),mE),r!==void 0)for(n=0;n<r.length;n++)o.push(vE,xe(Et(r[n])),Om);if(a!==void 0)for(r=0;r<a.length;r++)o.push(yE,xe(Et(a[r])),Om);return{bootstrapChunks:o,startInlineScript:t,placeholderPrefix:X(e+"P:"),segmentPrefix:X(e+"S:"),boundaryPrefix:e+"B:",idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function Hn(e,t){return{insertionMode:e,selectedValue:t}}function SE(e){return Hn(e==="http://www.w3.org/2000/svg"?2:e==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function CE(e,t,n){switch(t){case"select":return Hn(1,n.value!=null?n.value:n.defaultValue);case"svg":return Hn(2,null);case"math":return Hn(3,null);case"foreignObject":return Hn(1,null);case"table":return Hn(4,null);case"thead":case"tbody":case"tfoot":return Hn(5,null);case"colgroup":return Hn(7,null);case"tr":return Hn(6,null)}return 4<=e.insertionMode||e.insertionMode===0?Hn(1,null):e}var Kf=X("<!-- -->");function Dm(e,t,n,r){return t===""?r:(r&&e.push(Kf),e.push(xe(Et(t))),!0)}var zm=new Map,kE=X(' style="'),Bm=X(":"),_E=X(";");function Xy(e,t,n){if(typeof n!="object")throw Error(ye(62));t=!0;for(var r in n)if(Kt.call(n,r)){var a=n[r];if(a!=null&&typeof a!="boolean"&&a!==""){if(r.indexOf("--")===0){var o=xe(Et(r));a=xe(Et((""+a).trim()))}else{o=r;var i=zm.get(o);i!==void 0||(i=X(Et(o.replace(fE,"-$1").toLowerCase().replace(pE,"-ms-"))),zm.set(o,i)),o=i,a=typeof a=="number"?a===0||Kt.call($s,r)?xe(""+a):xe(a+"px"):xe(Et((""+a).trim()))}t?(t=!1,e.push(kE,o,Bm,a)):e.push(_E,o,Bm,a)}}t||e.push(pa)}var _r=X(" "),el=X('="'),pa=X('"'),jm=X('=""');function ln(e,t,n,r){switch(n){case"style":Xy(e,t,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N"){if(t=Rt.hasOwnProperty(n)?Rt[n]:null,t!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(n=xe(t.attributeName),t.type){case 3:r&&e.push(_r,n,jm);break;case 4:r===!0?e.push(_r,n,jm):r!==!1&&e.push(_r,n,el,xe(Et(r)),pa);break;case 5:isNaN(r)||e.push(_r,n,el,xe(Et(r)),pa);break;case 6:!isNaN(r)&&1<=r&&e.push(_r,n,el,xe(Et(r)),pa);break;default:t.sanitizeURL&&(r=""+r),e.push(_r,n,el,xe(Et(r)),pa)}}else if(Ky(n)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(t=n.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-")return}e.push(_r,xe(n),el,xe(Et(r)),pa)}}}var Tr=X(">"),Um=X("/>");function Es(e,t,n){if(t!=null){if(n!=null)throw Error(ye(60));if(typeof t!="object"||!("__html"in t))throw Error(ye(61));t=t.__html,t!=null&&e.push(xe(""+t))}}function TE(e){var t="";return qy.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}var Yd=X(' selected=""');function qd(e,t,n,r){e.push(Vn(n));var a=n=null,o;for(o in t)if(Kt.call(t,o)){var i=t[o];if(i!=null)switch(o){case"children":n=i;break;case"dangerouslySetInnerHTML":a=i;break;default:ln(e,r,o,i)}}return e.push(Tr),Es(e,a,n),typeof n=="string"?(e.push(xe(Et(n))),null):n}var Zd=X(`
`),$E=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Wm=new Map;function Vn(e){var t=Wm.get(e);if(t===void 0){if(!$E.test(e))throw Error(ye(65,e));t=X("<"+e),Wm.set(e,t)}return t}var EE=X("<!DOCTYPE html>");function NE(e,t,n,r,a){switch(t){case"select":e.push(Vn("select"));var o=null,i=null;for(m in n)if(Kt.call(n,m)){var s=n[m];if(s!=null)switch(m){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"defaultValue":case"value":break;default:ln(e,r,m,s)}}return e.push(Tr),Es(e,i,o),o;case"option":i=a.selectedValue,e.push(Vn("option"));var d=s=null,f=null,m=null;for(o in n)if(Kt.call(n,o)){var b=n[o];if(b!=null)switch(o){case"children":s=b;break;case"selected":f=b;break;case"dangerouslySetInnerHTML":m=b;break;case"value":d=b;default:ln(e,r,o,b)}}if(i!=null)if(n=d!==null?""+d:TE(s),sh(i)){for(r=0;r<i.length;r++)if(""+i[r]===n){e.push(Yd);break}}else""+i===n&&e.push(Yd);else f&&e.push(Yd);return e.push(Tr),Es(e,m,s),s;case"textarea":e.push(Vn("textarea")),m=i=o=null;for(s in n)if(Kt.call(n,s)&&(d=n[s],d!=null))switch(s){case"children":m=d;break;case"value":o=d;break;case"defaultValue":i=d;break;case"dangerouslySetInnerHTML":throw Error(ye(91));default:ln(e,r,s,d)}if(o===null&&i!==null&&(o=i),e.push(Tr),m!=null){if(o!=null)throw Error(ye(92));if(sh(m)&&1<m.length)throw Error(ye(93));o=""+m}return typeof o=="string"&&o[0]===`
`&&e.push(Zd),o!==null&&e.push(xe(Et(""+o))),null;case"input":e.push(Vn("input")),d=m=s=o=null;for(i in n)if(Kt.call(n,i)&&(f=n[i],f!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(ye(399,"input"));case"defaultChecked":d=f;break;case"defaultValue":s=f;break;case"checked":m=f;break;case"value":o=f;break;default:ln(e,r,i,f)}return m!==null?ln(e,r,"checked",m):d!==null&&ln(e,r,"checked",d),o!==null?ln(e,r,"value",o):s!==null&&ln(e,r,"value",s),e.push(Um),null;case"menuitem":e.push(Vn("menuitem"));for(var S in n)if(Kt.call(n,S)&&(o=n[S],o!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(ye(400));default:ln(e,r,S,o)}return e.push(Tr),null;case"title":e.push(Vn("title")),o=null;for(b in n)if(Kt.call(n,b)&&(i=n[b],i!=null))switch(b){case"children":o=i;break;case"dangerouslySetInnerHTML":throw Error(ye(434));default:ln(e,r,b,i)}return e.push(Tr),o;case"listing":case"pre":e.push(Vn(t)),i=o=null;for(d in n)if(Kt.call(n,d)&&(s=n[d],s!=null))switch(d){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;default:ln(e,r,d,s)}if(e.push(Tr),i!=null){if(o!=null)throw Error(ye(60));if(typeof i!="object"||!("__html"in i))throw Error(ye(61));n=i.__html,n!=null&&(typeof n=="string"&&0<n.length&&n[0]===`
`?e.push(Zd,xe(n)):e.push(xe(""+n)))}return typeof o=="string"&&o[0]===`
`&&e.push(Zd),o;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Vn(t));for(var I in n)if(Kt.call(n,I)&&(o=n[I],o!=null))switch(I){case"children":case"dangerouslySetInnerHTML":throw Error(ye(399,t));default:ln(e,r,I,o)}return e.push(Um),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return qd(e,n,t,r);case"html":return a.insertionMode===0&&e.push(EE),qd(e,n,t,r);default:if(t.indexOf("-")===-1&&typeof n.is!="string")return qd(e,n,t,r);e.push(Vn(t)),i=o=null;for(f in n)if(Kt.call(n,f)&&(s=n[f],s!=null))switch(f){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"style":Xy(e,r,s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:Ky(f)&&typeof s!="function"&&typeof s!="symbol"&&e.push(_r,xe(f),el,xe(Et(s)),pa)}return e.push(Tr),Es(e,i,o),o}}var IE=X("</"),LE=X(">"),RE=X('<template id="'),PE=X('"></template>'),ME=X("<!--$-->"),FE=X('<!--$?--><template id="'),AE=X('"></template>'),OE=X("<!--$!-->"),DE=X("<!--/$-->"),zE=X("<template"),BE=X('"'),jE=X(' data-dgst="');X(' data-msg="');X(' data-stck="');var UE=X("></template>");function Hm(e,t,n){if(re(e,FE),n===null)throw Error(ye(395));return re(e,n),Qe(e,AE)}var WE=X('<div hidden id="'),HE=X('">'),VE=X("</div>"),GE=X('<svg aria-hidden="true" style="display:none" id="'),YE=X('">'),qE=X("</svg>"),ZE=X('<math aria-hidden="true" style="display:none" id="'),QE=X('">'),KE=X("</math>"),XE=X('<table hidden id="'),JE=X('">'),eN=X("</table>"),tN=X('<table hidden><tbody id="'),nN=X('">'),rN=X("</tbody></table>"),aN=X('<table hidden><tr id="'),lN=X('">'),oN=X("</tr></table>"),iN=X('<table hidden><colgroup id="'),sN=X('">'),cN=X("</colgroup></table>");function dN(e,t,n,r){switch(n.insertionMode){case 0:case 1:return re(e,WE),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Qe(e,HE);case 2:return re(e,GE),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Qe(e,YE);case 3:return re(e,ZE),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Qe(e,QE);case 4:return re(e,XE),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Qe(e,JE);case 5:return re(e,tN),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Qe(e,nN);case 6:return re(e,aN),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Qe(e,lN);case 7:return re(e,iN),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Qe(e,sN);default:throw Error(ye(397))}}function uN(e,t){switch(t.insertionMode){case 0:case 1:return Qe(e,VE);case 2:return Qe(e,qE);case 3:return Qe(e,KE);case 4:return Qe(e,eN);case 5:return Qe(e,rN);case 6:return Qe(e,oN);case 7:return Qe(e,cN);default:throw Error(ye(397))}}var hN=X('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),fN=X('$RS("'),pN=X('","'),gN=X('")<\/script>'),mN=X('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),vN=X('$RC("'),yN=X('","'),bN=X('")<\/script>'),wN=X('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),xN=X('$RX("'),SN=X('"'),CN=X(")<\/script>"),Qd=X(","),kN=/[<\u2028\u2029]/g;function Kd(e){return JSON.stringify(e).replace(kN,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var Ao=Object.assign,_N=Symbol.for("react.element"),Jy=Symbol.for("react.portal"),eb=Symbol.for("react.fragment"),tb=Symbol.for("react.strict_mode"),nb=Symbol.for("react.profiler"),rb=Symbol.for("react.provider"),ab=Symbol.for("react.context"),lb=Symbol.for("react.forward_ref"),ob=Symbol.for("react.suspense"),ib=Symbol.for("react.suspense_list"),sb=Symbol.for("react.memo"),Xf=Symbol.for("react.lazy"),TN=Symbol.for("react.scope"),$N=Symbol.for("react.debug_trace_mode"),EN=Symbol.for("react.legacy_hidden"),NN=Symbol.for("react.default_value"),Vm=Symbol.iterator;function ch(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case eb:return"Fragment";case Jy:return"Portal";case nb:return"Profiler";case tb:return"StrictMode";case ob:return"Suspense";case ib:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ab:return(e.displayName||"Context")+".Consumer";case rb:return(e._context.displayName||"Context")+".Provider";case lb:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case sb:return t=e.displayName||null,t!==null?t:ch(e.type)||"Memo";case Xf:t=e._payload,e=e._init;try{return ch(e(t))}catch{}}return null}var cb={};function Gm(e,t){if(e=e.contextTypes,!e)return cb;var n={},r;for(r in e)n[r]=t[r];return n}var Sa=null;function Dc(e,t){if(e!==t){e.context._currentValue=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(ye(401))}else{if(n===null)throw Error(ye(401));Dc(e,n)}t.context._currentValue=t.value}}function db(e){e.context._currentValue=e.parentValue,e=e.parent,e!==null&&db(e)}function ub(e){var t=e.parent;t!==null&&ub(t),e.context._currentValue=e.value}function hb(e,t){if(e.context._currentValue=e.parentValue,e=e.parent,e===null)throw Error(ye(402));e.depth===t.depth?Dc(e,t):hb(e,t)}function fb(e,t){var n=t.parent;if(n===null)throw Error(ye(402));e.depth===n.depth?Dc(e,n):fb(e,n),t.context._currentValue=t.value}function cc(e){var t=Sa;t!==e&&(t===null?ub(e):e===null?db(t):t.depth===e.depth?Dc(t,e):t.depth>e.depth?hb(t,e):fb(t,e),Sa=e)}var Ym={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function qm(e,t,n,r){var a=e.state!==void 0?e.state:null;e.updater=Ym,e.props=n,e.state=a;var o={queue:[],replace:!1};e._reactInternals=o;var i=t.contextType;if(e.context=typeof i=="object"&&i!==null?i._currentValue:r,i=t.getDerivedStateFromProps,typeof i=="function"&&(i=i(n,a),a=i==null?a:Ao({},a,i),e.state=a),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&Ym.enqueueReplaceState(e,e.state,null),o.queue!==null&&0<o.queue.length)if(t=o.queue,i=o.replace,o.queue=null,o.replace=!1,i&&t.length===1)e.state=t[0];else{for(o=i?t[0]:e.state,a=!0,i=i?1:0;i<t.length;i++){var s=t[i];s=typeof s=="function"?s.call(e,o,n,r):s,s!=null&&(a?(a=!1,o=Ao({},o,s)):Ao(o,s))}e.state=o}else o.queue=null}var IN={id:1,overflow:""};function dh(e,t,n){var r=e.id;e=e.overflow;var a=32-Ns(r)-1;r&=~(1<<a),n+=1;var o=32-Ns(t)+a;if(30<o){var i=a-a%5;return o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,{id:1<<32-Ns(t)+a|n<<a|r,overflow:o+e}}return{id:1<<o|n<<a|r,overflow:e}}var Ns=Math.clz32?Math.clz32:PN,LN=Math.log,RN=Math.LN2;function PN(e){return e>>>=0,e===0?32:31-(LN(e)/RN|0)|0}function MN(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var FN=typeof Object.is=="function"?Object.is:MN,mr=null,Jf=null,Is=null,We=null,Co=!1,dc=!1,ii=0,Mr=null,zc=0;function ga(){if(mr===null)throw Error(ye(321));return mr}function Zm(){if(0<zc)throw Error(ye(312));return{memoizedState:null,queue:null,next:null}}function ep(){return We===null?Is===null?(Co=!1,Is=We=Zm()):(Co=!0,We=Is):We.next===null?(Co=!1,We=We.next=Zm()):(Co=!0,We=We.next),We}function tp(){Jf=mr=null,dc=!1,Is=null,zc=0,We=Mr=null}function pb(e,t){return typeof t=="function"?t(e):t}function Qm(e,t,n){if(mr=ga(),We=ep(),Co){var r=We.queue;if(t=r.dispatch,Mr!==null&&(n=Mr.get(r),n!==void 0)){Mr.delete(r),r=We.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return We.memoizedState=r,[r,t]}return[We.memoizedState,t]}return e=e===pb?typeof t=="function"?t():t:n!==void 0?n(t):t,We.memoizedState=e,e=We.queue={last:null,dispatch:null},e=e.dispatch=AN.bind(null,mr,e),[We.memoizedState,e]}function Km(e,t){if(mr=ga(),We=ep(),t=t===void 0?null:t,We!==null){var n=We.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var a=0;a<r.length&&a<t.length;a++)if(!FN(t[a],r[a])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),We.memoizedState=[e,t],e}function AN(e,t,n){if(25<=zc)throw Error(ye(301));if(e===mr)if(dc=!0,e={action:n,next:null},Mr===null&&(Mr=new Map),n=Mr.get(t),n===void 0)Mr.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function ON(){throw Error(ye(394))}function ls(){}var Xm={readContext:function(e){return e._currentValue},useContext:function(e){return ga(),e._currentValue},useMemo:Km,useReducer:Qm,useRef:function(e){mr=ga(),We=ep();var t=We.memoizedState;return t===null?(e={current:e},We.memoizedState=e):t},useState:function(e){return Qm(pb,e)},useInsertionEffect:ls,useLayoutEffect:function(){},useCallback:function(e,t){return Km(function(){return e},t)},useImperativeHandle:ls,useEffect:ls,useDebugValue:ls,useDeferredValue:function(e){return ga(),e},useTransition:function(){return ga(),[!1,ON]},useId:function(){var e=Jf.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-Ns(e)-1)).toString(32)+t;var n=Ls;if(n===null)throw Error(ye(404));return t=ii++,e=":"+n.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return ga(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(ye(407));return n()}},Ls=null,Xd=qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function DN(e){return console.error(e),null}function ko(){}function zN(e,t,n,r,a,o,i,s,d){var f=[],m=new Set;return t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:m,pingedTasks:f,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:a===void 0?DN:a,onAllReady:o===void 0?ko:o,onShellReady:i===void 0?ko:i,onShellError:s===void 0?ko:s,onFatalError:d===void 0?ko:d},n=uc(t,0,null,n,!1,!1),n.parentFlushed=!0,e=np(t,e,null,n,m,cb,null,IN),f.push(e),t}function np(e,t,n,r,a,o,i,s){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var d={node:t,ping:function(){var f=e.pingedTasks;f.push(d),f.length===1&&vb(e)},blockedBoundary:n,blockedSegment:r,abortSet:a,legacyContext:o,context:i,treeContext:s};return a.add(d),d}function uc(e,t,n,r,a,o){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:a,textEmbedded:o}}function si(e,t){if(e=e.onError(t),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function hc(e,t){var n=e.onShellError;n(t),n=e.onFatalError,n(t),e.destination!==null?(e.status=2,Qy(e.destination,t)):(e.status=1,e.fatalError=t)}function Jm(e,t,n,r,a){for(mr={},Jf=t,ii=0,e=n(r,a);dc;)dc=!1,ii=0,zc+=1,We=null,e=n(r,a);return tp(),e}function e1(e,t,n,r){var a=n.render(),o=r.childContextTypes;if(o!=null){var i=t.legacyContext;if(typeof n.getChildContext!="function")r=i;else{n=n.getChildContext();for(var s in n)if(!(s in o))throw Error(ye(108,ch(r)||"Unknown",s));r=Ao({},i,n)}t.legacyContext=r,un(e,t,a),t.legacyContext=i}else un(e,t,a)}function t1(e,t){if(e&&e.defaultProps){t=Ao({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function uh(e,t,n,r,a){if(typeof n=="function")if(n.prototype&&n.prototype.isReactComponent){a=Gm(n,t.legacyContext);var o=n.contextType;o=new n(r,typeof o=="object"&&o!==null?o._currentValue:a),qm(o,n,r,a),e1(e,t,o,n)}else{o=Gm(n,t.legacyContext),a=Jm(e,t,n,r,o);var i=ii!==0;if(typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0)qm(a,n,r,o),e1(e,t,a,n);else if(i){r=t.treeContext,t.treeContext=dh(r,1,0);try{un(e,t,a)}finally{t.treeContext=r}}else un(e,t,a)}else if(typeof n=="string"){switch(a=t.blockedSegment,o=NE(a.chunks,n,r,e.responseState,a.formatContext),a.lastPushedText=!1,i=a.formatContext,a.formatContext=CE(i,n,r),hh(e,t,o),a.formatContext=i,n){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:a.chunks.push(IE,xe(n),LE)}a.lastPushedText=!1}else{switch(n){case EN:case $N:case tb:case nb:case eb:un(e,t,r.children);return;case ib:un(e,t,r.children);return;case TN:throw Error(ye(343));case ob:e:{n=t.blockedBoundary,a=t.blockedSegment,o=r.fallback,r=r.children,i=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:i,errorDigest:null},d=uc(e,a.chunks.length,s,a.formatContext,!1,!1);a.children.push(d),a.lastPushedText=!1;var f=uc(e,0,null,a.formatContext,!1,!1);f.parentFlushed=!0,t.blockedBoundary=s,t.blockedSegment=f;try{if(hh(e,t,r),f.lastPushedText&&f.textEmbedded&&f.chunks.push(Kf),f.status=1,fc(s,f),s.pendingTasks===0)break e}catch(m){f.status=4,s.forceClientRender=!0,s.errorDigest=si(e,m)}finally{t.blockedBoundary=n,t.blockedSegment=a}t=np(e,o,n,d,i,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n=="object"&&n!==null)switch(n.$$typeof){case lb:if(r=Jm(e,t,n.render,r,a),ii!==0){n=t.treeContext,t.treeContext=dh(n,1,0);try{un(e,t,r)}finally{t.treeContext=n}}else un(e,t,r);return;case sb:n=n.type,r=t1(n,r),uh(e,t,n,r,a);return;case rb:if(a=r.children,n=n._context,r=r.value,o=n._currentValue,n._currentValue=r,i=Sa,Sa=r={parent:i,depth:i===null?0:i.depth+1,context:n,parentValue:o,value:r},t.context=r,un(e,t,a),e=Sa,e===null)throw Error(ye(403));r=e.parentValue,e.context._currentValue=r===NN?e.context._defaultValue:r,e=Sa=e.parent,t.context=e;return;case ab:r=r.children,r=r(n._currentValue),un(e,t,r);return;case Xf:a=n._init,n=a(n._payload),r=t1(n,r),uh(e,t,n,r,void 0);return}throw Error(ye(130,n==null?n:typeof n,""))}}function un(e,t,n){if(t.node=n,typeof n=="object"&&n!==null){switch(n.$$typeof){case _N:uh(e,t,n.type,n.props,n.ref);return;case Jy:throw Error(ye(257));case Xf:var r=n._init;n=r(n._payload),un(e,t,n);return}if(sh(n)){n1(e,t,n);return}if(n===null||typeof n!="object"?r=null:(r=Vm&&n[Vm]||n["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(n))){if(n=r.next(),!n.done){var a=[];do a.push(n.value),n=r.next();while(!n.done);n1(e,t,a)}return}throw e=Object.prototype.toString.call(n),Error(ye(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}typeof n=="string"?(r=t.blockedSegment,r.lastPushedText=Dm(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText)):typeof n=="number"&&(r=t.blockedSegment,r.lastPushedText=Dm(t.blockedSegment.chunks,""+n,e.responseState,r.lastPushedText))}function n1(e,t,n){for(var r=n.length,a=0;a<r;a++){var o=t.treeContext;t.treeContext=dh(o,r,a);try{hh(e,t,n[a])}finally{t.treeContext=o}}}function hh(e,t,n){var r=t.blockedSegment.formatContext,a=t.legacyContext,o=t.context;try{return un(e,t,n)}catch(d){if(tp(),typeof d=="object"&&d!==null&&typeof d.then=="function"){n=d;var i=t.blockedSegment,s=uc(e,i.chunks.length,null,i.formatContext,i.lastPushedText,!0);i.children.push(s),i.lastPushedText=!1,e=np(e,t.node,t.blockedBoundary,s,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=a,t.context=o,cc(o)}else throw t.blockedSegment.formatContext=r,t.legacyContext=a,t.context=o,cc(o),d}}function BN(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,mb(this,t,e)}function gb(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.close())):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(ye(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(a){return gb(a,t,n)}),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady,r()))}function fc(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&fc(e,n)}else e.completedSegments.push(t)}function mb(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(ye(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=ko,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&fc(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(BN,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(fc(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function vb(e){if(e.status!==2){var t=Sa,n=Xd.current;Xd.current=Xm;var r=Ls;Ls=e.responseState;try{var a=e.pingedTasks,o;for(o=0;o<a.length;o++){var i=a[o],s=e,d=i.blockedSegment;if(d.status===0){cc(i.context);try{un(s,i,i.node),d.lastPushedText&&d.textEmbedded&&d.chunks.push(Kf),i.abortSet.delete(i),d.status=1,mb(s,i.blockedBoundary,d)}catch(N){if(tp(),typeof N=="object"&&N!==null&&typeof N.then=="function"){var f=i.ping;N.then(f,f)}else{i.abortSet.delete(i),d.status=4;var m=i.blockedBoundary,b=N,S=si(s,b);if(m===null?hc(s,b):(m.pendingTasks--,m.forceClientRender||(m.forceClientRender=!0,m.errorDigest=S,m.parentFlushed&&s.clientRenderedBoundaries.push(m))),s.allPendingTasks--,s.allPendingTasks===0){var I=s.onAllReady;I()}}}finally{}}}a.splice(0,o),e.destination!==null&&rp(e,e.destination)}catch(N){si(e,N),hc(e,N)}finally{Ls=r,Xd.current=n,n===Xm&&cc(t)}}}function os(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,re(t,RE),re(t,e.placeholderPrefix),e=xe(r.toString(16)),re(t,e),Qe(t,PE);case 1:n.status=2;var a=!0;r=n.chunks;var o=0;n=n.children;for(var i=0;i<n.length;i++){for(a=n[i];o<a.index;o++)re(t,r[o]);a=Bc(e,t,a)}for(;o<r.length-1;o++)re(t,r[o]);return o<r.length&&(a=Qe(t,r[o])),a;default:throw Error(ye(390))}}function Bc(e,t,n){var r=n.boundary;if(r===null)return os(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)r=r.errorDigest,Qe(t,OE),re(t,zE),r&&(re(t,jE),re(t,xe(Et(r))),re(t,BE)),Qe(t,UE),os(e,t,n);else if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var a=e.responseState,o=a.nextSuspenseID++;a=X(a.boundaryPrefix+o.toString(16)),r=r.id=a,Hm(t,e.responseState,r),os(e,t,n)}else if(r.byteSize>e.progressiveChunkSize)r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),Hm(t,e.responseState,r.id),os(e,t,n);else{if(Qe(t,ME),n=r.completedSegments,n.length!==1)throw Error(ye(391));Bc(e,t,n[0])}return Qe(t,DE)}function r1(e,t,n){return dN(t,e.responseState,n.formatContext,n.id),Bc(e,t,n),uN(t,n.formatContext)}function a1(e,t,n){for(var r=n.completedSegments,a=0;a<r.length;a++)yb(e,t,n,r[a]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,re(t,e.startInlineScript),e.sentCompleteBoundaryFunction?re(t,vN):(e.sentCompleteBoundaryFunction=!0,re(t,mN)),r===null)throw Error(ye(395));return n=xe(n.toString(16)),re(t,r),re(t,yN),re(t,e.segmentPrefix),re(t,n),Qe(t,bN)}function yb(e,t,n,r){if(r.status===2)return!0;var a=r.id;if(a===-1){if((r.id=n.rootSegmentID)===-1)throw Error(ye(392));return r1(e,t,r)}return r1(e,t,r),e=e.responseState,re(t,e.startInlineScript),e.sentCompleteSegmentFunction?re(t,fN):(e.sentCompleteSegmentFunction=!0,re(t,hN)),re(t,e.segmentPrefix),a=xe(a.toString(16)),re(t,a),re(t,pN),re(t,e.placeholderPrefix),re(t,a),Qe(t,gN)}function rp(e,t){cn=new Uint8Array(512),dn=0;try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){Bc(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)re(t,r[n]);n<r.length&&Qe(t,r[n])}var a=e.clientRenderedBoundaries,o;for(o=0;o<a.length;o++){var i=a[o];r=t;var s=e.responseState,d=i.id,f=i.errorDigest,m=i.errorMessage,b=i.errorComponentStack;if(re(r,s.startInlineScript),s.sentClientRenderFunction?re(r,xN):(s.sentClientRenderFunction=!0,re(r,wN)),d===null)throw Error(ye(395));re(r,d),re(r,SN),(f||m||b)&&(re(r,Qd),re(r,xe(Kd(f||"")))),(m||b)&&(re(r,Qd),re(r,xe(Kd(m||"")))),b&&(re(r,Qd),re(r,xe(Kd(b)))),Qe(r,CN)}a.splice(0,o);var S=e.completedBoundaries;for(o=0;o<S.length;o++)a1(e,t,S[o]);S.splice(0,o),Mm(t),cn=new Uint8Array(512),dn=0;var I=e.partialBoundaries;for(o=0;o<I.length;o++){var N=I[o];e:{a=e,i=t;var C=N.completedSegments;for(s=0;s<C.length;s++)if(!yb(a,i,N,C[s])){s++,C.splice(0,s);var L=!1;break e}C.splice(0,s),L=!0}if(!L){e.destination=null,o++,I.splice(0,o);return}}I.splice(0,o);var w=e.completedBoundaries;for(o=0;o<w.length;o++)a1(e,t,w[o]);w.splice(0,o)}finally{Mm(t),e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.close()}}function l1(e,t){try{var n=e.abortableTasks;n.forEach(function(r){return gb(r,e,t)}),n.clear(),e.destination!==null&&rp(e,e.destination)}catch(r){si(e,r),hc(e,r)}}qf.renderToReadableStream=function(e,t){return new Promise(function(n,r){var a,o,i=new Promise(function(m,b){o=m,a=b}),s=zN(e,xE(t?t.identifierPrefix:void 0,t?t.nonce:void 0,t?t.bootstrapScriptContent:void 0,t?t.bootstrapScripts:void 0,t?t.bootstrapModules:void 0),SE(t?t.namespaceURI:void 0),t?t.progressiveChunkSize:void 0,t?t.onError:void 0,o,function(){var m=new ReadableStream({type:"bytes",pull:function(b){if(s.status===1)s.status=2,Qy(b,s.fatalError);else if(s.status!==2&&s.destination===null){s.destination=b;try{rp(s,b)}catch(S){si(s,S),hc(s,S)}}},cancel:function(){l1(s)}},{highWaterMark:0});m.allReady=i,n(m)},function(m){i.catch(function(){}),r(m)},a);if(t&&t.signal){var d=t.signal,f=function(){l1(s,d.reason),d.removeEventListener("abort",f)};d.addEventListener("abort",f)}vb(s)})};qf.version="18.2.0";var Bl,bb;Bl=zl,bb=qf;Bl.version;var jN=Bl.renderToString;Bl.renderToStaticMarkup;Bl.renderToNodeStream;Bl.renderToStaticNodeStream;bb.renderToReadableStream;var wb={exports:{}},UN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",WN=UN,HN=WN;function xb(){}function Sb(){}Sb.resetWarningCache=xb;var VN=function(){function e(r,a,o,i,s,d){if(d!==HN){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Sb,resetWarningCache:xb};return n.PropTypes=n,n};wb.exports=VN();var GN=wb.exports;const On=Gr(GN);var YN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Cb(e,t){return e(t={exports:{}},t.exports),t.exports}var qN=Cb(function(e){(function(t){var n=function(L,w,g){if(!d(w)||m(w)||b(w)||S(w)||s(w))return w;var y,v=0,$=0;if(f(w))for(y=[],$=w.length;v<$;v++)y.push(n(L,w[v],g));else for(var _ in y={},w)Object.prototype.hasOwnProperty.call(w,_)&&(y[L(_,g)]=n(L,w[_],g));return y},r=function(L){return I(L)?L:(L=L.replace(/[\-_\s]+(.)?/g,function(w,g){return g?g.toUpperCase():""})).substr(0,1).toLowerCase()+L.substr(1)},a=function(L){var w=r(L);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(L,w){return function(g,y){var v=(y=y||{}).separator||"_",$=y.split||/(?=[A-Z])/;return g.split($).join(v)}(L,w).toLowerCase()},i=Object.prototype.toString,s=function(L){return typeof L=="function"},d=function(L){return L===Object(L)},f=function(L){return i.call(L)=="[object Array]"},m=function(L){return i.call(L)=="[object Date]"},b=function(L){return i.call(L)=="[object RegExp]"},S=function(L){return i.call(L)=="[object Boolean]"},I=function(L){return(L-=0)==L},N=function(L,w){var g=w&&"process"in w?w.process:w;return typeof g!="function"?L:function(y,v){return g(y,L,v)}},C={camelize:r,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(L,w){return n(N(r,w),L)},decamelizeKeys:function(L,w){return n(N(o,w),L,w)},pascalizeKeys:function(L,w){return n(N(a,w),L)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=C:t.humps=C})(YN)}).decamelize,ZN=function(e){if(Array.isArray(e))return e},QN=function(e,t){if(typeof Symbol<"u"&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(d){a=!0,o=d}finally{try{r||s.return==null||s.return()}finally{if(a)throw o}}return n}},o1=function(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},KN=function(e,t){if(e){if(typeof e=="string")return o1(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o1(e,t):void 0}},XN=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},JN=function(e,t){return ZN(e)||QN(e,t)||KN(e,t)||XN()},kb=Cb(function(e){function t(){return e.exports=t=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o])}return n},t.apply(this,arguments)}e.exports=t}),eI=function(e,t){if(e==null)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a},_b=function(e,t){if(e==null)return{};var n,r,a=eI(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a},tI=B.createContext(null);function fh(e){var t=e.children,n=_b(e,["children"]);return typeof t!="string"&&(t=jN(t)),$t.createElement("template",kb({},n,{dangerouslySetInnerHTML:{__html:t}}))}function ph(e){var t=e.root,n=e.children;return k2.createPortal(n,t)}function nI(e){var t=B.forwardRef(function(n,r){var a,o,i=n.mode,s=n.delegatesFocus,d=n.styleSheets,f=n.ssr,m=n.children,b=_b(n,["mode","delegatesFocus","styleSheets","ssr","children"]),S=(o=B.useRef((a=r)&&a.current),B.useEffect(function(){a&&(a.current=o.current)},[a]),o),I=B.useState(null),N=JN(I,2),C=N[0],L=N[1],w="node_".concat(i).concat(s);return B.useLayoutEffect(function(){if(S.current)try{if(typeof r=="function"&&r(S.current),f){var g=S.current.shadowRoot;return void L(g)}var y=S.current.attachShadow({mode:i,delegatesFocus:s});d.length>0&&(y.adoptedStyleSheets=d),L(y)}catch(v){(function($){var _=$.error,M=$.styleSheets,A=$.root;switch(_.name){case"NotSupportedError":M.length>0&&(A.adoptedStyleSheets=M);break;default:throw _}})({error:v,styleSheets:d,root:C})}},[r,S,d]),$t.createElement($t.Fragment,null,$t.createElement(e.tag,kb({key:w,ref:S},b),(C||f)&&$t.createElement(tI.Provider,{value:C},f?$t.createElement(fh,{shadowroot:"open"},e.render({root:C,ssr:f,children:m})):$t.createElement(ph,{root:C},e.render({root:C,ssr:f,children:m})))))});return t.propTypes={mode:On.oneOf(["open","closed"]),delegatesFocus:On.bool,styleSheets:On.arrayOf(On.instanceOf(globalThis.CSSStyleSheet)),ssr:On.bool,children:On.node},t.defaultProps={mode:"open",delegatesFocus:!1,styleSheets:[],ssr:!1,children:null},t}fh.propTypes={children:On.oneOfType([On.string,On.node])},fh.defaultProps={children:""},ph.propTypes={root:On.object.isRequired,children:On.node},ph.defaultProps={children:null};var Jd=new Map;function rI(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"core",n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(r){return r.children};return new Proxy(e,{get:function(r,a){var o=qN(a,{separator:"-"}),i="".concat(t,"-").concat(o);return Jd.has(i)||Jd.set(i,nI({tag:o,render:n})),Jd.get(i)}})}var aI=rI();const lI=()=>h("div",{className:"prose",children:[l("h1",{children:"Forms"}),h("blockquote",{className:"intro",children:["There is something about styling forms, that's so not fun. It's like ",l("em",{children:'"How much less fun could this be?"'})," ","and the answer is ",l("em",{children:'"None, none... less fun."'}),l("div",{className:"attrib",children:"Nigel Tufnel's website designer"})]}),l("h2",{children:"None Less Fun"}),l("p",{children:"Anyone reading this who is old enough to have served in the browser wars will no doubt be rolling their eyes at this point, thinking that kids these days don't know how lucky they are."}),h("p",{children:["It's certainly true that things are ",l("i",{children:"much"})," better than they used.  But despite all the advances in CSS support and cross-browser compatibility, the default styling for HTML forms still looks like 1995 called and asked for its website back."]}),l("p",{children:"Badger CSS includes form styling presets, supporting both light and dark themes out of the box. It uses native form components for accessibility and mobile friendliness.  Everything is configurable if you want to change things, but you don't have to."}),l("p",{children:"Here's the same form rendered twice.  Once with the default HTML styling and again with the default Badger CSS styles.  In case you're wondering, there's no Javascript in any of these forms.  It's all just vanilla HTML and CSS."}),h("div",{className:"grid-2 gap-8 mar-t-10 stack-desktop",children:[h("div",{className:"output",children:[l("h3",{className:"mar-b-4",children:"Default Form Styles"}),l(aI.div,{children:l("div",{dangerouslySetInnerHTML:{__html:fm}})})]}),h("div",{className:"output",children:[l("h3",{className:"mar-b-4",children:"Badger CSS Form Styles"}),l("div",{dangerouslySetInnerHTML:{__html:fm}})]})]}),l("h2",{children:"Go Large?"}),h("p",{children:["All form components are sized using ems and will adapt to whatever the current text size is.  If you want a small form, for example, then you just need to add a ",l("code",{children:"small"})," class to the form or one of its parent containers."]}),l("div",{className:"grid-2 gap-4 stack-widescreen",children:["smallest","smaller","small","large","larger","largest"].map(e=>h("div",{className:`${e} pad-6 border output shadow-2`,children:[l("h3",{className:"font-mono mar-b-3",children:e}),l("div",{dangerouslySetInnerHTML:{__html:I$}})]},e))}),l("h2",{children:"Accessibility and Focus"}),l("p",{children:"If you've played with any of the forms above you may have noticed the prominent ring around inputs when focussed.  This is important for accessibility to clearly indicate which field is selected."}),h("p",{children:["If for some reason you really, really need to disabled it because you're indicating the focus some other way then you can add the"," ",l("code",{children:"no-focus"})," class to the inputs."]}),l(D,{html:R$,language:"html"}),l("h2",{children:"Themes and Surfaces"}),l("p",{children:"Styling forms is made that much harder these days by the need to support both light and dark themes.  On top of that we might want to have forms included on different surfaces with varying levels of background intensity. Thanks to the magic of CSS custom properties we can tweak the colors used to render forms depending on the background color of the container."}),l("p",{children:"In these examples below it may not be immediately obvious that the colors are slightly different but they are.  They're different so that they look more-or-less the same, while providing adequate contrast."}),l("div",{className:"grid-3 gap-4 stack-widescreen mar-b-8",children:["surface","surface-1","surface-2","surface-3","surface-4","surface-5"].map(e=>h("div",{className:`${e} pad-6 border shadow-2`,children:[l("h3",{className:"font-mono mar-b-3",children:e}),l("div",{dangerouslySetInnerHTML:{__html:L$}})]},e))})]}),oI=Object.freeze(Object.defineProperty({__proto__:null,default:lI},Symbol.toStringTag,{value:"Module"})),iI=`<label>
  <input type="radio" name="one">
  Option 1a
</label>
<label>
  <input type="radio" name="one">
  Option 1b
</label>
<label class="radio">
  <input type="radio" name="one">
  Option 1c
</label>
`,sI=`<label class="wide radio">
  <input type="radio" name="two">
  Option 2a
</label>
<label class="wide radio">
  <input type="radio" name="two">
  Option 2b
</label>
<label class="wide radio">
  <input type="radio" name="two">
  Option 2c
</label>
`,cI=`<label class="border radio mar-r-2">
  <input type="radio" name="three">
  Option 3a
</label>
<label class="border radio mar-r-2">
  <input type="radio" name="three">
  Option 3a
</label>
<label class="border radio">
  <input type="radio" name="three">
  Option 3c
</label>
<label class="border radio wide mar-t-2">
  <input type="radio" name="four">
  Full-width radio option 4a
</label>
<label class="border radio wide mar-t-2">
  <input type="radio" name="four">
  Full-width radio option 4b
</label>
<label class="border radio wide mar-t-2">
  <input type="radio" name="four">
  Full-width radio option 4c
</label>
`,dI=`<div>
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
    .dark .shaded.radio {
      color:            var(--color-80);
      background-color: var(--color-15);
      border-color:     var(--color-30);
      accent-color:     var(--color-70);
    }
    .dark .shaded.radio:hover {
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
</div>`,uI=()=>h("div",{children:[l("h1",{children:"Radio Buttons"}),l("h2",{children:"Radio Class"}),h("p",{children:["Radio buttons are implemented much like"," ",l(Ie,{to:"/forms/checkboxes",text:"checkboxes"}),".  Create a"," ",l("code",{children:"label"})," enclosing an ",l("code",{children:"input"})," with the"," ",l("code",{children:'type="radio"'})," attribute."]}),h("p",{children:["The same warning about Firefox applies.  The current version (v115) doesn't support the ",l("code",{children:":has()"})," CSS selector that this depends on so you have to manually add the ",l("code",{children:"radio"})," class to the ",l("code",{children:"label"})," as a work-around."]}),l(D,{html:iI,language:"html",caption:"Radio Buttons"}),l("h2",{children:"Wide Radio Buttons"}),h("p",{children:["Add the ",l("code",{children:"wide"})," class for full-width radio buttons."]}),l(D,{html:sI,language:"html",caption:"Wide Radio Buttons"}),l("h2",{children:"Radio Button Borders"}),h("p",{children:["Add the ",l("code",{children:"border"})," class for borders."]}),l(D,{html:cI,language:"html",caption:"Border Radio Buttons"}),l("h2",{children:"Custom Radio Buttons"}),l(D,{html:dI,language:"html",caption:"Custom Checkboxes"})]}),hI=Object.freeze(Object.defineProperty({__proto__:null,default:uI},Symbol.toStringTag,{value:"Module"})),fI=`<select name="animal">
  <option value="">-- Choose an animal --</option>
  <option value="ant">Ant</option>
  <option value="badger">Badger</option>
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
  <option value="elephant">Elephant</option>
  <option value="ferret">Ferret</option>
  <option value="goldfish">Goldfish</option>
</select>
`,pI=`<select name="animal" required>
  <option value="" hidden disabled selected>Choose an animal</option>
  <option value="ant">Ant</option>
  <option value="badger">Badger</option>
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
  <option value="elephant">Elephant</option>
  <option value="ferret">Ferret</option>
  <option value="goldfish">Goldfish</option>
</select>
`,gI=`<div class="small flex start gap-4 mar-b-4">
  <input type="text" value="Text Field" class="flex-grow">
  <select name="animal">
    <option value="badger">Badger</option>
    <option value="mushroom">Mushroom</option>
    <option value="snake">Snake</option>
  </select>
  <button class="brand">Button</button>
</div>

<div class="grid-3 flex start gap-4 mar-b-4">
  <input type="text" value="Text Field" class="flex-grow">
  <select name="animal">
    <option value="badger">Badger</option>
    <option value="mushroom">Mushroom</option>
    <option value="snake">Snake</option>
  </select>
  <button class="brand">Button</button>
</div>

<div class="large flex start gap-4">
  <input type="text" value="Text Field" class="flex-grow">
  <select name="animal">
    <option value="badger">Badger</option>
    <option value="mushroom">Mushroom</option>
    <option value="snake">Snake</option>
  </select>
  <button class="brand">Button</button>
</div>
`,mI=`<div>
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

`,vI=()=>h("div",{className:"prose",children:[l("h1",{children:"Select Input"}),l("p",{children:"Select inputs are the bane of web developers and designers everywhere. There are notoriously difficult to style.  They don't want to align with other elements.  Their size is often wrong.  And just when you think you've finally cracked it, you look at it on another browser and see that it's all on the wonk."}),l("p",{children:"I have wasted far too many hours of my life starting at forms like this one trying to get everything the same size and aligned properly."}),l(D,{html:gI,language:"html",caption:"Select Alignment"}),h("p",{children:["The least bad solution is to set ",l("code",{children:"appearance: none"})," to remove the browser-specific rendering quirks.  The problem then is that you also lose drop down arrow indicating that it's a select input.  So we have to put that back in using an SVG background image. But you don't need to worry about that - I did so you don't have to."]}),l(D,{html:fI,language:"html",caption:"Select Input"}),l("h2",{children:"Custom Icon"}),h("p",{children:["You can define your own drop down arrow icon using the"," ",l("code",{children:"--arrow-down"})," property.  It's a little bit tricky because you have to URI encode the SVG and define it as shown in this example.  If you've got an SVG icon with a simple path and your icon is 16px square then you can copy the definition from this example and insert your path data into the ",l("code",{children:"path d='...'"})," part."]}),h("p",{children:["Note that you can't use ",l("code",{children:"currentColor"})," to set the stroke or fill color.  You can define separate ",l("code",{children:"--arrow-down"})," ","properties for you light and dark themes, or you can use a neutral color like ",l("code",{children:"#888"})," which works well in both cases."]}),l(D,{html:mI,language:"html",caption:"Custom Icon"}),l("h2",{children:"Placeholder"}),h("p",{children:["Another annoying thing about select inputs is that they don't support the ",l("code",{children:"placeholder"})," attribute.  You can work around the problem by adding the ",l("code",{children:"required"})," attribute to the"," ",l("code",{children:"select"})," input and the ",l("code",{children:"hidden"}),","," ",l("code",{children:"disabled"})," and ",l("code",{children:"selected"})," attributes to the first option which contains your placeholder text."]}),l(D,{html:pI,language:"html",caption:"Select Placeholder"})]}),yI=Object.freeze(Object.defineProperty({__proto__:null,default:vI},Symbol.toStringTag,{value:"Module"})),bI=`<style>
  form.shaded, .field {
    --input-color:                     var(--color-50);
    --input-border-color:              var(--color-80);
    --input-background-top:            var(--color-100);
    --input-background-bottom:         var(--color-95);
    --input-hover-color:               var(--color-30);
    --input-hover-border-color:        var(--color-65);
    --input-hover-background-top:      var(--color-95);
    --input-hover-background-bottom:   var(--color-95);
    --input-focus-color:               var(--color-0);
    --input-focus-border-color:        var(--color-50);
    --input-focus-background-top:      var(--color-95);
    --input-focus-background-bottom:   var(--color-100);
  }
  #site.dark form.shaded, #site.dark .field {
    --input-color:                     var(--color-50);
    --input-border-color:              var(--color-20);
    --input-background-top:            var(--color-10);
    --input-background-bottom:         var(--color-5);
    --input-hover-color:               var(--color-70);
    --input-hover-border-color:        var(--color-30);
    --input-hover-background-top:      var(--color-15);
    --input-hover-background-bottom:   var(--color-10);
    --input-focus-color:               var(--color-100);
    --input-focus-border-color:        var(--color-50);
    --input-focus-background-top:      var(--color-5);
    --input-focus-background-bottom:   var(--color-15);
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
</form>`,wI=()=>h("div",{className:"prose",children:[l("h1",{children:"Form Styling"}),l("p",{}),l(D,{html:bI,language:"html",caption:"Form Styling",expand:!0})]}),xI=Object.freeze(Object.defineProperty({__proto__:null,default:wI},Symbol.toStringTag,{value:"Module"})),SI=`<input
  type="text" name="my-input"
  placeholder="Placeholder text"
/>
`,CI=`<input
  type="text" name="my-input"
  placeholder="Placeholder text"
  class="wide"
/>
`,kI=`<div class="grid-2 gap-4">
  <input
    type="text" name="my-input"
    placeholder="First name"
    class="wide"
  />
  <input
    type="text" name="my-input"
    placeholder="Surname"
    class="wide"
  />
</div>
`,_I=()=>h("div",{children:[l("h1",{children:"Text Input"}),l("p",{children:"Text inputs are perhaps the most common kind of input."}),l(D,{html:SI,language:"html",caption:"Text Input"}),h("p",{children:["Add the ",l("code",{children:"wide"})," class to make it stretch to fill the container."]}),l(D,{html:CI,language:"html",caption:"Wide Text Input"}),h("p",{children:["You can use the ",l(Ie,{to:"/utilities/grid",text:"grid"})," utility classes to group inputs together on the same line."]}),l(D,{html:kI,language:"html",caption:"Text Grid"})]}),TI=Object.freeze(Object.defineProperty({__proto__:null,default:_I},Symbol.toStringTag,{value:"Module"})),$I=`<textarea
  rows="5"
  placeholder="I like badgers because..."
/></textarea>
`,EI=`<textarea
  rows="5" class="wide"
  placeholder="I like badgers because..."
/></textarea>
`,NI=()=>h("div",{children:[l("h1",{children:"Text Area Input"}),h("p",{children:["Text area inputs are much like ",l(Ie,{to:"/form/text",text:"text inputs"}),"."]}),h("p",{children:["One thing to note (that always catches me out) - if you want placeholder text to appear then you have to make sure there is ",l("em",{children:"nothing"})," ","(not even a newline) between the opening and closing ",l("code",{children:"textarea"})," tags."]}),l(D,{html:$I,language:"html",caption:"Text Area Input",expand:!0}),h("p",{children:["Add the ",l("code",{children:"wide"})," class to make it stretch to fill the container."]}),l(D,{html:EI,language:"html",caption:"Wide Text Area Input",expand:!0})]}),II=Object.freeze(Object.defineProperty({__proto__:null,default:NI},Symbol.toStringTag,{value:"Module"})),LI=()=>h("div",{className:"prose",children:[l("h1",{children:"What's Wrong With It?"}),l("p",{className:"intro",children:"There are many, many CSS toolkits and UI frameworks already out there to choose from. If you're looking for something that's stable, reliable, comprehensive and well-supported then this probably isn't for you."}),l("h2",{children:"Work in Progress"}),l("p",{children:"This is a work in progress.  It started out life as an ad-hoc collection of CSS classes that I copy and pasted between projects.  Then it became part of Bader UI, a collection of React components implementing some basic UI widgets.  Now it's being moved out into its own module which concentrates on just the CSS without any dependency on React."}),l("p",{children:"One of the reasons that I'm moving it into a new module is because it gives me the opportunity to break backwards compatibility.  There are some things that, given the chance to do again, I would do differently. This gives me that chance and hopefully I won't make too many bad decisions that I later come to regret.  But until I've had a chance to eat my own dog food and build a few sites with it, I can't predict what's going to work well and what isn't."}),l("p",{children:"I'm also migrating everything to use modern CSS techniques which are now well supported by browsers.  That means that a lot of things that were previously hard become much easier.  But different."}),l("p",{children:"As a result, this module is still in a state of flux.  If you build anything with it now then there's a good chance that something will break in the near future."}),l("h2",{children:"Opinionated and Selfish Software"}),h("p",{children:["This is based on my personal collection of CSS styles and utility classes that I use on a daily basis in my job building web sites for clients. It's Open Source and you're welcome to use it but be aware that it's something that I built for ",l("em",{children:"me"})," to help"," ",l("em",{children:"me"})," get my job done."]}),l("p",{children:"I didn't build it for you (unless you're one of my clients) and I don't really have the time or inclination to promote it, increase the user base or provide unpaid support for it.  It's not my intention for this to be the next great CSS toolkit - there are plenty of those already. My goal isn't to change the World, only to make it a slightly better place."}),l("p",{children:"So be warned that it does things the way I like to do them.  You may not agree with all my decisions, but that's fine.  They're my decisions to make, not yours.  It's free software (in both senses: free speech and free beer) and if you don't like it then you're entitled to a full refund of the price you paid."}),l("p",{children:"On the plus-side, the Badger-UI toolkit contains a lot of tried and tested techniques for managing web site styles that have been honed over nearly 30 years of experience.  It contains the features that I can't live without when I'm building a web site.  Of course, you may have different ideas about the best way to do it, but this is what works for me.  It's supposed to be a reasonable starting point not the final destination."}),l("h2",{children:"Some Assembly Required"}),l("p",{children:"If you have a good working knowledge of modern CSS and SASS then you should be able to easily adapt it to your needs.  Nearly everything is customisable, either through SASS variables, CSS custom properties, or by using the provided scripts to build your own toolkit."}),h("p",{children:["You don't need to buy in to the whole package.  As well as being customisable it's also modular.  With a small amount of effort you can configure it to include the bits your want and ignore the rest. Or you can browse the source code and borrow the ",l("i",{children:"ideas"})," that you think are useful."]}),l("p",{children:"Just remember that this is aimed more at people who already know how to build web sites and are familiar with CSS. If you're looking for a fully-featured, widely used and well supported UI toolkit that does everything for you then there are plenty of others to choose from."}),l("p",{children:"If you don't like the sound of that then these probably aren't the badgers you're looking for.  You can go about your business. Move along."})]}),RI=Object.freeze(Object.defineProperty({__proto__:null,default:LI},Symbol.toStringTag,{value:"Module"})),PI=()=>h("div",{className:"prose",children:[l("h1",{children:"What's Good About It?"}),l("p",{className:"intro",children:"If you're wondering what makes Badger CSS better than all the other CSS frameworks and UI toolkits out there then the short and simple answer is that it isn't.  It's just another one to add to the pile."}),l("h2",{children:"A Solid Foundation"}),l("p",{children:"Badger CSS is a collection of tools and techniques that I've built up over many years (nearly 30) of building web sites.  It's what works for me and maybe it will work for you too.  But I'm not making any promises."}),l("p",{children:"It's supposed to be a starting point, not a destination.  If you're building a web site and you want a reasonable foundation to build your styles on then it might be better for you than a more fully-featured toolkit that has everything including the kitchen sink."}),l("h2",{children:"Small(ish) and Simple"}),l("p",{children:"The default Badger CSS stylesheet is around 15kb minimised and compressed (around 100kb uncompressed).  That includes all 16 color ranges which you probably aren't ever going to need in practice. If you define your own palette with a limited set of colors then you can reduce the size a fair bit."}),l("h2",{children:"Modern CSS"}),l("p",{children:"It is based on modern CSS techniques and works in all modern browsers. In particular it makes heavy use of CSS custom properties that you can easily change as required. Behind the scenes it is built using SASS (specifically SCSS) which gives you more opportunities for configuring and extending it."}),l("h2",{children:"Color Management"}),h("p",{children:["Badger CSS uses a novel approach to defining and selecting"," ",l(Ie,{to:"/colors/ranges",text:"color ranges"}),".  The color palette was created using ",l("a",{href:"https://abw.github.io/badger-color",children:"Badger Color"})," (which itself was created for this specific task) and you can use it to create your own custom palettes if necessary. The palette data that it generates can be automatically expanded out to SASS component files, ready to be used in Badger CSS."]}),h("p",{children:["You can easily change the hues of the standard palette to match your ",l(Ie,{to:"/colors/brand",text:"brand colors"}),".  It will automatically create greyscale color ranges based on your primary brand color."]}),h("p",{children:["The use of ",l(Ie,{to:"/colors/variables",text:"CSS custom properties"})," ","to define color ranges, and CSS class scopes to select them, makes it easy to create UI components that work automatically with any color range. It also makes it easy to define different color schemes for light and dark themes."]}),l("h2",{children:"Utility Classes"}),h("p",{children:["Badger CSS comes with a core set of"," ",l(Ie,{to:"/utilities",text:"utility classes"})," for ad-hoc styling. They are intentionally limited to the kind of things that I find myself using all the time.  If you prefer the approach of"," ",l("a",{href:"https://tailwindcss.com/",children:"Tailwind"})," that provides CSS classes for absolutely everything then you know where to find it."]}),h("p",{children:["I'm not knocking Tailwind, by the way.  CSS utility classes are an ",l("em",{children:"extremely"}),` useful set of tools to have in your toolkit. I just think they should be limited in their scope and not a replacement for writing "proper" CSS when it's more appropriate to do so.`]}),l("h2",{children:"Form Styling"}),h("p",{children:["Styling ",l(Ie,{to:"/forms",text:"forms"})," is not much fun. I have wasted many hours, days, even weeks of my life trying to get form styling just right and I never want to have to do it again."]}),h("p",{children:["If you've got better things to do than trying to figure out why your ",l("code",{children:"select"})," component is 1 pixel shorter than your text ",l("code",{children:"input"})," component then take a look at what Badger CSS has to offer.  It provides basic styles for all the standard form components and has smoothed over a lot of the problems so you don't have to worry too much about them.  Spend the time you save playing with your kids or flying a kite."]}),l("h2",{children:"UI Components"}),h("p",{children:["Badger CSS has styling for a limited set of UI components (at the time of writing it's ",l("em",{children:"very"})," limited, but more may be coming soon). It's not really supposed to be a complete UI toolkit (because the World already has enough of them), but rather to be a foundation on which UI toolkits can be built."]}),h("p",{children:["Experience has taught me that off-the-shelf UI components (even ones that I've written myself) often need a fair bit of tweaking to match the styling for a particular site.  Sometimes it's easier just to write them from scratch as they're needed.  CSS has come a long way since the days when we relied on toolkits like"," ",l("a",{href:"https://getbootstrap.com/",children:"Bootstrap"})," to provide a consistent cross-browser experience.  Hopefully I will never again have to go searching through the Bootstrap source to figure out how they worked around a particular problem with IE."]}),l("p",{children:"At the very least, I won't be adding many more UI components until a) I've made it easy to select only the components that you want for a particular site and b) when I've convinced myself that something can be added that's sufficiently generic to warrant inclusion.  Watch this space."})]}),MI=Object.freeze(Object.defineProperty({__proto__:null,default:PI},Symbol.toStringTag,{value:"Module"})),FI=`<link
  rel="stylesheet"
  href="https://unpkg.com/@abw/badger-css/dist/styles/badger.min.css"
/>`,AI=`## using npm
$ npm add @abw/badger-css

## using yarn
$ yarn add @abw/badger-css

## using pnpm
$ pnpm add @abw/badger-css`,OI="import '@abw/badger-css/styles/badger.min.css';",DI="@import '@abw/badger-css/styles/badger.scss';",zI=`$ git clone https://github.com/abw/badger-css.git
$ cd badger-css
$ sass styles/badger.scss > your-badger-file.css`,BI=()=>h("div",{children:[l("h1",{children:"Installation"}),l("h2",{children:"No Installation Required!"}),h("p",{children:["You don't need to install anything to get starting using Badger CSS in a website.  Simply add the following tag to the"," ",l("code",{children:"<head>"})," section of your web page."]}),l(Ke,{code:FI,caption:"Unpkg Link",language:"html",className:"mar-b-8",expand:!0}),l("h2",{children:"Adding to a Javascript Project"}),h("p",{children:["If you want to configure, modify or adapt Badger CSS then you should add ",l("code",{children:"@abw/badger-css"})," to your Javascript project using your favourite package manager."]}),l(Ke,{code:AI,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0}),l("h2",{children:"Importing the CSS"}),l("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script like so:"}),l(Ke,{code:OI,caption:"Importing CSS",language:"js",className:"mar-b-8",expand:!0}),h("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",l("code",{children:"node_modules"})," directory."]}),l("h2",{children:"Importing the SCSS"}),l("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components.  This gives you the flexibility to configure the default options, or to pick and choose which components you want to include."}),l("p",{children:"Add the following line to your main SCSS stylesheet source."}),l(Ke,{code:DI,caption:"Importing SCSS",language:"scss",className:"mar-b-8",expand:!0}),l("h2",{children:"Going it Alone"}),h("p",{children:["If you're not using Javascript but want to play with the SCSS source files then you can check out the project repository from Github and run ",l("code",{children:"sass"})," to compile the source files into CSS."]}),l(Ke,{code:zI,caption:"CSS from SASS",language:"shell",className:"mar-b-8",expand:!0})]}),jI=Object.freeze(Object.defineProperty({__proto__:null,default:BI},Symbol.toStringTag,{value:"Module"})),UI=e=>B.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 717 337",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},B.createElement("path",{className:"white",d:"M248.362,204.8C251.303,208.841 251.506,216.92 246.886,220.486C247.235,215.811 245.076,210.416 243.385,207.987C242.142,206.2 237.32,201.909 232.525,201.457C236.319,199.212 245.27,200.55 248.362,204.8ZM380.931,288.851C382.012,292.919 365.895,290.457 365.767,303.096C365.703,309.466 368.575,313.608 364.949,314.116C360.977,314.673 360.493,310.692 359.8,305.449C358.316,294.227 366.194,290.723 373.729,288.466C380.03,286.58 380.512,287.273 380.931,288.851ZM250.509,198.166C250.116,197.944 249.715,197.73 249.306,197.524C237.097,191.351 222.986,194.646 217.814,204.876C213.744,212.926 216.415,222.888 223.688,229.775C220.646,228.505 217.677,226.862 214.911,224.779C198.663,212.542 195.441,190.333 199.289,185.248C202.588,180.888 226.299,177.823 242.548,190.06C245.688,192.424 248.324,195.199 250.509,198.166ZM234.492,31.758C231.75,33.423 225.901,22.543 215.941,24.48C210.088,25.619 206.755,23.124 210.523,20.119C221.225,11.585 239.546,28.689 234.492,31.758ZM99.149,58.412C89.72,51.898 79.11,48.569 67.051,51.951C58.397,54.378 52.734,60.065 49.994,67.45C48.707,67.555 47.4,67.691 46.084,67.853C38.149,68.832 29.859,70.741 23.646,72.288C42.126,47.476 64.861,38.817 87.003,38.714L88.566,38.707L88.864,37.173C90.304,29.757 86.13,22.597 75.216,17.044C99.723,11.821 129.948,17.277 146.178,26.501L148.305,27.709L148.955,25.351C149.908,21.892 149.675,13.343 143.798,5.723C174.533,11.177 197.842,21.068 216.166,33.985C250.062,62.777 267.98,100.361 283.213,136.181C299.907,175.44 313.396,212.581 341.026,233.82C341.522,234.342 342.023,234.861 342.528,235.377C350.993,244.039 366.478,256.93 385.23,273.49C387.358,275.369 389.327,277.224 391.08,279.038C386.966,279.245 381.675,280.641 374.911,282.18C352.689,287.237 351.849,297.009 354.41,312.963C355.723,321.141 359.376,324.914 364.644,326.161C344.448,331.711 334.138,335.299 309.216,330.594C270.323,323.25 233.474,308.826 222.734,303.773C222.54,303.387 222.214,303.065 221.786,302.881C207.397,296.693 197.713,288.82 193.624,279.767C195.586,278.724 197.158,277.535 198.531,276.583C199.395,275.985 199.61,274.797 199.011,273.933C198.412,273.069 197.225,272.854 196.361,273.453C193.368,275.527 189.319,279.035 181.419,278.358C180.371,278.268 179.448,279.046 179.359,280.093C179.269,281.14 180.046,282.063 181.094,282.153C184.73,282.464 187.673,282.036 190.117,281.255C194.043,289.991 202.664,297.858 215.527,304.192C190.321,313.397 168.064,307.288 148.128,295.655C126.82,283.221 108.129,264.526 91.308,250.982C77.307,239.708 64.463,232.065 52.581,233.695C45.172,234.711 38.017,239.243 31.166,248.886C20.017,224.385 34.815,199.803 49.449,184.213L50.995,182.566L49.11,181.321C34.813,171.879 18.601,177.687 7.799,189.755C6.995,180.056 11.532,165.892 18.973,152.99C26.481,139.972 37,128.18 48.427,123.711C118.961,110.252 153.156,169.713 188.827,221.409C209.775,251.767 256.49,287.586 345.223,316.241C340.436,301.054 342.628,293.783 346.067,286.802C324.7,276.815 298.269,260.277 280.877,228.797C233.283,142.653 212.43,81.347 143.665,64.082C131.685,61.074 116.053,57.87 99.149,58.412ZM99.066,72.542C97.614,80.151 74.887,58.073 70.407,69.969C62.107,92.007 54.173,79.428 56.142,73.447C66.246,42.754 100.4,65.551 99.066,72.542Z",style:{fill:"white"}}),B.createElement("path",{className:"black",d:"M48.845,71.376C48.085,71.452 47.319,71.538 46.55,71.633C36.384,72.888 25.625,75.704 19.567,77.251L14.706,78.493L17.519,74.338C36.933,45.669 61.411,35.483 85.316,34.929C85.679,28.465 80.142,22.804 68.715,18.305L63.513,16.258L68.883,14.704C94.004,7.433 126.953,12.429 145.602,21.872C145.715,17.476 143.99,10.119 137.262,4.358L132.173,0L138.793,1.03C164.858,5.083 185.888,12.137 203.193,21.438C203.366,21.5 203.539,21.563 203.712,21.626C205.114,17.121 209.176,13.252 216.656,13.924C236.466,15.704 240.708,25.62 241.751,43.904C266.891,65.236 284.026,95.363 297.467,125.916C309.511,153.29 318.589,181.001 327.822,202.999C331.443,211.626 335.086,219.374 338.942,225.872C340.965,228.196 343.066,230.479 345.252,232.715C353.685,241.344 369.071,254.139 387.751,270.635C391.391,273.849 394.564,277.022 397.067,280.061C399.65,281.424 401.411,284.251 402.569,289.316C402.766,289.952 402.91,290.575 403,291.183C403.044,291.476 403.078,291.773 403.104,292.073C403.406,293.909 403.652,295.979 403.849,298.307C404.631,307.557 401.813,319.773 387.422,323.48C384.617,324.202 381.912,324.872 379.338,325.409C375.566,326.623 372.295,327.675 372.296,327.675C350.779,335.844 336.841,339.686 308.509,334.336C267.627,326.617 228.986,311.137 219.844,306.606C192.192,317.895 167.885,311.593 146.209,298.945C124.732,286.413 105.872,267.6 88.919,253.949C82.285,248.607 75.954,244.066 69.867,241.062C64.049,238.191 58.481,236.73 53.099,237.468C45.892,238.456 39.128,243.397 32.519,253.689L30.774,256.406L29.24,253.565C15.116,227.399 29.491,200.652 45.081,183.337C31.813,176.104 17.177,183.299 8.174,195.3L5.878,198.362L4.821,194.683C1.901,184.524 6.568,166.875 15.674,151.087C21.122,141.64 28.135,132.887 35.912,126.766C24.827,130.039 12.898,135.014 0,141.953C13.007,107.592 30.082,86.63 48.343,74.289C48.468,73.299 48.636,72.327 48.845,71.376ZM248.362,204.8C245.27,200.55 236.319,199.212 232.525,201.457C237.32,201.909 242.142,206.2 243.385,207.987C245.076,210.416 247.235,215.811 246.886,220.486C251.506,216.92 251.303,208.841 248.362,204.8ZM380.931,288.851C380.512,287.273 380.03,286.58 373.729,288.466C366.194,290.723 358.316,294.227 359.8,305.449C360.493,310.692 360.977,314.673 364.949,314.116C368.575,313.608 365.703,309.466 365.767,303.096C365.895,290.457 382.012,292.919 380.931,288.851ZM250.509,198.166C248.324,195.199 245.688,192.424 242.548,190.06C226.299,177.823 202.588,180.888 199.289,185.248C195.441,190.333 198.663,212.542 214.911,224.779C217.677,226.862 220.646,228.505 223.688,229.775C216.415,222.888 213.744,212.926 217.814,204.876C222.986,194.646 237.097,191.351 249.306,197.524C249.715,197.73 250.116,197.944 250.509,198.166ZM234.492,31.758C239.546,28.689 221.225,11.585 210.523,20.119C206.755,23.124 210.088,25.619 215.941,24.48C225.901,22.543 231.75,33.423 234.492,31.758ZM99.149,58.412C116.053,57.87 131.685,61.074 143.665,64.082C212.43,81.347 233.283,142.653 280.877,228.797C298.269,260.277 324.7,276.815 346.067,286.802C342.628,293.783 340.436,301.054 345.223,316.241C256.49,287.586 209.775,251.767 188.827,221.409C153.156,169.713 118.961,110.252 48.427,123.711C37,128.18 26.481,139.972 18.973,152.99C11.532,165.892 6.995,180.056 7.799,189.755C18.601,177.687 34.813,171.879 49.11,181.321L50.995,182.566L49.449,184.213C34.815,199.803 20.017,224.385 31.166,248.886C38.017,239.243 45.172,234.711 52.581,233.695C64.463,232.065 77.307,239.708 91.308,250.982C108.129,264.526 126.82,283.221 148.128,295.655C168.064,307.288 190.321,313.397 215.527,304.192C202.664,297.858 194.043,289.991 190.117,281.255C187.673,282.036 184.73,282.464 181.094,282.153C180.046,282.063 179.269,281.14 179.359,280.093C179.448,279.046 180.371,278.268 181.419,278.358C189.319,279.035 193.368,275.527 196.361,273.453C197.225,272.854 198.412,273.069 199.011,273.933C199.61,274.797 199.395,275.985 198.531,276.583C197.158,277.535 195.586,278.724 193.624,279.767C197.713,288.82 207.397,296.693 221.786,302.881C222.214,303.065 222.54,303.387 222.734,303.773C233.474,308.826 270.323,323.25 309.216,330.594C334.138,335.299 344.448,331.711 364.644,326.161C359.376,324.914 355.723,321.141 354.41,312.963C351.849,297.009 352.689,287.237 374.911,282.18C381.675,280.641 386.966,279.245 391.08,279.038C389.327,277.224 387.358,275.369 385.23,273.49C366.478,256.93 350.993,244.039 342.528,235.377C342.023,234.861 341.522,234.342 341.026,233.82C313.396,212.581 299.907,175.44 283.213,136.181C267.98,100.361 250.062,62.777 216.166,33.985C197.842,21.068 174.533,11.177 143.798,5.723C149.675,13.343 149.908,21.892 148.955,25.351L148.305,27.709L146.178,26.501C129.948,17.277 99.723,11.821 75.216,17.044C86.13,22.597 90.304,29.757 88.864,37.173L88.566,38.707L87.003,38.714C64.861,38.817 42.126,47.476 23.646,72.288C29.859,70.741 38.149,68.832 46.084,67.853C47.4,67.691 48.707,67.555 49.994,67.45C52.734,60.065 58.397,54.378 67.051,51.951C79.11,48.569 89.72,51.898 99.149,58.412ZM99.066,72.542C100.4,65.551 66.246,42.754 56.142,73.447C54.173,79.428 62.107,92.007 70.407,69.969C74.887,58.073 97.614,80.151 99.066,72.542Z"}),B.createElement("path",{className:"badger",d:"M347.242,14.148C348.016,13.915 349.256,13.664 350.96,13.392C352.664,13.121 354.406,12.986 356.188,12.986C357.892,12.986 359.421,13.102 360.777,13.334C362.132,13.567 363.274,14.031 364.204,14.729C365.133,15.426 365.83,16.374 366.295,17.575C366.76,18.775 366.992,20.344 366.992,22.28L366.992,33.666C368.928,32.891 370.768,32.349 372.511,32.039C374.253,31.729 376.17,31.574 378.261,31.574C381.979,31.574 385.503,32.233 388.834,33.549C392.164,34.866 395.107,36.783 397.663,39.3C400.219,41.817 402.233,44.935 403.704,48.653C405.176,52.37 405.912,56.669 405.912,61.548C405.912,66.583 405.157,70.978 403.646,74.735C402.136,78.491 400.025,81.608 397.315,84.087C394.604,86.565 391.293,88.444 387.381,89.722C383.47,90.999 379.152,91.638 374.428,91.638C369.316,91.638 364.978,91.038 361.416,89.838C357.853,88.637 354.832,87.146 352.354,85.365C348.946,82.964 347.242,79.866 347.242,76.071L347.242,14.148ZM374.428,76.071C377.99,76.071 380.759,74.851 382.734,72.411C384.709,69.971 385.697,66.35 385.697,61.548C385.697,56.669 384.69,53.029 382.676,50.628C380.662,48.227 377.952,47.026 374.544,47.026C372.995,47.026 371.659,47.181 370.536,47.491C369.413,47.801 368.193,48.265 366.876,48.885L366.876,74.212C367.728,74.754 368.754,75.199 369.955,75.548C371.155,75.896 372.646,76.071 374.428,76.071ZM439.023,31.574C443.205,31.574 447.02,32 450.466,32.852C453.913,33.704 456.856,35.002 459.296,36.744C461.735,38.487 463.614,40.694 464.93,43.366C466.247,46.039 466.905,49.195 466.905,52.835L466.905,78.859C466.905,80.873 466.344,82.518 465.221,83.796C464.098,85.074 462.762,86.178 461.213,87.108C456.178,90.128 449.091,91.638 439.952,91.638C435.847,91.638 432.149,91.251 428.857,90.477C425.565,89.702 422.738,88.54 420.376,86.991C418.014,85.442 416.194,83.467 414.916,81.066C413.638,78.665 412.999,75.877 412.999,72.701C412.999,67.357 414.586,63.252 417.762,60.387C420.938,57.521 425.856,55.739 432.517,55.042L447.736,53.416L447.736,52.603C447.736,50.356 446.748,48.749 444.773,47.781C442.798,46.813 439.952,46.329 436.234,46.329C433.291,46.329 430.425,46.639 427.637,47.258C424.849,47.878 422.332,48.653 420.086,49.582C419.079,48.885 418.227,47.82 417.53,46.387C416.833,44.954 416.484,43.463 416.484,41.914C416.484,39.9 416.968,38.293 417.936,37.093C418.904,35.892 420.395,34.866 422.409,34.014C424.655,33.162 427.308,32.542 430.367,32.155C433.427,31.768 436.312,31.574 439.023,31.574ZM439.952,77.232C441.269,77.232 442.721,77.097 444.309,76.826C445.896,76.555 447.078,76.187 447.852,75.722L447.852,66.428L439.487,67.125C437.319,67.28 435.537,67.744 434.143,68.519C432.749,69.294 432.052,70.455 432.052,72.004C432.052,73.553 432.652,74.812 433.853,75.78C435.053,76.748 437.086,77.232 439.952,77.232ZM476.548,61.548C476.548,56.436 477.323,52.002 478.872,48.246C480.421,44.489 482.57,41.372 485.32,38.894C488.069,36.415 491.283,34.576 494.962,33.375C498.641,32.175 502.611,31.574 506.871,31.574C508.42,31.574 509.93,31.71 511.402,31.981C512.873,32.252 514.074,32.581 515.003,32.968L515.003,14.148C515.778,13.915 517.017,13.664 518.721,13.392C520.425,13.121 522.167,12.986 523.949,12.986C525.653,12.986 527.182,13.102 528.538,13.334C529.893,13.567 531.036,14.031 531.965,14.729C532.895,15.426 533.592,16.374 534.056,17.575C534.521,18.775 534.753,20.344 534.753,22.28L534.753,77.349C534.753,80.989 533.049,83.893 529.642,86.062C527.395,87.533 524.491,88.831 520.928,89.954C517.365,91.077 513.26,91.638 508.613,91.638C503.579,91.638 499.067,90.941 495.079,89.547C491.09,88.153 487.721,86.139 484.971,83.506C482.222,80.873 480.13,77.716 478.697,74.037C477.265,70.358 476.548,66.195 476.548,61.548ZM509.543,47.026C505.36,47.026 502.146,48.227 499.9,50.628C497.654,53.029 496.531,56.669 496.531,61.548C496.531,66.35 497.576,69.971 499.668,72.411C501.759,74.851 504.779,76.071 508.73,76.071C510.124,76.071 511.382,75.858 512.505,75.432C513.628,75.006 514.5,74.522 515.119,73.979L515.119,48.42C513.57,47.491 511.711,47.026 509.543,47.026ZM574.603,31.574C579.017,31.574 583.025,32.136 586.627,33.259C590.228,34.382 593.268,35.834 595.747,37.616C597.296,38.7 598.516,39.9 599.407,41.217C600.297,42.534 600.743,44.238 600.743,46.329L600.743,86.991C600.743,91.096 599.968,94.64 598.419,97.622C596.87,100.604 594.759,103.082 592.087,105.057C589.415,107.032 586.278,108.484 582.677,109.414C579.075,110.343 575.222,110.808 571.117,110.808C564.069,110.808 558.531,109.859 554.504,107.961C550.476,106.064 548.462,102.985 548.462,98.725C548.462,96.944 548.83,95.376 549.566,94.02C550.302,92.665 551.135,91.638 552.064,90.941C554.31,92.181 556.847,93.226 559.674,94.078C562.501,94.93 565.424,95.356 568.445,95.356C572.627,95.356 575.958,94.659 578.436,93.265C580.915,91.871 582.154,89.625 582.154,86.527L582.154,84.668C578.979,86.062 575.106,86.759 570.536,86.759C567.051,86.759 563.74,86.236 560.603,85.191C557.466,84.145 554.717,82.518 552.354,80.311C549.992,78.104 548.095,75.257 546.662,71.772C545.229,68.287 544.512,64.143 544.512,59.341C544.512,54.616 545.268,50.511 546.778,47.026C548.288,43.541 550.379,40.656 553.051,38.371C555.724,36.086 558.899,34.382 562.578,33.259C566.257,32.136 570.265,31.574 574.603,31.574ZM581.806,48.42C581.263,48.11 580.47,47.801 579.424,47.491C578.378,47.181 577.081,47.026 575.532,47.026C571.737,47.026 568.89,48.091 566.993,50.221C565.095,52.351 564.146,55.391 564.146,59.341C564.146,63.833 565.095,67.067 566.993,69.042C568.89,71.017 571.311,72.004 574.254,72.004C577.43,72.004 579.947,71.269 581.806,69.797L581.806,48.42ZM642.799,91.638C638.229,91.638 633.989,90.999 630.078,89.722C626.166,88.444 622.758,86.527 619.854,83.971C616.949,81.415 614.665,78.201 612.999,74.328C611.334,70.455 610.502,65.924 610.502,60.735C610.502,55.623 611.334,51.228 612.999,47.549C614.665,43.87 616.853,40.849 619.563,38.487C622.274,36.125 625.372,34.382 628.858,33.259C632.343,32.136 635.906,31.574 639.546,31.574C643.651,31.574 647.388,32.194 650.757,33.433C654.126,34.672 657.031,36.376 659.471,38.545C661.91,40.714 663.808,43.308 665.163,46.329C666.519,49.35 667.197,52.641 667.197,56.204C667.197,58.837 666.461,60.851 664.989,62.245C663.518,63.64 661.465,64.53 658.832,64.917L630.136,69.216C630.988,71.772 632.73,73.689 635.364,74.967C637.997,76.245 641.018,76.884 644.426,76.884C647.601,76.884 650.602,76.477 653.429,75.664C656.256,74.851 658.561,73.902 660.342,72.818C661.581,73.592 662.627,74.676 663.479,76.071C664.331,77.465 664.757,78.936 664.757,80.485C664.757,83.971 663.13,86.565 659.877,88.269C657.399,89.586 654.611,90.477 651.512,90.941C648.414,91.406 645.51,91.638 642.799,91.638ZM639.546,45.98C637.687,45.98 636.08,46.29 634.725,46.91C633.369,47.529 632.266,48.323 631.414,49.292C630.562,50.26 629.923,51.344 629.497,52.545C629.071,53.745 628.819,54.965 628.742,56.204L648.608,52.951C648.376,51.402 647.524,49.853 646.052,48.304C644.581,46.755 642.412,45.98 639.546,45.98ZM696.473,89.663C695.699,89.896 694.479,90.128 692.814,90.36C691.149,90.593 689.425,90.709 687.644,90.709C685.94,90.709 684.41,90.593 683.055,90.36C681.699,90.128 680.557,89.663 679.628,88.966C678.698,88.269 677.982,87.321 677.478,86.12C676.975,84.919 676.723,83.351 676.723,81.415L676.723,46.561C676.723,44.78 677.052,43.25 677.711,41.972C678.369,40.694 679.318,39.552 680.557,38.545C681.796,37.538 683.326,36.628 685.146,35.815C686.966,35.002 688.922,34.285 691.013,33.666C693.104,33.046 695.273,32.562 697.519,32.213C699.765,31.865 702.011,31.691 704.257,31.691C707.975,31.691 710.918,32.407 713.087,33.84C715.256,35.273 716.34,37.616 716.34,40.869C716.34,41.953 716.185,43.018 715.875,44.063C715.565,45.109 715.178,46.058 714.713,46.91C713.087,46.91 711.422,46.987 709.718,47.142C708.014,47.297 706.349,47.529 704.722,47.839C703.096,48.149 701.566,48.478 700.133,48.827C698.7,49.175 697.48,49.582 696.473,50.047L696.473,89.663Z"}),B.createElement("path",{className:"css",d:"M586.337,162.306C584.4,162.306 582.561,162.616 580.818,163.236C579.075,163.855 577.565,164.765 576.287,165.966C575.009,167.166 573.983,168.657 573.208,170.439C572.434,172.22 572.047,174.311 572.047,176.712C572.047,181.514 573.421,185.116 576.171,187.517C578.92,189.918 582.27,191.119 586.22,191.119C588.544,191.119 590.558,190.847 592.262,190.305C593.966,189.763 595.476,189.182 596.793,188.563C598.342,189.647 599.503,190.828 600.278,192.106C601.052,193.384 601.44,194.914 601.44,196.695C601.44,199.871 599.929,202.33 596.909,204.072C593.888,205.815 589.706,206.686 584.361,206.686C579.482,206.686 575.067,205.97 571.117,204.537C567.167,203.104 563.779,201.09 560.952,198.496C558.125,195.901 555.937,192.784 554.388,189.143C552.838,185.503 552.064,181.476 552.064,177.061C552.064,171.949 552.897,167.476 554.562,163.642C556.227,159.809 558.492,156.652 561.358,154.174C564.224,151.695 567.535,149.837 571.291,148.597C575.048,147.358 579.017,146.738 583.2,146.738C588.776,146.738 593.075,147.745 596.095,149.759C599.116,151.773 600.626,154.367 600.626,157.543C600.626,159.015 600.278,160.389 599.581,161.667C598.884,162.945 598.071,164.049 597.141,164.978C595.824,164.359 594.237,163.759 592.378,163.178C590.519,162.597 588.505,162.306 586.337,162.306ZM657.786,188.098C657.786,193.984 655.579,198.593 651.164,201.923C646.749,205.254 640.243,206.919 631.646,206.919C628.393,206.919 625.372,206.686 622.584,206.222C619.796,205.757 617.414,205.041 615.439,204.072C613.464,203.104 611.915,201.884 610.792,200.413C609.669,198.941 609.107,197.199 609.107,195.185C609.107,193.326 609.495,191.758 610.269,190.48C611.044,189.202 611.973,188.137 613.057,187.285C615.304,188.524 617.879,189.628 620.783,190.596C623.688,191.564 627.038,192.048 630.833,192.048C633.234,192.048 635.073,191.699 636.351,191.002C637.629,190.305 638.268,189.376 638.268,188.214C638.268,187.13 637.803,186.278 636.874,185.658C635.945,185.039 634.396,184.535 632.227,184.148L628.742,183.451C622.003,182.134 616.988,180.062 613.696,177.235C610.405,174.408 608.759,170.361 608.759,165.095C608.759,162.229 609.379,159.634 610.618,157.311C611.857,154.987 613.6,153.051 615.846,151.502C618.092,149.953 620.783,148.752 623.92,147.9C627.057,147.048 630.523,146.622 634.318,146.622C637.184,146.622 639.875,146.835 642.392,147.261C644.91,147.687 647.098,148.326 648.957,149.178C650.815,150.03 652.287,151.134 653.371,152.489C654.456,153.845 654.998,155.452 654.998,157.311C654.998,159.092 654.669,160.622 654.01,161.9C653.352,163.178 652.519,164.243 651.512,165.095C650.893,164.707 649.963,164.301 648.724,163.875C647.485,163.449 646.13,163.061 644.658,162.713C643.186,162.364 641.695,162.074 640.185,161.842C638.675,161.609 637.3,161.493 636.061,161.493C633.505,161.493 631.53,161.784 630.136,162.364C628.742,162.945 628.044,163.855 628.044,165.095C628.044,165.947 628.432,166.644 629.206,167.186C629.981,167.728 631.452,168.231 633.621,168.696L637.223,169.509C644.658,171.213 649.944,173.556 653.081,176.538C656.218,179.52 657.786,183.373 657.786,188.098ZM714.946,188.098C714.946,193.984 712.738,198.593 708.324,201.923C703.909,205.254 697.403,206.919 688.806,206.919C685.553,206.919 682.532,206.686 679.744,206.222C676.955,205.757 674.574,205.041 672.599,204.072C670.624,203.104 669.075,201.884 667.952,200.413C666.829,198.941 666.267,197.199 666.267,195.185C666.267,193.326 666.654,191.758 667.429,190.48C668.203,189.202 669.133,188.137 670.217,187.285C672.463,188.524 675.039,189.628 677.943,190.596C680.847,191.564 684.197,192.048 687.992,192.048C690.393,192.048 692.233,191.699 693.511,191.002C694.789,190.305 695.428,189.376 695.428,188.214C695.428,187.13 694.963,186.278 694.034,185.658C693.104,185.039 691.555,184.535 689.387,184.148L685.901,183.451C679.163,182.134 674.148,180.062 670.856,177.235C667.564,174.408 665.919,170.361 665.919,165.095C665.919,162.229 666.538,159.634 667.777,157.311C669.017,154.987 670.759,153.051 673.005,151.502C675.252,149.953 677.943,148.752 681.08,147.9C684.217,147.048 687.683,146.622 691.478,146.622C694.343,146.622 697.035,146.835 699.552,147.261C702.069,147.687 704.257,148.326 706.116,149.178C707.975,150.03 709.447,151.134 710.531,152.489C711.615,153.845 712.157,155.452 712.157,157.311C712.157,159.092 711.828,160.622 711.17,161.9C710.512,163.178 709.679,164.243 708.672,165.095C708.053,164.707 707.123,164.301 705.884,163.875C704.645,163.449 703.289,163.061 701.818,162.713C700.346,162.364 698.855,162.074 697.345,161.842C695.834,161.609 694.46,161.493 693.22,161.493C690.665,161.493 688.689,161.784 687.295,162.364C685.901,162.945 685.204,163.855 685.204,165.095C685.204,165.947 685.591,166.644 686.366,167.186C687.14,167.728 688.612,168.231 690.781,168.696L694.382,169.509C701.818,171.213 707.104,173.556 710.241,176.538C713.377,179.52 714.946,183.373 714.946,188.098Z"})),WI=()=>l("div",{children:h("div",{className:"mobile block-center pad-t-8",children:[l(UI,{className:"badger-css"}),l("h1",{className:"intro mar-t-8",children:"Modern, minimal CSS presets"}),h("p",{children:["You've probably heard of CSS ",l("b",{children:"reset"})," stylesheets that provide sensible defaults for HTML elements to smooth out some of the inconsistencies between browsers.  And no doubt you're aware of the plethora of fully-featured CSS ",l("b",{children:"toolkits"})," that implement all manner of styles for UI components."]}),h("p",{children:["Badger CSS sits somewhere between the two.  It provides some sensible"," ",l("b",{children:"presets"})," for HTML elements that you can use out of the box and expect to get reasonable results.  It's highly configurable and is really designed to be a starting point for building your own CSS stylesheets, design systems and UI toolkits."]}),h("div",{className:"grid-2 gap-2",children:[l(Ie,{to:"demo",text:"Demo",className:"brand button Xbdr-tl-4"}),l(Ie,{to:"getting-started/installation",text:"Getting Started",className:"brand button Xbdr-tr-4"}),l(Ie,{to:"getting-started/good",text:"What's Good?",className:"brand button Xbdr-bl-4"}),l(Ie,{to:"getting-started/bad",text:"What's Bad?",className:"brand button Xbdr-br-4"})]})]})}),HI=Object.freeze(Object.defineProperty({__proto__:null,default:WI},Symbol.toStringTag,{value:"Module"})),VI=`<div class="block-left width-12rem border pad-2">
  Block left
</div>
<div class="block-center width-12rem border pad-2 mar-t-4">
  Block center
</div>
<div class="block-right width-12rem border pad-2 mar-t-4">
  Block right
</div>
`,GI=`<div class="text-left border pad-2 mar-b-2">
  Text on the left
</div>
<div class="text-center border pad-2 mar-b-2">
  Text in the center
</div>
<div class="text-right border pad-2">
  Text on the right
</div>`,YI=`<div class="text-right border pad-4">
  Text on the right
  <div class="text-left border pad-2 mar-v-2">
    Text on the left
  </div>
  Text on the right
</div>`,qI=()=>h("div",{className:"prose",children:[l("h1",{children:"Alignment"}),l("h2",{children:"Text Alignment"}),h("p",{children:["Add the ",l("code",{children:"text-left"}),", ",l("code",{children:"text-center"})," and"," ",l("code",{children:"text-right"})," CSS classes to set the text alignment."]}),l(D,{html:GI,caption:"Text Alignment",expand:!0}),h("p",{children:["Text is aligned left by default making the ",l("code",{children:"text-left"})," ","class ",l("em",{children:"mostly"})," redundant.  However it can be useful to reset the alignment to the left for a block that would otherwise be aligned centrally or to the right"]}),l(D,{html:YI,caption:"Text Left",expand:!0}),l("h2",{children:"Block Alignment"}),h("p",{children:["Add the ",l("code",{children:"block-left"}),", ",l("code",{children:"block-center"})," and"," ",l("code",{children:"block-right"})," CSS classes to align a block to the left, in the center, or on the right, respectively."]}),h("p",{children:["You'll need to set a block width to stop it from expanding to fill the full width of the parent element.  You can do that using one of the"," ",l(Ie,{to:"/utilities/widths",text:"width-*"})," utility classes."]}),l(D,{html:VI,caption:"Block Alignment",expand:!0})]}),ZI=Object.freeze(Object.defineProperty({__proto__:null,default:qI},Symbol.toStringTag,{value:"Module"})),QI=`<div class="border pad-4">
  This element has a border.
</div>
`,KI=`<div class="grid-1 gap-2">
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
</div>`,XI=`<div class="grid-2 gap-2">
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
`,JI=`<div class="border pad-4 mar-b-2">
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
`,eL=`<div class="grid-3 gap-4 pad-t-2">
  <button class="brand solid">default</button>
  <button class="brand solid bdr-0">bdr-0</button>
  <button class="brand solid square">square</button>
</div>
<div class="grid-3 gap-4 pad-t-2">
  <input type="text" value="default">
  <input type="text" value="bdr-0" class="bdr-0">
  <input type="text" value="square" class="square">
</div>
`,tL=`<div class="bdr-6 surface-1 pad-2 border grid-1 gap-2">
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
</div>`,nL=`<style>
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
`,rL=`// define your own $border-width-values...
$border-width-values: 1, 2, 3, 5, 8, 13, 21, 34;
// ...and/or set the $border-width-prefix...
$border-width-prefix: 'br-wd';

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,aL=`// define your own $border-radius-values...
$border-radius-values: 1, 2, 3, 5, 8, 13, 21, 34;
// ...and/or set the $border-width-prefix...
$border-radius-prefix: 'br-rd';

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,lL=`<div class="grid-1 gap-4">
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
</div>`,oL=({properties:e})=>h("table",{className:"brand celled striped properties wide",children:[l("thead",{children:h("tr",{children:[l("th",{children:"Property"}),l("th",{children:"Default"}),l("th",{children:"Description"})]})}),l("tbody",{children:e.map(t=>h("tr",{children:[l("td",{className:"key nowrap",children:l("code",{children:t[0]})}),l("td",{className:"nowrap",children:t[1]}),l("td",{children:t[2]})]},t[0]))})]}),iL=({sets:e})=>l("div",{className:`grid-${e.length} gap-8 stack-desktop mar-b-8`,children:e.map(t=>h("div",{children:[l("h4",{className:"mar-b-2",children:t.title}),l(oL,{properties:t.properties}),!!t.notes&&l("div",{className:"smallish info alert",children:t.notes})]},t.title))}),sL=()=>h("div",{className:"prose",children:[l("h1",{children:"Borders"}),l("h2",{children:"Border Class"}),h("p",{children:["Add the ",l("code",{children:"border"})," CSS class to an element to give it a border."]}),l(D,{html:QI,caption:"Border",expand:!0}),l("h2",{children:"Border Width"}),h("p",{children:["Add the ",l("code",{children:"bdw-N"})," CSS class to set the border width, where"," ",l("code",{children:"N"})," is in pixel units."]}),l(D,{html:KI,caption:"Border Width",expand:!0}),h("div",{className:"grid-2 gap-8 stack-desktop",children:[h("div",{children:[h("p",{children:["The pre-defined values for ",l("code",{children:"N"})," are"," ",l("code",{children:"0"}),", ",l("code",{children:"1"}),", ",l("code",{children:"2"}),", ",l("code",{children:"3"}),","," ",l("code",{children:"4"}),", ",l("code",{children:"5"}),", ",l("code",{children:"6"}),", ",l("code",{children:"8"})," and"," ",l("code",{children:"10"}),"."]}),h("p",{children:["You can set the ",l("code",{children:"$border-width-values"})," SCSS variable if you want to define a different set of values. You can also use the ",l("code",{children:"$border-width-prefix"})," to define a different prefix for the border width classes if you don't like ",l("code",{children:"bdw"}),"."]}),h("p",{children:["In the example shown here the generated CSS classes would be"," ",l("code",{children:"br-wd-1"}),", ",l("code",{children:"br-wd-2"}),","," ",l("code",{children:"br-wd-3"}),", ",l("code",{children:"br-wd-5"})," and so on."]})]}),l(Ke,{code:rL,caption:"Custom Border Widths",language:"scss",className:"mar-b-8",expand:!0})]}),l("h2",{children:"Border Color"}),h("p",{children:["Add the ",l("code",{children:"bdc-N"})," CSS class to set the border color, where"," ",l("code",{children:"N"})," is a color stop (0, 5, 10, etc) for the current color range."]}),l(D,{html:XI,caption:"Border Color"}),l("h2",{children:"Border Radius"}),h("p",{children:["Add the ",l("code",{children:"bdr-N"})," classes to set the radius of borders. The ",l("code",{children:"-N"})," multiplier is a multiple of the base unit radius (0.25rem by default)."]}),l(D,{html:JI,caption:"Border Radius",expand:!0}),h("p",{children:["The ",l("code",{children:"bdr-0"})," class can be used to ",l("i",{children:"explicitly"})," set the border radius to 0. The ",l("code",{children:"square"})," class is an alias for"," ",l("code",{children:"bdr-0"})," with the added benefit of having the"," ",l("code",{children:"!important"})," flag set for when you really need to drive the point home."]}),l("p",{children:"They can be used to remove the corner radius from components which have them by default, like buttons and form fields."}),l(D,{html:eL,caption:"Square Corners",expand:!0}),h("div",{className:"grid-2 gap-8 stack-desktop",children:[h("div",{children:[h("p",{children:["The pre-defined values for ",l("code",{children:"N"})," are"," ",l("code",{children:"0"}),", ",l("code",{children:"1"}),", ",l("code",{children:"2"}),", ",l("code",{children:"3"}),","," ",l("code",{children:"4"}),", ",l("code",{children:"5"}),", ",l("code",{children:"6"}),", ",l("code",{children:"8"})," and"," ",l("code",{children:"10"}),"."]}),h("p",{children:["You can set the ",l("code",{children:"$border-radius-values"})," SCSS variable if you want to define a different set of values. You can also use the ",l("code",{children:"$border-radius-prefix"})," to define a different prefix for the border radius classes if you don't like ",l("code",{children:"bdr"}),"."]}),h("p",{children:["In the example shown here the generated CSS classes would be"," ",l("code",{children:"br-rd-1"}),", ",l("code",{children:"br-rd-2"}),","," ",l("code",{children:"br-rd-3"}),", ",l("code",{children:"br-rd-5"})," and so on."]})]}),l(Ke,{code:aL,caption:"Custom Border Radius",language:"scss",className:"mar-b-8",expand:!0})]}),l("h2",{children:"Border Radius Corners"}),l("p",{children:"You can independently set the radius for different corners using these classes."}),h("div",{className:"grid-2 gap-8 stack-desktop",children:[h("table",{className:"brand border lined striped mar-b-8",children:[l("thead",{children:h("tr",{children:[l("th",{children:"Class"}),l("th",{children:"Description"})]})}),h("tbody",{children:[h("tr",{children:[l("td",{children:l("code",{children:"bdr-t-N"})}),l("td",{children:"Top left and top right corner radius"})]}),h("tr",{children:[l("td",{children:l("code",{children:"bdr-b-N"})}),l("td",{children:"Bottom left and bottom right corner radius"})]}),h("tr",{children:[l("td",{children:l("code",{children:"bdr-l-N"})}),l("td",{children:"Top left and bottom left corner radius"})]}),h("tr",{children:[l("td",{children:l("code",{children:"bdr-r-N"})}),l("td",{children:"Top right and bottom right corner radius"})]}),h("tr",{children:[l("td",{children:l("code",{children:"bdr-tl-N"})}),l("td",{children:"Top left corner radius"})]}),h("tr",{children:[l("td",{children:l("code",{children:"bdr-tr-N"})}),l("td",{children:"Top right corner radius"})]}),h("tr",{children:[l("td",{children:l("code",{children:"bdr-bl-N"})}),l("td",{children:"Bottom left corner radius"})]}),h("tr",{children:[l("td",{children:l("code",{children:"bdr-br-N"})}),l("td",{children:"Bottom right corner radius"})]})]})]}),l("div",{children:h(ai,{children:["If you set a custom ",l("code",{children:"$border-radius-prefix"})," as shown above then your CSS classes will start with your chosen prefix instead of ",l("code",{children:"bdr"})," as shown here."]})})]}),l(D,{html:tL,caption:"Border Radius Corners",expand:!0}),l("h2",{children:"No Border Required!"}),h("p",{children:["You don't need to have a border displayed to set the border radius. The ",l("code",{children:"bdr-N"})," classes can be used to set the border radius on various components."]}),l(D,{html:lL,caption:"Radius Components",expand:!0}),l("h2",{children:"Border Properties"}),l("p",{children:"The following properties are used to define the border style."}),l(iL,{sets:[{title:"Defaults",properties:[["--border-width",l("code",{children:"1px"},"1px"),"Border width"],["--border-style",l("code",{children:"solid"},"solid"),h("span",{children:["Border style: ",l("code",{children:"solid"}),", ",l("code",{children:"dotted"}),", ",l("code",{children:"dashed"}),", etc."]},"desc")],["--border-radius",l("code",{children:"var(--unit-radius)"},"radius"),"Border radius"],["--border-color",l("code",{children:"var(--color-75)"},"color"),"Border color from current color range"]]},{title:"Dark Theme",properties:[["--border-color",l("code",{children:"var(--color-25)"},"color"),"Border color from current color range"]]}]}),l("h2",{children:"Setting Custom Properties"}),l(D,{html:nL,caption:"Custom Border Style",expand:!0})]}),cL=Object.freeze(Object.defineProperty({__proto__:null,default:sL},Symbol.toStringTag,{value:"Module"})),dL=`<div class="
  violet border pad-4 bdr-2 bdw-2
  fgc-40 bgc-85 hdc-30 bdc-70
">
  <h3>Colors</h3>
  Foreground color violet-40<br/>
  Background color violet-85<br/>
  Heading color violet-30<br/>
  Border color violet-70<br/>
</div>
`,uL=`<div class="
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
`,hL=`<div class="red grid-3 gap-2">
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
`,fL=`<!-- Explicit color range -->
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
</div>`,pL=`<div>
  <style>
    .my-component {
      color: var(--color-40);
      background-color: var(--color-90);
      border: 1px solid var(--color-70);
      padding: 1rem 2rem;
    }
    .dark .my-component {
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
`,gL=["red","brown","orange"],mL=()=>h("div",{className:"prose",children:[l("h1",{children:"Color Utilities"}),l("h2",{children:"Color Classes"}),h("p",{children:["Each of the color ranges defined in your palette has a corresponding class. For example, the ",l("code",{children:"red"})," class can be used to select the red color range.  Some of the colors also have semantic aliases, e.g. ",l("code",{children:"error"})," and ",l("code",{children:"invalid"})," are aliases for"," ",l("code",{children:"red"}),"."]}),h("p",{children:["Selecting a color range doesn't have much of a visible effect by itself.  The important things is that it maps the ",l("code",{children:"--color-N"})," ","CSS custom properties to the equivalent stops from the selected color range.  For example, in the scope of the ",l("code",{children:"red"})," CSS class, the"," ",l("code",{children:"--color-0"})," property is mapped to ",l("code",{children:"--red-0"}),","," ",l("code",{children:"--color-5"})," is mapped to ",l("code",{children:"--red-5"}),","," ",l("code",{children:"--color-10"})," to ",l("code",{children:"--red-10"})," and so on up to 100."]}),h("div",{className:"flex gap-4",children:[gL.map(e=>h("div",{children:[h("h3",{className:"font-mono mar-b-2",children:[".",e," ","{"," ... ","}"]}),l(xs,{scope:e,to:e})]},e)),l("div",{children:l("h3",{className:"font-mono mar-b-2",children:"...etc"})})]}),l("h2",{children:"Foreground, Background and Border Colors"}),h("p",{children:["The ",l("code",{children:"fgc-N"}),", ",l("code",{children:"bgc-N"}),", ",l("code",{children:"hdc-N"})," and"," ",l("code",{children:"bdc-N"})," classes can be used to select a stop from the color range for the foreground color, background color, heading color and border color, respectively."]}),h("p",{children:["For example, the ",l("code",{children:"bgc-80"})," CSS class will set the background color to whatever color is mapped to ",l("code",{children:"--color-80"}),".  In the scope of the ",l("code",{children:"red"})," CSS class, that will be ",l("code",{children:"--red-80"}),"."]}),h("div",{className:"grid-2 gap-8 stack-desktop",children:[l(i1,{classes:[["fgc-N","--color",h(Rn,{children:[l("b",{children:"f"}),"ore",l("b",{children:"g"}),"round ",l("b",{children:"c"}),"olor stop ",l("code",{children:"N"})]})],["bgc-N","--background-color",h(Rn,{children:[l("b",{children:"b"}),"ack",l("b",{children:"g"}),"round ",l("b",{children:"c"}),"olor stop ",l("code",{children:"N"})]})],["hdc-N","--heading-color",h(Rn,{children:[l("b",{children:"h"}),"ea",l("b",{children:"d"}),"ing ",l("b",{children:"c"}),"olor stop ",l("code",{children:"N"})]})],["bdc-N","--border-color",h(Rn,{children:[l("b",{children:"b"}),"or",l("b",{children:"d"}),"er ",l("b",{children:"c"}),"olor stop ",l("code",{children:"N"})]})]]}),l("div",{children:h(ai,{children:["The ",l("code",{children:"bdc-N"})," classes are designed to be used in conjunction with the ",l("code",{children:"border"})," class and other classes for setting ",l(Ie,{to:"/utilities/borders",text:"borders"}),".  A"," ",l("code",{children:"bdc-N"})," class will set the color border, but you won't see any effect unless you also add the ",l("code",{children:"border"})," class."]})})]}),l(D,{html:dL,caption:"Color Classes",expand:!0}),l("h2",{children:"Dark Theme"}),h("p",{children:["The ",l("code",{children:"fgd-N"}),", ",l("code",{children:"bgd-N"}),", ",l("code",{children:"hdd-N"})," and"," ",l("code",{children:"bdd-N"})," classes are equivalents of the above for when a dark theme is selected.  You can set foreground, background, heading and border colors for both light and dark themes and they will be switched in automatically."]}),h("div",{className:"grid-2 gap-2 stack-desktop",children:[l(i1,{classes:[["fgd-N","--color",h(Rn,{children:[l("b",{children:"f"}),"ore",l("b",{children:"g"}),"round ",l("b",{children:"d"}),"ark theme color stop ",l("code",{children:"N"})]})],["bgd-N","--background-color",h(Rn,{children:[l("b",{children:"b"}),"ack",l("b",{children:"g"}),"round ",l("b",{children:"d"}),"ark theme color stop ",l("code",{children:"N"})]})],["hdd-N","--heading-color",h(Rn,{children:[l("b",{children:"h"}),"ea",l("b",{children:"d"}),"ing ",l("b",{children:"d"}),"ark theme color stop ",l("code",{children:"N"})]})],["bdd-N","--border-color",h(Rn,{children:[l("b",{children:"b"}),"or",l("b",{children:"d"}),"er ",l("b",{children:"d"}),"ark theme color stop ",l("code",{children:"N"})]})]]}),l("div",{children:h(ai,{children:["The same rule applies for ",l("code",{children:"bdd-N"})," as it does for"," ",l("code",{children:"bdc-N"})," - it selects the border color but you still need to add the ",l("code",{children:"border"})," class to make the border visible."]})})]}),l(D,{html:uL,caption:"Dark Theme",expand:!0}),l("h2",{children:"Color Inheritance"}),l("p",{children:"CSS custom properties are inherited by child elements.  This means you can select a color range on an element and all children will inherit that color range."}),l(D,{html:hL,caption:"Color Inheritance",expand:!0}),l("h2",{children:"Easy Component Coloring"}),h("p",{children:["This effect is used by various badger-css components. They use the generic ",l("code",{children:"--color-N"})," properties to define colors and can then be rendered using any color range."]}),l(D,{html:fL,caption:"Color Components"}),l("h2",{children:"Creating Your Own Colored Components"}),h("p",{children:["You can employ this in your own components by using the"," ",l("code",{children:"--color-N"})," CSS custom properties to define your component colours."]}),h("p",{children:["This is particularly useful when implementing components for both light and dark themes.  You only need to specify which ",l("code",{children:"--color-N"})," stops you want to use in each case.  You don't need to write separate CSS rules for each of the colors you might want to use."]}),l(D,{html:pL,caption:"Custom Components"})]}),i1=({classes:e})=>h("table",{className:"brand celled striped mar-b-8",children:[l("thead",{children:h("tr",{children:[l("th",{children:"Class"}),l("th",{children:"Property"}),l("th",{children:"Description"})]})}),l("tbody",{children:e.map(t=>h("tr",{children:[l("td",{children:l("code",{children:t[0]})}),l("td",{children:l("code",{children:t[1]})}),l("td",{children:t[2]})]},t[0]))})]}),vL=Object.freeze(Object.defineProperty({__proto__:null,default:mL},Symbol.toStringTag,{value:"Module"})),yL=`<div class="inline border pad-2">
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
`,bL=()=>h("div",{className:"prose",children:[l("h1",{children:"Display"}),l("h2",{children:"Display Modes"}),h("p",{children:["The ",l("code",{children:"inline"}),", ",l("code",{children:"block"})," and"," ",l("code",{children:"inline-block"})," CSS classes can be used to set the"," ",l("code",{children:"display"})," mode.   These are useful when you have an element that would normally have one display type that you want displayed in a different way."]}),h("p",{children:["See the"," ",l(Ie,{to:"/utilities/flexbox",text:"flexbox"})," and"," ",l(Ie,{to:"/utilities/grid",text:"grid"})," pages for information about using flex and grid display modes."]}),l(D,{html:yL,caption:"Display Modes",expand:!0})]}),wL=Object.freeze(Object.defineProperty({__proto__:null,default:bL},Symbol.toStringTag,{value:"Module"})),xL=`<div class="flex">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>`,SL=`<div class="flex start">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,CL=`<div class="flex center">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,kL=`<div class="flex end">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,_L=`<div class="flex baseline">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,TL=`<div class="flex start gap-4">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,$L=`<div class="flex space">
  <h1 class="red bgc-50 fgc-90 pad-h-2">
    One
  </h1>
  <h1 class="brown bgc-50 fgc-90 pad-h-2">
    Two
  </h1>
  <h1 class="orange bgc-50 fgc-90 pad-h-2">
    Three
  </h1>
</div>
`,EL=`<div class="flex evenly">
  <h1 class="yellow bgc-50 fgc-90 pad-h-2">
    Four
  </h1>
  <h1 class="olive bgc-50 fgc-90 pad-h-4">
    Five
  </h1>
  <h1 class="green bgc-50 fgc-90 pad-h-4">
    Six
  </h1>
</div>
`,NL=()=>h("div",{className:"prose",children:[l("h1",{children:"Flexbox"}),l("h2",{children:"Flexbox Classes"}),h("p",{children:["Use the ",l("code",{children:"flex"})," CSS class to set the ",l("code",{children:"display"})," ","mode to ",l("code",{children:"flex"}),".  The default alignment mode"," ","(i.e. the ",l("code",{children:"align-items"})," CSS property) is ",l("code",{children:"stretch"}),"."]}),l(D,{html:xL,caption:".flex",expand:!0}),l("h2",{children:"Flexbox Alignment"}),h("p",{children:["Add the ",l("code",{children:"start"})," class to align the items to the start."]}),l(D,{html:SL,caption:".flex.start",expand:!0}),h("p",{children:["Add the ",l("code",{children:"center"})," class to align the items to the center."]}),l(D,{html:CL,caption:".flex.center",expand:!0}),h("p",{children:["Add the ",l("code",{children:"baseline"})," class to align the items to the text baseline."]}),l(D,{html:_L,caption:".flex.baseline",expand:!0}),h("p",{children:["Add the ",l("code",{children:"end"})," class to align the items to the end."]}),l(D,{html:kL,caption:".flex.end",expand:!0}),l("h2",{children:"Flexbox Spacing"}),h("p",{children:["The ",l("code",{children:"gap-N"})," classes can be used to add a gap between successive elements.  Here ",l("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit (",l("code",{children:"0.25rem"})," by default)."]}),l(D,{html:TL,caption:".flex.gap-4",expand:!0}),h("p",{children:["Add the ",l("code",{children:"space"})," class to space the items as much as possible. This is equivalent to setting the ",l("code",{children:"justify-content"})," CSS property to ",l("code",{children:"space-between"}),"."]}),l(D,{html:$L,caption:".flex.space",expand:!0}),h("p",{children:["Add the ",l("code",{children:"evenly"})," class to divide the space evenly between and around the items.  This is equivalent to setting the"," ",l("code",{children:"justify-content"})," CSS property to ",l("code",{children:"space-evenly"}),"."]}),l(D,{html:EL,caption:".flex.evenly",expand:!0})]}),IL=Object.freeze(Object.defineProperty({__proto__:null,default:NL},Symbol.toStringTag,{value:"Module"})),LL=`<div class="italic larger">
  Italic
</div>
<div class="underline larger">
  Underline
</div>
<div class="strike larger">
  Strike
</div>
`,RL=()=>h("div",{className:"prose",children:[l("h1",{children:"Font Styles"}),l("p",{children:"The following classes are defined for common font styles."}),l(D,{html:LL,caption:"Font Styles",expand:!0})]}),PL=Object.freeze(Object.defineProperty({__proto__:null,default:RL},Symbol.toStringTag,{value:"Module"})),ML=`<div class="weight-thin larger">
  Thin
</div>
<div class="weight-extra-light larger">
  Extra Light
</div>
<div class="weight-light larger">
  Thin
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
</div>`,FL=`<div class="weight-100 larger">
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
</div>`,AL=`<div class="thin larger">
  Thin
</div>
<div class="bold larger">
  Bold
</div>
<div class="thick larger">
  Thick
</div>
`,OL=`// define your own font weights...
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
`,DL=()=>h("div",{className:"prose",children:[l("h1",{children:"Font Weights"}),l("h2",{children:"Weight Names"}),h(Cn,{children:[h("p",{children:["The ",l("code",{children:"weight-<name>"})," classes can be used to set the font weight."]}),h("p",{children:["The values for ",l("code",{children:"<name>"})," can be",l("code",{children:"thin"}),", ",l("code",{children:"extra-light"}),", ",l("code",{children:"light"}),","," ",l("code",{children:"regular"}),", ",l("code",{children:"medium"}),", ",l("code",{children:"semi-bold"}),","," ",l("code",{children:"bold"}),", ",l("code",{children:"extra-bold"})," or ",l("code",{children:"black"}),"."]})]}),l(D,{html:ML,caption:"Weight Names",expand:!0}),l("h2",{children:"Weight Numbers"}),h(Cn,{children:[l("p",{children:"Alternately you can use the corresponding weight numbers."}),h("p",{children:["Those numbers can be"," ",l("code",{children:"100"}),", ",l("code",{children:"200"}),", ",l("code",{children:"300"}),","," ",l("code",{children:"400"}),", ",l("code",{children:"500"}),", ",l("code",{children:"600"}),","," ",l("code",{children:"700"}),", ",l("code",{children:"800"})," or ",l("code",{children:"900"}),"."]})]}),l(D,{html:FL,caption:"Weight Numbers",expand:!0}),l("h2",{children:"Weight Aliases"}),h("p",{children:["There are some short-cut aliases for the common cases.  Note that we use ",l("code",{children:"thick"})," rather than ",l("code",{children:"black"})," to avoid any confusion with the color black."]}),l(D,{html:AL,caption:"Weight Aliases",expand:!0}),l("h2",{children:"Custom Weights"}),l(Cn,{children:h("p",{children:["You can set the ",l("code",{children:"$font-weights"})," SASS variable if you want to define a different set of font weights."]})}),l(Ke,{code:OL,caption:"Font Weights",language:"scss",className:"mar-b-8",expand:!0})]}),zL=Object.freeze(Object.defineProperty({__proto__:null,default:DL},Symbol.toStringTag,{value:"Module"})),BL=`<div class="large">
  <p class="font-sans">Sans-serif Font</p>
  <p class="font-serif">Serif Font</p>
  <p class="font-system">System Font</p>
  <p class="font-mono">Mono Font</p>
</div>
`,jL=`// redefine any of the following fonts to taste...
$font-sans:   'Open Sans', Helvetica, sans-serif;
$font-serif:  'Times New Roman', Times, Baskerville, Georgia, serif;
$font-mono:   Monaco, 'Bitstream Vera Sans Mono', 'Lucida Console', Terminal, monospace;
$font-system: -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,UL=`// define your own font names...
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
`,WL=`p {
  font-family: $font-sans;
}
`,HL=`p {
  font-family: var(--font-sans);
}
`,VL=()=>h("div",{className:"prose",children:[l("h1",{children:"Fonts"}),l("h2",{children:"Font Classes"}),h("p",{children:["The ",l("code",{children:"font-sans"})," CSS class can be used to select a sans-serif font, ",l("code",{children:"font-serif"})," for a serif font, ",l("code",{children:"font-system"})," ","for the system font, or ",l("code",{children:"font-mono"})," for a monospaced font."]}),l(D,{html:BL,caption:"Fonts",expand:!0}),l("h2",{children:"Font Variables"}),l("p",{children:"Each of the above fonts is defined by a SASS variable which you can override to define your own font stacks."}),l(Ke,{code:jL,caption:"Customising Fonts",language:"scss",className:"mar-b-8",expand:!0}),h("p",{children:["These variables are exposed as the corresponding CSS custom properties:"," ",l("code",{children:"--font-sans"}),", ",l("code",{children:"--font-serif"}),","," ",l("code",{children:"--font-system"})," and ",l("code",{children:"--font-mono"}),"."]}),h("div",{className:"grid-2 gap-4 stack-laptop mar-b-8",children:[l(Ke,{code:WL,caption:"Font Variables in SCSS",language:"scss",expand:!0}),l(Ke,{code:HL,caption:"Font Variables in CSS",language:"css",expand:!0})]}),l("p",{children:"Or you can define your own names for fonts."}),l(Ke,{code:UL,caption:"Font Aliases",language:"scss",className:"mar-b-8",expand:!0}),h("p",{children:["In this case the CSS classes created will be ",l("code",{children:"font-body"}),","," ",l("code",{children:"font-head"})," and ",l("code",{children:"font-code"}),".  The fonts will also be defined as the ",l("code",{children:"--font-body"}),", ",l("code",{children:"--font-head"}),","," ","and ",l("code",{children:"--font-code"})," CSS custom properties."]})]}),GL=Object.freeze(Object.defineProperty({__proto__:null,default:VL},Symbol.toStringTag,{value:"Module"})),YL=`<h3>grid-2</h3>
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

<h3 class="mar-t-2">grid-4</h3>
<div class="grid-4 text-center">
  <div class="teal bgc-50 fgc-90">1</div>
  <div class="blue bgc-50 fgc-90">2</div>
  <div class="indigo bgc-50 fgc-90">3</div>
  <div class="violet bgc-50 fgc-90">4</div>
</div>

<h3 class="mar-t-2">grid-8</h3>
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
`,qL=`<div class="grid gap-4">
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
`,ZL=`<div class="grid-2 gap-4">
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
`,QL=`<div class="grid-2 gap-v-8 gap-h-2">
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
`,KL=`<div class="grid-3 gap-2 start">
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
`,XL=`<div class="grid-3 gap-2 center">
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
`,JL=`<div class="grid-3 gap-2 end">
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
`,eR=`<div class="grid-fit gap-2">
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
`,tR=`<div class="grid-fit gap-2" style="--min-width: 200px">
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
`,nR=`<h3><code>grid-fit</code></h3>

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
`,rR=()=>h("div",{className:"prose",children:[l("h1",{children:"Grid"}),l("h2",{children:"Grid Columns"}),h("p",{children:["Use a ",l("code",{children:"grid-N"})," CSS class to set the ",l("code",{children:"display"})," ","mode to ",l("code",{children:"grid"})," where ",l("code",{children:"N"})," is the number of columns from 2 to 16."]}),l(D,{html:YL,caption:"Grid Columns",expand:!0}),l("h2",{children:"Gaps"}),h("p",{children:["The ",l("code",{children:"gap-N"})," classes can be used to add a gap between successive elements.  Here ",l("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit (",l("code",{children:"0.25rem"})," by default)."]}),l(D,{html:ZL,caption:"Grid Gaps",expand:!0}),l("h2",{children:"Vertical and Horizontal Gaps"}),h("p",{children:["The the ",l("code",{children:"gap-v-N"})," and ",l("code",{children:"gap-h-N"})," classes can be used to define the vertical and horizontal gaps separately. Again, ",l("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit."]}),l(D,{html:QL,caption:"Grid Gaps",expand:!0}),l("h2",{children:"Single Column Grid"}),h("p",{children:["The ",l("code",{children:"grid"})," CSS class (or ",l("code",{children:"grid-1"})," which does the same thing) creates a single column grid.  It's useful because it then allows you to use the ",l("code",{children:"gap-N"})," classes to add a vertical gap between child components."]}),l(D,{html:qL,caption:"Single Column Grid",expand:!0}),l("h2",{children:"Grid Fit"}),h("p",{children:["The ",l("code",{children:"grid-fit"})," CSS class will fit as many items into the grid as it can and then wrap onto the next line."]}),l(D,{html:eR,caption:"Grid Fit"}),l("h2",{children:"Grid Fill"}),h("p",{children:["The ",l("code",{children:"grid-fill"})," CSS class is similar to ",l("code",{children:"grid-fit"}),". The difference between them is what happens when there are't enough items to fill the container width.  ",l("code",{children:"grid-fit"})," will stretch them whereas ",l("code",{children:"grid-fill"})," will not."]}),l(D,{html:nR,caption:"Grid Fill"}),l("h2",{children:"Grid Fit/Fill Size"}),h("p",{children:["Both ",l("code",{children:"grid-fit"})," and ",l("code",{children:"grid-fill"})," can define a minimum size for each child element.  By default this is"," ",l("code",{children:"100px"})," wide.  You can set the ",l("code",{children:"--min-width"})," property to change it."]}),l(D,{html:tR,caption:"Grid Size"}),l("h2",{children:"Grid Start"}),h("p",{children:["Add the ",l("code",{children:"start"})," CSS class to align items to the start of grid columns."]}),l(D,{html:KL,caption:"Grid Start",expand:!0}),l("h2",{children:"Grid Center"}),h("p",{children:["Add the ",l("code",{children:"center"})," CSS class to align items to the center of grid columns."]}),l(D,{html:XL,caption:"Grid Center",expand:!0}),l("h2",{children:"Grid End"}),h("p",{children:["Add the ",l("code",{children:"end"})," CSS class to align items to the end of grid columns."]}),l(D,{html:JL,caption:"Grid End",expand:!0})]}),aR=Object.freeze(Object.defineProperty({__proto__:null,default:rR},Symbol.toStringTag,{value:"Module"})),lR=()=>h("div",{className:"page prose",children:[l("h1",{children:"Utility Classes"}),h("p",{className:"intro",children:["CSS utility classes are ",l("i",{children:"extremely"})," useful for applying styles to elements on an ad-hoc basis.  But they shouldn't be used as a substitute for writing CSS for reusable styles."]}),h("p",{children:["Some CSS frameworks, most notably"," ",l("a",{href:"https://tailwindcss.com/",children:"tailwind.css"}),", have taken this to the extreme where everything is a utility class and you never need to write any CSS at all. Although this approach has some merits for rapid prototyping, I personally wouldn't use it when building a non-trivial site because I think that it can have a negative impact on readability and maintainability."]}),h("p",{children:["I prefer to take the pragmatic approach and use utility classes to apply ",l("i",{children:"exceptional"})," styling to elements that don't warrant having their own dedicated CSS classes.  The general rule that I follow is to create dedicated CSS classes for components that I'm using in different places in a site.  For example, a product card, a user avatar, button and form styling, and so.  This ensures that they are consistent and can easily be changed across the whole site by updating the rules in the stylesheet."]}),h("p",{children:["For styling that depends on the context in which an element is being used, I'll generally reach for utility classes. By far the most useful of these, and the ones that I use more than any other, are the ",l("code",{children:"mar"})," and ",l("code",{children:"pad"}),` utility classes to add custom margins and padding.  The amount of margin or padding required on an element will often depend on the other elements around it, so there isn't a "one size fits all" solution. Other useful utility classes include those to set the font size, add a border or drop shadow, or to set the layout to use flexbox or grid.`]}),l("h2",{children:"CSS Custom Properties"}),h("p",{children:['CSS custom properties or CSS variables as they are also know, are an incredibly powerful addition to the toolkit for any web designer or developer.  They allow you to define reusable "snippets" of CSS that can easily be applied to different elements.  They can be used to replace much of the functionality that was previously only accessible by using variables and/or mixins in a CSS pre-processing language like'," ",l("a",{href:"https://sass-lang.com/",children:"SASS"}),"."]}),l("h2",{children:"SASS Variables"}),l("p",{children:"Although CSS custom properties have largely removed the need for CSS pre-processors like SASS, there are still benefits to be had from using them.  One benefit is that they can help to reduce bloat in your CSS files.  SASS allows you to define variables that can be used to implement system-wide configuration options that are then compiled into the generated CSS files.  In contrast, any CSS custom properties that you use must be included in the CSS and, if overdone, can lead to significant increases in the file size."}),l("h2",{children:"When to Use Each?"}),l("p",{children:"The general rule that I follow is to use SASS variables for configuration options that I might want to change on a site-wide basis but generally remain constant throughout the site.  For example, the default font face, the breakpoints, the colors or default spacing units.  It's useful to have these defined as variables because it allows me to plug Badger-UI into a project, tweak the default settings, and then get coding.  If at some point in the future I decide they're not quite right, or if the client or a designer wants me to change them, then it should be easy to do so, and they should be applied universally."}),l("p",{children:"For styles that I might want to change in different parts of the site, need to reflect some application state (e.g. the differences between a success, warning or error message), or that should have different properties depending on the user selecting a light or dark theme, then CSS properties are generally the way to go."}),l("p",{children:"For styles that need to be applied on an ad-hoc basis, utility classes are what I reach for."})]}),oR=Object.freeze(Object.defineProperty({__proto__:null,default:lR},Symbol.toStringTag,{value:"Module"})),iR=`<div class="relative border" style="height: 140px">
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
`,sR=()=>h("div",{className:"prose",children:[l("h1",{children:"Position"}),l("h2",{children:"Position Classes"}),h("p",{children:["Add the ",l("code",{children:"absolute"}),", ",l("code",{children:"relative"})," and"," ",l("code",{children:"fixed"})," CSS classes to set the position type."]}),h("p",{children:["For elements that are set to ",l("code",{children:"absolute"})," or ",l("code",{children:"fixed"})," ","position, the ",l("code",{children:"top"}),", ",l("code",{children:"bottom"}),", ",l("code",{children:"left"})," ","and ",l("code",{children:"right"})," classes can be used to position them against the corresponding edge of the closest parent element with the"," ",l("code",{children:"relative"})," position type."]}),l(D,{html:iR,caption:"Position",expand:!0})]}),cR=Object.freeze(Object.defineProperty({__proto__:null,default:sR},Symbol.toStringTag,{value:"Module"})),dR=`<div class="scroll-x border pad-2 nowrap mar-b-2">
  Yeah, I like it, just been fooling about with it for a few months now, very delicate... Yeah, it's part of a... trilogy really, a musical trilogy I'm doing, in, D minor, which I always find is really the saddest of all keys really. I don't know why, but it makes people weep instantly. You play a "baaaaa... baaaaaa..." it's the horn part. "...baaaa, baaaaa...", yeah, just simple lines intertwining, you know very much like, I'm really influenced by Mozart and Bach, It's sort of in between those, really, it's like a Mach piece really.<
</div>
`,uR=`<div class="scroll-y border pad-2" style="height: 7rem">
  Yeah, I like it, just been fooling about with it for a few months
  now, very delicate... Yeah, it's part of a... trilogy really, a
  musical trilogy I'm doing, in, D minor, which I always find is really
  the saddest of all keys really. I don't know why, but it makes people
  weep instantly. You play a "baaaaa... baaaaaa..." it's the horn part.
  "...baaaa, baaaaa...", yeah, just simple lines intertwining, you
  know very much like, I'm really influenced by Mozart and Bach,
  It's sort of in between those, really, it's like a Mach piece
  really.
</div>`,hR=()=>h("div",{className:"prose",children:[l("h1",{children:"Scolling"}),l("h2",{children:"Scroll Classes"}),h("p",{children:["Add the ",l("code",{children:"scroll-x"})," or ",l("code",{children:"scroll-y"})," CSS classes to set ",l("code",{children:"overflow-x"})," or ",l("code",{children:"overflow-y"})," to ",l("code",{children:"scroll"}),", respectively."]}),l("p",{children:`Be warned that you'll also need to set widths and/or heights as appropriate to stop the layout engine from doing the "right" thing and expanding the containers to fit the content.`}),l(D,{html:dR,caption:"scroll-x",expand:!0}),l(D,{html:uR,caption:"scroll-y",expand:!0})]}),fR=Object.freeze(Object.defineProperty({__proto__:null,default:hR},Symbol.toStringTag,{value:"Module"})),pR=`<div class="surface-3 pad-8">
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
</div>`,gR=`<div class="surface-3 pad-8">
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
`,mR=()=>h("div",{className:"prose",children:[l("h1",{children:"Shadows"}),l("h2",{children:"Shadow Classes"}),h("p",{children:["Use the ",l("code",{children:"shadow-1"}),", ",l("code",{children:"shadow-2"}),","," ",l("code",{children:"shadow-3"}),", ",l("code",{children:"shadow-4"})," and ",l("code",{children:"shadow-5"})," ","CSS classes to add a box shadow of progressively larger size.  Larger shadows can be used to suggest that an element is lifted higher off the background and thus appears closer to the foreground."]}),l(D,{html:pR,caption:"Shadows",expand:!0}),l("h2",{children:"Shadow Properties"}),h("p",{children:["The shadow styles are defined as CSS custom properties, (e.g."," ",l("code",{children:"--shadow-1"}),", ",l("code",{children:"--shadow-2"}),", etc).  The colors and opacities used for the shadows depend on both the shadow depth and color theme.  For the default light theme the base color is"," ",l("code",{children:"--grey-0"})," and the shadows are more transparent.  For the dark theme, where shadows need to be a bit more prominent to be visible, the base color is ",l("code",{children:"black"})," and the shadows are more opaque."]}),h("p",{children:["The benefit of CSS custom properties is that you can easily apply them to your own style rules.  In this example we define a"," ",l("code",{children:".shadow-example"})," rule which adds a ",l("code",{children:"box-shadow"})," using the ",l("code",{children:"--shadow-2"})," custom property.  The shadow color will be set correctly for both light and dark themes so you don't need to worry about defining separate rules for each."]}),l(D,{html:gR,caption:"Shadow Style",expand:!0})]}),vR=Object.freeze(Object.defineProperty({__proto__:null,default:mR},Symbol.toStringTag,{value:"Module"})),yR=`<div class="smallest">Smallest text</div>
<div class="smaller">Smaller text</div>
<div class="small">Small text</div>
<div>Normal size text</div>
<div class="large">Large text</div>
<div class="larger">Larger text</div>
<div class="largest">Largest text</div>
`,bR=`<div>x1</div>
<div class="x2">x2</div>
<div class="x3">x3</div>
<div class="x4">x4</div>
<div class="x5">x5</div>
<div class="x6">x6</div>
<div class="x7">x7</div>
<div class="x8">x8</div>
<div class="x9">x9</div>
<div class="x10">x10</div>
`,wR=`// define your own text sizes...
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
@import "@abw/badger-css/styles/badger.scss";`,xR=({heading1:e="Class",heading2:t="Rem Size",heading3:n=h(Rn,{children:["Pixel Size ",l("span",{className:"smaller",children:"(when 1rem=16px)"})]}),rows:r})=>h("table",{className:"brand celled striped properties small wide mar-b-2",children:[l("thead",{children:h("tr",{children:[l("th",{children:e}),l("th",{children:t}),l("th",{children:n})]})}),l("tbody",{children:r.map(a=>h("tr",{children:[l("td",{children:l("code",{children:a[0]})}),l("td",{children:a[1]}),l("td",{children:a[2]})]},a[0]))})]}),SR=()=>h("div",{className:"prose",children:[l("h1",{children:"Text Sizes"}),l("h2",{children:"Size Classes"}),h("p",{children:["Use the ",l("code",{children:"smallest"}),", ",l("code",{children:"smaller"}),","," ",l("code",{children:"small"}),", ",l("code",{children:"medium"})," (default)"," ",l("code",{children:"large"}),", ",l("code",{children:"larger"})," and ",l("code",{children:"largest"})," CSS classes to set the text size. These are defined as SASS variables which you can override (e.g. ",l("code",{children:"$size-large"}),") and CSS custom properties which you can use in your own stylesheets or inline styles (e.g. ",l("code",{children:"--size-large"}),")."]}),l(D,{html:yR,caption:"Text Sizes",expand:!0}),l("h2",{children:"Custom Sizes"}),l("p",{children:"The pre-defined values for the sizes are shown in the table below."}),h("p",{children:["You can set the ",l("code",{children:"$sizes"})," SCSS variable if you want to define a different set of sizes, either to give them different names or values."]}),h("p",{children:["In the example shown here the generated CSS classes would be"," ",l("code",{children:"xxs"}),", ",l("code",{children:"xs"}),", ",l("code",{children:"s"}),","," ",l("code",{children:"m"}),", ",l("code",{children:"l"}),", ",l("code",{children:"xl"})," and ",l("code",{children:"xxl"}),"."]}),l(bi,{code:wR,caption:"Custom Sizes",language:"scss",expand:!0,children:l(xR,{rows:[["smallest","0.625rem","10px"],["smaller","0.75rem","12px"],["small","0.875rem","14px"],["medium","1rem","16px"],["large","1.25rem","20px"],["larger","1.5rem","24px"],["largest","2rem","32p<"]]})}),l("h2",{children:"Size Multipliers"}),h("p",{children:["For larger text sizes you can use the size multiple classes:"," ",l("code",{children:"x2"}),", ",l("code",{children:"x3"}),", etc., up to ",l("code",{children:"x10"}),". These are all multiples of ",l("code",{children:"1rem"}),"."]}),l(D,{html:bR,caption:"Text Sizes",expand:!0})]}),CR=Object.freeze(Object.defineProperty({__proto__:null,default:SR},Symbol.toStringTag,{value:"Module"})),kR=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
  <div class="mar surface pad-2">
    This has 1 unit of margin.
  </div>
</div>
`,_R=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
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
`,TR=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
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
`,$R=`<div class="pad-2 grey20 bgc-50 fgc-90 mar-b-2">
  Two units of padding all around.
</div>
<div class="pad-v-4 pad-h-8 grey20 bgc-50 fgc-90 border">
  Four units of padding vertically and eight units
  horizontally
</div>
`,ER=`<div class="grid-1 gap-4 surface-3 pad-4">
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
`,NR=()=>h("div",{className:"prose",children:[l("h1",{children:"Spacing"}),h("p",{children:["The ",l("code",{children:"mar"})," and ",l("code",{children:"pad"})," CSS utility classes can be used to set the margins and padding for and element."]}),l("h2",{children:"Margins"}),h("p",{children:["The ",l("code",{children:"mar"})," class by itself will add 1 unit of margin to all four sides of an element.  The default unit size is ",l("code",{children:"0.25rem"}),"."]}),l(D,{html:kR,caption:"Margins",expand:!0}),h("p",{children:["The ",l("code",{children:"mar-N"})," classes will add multiples of the unit, where ",l("code",{children:"N"})," is one of the values:"," ",l("code",{children:"0"}),", ",l("code",{children:"1"}),", ",l("code",{children:"2"}),", ",l("code",{children:"3"}),","," ",l("code",{children:"4"}),", ",l("code",{children:"6"}),", ",l("code",{children:"8"}),", ",l("code",{children:"10"}),","," ",l("code",{children:"12"}),", ",l("code",{children:"16"}),", ",l("code",{children:"20"}),","," ",l("code",{children:"24"}),", ",l("code",{children:"28"})," or ",l("code",{children:"32"}),".  The"," ",l("code",{children:"mar-1"})," class is effectively the same as just ",l("code",{children:"mar"})," ","but is included for completeness.  Also note that ",l("code",{children:"mar-0"})," can be used to remove any margin that would otherwise be present on an element."]}),l(D,{html:_R,caption:"Margin Multiple",expand:!0}),l("h2",{children:"Margin Directions"}),h("p",{children:["You can also specify the direction for the margin using the"," ",l("code",{children:"mar-t"})," (top), ",l("code",{children:"mar-r"})," (right),"," ",l("code",{children:"mar-b"})," (bottom), ",l("code",{children:"mar-l"})," (left),"," ",l("code",{children:"mar-v"})," (vertical: top and bottom) and"," ",l("code",{children:"mar-h"})," (horizontal: left and right) classes. The default is 1 unit of margin or a ",l("code",{children:"-N"})," suffix can be added as a multiplier.  For example ",l("code",{children:"mar-t-4"})," to add 4 units of margin to the top of an element."]}),l(D,{html:TR,caption:"Margin Direction",expand:!0}),l("h2",{children:"Padding"}),h("p",{children:["The ",l("code",{children:"pad"})," and related utility classes work in the same way but add padding inside the element."]}),l(D,{html:$R,caption:"Padding",expand:!0}),h("p",{children:["One important thing to note is that padding is applied in multiples of 0.25",l("b",{children:"em"})," whereas margins use 0.25",l("b",{children:"rem"}),".  This is because you usually want spacing around elements to be consistent (which rem provides) but padding inside an element should be based on the text size (which em provides)."]}),l(D,{html:ER,caption:"Pad Sizes",expand:!0})]}),IR=Object.freeze(Object.defineProperty({__proto__:null,default:NR},Symbol.toStringTag,{value:"Module"})),LR=`<div class="flex gap-4">
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
`,RR=`<div class="flex gap-4">
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
`,PR=`<table class="wide shaded lined">
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
`,MR=`// redefine $splits to include what you want...
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
@import "@abw/badger-css/styles/badger.scss";`,FR=[["2","One half","50%"],["3","One third","33.33333333%"],["2-3","Two thirds","66.66666666%"],["4","One quarter","25%"],["3-4","Three quarters","75%"],["5","One fifth","20%"],["2-5","Two fifths","40%"],["3-5","Three fifths","60%"],["4-5","Four fifths","80%"],["6","One sixth","16.66666666%"],["5-6","Five sixth","83.33333333%"],["7","One seventh","14.28571429%"],["2-7","Two sevenths","28.57142858%"],["3-7","Three sevenths","42.85714287%"],["4-7","Four sevenths","57.14285716%"],["5-7","Five sevenths","71.42857145%"],["6-7","Six sevenths","85.71428574%"],["8","One eighth","12.5%"],["3-8","Three eighths","37.5%"],["5-8","Five eighths","62.5%"],["7-8","Seven eighths","87.5%"],["9","One ninth","11.11111111%"],["2-9","Two ninths","22.22222222%"],["4-9","Four ninths","44.44444444%"],["5-9","Five ninths","55.55555555%"],["7-9","Seven ninths","77.77777777%"],["8-9","Eight ninths","88.88888888%"],["10","One tenth","10%"],["3-10","Three tenths","30%"],["7-10","Seven tenths","70%"],["9-10","Nine tenths","90%"],["11","One eleventh","9.090909090%"],["12","One twelfth","8.333333333%"],["13","One thirteenth","7.692307692%"],["14","One fourteenth","7.142857142%"],["15","One fifteenth","6.666666666%"],["16","One sixteenth","6.25%"]],AR=()=>h("div",{className:"prose",children:[l("h1",{children:"Split"}),l("h2",{children:"Evenly Split Columns"}),h(Cn,{children:[h("p",{children:["The ",l("code",{children:"split-N"})," classes can be used to set the width of an element to a fraction of the width of the parent container. For example, ",l("code",{children:"split-2"})," sets the width to one half,"," ",l("code",{children:"split-3"})," to one third, and so on.  The value for"," ",l("code",{children:"N"})," can be anything from 2 to 16."]}),h("p",{children:["They can be useful in conjunction with the"," ",l(Ie,{to:"/utilities/flexbox",text:"flexbox"})," classes to constrain columns to be a particular width.  Otherwise the flexbox layout engine will try to expand the width of columns that have more content."]})]}),l(D,{html:LR,caption:"Even Splits"}),l("h2",{children:"Unevenly Split Columns"}),h("p",{children:["The ",l("code",{children:"split-N-M"})," classes can be used to create uneven splits. For example, ",l("code",{children:"split-2-5"})," creates a columns that is two fifths of the width."]}),h("p",{children:["These are defined for all uneven splits up to tenths (e.g. there's a ",l("code",{children:"split-3-10"})," class for three tenths, but no ",l("code",{children:"split-3-11"})," ","for three elevenths).  Not that redundant classes are not included. For example, there's no ",l("code",{children:"split-3-6"})," class because it's one half or ",l("code",{children:"split-2"}),"."]}),l(D,{html:RR,caption:"Uneven Splits"}),l("h2",{children:"Tables"}),h("p",{children:["The ",l("code",{children:"split-*"})," classes also work with table columns. This can be useful to prevent the layout engine from expanding columns to fit the content.  It's especially useful if you have multiple tables and you want the columns to be the same width in each of the tables."]}),l(D,{html:PR,caption:"Table Splits"}),l("h2",{children:"Split Classes"}),h(Cn,{children:[l("p",{children:"The CSS classes and their corresponding widths are listed below."}),h("p",{children:["You can set the ",l("code",{children:"$splits"})," SASS variable if you want to define a different set of splits."]})]}),l(bi,{code:MR,caption:"Custom Splits",language:"scss",expand:!0,children:h("table",{className:"brand celled striped properties small wide mar-b-2",children:[l("thead",{children:h("tr",{children:[l("th",{children:"Class"}),l("th",{children:"Size"}),l("th",{children:"%age Width"})]})}),l("tbody",{children:FR.map(e=>h("tr",{children:[l("td",{children:h("code",{children:["split-",e[0]]})}),l("td",{children:e[1]}),l("td",{children:e[2]})]},e[0]))})]})})]}),OR=Object.freeze(Object.defineProperty({__proto__:null,default:AR},Symbol.toStringTag,{value:"Module"})),DR=`<h4 class="font-mono smaller">stack-widescreen</h4>
<div class="grid-3 gap-2 stack-widescreen mar-b-4">
  <div class="border pad-4"> A </div>
  <div class="border pad-4"> B </div>
  <div class="border pad-4"> C </div>
</div>

<h4 class="font-mono smaller">stack-desktop</h4>
<div class="grid-3 gap-2 stack-desktop mar-b-4">
  <div class="border pad-4"> A </div>
  <div class="border pad-4"> B </div>
  <div class="border pad-4"> C </div>
</div>

<h4 class="font-mono smaller">stack-laptop</h4>
<div class="grid-3 gap-2 stack-laptop mar-b-4">
  <div class="border pad-4"> A </div>
  <div class="border pad-4"> B </div>
  <div class="border pad-4"> C </div>
</div>

<h4 class="font-mono smaller">stack-tablet</h4>
<div class="grid-3 gap-2 stack-tablet mar-b-4">
  <div class="border pad-4"> A </div>
  <div class="border pad-4"> B </div>
  <div class="border pad-4"> C </div>
</div>

<h4 class="font-mono smaller">stack-mobile</h4>
<div class="grid-3 gap-2 stack-mobile">
  <div class="border pad-4"> A </div>
  <div class="border pad-4"> B </div>
  <div class="border pad-4"> C </div>
</div>
`,zR=`<h4 class="font-mono smaller">stack-widescreen</h4>
<div class="flex gap-2 stack-widescreen mar-b-4">
  <div class="split-3 border pad-4"> A </div>
  <div class="split-3 border pad-4"> B </div>
  <div class="split-3 border pad-4"> C </div>
</div>

<h4 class="font-mono smaller">stack-desktop</h4>
<div class="flex gap-2 stack-desktop mar-b-4">
  <div class="split-3 border pad-4"> A </div>
  <div class="split-3 border pad-4"> B </div>
  <div class="split-3 border pad-4"> C </div>
</div>

<h4 class="font-mono smaller">stack-laptop</h4>
<div class="flex gap-2 stack-laptop mar-b-4">
  <div class="split-3 border pad-4"> A </div>
  <div class="split-3 border pad-4"> B </div>
  <div class="split-3 border pad-4"> C </div>
</div>

<h4 class="font-mono smaller">stack-tablet</h4>
<div class="flex gap-2 stack-tablet mar-b-4">
  <div class="split-3 border pad-4"> A </div>
  <div class="split-3 border pad-4"> B </div>
  <div class="split-3 border pad-4"> C </div>
</div>

<h4 class="font-mono smaller">stack-mobile</h4>
<div class="flex gap-2 stack-tablet">
  <div class="split-3 border pad-4"> A </div>
  <div class="split-3 border pad-4"> B </div>
  <div class="split-3 border pad-4"> C </div>
</div>
`,BR=`// define your own breakpoints...
$breakpoints: (
  'mobile':     30rem,
  'tablet':     50rem,
  'laptop':     70rem,
  'desktop':    80rem,
  'widescreen': 90rem
) !default;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";`,jR={mobile:30,tablet:50,laptop:70,desktop:80,widescreen:90},UR=()=>h("div",{className:"prose",children:[l("h1",{children:"Stacking Split Columns"}),h("p",{children:["One of the problems with creating columns using"," ",l(Ie,{to:"/utilities/grid",text:"grid"}),","," ",l(Ie,{to:"/utilities/flexbox",text:"flexbox"})," ","and ",l(Ie,{to:"/utilities/split",text:"split"})," is that sometimes a user's screen size isn't large enough to accommodate them."]}),h("p",{children:["The ",l("code",{children:"stack-*"})," classes can be used to stack columns when the screen size is narrower than a threshold breakpoint. These are ",l("code",{children:"stack-mobile"}),", ",l("code",{children:"stack-tablet"}),","," ",l("code",{children:"stack-laptop"}),", ",l("code",{children:"stack-desktop"})," and"," ",l("code",{children:"stack-widescreen"}),"."]}),l("h2",{children:"Grid Stacking"}),h(Cn,{children:[h("p",{children:["This example shows how adding a ",l("code",{children:"stack-*"})," class to an element that has one of the ",l("code",{children:"grid-*"})," classes will cause the columns to be stacked at different breakpoints."]}),l(ai,{title:"Try it out!",children:"Try resizing your browser window and see how the grid elements below get stacked."})]}),l(D,{html:DR,caption:"Stacking Grids"}),l("h2",{children:"Flexbox Stacking"}),h("p",{children:["This example shows the same thing for ",l("code",{children:"flex"})," containers."]}),l(D,{html:zR,caption:"Stacking Flexbox"}),l("h2",{children:"Breakpoint Names"}),h(Cn,{children:[l("p",{children:"The breakpoint names and their corresponding widths in rems and pixels (assuming 1rem = 16px) are shown below."}),h("p",{children:["You can set the ",l("code",{children:"$breakpoints"})," SASS variable if you want to define a different set of breakpoints."]})]}),l(bi,{code:BR,caption:"Custom Breakpoints",language:"scss",expand:!0,children:h("table",{className:"brand celled striped properties small wide mar-b-2",children:[l("thead",{children:h("tr",{children:[l("th",{children:"Class"}),l("th",{children:"Rems"}),l("th",{children:"Pixels"})]})}),l("tbody",{children:Object.entries(jR).map(([e,t])=>h("tr",{children:[l("td",{children:l("code",{children:e})}),h("td",{children:[t,"rem"]}),h("td",{children:[t*16,"px"]})]},e))})]})})]}),WR=Object.freeze(Object.defineProperty({__proto__:null,default:UR},Symbol.toStringTag,{value:"Module"})),HR=`<div class="surface border pad-2">
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
`,VR=`<div class="surface-1 border pad-2 mar-b-2">
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
<div class="surface-5 border shadow-1 pad-4">
  surface-5
  <div class="surface-4 border shadow-2 pad-4 mar-t-4">
    surface-4
    <div class="surface-3 border shadow-3 pad-4 mar-t-4">
      surface-3
      <div class="surface-2 border shadow-4 pad-4 mar-t-4">
        surface-2
        <div class="surface-1 border shadow-5 pad-4 mar-t-4">
          surface-1
        </div>
      </div>
    </div>
  </div>
</div>
`,GR=`<div class="grid-3 gap-2 smallish">
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
`,YR=()=>h("div",{className:"prose",children:[l("h1",{children:"Surfaces"}),h("p",{children:['When building UI components it can be useful to think in terms of "surfaces", with each surface getting progressively "closer" to the user and demanding their closer attention. You may want to combine these with the ',l("code",{children:"shadow-N"})," classes to further emphasise the effect."]}),l("p",{children:"As a general rule surfaces that are in the foreground should be lighter than those in the background.  Note that this applies to dark themes as well as light themes."}),l("h2",{children:"Surface Classes"}),h("p",{children:["Use the ",l("code",{children:"surface-1"}),", ",l("code",{children:"surface-2"}),","," ",l("code",{children:"surface-3"}),", ",l("code",{children:"surface-4"})," and"," ",l("code",{children:"surface-5"})," CSS classes to define elements with appropriate background and text colors to achieve this effect.  The lower numbers are meant to be further in the background with higher numbers being closer to the foreground."]}),l(D,{html:HR,caption:"Surfaces",expand:!0}),h("p",{children:["The ",l("code",{children:"surface"})," class is a special case being used here to apply a background color for the examples.  When using a light theme this"," ","is ",l("code",{children:"white"})," and for a dark theme it is ",l("code",{children:"black"}),"."]}),h("p",{children:["The styles are defined using CSS variables for the foreground, background and border colors, e.g. ",l("code",{children:"--color"}),", ",l("code",{children:"--background-color"})," ","and ",l("code",{children:"--border-color"}),". In turn these are defined using the ",l("code",{children:"grey"})," color range depending on the color theme. For example, the ",l("code",{children:"--background-color"}),"for ",l("code",{children:"--surface-3"}),"is defined to be ",l("code",{children:"--color-90"})," by default, and ",l("code",{children:"--color-10"})," when the dark theme is in effect."]}),l("h2",{children:"Surfaces With Borders"}),h("p",{children:["Add the ",l("code",{children:"border"})," CSS class to add a border around a surface."]}),l(D,{html:VR,caption:"Surface Borders",expand:!0}),l("h2",{children:"Colored Surfaces"}),l("p",{children:"Add any of the color classes to get different colored surfaces."}),l(D,{html:GR,caption:"Color Surfaces"})]}),qR=Object.freeze(Object.defineProperty({__proto__:null,default:YR},Symbol.toStringTag,{value:"Module"})),ZR=`<div class="grid-1 gap-4">
  <input type="text" value="A wide input"/>
  <button class="blue wide">
    A wide button
  </button>
</div>`,QR=`<div class="fgc-100 grid gap-2 scroll-x">
  <style>
    .wb {
      padding: 0.25rem;
      font-size: var(--size-smaller);
      background-color: var(--color-50);
      border-right: 5px solid var(--color-40);
    }
  </style>
  <div class="width-2rem   red     wb">2rem</div>
  <div class="width-4rem   brown   wb">4rem</div>
  <div class="width-6rem   orange  wb">6rem</div>
  <div class="width-8rem   yellow  wb">8rem</div>
  <div class="width-10rem  olive   wb">10rem</div>
  <div class="width-12rem  green   wb">12rem</div>
  <div class="width-14rem  teal    wb">14rem</div>
  <div class="width-16rem  blue    wb">16rem</div>
  <div class="width-18rem  indigo  wb">18rem</div>
  <div class="width-20rem  violet  wb">20rem</div>
  <div class="width-25rem  purple  wb">25rem</div>
  <div class="width-30rem  pink    wb">30rem</div>
  <div class="width-35rem  maroon  wb">35rem</div>
  <div class="width-40rem  red     wb">40rem</div>
  <div class="width-45rem  brown   wb">45rem</div>
  <div class="width-50rem  orange  wb">50rem</div>
  <div class="width-60rem  yellow  wb">60rem</div>
  <div class="width-70rem  olive   wb">70rem</div>
  <div class="width-80rem  orange  wb">80rem</div>
  <div class="width-90rem  green   wb">90rem</div>
  <div class="width-100rem teal   wb">100rem</div>
</div>`,KR=`<div class="fgc-100 grid gap-2 scroll-x">
  <style>
    .wb {
      padding: 0.25rem;
      font-size: var(--size-smaller);
      background-color: var(--color-50);
      border-right: 5px solid var(--color-40);
    }
  </style>
// 10rem 20rem 25rem 30rem 35rem 40rem 45rem 50rem 60rem 70rem  80rem  90rem  100rem
// 160px 320px 400px 480px 560px 640px 720px 800px 960px 1120px 1280px 1440px 1600px

  <div class="width-32px   red     wb">32px</div>
  <div class="width-64px   brown   wb">64px</div>
  <div class="width-96px   orange  wb">96px</div>
  <div class="width-128px  yellow  wb">128px</div>
  <div class="width-160px  olive   wb">160px</div>
  <div class="width-192px  green   wb">192px</div>
  <div class="width-224px  teal    wb">224px</div>
  <div class="width-256px  blue    wb">256px</div>
  <div class="width-288px  indigo  wb">288px</div>
  <div class="width-320px  violet  wb">320px</div>
  <div class="width-400px  purple  wb">400px</div>
  <div class="width-480px  pink    wb">480px</div>
  <div class="width-560px  maroon  wb">560px</div>
  <div class="width-640px  red     wb">640px</div>
  <div class="width-720px  brown   wb">720px</div>
  <div class="width-800px  orange  wb">800px</div>
  <div class="width-960px  yellow  wb">960px</div>
  <div class="width-1120px olive   wb">1120px</div>
  <div class="width-1280px green   wb">1280px</div>
  <div class="width-1440px teal    wb">1440px</div>
  <div class="width-1600px blue    wb">1600px</div>
</div>`,XR=`<div class="fgc-100 grid gap-2 scroll-x">
  <style>
    .wb {
      padding: 0.25rem;
      font-size: var(--size-smaller);
      background-color: var(--color-50);
      border-right: 5px solid var(--color-40);
    }
  </style>
  <div class="max-width-2rem   red     wb">2rem</div>
  <div class="max-width-4rem   brown   wb">4rem</div>
  <div class="max-width-6rem   orange  wb">6rem</div>
  <div class="max-width-8rem   yellow  wb">8rem</div>
  <div class="max-width-10rem  olive   wb">10rem</div>
  <div class="max-width-12rem  green   wb">12rem</div>
  <div class="max-width-14rem  teal    wb">14rem</div>
  <div class="max-width-16rem  blue    wb">16rem</div>
  <div class="max-width-18rem  indigo  wb">18rem</div>
  <div class="max-width-20rem  violet  wb">20rem</div>
  <div class="max-width-25rem  purple  wb">25rem</div>
  <div class="max-width-30rem  pink    wb">30rem</div>
  <div class="max-width-35rem  maroon  wb">35rem</div>
  <div class="max-width-40rem  red     wb">40rem</div>
  <div class="max-width-45rem  brown   wb">45rem</div>
  <div class="max-width-50rem  orange  wb">50rem</div>
  <div class="max-width-60rem  yellow  wb">60rem</div>
  <div class="max-width-70rem  olive   wb">70rem</div>
  <div class="max-width-80rem  green   wb">80rem</div>
  <div class="max-width-90rem  teal    wb">90rem</div>
  <div class="max-width-100rem blue    wb">100rem</div>
</div>`,JR=`// define your own range of rem widths...
$rem-widths:
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 25, 30,
  35, 40, 45, 50, 60, 70, 80, 90, 100 !default;

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,eP=[2,4,6,8,10,12,14,16,18,20,25,30,35,40,45,50,60,70,80,90,100],tP=()=>h("div",{className:"prose",children:[l("h1",{children:"Widths"}),l("h2",{children:"Wide"}),h("p",{children:["Use the ",l("code",{children:"wide"})," CSS class to set an inline element to expand to the full width of the container."]}),l(D,{html:ZR,caption:"Wide",expand:!0}),l("h2",{children:"Width Classes"}),h(Cn,{children:[h("p",{children:["The ",l("code",{children:"width-Nrem"})," classes can be used to set the width of an element to a number of rem units."]}),h("p",{children:["The values for ",l("code",{children:"N"})," can be",l("code",{children:"2"}),", ",l("code",{children:"4"}),","," ",l("code",{children:"6"}),", ",l("code",{children:"8"}),", ",l("code",{children:"10"}),", ",l("code",{children:"12"}),","," ",l("code",{children:"14"}),", ",l("code",{children:"16"}),", ",l("code",{children:"18"}),", ",l("code",{children:"20"}),","," ",l("code",{children:"25"}),", ",l("code",{children:"30"}),", ",l("code",{children:"35"}),", ",l("code",{children:"40"}),","," ",l("code",{children:"45"}),", ",l("code",{children:"50"}),", ",l("code",{children:"60"}),","," ",l("code",{children:"70"}),", ",l("code",{children:"80"}),", ",l("code",{children:"90"})," or ",l("code",{children:"100"}),"."]})]}),l(D,{html:QR,caption:"Widths",expand:!0}),l("h2",{children:"Pixel Width Classes"}),h("p",{children:["If you prefer to think in pixels, you can use the corresponding"," ",l("code",{children:"width-Npx"})," classes instead."]}),l(D,{html:KR,caption:"Widths in Px",expand:!0}),l("h2",{children:"Max Width Classes"}),h(Cn,{children:[h("p",{children:["The ",l("code",{children:"max-width-Nrem"})," classes can be used to set the maximum width of an element to a number of rem units.  In this case the width of the element will be constrained to the width of the parent element. You can also use the corresponding ",l("code",{children:"max-width-Npx"})," classes if you prefer to think in pixels."]}),h("p",{children:["The ",l("code",{children:"width-*"})," and ",l("code",{children:"max-width-*"})," classes work by using the ",l("code",{children:"--width"})," custom property which is set to the appropriate number of rem units based on the ",l("code",{children:"-Nrem"})," ","or ",l("code",{children:"-Npx"})," suffix."]})]}),l(D,{html:XR,caption:"Widths",expand:!0}),l("h2",{children:"Rem/Pixel Sizes"}),h(Cn,{children:[l("p",{children:"The corresponding pixel widths (assuming 1rem = 16px) for each of the classes are shown below."}),h("p",{children:["You can set the ",l("code",{children:"$rem-widths"})," SASS variable if you want to define a different set of width classes."]})]}),l(bi,{code:JR,caption:"Custom Sizes",language:"scss",expand:!0,children:h("table",{className:"brand celled striped properties small wide mar-b-2",children:[l("thead",{children:h("tr",{children:[l("th",{children:"Rem Class"}),l("th",{children:"Pixel Class"}),l("th",{children:"Rems"}),l("th",{children:"Pixels"})]})}),l("tbody",{children:eP.map(e=>h("tr",{children:[l("td",{children:h("code",{children:["width-",e,"rem"]})}),l("td",{children:h("code",{children:["width-",e*16,"px"]})}),l("td",{children:e}),l("td",{children:e*16})]},e))})]})})]}),nP=Object.freeze(Object.defineProperty({__proto__:null,default:tP},Symbol.toStringTag,{value:"Module"})),Tb=({path:e,onClick:t,width:n=512,height:r=512,style:a,className:o="night-and-day--icon",fill:i="currentColor"})=>l("svg",{"aria-hidden":"true",focusable:"false",className:o,style:a,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n} ${r}`,onClick:t,children:l("path",{d:e,fill:i})}),rP=e=>l(Tb,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),$b=({Icon:e,caption:t,onClick:n,iconClass:r,iconStyle:a,captionStyle:o,className:i="night-and-day--switcher",captionClass:s="night-and-day--caption",style:d={display:"inline-block"}})=>h("div",{className:i,onClick:n,style:d,children:[l(e,{style:a,className:r}),!!t&&l("div",{className:s,style:o,children:t})]}),aP=e=>{const{setDark:t}=xi();return l($b,{Icon:rP,onClick:t,...e})},lP=e=>l(Tb,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),oP=e=>{const{setLight:t}=xi();return l($b,{Icon:lP,onClick:t,...e})},iP=({sunrise:e={},nightfall:t={}})=>{const{isLight:n,setLight:r,setDark:a}=xi();return n?l(oP,{onClick:a,...e}):l(aP,{onClick:r,...t})},Eb=B.createContext(),xi=()=>B.useContext(Eb),is="dark",eu="light",Nb="(prefers-color-scheme: dark)",sP=()=>{var e;return(e=window==null?void 0:window.matchMedia)==null?void 0:e.call(window,Nb).matches},Xa=window==null?void 0:window.localStorage,cP=e=>e.split(" "),s1=(e,t="")=>`${e} ${t}`,dP=({storageKey:e,defaultVariant:t,children:n})=>{const r=e?Xa==null?void 0:Xa.getItem(e):null,[a,o=""]=r?cP(r):[sP(),null],[i,s]=B.useState(a===is),[d,f]=B.useState(o||t),m=N=>{s(N),e&&Xa&&Xa.setItem(e,s1(N?is:eu,d))},b=N=>{f(N),e&&Xa&&Xa.setItem(e,s1(i?is:eu,N))},S=N=>m(N.matches);B.useEffect(()=>{if(window&&window.matchMedia){const N=window.matchMedia(Nb);return N.addEventListener("change",S),()=>N==null?void 0:N.removeEventListener("change",S)}},[]);const I={isDark:i,isLight:!i,setDark:()=>m(!0),setLight:()=>m(!1),setIsDark:s,toggleTheme:()=>m(!i),theme:i?is:eu,variant:d,setVariant:b};return l(Eb.Provider,{value:I,children:n})},uP=e=>B.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},B.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z",fill:"currentColor"})),c1="sidebar",hP="no-sidebar",Ib="0.1.5",Lb="2023-10-26",d1="2018",tu=Lb.match(/^(\d+)/)[1],fP=tu===d1?tu:`${d1} - ${tu}`,pP=()=>{const{variant:e,setVariant:t}=xi();return l("header",{children:h("nav",{children:[h("div",{children:[l(Mc,{name:"bars",className:"toggle-sidebar action",onClick:()=>t(e===c1?hP:c1)}),l(Ie,{to:"/",className:"home mar-l-2",text:"Badger-CSS"}),h("span",{className:"small mar-l-2",children:["v",Ib]})]}),h("div",{children:[l("a",{href:"https://github.com/abw/badger-css",children:l(uP,{className:"night-and-day--icon mar-r-2"})}),l(iP,{})]})]})})},po=({title:e,items:t})=>h("div",{className:"menu",children:[l("h4",{children:e}),t.map(n=>l(Ie,{...n},n.to))]}),gP=[{to:"/demo",text:"Demo"},{to:"/getting-started/installation",text:"Installation"},{to:"/getting-started/good",text:"What's good about it?"},{to:"/getting-started/bad",text:"What's wrong with it?"}],mP=[{to:"/colors/ranges",text:"Color Ranges"},{to:"/colors/brand",text:"Brand Colors"},{to:"/colors/variables",text:"Color Variables"}],vP=[{to:"/utilities/",text:"Introduction"},{to:"/utilities/alignment",text:"Alignment"},{to:"/utilities/borders",text:"Borders"},{to:"/utilities/colors",text:"Colors"},{to:"/utilities/display",text:"Display"},{to:"/utilities/flexbox",text:"Flexbox"},{to:"/utilities/fonts",text:"Fonts"},{to:"/utilities/font-styles",text:"Font Styles"},{to:"/utilities/font-weights",text:"Font Weights"},{to:"/utilities/grid",text:"Grid"},{to:"/utilities/position",text:"Position"},{to:"/utilities/scrolling",text:"Scrolling"},{to:"/utilities/shadows",text:"Shadows"},{to:"/utilities/sizes",text:"Text Sizes"},{to:"/utilities/spacing",text:"Spacing"},{to:"/utilities/split",text:"Splits"},{to:"/utilities/stack",text:"Stacking"},{to:"/utilities/surfaces",text:"Surfaces"},{to:"/utilities/widths",text:"Widths"}],yP=[{to:"/forms/",text:"Introduction"},{to:"/forms/buttons",text:"Buttons"},{to:"/forms/checkboxes",text:"Checkboxes"},{to:"/forms/radio-buttons",text:"Radio Buttons"},{to:"/forms/select",text:"Select Inputs"},{to:"/forms/text",text:"Text Inputs"},{to:"/forms/textarea",text:"Text Area Inputs"},{to:"/forms/field",text:"Form Fields"},{to:"/forms/fieldset",text:"Form Field Sets"},{to:"/forms/styling",text:"Form Styling"}],bP=[{to:"/components/alerts",text:"Alerts"},{to:"/components/details",text:"Details"},{to:"/components/dialog",text:"Dialog"},{to:"/components/icons",text:"SVG Icons"},{to:"/components/tables",text:"Tables"},{to:"/components/tooltips",text:"Tooltips"}],wP=()=>h("div",{children:[l(po,{title:"Getting Started",items:gP}),l(po,{title:"Colors",items:mP}),l(po,{title:"Utilities",items:vP}),l(po,{title:"Forms",items:yP}),l(po,{title:"Components",items:bP})]}),xP=()=>l("footer",{children:h("div",{className:"flex space",children:[h("div",{children:["© Copyright ",fP," Andy Wardley"]}),h("div",{children:["Version ",Ib," ",Lb]})]})});function SP(){const{pathname:e}=Dl();return B.useEffect(()=>CP(document.getElementById("content")),[e]),null}function CP(e){e==null||e.scrollTo({top:0,left:0})}const kP=()=>{const{theme:e,variant:t}=xi(),n=[e,t].join(" ");return h("div",{id:"site",className:n,children:[l(pP,{}),h("div",{id:"app",children:[l(SP,{}),l("aside",{children:l(wP,{})}),l("main",{id:"content",children:l(Wk,{})})]}),l(xP,{})]})},_P=Object.assign({"../pages/colors/brand.jsx":l_,"../pages/colors/greyscale.jsx":w_,"../pages/colors/ranges.jsx":__,"../pages/colors/variables.jsx":$_,"../pages/components/alerts.jsx":H_,"../pages/components/details.jsx":eT,"../pages/components/dialog.jsx":sT,"../pages/components/icons.jsx":gT,"../pages/components/tables.jsx":ET,"../pages/components/tooltips.jsx":MT,"../pages/decoder.jsx":BT,"../pages/demo/index.jsx":JT,"../pages/forms/buttons.jsx":i$,"../pages/forms/checkboxes.jsx":f$,"../pages/forms/field.jsx":T$,"../pages/forms/fieldset.jsx":N$,"../pages/forms/index.jsx":oI,"../pages/forms/radio-buttons.jsx":hI,"../pages/forms/select.jsx":yI,"../pages/forms/styling.jsx":xI,"../pages/forms/text.jsx":TI,"../pages/forms/textarea.jsx":II,"../pages/getting-started/bad.jsx":RI,"../pages/getting-started/good.jsx":MI,"../pages/getting-started/installation.jsx":jI,"../pages/index.jsx":HI,"../pages/utilities/alignment.jsx":ZI,"../pages/utilities/borders.jsx":cL,"../pages/utilities/colors.jsx":vL,"../pages/utilities/display.jsx":wL,"../pages/utilities/flexbox.jsx":IL,"../pages/utilities/font-styles.jsx":PL,"../pages/utilities/font-weights.jsx":zL,"../pages/utilities/fonts.jsx":GL,"../pages/utilities/grid.jsx":aR,"../pages/utilities/index.jsx":oR,"../pages/utilities/position.jsx":cR,"../pages/utilities/scrolling.jsx":fR,"../pages/utilities/shadows.jsx":vR,"../pages/utilities/sizes.jsx":CR,"../pages/utilities/spacing.jsx":IR,"../pages/utilities/split.jsx":OR,"../pages/utilities/stack.jsx":WR,"../pages/utilities/surfaces.jsx":qR,"../pages/utilities/widths.jsx":nP}),TP=Object.entries(_P).map(([e,t])=>({path:e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,""),Component:t.default})),$P=Qk([{path:"/",element:l(kP,{}),children:TP}],{basename:"/badger-css/"});nu.createRoot(document.getElementById("root")).render(l($t.StrictMode,{children:l(dP,{storageKey:"theme",children:l(jk,{router:$P})})}));
