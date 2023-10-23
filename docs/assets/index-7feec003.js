function i6(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const o=Object.getOwnPropertyDescriptor(r,l);o&&Object.defineProperty(e,l,o.get?o:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var Ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var dm={exports:{}},pc={},um={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ci=Symbol.for("react.element"),s6=Symbol.for("react.portal"),c6=Symbol.for("react.fragment"),d6=Symbol.for("react.strict_mode"),u6=Symbol.for("react.profiler"),h6=Symbol.for("react.provider"),f6=Symbol.for("react.context"),p6=Symbol.for("react.forward_ref"),g6=Symbol.for("react.suspense"),m6=Symbol.for("react.memo"),v6=Symbol.for("react.lazy"),u0=Symbol.iterator;function y6(e){return e===null||typeof e!="object"?null:(e=u0&&e[u0]||e["@@iterator"],typeof e=="function"?e:null)}var hm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fm=Object.assign,pm={};function Pa(e,t,n){this.props=e,this.context=t,this.refs=pm,this.updater=n||hm}Pa.prototype.isReactComponent={};Pa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gm(){}gm.prototype=Pa.prototype;function ph(e,t,n){this.props=e,this.context=t,this.refs=pm,this.updater=n||hm}var gh=ph.prototype=new gm;gh.constructor=ph;fm(gh,Pa.prototype);gh.isPureReactComponent=!0;var h0=Array.isArray,mm=Object.prototype.hasOwnProperty,mh={current:null},vm={key:!0,ref:!0,__self:!0,__source:!0};function ym(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)mm.call(t,r)&&!vm.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var d=Array(s),f=0;f<s;f++)d[f]=arguments[f+2];l.children=d}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:ci,type:e,key:o,ref:i,props:l,_owner:mh.current}}function b6(e,t){return{$$typeof:ci,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vh(e){return typeof e=="object"&&e!==null&&e.$$typeof===ci}function w6(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var f0=/\/+/g;function pd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?w6(""+e.key):t.toString(36)}function ss(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ci:case s6:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+pd(i,0):r,h0(l)?(n="",e!=null&&(n=e.replace(f0,"$&/")+"/"),ss(l,t,n,"",function(f){return f})):l!=null&&(vh(l)&&(l=b6(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(f0,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",h0(e))for(var s=0;s<e.length;s++){o=e[s];var d=r+pd(o,s);i+=ss(o,t,n,d,l)}else if(d=y6(e),typeof d=="function")for(e=d.call(e),s=0;!(o=e.next()).done;)o=o.value,d=r+pd(o,s++),i+=ss(o,t,n,d,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Ai(e,t,n){if(e==null)return e;var r=[],l=0;return ss(e,r,"","",function(o){return t.call(n,o,l++)}),r}function x6(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ht={current:null},cs={transition:null},S6={ReactCurrentDispatcher:Ht,ReactCurrentBatchConfig:cs,ReactCurrentOwner:mh};ke.Children={map:Ai,forEach:function(e,t,n){Ai(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ai(e,function(){t++}),t},toArray:function(e){return Ai(e,function(t){return t})||[]},only:function(e){if(!vh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ke.Component=Pa;ke.Fragment=c6;ke.Profiler=u6;ke.PureComponent=ph;ke.StrictMode=d6;ke.Suspense=g6;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S6;ke.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fm({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=mh.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(d in t)mm.call(t,d)&&!vm.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&s!==void 0?s[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){s=Array(d);for(var f=0;f<d;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:ci,type:e.type,key:l,ref:o,props:r,_owner:i}};ke.createContext=function(e){return e={$$typeof:f6,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:h6,_context:e},e.Consumer=e};ke.createElement=ym;ke.createFactory=function(e){var t=ym.bind(null,e);return t.type=e,t};ke.createRef=function(){return{current:null}};ke.forwardRef=function(e){return{$$typeof:p6,render:e}};ke.isValidElement=vh;ke.lazy=function(e){return{$$typeof:v6,_payload:{_status:-1,_result:e},_init:x6}};ke.memo=function(e,t){return{$$typeof:m6,type:e,compare:t===void 0?null:t}};ke.startTransition=function(e){var t=cs.transition;cs.transition={};try{e()}finally{cs.transition=t}};ke.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ke.useCallback=function(e,t){return Ht.current.useCallback(e,t)};ke.useContext=function(e){return Ht.current.useContext(e)};ke.useDebugValue=function(){};ke.useDeferredValue=function(e){return Ht.current.useDeferredValue(e)};ke.useEffect=function(e,t){return Ht.current.useEffect(e,t)};ke.useId=function(){return Ht.current.useId()};ke.useImperativeHandle=function(e,t,n){return Ht.current.useImperativeHandle(e,t,n)};ke.useInsertionEffect=function(e,t){return Ht.current.useInsertionEffect(e,t)};ke.useLayoutEffect=function(e,t){return Ht.current.useLayoutEffect(e,t)};ke.useMemo=function(e,t){return Ht.current.useMemo(e,t)};ke.useReducer=function(e,t,n){return Ht.current.useReducer(e,t,n)};ke.useRef=function(e){return Ht.current.useRef(e)};ke.useState=function(e){return Ht.current.useState(e)};ke.useSyncExternalStore=function(e,t,n){return Ht.current.useSyncExternalStore(e,t,n)};ke.useTransition=function(){return Ht.current.useTransition()};ke.version="18.2.0";um.exports=ke;var U=um.exports;const Tt=Gr(U),p0=i6({__proto__:null,default:Tt},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C6=U,k6=Symbol.for("react.element"),_6=Symbol.for("react.fragment"),$6=Object.prototype.hasOwnProperty,T6=C6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E6={key:!0,ref:!0,__self:!0,__source:!0};function bm(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)$6.call(t,r)&&!E6.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:k6,type:e,key:o,ref:i,props:l,_owner:T6.current}}pc.Fragment=_6;pc.jsx=bm;pc.jsxs=bm;dm.exports=pc;var yh=dm.exports;const In=yh.Fragment,a=yh.jsx,h=yh.jsxs;var tu={},wm={exports:{}},gn={},xm={exports:{}},Sm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,Z){var J=j.length;j.push(Z);e:for(;0<J;){var ae=J-1>>>1,fe=j[ae];if(0<l(fe,Z))j[ae]=Z,j[J]=fe,J=ae;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var Z=j[0],J=j.pop();if(J!==Z){j[0]=J;e:for(var ae=0,fe=j.length,Dt=fe>>>1;ae<Dt;){var pe=2*(ae+1)-1,et=j[pe],Ye=pe+1,ht=j[Ye];if(0>l(et,J))Ye<fe&&0>l(ht,et)?(j[ae]=ht,j[Ye]=J,ae=Ye):(j[ae]=et,j[pe]=J,ae=pe);else if(Ye<fe&&0>l(ht,J))j[ae]=ht,j[Ye]=J,ae=Ye;else break e}}return Z}function l(j,Z){var J=j.sortIndex-Z.sortIndex;return J!==0?J:j.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var d=[],f=[],m=1,b=null,S=3,L=!1,N=!1,C=!1,I=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(j){for(var Z=n(f);Z!==null;){if(Z.callback===null)r(f);else if(Z.startTime<=j)r(f),Z.sortIndex=Z.expirationTime,t(d,Z);else break;Z=n(f)}}function v(j){if(C=!1,y(j),!N)if(n(d)!==null)N=!0,De(T);else{var Z=n(f);Z!==null&&Ge(v,Z.startTime-j)}}function T(j,Z){N=!1,C&&(C=!1,w(O),O=-1),L=!0;var J=S;try{for(y(Z),b=n(d);b!==null&&(!(b.expirationTime>Z)||j&&!he());){var ae=b.callback;if(typeof ae=="function"){b.callback=null,S=b.priorityLevel;var fe=ae(b.expirationTime<=Z);Z=e.unstable_now(),typeof fe=="function"?b.callback=fe:b===n(d)&&r(d),y(Z)}else r(d);b=n(d)}if(b!==null)var Dt=!0;else{var pe=n(f);pe!==null&&Ge(v,pe.startTime-Z),Dt=!1}return Dt}finally{b=null,S=J,L=!1}}var _=!1,F=null,O=-1,B=5,q=-1;function he(){return!(e.unstable_now()-q<B)}function se(){if(F!==null){var j=e.unstable_now();q=j;var Z=!0;try{Z=F(!0,j)}finally{Z?Be():(_=!1,F=null)}}else _=!1}var Be;if(typeof g=="function")Be=function(){g(se)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,Ve=lt.port2;lt.port1.onmessage=se,Be=function(){Ve.postMessage(null)}}else Be=function(){I(se,0)};function De(j){F=j,_||(_=!0,Be())}function Ge(j,Z){O=I(function(){j(e.unstable_now())},Z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){N||L||(N=!0,De(T))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return S},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(j){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var J=S;S=Z;try{return j()}finally{S=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,Z){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var J=S;S=j;try{return Z()}finally{S=J}},e.unstable_scheduleCallback=function(j,Z,J){var ae=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ae+J:ae):J=ae,j){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=J+fe,j={id:m++,callback:Z,priorityLevel:j,startTime:J,expirationTime:fe,sortIndex:-1},J>ae?(j.sortIndex=J,t(f,j),n(d)===null&&j===n(f)&&(C?(w(O),O=-1):C=!0,Ge(v,J-ae))):(j.sortIndex=fe,t(d,j),N||L||(N=!0,De(T))),j},e.unstable_shouldYield=he,e.unstable_wrapCallback=function(j){var Z=S;return function(){var J=S;S=Z;try{return j.apply(this,arguments)}finally{S=J}}}})(Sm);xm.exports=Sm;var N6=xm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm=U,pn=N6;function Y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var km=new Set,Do={};function Il(e,t){ka(e,t),ka(e+"Capture",t)}function ka(e,t){for(Do[e]=t,e=0;e<t.length;e++)km.add(t[e])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=Object.prototype.hasOwnProperty,L6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g0={},m0={};function I6(e){return nu.call(m0,e)?!0:nu.call(g0,e)?!1:L6.test(e)?m0[e]=!0:(g0[e]=!0,!1)}function R6(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P6(e,t,n,r){if(t===null||typeof t>"u"||R6(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Wt(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var Lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Lt[e]=new Wt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Lt[t]=new Wt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Lt[e]=new Wt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Lt[e]=new Wt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Lt[e]=new Wt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Lt[e]=new Wt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Lt[e]=new Wt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Lt[e]=new Wt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Lt[e]=new Wt(e,5,!1,e.toLowerCase(),null,!1,!1)});var bh=/[\-:]([a-z])/g;function wh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bh,wh);Lt[t]=new Wt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bh,wh);Lt[t]=new Wt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bh,wh);Lt[t]=new Wt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Lt[e]=new Wt(e,1,!1,e.toLowerCase(),null,!1,!1)});Lt.xlinkHref=new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Lt[e]=new Wt(e,1,!1,e.toLowerCase(),null,!0,!0)});function xh(e,t,n,r){var l=Lt.hasOwnProperty(t)?Lt[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P6(t,n,l,r)&&(n=null),r||l===null?I6(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vr=Cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Di=Symbol.for("react.element"),ta=Symbol.for("react.portal"),na=Symbol.for("react.fragment"),Sh=Symbol.for("react.strict_mode"),ru=Symbol.for("react.profiler"),_m=Symbol.for("react.provider"),$m=Symbol.for("react.context"),Ch=Symbol.for("react.forward_ref"),lu=Symbol.for("react.suspense"),au=Symbol.for("react.suspense_list"),kh=Symbol.for("react.memo"),Tr=Symbol.for("react.lazy"),Tm=Symbol.for("react.offscreen"),v0=Symbol.iterator;function no(e){return e===null||typeof e!="object"?null:(e=v0&&e[v0]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Object.assign,gd;function go(e){if(gd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);gd=t&&t[1]||""}return`
`+gd+e}var md=!1;function vd(e,t){if(!e||md)return"";md=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var d=`
`+l[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=s);break}}}finally{md=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?go(e):""}function F6(e){switch(e.tag){case 5:return go(e.type);case 16:return go("Lazy");case 13:return go("Suspense");case 19:return go("SuspenseList");case 0:case 2:case 15:return e=vd(e.type,!1),e;case 11:return e=vd(e.type.render,!1),e;case 1:return e=vd(e.type,!0),e;default:return""}}function ou(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case na:return"Fragment";case ta:return"Portal";case ru:return"Profiler";case Sh:return"StrictMode";case lu:return"Suspense";case au:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $m:return(e.displayName||"Context")+".Consumer";case _m:return(e._context.displayName||"Context")+".Provider";case Ch:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case kh:return t=e.displayName||null,t!==null?t:ou(e.type)||"Memo";case Tr:t=e._payload,e=e._init;try{return ou(e(t))}catch{}}return null}function M6(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ou(t);case 8:return t===Sh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Hr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Em(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function O6(e){var t=Em(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zi(e){e._valueTracker||(e._valueTracker=O6(e))}function Nm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Em(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function iu(e,t){var n=t.checked;return rt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function y0(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Hr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lm(e,t){t=t.checked,t!=null&&xh(e,"checked",t,!1)}function su(e,t){Lm(e,t);var n=Hr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?cu(e,t.type,n):t.hasOwnProperty("defaultValue")&&cu(e,t.type,Hr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function b0(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function cu(e,t,n){(t!=="number"||Rs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mo=Array.isArray;function ma(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Hr(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function du(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Y(91));return rt({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function w0(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Y(92));if(mo(n)){if(1<n.length)throw Error(Y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Hr(n)}}function Im(e,t){var n=Hr(t.value),r=Hr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function x0(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Rm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Rm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bi,Pm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bi=Bi||document.createElement("div"),Bi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},A6=["Webkit","ms","Moz","O"];Object.keys(_o).forEach(function(e){A6.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_o[t]=_o[e]})});function Fm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_o.hasOwnProperty(e)&&_o[e]?(""+t).trim():t+"px"}function Mm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Fm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var D6=rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hu(e,t){if(t){if(D6[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Y(62))}}function fu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pu=null;function _h(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gu=null,va=null,ya=null;function S0(e){if(e=hi(e)){if(typeof gu!="function")throw Error(Y(280));var t=e.stateNode;t&&(t=bc(t),gu(e.stateNode,e.type,t))}}function Om(e){va?ya?ya.push(e):ya=[e]:va=e}function Am(){if(va){var e=va,t=ya;if(ya=va=null,S0(e),t)for(e=0;e<t.length;e++)S0(t[e])}}function Dm(e,t){return e(t)}function zm(){}var yd=!1;function Bm(e,t,n){if(yd)return e(t,n);yd=!0;try{return Dm(e,t,n)}finally{yd=!1,(va!==null||ya!==null)&&(zm(),Am())}}function Bo(e,t){var n=e.stateNode;if(n===null)return null;var r=bc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Y(231,t,typeof n));return n}var mu=!1;if(ur)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){mu=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{mu=!1}function z6(e,t,n,r,l,o,i,s,d){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(m){this.onError(m)}}var $o=!1,Ps=null,Fs=!1,vu=null,B6={onError:function(e){$o=!0,Ps=e}};function j6(e,t,n,r,l,o,i,s,d){$o=!1,Ps=null,z6.apply(B6,arguments)}function U6(e,t,n,r,l,o,i,s,d){if(j6.apply(this,arguments),$o){if($o){var f=Ps;$o=!1,Ps=null}else throw Error(Y(198));Fs||(Fs=!0,vu=f)}}function Rl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C0(e){if(Rl(e)!==e)throw Error(Y(188))}function H6(e){var t=e.alternate;if(!t){if(t=Rl(e),t===null)throw Error(Y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return C0(l),e;if(o===r)return C0(l),t;o=o.sibling}throw Error(Y(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(Y(189))}}if(n.alternate!==r)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?e:t}function Um(e){return e=H6(e),e!==null?Hm(e):null}function Hm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Hm(e);if(t!==null)return t;e=e.sibling}return null}var Wm=pn.unstable_scheduleCallback,k0=pn.unstable_cancelCallback,W6=pn.unstable_shouldYield,V6=pn.unstable_requestPaint,ot=pn.unstable_now,G6=pn.unstable_getCurrentPriorityLevel,$h=pn.unstable_ImmediatePriority,Vm=pn.unstable_UserBlockingPriority,Ms=pn.unstable_NormalPriority,Y6=pn.unstable_LowPriority,Gm=pn.unstable_IdlePriority,gc=null,qn=null;function q6(e){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(gc,e,void 0,(e.current.flags&128)===128)}catch{}}var An=Math.clz32?Math.clz32:K6,Z6=Math.log,Q6=Math.LN2;function K6(e){return e>>>=0,e===0?32:31-(Z6(e)/Q6|0)|0}var ji=64,Ui=4194304;function vo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Os(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=vo(s):(o&=i,o!==0&&(r=vo(o)))}else i=n&~l,i!==0?r=vo(i):o!==0&&(r=vo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-An(t),l=1<<n,r|=e[n],t&=~l;return r}function X6(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function J6(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-An(o),s=1<<i,d=l[i];d===-1?(!(s&n)||s&r)&&(l[i]=X6(s,t)):d<=t&&(e.expiredLanes|=s),o&=~s}}function yu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ym(){var e=ji;return ji<<=1,!(ji&4194240)&&(ji=64),e}function bd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function di(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-An(t),e[t]=n}function ew(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-An(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function Th(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-An(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var Ae=0;function qm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zm,Eh,Qm,Km,Xm,bu=!1,Hi=[],Mr=null,Or=null,Ar=null,jo=new Map,Uo=new Map,Nr=[],tw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _0(e,t){switch(e){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":jo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(t.pointerId)}}function lo(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=hi(t),t!==null&&Eh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function nw(e,t,n,r,l){switch(t){case"focusin":return Mr=lo(Mr,e,t,n,r,l),!0;case"dragenter":return Or=lo(Or,e,t,n,r,l),!0;case"mouseover":return Ar=lo(Ar,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return jo.set(o,lo(jo.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Uo.set(o,lo(Uo.get(o)||null,e,t,n,r,l)),!0}return!1}function Jm(e){var t=ml(e.target);if(t!==null){var n=Rl(t);if(n!==null){if(t=n.tag,t===13){if(t=jm(n),t!==null){e.blockedOn=t,Xm(e.priority,function(){Qm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ds(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pu=r,n.target.dispatchEvent(r),pu=null}else return t=hi(n),t!==null&&Eh(t),e.blockedOn=n,!1;t.shift()}return!0}function $0(e,t,n){ds(e)&&n.delete(t)}function rw(){bu=!1,Mr!==null&&ds(Mr)&&(Mr=null),Or!==null&&ds(Or)&&(Or=null),Ar!==null&&ds(Ar)&&(Ar=null),jo.forEach($0),Uo.forEach($0)}function ao(e,t){e.blockedOn===t&&(e.blockedOn=null,bu||(bu=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,rw)))}function Ho(e){function t(l){return ao(l,e)}if(0<Hi.length){ao(Hi[0],e);for(var n=1;n<Hi.length;n++){var r=Hi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Mr!==null&&ao(Mr,e),Or!==null&&ao(Or,e),Ar!==null&&ao(Ar,e),jo.forEach(t),Uo.forEach(t),n=0;n<Nr.length;n++)r=Nr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)Jm(n),n.blockedOn===null&&Nr.shift()}var ba=vr.ReactCurrentBatchConfig,As=!0;function lw(e,t,n,r){var l=Ae,o=ba.transition;ba.transition=null;try{Ae=1,Nh(e,t,n,r)}finally{Ae=l,ba.transition=o}}function aw(e,t,n,r){var l=Ae,o=ba.transition;ba.transition=null;try{Ae=4,Nh(e,t,n,r)}finally{Ae=l,ba.transition=o}}function Nh(e,t,n,r){if(As){var l=wu(e,t,n,r);if(l===null)Nd(e,t,r,Ds,n),_0(e,r);else if(nw(l,e,t,n,r))r.stopPropagation();else if(_0(e,r),t&4&&-1<tw.indexOf(e)){for(;l!==null;){var o=hi(l);if(o!==null&&Zm(o),o=wu(e,t,n,r),o===null&&Nd(e,t,r,Ds,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Nd(e,t,r,null,n)}}var Ds=null;function wu(e,t,n,r){if(Ds=null,e=_h(r),e=ml(e),e!==null)if(t=Rl(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ds=e,null}function ev(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(G6()){case $h:return 1;case Vm:return 4;case Ms:case Y6:return 16;case Gm:return 536870912;default:return 16}default:return 16}}var Ir=null,Lh=null,us=null;function tv(){if(us)return us;var e,t=Lh,n=t.length,r,l="value"in Ir?Ir.value:Ir.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return us=l.slice(e,1<r?1-r:void 0)}function hs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wi(){return!0}function T0(){return!1}function mn(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Wi:T0,this.isPropagationStopped=T0,this}return rt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wi)},persist:function(){},isPersistent:Wi}),t}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ih=mn(Fa),ui=rt({},Fa,{view:0,detail:0}),ow=mn(ui),wd,xd,oo,mc=rt({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(wd=e.screenX-oo.screenX,xd=e.screenY-oo.screenY):xd=wd=0,oo=e),wd)},movementY:function(e){return"movementY"in e?e.movementY:xd}}),E0=mn(mc),iw=rt({},mc,{dataTransfer:0}),sw=mn(iw),cw=rt({},ui,{relatedTarget:0}),Sd=mn(cw),dw=rt({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),uw=mn(dw),hw=rt({},Fa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fw=mn(hw),pw=rt({},Fa,{data:0}),N0=mn(pw),gw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vw[e])?!!t[e]:!1}function Rh(){return yw}var bw=rt({},ui,{key:function(e){if(e.key){var t=gw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rh,charCode:function(e){return e.type==="keypress"?hs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ww=mn(bw),xw=rt({},mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),L0=mn(xw),Sw=rt({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rh}),Cw=mn(Sw),kw=rt({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),_w=mn(kw),$w=rt({},mc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tw=mn($w),Ew=[9,13,27,32],Ph=ur&&"CompositionEvent"in window,To=null;ur&&"documentMode"in document&&(To=document.documentMode);var Nw=ur&&"TextEvent"in window&&!To,nv=ur&&(!Ph||To&&8<To&&11>=To),I0=String.fromCharCode(32),R0=!1;function rv(e,t){switch(e){case"keyup":return Ew.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ra=!1;function Lw(e,t){switch(e){case"compositionend":return lv(t);case"keypress":return t.which!==32?null:(R0=!0,I0);case"textInput":return e=t.data,e===I0&&R0?null:e;default:return null}}function Iw(e,t){if(ra)return e==="compositionend"||!Ph&&rv(e,t)?(e=tv(),us=Lh=Ir=null,ra=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nv&&t.locale!=="ko"?null:t.data;default:return null}}var Rw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function P0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rw[e.type]:t==="textarea"}function av(e,t,n,r){Om(r),t=zs(t,"onChange"),0<t.length&&(n=new Ih("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Eo=null,Wo=null;function Pw(e){mv(e,0)}function vc(e){var t=oa(e);if(Nm(t))return e}function Fw(e,t){if(e==="change")return t}var ov=!1;if(ur){var Cd;if(ur){var kd="oninput"in document;if(!kd){var F0=document.createElement("div");F0.setAttribute("oninput","return;"),kd=typeof F0.oninput=="function"}Cd=kd}else Cd=!1;ov=Cd&&(!document.documentMode||9<document.documentMode)}function M0(){Eo&&(Eo.detachEvent("onpropertychange",iv),Wo=Eo=null)}function iv(e){if(e.propertyName==="value"&&vc(Wo)){var t=[];av(t,Wo,e,_h(e)),Bm(Pw,t)}}function Mw(e,t,n){e==="focusin"?(M0(),Eo=t,Wo=n,Eo.attachEvent("onpropertychange",iv)):e==="focusout"&&M0()}function Ow(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vc(Wo)}function Aw(e,t){if(e==="click")return vc(t)}function Dw(e,t){if(e==="input"||e==="change")return vc(t)}function zw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zn=typeof Object.is=="function"?Object.is:zw;function Vo(e,t){if(zn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!nu.call(t,l)||!zn(e[l],t[l]))return!1}return!0}function O0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function A0(e,t){var n=O0(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=O0(n)}}function sv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cv(){for(var e=window,t=Rs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rs(e.document)}return t}function Fh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bw(e){var t=cv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sv(n.ownerDocument.documentElement,n)){if(r!==null&&Fh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=A0(n,o);var i=A0(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jw=ur&&"documentMode"in document&&11>=document.documentMode,la=null,xu=null,No=null,Su=!1;function D0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Su||la==null||la!==Rs(r)||(r=la,"selectionStart"in r&&Fh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),No&&Vo(No,r)||(No=r,r=zs(xu,"onSelect"),0<r.length&&(t=new Ih("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=la)))}function Vi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var aa={animationend:Vi("Animation","AnimationEnd"),animationiteration:Vi("Animation","AnimationIteration"),animationstart:Vi("Animation","AnimationStart"),transitionend:Vi("Transition","TransitionEnd")},_d={},dv={};ur&&(dv=document.createElement("div").style,"AnimationEvent"in window||(delete aa.animationend.animation,delete aa.animationiteration.animation,delete aa.animationstart.animation),"TransitionEvent"in window||delete aa.transitionend.transition);function yc(e){if(_d[e])return _d[e];if(!aa[e])return e;var t=aa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in dv)return _d[e]=t[n];return e}var uv=yc("animationend"),hv=yc("animationiteration"),fv=yc("animationstart"),pv=yc("transitionend"),gv=new Map,z0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(e,t){gv.set(e,t),Il(t,[e])}for(var $d=0;$d<z0.length;$d++){var Td=z0[$d],Uw=Td.toLowerCase(),Hw=Td[0].toUpperCase()+Td.slice(1);Yr(Uw,"on"+Hw)}Yr(uv,"onAnimationEnd");Yr(hv,"onAnimationIteration");Yr(fv,"onAnimationStart");Yr("dblclick","onDoubleClick");Yr("focusin","onFocus");Yr("focusout","onBlur");Yr(pv,"onTransitionEnd");ka("onMouseEnter",["mouseout","mouseover"]);ka("onMouseLeave",["mouseout","mouseover"]);ka("onPointerEnter",["pointerout","pointerover"]);ka("onPointerLeave",["pointerout","pointerover"]);Il("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Il("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Il("onBeforeInput",["compositionend","keypress","textInput","paste"]);Il("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Il("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Il("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ww=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function B0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,U6(r,t,void 0,e),e.currentTarget=null}function mv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],d=s.instance,f=s.currentTarget;if(s=s.listener,d!==o&&l.isPropagationStopped())break e;B0(l,s,f),o=d}else for(i=0;i<r.length;i++){if(s=r[i],d=s.instance,f=s.currentTarget,s=s.listener,d!==o&&l.isPropagationStopped())break e;B0(l,s,f),o=d}}}if(Fs)throw e=vu,Fs=!1,vu=null,e}function Ze(e,t){var n=t[Tu];n===void 0&&(n=t[Tu]=new Set);var r=e+"__bubble";n.has(r)||(vv(t,e,2,!1),n.add(r))}function Ed(e,t,n){var r=0;t&&(r|=4),vv(n,e,r,t)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function Go(e){if(!e[Gi]){e[Gi]=!0,km.forEach(function(n){n!=="selectionchange"&&(Ww.has(n)||Ed(n,!1,e),Ed(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gi]||(t[Gi]=!0,Ed("selectionchange",!1,t))}}function vv(e,t,n,r){switch(ev(t)){case 1:var l=lw;break;case 4:l=aw;break;default:l=Nh}n=l.bind(null,t,n,e),l=void 0,!mu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Nd(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var d=i.tag;if((d===3||d===4)&&(d=i.stateNode.containerInfo,d===l||d.nodeType===8&&d.parentNode===l))return;i=i.return}for(;s!==null;){if(i=ml(s),i===null)return;if(d=i.tag,d===5||d===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Bm(function(){var f=o,m=_h(n),b=[];e:{var S=gv.get(e);if(S!==void 0){var L=Ih,N=e;switch(e){case"keypress":if(hs(n)===0)break e;case"keydown":case"keyup":L=ww;break;case"focusin":N="focus",L=Sd;break;case"focusout":N="blur",L=Sd;break;case"beforeblur":case"afterblur":L=Sd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=E0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=sw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Cw;break;case uv:case hv:case fv:L=uw;break;case pv:L=_w;break;case"scroll":L=ow;break;case"wheel":L=Tw;break;case"copy":case"cut":case"paste":L=fw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=L0}var C=(t&4)!==0,I=!C&&e==="scroll",w=C?S!==null?S+"Capture":null:S;C=[];for(var g=f,y;g!==null;){y=g;var v=y.stateNode;if(y.tag===5&&v!==null&&(y=v,w!==null&&(v=Bo(g,w),v!=null&&C.push(Yo(g,v,y)))),I)break;g=g.return}0<C.length&&(S=new L(S,N,null,n,m),b.push({event:S,listeners:C}))}}if(!(t&7)){e:{if(S=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",S&&n!==pu&&(N=n.relatedTarget||n.fromElement)&&(ml(N)||N[hr]))break e;if((L||S)&&(S=m.window===m?m:(S=m.ownerDocument)?S.defaultView||S.parentWindow:window,L?(N=n.relatedTarget||n.toElement,L=f,N=N?ml(N):null,N!==null&&(I=Rl(N),N!==I||N.tag!==5&&N.tag!==6)&&(N=null)):(L=null,N=f),L!==N)){if(C=E0,v="onMouseLeave",w="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(C=L0,v="onPointerLeave",w="onPointerEnter",g="pointer"),I=L==null?S:oa(L),y=N==null?S:oa(N),S=new C(v,g+"leave",L,n,m),S.target=I,S.relatedTarget=y,v=null,ml(m)===f&&(C=new C(w,g+"enter",N,n,m),C.target=y,C.relatedTarget=I,v=C),I=v,L&&N)t:{for(C=L,w=N,g=0,y=C;y;y=Ql(y))g++;for(y=0,v=w;v;v=Ql(v))y++;for(;0<g-y;)C=Ql(C),g--;for(;0<y-g;)w=Ql(w),y--;for(;g--;){if(C===w||w!==null&&C===w.alternate)break t;C=Ql(C),w=Ql(w)}C=null}else C=null;L!==null&&j0(b,S,L,C,!1),N!==null&&I!==null&&j0(b,I,N,C,!0)}}e:{if(S=f?oa(f):window,L=S.nodeName&&S.nodeName.toLowerCase(),L==="select"||L==="input"&&S.type==="file")var T=Fw;else if(P0(S))if(ov)T=Dw;else{T=Ow;var _=Mw}else(L=S.nodeName)&&L.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(T=Aw);if(T&&(T=T(e,f))){av(b,T,n,m);break e}_&&_(e,S,f),e==="focusout"&&(_=S._wrapperState)&&_.controlled&&S.type==="number"&&cu(S,"number",S.value)}switch(_=f?oa(f):window,e){case"focusin":(P0(_)||_.contentEditable==="true")&&(la=_,xu=f,No=null);break;case"focusout":No=xu=la=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,D0(b,n,m);break;case"selectionchange":if(jw)break;case"keydown":case"keyup":D0(b,n,m)}var F;if(Ph)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ra?rv(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(nv&&n.locale!=="ko"&&(ra||O!=="onCompositionStart"?O==="onCompositionEnd"&&ra&&(F=tv()):(Ir=m,Lh="value"in Ir?Ir.value:Ir.textContent,ra=!0)),_=zs(f,O),0<_.length&&(O=new N0(O,e,null,n,m),b.push({event:O,listeners:_}),F?O.data=F:(F=lv(n),F!==null&&(O.data=F)))),(F=Nw?Lw(e,n):Iw(e,n))&&(f=zs(f,"onBeforeInput"),0<f.length&&(m=new N0("onBeforeInput","beforeinput",null,n,m),b.push({event:m,listeners:f}),m.data=F))}mv(b,t)})}function Yo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zs(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Bo(e,n),o!=null&&r.unshift(Yo(e,o,l)),o=Bo(e,t),o!=null&&r.push(Yo(e,o,l))),e=e.return}return r}function Ql(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function j0(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,d=s.alternate,f=s.stateNode;if(d!==null&&d===r)break;s.tag===5&&f!==null&&(s=f,l?(d=Bo(n,o),d!=null&&i.unshift(Yo(n,d,s))):l||(d=Bo(n,o),d!=null&&i.push(Yo(n,d,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Vw=/\r\n?/g,Gw=/\u0000|\uFFFD/g;function U0(e){return(typeof e=="string"?e:""+e).replace(Vw,`
`).replace(Gw,"")}function Yi(e,t,n){if(t=U0(t),U0(e)!==t&&n)throw Error(Y(425))}function Bs(){}var Cu=null,ku=null;function _u(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $u=typeof setTimeout=="function"?setTimeout:void 0,Yw=typeof clearTimeout=="function"?clearTimeout:void 0,H0=typeof Promise=="function"?Promise:void 0,qw=typeof queueMicrotask=="function"?queueMicrotask:typeof H0<"u"?function(e){return H0.resolve(null).then(e).catch(Zw)}:$u;function Zw(e){setTimeout(function(){throw e})}function Ld(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Ho(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Ho(t)}function Dr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function W0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ma=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Ma,qo="__reactProps$"+Ma,hr="__reactContainer$"+Ma,Tu="__reactEvents$"+Ma,Qw="__reactListeners$"+Ma,Kw="__reactHandles$"+Ma;function ml(e){var t=e[Yn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hr]||n[Yn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=W0(e);e!==null;){if(n=e[Yn])return n;e=W0(e)}return t}e=n,n=e.parentNode}return null}function hi(e){return e=e[Yn]||e[hr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function oa(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Y(33))}function bc(e){return e[qo]||null}var Eu=[],ia=-1;function qr(e){return{current:e}}function Ke(e){0>ia||(e.current=Eu[ia],Eu[ia]=null,ia--)}function We(e,t){ia++,Eu[ia]=e.current,e.current=t}var Wr={},At=qr(Wr),en=qr(!1),_l=Wr;function _a(e,t){var n=e.type.contextTypes;if(!n)return Wr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function tn(e){return e=e.childContextTypes,e!=null}function js(){Ke(en),Ke(At)}function V0(e,t,n){if(At.current!==Wr)throw Error(Y(168));We(At,t),We(en,n)}function yv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(Y(108,M6(e)||"Unknown",l));return rt({},n,r)}function Us(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wr,_l=At.current,We(At,e),We(en,en.current),!0}function G0(e,t,n){var r=e.stateNode;if(!r)throw Error(Y(169));n?(e=yv(e,t,_l),r.__reactInternalMemoizedMergedChildContext=e,Ke(en),Ke(At),We(At,e)):Ke(en),We(en,n)}var or=null,wc=!1,Id=!1;function bv(e){or===null?or=[e]:or.push(e)}function Xw(e){wc=!0,bv(e)}function Zr(){if(!Id&&or!==null){Id=!0;var e=0,t=Ae;try{var n=or;for(Ae=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}or=null,wc=!1}catch(l){throw or!==null&&(or=or.slice(e+1)),Wm($h,Zr),l}finally{Ae=t,Id=!1}}return null}var sa=[],ca=0,Hs=null,Ws=0,bn=[],wn=0,$l=null,ir=1,sr="";function ul(e,t){sa[ca++]=Ws,sa[ca++]=Hs,Hs=e,Ws=t}function wv(e,t,n){bn[wn++]=ir,bn[wn++]=sr,bn[wn++]=$l,$l=e;var r=ir;e=sr;var l=32-An(r)-1;r&=~(1<<l),n+=1;var o=32-An(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,ir=1<<32-An(t)+l|n<<l|r,sr=o+e}else ir=1<<o|n<<l|r,sr=e}function Mh(e){e.return!==null&&(ul(e,1),wv(e,1,0))}function Oh(e){for(;e===Hs;)Hs=sa[--ca],sa[ca]=null,Ws=sa[--ca],sa[ca]=null;for(;e===$l;)$l=bn[--wn],bn[wn]=null,sr=bn[--wn],bn[wn]=null,ir=bn[--wn],bn[wn]=null}var fn=null,hn=null,Xe=!1,Mn=null;function xv(e,t){var n=xn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Y0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,fn=e,hn=Dr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,fn=e,hn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$l!==null?{id:ir,overflow:sr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,fn=e,hn=null,!0):!1;default:return!1}}function Nu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Lu(e){if(Xe){var t=hn;if(t){var n=t;if(!Y0(e,t)){if(Nu(e))throw Error(Y(418));t=Dr(n.nextSibling);var r=fn;t&&Y0(e,t)?xv(r,n):(e.flags=e.flags&-4097|2,Xe=!1,fn=e)}}else{if(Nu(e))throw Error(Y(418));e.flags=e.flags&-4097|2,Xe=!1,fn=e}}}function q0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;fn=e}function qi(e){if(e!==fn)return!1;if(!Xe)return q0(e),Xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_u(e.type,e.memoizedProps)),t&&(t=hn)){if(Nu(e))throw Sv(),Error(Y(418));for(;t;)xv(e,t),t=Dr(t.nextSibling)}if(q0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){hn=Dr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}hn=null}}else hn=fn?Dr(e.stateNode.nextSibling):null;return!0}function Sv(){for(var e=hn;e;)e=Dr(e.nextSibling)}function $a(){hn=fn=null,Xe=!1}function Ah(e){Mn===null?Mn=[e]:Mn.push(e)}var Jw=vr.ReactCurrentBatchConfig;function Rn(e,t){if(e&&e.defaultProps){t=rt({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Vs=qr(null),Gs=null,da=null,Dh=null;function zh(){Dh=da=Gs=null}function Bh(e){var t=Vs.current;Ke(Vs),e._currentValue=t}function Iu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function wa(e,t){Gs=e,Dh=da=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Jt=!0),e.firstContext=null)}function Cn(e){var t=e._currentValue;if(Dh!==e)if(e={context:e,memoizedValue:t,next:null},da===null){if(Gs===null)throw Error(Y(308));da=e,Gs.dependencies={lanes:0,firstContext:e}}else da=da.next=e;return t}var vl=null;function jh(e){vl===null?vl=[e]:vl.push(e)}function Cv(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,jh(t)):(n.next=l.next,l.next=n),t.interleaved=n,fr(e,r)}function fr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Er=!1;function Uh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function cr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ne&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,fr(e,n)}return l=r.interleaved,l===null?(t.next=t,jh(r)):(t.next=l.next,l.next=t),r.interleaved=t,fr(e,n)}function fs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Th(e,n)}}function Z0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ys(e,t,n,r){var l=e.updateQueue;Er=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var d=s,f=d.next;d.next=null,i===null?o=f:i.next=f,i=d;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==i&&(s===null?m.firstBaseUpdate=f:s.next=f,m.lastBaseUpdate=d))}if(o!==null){var b=l.baseState;i=0,m=f=d=null,s=o;do{var S=s.lane,L=s.eventTime;if((r&S)===S){m!==null&&(m=m.next={eventTime:L,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var N=e,C=s;switch(S=t,L=n,C.tag){case 1:if(N=C.payload,typeof N=="function"){b=N.call(L,b,S);break e}b=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=C.payload,S=typeof N=="function"?N.call(L,b,S):N,S==null)break e;b=rt({},b,S);break e;case 2:Er=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,S=l.effects,S===null?l.effects=[s]:S.push(s))}else L={eventTime:L,lane:S,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(f=m=L,d=b):m=m.next=L,i|=S;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;S=s,s=S.next,S.next=null,l.lastBaseUpdate=S,l.shared.pending=null}}while(1);if(m===null&&(d=b),l.baseState=d,l.firstBaseUpdate=f,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);El|=i,e.lanes=i,e.memoizedState=b}}function Q0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(Y(191,l));l.call(r)}}}var _v=new Cm.Component().refs;function Ru(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:rt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xc={isMounted:function(e){return(e=e._reactInternals)?Rl(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ut(),l=jr(e),o=cr(r,l);o.payload=t,n!=null&&(o.callback=n),t=zr(e,o,l),t!==null&&(Dn(t,e,l,r),fs(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ut(),l=jr(e),o=cr(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=zr(e,o,l),t!==null&&(Dn(t,e,l,r),fs(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ut(),r=jr(e),l=cr(n,r);l.tag=2,t!=null&&(l.callback=t),t=zr(e,l,r),t!==null&&(Dn(t,e,r,n),fs(t,e,r))}};function K0(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Vo(n,r)||!Vo(l,o):!0}function $v(e,t,n){var r=!1,l=Wr,o=t.contextType;return typeof o=="object"&&o!==null?o=Cn(o):(l=tn(t)?_l:At.current,r=t.contextTypes,o=(r=r!=null)?_a(e,l):Wr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function X0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xc.enqueueReplaceState(t,t.state,null)}function Pu(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs=_v,Uh(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Cn(o):(o=tn(t)?_l:At.current,l.context=_a(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ru(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&xc.enqueueReplaceState(l,l.state,null),Ys(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function io(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Y(309));var r=n.stateNode}if(!r)throw Error(Y(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;s===_v&&(s=l.refs={}),i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(Y(284));if(!n._owner)throw Error(Y(290,e))}return e}function Zi(e,t){throw e=Object.prototype.toString.call(t),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function J0(e){var t=e._init;return t(e._payload)}function Tv(e){function t(w,g){if(e){var y=w.deletions;y===null?(w.deletions=[g],w.flags|=16):y.push(g)}}function n(w,g){if(!e)return null;for(;g!==null;)t(w,g),g=g.sibling;return null}function r(w,g){for(w=new Map;g!==null;)g.key!==null?w.set(g.key,g):w.set(g.index,g),g=g.sibling;return w}function l(w,g){return w=Ur(w,g),w.index=0,w.sibling=null,w}function o(w,g,y){return w.index=y,e?(y=w.alternate,y!==null?(y=y.index,y<g?(w.flags|=2,g):y):(w.flags|=2,g)):(w.flags|=1048576,g)}function i(w){return e&&w.alternate===null&&(w.flags|=2),w}function s(w,g,y,v){return g===null||g.tag!==6?(g=Dd(y,w.mode,v),g.return=w,g):(g=l(g,y),g.return=w,g)}function d(w,g,y,v){var T=y.type;return T===na?m(w,g,y.props.children,v,y.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Tr&&J0(T)===g.type)?(v=l(g,y.props),v.ref=io(w,g,y),v.return=w,v):(v=bs(y.type,y.key,y.props,null,w.mode,v),v.ref=io(w,g,y),v.return=w,v)}function f(w,g,y,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=zd(y,w.mode,v),g.return=w,g):(g=l(g,y.children||[]),g.return=w,g)}function m(w,g,y,v,T){return g===null||g.tag!==7?(g=kl(y,w.mode,v,T),g.return=w,g):(g=l(g,y),g.return=w,g)}function b(w,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Dd(""+g,w.mode,y),g.return=w,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Di:return y=bs(g.type,g.key,g.props,null,w.mode,y),y.ref=io(w,null,g),y.return=w,y;case ta:return g=zd(g,w.mode,y),g.return=w,g;case Tr:var v=g._init;return b(w,v(g._payload),y)}if(mo(g)||no(g))return g=kl(g,w.mode,y,null),g.return=w,g;Zi(w,g)}return null}function S(w,g,y,v){var T=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:s(w,g,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Di:return y.key===T?d(w,g,y,v):null;case ta:return y.key===T?f(w,g,y,v):null;case Tr:return T=y._init,S(w,g,T(y._payload),v)}if(mo(y)||no(y))return T!==null?null:m(w,g,y,v,null);Zi(w,y)}return null}function L(w,g,y,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return w=w.get(y)||null,s(g,w,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Di:return w=w.get(v.key===null?y:v.key)||null,d(g,w,v,T);case ta:return w=w.get(v.key===null?y:v.key)||null,f(g,w,v,T);case Tr:var _=v._init;return L(w,g,y,_(v._payload),T)}if(mo(v)||no(v))return w=w.get(y)||null,m(g,w,v,T,null);Zi(g,v)}return null}function N(w,g,y,v){for(var T=null,_=null,F=g,O=g=0,B=null;F!==null&&O<y.length;O++){F.index>O?(B=F,F=null):B=F.sibling;var q=S(w,F,y[O],v);if(q===null){F===null&&(F=B);break}e&&F&&q.alternate===null&&t(w,F),g=o(q,g,O),_===null?T=q:_.sibling=q,_=q,F=B}if(O===y.length)return n(w,F),Xe&&ul(w,O),T;if(F===null){for(;O<y.length;O++)F=b(w,y[O],v),F!==null&&(g=o(F,g,O),_===null?T=F:_.sibling=F,_=F);return Xe&&ul(w,O),T}for(F=r(w,F);O<y.length;O++)B=L(F,w,O,y[O],v),B!==null&&(e&&B.alternate!==null&&F.delete(B.key===null?O:B.key),g=o(B,g,O),_===null?T=B:_.sibling=B,_=B);return e&&F.forEach(function(he){return t(w,he)}),Xe&&ul(w,O),T}function C(w,g,y,v){var T=no(y);if(typeof T!="function")throw Error(Y(150));if(y=T.call(y),y==null)throw Error(Y(151));for(var _=T=null,F=g,O=g=0,B=null,q=y.next();F!==null&&!q.done;O++,q=y.next()){F.index>O?(B=F,F=null):B=F.sibling;var he=S(w,F,q.value,v);if(he===null){F===null&&(F=B);break}e&&F&&he.alternate===null&&t(w,F),g=o(he,g,O),_===null?T=he:_.sibling=he,_=he,F=B}if(q.done)return n(w,F),Xe&&ul(w,O),T;if(F===null){for(;!q.done;O++,q=y.next())q=b(w,q.value,v),q!==null&&(g=o(q,g,O),_===null?T=q:_.sibling=q,_=q);return Xe&&ul(w,O),T}for(F=r(w,F);!q.done;O++,q=y.next())q=L(F,w,O,q.value,v),q!==null&&(e&&q.alternate!==null&&F.delete(q.key===null?O:q.key),g=o(q,g,O),_===null?T=q:_.sibling=q,_=q);return e&&F.forEach(function(se){return t(w,se)}),Xe&&ul(w,O),T}function I(w,g,y,v){if(typeof y=="object"&&y!==null&&y.type===na&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Di:e:{for(var T=y.key,_=g;_!==null;){if(_.key===T){if(T=y.type,T===na){if(_.tag===7){n(w,_.sibling),g=l(_,y.props.children),g.return=w,w=g;break e}}else if(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Tr&&J0(T)===_.type){n(w,_.sibling),g=l(_,y.props),g.ref=io(w,_,y),g.return=w,w=g;break e}n(w,_);break}else t(w,_);_=_.sibling}y.type===na?(g=kl(y.props.children,w.mode,v,y.key),g.return=w,w=g):(v=bs(y.type,y.key,y.props,null,w.mode,v),v.ref=io(w,g,y),v.return=w,w=v)}return i(w);case ta:e:{for(_=y.key;g!==null;){if(g.key===_)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(w,g.sibling),g=l(g,y.children||[]),g.return=w,w=g;break e}else{n(w,g);break}else t(w,g);g=g.sibling}g=zd(y,w.mode,v),g.return=w,w=g}return i(w);case Tr:return _=y._init,I(w,g,_(y._payload),v)}if(mo(y))return N(w,g,y,v);if(no(y))return C(w,g,y,v);Zi(w,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(w,g.sibling),g=l(g,y),g.return=w,w=g):(n(w,g),g=Dd(y,w.mode,v),g.return=w,w=g),i(w)):n(w,g)}return I}var Ta=Tv(!0),Ev=Tv(!1),fi={},Zn=qr(fi),Zo=qr(fi),Qo=qr(fi);function yl(e){if(e===fi)throw Error(Y(174));return e}function Hh(e,t){switch(We(Qo,t),We(Zo,e),We(Zn,fi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:uu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=uu(t,e)}Ke(Zn),We(Zn,t)}function Ea(){Ke(Zn),Ke(Zo),Ke(Qo)}function Nv(e){yl(Qo.current);var t=yl(Zn.current),n=uu(t,e.type);t!==n&&(We(Zo,e),We(Zn,n))}function Wh(e){Zo.current===e&&(Ke(Zn),Ke(Zo))}var tt=qr(0);function qs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rd=[];function Vh(){for(var e=0;e<Rd.length;e++)Rd[e]._workInProgressVersionPrimary=null;Rd.length=0}var ps=vr.ReactCurrentDispatcher,Pd=vr.ReactCurrentBatchConfig,Tl=0,nt=null,mt=null,xt=null,Zs=!1,Lo=!1,Ko=0,e8=0;function Ft(){throw Error(Y(321))}function Gh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zn(e[n],t[n]))return!1;return!0}function Yh(e,t,n,r,l,o){if(Tl=o,nt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ps.current=e===null||e.memoizedState===null?l8:a8,e=n(r,l),Lo){o=0;do{if(Lo=!1,Ko=0,25<=o)throw Error(Y(301));o+=1,xt=mt=null,t.updateQueue=null,ps.current=o8,e=n(r,l)}while(Lo)}if(ps.current=Qs,t=mt!==null&&mt.next!==null,Tl=0,xt=mt=nt=null,Zs=!1,t)throw Error(Y(300));return e}function qh(){var e=Ko!==0;return Ko=0,e}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?nt.memoizedState=xt=e:xt=xt.next=e,xt}function kn(){if(mt===null){var e=nt.alternate;e=e!==null?e.memoizedState:null}else e=mt.next;var t=xt===null?nt.memoizedState:xt.next;if(t!==null)xt=t,mt=e;else{if(e===null)throw Error(Y(310));mt=e,e={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},xt===null?nt.memoizedState=xt=e:xt=xt.next=e}return xt}function Xo(e,t){return typeof t=="function"?t(e):t}function Fd(e){var t=kn(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var r=mt,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,d=null,f=o;do{var m=f.lane;if((Tl&m)===m)d!==null&&(d=d.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var b={lane:m,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};d===null?(s=d=b,i=r):d=d.next=b,nt.lanes|=m,El|=m}f=f.next}while(f!==null&&f!==o);d===null?i=r:d.next=s,zn(r,t.memoizedState)||(Jt=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,nt.lanes|=o,El|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Md(e){var t=kn(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);zn(o,t.memoizedState)||(Jt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Lv(){}function Iv(e,t){var n=nt,r=kn(),l=t(),o=!zn(r.memoizedState,l);if(o&&(r.memoizedState=l,Jt=!0),r=r.queue,Zh(Fv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||xt!==null&&xt.memoizedState.tag&1){if(n.flags|=2048,Jo(9,Pv.bind(null,n,r,l,t),void 0,null),St===null)throw Error(Y(349));Tl&30||Rv(n,t,l)}return l}function Rv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=nt.updateQueue,t===null?(t={lastEffect:null,stores:null},nt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pv(e,t,n,r){t.value=n,t.getSnapshot=r,Mv(t)&&Ov(e)}function Fv(e,t,n){return n(function(){Mv(t)&&Ov(e)})}function Mv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zn(e,n)}catch{return!0}}function Ov(e){var t=fr(e,1);t!==null&&Dn(t,e,1,-1)}function eg(e){var t=Vn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:e},t.queue=e,e=e.dispatch=r8.bind(null,nt,e),[t.memoizedState,e]}function Jo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=nt.updateQueue,t===null?(t={lastEffect:null,stores:null},nt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Av(){return kn().memoizedState}function gs(e,t,n,r){var l=Vn();nt.flags|=e,l.memoizedState=Jo(1|t,n,void 0,r===void 0?null:r)}function Sc(e,t,n,r){var l=kn();r=r===void 0?null:r;var o=void 0;if(mt!==null){var i=mt.memoizedState;if(o=i.destroy,r!==null&&Gh(r,i.deps)){l.memoizedState=Jo(t,n,o,r);return}}nt.flags|=e,l.memoizedState=Jo(1|t,n,o,r)}function tg(e,t){return gs(8390656,8,e,t)}function Zh(e,t){return Sc(2048,8,e,t)}function Dv(e,t){return Sc(4,2,e,t)}function zv(e,t){return Sc(4,4,e,t)}function Bv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jv(e,t,n){return n=n!=null?n.concat([e]):null,Sc(4,4,Bv.bind(null,t,e),n)}function Qh(){}function Uv(e,t){var n=kn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hv(e,t){var n=kn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wv(e,t,n){return Tl&21?(zn(n,t)||(n=Ym(),nt.lanes|=n,El|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Jt=!0),e.memoizedState=n)}function t8(e,t){var n=Ae;Ae=n!==0&&4>n?n:4,e(!0);var r=Pd.transition;Pd.transition={};try{e(!1),t()}finally{Ae=n,Pd.transition=r}}function Vv(){return kn().memoizedState}function n8(e,t,n){var r=jr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gv(e))Yv(t,n);else if(n=Cv(e,t,n,r),n!==null){var l=Ut();Dn(n,e,r,l),qv(n,t,r)}}function r8(e,t,n){var r=jr(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gv(e))Yv(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,zn(s,i)){var d=t.interleaved;d===null?(l.next=l,jh(t)):(l.next=d.next,d.next=l),t.interleaved=l;return}}catch{}finally{}n=Cv(e,t,l,r),n!==null&&(l=Ut(),Dn(n,e,r,l),qv(n,t,r))}}function Gv(e){var t=e.alternate;return e===nt||t!==null&&t===nt}function Yv(e,t){Lo=Zs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Th(e,n)}}var Qs={readContext:Cn,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},l8={readContext:Cn,useCallback:function(e,t){return Vn().memoizedState=[e,t===void 0?null:t],e},useContext:Cn,useEffect:tg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,gs(4194308,4,Bv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gs(4194308,4,e,t)},useInsertionEffect:function(e,t){return gs(4,2,e,t)},useMemo:function(e,t){var n=Vn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Vn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=n8.bind(null,nt,e),[r.memoizedState,e]},useRef:function(e){var t=Vn();return e={current:e},t.memoizedState=e},useState:eg,useDebugValue:Qh,useDeferredValue:function(e){return Vn().memoizedState=e},useTransition:function(){var e=eg(!1),t=e[0];return e=t8.bind(null,e[1]),Vn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=nt,l=Vn();if(Xe){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=t(),St===null)throw Error(Y(349));Tl&30||Rv(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,tg(Fv.bind(null,r,o,e),[e]),r.flags|=2048,Jo(9,Pv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Vn(),t=St.identifierPrefix;if(Xe){var n=sr,r=ir;n=(r&~(1<<32-An(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ko++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=e8++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},a8={readContext:Cn,useCallback:Uv,useContext:Cn,useEffect:Zh,useImperativeHandle:jv,useInsertionEffect:Dv,useLayoutEffect:zv,useMemo:Hv,useReducer:Fd,useRef:Av,useState:function(){return Fd(Xo)},useDebugValue:Qh,useDeferredValue:function(e){var t=kn();return Wv(t,mt.memoizedState,e)},useTransition:function(){var e=Fd(Xo)[0],t=kn().memoizedState;return[e,t]},useMutableSource:Lv,useSyncExternalStore:Iv,useId:Vv,unstable_isNewReconciler:!1},o8={readContext:Cn,useCallback:Uv,useContext:Cn,useEffect:Zh,useImperativeHandle:jv,useInsertionEffect:Dv,useLayoutEffect:zv,useMemo:Hv,useReducer:Md,useRef:Av,useState:function(){return Md(Xo)},useDebugValue:Qh,useDeferredValue:function(e){var t=kn();return mt===null?t.memoizedState=e:Wv(t,mt.memoizedState,e)},useTransition:function(){var e=Md(Xo)[0],t=kn().memoizedState;return[e,t]},useMutableSource:Lv,useSyncExternalStore:Iv,useId:Vv,unstable_isNewReconciler:!1};function Na(e,t){try{var n="",r=t;do n+=F6(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Od(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var i8=typeof WeakMap=="function"?WeakMap:Map;function Zv(e,t,n){n=cr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xs||(Xs=!0,Wu=r),Fu(e,t)},n}function Qv(e,t,n){n=cr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Fu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Fu(e,t),typeof r!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function ng(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new i8;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=x8.bind(null,e,t,n),t.then(e,e))}function rg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lg(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=cr(-1,1),t.tag=2,zr(n,t,1))),n.lanes|=1),e)}var s8=vr.ReactCurrentOwner,Jt=!1;function Bt(e,t,n,r){t.child=e===null?Ev(t,null,n,r):Ta(t,e.child,n,r)}function ag(e,t,n,r,l){n=n.render;var o=t.ref;return wa(t,l),r=Yh(e,t,n,r,o,l),n=qh(),e!==null&&!Jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,pr(e,t,l)):(Xe&&n&&Mh(t),t.flags|=1,Bt(e,t,r,l),t.child)}function og(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!lf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Kv(e,t,o,r,l)):(e=bs(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Vo,n(i,r)&&e.ref===t.ref)return pr(e,t,l)}return t.flags|=1,e=Ur(o,r),e.ref=t.ref,e.return=t,t.child=e}function Kv(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Vo(o,r)&&e.ref===t.ref)if(Jt=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(Jt=!0);else return t.lanes=e.lanes,pr(e,t,l)}return Mu(e,t,n,r,l)}function Xv(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(ha,on),on|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,We(ha,on),on|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,We(ha,on),on|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,We(ha,on),on|=r;return Bt(e,t,l,n),t.child}function Jv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Mu(e,t,n,r,l){var o=tn(n)?_l:At.current;return o=_a(t,o),wa(t,l),n=Yh(e,t,n,r,o,l),r=qh(),e!==null&&!Jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,pr(e,t,l)):(Xe&&r&&Mh(t),t.flags|=1,Bt(e,t,n,l),t.child)}function ig(e,t,n,r,l){if(tn(n)){var o=!0;Us(t)}else o=!1;if(wa(t,l),t.stateNode===null)ms(e,t),$v(t,n,r),Pu(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var d=i.context,f=n.contextType;typeof f=="object"&&f!==null?f=Cn(f):(f=tn(n)?_l:At.current,f=_a(t,f));var m=n.getDerivedStateFromProps,b=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||d!==f)&&X0(t,i,r,f),Er=!1;var S=t.memoizedState;i.state=S,Ys(t,r,i,l),d=t.memoizedState,s!==r||S!==d||en.current||Er?(typeof m=="function"&&(Ru(t,n,m,r),d=t.memoizedState),(s=Er||K0(t,n,s,r,S,d,f))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),i.props=r,i.state=d,i.context=f,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,kv(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:Rn(t.type,s),i.props=f,b=t.pendingProps,S=i.context,d=n.contextType,typeof d=="object"&&d!==null?d=Cn(d):(d=tn(n)?_l:At.current,d=_a(t,d));var L=n.getDerivedStateFromProps;(m=typeof L=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==b||S!==d)&&X0(t,i,r,d),Er=!1,S=t.memoizedState,i.state=S,Ys(t,r,i,l);var N=t.memoizedState;s!==b||S!==N||en.current||Er?(typeof L=="function"&&(Ru(t,n,L,r),N=t.memoizedState),(f=Er||K0(t,n,f,r,S,N,d)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,N,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,N,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),i.props=r,i.state=N,i.context=d,r=f):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),r=!1)}return Ou(e,t,n,r,o,l)}function Ou(e,t,n,r,l,o){Jv(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&G0(t,n,!1),pr(e,t,o);r=t.stateNode,s8.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Ta(t,e.child,null,o),t.child=Ta(t,null,s,o)):Bt(e,t,s,o),t.memoizedState=r.state,l&&G0(t,n,!0),t.child}function e2(e){var t=e.stateNode;t.pendingContext?V0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&V0(e,t.context,!1),Hh(e,t.containerInfo)}function sg(e,t,n,r,l){return $a(),Ah(l),t.flags|=256,Bt(e,t,n,r),t.child}var Au={dehydrated:null,treeContext:null,retryLane:0};function Du(e){return{baseLanes:e,cachePool:null,transitions:null}}function t2(e,t,n){var r=t.pendingProps,l=tt.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),We(tt,l&1),e===null)return Lu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=_c(i,r,0,null),e=kl(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Du(n),t.memoizedState=Au,e):Kh(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return c8(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var d={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Ur(l,d),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=Ur(s,o):(o=kl(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Du(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Au,r}return o=e.child,e=o.sibling,r=Ur(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Kh(e,t){return t=_c({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Qi(e,t,n,r){return r!==null&&Ah(r),Ta(t,e.child,null,n),e=Kh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function c8(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Od(Error(Y(422))),Qi(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=_c({mode:"visible",children:r.children},l,0,null),o=kl(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ta(t,e.child,null,i),t.child.memoizedState=Du(i),t.memoizedState=Au,o);if(!(t.mode&1))return Qi(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(Y(419)),r=Od(o,r,void 0),Qi(e,t,i,r)}if(s=(i&e.childLanes)!==0,Jt||s){if(r=St,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,fr(e,l),Dn(r,e,l,-1))}return rf(),r=Od(Error(Y(421))),Qi(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=S8.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,hn=Dr(l.nextSibling),fn=t,Xe=!0,Mn=null,e!==null&&(bn[wn++]=ir,bn[wn++]=sr,bn[wn++]=$l,ir=e.id,sr=e.overflow,$l=t),t=Kh(t,r.children),t.flags|=4096,t)}function cg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Iu(e.return,t,n)}function Ad(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function n2(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(Bt(e,t,r.children,n),r=tt.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cg(e,n,t);else if(e.tag===19)cg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(We(tt,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&qs(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ad(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&qs(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ad(t,!0,n,null,o);break;case"together":Ad(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ms(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),El|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Y(153));if(t.child!==null){for(e=t.child,n=Ur(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ur(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function d8(e,t,n){switch(t.tag){case 3:e2(t),$a();break;case 5:Nv(t);break;case 1:tn(t.type)&&Us(t);break;case 4:Hh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;We(Vs,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(We(tt,tt.current&1),t.flags|=128,null):n&t.child.childLanes?t2(e,t,n):(We(tt,tt.current&1),e=pr(e,t,n),e!==null?e.sibling:null);We(tt,tt.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return n2(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),We(tt,tt.current),r)break;return null;case 22:case 23:return t.lanes=0,Xv(e,t,n)}return pr(e,t,n)}var r2,zu,l2,a2;r2=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zu=function(){};l2=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,yl(Zn.current);var o=null;switch(n){case"input":l=iu(e,l),r=iu(e,r),o=[];break;case"select":l=rt({},l,{value:void 0}),r=rt({},r,{value:void 0}),o=[];break;case"textarea":l=du(e,l),r=du(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bs)}hu(n,r);var i;n=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var s=l[f];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Do.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var d=r[f];if(s=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&d!==s&&(d!=null||s!=null))if(f==="style")if(s){for(i in s)!s.hasOwnProperty(i)||d&&d.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in d)d.hasOwnProperty(i)&&s[i]!==d[i]&&(n||(n={}),n[i]=d[i])}else n||(o||(o=[]),o.push(f,n)),n=d;else f==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,s=s?s.__html:void 0,d!=null&&s!==d&&(o=o||[]).push(f,d)):f==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(f,""+d):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Do.hasOwnProperty(f)?(d!=null&&f==="onScroll"&&Ze("scroll",e),o||s===d||(o=[])):(o=o||[]).push(f,d))}n&&(o=o||[]).push("style",n);var f=o;(t.updateQueue=f)&&(t.flags|=4)}};a2=function(e,t,n,r){n!==r&&(t.flags|=4)};function so(e,t){if(!Xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Mt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function u8(e,t,n){var r=t.pendingProps;switch(Oh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(t),null;case 1:return tn(t.type)&&js(),Mt(t),null;case 3:return r=t.stateNode,Ea(),Ke(en),Ke(At),Vh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Mn!==null&&(Yu(Mn),Mn=null))),zu(e,t),Mt(t),null;case 5:Wh(t);var l=yl(Qo.current);if(n=t.type,e!==null&&t.stateNode!=null)l2(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(Y(166));return Mt(t),null}if(e=yl(Zn.current),qi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Yn]=t,r[qo]=o,e=(t.mode&1)!==0,n){case"dialog":Ze("cancel",r),Ze("close",r);break;case"iframe":case"object":case"embed":Ze("load",r);break;case"video":case"audio":for(l=0;l<yo.length;l++)Ze(yo[l],r);break;case"source":Ze("error",r);break;case"img":case"image":case"link":Ze("error",r),Ze("load",r);break;case"details":Ze("toggle",r);break;case"input":y0(r,o),Ze("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ze("invalid",r);break;case"textarea":w0(r,o),Ze("invalid",r)}hu(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Yi(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Yi(r.textContent,s,e),l=["children",""+s]):Do.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Ze("scroll",r)}switch(n){case"input":zi(r),b0(r,o,!0);break;case"textarea":zi(r),x0(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Bs)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Yn]=t,e[qo]=r,r2(e,t,!1,!1),t.stateNode=e;e:{switch(i=fu(n,r),n){case"dialog":Ze("cancel",e),Ze("close",e),l=r;break;case"iframe":case"object":case"embed":Ze("load",e),l=r;break;case"video":case"audio":for(l=0;l<yo.length;l++)Ze(yo[l],e);l=r;break;case"source":Ze("error",e),l=r;break;case"img":case"image":case"link":Ze("error",e),Ze("load",e),l=r;break;case"details":Ze("toggle",e),l=r;break;case"input":y0(e,r),l=iu(e,r),Ze("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=rt({},r,{value:void 0}),Ze("invalid",e);break;case"textarea":w0(e,r),l=du(e,r),Ze("invalid",e);break;default:l=r}hu(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var d=s[o];o==="style"?Mm(e,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Pm(e,d)):o==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&zo(e,d):typeof d=="number"&&zo(e,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Do.hasOwnProperty(o)?d!=null&&o==="onScroll"&&Ze("scroll",e):d!=null&&xh(e,o,d,i))}switch(n){case"input":zi(e),b0(e,r,!1);break;case"textarea":zi(e),x0(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Hr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ma(e,!!r.multiple,o,!1):r.defaultValue!=null&&ma(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Bs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Mt(t),null;case 6:if(e&&t.stateNode!=null)a2(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(Y(166));if(n=yl(Qo.current),yl(Zn.current),qi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Yn]=t,(o=r.nodeValue!==n)&&(e=fn,e!==null))switch(e.tag){case 3:Yi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yn]=t,t.stateNode=r}return Mt(t),null;case 13:if(Ke(tt),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Xe&&hn!==null&&t.mode&1&&!(t.flags&128))Sv(),$a(),t.flags|=98560,o=!1;else if(o=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(Y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Y(317));o[Yn]=t}else $a(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Mt(t),o=!1}else Mn!==null&&(Yu(Mn),Mn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||tt.current&1?vt===0&&(vt=3):rf())),t.updateQueue!==null&&(t.flags|=4),Mt(t),null);case 4:return Ea(),zu(e,t),e===null&&Go(t.stateNode.containerInfo),Mt(t),null;case 10:return Bh(t.type._context),Mt(t),null;case 17:return tn(t.type)&&js(),Mt(t),null;case 19:if(Ke(tt),o=t.memoizedState,o===null)return Mt(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)so(o,!1);else{if(vt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=qs(e),i!==null){for(t.flags|=128,so(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return We(tt,tt.current&1|2),t.child}e=e.sibling}o.tail!==null&&ot()>La&&(t.flags|=128,r=!0,so(o,!1),t.lanes=4194304)}else{if(!r)if(e=qs(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),so(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Xe)return Mt(t),null}else 2*ot()-o.renderingStartTime>La&&n!==1073741824&&(t.flags|=128,r=!0,so(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ot(),t.sibling=null,n=tt.current,We(tt,r?n&1|2:n&1),t):(Mt(t),null);case 22:case 23:return nf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?on&1073741824&&(Mt(t),t.subtreeFlags&6&&(t.flags|=8192)):Mt(t),null;case 24:return null;case 25:return null}throw Error(Y(156,t.tag))}function h8(e,t){switch(Oh(t),t.tag){case 1:return tn(t.type)&&js(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ea(),Ke(en),Ke(At),Vh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wh(t),null;case 13:if(Ke(tt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Y(340));$a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ke(tt),null;case 4:return Ea(),null;case 10:return Bh(t.type._context),null;case 22:case 23:return nf(),null;case 24:return null;default:return null}}var Ki=!1,Ot=!1,f8=typeof WeakSet=="function"?WeakSet:Set,te=null;function ua(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){at(e,t,r)}else n.current=null}function Bu(e,t,n){try{n()}catch(r){at(e,t,r)}}var dg=!1;function p8(e,t){if(Cu=As,e=cv(),Fh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,d=-1,f=0,m=0,b=e,S=null;t:for(;;){for(var L;b!==n||l!==0&&b.nodeType!==3||(s=i+l),b!==o||r!==0&&b.nodeType!==3||(d=i+r),b.nodeType===3&&(i+=b.nodeValue.length),(L=b.firstChild)!==null;)S=b,b=L;for(;;){if(b===e)break t;if(S===n&&++f===l&&(s=i),S===o&&++m===r&&(d=i),(L=b.nextSibling)!==null)break;b=S,S=b.parentNode}b=L}n=s===-1||d===-1?null:{start:s,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(ku={focusedElem:e,selectionRange:n},As=!1,te=t;te!==null;)if(t=te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,te=e;else for(;te!==null;){t=te;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var C=N.memoizedProps,I=N.memoizedState,w=t.stateNode,g=w.getSnapshotBeforeUpdate(t.elementType===t.type?C:Rn(t.type,C),I);w.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(v){at(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,te=e;break}te=t.return}return N=dg,dg=!1,N}function Io(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Bu(t,n,o)}l=l.next}while(l!==r)}}function Cc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ju(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function o2(e){var t=e.alternate;t!==null&&(e.alternate=null,o2(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yn],delete t[qo],delete t[Tu],delete t[Qw],delete t[Kw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function i2(e){return e.tag===5||e.tag===3||e.tag===4}function ug(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||i2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bs));else if(r!==4&&(e=e.child,e!==null))for(Uu(e,t,n),e=e.sibling;e!==null;)Uu(e,t,n),e=e.sibling}function Hu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hu(e,t,n),e=e.sibling;e!==null;)Hu(e,t,n),e=e.sibling}var _t=null,Fn=!1;function kr(e,t,n){for(n=n.child;n!==null;)s2(e,t,n),n=n.sibling}function s2(e,t,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(gc,n)}catch{}switch(n.tag){case 5:Ot||ua(n,t);case 6:var r=_t,l=Fn;_t=null,kr(e,t,n),_t=r,Fn=l,_t!==null&&(Fn?(e=_t,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_t.removeChild(n.stateNode));break;case 18:_t!==null&&(Fn?(e=_t,n=n.stateNode,e.nodeType===8?Ld(e.parentNode,n):e.nodeType===1&&Ld(e,n),Ho(e)):Ld(_t,n.stateNode));break;case 4:r=_t,l=Fn,_t=n.stateNode.containerInfo,Fn=!0,kr(e,t,n),_t=r,Fn=l;break;case 0:case 11:case 14:case 15:if(!Ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Bu(n,t,i),l=l.next}while(l!==r)}kr(e,t,n);break;case 1:if(!Ot&&(ua(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){at(n,t,s)}kr(e,t,n);break;case 21:kr(e,t,n);break;case 22:n.mode&1?(Ot=(r=Ot)||n.memoizedState!==null,kr(e,t,n),Ot=r):kr(e,t,n);break;default:kr(e,t,n)}}function hg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new f8),t.forEach(function(r){var l=C8.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ln(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:_t=s.stateNode,Fn=!1;break e;case 3:_t=s.stateNode.containerInfo,Fn=!0;break e;case 4:_t=s.stateNode.containerInfo,Fn=!0;break e}s=s.return}if(_t===null)throw Error(Y(160));s2(o,i,l),_t=null,Fn=!1;var d=l.alternate;d!==null&&(d.return=null),l.return=null}catch(f){at(l,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)c2(t,e),t=t.sibling}function c2(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ln(t,e),Bn(e),r&4){try{Io(3,e,e.return),Cc(3,e)}catch(C){at(e,e.return,C)}try{Io(5,e,e.return)}catch(C){at(e,e.return,C)}}break;case 1:Ln(t,e),Bn(e),r&512&&n!==null&&ua(n,n.return);break;case 5:if(Ln(t,e),Bn(e),r&512&&n!==null&&ua(n,n.return),e.flags&32){var l=e.stateNode;try{zo(l,"")}catch(C){at(e,e.return,C)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Lm(l,o),fu(s,i);var f=fu(s,o);for(i=0;i<d.length;i+=2){var m=d[i],b=d[i+1];m==="style"?Mm(l,b):m==="dangerouslySetInnerHTML"?Pm(l,b):m==="children"?zo(l,b):xh(l,m,b,f)}switch(s){case"input":su(l,o);break;case"textarea":Im(l,o);break;case"select":var S=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var L=o.value;L!=null?ma(l,!!o.multiple,L,!1):S!==!!o.multiple&&(o.defaultValue!=null?ma(l,!!o.multiple,o.defaultValue,!0):ma(l,!!o.multiple,o.multiple?[]:"",!1))}l[qo]=o}catch(C){at(e,e.return,C)}}break;case 6:if(Ln(t,e),Bn(e),r&4){if(e.stateNode===null)throw Error(Y(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(C){at(e,e.return,C)}}break;case 3:if(Ln(t,e),Bn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ho(t.containerInfo)}catch(C){at(e,e.return,C)}break;case 4:Ln(t,e),Bn(e);break;case 13:Ln(t,e),Bn(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(ef=ot())),r&4&&hg(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Ot=(f=Ot)||m,Ln(t,e),Ot=f):Ln(t,e),Bn(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!m&&e.mode&1)for(te=e,m=e.child;m!==null;){for(b=te=m;te!==null;){switch(S=te,L=S.child,S.tag){case 0:case 11:case 14:case 15:Io(4,S,S.return);break;case 1:ua(S,S.return);var N=S.stateNode;if(typeof N.componentWillUnmount=="function"){r=S,n=S.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(C){at(r,n,C)}}break;case 5:ua(S,S.return);break;case 22:if(S.memoizedState!==null){pg(b);continue}}L!==null?(L.return=S,te=L):pg(b)}m=m.sibling}e:for(m=null,b=e;;){if(b.tag===5){if(m===null){m=b;try{l=b.stateNode,f?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=b.stateNode,d=b.memoizedProps.style,i=d!=null&&d.hasOwnProperty("display")?d.display:null,s.style.display=Fm("display",i))}catch(C){at(e,e.return,C)}}}else if(b.tag===6){if(m===null)try{b.stateNode.nodeValue=f?"":b.memoizedProps}catch(C){at(e,e.return,C)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;m===b&&(m=null),b=b.return}m===b&&(m=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:Ln(t,e),Bn(e),r&4&&hg(e);break;case 21:break;default:Ln(t,e),Bn(e)}}function Bn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(i2(n)){var r=n;break e}n=n.return}throw Error(Y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(zo(l,""),r.flags&=-33);var o=ug(e);Hu(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=ug(e);Uu(e,s,i);break;default:throw Error(Y(161))}}catch(d){at(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function g8(e,t,n){te=e,d2(e)}function d2(e,t,n){for(var r=(e.mode&1)!==0;te!==null;){var l=te,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Ki;if(!i){var s=l.alternate,d=s!==null&&s.memoizedState!==null||Ot;s=Ki;var f=Ot;if(Ki=i,(Ot=d)&&!f)for(te=l;te!==null;)i=te,d=i.child,i.tag===22&&i.memoizedState!==null?gg(l):d!==null?(d.return=i,te=d):gg(l);for(;o!==null;)te=o,d2(o),o=o.sibling;te=l,Ki=s,Ot=f}fg(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,te=o):fg(e)}}function fg(e){for(;te!==null;){var t=te;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ot||Cc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ot)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Rn(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Q0(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Q0(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var m=f.memoizedState;if(m!==null){var b=m.dehydrated;b!==null&&Ho(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}Ot||t.flags&512&&ju(t)}catch(S){at(t,t.return,S)}}if(t===e){te=null;break}if(n=t.sibling,n!==null){n.return=t.return,te=n;break}te=t.return}}function pg(e){for(;te!==null;){var t=te;if(t===e){te=null;break}var n=t.sibling;if(n!==null){n.return=t.return,te=n;break}te=t.return}}function gg(e){for(;te!==null;){var t=te;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Cc(4,t)}catch(d){at(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(d){at(t,l,d)}}var o=t.return;try{ju(t)}catch(d){at(t,o,d)}break;case 5:var i=t.return;try{ju(t)}catch(d){at(t,i,d)}}}catch(d){at(t,t.return,d)}if(t===e){te=null;break}var s=t.sibling;if(s!==null){s.return=t.return,te=s;break}te=t.return}}var m8=Math.ceil,Ks=vr.ReactCurrentDispatcher,Xh=vr.ReactCurrentOwner,Sn=vr.ReactCurrentBatchConfig,Ne=0,St=null,dt=null,Nt=0,on=0,ha=qr(0),vt=0,ei=null,El=0,kc=0,Jh=0,Ro=null,Xt=null,ef=0,La=1/0,lr=null,Xs=!1,Wu=null,Br=null,Xi=!1,Rr=null,Js=0,Po=0,Vu=null,vs=-1,ys=0;function Ut(){return Ne&6?ot():vs!==-1?vs:vs=ot()}function jr(e){return e.mode&1?Ne&2&&Nt!==0?Nt&-Nt:Jw.transition!==null?(ys===0&&(ys=Ym()),ys):(e=Ae,e!==0||(e=window.event,e=e===void 0?16:ev(e.type)),e):1}function Dn(e,t,n,r){if(50<Po)throw Po=0,Vu=null,Error(Y(185));di(e,n,r),(!(Ne&2)||e!==St)&&(e===St&&(!(Ne&2)&&(kc|=n),vt===4&&Lr(e,Nt)),nn(e,r),n===1&&Ne===0&&!(t.mode&1)&&(La=ot()+500,wc&&Zr()))}function nn(e,t){var n=e.callbackNode;J6(e,t);var r=Os(e,e===St?Nt:0);if(r===0)n!==null&&k0(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&k0(n),t===1)e.tag===0?Xw(mg.bind(null,e)):bv(mg.bind(null,e)),qw(function(){!(Ne&6)&&Zr()}),n=null;else{switch(qm(r)){case 1:n=$h;break;case 4:n=Vm;break;case 16:n=Ms;break;case 536870912:n=Gm;break;default:n=Ms}n=y2(n,u2.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function u2(e,t){if(vs=-1,ys=0,Ne&6)throw Error(Y(327));var n=e.callbackNode;if(xa()&&e.callbackNode!==n)return null;var r=Os(e,e===St?Nt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ec(e,r);else{t=r;var l=Ne;Ne|=2;var o=f2();(St!==e||Nt!==t)&&(lr=null,La=ot()+500,Cl(e,t));do try{b8();break}catch(s){h2(e,s)}while(1);zh(),Ks.current=o,Ne=l,dt!==null?t=0:(St=null,Nt=0,t=vt)}if(t!==0){if(t===2&&(l=yu(e),l!==0&&(r=l,t=Gu(e,l))),t===1)throw n=ei,Cl(e,0),Lr(e,r),nn(e,ot()),n;if(t===6)Lr(e,r);else{if(l=e.current.alternate,!(r&30)&&!v8(l)&&(t=ec(e,r),t===2&&(o=yu(e),o!==0&&(r=o,t=Gu(e,o))),t===1))throw n=ei,Cl(e,0),Lr(e,r),nn(e,ot()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(Y(345));case 2:hl(e,Xt,lr);break;case 3:if(Lr(e,r),(r&130023424)===r&&(t=ef+500-ot(),10<t)){if(Os(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ut(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=$u(hl.bind(null,e,Xt,lr),t);break}hl(e,Xt,lr);break;case 4:if(Lr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-An(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=ot()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*m8(r/1960))-r,10<r){e.timeoutHandle=$u(hl.bind(null,e,Xt,lr),r);break}hl(e,Xt,lr);break;case 5:hl(e,Xt,lr);break;default:throw Error(Y(329))}}}return nn(e,ot()),e.callbackNode===n?u2.bind(null,e):null}function Gu(e,t){var n=Ro;return e.current.memoizedState.isDehydrated&&(Cl(e,t).flags|=256),e=ec(e,t),e!==2&&(t=Xt,Xt=n,t!==null&&Yu(t)),e}function Yu(e){Xt===null?Xt=e:Xt.push.apply(Xt,e)}function v8(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!zn(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lr(e,t){for(t&=~Jh,t&=~kc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-An(t),r=1<<n;e[n]=-1,t&=~r}}function mg(e){if(Ne&6)throw Error(Y(327));xa();var t=Os(e,0);if(!(t&1))return nn(e,ot()),null;var n=ec(e,t);if(e.tag!==0&&n===2){var r=yu(e);r!==0&&(t=r,n=Gu(e,r))}if(n===1)throw n=ei,Cl(e,0),Lr(e,t),nn(e,ot()),n;if(n===6)throw Error(Y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hl(e,Xt,lr),nn(e,ot()),null}function tf(e,t){var n=Ne;Ne|=1;try{return e(t)}finally{Ne=n,Ne===0&&(La=ot()+500,wc&&Zr())}}function Nl(e){Rr!==null&&Rr.tag===0&&!(Ne&6)&&xa();var t=Ne;Ne|=1;var n=Sn.transition,r=Ae;try{if(Sn.transition=null,Ae=1,e)return e()}finally{Ae=r,Sn.transition=n,Ne=t,!(Ne&6)&&Zr()}}function nf(){on=ha.current,Ke(ha)}function Cl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yw(n)),dt!==null)for(n=dt.return;n!==null;){var r=n;switch(Oh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&js();break;case 3:Ea(),Ke(en),Ke(At),Vh();break;case 5:Wh(r);break;case 4:Ea();break;case 13:Ke(tt);break;case 19:Ke(tt);break;case 10:Bh(r.type._context);break;case 22:case 23:nf()}n=n.return}if(St=e,dt=e=Ur(e.current,null),Nt=on=t,vt=0,ei=null,Jh=kc=El=0,Xt=Ro=null,vl!==null){for(t=0;t<vl.length;t++)if(n=vl[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}vl=null}return e}function h2(e,t){do{var n=dt;try{if(zh(),ps.current=Qs,Zs){for(var r=nt.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Zs=!1}if(Tl=0,xt=mt=nt=null,Lo=!1,Ko=0,Xh.current=null,n===null||n.return===null){vt=1,ei=t,dt=null;break}e:{var o=e,i=n.return,s=n,d=t;if(t=Nt,s.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var f=d,m=s,b=m.tag;if(!(m.mode&1)&&(b===0||b===11||b===15)){var S=m.alternate;S?(m.updateQueue=S.updateQueue,m.memoizedState=S.memoizedState,m.lanes=S.lanes):(m.updateQueue=null,m.memoizedState=null)}var L=rg(i);if(L!==null){L.flags&=-257,lg(L,i,s,o,t),L.mode&1&&ng(o,f,t),t=L,d=f;var N=t.updateQueue;if(N===null){var C=new Set;C.add(d),t.updateQueue=C}else N.add(d);break e}else{if(!(t&1)){ng(o,f,t),rf();break e}d=Error(Y(426))}}else if(Xe&&s.mode&1){var I=rg(i);if(I!==null){!(I.flags&65536)&&(I.flags|=256),lg(I,i,s,o,t),Ah(Na(d,s));break e}}o=d=Na(d,s),vt!==4&&(vt=2),Ro===null?Ro=[o]:Ro.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var w=Zv(o,d,t);Z0(o,w);break e;case 1:s=d;var g=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Br===null||!Br.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Qv(o,s,t);Z0(o,v);break e}}o=o.return}while(o!==null)}g2(n)}catch(T){t=T,dt===n&&n!==null&&(dt=n=n.return);continue}break}while(1)}function f2(){var e=Ks.current;return Ks.current=Qs,e===null?Qs:e}function rf(){(vt===0||vt===3||vt===2)&&(vt=4),St===null||!(El&268435455)&&!(kc&268435455)||Lr(St,Nt)}function ec(e,t){var n=Ne;Ne|=2;var r=f2();(St!==e||Nt!==t)&&(lr=null,Cl(e,t));do try{y8();break}catch(l){h2(e,l)}while(1);if(zh(),Ne=n,Ks.current=r,dt!==null)throw Error(Y(261));return St=null,Nt=0,vt}function y8(){for(;dt!==null;)p2(dt)}function b8(){for(;dt!==null&&!W6();)p2(dt)}function p2(e){var t=v2(e.alternate,e,on);e.memoizedProps=e.pendingProps,t===null?g2(e):dt=t,Xh.current=null}function g2(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=h8(n,t),n!==null){n.flags&=32767,dt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{vt=6,dt=null;return}}else if(n=u8(n,t,on),n!==null){dt=n;return}if(t=t.sibling,t!==null){dt=t;return}dt=t=e}while(t!==null);vt===0&&(vt=5)}function hl(e,t,n){var r=Ae,l=Sn.transition;try{Sn.transition=null,Ae=1,w8(e,t,n,r)}finally{Sn.transition=l,Ae=r}return null}function w8(e,t,n,r){do xa();while(Rr!==null);if(Ne&6)throw Error(Y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ew(e,o),e===St&&(dt=St=null,Nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xi||(Xi=!0,y2(Ms,function(){return xa(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Sn.transition,Sn.transition=null;var i=Ae;Ae=1;var s=Ne;Ne|=4,Xh.current=null,p8(e,n),c2(n,e),Bw(ku),As=!!Cu,ku=Cu=null,e.current=n,g8(n),V6(),Ne=s,Ae=i,Sn.transition=o}else e.current=n;if(Xi&&(Xi=!1,Rr=e,Js=l),o=e.pendingLanes,o===0&&(Br=null),q6(n.stateNode),nn(e,ot()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Xs)throw Xs=!1,e=Wu,Wu=null,e;return Js&1&&e.tag!==0&&xa(),o=e.pendingLanes,o&1?e===Vu?Po++:(Po=0,Vu=e):Po=0,Zr(),null}function xa(){if(Rr!==null){var e=qm(Js),t=Sn.transition,n=Ae;try{if(Sn.transition=null,Ae=16>e?16:e,Rr===null)var r=!1;else{if(e=Rr,Rr=null,Js=0,Ne&6)throw Error(Y(331));var l=Ne;for(Ne|=4,te=e.current;te!==null;){var o=te,i=o.child;if(te.flags&16){var s=o.deletions;if(s!==null){for(var d=0;d<s.length;d++){var f=s[d];for(te=f;te!==null;){var m=te;switch(m.tag){case 0:case 11:case 15:Io(8,m,o)}var b=m.child;if(b!==null)b.return=m,te=b;else for(;te!==null;){m=te;var S=m.sibling,L=m.return;if(o2(m),m===f){te=null;break}if(S!==null){S.return=L,te=S;break}te=L}}}var N=o.alternate;if(N!==null){var C=N.child;if(C!==null){N.child=null;do{var I=C.sibling;C.sibling=null,C=I}while(C!==null)}}te=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,te=i;else e:for(;te!==null;){if(o=te,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Io(9,o,o.return)}var w=o.sibling;if(w!==null){w.return=o.return,te=w;break e}te=o.return}}var g=e.current;for(te=g;te!==null;){i=te;var y=i.child;if(i.subtreeFlags&2064&&y!==null)y.return=i,te=y;else e:for(i=g;te!==null;){if(s=te,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Cc(9,s)}}catch(T){at(s,s.return,T)}if(s===i){te=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,te=v;break e}te=s.return}}if(Ne=l,Zr(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(gc,e)}catch{}r=!0}return r}finally{Ae=n,Sn.transition=t}}return!1}function vg(e,t,n){t=Na(n,t),t=Zv(e,t,1),e=zr(e,t,1),t=Ut(),e!==null&&(di(e,1,t),nn(e,t))}function at(e,t,n){if(e.tag===3)vg(e,e,n);else for(;t!==null;){if(t.tag===3){vg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Br===null||!Br.has(r))){e=Na(n,e),e=Qv(t,e,1),t=zr(t,e,1),e=Ut(),t!==null&&(di(t,1,e),nn(t,e));break}}t=t.return}}function x8(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ut(),e.pingedLanes|=e.suspendedLanes&n,St===e&&(Nt&n)===n&&(vt===4||vt===3&&(Nt&130023424)===Nt&&500>ot()-ef?Cl(e,0):Jh|=n),nn(e,t)}function m2(e,t){t===0&&(e.mode&1?(t=Ui,Ui<<=1,!(Ui&130023424)&&(Ui=4194304)):t=1);var n=Ut();e=fr(e,t),e!==null&&(di(e,t,n),nn(e,n))}function S8(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),m2(e,n)}function C8(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Y(314))}r!==null&&r.delete(t),m2(e,n)}var v2;v2=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||en.current)Jt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Jt=!1,d8(e,t,n);Jt=!!(e.flags&131072)}else Jt=!1,Xe&&t.flags&1048576&&wv(t,Ws,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ms(e,t),e=t.pendingProps;var l=_a(t,At.current);wa(t,n),l=Yh(null,t,r,e,l,n);var o=qh();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tn(r)?(o=!0,Us(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Uh(t),l.updater=xc,t.stateNode=l,l._reactInternals=t,Pu(t,r,e,n),t=Ou(null,t,r,!0,o,n)):(t.tag=0,Xe&&o&&Mh(t),Bt(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ms(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=_8(r),e=Rn(r,e),l){case 0:t=Mu(null,t,r,e,n);break e;case 1:t=ig(null,t,r,e,n);break e;case 11:t=ag(null,t,r,e,n);break e;case 14:t=og(null,t,r,Rn(r.type,e),n);break e}throw Error(Y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Rn(r,l),Mu(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Rn(r,l),ig(e,t,r,l,n);case 3:e:{if(e2(t),e===null)throw Error(Y(387));r=t.pendingProps,o=t.memoizedState,l=o.element,kv(e,t),Ys(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Na(Error(Y(423)),t),t=sg(e,t,r,n,l);break e}else if(r!==l){l=Na(Error(Y(424)),t),t=sg(e,t,r,n,l);break e}else for(hn=Dr(t.stateNode.containerInfo.firstChild),fn=t,Xe=!0,Mn=null,n=Ev(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($a(),r===l){t=pr(e,t,n);break e}Bt(e,t,r,n)}t=t.child}return t;case 5:return Nv(t),e===null&&Lu(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,_u(r,l)?i=null:o!==null&&_u(r,o)&&(t.flags|=32),Jv(e,t),Bt(e,t,i,n),t.child;case 6:return e===null&&Lu(t),null;case 13:return t2(e,t,n);case 4:return Hh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ta(t,null,r,n):Bt(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Rn(r,l),ag(e,t,r,l,n);case 7:return Bt(e,t,t.pendingProps,n),t.child;case 8:return Bt(e,t,t.pendingProps.children,n),t.child;case 12:return Bt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,We(Vs,r._currentValue),r._currentValue=i,o!==null)if(zn(o.value,i)){if(o.children===l.children&&!en.current){t=pr(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var d=s.firstContext;d!==null;){if(d.context===r){if(o.tag===1){d=cr(-1,n&-n),d.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var m=f.pending;m===null?d.next=d:(d.next=m.next,m.next=d),f.pending=d}}o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),Iu(o.return,n,t),s.lanes|=n;break}d=d.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(Y(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Iu(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Bt(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,wa(t,n),l=Cn(l),r=r(l),t.flags|=1,Bt(e,t,r,n),t.child;case 14:return r=t.type,l=Rn(r,t.pendingProps),l=Rn(r.type,l),og(e,t,r,l,n);case 15:return Kv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Rn(r,l),ms(e,t),t.tag=1,tn(r)?(e=!0,Us(t)):e=!1,wa(t,n),$v(t,r,l),Pu(t,r,l,n),Ou(null,t,r,!0,e,n);case 19:return n2(e,t,n);case 22:return Xv(e,t,n)}throw Error(Y(156,t.tag))};function y2(e,t){return Wm(e,t)}function k8(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(e,t,n,r){return new k8(e,t,n,r)}function lf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _8(e){if(typeof e=="function")return lf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ch)return 11;if(e===kh)return 14}return 2}function Ur(e,t){var n=e.alternate;return n===null?(n=xn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bs(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")lf(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case na:return kl(n.children,l,o,t);case Sh:i=8,l|=8;break;case ru:return e=xn(12,n,t,l|2),e.elementType=ru,e.lanes=o,e;case lu:return e=xn(13,n,t,l),e.elementType=lu,e.lanes=o,e;case au:return e=xn(19,n,t,l),e.elementType=au,e.lanes=o,e;case Tm:return _c(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _m:i=10;break e;case $m:i=9;break e;case Ch:i=11;break e;case kh:i=14;break e;case Tr:i=16,r=null;break e}throw Error(Y(130,e==null?e:typeof e,""))}return t=xn(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function kl(e,t,n,r){return e=xn(7,e,r,t),e.lanes=n,e}function _c(e,t,n,r){return e=xn(22,e,r,t),e.elementType=Tm,e.lanes=n,e.stateNode={isHidden:!1},e}function Dd(e,t,n){return e=xn(6,e,null,t),e.lanes=n,e}function zd(e,t,n){return t=xn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $8(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bd(0),this.expirationTimes=bd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bd(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function af(e,t,n,r,l,o,i,s,d){return e=new $8(e,t,n,s,d),t===1?(t=1,o===!0&&(t|=8)):t=0,o=xn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uh(o),e}function T8(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ta,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function b2(e){if(!e)return Wr;e=e._reactInternals;e:{if(Rl(e)!==e||e.tag!==1)throw Error(Y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Y(171))}if(e.tag===1){var n=e.type;if(tn(n))return yv(e,n,t)}return t}function w2(e,t,n,r,l,o,i,s,d){return e=af(n,r,!0,e,l,o,i,s,d),e.context=b2(null),n=e.current,r=Ut(),l=jr(n),o=cr(r,l),o.callback=t??null,zr(n,o,l),e.current.lanes=l,di(e,l,r),nn(e,r),e}function $c(e,t,n,r){var l=t.current,o=Ut(),i=jr(l);return n=b2(n),t.context===null?t.context=n:t.pendingContext=n,t=cr(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=zr(l,t,i),e!==null&&(Dn(e,l,i,o),fs(e,l,i)),i}function tc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function of(e,t){yg(e,t),(e=e.alternate)&&yg(e,t)}function E8(){return null}var x2=typeof reportError=="function"?reportError:function(e){console.error(e)};function sf(e){this._internalRoot=e}Tc.prototype.render=sf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Y(409));$c(e,t,null,null)};Tc.prototype.unmount=sf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nl(function(){$c(null,e,null,null)}),t[hr]=null}};function Tc(e){this._internalRoot=e}Tc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Km();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nr.length&&t!==0&&t<Nr[n].priority;n++);Nr.splice(n,0,e),n===0&&Jm(e)}};function cf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ec(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bg(){}function N8(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var f=tc(i);o.call(f)}}var i=w2(t,r,e,0,null,!1,!1,"",bg);return e._reactRootContainer=i,e[hr]=i.current,Go(e.nodeType===8?e.parentNode:e),Nl(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var f=tc(d);s.call(f)}}var d=af(e,0,!1,null,null,!1,!1,"",bg);return e._reactRootContainer=d,e[hr]=d.current,Go(e.nodeType===8?e.parentNode:e),Nl(function(){$c(t,d,n,r)}),d}function Nc(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var d=tc(i);s.call(d)}}$c(t,i,e,l)}else i=N8(n,t,e,l,r);return tc(i)}Zm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vo(t.pendingLanes);n!==0&&(Th(t,n|1),nn(t,ot()),!(Ne&6)&&(La=ot()+500,Zr()))}break;case 13:Nl(function(){var r=fr(e,1);if(r!==null){var l=Ut();Dn(r,e,1,l)}}),of(e,1)}};Eh=function(e){if(e.tag===13){var t=fr(e,134217728);if(t!==null){var n=Ut();Dn(t,e,134217728,n)}of(e,134217728)}};Qm=function(e){if(e.tag===13){var t=jr(e),n=fr(e,t);if(n!==null){var r=Ut();Dn(n,e,t,r)}of(e,t)}};Km=function(){return Ae};Xm=function(e,t){var n=Ae;try{return Ae=e,t()}finally{Ae=n}};gu=function(e,t,n){switch(t){case"input":if(su(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=bc(r);if(!l)throw Error(Y(90));Nm(r),su(r,l)}}}break;case"textarea":Im(e,n);break;case"select":t=n.value,t!=null&&ma(e,!!n.multiple,t,!1)}};Dm=tf;zm=Nl;var L8={usingClientEntryPoint:!1,Events:[hi,oa,bc,Om,Am,tf]},co={findFiberByHostInstance:ml,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},I8={bundleType:co.bundleType,version:co.version,rendererPackageName:co.rendererPackageName,rendererConfig:co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Um(e),e===null?null:e.stateNode},findFiberByHostInstance:co.findFiberByHostInstance||E8,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ji.isDisabled&&Ji.supportsFiber)try{gc=Ji.inject(I8),qn=Ji}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L8;gn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cf(t))throw Error(Y(200));return T8(e,t,null,n)};gn.createRoot=function(e,t){if(!cf(e))throw Error(Y(299));var n=!1,r="",l=x2;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=af(e,1,!1,null,null,n,!1,r,l),e[hr]=t.current,Go(e.nodeType===8?e.parentNode:e),new sf(t)};gn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=Um(t),e=e===null?null:e.stateNode,e};gn.flushSync=function(e){return Nl(e)};gn.hydrate=function(e,t,n){if(!Ec(t))throw Error(Y(200));return Nc(null,e,t,!0,n)};gn.hydrateRoot=function(e,t,n){if(!cf(e))throw Error(Y(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=x2;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=w2(t,null,e,1,n??null,l,!1,o,i),e[hr]=t.current,Go(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Tc(t)};gn.render=function(e,t,n){if(!Ec(t))throw Error(Y(200));return Nc(null,e,t,!1,n)};gn.unmountComponentAtNode=function(e){if(!Ec(e))throw Error(Y(40));return e._reactRootContainer?(Nl(function(){Nc(null,null,e,!1,function(){e._reactRootContainer=null,e[hr]=null})}),!0):!1};gn.unstable_batchedUpdates=tf;gn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ec(n))throw Error(Y(200));if(e==null||e._reactInternals===void 0)throw Error(Y(38));return Nc(e,t,n,!1,r)};gn.version="18.2.0-next-9e3b772b8-20220608";function S2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S2)}catch(e){console.error(e)}}S2(),wm.exports=gn;var C2=wm.exports,wg=C2;tu.createRoot=wg.createRoot,tu.hydrateRoot=wg.hydrateRoot;function R8(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,o;for(o=0;o<r.length;o++)l=r[o],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function P8(e,t){if(e==null)return{};var n=R8(e,t),r,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)r=o[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function qu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function F8(e){if(Array.isArray(e))return qu(e)}function M8(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function O8(e,t){if(e){if(typeof e=="string")return qu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qu(e,t)}}function A8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D8(e){return F8(e)||M8(e)||O8(e)||A8()}function ti(e){"@babel/helpers - typeof";return ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ti(e)}function z8(e,t){if(ti(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ti(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function B8(e){var t=z8(e,"string");return ti(t)==="symbol"?t:String(t)}function k2(e,t,n){return t=B8(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zu(){return Zu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zu.apply(this,arguments)}function xg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function fa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xg(Object(n),!0).forEach(function(r){k2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function j8(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var Bd={};function U8(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return Bd[t]||(Bd[t]=j8(e)),Bd[t]}function H8(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=e.filter(function(o){return o!=="token"}),l=U8(r);return l.reduce(function(o,i){return fa(fa({},o),n[i])},t)}function Sg(e){return e.join(" ")}function W8(e,t){var n=0;return function(r){return n+=1,r.map(function(l,o){return _2({node:l,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(o)})})}}function _2(e){var t=e.node,n=e.stylesheet,r=e.style,l=r===void 0?{}:r,o=e.useInlineStyles,i=e.key,s=t.properties,d=t.type,f=t.tagName,m=t.value;if(d==="text")return m;if(f){var b=W8(n,o),S;if(!o)S=fa(fa({},s),{},{className:Sg(s.className)});else{var L=Object.keys(n).reduce(function(w,g){return g.split(".").forEach(function(y){w.includes(y)||w.push(y)}),w},[]),N=s.className&&s.className.includes("token")?["token"]:[],C=s.className&&N.concat(s.className.filter(function(w){return!L.includes(w)}));S=fa(fa({},s),{},{className:Sg(C)||void 0,style:H8(s.className,Object.assign({},s.style,l),n)})}var I=b(t.children);return Tt.createElement(f,Zu({key:i},S),I)}}const V8=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var G8=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function Cg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function Gn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cg(Object(n),!0).forEach(function(r){k2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Y8=/\n/g;function q8(e){return e.match(Y8)}function Z8(e){var t=e.lines,n=e.startingLineNumber,r=e.style;return t.map(function(l,o){var i=o+n;return Tt.createElement("span",{key:"line-".concat(o),className:"react-syntax-highlighter-line-number",style:typeof r=="function"?r(i):r},"".concat(i,`
`))})}function Q8(e){var t=e.codeString,n=e.codeStyle,r=e.containerStyle,l=r===void 0?{float:"left",paddingRight:"10px"}:r,o=e.numberStyle,i=o===void 0?{}:o,s=e.startingLineNumber;return Tt.createElement("code",{style:Object.assign({},n,l)},Z8({lines:t.replace(/\n$/,"").split(`
`),style:i,startingLineNumber:s}))}function K8(e){return"".concat(e.toString().length,".25em")}function $2(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function T2(e,t,n){var r={display:"inline-block",minWidth:K8(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},l=typeof e=="function"?e(t):e,o=Gn(Gn({},r),l);return o}function ws(e){var t=e.children,n=e.lineNumber,r=e.lineNumberStyle,l=e.largestLineNumber,o=e.showInlineLineNumbers,i=e.lineProps,s=i===void 0?{}:i,d=e.className,f=d===void 0?[]:d,m=e.showLineNumbers,b=e.wrapLongLines,S=typeof s=="function"?s(n):s;if(S.className=f,n&&o){var L=T2(r,n,l);t.unshift($2(n,L))}return b&m&&(S.style=Gn(Gn({},S.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:S,children:t}}function E2(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=0;r<e.length;r++){var l=e[r];if(l.type==="text")n.push(ws({children:[l],className:D8(new Set(t))}));else if(l.children){var o=t.concat(l.properties.className);E2(l.children,o).forEach(function(i){return n.push(i)})}}return n}function X8(e,t,n,r,l,o,i,s,d){var f,m=E2(e.value),b=[],S=-1,L=0;function N(T,_){var F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return ws({children:T,lineNumber:_,lineNumberStyle:s,largestLineNumber:i,showInlineLineNumbers:l,lineProps:n,className:F,showLineNumbers:r,wrapLongLines:d})}function C(T,_){if(r&&_&&l){var F=T2(s,_,i);T.unshift($2(_,F))}return T}function I(T,_){var F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||F.length>0?N(T,_,F):C(T,_)}for(var w=function(){var _=m[L],F=_.children[0].value,O=q8(F);if(O){var B=F.split(`
`);B.forEach(function(q,he){var se=r&&b.length+o,Be={type:"text",value:"".concat(q,`
`)};if(he===0){var lt=m.slice(S+1,L).concat(ws({children:[Be],className:_.properties.className})),Ve=I(lt,se);b.push(Ve)}else if(he===B.length-1){var De=m[L+1]&&m[L+1].children&&m[L+1].children[0],Ge={type:"text",value:"".concat(q)};if(De){var j=ws({children:[Ge],className:_.properties.className});m.splice(L+1,0,j)}else{var Z=[Ge],J=I(Z,se,_.properties.className);b.push(J)}}else{var ae=[Be],fe=I(ae,se,_.properties.className);b.push(fe)}}),S=L}L++};L<m.length;)w();if(S!==m.length-1){var g=m.slice(S+1,m.length);if(g&&g.length){var y=r&&b.length+o,v=I(g,y);b.push(v)}}return t?b:(f=[]).concat.apply(f,b)}function J8(e){var t=e.rows,n=e.stylesheet,r=e.useInlineStyles;return t.map(function(l,o){return _2({node:l,stylesheet:n,useInlineStyles:r,key:"code-segement".concat(o)})})}function N2(e){return e&&typeof e.highlightAuto<"u"}function ex(e){var t=e.astGenerator,n=e.language,r=e.code,l=e.defaultCodeValue;if(N2(t)){var o=V8(t,n);return n==="text"?{value:l,language:"text"}:o?t.highlight(n,r):t.highlightAuto(r)}try{return n&&n!=="text"?{value:t.highlight(r,n)}:{value:l}}catch{return{value:l}}}function tx(e,t){return function(r){var l=r.language,o=r.children,i=r.style,s=i===void 0?t:i,d=r.customStyle,f=d===void 0?{}:d,m=r.codeTagProps,b=m===void 0?{className:l?"language-".concat(l):void 0,style:Gn(Gn({},s['code[class*="language-"]']),s['code[class*="language-'.concat(l,'"]')])}:m,S=r.useInlineStyles,L=S===void 0?!0:S,N=r.showLineNumbers,C=N===void 0?!1:N,I=r.showInlineLineNumbers,w=I===void 0?!0:I,g=r.startingLineNumber,y=g===void 0?1:g,v=r.lineNumberContainerStyle,T=r.lineNumberStyle,_=T===void 0?{}:T,F=r.wrapLines,O=r.wrapLongLines,B=O===void 0?!1:O,q=r.lineProps,he=q===void 0?{}:q,se=r.renderer,Be=r.PreTag,lt=Be===void 0?"pre":Be,Ve=r.CodeTag,De=Ve===void 0?"code":Ve,Ge=r.code,j=Ge===void 0?(Array.isArray(o)?o[0]:o)||"":Ge,Z=r.astGenerator,J=P8(r,G8);Z=Z||e;var ae=C?Tt.createElement(Q8,{containerStyle:v,codeStyle:b.style||{},numberStyle:_,startingLineNumber:y,codeString:j}):null,fe=s.hljs||s['pre[class*="language-"]']||{backgroundColor:"#fff"},Dt=N2(Z)?"hljs":"prismjs",pe=L?Object.assign({},J,{style:Object.assign({},fe,f)}):Object.assign({},J,{className:J.className?"".concat(Dt," ").concat(J.className):Dt,style:Object.assign({},f)});if(B?b.style=Gn(Gn({},b.style),{},{whiteSpace:"pre-wrap"}):b.style=Gn(Gn({},b.style),{},{whiteSpace:"pre"}),!Z)return Tt.createElement(lt,pe,ae,Tt.createElement(De,b,j));(F===void 0&&se||B)&&(F=!0),se=se||J8;var et=[{type:"text",value:j}],Ye=ex({astGenerator:Z,language:l,code:j,defaultCodeValue:et});Ye.language===null&&(Ye.value=et);var ht=Ye.value.length+y,Pt=X8(Ye,F,he,C,w,y,ht,_,B);return Tt.createElement(lt,pe,Tt.createElement(De,b,!w&&ae,se({rows:Pt,stylesheet:s,useInlineStyles:L})))}}var nx=lx,rx=Object.prototype.hasOwnProperty;function lx(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)rx.call(n,r)&&(e[r]=n[r])}return e}var L2=I2,df=I2.prototype;df.space=null;df.normal={};df.property={};function I2(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var kg=nx,ax=L2,ox=ix;function ix(e){for(var t=e.length,n=[],r=[],l=-1,o,i;++l<t;)o=e[l],n.push(o.property),r.push(o.normal),i=o.space;return new ax(kg.apply(null,n),kg.apply(null,r),i)}var uf=sx;function sx(e){return e.toLowerCase()}var R2=P2,_n=P2.prototype;_n.space=null;_n.attribute=null;_n.property=null;_n.boolean=!1;_n.booleanish=!1;_n.overloadedBoolean=!1;_n.number=!1;_n.commaSeparated=!1;_n.spaceSeparated=!1;_n.commaOrSpaceSeparated=!1;_n.mustUseProperty=!1;_n.defined=!1;function P2(e,t){this.property=e,this.attribute=t}var Kn={},cx=0;Kn.boolean=Pl();Kn.booleanish=Pl();Kn.overloadedBoolean=Pl();Kn.number=Pl();Kn.spaceSeparated=Pl();Kn.commaSeparated=Pl();Kn.commaOrSpaceSeparated=Pl();function Pl(){return Math.pow(2,++cx)}var F2=R2,_g=Kn,M2=hf;hf.prototype=new F2;hf.prototype.defined=!0;var O2=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],dx=O2.length;function hf(e,t,n,r){var l=-1,o;for($g(this,"space",r),F2.call(this,e,t);++l<dx;)o=O2[l],$g(this,o,(n&_g[o])===_g[o])}function $g(e,t,n){n&&(e[t]=n)}var Tg=uf,ux=L2,hx=M2,pi=fx;function fx(e){var t=e.space,n=e.mustUseProperty||[],r=e.attributes||{},l=e.properties,o=e.transform,i={},s={},d,f;for(d in l)f=new hx(d,o(r,d),l[d],t),n.indexOf(d)!==-1&&(f.mustUseProperty=!0),i[d]=f,s[Tg(d)]=d,s[Tg(f.attribute)]=d;return new ux(i,s,t)}var px=pi,gx=px({space:"xlink",transform:mx,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function mx(e,t){return"xlink:"+t.slice(5).toLowerCase()}var vx=pi,yx=vx({space:"xml",transform:bx,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function bx(e,t){return"xml:"+t.slice(3).toLowerCase()}var wx=xx;function xx(e,t){return t in e?e[t]:t}var Sx=wx,A2=Cx;function Cx(e,t){return Sx(e,t.toLowerCase())}var kx=pi,_x=A2,$x=kx({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:_x,properties:{xmlns:null,xmlnsXLink:null}}),ff=Kn,Tx=pi,Zt=ff.booleanish,yn=ff.number,cl=ff.spaceSeparated,Ex=Tx({transform:Nx,properties:{ariaActiveDescendant:null,ariaAtomic:Zt,ariaAutoComplete:null,ariaBusy:Zt,ariaChecked:Zt,ariaColCount:yn,ariaColIndex:yn,ariaColSpan:yn,ariaControls:cl,ariaCurrent:null,ariaDescribedBy:cl,ariaDetails:null,ariaDisabled:Zt,ariaDropEffect:cl,ariaErrorMessage:null,ariaExpanded:Zt,ariaFlowTo:cl,ariaGrabbed:Zt,ariaHasPopup:null,ariaHidden:Zt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:cl,ariaLevel:yn,ariaLive:null,ariaModal:Zt,ariaMultiLine:Zt,ariaMultiSelectable:Zt,ariaOrientation:null,ariaOwns:cl,ariaPlaceholder:null,ariaPosInSet:yn,ariaPressed:Zt,ariaReadOnly:Zt,ariaRelevant:null,ariaRequired:Zt,ariaRoleDescription:cl,ariaRowCount:yn,ariaRowIndex:yn,ariaRowSpan:yn,ariaSelected:Zt,ariaSetSize:yn,ariaSort:null,ariaValueMax:yn,ariaValueMin:yn,ariaValueNow:yn,ariaValueText:null,role:null}});function Nx(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var Oa=Kn,Lx=pi,Ix=A2,we=Oa.boolean,Rx=Oa.overloadedBoolean,uo=Oa.booleanish,qe=Oa.number,zt=Oa.spaceSeparated,es=Oa.commaSeparated,Px=Lx({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Ix,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:es,acceptCharset:zt,accessKey:zt,action:null,allow:null,allowFullScreen:we,allowPaymentRequest:we,allowUserMedia:we,alt:null,as:null,async:we,autoCapitalize:null,autoComplete:zt,autoFocus:we,autoPlay:we,capture:we,charSet:null,checked:we,cite:null,className:zt,cols:qe,colSpan:null,content:null,contentEditable:uo,controls:we,controlsList:zt,coords:qe|es,crossOrigin:null,data:null,dateTime:null,decoding:null,default:we,defer:we,dir:null,dirName:null,disabled:we,download:Rx,draggable:uo,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:we,formTarget:null,headers:zt,height:qe,hidden:we,high:qe,href:null,hrefLang:null,htmlFor:zt,httpEquiv:zt,id:null,imageSizes:null,imageSrcSet:es,inputMode:null,integrity:null,is:null,isMap:we,itemId:null,itemProp:zt,itemRef:zt,itemScope:we,itemType:zt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:we,low:qe,manifest:null,max:null,maxLength:qe,media:null,method:null,min:null,minLength:qe,multiple:we,muted:we,name:null,nonce:null,noModule:we,noValidate:we,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:we,optimum:qe,pattern:null,ping:zt,placeholder:null,playsInline:we,poster:null,preload:null,readOnly:we,referrerPolicy:null,rel:zt,required:we,reversed:we,rows:qe,rowSpan:qe,sandbox:zt,scope:null,scoped:we,seamless:we,selected:we,shape:null,size:qe,sizes:null,slot:null,span:qe,spellCheck:uo,src:null,srcDoc:null,srcLang:null,srcSet:es,start:qe,step:null,style:null,tabIndex:qe,target:null,title:null,translate:null,type:null,typeMustMatch:we,useMap:null,value:uo,width:qe,wrap:null,align:null,aLink:null,archive:zt,axis:null,background:null,bgColor:null,border:qe,borderColor:null,bottomMargin:qe,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:we,declare:we,event:null,face:null,frame:null,frameBorder:null,hSpace:qe,leftMargin:qe,link:null,longDesc:null,lowSrc:null,marginHeight:qe,marginWidth:qe,noResize:we,noHref:we,noShade:we,noWrap:we,object:null,profile:null,prompt:null,rev:null,rightMargin:qe,rules:null,scheme:null,scrolling:uo,standby:null,summary:null,text:null,topMargin:qe,valueType:null,version:null,vAlign:null,vLink:null,vSpace:qe,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:we,disableRemotePlayback:we,prefix:null,property:null,results:qe,security:null,unselectable:null}}),Fx=ox,Mx=gx,Ox=yx,Ax=$x,Dx=Ex,zx=Px,Bx=Fx([Ox,Mx,Ax,Dx,zx]),jx=uf,Ux=M2,Hx=R2,pf="data",Wx=Yx,Vx=/^data[-\w.:]+$/i,D2=/-[a-z]/g,Gx=/[A-Z]/g;function Yx(e,t){var n=jx(t),r=t,l=Hx;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===pf&&Vx.test(t)&&(t.charAt(4)==="-"?r=qx(t):t=Zx(t),l=Ux),new l(r,t))}function qx(e){var t=e.slice(5).replace(D2,Kx);return pf+t.charAt(0).toUpperCase()+t.slice(1)}function Zx(e){var t=e.slice(4);return D2.test(t)?e:(t=t.replace(Gx,Qx),t.charAt(0)!=="-"&&(t="-"+t),pf+t)}function Qx(e){return"-"+e.toLowerCase()}function Kx(e){return e.charAt(1).toUpperCase()}var Xx=Jx,Eg=/[#.]/g;function Jx(e,t){for(var n=e||"",r=t||"div",l={},o=0,i,s,d;o<n.length;)Eg.lastIndex=o,d=Eg.exec(n),i=n.slice(o,d?d.index:n.length),i&&(s?s==="#"?l.id=i:l.className?l.className.push(i):l.className=[i]:r=i,o+=i.length),d&&(s=d[0],o++);return{type:"element",tagName:r,properties:l,children:[]}}var gf={};gf.parse=n9;gf.stringify=r9;var Ng="",e9=" ",t9=/[ \t\n\r\f]+/g;function n9(e){var t=String(e||Ng).trim();return t===Ng?[]:t.split(t9)}function r9(e){return e.join(e9).trim()}var mf={};mf.parse=l9;mf.stringify=a9;var Qu=",",Lg=" ",bo="";function l9(e){for(var t=[],n=String(e||bo),r=n.indexOf(Qu),l=0,o=!1,i;!o;)r===-1&&(r=n.length,o=!0),i=n.slice(l,r).trim(),(i||!o)&&t.push(i),l=r+1,r=n.indexOf(Qu,l);return t}function a9(e,t){var n=t||{},r=n.padLeft===!1?bo:Lg,l=n.padRight?Lg:bo;return e[e.length-1]===bo&&(e=e.concat(bo)),e.join(l+Qu+r).trim()}var o9=Wx,Ig=uf,i9=Xx,Rg=gf.parse,Pg=mf.parse,s9=d9,c9={}.hasOwnProperty;function d9(e,t,n){var r=n?g9(n):null;return l;function l(i,s){var d=i9(i,t),f=Array.prototype.slice.call(arguments,2),m=d.tagName.toLowerCase(),b;if(d.tagName=r&&c9.call(r,m)?r[m]:m,s&&u9(s,d)&&(f.unshift(s),s=null),s)for(b in s)o(d.properties,b,s[b]);return z2(d.children,f),d.tagName==="template"&&(d.content={type:"root",children:d.children},d.children=[]),d}function o(i,s,d){var f,m,b;d==null||d!==d||(f=o9(e,s),m=f.property,b=d,typeof b=="string"&&(f.spaceSeparated?b=Rg(b):f.commaSeparated?b=Pg(b):f.commaOrSpaceSeparated&&(b=Rg(Pg(b).join(" ")))),m==="style"&&typeof d!="string"&&(b=p9(b)),m==="className"&&i.className&&(b=i.className.concat(b)),i[m]=f9(f,m,b))}}function u9(e,t){return typeof e=="string"||"length"in e||h9(t.tagName,e)}function h9(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function z2(e,t){var n,r;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,r=t.length;++n<r;)z2(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function f9(e,t,n){var r,l,o;if(typeof n!="object"||!("length"in n))return Fg(e,t,n);for(l=n.length,r=-1,o=[];++r<l;)o[r]=Fg(e,t,n[r]);return o}function Fg(e,t,n){var r=n;return e.number||e.positiveNumber?!isNaN(r)&&r!==""&&(r=Number(r)):(e.boolean||e.overloadedBoolean)&&typeof r=="string"&&(r===""||Ig(n)===Ig(t))&&(r=!0),r}function p9(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function g9(e){for(var t=e.length,n=-1,r={},l;++n<t;)l=e[n],r[l.toLowerCase()]=l;return r}var m9=Bx,v9=s9,B2=v9(m9,"div");B2.displayName="html";var y9=B2,b9=y9;const w9="Æ",x9="&",S9="Á",C9="Â",k9="À",_9="Å",$9="Ã",T9="Ä",E9="©",N9="Ç",L9="Ð",I9="É",R9="Ê",P9="È",F9="Ë",M9=">",O9="Í",A9="Î",D9="Ì",z9="Ï",B9="<",j9="Ñ",U9="Ó",H9="Ô",W9="Ò",V9="Ø",G9="Õ",Y9="Ö",q9='"',Z9="®",Q9="Þ",K9="Ú",X9="Û",J9="Ù",e7="Ü",t7="Ý",n7="á",r7="â",l7="´",a7="æ",o7="à",i7="&",s7="å",c7="ã",d7="ä",u7="¦",h7="ç",f7="¸",p7="¢",g7="©",m7="¤",v7="°",y7="÷",b7="é",w7="ê",x7="è",S7="ð",C7="ë",k7="½",_7="¼",$7="¾",T7=">",E7="í",N7="î",L7="¡",I7="ì",R7="¿",P7="ï",F7="«",M7="<",O7="¯",A7="µ",D7="·",z7=" ",B7="¬",j7="ñ",U7="ó",H7="ô",W7="ò",V7="ª",G7="º",Y7="ø",q7="õ",Z7="ö",Q7="¶",K7="±",X7="£",J7='"',eS="»",tS="®",nS="§",rS="­",lS="¹",aS="²",oS="³",iS="ß",sS="þ",cS="×",dS="ú",uS="û",hS="ù",fS="¨",pS="ü",gS="ý",mS="¥",vS="ÿ",yS={AElig:w9,AMP:x9,Aacute:S9,Acirc:C9,Agrave:k9,Aring:_9,Atilde:$9,Auml:T9,COPY:E9,Ccedil:N9,ETH:L9,Eacute:I9,Ecirc:R9,Egrave:P9,Euml:F9,GT:M9,Iacute:O9,Icirc:A9,Igrave:D9,Iuml:z9,LT:B9,Ntilde:j9,Oacute:U9,Ocirc:H9,Ograve:W9,Oslash:V9,Otilde:G9,Ouml:Y9,QUOT:q9,REG:Z9,THORN:Q9,Uacute:K9,Ucirc:X9,Ugrave:J9,Uuml:e7,Yacute:t7,aacute:n7,acirc:r7,acute:l7,aelig:a7,agrave:o7,amp:i7,aring:s7,atilde:c7,auml:d7,brvbar:u7,ccedil:h7,cedil:f7,cent:p7,copy:g7,curren:m7,deg:v7,divide:y7,eacute:b7,ecirc:w7,egrave:x7,eth:S7,euml:C7,frac12:k7,frac14:_7,frac34:$7,gt:T7,iacute:E7,icirc:N7,iexcl:L7,igrave:I7,iquest:R7,iuml:P7,laquo:F7,lt:M7,macr:O7,micro:A7,middot:D7,nbsp:z7,not:B7,ntilde:j7,oacute:U7,ocirc:H7,ograve:W7,ordf:V7,ordm:G7,oslash:Y7,otilde:q7,ouml:Z7,para:Q7,plusmn:K7,pound:X7,quot:J7,raquo:eS,reg:tS,sect:nS,shy:rS,sup1:lS,sup2:aS,sup3:oS,szlig:iS,thorn:sS,times:cS,uacute:dS,ucirc:uS,ugrave:hS,uml:fS,uuml:pS,yacute:gS,yen:mS,yuml:vS},bS={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var j2=wS;function wS(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var xS=SS;function SS(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var CS=kS;function kS(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var _S=CS,$S=j2,TS=ES;function ES(e){return _S(e)||$S(e)}var ts,NS=59,LS=IS;function IS(e){var t="&"+e+";",n;return ts=ts||document.createElement("i"),ts.innerHTML=t,n=ts.textContent,n.charCodeAt(n.length-1)===NS&&e!=="semi"||n===t?!1:n}var Mg=yS,Og=bS,RS=j2,PS=xS,U2=TS,FS=LS,MS=qS,OS={}.hasOwnProperty,Kl=String.fromCharCode,AS=Function.prototype,Ag={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},DS=9,Dg=10,zS=12,BS=32,zg=38,jS=59,US=60,HS=61,WS=35,VS=88,GS=120,YS=65533,Jl="named",vf="hexadecimal",yf="decimal",bf={};bf[vf]=16;bf[yf]=10;var Lc={};Lc[Jl]=U2;Lc[yf]=RS;Lc[vf]=PS;var H2=1,W2=2,V2=3,G2=4,Y2=5,Ku=6,q2=7,Qr={};Qr[H2]="Named character references must be terminated by a semicolon";Qr[W2]="Numeric character references must be terminated by a semicolon";Qr[V2]="Named character references cannot be empty";Qr[G2]="Numeric character references cannot be empty";Qr[Y2]="Named character references must be known";Qr[Ku]="Numeric character references cannot be disallowed";Qr[q2]="Numeric character references cannot be outside the permissible Unicode range";function qS(e,t){var n={},r,l;t||(t={});for(l in Ag)r=t[l],n[l]=r??Ag[l];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),ZS(e,n)}function ZS(e,t){var n=t.additional,r=t.nonTerminated,l=t.text,o=t.reference,i=t.warning,s=t.textContext,d=t.referenceContext,f=t.warningContext,m=t.position,b=t.indent||[],S=e.length,L=0,N=-1,C=m.column||1,I=m.line||1,w="",g=[],y,v,T,_,F,O,B,q,he,se,Be,lt,Ve,De,Ge,j,Z,J,ae;for(typeof n=="string"&&(n=n.charCodeAt(0)),j=fe(),q=i?Dt:AS,L--,S++;++L<S;)if(F===Dg&&(C=b[N]||1),F=e.charCodeAt(L),F===zg){if(B=e.charCodeAt(L+1),B===DS||B===Dg||B===zS||B===BS||B===zg||B===US||B!==B||n&&B===n){w+=Kl(F),C++;continue}for(Ve=L+1,lt=Ve,ae=Ve,B===WS?(ae=++lt,B=e.charCodeAt(ae),B===VS||B===GS?(De=vf,ae=++lt):De=yf):De=Jl,y="",Be="",_="",Ge=Lc[De],ae--;++ae<S&&(B=e.charCodeAt(ae),!!Ge(B));)_+=Kl(B),De===Jl&&OS.call(Mg,_)&&(y=_,Be=Mg[_]);T=e.charCodeAt(ae)===jS,T&&(ae++,v=De===Jl?FS(_):!1,v&&(y=_,Be=v)),J=1+ae-Ve,!T&&!r||(_?De===Jl?(T&&!Be?q(Y2,1):(y!==_&&(ae=lt+y.length,J=1+ae-lt,T=!1),T||(he=y?H2:V2,t.attribute?(B=e.charCodeAt(ae),B===HS?(q(he,J),Be=null):U2(B)?Be=null:q(he,J)):q(he,J))),O=Be):(T||q(W2,J),O=parseInt(_,bf[De]),QS(O)?(q(q2,J),O=Kl(YS)):O in Og?(q(Ku,J),O=Og[O]):(se="",KS(O)&&q(Ku,J),O>65535&&(O-=65536,se+=Kl(O>>>10|55296),O=56320|O&1023),O=se+Kl(O))):De!==Jl&&q(G2,J)),O?(pe(),j=fe(),L=ae-1,C+=ae-Ve+1,g.push(O),Z=fe(),Z.offset++,o&&o.call(d,O,{start:j,end:Z},e.slice(Ve-1,ae)),j=Z):(_=e.slice(Ve-1,ae),w+=_,C+=_.length,L=ae-1)}else F===10&&(I++,N++,C=0),F===F?(w+=Kl(F),C++):pe();return g.join("");function fe(){return{line:I,column:C,offset:L+(m.offset||0)}}function Dt(et,Ye){var ht=fe();ht.column+=Ye,ht.offset+=Ye,i.call(f,Qr[et],ht,et)}function pe(){w&&(g.push(w),l&&l.call(s,w,{start:j,end:fe()}),w="")}}function QS(e){return e>=55296&&e<=57343||e>1114111}function KS(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var Z2={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var l=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,i={},s={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function g(y){return y instanceof d?new d(y.type,g(y.content),y.alias):Array.isArray(y)?y.map(g):y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++o}),g.__id},clone:function g(y,v){v=v||{};var T,_;switch(s.util.type(y)){case"Object":if(_=s.util.objId(y),v[_])return v[_];T={},v[_]=T;for(var F in y)y.hasOwnProperty(F)&&(T[F]=g(y[F],v));return T;case"Array":return _=s.util.objId(y),v[_]?v[_]:(T=[],v[_]=T,y.forEach(function(O,B){T[B]=g(O,v)}),T);default:return y}},getLanguage:function(g){for(;g;){var y=l.exec(g.className);if(y)return y[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,y){g.className=g.className.replace(RegExp(l,"gi"),""),g.classList.add("language-"+y)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(T){var g=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(T.stack)||[])[1];if(g){var y=document.getElementsByTagName("script");for(var v in y)if(y[v].src==g)return y[v]}return null}},isActive:function(g,y,v){for(var T="no-"+y;g;){var _=g.classList;if(_.contains(y))return!0;if(_.contains(T))return!1;g=g.parentElement}return!!v}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(g,y){var v=s.util.clone(s.languages[g]);for(var T in y)v[T]=y[T];return v},insertBefore:function(g,y,v,T){T=T||s.languages;var _=T[g],F={};for(var O in _)if(_.hasOwnProperty(O)){if(O==y)for(var B in v)v.hasOwnProperty(B)&&(F[B]=v[B]);v.hasOwnProperty(O)||(F[O]=_[O])}var q=T[g];return T[g]=F,s.languages.DFS(s.languages,function(he,se){se===q&&he!=g&&(this[he]=F)}),F},DFS:function g(y,v,T,_){_=_||{};var F=s.util.objId;for(var O in y)if(y.hasOwnProperty(O)){v.call(y,O,y[O],T||O);var B=y[O],q=s.util.type(B);q==="Object"&&!_[F(B)]?(_[F(B)]=!0,g(B,v,null,_)):q==="Array"&&!_[F(B)]&&(_[F(B)]=!0,g(B,v,O,_))}}},plugins:{},highlightAll:function(g,y){s.highlightAllUnder(document,g,y)},highlightAllUnder:function(g,y,v){var T={callback:v,container:g,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",T),T.elements=Array.prototype.slice.apply(T.container.querySelectorAll(T.selector)),s.hooks.run("before-all-elements-highlight",T);for(var _=0,F;F=T.elements[_++];)s.highlightElement(F,y===!0,T.callback)},highlightElement:function(g,y,v){var T=s.util.getLanguage(g),_=s.languages[T];s.util.setLanguage(g,T);var F=g.parentElement;F&&F.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(F,T);var O=g.textContent,B={element:g,language:T,grammar:_,code:O};function q(se){B.highlightedCode=se,s.hooks.run("before-insert",B),B.element.innerHTML=B.highlightedCode,s.hooks.run("after-highlight",B),s.hooks.run("complete",B),v&&v.call(B.element)}if(s.hooks.run("before-sanity-check",B),F=B.element.parentElement,F&&F.nodeName.toLowerCase()==="pre"&&!F.hasAttribute("tabindex")&&F.setAttribute("tabindex","0"),!B.code){s.hooks.run("complete",B),v&&v.call(B.element);return}if(s.hooks.run("before-highlight",B),!B.grammar){q(s.util.encode(B.code));return}if(y&&r.Worker){var he=new Worker(s.filename);he.onmessage=function(se){q(se.data)},he.postMessage(JSON.stringify({language:B.language,code:B.code,immediateClose:!0}))}else q(s.highlight(B.code,B.grammar,B.language))},highlight:function(g,y,v){var T={code:g,grammar:y,language:v};if(s.hooks.run("before-tokenize",T),!T.grammar)throw new Error('The language "'+T.language+'" has no grammar.');return T.tokens=s.tokenize(T.code,T.grammar),s.hooks.run("after-tokenize",T),d.stringify(s.util.encode(T.tokens),T.language)},tokenize:function(g,y){var v=y.rest;if(v){for(var T in v)y[T]=v[T];delete y.rest}var _=new b;return S(_,_.head,g),m(g,_,y,_.head,0),N(_)},hooks:{all:{},add:function(g,y){var v=s.hooks.all;v[g]=v[g]||[],v[g].push(y)},run:function(g,y){var v=s.hooks.all[g];if(!(!v||!v.length))for(var T=0,_;_=v[T++];)_(y)}},Token:d};r.Prism=s;function d(g,y,v,T){this.type=g,this.content=y,this.alias=v,this.length=(T||"").length|0}d.stringify=function g(y,v){if(typeof y=="string")return y;if(Array.isArray(y)){var T="";return y.forEach(function(q){T+=g(q,v)}),T}var _={type:y.type,content:g(y.content,v),tag:"span",classes:["token",y.type],attributes:{},language:v},F=y.alias;F&&(Array.isArray(F)?Array.prototype.push.apply(_.classes,F):_.classes.push(F)),s.hooks.run("wrap",_);var O="";for(var B in _.attributes)O+=" "+B+'="'+(_.attributes[B]||"").replace(/"/g,"&quot;")+'"';return"<"+_.tag+' class="'+_.classes.join(" ")+'"'+O+">"+_.content+"</"+_.tag+">"};function f(g,y,v,T){g.lastIndex=y;var _=g.exec(v);if(_&&T&&_[1]){var F=_[1].length;_.index+=F,_[0]=_[0].slice(F)}return _}function m(g,y,v,T,_,F){for(var O in v)if(!(!v.hasOwnProperty(O)||!v[O])){var B=v[O];B=Array.isArray(B)?B:[B];for(var q=0;q<B.length;++q){if(F&&F.cause==O+","+q)return;var he=B[q],se=he.inside,Be=!!he.lookbehind,lt=!!he.greedy,Ve=he.alias;if(lt&&!he.pattern.global){var De=he.pattern.toString().match(/[imsuy]*$/)[0];he.pattern=RegExp(he.pattern.source,De+"g")}for(var Ge=he.pattern||he,j=T.next,Z=_;j!==y.tail&&!(F&&Z>=F.reach);Z+=j.value.length,j=j.next){var J=j.value;if(y.length>g.length)return;if(!(J instanceof d)){var ae=1,fe;if(lt){if(fe=f(Ge,Z,g,Be),!fe||fe.index>=g.length)break;var Ye=fe.index,Dt=fe.index+fe[0].length,pe=Z;for(pe+=j.value.length;Ye>=pe;)j=j.next,pe+=j.value.length;if(pe-=j.value.length,Z=pe,j.value instanceof d)continue;for(var et=j;et!==y.tail&&(pe<Dt||typeof et.value=="string");et=et.next)ae++,pe+=et.value.length;ae--,J=g.slice(Z,pe),fe.index-=Z}else if(fe=f(Ge,0,J,Be),!fe)continue;var Ye=fe.index,ht=fe[0],Pt=J.slice(0,Ye),Xr=J.slice(Ye+ht.length),Jr=Z+J.length;F&&Jr>F.reach&&(F.reach=Jr);var Xn=j.prev;Pt&&(Xn=S(y,Xn,Pt),Z+=Pt.length),L(y,Xn,ae);var ja=new d(O,se?s.tokenize(ht,se):ht,Ve,ht);if(j=S(y,Xn,ja),Xr&&S(y,j,Xr),ae>1){var el={cause:O+","+q,reach:Jr};m(g,y,v,j.prev,Z,el),F&&el.reach>F.reach&&(F.reach=el.reach)}}}}}}function b(){var g={value:null,prev:null,next:null},y={value:null,prev:g,next:null};g.next=y,this.head=g,this.tail=y,this.length=0}function S(g,y,v){var T=y.next,_={value:v,prev:y,next:T};return y.next=_,T.prev=_,g.length++,_}function L(g,y,v){for(var T=y.next,_=0;_<v&&T!==g.tail;_++)T=T.next;y.next=T,T.prev=y,g.length-=_}function N(g){for(var y=[],v=g.head.next;v!==g.tail;)y.push(v.value),v=v.next;return y}if(!r.document)return r.addEventListener&&(s.disableWorkerMessageHandler||r.addEventListener("message",function(g){var y=JSON.parse(g.data),v=y.language,T=y.code,_=y.immediateClose;r.postMessage(s.highlight(T,s.languages[v],v)),_&&r.close()},!1)),s;var C=s.util.currentScript();C&&(s.filename=C.src,C.hasAttribute("data-manual")&&(s.manual=!0));function I(){s.manual||s.highlightAll()}if(!s.manual){var w=document.readyState;w==="loading"||w==="interactive"&&C&&C.defer?document.addEventListener("DOMContentLoaded",I):window.requestAnimationFrame?window.requestAnimationFrame(I):window.setTimeout(I,16)}return s}(t);e.exports&&(e.exports=n),typeof Ao<"u"&&(Ao.Prism=n)})(Z2);var XS=Z2.exports,JS=wf;wf.displayName="markup";wf.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function wf(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,r){var l={};l["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[r]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};o["language-"+r]={pattern:/[\s\S]+/,inside:e.languages[r]};var i={};i[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:o},e.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var Q2=xf;xf.displayName="css";xf.aliases=[];function xf(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var r=t.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(e)}const eC=Gr(Q2);var tC=Sf;Sf.displayName="clike";Sf.aliases=[];function Sf(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var nC=Cf;Cf.displayName="javascript";Cf.aliases=["js"];function Cf(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var wo=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof Ao=="object"?Ao:{},rC=bC();wo.Prism={manual:!0,disableWorkerMessageHandler:!0};var lC=b9,aC=MS,K2=XS,oC=JS,iC=Q2,sC=tC,cC=nC;rC();var kf={}.hasOwnProperty;function X2(){}X2.prototype=K2;var ut=new X2,dC=ut;ut.highlight=hC;ut.register=gi;ut.alias=uC;ut.registered=fC;ut.listLanguages=pC;gi(oC);gi(iC);gi(sC);gi(cC);ut.util.encode=vC;ut.Token.stringify=gC;function gi(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");ut.languages[e.displayName]===void 0&&e(ut)}function uC(e,t){var n=ut.languages,r=e,l,o,i,s;t&&(r={},r[e]=t);for(l in r)for(o=r[l],o=typeof o=="string"?[o]:o,i=o.length,s=-1;++s<i;)n[o[s]]=n[l]}function hC(e,t){var n=K2.highlight,r;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(ut.util.type(t)==="Object")r=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(kf.call(ut.languages,t))r=ut.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,r,t)}function fC(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return kf.call(ut.languages,e)}function pC(){var e=ut.languages,t=[],n;for(n in e)kf.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function gC(e,t,n){var r;return typeof e=="string"?{type:"text",value:e}:ut.util.type(e)==="Array"?mC(e,t):(r={type:e.type,content:ut.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(r.classes=r.classes.concat(e.alias)),ut.hooks.run("wrap",r),lC(r.tag+"."+r.classes.join("."),yC(r.attributes),r.content))}function mC(e,t){for(var n=[],r=e.length,l=-1,o;++l<r;)o=e[l],o!==""&&o!==null&&o!==void 0&&n.push(o);for(l=-1,r=n.length;++l<r;)o=n[l],n[l]=ut.Token.stringify(o,t,n);return n}function vC(e){return e}function yC(e){var t;for(t in e)e[t]=aC(e[t]);return e}function bC(){var e="Prism"in wo,t=e?wo.Prism:void 0;return n;function n(){e?wo.Prism=t:delete wo.Prism,e=void 0,t=void 0}}const _f=Gr(dC);var $f=tx(_f,{});$f.registerLanguage=function(e,t){return _f.register(t)};$f.alias=function(e,t){return _f.alias(e,t)};const mi=$f;var wC=Tf;Tf.displayName="bash";Tf.aliases=["shell"];function Tf(e){(function(t){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},l={bash:r,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:l},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:l},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:l.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:l.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=t.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=l.variable[1].inside,s=0;s<o.length;s++)i[o[s]]=t.languages.bash[o[s]];t.languages.shell=t.languages.bash})(e)}const xC=Gr(wC);var SC=Ef;Ef.displayName="jsx";Ef.aliases=[];function Ef(e){(function(t){var n=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,l=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,o=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function i(f,m){return f=f.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return l}).replace(/<SPREAD>/g,function(){return o}),RegExp(f,m)}o=i(o).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:i(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:i(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var s=function(f){return f?typeof f=="string"?f:typeof f.content=="string"?f.content:f.content.map(s).join(""):""},d=function(f){for(var m=[],b=0;b<f.length;b++){var S=f[b],L=!1;if(typeof S!="string"&&(S.type==="tag"&&S.content[0]&&S.content[0].type==="tag"?S.content[0].content[0].content==="</"?m.length>0&&m[m.length-1].tagName===s(S.content[0].content[1])&&m.pop():S.content[S.content.length-1].content==="/>"||m.push({tagName:s(S.content[0].content[1]),openedBraces:0}):m.length>0&&S.type==="punctuation"&&S.content==="{"?m[m.length-1].openedBraces++:m.length>0&&m[m.length-1].openedBraces>0&&S.type==="punctuation"&&S.content==="}"?m[m.length-1].openedBraces--:L=!0),(L||typeof S=="string")&&m.length>0&&m[m.length-1].openedBraces===0){var N=s(S);b<f.length-1&&(typeof f[b+1]=="string"||f[b+1].type==="plain-text")&&(N+=s(f[b+1]),f.splice(b+1,1)),b>0&&(typeof f[b-1]=="string"||f[b-1].type==="plain-text")&&(N=s(f[b-1])+N,f.splice(b-1,1),b--),f[b]=new t.Token("plain-text",N,null,N)}S.content&&typeof S.content!="string"&&d(S.content)}};t.hooks.add("after-tokenize",function(f){f.language!=="jsx"&&f.language!=="tsx"||d(f.tokens)})})(e)}const CC=Gr(SC);var kC=Nf;Nf.displayName="scss";Nf.aliases=[];function Nf(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const _C=Gr(kC);function J2(e){return typeof e=="string"}function $C(e){return Array.isArray(e)}function TC(e){return e===void 0}function EC(e){return e===null}function $t(e){return!(TC(e)||EC(e))}function NC(e){return!$t(e)}function LC(...e){throw new Error(e.join(""))}function IC(){return Intl.DateTimeFormat().resolvedOptions().locale}IC();const vi=(e,t,n=1)=>{const r=t<e?-Math.abs(n):n;return Array(1+Math.floor(Math.abs((t-e)/n))).fill(e).map((l,o)=>l+o*r)};function ey(e){return NC(e)?[]:J2(e)?e.length?e.split(/,\s*|\s+/):[]:$C(e)?e:[e]}function RC(e){return new Promise(t=>setTimeout(t,e))}mi.registerLanguage("jsx",CC);mi.registerLanguage("css",eC);mi.registerLanguage("scss",_C);mi.registerLanguage("bash",xC);const Je=({code:e,language:t="jsx",caption:n,expand:r=!1,fixed:l=r,className:o=""})=>{const[i,s]=U.useState(!1),[d,f]=U.useState(r),m=()=>{navigator.clipboard.writeText(e),s(!0),RC(2e3).then(()=>s(!1))};return h("div",{className:`codeblock ${o} ${d?"expanded":""} ${l?"fixed-open":"expandable"}`,children:[!!n&&a("h4",{className:"caption",children:n}),h("div",{className:"controls",children:[a("div",{className:"expand",onClick:()=>f(!d),children:d?"Compress":"Expand"}),a("div",{className:`clipboard ${i?"copied":""}`,onClick:m,children:i?"Copied":"Copy"})]}),a(mi,{language:t,showLineNumbers:!0,useInlineStyles:!1,customStyle:{},children:PC(e)})]})},PC=e=>e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/\/\*\s*REAL\s*\*\/.*?\/\*\s*UNREAL\s*\*\//g,"").replaceAll(/{\/\*\s*(UN?)PRETEND\s*\*\/}/g,"").replace(/\n+$/,""),FC=`// define your brand hue and color name
$purple-hue:   295;
$brand-hue:    $purple-hue;
$brand-color:  'purple';

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,MC=`// define your own brand colors...
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
`,AC=`// define the colors that you want to use...
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
 */function Re(){return Re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Re.apply(this,arguments)}var ct;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ct||(ct={}));const Bg="popstate";function DC(e){e===void 0&&(e={});function t(r,l){let{pathname:o,search:i,hash:s}=r.location;return ni("",{pathname:o,search:i,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:Ll(l)}return BC(t,n,null,e)}function Ce(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ia(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function zC(){return Math.random().toString(36).substr(2,8)}function jg(e,t){return{usr:e.state,key:e.key,idx:t}}function ni(e,t,n,r){return n===void 0&&(n=null),Re({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?yr(t):t,{state:n,key:t&&t.key||r||zC()})}function Ll(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function yr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function BC(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:o=!1}=r,i=l.history,s=ct.Pop,d=null,f=m();f==null&&(f=0,i.replaceState(Re({},i.state,{idx:f}),""));function m(){return(i.state||{idx:null}).idx}function b(){s=ct.Pop;let I=m(),w=I==null?null:I-f;f=I,d&&d({action:s,location:C.location,delta:w})}function S(I,w){s=ct.Push;let g=ni(C.location,I,w);n&&n(g,I),f=m()+1;let y=jg(g,f),v=C.createHref(g);try{i.pushState(y,"",v)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;l.location.assign(v)}o&&d&&d({action:s,location:C.location,delta:1})}function L(I,w){s=ct.Replace;let g=ni(C.location,I,w);n&&n(g,I),f=m();let y=jg(g,f),v=C.createHref(g);i.replaceState(y,"",v),o&&d&&d({action:s,location:C.location,delta:0})}function N(I){let w=l.location.origin!=="null"?l.location.origin:l.location.href,g=typeof I=="string"?I:Ll(I);return Ce(w,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,w)}let C={get action(){return s},get location(){return e(l,i)},listen(I){if(d)throw new Error("A history only accepts one active listener");return l.addEventListener(Bg,b),d=I,()=>{l.removeEventListener(Bg,b),d=null}},createHref(I){return t(l,I)},createURL:N,encodeLocation(I){let w=N(I);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:S,replace:L,go(I){return i.go(I)}};return C}var gt;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(gt||(gt={}));const jC=new Set(["lazy","caseSensitive","path","id","index","children"]);function UC(e){return e.index===!0}function Xu(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((l,o)=>{let i=[...n,o],s=typeof l.id=="string"?l.id:i.join("-");if(Ce(l.index!==!0||!l.children,"Cannot specify children on an index route"),Ce(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),UC(l)){let d=Re({},l,t(l),{id:s});return r[s]=d,d}else{let d=Re({},l,t(l),{id:s,children:void 0});return r[s]=d,l.children&&(d.children=Xu(l.children,t,i,r)),d}})}function pa(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?yr(t):t,l=Aa(r.pathname||"/",n);if(l==null)return null;let o=ty(e);HC(o);let i=null;for(let s=0;i==null&&s<o.length;++s)i=XC(o[s],tk(l));return i}function ty(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(o,i,s)=>{let d={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};d.relativePath.startsWith("/")&&(Ce(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let f=dr([r,d.relativePath]),m=n.concat(d);o.children&&o.children.length>0&&(Ce(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),ty(o.children,t,m,f)),!(o.path==null&&!o.index)&&t.push({path:f,score:QC(f,o.index),routesMeta:m})};return e.forEach((o,i)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))l(o,i);else for(let d of ny(o.path))l(o,i,d)}),t}function ny(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let i=ny(r.join("/")),s=[];return s.push(...i.map(d=>d===""?o:[o,d].join("/"))),l&&s.push(...i),s.map(d=>e.startsWith("/")&&d===""?"/":d)}function HC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:KC(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const WC=/^:\w+$/,VC=3,GC=2,YC=1,qC=10,ZC=-2,Ug=e=>e==="*";function QC(e,t){let n=e.split("/"),r=n.length;return n.some(Ug)&&(r+=ZC),t&&(r+=GC),n.filter(l=>!Ug(l)).reduce((l,o)=>l+(WC.test(o)?VC:o===""?YC:qC),r)}function KC(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function XC(e,t){let{routesMeta:n}=e,r={},l="/",o=[];for(let i=0;i<n.length;++i){let s=n[i],d=i===n.length-1,f=l==="/"?t:t.slice(l.length)||"/",m=JC({path:s.relativePath,caseSensitive:s.caseSensitive,end:d},f);if(!m)return null;Object.assign(r,m.params);let b=s.route;o.push({params:r,pathname:dr([l,m.pathname]),pathnameBase:ak(dr([l,m.pathnameBase])),route:b}),m.pathnameBase!=="/"&&(l=dr([l,m.pathnameBase]))}return o}function JC(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ek(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let o=l[0],i=o.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((f,m,b)=>{if(m==="*"){let S=s[b]||"";i=o.slice(0,o.length-S.length).replace(/(.)\/+$/,"$1")}return f[m]=nk(s[b]||"",m),f},{}),pathname:o,pathnameBase:i,pattern:e}}function ek(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ia(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function tk(e){try{return decodeURI(e)}catch(t){return Ia(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function nk(e,t){try{return decodeURIComponent(e)}catch(n){return Ia(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Aa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function rk(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?yr(e):e;return{pathname:n?n.startsWith("/")?n:lk(n,t):t,search:ok(r),hash:ik(l)}}function lk(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function jd(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ic(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Lf(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=yr(e):(l=Re({},e),Ce(!l.pathname||!l.pathname.includes("?"),jd("?","pathname","search",l)),Ce(!l.pathname||!l.pathname.includes("#"),jd("#","pathname","hash",l)),Ce(!l.search||!l.search.includes("#"),jd("#","search","hash",l)));let o=e===""||l.pathname==="",i=o?"/":l.pathname,s;if(r||i==null)s=n;else{let b=t.length-1;if(i.startsWith("..")){let S=i.split("/");for(;S[0]==="..";)S.shift(),b-=1;l.pathname=S.join("/")}s=b>=0?t[b]:"/"}let d=rk(l,s),f=i&&i!=="/"&&i.endsWith("/"),m=(o||i===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(f||m)&&(d.pathname+="/"),d}const dr=e=>e.join("/").replace(/\/\/+/g,"/"),ak=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ok=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ik=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class If{constructor(t,n,r,l){l===void 0&&(l=!1),this.status=t,this.statusText=n||"",this.internal=l,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function ry(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ly=["post","put","patch","delete"],sk=new Set(ly),ck=["get",...ly],dk=new Set(ck),uk=new Set([301,302,303,307,308]),hk=new Set([307,308]),Ud={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fk={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Hg={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},ay=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pk=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function gk(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;Ce(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let l;if(e.mapRouteProperties)l=e.mapRouteProperties;else if(e.detectErrorBoundary){let M=e.detectErrorBoundary;l=A=>({hasErrorBoundary:M(A)})}else l=pk;let o={},i=Xu(e.routes,l,void 0,o),s,d=e.basename||"/",f=Re({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),m=null,b=new Set,S=null,L=null,N=null,C=e.hydrationData!=null,I=pa(i,e.history.location,d),w=null;if(I==null){let M=Pn(404,{pathname:e.history.location.pathname}),{matches:A,route:W}=Qg(i);I=A,w={[W.id]:M}}let g=!I.some(M=>M.route.lazy)&&(!I.some(M=>M.route.loader)||e.hydrationData!=null),y,v={historyAction:e.history.action,location:e.history.location,matches:I,initialized:g,navigation:Ud,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||w,fetchers:new Map,blockers:new Map},T=ct.Pop,_=!1,F,O=!1,B=!1,q=[],he=[],se=new Map,Be=0,lt=-1,Ve=new Map,De=new Set,Ge=new Map,j=new Map,Z=new Map,J=!1;function ae(){return m=e.history.listen(M=>{let{action:A,location:W,delta:Q}=M;if(J){J=!1;return}Ia(Z.size===0||Q!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ie=qa({currentLocation:v.location,nextLocation:W,historyAction:A});if(ie&&Q!=null){J=!0,e.history.go(Q*-1),rl(ie,{state:"blocked",location:W,proceed(){rl(ie,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),e.history.go(Q)},reset(){br(ie),pe({blockers:new Map(y.state.blockers)})}});return}return Pt(A,W)}),v.initialized||Pt(ct.Pop,v.location),y}function fe(){m&&m(),b.clear(),F&&F.abort(),v.fetchers.forEach((M,A)=>Wa(A)),v.blockers.forEach((M,A)=>br(A))}function Dt(M){return b.add(M),()=>b.delete(M)}function pe(M){v=Re({},v,M),b.forEach(A=>A(v))}function et(M,A){var W,Q;let ie=v.actionData!=null&&v.navigation.formMethod!=null&&ar(v.navigation.formMethod)&&v.navigation.state==="loading"&&((W=M.state)==null?void 0:W._isRedirect)!==!0,ce;A.actionData?Object.keys(A.actionData).length>0?ce=A.actionData:ce=null:ie?ce=v.actionData:ce=null;let de=A.loaderData?Zg(v.loaderData,A.loaderData,A.matches||[],A.errors):v.loaderData;for(let[le]of Z)br(le);let ue=_===!0||v.navigation.formMethod!=null&&ar(v.navigation.formMethod)&&((Q=M.state)==null?void 0:Q._isRedirect)!==!0;s&&(i=s,s=void 0),pe(Re({},A,{actionData:ce,loaderData:de,historyAction:T,location:M,initialized:!0,navigation:Ud,revalidation:"idle",restoreScrollPosition:$i(M,A.matches||v.matches),preventScrollReset:ue,blockers:new Map(v.blockers)})),O||T===ct.Pop||(T===ct.Push?e.history.push(M,M.state):T===ct.Replace&&e.history.replace(M,M.state)),T=ct.Pop,_=!1,O=!1,B=!1,q=[],he=[]}async function Ye(M,A){if(typeof M=="number"){e.history.go(M);return}let W=Ju(v.location,v.matches,d,f.v7_prependBasename,M,A==null?void 0:A.fromRouteId,A==null?void 0:A.relative),{path:Q,submission:ie,error:ce}=Wg(f.v7_normalizeFormMethod,!1,W,A),de=v.location,ue=ni(v.location,Q,A&&A.state);ue=Re({},ue,e.history.encodeLocation(ue));let le=A&&A.replace!=null?A.replace:void 0,$e=ct.Push;le===!0?$e=ct.Replace:le===!1||ie!=null&&ar(ie.formMethod)&&ie.formAction===v.location.pathname+v.location.search&&($e=ct.Replace);let Pe=A&&"preventScrollReset"in A?A.preventScrollReset===!0:void 0,yt=qa({currentLocation:de,nextLocation:ue,historyAction:$e});if(yt){rl(yt,{state:"blocked",location:ue,proceed(){rl(yt,{state:"proceeding",proceed:void 0,reset:void 0,location:ue}),Ye(M,A)},reset(){br(yt),pe({blockers:new Map(v.blockers)})}});return}return await Pt($e,ue,{submission:ie,pendingError:ce,preventScrollReset:Pe,replace:A&&A.replace})}function ht(){if(Ha(),pe({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){Pt(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}Pt(T||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function Pt(M,A,W){F&&F.abort(),F=null,T=M,O=(W&&W.startUninterruptedRevalidation)===!0,_i(v.location,v.matches),_=(W&&W.preventScrollReset)===!0;let Q=s||i,ie=W&&W.overrideNavigation,ce=pa(Q,A,d);if(!ce){let it=Pn(404,{pathname:A.pathname}),{matches:ft,route:vn}=Qg(Q);Ol(),et(A,{matches:ft,loaderData:{},errors:{[vn.id]:it}});return}if(v.initialized&&!B&&wk(v.location,A)&&!(W&&W.submission&&ar(W.submission.formMethod))){et(A,{matches:ce});return}F=new AbortController;let de=fo(e.history,A,F.signal,W&&W.submission),ue,le;if(W&&W.pendingError)le={[ga(ce).route.id]:W.pendingError};else if(W&&W.submission&&ar(W.submission.formMethod)){let it=await Xr(de,A,W.submission,ce,{replace:W.replace});if(it.shortCircuited)return;ue=it.pendingActionData,le=it.pendingActionError,ie=Re({state:"loading",location:A},W.submission),de=new Request(de.url,{signal:de.signal})}let{shortCircuited:$e,loaderData:Pe,errors:yt}=await Jr(de,A,ce,ie,W&&W.submission,W&&W.fetcherSubmission,W&&W.replace,ue,le);$e||(F=null,et(A,Re({matches:ce},ue?{actionData:ue}:{},{loaderData:Pe,errors:yt})))}async function Xr(M,A,W,Q,ie){Ha();let ce=Re({state:"submitting",location:A},W);pe({navigation:ce});let de,ue=eh(Q,A);if(!ue.route.action&&!ue.route.lazy)de={type:gt.error,error:Pn(405,{method:M.method,pathname:A.pathname,routeId:ue.route.id})};else if(de=await ho("action",M,ue,Q,o,l,d),M.signal.aborted)return{shortCircuited:!0};if(Sa(de)){let le;return ie&&ie.replace!=null?le=ie.replace:le=de.location===v.location.pathname+v.location.search,await tl(v,de,{submission:W,replace:le}),{shortCircuited:!0}}if(Fo(de)){let le=ga(Q,ue.route.id);return(ie&&ie.replace)!==!0&&(T=ct.Push),{pendingActionData:{},pendingActionError:{[le.route.id]:de.error}}}if(bl(de))throw Pn(400,{type:"defer-action"});return{pendingActionData:{[ue.route.id]:de.data}}}async function Jr(M,A,W,Q,ie,ce,de,ue,le){let $e=Q;$e||($e=Re({state:"loading",location:A,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ie));let Pe=ie||ce?ie||ce:$e.formMethod&&$e.formAction&&$e.formData&&$e.formEncType?{formMethod:$e.formMethod,formAction:$e.formAction,formData:$e.formData,formEncType:$e.formEncType}:void 0,yt=s||i,[it,ft]=Vg(e.history,v,W,Pe,A,B,q,he,Ge,yt,d,ue,le);if(Ol(ze=>!(W&&W.some(Yt=>Yt.route.id===ze))||it&&it.some(Yt=>Yt.route.id===ze)),it.length===0&&ft.length===0){let ze=Ga();return et(A,Re({matches:W,loaderData:{},errors:le||null},ue?{actionData:ue}:{},ze?{fetchers:new Map(v.fetchers)}:{})),{shortCircuited:!0}}if(!O){ft.forEach(Yt=>{let er=v.fetchers.get(Yt.key),pt={state:"loading",data:er&&er.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(Yt.key,pt)});let ze=ue||v.actionData;pe(Re({navigation:$e},ze?Object.keys(ze).length===0?{actionData:null}:{actionData:ze}:{},ft.length>0?{fetchers:new Map(v.fetchers)}:{}))}lt=++Be,ft.forEach(ze=>{ze.controller&&se.set(ze.key,ze.controller)});let vn=()=>ft.forEach(ze=>Jn(ze.key));F&&F.signal.addEventListener("abort",vn);let{results:ll,loaderResults:Za,fetcherResults:Al}=await Si(v.matches,W,it,ft,M);if(M.signal.aborted)return{shortCircuited:!0};F&&F.signal.removeEventListener("abort",vn),ft.forEach(ze=>se.delete(ze.key));let $n=Kg(ll);if($n)return await tl(v,$n,{replace:de}),{shortCircuited:!0};let{loaderData:al,errors:Dl}=qg(v,W,it,Za,le,ft,Al,j);j.forEach((ze,Yt)=>{ze.subscribe(er=>{(er||ze.done)&&j.delete(Yt)})});let Qa=Ga(),Ka=Ya(lt),zl=Qa||Ka||ft.length>0;return Re({loaderData:al,errors:Dl},zl?{fetchers:new Map(v.fetchers)}:{})}function Xn(M){return v.fetchers.get(M)||fk}function ja(M,A,W,Q){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");se.has(M)&&Jn(M);let ie=s||i,ce=Ju(v.location,v.matches,d,f.v7_prependBasename,W,A,Q==null?void 0:Q.relative),de=pa(ie,ce,d);if(!de){nl(M,A,Pn(404,{pathname:ce}));return}let{path:ue,submission:le}=Wg(f.v7_normalizeFormMethod,!0,ce,Q),$e=eh(de,ue);if(_=(Q&&Q.preventScrollReset)===!0,le&&ar(le.formMethod)){el(M,A,ue,$e,de,le);return}Ge.set(M,{routeId:A,path:ue}),Ua(M,A,ue,$e,de,le)}async function el(M,A,W,Q,ie,ce){if(Ha(),Ge.delete(M),!Q.route.action&&!Q.route.lazy){let pt=Pn(405,{method:ce.formMethod,pathname:W,routeId:A});nl(M,A,pt);return}let de=v.fetchers.get(M),ue=Re({state:"submitting"},ce,{data:de&&de.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(M,ue),pe({fetchers:new Map(v.fetchers)});let le=new AbortController,$e=fo(e.history,W,le.signal,ce);se.set(M,le);let Pe=await ho("action",$e,Q,ie,o,l,d);if($e.signal.aborted){se.get(M)===le&&se.delete(M);return}if(Sa(Pe)){se.delete(M),De.add(M);let pt=Re({state:"loading"},ce,{data:void 0," _hasFetcherDoneAnything ":!0});return v.fetchers.set(M,pt),pe({fetchers:new Map(v.fetchers)}),tl(v,Pe,{submission:ce,isFetchActionRedirect:!0})}if(Fo(Pe)){nl(M,A,Pe.error);return}if(bl(Pe))throw Pn(400,{type:"defer-action"});let yt=v.navigation.location||v.location,it=fo(e.history,yt,le.signal),ft=s||i,vn=v.navigation.state!=="idle"?pa(ft,v.navigation.location,d):v.matches;Ce(vn,"Didn't find any matches after fetcher action");let ll=++Be;Ve.set(M,ll);let Za=Re({state:"loading",data:Pe.data},ce,{" _hasFetcherDoneAnything ":!0});v.fetchers.set(M,Za);let[Al,$n]=Vg(e.history,v,vn,ce,yt,B,q,he,Ge,ft,d,{[Q.route.id]:Pe.data},void 0);$n.filter(pt=>pt.key!==M).forEach(pt=>{let Xa=pt.key,Ti=v.fetchers.get(Xa),Ei={state:"loading",data:Ti&&Ti.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(Xa,Ei),pt.controller&&se.set(Xa,pt.controller)}),pe({fetchers:new Map(v.fetchers)});let al=()=>$n.forEach(pt=>Jn(pt.key));le.signal.addEventListener("abort",al);let{results:Dl,loaderResults:Qa,fetcherResults:Ka}=await Si(v.matches,vn,Al,$n,it);if(le.signal.aborted)return;le.signal.removeEventListener("abort",al),Ve.delete(M),se.delete(M),$n.forEach(pt=>se.delete(pt.key));let zl=Kg(Dl);if(zl)return tl(v,zl);let{loaderData:ze,errors:Yt}=qg(v,v.matches,Al,Qa,void 0,$n,Ka,j);if(v.fetchers.has(M)){let pt={state:"idle",data:Pe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(M,pt)}let er=Ya(ll);v.navigation.state==="loading"&&ll>lt?(Ce(T,"Expected pending action"),F&&F.abort(),et(v.navigation.location,{matches:vn,loaderData:ze,errors:Yt,fetchers:new Map(v.fetchers)})):(pe(Re({errors:Yt,loaderData:Zg(v.loaderData,ze,vn,Yt)},er||$n.length>0?{fetchers:new Map(v.fetchers)}:{})),B=!1)}async function Ua(M,A,W,Q,ie,ce){let de=v.fetchers.get(M),ue=Re({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ce,{data:de&&de.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(M,ue),pe({fetchers:new Map(v.fetchers)});let le=new AbortController,$e=fo(e.history,W,le.signal);se.set(M,le);let Pe=await ho("loader",$e,Q,ie,o,l,d);if(bl(Pe)&&(Pe=await cy(Pe,$e.signal,!0)||Pe),se.get(M)===le&&se.delete(M),$e.signal.aborted)return;if(Sa(Pe)){De.add(M),await tl(v,Pe);return}if(Fo(Pe)){let it=ga(v.matches,A);v.fetchers.delete(M),pe({fetchers:new Map(v.fetchers),errors:{[it.route.id]:Pe.error}});return}Ce(!bl(Pe),"Unhandled fetcher deferred data");let yt={state:"idle",data:Pe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(M,yt),pe({fetchers:new Map(v.fetchers)})}async function tl(M,A,W){let{submission:Q,replace:ie,isFetchActionRedirect:ce}=W===void 0?{}:W;A.revalidate&&(B=!0);let de=ni(M.location,A.location,Re({_isRedirect:!0},ce?{_isFetchActionRedirect:!0}:{}));if(Ce(de,"Expected a location on the redirect navigation"),ay.test(A.location)&&n){let it=e.history.createURL(A.location),ft=Aa(it.pathname,d)==null;if(t.location.origin!==it.origin||ft){ie?t.location.replace(A.location):t.location.assign(A.location);return}}F=null;let ue=ie===!0?ct.Replace:ct.Push,{formMethod:le,formAction:$e,formEncType:Pe,formData:yt}=M.navigation;!Q&&le&&$e&&yt&&Pe&&(Q={formMethod:le,formAction:$e,formEncType:Pe,formData:yt}),hk.has(A.status)&&Q&&ar(Q.formMethod)?await Pt(ue,de,{submission:Re({},Q,{formAction:A.location}),preventScrollReset:_}):ce?await Pt(ue,de,{overrideNavigation:{state:"loading",location:de,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:Q,preventScrollReset:_}):await Pt(ue,de,{overrideNavigation:{state:"loading",location:de,formMethod:Q?Q.formMethod:void 0,formAction:Q?Q.formAction:void 0,formEncType:Q?Q.formEncType:void 0,formData:Q?Q.formData:void 0},preventScrollReset:_})}async function Si(M,A,W,Q,ie){let ce=await Promise.all([...W.map(le=>ho("loader",ie,le,A,o,l,d)),...Q.map(le=>le.matches&&le.match&&le.controller?ho("loader",fo(e.history,le.path,le.controller.signal),le.match,le.matches,o,l,d):{type:gt.error,error:Pn(404,{pathname:le.path})})]),de=ce.slice(0,W.length),ue=ce.slice(W.length);return await Promise.all([Xg(M,W,de,de.map(()=>ie.signal),!1,v.loaderData),Xg(M,Q.map(le=>le.match),ue,Q.map(le=>le.controller?le.controller.signal:null),!0)]),{results:ce,loaderResults:de,fetcherResults:ue}}function Ha(){B=!0,q.push(...Ol()),Ge.forEach((M,A)=>{se.has(A)&&(he.push(A),Jn(A))})}function nl(M,A,W){let Q=ga(v.matches,A);Wa(M),pe({errors:{[Q.route.id]:W},fetchers:new Map(v.fetchers)})}function Wa(M){let A=v.fetchers.get(M);se.has(M)&&!(A&&A.state==="loading"&&Ve.has(M))&&Jn(M),Ge.delete(M),Ve.delete(M),De.delete(M),v.fetchers.delete(M)}function Jn(M){let A=se.get(M);Ce(A,"Expected fetch controller: "+M),A.abort(),se.delete(M)}function Va(M){for(let A of M){let Q={state:"idle",data:Xn(A).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(A,Q)}}function Ga(){let M=[],A=!1;for(let W of De){let Q=v.fetchers.get(W);Ce(Q,"Expected fetcher: "+W),Q.state==="loading"&&(De.delete(W),M.push(W),A=!0)}return Va(M),A}function Ya(M){let A=[];for(let[W,Q]of Ve)if(Q<M){let ie=v.fetchers.get(W);Ce(ie,"Expected fetcher: "+W),ie.state==="loading"&&(Jn(W),Ve.delete(W),A.push(W))}return Va(A),A.length>0}function Ci(M,A){let W=v.blockers.get(M)||Hg;return Z.get(M)!==A&&Z.set(M,A),W}function br(M){v.blockers.delete(M),Z.delete(M)}function rl(M,A){let W=v.blockers.get(M)||Hg;Ce(W.state==="unblocked"&&A.state==="blocked"||W.state==="blocked"&&A.state==="blocked"||W.state==="blocked"&&A.state==="proceeding"||W.state==="blocked"&&A.state==="unblocked"||W.state==="proceeding"&&A.state==="unblocked","Invalid blocker state transition: "+W.state+" -> "+A.state),v.blockers.set(M,A),pe({blockers:new Map(v.blockers)})}function qa(M){let{currentLocation:A,nextLocation:W,historyAction:Q}=M;if(Z.size===0)return;Z.size>1&&Ia(!1,"A router only supports one blocker at a time");let ie=Array.from(Z.entries()),[ce,de]=ie[ie.length-1],ue=v.blockers.get(ce);if(!(ue&&ue.state==="proceeding")&&de({currentLocation:A,nextLocation:W,historyAction:Q}))return ce}function Ol(M){let A=[];return j.forEach((W,Q)=>{(!M||M(Q))&&(W.cancel(),A.push(Q),j.delete(Q))}),A}function ki(M,A,W){if(S=M,N=A,L=W||(Q=>Q.key),!C&&v.navigation===Ud){C=!0;let Q=$i(v.location,v.matches);Q!=null&&pe({restoreScrollPosition:Q})}return()=>{S=null,N=null,L=null}}function _i(M,A){if(S&&L&&N){let W=A.map(ie=>Jg(ie,v.loaderData)),Q=L(M,W)||M.key;S[Q]=N()}}function $i(M,A){if(S&&L&&N){let W=A.map(ce=>Jg(ce,v.loaderData)),Q=L(M,W)||M.key,ie=S[Q];if(typeof ie=="number")return ie}return null}function Bc(M){o={},s=Xu(M,l,void 0,o)}return y={get basename(){return d},get state(){return v},get routes(){return i},initialize:ae,subscribe:Dt,enableScrollRestoration:ki,navigate:Ye,fetch:ja,revalidate:ht,createHref:M=>e.history.createHref(M),encodeLocation:M=>e.history.encodeLocation(M),getFetcher:Xn,deleteFetcher:Wa,dispose:fe,getBlocker:Ci,deleteBlocker:br,_internalFetchControllers:se,_internalActiveDeferreds:j,_internalSetRoutes:Bc},y}function mk(e){return e!=null&&"formData"in e}function Ju(e,t,n,r,l,o,i){let s,d;if(o!=null&&i!=="path"){s=[];for(let m of t)if(s.push(m),m.route.id===o){d=m;break}}else s=t,d=t[t.length-1];let f=Lf(l||".",Ic(s).map(m=>m.pathnameBase),Aa(e.pathname,n)||e.pathname,i==="path");return l==null&&(f.search=e.search,f.hash=e.hash),(l==null||l===""||l===".")&&d&&d.route.index&&!Rf(f.search)&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(f.pathname=f.pathname==="/"?n:dr([n,f.pathname])),Ll(f)}function Wg(e,t,n,r){if(!r||!mk(r))return{path:n};if(r.formMethod&&!Ck(r.formMethod))return{path:n,error:Pn(405,{method:r.formMethod})};let l;if(r.formData){let s=r.formMethod||"get";if(l={formMethod:e?s.toUpperCase():s.toLowerCase(),formAction:sy(n),formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:r.formData},ar(l.formMethod))return{path:n,submission:l}}let o=yr(n),i=iy(r.formData);return t&&o.search&&Rf(o.search)&&i.append("index",""),o.search="?"+i,{path:Ll(o),submission:l}}function vk(e,t){let n=e;if(t){let r=e.findIndex(l=>l.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Vg(e,t,n,r,l,o,i,s,d,f,m,b,S){let L=S?Object.values(S)[0]:b?Object.values(b)[0]:void 0,N=e.createURL(t.location),C=e.createURL(l),I=S?Object.keys(S)[0]:void 0,g=vk(n,I).filter((v,T)=>{if(v.route.lazy)return!0;if(v.route.loader==null)return!1;if(yk(t.loaderData,t.matches[T],v)||i.some(O=>O===v.route.id))return!0;let _=t.matches[T],F=v;return Gg(v,Re({currentUrl:N,currentParams:_.params,nextUrl:C,nextParams:F.params},r,{actionResult:L,defaultShouldRevalidate:o||N.pathname+N.search===C.pathname+C.search||N.search!==C.search||oy(_,F)}))}),y=[];return d.forEach((v,T)=>{if(!n.some(B=>B.route.id===v.routeId))return;let _=pa(f,v.path,m);if(!_){y.push({key:T,routeId:v.routeId,path:v.path,matches:null,match:null,controller:null});return}let F=eh(_,v.path);if(s.includes(T)){y.push({key:T,routeId:v.routeId,path:v.path,matches:_,match:F,controller:new AbortController});return}Gg(F,Re({currentUrl:N,currentParams:t.matches[t.matches.length-1].params,nextUrl:C,nextParams:n[n.length-1].params},r,{actionResult:L,defaultShouldRevalidate:o}))&&y.push({key:T,routeId:v.routeId,path:v.path,matches:_,match:F,controller:new AbortController})}),[g,y]}function yk(e,t,n){let r=!t||n.route.id!==t.route.id,l=e[n.route.id]===void 0;return r||l}function oy(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Gg(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Yg(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let l=n[e.id];Ce(l,"No route found in manifest");let o={};for(let i in r){let d=l[i]!==void 0&&i!=="hasErrorBoundary";Ia(!d,'Route "'+l.id+'" has a static property "'+i+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+i+'" will be ignored.')),!d&&!jC.has(i)&&(o[i]=r[i])}Object.assign(l,o),Object.assign(l,Re({},t(l),{lazy:void 0}))}async function ho(e,t,n,r,l,o,i,s,d,f){s===void 0&&(s=!1),d===void 0&&(d=!1);let m,b,S,L=I=>{let w,g=new Promise((y,v)=>w=v);return S=()=>w(),t.signal.addEventListener("abort",S),Promise.race([I({request:t,params:n.params,context:f}),g])};try{let I=n.route[e];if(n.route.lazy)if(I)b=(await Promise.all([L(I),Yg(n.route,o,l)]))[0];else if(await Yg(n.route,o,l),I=n.route[e],I)b=await L(I);else if(e==="action"){let w=new URL(t.url),g=w.pathname+w.search;throw Pn(405,{method:t.method,pathname:g,routeId:n.route.id})}else return{type:gt.data,data:void 0};else if(I)b=await L(I);else{let w=new URL(t.url),g=w.pathname+w.search;throw Pn(404,{pathname:g})}Ce(b!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(I){m=gt.error,b=I}finally{S&&t.signal.removeEventListener("abort",S)}if(Sk(b)){let I=b.status;if(uk.has(I)){let y=b.headers.get("Location");if(Ce(y,"Redirects returned/thrown from loaders/actions must have a Location header"),!ay.test(y))y=Ju(new URL(t.url),r.slice(0,r.indexOf(n)+1),i,!0,y);else if(!s){let v=new URL(t.url),T=y.startsWith("//")?new URL(v.protocol+y):new URL(y),_=Aa(T.pathname,i)!=null;T.origin===v.origin&&_&&(y=T.pathname+T.search+T.hash)}if(s)throw b.headers.set("Location",y),b;return{type:gt.redirect,status:I,location:y,revalidate:b.headers.get("X-Remix-Revalidate")!==null}}if(d)throw{type:m||gt.data,response:b};let w,g=b.headers.get("Content-Type");return g&&/\bapplication\/json\b/.test(g)?w=await b.json():w=await b.text(),m===gt.error?{type:m,error:new If(I,b.statusText,w),headers:b.headers}:{type:gt.data,data:w,statusCode:b.status,headers:b.headers}}if(m===gt.error)return{type:m,error:b};if(xk(b)){var N,C;return{type:gt.deferred,deferredData:b,statusCode:(N=b.init)==null?void 0:N.status,headers:((C=b.init)==null?void 0:C.headers)&&new Headers(b.init.headers)}}return{type:gt.data,data:b}}function fo(e,t,n,r){let l=e.createURL(sy(t)).toString(),o={signal:n};if(r&&ar(r.formMethod)){let{formMethod:i,formEncType:s,formData:d}=r;o.method=i.toUpperCase(),o.body=s==="application/x-www-form-urlencoded"?iy(d):d}return new Request(l,o)}function iy(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function bk(e,t,n,r,l){let o={},i=null,s,d=!1,f={};return n.forEach((m,b)=>{let S=t[b].route.id;if(Ce(!Sa(m),"Cannot handle redirect results in processLoaderData"),Fo(m)){let L=ga(e,S),N=m.error;r&&(N=Object.values(r)[0],r=void 0),i=i||{},i[L.route.id]==null&&(i[L.route.id]=N),o[S]=void 0,d||(d=!0,s=ry(m.error)?m.error.status:500),m.headers&&(f[S]=m.headers)}else bl(m)?(l.set(S,m.deferredData),o[S]=m.deferredData.data):o[S]=m.data,m.statusCode!=null&&m.statusCode!==200&&!d&&(s=m.statusCode),m.headers&&(f[S]=m.headers)}),r&&(i=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:i,statusCode:s||200,loaderHeaders:f}}function qg(e,t,n,r,l,o,i,s){let{loaderData:d,errors:f}=bk(t,n,r,l,s);for(let m=0;m<o.length;m++){let{key:b,match:S,controller:L}=o[m];Ce(i!==void 0&&i[m]!==void 0,"Did not find corresponding fetcher result");let N=i[m];if(!(L&&L.signal.aborted))if(Fo(N)){let C=ga(e.matches,S==null?void 0:S.route.id);f&&f[C.route.id]||(f=Re({},f,{[C.route.id]:N.error})),e.fetchers.delete(b)}else if(Sa(N))Ce(!1,"Unhandled fetcher revalidation redirect");else if(bl(N))Ce(!1,"Unhandled fetcher deferred data");else{let C={state:"idle",data:N.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(b,C)}}return{loaderData:d,errors:f}}function Zg(e,t,n,r){let l=Re({},t);for(let o of n){let i=o.route.id;if(t.hasOwnProperty(i)?t[i]!==void 0&&(l[i]=t[i]):e[i]!==void 0&&o.route.loader&&(l[i]=e[i]),r&&r.hasOwnProperty(i))break}return l}function ga(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Qg(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Pn(e,t){let{pathname:n,routeId:r,method:l,type:o}=t===void 0?{}:t,i="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(i="Bad Request",l&&n&&r?s="You made a "+l+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(s="defer() is not supported in actions")):e===403?(i="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(i="Not Found",s='No route matches URL "'+n+'"'):e===405&&(i="Method Not Allowed",l&&n&&r?s="You made a "+l.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":l&&(s='Invalid request method "'+l.toUpperCase()+'"')),new If(e||500,i,new Error(s),!0)}function Kg(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Sa(n))return n}}function sy(e){let t=typeof e=="string"?yr(e):e;return Ll(Re({},t,{hash:""}))}function wk(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function bl(e){return e.type===gt.deferred}function Fo(e){return e.type===gt.error}function Sa(e){return(e&&e.type)===gt.redirect}function xk(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Sk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Ck(e){return dk.has(e.toLowerCase())}function ar(e){return sk.has(e.toLowerCase())}async function Xg(e,t,n,r,l,o){for(let i=0;i<n.length;i++){let s=n[i],d=t[i];if(!d)continue;let f=e.find(b=>b.route.id===d.route.id),m=f!=null&&!oy(f,d)&&(o&&o[d.route.id])!==void 0;if(bl(s)&&(l||m)){let b=r[i];Ce(b,"Expected an AbortSignal for revalidating fetcher deferred result"),await cy(s,b,l).then(S=>{S&&(n[i]=S||n[i])})}}}async function cy(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:gt.data,data:e.deferredData.unwrappedData}}catch(l){return{type:gt.error,error:l}}return{type:gt.data,data:e.deferredData.data}}}function Rf(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Jg(e,t){let{route:n,pathname:r,params:l}=e;return{id:n.id,pathname:r,params:l,data:t[n.id],handle:n.handle}}function eh(e,t){let n=typeof t=="string"?yr(t).search:t.search;if(e[e.length-1].route.index&&Rf(n||""))return e[e.length-1];let r=Ic(e);return r[r.length-1]}/**
 * React Router v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nc(){return nc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nc.apply(this,arguments)}const Rc=U.createContext(null),Pf=U.createContext(null),Fl=U.createContext(null),Pc=U.createContext(null),Kr=U.createContext({outlet:null,matches:[],isDataRoute:!1}),dy=U.createContext(null);function kk(e,t){let{relative:n}=t===void 0?{}:t;yi()||Ce(!1);let{basename:r,navigator:l}=U.useContext(Fl),{hash:o,pathname:i,search:s}=Ff(e,{relative:n}),d=i;return r!=="/"&&(d=i==="/"?r:dr([r,i])),l.createHref({pathname:d,search:s,hash:o})}function yi(){return U.useContext(Pc)!=null}function Da(){return yi()||Ce(!1),U.useContext(Pc).location}function uy(e){U.useContext(Fl).static||U.useLayoutEffect(e)}function _k(){let{isDataRoute:e}=U.useContext(Kr);return e?zk():$k()}function $k(){yi()||Ce(!1);let e=U.useContext(Rc),{basename:t,navigator:n}=U.useContext(Fl),{matches:r}=U.useContext(Kr),{pathname:l}=Da(),o=JSON.stringify(Ic(r).map(d=>d.pathnameBase)),i=U.useRef(!1);return uy(()=>{i.current=!0}),U.useCallback(function(d,f){if(f===void 0&&(f={}),!i.current)return;if(typeof d=="number"){n.go(d);return}let m=Lf(d,JSON.parse(o),l,f.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:dr([t,m.pathname])),(f.replace?n.replace:n.push)(m,f.state,f)},[t,n,o,l,e])}const Tk=U.createContext(null);function Ek(e){let t=U.useContext(Kr).outlet;return t&&U.createElement(Tk.Provider,{value:e},t)}function Ff(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=U.useContext(Kr),{pathname:l}=Da(),o=JSON.stringify(Ic(r).map(i=>i.pathnameBase));return U.useMemo(()=>Lf(e,JSON.parse(o),l,n==="path"),[e,o,l,n])}function Nk(e,t,n){yi()||Ce(!1);let{navigator:r}=U.useContext(Fl),{matches:l}=U.useContext(Kr),o=l[l.length-1],i=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let d=Da(),f;if(t){var m;let C=typeof t=="string"?yr(t):t;s==="/"||(m=C.pathname)!=null&&m.startsWith(s)||Ce(!1),f=C}else f=d;let b=f.pathname||"/",S=s==="/"?b:b.slice(s.length)||"/",L=pa(e,{pathname:S}),N=Fk(L&&L.map(C=>Object.assign({},C,{params:Object.assign({},i,C.params),pathname:dr([s,r.encodeLocation?r.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?s:dr([s,r.encodeLocation?r.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),l,n);return t&&N?U.createElement(Pc.Provider,{value:{location:nc({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:ct.Pop}},N):N}function Lk(){let e=Dk(),t=ry(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},t),n?U.createElement("pre",{style:l},n):null,o)}const Ik=U.createElement(Lk,null);class Rk extends U.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?U.createElement(Kr.Provider,{value:this.props.routeContext},U.createElement(dy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Pk(e){let{routeContext:t,match:n,children:r}=e,l=U.useContext(Rc);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(Kr.Provider,{value:t},r)}function Fk(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var l;if((l=n)!=null&&l.errors)e=n.matches;else return null}let o=e,i=(r=n)==null?void 0:r.errors;if(i!=null){let s=o.findIndex(d=>d.route.id&&(i==null?void 0:i[d.route.id]));s>=0||Ce(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,d,f)=>{let m=d.route.id?i==null?void 0:i[d.route.id]:null,b=null;n&&(b=d.route.errorElement||Ik);let S=t.concat(o.slice(0,f+1)),L=()=>{let N;return m?N=b:d.route.Component?N=U.createElement(d.route.Component,null):d.route.element?N=d.route.element:N=s,U.createElement(Pk,{match:d,routeContext:{outlet:s,matches:S,isDataRoute:n!=null},children:N})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?U.createElement(Rk,{location:n.location,revalidation:n.revalidation,component:b,error:m,children:L(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):L()},null)}var th;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(th||(th={}));var ri;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(ri||(ri={}));function Mk(e){let t=U.useContext(Rc);return t||Ce(!1),t}function Ok(e){let t=U.useContext(Pf);return t||Ce(!1),t}function Ak(e){let t=U.useContext(Kr);return t||Ce(!1),t}function hy(e){let t=Ak(),n=t.matches[t.matches.length-1];return n.route.id||Ce(!1),n.route.id}function Dk(){var e;let t=U.useContext(dy),n=Ok(ri.UseRouteError),r=hy(ri.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function zk(){let{router:e}=Mk(th.UseNavigateStable),t=hy(ri.UseNavigateStable),n=U.useRef(!1);return uy(()=>{n.current=!0}),U.useCallback(function(l,o){o===void 0&&(o={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,nc({fromRouteId:t},o)))},[e,t])}const e1="startTransition";function Bk(e){let{fallbackElement:t,router:n}=e,[r,l]=U.useState(n.state),o=U.useCallback(f=>{e1 in p0?p0[e1](()=>l(f)):l(f)},[l]);U.useLayoutEffect(()=>n.subscribe(o),[n,o]);let i=U.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:f=>n.navigate(f),push:(f,m,b)=>n.navigate(f,{state:m,preventScrollReset:b==null?void 0:b.preventScrollReset}),replace:(f,m,b)=>n.navigate(f,{replace:!0,state:m,preventScrollReset:b==null?void 0:b.preventScrollReset})}),[n]),s=n.basename||"/",d=U.useMemo(()=>({router:n,navigator:i,static:!1,basename:s}),[n,i,s]);return U.createElement(U.Fragment,null,U.createElement(Rc.Provider,{value:d},U.createElement(Pf.Provider,{value:r},U.createElement(Hk,{basename:s,location:r.location,navigationType:r.historyAction,navigator:i},r.initialized?U.createElement(jk,{routes:n.routes,state:r}):t))),null)}function jk(e){let{routes:t,state:n}=e;return Nk(t,void 0,n)}function Uk(e){return Ek(e.context)}function Hk(e){let{basename:t="/",children:n=null,location:r,navigationType:l=ct.Pop,navigator:o,static:i=!1}=e;yi()&&Ce(!1);let s=t.replace(/^\/*/,"/"),d=U.useMemo(()=>({basename:s,navigator:o,static:i}),[s,o,i]);typeof r=="string"&&(r=yr(r));let{pathname:f="/",search:m="",hash:b="",state:S=null,key:L="default"}=r,N=U.useMemo(()=>{let C=Aa(f,s);return C==null?null:{location:{pathname:C,search:m,hash:b,state:S,key:L},navigationType:l}},[s,f,m,b,S,L,l]);return N==null?null:U.createElement(Fl.Provider,{value:d},U.createElement(Pc.Provider,{children:n,value:N}))}var t1;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(t1||(t1={}));new Promise(()=>{});function Wk(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:U.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:U.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ra(){return Ra=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ra.apply(this,arguments)}function fy(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,o;for(o=0;o<r.length;o++)l=r[o],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function Vk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Gk(e,t){return e.button===0&&(!t||t==="_self")&&!Vk(e)}const Yk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],qk=["aria-current","caseSensitive","className","end","style","to","children"];function Zk(e,t){return gk({basename:t==null?void 0:t.basename,future:Ra({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:DC({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Qk(),routes:e,mapRouteProperties:Wk}).initialize()}function Qk(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Ra({},t,{errors:Kk(t.errors)})),t}function Kk(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,l]of t)if(l&&l.__type==="RouteErrorResponse")n[r]=new If(l.status,l.statusText,l.data,l.internal===!0);else if(l&&l.__type==="Error"){let o=new Error(l.message);o.stack="",n[r]=o}else n[r]=l;return n}const Xk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Jk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,e_=U.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:o,replace:i,state:s,target:d,to:f,preventScrollReset:m}=t,b=fy(t,Yk),{basename:S}=U.useContext(Fl),L,N=!1;if(typeof f=="string"&&Jk.test(f)&&(L=f,Xk))try{let g=new URL(window.location.href),y=f.startsWith("//")?new URL(g.protocol+f):new URL(f),v=Aa(y.pathname,S);y.origin===g.origin&&v!=null?f=v+y.search+y.hash:N=!0}catch{}let C=kk(f,{relative:l}),I=n_(f,{replace:i,state:s,target:d,preventScrollReset:m,relative:l});function w(g){r&&r(g),g.defaultPrevented||I(g)}return U.createElement("a",Ra({},b,{href:L||C,onClick:N||o?r:w,ref:n,target:d}))}),t_=U.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:l=!1,className:o="",end:i=!1,style:s,to:d,children:f}=t,m=fy(t,qk),b=Ff(d,{relative:m.relative}),S=Da(),L=U.useContext(Pf),{navigator:N}=U.useContext(Fl),C=N.encodeLocation?N.encodeLocation(b).pathname:b.pathname,I=S.pathname,w=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;l||(I=I.toLowerCase(),w=w?w.toLowerCase():null,C=C.toLowerCase());let g=I===C||!i&&I.startsWith(C)&&I.charAt(C.length)==="/",y=w!=null&&(w===C||!i&&w.startsWith(C)&&w.charAt(C.length)==="/"),v=g?r:void 0,T;typeof o=="function"?T=o({isActive:g,isPending:y}):T=[o,g?"active":null,y?"pending":null].filter(Boolean).join(" ");let _=typeof s=="function"?s({isActive:g,isPending:y}):s;return U.createElement(e_,Ra({},m,{"aria-current":v,className:T,ref:n,style:_,to:d}),typeof f=="function"?f({isActive:g,isPending:y}):f)});var n1;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(n1||(n1={}));var r1;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(r1||(r1={}));function n_(e,t){let{target:n,replace:r,state:l,preventScrollReset:o,relative:i}=t===void 0?{}:t,s=_k(),d=Da(),f=Ff(e,{relative:i});return U.useCallback(m=>{if(Gk(m,n)){m.preventDefault();let b=r!==void 0?r:Ll(d)===Ll(f);s(e,{replace:b,state:l,preventScrollReset:o,relative:i})}},[d,s,f,r,l,n,e,o,i])}const Le=({to:e,className:t="",exact:n,children:r,text:l,onClick:o,label:i,style:s})=>a(t_,{to:e,onClick:o,end:n&&"end",className:({isActive:d})=>`${t} ${d?"active":""}`,"aria-label":i,style:s,children:r||l}),r_=()=>h("div",{className:"prose",children:[a("h1",{children:"Brand Colours"}),a("p",{children:"The palette is designed to be adjustable so that you can match it to your brand colors."}),a("h2",{children:"Brand Hue and Color"}),h("p",{children:["You should pick a color that is closest to your brand color and adjust the hue to match it if necessary.  Then define that as the"," ",a("code",{children:"$brand-hue"})," and set the ",a("code",{children:"$brand-color"})," by name."]}),a(Je,{code:FC,caption:"Brand Color",language:"scss",expand:!0}),a("h2",{children:"Multiple Brand Colors"}),h("p",{children:["If you have multiple brand colors you can set them using the"," ",a("code",{children:"$brand-colors"})," variable.  You can call them whatever you like (we're using ",a("code",{children:"primary"}),", ",a("code",{children:"secondary"})," ","and ",a("code",{children:"tertiary"})," in this example). You should define one to be the primary ",a("code",{children:"$brand-color"})," and set the ",a("code",{children:"$brand-hue"})]}),a(Je,{code:MC,caption:"Brand Colors",language:"scss",expand:!0}),a("h2",{children:"Greyscale Colors"}),h("p",{children:["An important side-effect of setting ",a("code",{children:"$brand-hue"})," is that it will set the hue of the greyscale color ranges to match it."]}),h("p",{children:["If you want to use different hues for the greyscale color ranges then you can do that using the ",a("code",{children:"$grey-hue"}),","," ",a("code",{children:"$grey20-hue"})," and ",a("code",{children:"$grey40-hue"})," variables."]}),a(Je,{code:OC,caption:"Greyscale Colors",language:"scss",expand:!0}),a("h2",{children:"Culling the Palette"}),a("p",{children:"The chances are that you aren't going to need all of the colors defined in the standard palette.  You can reduce the size of the generated CSS file by excluding any that you don't need."}),h("p",{children:["Set the ",a("code",{children:"$color-names"})," variable to list those that you want to keep.  Note that ",a("code",{children:"red"}),", ",a("code",{children:"orange"}),","," ",a("code",{children:"green"}),", ",a("code",{children:"blue"})," and ",a("code",{children:"grey"})," are used by various components, including ",a(Le,{to:"/forms/",text:"forms"})," and"," ",a(Le,{to:"/components/alerts",text:"alerts"})," so you'll probably want to keep those."]}),a(Je,{code:AC,caption:"Selecting Colors",language:"scss",expand:!0})]}),l_=Object.freeze(Object.defineProperty({__proto__:null,default:r_},Symbol.toStringTag,{value:"Module"})),a_="Badger CSS Desaturation Light",o_="Palette cloned from Badger CSS 2023-09-30 11:17:47",i_="badger-css-desaturation-light",s_="",c_={red:{name:"Red",hue:0,stops:{0:{h:0,s:65,l:5,hex:"#150404"},5:{h:0,s:66,l:8,hex:"#220707"},10:{h:0,s:68,l:11,hex:"#2f0909"},15:{h:0,s:69,l:15,hex:"#410c0c"},20:{h:0,s:70,l:18,hex:"#4e0e0e"},25:{h:0,s:71,l:22,hex:"#601010"},30:{h:0,s:72,l:27,hex:"#761313"},35:{h:0,s:73,l:31,hex:"#891515"},40:{h:0,s:73,l:36,hex:"#9f1919"},45:{h:0,s:74,l:42,hex:"#ba1c1c"},50:{h:0,s:74,l:48,hex:"#d52020"},55:{h:0,s:74,l:55,hex:"#e13737"},60:{h:0,s:73,l:62,hex:"#e55757"},65:{h:0,s:72,l:68,hex:"#e87373"},70:{h:0,s:71,l:74,hex:"#ec8e8e"},75:{h:0,s:69,l:80,hex:"#efa9a9"},80:{h:0,s:66,l:84,hex:"#f1bbbb"},85:{h:0,s:62,l:88,hex:"#f3cdcd"},90:{h:0,s:56,l:92,hex:"#f6dfdf"},95:{h:0,s:48,l:95,hex:"#f8ecec"},100:{h:0,s:33,l:98,hex:"#fcf8f8"}},curves:{h:{min:0,max:0,minControl:{x:30,y:0},maxControl:{x:70,y:0}},s:{min:65,max:33,minControl:{x:31,y:74},maxControl:{x:88,y:89}},l:{min:5,max:98,minControl:{x:62,y:42},maxControl:{x:53,y:72}}},uri:"red"},brown:{name:"Brown",hue:14,stops:{0:{h:10,s:52,l:5,hex:"#130806"},5:{h:11,s:53,l:8,hex:"#1f0e0a"},10:{h:11,s:54,l:11,hex:"#2b120d"},15:{h:12,s:54,l:14,hex:"#371810"},20:{h:13,s:55,l:17,hex:"#431e14"},25:{h:13,s:56,l:20,hex:"#502316"},30:{h:13,s:56,l:24,hex:"#5f2a1b"},35:{h:14,s:57,l:28,hex:"#70321f"},40:{h:14,s:57,l:32,hex:"#803923"},45:{h:14,s:57,l:37,hex:"#944229"},50:{h:14,s:57,l:42,hex:"#a84b2e"},55:{h:14,s:56,l:47,hex:"#bb5435"},60:{h:14,s:56,l:53,hex:"#ca6344"},65:{h:15,s:55,l:60,hex:"#d17d61"},70:{h:15,s:53,l:67,hex:"#d7957e"},75:{h:15,s:51,l:75,hex:"#e0af9f"},80:{h:14,s:49,l:81,hex:"#e6c2b7"},85:{h:14,s:45,l:87,hex:"#edd6cf"},90:{h:14,s:41,l:92,hex:"#f3e6e2"},95:{h:14,s:34,l:95,hex:"#f7f0ee"},100:{h:14,s:23,l:98,hex:"#fbf9f9"}},curves:{h:{min:10,max:14,minControl:{x:30,y:15},maxControl:{x:70,y:15}},s:{min:52,max:23,minControl:{x:35,y:58},maxControl:{x:86,y:66}},l:{min:5,max:98,minControl:{x:72,y:43},maxControl:{x:67,y:82}}},uri:"brown"},orange:{name:"Orange",hue:26,stops:{0:{h:27,s:93,l:5,hex:"#190c01"},5:{h:27,s:94,l:8,hex:"#281201"},10:{h:26,s:94,l:11,hex:"#361902"},15:{h:26,s:95,l:14,hex:"#461f02"},20:{h:26,s:95,l:18,hex:"#5a2802"},25:{h:26,s:95,l:21,hex:"#682f03"},30:{h:26,s:96,l:25,hex:"#7d3803"},35:{h:26,s:96,l:30,hex:"#964303"},40:{h:26,s:96,l:35,hex:"#af4e04"},45:{h:26,s:96,l:40,hex:"#c85904"},50:{h:26,s:95,l:46,hex:"#e56606"},55:{h:26,s:95,l:52,hex:"#f97510"},60:{h:26,s:94,l:59,hex:"#f98934"},65:{h:26,s:92,l:65,hex:"#f89b54"},70:{h:27,s:90,l:72,hex:"#f8b177"},75:{h:27,s:87,l:78,hex:"#f8c296"},80:{h:28,s:84,l:83,hex:"#f8d1af"},85:{h:28,s:78,l:88,hex:"#f8dfc9"},90:{h:29,s:71,l:91,hex:"#f8e8d8"},95:{h:30,s:58,l:95,hex:"#faf2eb"},100:{h:32,s:26,l:97,hex:"#f9f7f5"}},curves:{h:{min:27,max:32,minControl:{x:30,y:25},maxControl:{x:77,y:24}},s:{min:93,max:24,minControl:{x:59,y:100},maxControl:{x:97,y:100}},l:{min:5,max:97,minControl:{x:62,y:39},maxControl:{x:62,y:80}}},uri:"orange"},yellow:{name:"Yellow",hue:41,stops:{0:{h:30,s:90,l:5,hex:"#180d01"},5:{h:31,s:91,l:8,hex:"#271502"},10:{h:33,s:92,l:10,hex:"#311c02"},15:{h:34,s:92,l:13,hex:"#402503"},20:{h:35,s:93,l:17,hex:"#543203"},25:{h:36,s:93,l:20,hex:"#623c04"},30:{h:37,s:94,l:24,hex:"#774b04"},35:{h:38,s:94,l:28,hex:"#8b5904"},40:{h:39,s:95,l:33,hex:"#a46c04"},45:{h:40,s:95,l:38,hex:"#bd8005"},50:{h:41,s:94,l:43,hex:"#d59307"},55:{h:41,s:94,l:48,hex:"#eda507"},60:{h:42,s:93,l:54,hex:"#f7b51d"},65:{h:43,s:91,l:60,hex:"#f6c13c"},70:{h:43,s:89,l:66,hex:"#f5ca5b"},75:{h:44,s:86,l:72,hex:"#f5d47a"},80:{h:44,s:82,l:77,hex:"#f4db94"},85:{h:44,s:77,l:82,hex:"#f4e2ae"},90:{h:45,s:68,l:87,hex:"#f4e9c7"},95:{h:45,s:53,l:92,hex:"#f5f0e0"},100:{h:45,s:21,l:96,hex:"#f7f6f3"}},curves:{h:{min:30,max:45,minControl:{x:28,y:38},maxControl:{x:70,y:45}},s:{min:90,max:20,minControl:{x:63,y:100},maxControl:{x:94,y:100}},l:{min:5,max:96,minControl:{x:52,y:31},maxControl:{x:64,y:67}}},uri:"yellow"},olive:{name:"Olive",hue:68,stops:{0:{h:72,s:66,l:4,hex:"#0e1103"},5:{h:72,s:68,l:6,hex:"#161a05"},10:{h:71,s:70,l:9,hex:"#212707"},15:{h:71,s:71,l:12,hex:"#2c3409"},20:{h:70,s:72,l:15,hex:"#39420b"},25:{h:70,s:73,l:18,hex:"#444f0c"},30:{h:69,s:74,l:21,hex:"#515d0e"},35:{h:69,s:74,l:25,hex:"#616f11"},40:{h:69,s:74,l:29,hex:"#708113"},45:{h:68,s:73,l:33,hex:"#819217"},50:{h:68,s:72,l:37,hex:"#90a21a"},55:{h:67,s:70,l:43,hex:"#a8ba21"},60:{h:67,s:68,l:48,hex:"#bace27"},65:{h:66,s:65,l:54,hex:"#c7d63d"},70:{h:66,s:60,l:61,hex:"#cbd760"},75:{h:65,s:55,l:68,hex:"#d3da81"},80:{h:65,s:49,l:75,hex:"#d9dea0"},85:{h:65,s:41,l:82,hex:"#e1e4be"},90:{h:64,s:33,l:87,hex:"#e7e9d3"},95:{h:64,s:24,l:93,hex:"#f1f1e9"},100:{h:64,s:16,l:97,hex:"#f8f9f6"}},curves:{h:{min:72,max:64,minControl:{x:30,y:70},maxControl:{x:69,y:65}},s:{min:66,max:16,minControl:{x:69,y:93},maxControl:{x:81,y:44}},l:{min:4,max:97,minControl:{x:67,y:35},maxControl:{x:72,y:75}}},uri:"olive"},green:{name:"Green",hue:117,stops:{0:{h:117,s:45,l:5,hex:"#081207"},5:{h:117,s:48,l:8,hex:"#0c1e0b"},10:{h:117,s:50,l:11,hex:"#0f2a0e"},15:{h:117,s:52,l:14,hex:"#133611"},20:{h:117,s:53,l:17,hex:"#174214"},25:{h:117,s:54,l:21,hex:"#1c5219"},30:{h:117,s:55,l:25,hex:"#20631d"},35:{h:117,s:55,l:29,hex:"#257321"},40:{h:117,s:55,l:33,hex:"#2a8226"},45:{h:117,s:54,l:38,hex:"#32952d"},50:{h:117,s:54,l:43,hex:"#38a932"},55:{h:117,s:52,l:48,hex:"#41ba3b"},60:{h:117,s:51,l:54,hex:"#54c64e"},65:{h:117,s:49,l:60,hex:"#6ccb67"},70:{h:117,s:47,l:66,hex:"#84d180"},75:{h:117,s:44,l:73,hex:"#9fd89c"},80:{h:117,s:40,l:79,hex:"#b6dfb4"},85:{h:117,s:36,l:85,hex:"#cce7cb"},90:{h:118,s:31,l:90,hex:"#deedde"},95:{h:118,s:24,l:94,hex:"#ecf3ec"},100:{h:118,s:16,l:98,hex:"#f9fbf9"}},curves:{h:{min:117,max:118,minControl:{x:30,y:118},maxControl:{x:57,y:116}},s:{min:45,max:16,minControl:{x:34,y:65},maxControl:{x:81,y:54}},l:{min:5,max:98,minControl:{x:61,y:38},maxControl:{x:72,y:79}}},uri:"green"},teal:{name:"Teal",hue:165,stops:{0:{h:165,s:52,l:5,hex:"#061310"},5:{h:165,s:56,l:7,hex:"#081c17"},10:{h:165,s:59,l:10,hex:"#0a2921"},15:{h:165,s:61,l:13,hex:"#0d352b"},20:{h:165,s:62,l:15,hex:"#0f3e32"},25:{h:165,s:63,l:18,hex:"#114b3c"},30:{h:165,s:64,l:21,hex:"#135847"},35:{h:165,s:63,l:25,hex:"#186854"},40:{h:165,s:63,l:29,hex:"#1b7961"},45:{h:165,s:62,l:33,hex:"#20886e"},50:{h:165,s:60,l:37,hex:"#26977b"},55:{h:165,s:58,l:42,hex:"#2da98a"},60:{h:165,s:56,l:47,hex:"#35bb99"},65:{h:165,s:53,l:53,hex:"#48c7a7"},70:{h:165,s:50,l:60,hex:"#66ccb3"},75:{h:165,s:46,l:67,hex:"#84d2be"},80:{h:165,s:41,l:75,hex:"#a5d9cc"},85:{h:165,s:36,l:81,hex:"#bde0d7"},90:{h:165,s:30,l:88,hex:"#d7eae5"},95:{h:165,s:23,l:93,hex:"#e9f1ef"},100:{h:165,s:13,l:98,hex:"#f9fbfa"}},curves:{h:{min:165,max:165,minControl:{x:30,y:165},maxControl:{x:70,y:165}},s:{min:52,max:13,minControl:{x:34,y:81},maxControl:{x:83,y:51}},l:{min:5,max:98,minControl:{x:71,y:38},maxControl:{x:68,y:69}}},uri:"teal"},blue:{name:"Blue",hue:206,stops:{0:{h:210,s:72,l:5,hex:"#040d16"},5:{h:210,s:74,l:8,hex:"#051423"},10:{h:209,s:75,l:11,hex:"#071d31"},15:{h:209,s:77,l:15,hex:"#092744"},20:{h:209,s:78,l:18,hex:"#0a2f52"},25:{h:208,s:79,l:22,hex:"#0c3b64"},30:{h:208,s:80,l:26,hex:"#0d4677"},35:{h:207,s:81,l:31,hex:"#0f558f"},40:{h:207,s:82,l:35,hex:"#1061a2"},45:{h:207,s:83,l:41,hex:"#1271bf"},50:{h:206,s:83,l:46,hex:"#1482d7"},55:{h:206,s:82,l:52,hex:"#2092e9"},60:{h:205,s:82,l:58,hex:"#3ca3ec"},65:{h:205,s:80,l:65,hex:"#5eb2ed"},70:{h:205,s:79,l:71,hex:"#7bbfef"},75:{h:205,s:76,l:77,hex:"#98ccf1"},80:{h:204,s:72,l:82,hex:"#b0d8f2"},85:{h:204,s:66,l:87,hex:"#c8e2f4"},90:{h:204,s:59,l:91,hex:"#dbebf6"},95:{h:204,s:46,l:95,hex:"#ecf3f8"},100:{h:204,s:22,l:98,hex:"#f9fafb"}},curves:{h:{min:210,max:204,minControl:{x:42,y:207},maxControl:{x:70,y:204}},s:{min:72,max:22,minControl:{x:43,y:86},maxControl:{x:91,y:99}},l:{min:5,max:98,minControl:{x:61,y:41},maxControl:{x:64,y:78}}},uri:"blue"},indigo:{name:"Indigo",hue:236,stops:{0:{h:234,s:50,l:7,hex:"#090b1b"},5:{h:234,s:53,l:11,hex:"#0d102b"},10:{h:235,s:56,l:16,hex:"#121640"},15:{h:235,s:58,l:21,hex:"#161c55"},20:{h:235,s:61,l:27,hex:"#1b226f"},25:{h:235,s:64,l:32,hex:"#1d2686"},30:{h:236,s:67,l:38,hex:"#2029a2"},35:{h:236,s:69,l:44,hex:"#232dbe"},40:{h:236,s:72,l:50,hex:"#2430db"},45:{h:236,s:74,l:56,hex:"#3c47e2"},50:{h:236,s:75,l:62,hex:"#555fe7"},55:{h:236,s:76,l:67,hex:"#6b73eb"},60:{h:236,s:76,l:72,hex:"#8189ee"},65:{h:235,s:75,l:77,hex:"#98a0f0"},70:{h:235,s:72,l:81,hex:"#acb1f1"},75:{h:235,s:68,l:85,hex:"#bfc3f3"},80:{h:235,s:63,l:89,hex:"#d1d4f5"},85:{h:235,s:55,l:92,hex:"#dfe1f6"},90:{h:235,s:45,l:94,hex:"#e9eaf7"},95:{h:235,s:33,l:97,hex:"#f5f5fa"},100:{h:235,s:20,l:99,hex:"#fcfcfd"}},curves:{h:{min:234,max:235,minControl:{x:30,y:237},maxControl:{x:70,y:235}},s:{min:50,max:20,minControl:{x:53,y:79},maxControl:{x:72,y:100}},l:{min:7,max:99,minControl:{x:39,y:40},maxControl:{x:53,y:80}}},uri:"indigo"},violet:{name:"Violet",uri:"violet",hue:259,stops:{0:{h:271,s:53,l:8,hex:"#150a1f"},5:{h:269,s:55,l:12,hex:"#1e0e2f"},10:{h:268,s:56,l:16,hex:"#271240"},15:{h:266,s:58,l:21,hex:"#311655"},20:{h:265,s:60,l:26,hex:"#3c1b6a"},25:{h:264,s:62,l:31,hex:"#451e80"},30:{h:263,s:65,l:36,hex:"#4e2097"},35:{h:262,s:67,l:42,hex:"#5823b3"},40:{h:261,s:69,l:48,hex:"#6126cf"},45:{h:260,s:72,l:53,hex:"#6a31dd"},50:{h:259,s:73,l:59,hex:"#7a4ae3"},55:{h:258,s:75,l:65,hex:"#8b63e9"},60:{h:258,s:75,l:71,hex:"#9f7eed"},65:{h:257,s:73,l:76,hex:"#ae95ee"},70:{h:257,s:70,l:80,hex:"#bda8f0"},75:{h:256,s:64,l:85,hex:"#cdc0f1"},80:{h:256,s:58,l:88,hex:"#d8cff2"},85:{h:255,s:51,l:92,hex:"#e5e0f5"},90:{h:255,s:43,l:94,hex:"#ece9f6"},95:{h:255,s:35,l:97,hex:"#f6f5fa"},100:{h:255,s:27,l:99,hex:"#fcfcfd"}},curves:{h:{min:271,max:255,minControl:{x:33,y:260},maxControl:{x:70,y:255}},s:{min:53,max:27,minControl:{x:64,y:73},maxControl:{x:56,y:100}},l:{min:8,max:99,minControl:{x:45,y:43},maxControl:{x:58,y:83}}}},purple:{name:"Purple",hue:284,stops:{0:{h:294,s:47,l:6,hex:"#150816"},5:{h:293,s:50,l:8,hex:"#1c0a1f"},10:{h:292,s:53,l:11,hex:"#270d2b"},15:{h:290,s:56,l:14,hex:"#311038"},20:{h:289,s:59,l:18,hex:"#3f1349"},25:{h:288,s:62,l:22,hex:"#4d155b"},30:{h:287,s:65,l:26,hex:"#5b176d"},35:{h:286,s:67,l:31,hex:"#6b1a84"},40:{h:286,s:69,l:37,hex:"#811d9f"},45:{h:285,s:71,l:43,hex:"#9520bc"},50:{h:284,s:72,l:49,hex:"#a723d7"},55:{h:283,s:73,l:55,hex:"#b138e0"},60:{h:283,s:73,l:62,hex:"#bd57e5"},65:{h:282,s:72,l:68,hex:"#c573e8"},70:{h:282,s:70,l:75,hex:"#d193ec"},75:{h:281,s:67,l:80,hex:"#d9aaee"},80:{h:281,s:61,l:85,hex:"#e1c1f0"},85:{h:280,s:54,l:90,hex:"#ead8f3"},90:{h:280,s:46,l:94,hex:"#f2e9f7"},95:{h:280,s:35,l:97,hex:"#f8f5fa"},100:{h:280,s:22,l:99,hex:"#fdfcfd"}},curves:{h:{min:294,max:280,minControl:{x:32,y:286},maxControl:{x:67,y:280}},s:{min:47,max:22,minControl:{x:51,y:78},maxControl:{x:74,y:94}},l:{min:6,max:99,minControl:{x:48,y:26},maxControl:{x:64,y:85}}},uri:"purple"},pink:{name:"Pink",hue:313,stops:{0:{h:314,s:64,l:5,hex:"#150511"},5:{h:314,s:66,l:7,hex:"#1e0618"},10:{h:313,s:69,l:10,hex:"#2b0823"},15:{h:313,s:71,l:13,hex:"#390a2e"},20:{h:313,s:72,l:16,hex:"#460b39"},25:{h:313,s:74,l:19,hex:"#540d45"},30:{h:313,s:75,l:23,hex:"#670f54"},35:{h:313,s:76,l:27,hex:"#791163"},40:{h:313,s:77,l:32,hex:"#901375"},45:{h:313,s:77,l:37,hex:"#a71688"},50:{h:313,s:76,l:42,hex:"#bc1a99"},55:{h:313,s:76,l:48,hex:"#d71daf"},60:{h:313,s:74,l:55,hex:"#e137bc"},65:{h:313,s:72,l:63,hex:"#e55dc7"},70:{h:312,s:70,l:70,hex:"#e87dd3"},75:{h:312,s:66,l:77,hex:"#eb9edc"},80:{h:312,s:61,l:83,hex:"#eeb9e4"},85:{h:312,s:55,l:88,hex:"#f1d0ea"},90:{h:311,s:47,l:92,hex:"#f4e1f1"},95:{h:311,s:37,l:96,hex:"#f9f1f7"},100:{h:310,s:21,l:99,hex:"#fdfcfd"}},curves:{h:{min:314,max:310,minControl:{x:26,y:311},maxControl:{x:67,y:315}},s:{min:64,max:21,minControl:{x:45,y:87},maxControl:{x:84,y:82}},l:{min:5,max:99,minControl:{x:64,y:34},maxControl:{x:62,y:78}}},uri:"pink"},maroon:{name:"Maroon",hue:339,stops:{0:{h:339,s:57,l:6,hex:"#18070d"},5:{h:339,s:62,l:8,hex:"#210811"},10:{h:339,s:66,l:11,hex:"#2f0a16"},15:{h:339,s:69,l:13,hex:"#380a1a"},20:{h:339,s:73,l:17,hex:"#4b0c22"},25:{h:339,s:76,l:20,hex:"#5a0c27"},30:{h:339,s:79,l:24,hex:"#6e0d2f"},35:{h:339,s:81,l:29,hex:"#860e38"},40:{h:339,s:83,l:33,hex:"#9a0e3f"},45:{h:339,s:84,l:39,hex:"#b7104a"},50:{h:339,s:84,l:45,hex:"#d31256"},55:{h:339,s:84,l:51,hex:"#eb1963"},60:{h:339,s:84,l:57,hex:"#ed3576"},65:{h:339,s:82,l:64,hex:"#ee588d"},70:{h:339,s:80,l:71,hex:"#f07aa3"},75:{h:339,s:76,l:77,hex:"#f198b7"},80:{h:339,s:71,l:83,hex:"#f2b5ca"},85:{h:339,s:64,l:88,hex:"#f4cddb"},90:{h:339,s:55,l:92,hex:"#f6dfe7"},95:{h:339,s:41,l:96,hex:"#f9f1f4"},100:{h:339,s:21,l:99,hex:"#fdfcfc"}},curves:{h:{min:339,max:339,minControl:{x:26,y:339},maxControl:{x:67,y:339}},s:{min:57,max:21,minControl:{x:43,y:97},maxControl:{x:85,y:100}},l:{min:6,max:99,minControl:{x:54,y:28},maxControl:{x:64,y:79}}},uri:"maroon"},grey:{name:"Grey",hue:200,stops:{0:{h:200,s:5,l:5,hex:"#0c0d0d"},5:{h:200,s:5,l:10,hex:"#181a1b"},10:{h:200,s:5,l:14,hex:"#222425"},15:{h:200,s:5,l:19,hex:"#2e3133"},20:{h:200,s:5,l:23,hex:"#383c3e"},25:{h:200,s:5,l:28,hex:"#44494b"},30:{h:200,s:5,l:33,hex:"#505658"},35:{h:200,s:5,l:37,hex:"#5a6063"},40:{h:200,s:5,l:42,hex:"#666d70"},45:{h:200,s:5,l:47,hex:"#727a7e"},50:{h:200,s:5,l:52,hex:"#7e878b"},55:{h:200,s:5,l:56,hex:"#899194"},60:{h:200,s:5,l:61,hex:"#979da1"},65:{h:200,s:5,l:66,hex:"#a4aaad"},70:{h:200,s:5,l:71,hex:"#b1b6b9"},75:{h:200,s:5,l:75,hex:"#bcc0c2"},80:{h:200,s:5,l:80,hex:"#c9cdcf"},85:{h:200,s:5,l:85,hex:"#d7d9db"},90:{h:200,s:5,l:89,hex:"#e2e3e4"},95:{h:200,s:5,l:94,hex:"#eff0f0"},100:{h:200,s:5,l:98,hex:"#fafafa"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:5,max:5,minControl:{x:30,y:5},maxControl:{x:70,y:5}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey",greyscale:!0},grey20:{name:"Grey20",hue:200,stops:{0:{h:200,s:20,l:5,hex:"#0a0e0f"},5:{h:200,s:20,l:10,hex:"#141b1f"},10:{h:200,s:20,l:14,hex:"#1d262b"},15:{h:200,s:20,l:19,hex:"#27343a"},20:{h:200,s:20,l:23,hex:"#2f3f46"},25:{h:200,s:20,l:28,hex:"#394c56"},30:{h:200,s:20,l:33,hex:"#435a65"},35:{h:200,s:20,l:37,hex:"#4b6571"},40:{h:200,s:20,l:42,hex:"#567281"},45:{h:200,s:20,l:47,hex:"#608090"},50:{h:200,s:20,l:52,hex:"#6c8d9d"},55:{h:200,s:20,l:56,hex:"#7896a5"},60:{h:200,s:20,l:61,hex:"#88a2af"},65:{h:200,s:20,l:66,hex:"#97aeba"},70:{h:200,s:20,l:71,hex:"#a6bac4"},75:{h:200,s:20,l:75,hex:"#b3c3cc"},80:{h:200,s:20,l:80,hex:"#c2cfd6"},85:{h:200,s:20,l:85,hex:"#d1dbe0"},90:{h:200,s:20,l:89,hex:"#dde5e9"},95:{h:200,s:20,l:94,hex:"#edf1f3"},100:{h:200,s:20,l:98,hex:"#f9fafb"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:20,max:20,minControl:{x:30,y:20},maxControl:{x:70,y:20}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey20",greyscale:!0},grey40:{name:"Grey40",hue:200,stops:{0:{h:200,s:40,l:5,hex:"#080e12"},5:{h:200,s:40,l:10,hex:"#0f1d24"},10:{h:200,s:40,l:14,hex:"#152832"},15:{h:200,s:40,l:19,hex:"#1d3744"},20:{h:200,s:40,l:23,hex:"#234252"},25:{h:200,s:40,l:28,hex:"#2b5164"},30:{h:200,s:40,l:33,hex:"#325f76"},35:{h:200,s:40,l:37,hex:"#396b84"},40:{h:200,s:40,l:42,hex:"#407996"},45:{h:200,s:40,l:47,hex:"#4888a8"},50:{h:200,s:40,l:52,hex:"#5495b6"},55:{h:200,s:40,l:56,hex:"#629ebc"},60:{h:200,s:40,l:61,hex:"#74a9c3"},65:{h:200,s:40,l:66,hex:"#86b4cb"},70:{h:200,s:40,l:71,hex:"#97bfd3"},75:{h:200,s:40,l:75,hex:"#a6c8d9"},80:{h:200,s:40,l:80,hex:"#b8d3e0"},85:{h:200,s:40,l:85,hex:"#c9dee8"},90:{h:200,s:40,l:89,hex:"#d8e7ee"},95:{h:200,s:40,l:94,hex:"#eaf2f6"},100:{h:200,s:40,l:98,hex:"#f8fbfc"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:40,max:40,minControl:{x:30,y:40},maxControl:{x:70,y:40}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey40",greyscale:!0}},Vr={name:a_,comment:o_,uri:i_,source:s_,ranges:c_},rc=Object.keys(Vr.ranges),d_=Object.entries(Vr.ranges).filter(([,e])=>!e.greyscale).map(([e])=>e),u_=Object.entries(Vr.ranges).filter(([,e])=>e.greyscale).map(([e])=>e);var py={exports:{}};/**
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
 */(function(e,t){(function(n,r){e.exports=r()})(Ao,function(){for(var n=function(c,u,p){return u===void 0&&(u=0),p===void 0&&(p=1),c<u?u:c>p?p:c},r=n,l=function(c){c._clipped=!1,c._unclipped=c.slice(0);for(var u=0;u<=3;u++)u<3?((c[u]<0||c[u]>255)&&(c._clipped=!0),c[u]=r(c[u],0,255)):u===3&&(c[u]=r(c[u],0,1));return c},o={},i=0,s=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];i<s.length;i+=1){var d=s[i];o["[object "+d+"]"]=d.toLowerCase()}var f=function(c){return o[Object.prototype.toString.call(c)]||"object"},m=f,b=function(c,u){return u===void 0&&(u=null),c.length>=3?Array.prototype.slice.call(c):m(c[0])=="object"&&u?u.split("").filter(function(p){return c[0][p]!==void 0}).map(function(p){return c[0][p]}):c[0]},S=f,L=function(c){if(c.length<2)return null;var u=c.length-1;return S(c[u])=="string"?c[u].toLowerCase():null},N=Math.PI,C={clip_rgb:l,limit:n,type:f,unpack:b,last:L,PI:N,TWOPI:N*2,PITHIRD:N/3,DEG2RAD:N/180,RAD2DEG:180/N},I={format:{},autodetect:[]},w=C.last,g=C.clip_rgb,y=C.type,v=I,T=function(){for(var u=[],p=arguments.length;p--;)u[p]=arguments[p];var x=this;if(y(u[0])==="object"&&u[0].constructor&&u[0].constructor===this.constructor)return u[0];var $=w(u),E=!1;if(!$){E=!0,v.sorted||(v.autodetect=v.autodetect.sort(function(H,K){return K.p-H.p}),v.sorted=!0);for(var k=0,R=v.autodetect;k<R.length;k+=1){var P=R[k];if($=P.test.apply(P,u),$)break}}if(v.format[$]){var z=v.format[$].apply(null,E?u:u.slice(0,-1));x._rgb=g(z)}else throw new Error("unknown format: "+u);x._rgb.length===3&&x._rgb.push(1)};T.prototype.toString=function(){return y(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var _=T,F=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(F.Color,[null].concat(c)))};F.Color=_,F.version="2.4.2";var O=F,B=C.unpack,q=Math.max,he=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=B(c,"rgb"),x=p[0],$=p[1],E=p[2];x=x/255,$=$/255,E=E/255;var k=1-q(x,q($,E)),R=k<1?1/(1-k):0,P=(1-x-k)*R,z=(1-$-k)*R,H=(1-E-k)*R;return[P,z,H,k]},se=he,Be=C.unpack,lt=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=Be(c,"cmyk");var p=c[0],x=c[1],$=c[2],E=c[3],k=c.length>4?c[4]:1;return E===1?[0,0,0,k]:[p>=1?0:255*(1-p)*(1-E),x>=1?0:255*(1-x)*(1-E),$>=1?0:255*(1-$)*(1-E),k]},Ve=lt,De=O,Ge=_,j=I,Z=C.unpack,J=C.type,ae=se;Ge.prototype.cmyk=function(){return ae(this._rgb)},De.cmyk=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(Ge,[null].concat(c,["cmyk"])))},j.format.cmyk=Ve,j.autodetect.push({p:2,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=Z(c,"cmyk"),J(c)==="array"&&c.length===4)return"cmyk"}});var fe=C.unpack,Dt=C.last,pe=function(c){return Math.round(c*100)/100},et=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=fe(c,"hsla"),x=Dt(c)||"lsa";return p[0]=pe(p[0]||0),p[1]=pe(p[1]*100)+"%",p[2]=pe(p[2]*100)+"%",x==="hsla"||p.length>3&&p[3]<1?(p[3]=p.length>3?p[3]:1,x="hsla"):p.length=3,x+"("+p.join(",")+")"},Ye=et,ht=C.unpack,Pt=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=ht(c,"rgba");var p=c[0],x=c[1],$=c[2];p/=255,x/=255,$/=255;var E=Math.min(p,x,$),k=Math.max(p,x,$),R=(k+E)/2,P,z;return k===E?(P=0,z=Number.NaN):P=R<.5?(k-E)/(k+E):(k-E)/(2-k-E),p==k?z=(x-$)/(k-E):x==k?z=2+($-p)/(k-E):$==k&&(z=4+(p-x)/(k-E)),z*=60,z<0&&(z+=360),c.length>3&&c[3]!==void 0?[z,P,R,c[3]]:[z,P,R]},Xr=Pt,Jr=C.unpack,Xn=C.last,ja=Ye,el=Xr,Ua=Math.round,tl=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=Jr(c,"rgba"),x=Xn(c)||"rgb";return x.substr(0,3)=="hsl"?ja(el(p),x):(p[0]=Ua(p[0]),p[1]=Ua(p[1]),p[2]=Ua(p[2]),(x==="rgba"||p.length>3&&p[3]<1)&&(p[3]=p.length>3?p[3]:1,x="rgba"),x+"("+p.slice(0,x==="rgb"?3:4).join(",")+")")},Si=tl,Ha=C.unpack,nl=Math.round,Wa=function(){for(var c,u=[],p=arguments.length;p--;)u[p]=arguments[p];u=Ha(u,"hsl");var x=u[0],$=u[1],E=u[2],k,R,P;if($===0)k=R=P=E*255;else{var z=[0,0,0],H=[0,0,0],K=E<.5?E*(1+$):E+$-E*$,V=2*E-K,ne=x/360;z[0]=ne+1/3,z[1]=ne,z[2]=ne-1/3;for(var ee=0;ee<3;ee++)z[ee]<0&&(z[ee]+=1),z[ee]>1&&(z[ee]-=1),6*z[ee]<1?H[ee]=V+(K-V)*6*z[ee]:2*z[ee]<1?H[ee]=K:3*z[ee]<2?H[ee]=V+(K-V)*(2/3-z[ee])*6:H[ee]=V;c=[nl(H[0]*255),nl(H[1]*255),nl(H[2]*255)],k=c[0],R=c[1],P=c[2]}return u.length>3?[k,R,P,u[3]]:[k,R,P,1]},Jn=Wa,Va=Jn,Ga=I,Ya=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,Ci=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,br=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,rl=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,qa=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,Ol=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,ki=Math.round,_i=function(c){c=c.toLowerCase().trim();var u;if(Ga.format.named)try{return Ga.format.named(c)}catch{}if(u=c.match(Ya)){for(var p=u.slice(1,4),x=0;x<3;x++)p[x]=+p[x];return p[3]=1,p}if(u=c.match(Ci)){for(var $=u.slice(1,5),E=0;E<4;E++)$[E]=+$[E];return $}if(u=c.match(br)){for(var k=u.slice(1,4),R=0;R<3;R++)k[R]=ki(k[R]*2.55);return k[3]=1,k}if(u=c.match(rl)){for(var P=u.slice(1,5),z=0;z<3;z++)P[z]=ki(P[z]*2.55);return P[3]=+P[3],P}if(u=c.match(qa)){var H=u.slice(1,4);H[1]*=.01,H[2]*=.01;var K=Va(H);return K[3]=1,K}if(u=c.match(Ol)){var V=u.slice(1,4);V[1]*=.01,V[2]*=.01;var ne=Va(V);return ne[3]=+u[4],ne}};_i.test=function(c){return Ya.test(c)||Ci.test(c)||br.test(c)||rl.test(c)||qa.test(c)||Ol.test(c)};var $i=_i,Bc=O,M=_,A=I,W=C.type,Q=Si,ie=$i;M.prototype.css=function(c){return Q(this._rgb,c)},Bc.css=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(M,[null].concat(c,["css"])))},A.format.css=ie,A.autodetect.push({p:5,test:function(c){for(var u=[],p=arguments.length-1;p-- >0;)u[p]=arguments[p+1];if(!u.length&&W(c)==="string"&&ie.test(c))return"css"}});var ce=_,de=O,ue=I,le=C.unpack;ue.format.gl=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=le(c,"rgba");return p[0]*=255,p[1]*=255,p[2]*=255,p},de.gl=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(ce,[null].concat(c,["gl"])))},ce.prototype.gl=function(){var c=this._rgb;return[c[0]/255,c[1]/255,c[2]/255,c[3]]};var $e=C.unpack,Pe=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=$e(c,"rgb"),x=p[0],$=p[1],E=p[2],k=Math.min(x,$,E),R=Math.max(x,$,E),P=R-k,z=P*100/255,H=k/(255-P)*100,K;return P===0?K=Number.NaN:(x===R&&(K=($-E)/P),$===R&&(K=2+(E-x)/P),E===R&&(K=4+(x-$)/P),K*=60,K<0&&(K+=360)),[K,z,H]},yt=Pe,it=C.unpack,ft=Math.floor,vn=function(){for(var c,u,p,x,$,E,k=[],R=arguments.length;R--;)k[R]=arguments[R];k=it(k,"hcg");var P=k[0],z=k[1],H=k[2],K,V,ne;H=H*255;var ee=z*255;if(z===0)K=V=ne=H;else{P===360&&(P=0),P>360&&(P-=360),P<0&&(P+=360),P/=60;var me=ft(P),Se=P-me,Te=H*(1-z),Ie=Te+ee*(1-Se),Ct=Te+ee*Se,wt=Te+ee;switch(me){case 0:c=[wt,Ct,Te],K=c[0],V=c[1],ne=c[2];break;case 1:u=[Ie,wt,Te],K=u[0],V=u[1],ne=u[2];break;case 2:p=[Te,wt,Ct],K=p[0],V=p[1],ne=p[2];break;case 3:x=[Te,Ie,wt],K=x[0],V=x[1],ne=x[2];break;case 4:$=[Ct,Te,wt],K=$[0],V=$[1],ne=$[2];break;case 5:E=[wt,Te,Ie],K=E[0],V=E[1],ne=E[2];break}}return[K,V,ne,k.length>3?k[3]:1]},ll=vn,Za=C.unpack,Al=C.type,$n=O,al=_,Dl=I,Qa=yt;al.prototype.hcg=function(){return Qa(this._rgb)},$n.hcg=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(al,[null].concat(c,["hcg"])))},Dl.format.hcg=ll,Dl.autodetect.push({p:1,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=Za(c,"hcg"),Al(c)==="array"&&c.length===3)return"hcg"}});var Ka=C.unpack,zl=C.last,ze=Math.round,Yt=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=Ka(c,"rgba"),x=p[0],$=p[1],E=p[2],k=p[3],R=zl(c)||"auto";k===void 0&&(k=1),R==="auto"&&(R=k<1?"rgba":"rgb"),x=ze(x),$=ze($),E=ze(E);var P=x<<16|$<<8|E,z="000000"+P.toString(16);z=z.substr(z.length-6);var H="0"+ze(k*255).toString(16);switch(H=H.substr(H.length-2),R.toLowerCase()){case"rgba":return"#"+z+H;case"argb":return"#"+H+z;default:return"#"+z}},er=Yt,pt=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,Xa=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,Ti=function(c){if(c.match(pt)){(c.length===4||c.length===7)&&(c=c.substr(1)),c.length===3&&(c=c.split(""),c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]);var u=parseInt(c,16),p=u>>16,x=u>>8&255,$=u&255;return[p,x,$,1]}if(c.match(Xa)){(c.length===5||c.length===9)&&(c=c.substr(1)),c.length===4&&(c=c.split(""),c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]+c[3]+c[3]);var E=parseInt(c,16),k=E>>24&255,R=E>>16&255,P=E>>8&255,z=Math.round((E&255)/255*100)/100;return[k,R,P,z]}throw new Error("unknown hex color: "+c)},Ei=Ti,I3=O,rp=_,R3=C.type,lp=I,P3=er;rp.prototype.hex=function(c){return P3(this._rgb,c)},I3.hex=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(rp,[null].concat(c,["hex"])))},lp.format.hex=Ei,lp.autodetect.push({p:4,test:function(c){for(var u=[],p=arguments.length-1;p-- >0;)u[p]=arguments[p+1];if(!u.length&&R3(c)==="string"&&[3,4,5,6,7,8,9].indexOf(c.length)>=0)return"hex"}});var F3=C.unpack,ap=C.TWOPI,M3=Math.min,O3=Math.sqrt,A3=Math.acos,D3=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=F3(c,"rgb"),x=p[0],$=p[1],E=p[2];x/=255,$/=255,E/=255;var k,R=M3(x,$,E),P=(x+$+E)/3,z=P>0?1-R/P:0;return z===0?k=NaN:(k=(x-$+(x-E))/2,k/=O3((x-$)*(x-$)+(x-E)*($-E)),k=A3(k),E>$&&(k=ap-k),k/=ap),[k*360,z,P]},z3=D3,B3=C.unpack,jc=C.limit,Bl=C.TWOPI,Uc=C.PITHIRD,jl=Math.cos,j3=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=B3(c,"hsi");var p=c[0],x=c[1],$=c[2],E,k,R;return isNaN(p)&&(p=0),isNaN(x)&&(x=0),p>360&&(p-=360),p<0&&(p+=360),p/=360,p<1/3?(R=(1-x)/3,E=(1+x*jl(Bl*p)/jl(Uc-Bl*p))/3,k=1-(R+E)):p<2/3?(p-=1/3,E=(1-x)/3,k=(1+x*jl(Bl*p)/jl(Uc-Bl*p))/3,R=1-(E+k)):(p-=2/3,k=(1-x)/3,R=(1+x*jl(Bl*p)/jl(Uc-Bl*p))/3,E=1-(k+R)),E=jc($*E*3),k=jc($*k*3),R=jc($*R*3),[E*255,k*255,R*255,c.length>3?c[3]:1]},U3=j3,H3=C.unpack,W3=C.type,V3=O,op=_,ip=I,G3=z3;op.prototype.hsi=function(){return G3(this._rgb)},V3.hsi=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(op,[null].concat(c,["hsi"])))},ip.format.hsi=U3,ip.autodetect.push({p:2,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=H3(c,"hsi"),W3(c)==="array"&&c.length===3)return"hsi"}});var Y3=C.unpack,q3=C.type,Z3=O,sp=_,cp=I,Q3=Xr;sp.prototype.hsl=function(){return Q3(this._rgb)},Z3.hsl=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(sp,[null].concat(c,["hsl"])))},cp.format.hsl=Jn,cp.autodetect.push({p:2,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=Y3(c,"hsl"),q3(c)==="array"&&c.length===3)return"hsl"}});var K3=C.unpack,X3=Math.min,J3=Math.max,eb=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=K3(c,"rgb");var p=c[0],x=c[1],$=c[2],E=X3(p,x,$),k=J3(p,x,$),R=k-E,P,z,H;return H=k/255,k===0?(P=Number.NaN,z=0):(z=R/k,p===k&&(P=(x-$)/R),x===k&&(P=2+($-p)/R),$===k&&(P=4+(p-x)/R),P*=60,P<0&&(P+=360)),[P,z,H]},tb=eb,nb=C.unpack,rb=Math.floor,lb=function(){for(var c,u,p,x,$,E,k=[],R=arguments.length;R--;)k[R]=arguments[R];k=nb(k,"hsv");var P=k[0],z=k[1],H=k[2],K,V,ne;if(H*=255,z===0)K=V=ne=H;else{P===360&&(P=0),P>360&&(P-=360),P<0&&(P+=360),P/=60;var ee=rb(P),me=P-ee,Se=H*(1-z),Te=H*(1-z*me),Ie=H*(1-z*(1-me));switch(ee){case 0:c=[H,Ie,Se],K=c[0],V=c[1],ne=c[2];break;case 1:u=[Te,H,Se],K=u[0],V=u[1],ne=u[2];break;case 2:p=[Se,H,Ie],K=p[0],V=p[1],ne=p[2];break;case 3:x=[Se,Te,H],K=x[0],V=x[1],ne=x[2];break;case 4:$=[Ie,Se,H],K=$[0],V=$[1],ne=$[2];break;case 5:E=[H,Se,Te],K=E[0],V=E[1],ne=E[2];break}}return[K,V,ne,k.length>3?k[3]:1]},ab=lb,ob=C.unpack,ib=C.type,sb=O,dp=_,up=I,cb=tb;dp.prototype.hsv=function(){return cb(this._rgb)},sb.hsv=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(dp,[null].concat(c,["hsv"])))},up.format.hsv=ab,up.autodetect.push({p:2,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=ob(c,"hsv"),ib(c)==="array"&&c.length===3)return"hsv"}});var Ni={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},Ul=Ni,db=C.unpack,hp=Math.pow,ub=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=db(c,"rgb"),x=p[0],$=p[1],E=p[2],k=hb(x,$,E),R=k[0],P=k[1],z=k[2],H=116*P-16;return[H<0?0:H,500*(R-P),200*(P-z)]},Hc=function(c){return(c/=255)<=.04045?c/12.92:hp((c+.055)/1.055,2.4)},Wc=function(c){return c>Ul.t3?hp(c,1/3):c/Ul.t2+Ul.t0},hb=function(c,u,p){c=Hc(c),u=Hc(u),p=Hc(p);var x=Wc((.4124564*c+.3575761*u+.1804375*p)/Ul.Xn),$=Wc((.2126729*c+.7151522*u+.072175*p)/Ul.Yn),E=Wc((.0193339*c+.119192*u+.9503041*p)/Ul.Zn);return[x,$,E]},fp=ub,Hl=Ni,fb=C.unpack,pb=Math.pow,gb=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=fb(c,"lab");var p=c[0],x=c[1],$=c[2],E,k,R,P,z,H;return k=(p+16)/116,E=isNaN(x)?k:k+x/500,R=isNaN($)?k:k-$/200,k=Hl.Yn*Gc(k),E=Hl.Xn*Gc(E),R=Hl.Zn*Gc(R),P=Vc(3.2404542*E-1.5371385*k-.4985314*R),z=Vc(-.969266*E+1.8760108*k+.041556*R),H=Vc(.0556434*E-.2040259*k+1.0572252*R),[P,z,H,c.length>3?c[3]:1]},Vc=function(c){return 255*(c<=.00304?12.92*c:1.055*pb(c,1/2.4)-.055)},Gc=function(c){return c>Hl.t1?c*c*c:Hl.t2*(c-Hl.t0)},pp=gb,mb=C.unpack,vb=C.type,yb=O,gp=_,mp=I,bb=fp;gp.prototype.lab=function(){return bb(this._rgb)},yb.lab=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(gp,[null].concat(c,["lab"])))},mp.format.lab=pp,mp.autodetect.push({p:2,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=mb(c,"lab"),vb(c)==="array"&&c.length===3)return"lab"}});var wb=C.unpack,xb=C.RAD2DEG,Sb=Math.sqrt,Cb=Math.atan2,kb=Math.round,_b=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=wb(c,"lab"),x=p[0],$=p[1],E=p[2],k=Sb($*$+E*E),R=(Cb(E,$)*xb+360)%360;return kb(k*1e4)===0&&(R=Number.NaN),[x,k,R]},vp=_b,$b=C.unpack,Tb=fp,Eb=vp,Nb=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=$b(c,"rgb"),x=p[0],$=p[1],E=p[2],k=Tb(x,$,E),R=k[0],P=k[1],z=k[2];return Eb(R,P,z)},Lb=Nb,Ib=C.unpack,Rb=C.DEG2RAD,Pb=Math.sin,Fb=Math.cos,Mb=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=Ib(c,"lch"),x=p[0],$=p[1],E=p[2];return isNaN(E)&&(E=0),E=E*Rb,[x,Fb(E)*$,Pb(E)*$]},yp=Mb,Ob=C.unpack,Ab=yp,Db=pp,zb=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=Ob(c,"lch");var p=c[0],x=c[1],$=c[2],E=Ab(p,x,$),k=E[0],R=E[1],P=E[2],z=Db(k,R,P),H=z[0],K=z[1],V=z[2];return[H,K,V,c.length>3?c[3]:1]},bp=zb,Bb=C.unpack,jb=bp,Ub=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=Bb(c,"hcl").reverse();return jb.apply(void 0,p)},Hb=Ub,Wb=C.unpack,Vb=C.type,wp=O,Li=_,Yc=I,xp=Lb;Li.prototype.lch=function(){return xp(this._rgb)},Li.prototype.hcl=function(){return xp(this._rgb).reverse()},wp.lch=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(Li,[null].concat(c,["lch"])))},wp.hcl=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(Li,[null].concat(c,["hcl"])))},Yc.format.lch=bp,Yc.format.hcl=Hb,["lch","hcl"].forEach(function(c){return Yc.autodetect.push({p:2,test:function(){for(var u=[],p=arguments.length;p--;)u[p]=arguments[p];if(u=Wb(u,c),Vb(u)==="array"&&u.length===3)return c}})});var Gb={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},Sp=Gb,Yb=_,Cp=I,qb=C.type,Ja=Sp,Zb=Ei,Qb=er;Yb.prototype.name=function(){for(var c=Qb(this._rgb,"rgb"),u=0,p=Object.keys(Ja);u<p.length;u+=1){var x=p[u];if(Ja[x]===c)return x.toLowerCase()}return c},Cp.format.named=function(c){if(c=c.toLowerCase(),Ja[c])return Zb(Ja[c]);throw new Error("unknown color name: "+c)},Cp.autodetect.push({p:5,test:function(c){for(var u=[],p=arguments.length-1;p-- >0;)u[p]=arguments[p+1];if(!u.length&&qb(c)==="string"&&Ja[c.toLowerCase()])return"named"}});var Kb=C.unpack,Xb=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=Kb(c,"rgb"),x=p[0],$=p[1],E=p[2];return(x<<16)+($<<8)+E},Jb=Xb,e4=C.type,t4=function(c){if(e4(c)=="number"&&c>=0&&c<=16777215){var u=c>>16,p=c>>8&255,x=c&255;return[u,p,x,1]}throw new Error("unknown num color: "+c)},n4=t4,r4=O,kp=_,_p=I,l4=C.type,a4=Jb;kp.prototype.num=function(){return a4(this._rgb)},r4.num=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(kp,[null].concat(c,["num"])))},_p.format.num=n4,_p.autodetect.push({p:5,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c.length===1&&l4(c[0])==="number"&&c[0]>=0&&c[0]<=16777215)return"num"}});var o4=O,qc=_,$p=I,Tp=C.unpack,Ep=C.type,Np=Math.round;qc.prototype.rgb=function(c){return c===void 0&&(c=!0),c===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(Np)},qc.prototype.rgba=function(c){return c===void 0&&(c=!0),this._rgb.slice(0,4).map(function(u,p){return p<3?c===!1?u:Np(u):u})},o4.rgb=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(qc,[null].concat(c,["rgb"])))},$p.format.rgb=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=Tp(c,"rgba");return p[3]===void 0&&(p[3]=1),p},$p.autodetect.push({p:3,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=Tp(c,"rgba"),Ep(c)==="array"&&(c.length===3||c.length===4&&Ep(c[3])=="number"&&c[3]>=0&&c[3]<=1))return"rgb"}});var Ii=Math.log,i4=function(c){var u=c/100,p,x,$;return u<66?(p=255,x=u<6?0:-155.25485562709179-.44596950469579133*(x=u-2)+104.49216199393888*Ii(x),$=u<20?0:-254.76935184120902+.8274096064007395*($=u-10)+115.67994401066147*Ii($)):(p=351.97690566805693+.114206453784165*(p=u-55)-40.25366309332127*Ii(p),x=325.4494125711974+.07943456536662342*(x=u-50)-28.0852963507957*Ii(x),$=255),[p,x,$,1]},Lp=i4,s4=Lp,c4=C.unpack,d4=Math.round,u4=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];for(var p=c4(c,"rgb"),x=p[0],$=p[2],E=1e3,k=4e4,R=.4,P;k-E>R;){P=(k+E)*.5;var z=s4(P);z[2]/z[0]>=$/x?k=P:E=P}return d4(P)},h4=u4,Zc=O,Ri=_,Qc=I,f4=h4;Ri.prototype.temp=Ri.prototype.kelvin=Ri.prototype.temperature=function(){return f4(this._rgb)},Zc.temp=Zc.kelvin=Zc.temperature=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(Ri,[null].concat(c,["temp"])))},Qc.format.temp=Qc.format.kelvin=Qc.format.temperature=Lp;var p4=C.unpack,Kc=Math.cbrt,g4=Math.pow,m4=Math.sign,v4=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=p4(c,"rgb"),x=p[0],$=p[1],E=p[2],k=[Xc(x/255),Xc($/255),Xc(E/255)],R=k[0],P=k[1],z=k[2],H=Kc(.4122214708*R+.5363325363*P+.0514459929*z),K=Kc(.2119034982*R+.6806995451*P+.1073969566*z),V=Kc(.0883024619*R+.2817188376*P+.6299787005*z);return[.2104542553*H+.793617785*K-.0040720468*V,1.9779984951*H-2.428592205*K+.4505937099*V,.0259040371*H+.7827717662*K-.808675766*V]},Ip=v4;function Xc(c){var u=Math.abs(c);return u<.04045?c/12.92:(m4(c)||1)*g4((u+.055)/1.055,2.4)}var y4=C.unpack,Pi=Math.pow,b4=Math.sign,w4=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=y4(c,"lab");var p=c[0],x=c[1],$=c[2],E=Pi(p+.3963377774*x+.2158037573*$,3),k=Pi(p-.1055613458*x-.0638541728*$,3),R=Pi(p-.0894841775*x-1.291485548*$,3);return[255*Jc(4.0767416621*E-3.3077115913*k+.2309699292*R),255*Jc(-1.2684380046*E+2.6097574011*k-.3413193965*R),255*Jc(-.0041960863*E-.7034186147*k+1.707614701*R),c.length>3?c[3]:1]},Rp=w4;function Jc(c){var u=Math.abs(c);return u>.0031308?(b4(c)||1)*(1.055*Pi(u,1/2.4)-.055):c*12.92}var x4=C.unpack,S4=C.type,C4=O,Pp=_,Fp=I,k4=Ip;Pp.prototype.oklab=function(){return k4(this._rgb)},C4.oklab=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(Pp,[null].concat(c,["oklab"])))},Fp.format.oklab=Rp,Fp.autodetect.push({p:3,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=x4(c,"oklab"),S4(c)==="array"&&c.length===3)return"oklab"}});var _4=C.unpack,$4=Ip,T4=vp,E4=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=_4(c,"rgb"),x=p[0],$=p[1],E=p[2],k=$4(x,$,E),R=k[0],P=k[1],z=k[2];return T4(R,P,z)},N4=E4,L4=C.unpack,I4=yp,R4=Rp,P4=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=L4(c,"lch");var p=c[0],x=c[1],$=c[2],E=I4(p,x,$),k=E[0],R=E[1],P=E[2],z=R4(k,R,P),H=z[0],K=z[1],V=z[2];return[H,K,V,c.length>3?c[3]:1]},F4=P4,M4=C.unpack,O4=C.type,A4=O,Mp=_,Op=I,D4=N4;Mp.prototype.oklch=function(){return D4(this._rgb)},A4.oklch=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(Mp,[null].concat(c,["oklch"])))},Op.format.oklch=F4,Op.autodetect.push({p:3,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=M4(c,"oklch"),O4(c)==="array"&&c.length===3)return"oklch"}});var Ap=_,z4=C.type;Ap.prototype.alpha=function(c,u){return u===void 0&&(u=!1),c!==void 0&&z4(c)==="number"?u?(this._rgb[3]=c,this):new Ap([this._rgb[0],this._rgb[1],this._rgb[2],c],"rgb"):this._rgb[3]};var B4=_;B4.prototype.clipped=function(){return this._rgb._clipped||!1};var ol=_,j4=Ni;ol.prototype.darken=function(c){c===void 0&&(c=1);var u=this,p=u.lab();return p[0]-=j4.Kn*c,new ol(p,"lab").alpha(u.alpha(),!0)},ol.prototype.brighten=function(c){return c===void 0&&(c=1),this.darken(-c)},ol.prototype.darker=ol.prototype.darken,ol.prototype.brighter=ol.prototype.brighten;var U4=_;U4.prototype.get=function(c){var u=c.split("."),p=u[0],x=u[1],$=this[p]();if(x){var E=p.indexOf(x)-(p.substr(0,2)==="ok"?2:0);if(E>-1)return $[E];throw new Error("unknown channel "+x+" in mode "+p)}else return $};var Wl=_,H4=C.type,W4=Math.pow,V4=1e-7,G4=20;Wl.prototype.luminance=function(c){if(c!==void 0&&H4(c)==="number"){if(c===0)return new Wl([0,0,0,this._rgb[3]],"rgb");if(c===1)return new Wl([255,255,255,this._rgb[3]],"rgb");var u=this.luminance(),p="rgb",x=G4,$=function(k,R){var P=k.interpolate(R,.5,p),z=P.luminance();return Math.abs(c-z)<V4||!x--?P:z>c?$(k,P):$(P,R)},E=(u>c?$(new Wl([0,0,0]),this):$(this,new Wl([255,255,255]))).rgb();return new Wl(E.concat([this._rgb[3]]))}return Y4.apply(void 0,this._rgb.slice(0,3))};var Y4=function(c,u,p){return c=ed(c),u=ed(u),p=ed(p),.2126*c+.7152*u+.0722*p},ed=function(c){return c/=255,c<=.03928?c/12.92:W4((c+.055)/1.055,2.4)},rn={},Dp=_,zp=C.type,Fi=rn,Bp=function(c,u,p){p===void 0&&(p=.5);for(var x=[],$=arguments.length-3;$-- >0;)x[$]=arguments[$+3];var E=x[0]||"lrgb";if(!Fi[E]&&!x.length&&(E=Object.keys(Fi)[0]),!Fi[E])throw new Error("interpolation mode "+E+" is not defined");return zp(c)!=="object"&&(c=new Dp(c)),zp(u)!=="object"&&(u=new Dp(u)),Fi[E](c,u,p).alpha(c.alpha()+p*(u.alpha()-c.alpha()))},jp=_,q4=Bp;jp.prototype.mix=jp.prototype.interpolate=function(c,u){u===void 0&&(u=.5);for(var p=[],x=arguments.length-2;x-- >0;)p[x]=arguments[x+2];return q4.apply(void 0,[this,c,u].concat(p))};var Up=_;Up.prototype.premultiply=function(c){c===void 0&&(c=!1);var u=this._rgb,p=u[3];return c?(this._rgb=[u[0]*p,u[1]*p,u[2]*p,p],this):new Up([u[0]*p,u[1]*p,u[2]*p,p],"rgb")};var td=_,Z4=Ni;td.prototype.saturate=function(c){c===void 0&&(c=1);var u=this,p=u.lch();return p[1]+=Z4.Kn*c,p[1]<0&&(p[1]=0),new td(p,"lch").alpha(u.alpha(),!0)},td.prototype.desaturate=function(c){return c===void 0&&(c=1),this.saturate(-c)};var Hp=_,Wp=C.type;Hp.prototype.set=function(c,u,p){p===void 0&&(p=!1);var x=c.split("."),$=x[0],E=x[1],k=this[$]();if(E){var R=$.indexOf(E)-($.substr(0,2)==="ok"?2:0);if(R>-1){if(Wp(u)=="string")switch(u.charAt(0)){case"+":k[R]+=+u;break;case"-":k[R]+=+u;break;case"*":k[R]*=+u.substr(1);break;case"/":k[R]/=+u.substr(1);break;default:k[R]=+u}else if(Wp(u)==="number")k[R]=u;else throw new Error("unsupported value for Color.set");var P=new Hp(k,$);return p?(this._rgb=P._rgb,this):P}throw new Error("unknown channel "+E+" in mode "+$)}else return k};var Q4=_,K4=function(c,u,p){var x=c._rgb,$=u._rgb;return new Q4(x[0]+p*($[0]-x[0]),x[1]+p*($[1]-x[1]),x[2]+p*($[2]-x[2]),"rgb")};rn.rgb=K4;var X4=_,nd=Math.sqrt,Vl=Math.pow,J4=function(c,u,p){var x=c._rgb,$=x[0],E=x[1],k=x[2],R=u._rgb,P=R[0],z=R[1],H=R[2];return new X4(nd(Vl($,2)*(1-p)+Vl(P,2)*p),nd(Vl(E,2)*(1-p)+Vl(z,2)*p),nd(Vl(k,2)*(1-p)+Vl(H,2)*p),"rgb")};rn.lrgb=J4;var e5=_,t5=function(c,u,p){var x=c.lab(),$=u.lab();return new e5(x[0]+p*($[0]-x[0]),x[1]+p*($[1]-x[1]),x[2]+p*($[2]-x[2]),"lab")};rn.lab=t5;var Vp=_,Gl=function(c,u,p,x){var $,E,k,R;x==="hsl"?(k=c.hsl(),R=u.hsl()):x==="hsv"?(k=c.hsv(),R=u.hsv()):x==="hcg"?(k=c.hcg(),R=u.hcg()):x==="hsi"?(k=c.hsi(),R=u.hsi()):x==="lch"||x==="hcl"?(x="hcl",k=c.hcl(),R=u.hcl()):x==="oklch"&&(k=c.oklch().reverse(),R=u.oklch().reverse());var P,z,H,K,V,ne;(x.substr(0,1)==="h"||x==="oklch")&&($=k,P=$[0],H=$[1],V=$[2],E=R,z=E[0],K=E[1],ne=E[2]);var ee,me,Se,Te;return!isNaN(P)&&!isNaN(z)?(z>P&&z-P>180?Te=z-(P+360):z<P&&P-z>180?Te=z+360-P:Te=z-P,me=P+p*Te):isNaN(P)?isNaN(z)?me=Number.NaN:(me=z,(V==1||V==0)&&x!="hsv"&&(ee=K)):(me=P,(ne==1||ne==0)&&x!="hsv"&&(ee=H)),ee===void 0&&(ee=H+p*(K-H)),Se=V+p*(ne-V),x==="oklch"?new Vp([Se,ee,me],x):new Vp([me,ee,Se],x)},n5=Gl,Gp=function(c,u,p){return n5(c,u,p,"lch")};rn.lch=Gp,rn.hcl=Gp;var r5=_,l5=function(c,u,p){var x=c.num(),$=u.num();return new r5(x+p*($-x),"num")};rn.num=l5;var a5=Gl,o5=function(c,u,p){return a5(c,u,p,"hcg")};rn.hcg=o5;var i5=Gl,s5=function(c,u,p){return i5(c,u,p,"hsi")};rn.hsi=s5;var c5=Gl,d5=function(c,u,p){return c5(c,u,p,"hsl")};rn.hsl=d5;var u5=Gl,h5=function(c,u,p){return u5(c,u,p,"hsv")};rn.hsv=h5;var f5=_,p5=function(c,u,p){var x=c.oklab(),$=u.oklab();return new f5(x[0]+p*($[0]-x[0]),x[1]+p*($[1]-x[1]),x[2]+p*($[2]-x[2]),"oklab")};rn.oklab=p5;var g5=Gl,m5=function(c,u,p){return g5(c,u,p,"oklch")};rn.oklch=m5;var rd=_,v5=C.clip_rgb,ld=Math.pow,ad=Math.sqrt,od=Math.PI,Yp=Math.cos,qp=Math.sin,y5=Math.atan2,b5=function(c,u,p){u===void 0&&(u="lrgb"),p===void 0&&(p=null);var x=c.length;p||(p=Array.from(new Array(x)).map(function(){return 1}));var $=x/p.reduce(function(me,Se){return me+Se});if(p.forEach(function(me,Se){p[Se]*=$}),c=c.map(function(me){return new rd(me)}),u==="lrgb")return w5(c,p);for(var E=c.shift(),k=E.get(u),R=[],P=0,z=0,H=0;H<k.length;H++)if(k[H]=(k[H]||0)*p[0],R.push(isNaN(k[H])?0:p[0]),u.charAt(H)==="h"&&!isNaN(k[H])){var K=k[H]/180*od;P+=Yp(K)*p[0],z+=qp(K)*p[0]}var V=E.alpha()*p[0];c.forEach(function(me,Se){var Te=me.get(u);V+=me.alpha()*p[Se+1];for(var Ie=0;Ie<k.length;Ie++)if(!isNaN(Te[Ie]))if(R[Ie]+=p[Se+1],u.charAt(Ie)==="h"){var Ct=Te[Ie]/180*od;P+=Yp(Ct)*p[Se+1],z+=qp(Ct)*p[Se+1]}else k[Ie]+=Te[Ie]*p[Se+1]});for(var ne=0;ne<k.length;ne++)if(u.charAt(ne)==="h"){for(var ee=y5(z/R[ne],P/R[ne])/od*180;ee<0;)ee+=360;for(;ee>=360;)ee-=360;k[ne]=ee}else k[ne]=k[ne]/R[ne];return V/=x,new rd(k,u).alpha(V>.99999?1:V,!0)},w5=function(c,u){for(var p=c.length,x=[0,0,0,0],$=0;$<c.length;$++){var E=c[$],k=u[$]/p,R=E._rgb;x[0]+=ld(R[0],2)*k,x[1]+=ld(R[1],2)*k,x[2]+=ld(R[2],2)*k,x[3]+=R[3]*k}return x[0]=ad(x[0]),x[1]=ad(x[1]),x[2]=ad(x[2]),x[3]>.9999999&&(x[3]=1),new rd(v5(x))},Tn=O,Yl=C.type,x5=Math.pow,id=function(c){var u="rgb",p=Tn("#ccc"),x=0,$=[0,1],E=[],k=[0,0],R=!1,P=[],z=!1,H=0,K=1,V=!1,ne={},ee=!0,me=1,Se=function(G){if(G=G||["#fff","#000"],G&&Yl(G)==="string"&&Tn.brewer&&Tn.brewer[G.toLowerCase()]&&(G=Tn.brewer[G.toLowerCase()]),Yl(G)==="array"){G.length===1&&(G=[G[0],G[0]]),G=G.slice(0);for(var oe=0;oe<G.length;oe++)G[oe]=Tn(G[oe]);E.length=0;for(var be=0;be<G.length;be++)E.push(be/(G.length-1))}return qt(),P=G},Te=function(G){if(R!=null){for(var oe=R.length-1,be=0;be<oe&&G>=R[be];)be++;return be-1}return 0},Ie=function(G){return G},Ct=function(G){return G},wt=function(G,oe){var be,ve;if(oe==null&&(oe=!1),isNaN(G)||G===null)return p;if(oe)ve=G;else if(R&&R.length>2){var kt=Te(G);ve=kt/(R.length-2)}else K!==H?ve=(G-H)/(K-H):ve=1;ve=Ct(ve),oe||(ve=Ie(ve)),me!==1&&(ve=x5(ve,me)),ve=k[0]+ve*(1-k[0]-k[1]),ve=Math.min(1,Math.max(0,ve));var je=Math.floor(ve*1e4);if(ee&&ne[je])be=ne[je];else{if(Yl(P)==="array")for(var Ee=0;Ee<E.length;Ee++){var Fe=E[Ee];if(ve<=Fe){be=P[Ee];break}if(ve>=Fe&&Ee===E.length-1){be=P[Ee];break}if(ve>Fe&&ve<E[Ee+1]){ve=(ve-Fe)/(E[Ee+1]-Fe),be=Tn.interpolate(P[Ee],P[Ee+1],ve,u);break}}else Yl(P)==="function"&&(be=P(ve));ee&&(ne[je]=be)}return be},qt=function(){return ne={}};Se(c);var _e=function(G){var oe=Tn(wt(G));return z&&oe[z]?oe[z]():oe};return _e.classes=function(G){if(G!=null){if(Yl(G)==="array")R=G,$=[G[0],G[G.length-1]];else{var oe=Tn.analyze($);G===0?R=[oe.min,oe.max]:R=Tn.limits(oe,"e",G)}return _e}return R},_e.domain=function(G){if(!arguments.length)return $;H=G[0],K=G[G.length-1],E=[];var oe=P.length;if(G.length===oe&&H!==K)for(var be=0,ve=Array.from(G);be<ve.length;be+=1){var kt=ve[be];E.push((kt-H)/(K-H))}else{for(var je=0;je<oe;je++)E.push(je/(oe-1));if(G.length>2){var Ee=G.map(function(Me,Oe){return Oe/(G.length-1)}),Fe=G.map(function(Me){return(Me-H)/(K-H)});Fe.every(function(Me,Oe){return Ee[Oe]===Me})||(Ct=function(Me){if(Me<=0||Me>=1)return Me;for(var Oe=0;Me>=Fe[Oe+1];)Oe++;var Nn=(Me-Fe[Oe])/(Fe[Oe+1]-Fe[Oe]),Sr=Ee[Oe]+Nn*(Ee[Oe+1]-Ee[Oe]);return Sr})}}return $=[H,K],_e},_e.mode=function(G){return arguments.length?(u=G,qt(),_e):u},_e.range=function(G,oe){return Se(G),_e},_e.out=function(G){return z=G,_e},_e.spread=function(G){return arguments.length?(x=G,_e):x},_e.correctLightness=function(G){return G==null&&(G=!0),V=G,qt(),V?Ie=function(oe){for(var be=wt(0,!0).lab()[0],ve=wt(1,!0).lab()[0],kt=be>ve,je=wt(oe,!0).lab()[0],Ee=be+(ve-be)*oe,Fe=je-Ee,Me=0,Oe=1,Nn=20;Math.abs(Fe)>.01&&Nn-- >0;)(function(){return kt&&(Fe*=-1),Fe<0?(Me=oe,oe+=(Oe-oe)*.5):(Oe=oe,oe+=(Me-oe)*.5),je=wt(oe,!0).lab()[0],Fe=je-Ee})();return oe}:Ie=function(oe){return oe},_e},_e.padding=function(G){return G!=null?(Yl(G)==="number"&&(G=[G,G]),k=G,_e):k},_e.colors=function(G,oe){arguments.length<2&&(oe="hex");var be=[];if(arguments.length===0)be=P.slice(0);else if(G===1)be=[_e(.5)];else if(G>1){var ve=$[0],kt=$[1]-ve;be=S5(0,G,!1).map(function(Oe){return _e(ve+Oe/(G-1)*kt)})}else{c=[];var je=[];if(R&&R.length>2)for(var Ee=1,Fe=R.length,Me=1<=Fe;Me?Ee<Fe:Ee>Fe;Me?Ee++:Ee--)je.push((R[Ee-1]+R[Ee])*.5);else je=$;be=je.map(function(Oe){return _e(Oe)})}return Tn[oe]&&(be=be.map(function(Oe){return Oe[oe]()})),be},_e.cache=function(G){return G!=null?(ee=G,_e):ee},_e.gamma=function(G){return G!=null?(me=G,_e):me},_e.nodata=function(G){return G!=null?(p=Tn(G),_e):p},_e};function S5(c,u,p){for(var x=[],$=c<u,E=p?$?u+1:u-1:u,k=c;$?k<E:k>E;$?k++:k--)x.push(k);return x}var eo=_,C5=id,k5=function(c){for(var u=[1,1],p=1;p<c;p++){for(var x=[1],$=1;$<=u.length;$++)x[$]=(u[$]||0)+u[$-1];u=x}return u},_5=function(c){var u,p,x,$,E,k,R;if(c=c.map(function(V){return new eo(V)}),c.length===2)u=c.map(function(V){return V.lab()}),E=u[0],k=u[1],$=function(V){var ne=[0,1,2].map(function(ee){return E[ee]+V*(k[ee]-E[ee])});return new eo(ne,"lab")};else if(c.length===3)p=c.map(function(V){return V.lab()}),E=p[0],k=p[1],R=p[2],$=function(V){var ne=[0,1,2].map(function(ee){return(1-V)*(1-V)*E[ee]+2*(1-V)*V*k[ee]+V*V*R[ee]});return new eo(ne,"lab")};else if(c.length===4){var P;x=c.map(function(V){return V.lab()}),E=x[0],k=x[1],R=x[2],P=x[3],$=function(V){var ne=[0,1,2].map(function(ee){return(1-V)*(1-V)*(1-V)*E[ee]+3*(1-V)*(1-V)*V*k[ee]+3*(1-V)*V*V*R[ee]+V*V*V*P[ee]});return new eo(ne,"lab")}}else if(c.length>=5){var z,H,K;z=c.map(function(V){return V.lab()}),K=c.length-1,H=k5(K),$=function(V){var ne=1-V,ee=[0,1,2].map(function(me){return z.reduce(function(Se,Te,Ie){return Se+H[Ie]*Math.pow(ne,K-Ie)*Math.pow(V,Ie)*Te[me]},0)});return new eo(ee,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return $},$5=function(c){var u=_5(c);return u.scale=function(){return C5(u)},u},sd=O,En=function(c,u,p){if(!En[p])throw new Error("unknown blend mode "+p);return En[p](c,u)},wr=function(c){return function(u,p){var x=sd(p).rgb(),$=sd(u).rgb();return sd.rgb(c(x,$))}},xr=function(c){return function(u,p){var x=[];return x[0]=c(u[0],p[0]),x[1]=c(u[1],p[1]),x[2]=c(u[2],p[2]),x}},T5=function(c){return c},E5=function(c,u){return c*u/255},N5=function(c,u){return c>u?u:c},L5=function(c,u){return c>u?c:u},I5=function(c,u){return 255*(1-(1-c/255)*(1-u/255))},R5=function(c,u){return u<128?2*c*u/255:255*(1-2*(1-c/255)*(1-u/255))},P5=function(c,u){return 255*(1-(1-u/255)/(c/255))},F5=function(c,u){return c===255?255:(c=255*(u/255)/(1-c/255),c>255?255:c)};En.normal=wr(xr(T5)),En.multiply=wr(xr(E5)),En.screen=wr(xr(I5)),En.overlay=wr(xr(R5)),En.darken=wr(xr(N5)),En.lighten=wr(xr(L5)),En.dodge=wr(xr(F5)),En.burn=wr(xr(P5));for(var M5=En,cd=C.type,O5=C.clip_rgb,A5=C.TWOPI,D5=Math.pow,z5=Math.sin,B5=Math.cos,Zp=O,j5=function(c,u,p,x,$){c===void 0&&(c=300),u===void 0&&(u=-1.5),p===void 0&&(p=1),x===void 0&&(x=1),$===void 0&&($=[0,1]);var E=0,k;cd($)==="array"?k=$[1]-$[0]:(k=0,$=[$,$]);var R=function(P){var z=A5*((c+120)/360+u*P),H=D5($[0]+k*P,x),K=E!==0?p[0]+P*E:p,V=K*H*(1-H)/2,ne=B5(z),ee=z5(z),me=H+V*(-.14861*ne+1.78277*ee),Se=H+V*(-.29227*ne-.90649*ee),Te=H+V*(1.97294*ne);return Zp(O5([me*255,Se*255,Te*255,1]))};return R.start=function(P){return P==null?c:(c=P,R)},R.rotations=function(P){return P==null?u:(u=P,R)},R.gamma=function(P){return P==null?x:(x=P,R)},R.hue=function(P){return P==null?p:(p=P,cd(p)==="array"?(E=p[1]-p[0],E===0&&(p=p[1])):E=0,R)},R.lightness=function(P){return P==null?$:(cd(P)==="array"?($=P,k=P[1]-P[0]):($=[P,P],k=0),R)},R.scale=function(){return Zp.scale(R)},R.hue(p),R},U5=_,H5="0123456789abcdef",W5=Math.floor,V5=Math.random,G5=function(){for(var c="#",u=0;u<6;u++)c+=H5.charAt(W5(V5()*16));return new U5(c,"hex")},dd=f,Qp=Math.log,Y5=Math.pow,q5=Math.floor,Z5=Math.abs,Kp=function(c,u){u===void 0&&(u=null);var p={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return dd(c)==="object"&&(c=Object.values(c)),c.forEach(function(x){u&&dd(x)==="object"&&(x=x[u]),x!=null&&!isNaN(x)&&(p.values.push(x),p.sum+=x,x<p.min&&(p.min=x),x>p.max&&(p.max=x),p.count+=1)}),p.domain=[p.min,p.max],p.limits=function(x,$){return Xp(p,x,$)},p},Xp=function(c,u,p){u===void 0&&(u="equal"),p===void 0&&(p=7),dd(c)=="array"&&(c=Kp(c));var x=c.min,$=c.max,E=c.values.sort(function(hd,fd){return hd-fd});if(p===1)return[x,$];var k=[];if(u.substr(0,1)==="c"&&(k.push(x),k.push($)),u.substr(0,1)==="e"){k.push(x);for(var R=1;R<p;R++)k.push(x+R/p*($-x));k.push($)}else if(u.substr(0,1)==="l"){if(x<=0)throw new Error("Logarithmic scales are only possible for values > 0");var P=Math.LOG10E*Qp(x),z=Math.LOG10E*Qp($);k.push(x);for(var H=1;H<p;H++)k.push(Y5(10,P+H/p*(z-P)));k.push($)}else if(u.substr(0,1)==="q"){k.push(x);for(var K=1;K<p;K++){var V=(E.length-1)*K/p,ne=q5(V);if(ne===V)k.push(E[ne]);else{var ee=V-ne;k.push(E[ne]*(1-ee)+E[ne+1]*ee)}}k.push($)}else if(u.substr(0,1)==="k"){var me,Se=E.length,Te=new Array(Se),Ie=new Array(p),Ct=!0,wt=0,qt=null;qt=[],qt.push(x);for(var _e=1;_e<p;_e++)qt.push(x+_e/p*($-x));for(qt.push($);Ct;){for(var G=0;G<p;G++)Ie[G]=0;for(var oe=0;oe<Se;oe++)for(var be=E[oe],ve=Number.MAX_VALUE,kt=void 0,je=0;je<p;je++){var Ee=Z5(qt[je]-be);Ee<ve&&(ve=Ee,kt=je),Ie[kt]++,Te[oe]=kt}for(var Fe=new Array(p),Me=0;Me<p;Me++)Fe[Me]=null;for(var Oe=0;Oe<Se;Oe++)me=Te[Oe],Fe[me]===null?Fe[me]=E[Oe]:Fe[me]+=E[Oe];for(var Nn=0;Nn<p;Nn++)Fe[Nn]*=1/Ie[Nn];Ct=!1;for(var Sr=0;Sr<p;Sr++)if(Fe[Sr]!==qt[Sr]){Ct=!0;break}qt=Fe,wt++,wt>200&&(Ct=!1)}for(var Cr={},ql=0;ql<p;ql++)Cr[ql]=[];for(var Zl=0;Zl<Se;Zl++)me=Te[Zl],Cr[me].push(E[Zl]);for(var nr=[],il=0;il<p;il++)nr.push(Cr[il][0]),nr.push(Cr[il][Cr[il].length-1]);nr=nr.sort(function(hd,fd){return hd-fd}),k.push(nr[0]);for(var to=1;to<nr.length;to+=2){var sl=nr[to];!isNaN(sl)&&k.indexOf(sl)===-1&&k.push(sl)}}return k},Jp={analyze:Kp,limits:Xp},e0=_,Q5=function(c,u){c=new e0(c),u=new e0(u);var p=c.luminance(),x=u.luminance();return p>x?(p+.05)/(x+.05):(x+.05)/(p+.05)},t0=_,tr=Math.sqrt,st=Math.pow,K5=Math.min,X5=Math.max,n0=Math.atan2,r0=Math.abs,Mi=Math.cos,l0=Math.sin,J5=Math.exp,a0=Math.PI,e6=function(c,u,p,x,$){p===void 0&&(p=1),x===void 0&&(x=1),$===void 0&&($=1);var E=function(sl){return 360*sl/(2*a0)},k=function(sl){return 2*a0*sl/360};c=new t0(c),u=new t0(u);var R=Array.from(c.lab()),P=R[0],z=R[1],H=R[2],K=Array.from(u.lab()),V=K[0],ne=K[1],ee=K[2],me=(P+V)/2,Se=tr(st(z,2)+st(H,2)),Te=tr(st(ne,2)+st(ee,2)),Ie=(Se+Te)/2,Ct=.5*(1-tr(st(Ie,7)/(st(Ie,7)+st(25,7)))),wt=z*(1+Ct),qt=ne*(1+Ct),_e=tr(st(wt,2)+st(H,2)),G=tr(st(qt,2)+st(ee,2)),oe=(_e+G)/2,be=E(n0(H,wt)),ve=E(n0(ee,qt)),kt=be>=0?be:be+360,je=ve>=0?ve:ve+360,Ee=r0(kt-je)>180?(kt+je+360)/2:(kt+je)/2,Fe=1-.17*Mi(k(Ee-30))+.24*Mi(k(2*Ee))+.32*Mi(k(3*Ee+6))-.2*Mi(k(4*Ee-63)),Me=je-kt;Me=r0(Me)<=180?Me:je<=kt?Me+360:Me-360,Me=2*tr(_e*G)*l0(k(Me)/2);var Oe=V-P,Nn=G-_e,Sr=1+.015*st(me-50,2)/tr(20+st(me-50,2)),Cr=1+.045*oe,ql=1+.015*oe*Fe,Zl=30*J5(-st((Ee-275)/25,2)),nr=2*tr(st(oe,7)/(st(oe,7)+st(25,7))),il=-nr*l0(2*k(Zl)),to=tr(st(Oe/(p*Sr),2)+st(Nn/(x*Cr),2)+st(Me/($*ql),2)+il*(Nn/(x*Cr))*(Me/($*ql)));return X5(0,K5(100,to))},o0=_,t6=function(c,u,p){p===void 0&&(p="lab"),c=new o0(c),u=new o0(u);var x=c.get(p),$=u.get(p),E=0;for(var k in x){var R=(x[k]||0)-($[k]||0);E+=R*R}return Math.sqrt(E)},n6=_,r6=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];try{return new(Function.prototype.bind.apply(n6,[null].concat(c))),!0}catch{return!1}},i0=O,s0=id,l6={cool:function(){return s0([i0.hsl(180,1,.9),i0.hsl(250,.7,.4)])},hot:function(){return s0(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Oi={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},ud=0,c0=Object.keys(Oi);ud<c0.length;ud+=1){var d0=c0[ud];Oi[d0.toLowerCase()]=Oi[d0]}var a6=Oi,bt=O;bt.average=b5,bt.bezier=$5,bt.blend=M5,bt.cubehelix=j5,bt.mix=bt.interpolate=Bp,bt.random=G5,bt.scale=id,bt.analyze=Jp.analyze,bt.contrast=Q5,bt.deltaE=e6,bt.distance=t6,bt.limits=Jp.limits,bt.valid=r6,bt.scales=l6,bt.colors=Sp,bt.brewer=a6;var o6=bt;return o6})})(py);var h_=py.exports;const f_=Gr(h_);function p_(e){const{h:t,s:n,l:r}=e;return f_.hsl(t,n/100,r/100)}const g_=e=>p_(e).luminance(),gy=e=>g_(e)<.5,Ca=({label:e,checked:t,toggle:n})=>h("label",{className:"checkbox no-focus",children:[a("input",{type:"checkbox",checked:t,onChange:n}),e]}),my=`// redefine any of the following hues to taste...
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
`,m_=()=>{const[e,t]=U.useState({names:!1,info:!1,show5s:!1}),n=i=>t(s=>({...s,[i]:!s[i]})),r=()=>n("names"),l=()=>n("info"),o=()=>n("show5s");return h("div",{className:"prose",children:[a("h1",{children:"Standard Colors"}),a("p",{children:"The following greyscale ranges are also defined."}),h("div",{className:"flex space end",children:[a("h2",{children:"Greyscale Ranges"}),h("div",{className:"text-right color-options",children:[a(Ca,{label:"Show Names",checked:e.names,toggle:r}),a(Ca,{label:"Show Info",checked:e.info,toggle:l}),a(Ca,{label:"Show 5s",checked:e.show5s,toggle:o})]})]}),a("div",{className:`ranges ${e.names?"names":"nameless"}`,children:rc.filter(i=>Vr.ranges[i].greyscale).map(i=>a(v_,{uri:i,range:Vr.ranges[i],options:e},i))}),a("h2",{children:"Brand Hue"}),h("p",{children:["The greyscale ranges are designed to based on your primary brand color. The ",a("code",{children:"grey"})," range is desaturated to around 5%.  The"," ",a("code",{children:"grey20"})," and ",a("code",{children:"grey40"})," ranges are saturated to around 20% and 40% respectively."]}),h("p",{children:["The brand color for this website is ",a("code",{children:"violet"})," which is why these greyscales have a violet tinge to them."]}),h("p",{children:["Each of the colours show above has a corresponding SCSS variable composed of the color name and stop delimited by a hyphen, e.g."," ",a("code",{children:"$red-0"})," through to ",a("code",{children:"$grey-100"}),".  They are also defined as CSS custom properties, e.g. ",a("code",{children:"--red-0"})," through to ",a("code",{children:"--grey-100"}),"."]}),h("p",{children:["Each range of colors is built from a base hue.  These are defined in SASS variables using the SASS ",a("code",{children:"!default"})," flag.  If you want to adjust the hues you can set any of these SASS variables before importing the main ",a("code",{children:"badger-ui.scss"})," component."]}),a(Je,{code:my,caption:"Customising Hues",language:"scss",expand:!0}),a("h2",{children:"TODO"}),h("ul",{children:[a("li",{children:"Editing or updating a palette using Badger Color"}),a("li",{children:"Expanding the palette into SCSS files"}),a("li",{children:"Customising the palette using SCSS variables"}),a("li",{children:"Customising the color hues"}),a("li",{children:"Defining your brand color"}),a("li",{children:"Adding/editing CSS scopes"}),a("li",{children:"Including or omitting colors"})]})]})},v_=({uri:e,range:t,options:n})=>h("div",{className:"range",children:[n.names&&a("h3",{children:t.name}),a("div",{className:"swatches",children:vi(0,100,n.show5s?5:10).map(r=>a(y_,{uri:e,range:t,stop:r,options:n},r))})]}),y_=({uri:e,range:t,stop:n,options:r})=>{const l=t.stops[n];return a("div",{className:`swatch ${gy(l)?"dark":"light"}`,style:{backgroundColor:`var(--${e}-${n})`},children:r.info&&a(vy,{uri:e,stop:n,color:l})})},vy=({uri:e,stop:t,color:n})=>h("div",{children:[h("div",{className:"stop",children:[e,"-",t]}),h("div",{className:"specs",children:[n.hex,a("br",{}),"h:",n.h,"°",a("br",{}),"s:",n.s,"%",a("br",{}),"l:",n.l,"%"]})]}),b_=Object.freeze(Object.defineProperty({__proto__:null,Info:vy,default:m_},Symbol.toStringTag,{value:"Module"})),w_=`// define the hues for the greyscale colors...
$grey-hue:   40;
$grey20-hue: 40;
$grey40-hue: 40;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,bi=({children:e,code:t,caption:n,language:r,expand:l,className:o=""})=>h("div",{className:`grid-2 gap-8 start stack-desktop ${o}`,children:[a("div",{children:e}),a(Je,{code:t,caption:n,language:r,expand:l,className:"mar-b-8"})]}),x_=()=>{const[e,t]=U.useState({names:!1,info:!1,show5s:!1}),n=i=>t(s=>({...s,[i]:!s[i]})),r=()=>n("names"),l=()=>n("info"),o=()=>n("show5s");return h("div",{className:"prose",children:[a("h1",{children:"Standard Colors"}),h("p",{children:["The following standard color ranges are defined.  This palette was created using ",a("a",{href:"https://abw.github.io/badger-color",children:"Badger Color"}),", a companion to this library.  You can use it to clone and update this palette or to create your own palettes from scratch."]}),h("p",{children:["Each color range is divided into color ",a("em",{children:"stops"}),".  They range in increments of 5 from ",a("code",{children:"0"})," which is very close to black, up to"," ",a("code",{children:"100"}),", which is very close to white."]}),a(l1,{title:"Color Ranges",colors:rc.filter(i=>!Vr.ranges[i].greyscale),options:e,toggleNames:r,toggleInfo:l,toggleShow5s:o}),h("p",{children:["Each range of colors is built from a base hue.  These are defined in SASS variables using the SASS ",a("code",{children:"!default"})," flag.  If you want to adjust the hues you can set any of these SASS variables before importing the main ",a("code",{children:"badger.scss"})," component."]}),a(Je,{code:my,caption:"Customising Hues",language:"scss",expand:!0}),a(l1,{title:"Greyscale Ranges",colors:rc.filter(i=>Vr.ranges[i].greyscale),options:e,toggleNames:r,toggleInfo:l,toggleShow5s:o}),h(bi,{code:w_,caption:"Customising Greyscale Hues",language:"scss",className:"mar-t-8",expand:!0,children:[h("p",{children:["Three greyscale color ranges are also defined.  They are designed to be based on your primary brand color. The ",a("code",{children:"grey"})," range is desaturated to around 5%.  The"," ",a("code",{children:"grey20"})," and ",a("code",{children:"grey40"})," ranges are saturated to around 20% and 40% respectively."]}),h("p",{children:["The brand color for this website is ",a("code",{children:"violet"})," which is why these greyscales have a violet tinge to them.  You can set the hues for these color ranges using the ",a("code",{children:"$grey-hue"}),","," ",a("code",{children:"$grey20-hue"})," and ",a("code",{children:"$grey40-hue"})," variables."]})]}),h("p",{className:"mar-t-4",children:[a(Le,{to:"/colors/brand",text:"Read on"})," to see how you can define your own brand color and automatically get greyscales to match."]})]})},l1=({title:e,colors:t,options:n,toggleNames:r,toggleInfo:l,toggleShow5s:o})=>h(In,{children:[h("div",{className:"flex space end",children:[a("h2",{children:e}),h("div",{className:"text-right color-options",children:[a(Ca,{label:"Show Names",checked:n.names,toggle:r}),a(Ca,{label:"Show Info",checked:n.info,toggle:l}),a(Ca,{label:"Show 5s",checked:n.show5s,toggle:o})]})]}),a("div",{className:`ranges ${n.names?"names":"nameless"}`,children:t.map(i=>a(S_,{uri:i,range:Vr.ranges[i],options:n},i))})]}),S_=({uri:e,range:t,options:n})=>h("div",{className:"range",children:[n.names&&a("h3",{children:t.name}),a("div",{className:"swatches",children:vi(0,100,n.show5s?5:10).map(r=>a(C_,{uri:e,range:t,stop:r,options:n},r))})]}),C_=({uri:e,range:t,stop:n,options:r})=>{const l=t.stops[n];return a("div",{className:`swatch ${gy(l)?"dark":"light"}`,style:{backgroundColor:`var(--${e}-${n})`},children:r.info&&a(yy,{uri:e,stop:n,color:l})})},yy=({uri:e,stop:t,color:n})=>h("div",{children:[h("div",{className:"stop",children:[e,"-",t]}),h("div",{className:"specs",children:[n.hex,a("br",{}),"h:",n.h,"°",a("br",{}),"s:",n.s,"%",a("br",{}),"l:",n.l,"%"]})]}),k_=Object.freeze(Object.defineProperty({__proto__:null,Info:yy,default:x_},Symbol.toStringTag,{value:"Module"})),xs=({scope:e,to:t,from:n="color",size:r="smallish"})=>h("table",{className:`${e} ${r} celled striped properties mar-b-8`,children:[a("thead",{children:h("tr",{children:[a("th",{children:"Variable"}),a("th",{children:"Mapped To"})]})}),a("tbody",{children:vi(0,100,5).map(l=>h("tr",{children:[h("td",{className:"font-mono",children:["--",n,"-",l]}),h("td",{className:"font-mono",children:["--",t,"-",l]})]},l))})]}),__=()=>h("div",{className:"prose",children:[a("h1",{children:"Color Variables"}),a("h2",{children:"SASS Color Variables"}),h("p",{children:["Each stop in a color range has a SASS variable defined, e.g.",a("code",{children:"$red-0"}),", ",a("code",{children:"$red-5"}),","," ",a("code",{children:"$red-10"})," and so on.  You can use these in your SASS components as necessary."]}),a("h2",{children:"CSS Custom Properties"}),h("p",{children:["Each of the colour stops also has a corresponding CSS custom property (a.k.a. CSS variable) defined, e.g.",a("code",{children:"--red-0"}),", ",a("code",{children:"--red-5"}),","," ",a("code",{children:"--red-10"})," and so on.  You can use these in your CSS files, e.g. as ",a("code",{children:"color: var(--red-10)"}),"."]}),h("p",{children:["Each of your brand colors will also have CSS custom properties defined. If you're using the default ",a("code",{children:"brand"})," name then they will be ",a("code",{children:"--brand-0"}),", ",a("code",{children:"--brand-5"}),","," ",a("code",{children:"--brand-10"})," and so on."]}),h("p",{children:["If you have defined a different set of names via"," ",a("code",{children:"$brand-colors"})," then they will have corresponding names.  For example, if you defined the names in your ",a("code",{children:"$brand-colors"})," to be ",a("code",{children:"primary"}),","," ",a("code",{children:"secondary"})," and ",a("code",{children:"tertiary"})," then the custom properties will be ",a("code",{children:"--primary-0"}),","," ",a("code",{children:"--secondary-0"}),", ",a("code",{children:"--tertiary-0"}),", and so on."]}),a("h2",{children:"Color Switching"}),h("p",{children:["CSS custom properties are defined for a generic color, appropriately named ",a("code",{children:"color"}),".  By default they are mapped to grey."]}),a(xs,{scope:"grey",to:"grey"}),h("p",{children:["CSS scopes will be generated for each color range which map the generic colors to the colors from that range.  For example, the"," ",a("code",{children:".red"})," class selector scope will map the colors as shown here."]}),h("h3",{className:"font-mono mar-b-2",children:[".red ","{"," ... ","}"]}),a(xs,{scope:"red",to:"red"}),h("p",{children:["Scopes will also be generated for your brand colors, either using the default ",a("code",{children:"brand"})," name or the custom names you have defined using ",a("code",{children:"$brand-colors"}),"."]}),h("p",{children:["For example, in the ",a("code",{children:".brand"})," scope the colors will be mapped as follows."]}),h("h3",{className:"font-mono mar-b-2",children:[".brand ","{"," ... ","}"]}),a(xs,{scope:"brand",to:"brand"}),h("p",{children:["The benefit of this approach is that it allows you to define UI components using the generic colors ",a("code",{children:"--color-N"}),".  By default they will appear in grey, but adding a CSS class matching the color name will switch in the appropriate color range."]}),a("h2",{children:"CSS Scope Aliases"}),h("p",{children:["A number of additional CSS scopes are defined for some of the colors. For example, the CSS scope created for the ",a("code",{children:"red"})," color range is actually ",a("code",{children:".red, .error, .invalid"}),".  This allows you to add the ",a("code",{children:"red"}),", ",a("code",{children:"error"})," or ",a("code",{children:"invalid"})," CSS class to an element to have the red color range selected."]}),h("p",{children:["This is used by ",a(Le,{to:"/forms",text:"forms"})," and "," ",a(Le,{to:"/components/alerts",text:"alerts"}),", for example, to provide semantic names for the colors."]}),a("h2",{children:"TODO"}),h("ul",{children:[a("li",{children:"Editing or updating a palette using Badger Color"}),a("li",{children:"Expanding the palette into SCSS files"}),a("li",{children:"Adding/editing CSS scopes"})]})]}),$_=Object.freeze(Object.defineProperty({__proto__:null,default:__},Symbol.toStringTag,{value:"Module"})),D=({Component:e,code:t,html:n,children:r,className:l="",caption:o,fixed:i,expand:s,language:d})=>h("div",{className:`example grid-2 gap-8 stack-desktop ${l}`,children:[a("div",{className:"source",children:a(Je,{caption:o,code:t||n,expand:s,fixed:i,language:n?"html":d})}),!!r&&a("div",{className:"interim",children:r}),e?h("div",{className:"output",children:[a("h4",{className:"caption",children:"Output"}),a(e,{})]}):null,n?h("div",{className:"output",children:[a("h4",{className:"caption",children:"Output"}),a("div",{dangerouslySetInnerHTML:{__html:n}})]}):null]}),T_=`<div class="alert">
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
`,E_=`<div class="alert border">
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
`,N_=`<div class="alert">
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
</div>`,I_=`<div class="surface-3 pad-8">
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
</div>`,Mf=({color:e,setColor:t})=>h("select",{name:"color",required:!0,value:e,onChange:n=>t(n.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Color"}),a("option",{value:"",children:"Default"}),rc.map(n=>a("option",{value:n,children:n},n))]}),R_=["smallest","smaller","small","medium","large","larger","largest"],Of=({size:e,setSize:t})=>h("select",{name:"size",required:!0,value:e,onChange:n=>t(n.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),a("option",{value:"",children:"Default"}),R_.map(n=>a("option",{value:n,children:n},n))]}),P_=[0,1,2,3,4,5,6,8,10],Af=({radius:e,setRadius:t})=>h("select",{name:"radius",required:!0,value:e,onChange:n=>t(n.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),a("option",{value:"",children:"Default"}),P_.map(n=>h("option",{value:n,children:["radius: ",n]},n))]}),wi=e=>e.filter(t=>$t(t)&&t).join(" ").replace(/^\s+/,"").replaceAll(/\s+/g," "),F_=(e,t={},...n)=>wi(Object.entries(e).reduce((r,[l,o])=>(o&&r.push(t[l]||l),r),[...n])),M_=(e,t="",...n)=>wi([...ey(t).filter(r=>e[r]),...n]),O_=[1,2,3,4,5],by=({shadow:e,setShadow:t})=>h("select",{name:"shadow",required:!0,value:e,onChange:n=>t(n.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),a("option",{value:"",children:"Default"}),O_.map(n=>h("option",{value:n,children:["shadow: ",n]},n))]}),wl=({checked:e,toggle:t,label:n})=>a("div",{className:"field",children:h("label",{className:"checkbox border no-focus wide",children:[a("input",{type:"checkbox",checked:e,onChange:t}),n]})}),A_=[0,1,2,3,4,5,6,8,10],wy=({borderWidth:e,setBorderWidth:t})=>h("select",{name:"borderWidth",required:!0,value:e,onChange:n=>t(n.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),a("option",{value:"",children:"Default"}),A_.map(n=>h("option",{value:n,children:["width: ",n]},n))]}),D_=()=>{const[e,t]=U.useState({body:!0});return h("div",{className:"example grid-2 gap-8 stack-desktop",children:[a(z_,{options:e,setOption:l=>o=>t(i=>({...i,[l]:o})),toggleOption:l=>()=>t(o=>({...o,[l]:!o[l]}))}),h("div",{children:[a("h3",{className:"mar-b-2",children:"Output"}),a("div",{className:"output",children:a(B_,{options:e})})]})]})},z_=({options:e,toggleOption:t,setOption:n})=>{const r=t("headline"),l=t("heading"),o=t("border"),i=t("stripe"),s=n("type"),d=n("size"),f=n("color"),m=n("radius"),b=n("shadow"),S=n("borderWidth"),N=`<div class="${xy(e)}">
  ...
</div>`;return h("div",{children:[a("h3",{className:"mar-b-2",children:"Options"}),h("div",{className:"grid-5 gap-4 stack-tablet start",children:[a(wl,{checked:e.headline,toggle:r,label:"Headline"}),a(wl,{checked:e.head,toggle:l,label:"Heading"}),a(wl,{checked:e.stripe,toggle:i,label:"Stripe"}),a(wl,{checked:e.border,toggle:o,label:"Border"}),a(wy,{borderWidth:e.borderWidth,setBorderWidth:S})]}),h("div",{className:"grid-5 gap-4 stack-tablet mar-t-4",children:[a(j_,{type:e.type,setType:s}),a(Mf,{color:e.color,setColor:f}),a(Of,{size:e.size,setSize:d}),a(Af,{radius:e.radius,setRadius:m}),a(by,{radius:e.shadow,setShadow:b})]}),a("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),a(Je,{code:N,language:"html",expand:!0})]})},xy=e=>wi([e.color,e.type,e.size,e.border&&"border",e.stripe&&"stripe",e.radius&&`bdr-${e.radius}`,e.shadow&&`shadow-${e.shadow}`,e.borderWidth&&`bdw-${e.borderWidth}`,"alert"]),B_=({options:e})=>{const t=xy(e);return h("div",{className:t,children:[e.headline&&a("div",{className:"headline",children:"This is a headline"}),e.heading&&a("h3",{children:"Hello World!"}),h("p",{children:["This is an alert.  This is some ",a("b",{children:"bold text"}),". This is a ",a("a",{href:"/",children:"link"}),"."]}),a("button",{children:"Default Button"}),a("button",{className:"red mar-l-2",children:"Red Button"})]})},j_=({type:e,setType:t})=>h("select",{name:"type",required:!0,value:e,onChange:n=>t(n.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),a("option",{value:"",children:"Default"}),["info","warning","success","error"].map(n=>a("option",{value:n,children:n},n))]}),U_=()=>h("div",{className:"prose",children:[a("h1",{children:"Alerts"}),h("p",{children:["The ",a("code",{children:"alert"})," class can be used to display alerts. Add any of the ",a("code",{children:"info"}),", ",a("code",{children:"success"}),","," ",a("code",{children:"warning"})," or ",a("code",{children:"error"})," classes to set the color."]}),a("h2",{children:"Demo"}),a("p",{children:"Select the options to determine how the alert is displayed. Note that some options are mutually exclusive (e.g. stripe and border)."}),a(D_,{}),a("h2",{children:"Default Alerts"}),a(D,{html:T_,language:"html",caption:"Alerts"}),a("h2",{children:"Alerts With Borders"}),h("p",{children:["Add the ",a("code",{children:"border"})," class to add a border."]}),a(D,{html:E_,language:"html",caption:"Added Borders"}),a("h2",{children:"Alert Headings"}),a("p",{children:"Headings are displayed in a slightly darker color than the body text."}),a(D,{html:N_,language:"html",caption:"Alert Headings"}),a("h2",{children:"Alert Headlines"}),h("p",{children:["Add an element with the ",a("code",{children:"headline"})," class to really make it stand out.  This works well with and without borders.  Throw in a"," ",a(Le,{to:"/utilities/shadows",text:"shadow"})," if you want to make it really pop."]}),a(D,{html:L_,language:"html",caption:"Alert Headlines"}),a("h2",{children:"Stripe Alerts"}),h("p",{children:["For a more subdued look, try adding the ",a("code",{children:"stripe"})," class."]}),a(D,{html:I_,language:"html",caption:"Stripe Alert"})]}),H_=Object.freeze(Object.defineProperty({__proto__:null,default:U_},Symbol.toStringTag,{value:"Module"})),W_=`<div class="grid-1 gap-4">
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
`,V_=`<div class="grid-1 gap-4">
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
</div>`,G_=`<div class="grid-1 gap-4">
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
</div>`,Y_=`<div class="grid-1 gap-4">
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
</div>`,q_=`<style>
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
`,Z_=()=>{const[e,t]=U.useState({body:!0});return h("div",{className:"example grid-2 gap-8 stack-desktop",children:[a(Q_,{options:e,setOption:l=>o=>t(i=>({...i,[l]:o})),toggleOption:l=>()=>t(o=>({...o,[l]:!o[l]}))}),h("div",{children:[a("h3",{className:"mar-b-2",children:"Output"}),a("div",{className:"output",children:a(K_,{options:e})})]})]})},Q_=({options:e,toggleOption:t,setOption:n})=>{const r=t("border"),l=t("shaded"),o=t("lined"),i=n("size"),s=n("color"),d=n("radius"),f=n("shadow"),m=n("borderWidth"),S=`<div class="${Sy(e)}">
  ...
</div>`;return h("div",{children:[a("h3",{className:"mar-b-2",children:"Options"}),h("div",{className:"grid-3 gap-4 stack-tablet start",children:[a(wl,{checked:e.lined,toggle:o,label:"Lined"}),a(wl,{checked:e.shaded,toggle:l,label:"Shaded"})]}),h("div",{className:"grid-3 gap-4 stack-tablet start",children:[a(wl,{checked:e.border,toggle:r,label:"Border"}),a(wy,{borderWidth:e.borderWidth,setBorderWidth:m}),a(Af,{radius:e.radius,setRadius:d})]}),h("div",{className:"grid-3 gap-4 stack-tablet",children:[a(Mf,{color:e.color,setColor:s}),a(Of,{size:e.size,setSize:i}),a(by,{radius:e.shadow,setShadow:f})]}),a("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),a(Je,{code:S,language:"html",expand:!0})]})},Sy=e=>wi([e.color,e.size,e.lined&&"lined",e.shaded&&"shaded",e.border&&"border",e.radius&&`bdr-${e.radius}`,e.shadow&&`shadow-${e.shadow}`,e.borderWidth&&`bdw-${e.borderWidth}`]),K_=({options:e})=>{const t=Sy(e);return h("details",{className:t,children:[a("summary",{children:"This is a demo details widget - click to reveal"}),a("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),a("p",{children:"I really think you're just making a much too big thing out of it."}),a("p",{children:"Making a big thing out of it would've been a good idea."})]})},X_=()=>h("div",{className:"prose",children:[a("h1",{children:"Details"}),h("p",{children:["The ",a("code",{children:"details"})," HTML element can be used to create a disclosure widget."]}),a("h2",{children:"Demo"}),a("p",{children:"Select the options to determine how the details widget is displayed."}),a(Z_,{}),a("h2",{children:"Default Style"}),h("p",{children:["The default style will be applied without the need for any special CSS classes.  You can add any of the utility classes (e.g. the size classes like ",a("code",{children:"small"}),", ",a("code",{children:"large"}),", etc.) to change the basic appearance of either the whole widget, the summary, or any of the content elements."]}),a(D,{html:W_,language:"html",caption:"Default Style"}),a("h2",{children:"Border Style"}),h("p",{children:["Add the ",a("code",{children:"border"})," class to add a border.  The usual"," ",a("code",{children:"bdr-N"})," classes can be added to set the border radius"," ","and ",a("code",{children:"bdw-N"})," to set the border width."]}),h("p",{children:["The ",a("code",{children:"bdc-N"})," classes can be used to set the border color stop, and ",a("code",{children:"bdd-N"})," classes for the border color stop in dark mode."]}),a(D,{html:V_,language:"html",caption:"Details With Borders"}),a("h2",{children:"Lined Style"}),h("p",{children:["The ",a("code",{children:"lined"})," class can be added to put an additional border line between the summary header and body content."]}),a(D,{html:G_,language:"html",caption:"Details With Borders"}),a("h2",{children:"Shaded Style"}),h("p",{children:["Add the ",a("code",{children:"shaded"})," class to shade the background colors. You can add any of the color classes to change the color palette."]}),a(D,{html:Y_,language:"html",caption:"Shaded Details"}),a("h2",{children:"Custom Styling"}),a("p",{children:"There are a number of CSS variables that you can set to change the styling."}),a(D,{html:q_,language:"html",caption:"Custom Styling"})]}),J_=Object.freeze(Object.defineProperty({__proto__:null,default:X_},Symbol.toStringTag,{value:"Module"})),e$=`<svg
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
  aria-hidden="true" focusable="false" role="img"
  class="icon"
>
  <path
    d="M64,268L184,388L448,124"
    style="fill:none;stroke:currentColor;stroke-width:65"
  />
</svg>
Check!`,t$=`<div class="small">
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
</div>`,n$=`<div class="red fgc-50 large">
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
</div>`,r$=`<svg
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
`,l$=`<div class="larger">
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
`,a$={bars:"M0 96C0 78 14 64 32 64H416c18 0 32 14 32 32s-14 32-32 32H32C14 128 0 114 0 96zM0 256c0-18 14-32 32-32H416c18 0 32 14 32 32s-14 32-32 32H32c-18 0-32-14-32-32zM448 416c0 18-14 32-32 32H32c-18 0-32-14-32-32s14-32 32-32H416c18 0 32 14 32 32z",check:"M486,91C499,104 499,127 486,140L212,422C198,435 177,435 163,422L26,281C13,267 13,245 26,231C39,217 61,217 75,231L187,347L438,91C451,77 473,77 486,91L486,91Z",cross:"M456,109C470,94 470,71 456,56C441,42 418,42 403,56L256,204L109,56C94,42 71,42 56,56C42,71 42,94 56,109L204,256L56,403C42,418 42,441 56,456C71,470 94,470 109,456L256,308L403,456C418,470 441,470 456,456C470,441 470,418 456,403L308,256L456,109Z",github:"M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z",info:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13 0-24-11-24-24s11-24 24-24h48c13 0 24 11 24 24v88h8c13 0 24 11 24 24s-11 24-24 24H216c-13 0-24-11-24-24s11-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",lock:"M159,133L159,226L301,226L301,133C301,94 269,62 230,62C191,62 159,94 159,133ZM101,226L101,133C101,62 159,4 230,4C301,4 359,62 359,133L359,226L373,226C404,226 430,252 430,283L430,455C430,486 404,512 373,512L87,512C56,512 30,486 30,455L30,283C30,252 56,226 87,226L101,226Z",pen:"M356,34L311,79L433,201L478,156C502,132 502,94 478,71L441,34C418,10 380,10 356,34L356,34ZM290,100L71,319C61,329 54,341 50,355L16,468C14,476 16,484 22,490C28,496 36,498 44,496L157,462C171,458 183,451 192,442L412,222L290,100Z",plus:"M292,56C292,36 276,20 256,20C236,20 220,36 220,56L220,220L56,220C36,220 20,236 20,256C20,276 36,292 56,292L220,292L220,456C220,476 236,492 256,492C276,492 292,476 292,456L292,292L456,292C476,292 492,276 492,256C492,236 476,220 456,220L292,220L292,56Z",trash:"M173,33L166,46L76,46C59,46 46,59 46,76C46,93 59,106 76,106L436,106C453,106 466,93 466,76C466,59 453,46 436,46L346,46L339,33C334,22 324,16 312,16L200,16C188,16 178,22 173,33ZM436,136L76,136L96,454C97,478 117,496 141,496L371,496C395,496 415,478 416,454L436,136Z",undo:"M168,224L40,224C27,224 16,213 16,200L16,72C16,62 22,54 31,50C40,46 50,48 57,55L99,97C186,10 327,10 414,98C502,185 502,327 414,414C327,502 185,502 98,414C85,402 85,382 98,369C110,357 130,357 143,369C205,432 307,432 369,369C432,307 432,205 369,143C307,81 207,80 144,142L185,183C192,190 194,200 190,209C187,218 178,224 168,224Z",unlock:"M313,131C313,92 345,60 384,60C423,60 455,92 455,131L455,174C455,190 468,203 484,203C499,203 512,190 512,174L512,131C512,61 455,3 384,3C313,3 256,61 256,131L256,227L57,227C26,227 0,253 0,284L0,455C0,486 26,512 57,512L341,512C373,512 398,486 398,455L398,284C398,253 373,227 341,227L313,227L313,131Z",checked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083ZM88.43,298.82C75.421,285.811 75.421,264.689 88.43,251.68C101.439,238.671 122.561,238.671 135.57,251.68L202,318.11L376.43,143.68C389.439,130.671 410.561,130.671 423.57,143.68C436.579,156.689 436.579,177.811 423.57,190.82L225.57,388.82C212.553,401.838 191.447,401.838 178.43,388.82L88.43,298.82Z",unchecked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083Z"},o$=e=>{const t=a$[e]||LC(`Invalid icon name: ${e}`);return J2(t)?{path:t,width:512,height:512}:t},a1=({path:e,onClick:t,width:n=512,height:r=512,style:l,className:o="",fill:i="currentColor"})=>a("svg",{"aria-hidden":"true",focusable:"false",className:`${o} icon`,style:l,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n} ${r}`,onClick:t,children:a("path",{d:e,fill:i})}),Df=({name:e,...t})=>e?a(a1,{...t,...o$(e)}):a(a1,{...t}),li=({title:e="Note",children:t})=>h("div",{className:"info alert flex start border small",children:[a(Df,{name:"info",className:"side-icon"}),h("div",{children:[a("h3",{children:e}),t]})]}),i$=()=>h("div",{className:"prose",children:[a("h1",{children:"Icons"}),h("p",{children:["Some basic styles are included for SVG icons. Add the ",a("code",{children:"icon"})," ","class to an inline SVG image to use them."]}),a(D,{html:e$,language:"html",caption:"Icon"}),a("p",{children:"Icons are sized in em units meaning they scale with text in different sizes."}),a(D,{html:t$,language:"html",caption:"Icon Sizes"}),h("p",{children:["SVG icons can use ",a("code",{children:"currentColor"})," for either the"," ",a("code",{children:"fill"})," or ",a("code",{children:"stroke"})," properties to inherit the current text color."]}),a(D,{html:n$,language:"html",caption:"Icon Colors"}),h("div",{className:"grid-2 gap-8 stack-desktop",children:[h("div",{children:[h("p",{children:["SVG elements can use the ",a("code",{children:"fill-fg"})," and ",a("code",{children:"fill-bg"})," ","classes to set the fill color to the current foreground or background colors respectively.  Similarly the ",a("code",{children:"stroke-fg"})," and"," ",a("code",{children:"stroke-bg"})," will set the stroke color to the foreground or"," ","background color."]}),h("p",{children:["These CSS rules are scoped to all ",a("code",{children:"svg"})," elements rather",a("code",{children:"svg.icon"})," specifically.  So you can use them in any SVG images, not just icons."]})]}),a("div",{children:h(li,{children:["CSS styles can only be applied to inline SVG elements.  They don't work for SVG images loaded using the ",a("code",{children:"img"})," ","tag or applied using a ",a("code",{children:"background-image"})," style."]})})]}),a(D,{html:r$,language:"html",caption:"Icon Style"}),h("p",{children:["You can define your own styles to target different elements in an SVG icon.  This example illustrated the use of generic"," ",a("code",{children:"--color-N"})," variables to set the fill and stroke styles on elements in an icon.  The only thing that's determining the color range is the ",a("code",{children:"blue"})," class on the ",a("code",{children:"svg"})," ","element.  Change that to the name of any other color range and the styles will work equally well."]}),h("p",{children:["Also note the use of the"," ",a("code",{children:"--unfilled"})," custom property which sets the background color for the unchecked checkbox.  This allows us to set different color stops for use in light and dark themes."]}),a(D,{html:l$,language:"html",caption:"Icon Style"})]}),s$=Object.freeze(Object.defineProperty({__proto__:null,default:i$},Symbol.toStringTag,{value:"Module"})),c$=()=>{const[e,t]=U.useState({head1:!0,body:!0,foot1:!0});return h("div",{className:"example grid-2 gap-8 stack-desktop",children:[a(d$,{options:e,setOption:l=>o=>t(i=>({...i,[l]:o})),toggleOption:l=>()=>t(o=>({...o,[l]:!o[l]}))}),h("div",{children:[a("h3",{className:"mar-b-2",children:"Output"}),a("div",{className:"output",children:a(u$,{options:e})})]})]})},d$=({options:e,toggleOption:t,setOption:n})=>{const r=t("head1"),l=t("head2"),o=t("body"),i=t("foot1"),s=t("foot2"),d=t("wide"),f=t("celled"),m=t("shaded"),b=t("lined"),S=t("striped"),L=n("size"),N=n("color"),C=n("radius"),w=`<table class="${M_(e,"wide celled shaded lined striped",e.color,e.size,e.radius&&`bdr-${e.radius}`)}">
  ...
</table>`;return h("div",{children:[a("h3",{className:"mar-b-2",children:"Options"}),h("div",{className:"grid-5 gap-4 stack-tablet",children:[a(jn,{checked:e.wide,toggle:d,label:"Wide"}),a(jn,{checked:e.celled,toggle:f,label:"Celled"}),a(jn,{checked:e.shaded,toggle:m,label:"Shaded"}),a(jn,{checked:e.lined,toggle:b,label:"Lined"}),a(jn,{checked:e.striped,toggle:S,label:"Striped"})]}),h("div",{className:"grid-5 gap-4 stack-tablet mar-t-4",children:[a(jn,{checked:e.head1,toggle:r,label:"Header"}),a(jn,{checked:e.body,toggle:o,label:"Body"}),a(jn,{checked:e.foot1,toggle:i,label:"Footer"}),a(jn,{checked:e.head2,toggle:l,label:"Pre-header"}),a(jn,{checked:e.foot2,toggle:s,label:"Post-footer"})]}),h("div",{className:"grid-5 gap-4 stack-tablet mar-t-4",children:[a(Mf,{color:e.color,setColor:N}),a(Of,{size:e.size,setSize:L}),a(Af,{radius:e.radius,setRadius:C})]}),a("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),a(Je,{code:w,language:"html",expand:!0})]})},jn=({checked:e,toggle:t,label:n})=>a("div",{className:"field",children:h("label",{className:"checkbox border no-focus wide",children:[a("input",{type:"checkbox",checked:e,onChange:t}),n]})}),u$=({options:e})=>{const t=F_(e,{},e.color,e.size,e.radius&&`bdr-${e.radius}`);return h("table",{className:t,children:[(e.head1||e.head2)&&h("thead",{children:[e.head2&&a("tr",{children:a("th",{colSpan:"3",className:"text-center",children:"Spinal Tap"})}),e.head1&&h("tr",{children:[a("th",{children:"Name"}),a("th",{children:"Instrument"}),a("th",{children:"Danger Level"})]})]}),e.body&&h("tbody",{children:[h("tr",{children:[a("td",{children:"Nigel"}),a("td",{children:"Tufnel"}),a("td",{children:"Guitar"})]}),h("tr",{children:[a("td",{children:"David"}),a("td",{children:"St.Hubbins"}),a("td",{children:"Guitar"})]}),h("tr",{children:[a("td",{children:"Derek"}),a("td",{children:"Smalls"}),a("td",{children:"Bass"})]}),h("tr",{children:[a("td",{children:"Viv"}),a("td",{children:"Savage"}),a("td",{children:"Keyboards"})]}),h("tr",{children:[a("td",{children:"Mick"}),a("td",{children:"Shrimpton"}),a("td",{children:"Drums"})]})]}),(e.foot1||e.foot2)&&h("tfoot",{children:[e.foot1&&h("tr",{children:[a("th",{colSpan:"2",className:"text-right",children:"Total"}),a("th",{children:"5"})]}),e.foot2&&a("tr",{children:a("th",{colSpan:"3",className:"text-center",children:"Tap into America!"})})]})]})},h$=`<table>
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
</table>`,f$=`<table class="celled">
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
</table>`,p$=`<table class="shaded">
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
</table>`,g$=`<table class="shaded lined">
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
</table>`,m$=`<table class="striped">
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
</table>`,v$=`<table class="brand striped celled">
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
</table>`,y$=`<table class="shaded lined wide">
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
</table>`,b$=`<div class="flex start gap-4">
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
</div>`,w$=()=>h("div",{className:"prose",children:[a("h1",{children:"Tables"}),a("p",{children:"Badger CSS contains some basic table styling by default and a number of additional classes you can add to snazz things up."}),a("h2",{children:"Demo"}),a("p",{children:"Select the options to determine how the table is displayed."}),a(c$,{}),a("h2",{children:"Default Table"}),a(D,{html:h$,language:"html",caption:"Table"}),a("h2",{children:"Celled Table"}),a(D,{html:f$,language:"html",caption:"Celled Table"}),a("h2",{children:"Shaded Table"}),a(D,{html:p$,language:"html",caption:"Shaded Table"}),a("h2",{children:"Lined Table"}),a(D,{html:g$,language:"html",caption:"Lined Table"}),a("h2",{children:"Striped Table"}),a(D,{html:m$,language:"html",caption:"Striped Table"}),a("h2",{children:"Colored Table"}),a(D,{html:v$,language:"html",caption:"Colored Table"}),a("h2",{children:"Colored Rows"}),a(D,{html:y$,language:"html",caption:"Colored Rows"}),a("h2",{children:"Customised Table"}),a(D,{html:b$,language:"html",caption:"Rounded Table"})]}),x$=Object.freeze(Object.defineProperty({__proto__:null,default:w$},Symbol.toStringTag,{value:"Module"})),S$=`<div class="flex gap-2">
  <button
    data-tts="right"
    aria-label="This is a tooltip to the right"
  >
    Tooltip right
  </button>
  <button
    data-tts="up"
    aria-label="This is a tooltip above"
  >
    Tooltip up
  </button>
  <button
    data-tts="down"
    aria-label="This is a tooltip below"
  >
    Tooltip down
  </button>
  <button
    data-tts="left"
    aria-label="This is a tooltip to the left"
  >
    Tooltip left
  </button>
</div>`,C$=`<style>
  .big-blue-tooltips {
    --tts-font-size: 1.25rem;
    --tts-padding: 0.75em 1.5em;
    --tts-border-radius: 0.5em;
    --tts-arrow: 16px;
    --tts-background: var(--blue-50);
    --tts-color: var(--blue-90);
  }
  .dark .big-blue-tooltips {
    --tts-background: var(--blue-40);
    --tts-color: var(--blue-80);
  }
</style>
<div class="big-blue-tooltips">
  <button
    data-tts="right"
    aria-label="This is a tooltip to the right"
  >
    Tooltip right
  </button>
  <button
    data-tts="up"
    aria-label="This is a tooltip above"
  >
    Tooltip up
  </button>
  <button
    data-tts="down"
    aria-label="This is a tooltip below"
  >
    Tooltip down
  </button>
  <button
    data-tts="left"
    aria-label="This is a tooltip to the left"
  >
    Tooltip left
  </button>
</div>`,k$=()=>h("div",{className:"prose",children:[a("h1",{children:"Tooltips"}),h("p",{children:["The ",a("a",{href:"https://www.npmjs.com/package/@zkreations/tooltips",children:"Tooltip.css"})," ","library by ",a("a",{href:"https://github.com/zkreations",children:"zkreations"})," is included for displaying tooltips."]}),h("p",{children:["The only changes to the default settings are to provide different colors for light and dark modes.  This is done by providing values for the"," ",a("code",{children:"--tts-background"})," and ",a("code",{children:"--tts-color"})," variables."]}),a(D,{html:S$,language:"html",caption:"Tooltips"}),h("p",{children:["You can set any of the supported"," ",a("a",{href:"https://www.npmjs.com/package/@zkreations/tooltips#customize",children:"CSS variables"})," ","to customise the tooltips further."]}),a(D,{html:C$,language:"html",caption:"Custom Tooltips"})]}),_$=Object.freeze(Object.defineProperty({__proto__:null,default:k$},Symbol.toStringTag,{value:"Module"})),dl=(e="rem",t=.25)=>[0,1,2,3,4,6,8,10,12,16,20,24,28,32].reduce((n,r)=>({...n,[r]:{vars:{unit:`${r} unit${r==1?"":"s"} (${r*t}${e})`}}}),{}),o1=e=>({t:{vars:{sides:"the top"},more:dl(e)},r:{vars:{sides:"the right"},more:dl(e)},b:{vars:{sides:"the right"},more:dl(e)},l:{vars:{sides:"the left"},more:dl(e)},v:{vars:{sides:"the top and bottom (v = vertical)"},more:dl(e)},h:{vars:{sides:"the left and right (h = horizontal)"},more:dl(e)},...dl(e)}),i1=e=>[2,4,6,8,10,12,14,16,18,20,30,40,50,60,70,90,100].reduce((t,n)=>({...t,[`${n}rem`]:{description:()=>e(n)}}),{}),s1=e=>[2,4,6,8,10,12,14,16,18,20,30,40,50,60,70,90,100].reduce((t,n)=>({...t,[`${n*16}px`]:{description:()=>e(n*16)}}),{}),$$={mar:{vars:{unit:"1 unit (0.25rem)",sides:"all sides"},description:e=>`Add ${e.unit} margin to ${e.sides}`,more:o1("rem")},pad:{vars:{unit:"1 unit (0.25em)",sides:"all sides"},description:e=>`Add ${e.unit} margin to ${e.sides}`,more:o1("em")},width:{more:{...i1(e=>`Set width to ${e}rem (${e*16}px)`),...s1(e=>`Set width to ${e}px`)}},max:{more:{width:{more:{...i1(e=>`Set max-width to ${e}rem (${e*16}px)`),...s1(e=>`Set max-width to ${e}px`)}}}},text:{more:{left:{description:()=>"Align text to the left"},right:{description:()=>"Align text to the right"},center:{description:()=>"Align text to the center"}}},block:{more:{left:{description:()=>"Align block to the left"},right:{description:()=>"Align block to the right"},center:{description:()=>"Align block to the center"}}},display:{more:{inline:{description:()=>"Display element inline"},block:{description:()=>"Display element as a block"},"inline-block":{description:()=>"Display element as an inline block"}}},font:{more:{sans:{description:()=>"Use a sans-serif font"},serif:{description:()=>"Use a serif font"},system:{description:()=>"Use the system font"},mono:{description:()=>"Use a monospaced font"}}}},T$=e=>{const t=e.split("-");let n=[],r=[],l=[],o={},i=$$,s;for(;t.length;){const d=t.shift(),f=i[d];if(f)console.log(`matched ${d}`),s=f.description||s,f.vars&&(o={...o,...f.vars}),n.push(d),i=f.more||{},l=Object.keys(i);else{r.push(d);break}}return{good:n,rest:r,vars:o,next:l,description:s?s(o):null}},E$=e=>ey(e).filter(t=>!t.match(/^\s*$/)).map(T$),N$=()=>{const[e,t]=U.useState("");return h("div",{children:[a("h1",{children:"Class Decoder"}),a("p",{children:"Enter one or more Badger-CSS classes for an explanation."}),h("form",{className:"max-width-30rem",children:[h("div",{className:"field",children:[a("label",{children:"CSS Classes"}),a("input",{type:"text",className:"wide",value:e,onChange:n=>t(n.target.value)})]}),a("button",{type:"button",className:"reset grey button outline",onClick:()=>t(""),children:"Reset"})]}),a("div",{children:!!e.length&&a(L$,{input:e})})]})},L$=({input:e})=>{const t=E$(e);return console.log("results: ",t),a("table",{className:"celled border bdr-2 mar-t-4",children:a("tbody",{children:t.map((n,r)=>h("tr",{children:[h("td",{className:"font-mono bgc-95 bgd-10 split-4",children:[a("span",{className:"green fgc-50",children:n.good.join("-")}),!!n.rest.length&&h("span",{className:"red fgc-50",children:[!!n.good.length&&"-",n.rest.join("-")]})]}),a("td",{className:"bgc-100 bgd-5",children:n.description}),a("td",{className:"bgc-100 bgd-5 font-mono small",children:!!n.next.length&&n.next.map(l=>`-${l} `)})]},r))})})},I$=Object.freeze(Object.defineProperty({__proto__:null,default:N$},Symbol.toStringTag,{value:"Module"})),Ml=({color:e,selected:t,select:n,iconColor:r="white",className:l="",alt:o=a(In,{children:" "})})=>a("button",{className:`${l} ${e} icon ${t?"focus":""}`,onClick:n,children:t?a(Df,{name:"check",className:r}):o}),R$=({range:e,setRange:t})=>h("div",{children:[h("div",{className:"flex space mar-b-0",children:[a("h3",{children:"Color Range"}),a("h4",{children:$t(e)&&a("code",{children:e||""})})]}),h("div",{className:"grid-fit gap-2",style:{"--min-width":"2em"},children:[a(c1,{colors:d_,range:e,setRange:t}),a("div",{children:" "}),a(Ml,{color:"brand",selected:e==="brand",select:()=>t("brand")}),a(c1,{colors:u_,range:e,setRange:t})]})]}),c1=({range:e,setRange:t,colors:n})=>n.map(r=>a(Ml,{color:r,select:()=>t(r),selected:e==r},r)),ns=({stop:e,setStop:t,className:n,title:r,prefix:l})=>h("div",{children:[h("div",{className:"flex space mar-b-0",children:[a("h3",{children:r}),a("h4",{children:$t(e)&&h("code",{children:[l,"-",e]})})]}),a("div",{className:`${n} grid-fit gap-2`,style:{"--min-width":"2em"},children:vi(0,100,5).map(o=>a(Ml,{color:`bgc-${o} bdc-${o} fgc-${o>50?"0":"100"} bgd-${o} bdd-${o} fgd-${o>50?"0":"100"}`,iconColor:o>50?"black":"white",selected:e===o,select:()=>t(o)},o))})]}),P$=[0,1,2,3,4,6,8,10,12,16,20,24,28,32],d1=({spacing:e,setSpacing:t,className:n,title:r,prefix:l,range:o})=>h("div",{children:[h("div",{className:"flex space mar-b-0",children:[a("h3",{children:r}),a("h4",{children:$t(e)&&h("code",{children:[l,"-",e]})})]}),a("div",{className:`${n} grid-fit gap-2`,style:{"--min-width":"2em"},children:P$.map(i=>a(Ml,{color:o,className:"wide",alt:a("span",{className:"font-mono",children:i}),selected:e===i,select:()=>t(i)},i))})]}),F$=["smallest","smaller","small","medium","large","larger","largest"],M$=({size:e,setSize:t,title:n="Size",range:r})=>h("div",{children:[h("div",{className:"flex space mar-b-0",children:[a("h3",{children:n}),a("h4",{children:$t(e)&&a("code",{children:e})})]}),a("div",{className:"grid-fit gap-2",style:{"--min-width":"2em"},children:F$.map(l=>a(Ml,{color:r,className:"wide",alt:a("span",{className:"font-mono",children:l}),selected:e===l,select:()=>t(l)},l))})]}),O$=[0,1,2,3,4,5,6,8,10],u1=({border:e,setBorder:t,className:n,title:r,prefix:l,range:o})=>h("div",{children:[h("div",{className:"flex space mar-b-0",children:[a("h3",{children:r}),a("h4",{children:$t(e)&&h("code",{children:[l,"-",e]})})]}),a("div",{className:`${n} grid-fit gap-2`,style:{"--min-width":"2em"},children:O$.map(i=>a(Ml,{color:o,className:"wide",alt:a("span",{className:"font-mono",children:i}),selected:e===i,select:()=>t(i)},i))})]}),A$=({checked:e,toggle:t,label:n})=>a("div",{className:"field",children:h("label",{className:"checkbox border no-focus wide",children:[a("input",{type:"checkbox",checked:e,onChange:t}),n]})}),D$=({shadow:e,setShadow:t,className:n,title:r="Shadow",prefix:l="shadow",range:o})=>h("div",{children:[h("div",{className:"flex space mar-b-0",children:[a("h3",{children:r}),a("h4",{children:$t(e)&&h("code",{children:[l,"-",e]})})]}),a("div",{className:`${n} grid-fit gap-2`,style:{"--min-width":"2em"},children:vi(0,5).map(i=>a(Ml,{color:o,className:"wide",alt:a("span",{className:"font-mono",children:i}),selected:e===i,select:()=>t(i)},i))})]}),z$=({options:e,setOption:t,toggleOption:n})=>h("div",{className:"surface-5 pad-4",children:[h("div",{className:"flex space baseline stack-desktop mar-b-2",children:[a("h2",{className:"mar-v-none",children:"Controls"}),a("h3",{className:"text-right mar-v-none",children:a("code",{children:'class="..."'})})]}),h("div",{className:"grid gap-2 small",children:[a(R$,{range:e.range,setRange:t("range")}),a(ns,{title:"Background Color Stop",prefix:"bgc",className:e.range,stop:e.bgc,setStop:t("bgc")}),a(ns,{title:"Foreground Color Stop",prefix:"fgc",className:e.range,stop:e.fgc,setStop:t("fgc")}),a(ns,{title:"Heading Color Stop",prefix:"hdc",className:e.range,stop:e.hdc,setStop:t("hdc")}),a(ns,{title:"Border Color Stop",prefix:"bdc",className:e.range,stop:e.bdc,setStop:t("bdc")}),a(u1,{title:"Border Width",prefix:"bdw",border:e.bdw,setBorder:t("bdw"),range:e.range}),a(u1,{title:"Border Radius",prefix:"bdr",border:e.bdr,setBorder:t("bdr"),range:e.range}),a(M$,{title:"Size",size:e.size,setSize:t("size"),range:e.range}),a(d1,{title:"Margin",prefix:"mar",className:e.mar,spacing:e.mar,setSpacing:t("mar"),range:e.range}),a(d1,{title:"Padding",prefix:"pad",className:e.pad,spacing:e.pad,setSpacing:t("pad"),range:e.range}),a(D$,{title:"Shadow",prefix:"shadow",shadow:e.shadow,setShadow:t("shadow"),range:e.range}),h("div",{children:[a("h3",{className:"mar-b-2",children:"Options"}),a("div",{className:"grid-fill",style:{"--min-width":"10rem"},children:a(A$,{label:"Show Border",checked:e.border,toggle:n("border")})})]})]})]}),B$=({options:e})=>{const t=j$(e);return h("div",{className:"surface-5 pad-4",children:[h("div",{className:"flex space baseline stack-desktop mar-b-2",children:[a("h2",{className:"mar-v-none",children:"Output"}),a("div",{className:"text-right",children:h("code",{children:['class="',t,'"']})})]}),a("div",{className:"border surface-4",style:{borderStyle:"dotted"},children:h("div",{className:t,children:[a("h3",{className:"mar-b-2",children:"It's One Louder"}),"You see, most... most blokes, you know, will be playing at ten. You're on ten here... all the way up... all the way up... all the way up. You're on ten on your guitar...where can you go from there? Where? Nowhere. Exactly. What we do is if we need that extra... push over the cliff... you know what we do? Put it up to eleven. Eleven. Exactly. One louder."]})})]})},j$=e=>wi([e.range,$t(e.bgc)?`bgc-${e.bgc}`:"",$t(e.fgc)?`fgc-${e.fgc}`:"",$t(e.hdc)?`hdc-${e.hdc}`:"",$t(e.bdc)?`bdc-${e.bdc}`:"",$t(e.bdw)?`bdw-${e.bdw}`:"",$t(e.bdr)?`bdr-${e.bdr}`:"",e.size,$t(e.mar)?`mar-${e.mar}`:"",$t(e.pad)?`pad-${e.pad}`:"",$t(e.shadow)?`shadow-${e.shadow}`:"",e.border?"border":""]),U$=()=>{const[e,t]=U.useState({range:"brand",bgc:90,fgc:30,hdc:20,bdc:60,bdr:3,bdw:2,pad:4,mar:6,shadow:2,border:!0});return h("div",{className:"grid gap-8",children:[a(B$,{options:e}),a(z$,{options:e,setOption:l=>o=>t(i=>({...i,[l]:o})),toggleOption:l=>()=>t(o=>({...o,[l]:!o[l]}))})]})},H$=()=>h("div",{children:[a("h1",{children:"Demo"}),h("div",{className:"grid-2 gap-h-8 stack-desktop",children:[h("div",{children:[h("p",{children:["One of the novel approaches that Badger CSS employs is to provide CSS classes for each of the colors in the palette.  There are then further CSS classes that can be used to select the particular shade (or color"," ",'"stop") from that range to use for the background, foreground, heading and border colors.']}),h("p",{children:["One benefit of this approach is that it allows you to design color agnostic components that work with both light and dark themes, and can then be used with any color range.  For some examples, see the"," ",a(Le,{to:"/components/alerts",text:"Alerts"})," and "," ",a(Le,{to:"/components/tables",text:"Tables"})," pages"]}),a("p",{children:"Another more practical benefit is that it avoid the combinatorial explosion of CSS classes required to cover every combination of color range and stop for foreground, background, heading and border colors."})]}),h("div",{children:[a("p",{children:"Further utility classes are provided for selecting font size, border width and radius, margins, padding, shadows and various layout options. They're similar to what you'll find in other CSS toolkits."}),a("p",{children:"The choice about what is included and what isn't is entirely arbitrary but I lean towards minimalism and have only included the kind of utility classes that I use in most, if not all web sites. It's really easy for you to add in your own utility classes, or change the settings for the provided utilities, if you want to."}),a("p",{children:"So without further ado, click on the buttons below to select different colors and layout options.  Each one selects a CSS class which affects the way the output is displayed."})]})]}),a(U$,{})]}),W$=Object.freeze(Object.defineProperty({__proto__:null,default:H$},Symbol.toStringTag,{value:"Module"})),V$=`<div class="grid-fit gap-2">
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
`,G$=`<div class="grid-fit gap-2">
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
`,Y$=`<div class="grid-fit gap-2">
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
`,q$=`<div class="grid-fit gap-2">
  <span class="button">Default</span>
  <span class="red shaded button">Red Shaded</span>
  <span class="orange outline button">Orange Outline</span>
</div>
`,Z$=`<div class="flex start gap-4">
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
</div>`,Q$=`<div class="flex start gap-4">
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
</div>`,K$=()=>h("div",{className:"prose",children:[a("h1",{children:"Buttons"}),h("p",{children:["For the sake of accessibility, buttons should usually be rendered using the ",a("code",{children:"button"})," element.  I mean, that's what it's there for, right?  For those cases when you really need to make a link or something else look like a button you can add the"," ",a("code",{children:"button"})," class."]}),h("p",{children:["The default button color is grey. Any one of the color classes (e.g. ",a("code",{children:"red"}),", ",a("code",{children:"green"}),", etc) can be added to get different colors."]}),a("p",{children:"Button color stops automatically adapt between light and dark modes."}),a("h2",{children:"Default Style"}),a("p",{children:"The default button style is solid."}),a(D,{html:V$,language:"html",caption:"Buttons"}),a("h2",{children:"Outline Style"}),h("p",{children:["Add the ",a("code",{children:"outline"})," class for outline buttons."]}),a(D,{html:G$,caption:"Outline Buttons"}),a("h2",{children:"Shaded Style"}),h("p",{children:["Add the ",a("code",{children:"shade"})," class for subtly shaded buttons.  It's only a matter of time until flat design is out and shaded is back in. Be ahead of the curve!"]}),a(D,{html:Y$,caption:"Shaded Buttons"}),a("h2",{children:"Button Class"}),h("p",{children:["Add the ",a("code",{children:"button"})," class to any non-button element to give it the button styling.  You can also add the ",a("code",{children:"outline"})," and/or"," ",a("code",{children:"shaded"})," classes."]}),a(D,{html:q$,caption:".button class"}),a("h2",{children:"Button Icons"}),h("p",{children:["You can add ",a(Le,{to:"/components/icons",text:"SVG Icons"})," to buttons. You can set the margins for icons manually using the ",a("code",{children:"mar-N"})," ","classes described on the ",a(Le,{to:"/utilities/spacing",text:"spacing"})," page. The ",a("code",{children:"on-left"})," and ",a("code",{children:"on-right"})," classes are provided as shortcuts and are equivalent to ",a("code",{children:"mar-r-2"})," and ",a("code",{children:"mar-l-2"}),", respectively."]}),a(D,{html:Z$,caption:"Button icons"}),a("h2",{children:"Button Padding"}),a("p",{children:"The default padding for buttons is larger in the horizontal direction (4 units = 1em) than it is in the vertical direction (1 unit = 0.25em). This isn't as unbalanced as it initially seems when you factor in the line-height (1.5), which effectively results in  the vertical padding being equivalent to 2 units (0.5em)."}),h("p",{children:["If you have a button that only contains an icon then it can look a bit strange, as shown in the first button here.  Adding the ",a("code",{children:"pad-h-2"})," class to the button will reduce the horizontal padding to 2 units (0.5em) which will even things out, as shown in the second button.  Or you can add the ",a("code",{children:"icon"})," class to the button which will have the same effect and doesn't require you to remember how many units of padding you need to set."]}),a(D,{html:Q$,caption:"Button padding"})]}),X$=Object.freeze(Object.defineProperty({__proto__:null,default:K$},Symbol.toStringTag,{value:"Module"})),J$=`<label>
  <input type="checkbox">
  Option 1
</label>

<label class="checkbox">
  <input type="checkbox">
  Option 2
</label>
`,eT=`<label class="wide">
  <input type="checkbox">
  Option 1
</label>

<label class="wide checkbox">
  <input type="checkbox">
  Option 2
</label>
`,tT=`<div class="grid-2 gap-2">
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
`,nT=`<div>
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
</div>`,rT=()=>h("div",{children:[a("h1",{children:"Checkboxes"}),a("h2",{children:"Checkbox Class"}),h("p",{children:["The usual approach to creating a checkbox is to define a"," ",a("code",{children:"label"})," that contains an ",a("code",{children:"input"})," with a",a("code",{children:'type="label"'})," attribute."]}),h("p",{children:["That will work fine on most browsers.  However at the time of writing (July 2023), Firefox (v115) still doesn't support the"," ",a("code",{children:":has()"})," CSS selector that this depends upon.  Although the other major browsers currently support it and we're expecting it to be implemented in Firefox soon."]}),h("p",{children:["As a work-around you can add the ",a("code",{children:"checkbox"})," class to the"," ",a("code",{children:"label"}),"."]}),a(D,{html:J$,language:"html",caption:"Checkboxes"}),a("h2",{children:"Wide Checkboxes"}),h("p",{children:["Add the ",a("code",{children:"wide"})," class for full-width checkboxes."]}),a(D,{html:eT,language:"html",caption:"Wide Checkboxes"}),a("h2",{children:"Checkbox Borders"}),h("p",{children:["Add the ",a("code",{children:"border"})," class for borders."]}),a(D,{html:tT,language:"html",caption:"Border Checkboxes"}),a("h2",{children:"Custom Checkboxes"}),a(D,{html:nT,language:"html",caption:"Custom Checkboxes"})]}),lT=Object.freeze(Object.defineProperty({__proto__:null,default:rT},Symbol.toStringTag,{value:"Module"})),aT=`<div class="field">
  <label>Label</label>
  <input type="text" value="Input value">
  <div class="help">Help message</div>
</div>`,oT=`<div class="field invalid">
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
</div>`,iT=`<div class="field valid">
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
</div>`,sT=`<div class="field required">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
<div class="field required">
  <label>Terms</label>
  <label class="Xcheckbox">
    <input type="checkbox">
    I accept the terms and conditions
  </label>
</div>`,cT=`<style>
  .mandatory-text {
    --required-text: 'MANDATORY';
  }
</style>
<div class="field required mandatory-text">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
`,dT=`<div class="field optional">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>`,uT=`<style>
  .not-required {
    --optional-text: 'NOT REQUIRED';
  }
</style>
<div class="field optional not-required">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
`,hT=`// define your own text for the required/optional labels...
$field-required-text: '"Important"';
$field-optional-text: '"Not Required"';

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,fT=`<div class="field">
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
`,pT=`<div class="field">
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
`,gT=`<div class="field">
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
`,mT=()=>h("div",{className:"prose",children:[a("h1",{children:"Form Fields"}),a("p",{children:"Form fields are usually comprised of more than just an input. A label is usually present and sometimes an additional help message too."}),a("h2",{children:"Field Class"}),h("p",{children:["Create a container with the ",a("code",{children:"field"})," class. Any help message should have the ",a("code",{children:"help"})," class."]}),a(D,{html:aT,language:"html",caption:"Form Field"}),a("h2",{children:"Invalid Field"}),h("p",{children:["Add the ",a("code",{children:"invalid"})," class to the ",a("code",{children:"field"})," to indicate fields that are invalid."]}),a(D,{html:oT,language:"html",caption:"Invalid Field"}),a("h2",{children:"Valid Field"}),h("p",{children:["Add the ",a("code",{children:"valid"})," class to the ",a("code",{children:"field"})," to indicate fields that have passed validation."]}),a(D,{html:iT,language:"html",caption:"Valid Field"}),a("h2",{children:"Required Field"}),h("p",{children:["Add the ",a("code",{children:"required"})," class to the ",a("code",{children:"field"})," if you want an additional tag added to the label."]}),a(D,{html:sT,language:"html",caption:"Required Field"}),h("p",{children:["You can use the ",a("code",{children:"--required-text"})," CSS variable to change the text displayed."]}),a(D,{html:cT,language:"html",caption:"Custom Required Field"}),a("h2",{children:"Optional Field"}),h("p",{children:["Add the ",a("code",{children:"optional"})," class to the ",a("code",{children:"field"})," if you want an additional tag added to the label."]}),a(D,{html:dT,language:"html",caption:"Optional Field"}),h("p",{children:["You can use the ",a("code",{children:"--optional-text"})," CSS variable to change the text displayed."]}),a(D,{html:uT,language:"html",caption:"Custom Optional Field"}),h("p",{children:["You can also change the text displayed for either the required and/or optional labels on a global level by setting the"," ",a("code",{children:"$field-required-text"})," and ",a("code",{children:"$field-optional-text"})," ","SASS variables. Be warned that you need to quote the values twice, so that the value defined includes a set of quotes, as shown here."]}),a(Je,{code:hT,caption:"Required Text",language:"scss",className:"mar-b-8",expand:!0}),a("h2",{children:"Input Prefix"}),h("p",{children:["If you want to add a prefix to a field you should enclose the input in an element with the ",a("code",{children:"input"})," class and add the"," ",a("code",{children:"prefix"})," class to the prefix element.  You can add a prefix to a text input, textarea, select or a checkbox or radio option with the ",a("code",{children:"border"})," class set.  You can try it without the "," ",a("code",{children:"border"})," but the effect is lost somewhat."]}),h("p",{children:["If you want a wide input then add the ",a("code",{children:"wide"})," class to the"," ",a("code",{children:"input"})," container element."]}),a(D,{html:fT,language:"html",caption:"Input Prefix"}),a("h2",{children:"Input Suffix"}),h("p",{children:["Adding an input suffix is just the same, except for giving your suffix element the ",a("code",{children:"suffix"})," class and putting it after the input."]}),a(D,{html:pT,language:"html",caption:"Input Suffix"}),a("h2",{children:"Prefix and Suffix"}),h("p",{children:["You can add both a ",a("code",{children:"prefix"})," and a ",a("code",{children:"suffix"}),". Not only do the colours and focus rings work correctly, but they also adapt their colors for ",a("code",{children:"valid"})," and ",a("code",{children:"invalid"})," fields."]}),a(D,{html:gT,language:"html",caption:"Prefix and Suffix"})]}),vT=Object.freeze(Object.defineProperty({__proto__:null,default:mT},Symbol.toStringTag,{value:"Module"})),yT=`<fieldset>
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
</fieldset>`,bT=()=>h("div",{className:"prose",children:[a("h1",{children:"Form Field Sets"}),h("p",{children:["You can group related fields together in a ",a("code",{children:"fieldset"}),"."]}),a("h2",{children:"Fieldset Container"}),a(D,{html:yT,language:"html",caption:"Form Fieldset"})]}),wT=Object.freeze(Object.defineProperty({__proto__:null,default:bT},Symbol.toStringTag,{value:"Module"})),h1=`<div class="field">
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
`,xT=`<div class="grid-1 gap-4">
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
</div>`,ST=`<div class="field optional">
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
`,CT=`<div class="grid-1 gap-4">
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
</div>`;var za={};/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cy=U;function ge(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qt=Object.prototype.hasOwnProperty,kT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f1={},p1={};function ky(e){return Qt.call(p1,e)?!0:Qt.call(f1,e)?!1:kT.test(e)?p1[e]=!0:(f1[e]=!0,!1)}function Vt(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){It[e]=new Vt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];It[t]=new Vt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){It[e]=new Vt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){It[e]=new Vt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){It[e]=new Vt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){It[e]=new Vt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){It[e]=new Vt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){It[e]=new Vt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){It[e]=new Vt(e,5,!1,e.toLowerCase(),null,!1,!1)});var zf=/[\-:]([a-z])/g;function Bf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(zf,Bf);It[t]=new Vt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(zf,Bf);It[t]=new Vt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(zf,Bf);It[t]=new Vt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){It[e]=new Vt(e,1,!1,e.toLowerCase(),null,!1,!1)});It.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){It[e]=new Vt(e,1,!1,e.toLowerCase(),null,!0,!0)});var Ss={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_T=["Webkit","ms","Moz","O"];Object.keys(Ss).forEach(function(e){_T.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ss[t]=Ss[e]})});var $T=/["'&<>]/;function jt(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=$T.exec(e);if(t){var n="",r,l=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}l!==r&&(n+=e.substring(l,r)),l=r+1,n+=t}e=l!==r?n+e.substring(l,r):n}return e}var TT=/([A-Z])/g,ET=/^ms-/,nh=Array.isArray;function rr(e,t){return{insertionMode:e,selectedValue:t}}function NT(e,t,n){switch(t){case"select":return rr(1,n.value!=null?n.value:n.defaultValue);case"svg":return rr(2,null);case"math":return rr(3,null);case"foreignObject":return rr(1,null);case"table":return rr(4,null);case"thead":case"tbody":case"tfoot":return rr(5,null);case"colgroup":return rr(7,null);case"tr":return rr(6,null)}return 4<=e.insertionMode||e.insertionMode===0?rr(1,null):e}var g1=new Map;function _y(e,t,n){if(typeof n!="object")throw Error(ge(62));t=!0;for(var r in n)if(Qt.call(n,r)){var l=n[r];if(l!=null&&typeof l!="boolean"&&l!==""){if(r.indexOf("--")===0){var o=jt(r);l=jt((""+l).trim())}else{o=r;var i=g1.get(o);i!==void 0||(i=jt(o.replace(TT,"-$1").toLowerCase().replace(ET,"-ms-")),g1.set(o,i)),o=i,l=typeof l=="number"?l===0||Qt.call(Ss,r)?""+l:l+"px":jt((""+l).trim())}t?(t=!1,e.push(' style="',o,":",l)):e.push(";",o,":",l)}}t||e.push('"')}function ln(e,t,n,r){switch(n){case"style":_y(e,t,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N"){if(t=It.hasOwnProperty(n)?It[n]:null,t!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(n=t.attributeName,t.type){case 3:r&&e.push(" ",n,'=""');break;case 4:r===!0?e.push(" ",n,'=""'):r!==!1&&e.push(" ",n,'="',jt(r),'"');break;case 5:isNaN(r)||e.push(" ",n,'="',jt(r),'"');break;case 6:!isNaN(r)&&1<=r&&e.push(" ",n,'="',jt(r),'"');break;default:t.sanitizeURL&&(r=""+r),e.push(" ",n,'="',jt(r),'"')}}else if(ky(n)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(t=n.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-")return}e.push(" ",n,'="',jt(r),'"')}}}function Cs(e,t,n){if(t!=null){if(n!=null)throw Error(ge(60));if(typeof t!="object"||!("__html"in t))throw Error(ge(61));t=t.__html,t!=null&&e.push(""+t)}}function LT(e){var t="";return Cy.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function Hd(e,t,n,r){e.push(Un(n));var l=n=null,o;for(o in t)if(Qt.call(t,o)){var i=t[o];if(i!=null)switch(o){case"children":n=i;break;case"dangerouslySetInnerHTML":l=i;break;default:ln(e,r,o,i)}}return e.push(">"),Cs(e,l,n),typeof n=="string"?(e.push(jt(n)),null):n}var IT=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,m1=new Map;function Un(e){var t=m1.get(e);if(t===void 0){if(!IT.test(e))throw Error(ge(65,e));t="<"+e,m1.set(e,t)}return t}function RT(e,t,n,r,l){switch(t){case"select":e.push(Un("select"));var o=null,i=null;for(m in n)if(Qt.call(n,m)){var s=n[m];if(s!=null)switch(m){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"defaultValue":case"value":break;default:ln(e,r,m,s)}}return e.push(">"),Cs(e,i,o),o;case"option":i=l.selectedValue,e.push(Un("option"));var d=s=null,f=null,m=null;for(o in n)if(Qt.call(n,o)){var b=n[o];if(b!=null)switch(o){case"children":s=b;break;case"selected":f=b;break;case"dangerouslySetInnerHTML":m=b;break;case"value":d=b;default:ln(e,r,o,b)}}if(i!=null)if(n=d!==null?""+d:LT(s),nh(i)){for(r=0;r<i.length;r++)if(""+i[r]===n){e.push(' selected=""');break}}else""+i===n&&e.push(' selected=""');else f&&e.push(' selected=""');return e.push(">"),Cs(e,m,s),s;case"textarea":e.push(Un("textarea")),m=i=o=null;for(s in n)if(Qt.call(n,s)&&(d=n[s],d!=null))switch(s){case"children":m=d;break;case"value":o=d;break;case"defaultValue":i=d;break;case"dangerouslySetInnerHTML":throw Error(ge(91));default:ln(e,r,s,d)}if(o===null&&i!==null&&(o=i),e.push(">"),m!=null){if(o!=null)throw Error(ge(92));if(nh(m)&&1<m.length)throw Error(ge(93));o=""+m}return typeof o=="string"&&o[0]===`
`&&e.push(`
`),o!==null&&e.push(jt(""+o)),null;case"input":e.push(Un("input")),d=m=s=o=null;for(i in n)if(Qt.call(n,i)&&(f=n[i],f!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(ge(399,"input"));case"defaultChecked":d=f;break;case"defaultValue":s=f;break;case"checked":m=f;break;case"value":o=f;break;default:ln(e,r,i,f)}return m!==null?ln(e,r,"checked",m):d!==null&&ln(e,r,"checked",d),o!==null?ln(e,r,"value",o):s!==null&&ln(e,r,"value",s),e.push("/>"),null;case"menuitem":e.push(Un("menuitem"));for(var S in n)if(Qt.call(n,S)&&(o=n[S],o!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(ge(400));default:ln(e,r,S,o)}return e.push(">"),null;case"title":e.push(Un("title")),o=null;for(b in n)if(Qt.call(n,b)&&(i=n[b],i!=null))switch(b){case"children":o=i;break;case"dangerouslySetInnerHTML":throw Error(ge(434));default:ln(e,r,b,i)}return e.push(">"),o;case"listing":case"pre":e.push(Un(t)),i=o=null;for(d in n)if(Qt.call(n,d)&&(s=n[d],s!=null))switch(d){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;default:ln(e,r,d,s)}if(e.push(">"),i!=null){if(o!=null)throw Error(ge(60));if(typeof i!="object"||!("__html"in i))throw Error(ge(61));n=i.__html,n!=null&&(typeof n=="string"&&0<n.length&&n[0]===`
`?e.push(`
`,n):e.push(""+n))}return typeof o=="string"&&o[0]===`
`&&e.push(`
`),o;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Un(t));for(var L in n)if(Qt.call(n,L)&&(o=n[L],o!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(ge(399,t));default:ln(e,r,L,o)}return e.push("/>"),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Hd(e,n,t,r);case"html":return l.insertionMode===0&&e.push("<!DOCTYPE html>"),Hd(e,n,t,r);default:if(t.indexOf("-")===-1&&typeof n.is!="string")return Hd(e,n,t,r);e.push(Un(t)),i=o=null;for(f in n)if(Qt.call(n,f)&&(s=n[f],s!=null))switch(f){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"style":_y(e,r,s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:ky(f)&&typeof s!="function"&&typeof s!="symbol"&&e.push(" ",f,'="',jt(s),'"')}return e.push(">"),Cs(e,i,o),o}}function v1(e,t,n){if(e.push('<!--$?--><template id="'),n===null)throw Error(ge(395));return e.push(n),e.push('"></template>')}function PT(e,t,n,r){switch(n.insertionMode){case 0:case 1:return e.push('<div hidden id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 2:return e.push('<svg aria-hidden="true" style="display:none" id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 3:return e.push('<math aria-hidden="true" style="display:none" id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 4:return e.push('<table hidden id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 5:return e.push('<table hidden><tbody id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 6:return e.push('<table hidden><tr id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 7:return e.push('<table hidden><colgroup id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');default:throw Error(ge(397))}}function FT(e,t){switch(t.insertionMode){case 0:case 1:return e.push("</div>");case 2:return e.push("</svg>");case 3:return e.push("</math>");case 4:return e.push("</table>");case 5:return e.push("</tbody></table>");case 6:return e.push("</tr></table>");case 7:return e.push("</colgroup></table>");default:throw Error(ge(397))}}var MT=/[<\u2028\u2029]/g;function Wd(e){return JSON.stringify(e).replace(MT,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}function OT(e,t){return t=t===void 0?"":t,{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:t+"P:",segmentPrefix:t+"S:",boundaryPrefix:t+"B:",idPrefix:t,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:e}}function y1(e,t,n,r){return n.generateStaticMarkup?(e.push(jt(t)),!1):(t===""?e=r:(r&&e.push("<!-- -->"),e.push(jt(t)),e=!0),e)}var Mo=Object.assign,AT=Symbol.for("react.element"),$y=Symbol.for("react.portal"),Ty=Symbol.for("react.fragment"),Ey=Symbol.for("react.strict_mode"),Ny=Symbol.for("react.profiler"),Ly=Symbol.for("react.provider"),Iy=Symbol.for("react.context"),Ry=Symbol.for("react.forward_ref"),Py=Symbol.for("react.suspense"),Fy=Symbol.for("react.suspense_list"),My=Symbol.for("react.memo"),jf=Symbol.for("react.lazy"),DT=Symbol.for("react.scope"),zT=Symbol.for("react.debug_trace_mode"),BT=Symbol.for("react.legacy_hidden"),jT=Symbol.for("react.default_value"),b1=Symbol.iterator;function rh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ty:return"Fragment";case $y:return"Portal";case Ny:return"Profiler";case Ey:return"StrictMode";case Py:return"Suspense";case Fy:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Iy:return(e.displayName||"Context")+".Consumer";case Ly:return(e._context.displayName||"Context")+".Provider";case Ry:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case My:return t=e.displayName||null,t!==null?t:rh(e.type)||"Memo";case jf:t=e._payload,e=e._init;try{return rh(e(t))}catch{}}return null}var Oy={};function w1(e,t){if(e=e.contextTypes,!e)return Oy;var n={},r;for(r in e)n[r]=t[r];return n}var xl=null;function Fc(e,t){if(e!==t){e.context._currentValue2=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(ge(401))}else{if(n===null)throw Error(ge(401));Fc(e,n)}t.context._currentValue2=t.value}}function Ay(e){e.context._currentValue2=e.parentValue,e=e.parent,e!==null&&Ay(e)}function Dy(e){var t=e.parent;t!==null&&Dy(t),e.context._currentValue2=e.value}function zy(e,t){if(e.context._currentValue2=e.parentValue,e=e.parent,e===null)throw Error(ge(402));e.depth===t.depth?Fc(e,t):zy(e,t)}function By(e,t){var n=t.parent;if(n===null)throw Error(ge(402));e.depth===n.depth?Fc(e,n):By(e,n),t.context._currentValue2=t.value}function lc(e){var t=xl;t!==e&&(t===null?Dy(e):e===null?Ay(t):t.depth===e.depth?Fc(t,e):t.depth>e.depth?zy(t,e):By(t,e),xl=e)}var x1={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function S1(e,t,n,r){var l=e.state!==void 0?e.state:null;e.updater=x1,e.props=n,e.state=l;var o={queue:[],replace:!1};e._reactInternals=o;var i=t.contextType;if(e.context=typeof i=="object"&&i!==null?i._currentValue2:r,i=t.getDerivedStateFromProps,typeof i=="function"&&(i=i(n,l),l=i==null?l:Mo({},l,i),e.state=l),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&x1.enqueueReplaceState(e,e.state,null),o.queue!==null&&0<o.queue.length)if(t=o.queue,i=o.replace,o.queue=null,o.replace=!1,i&&t.length===1)e.state=t[0];else{for(o=i?t[0]:e.state,l=!0,i=i?1:0;i<t.length;i++){var s=t[i];s=typeof s=="function"?s.call(e,o,n,r):s,s!=null&&(l?(l=!1,o=Mo({},o,s)):Mo(o,s))}e.state=o}else o.queue=null}var UT={id:1,overflow:""};function lh(e,t,n){var r=e.id;e=e.overflow;var l=32-ks(r)-1;r&=~(1<<l),n+=1;var o=32-ks(t)+l;if(30<o){var i=l-l%5;return o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,{id:1<<32-ks(t)+l|n<<l|r,overflow:o+e}}return{id:1<<o|n<<l|r,overflow:e}}var ks=Math.clz32?Math.clz32:VT,HT=Math.log,WT=Math.LN2;function VT(e){return e>>>=0,e===0?32:31-(HT(e)/WT|0)|0}function GT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var YT=typeof Object.is=="function"?Object.is:GT,gr=null,Uf=null,_s=null,Ue=null,xo=!1,ac=!1,ai=0,Pr=null,Mc=0;function fl(){if(gr===null)throw Error(ge(321));return gr}function C1(){if(0<Mc)throw Error(ge(312));return{memoizedState:null,queue:null,next:null}}function Hf(){return Ue===null?_s===null?(xo=!1,_s=Ue=C1()):(xo=!0,Ue=_s):Ue.next===null?(xo=!1,Ue=Ue.next=C1()):(xo=!0,Ue=Ue.next),Ue}function Wf(){Uf=gr=null,ac=!1,_s=null,Mc=0,Ue=Pr=null}function jy(e,t){return typeof t=="function"?t(e):t}function k1(e,t,n){if(gr=fl(),Ue=Hf(),xo){var r=Ue.queue;if(t=r.dispatch,Pr!==null&&(n=Pr.get(r),n!==void 0)){Pr.delete(r),r=Ue.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return Ue.memoizedState=r,[r,t]}return[Ue.memoizedState,t]}return e=e===jy?typeof t=="function"?t():t:n!==void 0?n(t):t,Ue.memoizedState=e,e=Ue.queue={last:null,dispatch:null},e=e.dispatch=qT.bind(null,gr,e),[Ue.memoizedState,e]}function _1(e,t){if(gr=fl(),Ue=Hf(),t=t===void 0?null:t,Ue!==null){var n=Ue.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var l=0;l<r.length&&l<t.length;l++)if(!YT(t[l],r[l])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),Ue.memoizedState=[e,t],e}function qT(e,t,n){if(25<=Mc)throw Error(ge(301));if(e===gr)if(ac=!0,e={action:n,next:null},Pr===null&&(Pr=new Map),n=Pr.get(t),n===void 0)Pr.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function ZT(){throw Error(ge(394))}function rs(){}var $1={readContext:function(e){return e._currentValue2},useContext:function(e){return fl(),e._currentValue2},useMemo:_1,useReducer:k1,useRef:function(e){gr=fl(),Ue=Hf();var t=Ue.memoizedState;return t===null?(e={current:e},Ue.memoizedState=e):t},useState:function(e){return k1(jy,e)},useInsertionEffect:rs,useLayoutEffect:function(){},useCallback:function(e,t){return _1(function(){return e},t)},useImperativeHandle:rs,useEffect:rs,useDebugValue:rs,useDeferredValue:function(e){return fl(),e},useTransition:function(){return fl(),[!1,ZT]},useId:function(){var e=Uf.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-ks(e)-1)).toString(32)+t;var n=$s;if(n===null)throw Error(ge(404));return t=ai++,e=":"+n.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return fl(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(ge(407));return n()}},$s=null,Vd=Cy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function QT(e){return console.error(e),null}function So(){}function KT(e,t,n,r,l,o,i,s,d){var f=[],m=new Set;return t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:m,pingedTasks:f,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:l===void 0?QT:l,onAllReady:o===void 0?So:o,onShellReady:i===void 0?So:i,onShellError:s===void 0?So:s,onFatalError:d===void 0?So:d},n=oc(t,0,null,n,!1,!1),n.parentFlushed=!0,e=Vf(t,e,null,n,m,Oy,null,UT),f.push(e),t}function Vf(e,t,n,r,l,o,i,s){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var d={node:t,ping:function(){var f=e.pingedTasks;f.push(d),f.length===1&&Wy(e)},blockedBoundary:n,blockedSegment:r,abortSet:l,legacyContext:o,context:i,treeContext:s};return l.add(d),d}function oc(e,t,n,r,l,o){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:l,textEmbedded:o}}function oi(e,t){if(e=e.onError(t),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function ic(e,t){var n=e.onShellError;n(t),n=e.onFatalError,n(t),e.destination!==null?(e.status=2,e.destination.destroy(t)):(e.status=1,e.fatalError=t)}function T1(e,t,n,r,l){for(gr={},Uf=t,ai=0,e=n(r,l);ac;)ac=!1,ai=0,Mc+=1,Ue=null,e=n(r,l);return Wf(),e}function E1(e,t,n,r){var l=n.render(),o=r.childContextTypes;if(o!=null){var i=t.legacyContext;if(typeof n.getChildContext!="function")r=i;else{n=n.getChildContext();for(var s in n)if(!(s in o))throw Error(ge(108,rh(r)||"Unknown",s));r=Mo({},i,n)}t.legacyContext=r,sn(e,t,l),t.legacyContext=i}else sn(e,t,l)}function N1(e,t){if(e&&e.defaultProps){t=Mo({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ah(e,t,n,r,l){if(typeof n=="function")if(n.prototype&&n.prototype.isReactComponent){l=w1(n,t.legacyContext);var o=n.contextType;o=new n(r,typeof o=="object"&&o!==null?o._currentValue2:l),S1(o,n,r,l),E1(e,t,o,n)}else{o=w1(n,t.legacyContext),l=T1(e,t,n,r,o);var i=ai!==0;if(typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0)S1(l,n,r,o),E1(e,t,l,n);else if(i){r=t.treeContext,t.treeContext=lh(r,1,0);try{sn(e,t,l)}finally{t.treeContext=r}}else sn(e,t,l)}else if(typeof n=="string"){switch(l=t.blockedSegment,o=RT(l.chunks,n,r,e.responseState,l.formatContext),l.lastPushedText=!1,i=l.formatContext,l.formatContext=NT(i,n,r),oh(e,t,o),l.formatContext=i,n){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:l.chunks.push("</",n,">")}l.lastPushedText=!1}else{switch(n){case BT:case zT:case Ey:case Ny:case Ty:sn(e,t,r.children);return;case Fy:sn(e,t,r.children);return;case DT:throw Error(ge(343));case Py:e:{n=t.blockedBoundary,l=t.blockedSegment,o=r.fallback,r=r.children,i=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:i,errorDigest:null},d=oc(e,l.chunks.length,s,l.formatContext,!1,!1);l.children.push(d),l.lastPushedText=!1;var f=oc(e,0,null,l.formatContext,!1,!1);f.parentFlushed=!0,t.blockedBoundary=s,t.blockedSegment=f;try{if(oh(e,t,r),e.responseState.generateStaticMarkup||f.lastPushedText&&f.textEmbedded&&f.chunks.push("<!-- -->"),f.status=1,sc(s,f),s.pendingTasks===0)break e}catch(m){f.status=4,s.forceClientRender=!0,s.errorDigest=oi(e,m)}finally{t.blockedBoundary=n,t.blockedSegment=l}t=Vf(e,o,n,d,i,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Ry:if(r=T1(e,t,n.render,r,l),ai!==0){n=t.treeContext,t.treeContext=lh(n,1,0);try{sn(e,t,r)}finally{t.treeContext=n}}else sn(e,t,r);return;case My:n=n.type,r=N1(n,r),ah(e,t,n,r,l);return;case Ly:if(l=r.children,n=n._context,r=r.value,o=n._currentValue2,n._currentValue2=r,i=xl,xl=r={parent:i,depth:i===null?0:i.depth+1,context:n,parentValue:o,value:r},t.context=r,sn(e,t,l),e=xl,e===null)throw Error(ge(403));r=e.parentValue,e.context._currentValue2=r===jT?e.context._defaultValue:r,e=xl=e.parent,t.context=e;return;case Iy:r=r.children,r=r(n._currentValue2),sn(e,t,r);return;case jf:l=n._init,n=l(n._payload),r=N1(n,r),ah(e,t,n,r,void 0);return}throw Error(ge(130,n==null?n:typeof n,""))}}function sn(e,t,n){if(t.node=n,typeof n=="object"&&n!==null){switch(n.$$typeof){case AT:ah(e,t,n.type,n.props,n.ref);return;case $y:throw Error(ge(257));case jf:var r=n._init;n=r(n._payload),sn(e,t,n);return}if(nh(n)){L1(e,t,n);return}if(n===null||typeof n!="object"?r=null:(r=b1&&n[b1]||n["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(n))){if(n=r.next(),!n.done){var l=[];do l.push(n.value),n=r.next();while(!n.done);L1(e,t,l)}return}throw e=Object.prototype.toString.call(n),Error(ge(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}typeof n=="string"?(r=t.blockedSegment,r.lastPushedText=y1(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText)):typeof n=="number"&&(r=t.blockedSegment,r.lastPushedText=y1(t.blockedSegment.chunks,""+n,e.responseState,r.lastPushedText))}function L1(e,t,n){for(var r=n.length,l=0;l<r;l++){var o=t.treeContext;t.treeContext=lh(o,r,l);try{oh(e,t,n[l])}finally{t.treeContext=o}}}function oh(e,t,n){var r=t.blockedSegment.formatContext,l=t.legacyContext,o=t.context;try{return sn(e,t,n)}catch(d){if(Wf(),typeof d=="object"&&d!==null&&typeof d.then=="function"){n=d;var i=t.blockedSegment,s=oc(e,i.chunks.length,null,i.formatContext,i.lastPushedText,!0);i.children.push(s),i.lastPushedText=!1,e=Vf(e,t.node,t.blockedBoundary,s,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=l,t.context=o,lc(o)}else throw t.blockedSegment.formatContext=r,t.legacyContext=l,t.context=o,lc(o),d}}function XT(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,Hy(this,t,e)}function Uy(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.push(null))):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(ge(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(l){return Uy(l,t,n)}),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady,r()))}function sc(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&sc(e,n)}else e.completedSegments.push(t)}function Hy(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(ge(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=So,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&sc(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(XT,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(sc(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function Wy(e){if(e.status!==2){var t=xl,n=Vd.current;Vd.current=$1;var r=$s;$s=e.responseState;try{var l=e.pingedTasks,o;for(o=0;o<l.length;o++){var i=l[o],s=e,d=i.blockedSegment;if(d.status===0){lc(i.context);try{sn(s,i,i.node),s.responseState.generateStaticMarkup||d.lastPushedText&&d.textEmbedded&&d.chunks.push("<!-- -->"),i.abortSet.delete(i),d.status=1,Hy(s,i.blockedBoundary,d)}catch(N){if(Wf(),typeof N=="object"&&N!==null&&typeof N.then=="function"){var f=i.ping;N.then(f,f)}else{i.abortSet.delete(i),d.status=4;var m=i.blockedBoundary,b=N,S=oi(s,b);if(m===null?ic(s,b):(m.pendingTasks--,m.forceClientRender||(m.forceClientRender=!0,m.errorDigest=S,m.parentFlushed&&s.clientRenderedBoundaries.push(m))),s.allPendingTasks--,s.allPendingTasks===0){var L=s.onAllReady;L()}}}finally{}}}l.splice(0,o),e.destination!==null&&Gf(e,e.destination)}catch(N){oi(e,N),ic(e,N)}finally{$s=r,Vd.current=n,n===$1&&lc(t)}}}function ls(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,t.push('<template id="'),t.push(e.placeholderPrefix),e=r.toString(16),t.push(e),t.push('"></template>');case 1:n.status=2;var l=!0;r=n.chunks;var o=0;n=n.children;for(var i=0;i<n.length;i++){for(l=n[i];o<l.index;o++)t.push(r[o]);l=Oc(e,t,l)}for(;o<r.length-1;o++)t.push(r[o]);return o<r.length&&(l=t.push(r[o])),l;default:throw Error(ge(390))}}function Oc(e,t,n){var r=n.boundary;if(r===null)return ls(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)return e.responseState.generateStaticMarkup||(r=r.errorDigest,t.push("<!--$!-->"),t.push("<template"),r&&(t.push(' data-dgst="'),r=jt(r),t.push(r),t.push('"')),t.push("></template>")),ls(e,t,n),e=e.responseState.generateStaticMarkup?!0:t.push("<!--/$-->"),e;if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var l=e.responseState,o=l.nextSuspenseID++;return l=l.boundaryPrefix+o.toString(16),r=r.id=l,v1(t,e.responseState,r),ls(e,t,n),t.push("<!--/$-->")}if(r.byteSize>e.progressiveChunkSize)return r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),v1(t,e.responseState,r.id),ls(e,t,n),t.push("<!--/$-->");if(e.responseState.generateStaticMarkup||t.push("<!--$-->"),n=r.completedSegments,n.length!==1)throw Error(ge(391));return Oc(e,t,n[0]),e=e.responseState.generateStaticMarkup?!0:t.push("<!--/$-->"),e}function I1(e,t,n){return PT(t,e.responseState,n.formatContext,n.id),Oc(e,t,n),FT(t,n.formatContext)}function R1(e,t,n){for(var r=n.completedSegments,l=0;l<r.length;l++)Vy(e,t,n,r[l]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,t.push(e.startInlineScript),e.sentCompleteBoundaryFunction?t.push('$RC("'):(e.sentCompleteBoundaryFunction=!0,t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')),r===null)throw Error(ge(395));return n=n.toString(16),t.push(r),t.push('","'),t.push(e.segmentPrefix),t.push(n),t.push('")<\/script>')}function Vy(e,t,n,r){if(r.status===2)return!0;var l=r.id;if(l===-1){if((r.id=n.rootSegmentID)===-1)throw Error(ge(392));return I1(e,t,r)}return I1(e,t,r),e=e.responseState,t.push(e.startInlineScript),e.sentCompleteSegmentFunction?t.push('$RS("'):(e.sentCompleteSegmentFunction=!0,t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')),t.push(e.segmentPrefix),l=l.toString(16),t.push(l),t.push('","'),t.push(e.placeholderPrefix),t.push(l),t.push('")<\/script>')}function Gf(e,t){try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){Oc(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)t.push(r[n]);n<r.length&&t.push(r[n])}var l=e.clientRenderedBoundaries,o;for(o=0;o<l.length;o++){var i=l[o];r=t;var s=e.responseState,d=i.id,f=i.errorDigest,m=i.errorMessage,b=i.errorComponentStack;if(r.push(s.startInlineScript),s.sentClientRenderFunction?r.push('$RX("'):(s.sentClientRenderFunction=!0,r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')),d===null)throw Error(ge(395));if(r.push(d),r.push('"'),f||m||b){r.push(",");var S=Wd(f||"");r.push(S)}if(m||b){r.push(",");var L=Wd(m||"");r.push(L)}if(b){r.push(",");var N=Wd(b);r.push(N)}if(!r.push(")<\/script>")){e.destination=null,o++,l.splice(0,o);return}}l.splice(0,o);var C=e.completedBoundaries;for(o=0;o<C.length;o++)if(!R1(e,t,C[o])){e.destination=null,o++,C.splice(0,o);return}C.splice(0,o);var I=e.partialBoundaries;for(o=0;o<I.length;o++){var w=I[o];e:{l=e,i=t;var g=w.completedSegments;for(s=0;s<g.length;s++)if(!Vy(l,i,w,g[s])){s++,g.splice(0,s);var y=!1;break e}g.splice(0,s),y=!0}if(!y){e.destination=null,o++,I.splice(0,o);return}}I.splice(0,o);var v=e.completedBoundaries;for(o=0;o<v.length;o++)if(!R1(e,t,v[o])){e.destination=null,o++,v.splice(0,o);return}v.splice(0,o)}finally{e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.push(null)}}function JT(e,t){try{var n=e.abortableTasks;n.forEach(function(r){return Uy(r,e,t)}),n.clear(),e.destination!==null&&Gf(e,e.destination)}catch(r){oi(e,r),ic(e,r)}}function eE(){}function Gy(e,t,n,r){var l=!1,o=null,i="",s={push:function(f){return f!==null&&(i+=f),!0},destroy:function(f){l=!0,o=f}},d=!1;if(e=KT(e,OT(n,t?t.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,eE,void 0,function(){d=!0},void 0,void 0),Wy(e),JT(e,r),e.status===1)e.status=2,s.destroy(e.fatalError);else if(e.status!==2&&e.destination===null){e.destination=s;try{Gf(e,s)}catch(f){oi(e,f),ic(e,f)}}if(l)throw o;if(!d)throw Error(ge(426));return i}za.renderToNodeStream=function(){throw Error(ge(207))};za.renderToStaticMarkup=function(e,t){return Gy(e,t,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};za.renderToStaticNodeStream=function(){throw Error(ge(208))};za.renderToString=function(e,t){return Gy(e,t,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};za.version="18.2.0";var Yf={};/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yy=U;function ye(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cn=null,dn=0;function re(e,t){if(t.length!==0)if(512<t.length)0<dn&&(e.enqueue(new Uint8Array(cn.buffer,0,dn)),cn=new Uint8Array(512),dn=0),e.enqueue(t);else{var n=cn.length-dn;n<t.length&&(n===0?e.enqueue(cn):(cn.set(t.subarray(0,n),dn),e.enqueue(cn),t=t.subarray(n)),cn=new Uint8Array(512),dn=0),cn.set(t,dn),dn+=t.length}}function Qe(e,t){return re(e,t),!0}function P1(e){cn&&0<dn&&(e.enqueue(new Uint8Array(cn.buffer,0,dn)),cn=null,dn=0)}var qy=new TextEncoder;function xe(e){return qy.encode(e)}function X(e){return qy.encode(e)}function Zy(e,t){typeof e.error=="function"?e.error(t):e.close()}var Kt=Object.prototype.hasOwnProperty,tE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,F1={},M1={};function Qy(e){return Kt.call(M1,e)?!0:Kt.call(F1,e)?!1:tE.test(e)?M1[e]=!0:(F1[e]=!0,!1)}function Gt(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var Rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Rt[e]=new Gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Rt[t]=new Gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Rt[e]=new Gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Rt[e]=new Gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Rt[e]=new Gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Rt[e]=new Gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Rt[e]=new Gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Rt[e]=new Gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Rt[e]=new Gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var qf=/[\-:]([a-z])/g;function Zf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qf,Zf);Rt[t]=new Gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qf,Zf);Rt[t]=new Gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qf,Zf);Rt[t]=new Gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Rt[e]=new Gt(e,1,!1,e.toLowerCase(),null,!1,!1)});Rt.xlinkHref=new Gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Rt[e]=new Gt(e,1,!1,e.toLowerCase(),null,!0,!0)});var Ts={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nE=["Webkit","ms","Moz","O"];Object.keys(Ts).forEach(function(e){nE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ts[t]=Ts[e]})});var rE=/["'&<>]/;function Et(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=rE.exec(e);if(t){var n="",r,l=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}l!==r&&(n+=e.substring(l,r)),l=r+1,n+=t}e=l!==r?n+e.substring(l,r):n}return e}var lE=/([A-Z])/g,aE=/^ms-/,ih=Array.isArray,oE=X("<script>"),iE=X("<\/script>"),sE=X('<script src="'),cE=X('<script type="module" src="'),O1=X('" async=""><\/script>'),dE=/(<\/|<)(s)(cript)/gi;function uE(e,t,n,r){return""+t+(n==="s"?"\\u0073":"\\u0053")+r}function hE(e,t,n,r,l){e=e===void 0?"":e,t=t===void 0?oE:X('<script nonce="'+Et(t)+'">');var o=[];if(n!==void 0&&o.push(t,xe((""+n).replace(dE,uE)),iE),r!==void 0)for(n=0;n<r.length;n++)o.push(sE,xe(Et(r[n])),O1);if(l!==void 0)for(r=0;r<l.length;r++)o.push(cE,xe(Et(l[r])),O1);return{bootstrapChunks:o,startInlineScript:t,placeholderPrefix:X(e+"P:"),segmentPrefix:X(e+"S:"),boundaryPrefix:e+"B:",idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function Hn(e,t){return{insertionMode:e,selectedValue:t}}function fE(e){return Hn(e==="http://www.w3.org/2000/svg"?2:e==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function pE(e,t,n){switch(t){case"select":return Hn(1,n.value!=null?n.value:n.defaultValue);case"svg":return Hn(2,null);case"math":return Hn(3,null);case"foreignObject":return Hn(1,null);case"table":return Hn(4,null);case"thead":case"tbody":case"tfoot":return Hn(5,null);case"colgroup":return Hn(7,null);case"tr":return Hn(6,null)}return 4<=e.insertionMode||e.insertionMode===0?Hn(1,null):e}var Qf=X("<!-- -->");function A1(e,t,n,r){return t===""?r:(r&&e.push(Qf),e.push(xe(Et(t))),!0)}var D1=new Map,gE=X(' style="'),z1=X(":"),mE=X(";");function Ky(e,t,n){if(typeof n!="object")throw Error(ye(62));t=!0;for(var r in n)if(Kt.call(n,r)){var l=n[r];if(l!=null&&typeof l!="boolean"&&l!==""){if(r.indexOf("--")===0){var o=xe(Et(r));l=xe(Et((""+l).trim()))}else{o=r;var i=D1.get(o);i!==void 0||(i=X(Et(o.replace(lE,"-$1").toLowerCase().replace(aE,"-ms-"))),D1.set(o,i)),o=i,l=typeof l=="number"?l===0||Kt.call(Ts,r)?xe(""+l):xe(l+"px"):xe(Et((""+l).trim()))}t?(t=!1,e.push(gE,o,z1,l)):e.push(mE,o,z1,l)}}t||e.push(pl)}var _r=X(" "),ea=X('="'),pl=X('"'),B1=X('=""');function an(e,t,n,r){switch(n){case"style":Ky(e,t,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N"){if(t=Rt.hasOwnProperty(n)?Rt[n]:null,t!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(n=xe(t.attributeName),t.type){case 3:r&&e.push(_r,n,B1);break;case 4:r===!0?e.push(_r,n,B1):r!==!1&&e.push(_r,n,ea,xe(Et(r)),pl);break;case 5:isNaN(r)||e.push(_r,n,ea,xe(Et(r)),pl);break;case 6:!isNaN(r)&&1<=r&&e.push(_r,n,ea,xe(Et(r)),pl);break;default:t.sanitizeURL&&(r=""+r),e.push(_r,n,ea,xe(Et(r)),pl)}}else if(Qy(n)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(t=n.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-")return}e.push(_r,xe(n),ea,xe(Et(r)),pl)}}}var $r=X(">"),j1=X("/>");function Es(e,t,n){if(t!=null){if(n!=null)throw Error(ye(60));if(typeof t!="object"||!("__html"in t))throw Error(ye(61));t=t.__html,t!=null&&e.push(xe(""+t))}}function vE(e){var t="";return Yy.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}var Gd=X(' selected=""');function Yd(e,t,n,r){e.push(Wn(n));var l=n=null,o;for(o in t)if(Kt.call(t,o)){var i=t[o];if(i!=null)switch(o){case"children":n=i;break;case"dangerouslySetInnerHTML":l=i;break;default:an(e,r,o,i)}}return e.push($r),Es(e,l,n),typeof n=="string"?(e.push(xe(Et(n))),null):n}var qd=X(`
`),yE=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,U1=new Map;function Wn(e){var t=U1.get(e);if(t===void 0){if(!yE.test(e))throw Error(ye(65,e));t=X("<"+e),U1.set(e,t)}return t}var bE=X("<!DOCTYPE html>");function wE(e,t,n,r,l){switch(t){case"select":e.push(Wn("select"));var o=null,i=null;for(m in n)if(Kt.call(n,m)){var s=n[m];if(s!=null)switch(m){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"defaultValue":case"value":break;default:an(e,r,m,s)}}return e.push($r),Es(e,i,o),o;case"option":i=l.selectedValue,e.push(Wn("option"));var d=s=null,f=null,m=null;for(o in n)if(Kt.call(n,o)){var b=n[o];if(b!=null)switch(o){case"children":s=b;break;case"selected":f=b;break;case"dangerouslySetInnerHTML":m=b;break;case"value":d=b;default:an(e,r,o,b)}}if(i!=null)if(n=d!==null?""+d:vE(s),ih(i)){for(r=0;r<i.length;r++)if(""+i[r]===n){e.push(Gd);break}}else""+i===n&&e.push(Gd);else f&&e.push(Gd);return e.push($r),Es(e,m,s),s;case"textarea":e.push(Wn("textarea")),m=i=o=null;for(s in n)if(Kt.call(n,s)&&(d=n[s],d!=null))switch(s){case"children":m=d;break;case"value":o=d;break;case"defaultValue":i=d;break;case"dangerouslySetInnerHTML":throw Error(ye(91));default:an(e,r,s,d)}if(o===null&&i!==null&&(o=i),e.push($r),m!=null){if(o!=null)throw Error(ye(92));if(ih(m)&&1<m.length)throw Error(ye(93));o=""+m}return typeof o=="string"&&o[0]===`
`&&e.push(qd),o!==null&&e.push(xe(Et(""+o))),null;case"input":e.push(Wn("input")),d=m=s=o=null;for(i in n)if(Kt.call(n,i)&&(f=n[i],f!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(ye(399,"input"));case"defaultChecked":d=f;break;case"defaultValue":s=f;break;case"checked":m=f;break;case"value":o=f;break;default:an(e,r,i,f)}return m!==null?an(e,r,"checked",m):d!==null&&an(e,r,"checked",d),o!==null?an(e,r,"value",o):s!==null&&an(e,r,"value",s),e.push(j1),null;case"menuitem":e.push(Wn("menuitem"));for(var S in n)if(Kt.call(n,S)&&(o=n[S],o!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(ye(400));default:an(e,r,S,o)}return e.push($r),null;case"title":e.push(Wn("title")),o=null;for(b in n)if(Kt.call(n,b)&&(i=n[b],i!=null))switch(b){case"children":o=i;break;case"dangerouslySetInnerHTML":throw Error(ye(434));default:an(e,r,b,i)}return e.push($r),o;case"listing":case"pre":e.push(Wn(t)),i=o=null;for(d in n)if(Kt.call(n,d)&&(s=n[d],s!=null))switch(d){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;default:an(e,r,d,s)}if(e.push($r),i!=null){if(o!=null)throw Error(ye(60));if(typeof i!="object"||!("__html"in i))throw Error(ye(61));n=i.__html,n!=null&&(typeof n=="string"&&0<n.length&&n[0]===`
`?e.push(qd,xe(n)):e.push(xe(""+n)))}return typeof o=="string"&&o[0]===`
`&&e.push(qd),o;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Wn(t));for(var L in n)if(Kt.call(n,L)&&(o=n[L],o!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(ye(399,t));default:an(e,r,L,o)}return e.push(j1),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Yd(e,n,t,r);case"html":return l.insertionMode===0&&e.push(bE),Yd(e,n,t,r);default:if(t.indexOf("-")===-1&&typeof n.is!="string")return Yd(e,n,t,r);e.push(Wn(t)),i=o=null;for(f in n)if(Kt.call(n,f)&&(s=n[f],s!=null))switch(f){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"style":Ky(e,r,s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:Qy(f)&&typeof s!="function"&&typeof s!="symbol"&&e.push(_r,xe(f),ea,xe(Et(s)),pl)}return e.push($r),Es(e,i,o),o}}var xE=X("</"),SE=X(">"),CE=X('<template id="'),kE=X('"></template>'),_E=X("<!--$-->"),$E=X('<!--$?--><template id="'),TE=X('"></template>'),EE=X("<!--$!-->"),NE=X("<!--/$-->"),LE=X("<template"),IE=X('"'),RE=X(' data-dgst="');X(' data-msg="');X(' data-stck="');var PE=X("></template>");function H1(e,t,n){if(re(e,$E),n===null)throw Error(ye(395));return re(e,n),Qe(e,TE)}var FE=X('<div hidden id="'),ME=X('">'),OE=X("</div>"),AE=X('<svg aria-hidden="true" style="display:none" id="'),DE=X('">'),zE=X("</svg>"),BE=X('<math aria-hidden="true" style="display:none" id="'),jE=X('">'),UE=X("</math>"),HE=X('<table hidden id="'),WE=X('">'),VE=X("</table>"),GE=X('<table hidden><tbody id="'),YE=X('">'),qE=X("</tbody></table>"),ZE=X('<table hidden><tr id="'),QE=X('">'),KE=X("</tr></table>"),XE=X('<table hidden><colgroup id="'),JE=X('">'),eN=X("</colgroup></table>");function tN(e,t,n,r){switch(n.insertionMode){case 0:case 1:return re(e,FE),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Qe(e,ME);case 2:return re(e,AE),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Qe(e,DE);case 3:return re(e,BE),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Qe(e,jE);case 4:return re(e,HE),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Qe(e,WE);case 5:return re(e,GE),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Qe(e,YE);case 6:return re(e,ZE),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Qe(e,QE);case 7:return re(e,XE),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Qe(e,JE);default:throw Error(ye(397))}}function nN(e,t){switch(t.insertionMode){case 0:case 1:return Qe(e,OE);case 2:return Qe(e,zE);case 3:return Qe(e,UE);case 4:return Qe(e,VE);case 5:return Qe(e,qE);case 6:return Qe(e,KE);case 7:return Qe(e,eN);default:throw Error(ye(397))}}var rN=X('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),lN=X('$RS("'),aN=X('","'),oN=X('")<\/script>'),iN=X('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),sN=X('$RC("'),cN=X('","'),dN=X('")<\/script>'),uN=X('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),hN=X('$RX("'),fN=X('"'),pN=X(")<\/script>"),Zd=X(","),gN=/[<\u2028\u2029]/g;function Qd(e){return JSON.stringify(e).replace(gN,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var Oo=Object.assign,mN=Symbol.for("react.element"),Xy=Symbol.for("react.portal"),Jy=Symbol.for("react.fragment"),e3=Symbol.for("react.strict_mode"),t3=Symbol.for("react.profiler"),n3=Symbol.for("react.provider"),r3=Symbol.for("react.context"),l3=Symbol.for("react.forward_ref"),a3=Symbol.for("react.suspense"),o3=Symbol.for("react.suspense_list"),i3=Symbol.for("react.memo"),Kf=Symbol.for("react.lazy"),vN=Symbol.for("react.scope"),yN=Symbol.for("react.debug_trace_mode"),bN=Symbol.for("react.legacy_hidden"),wN=Symbol.for("react.default_value"),W1=Symbol.iterator;function sh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jy:return"Fragment";case Xy:return"Portal";case t3:return"Profiler";case e3:return"StrictMode";case a3:return"Suspense";case o3:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case r3:return(e.displayName||"Context")+".Consumer";case n3:return(e._context.displayName||"Context")+".Provider";case l3:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case i3:return t=e.displayName||null,t!==null?t:sh(e.type)||"Memo";case Kf:t=e._payload,e=e._init;try{return sh(e(t))}catch{}}return null}var s3={};function V1(e,t){if(e=e.contextTypes,!e)return s3;var n={},r;for(r in e)n[r]=t[r];return n}var Sl=null;function Ac(e,t){if(e!==t){e.context._currentValue=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(ye(401))}else{if(n===null)throw Error(ye(401));Ac(e,n)}t.context._currentValue=t.value}}function c3(e){e.context._currentValue=e.parentValue,e=e.parent,e!==null&&c3(e)}function d3(e){var t=e.parent;t!==null&&d3(t),e.context._currentValue=e.value}function u3(e,t){if(e.context._currentValue=e.parentValue,e=e.parent,e===null)throw Error(ye(402));e.depth===t.depth?Ac(e,t):u3(e,t)}function h3(e,t){var n=t.parent;if(n===null)throw Error(ye(402));e.depth===n.depth?Ac(e,n):h3(e,n),t.context._currentValue=t.value}function cc(e){var t=Sl;t!==e&&(t===null?d3(e):e===null?c3(t):t.depth===e.depth?Ac(t,e):t.depth>e.depth?u3(t,e):h3(t,e),Sl=e)}var G1={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function Y1(e,t,n,r){var l=e.state!==void 0?e.state:null;e.updater=G1,e.props=n,e.state=l;var o={queue:[],replace:!1};e._reactInternals=o;var i=t.contextType;if(e.context=typeof i=="object"&&i!==null?i._currentValue:r,i=t.getDerivedStateFromProps,typeof i=="function"&&(i=i(n,l),l=i==null?l:Oo({},l,i),e.state=l),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&G1.enqueueReplaceState(e,e.state,null),o.queue!==null&&0<o.queue.length)if(t=o.queue,i=o.replace,o.queue=null,o.replace=!1,i&&t.length===1)e.state=t[0];else{for(o=i?t[0]:e.state,l=!0,i=i?1:0;i<t.length;i++){var s=t[i];s=typeof s=="function"?s.call(e,o,n,r):s,s!=null&&(l?(l=!1,o=Oo({},o,s)):Oo(o,s))}e.state=o}else o.queue=null}var xN={id:1,overflow:""};function ch(e,t,n){var r=e.id;e=e.overflow;var l=32-Ns(r)-1;r&=~(1<<l),n+=1;var o=32-Ns(t)+l;if(30<o){var i=l-l%5;return o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,{id:1<<32-Ns(t)+l|n<<l|r,overflow:o+e}}return{id:1<<o|n<<l|r,overflow:e}}var Ns=Math.clz32?Math.clz32:kN,SN=Math.log,CN=Math.LN2;function kN(e){return e>>>=0,e===0?32:31-(SN(e)/CN|0)|0}function _N(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $N=typeof Object.is=="function"?Object.is:_N,mr=null,Xf=null,Ls=null,He=null,Co=!1,dc=!1,ii=0,Fr=null,Dc=0;function gl(){if(mr===null)throw Error(ye(321));return mr}function q1(){if(0<Dc)throw Error(ye(312));return{memoizedState:null,queue:null,next:null}}function Jf(){return He===null?Ls===null?(Co=!1,Ls=He=q1()):(Co=!0,He=Ls):He.next===null?(Co=!1,He=He.next=q1()):(Co=!0,He=He.next),He}function ep(){Xf=mr=null,dc=!1,Ls=null,Dc=0,He=Fr=null}function f3(e,t){return typeof t=="function"?t(e):t}function Z1(e,t,n){if(mr=gl(),He=Jf(),Co){var r=He.queue;if(t=r.dispatch,Fr!==null&&(n=Fr.get(r),n!==void 0)){Fr.delete(r),r=He.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return He.memoizedState=r,[r,t]}return[He.memoizedState,t]}return e=e===f3?typeof t=="function"?t():t:n!==void 0?n(t):t,He.memoizedState=e,e=He.queue={last:null,dispatch:null},e=e.dispatch=TN.bind(null,mr,e),[He.memoizedState,e]}function Q1(e,t){if(mr=gl(),He=Jf(),t=t===void 0?null:t,He!==null){var n=He.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var l=0;l<r.length&&l<t.length;l++)if(!$N(t[l],r[l])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),He.memoizedState=[e,t],e}function TN(e,t,n){if(25<=Dc)throw Error(ye(301));if(e===mr)if(dc=!0,e={action:n,next:null},Fr===null&&(Fr=new Map),n=Fr.get(t),n===void 0)Fr.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function EN(){throw Error(ye(394))}function as(){}var K1={readContext:function(e){return e._currentValue},useContext:function(e){return gl(),e._currentValue},useMemo:Q1,useReducer:Z1,useRef:function(e){mr=gl(),He=Jf();var t=He.memoizedState;return t===null?(e={current:e},He.memoizedState=e):t},useState:function(e){return Z1(f3,e)},useInsertionEffect:as,useLayoutEffect:function(){},useCallback:function(e,t){return Q1(function(){return e},t)},useImperativeHandle:as,useEffect:as,useDebugValue:as,useDeferredValue:function(e){return gl(),e},useTransition:function(){return gl(),[!1,EN]},useId:function(){var e=Xf.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-Ns(e)-1)).toString(32)+t;var n=Is;if(n===null)throw Error(ye(404));return t=ii++,e=":"+n.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return gl(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(ye(407));return n()}},Is=null,Kd=Yy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function NN(e){return console.error(e),null}function ko(){}function LN(e,t,n,r,l,o,i,s,d){var f=[],m=new Set;return t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:m,pingedTasks:f,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:l===void 0?NN:l,onAllReady:o===void 0?ko:o,onShellReady:i===void 0?ko:i,onShellError:s===void 0?ko:s,onFatalError:d===void 0?ko:d},n=uc(t,0,null,n,!1,!1),n.parentFlushed=!0,e=tp(t,e,null,n,m,s3,null,xN),f.push(e),t}function tp(e,t,n,r,l,o,i,s){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var d={node:t,ping:function(){var f=e.pingedTasks;f.push(d),f.length===1&&m3(e)},blockedBoundary:n,blockedSegment:r,abortSet:l,legacyContext:o,context:i,treeContext:s};return l.add(d),d}function uc(e,t,n,r,l,o){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:l,textEmbedded:o}}function si(e,t){if(e=e.onError(t),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function hc(e,t){var n=e.onShellError;n(t),n=e.onFatalError,n(t),e.destination!==null?(e.status=2,Zy(e.destination,t)):(e.status=1,e.fatalError=t)}function X1(e,t,n,r,l){for(mr={},Xf=t,ii=0,e=n(r,l);dc;)dc=!1,ii=0,Dc+=1,He=null,e=n(r,l);return ep(),e}function J1(e,t,n,r){var l=n.render(),o=r.childContextTypes;if(o!=null){var i=t.legacyContext;if(typeof n.getChildContext!="function")r=i;else{n=n.getChildContext();for(var s in n)if(!(s in o))throw Error(ye(108,sh(r)||"Unknown",s));r=Oo({},i,n)}t.legacyContext=r,un(e,t,l),t.legacyContext=i}else un(e,t,l)}function em(e,t){if(e&&e.defaultProps){t=Oo({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function dh(e,t,n,r,l){if(typeof n=="function")if(n.prototype&&n.prototype.isReactComponent){l=V1(n,t.legacyContext);var o=n.contextType;o=new n(r,typeof o=="object"&&o!==null?o._currentValue:l),Y1(o,n,r,l),J1(e,t,o,n)}else{o=V1(n,t.legacyContext),l=X1(e,t,n,r,o);var i=ii!==0;if(typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0)Y1(l,n,r,o),J1(e,t,l,n);else if(i){r=t.treeContext,t.treeContext=ch(r,1,0);try{un(e,t,l)}finally{t.treeContext=r}}else un(e,t,l)}else if(typeof n=="string"){switch(l=t.blockedSegment,o=wE(l.chunks,n,r,e.responseState,l.formatContext),l.lastPushedText=!1,i=l.formatContext,l.formatContext=pE(i,n,r),uh(e,t,o),l.formatContext=i,n){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:l.chunks.push(xE,xe(n),SE)}l.lastPushedText=!1}else{switch(n){case bN:case yN:case e3:case t3:case Jy:un(e,t,r.children);return;case o3:un(e,t,r.children);return;case vN:throw Error(ye(343));case a3:e:{n=t.blockedBoundary,l=t.blockedSegment,o=r.fallback,r=r.children,i=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:i,errorDigest:null},d=uc(e,l.chunks.length,s,l.formatContext,!1,!1);l.children.push(d),l.lastPushedText=!1;var f=uc(e,0,null,l.formatContext,!1,!1);f.parentFlushed=!0,t.blockedBoundary=s,t.blockedSegment=f;try{if(uh(e,t,r),f.lastPushedText&&f.textEmbedded&&f.chunks.push(Qf),f.status=1,fc(s,f),s.pendingTasks===0)break e}catch(m){f.status=4,s.forceClientRender=!0,s.errorDigest=si(e,m)}finally{t.blockedBoundary=n,t.blockedSegment=l}t=tp(e,o,n,d,i,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n=="object"&&n!==null)switch(n.$$typeof){case l3:if(r=X1(e,t,n.render,r,l),ii!==0){n=t.treeContext,t.treeContext=ch(n,1,0);try{un(e,t,r)}finally{t.treeContext=n}}else un(e,t,r);return;case i3:n=n.type,r=em(n,r),dh(e,t,n,r,l);return;case n3:if(l=r.children,n=n._context,r=r.value,o=n._currentValue,n._currentValue=r,i=Sl,Sl=r={parent:i,depth:i===null?0:i.depth+1,context:n,parentValue:o,value:r},t.context=r,un(e,t,l),e=Sl,e===null)throw Error(ye(403));r=e.parentValue,e.context._currentValue=r===wN?e.context._defaultValue:r,e=Sl=e.parent,t.context=e;return;case r3:r=r.children,r=r(n._currentValue),un(e,t,r);return;case Kf:l=n._init,n=l(n._payload),r=em(n,r),dh(e,t,n,r,void 0);return}throw Error(ye(130,n==null?n:typeof n,""))}}function un(e,t,n){if(t.node=n,typeof n=="object"&&n!==null){switch(n.$$typeof){case mN:dh(e,t,n.type,n.props,n.ref);return;case Xy:throw Error(ye(257));case Kf:var r=n._init;n=r(n._payload),un(e,t,n);return}if(ih(n)){tm(e,t,n);return}if(n===null||typeof n!="object"?r=null:(r=W1&&n[W1]||n["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(n))){if(n=r.next(),!n.done){var l=[];do l.push(n.value),n=r.next();while(!n.done);tm(e,t,l)}return}throw e=Object.prototype.toString.call(n),Error(ye(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}typeof n=="string"?(r=t.blockedSegment,r.lastPushedText=A1(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText)):typeof n=="number"&&(r=t.blockedSegment,r.lastPushedText=A1(t.blockedSegment.chunks,""+n,e.responseState,r.lastPushedText))}function tm(e,t,n){for(var r=n.length,l=0;l<r;l++){var o=t.treeContext;t.treeContext=ch(o,r,l);try{uh(e,t,n[l])}finally{t.treeContext=o}}}function uh(e,t,n){var r=t.blockedSegment.formatContext,l=t.legacyContext,o=t.context;try{return un(e,t,n)}catch(d){if(ep(),typeof d=="object"&&d!==null&&typeof d.then=="function"){n=d;var i=t.blockedSegment,s=uc(e,i.chunks.length,null,i.formatContext,i.lastPushedText,!0);i.children.push(s),i.lastPushedText=!1,e=tp(e,t.node,t.blockedBoundary,s,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=l,t.context=o,cc(o)}else throw t.blockedSegment.formatContext=r,t.legacyContext=l,t.context=o,cc(o),d}}function IN(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,g3(this,t,e)}function p3(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.close())):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(ye(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(l){return p3(l,t,n)}),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady,r()))}function fc(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&fc(e,n)}else e.completedSegments.push(t)}function g3(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(ye(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=ko,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&fc(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(IN,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(fc(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function m3(e){if(e.status!==2){var t=Sl,n=Kd.current;Kd.current=K1;var r=Is;Is=e.responseState;try{var l=e.pingedTasks,o;for(o=0;o<l.length;o++){var i=l[o],s=e,d=i.blockedSegment;if(d.status===0){cc(i.context);try{un(s,i,i.node),d.lastPushedText&&d.textEmbedded&&d.chunks.push(Qf),i.abortSet.delete(i),d.status=1,g3(s,i.blockedBoundary,d)}catch(N){if(ep(),typeof N=="object"&&N!==null&&typeof N.then=="function"){var f=i.ping;N.then(f,f)}else{i.abortSet.delete(i),d.status=4;var m=i.blockedBoundary,b=N,S=si(s,b);if(m===null?hc(s,b):(m.pendingTasks--,m.forceClientRender||(m.forceClientRender=!0,m.errorDigest=S,m.parentFlushed&&s.clientRenderedBoundaries.push(m))),s.allPendingTasks--,s.allPendingTasks===0){var L=s.onAllReady;L()}}}finally{}}}l.splice(0,o),e.destination!==null&&np(e,e.destination)}catch(N){si(e,N),hc(e,N)}finally{Is=r,Kd.current=n,n===K1&&cc(t)}}}function os(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,re(t,CE),re(t,e.placeholderPrefix),e=xe(r.toString(16)),re(t,e),Qe(t,kE);case 1:n.status=2;var l=!0;r=n.chunks;var o=0;n=n.children;for(var i=0;i<n.length;i++){for(l=n[i];o<l.index;o++)re(t,r[o]);l=zc(e,t,l)}for(;o<r.length-1;o++)re(t,r[o]);return o<r.length&&(l=Qe(t,r[o])),l;default:throw Error(ye(390))}}function zc(e,t,n){var r=n.boundary;if(r===null)return os(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)r=r.errorDigest,Qe(t,EE),re(t,LE),r&&(re(t,RE),re(t,xe(Et(r))),re(t,IE)),Qe(t,PE),os(e,t,n);else if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var l=e.responseState,o=l.nextSuspenseID++;l=X(l.boundaryPrefix+o.toString(16)),r=r.id=l,H1(t,e.responseState,r),os(e,t,n)}else if(r.byteSize>e.progressiveChunkSize)r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),H1(t,e.responseState,r.id),os(e,t,n);else{if(Qe(t,_E),n=r.completedSegments,n.length!==1)throw Error(ye(391));zc(e,t,n[0])}return Qe(t,NE)}function nm(e,t,n){return tN(t,e.responseState,n.formatContext,n.id),zc(e,t,n),nN(t,n.formatContext)}function rm(e,t,n){for(var r=n.completedSegments,l=0;l<r.length;l++)v3(e,t,n,r[l]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,re(t,e.startInlineScript),e.sentCompleteBoundaryFunction?re(t,sN):(e.sentCompleteBoundaryFunction=!0,re(t,iN)),r===null)throw Error(ye(395));return n=xe(n.toString(16)),re(t,r),re(t,cN),re(t,e.segmentPrefix),re(t,n),Qe(t,dN)}function v3(e,t,n,r){if(r.status===2)return!0;var l=r.id;if(l===-1){if((r.id=n.rootSegmentID)===-1)throw Error(ye(392));return nm(e,t,r)}return nm(e,t,r),e=e.responseState,re(t,e.startInlineScript),e.sentCompleteSegmentFunction?re(t,lN):(e.sentCompleteSegmentFunction=!0,re(t,rN)),re(t,e.segmentPrefix),l=xe(l.toString(16)),re(t,l),re(t,aN),re(t,e.placeholderPrefix),re(t,l),Qe(t,oN)}function np(e,t){cn=new Uint8Array(512),dn=0;try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){zc(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)re(t,r[n]);n<r.length&&Qe(t,r[n])}var l=e.clientRenderedBoundaries,o;for(o=0;o<l.length;o++){var i=l[o];r=t;var s=e.responseState,d=i.id,f=i.errorDigest,m=i.errorMessage,b=i.errorComponentStack;if(re(r,s.startInlineScript),s.sentClientRenderFunction?re(r,hN):(s.sentClientRenderFunction=!0,re(r,uN)),d===null)throw Error(ye(395));re(r,d),re(r,fN),(f||m||b)&&(re(r,Zd),re(r,xe(Qd(f||"")))),(m||b)&&(re(r,Zd),re(r,xe(Qd(m||"")))),b&&(re(r,Zd),re(r,xe(Qd(b)))),Qe(r,pN)}l.splice(0,o);var S=e.completedBoundaries;for(o=0;o<S.length;o++)rm(e,t,S[o]);S.splice(0,o),P1(t),cn=new Uint8Array(512),dn=0;var L=e.partialBoundaries;for(o=0;o<L.length;o++){var N=L[o];e:{l=e,i=t;var C=N.completedSegments;for(s=0;s<C.length;s++)if(!v3(l,i,N,C[s])){s++,C.splice(0,s);var I=!1;break e}C.splice(0,s),I=!0}if(!I){e.destination=null,o++,L.splice(0,o);return}}L.splice(0,o);var w=e.completedBoundaries;for(o=0;o<w.length;o++)rm(e,t,w[o]);w.splice(0,o)}finally{P1(t),e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.close()}}function lm(e,t){try{var n=e.abortableTasks;n.forEach(function(r){return p3(r,e,t)}),n.clear(),e.destination!==null&&np(e,e.destination)}catch(r){si(e,r),hc(e,r)}}Yf.renderToReadableStream=function(e,t){return new Promise(function(n,r){var l,o,i=new Promise(function(m,b){o=m,l=b}),s=LN(e,hE(t?t.identifierPrefix:void 0,t?t.nonce:void 0,t?t.bootstrapScriptContent:void 0,t?t.bootstrapScripts:void 0,t?t.bootstrapModules:void 0),fE(t?t.namespaceURI:void 0),t?t.progressiveChunkSize:void 0,t?t.onError:void 0,o,function(){var m=new ReadableStream({type:"bytes",pull:function(b){if(s.status===1)s.status=2,Zy(b,s.fatalError);else if(s.status!==2&&s.destination===null){s.destination=b;try{np(s,b)}catch(S){si(s,S),hc(s,S)}}},cancel:function(){lm(s)}},{highWaterMark:0});m.allReady=i,n(m)},function(m){i.catch(function(){}),r(m)},l);if(t&&t.signal){var d=t.signal,f=function(){lm(s,d.reason),d.removeEventListener("abort",f)};d.addEventListener("abort",f)}m3(s)})};Yf.version="18.2.0";var Ba,y3;Ba=za,y3=Yf;Ba.version;var RN=Ba.renderToString;Ba.renderToStaticMarkup;Ba.renderToNodeStream;Ba.renderToStaticNodeStream;y3.renderToReadableStream;var b3={exports:{}},PN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",FN=PN,MN=FN;function w3(){}function x3(){}x3.resetWarningCache=w3;var ON=function(){function e(r,l,o,i,s,d){if(d!==MN){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:x3,resetWarningCache:w3};return n.PropTypes=n,n};b3.exports=ON();var AN=b3.exports;const On=Gr(AN);var DN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function S3(e,t){return e(t={exports:{}},t.exports),t.exports}var zN=S3(function(e){(function(t){var n=function(I,w,g){if(!d(w)||m(w)||b(w)||S(w)||s(w))return w;var y,v=0,T=0;if(f(w))for(y=[],T=w.length;v<T;v++)y.push(n(I,w[v],g));else for(var _ in y={},w)Object.prototype.hasOwnProperty.call(w,_)&&(y[I(_,g)]=n(I,w[_],g));return y},r=function(I){return L(I)?I:(I=I.replace(/[\-_\s]+(.)?/g,function(w,g){return g?g.toUpperCase():""})).substr(0,1).toLowerCase()+I.substr(1)},l=function(I){var w=r(I);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(I,w){return function(g,y){var v=(y=y||{}).separator||"_",T=y.split||/(?=[A-Z])/;return g.split(T).join(v)}(I,w).toLowerCase()},i=Object.prototype.toString,s=function(I){return typeof I=="function"},d=function(I){return I===Object(I)},f=function(I){return i.call(I)=="[object Array]"},m=function(I){return i.call(I)=="[object Date]"},b=function(I){return i.call(I)=="[object RegExp]"},S=function(I){return i.call(I)=="[object Boolean]"},L=function(I){return(I-=0)==I},N=function(I,w){var g=w&&"process"in w?w.process:w;return typeof g!="function"?I:function(y,v){return g(y,I,v)}},C={camelize:r,decamelize:o,pascalize:l,depascalize:o,camelizeKeys:function(I,w){return n(N(r,w),I)},decamelizeKeys:function(I,w){return n(N(o,w),I,w)},pascalizeKeys:function(I,w){return n(N(l,w),I)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=C:t.humps=C})(DN)}).decamelize,BN=function(e){if(Array.isArray(e))return e},jN=function(e,t){if(typeof Symbol<"u"&&Symbol.iterator in Object(e)){var n=[],r=!0,l=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(d){l=!0,o=d}finally{try{r||s.return==null||s.return()}finally{if(l)throw o}}return n}},am=function(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},UN=function(e,t){if(e){if(typeof e=="string")return am(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?am(e,t):void 0}},HN=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},WN=function(e,t){return BN(e)||jN(e,t)||UN(e,t)||HN()},C3=S3(function(e){function t(){return e.exports=t=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(n[o]=l[o])}return n},t.apply(this,arguments)}e.exports=t}),VN=function(e,t){if(e==null)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l},k3=function(e,t){if(e==null)return{};var n,r,l=VN(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l},GN=U.createContext(null);function hh(e){var t=e.children,n=k3(e,["children"]);return typeof t!="string"&&(t=RN(t)),Tt.createElement("template",C3({},n,{dangerouslySetInnerHTML:{__html:t}}))}function fh(e){var t=e.root,n=e.children;return C2.createPortal(n,t)}function YN(e){var t=U.forwardRef(function(n,r){var l,o,i=n.mode,s=n.delegatesFocus,d=n.styleSheets,f=n.ssr,m=n.children,b=k3(n,["mode","delegatesFocus","styleSheets","ssr","children"]),S=(o=U.useRef((l=r)&&l.current),U.useEffect(function(){l&&(l.current=o.current)},[l]),o),L=U.useState(null),N=WN(L,2),C=N[0],I=N[1],w="node_".concat(i).concat(s);return U.useLayoutEffect(function(){if(S.current)try{if(typeof r=="function"&&r(S.current),f){var g=S.current.shadowRoot;return void I(g)}var y=S.current.attachShadow({mode:i,delegatesFocus:s});d.length>0&&(y.adoptedStyleSheets=d),I(y)}catch(v){(function(T){var _=T.error,F=T.styleSheets,O=T.root;switch(_.name){case"NotSupportedError":F.length>0&&(O.adoptedStyleSheets=F);break;default:throw _}})({error:v,styleSheets:d,root:C})}},[r,S,d]),Tt.createElement(Tt.Fragment,null,Tt.createElement(e.tag,C3({key:w,ref:S},b),(C||f)&&Tt.createElement(GN.Provider,{value:C},f?Tt.createElement(hh,{shadowroot:"open"},e.render({root:C,ssr:f,children:m})):Tt.createElement(fh,{root:C},e.render({root:C,ssr:f,children:m})))))});return t.propTypes={mode:On.oneOf(["open","closed"]),delegatesFocus:On.bool,styleSheets:On.arrayOf(On.instanceOf(globalThis.CSSStyleSheet)),ssr:On.bool,children:On.node},t.defaultProps={mode:"open",delegatesFocus:!1,styleSheets:[],ssr:!1,children:null},t}hh.propTypes={children:On.oneOfType([On.string,On.node])},hh.defaultProps={children:""},fh.propTypes={root:On.object.isRequired,children:On.node},fh.defaultProps={children:null};var Xd=new Map;function qN(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"core",n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(r){return r.children};return new Proxy(e,{get:function(r,l){var o=zN(l,{separator:"-"}),i="".concat(t,"-").concat(o);return Xd.has(i)||Xd.set(i,YN({tag:o,render:n})),Xd.get(i)}})}var ZN=qN();const QN=()=>h("div",{className:"prose",children:[a("h1",{children:"Forms"}),h("blockquote",{className:"intro",children:["There is something about styling forms, that's so not fun. It's like ",a("em",{children:'"How much less fun could this be?"'})," ","and the answer is ",a("em",{children:'"None, none... less fun."'}),a("div",{className:"attrib",children:"Nigel Tufnel's website designer"})]}),a("h2",{children:"None Less Fun"}),a("p",{children:"Anyone reading this who is old enough to have served in the browser wars will no doubt be rolling their eyes at this point, thinking that kids these days don't know how lucky they are."}),h("p",{children:["It's certainly true that things are ",a("i",{children:"much"})," better than they used.  But despite all the advances in CSS support and cross-browser compatibility, the default styling for HTML forms still looks like 1995 called and asked for its website back."]}),a("p",{children:"Badger CSS includes form styling presets, supporting both light and dark themes out of the box. It uses native form components for accessibility and mobile friendliness.  Everything is configurable if you want to change things, but you don't have to."}),a("p",{children:"Here's the same form rendered twice.  Once with the default HTML styling and again with the default Badger CSS styles.  In case you're wondering, there's no Javascript in any of these forms.  It's all just vanilla HTML and CSS."}),h("div",{className:"grid-2 gap-8 mar-t-10 stack-desktop",children:[h("div",{className:"output",children:[a("h3",{className:"mar-b-4",children:"Default Form Styles"}),a(ZN.div,{children:a("div",{dangerouslySetInnerHTML:{__html:h1}})})]}),h("div",{className:"output",children:[a("h3",{className:"mar-b-4",children:"Badger CSS Form Styles"}),a("div",{dangerouslySetInnerHTML:{__html:h1}})]})]}),a("h2",{children:"Go Large?"}),h("p",{children:["All form components are sized using ems and will adapt to whatever the current text size is.  If you want a small form, for example, then you just need to add a ",a("code",{children:"small"})," class to the form or one of its parent containers."]}),a("div",{className:"grid-2 gap-4 stack-widescreen",children:["smallest","smaller","small","large","larger","largest"].map(e=>h("div",{className:`${e} pad-6 border output shadow-2`,children:[a("h3",{className:"font-mono mar-b-3",children:e}),a("div",{dangerouslySetInnerHTML:{__html:xT}})]},e))}),a("h2",{children:"Accessibility and Focus"}),a("p",{children:"If you've played with any of the forms above you may have noticed the prominent ring around inputs when focussed.  This is important for accessibility to clearly indicate which field is selected."}),h("p",{children:["If for some reason you really, really need to disabled it because you're indicating the focus some other way then you can add the"," ",a("code",{children:"no-focus"})," class to the inputs."]}),a(D,{html:CT,language:"html"}),a("h2",{children:"Themes and Surfaces"}),a("p",{children:"Styling forms is made that much harder these days by the need to support both light and dark themes.  On top of that we might want to have forms included on different surfaces with varying levels of background intensity. Thanks to the magic of CSS custom properties we can tweak the colors used to render forms depending on the background color of the container."}),a("p",{children:"In these examples below it may not be immediately obvious that the colors are slightly different but they are.  They're different so that they look more-or-less the same, while providing adequate contrast."}),a("div",{className:"grid-3 gap-4 stack-widescreen mar-b-8",children:["surface","surface-1","surface-2","surface-3","surface-4","surface-5"].map(e=>h("div",{className:`${e} pad-6 border shadow-2`,children:[a("h3",{className:"font-mono mar-b-3",children:e}),a("div",{dangerouslySetInnerHTML:{__html:ST}})]},e))})]}),KN=Object.freeze(Object.defineProperty({__proto__:null,default:QN},Symbol.toStringTag,{value:"Module"})),XN=`<label>
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
`,JN=`<label class="wide radio">
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
`,eL=`<label class="border radio mar-r-2">
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
`,tL=`<div>
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
</div>`,nL=()=>h("div",{children:[a("h1",{children:"Radio Buttons"}),a("h2",{children:"Radio Class"}),h("p",{children:["Radio buttons are implemented much like"," ",a(Le,{to:"/forms/checkboxes",text:"checkboxes"}),".  Create a"," ",a("code",{children:"label"})," enclosing an ",a("code",{children:"input"})," with the"," ",a("code",{children:'type="radio"'})," attribute."]}),h("p",{children:["The same warning about Firefox applies.  The current version (v115) doesn't support the ",a("code",{children:":has()"})," CSS selector that this depends on so you have to manually add the ",a("code",{children:"radio"})," class to the ",a("code",{children:"label"})," as a work-around."]}),a(D,{html:XN,language:"html",caption:"Radio Buttons"}),a("h2",{children:"Wide Radio Buttons"}),h("p",{children:["Add the ",a("code",{children:"wide"})," class for full-width radio buttons."]}),a(D,{html:JN,language:"html",caption:"Wide Radio Buttons"}),a("h2",{children:"Radio Button Borders"}),h("p",{children:["Add the ",a("code",{children:"border"})," class for borders."]}),a(D,{html:eL,language:"html",caption:"Border Radio Buttons"}),a("h2",{children:"Custom Radio Buttons"}),a(D,{html:tL,language:"html",caption:"Custom Checkboxes"})]}),rL=Object.freeze(Object.defineProperty({__proto__:null,default:nL},Symbol.toStringTag,{value:"Module"})),lL=`<select name="animal">
  <option value="">-- Choose an animal --</option>
  <option value="ant">Ant</option>
  <option value="badger">Badger</option>
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
  <option value="elephant">Elephant</option>
  <option value="ferret">Ferret</option>
  <option value="goldfish">Goldfish</option>
</select>
`,aL=`<select name="animal" required>
  <option value="" hidden disabled selected>Choose an animal</option>
  <option value="ant">Ant</option>
  <option value="badger">Badger</option>
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
  <option value="elephant">Elephant</option>
  <option value="ferret">Ferret</option>
  <option value="goldfish">Goldfish</option>
</select>
`,oL=`<div class="small flex start gap-4 mar-b-4">
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
`,iL=`<div>
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

`,sL=()=>h("div",{className:"prose",children:[a("h1",{children:"Select Input"}),a("p",{children:"Select inputs are the bane of web developers and designers everywhere. There are notoriously difficult to style.  They don't want to align with other elements.  Their size is often wrong.  And just when you think you've finally cracked it, you look at it on another browser and see that it's all on the wonk."}),a("p",{children:"I have wasted far too many hours of my life starting at forms like this one trying to get everything the same size and aligned properly."}),a(D,{html:oL,language:"html",caption:"Select Alignment"}),h("p",{children:["The least bad solution is to set ",a("code",{children:"appearance: none"})," to remove the browser-specific rendering quirks.  The problem then is that you also lose drop down arrow indicating that it's a select input.  So we have to put that back in using an SVG background image. But you don't need to worry about that - I did so you don't have to."]}),a(D,{html:lL,language:"html",caption:"Select Input"}),a("h2",{children:"Custom Icon"}),h("p",{children:["You can define your own drop down arrow icon using the"," ",a("code",{children:"--arrow-down"})," property.  It's a little bit tricky because you have to URI encode the SVG and define it as shown in this example.  If you've got an SVG icon with a simple path and your icon is 16px square then you can copy the definition from this example and insert your path data into the ",a("code",{children:"path d='...'"})," part."]}),h("p",{children:["Note that you can't use ",a("code",{children:"currentColor"})," to set the stroke or fill color.  You can define separate ",a("code",{children:"--arrow-down"})," ","properties for you light and dark themes, or you can use a neutral color like ",a("code",{children:"#888"})," which works well in both cases."]}),a(D,{html:iL,language:"html",caption:"Custom Icon"}),a("h2",{children:"Placeholder"}),h("p",{children:["Another annoying thing about select inputs is that they don't support the ",a("code",{children:"placeholder"})," attribute.  You can work around the problem by adding the ",a("code",{children:"required"})," attribute to the"," ",a("code",{children:"select"})," input and the ",a("code",{children:"hidden"}),","," ",a("code",{children:"disabled"})," and ",a("code",{children:"selected"})," attributes to the first option which contains your placeholder text."]}),a(D,{html:aL,language:"html",caption:"Select Placeholder"})]}),cL=Object.freeze(Object.defineProperty({__proto__:null,default:sL},Symbol.toStringTag,{value:"Module"})),dL=`<input
  type="text" name="my-input"
  placeholder="Placeholder text"
/>
`,uL=`<input
  type="text" name="my-input"
  placeholder="Placeholder text"
  class="wide"
/>
`,hL=`<div class="grid-2 gap-4">
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
`,fL=()=>h("div",{children:[a("h1",{children:"Text Input"}),a("p",{children:"Text inputs are perhaps the most common kind of input."}),a(D,{html:dL,language:"html",caption:"Text Input"}),h("p",{children:["Add the ",a("code",{children:"wide"})," class to make it stretch to fill the container."]}),a(D,{html:uL,language:"html",caption:"Wide Text Input"}),h("p",{children:["You can use the ",a(Le,{to:"/utilities/grid",text:"grid"})," utility classes to group inputs together on the same line."]}),a(D,{html:hL,language:"html",caption:"Text Grid"})]}),pL=Object.freeze(Object.defineProperty({__proto__:null,default:fL},Symbol.toStringTag,{value:"Module"})),gL=`<textarea
  rows="5"
  placeholder="I like badgers because..."
/></textarea>
`,mL=`<textarea
  rows="5" class="wide"
  placeholder="I like badgers because..."
/></textarea>
`,vL=()=>h("div",{children:[a("h1",{children:"Text Area Input"}),h("p",{children:["Text area inputs are much like ",a(Le,{to:"/form/text",text:"text inputs"}),"."]}),h("p",{children:["One thing to note (that always catches me out) - if you want placeholder text to appear then you have to make sure there is ",a("em",{children:"nothing"})," ","(not even a newline) between the opening and closing ",a("code",{children:"textarea"})," tags."]}),a(D,{html:gL,language:"html",caption:"Text Area Input",expand:!0}),h("p",{children:["Add the ",a("code",{children:"wide"})," class to make it stretch to fill the container."]}),a(D,{html:mL,language:"html",caption:"Wide Text Area Input",expand:!0})]}),yL=Object.freeze(Object.defineProperty({__proto__:null,default:vL},Symbol.toStringTag,{value:"Module"})),bL=()=>h("div",{className:"prose",children:[a("h1",{children:"What's Wrong With It?"}),a("p",{className:"intro",children:"There are many, many CSS toolkits and UI frameworks already out there to choose from. If you're looking for something that's stable, reliable, comprehensive and well-supported then this probably isn't for you."}),a("h2",{children:"Work in Progress"}),a("p",{children:"This is a work in progress.  It started out life as an ad-hoc collection of CSS classes that I copy and pasted between projects.  Then it became part of Bader UI, a collection of React components implementing some basic UI widgets.  Now it's being moved out into its own module which concentrates on just the CSS without any dependency on React."}),a("p",{children:"One of the reasons that I'm moving it into a new module is because it gives me the opportunity to break backwards compatibility.  There are some things that, given the chance to do again, I would do differently. This gives me that chance and hopefully I won't make too many bad decisions that I later come to regret.  But until I've had a chance to eat my own dog food and build a few sites with it, I can't predict what's going to work well and what isn't."}),a("p",{children:"I'm also migrating everything to use modern CSS techniques which are now well supported by browsers.  That means that a lot of things that were previously hard become much easier.  But different."}),a("p",{children:"As a result, this module is still in a state of flux.  If you build anything with it now then there's a good chance that something will break in the near future."}),a("h2",{children:"Opinionated and Selfish Software"}),h("p",{children:["This is based on my personal collection of CSS styles and utility classes that I use on a daily basis in my job building web sites for clients. It's Open Source and you're welcome to use it but be aware that it's something that I built for ",a("em",{children:"me"})," to help"," ",a("em",{children:"me"})," get my job done."]}),a("p",{children:"I didn't build it for you (unless you're one of my clients) and I don't really have the time or inclination to promote it, increase the user base or provide unpaid support for it.  It's not my intention for this to be the next great CSS toolkit - there are plenty of those already. My goal isn't to change the World, only to make it a slightly better place."}),a("p",{children:"So be warned that it does things the way I like to do them.  You may not agree with all my decisions, but that's fine.  They're my decisions to make, not yours.  It's free software (in both senses: free speech and free beer) and if you don't like it then you're entitled to a full refund of the price you paid."}),a("p",{children:"On the plus-side, the Badger-UI toolkit contains a lot of tried and tested techniques for managing web site styles that have been honed over nearly 30 years of experience.  It contains the features that I can't live without when I'm building a web site.  Of course, you may have different ideas about the best way to do it, but this is what works for me.  It's supposed to be a reasonable starting point not the final destination."}),a("h2",{children:"Some Assembly Required"}),a("p",{children:"If you have a good working knowledge of modern CSS and SASS then you should be able to easily adapt it to your needs.  Nearly everything is customisable, either through SASS variables, CSS custom properties, or by using the provided scripts to build your own toolkit."}),h("p",{children:["You don't need to buy in to the whole package.  As well as being customisable it's also modular.  With a small amount of effort you can configure it to include the bits your want and ignore the rest. Or you can browse the source code and borrow the ",a("i",{children:"ideas"})," that you think are useful."]}),a("p",{children:"Just remember that this is aimed more at people who already know how to build web sites and are familiar with CSS. If you're looking for a fully-featured, widely used and well supported UI toolkit that does everything for you then there are plenty of others to choose from."}),a("p",{children:"If you don't like the sound of that then these probably aren't the badgers you're looking for.  You can go about your business. Move along."})]}),wL=Object.freeze(Object.defineProperty({__proto__:null,default:bL},Symbol.toStringTag,{value:"Module"})),xL=()=>h("div",{className:"prose",children:[a("h1",{children:"What's Good About It?"}),a("p",{className:"intro",children:"If you're wondering what makes Badger CSS better than all the other CSS frameworks and UI toolkits out there then the short and simple answer is that it isn't.  It's just another one to add to the pile."}),a("h2",{children:"A Solid Foundation"}),a("p",{children:"Badger CSS is a collection of tools and techniques that I've built up over many years (nearly 30) of building web sites.  It's what works for me and maybe it will work for you too.  But I'm not making any promises."}),a("p",{children:"It's supposed to be a starting point, not a destination.  If you're building a web site and you want a reasonable foundation to build your styles on then it might be better for you than a more fully-featured toolkit that has everything including the kitchen sink."}),a("h2",{children:"Small(ish) and Simple"}),a("p",{children:"The default Badger CSS stylesheet is around 15kb minimised and compressed (around 100kb uncompressed).  That includes all 16 color ranges which you probably aren't ever going to need in practice. If you define your own palette with a limited set of colors then you can reduce the size a fair bit."}),a("h2",{children:"Modern CSS"}),a("p",{children:"It is based on modern CSS techniques and works in all modern browsers. In particular it makes heavy use of CSS custom properties that you can easily change as required. Behind the scenes it is built using SASS (specifically SCSS) which gives you more opportunities for configuring and extending it."}),a("h2",{children:"Color Management"}),h("p",{children:["Badger CSS uses a novel approach to defining and selecting"," ",a(Le,{to:"/colors/ranges",text:"color ranges"}),".  The color palette was created using ",a("a",{href:"https://abw.github.io/badger-color",children:"Badger Color"})," (which itself was created for this specific task) and you can use it to create your own custom palettes if necessary. The palette data that it generates can be automatically expanded out to SASS component files, ready to be used in Badger CSS."]}),h("p",{children:["You can easily change the hues of the standard palette to match your ",a(Le,{to:"/colors/brand",text:"brand colors"}),".  It will automatically create greyscale color ranges based on your primary brand color."]}),h("p",{children:["The use of ",a(Le,{to:"/colors/variables",text:"CSS custom properties"})," ","to define color ranges, and CSS class scopes to select them, makes it easy to create UI components that work automatically with any color range. It also makes it easy to define different color schemes for light and dark themes."]}),a("h2",{children:"Utility Classes"}),h("p",{children:["Badger CSS comes with a core set of"," ",a(Le,{to:"/utilities",text:"utility classes"})," for ad-hoc styling. They are intentionally limited to the kind of things that I find myself using all the time.  If you prefer the approach of"," ",a("a",{href:"https://tailwindcss.com/",children:"Tailwind"})," that provides CSS classes for absolutely everything then you know where to find it."]}),h("p",{children:["I'm not knocking Tailwind, by the way.  CSS utility classes are an ",a("em",{children:"extremely"}),` useful set of tools to have in your toolkit. I just think they should be limited in their scope and not a replacement for writing "proper" CSS when it's more appropriate to do so.`]}),a("h2",{children:"Form Styling"}),h("p",{children:["Styling ",a(Le,{to:"/forms",text:"forms"})," is not much fun. I have wasted many hours, days, even weeks of my life trying to get form styling just right and I never want to have to do it again."]}),h("p",{children:["If you've got better things to do than trying to figure out why your ",a("code",{children:"select"})," component is 1 pixel shorter than your text ",a("code",{children:"input"})," component then take a look at what Badger CSS has to offer.  It provides basic styles for all the standard form components and has smoothed over a lot of the problems so you don't have to worry too much about them.  Spend the time you save playing with your kids or flying a kite."]}),a("h2",{children:"UI Components"}),h("p",{children:["Badger CSS has styling for a limited set of UI components (at the time of writing it's ",a("em",{children:"very"})," limited, but more may be coming soon). It's not really supposed to be a complete UI toolkit (because the World already has enough of them), but rather to be a foundation on which UI toolkits can be built."]}),h("p",{children:["Experience has taught me that off-the-shelf UI components (even ones that I've written myself) often need a fair bit of tweaking to match the styling for a particular site.  Sometimes it's easier just to write them from scratch as they're needed.  CSS has come a long way since the days when we relied on toolkits like"," ",a("a",{href:"https://getbootstrap.com/",children:"Bootstrap"})," to provide a consistent cross-browser experience.  Hopefully I will never again have to go searching through the Bootstrap source to figure out how they worked around a particular problem with IE."]}),a("p",{children:"At the very least, I won't be adding many more UI components until a) I've made it easy to select only the components that you want for a particular site and b) when I've convinced myself that something can be added that's sufficiently generic to warrant inclusion.  Watch this space."})]}),SL=Object.freeze(Object.defineProperty({__proto__:null,default:xL},Symbol.toStringTag,{value:"Module"})),CL=`<link
  rel="stylesheet"
  href="https://unpkg.com/@abw/badger-css/dist/styles/badger.min.css"
/>`,kL=`## using npm
$ npm add @abw/badger-css

## using yarn
$ yarn add @abw/badger-css

## using pnpm
$ pnpm add @abw/badger-css`,_L="import '@abw/badger-css/styles/badger.min.css';",$L="@import '@abw/badger-css/styles/badger.scss';",TL=`$ git clone https://github.com/abw/badger-css.git
$ cd badger-css
$ sass styles/badger.scss > your-badger-file.css`,EL=()=>h("div",{children:[a("h1",{children:"Installation"}),a("h2",{children:"No Installation Required!"}),h("p",{children:["You don't need to install anything to get starting using Badger CSS in a website.  Simply add the following tag to the"," ",a("code",{children:"<head>"})," section of your web page."]}),a(Je,{code:CL,caption:"Unpkg Link",language:"html",className:"mar-b-8",expand:!0}),a("h2",{children:"Adding to a Javascript Project"}),h("p",{children:["If you want to configure, modify or adapt Badger CSS then you should add ",a("code",{children:"@abw/badger-css"})," to your Javascript project using your favourite package manager."]}),a(Je,{code:kL,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0}),a("h2",{children:"Importing the CSS"}),a("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script like so:"}),a(Je,{code:_L,caption:"Importing CSS",language:"js",className:"mar-b-8",expand:!0}),h("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",a("code",{children:"node_modules"})," directory."]}),a("h2",{children:"Importing the SCSS"}),a("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components.  This gives you the flexibility to configure the default options, or to pick and choose which components you want to include."}),a("p",{children:"Add the following line to your main SCSS stylesheet source."}),a(Je,{code:$L,caption:"Importing SCSS",language:"scss",className:"mar-b-8",expand:!0}),a("h2",{children:"Going it Alone"}),h("p",{children:["If you're not using Javascript but want to play with the SCSS source files then you can check out the project repository from Github and run ",a("code",{children:"sass"})," to compile the source files into CSS."]}),a(Je,{code:TL,caption:"CSS from SASS",language:"shell",className:"mar-b-8",expand:!0})]}),NL=Object.freeze(Object.defineProperty({__proto__:null,default:EL},Symbol.toStringTag,{value:"Module"})),LL=e=>U.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 717 337",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},U.createElement("path",{className:"white",d:"M248.362,204.8C251.303,208.841 251.506,216.92 246.886,220.486C247.235,215.811 245.076,210.416 243.385,207.987C242.142,206.2 237.32,201.909 232.525,201.457C236.319,199.212 245.27,200.55 248.362,204.8ZM380.931,288.851C382.012,292.919 365.895,290.457 365.767,303.096C365.703,309.466 368.575,313.608 364.949,314.116C360.977,314.673 360.493,310.692 359.8,305.449C358.316,294.227 366.194,290.723 373.729,288.466C380.03,286.58 380.512,287.273 380.931,288.851ZM250.509,198.166C250.116,197.944 249.715,197.73 249.306,197.524C237.097,191.351 222.986,194.646 217.814,204.876C213.744,212.926 216.415,222.888 223.688,229.775C220.646,228.505 217.677,226.862 214.911,224.779C198.663,212.542 195.441,190.333 199.289,185.248C202.588,180.888 226.299,177.823 242.548,190.06C245.688,192.424 248.324,195.199 250.509,198.166ZM234.492,31.758C231.75,33.423 225.901,22.543 215.941,24.48C210.088,25.619 206.755,23.124 210.523,20.119C221.225,11.585 239.546,28.689 234.492,31.758ZM99.149,58.412C89.72,51.898 79.11,48.569 67.051,51.951C58.397,54.378 52.734,60.065 49.994,67.45C48.707,67.555 47.4,67.691 46.084,67.853C38.149,68.832 29.859,70.741 23.646,72.288C42.126,47.476 64.861,38.817 87.003,38.714L88.566,38.707L88.864,37.173C90.304,29.757 86.13,22.597 75.216,17.044C99.723,11.821 129.948,17.277 146.178,26.501L148.305,27.709L148.955,25.351C149.908,21.892 149.675,13.343 143.798,5.723C174.533,11.177 197.842,21.068 216.166,33.985C250.062,62.777 267.98,100.361 283.213,136.181C299.907,175.44 313.396,212.581 341.026,233.82C341.522,234.342 342.023,234.861 342.528,235.377C350.993,244.039 366.478,256.93 385.23,273.49C387.358,275.369 389.327,277.224 391.08,279.038C386.966,279.245 381.675,280.641 374.911,282.18C352.689,287.237 351.849,297.009 354.41,312.963C355.723,321.141 359.376,324.914 364.644,326.161C344.448,331.711 334.138,335.299 309.216,330.594C270.323,323.25 233.474,308.826 222.734,303.773C222.54,303.387 222.214,303.065 221.786,302.881C207.397,296.693 197.713,288.82 193.624,279.767C195.586,278.724 197.158,277.535 198.531,276.583C199.395,275.985 199.61,274.797 199.011,273.933C198.412,273.069 197.225,272.854 196.361,273.453C193.368,275.527 189.319,279.035 181.419,278.358C180.371,278.268 179.448,279.046 179.359,280.093C179.269,281.14 180.046,282.063 181.094,282.153C184.73,282.464 187.673,282.036 190.117,281.255C194.043,289.991 202.664,297.858 215.527,304.192C190.321,313.397 168.064,307.288 148.128,295.655C126.82,283.221 108.129,264.526 91.308,250.982C77.307,239.708 64.463,232.065 52.581,233.695C45.172,234.711 38.017,239.243 31.166,248.886C20.017,224.385 34.815,199.803 49.449,184.213L50.995,182.566L49.11,181.321C34.813,171.879 18.601,177.687 7.799,189.755C6.995,180.056 11.532,165.892 18.973,152.99C26.481,139.972 37,128.18 48.427,123.711C118.961,110.252 153.156,169.713 188.827,221.409C209.775,251.767 256.49,287.586 345.223,316.241C340.436,301.054 342.628,293.783 346.067,286.802C324.7,276.815 298.269,260.277 280.877,228.797C233.283,142.653 212.43,81.347 143.665,64.082C131.685,61.074 116.053,57.87 99.149,58.412ZM99.066,72.542C97.614,80.151 74.887,58.073 70.407,69.969C62.107,92.007 54.173,79.428 56.142,73.447C66.246,42.754 100.4,65.551 99.066,72.542Z",style:{fill:"white"}}),U.createElement("path",{className:"black",d:"M48.845,71.376C48.085,71.452 47.319,71.538 46.55,71.633C36.384,72.888 25.625,75.704 19.567,77.251L14.706,78.493L17.519,74.338C36.933,45.669 61.411,35.483 85.316,34.929C85.679,28.465 80.142,22.804 68.715,18.305L63.513,16.258L68.883,14.704C94.004,7.433 126.953,12.429 145.602,21.872C145.715,17.476 143.99,10.119 137.262,4.358L132.173,0L138.793,1.03C164.858,5.083 185.888,12.137 203.193,21.438C203.366,21.5 203.539,21.563 203.712,21.626C205.114,17.121 209.176,13.252 216.656,13.924C236.466,15.704 240.708,25.62 241.751,43.904C266.891,65.236 284.026,95.363 297.467,125.916C309.511,153.29 318.589,181.001 327.822,202.999C331.443,211.626 335.086,219.374 338.942,225.872C340.965,228.196 343.066,230.479 345.252,232.715C353.685,241.344 369.071,254.139 387.751,270.635C391.391,273.849 394.564,277.022 397.067,280.061C399.65,281.424 401.411,284.251 402.569,289.316C402.766,289.952 402.91,290.575 403,291.183C403.044,291.476 403.078,291.773 403.104,292.073C403.406,293.909 403.652,295.979 403.849,298.307C404.631,307.557 401.813,319.773 387.422,323.48C384.617,324.202 381.912,324.872 379.338,325.409C375.566,326.623 372.295,327.675 372.296,327.675C350.779,335.844 336.841,339.686 308.509,334.336C267.627,326.617 228.986,311.137 219.844,306.606C192.192,317.895 167.885,311.593 146.209,298.945C124.732,286.413 105.872,267.6 88.919,253.949C82.285,248.607 75.954,244.066 69.867,241.062C64.049,238.191 58.481,236.73 53.099,237.468C45.892,238.456 39.128,243.397 32.519,253.689L30.774,256.406L29.24,253.565C15.116,227.399 29.491,200.652 45.081,183.337C31.813,176.104 17.177,183.299 8.174,195.3L5.878,198.362L4.821,194.683C1.901,184.524 6.568,166.875 15.674,151.087C21.122,141.64 28.135,132.887 35.912,126.766C24.827,130.039 12.898,135.014 0,141.953C13.007,107.592 30.082,86.63 48.343,74.289C48.468,73.299 48.636,72.327 48.845,71.376ZM248.362,204.8C245.27,200.55 236.319,199.212 232.525,201.457C237.32,201.909 242.142,206.2 243.385,207.987C245.076,210.416 247.235,215.811 246.886,220.486C251.506,216.92 251.303,208.841 248.362,204.8ZM380.931,288.851C380.512,287.273 380.03,286.58 373.729,288.466C366.194,290.723 358.316,294.227 359.8,305.449C360.493,310.692 360.977,314.673 364.949,314.116C368.575,313.608 365.703,309.466 365.767,303.096C365.895,290.457 382.012,292.919 380.931,288.851ZM250.509,198.166C248.324,195.199 245.688,192.424 242.548,190.06C226.299,177.823 202.588,180.888 199.289,185.248C195.441,190.333 198.663,212.542 214.911,224.779C217.677,226.862 220.646,228.505 223.688,229.775C216.415,222.888 213.744,212.926 217.814,204.876C222.986,194.646 237.097,191.351 249.306,197.524C249.715,197.73 250.116,197.944 250.509,198.166ZM234.492,31.758C239.546,28.689 221.225,11.585 210.523,20.119C206.755,23.124 210.088,25.619 215.941,24.48C225.901,22.543 231.75,33.423 234.492,31.758ZM99.149,58.412C116.053,57.87 131.685,61.074 143.665,64.082C212.43,81.347 233.283,142.653 280.877,228.797C298.269,260.277 324.7,276.815 346.067,286.802C342.628,293.783 340.436,301.054 345.223,316.241C256.49,287.586 209.775,251.767 188.827,221.409C153.156,169.713 118.961,110.252 48.427,123.711C37,128.18 26.481,139.972 18.973,152.99C11.532,165.892 6.995,180.056 7.799,189.755C18.601,177.687 34.813,171.879 49.11,181.321L50.995,182.566L49.449,184.213C34.815,199.803 20.017,224.385 31.166,248.886C38.017,239.243 45.172,234.711 52.581,233.695C64.463,232.065 77.307,239.708 91.308,250.982C108.129,264.526 126.82,283.221 148.128,295.655C168.064,307.288 190.321,313.397 215.527,304.192C202.664,297.858 194.043,289.991 190.117,281.255C187.673,282.036 184.73,282.464 181.094,282.153C180.046,282.063 179.269,281.14 179.359,280.093C179.448,279.046 180.371,278.268 181.419,278.358C189.319,279.035 193.368,275.527 196.361,273.453C197.225,272.854 198.412,273.069 199.011,273.933C199.61,274.797 199.395,275.985 198.531,276.583C197.158,277.535 195.586,278.724 193.624,279.767C197.713,288.82 207.397,296.693 221.786,302.881C222.214,303.065 222.54,303.387 222.734,303.773C233.474,308.826 270.323,323.25 309.216,330.594C334.138,335.299 344.448,331.711 364.644,326.161C359.376,324.914 355.723,321.141 354.41,312.963C351.849,297.009 352.689,287.237 374.911,282.18C381.675,280.641 386.966,279.245 391.08,279.038C389.327,277.224 387.358,275.369 385.23,273.49C366.478,256.93 350.993,244.039 342.528,235.377C342.023,234.861 341.522,234.342 341.026,233.82C313.396,212.581 299.907,175.44 283.213,136.181C267.98,100.361 250.062,62.777 216.166,33.985C197.842,21.068 174.533,11.177 143.798,5.723C149.675,13.343 149.908,21.892 148.955,25.351L148.305,27.709L146.178,26.501C129.948,17.277 99.723,11.821 75.216,17.044C86.13,22.597 90.304,29.757 88.864,37.173L88.566,38.707L87.003,38.714C64.861,38.817 42.126,47.476 23.646,72.288C29.859,70.741 38.149,68.832 46.084,67.853C47.4,67.691 48.707,67.555 49.994,67.45C52.734,60.065 58.397,54.378 67.051,51.951C79.11,48.569 89.72,51.898 99.149,58.412ZM99.066,72.542C100.4,65.551 66.246,42.754 56.142,73.447C54.173,79.428 62.107,92.007 70.407,69.969C74.887,58.073 97.614,80.151 99.066,72.542Z"}),U.createElement("path",{className:"badger",d:"M347.242,14.148C348.016,13.915 349.256,13.664 350.96,13.392C352.664,13.121 354.406,12.986 356.188,12.986C357.892,12.986 359.421,13.102 360.777,13.334C362.132,13.567 363.274,14.031 364.204,14.729C365.133,15.426 365.83,16.374 366.295,17.575C366.76,18.775 366.992,20.344 366.992,22.28L366.992,33.666C368.928,32.891 370.768,32.349 372.511,32.039C374.253,31.729 376.17,31.574 378.261,31.574C381.979,31.574 385.503,32.233 388.834,33.549C392.164,34.866 395.107,36.783 397.663,39.3C400.219,41.817 402.233,44.935 403.704,48.653C405.176,52.37 405.912,56.669 405.912,61.548C405.912,66.583 405.157,70.978 403.646,74.735C402.136,78.491 400.025,81.608 397.315,84.087C394.604,86.565 391.293,88.444 387.381,89.722C383.47,90.999 379.152,91.638 374.428,91.638C369.316,91.638 364.978,91.038 361.416,89.838C357.853,88.637 354.832,87.146 352.354,85.365C348.946,82.964 347.242,79.866 347.242,76.071L347.242,14.148ZM374.428,76.071C377.99,76.071 380.759,74.851 382.734,72.411C384.709,69.971 385.697,66.35 385.697,61.548C385.697,56.669 384.69,53.029 382.676,50.628C380.662,48.227 377.952,47.026 374.544,47.026C372.995,47.026 371.659,47.181 370.536,47.491C369.413,47.801 368.193,48.265 366.876,48.885L366.876,74.212C367.728,74.754 368.754,75.199 369.955,75.548C371.155,75.896 372.646,76.071 374.428,76.071ZM439.023,31.574C443.205,31.574 447.02,32 450.466,32.852C453.913,33.704 456.856,35.002 459.296,36.744C461.735,38.487 463.614,40.694 464.93,43.366C466.247,46.039 466.905,49.195 466.905,52.835L466.905,78.859C466.905,80.873 466.344,82.518 465.221,83.796C464.098,85.074 462.762,86.178 461.213,87.108C456.178,90.128 449.091,91.638 439.952,91.638C435.847,91.638 432.149,91.251 428.857,90.477C425.565,89.702 422.738,88.54 420.376,86.991C418.014,85.442 416.194,83.467 414.916,81.066C413.638,78.665 412.999,75.877 412.999,72.701C412.999,67.357 414.586,63.252 417.762,60.387C420.938,57.521 425.856,55.739 432.517,55.042L447.736,53.416L447.736,52.603C447.736,50.356 446.748,48.749 444.773,47.781C442.798,46.813 439.952,46.329 436.234,46.329C433.291,46.329 430.425,46.639 427.637,47.258C424.849,47.878 422.332,48.653 420.086,49.582C419.079,48.885 418.227,47.82 417.53,46.387C416.833,44.954 416.484,43.463 416.484,41.914C416.484,39.9 416.968,38.293 417.936,37.093C418.904,35.892 420.395,34.866 422.409,34.014C424.655,33.162 427.308,32.542 430.367,32.155C433.427,31.768 436.312,31.574 439.023,31.574ZM439.952,77.232C441.269,77.232 442.721,77.097 444.309,76.826C445.896,76.555 447.078,76.187 447.852,75.722L447.852,66.428L439.487,67.125C437.319,67.28 435.537,67.744 434.143,68.519C432.749,69.294 432.052,70.455 432.052,72.004C432.052,73.553 432.652,74.812 433.853,75.78C435.053,76.748 437.086,77.232 439.952,77.232ZM476.548,61.548C476.548,56.436 477.323,52.002 478.872,48.246C480.421,44.489 482.57,41.372 485.32,38.894C488.069,36.415 491.283,34.576 494.962,33.375C498.641,32.175 502.611,31.574 506.871,31.574C508.42,31.574 509.93,31.71 511.402,31.981C512.873,32.252 514.074,32.581 515.003,32.968L515.003,14.148C515.778,13.915 517.017,13.664 518.721,13.392C520.425,13.121 522.167,12.986 523.949,12.986C525.653,12.986 527.182,13.102 528.538,13.334C529.893,13.567 531.036,14.031 531.965,14.729C532.895,15.426 533.592,16.374 534.056,17.575C534.521,18.775 534.753,20.344 534.753,22.28L534.753,77.349C534.753,80.989 533.049,83.893 529.642,86.062C527.395,87.533 524.491,88.831 520.928,89.954C517.365,91.077 513.26,91.638 508.613,91.638C503.579,91.638 499.067,90.941 495.079,89.547C491.09,88.153 487.721,86.139 484.971,83.506C482.222,80.873 480.13,77.716 478.697,74.037C477.265,70.358 476.548,66.195 476.548,61.548ZM509.543,47.026C505.36,47.026 502.146,48.227 499.9,50.628C497.654,53.029 496.531,56.669 496.531,61.548C496.531,66.35 497.576,69.971 499.668,72.411C501.759,74.851 504.779,76.071 508.73,76.071C510.124,76.071 511.382,75.858 512.505,75.432C513.628,75.006 514.5,74.522 515.119,73.979L515.119,48.42C513.57,47.491 511.711,47.026 509.543,47.026ZM574.603,31.574C579.017,31.574 583.025,32.136 586.627,33.259C590.228,34.382 593.268,35.834 595.747,37.616C597.296,38.7 598.516,39.9 599.407,41.217C600.297,42.534 600.743,44.238 600.743,46.329L600.743,86.991C600.743,91.096 599.968,94.64 598.419,97.622C596.87,100.604 594.759,103.082 592.087,105.057C589.415,107.032 586.278,108.484 582.677,109.414C579.075,110.343 575.222,110.808 571.117,110.808C564.069,110.808 558.531,109.859 554.504,107.961C550.476,106.064 548.462,102.985 548.462,98.725C548.462,96.944 548.83,95.376 549.566,94.02C550.302,92.665 551.135,91.638 552.064,90.941C554.31,92.181 556.847,93.226 559.674,94.078C562.501,94.93 565.424,95.356 568.445,95.356C572.627,95.356 575.958,94.659 578.436,93.265C580.915,91.871 582.154,89.625 582.154,86.527L582.154,84.668C578.979,86.062 575.106,86.759 570.536,86.759C567.051,86.759 563.74,86.236 560.603,85.191C557.466,84.145 554.717,82.518 552.354,80.311C549.992,78.104 548.095,75.257 546.662,71.772C545.229,68.287 544.512,64.143 544.512,59.341C544.512,54.616 545.268,50.511 546.778,47.026C548.288,43.541 550.379,40.656 553.051,38.371C555.724,36.086 558.899,34.382 562.578,33.259C566.257,32.136 570.265,31.574 574.603,31.574ZM581.806,48.42C581.263,48.11 580.47,47.801 579.424,47.491C578.378,47.181 577.081,47.026 575.532,47.026C571.737,47.026 568.89,48.091 566.993,50.221C565.095,52.351 564.146,55.391 564.146,59.341C564.146,63.833 565.095,67.067 566.993,69.042C568.89,71.017 571.311,72.004 574.254,72.004C577.43,72.004 579.947,71.269 581.806,69.797L581.806,48.42ZM642.799,91.638C638.229,91.638 633.989,90.999 630.078,89.722C626.166,88.444 622.758,86.527 619.854,83.971C616.949,81.415 614.665,78.201 612.999,74.328C611.334,70.455 610.502,65.924 610.502,60.735C610.502,55.623 611.334,51.228 612.999,47.549C614.665,43.87 616.853,40.849 619.563,38.487C622.274,36.125 625.372,34.382 628.858,33.259C632.343,32.136 635.906,31.574 639.546,31.574C643.651,31.574 647.388,32.194 650.757,33.433C654.126,34.672 657.031,36.376 659.471,38.545C661.91,40.714 663.808,43.308 665.163,46.329C666.519,49.35 667.197,52.641 667.197,56.204C667.197,58.837 666.461,60.851 664.989,62.245C663.518,63.64 661.465,64.53 658.832,64.917L630.136,69.216C630.988,71.772 632.73,73.689 635.364,74.967C637.997,76.245 641.018,76.884 644.426,76.884C647.601,76.884 650.602,76.477 653.429,75.664C656.256,74.851 658.561,73.902 660.342,72.818C661.581,73.592 662.627,74.676 663.479,76.071C664.331,77.465 664.757,78.936 664.757,80.485C664.757,83.971 663.13,86.565 659.877,88.269C657.399,89.586 654.611,90.477 651.512,90.941C648.414,91.406 645.51,91.638 642.799,91.638ZM639.546,45.98C637.687,45.98 636.08,46.29 634.725,46.91C633.369,47.529 632.266,48.323 631.414,49.292C630.562,50.26 629.923,51.344 629.497,52.545C629.071,53.745 628.819,54.965 628.742,56.204L648.608,52.951C648.376,51.402 647.524,49.853 646.052,48.304C644.581,46.755 642.412,45.98 639.546,45.98ZM696.473,89.663C695.699,89.896 694.479,90.128 692.814,90.36C691.149,90.593 689.425,90.709 687.644,90.709C685.94,90.709 684.41,90.593 683.055,90.36C681.699,90.128 680.557,89.663 679.628,88.966C678.698,88.269 677.982,87.321 677.478,86.12C676.975,84.919 676.723,83.351 676.723,81.415L676.723,46.561C676.723,44.78 677.052,43.25 677.711,41.972C678.369,40.694 679.318,39.552 680.557,38.545C681.796,37.538 683.326,36.628 685.146,35.815C686.966,35.002 688.922,34.285 691.013,33.666C693.104,33.046 695.273,32.562 697.519,32.213C699.765,31.865 702.011,31.691 704.257,31.691C707.975,31.691 710.918,32.407 713.087,33.84C715.256,35.273 716.34,37.616 716.34,40.869C716.34,41.953 716.185,43.018 715.875,44.063C715.565,45.109 715.178,46.058 714.713,46.91C713.087,46.91 711.422,46.987 709.718,47.142C708.014,47.297 706.349,47.529 704.722,47.839C703.096,48.149 701.566,48.478 700.133,48.827C698.7,49.175 697.48,49.582 696.473,50.047L696.473,89.663Z"}),U.createElement("path",{className:"css",d:"M586.337,162.306C584.4,162.306 582.561,162.616 580.818,163.236C579.075,163.855 577.565,164.765 576.287,165.966C575.009,167.166 573.983,168.657 573.208,170.439C572.434,172.22 572.047,174.311 572.047,176.712C572.047,181.514 573.421,185.116 576.171,187.517C578.92,189.918 582.27,191.119 586.22,191.119C588.544,191.119 590.558,190.847 592.262,190.305C593.966,189.763 595.476,189.182 596.793,188.563C598.342,189.647 599.503,190.828 600.278,192.106C601.052,193.384 601.44,194.914 601.44,196.695C601.44,199.871 599.929,202.33 596.909,204.072C593.888,205.815 589.706,206.686 584.361,206.686C579.482,206.686 575.067,205.97 571.117,204.537C567.167,203.104 563.779,201.09 560.952,198.496C558.125,195.901 555.937,192.784 554.388,189.143C552.838,185.503 552.064,181.476 552.064,177.061C552.064,171.949 552.897,167.476 554.562,163.642C556.227,159.809 558.492,156.652 561.358,154.174C564.224,151.695 567.535,149.837 571.291,148.597C575.048,147.358 579.017,146.738 583.2,146.738C588.776,146.738 593.075,147.745 596.095,149.759C599.116,151.773 600.626,154.367 600.626,157.543C600.626,159.015 600.278,160.389 599.581,161.667C598.884,162.945 598.071,164.049 597.141,164.978C595.824,164.359 594.237,163.759 592.378,163.178C590.519,162.597 588.505,162.306 586.337,162.306ZM657.786,188.098C657.786,193.984 655.579,198.593 651.164,201.923C646.749,205.254 640.243,206.919 631.646,206.919C628.393,206.919 625.372,206.686 622.584,206.222C619.796,205.757 617.414,205.041 615.439,204.072C613.464,203.104 611.915,201.884 610.792,200.413C609.669,198.941 609.107,197.199 609.107,195.185C609.107,193.326 609.495,191.758 610.269,190.48C611.044,189.202 611.973,188.137 613.057,187.285C615.304,188.524 617.879,189.628 620.783,190.596C623.688,191.564 627.038,192.048 630.833,192.048C633.234,192.048 635.073,191.699 636.351,191.002C637.629,190.305 638.268,189.376 638.268,188.214C638.268,187.13 637.803,186.278 636.874,185.658C635.945,185.039 634.396,184.535 632.227,184.148L628.742,183.451C622.003,182.134 616.988,180.062 613.696,177.235C610.405,174.408 608.759,170.361 608.759,165.095C608.759,162.229 609.379,159.634 610.618,157.311C611.857,154.987 613.6,153.051 615.846,151.502C618.092,149.953 620.783,148.752 623.92,147.9C627.057,147.048 630.523,146.622 634.318,146.622C637.184,146.622 639.875,146.835 642.392,147.261C644.91,147.687 647.098,148.326 648.957,149.178C650.815,150.03 652.287,151.134 653.371,152.489C654.456,153.845 654.998,155.452 654.998,157.311C654.998,159.092 654.669,160.622 654.01,161.9C653.352,163.178 652.519,164.243 651.512,165.095C650.893,164.707 649.963,164.301 648.724,163.875C647.485,163.449 646.13,163.061 644.658,162.713C643.186,162.364 641.695,162.074 640.185,161.842C638.675,161.609 637.3,161.493 636.061,161.493C633.505,161.493 631.53,161.784 630.136,162.364C628.742,162.945 628.044,163.855 628.044,165.095C628.044,165.947 628.432,166.644 629.206,167.186C629.981,167.728 631.452,168.231 633.621,168.696L637.223,169.509C644.658,171.213 649.944,173.556 653.081,176.538C656.218,179.52 657.786,183.373 657.786,188.098ZM714.946,188.098C714.946,193.984 712.738,198.593 708.324,201.923C703.909,205.254 697.403,206.919 688.806,206.919C685.553,206.919 682.532,206.686 679.744,206.222C676.955,205.757 674.574,205.041 672.599,204.072C670.624,203.104 669.075,201.884 667.952,200.413C666.829,198.941 666.267,197.199 666.267,195.185C666.267,193.326 666.654,191.758 667.429,190.48C668.203,189.202 669.133,188.137 670.217,187.285C672.463,188.524 675.039,189.628 677.943,190.596C680.847,191.564 684.197,192.048 687.992,192.048C690.393,192.048 692.233,191.699 693.511,191.002C694.789,190.305 695.428,189.376 695.428,188.214C695.428,187.13 694.963,186.278 694.034,185.658C693.104,185.039 691.555,184.535 689.387,184.148L685.901,183.451C679.163,182.134 674.148,180.062 670.856,177.235C667.564,174.408 665.919,170.361 665.919,165.095C665.919,162.229 666.538,159.634 667.777,157.311C669.017,154.987 670.759,153.051 673.005,151.502C675.252,149.953 677.943,148.752 681.08,147.9C684.217,147.048 687.683,146.622 691.478,146.622C694.343,146.622 697.035,146.835 699.552,147.261C702.069,147.687 704.257,148.326 706.116,149.178C707.975,150.03 709.447,151.134 710.531,152.489C711.615,153.845 712.157,155.452 712.157,157.311C712.157,159.092 711.828,160.622 711.17,161.9C710.512,163.178 709.679,164.243 708.672,165.095C708.053,164.707 707.123,164.301 705.884,163.875C704.645,163.449 703.289,163.061 701.818,162.713C700.346,162.364 698.855,162.074 697.345,161.842C695.834,161.609 694.46,161.493 693.22,161.493C690.665,161.493 688.689,161.784 687.295,162.364C685.901,162.945 685.204,163.855 685.204,165.095C685.204,165.947 685.591,166.644 686.366,167.186C687.14,167.728 688.612,168.231 690.781,168.696L694.382,169.509C701.818,171.213 707.104,173.556 710.241,176.538C713.377,179.52 714.946,183.373 714.946,188.098Z"})),IL=()=>a("div",{children:h("div",{className:"mobile block-center pad-t-8",children:[a(LL,{className:"badger-css"}),a("h1",{className:"intro mar-t-8",children:"Modern, minimal CSS presets"}),h("p",{children:["You've probably heard of CSS ",a("b",{children:"reset"})," stylesheets that provide sensible defaults for HTML elements to smooth out some of the inconsistencies between browsers.  And no doubt you're aware of the plethora of fully-featured CSS ",a("b",{children:"toolkits"})," that implement all manner of styles for UI components."]}),h("p",{children:["Badger CSS sits somewhere between the two.  It provides some sensible"," ",a("b",{children:"presets"})," for HTML elements that you can use out of the box and expect to get reasonable results.  It's highly configurable and is really designed to be a starting point for building your own CSS stylesheets, design systems and UI toolkits."]}),h("div",{className:"grid-2 gap-2",children:[a(Le,{to:"demo",text:"Demo",className:"brand button Xbdr-tl-4"}),a(Le,{to:"getting-started/installation",text:"Getting Started",className:"brand button Xbdr-tr-4"}),a(Le,{to:"getting-started/good",text:"What's Good?",className:"brand button Xbdr-bl-4"}),a(Le,{to:"getting-started/bad",text:"What's Bad?",className:"brand button Xbdr-br-4"})]})]})}),RL=Object.freeze(Object.defineProperty({__proto__:null,default:IL},Symbol.toStringTag,{value:"Module"})),PL=`<div class="block-left width-12rem border pad-2">
  Block left
</div>
<div class="block-center width-12rem border pad-2 mar-t-4">
  Block center
</div>
<div class="block-right width-12rem border pad-2 mar-t-4">
  Block right
</div>
`,FL=`<div class="text-left border pad-2 mar-b-2">
  Text on the left
</div>
<div class="text-center border pad-2 mar-b-2">
  Text in the center
</div>
<div class="text-right border pad-2">
  Text on the right
</div>`,ML=`<div class="text-right border pad-4">
  Text on the right
  <div class="text-left border pad-2 mar-v-2">
    Text on the left
  </div>
  Text on the right
</div>`,OL=()=>h("div",{className:"prose",children:[a("h1",{children:"Alignment"}),a("h2",{children:"Text Alignment"}),h("p",{children:["Add the ",a("code",{children:"text-left"}),", ",a("code",{children:"text-center"})," and"," ",a("code",{children:"text-right"})," CSS classes to set the text alignment."]}),a(D,{html:FL,caption:"Text Alignment",expand:!0}),h("p",{children:["Text is aligned left by default making the ",a("code",{children:"text-left"})," ","class ",a("em",{children:"mostly"})," redundant.  However it can be useful to reset the alignment to the left for a block that would otherwise be aligned centrally or to the right"]}),a(D,{html:ML,caption:"Text Left",expand:!0}),a("h2",{children:"Block Alignment"}),h("p",{children:["Add the ",a("code",{children:"block-left"}),", ",a("code",{children:"block-center"})," and"," ",a("code",{children:"block-right"})," CSS classes to align a block to the left, in the center, or on the right, respectively."]}),h("p",{children:["You'll need to set a block width to stop it from expanding to fill the full width of the parent element.  You can do that using one of the"," ",a(Le,{to:"/utilities/widths",text:"width-*"})," utility classes."]}),a(D,{html:PL,caption:"Block Alignment",expand:!0})]}),AL=Object.freeze(Object.defineProperty({__proto__:null,default:OL},Symbol.toStringTag,{value:"Module"})),DL=`<div class="border pad-4">
  This element has a border.
</div>
`,zL=`<div class="grid-1 gap-2">
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
</div>`,BL=`<div class="grid-2 gap-2">
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
`,jL=`<div class="border pad-4 mar-b-2">
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
`,UL=`<div class="grid-3 gap-4 pad-t-2">
  <button class="brand solid">default</button>
  <button class="brand solid bdr-0">bdr-0</button>
  <button class="brand solid square">square</button>
</div>
<div class="grid-3 gap-4 pad-t-2">
  <input type="text" value="default">
  <input type="text" value="bdr-0" class="bdr-0">
  <input type="text" value="square" class="square">
</div>
`,HL=`<div class="bdr-6 surface-1 pad-2 border grid-1 gap-2">
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
</div>`,WL=`<style>
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
`,VL=`// define your own $border-width-values...
$border-width-values: 1, 2, 3, 5, 8, 13, 21, 34;
// ...and/or set the $border-width-prefix...
$border-width-prefix: 'br-wd';

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,GL=`// define your own $border-radius-values...
$border-radius-values: 1, 2, 3, 5, 8, 13, 21, 34;
// ...and/or set the $border-width-prefix...
$border-radius-prefix: 'br-rd';

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,YL=`<div class="grid-1 gap-4">
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
</div>`,qL=({properties:e})=>h("table",{className:"brand celled striped properties wide",children:[a("thead",{children:h("tr",{children:[a("th",{children:"Property"}),a("th",{children:"Default"}),a("th",{children:"Description"})]})}),a("tbody",{children:e.map(t=>h("tr",{children:[a("td",{className:"key nowrap",children:a("code",{children:t[0]})}),a("td",{className:"nowrap",children:t[1]}),a("td",{children:t[2]})]},t[0]))})]}),ZL=({sets:e})=>a("div",{className:`grid-${e.length} gap-8 stack-desktop mar-b-8`,children:e.map(t=>h("div",{children:[a("h4",{className:"mar-b-2",children:t.title}),a(qL,{properties:t.properties}),!!t.notes&&a("div",{className:"smallish info alert",children:t.notes})]},t.title))}),QL=()=>h("div",{className:"prose",children:[a("h1",{children:"Borders"}),a("h2",{children:"Border Class"}),h("p",{children:["Add the ",a("code",{children:"border"})," CSS class to an element to give it a border."]}),a(D,{html:DL,caption:"Border",expand:!0}),a("h2",{children:"Border Width"}),h("p",{children:["Add the ",a("code",{children:"bdw-N"})," CSS class to set the border width, where"," ",a("code",{children:"N"})," is in pixel units."]}),a(D,{html:zL,caption:"Border Width",expand:!0}),h("div",{className:"grid-2 gap-8 stack-desktop",children:[h("div",{children:[h("p",{children:["The pre-defined values for ",a("code",{children:"N"})," are"," ",a("code",{children:"0"}),", ",a("code",{children:"1"}),", ",a("code",{children:"2"}),", ",a("code",{children:"3"}),","," ",a("code",{children:"4"}),", ",a("code",{children:"5"}),", ",a("code",{children:"6"}),", ",a("code",{children:"8"})," and"," ",a("code",{children:"10"}),"."]}),h("p",{children:["You can set the ",a("code",{children:"$border-width-values"})," SCSS variable if you want to define a different set of values. You can also use the ",a("code",{children:"$border-width-prefix"})," to define a different prefix for the border width classes if you don't like ",a("code",{children:"bdw"}),"."]}),h("p",{children:["In the example shown here the generated CSS classes would be"," ",a("code",{children:"br-wd-1"}),", ",a("code",{children:"br-wd-2"}),","," ",a("code",{children:"br-wd-3"}),", ",a("code",{children:"br-wd-5"})," and so on."]})]}),a(Je,{code:VL,caption:"Custom Border Widths",language:"scss",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Border Color"}),h("p",{children:["Add the ",a("code",{children:"bdc-N"})," CSS class to set the border color, where"," ",a("code",{children:"N"})," is a color stop (0, 5, 10, etc) for the current color range."]}),a(D,{html:BL,caption:"Border Color"}),a("h2",{children:"Border Radius"}),h("p",{children:["Add the ",a("code",{children:"bdr-N"})," classes to set the radius of borders. The ",a("code",{children:"-N"})," multiplier is a multiple of the base unit radius (0.25rem by default)."]}),a(D,{html:jL,caption:"Border Radius",expand:!0}),h("p",{children:["The ",a("code",{children:"bdr-0"})," class can be used to ",a("i",{children:"explicitly"})," set the border radius to 0. The ",a("code",{children:"square"})," class is an alias for"," ",a("code",{children:"bdr-0"})," with the added benefit of having the"," ",a("code",{children:"!important"})," flag set for when you really need to drive the point home."]}),a("p",{children:"They can be used to remove the corner radius from components which have them by default, like buttons and form fields."}),a(D,{html:UL,caption:"Square Corners",expand:!0}),h("div",{className:"grid-2 gap-8 stack-desktop",children:[h("div",{children:[h("p",{children:["The pre-defined values for ",a("code",{children:"N"})," are"," ",a("code",{children:"0"}),", ",a("code",{children:"1"}),", ",a("code",{children:"2"}),", ",a("code",{children:"3"}),","," ",a("code",{children:"4"}),", ",a("code",{children:"5"}),", ",a("code",{children:"6"}),", ",a("code",{children:"8"})," and"," ",a("code",{children:"10"}),"."]}),h("p",{children:["You can set the ",a("code",{children:"$border-radius-values"})," SCSS variable if you want to define a different set of values. You can also use the ",a("code",{children:"$border-radius-prefix"})," to define a different prefix for the border radius classes if you don't like ",a("code",{children:"bdr"}),"."]}),h("p",{children:["In the example shown here the generated CSS classes would be"," ",a("code",{children:"br-rd-1"}),", ",a("code",{children:"br-rd-2"}),","," ",a("code",{children:"br-rd-3"}),", ",a("code",{children:"br-rd-5"})," and so on."]})]}),a(Je,{code:GL,caption:"Custom Border Radius",language:"scss",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Border Radius Corners"}),a("p",{children:"You can independently set the radius for different corners using these classes."}),h("div",{className:"grid-2 gap-8 stack-desktop",children:[h("table",{className:"brand border lined striped mar-b-8",children:[a("thead",{children:h("tr",{children:[a("th",{children:"Class"}),a("th",{children:"Description"})]})}),h("tbody",{children:[h("tr",{children:[a("td",{children:a("code",{children:"bdr-t-N"})}),a("td",{children:"Top left and top right corner radius"})]}),h("tr",{children:[a("td",{children:a("code",{children:"bdr-b-N"})}),a("td",{children:"Bottom left and bottom right corner radius"})]}),h("tr",{children:[a("td",{children:a("code",{children:"bdr-l-N"})}),a("td",{children:"Top left and bottom left corner radius"})]}),h("tr",{children:[a("td",{children:a("code",{children:"bdr-r-N"})}),a("td",{children:"Top right and bottom right corner radius"})]}),h("tr",{children:[a("td",{children:a("code",{children:"bdr-tl-N"})}),a("td",{children:"Top left corner radius"})]}),h("tr",{children:[a("td",{children:a("code",{children:"bdr-tr-N"})}),a("td",{children:"Top right corner radius"})]}),h("tr",{children:[a("td",{children:a("code",{children:"bdr-bl-N"})}),a("td",{children:"Bottom left corner radius"})]}),h("tr",{children:[a("td",{children:a("code",{children:"bdr-br-N"})}),a("td",{children:"Bottom right corner radius"})]})]})]}),a("div",{children:h(li,{children:["If you set a custom ",a("code",{children:"$border-radius-prefix"})," as shown above then your CSS classes will start with your chosen prefix instead of ",a("code",{children:"bdr"})," as shown here."]})})]}),a(D,{html:HL,caption:"Border Radius Corners",expand:!0}),a("h2",{children:"No Border Required!"}),h("p",{children:["You don't need to have a border displayed to set the border radius. The ",a("code",{children:"bdr-N"})," classes can be used to set the border radius on various components."]}),a(D,{html:YL,caption:"Radius Components",expand:!0}),a("h2",{children:"Border Properties"}),a("p",{children:"The following properties are used to define the border style."}),a(ZL,{sets:[{title:"Defaults",properties:[["--border-width",a("code",{children:"1px"},"1px"),"Border width"],["--border-style",a("code",{children:"solid"},"solid"),h("span",{children:["Border style: ",a("code",{children:"solid"}),", ",a("code",{children:"dotted"}),", ",a("code",{children:"dashed"}),", etc."]},"desc")],["--border-radius",a("code",{children:"var(--unit-radius)"},"radius"),"Border radius"],["--border-color",a("code",{children:"var(--color-75)"},"color"),"Border color from current color range"]]},{title:"Dark Theme",properties:[["--border-color",a("code",{children:"var(--color-25)"},"color"),"Border color from current color range"]]}]}),a("h2",{children:"Setting Custom Properties"}),a(D,{html:WL,caption:"Custom Border Style",expand:!0})]}),KL=Object.freeze(Object.defineProperty({__proto__:null,default:QL},Symbol.toStringTag,{value:"Module"})),XL=`<div class="
  violet border pad-4 bdr-2 bdw-2
  fgc-40 bgc-85 hdc-30 bdc-70
">
  <h3>Colors</h3>
  Foreground color violet-40<br/>
  Background color violet-85<br/>
  Heading color violet-30<br/>
  Border color violet-70<br/>
</div>
`,JL=`<div class="
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
`,eI=`<div class="red grid-3 gap-2">
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
`,tI=`<!-- Explicit color range -->
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
</div>`,nI=`<div>
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
`,rI=["red","brown","orange"],lI=()=>h("div",{className:"prose",children:[a("h1",{children:"Color Utilities"}),a("h2",{children:"Color Classes"}),h("p",{children:["Each of the color ranges defined in your palette has a corresponding class. For example, the ",a("code",{children:"red"})," class can be used to select the red color range.  Some of the colors also have semantic aliases, e.g. ",a("code",{children:"error"})," and ",a("code",{children:"invalid"})," are aliases for"," ",a("code",{children:"red"}),"."]}),h("p",{children:["Selecting a color range doesn't have much of a visible effect by itself.  The important things is that it maps the ",a("code",{children:"--color-N"})," ","CSS custom properties to the equivalent stops from the selected color range.  For example, in the scope of the ",a("code",{children:"red"})," CSS class, the"," ",a("code",{children:"--color-0"})," property is mapped to ",a("code",{children:"--red-0"}),","," ",a("code",{children:"--color-5"})," is mapped to ",a("code",{children:"--red-5"}),","," ",a("code",{children:"--color-10"})," to ",a("code",{children:"--red-10"})," and so on up to 100."]}),h("div",{className:"flex gap-4",children:[rI.map(e=>h("div",{children:[h("h3",{className:"font-mono mar-b-2",children:[".",e," ","{"," ... ","}"]}),a(xs,{scope:e,to:e})]},e)),a("div",{children:a("h3",{className:"font-mono mar-b-2",children:"...etc"})})]}),a("h2",{children:"Foreground, Background and Border Colors"}),h("p",{children:["The ",a("code",{children:"fgc-N"}),", ",a("code",{children:"bgc-N"}),", ",a("code",{children:"hdc-N"})," and"," ",a("code",{children:"bdc-N"})," classes can be used to select a stop from the color range for the foreground color, background color, heading color and border color, respectively."]}),h("p",{children:["For example, the ",a("code",{children:"bgc-80"})," CSS class will set the background color to whatever color is mapped to ",a("code",{children:"--color-80"}),".  In the scope of the ",a("code",{children:"red"})," CSS class, that will be ",a("code",{children:"--red-80"}),"."]}),h("div",{className:"grid-2 gap-8 stack-desktop",children:[a(om,{classes:[["fgc-N","--color",h(In,{children:[a("b",{children:"f"}),"ore",a("b",{children:"g"}),"round ",a("b",{children:"c"}),"olor stop ",a("code",{children:"N"})]})],["bgc-N","--background-color",h(In,{children:[a("b",{children:"b"}),"ack",a("b",{children:"g"}),"round ",a("b",{children:"c"}),"olor stop ",a("code",{children:"N"})]})],["hdc-N","--heading-color",h(In,{children:[a("b",{children:"h"}),"ea",a("b",{children:"d"}),"ing ",a("b",{children:"c"}),"olor stop ",a("code",{children:"N"})]})],["bdc-N","--border-color",h(In,{children:[a("b",{children:"b"}),"or",a("b",{children:"d"}),"er ",a("b",{children:"c"}),"olor stop ",a("code",{children:"N"})]})]]}),a("div",{children:h(li,{children:["The ",a("code",{children:"bdc-N"})," classes are designed to be used in conjunction with the ",a("code",{children:"border"})," class and other classes for setting ",a(Le,{to:"/utilities/borders",text:"borders"}),".  A"," ",a("code",{children:"bdc-N"})," class will set the color border, but you won't see any effect unless you also add the ",a("code",{children:"border"})," class."]})})]}),a(D,{html:XL,caption:"Color Classes",expand:!0}),a("h2",{children:"Dark Theme"}),h("p",{children:["The ",a("code",{children:"fgd-N"}),", ",a("code",{children:"bgd-N"}),", ",a("code",{children:"hdd-N"})," and"," ",a("code",{children:"bdd-N"})," classes are equivalents of the above for when a dark theme is selected.  You can set foreground, background, heading and border colors for both light and dark themes and they will be switched in automatically."]}),h("div",{className:"grid-2 gap-2 stack-desktop",children:[a(om,{classes:[["fgd-N","--color",h(In,{children:[a("b",{children:"f"}),"ore",a("b",{children:"g"}),"round ",a("b",{children:"d"}),"ark theme color stop ",a("code",{children:"N"})]})],["bgd-N","--background-color",h(In,{children:[a("b",{children:"b"}),"ack",a("b",{children:"g"}),"round ",a("b",{children:"d"}),"ark theme color stop ",a("code",{children:"N"})]})],["hdd-N","--heading-color",h(In,{children:[a("b",{children:"h"}),"ea",a("b",{children:"d"}),"ing ",a("b",{children:"d"}),"ark theme color stop ",a("code",{children:"N"})]})],["bdd-N","--border-color",h(In,{children:[a("b",{children:"b"}),"or",a("b",{children:"d"}),"er ",a("b",{children:"d"}),"ark theme color stop ",a("code",{children:"N"})]})]]}),a("div",{children:h(li,{children:["The same rule applies for ",a("code",{children:"bdd-N"})," as it does for"," ",a("code",{children:"bdc-N"})," - it selects the border color but you still need to add the ",a("code",{children:"border"})," class to make the border visible."]})})]}),a(D,{html:JL,caption:"Dark Theme",expand:!0}),a("h2",{children:"Color Inheritance"}),a("p",{children:"CSS custom properties are inherited by child elements.  This means you can select a color range on an element and all children will inherit that color range."}),a(D,{html:eI,caption:"Color Inheritance",expand:!0}),a("h2",{children:"Easy Component Coloring"}),h("p",{children:["This effect is used by various badger-css components. They use the generic ",a("code",{children:"--color-N"})," properties to define colors and can then be rendered using any color range."]}),a(D,{html:tI,caption:"Color Components"}),a("h2",{children:"Creating Your Own Colored Components"}),h("p",{children:["You can employ this in your own components by using the"," ",a("code",{children:"--color-N"})," CSS custom properties to define your component colours."]}),h("p",{children:["This is particularly useful when implementing components for both light and dark themes.  You only need to specify which ",a("code",{children:"--color-N"})," stops you want to use in each case.  You don't need to write separate CSS rules for each of the colors you might want to use."]}),a(D,{html:nI,caption:"Custom Components"})]}),om=({classes:e})=>h("table",{className:"brand celled striped mar-b-8",children:[a("thead",{children:h("tr",{children:[a("th",{children:"Class"}),a("th",{children:"Property"}),a("th",{children:"Description"})]})}),a("tbody",{children:e.map(t=>h("tr",{children:[a("td",{children:a("code",{children:t[0]})}),a("td",{children:a("code",{children:t[1]})}),a("td",{children:t[2]})]},t[0]))})]}),aI=Object.freeze(Object.defineProperty({__proto__:null,default:lI},Symbol.toStringTag,{value:"Module"})),oI=`<div class="inline border pad-2">
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
`,iI=()=>h("div",{className:"prose",children:[a("h1",{children:"Display"}),a("h2",{children:"Display Modes"}),h("p",{children:["The ",a("code",{children:"inline"}),", ",a("code",{children:"block"})," and"," ",a("code",{children:"inline-block"})," CSS classes can be used to set the"," ",a("code",{children:"display"})," mode.   These are useful when you have an element that would normally have one display type that you want displayed in a different way."]}),h("p",{children:["See the"," ",a(Le,{to:"/utilities/flexbox",text:"flexbox"})," and"," ",a(Le,{to:"/utilities/grid",text:"grid"})," pages for information about using flex and grid display modes."]}),a(D,{html:oI,caption:"Display Modes",expand:!0})]}),sI=Object.freeze(Object.defineProperty({__proto__:null,default:iI},Symbol.toStringTag,{value:"Module"})),cI=`<div class="flex">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>`,dI=`<div class="flex start">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,uI=`<div class="flex center">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,hI=`<div class="flex end">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,fI=`<div class="flex baseline">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,pI=`<div class="flex start gap-4">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,gI=`<div class="flex space">
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
`,mI=`<div class="flex evenly">
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
`,vI=()=>h("div",{className:"prose",children:[a("h1",{children:"Flexbox"}),a("h2",{children:"Flexbox Classes"}),h("p",{children:["Use the ",a("code",{children:"flex"})," CSS class to set the ",a("code",{children:"display"})," ","mode to ",a("code",{children:"flex"}),".  The default alignment mode"," ","(i.e. the ",a("code",{children:"align-items"})," CSS property) is ",a("code",{children:"stretch"}),"."]}),a(D,{html:cI,caption:".flex",expand:!0}),a("h2",{children:"Flexbox Alignment"}),h("p",{children:["Add the ",a("code",{children:"start"})," class to align the items to the start."]}),a(D,{html:dI,caption:".flex.start",expand:!0}),h("p",{children:["Add the ",a("code",{children:"center"})," class to align the items to the center."]}),a(D,{html:uI,caption:".flex.center",expand:!0}),h("p",{children:["Add the ",a("code",{children:"baseline"})," class to align the items to the text baseline."]}),a(D,{html:fI,caption:".flex.baseline",expand:!0}),h("p",{children:["Add the ",a("code",{children:"end"})," class to align the items to the end."]}),a(D,{html:hI,caption:".flex.end",expand:!0}),a("h2",{children:"Flexbox Spacing"}),h("p",{children:["The ",a("code",{children:"gap-N"})," classes can be used to add a gap between successive elements.  Here ",a("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit (",a("code",{children:"0.25rem"})," by default)."]}),a(D,{html:pI,caption:".flex.gap-4",expand:!0}),h("p",{children:["Add the ",a("code",{children:"space"})," class to space the items as much as possible. This is equivalent to setting the ",a("code",{children:"justify-content"})," CSS property to ",a("code",{children:"space-between"}),"."]}),a(D,{html:gI,caption:".flex.space",expand:!0}),h("p",{children:["Add the ",a("code",{children:"evenly"})," class to divide the space evenly between and around the items.  This is equivalent to setting the"," ",a("code",{children:"justify-content"})," CSS property to ",a("code",{children:"space-evenly"}),"."]}),a(D,{html:mI,caption:".flex.evenly",expand:!0})]}),yI=Object.freeze(Object.defineProperty({__proto__:null,default:vI},Symbol.toStringTag,{value:"Module"})),bI=`<div class="italic larger">
  Italic
</div>
<div class="underline larger">
  Underline
</div>
<div class="strike larger">
  Strike
</div>
`,wI=()=>h("div",{className:"prose",children:[a("h1",{children:"Font Styles"}),a("p",{children:"The following classes are defined for common font styles."}),a(D,{html:bI,caption:"Font Styles",expand:!0})]}),xI=Object.freeze(Object.defineProperty({__proto__:null,default:wI},Symbol.toStringTag,{value:"Module"})),SI=`<div class="weight-thin larger">
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
</div>`,CI=`<div class="weight-100 larger">
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
</div>`,kI=`<div class="thin larger">
  Thin
</div>
<div class="bold larger">
  Bold
</div>
<div class="thick larger">
  Thick
</div>
`,_I=`// define your own font weights...
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
`,Qn=({children:e,align:t="start"})=>a("div",{className:`grid-2 gap-h-8 stack-desktop ${t}`,style:{"--prose-width":"100%"},children:e}),$I=()=>h("div",{className:"prose",children:[a("h1",{children:"Font Weights"}),a("h2",{children:"Weight Names"}),h(Qn,{children:[h("p",{children:["The ",a("code",{children:"weight-<name>"})," classes can be used to set the font weight."]}),h("p",{children:["The values for ",a("code",{children:"<name>"})," can be",a("code",{children:"thin"}),", ",a("code",{children:"extra-light"}),", ",a("code",{children:"light"}),","," ",a("code",{children:"regular"}),", ",a("code",{children:"medium"}),", ",a("code",{children:"semi-bold"}),","," ",a("code",{children:"bold"}),", ",a("code",{children:"extra-bold"})," or ",a("code",{children:"black"}),"."]})]}),a(D,{html:SI,caption:"Weight Names",expand:!0}),a("h2",{children:"Weight Numbers"}),h(Qn,{children:[a("p",{children:"Alternately you can use the corresponding weight numbers."}),h("p",{children:["Those numbers can be"," ",a("code",{children:"100"}),", ",a("code",{children:"200"}),", ",a("code",{children:"300"}),","," ",a("code",{children:"400"}),", ",a("code",{children:"500"}),", ",a("code",{children:"600"}),","," ",a("code",{children:"700"}),", ",a("code",{children:"800"})," or ",a("code",{children:"900"}),"."]})]}),a(D,{html:CI,caption:"Weight Numbers",expand:!0}),a("h2",{children:"Weight Aliases"}),h("p",{children:["There are some short-cut aliases for the common cases.  Note that we use ",a("code",{children:"thick"})," rather than ",a("code",{children:"black"})," to avoid any confusion with the color black."]}),a(D,{html:kI,caption:"Weight Aliases",expand:!0}),a("h2",{children:"Custom Weights"}),a(Qn,{children:h("p",{children:["You can set the ",a("code",{children:"$font-weights"})," SASS variable if you want to define a different set of font weights."]})}),a(Je,{code:_I,caption:"Font Weights",language:"scss",className:"mar-b-8",expand:!0})]}),TI=Object.freeze(Object.defineProperty({__proto__:null,default:$I},Symbol.toStringTag,{value:"Module"})),EI=`<div class="large">
  <p class="font-sans">Sans-serif Font</p>
  <p class="font-serif">Serif Font</p>
  <p class="font-system">System Font</p>
  <p class="font-mono">Mono Font</p>
</div>
`,NI=`// redefine any of the following fonts to taste...
$font-sans:   'Open Sans', Helvetica, sans-serif;
$font-serif:  'Times New Roman', Times, Baskerville, Georgia, serif;
$font-mono:   Monaco, 'Bitstream Vera Sans Mono', 'Lucida Console', Terminal, monospace;
$font-system: -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,LI=`// define your own font names...
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
`,II=`p {
  font-family: $font-sans;
}
`,RI=`p {
  font-family: var(--font-sans);
}
`,PI=()=>h("div",{className:"prose",children:[a("h1",{children:"Fonts"}),a("h2",{children:"Font Classes"}),h("p",{children:["The ",a("code",{children:"font-sans"})," CSS class can be used to select a sans-serif font, ",a("code",{children:"font-serif"})," for a serif font, ",a("code",{children:"font-system"})," ","for the system font, or ",a("code",{children:"font-mono"})," for a monospaced font."]}),a(D,{html:EI,caption:"Fonts",expand:!0}),a("h2",{children:"Font Variables"}),a("p",{children:"Each of the above fonts is defined by a SASS variable which you can override to define your own font stacks."}),a(Je,{code:NI,caption:"Customising Fonts",language:"scss",className:"mar-b-8",expand:!0}),h("p",{children:["These variables are exposed as the corresponding CSS custom properties:"," ",a("code",{children:"--font-sans"}),", ",a("code",{children:"--font-serif"}),","," ",a("code",{children:"--font-system"})," and ",a("code",{children:"--font-mono"}),"."]}),h("div",{className:"grid-2 gap-4 stack-laptop mar-b-8",children:[a(Je,{code:II,caption:"Font Variables in SCSS",language:"scss",expand:!0}),a(Je,{code:RI,caption:"Font Variables in CSS",language:"css",expand:!0})]}),a("p",{children:"Or you can define your own names for fonts."}),a(Je,{code:LI,caption:"Font Aliases",language:"scss",className:"mar-b-8",expand:!0}),h("p",{children:["In this case the CSS classes created will be ",a("code",{children:"font-body"}),","," ",a("code",{children:"font-head"})," and ",a("code",{children:"font-code"}),".  The fonts will also be defined as the ",a("code",{children:"--font-body"}),", ",a("code",{children:"--font-head"}),","," ","and ",a("code",{children:"--font-code"})," CSS custom properties."]})]}),FI=Object.freeze(Object.defineProperty({__proto__:null,default:PI},Symbol.toStringTag,{value:"Module"})),MI=`<h3>grid-2</h3>
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
`,OI=`<div class="grid gap-4">
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
`,AI=`<div class="grid-2 gap-4">
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
`,DI=`<div class="grid-2 gap-v-8 gap-h-2">
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
`,zI=`<div class="grid-3 gap-2 start">
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
`,BI=`<div class="grid-3 gap-2 center">
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
`,jI=`<div class="grid-3 gap-2 end">
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
`,UI=`<div class="grid-fit gap-2">
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
`,HI=`<div class="grid-fit gap-2" style="--min-width: 200px">
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
`,WI=`<h3><code>grid-fit</code></h3>

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
`,VI=()=>h("div",{className:"prose",children:[a("h1",{children:"Grid"}),a("h2",{children:"Grid Columns"}),h("p",{children:["Use a ",a("code",{children:"grid-N"})," CSS class to set the ",a("code",{children:"display"})," ","mode to ",a("code",{children:"grid"})," where ",a("code",{children:"N"})," is the number of columns from 2 to 16."]}),a(D,{html:MI,caption:"Grid Columns",expand:!0}),a("h2",{children:"Gaps"}),h("p",{children:["The ",a("code",{children:"gap-N"})," classes can be used to add a gap between successive elements.  Here ",a("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit (",a("code",{children:"0.25rem"})," by default)."]}),a(D,{html:AI,caption:"Grid Gaps",expand:!0}),a("h2",{children:"Vertical and Horizontal Gaps"}),h("p",{children:["The the ",a("code",{children:"gap-v-N"})," and ",a("code",{children:"gap-h-N"})," classes can be used to define the vertical and horizontal gaps separately. Again, ",a("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit."]}),a(D,{html:DI,caption:"Grid Gaps",expand:!0}),a("h2",{children:"Single Column Grid"}),h("p",{children:["The ",a("code",{children:"grid"})," CSS class (or ",a("code",{children:"grid-1"})," which does the same thing) creates a single column grid.  It's useful because it then allows you to use the ",a("code",{children:"gap-N"})," classes to add a vertical gap between child components."]}),a(D,{html:OI,caption:"Single Column Grid",expand:!0}),a("h2",{children:"Grid Fit"}),h("p",{children:["The ",a("code",{children:"grid-fit"})," CSS class will fit as many items into the grid as it can and then wrap onto the next line."]}),a(D,{html:UI,caption:"Grid Fit"}),a("h2",{children:"Grid Fill"}),h("p",{children:["The ",a("code",{children:"grid-fill"})," CSS class is similar to ",a("code",{children:"grid-fit"}),". The difference between them is what happens when there are't enough items to fill the container width.  ",a("code",{children:"grid-fit"})," will stretch them whereas ",a("code",{children:"grid-fill"})," will not."]}),a(D,{html:WI,caption:"Grid Fill"}),a("h2",{children:"Grid Fit/Fill Size"}),h("p",{children:["Both ",a("code",{children:"grid-fit"})," and ",a("code",{children:"grid-fill"})," can define a minimum size for each child element.  By default this is"," ",a("code",{children:"100px"})," wide.  You can set the ",a("code",{children:"--min-width"})," property to change it."]}),a(D,{html:HI,caption:"Grid Size"}),a("h2",{children:"Grid Start"}),h("p",{children:["Add the ",a("code",{children:"start"})," CSS class to align items to the start of grid columns."]}),a(D,{html:zI,caption:"Grid Start",expand:!0}),a("h2",{children:"Grid Center"}),h("p",{children:["Add the ",a("code",{children:"center"})," CSS class to align items to the center of grid columns."]}),a(D,{html:BI,caption:"Grid Center",expand:!0}),a("h2",{children:"Grid End"}),h("p",{children:["Add the ",a("code",{children:"end"})," CSS class to align items to the end of grid columns."]}),a(D,{html:jI,caption:"Grid End",expand:!0})]}),GI=Object.freeze(Object.defineProperty({__proto__:null,default:VI},Symbol.toStringTag,{value:"Module"})),YI=()=>h("div",{className:"page prose",children:[a("h1",{children:"Utility Classes"}),h("p",{className:"intro",children:["CSS utility classes are ",a("i",{children:"extremely"})," useful for applying styles to elements on an ad-hoc basis.  But they shouldn't be used as a substitute for writing CSS for reusable styles."]}),h("p",{children:["Some CSS frameworks, most notably"," ",a("a",{href:"https://tailwindcss.com/",children:"tailwind.css"}),", have taken this to the extreme where everything is a utility class and you never need to write any CSS at all. Although this approach has some merits for rapid prototyping, I personally wouldn't use it when building a non-trivial site because I think that it can have a negative impact on readability and maintainability."]}),h("p",{children:["I prefer to take the pragmatic approach and use utility classes to apply ",a("i",{children:"exceptional"})," styling to elements that don't warrant having their own dedicated CSS classes.  The general rule that I follow is to create dedicated CSS classes for components that I'm using in different places in a site.  For example, a product card, a user avatar, button and form styling, and so.  This ensures that they are consistent and can easily be changed across the whole site by updating the rules in the stylesheet."]}),h("p",{children:["For styling that depends on the context in which an element is being used, I'll generally reach for utility classes. By far the most useful of these, and the ones that I use more than any other, are the ",a("code",{children:"mar"})," and ",a("code",{children:"pad"}),` utility classes to add custom margins and padding.  The amount of margin or padding required on an element will often depend on the other elements around it, so there isn't a "one size fits all" solution. Other useful utility classes include those to set the font size, add a border or drop shadow, or to set the layout to use flexbox or grid.`]}),a("h2",{children:"CSS Custom Properties"}),h("p",{children:['CSS custom properties or CSS variables as they are also know, are an incredibly powerful addition to the toolkit for any web designer or developer.  They allow you to define reusable "snippets" of CSS that can easily be applied to different elements.  They can be used to replace much of the functionality that was previously only accessible by using variables and/or mixins in a CSS pre-processing language like'," ",a("a",{href:"https://sass-lang.com/",children:"SASS"}),"."]}),a("h2",{children:"SASS Variables"}),a("p",{children:"Although CSS custom properties have largely removed the need for CSS pre-processors like SASS, there are still benefits to be had from using them.  One benefit is that they can help to reduce bloat in your CSS files.  SASS allows you to define variables that can be used to implement system-wide configuration options that are then compiled into the generated CSS files.  In contrast, any CSS custom properties that you use must be included in the CSS and, if overdone, can lead to significant increases in the file size."}),a("h2",{children:"When to Use Each?"}),a("p",{children:"The general rule that I follow is to use SASS variables for configuration options that I might want to change on a site-wide basis but generally remain constant throughout the site.  For example, the default font face, the breakpoints, the colors or default spacing units.  It's useful to have these defined as variables because it allows me to plug Badger-UI into a project, tweak the default settings, and then get coding.  If at some point in the future I decide they're not quite right, or if the client or a designer wants me to change them, then it should be easy to do so, and they should be applied universally."}),a("p",{children:"For styles that I might want to change in different parts of the site, need to reflect some application state (e.g. the differences between a success, warning or error message), or that should have different properties depending on the user selecting a light or dark theme, then CSS properties are generally the way to go."}),a("p",{children:"For styles that need to be applied on an ad-hoc basis, utility classes are what I reach for."})]}),qI=Object.freeze(Object.defineProperty({__proto__:null,default:YI},Symbol.toStringTag,{value:"Module"})),ZI=`<div class="relative border" style="height: 140px">
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
`,QI=()=>h("div",{className:"prose",children:[a("h1",{children:"Position"}),a("h2",{children:"Position Classes"}),h("p",{children:["Add the ",a("code",{children:"absolute"}),", ",a("code",{children:"relative"})," and"," ",a("code",{children:"fixed"})," CSS classes to set the position type."]}),h("p",{children:["For elements that are set to ",a("code",{children:"absolute"})," or ",a("code",{children:"fixed"})," ","position, the ",a("code",{children:"top"}),", ",a("code",{children:"bottom"}),", ",a("code",{children:"left"})," ","and ",a("code",{children:"right"})," classes can be used to position them against the corresponding edge of the closest parent element with the"," ",a("code",{children:"relative"})," position type."]}),a(D,{html:ZI,caption:"Position",expand:!0})]}),KI=Object.freeze(Object.defineProperty({__proto__:null,default:QI},Symbol.toStringTag,{value:"Module"})),XI=`<div class="scroll-x border pad-2 nowrap mar-b-2">
  Yeah, I like it, just been fooling about with it for a few months now, very delicate... Yeah, it's part of a... trilogy really, a musical trilogy I'm doing, in, D minor, which I always find is really the saddest of all keys really. I don't know why, but it makes people weep instantly. You play a "baaaaa... baaaaaa..." it's the horn part. "...baaaa, baaaaa...", yeah, just simple lines intertwining, you know very much like, I'm really influenced by Mozart and Bach, It's sort of in between those, really, it's like a Mach piece really.<
</div>
`,JI=`<div class="scroll-y border pad-2" style="height: 7rem">
  Yeah, I like it, just been fooling about with it for a few months
  now, very delicate... Yeah, it's part of a... trilogy really, a
  musical trilogy I'm doing, in, D minor, which I always find is really
  the saddest of all keys really. I don't know why, but it makes people
  weep instantly. You play a "baaaaa... baaaaaa..." it's the horn part.
  "...baaaa, baaaaa...", yeah, just simple lines intertwining, you
  know very much like, I'm really influenced by Mozart and Bach,
  It's sort of in between those, really, it's like a Mach piece
  really.
</div>`,eR=()=>h("div",{className:"prose",children:[a("h1",{children:"Scolling"}),a("h2",{children:"Scroll Classes"}),h("p",{children:["Add the ",a("code",{children:"scroll-x"})," or ",a("code",{children:"scroll-y"})," CSS classes to set ",a("code",{children:"overflow-x"})," or ",a("code",{children:"overflow-y"})," to ",a("code",{children:"scroll"}),", respectively."]}),a("p",{children:`Be warned that you'll also need to set widths and/or heights as appropriate to stop the layout engine from doing the "right" thing and expanding the containers to fit the content.`}),a(D,{html:XI,caption:"scroll-x",expand:!0}),a(D,{html:JI,caption:"scroll-y",expand:!0})]}),tR=Object.freeze(Object.defineProperty({__proto__:null,default:eR},Symbol.toStringTag,{value:"Module"})),nR=`<div class="surface-3 pad-8">
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
</div>`,rR=`<div class="surface-3 pad-8">
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
`,lR=()=>h("div",{className:"prose",children:[a("h1",{children:"Shadows"}),a("h2",{children:"Shadow Classes"}),h("p",{children:["Use the ",a("code",{children:"shadow-1"}),", ",a("code",{children:"shadow-2"}),","," ",a("code",{children:"shadow-3"}),", ",a("code",{children:"shadow-4"})," and ",a("code",{children:"shadow-5"})," ","CSS classes to add a box shadow of progressively larger size.  Larger shadows can be used to suggest that an element is lifted higher off the background and thus appears closer to the foreground."]}),a(D,{html:nR,caption:"Shadows",expand:!0}),a("h2",{children:"Shadow Properties"}),h("p",{children:["The shadow styles are defined as CSS custom properties, (e.g."," ",a("code",{children:"--shadow-1"}),", ",a("code",{children:"--shadow-2"}),", etc).  The colors and opacities used for the shadows depend on both the shadow depth and color theme.  For the default light theme the base color is"," ",a("code",{children:"--grey-0"})," and the shadows are more transparent.  For the dark theme, where shadows need to be a bit more prominent to be visible, the base color is ",a("code",{children:"black"})," and the shadows are more opaque."]}),h("p",{children:["The benefit of CSS custom properties is that you can easily apply them to your own style rules.  In this example we define a"," ",a("code",{children:".shadow-example"})," rule which adds a ",a("code",{children:"box-shadow"})," using the ",a("code",{children:"--shadow-2"})," custom property.  The shadow color will be set correctly for both light and dark themes so you don't need to worry about defining separate rules for each."]}),a(D,{html:rR,caption:"Shadow Style",expand:!0})]}),aR=Object.freeze(Object.defineProperty({__proto__:null,default:lR},Symbol.toStringTag,{value:"Module"})),oR=`<div class="smallest">Smallest text</div>
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
`,sR=`// define your own text sizes...
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
@import "@abw/badger-css/styles/badger.scss";`,cR=({heading1:e="Class",heading2:t="Rem Size",heading3:n=h(In,{children:["Pixel Size ",a("span",{className:"smaller",children:"(when 1rem=16px)"})]}),rows:r})=>h("table",{className:"brand celled striped properties small wide mar-b-2",children:[a("thead",{children:h("tr",{children:[a("th",{children:e}),a("th",{children:t}),a("th",{children:n})]})}),a("tbody",{children:r.map(l=>h("tr",{children:[a("td",{children:a("code",{children:l[0]})}),a("td",{children:l[1]}),a("td",{children:l[2]})]},l[0]))})]}),dR=()=>h("div",{className:"prose",children:[a("h1",{children:"Text Sizes"}),a("h2",{children:"Size Classes"}),h("p",{children:["Use the ",a("code",{children:"smallest"}),", ",a("code",{children:"smaller"}),","," ",a("code",{children:"small"}),", ",a("code",{children:"medium"})," (default)"," ",a("code",{children:"large"}),", ",a("code",{children:"larger"})," and ",a("code",{children:"largest"})," CSS classes to set the text size. These are defined as SASS variables which you can override (e.g. ",a("code",{children:"$size-large"}),") and CSS custom properties which you can use in your own stylesheets or inline styles (e.g. ",a("code",{children:"--size-large"}),")."]}),a(D,{html:oR,caption:"Text Sizes",expand:!0}),a("h2",{children:"Custom Sizes"}),a("p",{children:"The pre-defined values for the sizes are shown in the table below."}),h("p",{children:["You can set the ",a("code",{children:"$sizes"})," SCSS variable if you want to define a different set of sizes, either to give them different names or values."]}),h("p",{children:["In the example shown here the generated CSS classes would be"," ",a("code",{children:"xxs"}),", ",a("code",{children:"xs"}),", ",a("code",{children:"s"}),","," ",a("code",{children:"m"}),", ",a("code",{children:"l"}),", ",a("code",{children:"xl"})," and ",a("code",{children:"xxl"}),"."]}),a(bi,{code:sR,caption:"Custom Sizes",language:"scss",expand:!0,children:a(cR,{rows:[["smallest","0.625rem","10px"],["smaller","0.75rem","12px"],["small","0.875rem","14px"],["medium","1rem","16px"],["large","1.25rem","20px"],["larger","1.5rem","24px"],["largest","2rem","32p<"]]})}),a("h2",{children:"Size Multipliers"}),h("p",{children:["For larger text sizes you can use the size multiple classes:"," ",a("code",{children:"x2"}),", ",a("code",{children:"x3"}),", etc., up to ",a("code",{children:"x10"}),". These are all multiples of ",a("code",{children:"1rem"}),"."]}),a(D,{html:iR,caption:"Text Sizes",expand:!0})]}),uR=Object.freeze(Object.defineProperty({__proto__:null,default:dR},Symbol.toStringTag,{value:"Module"})),hR=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
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
`,pR=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
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
`,mR=`<div class="grid-1 gap-4 surface-3 pad-4">
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
`,vR=()=>h("div",{className:"prose",children:[a("h1",{children:"Spacing"}),h("p",{children:["The ",a("code",{children:"mar"})," and ",a("code",{children:"pad"})," CSS utility classes can be used to set the margins and padding for and element."]}),a("h2",{children:"Margins"}),h("p",{children:["The ",a("code",{children:"mar"})," class by itself will add 1 unit of margin to all four sides of an element.  The default unit size is ",a("code",{children:"0.25rem"}),"."]}),a(D,{html:hR,caption:"Margins",expand:!0}),h("p",{children:["The ",a("code",{children:"mar-N"})," classes will add multiples of the unit, where ",a("code",{children:"N"})," is one of the values:"," ",a("code",{children:"0"}),", ",a("code",{children:"1"}),", ",a("code",{children:"2"}),", ",a("code",{children:"3"}),","," ",a("code",{children:"4"}),", ",a("code",{children:"6"}),", ",a("code",{children:"8"}),", ",a("code",{children:"10"}),","," ",a("code",{children:"12"}),", ",a("code",{children:"16"}),", ",a("code",{children:"20"}),","," ",a("code",{children:"24"}),", ",a("code",{children:"28"})," or ",a("code",{children:"32"}),".  The"," ",a("code",{children:"mar-1"})," class is effectively the same as just ",a("code",{children:"mar"})," ","but is included for completeness.  Also note that ",a("code",{children:"mar-0"})," can be used to remove any margin that would otherwise be present on an element."]}),a(D,{html:fR,caption:"Margin Multiple",expand:!0}),a("h2",{children:"Margin Directions"}),h("p",{children:["You can also specify the direction for the margin using the"," ",a("code",{children:"mar-t"})," (top), ",a("code",{children:"mar-r"})," (right),"," ",a("code",{children:"mar-b"})," (bottom), ",a("code",{children:"mar-l"})," (left),"," ",a("code",{children:"mar-v"})," (vertical: top and bottom) and"," ",a("code",{children:"mar-h"})," (horizontal: left and right) classes. The default is 1 unit of margin or a ",a("code",{children:"-N"})," suffix can be added as a multiplier.  For example ",a("code",{children:"mar-t-4"})," to add 4 units of margin to the top of an element."]}),a(D,{html:pR,caption:"Margin Direction",expand:!0}),a("h2",{children:"Padding"}),h("p",{children:["The ",a("code",{children:"pad"})," and related utility classes work in the same way but add padding inside the element."]}),a(D,{html:gR,caption:"Padding",expand:!0}),h("p",{children:["One important thing to note is that padding is applied in multiples of 0.25",a("b",{children:"em"})," whereas margins use 0.25",a("b",{children:"rem"}),".  This is because you usually want spacing around elements to be consistent (which rem provides) but padding inside an element should be based on the text size (which em provides)."]}),a(D,{html:mR,caption:"Pad Sizes",expand:!0})]}),yR=Object.freeze(Object.defineProperty({__proto__:null,default:vR},Symbol.toStringTag,{value:"Module"})),bR=`<div class="flex gap-4">
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
`,wR=`<div class="flex gap-4">
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
`,xR=`<table class="wide shaded lined">
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
`,SR=`// redefine $splits to include what you want...
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
@import "@abw/badger-css/styles/badger.scss";`,CR=[["2","One half","50%"],["3","One third","33.33333333%"],["2-3","Two thirds","66.66666666%"],["4","One quarter","25%"],["3-4","Three quarters","75%"],["5","One fifth","20%"],["2-5","Two fifths","40%"],["3-5","Three fifths","60%"],["4-5","Four fifths","80%"],["6","One sixth","16.66666666%"],["5-6","Five sixth","83.33333333%"],["7","One seventh","14.28571429%"],["2-7","Two sevenths","28.57142858%"],["3-7","Three sevenths","42.85714287%"],["4-7","Four sevenths","57.14285716%"],["5-7","Five sevenths","71.42857145%"],["6-7","Six sevenths","85.71428574%"],["8","One eighth","12.5%"],["3-8","Three eighths","37.5%"],["5-8","Five eighths","62.5%"],["7-8","Seven eighths","87.5%"],["9","One ninth","11.11111111%"],["2-9","Two ninths","22.22222222%"],["4-9","Four ninths","44.44444444%"],["5-9","Five ninths","55.55555555%"],["7-9","Seven ninths","77.77777777%"],["8-9","Eight ninths","88.88888888%"],["10","One tenth","10%"],["3-10","Three tenths","30%"],["7-10","Seven tenths","70%"],["9-10","Nine tenths","90%"],["11","One eleventh","9.090909090%"],["12","One twelfth","8.333333333%"],["13","One thirteenth","7.692307692%"],["14","One fourteenth","7.142857142%"],["15","One fifteenth","6.666666666%"],["16","One sixteenth","6.25%"]],kR=()=>h("div",{className:"prose",children:[a("h1",{children:"Split"}),a("h2",{children:"Evenly Split Columns"}),h(Qn,{children:[h("p",{children:["The ",a("code",{children:"split-N"})," classes can be used to set the width of an element to a fraction of the width of the parent container. For example, ",a("code",{children:"split-2"})," sets the width to one half,"," ",a("code",{children:"split-3"})," to one third, and so on.  The value for"," ",a("code",{children:"N"})," can be anything from 2 to 16."]}),h("p",{children:["They can be useful in conjunction with the"," ",a(Le,{to:"/utilities/flexbox",text:"flexbox"})," classes to constrain columns to be a particular width.  Otherwise the flexbox layout engine will try to expand the width of columns that have more content."]})]}),a(D,{html:bR,caption:"Even Splits"}),a("h2",{children:"Unevenly Split Columns"}),h("p",{children:["The ",a("code",{children:"split-N-M"})," classes can be used to create uneven splits. For example, ",a("code",{children:"split-2-5"})," creates a columns that is two fifths of the width."]}),h("p",{children:["These are defined for all uneven splits up to tenths (e.g. there's a ",a("code",{children:"split-3-10"})," class for three tenths, but no ",a("code",{children:"split-3-11"})," ","for three elevenths).  Not that redundant classes are not included. For example, there's no ",a("code",{children:"split-3-6"})," class because it's one half or ",a("code",{children:"split-2"}),"."]}),a(D,{html:wR,caption:"Uneven Splits"}),a("h2",{children:"Tables"}),h("p",{children:["The ",a("code",{children:"split-*"})," classes also work with table columns. This can be useful to prevent the layout engine from expanding columns to fit the content.  It's especially useful if you have multiple tables and you want the columns to be the same width in each of the tables."]}),a(D,{html:xR,caption:"Table Splits"}),a("h2",{children:"Split Classes"}),h(Qn,{children:[a("p",{children:"The CSS classes and their corresponding widths are listed below."}),h("p",{children:["You can set the ",a("code",{children:"$splits"})," SASS variable if you want to define a different set of splits."]})]}),a(bi,{code:SR,caption:"Custom Splits",language:"scss",expand:!0,children:h("table",{className:"brand celled striped properties small wide mar-b-2",children:[a("thead",{children:h("tr",{children:[a("th",{children:"Class"}),a("th",{children:"Size"}),a("th",{children:"%age Width"})]})}),a("tbody",{children:CR.map(e=>h("tr",{children:[a("td",{children:h("code",{children:["split-",e[0]]})}),a("td",{children:e[1]}),a("td",{children:e[2]})]},e[0]))})]})})]}),_R=Object.freeze(Object.defineProperty({__proto__:null,default:kR},Symbol.toStringTag,{value:"Module"})),$R=`<h4 class="font-mono smaller">stack-widescreen</h4>
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
`,TR=`<h4 class="font-mono smaller">stack-widescreen</h4>
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
`,ER=`// define your own breakpoints...
$breakpoints: (
  'mobile':     30rem,
  'tablet':     50rem,
  'laptop':     70rem,
  'desktop':    80rem,
  'widescreen': 90rem
) !default;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";`,NR={mobile:30,tablet:50,laptop:70,desktop:80,widescreen:90},LR=()=>h("div",{className:"prose",children:[a("h1",{children:"Stacking Split Columns"}),h("p",{children:["One of the problems with creating columns using"," ",a(Le,{to:"/utilities/grid",text:"grid"}),","," ",a(Le,{to:"/utilities/flexbox",text:"flexbox"})," ","and ",a(Le,{to:"/utilities/split",text:"split"})," is that sometimes a user's screen size isn't large enough to accommodate them."]}),h("p",{children:["The ",a("code",{children:"stack-*"})," classes can be used to stack columns when the screen size is narrower than a threshold breakpoint. These are ",a("code",{children:"stack-mobile"}),", ",a("code",{children:"stack-tablet"}),","," ",a("code",{children:"stack-laptop"}),", ",a("code",{children:"stack-desktop"})," and"," ",a("code",{children:"stack-widescreen"}),"."]}),a("h2",{children:"Grid Stacking"}),h(Qn,{children:[h("p",{children:["This example shows how adding a ",a("code",{children:"stack-*"})," class to an element that has one of the ",a("code",{children:"grid-*"})," classes will cause the columns to be stacked at different breakpoints."]}),a(li,{title:"Try it out!",children:"Try resizing your browser window and see how the grid elements below get stacked."})]}),a(D,{html:$R,caption:"Stacking Grids"}),a("h2",{children:"Flexbox Stacking"}),h("p",{children:["This example shows the same thing for ",a("code",{children:"flex"})," containers."]}),a(D,{html:TR,caption:"Stacking Flexbox"}),a("h2",{children:"Breakpoint Names"}),h(Qn,{children:[a("p",{children:"The breakpoint names and their corresponding widths in rems and pixels (assuming 1rem = 16px) are shown below."}),h("p",{children:["You can set the ",a("code",{children:"$breakpoints"})," SASS variable if you want to define a different set of breakpoints."]})]}),a(bi,{code:ER,caption:"Custom Breakpoints",language:"scss",expand:!0,children:h("table",{className:"brand celled striped properties small wide mar-b-2",children:[a("thead",{children:h("tr",{children:[a("th",{children:"Class"}),a("th",{children:"Rems"}),a("th",{children:"Pixels"})]})}),a("tbody",{children:Object.entries(NR).map(([e,t])=>h("tr",{children:[a("td",{children:a("code",{children:e})}),h("td",{children:[t,"rem"]}),h("td",{children:[t*16,"px"]})]},e))})]})})]}),IR=Object.freeze(Object.defineProperty({__proto__:null,default:LR},Symbol.toStringTag,{value:"Module"})),RR=`<div class="surface border pad-2">
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
`,PR=`<div class="surface-1 border pad-2 mar-b-2">
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
`,FR=`<div class="grid-3 gap-2 smallish">
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
`,MR=()=>h("div",{className:"prose",children:[a("h1",{children:"Surfaces"}),h("p",{children:['When building UI components it can be useful to think in terms of "surfaces", with each surface getting progressively "closer" to the user and demanding their closer attention. You may want to combine these with the ',a("code",{children:"shadow-N"})," classes to further emphasise the effect."]}),a("p",{children:"As a general rule surfaces that are in the foreground should be lighter than those in the background.  Note that this applies to dark themes as well as light themes."}),a("h2",{children:"Surface Classes"}),h("p",{children:["Use the ",a("code",{children:"surface-1"}),", ",a("code",{children:"surface-2"}),","," ",a("code",{children:"surface-3"}),", ",a("code",{children:"surface-4"})," and"," ",a("code",{children:"surface-5"})," CSS classes to define elements with appropriate background and text colors to achieve this effect.  The lower numbers are meant to be further in the background with higher numbers being closer to the foreground."]}),a(D,{html:RR,caption:"Surfaces",expand:!0}),h("p",{children:["The ",a("code",{children:"surface"})," class is a special case being used here to apply a background color for the examples.  When using a light theme this"," ","is ",a("code",{children:"white"})," and for a dark theme it is ",a("code",{children:"black"}),"."]}),h("p",{children:["The styles are defined using CSS variables for the foreground, background and border colors, e.g. ",a("code",{children:"--color"}),", ",a("code",{children:"--background-color"})," ","and ",a("code",{children:"--border-color"}),". In turn these are defined using the ",a("code",{children:"grey"})," color range depending on the color theme. For example, the ",a("code",{children:"--background-color"}),"for ",a("code",{children:"--surface-3"}),"is defined to be ",a("code",{children:"--color-90"})," by default, and ",a("code",{children:"--color-10"})," when the dark theme is in effect."]}),a("h2",{children:"Surfaces With Borders"}),h("p",{children:["Add the ",a("code",{children:"border"})," CSS class to add a border around a surface."]}),a(D,{html:PR,caption:"Surface Borders",expand:!0}),a("h2",{children:"Colored Surfaces"}),a("p",{children:"Add any of the color classes to get different colored surfaces."}),a(D,{html:FR,caption:"Color Surfaces"})]}),OR=Object.freeze(Object.defineProperty({__proto__:null,default:MR},Symbol.toStringTag,{value:"Module"})),AR=`<div class="grid-1 gap-4">
  <input type="text" value="A wide input"/>
  <button class="blue wide">
    A wide button
  </button>
</div>`,DR=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,zR=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,BR=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,jR=`// define your own range of rem widths...
$rem-widths:
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 25, 30,
  35, 40, 45, 50, 60, 70, 80, 90, 100 !default;

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,UR=[2,4,6,8,10,12,14,16,18,20,25,30,35,40,45,50,60,70,80,90,100],HR=()=>h("div",{className:"prose",children:[a("h1",{children:"Widths"}),a("h2",{children:"Wide"}),h("p",{children:["Use the ",a("code",{children:"wide"})," CSS class to set an inline element to expand to the full width of the container."]}),a(D,{html:AR,caption:"Wide",expand:!0}),a("h2",{children:"Width Classes"}),h(Qn,{children:[h("p",{children:["The ",a("code",{children:"width-Nrem"})," classes can be used to set the width of an element to a number of rem units."]}),h("p",{children:["The values for ",a("code",{children:"N"})," can be",a("code",{children:"2"}),", ",a("code",{children:"4"}),","," ",a("code",{children:"6"}),", ",a("code",{children:"8"}),", ",a("code",{children:"10"}),", ",a("code",{children:"12"}),","," ",a("code",{children:"14"}),", ",a("code",{children:"16"}),", ",a("code",{children:"18"}),", ",a("code",{children:"20"}),","," ",a("code",{children:"25"}),", ",a("code",{children:"30"}),", ",a("code",{children:"35"}),", ",a("code",{children:"40"}),","," ",a("code",{children:"45"}),", ",a("code",{children:"50"}),", ",a("code",{children:"60"}),","," ",a("code",{children:"70"}),", ",a("code",{children:"80"}),", ",a("code",{children:"90"})," or ",a("code",{children:"100"}),"."]})]}),a(D,{html:DR,caption:"Widths",expand:!0}),a("h2",{children:"Pixel Width Classes"}),h("p",{children:["If you prefer to think in pixels, you can use the corresponding"," ",a("code",{children:"width-Npx"})," classes instead."]}),a(D,{html:zR,caption:"Widths in Px",expand:!0}),a("h2",{children:"Max Width Classes"}),h(Qn,{children:[h("p",{children:["The ",a("code",{children:"max-width-Nrem"})," classes can be used to set the maximum width of an element to a number of rem units.  In this case the width of the element will be constrained to the width of the parent element. You can also use the corresponding ",a("code",{children:"max-width-Npx"})," classes if you prefer to think in pixels."]}),h("p",{children:["The ",a("code",{children:"width-*"})," and ",a("code",{children:"max-width-*"})," classes work by using the ",a("code",{children:"--width"})," custom property which is set to the appropriate number of rem units based on the ",a("code",{children:"-Nrem"})," ","or ",a("code",{children:"-Npx"})," suffix."]})]}),a(D,{html:BR,caption:"Widths",expand:!0}),a("h2",{children:"Rem/Pixel Sizes"}),h(Qn,{children:[a("p",{children:"The corresponding pixel widths (assuming 1rem = 16px) for each of the classes are shown below."}),h("p",{children:["You can set the ",a("code",{children:"$rem-widths"})," SASS variable if you want to define a different set of width classes."]})]}),a(bi,{code:jR,caption:"Custom Sizes",language:"scss",expand:!0,children:h("table",{className:"brand celled striped properties small wide mar-b-2",children:[a("thead",{children:h("tr",{children:[a("th",{children:"Rem Class"}),a("th",{children:"Pixel Class"}),a("th",{children:"Rems"}),a("th",{children:"Pixels"})]})}),a("tbody",{children:UR.map(e=>h("tr",{children:[a("td",{children:h("code",{children:["width-",e,"rem"]})}),a("td",{children:h("code",{children:["width-",e*16,"px"]})}),a("td",{children:e}),a("td",{children:e*16})]},e))})]})})]}),WR=Object.freeze(Object.defineProperty({__proto__:null,default:HR},Symbol.toStringTag,{value:"Module"})),_3=({path:e,onClick:t,width:n=512,height:r=512,style:l,className:o="night-and-day--icon",fill:i="currentColor"})=>a("svg",{"aria-hidden":"true",focusable:"false",className:o,style:l,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n} ${r}`,onClick:t,children:a("path",{d:e,fill:i})}),VR=e=>a(_3,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),$3=({Icon:e,caption:t,onClick:n,iconClass:r,iconStyle:l,captionStyle:o,className:i="night-and-day--switcher",captionClass:s="night-and-day--caption",style:d={display:"inline-block"}})=>h("div",{className:i,onClick:n,style:d,children:[a(e,{style:l,className:r}),!!t&&a("div",{className:s,style:o,children:t})]}),GR=e=>{const{setDark:t}=xi();return a($3,{Icon:VR,onClick:t,...e})},YR=e=>a(_3,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),qR=e=>{const{setLight:t}=xi();return a($3,{Icon:YR,onClick:t,...e})},ZR=({sunrise:e={},nightfall:t={}})=>{const{isLight:n,setLight:r,setDark:l}=xi();return n?a(qR,{onClick:l,...e}):a(GR,{onClick:r,...t})},T3=U.createContext(),xi=()=>U.useContext(T3),is="dark",Jd="light",E3="(prefers-color-scheme: dark)",QR=()=>{var e;return(e=window==null?void 0:window.matchMedia)==null?void 0:e.call(window,E3).matches},Xl=window==null?void 0:window.localStorage,KR=e=>e.split(" "),im=(e,t="")=>`${e} ${t}`,XR=({storageKey:e,defaultVariant:t,children:n})=>{const r=e?Xl==null?void 0:Xl.getItem(e):null,[l,o=""]=r?KR(r):[QR(),null],[i,s]=U.useState(l===is),[d,f]=U.useState(o||t),m=N=>{s(N),e&&Xl&&Xl.setItem(e,im(N?is:Jd,d))},b=N=>{f(N),e&&Xl&&Xl.setItem(e,im(i?is:Jd,N))},S=N=>m(N.matches);U.useEffect(()=>{if(window&&window.matchMedia){const N=window.matchMedia(E3);return N.addEventListener("change",S),()=>N==null?void 0:N.removeEventListener("change",S)}},[]);const L={isDark:i,isLight:!i,setDark:()=>m(!0),setLight:()=>m(!1),setIsDark:s,toggleTheme:()=>m(!i),theme:i?is:Jd,variant:d,setVariant:b};return a(T3.Provider,{value:L,children:n})},JR=e=>U.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},U.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z",fill:"currentColor"})),sm="sidebar",eP="no-sidebar",N3="0.1.1",L3="2023-10-23",cm="2018",eu=L3.match(/^(\d+)/)[1],tP=eu===cm?eu:`${cm} - ${eu}`,nP=()=>{const{variant:e,setVariant:t}=xi();return a("header",{children:h("nav",{children:[h("div",{children:[a(Df,{name:"bars",className:"toggle-sidebar action",onClick:()=>t(e===sm?eP:sm)}),a(Le,{to:"/",className:"home mar-l-2",text:"Badger-CSS"}),h("span",{className:"small mar-l-2",children:["v",N3]})]}),h("div",{children:[a("a",{href:"https://github.com/abw/badger-css",children:a(JR,{className:"night-and-day--icon mar-r-2"})}),a(ZR,{})]})]})})},po=({title:e,items:t})=>h("div",{className:"menu",children:[a("h4",{children:e}),t.map(n=>a(Le,{...n},n.to))]}),rP=[{to:"/demo",text:"Demo"},{to:"/getting-started/installation",text:"Installation"},{to:"/getting-started/good",text:"What's good about it?"},{to:"/getting-started/bad",text:"What's wrong with it?"}],lP=[{to:"/colors/ranges",text:"Color Ranges"},{to:"/colors/brand",text:"Brand Colors"},{to:"/colors/variables",text:"Color Variables"}],aP=[{to:"/utilities/",text:"Introduction"},{to:"/utilities/alignment",text:"Alignment"},{to:"/utilities/borders",text:"Borders"},{to:"/utilities/colors",text:"Colors"},{to:"/utilities/display",text:"Display"},{to:"/utilities/flexbox",text:"Flexbox"},{to:"/utilities/fonts",text:"Fonts"},{to:"/utilities/font-styles",text:"Font Styles"},{to:"/utilities/font-weights",text:"Font Weights"},{to:"/utilities/grid",text:"Grid"},{to:"/utilities/position",text:"Position"},{to:"/utilities/scrolling",text:"Scrolling"},{to:"/utilities/shadows",text:"Shadows"},{to:"/utilities/sizes",text:"Text Sizes"},{to:"/utilities/spacing",text:"Spacing"},{to:"/utilities/split",text:"Splits"},{to:"/utilities/stack",text:"Stacking"},{to:"/utilities/surfaces",text:"Surfaces"},{to:"/utilities/widths",text:"Widths"}],oP=[{to:"/forms/",text:"Introduction"},{to:"/forms/buttons",text:"Buttons"},{to:"/forms/checkboxes",text:"Checkboxes"},{to:"/forms/radio-buttons",text:"Radio Buttons"},{to:"/forms/select",text:"Select Inputs"},{to:"/forms/text",text:"Text Inputs"},{to:"/forms/textarea",text:"Text Area Inputs"},{to:"/forms/field",text:"Form Fields"},{to:"/forms/fieldset",text:"Form Field Sets"}],iP=[{to:"/components/alerts",text:"Alerts"},{to:"/components/details",text:"Details"},{to:"/components/icons",text:"SVG Icons"},{to:"/components/tables",text:"Tables"},{to:"/components/tooltips",text:"Tooltips"}],sP=()=>h("div",{children:[a(po,{title:"Getting Started",items:rP}),a(po,{title:"Colors",items:lP}),a(po,{title:"Utilities",items:aP}),a(po,{title:"Forms",items:oP}),a(po,{title:"Components",items:iP})]}),cP=()=>a("footer",{children:h("div",{className:"flex space",children:[h("div",{children:["© Copyright ",tP," Andy Wardley"]}),h("div",{children:["Version ",N3," ",L3]})]})});function dP(){const{pathname:e}=Da();return U.useEffect(()=>uP(document.getElementById("content")),[e]),null}function uP(e){e==null||e.scrollTo({top:0,left:0})}const hP=()=>{const{theme:e,variant:t}=xi(),n=[e,t].join(" ");return h("div",{id:"site",className:n,children:[a(nP,{}),h("div",{id:"app",children:[a(dP,{}),a("aside",{children:a(sP,{})}),a("main",{id:"content",children:a(Uk,{})})]}),a(cP,{})]})},fP=Object.assign({"../pages/colors/brand.jsx":l_,"../pages/colors/greyscale.jsx":b_,"../pages/colors/ranges.jsx":k_,"../pages/colors/variables.jsx":$_,"../pages/components/alerts.jsx":H_,"../pages/components/details.jsx":J_,"../pages/components/icons.jsx":s$,"../pages/components/tables.jsx":x$,"../pages/components/tooltips.jsx":_$,"../pages/decoder.jsx":I$,"../pages/demo/index.jsx":W$,"../pages/forms/buttons.jsx":X$,"../pages/forms/checkboxes.jsx":lT,"../pages/forms/field.jsx":vT,"../pages/forms/fieldset.jsx":wT,"../pages/forms/index.jsx":KN,"../pages/forms/radio-buttons.jsx":rL,"../pages/forms/select.jsx":cL,"../pages/forms/text.jsx":pL,"../pages/forms/textarea.jsx":yL,"../pages/getting-started/bad.jsx":wL,"../pages/getting-started/good.jsx":SL,"../pages/getting-started/installation.jsx":NL,"../pages/index.jsx":RL,"../pages/utilities/alignment.jsx":AL,"../pages/utilities/borders.jsx":KL,"../pages/utilities/colors.jsx":aI,"../pages/utilities/display.jsx":sI,"../pages/utilities/flexbox.jsx":yI,"../pages/utilities/font-styles.jsx":xI,"../pages/utilities/font-weights.jsx":TI,"../pages/utilities/fonts.jsx":FI,"../pages/utilities/grid.jsx":GI,"../pages/utilities/index.jsx":qI,"../pages/utilities/position.jsx":KI,"../pages/utilities/scrolling.jsx":tR,"../pages/utilities/shadows.jsx":aR,"../pages/utilities/sizes.jsx":uR,"../pages/utilities/spacing.jsx":yR,"../pages/utilities/split.jsx":_R,"../pages/utilities/stack.jsx":IR,"../pages/utilities/surfaces.jsx":OR,"../pages/utilities/widths.jsx":WR}),pP=Object.entries(fP).map(([e,t])=>({path:e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,""),Component:t.default})),gP=Zk([{path:"/",element:a(hP,{}),children:pP}],{basename:"/badger-css/"});tu.createRoot(document.getElementById("root")).render(a(Tt.StrictMode,{children:a(XR,{storageKey:"theme",children:a(Bk,{router:gP})})}));
