function i6(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const o=Object.getOwnPropertyDescriptor(r,l);o&&Object.defineProperty(e,l,o.get?o:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();var Ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var dm={exports:{}},pc={},um={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ci=Symbol.for("react.element"),s6=Symbol.for("react.portal"),c6=Symbol.for("react.fragment"),d6=Symbol.for("react.strict_mode"),u6=Symbol.for("react.profiler"),h6=Symbol.for("react.provider"),f6=Symbol.for("react.context"),p6=Symbol.for("react.forward_ref"),g6=Symbol.for("react.suspense"),m6=Symbol.for("react.memo"),v6=Symbol.for("react.lazy"),u0=Symbol.iterator;function y6(e){return e===null||typeof e!="object"?null:(e=u0&&e[u0]||e["@@iterator"],typeof e=="function"?e:null)}var hm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fm=Object.assign,pm={};function Pa(e,n,t){this.props=e,this.context=n,this.refs=pm,this.updater=t||hm}Pa.prototype.isReactComponent={};Pa.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Pa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gm(){}gm.prototype=Pa.prototype;function ph(e,n,t){this.props=e,this.context=n,this.refs=pm,this.updater=t||hm}var gh=ph.prototype=new gm;gh.constructor=ph;fm(gh,Pa.prototype);gh.isPureReactComponent=!0;var h0=Array.isArray,mm=Object.prototype.hasOwnProperty,mh={current:null},vm={key:!0,ref:!0,__self:!0,__source:!0};function ym(e,n,t){var r,l={},o=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)mm.call(n,r)&&!vm.hasOwnProperty(r)&&(l[r]=n[r]);var s=arguments.length-2;if(s===1)l.children=t;else if(1<s){for(var d=Array(s),h=0;h<s;h++)d[h]=arguments[h+2];l.children=d}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:ci,type:e,key:o,ref:i,props:l,_owner:mh.current}}function b6(e,n){return{$$typeof:ci,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function vh(e){return typeof e=="object"&&e!==null&&e.$$typeof===ci}function w6(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var f0=/\/+/g;function pd(e,n){return typeof e=="object"&&e!==null&&e.key!=null?w6(""+e.key):n.toString(36)}function ss(e,n,t,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ci:case s6:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+pd(i,0):r,h0(l)?(t="",e!=null&&(t=e.replace(f0,"$&/")+"/"),ss(l,n,t,"",function(h){return h})):l!=null&&(vh(l)&&(l=b6(l,t+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(f0,"$&/")+"/")+e)),n.push(l)),1;if(i=0,r=r===""?".":r+":",h0(e))for(var s=0;s<e.length;s++){o=e[s];var d=r+pd(o,s);i+=ss(o,n,t,d,l)}else if(d=y6(e),typeof d=="function")for(e=d.call(e),s=0;!(o=e.next()).done;)o=o.value,d=r+pd(o,s++),i+=ss(o,n,t,d,l);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function Ai(e,n,t){if(e==null)return e;var r=[],l=0;return ss(e,r,"","",function(o){return n.call(t,o,l++)}),r}function x6(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Wn={current:null},cs={transition:null},S6={ReactCurrentDispatcher:Wn,ReactCurrentBatchConfig:cs,ReactCurrentOwner:mh};ke.Children={map:Ai,forEach:function(e,n,t){Ai(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ai(e,function(){n++}),n},toArray:function(e){return Ai(e,function(n){return n})||[]},only:function(e){if(!vh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ke.Component=Pa;ke.Fragment=c6;ke.Profiler=u6;ke.PureComponent=ph;ke.StrictMode=d6;ke.Suspense=g6;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S6;ke.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fm({},e.props),l=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=mh.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(d in n)mm.call(n,d)&&!vm.hasOwnProperty(d)&&(r[d]=n[d]===void 0&&s!==void 0?s[d]:n[d])}var d=arguments.length-2;if(d===1)r.children=t;else if(1<d){s=Array(d);for(var h=0;h<d;h++)s[h]=arguments[h+2];r.children=s}return{$$typeof:ci,type:e.type,key:l,ref:o,props:r,_owner:i}};ke.createContext=function(e){return e={$$typeof:f6,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:h6,_context:e},e.Consumer=e};ke.createElement=ym;ke.createFactory=function(e){var n=ym.bind(null,e);return n.type=e,n};ke.createRef=function(){return{current:null}};ke.forwardRef=function(e){return{$$typeof:p6,render:e}};ke.isValidElement=vh;ke.lazy=function(e){return{$$typeof:v6,_payload:{_status:-1,_result:e},_init:x6}};ke.memo=function(e,n){return{$$typeof:m6,type:e,compare:n===void 0?null:n}};ke.startTransition=function(e){var n=cs.transition;cs.transition={};try{e()}finally{cs.transition=n}};ke.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ke.useCallback=function(e,n){return Wn.current.useCallback(e,n)};ke.useContext=function(e){return Wn.current.useContext(e)};ke.useDebugValue=function(){};ke.useDeferredValue=function(e){return Wn.current.useDeferredValue(e)};ke.useEffect=function(e,n){return Wn.current.useEffect(e,n)};ke.useId=function(){return Wn.current.useId()};ke.useImperativeHandle=function(e,n,t){return Wn.current.useImperativeHandle(e,n,t)};ke.useInsertionEffect=function(e,n){return Wn.current.useInsertionEffect(e,n)};ke.useLayoutEffect=function(e,n){return Wn.current.useLayoutEffect(e,n)};ke.useMemo=function(e,n){return Wn.current.useMemo(e,n)};ke.useReducer=function(e,n,t){return Wn.current.useReducer(e,n,t)};ke.useRef=function(e){return Wn.current.useRef(e)};ke.useState=function(e){return Wn.current.useState(e)};ke.useSyncExternalStore=function(e,n,t){return Wn.current.useSyncExternalStore(e,n,t)};ke.useTransition=function(){return Wn.current.useTransition()};ke.version="18.2.0";um.exports=ke;var U=um.exports;const Tn=Gr(U),p0=i6({__proto__:null,default:Tn},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C6=U,k6=Symbol.for("react.element"),_6=Symbol.for("react.fragment"),$6=Object.prototype.hasOwnProperty,E6=C6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T6={key:!0,ref:!0,__self:!0,__source:!0};function bm(e,n,t){var r,l={},o=null,i=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)$6.call(n,r)&&!T6.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:k6,type:e,key:o,ref:i,props:l,_owner:E6.current}}pc.Fragment=_6;pc.jsx=bm;pc.jsxs=bm;dm.exports=pc;var yh=dm.exports;const It=yh.Fragment,a=yh.jsx,f=yh.jsxs;var nu={},wm={exports:{}},gt={},xm={exports:{}},Sm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(j,Z){var J=j.length;j.push(Z);e:for(;0<J;){var ae=J-1>>>1,fe=j[ae];if(0<l(fe,Z))j[ae]=Z,j[J]=fe,J=ae;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var Z=j[0],J=j.pop();if(J!==Z){j[0]=J;e:for(var ae=0,fe=j.length,zn=fe>>>1;ae<zn;){var pe=2*(ae+1)-1,en=j[pe],Ye=pe+1,fn=j[Ye];if(0>l(en,J))Ye<fe&&0>l(fn,en)?(j[ae]=fn,j[Ye]=J,ae=Ye):(j[ae]=en,j[pe]=J,ae=pe);else if(Ye<fe&&0>l(fn,J))j[ae]=fn,j[Ye]=J,ae=Ye;else break e}}return Z}function l(j,Z){var J=j.sortIndex-Z.sortIndex;return J!==0?J:j.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var d=[],h=[],m=1,b=null,S=3,L=!1,N=!1,C=!1,I=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(j){for(var Z=t(h);Z!==null;){if(Z.callback===null)r(h);else if(Z.startTime<=j)r(h),Z.sortIndex=Z.expirationTime,n(d,Z);else break;Z=t(h)}}function v(j){if(C=!1,y(j),!N)if(t(d)!==null)N=!0,De(E);else{var Z=t(h);Z!==null&&Ge(v,Z.startTime-j)}}function E(j,Z){N=!1,C&&(C=!1,w(O),O=-1),L=!0;var J=S;try{for(y(Z),b=t(d);b!==null&&(!(b.expirationTime>Z)||j&&!he());){var ae=b.callback;if(typeof ae=="function"){b.callback=null,S=b.priorityLevel;var fe=ae(b.expirationTime<=Z);Z=e.unstable_now(),typeof fe=="function"?b.callback=fe:b===t(d)&&r(d),y(Z)}else r(d);b=t(d)}if(b!==null)var zn=!0;else{var pe=t(h);pe!==null&&Ge(v,pe.startTime-Z),zn=!1}return zn}finally{b=null,S=J,L=!1}}var _=!1,F=null,O=-1,B=5,q=-1;function he(){return!(e.unstable_now()-q<B)}function se(){if(F!==null){var j=e.unstable_now();q=j;var Z=!0;try{Z=F(!0,j)}finally{Z?Be():(_=!1,F=null)}}else _=!1}var Be;if(typeof g=="function")Be=function(){g(se)};else if(typeof MessageChannel<"u"){var ln=new MessageChannel,Ve=ln.port2;ln.port1.onmessage=se,Be=function(){Ve.postMessage(null)}}else Be=function(){I(se,0)};function De(j){F=j,_||(_=!0,Be())}function Ge(j,Z){O=I(function(){j(e.unstable_now())},Z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){N||L||(N=!0,De(E))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return S},e.unstable_getFirstCallbackNode=function(){return t(d)},e.unstable_next=function(j){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var J=S;S=Z;try{return j()}finally{S=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,Z){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var J=S;S=j;try{return Z()}finally{S=J}},e.unstable_scheduleCallback=function(j,Z,J){var ae=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ae+J:ae):J=ae,j){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=J+fe,j={id:m++,callback:Z,priorityLevel:j,startTime:J,expirationTime:fe,sortIndex:-1},J>ae?(j.sortIndex=J,n(h,j),t(d)===null&&j===t(h)&&(C?(w(O),O=-1):C=!0,Ge(v,J-ae))):(j.sortIndex=fe,n(d,j),N||L||(N=!0,De(E))),j},e.unstable_shouldYield=he,e.unstable_wrapCallback=function(j){var Z=S;return function(){var J=S;S=Z;try{return j.apply(this,arguments)}finally{S=J}}}})(Sm);xm.exports=Sm;var N6=xm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm=U,pt=N6;function Y(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var km=new Set,Do={};function Il(e,n){ka(e,n),ka(e+"Capture",n)}function ka(e,n){for(Do[e]=n,e=0;e<n.length;e++)km.add(n[e])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=Object.prototype.hasOwnProperty,L6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g0={},m0={};function I6(e){return tu.call(m0,e)?!0:tu.call(g0,e)?!1:L6.test(e)?m0[e]=!0:(g0[e]=!0,!1)}function R6(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P6(e,n,t,r){if(n===null||typeof n>"u"||R6(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Vn(e,n,t,r,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var In={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){In[e]=new Vn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];In[n]=new Vn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){In[e]=new Vn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){In[e]=new Vn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){In[e]=new Vn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){In[e]=new Vn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){In[e]=new Vn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){In[e]=new Vn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){In[e]=new Vn(e,5,!1,e.toLowerCase(),null,!1,!1)});var bh=/[\-:]([a-z])/g;function wh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(bh,wh);In[n]=new Vn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(bh,wh);In[n]=new Vn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(bh,wh);In[n]=new Vn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){In[e]=new Vn(e,1,!1,e.toLowerCase(),null,!1,!1)});In.xlinkHref=new Vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){In[e]=new Vn(e,1,!1,e.toLowerCase(),null,!0,!0)});function xh(e,n,t,r){var l=In.hasOwnProperty(n)?In[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(P6(n,t,l,r)&&(t=null),r||l===null?I6(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var vr=Cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Di=Symbol.for("react.element"),na=Symbol.for("react.portal"),ta=Symbol.for("react.fragment"),Sh=Symbol.for("react.strict_mode"),ru=Symbol.for("react.profiler"),_m=Symbol.for("react.provider"),$m=Symbol.for("react.context"),Ch=Symbol.for("react.forward_ref"),lu=Symbol.for("react.suspense"),au=Symbol.for("react.suspense_list"),kh=Symbol.for("react.memo"),Er=Symbol.for("react.lazy"),Em=Symbol.for("react.offscreen"),v0=Symbol.iterator;function to(e){return e===null||typeof e!="object"?null:(e=v0&&e[v0]||e["@@iterator"],typeof e=="function"?e:null)}var rn=Object.assign,gd;function go(e){if(gd===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);gd=n&&n[1]||""}return`
`+gd+e}var md=!1;function vd(e,n){if(!e||md)return"";md=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(h){var r=h}Reflect.construct(e,[],n)}else{try{n.call()}catch(h){r=h}e.call(n.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var l=h.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var d=`
`+l[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=s);break}}}finally{md=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?go(e):""}function F6(e){switch(e.tag){case 5:return go(e.type);case 16:return go("Lazy");case 13:return go("Suspense");case 19:return go("SuspenseList");case 0:case 2:case 15:return e=vd(e.type,!1),e;case 11:return e=vd(e.type.render,!1),e;case 1:return e=vd(e.type,!0),e;default:return""}}function ou(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ta:return"Fragment";case na:return"Portal";case ru:return"Profiler";case Sh:return"StrictMode";case lu:return"Suspense";case au:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $m:return(e.displayName||"Context")+".Consumer";case _m:return(e._context.displayName||"Context")+".Provider";case Ch:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case kh:return n=e.displayName||null,n!==null?n:ou(e.type)||"Memo";case Er:n=e._payload,e=e._init;try{return ou(e(n))}catch{}}return null}function M6(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ou(n);case 8:return n===Sh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Hr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tm(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function O6(e){var n=Tm(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function zi(e){e._valueTracker||(e._valueTracker=O6(e))}function Nm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Tm(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function iu(e,n){var t=n.checked;return rn({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function y0(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Hr(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Lm(e,n){n=n.checked,n!=null&&xh(e,"checked",n,!1)}function su(e,n){Lm(e,n);var t=Hr(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?cu(e,n.type,t):n.hasOwnProperty("defaultValue")&&cu(e,n.type,Hr(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function b0(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function cu(e,n,t){(n!=="number"||Rs(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var mo=Array.isArray;function ma(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Hr(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function du(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(Y(91));return rn({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function w0(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(Y(92));if(mo(t)){if(1<t.length)throw Error(Y(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Hr(t)}}function Im(e,n){var t=Hr(n.value),r=Hr(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function x0(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Rm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uu(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Rm(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bi,Pm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Bi=Bi||document.createElement("div"),Bi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Bi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function zo(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var _o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},A6=["Webkit","ms","Moz","O"];Object.keys(_o).forEach(function(e){A6.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),_o[n]=_o[e]})});function Fm(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||_o.hasOwnProperty(e)&&_o[e]?(""+n).trim():n+"px"}function Mm(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=Fm(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var D6=rn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hu(e,n){if(n){if(D6[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(Y(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(Y(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(Y(61))}if(n.style!=null&&typeof n.style!="object")throw Error(Y(62))}}function fu(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pu=null;function _h(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gu=null,va=null,ya=null;function S0(e){if(e=hi(e)){if(typeof gu!="function")throw Error(Y(280));var n=e.stateNode;n&&(n=bc(n),gu(e.stateNode,e.type,n))}}function Om(e){va?ya?ya.push(e):ya=[e]:va=e}function Am(){if(va){var e=va,n=ya;if(ya=va=null,S0(e),n)for(e=0;e<n.length;e++)S0(n[e])}}function Dm(e,n){return e(n)}function zm(){}var yd=!1;function Bm(e,n,t){if(yd)return e(n,t);yd=!0;try{return Dm(e,n,t)}finally{yd=!1,(va!==null||ya!==null)&&(zm(),Am())}}function Bo(e,n){var t=e.stateNode;if(t===null)return null;var r=bc(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(Y(231,n,typeof t));return t}var mu=!1;if(ur)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){mu=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{mu=!1}function z6(e,n,t,r,l,o,i,s,d){var h=Array.prototype.slice.call(arguments,3);try{n.apply(t,h)}catch(m){this.onError(m)}}var $o=!1,Ps=null,Fs=!1,vu=null,B6={onError:function(e){$o=!0,Ps=e}};function j6(e,n,t,r,l,o,i,s,d){$o=!1,Ps=null,z6.apply(B6,arguments)}function U6(e,n,t,r,l,o,i,s,d){if(j6.apply(this,arguments),$o){if($o){var h=Ps;$o=!1,Ps=null}else throw Error(Y(198));Fs||(Fs=!0,vu=h)}}function Rl(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function jm(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function C0(e){if(Rl(e)!==e)throw Error(Y(188))}function H6(e){var n=e.alternate;if(!n){if(n=Rl(e),n===null)throw Error(Y(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return C0(l),e;if(o===r)return C0(l),n;o=o.sibling}throw Error(Y(188))}if(t.return!==r.return)t=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===t){i=!0,t=l,r=o;break}if(s===r){i=!0,r=l,t=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===t){i=!0,t=o,r=l;break}if(s===r){i=!0,r=o,t=l;break}s=s.sibling}if(!i)throw Error(Y(189))}}if(t.alternate!==r)throw Error(Y(190))}if(t.tag!==3)throw Error(Y(188));return t.stateNode.current===t?e:n}function Um(e){return e=H6(e),e!==null?Hm(e):null}function Hm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Hm(e);if(n!==null)return n;e=e.sibling}return null}var Wm=pt.unstable_scheduleCallback,k0=pt.unstable_cancelCallback,W6=pt.unstable_shouldYield,V6=pt.unstable_requestPaint,on=pt.unstable_now,G6=pt.unstable_getCurrentPriorityLevel,$h=pt.unstable_ImmediatePriority,Vm=pt.unstable_UserBlockingPriority,Ms=pt.unstable_NormalPriority,Y6=pt.unstable_LowPriority,Gm=pt.unstable_IdlePriority,gc=null,qt=null;function q6(e){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(gc,e,void 0,(e.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:K6,Z6=Math.log,Q6=Math.LN2;function K6(e){return e>>>=0,e===0?32:31-(Z6(e)/Q6|0)|0}var ji=64,Ui=4194304;function vo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Os(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var s=i&~l;s!==0?r=vo(s):(o&=i,o!==0&&(r=vo(o)))}else i=t&~l,i!==0?r=vo(i):o!==0&&(r=vo(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,o=n&-n,l>=o||l===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-At(n),l=1<<t,r|=e[t],n&=~l;return r}function X6(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function J6(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-At(o),s=1<<i,d=l[i];d===-1?(!(s&t)||s&r)&&(l[i]=X6(s,n)):d<=n&&(e.expiredLanes|=s),o&=~s}}function yu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ym(){var e=ji;return ji<<=1,!(ji&4194240)&&(ji=64),e}function bd(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function di(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-At(n),e[n]=t}function ew(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-At(t),o=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~o}}function Eh(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-At(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var Ae=0;function qm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zm,Th,Qm,Km,Xm,bu=!1,Hi=[],Mr=null,Or=null,Ar=null,jo=new Map,Uo=new Map,Nr=[],nw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _0(e,n){switch(e){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":jo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(n.pointerId)}}function lo(e,n,t,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},n!==null&&(n=hi(n),n!==null&&Th(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function tw(e,n,t,r,l){switch(n){case"focusin":return Mr=lo(Mr,e,n,t,r,l),!0;case"dragenter":return Or=lo(Or,e,n,t,r,l),!0;case"mouseover":return Ar=lo(Ar,e,n,t,r,l),!0;case"pointerover":var o=l.pointerId;return jo.set(o,lo(jo.get(o)||null,e,n,t,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Uo.set(o,lo(Uo.get(o)||null,e,n,t,r,l)),!0}return!1}function Jm(e){var n=ml(e.target);if(n!==null){var t=Rl(n);if(t!==null){if(n=t.tag,n===13){if(n=jm(t),n!==null){e.blockedOn=n,Xm(e.priority,function(){Qm(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ds(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=wu(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);pu=r,t.target.dispatchEvent(r),pu=null}else return n=hi(t),n!==null&&Th(n),e.blockedOn=t,!1;n.shift()}return!0}function $0(e,n,t){ds(e)&&t.delete(n)}function rw(){bu=!1,Mr!==null&&ds(Mr)&&(Mr=null),Or!==null&&ds(Or)&&(Or=null),Ar!==null&&ds(Ar)&&(Ar=null),jo.forEach($0),Uo.forEach($0)}function ao(e,n){e.blockedOn===n&&(e.blockedOn=null,bu||(bu=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,rw)))}function Ho(e){function n(l){return ao(l,e)}if(0<Hi.length){ao(Hi[0],e);for(var t=1;t<Hi.length;t++){var r=Hi[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Mr!==null&&ao(Mr,e),Or!==null&&ao(Or,e),Ar!==null&&ao(Ar,e),jo.forEach(n),Uo.forEach(n),t=0;t<Nr.length;t++)r=Nr[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nr.length&&(t=Nr[0],t.blockedOn===null);)Jm(t),t.blockedOn===null&&Nr.shift()}var ba=vr.ReactCurrentBatchConfig,As=!0;function lw(e,n,t,r){var l=Ae,o=ba.transition;ba.transition=null;try{Ae=1,Nh(e,n,t,r)}finally{Ae=l,ba.transition=o}}function aw(e,n,t,r){var l=Ae,o=ba.transition;ba.transition=null;try{Ae=4,Nh(e,n,t,r)}finally{Ae=l,ba.transition=o}}function Nh(e,n,t,r){if(As){var l=wu(e,n,t,r);if(l===null)Nd(e,n,r,Ds,t),_0(e,r);else if(tw(l,e,n,t,r))r.stopPropagation();else if(_0(e,r),n&4&&-1<nw.indexOf(e)){for(;l!==null;){var o=hi(l);if(o!==null&&Zm(o),o=wu(e,n,t,r),o===null&&Nd(e,n,r,Ds,t),o===l)break;l=o}l!==null&&r.stopPropagation()}else Nd(e,n,r,null,t)}}var Ds=null;function wu(e,n,t,r){if(Ds=null,e=_h(r),e=ml(e),e!==null)if(n=Rl(e),n===null)e=null;else if(t=n.tag,t===13){if(e=jm(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ds=e,null}function ev(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(G6()){case $h:return 1;case Vm:return 4;case Ms:case Y6:return 16;case Gm:return 536870912;default:return 16}default:return 16}}var Ir=null,Lh=null,us=null;function nv(){if(us)return us;var e,n=Lh,t=n.length,r,l="value"in Ir?Ir.value:Ir.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===l[o-r];r++);return us=l.slice(e,1<r?1-r:void 0)}function hs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Wi(){return!0}function E0(){return!1}function mt(e){function n(t,r,l,o,i){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Wi:E0,this.isPropagationStopped=E0,this}return rn(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Wi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Wi)},persist:function(){},isPersistent:Wi}),n}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ih=mt(Fa),ui=rn({},Fa,{view:0,detail:0}),ow=mt(ui),wd,xd,oo,mc=rn({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(wd=e.screenX-oo.screenX,xd=e.screenY-oo.screenY):xd=wd=0,oo=e),wd)},movementY:function(e){return"movementY"in e?e.movementY:xd}}),T0=mt(mc),iw=rn({},mc,{dataTransfer:0}),sw=mt(iw),cw=rn({},ui,{relatedTarget:0}),Sd=mt(cw),dw=rn({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),uw=mt(dw),hw=rn({},Fa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fw=mt(hw),pw=rn({},Fa,{data:0}),N0=mt(pw),gw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yw(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=vw[e])?!!n[e]:!1}function Rh(){return yw}var bw=rn({},ui,{key:function(e){if(e.key){var n=gw[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rh,charCode:function(e){return e.type==="keypress"?hs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ww=mt(bw),xw=rn({},mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),L0=mt(xw),Sw=rn({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rh}),Cw=mt(Sw),kw=rn({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),_w=mt(kw),$w=rn({},mc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ew=mt($w),Tw=[9,13,27,32],Ph=ur&&"CompositionEvent"in window,Eo=null;ur&&"documentMode"in document&&(Eo=document.documentMode);var Nw=ur&&"TextEvent"in window&&!Eo,tv=ur&&(!Ph||Eo&&8<Eo&&11>=Eo),I0=String.fromCharCode(32),R0=!1;function rv(e,n){switch(e){case"keyup":return Tw.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ra=!1;function Lw(e,n){switch(e){case"compositionend":return lv(n);case"keypress":return n.which!==32?null:(R0=!0,I0);case"textInput":return e=n.data,e===I0&&R0?null:e;default:return null}}function Iw(e,n){if(ra)return e==="compositionend"||!Ph&&rv(e,n)?(e=nv(),us=Lh=Ir=null,ra=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tv&&n.locale!=="ko"?null:n.data;default:return null}}var Rw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function P0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Rw[e.type]:n==="textarea"}function av(e,n,t,r){Om(r),n=zs(n,"onChange"),0<n.length&&(t=new Ih("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var To=null,Wo=null;function Pw(e){mv(e,0)}function vc(e){var n=oa(e);if(Nm(n))return e}function Fw(e,n){if(e==="change")return n}var ov=!1;if(ur){var Cd;if(ur){var kd="oninput"in document;if(!kd){var F0=document.createElement("div");F0.setAttribute("oninput","return;"),kd=typeof F0.oninput=="function"}Cd=kd}else Cd=!1;ov=Cd&&(!document.documentMode||9<document.documentMode)}function M0(){To&&(To.detachEvent("onpropertychange",iv),Wo=To=null)}function iv(e){if(e.propertyName==="value"&&vc(Wo)){var n=[];av(n,Wo,e,_h(e)),Bm(Pw,n)}}function Mw(e,n,t){e==="focusin"?(M0(),To=n,Wo=t,To.attachEvent("onpropertychange",iv)):e==="focusout"&&M0()}function Ow(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vc(Wo)}function Aw(e,n){if(e==="click")return vc(n)}function Dw(e,n){if(e==="input"||e==="change")return vc(n)}function zw(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var zt=typeof Object.is=="function"?Object.is:zw;function Vo(e,n){if(zt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!tu.call(n,l)||!zt(e[l],n[l]))return!1}return!0}function O0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function A0(e,n){var t=O0(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=O0(t)}}function sv(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?sv(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function cv(){for(var e=window,n=Rs();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Rs(e.document)}return n}function Fh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Bw(e){var n=cv(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&sv(t.ownerDocument.documentElement,t)){if(r!==null&&Fh(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=A0(t,o);var i=A0(t,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jw=ur&&"documentMode"in document&&11>=document.documentMode,la=null,xu=null,No=null,Su=!1;function D0(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Su||la==null||la!==Rs(r)||(r=la,"selectionStart"in r&&Fh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),No&&Vo(No,r)||(No=r,r=zs(xu,"onSelect"),0<r.length&&(n=new Ih("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=la)))}function Vi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var aa={animationend:Vi("Animation","AnimationEnd"),animationiteration:Vi("Animation","AnimationIteration"),animationstart:Vi("Animation","AnimationStart"),transitionend:Vi("Transition","TransitionEnd")},_d={},dv={};ur&&(dv=document.createElement("div").style,"AnimationEvent"in window||(delete aa.animationend.animation,delete aa.animationiteration.animation,delete aa.animationstart.animation),"TransitionEvent"in window||delete aa.transitionend.transition);function yc(e){if(_d[e])return _d[e];if(!aa[e])return e;var n=aa[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in dv)return _d[e]=n[t];return e}var uv=yc("animationend"),hv=yc("animationiteration"),fv=yc("animationstart"),pv=yc("transitionend"),gv=new Map,z0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(e,n){gv.set(e,n),Il(n,[e])}for(var $d=0;$d<z0.length;$d++){var Ed=z0[$d],Uw=Ed.toLowerCase(),Hw=Ed[0].toUpperCase()+Ed.slice(1);Yr(Uw,"on"+Hw)}Yr(uv,"onAnimationEnd");Yr(hv,"onAnimationIteration");Yr(fv,"onAnimationStart");Yr("dblclick","onDoubleClick");Yr("focusin","onFocus");Yr("focusout","onBlur");Yr(pv,"onTransitionEnd");ka("onMouseEnter",["mouseout","mouseover"]);ka("onMouseLeave",["mouseout","mouseover"]);ka("onPointerEnter",["pointerout","pointerover"]);ka("onPointerLeave",["pointerout","pointerover"]);Il("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Il("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Il("onBeforeInput",["compositionend","keypress","textInput","paste"]);Il("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Il("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Il("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ww=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function B0(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,U6(r,n,void 0,e),e.currentTarget=null}function mv(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var s=r[i],d=s.instance,h=s.currentTarget;if(s=s.listener,d!==o&&l.isPropagationStopped())break e;B0(l,s,h),o=d}else for(i=0;i<r.length;i++){if(s=r[i],d=s.instance,h=s.currentTarget,s=s.listener,d!==o&&l.isPropagationStopped())break e;B0(l,s,h),o=d}}}if(Fs)throw e=vu,Fs=!1,vu=null,e}function Ze(e,n){var t=n[Eu];t===void 0&&(t=n[Eu]=new Set);var r=e+"__bubble";t.has(r)||(vv(n,e,2,!1),t.add(r))}function Td(e,n,t){var r=0;n&&(r|=4),vv(t,e,r,n)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function Go(e){if(!e[Gi]){e[Gi]=!0,km.forEach(function(t){t!=="selectionchange"&&(Ww.has(t)||Td(t,!1,e),Td(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Gi]||(n[Gi]=!0,Td("selectionchange",!1,n))}}function vv(e,n,t,r){switch(ev(n)){case 1:var l=lw;break;case 4:l=aw;break;default:l=Nh}t=l.bind(null,n,t,e),l=void 0,!mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Nd(e,n,t,r,l){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var d=i.tag;if((d===3||d===4)&&(d=i.stateNode.containerInfo,d===l||d.nodeType===8&&d.parentNode===l))return;i=i.return}for(;s!==null;){if(i=ml(s),i===null)return;if(d=i.tag,d===5||d===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Bm(function(){var h=o,m=_h(t),b=[];e:{var S=gv.get(e);if(S!==void 0){var L=Ih,N=e;switch(e){case"keypress":if(hs(t)===0)break e;case"keydown":case"keyup":L=ww;break;case"focusin":N="focus",L=Sd;break;case"focusout":N="blur",L=Sd;break;case"beforeblur":case"afterblur":L=Sd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=T0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=sw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Cw;break;case uv:case hv:case fv:L=uw;break;case pv:L=_w;break;case"scroll":L=ow;break;case"wheel":L=Ew;break;case"copy":case"cut":case"paste":L=fw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=L0}var C=(n&4)!==0,I=!C&&e==="scroll",w=C?S!==null?S+"Capture":null:S;C=[];for(var g=h,y;g!==null;){y=g;var v=y.stateNode;if(y.tag===5&&v!==null&&(y=v,w!==null&&(v=Bo(g,w),v!=null&&C.push(Yo(g,v,y)))),I)break;g=g.return}0<C.length&&(S=new L(S,N,null,t,m),b.push({event:S,listeners:C}))}}if(!(n&7)){e:{if(S=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",S&&t!==pu&&(N=t.relatedTarget||t.fromElement)&&(ml(N)||N[hr]))break e;if((L||S)&&(S=m.window===m?m:(S=m.ownerDocument)?S.defaultView||S.parentWindow:window,L?(N=t.relatedTarget||t.toElement,L=h,N=N?ml(N):null,N!==null&&(I=Rl(N),N!==I||N.tag!==5&&N.tag!==6)&&(N=null)):(L=null,N=h),L!==N)){if(C=T0,v="onMouseLeave",w="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(C=L0,v="onPointerLeave",w="onPointerEnter",g="pointer"),I=L==null?S:oa(L),y=N==null?S:oa(N),S=new C(v,g+"leave",L,t,m),S.target=I,S.relatedTarget=y,v=null,ml(m)===h&&(C=new C(w,g+"enter",N,t,m),C.target=y,C.relatedTarget=I,v=C),I=v,L&&N)n:{for(C=L,w=N,g=0,y=C;y;y=Ql(y))g++;for(y=0,v=w;v;v=Ql(v))y++;for(;0<g-y;)C=Ql(C),g--;for(;0<y-g;)w=Ql(w),y--;for(;g--;){if(C===w||w!==null&&C===w.alternate)break n;C=Ql(C),w=Ql(w)}C=null}else C=null;L!==null&&j0(b,S,L,C,!1),N!==null&&I!==null&&j0(b,I,N,C,!0)}}e:{if(S=h?oa(h):window,L=S.nodeName&&S.nodeName.toLowerCase(),L==="select"||L==="input"&&S.type==="file")var E=Fw;else if(P0(S))if(ov)E=Dw;else{E=Ow;var _=Mw}else(L=S.nodeName)&&L.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(E=Aw);if(E&&(E=E(e,h))){av(b,E,t,m);break e}_&&_(e,S,h),e==="focusout"&&(_=S._wrapperState)&&_.controlled&&S.type==="number"&&cu(S,"number",S.value)}switch(_=h?oa(h):window,e){case"focusin":(P0(_)||_.contentEditable==="true")&&(la=_,xu=h,No=null);break;case"focusout":No=xu=la=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,D0(b,t,m);break;case"selectionchange":if(jw)break;case"keydown":case"keyup":D0(b,t,m)}var F;if(Ph)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ra?rv(e,t)&&(O="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(O="onCompositionStart");O&&(tv&&t.locale!=="ko"&&(ra||O!=="onCompositionStart"?O==="onCompositionEnd"&&ra&&(F=nv()):(Ir=m,Lh="value"in Ir?Ir.value:Ir.textContent,ra=!0)),_=zs(h,O),0<_.length&&(O=new N0(O,e,null,t,m),b.push({event:O,listeners:_}),F?O.data=F:(F=lv(t),F!==null&&(O.data=F)))),(F=Nw?Lw(e,t):Iw(e,t))&&(h=zs(h,"onBeforeInput"),0<h.length&&(m=new N0("onBeforeInput","beforeinput",null,t,m),b.push({event:m,listeners:h}),m.data=F))}mv(b,n)})}function Yo(e,n,t){return{instance:e,listener:n,currentTarget:t}}function zs(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Bo(e,t),o!=null&&r.unshift(Yo(e,o,l)),o=Bo(e,n),o!=null&&r.push(Yo(e,o,l))),e=e.return}return r}function Ql(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function j0(e,n,t,r,l){for(var o=n._reactName,i=[];t!==null&&t!==r;){var s=t,d=s.alternate,h=s.stateNode;if(d!==null&&d===r)break;s.tag===5&&h!==null&&(s=h,l?(d=Bo(t,o),d!=null&&i.unshift(Yo(t,d,s))):l||(d=Bo(t,o),d!=null&&i.push(Yo(t,d,s)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Vw=/\r\n?/g,Gw=/\u0000|\uFFFD/g;function U0(e){return(typeof e=="string"?e:""+e).replace(Vw,`
`).replace(Gw,"")}function Yi(e,n,t){if(n=U0(n),U0(e)!==n&&t)throw Error(Y(425))}function Bs(){}var Cu=null,ku=null;function _u(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $u=typeof setTimeout=="function"?setTimeout:void 0,Yw=typeof clearTimeout=="function"?clearTimeout:void 0,H0=typeof Promise=="function"?Promise:void 0,qw=typeof queueMicrotask=="function"?queueMicrotask:typeof H0<"u"?function(e){return H0.resolve(null).then(e).catch(Zw)}:$u;function Zw(e){setTimeout(function(){throw e})}function Ld(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Ho(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Ho(n)}function Dr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function W0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Ma=Math.random().toString(36).slice(2),Yt="__reactFiber$"+Ma,qo="__reactProps$"+Ma,hr="__reactContainer$"+Ma,Eu="__reactEvents$"+Ma,Qw="__reactListeners$"+Ma,Kw="__reactHandles$"+Ma;function ml(e){var n=e[Yt];if(n)return n;for(var t=e.parentNode;t;){if(n=t[hr]||t[Yt]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=W0(e);e!==null;){if(t=e[Yt])return t;e=W0(e)}return n}e=t,t=e.parentNode}return null}function hi(e){return e=e[Yt]||e[hr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function oa(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Y(33))}function bc(e){return e[qo]||null}var Tu=[],ia=-1;function qr(e){return{current:e}}function Ke(e){0>ia||(e.current=Tu[ia],Tu[ia]=null,ia--)}function We(e,n){ia++,Tu[ia]=e.current,e.current=n}var Wr={},Dn=qr(Wr),nt=qr(!1),_l=Wr;function _a(e,n){var t=e.type.contextTypes;if(!t)return Wr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in t)l[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function tt(e){return e=e.childContextTypes,e!=null}function js(){Ke(nt),Ke(Dn)}function V0(e,n,t){if(Dn.current!==Wr)throw Error(Y(168));We(Dn,n),We(nt,t)}function yv(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(Y(108,M6(e)||"Unknown",l));return rn({},t,r)}function Us(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wr,_l=Dn.current,We(Dn,e),We(nt,nt.current),!0}function G0(e,n,t){var r=e.stateNode;if(!r)throw Error(Y(169));t?(e=yv(e,n,_l),r.__reactInternalMemoizedMergedChildContext=e,Ke(nt),Ke(Dn),We(Dn,e)):Ke(nt),We(nt,t)}var or=null,wc=!1,Id=!1;function bv(e){or===null?or=[e]:or.push(e)}function Xw(e){wc=!0,bv(e)}function Zr(){if(!Id&&or!==null){Id=!0;var e=0,n=Ae;try{var t=or;for(Ae=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}or=null,wc=!1}catch(l){throw or!==null&&(or=or.slice(e+1)),Wm($h,Zr),l}finally{Ae=n,Id=!1}}return null}var sa=[],ca=0,Hs=null,Ws=0,bt=[],wt=0,$l=null,ir=1,sr="";function ul(e,n){sa[ca++]=Ws,sa[ca++]=Hs,Hs=e,Ws=n}function wv(e,n,t){bt[wt++]=ir,bt[wt++]=sr,bt[wt++]=$l,$l=e;var r=ir;e=sr;var l=32-At(r)-1;r&=~(1<<l),t+=1;var o=32-At(n)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,ir=1<<32-At(n)+l|t<<l|r,sr=o+e}else ir=1<<o|t<<l|r,sr=e}function Mh(e){e.return!==null&&(ul(e,1),wv(e,1,0))}function Oh(e){for(;e===Hs;)Hs=sa[--ca],sa[ca]=null,Ws=sa[--ca],sa[ca]=null;for(;e===$l;)$l=bt[--wt],bt[wt]=null,sr=bt[--wt],bt[wt]=null,ir=bt[--wt],bt[wt]=null}var ft=null,ht=null,Xe=!1,Mt=null;function xv(e,n){var t=xt(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Y0(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ft=e,ht=Dr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ft=e,ht=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=$l!==null?{id:ir,overflow:sr}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=xt(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ft=e,ht=null,!0):!1;default:return!1}}function Nu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Lu(e){if(Xe){var n=ht;if(n){var t=n;if(!Y0(e,n)){if(Nu(e))throw Error(Y(418));n=Dr(t.nextSibling);var r=ft;n&&Y0(e,n)?xv(r,t):(e.flags=e.flags&-4097|2,Xe=!1,ft=e)}}else{if(Nu(e))throw Error(Y(418));e.flags=e.flags&-4097|2,Xe=!1,ft=e}}}function q0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ft=e}function qi(e){if(e!==ft)return!1;if(!Xe)return q0(e),Xe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!_u(e.type,e.memoizedProps)),n&&(n=ht)){if(Nu(e))throw Sv(),Error(Y(418));for(;n;)xv(e,n),n=Dr(n.nextSibling)}if(q0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ht=Dr(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ht=null}}else ht=ft?Dr(e.stateNode.nextSibling):null;return!0}function Sv(){for(var e=ht;e;)e=Dr(e.nextSibling)}function $a(){ht=ft=null,Xe=!1}function Ah(e){Mt===null?Mt=[e]:Mt.push(e)}var Jw=vr.ReactCurrentBatchConfig;function Rt(e,n){if(e&&e.defaultProps){n=rn({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Vs=qr(null),Gs=null,da=null,Dh=null;function zh(){Dh=da=Gs=null}function Bh(e){var n=Vs.current;Ke(Vs),e._currentValue=n}function Iu(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function wa(e,n){Gs=e,Dh=da=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(et=!0),e.firstContext=null)}function Ct(e){var n=e._currentValue;if(Dh!==e)if(e={context:e,memoizedValue:n,next:null},da===null){if(Gs===null)throw Error(Y(308));da=e,Gs.dependencies={lanes:0,firstContext:e}}else da=da.next=e;return n}var vl=null;function jh(e){vl===null?vl=[e]:vl.push(e)}function Cv(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,jh(n)):(t.next=l.next,l.next=t),n.interleaved=t,fr(e,r)}function fr(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Tr=!1;function Uh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kv(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function cr(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function zr(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ne&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,fr(e,t)}return l=r.interleaved,l===null?(n.next=n,jh(r)):(n.next=l.next,l.next=n),r.interleaved=n,fr(e,t)}function fs(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Eh(e,t)}}function Z0(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?l=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ys(e,n,t,r){var l=e.updateQueue;Tr=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var d=s,h=d.next;d.next=null,i===null?o=h:i.next=h,i=d;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==i&&(s===null?m.firstBaseUpdate=h:s.next=h,m.lastBaseUpdate=d))}if(o!==null){var b=l.baseState;i=0,m=h=d=null,s=o;do{var S=s.lane,L=s.eventTime;if((r&S)===S){m!==null&&(m=m.next={eventTime:L,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var N=e,C=s;switch(S=n,L=t,C.tag){case 1:if(N=C.payload,typeof N=="function"){b=N.call(L,b,S);break e}b=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=C.payload,S=typeof N=="function"?N.call(L,b,S):N,S==null)break e;b=rn({},b,S);break e;case 2:Tr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,S=l.effects,S===null?l.effects=[s]:S.push(s))}else L={eventTime:L,lane:S,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(h=m=L,d=b):m=m.next=L,i|=S;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;S=s,s=S.next,S.next=null,l.lastBaseUpdate=S,l.shared.pending=null}}while(1);if(m===null&&(d=b),l.baseState=d,l.firstBaseUpdate=h,l.lastBaseUpdate=m,n=l.shared.interleaved,n!==null){l=n;do i|=l.lane,l=l.next;while(l!==n)}else o===null&&(l.shared.lanes=0);Tl|=i,e.lanes=i,e.memoizedState=b}}function Q0(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(Y(191,l));l.call(r)}}}var _v=new Cm.Component().refs;function Ru(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:rn({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var xc={isMounted:function(e){return(e=e._reactInternals)?Rl(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Hn(),l=jr(e),o=cr(r,l);o.payload=n,t!=null&&(o.callback=t),n=zr(e,o,l),n!==null&&(Dt(n,e,l,r),fs(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Hn(),l=jr(e),o=cr(r,l);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=zr(e,o,l),n!==null&&(Dt(n,e,l,r),fs(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Hn(),r=jr(e),l=cr(t,r);l.tag=2,n!=null&&(l.callback=n),n=zr(e,l,r),n!==null&&(Dt(n,e,r,t),fs(n,e,r))}};function K0(e,n,t,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!Vo(t,r)||!Vo(l,o):!0}function $v(e,n,t){var r=!1,l=Wr,o=n.contextType;return typeof o=="object"&&o!==null?o=Ct(o):(l=tt(n)?_l:Dn.current,r=n.contextTypes,o=(r=r!=null)?_a(e,l):Wr),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=xc,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),n}function X0(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&xc.enqueueReplaceState(n,n.state,null)}function Pu(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs=_v,Uh(e);var o=n.contextType;typeof o=="object"&&o!==null?l.context=Ct(o):(o=tt(n)?_l:Dn.current,l.context=_a(e,o)),l.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Ru(e,n,o,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&xc.enqueueReplaceState(l,l.state,null),Ys(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function io(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Y(309));var r=t.stateNode}if(!r)throw Error(Y(147,e));var l=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var s=l.refs;s===_v&&(s=l.refs={}),i===null?delete s[o]:s[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(Y(284));if(!t._owner)throw Error(Y(290,e))}return e}function Zi(e,n){throw e=Object.prototype.toString.call(n),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function J0(e){var n=e._init;return n(e._payload)}function Ev(e){function n(w,g){if(e){var y=w.deletions;y===null?(w.deletions=[g],w.flags|=16):y.push(g)}}function t(w,g){if(!e)return null;for(;g!==null;)n(w,g),g=g.sibling;return null}function r(w,g){for(w=new Map;g!==null;)g.key!==null?w.set(g.key,g):w.set(g.index,g),g=g.sibling;return w}function l(w,g){return w=Ur(w,g),w.index=0,w.sibling=null,w}function o(w,g,y){return w.index=y,e?(y=w.alternate,y!==null?(y=y.index,y<g?(w.flags|=2,g):y):(w.flags|=2,g)):(w.flags|=1048576,g)}function i(w){return e&&w.alternate===null&&(w.flags|=2),w}function s(w,g,y,v){return g===null||g.tag!==6?(g=Dd(y,w.mode,v),g.return=w,g):(g=l(g,y),g.return=w,g)}function d(w,g,y,v){var E=y.type;return E===ta?m(w,g,y.props.children,v,y.key):g!==null&&(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Er&&J0(E)===g.type)?(v=l(g,y.props),v.ref=io(w,g,y),v.return=w,v):(v=bs(y.type,y.key,y.props,null,w.mode,v),v.ref=io(w,g,y),v.return=w,v)}function h(w,g,y,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=zd(y,w.mode,v),g.return=w,g):(g=l(g,y.children||[]),g.return=w,g)}function m(w,g,y,v,E){return g===null||g.tag!==7?(g=kl(y,w.mode,v,E),g.return=w,g):(g=l(g,y),g.return=w,g)}function b(w,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Dd(""+g,w.mode,y),g.return=w,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Di:return y=bs(g.type,g.key,g.props,null,w.mode,y),y.ref=io(w,null,g),y.return=w,y;case na:return g=zd(g,w.mode,y),g.return=w,g;case Er:var v=g._init;return b(w,v(g._payload),y)}if(mo(g)||to(g))return g=kl(g,w.mode,y,null),g.return=w,g;Zi(w,g)}return null}function S(w,g,y,v){var E=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:s(w,g,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Di:return y.key===E?d(w,g,y,v):null;case na:return y.key===E?h(w,g,y,v):null;case Er:return E=y._init,S(w,g,E(y._payload),v)}if(mo(y)||to(y))return E!==null?null:m(w,g,y,v,null);Zi(w,y)}return null}function L(w,g,y,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return w=w.get(y)||null,s(g,w,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Di:return w=w.get(v.key===null?y:v.key)||null,d(g,w,v,E);case na:return w=w.get(v.key===null?y:v.key)||null,h(g,w,v,E);case Er:var _=v._init;return L(w,g,y,_(v._payload),E)}if(mo(v)||to(v))return w=w.get(y)||null,m(g,w,v,E,null);Zi(g,v)}return null}function N(w,g,y,v){for(var E=null,_=null,F=g,O=g=0,B=null;F!==null&&O<y.length;O++){F.index>O?(B=F,F=null):B=F.sibling;var q=S(w,F,y[O],v);if(q===null){F===null&&(F=B);break}e&&F&&q.alternate===null&&n(w,F),g=o(q,g,O),_===null?E=q:_.sibling=q,_=q,F=B}if(O===y.length)return t(w,F),Xe&&ul(w,O),E;if(F===null){for(;O<y.length;O++)F=b(w,y[O],v),F!==null&&(g=o(F,g,O),_===null?E=F:_.sibling=F,_=F);return Xe&&ul(w,O),E}for(F=r(w,F);O<y.length;O++)B=L(F,w,O,y[O],v),B!==null&&(e&&B.alternate!==null&&F.delete(B.key===null?O:B.key),g=o(B,g,O),_===null?E=B:_.sibling=B,_=B);return e&&F.forEach(function(he){return n(w,he)}),Xe&&ul(w,O),E}function C(w,g,y,v){var E=to(y);if(typeof E!="function")throw Error(Y(150));if(y=E.call(y),y==null)throw Error(Y(151));for(var _=E=null,F=g,O=g=0,B=null,q=y.next();F!==null&&!q.done;O++,q=y.next()){F.index>O?(B=F,F=null):B=F.sibling;var he=S(w,F,q.value,v);if(he===null){F===null&&(F=B);break}e&&F&&he.alternate===null&&n(w,F),g=o(he,g,O),_===null?E=he:_.sibling=he,_=he,F=B}if(q.done)return t(w,F),Xe&&ul(w,O),E;if(F===null){for(;!q.done;O++,q=y.next())q=b(w,q.value,v),q!==null&&(g=o(q,g,O),_===null?E=q:_.sibling=q,_=q);return Xe&&ul(w,O),E}for(F=r(w,F);!q.done;O++,q=y.next())q=L(F,w,O,q.value,v),q!==null&&(e&&q.alternate!==null&&F.delete(q.key===null?O:q.key),g=o(q,g,O),_===null?E=q:_.sibling=q,_=q);return e&&F.forEach(function(se){return n(w,se)}),Xe&&ul(w,O),E}function I(w,g,y,v){if(typeof y=="object"&&y!==null&&y.type===ta&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Di:e:{for(var E=y.key,_=g;_!==null;){if(_.key===E){if(E=y.type,E===ta){if(_.tag===7){t(w,_.sibling),g=l(_,y.props.children),g.return=w,w=g;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Er&&J0(E)===_.type){t(w,_.sibling),g=l(_,y.props),g.ref=io(w,_,y),g.return=w,w=g;break e}t(w,_);break}else n(w,_);_=_.sibling}y.type===ta?(g=kl(y.props.children,w.mode,v,y.key),g.return=w,w=g):(v=bs(y.type,y.key,y.props,null,w.mode,v),v.ref=io(w,g,y),v.return=w,w=v)}return i(w);case na:e:{for(_=y.key;g!==null;){if(g.key===_)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){t(w,g.sibling),g=l(g,y.children||[]),g.return=w,w=g;break e}else{t(w,g);break}else n(w,g);g=g.sibling}g=zd(y,w.mode,v),g.return=w,w=g}return i(w);case Er:return _=y._init,I(w,g,_(y._payload),v)}if(mo(y))return N(w,g,y,v);if(to(y))return C(w,g,y,v);Zi(w,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(t(w,g.sibling),g=l(g,y),g.return=w,w=g):(t(w,g),g=Dd(y,w.mode,v),g.return=w,w=g),i(w)):t(w,g)}return I}var Ea=Ev(!0),Tv=Ev(!1),fi={},Zt=qr(fi),Zo=qr(fi),Qo=qr(fi);function yl(e){if(e===fi)throw Error(Y(174));return e}function Hh(e,n){switch(We(Qo,n),We(Zo,e),We(Zt,fi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:uu(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=uu(n,e)}Ke(Zt),We(Zt,n)}function Ta(){Ke(Zt),Ke(Zo),Ke(Qo)}function Nv(e){yl(Qo.current);var n=yl(Zt.current),t=uu(n,e.type);n!==t&&(We(Zo,e),We(Zt,t))}function Wh(e){Zo.current===e&&(Ke(Zt),Ke(Zo))}var nn=qr(0);function qs(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Rd=[];function Vh(){for(var e=0;e<Rd.length;e++)Rd[e]._workInProgressVersionPrimary=null;Rd.length=0}var ps=vr.ReactCurrentDispatcher,Pd=vr.ReactCurrentBatchConfig,El=0,tn=null,vn=null,Sn=null,Zs=!1,Lo=!1,Ko=0,e8=0;function Mn(){throw Error(Y(321))}function Gh(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!zt(e[t],n[t]))return!1;return!0}function Yh(e,n,t,r,l,o){if(El=o,tn=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ps.current=e===null||e.memoizedState===null?l8:a8,e=t(r,l),Lo){o=0;do{if(Lo=!1,Ko=0,25<=o)throw Error(Y(301));o+=1,Sn=vn=null,n.updateQueue=null,ps.current=o8,e=t(r,l)}while(Lo)}if(ps.current=Qs,n=vn!==null&&vn.next!==null,El=0,Sn=vn=tn=null,Zs=!1,n)throw Error(Y(300));return e}function qh(){var e=Ko!==0;return Ko=0,e}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?tn.memoizedState=Sn=e:Sn=Sn.next=e,Sn}function kt(){if(vn===null){var e=tn.alternate;e=e!==null?e.memoizedState:null}else e=vn.next;var n=Sn===null?tn.memoizedState:Sn.next;if(n!==null)Sn=n,vn=e;else{if(e===null)throw Error(Y(310));vn=e,e={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},Sn===null?tn.memoizedState=Sn=e:Sn=Sn.next=e}return Sn}function Xo(e,n){return typeof n=="function"?n(e):n}function Fd(e){var n=kt(),t=n.queue;if(t===null)throw Error(Y(311));t.lastRenderedReducer=e;var r=vn,l=r.baseQueue,o=t.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,t.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,d=null,h=o;do{var m=h.lane;if((El&m)===m)d!==null&&(d=d.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var b={lane:m,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};d===null?(s=d=b,i=r):d=d.next=b,tn.lanes|=m,Tl|=m}h=h.next}while(h!==null&&h!==o);d===null?i=r:d.next=s,zt(r,n.memoizedState)||(et=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=d,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do o=l.lane,tn.lanes|=o,Tl|=o,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Md(e){var n=kt(),t=n.queue;if(t===null)throw Error(Y(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);zt(o,n.memoizedState)||(et=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Lv(){}function Iv(e,n){var t=tn,r=kt(),l=n(),o=!zt(r.memoizedState,l);if(o&&(r.memoizedState=l,et=!0),r=r.queue,Zh(Fv.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Sn!==null&&Sn.memoizedState.tag&1){if(t.flags|=2048,Jo(9,Pv.bind(null,t,r,l,n),void 0,null),Cn===null)throw Error(Y(349));El&30||Rv(t,n,l)}return l}function Rv(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=tn.updateQueue,n===null?(n={lastEffect:null,stores:null},tn.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Pv(e,n,t,r){n.value=t,n.getSnapshot=r,Mv(n)&&Ov(e)}function Fv(e,n,t){return t(function(){Mv(n)&&Ov(e)})}function Mv(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!zt(e,t)}catch{return!0}}function Ov(e){var n=fr(e,1);n!==null&&Dt(n,e,1,-1)}function eg(e){var n=Vt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:e},n.queue=e,e=e.dispatch=r8.bind(null,tn,e),[n.memoizedState,e]}function Jo(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=tn.updateQueue,n===null?(n={lastEffect:null,stores:null},tn.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Av(){return kt().memoizedState}function gs(e,n,t,r){var l=Vt();tn.flags|=e,l.memoizedState=Jo(1|n,t,void 0,r===void 0?null:r)}function Sc(e,n,t,r){var l=kt();r=r===void 0?null:r;var o=void 0;if(vn!==null){var i=vn.memoizedState;if(o=i.destroy,r!==null&&Gh(r,i.deps)){l.memoizedState=Jo(n,t,o,r);return}}tn.flags|=e,l.memoizedState=Jo(1|n,t,o,r)}function ng(e,n){return gs(8390656,8,e,n)}function Zh(e,n){return Sc(2048,8,e,n)}function Dv(e,n){return Sc(4,2,e,n)}function zv(e,n){return Sc(4,4,e,n)}function Bv(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function jv(e,n,t){return t=t!=null?t.concat([e]):null,Sc(4,4,Bv.bind(null,n,e),t)}function Qh(){}function Uv(e,n){var t=kt();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Gh(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Hv(e,n){var t=kt();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Gh(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Wv(e,n,t){return El&21?(zt(t,n)||(t=Ym(),tn.lanes|=t,Tl|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,et=!0),e.memoizedState=t)}function n8(e,n){var t=Ae;Ae=t!==0&&4>t?t:4,e(!0);var r=Pd.transition;Pd.transition={};try{e(!1),n()}finally{Ae=t,Pd.transition=r}}function Vv(){return kt().memoizedState}function t8(e,n,t){var r=jr(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Gv(e))Yv(n,t);else if(t=Cv(e,n,t,r),t!==null){var l=Hn();Dt(t,e,r,l),qv(t,n,r)}}function r8(e,n,t){var r=jr(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Gv(e))Yv(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,s=o(i,t);if(l.hasEagerState=!0,l.eagerState=s,zt(s,i)){var d=n.interleaved;d===null?(l.next=l,jh(n)):(l.next=d.next,d.next=l),n.interleaved=l;return}}catch{}finally{}t=Cv(e,n,l,r),t!==null&&(l=Hn(),Dt(t,e,r,l),qv(t,n,r))}}function Gv(e){var n=e.alternate;return e===tn||n!==null&&n===tn}function Yv(e,n){Lo=Zs=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function qv(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Eh(e,t)}}var Qs={readContext:Ct,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},l8={readContext:Ct,useCallback:function(e,n){return Vt().memoizedState=[e,n===void 0?null:n],e},useContext:Ct,useEffect:ng,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,gs(4194308,4,Bv.bind(null,n,e),t)},useLayoutEffect:function(e,n){return gs(4194308,4,e,n)},useInsertionEffect:function(e,n){return gs(4,2,e,n)},useMemo:function(e,n){var t=Vt();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Vt();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=t8.bind(null,tn,e),[r.memoizedState,e]},useRef:function(e){var n=Vt();return e={current:e},n.memoizedState=e},useState:eg,useDebugValue:Qh,useDeferredValue:function(e){return Vt().memoizedState=e},useTransition:function(){var e=eg(!1),n=e[0];return e=n8.bind(null,e[1]),Vt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=tn,l=Vt();if(Xe){if(t===void 0)throw Error(Y(407));t=t()}else{if(t=n(),Cn===null)throw Error(Y(349));El&30||Rv(r,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,ng(Fv.bind(null,r,o,e),[e]),r.flags|=2048,Jo(9,Pv.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Vt(),n=Cn.identifierPrefix;if(Xe){var t=sr,r=ir;t=(r&~(1<<32-At(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ko++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=e8++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},a8={readContext:Ct,useCallback:Uv,useContext:Ct,useEffect:Zh,useImperativeHandle:jv,useInsertionEffect:Dv,useLayoutEffect:zv,useMemo:Hv,useReducer:Fd,useRef:Av,useState:function(){return Fd(Xo)},useDebugValue:Qh,useDeferredValue:function(e){var n=kt();return Wv(n,vn.memoizedState,e)},useTransition:function(){var e=Fd(Xo)[0],n=kt().memoizedState;return[e,n]},useMutableSource:Lv,useSyncExternalStore:Iv,useId:Vv,unstable_isNewReconciler:!1},o8={readContext:Ct,useCallback:Uv,useContext:Ct,useEffect:Zh,useImperativeHandle:jv,useInsertionEffect:Dv,useLayoutEffect:zv,useMemo:Hv,useReducer:Md,useRef:Av,useState:function(){return Md(Xo)},useDebugValue:Qh,useDeferredValue:function(e){var n=kt();return vn===null?n.memoizedState=e:Wv(n,vn.memoizedState,e)},useTransition:function(){var e=Md(Xo)[0],n=kt().memoizedState;return[e,n]},useMutableSource:Lv,useSyncExternalStore:Iv,useId:Vv,unstable_isNewReconciler:!1};function Na(e,n){try{var t="",r=n;do t+=F6(r),r=r.return;while(r);var l=t}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:l,digest:null}}function Od(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Fu(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var i8=typeof WeakMap=="function"?WeakMap:Map;function Zv(e,n,t){t=cr(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Xs||(Xs=!0,Wu=r),Fu(e,n)},t}function Qv(e,n,t){t=cr(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Fu(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Fu(e,n),typeof r!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function tg(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new i8;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=x8.bind(null,e,n,t),n.then(e,e))}function rg(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function lg(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=cr(-1,1),n.tag=2,zr(t,n,1))),t.lanes|=1),e)}var s8=vr.ReactCurrentOwner,et=!1;function jn(e,n,t,r){n.child=e===null?Tv(n,null,t,r):Ea(n,e.child,t,r)}function ag(e,n,t,r,l){t=t.render;var o=n.ref;return wa(n,l),r=Yh(e,n,t,r,o,l),t=qh(),e!==null&&!et?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,pr(e,n,l)):(Xe&&t&&Mh(n),n.flags|=1,jn(e,n,r,l),n.child)}function og(e,n,t,r,l){if(e===null){var o=t.type;return typeof o=="function"&&!lf(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Kv(e,n,o,r,l)):(e=bs(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:Vo,t(i,r)&&e.ref===n.ref)return pr(e,n,l)}return n.flags|=1,e=Ur(o,r),e.ref=n.ref,e.return=n,n.child=e}function Kv(e,n,t,r,l){if(e!==null){var o=e.memoizedProps;if(Vo(o,r)&&e.ref===n.ref)if(et=!1,n.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(et=!0);else return n.lanes=e.lanes,pr(e,n,l)}return Mu(e,n,t,r,l)}function Xv(e,n,t){var r=n.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(ha,it),it|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,We(ha,it),it|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,We(ha,it),it|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,We(ha,it),it|=r;return jn(e,n,l,t),n.child}function Jv(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Mu(e,n,t,r,l){var o=tt(t)?_l:Dn.current;return o=_a(n,o),wa(n,l),t=Yh(e,n,t,r,o,l),r=qh(),e!==null&&!et?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,pr(e,n,l)):(Xe&&r&&Mh(n),n.flags|=1,jn(e,n,t,l),n.child)}function ig(e,n,t,r,l){if(tt(t)){var o=!0;Us(n)}else o=!1;if(wa(n,l),n.stateNode===null)ms(e,n),$v(n,t,r),Pu(n,t,r,l),r=!0;else if(e===null){var i=n.stateNode,s=n.memoizedProps;i.props=s;var d=i.context,h=t.contextType;typeof h=="object"&&h!==null?h=Ct(h):(h=tt(t)?_l:Dn.current,h=_a(n,h));var m=t.getDerivedStateFromProps,b=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||d!==h)&&X0(n,i,r,h),Tr=!1;var S=n.memoizedState;i.state=S,Ys(n,r,i,l),d=n.memoizedState,s!==r||S!==d||nt.current||Tr?(typeof m=="function"&&(Ru(n,t,m,r),d=n.memoizedState),(s=Tr||K0(n,t,s,r,S,d,h))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=d),i.props=r,i.state=d,i.context=h,r=s):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,kv(e,n),s=n.memoizedProps,h=n.type===n.elementType?s:Rt(n.type,s),i.props=h,b=n.pendingProps,S=i.context,d=t.contextType,typeof d=="object"&&d!==null?d=Ct(d):(d=tt(t)?_l:Dn.current,d=_a(n,d));var L=t.getDerivedStateFromProps;(m=typeof L=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==b||S!==d)&&X0(n,i,r,d),Tr=!1,S=n.memoizedState,i.state=S,Ys(n,r,i,l);var N=n.memoizedState;s!==b||S!==N||nt.current||Tr?(typeof L=="function"&&(Ru(n,t,L,r),N=n.memoizedState),(h=Tr||K0(n,t,h,r,S,N,d)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,N,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,N,d)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&S===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&S===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=N),i.props=r,i.state=N,i.context=d,r=h):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&S===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&S===e.memoizedState||(n.flags|=1024),r=!1)}return Ou(e,n,t,r,o,l)}function Ou(e,n,t,r,l,o){Jv(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return l&&G0(n,t,!1),pr(e,n,o);r=n.stateNode,s8.current=n;var s=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=Ea(n,e.child,null,o),n.child=Ea(n,null,s,o)):jn(e,n,s,o),n.memoizedState=r.state,l&&G0(n,t,!0),n.child}function e2(e){var n=e.stateNode;n.pendingContext?V0(e,n.pendingContext,n.pendingContext!==n.context):n.context&&V0(e,n.context,!1),Hh(e,n.containerInfo)}function sg(e,n,t,r,l){return $a(),Ah(l),n.flags|=256,jn(e,n,t,r),n.child}var Au={dehydrated:null,treeContext:null,retryLane:0};function Du(e){return{baseLanes:e,cachePool:null,transitions:null}}function n2(e,n,t){var r=n.pendingProps,l=nn.current,o=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),We(nn,l&1),e===null)return Lu(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=_c(i,r,0,null),e=kl(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Du(t),n.memoizedState=Au,e):Kh(n,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return c8(e,n,i,r,s,l,t);if(o){o=r.fallback,i=n.mode,l=e.child,s=l.sibling;var d={mode:"hidden",children:r.children};return!(i&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=d,n.deletions=null):(r=Ur(l,d),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=Ur(s,o):(o=kl(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?Du(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=Au,r}return o=e.child,e=o.sibling,r=Ur(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Kh(e,n){return n=_c({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Qi(e,n,t,r){return r!==null&&Ah(r),Ea(n,e.child,null,t),e=Kh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function c8(e,n,t,r,l,o,i){if(t)return n.flags&256?(n.flags&=-257,r=Od(Error(Y(422))),Qi(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,l=n.mode,r=_c({mode:"visible",children:r.children},l,0,null),o=kl(o,l,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Ea(n,e.child,null,i),n.child.memoizedState=Du(i),n.memoizedState=Au,o);if(!(n.mode&1))return Qi(e,n,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(Y(419)),r=Od(o,r,void 0),Qi(e,n,i,r)}if(s=(i&e.childLanes)!==0,et||s){if(r=Cn,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,fr(e,l),Dt(r,e,l,-1))}return rf(),r=Od(Error(Y(421))),Qi(e,n,i,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=S8.bind(null,e),l._reactRetry=n,null):(e=o.treeContext,ht=Dr(l.nextSibling),ft=n,Xe=!0,Mt=null,e!==null&&(bt[wt++]=ir,bt[wt++]=sr,bt[wt++]=$l,ir=e.id,sr=e.overflow,$l=n),n=Kh(n,r.children),n.flags|=4096,n)}function cg(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Iu(e.return,n,t)}function Ad(e,n,t,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=l)}function t2(e,n,t){var r=n.pendingProps,l=r.revealOrder,o=r.tail;if(jn(e,n,r.children,t),r=nn.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cg(e,t,n);else if(e.tag===19)cg(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(We(nn,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&qs(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Ad(n,!1,l,t,o);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&qs(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Ad(n,!0,t,null,o);break;case"together":Ad(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ms(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function pr(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Tl|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(Y(153));if(n.child!==null){for(e=n.child,t=Ur(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Ur(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function d8(e,n,t){switch(n.tag){case 3:e2(n),$a();break;case 5:Nv(n);break;case 1:tt(n.type)&&Us(n);break;case 4:Hh(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;We(Vs,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(We(nn,nn.current&1),n.flags|=128,null):t&n.child.childLanes?n2(e,n,t):(We(nn,nn.current&1),e=pr(e,n,t),e!==null?e.sibling:null);We(nn,nn.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return t2(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),We(nn,nn.current),r)break;return null;case 22:case 23:return n.lanes=0,Xv(e,n,t)}return pr(e,n,t)}var r2,zu,l2,a2;r2=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};zu=function(){};l2=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,yl(Zt.current);var o=null;switch(t){case"input":l=iu(e,l),r=iu(e,r),o=[];break;case"select":l=rn({},l,{value:void 0}),r=rn({},r,{value:void 0}),o=[];break;case"textarea":l=du(e,l),r=du(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bs)}hu(t,r);var i;t=null;for(h in l)if(!r.hasOwnProperty(h)&&l.hasOwnProperty(h)&&l[h]!=null)if(h==="style"){var s=l[h];for(i in s)s.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Do.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in r){var d=r[h];if(s=l!=null?l[h]:void 0,r.hasOwnProperty(h)&&d!==s&&(d!=null||s!=null))if(h==="style")if(s){for(i in s)!s.hasOwnProperty(i)||d&&d.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in d)d.hasOwnProperty(i)&&s[i]!==d[i]&&(t||(t={}),t[i]=d[i])}else t||(o||(o=[]),o.push(h,t)),t=d;else h==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,s=s?s.__html:void 0,d!=null&&s!==d&&(o=o||[]).push(h,d)):h==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(h,""+d):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Do.hasOwnProperty(h)?(d!=null&&h==="onScroll"&&Ze("scroll",e),o||s===d||(o=[])):(o=o||[]).push(h,d))}t&&(o=o||[]).push("style",t);var h=o;(n.updateQueue=h)&&(n.flags|=4)}};a2=function(e,n,t,r){t!==r&&(n.flags|=4)};function so(e,n){if(!Xe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function On(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function u8(e,n,t){var r=n.pendingProps;switch(Oh(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return On(n),null;case 1:return tt(n.type)&&js(),On(n),null;case 3:return r=n.stateNode,Ta(),Ke(nt),Ke(Dn),Vh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Mt!==null&&(Yu(Mt),Mt=null))),zu(e,n),On(n),null;case 5:Wh(n);var l=yl(Qo.current);if(t=n.type,e!==null&&n.stateNode!=null)l2(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(Y(166));return On(n),null}if(e=yl(Zt.current),qi(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Yt]=n,r[qo]=o,e=(n.mode&1)!==0,t){case"dialog":Ze("cancel",r),Ze("close",r);break;case"iframe":case"object":case"embed":Ze("load",r);break;case"video":case"audio":for(l=0;l<yo.length;l++)Ze(yo[l],r);break;case"source":Ze("error",r);break;case"img":case"image":case"link":Ze("error",r),Ze("load",r);break;case"details":Ze("toggle",r);break;case"input":y0(r,o),Ze("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ze("invalid",r);break;case"textarea":w0(r,o),Ze("invalid",r)}hu(t,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Yi(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Yi(r.textContent,s,e),l=["children",""+s]):Do.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Ze("scroll",r)}switch(t){case"input":zi(r),b0(r,o,!0);break;case"textarea":zi(r),x0(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Bs)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rm(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[Yt]=n,e[qo]=r,r2(e,n,!1,!1),n.stateNode=e;e:{switch(i=fu(t,r),t){case"dialog":Ze("cancel",e),Ze("close",e),l=r;break;case"iframe":case"object":case"embed":Ze("load",e),l=r;break;case"video":case"audio":for(l=0;l<yo.length;l++)Ze(yo[l],e);l=r;break;case"source":Ze("error",e),l=r;break;case"img":case"image":case"link":Ze("error",e),Ze("load",e),l=r;break;case"details":Ze("toggle",e),l=r;break;case"input":y0(e,r),l=iu(e,r),Ze("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=rn({},r,{value:void 0}),Ze("invalid",e);break;case"textarea":w0(e,r),l=du(e,r),Ze("invalid",e);break;default:l=r}hu(t,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var d=s[o];o==="style"?Mm(e,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Pm(e,d)):o==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&zo(e,d):typeof d=="number"&&zo(e,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Do.hasOwnProperty(o)?d!=null&&o==="onScroll"&&Ze("scroll",e):d!=null&&xh(e,o,d,i))}switch(t){case"input":zi(e),b0(e,r,!1);break;case"textarea":zi(e),x0(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Hr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ma(e,!!r.multiple,o,!1):r.defaultValue!=null&&ma(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Bs)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return On(n),null;case 6:if(e&&n.stateNode!=null)a2(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(Y(166));if(t=yl(Qo.current),yl(Zt.current),qi(n)){if(r=n.stateNode,t=n.memoizedProps,r[Yt]=n,(o=r.nodeValue!==t)&&(e=ft,e!==null))switch(e.tag){case 3:Yi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yi(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Yt]=n,n.stateNode=r}return On(n),null;case 13:if(Ke(nn),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Xe&&ht!==null&&n.mode&1&&!(n.flags&128))Sv(),$a(),n.flags|=98560,o=!1;else if(o=qi(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(Y(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Y(317));o[Yt]=n}else $a(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;On(n),o=!1}else Mt!==null&&(Yu(Mt),Mt=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||nn.current&1?yn===0&&(yn=3):rf())),n.updateQueue!==null&&(n.flags|=4),On(n),null);case 4:return Ta(),zu(e,n),e===null&&Go(n.stateNode.containerInfo),On(n),null;case 10:return Bh(n.type._context),On(n),null;case 17:return tt(n.type)&&js(),On(n),null;case 19:if(Ke(nn),o=n.memoizedState,o===null)return On(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)so(o,!1);else{if(yn!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=qs(e),i!==null){for(n.flags|=128,so(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return We(nn,nn.current&1|2),n.child}e=e.sibling}o.tail!==null&&on()>La&&(n.flags|=128,r=!0,so(o,!1),n.lanes=4194304)}else{if(!r)if(e=qs(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),so(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Xe)return On(n),null}else 2*on()-o.renderingStartTime>La&&t!==1073741824&&(n.flags|=128,r=!0,so(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=on(),n.sibling=null,t=nn.current,We(nn,r?t&1|2:t&1),n):(On(n),null);case 22:case 23:return tf(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?it&1073741824&&(On(n),n.subtreeFlags&6&&(n.flags|=8192)):On(n),null;case 24:return null;case 25:return null}throw Error(Y(156,n.tag))}function h8(e,n){switch(Oh(n),n.tag){case 1:return tt(n.type)&&js(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ta(),Ke(nt),Ke(Dn),Vh(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Wh(n),null;case 13:if(Ke(nn),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(Y(340));$a()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ke(nn),null;case 4:return Ta(),null;case 10:return Bh(n.type._context),null;case 22:case 23:return tf(),null;case 24:return null;default:return null}}var Ki=!1,An=!1,f8=typeof WeakSet=="function"?WeakSet:Set,ne=null;function ua(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){an(e,n,r)}else t.current=null}function Bu(e,n,t){try{t()}catch(r){an(e,n,r)}}var dg=!1;function p8(e,n){if(Cu=As,e=cv(),Fh(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,s=-1,d=-1,h=0,m=0,b=e,S=null;n:for(;;){for(var L;b!==t||l!==0&&b.nodeType!==3||(s=i+l),b!==o||r!==0&&b.nodeType!==3||(d=i+r),b.nodeType===3&&(i+=b.nodeValue.length),(L=b.firstChild)!==null;)S=b,b=L;for(;;){if(b===e)break n;if(S===t&&++h===l&&(s=i),S===o&&++m===r&&(d=i),(L=b.nextSibling)!==null)break;b=S,S=b.parentNode}b=L}t=s===-1||d===-1?null:{start:s,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(ku={focusedElem:e,selectionRange:t},As=!1,ne=n;ne!==null;)if(n=ne,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ne=e;else for(;ne!==null;){n=ne;try{var N=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var C=N.memoizedProps,I=N.memoizedState,w=n.stateNode,g=w.getSnapshotBeforeUpdate(n.elementType===n.type?C:Rt(n.type,C),I);w.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(v){an(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,ne=e;break}ne=n.return}return N=dg,dg=!1,N}function Io(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Bu(n,t,o)}l=l.next}while(l!==r)}}function Cc(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ju(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function o2(e){var n=e.alternate;n!==null&&(e.alternate=null,o2(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Yt],delete n[qo],delete n[Eu],delete n[Qw],delete n[Kw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function i2(e){return e.tag===5||e.tag===3||e.tag===4}function ug(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||i2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Bs));else if(r!==4&&(e=e.child,e!==null))for(Uu(e,n,t),e=e.sibling;e!==null;)Uu(e,n,t),e=e.sibling}function Hu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hu(e,n,t),e=e.sibling;e!==null;)Hu(e,n,t),e=e.sibling}var $n=null,Ft=!1;function kr(e,n,t){for(t=t.child;t!==null;)s2(e,n,t),t=t.sibling}function s2(e,n,t){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(gc,t)}catch{}switch(t.tag){case 5:An||ua(t,n);case 6:var r=$n,l=Ft;$n=null,kr(e,n,t),$n=r,Ft=l,$n!==null&&(Ft?(e=$n,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):$n.removeChild(t.stateNode));break;case 18:$n!==null&&(Ft?(e=$n,t=t.stateNode,e.nodeType===8?Ld(e.parentNode,t):e.nodeType===1&&Ld(e,t),Ho(e)):Ld($n,t.stateNode));break;case 4:r=$n,l=Ft,$n=t.stateNode.containerInfo,Ft=!0,kr(e,n,t),$n=r,Ft=l;break;case 0:case 11:case 14:case 15:if(!An&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Bu(t,n,i),l=l.next}while(l!==r)}kr(e,n,t);break;case 1:if(!An&&(ua(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){an(t,n,s)}kr(e,n,t);break;case 21:kr(e,n,t);break;case 22:t.mode&1?(An=(r=An)||t.memoizedState!==null,kr(e,n,t),An=r):kr(e,n,t);break;default:kr(e,n,t)}}function hg(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new f8),n.forEach(function(r){var l=C8.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Lt(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var o=e,i=n,s=i;e:for(;s!==null;){switch(s.tag){case 5:$n=s.stateNode,Ft=!1;break e;case 3:$n=s.stateNode.containerInfo,Ft=!0;break e;case 4:$n=s.stateNode.containerInfo,Ft=!0;break e}s=s.return}if($n===null)throw Error(Y(160));s2(o,i,l),$n=null,Ft=!1;var d=l.alternate;d!==null&&(d.return=null),l.return=null}catch(h){an(l,n,h)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)c2(n,e),n=n.sibling}function c2(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lt(n,e),Bt(e),r&4){try{Io(3,e,e.return),Cc(3,e)}catch(C){an(e,e.return,C)}try{Io(5,e,e.return)}catch(C){an(e,e.return,C)}}break;case 1:Lt(n,e),Bt(e),r&512&&t!==null&&ua(t,t.return);break;case 5:if(Lt(n,e),Bt(e),r&512&&t!==null&&ua(t,t.return),e.flags&32){var l=e.stateNode;try{zo(l,"")}catch(C){an(e,e.return,C)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,s=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Lm(l,o),fu(s,i);var h=fu(s,o);for(i=0;i<d.length;i+=2){var m=d[i],b=d[i+1];m==="style"?Mm(l,b):m==="dangerouslySetInnerHTML"?Pm(l,b):m==="children"?zo(l,b):xh(l,m,b,h)}switch(s){case"input":su(l,o);break;case"textarea":Im(l,o);break;case"select":var S=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var L=o.value;L!=null?ma(l,!!o.multiple,L,!1):S!==!!o.multiple&&(o.defaultValue!=null?ma(l,!!o.multiple,o.defaultValue,!0):ma(l,!!o.multiple,o.multiple?[]:"",!1))}l[qo]=o}catch(C){an(e,e.return,C)}}break;case 6:if(Lt(n,e),Bt(e),r&4){if(e.stateNode===null)throw Error(Y(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(C){an(e,e.return,C)}}break;case 3:if(Lt(n,e),Bt(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ho(n.containerInfo)}catch(C){an(e,e.return,C)}break;case 4:Lt(n,e),Bt(e);break;case 13:Lt(n,e),Bt(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(ef=on())),r&4&&hg(e);break;case 22:if(m=t!==null&&t.memoizedState!==null,e.mode&1?(An=(h=An)||m,Lt(n,e),An=h):Lt(n,e),Bt(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!m&&e.mode&1)for(ne=e,m=e.child;m!==null;){for(b=ne=m;ne!==null;){switch(S=ne,L=S.child,S.tag){case 0:case 11:case 14:case 15:Io(4,S,S.return);break;case 1:ua(S,S.return);var N=S.stateNode;if(typeof N.componentWillUnmount=="function"){r=S,t=S.return;try{n=r,N.props=n.memoizedProps,N.state=n.memoizedState,N.componentWillUnmount()}catch(C){an(r,t,C)}}break;case 5:ua(S,S.return);break;case 22:if(S.memoizedState!==null){pg(b);continue}}L!==null?(L.return=S,ne=L):pg(b)}m=m.sibling}e:for(m=null,b=e;;){if(b.tag===5){if(m===null){m=b;try{l=b.stateNode,h?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=b.stateNode,d=b.memoizedProps.style,i=d!=null&&d.hasOwnProperty("display")?d.display:null,s.style.display=Fm("display",i))}catch(C){an(e,e.return,C)}}}else if(b.tag===6){if(m===null)try{b.stateNode.nodeValue=h?"":b.memoizedProps}catch(C){an(e,e.return,C)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;m===b&&(m=null),b=b.return}m===b&&(m=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:Lt(n,e),Bt(e),r&4&&hg(e);break;case 21:break;default:Lt(n,e),Bt(e)}}function Bt(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(i2(t)){var r=t;break e}t=t.return}throw Error(Y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(zo(l,""),r.flags&=-33);var o=ug(e);Hu(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=ug(e);Uu(e,s,i);break;default:throw Error(Y(161))}}catch(d){an(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function g8(e,n,t){ne=e,d2(e)}function d2(e,n,t){for(var r=(e.mode&1)!==0;ne!==null;){var l=ne,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Ki;if(!i){var s=l.alternate,d=s!==null&&s.memoizedState!==null||An;s=Ki;var h=An;if(Ki=i,(An=d)&&!h)for(ne=l;ne!==null;)i=ne,d=i.child,i.tag===22&&i.memoizedState!==null?gg(l):d!==null?(d.return=i,ne=d):gg(l);for(;o!==null;)ne=o,d2(o),o=o.sibling;ne=l,Ki=s,An=h}fg(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,ne=o):fg(e)}}function fg(e){for(;ne!==null;){var n=ne;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:An||Cc(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!An)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Rt(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Q0(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Q0(n,i,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var h=n.alternate;if(h!==null){var m=h.memoizedState;if(m!==null){var b=m.dehydrated;b!==null&&Ho(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}An||n.flags&512&&ju(n)}catch(S){an(n,n.return,S)}}if(n===e){ne=null;break}if(t=n.sibling,t!==null){t.return=n.return,ne=t;break}ne=n.return}}function pg(e){for(;ne!==null;){var n=ne;if(n===e){ne=null;break}var t=n.sibling;if(t!==null){t.return=n.return,ne=t;break}ne=n.return}}function gg(e){for(;ne!==null;){var n=ne;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Cc(4,n)}catch(d){an(n,t,d)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(d){an(n,l,d)}}var o=n.return;try{ju(n)}catch(d){an(n,o,d)}break;case 5:var i=n.return;try{ju(n)}catch(d){an(n,i,d)}}}catch(d){an(n,n.return,d)}if(n===e){ne=null;break}var s=n.sibling;if(s!==null){s.return=n.return,ne=s;break}ne=n.return}}var m8=Math.ceil,Ks=vr.ReactCurrentDispatcher,Xh=vr.ReactCurrentOwner,St=vr.ReactCurrentBatchConfig,Ne=0,Cn=null,un=null,Ln=0,it=0,ha=qr(0),yn=0,ei=null,Tl=0,kc=0,Jh=0,Ro=null,Jn=null,ef=0,La=1/0,lr=null,Xs=!1,Wu=null,Br=null,Xi=!1,Rr=null,Js=0,Po=0,Vu=null,vs=-1,ys=0;function Hn(){return Ne&6?on():vs!==-1?vs:vs=on()}function jr(e){return e.mode&1?Ne&2&&Ln!==0?Ln&-Ln:Jw.transition!==null?(ys===0&&(ys=Ym()),ys):(e=Ae,e!==0||(e=window.event,e=e===void 0?16:ev(e.type)),e):1}function Dt(e,n,t,r){if(50<Po)throw Po=0,Vu=null,Error(Y(185));di(e,t,r),(!(Ne&2)||e!==Cn)&&(e===Cn&&(!(Ne&2)&&(kc|=t),yn===4&&Lr(e,Ln)),rt(e,r),t===1&&Ne===0&&!(n.mode&1)&&(La=on()+500,wc&&Zr()))}function rt(e,n){var t=e.callbackNode;J6(e,n);var r=Os(e,e===Cn?Ln:0);if(r===0)t!==null&&k0(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&k0(t),n===1)e.tag===0?Xw(mg.bind(null,e)):bv(mg.bind(null,e)),qw(function(){!(Ne&6)&&Zr()}),t=null;else{switch(qm(r)){case 1:t=$h;break;case 4:t=Vm;break;case 16:t=Ms;break;case 536870912:t=Gm;break;default:t=Ms}t=y2(t,u2.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function u2(e,n){if(vs=-1,ys=0,Ne&6)throw Error(Y(327));var t=e.callbackNode;if(xa()&&e.callbackNode!==t)return null;var r=Os(e,e===Cn?Ln:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ec(e,r);else{n=r;var l=Ne;Ne|=2;var o=f2();(Cn!==e||Ln!==n)&&(lr=null,La=on()+500,Cl(e,n));do try{b8();break}catch(s){h2(e,s)}while(1);zh(),Ks.current=o,Ne=l,un!==null?n=0:(Cn=null,Ln=0,n=yn)}if(n!==0){if(n===2&&(l=yu(e),l!==0&&(r=l,n=Gu(e,l))),n===1)throw t=ei,Cl(e,0),Lr(e,r),rt(e,on()),t;if(n===6)Lr(e,r);else{if(l=e.current.alternate,!(r&30)&&!v8(l)&&(n=ec(e,r),n===2&&(o=yu(e),o!==0&&(r=o,n=Gu(e,o))),n===1))throw t=ei,Cl(e,0),Lr(e,r),rt(e,on()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(Y(345));case 2:hl(e,Jn,lr);break;case 3:if(Lr(e,r),(r&130023424)===r&&(n=ef+500-on(),10<n)){if(Os(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Hn(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=$u(hl.bind(null,e,Jn,lr),n);break}hl(e,Jn,lr);break;case 4:if(Lr(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var i=31-At(r);o=1<<i,i=n[i],i>l&&(l=i),r&=~o}if(r=l,r=on()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*m8(r/1960))-r,10<r){e.timeoutHandle=$u(hl.bind(null,e,Jn,lr),r);break}hl(e,Jn,lr);break;case 5:hl(e,Jn,lr);break;default:throw Error(Y(329))}}}return rt(e,on()),e.callbackNode===t?u2.bind(null,e):null}function Gu(e,n){var t=Ro;return e.current.memoizedState.isDehydrated&&(Cl(e,n).flags|=256),e=ec(e,n),e!==2&&(n=Jn,Jn=t,n!==null&&Yu(n)),e}function Yu(e){Jn===null?Jn=e:Jn.push.apply(Jn,e)}function v8(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],o=l.getSnapshot;l=l.value;try{if(!zt(o(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Lr(e,n){for(n&=~Jh,n&=~kc,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-At(n),r=1<<t;e[t]=-1,n&=~r}}function mg(e){if(Ne&6)throw Error(Y(327));xa();var n=Os(e,0);if(!(n&1))return rt(e,on()),null;var t=ec(e,n);if(e.tag!==0&&t===2){var r=yu(e);r!==0&&(n=r,t=Gu(e,r))}if(t===1)throw t=ei,Cl(e,0),Lr(e,n),rt(e,on()),t;if(t===6)throw Error(Y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,hl(e,Jn,lr),rt(e,on()),null}function nf(e,n){var t=Ne;Ne|=1;try{return e(n)}finally{Ne=t,Ne===0&&(La=on()+500,wc&&Zr())}}function Nl(e){Rr!==null&&Rr.tag===0&&!(Ne&6)&&xa();var n=Ne;Ne|=1;var t=St.transition,r=Ae;try{if(St.transition=null,Ae=1,e)return e()}finally{Ae=r,St.transition=t,Ne=n,!(Ne&6)&&Zr()}}function tf(){it=ha.current,Ke(ha)}function Cl(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Yw(t)),un!==null)for(t=un.return;t!==null;){var r=t;switch(Oh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&js();break;case 3:Ta(),Ke(nt),Ke(Dn),Vh();break;case 5:Wh(r);break;case 4:Ta();break;case 13:Ke(nn);break;case 19:Ke(nn);break;case 10:Bh(r.type._context);break;case 22:case 23:tf()}t=t.return}if(Cn=e,un=e=Ur(e.current,null),Ln=it=n,yn=0,ei=null,Jh=kc=Tl=0,Jn=Ro=null,vl!==null){for(n=0;n<vl.length;n++)if(t=vl[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}t.pending=r}vl=null}return e}function h2(e,n){do{var t=un;try{if(zh(),ps.current=Qs,Zs){for(var r=tn.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Zs=!1}if(El=0,Sn=vn=tn=null,Lo=!1,Ko=0,Xh.current=null,t===null||t.return===null){yn=1,ei=n,un=null;break}e:{var o=e,i=t.return,s=t,d=n;if(n=Ln,s.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var h=d,m=s,b=m.tag;if(!(m.mode&1)&&(b===0||b===11||b===15)){var S=m.alternate;S?(m.updateQueue=S.updateQueue,m.memoizedState=S.memoizedState,m.lanes=S.lanes):(m.updateQueue=null,m.memoizedState=null)}var L=rg(i);if(L!==null){L.flags&=-257,lg(L,i,s,o,n),L.mode&1&&tg(o,h,n),n=L,d=h;var N=n.updateQueue;if(N===null){var C=new Set;C.add(d),n.updateQueue=C}else N.add(d);break e}else{if(!(n&1)){tg(o,h,n),rf();break e}d=Error(Y(426))}}else if(Xe&&s.mode&1){var I=rg(i);if(I!==null){!(I.flags&65536)&&(I.flags|=256),lg(I,i,s,o,n),Ah(Na(d,s));break e}}o=d=Na(d,s),yn!==4&&(yn=2),Ro===null?Ro=[o]:Ro.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var w=Zv(o,d,n);Z0(o,w);break e;case 1:s=d;var g=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Br===null||!Br.has(y)))){o.flags|=65536,n&=-n,o.lanes|=n;var v=Qv(o,s,n);Z0(o,v);break e}}o=o.return}while(o!==null)}g2(t)}catch(E){n=E,un===t&&t!==null&&(un=t=t.return);continue}break}while(1)}function f2(){var e=Ks.current;return Ks.current=Qs,e===null?Qs:e}function rf(){(yn===0||yn===3||yn===2)&&(yn=4),Cn===null||!(Tl&268435455)&&!(kc&268435455)||Lr(Cn,Ln)}function ec(e,n){var t=Ne;Ne|=2;var r=f2();(Cn!==e||Ln!==n)&&(lr=null,Cl(e,n));do try{y8();break}catch(l){h2(e,l)}while(1);if(zh(),Ne=t,Ks.current=r,un!==null)throw Error(Y(261));return Cn=null,Ln=0,yn}function y8(){for(;un!==null;)p2(un)}function b8(){for(;un!==null&&!W6();)p2(un)}function p2(e){var n=v2(e.alternate,e,it);e.memoizedProps=e.pendingProps,n===null?g2(e):un=n,Xh.current=null}function g2(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=h8(t,n),t!==null){t.flags&=32767,un=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{yn=6,un=null;return}}else if(t=u8(t,n,it),t!==null){un=t;return}if(n=n.sibling,n!==null){un=n;return}un=n=e}while(n!==null);yn===0&&(yn=5)}function hl(e,n,t){var r=Ae,l=St.transition;try{St.transition=null,Ae=1,w8(e,n,t,r)}finally{St.transition=l,Ae=r}return null}function w8(e,n,t,r){do xa();while(Rr!==null);if(Ne&6)throw Error(Y(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(Y(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(ew(e,o),e===Cn&&(un=Cn=null,Ln=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Xi||(Xi=!0,y2(Ms,function(){return xa(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=St.transition,St.transition=null;var i=Ae;Ae=1;var s=Ne;Ne|=4,Xh.current=null,p8(e,t),c2(t,e),Bw(ku),As=!!Cu,ku=Cu=null,e.current=t,g8(t),V6(),Ne=s,Ae=i,St.transition=o}else e.current=t;if(Xi&&(Xi=!1,Rr=e,Js=l),o=e.pendingLanes,o===0&&(Br=null),q6(t.stateNode),rt(e,on()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Xs)throw Xs=!1,e=Wu,Wu=null,e;return Js&1&&e.tag!==0&&xa(),o=e.pendingLanes,o&1?e===Vu?Po++:(Po=0,Vu=e):Po=0,Zr(),null}function xa(){if(Rr!==null){var e=qm(Js),n=St.transition,t=Ae;try{if(St.transition=null,Ae=16>e?16:e,Rr===null)var r=!1;else{if(e=Rr,Rr=null,Js=0,Ne&6)throw Error(Y(331));var l=Ne;for(Ne|=4,ne=e.current;ne!==null;){var o=ne,i=o.child;if(ne.flags&16){var s=o.deletions;if(s!==null){for(var d=0;d<s.length;d++){var h=s[d];for(ne=h;ne!==null;){var m=ne;switch(m.tag){case 0:case 11:case 15:Io(8,m,o)}var b=m.child;if(b!==null)b.return=m,ne=b;else for(;ne!==null;){m=ne;var S=m.sibling,L=m.return;if(o2(m),m===h){ne=null;break}if(S!==null){S.return=L,ne=S;break}ne=L}}}var N=o.alternate;if(N!==null){var C=N.child;if(C!==null){N.child=null;do{var I=C.sibling;C.sibling=null,C=I}while(C!==null)}}ne=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,ne=i;else e:for(;ne!==null;){if(o=ne,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Io(9,o,o.return)}var w=o.sibling;if(w!==null){w.return=o.return,ne=w;break e}ne=o.return}}var g=e.current;for(ne=g;ne!==null;){i=ne;var y=i.child;if(i.subtreeFlags&2064&&y!==null)y.return=i,ne=y;else e:for(i=g;ne!==null;){if(s=ne,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Cc(9,s)}}catch(E){an(s,s.return,E)}if(s===i){ne=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,ne=v;break e}ne=s.return}}if(Ne=l,Zr(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(gc,e)}catch{}r=!0}return r}finally{Ae=t,St.transition=n}}return!1}function vg(e,n,t){n=Na(t,n),n=Zv(e,n,1),e=zr(e,n,1),n=Hn(),e!==null&&(di(e,1,n),rt(e,n))}function an(e,n,t){if(e.tag===3)vg(e,e,t);else for(;n!==null;){if(n.tag===3){vg(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Br===null||!Br.has(r))){e=Na(t,e),e=Qv(n,e,1),n=zr(n,e,1),e=Hn(),n!==null&&(di(n,1,e),rt(n,e));break}}n=n.return}}function x8(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Hn(),e.pingedLanes|=e.suspendedLanes&t,Cn===e&&(Ln&t)===t&&(yn===4||yn===3&&(Ln&130023424)===Ln&&500>on()-ef?Cl(e,0):Jh|=t),rt(e,n)}function m2(e,n){n===0&&(e.mode&1?(n=Ui,Ui<<=1,!(Ui&130023424)&&(Ui=4194304)):n=1);var t=Hn();e=fr(e,n),e!==null&&(di(e,n,t),rt(e,t))}function S8(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),m2(e,t)}function C8(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Y(314))}r!==null&&r.delete(n),m2(e,t)}var v2;v2=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||nt.current)et=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return et=!1,d8(e,n,t);et=!!(e.flags&131072)}else et=!1,Xe&&n.flags&1048576&&wv(n,Ws,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ms(e,n),e=n.pendingProps;var l=_a(n,Dn.current);wa(n,t),l=Yh(null,n,r,e,l,t);var o=qh();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,tt(r)?(o=!0,Us(n)):o=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Uh(n),l.updater=xc,n.stateNode=l,l._reactInternals=n,Pu(n,r,e,t),n=Ou(null,n,r,!0,o,t)):(n.tag=0,Xe&&o&&Mh(n),jn(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ms(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=_8(r),e=Rt(r,e),l){case 0:n=Mu(null,n,r,e,t);break e;case 1:n=ig(null,n,r,e,t);break e;case 11:n=ag(null,n,r,e,t);break e;case 14:n=og(null,n,r,Rt(r.type,e),t);break e}throw Error(Y(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Rt(r,l),Mu(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Rt(r,l),ig(e,n,r,l,t);case 3:e:{if(e2(n),e===null)throw Error(Y(387));r=n.pendingProps,o=n.memoizedState,l=o.element,kv(e,n),Ys(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){l=Na(Error(Y(423)),n),n=sg(e,n,r,t,l);break e}else if(r!==l){l=Na(Error(Y(424)),n),n=sg(e,n,r,t,l);break e}else for(ht=Dr(n.stateNode.containerInfo.firstChild),ft=n,Xe=!0,Mt=null,t=Tv(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if($a(),r===l){n=pr(e,n,t);break e}jn(e,n,r,t)}n=n.child}return n;case 5:return Nv(n),e===null&&Lu(n),r=n.type,l=n.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,_u(r,l)?i=null:o!==null&&_u(r,o)&&(n.flags|=32),Jv(e,n),jn(e,n,i,t),n.child;case 6:return e===null&&Lu(n),null;case 13:return n2(e,n,t);case 4:return Hh(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ea(n,null,r,t):jn(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Rt(r,l),ag(e,n,r,l,t);case 7:return jn(e,n,n.pendingProps,t),n.child;case 8:return jn(e,n,n.pendingProps.children,t),n.child;case 12:return jn(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,o=n.memoizedProps,i=l.value,We(Vs,r._currentValue),r._currentValue=i,o!==null)if(zt(o.value,i)){if(o.children===l.children&&!nt.current){n=pr(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var d=s.firstContext;d!==null;){if(d.context===r){if(o.tag===1){d=cr(-1,t&-t),d.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var m=h.pending;m===null?d.next=d:(d.next=m.next,m.next=d),h.pending=d}}o.lanes|=t,d=o.alternate,d!==null&&(d.lanes|=t),Iu(o.return,t,n),s.lanes|=t;break}d=d.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(Y(341));i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Iu(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}jn(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,wa(n,t),l=Ct(l),r=r(l),n.flags|=1,jn(e,n,r,t),n.child;case 14:return r=n.type,l=Rt(r,n.pendingProps),l=Rt(r.type,l),og(e,n,r,l,t);case 15:return Kv(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Rt(r,l),ms(e,n),n.tag=1,tt(r)?(e=!0,Us(n)):e=!1,wa(n,t),$v(n,r,l),Pu(n,r,l,t),Ou(null,n,r,!0,e,t);case 19:return t2(e,n,t);case 22:return Xv(e,n,t)}throw Error(Y(156,n.tag))};function y2(e,n){return Wm(e,n)}function k8(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,n,t,r){return new k8(e,n,t,r)}function lf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _8(e){if(typeof e=="function")return lf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ch)return 11;if(e===kh)return 14}return 2}function Ur(e,n){var t=e.alternate;return t===null?(t=xt(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function bs(e,n,t,r,l,o){var i=2;if(r=e,typeof e=="function")lf(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case ta:return kl(t.children,l,o,n);case Sh:i=8,l|=8;break;case ru:return e=xt(12,t,n,l|2),e.elementType=ru,e.lanes=o,e;case lu:return e=xt(13,t,n,l),e.elementType=lu,e.lanes=o,e;case au:return e=xt(19,t,n,l),e.elementType=au,e.lanes=o,e;case Em:return _c(t,l,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _m:i=10;break e;case $m:i=9;break e;case Ch:i=11;break e;case kh:i=14;break e;case Er:i=16,r=null;break e}throw Error(Y(130,e==null?e:typeof e,""))}return n=xt(i,t,n,l),n.elementType=e,n.type=r,n.lanes=o,n}function kl(e,n,t,r){return e=xt(7,e,r,n),e.lanes=t,e}function _c(e,n,t,r){return e=xt(22,e,r,n),e.elementType=Em,e.lanes=t,e.stateNode={isHidden:!1},e}function Dd(e,n,t){return e=xt(6,e,null,n),e.lanes=t,e}function zd(e,n,t){return n=xt(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function $8(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bd(0),this.expirationTimes=bd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bd(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function af(e,n,t,r,l,o,i,s,d){return e=new $8(e,n,t,s,d),n===1?(n=1,o===!0&&(n|=8)):n=0,o=xt(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uh(o),e}function E8(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:na,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function b2(e){if(!e)return Wr;e=e._reactInternals;e:{if(Rl(e)!==e||e.tag!==1)throw Error(Y(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(tt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(Y(171))}if(e.tag===1){var t=e.type;if(tt(t))return yv(e,t,n)}return n}function w2(e,n,t,r,l,o,i,s,d){return e=af(t,r,!0,e,l,o,i,s,d),e.context=b2(null),t=e.current,r=Hn(),l=jr(t),o=cr(r,l),o.callback=n??null,zr(t,o,l),e.current.lanes=l,di(e,l,r),rt(e,r),e}function $c(e,n,t,r){var l=n.current,o=Hn(),i=jr(l);return t=b2(t),n.context===null?n.context=t:n.pendingContext=t,n=cr(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=zr(l,n,i),e!==null&&(Dt(e,l,i,o),fs(e,l,i)),i}function nc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function of(e,n){yg(e,n),(e=e.alternate)&&yg(e,n)}function T8(){return null}var x2=typeof reportError=="function"?reportError:function(e){console.error(e)};function sf(e){this._internalRoot=e}Ec.prototype.render=sf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(Y(409));$c(e,n,null,null)};Ec.prototype.unmount=sf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Nl(function(){$c(null,e,null,null)}),n[hr]=null}};function Ec(e){this._internalRoot=e}Ec.prototype.unstable_scheduleHydration=function(e){if(e){var n=Km();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Nr.length&&n!==0&&n<Nr[t].priority;t++);Nr.splice(t,0,e),t===0&&Jm(e)}};function cf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Tc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bg(){}function N8(e,n,t,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var h=nc(i);o.call(h)}}var i=w2(n,r,e,0,null,!1,!1,"",bg);return e._reactRootContainer=i,e[hr]=i.current,Go(e.nodeType===8?e.parentNode:e),Nl(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var h=nc(d);s.call(h)}}var d=af(e,0,!1,null,null,!1,!1,"",bg);return e._reactRootContainer=d,e[hr]=d.current,Go(e.nodeType===8?e.parentNode:e),Nl(function(){$c(n,d,t,r)}),d}function Nc(e,n,t,r,l){var o=t._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var d=nc(i);s.call(d)}}$c(n,i,e,l)}else i=N8(t,n,e,l,r);return nc(i)}Zm=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=vo(n.pendingLanes);t!==0&&(Eh(n,t|1),rt(n,on()),!(Ne&6)&&(La=on()+500,Zr()))}break;case 13:Nl(function(){var r=fr(e,1);if(r!==null){var l=Hn();Dt(r,e,1,l)}}),of(e,1)}};Th=function(e){if(e.tag===13){var n=fr(e,134217728);if(n!==null){var t=Hn();Dt(n,e,134217728,t)}of(e,134217728)}};Qm=function(e){if(e.tag===13){var n=jr(e),t=fr(e,n);if(t!==null){var r=Hn();Dt(t,e,n,r)}of(e,n)}};Km=function(){return Ae};Xm=function(e,n){var t=Ae;try{return Ae=e,n()}finally{Ae=t}};gu=function(e,n,t){switch(n){case"input":if(su(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=bc(r);if(!l)throw Error(Y(90));Nm(r),su(r,l)}}}break;case"textarea":Im(e,t);break;case"select":n=t.value,n!=null&&ma(e,!!t.multiple,n,!1)}};Dm=nf;zm=Nl;var L8={usingClientEntryPoint:!1,Events:[hi,oa,bc,Om,Am,nf]},co={findFiberByHostInstance:ml,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},I8={bundleType:co.bundleType,version:co.version,rendererPackageName:co.rendererPackageName,rendererConfig:co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Um(e),e===null?null:e.stateNode},findFiberByHostInstance:co.findFiberByHostInstance||T8,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ji.isDisabled&&Ji.supportsFiber)try{gc=Ji.inject(I8),qt=Ji}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L8;gt.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cf(n))throw Error(Y(200));return E8(e,n,null,t)};gt.createRoot=function(e,n){if(!cf(e))throw Error(Y(299));var t=!1,r="",l=x2;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=af(e,1,!1,null,null,t,!1,r,l),e[hr]=n.current,Go(e.nodeType===8?e.parentNode:e),new sf(n)};gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=Um(n),e=e===null?null:e.stateNode,e};gt.flushSync=function(e){return Nl(e)};gt.hydrate=function(e,n,t){if(!Tc(n))throw Error(Y(200));return Nc(null,e,n,!0,t)};gt.hydrateRoot=function(e,n,t){if(!cf(e))throw Error(Y(405));var r=t!=null&&t.hydratedSources||null,l=!1,o="",i=x2;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=w2(n,null,e,1,t??null,l,!1,o,i),e[hr]=n.current,Go(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new Ec(n)};gt.render=function(e,n,t){if(!Tc(n))throw Error(Y(200));return Nc(null,e,n,!1,t)};gt.unmountComponentAtNode=function(e){if(!Tc(e))throw Error(Y(40));return e._reactRootContainer?(Nl(function(){Nc(null,null,e,!1,function(){e._reactRootContainer=null,e[hr]=null})}),!0):!1};gt.unstable_batchedUpdates=nf;gt.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Tc(t))throw Error(Y(200));if(e==null||e._reactInternals===void 0)throw Error(Y(38));return Nc(e,n,t,!1,r)};gt.version="18.2.0-next-9e3b772b8-20220608";function S2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S2)}catch(e){console.error(e)}}S2(),wm.exports=gt;var C2=wm.exports,wg=C2;nu.createRoot=wg.createRoot,nu.hydrateRoot=wg.hydrateRoot;function R8(e,n){if(e==null)return{};var t={},r=Object.keys(e),l,o;for(o=0;o<r.length;o++)l=r[o],!(n.indexOf(l)>=0)&&(t[l]=e[l]);return t}function P8(e,n){if(e==null)return{};var t=R8(e,n),r,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)r=o[l],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function qu(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function F8(e){if(Array.isArray(e))return qu(e)}function M8(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function O8(e,n){if(e){if(typeof e=="string")return qu(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return qu(e,n)}}function A8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D8(e){return F8(e)||M8(e)||O8(e)||A8()}function ni(e){"@babel/helpers - typeof";return ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ni(e)}function z8(e,n){if(ni(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(ni(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function B8(e){var n=z8(e,"string");return ni(n)==="symbol"?n:String(n)}function k2(e,n,t){return n=B8(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Zu(){return Zu=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Zu.apply(this,arguments)}function xg(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function fa(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?xg(Object(t),!0).forEach(function(r){k2(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):xg(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function j8(e){var n=e.length;if(n===0||n===1)return e;if(n===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(n===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(n>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var Bd={};function U8(e){if(e.length===0||e.length===1)return e;var n=e.join(".");return Bd[n]||(Bd[n]=j8(e)),Bd[n]}function H8(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,r=e.filter(function(o){return o!=="token"}),l=U8(r);return l.reduce(function(o,i){return fa(fa({},o),t[i])},n)}function Sg(e){return e.join(" ")}function W8(e,n){var t=0;return function(r){return t+=1,r.map(function(l,o){return _2({node:l,stylesheet:e,useInlineStyles:n,key:"code-segment-".concat(t,"-").concat(o)})})}}function _2(e){var n=e.node,t=e.stylesheet,r=e.style,l=r===void 0?{}:r,o=e.useInlineStyles,i=e.key,s=n.properties,d=n.type,h=n.tagName,m=n.value;if(d==="text")return m;if(h){var b=W8(t,o),S;if(!o)S=fa(fa({},s),{},{className:Sg(s.className)});else{var L=Object.keys(t).reduce(function(w,g){return g.split(".").forEach(function(y){w.includes(y)||w.push(y)}),w},[]),N=s.className&&s.className.includes("token")?["token"]:[],C=s.className&&N.concat(s.className.filter(function(w){return!L.includes(w)}));S=fa(fa({},s),{},{className:Sg(C)||void 0,style:H8(s.className,Object.assign({},s.style,l),t)})}var I=b(n.children);return Tn.createElement(h,Zu({key:i},S),I)}}const V8=function(e,n){var t=e.listLanguages();return t.indexOf(n)!==-1};var G8=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function Cg(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function Gt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Cg(Object(t),!0).forEach(function(r){k2(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Cg(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Y8=/\n/g;function q8(e){return e.match(Y8)}function Z8(e){var n=e.lines,t=e.startingLineNumber,r=e.style;return n.map(function(l,o){var i=o+t;return Tn.createElement("span",{key:"line-".concat(o),className:"react-syntax-highlighter-line-number",style:typeof r=="function"?r(i):r},"".concat(i,`
`))})}function Q8(e){var n=e.codeString,t=e.codeStyle,r=e.containerStyle,l=r===void 0?{float:"left",paddingRight:"10px"}:r,o=e.numberStyle,i=o===void 0?{}:o,s=e.startingLineNumber;return Tn.createElement("code",{style:Object.assign({},t,l)},Z8({lines:n.replace(/\n$/,"").split(`
`),style:i,startingLineNumber:s}))}function K8(e){return"".concat(e.toString().length,".25em")}function $2(e,n){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:n},children:[{type:"text",value:e}]}}function E2(e,n,t){var r={display:"inline-block",minWidth:K8(t),paddingRight:"1em",textAlign:"right",userSelect:"none"},l=typeof e=="function"?e(n):e,o=Gt(Gt({},r),l);return o}function ws(e){var n=e.children,t=e.lineNumber,r=e.lineNumberStyle,l=e.largestLineNumber,o=e.showInlineLineNumbers,i=e.lineProps,s=i===void 0?{}:i,d=e.className,h=d===void 0?[]:d,m=e.showLineNumbers,b=e.wrapLongLines,S=typeof s=="function"?s(t):s;if(S.className=h,t&&o){var L=E2(r,t,l);n.unshift($2(t,L))}return b&m&&(S.style=Gt(Gt({},S.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:S,children:n}}function T2(e){for(var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=0;r<e.length;r++){var l=e[r];if(l.type==="text")t.push(ws({children:[l],className:D8(new Set(n))}));else if(l.children){var o=n.concat(l.properties.className);T2(l.children,o).forEach(function(i){return t.push(i)})}}return t}function X8(e,n,t,r,l,o,i,s,d){var h,m=T2(e.value),b=[],S=-1,L=0;function N(E,_){var F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return ws({children:E,lineNumber:_,lineNumberStyle:s,largestLineNumber:i,showInlineLineNumbers:l,lineProps:t,className:F,showLineNumbers:r,wrapLongLines:d})}function C(E,_){if(r&&_&&l){var F=E2(s,_,i);E.unshift($2(_,F))}return E}function I(E,_){var F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return n||F.length>0?N(E,_,F):C(E,_)}for(var w=function(){var _=m[L],F=_.children[0].value,O=q8(F);if(O){var B=F.split(`
`);B.forEach(function(q,he){var se=r&&b.length+o,Be={type:"text",value:"".concat(q,`
`)};if(he===0){var ln=m.slice(S+1,L).concat(ws({children:[Be],className:_.properties.className})),Ve=I(ln,se);b.push(Ve)}else if(he===B.length-1){var De=m[L+1]&&m[L+1].children&&m[L+1].children[0],Ge={type:"text",value:"".concat(q)};if(De){var j=ws({children:[Ge],className:_.properties.className});m.splice(L+1,0,j)}else{var Z=[Ge],J=I(Z,se,_.properties.className);b.push(J)}}else{var ae=[Be],fe=I(ae,se,_.properties.className);b.push(fe)}}),S=L}L++};L<m.length;)w();if(S!==m.length-1){var g=m.slice(S+1,m.length);if(g&&g.length){var y=r&&b.length+o,v=I(g,y);b.push(v)}}return n?b:(h=[]).concat.apply(h,b)}function J8(e){var n=e.rows,t=e.stylesheet,r=e.useInlineStyles;return n.map(function(l,o){return _2({node:l,stylesheet:t,useInlineStyles:r,key:"code-segement".concat(o)})})}function N2(e){return e&&typeof e.highlightAuto<"u"}function ex(e){var n=e.astGenerator,t=e.language,r=e.code,l=e.defaultCodeValue;if(N2(n)){var o=V8(n,t);return t==="text"?{value:l,language:"text"}:o?n.highlight(t,r):n.highlightAuto(r)}try{return t&&t!=="text"?{value:n.highlight(r,t)}:{value:l}}catch{return{value:l}}}function nx(e,n){return function(r){var l=r.language,o=r.children,i=r.style,s=i===void 0?n:i,d=r.customStyle,h=d===void 0?{}:d,m=r.codeTagProps,b=m===void 0?{className:l?"language-".concat(l):void 0,style:Gt(Gt({},s['code[class*="language-"]']),s['code[class*="language-'.concat(l,'"]')])}:m,S=r.useInlineStyles,L=S===void 0?!0:S,N=r.showLineNumbers,C=N===void 0?!1:N,I=r.showInlineLineNumbers,w=I===void 0?!0:I,g=r.startingLineNumber,y=g===void 0?1:g,v=r.lineNumberContainerStyle,E=r.lineNumberStyle,_=E===void 0?{}:E,F=r.wrapLines,O=r.wrapLongLines,B=O===void 0?!1:O,q=r.lineProps,he=q===void 0?{}:q,se=r.renderer,Be=r.PreTag,ln=Be===void 0?"pre":Be,Ve=r.CodeTag,De=Ve===void 0?"code":Ve,Ge=r.code,j=Ge===void 0?(Array.isArray(o)?o[0]:o)||"":Ge,Z=r.astGenerator,J=P8(r,G8);Z=Z||e;var ae=C?Tn.createElement(Q8,{containerStyle:v,codeStyle:b.style||{},numberStyle:_,startingLineNumber:y,codeString:j}):null,fe=s.hljs||s['pre[class*="language-"]']||{backgroundColor:"#fff"},zn=N2(Z)?"hljs":"prismjs",pe=L?Object.assign({},J,{style:Object.assign({},fe,h)}):Object.assign({},J,{className:J.className?"".concat(zn," ").concat(J.className):zn,style:Object.assign({},h)});if(B?b.style=Gt(Gt({},b.style),{},{whiteSpace:"pre-wrap"}):b.style=Gt(Gt({},b.style),{},{whiteSpace:"pre"}),!Z)return Tn.createElement(ln,pe,ae,Tn.createElement(De,b,j));(F===void 0&&se||B)&&(F=!0),se=se||J8;var en=[{type:"text",value:j}],Ye=ex({astGenerator:Z,language:l,code:j,defaultCodeValue:en});Ye.language===null&&(Ye.value=en);var fn=Ye.value.length+y,Fn=X8(Ye,F,he,C,w,y,fn,_,B);return Tn.createElement(ln,pe,Tn.createElement(De,b,!w&&ae,se({rows:Fn,stylesheet:s,useInlineStyles:L})))}}var tx=lx,rx=Object.prototype.hasOwnProperty;function lx(){for(var e={},n=0;n<arguments.length;n++){var t=arguments[n];for(var r in t)rx.call(t,r)&&(e[r]=t[r])}return e}var L2=I2,df=I2.prototype;df.space=null;df.normal={};df.property={};function I2(e,n,t){this.property=e,this.normal=n,t&&(this.space=t)}var kg=tx,ax=L2,ox=ix;function ix(e){for(var n=e.length,t=[],r=[],l=-1,o,i;++l<n;)o=e[l],t.push(o.property),r.push(o.normal),i=o.space;return new ax(kg.apply(null,t),kg.apply(null,r),i)}var uf=sx;function sx(e){return e.toLowerCase()}var R2=P2,_t=P2.prototype;_t.space=null;_t.attribute=null;_t.property=null;_t.boolean=!1;_t.booleanish=!1;_t.overloadedBoolean=!1;_t.number=!1;_t.commaSeparated=!1;_t.spaceSeparated=!1;_t.commaOrSpaceSeparated=!1;_t.mustUseProperty=!1;_t.defined=!1;function P2(e,n){this.property=e,this.attribute=n}var Kt={},cx=0;Kt.boolean=Pl();Kt.booleanish=Pl();Kt.overloadedBoolean=Pl();Kt.number=Pl();Kt.spaceSeparated=Pl();Kt.commaSeparated=Pl();Kt.commaOrSpaceSeparated=Pl();function Pl(){return Math.pow(2,++cx)}var F2=R2,_g=Kt,M2=hf;hf.prototype=new F2;hf.prototype.defined=!0;var O2=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],dx=O2.length;function hf(e,n,t,r){var l=-1,o;for($g(this,"space",r),F2.call(this,e,n);++l<dx;)o=O2[l],$g(this,o,(t&_g[o])===_g[o])}function $g(e,n,t){t&&(e[n]=t)}var Eg=uf,ux=L2,hx=M2,pi=fx;function fx(e){var n=e.space,t=e.mustUseProperty||[],r=e.attributes||{},l=e.properties,o=e.transform,i={},s={},d,h;for(d in l)h=new hx(d,o(r,d),l[d],n),t.indexOf(d)!==-1&&(h.mustUseProperty=!0),i[d]=h,s[Eg(d)]=d,s[Eg(h.attribute)]=d;return new ux(i,s,n)}var px=pi,gx=px({space:"xlink",transform:mx,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function mx(e,n){return"xlink:"+n.slice(5).toLowerCase()}var vx=pi,yx=vx({space:"xml",transform:bx,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function bx(e,n){return"xml:"+n.slice(3).toLowerCase()}var wx=xx;function xx(e,n){return n in e?e[n]:n}var Sx=wx,A2=Cx;function Cx(e,n){return Sx(e,n.toLowerCase())}var kx=pi,_x=A2,$x=kx({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:_x,properties:{xmlns:null,xmlnsXLink:null}}),ff=Kt,Ex=pi,Qn=ff.booleanish,yt=ff.number,cl=ff.spaceSeparated,Tx=Ex({transform:Nx,properties:{ariaActiveDescendant:null,ariaAtomic:Qn,ariaAutoComplete:null,ariaBusy:Qn,ariaChecked:Qn,ariaColCount:yt,ariaColIndex:yt,ariaColSpan:yt,ariaControls:cl,ariaCurrent:null,ariaDescribedBy:cl,ariaDetails:null,ariaDisabled:Qn,ariaDropEffect:cl,ariaErrorMessage:null,ariaExpanded:Qn,ariaFlowTo:cl,ariaGrabbed:Qn,ariaHasPopup:null,ariaHidden:Qn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:cl,ariaLevel:yt,ariaLive:null,ariaModal:Qn,ariaMultiLine:Qn,ariaMultiSelectable:Qn,ariaOrientation:null,ariaOwns:cl,ariaPlaceholder:null,ariaPosInSet:yt,ariaPressed:Qn,ariaReadOnly:Qn,ariaRelevant:null,ariaRequired:Qn,ariaRoleDescription:cl,ariaRowCount:yt,ariaRowIndex:yt,ariaRowSpan:yt,ariaSelected:Qn,ariaSetSize:yt,ariaSort:null,ariaValueMax:yt,ariaValueMin:yt,ariaValueNow:yt,ariaValueText:null,role:null}});function Nx(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}var Oa=Kt,Lx=pi,Ix=A2,we=Oa.boolean,Rx=Oa.overloadedBoolean,uo=Oa.booleanish,qe=Oa.number,Bn=Oa.spaceSeparated,es=Oa.commaSeparated,Px=Lx({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Ix,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:es,acceptCharset:Bn,accessKey:Bn,action:null,allow:null,allowFullScreen:we,allowPaymentRequest:we,allowUserMedia:we,alt:null,as:null,async:we,autoCapitalize:null,autoComplete:Bn,autoFocus:we,autoPlay:we,capture:we,charSet:null,checked:we,cite:null,className:Bn,cols:qe,colSpan:null,content:null,contentEditable:uo,controls:we,controlsList:Bn,coords:qe|es,crossOrigin:null,data:null,dateTime:null,decoding:null,default:we,defer:we,dir:null,dirName:null,disabled:we,download:Rx,draggable:uo,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:we,formTarget:null,headers:Bn,height:qe,hidden:we,high:qe,href:null,hrefLang:null,htmlFor:Bn,httpEquiv:Bn,id:null,imageSizes:null,imageSrcSet:es,inputMode:null,integrity:null,is:null,isMap:we,itemId:null,itemProp:Bn,itemRef:Bn,itemScope:we,itemType:Bn,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:we,low:qe,manifest:null,max:null,maxLength:qe,media:null,method:null,min:null,minLength:qe,multiple:we,muted:we,name:null,nonce:null,noModule:we,noValidate:we,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:we,optimum:qe,pattern:null,ping:Bn,placeholder:null,playsInline:we,poster:null,preload:null,readOnly:we,referrerPolicy:null,rel:Bn,required:we,reversed:we,rows:qe,rowSpan:qe,sandbox:Bn,scope:null,scoped:we,seamless:we,selected:we,shape:null,size:qe,sizes:null,slot:null,span:qe,spellCheck:uo,src:null,srcDoc:null,srcLang:null,srcSet:es,start:qe,step:null,style:null,tabIndex:qe,target:null,title:null,translate:null,type:null,typeMustMatch:we,useMap:null,value:uo,width:qe,wrap:null,align:null,aLink:null,archive:Bn,axis:null,background:null,bgColor:null,border:qe,borderColor:null,bottomMargin:qe,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:we,declare:we,event:null,face:null,frame:null,frameBorder:null,hSpace:qe,leftMargin:qe,link:null,longDesc:null,lowSrc:null,marginHeight:qe,marginWidth:qe,noResize:we,noHref:we,noShade:we,noWrap:we,object:null,profile:null,prompt:null,rev:null,rightMargin:qe,rules:null,scheme:null,scrolling:uo,standby:null,summary:null,text:null,topMargin:qe,valueType:null,version:null,vAlign:null,vLink:null,vSpace:qe,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:we,disableRemotePlayback:we,prefix:null,property:null,results:qe,security:null,unselectable:null}}),Fx=ox,Mx=gx,Ox=yx,Ax=$x,Dx=Tx,zx=Px,Bx=Fx([Ox,Mx,Ax,Dx,zx]),jx=uf,Ux=M2,Hx=R2,pf="data",Wx=Yx,Vx=/^data[-\w.:]+$/i,D2=/-[a-z]/g,Gx=/[A-Z]/g;function Yx(e,n){var t=jx(n),r=n,l=Hx;return t in e.normal?e.property[e.normal[t]]:(t.length>4&&t.slice(0,4)===pf&&Vx.test(n)&&(n.charAt(4)==="-"?r=qx(n):n=Zx(n),l=Ux),new l(r,n))}function qx(e){var n=e.slice(5).replace(D2,Kx);return pf+n.charAt(0).toUpperCase()+n.slice(1)}function Zx(e){var n=e.slice(4);return D2.test(n)?e:(n=n.replace(Gx,Qx),n.charAt(0)!=="-"&&(n="-"+n),pf+n)}function Qx(e){return"-"+e.toLowerCase()}function Kx(e){return e.charAt(1).toUpperCase()}var Xx=Jx,Tg=/[#.]/g;function Jx(e,n){for(var t=e||"",r=n||"div",l={},o=0,i,s,d;o<t.length;)Tg.lastIndex=o,d=Tg.exec(t),i=t.slice(o,d?d.index:t.length),i&&(s?s==="#"?l.id=i:l.className?l.className.push(i):l.className=[i]:r=i,o+=i.length),d&&(s=d[0],o++);return{type:"element",tagName:r,properties:l,children:[]}}var gf={};gf.parse=t9;gf.stringify=r9;var Ng="",e9=" ",n9=/[ \t\n\r\f]+/g;function t9(e){var n=String(e||Ng).trim();return n===Ng?[]:n.split(n9)}function r9(e){return e.join(e9).trim()}var mf={};mf.parse=l9;mf.stringify=a9;var Qu=",",Lg=" ",bo="";function l9(e){for(var n=[],t=String(e||bo),r=t.indexOf(Qu),l=0,o=!1,i;!o;)r===-1&&(r=t.length,o=!0),i=t.slice(l,r).trim(),(i||!o)&&n.push(i),l=r+1,r=t.indexOf(Qu,l);return n}function a9(e,n){var t=n||{},r=t.padLeft===!1?bo:Lg,l=t.padRight?Lg:bo;return e[e.length-1]===bo&&(e=e.concat(bo)),e.join(l+Qu+r).trim()}var o9=Wx,Ig=uf,i9=Xx,Rg=gf.parse,Pg=mf.parse,s9=d9,c9={}.hasOwnProperty;function d9(e,n,t){var r=t?g9(t):null;return l;function l(i,s){var d=i9(i,n),h=Array.prototype.slice.call(arguments,2),m=d.tagName.toLowerCase(),b;if(d.tagName=r&&c9.call(r,m)?r[m]:m,s&&u9(s,d)&&(h.unshift(s),s=null),s)for(b in s)o(d.properties,b,s[b]);return z2(d.children,h),d.tagName==="template"&&(d.content={type:"root",children:d.children},d.children=[]),d}function o(i,s,d){var h,m,b;d==null||d!==d||(h=o9(e,s),m=h.property,b=d,typeof b=="string"&&(h.spaceSeparated?b=Rg(b):h.commaSeparated?b=Pg(b):h.commaOrSpaceSeparated&&(b=Rg(Pg(b).join(" ")))),m==="style"&&typeof d!="string"&&(b=p9(b)),m==="className"&&i.className&&(b=i.className.concat(b)),i[m]=f9(h,m,b))}}function u9(e,n){return typeof e=="string"||"length"in e||h9(n.tagName,e)}function h9(e,n){var t=n.type;return e==="input"||!t||typeof t!="string"?!1:typeof n.children=="object"&&"length"in n.children?!0:(t=t.toLowerCase(),e==="button"?t!=="menu"&&t!=="submit"&&t!=="reset"&&t!=="button":"value"in n)}function z2(e,n){var t,r;if(typeof n=="string"||typeof n=="number"){e.push({type:"text",value:String(n)});return}if(typeof n=="object"&&"length"in n){for(t=-1,r=n.length;++t<r;)z2(e,n[t]);return}if(typeof n!="object"||!("type"in n))throw new Error("Expected node, nodes, or string, got `"+n+"`");e.push(n)}function f9(e,n,t){var r,l,o;if(typeof t!="object"||!("length"in t))return Fg(e,n,t);for(l=t.length,r=-1,o=[];++r<l;)o[r]=Fg(e,n,t[r]);return o}function Fg(e,n,t){var r=t;return e.number||e.positiveNumber?!isNaN(r)&&r!==""&&(r=Number(r)):(e.boolean||e.overloadedBoolean)&&typeof r=="string"&&(r===""||Ig(t)===Ig(n))&&(r=!0),r}function p9(e){var n=[],t;for(t in e)n.push([t,e[t]].join(": "));return n.join("; ")}function g9(e){for(var n=e.length,t=-1,r={},l;++t<n;)l=e[t],r[l.toLowerCase()]=l;return r}var m9=Bx,v9=s9,B2=v9(m9,"div");B2.displayName="html";var y9=B2,b9=y9;const w9="Æ",x9="&",S9="Á",C9="Â",k9="À",_9="Å",$9="Ã",E9="Ä",T9="©",N9="Ç",L9="Ð",I9="É",R9="Ê",P9="È",F9="Ë",M9=">",O9="Í",A9="Î",D9="Ì",z9="Ï",B9="<",j9="Ñ",U9="Ó",H9="Ô",W9="Ò",V9="Ø",G9="Õ",Y9="Ö",q9='"',Z9="®",Q9="Þ",K9="Ú",X9="Û",J9="Ù",e7="Ü",n7="Ý",t7="á",r7="â",l7="´",a7="æ",o7="à",i7="&",s7="å",c7="ã",d7="ä",u7="¦",h7="ç",f7="¸",p7="¢",g7="©",m7="¤",v7="°",y7="÷",b7="é",w7="ê",x7="è",S7="ð",C7="ë",k7="½",_7="¼",$7="¾",E7=">",T7="í",N7="î",L7="¡",I7="ì",R7="¿",P7="ï",F7="«",M7="<",O7="¯",A7="µ",D7="·",z7=" ",B7="¬",j7="ñ",U7="ó",H7="ô",W7="ò",V7="ª",G7="º",Y7="ø",q7="õ",Z7="ö",Q7="¶",K7="±",X7="£",J7='"',eS="»",nS="®",tS="§",rS="­",lS="¹",aS="²",oS="³",iS="ß",sS="þ",cS="×",dS="ú",uS="û",hS="ù",fS="¨",pS="ü",gS="ý",mS="¥",vS="ÿ",yS={AElig:w9,AMP:x9,Aacute:S9,Acirc:C9,Agrave:k9,Aring:_9,Atilde:$9,Auml:E9,COPY:T9,Ccedil:N9,ETH:L9,Eacute:I9,Ecirc:R9,Egrave:P9,Euml:F9,GT:M9,Iacute:O9,Icirc:A9,Igrave:D9,Iuml:z9,LT:B9,Ntilde:j9,Oacute:U9,Ocirc:H9,Ograve:W9,Oslash:V9,Otilde:G9,Ouml:Y9,QUOT:q9,REG:Z9,THORN:Q9,Uacute:K9,Ucirc:X9,Ugrave:J9,Uuml:e7,Yacute:n7,aacute:t7,acirc:r7,acute:l7,aelig:a7,agrave:o7,amp:i7,aring:s7,atilde:c7,auml:d7,brvbar:u7,ccedil:h7,cedil:f7,cent:p7,copy:g7,curren:m7,deg:v7,divide:y7,eacute:b7,ecirc:w7,egrave:x7,eth:S7,euml:C7,frac12:k7,frac14:_7,frac34:$7,gt:E7,iacute:T7,icirc:N7,iexcl:L7,igrave:I7,iquest:R7,iuml:P7,laquo:F7,lt:M7,macr:O7,micro:A7,middot:D7,nbsp:z7,not:B7,ntilde:j7,oacute:U7,ocirc:H7,ograve:W7,ordf:V7,ordm:G7,oslash:Y7,otilde:q7,ouml:Z7,para:Q7,plusmn:K7,pound:X7,quot:J7,raquo:eS,reg:nS,sect:tS,shy:rS,sup1:lS,sup2:aS,sup3:oS,szlig:iS,thorn:sS,times:cS,uacute:dS,ucirc:uS,ugrave:hS,uml:fS,uuml:pS,yacute:gS,yen:mS,yuml:vS},bS={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var j2=wS;function wS(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=48&&n<=57}var xS=SS;function SS(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=97&&n<=102||n>=65&&n<=70||n>=48&&n<=57}var CS=kS;function kS(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=97&&n<=122||n>=65&&n<=90}var _S=CS,$S=j2,ES=TS;function TS(e){return _S(e)||$S(e)}var ns,NS=59,LS=IS;function IS(e){var n="&"+e+";",t;return ns=ns||document.createElement("i"),ns.innerHTML=n,t=ns.textContent,t.charCodeAt(t.length-1)===NS&&e!=="semi"||t===n?!1:t}var Mg=yS,Og=bS,RS=j2,PS=xS,U2=ES,FS=LS,MS=qS,OS={}.hasOwnProperty,Kl=String.fromCharCode,AS=Function.prototype,Ag={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},DS=9,Dg=10,zS=12,BS=32,zg=38,jS=59,US=60,HS=61,WS=35,VS=88,GS=120,YS=65533,Jl="named",vf="hexadecimal",yf="decimal",bf={};bf[vf]=16;bf[yf]=10;var Lc={};Lc[Jl]=U2;Lc[yf]=RS;Lc[vf]=PS;var H2=1,W2=2,V2=3,G2=4,Y2=5,Ku=6,q2=7,Qr={};Qr[H2]="Named character references must be terminated by a semicolon";Qr[W2]="Numeric character references must be terminated by a semicolon";Qr[V2]="Named character references cannot be empty";Qr[G2]="Numeric character references cannot be empty";Qr[Y2]="Named character references must be known";Qr[Ku]="Numeric character references cannot be disallowed";Qr[q2]="Numeric character references cannot be outside the permissible Unicode range";function qS(e,n){var t={},r,l;n||(n={});for(l in Ag)r=n[l],t[l]=r??Ag[l];return(t.position.indent||t.position.start)&&(t.indent=t.position.indent||[],t.position=t.position.start),ZS(e,t)}function ZS(e,n){var t=n.additional,r=n.nonTerminated,l=n.text,o=n.reference,i=n.warning,s=n.textContext,d=n.referenceContext,h=n.warningContext,m=n.position,b=n.indent||[],S=e.length,L=0,N=-1,C=m.column||1,I=m.line||1,w="",g=[],y,v,E,_,F,O,B,q,he,se,Be,ln,Ve,De,Ge,j,Z,J,ae;for(typeof t=="string"&&(t=t.charCodeAt(0)),j=fe(),q=i?zn:AS,L--,S++;++L<S;)if(F===Dg&&(C=b[N]||1),F=e.charCodeAt(L),F===zg){if(B=e.charCodeAt(L+1),B===DS||B===Dg||B===zS||B===BS||B===zg||B===US||B!==B||t&&B===t){w+=Kl(F),C++;continue}for(Ve=L+1,ln=Ve,ae=Ve,B===WS?(ae=++ln,B=e.charCodeAt(ae),B===VS||B===GS?(De=vf,ae=++ln):De=yf):De=Jl,y="",Be="",_="",Ge=Lc[De],ae--;++ae<S&&(B=e.charCodeAt(ae),!!Ge(B));)_+=Kl(B),De===Jl&&OS.call(Mg,_)&&(y=_,Be=Mg[_]);E=e.charCodeAt(ae)===jS,E&&(ae++,v=De===Jl?FS(_):!1,v&&(y=_,Be=v)),J=1+ae-Ve,!E&&!r||(_?De===Jl?(E&&!Be?q(Y2,1):(y!==_&&(ae=ln+y.length,J=1+ae-ln,E=!1),E||(he=y?H2:V2,n.attribute?(B=e.charCodeAt(ae),B===HS?(q(he,J),Be=null):U2(B)?Be=null:q(he,J)):q(he,J))),O=Be):(E||q(W2,J),O=parseInt(_,bf[De]),QS(O)?(q(q2,J),O=Kl(YS)):O in Og?(q(Ku,J),O=Og[O]):(se="",KS(O)&&q(Ku,J),O>65535&&(O-=65536,se+=Kl(O>>>10|55296),O=56320|O&1023),O=se+Kl(O))):De!==Jl&&q(G2,J)),O?(pe(),j=fe(),L=ae-1,C+=ae-Ve+1,g.push(O),Z=fe(),Z.offset++,o&&o.call(d,O,{start:j,end:Z},e.slice(Ve-1,ae)),j=Z):(_=e.slice(Ve-1,ae),w+=_,C+=_.length,L=ae-1)}else F===10&&(I++,N++,C=0),F===F?(w+=Kl(F),C++):pe();return g.join("");function fe(){return{line:I,column:C,offset:L+(m.offset||0)}}function zn(en,Ye){var fn=fe();fn.column+=Ye,fn.offset+=Ye,i.call(h,Qr[en],fn,en)}function pe(){w&&(g.push(w),l&&l.call(s,w,{start:j,end:fe()}),w="")}}function QS(e){return e>=55296&&e<=57343||e>1114111}function KS(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var Z2={exports:{}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(r){var l=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,i={},s={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function g(y){return y instanceof d?new d(y.type,g(y.content),y.alias):Array.isArray(y)?y.map(g):y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++o}),g.__id},clone:function g(y,v){v=v||{};var E,_;switch(s.util.type(y)){case"Object":if(_=s.util.objId(y),v[_])return v[_];E={},v[_]=E;for(var F in y)y.hasOwnProperty(F)&&(E[F]=g(y[F],v));return E;case"Array":return _=s.util.objId(y),v[_]?v[_]:(E=[],v[_]=E,y.forEach(function(O,B){E[B]=g(O,v)}),E);default:return y}},getLanguage:function(g){for(;g;){var y=l.exec(g.className);if(y)return y[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,y){g.className=g.className.replace(RegExp(l,"gi"),""),g.classList.add("language-"+y)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(E){var g=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(E.stack)||[])[1];if(g){var y=document.getElementsByTagName("script");for(var v in y)if(y[v].src==g)return y[v]}return null}},isActive:function(g,y,v){for(var E="no-"+y;g;){var _=g.classList;if(_.contains(y))return!0;if(_.contains(E))return!1;g=g.parentElement}return!!v}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(g,y){var v=s.util.clone(s.languages[g]);for(var E in y)v[E]=y[E];return v},insertBefore:function(g,y,v,E){E=E||s.languages;var _=E[g],F={};for(var O in _)if(_.hasOwnProperty(O)){if(O==y)for(var B in v)v.hasOwnProperty(B)&&(F[B]=v[B]);v.hasOwnProperty(O)||(F[O]=_[O])}var q=E[g];return E[g]=F,s.languages.DFS(s.languages,function(he,se){se===q&&he!=g&&(this[he]=F)}),F},DFS:function g(y,v,E,_){_=_||{};var F=s.util.objId;for(var O in y)if(y.hasOwnProperty(O)){v.call(y,O,y[O],E||O);var B=y[O],q=s.util.type(B);q==="Object"&&!_[F(B)]?(_[F(B)]=!0,g(B,v,null,_)):q==="Array"&&!_[F(B)]&&(_[F(B)]=!0,g(B,v,O,_))}}},plugins:{},highlightAll:function(g,y){s.highlightAllUnder(document,g,y)},highlightAllUnder:function(g,y,v){var E={callback:v,container:g,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",E),E.elements=Array.prototype.slice.apply(E.container.querySelectorAll(E.selector)),s.hooks.run("before-all-elements-highlight",E);for(var _=0,F;F=E.elements[_++];)s.highlightElement(F,y===!0,E.callback)},highlightElement:function(g,y,v){var E=s.util.getLanguage(g),_=s.languages[E];s.util.setLanguage(g,E);var F=g.parentElement;F&&F.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(F,E);var O=g.textContent,B={element:g,language:E,grammar:_,code:O};function q(se){B.highlightedCode=se,s.hooks.run("before-insert",B),B.element.innerHTML=B.highlightedCode,s.hooks.run("after-highlight",B),s.hooks.run("complete",B),v&&v.call(B.element)}if(s.hooks.run("before-sanity-check",B),F=B.element.parentElement,F&&F.nodeName.toLowerCase()==="pre"&&!F.hasAttribute("tabindex")&&F.setAttribute("tabindex","0"),!B.code){s.hooks.run("complete",B),v&&v.call(B.element);return}if(s.hooks.run("before-highlight",B),!B.grammar){q(s.util.encode(B.code));return}if(y&&r.Worker){var he=new Worker(s.filename);he.onmessage=function(se){q(se.data)},he.postMessage(JSON.stringify({language:B.language,code:B.code,immediateClose:!0}))}else q(s.highlight(B.code,B.grammar,B.language))},highlight:function(g,y,v){var E={code:g,grammar:y,language:v};if(s.hooks.run("before-tokenize",E),!E.grammar)throw new Error('The language "'+E.language+'" has no grammar.');return E.tokens=s.tokenize(E.code,E.grammar),s.hooks.run("after-tokenize",E),d.stringify(s.util.encode(E.tokens),E.language)},tokenize:function(g,y){var v=y.rest;if(v){for(var E in v)y[E]=v[E];delete y.rest}var _=new b;return S(_,_.head,g),m(g,_,y,_.head,0),N(_)},hooks:{all:{},add:function(g,y){var v=s.hooks.all;v[g]=v[g]||[],v[g].push(y)},run:function(g,y){var v=s.hooks.all[g];if(!(!v||!v.length))for(var E=0,_;_=v[E++];)_(y)}},Token:d};r.Prism=s;function d(g,y,v,E){this.type=g,this.content=y,this.alias=v,this.length=(E||"").length|0}d.stringify=function g(y,v){if(typeof y=="string")return y;if(Array.isArray(y)){var E="";return y.forEach(function(q){E+=g(q,v)}),E}var _={type:y.type,content:g(y.content,v),tag:"span",classes:["token",y.type],attributes:{},language:v},F=y.alias;F&&(Array.isArray(F)?Array.prototype.push.apply(_.classes,F):_.classes.push(F)),s.hooks.run("wrap",_);var O="";for(var B in _.attributes)O+=" "+B+'="'+(_.attributes[B]||"").replace(/"/g,"&quot;")+'"';return"<"+_.tag+' class="'+_.classes.join(" ")+'"'+O+">"+_.content+"</"+_.tag+">"};function h(g,y,v,E){g.lastIndex=y;var _=g.exec(v);if(_&&E&&_[1]){var F=_[1].length;_.index+=F,_[0]=_[0].slice(F)}return _}function m(g,y,v,E,_,F){for(var O in v)if(!(!v.hasOwnProperty(O)||!v[O])){var B=v[O];B=Array.isArray(B)?B:[B];for(var q=0;q<B.length;++q){if(F&&F.cause==O+","+q)return;var he=B[q],se=he.inside,Be=!!he.lookbehind,ln=!!he.greedy,Ve=he.alias;if(ln&&!he.pattern.global){var De=he.pattern.toString().match(/[imsuy]*$/)[0];he.pattern=RegExp(he.pattern.source,De+"g")}for(var Ge=he.pattern||he,j=E.next,Z=_;j!==y.tail&&!(F&&Z>=F.reach);Z+=j.value.length,j=j.next){var J=j.value;if(y.length>g.length)return;if(!(J instanceof d)){var ae=1,fe;if(ln){if(fe=h(Ge,Z,g,Be),!fe||fe.index>=g.length)break;var Ye=fe.index,zn=fe.index+fe[0].length,pe=Z;for(pe+=j.value.length;Ye>=pe;)j=j.next,pe+=j.value.length;if(pe-=j.value.length,Z=pe,j.value instanceof d)continue;for(var en=j;en!==y.tail&&(pe<zn||typeof en.value=="string");en=en.next)ae++,pe+=en.value.length;ae--,J=g.slice(Z,pe),fe.index-=Z}else if(fe=h(Ge,0,J,Be),!fe)continue;var Ye=fe.index,fn=fe[0],Fn=J.slice(0,Ye),Xr=J.slice(Ye+fn.length),Jr=Z+J.length;F&&Jr>F.reach&&(F.reach=Jr);var Xt=j.prev;Fn&&(Xt=S(y,Xt,Fn),Z+=Fn.length),L(y,Xt,ae);var ja=new d(O,se?s.tokenize(fn,se):fn,Ve,fn);if(j=S(y,Xt,ja),Xr&&S(y,j,Xr),ae>1){var el={cause:O+","+q,reach:Jr};m(g,y,v,j.prev,Z,el),F&&el.reach>F.reach&&(F.reach=el.reach)}}}}}}function b(){var g={value:null,prev:null,next:null},y={value:null,prev:g,next:null};g.next=y,this.head=g,this.tail=y,this.length=0}function S(g,y,v){var E=y.next,_={value:v,prev:y,next:E};return y.next=_,E.prev=_,g.length++,_}function L(g,y,v){for(var E=y.next,_=0;_<v&&E!==g.tail;_++)E=E.next;y.next=E,E.prev=y,g.length-=_}function N(g){for(var y=[],v=g.head.next;v!==g.tail;)y.push(v.value),v=v.next;return y}if(!r.document)return r.addEventListener&&(s.disableWorkerMessageHandler||r.addEventListener("message",function(g){var y=JSON.parse(g.data),v=y.language,E=y.code,_=y.immediateClose;r.postMessage(s.highlight(E,s.languages[v],v)),_&&r.close()},!1)),s;var C=s.util.currentScript();C&&(s.filename=C.src,C.hasAttribute("data-manual")&&(s.manual=!0));function I(){s.manual||s.highlightAll()}if(!s.manual){var w=document.readyState;w==="loading"||w==="interactive"&&C&&C.defer?document.addEventListener("DOMContentLoaded",I):window.requestAnimationFrame?window.requestAnimationFrame(I):window.setTimeout(I,16)}return s}(n);e.exports&&(e.exports=t),typeof Ao<"u"&&(Ao.Prism=t)})(Z2);var XS=Z2.exports,JS=wf;wf.displayName="markup";wf.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function wf(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(t,r){var l={};l["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[r]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};o["language-"+r]={pattern:/[\s\S]+/,inside:e.languages[r]};var i={};i[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:o},e.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(n,t){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:e.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var Q2=xf;xf.displayName="css";xf.aliases=[];function xf(e){(function(n){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var r=n.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(e)}const eC=Gr(Q2);var nC=Sf;Sf.displayName="clike";Sf.aliases=[];function Sf(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var tC=Cf;Cf.displayName="javascript";Cf.aliases=["js"];function Cf(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var wo=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof Ao=="object"?Ao:{},rC=bC();wo.Prism={manual:!0,disableWorkerMessageHandler:!0};var lC=b9,aC=MS,K2=XS,oC=JS,iC=Q2,sC=nC,cC=tC;rC();var kf={}.hasOwnProperty;function X2(){}X2.prototype=K2;var hn=new X2,dC=hn;hn.highlight=hC;hn.register=gi;hn.alias=uC;hn.registered=fC;hn.listLanguages=pC;gi(oC);gi(iC);gi(sC);gi(cC);hn.util.encode=vC;hn.Token.stringify=gC;function gi(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");hn.languages[e.displayName]===void 0&&e(hn)}function uC(e,n){var t=hn.languages,r=e,l,o,i,s;n&&(r={},r[e]=n);for(l in r)for(o=r[l],o=typeof o=="string"?[o]:o,i=o.length,s=-1;++s<i;)t[o[s]]=t[l]}function hC(e,n){var t=K2.highlight,r;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(hn.util.type(n)==="Object")r=n,n=null;else{if(typeof n!="string")throw new Error("Expected `string` for `name`, got `"+n+"`");if(kf.call(hn.languages,n))r=hn.languages[n];else throw new Error("Unknown language: `"+n+"` is not registered")}return t.call(this,e,r,n)}function fC(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return kf.call(hn.languages,e)}function pC(){var e=hn.languages,n=[],t;for(t in e)kf.call(e,t)&&typeof e[t]=="object"&&n.push(t);return n}function gC(e,n,t){var r;return typeof e=="string"?{type:"text",value:e}:hn.util.type(e)==="Array"?mC(e,n):(r={type:e.type,content:hn.Token.stringify(e.content,n,t),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:t},e.alias&&(r.classes=r.classes.concat(e.alias)),hn.hooks.run("wrap",r),lC(r.tag+"."+r.classes.join("."),yC(r.attributes),r.content))}function mC(e,n){for(var t=[],r=e.length,l=-1,o;++l<r;)o=e[l],o!==""&&o!==null&&o!==void 0&&t.push(o);for(l=-1,r=t.length;++l<r;)o=t[l],t[l]=hn.Token.stringify(o,n,t);return t}function vC(e){return e}function yC(e){var n;for(n in e)e[n]=aC(e[n]);return e}function bC(){var e="Prism"in wo,n=e?wo.Prism:void 0;return t;function t(){e?wo.Prism=n:delete wo.Prism,e=void 0,n=void 0}}const _f=Gr(dC);var $f=nx(_f,{});$f.registerLanguage=function(e,n){return _f.register(n)};$f.alias=function(e,n){return _f.alias(e,n)};const mi=$f;var wC=Ef;Ef.displayName="bash";Ef.aliases=["shell"];function Ef(e){(function(n){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},l={bash:r,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};n.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:l},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:l},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:l.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:l.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=n.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=l.variable[1].inside,s=0;s<o.length;s++)i[o[s]]=n.languages.bash[o[s]];n.languages.shell=n.languages.bash})(e)}const xC=Gr(wC);var SC=Tf;Tf.displayName="jsx";Tf.aliases=[];function Tf(e){(function(n){var t=n.util.clone(n.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,l=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,o=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function i(h,m){return h=h.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return l}).replace(/<SPREAD>/g,function(){return o}),RegExp(h,m)}o=i(o).source,n.languages.jsx=n.languages.extend("markup",t),n.languages.jsx.tag.pattern=i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),n.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,n.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,n.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,n.languages.jsx.tag.inside.comment=t.comment,n.languages.insertBefore("inside","attr-name",{spread:{pattern:i(/<SPREAD>/.source),inside:n.languages.jsx}},n.languages.jsx.tag),n.languages.insertBefore("inside","special-attr",{script:{pattern:i(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:n.languages.jsx}}},n.languages.jsx.tag);var s=function(h){return h?typeof h=="string"?h:typeof h.content=="string"?h.content:h.content.map(s).join(""):""},d=function(h){for(var m=[],b=0;b<h.length;b++){var S=h[b],L=!1;if(typeof S!="string"&&(S.type==="tag"&&S.content[0]&&S.content[0].type==="tag"?S.content[0].content[0].content==="</"?m.length>0&&m[m.length-1].tagName===s(S.content[0].content[1])&&m.pop():S.content[S.content.length-1].content==="/>"||m.push({tagName:s(S.content[0].content[1]),openedBraces:0}):m.length>0&&S.type==="punctuation"&&S.content==="{"?m[m.length-1].openedBraces++:m.length>0&&m[m.length-1].openedBraces>0&&S.type==="punctuation"&&S.content==="}"?m[m.length-1].openedBraces--:L=!0),(L||typeof S=="string")&&m.length>0&&m[m.length-1].openedBraces===0){var N=s(S);b<h.length-1&&(typeof h[b+1]=="string"||h[b+1].type==="plain-text")&&(N+=s(h[b+1]),h.splice(b+1,1)),b>0&&(typeof h[b-1]=="string"||h[b-1].type==="plain-text")&&(N=s(h[b-1])+N,h.splice(b-1,1),b--),h[b]=new n.Token("plain-text",N,null,N)}S.content&&typeof S.content!="string"&&d(S.content)}};n.hooks.add("after-tokenize",function(h){h.language!=="jsx"&&h.language!=="tsx"||d(h.tokens)})})(e)}const CC=Gr(SC);var kC=Nf;Nf.displayName="scss";Nf.aliases=[];function Nf(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const _C=Gr(kC);function J2(e){return typeof e=="string"}function $C(e){return Array.isArray(e)}function EC(e){return e===void 0}function TC(e){return e===null}function En(e){return!(EC(e)||TC(e))}function NC(e){return!En(e)}function LC(...e){throw new Error(e.join(""))}function IC(){return Intl.DateTimeFormat().resolvedOptions().locale}IC();const vi=(e,n,t=1)=>{const r=n<e?-Math.abs(t):t;return Array(1+Math.floor(Math.abs((n-e)/t))).fill(e).map((l,o)=>l+o*r)};function ey(e){return NC(e)?[]:J2(e)?e.length?e.split(/,\s*|\s+/):[]:$C(e)?e:[e]}function RC(e){return new Promise(n=>setTimeout(n,e))}mi.registerLanguage("jsx",CC);mi.registerLanguage("css",eC);mi.registerLanguage("scss",_C);mi.registerLanguage("bash",xC);const Je=({code:e,language:n="jsx",caption:t,expand:r=!1,fixed:l=r,className:o=""})=>{const[i,s]=U.useState(!1),[d,h]=U.useState(r),m=()=>{navigator.clipboard.writeText(e),s(!0),RC(2e3).then(()=>s(!1))};return f("div",{className:`codeblock ${o} ${d?"expanded":""} ${l?"fixed-open":"expandable"}`,children:[!!t&&a("h4",{className:"caption",children:t}),f("div",{className:"controls",children:[a("div",{className:"expand",onClick:()=>h(!d),children:d?"Compress":"Expand"}),a("div",{className:`clipboard ${i?"copied":""}`,onClick:m,children:i?"Copied":"Copy"})]}),a(mi,{language:n,showLineNumbers:!0,useInlineStyles:!1,customStyle:{},children:PC(e)})]})},PC=e=>e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/\/\*\s*REAL\s*\*\/.*?\/\*\s*UNREAL\s*\*\//g,"").replaceAll(/{\/\*\s*(UN?)PRETEND\s*\*\/}/g,"").replace(/\n+$/,""),FC=`// define your brand hue and color name
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
 */function Re(){return Re=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Re.apply(this,arguments)}var dn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dn||(dn={}));const Bg="popstate";function DC(e){e===void 0&&(e={});function n(r,l){let{pathname:o,search:i,hash:s}=r.location;return ti("",{pathname:o,search:i,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(r,l){return typeof l=="string"?l:Ll(l)}return BC(n,t,null,e)}function Ce(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Ia(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function zC(){return Math.random().toString(36).substr(2,8)}function jg(e,n){return{usr:e.state,key:e.key,idx:n}}function ti(e,n,t,r){return t===void 0&&(t=null),Re({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?yr(n):n,{state:t,key:n&&n.key||r||zC()})}function Ll(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function yr(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function BC(e,n,t,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:o=!1}=r,i=l.history,s=dn.Pop,d=null,h=m();h==null&&(h=0,i.replaceState(Re({},i.state,{idx:h}),""));function m(){return(i.state||{idx:null}).idx}function b(){s=dn.Pop;let I=m(),w=I==null?null:I-h;h=I,d&&d({action:s,location:C.location,delta:w})}function S(I,w){s=dn.Push;let g=ti(C.location,I,w);t&&t(g,I),h=m()+1;let y=jg(g,h),v=C.createHref(g);try{i.pushState(y,"",v)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;l.location.assign(v)}o&&d&&d({action:s,location:C.location,delta:1})}function L(I,w){s=dn.Replace;let g=ti(C.location,I,w);t&&t(g,I),h=m();let y=jg(g,h),v=C.createHref(g);i.replaceState(y,"",v),o&&d&&d({action:s,location:C.location,delta:0})}function N(I){let w=l.location.origin!=="null"?l.location.origin:l.location.href,g=typeof I=="string"?I:Ll(I);return Ce(w,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,w)}let C={get action(){return s},get location(){return e(l,i)},listen(I){if(d)throw new Error("A history only accepts one active listener");return l.addEventListener(Bg,b),d=I,()=>{l.removeEventListener(Bg,b),d=null}},createHref(I){return n(l,I)},createURL:N,encodeLocation(I){let w=N(I);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:S,replace:L,go(I){return i.go(I)}};return C}var mn;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(mn||(mn={}));const jC=new Set(["lazy","caseSensitive","path","id","index","children"]);function UC(e){return e.index===!0}function Xu(e,n,t,r){return t===void 0&&(t=[]),r===void 0&&(r={}),e.map((l,o)=>{let i=[...t,o],s=typeof l.id=="string"?l.id:i.join("-");if(Ce(l.index!==!0||!l.children,"Cannot specify children on an index route"),Ce(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),UC(l)){let d=Re({},l,n(l),{id:s});return r[s]=d,d}else{let d=Re({},l,n(l),{id:s,children:void 0});return r[s]=d,l.children&&(d.children=Xu(l.children,n,i,r)),d}})}function pa(e,n,t){t===void 0&&(t="/");let r=typeof n=="string"?yr(n):n,l=Aa(r.pathname||"/",t);if(l==null)return null;let o=ny(e);HC(o);let i=null;for(let s=0;i==null&&s<o.length;++s)i=XC(o[s],nk(l));return i}function ny(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let l=(o,i,s)=>{let d={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};d.relativePath.startsWith("/")&&(Ce(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let h=dr([r,d.relativePath]),m=t.concat(d);o.children&&o.children.length>0&&(Ce(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),ny(o.children,n,m,h)),!(o.path==null&&!o.index)&&n.push({path:h,score:QC(h,o.index),routesMeta:m})};return e.forEach((o,i)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))l(o,i);else for(let d of ty(o.path))l(o,i,d)}),n}function ty(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,l=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let i=ty(r.join("/")),s=[];return s.push(...i.map(d=>d===""?o:[o,d].join("/"))),l&&s.push(...i),s.map(d=>e.startsWith("/")&&d===""?"/":d)}function HC(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:KC(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const WC=/^:\w+$/,VC=3,GC=2,YC=1,qC=10,ZC=-2,Ug=e=>e==="*";function QC(e,n){let t=e.split("/"),r=t.length;return t.some(Ug)&&(r+=ZC),n&&(r+=GC),t.filter(l=>!Ug(l)).reduce((l,o)=>l+(WC.test(o)?VC:o===""?YC:qC),r)}function KC(e,n){return e.length===n.length&&e.slice(0,-1).every((r,l)=>r===n[l])?e[e.length-1]-n[n.length-1]:0}function XC(e,n){let{routesMeta:t}=e,r={},l="/",o=[];for(let i=0;i<t.length;++i){let s=t[i],d=i===t.length-1,h=l==="/"?n:n.slice(l.length)||"/",m=JC({path:s.relativePath,caseSensitive:s.caseSensitive,end:d},h);if(!m)return null;Object.assign(r,m.params);let b=s.route;o.push({params:r,pathname:dr([l,m.pathname]),pathnameBase:ak(dr([l,m.pathnameBase])),route:b}),m.pathnameBase!=="/"&&(l=dr([l,m.pathnameBase]))}return o}function JC(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=ek(e.path,e.caseSensitive,e.end),l=n.match(t);if(!l)return null;let o=l[0],i=o.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((h,m,b)=>{if(m==="*"){let S=s[b]||"";i=o.slice(0,o.length-S.length).replace(/(.)\/+$/,"$1")}return h[m]=tk(s[b]||"",m),h},{}),pathname:o,pathnameBase:i,pattern:e}}function ek(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Ia(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),r]}function nk(e){try{return decodeURI(e)}catch(n){return Ia(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function tk(e,n){try{return decodeURIComponent(e)}catch(t){return Ia(!1,'The value for the URL param "'+n+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),e}}function Aa(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function rk(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:l=""}=typeof e=="string"?yr(e):e;return{pathname:t?t.startsWith("/")?t:lk(t,n):n,search:ok(r),hash:ik(l)}}function lk(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?t.length>1&&t.pop():l!=="."&&t.push(l)}),t.length>1?t.join("/"):"/"}function jd(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ic(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Lf(e,n,t,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=yr(e):(l=Re({},e),Ce(!l.pathname||!l.pathname.includes("?"),jd("?","pathname","search",l)),Ce(!l.pathname||!l.pathname.includes("#"),jd("#","pathname","hash",l)),Ce(!l.search||!l.search.includes("#"),jd("#","search","hash",l)));let o=e===""||l.pathname==="",i=o?"/":l.pathname,s;if(r||i==null)s=t;else{let b=n.length-1;if(i.startsWith("..")){let S=i.split("/");for(;S[0]==="..";)S.shift(),b-=1;l.pathname=S.join("/")}s=b>=0?n[b]:"/"}let d=rk(l,s),h=i&&i!=="/"&&i.endsWith("/"),m=(o||i===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(h||m)&&(d.pathname+="/"),d}const dr=e=>e.join("/").replace(/\/\/+/g,"/"),ak=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ok=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ik=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class If{constructor(n,t,r,l){l===void 0&&(l=!1),this.status=n,this.statusText=t||"",this.internal=l,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function ry(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ly=["post","put","patch","delete"],sk=new Set(ly),ck=["get",...ly],dk=new Set(ck),uk=new Set([301,302,303,307,308]),hk=new Set([307,308]),Ud={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fk={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Hg={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},ay=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pk=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function gk(e){const n=e.window?e.window:typeof window<"u"?window:void 0,t=typeof n<"u"&&typeof n.document<"u"&&typeof n.document.createElement<"u",r=!t;Ce(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let l;if(e.mapRouteProperties)l=e.mapRouteProperties;else if(e.detectErrorBoundary){let M=e.detectErrorBoundary;l=A=>({hasErrorBoundary:M(A)})}else l=pk;let o={},i=Xu(e.routes,l,void 0,o),s,d=e.basename||"/",h=Re({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),m=null,b=new Set,S=null,L=null,N=null,C=e.hydrationData!=null,I=pa(i,e.history.location,d),w=null;if(I==null){let M=Pt(404,{pathname:e.history.location.pathname}),{matches:A,route:W}=Qg(i);I=A,w={[W.id]:M}}let g=!I.some(M=>M.route.lazy)&&(!I.some(M=>M.route.loader)||e.hydrationData!=null),y,v={historyAction:e.history.action,location:e.history.location,matches:I,initialized:g,navigation:Ud,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||w,fetchers:new Map,blockers:new Map},E=dn.Pop,_=!1,F,O=!1,B=!1,q=[],he=[],se=new Map,Be=0,ln=-1,Ve=new Map,De=new Set,Ge=new Map,j=new Map,Z=new Map,J=!1;function ae(){return m=e.history.listen(M=>{let{action:A,location:W,delta:Q}=M;if(J){J=!1;return}Ia(Z.size===0||Q!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ie=qa({currentLocation:v.location,nextLocation:W,historyAction:A});if(ie&&Q!=null){J=!0,e.history.go(Q*-1),rl(ie,{state:"blocked",location:W,proceed(){rl(ie,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),e.history.go(Q)},reset(){br(ie),pe({blockers:new Map(y.state.blockers)})}});return}return Fn(A,W)}),v.initialized||Fn(dn.Pop,v.location),y}function fe(){m&&m(),b.clear(),F&&F.abort(),v.fetchers.forEach((M,A)=>Wa(A)),v.blockers.forEach((M,A)=>br(A))}function zn(M){return b.add(M),()=>b.delete(M)}function pe(M){v=Re({},v,M),b.forEach(A=>A(v))}function en(M,A){var W,Q;let ie=v.actionData!=null&&v.navigation.formMethod!=null&&ar(v.navigation.formMethod)&&v.navigation.state==="loading"&&((W=M.state)==null?void 0:W._isRedirect)!==!0,ce;A.actionData?Object.keys(A.actionData).length>0?ce=A.actionData:ce=null:ie?ce=v.actionData:ce=null;let de=A.loaderData?Zg(v.loaderData,A.loaderData,A.matches||[],A.errors):v.loaderData;for(let[le]of Z)br(le);let ue=_===!0||v.navigation.formMethod!=null&&ar(v.navigation.formMethod)&&((Q=M.state)==null?void 0:Q._isRedirect)!==!0;s&&(i=s,s=void 0),pe(Re({},A,{actionData:ce,loaderData:de,historyAction:E,location:M,initialized:!0,navigation:Ud,revalidation:"idle",restoreScrollPosition:$i(M,A.matches||v.matches),preventScrollReset:ue,blockers:new Map(v.blockers)})),O||E===dn.Pop||(E===dn.Push?e.history.push(M,M.state):E===dn.Replace&&e.history.replace(M,M.state)),E=dn.Pop,_=!1,O=!1,B=!1,q=[],he=[]}async function Ye(M,A){if(typeof M=="number"){e.history.go(M);return}let W=Ju(v.location,v.matches,d,h.v7_prependBasename,M,A==null?void 0:A.fromRouteId,A==null?void 0:A.relative),{path:Q,submission:ie,error:ce}=Wg(h.v7_normalizeFormMethod,!1,W,A),de=v.location,ue=ti(v.location,Q,A&&A.state);ue=Re({},ue,e.history.encodeLocation(ue));let le=A&&A.replace!=null?A.replace:void 0,$e=dn.Push;le===!0?$e=dn.Replace:le===!1||ie!=null&&ar(ie.formMethod)&&ie.formAction===v.location.pathname+v.location.search&&($e=dn.Replace);let Pe=A&&"preventScrollReset"in A?A.preventScrollReset===!0:void 0,bn=qa({currentLocation:de,nextLocation:ue,historyAction:$e});if(bn){rl(bn,{state:"blocked",location:ue,proceed(){rl(bn,{state:"proceeding",proceed:void 0,reset:void 0,location:ue}),Ye(M,A)},reset(){br(bn),pe({blockers:new Map(v.blockers)})}});return}return await Fn($e,ue,{submission:ie,pendingError:ce,preventScrollReset:Pe,replace:A&&A.replace})}function fn(){if(Ha(),pe({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){Fn(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}Fn(E||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function Fn(M,A,W){F&&F.abort(),F=null,E=M,O=(W&&W.startUninterruptedRevalidation)===!0,_i(v.location,v.matches),_=(W&&W.preventScrollReset)===!0;let Q=s||i,ie=W&&W.overrideNavigation,ce=pa(Q,A,d);if(!ce){let sn=Pt(404,{pathname:A.pathname}),{matches:pn,route:vt}=Qg(Q);Ol(),en(A,{matches:pn,loaderData:{},errors:{[vt.id]:sn}});return}if(v.initialized&&!B&&wk(v.location,A)&&!(W&&W.submission&&ar(W.submission.formMethod))){en(A,{matches:ce});return}F=new AbortController;let de=fo(e.history,A,F.signal,W&&W.submission),ue,le;if(W&&W.pendingError)le={[ga(ce).route.id]:W.pendingError};else if(W&&W.submission&&ar(W.submission.formMethod)){let sn=await Xr(de,A,W.submission,ce,{replace:W.replace});if(sn.shortCircuited)return;ue=sn.pendingActionData,le=sn.pendingActionError,ie=Re({state:"loading",location:A},W.submission),de=new Request(de.url,{signal:de.signal})}let{shortCircuited:$e,loaderData:Pe,errors:bn}=await Jr(de,A,ce,ie,W&&W.submission,W&&W.fetcherSubmission,W&&W.replace,ue,le);$e||(F=null,en(A,Re({matches:ce},ue?{actionData:ue}:{},{loaderData:Pe,errors:bn})))}async function Xr(M,A,W,Q,ie){Ha();let ce=Re({state:"submitting",location:A},W);pe({navigation:ce});let de,ue=eh(Q,A);if(!ue.route.action&&!ue.route.lazy)de={type:mn.error,error:Pt(405,{method:M.method,pathname:A.pathname,routeId:ue.route.id})};else if(de=await ho("action",M,ue,Q,o,l,d),M.signal.aborted)return{shortCircuited:!0};if(Sa(de)){let le;return ie&&ie.replace!=null?le=ie.replace:le=de.location===v.location.pathname+v.location.search,await nl(v,de,{submission:W,replace:le}),{shortCircuited:!0}}if(Fo(de)){let le=ga(Q,ue.route.id);return(ie&&ie.replace)!==!0&&(E=dn.Push),{pendingActionData:{},pendingActionError:{[le.route.id]:de.error}}}if(bl(de))throw Pt(400,{type:"defer-action"});return{pendingActionData:{[ue.route.id]:de.data}}}async function Jr(M,A,W,Q,ie,ce,de,ue,le){let $e=Q;$e||($e=Re({state:"loading",location:A,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ie));let Pe=ie||ce?ie||ce:$e.formMethod&&$e.formAction&&$e.formData&&$e.formEncType?{formMethod:$e.formMethod,formAction:$e.formAction,formData:$e.formData,formEncType:$e.formEncType}:void 0,bn=s||i,[sn,pn]=Vg(e.history,v,W,Pe,A,B,q,he,Ge,bn,d,ue,le);if(Ol(ze=>!(W&&W.some(qn=>qn.route.id===ze))||sn&&sn.some(qn=>qn.route.id===ze)),sn.length===0&&pn.length===0){let ze=Ga();return en(A,Re({matches:W,loaderData:{},errors:le||null},ue?{actionData:ue}:{},ze?{fetchers:new Map(v.fetchers)}:{})),{shortCircuited:!0}}if(!O){pn.forEach(qn=>{let er=v.fetchers.get(qn.key),gn={state:"loading",data:er&&er.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(qn.key,gn)});let ze=ue||v.actionData;pe(Re({navigation:$e},ze?Object.keys(ze).length===0?{actionData:null}:{actionData:ze}:{},pn.length>0?{fetchers:new Map(v.fetchers)}:{}))}ln=++Be,pn.forEach(ze=>{ze.controller&&se.set(ze.key,ze.controller)});let vt=()=>pn.forEach(ze=>Jt(ze.key));F&&F.signal.addEventListener("abort",vt);let{results:ll,loaderResults:Za,fetcherResults:Al}=await Si(v.matches,W,sn,pn,M);if(M.signal.aborted)return{shortCircuited:!0};F&&F.signal.removeEventListener("abort",vt),pn.forEach(ze=>se.delete(ze.key));let $t=Kg(ll);if($t)return await nl(v,$t,{replace:de}),{shortCircuited:!0};let{loaderData:al,errors:Dl}=qg(v,W,sn,Za,le,pn,Al,j);j.forEach((ze,qn)=>{ze.subscribe(er=>{(er||ze.done)&&j.delete(qn)})});let Qa=Ga(),Ka=Ya(ln),zl=Qa||Ka||pn.length>0;return Re({loaderData:al,errors:Dl},zl?{fetchers:new Map(v.fetchers)}:{})}function Xt(M){return v.fetchers.get(M)||fk}function ja(M,A,W,Q){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");se.has(M)&&Jt(M);let ie=s||i,ce=Ju(v.location,v.matches,d,h.v7_prependBasename,W,A,Q==null?void 0:Q.relative),de=pa(ie,ce,d);if(!de){tl(M,A,Pt(404,{pathname:ce}));return}let{path:ue,submission:le}=Wg(h.v7_normalizeFormMethod,!0,ce,Q),$e=eh(de,ue);if(_=(Q&&Q.preventScrollReset)===!0,le&&ar(le.formMethod)){el(M,A,ue,$e,de,le);return}Ge.set(M,{routeId:A,path:ue}),Ua(M,A,ue,$e,de,le)}async function el(M,A,W,Q,ie,ce){if(Ha(),Ge.delete(M),!Q.route.action&&!Q.route.lazy){let gn=Pt(405,{method:ce.formMethod,pathname:W,routeId:A});tl(M,A,gn);return}let de=v.fetchers.get(M),ue=Re({state:"submitting"},ce,{data:de&&de.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(M,ue),pe({fetchers:new Map(v.fetchers)});let le=new AbortController,$e=fo(e.history,W,le.signal,ce);se.set(M,le);let Pe=await ho("action",$e,Q,ie,o,l,d);if($e.signal.aborted){se.get(M)===le&&se.delete(M);return}if(Sa(Pe)){se.delete(M),De.add(M);let gn=Re({state:"loading"},ce,{data:void 0," _hasFetcherDoneAnything ":!0});return v.fetchers.set(M,gn),pe({fetchers:new Map(v.fetchers)}),nl(v,Pe,{submission:ce,isFetchActionRedirect:!0})}if(Fo(Pe)){tl(M,A,Pe.error);return}if(bl(Pe))throw Pt(400,{type:"defer-action"});let bn=v.navigation.location||v.location,sn=fo(e.history,bn,le.signal),pn=s||i,vt=v.navigation.state!=="idle"?pa(pn,v.navigation.location,d):v.matches;Ce(vt,"Didn't find any matches after fetcher action");let ll=++Be;Ve.set(M,ll);let Za=Re({state:"loading",data:Pe.data},ce,{" _hasFetcherDoneAnything ":!0});v.fetchers.set(M,Za);let[Al,$t]=Vg(e.history,v,vt,ce,bn,B,q,he,Ge,pn,d,{[Q.route.id]:Pe.data},void 0);$t.filter(gn=>gn.key!==M).forEach(gn=>{let Xa=gn.key,Ei=v.fetchers.get(Xa),Ti={state:"loading",data:Ei&&Ei.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(Xa,Ti),gn.controller&&se.set(Xa,gn.controller)}),pe({fetchers:new Map(v.fetchers)});let al=()=>$t.forEach(gn=>Jt(gn.key));le.signal.addEventListener("abort",al);let{results:Dl,loaderResults:Qa,fetcherResults:Ka}=await Si(v.matches,vt,Al,$t,sn);if(le.signal.aborted)return;le.signal.removeEventListener("abort",al),Ve.delete(M),se.delete(M),$t.forEach(gn=>se.delete(gn.key));let zl=Kg(Dl);if(zl)return nl(v,zl);let{loaderData:ze,errors:qn}=qg(v,v.matches,Al,Qa,void 0,$t,Ka,j);if(v.fetchers.has(M)){let gn={state:"idle",data:Pe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(M,gn)}let er=Ya(ll);v.navigation.state==="loading"&&ll>ln?(Ce(E,"Expected pending action"),F&&F.abort(),en(v.navigation.location,{matches:vt,loaderData:ze,errors:qn,fetchers:new Map(v.fetchers)})):(pe(Re({errors:qn,loaderData:Zg(v.loaderData,ze,vt,qn)},er||$t.length>0?{fetchers:new Map(v.fetchers)}:{})),B=!1)}async function Ua(M,A,W,Q,ie,ce){let de=v.fetchers.get(M),ue=Re({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ce,{data:de&&de.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(M,ue),pe({fetchers:new Map(v.fetchers)});let le=new AbortController,$e=fo(e.history,W,le.signal);se.set(M,le);let Pe=await ho("loader",$e,Q,ie,o,l,d);if(bl(Pe)&&(Pe=await cy(Pe,$e.signal,!0)||Pe),se.get(M)===le&&se.delete(M),$e.signal.aborted)return;if(Sa(Pe)){De.add(M),await nl(v,Pe);return}if(Fo(Pe)){let sn=ga(v.matches,A);v.fetchers.delete(M),pe({fetchers:new Map(v.fetchers),errors:{[sn.route.id]:Pe.error}});return}Ce(!bl(Pe),"Unhandled fetcher deferred data");let bn={state:"idle",data:Pe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(M,bn),pe({fetchers:new Map(v.fetchers)})}async function nl(M,A,W){let{submission:Q,replace:ie,isFetchActionRedirect:ce}=W===void 0?{}:W;A.revalidate&&(B=!0);let de=ti(M.location,A.location,Re({_isRedirect:!0},ce?{_isFetchActionRedirect:!0}:{}));if(Ce(de,"Expected a location on the redirect navigation"),ay.test(A.location)&&t){let sn=e.history.createURL(A.location),pn=Aa(sn.pathname,d)==null;if(n.location.origin!==sn.origin||pn){ie?n.location.replace(A.location):n.location.assign(A.location);return}}F=null;let ue=ie===!0?dn.Replace:dn.Push,{formMethod:le,formAction:$e,formEncType:Pe,formData:bn}=M.navigation;!Q&&le&&$e&&bn&&Pe&&(Q={formMethod:le,formAction:$e,formEncType:Pe,formData:bn}),hk.has(A.status)&&Q&&ar(Q.formMethod)?await Fn(ue,de,{submission:Re({},Q,{formAction:A.location}),preventScrollReset:_}):ce?await Fn(ue,de,{overrideNavigation:{state:"loading",location:de,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:Q,preventScrollReset:_}):await Fn(ue,de,{overrideNavigation:{state:"loading",location:de,formMethod:Q?Q.formMethod:void 0,formAction:Q?Q.formAction:void 0,formEncType:Q?Q.formEncType:void 0,formData:Q?Q.formData:void 0},preventScrollReset:_})}async function Si(M,A,W,Q,ie){let ce=await Promise.all([...W.map(le=>ho("loader",ie,le,A,o,l,d)),...Q.map(le=>le.matches&&le.match&&le.controller?ho("loader",fo(e.history,le.path,le.controller.signal),le.match,le.matches,o,l,d):{type:mn.error,error:Pt(404,{pathname:le.path})})]),de=ce.slice(0,W.length),ue=ce.slice(W.length);return await Promise.all([Xg(M,W,de,de.map(()=>ie.signal),!1,v.loaderData),Xg(M,Q.map(le=>le.match),ue,Q.map(le=>le.controller?le.controller.signal:null),!0)]),{results:ce,loaderResults:de,fetcherResults:ue}}function Ha(){B=!0,q.push(...Ol()),Ge.forEach((M,A)=>{se.has(A)&&(he.push(A),Jt(A))})}function tl(M,A,W){let Q=ga(v.matches,A);Wa(M),pe({errors:{[Q.route.id]:W},fetchers:new Map(v.fetchers)})}function Wa(M){let A=v.fetchers.get(M);se.has(M)&&!(A&&A.state==="loading"&&Ve.has(M))&&Jt(M),Ge.delete(M),Ve.delete(M),De.delete(M),v.fetchers.delete(M)}function Jt(M){let A=se.get(M);Ce(A,"Expected fetch controller: "+M),A.abort(),se.delete(M)}function Va(M){for(let A of M){let Q={state:"idle",data:Xt(A).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(A,Q)}}function Ga(){let M=[],A=!1;for(let W of De){let Q=v.fetchers.get(W);Ce(Q,"Expected fetcher: "+W),Q.state==="loading"&&(De.delete(W),M.push(W),A=!0)}return Va(M),A}function Ya(M){let A=[];for(let[W,Q]of Ve)if(Q<M){let ie=v.fetchers.get(W);Ce(ie,"Expected fetcher: "+W),ie.state==="loading"&&(Jt(W),Ve.delete(W),A.push(W))}return Va(A),A.length>0}function Ci(M,A){let W=v.blockers.get(M)||Hg;return Z.get(M)!==A&&Z.set(M,A),W}function br(M){v.blockers.delete(M),Z.delete(M)}function rl(M,A){let W=v.blockers.get(M)||Hg;Ce(W.state==="unblocked"&&A.state==="blocked"||W.state==="blocked"&&A.state==="blocked"||W.state==="blocked"&&A.state==="proceeding"||W.state==="blocked"&&A.state==="unblocked"||W.state==="proceeding"&&A.state==="unblocked","Invalid blocker state transition: "+W.state+" -> "+A.state),v.blockers.set(M,A),pe({blockers:new Map(v.blockers)})}function qa(M){let{currentLocation:A,nextLocation:W,historyAction:Q}=M;if(Z.size===0)return;Z.size>1&&Ia(!1,"A router only supports one blocker at a time");let ie=Array.from(Z.entries()),[ce,de]=ie[ie.length-1],ue=v.blockers.get(ce);if(!(ue&&ue.state==="proceeding")&&de({currentLocation:A,nextLocation:W,historyAction:Q}))return ce}function Ol(M){let A=[];return j.forEach((W,Q)=>{(!M||M(Q))&&(W.cancel(),A.push(Q),j.delete(Q))}),A}function ki(M,A,W){if(S=M,N=A,L=W||(Q=>Q.key),!C&&v.navigation===Ud){C=!0;let Q=$i(v.location,v.matches);Q!=null&&pe({restoreScrollPosition:Q})}return()=>{S=null,N=null,L=null}}function _i(M,A){if(S&&L&&N){let W=A.map(ie=>Jg(ie,v.loaderData)),Q=L(M,W)||M.key;S[Q]=N()}}function $i(M,A){if(S&&L&&N){let W=A.map(ce=>Jg(ce,v.loaderData)),Q=L(M,W)||M.key,ie=S[Q];if(typeof ie=="number")return ie}return null}function Bc(M){o={},s=Xu(M,l,void 0,o)}return y={get basename(){return d},get state(){return v},get routes(){return i},initialize:ae,subscribe:zn,enableScrollRestoration:ki,navigate:Ye,fetch:ja,revalidate:fn,createHref:M=>e.history.createHref(M),encodeLocation:M=>e.history.encodeLocation(M),getFetcher:Xt,deleteFetcher:Wa,dispose:fe,getBlocker:Ci,deleteBlocker:br,_internalFetchControllers:se,_internalActiveDeferreds:j,_internalSetRoutes:Bc},y}function mk(e){return e!=null&&"formData"in e}function Ju(e,n,t,r,l,o,i){let s,d;if(o!=null&&i!=="path"){s=[];for(let m of n)if(s.push(m),m.route.id===o){d=m;break}}else s=n,d=n[n.length-1];let h=Lf(l||".",Ic(s).map(m=>m.pathnameBase),Aa(e.pathname,t)||e.pathname,i==="path");return l==null&&(h.search=e.search,h.hash=e.hash),(l==null||l===""||l===".")&&d&&d.route.index&&!Rf(h.search)&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),r&&t!=="/"&&(h.pathname=h.pathname==="/"?t:dr([t,h.pathname])),Ll(h)}function Wg(e,n,t,r){if(!r||!mk(r))return{path:t};if(r.formMethod&&!Ck(r.formMethod))return{path:t,error:Pt(405,{method:r.formMethod})};let l;if(r.formData){let s=r.formMethod||"get";if(l={formMethod:e?s.toUpperCase():s.toLowerCase(),formAction:sy(t),formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:r.formData},ar(l.formMethod))return{path:t,submission:l}}let o=yr(t),i=iy(r.formData);return n&&o.search&&Rf(o.search)&&i.append("index",""),o.search="?"+i,{path:Ll(o),submission:l}}function vk(e,n){let t=e;if(n){let r=e.findIndex(l=>l.route.id===n);r>=0&&(t=e.slice(0,r))}return t}function Vg(e,n,t,r,l,o,i,s,d,h,m,b,S){let L=S?Object.values(S)[0]:b?Object.values(b)[0]:void 0,N=e.createURL(n.location),C=e.createURL(l),I=S?Object.keys(S)[0]:void 0,g=vk(t,I).filter((v,E)=>{if(v.route.lazy)return!0;if(v.route.loader==null)return!1;if(yk(n.loaderData,n.matches[E],v)||i.some(O=>O===v.route.id))return!0;let _=n.matches[E],F=v;return Gg(v,Re({currentUrl:N,currentParams:_.params,nextUrl:C,nextParams:F.params},r,{actionResult:L,defaultShouldRevalidate:o||N.pathname+N.search===C.pathname+C.search||N.search!==C.search||oy(_,F)}))}),y=[];return d.forEach((v,E)=>{if(!t.some(B=>B.route.id===v.routeId))return;let _=pa(h,v.path,m);if(!_){y.push({key:E,routeId:v.routeId,path:v.path,matches:null,match:null,controller:null});return}let F=eh(_,v.path);if(s.includes(E)){y.push({key:E,routeId:v.routeId,path:v.path,matches:_,match:F,controller:new AbortController});return}Gg(F,Re({currentUrl:N,currentParams:n.matches[n.matches.length-1].params,nextUrl:C,nextParams:t[t.length-1].params},r,{actionResult:L,defaultShouldRevalidate:o}))&&y.push({key:E,routeId:v.routeId,path:v.path,matches:_,match:F,controller:new AbortController})}),[g,y]}function yk(e,n,t){let r=!n||t.route.id!==n.route.id,l=e[t.route.id]===void 0;return r||l}function oy(e,n){let t=e.route.path;return e.pathname!==n.pathname||t!=null&&t.endsWith("*")&&e.params["*"]!==n.params["*"]}function Gg(e,n){if(e.route.shouldRevalidate){let t=e.route.shouldRevalidate(n);if(typeof t=="boolean")return t}return n.defaultShouldRevalidate}async function Yg(e,n,t){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let l=t[e.id];Ce(l,"No route found in manifest");let o={};for(let i in r){let d=l[i]!==void 0&&i!=="hasErrorBoundary";Ia(!d,'Route "'+l.id+'" has a static property "'+i+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+i+'" will be ignored.')),!d&&!jC.has(i)&&(o[i]=r[i])}Object.assign(l,o),Object.assign(l,Re({},n(l),{lazy:void 0}))}async function ho(e,n,t,r,l,o,i,s,d,h){s===void 0&&(s=!1),d===void 0&&(d=!1);let m,b,S,L=I=>{let w,g=new Promise((y,v)=>w=v);return S=()=>w(),n.signal.addEventListener("abort",S),Promise.race([I({request:n,params:t.params,context:h}),g])};try{let I=t.route[e];if(t.route.lazy)if(I)b=(await Promise.all([L(I),Yg(t.route,o,l)]))[0];else if(await Yg(t.route,o,l),I=t.route[e],I)b=await L(I);else if(e==="action"){let w=new URL(n.url),g=w.pathname+w.search;throw Pt(405,{method:n.method,pathname:g,routeId:t.route.id})}else return{type:mn.data,data:void 0};else if(I)b=await L(I);else{let w=new URL(n.url),g=w.pathname+w.search;throw Pt(404,{pathname:g})}Ce(b!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+t.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(I){m=mn.error,b=I}finally{S&&n.signal.removeEventListener("abort",S)}if(Sk(b)){let I=b.status;if(uk.has(I)){let y=b.headers.get("Location");if(Ce(y,"Redirects returned/thrown from loaders/actions must have a Location header"),!ay.test(y))y=Ju(new URL(n.url),r.slice(0,r.indexOf(t)+1),i,!0,y);else if(!s){let v=new URL(n.url),E=y.startsWith("//")?new URL(v.protocol+y):new URL(y),_=Aa(E.pathname,i)!=null;E.origin===v.origin&&_&&(y=E.pathname+E.search+E.hash)}if(s)throw b.headers.set("Location",y),b;return{type:mn.redirect,status:I,location:y,revalidate:b.headers.get("X-Remix-Revalidate")!==null}}if(d)throw{type:m||mn.data,response:b};let w,g=b.headers.get("Content-Type");return g&&/\bapplication\/json\b/.test(g)?w=await b.json():w=await b.text(),m===mn.error?{type:m,error:new If(I,b.statusText,w),headers:b.headers}:{type:mn.data,data:w,statusCode:b.status,headers:b.headers}}if(m===mn.error)return{type:m,error:b};if(xk(b)){var N,C;return{type:mn.deferred,deferredData:b,statusCode:(N=b.init)==null?void 0:N.status,headers:((C=b.init)==null?void 0:C.headers)&&new Headers(b.init.headers)}}return{type:mn.data,data:b}}function fo(e,n,t,r){let l=e.createURL(sy(n)).toString(),o={signal:t};if(r&&ar(r.formMethod)){let{formMethod:i,formEncType:s,formData:d}=r;o.method=i.toUpperCase(),o.body=s==="application/x-www-form-urlencoded"?iy(d):d}return new Request(l,o)}function iy(e){let n=new URLSearchParams;for(let[t,r]of e.entries())n.append(t,r instanceof File?r.name:r);return n}function bk(e,n,t,r,l){let o={},i=null,s,d=!1,h={};return t.forEach((m,b)=>{let S=n[b].route.id;if(Ce(!Sa(m),"Cannot handle redirect results in processLoaderData"),Fo(m)){let L=ga(e,S),N=m.error;r&&(N=Object.values(r)[0],r=void 0),i=i||{},i[L.route.id]==null&&(i[L.route.id]=N),o[S]=void 0,d||(d=!0,s=ry(m.error)?m.error.status:500),m.headers&&(h[S]=m.headers)}else bl(m)?(l.set(S,m.deferredData),o[S]=m.deferredData.data):o[S]=m.data,m.statusCode!=null&&m.statusCode!==200&&!d&&(s=m.statusCode),m.headers&&(h[S]=m.headers)}),r&&(i=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:i,statusCode:s||200,loaderHeaders:h}}function qg(e,n,t,r,l,o,i,s){let{loaderData:d,errors:h}=bk(n,t,r,l,s);for(let m=0;m<o.length;m++){let{key:b,match:S,controller:L}=o[m];Ce(i!==void 0&&i[m]!==void 0,"Did not find corresponding fetcher result");let N=i[m];if(!(L&&L.signal.aborted))if(Fo(N)){let C=ga(e.matches,S==null?void 0:S.route.id);h&&h[C.route.id]||(h=Re({},h,{[C.route.id]:N.error})),e.fetchers.delete(b)}else if(Sa(N))Ce(!1,"Unhandled fetcher revalidation redirect");else if(bl(N))Ce(!1,"Unhandled fetcher deferred data");else{let C={state:"idle",data:N.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(b,C)}}return{loaderData:d,errors:h}}function Zg(e,n,t,r){let l=Re({},n);for(let o of t){let i=o.route.id;if(n.hasOwnProperty(i)?n[i]!==void 0&&(l[i]=n[i]):e[i]!==void 0&&o.route.loader&&(l[i]=e[i]),r&&r.hasOwnProperty(i))break}return l}function ga(e,n){return(n?e.slice(0,e.findIndex(r=>r.route.id===n)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Qg(e){let n=e.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:n}],route:n}}function Pt(e,n){let{pathname:t,routeId:r,method:l,type:o}=n===void 0?{}:n,i="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(i="Bad Request",l&&t&&r?s="You made a "+l+' request to "'+t+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(s="defer() is not supported in actions")):e===403?(i="Forbidden",s='Route "'+r+'" does not match URL "'+t+'"'):e===404?(i="Not Found",s='No route matches URL "'+t+'"'):e===405&&(i="Method Not Allowed",l&&t&&r?s="You made a "+l.toUpperCase()+' request to "'+t+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":l&&(s='Invalid request method "'+l.toUpperCase()+'"')),new If(e||500,i,new Error(s),!0)}function Kg(e){for(let n=e.length-1;n>=0;n--){let t=e[n];if(Sa(t))return t}}function sy(e){let n=typeof e=="string"?yr(e):e;return Ll(Re({},n,{hash:""}))}function wk(e,n){return e.pathname!==n.pathname||e.search!==n.search?!1:e.hash===""?n.hash!=="":e.hash===n.hash?!0:n.hash!==""}function bl(e){return e.type===mn.deferred}function Fo(e){return e.type===mn.error}function Sa(e){return(e&&e.type)===mn.redirect}function xk(e){let n=e;return n&&typeof n=="object"&&typeof n.data=="object"&&typeof n.subscribe=="function"&&typeof n.cancel=="function"&&typeof n.resolveData=="function"}function Sk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Ck(e){return dk.has(e.toLowerCase())}function ar(e){return sk.has(e.toLowerCase())}async function Xg(e,n,t,r,l,o){for(let i=0;i<t.length;i++){let s=t[i],d=n[i];if(!d)continue;let h=e.find(b=>b.route.id===d.route.id),m=h!=null&&!oy(h,d)&&(o&&o[d.route.id])!==void 0;if(bl(s)&&(l||m)){let b=r[i];Ce(b,"Expected an AbortSignal for revalidating fetcher deferred result"),await cy(s,b,l).then(S=>{S&&(t[i]=S||t[i])})}}}async function cy(e,n,t){if(t===void 0&&(t=!1),!await e.deferredData.resolveData(n)){if(t)try{return{type:mn.data,data:e.deferredData.unwrappedData}}catch(l){return{type:mn.error,error:l}}return{type:mn.data,data:e.deferredData.data}}}function Rf(e){return new URLSearchParams(e).getAll("index").some(n=>n==="")}function Jg(e,n){let{route:t,pathname:r,params:l}=e;return{id:t.id,pathname:r,params:l,data:n[t.id],handle:t.handle}}function eh(e,n){let t=typeof n=="string"?yr(n).search:n.search;if(e[e.length-1].route.index&&Rf(t||""))return e[e.length-1];let r=Ic(e);return r[r.length-1]}/**
 * React Router v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tc(){return tc=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},tc.apply(this,arguments)}const Rc=U.createContext(null),Pf=U.createContext(null),Fl=U.createContext(null),Pc=U.createContext(null),Kr=U.createContext({outlet:null,matches:[],isDataRoute:!1}),dy=U.createContext(null);function kk(e,n){let{relative:t}=n===void 0?{}:n;yi()||Ce(!1);let{basename:r,navigator:l}=U.useContext(Fl),{hash:o,pathname:i,search:s}=Ff(e,{relative:t}),d=i;return r!=="/"&&(d=i==="/"?r:dr([r,i])),l.createHref({pathname:d,search:s,hash:o})}function yi(){return U.useContext(Pc)!=null}function Da(){return yi()||Ce(!1),U.useContext(Pc).location}function uy(e){U.useContext(Fl).static||U.useLayoutEffect(e)}function _k(){let{isDataRoute:e}=U.useContext(Kr);return e?zk():$k()}function $k(){yi()||Ce(!1);let e=U.useContext(Rc),{basename:n,navigator:t}=U.useContext(Fl),{matches:r}=U.useContext(Kr),{pathname:l}=Da(),o=JSON.stringify(Ic(r).map(d=>d.pathnameBase)),i=U.useRef(!1);return uy(()=>{i.current=!0}),U.useCallback(function(d,h){if(h===void 0&&(h={}),!i.current)return;if(typeof d=="number"){t.go(d);return}let m=Lf(d,JSON.parse(o),l,h.relative==="path");e==null&&n!=="/"&&(m.pathname=m.pathname==="/"?n:dr([n,m.pathname])),(h.replace?t.replace:t.push)(m,h.state,h)},[n,t,o,l,e])}const Ek=U.createContext(null);function Tk(e){let n=U.useContext(Kr).outlet;return n&&U.createElement(Ek.Provider,{value:e},n)}function Ff(e,n){let{relative:t}=n===void 0?{}:n,{matches:r}=U.useContext(Kr),{pathname:l}=Da(),o=JSON.stringify(Ic(r).map(i=>i.pathnameBase));return U.useMemo(()=>Lf(e,JSON.parse(o),l,t==="path"),[e,o,l,t])}function Nk(e,n,t){yi()||Ce(!1);let{navigator:r}=U.useContext(Fl),{matches:l}=U.useContext(Kr),o=l[l.length-1],i=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let d=Da(),h;if(n){var m;let C=typeof n=="string"?yr(n):n;s==="/"||(m=C.pathname)!=null&&m.startsWith(s)||Ce(!1),h=C}else h=d;let b=h.pathname||"/",S=s==="/"?b:b.slice(s.length)||"/",L=pa(e,{pathname:S}),N=Fk(L&&L.map(C=>Object.assign({},C,{params:Object.assign({},i,C.params),pathname:dr([s,r.encodeLocation?r.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?s:dr([s,r.encodeLocation?r.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),l,t);return n&&N?U.createElement(Pc.Provider,{value:{location:tc({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:dn.Pop}},N):N}function Lk(){let e=Dk(),n=ry(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},n),t?U.createElement("pre",{style:l},t):null,o)}const Ik=U.createElement(Lk,null);class Rk extends U.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error||t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error?U.createElement(Kr.Provider,{value:this.props.routeContext},U.createElement(dy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Pk(e){let{routeContext:n,match:t,children:r}=e,l=U.useContext(Rc);return l&&l.static&&l.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=t.route.id),U.createElement(Kr.Provider,{value:n},r)}function Fk(e,n,t){var r;if(n===void 0&&(n=[]),t===void 0&&(t=null),e==null){var l;if((l=t)!=null&&l.errors)e=t.matches;else return null}let o=e,i=(r=t)==null?void 0:r.errors;if(i!=null){let s=o.findIndex(d=>d.route.id&&(i==null?void 0:i[d.route.id]));s>=0||Ce(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,d,h)=>{let m=d.route.id?i==null?void 0:i[d.route.id]:null,b=null;t&&(b=d.route.errorElement||Ik);let S=n.concat(o.slice(0,h+1)),L=()=>{let N;return m?N=b:d.route.Component?N=U.createElement(d.route.Component,null):d.route.element?N=d.route.element:N=s,U.createElement(Pk,{match:d,routeContext:{outlet:s,matches:S,isDataRoute:t!=null},children:N})};return t&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?U.createElement(Rk,{location:t.location,revalidation:t.revalidation,component:b,error:m,children:L(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):L()},null)}var nh;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(nh||(nh={}));var ri;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(ri||(ri={}));function Mk(e){let n=U.useContext(Rc);return n||Ce(!1),n}function Ok(e){let n=U.useContext(Pf);return n||Ce(!1),n}function Ak(e){let n=U.useContext(Kr);return n||Ce(!1),n}function hy(e){let n=Ak(),t=n.matches[n.matches.length-1];return t.route.id||Ce(!1),t.route.id}function Dk(){var e;let n=U.useContext(dy),t=Ok(ri.UseRouteError),r=hy(ri.UseRouteError);return n||((e=t.errors)==null?void 0:e[r])}function zk(){let{router:e}=Mk(nh.UseNavigateStable),n=hy(ri.UseNavigateStable),t=U.useRef(!1);return uy(()=>{t.current=!0}),U.useCallback(function(l,o){o===void 0&&(o={}),t.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,tc({fromRouteId:n},o)))},[e,n])}const e1="startTransition";function Bk(e){let{fallbackElement:n,router:t}=e,[r,l]=U.useState(t.state),o=U.useCallback(h=>{e1 in p0?p0[e1](()=>l(h)):l(h)},[l]);U.useLayoutEffect(()=>t.subscribe(o),[t,o]);let i=U.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:h=>t.navigate(h),push:(h,m,b)=>t.navigate(h,{state:m,preventScrollReset:b==null?void 0:b.preventScrollReset}),replace:(h,m,b)=>t.navigate(h,{replace:!0,state:m,preventScrollReset:b==null?void 0:b.preventScrollReset})}),[t]),s=t.basename||"/",d=U.useMemo(()=>({router:t,navigator:i,static:!1,basename:s}),[t,i,s]);return U.createElement(U.Fragment,null,U.createElement(Rc.Provider,{value:d},U.createElement(Pf.Provider,{value:r},U.createElement(Hk,{basename:s,location:r.location,navigationType:r.historyAction,navigator:i},r.initialized?U.createElement(jk,{routes:t.routes,state:r}):n))),null)}function jk(e){let{routes:n,state:t}=e;return Nk(n,void 0,t)}function Uk(e){return Tk(e.context)}function Hk(e){let{basename:n="/",children:t=null,location:r,navigationType:l=dn.Pop,navigator:o,static:i=!1}=e;yi()&&Ce(!1);let s=n.replace(/^\/*/,"/"),d=U.useMemo(()=>({basename:s,navigator:o,static:i}),[s,o,i]);typeof r=="string"&&(r=yr(r));let{pathname:h="/",search:m="",hash:b="",state:S=null,key:L="default"}=r,N=U.useMemo(()=>{let C=Aa(h,s);return C==null?null:{location:{pathname:C,search:m,hash:b,state:S,key:L},navigationType:l}},[s,h,m,b,S,L,l]);return N==null?null:U.createElement(Fl.Provider,{value:d},U.createElement(Pc.Provider,{children:t,value:N}))}var n1;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(n1||(n1={}));new Promise(()=>{});function Wk(e){let n={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(n,{element:U.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(n,{errorElement:U.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),n}/**
 * React Router DOM v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ra(){return Ra=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ra.apply(this,arguments)}function fy(e,n){if(e==null)return{};var t={},r=Object.keys(e),l,o;for(o=0;o<r.length;o++)l=r[o],!(n.indexOf(l)>=0)&&(t[l]=e[l]);return t}function Vk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Gk(e,n){return e.button===0&&(!n||n==="_self")&&!Vk(e)}const Yk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],qk=["aria-current","caseSensitive","className","end","style","to","children"];function Zk(e,n){return gk({basename:n==null?void 0:n.basename,future:Ra({},n==null?void 0:n.future,{v7_prependBasename:!0}),history:DC({window:n==null?void 0:n.window}),hydrationData:(n==null?void 0:n.hydrationData)||Qk(),routes:e,mapRouteProperties:Wk}).initialize()}function Qk(){var e;let n=(e=window)==null?void 0:e.__staticRouterHydrationData;return n&&n.errors&&(n=Ra({},n,{errors:Kk(n.errors)})),n}function Kk(e){if(!e)return null;let n=Object.entries(e),t={};for(let[r,l]of n)if(l&&l.__type==="RouteErrorResponse")t[r]=new If(l.status,l.statusText,l.data,l.internal===!0);else if(l&&l.__type==="Error"){let o=new Error(l.message);o.stack="",t[r]=o}else t[r]=l;return t}const Xk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Jk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,e_=U.forwardRef(function(n,t){let{onClick:r,relative:l,reloadDocument:o,replace:i,state:s,target:d,to:h,preventScrollReset:m}=n,b=fy(n,Yk),{basename:S}=U.useContext(Fl),L,N=!1;if(typeof h=="string"&&Jk.test(h)&&(L=h,Xk))try{let g=new URL(window.location.href),y=h.startsWith("//")?new URL(g.protocol+h):new URL(h),v=Aa(y.pathname,S);y.origin===g.origin&&v!=null?h=v+y.search+y.hash:N=!0}catch{}let C=kk(h,{relative:l}),I=t_(h,{replace:i,state:s,target:d,preventScrollReset:m,relative:l});function w(g){r&&r(g),g.defaultPrevented||I(g)}return U.createElement("a",Ra({},b,{href:L||C,onClick:N||o?r:w,ref:t,target:d}))}),n_=U.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:l=!1,className:o="",end:i=!1,style:s,to:d,children:h}=n,m=fy(n,qk),b=Ff(d,{relative:m.relative}),S=Da(),L=U.useContext(Pf),{navigator:N}=U.useContext(Fl),C=N.encodeLocation?N.encodeLocation(b).pathname:b.pathname,I=S.pathname,w=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;l||(I=I.toLowerCase(),w=w?w.toLowerCase():null,C=C.toLowerCase());let g=I===C||!i&&I.startsWith(C)&&I.charAt(C.length)==="/",y=w!=null&&(w===C||!i&&w.startsWith(C)&&w.charAt(C.length)==="/"),v=g?r:void 0,E;typeof o=="function"?E=o({isActive:g,isPending:y}):E=[o,g?"active":null,y?"pending":null].filter(Boolean).join(" ");let _=typeof s=="function"?s({isActive:g,isPending:y}):s;return U.createElement(e_,Ra({},m,{"aria-current":v,className:E,ref:t,style:_,to:d}),typeof h=="function"?h({isActive:g,isPending:y}):h)});var t1;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(t1||(t1={}));var r1;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(r1||(r1={}));function t_(e,n){let{target:t,replace:r,state:l,preventScrollReset:o,relative:i}=n===void 0?{}:n,s=_k(),d=Da(),h=Ff(e,{relative:i});return U.useCallback(m=>{if(Gk(m,t)){m.preventDefault();let b=r!==void 0?r:Ll(d)===Ll(h);s(e,{replace:b,state:l,preventScrollReset:o,relative:i})}},[d,s,h,r,l,t,e,o,i])}const Le=({to:e,className:n="",exact:t,children:r,text:l,onClick:o,label:i,style:s})=>a(n_,{to:e,onClick:o,end:t&&"end",className:({isActive:d})=>`${n} ${d?"active":""}`,"aria-label":i,style:s,children:r||l}),r_=()=>f("div",{className:"prose",children:[a("h1",{children:"Brand Colours"}),a("p",{children:"The palette is designed to be adjustable so that you can match it to your brand colors."}),a("h2",{children:"Brand Hue and Color"}),f("p",{children:["You should pick a color that is closest to your brand color and adjust the hue to match it if necessary.  Then define that as the"," ",a("code",{children:"$brand-hue"})," and set the ",a("code",{children:"$brand-color"})," by name."]}),a(Je,{code:FC,caption:"Brand Color",language:"scss",expand:!0}),a("h2",{children:"Multiple Brand Colors"}),f("p",{children:["If you have multiple brand colors you can set them using the"," ",a("code",{children:"$brand-colors"})," variable.  You can call them whatever you like (we're using ",a("code",{children:"primary"}),", ",a("code",{children:"secondary"})," ","and ",a("code",{children:"tertiary"})," in this example). You should define one to be the primary ",a("code",{children:"$brand-color"})," and set the ",a("code",{children:"$brand-hue"})]}),a(Je,{code:MC,caption:"Brand Colors",language:"scss",expand:!0}),a("h2",{children:"Greyscale Colors"}),f("p",{children:["An important side-effect of setting ",a("code",{children:"$brand-hue"})," is that it will set the hue of the greyscale color ranges to match it."]}),f("p",{children:["If you want to use different hues for the greyscale color ranges then you can do that using the ",a("code",{children:"$grey-hue"}),","," ",a("code",{children:"$grey20-hue"})," and ",a("code",{children:"$grey40-hue"})," variables."]}),a(Je,{code:OC,caption:"Greyscale Colors",language:"scss",expand:!0}),a("h2",{children:"Culling the Palette"}),a("p",{children:"The chances are that you aren't going to need all of the colors defined in the standard palette.  You can reduce the size of the generated CSS file by excluding any that you don't need."}),f("p",{children:["Set the ",a("code",{children:"$color-names"})," variable to list those that you want to keep.  Note that ",a("code",{children:"red"}),", ",a("code",{children:"orange"}),","," ",a("code",{children:"green"}),", ",a("code",{children:"blue"})," and ",a("code",{children:"grey"})," are used by various components, including ",a(Le,{to:"/forms/",text:"forms"})," and"," ",a(Le,{to:"/components/alerts",text:"alerts"})," so you'll probably want to keep those."]}),a(Je,{code:AC,caption:"Selecting Colors",language:"scss",expand:!0})]}),l_=Object.freeze(Object.defineProperty({__proto__:null,default:r_},Symbol.toStringTag,{value:"Module"})),a_="Badger CSS Desaturation Light",o_="Palette cloned from Badger CSS 2023-09-30 11:17:47",i_="badger-css-desaturation-light",s_="",c_={red:{name:"Red",hue:0,stops:{0:{h:0,s:65,l:5,hex:"#150404"},5:{h:0,s:66,l:8,hex:"#220707"},10:{h:0,s:68,l:11,hex:"#2f0909"},15:{h:0,s:69,l:15,hex:"#410c0c"},20:{h:0,s:70,l:18,hex:"#4e0e0e"},25:{h:0,s:71,l:22,hex:"#601010"},30:{h:0,s:72,l:27,hex:"#761313"},35:{h:0,s:73,l:31,hex:"#891515"},40:{h:0,s:73,l:36,hex:"#9f1919"},45:{h:0,s:74,l:42,hex:"#ba1c1c"},50:{h:0,s:74,l:48,hex:"#d52020"},55:{h:0,s:74,l:55,hex:"#e13737"},60:{h:0,s:73,l:62,hex:"#e55757"},65:{h:0,s:72,l:68,hex:"#e87373"},70:{h:0,s:71,l:74,hex:"#ec8e8e"},75:{h:0,s:69,l:80,hex:"#efa9a9"},80:{h:0,s:66,l:84,hex:"#f1bbbb"},85:{h:0,s:62,l:88,hex:"#f3cdcd"},90:{h:0,s:56,l:92,hex:"#f6dfdf"},95:{h:0,s:48,l:95,hex:"#f8ecec"},100:{h:0,s:33,l:98,hex:"#fcf8f8"}},curves:{h:{min:0,max:0,minControl:{x:30,y:0},maxControl:{x:70,y:0}},s:{min:65,max:33,minControl:{x:31,y:74},maxControl:{x:88,y:89}},l:{min:5,max:98,minControl:{x:62,y:42},maxControl:{x:53,y:72}}},uri:"red"},brown:{name:"Brown",hue:14,stops:{0:{h:10,s:52,l:5,hex:"#130806"},5:{h:11,s:53,l:8,hex:"#1f0e0a"},10:{h:11,s:54,l:11,hex:"#2b120d"},15:{h:12,s:54,l:14,hex:"#371810"},20:{h:13,s:55,l:17,hex:"#431e14"},25:{h:13,s:56,l:20,hex:"#502316"},30:{h:13,s:56,l:24,hex:"#5f2a1b"},35:{h:14,s:57,l:28,hex:"#70321f"},40:{h:14,s:57,l:32,hex:"#803923"},45:{h:14,s:57,l:37,hex:"#944229"},50:{h:14,s:57,l:42,hex:"#a84b2e"},55:{h:14,s:56,l:47,hex:"#bb5435"},60:{h:14,s:56,l:53,hex:"#ca6344"},65:{h:15,s:55,l:60,hex:"#d17d61"},70:{h:15,s:53,l:67,hex:"#d7957e"},75:{h:15,s:51,l:75,hex:"#e0af9f"},80:{h:14,s:49,l:81,hex:"#e6c2b7"},85:{h:14,s:45,l:87,hex:"#edd6cf"},90:{h:14,s:41,l:92,hex:"#f3e6e2"},95:{h:14,s:34,l:95,hex:"#f7f0ee"},100:{h:14,s:23,l:98,hex:"#fbf9f9"}},curves:{h:{min:10,max:14,minControl:{x:30,y:15},maxControl:{x:70,y:15}},s:{min:52,max:23,minControl:{x:35,y:58},maxControl:{x:86,y:66}},l:{min:5,max:98,minControl:{x:72,y:43},maxControl:{x:67,y:82}}},uri:"brown"},orange:{name:"Orange",hue:26,stops:{0:{h:27,s:93,l:5,hex:"#190c01"},5:{h:27,s:94,l:8,hex:"#281201"},10:{h:26,s:94,l:11,hex:"#361902"},15:{h:26,s:95,l:14,hex:"#461f02"},20:{h:26,s:95,l:18,hex:"#5a2802"},25:{h:26,s:95,l:21,hex:"#682f03"},30:{h:26,s:96,l:25,hex:"#7d3803"},35:{h:26,s:96,l:30,hex:"#964303"},40:{h:26,s:96,l:35,hex:"#af4e04"},45:{h:26,s:96,l:40,hex:"#c85904"},50:{h:26,s:95,l:46,hex:"#e56606"},55:{h:26,s:95,l:52,hex:"#f97510"},60:{h:26,s:94,l:59,hex:"#f98934"},65:{h:26,s:92,l:65,hex:"#f89b54"},70:{h:27,s:90,l:72,hex:"#f8b177"},75:{h:27,s:87,l:78,hex:"#f8c296"},80:{h:28,s:84,l:83,hex:"#f8d1af"},85:{h:28,s:78,l:88,hex:"#f8dfc9"},90:{h:29,s:71,l:91,hex:"#f8e8d8"},95:{h:30,s:58,l:95,hex:"#faf2eb"},100:{h:32,s:26,l:97,hex:"#f9f7f5"}},curves:{h:{min:27,max:32,minControl:{x:30,y:25},maxControl:{x:77,y:24}},s:{min:93,max:24,minControl:{x:59,y:100},maxControl:{x:97,y:100}},l:{min:5,max:97,minControl:{x:62,y:39},maxControl:{x:62,y:80}}},uri:"orange"},yellow:{name:"Yellow",hue:41,stops:{0:{h:30,s:90,l:5,hex:"#180d01"},5:{h:31,s:91,l:8,hex:"#271502"},10:{h:33,s:92,l:10,hex:"#311c02"},15:{h:34,s:92,l:13,hex:"#402503"},20:{h:35,s:93,l:17,hex:"#543203"},25:{h:36,s:93,l:20,hex:"#623c04"},30:{h:37,s:94,l:24,hex:"#774b04"},35:{h:38,s:94,l:28,hex:"#8b5904"},40:{h:39,s:95,l:33,hex:"#a46c04"},45:{h:40,s:95,l:38,hex:"#bd8005"},50:{h:41,s:94,l:43,hex:"#d59307"},55:{h:41,s:94,l:48,hex:"#eda507"},60:{h:42,s:93,l:54,hex:"#f7b51d"},65:{h:43,s:91,l:60,hex:"#f6c13c"},70:{h:43,s:89,l:66,hex:"#f5ca5b"},75:{h:44,s:86,l:72,hex:"#f5d47a"},80:{h:44,s:82,l:77,hex:"#f4db94"},85:{h:44,s:77,l:82,hex:"#f4e2ae"},90:{h:45,s:68,l:87,hex:"#f4e9c7"},95:{h:45,s:53,l:92,hex:"#f5f0e0"},100:{h:45,s:21,l:96,hex:"#f7f6f3"}},curves:{h:{min:30,max:45,minControl:{x:28,y:38},maxControl:{x:70,y:45}},s:{min:90,max:20,minControl:{x:63,y:100},maxControl:{x:94,y:100}},l:{min:5,max:96,minControl:{x:52,y:31},maxControl:{x:64,y:67}}},uri:"yellow"},olive:{name:"Olive",hue:68,stops:{0:{h:72,s:66,l:4,hex:"#0e1103"},5:{h:72,s:68,l:6,hex:"#161a05"},10:{h:71,s:70,l:9,hex:"#212707"},15:{h:71,s:71,l:12,hex:"#2c3409"},20:{h:70,s:72,l:15,hex:"#39420b"},25:{h:70,s:73,l:18,hex:"#444f0c"},30:{h:69,s:74,l:21,hex:"#515d0e"},35:{h:69,s:74,l:25,hex:"#616f11"},40:{h:69,s:74,l:29,hex:"#708113"},45:{h:68,s:73,l:33,hex:"#819217"},50:{h:68,s:72,l:37,hex:"#90a21a"},55:{h:67,s:70,l:43,hex:"#a8ba21"},60:{h:67,s:68,l:48,hex:"#bace27"},65:{h:66,s:65,l:54,hex:"#c7d63d"},70:{h:66,s:60,l:61,hex:"#cbd760"},75:{h:65,s:55,l:68,hex:"#d3da81"},80:{h:65,s:49,l:75,hex:"#d9dea0"},85:{h:65,s:41,l:82,hex:"#e1e4be"},90:{h:64,s:33,l:87,hex:"#e7e9d3"},95:{h:64,s:24,l:93,hex:"#f1f1e9"},100:{h:64,s:16,l:97,hex:"#f8f9f6"}},curves:{h:{min:72,max:64,minControl:{x:30,y:70},maxControl:{x:69,y:65}},s:{min:66,max:16,minControl:{x:69,y:93},maxControl:{x:81,y:44}},l:{min:4,max:97,minControl:{x:67,y:35},maxControl:{x:72,y:75}}},uri:"olive"},green:{name:"Green",hue:117,stops:{0:{h:117,s:45,l:5,hex:"#081207"},5:{h:117,s:48,l:8,hex:"#0c1e0b"},10:{h:117,s:50,l:11,hex:"#0f2a0e"},15:{h:117,s:52,l:14,hex:"#133611"},20:{h:117,s:53,l:17,hex:"#174214"},25:{h:117,s:54,l:21,hex:"#1c5219"},30:{h:117,s:55,l:25,hex:"#20631d"},35:{h:117,s:55,l:29,hex:"#257321"},40:{h:117,s:55,l:33,hex:"#2a8226"},45:{h:117,s:54,l:38,hex:"#32952d"},50:{h:117,s:54,l:43,hex:"#38a932"},55:{h:117,s:52,l:48,hex:"#41ba3b"},60:{h:117,s:51,l:54,hex:"#54c64e"},65:{h:117,s:49,l:60,hex:"#6ccb67"},70:{h:117,s:47,l:66,hex:"#84d180"},75:{h:117,s:44,l:73,hex:"#9fd89c"},80:{h:117,s:40,l:79,hex:"#b6dfb4"},85:{h:117,s:36,l:85,hex:"#cce7cb"},90:{h:118,s:31,l:90,hex:"#deedde"},95:{h:118,s:24,l:94,hex:"#ecf3ec"},100:{h:118,s:16,l:98,hex:"#f9fbf9"}},curves:{h:{min:117,max:118,minControl:{x:30,y:118},maxControl:{x:57,y:116}},s:{min:45,max:16,minControl:{x:34,y:65},maxControl:{x:81,y:54}},l:{min:5,max:98,minControl:{x:61,y:38},maxControl:{x:72,y:79}}},uri:"green"},teal:{name:"Teal",hue:165,stops:{0:{h:165,s:52,l:5,hex:"#061310"},5:{h:165,s:56,l:7,hex:"#081c17"},10:{h:165,s:59,l:10,hex:"#0a2921"},15:{h:165,s:61,l:13,hex:"#0d352b"},20:{h:165,s:62,l:15,hex:"#0f3e32"},25:{h:165,s:63,l:18,hex:"#114b3c"},30:{h:165,s:64,l:21,hex:"#135847"},35:{h:165,s:63,l:25,hex:"#186854"},40:{h:165,s:63,l:29,hex:"#1b7961"},45:{h:165,s:62,l:33,hex:"#20886e"},50:{h:165,s:60,l:37,hex:"#26977b"},55:{h:165,s:58,l:42,hex:"#2da98a"},60:{h:165,s:56,l:47,hex:"#35bb99"},65:{h:165,s:53,l:53,hex:"#48c7a7"},70:{h:165,s:50,l:60,hex:"#66ccb3"},75:{h:165,s:46,l:67,hex:"#84d2be"},80:{h:165,s:41,l:75,hex:"#a5d9cc"},85:{h:165,s:36,l:81,hex:"#bde0d7"},90:{h:165,s:30,l:88,hex:"#d7eae5"},95:{h:165,s:23,l:93,hex:"#e9f1ef"},100:{h:165,s:13,l:98,hex:"#f9fbfa"}},curves:{h:{min:165,max:165,minControl:{x:30,y:165},maxControl:{x:70,y:165}},s:{min:52,max:13,minControl:{x:34,y:81},maxControl:{x:83,y:51}},l:{min:5,max:98,minControl:{x:71,y:38},maxControl:{x:68,y:69}}},uri:"teal"},blue:{name:"Blue",hue:206,stops:{0:{h:210,s:72,l:5,hex:"#040d16"},5:{h:210,s:74,l:8,hex:"#051423"},10:{h:209,s:75,l:11,hex:"#071d31"},15:{h:209,s:77,l:15,hex:"#092744"},20:{h:209,s:78,l:18,hex:"#0a2f52"},25:{h:208,s:79,l:22,hex:"#0c3b64"},30:{h:208,s:80,l:26,hex:"#0d4677"},35:{h:207,s:81,l:31,hex:"#0f558f"},40:{h:207,s:82,l:35,hex:"#1061a2"},45:{h:207,s:83,l:41,hex:"#1271bf"},50:{h:206,s:83,l:46,hex:"#1482d7"},55:{h:206,s:82,l:52,hex:"#2092e9"},60:{h:205,s:82,l:58,hex:"#3ca3ec"},65:{h:205,s:80,l:65,hex:"#5eb2ed"},70:{h:205,s:79,l:71,hex:"#7bbfef"},75:{h:205,s:76,l:77,hex:"#98ccf1"},80:{h:204,s:72,l:82,hex:"#b0d8f2"},85:{h:204,s:66,l:87,hex:"#c8e2f4"},90:{h:204,s:59,l:91,hex:"#dbebf6"},95:{h:204,s:46,l:95,hex:"#ecf3f8"},100:{h:204,s:22,l:98,hex:"#f9fafb"}},curves:{h:{min:210,max:204,minControl:{x:42,y:207},maxControl:{x:70,y:204}},s:{min:72,max:22,minControl:{x:43,y:86},maxControl:{x:91,y:99}},l:{min:5,max:98,minControl:{x:61,y:41},maxControl:{x:64,y:78}}},uri:"blue"},indigo:{name:"Indigo",hue:236,stops:{0:{h:234,s:50,l:7,hex:"#090b1b"},5:{h:234,s:53,l:11,hex:"#0d102b"},10:{h:235,s:56,l:16,hex:"#121640"},15:{h:235,s:58,l:21,hex:"#161c55"},20:{h:235,s:61,l:27,hex:"#1b226f"},25:{h:235,s:64,l:32,hex:"#1d2686"},30:{h:236,s:67,l:38,hex:"#2029a2"},35:{h:236,s:69,l:44,hex:"#232dbe"},40:{h:236,s:72,l:50,hex:"#2430db"},45:{h:236,s:74,l:56,hex:"#3c47e2"},50:{h:236,s:75,l:62,hex:"#555fe7"},55:{h:236,s:76,l:67,hex:"#6b73eb"},60:{h:236,s:76,l:72,hex:"#8189ee"},65:{h:235,s:75,l:77,hex:"#98a0f0"},70:{h:235,s:72,l:81,hex:"#acb1f1"},75:{h:235,s:68,l:85,hex:"#bfc3f3"},80:{h:235,s:63,l:89,hex:"#d1d4f5"},85:{h:235,s:55,l:92,hex:"#dfe1f6"},90:{h:235,s:45,l:94,hex:"#e9eaf7"},95:{h:235,s:33,l:97,hex:"#f5f5fa"},100:{h:235,s:20,l:99,hex:"#fcfcfd"}},curves:{h:{min:234,max:235,minControl:{x:30,y:237},maxControl:{x:70,y:235}},s:{min:50,max:20,minControl:{x:53,y:79},maxControl:{x:72,y:100}},l:{min:7,max:99,minControl:{x:39,y:40},maxControl:{x:53,y:80}}},uri:"indigo"},violet:{name:"Violet",uri:"violet",hue:259,stops:{0:{h:271,s:53,l:8,hex:"#150a1f"},5:{h:269,s:55,l:12,hex:"#1e0e2f"},10:{h:268,s:56,l:16,hex:"#271240"},15:{h:266,s:58,l:21,hex:"#311655"},20:{h:265,s:60,l:26,hex:"#3c1b6a"},25:{h:264,s:62,l:31,hex:"#451e80"},30:{h:263,s:65,l:36,hex:"#4e2097"},35:{h:262,s:67,l:42,hex:"#5823b3"},40:{h:261,s:69,l:48,hex:"#6126cf"},45:{h:260,s:72,l:53,hex:"#6a31dd"},50:{h:259,s:73,l:59,hex:"#7a4ae3"},55:{h:258,s:75,l:65,hex:"#8b63e9"},60:{h:258,s:75,l:71,hex:"#9f7eed"},65:{h:257,s:73,l:76,hex:"#ae95ee"},70:{h:257,s:70,l:80,hex:"#bda8f0"},75:{h:256,s:64,l:85,hex:"#cdc0f1"},80:{h:256,s:58,l:88,hex:"#d8cff2"},85:{h:255,s:51,l:92,hex:"#e5e0f5"},90:{h:255,s:43,l:94,hex:"#ece9f6"},95:{h:255,s:35,l:97,hex:"#f6f5fa"},100:{h:255,s:27,l:99,hex:"#fcfcfd"}},curves:{h:{min:271,max:255,minControl:{x:33,y:260},maxControl:{x:70,y:255}},s:{min:53,max:27,minControl:{x:64,y:73},maxControl:{x:56,y:100}},l:{min:8,max:99,minControl:{x:45,y:43},maxControl:{x:58,y:83}}}},purple:{name:"Purple",hue:284,stops:{0:{h:294,s:47,l:6,hex:"#150816"},5:{h:293,s:50,l:8,hex:"#1c0a1f"},10:{h:292,s:53,l:11,hex:"#270d2b"},15:{h:290,s:56,l:14,hex:"#311038"},20:{h:289,s:59,l:18,hex:"#3f1349"},25:{h:288,s:62,l:22,hex:"#4d155b"},30:{h:287,s:65,l:26,hex:"#5b176d"},35:{h:286,s:67,l:31,hex:"#6b1a84"},40:{h:286,s:69,l:37,hex:"#811d9f"},45:{h:285,s:71,l:43,hex:"#9520bc"},50:{h:284,s:72,l:49,hex:"#a723d7"},55:{h:283,s:73,l:55,hex:"#b138e0"},60:{h:283,s:73,l:62,hex:"#bd57e5"},65:{h:282,s:72,l:68,hex:"#c573e8"},70:{h:282,s:70,l:75,hex:"#d193ec"},75:{h:281,s:67,l:80,hex:"#d9aaee"},80:{h:281,s:61,l:85,hex:"#e1c1f0"},85:{h:280,s:54,l:90,hex:"#ead8f3"},90:{h:280,s:46,l:94,hex:"#f2e9f7"},95:{h:280,s:35,l:97,hex:"#f8f5fa"},100:{h:280,s:22,l:99,hex:"#fdfcfd"}},curves:{h:{min:294,max:280,minControl:{x:32,y:286},maxControl:{x:67,y:280}},s:{min:47,max:22,minControl:{x:51,y:78},maxControl:{x:74,y:94}},l:{min:6,max:99,minControl:{x:48,y:26},maxControl:{x:64,y:85}}},uri:"purple"},pink:{name:"Pink",hue:313,stops:{0:{h:314,s:64,l:5,hex:"#150511"},5:{h:314,s:66,l:7,hex:"#1e0618"},10:{h:313,s:69,l:10,hex:"#2b0823"},15:{h:313,s:71,l:13,hex:"#390a2e"},20:{h:313,s:72,l:16,hex:"#460b39"},25:{h:313,s:74,l:19,hex:"#540d45"},30:{h:313,s:75,l:23,hex:"#670f54"},35:{h:313,s:76,l:27,hex:"#791163"},40:{h:313,s:77,l:32,hex:"#901375"},45:{h:313,s:77,l:37,hex:"#a71688"},50:{h:313,s:76,l:42,hex:"#bc1a99"},55:{h:313,s:76,l:48,hex:"#d71daf"},60:{h:313,s:74,l:55,hex:"#e137bc"},65:{h:313,s:72,l:63,hex:"#e55dc7"},70:{h:312,s:70,l:70,hex:"#e87dd3"},75:{h:312,s:66,l:77,hex:"#eb9edc"},80:{h:312,s:61,l:83,hex:"#eeb9e4"},85:{h:312,s:55,l:88,hex:"#f1d0ea"},90:{h:311,s:47,l:92,hex:"#f4e1f1"},95:{h:311,s:37,l:96,hex:"#f9f1f7"},100:{h:310,s:21,l:99,hex:"#fdfcfd"}},curves:{h:{min:314,max:310,minControl:{x:26,y:311},maxControl:{x:67,y:315}},s:{min:64,max:21,minControl:{x:45,y:87},maxControl:{x:84,y:82}},l:{min:5,max:99,minControl:{x:64,y:34},maxControl:{x:62,y:78}}},uri:"pink"},maroon:{name:"Maroon",hue:339,stops:{0:{h:339,s:57,l:6,hex:"#18070d"},5:{h:339,s:62,l:8,hex:"#210811"},10:{h:339,s:66,l:11,hex:"#2f0a16"},15:{h:339,s:69,l:13,hex:"#380a1a"},20:{h:339,s:73,l:17,hex:"#4b0c22"},25:{h:339,s:76,l:20,hex:"#5a0c27"},30:{h:339,s:79,l:24,hex:"#6e0d2f"},35:{h:339,s:81,l:29,hex:"#860e38"},40:{h:339,s:83,l:33,hex:"#9a0e3f"},45:{h:339,s:84,l:39,hex:"#b7104a"},50:{h:339,s:84,l:45,hex:"#d31256"},55:{h:339,s:84,l:51,hex:"#eb1963"},60:{h:339,s:84,l:57,hex:"#ed3576"},65:{h:339,s:82,l:64,hex:"#ee588d"},70:{h:339,s:80,l:71,hex:"#f07aa3"},75:{h:339,s:76,l:77,hex:"#f198b7"},80:{h:339,s:71,l:83,hex:"#f2b5ca"},85:{h:339,s:64,l:88,hex:"#f4cddb"},90:{h:339,s:55,l:92,hex:"#f6dfe7"},95:{h:339,s:41,l:96,hex:"#f9f1f4"},100:{h:339,s:21,l:99,hex:"#fdfcfc"}},curves:{h:{min:339,max:339,minControl:{x:26,y:339},maxControl:{x:67,y:339}},s:{min:57,max:21,minControl:{x:43,y:97},maxControl:{x:85,y:100}},l:{min:6,max:99,minControl:{x:54,y:28},maxControl:{x:64,y:79}}},uri:"maroon"},grey:{name:"Grey",hue:200,stops:{0:{h:200,s:5,l:5,hex:"#0c0d0d"},5:{h:200,s:5,l:10,hex:"#181a1b"},10:{h:200,s:5,l:14,hex:"#222425"},15:{h:200,s:5,l:19,hex:"#2e3133"},20:{h:200,s:5,l:23,hex:"#383c3e"},25:{h:200,s:5,l:28,hex:"#44494b"},30:{h:200,s:5,l:33,hex:"#505658"},35:{h:200,s:5,l:37,hex:"#5a6063"},40:{h:200,s:5,l:42,hex:"#666d70"},45:{h:200,s:5,l:47,hex:"#727a7e"},50:{h:200,s:5,l:52,hex:"#7e878b"},55:{h:200,s:5,l:56,hex:"#899194"},60:{h:200,s:5,l:61,hex:"#979da1"},65:{h:200,s:5,l:66,hex:"#a4aaad"},70:{h:200,s:5,l:71,hex:"#b1b6b9"},75:{h:200,s:5,l:75,hex:"#bcc0c2"},80:{h:200,s:5,l:80,hex:"#c9cdcf"},85:{h:200,s:5,l:85,hex:"#d7d9db"},90:{h:200,s:5,l:89,hex:"#e2e3e4"},95:{h:200,s:5,l:94,hex:"#eff0f0"},100:{h:200,s:5,l:98,hex:"#fafafa"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:5,max:5,minControl:{x:30,y:5},maxControl:{x:70,y:5}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey",greyscale:!0},grey20:{name:"Grey20",hue:200,stops:{0:{h:200,s:20,l:5,hex:"#0a0e0f"},5:{h:200,s:20,l:10,hex:"#141b1f"},10:{h:200,s:20,l:14,hex:"#1d262b"},15:{h:200,s:20,l:19,hex:"#27343a"},20:{h:200,s:20,l:23,hex:"#2f3f46"},25:{h:200,s:20,l:28,hex:"#394c56"},30:{h:200,s:20,l:33,hex:"#435a65"},35:{h:200,s:20,l:37,hex:"#4b6571"},40:{h:200,s:20,l:42,hex:"#567281"},45:{h:200,s:20,l:47,hex:"#608090"},50:{h:200,s:20,l:52,hex:"#6c8d9d"},55:{h:200,s:20,l:56,hex:"#7896a5"},60:{h:200,s:20,l:61,hex:"#88a2af"},65:{h:200,s:20,l:66,hex:"#97aeba"},70:{h:200,s:20,l:71,hex:"#a6bac4"},75:{h:200,s:20,l:75,hex:"#b3c3cc"},80:{h:200,s:20,l:80,hex:"#c2cfd6"},85:{h:200,s:20,l:85,hex:"#d1dbe0"},90:{h:200,s:20,l:89,hex:"#dde5e9"},95:{h:200,s:20,l:94,hex:"#edf1f3"},100:{h:200,s:20,l:98,hex:"#f9fafb"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:20,max:20,minControl:{x:30,y:20},maxControl:{x:70,y:20}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey20",greyscale:!0},grey40:{name:"Grey40",hue:200,stops:{0:{h:200,s:40,l:5,hex:"#080e12"},5:{h:200,s:40,l:10,hex:"#0f1d24"},10:{h:200,s:40,l:14,hex:"#152832"},15:{h:200,s:40,l:19,hex:"#1d3744"},20:{h:200,s:40,l:23,hex:"#234252"},25:{h:200,s:40,l:28,hex:"#2b5164"},30:{h:200,s:40,l:33,hex:"#325f76"},35:{h:200,s:40,l:37,hex:"#396b84"},40:{h:200,s:40,l:42,hex:"#407996"},45:{h:200,s:40,l:47,hex:"#4888a8"},50:{h:200,s:40,l:52,hex:"#5495b6"},55:{h:200,s:40,l:56,hex:"#629ebc"},60:{h:200,s:40,l:61,hex:"#74a9c3"},65:{h:200,s:40,l:66,hex:"#86b4cb"},70:{h:200,s:40,l:71,hex:"#97bfd3"},75:{h:200,s:40,l:75,hex:"#a6c8d9"},80:{h:200,s:40,l:80,hex:"#b8d3e0"},85:{h:200,s:40,l:85,hex:"#c9dee8"},90:{h:200,s:40,l:89,hex:"#d8e7ee"},95:{h:200,s:40,l:94,hex:"#eaf2f6"},100:{h:200,s:40,l:98,hex:"#f8fbfc"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:40,max:40,minControl:{x:30,y:40},maxControl:{x:70,y:40}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey40",greyscale:!0}},Vr={name:a_,comment:o_,uri:i_,source:s_,ranges:c_},rc=Object.keys(Vr.ranges),d_=Object.entries(Vr.ranges).filter(([,e])=>!e.greyscale).map(([e])=>e),u_=Object.entries(Vr.ranges).filter(([,e])=>e.greyscale).map(([e])=>e);var py={exports:{}};/**
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
 */(function(e,n){(function(t,r){e.exports=r()})(Ao,function(){for(var t=function(c,u,p){return u===void 0&&(u=0),p===void 0&&(p=1),c<u?u:c>p?p:c},r=t,l=function(c){c._clipped=!1,c._unclipped=c.slice(0);for(var u=0;u<=3;u++)u<3?((c[u]<0||c[u]>255)&&(c._clipped=!0),c[u]=r(c[u],0,255)):u===3&&(c[u]=r(c[u],0,1));return c},o={},i=0,s=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];i<s.length;i+=1){var d=s[i];o["[object "+d+"]"]=d.toLowerCase()}var h=function(c){return o[Object.prototype.toString.call(c)]||"object"},m=h,b=function(c,u){return u===void 0&&(u=null),c.length>=3?Array.prototype.slice.call(c):m(c[0])=="object"&&u?u.split("").filter(function(p){return c[0][p]!==void 0}).map(function(p){return c[0][p]}):c[0]},S=h,L=function(c){if(c.length<2)return null;var u=c.length-1;return S(c[u])=="string"?c[u].toLowerCase():null},N=Math.PI,C={clip_rgb:l,limit:t,type:h,unpack:b,last:L,PI:N,TWOPI:N*2,PITHIRD:N/3,DEG2RAD:N/180,RAD2DEG:180/N},I={format:{},autodetect:[]},w=C.last,g=C.clip_rgb,y=C.type,v=I,E=function(){for(var u=[],p=arguments.length;p--;)u[p]=arguments[p];var x=this;if(y(u[0])==="object"&&u[0].constructor&&u[0].constructor===this.constructor)return u[0];var $=w(u),T=!1;if(!$){T=!0,v.sorted||(v.autodetect=v.autodetect.sort(function(H,K){return K.p-H.p}),v.sorted=!0);for(var k=0,R=v.autodetect;k<R.length;k+=1){var P=R[k];if($=P.test.apply(P,u),$)break}}if(v.format[$]){var z=v.format[$].apply(null,T?u:u.slice(0,-1));x._rgb=g(z)}else throw new Error("unknown format: "+u);x._rgb.length===3&&x._rgb.push(1)};E.prototype.toString=function(){return y(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var _=E,F=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(F.Color,[null].concat(c)))};F.Color=_,F.version="2.4.2";var O=F,B=C.unpack,q=Math.max,he=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=B(c,"rgb"),x=p[0],$=p[1],T=p[2];x=x/255,$=$/255,T=T/255;var k=1-q(x,q($,T)),R=k<1?1/(1-k):0,P=(1-x-k)*R,z=(1-$-k)*R,H=(1-T-k)*R;return[P,z,H,k]},se=he,Be=C.unpack,ln=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=Be(c,"cmyk");var p=c[0],x=c[1],$=c[2],T=c[3],k=c.length>4?c[4]:1;return T===1?[0,0,0,k]:[p>=1?0:255*(1-p)*(1-T),x>=1?0:255*(1-x)*(1-T),$>=1?0:255*(1-$)*(1-T),k]},Ve=ln,De=O,Ge=_,j=I,Z=C.unpack,J=C.type,ae=se;Ge.prototype.cmyk=function(){return ae(this._rgb)},De.cmyk=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(Ge,[null].concat(c,["cmyk"])))},j.format.cmyk=Ve,j.autodetect.push({p:2,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=Z(c,"cmyk"),J(c)==="array"&&c.length===4)return"cmyk"}});var fe=C.unpack,zn=C.last,pe=function(c){return Math.round(c*100)/100},en=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=fe(c,"hsla"),x=zn(c)||"lsa";return p[0]=pe(p[0]||0),p[1]=pe(p[1]*100)+"%",p[2]=pe(p[2]*100)+"%",x==="hsla"||p.length>3&&p[3]<1?(p[3]=p.length>3?p[3]:1,x="hsla"):p.length=3,x+"("+p.join(",")+")"},Ye=en,fn=C.unpack,Fn=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=fn(c,"rgba");var p=c[0],x=c[1],$=c[2];p/=255,x/=255,$/=255;var T=Math.min(p,x,$),k=Math.max(p,x,$),R=(k+T)/2,P,z;return k===T?(P=0,z=Number.NaN):P=R<.5?(k-T)/(k+T):(k-T)/(2-k-T),p==k?z=(x-$)/(k-T):x==k?z=2+($-p)/(k-T):$==k&&(z=4+(p-x)/(k-T)),z*=60,z<0&&(z+=360),c.length>3&&c[3]!==void 0?[z,P,R,c[3]]:[z,P,R]},Xr=Fn,Jr=C.unpack,Xt=C.last,ja=Ye,el=Xr,Ua=Math.round,nl=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=Jr(c,"rgba"),x=Xt(c)||"rgb";return x.substr(0,3)=="hsl"?ja(el(p),x):(p[0]=Ua(p[0]),p[1]=Ua(p[1]),p[2]=Ua(p[2]),(x==="rgba"||p.length>3&&p[3]<1)&&(p[3]=p.length>3?p[3]:1,x="rgba"),x+"("+p.slice(0,x==="rgb"?3:4).join(",")+")")},Si=nl,Ha=C.unpack,tl=Math.round,Wa=function(){for(var c,u=[],p=arguments.length;p--;)u[p]=arguments[p];u=Ha(u,"hsl");var x=u[0],$=u[1],T=u[2],k,R,P;if($===0)k=R=P=T*255;else{var z=[0,0,0],H=[0,0,0],K=T<.5?T*(1+$):T+$-T*$,V=2*T-K,te=x/360;z[0]=te+1/3,z[1]=te,z[2]=te-1/3;for(var ee=0;ee<3;ee++)z[ee]<0&&(z[ee]+=1),z[ee]>1&&(z[ee]-=1),6*z[ee]<1?H[ee]=V+(K-V)*6*z[ee]:2*z[ee]<1?H[ee]=K:3*z[ee]<2?H[ee]=V+(K-V)*(2/3-z[ee])*6:H[ee]=V;c=[tl(H[0]*255),tl(H[1]*255),tl(H[2]*255)],k=c[0],R=c[1],P=c[2]}return u.length>3?[k,R,P,u[3]]:[k,R,P,1]},Jt=Wa,Va=Jt,Ga=I,Ya=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,Ci=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,br=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,rl=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,qa=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,Ol=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,ki=Math.round,_i=function(c){c=c.toLowerCase().trim();var u;if(Ga.format.named)try{return Ga.format.named(c)}catch{}if(u=c.match(Ya)){for(var p=u.slice(1,4),x=0;x<3;x++)p[x]=+p[x];return p[3]=1,p}if(u=c.match(Ci)){for(var $=u.slice(1,5),T=0;T<4;T++)$[T]=+$[T];return $}if(u=c.match(br)){for(var k=u.slice(1,4),R=0;R<3;R++)k[R]=ki(k[R]*2.55);return k[3]=1,k}if(u=c.match(rl)){for(var P=u.slice(1,5),z=0;z<3;z++)P[z]=ki(P[z]*2.55);return P[3]=+P[3],P}if(u=c.match(qa)){var H=u.slice(1,4);H[1]*=.01,H[2]*=.01;var K=Va(H);return K[3]=1,K}if(u=c.match(Ol)){var V=u.slice(1,4);V[1]*=.01,V[2]*=.01;var te=Va(V);return te[3]=+u[4],te}};_i.test=function(c){return Ya.test(c)||Ci.test(c)||br.test(c)||rl.test(c)||qa.test(c)||Ol.test(c)};var $i=_i,Bc=O,M=_,A=I,W=C.type,Q=Si,ie=$i;M.prototype.css=function(c){return Q(this._rgb,c)},Bc.css=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(M,[null].concat(c,["css"])))},A.format.css=ie,A.autodetect.push({p:5,test:function(c){for(var u=[],p=arguments.length-1;p-- >0;)u[p]=arguments[p+1];if(!u.length&&W(c)==="string"&&ie.test(c))return"css"}});var ce=_,de=O,ue=I,le=C.unpack;ue.format.gl=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=le(c,"rgba");return p[0]*=255,p[1]*=255,p[2]*=255,p},de.gl=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(ce,[null].concat(c,["gl"])))},ce.prototype.gl=function(){var c=this._rgb;return[c[0]/255,c[1]/255,c[2]/255,c[3]]};var $e=C.unpack,Pe=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=$e(c,"rgb"),x=p[0],$=p[1],T=p[2],k=Math.min(x,$,T),R=Math.max(x,$,T),P=R-k,z=P*100/255,H=k/(255-P)*100,K;return P===0?K=Number.NaN:(x===R&&(K=($-T)/P),$===R&&(K=2+(T-x)/P),T===R&&(K=4+(x-$)/P),K*=60,K<0&&(K+=360)),[K,z,H]},bn=Pe,sn=C.unpack,pn=Math.floor,vt=function(){for(var c,u,p,x,$,T,k=[],R=arguments.length;R--;)k[R]=arguments[R];k=sn(k,"hcg");var P=k[0],z=k[1],H=k[2],K,V,te;H=H*255;var ee=z*255;if(z===0)K=V=te=H;else{P===360&&(P=0),P>360&&(P-=360),P<0&&(P+=360),P/=60;var me=pn(P),Se=P-me,Ee=H*(1-z),Ie=Ee+ee*(1-Se),kn=Ee+ee*Se,xn=Ee+ee;switch(me){case 0:c=[xn,kn,Ee],K=c[0],V=c[1],te=c[2];break;case 1:u=[Ie,xn,Ee],K=u[0],V=u[1],te=u[2];break;case 2:p=[Ee,xn,kn],K=p[0],V=p[1],te=p[2];break;case 3:x=[Ee,Ie,xn],K=x[0],V=x[1],te=x[2];break;case 4:$=[kn,Ee,xn],K=$[0],V=$[1],te=$[2];break;case 5:T=[xn,Ee,Ie],K=T[0],V=T[1],te=T[2];break}}return[K,V,te,k.length>3?k[3]:1]},ll=vt,Za=C.unpack,Al=C.type,$t=O,al=_,Dl=I,Qa=bn;al.prototype.hcg=function(){return Qa(this._rgb)},$t.hcg=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(al,[null].concat(c,["hcg"])))},Dl.format.hcg=ll,Dl.autodetect.push({p:1,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=Za(c,"hcg"),Al(c)==="array"&&c.length===3)return"hcg"}});var Ka=C.unpack,zl=C.last,ze=Math.round,qn=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=Ka(c,"rgba"),x=p[0],$=p[1],T=p[2],k=p[3],R=zl(c)||"auto";k===void 0&&(k=1),R==="auto"&&(R=k<1?"rgba":"rgb"),x=ze(x),$=ze($),T=ze(T);var P=x<<16|$<<8|T,z="000000"+P.toString(16);z=z.substr(z.length-6);var H="0"+ze(k*255).toString(16);switch(H=H.substr(H.length-2),R.toLowerCase()){case"rgba":return"#"+z+H;case"argb":return"#"+H+z;default:return"#"+z}},er=qn,gn=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,Xa=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,Ei=function(c){if(c.match(gn)){(c.length===4||c.length===7)&&(c=c.substr(1)),c.length===3&&(c=c.split(""),c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]);var u=parseInt(c,16),p=u>>16,x=u>>8&255,$=u&255;return[p,x,$,1]}if(c.match(Xa)){(c.length===5||c.length===9)&&(c=c.substr(1)),c.length===4&&(c=c.split(""),c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]+c[3]+c[3]);var T=parseInt(c,16),k=T>>24&255,R=T>>16&255,P=T>>8&255,z=Math.round((T&255)/255*100)/100;return[k,R,P,z]}throw new Error("unknown hex color: "+c)},Ti=Ei,I3=O,rp=_,R3=C.type,lp=I,P3=er;rp.prototype.hex=function(c){return P3(this._rgb,c)},I3.hex=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(rp,[null].concat(c,["hex"])))},lp.format.hex=Ti,lp.autodetect.push({p:4,test:function(c){for(var u=[],p=arguments.length-1;p-- >0;)u[p]=arguments[p+1];if(!u.length&&R3(c)==="string"&&[3,4,5,6,7,8,9].indexOf(c.length)>=0)return"hex"}});var F3=C.unpack,ap=C.TWOPI,M3=Math.min,O3=Math.sqrt,A3=Math.acos,D3=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=F3(c,"rgb"),x=p[0],$=p[1],T=p[2];x/=255,$/=255,T/=255;var k,R=M3(x,$,T),P=(x+$+T)/3,z=P>0?1-R/P:0;return z===0?k=NaN:(k=(x-$+(x-T))/2,k/=O3((x-$)*(x-$)+(x-T)*($-T)),k=A3(k),T>$&&(k=ap-k),k/=ap),[k*360,z,P]},z3=D3,B3=C.unpack,jc=C.limit,Bl=C.TWOPI,Uc=C.PITHIRD,jl=Math.cos,j3=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=B3(c,"hsi");var p=c[0],x=c[1],$=c[2],T,k,R;return isNaN(p)&&(p=0),isNaN(x)&&(x=0),p>360&&(p-=360),p<0&&(p+=360),p/=360,p<1/3?(R=(1-x)/3,T=(1+x*jl(Bl*p)/jl(Uc-Bl*p))/3,k=1-(R+T)):p<2/3?(p-=1/3,T=(1-x)/3,k=(1+x*jl(Bl*p)/jl(Uc-Bl*p))/3,R=1-(T+k)):(p-=2/3,k=(1-x)/3,R=(1+x*jl(Bl*p)/jl(Uc-Bl*p))/3,T=1-(k+R)),T=jc($*T*3),k=jc($*k*3),R=jc($*R*3),[T*255,k*255,R*255,c.length>3?c[3]:1]},U3=j3,H3=C.unpack,W3=C.type,V3=O,op=_,ip=I,G3=z3;op.prototype.hsi=function(){return G3(this._rgb)},V3.hsi=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(op,[null].concat(c,["hsi"])))},ip.format.hsi=U3,ip.autodetect.push({p:2,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=H3(c,"hsi"),W3(c)==="array"&&c.length===3)return"hsi"}});var Y3=C.unpack,q3=C.type,Z3=O,sp=_,cp=I,Q3=Xr;sp.prototype.hsl=function(){return Q3(this._rgb)},Z3.hsl=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(sp,[null].concat(c,["hsl"])))},cp.format.hsl=Jt,cp.autodetect.push({p:2,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=Y3(c,"hsl"),q3(c)==="array"&&c.length===3)return"hsl"}});var K3=C.unpack,X3=Math.min,J3=Math.max,e4=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=K3(c,"rgb");var p=c[0],x=c[1],$=c[2],T=X3(p,x,$),k=J3(p,x,$),R=k-T,P,z,H;return H=k/255,k===0?(P=Number.NaN,z=0):(z=R/k,p===k&&(P=(x-$)/R),x===k&&(P=2+($-p)/R),$===k&&(P=4+(p-x)/R),P*=60,P<0&&(P+=360)),[P,z,H]},n4=e4,t4=C.unpack,r4=Math.floor,l4=function(){for(var c,u,p,x,$,T,k=[],R=arguments.length;R--;)k[R]=arguments[R];k=t4(k,"hsv");var P=k[0],z=k[1],H=k[2],K,V,te;if(H*=255,z===0)K=V=te=H;else{P===360&&(P=0),P>360&&(P-=360),P<0&&(P+=360),P/=60;var ee=r4(P),me=P-ee,Se=H*(1-z),Ee=H*(1-z*me),Ie=H*(1-z*(1-me));switch(ee){case 0:c=[H,Ie,Se],K=c[0],V=c[1],te=c[2];break;case 1:u=[Ee,H,Se],K=u[0],V=u[1],te=u[2];break;case 2:p=[Se,H,Ie],K=p[0],V=p[1],te=p[2];break;case 3:x=[Se,Ee,H],K=x[0],V=x[1],te=x[2];break;case 4:$=[Ie,Se,H],K=$[0],V=$[1],te=$[2];break;case 5:T=[H,Se,Ee],K=T[0],V=T[1],te=T[2];break}}return[K,V,te,k.length>3?k[3]:1]},a4=l4,o4=C.unpack,i4=C.type,s4=O,dp=_,up=I,c4=n4;dp.prototype.hsv=function(){return c4(this._rgb)},s4.hsv=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(dp,[null].concat(c,["hsv"])))},up.format.hsv=a4,up.autodetect.push({p:2,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=o4(c,"hsv"),i4(c)==="array"&&c.length===3)return"hsv"}});var Ni={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},Ul=Ni,d4=C.unpack,hp=Math.pow,u4=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=d4(c,"rgb"),x=p[0],$=p[1],T=p[2],k=h4(x,$,T),R=k[0],P=k[1],z=k[2],H=116*P-16;return[H<0?0:H,500*(R-P),200*(P-z)]},Hc=function(c){return(c/=255)<=.04045?c/12.92:hp((c+.055)/1.055,2.4)},Wc=function(c){return c>Ul.t3?hp(c,1/3):c/Ul.t2+Ul.t0},h4=function(c,u,p){c=Hc(c),u=Hc(u),p=Hc(p);var x=Wc((.4124564*c+.3575761*u+.1804375*p)/Ul.Xn),$=Wc((.2126729*c+.7151522*u+.072175*p)/Ul.Yn),T=Wc((.0193339*c+.119192*u+.9503041*p)/Ul.Zn);return[x,$,T]},fp=u4,Hl=Ni,f4=C.unpack,p4=Math.pow,g4=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=f4(c,"lab");var p=c[0],x=c[1],$=c[2],T,k,R,P,z,H;return k=(p+16)/116,T=isNaN(x)?k:k+x/500,R=isNaN($)?k:k-$/200,k=Hl.Yn*Gc(k),T=Hl.Xn*Gc(T),R=Hl.Zn*Gc(R),P=Vc(3.2404542*T-1.5371385*k-.4985314*R),z=Vc(-.969266*T+1.8760108*k+.041556*R),H=Vc(.0556434*T-.2040259*k+1.0572252*R),[P,z,H,c.length>3?c[3]:1]},Vc=function(c){return 255*(c<=.00304?12.92*c:1.055*p4(c,1/2.4)-.055)},Gc=function(c){return c>Hl.t1?c*c*c:Hl.t2*(c-Hl.t0)},pp=g4,m4=C.unpack,v4=C.type,y4=O,gp=_,mp=I,b4=fp;gp.prototype.lab=function(){return b4(this._rgb)},y4.lab=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(gp,[null].concat(c,["lab"])))},mp.format.lab=pp,mp.autodetect.push({p:2,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=m4(c,"lab"),v4(c)==="array"&&c.length===3)return"lab"}});var w4=C.unpack,x4=C.RAD2DEG,S4=Math.sqrt,C4=Math.atan2,k4=Math.round,_4=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=w4(c,"lab"),x=p[0],$=p[1],T=p[2],k=S4($*$+T*T),R=(C4(T,$)*x4+360)%360;return k4(k*1e4)===0&&(R=Number.NaN),[x,k,R]},vp=_4,$4=C.unpack,E4=fp,T4=vp,N4=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=$4(c,"rgb"),x=p[0],$=p[1],T=p[2],k=E4(x,$,T),R=k[0],P=k[1],z=k[2];return T4(R,P,z)},L4=N4,I4=C.unpack,R4=C.DEG2RAD,P4=Math.sin,F4=Math.cos,M4=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=I4(c,"lch"),x=p[0],$=p[1],T=p[2];return isNaN(T)&&(T=0),T=T*R4,[x,F4(T)*$,P4(T)*$]},yp=M4,O4=C.unpack,A4=yp,D4=pp,z4=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=O4(c,"lch");var p=c[0],x=c[1],$=c[2],T=A4(p,x,$),k=T[0],R=T[1],P=T[2],z=D4(k,R,P),H=z[0],K=z[1],V=z[2];return[H,K,V,c.length>3?c[3]:1]},bp=z4,B4=C.unpack,j4=bp,U4=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=B4(c,"hcl").reverse();return j4.apply(void 0,p)},H4=U4,W4=C.unpack,V4=C.type,wp=O,Li=_,Yc=I,xp=L4;Li.prototype.lch=function(){return xp(this._rgb)},Li.prototype.hcl=function(){return xp(this._rgb).reverse()},wp.lch=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(Li,[null].concat(c,["lch"])))},wp.hcl=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(Li,[null].concat(c,["hcl"])))},Yc.format.lch=bp,Yc.format.hcl=H4,["lch","hcl"].forEach(function(c){return Yc.autodetect.push({p:2,test:function(){for(var u=[],p=arguments.length;p--;)u[p]=arguments[p];if(u=W4(u,c),V4(u)==="array"&&u.length===3)return c}})});var G4={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},Sp=G4,Y4=_,Cp=I,q4=C.type,Ja=Sp,Z4=Ti,Q4=er;Y4.prototype.name=function(){for(var c=Q4(this._rgb,"rgb"),u=0,p=Object.keys(Ja);u<p.length;u+=1){var x=p[u];if(Ja[x]===c)return x.toLowerCase()}return c},Cp.format.named=function(c){if(c=c.toLowerCase(),Ja[c])return Z4(Ja[c]);throw new Error("unknown color name: "+c)},Cp.autodetect.push({p:5,test:function(c){for(var u=[],p=arguments.length-1;p-- >0;)u[p]=arguments[p+1];if(!u.length&&q4(c)==="string"&&Ja[c.toLowerCase()])return"named"}});var K4=C.unpack,X4=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=K4(c,"rgb"),x=p[0],$=p[1],T=p[2];return(x<<16)+($<<8)+T},J4=X4,eb=C.type,nb=function(c){if(eb(c)=="number"&&c>=0&&c<=16777215){var u=c>>16,p=c>>8&255,x=c&255;return[u,p,x,1]}throw new Error("unknown num color: "+c)},tb=nb,rb=O,kp=_,_p=I,lb=C.type,ab=J4;kp.prototype.num=function(){return ab(this._rgb)},rb.num=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(kp,[null].concat(c,["num"])))},_p.format.num=tb,_p.autodetect.push({p:5,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c.length===1&&lb(c[0])==="number"&&c[0]>=0&&c[0]<=16777215)return"num"}});var ob=O,qc=_,$p=I,Ep=C.unpack,Tp=C.type,Np=Math.round;qc.prototype.rgb=function(c){return c===void 0&&(c=!0),c===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(Np)},qc.prototype.rgba=function(c){return c===void 0&&(c=!0),this._rgb.slice(0,4).map(function(u,p){return p<3?c===!1?u:Np(u):u})},ob.rgb=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(qc,[null].concat(c,["rgb"])))},$p.format.rgb=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=Ep(c,"rgba");return p[3]===void 0&&(p[3]=1),p},$p.autodetect.push({p:3,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=Ep(c,"rgba"),Tp(c)==="array"&&(c.length===3||c.length===4&&Tp(c[3])=="number"&&c[3]>=0&&c[3]<=1))return"rgb"}});var Ii=Math.log,ib=function(c){var u=c/100,p,x,$;return u<66?(p=255,x=u<6?0:-155.25485562709179-.44596950469579133*(x=u-2)+104.49216199393888*Ii(x),$=u<20?0:-254.76935184120902+.8274096064007395*($=u-10)+115.67994401066147*Ii($)):(p=351.97690566805693+.114206453784165*(p=u-55)-40.25366309332127*Ii(p),x=325.4494125711974+.07943456536662342*(x=u-50)-28.0852963507957*Ii(x),$=255),[p,x,$,1]},Lp=ib,sb=Lp,cb=C.unpack,db=Math.round,ub=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];for(var p=cb(c,"rgb"),x=p[0],$=p[2],T=1e3,k=4e4,R=.4,P;k-T>R;){P=(k+T)*.5;var z=sb(P);z[2]/z[0]>=$/x?k=P:T=P}return db(P)},hb=ub,Zc=O,Ri=_,Qc=I,fb=hb;Ri.prototype.temp=Ri.prototype.kelvin=Ri.prototype.temperature=function(){return fb(this._rgb)},Zc.temp=Zc.kelvin=Zc.temperature=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(Ri,[null].concat(c,["temp"])))},Qc.format.temp=Qc.format.kelvin=Qc.format.temperature=Lp;var pb=C.unpack,Kc=Math.cbrt,gb=Math.pow,mb=Math.sign,vb=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=pb(c,"rgb"),x=p[0],$=p[1],T=p[2],k=[Xc(x/255),Xc($/255),Xc(T/255)],R=k[0],P=k[1],z=k[2],H=Kc(.4122214708*R+.5363325363*P+.0514459929*z),K=Kc(.2119034982*R+.6806995451*P+.1073969566*z),V=Kc(.0883024619*R+.2817188376*P+.6299787005*z);return[.2104542553*H+.793617785*K-.0040720468*V,1.9779984951*H-2.428592205*K+.4505937099*V,.0259040371*H+.7827717662*K-.808675766*V]},Ip=vb;function Xc(c){var u=Math.abs(c);return u<.04045?c/12.92:(mb(c)||1)*gb((u+.055)/1.055,2.4)}var yb=C.unpack,Pi=Math.pow,bb=Math.sign,wb=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=yb(c,"lab");var p=c[0],x=c[1],$=c[2],T=Pi(p+.3963377774*x+.2158037573*$,3),k=Pi(p-.1055613458*x-.0638541728*$,3),R=Pi(p-.0894841775*x-1.291485548*$,3);return[255*Jc(4.0767416621*T-3.3077115913*k+.2309699292*R),255*Jc(-1.2684380046*T+2.6097574011*k-.3413193965*R),255*Jc(-.0041960863*T-.7034186147*k+1.707614701*R),c.length>3?c[3]:1]},Rp=wb;function Jc(c){var u=Math.abs(c);return u>.0031308?(bb(c)||1)*(1.055*Pi(u,1/2.4)-.055):c*12.92}var xb=C.unpack,Sb=C.type,Cb=O,Pp=_,Fp=I,kb=Ip;Pp.prototype.oklab=function(){return kb(this._rgb)},Cb.oklab=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(Pp,[null].concat(c,["oklab"])))},Fp.format.oklab=Rp,Fp.autodetect.push({p:3,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=xb(c,"oklab"),Sb(c)==="array"&&c.length===3)return"oklab"}});var _b=C.unpack,$b=Ip,Eb=vp,Tb=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];var p=_b(c,"rgb"),x=p[0],$=p[1],T=p[2],k=$b(x,$,T),R=k[0],P=k[1],z=k[2];return Eb(R,P,z)},Nb=Tb,Lb=C.unpack,Ib=yp,Rb=Rp,Pb=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];c=Lb(c,"lch");var p=c[0],x=c[1],$=c[2],T=Ib(p,x,$),k=T[0],R=T[1],P=T[2],z=Rb(k,R,P),H=z[0],K=z[1],V=z[2];return[H,K,V,c.length>3?c[3]:1]},Fb=Pb,Mb=C.unpack,Ob=C.type,Ab=O,Mp=_,Op=I,Db=Nb;Mp.prototype.oklch=function(){return Db(this._rgb)},Ab.oklch=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];return new(Function.prototype.bind.apply(Mp,[null].concat(c,["oklch"])))},Op.format.oklch=Fb,Op.autodetect.push({p:3,test:function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(c=Mb(c,"oklch"),Ob(c)==="array"&&c.length===3)return"oklch"}});var Ap=_,zb=C.type;Ap.prototype.alpha=function(c,u){return u===void 0&&(u=!1),c!==void 0&&zb(c)==="number"?u?(this._rgb[3]=c,this):new Ap([this._rgb[0],this._rgb[1],this._rgb[2],c],"rgb"):this._rgb[3]};var Bb=_;Bb.prototype.clipped=function(){return this._rgb._clipped||!1};var ol=_,jb=Ni;ol.prototype.darken=function(c){c===void 0&&(c=1);var u=this,p=u.lab();return p[0]-=jb.Kn*c,new ol(p,"lab").alpha(u.alpha(),!0)},ol.prototype.brighten=function(c){return c===void 0&&(c=1),this.darken(-c)},ol.prototype.darker=ol.prototype.darken,ol.prototype.brighter=ol.prototype.brighten;var Ub=_;Ub.prototype.get=function(c){var u=c.split("."),p=u[0],x=u[1],$=this[p]();if(x){var T=p.indexOf(x)-(p.substr(0,2)==="ok"?2:0);if(T>-1)return $[T];throw new Error("unknown channel "+x+" in mode "+p)}else return $};var Wl=_,Hb=C.type,Wb=Math.pow,Vb=1e-7,Gb=20;Wl.prototype.luminance=function(c){if(c!==void 0&&Hb(c)==="number"){if(c===0)return new Wl([0,0,0,this._rgb[3]],"rgb");if(c===1)return new Wl([255,255,255,this._rgb[3]],"rgb");var u=this.luminance(),p="rgb",x=Gb,$=function(k,R){var P=k.interpolate(R,.5,p),z=P.luminance();return Math.abs(c-z)<Vb||!x--?P:z>c?$(k,P):$(P,R)},T=(u>c?$(new Wl([0,0,0]),this):$(this,new Wl([255,255,255]))).rgb();return new Wl(T.concat([this._rgb[3]]))}return Yb.apply(void 0,this._rgb.slice(0,3))};var Yb=function(c,u,p){return c=ed(c),u=ed(u),p=ed(p),.2126*c+.7152*u+.0722*p},ed=function(c){return c/=255,c<=.03928?c/12.92:Wb((c+.055)/1.055,2.4)},lt={},Dp=_,zp=C.type,Fi=lt,Bp=function(c,u,p){p===void 0&&(p=.5);for(var x=[],$=arguments.length-3;$-- >0;)x[$]=arguments[$+3];var T=x[0]||"lrgb";if(!Fi[T]&&!x.length&&(T=Object.keys(Fi)[0]),!Fi[T])throw new Error("interpolation mode "+T+" is not defined");return zp(c)!=="object"&&(c=new Dp(c)),zp(u)!=="object"&&(u=new Dp(u)),Fi[T](c,u,p).alpha(c.alpha()+p*(u.alpha()-c.alpha()))},jp=_,qb=Bp;jp.prototype.mix=jp.prototype.interpolate=function(c,u){u===void 0&&(u=.5);for(var p=[],x=arguments.length-2;x-- >0;)p[x]=arguments[x+2];return qb.apply(void 0,[this,c,u].concat(p))};var Up=_;Up.prototype.premultiply=function(c){c===void 0&&(c=!1);var u=this._rgb,p=u[3];return c?(this._rgb=[u[0]*p,u[1]*p,u[2]*p,p],this):new Up([u[0]*p,u[1]*p,u[2]*p,p],"rgb")};var nd=_,Zb=Ni;nd.prototype.saturate=function(c){c===void 0&&(c=1);var u=this,p=u.lch();return p[1]+=Zb.Kn*c,p[1]<0&&(p[1]=0),new nd(p,"lch").alpha(u.alpha(),!0)},nd.prototype.desaturate=function(c){return c===void 0&&(c=1),this.saturate(-c)};var Hp=_,Wp=C.type;Hp.prototype.set=function(c,u,p){p===void 0&&(p=!1);var x=c.split("."),$=x[0],T=x[1],k=this[$]();if(T){var R=$.indexOf(T)-($.substr(0,2)==="ok"?2:0);if(R>-1){if(Wp(u)=="string")switch(u.charAt(0)){case"+":k[R]+=+u;break;case"-":k[R]+=+u;break;case"*":k[R]*=+u.substr(1);break;case"/":k[R]/=+u.substr(1);break;default:k[R]=+u}else if(Wp(u)==="number")k[R]=u;else throw new Error("unsupported value for Color.set");var P=new Hp(k,$);return p?(this._rgb=P._rgb,this):P}throw new Error("unknown channel "+T+" in mode "+$)}else return k};var Qb=_,Kb=function(c,u,p){var x=c._rgb,$=u._rgb;return new Qb(x[0]+p*($[0]-x[0]),x[1]+p*($[1]-x[1]),x[2]+p*($[2]-x[2]),"rgb")};lt.rgb=Kb;var Xb=_,td=Math.sqrt,Vl=Math.pow,Jb=function(c,u,p){var x=c._rgb,$=x[0],T=x[1],k=x[2],R=u._rgb,P=R[0],z=R[1],H=R[2];return new Xb(td(Vl($,2)*(1-p)+Vl(P,2)*p),td(Vl(T,2)*(1-p)+Vl(z,2)*p),td(Vl(k,2)*(1-p)+Vl(H,2)*p),"rgb")};lt.lrgb=Jb;var e5=_,n5=function(c,u,p){var x=c.lab(),$=u.lab();return new e5(x[0]+p*($[0]-x[0]),x[1]+p*($[1]-x[1]),x[2]+p*($[2]-x[2]),"lab")};lt.lab=n5;var Vp=_,Gl=function(c,u,p,x){var $,T,k,R;x==="hsl"?(k=c.hsl(),R=u.hsl()):x==="hsv"?(k=c.hsv(),R=u.hsv()):x==="hcg"?(k=c.hcg(),R=u.hcg()):x==="hsi"?(k=c.hsi(),R=u.hsi()):x==="lch"||x==="hcl"?(x="hcl",k=c.hcl(),R=u.hcl()):x==="oklch"&&(k=c.oklch().reverse(),R=u.oklch().reverse());var P,z,H,K,V,te;(x.substr(0,1)==="h"||x==="oklch")&&($=k,P=$[0],H=$[1],V=$[2],T=R,z=T[0],K=T[1],te=T[2]);var ee,me,Se,Ee;return!isNaN(P)&&!isNaN(z)?(z>P&&z-P>180?Ee=z-(P+360):z<P&&P-z>180?Ee=z+360-P:Ee=z-P,me=P+p*Ee):isNaN(P)?isNaN(z)?me=Number.NaN:(me=z,(V==1||V==0)&&x!="hsv"&&(ee=K)):(me=P,(te==1||te==0)&&x!="hsv"&&(ee=H)),ee===void 0&&(ee=H+p*(K-H)),Se=V+p*(te-V),x==="oklch"?new Vp([Se,ee,me],x):new Vp([me,ee,Se],x)},t5=Gl,Gp=function(c,u,p){return t5(c,u,p,"lch")};lt.lch=Gp,lt.hcl=Gp;var r5=_,l5=function(c,u,p){var x=c.num(),$=u.num();return new r5(x+p*($-x),"num")};lt.num=l5;var a5=Gl,o5=function(c,u,p){return a5(c,u,p,"hcg")};lt.hcg=o5;var i5=Gl,s5=function(c,u,p){return i5(c,u,p,"hsi")};lt.hsi=s5;var c5=Gl,d5=function(c,u,p){return c5(c,u,p,"hsl")};lt.hsl=d5;var u5=Gl,h5=function(c,u,p){return u5(c,u,p,"hsv")};lt.hsv=h5;var f5=_,p5=function(c,u,p){var x=c.oklab(),$=u.oklab();return new f5(x[0]+p*($[0]-x[0]),x[1]+p*($[1]-x[1]),x[2]+p*($[2]-x[2]),"oklab")};lt.oklab=p5;var g5=Gl,m5=function(c,u,p){return g5(c,u,p,"oklch")};lt.oklch=m5;var rd=_,v5=C.clip_rgb,ld=Math.pow,ad=Math.sqrt,od=Math.PI,Yp=Math.cos,qp=Math.sin,y5=Math.atan2,b5=function(c,u,p){u===void 0&&(u="lrgb"),p===void 0&&(p=null);var x=c.length;p||(p=Array.from(new Array(x)).map(function(){return 1}));var $=x/p.reduce(function(me,Se){return me+Se});if(p.forEach(function(me,Se){p[Se]*=$}),c=c.map(function(me){return new rd(me)}),u==="lrgb")return w5(c,p);for(var T=c.shift(),k=T.get(u),R=[],P=0,z=0,H=0;H<k.length;H++)if(k[H]=(k[H]||0)*p[0],R.push(isNaN(k[H])?0:p[0]),u.charAt(H)==="h"&&!isNaN(k[H])){var K=k[H]/180*od;P+=Yp(K)*p[0],z+=qp(K)*p[0]}var V=T.alpha()*p[0];c.forEach(function(me,Se){var Ee=me.get(u);V+=me.alpha()*p[Se+1];for(var Ie=0;Ie<k.length;Ie++)if(!isNaN(Ee[Ie]))if(R[Ie]+=p[Se+1],u.charAt(Ie)==="h"){var kn=Ee[Ie]/180*od;P+=Yp(kn)*p[Se+1],z+=qp(kn)*p[Se+1]}else k[Ie]+=Ee[Ie]*p[Se+1]});for(var te=0;te<k.length;te++)if(u.charAt(te)==="h"){for(var ee=y5(z/R[te],P/R[te])/od*180;ee<0;)ee+=360;for(;ee>=360;)ee-=360;k[te]=ee}else k[te]=k[te]/R[te];return V/=x,new rd(k,u).alpha(V>.99999?1:V,!0)},w5=function(c,u){for(var p=c.length,x=[0,0,0,0],$=0;$<c.length;$++){var T=c[$],k=u[$]/p,R=T._rgb;x[0]+=ld(R[0],2)*k,x[1]+=ld(R[1],2)*k,x[2]+=ld(R[2],2)*k,x[3]+=R[3]*k}return x[0]=ad(x[0]),x[1]=ad(x[1]),x[2]=ad(x[2]),x[3]>.9999999&&(x[3]=1),new rd(v5(x))},Et=O,Yl=C.type,x5=Math.pow,id=function(c){var u="rgb",p=Et("#ccc"),x=0,$=[0,1],T=[],k=[0,0],R=!1,P=[],z=!1,H=0,K=1,V=!1,te={},ee=!0,me=1,Se=function(G){if(G=G||["#fff","#000"],G&&Yl(G)==="string"&&Et.brewer&&Et.brewer[G.toLowerCase()]&&(G=Et.brewer[G.toLowerCase()]),Yl(G)==="array"){G.length===1&&(G=[G[0],G[0]]),G=G.slice(0);for(var oe=0;oe<G.length;oe++)G[oe]=Et(G[oe]);T.length=0;for(var be=0;be<G.length;be++)T.push(be/(G.length-1))}return Zn(),P=G},Ee=function(G){if(R!=null){for(var oe=R.length-1,be=0;be<oe&&G>=R[be];)be++;return be-1}return 0},Ie=function(G){return G},kn=function(G){return G},xn=function(G,oe){var be,ve;if(oe==null&&(oe=!1),isNaN(G)||G===null)return p;if(oe)ve=G;else if(R&&R.length>2){var _n=Ee(G);ve=_n/(R.length-2)}else K!==H?ve=(G-H)/(K-H):ve=1;ve=kn(ve),oe||(ve=Ie(ve)),me!==1&&(ve=x5(ve,me)),ve=k[0]+ve*(1-k[0]-k[1]),ve=Math.min(1,Math.max(0,ve));var je=Math.floor(ve*1e4);if(ee&&te[je])be=te[je];else{if(Yl(P)==="array")for(var Te=0;Te<T.length;Te++){var Fe=T[Te];if(ve<=Fe){be=P[Te];break}if(ve>=Fe&&Te===T.length-1){be=P[Te];break}if(ve>Fe&&ve<T[Te+1]){ve=(ve-Fe)/(T[Te+1]-Fe),be=Et.interpolate(P[Te],P[Te+1],ve,u);break}}else Yl(P)==="function"&&(be=P(ve));ee&&(te[je]=be)}return be},Zn=function(){return te={}};Se(c);var _e=function(G){var oe=Et(xn(G));return z&&oe[z]?oe[z]():oe};return _e.classes=function(G){if(G!=null){if(Yl(G)==="array")R=G,$=[G[0],G[G.length-1]];else{var oe=Et.analyze($);G===0?R=[oe.min,oe.max]:R=Et.limits(oe,"e",G)}return _e}return R},_e.domain=function(G){if(!arguments.length)return $;H=G[0],K=G[G.length-1],T=[];var oe=P.length;if(G.length===oe&&H!==K)for(var be=0,ve=Array.from(G);be<ve.length;be+=1){var _n=ve[be];T.push((_n-H)/(K-H))}else{for(var je=0;je<oe;je++)T.push(je/(oe-1));if(G.length>2){var Te=G.map(function(Me,Oe){return Oe/(G.length-1)}),Fe=G.map(function(Me){return(Me-H)/(K-H)});Fe.every(function(Me,Oe){return Te[Oe]===Me})||(kn=function(Me){if(Me<=0||Me>=1)return Me;for(var Oe=0;Me>=Fe[Oe+1];)Oe++;var Nt=(Me-Fe[Oe])/(Fe[Oe+1]-Fe[Oe]),Sr=Te[Oe]+Nt*(Te[Oe+1]-Te[Oe]);return Sr})}}return $=[H,K],_e},_e.mode=function(G){return arguments.length?(u=G,Zn(),_e):u},_e.range=function(G,oe){return Se(G),_e},_e.out=function(G){return z=G,_e},_e.spread=function(G){return arguments.length?(x=G,_e):x},_e.correctLightness=function(G){return G==null&&(G=!0),V=G,Zn(),V?Ie=function(oe){for(var be=xn(0,!0).lab()[0],ve=xn(1,!0).lab()[0],_n=be>ve,je=xn(oe,!0).lab()[0],Te=be+(ve-be)*oe,Fe=je-Te,Me=0,Oe=1,Nt=20;Math.abs(Fe)>.01&&Nt-- >0;)(function(){return _n&&(Fe*=-1),Fe<0?(Me=oe,oe+=(Oe-oe)*.5):(Oe=oe,oe+=(Me-oe)*.5),je=xn(oe,!0).lab()[0],Fe=je-Te})();return oe}:Ie=function(oe){return oe},_e},_e.padding=function(G){return G!=null?(Yl(G)==="number"&&(G=[G,G]),k=G,_e):k},_e.colors=function(G,oe){arguments.length<2&&(oe="hex");var be=[];if(arguments.length===0)be=P.slice(0);else if(G===1)be=[_e(.5)];else if(G>1){var ve=$[0],_n=$[1]-ve;be=S5(0,G,!1).map(function(Oe){return _e(ve+Oe/(G-1)*_n)})}else{c=[];var je=[];if(R&&R.length>2)for(var Te=1,Fe=R.length,Me=1<=Fe;Me?Te<Fe:Te>Fe;Me?Te++:Te--)je.push((R[Te-1]+R[Te])*.5);else je=$;be=je.map(function(Oe){return _e(Oe)})}return Et[oe]&&(be=be.map(function(Oe){return Oe[oe]()})),be},_e.cache=function(G){return G!=null?(ee=G,_e):ee},_e.gamma=function(G){return G!=null?(me=G,_e):me},_e.nodata=function(G){return G!=null?(p=Et(G),_e):p},_e};function S5(c,u,p){for(var x=[],$=c<u,T=p?$?u+1:u-1:u,k=c;$?k<T:k>T;$?k++:k--)x.push(k);return x}var eo=_,C5=id,k5=function(c){for(var u=[1,1],p=1;p<c;p++){for(var x=[1],$=1;$<=u.length;$++)x[$]=(u[$]||0)+u[$-1];u=x}return u},_5=function(c){var u,p,x,$,T,k,R;if(c=c.map(function(V){return new eo(V)}),c.length===2)u=c.map(function(V){return V.lab()}),T=u[0],k=u[1],$=function(V){var te=[0,1,2].map(function(ee){return T[ee]+V*(k[ee]-T[ee])});return new eo(te,"lab")};else if(c.length===3)p=c.map(function(V){return V.lab()}),T=p[0],k=p[1],R=p[2],$=function(V){var te=[0,1,2].map(function(ee){return(1-V)*(1-V)*T[ee]+2*(1-V)*V*k[ee]+V*V*R[ee]});return new eo(te,"lab")};else if(c.length===4){var P;x=c.map(function(V){return V.lab()}),T=x[0],k=x[1],R=x[2],P=x[3],$=function(V){var te=[0,1,2].map(function(ee){return(1-V)*(1-V)*(1-V)*T[ee]+3*(1-V)*(1-V)*V*k[ee]+3*(1-V)*V*V*R[ee]+V*V*V*P[ee]});return new eo(te,"lab")}}else if(c.length>=5){var z,H,K;z=c.map(function(V){return V.lab()}),K=c.length-1,H=k5(K),$=function(V){var te=1-V,ee=[0,1,2].map(function(me){return z.reduce(function(Se,Ee,Ie){return Se+H[Ie]*Math.pow(te,K-Ie)*Math.pow(V,Ie)*Ee[me]},0)});return new eo(ee,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return $},$5=function(c){var u=_5(c);return u.scale=function(){return C5(u)},u},sd=O,Tt=function(c,u,p){if(!Tt[p])throw new Error("unknown blend mode "+p);return Tt[p](c,u)},wr=function(c){return function(u,p){var x=sd(p).rgb(),$=sd(u).rgb();return sd.rgb(c(x,$))}},xr=function(c){return function(u,p){var x=[];return x[0]=c(u[0],p[0]),x[1]=c(u[1],p[1]),x[2]=c(u[2],p[2]),x}},E5=function(c){return c},T5=function(c,u){return c*u/255},N5=function(c,u){return c>u?u:c},L5=function(c,u){return c>u?c:u},I5=function(c,u){return 255*(1-(1-c/255)*(1-u/255))},R5=function(c,u){return u<128?2*c*u/255:255*(1-2*(1-c/255)*(1-u/255))},P5=function(c,u){return 255*(1-(1-u/255)/(c/255))},F5=function(c,u){return c===255?255:(c=255*(u/255)/(1-c/255),c>255?255:c)};Tt.normal=wr(xr(E5)),Tt.multiply=wr(xr(T5)),Tt.screen=wr(xr(I5)),Tt.overlay=wr(xr(R5)),Tt.darken=wr(xr(N5)),Tt.lighten=wr(xr(L5)),Tt.dodge=wr(xr(F5)),Tt.burn=wr(xr(P5));for(var M5=Tt,cd=C.type,O5=C.clip_rgb,A5=C.TWOPI,D5=Math.pow,z5=Math.sin,B5=Math.cos,Zp=O,j5=function(c,u,p,x,$){c===void 0&&(c=300),u===void 0&&(u=-1.5),p===void 0&&(p=1),x===void 0&&(x=1),$===void 0&&($=[0,1]);var T=0,k;cd($)==="array"?k=$[1]-$[0]:(k=0,$=[$,$]);var R=function(P){var z=A5*((c+120)/360+u*P),H=D5($[0]+k*P,x),K=T!==0?p[0]+P*T:p,V=K*H*(1-H)/2,te=B5(z),ee=z5(z),me=H+V*(-.14861*te+1.78277*ee),Se=H+V*(-.29227*te-.90649*ee),Ee=H+V*(1.97294*te);return Zp(O5([me*255,Se*255,Ee*255,1]))};return R.start=function(P){return P==null?c:(c=P,R)},R.rotations=function(P){return P==null?u:(u=P,R)},R.gamma=function(P){return P==null?x:(x=P,R)},R.hue=function(P){return P==null?p:(p=P,cd(p)==="array"?(T=p[1]-p[0],T===0&&(p=p[1])):T=0,R)},R.lightness=function(P){return P==null?$:(cd(P)==="array"?($=P,k=P[1]-P[0]):($=[P,P],k=0),R)},R.scale=function(){return Zp.scale(R)},R.hue(p),R},U5=_,H5="0123456789abcdef",W5=Math.floor,V5=Math.random,G5=function(){for(var c="#",u=0;u<6;u++)c+=H5.charAt(W5(V5()*16));return new U5(c,"hex")},dd=h,Qp=Math.log,Y5=Math.pow,q5=Math.floor,Z5=Math.abs,Kp=function(c,u){u===void 0&&(u=null);var p={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return dd(c)==="object"&&(c=Object.values(c)),c.forEach(function(x){u&&dd(x)==="object"&&(x=x[u]),x!=null&&!isNaN(x)&&(p.values.push(x),p.sum+=x,x<p.min&&(p.min=x),x>p.max&&(p.max=x),p.count+=1)}),p.domain=[p.min,p.max],p.limits=function(x,$){return Xp(p,x,$)},p},Xp=function(c,u,p){u===void 0&&(u="equal"),p===void 0&&(p=7),dd(c)=="array"&&(c=Kp(c));var x=c.min,$=c.max,T=c.values.sort(function(hd,fd){return hd-fd});if(p===1)return[x,$];var k=[];if(u.substr(0,1)==="c"&&(k.push(x),k.push($)),u.substr(0,1)==="e"){k.push(x);for(var R=1;R<p;R++)k.push(x+R/p*($-x));k.push($)}else if(u.substr(0,1)==="l"){if(x<=0)throw new Error("Logarithmic scales are only possible for values > 0");var P=Math.LOG10E*Qp(x),z=Math.LOG10E*Qp($);k.push(x);for(var H=1;H<p;H++)k.push(Y5(10,P+H/p*(z-P)));k.push($)}else if(u.substr(0,1)==="q"){k.push(x);for(var K=1;K<p;K++){var V=(T.length-1)*K/p,te=q5(V);if(te===V)k.push(T[te]);else{var ee=V-te;k.push(T[te]*(1-ee)+T[te+1]*ee)}}k.push($)}else if(u.substr(0,1)==="k"){var me,Se=T.length,Ee=new Array(Se),Ie=new Array(p),kn=!0,xn=0,Zn=null;Zn=[],Zn.push(x);for(var _e=1;_e<p;_e++)Zn.push(x+_e/p*($-x));for(Zn.push($);kn;){for(var G=0;G<p;G++)Ie[G]=0;for(var oe=0;oe<Se;oe++)for(var be=T[oe],ve=Number.MAX_VALUE,_n=void 0,je=0;je<p;je++){var Te=Z5(Zn[je]-be);Te<ve&&(ve=Te,_n=je),Ie[_n]++,Ee[oe]=_n}for(var Fe=new Array(p),Me=0;Me<p;Me++)Fe[Me]=null;for(var Oe=0;Oe<Se;Oe++)me=Ee[Oe],Fe[me]===null?Fe[me]=T[Oe]:Fe[me]+=T[Oe];for(var Nt=0;Nt<p;Nt++)Fe[Nt]*=1/Ie[Nt];kn=!1;for(var Sr=0;Sr<p;Sr++)if(Fe[Sr]!==Zn[Sr]){kn=!0;break}Zn=Fe,xn++,xn>200&&(kn=!1)}for(var Cr={},ql=0;ql<p;ql++)Cr[ql]=[];for(var Zl=0;Zl<Se;Zl++)me=Ee[Zl],Cr[me].push(T[Zl]);for(var tr=[],il=0;il<p;il++)tr.push(Cr[il][0]),tr.push(Cr[il][Cr[il].length-1]);tr=tr.sort(function(hd,fd){return hd-fd}),k.push(tr[0]);for(var no=1;no<tr.length;no+=2){var sl=tr[no];!isNaN(sl)&&k.indexOf(sl)===-1&&k.push(sl)}}return k},Jp={analyze:Kp,limits:Xp},e0=_,Q5=function(c,u){c=new e0(c),u=new e0(u);var p=c.luminance(),x=u.luminance();return p>x?(p+.05)/(x+.05):(x+.05)/(p+.05)},n0=_,nr=Math.sqrt,cn=Math.pow,K5=Math.min,X5=Math.max,t0=Math.atan2,r0=Math.abs,Mi=Math.cos,l0=Math.sin,J5=Math.exp,a0=Math.PI,e6=function(c,u,p,x,$){p===void 0&&(p=1),x===void 0&&(x=1),$===void 0&&($=1);var T=function(sl){return 360*sl/(2*a0)},k=function(sl){return 2*a0*sl/360};c=new n0(c),u=new n0(u);var R=Array.from(c.lab()),P=R[0],z=R[1],H=R[2],K=Array.from(u.lab()),V=K[0],te=K[1],ee=K[2],me=(P+V)/2,Se=nr(cn(z,2)+cn(H,2)),Ee=nr(cn(te,2)+cn(ee,2)),Ie=(Se+Ee)/2,kn=.5*(1-nr(cn(Ie,7)/(cn(Ie,7)+cn(25,7)))),xn=z*(1+kn),Zn=te*(1+kn),_e=nr(cn(xn,2)+cn(H,2)),G=nr(cn(Zn,2)+cn(ee,2)),oe=(_e+G)/2,be=T(t0(H,xn)),ve=T(t0(ee,Zn)),_n=be>=0?be:be+360,je=ve>=0?ve:ve+360,Te=r0(_n-je)>180?(_n+je+360)/2:(_n+je)/2,Fe=1-.17*Mi(k(Te-30))+.24*Mi(k(2*Te))+.32*Mi(k(3*Te+6))-.2*Mi(k(4*Te-63)),Me=je-_n;Me=r0(Me)<=180?Me:je<=_n?Me+360:Me-360,Me=2*nr(_e*G)*l0(k(Me)/2);var Oe=V-P,Nt=G-_e,Sr=1+.015*cn(me-50,2)/nr(20+cn(me-50,2)),Cr=1+.045*oe,ql=1+.015*oe*Fe,Zl=30*J5(-cn((Te-275)/25,2)),tr=2*nr(cn(oe,7)/(cn(oe,7)+cn(25,7))),il=-tr*l0(2*k(Zl)),no=nr(cn(Oe/(p*Sr),2)+cn(Nt/(x*Cr),2)+cn(Me/($*ql),2)+il*(Nt/(x*Cr))*(Me/($*ql)));return X5(0,K5(100,no))},o0=_,n6=function(c,u,p){p===void 0&&(p="lab"),c=new o0(c),u=new o0(u);var x=c.get(p),$=u.get(p),T=0;for(var k in x){var R=(x[k]||0)-($[k]||0);T+=R*R}return Math.sqrt(T)},t6=_,r6=function(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];try{return new(Function.prototype.bind.apply(t6,[null].concat(c))),!0}catch{return!1}},i0=O,s0=id,l6={cool:function(){return s0([i0.hsl(180,1,.9),i0.hsl(250,.7,.4)])},hot:function(){return s0(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Oi={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},ud=0,c0=Object.keys(Oi);ud<c0.length;ud+=1){var d0=c0[ud];Oi[d0.toLowerCase()]=Oi[d0]}var a6=Oi,wn=O;wn.average=b5,wn.bezier=$5,wn.blend=M5,wn.cubehelix=j5,wn.mix=wn.interpolate=Bp,wn.random=G5,wn.scale=id,wn.analyze=Jp.analyze,wn.contrast=Q5,wn.deltaE=e6,wn.distance=n6,wn.limits=Jp.limits,wn.valid=r6,wn.scales=l6,wn.colors=Sp,wn.brewer=a6;var o6=wn;return o6})})(py);var h_=py.exports;const f_=Gr(h_);function p_(e){const{h:n,s:t,l:r}=e;return f_.hsl(n,t/100,r/100)}const g_=e=>p_(e).luminance(),gy=e=>g_(e)<.5,Ca=({label:e,checked:n,toggle:t})=>f("label",{className:"checkbox no-focus",children:[a("input",{type:"checkbox",checked:n,onChange:t}),e]}),my=`// redefine any of the following hues to taste...
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
`,m_=()=>{const[e,n]=U.useState({names:!1,info:!1,show5s:!1}),t=i=>n(s=>({...s,[i]:!s[i]})),r=()=>t("names"),l=()=>t("info"),o=()=>t("show5s");return f("div",{className:"prose",children:[a("h1",{children:"Standard Colors"}),a("p",{children:"The following greyscale ranges are also defined."}),f("div",{className:"flex space end",children:[a("h2",{children:"Greyscale Ranges"}),f("div",{className:"text-right color-options",children:[a(Ca,{label:"Show Names",checked:e.names,toggle:r}),a(Ca,{label:"Show Info",checked:e.info,toggle:l}),a(Ca,{label:"Show 5s",checked:e.show5s,toggle:o})]})]}),a("div",{className:`ranges ${e.names?"names":"nameless"}`,children:rc.filter(i=>Vr.ranges[i].greyscale).map(i=>a(v_,{uri:i,range:Vr.ranges[i],options:e},i))}),a("h2",{children:"Brand Hue"}),f("p",{children:["The greyscale ranges are designed to based on your primary brand color. The ",a("code",{children:"grey"})," range is desaturated to around 5%.  The"," ",a("code",{children:"grey20"})," and ",a("code",{children:"grey40"})," ranges are saturated to around 20% and 40% respectively."]}),f("p",{children:["The brand color for this website is ",a("code",{children:"violet"})," which is why these greyscales have a violet tinge to them."]}),f("p",{children:["Each of the colours show above has a corresponding SCSS variable composed of the color name and stop delimited by a hyphen, e.g."," ",a("code",{children:"$red-0"})," through to ",a("code",{children:"$grey-100"}),".  They are also defined as CSS custom properties, e.g. ",a("code",{children:"--red-0"})," through to ",a("code",{children:"--grey-100"}),"."]}),f("p",{children:["Each range of colors is built from a base hue.  These are defined in SASS variables using the SASS ",a("code",{children:"!default"})," flag.  If you want to adjust the hues you can set any of these SASS variables before importing the main ",a("code",{children:"badger-ui.scss"})," component."]}),a(Je,{code:my,caption:"Customising Hues",language:"scss",expand:!0}),a("h2",{children:"TODO"}),f("ul",{children:[a("li",{children:"Editing or updating a palette using Badger Color"}),a("li",{children:"Expanding the palette into SCSS files"}),a("li",{children:"Customising the palette using SCSS variables"}),a("li",{children:"Customising the color hues"}),a("li",{children:"Defining your brand color"}),a("li",{children:"Adding/editing CSS scopes"}),a("li",{children:"Including or omitting colors"})]})]})},v_=({uri:e,range:n,options:t})=>f("div",{className:"range",children:[t.names&&a("h3",{children:n.name}),a("div",{className:"swatches",children:vi(0,100,t.show5s?5:10).map(r=>a(y_,{uri:e,range:n,stop:r,options:t},r))})]}),y_=({uri:e,range:n,stop:t,options:r})=>{const l=n.stops[t];return a("div",{className:`swatch ${gy(l)?"dark":"light"}`,style:{backgroundColor:`var(--${e}-${t})`},children:r.info&&a(vy,{uri:e,stop:t,color:l})})},vy=({uri:e,stop:n,color:t})=>f("div",{children:[f("div",{className:"stop",children:[e,"-",n]}),f("div",{className:"specs",children:[t.hex,a("br",{}),"h:",t.h,"°",a("br",{}),"s:",t.s,"%",a("br",{}),"l:",t.l,"%"]})]}),b_=Object.freeze(Object.defineProperty({__proto__:null,Info:vy,default:m_},Symbol.toStringTag,{value:"Module"})),w_=`// define the hues for the greyscale colors...
$grey-hue:   40;
$grey20-hue: 40;
$grey40-hue: 40;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,bi=({children:e,code:n,caption:t,language:r,expand:l,className:o=""})=>f("div",{className:`grid-2 gap-8 start stack-desktop ${o}`,children:[a("div",{children:e}),a(Je,{code:n,caption:t,language:r,expand:l,className:"mar-b-8"})]}),x_=()=>{const[e,n]=U.useState({names:!1,info:!1,show5s:!1}),t=i=>n(s=>({...s,[i]:!s[i]})),r=()=>t("names"),l=()=>t("info"),o=()=>t("show5s");return f("div",{className:"prose",children:[a("h1",{children:"Standard Colors"}),f("p",{children:["The following standard color ranges are defined.  This palette was created using ",a("a",{href:"https://abw.github.io/badger-color",children:"Badger Color"}),", a companion to this library.  You can use it to clone and update this palette or to create your own palettes from scratch."]}),f("p",{children:["Each color range is divided into color ",a("em",{children:"stops"}),".  They range in increments of 5 from ",a("code",{children:"0"})," which is very close to black, up to"," ",a("code",{children:"100"}),", which is very close to white."]}),a(l1,{title:"Color Ranges",colors:rc.filter(i=>!Vr.ranges[i].greyscale),options:e,toggleNames:r,toggleInfo:l,toggleShow5s:o}),f("p",{children:["Each range of colors is built from a base hue.  These are defined in SASS variables using the SASS ",a("code",{children:"!default"})," flag.  If you want to adjust the hues you can set any of these SASS variables before importing the main ",a("code",{children:"badger.scss"})," component."]}),a(Je,{code:my,caption:"Customising Hues",language:"scss",expand:!0}),a(l1,{title:"Greyscale Ranges",colors:rc.filter(i=>Vr.ranges[i].greyscale),options:e,toggleNames:r,toggleInfo:l,toggleShow5s:o}),f(bi,{code:w_,caption:"Customising Greyscale Hues",language:"scss",className:"mar-t-8",expand:!0,children:[f("p",{children:["Three greyscale color ranges are also defined.  They are designed to be based on your primary brand color. The ",a("code",{children:"grey"})," range is desaturated to around 5%.  The"," ",a("code",{children:"grey20"})," and ",a("code",{children:"grey40"})," ranges are saturated to around 20% and 40% respectively."]}),f("p",{children:["The brand color for this website is ",a("code",{children:"violet"})," which is why these greyscales have a violet tinge to them.  You can set the hues for these color ranges using the ",a("code",{children:"$grey-hue"}),","," ",a("code",{children:"$grey20-hue"})," and ",a("code",{children:"$grey40-hue"})," variables."]})]}),f("p",{className:"mar-t-4",children:[a(Le,{to:"/colors/brand",text:"Read on"})," to see how you can define your own brand color and automatically get greyscales to match."]})]})},l1=({title:e,colors:n,options:t,toggleNames:r,toggleInfo:l,toggleShow5s:o})=>f(It,{children:[f("div",{className:"flex space end",children:[a("h2",{children:e}),f("div",{className:"text-right color-options",children:[a(Ca,{label:"Show Names",checked:t.names,toggle:r}),a(Ca,{label:"Show Info",checked:t.info,toggle:l}),a(Ca,{label:"Show 5s",checked:t.show5s,toggle:o})]})]}),a("div",{className:`ranges ${t.names?"names":"nameless"}`,children:n.map(i=>a(S_,{uri:i,range:Vr.ranges[i],options:t},i))})]}),S_=({uri:e,range:n,options:t})=>f("div",{className:"range",children:[t.names&&a("h3",{children:n.name}),a("div",{className:"swatches",children:vi(0,100,t.show5s?5:10).map(r=>a(C_,{uri:e,range:n,stop:r,options:t},r))})]}),C_=({uri:e,range:n,stop:t,options:r})=>{const l=n.stops[t];return a("div",{className:`swatch ${gy(l)?"dark":"light"}`,style:{backgroundColor:`var(--${e}-${t})`},children:r.info&&a(yy,{uri:e,stop:t,color:l})})},yy=({uri:e,stop:n,color:t})=>f("div",{children:[f("div",{className:"stop",children:[e,"-",n]}),f("div",{className:"specs",children:[t.hex,a("br",{}),"h:",t.h,"°",a("br",{}),"s:",t.s,"%",a("br",{}),"l:",t.l,"%"]})]}),k_=Object.freeze(Object.defineProperty({__proto__:null,Info:yy,default:x_},Symbol.toStringTag,{value:"Module"})),xs=({scope:e,to:n,from:t="color",size:r="smallish"})=>f("table",{className:`${e} ${r} celled striped properties mar-b-8`,children:[a("thead",{children:f("tr",{children:[a("th",{children:"Variable"}),a("th",{children:"Mapped To"})]})}),a("tbody",{children:vi(0,100,5).map(l=>f("tr",{children:[f("td",{className:"font-mono",children:["--",t,"-",l]}),f("td",{className:"font-mono",children:["--",n,"-",l]})]},l))})]}),__=()=>f("div",{className:"prose",children:[a("h1",{children:"Color Variables"}),a("h2",{children:"SASS Color Variables"}),f("p",{children:["Each stop in a color range has a SASS variable defined, e.g.",a("code",{children:"$red-0"}),", ",a("code",{children:"$red-5"}),","," ",a("code",{children:"$red-10"})," and so on.  You can use these in your SASS components as necessary."]}),a("h2",{children:"CSS Custom Properties"}),f("p",{children:["Each of the colour stops also has a corresponding CSS custom property (a.k.a. CSS variable) defined, e.g.",a("code",{children:"--red-0"}),", ",a("code",{children:"--red-5"}),","," ",a("code",{children:"--red-10"})," and so on.  You can use these in your CSS files, e.g. as ",a("code",{children:"color: var(--red-10)"}),"."]}),f("p",{children:["Each of your brand colors will also have CSS custom properties defined. If you're using the default ",a("code",{children:"brand"})," name then they will be ",a("code",{children:"--brand-0"}),", ",a("code",{children:"--brand-5"}),","," ",a("code",{children:"--brand-10"})," and so on."]}),f("p",{children:["If you have defined a different set of names via"," ",a("code",{children:"$brand-colors"})," then they will have corresponding names.  For example, if you defined the names in your ",a("code",{children:"$brand-colors"})," to be ",a("code",{children:"primary"}),","," ",a("code",{children:"secondary"})," and ",a("code",{children:"tertiary"})," then the custom properties will be ",a("code",{children:"--primary-0"}),","," ",a("code",{children:"--secondary-0"}),", ",a("code",{children:"--tertiary-0"}),", and so on."]}),a("h2",{children:"Color Switching"}),f("p",{children:["CSS custom properties are defined for a generic color, appropriately named ",a("code",{children:"color"}),".  By default they are mapped to grey."]}),a(xs,{scope:"grey",to:"grey"}),f("p",{children:["CSS scopes will be generated for each color range which map the generic colors to the colors from that range.  For example, the"," ",a("code",{children:".red"})," class selector scope will map the colors as shown here."]}),f("h3",{className:"font-mono mar-b-2",children:[".red ","{"," ... ","}"]}),a(xs,{scope:"red",to:"red"}),f("p",{children:["Scopes will also be generated for your brand colors, either using the default ",a("code",{children:"brand"})," name or the custom names you have defined using ",a("code",{children:"$brand-colors"}),"."]}),f("p",{children:["For example, in the ",a("code",{children:".brand"})," scope the colors will be mapped as follows."]}),f("h3",{className:"font-mono mar-b-2",children:[".brand ","{"," ... ","}"]}),a(xs,{scope:"brand",to:"brand"}),f("p",{children:["The benefit of this approach is that it allows you to define UI components using the generic colors ",a("code",{children:"--color-N"}),".  By default they will appear in grey, but adding a CSS class matching the color name will switch in the appropriate color range."]}),a("h2",{children:"CSS Scope Aliases"}),f("p",{children:["A number of additional CSS scopes are defined for some of the colors. For example, the CSS scope created for the ",a("code",{children:"red"})," color range is actually ",a("code",{children:".red, .error, .invalid"}),".  This allows you to add the ",a("code",{children:"red"}),", ",a("code",{children:"error"})," or ",a("code",{children:"invalid"})," CSS class to an element to have the red color range selected."]}),f("p",{children:["This is used by ",a(Le,{to:"/forms",text:"forms"})," and "," ",a(Le,{to:"/components/alerts",text:"alerts"}),", for example, to provide semantic names for the colors."]}),a("h2",{children:"TODO"}),f("ul",{children:[a("li",{children:"Editing or updating a palette using Badger Color"}),a("li",{children:"Expanding the palette into SCSS files"}),a("li",{children:"Adding/editing CSS scopes"})]})]}),$_=Object.freeze(Object.defineProperty({__proto__:null,default:__},Symbol.toStringTag,{value:"Module"})),D=({Component:e,code:n,html:t,children:r,className:l="",caption:o,fixed:i,expand:s,language:d})=>f("div",{className:`example grid-2 gap-8 stack-desktop ${l}`,children:[a("div",{className:"source",children:a(Je,{caption:o,code:n||t,expand:s,fixed:i,language:t?"html":d})}),!!r&&a("div",{className:"interim",children:r}),e?f("div",{className:"output",children:[a("h4",{className:"caption",children:"Output"}),a(e,{})]}):null,t?f("div",{className:"output",children:[a("h4",{className:"caption",children:"Output"}),a("div",{dangerouslySetInnerHTML:{__html:t}})]}):null]}),E_=`<div class="alert">
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
`,T_=`<div class="alert border">
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
</div>`,Mf=({color:e,setColor:n})=>f("select",{name:"color",required:!0,value:e,onChange:t=>n(t.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Color"}),a("option",{value:"",children:"Default"}),rc.map(t=>a("option",{value:t,children:t},t))]}),R_=["smallest","smaller","small","medium","large","larger","largest"],Of=({size:e,setSize:n})=>f("select",{name:"size",required:!0,value:e,onChange:t=>n(t.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),a("option",{value:"",children:"Default"}),R_.map(t=>a("option",{value:t,children:t},t))]}),P_=[0,1,2,3,4,5,6,8,10],Af=({radius:e,setRadius:n})=>f("select",{name:"radius",required:!0,value:e,onChange:t=>n(t.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),a("option",{value:"",children:"Default"}),P_.map(t=>f("option",{value:t,children:["radius: ",t]},t))]}),wi=e=>e.filter(n=>En(n)&&n).join(" ").replace(/^\s+/,"").replaceAll(/\s+/g," "),F_=(e,n={},...t)=>wi(Object.entries(e).reduce((r,[l,o])=>(o&&r.push(n[l]||l),r),[...t])),M_=(e,n="",...t)=>wi([...ey(n).filter(r=>e[r]),...t]),O_=[1,2,3,4,5],by=({shadow:e,setShadow:n})=>f("select",{name:"shadow",required:!0,value:e,onChange:t=>n(t.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),a("option",{value:"",children:"Default"}),O_.map(t=>f("option",{value:t,children:["shadow: ",t]},t))]}),wl=({checked:e,toggle:n,label:t})=>a("div",{className:"field",children:f("label",{className:"checkbox border no-focus wide",children:[a("input",{type:"checkbox",checked:e,onChange:n}),t]})}),A_=[0,1,2,3,4,5,6,8,10],wy=({borderWidth:e,setBorderWidth:n})=>f("select",{name:"borderWidth",required:!0,value:e,onChange:t=>n(t.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),a("option",{value:"",children:"Default"}),A_.map(t=>f("option",{value:t,children:["width: ",t]},t))]}),D_=()=>{const[e,n]=U.useState({body:!0});return f("div",{className:"example grid-2 gap-8 stack-desktop",children:[a(z_,{options:e,setOption:l=>o=>n(i=>({...i,[l]:o})),toggleOption:l=>()=>n(o=>({...o,[l]:!o[l]}))}),f("div",{children:[a("h3",{className:"mar-b-2",children:"Output"}),a("div",{className:"output",children:a(B_,{options:e})})]})]})},z_=({options:e,toggleOption:n,setOption:t})=>{const r=n("headline"),l=n("heading"),o=n("border"),i=n("stripe"),s=t("type"),d=t("size"),h=t("color"),m=t("radius"),b=t("shadow"),S=t("borderWidth"),N=`<div class="${xy(e)}">
  ...
</div>`;return f("div",{children:[a("h3",{className:"mar-b-2",children:"Options"}),f("div",{className:"grid-5 gap-4 stack-tablet start",children:[a(wl,{checked:e.headline,toggle:r,label:"Headline"}),a(wl,{checked:e.head,toggle:l,label:"Heading"}),a(wl,{checked:e.stripe,toggle:i,label:"Stripe"}),a(wl,{checked:e.border,toggle:o,label:"Border"}),a(wy,{borderWidth:e.borderWidth,setBorderWidth:S})]}),f("div",{className:"grid-5 gap-4 stack-tablet mar-t-4",children:[a(j_,{type:e.type,setType:s}),a(Mf,{color:e.color,setColor:h}),a(Of,{size:e.size,setSize:d}),a(Af,{radius:e.radius,setRadius:m}),a(by,{radius:e.shadow,setShadow:b})]}),a("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),a(Je,{code:N,language:"html",expand:!0})]})},xy=e=>wi([e.color,e.type,e.size,e.border&&"border",e.stripe&&"stripe",e.radius&&`bdr-${e.radius}`,e.shadow&&`shadow-${e.shadow}`,e.borderWidth&&`bdw-${e.borderWidth}`,"alert"]),B_=({options:e})=>{const n=xy(e);return f("div",{className:n,children:[e.headline&&a("div",{className:"headline",children:"This is a headline"}),e.heading&&a("h3",{children:"Hello World!"}),f("p",{children:["This is an alert.  This is some ",a("b",{children:"bold text"}),". This is a ",a("a",{href:"/",children:"link"}),"."]}),a("button",{children:"Default Button"}),a("button",{className:"red mar-l-2",children:"Red Button"})]})},j_=({type:e,setType:n})=>f("select",{name:"type",required:!0,value:e,onChange:t=>n(t.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),a("option",{value:"",children:"Default"}),["info","warning","success","error"].map(t=>a("option",{value:t,children:t},t))]}),U_=()=>f("div",{className:"prose",children:[a("h1",{children:"Alerts"}),f("p",{children:["The ",a("code",{children:"alert"})," class can be used to display alerts. Add any of the ",a("code",{children:"info"}),", ",a("code",{children:"success"}),","," ",a("code",{children:"warning"})," or ",a("code",{children:"error"})," classes to set the color."]}),a("h2",{children:"Demo"}),a("p",{children:"Select the options to determine how the alert is displayed. Note that some options are mutually exclusive (e.g. stripe and border)."}),a(D_,{}),a("h2",{children:"Default Alerts"}),a(D,{html:E_,language:"html",caption:"Alerts"}),a("h2",{children:"Alerts With Borders"}),f("p",{children:["Add the ",a("code",{children:"border"})," class to add a border."]}),a(D,{html:T_,language:"html",caption:"Added Borders"}),a("h2",{children:"Alert Headings"}),a("p",{children:"Headings are displayed in a slightly darker color than the body text."}),a(D,{html:N_,language:"html",caption:"Alert Headings"}),a("h2",{children:"Alert Headlines"}),f("p",{children:["Add an element with the ",a("code",{children:"headline"})," class to really make it stand out.  This works well with and without borders.  Throw in a"," ",a(Le,{to:"/utilities/shadows",text:"shadow"})," if you want to make it really pop."]}),a(D,{html:L_,language:"html",caption:"Alert Headlines"}),a("h2",{children:"Stripe Alerts"}),f("p",{children:["For a more subdued look, try adding the ",a("code",{children:"stripe"})," class."]}),a(D,{html:I_,language:"html",caption:"Stripe Alert"})]}),H_=Object.freeze(Object.defineProperty({__proto__:null,default:U_},Symbol.toStringTag,{value:"Module"})),W_=`<div class="grid-1 gap-4">
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
`,Z_=()=>{const[e,n]=U.useState({body:!0});return f("div",{className:"example grid-2 gap-8 stack-desktop",children:[a(Q_,{options:e,setOption:l=>o=>n(i=>({...i,[l]:o})),toggleOption:l=>()=>n(o=>({...o,[l]:!o[l]}))}),f("div",{children:[a("h3",{className:"mar-b-2",children:"Output"}),a("div",{className:"output",children:a(K_,{options:e})})]})]})},Q_=({options:e,toggleOption:n,setOption:t})=>{const r=n("border"),l=n("shaded"),o=n("lined"),i=t("size"),s=t("color"),d=t("radius"),h=t("shadow"),m=t("borderWidth"),S=`<div class="${Sy(e)}">
  ...
</div>`;return f("div",{children:[a("h3",{className:"mar-b-2",children:"Options"}),f("div",{className:"grid-3 gap-4 stack-tablet start",children:[a(wl,{checked:e.lined,toggle:o,label:"Lined"}),a(wl,{checked:e.shaded,toggle:l,label:"Shaded"})]}),f("div",{className:"grid-3 gap-4 stack-tablet start",children:[a(wl,{checked:e.border,toggle:r,label:"Border"}),a(wy,{borderWidth:e.borderWidth,setBorderWidth:m}),a(Af,{radius:e.radius,setRadius:d})]}),f("div",{className:"grid-3 gap-4 stack-tablet",children:[a(Mf,{color:e.color,setColor:s}),a(Of,{size:e.size,setSize:i}),a(by,{radius:e.shadow,setShadow:h})]}),a("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),a(Je,{code:S,language:"html",expand:!0})]})},Sy=e=>wi([e.color,e.size,e.lined&&"lined",e.shaded&&"shaded",e.border&&"border",e.radius&&`bdr-${e.radius}`,e.shadow&&`shadow-${e.shadow}`,e.borderWidth&&`bdw-${e.borderWidth}`]),K_=({options:e})=>{const n=Sy(e);return f("details",{className:n,children:[a("summary",{children:"This is a demo details widget - click to reveal"}),a("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),a("p",{children:"I really think you're just making a much too big thing out of it."}),a("p",{children:"Making a big thing out of it would've been a good idea."})]})},X_=()=>f("div",{className:"prose",children:[a("h1",{children:"Details"}),f("p",{children:["The ",a("code",{children:"details"})," HTML element can be used to create a disclosure widget."]}),a("h2",{children:"Demo"}),a("p",{children:"Select the options to determine how the details widget is displayed."}),a(Z_,{}),a("h2",{children:"Default Style"}),f("p",{children:["The default style will be applied without the need for any special CSS classes.  You can add any of the utility classes (e.g. the size classes like ",a("code",{children:"small"}),", ",a("code",{children:"large"}),", etc.) to change the basic appearance of either the whole widget, the summary, or any of the content elements."]}),a(D,{html:W_,language:"html",caption:"Default Style"}),a("h2",{children:"Border Style"}),f("p",{children:["Add the ",a("code",{children:"border"})," class to add a border.  The usual"," ",a("code",{children:"bdr-N"})," classes can be added to set the border radius"," ","and ",a("code",{children:"bdw-N"})," to set the border width."]}),f("p",{children:["The ",a("code",{children:"bdc-N"})," classes can be used to set the border color stop, and ",a("code",{children:"bdd-N"})," classes for the border color stop in dark mode."]}),a(D,{html:V_,language:"html",caption:"Details With Borders"}),a("h2",{children:"Lined Style"}),f("p",{children:["The ",a("code",{children:"lined"})," class can be added to put an additional border line between the summary header and body content."]}),a(D,{html:G_,language:"html",caption:"Details With Borders"}),a("h2",{children:"Shaded Style"}),f("p",{children:["Add the ",a("code",{children:"shaded"})," class to shade the background colors. You can add any of the color classes to change the color palette."]}),a(D,{html:Y_,language:"html",caption:"Shaded Details"}),a("h2",{children:"Custom Styling"}),a("p",{children:"There are a number of CSS variables that you can set to change the styling."}),a(D,{html:q_,language:"html",caption:"Custom Styling"})]}),J_=Object.freeze(Object.defineProperty({__proto__:null,default:X_},Symbol.toStringTag,{value:"Module"})),e$=`<svg
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
  aria-hidden="true" focusable="false" role="img"
  class="icon"
>
  <path
    d="M64,268L184,388L448,124"
    style="fill:none;stroke:currentColor;stroke-width:65"
  />
</svg>
Check!`,n$=`<div class="small">
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
</div>`,t$=`<div class="red fgc-50 large">
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
`,a$={bars:"M0 96C0 78 14 64 32 64H416c18 0 32 14 32 32s-14 32-32 32H32C14 128 0 114 0 96zM0 256c0-18 14-32 32-32H416c18 0 32 14 32 32s-14 32-32 32H32c-18 0-32-14-32-32zM448 416c0 18-14 32-32 32H32c-18 0-32-14-32-32s14-32 32-32H416c18 0 32 14 32 32z",check:"M486,91C499,104 499,127 486,140L212,422C198,435 177,435 163,422L26,281C13,267 13,245 26,231C39,217 61,217 75,231L187,347L438,91C451,77 473,77 486,91L486,91Z",cross:"M456,109C470,94 470,71 456,56C441,42 418,42 403,56L256,204L109,56C94,42 71,42 56,56C42,71 42,94 56,109L204,256L56,403C42,418 42,441 56,456C71,470 94,470 109,456L256,308L403,456C418,470 441,470 456,456C470,441 470,418 456,403L308,256L456,109Z",github:"M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z",info:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13 0-24-11-24-24s11-24 24-24h48c13 0 24 11 24 24v88h8c13 0 24 11 24 24s-11 24-24 24H216c-13 0-24-11-24-24s11-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",lock:"M159,133L159,226L301,226L301,133C301,94 269,62 230,62C191,62 159,94 159,133ZM101,226L101,133C101,62 159,4 230,4C301,4 359,62 359,133L359,226L373,226C404,226 430,252 430,283L430,455C430,486 404,512 373,512L87,512C56,512 30,486 30,455L30,283C30,252 56,226 87,226L101,226Z",pen:"M356,34L311,79L433,201L478,156C502,132 502,94 478,71L441,34C418,10 380,10 356,34L356,34ZM290,100L71,319C61,329 54,341 50,355L16,468C14,476 16,484 22,490C28,496 36,498 44,496L157,462C171,458 183,451 192,442L412,222L290,100Z",plus:"M292,56C292,36 276,20 256,20C236,20 220,36 220,56L220,220L56,220C36,220 20,236 20,256C20,276 36,292 56,292L220,292L220,456C220,476 236,492 256,492C276,492 292,476 292,456L292,292L456,292C476,292 492,276 492,256C492,236 476,220 456,220L292,220L292,56Z",trash:"M173,33L166,46L76,46C59,46 46,59 46,76C46,93 59,106 76,106L436,106C453,106 466,93 466,76C466,59 453,46 436,46L346,46L339,33C334,22 324,16 312,16L200,16C188,16 178,22 173,33ZM436,136L76,136L96,454C97,478 117,496 141,496L371,496C395,496 415,478 416,454L436,136Z",undo:"M168,224L40,224C27,224 16,213 16,200L16,72C16,62 22,54 31,50C40,46 50,48 57,55L99,97C186,10 327,10 414,98C502,185 502,327 414,414C327,502 185,502 98,414C85,402 85,382 98,369C110,357 130,357 143,369C205,432 307,432 369,369C432,307 432,205 369,143C307,81 207,80 144,142L185,183C192,190 194,200 190,209C187,218 178,224 168,224Z",unlock:"M313,131C313,92 345,60 384,60C423,60 455,92 455,131L455,174C455,190 468,203 484,203C499,203 512,190 512,174L512,131C512,61 455,3 384,3C313,3 256,61 256,131L256,227L57,227C26,227 0,253 0,284L0,455C0,486 26,512 57,512L341,512C373,512 398,486 398,455L398,284C398,253 373,227 341,227L313,227L313,131Z",checked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083ZM88.43,298.82C75.421,285.811 75.421,264.689 88.43,251.68C101.439,238.671 122.561,238.671 135.57,251.68L202,318.11L376.43,143.68C389.439,130.671 410.561,130.671 423.57,143.68C436.579,156.689 436.579,177.811 423.57,190.82L225.57,388.82C212.553,401.838 191.447,401.838 178.43,388.82L88.43,298.82Z",unchecked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083Z"},o$=e=>{const n=a$[e]||LC(`Invalid icon name: ${e}`);return J2(n)?{path:n,width:512,height:512}:n},a1=({path:e,onClick:n,width:t=512,height:r=512,style:l,className:o="",fill:i="currentColor"})=>a("svg",{"aria-hidden":"true",focusable:"false",className:`${o} icon`,style:l,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${t} ${r}`,onClick:n,children:a("path",{d:e,fill:i})}),Df=({name:e,...n})=>e?a(a1,{...n,...o$(e)}):a(a1,{...n}),li=({title:e="Note",children:n})=>f("div",{className:"info alert flex start border small",children:[a(Df,{name:"info",className:"side-icon"}),f("div",{children:[a("h3",{children:e}),n]})]}),i$=()=>f("div",{className:"prose",children:[a("h1",{children:"Icons"}),f("p",{children:["Some basic styles are included for SVG icons. Add the ",a("code",{children:"icon"})," ","class to an inline SVG image to use them."]}),a(D,{html:e$,language:"html",caption:"Icon"}),a("p",{children:"Icons are sized in em units meaning they scale with text in different sizes."}),a(D,{html:n$,language:"html",caption:"Icon Sizes"}),f("p",{children:["SVG icons can use ",a("code",{children:"currentColor"})," for either the"," ",a("code",{children:"fill"})," or ",a("code",{children:"stroke"})," properties to inherit the current text color."]}),a(D,{html:t$,language:"html",caption:"Icon Colors"}),f("div",{className:"grid-2 gap-8 stack-desktop",children:[f("div",{children:[f("p",{children:["SVG elements can use the ",a("code",{children:"fill-fg"})," and ",a("code",{children:"fill-bg"})," ","classes to set the fill color to the current foreground or background colors respectively.  Similarly the ",a("code",{children:"stroke-fg"})," and"," ",a("code",{children:"stroke-bg"})," will set the stroke color to the foreground or"," ","background color."]}),f("p",{children:["These CSS rules are scoped to all ",a("code",{children:"svg"})," elements rather",a("code",{children:"svg.icon"})," specifically.  So you can use them in any SVG images, not just icons."]})]}),a("div",{children:f(li,{children:["CSS styles can only be applied to inline SVG elements.  They don't work for SVG images loaded using the ",a("code",{children:"img"})," ","tag or applied using a ",a("code",{children:"background-image"})," style."]})})]}),a(D,{html:r$,language:"html",caption:"Icon Style"}),f("p",{children:["You can define your own styles to target different elements in an SVG icon.  This example illustrated the use of generic"," ",a("code",{children:"--color-N"})," variables to set the fill and stroke styles on elements in an icon.  The only thing that's determining the color range is the ",a("code",{children:"blue"})," class on the ",a("code",{children:"svg"})," ","element.  Change that to the name of any other color range and the styles will work equally well."]}),f("p",{children:["Also note the use of the"," ",a("code",{children:"--unfilled"})," custom property which sets the background color for the unchecked checkbox.  This allows us to set different color stops for use in light and dark themes."]}),a(D,{html:l$,language:"html",caption:"Icon Style"})]}),s$=Object.freeze(Object.defineProperty({__proto__:null,default:i$},Symbol.toStringTag,{value:"Module"})),c$=()=>{const[e,n]=U.useState({head1:!0,body:!0,foot1:!0});return f("div",{className:"example grid-2 gap-8 stack-desktop",children:[a(d$,{options:e,setOption:l=>o=>n(i=>({...i,[l]:o})),toggleOption:l=>()=>n(o=>({...o,[l]:!o[l]}))}),f("div",{children:[a("h3",{className:"mar-b-2",children:"Output"}),a("div",{className:"output",children:a(u$,{options:e})})]})]})},d$=({options:e,toggleOption:n,setOption:t})=>{const r=n("head1"),l=n("head2"),o=n("body"),i=n("foot1"),s=n("foot2"),d=n("wide"),h=n("celled"),m=n("shaded"),b=n("lined"),S=n("striped"),L=t("size"),N=t("color"),C=t("radius"),w=`<table class="${M_(e,"wide celled shaded lined striped",e.color,e.size,e.radius&&`bdr-${e.radius}`)}">
  ...
</table>`;return f("div",{children:[a("h3",{className:"mar-b-2",children:"Options"}),f("div",{className:"grid-5 gap-4 stack-tablet",children:[a(jt,{checked:e.wide,toggle:d,label:"Wide"}),a(jt,{checked:e.celled,toggle:h,label:"Celled"}),a(jt,{checked:e.shaded,toggle:m,label:"Shaded"}),a(jt,{checked:e.lined,toggle:b,label:"Lined"}),a(jt,{checked:e.striped,toggle:S,label:"Striped"})]}),f("div",{className:"grid-5 gap-4 stack-tablet mar-t-4",children:[a(jt,{checked:e.head1,toggle:r,label:"Header"}),a(jt,{checked:e.body,toggle:o,label:"Body"}),a(jt,{checked:e.foot1,toggle:i,label:"Footer"}),a(jt,{checked:e.head2,toggle:l,label:"Pre-header"}),a(jt,{checked:e.foot2,toggle:s,label:"Post-footer"})]}),f("div",{className:"grid-5 gap-4 stack-tablet mar-t-4",children:[a(Mf,{color:e.color,setColor:N}),a(Of,{size:e.size,setSize:L}),a(Af,{radius:e.radius,setRadius:C})]}),a("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),a(Je,{code:w,language:"html",expand:!0})]})},jt=({checked:e,toggle:n,label:t})=>a("div",{className:"field",children:f("label",{className:"checkbox border no-focus wide",children:[a("input",{type:"checkbox",checked:e,onChange:n}),t]})}),u$=({options:e})=>{const n=F_(e,{},e.color,e.size,e.radius&&`bdr-${e.radius}`);return f("table",{className:n,children:[(e.head1||e.head2)&&f("thead",{children:[e.head2&&a("tr",{children:a("th",{colSpan:"3",className:"text-center",children:"Spinal Tap"})}),e.head1&&f("tr",{children:[a("th",{children:"Name"}),a("th",{children:"Instrument"}),a("th",{children:"Danger Level"})]})]}),e.body&&f("tbody",{children:[f("tr",{children:[a("td",{children:"Nigel"}),a("td",{children:"Tufnel"}),a("td",{children:"Guitar"})]}),f("tr",{children:[a("td",{children:"David"}),a("td",{children:"St.Hubbins"}),a("td",{children:"Guitar"})]}),f("tr",{children:[a("td",{children:"Derek"}),a("td",{children:"Smalls"}),a("td",{children:"Bass"})]}),f("tr",{children:[a("td",{children:"Viv"}),a("td",{children:"Savage"}),a("td",{children:"Keyboards"})]}),f("tr",{children:[a("td",{children:"Mick"}),a("td",{children:"Shrimpton"}),a("td",{children:"Drums"})]})]}),(e.foot1||e.foot2)&&f("tfoot",{children:[e.foot1&&f("tr",{children:[a("th",{colSpan:"2",className:"text-right",children:"Total"}),a("th",{children:"5"})]}),e.foot2&&a("tr",{children:a("th",{colSpan:"3",className:"text-center",children:"Tap into America!"})})]})]})},h$=`<table>
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
</div>`,w$=()=>f("div",{className:"prose",children:[a("h1",{children:"Tables"}),a("p",{children:"Badger CSS contains some basic table styling by default and a number of additional classes you can add to snazz things up."}),a("h2",{children:"Demo"}),a("p",{children:"Select the options to determine how the table is displayed."}),a(c$,{}),a("h2",{children:"Default Table"}),a(D,{html:h$,language:"html",caption:"Table"}),a("h2",{children:"Celled Table"}),a(D,{html:f$,language:"html",caption:"Celled Table"}),a("h2",{children:"Shaded Table"}),a(D,{html:p$,language:"html",caption:"Shaded Table"}),a("h2",{children:"Lined Table"}),a(D,{html:g$,language:"html",caption:"Lined Table"}),a("h2",{children:"Striped Table"}),a(D,{html:m$,language:"html",caption:"Striped Table"}),a("h2",{children:"Colored Table"}),a(D,{html:v$,language:"html",caption:"Colored Table"}),a("h2",{children:"Colored Rows"}),a(D,{html:y$,language:"html",caption:"Colored Rows"}),a("h2",{children:"Customised Table"}),a(D,{html:b$,language:"html",caption:"Rounded Table"})]}),x$=Object.freeze(Object.defineProperty({__proto__:null,default:w$},Symbol.toStringTag,{value:"Module"})),dl=(e="rem",n=.25)=>[0,1,2,3,4,6,8,10,12,16,20,24,28,32].reduce((t,r)=>({...t,[r]:{vars:{unit:`${r} unit${r==1?"":"s"} (${r*n}${e})`}}}),{}),o1=e=>({t:{vars:{sides:"the top"},more:dl(e)},r:{vars:{sides:"the right"},more:dl(e)},b:{vars:{sides:"the right"},more:dl(e)},l:{vars:{sides:"the left"},more:dl(e)},v:{vars:{sides:"the top and bottom (v = vertical)"},more:dl(e)},h:{vars:{sides:"the left and right (h = horizontal)"},more:dl(e)},...dl(e)}),i1=e=>[2,4,6,8,10,12,14,16,18,20,30,40,50,60,70,90,100].reduce((n,t)=>({...n,[`${t}rem`]:{description:()=>e(t)}}),{}),s1=e=>[2,4,6,8,10,12,14,16,18,20,30,40,50,60,70,90,100].reduce((n,t)=>({...n,[`${t*16}px`]:{description:()=>e(t*16)}}),{}),S$={mar:{vars:{unit:"1 unit (0.25rem)",sides:"all sides"},description:e=>`Add ${e.unit} margin to ${e.sides}`,more:o1("rem")},pad:{vars:{unit:"1 unit (0.25em)",sides:"all sides"},description:e=>`Add ${e.unit} margin to ${e.sides}`,more:o1("em")},width:{more:{...i1(e=>`Set width to ${e}rem (${e*16}px)`),...s1(e=>`Set width to ${e}px`)}},max:{more:{width:{more:{...i1(e=>`Set max-width to ${e}rem (${e*16}px)`),...s1(e=>`Set max-width to ${e}px`)}}}},text:{more:{left:{description:()=>"Align text to the left"},right:{description:()=>"Align text to the right"},center:{description:()=>"Align text to the center"}}},block:{more:{left:{description:()=>"Align block to the left"},right:{description:()=>"Align block to the right"},center:{description:()=>"Align block to the center"}}},display:{more:{inline:{description:()=>"Display element inline"},block:{description:()=>"Display element as a block"},"inline-block":{description:()=>"Display element as an inline block"}}},font:{more:{sans:{description:()=>"Use a sans-serif font"},serif:{description:()=>"Use a serif font"},system:{description:()=>"Use the system font"},mono:{description:()=>"Use a monospaced font"}}}},C$=e=>{const n=e.split("-");let t=[],r=[],l=[],o={},i=S$,s;for(;n.length;){const d=n.shift(),h=i[d];if(h)console.log(`matched ${d}`),s=h.description||s,h.vars&&(o={...o,...h.vars}),t.push(d),i=h.more||{},l=Object.keys(i);else{r.push(d);break}}return{good:t,rest:r,vars:o,next:l,description:s?s(o):null}},k$=e=>ey(e).filter(n=>!n.match(/^\s*$/)).map(C$),_$=()=>{const[e,n]=U.useState("");return f("div",{children:[a("h1",{children:"Class Decoder"}),a("p",{children:"Enter one or more Badger-CSS classes for an explanation."}),f("form",{className:"max-width-30rem",children:[f("div",{className:"field",children:[a("label",{children:"CSS Classes"}),a("input",{type:"text",className:"wide",value:e,onChange:t=>n(t.target.value)})]}),a("button",{type:"button",className:"reset grey button outline",onClick:()=>n(""),children:"Reset"})]}),a("div",{children:!!e.length&&a($$,{input:e})})]})},$$=({input:e})=>{const n=k$(e);return console.log("results: ",n),a("table",{className:"celled border bdr-2 mar-t-4",children:a("tbody",{children:n.map((t,r)=>f("tr",{children:[f("td",{className:"font-mono bgc-95 bgd-10 split-4",children:[a("span",{className:"green fgc-50",children:t.good.join("-")}),!!t.rest.length&&f("span",{className:"red fgc-50",children:[!!t.good.length&&"-",t.rest.join("-")]})]}),a("td",{className:"bgc-100 bgd-5",children:t.description}),a("td",{className:"bgc-100 bgd-5 font-mono small",children:!!t.next.length&&t.next.map(l=>`-${l} `)})]},r))})})},E$=Object.freeze(Object.defineProperty({__proto__:null,default:_$},Symbol.toStringTag,{value:"Module"})),Ml=({color:e,selected:n,select:t,iconColor:r="white",className:l="",alt:o=a(It,{children:" "})})=>a("button",{className:`${l} ${e} icon ${n?"focus":""}`,onClick:t,children:n?a(Df,{name:"check",className:r}):o}),T$=({range:e,setRange:n})=>f("div",{children:[f("div",{className:"flex space mar-b-0",children:[a("h3",{children:"Color Range"}),a("h4",{children:En(e)&&a("code",{children:e||""})})]}),f("div",{className:"grid-fit gap-2",style:{"--min-width":"2em"},children:[a(c1,{colors:d_,range:e,setRange:n}),a("div",{children:" "}),a(Ml,{color:"brand",selected:e==="brand",select:()=>n("brand")}),a(c1,{colors:u_,range:e,setRange:n})]})]}),c1=({range:e,setRange:n,colors:t})=>t.map(r=>a(Ml,{color:r,select:()=>n(r),selected:e==r},r)),ts=({stop:e,setStop:n,className:t,title:r,prefix:l})=>f("div",{children:[f("div",{className:"flex space mar-b-0",children:[a("h3",{children:r}),a("h4",{children:En(e)&&f("code",{children:[l,"-",e]})})]}),a("div",{className:`${t} grid-fit gap-2`,style:{"--min-width":"2em"},children:vi(0,100,5).map(o=>a(Ml,{color:`bgc-${o} bdc-${o} fgc-${o>50?"0":"100"} bgd-${o} bdd-${o} fgd-${o>50?"0":"100"}`,iconColor:o>50?"black":"white",selected:e===o,select:()=>n(o)},o))})]}),N$=[0,1,2,3,4,6,8,10,12,16,20,24,28,32],d1=({spacing:e,setSpacing:n,className:t,title:r,prefix:l,range:o})=>f("div",{children:[f("div",{className:"flex space mar-b-0",children:[a("h3",{children:r}),a("h4",{children:En(e)&&f("code",{children:[l,"-",e]})})]}),a("div",{className:`${t} grid-fit gap-2`,style:{"--min-width":"2em"},children:N$.map(i=>a(Ml,{color:o,className:"wide",alt:a("span",{className:"font-mono",children:i}),selected:e===i,select:()=>n(i)},i))})]}),L$=["smallest","smaller","small","medium","large","larger","largest"],I$=({size:e,setSize:n,title:t="Size",range:r})=>f("div",{children:[f("div",{className:"flex space mar-b-0",children:[a("h3",{children:t}),a("h4",{children:En(e)&&a("code",{children:e})})]}),a("div",{className:"grid-fit gap-2",style:{"--min-width":"2em"},children:L$.map(l=>a(Ml,{color:r,className:"wide",alt:a("span",{className:"font-mono",children:l}),selected:e===l,select:()=>n(l)},l))})]}),R$=[0,1,2,3,4,5,6,8,10],u1=({border:e,setBorder:n,className:t,title:r,prefix:l,range:o})=>f("div",{children:[f("div",{className:"flex space mar-b-0",children:[a("h3",{children:r}),a("h4",{children:En(e)&&f("code",{children:[l,"-",e]})})]}),a("div",{className:`${t} grid-fit gap-2`,style:{"--min-width":"2em"},children:R$.map(i=>a(Ml,{color:o,className:"wide",alt:a("span",{className:"font-mono",children:i}),selected:e===i,select:()=>n(i)},i))})]}),P$=({checked:e,toggle:n,label:t})=>a("div",{className:"field",children:f("label",{className:"checkbox border no-focus wide",children:[a("input",{type:"checkbox",checked:e,onChange:n}),t]})}),F$=({shadow:e,setShadow:n,className:t,title:r="Shadow",prefix:l="shadow",range:o})=>f("div",{children:[f("div",{className:"flex space mar-b-0",children:[a("h3",{children:r}),a("h4",{children:En(e)&&f("code",{children:[l,"-",e]})})]}),a("div",{className:`${t} grid-fit gap-2`,style:{"--min-width":"2em"},children:vi(0,5).map(i=>a(Ml,{color:o,className:"wide",alt:a("span",{className:"font-mono",children:i}),selected:e===i,select:()=>n(i)},i))})]}),M$=({options:e,setOption:n,toggleOption:t})=>f("div",{className:"surface-5 pad-4",children:[f("div",{className:"flex space baseline stack-desktop mar-b-2",children:[a("h2",{className:"mar-v-none",children:"Controls"}),a("h3",{className:"text-right mar-v-none",children:a("code",{children:'class="..."'})})]}),f("div",{className:"grid gap-2 small",children:[a(T$,{range:e.range,setRange:n("range")}),a(ts,{title:"Background Color Stop",prefix:"bgc",className:e.range,stop:e.bgc,setStop:n("bgc")}),a(ts,{title:"Foreground Color Stop",prefix:"fgc",className:e.range,stop:e.fgc,setStop:n("fgc")}),a(ts,{title:"Heading Color Stop",prefix:"hdc",className:e.range,stop:e.hdc,setStop:n("hdc")}),a(ts,{title:"Border Color Stop",prefix:"bdc",className:e.range,stop:e.bdc,setStop:n("bdc")}),a(u1,{title:"Border Width",prefix:"bdw",border:e.bdw,setBorder:n("bdw"),range:e.range}),a(u1,{title:"Border Radius",prefix:"bdr",border:e.bdr,setBorder:n("bdr"),range:e.range}),a(I$,{title:"Size",size:e.size,setSize:n("size"),range:e.range}),a(d1,{title:"Margin",prefix:"mar",className:e.mar,spacing:e.mar,setSpacing:n("mar"),range:e.range}),a(d1,{title:"Padding",prefix:"pad",className:e.pad,spacing:e.pad,setSpacing:n("pad"),range:e.range}),a(F$,{title:"Shadow",prefix:"shadow",shadow:e.shadow,setShadow:n("shadow"),range:e.range}),f("div",{children:[a("h3",{className:"mar-b-2",children:"Options"}),a("div",{className:"grid-fill",style:{"--min-width":"10rem"},children:a(P$,{label:"Show Border",checked:e.border,toggle:t("border")})})]})]})]}),O$=({options:e})=>{const n=A$(e);return f("div",{className:"surface-5 pad-4",children:[f("div",{className:"flex space baseline stack-desktop mar-b-2",children:[a("h2",{className:"mar-v-none",children:"Output"}),a("div",{className:"text-right",children:f("code",{children:['class="',n,'"']})})]}),a("div",{className:"border surface-4",style:{borderStyle:"dotted"},children:f("div",{className:n,children:[a("h3",{className:"mar-b-2",children:"It's One Louder"}),"You see, most... most blokes, you know, will be playing at ten. You're on ten here... all the way up... all the way up... all the way up. You're on ten on your guitar...where can you go from there? Where? Nowhere. Exactly. What we do is if we need that extra... push over the cliff... you know what we do? Put it up to eleven. Eleven. Exactly. One louder."]})})]})},A$=e=>wi([e.range,En(e.bgc)?`bgc-${e.bgc}`:"",En(e.fgc)?`fgc-${e.fgc}`:"",En(e.hdc)?`hdc-${e.hdc}`:"",En(e.bdc)?`bdc-${e.bdc}`:"",En(e.bdw)?`bdw-${e.bdw}`:"",En(e.bdr)?`bdr-${e.bdr}`:"",e.size,En(e.mar)?`mar-${e.mar}`:"",En(e.pad)?`pad-${e.pad}`:"",En(e.shadow)?`shadow-${e.shadow}`:"",e.border?"border":""]),D$=()=>{const[e,n]=U.useState({range:"brand",bgc:90,fgc:30,hdc:20,bdc:60,bdr:3,bdw:2,pad:4,mar:6,shadow:2,border:!0});return f("div",{className:"grid gap-8",children:[a(O$,{options:e}),a(M$,{options:e,setOption:l=>o=>n(i=>({...i,[l]:o})),toggleOption:l=>()=>n(o=>({...o,[l]:!o[l]}))})]})},z$=()=>f("div",{children:[a("h1",{children:"Demo"}),f("div",{className:"grid-2 gap-h-8 stack-desktop",children:[f("div",{children:[f("p",{children:["One of the novel approaches that Badger CSS employs is to provide CSS classes for each of the colors in the palette.  There are then further CSS classes that can be used to select the particular shade (or color"," ",'"stop") from that range to use for the background, foreground, heading and border colors.']}),f("p",{children:["One benefit of this approach is that it allows you to design color agnostic components that work with both light and dark themes, and can then be used with any color range.  For some examples, see the"," ",a(Le,{to:"/components/alerts",text:"Alerts"})," and "," ",a(Le,{to:"/components/tables",text:"Tables"})," pages"]}),a("p",{children:"Another more practical benefit is that it avoid the combinatorial explosion of CSS classes required to cover every combination of color range and stop for foreground, background, heading and border colors."})]}),f("div",{children:[a("p",{children:"Further utility classes are provided for selecting font size, border width and radius, margins, padding, shadows and various layout options. They're similar to what you'll find in other CSS toolkits."}),a("p",{children:"The choice about what is included and what isn't is entirely arbitrary but I lean towards minimalism and have only included the kind of utility classes that I use in most, if not all web sites. It's really easy for you to add in your own utility classes, or change the settings for the provided utilities, if you want to."}),a("p",{children:"So without further ado, click on the buttons below to select different colors and layout options.  Each one selects a CSS class which affects the way the output is displayed."})]})]}),a(D$,{})]}),B$=Object.freeze(Object.defineProperty({__proto__:null,default:z$},Symbol.toStringTag,{value:"Module"})),j$=`<div class="grid-fit gap-2">
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
`,U$=`<div class="grid-fit gap-2">
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
`,H$=`<div class="grid-fit gap-2">
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
`,W$=`<div class="grid-fit gap-2">
  <span class="button">Default</span>
  <span class="red shaded button">Red Shaded</span>
  <span class="orange outline button">Orange Outline</span>
</div>
`,V$=`<div class="flex start gap-4">
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
</div>`,G$=`<div class="flex start gap-4">
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
</div>`,Y$=()=>f("div",{className:"prose",children:[a("h1",{children:"Buttons"}),f("p",{children:["For the sake of accessibility, buttons should usually be rendered using the ",a("code",{children:"button"})," element.  I mean, that's what it's there for, right?  For those cases when you really need to make a link or something else look like a button you can add the"," ",a("code",{children:"button"})," class."]}),f("p",{children:["The default button color is grey. Any one of the color classes (e.g. ",a("code",{children:"red"}),", ",a("code",{children:"green"}),", etc) can be added to get different colors."]}),a("p",{children:"Button color stops automatically adapt between light and dark modes."}),a("h2",{children:"Default Style"}),a("p",{children:"The default button style is solid."}),a(D,{html:j$,language:"html",caption:"Buttons"}),a("h2",{children:"Outline Style"}),f("p",{children:["Add the ",a("code",{children:"outline"})," class for outline buttons."]}),a(D,{html:U$,caption:"Outline Buttons"}),a("h2",{children:"Shaded Style"}),f("p",{children:["Add the ",a("code",{children:"shade"})," class for subtly shaded buttons.  It's only a matter of time until flat design is out and shaded is back in. Be ahead of the curve!"]}),a(D,{html:H$,caption:"Shaded Buttons"}),a("h2",{children:"Button Class"}),f("p",{children:["Add the ",a("code",{children:"button"})," class to any non-button element to give it the button styling.  You can also add the ",a("code",{children:"outline"})," and/or"," ",a("code",{children:"shaded"})," classes."]}),a(D,{html:W$,caption:".button class"}),a("h2",{children:"Button Icons"}),f("p",{children:["You can add ",a(Le,{to:"/components/icons",text:"SVG Icons"})," to buttons. You can set the margins for icons manually using the ",a("code",{children:"mar-N"})," ","classes described on the ",a(Le,{to:"/utilities/spacing",text:"spacing"})," page. The ",a("code",{children:"on-left"})," and ",a("code",{children:"on-right"})," classes are provided as shortcuts and are equivalent to ",a("code",{children:"mar-r-2"})," and ",a("code",{children:"mar-l-2"}),", respectively."]}),a(D,{html:V$,caption:"Button icons"}),a("h2",{children:"Button Padding"}),a("p",{children:"The default padding for buttons is larger in the horizontal direction (4 units = 1em) than it is in the vertical direction (1 unit = 0.25em). This isn't as unbalanced as it initially seems when you factor in the line-height (1.5), which effectively results in  the vertical padding being equivalent to 2 units (0.5em)."}),f("p",{children:["If you have a button that only contains an icon then it can look a bit strange, as shown in the first button here.  Adding the ",a("code",{children:"pad-h-2"})," class to the button will reduce the horizontal padding to 2 units (0.5em) which will even things out, as shown in the second button.  Or you can add the ",a("code",{children:"icon"})," class to the button which will have the same effect and doesn't require you to remember how many units of padding you need to set."]}),a(D,{html:G$,caption:"Button padding"})]}),q$=Object.freeze(Object.defineProperty({__proto__:null,default:Y$},Symbol.toStringTag,{value:"Module"})),Z$=`<label>
  <input type="checkbox">
  Option 1
</label>

<label class="checkbox">
  <input type="checkbox">
  Option 2
</label>
`,Q$=`<label class="wide">
  <input type="checkbox">
  Option 1
</label>

<label class="wide checkbox">
  <input type="checkbox">
  Option 2
</label>
`,K$=`<div class="grid-2 gap-2">
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
`,X$=`<div>
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
</div>`,J$=()=>f("div",{children:[a("h1",{children:"Checkboxes"}),a("h2",{children:"Checkbox Class"}),f("p",{children:["The usual approach to creating a checkbox is to define a"," ",a("code",{children:"label"})," that contains an ",a("code",{children:"input"})," with a",a("code",{children:'type="label"'})," attribute."]}),f("p",{children:["That will work fine on most browsers.  However at the time of writing (July 2023), Firefox (v115) still doesn't support the"," ",a("code",{children:":has()"})," CSS selector that this depends upon.  Although the other major browsers currently support it and we're expecting it to be implemented in Firefox soon."]}),f("p",{children:["As a work-around you can add the ",a("code",{children:"checkbox"})," class to the"," ",a("code",{children:"label"}),"."]}),a(D,{html:Z$,language:"html",caption:"Checkboxes"}),a("h2",{children:"Wide Checkboxes"}),f("p",{children:["Add the ",a("code",{children:"wide"})," class for full-width checkboxes."]}),a(D,{html:Q$,language:"html",caption:"Wide Checkboxes"}),a("h2",{children:"Checkbox Borders"}),f("p",{children:["Add the ",a("code",{children:"border"})," class for borders."]}),a(D,{html:K$,language:"html",caption:"Border Checkboxes"}),a("h2",{children:"Custom Checkboxes"}),a(D,{html:X$,language:"html",caption:"Custom Checkboxes"})]}),eE=Object.freeze(Object.defineProperty({__proto__:null,default:J$},Symbol.toStringTag,{value:"Module"})),nE=`<div class="field">
  <label>Label</label>
  <input type="text" value="Input value">
  <div class="help">Help message</div>
</div>`,tE=`<div class="field invalid">
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
</div>`,rE=`<div class="field valid">
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
</div>`,lE=`<div class="field required">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
<div class="field required">
  <label>Terms</label>
  <label class="Xcheckbox">
    <input type="checkbox">
    I accept the terms and conditions
  </label>
</div>`,aE=`<style>
  .mandatory-text {
    --required-text: 'MANDATORY';
  }
</style>
<div class="field required mandatory-text">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
`,oE=`<div class="field optional">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>`,iE=`<style>
  .not-required {
    --optional-text: 'NOT REQUIRED';
  }
</style>
<div class="field optional not-required">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
`,sE=`// define your own text for the required/optional labels...
$field-required-text: '"Important"';
$field-optional-text: '"Not Required"';

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,cE=`<div class="field">
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
`,dE=`<div class="field">
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
`,uE=`<div class="field">
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
`,hE=()=>f("div",{className:"prose",children:[a("h1",{children:"Form Fields"}),a("p",{children:"Form fields are usually comprised of more than just an input. A label is usually present and sometimes an additional help message too."}),a("h2",{children:"Field Class"}),f("p",{children:["Create a container with the ",a("code",{children:"field"})," class. Any help message should have the ",a("code",{children:"help"})," class."]}),a(D,{html:nE,language:"html",caption:"Form Field"}),a("h2",{children:"Invalid Field"}),f("p",{children:["Add the ",a("code",{children:"invalid"})," class to the ",a("code",{children:"field"})," to indicate fields that are invalid."]}),a(D,{html:tE,language:"html",caption:"Invalid Field"}),a("h2",{children:"Valid Field"}),f("p",{children:["Add the ",a("code",{children:"valid"})," class to the ",a("code",{children:"field"})," to indicate fields that have passed validation."]}),a(D,{html:rE,language:"html",caption:"Valid Field"}),a("h2",{children:"Required Field"}),f("p",{children:["Add the ",a("code",{children:"required"})," class to the ",a("code",{children:"field"})," if you want an additional tag added to the label."]}),a(D,{html:lE,language:"html",caption:"Required Field"}),f("p",{children:["You can use the ",a("code",{children:"--required-text"})," CSS variable to change the text displayed."]}),a(D,{html:aE,language:"html",caption:"Custom Required Field"}),a("h2",{children:"Optional Field"}),f("p",{children:["Add the ",a("code",{children:"optional"})," class to the ",a("code",{children:"field"})," if you want an additional tag added to the label."]}),a(D,{html:oE,language:"html",caption:"Optional Field"}),f("p",{children:["You can use the ",a("code",{children:"--optional-text"})," CSS variable to change the text displayed."]}),a(D,{html:iE,language:"html",caption:"Custom Optional Field"}),f("p",{children:["You can also change the text displayed for either the required and/or optional labels on a global level by setting the"," ",a("code",{children:"$field-required-text"})," and ",a("code",{children:"$field-optional-text"})," ","SASS variables. Be warned that you need to quote the values twice, so that the value defined includes a set of quotes, as shown here."]}),a(Je,{code:sE,caption:"Required Text",language:"scss",className:"mar-b-8",expand:!0}),a("h2",{children:"Input Prefix"}),f("p",{children:["If you want to add a prefix to a field you should enclose the input in an element with the ",a("code",{children:"input"})," class and add the"," ",a("code",{children:"prefix"})," class to the prefix element.  You can add a prefix to a text input, textarea, select or a checkbox or radio option with the ",a("code",{children:"border"})," class set.  You can try it without the "," ",a("code",{children:"border"})," but the effect is lost somewhat."]}),f("p",{children:["If you want a wide input then add the ",a("code",{children:"wide"})," class to the"," ",a("code",{children:"input"})," container element."]}),a(D,{html:cE,language:"html",caption:"Input Prefix"}),a("h2",{children:"Input Suffix"}),f("p",{children:["Adding an input suffix is just the same, except for giving your suffix element the ",a("code",{children:"suffix"})," class and putting it after the input."]}),a(D,{html:dE,language:"html",caption:"Input Suffix"}),a("h2",{children:"Prefix and Suffix"}),f("p",{children:["You can add both a ",a("code",{children:"prefix"})," and a ",a("code",{children:"suffix"}),". Not only do the colours and focus rings work correctly, but they also adapt their colors for ",a("code",{children:"valid"})," and ",a("code",{children:"invalid"})," fields."]}),a(D,{html:uE,language:"html",caption:"Prefix and Suffix"})]}),fE=Object.freeze(Object.defineProperty({__proto__:null,default:hE},Symbol.toStringTag,{value:"Module"})),pE=`<fieldset>
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
</fieldset>`,gE=()=>f("div",{className:"prose",children:[a("h1",{children:"Form Field Sets"}),f("p",{children:["You can group related fields together in a ",a("code",{children:"fieldset"}),"."]}),a("h2",{children:"Fieldset Container"}),a(D,{html:pE,language:"html",caption:"Form Fieldset"})]}),mE=Object.freeze(Object.defineProperty({__proto__:null,default:gE},Symbol.toStringTag,{value:"Module"})),h1=`<div class="field">
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
`,vE=`<div class="grid-1 gap-4">
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
</div>`,yE=`<div class="field optional">
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
`,bE=`<div class="grid-1 gap-4">
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
 */var Cy=U;function ge(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kn=Object.prototype.hasOwnProperty,wE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f1={},p1={};function ky(e){return Kn.call(p1,e)?!0:Kn.call(f1,e)?!1:wE.test(e)?p1[e]=!0:(f1[e]=!0,!1)}function Gn(e,n,t,r,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var Rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Rn[e]=new Gn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Rn[n]=new Gn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Rn[e]=new Gn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Rn[e]=new Gn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Rn[e]=new Gn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Rn[e]=new Gn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Rn[e]=new Gn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Rn[e]=new Gn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Rn[e]=new Gn(e,5,!1,e.toLowerCase(),null,!1,!1)});var zf=/[\-:]([a-z])/g;function Bf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(zf,Bf);Rn[n]=new Gn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(zf,Bf);Rn[n]=new Gn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(zf,Bf);Rn[n]=new Gn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Rn[e]=new Gn(e,1,!1,e.toLowerCase(),null,!1,!1)});Rn.xlinkHref=new Gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Rn[e]=new Gn(e,1,!1,e.toLowerCase(),null,!0,!0)});var Ss={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xE=["Webkit","ms","Moz","O"];Object.keys(Ss).forEach(function(e){xE.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ss[n]=Ss[e]})});var SE=/["'&<>]/;function Un(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var n=SE.exec(e);if(n){var t="",r,l=0;for(r=n.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#x27;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}l!==r&&(t+=e.substring(l,r)),l=r+1,t+=n}e=l!==r?t+e.substring(l,r):t}return e}var CE=/([A-Z])/g,kE=/^ms-/,th=Array.isArray;function rr(e,n){return{insertionMode:e,selectedValue:n}}function _E(e,n,t){switch(n){case"select":return rr(1,t.value!=null?t.value:t.defaultValue);case"svg":return rr(2,null);case"math":return rr(3,null);case"foreignObject":return rr(1,null);case"table":return rr(4,null);case"thead":case"tbody":case"tfoot":return rr(5,null);case"colgroup":return rr(7,null);case"tr":return rr(6,null)}return 4<=e.insertionMode||e.insertionMode===0?rr(1,null):e}var g1=new Map;function _y(e,n,t){if(typeof t!="object")throw Error(ge(62));n=!0;for(var r in t)if(Kn.call(t,r)){var l=t[r];if(l!=null&&typeof l!="boolean"&&l!==""){if(r.indexOf("--")===0){var o=Un(r);l=Un((""+l).trim())}else{o=r;var i=g1.get(o);i!==void 0||(i=Un(o.replace(CE,"-$1").toLowerCase().replace(kE,"-ms-")),g1.set(o,i)),o=i,l=typeof l=="number"?l===0||Kn.call(Ss,r)?""+l:l+"px":Un((""+l).trim())}n?(n=!1,e.push(' style="',o,":",l)):e.push(";",o,":",l)}}n||e.push('"')}function at(e,n,t,r){switch(t){case"style":_y(e,n,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N"){if(n=Rn.hasOwnProperty(t)?Rn[t]:null,n!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!n.acceptsBooleans)return}switch(t=n.attributeName,n.type){case 3:r&&e.push(" ",t,'=""');break;case 4:r===!0?e.push(" ",t,'=""'):r!==!1&&e.push(" ",t,'="',Un(r),'"');break;case 5:isNaN(r)||e.push(" ",t,'="',Un(r),'"');break;case 6:!isNaN(r)&&1<=r&&e.push(" ",t,'="',Un(r),'"');break;default:n.sanitizeURL&&(r=""+r),e.push(" ",t,'="',Un(r),'"')}}else if(ky(t)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(n=t.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-")return}e.push(" ",t,'="',Un(r),'"')}}}function Cs(e,n,t){if(n!=null){if(t!=null)throw Error(ge(60));if(typeof n!="object"||!("__html"in n))throw Error(ge(61));n=n.__html,n!=null&&e.push(""+n)}}function $E(e){var n="";return Cy.Children.forEach(e,function(t){t!=null&&(n+=t)}),n}function Hd(e,n,t,r){e.push(Ut(t));var l=t=null,o;for(o in n)if(Kn.call(n,o)){var i=n[o];if(i!=null)switch(o){case"children":t=i;break;case"dangerouslySetInnerHTML":l=i;break;default:at(e,r,o,i)}}return e.push(">"),Cs(e,l,t),typeof t=="string"?(e.push(Un(t)),null):t}var EE=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,m1=new Map;function Ut(e){var n=m1.get(e);if(n===void 0){if(!EE.test(e))throw Error(ge(65,e));n="<"+e,m1.set(e,n)}return n}function TE(e,n,t,r,l){switch(n){case"select":e.push(Ut("select"));var o=null,i=null;for(m in t)if(Kn.call(t,m)){var s=t[m];if(s!=null)switch(m){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"defaultValue":case"value":break;default:at(e,r,m,s)}}return e.push(">"),Cs(e,i,o),o;case"option":i=l.selectedValue,e.push(Ut("option"));var d=s=null,h=null,m=null;for(o in t)if(Kn.call(t,o)){var b=t[o];if(b!=null)switch(o){case"children":s=b;break;case"selected":h=b;break;case"dangerouslySetInnerHTML":m=b;break;case"value":d=b;default:at(e,r,o,b)}}if(i!=null)if(t=d!==null?""+d:$E(s),th(i)){for(r=0;r<i.length;r++)if(""+i[r]===t){e.push(' selected=""');break}}else""+i===t&&e.push(' selected=""');else h&&e.push(' selected=""');return e.push(">"),Cs(e,m,s),s;case"textarea":e.push(Ut("textarea")),m=i=o=null;for(s in t)if(Kn.call(t,s)&&(d=t[s],d!=null))switch(s){case"children":m=d;break;case"value":o=d;break;case"defaultValue":i=d;break;case"dangerouslySetInnerHTML":throw Error(ge(91));default:at(e,r,s,d)}if(o===null&&i!==null&&(o=i),e.push(">"),m!=null){if(o!=null)throw Error(ge(92));if(th(m)&&1<m.length)throw Error(ge(93));o=""+m}return typeof o=="string"&&o[0]===`
`&&e.push(`
`),o!==null&&e.push(Un(""+o)),null;case"input":e.push(Ut("input")),d=m=s=o=null;for(i in t)if(Kn.call(t,i)&&(h=t[i],h!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(ge(399,"input"));case"defaultChecked":d=h;break;case"defaultValue":s=h;break;case"checked":m=h;break;case"value":o=h;break;default:at(e,r,i,h)}return m!==null?at(e,r,"checked",m):d!==null&&at(e,r,"checked",d),o!==null?at(e,r,"value",o):s!==null&&at(e,r,"value",s),e.push("/>"),null;case"menuitem":e.push(Ut("menuitem"));for(var S in t)if(Kn.call(t,S)&&(o=t[S],o!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(ge(400));default:at(e,r,S,o)}return e.push(">"),null;case"title":e.push(Ut("title")),o=null;for(b in t)if(Kn.call(t,b)&&(i=t[b],i!=null))switch(b){case"children":o=i;break;case"dangerouslySetInnerHTML":throw Error(ge(434));default:at(e,r,b,i)}return e.push(">"),o;case"listing":case"pre":e.push(Ut(n)),i=o=null;for(d in t)if(Kn.call(t,d)&&(s=t[d],s!=null))switch(d){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;default:at(e,r,d,s)}if(e.push(">"),i!=null){if(o!=null)throw Error(ge(60));if(typeof i!="object"||!("__html"in i))throw Error(ge(61));t=i.__html,t!=null&&(typeof t=="string"&&0<t.length&&t[0]===`
`?e.push(`
`,t):e.push(""+t))}return typeof o=="string"&&o[0]===`
`&&e.push(`
`),o;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Ut(n));for(var L in t)if(Kn.call(t,L)&&(o=t[L],o!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(ge(399,n));default:at(e,r,L,o)}return e.push("/>"),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Hd(e,t,n,r);case"html":return l.insertionMode===0&&e.push("<!DOCTYPE html>"),Hd(e,t,n,r);default:if(n.indexOf("-")===-1&&typeof t.is!="string")return Hd(e,t,n,r);e.push(Ut(n)),i=o=null;for(h in t)if(Kn.call(t,h)&&(s=t[h],s!=null))switch(h){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"style":_y(e,r,s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:ky(h)&&typeof s!="function"&&typeof s!="symbol"&&e.push(" ",h,'="',Un(s),'"')}return e.push(">"),Cs(e,i,o),o}}function v1(e,n,t){if(e.push('<!--$?--><template id="'),t===null)throw Error(ge(395));return e.push(t),e.push('"></template>')}function NE(e,n,t,r){switch(t.insertionMode){case 0:case 1:return e.push('<div hidden id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 2:return e.push('<svg aria-hidden="true" style="display:none" id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 3:return e.push('<math aria-hidden="true" style="display:none" id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 4:return e.push('<table hidden id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 5:return e.push('<table hidden><tbody id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 6:return e.push('<table hidden><tr id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 7:return e.push('<table hidden><colgroup id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');default:throw Error(ge(397))}}function LE(e,n){switch(n.insertionMode){case 0:case 1:return e.push("</div>");case 2:return e.push("</svg>");case 3:return e.push("</math>");case 4:return e.push("</table>");case 5:return e.push("</tbody></table>");case 6:return e.push("</tr></table>");case 7:return e.push("</colgroup></table>");default:throw Error(ge(397))}}var IE=/[<\u2028\u2029]/g;function Wd(e){return JSON.stringify(e).replace(IE,function(n){switch(n){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}function RE(e,n){return n=n===void 0?"":n,{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:n+"P:",segmentPrefix:n+"S:",boundaryPrefix:n+"B:",idPrefix:n,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:e}}function y1(e,n,t,r){return t.generateStaticMarkup?(e.push(Un(n)),!1):(n===""?e=r:(r&&e.push("<!-- -->"),e.push(Un(n)),e=!0),e)}var Mo=Object.assign,PE=Symbol.for("react.element"),$y=Symbol.for("react.portal"),Ey=Symbol.for("react.fragment"),Ty=Symbol.for("react.strict_mode"),Ny=Symbol.for("react.profiler"),Ly=Symbol.for("react.provider"),Iy=Symbol.for("react.context"),Ry=Symbol.for("react.forward_ref"),Py=Symbol.for("react.suspense"),Fy=Symbol.for("react.suspense_list"),My=Symbol.for("react.memo"),jf=Symbol.for("react.lazy"),FE=Symbol.for("react.scope"),ME=Symbol.for("react.debug_trace_mode"),OE=Symbol.for("react.legacy_hidden"),AE=Symbol.for("react.default_value"),b1=Symbol.iterator;function rh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ey:return"Fragment";case $y:return"Portal";case Ny:return"Profiler";case Ty:return"StrictMode";case Py:return"Suspense";case Fy:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Iy:return(e.displayName||"Context")+".Consumer";case Ly:return(e._context.displayName||"Context")+".Provider";case Ry:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case My:return n=e.displayName||null,n!==null?n:rh(e.type)||"Memo";case jf:n=e._payload,e=e._init;try{return rh(e(n))}catch{}}return null}var Oy={};function w1(e,n){if(e=e.contextTypes,!e)return Oy;var t={},r;for(r in e)t[r]=n[r];return t}var xl=null;function Fc(e,n){if(e!==n){e.context._currentValue2=e.parentValue,e=e.parent;var t=n.parent;if(e===null){if(t!==null)throw Error(ge(401))}else{if(t===null)throw Error(ge(401));Fc(e,t)}n.context._currentValue2=n.value}}function Ay(e){e.context._currentValue2=e.parentValue,e=e.parent,e!==null&&Ay(e)}function Dy(e){var n=e.parent;n!==null&&Dy(n),e.context._currentValue2=e.value}function zy(e,n){if(e.context._currentValue2=e.parentValue,e=e.parent,e===null)throw Error(ge(402));e.depth===n.depth?Fc(e,n):zy(e,n)}function By(e,n){var t=n.parent;if(t===null)throw Error(ge(402));e.depth===t.depth?Fc(e,t):By(e,t),n.context._currentValue2=n.value}function lc(e){var n=xl;n!==e&&(n===null?Dy(e):e===null?Ay(n):n.depth===e.depth?Fc(n,e):n.depth>e.depth?zy(n,e):By(n,e),xl=e)}var x1={isMounted:function(){return!1},enqueueSetState:function(e,n){e=e._reactInternals,e.queue!==null&&e.queue.push(n)},enqueueReplaceState:function(e,n){e=e._reactInternals,e.replace=!0,e.queue=[n]},enqueueForceUpdate:function(){}};function S1(e,n,t,r){var l=e.state!==void 0?e.state:null;e.updater=x1,e.props=t,e.state=l;var o={queue:[],replace:!1};e._reactInternals=o;var i=n.contextType;if(e.context=typeof i=="object"&&i!==null?i._currentValue2:r,i=n.getDerivedStateFromProps,typeof i=="function"&&(i=i(t,l),l=i==null?l:Mo({},l,i),e.state=l),typeof n.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(n=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),n!==e.state&&x1.enqueueReplaceState(e,e.state,null),o.queue!==null&&0<o.queue.length)if(n=o.queue,i=o.replace,o.queue=null,o.replace=!1,i&&n.length===1)e.state=n[0];else{for(o=i?n[0]:e.state,l=!0,i=i?1:0;i<n.length;i++){var s=n[i];s=typeof s=="function"?s.call(e,o,t,r):s,s!=null&&(l?(l=!1,o=Mo({},o,s)):Mo(o,s))}e.state=o}else o.queue=null}var DE={id:1,overflow:""};function lh(e,n,t){var r=e.id;e=e.overflow;var l=32-ks(r)-1;r&=~(1<<l),t+=1;var o=32-ks(n)+l;if(30<o){var i=l-l%5;return o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,{id:1<<32-ks(n)+l|t<<l|r,overflow:o+e}}return{id:1<<o|t<<l|r,overflow:e}}var ks=Math.clz32?Math.clz32:jE,zE=Math.log,BE=Math.LN2;function jE(e){return e>>>=0,e===0?32:31-(zE(e)/BE|0)|0}function UE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var HE=typeof Object.is=="function"?Object.is:UE,gr=null,Uf=null,_s=null,Ue=null,xo=!1,ac=!1,ai=0,Pr=null,Mc=0;function fl(){if(gr===null)throw Error(ge(321));return gr}function C1(){if(0<Mc)throw Error(ge(312));return{memoizedState:null,queue:null,next:null}}function Hf(){return Ue===null?_s===null?(xo=!1,_s=Ue=C1()):(xo=!0,Ue=_s):Ue.next===null?(xo=!1,Ue=Ue.next=C1()):(xo=!0,Ue=Ue.next),Ue}function Wf(){Uf=gr=null,ac=!1,_s=null,Mc=0,Ue=Pr=null}function jy(e,n){return typeof n=="function"?n(e):n}function k1(e,n,t){if(gr=fl(),Ue=Hf(),xo){var r=Ue.queue;if(n=r.dispatch,Pr!==null&&(t=Pr.get(r),t!==void 0)){Pr.delete(r),r=Ue.memoizedState;do r=e(r,t.action),t=t.next;while(t!==null);return Ue.memoizedState=r,[r,n]}return[Ue.memoizedState,n]}return e=e===jy?typeof n=="function"?n():n:t!==void 0?t(n):n,Ue.memoizedState=e,e=Ue.queue={last:null,dispatch:null},e=e.dispatch=WE.bind(null,gr,e),[Ue.memoizedState,e]}function _1(e,n){if(gr=fl(),Ue=Hf(),n=n===void 0?null:n,Ue!==null){var t=Ue.memoizedState;if(t!==null&&n!==null){var r=t[1];e:if(r===null)r=!1;else{for(var l=0;l<r.length&&l<n.length;l++)if(!HE(n[l],r[l])){r=!1;break e}r=!0}if(r)return t[0]}}return e=e(),Ue.memoizedState=[e,n],e}function WE(e,n,t){if(25<=Mc)throw Error(ge(301));if(e===gr)if(ac=!0,e={action:t,next:null},Pr===null&&(Pr=new Map),t=Pr.get(n),t===void 0)Pr.set(n,e);else{for(n=t;n.next!==null;)n=n.next;n.next=e}}function VE(){throw Error(ge(394))}function rs(){}var $1={readContext:function(e){return e._currentValue2},useContext:function(e){return fl(),e._currentValue2},useMemo:_1,useReducer:k1,useRef:function(e){gr=fl(),Ue=Hf();var n=Ue.memoizedState;return n===null?(e={current:e},Ue.memoizedState=e):n},useState:function(e){return k1(jy,e)},useInsertionEffect:rs,useLayoutEffect:function(){},useCallback:function(e,n){return _1(function(){return e},n)},useImperativeHandle:rs,useEffect:rs,useDebugValue:rs,useDeferredValue:function(e){return fl(),e},useTransition:function(){return fl(),[!1,VE]},useId:function(){var e=Uf.treeContext,n=e.overflow;e=e.id,e=(e&~(1<<32-ks(e)-1)).toString(32)+n;var t=$s;if(t===null)throw Error(ge(404));return n=ai++,e=":"+t.idPrefix+"R"+e,0<n&&(e+="H"+n.toString(32)),e+":"},useMutableSource:function(e,n){return fl(),n(e._source)},useSyncExternalStore:function(e,n,t){if(t===void 0)throw Error(ge(407));return t()}},$s=null,Vd=Cy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function GE(e){return console.error(e),null}function So(){}function YE(e,n,t,r,l,o,i,s,d){var h=[],m=new Set;return n={destination:null,responseState:n,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:m,pingedTasks:h,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:l===void 0?GE:l,onAllReady:o===void 0?So:o,onShellReady:i===void 0?So:i,onShellError:s===void 0?So:s,onFatalError:d===void 0?So:d},t=oc(n,0,null,t,!1,!1),t.parentFlushed=!0,e=Vf(n,e,null,t,m,Oy,null,DE),h.push(e),n}function Vf(e,n,t,r,l,o,i,s){e.allPendingTasks++,t===null?e.pendingRootTasks++:t.pendingTasks++;var d={node:n,ping:function(){var h=e.pingedTasks;h.push(d),h.length===1&&Wy(e)},blockedBoundary:t,blockedSegment:r,abortSet:l,legacyContext:o,context:i,treeContext:s};return l.add(d),d}function oc(e,n,t,r,l,o){return{status:0,id:-1,index:n,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:t,lastPushedText:l,textEmbedded:o}}function oi(e,n){if(e=e.onError(n),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function ic(e,n){var t=e.onShellError;t(n),t=e.onFatalError,t(n),e.destination!==null?(e.status=2,e.destination.destroy(n)):(e.status=1,e.fatalError=n)}function E1(e,n,t,r,l){for(gr={},Uf=n,ai=0,e=t(r,l);ac;)ac=!1,ai=0,Mc+=1,Ue=null,e=t(r,l);return Wf(),e}function T1(e,n,t,r){var l=t.render(),o=r.childContextTypes;if(o!=null){var i=n.legacyContext;if(typeof t.getChildContext!="function")r=i;else{t=t.getChildContext();for(var s in t)if(!(s in o))throw Error(ge(108,rh(r)||"Unknown",s));r=Mo({},i,t)}n.legacyContext=r,st(e,n,l),n.legacyContext=i}else st(e,n,l)}function N1(e,n){if(e&&e.defaultProps){n=Mo({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ah(e,n,t,r,l){if(typeof t=="function")if(t.prototype&&t.prototype.isReactComponent){l=w1(t,n.legacyContext);var o=t.contextType;o=new t(r,typeof o=="object"&&o!==null?o._currentValue2:l),S1(o,t,r,l),T1(e,n,o,t)}else{o=w1(t,n.legacyContext),l=E1(e,n,t,r,o);var i=ai!==0;if(typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0)S1(l,t,r,o),T1(e,n,l,t);else if(i){r=n.treeContext,n.treeContext=lh(r,1,0);try{st(e,n,l)}finally{n.treeContext=r}}else st(e,n,l)}else if(typeof t=="string"){switch(l=n.blockedSegment,o=TE(l.chunks,t,r,e.responseState,l.formatContext),l.lastPushedText=!1,i=l.formatContext,l.formatContext=_E(i,t,r),oh(e,n,o),l.formatContext=i,t){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:l.chunks.push("</",t,">")}l.lastPushedText=!1}else{switch(t){case OE:case ME:case Ty:case Ny:case Ey:st(e,n,r.children);return;case Fy:st(e,n,r.children);return;case FE:throw Error(ge(343));case Py:e:{t=n.blockedBoundary,l=n.blockedSegment,o=r.fallback,r=r.children,i=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:i,errorDigest:null},d=oc(e,l.chunks.length,s,l.formatContext,!1,!1);l.children.push(d),l.lastPushedText=!1;var h=oc(e,0,null,l.formatContext,!1,!1);h.parentFlushed=!0,n.blockedBoundary=s,n.blockedSegment=h;try{if(oh(e,n,r),e.responseState.generateStaticMarkup||h.lastPushedText&&h.textEmbedded&&h.chunks.push("<!-- -->"),h.status=1,sc(s,h),s.pendingTasks===0)break e}catch(m){h.status=4,s.forceClientRender=!0,s.errorDigest=oi(e,m)}finally{n.blockedBoundary=t,n.blockedSegment=l}n=Vf(e,o,t,d,i,n.legacyContext,n.context,n.treeContext),e.pingedTasks.push(n)}return}if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ry:if(r=E1(e,n,t.render,r,l),ai!==0){t=n.treeContext,n.treeContext=lh(t,1,0);try{st(e,n,r)}finally{n.treeContext=t}}else st(e,n,r);return;case My:t=t.type,r=N1(t,r),ah(e,n,t,r,l);return;case Ly:if(l=r.children,t=t._context,r=r.value,o=t._currentValue2,t._currentValue2=r,i=xl,xl=r={parent:i,depth:i===null?0:i.depth+1,context:t,parentValue:o,value:r},n.context=r,st(e,n,l),e=xl,e===null)throw Error(ge(403));r=e.parentValue,e.context._currentValue2=r===AE?e.context._defaultValue:r,e=xl=e.parent,n.context=e;return;case Iy:r=r.children,r=r(t._currentValue2),st(e,n,r);return;case jf:l=t._init,t=l(t._payload),r=N1(t,r),ah(e,n,t,r,void 0);return}throw Error(ge(130,t==null?t:typeof t,""))}}function st(e,n,t){if(n.node=t,typeof t=="object"&&t!==null){switch(t.$$typeof){case PE:ah(e,n,t.type,t.props,t.ref);return;case $y:throw Error(ge(257));case jf:var r=t._init;t=r(t._payload),st(e,n,t);return}if(th(t)){L1(e,n,t);return}if(t===null||typeof t!="object"?r=null:(r=b1&&t[b1]||t["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(t))){if(t=r.next(),!t.done){var l=[];do l.push(t.value),t=r.next();while(!t.done);L1(e,n,l)}return}throw e=Object.prototype.toString.call(t),Error(ge(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}typeof t=="string"?(r=n.blockedSegment,r.lastPushedText=y1(n.blockedSegment.chunks,t,e.responseState,r.lastPushedText)):typeof t=="number"&&(r=n.blockedSegment,r.lastPushedText=y1(n.blockedSegment.chunks,""+t,e.responseState,r.lastPushedText))}function L1(e,n,t){for(var r=t.length,l=0;l<r;l++){var o=n.treeContext;n.treeContext=lh(o,r,l);try{oh(e,n,t[l])}finally{n.treeContext=o}}}function oh(e,n,t){var r=n.blockedSegment.formatContext,l=n.legacyContext,o=n.context;try{return st(e,n,t)}catch(d){if(Wf(),typeof d=="object"&&d!==null&&typeof d.then=="function"){t=d;var i=n.blockedSegment,s=oc(e,i.chunks.length,null,i.formatContext,i.lastPushedText,!0);i.children.push(s),i.lastPushedText=!1,e=Vf(e,n.node,n.blockedBoundary,s,n.abortSet,n.legacyContext,n.context,n.treeContext).ping,t.then(e,e),n.blockedSegment.formatContext=r,n.legacyContext=l,n.context=o,lc(o)}else throw n.blockedSegment.formatContext=r,n.legacyContext=l,n.context=o,lc(o),d}}function qE(e){var n=e.blockedBoundary;e=e.blockedSegment,e.status=3,Hy(this,n,e)}function Uy(e,n,t){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(n.allPendingTasks--,n.status!==2&&(n.status=2,n.destination!==null&&n.destination.push(null))):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=t===void 0?Error(ge(432)):t,r.errorDigest=n.onError(e),r.parentFlushed&&n.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(l){return Uy(l,n,t)}),r.fallbackAbortableTasks.clear(),n.allPendingTasks--,n.allPendingTasks===0&&(r=n.onAllReady,r()))}function sc(e,n){if(n.chunks.length===0&&n.children.length===1&&n.children[0].boundary===null){var t=n.children[0];t.id=n.id,t.parentFlushed=!0,t.status===1&&sc(e,t)}else e.completedSegments.push(n)}function Hy(e,n,t){if(n===null){if(t.parentFlushed){if(e.completedRootSegment!==null)throw Error(ge(389));e.completedRootSegment=t}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=So,n=e.onShellReady,n())}else n.pendingTasks--,n.forceClientRender||(n.pendingTasks===0?(t.parentFlushed&&t.status===1&&sc(n,t),n.parentFlushed&&e.completedBoundaries.push(n),n.fallbackAbortableTasks.forEach(qE,e),n.fallbackAbortableTasks.clear()):t.parentFlushed&&t.status===1&&(sc(n,t),n.completedSegments.length===1&&n.parentFlushed&&e.partialBoundaries.push(n)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function Wy(e){if(e.status!==2){var n=xl,t=Vd.current;Vd.current=$1;var r=$s;$s=e.responseState;try{var l=e.pingedTasks,o;for(o=0;o<l.length;o++){var i=l[o],s=e,d=i.blockedSegment;if(d.status===0){lc(i.context);try{st(s,i,i.node),s.responseState.generateStaticMarkup||d.lastPushedText&&d.textEmbedded&&d.chunks.push("<!-- -->"),i.abortSet.delete(i),d.status=1,Hy(s,i.blockedBoundary,d)}catch(N){if(Wf(),typeof N=="object"&&N!==null&&typeof N.then=="function"){var h=i.ping;N.then(h,h)}else{i.abortSet.delete(i),d.status=4;var m=i.blockedBoundary,b=N,S=oi(s,b);if(m===null?ic(s,b):(m.pendingTasks--,m.forceClientRender||(m.forceClientRender=!0,m.errorDigest=S,m.parentFlushed&&s.clientRenderedBoundaries.push(m))),s.allPendingTasks--,s.allPendingTasks===0){var L=s.onAllReady;L()}}}finally{}}}l.splice(0,o),e.destination!==null&&Gf(e,e.destination)}catch(N){oi(e,N),ic(e,N)}finally{$s=r,Vd.current=t,t===$1&&lc(n)}}}function ls(e,n,t){switch(t.parentFlushed=!0,t.status){case 0:var r=t.id=e.nextSegmentId++;return t.lastPushedText=!1,t.textEmbedded=!1,e=e.responseState,n.push('<template id="'),n.push(e.placeholderPrefix),e=r.toString(16),n.push(e),n.push('"></template>');case 1:t.status=2;var l=!0;r=t.chunks;var o=0;t=t.children;for(var i=0;i<t.length;i++){for(l=t[i];o<l.index;o++)n.push(r[o]);l=Oc(e,n,l)}for(;o<r.length-1;o++)n.push(r[o]);return o<r.length&&(l=n.push(r[o])),l;default:throw Error(ge(390))}}function Oc(e,n,t){var r=t.boundary;if(r===null)return ls(e,n,t);if(r.parentFlushed=!0,r.forceClientRender)return e.responseState.generateStaticMarkup||(r=r.errorDigest,n.push("<!--$!-->"),n.push("<template"),r&&(n.push(' data-dgst="'),r=Un(r),n.push(r),n.push('"')),n.push("></template>")),ls(e,n,t),e=e.responseState.generateStaticMarkup?!0:n.push("<!--/$-->"),e;if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var l=e.responseState,o=l.nextSuspenseID++;return l=l.boundaryPrefix+o.toString(16),r=r.id=l,v1(n,e.responseState,r),ls(e,n,t),n.push("<!--/$-->")}if(r.byteSize>e.progressiveChunkSize)return r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),v1(n,e.responseState,r.id),ls(e,n,t),n.push("<!--/$-->");if(e.responseState.generateStaticMarkup||n.push("<!--$-->"),t=r.completedSegments,t.length!==1)throw Error(ge(391));return Oc(e,n,t[0]),e=e.responseState.generateStaticMarkup?!0:n.push("<!--/$-->"),e}function I1(e,n,t){return NE(n,e.responseState,t.formatContext,t.id),Oc(e,n,t),LE(n,t.formatContext)}function R1(e,n,t){for(var r=t.completedSegments,l=0;l<r.length;l++)Vy(e,n,t,r[l]);if(r.length=0,e=e.responseState,r=t.id,t=t.rootSegmentID,n.push(e.startInlineScript),e.sentCompleteBoundaryFunction?n.push('$RC("'):(e.sentCompleteBoundaryFunction=!0,n.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')),r===null)throw Error(ge(395));return t=t.toString(16),n.push(r),n.push('","'),n.push(e.segmentPrefix),n.push(t),n.push('")<\/script>')}function Vy(e,n,t,r){if(r.status===2)return!0;var l=r.id;if(l===-1){if((r.id=t.rootSegmentID)===-1)throw Error(ge(392));return I1(e,n,r)}return I1(e,n,r),e=e.responseState,n.push(e.startInlineScript),e.sentCompleteSegmentFunction?n.push('$RS("'):(e.sentCompleteSegmentFunction=!0,n.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')),n.push(e.segmentPrefix),l=l.toString(16),n.push(l),n.push('","'),n.push(e.placeholderPrefix),n.push(l),n.push('")<\/script>')}function Gf(e,n){try{var t=e.completedRootSegment;if(t!==null&&e.pendingRootTasks===0){Oc(e,n,t),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(t=0;t<r.length-1;t++)n.push(r[t]);t<r.length&&n.push(r[t])}var l=e.clientRenderedBoundaries,o;for(o=0;o<l.length;o++){var i=l[o];r=n;var s=e.responseState,d=i.id,h=i.errorDigest,m=i.errorMessage,b=i.errorComponentStack;if(r.push(s.startInlineScript),s.sentClientRenderFunction?r.push('$RX("'):(s.sentClientRenderFunction=!0,r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')),d===null)throw Error(ge(395));if(r.push(d),r.push('"'),h||m||b){r.push(",");var S=Wd(h||"");r.push(S)}if(m||b){r.push(",");var L=Wd(m||"");r.push(L)}if(b){r.push(",");var N=Wd(b);r.push(N)}if(!r.push(")<\/script>")){e.destination=null,o++,l.splice(0,o);return}}l.splice(0,o);var C=e.completedBoundaries;for(o=0;o<C.length;o++)if(!R1(e,n,C[o])){e.destination=null,o++,C.splice(0,o);return}C.splice(0,o);var I=e.partialBoundaries;for(o=0;o<I.length;o++){var w=I[o];e:{l=e,i=n;var g=w.completedSegments;for(s=0;s<g.length;s++)if(!Vy(l,i,w,g[s])){s++,g.splice(0,s);var y=!1;break e}g.splice(0,s),y=!0}if(!y){e.destination=null,o++,I.splice(0,o);return}}I.splice(0,o);var v=e.completedBoundaries;for(o=0;o<v.length;o++)if(!R1(e,n,v[o])){e.destination=null,o++,v.splice(0,o);return}v.splice(0,o)}finally{e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&n.push(null)}}function ZE(e,n){try{var t=e.abortableTasks;t.forEach(function(r){return Uy(r,e,n)}),t.clear(),e.destination!==null&&Gf(e,e.destination)}catch(r){oi(e,r),ic(e,r)}}function QE(){}function Gy(e,n,t,r){var l=!1,o=null,i="",s={push:function(h){return h!==null&&(i+=h),!0},destroy:function(h){l=!0,o=h}},d=!1;if(e=YE(e,RE(t,n?n.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,QE,void 0,function(){d=!0},void 0,void 0),Wy(e),ZE(e,r),e.status===1)e.status=2,s.destroy(e.fatalError);else if(e.status!==2&&e.destination===null){e.destination=s;try{Gf(e,s)}catch(h){oi(e,h),ic(e,h)}}if(l)throw o;if(!d)throw Error(ge(426));return i}za.renderToNodeStream=function(){throw Error(ge(207))};za.renderToStaticMarkup=function(e,n){return Gy(e,n,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};za.renderToStaticNodeStream=function(){throw Error(ge(208))};za.renderToString=function(e,n){return Gy(e,n,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};za.version="18.2.0";var Yf={};/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yy=U;function ye(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ct=null,dt=0;function re(e,n){if(n.length!==0)if(512<n.length)0<dt&&(e.enqueue(new Uint8Array(ct.buffer,0,dt)),ct=new Uint8Array(512),dt=0),e.enqueue(n);else{var t=ct.length-dt;t<n.length&&(t===0?e.enqueue(ct):(ct.set(n.subarray(0,t),dt),e.enqueue(ct),n=n.subarray(t)),ct=new Uint8Array(512),dt=0),ct.set(n,dt),dt+=n.length}}function Qe(e,n){return re(e,n),!0}function P1(e){ct&&0<dt&&(e.enqueue(new Uint8Array(ct.buffer,0,dt)),ct=null,dt=0)}var qy=new TextEncoder;function xe(e){return qy.encode(e)}function X(e){return qy.encode(e)}function Zy(e,n){typeof e.error=="function"?e.error(n):e.close()}var Xn=Object.prototype.hasOwnProperty,KE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,F1={},M1={};function Qy(e){return Xn.call(M1,e)?!0:Xn.call(F1,e)?!1:KE.test(e)?M1[e]=!0:(F1[e]=!0,!1)}function Yn(e,n,t,r,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var Pn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pn[e]=new Yn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Pn[n]=new Yn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pn[e]=new Yn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pn[e]=new Yn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pn[e]=new Yn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pn[e]=new Yn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pn[e]=new Yn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pn[e]=new Yn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pn[e]=new Yn(e,5,!1,e.toLowerCase(),null,!1,!1)});var qf=/[\-:]([a-z])/g;function Zf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(qf,Zf);Pn[n]=new Yn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(qf,Zf);Pn[n]=new Yn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(qf,Zf);Pn[n]=new Yn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pn[e]=new Yn(e,1,!1,e.toLowerCase(),null,!1,!1)});Pn.xlinkHref=new Yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pn[e]=new Yn(e,1,!1,e.toLowerCase(),null,!0,!0)});var Es={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},XE=["Webkit","ms","Moz","O"];Object.keys(Es).forEach(function(e){XE.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Es[n]=Es[e]})});var JE=/["'&<>]/;function Nn(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var n=JE.exec(e);if(n){var t="",r,l=0;for(r=n.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#x27;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}l!==r&&(t+=e.substring(l,r)),l=r+1,t+=n}e=l!==r?t+e.substring(l,r):t}return e}var eT=/([A-Z])/g,nT=/^ms-/,ih=Array.isArray,tT=X("<script>"),rT=X("<\/script>"),lT=X('<script src="'),aT=X('<script type="module" src="'),O1=X('" async=""><\/script>'),oT=/(<\/|<)(s)(cript)/gi;function iT(e,n,t,r){return""+n+(t==="s"?"\\u0073":"\\u0053")+r}function sT(e,n,t,r,l){e=e===void 0?"":e,n=n===void 0?tT:X('<script nonce="'+Nn(n)+'">');var o=[];if(t!==void 0&&o.push(n,xe((""+t).replace(oT,iT)),rT),r!==void 0)for(t=0;t<r.length;t++)o.push(lT,xe(Nn(r[t])),O1);if(l!==void 0)for(r=0;r<l.length;r++)o.push(aT,xe(Nn(l[r])),O1);return{bootstrapChunks:o,startInlineScript:n,placeholderPrefix:X(e+"P:"),segmentPrefix:X(e+"S:"),boundaryPrefix:e+"B:",idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function Ht(e,n){return{insertionMode:e,selectedValue:n}}function cT(e){return Ht(e==="http://www.w3.org/2000/svg"?2:e==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function dT(e,n,t){switch(n){case"select":return Ht(1,t.value!=null?t.value:t.defaultValue);case"svg":return Ht(2,null);case"math":return Ht(3,null);case"foreignObject":return Ht(1,null);case"table":return Ht(4,null);case"thead":case"tbody":case"tfoot":return Ht(5,null);case"colgroup":return Ht(7,null);case"tr":return Ht(6,null)}return 4<=e.insertionMode||e.insertionMode===0?Ht(1,null):e}var Qf=X("<!-- -->");function A1(e,n,t,r){return n===""?r:(r&&e.push(Qf),e.push(xe(Nn(n))),!0)}var D1=new Map,uT=X(' style="'),z1=X(":"),hT=X(";");function Ky(e,n,t){if(typeof t!="object")throw Error(ye(62));n=!0;for(var r in t)if(Xn.call(t,r)){var l=t[r];if(l!=null&&typeof l!="boolean"&&l!==""){if(r.indexOf("--")===0){var o=xe(Nn(r));l=xe(Nn((""+l).trim()))}else{o=r;var i=D1.get(o);i!==void 0||(i=X(Nn(o.replace(eT,"-$1").toLowerCase().replace(nT,"-ms-"))),D1.set(o,i)),o=i,l=typeof l=="number"?l===0||Xn.call(Es,r)?xe(""+l):xe(l+"px"):xe(Nn((""+l).trim()))}n?(n=!1,e.push(uT,o,z1,l)):e.push(hT,o,z1,l)}}n||e.push(pl)}var _r=X(" "),ea=X('="'),pl=X('"'),B1=X('=""');function ot(e,n,t,r){switch(t){case"style":Ky(e,n,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N"){if(n=Pn.hasOwnProperty(t)?Pn[t]:null,n!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!n.acceptsBooleans)return}switch(t=xe(n.attributeName),n.type){case 3:r&&e.push(_r,t,B1);break;case 4:r===!0?e.push(_r,t,B1):r!==!1&&e.push(_r,t,ea,xe(Nn(r)),pl);break;case 5:isNaN(r)||e.push(_r,t,ea,xe(Nn(r)),pl);break;case 6:!isNaN(r)&&1<=r&&e.push(_r,t,ea,xe(Nn(r)),pl);break;default:n.sanitizeURL&&(r=""+r),e.push(_r,t,ea,xe(Nn(r)),pl)}}else if(Qy(t)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(n=t.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-")return}e.push(_r,xe(t),ea,xe(Nn(r)),pl)}}}var $r=X(">"),j1=X("/>");function Ts(e,n,t){if(n!=null){if(t!=null)throw Error(ye(60));if(typeof n!="object"||!("__html"in n))throw Error(ye(61));n=n.__html,n!=null&&e.push(xe(""+n))}}function fT(e){var n="";return Yy.Children.forEach(e,function(t){t!=null&&(n+=t)}),n}var Gd=X(' selected=""');function Yd(e,n,t,r){e.push(Wt(t));var l=t=null,o;for(o in n)if(Xn.call(n,o)){var i=n[o];if(i!=null)switch(o){case"children":t=i;break;case"dangerouslySetInnerHTML":l=i;break;default:ot(e,r,o,i)}}return e.push($r),Ts(e,l,t),typeof t=="string"?(e.push(xe(Nn(t))),null):t}var qd=X(`
`),pT=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,U1=new Map;function Wt(e){var n=U1.get(e);if(n===void 0){if(!pT.test(e))throw Error(ye(65,e));n=X("<"+e),U1.set(e,n)}return n}var gT=X("<!DOCTYPE html>");function mT(e,n,t,r,l){switch(n){case"select":e.push(Wt("select"));var o=null,i=null;for(m in t)if(Xn.call(t,m)){var s=t[m];if(s!=null)switch(m){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"defaultValue":case"value":break;default:ot(e,r,m,s)}}return e.push($r),Ts(e,i,o),o;case"option":i=l.selectedValue,e.push(Wt("option"));var d=s=null,h=null,m=null;for(o in t)if(Xn.call(t,o)){var b=t[o];if(b!=null)switch(o){case"children":s=b;break;case"selected":h=b;break;case"dangerouslySetInnerHTML":m=b;break;case"value":d=b;default:ot(e,r,o,b)}}if(i!=null)if(t=d!==null?""+d:fT(s),ih(i)){for(r=0;r<i.length;r++)if(""+i[r]===t){e.push(Gd);break}}else""+i===t&&e.push(Gd);else h&&e.push(Gd);return e.push($r),Ts(e,m,s),s;case"textarea":e.push(Wt("textarea")),m=i=o=null;for(s in t)if(Xn.call(t,s)&&(d=t[s],d!=null))switch(s){case"children":m=d;break;case"value":o=d;break;case"defaultValue":i=d;break;case"dangerouslySetInnerHTML":throw Error(ye(91));default:ot(e,r,s,d)}if(o===null&&i!==null&&(o=i),e.push($r),m!=null){if(o!=null)throw Error(ye(92));if(ih(m)&&1<m.length)throw Error(ye(93));o=""+m}return typeof o=="string"&&o[0]===`
`&&e.push(qd),o!==null&&e.push(xe(Nn(""+o))),null;case"input":e.push(Wt("input")),d=m=s=o=null;for(i in t)if(Xn.call(t,i)&&(h=t[i],h!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(ye(399,"input"));case"defaultChecked":d=h;break;case"defaultValue":s=h;break;case"checked":m=h;break;case"value":o=h;break;default:ot(e,r,i,h)}return m!==null?ot(e,r,"checked",m):d!==null&&ot(e,r,"checked",d),o!==null?ot(e,r,"value",o):s!==null&&ot(e,r,"value",s),e.push(j1),null;case"menuitem":e.push(Wt("menuitem"));for(var S in t)if(Xn.call(t,S)&&(o=t[S],o!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(ye(400));default:ot(e,r,S,o)}return e.push($r),null;case"title":e.push(Wt("title")),o=null;for(b in t)if(Xn.call(t,b)&&(i=t[b],i!=null))switch(b){case"children":o=i;break;case"dangerouslySetInnerHTML":throw Error(ye(434));default:ot(e,r,b,i)}return e.push($r),o;case"listing":case"pre":e.push(Wt(n)),i=o=null;for(d in t)if(Xn.call(t,d)&&(s=t[d],s!=null))switch(d){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;default:ot(e,r,d,s)}if(e.push($r),i!=null){if(o!=null)throw Error(ye(60));if(typeof i!="object"||!("__html"in i))throw Error(ye(61));t=i.__html,t!=null&&(typeof t=="string"&&0<t.length&&t[0]===`
`?e.push(qd,xe(t)):e.push(xe(""+t)))}return typeof o=="string"&&o[0]===`
`&&e.push(qd),o;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Wt(n));for(var L in t)if(Xn.call(t,L)&&(o=t[L],o!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(ye(399,n));default:ot(e,r,L,o)}return e.push(j1),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Yd(e,t,n,r);case"html":return l.insertionMode===0&&e.push(gT),Yd(e,t,n,r);default:if(n.indexOf("-")===-1&&typeof t.is!="string")return Yd(e,t,n,r);e.push(Wt(n)),i=o=null;for(h in t)if(Xn.call(t,h)&&(s=t[h],s!=null))switch(h){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"style":Ky(e,r,s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:Qy(h)&&typeof s!="function"&&typeof s!="symbol"&&e.push(_r,xe(h),ea,xe(Nn(s)),pl)}return e.push($r),Ts(e,i,o),o}}var vT=X("</"),yT=X(">"),bT=X('<template id="'),wT=X('"></template>'),xT=X("<!--$-->"),ST=X('<!--$?--><template id="'),CT=X('"></template>'),kT=X("<!--$!-->"),_T=X("<!--/$-->"),$T=X("<template"),ET=X('"'),TT=X(' data-dgst="');X(' data-msg="');X(' data-stck="');var NT=X("></template>");function H1(e,n,t){if(re(e,ST),t===null)throw Error(ye(395));return re(e,t),Qe(e,CT)}var LT=X('<div hidden id="'),IT=X('">'),RT=X("</div>"),PT=X('<svg aria-hidden="true" style="display:none" id="'),FT=X('">'),MT=X("</svg>"),OT=X('<math aria-hidden="true" style="display:none" id="'),AT=X('">'),DT=X("</math>"),zT=X('<table hidden id="'),BT=X('">'),jT=X("</table>"),UT=X('<table hidden><tbody id="'),HT=X('">'),WT=X("</tbody></table>"),VT=X('<table hidden><tr id="'),GT=X('">'),YT=X("</tr></table>"),qT=X('<table hidden><colgroup id="'),ZT=X('">'),QT=X("</colgroup></table>");function KT(e,n,t,r){switch(t.insertionMode){case 0:case 1:return re(e,LT),re(e,n.segmentPrefix),re(e,xe(r.toString(16))),Qe(e,IT);case 2:return re(e,PT),re(e,n.segmentPrefix),re(e,xe(r.toString(16))),Qe(e,FT);case 3:return re(e,OT),re(e,n.segmentPrefix),re(e,xe(r.toString(16))),Qe(e,AT);case 4:return re(e,zT),re(e,n.segmentPrefix),re(e,xe(r.toString(16))),Qe(e,BT);case 5:return re(e,UT),re(e,n.segmentPrefix),re(e,xe(r.toString(16))),Qe(e,HT);case 6:return re(e,VT),re(e,n.segmentPrefix),re(e,xe(r.toString(16))),Qe(e,GT);case 7:return re(e,qT),re(e,n.segmentPrefix),re(e,xe(r.toString(16))),Qe(e,ZT);default:throw Error(ye(397))}}function XT(e,n){switch(n.insertionMode){case 0:case 1:return Qe(e,RT);case 2:return Qe(e,MT);case 3:return Qe(e,DT);case 4:return Qe(e,jT);case 5:return Qe(e,WT);case 6:return Qe(e,YT);case 7:return Qe(e,QT);default:throw Error(ye(397))}}var JT=X('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),eN=X('$RS("'),nN=X('","'),tN=X('")<\/script>'),rN=X('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),lN=X('$RC("'),aN=X('","'),oN=X('")<\/script>'),iN=X('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),sN=X('$RX("'),cN=X('"'),dN=X(")<\/script>"),Zd=X(","),uN=/[<\u2028\u2029]/g;function Qd(e){return JSON.stringify(e).replace(uN,function(n){switch(n){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var Oo=Object.assign,hN=Symbol.for("react.element"),Xy=Symbol.for("react.portal"),Jy=Symbol.for("react.fragment"),e3=Symbol.for("react.strict_mode"),n3=Symbol.for("react.profiler"),t3=Symbol.for("react.provider"),r3=Symbol.for("react.context"),l3=Symbol.for("react.forward_ref"),a3=Symbol.for("react.suspense"),o3=Symbol.for("react.suspense_list"),i3=Symbol.for("react.memo"),Kf=Symbol.for("react.lazy"),fN=Symbol.for("react.scope"),pN=Symbol.for("react.debug_trace_mode"),gN=Symbol.for("react.legacy_hidden"),mN=Symbol.for("react.default_value"),W1=Symbol.iterator;function sh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jy:return"Fragment";case Xy:return"Portal";case n3:return"Profiler";case e3:return"StrictMode";case a3:return"Suspense";case o3:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case r3:return(e.displayName||"Context")+".Consumer";case t3:return(e._context.displayName||"Context")+".Provider";case l3:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case i3:return n=e.displayName||null,n!==null?n:sh(e.type)||"Memo";case Kf:n=e._payload,e=e._init;try{return sh(e(n))}catch{}}return null}var s3={};function V1(e,n){if(e=e.contextTypes,!e)return s3;var t={},r;for(r in e)t[r]=n[r];return t}var Sl=null;function Ac(e,n){if(e!==n){e.context._currentValue=e.parentValue,e=e.parent;var t=n.parent;if(e===null){if(t!==null)throw Error(ye(401))}else{if(t===null)throw Error(ye(401));Ac(e,t)}n.context._currentValue=n.value}}function c3(e){e.context._currentValue=e.parentValue,e=e.parent,e!==null&&c3(e)}function d3(e){var n=e.parent;n!==null&&d3(n),e.context._currentValue=e.value}function u3(e,n){if(e.context._currentValue=e.parentValue,e=e.parent,e===null)throw Error(ye(402));e.depth===n.depth?Ac(e,n):u3(e,n)}function h3(e,n){var t=n.parent;if(t===null)throw Error(ye(402));e.depth===t.depth?Ac(e,t):h3(e,t),n.context._currentValue=n.value}function cc(e){var n=Sl;n!==e&&(n===null?d3(e):e===null?c3(n):n.depth===e.depth?Ac(n,e):n.depth>e.depth?u3(n,e):h3(n,e),Sl=e)}var G1={isMounted:function(){return!1},enqueueSetState:function(e,n){e=e._reactInternals,e.queue!==null&&e.queue.push(n)},enqueueReplaceState:function(e,n){e=e._reactInternals,e.replace=!0,e.queue=[n]},enqueueForceUpdate:function(){}};function Y1(e,n,t,r){var l=e.state!==void 0?e.state:null;e.updater=G1,e.props=t,e.state=l;var o={queue:[],replace:!1};e._reactInternals=o;var i=n.contextType;if(e.context=typeof i=="object"&&i!==null?i._currentValue:r,i=n.getDerivedStateFromProps,typeof i=="function"&&(i=i(t,l),l=i==null?l:Oo({},l,i),e.state=l),typeof n.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(n=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),n!==e.state&&G1.enqueueReplaceState(e,e.state,null),o.queue!==null&&0<o.queue.length)if(n=o.queue,i=o.replace,o.queue=null,o.replace=!1,i&&n.length===1)e.state=n[0];else{for(o=i?n[0]:e.state,l=!0,i=i?1:0;i<n.length;i++){var s=n[i];s=typeof s=="function"?s.call(e,o,t,r):s,s!=null&&(l?(l=!1,o=Oo({},o,s)):Oo(o,s))}e.state=o}else o.queue=null}var vN={id:1,overflow:""};function ch(e,n,t){var r=e.id;e=e.overflow;var l=32-Ns(r)-1;r&=~(1<<l),t+=1;var o=32-Ns(n)+l;if(30<o){var i=l-l%5;return o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,{id:1<<32-Ns(n)+l|t<<l|r,overflow:o+e}}return{id:1<<o|t<<l|r,overflow:e}}var Ns=Math.clz32?Math.clz32:wN,yN=Math.log,bN=Math.LN2;function wN(e){return e>>>=0,e===0?32:31-(yN(e)/bN|0)|0}function xN(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var SN=typeof Object.is=="function"?Object.is:xN,mr=null,Xf=null,Ls=null,He=null,Co=!1,dc=!1,ii=0,Fr=null,Dc=0;function gl(){if(mr===null)throw Error(ye(321));return mr}function q1(){if(0<Dc)throw Error(ye(312));return{memoizedState:null,queue:null,next:null}}function Jf(){return He===null?Ls===null?(Co=!1,Ls=He=q1()):(Co=!0,He=Ls):He.next===null?(Co=!1,He=He.next=q1()):(Co=!0,He=He.next),He}function ep(){Xf=mr=null,dc=!1,Ls=null,Dc=0,He=Fr=null}function f3(e,n){return typeof n=="function"?n(e):n}function Z1(e,n,t){if(mr=gl(),He=Jf(),Co){var r=He.queue;if(n=r.dispatch,Fr!==null&&(t=Fr.get(r),t!==void 0)){Fr.delete(r),r=He.memoizedState;do r=e(r,t.action),t=t.next;while(t!==null);return He.memoizedState=r,[r,n]}return[He.memoizedState,n]}return e=e===f3?typeof n=="function"?n():n:t!==void 0?t(n):n,He.memoizedState=e,e=He.queue={last:null,dispatch:null},e=e.dispatch=CN.bind(null,mr,e),[He.memoizedState,e]}function Q1(e,n){if(mr=gl(),He=Jf(),n=n===void 0?null:n,He!==null){var t=He.memoizedState;if(t!==null&&n!==null){var r=t[1];e:if(r===null)r=!1;else{for(var l=0;l<r.length&&l<n.length;l++)if(!SN(n[l],r[l])){r=!1;break e}r=!0}if(r)return t[0]}}return e=e(),He.memoizedState=[e,n],e}function CN(e,n,t){if(25<=Dc)throw Error(ye(301));if(e===mr)if(dc=!0,e={action:t,next:null},Fr===null&&(Fr=new Map),t=Fr.get(n),t===void 0)Fr.set(n,e);else{for(n=t;n.next!==null;)n=n.next;n.next=e}}function kN(){throw Error(ye(394))}function as(){}var K1={readContext:function(e){return e._currentValue},useContext:function(e){return gl(),e._currentValue},useMemo:Q1,useReducer:Z1,useRef:function(e){mr=gl(),He=Jf();var n=He.memoizedState;return n===null?(e={current:e},He.memoizedState=e):n},useState:function(e){return Z1(f3,e)},useInsertionEffect:as,useLayoutEffect:function(){},useCallback:function(e,n){return Q1(function(){return e},n)},useImperativeHandle:as,useEffect:as,useDebugValue:as,useDeferredValue:function(e){return gl(),e},useTransition:function(){return gl(),[!1,kN]},useId:function(){var e=Xf.treeContext,n=e.overflow;e=e.id,e=(e&~(1<<32-Ns(e)-1)).toString(32)+n;var t=Is;if(t===null)throw Error(ye(404));return n=ii++,e=":"+t.idPrefix+"R"+e,0<n&&(e+="H"+n.toString(32)),e+":"},useMutableSource:function(e,n){return gl(),n(e._source)},useSyncExternalStore:function(e,n,t){if(t===void 0)throw Error(ye(407));return t()}},Is=null,Kd=Yy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function _N(e){return console.error(e),null}function ko(){}function $N(e,n,t,r,l,o,i,s,d){var h=[],m=new Set;return n={destination:null,responseState:n,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:m,pingedTasks:h,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:l===void 0?_N:l,onAllReady:o===void 0?ko:o,onShellReady:i===void 0?ko:i,onShellError:s===void 0?ko:s,onFatalError:d===void 0?ko:d},t=uc(n,0,null,t,!1,!1),t.parentFlushed=!0,e=np(n,e,null,t,m,s3,null,vN),h.push(e),n}function np(e,n,t,r,l,o,i,s){e.allPendingTasks++,t===null?e.pendingRootTasks++:t.pendingTasks++;var d={node:n,ping:function(){var h=e.pingedTasks;h.push(d),h.length===1&&m3(e)},blockedBoundary:t,blockedSegment:r,abortSet:l,legacyContext:o,context:i,treeContext:s};return l.add(d),d}function uc(e,n,t,r,l,o){return{status:0,id:-1,index:n,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:t,lastPushedText:l,textEmbedded:o}}function si(e,n){if(e=e.onError(n),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function hc(e,n){var t=e.onShellError;t(n),t=e.onFatalError,t(n),e.destination!==null?(e.status=2,Zy(e.destination,n)):(e.status=1,e.fatalError=n)}function X1(e,n,t,r,l){for(mr={},Xf=n,ii=0,e=t(r,l);dc;)dc=!1,ii=0,Dc+=1,He=null,e=t(r,l);return ep(),e}function J1(e,n,t,r){var l=t.render(),o=r.childContextTypes;if(o!=null){var i=n.legacyContext;if(typeof t.getChildContext!="function")r=i;else{t=t.getChildContext();for(var s in t)if(!(s in o))throw Error(ye(108,sh(r)||"Unknown",s));r=Oo({},i,t)}n.legacyContext=r,ut(e,n,l),n.legacyContext=i}else ut(e,n,l)}function em(e,n){if(e&&e.defaultProps){n=Oo({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function dh(e,n,t,r,l){if(typeof t=="function")if(t.prototype&&t.prototype.isReactComponent){l=V1(t,n.legacyContext);var o=t.contextType;o=new t(r,typeof o=="object"&&o!==null?o._currentValue:l),Y1(o,t,r,l),J1(e,n,o,t)}else{o=V1(t,n.legacyContext),l=X1(e,n,t,r,o);var i=ii!==0;if(typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0)Y1(l,t,r,o),J1(e,n,l,t);else if(i){r=n.treeContext,n.treeContext=ch(r,1,0);try{ut(e,n,l)}finally{n.treeContext=r}}else ut(e,n,l)}else if(typeof t=="string"){switch(l=n.blockedSegment,o=mT(l.chunks,t,r,e.responseState,l.formatContext),l.lastPushedText=!1,i=l.formatContext,l.formatContext=dT(i,t,r),uh(e,n,o),l.formatContext=i,t){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:l.chunks.push(vT,xe(t),yT)}l.lastPushedText=!1}else{switch(t){case gN:case pN:case e3:case n3:case Jy:ut(e,n,r.children);return;case o3:ut(e,n,r.children);return;case fN:throw Error(ye(343));case a3:e:{t=n.blockedBoundary,l=n.blockedSegment,o=r.fallback,r=r.children,i=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:i,errorDigest:null},d=uc(e,l.chunks.length,s,l.formatContext,!1,!1);l.children.push(d),l.lastPushedText=!1;var h=uc(e,0,null,l.formatContext,!1,!1);h.parentFlushed=!0,n.blockedBoundary=s,n.blockedSegment=h;try{if(uh(e,n,r),h.lastPushedText&&h.textEmbedded&&h.chunks.push(Qf),h.status=1,fc(s,h),s.pendingTasks===0)break e}catch(m){h.status=4,s.forceClientRender=!0,s.errorDigest=si(e,m)}finally{n.blockedBoundary=t,n.blockedSegment=l}n=np(e,o,t,d,i,n.legacyContext,n.context,n.treeContext),e.pingedTasks.push(n)}return}if(typeof t=="object"&&t!==null)switch(t.$$typeof){case l3:if(r=X1(e,n,t.render,r,l),ii!==0){t=n.treeContext,n.treeContext=ch(t,1,0);try{ut(e,n,r)}finally{n.treeContext=t}}else ut(e,n,r);return;case i3:t=t.type,r=em(t,r),dh(e,n,t,r,l);return;case t3:if(l=r.children,t=t._context,r=r.value,o=t._currentValue,t._currentValue=r,i=Sl,Sl=r={parent:i,depth:i===null?0:i.depth+1,context:t,parentValue:o,value:r},n.context=r,ut(e,n,l),e=Sl,e===null)throw Error(ye(403));r=e.parentValue,e.context._currentValue=r===mN?e.context._defaultValue:r,e=Sl=e.parent,n.context=e;return;case r3:r=r.children,r=r(t._currentValue),ut(e,n,r);return;case Kf:l=t._init,t=l(t._payload),r=em(t,r),dh(e,n,t,r,void 0);return}throw Error(ye(130,t==null?t:typeof t,""))}}function ut(e,n,t){if(n.node=t,typeof t=="object"&&t!==null){switch(t.$$typeof){case hN:dh(e,n,t.type,t.props,t.ref);return;case Xy:throw Error(ye(257));case Kf:var r=t._init;t=r(t._payload),ut(e,n,t);return}if(ih(t)){nm(e,n,t);return}if(t===null||typeof t!="object"?r=null:(r=W1&&t[W1]||t["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(t))){if(t=r.next(),!t.done){var l=[];do l.push(t.value),t=r.next();while(!t.done);nm(e,n,l)}return}throw e=Object.prototype.toString.call(t),Error(ye(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}typeof t=="string"?(r=n.blockedSegment,r.lastPushedText=A1(n.blockedSegment.chunks,t,e.responseState,r.lastPushedText)):typeof t=="number"&&(r=n.blockedSegment,r.lastPushedText=A1(n.blockedSegment.chunks,""+t,e.responseState,r.lastPushedText))}function nm(e,n,t){for(var r=t.length,l=0;l<r;l++){var o=n.treeContext;n.treeContext=ch(o,r,l);try{uh(e,n,t[l])}finally{n.treeContext=o}}}function uh(e,n,t){var r=n.blockedSegment.formatContext,l=n.legacyContext,o=n.context;try{return ut(e,n,t)}catch(d){if(ep(),typeof d=="object"&&d!==null&&typeof d.then=="function"){t=d;var i=n.blockedSegment,s=uc(e,i.chunks.length,null,i.formatContext,i.lastPushedText,!0);i.children.push(s),i.lastPushedText=!1,e=np(e,n.node,n.blockedBoundary,s,n.abortSet,n.legacyContext,n.context,n.treeContext).ping,t.then(e,e),n.blockedSegment.formatContext=r,n.legacyContext=l,n.context=o,cc(o)}else throw n.blockedSegment.formatContext=r,n.legacyContext=l,n.context=o,cc(o),d}}function EN(e){var n=e.blockedBoundary;e=e.blockedSegment,e.status=3,g3(this,n,e)}function p3(e,n,t){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(n.allPendingTasks--,n.status!==2&&(n.status=2,n.destination!==null&&n.destination.close())):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=t===void 0?Error(ye(432)):t,r.errorDigest=n.onError(e),r.parentFlushed&&n.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(l){return p3(l,n,t)}),r.fallbackAbortableTasks.clear(),n.allPendingTasks--,n.allPendingTasks===0&&(r=n.onAllReady,r()))}function fc(e,n){if(n.chunks.length===0&&n.children.length===1&&n.children[0].boundary===null){var t=n.children[0];t.id=n.id,t.parentFlushed=!0,t.status===1&&fc(e,t)}else e.completedSegments.push(n)}function g3(e,n,t){if(n===null){if(t.parentFlushed){if(e.completedRootSegment!==null)throw Error(ye(389));e.completedRootSegment=t}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=ko,n=e.onShellReady,n())}else n.pendingTasks--,n.forceClientRender||(n.pendingTasks===0?(t.parentFlushed&&t.status===1&&fc(n,t),n.parentFlushed&&e.completedBoundaries.push(n),n.fallbackAbortableTasks.forEach(EN,e),n.fallbackAbortableTasks.clear()):t.parentFlushed&&t.status===1&&(fc(n,t),n.completedSegments.length===1&&n.parentFlushed&&e.partialBoundaries.push(n)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function m3(e){if(e.status!==2){var n=Sl,t=Kd.current;Kd.current=K1;var r=Is;Is=e.responseState;try{var l=e.pingedTasks,o;for(o=0;o<l.length;o++){var i=l[o],s=e,d=i.blockedSegment;if(d.status===0){cc(i.context);try{ut(s,i,i.node),d.lastPushedText&&d.textEmbedded&&d.chunks.push(Qf),i.abortSet.delete(i),d.status=1,g3(s,i.blockedBoundary,d)}catch(N){if(ep(),typeof N=="object"&&N!==null&&typeof N.then=="function"){var h=i.ping;N.then(h,h)}else{i.abortSet.delete(i),d.status=4;var m=i.blockedBoundary,b=N,S=si(s,b);if(m===null?hc(s,b):(m.pendingTasks--,m.forceClientRender||(m.forceClientRender=!0,m.errorDigest=S,m.parentFlushed&&s.clientRenderedBoundaries.push(m))),s.allPendingTasks--,s.allPendingTasks===0){var L=s.onAllReady;L()}}}finally{}}}l.splice(0,o),e.destination!==null&&tp(e,e.destination)}catch(N){si(e,N),hc(e,N)}finally{Is=r,Kd.current=t,t===K1&&cc(n)}}}function os(e,n,t){switch(t.parentFlushed=!0,t.status){case 0:var r=t.id=e.nextSegmentId++;return t.lastPushedText=!1,t.textEmbedded=!1,e=e.responseState,re(n,bT),re(n,e.placeholderPrefix),e=xe(r.toString(16)),re(n,e),Qe(n,wT);case 1:t.status=2;var l=!0;r=t.chunks;var o=0;t=t.children;for(var i=0;i<t.length;i++){for(l=t[i];o<l.index;o++)re(n,r[o]);l=zc(e,n,l)}for(;o<r.length-1;o++)re(n,r[o]);return o<r.length&&(l=Qe(n,r[o])),l;default:throw Error(ye(390))}}function zc(e,n,t){var r=t.boundary;if(r===null)return os(e,n,t);if(r.parentFlushed=!0,r.forceClientRender)r=r.errorDigest,Qe(n,kT),re(n,$T),r&&(re(n,TT),re(n,xe(Nn(r))),re(n,ET)),Qe(n,NT),os(e,n,t);else if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var l=e.responseState,o=l.nextSuspenseID++;l=X(l.boundaryPrefix+o.toString(16)),r=r.id=l,H1(n,e.responseState,r),os(e,n,t)}else if(r.byteSize>e.progressiveChunkSize)r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),H1(n,e.responseState,r.id),os(e,n,t);else{if(Qe(n,xT),t=r.completedSegments,t.length!==1)throw Error(ye(391));zc(e,n,t[0])}return Qe(n,_T)}function tm(e,n,t){return KT(n,e.responseState,t.formatContext,t.id),zc(e,n,t),XT(n,t.formatContext)}function rm(e,n,t){for(var r=t.completedSegments,l=0;l<r.length;l++)v3(e,n,t,r[l]);if(r.length=0,e=e.responseState,r=t.id,t=t.rootSegmentID,re(n,e.startInlineScript),e.sentCompleteBoundaryFunction?re(n,lN):(e.sentCompleteBoundaryFunction=!0,re(n,rN)),r===null)throw Error(ye(395));return t=xe(t.toString(16)),re(n,r),re(n,aN),re(n,e.segmentPrefix),re(n,t),Qe(n,oN)}function v3(e,n,t,r){if(r.status===2)return!0;var l=r.id;if(l===-1){if((r.id=t.rootSegmentID)===-1)throw Error(ye(392));return tm(e,n,r)}return tm(e,n,r),e=e.responseState,re(n,e.startInlineScript),e.sentCompleteSegmentFunction?re(n,eN):(e.sentCompleteSegmentFunction=!0,re(n,JT)),re(n,e.segmentPrefix),l=xe(l.toString(16)),re(n,l),re(n,nN),re(n,e.placeholderPrefix),re(n,l),Qe(n,tN)}function tp(e,n){ct=new Uint8Array(512),dt=0;try{var t=e.completedRootSegment;if(t!==null&&e.pendingRootTasks===0){zc(e,n,t),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(t=0;t<r.length-1;t++)re(n,r[t]);t<r.length&&Qe(n,r[t])}var l=e.clientRenderedBoundaries,o;for(o=0;o<l.length;o++){var i=l[o];r=n;var s=e.responseState,d=i.id,h=i.errorDigest,m=i.errorMessage,b=i.errorComponentStack;if(re(r,s.startInlineScript),s.sentClientRenderFunction?re(r,sN):(s.sentClientRenderFunction=!0,re(r,iN)),d===null)throw Error(ye(395));re(r,d),re(r,cN),(h||m||b)&&(re(r,Zd),re(r,xe(Qd(h||"")))),(m||b)&&(re(r,Zd),re(r,xe(Qd(m||"")))),b&&(re(r,Zd),re(r,xe(Qd(b)))),Qe(r,dN)}l.splice(0,o);var S=e.completedBoundaries;for(o=0;o<S.length;o++)rm(e,n,S[o]);S.splice(0,o),P1(n),ct=new Uint8Array(512),dt=0;var L=e.partialBoundaries;for(o=0;o<L.length;o++){var N=L[o];e:{l=e,i=n;var C=N.completedSegments;for(s=0;s<C.length;s++)if(!v3(l,i,N,C[s])){s++,C.splice(0,s);var I=!1;break e}C.splice(0,s),I=!0}if(!I){e.destination=null,o++,L.splice(0,o);return}}L.splice(0,o);var w=e.completedBoundaries;for(o=0;o<w.length;o++)rm(e,n,w[o]);w.splice(0,o)}finally{P1(n),e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&n.close()}}function lm(e,n){try{var t=e.abortableTasks;t.forEach(function(r){return p3(r,e,n)}),t.clear(),e.destination!==null&&tp(e,e.destination)}catch(r){si(e,r),hc(e,r)}}Yf.renderToReadableStream=function(e,n){return new Promise(function(t,r){var l,o,i=new Promise(function(m,b){o=m,l=b}),s=$N(e,sT(n?n.identifierPrefix:void 0,n?n.nonce:void 0,n?n.bootstrapScriptContent:void 0,n?n.bootstrapScripts:void 0,n?n.bootstrapModules:void 0),cT(n?n.namespaceURI:void 0),n?n.progressiveChunkSize:void 0,n?n.onError:void 0,o,function(){var m=new ReadableStream({type:"bytes",pull:function(b){if(s.status===1)s.status=2,Zy(b,s.fatalError);else if(s.status!==2&&s.destination===null){s.destination=b;try{tp(s,b)}catch(S){si(s,S),hc(s,S)}}},cancel:function(){lm(s)}},{highWaterMark:0});m.allReady=i,t(m)},function(m){i.catch(function(){}),r(m)},l);if(n&&n.signal){var d=n.signal,h=function(){lm(s,d.reason),d.removeEventListener("abort",h)};d.addEventListener("abort",h)}m3(s)})};Yf.version="18.2.0";var Ba,y3;Ba=za,y3=Yf;Ba.version;var TN=Ba.renderToString;Ba.renderToStaticMarkup;Ba.renderToNodeStream;Ba.renderToStaticNodeStream;y3.renderToReadableStream;var b3={exports:{}},NN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",LN=NN,IN=LN;function w3(){}function x3(){}x3.resetWarningCache=w3;var RN=function(){function e(r,l,o,i,s,d){if(d!==IN){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:x3,resetWarningCache:w3};return t.PropTypes=t,t};b3.exports=RN();var PN=b3.exports;const Ot=Gr(PN);var FN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function S3(e,n){return e(n={exports:{}},n.exports),n.exports}var MN=S3(function(e){(function(n){var t=function(I,w,g){if(!d(w)||m(w)||b(w)||S(w)||s(w))return w;var y,v=0,E=0;if(h(w))for(y=[],E=w.length;v<E;v++)y.push(t(I,w[v],g));else for(var _ in y={},w)Object.prototype.hasOwnProperty.call(w,_)&&(y[I(_,g)]=t(I,w[_],g));return y},r=function(I){return L(I)?I:(I=I.replace(/[\-_\s]+(.)?/g,function(w,g){return g?g.toUpperCase():""})).substr(0,1).toLowerCase()+I.substr(1)},l=function(I){var w=r(I);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(I,w){return function(g,y){var v=(y=y||{}).separator||"_",E=y.split||/(?=[A-Z])/;return g.split(E).join(v)}(I,w).toLowerCase()},i=Object.prototype.toString,s=function(I){return typeof I=="function"},d=function(I){return I===Object(I)},h=function(I){return i.call(I)=="[object Array]"},m=function(I){return i.call(I)=="[object Date]"},b=function(I){return i.call(I)=="[object RegExp]"},S=function(I){return i.call(I)=="[object Boolean]"},L=function(I){return(I-=0)==I},N=function(I,w){var g=w&&"process"in w?w.process:w;return typeof g!="function"?I:function(y,v){return g(y,I,v)}},C={camelize:r,decamelize:o,pascalize:l,depascalize:o,camelizeKeys:function(I,w){return t(N(r,w),I)},decamelizeKeys:function(I,w){return t(N(o,w),I,w)},pascalizeKeys:function(I,w){return t(N(l,w),I)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=C:n.humps=C})(FN)}).decamelize,ON=function(e){if(Array.isArray(e))return e},AN=function(e,n){if(typeof Symbol<"u"&&Symbol.iterator in Object(e)){var t=[],r=!0,l=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(d){l=!0,o=d}finally{try{r||s.return==null||s.return()}finally{if(l)throw o}}return t}},am=function(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r},DN=function(e,n){if(e){if(typeof e=="string")return am(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?am(e,n):void 0}},zN=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},BN=function(e,n){return ON(e)||AN(e,n)||DN(e,n)||zN()},C3=S3(function(e){function n(){return e.exports=n=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o])}return t},n.apply(this,arguments)}e.exports=n}),jN=function(e,n){if(e==null)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l},k3=function(e,n){if(e==null)return{};var t,r,l=jN(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l},UN=U.createContext(null);function hh(e){var n=e.children,t=k3(e,["children"]);return typeof n!="string"&&(n=TN(n)),Tn.createElement("template",C3({},t,{dangerouslySetInnerHTML:{__html:n}}))}function fh(e){var n=e.root,t=e.children;return C2.createPortal(t,n)}function HN(e){var n=U.forwardRef(function(t,r){var l,o,i=t.mode,s=t.delegatesFocus,d=t.styleSheets,h=t.ssr,m=t.children,b=k3(t,["mode","delegatesFocus","styleSheets","ssr","children"]),S=(o=U.useRef((l=r)&&l.current),U.useEffect(function(){l&&(l.current=o.current)},[l]),o),L=U.useState(null),N=BN(L,2),C=N[0],I=N[1],w="node_".concat(i).concat(s);return U.useLayoutEffect(function(){if(S.current)try{if(typeof r=="function"&&r(S.current),h){var g=S.current.shadowRoot;return void I(g)}var y=S.current.attachShadow({mode:i,delegatesFocus:s});d.length>0&&(y.adoptedStyleSheets=d),I(y)}catch(v){(function(E){var _=E.error,F=E.styleSheets,O=E.root;switch(_.name){case"NotSupportedError":F.length>0&&(O.adoptedStyleSheets=F);break;default:throw _}})({error:v,styleSheets:d,root:C})}},[r,S,d]),Tn.createElement(Tn.Fragment,null,Tn.createElement(e.tag,C3({key:w,ref:S},b),(C||h)&&Tn.createElement(UN.Provider,{value:C},h?Tn.createElement(hh,{shadowroot:"open"},e.render({root:C,ssr:h,children:m})):Tn.createElement(fh,{root:C},e.render({root:C,ssr:h,children:m})))))});return n.propTypes={mode:Ot.oneOf(["open","closed"]),delegatesFocus:Ot.bool,styleSheets:Ot.arrayOf(Ot.instanceOf(globalThis.CSSStyleSheet)),ssr:Ot.bool,children:Ot.node},n.defaultProps={mode:"open",delegatesFocus:!1,styleSheets:[],ssr:!1,children:null},n}hh.propTypes={children:Ot.oneOfType([Ot.string,Ot.node])},hh.defaultProps={children:""},fh.propTypes={root:Ot.object.isRequired,children:Ot.node},fh.defaultProps={children:null};var Xd=new Map;function WN(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"core",t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(r){return r.children};return new Proxy(e,{get:function(r,l){var o=MN(l,{separator:"-"}),i="".concat(n,"-").concat(o);return Xd.has(i)||Xd.set(i,HN({tag:o,render:t})),Xd.get(i)}})}var VN=WN();const GN=()=>f("div",{className:"prose",children:[a("h1",{children:"Forms"}),f("blockquote",{className:"intro",children:["There is something about styling forms, that's so not fun. It's like ",a("em",{children:'"How much less fun could this be?"'})," ","and the answer is ",a("em",{children:'"None, none... less fun."'}),a("div",{className:"attrib",children:"Nigel Tufnel's website designer"})]}),a("h2",{children:"None Less Fun"}),a("p",{children:"Anyone reading this who is old enough to have served in the browser wars will no doubt be rolling their eyes at this point, thinking that kids these days don't know how lucky they are."}),f("p",{children:["It's certainly true that things are ",a("i",{children:"much"})," better than they used.  But despite all the advances in CSS support and cross-browser compatibility, the default styling for HTML forms still looks like 1995 called and asked for its website back."]}),a("p",{children:"Badger CSS includes form styling presets, supporting both light and dark themes out of the box. It uses native form components for accessibility and mobile friendliness.  Everything is configurable if you want to change things, but you don't have to."}),a("p",{children:"Here's the same form rendered twice.  Once with the default HTML styling and again with the default Badger CSS styles.  In case you're wondering, there's no Javascript in any of these forms.  It's all just vanilla HTML and CSS."}),f("div",{className:"grid-2 gap-8 mar-t-10 stack-desktop",children:[f("div",{className:"output",children:[a("h3",{className:"mar-b-4",children:"Default Form Styles"}),a(VN.div,{children:a("div",{dangerouslySetInnerHTML:{__html:h1}})})]}),f("div",{className:"output",children:[a("h3",{className:"mar-b-4",children:"Badger CSS Form Styles"}),a("div",{dangerouslySetInnerHTML:{__html:h1}})]})]}),a("h2",{children:"Go Large?"}),f("p",{children:["All form components are sized using ems and will adapt to whatever the current text size is.  If you want a small form, for example, then you just need to add a ",a("code",{children:"small"})," class to the form or one of its parent containers."]}),a("div",{className:"grid-2 gap-4 stack-widescreen",children:["smallest","smaller","small","large","larger","largest"].map(e=>f("div",{className:`${e} pad-6 border output shadow-2`,children:[a("h3",{className:"font-mono mar-b-3",children:e}),a("div",{dangerouslySetInnerHTML:{__html:vE}})]},e))}),a("h2",{children:"Accessibility and Focus"}),a("p",{children:"If you've played with any of the forms above you may have noticed the prominent ring around inputs when focussed.  This is important for accessibility to clearly indicate which field is selected."}),f("p",{children:["If for some reason you really, really need to disabled it because you're indicating the focus some other way then you can add the"," ",a("code",{children:"no-focus"})," class to the inputs."]}),a(D,{html:bE,language:"html"}),a("h2",{children:"Themes and Surfaces"}),a("p",{children:"Styling forms is made that much harder these days by the need to support both light and dark themes.  On top of that we might want to have forms included on different surfaces with varying levels of background intensity. Thanks to the magic of CSS custom properties we can tweak the colors used to render forms depending on the background color of the container."}),a("p",{children:"In these examples below it may not be immediately obvious that the colors are slightly different but they are.  They're different so that they look more-or-less the same, while providing adequate contrast."}),a("div",{className:"grid-3 gap-4 stack-widescreen mar-b-8",children:["surface","surface-1","surface-2","surface-3","surface-4","surface-5"].map(e=>f("div",{className:`${e} pad-6 border shadow-2`,children:[a("h3",{className:"font-mono mar-b-3",children:e}),a("div",{dangerouslySetInnerHTML:{__html:yE}})]},e))})]}),YN=Object.freeze(Object.defineProperty({__proto__:null,default:GN},Symbol.toStringTag,{value:"Module"})),qN=`<label>
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
`,ZN=`<label class="wide radio">
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
`,QN=`<label class="border radio mar-r-2">
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
`,KN=`<div>
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
</div>`,XN=()=>f("div",{children:[a("h1",{children:"Radio Buttons"}),a("h2",{children:"Radio Class"}),f("p",{children:["Radio buttons are implemented much like"," ",a(Le,{to:"/forms/checkboxes",text:"checkboxes"}),".  Create a"," ",a("code",{children:"label"})," enclosing an ",a("code",{children:"input"})," with the"," ",a("code",{children:'type="radio"'})," attribute."]}),f("p",{children:["The same warning about Firefox applies.  The current version (v115) doesn't support the ",a("code",{children:":has()"})," CSS selector that this depends on so you have to manually add the ",a("code",{children:"radio"})," class to the ",a("code",{children:"label"})," as a work-around."]}),a(D,{html:qN,language:"html",caption:"Radio Buttons"}),a("h2",{children:"Wide Radio Buttons"}),f("p",{children:["Add the ",a("code",{children:"wide"})," class for full-width radio buttons."]}),a(D,{html:ZN,language:"html",caption:"Wide Radio Buttons"}),a("h2",{children:"Radio Button Borders"}),f("p",{children:["Add the ",a("code",{children:"border"})," class for borders."]}),a(D,{html:QN,language:"html",caption:"Border Radio Buttons"}),a("h2",{children:"Custom Radio Buttons"}),a(D,{html:KN,language:"html",caption:"Custom Checkboxes"})]}),JN=Object.freeze(Object.defineProperty({__proto__:null,default:XN},Symbol.toStringTag,{value:"Module"})),eL=`<select name="animal">
  <option value="">-- Choose an animal --</option>
  <option value="ant">Ant</option>
  <option value="badger">Badger</option>
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
  <option value="elephant">Elephant</option>
  <option value="ferret">Ferret</option>
  <option value="goldfish">Goldfish</option>
</select>
`,nL=`<select name="animal" required>
  <option value="" hidden disabled selected>Choose an animal</option>
  <option value="ant">Ant</option>
  <option value="badger">Badger</option>
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
  <option value="elephant">Elephant</option>
  <option value="ferret">Ferret</option>
  <option value="goldfish">Goldfish</option>
</select>
`,tL=`<div class="small flex start gap-4 mar-b-4">
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
`,rL=`<div>
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

`,lL=()=>f("div",{className:"prose",children:[a("h1",{children:"Select Input"}),a("p",{children:"Select inputs are the bane of web developers and designers everywhere. There are notoriously difficult to style.  They don't want to align with other elements.  Their size is often wrong.  And just when you think you've finally cracked it, you look at it on another browser and see that it's all on the wonk."}),a("p",{children:"I have wasted far too many hours of my life starting at forms like this one trying to get everything the same size and aligned properly."}),a(D,{html:tL,language:"html",caption:"Select Alignment"}),f("p",{children:["The least bad solution is to set ",a("code",{children:"appearance: none"})," to remove the browser-specific rendering quirks.  The problem then is that you also lose drop down arrow indicating that it's a select input.  So we have to put that back in using an SVG background image. But you don't need to worry about that - I did so you don't have to."]}),a(D,{html:eL,language:"html",caption:"Select Input"}),a("h2",{children:"Custom Icon"}),f("p",{children:["You can define your own drop down arrow icon using the"," ",a("code",{children:"--arrow-down"})," property.  It's a little bit tricky because you have to URI encode the SVG and define it as shown in this example.  If you've got an SVG icon with a simple path and your icon is 16px square then you can copy the definition from this example and insert your path data into the ",a("code",{children:"path d='...'"})," part."]}),f("p",{children:["Note that you can't use ",a("code",{children:"currentColor"})," to set the stroke or fill color.  You can define separate ",a("code",{children:"--arrow-down"})," ","properties for you light and dark themes, or you can use a neutral color like ",a("code",{children:"#888"})," which works well in both cases."]}),a(D,{html:rL,language:"html",caption:"Custom Icon"}),a("h2",{children:"Placeholder"}),f("p",{children:["Another annoying thing about select inputs is that they don't support the ",a("code",{children:"placeholder"})," attribute.  You can work around the problem by adding the ",a("code",{children:"required"})," attribute to the"," ",a("code",{children:"select"})," input and the ",a("code",{children:"hidden"}),","," ",a("code",{children:"disabled"})," and ",a("code",{children:"selected"})," attributes to the first option which contains your placeholder text."]}),a(D,{html:nL,language:"html",caption:"Select Placeholder"})]}),aL=Object.freeze(Object.defineProperty({__proto__:null,default:lL},Symbol.toStringTag,{value:"Module"})),oL=`<input
  type="text" name="my-input"
  placeholder="Placeholder text"
/>
`,iL=`<input
  type="text" name="my-input"
  placeholder="Placeholder text"
  class="wide"
/>
`,sL=`<div class="grid-2 gap-4">
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
`,cL=()=>f("div",{children:[a("h1",{children:"Text Input"}),a("p",{children:"Text inputs are perhaps the most common kind of input."}),a(D,{html:oL,language:"html",caption:"Text Input"}),f("p",{children:["Add the ",a("code",{children:"wide"})," class to make it stretch to fill the container."]}),a(D,{html:iL,language:"html",caption:"Wide Text Input"}),f("p",{children:["You can use the ",a(Le,{to:"/utilities/grid",text:"grid"})," utility classes to group inputs together on the same line."]}),a(D,{html:sL,language:"html",caption:"Text Grid"})]}),dL=Object.freeze(Object.defineProperty({__proto__:null,default:cL},Symbol.toStringTag,{value:"Module"})),uL=`<textarea
  rows="5"
  placeholder="I like badgers because..."
/></textarea>
`,hL=`<textarea
  rows="5" class="wide"
  placeholder="I like badgers because..."
/></textarea>
`,fL=()=>f("div",{children:[a("h1",{children:"Text Area Input"}),f("p",{children:["Text area inputs are much like ",a(Le,{to:"/form/text",text:"text inputs"}),"."]}),f("p",{children:["One thing to note (that always catches me out) - if you want placeholder text to appear then you have to make sure there is ",a("em",{children:"nothing"})," ","(not even a newline) between the opening and closing ",a("code",{children:"textarea"})," tags."]}),a(D,{html:uL,language:"html",caption:"Text Area Input",expand:!0}),f("p",{children:["Add the ",a("code",{children:"wide"})," class to make it stretch to fill the container."]}),a(D,{html:hL,language:"html",caption:"Wide Text Area Input",expand:!0})]}),pL=Object.freeze(Object.defineProperty({__proto__:null,default:fL},Symbol.toStringTag,{value:"Module"})),gL=()=>f("div",{className:"prose",children:[a("h1",{children:"What's Wrong With It?"}),a("p",{className:"intro",children:"There are many, many CSS toolkits and UI frameworks already out there to choose from. If you're looking for something that's stable, reliable, comprehensive and well-supported then this probably isn't for you."}),a("h2",{children:"Work in Progress"}),a("p",{children:"This is a work in progress.  It started out life as an ad-hoc collection of CSS classes that I copy and pasted between projects.  Then it became part of Bader UI, a collection of React components implementing some basic UI widgets.  Now it's being moved out into its own module which concentrates on just the CSS without any dependency on React."}),a("p",{children:"One of the reasons that I'm moving it into a new module is because it gives me the opportunity to break backwards compatibility.  There are some things that, given the chance to do again, I would do differently. This gives me that chance and hopefully I won't make too many bad decisions that I later come to regret.  But until I've had a chance to eat my own dog food and build a few sites with it, I can't predict what's going to work well and what isn't."}),a("p",{children:"I'm also migrating everything to use modern CSS techniques which are now well supported by browsers.  That means that a lot of things that were previously hard become much easier.  But different."}),a("p",{children:"As a result, this module is still in a state of flux.  If you build anything with it now then there's a good chance that something will break in the near future."}),a("h2",{children:"Opinionated and Selfish Software"}),f("p",{children:["This is based on my personal collection of CSS styles and utility classes that I use on a daily basis in my job building web sites for clients. It's Open Source and you're welcome to use it but be aware that it's something that I built for ",a("em",{children:"me"})," to help"," ",a("em",{children:"me"})," get my job done."]}),a("p",{children:"I didn't build it for you (unless you're one of my clients) and I don't really have the time or inclination to promote it, increase the user base or provide unpaid support for it.  It's not my intention for this to be the next great CSS toolkit - there are plenty of those already. My goal isn't to change the World, only to make it a slightly better place."}),a("p",{children:"So be warned that it does things the way I like to do them.  You may not agree with all my decisions, but that's fine.  They're my decisions to make, not yours.  It's free software (in both senses: free speech and free beer) and if you don't like it then you're entitled to a full refund of the price you paid."}),a("p",{children:"On the plus-side, the Badger-UI toolkit contains a lot of tried and tested techniques for managing web site styles that have been honed over nearly 30 years of experience.  It contains the features that I can't live without when I'm building a web site.  Of course, you may have different ideas about the best way to do it, but this is what works for me.  It's supposed to be a reasonable starting point not the final destination."}),a("h2",{children:"Some Assembly Required"}),a("p",{children:"If you have a good working knowledge of modern CSS and SASS then you should be able to easily adapt it to your needs.  Nearly everything is customisable, either through SASS variables, CSS custom properties, or by using the provided scripts to build your own toolkit."}),f("p",{children:["You don't need to buy in to the whole package.  As well as being customisable it's also modular.  With a small amount of effort you can configure it to include the bits your want and ignore the rest. Or you can browse the source code and borrow the ",a("i",{children:"ideas"})," that you think are useful."]}),a("p",{children:"Just remember that this is aimed more at people who already know how to build web sites and are familiar with CSS. If you're looking for a fully-featured, widely used and well supported UI toolkit that does everything for you then there are plenty of others to choose from."}),a("p",{children:"If you don't like the sound of that then these probably aren't the badgers you're looking for.  You can go about your business. Move along."})]}),mL=Object.freeze(Object.defineProperty({__proto__:null,default:gL},Symbol.toStringTag,{value:"Module"})),vL=()=>f("div",{className:"prose",children:[a("h1",{children:"What's Good About It?"}),a("p",{className:"intro",children:"If you're wondering what makes Badger CSS better than all the other CSS frameworks and UI toolkits out there then the short and simple answer is that it isn't.  It's just another one to add to the pile."}),a("h2",{children:"A Solid Foundation"}),a("p",{children:"Badger CSS is a collection of tools and techniques that I've built up over many years (nearly 30) of building web sites.  It's what works for me and maybe it will work for you too.  But I'm not making any promises."}),a("p",{children:"It's supposed to be a starting point, not a destination.  If you're building a web site and you want a reasonable foundation to build your styles on then it might be better for you than a more fully-featured toolkit that has everything including the kitchen sink."}),a("h2",{children:"Small(ish) and Simple"}),a("p",{children:"The default Badger CSS stylesheet is around 15kb minimised and compressed (around 100kb uncompressed).  That includes all 16 color ranges which you probably aren't ever going to need in practice. If you define your own palette with a limited set of colors then you can reduce the size a fair bit."}),a("h2",{children:"Modern CSS"}),a("p",{children:"It is based on modern CSS techniques and works in all modern browsers. In particular it makes heavy use of CSS custom properties that you can easily change as required. Behind the scenes it is built using SASS (specifically SCSS) which gives you more opportunities for configuring and extending it."}),a("h2",{children:"Color Management"}),f("p",{children:["Badger CSS uses a novel approach to defining and selecting"," ",a(Le,{to:"/colors/ranges",text:"color ranges"}),".  The color palette was created using ",a("a",{href:"https://abw.github.io/badger-color",children:"Badger Color"})," (which itself was created for this specific task) and you can use it to create your own custom palettes if necessary. The palette data that it generates can be automatically expanded out to SASS component files, ready to be used in Badger CSS."]}),f("p",{children:["You can easily change the hues of the standard palette to match your ",a(Le,{to:"/colors/brand",text:"brand colors"}),".  It will automatically create greyscale color ranges based on your primary brand color."]}),f("p",{children:["The use of ",a(Le,{to:"/colors/variables",text:"CSS custom properties"})," ","to define color ranges, and CSS class scopes to select them, makes it easy to create UI components that work automatically with any color range. It also makes it easy to define different color schemes for light and dark themes."]}),a("h2",{children:"Utility Classes"}),f("p",{children:["Badger CSS comes with a core set of"," ",a(Le,{to:"/utilities",text:"utility classes"})," for ad-hoc styling. They are intentionally limited to the kind of things that I find myself using all the time.  If you prefer the approach of"," ",a("a",{href:"https://tailwindcss.com/",children:"Tailwind"})," that provides CSS classes for absolutely everything then you know where to find it."]}),f("p",{children:["I'm not knocking Tailwind, by the way.  CSS utility classes are an ",a("em",{children:"extremely"}),` useful set of tools to have in your toolkit. I just think they should be limited in their scope and not a replacement for writing "proper" CSS when it's more appropriate to do so.`]}),a("h2",{children:"Form Styling"}),f("p",{children:["Styling ",a(Le,{to:"/forms",text:"forms"})," is not much fun. I have wasted many hours, days, even weeks of my life trying to get form styling just right and I never want to have to do it again."]}),f("p",{children:["If you've got better things to do than trying to figure out why your ",a("code",{children:"select"})," component is 1 pixel shorter than your text ",a("code",{children:"input"})," component then take a look at what Badger CSS has to offer.  It provides basic styles for all the standard form components and has smoothed over a lot of the problems so you don't have to worry too much about them.  Spend the time you save playing with your kids or flying a kite."]}),a("h2",{children:"UI Components"}),f("p",{children:["Badger CSS has styling for a limited set of UI components (at the time of writing it's ",a("em",{children:"very"})," limited, but more may be coming soon). It's not really supposed to be a complete UI toolkit (because the World already has enough of them), but rather to be a foundation on which UI toolkits can be built."]}),f("p",{children:["Experience has taught me that off-the-shelf UI components (even ones that I've written myself) often need a fair bit of tweaking to match the styling for a particular site.  Sometimes it's easier just to write them from scratch as they're needed.  CSS has come a long way since the days when we relied on toolkits like"," ",a("a",{href:"https://getbootstrap.com/",children:"Bootstrap"})," to provide a consistent cross-browser experience.  Hopefully I will never again have to go searching through the Bootstrap source to figure out how they worked around a particular problem with IE."]}),a("p",{children:"At the very least, I won't be adding many more UI components until a) I've made it easy to select only the components that you want for a particular site and b) when I've convinced myself that something can be added that's sufficiently generic to warrant inclusion.  Watch this space."})]}),yL=Object.freeze(Object.defineProperty({__proto__:null,default:vL},Symbol.toStringTag,{value:"Module"})),bL=`<link
  rel="stylesheet"
  href="https://unpkg.com/@abw/badger-css/dist/styles/badger.min.css"
/>`,wL=`## using npm
$ npm add @abw/badger-css

## using yarn
$ yarn add @abw/badger-css

## using pnpm
$ pnpm add @abw/badger-css`,xL="import '@abw/badger-css/styles/badger.min.css';",SL="@import '@abw/badger-css/styles/badger.scss';",CL=`$ git clone https://github.com/abw/badger-css.git
$ cd badger-css
$ sass styles/badger.scss > your-badger-file.css`,kL=()=>f("div",{children:[a("h1",{children:"Installation"}),a("h2",{children:"No Installation Required!"}),f("p",{children:["You don't need to install anything to get starting using Badger CSS in a website.  Simply add the following tag to the"," ",a("code",{children:"<head>"})," section of your web page."]}),a(Je,{code:bL,caption:"Unpkg Link",language:"html",className:"mar-b-8",expand:!0}),a("h2",{children:"Adding to a Javascript Project"}),f("p",{children:["If you want to configure, modify or adapt Badger CSS then you should add ",a("code",{children:"@abw/badger-css"})," to your Javascript project using your favourite package manager."]}),a(Je,{code:wL,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0}),a("h2",{children:"Importing the CSS"}),a("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script like so:"}),a(Je,{code:xL,caption:"Importing CSS",language:"js",className:"mar-b-8",expand:!0}),f("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",a("code",{children:"node_modules"})," directory."]}),a("h2",{children:"Importing the SCSS"}),a("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components.  This gives you the flexibility to configure the default options, or to pick and choose which components you want to include."}),a("p",{children:"Add the following line to your main SCSS stylesheet source."}),a(Je,{code:SL,caption:"Importing SCSS",language:"scss",className:"mar-b-8",expand:!0}),a("h2",{children:"Going it Alone"}),f("p",{children:["If you're not using Javascript but want to play with the SCSS source files then you can check out the project repository from Github and run ",a("code",{children:"sass"})," to compile the source files into CSS."]}),a(Je,{code:CL,caption:"CSS from SASS",language:"shell",className:"mar-b-8",expand:!0})]}),_L=Object.freeze(Object.defineProperty({__proto__:null,default:kL},Symbol.toStringTag,{value:"Module"})),$L=e=>U.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 717 337",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},U.createElement("path",{className:"white",d:"M248.362,204.8C251.303,208.841 251.506,216.92 246.886,220.486C247.235,215.811 245.076,210.416 243.385,207.987C242.142,206.2 237.32,201.909 232.525,201.457C236.319,199.212 245.27,200.55 248.362,204.8ZM380.931,288.851C382.012,292.919 365.895,290.457 365.767,303.096C365.703,309.466 368.575,313.608 364.949,314.116C360.977,314.673 360.493,310.692 359.8,305.449C358.316,294.227 366.194,290.723 373.729,288.466C380.03,286.58 380.512,287.273 380.931,288.851ZM250.509,198.166C250.116,197.944 249.715,197.73 249.306,197.524C237.097,191.351 222.986,194.646 217.814,204.876C213.744,212.926 216.415,222.888 223.688,229.775C220.646,228.505 217.677,226.862 214.911,224.779C198.663,212.542 195.441,190.333 199.289,185.248C202.588,180.888 226.299,177.823 242.548,190.06C245.688,192.424 248.324,195.199 250.509,198.166ZM234.492,31.758C231.75,33.423 225.901,22.543 215.941,24.48C210.088,25.619 206.755,23.124 210.523,20.119C221.225,11.585 239.546,28.689 234.492,31.758ZM99.149,58.412C89.72,51.898 79.11,48.569 67.051,51.951C58.397,54.378 52.734,60.065 49.994,67.45C48.707,67.555 47.4,67.691 46.084,67.853C38.149,68.832 29.859,70.741 23.646,72.288C42.126,47.476 64.861,38.817 87.003,38.714L88.566,38.707L88.864,37.173C90.304,29.757 86.13,22.597 75.216,17.044C99.723,11.821 129.948,17.277 146.178,26.501L148.305,27.709L148.955,25.351C149.908,21.892 149.675,13.343 143.798,5.723C174.533,11.177 197.842,21.068 216.166,33.985C250.062,62.777 267.98,100.361 283.213,136.181C299.907,175.44 313.396,212.581 341.026,233.82C341.522,234.342 342.023,234.861 342.528,235.377C350.993,244.039 366.478,256.93 385.23,273.49C387.358,275.369 389.327,277.224 391.08,279.038C386.966,279.245 381.675,280.641 374.911,282.18C352.689,287.237 351.849,297.009 354.41,312.963C355.723,321.141 359.376,324.914 364.644,326.161C344.448,331.711 334.138,335.299 309.216,330.594C270.323,323.25 233.474,308.826 222.734,303.773C222.54,303.387 222.214,303.065 221.786,302.881C207.397,296.693 197.713,288.82 193.624,279.767C195.586,278.724 197.158,277.535 198.531,276.583C199.395,275.985 199.61,274.797 199.011,273.933C198.412,273.069 197.225,272.854 196.361,273.453C193.368,275.527 189.319,279.035 181.419,278.358C180.371,278.268 179.448,279.046 179.359,280.093C179.269,281.14 180.046,282.063 181.094,282.153C184.73,282.464 187.673,282.036 190.117,281.255C194.043,289.991 202.664,297.858 215.527,304.192C190.321,313.397 168.064,307.288 148.128,295.655C126.82,283.221 108.129,264.526 91.308,250.982C77.307,239.708 64.463,232.065 52.581,233.695C45.172,234.711 38.017,239.243 31.166,248.886C20.017,224.385 34.815,199.803 49.449,184.213L50.995,182.566L49.11,181.321C34.813,171.879 18.601,177.687 7.799,189.755C6.995,180.056 11.532,165.892 18.973,152.99C26.481,139.972 37,128.18 48.427,123.711C118.961,110.252 153.156,169.713 188.827,221.409C209.775,251.767 256.49,287.586 345.223,316.241C340.436,301.054 342.628,293.783 346.067,286.802C324.7,276.815 298.269,260.277 280.877,228.797C233.283,142.653 212.43,81.347 143.665,64.082C131.685,61.074 116.053,57.87 99.149,58.412ZM99.066,72.542C97.614,80.151 74.887,58.073 70.407,69.969C62.107,92.007 54.173,79.428 56.142,73.447C66.246,42.754 100.4,65.551 99.066,72.542Z",style:{fill:"white"}}),U.createElement("path",{className:"black",d:"M48.845,71.376C48.085,71.452 47.319,71.538 46.55,71.633C36.384,72.888 25.625,75.704 19.567,77.251L14.706,78.493L17.519,74.338C36.933,45.669 61.411,35.483 85.316,34.929C85.679,28.465 80.142,22.804 68.715,18.305L63.513,16.258L68.883,14.704C94.004,7.433 126.953,12.429 145.602,21.872C145.715,17.476 143.99,10.119 137.262,4.358L132.173,0L138.793,1.03C164.858,5.083 185.888,12.137 203.193,21.438C203.366,21.5 203.539,21.563 203.712,21.626C205.114,17.121 209.176,13.252 216.656,13.924C236.466,15.704 240.708,25.62 241.751,43.904C266.891,65.236 284.026,95.363 297.467,125.916C309.511,153.29 318.589,181.001 327.822,202.999C331.443,211.626 335.086,219.374 338.942,225.872C340.965,228.196 343.066,230.479 345.252,232.715C353.685,241.344 369.071,254.139 387.751,270.635C391.391,273.849 394.564,277.022 397.067,280.061C399.65,281.424 401.411,284.251 402.569,289.316C402.766,289.952 402.91,290.575 403,291.183C403.044,291.476 403.078,291.773 403.104,292.073C403.406,293.909 403.652,295.979 403.849,298.307C404.631,307.557 401.813,319.773 387.422,323.48C384.617,324.202 381.912,324.872 379.338,325.409C375.566,326.623 372.295,327.675 372.296,327.675C350.779,335.844 336.841,339.686 308.509,334.336C267.627,326.617 228.986,311.137 219.844,306.606C192.192,317.895 167.885,311.593 146.209,298.945C124.732,286.413 105.872,267.6 88.919,253.949C82.285,248.607 75.954,244.066 69.867,241.062C64.049,238.191 58.481,236.73 53.099,237.468C45.892,238.456 39.128,243.397 32.519,253.689L30.774,256.406L29.24,253.565C15.116,227.399 29.491,200.652 45.081,183.337C31.813,176.104 17.177,183.299 8.174,195.3L5.878,198.362L4.821,194.683C1.901,184.524 6.568,166.875 15.674,151.087C21.122,141.64 28.135,132.887 35.912,126.766C24.827,130.039 12.898,135.014 0,141.953C13.007,107.592 30.082,86.63 48.343,74.289C48.468,73.299 48.636,72.327 48.845,71.376ZM248.362,204.8C245.27,200.55 236.319,199.212 232.525,201.457C237.32,201.909 242.142,206.2 243.385,207.987C245.076,210.416 247.235,215.811 246.886,220.486C251.506,216.92 251.303,208.841 248.362,204.8ZM380.931,288.851C380.512,287.273 380.03,286.58 373.729,288.466C366.194,290.723 358.316,294.227 359.8,305.449C360.493,310.692 360.977,314.673 364.949,314.116C368.575,313.608 365.703,309.466 365.767,303.096C365.895,290.457 382.012,292.919 380.931,288.851ZM250.509,198.166C248.324,195.199 245.688,192.424 242.548,190.06C226.299,177.823 202.588,180.888 199.289,185.248C195.441,190.333 198.663,212.542 214.911,224.779C217.677,226.862 220.646,228.505 223.688,229.775C216.415,222.888 213.744,212.926 217.814,204.876C222.986,194.646 237.097,191.351 249.306,197.524C249.715,197.73 250.116,197.944 250.509,198.166ZM234.492,31.758C239.546,28.689 221.225,11.585 210.523,20.119C206.755,23.124 210.088,25.619 215.941,24.48C225.901,22.543 231.75,33.423 234.492,31.758ZM99.149,58.412C116.053,57.87 131.685,61.074 143.665,64.082C212.43,81.347 233.283,142.653 280.877,228.797C298.269,260.277 324.7,276.815 346.067,286.802C342.628,293.783 340.436,301.054 345.223,316.241C256.49,287.586 209.775,251.767 188.827,221.409C153.156,169.713 118.961,110.252 48.427,123.711C37,128.18 26.481,139.972 18.973,152.99C11.532,165.892 6.995,180.056 7.799,189.755C18.601,177.687 34.813,171.879 49.11,181.321L50.995,182.566L49.449,184.213C34.815,199.803 20.017,224.385 31.166,248.886C38.017,239.243 45.172,234.711 52.581,233.695C64.463,232.065 77.307,239.708 91.308,250.982C108.129,264.526 126.82,283.221 148.128,295.655C168.064,307.288 190.321,313.397 215.527,304.192C202.664,297.858 194.043,289.991 190.117,281.255C187.673,282.036 184.73,282.464 181.094,282.153C180.046,282.063 179.269,281.14 179.359,280.093C179.448,279.046 180.371,278.268 181.419,278.358C189.319,279.035 193.368,275.527 196.361,273.453C197.225,272.854 198.412,273.069 199.011,273.933C199.61,274.797 199.395,275.985 198.531,276.583C197.158,277.535 195.586,278.724 193.624,279.767C197.713,288.82 207.397,296.693 221.786,302.881C222.214,303.065 222.54,303.387 222.734,303.773C233.474,308.826 270.323,323.25 309.216,330.594C334.138,335.299 344.448,331.711 364.644,326.161C359.376,324.914 355.723,321.141 354.41,312.963C351.849,297.009 352.689,287.237 374.911,282.18C381.675,280.641 386.966,279.245 391.08,279.038C389.327,277.224 387.358,275.369 385.23,273.49C366.478,256.93 350.993,244.039 342.528,235.377C342.023,234.861 341.522,234.342 341.026,233.82C313.396,212.581 299.907,175.44 283.213,136.181C267.98,100.361 250.062,62.777 216.166,33.985C197.842,21.068 174.533,11.177 143.798,5.723C149.675,13.343 149.908,21.892 148.955,25.351L148.305,27.709L146.178,26.501C129.948,17.277 99.723,11.821 75.216,17.044C86.13,22.597 90.304,29.757 88.864,37.173L88.566,38.707L87.003,38.714C64.861,38.817 42.126,47.476 23.646,72.288C29.859,70.741 38.149,68.832 46.084,67.853C47.4,67.691 48.707,67.555 49.994,67.45C52.734,60.065 58.397,54.378 67.051,51.951C79.11,48.569 89.72,51.898 99.149,58.412ZM99.066,72.542C100.4,65.551 66.246,42.754 56.142,73.447C54.173,79.428 62.107,92.007 70.407,69.969C74.887,58.073 97.614,80.151 99.066,72.542Z"}),U.createElement("path",{className:"badger",d:"M347.242,14.148C348.016,13.915 349.256,13.664 350.96,13.392C352.664,13.121 354.406,12.986 356.188,12.986C357.892,12.986 359.421,13.102 360.777,13.334C362.132,13.567 363.274,14.031 364.204,14.729C365.133,15.426 365.83,16.374 366.295,17.575C366.76,18.775 366.992,20.344 366.992,22.28L366.992,33.666C368.928,32.891 370.768,32.349 372.511,32.039C374.253,31.729 376.17,31.574 378.261,31.574C381.979,31.574 385.503,32.233 388.834,33.549C392.164,34.866 395.107,36.783 397.663,39.3C400.219,41.817 402.233,44.935 403.704,48.653C405.176,52.37 405.912,56.669 405.912,61.548C405.912,66.583 405.157,70.978 403.646,74.735C402.136,78.491 400.025,81.608 397.315,84.087C394.604,86.565 391.293,88.444 387.381,89.722C383.47,90.999 379.152,91.638 374.428,91.638C369.316,91.638 364.978,91.038 361.416,89.838C357.853,88.637 354.832,87.146 352.354,85.365C348.946,82.964 347.242,79.866 347.242,76.071L347.242,14.148ZM374.428,76.071C377.99,76.071 380.759,74.851 382.734,72.411C384.709,69.971 385.697,66.35 385.697,61.548C385.697,56.669 384.69,53.029 382.676,50.628C380.662,48.227 377.952,47.026 374.544,47.026C372.995,47.026 371.659,47.181 370.536,47.491C369.413,47.801 368.193,48.265 366.876,48.885L366.876,74.212C367.728,74.754 368.754,75.199 369.955,75.548C371.155,75.896 372.646,76.071 374.428,76.071ZM439.023,31.574C443.205,31.574 447.02,32 450.466,32.852C453.913,33.704 456.856,35.002 459.296,36.744C461.735,38.487 463.614,40.694 464.93,43.366C466.247,46.039 466.905,49.195 466.905,52.835L466.905,78.859C466.905,80.873 466.344,82.518 465.221,83.796C464.098,85.074 462.762,86.178 461.213,87.108C456.178,90.128 449.091,91.638 439.952,91.638C435.847,91.638 432.149,91.251 428.857,90.477C425.565,89.702 422.738,88.54 420.376,86.991C418.014,85.442 416.194,83.467 414.916,81.066C413.638,78.665 412.999,75.877 412.999,72.701C412.999,67.357 414.586,63.252 417.762,60.387C420.938,57.521 425.856,55.739 432.517,55.042L447.736,53.416L447.736,52.603C447.736,50.356 446.748,48.749 444.773,47.781C442.798,46.813 439.952,46.329 436.234,46.329C433.291,46.329 430.425,46.639 427.637,47.258C424.849,47.878 422.332,48.653 420.086,49.582C419.079,48.885 418.227,47.82 417.53,46.387C416.833,44.954 416.484,43.463 416.484,41.914C416.484,39.9 416.968,38.293 417.936,37.093C418.904,35.892 420.395,34.866 422.409,34.014C424.655,33.162 427.308,32.542 430.367,32.155C433.427,31.768 436.312,31.574 439.023,31.574ZM439.952,77.232C441.269,77.232 442.721,77.097 444.309,76.826C445.896,76.555 447.078,76.187 447.852,75.722L447.852,66.428L439.487,67.125C437.319,67.28 435.537,67.744 434.143,68.519C432.749,69.294 432.052,70.455 432.052,72.004C432.052,73.553 432.652,74.812 433.853,75.78C435.053,76.748 437.086,77.232 439.952,77.232ZM476.548,61.548C476.548,56.436 477.323,52.002 478.872,48.246C480.421,44.489 482.57,41.372 485.32,38.894C488.069,36.415 491.283,34.576 494.962,33.375C498.641,32.175 502.611,31.574 506.871,31.574C508.42,31.574 509.93,31.71 511.402,31.981C512.873,32.252 514.074,32.581 515.003,32.968L515.003,14.148C515.778,13.915 517.017,13.664 518.721,13.392C520.425,13.121 522.167,12.986 523.949,12.986C525.653,12.986 527.182,13.102 528.538,13.334C529.893,13.567 531.036,14.031 531.965,14.729C532.895,15.426 533.592,16.374 534.056,17.575C534.521,18.775 534.753,20.344 534.753,22.28L534.753,77.349C534.753,80.989 533.049,83.893 529.642,86.062C527.395,87.533 524.491,88.831 520.928,89.954C517.365,91.077 513.26,91.638 508.613,91.638C503.579,91.638 499.067,90.941 495.079,89.547C491.09,88.153 487.721,86.139 484.971,83.506C482.222,80.873 480.13,77.716 478.697,74.037C477.265,70.358 476.548,66.195 476.548,61.548ZM509.543,47.026C505.36,47.026 502.146,48.227 499.9,50.628C497.654,53.029 496.531,56.669 496.531,61.548C496.531,66.35 497.576,69.971 499.668,72.411C501.759,74.851 504.779,76.071 508.73,76.071C510.124,76.071 511.382,75.858 512.505,75.432C513.628,75.006 514.5,74.522 515.119,73.979L515.119,48.42C513.57,47.491 511.711,47.026 509.543,47.026ZM574.603,31.574C579.017,31.574 583.025,32.136 586.627,33.259C590.228,34.382 593.268,35.834 595.747,37.616C597.296,38.7 598.516,39.9 599.407,41.217C600.297,42.534 600.743,44.238 600.743,46.329L600.743,86.991C600.743,91.096 599.968,94.64 598.419,97.622C596.87,100.604 594.759,103.082 592.087,105.057C589.415,107.032 586.278,108.484 582.677,109.414C579.075,110.343 575.222,110.808 571.117,110.808C564.069,110.808 558.531,109.859 554.504,107.961C550.476,106.064 548.462,102.985 548.462,98.725C548.462,96.944 548.83,95.376 549.566,94.02C550.302,92.665 551.135,91.638 552.064,90.941C554.31,92.181 556.847,93.226 559.674,94.078C562.501,94.93 565.424,95.356 568.445,95.356C572.627,95.356 575.958,94.659 578.436,93.265C580.915,91.871 582.154,89.625 582.154,86.527L582.154,84.668C578.979,86.062 575.106,86.759 570.536,86.759C567.051,86.759 563.74,86.236 560.603,85.191C557.466,84.145 554.717,82.518 552.354,80.311C549.992,78.104 548.095,75.257 546.662,71.772C545.229,68.287 544.512,64.143 544.512,59.341C544.512,54.616 545.268,50.511 546.778,47.026C548.288,43.541 550.379,40.656 553.051,38.371C555.724,36.086 558.899,34.382 562.578,33.259C566.257,32.136 570.265,31.574 574.603,31.574ZM581.806,48.42C581.263,48.11 580.47,47.801 579.424,47.491C578.378,47.181 577.081,47.026 575.532,47.026C571.737,47.026 568.89,48.091 566.993,50.221C565.095,52.351 564.146,55.391 564.146,59.341C564.146,63.833 565.095,67.067 566.993,69.042C568.89,71.017 571.311,72.004 574.254,72.004C577.43,72.004 579.947,71.269 581.806,69.797L581.806,48.42ZM642.799,91.638C638.229,91.638 633.989,90.999 630.078,89.722C626.166,88.444 622.758,86.527 619.854,83.971C616.949,81.415 614.665,78.201 612.999,74.328C611.334,70.455 610.502,65.924 610.502,60.735C610.502,55.623 611.334,51.228 612.999,47.549C614.665,43.87 616.853,40.849 619.563,38.487C622.274,36.125 625.372,34.382 628.858,33.259C632.343,32.136 635.906,31.574 639.546,31.574C643.651,31.574 647.388,32.194 650.757,33.433C654.126,34.672 657.031,36.376 659.471,38.545C661.91,40.714 663.808,43.308 665.163,46.329C666.519,49.35 667.197,52.641 667.197,56.204C667.197,58.837 666.461,60.851 664.989,62.245C663.518,63.64 661.465,64.53 658.832,64.917L630.136,69.216C630.988,71.772 632.73,73.689 635.364,74.967C637.997,76.245 641.018,76.884 644.426,76.884C647.601,76.884 650.602,76.477 653.429,75.664C656.256,74.851 658.561,73.902 660.342,72.818C661.581,73.592 662.627,74.676 663.479,76.071C664.331,77.465 664.757,78.936 664.757,80.485C664.757,83.971 663.13,86.565 659.877,88.269C657.399,89.586 654.611,90.477 651.512,90.941C648.414,91.406 645.51,91.638 642.799,91.638ZM639.546,45.98C637.687,45.98 636.08,46.29 634.725,46.91C633.369,47.529 632.266,48.323 631.414,49.292C630.562,50.26 629.923,51.344 629.497,52.545C629.071,53.745 628.819,54.965 628.742,56.204L648.608,52.951C648.376,51.402 647.524,49.853 646.052,48.304C644.581,46.755 642.412,45.98 639.546,45.98ZM696.473,89.663C695.699,89.896 694.479,90.128 692.814,90.36C691.149,90.593 689.425,90.709 687.644,90.709C685.94,90.709 684.41,90.593 683.055,90.36C681.699,90.128 680.557,89.663 679.628,88.966C678.698,88.269 677.982,87.321 677.478,86.12C676.975,84.919 676.723,83.351 676.723,81.415L676.723,46.561C676.723,44.78 677.052,43.25 677.711,41.972C678.369,40.694 679.318,39.552 680.557,38.545C681.796,37.538 683.326,36.628 685.146,35.815C686.966,35.002 688.922,34.285 691.013,33.666C693.104,33.046 695.273,32.562 697.519,32.213C699.765,31.865 702.011,31.691 704.257,31.691C707.975,31.691 710.918,32.407 713.087,33.84C715.256,35.273 716.34,37.616 716.34,40.869C716.34,41.953 716.185,43.018 715.875,44.063C715.565,45.109 715.178,46.058 714.713,46.91C713.087,46.91 711.422,46.987 709.718,47.142C708.014,47.297 706.349,47.529 704.722,47.839C703.096,48.149 701.566,48.478 700.133,48.827C698.7,49.175 697.48,49.582 696.473,50.047L696.473,89.663Z"}),U.createElement("path",{className:"css",d:"M586.337,162.306C584.4,162.306 582.561,162.616 580.818,163.236C579.075,163.855 577.565,164.765 576.287,165.966C575.009,167.166 573.983,168.657 573.208,170.439C572.434,172.22 572.047,174.311 572.047,176.712C572.047,181.514 573.421,185.116 576.171,187.517C578.92,189.918 582.27,191.119 586.22,191.119C588.544,191.119 590.558,190.847 592.262,190.305C593.966,189.763 595.476,189.182 596.793,188.563C598.342,189.647 599.503,190.828 600.278,192.106C601.052,193.384 601.44,194.914 601.44,196.695C601.44,199.871 599.929,202.33 596.909,204.072C593.888,205.815 589.706,206.686 584.361,206.686C579.482,206.686 575.067,205.97 571.117,204.537C567.167,203.104 563.779,201.09 560.952,198.496C558.125,195.901 555.937,192.784 554.388,189.143C552.838,185.503 552.064,181.476 552.064,177.061C552.064,171.949 552.897,167.476 554.562,163.642C556.227,159.809 558.492,156.652 561.358,154.174C564.224,151.695 567.535,149.837 571.291,148.597C575.048,147.358 579.017,146.738 583.2,146.738C588.776,146.738 593.075,147.745 596.095,149.759C599.116,151.773 600.626,154.367 600.626,157.543C600.626,159.015 600.278,160.389 599.581,161.667C598.884,162.945 598.071,164.049 597.141,164.978C595.824,164.359 594.237,163.759 592.378,163.178C590.519,162.597 588.505,162.306 586.337,162.306ZM657.786,188.098C657.786,193.984 655.579,198.593 651.164,201.923C646.749,205.254 640.243,206.919 631.646,206.919C628.393,206.919 625.372,206.686 622.584,206.222C619.796,205.757 617.414,205.041 615.439,204.072C613.464,203.104 611.915,201.884 610.792,200.413C609.669,198.941 609.107,197.199 609.107,195.185C609.107,193.326 609.495,191.758 610.269,190.48C611.044,189.202 611.973,188.137 613.057,187.285C615.304,188.524 617.879,189.628 620.783,190.596C623.688,191.564 627.038,192.048 630.833,192.048C633.234,192.048 635.073,191.699 636.351,191.002C637.629,190.305 638.268,189.376 638.268,188.214C638.268,187.13 637.803,186.278 636.874,185.658C635.945,185.039 634.396,184.535 632.227,184.148L628.742,183.451C622.003,182.134 616.988,180.062 613.696,177.235C610.405,174.408 608.759,170.361 608.759,165.095C608.759,162.229 609.379,159.634 610.618,157.311C611.857,154.987 613.6,153.051 615.846,151.502C618.092,149.953 620.783,148.752 623.92,147.9C627.057,147.048 630.523,146.622 634.318,146.622C637.184,146.622 639.875,146.835 642.392,147.261C644.91,147.687 647.098,148.326 648.957,149.178C650.815,150.03 652.287,151.134 653.371,152.489C654.456,153.845 654.998,155.452 654.998,157.311C654.998,159.092 654.669,160.622 654.01,161.9C653.352,163.178 652.519,164.243 651.512,165.095C650.893,164.707 649.963,164.301 648.724,163.875C647.485,163.449 646.13,163.061 644.658,162.713C643.186,162.364 641.695,162.074 640.185,161.842C638.675,161.609 637.3,161.493 636.061,161.493C633.505,161.493 631.53,161.784 630.136,162.364C628.742,162.945 628.044,163.855 628.044,165.095C628.044,165.947 628.432,166.644 629.206,167.186C629.981,167.728 631.452,168.231 633.621,168.696L637.223,169.509C644.658,171.213 649.944,173.556 653.081,176.538C656.218,179.52 657.786,183.373 657.786,188.098ZM714.946,188.098C714.946,193.984 712.738,198.593 708.324,201.923C703.909,205.254 697.403,206.919 688.806,206.919C685.553,206.919 682.532,206.686 679.744,206.222C676.955,205.757 674.574,205.041 672.599,204.072C670.624,203.104 669.075,201.884 667.952,200.413C666.829,198.941 666.267,197.199 666.267,195.185C666.267,193.326 666.654,191.758 667.429,190.48C668.203,189.202 669.133,188.137 670.217,187.285C672.463,188.524 675.039,189.628 677.943,190.596C680.847,191.564 684.197,192.048 687.992,192.048C690.393,192.048 692.233,191.699 693.511,191.002C694.789,190.305 695.428,189.376 695.428,188.214C695.428,187.13 694.963,186.278 694.034,185.658C693.104,185.039 691.555,184.535 689.387,184.148L685.901,183.451C679.163,182.134 674.148,180.062 670.856,177.235C667.564,174.408 665.919,170.361 665.919,165.095C665.919,162.229 666.538,159.634 667.777,157.311C669.017,154.987 670.759,153.051 673.005,151.502C675.252,149.953 677.943,148.752 681.08,147.9C684.217,147.048 687.683,146.622 691.478,146.622C694.343,146.622 697.035,146.835 699.552,147.261C702.069,147.687 704.257,148.326 706.116,149.178C707.975,150.03 709.447,151.134 710.531,152.489C711.615,153.845 712.157,155.452 712.157,157.311C712.157,159.092 711.828,160.622 711.17,161.9C710.512,163.178 709.679,164.243 708.672,165.095C708.053,164.707 707.123,164.301 705.884,163.875C704.645,163.449 703.289,163.061 701.818,162.713C700.346,162.364 698.855,162.074 697.345,161.842C695.834,161.609 694.46,161.493 693.22,161.493C690.665,161.493 688.689,161.784 687.295,162.364C685.901,162.945 685.204,163.855 685.204,165.095C685.204,165.947 685.591,166.644 686.366,167.186C687.14,167.728 688.612,168.231 690.781,168.696L694.382,169.509C701.818,171.213 707.104,173.556 710.241,176.538C713.377,179.52 714.946,183.373 714.946,188.098Z"})),EL=()=>a("div",{children:f("div",{className:"mobile block-center pad-t-8",children:[a($L,{className:"badger-css"}),a("h1",{className:"intro mar-t-8",children:"Modern, minimal CSS presets"}),f("p",{children:["You've probably heard of CSS ",a("b",{children:"reset"})," stylesheets that provide sensible defaults for HTML elements to smooth out some of the inconsistencies between browsers.  And no doubt you're aware of the plethora of fully-featured CSS ",a("b",{children:"toolkits"})," that implement all manner of styles for UI components."]}),f("p",{children:["Badger CSS sits somewhere between the two.  It provides some sensible"," ",a("b",{children:"presets"})," for HTML elements that you can use out of the box and expect to get reasonable results.  It's highly configurable and is really designed to be a starting point for building your own CSS stylesheets, design systems and UI toolkits."]}),f("div",{className:"grid-2 gap-2",children:[a(Le,{to:"demo",text:"Demo",className:"brand button Xbdr-tl-4"}),a(Le,{to:"getting-started/installation",text:"Getting Started",className:"brand button Xbdr-tr-4"}),a(Le,{to:"getting-started/good",text:"What's Good?",className:"brand button Xbdr-bl-4"}),a(Le,{to:"getting-started/bad",text:"What's Bad?",className:"brand button Xbdr-br-4"})]})]})}),TL=Object.freeze(Object.defineProperty({__proto__:null,default:EL},Symbol.toStringTag,{value:"Module"})),NL=`<div class="block-left width-12rem border pad-2">
  Block left
</div>
<div class="block-center width-12rem border pad-2 mar-t-4">
  Block center
</div>
<div class="block-right width-12rem border pad-2 mar-t-4">
  Block right
</div>
`,LL=`<div class="text-left border pad-2 mar-b-2">
  Text on the left
</div>
<div class="text-center border pad-2 mar-b-2">
  Text in the center
</div>
<div class="text-right border pad-2">
  Text on the right
</div>`,IL=`<div class="text-right border pad-4">
  Text on the right
  <div class="text-left border pad-2 mar-v-2">
    Text on the left
  </div>
  Text on the right
</div>`,RL=()=>f("div",{className:"prose",children:[a("h1",{children:"Alignment"}),a("h2",{children:"Text Alignment"}),f("p",{children:["Add the ",a("code",{children:"text-left"}),", ",a("code",{children:"text-center"})," and"," ",a("code",{children:"text-right"})," CSS classes to set the text alignment."]}),a(D,{html:LL,caption:"Text Alignment",expand:!0}),f("p",{children:["Text is aligned left by default making the ",a("code",{children:"text-left"})," ","class ",a("em",{children:"mostly"})," redundant.  However it can be useful to reset the alignment to the left for a block that would otherwise be aligned centrally or to the right"]}),a(D,{html:IL,caption:"Text Left",expand:!0}),a("h2",{children:"Block Alignment"}),f("p",{children:["Add the ",a("code",{children:"block-left"}),", ",a("code",{children:"block-center"})," and"," ",a("code",{children:"block-right"})," CSS classes to align a block to the left, in the center, or on the right, respectively."]}),f("p",{children:["You'll need to set a block width to stop it from expanding to fill the full width of the parent element.  You can do that using one of the"," ",a(Le,{to:"/utilities/widths",text:"width-*"})," utility classes."]}),a(D,{html:NL,caption:"Block Alignment",expand:!0})]}),PL=Object.freeze(Object.defineProperty({__proto__:null,default:RL},Symbol.toStringTag,{value:"Module"})),FL=`<div class="border pad-4">
  This element has a border.
</div>
`,ML=`<div class="grid-1 gap-2">
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
</div>`,OL=`<div class="grid-2 gap-2">
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
`,AL=`<div class="border pad-4 mar-b-2">
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
`,DL=`<div class="grid-3 gap-4 pad-t-2">
  <button class="brand solid">default</button>
  <button class="brand solid bdr-0">bdr-0</button>
  <button class="brand solid square">square</button>
</div>
<div class="grid-3 gap-4 pad-t-2">
  <input type="text" value="default">
  <input type="text" value="bdr-0" class="bdr-0">
  <input type="text" value="square" class="square">
</div>
`,zL=`<div class="bdr-6 surface-1 pad-2 border grid-1 gap-2">
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
</div>`,BL=`<style>
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
`,jL=`// define your own $border-width-values...
$border-width-values: 1, 2, 3, 5, 8, 13, 21, 34;
// ...and/or set the $border-width-prefix...
$border-width-prefix: 'br-wd';

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,UL=`// define your own $border-radius-values...
$border-radius-values: 1, 2, 3, 5, 8, 13, 21, 34;
// ...and/or set the $border-width-prefix...
$border-radius-prefix: 'br-rd';

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,HL=`<div class="grid-1 gap-4">
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
</div>`,WL=({properties:e})=>f("table",{className:"brand celled striped properties wide",children:[a("thead",{children:f("tr",{children:[a("th",{children:"Property"}),a("th",{children:"Default"}),a("th",{children:"Description"})]})}),a("tbody",{children:e.map(n=>f("tr",{children:[a("td",{className:"key nowrap",children:a("code",{children:n[0]})}),a("td",{className:"nowrap",children:n[1]}),a("td",{children:n[2]})]},n[0]))})]}),VL=({sets:e})=>a("div",{className:`grid-${e.length} gap-8 stack-desktop mar-b-8`,children:e.map(n=>f("div",{children:[a("h4",{className:"mar-b-2",children:n.title}),a(WL,{properties:n.properties}),!!n.notes&&a("div",{className:"smallish info alert",children:n.notes})]},n.title))}),GL=()=>f("div",{className:"prose",children:[a("h1",{children:"Borders"}),a("h2",{children:"Border Class"}),f("p",{children:["Add the ",a("code",{children:"border"})," CSS class to an element to give it a border."]}),a(D,{html:FL,caption:"Border",expand:!0}),a("h2",{children:"Border Width"}),f("p",{children:["Add the ",a("code",{children:"bdw-N"})," CSS class to set the border width, where"," ",a("code",{children:"N"})," is in pixel units."]}),a(D,{html:ML,caption:"Border Width",expand:!0}),f("div",{className:"grid-2 gap-8 stack-desktop",children:[f("div",{children:[f("p",{children:["The pre-defined values for ",a("code",{children:"N"})," are"," ",a("code",{children:"0"}),", ",a("code",{children:"1"}),", ",a("code",{children:"2"}),", ",a("code",{children:"3"}),","," ",a("code",{children:"4"}),", ",a("code",{children:"5"}),", ",a("code",{children:"6"}),", ",a("code",{children:"8"})," and"," ",a("code",{children:"10"}),"."]}),f("p",{children:["You can set the ",a("code",{children:"$border-width-values"})," SCSS variable if you want to define a different set of values. You can also use the ",a("code",{children:"$border-width-prefix"})," to define a different prefix for the border width classes if you don't like ",a("code",{children:"bdw"}),"."]}),f("p",{children:["In the example shown here the generated CSS classes would be"," ",a("code",{children:"br-wd-1"}),", ",a("code",{children:"br-wd-2"}),","," ",a("code",{children:"br-wd-3"}),", ",a("code",{children:"br-wd-5"})," and so on."]})]}),a(Je,{code:jL,caption:"Custom Border Widths",language:"scss",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Border Color"}),f("p",{children:["Add the ",a("code",{children:"bdc-N"})," CSS class to set the border color, where"," ",a("code",{children:"N"})," is a color stop (0, 5, 10, etc) for the current color range."]}),a(D,{html:OL,caption:"Border Color"}),a("h2",{children:"Border Radius"}),f("p",{children:["Add the ",a("code",{children:"bdr-N"})," classes to set the radius of borders. The ",a("code",{children:"-N"})," multiplier is a multiple of the base unit radius (0.25rem by default)."]}),a(D,{html:AL,caption:"Border Radius",expand:!0}),f("p",{children:["The ",a("code",{children:"bdr-0"})," class can be used to ",a("i",{children:"explicitly"})," set the border radius to 0. The ",a("code",{children:"square"})," class is an alias for"," ",a("code",{children:"bdr-0"})," with the added benefit of having the"," ",a("code",{children:"!important"})," flag set for when you really need to drive the point home."]}),a("p",{children:"They can be used to remove the corner radius from components which have them by default, like buttons and form fields."}),a(D,{html:DL,caption:"Square Corners",expand:!0}),f("div",{className:"grid-2 gap-8 stack-desktop",children:[f("div",{children:[f("p",{children:["The pre-defined values for ",a("code",{children:"N"})," are"," ",a("code",{children:"0"}),", ",a("code",{children:"1"}),", ",a("code",{children:"2"}),", ",a("code",{children:"3"}),","," ",a("code",{children:"4"}),", ",a("code",{children:"5"}),", ",a("code",{children:"6"}),", ",a("code",{children:"8"})," and"," ",a("code",{children:"10"}),"."]}),f("p",{children:["You can set the ",a("code",{children:"$border-radius-values"})," SCSS variable if you want to define a different set of values. You can also use the ",a("code",{children:"$border-radius-prefix"})," to define a different prefix for the border radius classes if you don't like ",a("code",{children:"bdr"}),"."]}),f("p",{children:["In the example shown here the generated CSS classes would be"," ",a("code",{children:"br-rd-1"}),", ",a("code",{children:"br-rd-2"}),","," ",a("code",{children:"br-rd-3"}),", ",a("code",{children:"br-rd-5"})," and so on."]})]}),a(Je,{code:UL,caption:"Custom Border Radius",language:"scss",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Border Radius Corners"}),a("p",{children:"You can independently set the radius for different corners using these classes."}),f("div",{className:"grid-2 gap-8 stack-desktop",children:[f("table",{className:"brand border lined striped mar-b-8",children:[a("thead",{children:f("tr",{children:[a("th",{children:"Class"}),a("th",{children:"Description"})]})}),f("tbody",{children:[f("tr",{children:[a("td",{children:a("code",{children:"bdr-t-N"})}),a("td",{children:"Top left and top right corner radius"})]}),f("tr",{children:[a("td",{children:a("code",{children:"bdr-b-N"})}),a("td",{children:"Bottom left and bottom right corner radius"})]}),f("tr",{children:[a("td",{children:a("code",{children:"bdr-l-N"})}),a("td",{children:"Top left and bottom left corner radius"})]}),f("tr",{children:[a("td",{children:a("code",{children:"bdr-r-N"})}),a("td",{children:"Top right and bottom right corner radius"})]}),f("tr",{children:[a("td",{children:a("code",{children:"bdr-tl-N"})}),a("td",{children:"Top left corner radius"})]}),f("tr",{children:[a("td",{children:a("code",{children:"bdr-tr-N"})}),a("td",{children:"Top right corner radius"})]}),f("tr",{children:[a("td",{children:a("code",{children:"bdr-bl-N"})}),a("td",{children:"Bottom left corner radius"})]}),f("tr",{children:[a("td",{children:a("code",{children:"bdr-br-N"})}),a("td",{children:"Bottom right corner radius"})]})]})]}),a("div",{children:f(li,{children:["If you set a custom ",a("code",{children:"$border-radius-prefix"})," as shown above then your CSS classes will start with your chosen prefix instead of ",a("code",{children:"bdr"})," as shown here."]})})]}),a(D,{html:zL,caption:"Border Radius Corners",expand:!0}),a("h2",{children:"No Border Required!"}),f("p",{children:["You don't need to have a border displayed to set the border radius. The ",a("code",{children:"bdr-N"})," classes can be used to set the border radius on various components."]}),a(D,{html:HL,caption:"Radius Components",expand:!0}),a("h2",{children:"Border Properties"}),a("p",{children:"The following properties are used to define the border style."}),a(VL,{sets:[{title:"Defaults",properties:[["--border-width",a("code",{children:"1px"},"1px"),"Border width"],["--border-style",a("code",{children:"solid"},"solid"),f("span",{children:["Border style: ",a("code",{children:"solid"}),", ",a("code",{children:"dotted"}),", ",a("code",{children:"dashed"}),", etc."]},"desc")],["--border-radius",a("code",{children:"var(--unit-radius)"},"radius"),"Border radius"],["--border-color",a("code",{children:"var(--color-75)"},"color"),"Border color from current color range"]]},{title:"Dark Theme",properties:[["--border-color",a("code",{children:"var(--color-25)"},"color"),"Border color from current color range"]]}]}),a("h2",{children:"Setting Custom Properties"}),a(D,{html:BL,caption:"Custom Border Style",expand:!0})]}),YL=Object.freeze(Object.defineProperty({__proto__:null,default:GL},Symbol.toStringTag,{value:"Module"})),qL=`<div class="
  violet border pad-4 bdr-2 bdw-2
  fgc-40 bgc-85 hdc-30 bdc-70
">
  <h3>Colors</h3>
  Foreground color violet-40<br/>
  Background color violet-85<br/>
  Heading color violet-30<br/>
  Border color violet-70<br/>
</div>
`,ZL=`<div class="
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
`,QL=`<div class="red grid-3 gap-2">
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
`,KL=`<!-- Explicit color range -->
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
</div>`,XL=`<div>
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
`,JL=["red","brown","orange"],eI=()=>f("div",{className:"prose",children:[a("h1",{children:"Color Utilities"}),a("h2",{children:"Color Classes"}),f("p",{children:["Each of the color ranges defined in your palette has a corresponding class. For example, the ",a("code",{children:"red"})," class can be used to select the red color range.  Some of the colors also have semantic aliases, e.g. ",a("code",{children:"error"})," and ",a("code",{children:"invalid"})," are aliases for"," ",a("code",{children:"red"}),"."]}),f("p",{children:["Selecting a color range doesn't have much of a visible effect by itself.  The important things is that it maps the ",a("code",{children:"--color-N"})," ","CSS custom properties to the equivalent stops from the selected color range.  For example, in the scope of the ",a("code",{children:"red"})," CSS class, the"," ",a("code",{children:"--color-0"})," property is mapped to ",a("code",{children:"--red-0"}),","," ",a("code",{children:"--color-5"})," is mapped to ",a("code",{children:"--red-5"}),","," ",a("code",{children:"--color-10"})," to ",a("code",{children:"--red-10"})," and so on up to 100."]}),f("div",{className:"flex gap-4",children:[JL.map(e=>f("div",{children:[f("h3",{className:"font-mono mar-b-2",children:[".",e," ","{"," ... ","}"]}),a(xs,{scope:e,to:e})]},e)),a("div",{children:a("h3",{className:"font-mono mar-b-2",children:"...etc"})})]}),a("h2",{children:"Foreground, Background and Border Colors"}),f("p",{children:["The ",a("code",{children:"fgc-N"}),", ",a("code",{children:"bgc-N"}),", ",a("code",{children:"hdc-N"})," and"," ",a("code",{children:"bdc-N"})," classes can be used to select a stop from the color range for the foreground color, background color, heading color and border color, respectively."]}),f("p",{children:["For example, the ",a("code",{children:"bgc-80"})," CSS class will set the background color to whatever color is mapped to ",a("code",{children:"--color-80"}),".  In the scope of the ",a("code",{children:"red"})," CSS class, that will be ",a("code",{children:"--red-80"}),"."]}),f("div",{className:"grid-2 gap-8 stack-desktop",children:[a(om,{classes:[["fgc-N","--color",f(It,{children:[a("b",{children:"f"}),"ore",a("b",{children:"g"}),"round ",a("b",{children:"c"}),"olor stop ",a("code",{children:"N"})]})],["bgc-N","--background-color",f(It,{children:[a("b",{children:"b"}),"ack",a("b",{children:"g"}),"round ",a("b",{children:"c"}),"olor stop ",a("code",{children:"N"})]})],["hdc-N","--heading-color",f(It,{children:[a("b",{children:"h"}),"ea",a("b",{children:"d"}),"ing ",a("b",{children:"c"}),"olor stop ",a("code",{children:"N"})]})],["bdc-N","--border-color",f(It,{children:[a("b",{children:"b"}),"or",a("b",{children:"d"}),"er ",a("b",{children:"c"}),"olor stop ",a("code",{children:"N"})]})]]}),a("div",{children:f(li,{children:["The ",a("code",{children:"bdc-N"})," classes are designed to be used in conjunction with the ",a("code",{children:"border"})," class and other classes for setting ",a(Le,{to:"/utilities/borders",text:"borders"}),".  A"," ",a("code",{children:"bdc-N"})," class will set the color border, but you won't see any effect unless you also add the ",a("code",{children:"border"})," class."]})})]}),a(D,{html:qL,caption:"Color Classes",expand:!0}),a("h2",{children:"Dark Theme"}),f("p",{children:["The ",a("code",{children:"fgd-N"}),", ",a("code",{children:"bgd-N"}),", ",a("code",{children:"hdd-N"})," and"," ",a("code",{children:"bdd-N"})," classes are equivalents of the above for when a dark theme is selected.  You can set foreground, background, heading and border colors for both light and dark themes and they will be switched in automatically."]}),f("div",{className:"grid-2 gap-2 stack-desktop",children:[a(om,{classes:[["fgd-N","--color",f(It,{children:[a("b",{children:"f"}),"ore",a("b",{children:"g"}),"round ",a("b",{children:"d"}),"ark theme color stop ",a("code",{children:"N"})]})],["bgd-N","--background-color",f(It,{children:[a("b",{children:"b"}),"ack",a("b",{children:"g"}),"round ",a("b",{children:"d"}),"ark theme color stop ",a("code",{children:"N"})]})],["hdd-N","--heading-color",f(It,{children:[a("b",{children:"h"}),"ea",a("b",{children:"d"}),"ing ",a("b",{children:"d"}),"ark theme color stop ",a("code",{children:"N"})]})],["bdd-N","--border-color",f(It,{children:[a("b",{children:"b"}),"or",a("b",{children:"d"}),"er ",a("b",{children:"d"}),"ark theme color stop ",a("code",{children:"N"})]})]]}),a("div",{children:f(li,{children:["The same rule applies for ",a("code",{children:"bdd-N"})," as it does for"," ",a("code",{children:"bdc-N"})," - it selects the border color but you still need to add the ",a("code",{children:"border"})," class to make the border visible."]})})]}),a(D,{html:ZL,caption:"Dark Theme",expand:!0}),a("h2",{children:"Color Inheritance"}),a("p",{children:"CSS custom properties are inherited by child elements.  This means you can select a color range on an element and all children will inherit that color range."}),a(D,{html:QL,caption:"Color Inheritance",expand:!0}),a("h2",{children:"Easy Component Coloring"}),f("p",{children:["This effect is used by various badger-css components. They use the generic ",a("code",{children:"--color-N"})," properties to define colors and can then be rendered using any color range."]}),a(D,{html:KL,caption:"Color Components"}),a("h2",{children:"Creating Your Own Colored Components"}),f("p",{children:["You can employ this in your own components by using the"," ",a("code",{children:"--color-N"})," CSS custom properties to define your component colours."]}),f("p",{children:["This is particularly useful when implementing components for both light and dark themes.  You only need to specify which ",a("code",{children:"--color-N"})," stops you want to use in each case.  You don't need to write separate CSS rules for each of the colors you might want to use."]}),a(D,{html:XL,caption:"Custom Components"})]}),om=({classes:e})=>f("table",{className:"brand celled striped mar-b-8",children:[a("thead",{children:f("tr",{children:[a("th",{children:"Class"}),a("th",{children:"Property"}),a("th",{children:"Description"})]})}),a("tbody",{children:e.map(n=>f("tr",{children:[a("td",{children:a("code",{children:n[0]})}),a("td",{children:a("code",{children:n[1]})}),a("td",{children:n[2]})]},n[0]))})]}),nI=Object.freeze(Object.defineProperty({__proto__:null,default:eI},Symbol.toStringTag,{value:"Module"})),tI=`<div class="inline border pad-2">
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
`,rI=()=>f("div",{className:"prose",children:[a("h1",{children:"Display"}),a("h2",{children:"Display Modes"}),f("p",{children:["The ",a("code",{children:"inline"}),", ",a("code",{children:"block"})," and"," ",a("code",{children:"inline-block"})," CSS classes can be used to set the"," ",a("code",{children:"display"})," mode.   These are useful when you have an element that would normally have one display type that you want displayed in a different way."]}),f("p",{children:["See the"," ",a(Le,{to:"/utilities/flexbox",text:"flexbox"})," and"," ",a(Le,{to:"/utilities/grid",text:"grid"})," pages for information about using flex and grid display modes."]}),a(D,{html:tI,caption:"Display Modes",expand:!0})]}),lI=Object.freeze(Object.defineProperty({__proto__:null,default:rI},Symbol.toStringTag,{value:"Module"})),aI=`<div class="flex">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>`,oI=`<div class="flex start">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,iI=`<div class="flex center">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,sI=`<div class="flex end">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,cI=`<div class="flex baseline">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,dI=`<div class="flex start gap-4">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,uI=`<div class="flex space">
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
`,hI=`<div class="flex evenly">
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
`,fI=()=>f("div",{className:"prose",children:[a("h1",{children:"Flexbox"}),a("h2",{children:"Flexbox Classes"}),f("p",{children:["Use the ",a("code",{children:"flex"})," CSS class to set the ",a("code",{children:"display"})," ","mode to ",a("code",{children:"flex"}),".  The default alignment mode"," ","(i.e. the ",a("code",{children:"align-items"})," CSS property) is ",a("code",{children:"stretch"}),"."]}),a(D,{html:aI,caption:".flex",expand:!0}),a("h2",{children:"Flexbox Alignment"}),f("p",{children:["Add the ",a("code",{children:"start"})," class to align the items to the start."]}),a(D,{html:oI,caption:".flex.start",expand:!0}),f("p",{children:["Add the ",a("code",{children:"center"})," class to align the items to the center."]}),a(D,{html:iI,caption:".flex.center",expand:!0}),f("p",{children:["Add the ",a("code",{children:"baseline"})," class to align the items to the text baseline."]}),a(D,{html:cI,caption:".flex.baseline",expand:!0}),f("p",{children:["Add the ",a("code",{children:"end"})," class to align the items to the end."]}),a(D,{html:sI,caption:".flex.end",expand:!0}),a("h2",{children:"Flexbox Spacing"}),f("p",{children:["The ",a("code",{children:"gap-N"})," classes can be used to add a gap between successive elements.  Here ",a("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit (",a("code",{children:"0.25rem"})," by default)."]}),a(D,{html:dI,caption:".flex.gap-4",expand:!0}),f("p",{children:["Add the ",a("code",{children:"space"})," class to space the items as much as possible. This is equivalent to setting the ",a("code",{children:"justify-content"})," CSS property to ",a("code",{children:"space-between"}),"."]}),a(D,{html:uI,caption:".flex.space",expand:!0}),f("p",{children:["Add the ",a("code",{children:"evenly"})," class to divide the space evenly between and around the items.  This is equivalent to setting the"," ",a("code",{children:"justify-content"})," CSS property to ",a("code",{children:"space-evenly"}),"."]}),a(D,{html:hI,caption:".flex.evenly",expand:!0})]}),pI=Object.freeze(Object.defineProperty({__proto__:null,default:fI},Symbol.toStringTag,{value:"Module"})),gI=`<div class="italic larger">
  Italic
</div>
<div class="underline larger">
  Underline
</div>
<div class="strike larger">
  Strike
</div>
`,mI=()=>f("div",{className:"prose",children:[a("h1",{children:"Font Styles"}),a("p",{children:"The following classes are defined for common font styles."}),a(D,{html:gI,caption:"Font Styles",expand:!0})]}),vI=Object.freeze(Object.defineProperty({__proto__:null,default:mI},Symbol.toStringTag,{value:"Module"})),yI=`<div class="weight-thin larger">
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
</div>`,bI=`<div class="weight-100 larger">
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
</div>`,wI=`<div class="thin larger">
  Thin
</div>
<div class="bold larger">
  Bold
</div>
<div class="black larger">
  Black
</div>
`,xI=`// define your own font weights...
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
`,Qt=({children:e,align:n="start"})=>a("div",{className:`grid-2 gap-h-8 stack-desktop ${n}`,style:{"--prose-width":"100%"},children:e}),SI=()=>f("div",{className:"prose",children:[a("h1",{children:"Font Weights"}),a("h2",{children:"Weight Names"}),f(Qt,{children:[f("p",{children:["The ",a("code",{children:"weight-<name>"})," classes can be used to set the font weight."]}),f("p",{children:["The values for ",a("code",{children:"<name>"})," can be",a("code",{children:"thin"}),", ",a("code",{children:"extra-light"}),", ",a("code",{children:"light"}),","," ",a("code",{children:"regular"}),", ",a("code",{children:"medium"}),", ",a("code",{children:"semi-bold"}),","," ",a("code",{children:"bold"}),", ",a("code",{children:"extra-bold"})," or ",a("code",{children:"black"}),"."]})]}),a(D,{html:yI,caption:"Weight Names",expand:!0}),a("h2",{children:"Weight Numbers"}),f(Qt,{children:[a("p",{children:"Alternately you can use the corresponding weight numbers."}),f("p",{children:["Those numbers can be"," ",a("code",{children:"100"}),", ",a("code",{children:"200"}),", ",a("code",{children:"300"}),","," ",a("code",{children:"400"}),", ",a("code",{children:"500"}),", ",a("code",{children:"600"}),","," ",a("code",{children:"700"}),", ",a("code",{children:"800"})," or ",a("code",{children:"900"}),"."]})]}),a(D,{html:bI,caption:"Weight Numbers",expand:!0}),a("h2",{children:"Weight Aliases"}),a("p",{children:"For the common cases..."}),a(D,{html:wI,caption:"Weight Aliases",expand:!0}),a("h2",{children:"Custom Weights"}),a(Qt,{children:f("p",{children:["You can set the ",a("code",{children:"$font-weights"})," SASS variable if you want to define a different set of font weights."]})}),a(Je,{code:xI,caption:"Font Weights",language:"scss",className:"mar-b-8",expand:!0})]}),CI=Object.freeze(Object.defineProperty({__proto__:null,default:SI},Symbol.toStringTag,{value:"Module"})),kI=`<div class="large">
  <p class="font-sans">Sans-serif Font</p>
  <p class="font-serif">Serif Font</p>
  <p class="font-system">System Font</p>
  <p class="font-mono">Mono Font</p>
</div>
`,_I=`// redefine any of the following fonts to taste...
$font-sans:   'Open Sans', Helvetica, sans-serif;
$font-serif:  'Times New Roman', Times, Baskerville, Georgia, serif;
$font-mono:   Monaco, 'Bitstream Vera Sans Mono', 'Lucida Console', Terminal, monospace;
$font-system: -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,$I=`// define your own font names...
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
`,EI=`p {
  font-family: $font-sans;
}
`,TI=`p {
  font-family: var(--font-sans);
}
`,NI=()=>f("div",{className:"prose",children:[a("h1",{children:"Fonts"}),a("h2",{children:"Font Classes"}),f("p",{children:["The ",a("code",{children:"font-sans"})," CSS class can be used to select a sans-serif font, ",a("code",{children:"font-serif"})," for a serif font, ",a("code",{children:"font-system"})," ","for the system font, or ",a("code",{children:"font-mono"})," for a monospaced font."]}),a(D,{html:kI,caption:"Fonts",expand:!0}),a("h2",{children:"Font Variables"}),a("p",{children:"Each of the above fonts is defined by a SASS variable which you can override to define your own font stacks."}),a(Je,{code:_I,caption:"Customising Fonts",language:"scss",className:"mar-b-8",expand:!0}),f("p",{children:["These variables are exposed as the corresponding CSS custom properties:"," ",a("code",{children:"--font-sans"}),", ",a("code",{children:"--font-serif"}),","," ",a("code",{children:"--font-system"})," and ",a("code",{children:"--font-mono"}),"."]}),f("div",{className:"grid-2 gap-4 stack-laptop mar-b-8",children:[a(Je,{code:EI,caption:"Font Variables in SCSS",language:"scss",expand:!0}),a(Je,{code:TI,caption:"Font Variables in CSS",language:"css",expand:!0})]}),a("p",{children:"Or you can define your own names for fonts."}),a(Je,{code:$I,caption:"Font Aliases",language:"scss",className:"mar-b-8",expand:!0}),f("p",{children:["In this case the CSS classes created will be ",a("code",{children:"font-body"}),","," ",a("code",{children:"font-head"})," and ",a("code",{children:"font-code"}),".  The fonts will also be defined as the ",a("code",{children:"--font-body"}),", ",a("code",{children:"--font-head"}),","," ","and ",a("code",{children:"--font-code"})," CSS custom properties."]})]}),LI=Object.freeze(Object.defineProperty({__proto__:null,default:NI},Symbol.toStringTag,{value:"Module"})),II=`<h3>grid-2</h3>
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
`,RI=`<div class="grid gap-4">
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
`,PI=`<div class="grid-2 gap-4">
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
`,FI=`<div class="grid-2 gap-v-8 gap-h-2">
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
`,MI=`<div class="grid-3 gap-2 start">
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
`,OI=`<div class="grid-3 gap-2 center">
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
`,AI=`<div class="grid-3 gap-2 end">
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
`,DI=`<div class="grid-fit gap-2">
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
`,zI=`<div class="grid-fit gap-2" style="--min-width: 200px">
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
`,BI=`<h3><code>grid-fit</code></h3>

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
`,jI=()=>f("div",{className:"prose",children:[a("h1",{children:"Grid"}),a("h2",{children:"Grid Columns"}),f("p",{children:["Use a ",a("code",{children:"grid-N"})," CSS class to set the ",a("code",{children:"display"})," ","mode to ",a("code",{children:"grid"})," where ",a("code",{children:"N"})," is the number of columns from 2 to 16."]}),a(D,{html:II,caption:"Grid Columns",expand:!0}),a("h2",{children:"Gaps"}),f("p",{children:["The ",a("code",{children:"gap-N"})," classes can be used to add a gap between successive elements.  Here ",a("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit (",a("code",{children:"0.25rem"})," by default)."]}),a(D,{html:PI,caption:"Grid Gaps",expand:!0}),a("h2",{children:"Vertical and Horizontal Gaps"}),f("p",{children:["The the ",a("code",{children:"gap-v-N"})," and ",a("code",{children:"gap-h-N"})," classes can be used to define the vertical and horizontal gaps separately. Again, ",a("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit."]}),a(D,{html:FI,caption:"Grid Gaps",expand:!0}),a("h2",{children:"Single Column Grid"}),f("p",{children:["The ",a("code",{children:"grid"})," CSS class (or ",a("code",{children:"grid-1"})," which does the same thing) creates a single column grid.  It's useful because it then allows you to use the ",a("code",{children:"gap-N"})," classes to add a vertical gap between child components."]}),a(D,{html:RI,caption:"Single Column Grid",expand:!0}),a("h2",{children:"Grid Fit"}),f("p",{children:["The ",a("code",{children:"grid-fit"})," CSS class will fit as many items into the grid as it can and then wrap onto the next line."]}),a(D,{html:DI,caption:"Grid Fit"}),a("h2",{children:"Grid Fill"}),f("p",{children:["The ",a("code",{children:"grid-fill"})," CSS class is similar to ",a("code",{children:"grid-fit"}),". The difference between them is what happens when there are't enough items to fill the container width.  ",a("code",{children:"grid-fit"})," will stretch them whereas ",a("code",{children:"grid-fill"})," will not."]}),a(D,{html:BI,caption:"Grid Fill"}),a("h2",{children:"Grid Fit/Fill Size"}),f("p",{children:["Both ",a("code",{children:"grid-fit"})," and ",a("code",{children:"grid-fill"})," can define a minimum size for each child element.  By default this is"," ",a("code",{children:"100px"})," wide.  You can set the ",a("code",{children:"--min-width"})," property to change it."]}),a(D,{html:zI,caption:"Grid Size"}),a("h2",{children:"Grid Start"}),f("p",{children:["Add the ",a("code",{children:"start"})," CSS class to align items to the start of grid columns."]}),a(D,{html:MI,caption:"Grid Start",expand:!0}),a("h2",{children:"Grid Center"}),f("p",{children:["Add the ",a("code",{children:"center"})," CSS class to align items to the center of grid columns."]}),a(D,{html:OI,caption:"Grid Center",expand:!0}),a("h2",{children:"Grid End"}),f("p",{children:["Add the ",a("code",{children:"end"})," CSS class to align items to the end of grid columns."]}),a(D,{html:AI,caption:"Grid End",expand:!0})]}),UI=Object.freeze(Object.defineProperty({__proto__:null,default:jI},Symbol.toStringTag,{value:"Module"})),HI=()=>f("div",{className:"page prose",children:[a("h1",{children:"Utility Classes"}),f("p",{className:"intro",children:["CSS utility classes are ",a("i",{children:"extremely"})," useful for applying styles to elements on an ad-hoc basis.  But they shouldn't be used as a substitute for writing CSS for reusable styles."]}),f("p",{children:["Some CSS frameworks, most notably"," ",a("a",{href:"https://tailwindcss.com/",children:"tailwind.css"}),", have taken this to the extreme where everything is a utility class and you never need to write any CSS at all. Although this approach has some merits for rapid prototyping, I personally wouldn't use it when building a non-trivial site because I think that it can have a negative impact on readability and maintainability."]}),f("p",{children:["I prefer to take the pragmatic approach and use utility classes to apply ",a("i",{children:"exceptional"})," styling to elements that don't warrant having their own dedicated CSS classes.  The general rule that I follow is to create dedicated CSS classes for components that I'm using in different places in a site.  For example, a product card, a user avatar, button and form styling, and so.  This ensures that they are consistent and can easily be changed across the whole site by updating the rules in the stylesheet."]}),f("p",{children:["For styling that depends on the context in which an element is being used, I'll generally reach for utility classes. By far the most useful of these, and the ones that I use more than any other, are the ",a("code",{children:"mar"})," and ",a("code",{children:"pad"}),` utility classes to add custom margins and padding.  The amount of margin or padding required on an element will often depend on the other elements around it, so there isn't a "one size fits all" solution. Other useful utility classes include those to set the font size, add a border or drop shadow, or to set the layout to use flexbox or grid.`]}),a("h2",{children:"CSS Custom Properties"}),f("p",{children:['CSS custom properties or CSS variables as they are also know, are an incredibly powerful addition to the toolkit for any web designer or developer.  They allow you to define reusable "snippets" of CSS that can easily be applied to different elements.  They can be used to replace much of the functionality that was previously only accessible by using variables and/or mixins in a CSS pre-processing language like'," ",a("a",{href:"https://sass-lang.com/",children:"SASS"}),"."]}),a("h2",{children:"SASS Variables"}),a("p",{children:"Although CSS custom properties have largely removed the need for CSS pre-processors like SASS, there are still benefits to be had from using them.  One benefit is that they can help to reduce bloat in your CSS files.  SASS allows you to define variables that can be used to implement system-wide configuration options that are then compiled into the generated CSS files.  In contrast, any CSS custom properties that you use must be included in the CSS and, if overdone, can lead to significant increases in the file size."}),a("h2",{children:"When to Use Each?"}),a("p",{children:"The general rule that I follow is to use SASS variables for configuration options that I might want to change on a site-wide basis but generally remain constant throughout the site.  For example, the default font face, the breakpoints, the colors or default spacing units.  It's useful to have these defined as variables because it allows me to plug Badger-UI into a project, tweak the default settings, and then get coding.  If at some point in the future I decide they're not quite right, or if the client or a designer wants me to change them, then it should be easy to do so, and they should be applied universally."}),a("p",{children:"For styles that I might want to change in different parts of the site, need to reflect some application state (e.g. the differences between a success, warning or error message), or that should have different properties depending on the user selecting a light or dark theme, then CSS properties are generally the way to go."}),a("p",{children:"For styles that need to be applied on an ad-hoc basis, utility classes are what I reach for."})]}),WI=Object.freeze(Object.defineProperty({__proto__:null,default:HI},Symbol.toStringTag,{value:"Module"})),VI=`<div class="relative border" style="height: 140px">
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
`,GI=()=>f("div",{className:"prose",children:[a("h1",{children:"Position"}),a("h2",{children:"Position Classes"}),f("p",{children:["Add the ",a("code",{children:"absolute"}),", ",a("code",{children:"relative"})," and"," ",a("code",{children:"fixed"})," CSS classes to set the position type."]}),f("p",{children:["For elements that are set to ",a("code",{children:"absolute"})," or ",a("code",{children:"fixed"})," ","position, the ",a("code",{children:"top"}),", ",a("code",{children:"bottom"}),", ",a("code",{children:"left"})," ","and ",a("code",{children:"right"})," classes can be used to position them against the corresponding edge of the closest parent element with the"," ",a("code",{children:"relative"})," position type."]}),a(D,{html:VI,caption:"Position",expand:!0})]}),YI=Object.freeze(Object.defineProperty({__proto__:null,default:GI},Symbol.toStringTag,{value:"Module"})),qI=`<div class="scroll-x border pad-2 nowrap mar-b-2">
  Yeah, I like it, just been fooling about with it for a few months now, very delicate... Yeah, it's part of a... trilogy really, a musical trilogy I'm doing, in, D minor, which I always find is really the saddest of all keys really. I don't know why, but it makes people weep instantly. You play a "baaaaa... baaaaaa..." it's the horn part. "...baaaa, baaaaa...", yeah, just simple lines intertwining, you know very much like, I'm really influenced by Mozart and Bach, It's sort of in between those, really, it's like a Mach piece really.<
</div>
`,ZI=`<div class="scroll-y border pad-2" style="height: 7rem">
  Yeah, I like it, just been fooling about with it for a few months
  now, very delicate... Yeah, it's part of a... trilogy really, a
  musical trilogy I'm doing, in, D minor, which I always find is really
  the saddest of all keys really. I don't know why, but it makes people
  weep instantly. You play a "baaaaa... baaaaaa..." it's the horn part.
  "...baaaa, baaaaa...", yeah, just simple lines intertwining, you
  know very much like, I'm really influenced by Mozart and Bach,
  It's sort of in between those, really, it's like a Mach piece
  really.
</div>`,QI=()=>f("div",{className:"prose",children:[a("h1",{children:"Scolling"}),a("h2",{children:"Scroll Classes"}),f("p",{children:["Add the ",a("code",{children:"scroll-x"})," or ",a("code",{children:"scroll-y"})," CSS classes to set ",a("code",{children:"overflow-x"})," or ",a("code",{children:"overflow-y"})," to ",a("code",{children:"scroll"}),", respectively."]}),a("p",{children:`Be warned that you'll also need to set widths and/or heights as appropriate to stop the layout engine from doing the "right" thing and expanding the containers to fit the content.`}),a(D,{html:qI,caption:"scroll-x",expand:!0}),a(D,{html:ZI,caption:"scroll-y",expand:!0})]}),KI=Object.freeze(Object.defineProperty({__proto__:null,default:QI},Symbol.toStringTag,{value:"Module"})),XI=`<div class="surface-3 pad-8">
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
</div>`,JI=`<div class="surface-3 pad-8">
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
`,eR=()=>f("div",{className:"prose",children:[a("h1",{children:"Shadows"}),a("h2",{children:"Shadow Classes"}),f("p",{children:["Use the ",a("code",{children:"shadow-1"}),", ",a("code",{children:"shadow-2"}),","," ",a("code",{children:"shadow-3"}),", ",a("code",{children:"shadow-4"})," and ",a("code",{children:"shadow-5"})," ","CSS classes to add a box shadow of progressively larger size.  Larger shadows can be used to suggest that an element is lifted higher off the background and thus appears closer to the foreground."]}),a(D,{html:XI,caption:"Shadows",expand:!0}),a("h2",{children:"Shadow Properties"}),f("p",{children:["The shadow styles are defined as CSS custom properties, (e.g."," ",a("code",{children:"--shadow-1"}),", ",a("code",{children:"--shadow-2"}),", etc).  The colors and opacities used for the shadows depend on both the shadow depth and color theme.  For the default light theme the base color is"," ",a("code",{children:"--grey-0"})," and the shadows are more transparent.  For the dark theme, where shadows need to be a bit more prominent to be visible, the base color is ",a("code",{children:"black"})," and the shadows are more opaque."]}),f("p",{children:["The benefit of CSS custom properties is that you can easily apply them to your own style rules.  In this example we define a"," ",a("code",{children:".shadow-example"})," rule which adds a ",a("code",{children:"box-shadow"})," using the ",a("code",{children:"--shadow-2"})," custom property.  The shadow color will be set correctly for both light and dark themes so you don't need to worry about defining separate rules for each."]}),a(D,{html:JI,caption:"Shadow Style",expand:!0})]}),nR=Object.freeze(Object.defineProperty({__proto__:null,default:eR},Symbol.toStringTag,{value:"Module"})),tR=`<div class="smallest">Smallest text</div>
<div class="smaller">Smaller text</div>
<div class="small">Small text</div>
<div>Normal size text</div>
<div class="large">Large text</div>
<div class="larger">Larger text</div>
<div class="largest">Largest text</div>
`,rR=`<div>x1</div>
<div class="x2">x2</div>
<div class="x3">x3</div>
<div class="x4">x4</div>
<div class="x5">x5</div>
<div class="x6">x6</div>
<div class="x7">x7</div>
<div class="x8">x8</div>
<div class="x9">x9</div>
<div class="x10">x10</div>
`,lR=`// define your own text sizes...
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
@import "@abw/badger-css/styles/badger.scss";`,aR=({heading1:e="Class",heading2:n="Rem Size",heading3:t=f(It,{children:["Pixel Size ",a("span",{className:"smaller",children:"(when 1rem=16px)"})]}),rows:r})=>f("table",{className:"brand celled striped properties small wide mar-b-2",children:[a("thead",{children:f("tr",{children:[a("th",{children:e}),a("th",{children:n}),a("th",{children:t})]})}),a("tbody",{children:r.map(l=>f("tr",{children:[a("td",{children:a("code",{children:l[0]})}),a("td",{children:l[1]}),a("td",{children:l[2]})]},l[0]))})]}),oR=()=>f("div",{className:"prose",children:[a("h1",{children:"Text Sizes"}),a("h2",{children:"Size Classes"}),f("p",{children:["Use the ",a("code",{children:"smallest"}),", ",a("code",{children:"smaller"}),","," ",a("code",{children:"small"}),", ",a("code",{children:"medium"})," (default)"," ",a("code",{children:"large"}),", ",a("code",{children:"larger"})," and ",a("code",{children:"largest"})," CSS classes to set the text size. These are defined as SASS variables which you can override (e.g. ",a("code",{children:"$size-large"}),") and CSS custom properties which you can use in your own stylesheets or inline styles (e.g. ",a("code",{children:"--size-large"}),")."]}),a(D,{html:tR,caption:"Text Sizes",expand:!0}),a("h2",{children:"Custom Sizes"}),a("p",{children:"The pre-defined values for the sizes are shown in the table below."}),f("p",{children:["You can set the ",a("code",{children:"$sizes"})," SCSS variable if you want to define a different set of sizes, either to give them different names or values."]}),f("p",{children:["In the example shown here the generated CSS classes would be"," ",a("code",{children:"xxs"}),", ",a("code",{children:"xs"}),", ",a("code",{children:"s"}),","," ",a("code",{children:"m"}),", ",a("code",{children:"l"}),", ",a("code",{children:"xl"})," and ",a("code",{children:"xxl"}),"."]}),a(bi,{code:lR,caption:"Custom Sizes",language:"scss",expand:!0,children:a(aR,{rows:[["smallest","0.625rem","10px"],["smaller","0.75rem","12px"],["small","0.875rem","14px"],["medium","1rem","16px"],["large","1.25rem","20px"],["larger","1.5rem","24px"],["largest","2rem","32p<"]]})}),a("h2",{children:"Size Multipliers"}),f("p",{children:["For larger text sizes you can use the size multiple classes:"," ",a("code",{children:"x2"}),", ",a("code",{children:"x3"}),", etc., up to ",a("code",{children:"x10"}),". These are all multiples of ",a("code",{children:"1rem"}),"."]}),a(D,{html:rR,caption:"Text Sizes",expand:!0})]}),iR=Object.freeze(Object.defineProperty({__proto__:null,default:oR},Symbol.toStringTag,{value:"Module"})),sR=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
  <div class="mar surface pad-2">
    This has 1 unit of margin.
  </div>
</div>
`,cR=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
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
`,dR=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
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
`,uR=`<div class="pad-2 grey20 bgc-50 fgc-90 mar-b-2">
  Two units of padding all around.
</div>
<div class="pad-v-4 pad-h-8 grey20 bgc-50 fgc-90 border">
  Four units of padding vertically and eight units
  horizontally
</div>
`,hR=`<div class="grid-1 gap-4 surface-3 pad-4">
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
`,fR=()=>f("div",{className:"prose",children:[a("h1",{children:"Spacing"}),f("p",{children:["The ",a("code",{children:"mar"})," and ",a("code",{children:"pad"})," CSS utility classes can be used to set the margins and padding for and element."]}),a("h2",{children:"Margins"}),f("p",{children:["The ",a("code",{children:"mar"})," class by itself will add 1 unit of margin to all four sides of an element.  The default unit size is ",a("code",{children:"0.25rem"}),"."]}),a(D,{html:sR,caption:"Margins",expand:!0}),f("p",{children:["The ",a("code",{children:"mar-N"})," classes will add multiples of the unit, where ",a("code",{children:"N"})," is one of the values:"," ",a("code",{children:"0"}),", ",a("code",{children:"1"}),", ",a("code",{children:"2"}),", ",a("code",{children:"3"}),","," ",a("code",{children:"4"}),", ",a("code",{children:"6"}),", ",a("code",{children:"8"}),", ",a("code",{children:"10"}),","," ",a("code",{children:"12"}),", ",a("code",{children:"16"}),", ",a("code",{children:"20"}),","," ",a("code",{children:"24"}),", ",a("code",{children:"28"})," or ",a("code",{children:"32"}),".  The"," ",a("code",{children:"mar-1"})," class is effectively the same as just ",a("code",{children:"mar"})," ","but is included for completeness.  Also note that ",a("code",{children:"mar-0"})," can be used to remove any margin that would otherwise be present on an element."]}),a(D,{html:cR,caption:"Margin Multiple",expand:!0}),a("h2",{children:"Margin Directions"}),f("p",{children:["You can also specify the direction for the margin using the"," ",a("code",{children:"mar-t"})," (top), ",a("code",{children:"mar-r"})," (right),"," ",a("code",{children:"mar-b"})," (bottom), ",a("code",{children:"mar-l"})," (left),"," ",a("code",{children:"mar-v"})," (vertical: top and bottom) and"," ",a("code",{children:"mar-h"})," (horizontal: left and right) classes. The default is 1 unit of margin or a ",a("code",{children:"-N"})," suffix can be added as a multiplier.  For example ",a("code",{children:"mar-t-4"})," to add 4 units of margin to the top of an element."]}),a(D,{html:dR,caption:"Margin Direction",expand:!0}),a("h2",{children:"Padding"}),f("p",{children:["The ",a("code",{children:"pad"})," and related utility classes work in the same way but add padding inside the element."]}),a(D,{html:uR,caption:"Padding",expand:!0}),f("p",{children:["One important thing to note is that padding is applied in multiples of 0.25",a("b",{children:"em"})," whereas margins use 0.25",a("b",{children:"rem"}),".  This is because you usually want spacing around elements to be consistent (which rem provides) but padding inside an element should be based on the text size (which em provides)."]}),a(D,{html:hR,caption:"Pad Sizes",expand:!0})]}),pR=Object.freeze(Object.defineProperty({__proto__:null,default:fR},Symbol.toStringTag,{value:"Module"})),gR=`<div class="flex gap-4">
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
`,mR=`<div class="flex gap-4">
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
`,vR=`<table class="wide shaded lined">
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
`,yR=`// redefine $splits to include what you want...
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
@import "@abw/badger-css/styles/badger.scss";`,bR=[["2","One half","50%"],["3","One third","33.33333333%"],["2-3","Two thirds","66.66666666%"],["4","One quarter","25%"],["3-4","Three quarters","75%"],["5","One fifth","20%"],["2-5","Two fifths","40%"],["3-5","Three fifths","60%"],["4-5","Four fifths","80%"],["6","One sixth","16.66666666%"],["5-6","Five sixth","83.33333333%"],["7","One seventh","14.28571429%"],["2-7","Two sevenths","28.57142858%"],["3-7","Three sevenths","42.85714287%"],["4-7","Four sevenths","57.14285716%"],["5-7","Five sevenths","71.42857145%"],["6-7","Six sevenths","85.71428574%"],["8","One eighth","12.5%"],["3-8","Three eighths","37.5%"],["5-8","Five eighths","62.5%"],["7-8","Seven eighths","87.5%"],["9","One ninth","11.11111111%"],["2-9","Two ninths","22.22222222%"],["4-9","Four ninths","44.44444444%"],["5-9","Five ninths","55.55555555%"],["7-9","Seven ninths","77.77777777%"],["8-9","Eight ninths","88.88888888%"],["10","One tenth","10%"],["3-10","Three tenths","30%"],["7-10","Seven tenths","70%"],["9-10","Nine tenths","90%"],["11","One eleventh","9.090909090%"],["12","One twelfth","8.333333333%"],["13","One thirteenth","7.692307692%"],["14","One fourteenth","7.142857142%"],["15","One fifteenth","6.666666666%"],["16","One sixteenth","6.25%"]],wR=()=>f("div",{className:"prose",children:[a("h1",{children:"Split"}),a("h2",{children:"Evenly Split Columns"}),f(Qt,{children:[f("p",{children:["The ",a("code",{children:"split-N"})," classes can be used to set the width of an element to a fraction of the width of the parent container. For example, ",a("code",{children:"split-2"})," sets the width to one half,"," ",a("code",{children:"split-3"})," to one third, and so on.  The value for"," ",a("code",{children:"N"})," can be anything from 2 to 16."]}),f("p",{children:["They can be useful in conjunction with the"," ",a(Le,{to:"/utilities/flexbox",text:"flexbox"})," classes to constrain columns to be a particular width.  Otherwise the flexbox layout engine will try to expand the width of columns that have more content."]})]}),a(D,{html:gR,caption:"Even Splits"}),a("h2",{children:"Unevenly Split Columns"}),f("p",{children:["The ",a("code",{children:"split-N-M"})," classes can be used to create uneven splits. For example, ",a("code",{children:"split-2-5"})," creates a columns that is two fifths of the width."]}),f("p",{children:["These are defined for all uneven splits up to tenths (e.g. there's a ",a("code",{children:"split-3-10"})," class for three tenths, but no ",a("code",{children:"split-3-11"})," ","for three elevenths).  Not that redundant classes are not included. For example, there's no ",a("code",{children:"split-3-6"})," class because it's one half or ",a("code",{children:"split-2"}),"."]}),a(D,{html:mR,caption:"Uneven Splits"}),a("h2",{children:"Tables"}),f("p",{children:["The ",a("code",{children:"split-*"})," classes also work with table columns. This can be useful to prevent the layout engine from expanding columns to fit the content.  It's especially useful if you have multiple tables and you want the columns to be the same width in each of the tables."]}),a(D,{html:vR,caption:"Table Splits"}),a("h2",{children:"Split Classes"}),f(Qt,{children:[a("p",{children:"The CSS classes and their corresponding widths are listed below."}),f("p",{children:["You can set the ",a("code",{children:"$splits"})," SASS variable if you want to define a different set of splits."]})]}),a(bi,{code:yR,caption:"Custom Splits",language:"scss",expand:!0,children:f("table",{className:"brand celled striped properties small wide mar-b-2",children:[a("thead",{children:f("tr",{children:[a("th",{children:"Class"}),a("th",{children:"Size"}),a("th",{children:"%age Width"})]})}),a("tbody",{children:bR.map(e=>f("tr",{children:[a("td",{children:f("code",{children:["split-",e[0]]})}),a("td",{children:e[1]}),a("td",{children:e[2]})]},e[0]))})]})})]}),xR=Object.freeze(Object.defineProperty({__proto__:null,default:wR},Symbol.toStringTag,{value:"Module"})),SR=`<h4 class="font-mono smaller">stack-widescreen</h4>
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
`,CR=`<h4 class="font-mono smaller">stack-widescreen</h4>
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
`,kR=`// define your own breakpoints...
$breakpoints: (
  'mobile':     30rem,
  'tablet':     50rem,
  'laptop':     70rem,
  'desktop':    80rem,
  'widescreen': 90rem
) !default;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";`,_R={mobile:30,tablet:50,laptop:70,desktop:80,widescreen:90},$R=()=>f("div",{className:"prose",children:[a("h1",{children:"Stacking Split Columns"}),f("p",{children:["One of the problems with creating columns using"," ",a(Le,{to:"/utilities/grid",text:"grid"}),","," ",a(Le,{to:"/utilities/flexbox",text:"flexbox"})," ","and ",a(Le,{to:"/utilities/split",text:"split"})," is that sometimes a user's screen size isn't large enough to accommodate them."]}),f("p",{children:["The ",a("code",{children:"stack-*"})," classes can be used to stack columns when the screen size is narrower than a threshold breakpoint. These are ",a("code",{children:"stack-mobile"}),", ",a("code",{children:"stack-tablet"}),","," ",a("code",{children:"stack-laptop"}),", ",a("code",{children:"stack-desktop"})," and"," ",a("code",{children:"stack-widescreen"}),"."]}),a("h2",{children:"Grid Stacking"}),f(Qt,{children:[f("p",{children:["This example shows how adding a ",a("code",{children:"stack-*"})," class to an element that has one of the ",a("code",{children:"grid-*"})," classes will cause the columns to be stacked at different breakpoints."]}),a(li,{title:"Try it out!",children:"Try resizing your browser window and see how the grid elements below get stacked."})]}),a(D,{html:SR,caption:"Stacking Grids"}),a("h2",{children:"Flexbox Stacking"}),f("p",{children:["This example shows the same thing for ",a("code",{children:"flex"})," containers."]}),a(D,{html:CR,caption:"Stacking Flexbox"}),a("h2",{children:"Breakpoint Names"}),f(Qt,{children:[a("p",{children:"The breakpoint names and their corresponding widths in rems and pixels (assuming 1rem = 16px) are shown below."}),f("p",{children:["You can set the ",a("code",{children:"$breakpoints"})," SASS variable if you want to define a different set of breakpoints."]})]}),a(bi,{code:kR,caption:"Custom Breakpoints",language:"scss",expand:!0,children:f("table",{className:"brand celled striped properties small wide mar-b-2",children:[a("thead",{children:f("tr",{children:[a("th",{children:"Class"}),a("th",{children:"Rems"}),a("th",{children:"Pixels"})]})}),a("tbody",{children:Object.entries(_R).map(([e,n])=>f("tr",{children:[a("td",{children:a("code",{children:e})}),f("td",{children:[n,"rem"]}),f("td",{children:[n*16,"px"]})]},e))})]})})]}),ER=Object.freeze(Object.defineProperty({__proto__:null,default:$R},Symbol.toStringTag,{value:"Module"})),TR=`<div class="surface border pad-2">
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
`,NR=`<div class="surface-1 border pad-2 mar-b-2">
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
`,LR=`<div class="grid-3 gap-2 smallish">
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
`,IR=()=>f("div",{className:"prose",children:[a("h1",{children:"Surfaces"}),f("p",{children:['When building UI components it can be useful to think in terms of "surfaces", with each surface getting progressively "closer" to the user and demanding their closer attention. You may want to combine these with the ',a("code",{children:"shadow-N"})," classes to further emphasise the effect."]}),a("p",{children:"As a general rule surfaces that are in the foreground should be lighter than those in the background.  Note that this applies to dark themes as well as light themes."}),a("h2",{children:"Surface Classes"}),f("p",{children:["Use the ",a("code",{children:"surface-1"}),", ",a("code",{children:"surface-2"}),","," ",a("code",{children:"surface-3"}),", ",a("code",{children:"surface-4"})," and"," ",a("code",{children:"surface-5"})," CSS classes to define elements with appropriate background and text colors to achieve this effect.  The lower numbers are meant to be further in the background with higher numbers being closer to the foreground."]}),a(D,{html:TR,caption:"Surfaces",expand:!0}),f("p",{children:["The ",a("code",{children:"surface"})," class is a special case being used here to apply a background color for the examples.  When using a light theme this"," ","is ",a("code",{children:"white"})," and for a dark theme it is ",a("code",{children:"black"}),"."]}),f("p",{children:["The styles are defined using CSS variables for the foreground, background and border colors, e.g. ",a("code",{children:"--color"}),", ",a("code",{children:"--background-color"})," ","and ",a("code",{children:"--border-color"}),". In turn these are defined using the ",a("code",{children:"grey"})," color range depending on the color theme. For example, the ",a("code",{children:"--background-color"}),"for ",a("code",{children:"--surface-3"}),"is defined to be ",a("code",{children:"--color-90"})," by default, and ",a("code",{children:"--color-10"})," when the dark theme is in effect."]}),a("h2",{children:"Surfaces With Borders"}),f("p",{children:["Add the ",a("code",{children:"border"})," CSS class to add a border around a surface."]}),a(D,{html:NR,caption:"Surface Borders",expand:!0}),a("h2",{children:"Colored Surfaces"}),a("p",{children:"Add any of the color classes to get different colored surfaces."}),a(D,{html:LR,caption:"Color Surfaces"})]}),RR=Object.freeze(Object.defineProperty({__proto__:null,default:IR},Symbol.toStringTag,{value:"Module"})),PR=`<div class="grid-1 gap-4">
  <input type="text" value="A wide input"/>
  <button class="blue wide">
    A wide button
  </button>
</div>`,FR=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,MR=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,OR=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,AR=`// define your own range of rem widths...
$rem-widths:
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 25, 30,
  35, 40, 45, 50, 60, 70, 80, 90, 100 !default;

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,DR=[2,4,6,8,10,12,14,16,18,20,25,30,35,40,45,50,60,70,80,90,100],zR=()=>f("div",{className:"prose",children:[a("h1",{children:"Widths"}),a("h2",{children:"Wide"}),f("p",{children:["Use the ",a("code",{children:"wide"})," CSS class to set an inline element to expand to the full width of the container."]}),a(D,{html:PR,caption:"Wide",expand:!0}),a("h2",{children:"Width Classes"}),f(Qt,{children:[f("p",{children:["The ",a("code",{children:"width-Nrem"})," classes can be used to set the width of an element to a number of rem units."]}),f("p",{children:["The values for ",a("code",{children:"N"})," can be",a("code",{children:"2"}),", ",a("code",{children:"4"}),","," ",a("code",{children:"6"}),", ",a("code",{children:"8"}),", ",a("code",{children:"10"}),", ",a("code",{children:"12"}),","," ",a("code",{children:"14"}),", ",a("code",{children:"16"}),", ",a("code",{children:"18"}),", ",a("code",{children:"20"}),","," ",a("code",{children:"25"}),", ",a("code",{children:"30"}),", ",a("code",{children:"35"}),", ",a("code",{children:"40"}),","," ",a("code",{children:"45"}),", ",a("code",{children:"50"}),", ",a("code",{children:"60"}),","," ",a("code",{children:"70"}),", ",a("code",{children:"80"}),", ",a("code",{children:"90"})," or ",a("code",{children:"100"}),"."]})]}),a(D,{html:FR,caption:"Widths",expand:!0}),a("h2",{children:"Pixel Width Classes"}),f("p",{children:["If you prefer to think in pixels, you can use the corresponding"," ",a("code",{children:"width-Npx"})," classes instead."]}),a(D,{html:MR,caption:"Widths in Px",expand:!0}),a("h2",{children:"Max Width Classes"}),f(Qt,{children:[f("p",{children:["The ",a("code",{children:"max-width-Nrem"})," classes can be used to set the maximum width of an element to a number of rem units.  In this case the width of the element will be constrained to the width of the parent element. You can also use the corresponding ",a("code",{children:"max-width-Npx"})," classes if you prefer to think in pixels."]}),f("p",{children:["The ",a("code",{children:"width-*"})," and ",a("code",{children:"max-width-*"})," classes work by using the ",a("code",{children:"--width"})," custom property which is set to the appropriate number of rem units based on the ",a("code",{children:"-Nrem"})," ","or ",a("code",{children:"-Npx"})," suffix."]})]}),a(D,{html:OR,caption:"Widths",expand:!0}),a("h2",{children:"Rem/Pixel Sizes"}),f(Qt,{children:[a("p",{children:"The corresponding pixel widths (assuming 1rem = 16px) for each of the classes are shown below."}),f("p",{children:["You can set the ",a("code",{children:"$rem-widths"})," SASS variable if you want to define a different set of width classes."]})]}),a(bi,{code:AR,caption:"Custom Sizes",language:"scss",expand:!0,children:f("table",{className:"brand celled striped properties small wide mar-b-2",children:[a("thead",{children:f("tr",{children:[a("th",{children:"Rem Class"}),a("th",{children:"Pixel Class"}),a("th",{children:"Rems"}),a("th",{children:"Pixels"})]})}),a("tbody",{children:DR.map(e=>f("tr",{children:[a("td",{children:f("code",{children:["width-",e,"rem"]})}),a("td",{children:f("code",{children:["width-",e*16,"px"]})}),a("td",{children:e}),a("td",{children:e*16})]},e))})]})})]}),BR=Object.freeze(Object.defineProperty({__proto__:null,default:zR},Symbol.toStringTag,{value:"Module"})),_3=({path:e,onClick:n,width:t=512,height:r=512,style:l,className:o="night-and-day--icon",fill:i="currentColor"})=>a("svg",{"aria-hidden":"true",focusable:"false",className:o,style:l,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${t} ${r}`,onClick:n,children:a("path",{d:e,fill:i})}),jR=e=>a(_3,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),$3=({Icon:e,caption:n,onClick:t,iconClass:r,iconStyle:l,captionStyle:o,className:i="night-and-day--switcher",captionClass:s="night-and-day--caption",style:d={display:"inline-block"}})=>f("div",{className:i,onClick:t,style:d,children:[a(e,{style:l,className:r}),!!n&&a("div",{className:s,style:o,children:n})]}),UR=e=>{const{setDark:n}=xi();return a($3,{Icon:jR,onClick:n,...e})},HR=e=>a(_3,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),WR=e=>{const{setLight:n}=xi();return a($3,{Icon:HR,onClick:n,...e})},VR=({sunrise:e={},nightfall:n={}})=>{const{isLight:t,setLight:r,setDark:l}=xi();return t?a(WR,{onClick:l,...e}):a(UR,{onClick:r,...n})},E3=U.createContext(),xi=()=>U.useContext(E3),is="dark",Jd="light",T3="(prefers-color-scheme: dark)",GR=()=>{var e;return(e=window==null?void 0:window.matchMedia)==null?void 0:e.call(window,T3).matches},Xl=window==null?void 0:window.localStorage,YR=e=>e.split(" "),im=(e,n="")=>`${e} ${n}`,qR=({storageKey:e,defaultVariant:n,children:t})=>{const r=e?Xl==null?void 0:Xl.getItem(e):null,[l,o=""]=r?YR(r):[GR(),null],[i,s]=U.useState(l===is),[d,h]=U.useState(o||n),m=N=>{s(N),e&&Xl&&Xl.setItem(e,im(N?is:Jd,d))},b=N=>{h(N),e&&Xl&&Xl.setItem(e,im(i?is:Jd,N))},S=N=>m(N.matches);U.useEffect(()=>{if(window&&window.matchMedia){const N=window.matchMedia(T3);return N.addEventListener("change",S),()=>N==null?void 0:N.removeEventListener("change",S)}},[]);const L={isDark:i,isLight:!i,setDark:()=>m(!0),setLight:()=>m(!1),setIsDark:s,toggleTheme:()=>m(!i),theme:i?is:Jd,variant:d,setVariant:b};return a(E3.Provider,{value:L,children:t})},ZR=e=>U.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},U.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z",fill:"currentColor"})),sm="sidebar",QR="no-sidebar",N3="0.1.0",L3="2023-10-18",cm="2018",eu=L3.match(/^(\d+)/)[1],KR=eu===cm?eu:`${cm} - ${eu}`,XR=()=>{const{variant:e,setVariant:n}=xi();return a("header",{children:f("nav",{children:[f("div",{children:[a(Df,{name:"bars",className:"toggle-sidebar action",onClick:()=>n(e===sm?QR:sm)}),a(Le,{to:"/",className:"home mar-l-2",text:"Badger-CSS"}),f("span",{className:"small mar-l-2",children:["v",N3]})]}),f("div",{children:[a("a",{href:"https://github.com/abw/badger-css",children:a(ZR,{className:"night-and-day--icon mar-r-2"})}),a(VR,{})]})]})})},po=({title:e,items:n})=>f("div",{className:"menu",children:[a("h4",{children:e}),n.map(t=>a(Le,{...t},t.to))]}),JR=[{to:"/demo",text:"Demo"},{to:"/getting-started/installation",text:"Installation"},{to:"/getting-started/good",text:"What's good about it?"},{to:"/getting-started/bad",text:"What's wrong with it?"}],eP=[{to:"/colors/ranges",text:"Color Ranges"},{to:"/colors/brand",text:"Brand Colors"},{to:"/colors/variables",text:"Color Variables"}],nP=[{to:"/utilities/",text:"Introduction"},{to:"/utilities/alignment",text:"Alignment"},{to:"/utilities/borders",text:"Borders"},{to:"/utilities/colors",text:"Colors"},{to:"/utilities/display",text:"Display"},{to:"/utilities/flexbox",text:"Flexbox"},{to:"/utilities/fonts",text:"Fonts"},{to:"/utilities/font-styles",text:"Font Styles"},{to:"/utilities/font-weights",text:"Font Weights"},{to:"/utilities/grid",text:"Grid"},{to:"/utilities/position",text:"Position"},{to:"/utilities/scrolling",text:"Scrolling"},{to:"/utilities/shadows",text:"Shadows"},{to:"/utilities/sizes",text:"Text Sizes"},{to:"/utilities/spacing",text:"Spacing"},{to:"/utilities/split",text:"Splits"},{to:"/utilities/stack",text:"Stacking"},{to:"/utilities/surfaces",text:"Surfaces"},{to:"/utilities/widths",text:"Widths"}],tP=[{to:"/forms/",text:"Introduction"},{to:"/forms/buttons",text:"Buttons"},{to:"/forms/checkboxes",text:"Checkboxes"},{to:"/forms/radio-buttons",text:"Radio Buttons"},{to:"/forms/select",text:"Select Inputs"},{to:"/forms/text",text:"Text Inputs"},{to:"/forms/textarea",text:"Text Area Inputs"},{to:"/forms/field",text:"Form Fields"},{to:"/forms/fieldset",text:"Form Field Sets"}],rP=[{to:"/components/alerts",text:"Alerts"},{to:"/components/details",text:"Details"},{to:"/components/icons",text:"SVG Icons"},{to:"/components/tables",text:"Tables"}],lP=()=>f("div",{children:[a(po,{title:"Getting Started",items:JR}),a(po,{title:"Colors",items:eP}),a(po,{title:"Utilities",items:nP}),a(po,{title:"Forms",items:tP}),a(po,{title:"Components",items:rP})]}),aP=()=>a("footer",{children:f("div",{className:"flex space",children:[f("div",{children:["© Copyright ",KR," Andy Wardley"]}),f("div",{children:["Version ",N3," ",L3]})]})});function oP(){const{pathname:e}=Da();return U.useEffect(()=>iP(document.getElementById("content")),[e]),null}function iP(e){e==null||e.scrollTo({top:0,left:0})}const sP=()=>{const{theme:e,variant:n}=xi(),t=[e,n].join(" ");return f("div",{id:"site",className:t,children:[a(XR,{}),f("div",{id:"app",children:[a(oP,{}),a("aside",{children:a(lP,{})}),a("main",{id:"content",children:a(Uk,{})})]}),a(aP,{})]})},cP=Object.assign({"../pages/colors/brand.jsx":l_,"../pages/colors/greyscale.jsx":b_,"../pages/colors/ranges.jsx":k_,"../pages/colors/variables.jsx":$_,"../pages/components/alerts.jsx":H_,"../pages/components/details.jsx":J_,"../pages/components/icons.jsx":s$,"../pages/components/tables.jsx":x$,"../pages/decoder.jsx":E$,"../pages/demo/index.jsx":B$,"../pages/forms/buttons.jsx":q$,"../pages/forms/checkboxes.jsx":eE,"../pages/forms/field.jsx":fE,"../pages/forms/fieldset.jsx":mE,"../pages/forms/index.jsx":YN,"../pages/forms/radio-buttons.jsx":JN,"../pages/forms/select.jsx":aL,"../pages/forms/text.jsx":dL,"../pages/forms/textarea.jsx":pL,"../pages/getting-started/bad.jsx":mL,"../pages/getting-started/good.jsx":yL,"../pages/getting-started/installation.jsx":_L,"../pages/index.jsx":TL,"../pages/utilities/alignment.jsx":PL,"../pages/utilities/borders.jsx":YL,"../pages/utilities/colors.jsx":nI,"../pages/utilities/display.jsx":lI,"../pages/utilities/flexbox.jsx":pI,"../pages/utilities/font-styles.jsx":vI,"../pages/utilities/font-weights.jsx":CI,"../pages/utilities/fonts.jsx":LI,"../pages/utilities/grid.jsx":UI,"../pages/utilities/index.jsx":WI,"../pages/utilities/position.jsx":YI,"../pages/utilities/scrolling.jsx":KI,"../pages/utilities/shadows.jsx":nR,"../pages/utilities/sizes.jsx":iR,"../pages/utilities/spacing.jsx":pR,"../pages/utilities/split.jsx":xR,"../pages/utilities/stack.jsx":ER,"../pages/utilities/surfaces.jsx":RR,"../pages/utilities/widths.jsx":BR}),dP=Object.entries(cP).map(([e,n])=>({path:e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,""),Component:n.default})),uP=Zk([{path:"/",element:a(sP,{}),children:dP}],{basename:"/badger-css/"});nu.createRoot(document.getElementById("root")).render(a(Tn.StrictMode,{children:a(qR,{storageKey:"theme",children:a(Bk,{router:uP})})}));
