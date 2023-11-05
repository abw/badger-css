function p8(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(e,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Bl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hg={exports:{}},fd={},pg={exports:{}},_e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ui=Symbol.for("react.element"),f8=Symbol.for("react.portal"),g8=Symbol.for("react.fragment"),v8=Symbol.for("react.strict_mode"),m8=Symbol.for("react.profiler"),b8=Symbol.for("react.provider"),y8=Symbol.for("react.context"),w8=Symbol.for("react.forward_ref"),x8=Symbol.for("react.suspense"),k8=Symbol.for("react.memo"),C8=Symbol.for("react.lazy"),p0=Symbol.iterator;function S8(e){return e===null||typeof e!="object"?null:(e=p0&&e[p0]||e["@@iterator"],typeof e=="function"?e:null)}var fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gg=Object.assign,vg={};function Oa(e,n,t){this.props=e,this.context=n,this.refs=vg,this.updater=t||fg}Oa.prototype.isReactComponent={};Oa.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Oa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mg(){}mg.prototype=Oa.prototype;function gh(e,n,t){this.props=e,this.context=n,this.refs=vg,this.updater=t||fg}var vh=gh.prototype=new mg;vh.constructor=gh;gg(vh,Oa.prototype);vh.isPureReactComponent=!0;var f0=Array.isArray,bg=Object.prototype.hasOwnProperty,mh={current:null},yg={key:!0,ref:!0,__self:!0,__source:!0};function wg(e,n,t){var r,a={},l=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(l=""+n.key),n)bg.call(n,r)&&!yg.hasOwnProperty(r)&&(a[r]=n[r]);var s=arguments.length-2;if(s===1)a.children=t;else if(1<s){for(var u=Array(s),p=0;p<s;p++)u[p]=arguments[p+2];a.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:ui,type:e,key:l,ref:i,props:a,_owner:mh.current}}function T8(e,n){return{$$typeof:ui,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function bh(e){return typeof e=="object"&&e!==null&&e.$$typeof===ui}function _8(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var g0=/\/+/g;function gc(e,n){return typeof e=="object"&&e!==null&&e.key!=null?_8(""+e.key):n.toString(36)}function ss(e,n,t,r,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ui:case f8:i=!0}}if(i)return i=e,a=a(i),e=r===""?"."+gc(i,0):r,f0(a)?(t="",e!=null&&(t=e.replace(g0,"$&/")+"/"),ss(a,n,t,"",function(p){return p})):a!=null&&(bh(a)&&(a=T8(a,t+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(g0,"$&/")+"/")+e)),n.push(a)),1;if(i=0,r=r===""?".":r+":",f0(e))for(var s=0;s<e.length;s++){l=e[s];var u=r+gc(l,s);i+=ss(l,n,t,u,a)}else if(u=S8(e),typeof u=="function")for(e=u.call(e),s=0;!(l=e.next()).done;)l=l.value,u=r+gc(l,s++),i+=ss(l,n,t,u,a);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function Oi(e,n,t){if(e==null)return e;var r=[],a=0;return ss(e,r,"","",function(l){return n.call(t,l,a++)}),r}function L8(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Gn={current:null},ds={transition:null},$8={ReactCurrentDispatcher:Gn,ReactCurrentBatchConfig:ds,ReactCurrentOwner:mh};_e.Children={map:Oi,forEach:function(e,n,t){Oi(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Oi(e,function(){n++}),n},toArray:function(e){return Oi(e,function(n){return n})||[]},only:function(e){if(!bh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_e.Component=Oa;_e.Fragment=g8;_e.Profiler=m8;_e.PureComponent=gh;_e.StrictMode=v8;_e.Suspense=x8;_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$8;_e.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gg({},e.props),a=e.key,l=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,i=mh.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in n)bg.call(n,u)&&!yg.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&s!==void 0?s[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){s=Array(u);for(var p=0;p<u;p++)s[p]=arguments[p+2];r.children=s}return{$$typeof:ui,type:e.type,key:a,ref:l,props:r,_owner:i}};_e.createContext=function(e){return e={$$typeof:y8,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:b8,_context:e},e.Consumer=e};_e.createElement=wg;_e.createFactory=function(e){var n=wg.bind(null,e);return n.type=e,n};_e.createRef=function(){return{current:null}};_e.forwardRef=function(e){return{$$typeof:w8,render:e}};_e.isValidElement=bh;_e.lazy=function(e){return{$$typeof:C8,_payload:{_status:-1,_result:e},_init:L8}};_e.memo=function(e,n){return{$$typeof:k8,type:e,compare:n===void 0?null:n}};_e.startTransition=function(e){var n=ds.transition;ds.transition={};try{e()}finally{ds.transition=n}};_e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};_e.useCallback=function(e,n){return Gn.current.useCallback(e,n)};_e.useContext=function(e){return Gn.current.useContext(e)};_e.useDebugValue=function(){};_e.useDeferredValue=function(e){return Gn.current.useDeferredValue(e)};_e.useEffect=function(e,n){return Gn.current.useEffect(e,n)};_e.useId=function(){return Gn.current.useId()};_e.useImperativeHandle=function(e,n,t){return Gn.current.useImperativeHandle(e,n,t)};_e.useInsertionEffect=function(e,n){return Gn.current.useInsertionEffect(e,n)};_e.useLayoutEffect=function(e,n){return Gn.current.useLayoutEffect(e,n)};_e.useMemo=function(e,n){return Gn.current.useMemo(e,n)};_e.useReducer=function(e,n,t){return Gn.current.useReducer(e,n,t)};_e.useRef=function(e){return Gn.current.useRef(e)};_e.useState=function(e){return Gn.current.useState(e)};_e.useSyncExternalStore=function(e,n,t){return Gn.current.useSyncExternalStore(e,n,t)};_e.useTransition=function(){return Gn.current.useTransition()};_e.version="18.2.0";pg.exports=_e;var D=pg.exports;const En=Xt(D),v0=p8({__proto__:null,default:En},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N8=D,E8=Symbol.for("react.element"),I8=Symbol.for("react.fragment"),M8=Object.prototype.hasOwnProperty,R8=N8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P8={key:!0,ref:!0,__self:!0,__source:!0};function xg(e,n,t){var r,a={},l=null,i=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)M8.call(n,r)&&!P8.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)a[r]===void 0&&(a[r]=n[r]);return{$$typeof:E8,type:e,key:l,ref:i,props:a,_owner:R8.current}}fd.Fragment=I8;fd.jsx=xg;fd.jsxs=xg;hg.exports=fd;var yh=hg.exports;const Rt=yh.Fragment,o=yh.jsx,d=yh.jsxs;var tu={},kg={exports:{}},mt={},Cg={exports:{}},Sg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(U,Z){var J=U.length;U.push(Z);e:for(;0<J;){var ae=J-1>>>1,ge=U[ae];if(0<a(ge,Z))U[ae]=Z,U[J]=ge,J=ae;else break e}}function t(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var Z=U[0],J=U.pop();if(J!==Z){U[0]=J;e:for(var ae=0,ge=U.length,jn=ge>>>1;ae<jn;){var ve=2*(ae+1)-1,nn=U[ve],Ze=ve+1,fn=U[Ze];if(0>a(nn,J))Ze<ge&&0>a(fn,nn)?(U[ae]=fn,U[Ze]=J,ae=Ze):(U[ae]=nn,U[ve]=J,ae=ve);else if(Ze<ge&&0>a(fn,J))U[ae]=fn,U[Ze]=J,ae=Ze;else break e}}return Z}function a(U,Z){var J=U.sortIndex-Z.sortIndex;return J!==0?J:U.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],p=[],v=1,y=null,k=3,E=!1,N=!1,C=!1,M=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(U){for(var Z=t(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=U)r(p),Z.sortIndex=Z.expirationTime,n(u,Z);else break;Z=t(p)}}function m(U){if(C=!1,b(U),!N)if(t(u)!==null)N=!0,Be(L);else{var Z=t(p);Z!==null&&qe(m,Z.startTime-U)}}function L(U,Z){N=!1,C&&(C=!1,w(O),O=-1),E=!0;var J=k;try{for(b(Z),y=t(u);y!==null&&(!(y.expirationTime>Z)||U&&!fe());){var ae=y.callback;if(typeof ae=="function"){y.callback=null,k=y.priorityLevel;var ge=ae(y.expirationTime<=Z);Z=e.unstable_now(),typeof ge=="function"?y.callback=ge:y===t(u)&&r(u),b(Z)}else r(u);y=t(u)}if(y!==null)var jn=!0;else{var ve=t(p);ve!==null&&qe(m,ve.startTime-Z),jn=!1}return jn}finally{y=null,k=J,E=!1}}var T=!1,A=null,O=-1,j=5,q=-1;function fe(){return!(e.unstable_now()-q<j)}function ce(){if(A!==null){var U=e.unstable_now();q=U;var Z=!0;try{Z=A(!0,U)}finally{Z?Ue():(T=!1,A=null)}}else T=!1}var Ue;if(typeof g=="function")Ue=function(){g(ce)};else if(typeof MessageChannel<"u"){var an=new MessageChannel,Ye=an.port2;an.port1.onmessage=ce,Ue=function(){Ye.postMessage(null)}}else Ue=function(){M(ce,0)};function Be(U){A=U,T||(T=!0,Ue())}function qe(U,Z){O=M(function(){U(e.unstable_now())},Z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_continueExecution=function(){N||E||(N=!0,Be(L))},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return k},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(U){switch(k){case 1:case 2:case 3:var Z=3;break;default:Z=k}var J=k;k=Z;try{return U()}finally{k=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(U,Z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var J=k;k=U;try{return Z()}finally{k=J}},e.unstable_scheduleCallback=function(U,Z,J){var ae=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ae+J:ae):J=ae,U){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=J+ge,U={id:v++,callback:Z,priorityLevel:U,startTime:J,expirationTime:ge,sortIndex:-1},J>ae?(U.sortIndex=J,n(p,U),t(u)===null&&U===t(p)&&(C?(w(O),O=-1):C=!0,qe(m,J-ae))):(U.sortIndex=ge,n(u,U),N||E||(N=!0,Be(L))),U},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(U){var Z=k;return function(){var J=k;k=Z;try{return U.apply(this,arguments)}finally{k=J}}}})(Sg);Cg.exports=Sg;var A8=Cg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg=D,vt=A8;function Y(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _g=new Set,jl={};function Ro(e,n){La(e,n),La(e+"Capture",n)}function La(e,n){for(jl[e]=n,e=0;e<n.length;e++)_g.add(n[e])}var pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=Object.prototype.hasOwnProperty,F8=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m0={},b0={};function O8(e){return ru.call(b0,e)?!0:ru.call(m0,e)?!1:F8.test(e)?b0[e]=!0:(m0[e]=!0,!1)}function z8(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function D8(e,n,t,r){if(n===null||typeof n>"u"||z8(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Yn(e,n,t,r,a,l,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=i}var Rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Rn[e]=new Yn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Rn[n]=new Yn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Rn[e]=new Yn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Rn[e]=new Yn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Rn[e]=new Yn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Rn[e]=new Yn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Rn[e]=new Yn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Rn[e]=new Yn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Rn[e]=new Yn(e,5,!1,e.toLowerCase(),null,!1,!1)});var wh=/[\-:]([a-z])/g;function xh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(wh,xh);Rn[n]=new Yn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(wh,xh);Rn[n]=new Yn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(wh,xh);Rn[n]=new Yn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Rn[e]=new Yn(e,1,!1,e.toLowerCase(),null,!1,!1)});Rn.xlinkHref=new Yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Rn[e]=new Yn(e,1,!1,e.toLowerCase(),null,!0,!0)});function kh(e,n,t,r){var a=Rn.hasOwnProperty(n)?Rn[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(D8(n,t,a,r)&&(t=null),r||a===null?O8(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var yr=Tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zi=Symbol.for("react.element"),oa=Symbol.for("react.portal"),aa=Symbol.for("react.fragment"),Ch=Symbol.for("react.strict_mode"),ou=Symbol.for("react.profiler"),Lg=Symbol.for("react.provider"),$g=Symbol.for("react.context"),Sh=Symbol.for("react.forward_ref"),au=Symbol.for("react.suspense"),lu=Symbol.for("react.suspense_list"),Th=Symbol.for("react.memo"),Nr=Symbol.for("react.lazy"),Ng=Symbol.for("react.offscreen"),y0=Symbol.iterator;function ll(e){return e===null||typeof e!="object"?null:(e=y0&&e[y0]||e["@@iterator"],typeof e=="function"?e:null)}var on=Object.assign,vc;function bl(e){if(vc===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);vc=n&&n[1]||""}return`
`+vc+e}var mc=!1;function bc(e,n){if(!e||mc)return"";mc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(p){var r=p}Reflect.construct(e,[],n)}else{try{n.call()}catch(p){r=p}e.call(n.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var a=p.stack.split(`
`),l=r.stack.split(`
`),i=a.length-1,s=l.length-1;1<=i&&0<=s&&a[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(a[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||a[i]!==l[s]){var u=`
`+a[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{mc=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?bl(e):""}function B8(e){switch(e.tag){case 5:return bl(e.type);case 16:return bl("Lazy");case 13:return bl("Suspense");case 19:return bl("SuspenseList");case 0:case 2:case 15:return e=bc(e.type,!1),e;case 11:return e=bc(e.type.render,!1),e;case 1:return e=bc(e.type,!0),e;default:return""}}function iu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case aa:return"Fragment";case oa:return"Portal";case ou:return"Profiler";case Ch:return"StrictMode";case au:return"Suspense";case lu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $g:return(e.displayName||"Context")+".Consumer";case Lg:return(e._context.displayName||"Context")+".Provider";case Sh:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Th:return n=e.displayName||null,n!==null?n:iu(e.type)||"Memo";case Nr:n=e._payload,e=e._init;try{return iu(e(n))}catch{}}return null}function j8(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return iu(n);case 8:return n===Ch?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Vr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Eg(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function U8(e){var n=Eg(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Di(e){e._valueTracker||(e._valueTracker=U8(e))}function Ig(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Eg(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ms(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function su(e,n){var t=n.checked;return on({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function w0(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Vr(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Mg(e,n){n=n.checked,n!=null&&kh(e,"checked",n,!1)}function du(e,n){Mg(e,n);var t=Vr(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?cu(e,n.type,t):n.hasOwnProperty("defaultValue")&&cu(e,n.type,Vr(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function x0(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function cu(e,n,t){(n!=="number"||Ms(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var yl=Array.isArray;function ya(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Vr(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function uu(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(Y(91));return on({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function k0(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(Y(92));if(yl(t)){if(1<t.length)throw Error(Y(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Vr(t)}}function Rg(e,n){var t=Vr(n.value),r=Vr(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function C0(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Pg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hu(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Pg(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bi,Ag=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Bi=Bi||document.createElement("div"),Bi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Bi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ul(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var $l={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},H8=["Webkit","ms","Moz","O"];Object.keys($l).forEach(function(e){H8.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),$l[n]=$l[e]})});function Fg(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||$l.hasOwnProperty(e)&&$l[e]?(""+n).trim():n+"px"}function Og(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=Fg(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var W8=on({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pu(e,n){if(n){if(W8[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(Y(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(Y(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(Y(61))}if(n.style!=null&&typeof n.style!="object")throw Error(Y(62))}}function fu(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gu=null;function _h(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vu=null,wa=null,xa=null;function S0(e){if(e=fi(e)){if(typeof vu!="function")throw Error(Y(280));var n=e.stateNode;n&&(n=yd(n),vu(e.stateNode,e.type,n))}}function zg(e){wa?xa?xa.push(e):xa=[e]:wa=e}function Dg(){if(wa){var e=wa,n=xa;if(xa=wa=null,S0(e),n)for(e=0;e<n.length;e++)S0(n[e])}}function Bg(e,n){return e(n)}function jg(){}var yc=!1;function Ug(e,n,t){if(yc)return e(n,t);yc=!0;try{return Bg(e,n,t)}finally{yc=!1,(wa!==null||xa!==null)&&(jg(),Dg())}}function Hl(e,n){var t=e.stateNode;if(t===null)return null;var r=yd(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(Y(231,n,typeof t));return t}var mu=!1;if(pr)try{var il={};Object.defineProperty(il,"passive",{get:function(){mu=!0}}),window.addEventListener("test",il,il),window.removeEventListener("test",il,il)}catch{mu=!1}function V8(e,n,t,r,a,l,i,s,u){var p=Array.prototype.slice.call(arguments,3);try{n.apply(t,p)}catch(v){this.onError(v)}}var Nl=!1,Rs=null,Ps=!1,bu=null,G8={onError:function(e){Nl=!0,Rs=e}};function Y8(e,n,t,r,a,l,i,s,u){Nl=!1,Rs=null,V8.apply(G8,arguments)}function q8(e,n,t,r,a,l,i,s,u){if(Y8.apply(this,arguments),Nl){if(Nl){var p=Rs;Nl=!1,Rs=null}else throw Error(Y(198));Ps||(Ps=!0,bu=p)}}function Po(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Hg(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function T0(e){if(Po(e)!==e)throw Error(Y(188))}function Z8(e){var n=e.alternate;if(!n){if(n=Po(e),n===null)throw Error(Y(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===t)return T0(a),e;if(l===r)return T0(a),n;l=l.sibling}throw Error(Y(188))}if(t.return!==r.return)t=a,r=l;else{for(var i=!1,s=a.child;s;){if(s===t){i=!0,t=a,r=l;break}if(s===r){i=!0,r=a,t=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===t){i=!0,t=l,r=a;break}if(s===r){i=!0,r=l,t=a;break}s=s.sibling}if(!i)throw Error(Y(189))}}if(t.alternate!==r)throw Error(Y(190))}if(t.tag!==3)throw Error(Y(188));return t.stateNode.current===t?e:n}function Wg(e){return e=Z8(e),e!==null?Vg(e):null}function Vg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Vg(e);if(n!==null)return n;e=e.sibling}return null}var Gg=vt.unstable_scheduleCallback,_0=vt.unstable_cancelCallback,Q8=vt.unstable_shouldYield,K8=vt.unstable_requestPaint,sn=vt.unstable_now,X8=vt.unstable_getCurrentPriorityLevel,Lh=vt.unstable_ImmediatePriority,Yg=vt.unstable_UserBlockingPriority,As=vt.unstable_NormalPriority,J8=vt.unstable_LowPriority,qg=vt.unstable_IdlePriority,gd=null,Qt=null;function ey(e){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(gd,e,void 0,(e.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:ry,ny=Math.log,ty=Math.LN2;function ry(e){return e>>>=0,e===0?32:31-(ny(e)/ty|0)|0}var ji=64,Ui=4194304;function wl(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fs(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,i=t&268435455;if(i!==0){var s=i&~a;s!==0?r=wl(s):(l&=i,l!==0&&(r=wl(l)))}else i=t&~a,i!==0?r=wl(i):l!==0&&(r=wl(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&a)&&(a=r&-r,l=n&-n,a>=l||a===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Dt(n),a=1<<t,r|=e[t],n&=~a;return r}function oy(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ay(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Dt(l),s=1<<i,u=a[i];u===-1?(!(s&t)||s&r)&&(a[i]=oy(s,n)):u<=n&&(e.expiredLanes|=s),l&=~s}}function yu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zg(){var e=ji;return ji<<=1,!(ji&4194240)&&(ji=64),e}function wc(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function hi(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Dt(n),e[n]=t}function ly(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Dt(t),l=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~l}}function $h(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Dt(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var De=0;function Qg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kg,Nh,Xg,Jg,ev,wu=!1,Hi=[],Or=null,zr=null,Dr=null,Wl=new Map,Vl=new Map,Ir=[],iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function L0(e,n){switch(e){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":zr=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":Wl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vl.delete(n.pointerId)}}function sl(e,n,t,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},n!==null&&(n=fi(n),n!==null&&Nh(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function sy(e,n,t,r,a){switch(n){case"focusin":return Or=sl(Or,e,n,t,r,a),!0;case"dragenter":return zr=sl(zr,e,n,t,r,a),!0;case"mouseover":return Dr=sl(Dr,e,n,t,r,a),!0;case"pointerover":var l=a.pointerId;return Wl.set(l,sl(Wl.get(l)||null,e,n,t,r,a)),!0;case"gotpointercapture":return l=a.pointerId,Vl.set(l,sl(Vl.get(l)||null,e,n,t,r,a)),!0}return!1}function nv(e){var n=bo(e.target);if(n!==null){var t=Po(n);if(t!==null){if(n=t.tag,n===13){if(n=Hg(t),n!==null){e.blockedOn=n,ev(e.priority,function(){Xg(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cs(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=xu(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);gu=r,t.target.dispatchEvent(r),gu=null}else return n=fi(t),n!==null&&Nh(n),e.blockedOn=t,!1;n.shift()}return!0}function $0(e,n,t){cs(e)&&t.delete(n)}function dy(){wu=!1,Or!==null&&cs(Or)&&(Or=null),zr!==null&&cs(zr)&&(zr=null),Dr!==null&&cs(Dr)&&(Dr=null),Wl.forEach($0),Vl.forEach($0)}function dl(e,n){e.blockedOn===n&&(e.blockedOn=null,wu||(wu=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,dy)))}function Gl(e){function n(a){return dl(a,e)}if(0<Hi.length){dl(Hi[0],e);for(var t=1;t<Hi.length;t++){var r=Hi[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Or!==null&&dl(Or,e),zr!==null&&dl(zr,e),Dr!==null&&dl(Dr,e),Wl.forEach(n),Vl.forEach(n),t=0;t<Ir.length;t++)r=Ir[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ir.length&&(t=Ir[0],t.blockedOn===null);)nv(t),t.blockedOn===null&&Ir.shift()}var ka=yr.ReactCurrentBatchConfig,Os=!0;function cy(e,n,t,r){var a=De,l=ka.transition;ka.transition=null;try{De=1,Eh(e,n,t,r)}finally{De=a,ka.transition=l}}function uy(e,n,t,r){var a=De,l=ka.transition;ka.transition=null;try{De=4,Eh(e,n,t,r)}finally{De=a,ka.transition=l}}function Eh(e,n,t,r){if(Os){var a=xu(e,n,t,r);if(a===null)Ec(e,n,r,zs,t),L0(e,r);else if(sy(a,e,n,t,r))r.stopPropagation();else if(L0(e,r),n&4&&-1<iy.indexOf(e)){for(;a!==null;){var l=fi(a);if(l!==null&&Kg(l),l=xu(e,n,t,r),l===null&&Ec(e,n,r,zs,t),l===a)break;a=l}a!==null&&r.stopPropagation()}else Ec(e,n,r,null,t)}}var zs=null;function xu(e,n,t,r){if(zs=null,e=_h(r),e=bo(e),e!==null)if(n=Po(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Hg(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return zs=e,null}function tv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X8()){case Lh:return 1;case Yg:return 4;case As:case J8:return 16;case qg:return 536870912;default:return 16}default:return 16}}var Rr=null,Ih=null,us=null;function rv(){if(us)return us;var e,n=Ih,t=n.length,r,a="value"in Rr?Rr.value:Rr.textContent,l=a.length;for(e=0;e<t&&n[e]===a[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===a[l-r];r++);return us=a.slice(e,1<r?1-r:void 0)}function hs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Wi(){return!0}function N0(){return!1}function bt(e){function n(t,r,a,l,i){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Wi:N0,this.isPropagationStopped=N0,this}return on(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Wi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Wi)},persist:function(){},isPersistent:Wi}),n}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mh=bt(za),pi=on({},za,{view:0,detail:0}),hy=bt(pi),xc,kc,cl,vd=on({},pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cl&&(cl&&e.type==="mousemove"?(xc=e.screenX-cl.screenX,kc=e.screenY-cl.screenY):kc=xc=0,cl=e),xc)},movementY:function(e){return"movementY"in e?e.movementY:kc}}),E0=bt(vd),py=on({},vd,{dataTransfer:0}),fy=bt(py),gy=on({},pi,{relatedTarget:0}),Cc=bt(gy),vy=on({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),my=bt(vy),by=on({},za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yy=bt(by),wy=on({},za,{data:0}),I0=bt(wy),xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ky={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Cy[e])?!!n[e]:!1}function Rh(){return Sy}var Ty=on({},pi,{key:function(e){if(e.key){var n=xy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ky[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rh,charCode:function(e){return e.type==="keypress"?hs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_y=bt(Ty),Ly=on({},vd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),M0=bt(Ly),$y=on({},pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rh}),Ny=bt($y),Ey=on({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iy=bt(Ey),My=on({},vd,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ry=bt(My),Py=[9,13,27,32],Ph=pr&&"CompositionEvent"in window,El=null;pr&&"documentMode"in document&&(El=document.documentMode);var Ay=pr&&"TextEvent"in window&&!El,ov=pr&&(!Ph||El&&8<El&&11>=El),R0=String.fromCharCode(32),P0=!1;function av(e,n){switch(e){case"keyup":return Py.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var la=!1;function Fy(e,n){switch(e){case"compositionend":return lv(n);case"keypress":return n.which!==32?null:(P0=!0,R0);case"textInput":return e=n.data,e===R0&&P0?null:e;default:return null}}function Oy(e,n){if(la)return e==="compositionend"||!Ph&&av(e,n)?(e=rv(),us=Ih=Rr=null,la=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ov&&n.locale!=="ko"?null:n.data;default:return null}}var zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function A0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!zy[e.type]:n==="textarea"}function iv(e,n,t,r){zg(r),n=Ds(n,"onChange"),0<n.length&&(t=new Mh("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Il=null,Yl=null;function Dy(e){bv(e,0)}function md(e){var n=da(e);if(Ig(n))return e}function By(e,n){if(e==="change")return n}var sv=!1;if(pr){var Sc;if(pr){var Tc="oninput"in document;if(!Tc){var F0=document.createElement("div");F0.setAttribute("oninput","return;"),Tc=typeof F0.oninput=="function"}Sc=Tc}else Sc=!1;sv=Sc&&(!document.documentMode||9<document.documentMode)}function O0(){Il&&(Il.detachEvent("onpropertychange",dv),Yl=Il=null)}function dv(e){if(e.propertyName==="value"&&md(Yl)){var n=[];iv(n,Yl,e,_h(e)),Ug(Dy,n)}}function jy(e,n,t){e==="focusin"?(O0(),Il=n,Yl=t,Il.attachEvent("onpropertychange",dv)):e==="focusout"&&O0()}function Uy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return md(Yl)}function Hy(e,n){if(e==="click")return md(n)}function Wy(e,n){if(e==="input"||e==="change")return md(n)}function Vy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jt=typeof Object.is=="function"?Object.is:Vy;function ql(e,n){if(jt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!ru.call(n,a)||!jt(e[a],n[a]))return!1}return!0}function z0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function D0(e,n){var t=z0(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=z0(t)}}function cv(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?cv(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function uv(){for(var e=window,n=Ms();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ms(e.document)}return n}function Ah(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Gy(e){var n=uv(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&cv(t.ownerDocument.documentElement,t)){if(r!==null&&Ah(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=D0(t,l);var i=D0(t,r);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yy=pr&&"documentMode"in document&&11>=document.documentMode,ia=null,ku=null,Ml=null,Cu=!1;function B0(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Cu||ia==null||ia!==Ms(r)||(r=ia,"selectionStart"in r&&Ah(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ml&&ql(Ml,r)||(Ml=r,r=Ds(ku,"onSelect"),0<r.length&&(n=new Mh("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=ia)))}function Vi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var sa={animationend:Vi("Animation","AnimationEnd"),animationiteration:Vi("Animation","AnimationIteration"),animationstart:Vi("Animation","AnimationStart"),transitionend:Vi("Transition","TransitionEnd")},_c={},hv={};pr&&(hv=document.createElement("div").style,"AnimationEvent"in window||(delete sa.animationend.animation,delete sa.animationiteration.animation,delete sa.animationstart.animation),"TransitionEvent"in window||delete sa.transitionend.transition);function bd(e){if(_c[e])return _c[e];if(!sa[e])return e;var n=sa[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in hv)return _c[e]=n[t];return e}var pv=bd("animationend"),fv=bd("animationiteration"),gv=bd("animationstart"),vv=bd("transitionend"),mv=new Map,j0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(e,n){mv.set(e,n),Ro(n,[e])}for(var Lc=0;Lc<j0.length;Lc++){var $c=j0[Lc],qy=$c.toLowerCase(),Zy=$c[0].toUpperCase()+$c.slice(1);qr(qy,"on"+Zy)}qr(pv,"onAnimationEnd");qr(fv,"onAnimationIteration");qr(gv,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(vv,"onTransitionEnd");La("onMouseEnter",["mouseout","mouseover"]);La("onMouseLeave",["mouseout","mouseover"]);La("onPointerEnter",["pointerout","pointerover"]);La("onPointerLeave",["pointerout","pointerover"]);Ro("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ro("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ro("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ro("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ro("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ro("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qy=new Set("cancel close invalid load scroll toggle".split(" ").concat(xl));function U0(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,q8(r,n,void 0,e),e.currentTarget=null}function bv(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var i=r.length-1;0<=i;i--){var s=r[i],u=s.instance,p=s.currentTarget;if(s=s.listener,u!==l&&a.isPropagationStopped())break e;U0(a,s,p),l=u}else for(i=0;i<r.length;i++){if(s=r[i],u=s.instance,p=s.currentTarget,s=s.listener,u!==l&&a.isPropagationStopped())break e;U0(a,s,p),l=u}}}if(Ps)throw e=bu,Ps=!1,bu=null,e}function Ke(e,n){var t=n[$u];t===void 0&&(t=n[$u]=new Set);var r=e+"__bubble";t.has(r)||(yv(n,e,2,!1),t.add(r))}function Nc(e,n,t){var r=0;n&&(r|=4),yv(t,e,r,n)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function Zl(e){if(!e[Gi]){e[Gi]=!0,_g.forEach(function(t){t!=="selectionchange"&&(Qy.has(t)||Nc(t,!1,e),Nc(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Gi]||(n[Gi]=!0,Nc("selectionchange",!1,n))}}function yv(e,n,t,r){switch(tv(n)){case 1:var a=cy;break;case 4:a=uy;break;default:a=Eh}t=a.bind(null,n,t,e),a=void 0,!mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function Ec(e,n,t,r,a){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;i=i.return}for(;s!==null;){if(i=bo(s),i===null)return;if(u=i.tag,u===5||u===6){r=l=i;continue e}s=s.parentNode}}r=r.return}Ug(function(){var p=l,v=_h(t),y=[];e:{var k=mv.get(e);if(k!==void 0){var E=Mh,N=e;switch(e){case"keypress":if(hs(t)===0)break e;case"keydown":case"keyup":E=_y;break;case"focusin":N="focus",E=Cc;break;case"focusout":N="blur",E=Cc;break;case"beforeblur":case"afterblur":E=Cc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=E0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=fy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Ny;break;case pv:case fv:case gv:E=my;break;case vv:E=Iy;break;case"scroll":E=hy;break;case"wheel":E=Ry;break;case"copy":case"cut":case"paste":E=yy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=M0}var C=(n&4)!==0,M=!C&&e==="scroll",w=C?k!==null?k+"Capture":null:k;C=[];for(var g=p,b;g!==null;){b=g;var m=b.stateNode;if(b.tag===5&&m!==null&&(b=m,w!==null&&(m=Hl(g,w),m!=null&&C.push(Ql(g,m,b)))),M)break;g=g.return}0<C.length&&(k=new E(k,N,null,t,v),y.push({event:k,listeners:C}))}}if(!(n&7)){e:{if(k=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",k&&t!==gu&&(N=t.relatedTarget||t.fromElement)&&(bo(N)||N[fr]))break e;if((E||k)&&(k=v.window===v?v:(k=v.ownerDocument)?k.defaultView||k.parentWindow:window,E?(N=t.relatedTarget||t.toElement,E=p,N=N?bo(N):null,N!==null&&(M=Po(N),N!==M||N.tag!==5&&N.tag!==6)&&(N=null)):(E=null,N=p),E!==N)){if(C=E0,m="onMouseLeave",w="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(C=M0,m="onPointerLeave",w="onPointerEnter",g="pointer"),M=E==null?k:da(E),b=N==null?k:da(N),k=new C(m,g+"leave",E,t,v),k.target=M,k.relatedTarget=b,m=null,bo(v)===p&&(C=new C(w,g+"enter",N,t,v),C.target=b,C.relatedTarget=M,m=C),M=m,E&&N)n:{for(C=E,w=N,g=0,b=C;b;b=Jo(b))g++;for(b=0,m=w;m;m=Jo(m))b++;for(;0<g-b;)C=Jo(C),g--;for(;0<b-g;)w=Jo(w),b--;for(;g--;){if(C===w||w!==null&&C===w.alternate)break n;C=Jo(C),w=Jo(w)}C=null}else C=null;E!==null&&H0(y,k,E,C,!1),N!==null&&M!==null&&H0(y,M,N,C,!0)}}e:{if(k=p?da(p):window,E=k.nodeName&&k.nodeName.toLowerCase(),E==="select"||E==="input"&&k.type==="file")var L=By;else if(A0(k))if(sv)L=Wy;else{L=Uy;var T=jy}else(E=k.nodeName)&&E.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(L=Hy);if(L&&(L=L(e,p))){iv(y,L,t,v);break e}T&&T(e,k,p),e==="focusout"&&(T=k._wrapperState)&&T.controlled&&k.type==="number"&&cu(k,"number",k.value)}switch(T=p?da(p):window,e){case"focusin":(A0(T)||T.contentEditable==="true")&&(ia=T,ku=p,Ml=null);break;case"focusout":Ml=ku=ia=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,B0(y,t,v);break;case"selectionchange":if(Yy)break;case"keydown":case"keyup":B0(y,t,v)}var A;if(Ph)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else la?av(e,t)&&(O="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(O="onCompositionStart");O&&(ov&&t.locale!=="ko"&&(la||O!=="onCompositionStart"?O==="onCompositionEnd"&&la&&(A=rv()):(Rr=v,Ih="value"in Rr?Rr.value:Rr.textContent,la=!0)),T=Ds(p,O),0<T.length&&(O=new I0(O,e,null,t,v),y.push({event:O,listeners:T}),A?O.data=A:(A=lv(t),A!==null&&(O.data=A)))),(A=Ay?Fy(e,t):Oy(e,t))&&(p=Ds(p,"onBeforeInput"),0<p.length&&(v=new I0("onBeforeInput","beforeinput",null,t,v),y.push({event:v,listeners:p}),v.data=A))}bv(y,n)})}function Ql(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ds(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Hl(e,t),l!=null&&r.unshift(Ql(e,l,a)),l=Hl(e,n),l!=null&&r.push(Ql(e,l,a))),e=e.return}return r}function Jo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function H0(e,n,t,r,a){for(var l=n._reactName,i=[];t!==null&&t!==r;){var s=t,u=s.alternate,p=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&p!==null&&(s=p,a?(u=Hl(t,l),u!=null&&i.unshift(Ql(t,u,s))):a||(u=Hl(t,l),u!=null&&i.push(Ql(t,u,s)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Ky=/\r\n?/g,Xy=/\u0000|\uFFFD/g;function W0(e){return(typeof e=="string"?e:""+e).replace(Ky,`
`).replace(Xy,"")}function Yi(e,n,t){if(n=W0(n),W0(e)!==n&&t)throw Error(Y(425))}function Bs(){}var Su=null,Tu=null;function _u(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Lu=typeof setTimeout=="function"?setTimeout:void 0,Jy=typeof clearTimeout=="function"?clearTimeout:void 0,V0=typeof Promise=="function"?Promise:void 0,e7=typeof queueMicrotask=="function"?queueMicrotask:typeof V0<"u"?function(e){return V0.resolve(null).then(e).catch(n7)}:Lu;function n7(e){setTimeout(function(){throw e})}function Ic(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),Gl(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);Gl(n)}function Br(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function G0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Da=Math.random().toString(36).slice(2),qt="__reactFiber$"+Da,Kl="__reactProps$"+Da,fr="__reactContainer$"+Da,$u="__reactEvents$"+Da,t7="__reactListeners$"+Da,r7="__reactHandles$"+Da;function bo(e){var n=e[qt];if(n)return n;for(var t=e.parentNode;t;){if(n=t[fr]||t[qt]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=G0(e);e!==null;){if(t=e[qt])return t;e=G0(e)}return n}e=t,t=e.parentNode}return null}function fi(e){return e=e[qt]||e[fr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function da(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Y(33))}function yd(e){return e[Kl]||null}var Nu=[],ca=-1;function Zr(e){return{current:e}}function Je(e){0>ca||(e.current=Nu[ca],Nu[ca]=null,ca--)}function Ge(e,n){ca++,Nu[ca]=e.current,e.current=n}var Gr={},Bn=Zr(Gr),rt=Zr(!1),_o=Gr;function $a(e,n){var t=e.type.contextTypes;if(!t)return Gr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in t)a[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function ot(e){return e=e.childContextTypes,e!=null}function js(){Je(rt),Je(Bn)}function Y0(e,n,t){if(Bn.current!==Gr)throw Error(Y(168));Ge(Bn,n),Ge(rt,t)}function wv(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(Y(108,j8(e)||"Unknown",a));return on({},t,r)}function Us(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gr,_o=Bn.current,Ge(Bn,e),Ge(rt,rt.current),!0}function q0(e,n,t){var r=e.stateNode;if(!r)throw Error(Y(169));t?(e=wv(e,n,_o),r.__reactInternalMemoizedMergedChildContext=e,Je(rt),Je(Bn),Ge(Bn,e)):Je(rt),Ge(rt,t)}var sr=null,wd=!1,Mc=!1;function xv(e){sr===null?sr=[e]:sr.push(e)}function o7(e){wd=!0,xv(e)}function Qr(){if(!Mc&&sr!==null){Mc=!0;var e=0,n=De;try{var t=sr;for(De=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}sr=null,wd=!1}catch(a){throw sr!==null&&(sr=sr.slice(e+1)),Gg(Lh,Qr),a}finally{De=n,Mc=!1}}return null}var ua=[],ha=0,Hs=null,Ws=0,xt=[],kt=0,Lo=null,dr=1,cr="";function po(e,n){ua[ha++]=Ws,ua[ha++]=Hs,Hs=e,Ws=n}function kv(e,n,t){xt[kt++]=dr,xt[kt++]=cr,xt[kt++]=Lo,Lo=e;var r=dr;e=cr;var a=32-Dt(r)-1;r&=~(1<<a),t+=1;var l=32-Dt(n)+a;if(30<l){var i=a-a%5;l=(r&(1<<i)-1).toString(32),r>>=i,a-=i,dr=1<<32-Dt(n)+a|t<<a|r,cr=l+e}else dr=1<<l|t<<a|r,cr=e}function Fh(e){e.return!==null&&(po(e,1),kv(e,1,0))}function Oh(e){for(;e===Hs;)Hs=ua[--ha],ua[ha]=null,Ws=ua[--ha],ua[ha]=null;for(;e===Lo;)Lo=xt[--kt],xt[kt]=null,cr=xt[--kt],xt[kt]=null,dr=xt[--kt],xt[kt]=null}var gt=null,ft=null,en=!1,Ot=null;function Cv(e,n){var t=Ct(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Z0(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,gt=e,ft=Br(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,gt=e,ft=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Lo!==null?{id:dr,overflow:cr}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ct(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,gt=e,ft=null,!0):!1;default:return!1}}function Eu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Iu(e){if(en){var n=ft;if(n){var t=n;if(!Z0(e,n)){if(Eu(e))throw Error(Y(418));n=Br(t.nextSibling);var r=gt;n&&Z0(e,n)?Cv(r,t):(e.flags=e.flags&-4097|2,en=!1,gt=e)}}else{if(Eu(e))throw Error(Y(418));e.flags=e.flags&-4097|2,en=!1,gt=e}}}function Q0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;gt=e}function qi(e){if(e!==gt)return!1;if(!en)return Q0(e),en=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!_u(e.type,e.memoizedProps)),n&&(n=ft)){if(Eu(e))throw Sv(),Error(Y(418));for(;n;)Cv(e,n),n=Br(n.nextSibling)}if(Q0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ft=Br(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ft=null}}else ft=gt?Br(e.stateNode.nextSibling):null;return!0}function Sv(){for(var e=ft;e;)e=Br(e.nextSibling)}function Na(){ft=gt=null,en=!1}function zh(e){Ot===null?Ot=[e]:Ot.push(e)}var a7=yr.ReactCurrentBatchConfig;function Pt(e,n){if(e&&e.defaultProps){n=on({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Vs=Zr(null),Gs=null,pa=null,Dh=null;function Bh(){Dh=pa=Gs=null}function jh(e){var n=Vs.current;Je(Vs),e._currentValue=n}function Mu(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Ca(e,n){Gs=e,Dh=pa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(tt=!0),e.firstContext=null)}function Tt(e){var n=e._currentValue;if(Dh!==e)if(e={context:e,memoizedValue:n,next:null},pa===null){if(Gs===null)throw Error(Y(308));pa=e,Gs.dependencies={lanes:0,firstContext:e}}else pa=pa.next=e;return n}var yo=null;function Uh(e){yo===null?yo=[e]:yo.push(e)}function Tv(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,Uh(n)):(t.next=a.next,a.next=t),n.interleaved=t,gr(e,r)}function gr(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Er=!1;function Hh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _v(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ur(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function jr(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ie&2){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,gr(e,t)}return a=r.interleaved,a===null?(n.next=n,Uh(r)):(n.next=a.next,a.next=n),r.interleaved=n,gr(e,t)}function ps(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,$h(e,t)}}function K0(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?a=l=i:l=l.next=i,t=t.next}while(t!==null);l===null?a=l=n:l=l.next=n}else a=l=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ys(e,n,t,r){var a=e.updateQueue;Er=!1;var l=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var u=s,p=u.next;u.next=null,i===null?l=p:i.next=p,i=u;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==i&&(s===null?v.firstBaseUpdate=p:s.next=p,v.lastBaseUpdate=u))}if(l!==null){var y=a.baseState;i=0,v=p=u=null,s=l;do{var k=s.lane,E=s.eventTime;if((r&k)===k){v!==null&&(v=v.next={eventTime:E,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var N=e,C=s;switch(k=n,E=t,C.tag){case 1:if(N=C.payload,typeof N=="function"){y=N.call(E,y,k);break e}y=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=C.payload,k=typeof N=="function"?N.call(E,y,k):N,k==null)break e;y=on({},y,k);break e;case 2:Er=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,k=a.effects,k===null?a.effects=[s]:k.push(s))}else E={eventTime:E,lane:k,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(p=v=E,u=y):v=v.next=E,i|=k;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;k=s,s=k.next,k.next=null,a.lastBaseUpdate=k,a.shared.pending=null}}while(1);if(v===null&&(u=y),a.baseState=u,a.firstBaseUpdate=p,a.lastBaseUpdate=v,n=a.shared.interleaved,n!==null){a=n;do i|=a.lane,a=a.next;while(a!==n)}else l===null&&(a.shared.lanes=0);No|=i,e.lanes=i,e.memoizedState=y}}function X0(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(Y(191,a));a.call(r)}}}var Lv=new Tg.Component().refs;function Ru(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:on({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var xd={isMounted:function(e){return(e=e._reactInternals)?Po(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Vn(),a=Hr(e),l=ur(r,a);l.payload=n,t!=null&&(l.callback=t),n=jr(e,l,a),n!==null&&(Bt(n,e,a,r),ps(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Vn(),a=Hr(e),l=ur(r,a);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=jr(e,l,a),n!==null&&(Bt(n,e,a,r),ps(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Vn(),r=Hr(e),a=ur(t,r);a.tag=2,n!=null&&(a.callback=n),n=jr(e,a,r),n!==null&&(Bt(n,e,r,t),ps(n,e,r))}};function J0(e,n,t,r,a,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):n.prototype&&n.prototype.isPureReactComponent?!ql(t,r)||!ql(a,l):!0}function $v(e,n,t){var r=!1,a=Gr,l=n.contextType;return typeof l=="object"&&l!==null?l=Tt(l):(a=ot(n)?_o:Bn.current,r=n.contextTypes,l=(r=r!=null)?$a(e,a):Gr),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=xd,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),n}function e1(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&xd.enqueueReplaceState(n,n.state,null)}function Pu(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs=Lv,Hh(e);var l=n.contextType;typeof l=="object"&&l!==null?a.context=Tt(l):(l=ot(n)?_o:Bn.current,a.context=$a(e,l)),a.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Ru(e,n,l,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&xd.enqueueReplaceState(a,a.state,null),Ys(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ul(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Y(309));var r=t.stateNode}if(!r)throw Error(Y(147,e));var a=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(i){var s=a.refs;s===Lv&&(s=a.refs={}),i===null?delete s[l]:s[l]=i},n._stringRef=l,n)}if(typeof e!="string")throw Error(Y(284));if(!t._owner)throw Error(Y(290,e))}return e}function Zi(e,n){throw e=Object.prototype.toString.call(n),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function n1(e){var n=e._init;return n(e._payload)}function Nv(e){function n(w,g){if(e){var b=w.deletions;b===null?(w.deletions=[g],w.flags|=16):b.push(g)}}function t(w,g){if(!e)return null;for(;g!==null;)n(w,g),g=g.sibling;return null}function r(w,g){for(w=new Map;g!==null;)g.key!==null?w.set(g.key,g):w.set(g.index,g),g=g.sibling;return w}function a(w,g){return w=Wr(w,g),w.index=0,w.sibling=null,w}function l(w,g,b){return w.index=b,e?(b=w.alternate,b!==null?(b=b.index,b<g?(w.flags|=2,g):b):(w.flags|=2,g)):(w.flags|=1048576,g)}function i(w){return e&&w.alternate===null&&(w.flags|=2),w}function s(w,g,b,m){return g===null||g.tag!==6?(g=Dc(b,w.mode,m),g.return=w,g):(g=a(g,b),g.return=w,g)}function u(w,g,b,m){var L=b.type;return L===aa?v(w,g,b.props.children,m,b.key):g!==null&&(g.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Nr&&n1(L)===g.type)?(m=a(g,b.props),m.ref=ul(w,g,b),m.return=w,m):(m=ys(b.type,b.key,b.props,null,w.mode,m),m.ref=ul(w,g,b),m.return=w,m)}function p(w,g,b,m){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=Bc(b,w.mode,m),g.return=w,g):(g=a(g,b.children||[]),g.return=w,g)}function v(w,g,b,m,L){return g===null||g.tag!==7?(g=To(b,w.mode,m,L),g.return=w,g):(g=a(g,b),g.return=w,g)}function y(w,g,b){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Dc(""+g,w.mode,b),g.return=w,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case zi:return b=ys(g.type,g.key,g.props,null,w.mode,b),b.ref=ul(w,null,g),b.return=w,b;case oa:return g=Bc(g,w.mode,b),g.return=w,g;case Nr:var m=g._init;return y(w,m(g._payload),b)}if(yl(g)||ll(g))return g=To(g,w.mode,b,null),g.return=w,g;Zi(w,g)}return null}function k(w,g,b,m){var L=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return L!==null?null:s(w,g,""+b,m);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case zi:return b.key===L?u(w,g,b,m):null;case oa:return b.key===L?p(w,g,b,m):null;case Nr:return L=b._init,k(w,g,L(b._payload),m)}if(yl(b)||ll(b))return L!==null?null:v(w,g,b,m,null);Zi(w,b)}return null}function E(w,g,b,m,L){if(typeof m=="string"&&m!==""||typeof m=="number")return w=w.get(b)||null,s(g,w,""+m,L);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case zi:return w=w.get(m.key===null?b:m.key)||null,u(g,w,m,L);case oa:return w=w.get(m.key===null?b:m.key)||null,p(g,w,m,L);case Nr:var T=m._init;return E(w,g,b,T(m._payload),L)}if(yl(m)||ll(m))return w=w.get(b)||null,v(g,w,m,L,null);Zi(g,m)}return null}function N(w,g,b,m){for(var L=null,T=null,A=g,O=g=0,j=null;A!==null&&O<b.length;O++){A.index>O?(j=A,A=null):j=A.sibling;var q=k(w,A,b[O],m);if(q===null){A===null&&(A=j);break}e&&A&&q.alternate===null&&n(w,A),g=l(q,g,O),T===null?L=q:T.sibling=q,T=q,A=j}if(O===b.length)return t(w,A),en&&po(w,O),L;if(A===null){for(;O<b.length;O++)A=y(w,b[O],m),A!==null&&(g=l(A,g,O),T===null?L=A:T.sibling=A,T=A);return en&&po(w,O),L}for(A=r(w,A);O<b.length;O++)j=E(A,w,O,b[O],m),j!==null&&(e&&j.alternate!==null&&A.delete(j.key===null?O:j.key),g=l(j,g,O),T===null?L=j:T.sibling=j,T=j);return e&&A.forEach(function(fe){return n(w,fe)}),en&&po(w,O),L}function C(w,g,b,m){var L=ll(b);if(typeof L!="function")throw Error(Y(150));if(b=L.call(b),b==null)throw Error(Y(151));for(var T=L=null,A=g,O=g=0,j=null,q=b.next();A!==null&&!q.done;O++,q=b.next()){A.index>O?(j=A,A=null):j=A.sibling;var fe=k(w,A,q.value,m);if(fe===null){A===null&&(A=j);break}e&&A&&fe.alternate===null&&n(w,A),g=l(fe,g,O),T===null?L=fe:T.sibling=fe,T=fe,A=j}if(q.done)return t(w,A),en&&po(w,O),L;if(A===null){for(;!q.done;O++,q=b.next())q=y(w,q.value,m),q!==null&&(g=l(q,g,O),T===null?L=q:T.sibling=q,T=q);return en&&po(w,O),L}for(A=r(w,A);!q.done;O++,q=b.next())q=E(A,w,O,q.value,m),q!==null&&(e&&q.alternate!==null&&A.delete(q.key===null?O:q.key),g=l(q,g,O),T===null?L=q:T.sibling=q,T=q);return e&&A.forEach(function(ce){return n(w,ce)}),en&&po(w,O),L}function M(w,g,b,m){if(typeof b=="object"&&b!==null&&b.type===aa&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case zi:e:{for(var L=b.key,T=g;T!==null;){if(T.key===L){if(L=b.type,L===aa){if(T.tag===7){t(w,T.sibling),g=a(T,b.props.children),g.return=w,w=g;break e}}else if(T.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Nr&&n1(L)===T.type){t(w,T.sibling),g=a(T,b.props),g.ref=ul(w,T,b),g.return=w,w=g;break e}t(w,T);break}else n(w,T);T=T.sibling}b.type===aa?(g=To(b.props.children,w.mode,m,b.key),g.return=w,w=g):(m=ys(b.type,b.key,b.props,null,w.mode,m),m.ref=ul(w,g,b),m.return=w,w=m)}return i(w);case oa:e:{for(T=b.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){t(w,g.sibling),g=a(g,b.children||[]),g.return=w,w=g;break e}else{t(w,g);break}else n(w,g);g=g.sibling}g=Bc(b,w.mode,m),g.return=w,w=g}return i(w);case Nr:return T=b._init,M(w,g,T(b._payload),m)}if(yl(b))return N(w,g,b,m);if(ll(b))return C(w,g,b,m);Zi(w,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,g!==null&&g.tag===6?(t(w,g.sibling),g=a(g,b),g.return=w,w=g):(t(w,g),g=Dc(b,w.mode,m),g.return=w,w=g),i(w)):t(w,g)}return M}var Ea=Nv(!0),Ev=Nv(!1),gi={},Kt=Zr(gi),Xl=Zr(gi),Jl=Zr(gi);function wo(e){if(e===gi)throw Error(Y(174));return e}function Wh(e,n){switch(Ge(Jl,n),Ge(Xl,e),Ge(Kt,gi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:hu(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=hu(n,e)}Je(Kt),Ge(Kt,n)}function Ia(){Je(Kt),Je(Xl),Je(Jl)}function Iv(e){wo(Jl.current);var n=wo(Kt.current),t=hu(n,e.type);n!==t&&(Ge(Xl,e),Ge(Kt,t))}function Vh(e){Xl.current===e&&(Je(Kt),Je(Xl))}var tn=Zr(0);function qs(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Rc=[];function Gh(){for(var e=0;e<Rc.length;e++)Rc[e]._workInProgressVersionPrimary=null;Rc.length=0}var fs=yr.ReactCurrentDispatcher,Pc=yr.ReactCurrentBatchConfig,$o=0,rn=null,bn=null,Cn=null,Zs=!1,Rl=!1,ei=0,l7=0;function On(){throw Error(Y(321))}function Yh(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!jt(e[t],n[t]))return!1;return!0}function qh(e,n,t,r,a,l){if($o=l,rn=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,fs.current=e===null||e.memoizedState===null?c7:u7,e=t(r,a),Rl){l=0;do{if(Rl=!1,ei=0,25<=l)throw Error(Y(301));l+=1,Cn=bn=null,n.updateQueue=null,fs.current=h7,e=t(r,a)}while(Rl)}if(fs.current=Qs,n=bn!==null&&bn.next!==null,$o=0,Cn=bn=rn=null,Zs=!1,n)throw Error(Y(300));return e}function Zh(){var e=ei!==0;return ei=0,e}function Gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?rn.memoizedState=Cn=e:Cn=Cn.next=e,Cn}function _t(){if(bn===null){var e=rn.alternate;e=e!==null?e.memoizedState:null}else e=bn.next;var n=Cn===null?rn.memoizedState:Cn.next;if(n!==null)Cn=n,bn=e;else{if(e===null)throw Error(Y(310));bn=e,e={memoizedState:bn.memoizedState,baseState:bn.baseState,baseQueue:bn.baseQueue,queue:bn.queue,next:null},Cn===null?rn.memoizedState=Cn=e:Cn=Cn.next=e}return Cn}function ni(e,n){return typeof n=="function"?n(e):n}function Ac(e){var n=_t(),t=n.queue;if(t===null)throw Error(Y(311));t.lastRenderedReducer=e;var r=bn,a=r.baseQueue,l=t.pending;if(l!==null){if(a!==null){var i=a.next;a.next=l.next,l.next=i}r.baseQueue=a=l,t.pending=null}if(a!==null){l=a.next,r=r.baseState;var s=i=null,u=null,p=l;do{var v=p.lane;if(($o&v)===v)u!==null&&(u=u.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var y={lane:v,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};u===null?(s=u=y,i=r):u=u.next=y,rn.lanes|=v,No|=v}p=p.next}while(p!==null&&p!==l);u===null?i=r:u.next=s,jt(r,n.memoizedState)||(tt=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do l=a.lane,rn.lanes|=l,No|=l,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Fc(e){var n=_t(),t=n.queue;if(t===null)throw Error(Y(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,l=n.memoizedState;if(a!==null){t.pending=null;var i=a=a.next;do l=e(l,i.action),i=i.next;while(i!==a);jt(l,n.memoizedState)||(tt=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Mv(){}function Rv(e,n){var t=rn,r=_t(),a=n(),l=!jt(r.memoizedState,a);if(l&&(r.memoizedState=a,tt=!0),r=r.queue,Qh(Fv.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||Cn!==null&&Cn.memoizedState.tag&1){if(t.flags|=2048,ti(9,Av.bind(null,t,r,a,n),void 0,null),Sn===null)throw Error(Y(349));$o&30||Pv(t,n,a)}return a}function Pv(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=rn.updateQueue,n===null?(n={lastEffect:null,stores:null},rn.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Av(e,n,t,r){n.value=t,n.getSnapshot=r,Ov(n)&&zv(e)}function Fv(e,n,t){return t(function(){Ov(n)&&zv(e)})}function Ov(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!jt(e,t)}catch{return!0}}function zv(e){var n=gr(e,1);n!==null&&Bt(n,e,1,-1)}function t1(e){var n=Gt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:e},n.queue=e,e=e.dispatch=d7.bind(null,rn,e),[n.memoizedState,e]}function ti(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=rn.updateQueue,n===null?(n={lastEffect:null,stores:null},rn.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Dv(){return _t().memoizedState}function gs(e,n,t,r){var a=Gt();rn.flags|=e,a.memoizedState=ti(1|n,t,void 0,r===void 0?null:r)}function kd(e,n,t,r){var a=_t();r=r===void 0?null:r;var l=void 0;if(bn!==null){var i=bn.memoizedState;if(l=i.destroy,r!==null&&Yh(r,i.deps)){a.memoizedState=ti(n,t,l,r);return}}rn.flags|=e,a.memoizedState=ti(1|n,t,l,r)}function r1(e,n){return gs(8390656,8,e,n)}function Qh(e,n){return kd(2048,8,e,n)}function Bv(e,n){return kd(4,2,e,n)}function jv(e,n){return kd(4,4,e,n)}function Uv(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Hv(e,n,t){return t=t!=null?t.concat([e]):null,kd(4,4,Uv.bind(null,n,e),t)}function Kh(){}function Wv(e,n){var t=_t();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Yh(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Vv(e,n){var t=_t();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Yh(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Gv(e,n,t){return $o&21?(jt(t,n)||(t=Zg(),rn.lanes|=t,No|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=t)}function i7(e,n){var t=De;De=t!==0&&4>t?t:4,e(!0);var r=Pc.transition;Pc.transition={};try{e(!1),n()}finally{De=t,Pc.transition=r}}function Yv(){return _t().memoizedState}function s7(e,n,t){var r=Hr(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},qv(e))Zv(n,t);else if(t=Tv(e,n,t,r),t!==null){var a=Vn();Bt(t,e,r,a),Qv(t,n,r)}}function d7(e,n,t){var r=Hr(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(qv(e))Zv(n,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var i=n.lastRenderedState,s=l(i,t);if(a.hasEagerState=!0,a.eagerState=s,jt(s,i)){var u=n.interleaved;u===null?(a.next=a,Uh(n)):(a.next=u.next,u.next=a),n.interleaved=a;return}}catch{}finally{}t=Tv(e,n,a,r),t!==null&&(a=Vn(),Bt(t,e,r,a),Qv(t,n,r))}}function qv(e){var n=e.alternate;return e===rn||n!==null&&n===rn}function Zv(e,n){Rl=Zs=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Qv(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,$h(e,t)}}var Qs={readContext:Tt,useCallback:On,useContext:On,useEffect:On,useImperativeHandle:On,useInsertionEffect:On,useLayoutEffect:On,useMemo:On,useReducer:On,useRef:On,useState:On,useDebugValue:On,useDeferredValue:On,useTransition:On,useMutableSource:On,useSyncExternalStore:On,useId:On,unstable_isNewReconciler:!1},c7={readContext:Tt,useCallback:function(e,n){return Gt().memoizedState=[e,n===void 0?null:n],e},useContext:Tt,useEffect:r1,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,gs(4194308,4,Uv.bind(null,n,e),t)},useLayoutEffect:function(e,n){return gs(4194308,4,e,n)},useInsertionEffect:function(e,n){return gs(4,2,e,n)},useMemo:function(e,n){var t=Gt();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Gt();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=s7.bind(null,rn,e),[r.memoizedState,e]},useRef:function(e){var n=Gt();return e={current:e},n.memoizedState=e},useState:t1,useDebugValue:Kh,useDeferredValue:function(e){return Gt().memoizedState=e},useTransition:function(){var e=t1(!1),n=e[0];return e=i7.bind(null,e[1]),Gt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=rn,a=Gt();if(en){if(t===void 0)throw Error(Y(407));t=t()}else{if(t=n(),Sn===null)throw Error(Y(349));$o&30||Pv(r,n,t)}a.memoizedState=t;var l={value:t,getSnapshot:n};return a.queue=l,r1(Fv.bind(null,r,l,e),[e]),r.flags|=2048,ti(9,Av.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Gt(),n=Sn.identifierPrefix;if(en){var t=cr,r=dr;t=(r&~(1<<32-Dt(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=ei++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=l7++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},u7={readContext:Tt,useCallback:Wv,useContext:Tt,useEffect:Qh,useImperativeHandle:Hv,useInsertionEffect:Bv,useLayoutEffect:jv,useMemo:Vv,useReducer:Ac,useRef:Dv,useState:function(){return Ac(ni)},useDebugValue:Kh,useDeferredValue:function(e){var n=_t();return Gv(n,bn.memoizedState,e)},useTransition:function(){var e=Ac(ni)[0],n=_t().memoizedState;return[e,n]},useMutableSource:Mv,useSyncExternalStore:Rv,useId:Yv,unstable_isNewReconciler:!1},h7={readContext:Tt,useCallback:Wv,useContext:Tt,useEffect:Qh,useImperativeHandle:Hv,useInsertionEffect:Bv,useLayoutEffect:jv,useMemo:Vv,useReducer:Fc,useRef:Dv,useState:function(){return Fc(ni)},useDebugValue:Kh,useDeferredValue:function(e){var n=_t();return bn===null?n.memoizedState=e:Gv(n,bn.memoizedState,e)},useTransition:function(){var e=Fc(ni)[0],n=_t().memoizedState;return[e,n]},useMutableSource:Mv,useSyncExternalStore:Rv,useId:Yv,unstable_isNewReconciler:!1};function Ma(e,n){try{var t="",r=n;do t+=B8(r),r=r.return;while(r);var a=t}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:a,digest:null}}function Oc(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Au(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var p7=typeof WeakMap=="function"?WeakMap:Map;function Kv(e,n,t){t=ur(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Xs||(Xs=!0,Vu=r),Au(e,n)},t}function Xv(e,n,t){t=ur(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){Au(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Au(e,n),typeof r!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function o1(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new p7;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=L7.bind(null,e,n,t),n.then(e,e))}function a1(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function l1(e,n,t,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=ur(-1,1),n.tag=2,jr(t,n,1))),t.lanes|=1),e)}var f7=yr.ReactCurrentOwner,tt=!1;function Hn(e,n,t,r){n.child=e===null?Ev(n,null,t,r):Ea(n,e.child,t,r)}function i1(e,n,t,r,a){t=t.render;var l=n.ref;return Ca(n,a),r=qh(e,n,t,r,l,a),t=Zh(),e!==null&&!tt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,vr(e,n,a)):(en&&t&&Fh(n),n.flags|=1,Hn(e,n,r,a),n.child)}function s1(e,n,t,r,a){if(e===null){var l=t.type;return typeof l=="function"&&!ap(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Jv(e,n,l,r,a)):(e=ys(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&a)){var i=l.memoizedProps;if(t=t.compare,t=t!==null?t:ql,t(i,r)&&e.ref===n.ref)return vr(e,n,a)}return n.flags|=1,e=Wr(l,r),e.ref=n.ref,e.return=n,n.child=e}function Jv(e,n,t,r,a){if(e!==null){var l=e.memoizedProps;if(ql(l,r)&&e.ref===n.ref)if(tt=!1,n.pendingProps=r=l,(e.lanes&a)!==0)e.flags&131072&&(tt=!0);else return n.lanes=e.lanes,vr(e,n,a)}return Fu(e,n,t,r,a)}function em(e,n,t){var r=n.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(ga,dt),dt|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Ge(ga,dt),dt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,Ge(ga,dt),dt|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,Ge(ga,dt),dt|=r;return Hn(e,n,a,t),n.child}function nm(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Fu(e,n,t,r,a){var l=ot(t)?_o:Bn.current;return l=$a(n,l),Ca(n,a),t=qh(e,n,t,r,l,a),r=Zh(),e!==null&&!tt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,vr(e,n,a)):(en&&r&&Fh(n),n.flags|=1,Hn(e,n,t,a),n.child)}function d1(e,n,t,r,a){if(ot(t)){var l=!0;Us(n)}else l=!1;if(Ca(n,a),n.stateNode===null)vs(e,n),$v(n,t,r),Pu(n,t,r,a),r=!0;else if(e===null){var i=n.stateNode,s=n.memoizedProps;i.props=s;var u=i.context,p=t.contextType;typeof p=="object"&&p!==null?p=Tt(p):(p=ot(t)?_o:Bn.current,p=$a(n,p));var v=t.getDerivedStateFromProps,y=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function";y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||u!==p)&&e1(n,i,r,p),Er=!1;var k=n.memoizedState;i.state=k,Ys(n,r,i,a),u=n.memoizedState,s!==r||k!==u||rt.current||Er?(typeof v=="function"&&(Ru(n,t,v,r),u=n.memoizedState),(s=Er||J0(n,t,s,r,k,u,p))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),i.props=r,i.state=u,i.context=p,r=s):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,_v(e,n),s=n.memoizedProps,p=n.type===n.elementType?s:Pt(n.type,s),i.props=p,y=n.pendingProps,k=i.context,u=t.contextType,typeof u=="object"&&u!==null?u=Tt(u):(u=ot(t)?_o:Bn.current,u=$a(n,u));var E=t.getDerivedStateFromProps;(v=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==y||k!==u)&&e1(n,i,r,u),Er=!1,k=n.memoizedState,i.state=k,Ys(n,r,i,a);var N=n.memoizedState;s!==y||k!==N||rt.current||Er?(typeof E=="function"&&(Ru(n,t,E,r),N=n.memoizedState),(p=Er||J0(n,t,p,r,k,N,u)||!1)?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,N,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,N,u)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&k===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&k===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=N),i.props=r,i.state=N,i.context=u,r=p):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&k===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&k===e.memoizedState||(n.flags|=1024),r=!1)}return Ou(e,n,t,r,l,a)}function Ou(e,n,t,r,a,l){nm(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return a&&q0(n,t,!1),vr(e,n,l);r=n.stateNode,f7.current=n;var s=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=Ea(n,e.child,null,l),n.child=Ea(n,null,s,l)):Hn(e,n,s,l),n.memoizedState=r.state,a&&q0(n,t,!0),n.child}function tm(e){var n=e.stateNode;n.pendingContext?Y0(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Y0(e,n.context,!1),Wh(e,n.containerInfo)}function c1(e,n,t,r,a){return Na(),zh(a),n.flags|=256,Hn(e,n,t,r),n.child}var zu={dehydrated:null,treeContext:null,retryLane:0};function Du(e){return{baseLanes:e,cachePool:null,transitions:null}}function rm(e,n,t){var r=n.pendingProps,a=tn.current,l=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Ge(tn,a&1),e===null)return Iu(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,l?(r=n.mode,l=n.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Td(i,r,0,null),e=To(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Du(t),n.memoizedState=zu,e):Xh(n,i));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return g7(e,n,i,r,s,a,t);if(l){l=r.fallback,i=n.mode,a=e.child,s=a.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=Wr(a,u),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?l=Wr(s,l):(l=To(l,i,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,i=e.child.memoizedState,i=i===null?Du(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~t,n.memoizedState=zu,r}return l=e.child,e=l.sibling,r=Wr(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Xh(e,n){return n=Td({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Qi(e,n,t,r){return r!==null&&zh(r),Ea(n,e.child,null,t),e=Xh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function g7(e,n,t,r,a,l,i){if(t)return n.flags&256?(n.flags&=-257,r=Oc(Error(Y(422))),Qi(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,a=n.mode,r=Td({mode:"visible",children:r.children},a,0,null),l=To(l,a,i,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&Ea(n,e.child,null,i),n.child.memoizedState=Du(i),n.memoizedState=zu,l);if(!(n.mode&1))return Qi(e,n,i,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(Y(419)),r=Oc(l,r,void 0),Qi(e,n,i,r)}if(s=(i&e.childLanes)!==0,tt||s){if(r=Sn,r!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|i)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,gr(e,a),Bt(r,e,a,-1))}return op(),r=Oc(Error(Y(421))),Qi(e,n,i,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=$7.bind(null,e),a._reactRetry=n,null):(e=l.treeContext,ft=Br(a.nextSibling),gt=n,en=!0,Ot=null,e!==null&&(xt[kt++]=dr,xt[kt++]=cr,xt[kt++]=Lo,dr=e.id,cr=e.overflow,Lo=n),n=Xh(n,r.children),n.flags|=4096,n)}function u1(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Mu(e.return,n,t)}function zc(e,n,t,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=a)}function om(e,n,t){var r=n.pendingProps,a=r.revealOrder,l=r.tail;if(Hn(e,n,r.children,t),r=tn.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&u1(e,t,n);else if(e.tag===19)u1(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ge(tn,r),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&qs(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),zc(n,!1,a,t,l);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&qs(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}zc(n,!0,t,null,l);break;case"together":zc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function vs(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function vr(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),No|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(Y(153));if(n.child!==null){for(e=n.child,t=Wr(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Wr(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function v7(e,n,t){switch(n.tag){case 3:tm(n),Na();break;case 5:Iv(n);break;case 1:ot(n.type)&&Us(n);break;case 4:Wh(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;Ge(Vs,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(Ge(tn,tn.current&1),n.flags|=128,null):t&n.child.childLanes?rm(e,n,t):(Ge(tn,tn.current&1),e=vr(e,n,t),e!==null?e.sibling:null);Ge(tn,tn.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return om(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ge(tn,tn.current),r)break;return null;case 22:case 23:return n.lanes=0,em(e,n,t)}return vr(e,n,t)}var am,Bu,lm,im;am=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Bu=function(){};lm=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,wo(Kt.current);var l=null;switch(t){case"input":a=su(e,a),r=su(e,r),l=[];break;case"select":a=on({},a,{value:void 0}),r=on({},r,{value:void 0}),l=[];break;case"textarea":a=uu(e,a),r=uu(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bs)}pu(t,r);var i;t=null;for(p in a)if(!r.hasOwnProperty(p)&&a.hasOwnProperty(p)&&a[p]!=null)if(p==="style"){var s=a[p];for(i in s)s.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(jl.hasOwnProperty(p)?l||(l=[]):(l=l||[]).push(p,null));for(p in r){var u=r[p];if(s=a!=null?a[p]:void 0,r.hasOwnProperty(p)&&u!==s&&(u!=null||s!=null))if(p==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(t||(t={}),t[i]=u[i])}else t||(l||(l=[]),l.push(p,t)),t=u;else p==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(l=l||[]).push(p,u)):p==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(p,""+u):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(jl.hasOwnProperty(p)?(u!=null&&p==="onScroll"&&Ke("scroll",e),l||s===u||(l=[])):(l=l||[]).push(p,u))}t&&(l=l||[]).push("style",t);var p=l;(n.updateQueue=p)&&(n.flags|=4)}};im=function(e,n,t,r){t!==r&&(n.flags|=4)};function hl(e,n){if(!en)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function zn(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function m7(e,n,t){var r=n.pendingProps;switch(Oh(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zn(n),null;case 1:return ot(n.type)&&js(),zn(n),null;case 3:return r=n.stateNode,Ia(),Je(rt),Je(Bn),Gh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ot!==null&&(qu(Ot),Ot=null))),Bu(e,n),zn(n),null;case 5:Vh(n);var a=wo(Jl.current);if(t=n.type,e!==null&&n.stateNode!=null)lm(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(Y(166));return zn(n),null}if(e=wo(Kt.current),qi(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[qt]=n,r[Kl]=l,e=(n.mode&1)!==0,t){case"dialog":Ke("cancel",r),Ke("close",r);break;case"iframe":case"object":case"embed":Ke("load",r);break;case"video":case"audio":for(a=0;a<xl.length;a++)Ke(xl[a],r);break;case"source":Ke("error",r);break;case"img":case"image":case"link":Ke("error",r),Ke("load",r);break;case"details":Ke("toggle",r);break;case"input":w0(r,l),Ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Ke("invalid",r);break;case"textarea":k0(r,l),Ke("invalid",r)}pu(t,l),a=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Yi(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Yi(r.textContent,s,e),a=["children",""+s]):jl.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Ke("scroll",r)}switch(t){case"input":Di(r),x0(r,l,!0);break;case"textarea":Di(r),C0(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Bs)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pg(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[qt]=n,e[Kl]=r,am(e,n,!1,!1),n.stateNode=e;e:{switch(i=fu(t,r),t){case"dialog":Ke("cancel",e),Ke("close",e),a=r;break;case"iframe":case"object":case"embed":Ke("load",e),a=r;break;case"video":case"audio":for(a=0;a<xl.length;a++)Ke(xl[a],e);a=r;break;case"source":Ke("error",e),a=r;break;case"img":case"image":case"link":Ke("error",e),Ke("load",e),a=r;break;case"details":Ke("toggle",e),a=r;break;case"input":w0(e,r),a=su(e,r),Ke("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=on({},r,{value:void 0}),Ke("invalid",e);break;case"textarea":k0(e,r),a=uu(e,r),Ke("invalid",e);break;default:a=r}pu(t,a),s=a;for(l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="style"?Og(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ag(e,u)):l==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Ul(e,u):typeof u=="number"&&Ul(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(jl.hasOwnProperty(l)?u!=null&&l==="onScroll"&&Ke("scroll",e):u!=null&&kh(e,l,u,i))}switch(t){case"input":Di(e),x0(e,r,!1);break;case"textarea":Di(e),C0(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vr(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?ya(e,!!r.multiple,l,!1):r.defaultValue!=null&&ya(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Bs)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return zn(n),null;case 6:if(e&&n.stateNode!=null)im(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(Y(166));if(t=wo(Jl.current),wo(Kt.current),qi(n)){if(r=n.stateNode,t=n.memoizedProps,r[qt]=n,(l=r.nodeValue!==t)&&(e=gt,e!==null))switch(e.tag){case 3:Yi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yi(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[qt]=n,n.stateNode=r}return zn(n),null;case 13:if(Je(tn),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(en&&ft!==null&&n.mode&1&&!(n.flags&128))Sv(),Na(),n.flags|=98560,l=!1;else if(l=qi(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(Y(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(Y(317));l[qt]=n}else Na(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;zn(n),l=!1}else Ot!==null&&(qu(Ot),Ot=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||tn.current&1?yn===0&&(yn=3):op())),n.updateQueue!==null&&(n.flags|=4),zn(n),null);case 4:return Ia(),Bu(e,n),e===null&&Zl(n.stateNode.containerInfo),zn(n),null;case 10:return jh(n.type._context),zn(n),null;case 17:return ot(n.type)&&js(),zn(n),null;case 19:if(Je(tn),l=n.memoizedState,l===null)return zn(n),null;if(r=(n.flags&128)!==0,i=l.rendering,i===null)if(r)hl(l,!1);else{if(yn!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=qs(e),i!==null){for(n.flags|=128,hl(l,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Ge(tn,tn.current&1|2),n.child}e=e.sibling}l.tail!==null&&sn()>Ra&&(n.flags|=128,r=!0,hl(l,!1),n.lanes=4194304)}else{if(!r)if(e=qs(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),hl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!en)return zn(n),null}else 2*sn()-l.renderingStartTime>Ra&&t!==1073741824&&(n.flags|=128,r=!0,hl(l,!1),n.lanes=4194304);l.isBackwards?(i.sibling=n.child,n.child=i):(t=l.last,t!==null?t.sibling=i:n.child=i,l.last=i)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=sn(),n.sibling=null,t=tn.current,Ge(tn,r?t&1|2:t&1),n):(zn(n),null);case 22:case 23:return rp(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?dt&1073741824&&(zn(n),n.subtreeFlags&6&&(n.flags|=8192)):zn(n),null;case 24:return null;case 25:return null}throw Error(Y(156,n.tag))}function b7(e,n){switch(Oh(n),n.tag){case 1:return ot(n.type)&&js(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ia(),Je(rt),Je(Bn),Gh(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Vh(n),null;case 13:if(Je(tn),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(Y(340));Na()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Je(tn),null;case 4:return Ia(),null;case 10:return jh(n.type._context),null;case 22:case 23:return rp(),null;case 24:return null;default:return null}}var Ki=!1,Dn=!1,y7=typeof WeakSet=="function"?WeakSet:Set,ne=null;function fa(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ln(e,n,r)}else t.current=null}function ju(e,n,t){try{t()}catch(r){ln(e,n,r)}}var h1=!1;function w7(e,n){if(Su=Os,e=uv(),Ah(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var i=0,s=-1,u=-1,p=0,v=0,y=e,k=null;n:for(;;){for(var E;y!==t||a!==0&&y.nodeType!==3||(s=i+a),y!==l||r!==0&&y.nodeType!==3||(u=i+r),y.nodeType===3&&(i+=y.nodeValue.length),(E=y.firstChild)!==null;)k=y,y=E;for(;;){if(y===e)break n;if(k===t&&++p===a&&(s=i),k===l&&++v===r&&(u=i),(E=y.nextSibling)!==null)break;y=k,k=y.parentNode}y=E}t=s===-1||u===-1?null:{start:s,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Tu={focusedElem:e,selectionRange:t},Os=!1,ne=n;ne!==null;)if(n=ne,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ne=e;else for(;ne!==null;){n=ne;try{var N=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var C=N.memoizedProps,M=N.memoizedState,w=n.stateNode,g=w.getSnapshotBeforeUpdate(n.elementType===n.type?C:Pt(n.type,C),M);w.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var b=n.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(m){ln(n,n.return,m)}if(e=n.sibling,e!==null){e.return=n.return,ne=e;break}ne=n.return}return N=h1,h1=!1,N}function Pl(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&ju(n,t,l)}a=a.next}while(a!==r)}}function Cd(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Uu(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function sm(e){var n=e.alternate;n!==null&&(e.alternate=null,sm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[qt],delete n[Kl],delete n[$u],delete n[t7],delete n[r7])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dm(e){return e.tag===5||e.tag===3||e.tag===4}function p1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Bs));else if(r!==4&&(e=e.child,e!==null))for(Hu(e,n,t),e=e.sibling;e!==null;)Hu(e,n,t),e=e.sibling}function Wu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wu(e,n,t),e=e.sibling;e!==null;)Wu(e,n,t),e=e.sibling}var Ln=null,Ft=!1;function _r(e,n,t){for(t=t.child;t!==null;)cm(e,n,t),t=t.sibling}function cm(e,n,t){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(gd,t)}catch{}switch(t.tag){case 5:Dn||fa(t,n);case 6:var r=Ln,a=Ft;Ln=null,_r(e,n,t),Ln=r,Ft=a,Ln!==null&&(Ft?(e=Ln,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ln.removeChild(t.stateNode));break;case 18:Ln!==null&&(Ft?(e=Ln,t=t.stateNode,e.nodeType===8?Ic(e.parentNode,t):e.nodeType===1&&Ic(e,t),Gl(e)):Ic(Ln,t.stateNode));break;case 4:r=Ln,a=Ft,Ln=t.stateNode.containerInfo,Ft=!0,_r(e,n,t),Ln=r,Ft=a;break;case 0:case 11:case 14:case 15:if(!Dn&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&ju(t,n,i),a=a.next}while(a!==r)}_r(e,n,t);break;case 1:if(!Dn&&(fa(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){ln(t,n,s)}_r(e,n,t);break;case 21:_r(e,n,t);break;case 22:t.mode&1?(Dn=(r=Dn)||t.memoizedState!==null,_r(e,n,t),Dn=r):_r(e,n,t);break;default:_r(e,n,t)}}function f1(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new y7),n.forEach(function(r){var a=N7.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function Mt(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var l=e,i=n,s=i;e:for(;s!==null;){switch(s.tag){case 5:Ln=s.stateNode,Ft=!1;break e;case 3:Ln=s.stateNode.containerInfo,Ft=!0;break e;case 4:Ln=s.stateNode.containerInfo,Ft=!0;break e}s=s.return}if(Ln===null)throw Error(Y(160));cm(l,i,a),Ln=null,Ft=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(p){ln(a,n,p)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)um(n,e),n=n.sibling}function um(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(n,e),Ut(e),r&4){try{Pl(3,e,e.return),Cd(3,e)}catch(C){ln(e,e.return,C)}try{Pl(5,e,e.return)}catch(C){ln(e,e.return,C)}}break;case 1:Mt(n,e),Ut(e),r&512&&t!==null&&fa(t,t.return);break;case 5:if(Mt(n,e),Ut(e),r&512&&t!==null&&fa(t,t.return),e.flags&32){var a=e.stateNode;try{Ul(a,"")}catch(C){ln(e,e.return,C)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,i=t!==null?t.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Mg(a,l),fu(s,i);var p=fu(s,l);for(i=0;i<u.length;i+=2){var v=u[i],y=u[i+1];v==="style"?Og(a,y):v==="dangerouslySetInnerHTML"?Ag(a,y):v==="children"?Ul(a,y):kh(a,v,y,p)}switch(s){case"input":du(a,l);break;case"textarea":Rg(a,l);break;case"select":var k=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var E=l.value;E!=null?ya(a,!!l.multiple,E,!1):k!==!!l.multiple&&(l.defaultValue!=null?ya(a,!!l.multiple,l.defaultValue,!0):ya(a,!!l.multiple,l.multiple?[]:"",!1))}a[Kl]=l}catch(C){ln(e,e.return,C)}}break;case 6:if(Mt(n,e),Ut(e),r&4){if(e.stateNode===null)throw Error(Y(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(C){ln(e,e.return,C)}}break;case 3:if(Mt(n,e),Ut(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Gl(n.containerInfo)}catch(C){ln(e,e.return,C)}break;case 4:Mt(n,e),Ut(e);break;case 13:Mt(n,e),Ut(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(np=sn())),r&4&&f1(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(Dn=(p=Dn)||v,Mt(n,e),Dn=p):Mt(n,e),Ut(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!v&&e.mode&1)for(ne=e,v=e.child;v!==null;){for(y=ne=v;ne!==null;){switch(k=ne,E=k.child,k.tag){case 0:case 11:case 14:case 15:Pl(4,k,k.return);break;case 1:fa(k,k.return);var N=k.stateNode;if(typeof N.componentWillUnmount=="function"){r=k,t=k.return;try{n=r,N.props=n.memoizedProps,N.state=n.memoizedState,N.componentWillUnmount()}catch(C){ln(r,t,C)}}break;case 5:fa(k,k.return);break;case 22:if(k.memoizedState!==null){v1(y);continue}}E!==null?(E.return=k,ne=E):v1(y)}v=v.sibling}e:for(v=null,y=e;;){if(y.tag===5){if(v===null){v=y;try{a=y.stateNode,p?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=y.stateNode,u=y.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Fg("display",i))}catch(C){ln(e,e.return,C)}}}else if(y.tag===6){if(v===null)try{y.stateNode.nodeValue=p?"":y.memoizedProps}catch(C){ln(e,e.return,C)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;v===y&&(v=null),y=y.return}v===y&&(v=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Mt(n,e),Ut(e),r&4&&f1(e);break;case 21:break;default:Mt(n,e),Ut(e)}}function Ut(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(dm(t)){var r=t;break e}t=t.return}throw Error(Y(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Ul(a,""),r.flags&=-33);var l=p1(e);Wu(e,l,a);break;case 3:case 4:var i=r.stateNode.containerInfo,s=p1(e);Hu(e,s,i);break;default:throw Error(Y(161))}}catch(u){ln(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function x7(e,n,t){ne=e,hm(e)}function hm(e,n,t){for(var r=(e.mode&1)!==0;ne!==null;){var a=ne,l=a.child;if(a.tag===22&&r){var i=a.memoizedState!==null||Ki;if(!i){var s=a.alternate,u=s!==null&&s.memoizedState!==null||Dn;s=Ki;var p=Dn;if(Ki=i,(Dn=u)&&!p)for(ne=a;ne!==null;)i=ne,u=i.child,i.tag===22&&i.memoizedState!==null?m1(a):u!==null?(u.return=i,ne=u):m1(a);for(;l!==null;)ne=l,hm(l),l=l.sibling;ne=a,Ki=s,Dn=p}g1(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,ne=l):g1(e)}}function g1(e){for(;ne!==null;){var n=ne;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Dn||Cd(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Dn)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:Pt(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&X0(n,l,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}X0(n,i,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var p=n.alternate;if(p!==null){var v=p.memoizedState;if(v!==null){var y=v.dehydrated;y!==null&&Gl(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}Dn||n.flags&512&&Uu(n)}catch(k){ln(n,n.return,k)}}if(n===e){ne=null;break}if(t=n.sibling,t!==null){t.return=n.return,ne=t;break}ne=n.return}}function v1(e){for(;ne!==null;){var n=ne;if(n===e){ne=null;break}var t=n.sibling;if(t!==null){t.return=n.return,ne=t;break}ne=n.return}}function m1(e){for(;ne!==null;){var n=ne;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Cd(4,n)}catch(u){ln(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(u){ln(n,a,u)}}var l=n.return;try{Uu(n)}catch(u){ln(n,l,u)}break;case 5:var i=n.return;try{Uu(n)}catch(u){ln(n,i,u)}}}catch(u){ln(n,n.return,u)}if(n===e){ne=null;break}var s=n.sibling;if(s!==null){s.return=n.return,ne=s;break}ne=n.return}}var k7=Math.ceil,Ks=yr.ReactCurrentDispatcher,Jh=yr.ReactCurrentOwner,St=yr.ReactCurrentBatchConfig,Ie=0,Sn=null,hn=null,Mn=0,dt=0,ga=Zr(0),yn=0,ri=null,No=0,Sd=0,ep=0,Al=null,nt=null,np=0,Ra=1/0,lr=null,Xs=!1,Vu=null,Ur=null,Xi=!1,Pr=null,Js=0,Fl=0,Gu=null,ms=-1,bs=0;function Vn(){return Ie&6?sn():ms!==-1?ms:ms=sn()}function Hr(e){return e.mode&1?Ie&2&&Mn!==0?Mn&-Mn:a7.transition!==null?(bs===0&&(bs=Zg()),bs):(e=De,e!==0||(e=window.event,e=e===void 0?16:tv(e.type)),e):1}function Bt(e,n,t,r){if(50<Fl)throw Fl=0,Gu=null,Error(Y(185));hi(e,t,r),(!(Ie&2)||e!==Sn)&&(e===Sn&&(!(Ie&2)&&(Sd|=t),yn===4&&Mr(e,Mn)),at(e,r),t===1&&Ie===0&&!(n.mode&1)&&(Ra=sn()+500,wd&&Qr()))}function at(e,n){var t=e.callbackNode;ay(e,n);var r=Fs(e,e===Sn?Mn:0);if(r===0)t!==null&&_0(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&_0(t),n===1)e.tag===0?o7(b1.bind(null,e)):xv(b1.bind(null,e)),e7(function(){!(Ie&6)&&Qr()}),t=null;else{switch(Qg(r)){case 1:t=Lh;break;case 4:t=Yg;break;case 16:t=As;break;case 536870912:t=qg;break;default:t=As}t=wm(t,pm.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function pm(e,n){if(ms=-1,bs=0,Ie&6)throw Error(Y(327));var t=e.callbackNode;if(Sa()&&e.callbackNode!==t)return null;var r=Fs(e,e===Sn?Mn:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ed(e,r);else{n=r;var a=Ie;Ie|=2;var l=gm();(Sn!==e||Mn!==n)&&(lr=null,Ra=sn()+500,So(e,n));do try{T7();break}catch(s){fm(e,s)}while(1);Bh(),Ks.current=l,Ie=a,hn!==null?n=0:(Sn=null,Mn=0,n=yn)}if(n!==0){if(n===2&&(a=yu(e),a!==0&&(r=a,n=Yu(e,a))),n===1)throw t=ri,So(e,0),Mr(e,r),at(e,sn()),t;if(n===6)Mr(e,r);else{if(a=e.current.alternate,!(r&30)&&!C7(a)&&(n=ed(e,r),n===2&&(l=yu(e),l!==0&&(r=l,n=Yu(e,l))),n===1))throw t=ri,So(e,0),Mr(e,r),at(e,sn()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(Y(345));case 2:fo(e,nt,lr);break;case 3:if(Mr(e,r),(r&130023424)===r&&(n=np+500-sn(),10<n)){if(Fs(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Vn(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Lu(fo.bind(null,e,nt,lr),n);break}fo(e,nt,lr);break;case 4:if(Mr(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var i=31-Dt(r);l=1<<i,i=n[i],i>a&&(a=i),r&=~l}if(r=a,r=sn()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*k7(r/1960))-r,10<r){e.timeoutHandle=Lu(fo.bind(null,e,nt,lr),r);break}fo(e,nt,lr);break;case 5:fo(e,nt,lr);break;default:throw Error(Y(329))}}}return at(e,sn()),e.callbackNode===t?pm.bind(null,e):null}function Yu(e,n){var t=Al;return e.current.memoizedState.isDehydrated&&(So(e,n).flags|=256),e=ed(e,n),e!==2&&(n=nt,nt=t,n!==null&&qu(n)),e}function qu(e){nt===null?nt=e:nt.push.apply(nt,e)}function C7(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],l=a.getSnapshot;a=a.value;try{if(!jt(l(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Mr(e,n){for(n&=~ep,n&=~Sd,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Dt(n),r=1<<t;e[t]=-1,n&=~r}}function b1(e){if(Ie&6)throw Error(Y(327));Sa();var n=Fs(e,0);if(!(n&1))return at(e,sn()),null;var t=ed(e,n);if(e.tag!==0&&t===2){var r=yu(e);r!==0&&(n=r,t=Yu(e,r))}if(t===1)throw t=ri,So(e,0),Mr(e,n),at(e,sn()),t;if(t===6)throw Error(Y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,fo(e,nt,lr),at(e,sn()),null}function tp(e,n){var t=Ie;Ie|=1;try{return e(n)}finally{Ie=t,Ie===0&&(Ra=sn()+500,wd&&Qr())}}function Eo(e){Pr!==null&&Pr.tag===0&&!(Ie&6)&&Sa();var n=Ie;Ie|=1;var t=St.transition,r=De;try{if(St.transition=null,De=1,e)return e()}finally{De=r,St.transition=t,Ie=n,!(Ie&6)&&Qr()}}function rp(){dt=ga.current,Je(ga)}function So(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Jy(t)),hn!==null)for(t=hn.return;t!==null;){var r=t;switch(Oh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&js();break;case 3:Ia(),Je(rt),Je(Bn),Gh();break;case 5:Vh(r);break;case 4:Ia();break;case 13:Je(tn);break;case 19:Je(tn);break;case 10:jh(r.type._context);break;case 22:case 23:rp()}t=t.return}if(Sn=e,hn=e=Wr(e.current,null),Mn=dt=n,yn=0,ri=null,ep=Sd=No=0,nt=Al=null,yo!==null){for(n=0;n<yo.length;n++)if(t=yo[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,l=t.pending;if(l!==null){var i=l.next;l.next=a,r.next=i}t.pending=r}yo=null}return e}function fm(e,n){do{var t=hn;try{if(Bh(),fs.current=Qs,Zs){for(var r=rn.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Zs=!1}if($o=0,Cn=bn=rn=null,Rl=!1,ei=0,Jh.current=null,t===null||t.return===null){yn=1,ri=n,hn=null;break}e:{var l=e,i=t.return,s=t,u=n;if(n=Mn,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=u,v=s,y=v.tag;if(!(v.mode&1)&&(y===0||y===11||y===15)){var k=v.alternate;k?(v.updateQueue=k.updateQueue,v.memoizedState=k.memoizedState,v.lanes=k.lanes):(v.updateQueue=null,v.memoizedState=null)}var E=a1(i);if(E!==null){E.flags&=-257,l1(E,i,s,l,n),E.mode&1&&o1(l,p,n),n=E,u=p;var N=n.updateQueue;if(N===null){var C=new Set;C.add(u),n.updateQueue=C}else N.add(u);break e}else{if(!(n&1)){o1(l,p,n),op();break e}u=Error(Y(426))}}else if(en&&s.mode&1){var M=a1(i);if(M!==null){!(M.flags&65536)&&(M.flags|=256),l1(M,i,s,l,n),zh(Ma(u,s));break e}}l=u=Ma(u,s),yn!==4&&(yn=2),Al===null?Al=[l]:Al.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var w=Kv(l,u,n);K0(l,w);break e;case 1:s=u;var g=l.type,b=l.stateNode;if(!(l.flags&128)&&(typeof g.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Ur===null||!Ur.has(b)))){l.flags|=65536,n&=-n,l.lanes|=n;var m=Xv(l,s,n);K0(l,m);break e}}l=l.return}while(l!==null)}mm(t)}catch(L){n=L,hn===t&&t!==null&&(hn=t=t.return);continue}break}while(1)}function gm(){var e=Ks.current;return Ks.current=Qs,e===null?Qs:e}function op(){(yn===0||yn===3||yn===2)&&(yn=4),Sn===null||!(No&268435455)&&!(Sd&268435455)||Mr(Sn,Mn)}function ed(e,n){var t=Ie;Ie|=2;var r=gm();(Sn!==e||Mn!==n)&&(lr=null,So(e,n));do try{S7();break}catch(a){fm(e,a)}while(1);if(Bh(),Ie=t,Ks.current=r,hn!==null)throw Error(Y(261));return Sn=null,Mn=0,yn}function S7(){for(;hn!==null;)vm(hn)}function T7(){for(;hn!==null&&!Q8();)vm(hn)}function vm(e){var n=ym(e.alternate,e,dt);e.memoizedProps=e.pendingProps,n===null?mm(e):hn=n,Jh.current=null}function mm(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=b7(t,n),t!==null){t.flags&=32767,hn=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{yn=6,hn=null;return}}else if(t=m7(t,n,dt),t!==null){hn=t;return}if(n=n.sibling,n!==null){hn=n;return}hn=n=e}while(n!==null);yn===0&&(yn=5)}function fo(e,n,t){var r=De,a=St.transition;try{St.transition=null,De=1,_7(e,n,t,r)}finally{St.transition=a,De=r}return null}function _7(e,n,t,r){do Sa();while(Pr!==null);if(Ie&6)throw Error(Y(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(Y(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(ly(e,l),e===Sn&&(hn=Sn=null,Mn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Xi||(Xi=!0,wm(As,function(){return Sa(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=St.transition,St.transition=null;var i=De;De=1;var s=Ie;Ie|=4,Jh.current=null,w7(e,t),um(t,e),Gy(Tu),Os=!!Su,Tu=Su=null,e.current=t,x7(t),K8(),Ie=s,De=i,St.transition=l}else e.current=t;if(Xi&&(Xi=!1,Pr=e,Js=a),l=e.pendingLanes,l===0&&(Ur=null),ey(t.stateNode),at(e,sn()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(Xs)throw Xs=!1,e=Vu,Vu=null,e;return Js&1&&e.tag!==0&&Sa(),l=e.pendingLanes,l&1?e===Gu?Fl++:(Fl=0,Gu=e):Fl=0,Qr(),null}function Sa(){if(Pr!==null){var e=Qg(Js),n=St.transition,t=De;try{if(St.transition=null,De=16>e?16:e,Pr===null)var r=!1;else{if(e=Pr,Pr=null,Js=0,Ie&6)throw Error(Y(331));var a=Ie;for(Ie|=4,ne=e.current;ne!==null;){var l=ne,i=l.child;if(ne.flags&16){var s=l.deletions;if(s!==null){for(var u=0;u<s.length;u++){var p=s[u];for(ne=p;ne!==null;){var v=ne;switch(v.tag){case 0:case 11:case 15:Pl(8,v,l)}var y=v.child;if(y!==null)y.return=v,ne=y;else for(;ne!==null;){v=ne;var k=v.sibling,E=v.return;if(sm(v),v===p){ne=null;break}if(k!==null){k.return=E,ne=k;break}ne=E}}}var N=l.alternate;if(N!==null){var C=N.child;if(C!==null){N.child=null;do{var M=C.sibling;C.sibling=null,C=M}while(C!==null)}}ne=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,ne=i;else e:for(;ne!==null;){if(l=ne,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Pl(9,l,l.return)}var w=l.sibling;if(w!==null){w.return=l.return,ne=w;break e}ne=l.return}}var g=e.current;for(ne=g;ne!==null;){i=ne;var b=i.child;if(i.subtreeFlags&2064&&b!==null)b.return=i,ne=b;else e:for(i=g;ne!==null;){if(s=ne,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Cd(9,s)}}catch(L){ln(s,s.return,L)}if(s===i){ne=null;break e}var m=s.sibling;if(m!==null){m.return=s.return,ne=m;break e}ne=s.return}}if(Ie=a,Qr(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(gd,e)}catch{}r=!0}return r}finally{De=t,St.transition=n}}return!1}function y1(e,n,t){n=Ma(t,n),n=Kv(e,n,1),e=jr(e,n,1),n=Vn(),e!==null&&(hi(e,1,n),at(e,n))}function ln(e,n,t){if(e.tag===3)y1(e,e,t);else for(;n!==null;){if(n.tag===3){y1(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ur===null||!Ur.has(r))){e=Ma(t,e),e=Xv(n,e,1),n=jr(n,e,1),e=Vn(),n!==null&&(hi(n,1,e),at(n,e));break}}n=n.return}}function L7(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Vn(),e.pingedLanes|=e.suspendedLanes&t,Sn===e&&(Mn&t)===t&&(yn===4||yn===3&&(Mn&130023424)===Mn&&500>sn()-np?So(e,0):ep|=t),at(e,n)}function bm(e,n){n===0&&(e.mode&1?(n=Ui,Ui<<=1,!(Ui&130023424)&&(Ui=4194304)):n=1);var t=Vn();e=gr(e,n),e!==null&&(hi(e,n,t),at(e,t))}function $7(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),bm(e,t)}function N7(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Y(314))}r!==null&&r.delete(n),bm(e,t)}var ym;ym=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||rt.current)tt=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return tt=!1,v7(e,n,t);tt=!!(e.flags&131072)}else tt=!1,en&&n.flags&1048576&&kv(n,Ws,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;vs(e,n),e=n.pendingProps;var a=$a(n,Bn.current);Ca(n,t),a=qh(null,n,r,e,a,t);var l=Zh();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ot(r)?(l=!0,Us(n)):l=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Hh(n),a.updater=xd,n.stateNode=a,a._reactInternals=n,Pu(n,r,e,t),n=Ou(null,n,r,!0,l,t)):(n.tag=0,en&&l&&Fh(n),Hn(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(vs(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=I7(r),e=Pt(r,e),a){case 0:n=Fu(null,n,r,e,t);break e;case 1:n=d1(null,n,r,e,t);break e;case 11:n=i1(null,n,r,e,t);break e;case 14:n=s1(null,n,r,Pt(r.type,e),t);break e}throw Error(Y(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Pt(r,a),Fu(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Pt(r,a),d1(e,n,r,a,t);case 3:e:{if(tm(n),e===null)throw Error(Y(387));r=n.pendingProps,l=n.memoizedState,a=l.element,_v(e,n),Ys(n,r,null,t);var i=n.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){a=Ma(Error(Y(423)),n),n=c1(e,n,r,t,a);break e}else if(r!==a){a=Ma(Error(Y(424)),n),n=c1(e,n,r,t,a);break e}else for(ft=Br(n.stateNode.containerInfo.firstChild),gt=n,en=!0,Ot=null,t=Ev(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Na(),r===a){n=vr(e,n,t);break e}Hn(e,n,r,t)}n=n.child}return n;case 5:return Iv(n),e===null&&Iu(n),r=n.type,a=n.pendingProps,l=e!==null?e.memoizedProps:null,i=a.children,_u(r,a)?i=null:l!==null&&_u(r,l)&&(n.flags|=32),nm(e,n),Hn(e,n,i,t),n.child;case 6:return e===null&&Iu(n),null;case 13:return rm(e,n,t);case 4:return Wh(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ea(n,null,r,t):Hn(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Pt(r,a),i1(e,n,r,a,t);case 7:return Hn(e,n,n.pendingProps,t),n.child;case 8:return Hn(e,n,n.pendingProps.children,t),n.child;case 12:return Hn(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,l=n.memoizedProps,i=a.value,Ge(Vs,r._currentValue),r._currentValue=i,l!==null)if(jt(l.value,i)){if(l.children===a.children&&!rt.current){n=vr(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=ur(-1,t&-t),u.tag=2;var p=l.updateQueue;if(p!==null){p=p.shared;var v=p.pending;v===null?u.next=u:(u.next=v.next,v.next=u),p.pending=u}}l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),Mu(l.return,t,n),s.lanes|=t;break}u=u.next}}else if(l.tag===10)i=l.type===n.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(Y(341));i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Mu(i,t,n),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===n){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Hn(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,Ca(n,t),a=Tt(a),r=r(a),n.flags|=1,Hn(e,n,r,t),n.child;case 14:return r=n.type,a=Pt(r,n.pendingProps),a=Pt(r.type,a),s1(e,n,r,a,t);case 15:return Jv(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Pt(r,a),vs(e,n),n.tag=1,ot(r)?(e=!0,Us(n)):e=!1,Ca(n,t),$v(n,r,a),Pu(n,r,a,t),Ou(null,n,r,!0,e,t);case 19:return om(e,n,t);case 22:return em(e,n,t)}throw Error(Y(156,n.tag))};function wm(e,n){return Gg(e,n)}function E7(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,n,t,r){return new E7(e,n,t,r)}function ap(e){return e=e.prototype,!(!e||!e.isReactComponent)}function I7(e){if(typeof e=="function")return ap(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Sh)return 11;if(e===Th)return 14}return 2}function Wr(e,n){var t=e.alternate;return t===null?(t=Ct(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ys(e,n,t,r,a,l){var i=2;if(r=e,typeof e=="function")ap(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case aa:return To(t.children,a,l,n);case Ch:i=8,a|=8;break;case ou:return e=Ct(12,t,n,a|2),e.elementType=ou,e.lanes=l,e;case au:return e=Ct(13,t,n,a),e.elementType=au,e.lanes=l,e;case lu:return e=Ct(19,t,n,a),e.elementType=lu,e.lanes=l,e;case Ng:return Td(t,a,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lg:i=10;break e;case $g:i=9;break e;case Sh:i=11;break e;case Th:i=14;break e;case Nr:i=16,r=null;break e}throw Error(Y(130,e==null?e:typeof e,""))}return n=Ct(i,t,n,a),n.elementType=e,n.type=r,n.lanes=l,n}function To(e,n,t,r){return e=Ct(7,e,r,n),e.lanes=t,e}function Td(e,n,t,r){return e=Ct(22,e,r,n),e.elementType=Ng,e.lanes=t,e.stateNode={isHidden:!1},e}function Dc(e,n,t){return e=Ct(6,e,null,n),e.lanes=t,e}function Bc(e,n,t){return n=Ct(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function M7(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wc(0),this.expirationTimes=wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wc(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function lp(e,n,t,r,a,l,i,s,u){return e=new M7(e,n,t,s,u),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Ct(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hh(l),e}function R7(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oa,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function xm(e){if(!e)return Gr;e=e._reactInternals;e:{if(Po(e)!==e||e.tag!==1)throw Error(Y(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ot(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(Y(171))}if(e.tag===1){var t=e.type;if(ot(t))return wv(e,t,n)}return n}function km(e,n,t,r,a,l,i,s,u){return e=lp(t,r,!0,e,a,l,i,s,u),e.context=xm(null),t=e.current,r=Vn(),a=Hr(t),l=ur(r,a),l.callback=n??null,jr(t,l,a),e.current.lanes=a,hi(e,a,r),at(e,r),e}function _d(e,n,t,r){var a=n.current,l=Vn(),i=Hr(a);return t=xm(t),n.context===null?n.context=t:n.pendingContext=t,n=ur(l,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=jr(a,n,i),e!==null&&(Bt(e,a,i,l),ps(e,a,i)),i}function nd(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function w1(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ip(e,n){w1(e,n),(e=e.alternate)&&w1(e,n)}function P7(){return null}var Cm=typeof reportError=="function"?reportError:function(e){console.error(e)};function sp(e){this._internalRoot=e}Ld.prototype.render=sp.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(Y(409));_d(e,n,null,null)};Ld.prototype.unmount=sp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Eo(function(){_d(null,e,null,null)}),n[fr]=null}};function Ld(e){this._internalRoot=e}Ld.prototype.unstable_scheduleHydration=function(e){if(e){var n=Jg();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Ir.length&&n!==0&&n<Ir[t].priority;t++);Ir.splice(t,0,e),t===0&&nv(e)}};function dp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function x1(){}function A7(e,n,t,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var p=nd(i);l.call(p)}}var i=km(n,r,e,0,null,!1,!1,"",x1);return e._reactRootContainer=i,e[fr]=i.current,Zl(e.nodeType===8?e.parentNode:e),Eo(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var p=nd(u);s.call(p)}}var u=lp(e,0,!1,null,null,!1,!1,"",x1);return e._reactRootContainer=u,e[fr]=u.current,Zl(e.nodeType===8?e.parentNode:e),Eo(function(){_d(n,u,t,r)}),u}function Nd(e,n,t,r,a){var l=t._reactRootContainer;if(l){var i=l;if(typeof a=="function"){var s=a;a=function(){var u=nd(i);s.call(u)}}_d(n,i,e,a)}else i=A7(t,n,e,a,r);return nd(i)}Kg=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=wl(n.pendingLanes);t!==0&&($h(n,t|1),at(n,sn()),!(Ie&6)&&(Ra=sn()+500,Qr()))}break;case 13:Eo(function(){var r=gr(e,1);if(r!==null){var a=Vn();Bt(r,e,1,a)}}),ip(e,1)}};Nh=function(e){if(e.tag===13){var n=gr(e,134217728);if(n!==null){var t=Vn();Bt(n,e,134217728,t)}ip(e,134217728)}};Xg=function(e){if(e.tag===13){var n=Hr(e),t=gr(e,n);if(t!==null){var r=Vn();Bt(t,e,n,r)}ip(e,n)}};Jg=function(){return De};ev=function(e,n){var t=De;try{return De=e,n()}finally{De=t}};vu=function(e,n,t){switch(n){case"input":if(du(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=yd(r);if(!a)throw Error(Y(90));Ig(r),du(r,a)}}}break;case"textarea":Rg(e,t);break;case"select":n=t.value,n!=null&&ya(e,!!t.multiple,n,!1)}};Bg=tp;jg=Eo;var F7={usingClientEntryPoint:!1,Events:[fi,da,yd,zg,Dg,tp]},pl={findFiberByHostInstance:bo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},O7={bundleType:pl.bundleType,version:pl.version,rendererPackageName:pl.rendererPackageName,rendererConfig:pl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wg(e),e===null?null:e.stateNode},findFiberByHostInstance:pl.findFiberByHostInstance||P7,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ji.isDisabled&&Ji.supportsFiber)try{gd=Ji.inject(O7),Qt=Ji}catch{}}mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F7;mt.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dp(n))throw Error(Y(200));return R7(e,n,null,t)};mt.createRoot=function(e,n){if(!dp(e))throw Error(Y(299));var t=!1,r="",a=Cm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=lp(e,1,!1,null,null,t,!1,r,a),e[fr]=n.current,Zl(e.nodeType===8?e.parentNode:e),new sp(n)};mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=Wg(n),e=e===null?null:e.stateNode,e};mt.flushSync=function(e){return Eo(e)};mt.hydrate=function(e,n,t){if(!$d(n))throw Error(Y(200));return Nd(null,e,n,!0,t)};mt.hydrateRoot=function(e,n,t){if(!dp(e))throw Error(Y(405));var r=t!=null&&t.hydratedSources||null,a=!1,l="",i=Cm;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=km(n,null,e,1,t??null,a,!1,l,i),e[fr]=n.current,Zl(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new Ld(n)};mt.render=function(e,n,t){if(!$d(n))throw Error(Y(200));return Nd(null,e,n,!1,t)};mt.unmountComponentAtNode=function(e){if(!$d(e))throw Error(Y(40));return e._reactRootContainer?(Eo(function(){Nd(null,null,e,!1,function(){e._reactRootContainer=null,e[fr]=null})}),!0):!1};mt.unstable_batchedUpdates=tp;mt.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!$d(t))throw Error(Y(200));if(e==null||e._reactInternals===void 0)throw Error(Y(38));return Nd(e,n,t,!1,r)};mt.version="18.2.0-next-9e3b772b8-20220608";function Sm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sm)}catch(e){console.error(e)}}Sm(),kg.exports=mt;var Tm=kg.exports,k1=Tm;tu.createRoot=k1.createRoot,tu.hydrateRoot=k1.hydrateRoot;function z7(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,l;for(l=0;l<r.length;l++)a=r[l],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function D7(e,n){if(e==null)return{};var t=z7(e,n),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function Zu(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function B7(e){if(Array.isArray(e))return Zu(e)}function j7(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function U7(e,n){if(e){if(typeof e=="string")return Zu(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Zu(e,n)}}function H7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W7(e){return B7(e)||j7(e)||U7(e)||H7()}function oi(e){"@babel/helpers - typeof";return oi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},oi(e)}function V7(e,n){if(oi(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(oi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function G7(e){var n=V7(e,"string");return oi(n)==="symbol"?n:String(n)}function _m(e,n,t){return n=G7(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Qu(){return Qu=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Qu.apply(this,arguments)}function C1(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function va(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?C1(Object(t),!0).forEach(function(r){_m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C1(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Y7(e){var n=e.length;if(n===0||n===1)return e;if(n===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(n===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(n>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var jc={};function q7(e){if(e.length===0||e.length===1)return e;var n=e.join(".");return jc[n]||(jc[n]=Y7(e)),jc[n]}function Z7(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,r=e.filter(function(l){return l!=="token"}),a=q7(r);return a.reduce(function(l,i){return va(va({},l),t[i])},n)}function S1(e){return e.join(" ")}function Q7(e,n){var t=0;return function(r){return t+=1,r.map(function(a,l){return Lm({node:a,stylesheet:e,useInlineStyles:n,key:"code-segment-".concat(t,"-").concat(l)})})}}function Lm(e){var n=e.node,t=e.stylesheet,r=e.style,a=r===void 0?{}:r,l=e.useInlineStyles,i=e.key,s=n.properties,u=n.type,p=n.tagName,v=n.value;if(u==="text")return v;if(p){var y=Q7(t,l),k;if(!l)k=va(va({},s),{},{className:S1(s.className)});else{var E=Object.keys(t).reduce(function(w,g){return g.split(".").forEach(function(b){w.includes(b)||w.push(b)}),w},[]),N=s.className&&s.className.includes("token")?["token"]:[],C=s.className&&N.concat(s.className.filter(function(w){return!E.includes(w)}));k=va(va({},s),{},{className:S1(C)||void 0,style:Z7(s.className,Object.assign({},s.style,a),t)})}var M=y(n.children);return En.createElement(p,Qu({key:i},k),M)}}const K7=function(e,n){var t=e.listLanguages();return t.indexOf(n)!==-1};var X7=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function T1(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Yt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?T1(Object(t),!0).forEach(function(r){_m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T1(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var J7=/\n/g;function e9(e){return e.match(J7)}function n9(e){var n=e.lines,t=e.startingLineNumber,r=e.style;return n.map(function(a,l){var i=l+t;return En.createElement("span",{key:"line-".concat(l),className:"react-syntax-highlighter-line-number",style:typeof r=="function"?r(i):r},"".concat(i,`
`))})}function t9(e){var n=e.codeString,t=e.codeStyle,r=e.containerStyle,a=r===void 0?{float:"left",paddingRight:"10px"}:r,l=e.numberStyle,i=l===void 0?{}:l,s=e.startingLineNumber;return En.createElement("code",{style:Object.assign({},t,a)},n9({lines:n.replace(/\n$/,"").split(`
`),style:i,startingLineNumber:s}))}function r9(e){return"".concat(e.toString().length,".25em")}function $m(e,n){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:n},children:[{type:"text",value:e}]}}function Nm(e,n,t){var r={display:"inline-block",minWidth:r9(t),paddingRight:"1em",textAlign:"right",userSelect:"none"},a=typeof e=="function"?e(n):e,l=Yt(Yt({},r),a);return l}function ws(e){var n=e.children,t=e.lineNumber,r=e.lineNumberStyle,a=e.largestLineNumber,l=e.showInlineLineNumbers,i=e.lineProps,s=i===void 0?{}:i,u=e.className,p=u===void 0?[]:u,v=e.showLineNumbers,y=e.wrapLongLines,k=typeof s=="function"?s(t):s;if(k.className=p,t&&l){var E=Nm(r,t,a);n.unshift($m(t,E))}return y&v&&(k.style=Yt(Yt({},k.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:k,children:n}}function Em(e){for(var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=0;r<e.length;r++){var a=e[r];if(a.type==="text")t.push(ws({children:[a],className:W7(new Set(n))}));else if(a.children){var l=n.concat(a.properties.className);Em(a.children,l).forEach(function(i){return t.push(i)})}}return t}function o9(e,n,t,r,a,l,i,s,u){var p,v=Em(e.value),y=[],k=-1,E=0;function N(L,T){var A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return ws({children:L,lineNumber:T,lineNumberStyle:s,largestLineNumber:i,showInlineLineNumbers:a,lineProps:t,className:A,showLineNumbers:r,wrapLongLines:u})}function C(L,T){if(r&&T&&a){var A=Nm(s,T,i);L.unshift($m(T,A))}return L}function M(L,T){var A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return n||A.length>0?N(L,T,A):C(L,T)}for(var w=function(){var T=v[E],A=T.children[0].value,O=e9(A);if(O){var j=A.split(`
`);j.forEach(function(q,fe){var ce=r&&y.length+l,Ue={type:"text",value:"".concat(q,`
`)};if(fe===0){var an=v.slice(k+1,E).concat(ws({children:[Ue],className:T.properties.className})),Ye=M(an,ce);y.push(Ye)}else if(fe===j.length-1){var Be=v[E+1]&&v[E+1].children&&v[E+1].children[0],qe={type:"text",value:"".concat(q)};if(Be){var U=ws({children:[qe],className:T.properties.className});v.splice(E+1,0,U)}else{var Z=[qe],J=M(Z,ce,T.properties.className);y.push(J)}}else{var ae=[Ue],ge=M(ae,ce,T.properties.className);y.push(ge)}}),k=E}E++};E<v.length;)w();if(k!==v.length-1){var g=v.slice(k+1,v.length);if(g&&g.length){var b=r&&y.length+l,m=M(g,b);y.push(m)}}return n?y:(p=[]).concat.apply(p,y)}function a9(e){var n=e.rows,t=e.stylesheet,r=e.useInlineStyles;return n.map(function(a,l){return Lm({node:a,stylesheet:t,useInlineStyles:r,key:"code-segement".concat(l)})})}function Im(e){return e&&typeof e.highlightAuto<"u"}function l9(e){var n=e.astGenerator,t=e.language,r=e.code,a=e.defaultCodeValue;if(Im(n)){var l=K7(n,t);return t==="text"?{value:a,language:"text"}:l?n.highlight(t,r):n.highlightAuto(r)}try{return t&&t!=="text"?{value:n.highlight(r,t)}:{value:a}}catch{return{value:a}}}function i9(e,n){return function(r){var a=r.language,l=r.children,i=r.style,s=i===void 0?n:i,u=r.customStyle,p=u===void 0?{}:u,v=r.codeTagProps,y=v===void 0?{className:a?"language-".concat(a):void 0,style:Yt(Yt({},s['code[class*="language-"]']),s['code[class*="language-'.concat(a,'"]')])}:v,k=r.useInlineStyles,E=k===void 0?!0:k,N=r.showLineNumbers,C=N===void 0?!1:N,M=r.showInlineLineNumbers,w=M===void 0?!0:M,g=r.startingLineNumber,b=g===void 0?1:g,m=r.lineNumberContainerStyle,L=r.lineNumberStyle,T=L===void 0?{}:L,A=r.wrapLines,O=r.wrapLongLines,j=O===void 0?!1:O,q=r.lineProps,fe=q===void 0?{}:q,ce=r.renderer,Ue=r.PreTag,an=Ue===void 0?"pre":Ue,Ye=r.CodeTag,Be=Ye===void 0?"code":Ye,qe=r.code,U=qe===void 0?(Array.isArray(l)?l[0]:l)||"":qe,Z=r.astGenerator,J=D7(r,X7);Z=Z||e;var ae=C?En.createElement(t9,{containerStyle:m,codeStyle:y.style||{},numberStyle:T,startingLineNumber:b,codeString:U}):null,ge=s.hljs||s['pre[class*="language-"]']||{backgroundColor:"#fff"},jn=Im(Z)?"hljs":"prismjs",ve=E?Object.assign({},J,{style:Object.assign({},ge,p)}):Object.assign({},J,{className:J.className?"".concat(jn," ").concat(J.className):jn,style:Object.assign({},p)});if(j?y.style=Yt(Yt({},y.style),{},{whiteSpace:"pre-wrap"}):y.style=Yt(Yt({},y.style),{},{whiteSpace:"pre"}),!Z)return En.createElement(an,ve,ae,En.createElement(Be,y,U));(A===void 0&&ce||j)&&(A=!0),ce=ce||a9;var nn=[{type:"text",value:U}],Ze=l9({astGenerator:Z,language:a,code:U,defaultCodeValue:nn});Ze.language===null&&(Ze.value=nn);var fn=Ze.value.length+b,Fn=o9(Ze,A,fe,C,w,b,fn,T,j);return En.createElement(an,ve,En.createElement(Be,y,!w&&ae,ce({rows:Fn,stylesheet:s,useInlineStyles:E})))}}var s9=c9,d9=Object.prototype.hasOwnProperty;function c9(){for(var e={},n=0;n<arguments.length;n++){var t=arguments[n];for(var r in t)d9.call(t,r)&&(e[r]=t[r])}return e}var Mm=Rm,cp=Rm.prototype;cp.space=null;cp.normal={};cp.property={};function Rm(e,n,t){this.property=e,this.normal=n,t&&(this.space=t)}var _1=s9,u9=Mm,h9=p9;function p9(e){for(var n=e.length,t=[],r=[],a=-1,l,i;++a<n;)l=e[a],t.push(l.property),r.push(l.normal),i=l.space;return new u9(_1.apply(null,t),_1.apply(null,r),i)}var up=f9;function f9(e){return e.toLowerCase()}var Pm=Am,Lt=Am.prototype;Lt.space=null;Lt.attribute=null;Lt.property=null;Lt.boolean=!1;Lt.booleanish=!1;Lt.overloadedBoolean=!1;Lt.number=!1;Lt.commaSeparated=!1;Lt.spaceSeparated=!1;Lt.commaOrSpaceSeparated=!1;Lt.mustUseProperty=!1;Lt.defined=!1;function Am(e,n){this.property=e,this.attribute=n}var Jt={},g9=0;Jt.boolean=Ao();Jt.booleanish=Ao();Jt.overloadedBoolean=Ao();Jt.number=Ao();Jt.spaceSeparated=Ao();Jt.commaSeparated=Ao();Jt.commaOrSpaceSeparated=Ao();function Ao(){return Math.pow(2,++g9)}var Fm=Pm,L1=Jt,Om=hp;hp.prototype=new Fm;hp.prototype.defined=!0;var zm=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],v9=zm.length;function hp(e,n,t,r){var a=-1,l;for($1(this,"space",r),Fm.call(this,e,n);++a<v9;)l=zm[a],$1(this,l,(t&L1[l])===L1[l])}function $1(e,n,t){t&&(e[n]=t)}var N1=up,m9=Mm,b9=Om,vi=y9;function y9(e){var n=e.space,t=e.mustUseProperty||[],r=e.attributes||{},a=e.properties,l=e.transform,i={},s={},u,p;for(u in a)p=new b9(u,l(r,u),a[u],n),t.indexOf(u)!==-1&&(p.mustUseProperty=!0),i[u]=p,s[N1(u)]=u,s[N1(p.attribute)]=u;return new m9(i,s,n)}var w9=vi,x9=w9({space:"xlink",transform:k9,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function k9(e,n){return"xlink:"+n.slice(5).toLowerCase()}var C9=vi,S9=C9({space:"xml",transform:T9,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function T9(e,n){return"xml:"+n.slice(3).toLowerCase()}var _9=L9;function L9(e,n){return n in e?e[n]:n}var $9=_9,Dm=N9;function N9(e,n){return $9(e,n.toLowerCase())}var E9=vi,I9=Dm,M9=E9({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:I9,properties:{xmlns:null,xmlnsXLink:null}}),pp=Jt,R9=vi,Xn=pp.booleanish,wt=pp.number,uo=pp.spaceSeparated,P9=R9({transform:A9,properties:{ariaActiveDescendant:null,ariaAtomic:Xn,ariaAutoComplete:null,ariaBusy:Xn,ariaChecked:Xn,ariaColCount:wt,ariaColIndex:wt,ariaColSpan:wt,ariaControls:uo,ariaCurrent:null,ariaDescribedBy:uo,ariaDetails:null,ariaDisabled:Xn,ariaDropEffect:uo,ariaErrorMessage:null,ariaExpanded:Xn,ariaFlowTo:uo,ariaGrabbed:Xn,ariaHasPopup:null,ariaHidden:Xn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:uo,ariaLevel:wt,ariaLive:null,ariaModal:Xn,ariaMultiLine:Xn,ariaMultiSelectable:Xn,ariaOrientation:null,ariaOwns:uo,ariaPlaceholder:null,ariaPosInSet:wt,ariaPressed:Xn,ariaReadOnly:Xn,ariaRelevant:null,ariaRequired:Xn,ariaRoleDescription:uo,ariaRowCount:wt,ariaRowIndex:wt,ariaRowSpan:wt,ariaSelected:Xn,ariaSetSize:wt,ariaSort:null,ariaValueMax:wt,ariaValueMin:wt,ariaValueNow:wt,ariaValueText:null,role:null}});function A9(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}var Ba=Jt,F9=vi,O9=Dm,ke=Ba.boolean,z9=Ba.overloadedBoolean,fl=Ba.booleanish,Qe=Ba.number,Un=Ba.spaceSeparated,es=Ba.commaSeparated,D9=F9({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:O9,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:es,acceptCharset:Un,accessKey:Un,action:null,allow:null,allowFullScreen:ke,allowPaymentRequest:ke,allowUserMedia:ke,alt:null,as:null,async:ke,autoCapitalize:null,autoComplete:Un,autoFocus:ke,autoPlay:ke,capture:ke,charSet:null,checked:ke,cite:null,className:Un,cols:Qe,colSpan:null,content:null,contentEditable:fl,controls:ke,controlsList:Un,coords:Qe|es,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ke,defer:ke,dir:null,dirName:null,disabled:ke,download:z9,draggable:fl,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ke,formTarget:null,headers:Un,height:Qe,hidden:ke,high:Qe,href:null,hrefLang:null,htmlFor:Un,httpEquiv:Un,id:null,imageSizes:null,imageSrcSet:es,inputMode:null,integrity:null,is:null,isMap:ke,itemId:null,itemProp:Un,itemRef:Un,itemScope:ke,itemType:Un,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ke,low:Qe,manifest:null,max:null,maxLength:Qe,media:null,method:null,min:null,minLength:Qe,multiple:ke,muted:ke,name:null,nonce:null,noModule:ke,noValidate:ke,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ke,optimum:Qe,pattern:null,ping:Un,placeholder:null,playsInline:ke,poster:null,preload:null,readOnly:ke,referrerPolicy:null,rel:Un,required:ke,reversed:ke,rows:Qe,rowSpan:Qe,sandbox:Un,scope:null,scoped:ke,seamless:ke,selected:ke,shape:null,size:Qe,sizes:null,slot:null,span:Qe,spellCheck:fl,src:null,srcDoc:null,srcLang:null,srcSet:es,start:Qe,step:null,style:null,tabIndex:Qe,target:null,title:null,translate:null,type:null,typeMustMatch:ke,useMap:null,value:fl,width:Qe,wrap:null,align:null,aLink:null,archive:Un,axis:null,background:null,bgColor:null,border:Qe,borderColor:null,bottomMargin:Qe,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ke,declare:ke,event:null,face:null,frame:null,frameBorder:null,hSpace:Qe,leftMargin:Qe,link:null,longDesc:null,lowSrc:null,marginHeight:Qe,marginWidth:Qe,noResize:ke,noHref:ke,noShade:ke,noWrap:ke,object:null,profile:null,prompt:null,rev:null,rightMargin:Qe,rules:null,scheme:null,scrolling:fl,standby:null,summary:null,text:null,topMargin:Qe,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Qe,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ke,disableRemotePlayback:ke,prefix:null,property:null,results:Qe,security:null,unselectable:null}}),B9=h9,j9=x9,U9=S9,H9=M9,W9=P9,V9=D9,G9=B9([U9,j9,H9,W9,V9]),Y9=up,q9=Om,Z9=Pm,fp="data",Q9=J9,K9=/^data[-\w.:]+$/i,Bm=/-[a-z]/g,X9=/[A-Z]/g;function J9(e,n){var t=Y9(n),r=n,a=Z9;return t in e.normal?e.property[e.normal[t]]:(t.length>4&&t.slice(0,4)===fp&&K9.test(n)&&(n.charAt(4)==="-"?r=ew(n):n=nw(n),a=q9),new a(r,n))}function ew(e){var n=e.slice(5).replace(Bm,rw);return fp+n.charAt(0).toUpperCase()+n.slice(1)}function nw(e){var n=e.slice(4);return Bm.test(n)?e:(n=n.replace(X9,tw),n.charAt(0)!=="-"&&(n="-"+n),fp+n)}function tw(e){return"-"+e.toLowerCase()}function rw(e){return e.charAt(1).toUpperCase()}var ow=aw,E1=/[#.]/g;function aw(e,n){for(var t=e||"",r=n||"div",a={},l=0,i,s,u;l<t.length;)E1.lastIndex=l,u=E1.exec(t),i=t.slice(l,u?u.index:t.length),i&&(s?s==="#"?a.id=i:a.className?a.className.push(i):a.className=[i]:r=i,l+=i.length),u&&(s=u[0],l++);return{type:"element",tagName:r,properties:a,children:[]}}var gp={};gp.parse=sw;gp.stringify=dw;var I1="",lw=" ",iw=/[ \t\n\r\f]+/g;function sw(e){var n=String(e||I1).trim();return n===I1?[]:n.split(iw)}function dw(e){return e.join(lw).trim()}var vp={};vp.parse=cw;vp.stringify=uw;var Ku=",",M1=" ",kl="";function cw(e){for(var n=[],t=String(e||kl),r=t.indexOf(Ku),a=0,l=!1,i;!l;)r===-1&&(r=t.length,l=!0),i=t.slice(a,r).trim(),(i||!l)&&n.push(i),a=r+1,r=t.indexOf(Ku,a);return n}function uw(e,n){var t=n||{},r=t.padLeft===!1?kl:M1,a=t.padRight?M1:kl;return e[e.length-1]===kl&&(e=e.concat(kl)),e.join(a+Ku+r).trim()}var hw=Q9,R1=up,pw=ow,P1=gp.parse,A1=vp.parse,fw=vw,gw={}.hasOwnProperty;function vw(e,n,t){var r=t?xw(t):null;return a;function a(i,s){var u=pw(i,n),p=Array.prototype.slice.call(arguments,2),v=u.tagName.toLowerCase(),y;if(u.tagName=r&&gw.call(r,v)?r[v]:v,s&&mw(s,u)&&(p.unshift(s),s=null),s)for(y in s)l(u.properties,y,s[y]);return jm(u.children,p),u.tagName==="template"&&(u.content={type:"root",children:u.children},u.children=[]),u}function l(i,s,u){var p,v,y;u==null||u!==u||(p=hw(e,s),v=p.property,y=u,typeof y=="string"&&(p.spaceSeparated?y=P1(y):p.commaSeparated?y=A1(y):p.commaOrSpaceSeparated&&(y=P1(A1(y).join(" ")))),v==="style"&&typeof u!="string"&&(y=ww(y)),v==="className"&&i.className&&(y=i.className.concat(y)),i[v]=yw(p,v,y))}}function mw(e,n){return typeof e=="string"||"length"in e||bw(n.tagName,e)}function bw(e,n){var t=n.type;return e==="input"||!t||typeof t!="string"?!1:typeof n.children=="object"&&"length"in n.children?!0:(t=t.toLowerCase(),e==="button"?t!=="menu"&&t!=="submit"&&t!=="reset"&&t!=="button":"value"in n)}function jm(e,n){var t,r;if(typeof n=="string"||typeof n=="number"){e.push({type:"text",value:String(n)});return}if(typeof n=="object"&&"length"in n){for(t=-1,r=n.length;++t<r;)jm(e,n[t]);return}if(typeof n!="object"||!("type"in n))throw new Error("Expected node, nodes, or string, got `"+n+"`");e.push(n)}function yw(e,n,t){var r,a,l;if(typeof t!="object"||!("length"in t))return F1(e,n,t);for(a=t.length,r=-1,l=[];++r<a;)l[r]=F1(e,n,t[r]);return l}function F1(e,n,t){var r=t;return e.number||e.positiveNumber?!isNaN(r)&&r!==""&&(r=Number(r)):(e.boolean||e.overloadedBoolean)&&typeof r=="string"&&(r===""||R1(t)===R1(n))&&(r=!0),r}function ww(e){var n=[],t;for(t in e)n.push([t,e[t]].join(": "));return n.join("; ")}function xw(e){for(var n=e.length,t=-1,r={},a;++t<n;)a=e[t],r[a.toLowerCase()]=a;return r}var kw=G9,Cw=fw,Um=Cw(kw,"div");Um.displayName="html";var Sw=Um,Tw=Sw;const _w="Æ",Lw="&",$w="Á",Nw="Â",Ew="À",Iw="Å",Mw="Ã",Rw="Ä",Pw="©",Aw="Ç",Fw="Ð",Ow="É",zw="Ê",Dw="È",Bw="Ë",jw=">",Uw="Í",Hw="Î",Ww="Ì",Vw="Ï",Gw="<",Yw="Ñ",qw="Ó",Zw="Ô",Qw="Ò",Kw="Ø",Xw="Õ",Jw="Ö",ex='"',nx="®",tx="Þ",rx="Ú",ox="Û",ax="Ù",lx="Ü",ix="Ý",sx="á",dx="â",cx="´",ux="æ",hx="à",px="&",fx="å",gx="ã",vx="ä",mx="¦",bx="ç",yx="¸",wx="¢",xx="©",kx="¤",Cx="°",Sx="÷",Tx="é",_x="ê",Lx="è",$x="ð",Nx="ë",Ex="½",Ix="¼",Mx="¾",Rx=">",Px="í",Ax="î",Fx="¡",Ox="ì",zx="¿",Dx="ï",Bx="«",jx="<",Ux="¯",Hx="µ",Wx="·",Vx=" ",Gx="¬",Yx="ñ",qx="ó",Zx="ô",Qx="ò",Kx="ª",Xx="º",Jx="ø",ek="õ",nk="ö",tk="¶",rk="±",ok="£",ak='"',lk="»",ik="®",sk="§",dk="­",ck="¹",uk="²",hk="³",pk="ß",fk="þ",gk="×",vk="ú",mk="û",bk="ù",yk="¨",wk="ü",xk="ý",kk="¥",Ck="ÿ",Sk={AElig:_w,AMP:Lw,Aacute:$w,Acirc:Nw,Agrave:Ew,Aring:Iw,Atilde:Mw,Auml:Rw,COPY:Pw,Ccedil:Aw,ETH:Fw,Eacute:Ow,Ecirc:zw,Egrave:Dw,Euml:Bw,GT:jw,Iacute:Uw,Icirc:Hw,Igrave:Ww,Iuml:Vw,LT:Gw,Ntilde:Yw,Oacute:qw,Ocirc:Zw,Ograve:Qw,Oslash:Kw,Otilde:Xw,Ouml:Jw,QUOT:ex,REG:nx,THORN:tx,Uacute:rx,Ucirc:ox,Ugrave:ax,Uuml:lx,Yacute:ix,aacute:sx,acirc:dx,acute:cx,aelig:ux,agrave:hx,amp:px,aring:fx,atilde:gx,auml:vx,brvbar:mx,ccedil:bx,cedil:yx,cent:wx,copy:xx,curren:kx,deg:Cx,divide:Sx,eacute:Tx,ecirc:_x,egrave:Lx,eth:$x,euml:Nx,frac12:Ex,frac14:Ix,frac34:Mx,gt:Rx,iacute:Px,icirc:Ax,iexcl:Fx,igrave:Ox,iquest:zx,iuml:Dx,laquo:Bx,lt:jx,macr:Ux,micro:Hx,middot:Wx,nbsp:Vx,not:Gx,ntilde:Yx,oacute:qx,ocirc:Zx,ograve:Qx,ordf:Kx,ordm:Xx,oslash:Jx,otilde:ek,ouml:nk,para:tk,plusmn:rk,pound:ok,quot:ak,raquo:lk,reg:ik,sect:sk,shy:dk,sup1:ck,sup2:uk,sup3:hk,szlig:pk,thorn:fk,times:gk,uacute:vk,ucirc:mk,ugrave:bk,uml:yk,uuml:wk,yacute:xk,yen:kk,yuml:Ck},Tk={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var Hm=_k;function _k(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=48&&n<=57}var Lk=$k;function $k(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=97&&n<=102||n>=65&&n<=70||n>=48&&n<=57}var Nk=Ek;function Ek(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=97&&n<=122||n>=65&&n<=90}var Ik=Nk,Mk=Hm,Rk=Pk;function Pk(e){return Ik(e)||Mk(e)}var ns,Ak=59,Fk=Ok;function Ok(e){var n="&"+e+";",t;return ns=ns||document.createElement("i"),ns.innerHTML=n,t=ns.textContent,t.charCodeAt(t.length-1)===Ak&&e!=="semi"||t===n?!1:t}var O1=Sk,z1=Tk,zk=Hm,Dk=Lk,Wm=Rk,Bk=Fk,jk=eC,Uk={}.hasOwnProperty,ea=String.fromCharCode,Hk=Function.prototype,D1={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},Wk=9,B1=10,Vk=12,Gk=32,j1=38,Yk=59,qk=60,Zk=61,Qk=35,Kk=88,Xk=120,Jk=65533,ta="named",mp="hexadecimal",bp="decimal",yp={};yp[mp]=16;yp[bp]=10;var Ed={};Ed[ta]=Wm;Ed[bp]=zk;Ed[mp]=Dk;var Vm=1,Gm=2,Ym=3,qm=4,Zm=5,Xu=6,Qm=7,Kr={};Kr[Vm]="Named character references must be terminated by a semicolon";Kr[Gm]="Numeric character references must be terminated by a semicolon";Kr[Ym]="Named character references cannot be empty";Kr[qm]="Numeric character references cannot be empty";Kr[Zm]="Named character references must be known";Kr[Xu]="Numeric character references cannot be disallowed";Kr[Qm]="Numeric character references cannot be outside the permissible Unicode range";function eC(e,n){var t={},r,a;n||(n={});for(a in D1)r=n[a],t[a]=r??D1[a];return(t.position.indent||t.position.start)&&(t.indent=t.position.indent||[],t.position=t.position.start),nC(e,t)}function nC(e,n){var t=n.additional,r=n.nonTerminated,a=n.text,l=n.reference,i=n.warning,s=n.textContext,u=n.referenceContext,p=n.warningContext,v=n.position,y=n.indent||[],k=e.length,E=0,N=-1,C=v.column||1,M=v.line||1,w="",g=[],b,m,L,T,A,O,j,q,fe,ce,Ue,an,Ye,Be,qe,U,Z,J,ae;for(typeof t=="string"&&(t=t.charCodeAt(0)),U=ge(),q=i?jn:Hk,E--,k++;++E<k;)if(A===B1&&(C=y[N]||1),A=e.charCodeAt(E),A===j1){if(j=e.charCodeAt(E+1),j===Wk||j===B1||j===Vk||j===Gk||j===j1||j===qk||j!==j||t&&j===t){w+=ea(A),C++;continue}for(Ye=E+1,an=Ye,ae=Ye,j===Qk?(ae=++an,j=e.charCodeAt(ae),j===Kk||j===Xk?(Be=mp,ae=++an):Be=bp):Be=ta,b="",Ue="",T="",qe=Ed[Be],ae--;++ae<k&&(j=e.charCodeAt(ae),!!qe(j));)T+=ea(j),Be===ta&&Uk.call(O1,T)&&(b=T,Ue=O1[T]);L=e.charCodeAt(ae)===Yk,L&&(ae++,m=Be===ta?Bk(T):!1,m&&(b=T,Ue=m)),J=1+ae-Ye,!L&&!r||(T?Be===ta?(L&&!Ue?q(Zm,1):(b!==T&&(ae=an+b.length,J=1+ae-an,L=!1),L||(fe=b?Vm:Ym,n.attribute?(j=e.charCodeAt(ae),j===Zk?(q(fe,J),Ue=null):Wm(j)?Ue=null:q(fe,J)):q(fe,J))),O=Ue):(L||q(Gm,J),O=parseInt(T,yp[Be]),tC(O)?(q(Qm,J),O=ea(Jk)):O in z1?(q(Xu,J),O=z1[O]):(ce="",rC(O)&&q(Xu,J),O>65535&&(O-=65536,ce+=ea(O>>>10|55296),O=56320|O&1023),O=ce+ea(O))):Be!==ta&&q(qm,J)),O?(ve(),U=ge(),E=ae-1,C+=ae-Ye+1,g.push(O),Z=ge(),Z.offset++,l&&l.call(u,O,{start:U,end:Z},e.slice(Ye-1,ae)),U=Z):(T=e.slice(Ye-1,ae),w+=T,C+=T.length,E=ae-1)}else A===10&&(M++,N++,C=0),A===A?(w+=ea(A),C++):ve();return g.join("");function ge(){return{line:M,column:C,offset:E+(v.offset||0)}}function jn(nn,Ze){var fn=ge();fn.column+=Ze,fn.offset+=Ze,i.call(p,Kr[nn],fn,nn)}function ve(){w&&(g.push(w),a&&a.call(s,w,{start:U,end:ge()}),w="")}}function tC(e){return e>=55296&&e<=57343||e>1114111}function rC(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var Km={exports:{}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(r){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,l=0,i={},s={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function g(b){return b instanceof u?new u(b.type,g(b.content),b.alias):Array.isArray(b)?b.map(g):b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++l}),g.__id},clone:function g(b,m){m=m||{};var L,T;switch(s.util.type(b)){case"Object":if(T=s.util.objId(b),m[T])return m[T];L={},m[T]=L;for(var A in b)b.hasOwnProperty(A)&&(L[A]=g(b[A],m));return L;case"Array":return T=s.util.objId(b),m[T]?m[T]:(L=[],m[T]=L,b.forEach(function(O,j){L[j]=g(O,m)}),L);default:return b}},getLanguage:function(g){for(;g;){var b=a.exec(g.className);if(b)return b[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,b){g.className=g.className.replace(RegExp(a,"gi"),""),g.classList.add("language-"+b)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(L){var g=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(L.stack)||[])[1];if(g){var b=document.getElementsByTagName("script");for(var m in b)if(b[m].src==g)return b[m]}return null}},isActive:function(g,b,m){for(var L="no-"+b;g;){var T=g.classList;if(T.contains(b))return!0;if(T.contains(L))return!1;g=g.parentElement}return!!m}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(g,b){var m=s.util.clone(s.languages[g]);for(var L in b)m[L]=b[L];return m},insertBefore:function(g,b,m,L){L=L||s.languages;var T=L[g],A={};for(var O in T)if(T.hasOwnProperty(O)){if(O==b)for(var j in m)m.hasOwnProperty(j)&&(A[j]=m[j]);m.hasOwnProperty(O)||(A[O]=T[O])}var q=L[g];return L[g]=A,s.languages.DFS(s.languages,function(fe,ce){ce===q&&fe!=g&&(this[fe]=A)}),A},DFS:function g(b,m,L,T){T=T||{};var A=s.util.objId;for(var O in b)if(b.hasOwnProperty(O)){m.call(b,O,b[O],L||O);var j=b[O],q=s.util.type(j);q==="Object"&&!T[A(j)]?(T[A(j)]=!0,g(j,m,null,T)):q==="Array"&&!T[A(j)]&&(T[A(j)]=!0,g(j,m,O,T))}}},plugins:{},highlightAll:function(g,b){s.highlightAllUnder(document,g,b)},highlightAllUnder:function(g,b,m){var L={callback:m,container:g,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",L),L.elements=Array.prototype.slice.apply(L.container.querySelectorAll(L.selector)),s.hooks.run("before-all-elements-highlight",L);for(var T=0,A;A=L.elements[T++];)s.highlightElement(A,b===!0,L.callback)},highlightElement:function(g,b,m){var L=s.util.getLanguage(g),T=s.languages[L];s.util.setLanguage(g,L);var A=g.parentElement;A&&A.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(A,L);var O=g.textContent,j={element:g,language:L,grammar:T,code:O};function q(ce){j.highlightedCode=ce,s.hooks.run("before-insert",j),j.element.innerHTML=j.highlightedCode,s.hooks.run("after-highlight",j),s.hooks.run("complete",j),m&&m.call(j.element)}if(s.hooks.run("before-sanity-check",j),A=j.element.parentElement,A&&A.nodeName.toLowerCase()==="pre"&&!A.hasAttribute("tabindex")&&A.setAttribute("tabindex","0"),!j.code){s.hooks.run("complete",j),m&&m.call(j.element);return}if(s.hooks.run("before-highlight",j),!j.grammar){q(s.util.encode(j.code));return}if(b&&r.Worker){var fe=new Worker(s.filename);fe.onmessage=function(ce){q(ce.data)},fe.postMessage(JSON.stringify({language:j.language,code:j.code,immediateClose:!0}))}else q(s.highlight(j.code,j.grammar,j.language))},highlight:function(g,b,m){var L={code:g,grammar:b,language:m};if(s.hooks.run("before-tokenize",L),!L.grammar)throw new Error('The language "'+L.language+'" has no grammar.');return L.tokens=s.tokenize(L.code,L.grammar),s.hooks.run("after-tokenize",L),u.stringify(s.util.encode(L.tokens),L.language)},tokenize:function(g,b){var m=b.rest;if(m){for(var L in m)b[L]=m[L];delete b.rest}var T=new y;return k(T,T.head,g),v(g,T,b,T.head,0),N(T)},hooks:{all:{},add:function(g,b){var m=s.hooks.all;m[g]=m[g]||[],m[g].push(b)},run:function(g,b){var m=s.hooks.all[g];if(!(!m||!m.length))for(var L=0,T;T=m[L++];)T(b)}},Token:u};r.Prism=s;function u(g,b,m,L){this.type=g,this.content=b,this.alias=m,this.length=(L||"").length|0}u.stringify=function g(b,m){if(typeof b=="string")return b;if(Array.isArray(b)){var L="";return b.forEach(function(q){L+=g(q,m)}),L}var T={type:b.type,content:g(b.content,m),tag:"span",classes:["token",b.type],attributes:{},language:m},A=b.alias;A&&(Array.isArray(A)?Array.prototype.push.apply(T.classes,A):T.classes.push(A)),s.hooks.run("wrap",T);var O="";for(var j in T.attributes)O+=" "+j+'="'+(T.attributes[j]||"").replace(/"/g,"&quot;")+'"';return"<"+T.tag+' class="'+T.classes.join(" ")+'"'+O+">"+T.content+"</"+T.tag+">"};function p(g,b,m,L){g.lastIndex=b;var T=g.exec(m);if(T&&L&&T[1]){var A=T[1].length;T.index+=A,T[0]=T[0].slice(A)}return T}function v(g,b,m,L,T,A){for(var O in m)if(!(!m.hasOwnProperty(O)||!m[O])){var j=m[O];j=Array.isArray(j)?j:[j];for(var q=0;q<j.length;++q){if(A&&A.cause==O+","+q)return;var fe=j[q],ce=fe.inside,Ue=!!fe.lookbehind,an=!!fe.greedy,Ye=fe.alias;if(an&&!fe.pattern.global){var Be=fe.pattern.toString().match(/[imsuy]*$/)[0];fe.pattern=RegExp(fe.pattern.source,Be+"g")}for(var qe=fe.pattern||fe,U=L.next,Z=T;U!==b.tail&&!(A&&Z>=A.reach);Z+=U.value.length,U=U.next){var J=U.value;if(b.length>g.length)return;if(!(J instanceof u)){var ae=1,ge;if(an){if(ge=p(qe,Z,g,Ue),!ge||ge.index>=g.length)break;var Ze=ge.index,jn=ge.index+ge[0].length,ve=Z;for(ve+=U.value.length;Ze>=ve;)U=U.next,ve+=U.value.length;if(ve-=U.value.length,Z=ve,U.value instanceof u)continue;for(var nn=U;nn!==b.tail&&(ve<jn||typeof nn.value=="string");nn=nn.next)ae++,ve+=nn.value.length;ae--,J=g.slice(Z,ve),ge.index-=Z}else if(ge=p(qe,0,J,Ue),!ge)continue;var Ze=ge.index,fn=ge[0],Fn=J.slice(0,Ze),Jr=J.slice(Ze+fn.length),eo=Z+J.length;A&&eo>A.reach&&(A.reach=eo);var er=U.prev;Fn&&(er=k(b,er,Fn),Z+=Fn.length),E(b,er,ae);var Va=new u(O,ce?s.tokenize(fn,ce):fn,Ye,fn);if(U=k(b,er,Va),Jr&&k(b,U,Jr),ae>1){var no={cause:O+","+q,reach:eo};v(g,b,m,U.prev,Z,no),A&&no.reach>A.reach&&(A.reach=no.reach)}}}}}}function y(){var g={value:null,prev:null,next:null},b={value:null,prev:g,next:null};g.next=b,this.head=g,this.tail=b,this.length=0}function k(g,b,m){var L=b.next,T={value:m,prev:b,next:L};return b.next=T,L.prev=T,g.length++,T}function E(g,b,m){for(var L=b.next,T=0;T<m&&L!==g.tail;T++)L=L.next;b.next=L,L.prev=b,g.length-=T}function N(g){for(var b=[],m=g.head.next;m!==g.tail;)b.push(m.value),m=m.next;return b}if(!r.document)return r.addEventListener&&(s.disableWorkerMessageHandler||r.addEventListener("message",function(g){var b=JSON.parse(g.data),m=b.language,L=b.code,T=b.immediateClose;r.postMessage(s.highlight(L,s.languages[m],m)),T&&r.close()},!1)),s;var C=s.util.currentScript();C&&(s.filename=C.src,C.hasAttribute("data-manual")&&(s.manual=!0));function M(){s.manual||s.highlightAll()}if(!s.manual){var w=document.readyState;w==="loading"||w==="interactive"&&C&&C.defer?document.addEventListener("DOMContentLoaded",M):window.requestAnimationFrame?window.requestAnimationFrame(M):window.setTimeout(M,16)}return s}(n);e.exports&&(e.exports=t),typeof Bl<"u"&&(Bl.Prism=t)})(Km);var oC=Km.exports,aC=wp;wp.displayName="markup";wp.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function wp(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(t,r){var a={};a["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[r]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};l["language-"+r]={pattern:/[\s\S]+/,inside:e.languages[r]};var i={};i[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:l},e.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(n,t){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:e.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var Xm=xp;xp.displayName="css";xp.aliases=[];function xp(e){(function(n){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var r=n.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(e)}const lC=Xt(Xm);var iC=kp;kp.displayName="clike";kp.aliases=[];function kp(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var sC=Cp;Cp.displayName="javascript";Cp.aliases=["js"];function Cp(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var Cl=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof Bl=="object"?Bl:{},dC=TC();Cl.Prism={manual:!0,disableWorkerMessageHandler:!0};var cC=Tw,uC=jk,Jm=oC,hC=aC,pC=Xm,fC=iC,gC=sC;dC();var Sp={}.hasOwnProperty;function e3(){}e3.prototype=Jm;var pn=new e3,vC=pn;pn.highlight=bC;pn.register=mi;pn.alias=mC;pn.registered=yC;pn.listLanguages=wC;mi(hC);mi(pC);mi(fC);mi(gC);pn.util.encode=CC;pn.Token.stringify=xC;function mi(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");pn.languages[e.displayName]===void 0&&e(pn)}function mC(e,n){var t=pn.languages,r=e,a,l,i,s;n&&(r={},r[e]=n);for(a in r)for(l=r[a],l=typeof l=="string"?[l]:l,i=l.length,s=-1;++s<i;)t[l[s]]=t[a]}function bC(e,n){var t=Jm.highlight,r;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(pn.util.type(n)==="Object")r=n,n=null;else{if(typeof n!="string")throw new Error("Expected `string` for `name`, got `"+n+"`");if(Sp.call(pn.languages,n))r=pn.languages[n];else throw new Error("Unknown language: `"+n+"` is not registered")}return t.call(this,e,r,n)}function yC(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return Sp.call(pn.languages,e)}function wC(){var e=pn.languages,n=[],t;for(t in e)Sp.call(e,t)&&typeof e[t]=="object"&&n.push(t);return n}function xC(e,n,t){var r;return typeof e=="string"?{type:"text",value:e}:pn.util.type(e)==="Array"?kC(e,n):(r={type:e.type,content:pn.Token.stringify(e.content,n,t),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:t},e.alias&&(r.classes=r.classes.concat(e.alias)),pn.hooks.run("wrap",r),cC(r.tag+"."+r.classes.join("."),SC(r.attributes),r.content))}function kC(e,n){for(var t=[],r=e.length,a=-1,l;++a<r;)l=e[a],l!==""&&l!==null&&l!==void 0&&t.push(l);for(a=-1,r=t.length;++a<r;)l=t[a],t[a]=pn.Token.stringify(l,n,t);return t}function CC(e){return e}function SC(e){var n;for(n in e)e[n]=uC(e[n]);return e}function TC(){var e="Prism"in Cl,n=e?Cl.Prism:void 0;return t;function t(){e?Cl.Prism=n:delete Cl.Prism,e=void 0,n=void 0}}const Tp=Xt(vC);var _p=i9(Tp,{});_p.registerLanguage=function(e,n){return Tp.register(n)};_p.alias=function(e,n){return Tp.alias(e,n)};const Fo=_p;var _C=Lp;Lp.displayName="bash";Lp.aliases=["shell"];function Lp(e){(function(n){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:r,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};n.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=n.languages.bash;for(var l=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=a.variable[1].inside,s=0;s<l.length;s++)i[l[s]]=n.languages.bash[l[s]];n.languages.shell=n.languages.bash})(e)}const LC=Xt(_C);var $C=$p;$p.displayName="json";$p.aliases=["webmanifest"];function $p(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}const NC=Xt($C);var EC=Np;Np.displayName="jsx";Np.aliases=[];function Np(e){(function(n){var t=n.util.clone(n.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,l=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function i(p,v){return p=p.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return l}),RegExp(p,v)}l=i(l).source,n.languages.jsx=n.languages.extend("markup",t),n.languages.jsx.tag.pattern=i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),n.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,n.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,n.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,n.languages.jsx.tag.inside.comment=t.comment,n.languages.insertBefore("inside","attr-name",{spread:{pattern:i(/<SPREAD>/.source),inside:n.languages.jsx}},n.languages.jsx.tag),n.languages.insertBefore("inside","special-attr",{script:{pattern:i(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:n.languages.jsx}}},n.languages.jsx.tag);var s=function(p){return p?typeof p=="string"?p:typeof p.content=="string"?p.content:p.content.map(s).join(""):""},u=function(p){for(var v=[],y=0;y<p.length;y++){var k=p[y],E=!1;if(typeof k!="string"&&(k.type==="tag"&&k.content[0]&&k.content[0].type==="tag"?k.content[0].content[0].content==="</"?v.length>0&&v[v.length-1].tagName===s(k.content[0].content[1])&&v.pop():k.content[k.content.length-1].content==="/>"||v.push({tagName:s(k.content[0].content[1]),openedBraces:0}):v.length>0&&k.type==="punctuation"&&k.content==="{"?v[v.length-1].openedBraces++:v.length>0&&v[v.length-1].openedBraces>0&&k.type==="punctuation"&&k.content==="}"?v[v.length-1].openedBraces--:E=!0),(E||typeof k=="string")&&v.length>0&&v[v.length-1].openedBraces===0){var N=s(k);y<p.length-1&&(typeof p[y+1]=="string"||p[y+1].type==="plain-text")&&(N+=s(p[y+1]),p.splice(y+1,1)),y>0&&(typeof p[y-1]=="string"||p[y-1].type==="plain-text")&&(N=s(p[y-1])+N,p.splice(y-1,1),y--),p[y]=new n.Token("plain-text",N,null,N)}k.content&&typeof k.content!="string"&&u(k.content)}};n.hooks.add("after-tokenize",function(p){p.language!=="jsx"&&p.language!=="tsx"||u(p.tokens)})})(e)}const IC=Xt(EC);var MC=Ep;Ep.displayName="scss";Ep.aliases=[];function Ep(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const RC=Xt(MC);var PC=Ip;Ip.displayName="yaml";Ip.aliases=["yml"];function Ip(e){(function(n){var t=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+r.source+"(?:[ 	]+"+t.source+")?|"+t.source+"(?:[ 	]+"+r.source+")?)",l=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),i=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function s(u,p){p=(p||"").replace(/m/g,"")+"m";var v=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<value>>/g,function(){return u});return RegExp(v,p)}n.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return a})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<key>>/g,function(){return"(?:"+l+"|"+i+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:s(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:s(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:s(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:s(i),lookbehind:!0,greedy:!0},number:{pattern:s(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},n.languages.yml=n.languages.yaml})(e)}const AC=Xt(PC);function n3(e){return typeof e=="string"}function FC(e){return Array.isArray(e)}function OC(e){return e===void 0}function zC(e){return e===null}function Nn(e){return!(OC(e)||zC(e))}function DC(e){return!Nn(e)}function BC(...e){throw new Error(e.join(""))}function jC(){return Intl.DateTimeFormat().resolvedOptions().locale}jC();const bi=(e,n,t=1)=>{const r=n<e?-Math.abs(t):t;return Array(1+Math.floor(Math.abs((n-e)/t))).fill(e).map((a,l)=>a+l*r)};function t3(e){return DC(e)?[]:n3(e)?e.length?e.split(/,\s*|\s+/):[]:FC(e)?e:[e]}function UC(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function HC(e){return new Promise(n=>setTimeout(n,e))}Fo.registerLanguage("jsx",IC);Fo.registerLanguage("json",NC);Fo.registerLanguage("css",lC);Fo.registerLanguage("scss",RC);Fo.registerLanguage("bash",LC);Fo.registerLanguage("yaml",AC);const ze=({code:e,language:n="jsx",caption:t,expand:r=!1,fixed:a=r,className:l=""})=>{const[i,s]=D.useState(!1),[u,p]=D.useState(r),v=()=>{navigator.clipboard.writeText(e),s(!0),HC(2e3).then(()=>s(!1))};return d("div",{className:`codeblock ${l} ${u?"expanded":""} ${a?"fixed-open":"expandable"}`,children:[!!t&&o("h4",{className:"caption",children:t}),d("div",{className:"controls",children:[o("div",{className:"expand",onClick:()=>p(!u),children:u?"Compress":"Expand"}),o("div",{className:`clipboard ${i?"copied":""}`,onClick:v,children:i?"Copied":"Copy"})]}),o(Fo,{language:n,showLineNumbers:!0,useInlineStyles:!1,customStyle:{},children:WC(e)})]})},WC=e=>e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/\/\*\s*REAL\s*\*\/.*?\/\*\s*UNREAL\s*\*\//g,"").replaceAll(/{\/\*\s*(UN?)PRETEND\s*\*\/}/g,"").replace(/\n+$/,""),Zt=({children:e,code:n,caption:t,language:r,expand:a,className:l=""})=>d("div",{className:`grid-2 gap-8 top stack-desktop ${l}`,children:[o("div",{className:"wide",children:e}),o(ze,{code:n,caption:t,language:r,expand:a,className:"mar-b-8"})]}),VC=`// define your brand hue and color name
$purple-hue:   295;
$brand-hue:    $purple-hue;
$brand-color:  'purple';

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,GC=`// define your own brand colors...
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
`,YC=`// define your own brand colors and greyscale hues...
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
`,qC=`// define the colors that you want to use...
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
 */function Re(){return Re=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Re.apply(this,arguments)}var un;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(un||(un={}));const U1="popstate";function ZC(e){e===void 0&&(e={});function n(r,a){let{pathname:l,search:i,hash:s}=r.location;return ai("",{pathname:l,search:i,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:Io(a)}return KC(n,t,null,e)}function Te(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Pa(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function QC(){return Math.random().toString(36).substr(2,8)}function H1(e,n){return{usr:e.state,key:e.key,idx:n}}function ai(e,n,t,r){return t===void 0&&(t=null),Re({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?wr(n):n,{state:t,key:n&&n.key||r||QC()})}function Io(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function wr(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function KC(e,n,t,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,i=a.history,s=un.Pop,u=null,p=v();p==null&&(p=0,i.replaceState(Re({},i.state,{idx:p}),""));function v(){return(i.state||{idx:null}).idx}function y(){s=un.Pop;let M=v(),w=M==null?null:M-p;p=M,u&&u({action:s,location:C.location,delta:w})}function k(M,w){s=un.Push;let g=ai(C.location,M,w);t&&t(g,M),p=v()+1;let b=H1(g,p),m=C.createHref(g);try{i.pushState(b,"",m)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;a.location.assign(m)}l&&u&&u({action:s,location:C.location,delta:1})}function E(M,w){s=un.Replace;let g=ai(C.location,M,w);t&&t(g,M),p=v();let b=H1(g,p),m=C.createHref(g);i.replaceState(b,"",m),l&&u&&u({action:s,location:C.location,delta:0})}function N(M){let w=a.location.origin!=="null"?a.location.origin:a.location.href,g=typeof M=="string"?M:Io(M);return Te(w,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,w)}let C={get action(){return s},get location(){return e(a,i)},listen(M){if(u)throw new Error("A history only accepts one active listener");return a.addEventListener(U1,y),u=M,()=>{a.removeEventListener(U1,y),u=null}},createHref(M){return n(a,M)},createURL:N,encodeLocation(M){let w=N(M);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:k,replace:E,go(M){return i.go(M)}};return C}var mn;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(mn||(mn={}));const XC=new Set(["lazy","caseSensitive","path","id","index","children"]);function JC(e){return e.index===!0}function Ju(e,n,t,r){return t===void 0&&(t=[]),r===void 0&&(r={}),e.map((a,l)=>{let i=[...t,l],s=typeof a.id=="string"?a.id:i.join("-");if(Te(a.index!==!0||!a.children,"Cannot specify children on an index route"),Te(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),JC(a)){let u=Re({},a,n(a),{id:s});return r[s]=u,u}else{let u=Re({},a,n(a),{id:s,children:void 0});return r[s]=u,a.children&&(u.children=Ju(a.children,n,i,r)),u}})}function ma(e,n,t){t===void 0&&(t="/");let r=typeof n=="string"?wr(n):n,a=ja(r.pathname||"/",t);if(a==null)return null;let l=r3(e);eS(l);let i=null;for(let s=0;i==null&&s<l.length;++s)i=dS(l[s],hS(a));return i}function r3(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let a=(l,i,s)=>{let u={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};u.relativePath.startsWith("/")&&(Te(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let p=hr([r,u.relativePath]),v=t.concat(u);l.children&&l.children.length>0&&(Te(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),r3(l.children,n,v,p)),!(l.path==null&&!l.index)&&n.push({path:p,score:iS(p,l.index),routesMeta:v})};return e.forEach((l,i)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))a(l,i);else for(let u of o3(l.path))a(l,i,u)}),n}function o3(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let i=o3(r.join("/")),s=[];return s.push(...i.map(u=>u===""?l:[l,u].join("/"))),a&&s.push(...i),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function eS(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:sS(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const nS=/^:\w+$/,tS=3,rS=2,oS=1,aS=10,lS=-2,W1=e=>e==="*";function iS(e,n){let t=e.split("/"),r=t.length;return t.some(W1)&&(r+=lS),n&&(r+=rS),t.filter(a=>!W1(a)).reduce((a,l)=>a+(nS.test(l)?tS:l===""?oS:aS),r)}function sS(e,n){return e.length===n.length&&e.slice(0,-1).every((r,a)=>r===n[a])?e[e.length-1]-n[n.length-1]:0}function dS(e,n){let{routesMeta:t}=e,r={},a="/",l=[];for(let i=0;i<t.length;++i){let s=t[i],u=i===t.length-1,p=a==="/"?n:n.slice(a.length)||"/",v=cS({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},p);if(!v)return null;Object.assign(r,v.params);let y=s.route;l.push({params:r,pathname:hr([a,v.pathname]),pathnameBase:vS(hr([a,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(a=hr([a,v.pathnameBase]))}return l}function cS(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=uS(e.path,e.caseSensitive,e.end),a=n.match(t);if(!a)return null;let l=a[0],i=l.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((p,v,y)=>{if(v==="*"){let k=s[y]||"";i=l.slice(0,l.length-k.length).replace(/(.)\/+$/,"$1")}return p[v]=pS(s[y]||"",v),p},{}),pathname:l,pathnameBase:i,pattern:e}}function uS(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Pa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),r]}function hS(e){try{return decodeURI(e)}catch(n){return Pa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function pS(e,n){try{return decodeURIComponent(e)}catch(t){return Pa(!1,'The value for the URL param "'+n+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),e}}function ja(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function fS(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:a=""}=typeof e=="string"?wr(e):e;return{pathname:t?t.startsWith("/")?t:gS(t,n):n,search:mS(r),hash:bS(a)}}function gS(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Uc(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Id(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Mp(e,n,t,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=wr(e):(a=Re({},e),Te(!a.pathname||!a.pathname.includes("?"),Uc("?","pathname","search",a)),Te(!a.pathname||!a.pathname.includes("#"),Uc("#","pathname","hash",a)),Te(!a.search||!a.search.includes("#"),Uc("#","search","hash",a)));let l=e===""||a.pathname==="",i=l?"/":a.pathname,s;if(r||i==null)s=t;else{let y=n.length-1;if(i.startsWith("..")){let k=i.split("/");for(;k[0]==="..";)k.shift(),y-=1;a.pathname=k.join("/")}s=y>=0?n[y]:"/"}let u=fS(a,s),p=i&&i!=="/"&&i.endsWith("/"),v=(l||i===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(p||v)&&(u.pathname+="/"),u}const hr=e=>e.join("/").replace(/\/\/+/g,"/"),vS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),mS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,bS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Rp{constructor(n,t,r,a){a===void 0&&(a=!1),this.status=n,this.statusText=t||"",this.internal=a,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function a3(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const l3=["post","put","patch","delete"],yS=new Set(l3),wS=["get",...l3],xS=new Set(wS),kS=new Set([301,302,303,307,308]),CS=new Set([307,308]),Hc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},SS={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},V1={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},i3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,TS=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function _S(e){const n=e.window?e.window:typeof window<"u"?window:void 0,t=typeof n<"u"&&typeof n.document<"u"&&typeof n.document.createElement<"u",r=!t;Te(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let F=e.detectErrorBoundary;a=z=>({hasErrorBoundary:F(z)})}else a=TS;let l={},i=Ju(e.routes,a,void 0,l),s,u=e.basename||"/",p=Re({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),v=null,y=new Set,k=null,E=null,N=null,C=e.hydrationData!=null,M=ma(i,e.history.location,u),w=null;if(M==null){let F=At(404,{pathname:e.history.location.pathname}),{matches:z,route:W}=X1(i);M=z,w={[W.id]:F}}let g=!M.some(F=>F.route.lazy)&&(!M.some(F=>F.route.loader)||e.hydrationData!=null),b,m={historyAction:e.history.action,location:e.history.location,matches:M,initialized:g,navigation:Hc,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||w,fetchers:new Map,blockers:new Map},L=un.Pop,T=!1,A,O=!1,j=!1,q=[],fe=[],ce=new Map,Ue=0,an=-1,Ye=new Map,Be=new Set,qe=new Map,U=new Map,Z=new Map,J=!1;function ae(){return v=e.history.listen(F=>{let{action:z,location:W,delta:Q}=F;if(J){J=!1;return}Pa(Z.size===0||Q!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let se=Xa({currentLocation:m.location,nextLocation:W,historyAction:z});if(se&&Q!=null){J=!0,e.history.go(Q*-1),oo(se,{state:"blocked",location:W,proceed(){oo(se,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),e.history.go(Q)},reset(){xr(se),ve({blockers:new Map(b.state.blockers)})}});return}return Fn(z,W)}),m.initialized||Fn(un.Pop,m.location),b}function ge(){v&&v(),y.clear(),A&&A.abort(),m.fetchers.forEach((F,z)=>qa(z)),m.blockers.forEach((F,z)=>xr(z))}function jn(F){return y.add(F),()=>y.delete(F)}function ve(F){m=Re({},m,F),y.forEach(z=>z(m))}function nn(F,z){var W,Q;let se=m.actionData!=null&&m.navigation.formMethod!=null&&ir(m.navigation.formMethod)&&m.navigation.state==="loading"&&((W=F.state)==null?void 0:W._isRedirect)!==!0,ue;z.actionData?Object.keys(z.actionData).length>0?ue=z.actionData:ue=null:se?ue=m.actionData:ue=null;let he=z.loaderData?K1(m.loaderData,z.loaderData,z.matches||[],z.errors):m.loaderData;for(let[oe]of Z)xr(oe);let pe=T===!0||m.navigation.formMethod!=null&&ir(m.navigation.formMethod)&&((Q=F.state)==null?void 0:Q._isRedirect)!==!0;s&&(i=s,s=void 0),ve(Re({},z,{actionData:ue,loaderData:he,historyAction:L,location:F,initialized:!0,navigation:Hc,revalidation:"idle",restoreScrollPosition:_i(F,z.matches||m.matches),preventScrollReset:pe,blockers:new Map(m.blockers)})),O||L===un.Pop||(L===un.Push?e.history.push(F,F.state):L===un.Replace&&e.history.replace(F,F.state)),L=un.Pop,T=!1,O=!1,j=!1,q=[],fe=[]}async function Ze(F,z){if(typeof F=="number"){e.history.go(F);return}let W=eh(m.location,m.matches,u,p.v7_prependBasename,F,z==null?void 0:z.fromRouteId,z==null?void 0:z.relative),{path:Q,submission:se,error:ue}=G1(p.v7_normalizeFormMethod,!1,W,z),he=m.location,pe=ai(m.location,Q,z&&z.state);pe=Re({},pe,e.history.encodeLocation(pe));let oe=z&&z.replace!=null?z.replace:void 0,$e=un.Push;oe===!0?$e=un.Replace:oe===!1||se!=null&&ir(se.formMethod)&&se.formAction===m.location.pathname+m.location.search&&($e=un.Replace);let Pe=z&&"preventScrollReset"in z?z.preventScrollReset===!0:void 0,wn=Xa({currentLocation:he,nextLocation:pe,historyAction:$e});if(wn){oo(wn,{state:"blocked",location:pe,proceed(){oo(wn,{state:"proceeding",proceed:void 0,reset:void 0,location:pe}),Ze(F,z)},reset(){xr(wn),ve({blockers:new Map(m.blockers)})}});return}return await Fn($e,pe,{submission:se,pendingError:ue,preventScrollReset:Pe,replace:z&&z.replace})}function fn(){if(Ya(),ve({revalidation:"loading"}),m.navigation.state!=="submitting"){if(m.navigation.state==="idle"){Fn(m.historyAction,m.location,{startUninterruptedRevalidation:!0});return}Fn(L||m.historyAction,m.navigation.location,{overrideNavigation:m.navigation})}}async function Fn(F,z,W){A&&A.abort(),A=null,L=F,O=(W&&W.startUninterruptedRevalidation)===!0,Ti(m.location,m.matches),T=(W&&W.preventScrollReset)===!0;let Q=s||i,se=W&&W.overrideNavigation,ue=ma(Q,z,u);if(!ue){let dn=At(404,{pathname:z.pathname}),{matches:gn,route:yt}=X1(Q);Do(),nn(z,{matches:gn,loaderData:{},errors:{[yt.id]:dn}});return}if(m.initialized&&!j&&IS(m.location,z)&&!(W&&W.submission&&ir(W.submission.formMethod))){nn(z,{matches:ue});return}A=new AbortController;let he=vl(e.history,z,A.signal,W&&W.submission),pe,oe;if(W&&W.pendingError)oe={[ba(ue).route.id]:W.pendingError};else if(W&&W.submission&&ir(W.submission.formMethod)){let dn=await Jr(he,z,W.submission,ue,{replace:W.replace});if(dn.shortCircuited)return;pe=dn.pendingActionData,oe=dn.pendingActionError,se=Re({state:"loading",location:z},W.submission),he=new Request(he.url,{signal:he.signal})}let{shortCircuited:$e,loaderData:Pe,errors:wn}=await eo(he,z,ue,se,W&&W.submission,W&&W.fetcherSubmission,W&&W.replace,pe,oe);$e||(A=null,nn(z,Re({matches:ue},pe?{actionData:pe}:{},{loaderData:Pe,errors:wn})))}async function Jr(F,z,W,Q,se){Ya();let ue=Re({state:"submitting",location:z},W);ve({navigation:ue});let he,pe=nh(Q,z);if(!pe.route.action&&!pe.route.lazy)he={type:mn.error,error:At(405,{method:F.method,pathname:z.pathname,routeId:pe.route.id})};else if(he=await gl("action",F,pe,Q,l,a,u),F.signal.aborted)return{shortCircuited:!0};if(Ta(he)){let oe;return se&&se.replace!=null?oe=se.replace:oe=he.location===m.location.pathname+m.location.search,await to(m,he,{submission:W,replace:oe}),{shortCircuited:!0}}if(Ol(he)){let oe=ba(Q,pe.route.id);return(se&&se.replace)!==!0&&(L=un.Push),{pendingActionData:{},pendingActionError:{[oe.route.id]:he.error}}}if(xo(he))throw At(400,{type:"defer-action"});return{pendingActionData:{[pe.route.id]:he.data}}}async function eo(F,z,W,Q,se,ue,he,pe,oe){let $e=Q;$e||($e=Re({state:"loading",location:z,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},se));let Pe=se||ue?se||ue:$e.formMethod&&$e.formAction&&$e.formData&&$e.formEncType?{formMethod:$e.formMethod,formAction:$e.formAction,formData:$e.formData,formEncType:$e.formEncType}:void 0,wn=s||i,[dn,gn]=Y1(e.history,m,W,Pe,z,j,q,fe,qe,wn,u,pe,oe);if(Do(je=>!(W&&W.some(Qn=>Qn.route.id===je))||dn&&dn.some(Qn=>Qn.route.id===je)),dn.length===0&&gn.length===0){let je=Qa();return nn(z,Re({matches:W,loaderData:{},errors:oe||null},pe?{actionData:pe}:{},je?{fetchers:new Map(m.fetchers)}:{})),{shortCircuited:!0}}if(!O){gn.forEach(Qn=>{let tr=m.fetchers.get(Qn.key),vn={state:"loading",data:tr&&tr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(Qn.key,vn)});let je=pe||m.actionData;ve(Re({navigation:$e},je?Object.keys(je).length===0?{actionData:null}:{actionData:je}:{},gn.length>0?{fetchers:new Map(m.fetchers)}:{}))}an=++Ue,gn.forEach(je=>{je.controller&&ce.set(je.key,je.controller)});let yt=()=>gn.forEach(je=>nr(je.key));A&&A.signal.addEventListener("abort",yt);let{results:ao,loaderResults:Ja,fetcherResults:Bo}=await ki(m.matches,W,dn,gn,F);if(F.signal.aborted)return{shortCircuited:!0};A&&A.signal.removeEventListener("abort",yt),gn.forEach(je=>ce.delete(je.key));let $t=J1(ao);if($t)return await to(m,$t,{replace:he}),{shortCircuited:!0};let{loaderData:lo,errors:jo}=Q1(m,W,dn,Ja,oe,gn,Bo,U);U.forEach((je,Qn)=>{je.subscribe(tr=>{(tr||je.done)&&U.delete(Qn)})});let el=Qa(),nl=Ka(an),Uo=el||nl||gn.length>0;return Re({loaderData:lo,errors:jo},Uo?{fetchers:new Map(m.fetchers)}:{})}function er(F){return m.fetchers.get(F)||SS}function Va(F,z,W,Q){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ce.has(F)&&nr(F);let se=s||i,ue=eh(m.location,m.matches,u,p.v7_prependBasename,W,z,Q==null?void 0:Q.relative),he=ma(se,ue,u);if(!he){ro(F,z,At(404,{pathname:ue}));return}let{path:pe,submission:oe}=G1(p.v7_normalizeFormMethod,!0,ue,Q),$e=nh(he,pe);if(T=(Q&&Q.preventScrollReset)===!0,oe&&ir(oe.formMethod)){no(F,z,pe,$e,he,oe);return}qe.set(F,{routeId:z,path:pe}),Ga(F,z,pe,$e,he,oe)}async function no(F,z,W,Q,se,ue){if(Ya(),qe.delete(F),!Q.route.action&&!Q.route.lazy){let vn=At(405,{method:ue.formMethod,pathname:W,routeId:z});ro(F,z,vn);return}let he=m.fetchers.get(F),pe=Re({state:"submitting"},ue,{data:he&&he.data," _hasFetcherDoneAnything ":!0});m.fetchers.set(F,pe),ve({fetchers:new Map(m.fetchers)});let oe=new AbortController,$e=vl(e.history,W,oe.signal,ue);ce.set(F,oe);let Pe=await gl("action",$e,Q,se,l,a,u);if($e.signal.aborted){ce.get(F)===oe&&ce.delete(F);return}if(Ta(Pe)){ce.delete(F),Be.add(F);let vn=Re({state:"loading"},ue,{data:void 0," _hasFetcherDoneAnything ":!0});return m.fetchers.set(F,vn),ve({fetchers:new Map(m.fetchers)}),to(m,Pe,{submission:ue,isFetchActionRedirect:!0})}if(Ol(Pe)){ro(F,z,Pe.error);return}if(xo(Pe))throw At(400,{type:"defer-action"});let wn=m.navigation.location||m.location,dn=vl(e.history,wn,oe.signal),gn=s||i,yt=m.navigation.state!=="idle"?ma(gn,m.navigation.location,u):m.matches;Te(yt,"Didn't find any matches after fetcher action");let ao=++Ue;Ye.set(F,ao);let Ja=Re({state:"loading",data:Pe.data},ue,{" _hasFetcherDoneAnything ":!0});m.fetchers.set(F,Ja);let[Bo,$t]=Y1(e.history,m,yt,ue,wn,j,q,fe,qe,gn,u,{[Q.route.id]:Pe.data},void 0);$t.filter(vn=>vn.key!==F).forEach(vn=>{let tl=vn.key,Li=m.fetchers.get(tl),$i={state:"loading",data:Li&&Li.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(tl,$i),vn.controller&&ce.set(tl,vn.controller)}),ve({fetchers:new Map(m.fetchers)});let lo=()=>$t.forEach(vn=>nr(vn.key));oe.signal.addEventListener("abort",lo);let{results:jo,loaderResults:el,fetcherResults:nl}=await ki(m.matches,yt,Bo,$t,dn);if(oe.signal.aborted)return;oe.signal.removeEventListener("abort",lo),Ye.delete(F),ce.delete(F),$t.forEach(vn=>ce.delete(vn.key));let Uo=J1(jo);if(Uo)return to(m,Uo);let{loaderData:je,errors:Qn}=Q1(m,m.matches,Bo,el,void 0,$t,nl,U);if(m.fetchers.has(F)){let vn={state:"idle",data:Pe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(F,vn)}let tr=Ka(ao);m.navigation.state==="loading"&&ao>an?(Te(L,"Expected pending action"),A&&A.abort(),nn(m.navigation.location,{matches:yt,loaderData:je,errors:Qn,fetchers:new Map(m.fetchers)})):(ve(Re({errors:Qn,loaderData:K1(m.loaderData,je,yt,Qn)},tr||$t.length>0?{fetchers:new Map(m.fetchers)}:{})),j=!1)}async function Ga(F,z,W,Q,se,ue){let he=m.fetchers.get(F),pe=Re({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ue,{data:he&&he.data," _hasFetcherDoneAnything ":!0});m.fetchers.set(F,pe),ve({fetchers:new Map(m.fetchers)});let oe=new AbortController,$e=vl(e.history,W,oe.signal);ce.set(F,oe);let Pe=await gl("loader",$e,Q,se,l,a,u);if(xo(Pe)&&(Pe=await u3(Pe,$e.signal,!0)||Pe),ce.get(F)===oe&&ce.delete(F),$e.signal.aborted)return;if(Ta(Pe)){Be.add(F),await to(m,Pe);return}if(Ol(Pe)){let dn=ba(m.matches,z);m.fetchers.delete(F),ve({fetchers:new Map(m.fetchers),errors:{[dn.route.id]:Pe.error}});return}Te(!xo(Pe),"Unhandled fetcher deferred data");let wn={state:"idle",data:Pe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(F,wn),ve({fetchers:new Map(m.fetchers)})}async function to(F,z,W){let{submission:Q,replace:se,isFetchActionRedirect:ue}=W===void 0?{}:W;z.revalidate&&(j=!0);let he=ai(F.location,z.location,Re({_isRedirect:!0},ue?{_isFetchActionRedirect:!0}:{}));if(Te(he,"Expected a location on the redirect navigation"),i3.test(z.location)&&t){let dn=e.history.createURL(z.location),gn=ja(dn.pathname,u)==null;if(n.location.origin!==dn.origin||gn){se?n.location.replace(z.location):n.location.assign(z.location);return}}A=null;let pe=se===!0?un.Replace:un.Push,{formMethod:oe,formAction:$e,formEncType:Pe,formData:wn}=F.navigation;!Q&&oe&&$e&&wn&&Pe&&(Q={formMethod:oe,formAction:$e,formEncType:Pe,formData:wn}),CS.has(z.status)&&Q&&ir(Q.formMethod)?await Fn(pe,he,{submission:Re({},Q,{formAction:z.location}),preventScrollReset:T}):ue?await Fn(pe,he,{overrideNavigation:{state:"loading",location:he,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:Q,preventScrollReset:T}):await Fn(pe,he,{overrideNavigation:{state:"loading",location:he,formMethod:Q?Q.formMethod:void 0,formAction:Q?Q.formAction:void 0,formEncType:Q?Q.formEncType:void 0,formData:Q?Q.formData:void 0},preventScrollReset:T})}async function ki(F,z,W,Q,se){let ue=await Promise.all([...W.map(oe=>gl("loader",se,oe,z,l,a,u)),...Q.map(oe=>oe.matches&&oe.match&&oe.controller?gl("loader",vl(e.history,oe.path,oe.controller.signal),oe.match,oe.matches,l,a,u):{type:mn.error,error:At(404,{pathname:oe.path})})]),he=ue.slice(0,W.length),pe=ue.slice(W.length);return await Promise.all([e2(F,W,he,he.map(()=>se.signal),!1,m.loaderData),e2(F,Q.map(oe=>oe.match),pe,Q.map(oe=>oe.controller?oe.controller.signal:null),!0)]),{results:ue,loaderResults:he,fetcherResults:pe}}function Ya(){j=!0,q.push(...Do()),qe.forEach((F,z)=>{ce.has(z)&&(fe.push(z),nr(z))})}function ro(F,z,W){let Q=ba(m.matches,z);qa(F),ve({errors:{[Q.route.id]:W},fetchers:new Map(m.fetchers)})}function qa(F){let z=m.fetchers.get(F);ce.has(F)&&!(z&&z.state==="loading"&&Ye.has(F))&&nr(F),qe.delete(F),Ye.delete(F),Be.delete(F),m.fetchers.delete(F)}function nr(F){let z=ce.get(F);Te(z,"Expected fetch controller: "+F),z.abort(),ce.delete(F)}function Za(F){for(let z of F){let Q={state:"idle",data:er(z).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(z,Q)}}function Qa(){let F=[],z=!1;for(let W of Be){let Q=m.fetchers.get(W);Te(Q,"Expected fetcher: "+W),Q.state==="loading"&&(Be.delete(W),F.push(W),z=!0)}return Za(F),z}function Ka(F){let z=[];for(let[W,Q]of Ye)if(Q<F){let se=m.fetchers.get(W);Te(se,"Expected fetcher: "+W),se.state==="loading"&&(nr(W),Ye.delete(W),z.push(W))}return Za(z),z.length>0}function Ci(F,z){let W=m.blockers.get(F)||V1;return Z.get(F)!==z&&Z.set(F,z),W}function xr(F){m.blockers.delete(F),Z.delete(F)}function oo(F,z){let W=m.blockers.get(F)||V1;Te(W.state==="unblocked"&&z.state==="blocked"||W.state==="blocked"&&z.state==="blocked"||W.state==="blocked"&&z.state==="proceeding"||W.state==="blocked"&&z.state==="unblocked"||W.state==="proceeding"&&z.state==="unblocked","Invalid blocker state transition: "+W.state+" -> "+z.state),m.blockers.set(F,z),ve({blockers:new Map(m.blockers)})}function Xa(F){let{currentLocation:z,nextLocation:W,historyAction:Q}=F;if(Z.size===0)return;Z.size>1&&Pa(!1,"A router only supports one blocker at a time");let se=Array.from(Z.entries()),[ue,he]=se[se.length-1],pe=m.blockers.get(ue);if(!(pe&&pe.state==="proceeding")&&he({currentLocation:z,nextLocation:W,historyAction:Q}))return ue}function Do(F){let z=[];return U.forEach((W,Q)=>{(!F||F(Q))&&(W.cancel(),z.push(Q),U.delete(Q))}),z}function Si(F,z,W){if(k=F,N=z,E=W||(Q=>Q.key),!C&&m.navigation===Hc){C=!0;let Q=_i(m.location,m.matches);Q!=null&&ve({restoreScrollPosition:Q})}return()=>{k=null,N=null,E=null}}function Ti(F,z){if(k&&E&&N){let W=z.map(se=>n2(se,m.loaderData)),Q=E(F,W)||F.key;k[Q]=N()}}function _i(F,z){if(k&&E&&N){let W=z.map(ue=>n2(ue,m.loaderData)),Q=E(F,W)||F.key,se=k[Q];if(typeof se=="number")return se}return null}function jd(F){l={},s=Ju(F,a,void 0,l)}return b={get basename(){return u},get state(){return m},get routes(){return i},initialize:ae,subscribe:jn,enableScrollRestoration:Si,navigate:Ze,fetch:Va,revalidate:fn,createHref:F=>e.history.createHref(F),encodeLocation:F=>e.history.encodeLocation(F),getFetcher:er,deleteFetcher:qa,dispose:ge,getBlocker:Ci,deleteBlocker:xr,_internalFetchControllers:ce,_internalActiveDeferreds:U,_internalSetRoutes:jd},b}function LS(e){return e!=null&&"formData"in e}function eh(e,n,t,r,a,l,i){let s,u;if(l!=null&&i!=="path"){s=[];for(let v of n)if(s.push(v),v.route.id===l){u=v;break}}else s=n,u=n[n.length-1];let p=Mp(a||".",Id(s).map(v=>v.pathnameBase),ja(e.pathname,t)||e.pathname,i==="path");return a==null&&(p.search=e.search,p.hash=e.hash),(a==null||a===""||a===".")&&u&&u.route.index&&!Pp(p.search)&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),r&&t!=="/"&&(p.pathname=p.pathname==="/"?t:hr([t,p.pathname])),Io(p)}function G1(e,n,t,r){if(!r||!LS(r))return{path:t};if(r.formMethod&&!PS(r.formMethod))return{path:t,error:At(405,{method:r.formMethod})};let a;if(r.formData){let s=r.formMethod||"get";if(a={formMethod:e?s.toUpperCase():s.toLowerCase(),formAction:c3(t),formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:r.formData},ir(a.formMethod))return{path:t,submission:a}}let l=wr(t),i=d3(r.formData);return n&&l.search&&Pp(l.search)&&i.append("index",""),l.search="?"+i,{path:Io(l),submission:a}}function $S(e,n){let t=e;if(n){let r=e.findIndex(a=>a.route.id===n);r>=0&&(t=e.slice(0,r))}return t}function Y1(e,n,t,r,a,l,i,s,u,p,v,y,k){let E=k?Object.values(k)[0]:y?Object.values(y)[0]:void 0,N=e.createURL(n.location),C=e.createURL(a),M=k?Object.keys(k)[0]:void 0,g=$S(t,M).filter((m,L)=>{if(m.route.lazy)return!0;if(m.route.loader==null)return!1;if(NS(n.loaderData,n.matches[L],m)||i.some(O=>O===m.route.id))return!0;let T=n.matches[L],A=m;return q1(m,Re({currentUrl:N,currentParams:T.params,nextUrl:C,nextParams:A.params},r,{actionResult:E,defaultShouldRevalidate:l||N.pathname+N.search===C.pathname+C.search||N.search!==C.search||s3(T,A)}))}),b=[];return u.forEach((m,L)=>{if(!t.some(j=>j.route.id===m.routeId))return;let T=ma(p,m.path,v);if(!T){b.push({key:L,routeId:m.routeId,path:m.path,matches:null,match:null,controller:null});return}let A=nh(T,m.path);if(s.includes(L)){b.push({key:L,routeId:m.routeId,path:m.path,matches:T,match:A,controller:new AbortController});return}q1(A,Re({currentUrl:N,currentParams:n.matches[n.matches.length-1].params,nextUrl:C,nextParams:t[t.length-1].params},r,{actionResult:E,defaultShouldRevalidate:l}))&&b.push({key:L,routeId:m.routeId,path:m.path,matches:T,match:A,controller:new AbortController})}),[g,b]}function NS(e,n,t){let r=!n||t.route.id!==n.route.id,a=e[t.route.id]===void 0;return r||a}function s3(e,n){let t=e.route.path;return e.pathname!==n.pathname||t!=null&&t.endsWith("*")&&e.params["*"]!==n.params["*"]}function q1(e,n){if(e.route.shouldRevalidate){let t=e.route.shouldRevalidate(n);if(typeof t=="boolean")return t}return n.defaultShouldRevalidate}async function Z1(e,n,t){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let a=t[e.id];Te(a,"No route found in manifest");let l={};for(let i in r){let u=a[i]!==void 0&&i!=="hasErrorBoundary";Pa(!u,'Route "'+a.id+'" has a static property "'+i+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+i+'" will be ignored.')),!u&&!XC.has(i)&&(l[i]=r[i])}Object.assign(a,l),Object.assign(a,Re({},n(a),{lazy:void 0}))}async function gl(e,n,t,r,a,l,i,s,u,p){s===void 0&&(s=!1),u===void 0&&(u=!1);let v,y,k,E=M=>{let w,g=new Promise((b,m)=>w=m);return k=()=>w(),n.signal.addEventListener("abort",k),Promise.race([M({request:n,params:t.params,context:p}),g])};try{let M=t.route[e];if(t.route.lazy)if(M)y=(await Promise.all([E(M),Z1(t.route,l,a)]))[0];else if(await Z1(t.route,l,a),M=t.route[e],M)y=await E(M);else if(e==="action"){let w=new URL(n.url),g=w.pathname+w.search;throw At(405,{method:n.method,pathname:g,routeId:t.route.id})}else return{type:mn.data,data:void 0};else if(M)y=await E(M);else{let w=new URL(n.url),g=w.pathname+w.search;throw At(404,{pathname:g})}Te(y!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+t.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(M){v=mn.error,y=M}finally{k&&n.signal.removeEventListener("abort",k)}if(RS(y)){let M=y.status;if(kS.has(M)){let b=y.headers.get("Location");if(Te(b,"Redirects returned/thrown from loaders/actions must have a Location header"),!i3.test(b))b=eh(new URL(n.url),r.slice(0,r.indexOf(t)+1),i,!0,b);else if(!s){let m=new URL(n.url),L=b.startsWith("//")?new URL(m.protocol+b):new URL(b),T=ja(L.pathname,i)!=null;L.origin===m.origin&&T&&(b=L.pathname+L.search+L.hash)}if(s)throw y.headers.set("Location",b),y;return{type:mn.redirect,status:M,location:b,revalidate:y.headers.get("X-Remix-Revalidate")!==null}}if(u)throw{type:v||mn.data,response:y};let w,g=y.headers.get("Content-Type");return g&&/\bapplication\/json\b/.test(g)?w=await y.json():w=await y.text(),v===mn.error?{type:v,error:new Rp(M,y.statusText,w),headers:y.headers}:{type:mn.data,data:w,statusCode:y.status,headers:y.headers}}if(v===mn.error)return{type:v,error:y};if(MS(y)){var N,C;return{type:mn.deferred,deferredData:y,statusCode:(N=y.init)==null?void 0:N.status,headers:((C=y.init)==null?void 0:C.headers)&&new Headers(y.init.headers)}}return{type:mn.data,data:y}}function vl(e,n,t,r){let a=e.createURL(c3(n)).toString(),l={signal:t};if(r&&ir(r.formMethod)){let{formMethod:i,formEncType:s,formData:u}=r;l.method=i.toUpperCase(),l.body=s==="application/x-www-form-urlencoded"?d3(u):u}return new Request(a,l)}function d3(e){let n=new URLSearchParams;for(let[t,r]of e.entries())n.append(t,r instanceof File?r.name:r);return n}function ES(e,n,t,r,a){let l={},i=null,s,u=!1,p={};return t.forEach((v,y)=>{let k=n[y].route.id;if(Te(!Ta(v),"Cannot handle redirect results in processLoaderData"),Ol(v)){let E=ba(e,k),N=v.error;r&&(N=Object.values(r)[0],r=void 0),i=i||{},i[E.route.id]==null&&(i[E.route.id]=N),l[k]=void 0,u||(u=!0,s=a3(v.error)?v.error.status:500),v.headers&&(p[k]=v.headers)}else xo(v)?(a.set(k,v.deferredData),l[k]=v.deferredData.data):l[k]=v.data,v.statusCode!=null&&v.statusCode!==200&&!u&&(s=v.statusCode),v.headers&&(p[k]=v.headers)}),r&&(i=r,l[Object.keys(r)[0]]=void 0),{loaderData:l,errors:i,statusCode:s||200,loaderHeaders:p}}function Q1(e,n,t,r,a,l,i,s){let{loaderData:u,errors:p}=ES(n,t,r,a,s);for(let v=0;v<l.length;v++){let{key:y,match:k,controller:E}=l[v];Te(i!==void 0&&i[v]!==void 0,"Did not find corresponding fetcher result");let N=i[v];if(!(E&&E.signal.aborted))if(Ol(N)){let C=ba(e.matches,k==null?void 0:k.route.id);p&&p[C.route.id]||(p=Re({},p,{[C.route.id]:N.error})),e.fetchers.delete(y)}else if(Ta(N))Te(!1,"Unhandled fetcher revalidation redirect");else if(xo(N))Te(!1,"Unhandled fetcher deferred data");else{let C={state:"idle",data:N.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(y,C)}}return{loaderData:u,errors:p}}function K1(e,n,t,r){let a=Re({},n);for(let l of t){let i=l.route.id;if(n.hasOwnProperty(i)?n[i]!==void 0&&(a[i]=n[i]):e[i]!==void 0&&l.route.loader&&(a[i]=e[i]),r&&r.hasOwnProperty(i))break}return a}function ba(e,n){return(n?e.slice(0,e.findIndex(r=>r.route.id===n)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function X1(e){let n=e.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:n}],route:n}}function At(e,n){let{pathname:t,routeId:r,method:a,type:l}=n===void 0?{}:n,i="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(i="Bad Request",a&&t&&r?s="You made a "+a+' request to "'+t+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":l==="defer-action"&&(s="defer() is not supported in actions")):e===403?(i="Forbidden",s='Route "'+r+'" does not match URL "'+t+'"'):e===404?(i="Not Found",s='No route matches URL "'+t+'"'):e===405&&(i="Method Not Allowed",a&&t&&r?s="You made a "+a.toUpperCase()+' request to "'+t+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":a&&(s='Invalid request method "'+a.toUpperCase()+'"')),new Rp(e||500,i,new Error(s),!0)}function J1(e){for(let n=e.length-1;n>=0;n--){let t=e[n];if(Ta(t))return t}}function c3(e){let n=typeof e=="string"?wr(e):e;return Io(Re({},n,{hash:""}))}function IS(e,n){return e.pathname!==n.pathname||e.search!==n.search?!1:e.hash===""?n.hash!=="":e.hash===n.hash?!0:n.hash!==""}function xo(e){return e.type===mn.deferred}function Ol(e){return e.type===mn.error}function Ta(e){return(e&&e.type)===mn.redirect}function MS(e){let n=e;return n&&typeof n=="object"&&typeof n.data=="object"&&typeof n.subscribe=="function"&&typeof n.cancel=="function"&&typeof n.resolveData=="function"}function RS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function PS(e){return xS.has(e.toLowerCase())}function ir(e){return yS.has(e.toLowerCase())}async function e2(e,n,t,r,a,l){for(let i=0;i<t.length;i++){let s=t[i],u=n[i];if(!u)continue;let p=e.find(y=>y.route.id===u.route.id),v=p!=null&&!s3(p,u)&&(l&&l[u.route.id])!==void 0;if(xo(s)&&(a||v)){let y=r[i];Te(y,"Expected an AbortSignal for revalidating fetcher deferred result"),await u3(s,y,a).then(k=>{k&&(t[i]=k||t[i])})}}}async function u3(e,n,t){if(t===void 0&&(t=!1),!await e.deferredData.resolveData(n)){if(t)try{return{type:mn.data,data:e.deferredData.unwrappedData}}catch(a){return{type:mn.error,error:a}}return{type:mn.data,data:e.deferredData.data}}}function Pp(e){return new URLSearchParams(e).getAll("index").some(n=>n==="")}function n2(e,n){let{route:t,pathname:r,params:a}=e;return{id:t.id,pathname:r,params:a,data:n[t.id],handle:t.handle}}function nh(e,n){let t=typeof n=="string"?wr(n).search:n.search;if(e[e.length-1].route.index&&Pp(t||""))return e[e.length-1];let r=Id(e);return r[r.length-1]}/**
 * React Router v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function td(){return td=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},td.apply(this,arguments)}const Md=D.createContext(null),Ap=D.createContext(null),Oo=D.createContext(null),Rd=D.createContext(null),Xr=D.createContext({outlet:null,matches:[],isDataRoute:!1}),h3=D.createContext(null);function AS(e,n){let{relative:t}=n===void 0?{}:n;yi()||Te(!1);let{basename:r,navigator:a}=D.useContext(Oo),{hash:l,pathname:i,search:s}=Fp(e,{relative:t}),u=i;return r!=="/"&&(u=i==="/"?r:hr([r,i])),a.createHref({pathname:u,search:s,hash:l})}function yi(){return D.useContext(Rd)!=null}function Ua(){return yi()||Te(!1),D.useContext(Rd).location}function p3(e){D.useContext(Oo).static||D.useLayoutEffect(e)}function FS(){let{isDataRoute:e}=D.useContext(Xr);return e?QS():OS()}function OS(){yi()||Te(!1);let e=D.useContext(Md),{basename:n,navigator:t}=D.useContext(Oo),{matches:r}=D.useContext(Xr),{pathname:a}=Ua(),l=JSON.stringify(Id(r).map(u=>u.pathnameBase)),i=D.useRef(!1);return p3(()=>{i.current=!0}),D.useCallback(function(u,p){if(p===void 0&&(p={}),!i.current)return;if(typeof u=="number"){t.go(u);return}let v=Mp(u,JSON.parse(l),a,p.relative==="path");e==null&&n!=="/"&&(v.pathname=v.pathname==="/"?n:hr([n,v.pathname])),(p.replace?t.replace:t.push)(v,p.state,p)},[n,t,l,a,e])}const zS=D.createContext(null);function DS(e){let n=D.useContext(Xr).outlet;return n&&D.createElement(zS.Provider,{value:e},n)}function Fp(e,n){let{relative:t}=n===void 0?{}:n,{matches:r}=D.useContext(Xr),{pathname:a}=Ua(),l=JSON.stringify(Id(r).map(i=>i.pathnameBase));return D.useMemo(()=>Mp(e,JSON.parse(l),a,t==="path"),[e,l,a,t])}function BS(e,n,t){yi()||Te(!1);let{navigator:r}=D.useContext(Oo),{matches:a}=D.useContext(Xr),l=a[a.length-1],i=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=Ua(),p;if(n){var v;let C=typeof n=="string"?wr(n):n;s==="/"||(v=C.pathname)!=null&&v.startsWith(s)||Te(!1),p=C}else p=u;let y=p.pathname||"/",k=s==="/"?y:y.slice(s.length)||"/",E=ma(e,{pathname:k}),N=VS(E&&E.map(C=>Object.assign({},C,{params:Object.assign({},i,C.params),pathname:hr([s,r.encodeLocation?r.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?s:hr([s,r.encodeLocation?r.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),a,t);return n&&N?D.createElement(Rd.Provider,{value:{location:td({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:un.Pop}},N):N}function jS(){let e=ZS(),n=a3(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},l=null;return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},n),t?D.createElement("pre",{style:a},t):null,l)}const US=D.createElement(jS,null);class HS extends D.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error||t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error?D.createElement(Xr.Provider,{value:this.props.routeContext},D.createElement(h3.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function WS(e){let{routeContext:n,match:t,children:r}=e,a=D.useContext(Md);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),D.createElement(Xr.Provider,{value:n},r)}function VS(e,n,t){var r;if(n===void 0&&(n=[]),t===void 0&&(t=null),e==null){var a;if((a=t)!=null&&a.errors)e=t.matches;else return null}let l=e,i=(r=t)==null?void 0:r.errors;if(i!=null){let s=l.findIndex(u=>u.route.id&&(i==null?void 0:i[u.route.id]));s>=0||Te(!1),l=l.slice(0,Math.min(l.length,s+1))}return l.reduceRight((s,u,p)=>{let v=u.route.id?i==null?void 0:i[u.route.id]:null,y=null;t&&(y=u.route.errorElement||US);let k=n.concat(l.slice(0,p+1)),E=()=>{let N;return v?N=y:u.route.Component?N=D.createElement(u.route.Component,null):u.route.element?N=u.route.element:N=s,D.createElement(WS,{match:u,routeContext:{outlet:s,matches:k,isDataRoute:t!=null},children:N})};return t&&(u.route.ErrorBoundary||u.route.errorElement||p===0)?D.createElement(HS,{location:t.location,revalidation:t.revalidation,component:y,error:v,children:E(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):E()},null)}var th;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(th||(th={}));var li;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(li||(li={}));function GS(e){let n=D.useContext(Md);return n||Te(!1),n}function YS(e){let n=D.useContext(Ap);return n||Te(!1),n}function qS(e){let n=D.useContext(Xr);return n||Te(!1),n}function f3(e){let n=qS(),t=n.matches[n.matches.length-1];return t.route.id||Te(!1),t.route.id}function ZS(){var e;let n=D.useContext(h3),t=YS(li.UseRouteError),r=f3(li.UseRouteError);return n||((e=t.errors)==null?void 0:e[r])}function QS(){let{router:e}=GS(th.UseNavigateStable),n=f3(li.UseNavigateStable),t=D.useRef(!1);return p3(()=>{t.current=!0}),D.useCallback(function(a,l){l===void 0&&(l={}),t.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,td({fromRouteId:n},l)))},[e,n])}const t2="startTransition";function KS(e){let{fallbackElement:n,router:t}=e,[r,a]=D.useState(t.state),l=D.useCallback(p=>{t2 in v0?v0[t2](()=>a(p)):a(p)},[a]);D.useLayoutEffect(()=>t.subscribe(l),[t,l]);let i=D.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:p=>t.navigate(p),push:(p,v,y)=>t.navigate(p,{state:v,preventScrollReset:y==null?void 0:y.preventScrollReset}),replace:(p,v,y)=>t.navigate(p,{replace:!0,state:v,preventScrollReset:y==null?void 0:y.preventScrollReset})}),[t]),s=t.basename||"/",u=D.useMemo(()=>({router:t,navigator:i,static:!1,basename:s}),[t,i,s]);return D.createElement(D.Fragment,null,D.createElement(Md.Provider,{value:u},D.createElement(Ap.Provider,{value:r},D.createElement(eT,{basename:s,location:r.location,navigationType:r.historyAction,navigator:i},r.initialized?D.createElement(XS,{routes:t.routes,state:r}):n))),null)}function XS(e){let{routes:n,state:t}=e;return BS(n,void 0,t)}function JS(e){return DS(e.context)}function eT(e){let{basename:n="/",children:t=null,location:r,navigationType:a=un.Pop,navigator:l,static:i=!1}=e;yi()&&Te(!1);let s=n.replace(/^\/*/,"/"),u=D.useMemo(()=>({basename:s,navigator:l,static:i}),[s,l,i]);typeof r=="string"&&(r=wr(r));let{pathname:p="/",search:v="",hash:y="",state:k=null,key:E="default"}=r,N=D.useMemo(()=>{let C=ja(p,s);return C==null?null:{location:{pathname:C,search:v,hash:y,state:k,key:E},navigationType:a}},[s,p,v,y,k,E,a]);return N==null?null:D.createElement(Oo.Provider,{value:u},D.createElement(Rd.Provider,{children:t,value:N}))}var r2;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(r2||(r2={}));new Promise(()=>{});function nT(e){let n={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(n,{element:D.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(n,{errorElement:D.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),n}/**
 * React Router DOM v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Aa(){return Aa=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Aa.apply(this,arguments)}function g3(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,l;for(l=0;l<r.length;l++)a=r[l],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function tT(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function rT(e,n){return e.button===0&&(!n||n==="_self")&&!tT(e)}const oT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],aT=["aria-current","caseSensitive","className","end","style","to","children"];function lT(e,n){return _S({basename:n==null?void 0:n.basename,future:Aa({},n==null?void 0:n.future,{v7_prependBasename:!0}),history:ZC({window:n==null?void 0:n.window}),hydrationData:(n==null?void 0:n.hydrationData)||iT(),routes:e,mapRouteProperties:nT}).initialize()}function iT(){var e;let n=(e=window)==null?void 0:e.__staticRouterHydrationData;return n&&n.errors&&(n=Aa({},n,{errors:sT(n.errors)})),n}function sT(e){if(!e)return null;let n=Object.entries(e),t={};for(let[r,a]of n)if(a&&a.__type==="RouteErrorResponse")t[r]=new Rp(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){let l=new Error(a.message);l.stack="",t[r]=l}else t[r]=a;return t}const dT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uT=D.forwardRef(function(n,t){let{onClick:r,relative:a,reloadDocument:l,replace:i,state:s,target:u,to:p,preventScrollReset:v}=n,y=g3(n,oT),{basename:k}=D.useContext(Oo),E,N=!1;if(typeof p=="string"&&cT.test(p)&&(E=p,dT))try{let g=new URL(window.location.href),b=p.startsWith("//")?new URL(g.protocol+p):new URL(p),m=ja(b.pathname,k);b.origin===g.origin&&m!=null?p=m+b.search+b.hash:N=!0}catch{}let C=AS(p,{relative:a}),M=pT(p,{replace:i,state:s,target:u,preventScrollReset:v,relative:a});function w(g){r&&r(g),g.defaultPrevented||M(g)}return D.createElement("a",Aa({},y,{href:E||C,onClick:N||l?r:w,ref:t,target:u}))}),hT=D.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:a=!1,className:l="",end:i=!1,style:s,to:u,children:p}=n,v=g3(n,aT),y=Fp(u,{relative:v.relative}),k=Ua(),E=D.useContext(Ap),{navigator:N}=D.useContext(Oo),C=N.encodeLocation?N.encodeLocation(y).pathname:y.pathname,M=k.pathname,w=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;a||(M=M.toLowerCase(),w=w?w.toLowerCase():null,C=C.toLowerCase());let g=M===C||!i&&M.startsWith(C)&&M.charAt(C.length)==="/",b=w!=null&&(w===C||!i&&w.startsWith(C)&&w.charAt(C.length)==="/"),m=g?r:void 0,L;typeof l=="function"?L=l({isActive:g,isPending:b}):L=[l,g?"active":null,b?"pending":null].filter(Boolean).join(" ");let T=typeof s=="function"?s({isActive:g,isPending:b}):s;return D.createElement(uT,Aa({},v,{"aria-current":m,className:L,ref:t,style:T,to:u}),typeof p=="function"?p({isActive:g,isPending:b}):p)});var o2;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(o2||(o2={}));var a2;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(a2||(a2={}));function pT(e,n){let{target:t,replace:r,state:a,preventScrollReset:l,relative:i}=n===void 0?{}:n,s=FS(),u=Ua(),p=Fp(e,{relative:i});return D.useCallback(v=>{if(rT(v,t)){v.preventDefault();let y=r!==void 0?r:Io(u)===Io(p);s(e,{replace:y,state:a,preventScrollReset:l,relative:i})}},[u,s,p,r,a,t,e,l,i])}const le=({to:e,className:n="",exact:t,children:r,text:a,onClick:l,label:i,style:s})=>o(hT,{to:e,onClick:l,end:t&&"end",className:({isActive:u})=>`${n} ${u?"active":""}`,"aria-label":i,style:s,children:r||a}),fT=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Brand Colours"}),o("p",{children:"The palette is designed to be adjustable so that you can match it to your brand colors."}),o("h2",{children:"Brand Hue and Color"}),o(Zt,{code:VC,caption:"Brand Color",language:"scss",expand:!0,children:d("p",{children:["You should pick a color that is closest to your brand color and adjust the hue to match it if necessary.  Then define that as the"," ",o("code",{children:"$brand-hue"})," and set the ",o("code",{children:"$brand-color"})," by name."]})}),o("h2",{children:"Multiple Brand Colors"}),o(Zt,{code:GC,caption:"Brand Colors",language:"scss",expand:!0,children:d("p",{children:["If you have multiple brand colors you can set them using the"," ",o("code",{children:"$brand-colors"})," variable.  You can call them whatever you like (we're using ",o("code",{children:"primary"}),", ",o("code",{children:"secondary"})," ","and ",o("code",{children:"tertiary"})," in this example). You should define one to be the primary ",o("code",{children:"$brand-color"})," and set the ",o("code",{children:"$brand-hue"})]})}),o("h2",{children:"Greyscale Colors"}),d(Zt,{code:YC,caption:"Greyscale Colors",language:"scss",expand:!0,children:[d("p",{children:["An important side-effect of setting ",o("code",{children:"$brand-hue"})," is that it will set the hue of the greyscale color ranges to match it."]}),d("p",{children:["If you want to use different hues for the greyscale color ranges then you can do that using the ",o("code",{children:"$grey-hue"}),","," ",o("code",{children:"$grey20-hue"})," and ",o("code",{children:"$grey40-hue"})," variables."]})]}),o("h2",{children:"Culling the Palette"}),d(Zt,{code:qC,caption:"Selecting Colors",language:"scss",expand:!0,children:[o("p",{children:"The chances are that you aren't going to need all of the colors defined in the standard palette.  You can reduce the size of the generated CSS file by excluding any that you don't need."}),d("p",{children:["Set the ",o("code",{children:"$color-names"})," variable to list those that you want to keep.  Note that ",o("code",{children:"red"}),", ",o("code",{children:"orange"}),","," ",o("code",{children:"green"}),", ",o("code",{children:"blue"})," and ",o("code",{children:"grey"})," are used by various components, including ",o(le,{to:"/forms/",text:"forms"})," and"," ",o(le,{to:"/components/alerts",text:"alerts"})," so you'll probably want to keep those."]})]})]}),gT=Object.freeze(Object.defineProperty({__proto__:null,default:fT},Symbol.toStringTag,{value:"Module"})),vT="Badger CSS",mT="Badger CSS palette",bT="badger-css",yT="",wT={red:{name:"Red",hue:0,stops:{0:{h:0,s:65,l:5,hex:"#150404"},5:{h:0,s:66,l:8,hex:"#220707"},10:{h:0,s:68,l:11,hex:"#2f0909"},15:{h:0,s:69,l:15,hex:"#410c0c"},20:{h:0,s:70,l:18,hex:"#4e0e0e"},25:{h:0,s:71,l:22,hex:"#601010"},30:{h:0,s:72,l:27,hex:"#761313"},35:{h:0,s:73,l:31,hex:"#891515"},40:{h:0,s:73,l:36,hex:"#9f1919"},45:{h:0,s:74,l:42,hex:"#ba1c1c"},50:{h:0,s:74,l:48,hex:"#d52020"},55:{h:0,s:74,l:55,hex:"#e13737"},60:{h:0,s:75,l:62,hex:"#e75555"},65:{h:0,s:75,l:68,hex:"#eb7070"},70:{h:0,s:74,l:74,hex:"#ee8c8c"},75:{h:0,s:74,l:80,hex:"#f2a6a6"},80:{h:0,s:74,l:84,hex:"#f4b8b8"},85:{h:0,s:73,l:88,hex:"#f7caca"},90:{h:0,s:73,l:92,hex:"#f9dcdc"},95:{h:0,s:72,l:95,hex:"#fbe9e9"},100:{h:0,s:71,l:98,hex:"#fef6f6"}},curves:{h:{min:0,max:0,minControl:{x:30,y:0},maxControl:{x:70,y:0}},s:{min:65,max:71,minControl:{x:31,y:74},maxControl:{x:63,y:78}},l:{min:5,max:98,minControl:{x:62,y:42},maxControl:{x:53,y:72}}},uri:"red"},brown:{name:"Brown",hue:14,stops:{0:{h:10,s:52,l:5,hex:"#130806"},5:{h:11,s:53,l:8,hex:"#1f0e0a"},10:{h:11,s:54,l:11,hex:"#2b120d"},15:{h:12,s:54,l:14,hex:"#371810"},20:{h:13,s:55,l:17,hex:"#431e14"},25:{h:13,s:56,l:20,hex:"#502316"},30:{h:13,s:56,l:24,hex:"#5f2a1b"},35:{h:14,s:56,l:28,hex:"#6f321f"},40:{h:14,s:57,l:32,hex:"#803923"},45:{h:14,s:57,l:37,hex:"#944229"},50:{h:14,s:57,l:42,hex:"#a84b2e"},55:{h:14,s:58,l:47,hex:"#bd5332"},60:{h:14,s:58,l:53,hex:"#cd6242"},65:{h:15,s:58,l:60,hex:"#d47b5e"},70:{h:15,s:58,l:67,hex:"#dc927a"},75:{h:15,s:58,l:75,hex:"#e4ad9a"},80:{h:14,s:58,l:81,hex:"#ebc0b2"},85:{h:14,s:58,l:87,hex:"#f1d4cb"},90:{h:14,s:58,l:92,hex:"#f6e4df"},95:{h:14,s:57,l:95,hex:"#faeeeb"},100:{h:14,s:57,l:98,hex:"#fdf8f7"}},curves:{h:{min:10,max:14,minControl:{x:30,y:15},maxControl:{x:70,y:15}},s:{min:52,max:57,minControl:{x:35,y:58},maxControl:{x:66,y:59}},l:{min:5,max:98,minControl:{x:72,y:43},maxControl:{x:67,y:82}}},uri:"brown"},orange:{name:"Orange",hue:26,stops:{0:{h:27,s:93,l:5,hex:"#190c01"},5:{h:27,s:94,l:8,hex:"#281201"},10:{h:26,s:94,l:11,hex:"#361902"},15:{h:26,s:95,l:14,hex:"#461f02"},20:{h:26,s:96,l:18,hex:"#5a2802"},25:{h:26,s:96,l:21,hex:"#692f02"},30:{h:26,s:96,l:25,hex:"#7d3803"},35:{h:26,s:97,l:30,hex:"#974302"},40:{h:26,s:97,l:35,hex:"#b04e03"},45:{h:26,s:97,l:40,hex:"#c95903"},50:{h:26,s:97,l:46,hex:"#e76604"},55:{h:26,s:96,l:52,hex:"#fa750f"},60:{h:26,s:96,l:59,hex:"#fb8932"},65:{h:26,s:95,l:65,hex:"#fb9a51"},70:{h:27,s:94,l:72,hex:"#fbb174"},75:{h:27,s:93,l:78,hex:"#fbc293"},80:{h:28,s:92,l:83,hex:"#fcd1ac"},85:{h:28,s:91,l:88,hex:"#fcdfc5"},90:{h:29,s:90,l:91,hex:"#fde7d3"},95:{h:30,s:88,l:95,hex:"#fdf2e7"},100:{h:32,s:87,l:97,hex:"#fef8f1"}},curves:{h:{min:27,max:32,minControl:{x:30,y:25},maxControl:{x:77,y:24}},s:{min:93,max:87,minControl:{x:46,y:100},maxControl:{x:64,y:97}},l:{min:5,max:97,minControl:{x:62,y:39},maxControl:{x:62,y:80}}},uri:"orange"},yellow:{name:"Yellow",hue:41,stops:{0:{h:30,s:90,l:5,hex:"#180d01"},5:{h:31,s:91,l:8,hex:"#271502"},10:{h:33,s:92,l:10,hex:"#311c02"},15:{h:34,s:93,l:13,hex:"#402502"},20:{h:35,s:94,l:17,hex:"#543203"},25:{h:36,s:95,l:20,hex:"#633d03"},30:{h:37,s:96,l:24,hex:"#784b02"},35:{h:38,s:96,l:28,hex:"#8c5a03"},40:{h:39,s:97,l:33,hex:"#a66d03"},45:{h:40,s:97,l:38,hex:"#bf8003"},50:{h:41,s:97,l:43,hex:"#d89503"},55:{h:41,s:96,l:48,hex:"#f0a505"},60:{h:42,s:95,l:54,hex:"#f9b61a"},65:{h:43,s:94,l:60,hex:"#f9c339"},70:{h:43,s:93,l:66,hex:"#f9cb58"},75:{h:44,s:92,l:72,hex:"#f9d676"},80:{h:44,s:90,l:77,hex:"#f9dd90"},85:{h:44,s:88,l:82,hex:"#f9e4a9"},90:{h:45,s:86,l:87,hex:"#faecc1"},95:{h:45,s:84,l:92,hex:"#fcf3d9"},100:{h:45,s:82,l:96,hex:"#fdf9ec"}},curves:{h:{min:30,max:45,minControl:{x:28,y:38},maxControl:{x:70,y:45}},s:{min:90,max:82,minControl:{x:44,y:100},maxControl:{x:58,y:100}},l:{min:5,max:96,minControl:{x:52,y:31},maxControl:{x:64,y:67}}},uri:"yellow"},olive:{name:"Olive",hue:68,stops:{0:{h:72,s:66,l:4,hex:"#0e1103"},5:{h:72,s:68,l:6,hex:"#161a05"},10:{h:71,s:70,l:9,hex:"#212707"},15:{h:71,s:72,l:12,hex:"#2d3509"},20:{h:70,s:73,l:15,hex:"#39420a"},25:{h:70,s:74,l:18,hex:"#45500c"},30:{h:69,s:74,l:21,hex:"#515d0e"},35:{h:69,s:74,l:25,hex:"#616f11"},40:{h:69,s:73,l:29,hex:"#708014"},45:{h:68,s:70,l:33,hex:"#7f8f19"},50:{h:68,s:66,l:37,hex:"#8c9d20"},55:{h:67,s:60,l:43,hex:"#a0af2c"},60:{h:67,s:55,l:48,hex:"#aebe37"},65:{h:66,s:52,l:54,hex:"#bac74d"},70:{h:66,s:50,l:61,hex:"#c3cd6a"},75:{h:65,s:49,l:68,hex:"#cfd585"},80:{h:65,s:48,l:75,hex:"#d9dea1"},85:{h:65,s:49,l:82,hex:"#e4e8bb"},90:{h:64,s:49,l:87,hex:"#eceece"},95:{h:64,s:51,l:93,hex:"#f5f6e4"},100:{h:64,s:52,l:97,hex:"#fbfbf3"}},curves:{h:{min:72,max:64,minControl:{x:30,y:70},maxControl:{x:69,y:65}},s:{min:66,max:52,minControl:{x:69,y:96},maxControl:{x:37,y:33}},l:{min:4,max:97,minControl:{x:67,y:35},maxControl:{x:72,y:75}}},uri:"olive"},green:{name:"Green",hue:117,stops:{0:{h:117,s:45,l:5,hex:"#081207"},5:{h:117,s:48,l:8,hex:"#0c1e0b"},10:{h:117,s:50,l:11,hex:"#0f2a0e"},15:{h:117,s:52,l:14,hex:"#133611"},20:{h:117,s:53,l:17,hex:"#174214"},25:{h:117,s:54,l:21,hex:"#1c5219"},30:{h:117,s:55,l:25,hex:"#20631d"},35:{h:117,s:55,l:29,hex:"#257321"},40:{h:117,s:55,l:33,hex:"#2a8226"},45:{h:117,s:54,l:38,hex:"#32952d"},50:{h:117,s:54,l:43,hex:"#38a932"},55:{h:117,s:53,l:48,hex:"#40bb3a"},60:{h:117,s:52,l:54,hex:"#53c74d"},65:{h:117,s:51,l:60,hex:"#6acd65"},70:{h:117,s:50,l:66,hex:"#81d47d"},75:{h:117,s:48,l:73,hex:"#9cdb99"},80:{h:117,s:47,l:79,hex:"#b3e3b0"},85:{h:117,s:46,l:85,hex:"#c9eac7"},90:{h:118,s:45,l:90,hex:"#dbf1da"},95:{h:118,s:44,l:94,hex:"#e9f6e9"},100:{h:118,s:43,l:98,hex:"#f8fcf8"}},curves:{h:{min:117,max:118,minControl:{x:30,y:118},maxControl:{x:57,y:116}},s:{min:45,max:43,minControl:{x:34,y:65},maxControl:{x:64,y:49}},l:{min:5,max:98,minControl:{x:61,y:38},maxControl:{x:72,y:79}}},uri:"green"},teal:{name:"Teal",hue:165,stops:{0:{h:165,s:52,l:5,hex:"#061310"},5:{h:165,s:56,l:7,hex:"#081c17"},10:{h:165,s:59,l:10,hex:"#0a2921"},15:{h:165,s:61,l:13,hex:"#0d352b"},20:{h:165,s:62,l:15,hex:"#0f3e32"},25:{h:165,s:63,l:18,hex:"#114b3c"},30:{h:165,s:63,l:21,hex:"#145746"},35:{h:165,s:63,l:25,hex:"#186854"},40:{h:165,s:62,l:29,hex:"#1c7861"},45:{h:165,s:60,l:33,hex:"#22876d"},50:{h:165,s:59,l:37,hex:"#27967a"},55:{h:165,s:58,l:42,hex:"#2da98a"},60:{h:165,s:57,l:47,hex:"#34bc9a"},65:{h:165,s:56,l:53,hex:"#44caa9"},70:{h:165,s:55,l:60,hex:"#61d1b5"},75:{h:165,s:54,l:67,hex:"#7dd8c2"},80:{h:165,s:54,l:75,hex:"#9de2d0"},85:{h:165,s:55,l:81,hex:"#b4e9dc"},90:{h:165,s:55,l:88,hex:"#d0f1e9"},95:{h:165,s:57,l:93,hex:"#e3f7f2"},100:{h:165,s:58,l:98,hex:"#f7fdfb"}},curves:{h:{min:165,max:165,minControl:{x:30,y:165},maxControl:{x:70,y:165}},s:{min:52,max:58,minControl:{x:34,y:81},maxControl:{x:55,y:43}},l:{min:5,max:98,minControl:{x:71,y:38},maxControl:{x:68,y:69}}},uri:"teal"},blue:{name:"Blue",hue:206,stops:{0:{h:210,s:72,l:5,hex:"#040d16"},5:{h:210,s:74,l:8,hex:"#051423"},10:{h:209,s:75,l:11,hex:"#071d31"},15:{h:209,s:77,l:15,hex:"#092744"},20:{h:209,s:78,l:18,hex:"#0a2f52"},25:{h:208,s:79,l:22,hex:"#0c3b64"},30:{h:208,s:80,l:26,hex:"#0d4677"},35:{h:207,s:81,l:31,hex:"#0f558f"},40:{h:207,s:82,l:35,hex:"#1061a2"},45:{h:207,s:83,l:41,hex:"#1271bf"},50:{h:206,s:84,l:46,hex:"#1382d8"},55:{h:206,s:84,l:52,hex:"#1e92eb"},60:{h:205,s:85,l:58,hex:"#39a3ef"},65:{h:205,s:85,l:65,hex:"#5ab2f2"},70:{h:205,s:85,l:71,hex:"#76c0f4"},75:{h:205,s:85,l:77,hex:"#92cdf6"},80:{h:204,s:84,l:82,hex:"#abd9f8"},85:{h:204,s:84,l:87,hex:"#c2e3fa"},90:{h:204,s:83,l:91,hex:"#d5ecfb"},95:{h:204,s:82,l:95,hex:"#e8f4fd"},100:{h:204,s:81,l:98,hex:"#f6fbfe"}},curves:{h:{min:210,max:204,minControl:{x:42,y:207},maxControl:{x:70,y:204}},s:{min:72,max:81,minControl:{x:43,y:86},maxControl:{x:69,y:88}},l:{min:5,max:98,minControl:{x:61,y:41},maxControl:{x:64,y:78}}},uri:"blue"},indigo:{name:"Indigo",hue:236,stops:{0:{h:234,s:50,l:7,hex:"#090b1b"},5:{h:234,s:52,l:11,hex:"#0d102b"},10:{h:235,s:54,l:16,hex:"#13163f"},15:{h:235,s:56,l:21,hex:"#181d54"},20:{h:235,s:58,l:27,hex:"#1d246d"},25:{h:235,s:61,l:32,hex:"#202883"},30:{h:236,s:64,l:38,hex:"#232b9f"},35:{h:236,s:67,l:44,hex:"#252fbb"},40:{h:236,s:71,l:50,hex:"#2531da"},45:{h:236,s:75,l:56,hex:"#3b46e3"},50:{h:236,s:78,l:62,hex:"#535dea"},55:{h:236,s:81,l:67,hex:"#6770ef"},60:{h:236,s:82,l:72,hex:"#7d85f2"},65:{h:235,s:82,l:77,hex:"#949cf4"},70:{h:235,s:82,l:81,hex:"#a7adf6"},75:{h:235,s:81,l:85,hex:"#babff8"},80:{h:235,s:79,l:89,hex:"#cdd0f9"},85:{h:235,s:77,l:92,hex:"#dbdefa"},90:{h:235,s:75,l:94,hex:"#e4e6fb"},95:{h:235,s:72,l:97,hex:"#f2f3fd"},100:{h:235,s:70,l:99,hex:"#fbfbfe"}},curves:{h:{min:234,max:235,minControl:{x:30,y:237},maxControl:{x:70,y:235}},s:{min:50,max:70,minControl:{x:60,y:69},maxControl:{x:40,y:100}},l:{min:7,max:99,minControl:{x:39,y:40},maxControl:{x:53,y:80}}},uri:"indigo"},violet:{name:"Violet",uri:"violet",hue:259,stops:{0:{h:271,s:53,l:8,hex:"#150a1f"},5:{h:269,s:53,l:12,hex:"#1e0e2f"},10:{h:268,s:54,l:16,hex:"#27133f"},15:{h:266,s:55,l:21,hex:"#321853"},20:{h:265,s:56,l:26,hex:"#3c1d67"},25:{h:264,s:57,l:31,hex:"#46227c"},30:{h:263,s:59,l:36,hex:"#4f2692"},35:{h:262,s:62,l:42,hex:"#5929ae"},40:{h:261,s:66,l:48,hex:"#622acb"},45:{h:260,s:71,l:53,hex:"#6b32dc"},50:{h:259,s:76,l:59,hex:"#7947e6"},55:{h:258,s:79,l:65,hex:"#8a5fec"},60:{h:258,s:81,l:71,hex:"#9d79f1"},65:{h:257,s:82,l:76,hex:"#ac90f4"},70:{h:257,s:82,l:80,hex:"#baa2f6"},75:{h:256,s:82,l:85,hex:"#cab9f8"},80:{h:256,s:81,l:88,hex:"#d5c8f9"},85:{h:255,s:80,l:92,hex:"#e2dafb"},90:{h:255,s:79,l:94,hex:"#eae4fc"},95:{h:255,s:78,l:97,hex:"#f4f1fd"},100:{h:255,s:77,l:99,hex:"#fbfafe"}},curves:{h:{min:271,max:255,minControl:{x:33,y:260},maxControl:{x:70,y:255}},s:{min:53,max:77,minControl:{x:68,y:57},maxControl:{x:26,y:96}},l:{min:8,max:99,minControl:{x:45,y:43},maxControl:{x:58,y:83}}}},purple:{name:"Purple",hue:284,stops:{0:{h:294,s:47,l:6,hex:"#150816"},5:{h:293,s:50,l:8,hex:"#1c0a1f"},10:{h:292,s:53,l:11,hex:"#270d2b"},15:{h:290,s:56,l:14,hex:"#311038"},20:{h:289,s:59,l:18,hex:"#3f1349"},25:{h:288,s:62,l:22,hex:"#4d155b"},30:{h:287,s:64,l:26,hex:"#5a186d"},35:{h:286,s:67,l:31,hex:"#6b1a84"},40:{h:286,s:69,l:37,hex:"#811d9f"},45:{h:285,s:71,l:43,hex:"#9520bc"},50:{h:284,s:73,l:49,hex:"#a822d8"},55:{h:283,s:74,l:55,hex:"#b137e1"},60:{h:283,s:75,l:62,hex:"#be55e7"},65:{h:282,s:77,l:68,hex:"#c76fec"},70:{h:282,s:77,l:75,hex:"#d38ef0"},75:{h:281,s:78,l:80,hex:"#dba4f4"},80:{h:281,s:79,l:85,hex:"#e4bbf7"},85:{h:280,s:79,l:90,hex:"#ecd1fa"},90:{h:280,s:80,l:94,hex:"#f4e3fc"},95:{h:280,s:80,l:97,hex:"#f9f1fd"},100:{h:280,s:80,l:99,hex:"#fdfafe"}},curves:{h:{min:294,max:280,minControl:{x:32,y:286},maxControl:{x:67,y:280}},s:{min:47,max:80,minControl:{x:34,y:67},maxControl:{x:51,y:79}},l:{min:6,max:99,minControl:{x:48,y:26},maxControl:{x:64,y:85}}},uri:"purple"},pink:{name:"Pink",hue:313,stops:{0:{h:314,s:64,l:5,hex:"#150511"},5:{h:314,s:66,l:7,hex:"#1e0618"},10:{h:313,s:69,l:10,hex:"#2b0823"},15:{h:313,s:71,l:13,hex:"#390a2e"},20:{h:313,s:73,l:16,hex:"#470b3a"},25:{h:313,s:74,l:19,hex:"#540d45"},30:{h:313,s:76,l:23,hex:"#670e54"},35:{h:313,s:77,l:27,hex:"#7a1063"},40:{h:313,s:77,l:32,hex:"#901375"},45:{h:313,s:78,l:37,hex:"#a81588"},50:{h:313,s:77,l:42,hex:"#be199a"},55:{h:313,s:77,l:48,hex:"#d91cb0"},60:{h:313,s:76,l:55,hex:"#e335be"},65:{h:313,s:76,l:63,hex:"#e859c9"},70:{h:312,s:75,l:70,hex:"#ec79d5"},75:{h:312,s:74,l:77,hex:"#f099de"},80:{h:312,s:73,l:83,hex:"#f3b4e7"},85:{h:312,s:72,l:88,hex:"#f6caee"},90:{h:311,s:71,l:92,hex:"#f9dcf4"},95:{h:311,s:70,l:96,hex:"#fceef9"},100:{h:310,s:69,l:99,hex:"#fefbfe"}},curves:{h:{min:314,max:310,minControl:{x:26,y:311},maxControl:{x:67,y:315}},s:{min:64,max:69,minControl:{x:45,y:87},maxControl:{x:58,y:75}},l:{min:5,max:99,minControl:{x:64,y:34},maxControl:{x:62,y:78}}},uri:"pink"},maroon:{name:"Maroon",hue:339,stops:{0:{h:339,s:57,l:6,hex:"#18070d"},5:{h:339,s:62,l:8,hex:"#210811"},10:{h:339,s:66,l:11,hex:"#2f0a16"},15:{h:339,s:70,l:13,hex:"#380a1a"},20:{h:339,s:74,l:17,hex:"#4b0b22"},25:{h:339,s:76,l:20,hex:"#5a0c27"},30:{h:339,s:79,l:24,hex:"#6e0d2f"},35:{h:339,s:81,l:29,hex:"#860e38"},40:{h:339,s:82,l:33,hex:"#990f3f"},45:{h:339,s:83,l:39,hex:"#b6114b"},50:{h:339,s:84,l:45,hex:"#d31256"},55:{h:339,s:84,l:51,hex:"#eb1963"},60:{h:339,s:84,l:57,hex:"#ed3576"},65:{h:339,s:83,l:64,hex:"#ef578c"},70:{h:339,s:82,l:71,hex:"#f278a3"},75:{h:339,s:81,l:77,hex:"#f495b6"},80:{h:339,s:79,l:83,hex:"#f6b1c9"},85:{h:339,s:78,l:88,hex:"#f8c9d9"},90:{h:339,s:76,l:92,hex:"#fadbe6"},95:{h:339,s:73,l:96,hex:"#fcedf3"},100:{h:339,s:71,l:99,hex:"#fefbfc"}},curves:{h:{min:339,max:339,minControl:{x:26,y:339},maxControl:{x:67,y:339}},s:{min:57,max:71,minControl:{x:32,y:90},maxControl:{x:62,y:90}},l:{min:6,max:99,minControl:{x:54,y:28},maxControl:{x:64,y:79}}},uri:"maroon"},grey:{name:"Grey",hue:200,stops:{0:{h:200,s:5,l:5,hex:"#0c0d0d"},5:{h:200,s:5,l:10,hex:"#181a1b"},10:{h:200,s:5,l:14,hex:"#222425"},15:{h:200,s:5,l:19,hex:"#2e3133"},20:{h:200,s:5,l:23,hex:"#383c3e"},25:{h:200,s:5,l:28,hex:"#44494b"},30:{h:200,s:5,l:33,hex:"#505658"},35:{h:200,s:5,l:37,hex:"#5a6063"},40:{h:200,s:5,l:42,hex:"#666d70"},45:{h:200,s:5,l:47,hex:"#727a7e"},50:{h:200,s:5,l:52,hex:"#7e878b"},55:{h:200,s:5,l:56,hex:"#899194"},60:{h:200,s:5,l:61,hex:"#979da1"},65:{h:200,s:5,l:66,hex:"#a4aaad"},70:{h:200,s:5,l:71,hex:"#b1b6b9"},75:{h:200,s:5,l:75,hex:"#bcc0c2"},80:{h:200,s:5,l:80,hex:"#c9cdcf"},85:{h:200,s:5,l:85,hex:"#d7d9db"},90:{h:200,s:5,l:89,hex:"#e2e3e4"},95:{h:200,s:5,l:94,hex:"#eff0f0"},100:{h:200,s:5,l:98,hex:"#fafafa"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:5,max:5,minControl:{x:30,y:5},maxControl:{x:70,y:5}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey",greyscale:!0},grey20:{name:"Grey20",hue:200,stops:{0:{h:200,s:20,l:5,hex:"#0a0e0f"},5:{h:200,s:20,l:10,hex:"#141b1f"},10:{h:200,s:20,l:14,hex:"#1d262b"},15:{h:200,s:20,l:19,hex:"#27343a"},20:{h:200,s:20,l:23,hex:"#2f3f46"},25:{h:200,s:20,l:28,hex:"#394c56"},30:{h:200,s:20,l:33,hex:"#435a65"},35:{h:200,s:20,l:37,hex:"#4b6571"},40:{h:200,s:20,l:42,hex:"#567281"},45:{h:200,s:20,l:47,hex:"#608090"},50:{h:200,s:20,l:52,hex:"#6c8d9d"},55:{h:200,s:20,l:56,hex:"#7896a5"},60:{h:200,s:20,l:61,hex:"#88a2af"},65:{h:200,s:20,l:66,hex:"#97aeba"},70:{h:200,s:20,l:71,hex:"#a6bac4"},75:{h:200,s:20,l:75,hex:"#b3c3cc"},80:{h:200,s:20,l:80,hex:"#c2cfd6"},85:{h:200,s:20,l:85,hex:"#d1dbe0"},90:{h:200,s:20,l:89,hex:"#dde5e9"},95:{h:200,s:20,l:94,hex:"#edf1f3"},100:{h:200,s:20,l:98,hex:"#f9fafb"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:20,max:20,minControl:{x:30,y:20},maxControl:{x:70,y:20}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey20",greyscale:!0},grey40:{name:"Grey40",hue:200,stops:{0:{h:200,s:40,l:5,hex:"#080e12"},5:{h:200,s:40,l:10,hex:"#0f1d24"},10:{h:200,s:40,l:14,hex:"#152832"},15:{h:200,s:40,l:19,hex:"#1d3744"},20:{h:200,s:40,l:23,hex:"#234252"},25:{h:200,s:40,l:28,hex:"#2b5164"},30:{h:200,s:40,l:33,hex:"#325f76"},35:{h:200,s:40,l:37,hex:"#396b84"},40:{h:200,s:40,l:42,hex:"#407996"},45:{h:200,s:40,l:47,hex:"#4888a8"},50:{h:200,s:40,l:52,hex:"#5495b6"},55:{h:200,s:40,l:56,hex:"#629ebc"},60:{h:200,s:40,l:61,hex:"#74a9c3"},65:{h:200,s:40,l:66,hex:"#86b4cb"},70:{h:200,s:40,l:71,hex:"#97bfd3"},75:{h:200,s:40,l:75,hex:"#a6c8d9"},80:{h:200,s:40,l:80,hex:"#b8d3e0"},85:{h:200,s:40,l:85,hex:"#c9dee8"},90:{h:200,s:40,l:89,hex:"#d8e7ee"},95:{h:200,s:40,l:94,hex:"#eaf2f6"},100:{h:200,s:40,l:98,hex:"#f8fbfc"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:40,max:40,minControl:{x:30,y:40},maxControl:{x:70,y:40}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey40",greyscale:!0}},Yr={name:vT,comment:mT,uri:bT,source:yT,ranges:wT},rd=Object.keys(Yr.ranges),xT=Object.entries(Yr.ranges).filter(([,e])=>!e.greyscale).map(([e])=>e),kT=Object.entries(Yr.ranges).filter(([,e])=>e.greyscale).map(([e])=>e);var v3={exports:{}};/**
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
 */(function(e,n){(function(t,r){e.exports=r()})(Bl,function(){for(var t=function(c,h,f){return h===void 0&&(h=0),f===void 0&&(f=1),c<h?h:c>f?f:c},r=t,a=function(c){c._clipped=!1,c._unclipped=c.slice(0);for(var h=0;h<=3;h++)h<3?((c[h]<0||c[h]>255)&&(c._clipped=!0),c[h]=r(c[h],0,255)):h===3&&(c[h]=r(c[h],0,1));return c},l={},i=0,s=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];i<s.length;i+=1){var u=s[i];l["[object "+u+"]"]=u.toLowerCase()}var p=function(c){return l[Object.prototype.toString.call(c)]||"object"},v=p,y=function(c,h){return h===void 0&&(h=null),c.length>=3?Array.prototype.slice.call(c):v(c[0])=="object"&&h?h.split("").filter(function(f){return c[0][f]!==void 0}).map(function(f){return c[0][f]}):c[0]},k=p,E=function(c){if(c.length<2)return null;var h=c.length-1;return k(c[h])=="string"?c[h].toLowerCase():null},N=Math.PI,C={clip_rgb:a,limit:t,type:p,unpack:y,last:E,PI:N,TWOPI:N*2,PITHIRD:N/3,DEG2RAD:N/180,RAD2DEG:180/N},M={format:{},autodetect:[]},w=C.last,g=C.clip_rgb,b=C.type,m=M,L=function(){for(var h=[],f=arguments.length;f--;)h[f]=arguments[f];var x=this;if(b(h[0])==="object"&&h[0].constructor&&h[0].constructor===this.constructor)return h[0];var _=w(h),$=!1;if(!_){$=!0,m.sorted||(m.autodetect=m.autodetect.sort(function(H,K){return K.p-H.p}),m.sorted=!0);for(var S=0,R=m.autodetect;S<R.length;S+=1){var P=R[S];if(_=P.test.apply(P,h),_)break}}if(m.format[_]){var B=m.format[_].apply(null,$?h:h.slice(0,-1));x._rgb=g(B)}else throw new Error("unknown format: "+h);x._rgb.length===3&&x._rgb.push(1)};L.prototype.toString=function(){return b(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var T=L,A=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(A.Color,[null].concat(c)))};A.Color=T,A.version="2.4.2";var O=A,j=C.unpack,q=Math.max,fe=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=j(c,"rgb"),x=f[0],_=f[1],$=f[2];x=x/255,_=_/255,$=$/255;var S=1-q(x,q(_,$)),R=S<1?1/(1-S):0,P=(1-x-S)*R,B=(1-_-S)*R,H=(1-$-S)*R;return[P,B,H,S]},ce=fe,Ue=C.unpack,an=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=Ue(c,"cmyk");var f=c[0],x=c[1],_=c[2],$=c[3],S=c.length>4?c[4]:1;return $===1?[0,0,0,S]:[f>=1?0:255*(1-f)*(1-$),x>=1?0:255*(1-x)*(1-$),_>=1?0:255*(1-_)*(1-$),S]},Ye=an,Be=O,qe=T,U=M,Z=C.unpack,J=C.type,ae=ce;qe.prototype.cmyk=function(){return ae(this._rgb)},Be.cmyk=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(qe,[null].concat(c,["cmyk"])))},U.format.cmyk=Ye,U.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=Z(c,"cmyk"),J(c)==="array"&&c.length===4)return"cmyk"}});var ge=C.unpack,jn=C.last,ve=function(c){return Math.round(c*100)/100},nn=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=ge(c,"hsla"),x=jn(c)||"lsa";return f[0]=ve(f[0]||0),f[1]=ve(f[1]*100)+"%",f[2]=ve(f[2]*100)+"%",x==="hsla"||f.length>3&&f[3]<1?(f[3]=f.length>3?f[3]:1,x="hsla"):f.length=3,x+"("+f.join(",")+")"},Ze=nn,fn=C.unpack,Fn=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=fn(c,"rgba");var f=c[0],x=c[1],_=c[2];f/=255,x/=255,_/=255;var $=Math.min(f,x,_),S=Math.max(f,x,_),R=(S+$)/2,P,B;return S===$?(P=0,B=Number.NaN):P=R<.5?(S-$)/(S+$):(S-$)/(2-S-$),f==S?B=(x-_)/(S-$):x==S?B=2+(_-f)/(S-$):_==S&&(B=4+(f-x)/(S-$)),B*=60,B<0&&(B+=360),c.length>3&&c[3]!==void 0?[B,P,R,c[3]]:[B,P,R]},Jr=Fn,eo=C.unpack,er=C.last,Va=Ze,no=Jr,Ga=Math.round,to=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=eo(c,"rgba"),x=er(c)||"rgb";return x.substr(0,3)=="hsl"?Va(no(f),x):(f[0]=Ga(f[0]),f[1]=Ga(f[1]),f[2]=Ga(f[2]),(x==="rgba"||f.length>3&&f[3]<1)&&(f[3]=f.length>3?f[3]:1,x="rgba"),x+"("+f.slice(0,x==="rgb"?3:4).join(",")+")")},ki=to,Ya=C.unpack,ro=Math.round,qa=function(){for(var c,h=[],f=arguments.length;f--;)h[f]=arguments[f];h=Ya(h,"hsl");var x=h[0],_=h[1],$=h[2],S,R,P;if(_===0)S=R=P=$*255;else{var B=[0,0,0],H=[0,0,0],K=$<.5?$*(1+_):$+_-$*_,V=2*$-K,te=x/360;B[0]=te+1/3,B[1]=te,B[2]=te-1/3;for(var ee=0;ee<3;ee++)B[ee]<0&&(B[ee]+=1),B[ee]>1&&(B[ee]-=1),6*B[ee]<1?H[ee]=V+(K-V)*6*B[ee]:2*B[ee]<1?H[ee]=K:3*B[ee]<2?H[ee]=V+(K-V)*(2/3-B[ee])*6:H[ee]=V;c=[ro(H[0]*255),ro(H[1]*255),ro(H[2]*255)],S=c[0],R=c[1],P=c[2]}return h.length>3?[S,R,P,h[3]]:[S,R,P,1]},nr=qa,Za=nr,Qa=M,Ka=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,Ci=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,xr=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,oo=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Xa=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,Do=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Si=Math.round,Ti=function(c){c=c.toLowerCase().trim();var h;if(Qa.format.named)try{return Qa.format.named(c)}catch{}if(h=c.match(Ka)){for(var f=h.slice(1,4),x=0;x<3;x++)f[x]=+f[x];return f[3]=1,f}if(h=c.match(Ci)){for(var _=h.slice(1,5),$=0;$<4;$++)_[$]=+_[$];return _}if(h=c.match(xr)){for(var S=h.slice(1,4),R=0;R<3;R++)S[R]=Si(S[R]*2.55);return S[3]=1,S}if(h=c.match(oo)){for(var P=h.slice(1,5),B=0;B<3;B++)P[B]=Si(P[B]*2.55);return P[3]=+P[3],P}if(h=c.match(Xa)){var H=h.slice(1,4);H[1]*=.01,H[2]*=.01;var K=Za(H);return K[3]=1,K}if(h=c.match(Do)){var V=h.slice(1,4);V[1]*=.01,V[2]*=.01;var te=Za(V);return te[3]=+h[4],te}};Ti.test=function(c){return Ka.test(c)||Ci.test(c)||xr.test(c)||oo.test(c)||Xa.test(c)||Do.test(c)};var _i=Ti,jd=O,F=T,z=M,W=C.type,Q=ki,se=_i;F.prototype.css=function(c){return Q(this._rgb,c)},jd.css=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(F,[null].concat(c,["css"])))},z.format.css=se,z.autodetect.push({p:5,test:function(c){for(var h=[],f=arguments.length-1;f-- >0;)h[f]=arguments[f+1];if(!h.length&&W(c)==="string"&&se.test(c))return"css"}});var ue=T,he=O,pe=M,oe=C.unpack;pe.format.gl=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=oe(c,"rgba");return f[0]*=255,f[1]*=255,f[2]*=255,f},he.gl=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(ue,[null].concat(c,["gl"])))},ue.prototype.gl=function(){var c=this._rgb;return[c[0]/255,c[1]/255,c[2]/255,c[3]]};var $e=C.unpack,Pe=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=$e(c,"rgb"),x=f[0],_=f[1],$=f[2],S=Math.min(x,_,$),R=Math.max(x,_,$),P=R-S,B=P*100/255,H=S/(255-P)*100,K;return P===0?K=Number.NaN:(x===R&&(K=(_-$)/P),_===R&&(K=2+($-x)/P),$===R&&(K=4+(x-_)/P),K*=60,K<0&&(K+=360)),[K,B,H]},wn=Pe,dn=C.unpack,gn=Math.floor,yt=function(){for(var c,h,f,x,_,$,S=[],R=arguments.length;R--;)S[R]=arguments[R];S=dn(S,"hcg");var P=S[0],B=S[1],H=S[2],K,V,te;H=H*255;var ee=B*255;if(B===0)K=V=te=H;else{P===360&&(P=0),P>360&&(P-=360),P<0&&(P+=360),P/=60;var be=gn(P),Se=P-be,Ne=H*(1-B),Me=Ne+ee*(1-Se),Tn=Ne+ee*Se,kn=Ne+ee;switch(be){case 0:c=[kn,Tn,Ne],K=c[0],V=c[1],te=c[2];break;case 1:h=[Me,kn,Ne],K=h[0],V=h[1],te=h[2];break;case 2:f=[Ne,kn,Tn],K=f[0],V=f[1],te=f[2];break;case 3:x=[Ne,Me,kn],K=x[0],V=x[1],te=x[2];break;case 4:_=[Tn,Ne,kn],K=_[0],V=_[1],te=_[2];break;case 5:$=[kn,Ne,Me],K=$[0],V=$[1],te=$[2];break}}return[K,V,te,S.length>3?S[3]:1]},ao=yt,Ja=C.unpack,Bo=C.type,$t=O,lo=T,jo=M,el=wn;lo.prototype.hcg=function(){return el(this._rgb)},$t.hcg=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(lo,[null].concat(c,["hcg"])))},jo.format.hcg=ao,jo.autodetect.push({p:1,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=Ja(c,"hcg"),Bo(c)==="array"&&c.length===3)return"hcg"}});var nl=C.unpack,Uo=C.last,je=Math.round,Qn=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=nl(c,"rgba"),x=f[0],_=f[1],$=f[2],S=f[3],R=Uo(c)||"auto";S===void 0&&(S=1),R==="auto"&&(R=S<1?"rgba":"rgb"),x=je(x),_=je(_),$=je($);var P=x<<16|_<<8|$,B="000000"+P.toString(16);B=B.substr(B.length-6);var H="0"+je(S*255).toString(16);switch(H=H.substr(H.length-2),R.toLowerCase()){case"rgba":return"#"+B+H;case"argb":return"#"+H+B;default:return"#"+B}},tr=Qn,vn=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,tl=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,Li=function(c){if(c.match(vn)){(c.length===4||c.length===7)&&(c=c.substr(1)),c.length===3&&(c=c.split(""),c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]);var h=parseInt(c,16),f=h>>16,x=h>>8&255,_=h&255;return[f,x,_,1]}if(c.match(tl)){(c.length===5||c.length===9)&&(c=c.substr(1)),c.length===4&&(c=c.split(""),c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]+c[3]+c[3]);var $=parseInt(c,16),S=$>>24&255,R=$>>16&255,P=$>>8&255,B=Math.round(($&255)/255*100)/100;return[S,R,P,B]}throw new Error("unknown hex color: "+c)},$i=Li,O5=O,of=T,z5=C.type,af=M,D5=tr;of.prototype.hex=function(c){return D5(this._rgb,c)},O5.hex=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(of,[null].concat(c,["hex"])))},af.format.hex=$i,af.autodetect.push({p:4,test:function(c){for(var h=[],f=arguments.length-1;f-- >0;)h[f]=arguments[f+1];if(!h.length&&z5(c)==="string"&&[3,4,5,6,7,8,9].indexOf(c.length)>=0)return"hex"}});var B5=C.unpack,lf=C.TWOPI,j5=Math.min,U5=Math.sqrt,H5=Math.acos,W5=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=B5(c,"rgb"),x=f[0],_=f[1],$=f[2];x/=255,_/=255,$/=255;var S,R=j5(x,_,$),P=(x+_+$)/3,B=P>0?1-R/P:0;return B===0?S=NaN:(S=(x-_+(x-$))/2,S/=U5((x-_)*(x-_)+(x-$)*(_-$)),S=H5(S),$>_&&(S=lf-S),S/=lf),[S*360,B,P]},V5=W5,G5=C.unpack,Ud=C.limit,Ho=C.TWOPI,Hd=C.PITHIRD,Wo=Math.cos,Y5=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=G5(c,"hsi");var f=c[0],x=c[1],_=c[2],$,S,R;return isNaN(f)&&(f=0),isNaN(x)&&(x=0),f>360&&(f-=360),f<0&&(f+=360),f/=360,f<1/3?(R=(1-x)/3,$=(1+x*Wo(Ho*f)/Wo(Hd-Ho*f))/3,S=1-(R+$)):f<2/3?(f-=1/3,$=(1-x)/3,S=(1+x*Wo(Ho*f)/Wo(Hd-Ho*f))/3,R=1-($+S)):(f-=2/3,S=(1-x)/3,R=(1+x*Wo(Ho*f)/Wo(Hd-Ho*f))/3,$=1-(S+R)),$=Ud(_*$*3),S=Ud(_*S*3),R=Ud(_*R*3),[$*255,S*255,R*255,c.length>3?c[3]:1]},q5=Y5,Z5=C.unpack,Q5=C.type,K5=O,sf=T,df=M,X5=V5;sf.prototype.hsi=function(){return X5(this._rgb)},K5.hsi=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(sf,[null].concat(c,["hsi"])))},df.format.hsi=q5,df.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=Z5(c,"hsi"),Q5(c)==="array"&&c.length===3)return"hsi"}});var J5=C.unpack,eb=C.type,nb=O,cf=T,uf=M,tb=Jr;cf.prototype.hsl=function(){return tb(this._rgb)},nb.hsl=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(cf,[null].concat(c,["hsl"])))},uf.format.hsl=nr,uf.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=J5(c,"hsl"),eb(c)==="array"&&c.length===3)return"hsl"}});var rb=C.unpack,ob=Math.min,ab=Math.max,lb=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=rb(c,"rgb");var f=c[0],x=c[1],_=c[2],$=ob(f,x,_),S=ab(f,x,_),R=S-$,P,B,H;return H=S/255,S===0?(P=Number.NaN,B=0):(B=R/S,f===S&&(P=(x-_)/R),x===S&&(P=2+(_-f)/R),_===S&&(P=4+(f-x)/R),P*=60,P<0&&(P+=360)),[P,B,H]},ib=lb,sb=C.unpack,db=Math.floor,cb=function(){for(var c,h,f,x,_,$,S=[],R=arguments.length;R--;)S[R]=arguments[R];S=sb(S,"hsv");var P=S[0],B=S[1],H=S[2],K,V,te;if(H*=255,B===0)K=V=te=H;else{P===360&&(P=0),P>360&&(P-=360),P<0&&(P+=360),P/=60;var ee=db(P),be=P-ee,Se=H*(1-B),Ne=H*(1-B*be),Me=H*(1-B*(1-be));switch(ee){case 0:c=[H,Me,Se],K=c[0],V=c[1],te=c[2];break;case 1:h=[Ne,H,Se],K=h[0],V=h[1],te=h[2];break;case 2:f=[Se,H,Me],K=f[0],V=f[1],te=f[2];break;case 3:x=[Se,Ne,H],K=x[0],V=x[1],te=x[2];break;case 4:_=[Me,Se,H],K=_[0],V=_[1],te=_[2];break;case 5:$=[H,Se,Ne],K=$[0],V=$[1],te=$[2];break}}return[K,V,te,S.length>3?S[3]:1]},ub=cb,hb=C.unpack,pb=C.type,fb=O,hf=T,pf=M,gb=ib;hf.prototype.hsv=function(){return gb(this._rgb)},fb.hsv=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(hf,[null].concat(c,["hsv"])))},pf.format.hsv=ub,pf.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=hb(c,"hsv"),pb(c)==="array"&&c.length===3)return"hsv"}});var Ni={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},Vo=Ni,vb=C.unpack,ff=Math.pow,mb=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=vb(c,"rgb"),x=f[0],_=f[1],$=f[2],S=bb(x,_,$),R=S[0],P=S[1],B=S[2],H=116*P-16;return[H<0?0:H,500*(R-P),200*(P-B)]},Wd=function(c){return(c/=255)<=.04045?c/12.92:ff((c+.055)/1.055,2.4)},Vd=function(c){return c>Vo.t3?ff(c,1/3):c/Vo.t2+Vo.t0},bb=function(c,h,f){c=Wd(c),h=Wd(h),f=Wd(f);var x=Vd((.4124564*c+.3575761*h+.1804375*f)/Vo.Xn),_=Vd((.2126729*c+.7151522*h+.072175*f)/Vo.Yn),$=Vd((.0193339*c+.119192*h+.9503041*f)/Vo.Zn);return[x,_,$]},gf=mb,Go=Ni,yb=C.unpack,wb=Math.pow,xb=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=yb(c,"lab");var f=c[0],x=c[1],_=c[2],$,S,R,P,B,H;return S=(f+16)/116,$=isNaN(x)?S:S+x/500,R=isNaN(_)?S:S-_/200,S=Go.Yn*Yd(S),$=Go.Xn*Yd($),R=Go.Zn*Yd(R),P=Gd(3.2404542*$-1.5371385*S-.4985314*R),B=Gd(-.969266*$+1.8760108*S+.041556*R),H=Gd(.0556434*$-.2040259*S+1.0572252*R),[P,B,H,c.length>3?c[3]:1]},Gd=function(c){return 255*(c<=.00304?12.92*c:1.055*wb(c,1/2.4)-.055)},Yd=function(c){return c>Go.t1?c*c*c:Go.t2*(c-Go.t0)},vf=xb,kb=C.unpack,Cb=C.type,Sb=O,mf=T,bf=M,Tb=gf;mf.prototype.lab=function(){return Tb(this._rgb)},Sb.lab=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(mf,[null].concat(c,["lab"])))},bf.format.lab=vf,bf.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=kb(c,"lab"),Cb(c)==="array"&&c.length===3)return"lab"}});var _b=C.unpack,Lb=C.RAD2DEG,$b=Math.sqrt,Nb=Math.atan2,Eb=Math.round,Ib=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=_b(c,"lab"),x=f[0],_=f[1],$=f[2],S=$b(_*_+$*$),R=(Nb($,_)*Lb+360)%360;return Eb(S*1e4)===0&&(R=Number.NaN),[x,S,R]},yf=Ib,Mb=C.unpack,Rb=gf,Pb=yf,Ab=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=Mb(c,"rgb"),x=f[0],_=f[1],$=f[2],S=Rb(x,_,$),R=S[0],P=S[1],B=S[2];return Pb(R,P,B)},Fb=Ab,Ob=C.unpack,zb=C.DEG2RAD,Db=Math.sin,Bb=Math.cos,jb=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=Ob(c,"lch"),x=f[0],_=f[1],$=f[2];return isNaN($)&&($=0),$=$*zb,[x,Bb($)*_,Db($)*_]},wf=jb,Ub=C.unpack,Hb=wf,Wb=vf,Vb=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=Ub(c,"lch");var f=c[0],x=c[1],_=c[2],$=Hb(f,x,_),S=$[0],R=$[1],P=$[2],B=Wb(S,R,P),H=B[0],K=B[1],V=B[2];return[H,K,V,c.length>3?c[3]:1]},xf=Vb,Gb=C.unpack,Yb=xf,qb=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=Gb(c,"hcl").reverse();return Yb.apply(void 0,f)},Zb=qb,Qb=C.unpack,Kb=C.type,kf=O,Ei=T,qd=M,Cf=Fb;Ei.prototype.lch=function(){return Cf(this._rgb)},Ei.prototype.hcl=function(){return Cf(this._rgb).reverse()},kf.lch=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Ei,[null].concat(c,["lch"])))},kf.hcl=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Ei,[null].concat(c,["hcl"])))},qd.format.lch=xf,qd.format.hcl=Zb,["lch","hcl"].forEach(function(c){return qd.autodetect.push({p:2,test:function(){for(var h=[],f=arguments.length;f--;)h[f]=arguments[f];if(h=Qb(h,c),Kb(h)==="array"&&h.length===3)return c}})});var Xb={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},Sf=Xb,Jb=T,Tf=M,e4=C.type,rl=Sf,n4=$i,t4=tr;Jb.prototype.name=function(){for(var c=t4(this._rgb,"rgb"),h=0,f=Object.keys(rl);h<f.length;h+=1){var x=f[h];if(rl[x]===c)return x.toLowerCase()}return c},Tf.format.named=function(c){if(c=c.toLowerCase(),rl[c])return n4(rl[c]);throw new Error("unknown color name: "+c)},Tf.autodetect.push({p:5,test:function(c){for(var h=[],f=arguments.length-1;f-- >0;)h[f]=arguments[f+1];if(!h.length&&e4(c)==="string"&&rl[c.toLowerCase()])return"named"}});var r4=C.unpack,o4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=r4(c,"rgb"),x=f[0],_=f[1],$=f[2];return(x<<16)+(_<<8)+$},a4=o4,l4=C.type,i4=function(c){if(l4(c)=="number"&&c>=0&&c<=16777215){var h=c>>16,f=c>>8&255,x=c&255;return[h,f,x,1]}throw new Error("unknown num color: "+c)},s4=i4,d4=O,_f=T,Lf=M,c4=C.type,u4=a4;_f.prototype.num=function(){return u4(this._rgb)},d4.num=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(_f,[null].concat(c,["num"])))},Lf.format.num=s4,Lf.autodetect.push({p:5,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c.length===1&&c4(c[0])==="number"&&c[0]>=0&&c[0]<=16777215)return"num"}});var h4=O,Zd=T,$f=M,Nf=C.unpack,Ef=C.type,If=Math.round;Zd.prototype.rgb=function(c){return c===void 0&&(c=!0),c===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(If)},Zd.prototype.rgba=function(c){return c===void 0&&(c=!0),this._rgb.slice(0,4).map(function(h,f){return f<3?c===!1?h:If(h):h})},h4.rgb=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Zd,[null].concat(c,["rgb"])))},$f.format.rgb=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=Nf(c,"rgba");return f[3]===void 0&&(f[3]=1),f},$f.autodetect.push({p:3,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=Nf(c,"rgba"),Ef(c)==="array"&&(c.length===3||c.length===4&&Ef(c[3])=="number"&&c[3]>=0&&c[3]<=1))return"rgb"}});var Ii=Math.log,p4=function(c){var h=c/100,f,x,_;return h<66?(f=255,x=h<6?0:-155.25485562709179-.44596950469579133*(x=h-2)+104.49216199393888*Ii(x),_=h<20?0:-254.76935184120902+.8274096064007395*(_=h-10)+115.67994401066147*Ii(_)):(f=351.97690566805693+.114206453784165*(f=h-55)-40.25366309332127*Ii(f),x=325.4494125711974+.07943456536662342*(x=h-50)-28.0852963507957*Ii(x),_=255),[f,x,_,1]},Mf=p4,f4=Mf,g4=C.unpack,v4=Math.round,m4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];for(var f=g4(c,"rgb"),x=f[0],_=f[2],$=1e3,S=4e4,R=.4,P;S-$>R;){P=(S+$)*.5;var B=f4(P);B[2]/B[0]>=_/x?S=P:$=P}return v4(P)},b4=m4,Qd=O,Mi=T,Kd=M,y4=b4;Mi.prototype.temp=Mi.prototype.kelvin=Mi.prototype.temperature=function(){return y4(this._rgb)},Qd.temp=Qd.kelvin=Qd.temperature=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Mi,[null].concat(c,["temp"])))},Kd.format.temp=Kd.format.kelvin=Kd.format.temperature=Mf;var w4=C.unpack,Xd=Math.cbrt,x4=Math.pow,k4=Math.sign,C4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=w4(c,"rgb"),x=f[0],_=f[1],$=f[2],S=[Jd(x/255),Jd(_/255),Jd($/255)],R=S[0],P=S[1],B=S[2],H=Xd(.4122214708*R+.5363325363*P+.0514459929*B),K=Xd(.2119034982*R+.6806995451*P+.1073969566*B),V=Xd(.0883024619*R+.2817188376*P+.6299787005*B);return[.2104542553*H+.793617785*K-.0040720468*V,1.9779984951*H-2.428592205*K+.4505937099*V,.0259040371*H+.7827717662*K-.808675766*V]},Rf=C4;function Jd(c){var h=Math.abs(c);return h<.04045?c/12.92:(k4(c)||1)*x4((h+.055)/1.055,2.4)}var S4=C.unpack,Ri=Math.pow,T4=Math.sign,_4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=S4(c,"lab");var f=c[0],x=c[1],_=c[2],$=Ri(f+.3963377774*x+.2158037573*_,3),S=Ri(f-.1055613458*x-.0638541728*_,3),R=Ri(f-.0894841775*x-1.291485548*_,3);return[255*ec(4.0767416621*$-3.3077115913*S+.2309699292*R),255*ec(-1.2684380046*$+2.6097574011*S-.3413193965*R),255*ec(-.0041960863*$-.7034186147*S+1.707614701*R),c.length>3?c[3]:1]},Pf=_4;function ec(c){var h=Math.abs(c);return h>.0031308?(T4(c)||1)*(1.055*Ri(h,1/2.4)-.055):c*12.92}var L4=C.unpack,$4=C.type,N4=O,Af=T,Ff=M,E4=Rf;Af.prototype.oklab=function(){return E4(this._rgb)},N4.oklab=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Af,[null].concat(c,["oklab"])))},Ff.format.oklab=Pf,Ff.autodetect.push({p:3,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=L4(c,"oklab"),$4(c)==="array"&&c.length===3)return"oklab"}});var I4=C.unpack,M4=Rf,R4=yf,P4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=I4(c,"rgb"),x=f[0],_=f[1],$=f[2],S=M4(x,_,$),R=S[0],P=S[1],B=S[2];return R4(R,P,B)},A4=P4,F4=C.unpack,O4=wf,z4=Pf,D4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=F4(c,"lch");var f=c[0],x=c[1],_=c[2],$=O4(f,x,_),S=$[0],R=$[1],P=$[2],B=z4(S,R,P),H=B[0],K=B[1],V=B[2];return[H,K,V,c.length>3?c[3]:1]},B4=D4,j4=C.unpack,U4=C.type,H4=O,Of=T,zf=M,W4=A4;Of.prototype.oklch=function(){return W4(this._rgb)},H4.oklch=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Of,[null].concat(c,["oklch"])))},zf.format.oklch=B4,zf.autodetect.push({p:3,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=j4(c,"oklch"),U4(c)==="array"&&c.length===3)return"oklch"}});var Df=T,V4=C.type;Df.prototype.alpha=function(c,h){return h===void 0&&(h=!1),c!==void 0&&V4(c)==="number"?h?(this._rgb[3]=c,this):new Df([this._rgb[0],this._rgb[1],this._rgb[2],c],"rgb"):this._rgb[3]};var G4=T;G4.prototype.clipped=function(){return this._rgb._clipped||!1};var io=T,Y4=Ni;io.prototype.darken=function(c){c===void 0&&(c=1);var h=this,f=h.lab();return f[0]-=Y4.Kn*c,new io(f,"lab").alpha(h.alpha(),!0)},io.prototype.brighten=function(c){return c===void 0&&(c=1),this.darken(-c)},io.prototype.darker=io.prototype.darken,io.prototype.brighter=io.prototype.brighten;var q4=T;q4.prototype.get=function(c){var h=c.split("."),f=h[0],x=h[1],_=this[f]();if(x){var $=f.indexOf(x)-(f.substr(0,2)==="ok"?2:0);if($>-1)return _[$];throw new Error("unknown channel "+x+" in mode "+f)}else return _};var Yo=T,Z4=C.type,Q4=Math.pow,K4=1e-7,X4=20;Yo.prototype.luminance=function(c){if(c!==void 0&&Z4(c)==="number"){if(c===0)return new Yo([0,0,0,this._rgb[3]],"rgb");if(c===1)return new Yo([255,255,255,this._rgb[3]],"rgb");var h=this.luminance(),f="rgb",x=X4,_=function(S,R){var P=S.interpolate(R,.5,f),B=P.luminance();return Math.abs(c-B)<K4||!x--?P:B>c?_(S,P):_(P,R)},$=(h>c?_(new Yo([0,0,0]),this):_(this,new Yo([255,255,255]))).rgb();return new Yo($.concat([this._rgb[3]]))}return J4.apply(void 0,this._rgb.slice(0,3))};var J4=function(c,h,f){return c=nc(c),h=nc(h),f=nc(f),.2126*c+.7152*h+.0722*f},nc=function(c){return c/=255,c<=.03928?c/12.92:Q4((c+.055)/1.055,2.4)},lt={},Bf=T,jf=C.type,Pi=lt,Uf=function(c,h,f){f===void 0&&(f=.5);for(var x=[],_=arguments.length-3;_-- >0;)x[_]=arguments[_+3];var $=x[0]||"lrgb";if(!Pi[$]&&!x.length&&($=Object.keys(Pi)[0]),!Pi[$])throw new Error("interpolation mode "+$+" is not defined");return jf(c)!=="object"&&(c=new Bf(c)),jf(h)!=="object"&&(h=new Bf(h)),Pi[$](c,h,f).alpha(c.alpha()+f*(h.alpha()-c.alpha()))},Hf=T,e6=Uf;Hf.prototype.mix=Hf.prototype.interpolate=function(c,h){h===void 0&&(h=.5);for(var f=[],x=arguments.length-2;x-- >0;)f[x]=arguments[x+2];return e6.apply(void 0,[this,c,h].concat(f))};var Wf=T;Wf.prototype.premultiply=function(c){c===void 0&&(c=!1);var h=this._rgb,f=h[3];return c?(this._rgb=[h[0]*f,h[1]*f,h[2]*f,f],this):new Wf([h[0]*f,h[1]*f,h[2]*f,f],"rgb")};var tc=T,n6=Ni;tc.prototype.saturate=function(c){c===void 0&&(c=1);var h=this,f=h.lch();return f[1]+=n6.Kn*c,f[1]<0&&(f[1]=0),new tc(f,"lch").alpha(h.alpha(),!0)},tc.prototype.desaturate=function(c){return c===void 0&&(c=1),this.saturate(-c)};var Vf=T,Gf=C.type;Vf.prototype.set=function(c,h,f){f===void 0&&(f=!1);var x=c.split("."),_=x[0],$=x[1],S=this[_]();if($){var R=_.indexOf($)-(_.substr(0,2)==="ok"?2:0);if(R>-1){if(Gf(h)=="string")switch(h.charAt(0)){case"+":S[R]+=+h;break;case"-":S[R]+=+h;break;case"*":S[R]*=+h.substr(1);break;case"/":S[R]/=+h.substr(1);break;default:S[R]=+h}else if(Gf(h)==="number")S[R]=h;else throw new Error("unsupported value for Color.set");var P=new Vf(S,_);return f?(this._rgb=P._rgb,this):P}throw new Error("unknown channel "+$+" in mode "+_)}else return S};var t6=T,r6=function(c,h,f){var x=c._rgb,_=h._rgb;return new t6(x[0]+f*(_[0]-x[0]),x[1]+f*(_[1]-x[1]),x[2]+f*(_[2]-x[2]),"rgb")};lt.rgb=r6;var o6=T,rc=Math.sqrt,qo=Math.pow,a6=function(c,h,f){var x=c._rgb,_=x[0],$=x[1],S=x[2],R=h._rgb,P=R[0],B=R[1],H=R[2];return new o6(rc(qo(_,2)*(1-f)+qo(P,2)*f),rc(qo($,2)*(1-f)+qo(B,2)*f),rc(qo(S,2)*(1-f)+qo(H,2)*f),"rgb")};lt.lrgb=a6;var l6=T,i6=function(c,h,f){var x=c.lab(),_=h.lab();return new l6(x[0]+f*(_[0]-x[0]),x[1]+f*(_[1]-x[1]),x[2]+f*(_[2]-x[2]),"lab")};lt.lab=i6;var Yf=T,Zo=function(c,h,f,x){var _,$,S,R;x==="hsl"?(S=c.hsl(),R=h.hsl()):x==="hsv"?(S=c.hsv(),R=h.hsv()):x==="hcg"?(S=c.hcg(),R=h.hcg()):x==="hsi"?(S=c.hsi(),R=h.hsi()):x==="lch"||x==="hcl"?(x="hcl",S=c.hcl(),R=h.hcl()):x==="oklch"&&(S=c.oklch().reverse(),R=h.oklch().reverse());var P,B,H,K,V,te;(x.substr(0,1)==="h"||x==="oklch")&&(_=S,P=_[0],H=_[1],V=_[2],$=R,B=$[0],K=$[1],te=$[2]);var ee,be,Se,Ne;return!isNaN(P)&&!isNaN(B)?(B>P&&B-P>180?Ne=B-(P+360):B<P&&P-B>180?Ne=B+360-P:Ne=B-P,be=P+f*Ne):isNaN(P)?isNaN(B)?be=Number.NaN:(be=B,(V==1||V==0)&&x!="hsv"&&(ee=K)):(be=P,(te==1||te==0)&&x!="hsv"&&(ee=H)),ee===void 0&&(ee=H+f*(K-H)),Se=V+f*(te-V),x==="oklch"?new Yf([Se,ee,be],x):new Yf([be,ee,Se],x)},s6=Zo,qf=function(c,h,f){return s6(c,h,f,"lch")};lt.lch=qf,lt.hcl=qf;var d6=T,c6=function(c,h,f){var x=c.num(),_=h.num();return new d6(x+f*(_-x),"num")};lt.num=c6;var u6=Zo,h6=function(c,h,f){return u6(c,h,f,"hcg")};lt.hcg=h6;var p6=Zo,f6=function(c,h,f){return p6(c,h,f,"hsi")};lt.hsi=f6;var g6=Zo,v6=function(c,h,f){return g6(c,h,f,"hsl")};lt.hsl=v6;var m6=Zo,b6=function(c,h,f){return m6(c,h,f,"hsv")};lt.hsv=b6;var y6=T,w6=function(c,h,f){var x=c.oklab(),_=h.oklab();return new y6(x[0]+f*(_[0]-x[0]),x[1]+f*(_[1]-x[1]),x[2]+f*(_[2]-x[2]),"oklab")};lt.oklab=w6;var x6=Zo,k6=function(c,h,f){return x6(c,h,f,"oklch")};lt.oklch=k6;var oc=T,C6=C.clip_rgb,ac=Math.pow,lc=Math.sqrt,ic=Math.PI,Zf=Math.cos,Qf=Math.sin,S6=Math.atan2,T6=function(c,h,f){h===void 0&&(h="lrgb"),f===void 0&&(f=null);var x=c.length;f||(f=Array.from(new Array(x)).map(function(){return 1}));var _=x/f.reduce(function(be,Se){return be+Se});if(f.forEach(function(be,Se){f[Se]*=_}),c=c.map(function(be){return new oc(be)}),h==="lrgb")return _6(c,f);for(var $=c.shift(),S=$.get(h),R=[],P=0,B=0,H=0;H<S.length;H++)if(S[H]=(S[H]||0)*f[0],R.push(isNaN(S[H])?0:f[0]),h.charAt(H)==="h"&&!isNaN(S[H])){var K=S[H]/180*ic;P+=Zf(K)*f[0],B+=Qf(K)*f[0]}var V=$.alpha()*f[0];c.forEach(function(be,Se){var Ne=be.get(h);V+=be.alpha()*f[Se+1];for(var Me=0;Me<S.length;Me++)if(!isNaN(Ne[Me]))if(R[Me]+=f[Se+1],h.charAt(Me)==="h"){var Tn=Ne[Me]/180*ic;P+=Zf(Tn)*f[Se+1],B+=Qf(Tn)*f[Se+1]}else S[Me]+=Ne[Me]*f[Se+1]});for(var te=0;te<S.length;te++)if(h.charAt(te)==="h"){for(var ee=S6(B/R[te],P/R[te])/ic*180;ee<0;)ee+=360;for(;ee>=360;)ee-=360;S[te]=ee}else S[te]=S[te]/R[te];return V/=x,new oc(S,h).alpha(V>.99999?1:V,!0)},_6=function(c,h){for(var f=c.length,x=[0,0,0,0],_=0;_<c.length;_++){var $=c[_],S=h[_]/f,R=$._rgb;x[0]+=ac(R[0],2)*S,x[1]+=ac(R[1],2)*S,x[2]+=ac(R[2],2)*S,x[3]+=R[3]*S}return x[0]=lc(x[0]),x[1]=lc(x[1]),x[2]=lc(x[2]),x[3]>.9999999&&(x[3]=1),new oc(C6(x))},Nt=O,Qo=C.type,L6=Math.pow,sc=function(c){var h="rgb",f=Nt("#ccc"),x=0,_=[0,1],$=[],S=[0,0],R=!1,P=[],B=!1,H=0,K=1,V=!1,te={},ee=!0,be=1,Se=function(G){if(G=G||["#fff","#000"],G&&Qo(G)==="string"&&Nt.brewer&&Nt.brewer[G.toLowerCase()]&&(G=Nt.brewer[G.toLowerCase()]),Qo(G)==="array"){G.length===1&&(G=[G[0],G[0]]),G=G.slice(0);for(var ie=0;ie<G.length;ie++)G[ie]=Nt(G[ie]);$.length=0;for(var xe=0;xe<G.length;xe++)$.push(xe/(G.length-1))}return Kn(),P=G},Ne=function(G){if(R!=null){for(var ie=R.length-1,xe=0;xe<ie&&G>=R[xe];)xe++;return xe-1}return 0},Me=function(G){return G},Tn=function(G){return G},kn=function(G,ie){var xe,ye;if(ie==null&&(ie=!1),isNaN(G)||G===null)return f;if(ie)ye=G;else if(R&&R.length>2){var _n=Ne(G);ye=_n/(R.length-2)}else K!==H?ye=(G-H)/(K-H):ye=1;ye=Tn(ye),ie||(ye=Me(ye)),be!==1&&(ye=L6(ye,be)),ye=S[0]+ye*(1-S[0]-S[1]),ye=Math.min(1,Math.max(0,ye));var He=Math.floor(ye*1e4);if(ee&&te[He])xe=te[He];else{if(Qo(P)==="array")for(var Ee=0;Ee<$.length;Ee++){var Ae=$[Ee];if(ye<=Ae){xe=P[Ee];break}if(ye>=Ae&&Ee===$.length-1){xe=P[Ee];break}if(ye>Ae&&ye<$[Ee+1]){ye=(ye-Ae)/($[Ee+1]-Ae),xe=Nt.interpolate(P[Ee],P[Ee+1],ye,h);break}}else Qo(P)==="function"&&(xe=P(ye));ee&&(te[He]=xe)}return xe},Kn=function(){return te={}};Se(c);var Le=function(G){var ie=Nt(kn(G));return B&&ie[B]?ie[B]():ie};return Le.classes=function(G){if(G!=null){if(Qo(G)==="array")R=G,_=[G[0],G[G.length-1]];else{var ie=Nt.analyze(_);G===0?R=[ie.min,ie.max]:R=Nt.limits(ie,"e",G)}return Le}return R},Le.domain=function(G){if(!arguments.length)return _;H=G[0],K=G[G.length-1],$=[];var ie=P.length;if(G.length===ie&&H!==K)for(var xe=0,ye=Array.from(G);xe<ye.length;xe+=1){var _n=ye[xe];$.push((_n-H)/(K-H))}else{for(var He=0;He<ie;He++)$.push(He/(ie-1));if(G.length>2){var Ee=G.map(function(Fe,Oe){return Oe/(G.length-1)}),Ae=G.map(function(Fe){return(Fe-H)/(K-H)});Ae.every(function(Fe,Oe){return Ee[Oe]===Fe})||(Tn=function(Fe){if(Fe<=0||Fe>=1)return Fe;for(var Oe=0;Fe>=Ae[Oe+1];)Oe++;var It=(Fe-Ae[Oe])/(Ae[Oe+1]-Ae[Oe]),Sr=Ee[Oe]+It*(Ee[Oe+1]-Ee[Oe]);return Sr})}}return _=[H,K],Le},Le.mode=function(G){return arguments.length?(h=G,Kn(),Le):h},Le.range=function(G,ie){return Se(G),Le},Le.out=function(G){return B=G,Le},Le.spread=function(G){return arguments.length?(x=G,Le):x},Le.correctLightness=function(G){return G==null&&(G=!0),V=G,Kn(),V?Me=function(ie){for(var xe=kn(0,!0).lab()[0],ye=kn(1,!0).lab()[0],_n=xe>ye,He=kn(ie,!0).lab()[0],Ee=xe+(ye-xe)*ie,Ae=He-Ee,Fe=0,Oe=1,It=20;Math.abs(Ae)>.01&&It-- >0;)(function(){return _n&&(Ae*=-1),Ae<0?(Fe=ie,ie+=(Oe-ie)*.5):(Oe=ie,ie+=(Fe-ie)*.5),He=kn(ie,!0).lab()[0],Ae=He-Ee})();return ie}:Me=function(ie){return ie},Le},Le.padding=function(G){return G!=null?(Qo(G)==="number"&&(G=[G,G]),S=G,Le):S},Le.colors=function(G,ie){arguments.length<2&&(ie="hex");var xe=[];if(arguments.length===0)xe=P.slice(0);else if(G===1)xe=[Le(.5)];else if(G>1){var ye=_[0],_n=_[1]-ye;xe=$6(0,G,!1).map(function(Oe){return Le(ye+Oe/(G-1)*_n)})}else{c=[];var He=[];if(R&&R.length>2)for(var Ee=1,Ae=R.length,Fe=1<=Ae;Fe?Ee<Ae:Ee>Ae;Fe?Ee++:Ee--)He.push((R[Ee-1]+R[Ee])*.5);else He=_;xe=He.map(function(Oe){return Le(Oe)})}return Nt[ie]&&(xe=xe.map(function(Oe){return Oe[ie]()})),xe},Le.cache=function(G){return G!=null?(ee=G,Le):ee},Le.gamma=function(G){return G!=null?(be=G,Le):be},Le.nodata=function(G){return G!=null?(f=Nt(G),Le):f},Le};function $6(c,h,f){for(var x=[],_=c<h,$=f?_?h+1:h-1:h,S=c;_?S<$:S>$;_?S++:S--)x.push(S);return x}var ol=T,N6=sc,E6=function(c){for(var h=[1,1],f=1;f<c;f++){for(var x=[1],_=1;_<=h.length;_++)x[_]=(h[_]||0)+h[_-1];h=x}return h},I6=function(c){var h,f,x,_,$,S,R;if(c=c.map(function(V){return new ol(V)}),c.length===2)h=c.map(function(V){return V.lab()}),$=h[0],S=h[1],_=function(V){var te=[0,1,2].map(function(ee){return $[ee]+V*(S[ee]-$[ee])});return new ol(te,"lab")};else if(c.length===3)f=c.map(function(V){return V.lab()}),$=f[0],S=f[1],R=f[2],_=function(V){var te=[0,1,2].map(function(ee){return(1-V)*(1-V)*$[ee]+2*(1-V)*V*S[ee]+V*V*R[ee]});return new ol(te,"lab")};else if(c.length===4){var P;x=c.map(function(V){return V.lab()}),$=x[0],S=x[1],R=x[2],P=x[3],_=function(V){var te=[0,1,2].map(function(ee){return(1-V)*(1-V)*(1-V)*$[ee]+3*(1-V)*(1-V)*V*S[ee]+3*(1-V)*V*V*R[ee]+V*V*V*P[ee]});return new ol(te,"lab")}}else if(c.length>=5){var B,H,K;B=c.map(function(V){return V.lab()}),K=c.length-1,H=E6(K),_=function(V){var te=1-V,ee=[0,1,2].map(function(be){return B.reduce(function(Se,Ne,Me){return Se+H[Me]*Math.pow(te,K-Me)*Math.pow(V,Me)*Ne[be]},0)});return new ol(ee,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return _},M6=function(c){var h=I6(c);return h.scale=function(){return N6(h)},h},dc=O,Et=function(c,h,f){if(!Et[f])throw new Error("unknown blend mode "+f);return Et[f](c,h)},kr=function(c){return function(h,f){var x=dc(f).rgb(),_=dc(h).rgb();return dc.rgb(c(x,_))}},Cr=function(c){return function(h,f){var x=[];return x[0]=c(h[0],f[0]),x[1]=c(h[1],f[1]),x[2]=c(h[2],f[2]),x}},R6=function(c){return c},P6=function(c,h){return c*h/255},A6=function(c,h){return c>h?h:c},F6=function(c,h){return c>h?c:h},O6=function(c,h){return 255*(1-(1-c/255)*(1-h/255))},z6=function(c,h){return h<128?2*c*h/255:255*(1-2*(1-c/255)*(1-h/255))},D6=function(c,h){return 255*(1-(1-h/255)/(c/255))},B6=function(c,h){return c===255?255:(c=255*(h/255)/(1-c/255),c>255?255:c)};Et.normal=kr(Cr(R6)),Et.multiply=kr(Cr(P6)),Et.screen=kr(Cr(O6)),Et.overlay=kr(Cr(z6)),Et.darken=kr(Cr(A6)),Et.lighten=kr(Cr(F6)),Et.dodge=kr(Cr(B6)),Et.burn=kr(Cr(D6));for(var j6=Et,cc=C.type,U6=C.clip_rgb,H6=C.TWOPI,W6=Math.pow,V6=Math.sin,G6=Math.cos,Kf=O,Y6=function(c,h,f,x,_){c===void 0&&(c=300),h===void 0&&(h=-1.5),f===void 0&&(f=1),x===void 0&&(x=1),_===void 0&&(_=[0,1]);var $=0,S;cc(_)==="array"?S=_[1]-_[0]:(S=0,_=[_,_]);var R=function(P){var B=H6*((c+120)/360+h*P),H=W6(_[0]+S*P,x),K=$!==0?f[0]+P*$:f,V=K*H*(1-H)/2,te=G6(B),ee=V6(B),be=H+V*(-.14861*te+1.78277*ee),Se=H+V*(-.29227*te-.90649*ee),Ne=H+V*(1.97294*te);return Kf(U6([be*255,Se*255,Ne*255,1]))};return R.start=function(P){return P==null?c:(c=P,R)},R.rotations=function(P){return P==null?h:(h=P,R)},R.gamma=function(P){return P==null?x:(x=P,R)},R.hue=function(P){return P==null?f:(f=P,cc(f)==="array"?($=f[1]-f[0],$===0&&(f=f[1])):$=0,R)},R.lightness=function(P){return P==null?_:(cc(P)==="array"?(_=P,S=P[1]-P[0]):(_=[P,P],S=0),R)},R.scale=function(){return Kf.scale(R)},R.hue(f),R},q6=T,Z6="0123456789abcdef",Q6=Math.floor,K6=Math.random,X6=function(){for(var c="#",h=0;h<6;h++)c+=Z6.charAt(Q6(K6()*16));return new q6(c,"hex")},uc=p,Xf=Math.log,J6=Math.pow,e8=Math.floor,n8=Math.abs,Jf=function(c,h){h===void 0&&(h=null);var f={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return uc(c)==="object"&&(c=Object.values(c)),c.forEach(function(x){h&&uc(x)==="object"&&(x=x[h]),x!=null&&!isNaN(x)&&(f.values.push(x),f.sum+=x,x<f.min&&(f.min=x),x>f.max&&(f.max=x),f.count+=1)}),f.domain=[f.min,f.max],f.limits=function(x,_){return e0(f,x,_)},f},e0=function(c,h,f){h===void 0&&(h="equal"),f===void 0&&(f=7),uc(c)=="array"&&(c=Jf(c));var x=c.min,_=c.max,$=c.values.sort(function(pc,fc){return pc-fc});if(f===1)return[x,_];var S=[];if(h.substr(0,1)==="c"&&(S.push(x),S.push(_)),h.substr(0,1)==="e"){S.push(x);for(var R=1;R<f;R++)S.push(x+R/f*(_-x));S.push(_)}else if(h.substr(0,1)==="l"){if(x<=0)throw new Error("Logarithmic scales are only possible for values > 0");var P=Math.LOG10E*Xf(x),B=Math.LOG10E*Xf(_);S.push(x);for(var H=1;H<f;H++)S.push(J6(10,P+H/f*(B-P)));S.push(_)}else if(h.substr(0,1)==="q"){S.push(x);for(var K=1;K<f;K++){var V=($.length-1)*K/f,te=e8(V);if(te===V)S.push($[te]);else{var ee=V-te;S.push($[te]*(1-ee)+$[te+1]*ee)}}S.push(_)}else if(h.substr(0,1)==="k"){var be,Se=$.length,Ne=new Array(Se),Me=new Array(f),Tn=!0,kn=0,Kn=null;Kn=[],Kn.push(x);for(var Le=1;Le<f;Le++)Kn.push(x+Le/f*(_-x));for(Kn.push(_);Tn;){for(var G=0;G<f;G++)Me[G]=0;for(var ie=0;ie<Se;ie++)for(var xe=$[ie],ye=Number.MAX_VALUE,_n=void 0,He=0;He<f;He++){var Ee=n8(Kn[He]-xe);Ee<ye&&(ye=Ee,_n=He),Me[_n]++,Ne[ie]=_n}for(var Ae=new Array(f),Fe=0;Fe<f;Fe++)Ae[Fe]=null;for(var Oe=0;Oe<Se;Oe++)be=Ne[Oe],Ae[be]===null?Ae[be]=$[Oe]:Ae[be]+=$[Oe];for(var It=0;It<f;It++)Ae[It]*=1/Me[It];Tn=!1;for(var Sr=0;Sr<f;Sr++)if(Ae[Sr]!==Kn[Sr]){Tn=!0;break}Kn=Ae,kn++,kn>200&&(Tn=!1)}for(var Tr={},Ko=0;Ko<f;Ko++)Tr[Ko]=[];for(var Xo=0;Xo<Se;Xo++)be=Ne[Xo],Tr[be].push($[Xo]);for(var or=[],so=0;so<f;so++)or.push(Tr[so][0]),or.push(Tr[so][Tr[so].length-1]);or=or.sort(function(pc,fc){return pc-fc}),S.push(or[0]);for(var al=1;al<or.length;al+=2){var co=or[al];!isNaN(co)&&S.indexOf(co)===-1&&S.push(co)}}return S},n0={analyze:Jf,limits:e0},t0=T,t8=function(c,h){c=new t0(c),h=new t0(h);var f=c.luminance(),x=h.luminance();return f>x?(f+.05)/(x+.05):(x+.05)/(f+.05)},r0=T,rr=Math.sqrt,cn=Math.pow,r8=Math.min,o8=Math.max,o0=Math.atan2,a0=Math.abs,Ai=Math.cos,l0=Math.sin,a8=Math.exp,i0=Math.PI,l8=function(c,h,f,x,_){f===void 0&&(f=1),x===void 0&&(x=1),_===void 0&&(_=1);var $=function(co){return 360*co/(2*i0)},S=function(co){return 2*i0*co/360};c=new r0(c),h=new r0(h);var R=Array.from(c.lab()),P=R[0],B=R[1],H=R[2],K=Array.from(h.lab()),V=K[0],te=K[1],ee=K[2],be=(P+V)/2,Se=rr(cn(B,2)+cn(H,2)),Ne=rr(cn(te,2)+cn(ee,2)),Me=(Se+Ne)/2,Tn=.5*(1-rr(cn(Me,7)/(cn(Me,7)+cn(25,7)))),kn=B*(1+Tn),Kn=te*(1+Tn),Le=rr(cn(kn,2)+cn(H,2)),G=rr(cn(Kn,2)+cn(ee,2)),ie=(Le+G)/2,xe=$(o0(H,kn)),ye=$(o0(ee,Kn)),_n=xe>=0?xe:xe+360,He=ye>=0?ye:ye+360,Ee=a0(_n-He)>180?(_n+He+360)/2:(_n+He)/2,Ae=1-.17*Ai(S(Ee-30))+.24*Ai(S(2*Ee))+.32*Ai(S(3*Ee+6))-.2*Ai(S(4*Ee-63)),Fe=He-_n;Fe=a0(Fe)<=180?Fe:He<=_n?Fe+360:Fe-360,Fe=2*rr(Le*G)*l0(S(Fe)/2);var Oe=V-P,It=G-Le,Sr=1+.015*cn(be-50,2)/rr(20+cn(be-50,2)),Tr=1+.045*ie,Ko=1+.015*ie*Ae,Xo=30*a8(-cn((Ee-275)/25,2)),or=2*rr(cn(ie,7)/(cn(ie,7)+cn(25,7))),so=-or*l0(2*S(Xo)),al=rr(cn(Oe/(f*Sr),2)+cn(It/(x*Tr),2)+cn(Fe/(_*Ko),2)+so*(It/(x*Tr))*(Fe/(_*Ko)));return o8(0,r8(100,al))},s0=T,i8=function(c,h,f){f===void 0&&(f="lab"),c=new s0(c),h=new s0(h);var x=c.get(f),_=h.get(f),$=0;for(var S in x){var R=(x[S]||0)-(_[S]||0);$+=R*R}return Math.sqrt($)},s8=T,d8=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];try{return new(Function.prototype.bind.apply(s8,[null].concat(c))),!0}catch{return!1}},d0=O,c0=sc,c8={cool:function(){return c0([d0.hsl(180,1,.9),d0.hsl(250,.7,.4)])},hot:function(){return c0(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Fi={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},hc=0,u0=Object.keys(Fi);hc<u0.length;hc+=1){var h0=u0[hc];Fi[h0.toLowerCase()]=Fi[h0]}var u8=Fi,xn=O;xn.average=T6,xn.bezier=M6,xn.blend=j6,xn.cubehelix=Y6,xn.mix=xn.interpolate=Uf,xn.random=X6,xn.scale=sc,xn.analyze=n0.analyze,xn.contrast=t8,xn.deltaE=l8,xn.distance=i8,xn.limits=n0.limits,xn.valid=d8,xn.scales=c8,xn.colors=Sf,xn.brewer=u8;var h8=xn;return h8})})(v3);var CT=v3.exports;const ST=Xt(CT);function TT(e){const{h:n,s:t,l:r}=e;return ST.hsl(n,t/100,r/100)}const _T=e=>TT(e).luminance(),m3=e=>_T(e)<.5,_a=({label:e,checked:n,toggle:t})=>d("label",{className:"checkbox no-focus inline",children:[o("input",{type:"checkbox",checked:n,onChange:t}),e]}),b3=`// redefine any of the following hues to taste...
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
`,LT=()=>{const[e,n]=D.useState({names:!1,info:!1,show5s:!1}),t=i=>n(s=>({...s,[i]:!s[i]})),r=()=>t("names"),a=()=>t("info"),l=()=>t("show5s");return d("div",{className:"prose",children:[o("h1",{children:"Standard Colors"}),o("p",{children:"The following greyscale ranges are also defined."}),d("div",{className:"flex space end",children:[o("h2",{children:"Greyscale Ranges"}),d("div",{className:"text-right color-options",children:[o(_a,{label:"Show Names",checked:e.names,toggle:r}),o(_a,{label:"Show Info",checked:e.info,toggle:a}),o(_a,{label:"Show 5s",checked:e.show5s,toggle:l})]})]}),o("div",{className:`ranges ${e.names?"names":"nameless"}`,children:rd.filter(i=>Yr.ranges[i].greyscale).map(i=>o($T,{uri:i,range:Yr.ranges[i],options:e},i))}),o("h2",{children:"Brand Hue"}),d("p",{children:["The greyscale ranges are designed to based on your primary brand color. The ",o("code",{children:"grey"})," range is desaturated to around 5%.  The"," ",o("code",{children:"grey20"})," and ",o("code",{children:"grey40"})," ranges are saturated to around 20% and 40% respectively."]}),d("p",{children:["The brand color for this website is ",o("code",{children:"violet"})," which is why these greyscales have a violet tinge to them."]}),d("p",{children:["Each of the colours show above has a corresponding SCSS variable composed of the color name and stop delimited by a hyphen, e.g."," ",o("code",{children:"$red-0"})," through to ",o("code",{children:"$grey-100"}),".  They are also defined as CSS custom properties, e.g. ",o("code",{children:"--red-0"})," through to ",o("code",{children:"--grey-100"}),"."]}),d("p",{children:["Each range of colors is built from a base hue.  These are defined in SASS variables using the SASS ",o("code",{children:"!default"})," flag.  If you want to adjust the hues you can set any of these SASS variables before importing the main ",o("code",{children:"badger-ui.scss"})," component."]}),o(ze,{code:b3,caption:"Customising Hues",language:"scss",expand:!0}),o("h2",{children:"TODO"}),d("ul",{children:[o("li",{children:"Editing or updating a palette using Badger Color"}),o("li",{children:"Expanding the palette into SCSS files"}),o("li",{children:"Customising the palette using SCSS variables"}),o("li",{children:"Customising the color hues"}),o("li",{children:"Defining your brand color"}),o("li",{children:"Adding/editing CSS scopes"}),o("li",{children:"Including or omitting colors"})]})]})},$T=({uri:e,range:n,options:t})=>d("div",{className:"range",children:[t.names&&o("h3",{children:n.name}),o("div",{className:"swatches",children:bi(0,100,t.show5s?5:10).map(r=>o(NT,{uri:e,range:n,stop:r,options:t},r))})]}),NT=({uri:e,range:n,stop:t,options:r})=>{const a=n.stops[t];return o("div",{className:`swatch ${m3(a)?"dark":"light"}`,style:{backgroundColor:`var(--${e}-${t})`},children:r.info&&o(y3,{uri:e,stop:t,color:a})})},y3=({uri:e,stop:n,color:t})=>d("div",{children:[d("div",{className:"stop",children:[e,"-",n]}),d("div",{className:"specs",children:[t.hex,o("br",{}),"h:",t.h,"°",o("br",{}),"s:",t.s,"%",o("br",{}),"l:",t.l,"%"]})]}),ET=Object.freeze(Object.defineProperty({__proto__:null,Info:y3,default:LT},Symbol.toStringTag,{value:"Module"})),IT=`# Path to the palette data file (exported from
# badger-color) relative to the project root
palette: config/my-palette.json

# Path to the SCSS output directory, also
# relative to the project root
output: styles/color

# Your default brand color
brandColor: blue
`,MT=`{
  "scripts": {
    "palette": "badger-css-palette-scss -c config/export-my-palette.yaml -v"
  }
}`,RT=`## using npm
$ npm run palette

## using yarn
$ yarn run palette

## using pnpm
$ pnpm run palette`,PT=`// Load the default helpers and configuration files
@import '@abw/badger-css/styles/helpers/all.scss';
@import '@abw/badger-css/styles/config/all.scss';

// Load your custom palette
@import "color/palette.scss";

// Then the default utilities, form styles and other components
@import "@abw/badger-css/styles/utilities/all.scss";
@import "@abw/badger-css/styles/forms/all.scss";
@import "@abw/badger-css/styles/components/all.scss";
`,AT=`// Replace this:
// @import "@abw/badger-css/styles/badger.scss";

// With something like this (you may need to adjust
// the path prefix, depending on where you're loading
// it from, e.g. "../styles/badger.scss")
@import "styles/badger.scss";`,de=({children:e,align:n="top"})=>o("div",{className:`grid-2 gap-h-8 stack-desktop ${n}`,style:{"--prose-width":"100%"},children:e}),FT=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Custom Palette"}),d(de,{children:[d("div",{children:[o("p",{children:"The pre-defined color palette is a good starting point for building a web site.  There's a certain amount of flexibility built in to the SASS source files: you can adjust the hues of the different color ranges, define your own brand color or colors, and specify which of the color ranges you want to include (and implicitly, which ones you don't want)."}),d("p",{children:["When you need a bit more flexibility you can head over to the"," ",o("a",{href:"https://abw.github.io/badger-color/",children:"Badger Color"})," web app and either customise one of the standard palettes or design your own palette from scratch."]})]}),d("div",{children:[o("p",{children:"You can then download the palette data as a JSON file and use the script provided to generate the SCSS configuration files for your palette, ready to integrate into Badger CSS.  At any point you can upload the palette back into Badger Color, make some adjustments, download it again and repeat the process."}),d("p",{children:["You'll need to have ",o("code",{children:"@abw/badger-css"})," installed as a developer dependency for your project for these next steps to work. See the ",o(le,{to:"/getting-started/installation",text:"installation"})," ","page for details (TL;DR: ",o("code",{children:"npm add -D @abw/badger-css"})," or the equivalent with ",o("code",{children:"yarn"})," or ",o("code",{children:"pnpm"}),")."]})]})]}),o("h2",{children:"Palette Configuration File"}),d(de,{children:[d("div",{children:[d("p",{children:["For these examples, we'll assume that you've download your custom palette file and saved it in a ",o("code",{children:"config"})," directory under your project root as ",o("code",{children:"my-palette.json"}),".  It doesn't have to be in the ",o("code",{children:"config"})," directory - you can put it anywhere you like in your project."]}),d("p",{children:["You then need to create a configuration file like the one shown here.  It can be a YAML file or JSON file, you can call it anything you like (as long as it has a ",o("code",{children:".yaml"})," or ",o("code",{children:".json"})," ","file extension), and you can put it anywhere you like in your project. Here we'll assume it's called"," ",o("code",{children:"export-my-palette.yaml"})," and is also located in the ",o("code",{children:"config"})," directory under the project root."]}),d("p",{children:["You should define ",o("code",{children:"palette"})," to be the path to your palette data file (relative to the project root), and"," ",o("code",{children:"output"})," to be a path to the directory where you want the SCSS files to be written (also relative to the project root)."]}),d("p",{children:["You can also define your brand color as ",o("code",{children:"brandColor"}),". There are other configuration options you can specify but we'll keep it simple for now."]})]}),o(ze,{code:IT,caption:"config/export-my-palette.yaml",language:"yaml",expand:!0})]}),d("h2",{children:["Adding a ",o("code",{children:"package.json"})," Script"]}),d(de,{children:[d("div",{children:[d("p",{children:["Then add a line to the ",o("code",{children:"scripts"})," section of your"," ",o("code",{children:"package.json"})," file like this."]}),d("p",{children:["The ",o("code",{children:"-c"})," (or ",o("code",{children:"--config"})," if you prefer verbosity) option tells it where your config file is located.  The ",o("code",{children:"-v"})," ","(or ",o("code",{children:"--verbose"}),") option enables messages to tell you what it's doing.  You can leave this off if you prefer."]})]}),o(ze,{code:MT,caption:"package.json",language:"json",expand:!0})]}),o("h2",{children:"Export the Palette as SCSS"}),d(de,{children:[d("div",{children:[d("p",{children:["You can then ",o("code",{children:"run palette"})," from the command line using"," ",o("code",{children:"npm"}),", ",o("code",{children:"yarn"})," or ",o("code",{children:"pnpm"}),", depending on which package manager you're using."]}),d("p",{children:["If you've got the verbose mode enabled, you should see a message reporting each color range being written to a file in"," ",o("code",{children:"style/color/range/XXX"}),", and the main palette index file being written to ",o("code",{children:"style/color/palette.scss"}),"."]})]}),o(ze,{code:RT,caption:"Exporting the palette",language:"bash",expand:!0})]}),d("h2",{children:["Defining a Custom ",o("code",{children:"badger.scss"})," File"]}),d(de,{children:[d("div",{children:[d("p",{children:["Now you need to define your own version of the main"," ",o("code",{children:"badger.scss"})," which loads your palette instead of the default one."]}),d("p",{children:["In this example we'll assume that it's saved as",o("code",{children:"badger.scss"})," in the ",o("code",{children:"styles"})," directory, alongside the newly created ",o("code",{children:"color"})," directory that has been exported from the palette."]}),o("p",{children:"This is also a good place to set any SASS variables that change the defaults for Badger CSS.  They should go at the top of this file."})]}),o(ze,{code:PT,caption:"Custom badger.scss",language:"scss",expand:!0})]}),d("h2",{children:["Replace the Standard ",o("code",{children:"badger.scss"})," File"]}),d(de,{children:[o("div",{children:d("p",{children:["Now you just need to include the new file ",o("code",{children:"badger.scss"})," ","into your website or main stylesheet.  If you were previously loading the default ",o("code",{children:"badger.scss"})," then should change the path to point to your new local ",o("code",{children:"badger.scss"})," file."]})}),o(ze,{code:AT,caption:"Including your badger.scss",language:"scss",expand:!0})]})]}),OT=Object.freeze(Object.defineProperty({__proto__:null,default:FT},Symbol.toStringTag,{value:"Module"})),zT=`// define the hues for the greyscale colors...
$grey-hue:   40;
$grey20-hue: 40;
$grey40-hue: 40;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,DT=()=>{const[e,n]=D.useState({names:!1,info:!1,show5s:!1}),t=i=>n(s=>({...s,[i]:!s[i]})),r=()=>t("names"),a=()=>t("info"),l=()=>t("show5s");return d("div",{className:"prose flow",children:[o("h1",{children:"Standard Colors"}),d(de,{children:[d("p",{children:["The following standard color ranges are defined.  This palette was created using ",o("a",{href:"https://abw.github.io/badger-color",children:"Badger Color"}),", a companion to this library.  You can use it to clone and update this palette or to create your own palettes from scratch."]}),d("p",{children:["Each color range is divided into color ",o("em",{children:"stops"}),".  They range in increments of 5 from ",o("code",{children:"0"})," which is very close to black, up to"," ",o("code",{children:"100"}),", which is very close to white."]})]}),o(l2,{title:"Color Ranges",colors:rd.filter(i=>!Yr.ranges[i].greyscale),options:e,toggleNames:r,toggleInfo:a,toggleShow5s:l}),o("h2",{children:"Range Hues"}),o(Zt,{code:b3,caption:"Customising Hues",language:"scss",expand:!0,children:d("p",{children:["Each range of colors is built from a base hue.  These are defined in SASS variables using the SASS ",o("code",{children:"!default"})," flag.  If you want to adjust the hues you can set any of these SASS variables before importing the main ",o("code",{children:"badger.scss"})," component."]})}),o(l2,{title:"Greyscale Ranges",colors:rd.filter(i=>Yr.ranges[i].greyscale),options:e,toggleNames:r,toggleInfo:a,toggleShow5s:l}),d(Zt,{code:zT,caption:"Customising Greyscale Hues",language:"scss",className:"mar-t-8",expand:!0,children:[d("p",{children:["Three greyscale color ranges are also defined.  They are designed to be based on your primary brand color. The ",o("code",{children:"grey"})," range is desaturated to around 5%.  The"," ",o("code",{children:"grey20"})," and ",o("code",{children:"grey40"})," ranges are saturated to around 20% and 40% respectively."]}),d("p",{children:["The brand color for this website is ",o("code",{children:"violet"})," which is why these greyscales have a violet tinge to them.  You can set the hues for these color ranges using the ",o("code",{children:"$grey-hue"}),","," ",o("code",{children:"$grey20-hue"})," and ",o("code",{children:"$grey40-hue"})," variables."]})]}),d("p",{className:"mar-t-4",children:[o(le,{to:"/colors/brand",text:"Read on"})," to see how you can define your own brand color and automatically get greyscales to match."]})]})},l2=({title:e,colors:n,options:t,toggleNames:r,toggleInfo:a,toggleShow5s:l})=>d(Rt,{children:[d("div",{className:"flex space end",children:[o("h2",{children:e}),d("div",{className:"text-right color-options",children:[o(_a,{label:"Show Names",checked:t.names,toggle:r}),o(_a,{label:"Show Info",checked:t.info,toggle:a}),o(_a,{label:"Show 5s",checked:t.show5s,toggle:l})]})]}),o("div",{className:`ranges ${t.names?"names":"nameless"}`,children:n.map(i=>o(BT,{uri:i,range:Yr.ranges[i],options:t},i))})]}),BT=({uri:e,range:n,options:t})=>d("div",{className:"range",children:[t.names&&o("h3",{children:n.name}),o("div",{className:"swatches",children:bi(0,100,t.show5s?5:10).map(r=>o(jT,{uri:e,range:n,stop:r,options:t},r))})]}),jT=({uri:e,range:n,stop:t,options:r})=>{const a=n.stops[t];return o("div",{className:`swatch ${m3(a)?"dark":"light"}`,style:{backgroundColor:`var(--${e}-${t})`},children:r.info&&o(w3,{uri:e,stop:t,color:a})})},w3=({uri:e,stop:n,color:t})=>d("div",{children:[d("div",{className:"stop",children:[e,"-",n]}),d("div",{className:"specs",children:[t.hex,o("br",{}),"h:",t.h,"°",o("br",{}),"s:",t.s,"%",o("br",{}),"l:",t.l,"%"]})]}),UT=Object.freeze(Object.defineProperty({__proto__:null,Info:w3,default:DT},Symbol.toStringTag,{value:"Module"})),I=({Component:e,code:n,html:t,children:r,className:a="",caption:l,fixed:i,expand:s,language:u})=>d("div",{className:`example grid-2 gap-8 stack-desktop ${a}`,children:[o("div",{className:"source",children:o(ze,{caption:l,code:n||t,expand:s,fixed:i,language:t?"html":u})}),!!r&&o("div",{className:"interim",children:r}),e?d("div",{className:"output",children:[o("h4",{className:"caption",children:"Output"}),o(e,{})]}):null,t?d("div",{className:"output",children:[o("h4",{className:"caption",children:"Output"}),o("div",{dangerouslySetInnerHTML:{__html:t}})]}):null]}),HT=`<div class="
  violet border pad-4 bdr-2 bdw-2
  fgc-40 bgc-85 hdc-30 bdc-70
">
  <h3>Colors</h3>
  Foreground color violet-40<br/>
  Background color violet-85<br/>
  Heading color violet-30<br/>
  Border color violet-70<br/>
</div>
`,WT=`<div class="
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
`,VT=`<div class="red grid-3 gap-2">
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
`,GT=`<!-- Explicit color range -->
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
</div>`,YT=`<div>
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
`,qT={bars:"M0 96C0 78 14 64 32 64H416c18 0 32 14 32 32s-14 32-32 32H32C14 128 0 114 0 96zM0 256c0-18 14-32 32-32H416c18 0 32 14 32 32s-14 32-32 32H32c-18 0-32-14-32-32zM448 416c0 18-14 32-32 32H32c-18 0-32-14-32-32s14-32 32-32H416c18 0 32 14 32 32z",check:"M486,91C499,104 499,127 486,140L212,422C198,435 177,435 163,422L26,281C13,267 13,245 26,231C39,217 61,217 75,231L187,347L438,91C451,77 473,77 486,91L486,91Z",cross:"M456,109C470,94 470,71 456,56C441,42 418,42 403,56L256,204L109,56C94,42 71,42 56,56C42,71 42,94 56,109L204,256L56,403C42,418 42,441 56,456C71,470 94,470 109,456L256,308L403,456C418,470 441,470 456,456C470,441 470,418 456,403L308,256L456,109Z",github:"M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z",info:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13 0-24-11-24-24s11-24 24-24h48c13 0 24 11 24 24v88h8c13 0 24 11 24 24s-11 24-24 24H216c-13 0-24-11-24-24s11-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",lock:"M159,133L159,226L301,226L301,133C301,94 269,62 230,62C191,62 159,94 159,133ZM101,226L101,133C101,62 159,4 230,4C301,4 359,62 359,133L359,226L373,226C404,226 430,252 430,283L430,455C430,486 404,512 373,512L87,512C56,512 30,486 30,455L30,283C30,252 56,226 87,226L101,226Z",pen:"M356,34L311,79L433,201L478,156C502,132 502,94 478,71L441,34C418,10 380,10 356,34L356,34ZM290,100L71,319C61,329 54,341 50,355L16,468C14,476 16,484 22,490C28,496 36,498 44,496L157,462C171,458 183,451 192,442L412,222L290,100Z",plus:"M292,56C292,36 276,20 256,20C236,20 220,36 220,56L220,220L56,220C36,220 20,236 20,256C20,276 36,292 56,292L220,292L220,456C220,476 236,492 256,492C276,492 292,476 292,456L292,292L456,292C476,292 492,276 492,256C492,236 476,220 456,220L292,220L292,56Z",trash:"M173,33L166,46L76,46C59,46 46,59 46,76C46,93 59,106 76,106L436,106C453,106 466,93 466,76C466,59 453,46 436,46L346,46L339,33C334,22 324,16 312,16L200,16C188,16 178,22 173,33ZM436,136L76,136L96,454C97,478 117,496 141,496L371,496C395,496 415,478 416,454L436,136Z",undo:"M168,224L40,224C27,224 16,213 16,200L16,72C16,62 22,54 31,50C40,46 50,48 57,55L99,97C186,10 327,10 414,98C502,185 502,327 414,414C327,502 185,502 98,414C85,402 85,382 98,369C110,357 130,357 143,369C205,432 307,432 369,369C432,307 432,205 369,143C307,81 207,80 144,142L185,183C192,190 194,200 190,209C187,218 178,224 168,224Z",unlock:"M313,131C313,92 345,60 384,60C423,60 455,92 455,131L455,174C455,190 468,203 484,203C499,203 512,190 512,174L512,131C512,61 455,3 384,3C313,3 256,61 256,131L256,227L57,227C26,227 0,253 0,284L0,455C0,486 26,512 57,512L341,512C373,512 398,486 398,455L398,284C398,253 373,227 341,227L313,227L313,131Z",checked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083ZM88.43,298.82C75.421,285.811 75.421,264.689 88.43,251.68C101.439,238.671 122.561,238.671 135.57,251.68L202,318.11L376.43,143.68C389.439,130.671 410.561,130.671 423.57,143.68C436.579,156.689 436.579,177.811 423.57,190.82L225.57,388.82C212.553,401.838 191.447,401.838 178.43,388.82L88.43,298.82Z",unchecked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083Z"},ZT=e=>{const n=qT[e]||BC(`Invalid icon name: ${e}`);return n3(n)?{path:n,width:512,height:512}:n},i2=({path:e,onClick:n,width:t=512,height:r=512,style:a,className:l="",fill:i="currentColor"})=>o("svg",{"aria-hidden":"true",focusable:"false",className:`${l} icon`,style:a,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${t} ${r}`,onClick:n,children:o("path",{d:e,fill:i})}),Fa=({name:e,...n})=>e?o(i2,{...n,...ZT(e)}):o(i2,{...n}),Mo=({title:e="Note",children:n,className:t=""})=>d("div",{className:`info alert flex top border small ${t}`,children:[o(Fa,{name:"info",className:"side-icon"}),d("div",{children:[o("h3",{children:e}),n]})]}),xs=({scope:e,to:n,from:t="color",size:r="smallish",abbreviate:a=!1})=>d("table",{className:`${e} ${r} celled striped properties mar-b-8`,children:[o("thead",{children:d("tr",{children:[o("th",{children:"Variable"}),o("th",{children:"Mapped To"})]})}),o("tbody",{children:bi(0,100,5).map(l=>o(QT,{n:l,from:t,to:n,abbreviate:a},l))})]}),QT=({from:e,to:n,n:t,abbreviate:r})=>!r||t<=10||t>=90?d("tr",{children:[d("td",{className:"font-mono nowrap",children:["--",e,"-",t]}),d("td",{className:"font-mono nowrap",children:["--",n,"-",t]})]},t):t===15?d("tr",{children:[o("td",{className:"font-mono nowrap",children:"..etc..."}),o("td",{className:"font-mono nowrap",children:"...etc..."})]},t):null,KT=["red","brown","orange"],XT=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Color Utilities"}),o("h2",{children:"Color Classes"}),d(de,{children:[d("p",{children:["Each of the color ranges defined in your palette has a corresponding class. For example, the ",o("code",{children:"red"})," class can be used to select the red color range.  Some of the colors also have semantic aliases, e.g. ",o("code",{children:"error"})," and ",o("code",{children:"invalid"})," are aliases for"," ",o("code",{children:"red"}),"."]}),d("p",{children:["Selecting a color range doesn't have much of a visible effect by itself.  The important things is that it maps the ",o("code",{children:"--color-N"})," ","CSS custom properties to the equivalent stops from the selected color range.  For example, in the scope of the ",o("code",{children:"red"})," CSS class, the"," ",o("code",{children:"--color-0"})," property is mapped to ",o("code",{children:"--red-0"}),","," ",o("code",{children:"--color-5"})," is mapped to ",o("code",{children:"--red-5"}),","," ",o("code",{children:"--color-10"})," to ",o("code",{children:"--red-10"})," and so on up to 100."]})]}),d("div",{className:"small flex gap-4",children:[KT.map(e=>d("div",{children:[d("h3",{className:"font-mono mar-b-2",children:[".",e," ","{"," ... ","}"]}),o(xs,{scope:e,to:e,abbreviate:!0})]},e)),o("div",{children:o("h3",{className:"font-mono mar-b-2",children:"...etc"})})]}),o("h2",{children:"Foreground, Background and Border Colors"}),d(de,{children:[d("p",{children:["The ",o("code",{children:"fgc-N"}),", ",o("code",{children:"bgc-N"}),", ",o("code",{children:"hdc-N"})," and"," ",o("code",{children:"bdc-N"})," classes can be used to select a stop from the color range for the foreground color, background color, heading color and border color, respectively."]}),d("p",{children:["For example, the ",o("code",{children:"bgc-80"})," CSS class will set the background color to whatever color is mapped to ",o("code",{children:"--color-80"}),".  In the scope of the ",o("code",{children:"red"})," CSS class, that will be ",o("code",{children:"--red-80"}),"."]})]}),d("div",{className:"grid-2 gap-8 stack-desktop",children:[o(s2,{classes:[["fgc-N","--color",d(Rt,{children:[o("b",{children:"f"}),"ore",o("b",{children:"g"}),"round ",o("b",{children:"c"}),"olor stop ",o("code",{children:"N"})]})],["bgc-N","--background-color",d(Rt,{children:[o("b",{children:"b"}),"ack",o("b",{children:"g"}),"round ",o("b",{children:"c"}),"olor stop ",o("code",{children:"N"})]})],["hdc-N","--heading-color",d(Rt,{children:[o("b",{children:"h"}),"ea",o("b",{children:"d"}),"ing ",o("b",{children:"c"}),"olor stop ",o("code",{children:"N"})]})],["bdc-N","--border-color",d(Rt,{children:[o("b",{children:"b"}),"or",o("b",{children:"d"}),"er ",o("b",{children:"c"}),"olor stop ",o("code",{children:"N"})]})]]}),o("div",{children:d(Mo,{children:["The ",o("code",{children:"bdc-N"})," classes are designed to be used in conjunction with the ",o("code",{children:"border"})," class and other classes for setting ",o(le,{to:"/utilities/borders",text:"borders"}),".  A"," ",o("code",{children:"bdc-N"})," class will set the color border, but you won't see any effect unless you also add the ",o("code",{children:"border"})," class."]})})]}),o(I,{html:HT,caption:"Color Classes",expand:!0}),o("h2",{children:"Dark Theme"}),d("p",{children:["The ",o("code",{children:"fgd-N"}),", ",o("code",{children:"bgd-N"}),", ",o("code",{children:"hdd-N"})," and"," ",o("code",{children:"bdd-N"})," classes are equivalents of the above for when a dark theme is selected.  You can set foreground, background, heading and border colors for both light and dark themes and they will be switched in automatically."]}),d(de,{children:[o(s2,{classes:[["fgd-N","--color",d(Rt,{children:[o("b",{children:"f"}),"ore",o("b",{children:"g"}),"round ",o("b",{children:"d"}),"ark theme color stop ",o("code",{children:"N"})]})],["bgd-N","--background-color",d(Rt,{children:[o("b",{children:"b"}),"ack",o("b",{children:"g"}),"round ",o("b",{children:"d"}),"ark theme color stop ",o("code",{children:"N"})]})],["hdd-N","--heading-color",d(Rt,{children:[o("b",{children:"h"}),"ea",o("b",{children:"d"}),"ing ",o("b",{children:"d"}),"ark theme color stop ",o("code",{children:"N"})]})],["bdd-N","--border-color",d(Rt,{children:[o("b",{children:"b"}),"or",o("b",{children:"d"}),"er ",o("b",{children:"d"}),"ark theme color stop ",o("code",{children:"N"})]})]]}),d(Mo,{children:["The same rule applies for ",o("code",{children:"bdd-N"})," as it does for"," ",o("code",{children:"bdc-N"})," - it selects the border color but you still need to add the ",o("code",{children:"border"})," class to make the border visible."]})]}),o(I,{html:WT,caption:"Dark Theme",expand:!0}),o("h2",{children:"Color Inheritance"}),o("p",{children:"CSS custom properties are inherited by child elements.  This means you can select a color range on an element and all children will inherit that color range."}),o(I,{html:VT,caption:"Color Inheritance",expand:!0}),o("h2",{children:"Easy Component Coloring"}),d("p",{children:["This effect is used by various badger-css components. They use the generic ",o("code",{children:"--color-N"})," properties to define colors and can then be rendered using any color range."]}),o(I,{html:GT,caption:"Color Components"}),o("h2",{children:"Creating Your Own Colored Components"}),d(de,{children:[d("p",{children:["You can employ this in your own components by using the"," ",o("code",{children:"--color-N"})," CSS custom properties to define your component colours."]}),d("p",{children:["This is particularly useful when implementing components for both light and dark themes.  You only need to specify which ",o("code",{children:"--color-N"})," stops you want to use in each case.  You don't need to write separate CSS rules for each of the colors you might want to use."]})]}),o(I,{html:YT,caption:"Custom Components"})]}),s2=({classes:e})=>d("table",{className:"brand celled striped mar-b-8",children:[o("thead",{children:d("tr",{children:[o("th",{children:"Class"}),o("th",{children:"Property"}),o("th",{children:"Description"})]})}),o("tbody",{children:e.map(n=>d("tr",{children:[o("td",{children:o("code",{children:n[0]})}),o("td",{children:o("code",{children:n[1]})}),o("td",{children:n[2]})]},n[0]))})]}),JT=Object.freeze(Object.defineProperty({__proto__:null,default:XT},Symbol.toStringTag,{value:"Module"})),e_=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Color Variables"}),o("h2",{children:"SASS Color Variables"}),d("p",{children:["Each stop in a color range has a SASS variable defined, e.g.",o("code",{children:"$red-0"}),", ",o("code",{children:"$red-5"}),","," ",o("code",{children:"$red-10"})," and so on.  You can use these in your SASS components as necessary."]}),o("h2",{children:"CSS Custom Properties"}),d(de,{children:[d("div",{children:[d("p",{children:["Each of the colour stops also has a corresponding CSS custom property (a.k.a. CSS variable) defined, e.g.",o("code",{children:"--red-0"}),", ",o("code",{children:"--red-5"}),","," ",o("code",{children:"--red-10"})," and so on.  You can use these in your CSS files, e.g. as ",o("code",{children:"color: var(--red-10)"}),"."]}),d("p",{children:["Each of your brand colors will also have CSS custom properties defined. If you're using the default ",o("code",{children:"brand"})," name then they will be ",o("code",{children:"--brand-0"}),", ",o("code",{children:"--brand-5"}),","," ",o("code",{children:"--brand-10"})," and so on."]})]}),d("p",{children:["If you have defined a different set of names via"," ",o("code",{children:"$brand-colors"})," then they will have corresponding names.  For example, if you defined the names in your ",o("code",{children:"$brand-colors"})," to be ",o("code",{children:"primary"}),","," ",o("code",{children:"secondary"})," and ",o("code",{children:"tertiary"})," then the custom properties will be ",o("code",{children:"--primary-0"}),","," ",o("code",{children:"--secondary-0"}),", ",o("code",{children:"--tertiary-0"}),", and so on."]})]}),o("h2",{children:"Color Switching"}),d(de,{children:[d("p",{children:["CSS custom properties are defined for a generic color, appropriately named ",o("code",{children:"color"}),".  By default they are mapped to grey."]}),o("div",{children:o(xs,{scope:"grey",to:"grey"})})]}),d(de,{children:[d("p",{children:["CSS scopes will be generated for each color range which map the generic colors to the colors from that range.  For example, the"," ",o("code",{children:".red"})," class selector scope will map the colors as shown here."]}),d("div",{children:[d("h3",{className:"font-mono mar-b-2",children:[".red ","{"," ... ","}"]}),o(xs,{scope:"red",to:"red",abbreviate:!0})]})]}),d(de,{children:[d("div",{children:[d("p",{children:["Scopes will also be generated for your brand colors, either using the default ",o("code",{children:"brand"})," name or the custom names you have defined using ",o("code",{children:"$brand-colors"}),"."]}),d("p",{children:["For example, in the ",o("code",{children:".brand"})," scope the colors will be mapped as follows."]})]}),d("div",{children:[d("h3",{className:"font-mono mar-b-2",children:[".brand ","{"," ... ","}"]}),o(xs,{scope:"brand",to:"brand",abbreviate:!0})]})]}),d("p",{children:["The benefit of this approach is that it allows you to define UI components using the generic colors ",o("code",{children:"--color-N"}),".  By default they will appear in grey, but adding a CSS class matching the color name will switch in the appropriate color range."]}),o("h2",{children:"CSS Scope Aliases"}),d("p",{children:["A number of additional CSS scopes are defined for some of the colors. For example, the CSS scope created for the ",o("code",{children:"red"})," color range is actually ",o("code",{children:".red, .error, .invalid"}),".  This allows you to add the ",o("code",{children:"red"}),", ",o("code",{children:"error"})," or ",o("code",{children:"invalid"})," CSS class to an element to have the red color range selected."]}),d("p",{children:["This is used by ",o(le,{to:"/forms",text:"forms"})," and "," ",o(le,{to:"/components/alerts",text:"alerts"}),", for example, to provide semantic names for the colors."]})]}),n_=Object.freeze(Object.defineProperty({__proto__:null,default:e_},Symbol.toStringTag,{value:"Module"})),t_=`<div class="alert">
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
`,r_=`<div class="alert border">
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
`,o_=`<div class="alert">
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
</div>`,a_=`<div class="grid-2 gap-4">
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
</div>`,l_=`<div class="surface-3 pad-8">
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
</div>`,Op=({color:e,setColor:n})=>d("select",{name:"color",required:!0,value:e,onChange:t=>n(t.target.value),children:[o("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Color"}),o("option",{value:"",children:"Default"}),rd.map(t=>o("option",{value:t,children:t},t))]}),i_=["smallest","smaller","small","medium","large","larger","largest"],zp=({size:e,setSize:n})=>d("select",{name:"size",required:!0,value:e,onChange:t=>n(t.target.value),children:[o("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),o("option",{value:"",children:"Default"}),i_.map(t=>o("option",{value:t,children:t},t))]}),s_=[0,1,2,3,4,5,6,8,10],Dp=({radius:e,setRadius:n})=>d("select",{name:"radius",required:!0,value:e,onChange:t=>n(t.target.value),children:[o("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),o("option",{value:"",children:"Default"}),s_.map(t=>d("option",{value:t,children:["radius: ",t]},t))]}),wi=e=>e.filter(n=>Nn(n)&&n).join(" ").replace(/^\s+/,"").replaceAll(/\s+/g," "),x3=(e,n={},...t)=>wi(Object.entries(e).reduce((r,[a,l])=>(l&&r.push(n[a]||a),r),[...t])),k3=(e,n="",...t)=>wi([...t3(n).filter(r=>e[r]),...t]),d_=[1,2,3,4,5],C3=({shadow:e,setShadow:n})=>d("select",{name:"shadow",required:!0,value:e,onChange:t=>n(t.target.value),children:[o("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),o("option",{value:"",children:"Default"}),d_.map(t=>d("option",{value:t,children:["shadow: ",t]},t))]}),$n=({checked:e,toggle:n,label:t})=>d("label",{className:"checkbox border no-focus",children:[o("input",{type:"checkbox",checked:e,onChange:n}),t]}),c_=[0,1,2,3,4,5,6,8,10],S3=({borderWidth:e,setBorderWidth:n})=>d("select",{name:"borderWidth",required:!0,value:e,onChange:t=>n(t.target.value),children:[o("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),o("option",{value:"",children:"Default"}),c_.map(t=>d("option",{value:t,children:["width: ",t]},t))]}),u_=()=>{const[e,n]=D.useState({body:!0});return d("div",{className:"example grid-2 gap-8 stack-desktop",children:[o(h_,{options:e,setOption:a=>l=>n(i=>({...i,[a]:l})),toggleOption:a=>()=>n(l=>({...l,[a]:!l[a]}))}),d("div",{children:[o("h3",{className:"mar-b-2",children:"Output"}),o("div",{className:"output",children:o(p_,{options:e})})]})]})},h_=({options:e,toggleOption:n,setOption:t})=>{const r=n("headline"),a=n("heading"),l=n("border"),i=n("stripe"),s=t("type"),u=t("size"),p=t("color"),v=t("radius"),y=t("shadow"),k=t("borderWidth"),N=`<div class="${T3(e)}">
  ...
</div>`;return d("div",{children:[o("h3",{className:"mar-b-2",children:"Options"}),d("div",{className:"grid-3 gap-4 stack-tablet top",children:[o($n,{checked:e.headline,toggle:r,label:"Headline"}),o($n,{checked:e.head,toggle:a,label:"Heading"}),o($n,{checked:e.stripe,toggle:i,label:"Stripe"}),o($n,{checked:e.border,toggle:l,label:"Border"}),o(S3,{borderWidth:e.borderWidth,setBorderWidth:k}),o(Dp,{radius:e.radius,setRadius:v})]}),d("div",{className:"grid-4 gap-4 stack-tablet mar-t-4",children:[o(f_,{type:e.type,setType:s}),o(Op,{color:e.color,setColor:p}),o(zp,{size:e.size,setSize:u}),o(C3,{radius:e.shadow,setShadow:y})]}),o("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),o(ze,{code:N,language:"html",expand:!0})]})},T3=e=>wi([e.color,e.type,e.size,e.border&&"border",e.stripe&&"stripe",e.radius&&`bdr-${e.radius}`,e.shadow&&`shadow-${e.shadow}`,e.borderWidth&&`bdw-${e.borderWidth}`,"alert"]),p_=({options:e})=>{const n=T3(e);return d("div",{className:n,children:[e.headline&&o("div",{className:"headline",children:"This is a headline"}),e.heading&&o("h3",{children:"Hello World!"}),d("p",{children:["This is an alert.  This is some ",o("b",{children:"bold text"}),". This is a ",o("a",{href:"/",children:"link"}),"."]}),o("button",{children:"Default Button"}),o("button",{className:"red mar-l-2",children:"Red Button"})]})},f_=({type:e,setType:n})=>d("select",{name:"type",required:!0,value:e,onChange:t=>n(t.target.value),children:[o("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),o("option",{value:"",children:"Default"}),["info","warning","success","error"].map(t=>o("option",{value:t,children:t},t))]}),g_=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Alerts"}),d("p",{children:["The ",o("code",{children:"alert"})," class can be used to display alerts. Add any of the ",o("code",{children:"info"}),", ",o("code",{children:"success"}),","," ",o("code",{children:"warning"})," or ",o("code",{children:"error"})," classes to set the color."]}),o("h2",{children:"Demo"}),o("p",{children:"Select the options to determine how the alert is displayed. Note that some options are mutually exclusive (e.g. stripe and border)."}),o(u_,{}),o("h2",{children:"Default Alerts"}),o(I,{html:t_,language:"html",caption:"Alerts"}),o("h2",{children:"Alerts With Borders"}),d("p",{children:["Add the ",o("code",{children:"border"})," class to add a border."]}),o(I,{html:r_,language:"html",caption:"Added Borders"}),o("h2",{children:"Alert Headings"}),o("p",{children:"Headings are displayed in a slightly darker color than the body text."}),o(I,{html:o_,language:"html",caption:"Alert Headings"}),o("h2",{children:"Alert Headlines"}),d("p",{children:["Add an element with the ",o("code",{children:"headline"})," class to really make it stand out.  This works well with and without borders.  Throw in a"," ",o(le,{to:"/utilities/shadows",text:"shadow"})," if you want to make it really pop."]}),o(I,{html:a_,language:"html",caption:"Alert Headlines"}),o("h2",{children:"Stripe Alerts"}),d("p",{children:["For a more subdued look, try adding the ",o("code",{children:"stripe"})," class."]}),o(I,{html:l_,language:"html",caption:"Stripe Alert"})]}),v_=Object.freeze(Object.defineProperty({__proto__:null,default:g_},Symbol.toStringTag,{value:"Module"})),m_=`<div class="grid-1 gap-4">
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
`,b_=`<div class="grid-1 gap-4">
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
</div>`,y_=`<div class="grid-1 gap-4">
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
</div>`,w_=`<div class="grid-1 gap-4">
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
</div>`,x_=`<style>
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
`,k_=()=>{const[e,n]=D.useState({body:!0});return d("div",{className:"example grid-2 gap-8 stack-desktop",children:[o(C_,{options:e,setOption:a=>l=>n(i=>({...i,[a]:l})),toggleOption:a=>()=>n(l=>({...l,[a]:!l[a]}))}),d("div",{children:[o("h3",{className:"mar-b-2",children:"Output"}),o("div",{className:"output",children:o(S_,{options:e})})]})]})},C_=({options:e,toggleOption:n,setOption:t})=>{const r=n("border"),a=n("shaded"),l=n("lined"),i=t("size"),s=t("color"),u=t("radius"),p=t("shadow"),v=t("borderWidth"),k=`<details class="${_3(e)}">
  ...
</details>`;return d("div",{children:[o("h3",{className:"mar-b-2",children:"Options"}),d("div",{className:"grid-3 gap-4 stack-tablet top",children:[o($n,{checked:e.lined,toggle:l,label:"Lined"}),o($n,{checked:e.shaded,toggle:a,label:"Shaded"})]}),d("div",{className:"grid-3 gap-4 stack-tablet top mar-t-4",children:[o($n,{checked:e.border,toggle:r,label:"Border"}),o(S3,{borderWidth:e.borderWidth,setBorderWidth:v}),o(Dp,{radius:e.radius,setRadius:u})]}),d("div",{className:"grid-3 gap-4 stack-tablet mar-t-4",children:[o(Op,{color:e.color,setColor:s}),o(zp,{size:e.size,setSize:i}),o(C3,{radius:e.shadow,setShadow:p})]}),o("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),o(ze,{code:k,language:"html",expand:!0})]})},_3=e=>wi([e.color,e.size,e.lined&&"lined",e.shaded&&"shaded",e.border&&"border",e.radius&&`bdr-${e.radius}`,e.shadow&&`shadow-${e.shadow}`,e.borderWidth&&`bdw-${e.borderWidth}`]),S_=({options:e})=>{const n=_3(e);return d("details",{className:n,children:[o("summary",{children:"This is a demo details widget - click to reveal"}),o("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o("p",{children:"I really think you're just making a much too big thing out of it."}),o("p",{children:"Making a big thing out of it would've been a good idea."})]})},T_=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Details"}),d("p",{children:["The ",o("code",{children:"details"})," HTML element can be used to create a disclosure widget."]}),o("h2",{children:"Demo"}),o("p",{children:"Select the options to determine how the details widget is displayed."}),o(k_,{}),o("h2",{children:"Default Style"}),d("p",{children:["The default style will be applied without the need for any special CSS classes.  You can add any of the utility classes (e.g. the size classes like ",o("code",{children:"small"}),", ",o("code",{children:"large"}),", etc.) to change the basic appearance of either the whole widget, the summary, or any of the content elements."]}),o(I,{html:m_,language:"html",caption:"Default Style"}),o("h2",{children:"Border Style"}),d("p",{children:["Add the ",o("code",{children:"border"})," class to add a border.  The usual"," ",o("code",{children:"bdr-N"})," classes can be added to set the border radius"," ","and ",o("code",{children:"bdw-N"})," to set the border width."]}),d("p",{children:["The ",o("code",{children:"bdc-N"})," classes can be used to set the border color stop, and ",o("code",{children:"bdd-N"})," classes for the border color stop in dark mode."]}),o(I,{html:b_,language:"html",caption:"Details With Borders"}),o("h2",{children:"Lined Style"}),d("p",{children:["The ",o("code",{children:"lined"})," class can be added to put an additional border line between the summary header and body content."]}),o(I,{html:y_,language:"html",caption:"Details With Borders"}),o("h2",{children:"Shaded Style"}),d("p",{children:["Add the ",o("code",{children:"shaded"})," class to shade the background colors. You can add any of the color classes to change the color palette."]}),o(I,{html:w_,language:"html",caption:"Shaded Details"}),o("h2",{children:"Custom Styling"}),o("p",{children:"There are a number of CSS variables that you can set to change the styling."}),o(I,{html:x_,language:"html",caption:"Custom Styling"})]}),__=Object.freeze(Object.defineProperty({__proto__:null,default:T_},Symbol.toStringTag,{value:"Module"})),Pd=({open:e,close:n,className:t,children:r})=>{const a=D.useRef(null);return D.useEffect(()=>{const{current:l}=a;e?l.showModal():l.close()},[e]),d("dialog",{ref:a,className:t,children:[!!n&&o("div",{className:"close",onClick:n,children:o(Fa,{name:"cross"})}),r]})},L_=()=>{const[e,n]=D.useState(!1);return d("div",{className:"output",children:[o("button",{onClick:()=>n(!0),className:"blue",children:"Show Dialog"}),d(Pd,{open:e,close:()=>n(!1),children:[o("h1",{className:"mar-v-4",children:"Hello World!"}),o("p",{children:"This is a dialog."})]})]})},$_=()=>{const[e,n]=D.useState(!1);return d("div",{className:"output",children:[o("button",{onClick:()=>n(!0),className:"blue",children:"Show Tall Dialog"}),d(Pd,{open:e,close:()=>n(!1),children:[o("h1",{className:"mar-b-4",children:"Tall Dialog"}),d("div",{className:"mobile block-center",children:[o("p",{children:"David. David. David. Wait, please, wait a minute. Have you any idea what it will costs to dress up the band as animals? Oh, it don't cost nothing. It really doesn't. They're not animals, they're signs of the zodiac. They're animals. It's a way to fight the drabs. You know we've got the drabs. Well that's true. I think mine would look good - better in dubly. If it was done in dubly."}),o("p",{children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion. Well let's hear yours. Let's hear your suggestion. Stonehenge! Stonehenge. It's the best production value we've ever had on stage. But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't... Not yet we don't. Let's start... Please, please just a moment. Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this... I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore. I know, so we build a new one. And this is it, look! Consider... consider it done. So you're just going to take care of it like that. You're going to find someone to design it... using that as a plan? Let's try. Let's try. If you can do it, I'll do the number."}),o("p",{children:`This looks actually perfect. I mean it's, uh, the right proportions. It'll be this color right? Yeah. That's... that's... that's just terrific. It almost looks like the real thing. When we get the actual, uh, set, when we get the piece, it'll... it'll follow exactly these specifications. I mean even these contours and everything? Um, I'm not understanding it. What do you mean "the actual piece?" Well I mean... I mean when you build the actual piece... But this is what you asked for, isn't it? What? Well this is the piece. This is the piece? Yes. Are you telling me that this is it? This is scenery? Have you ever been to Stonehenge? No, I haven't been to Stonehenge. The triptychs are... the triptychs are twenty feet high. You can stand four men up them! Ian, I was... I was... I was supposed to build it eighteen inches high. This is insane. This isn't a piece of scenery. Look, look. Look, this is what I was asked to build. Eighteen inches. Right here, it specified eighteen inches. I was given this napkin, I mean... Forget this! Fuck the napkin!!!`}),o("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object. I really think you're just making a much too big thing out of it. Making a big thing out of it would've been a good idea. Nigel gave me a drawing that said eighteen inches. Alright? I know he did, and that's what I'm talking about. Now, whether he knows the difference between feet and inches is not my problem. I do what I'm told. But you're not as confused as him are you? I mean it's not your job to be as confused as Nigel is."}),o("p",{children:"It's my job to do what I'm asked to do by the creative element of this band. And that's what I did. C'mon... The audience were laughing. So it became a comedy number. Yes it did! Yes it fucking well did, and it was not pleasant to be part of the comedy on stage. Backstage, perhaps, it was very amusing."}),o("p",{children:"Maybe we just fix the choreography. Keep the dwarf clear. What do you mean? So they won't trod upon it."})]})]})]})},N_=()=>{const[e,n]=D.useState(!1);return d("div",{className:"output",children:[o("button",{onClick:()=>n(!0),className:"blue",children:"Show Wide Dialog"}),d(Pd,{open:e,close:()=>n(!1),children:[o("h1",{className:"mar-b-4",children:"Wide Dialog"}),o("p",{children:"David. David. David. Wait, please, wait a minute. Have you any idea what it will costs to dress up the band as animals? Oh, it don't cost nothing. It really doesn't. They're not animals, they're signs of the zodiac. They're animals. It's a way to fight the drabs. You know we've got the drabs. Well that's true. I think mine would look good - better in dubly. If it was done in dubly."}),o("p",{children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion. Well let's hear yours. Let's hear your suggestion. Stonehenge! Stonehenge. It's the best production value we've ever had on stage. But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't... Not yet we don't. Let's start... Please, please just a moment. Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this... I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore. I know, so we build a new one. And this is it, look! Consider... consider it done. So you're just going to take care of it like that. You're going to find someone to design it... using that as a plan? Let's try. Let's try. If you can do it, I'll do the number."}),o("p",{children:`This looks actually perfect. I mean it's, uh, the right proportions. It'll be this color right? Yeah. That's... that's... that's just terrific. It almost looks like the real thing. When we get the actual, uh, set, when we get the piece, it'll... it'll follow exactly these specifications. I mean even these contours and everything? Um, I'm not understanding it. What do you mean "the actual piece?" Well I mean... I mean when you build the actual piece... But this is what you asked for, isn't it? What? Well this is the piece. This is the piece? Yes. Are you telling me that this is it? This is scenery? Have you ever been to Stonehenge? No, I haven't been to Stonehenge. The triptychs are... the triptychs are twenty feet high. You can stand four men up them! Ian, I was... I was... I was supposed to build it eighteen inches high. This is insane. This isn't a piece of scenery. Look, look. Look, this is what I was asked to build. Eighteen inches. Right here, it specified eighteen inches. I was given this napkin, I mean... Forget this! Fuck the napkin!!!`}),o("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object. I really think you're just making a much too big thing out of it. Making a big thing out of it would've been a good idea. Nigel gave me a drawing that said eighteen inches. Alright? I know he did, and that's what I'm talking about. Now, whether he knows the difference between feet and inches is not my problem. I do what I'm told. But you're not as confused as him are you? I mean it's not your job to be as confused as Nigel is."}),o("p",{children:"It's my job to do what I'm asked to do by the creative element of this band. And that's what I did. C'mon... The audience were laughing. So it became a comedy number. Yes it did! Yes it fucking well did, and it was not pleasant to be part of the comedy on stage. Backstage, perhaps, it was very amusing."}),o("p",{children:"Maybe we just fix the choreography. Keep the dwarf clear. What do you mean? So they won't trod upon it."})]})]})},E_=()=>{const[e,n]=D.useState(!1),t=()=>n(!1);return d("div",{className:"output",children:[o("button",{onClick:()=>n(!0),className:"blue",children:"Show Dialog Article"}),o(Pd,{open:e,children:d("article",{children:[o("header",{children:o("h3",{children:"User Login"})}),d("form",{className:"width-20rem",children:[d("div",{className:"field wide",children:[o("label",{children:"Email Address"}),o("input",{name:"email",className:"wide"})]}),d("div",{className:"field mar-b-8",children:[o("label",{children:"Password"}),o("input",{name:"password",type:"password",className:"wide"})]})]}),d("footer",{className:"text-right",children:[o("button",{className:"grey outline",onClick:t,children:"Cancel"}),o("button",{className:"blue mar-l-4",onClick:t,children:"Login"})]})]})})]})},I_=`<dialog open>
  <div className="close" onClick={yourCloseHandler}>
    <Icon name="cross"/>
  </div>
  <h1>Hello World!</h1>
  <p>
    This is a dialog.
  </p>
</dialog>`,M_=`<dialog open>
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
`,R_=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Dialog"}),d("p",{children:["Some default styling is provided for the ",o("code",{children:"dialog"})," element which can be used to display modals."]}),o("h2",{children:"Close Button"}),d("p",{children:["A child element with the ",o("code",{children:"close"})," CSS class can be used to create a close button."]}),d(de,{children:[o(ze,{code:I_,caption:"Dialog",language:"html",className:"mar-b-8",expand:!0}),o(L_,{})]}),d("p",{children:["The ",o("code",{children:"$dialog-max-width"})," SASS variable defaults to"," ",o("code",{children:"80vw"})," and is set as the ",o("code",{children:"--max-width"})," CSS variable in the scope of a ",o("code",{children:"dialog"})," element. Similarly the ",o("code",{children:"$dialog-max-height"})," SASS variable defaults to"," ",o("code",{children:"90vh"})," and is set as the ",o("code",{children:"--max-height"})," CSS variable."]}),o("p",{children:"In general, you can constrain the width of the content and the dialog which size appropriately."}),d(de,{children:[o(N_,{}),o($_,{})]}),o("h2",{children:"Header and Footer"}),d("p",{children:["You can add ",o("code",{children:"header"})," and ",o("code",{children:"footer"})," elements to a dialog.  To be semantically correct, you should enclose them in an"," ",o("code",{children:"article"})," element."]}),d(de,{children:[o(ze,{code:M_,caption:"Header and Footer",language:"html",className:"mar-b-8",expand:!0}),o(E_,{})]})]}),P_=Object.freeze(Object.defineProperty({__proto__:null,default:R_},Symbol.toStringTag,{value:"Module"})),A_=`<div class="dropdown">
  <button
    aria-label="menu button"
    aria-haspopup="menu"
    type="button"
  >
    Dropdown Content
  </button>
  <div class="content">
    Dropdown content
  </div>
</div>`,F_=`<div class="brand dropdown">
  <button
    aria-label="menu button"
    aria-haspopup="menu"
  >
    Menu
  </button>
  <ul
    class="content"
    role="menu"
  >
    <li>Nigel</li>
    <li>David</li>
    <li>Derek</li>
    <li class="separator"></li>
    <li>Viv</li>
    <li>Mick</li>
  </ul>
</div>`,O_=`<div class="text-right">
  <div class="brand dropdown right text-left">
    <button
      aria-label="menu button"
      aria-haspopup="menu"
    >
      Right Menu
    </button>
    <ul
      class="content"
      role="menu"
    >
      <li class="caption smaller bold fgc-30 bgc-80 fgd-80 bgd-30">
        Core Members
      </li>
      <li>
        Nigel Tufnel (guitar/vocals)
      </li>
      <li>
        David St. Hubbins (guitar/vocals)
      </li>
      <li>
        Derek Small (bass)
      </li>
      <li class="caption smaller bold fgc-30 bgc-80 fgd-80 bgd-30">
        Additional Members
      </li>
      <li>
        Viv Savage (keyboards)
      </li>
      <li>
        Mick Shrimpton (drums)
      </li>
    </ul>
  </div>
</div>`,z_=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Dropdown"}),d("p",{children:["Use the ",o("code",{children:"dropdown"})," class to create dropdown content. The trigger should either have the ",o("code",{children:"trigger"})," CSS class or (more correctly) have the ",o("code",{children:"aria-haspopup"})," attribute set.  The content should have the ",o("code",{children:"content"})," class."]}),o(I,{html:A_,language:"html",caption:"Dropdown Content"}),d("p",{children:["For dropdown menus you can add the ",o("code",{children:"content"})," class to"," ","a ",o("code",{children:"ul"})," list.  Add the ",o("code",{children:"separator"})," class to a ",o("code",{children:"li"})," element to create a separator."]}),o(I,{html:F_,language:"html",caption:"Dropdown Menu"}),d("p",{children:["The ",o("code",{children:"right"})," class will right-align the dropdown content. You can add the ",o("code",{children:"caption"})," class to a ",o("code",{children:"li"})," element to prevent it from being displayed as a hoverable menu item."]}),o(I,{html:O_,language:"html",caption:"Right Menu"})]}),D_=Object.freeze(Object.defineProperty({__proto__:null,default:z_},Symbol.toStringTag,{value:"Module"})),B_=`<svg
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
  aria-hidden="true" focusable="false" role="img"
  class="icon"
>
  <path
    d="M64,268L184,388L448,124"
    style="fill:none;stroke:currentColor;stroke-width:65"
  />
</svg>
Check!`,j_=`<div class="small">
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
</div>`,U_=`<div class="red fgc-50 large">
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
</div>`,H_=`<svg
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
`,W_=`<div class="larger">
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
`,V_=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Icons"}),d("p",{children:["Some basic styles are included for SVG icons. Add the ",o("code",{children:"icon"})," ","class to an inline SVG image to use them."]}),o(I,{html:B_,language:"html",caption:"Icon"}),o("p",{children:"Icons are sized in em units meaning they scale with text in different sizes."}),o(I,{html:j_,language:"html",caption:"Icon Sizes"}),d("p",{children:["SVG icons can use ",o("code",{children:"currentColor"})," for either the"," ",o("code",{children:"fill"})," or ",o("code",{children:"stroke"})," properties to inherit the current text color."]}),o(I,{html:U_,language:"html",caption:"Icon Colors"}),d(de,{align:"bottom",children:[d("div",{children:[d("p",{children:["SVG elements can use the ",o("code",{children:"fill-fg"})," and ",o("code",{children:"fill-bg"})," ","classes to set the fill color to the current foreground or background colors respectively.  Similarly the ",o("code",{children:"stroke-fg"})," and"," ",o("code",{children:"stroke-bg"})," will set the stroke color to the foreground or"," ","background color."]}),d("p",{children:["These CSS rules are scoped to all ",o("code",{children:"svg"})," elements rather",o("code",{children:"svg.icon"})," specifically.  So you can use them in any SVG images, not just icons."]})]}),d(Mo,{children:["CSS styles can only be applied to inline SVG elements.  They don't work for SVG images loaded using the ",o("code",{children:"img"})," ","tag or applied using a ",o("code",{children:"background-image"})," style."]})]}),o(I,{html:H_,language:"html",caption:"Icon Style"}),d("p",{children:["You can define your own styles to target different elements in an SVG icon.  This example illustrated the use of generic"," ",o("code",{children:"--color-N"})," variables to set the fill and stroke styles on elements in an icon.  The only thing that's determining the color range is the ",o("code",{children:"blue"})," class on the ",o("code",{children:"svg"})," ","element.  Change that to the name of any other color range and the styles will work equally well."]}),d("p",{children:["Also note the use of the"," ",o("code",{children:"--unfilled"})," custom property which sets the background color for the unchecked checkbox.  This allows us to set different color stops for use in light and dark themes."]}),o(I,{html:W_,language:"html",caption:"Icon Style"})]}),G_=Object.freeze(Object.defineProperty({__proto__:null,default:V_},Symbol.toStringTag,{value:"Module"})),Y_=`<div class="relative">
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
</div>`,q_=`<div class="overlay fixed flex center middle">
  I do not, for one, think that the problem was that the
  band was down. I think that the problem may have been...
  that there was a Stonehenge monument on the stage that
  was in danger of being crushed by a dwarf. Alright? That
  tended to understate the hugeness of the object.
</div>
`,Z_=()=>{const[e,n]=D.useState(!1);return e?o("div",{className:"overlay fixed flex center middle",children:d("div",{className:"max-width-40rem",children:[o("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o("button",{onClick:()=>n(!1),className:"red",children:"Hide Overlay"})]})}):o("div",{children:o("button",{onClick:()=>n(!0),className:"green",children:"Show Overlay"})})},Q_=()=>{const[e,n]=D.useState(!1);return d("div",{className:"relative pad-6 border",children:[e&&o("div",{className:"overlay flex middle center pad-8",children:d("div",{children:[o("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o("button",{onClick:()=>n(!1),className:"red",children:"Hide Overlay"})]})}),o("p",{className:"mar-t-none",children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion."}),o("p",{children:"Well let's hear yours. Let's hear your suggestion."}),o("p",{children:"Stonehenge! It's the best production value we've ever had on stage."}),o("p",{children:"But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't..."}),o("p",{children:"Not yet we don't. Let's start... Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this..."}),o("p",{children:"I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore."}),o("p",{children:"I know, so we build a new one. And this is it, look!"}),o("button",{onClick:()=>n(!0),className:"green",children:"Show Overlay"})]})},K_=()=>d("div",{className:"prose",children:[o("h1",{children:"Overlay"}),d("p",{children:["Add the ",o("code",{children:"overlay"})," class to an element to make it an overlay. The default positioning is ",o("code",{children:"absolute"})," so it will fill to cover the nearest parent that has positioning set to ",o("code",{children:"relative"}),"."]}),d(de,{children:[o(ze,{code:Y_,language:"html",caption:"Overlay"}),o("div",{className:"output",children:o(Q_,{})})]}),o("h2",{children:"Fixed Viewport"}),d("p",{children:["Add the ",o("code",{children:"fixed"})," class to set the overlay position to"," ",o("code",{children:"fixed"})," so that it covers the entire viewport."]}),d(de,{children:[o(ze,{code:q_,caption:"Fixed",language:"html",className:"mar-b-8"}),o("div",{className:"output",children:o(Z_,{})})]})]}),X_=Object.freeze(Object.defineProperty({__proto__:null,default:K_},Symbol.toStringTag,{value:"Module"})),J_=()=>{const[e,n]=D.useState({head1:!0,body:!0,foot1:!0});return d("div",{className:"example grid-2 gap-8 stack-desktop",children:[o(eL,{options:e,setOption:a=>l=>n(i=>({...i,[a]:l})),toggleOption:a=>()=>n(l=>({...l,[a]:!l[a]}))}),d("div",{children:[o("h3",{className:"mar-b-2",children:"Output"}),o("div",{className:"output",children:o(nL,{options:e})})]})]})},eL=({options:e,toggleOption:n,setOption:t})=>{const r=n("head1"),a=n("head2"),l=n("body"),i=n("foot1"),s=n("foot2"),u=n("wide"),p=n("celled"),v=n("shaded"),y=n("lined"),k=n("striped"),E=t("size"),N=t("color"),C=t("radius"),w=`<table class="${k3(e,"wide celled shaded lined striped",e.color,e.size,e.radius&&`bdr-${e.radius}`)}">
  ...
</table>`;return d("div",{children:[o("h3",{className:"mar-b-2",children:"Options"}),d("div",{className:"grid-4 gap-4 top stack-tablet",children:[o($n,{checked:e.wide,toggle:u,label:"Wide"}),o(Op,{color:e.color,setColor:N}),o(zp,{size:e.size,setSize:E}),o(Dp,{radius:e.radius,setRadius:C}),o($n,{checked:e.lined,toggle:y,label:"Lined"}),o($n,{checked:e.celled,toggle:p,label:"Celled"}),o($n,{checked:e.shaded,toggle:v,label:"Shaded"}),o($n,{checked:e.striped,toggle:k,label:"Striped"})]}),d("div",{className:"grid-3 gap-4 stack-tablet mar-t-4",children:[o($n,{checked:e.head1,toggle:r,label:"Header"}),o($n,{checked:e.body,toggle:l,label:"Body"}),o($n,{checked:e.foot1,toggle:i,label:"Footer"})]}),d("div",{className:"grid-2 gap-4 stack-tablet mar-t-4",children:[o($n,{checked:e.head2,toggle:a,label:"Pre-header"}),o($n,{checked:e.foot2,toggle:s,label:"Post-footer"})]}),o("div",{className:"grid-5 gap-4 stack-tablet mar-t-4"}),o("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),o(ze,{code:w,language:"html",expand:!0})]})},nL=({options:e})=>{const n=x3(e,{},e.color,e.size,e.radius&&`bdr-${e.radius}`);return d("table",{className:n,children:[(e.head1||e.head2)&&d("thead",{children:[e.head2&&o("tr",{children:o("th",{colSpan:"3",className:"text-center",children:"Spinal Tap"})}),e.head1&&d("tr",{children:[o("th",{children:"Name"}),o("th",{children:"Instrument"}),o("th",{children:"Danger Level"})]})]}),e.body&&d("tbody",{children:[d("tr",{children:[o("td",{children:"Nigel"}),o("td",{children:"Tufnel"}),o("td",{children:"Guitar"})]}),d("tr",{children:[o("td",{children:"David"}),o("td",{children:"St.Hubbins"}),o("td",{children:"Guitar"})]}),d("tr",{children:[o("td",{children:"Derek"}),o("td",{children:"Smalls"}),o("td",{children:"Bass"})]}),d("tr",{children:[o("td",{children:"Viv"}),o("td",{children:"Savage"}),o("td",{children:"Keyboards"})]}),d("tr",{children:[o("td",{children:"Mick"}),o("td",{children:"Shrimpton"}),o("td",{children:"Drums"})]})]}),(e.foot1||e.foot2)&&d("tfoot",{children:[e.foot1&&d("tr",{children:[o("th",{colSpan:"2",className:"text-right",children:"Total"}),o("th",{children:"5"})]}),e.foot2&&o("tr",{children:o("th",{colSpan:"3",className:"text-center",children:"Tap into America!"})})]})]})},tL=`<table>
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
</table>`,rL=`<table class="celled">
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
</table>`,oL=`<table class="shaded">
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
</table>`,aL=`<table class="lined">
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
</table>`,lL=`<table class="striped">
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
</table>`,iL=`<table class="brand striped celled">
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
</table>`,sL=`<table class="shaded lined wide">
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
</table>`,dL=`<div class="flex top wrap gap-4">
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
</div>`,cL=()=>d("div",{className:"prose",children:[o("h1",{children:"Tables"}),o("p",{children:"Badger CSS contains some basic table styling by default and a number of additional classes you can add to snazz things up."}),o("h2",{children:"Demo"}),o("p",{children:"Select the options to determine how the table is displayed."}),o(J_,{}),o("h2",{children:"Default Table"}),o("p",{children:"The default table style is plain."}),o(I,{html:tL,language:"html",caption:"Table"}),o("h2",{children:"Lined Table"}),d("p",{children:["Add the ",o("code",{children:"lined"})," class to add borders between lines."]}),o(I,{html:aL,language:"html",caption:"Lined Table"}),o("h2",{children:"Celled Table"}),d("p",{children:["Add the ",o("code",{children:"celled"})," class to add cell borders."]}),o(I,{html:rL,language:"html",caption:"Celled Table"}),o("h2",{children:"Shaded Table"}),d("p",{children:["Add the ",o("code",{children:"shaded"})," class to add background colors."]}),o(I,{html:oL,language:"html",caption:"Shaded Table"}),o("h2",{children:"Striped Table"}),d("p",{children:["Add the ",o("code",{children:"striped"})," class to add alternate background colors for rows."]}),o(I,{html:lL,language:"html",caption:"Striped Table"}),o("h2",{children:"Colored Table"}),o("p",{children:"Add color classes to change the base color."}),o(I,{html:iL,language:"html",caption:"Colored Table"}),o("h2",{children:"Colored Rows"}),o("p",{children:"Add color classes to rows to get different background colors."}),o(I,{html:sL,language:"html",caption:"Colored Rows"}),o("h2",{children:"Customised Table"}),o("p",{children:"You can customise tables using CSS properties."}),o(I,{html:dL,language:"html",caption:"Rounded Table"})]}),uL=Object.freeze(Object.defineProperty({__proto__:null,default:cL},Symbol.toStringTag,{value:"Module"})),hL=`<button
  data-tooltip
  aria-label="This is a tooltip"
>
    Hover to see tooltip
</button>
`,pL=`<div class="flex space">
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
`,fL=`<div class="flex space">
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
</div>`,gL=`<button
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
`,vL=`<button data-tooltip>
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
`,mL=`<style>
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
</div>`,bL=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Tooltips"}),d("p",{children:["Add the ",o("code",{children:"data-tooltip"})," attribute to an element to enable a tooltip.  The tooltip text should be defined in the ",o("code",{children:"aria-label"})," ","property so that it's also accessible to screen readers."]}),o(I,{html:hL,language:"html",caption:"Tooltip"}),o("h2",{children:"Tooltip Position"}),d("p",{children:["You can set the ",o("code",{children:"data-tooltip"})," attribute to any of"," ",o("code",{children:"left"}),", ",o("code",{children:"right"}),", ",o("code",{children:"top"})," or"," ",o("code",{children:"bottom"})," to set the tooltip position."]}),o(I,{html:pL,language:"html",caption:"Tooltip Position"}),d("p",{children:["You can also combine them as "," ",o("code",{children:"top left"}),", ",o("code",{children:"top right"}),", ",o("code",{children:"bottom left"})," ","and ",o("code",{children:"bottom right"}),"."]}),o(I,{html:fL,language:"html",caption:"Tooltip Corners"}),o("h2",{children:"Wrapping"}),d("p",{children:["The tooltip has a minimum and maximum width set to keep things sensible. You can add the ",o("code",{children:"tt-wide"})," class if you want the tooltip to extend to the full width of the tooltip text."]}),d("p",{children:["You can add newlines to the ",o("code",{children:"aria-label"})," property if you want to force line breaks."]}),o(I,{html:gL,language:"html",caption:"Tooltip Wrapping"}),o("h2",{children:"Content"}),d("p",{children:["As an alternative to setting the ",o("code",{children:"aria-label"})," you can define the tooltip content in a child element with the"," ",o("code",{children:"tooltip"})," CSS class."]}),o(I,{html:vL,language:"html",caption:"Tooltip Content"}),o("h2",{children:"Custom Tooltip Style"}),o("p",{children:"There are a number of SCSS variables that can be used to set the defaults, or you can use CSS variables to create custom tooltip styles."}),o(I,{html:mL,language:"html",caption:"Custom Tooltips"})]}),yL=Object.freeze(Object.defineProperty({__proto__:null,default:bL},Symbol.toStringTag,{value:"Module"})),ho=(e="rem",n=.25)=>[0,1,2,3,4,6,8,10,12,16,20,24,28,32].reduce((t,r)=>({...t,[r]:{vars:{unit:`${r} unit${r==1?"":"s"} (${r*n}${e})`}}}),{}),d2=e=>({t:{vars:{sides:"the top"},more:ho(e)},r:{vars:{sides:"the right"},more:ho(e)},b:{vars:{sides:"the right"},more:ho(e)},l:{vars:{sides:"the left"},more:ho(e)},v:{vars:{sides:"the top and bottom (v = vertical)"},more:ho(e)},h:{vars:{sides:"the left and right (h = horizontal)"},more:ho(e)},...ho(e)}),c2=e=>[2,4,6,8,10,12,14,16,18,20,30,40,50,60,70,90,100].reduce((n,t)=>({...n,[`${t}rem`]:{description:()=>e(t)}}),{}),u2=e=>[2,4,6,8,10,12,14,16,18,20,30,40,50,60,70,90,100].reduce((n,t)=>({...n,[`${t*16}px`]:{description:()=>e(t*16)}}),{}),wL={mar:{vars:{unit:"1 unit (0.25rem)",sides:"all sides"},description:e=>`Add ${e.unit} margin to ${e.sides}`,more:d2("rem")},pad:{vars:{unit:"1 unit (0.25em)",sides:"all sides"},description:e=>`Add ${e.unit} margin to ${e.sides}`,more:d2("em")},width:{more:{...c2(e=>`Set width to ${e}rem (${e*16}px)`),...u2(e=>`Set width to ${e}px`)}},max:{more:{width:{more:{...c2(e=>`Set max-width to ${e}rem (${e*16}px)`),...u2(e=>`Set max-width to ${e}px`)}}}},text:{more:{left:{description:()=>"Align text to the left"},right:{description:()=>"Align text to the right"},center:{description:()=>"Align text to the center"}}},block:{more:{left:{description:()=>"Align block to the left"},right:{description:()=>"Align block to the right"},center:{description:()=>"Align block to the center"}}},display:{more:{inline:{description:()=>"Display element inline"},block:{description:()=>"Display element as a block"},"inline-block":{description:()=>"Display element as an inline block"}}},font:{more:{sans:{description:()=>"Use a sans-serif font"},serif:{description:()=>"Use a serif font"},system:{description:()=>"Use the system font"},mono:{description:()=>"Use a monospaced font"}}}},xL=e=>{const n=e.split("-");let t=[],r=[],a=[],l={},i=wL,s;for(;n.length;){const u=n.shift(),p=i[u];if(p)console.log(`matched ${u}`),s=p.description||s,p.vars&&(l={...l,...p.vars}),t.push(u),i=p.more||{},a=Object.keys(i);else{r.push(u);break}}return{good:t,rest:r,vars:l,next:a,description:s?s(l):null}},kL=e=>t3(e).filter(n=>!n.match(/^\s*$/)).map(xL),CL=()=>{const[e,n]=D.useState("");return d("div",{children:[o("h1",{children:"Class Decoder"}),o("p",{children:"Enter one or more Badger-CSS classes for an explanation."}),d("form",{className:"max-width-30rem",children:[d("div",{className:"field",children:[o("label",{children:"CSS Classes"}),o("input",{type:"text",className:"wide",value:e,onChange:t=>n(t.target.value)})]}),o("button",{type:"button",className:"reset grey button outline",onClick:()=>n(""),children:"Reset"})]}),o("div",{children:!!e.length&&o(SL,{input:e})})]})},SL=({input:e})=>{const n=kL(e);return console.log("results: ",n),o("table",{className:"celled border bdr-2 mar-t-4",children:o("tbody",{children:n.map((t,r)=>d("tr",{children:[d("td",{className:"font-mono bgc-95 bgd-10 split-4",children:[o("span",{className:"green fgc-50",children:t.good.join("-")}),!!t.rest.length&&d("span",{className:"red fgc-50",children:[!!t.good.length&&"-",t.rest.join("-")]})]}),o("td",{className:"bgc-100 bgd-5",children:t.description}),o("td",{className:"bgc-100 bgd-5 font-mono small",children:!!t.next.length&&t.next.map(a=>`-${a} `)})]},r))})})},TL=Object.freeze(Object.defineProperty({__proto__:null,default:CL},Symbol.toStringTag,{value:"Module"})),zo=({color:e,selected:n,select:t,iconColor:r="white",className:a="",alt:l=o(Rt,{children:" "})})=>o("button",{className:`${a} ${e} icon ${n?"focus":""}`,onClick:t,children:n?o(Fa,{name:"check",className:r}):l}),_L=({range:e,setRange:n})=>d("div",{children:[d("div",{className:"flex space mar-b-0",children:[o("h3",{children:"Color Range"}),o("h4",{children:Nn(e)&&o("code",{children:e||""})})]}),d("div",{className:"grid-fit gap-2",style:{"--min-width":"2em"},children:[o(h2,{colors:xT,range:e,setRange:n}),o("div",{children:" "}),o(zo,{color:"brand",selected:e==="brand",select:()=>n("brand")}),o(h2,{colors:kT,range:e,setRange:n})]})]}),h2=({range:e,setRange:n,colors:t})=>t.map(r=>o(zo,{color:r,select:()=>n(r),selected:e==r},r)),ts=({stop:e,setStop:n,className:t,title:r,prefix:a})=>d("div",{children:[d("div",{className:"flex space mar-b-0",children:[o("h3",{children:r}),o("h4",{children:Nn(e)&&d("code",{children:[a,"-",e]})})]}),o("div",{className:`${t} grid-fit gap-2`,style:{"--min-width":"2em"},children:bi(0,100,5).map(l=>o(zo,{color:`bgc-${l} bdc-${l} fgc-${l>50?"0":"100"} bgd-${l} bdd-${l} fgd-${l>50?"0":"100"}`,iconColor:l>50?"black":"white",selected:e===l,select:()=>n(l)},l))})]}),LL=[0,1,2,3,4,6,8,10,12,16,20,24,28,32],p2=({spacing:e,setSpacing:n,className:t,title:r,prefix:a,range:l})=>d("div",{children:[d("div",{className:"flex space mar-b-0",children:[o("h3",{children:r}),o("h4",{children:Nn(e)&&d("code",{children:[a,"-",e]})})]}),o("div",{className:`${t} grid-fit gap-2`,style:{"--min-width":"2em"},children:LL.map(i=>o(zo,{color:l,className:"wide",alt:o("span",{className:"font-mono",children:i}),selected:e===i,select:()=>n(i)},i))})]}),$L=["smallest","smaller","small","medium","large","larger","largest"],NL=({size:e,setSize:n,title:t="Size",range:r})=>d("div",{children:[d("div",{className:"flex space mar-b-0",children:[o("h3",{children:t}),o("h4",{children:Nn(e)&&o("code",{children:e})})]}),o("div",{className:"grid-fit gap-2",style:{"--min-width":"2em"},children:$L.map(a=>o(zo,{color:r,className:"wide",alt:o("span",{className:"font-mono",children:a}),selected:e===a,select:()=>n(a)},a))})]}),EL=[0,1,2,3,4,5,6,8,10],f2=({border:e,setBorder:n,className:t,title:r,prefix:a,range:l})=>d("div",{children:[d("div",{className:"flex space mar-b-0",children:[o("h3",{children:r}),o("h4",{children:Nn(e)&&d("code",{children:[a,"-",e]})})]}),o("div",{className:`${t} grid-fit gap-2`,style:{"--min-width":"2em"},children:EL.map(i=>o(zo,{color:l,className:"wide",alt:o("span",{className:"font-mono",children:i}),selected:e===i,select:()=>n(i)},i))})]}),IL=({checked:e,toggle:n,label:t})=>o("div",{className:"field",children:d("label",{className:"checkbox border no-focus wide",children:[o("input",{type:"checkbox",checked:e,onChange:n}),t]})}),ML=({shadow:e,setShadow:n,className:t,title:r="Shadow",prefix:a="shadow",range:l})=>d("div",{children:[d("div",{className:"flex space mar-b-0",children:[o("h3",{children:r}),o("h4",{children:Nn(e)&&d("code",{children:[a,"-",e]})})]}),o("div",{className:`${t} grid-fit gap-2`,style:{"--min-width":"2em"},children:bi(0,5).map(i=>o(zo,{color:l,className:"wide",alt:o("span",{className:"font-mono",children:i}),selected:e===i,select:()=>n(i)},i))})]}),RL=({options:e,setOption:n,toggleOption:t})=>d("div",{className:"surface-5 pad-4",children:[d("div",{className:"flex space baseline stack-desktop mar-b-2",children:[o("h2",{className:"mar-v-none",children:"Controls"}),o("h3",{className:"text-right mar-v-none",children:o("code",{children:'class="..."'})})]}),d("div",{className:"grid gap-2 small",children:[o(_L,{range:e.range,setRange:n("range")}),o(ts,{title:"Background Color Stop",prefix:"bgc",className:e.range,stop:e.bgc,setStop:n("bgc")}),o(ts,{title:"Foreground Color Stop",prefix:"fgc",className:e.range,stop:e.fgc,setStop:n("fgc")}),o(ts,{title:"Heading Color Stop",prefix:"hdc",className:e.range,stop:e.hdc,setStop:n("hdc")}),o(ts,{title:"Border Color Stop",prefix:"bdc",className:e.range,stop:e.bdc,setStop:n("bdc")}),o(f2,{title:"Border Width",prefix:"bdw",border:e.bdw,setBorder:n("bdw"),range:e.range}),o(f2,{title:"Border Radius",prefix:"bdr",border:e.bdr,setBorder:n("bdr"),range:e.range}),o(NL,{title:"Size",size:e.size,setSize:n("size"),range:e.range}),o(p2,{title:"Margin",prefix:"mar",className:e.mar,spacing:e.mar,setSpacing:n("mar"),range:e.range}),o(p2,{title:"Padding",prefix:"pad",className:e.pad,spacing:e.pad,setSpacing:n("pad"),range:e.range}),o(ML,{title:"Shadow",prefix:"shadow",shadow:e.shadow,setShadow:n("shadow"),range:e.range}),d("div",{children:[o("h3",{className:"mar-b-2",children:"Options"}),o("div",{className:"grid-fill",style:{"--min-width":"10rem"},children:o(IL,{label:"Show Border",checked:e.border,toggle:t("border")})})]})]})]}),PL=({options:e})=>{const n=AL(e);return d("div",{className:"surface-5 pad-4",children:[d("div",{className:"flex space baseline stack-desktop mar-b-2",children:[o("h2",{className:"mar-v-none",children:"Output"}),o("div",{className:"text-right",children:d("code",{children:['class="',n,'"']})})]}),o("div",{className:"border surface-4",style:{borderStyle:"dotted"},children:d("div",{className:n,children:[o("h3",{className:"mar-b-2",children:"It's One Louder"}),"You see, most... most blokes, you know, will be playing at ten. You're on ten here... all the way up... all the way up... all the way up. You're on ten on your guitar...where can you go from there? Where? Nowhere. Exactly. What we do is if we need that extra... push over the cliff... you know what we do? Put it up to eleven. Eleven. Exactly. One louder."]})})]})},AL=e=>wi([e.range,Nn(e.bgc)?`bgc-${e.bgc}`:"",Nn(e.fgc)?`fgc-${e.fgc}`:"",Nn(e.hdc)?`hdc-${e.hdc}`:"",Nn(e.bdc)?`bdc-${e.bdc}`:"",Nn(e.bdw)?`bdw-${e.bdw}`:"",Nn(e.bdr)?`bdr-${e.bdr}`:"",e.size,Nn(e.mar)?`mar-${e.mar}`:"",Nn(e.pad)?`pad-${e.pad}`:"",Nn(e.shadow)?`shadow-${e.shadow}`:"",e.border?"border":""]),FL=()=>{const[e,n]=D.useState({range:"brand",bgc:90,fgc:30,hdc:20,bdc:60,bdr:3,bdw:2,pad:4,mar:6,shadow:2,border:!0});return d("div",{className:"grid gap-8",children:[o(PL,{options:e}),o(RL,{options:e,setOption:a=>l=>n(i=>({...i,[a]:l})),toggleOption:a=>()=>n(l=>({...l,[a]:!l[a]}))})]})},OL=()=>d("div",{children:[o("h1",{children:"Demo"}),d("div",{className:"grid-2 gap-h-8 stack-desktop",children:[d("div",{children:[d("p",{children:["One of the novel approaches that Badger CSS employs is to provide CSS classes for each of the colors in the palette.  There are then further CSS classes that can be used to select the particular shade (or color"," ",'"stop") from that range to use for the background, foreground, heading and border colors.']}),d("p",{children:["One benefit of this approach is that it allows you to design color agnostic components that work with both light and dark themes, and can then be used with any color range.  For some examples, see the"," ",o(le,{to:"/components/alerts",text:"Alerts"})," and "," ",o(le,{to:"/components/tables",text:"Tables"})," pages"]}),o("p",{children:"Another more practical benefit is that it avoid the combinatorial explosion of CSS classes required to cover every combination of color range and stop for foreground, background, heading and border colors."})]}),d("div",{children:[o("p",{children:"Further utility classes are provided for selecting font size, border width and radius, margins, padding, shadows and various layout options. They're similar to what you'll find in other CSS toolkits."}),o("p",{children:"The choice about what is included and what isn't is entirely arbitrary but I lean towards minimalism and have only included the kind of utility classes that I use in most, if not all web sites. It's really easy for you to add in your own utility classes, or change the settings for the provided utilities, if you want to."}),o("p",{children:"So without further ado, click on the buttons below to select different colors and layout options.  Each one selects a CSS class which affects the way the output is displayed."})]})]}),o(FL,{})]}),zL=Object.freeze(Object.defineProperty({__proto__:null,default:OL},Symbol.toStringTag,{value:"Module"})),DL=`<div class="grid-fit gap-2">
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
`,BL=`<div class="grid-2 gap-2">
  <button class="brand" disabled>Brand:disabled</button>
  <button class="brand disabled">Brand.disabled</button>
  <button class="brand outline" disabled>Brand:disabled</button>
  <button class="brand outline disabled">Brand.disabled</button>
</div>
`,jL=`<div class="grid-fit gap-2">
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
`,UL=`<div class="grid-fit gap-2">
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
`,HL=`<div class="grid-fit gap-2">
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
`,WL=`<div class="grid-fit gap-2">
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
`,VL=`<div class="grid-fit gap-2">
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
`,GL=`<div class="grid-fit gap-2">
  <span class="button">Default</span>
  <span class="red shaded button">Red Shaded</span>
  <span class="orange outline button">Orange Outline</span>
</div>
`,YL=`<div class="flex gap-4">
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
</div>`,qL=`<div class="flex gap-4">
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
</div>`,ZL=`<div class="buttons">
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
  <button class="outline">
    Unselected
  </button>
  <button class="outline bdr-4">
    Unselected
  </button>
</div>
`,QL=()=>d("div",{className:"prose",children:[o("h1",{children:"Buttons"}),d("p",{children:["For the sake of accessibility, buttons should usually be rendered using the ",o("code",{children:"button"})," element.  I mean, that's what it's there for, right?  For those cases when you really need to make a link or something else look like a button you can add the"," ",o("code",{children:"button"})," class."]}),d("p",{children:["The default button color is grey. Any one of the color classes (e.g. ",o("code",{children:"red"}),", ",o("code",{children:"green"}),", etc) can be added to get different colors."]}),o("p",{children:"Button color stops automatically adapt between light and dark modes."}),o("h2",{children:"Default Style"}),o("p",{children:"The default button style is solid."}),o(I,{html:DL,language:"html",caption:"Buttons"}),o("h2",{children:"Bright Colors"}),d("p",{children:["Add the ",o("code",{children:"bright"})," CSS class to make the buttons brighter."]}),o(I,{html:jL,language:"html",caption:"Bright Buttons"}),o("h2",{children:"Dark Colors"}),d("p",{children:["Add the ",o("code",{children:"dark"})," CSS class to make the buttons darker."]}),o(I,{html:UL,language:"html",caption:"Dark Buttons"}),o("h2",{children:"Outline Style"}),d("p",{children:["Add the ",o("code",{children:"outline"})," class for outline buttons."]}),o(I,{html:HL,caption:"Outline Buttons"}),o("h2",{children:"Bare Naked Buttons"}),d("p",{children:["Add the ",o("code",{children:"bare"})," class for remove the background and border completely."]}),o(I,{html:WL,caption:"Bare Buttons"}),o("h2",{children:"Shaded Style"}),d("p",{children:["Add the ",o("code",{children:"shaded"})," class for subtly shaded buttons.  It's only a matter of time until flat design is out and shaded is back in. Be ahead of the curve!"]}),o(I,{html:VL,caption:"Shaded Buttons"}),o("h2",{children:"Button Class"}),d("p",{children:["Add the ",o("code",{children:"button"})," class to any non-button element to give it the button styling.  You can also add the ",o("code",{children:"outline"})," and/or"," ",o("code",{children:"shaded"})," classes."]}),o(I,{html:GL,caption:".button class"}),o("h2",{children:"Disabled Buttons"}),d("p",{children:["Add the ",o("code",{children:"disabled"})," attribute or ",o("code",{children:"disabled"})," CSS class to disable a button."]}),o(I,{html:BL,language:"html",caption:"Disabled Buttons"}),o("h2",{children:"Button Icons"}),d("p",{children:["You can add ",o(le,{to:"/components/icons",text:"SVG Icons"})," to buttons. You can set the margins for icons manually using the ",o("code",{children:"mar-N"})," ","classes described on the ",o(le,{to:"/utilities/spacing",text:"spacing"})," page. The ",o("code",{children:"on-left"})," and ",o("code",{children:"on-right"})," classes are provided as shortcuts and are equivalent to ",o("code",{children:"mar-r-2"})," and ",o("code",{children:"mar-l-2"}),", respectively."]}),o(I,{html:YL,caption:"Button icons"}),o("h2",{children:"Button Padding"}),o("p",{children:"The default padding for buttons is larger in the horizontal direction (4 units = 1em) than it is in the vertical direction (1 unit = 0.25em). This isn't as unbalanced as it initially seems when you factor in the line-height (1.5), which effectively results in  the vertical padding being equivalent to 2 units (0.5em)."}),d("p",{children:["If you have a button that only contains an icon then it can look a bit strange, as shown in the first button here.  Adding the ",o("code",{children:"pad-h-2"})," class to the button will reduce the horizontal padding to 2 units (0.5em) which will even things out, as shown in the second button.  Or you can add the ",o("code",{children:"icon"})," class to the button which will have the same effect and doesn't require you to remember how many units of padding you need to set."]}),o(I,{html:qL,caption:"Button padding"}),o("h2",{children:"Button Sets"}),d("p",{children:["Button sets can be created by adding a container with the"," ",o("code",{children:"buttons"})," class."]}),o(I,{html:ZL,caption:"Button Sets"})]}),KL=Object.freeze(Object.defineProperty({__proto__:null,default:QL},Symbol.toStringTag,{value:"Module"})),XL=`<label>
  <input type="checkbox">
  Option 1
</label>

<label class="checkbox">
  <input type="checkbox">
  Option 2
</label>
`,JL=`<label class="inline">
  <input type="checkbox">
  Option 1
</label>

<label class="inline checkbox">
  <input type="checkbox">
  Option 2
</label>
`,e$=`<label class="inline border">
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
    <input type="checkbox">
    Wide grid checkbox with gap
  </label>
</div>
`,n$=`<label>
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
`,t$=`<style>
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
</div>`,r$=()=>d("div",{className:"prose",children:[o("h1",{children:"Checkboxes"}),o("h2",{children:"Checkbox Class"}),d("p",{children:["The usual approach to creating a checkbox is to define a"," ",o("code",{children:"label"})," that contains an ",o("code",{children:"input"})," with a",o("code",{children:'type="label"'})," attribute.  This has the benefit that clicking on the label will toggle the checkbox input."]}),d("p",{children:["Badger-CSS identifies labels that include a checkbox input using the ",o("code",{children:":has()"})," CSS selector. All the major browsers currently support it, although Firefox was a bit late to the party, only adding support in v121 released on 19th December 2023."]}),d("p",{children:["As a work-around to support older versions of Firefox, you can add the ",o("code",{children:"checkbox"})," class to the ",o("code",{children:"label"}),"."]}),o(I,{html:XL,language:"html",caption:"Checkboxes"}),o("h2",{children:"Inline Checkboxes"}),d("p",{children:["Checkboxes are full-width by default. Add the ",o("code",{children:"inline"})," class to give it a fluid width."]}),o(I,{html:JL,language:"html",caption:"Inline Checkboxes"}),o("h2",{children:"Checkbox Borders"}),d("p",{children:["Add the ",o("code",{children:"border"})," class for borders.  You may need to manually add margins using the ",o(le,{to:"/utilities/spacing",text:"margin"})," utility classes, or contain multiple checkboxes using the "," ",o(le,{to:"/utilities/flexbox",text:"flexbox"})," or "," ",o(le,{to:"/utilities/grid",text:"grid"})," container classes and set the gap between elements."]}),o(I,{html:e$,language:"html",caption:"Border Checkboxes"}),o("h2",{children:"Checkbox Switches"}),d("p",{children:["Set the ",o("code",{children:"role"})," to ",o("code",{children:"switch"})," to display the checkbox as a switch.  Add the ",o("code",{children:"round"})," class for a fully rounded switch or ",o("code",{children:"square"})," for square corners."]}),o("p",{children:"The background color for enabled switches will be based on your brand color.  There are a number of CSS properties you can set to customise the style."}),o(I,{html:n$,language:"html",caption:"Checkbox Switch"}),o("h2",{children:"Custom Checkboxes"}),o(I,{html:t$,language:"html",caption:"Custom Checkboxes"})]}),o$=Object.freeze(Object.defineProperty({__proto__:null,default:r$},Symbol.toStringTag,{value:"Module"})),a$=`<div class="field">
  <label>Label</label>
  <input type="text" value="Input value">
  <div class="help">Help message</div>
</div>`,l$=`<div class="field">
  <label>Inline Text Input</label>
  <input type="text" class="inline">
  <div class="help">Help message</div>
</div>

<div class="field mar-t-8">
  <label>Wide Text Input</label>
  <input type="text">
  <div class="help">Help message</div>
</div>
`,i$=`<div class="field">
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
</div>`,s$=`<div class="field">
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
`,d$=`<div class="field invalid">
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
</div>`,c$=`<div class="field valid">
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
</div>`,u$=`<div class="field required">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
<div class="field required">
  <label>Terms</label>
  <label class="Xcheckbox">
    <input type="checkbox">
    I accept the terms and conditions
  </label>
</div>`,h$=`<style>
  .mandatory-text {
    --required-text: 'MANDATORY';
  }
</style>
<div class="field required mandatory-text">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
`,p$=`<div class="field optional">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>`,f$=`<style>
  .not-required {
    --optional-text: 'NOT REQUIRED';
  }
</style>
<div class="field optional not-required">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
`,g$=`// define your own text for the
// required and/or optional labels...
$field-required-text: '"Important"';
$field-optional-text: '"Not Required"';

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,v$=()=>d("div",{className:"prose",children:[o("h1",{children:"Form Fields"}),o("p",{children:"Form fields are usually comprised of more than just an input. A label is usually present and sometimes an additional help message too."}),o("h2",{children:"Field Class"}),d("p",{children:["Create a container with the ",o("code",{children:"field"})," class. You can then add a ",o("code",{children:"label"})," for the field. If you want to display additional help for the input then give it the ",o("code",{children:"help"})," class."]}),o(I,{html:a$,language:"html",caption:"Form Field"}),o("h2",{children:"Field Width"}),d("p",{children:["Fields are wide by default, but you can add the ",o("code",{children:"inline"})," class to the input element or containing label in the case of checkboxes and radio buttons."]}),o(I,{html:l$,language:"html",caption:"Text Field"}),o(I,{html:i$,language:"html",caption:"Checkbox Field"}),o(I,{html:s$,language:"html",caption:"Radio Button Field"}),o("h2",{children:"Invalid Field"}),d("p",{children:["Add the ",o("code",{children:"invalid"})," class to the ",o("code",{children:"field"})," to indicate fields that are invalid."]}),o(I,{html:d$,language:"html",caption:"Invalid Field"}),o("h2",{children:"Valid Field"}),d("p",{children:["Add the ",o("code",{children:"valid"})," class to the ",o("code",{children:"field"})," to indicate fields that have passed validation."]}),o(I,{html:c$,language:"html",caption:"Valid Field"}),o("h2",{children:"Required Field"}),d("p",{children:["Add the ",o("code",{children:"required"})," class to the ",o("code",{children:"field"})," if you want an additional tag added to the label."]}),o(I,{html:u$,language:"html",caption:"Required Field"}),d("p",{children:["You can use the ",o("code",{children:"--required-text"})," CSS variable to change the text displayed."]}),o(I,{html:h$,language:"html",caption:"Custom Required Field"}),o("h2",{children:"Optional Field"}),d("p",{children:["Add the ",o("code",{children:"optional"})," class to the ",o("code",{children:"field"})," if you want an additional tag added to the label."]}),o(I,{html:p$,language:"html",caption:"Optional Field"}),d("p",{children:["You can use the ",o("code",{children:"--optional-text"})," CSS variable to change the text displayed."]}),o(I,{html:f$,language:"html",caption:"Custom Optional Field"}),d(de,{children:[d("p",{children:["You can also change the text displayed for either the required and/or optional labels on a global level by setting the"," ",o("code",{children:"$field-required-text"})," and ",o("code",{children:"$field-optional-text"})," ","SASS variables. Be warned that you need to quote the values twice, so that the value defined includes a set of quotes, as shown here."]}),o(ze,{code:g$,caption:"Required Text",language:"scss",className:"mar-b-8",expand:!0})]})]}),m$=Object.freeze(Object.defineProperty({__proto__:null,default:v$},Symbol.toStringTag,{value:"Module"})),b$=`<fieldset>
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
</fieldset>`,y$=()=>d("div",{className:"prose",children:[o("h1",{children:"Form Field Sets"}),d("p",{children:["You can group related fields together in a ",o("code",{children:"fieldset"}),"."]}),o("h2",{children:"Fieldset Container"}),o(I,{html:b$,language:"html",caption:"Form Fieldset"})]}),w$=Object.freeze(Object.defineProperty({__proto__:null,default:y$},Symbol.toStringTag,{value:"Module"})),g2=`<div class="field">
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

<div class="text-right">
  <button class="solid brand">Submit</button>
</div>
`,x$=`<div class="field optional">
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
`,k$=`<div class="grid-1 gap-4">
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
</div>`,C$=["smallest","smaller","small","medium","large","larger","largest"],S$=({size:e,setSize:n})=>o("div",{children:C$.map(t=>d("label",{children:[o("input",{type:"radio",name:"size",value:t,checked:t===e,onChange:r=>n(r.target.value)}),t]},t))}),T$=()=>{const[e,n]=D.useState({});return d("div",{className:"example flex gap-8 stack-desktop",children:[o("div",{className:"split-4",children:o(_$,{options:e,setOption:a=>l=>n(i=>({...i,[a]:l})),toggleOption:a=>()=>n(l=>({...l,[a]:!l[a]}))})}),d("div",{className:"split-3-4",children:[o("h3",{className:"mar-b-2",children:"Output"}),o("div",{className:"output",children:o(L$,{options:e})})]})]})},_$=({options:e,setOption:n})=>{const t=n("size"),a=`<form class="${k3(e,{},e.size)}">
  ...
</form>`;return d("div",{children:[o("h3",{className:"mar-b-2",children:"Select Size"}),o("div",{className:"border surface-4 pad-4 bdr-1",children:o(S$,{size:e.size,setSize:t})}),o("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),o(ze,{code:a,language:"html",expand:!0})]})},L$=({options:e})=>{const n=x3(e,{},e.size);return d("form",{className:n,children:[d("div",{className:"field",children:[o("label",{children:"Text Input"}),d("div",{className:"flex end gap-4",children:[o("input",{type:"text",name:"input-1",className:"wide",placeholder:"Search"}),o("button",{className:"brand outline",children:"Search"})]})]}),d("div",{className:"field",children:[o("label",{children:"Radio Buttons"}),d("div",{className:"flex gap-4 stack-tablet",children:[d("label",{className:"radio border",children:[o("input",{type:"radio",name:"color"}),"Nigel"]}),d("label",{className:"radio border",children:[o("input",{type:"radio",name:"color"}),"David"]}),d("label",{className:"radio border",children:[o("input",{type:"radio",name:"color"}),"Derek"]})]})]}),d("div",{className:"grid-2 gap-4 stack-tablet",children:[d("div",{className:"field",children:[o("label",{children:"Select Input"}),d("select",{name:"animal",className:"wide",required:!0,children:[o("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Choose an animal"}),o("option",{value:"ant",children:"Ant"}),o("option",{value:"badger",children:"Badger"}),o("option",{value:"cat",children:"Cat"}),o("option",{value:"dog",children:"Dog"}),o("option",{value:"elephant",children:"Elephant"}),o("option",{value:"ferret",children:"Ferret"}),o("option",{value:"goldfish",children:"Goldfish"})]})]}),d("div",{className:"field",children:[o("label",{children:"Checkbox"}),d("label",{className:"checkbox border",children:[o("input",{type:"checkbox"}),"I like badgers"]})]})]}),d("label",{className:"checkbox inline",children:[o("input",{type:"checkbox",role:"switch"}),"Turn it on"]}),d("label",{className:"checkbox inline",children:[o("input",{type:"checkbox",role:"switch"}),"Turn it on again"]}),o("div",{className:"text-right",children:o("button",{className:"solid brand",children:"Submit"})})]})};var Ha={};/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L3=D;function me(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jn=Object.prototype.hasOwnProperty,$$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v2={},m2={};function $3(e){return Jn.call(m2,e)?!0:Jn.call(v2,e)?!1:$$.test(e)?m2[e]=!0:(v2[e]=!0,!1)}function qn(e,n,t,r,a,l,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=i}var Pn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pn[e]=new qn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Pn[n]=new qn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pn[e]=new qn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pn[e]=new qn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pn[e]=new qn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pn[e]=new qn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pn[e]=new qn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pn[e]=new qn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pn[e]=new qn(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bp=/[\-:]([a-z])/g;function jp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Bp,jp);Pn[n]=new qn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Bp,jp);Pn[n]=new qn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Bp,jp);Pn[n]=new qn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pn[e]=new qn(e,1,!1,e.toLowerCase(),null,!1,!1)});Pn.xlinkHref=new qn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pn[e]=new qn(e,1,!1,e.toLowerCase(),null,!0,!0)});var ks={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},N$=["Webkit","ms","Moz","O"];Object.keys(ks).forEach(function(e){N$.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ks[n]=ks[e]})});var E$=/["'&<>]/;function Wn(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var n=E$.exec(e);if(n){var t="",r,a=0;for(r=n.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#x27;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}a!==r&&(t+=e.substring(a,r)),a=r+1,t+=n}e=a!==r?t+e.substring(a,r):t}return e}var I$=/([A-Z])/g,M$=/^ms-/,rh=Array.isArray;function ar(e,n){return{insertionMode:e,selectedValue:n}}function R$(e,n,t){switch(n){case"select":return ar(1,t.value!=null?t.value:t.defaultValue);case"svg":return ar(2,null);case"math":return ar(3,null);case"foreignObject":return ar(1,null);case"table":return ar(4,null);case"thead":case"tbody":case"tfoot":return ar(5,null);case"colgroup":return ar(7,null);case"tr":return ar(6,null)}return 4<=e.insertionMode||e.insertionMode===0?ar(1,null):e}var b2=new Map;function N3(e,n,t){if(typeof t!="object")throw Error(me(62));n=!0;for(var r in t)if(Jn.call(t,r)){var a=t[r];if(a!=null&&typeof a!="boolean"&&a!==""){if(r.indexOf("--")===0){var l=Wn(r);a=Wn((""+a).trim())}else{l=r;var i=b2.get(l);i!==void 0||(i=Wn(l.replace(I$,"-$1").toLowerCase().replace(M$,"-ms-")),b2.set(l,i)),l=i,a=typeof a=="number"?a===0||Jn.call(ks,r)?""+a:a+"px":Wn((""+a).trim())}n?(n=!1,e.push(' style="',l,":",a)):e.push(";",l,":",a)}}n||e.push('"')}function it(e,n,t,r){switch(t){case"style":N3(e,n,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N"){if(n=Pn.hasOwnProperty(t)?Pn[t]:null,n!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!n.acceptsBooleans)return}switch(t=n.attributeName,n.type){case 3:r&&e.push(" ",t,'=""');break;case 4:r===!0?e.push(" ",t,'=""'):r!==!1&&e.push(" ",t,'="',Wn(r),'"');break;case 5:isNaN(r)||e.push(" ",t,'="',Wn(r),'"');break;case 6:!isNaN(r)&&1<=r&&e.push(" ",t,'="',Wn(r),'"');break;default:n.sanitizeURL&&(r=""+r),e.push(" ",t,'="',Wn(r),'"')}}else if($3(t)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(n=t.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-")return}e.push(" ",t,'="',Wn(r),'"')}}}function Cs(e,n,t){if(n!=null){if(t!=null)throw Error(me(60));if(typeof n!="object"||!("__html"in n))throw Error(me(61));n=n.__html,n!=null&&e.push(""+n)}}function P$(e){var n="";return L3.Children.forEach(e,function(t){t!=null&&(n+=t)}),n}function Wc(e,n,t,r){e.push(Ht(t));var a=t=null,l;for(l in n)if(Jn.call(n,l)){var i=n[l];if(i!=null)switch(l){case"children":t=i;break;case"dangerouslySetInnerHTML":a=i;break;default:it(e,r,l,i)}}return e.push(">"),Cs(e,a,t),typeof t=="string"?(e.push(Wn(t)),null):t}var A$=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,y2=new Map;function Ht(e){var n=y2.get(e);if(n===void 0){if(!A$.test(e))throw Error(me(65,e));n="<"+e,y2.set(e,n)}return n}function F$(e,n,t,r,a){switch(n){case"select":e.push(Ht("select"));var l=null,i=null;for(v in t)if(Jn.call(t,v)){var s=t[v];if(s!=null)switch(v){case"children":l=s;break;case"dangerouslySetInnerHTML":i=s;break;case"defaultValue":case"value":break;default:it(e,r,v,s)}}return e.push(">"),Cs(e,i,l),l;case"option":i=a.selectedValue,e.push(Ht("option"));var u=s=null,p=null,v=null;for(l in t)if(Jn.call(t,l)){var y=t[l];if(y!=null)switch(l){case"children":s=y;break;case"selected":p=y;break;case"dangerouslySetInnerHTML":v=y;break;case"value":u=y;default:it(e,r,l,y)}}if(i!=null)if(t=u!==null?""+u:P$(s),rh(i)){for(r=0;r<i.length;r++)if(""+i[r]===t){e.push(' selected=""');break}}else""+i===t&&e.push(' selected=""');else p&&e.push(' selected=""');return e.push(">"),Cs(e,v,s),s;case"textarea":e.push(Ht("textarea")),v=i=l=null;for(s in t)if(Jn.call(t,s)&&(u=t[s],u!=null))switch(s){case"children":v=u;break;case"value":l=u;break;case"defaultValue":i=u;break;case"dangerouslySetInnerHTML":throw Error(me(91));default:it(e,r,s,u)}if(l===null&&i!==null&&(l=i),e.push(">"),v!=null){if(l!=null)throw Error(me(92));if(rh(v)&&1<v.length)throw Error(me(93));l=""+v}return typeof l=="string"&&l[0]===`
`&&e.push(`
`),l!==null&&e.push(Wn(""+l)),null;case"input":e.push(Ht("input")),u=v=s=l=null;for(i in t)if(Jn.call(t,i)&&(p=t[i],p!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(me(399,"input"));case"defaultChecked":u=p;break;case"defaultValue":s=p;break;case"checked":v=p;break;case"value":l=p;break;default:it(e,r,i,p)}return v!==null?it(e,r,"checked",v):u!==null&&it(e,r,"checked",u),l!==null?it(e,r,"value",l):s!==null&&it(e,r,"value",s),e.push("/>"),null;case"menuitem":e.push(Ht("menuitem"));for(var k in t)if(Jn.call(t,k)&&(l=t[k],l!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(me(400));default:it(e,r,k,l)}return e.push(">"),null;case"title":e.push(Ht("title")),l=null;for(y in t)if(Jn.call(t,y)&&(i=t[y],i!=null))switch(y){case"children":l=i;break;case"dangerouslySetInnerHTML":throw Error(me(434));default:it(e,r,y,i)}return e.push(">"),l;case"listing":case"pre":e.push(Ht(n)),i=l=null;for(u in t)if(Jn.call(t,u)&&(s=t[u],s!=null))switch(u){case"children":l=s;break;case"dangerouslySetInnerHTML":i=s;break;default:it(e,r,u,s)}if(e.push(">"),i!=null){if(l!=null)throw Error(me(60));if(typeof i!="object"||!("__html"in i))throw Error(me(61));t=i.__html,t!=null&&(typeof t=="string"&&0<t.length&&t[0]===`
`?e.push(`
`,t):e.push(""+t))}return typeof l=="string"&&l[0]===`
`&&e.push(`
`),l;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Ht(n));for(var E in t)if(Jn.call(t,E)&&(l=t[E],l!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(me(399,n));default:it(e,r,E,l)}return e.push("/>"),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Wc(e,t,n,r);case"html":return a.insertionMode===0&&e.push("<!DOCTYPE html>"),Wc(e,t,n,r);default:if(n.indexOf("-")===-1&&typeof t.is!="string")return Wc(e,t,n,r);e.push(Ht(n)),i=l=null;for(p in t)if(Jn.call(t,p)&&(s=t[p],s!=null))switch(p){case"children":l=s;break;case"dangerouslySetInnerHTML":i=s;break;case"style":N3(e,r,s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:$3(p)&&typeof s!="function"&&typeof s!="symbol"&&e.push(" ",p,'="',Wn(s),'"')}return e.push(">"),Cs(e,i,l),l}}function w2(e,n,t){if(e.push('<!--$?--><template id="'),t===null)throw Error(me(395));return e.push(t),e.push('"></template>')}function O$(e,n,t,r){switch(t.insertionMode){case 0:case 1:return e.push('<div hidden id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 2:return e.push('<svg aria-hidden="true" style="display:none" id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 3:return e.push('<math aria-hidden="true" style="display:none" id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 4:return e.push('<table hidden id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 5:return e.push('<table hidden><tbody id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 6:return e.push('<table hidden><tr id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 7:return e.push('<table hidden><colgroup id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');default:throw Error(me(397))}}function z$(e,n){switch(n.insertionMode){case 0:case 1:return e.push("</div>");case 2:return e.push("</svg>");case 3:return e.push("</math>");case 4:return e.push("</table>");case 5:return e.push("</tbody></table>");case 6:return e.push("</tr></table>");case 7:return e.push("</colgroup></table>");default:throw Error(me(397))}}var D$=/[<\u2028\u2029]/g;function Vc(e){return JSON.stringify(e).replace(D$,function(n){switch(n){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}function B$(e,n){return n=n===void 0?"":n,{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:n+"P:",segmentPrefix:n+"S:",boundaryPrefix:n+"B:",idPrefix:n,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:e}}function x2(e,n,t,r){return t.generateStaticMarkup?(e.push(Wn(n)),!1):(n===""?e=r:(r&&e.push("<!-- -->"),e.push(Wn(n)),e=!0),e)}var zl=Object.assign,j$=Symbol.for("react.element"),E3=Symbol.for("react.portal"),I3=Symbol.for("react.fragment"),M3=Symbol.for("react.strict_mode"),R3=Symbol.for("react.profiler"),P3=Symbol.for("react.provider"),A3=Symbol.for("react.context"),F3=Symbol.for("react.forward_ref"),O3=Symbol.for("react.suspense"),z3=Symbol.for("react.suspense_list"),D3=Symbol.for("react.memo"),Up=Symbol.for("react.lazy"),U$=Symbol.for("react.scope"),H$=Symbol.for("react.debug_trace_mode"),W$=Symbol.for("react.legacy_hidden"),V$=Symbol.for("react.default_value"),k2=Symbol.iterator;function oh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I3:return"Fragment";case E3:return"Portal";case R3:return"Profiler";case M3:return"StrictMode";case O3:return"Suspense";case z3:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case A3:return(e.displayName||"Context")+".Consumer";case P3:return(e._context.displayName||"Context")+".Provider";case F3:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case D3:return n=e.displayName||null,n!==null?n:oh(e.type)||"Memo";case Up:n=e._payload,e=e._init;try{return oh(e(n))}catch{}}return null}var B3={};function C2(e,n){if(e=e.contextTypes,!e)return B3;var t={},r;for(r in e)t[r]=n[r];return t}var ko=null;function Ad(e,n){if(e!==n){e.context._currentValue2=e.parentValue,e=e.parent;var t=n.parent;if(e===null){if(t!==null)throw Error(me(401))}else{if(t===null)throw Error(me(401));Ad(e,t)}n.context._currentValue2=n.value}}function j3(e){e.context._currentValue2=e.parentValue,e=e.parent,e!==null&&j3(e)}function U3(e){var n=e.parent;n!==null&&U3(n),e.context._currentValue2=e.value}function H3(e,n){if(e.context._currentValue2=e.parentValue,e=e.parent,e===null)throw Error(me(402));e.depth===n.depth?Ad(e,n):H3(e,n)}function W3(e,n){var t=n.parent;if(t===null)throw Error(me(402));e.depth===t.depth?Ad(e,t):W3(e,t),n.context._currentValue2=n.value}function od(e){var n=ko;n!==e&&(n===null?U3(e):e===null?j3(n):n.depth===e.depth?Ad(n,e):n.depth>e.depth?H3(n,e):W3(n,e),ko=e)}var S2={isMounted:function(){return!1},enqueueSetState:function(e,n){e=e._reactInternals,e.queue!==null&&e.queue.push(n)},enqueueReplaceState:function(e,n){e=e._reactInternals,e.replace=!0,e.queue=[n]},enqueueForceUpdate:function(){}};function T2(e,n,t,r){var a=e.state!==void 0?e.state:null;e.updater=S2,e.props=t,e.state=a;var l={queue:[],replace:!1};e._reactInternals=l;var i=n.contextType;if(e.context=typeof i=="object"&&i!==null?i._currentValue2:r,i=n.getDerivedStateFromProps,typeof i=="function"&&(i=i(t,a),a=i==null?a:zl({},a,i),e.state=a),typeof n.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(n=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),n!==e.state&&S2.enqueueReplaceState(e,e.state,null),l.queue!==null&&0<l.queue.length)if(n=l.queue,i=l.replace,l.queue=null,l.replace=!1,i&&n.length===1)e.state=n[0];else{for(l=i?n[0]:e.state,a=!0,i=i?1:0;i<n.length;i++){var s=n[i];s=typeof s=="function"?s.call(e,l,t,r):s,s!=null&&(a?(a=!1,l=zl({},l,s)):zl(l,s))}e.state=l}else l.queue=null}var G$={id:1,overflow:""};function ah(e,n,t){var r=e.id;e=e.overflow;var a=32-Ss(r)-1;r&=~(1<<a),t+=1;var l=32-Ss(n)+a;if(30<l){var i=a-a%5;return l=(r&(1<<i)-1).toString(32),r>>=i,a-=i,{id:1<<32-Ss(n)+a|t<<a|r,overflow:l+e}}return{id:1<<l|t<<a|r,overflow:e}}var Ss=Math.clz32?Math.clz32:Z$,Y$=Math.log,q$=Math.LN2;function Z$(e){return e>>>=0,e===0?32:31-(Y$(e)/q$|0)|0}function Q$(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var K$=typeof Object.is=="function"?Object.is:Q$,mr=null,Hp=null,Ts=null,We=null,Sl=!1,ad=!1,ii=0,Ar=null,Fd=0;function go(){if(mr===null)throw Error(me(321));return mr}function _2(){if(0<Fd)throw Error(me(312));return{memoizedState:null,queue:null,next:null}}function Wp(){return We===null?Ts===null?(Sl=!1,Ts=We=_2()):(Sl=!0,We=Ts):We.next===null?(Sl=!1,We=We.next=_2()):(Sl=!0,We=We.next),We}function Vp(){Hp=mr=null,ad=!1,Ts=null,Fd=0,We=Ar=null}function V3(e,n){return typeof n=="function"?n(e):n}function L2(e,n,t){if(mr=go(),We=Wp(),Sl){var r=We.queue;if(n=r.dispatch,Ar!==null&&(t=Ar.get(r),t!==void 0)){Ar.delete(r),r=We.memoizedState;do r=e(r,t.action),t=t.next;while(t!==null);return We.memoizedState=r,[r,n]}return[We.memoizedState,n]}return e=e===V3?typeof n=="function"?n():n:t!==void 0?t(n):n,We.memoizedState=e,e=We.queue={last:null,dispatch:null},e=e.dispatch=X$.bind(null,mr,e),[We.memoizedState,e]}function $2(e,n){if(mr=go(),We=Wp(),n=n===void 0?null:n,We!==null){var t=We.memoizedState;if(t!==null&&n!==null){var r=t[1];e:if(r===null)r=!1;else{for(var a=0;a<r.length&&a<n.length;a++)if(!K$(n[a],r[a])){r=!1;break e}r=!0}if(r)return t[0]}}return e=e(),We.memoizedState=[e,n],e}function X$(e,n,t){if(25<=Fd)throw Error(me(301));if(e===mr)if(ad=!0,e={action:t,next:null},Ar===null&&(Ar=new Map),t=Ar.get(n),t===void 0)Ar.set(n,e);else{for(n=t;n.next!==null;)n=n.next;n.next=e}}function J$(){throw Error(me(394))}function rs(){}var N2={readContext:function(e){return e._currentValue2},useContext:function(e){return go(),e._currentValue2},useMemo:$2,useReducer:L2,useRef:function(e){mr=go(),We=Wp();var n=We.memoizedState;return n===null?(e={current:e},We.memoizedState=e):n},useState:function(e){return L2(V3,e)},useInsertionEffect:rs,useLayoutEffect:function(){},useCallback:function(e,n){return $2(function(){return e},n)},useImperativeHandle:rs,useEffect:rs,useDebugValue:rs,useDeferredValue:function(e){return go(),e},useTransition:function(){return go(),[!1,J$]},useId:function(){var e=Hp.treeContext,n=e.overflow;e=e.id,e=(e&~(1<<32-Ss(e)-1)).toString(32)+n;var t=_s;if(t===null)throw Error(me(404));return n=ii++,e=":"+t.idPrefix+"R"+e,0<n&&(e+="H"+n.toString(32)),e+":"},useMutableSource:function(e,n){return go(),n(e._source)},useSyncExternalStore:function(e,n,t){if(t===void 0)throw Error(me(407));return t()}},_s=null,Gc=L3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function eN(e){return console.error(e),null}function Tl(){}function nN(e,n,t,r,a,l,i,s,u){var p=[],v=new Set;return n={destination:null,responseState:n,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:v,pingedTasks:p,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:a===void 0?eN:a,onAllReady:l===void 0?Tl:l,onShellReady:i===void 0?Tl:i,onShellError:s===void 0?Tl:s,onFatalError:u===void 0?Tl:u},t=ld(n,0,null,t,!1,!1),t.parentFlushed=!0,e=Gp(n,e,null,t,v,B3,null,G$),p.push(e),n}function Gp(e,n,t,r,a,l,i,s){e.allPendingTasks++,t===null?e.pendingRootTasks++:t.pendingTasks++;var u={node:n,ping:function(){var p=e.pingedTasks;p.push(u),p.length===1&&q3(e)},blockedBoundary:t,blockedSegment:r,abortSet:a,legacyContext:l,context:i,treeContext:s};return a.add(u),u}function ld(e,n,t,r,a,l){return{status:0,id:-1,index:n,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:t,lastPushedText:a,textEmbedded:l}}function si(e,n){if(e=e.onError(n),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function id(e,n){var t=e.onShellError;t(n),t=e.onFatalError,t(n),e.destination!==null?(e.status=2,e.destination.destroy(n)):(e.status=1,e.fatalError=n)}function E2(e,n,t,r,a){for(mr={},Hp=n,ii=0,e=t(r,a);ad;)ad=!1,ii=0,Fd+=1,We=null,e=t(r,a);return Vp(),e}function I2(e,n,t,r){var a=t.render(),l=r.childContextTypes;if(l!=null){var i=n.legacyContext;if(typeof t.getChildContext!="function")r=i;else{t=t.getChildContext();for(var s in t)if(!(s in l))throw Error(me(108,oh(r)||"Unknown",s));r=zl({},i,t)}n.legacyContext=r,ct(e,n,a),n.legacyContext=i}else ct(e,n,a)}function M2(e,n){if(e&&e.defaultProps){n=zl({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function lh(e,n,t,r,a){if(typeof t=="function")if(t.prototype&&t.prototype.isReactComponent){a=C2(t,n.legacyContext);var l=t.contextType;l=new t(r,typeof l=="object"&&l!==null?l._currentValue2:a),T2(l,t,r,a),I2(e,n,l,t)}else{l=C2(t,n.legacyContext),a=E2(e,n,t,r,l);var i=ii!==0;if(typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0)T2(a,t,r,l),I2(e,n,a,t);else if(i){r=n.treeContext,n.treeContext=ah(r,1,0);try{ct(e,n,a)}finally{n.treeContext=r}}else ct(e,n,a)}else if(typeof t=="string"){switch(a=n.blockedSegment,l=F$(a.chunks,t,r,e.responseState,a.formatContext),a.lastPushedText=!1,i=a.formatContext,a.formatContext=R$(i,t,r),ih(e,n,l),a.formatContext=i,t){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:a.chunks.push("</",t,">")}a.lastPushedText=!1}else{switch(t){case W$:case H$:case M3:case R3:case I3:ct(e,n,r.children);return;case z3:ct(e,n,r.children);return;case U$:throw Error(me(343));case O3:e:{t=n.blockedBoundary,a=n.blockedSegment,l=r.fallback,r=r.children,i=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:i,errorDigest:null},u=ld(e,a.chunks.length,s,a.formatContext,!1,!1);a.children.push(u),a.lastPushedText=!1;var p=ld(e,0,null,a.formatContext,!1,!1);p.parentFlushed=!0,n.blockedBoundary=s,n.blockedSegment=p;try{if(ih(e,n,r),e.responseState.generateStaticMarkup||p.lastPushedText&&p.textEmbedded&&p.chunks.push("<!-- -->"),p.status=1,sd(s,p),s.pendingTasks===0)break e}catch(v){p.status=4,s.forceClientRender=!0,s.errorDigest=si(e,v)}finally{n.blockedBoundary=t,n.blockedSegment=a}n=Gp(e,l,t,u,i,n.legacyContext,n.context,n.treeContext),e.pingedTasks.push(n)}return}if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F3:if(r=E2(e,n,t.render,r,a),ii!==0){t=n.treeContext,n.treeContext=ah(t,1,0);try{ct(e,n,r)}finally{n.treeContext=t}}else ct(e,n,r);return;case D3:t=t.type,r=M2(t,r),lh(e,n,t,r,a);return;case P3:if(a=r.children,t=t._context,r=r.value,l=t._currentValue2,t._currentValue2=r,i=ko,ko=r={parent:i,depth:i===null?0:i.depth+1,context:t,parentValue:l,value:r},n.context=r,ct(e,n,a),e=ko,e===null)throw Error(me(403));r=e.parentValue,e.context._currentValue2=r===V$?e.context._defaultValue:r,e=ko=e.parent,n.context=e;return;case A3:r=r.children,r=r(t._currentValue2),ct(e,n,r);return;case Up:a=t._init,t=a(t._payload),r=M2(t,r),lh(e,n,t,r,void 0);return}throw Error(me(130,t==null?t:typeof t,""))}}function ct(e,n,t){if(n.node=t,typeof t=="object"&&t!==null){switch(t.$$typeof){case j$:lh(e,n,t.type,t.props,t.ref);return;case E3:throw Error(me(257));case Up:var r=t._init;t=r(t._payload),ct(e,n,t);return}if(rh(t)){R2(e,n,t);return}if(t===null||typeof t!="object"?r=null:(r=k2&&t[k2]||t["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(t))){if(t=r.next(),!t.done){var a=[];do a.push(t.value),t=r.next();while(!t.done);R2(e,n,a)}return}throw e=Object.prototype.toString.call(t),Error(me(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}typeof t=="string"?(r=n.blockedSegment,r.lastPushedText=x2(n.blockedSegment.chunks,t,e.responseState,r.lastPushedText)):typeof t=="number"&&(r=n.blockedSegment,r.lastPushedText=x2(n.blockedSegment.chunks,""+t,e.responseState,r.lastPushedText))}function R2(e,n,t){for(var r=t.length,a=0;a<r;a++){var l=n.treeContext;n.treeContext=ah(l,r,a);try{ih(e,n,t[a])}finally{n.treeContext=l}}}function ih(e,n,t){var r=n.blockedSegment.formatContext,a=n.legacyContext,l=n.context;try{return ct(e,n,t)}catch(u){if(Vp(),typeof u=="object"&&u!==null&&typeof u.then=="function"){t=u;var i=n.blockedSegment,s=ld(e,i.chunks.length,null,i.formatContext,i.lastPushedText,!0);i.children.push(s),i.lastPushedText=!1,e=Gp(e,n.node,n.blockedBoundary,s,n.abortSet,n.legacyContext,n.context,n.treeContext).ping,t.then(e,e),n.blockedSegment.formatContext=r,n.legacyContext=a,n.context=l,od(l)}else throw n.blockedSegment.formatContext=r,n.legacyContext=a,n.context=l,od(l),u}}function tN(e){var n=e.blockedBoundary;e=e.blockedSegment,e.status=3,Y3(this,n,e)}function G3(e,n,t){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(n.allPendingTasks--,n.status!==2&&(n.status=2,n.destination!==null&&n.destination.push(null))):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=t===void 0?Error(me(432)):t,r.errorDigest=n.onError(e),r.parentFlushed&&n.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(a){return G3(a,n,t)}),r.fallbackAbortableTasks.clear(),n.allPendingTasks--,n.allPendingTasks===0&&(r=n.onAllReady,r()))}function sd(e,n){if(n.chunks.length===0&&n.children.length===1&&n.children[0].boundary===null){var t=n.children[0];t.id=n.id,t.parentFlushed=!0,t.status===1&&sd(e,t)}else e.completedSegments.push(n)}function Y3(e,n,t){if(n===null){if(t.parentFlushed){if(e.completedRootSegment!==null)throw Error(me(389));e.completedRootSegment=t}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=Tl,n=e.onShellReady,n())}else n.pendingTasks--,n.forceClientRender||(n.pendingTasks===0?(t.parentFlushed&&t.status===1&&sd(n,t),n.parentFlushed&&e.completedBoundaries.push(n),n.fallbackAbortableTasks.forEach(tN,e),n.fallbackAbortableTasks.clear()):t.parentFlushed&&t.status===1&&(sd(n,t),n.completedSegments.length===1&&n.parentFlushed&&e.partialBoundaries.push(n)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function q3(e){if(e.status!==2){var n=ko,t=Gc.current;Gc.current=N2;var r=_s;_s=e.responseState;try{var a=e.pingedTasks,l;for(l=0;l<a.length;l++){var i=a[l],s=e,u=i.blockedSegment;if(u.status===0){od(i.context);try{ct(s,i,i.node),s.responseState.generateStaticMarkup||u.lastPushedText&&u.textEmbedded&&u.chunks.push("<!-- -->"),i.abortSet.delete(i),u.status=1,Y3(s,i.blockedBoundary,u)}catch(N){if(Vp(),typeof N=="object"&&N!==null&&typeof N.then=="function"){var p=i.ping;N.then(p,p)}else{i.abortSet.delete(i),u.status=4;var v=i.blockedBoundary,y=N,k=si(s,y);if(v===null?id(s,y):(v.pendingTasks--,v.forceClientRender||(v.forceClientRender=!0,v.errorDigest=k,v.parentFlushed&&s.clientRenderedBoundaries.push(v))),s.allPendingTasks--,s.allPendingTasks===0){var E=s.onAllReady;E()}}}finally{}}}a.splice(0,l),e.destination!==null&&Yp(e,e.destination)}catch(N){si(e,N),id(e,N)}finally{_s=r,Gc.current=t,t===N2&&od(n)}}}function os(e,n,t){switch(t.parentFlushed=!0,t.status){case 0:var r=t.id=e.nextSegmentId++;return t.lastPushedText=!1,t.textEmbedded=!1,e=e.responseState,n.push('<template id="'),n.push(e.placeholderPrefix),e=r.toString(16),n.push(e),n.push('"></template>');case 1:t.status=2;var a=!0;r=t.chunks;var l=0;t=t.children;for(var i=0;i<t.length;i++){for(a=t[i];l<a.index;l++)n.push(r[l]);a=Od(e,n,a)}for(;l<r.length-1;l++)n.push(r[l]);return l<r.length&&(a=n.push(r[l])),a;default:throw Error(me(390))}}function Od(e,n,t){var r=t.boundary;if(r===null)return os(e,n,t);if(r.parentFlushed=!0,r.forceClientRender)return e.responseState.generateStaticMarkup||(r=r.errorDigest,n.push("<!--$!-->"),n.push("<template"),r&&(n.push(' data-dgst="'),r=Wn(r),n.push(r),n.push('"')),n.push("></template>")),os(e,n,t),e=e.responseState.generateStaticMarkup?!0:n.push("<!--/$-->"),e;if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var a=e.responseState,l=a.nextSuspenseID++;return a=a.boundaryPrefix+l.toString(16),r=r.id=a,w2(n,e.responseState,r),os(e,n,t),n.push("<!--/$-->")}if(r.byteSize>e.progressiveChunkSize)return r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),w2(n,e.responseState,r.id),os(e,n,t),n.push("<!--/$-->");if(e.responseState.generateStaticMarkup||n.push("<!--$-->"),t=r.completedSegments,t.length!==1)throw Error(me(391));return Od(e,n,t[0]),e=e.responseState.generateStaticMarkup?!0:n.push("<!--/$-->"),e}function P2(e,n,t){return O$(n,e.responseState,t.formatContext,t.id),Od(e,n,t),z$(n,t.formatContext)}function A2(e,n,t){for(var r=t.completedSegments,a=0;a<r.length;a++)Z3(e,n,t,r[a]);if(r.length=0,e=e.responseState,r=t.id,t=t.rootSegmentID,n.push(e.startInlineScript),e.sentCompleteBoundaryFunction?n.push('$RC("'):(e.sentCompleteBoundaryFunction=!0,n.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')),r===null)throw Error(me(395));return t=t.toString(16),n.push(r),n.push('","'),n.push(e.segmentPrefix),n.push(t),n.push('")<\/script>')}function Z3(e,n,t,r){if(r.status===2)return!0;var a=r.id;if(a===-1){if((r.id=t.rootSegmentID)===-1)throw Error(me(392));return P2(e,n,r)}return P2(e,n,r),e=e.responseState,n.push(e.startInlineScript),e.sentCompleteSegmentFunction?n.push('$RS("'):(e.sentCompleteSegmentFunction=!0,n.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')),n.push(e.segmentPrefix),a=a.toString(16),n.push(a),n.push('","'),n.push(e.placeholderPrefix),n.push(a),n.push('")<\/script>')}function Yp(e,n){try{var t=e.completedRootSegment;if(t!==null&&e.pendingRootTasks===0){Od(e,n,t),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(t=0;t<r.length-1;t++)n.push(r[t]);t<r.length&&n.push(r[t])}var a=e.clientRenderedBoundaries,l;for(l=0;l<a.length;l++){var i=a[l];r=n;var s=e.responseState,u=i.id,p=i.errorDigest,v=i.errorMessage,y=i.errorComponentStack;if(r.push(s.startInlineScript),s.sentClientRenderFunction?r.push('$RX("'):(s.sentClientRenderFunction=!0,r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')),u===null)throw Error(me(395));if(r.push(u),r.push('"'),p||v||y){r.push(",");var k=Vc(p||"");r.push(k)}if(v||y){r.push(",");var E=Vc(v||"");r.push(E)}if(y){r.push(",");var N=Vc(y);r.push(N)}if(!r.push(")<\/script>")){e.destination=null,l++,a.splice(0,l);return}}a.splice(0,l);var C=e.completedBoundaries;for(l=0;l<C.length;l++)if(!A2(e,n,C[l])){e.destination=null,l++,C.splice(0,l);return}C.splice(0,l);var M=e.partialBoundaries;for(l=0;l<M.length;l++){var w=M[l];e:{a=e,i=n;var g=w.completedSegments;for(s=0;s<g.length;s++)if(!Z3(a,i,w,g[s])){s++,g.splice(0,s);var b=!1;break e}g.splice(0,s),b=!0}if(!b){e.destination=null,l++,M.splice(0,l);return}}M.splice(0,l);var m=e.completedBoundaries;for(l=0;l<m.length;l++)if(!A2(e,n,m[l])){e.destination=null,l++,m.splice(0,l);return}m.splice(0,l)}finally{e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&n.push(null)}}function rN(e,n){try{var t=e.abortableTasks;t.forEach(function(r){return G3(r,e,n)}),t.clear(),e.destination!==null&&Yp(e,e.destination)}catch(r){si(e,r),id(e,r)}}function oN(){}function Q3(e,n,t,r){var a=!1,l=null,i="",s={push:function(p){return p!==null&&(i+=p),!0},destroy:function(p){a=!0,l=p}},u=!1;if(e=nN(e,B$(t,n?n.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,oN,void 0,function(){u=!0},void 0,void 0),q3(e),rN(e,r),e.status===1)e.status=2,s.destroy(e.fatalError);else if(e.status!==2&&e.destination===null){e.destination=s;try{Yp(e,s)}catch(p){si(e,p),id(e,p)}}if(a)throw l;if(!u)throw Error(me(426));return i}Ha.renderToNodeStream=function(){throw Error(me(207))};Ha.renderToStaticMarkup=function(e,n){return Q3(e,n,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};Ha.renderToStaticNodeStream=function(){throw Error(me(208))};Ha.renderToString=function(e,n){return Q3(e,n,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};Ha.version="18.2.0";var qp={};/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K3=D;function we(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ut=null,ht=0;function re(e,n){if(n.length!==0)if(512<n.length)0<ht&&(e.enqueue(new Uint8Array(ut.buffer,0,ht)),ut=new Uint8Array(512),ht=0),e.enqueue(n);else{var t=ut.length-ht;t<n.length&&(t===0?e.enqueue(ut):(ut.set(n.subarray(0,t),ht),e.enqueue(ut),n=n.subarray(t)),ut=new Uint8Array(512),ht=0),ut.set(n,ht),ht+=n.length}}function Xe(e,n){return re(e,n),!0}function F2(e){ut&&0<ht&&(e.enqueue(new Uint8Array(ut.buffer,0,ht)),ut=null,ht=0)}var X3=new TextEncoder;function Ce(e){return X3.encode(e)}function X(e){return X3.encode(e)}function J3(e,n){typeof e.error=="function"?e.error(n):e.close()}var et=Object.prototype.hasOwnProperty,aN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,O2={},z2={};function e5(e){return et.call(z2,e)?!0:et.call(O2,e)?!1:aN.test(e)?z2[e]=!0:(O2[e]=!0,!1)}function Zn(e,n,t,r,a,l,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=i}var An={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){An[e]=new Zn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];An[n]=new Zn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){An[e]=new Zn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){An[e]=new Zn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){An[e]=new Zn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){An[e]=new Zn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){An[e]=new Zn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){An[e]=new Zn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){An[e]=new Zn(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zp=/[\-:]([a-z])/g;function Qp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Zp,Qp);An[n]=new Zn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Zp,Qp);An[n]=new Zn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Zp,Qp);An[n]=new Zn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){An[e]=new Zn(e,1,!1,e.toLowerCase(),null,!1,!1)});An.xlinkHref=new Zn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){An[e]=new Zn(e,1,!1,e.toLowerCase(),null,!0,!0)});var Ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lN=["Webkit","ms","Moz","O"];Object.keys(Ls).forEach(function(e){lN.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ls[n]=Ls[e]})});var iN=/["'&<>]/;function In(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var n=iN.exec(e);if(n){var t="",r,a=0;for(r=n.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#x27;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}a!==r&&(t+=e.substring(a,r)),a=r+1,t+=n}e=a!==r?t+e.substring(a,r):t}return e}var sN=/([A-Z])/g,dN=/^ms-/,sh=Array.isArray,cN=X("<script>"),uN=X("<\/script>"),hN=X('<script src="'),pN=X('<script type="module" src="'),D2=X('" async=""><\/script>'),fN=/(<\/|<)(s)(cript)/gi;function gN(e,n,t,r){return""+n+(t==="s"?"\\u0073":"\\u0053")+r}function vN(e,n,t,r,a){e=e===void 0?"":e,n=n===void 0?cN:X('<script nonce="'+In(n)+'">');var l=[];if(t!==void 0&&l.push(n,Ce((""+t).replace(fN,gN)),uN),r!==void 0)for(t=0;t<r.length;t++)l.push(hN,Ce(In(r[t])),D2);if(a!==void 0)for(r=0;r<a.length;r++)l.push(pN,Ce(In(a[r])),D2);return{bootstrapChunks:l,startInlineScript:n,placeholderPrefix:X(e+"P:"),segmentPrefix:X(e+"S:"),boundaryPrefix:e+"B:",idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function Wt(e,n){return{insertionMode:e,selectedValue:n}}function mN(e){return Wt(e==="http://www.w3.org/2000/svg"?2:e==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function bN(e,n,t){switch(n){case"select":return Wt(1,t.value!=null?t.value:t.defaultValue);case"svg":return Wt(2,null);case"math":return Wt(3,null);case"foreignObject":return Wt(1,null);case"table":return Wt(4,null);case"thead":case"tbody":case"tfoot":return Wt(5,null);case"colgroup":return Wt(7,null);case"tr":return Wt(6,null)}return 4<=e.insertionMode||e.insertionMode===0?Wt(1,null):e}var Kp=X("<!-- -->");function B2(e,n,t,r){return n===""?r:(r&&e.push(Kp),e.push(Ce(In(n))),!0)}var j2=new Map,yN=X(' style="'),U2=X(":"),wN=X(";");function n5(e,n,t){if(typeof t!="object")throw Error(we(62));n=!0;for(var r in t)if(et.call(t,r)){var a=t[r];if(a!=null&&typeof a!="boolean"&&a!==""){if(r.indexOf("--")===0){var l=Ce(In(r));a=Ce(In((""+a).trim()))}else{l=r;var i=j2.get(l);i!==void 0||(i=X(In(l.replace(sN,"-$1").toLowerCase().replace(dN,"-ms-"))),j2.set(l,i)),l=i,a=typeof a=="number"?a===0||et.call(Ls,r)?Ce(""+a):Ce(a+"px"):Ce(In((""+a).trim()))}n?(n=!1,e.push(yN,l,U2,a)):e.push(wN,l,U2,a)}}n||e.push(vo)}var Lr=X(" "),ra=X('="'),vo=X('"'),H2=X('=""');function st(e,n,t,r){switch(t){case"style":n5(e,n,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N"){if(n=An.hasOwnProperty(t)?An[t]:null,n!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!n.acceptsBooleans)return}switch(t=Ce(n.attributeName),n.type){case 3:r&&e.push(Lr,t,H2);break;case 4:r===!0?e.push(Lr,t,H2):r!==!1&&e.push(Lr,t,ra,Ce(In(r)),vo);break;case 5:isNaN(r)||e.push(Lr,t,ra,Ce(In(r)),vo);break;case 6:!isNaN(r)&&1<=r&&e.push(Lr,t,ra,Ce(In(r)),vo);break;default:n.sanitizeURL&&(r=""+r),e.push(Lr,t,ra,Ce(In(r)),vo)}}else if(e5(t)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(n=t.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-")return}e.push(Lr,Ce(t),ra,Ce(In(r)),vo)}}}var $r=X(">"),W2=X("/>");function $s(e,n,t){if(n!=null){if(t!=null)throw Error(we(60));if(typeof n!="object"||!("__html"in n))throw Error(we(61));n=n.__html,n!=null&&e.push(Ce(""+n))}}function xN(e){var n="";return K3.Children.forEach(e,function(t){t!=null&&(n+=t)}),n}var Yc=X(' selected=""');function qc(e,n,t,r){e.push(Vt(t));var a=t=null,l;for(l in n)if(et.call(n,l)){var i=n[l];if(i!=null)switch(l){case"children":t=i;break;case"dangerouslySetInnerHTML":a=i;break;default:st(e,r,l,i)}}return e.push($r),$s(e,a,t),typeof t=="string"?(e.push(Ce(In(t))),null):t}var Zc=X(`
`),kN=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,V2=new Map;function Vt(e){var n=V2.get(e);if(n===void 0){if(!kN.test(e))throw Error(we(65,e));n=X("<"+e),V2.set(e,n)}return n}var CN=X("<!DOCTYPE html>");function SN(e,n,t,r,a){switch(n){case"select":e.push(Vt("select"));var l=null,i=null;for(v in t)if(et.call(t,v)){var s=t[v];if(s!=null)switch(v){case"children":l=s;break;case"dangerouslySetInnerHTML":i=s;break;case"defaultValue":case"value":break;default:st(e,r,v,s)}}return e.push($r),$s(e,i,l),l;case"option":i=a.selectedValue,e.push(Vt("option"));var u=s=null,p=null,v=null;for(l in t)if(et.call(t,l)){var y=t[l];if(y!=null)switch(l){case"children":s=y;break;case"selected":p=y;break;case"dangerouslySetInnerHTML":v=y;break;case"value":u=y;default:st(e,r,l,y)}}if(i!=null)if(t=u!==null?""+u:xN(s),sh(i)){for(r=0;r<i.length;r++)if(""+i[r]===t){e.push(Yc);break}}else""+i===t&&e.push(Yc);else p&&e.push(Yc);return e.push($r),$s(e,v,s),s;case"textarea":e.push(Vt("textarea")),v=i=l=null;for(s in t)if(et.call(t,s)&&(u=t[s],u!=null))switch(s){case"children":v=u;break;case"value":l=u;break;case"defaultValue":i=u;break;case"dangerouslySetInnerHTML":throw Error(we(91));default:st(e,r,s,u)}if(l===null&&i!==null&&(l=i),e.push($r),v!=null){if(l!=null)throw Error(we(92));if(sh(v)&&1<v.length)throw Error(we(93));l=""+v}return typeof l=="string"&&l[0]===`
`&&e.push(Zc),l!==null&&e.push(Ce(In(""+l))),null;case"input":e.push(Vt("input")),u=v=s=l=null;for(i in t)if(et.call(t,i)&&(p=t[i],p!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(we(399,"input"));case"defaultChecked":u=p;break;case"defaultValue":s=p;break;case"checked":v=p;break;case"value":l=p;break;default:st(e,r,i,p)}return v!==null?st(e,r,"checked",v):u!==null&&st(e,r,"checked",u),l!==null?st(e,r,"value",l):s!==null&&st(e,r,"value",s),e.push(W2),null;case"menuitem":e.push(Vt("menuitem"));for(var k in t)if(et.call(t,k)&&(l=t[k],l!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(we(400));default:st(e,r,k,l)}return e.push($r),null;case"title":e.push(Vt("title")),l=null;for(y in t)if(et.call(t,y)&&(i=t[y],i!=null))switch(y){case"children":l=i;break;case"dangerouslySetInnerHTML":throw Error(we(434));default:st(e,r,y,i)}return e.push($r),l;case"listing":case"pre":e.push(Vt(n)),i=l=null;for(u in t)if(et.call(t,u)&&(s=t[u],s!=null))switch(u){case"children":l=s;break;case"dangerouslySetInnerHTML":i=s;break;default:st(e,r,u,s)}if(e.push($r),i!=null){if(l!=null)throw Error(we(60));if(typeof i!="object"||!("__html"in i))throw Error(we(61));t=i.__html,t!=null&&(typeof t=="string"&&0<t.length&&t[0]===`
`?e.push(Zc,Ce(t)):e.push(Ce(""+t)))}return typeof l=="string"&&l[0]===`
`&&e.push(Zc),l;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Vt(n));for(var E in t)if(et.call(t,E)&&(l=t[E],l!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(we(399,n));default:st(e,r,E,l)}return e.push(W2),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return qc(e,t,n,r);case"html":return a.insertionMode===0&&e.push(CN),qc(e,t,n,r);default:if(n.indexOf("-")===-1&&typeof t.is!="string")return qc(e,t,n,r);e.push(Vt(n)),i=l=null;for(p in t)if(et.call(t,p)&&(s=t[p],s!=null))switch(p){case"children":l=s;break;case"dangerouslySetInnerHTML":i=s;break;case"style":n5(e,r,s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:e5(p)&&typeof s!="function"&&typeof s!="symbol"&&e.push(Lr,Ce(p),ra,Ce(In(s)),vo)}return e.push($r),$s(e,i,l),l}}var TN=X("</"),_N=X(">"),LN=X('<template id="'),$N=X('"></template>'),NN=X("<!--$-->"),EN=X('<!--$?--><template id="'),IN=X('"></template>'),MN=X("<!--$!-->"),RN=X("<!--/$-->"),PN=X("<template"),AN=X('"'),FN=X(' data-dgst="');X(' data-msg="');X(' data-stck="');var ON=X("></template>");function G2(e,n,t){if(re(e,EN),t===null)throw Error(we(395));return re(e,t),Xe(e,IN)}var zN=X('<div hidden id="'),DN=X('">'),BN=X("</div>"),jN=X('<svg aria-hidden="true" style="display:none" id="'),UN=X('">'),HN=X("</svg>"),WN=X('<math aria-hidden="true" style="display:none" id="'),VN=X('">'),GN=X("</math>"),YN=X('<table hidden id="'),qN=X('">'),ZN=X("</table>"),QN=X('<table hidden><tbody id="'),KN=X('">'),XN=X("</tbody></table>"),JN=X('<table hidden><tr id="'),eE=X('">'),nE=X("</tr></table>"),tE=X('<table hidden><colgroup id="'),rE=X('">'),oE=X("</colgroup></table>");function aE(e,n,t,r){switch(t.insertionMode){case 0:case 1:return re(e,zN),re(e,n.segmentPrefix),re(e,Ce(r.toString(16))),Xe(e,DN);case 2:return re(e,jN),re(e,n.segmentPrefix),re(e,Ce(r.toString(16))),Xe(e,UN);case 3:return re(e,WN),re(e,n.segmentPrefix),re(e,Ce(r.toString(16))),Xe(e,VN);case 4:return re(e,YN),re(e,n.segmentPrefix),re(e,Ce(r.toString(16))),Xe(e,qN);case 5:return re(e,QN),re(e,n.segmentPrefix),re(e,Ce(r.toString(16))),Xe(e,KN);case 6:return re(e,JN),re(e,n.segmentPrefix),re(e,Ce(r.toString(16))),Xe(e,eE);case 7:return re(e,tE),re(e,n.segmentPrefix),re(e,Ce(r.toString(16))),Xe(e,rE);default:throw Error(we(397))}}function lE(e,n){switch(n.insertionMode){case 0:case 1:return Xe(e,BN);case 2:return Xe(e,HN);case 3:return Xe(e,GN);case 4:return Xe(e,ZN);case 5:return Xe(e,XN);case 6:return Xe(e,nE);case 7:return Xe(e,oE);default:throw Error(we(397))}}var iE=X('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),sE=X('$RS("'),dE=X('","'),cE=X('")<\/script>'),uE=X('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),hE=X('$RC("'),pE=X('","'),fE=X('")<\/script>'),gE=X('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),vE=X('$RX("'),mE=X('"'),bE=X(")<\/script>"),Qc=X(","),yE=/[<\u2028\u2029]/g;function Kc(e){return JSON.stringify(e).replace(yE,function(n){switch(n){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var Dl=Object.assign,wE=Symbol.for("react.element"),t5=Symbol.for("react.portal"),r5=Symbol.for("react.fragment"),o5=Symbol.for("react.strict_mode"),a5=Symbol.for("react.profiler"),l5=Symbol.for("react.provider"),i5=Symbol.for("react.context"),s5=Symbol.for("react.forward_ref"),d5=Symbol.for("react.suspense"),c5=Symbol.for("react.suspense_list"),u5=Symbol.for("react.memo"),Xp=Symbol.for("react.lazy"),xE=Symbol.for("react.scope"),kE=Symbol.for("react.debug_trace_mode"),CE=Symbol.for("react.legacy_hidden"),SE=Symbol.for("react.default_value"),Y2=Symbol.iterator;function dh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case r5:return"Fragment";case t5:return"Portal";case a5:return"Profiler";case o5:return"StrictMode";case d5:return"Suspense";case c5:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case i5:return(e.displayName||"Context")+".Consumer";case l5:return(e._context.displayName||"Context")+".Provider";case s5:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case u5:return n=e.displayName||null,n!==null?n:dh(e.type)||"Memo";case Xp:n=e._payload,e=e._init;try{return dh(e(n))}catch{}}return null}var h5={};function q2(e,n){if(e=e.contextTypes,!e)return h5;var t={},r;for(r in e)t[r]=n[r];return t}var Co=null;function zd(e,n){if(e!==n){e.context._currentValue=e.parentValue,e=e.parent;var t=n.parent;if(e===null){if(t!==null)throw Error(we(401))}else{if(t===null)throw Error(we(401));zd(e,t)}n.context._currentValue=n.value}}function p5(e){e.context._currentValue=e.parentValue,e=e.parent,e!==null&&p5(e)}function f5(e){var n=e.parent;n!==null&&f5(n),e.context._currentValue=e.value}function g5(e,n){if(e.context._currentValue=e.parentValue,e=e.parent,e===null)throw Error(we(402));e.depth===n.depth?zd(e,n):g5(e,n)}function v5(e,n){var t=n.parent;if(t===null)throw Error(we(402));e.depth===t.depth?zd(e,t):v5(e,t),n.context._currentValue=n.value}function dd(e){var n=Co;n!==e&&(n===null?f5(e):e===null?p5(n):n.depth===e.depth?zd(n,e):n.depth>e.depth?g5(n,e):v5(n,e),Co=e)}var Z2={isMounted:function(){return!1},enqueueSetState:function(e,n){e=e._reactInternals,e.queue!==null&&e.queue.push(n)},enqueueReplaceState:function(e,n){e=e._reactInternals,e.replace=!0,e.queue=[n]},enqueueForceUpdate:function(){}};function Q2(e,n,t,r){var a=e.state!==void 0?e.state:null;e.updater=Z2,e.props=t,e.state=a;var l={queue:[],replace:!1};e._reactInternals=l;var i=n.contextType;if(e.context=typeof i=="object"&&i!==null?i._currentValue:r,i=n.getDerivedStateFromProps,typeof i=="function"&&(i=i(t,a),a=i==null?a:Dl({},a,i),e.state=a),typeof n.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(n=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),n!==e.state&&Z2.enqueueReplaceState(e,e.state,null),l.queue!==null&&0<l.queue.length)if(n=l.queue,i=l.replace,l.queue=null,l.replace=!1,i&&n.length===1)e.state=n[0];else{for(l=i?n[0]:e.state,a=!0,i=i?1:0;i<n.length;i++){var s=n[i];s=typeof s=="function"?s.call(e,l,t,r):s,s!=null&&(a?(a=!1,l=Dl({},l,s)):Dl(l,s))}e.state=l}else l.queue=null}var TE={id:1,overflow:""};function ch(e,n,t){var r=e.id;e=e.overflow;var a=32-Ns(r)-1;r&=~(1<<a),t+=1;var l=32-Ns(n)+a;if(30<l){var i=a-a%5;return l=(r&(1<<i)-1).toString(32),r>>=i,a-=i,{id:1<<32-Ns(n)+a|t<<a|r,overflow:l+e}}return{id:1<<l|t<<a|r,overflow:e}}var Ns=Math.clz32?Math.clz32:$E,_E=Math.log,LE=Math.LN2;function $E(e){return e>>>=0,e===0?32:31-(_E(e)/LE|0)|0}function NE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var EE=typeof Object.is=="function"?Object.is:NE,br=null,Jp=null,Es=null,Ve=null,_l=!1,cd=!1,di=0,Fr=null,Dd=0;function mo(){if(br===null)throw Error(we(321));return br}function K2(){if(0<Dd)throw Error(we(312));return{memoizedState:null,queue:null,next:null}}function ef(){return Ve===null?Es===null?(_l=!1,Es=Ve=K2()):(_l=!0,Ve=Es):Ve.next===null?(_l=!1,Ve=Ve.next=K2()):(_l=!0,Ve=Ve.next),Ve}function nf(){Jp=br=null,cd=!1,Es=null,Dd=0,Ve=Fr=null}function m5(e,n){return typeof n=="function"?n(e):n}function X2(e,n,t){if(br=mo(),Ve=ef(),_l){var r=Ve.queue;if(n=r.dispatch,Fr!==null&&(t=Fr.get(r),t!==void 0)){Fr.delete(r),r=Ve.memoizedState;do r=e(r,t.action),t=t.next;while(t!==null);return Ve.memoizedState=r,[r,n]}return[Ve.memoizedState,n]}return e=e===m5?typeof n=="function"?n():n:t!==void 0?t(n):n,Ve.memoizedState=e,e=Ve.queue={last:null,dispatch:null},e=e.dispatch=IE.bind(null,br,e),[Ve.memoizedState,e]}function J2(e,n){if(br=mo(),Ve=ef(),n=n===void 0?null:n,Ve!==null){var t=Ve.memoizedState;if(t!==null&&n!==null){var r=t[1];e:if(r===null)r=!1;else{for(var a=0;a<r.length&&a<n.length;a++)if(!EE(n[a],r[a])){r=!1;break e}r=!0}if(r)return t[0]}}return e=e(),Ve.memoizedState=[e,n],e}function IE(e,n,t){if(25<=Dd)throw Error(we(301));if(e===br)if(cd=!0,e={action:t,next:null},Fr===null&&(Fr=new Map),t=Fr.get(n),t===void 0)Fr.set(n,e);else{for(n=t;n.next!==null;)n=n.next;n.next=e}}function ME(){throw Error(we(394))}function as(){}var eg={readContext:function(e){return e._currentValue},useContext:function(e){return mo(),e._currentValue},useMemo:J2,useReducer:X2,useRef:function(e){br=mo(),Ve=ef();var n=Ve.memoizedState;return n===null?(e={current:e},Ve.memoizedState=e):n},useState:function(e){return X2(m5,e)},useInsertionEffect:as,useLayoutEffect:function(){},useCallback:function(e,n){return J2(function(){return e},n)},useImperativeHandle:as,useEffect:as,useDebugValue:as,useDeferredValue:function(e){return mo(),e},useTransition:function(){return mo(),[!1,ME]},useId:function(){var e=Jp.treeContext,n=e.overflow;e=e.id,e=(e&~(1<<32-Ns(e)-1)).toString(32)+n;var t=Is;if(t===null)throw Error(we(404));return n=di++,e=":"+t.idPrefix+"R"+e,0<n&&(e+="H"+n.toString(32)),e+":"},useMutableSource:function(e,n){return mo(),n(e._source)},useSyncExternalStore:function(e,n,t){if(t===void 0)throw Error(we(407));return t()}},Is=null,Xc=K3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function RE(e){return console.error(e),null}function Ll(){}function PE(e,n,t,r,a,l,i,s,u){var p=[],v=new Set;return n={destination:null,responseState:n,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:v,pingedTasks:p,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:a===void 0?RE:a,onAllReady:l===void 0?Ll:l,onShellReady:i===void 0?Ll:i,onShellError:s===void 0?Ll:s,onFatalError:u===void 0?Ll:u},t=ud(n,0,null,t,!1,!1),t.parentFlushed=!0,e=tf(n,e,null,t,v,h5,null,TE),p.push(e),n}function tf(e,n,t,r,a,l,i,s){e.allPendingTasks++,t===null?e.pendingRootTasks++:t.pendingTasks++;var u={node:n,ping:function(){var p=e.pingedTasks;p.push(u),p.length===1&&w5(e)},blockedBoundary:t,blockedSegment:r,abortSet:a,legacyContext:l,context:i,treeContext:s};return a.add(u),u}function ud(e,n,t,r,a,l){return{status:0,id:-1,index:n,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:t,lastPushedText:a,textEmbedded:l}}function ci(e,n){if(e=e.onError(n),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function hd(e,n){var t=e.onShellError;t(n),t=e.onFatalError,t(n),e.destination!==null?(e.status=2,J3(e.destination,n)):(e.status=1,e.fatalError=n)}function ng(e,n,t,r,a){for(br={},Jp=n,di=0,e=t(r,a);cd;)cd=!1,di=0,Dd+=1,Ve=null,e=t(r,a);return nf(),e}function tg(e,n,t,r){var a=t.render(),l=r.childContextTypes;if(l!=null){var i=n.legacyContext;if(typeof t.getChildContext!="function")r=i;else{t=t.getChildContext();for(var s in t)if(!(s in l))throw Error(we(108,dh(r)||"Unknown",s));r=Dl({},i,t)}n.legacyContext=r,pt(e,n,a),n.legacyContext=i}else pt(e,n,a)}function rg(e,n){if(e&&e.defaultProps){n=Dl({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function uh(e,n,t,r,a){if(typeof t=="function")if(t.prototype&&t.prototype.isReactComponent){a=q2(t,n.legacyContext);var l=t.contextType;l=new t(r,typeof l=="object"&&l!==null?l._currentValue:a),Q2(l,t,r,a),tg(e,n,l,t)}else{l=q2(t,n.legacyContext),a=ng(e,n,t,r,l);var i=di!==0;if(typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0)Q2(a,t,r,l),tg(e,n,a,t);else if(i){r=n.treeContext,n.treeContext=ch(r,1,0);try{pt(e,n,a)}finally{n.treeContext=r}}else pt(e,n,a)}else if(typeof t=="string"){switch(a=n.blockedSegment,l=SN(a.chunks,t,r,e.responseState,a.formatContext),a.lastPushedText=!1,i=a.formatContext,a.formatContext=bN(i,t,r),hh(e,n,l),a.formatContext=i,t){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:a.chunks.push(TN,Ce(t),_N)}a.lastPushedText=!1}else{switch(t){case CE:case kE:case o5:case a5:case r5:pt(e,n,r.children);return;case c5:pt(e,n,r.children);return;case xE:throw Error(we(343));case d5:e:{t=n.blockedBoundary,a=n.blockedSegment,l=r.fallback,r=r.children,i=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:i,errorDigest:null},u=ud(e,a.chunks.length,s,a.formatContext,!1,!1);a.children.push(u),a.lastPushedText=!1;var p=ud(e,0,null,a.formatContext,!1,!1);p.parentFlushed=!0,n.blockedBoundary=s,n.blockedSegment=p;try{if(hh(e,n,r),p.lastPushedText&&p.textEmbedded&&p.chunks.push(Kp),p.status=1,pd(s,p),s.pendingTasks===0)break e}catch(v){p.status=4,s.forceClientRender=!0,s.errorDigest=ci(e,v)}finally{n.blockedBoundary=t,n.blockedSegment=a}n=tf(e,l,t,u,i,n.legacyContext,n.context,n.treeContext),e.pingedTasks.push(n)}return}if(typeof t=="object"&&t!==null)switch(t.$$typeof){case s5:if(r=ng(e,n,t.render,r,a),di!==0){t=n.treeContext,n.treeContext=ch(t,1,0);try{pt(e,n,r)}finally{n.treeContext=t}}else pt(e,n,r);return;case u5:t=t.type,r=rg(t,r),uh(e,n,t,r,a);return;case l5:if(a=r.children,t=t._context,r=r.value,l=t._currentValue,t._currentValue=r,i=Co,Co=r={parent:i,depth:i===null?0:i.depth+1,context:t,parentValue:l,value:r},n.context=r,pt(e,n,a),e=Co,e===null)throw Error(we(403));r=e.parentValue,e.context._currentValue=r===SE?e.context._defaultValue:r,e=Co=e.parent,n.context=e;return;case i5:r=r.children,r=r(t._currentValue),pt(e,n,r);return;case Xp:a=t._init,t=a(t._payload),r=rg(t,r),uh(e,n,t,r,void 0);return}throw Error(we(130,t==null?t:typeof t,""))}}function pt(e,n,t){if(n.node=t,typeof t=="object"&&t!==null){switch(t.$$typeof){case wE:uh(e,n,t.type,t.props,t.ref);return;case t5:throw Error(we(257));case Xp:var r=t._init;t=r(t._payload),pt(e,n,t);return}if(sh(t)){og(e,n,t);return}if(t===null||typeof t!="object"?r=null:(r=Y2&&t[Y2]||t["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(t))){if(t=r.next(),!t.done){var a=[];do a.push(t.value),t=r.next();while(!t.done);og(e,n,a)}return}throw e=Object.prototype.toString.call(t),Error(we(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}typeof t=="string"?(r=n.blockedSegment,r.lastPushedText=B2(n.blockedSegment.chunks,t,e.responseState,r.lastPushedText)):typeof t=="number"&&(r=n.blockedSegment,r.lastPushedText=B2(n.blockedSegment.chunks,""+t,e.responseState,r.lastPushedText))}function og(e,n,t){for(var r=t.length,a=0;a<r;a++){var l=n.treeContext;n.treeContext=ch(l,r,a);try{hh(e,n,t[a])}finally{n.treeContext=l}}}function hh(e,n,t){var r=n.blockedSegment.formatContext,a=n.legacyContext,l=n.context;try{return pt(e,n,t)}catch(u){if(nf(),typeof u=="object"&&u!==null&&typeof u.then=="function"){t=u;var i=n.blockedSegment,s=ud(e,i.chunks.length,null,i.formatContext,i.lastPushedText,!0);i.children.push(s),i.lastPushedText=!1,e=tf(e,n.node,n.blockedBoundary,s,n.abortSet,n.legacyContext,n.context,n.treeContext).ping,t.then(e,e),n.blockedSegment.formatContext=r,n.legacyContext=a,n.context=l,dd(l)}else throw n.blockedSegment.formatContext=r,n.legacyContext=a,n.context=l,dd(l),u}}function AE(e){var n=e.blockedBoundary;e=e.blockedSegment,e.status=3,y5(this,n,e)}function b5(e,n,t){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(n.allPendingTasks--,n.status!==2&&(n.status=2,n.destination!==null&&n.destination.close())):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=t===void 0?Error(we(432)):t,r.errorDigest=n.onError(e),r.parentFlushed&&n.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(a){return b5(a,n,t)}),r.fallbackAbortableTasks.clear(),n.allPendingTasks--,n.allPendingTasks===0&&(r=n.onAllReady,r()))}function pd(e,n){if(n.chunks.length===0&&n.children.length===1&&n.children[0].boundary===null){var t=n.children[0];t.id=n.id,t.parentFlushed=!0,t.status===1&&pd(e,t)}else e.completedSegments.push(n)}function y5(e,n,t){if(n===null){if(t.parentFlushed){if(e.completedRootSegment!==null)throw Error(we(389));e.completedRootSegment=t}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=Ll,n=e.onShellReady,n())}else n.pendingTasks--,n.forceClientRender||(n.pendingTasks===0?(t.parentFlushed&&t.status===1&&pd(n,t),n.parentFlushed&&e.completedBoundaries.push(n),n.fallbackAbortableTasks.forEach(AE,e),n.fallbackAbortableTasks.clear()):t.parentFlushed&&t.status===1&&(pd(n,t),n.completedSegments.length===1&&n.parentFlushed&&e.partialBoundaries.push(n)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function w5(e){if(e.status!==2){var n=Co,t=Xc.current;Xc.current=eg;var r=Is;Is=e.responseState;try{var a=e.pingedTasks,l;for(l=0;l<a.length;l++){var i=a[l],s=e,u=i.blockedSegment;if(u.status===0){dd(i.context);try{pt(s,i,i.node),u.lastPushedText&&u.textEmbedded&&u.chunks.push(Kp),i.abortSet.delete(i),u.status=1,y5(s,i.blockedBoundary,u)}catch(N){if(nf(),typeof N=="object"&&N!==null&&typeof N.then=="function"){var p=i.ping;N.then(p,p)}else{i.abortSet.delete(i),u.status=4;var v=i.blockedBoundary,y=N,k=ci(s,y);if(v===null?hd(s,y):(v.pendingTasks--,v.forceClientRender||(v.forceClientRender=!0,v.errorDigest=k,v.parentFlushed&&s.clientRenderedBoundaries.push(v))),s.allPendingTasks--,s.allPendingTasks===0){var E=s.onAllReady;E()}}}finally{}}}a.splice(0,l),e.destination!==null&&rf(e,e.destination)}catch(N){ci(e,N),hd(e,N)}finally{Is=r,Xc.current=t,t===eg&&dd(n)}}}function ls(e,n,t){switch(t.parentFlushed=!0,t.status){case 0:var r=t.id=e.nextSegmentId++;return t.lastPushedText=!1,t.textEmbedded=!1,e=e.responseState,re(n,LN),re(n,e.placeholderPrefix),e=Ce(r.toString(16)),re(n,e),Xe(n,$N);case 1:t.status=2;var a=!0;r=t.chunks;var l=0;t=t.children;for(var i=0;i<t.length;i++){for(a=t[i];l<a.index;l++)re(n,r[l]);a=Bd(e,n,a)}for(;l<r.length-1;l++)re(n,r[l]);return l<r.length&&(a=Xe(n,r[l])),a;default:throw Error(we(390))}}function Bd(e,n,t){var r=t.boundary;if(r===null)return ls(e,n,t);if(r.parentFlushed=!0,r.forceClientRender)r=r.errorDigest,Xe(n,MN),re(n,PN),r&&(re(n,FN),re(n,Ce(In(r))),re(n,AN)),Xe(n,ON),ls(e,n,t);else if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var a=e.responseState,l=a.nextSuspenseID++;a=X(a.boundaryPrefix+l.toString(16)),r=r.id=a,G2(n,e.responseState,r),ls(e,n,t)}else if(r.byteSize>e.progressiveChunkSize)r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),G2(n,e.responseState,r.id),ls(e,n,t);else{if(Xe(n,NN),t=r.completedSegments,t.length!==1)throw Error(we(391));Bd(e,n,t[0])}return Xe(n,RN)}function ag(e,n,t){return aE(n,e.responseState,t.formatContext,t.id),Bd(e,n,t),lE(n,t.formatContext)}function lg(e,n,t){for(var r=t.completedSegments,a=0;a<r.length;a++)x5(e,n,t,r[a]);if(r.length=0,e=e.responseState,r=t.id,t=t.rootSegmentID,re(n,e.startInlineScript),e.sentCompleteBoundaryFunction?re(n,hE):(e.sentCompleteBoundaryFunction=!0,re(n,uE)),r===null)throw Error(we(395));return t=Ce(t.toString(16)),re(n,r),re(n,pE),re(n,e.segmentPrefix),re(n,t),Xe(n,fE)}function x5(e,n,t,r){if(r.status===2)return!0;var a=r.id;if(a===-1){if((r.id=t.rootSegmentID)===-1)throw Error(we(392));return ag(e,n,r)}return ag(e,n,r),e=e.responseState,re(n,e.startInlineScript),e.sentCompleteSegmentFunction?re(n,sE):(e.sentCompleteSegmentFunction=!0,re(n,iE)),re(n,e.segmentPrefix),a=Ce(a.toString(16)),re(n,a),re(n,dE),re(n,e.placeholderPrefix),re(n,a),Xe(n,cE)}function rf(e,n){ut=new Uint8Array(512),ht=0;try{var t=e.completedRootSegment;if(t!==null&&e.pendingRootTasks===0){Bd(e,n,t),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(t=0;t<r.length-1;t++)re(n,r[t]);t<r.length&&Xe(n,r[t])}var a=e.clientRenderedBoundaries,l;for(l=0;l<a.length;l++){var i=a[l];r=n;var s=e.responseState,u=i.id,p=i.errorDigest,v=i.errorMessage,y=i.errorComponentStack;if(re(r,s.startInlineScript),s.sentClientRenderFunction?re(r,vE):(s.sentClientRenderFunction=!0,re(r,gE)),u===null)throw Error(we(395));re(r,u),re(r,mE),(p||v||y)&&(re(r,Qc),re(r,Ce(Kc(p||"")))),(v||y)&&(re(r,Qc),re(r,Ce(Kc(v||"")))),y&&(re(r,Qc),re(r,Ce(Kc(y)))),Xe(r,bE)}a.splice(0,l);var k=e.completedBoundaries;for(l=0;l<k.length;l++)lg(e,n,k[l]);k.splice(0,l),F2(n),ut=new Uint8Array(512),ht=0;var E=e.partialBoundaries;for(l=0;l<E.length;l++){var N=E[l];e:{a=e,i=n;var C=N.completedSegments;for(s=0;s<C.length;s++)if(!x5(a,i,N,C[s])){s++,C.splice(0,s);var M=!1;break e}C.splice(0,s),M=!0}if(!M){e.destination=null,l++,E.splice(0,l);return}}E.splice(0,l);var w=e.completedBoundaries;for(l=0;l<w.length;l++)lg(e,n,w[l]);w.splice(0,l)}finally{F2(n),e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&n.close()}}function ig(e,n){try{var t=e.abortableTasks;t.forEach(function(r){return b5(r,e,n)}),t.clear(),e.destination!==null&&rf(e,e.destination)}catch(r){ci(e,r),hd(e,r)}}qp.renderToReadableStream=function(e,n){return new Promise(function(t,r){var a,l,i=new Promise(function(v,y){l=v,a=y}),s=PE(e,vN(n?n.identifierPrefix:void 0,n?n.nonce:void 0,n?n.bootstrapScriptContent:void 0,n?n.bootstrapScripts:void 0,n?n.bootstrapModules:void 0),mN(n?n.namespaceURI:void 0),n?n.progressiveChunkSize:void 0,n?n.onError:void 0,l,function(){var v=new ReadableStream({type:"bytes",pull:function(y){if(s.status===1)s.status=2,J3(y,s.fatalError);else if(s.status!==2&&s.destination===null){s.destination=y;try{rf(s,y)}catch(k){ci(s,k),hd(s,k)}}},cancel:function(){ig(s)}},{highWaterMark:0});v.allReady=i,t(v)},function(v){i.catch(function(){}),r(v)},a);if(n&&n.signal){var u=n.signal,p=function(){ig(s,u.reason),u.removeEventListener("abort",p)};u.addEventListener("abort",p)}w5(s)})};qp.version="18.2.0";var Wa,k5;Wa=Ha,k5=qp;Wa.version;var FE=Wa.renderToString;Wa.renderToStaticMarkup;Wa.renderToNodeStream;Wa.renderToStaticNodeStream;k5.renderToReadableStream;var C5={exports:{}},OE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",zE=OE,DE=zE;function S5(){}function T5(){}T5.resetWarningCache=S5;var BE=function(){function e(r,a,l,i,s,u){if(u!==DE){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:T5,resetWarningCache:S5};return t.PropTypes=t,t};C5.exports=BE();var jE=C5.exports;const zt=Xt(jE);var UE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _5(e,n){return e(n={exports:{}},n.exports),n.exports}var HE=_5(function(e){(function(n){var t=function(M,w,g){if(!u(w)||v(w)||y(w)||k(w)||s(w))return w;var b,m=0,L=0;if(p(w))for(b=[],L=w.length;m<L;m++)b.push(t(M,w[m],g));else for(var T in b={},w)Object.prototype.hasOwnProperty.call(w,T)&&(b[M(T,g)]=t(M,w[T],g));return b},r=function(M){return E(M)?M:(M=M.replace(/[\-_\s]+(.)?/g,function(w,g){return g?g.toUpperCase():""})).substr(0,1).toLowerCase()+M.substr(1)},a=function(M){var w=r(M);return w.substr(0,1).toUpperCase()+w.substr(1)},l=function(M,w){return function(g,b){var m=(b=b||{}).separator||"_",L=b.split||/(?=[A-Z])/;return g.split(L).join(m)}(M,w).toLowerCase()},i=Object.prototype.toString,s=function(M){return typeof M=="function"},u=function(M){return M===Object(M)},p=function(M){return i.call(M)=="[object Array]"},v=function(M){return i.call(M)=="[object Date]"},y=function(M){return i.call(M)=="[object RegExp]"},k=function(M){return i.call(M)=="[object Boolean]"},E=function(M){return(M-=0)==M},N=function(M,w){var g=w&&"process"in w?w.process:w;return typeof g!="function"?M:function(b,m){return g(b,M,m)}},C={camelize:r,decamelize:l,pascalize:a,depascalize:l,camelizeKeys:function(M,w){return t(N(r,w),M)},decamelizeKeys:function(M,w){return t(N(l,w),M,w)},pascalizeKeys:function(M,w){return t(N(a,w),M)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=C:n.humps=C})(UE)}).decamelize,WE=function(e){if(Array.isArray(e))return e},VE=function(e,n){if(typeof Symbol<"u"&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,l=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(u){a=!0,l=u}finally{try{r||s.return==null||s.return()}finally{if(a)throw l}}return t}},sg=function(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r},GE=function(e,n){if(e){if(typeof e=="string")return sg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?sg(e,n):void 0}},YE=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},qE=function(e,n){return WE(e)||VE(e,n)||GE(e,n)||YE()},L5=_5(function(e){function n(){return e.exports=n=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(t[l]=a[l])}return t},n.apply(this,arguments)}e.exports=n}),ZE=function(e,n){if(e==null)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a},$5=function(e,n){if(e==null)return{};var t,r,a=ZE(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a},QE=D.createContext(null);function ph(e){var n=e.children,t=$5(e,["children"]);return typeof n!="string"&&(n=FE(n)),En.createElement("template",L5({},t,{dangerouslySetInnerHTML:{__html:n}}))}function fh(e){var n=e.root,t=e.children;return Tm.createPortal(t,n)}function KE(e){var n=D.forwardRef(function(t,r){var a,l,i=t.mode,s=t.delegatesFocus,u=t.styleSheets,p=t.ssr,v=t.children,y=$5(t,["mode","delegatesFocus","styleSheets","ssr","children"]),k=(l=D.useRef((a=r)&&a.current),D.useEffect(function(){a&&(a.current=l.current)},[a]),l),E=D.useState(null),N=qE(E,2),C=N[0],M=N[1],w="node_".concat(i).concat(s);return D.useLayoutEffect(function(){if(k.current)try{if(typeof r=="function"&&r(k.current),p){var g=k.current.shadowRoot;return void M(g)}var b=k.current.attachShadow({mode:i,delegatesFocus:s});u.length>0&&(b.adoptedStyleSheets=u),M(b)}catch(m){(function(L){var T=L.error,A=L.styleSheets,O=L.root;switch(T.name){case"NotSupportedError":A.length>0&&(O.adoptedStyleSheets=A);break;default:throw T}})({error:m,styleSheets:u,root:C})}},[r,k,u]),En.createElement(En.Fragment,null,En.createElement(e.tag,L5({key:w,ref:k},y),(C||p)&&En.createElement(QE.Provider,{value:C},p?En.createElement(ph,{shadowroot:"open"},e.render({root:C,ssr:p,children:v})):En.createElement(fh,{root:C},e.render({root:C,ssr:p,children:v})))))});return n.propTypes={mode:zt.oneOf(["open","closed"]),delegatesFocus:zt.bool,styleSheets:zt.arrayOf(zt.instanceOf(globalThis.CSSStyleSheet)),ssr:zt.bool,children:zt.node},n.defaultProps={mode:"open",delegatesFocus:!1,styleSheets:[],ssr:!1,children:null},n}ph.propTypes={children:zt.oneOfType([zt.string,zt.node])},ph.defaultProps={children:""},fh.propTypes={root:zt.object.isRequired,children:zt.node},fh.defaultProps={children:null};var Jc=new Map;function XE(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"core",t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(r){return r.children};return new Proxy(e,{get:function(r,a){var l=HE(a,{separator:"-"}),i="".concat(n,"-").concat(l);return Jc.has(i)||Jc.set(i,KE({tag:l,render:t})),Jc.get(i)}})}var N5=XE();const JE=()=>d("div",{className:"prose",children:[o("h1",{children:"Forms"}),d("blockquote",{className:"intro",children:["There is something about styling forms, that's so not fun. It's like ",o("em",{children:'"How much less fun could this be?"'})," ","and the answer is ",o("em",{children:'"None, none... less fun."'}),o("div",{className:"attrib",children:"Nigel Tufnel's website designer"})]}),o("h2",{children:"None Less Fun"}),d(de,{children:[d("div",{children:[o("p",{children:"Anyone reading this who is old enough to have served in the browser wars will no doubt be rolling their eyes at this point, thinking that kids these days don't know how lucky they are."}),d("p",{children:["It's certainly true that things are ",o("i",{children:"much"})," better than they used.  But despite all the advances in CSS support and cross-browser compatibility, the default styling for HTML forms still looks like 1995 called and asked for its website back."]})]}),d("div",{children:[o("p",{children:"Badger CSS includes form styling presets, supporting both light and dark themes out of the box. It uses native form components for accessibility and mobile friendliness.  Everything is configurable if you want to change things, but you don't have to."}),o("p",{children:"Here's the same form rendered twice.  Once with the default HTML styling and again with the default Badger CSS styles.  In case you're wondering, there's no Javascript in any of these forms.  It's all just vanilla HTML and CSS."})]})]}),d("div",{className:"grid-2 gap-8 mar-t-10 stack-desktop",children:[d("div",{className:"output",children:[o("h3",{className:"mar-v",children:"Default HTML Form Styles"}),o("h4",{className:"mar-t mar-b-8",children:"Would you been seen holding this?"}),o(N5.div,{children:o("div",{dangerouslySetInnerHTML:{__html:g2}})})]}),d("div",{className:"output",children:[o("h3",{className:"mar-v",children:"Badger CSS Form Styles"}),o("h4",{className:"mar-t mar-b-8",children:"Beautiful plumage!"}),o("div",{dangerouslySetInnerHTML:{__html:g2}})]})]}),o("h2",{className:"mar-t-8",children:"Adaptive Sizes"}),d(de,{children:[d("p",{children:["All form components are sized using ems and will adapt to whatever the current text size is.  If you want a small form, for example, then you just need to add a ",o("code",{children:"small"})," class to the form or one of its parent containers."]}),o(Mo,{title:"Try it out",className:"mar-t-4",children:"Try selecting different sizes from the options below and see how the form inputs scale."})]}),o(T$,{}),o("h2",{children:"Accessibility and Focus"}),d(de,{children:[o("p",{children:"If you've played with any of the forms above you may have noticed the prominent ring around inputs when focussed.  This is important for accessibility to clearly indicate which field is selected."}),d("p",{children:["If for some reason you really, really need to disabled it because you're indicating the focus some other way then you can add the"," ",o("code",{children:"no-focus"})," class to the inputs."]})]}),o(I,{html:k$,language:"html"}),o("h2",{children:"Themes and Surfaces"}),d(de,{children:[o("p",{children:"Styling forms is made that much harder these days by the need to support both light and dark themes.  On top of that we might want to have forms included on different surfaces with varying levels of background intensity. Thanks to the magic of CSS custom properties we can tweak the colors used to render forms depending on the background color of the container."}),o("p",{children:"In these examples below it may not be immediately obvious that the colors are slightly different but they are.  They're different so that they look more-or-less the same, while providing adequate contrast."})]}),o("div",{className:"grid-3 gap-4 stack-widescreen mar-b-8",children:["surface","surface-1","surface-2","surface-3","surface-4","surface-5"].map(e=>d("div",{className:`${e} pad-6 border shadow-2`,children:[o("h3",{className:"font-mono mar-b-3",children:e}),o("div",{dangerouslySetInnerHTML:{__html:x$}})]},e))})]}),eI=Object.freeze(Object.defineProperty({__proto__:null,default:JE},Symbol.toStringTag,{value:"Module"})),nI=`<div class="input">
  Ceci n'est pas une entrée
</div>
`,tI=`<div class="input inline">
  Ceci n'est pas une entrée
</div>
`,rI=`<div class="grid-2 gap-4">
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
`,oI=`<div class="input" disabled>
  Ceci n'est pas une entrée
</div>

<div class="input disabled mar-t-4">
  Ceci n'est pas une entrée
</div>
`,aI=()=>d("div",{className:"prose",children:[o("h1",{children:"Fake Input"}),d("p",{children:["If you want something that isn't an input to look like an input then you can add the ",o("code",{children:"input"})," CSS class."]}),o(I,{html:nI,language:"html",caption:"Inline Text Input"}),o("h2",{children:"Inline Input"}),d("p",{children:["Just like regular inputs, they are full-width by default. Add the ",o("code",{children:"inline"})," class to give it a fluid width."]}),o(I,{html:tI,language:"html",caption:"Inline Text Input"}),o("h2",{children:"Grid and Flex Layout"}),d("p",{children:["You can also use the ",o(le,{to:"/utilities/grid",text:"grid"})," and"," ",o(le,{to:"/utilities/flexbox",text:"flexbox"})," classes to control layout."]}),o(I,{html:rI,language:"html",caption:"Grid and Flex"}),o("h2",{children:"Disabled Inputs"}),d("p",{children:["Add the ",o("code",{children:"disabled"})," attribute or CSS class if you want it to look disabled."]}),o(I,{html:oI,language:"html",caption:"Not an Input"})]}),lI=Object.freeze(Object.defineProperty({__proto__:null,default:aI},Symbol.toStringTag,{value:"Module"})),iI=`<style>
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
</div>`,sI=`<style>
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
</div>`,dI=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Multiple Input"}),o("p",{children:"Sometimes you need to create a form component that looks like a single input but is comprised of multiple inputs or other elements."}),d("p",{children:["In this case you can wrap them up in a container with the ",o("code",{children:"inputs"})," class.  See the",o(le,{to:"/forms/prefix-suffix",text:"Prefix and Suffix"})," page for details on adding the prefix icon."]}),o("h2",{children:"Credit Card Number"}),o("p",{children:"In this example we create an input for a credit card number. This demo doesn't have any interactive functionality and leaves a lot to be desired in terms of user experience.  For example, you can enter more than 4 numbers in each section, the focus doesn't automatically switch from one block to the next, and so on. But this is only supposed to be a demonstration of the styling, not the functionality."}),o("p",{children:"Making it work properly is left as an exercise for the reader."}),o(I,{html:iI,language:"html",caption:"Credit Card"}),o("h2",{children:"Date"}),o("p",{children:"This is also a less-than-perfect implementation in terms of functionality, but it demonstrates the form."}),o(I,{html:sI,language:"html",caption:"Date"})]}),cI=Object.freeze(Object.defineProperty({__proto__:null,default:dI},Symbol.toStringTag,{value:"Module"})),uI=`<div class="field">
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
`,hI=`<div class="field">
  <label>Inline text input</label>
  <div class="inputs">
    <div class="bare prefix">
      £
    </div>
    <input type="text" class="inline">
    <div class="bare suffix">
      .00
    </div>
  </div>
</div>

<div class="field">
  <label>Wide text input</label>
  <div class="inputs">
    <div class="bare prefix">
      £
    </div>
    <input type="text">
    <div class="bare suffix">
      .00
    </div>
  </div>
</div>

<div class="grid-2 gap-4">
  <div class="valid field">
    <label>Valid field</label>
    <div class="inputs">
      <div class="bare prefix">
        £
      </div>
      <input type="text">
      <div class="bare suffix">
        .00
      </div>
    </div>
  </div>
  <div class="invalid field">
    <label>Invalid field</label>
    <div class="inputs">
      <div class="bare prefix">
        £
      </div>
      <input type="text">
      <div class="bare suffix">
        .00
      </div>
    </div>
  </div>
</div>
`,pI=`<div class="grid-3 gap-4 stack-tablet">
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

`,fI=`<div class="grid-3 gap-4 stack-tablet">
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

`,gI=`<div class="grid-3 gap-4 stack-tablet">
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

`,vI=`<div class="field">
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
`,mI=`<div class="field">
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
`,bI=`<div class="field">
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

`,yI=`<div class="field">
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

`,wI=`<div class="field">
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
`,xI=`<div class="field">
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
`,kI=`<div class="field">
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
`,CI=`<div class="field">
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
`,SI=()=>d("div",{className:"prose",children:[o("h1",{children:"Prefix and Suffix"}),d("p",{children:["You can add prefixes and suffixes to form fields, or any combination of ",o(le,{to:"/forms/multi-inputs",text:"inputs"}),". Not only do the colours and focus rings work correctly, but they also adapt their colors for ",o("code",{children:"valid"})," and ",o("code",{children:"invalid"})," fields."]}),o(I,{html:uI,language:"html",caption:"Prefix and Suffix"}),o("h2",{children:"Shaded"}),d("p",{children:["To visually distinguish a prefix or suffix you you can add the ",o("code",{children:"shaded"})," class..."]}),o(I,{html:pI,language:"html",caption:"Shaded"}),o("h2",{children:"Lined"}),d("p",{children:["...or the ",o("code",{children:"lined"})," class."]}),o(I,{html:fI,language:"html",caption:"Lined"}),o("h2",{children:"Shaded and Lined"}),o("p",{children:"...or both."}),o(I,{html:gI,language:"html",caption:"Shaded and Lined"}),o("h2",{children:"Bare"}),d("p",{children:["If you prefer not to have the shading and separating border line then you can add the ",o("code",{children:"bare"})," class to either a prefix or suffix."]}),o(I,{html:hI,language:"html",caption:"Bare Prefix/Suffix"}),o("h2",{children:"Input Prefix"}),d("p",{children:["If you want to add a prefix to a field you should enclose the input in an element with the ",o("code",{children:"inputs"})," class and add the"," ",o("code",{children:"prefix"})," class to the prefix element.  You can add a prefix to a text input, textarea, select or a checkbox or radio option with the ",o("code",{children:"border"})," class set.  You can try it without the "," ",o("code",{children:"border"})," but the effect is lost somewhat."]}),o("h3",{children:"Text Input With Prefix"}),o(I,{html:vI,language:"html",caption:"Text Prefix"}),o("h3",{children:"Text Area Input With Prefix"}),o(I,{html:mI,language:"html",caption:"Text Area Prefix"}),o("h3",{children:"Select Input With Prefix"}),o(I,{html:bI,language:"html",caption:"Select Prefix"}),o("h3",{children:"Checkbox With Prefix"}),d("p",{children:["This only really works with checkboxes that have the"," ",o("code",{children:"border"})," class"]}),o(I,{html:yI,language:"html",caption:"Checkbox Prefix"}),o("h2",{children:"Input Suffix"}),d("p",{children:["Adding an input suffix is just the same, except for giving your suffix element the ",o("code",{children:"suffix"})," class and putting it after the input."]}),o("h3",{children:"Text Input With Suffix"}),o(I,{html:wI,language:"html",caption:"Text Suffix"}),o("h3",{children:"Text Area Input With Suffix"}),o(I,{html:xI,language:"html",caption:"Text Area Suffix"}),o("h3",{children:"Select Input With Suffix"}),o(I,{html:kI,language:"html",caption:"Select Suffix"}),o("h3",{children:"Checkbox With Suffix"}),d("p",{children:["This only really works with checkboxes that have the"," ",o("code",{children:"border"})," class"]}),o(I,{html:CI,language:"html",caption:"Checkbox Suffix"})]}),TI=Object.freeze(Object.defineProperty({__proto__:null,default:SI},Symbol.toStringTag,{value:"Module"})),_I=`<label>
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
`,LI=`<label class="inline radio">
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
`,$I=`<label class="inline border">
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
    <input type="radio" name="four">
    Grid 2
  </label>
  <label class="border">
    <input type="radio" name="four">
    Grid 3
  </label>
</div>
`,NI=`<div>
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
</div>`,EI=()=>d("div",{className:"prose",children:[o("h1",{children:"Radio Buttons"}),o("h2",{children:"Radio Class"}),d("p",{children:["Radio buttons are implemented much like"," ",o(le,{to:"/forms/checkboxes",text:"checkboxes"}),".  Create a"," ",o("code",{children:"label"})," enclosing an ",o("code",{children:"input"})," with the"," ",o("code",{children:'type="radio"'})," attribute."]}),d("p",{children:["Badger-CSS identifies labels that include a radio button input using the ",o("code",{children:":has()"})," CSS selector. All the major browsers currently support it, although Firefox was a bit late to the party, only adding support in v121 released on 19th December 2023."]}),d("p",{children:["As a work-around to support older versions of Firefox, you can add the ",o("code",{children:"radio"})," class to the ",o("code",{children:"label"}),"."]}),o(I,{html:_I,language:"html",caption:"Radio Buttons"}),o("h2",{children:"Inline Radio Buttons"}),d("p",{children:["Radio buttons are full-width by default. Add the ",o("code",{children:"inline"})," class to give them a fluid width."]}),o(I,{html:LI,language:"html",caption:"Inline Radio Buttons"}),o("h2",{children:"Radio Button Borders"}),d("p",{children:["Add the ",o("code",{children:"border"})," class for borders.  You may need to manually add margins using the ",o(le,{to:"/utilities/spacing",text:"margin"})," utility classes, or contain multiple checkboxes using the "," ",o(le,{to:"/utilities/flexbox",text:"flexbox"})," or "," ",o(le,{to:"/utilities/grid",text:"grid"})," container classes and set the gap between elements."]}),o(I,{html:$I,language:"html",caption:"Border Radio Buttons"}),o("h2",{children:"Custom Radio Buttons"}),o(I,{html:NI,language:"html",caption:"Custom Checkboxes"})]}),II=Object.freeze(Object.defineProperty({__proto__:null,default:EI},Symbol.toStringTag,{value:"Module"})),MI=`<select name="animal">
  <option value="">-- Choose an animal --</option>
  <option value="ant">Ant</option>
  <option value="badger">Badger</option>
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
  <option value="elephant">Elephant</option>
  <option value="ferret">Ferret</option>
  <option value="goldfish" disabled>Goldfish</option>
</select>
`,RI=`<select name="animal" class="inline">
  <option value="badger">Badger</option>
  <option value="mushroom">Mushroom</option>
  <option value="snake">Snake</option>
</select>
<select name="color" class="inline mar-l-2">
  <option value="badger">Badger</option>
  <option value="mushroom">Mushroom</option>
  <option value="snake">Snake</option>
</select>
`,PI=`<div class="grid-2 gap-4">
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
  <select name="color">
    <option value="badger">Badger</option>
    <option value="mushroom">Mushroom</option>
    <option value="snake">Snake</option>
  </select>
</div>
`,AI=`<select name="animal" required>
  <option value="" hidden disabled selected>Choose an animal</option>
  <option value="ant">Ant</option>
  <option value="badger">Badger</option>
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
  <option value="elephant">Elephant</option>
  <option value="ferret">Ferret</option>
  <option value="goldfish">Goldfish</option>
</select>
`,FI=`<div class="small flex top gap-4 mar-b-4">
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
`,OI=`<select name="animal">
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
`,zI=`<div>
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

`,DI=`<div class="select">
  <div class="input placeholder">
    Select a band member
  </div>
</div>

<div class="select open mar-t-4">
  <div class="input value">
    Viv Savage
  </div>
  <div class="options">
    <div class="option" data-value="nigel">
      Nigel Tufnel
    </div>
    <div class="option" data-value="david">
      David St. Hubbins
    </div>
    <div class="option" data-value="derek">
      Derek Smalls
    </div>
    <div class="option selected" data-value="viv">
      Viv Savage
    </div>
    <div class="option disabled" data-value="mick">
      Mick Shrimpton (deceased)
    </div>
  </div>
</div>`,BI=()=>d("div",{className:"prose",children:[o("h1",{children:"Select Input"}),o("p",{children:"Select inputs are the bane of web developers and designers everywhere. There are notoriously difficult to style.  They don't want to align with other elements.  Their size is often wrong.  And just when you think you've finally cracked it, you look at it on another browser and see that it's all on the wonk."}),o("p",{children:"I have wasted far too many hours of my life starting at forms like this one trying to get everything the same size and aligned properly."}),o(I,{html:FI,language:"html",caption:"Select Alignment"}),d("p",{children:["The least bad solution is to set ",o("code",{children:"appearance: none"})," to remove the browser-specific rendering quirks.  The problem then is that you also lose drop down arrow indicating that it's a select input.  So we have to put that back in using an SVG background image. But you don't need to worry about that - I did so you don't have to."]}),o(I,{html:MI,language:"html",caption:"Select Input"}),o("h2",{children:"Inline Select Input"}),d("p",{children:["Select inputs are full-width by default.  Add the ",o("code",{children:"inline"})," ","class to make them only as wide as necessary."]}),o(I,{html:RI,language:"html",caption:"Inline Select"}),o("h2",{children:"Grid and Flex Layout"}),d("p",{children:["You can also use the ",o(le,{to:"/utilities/grid",text:"grid"})," and"," ",o(le,{to:"/utilities/flexbox",text:"flexbox"})," classes to control layout."]}),o(I,{html:PI,language:"html",caption:"Grid/Flex"}),o("h2",{children:"Custom Icon"}),d("p",{children:["You can define your own drop down arrow icon using the"," ",o("code",{children:"--arrow-down"})," property.  It's a little bit tricky because you have to URI encode the SVG and define it as shown in this example.  If you've got an SVG icon with a simple path and your icon is 16px square then you can copy the definition from this example and insert your path data into the ",o("code",{children:"path d='...'"})," part."]}),d("p",{children:["Note that you can't use ",o("code",{children:"currentColor"})," to set the stroke or fill color.  You can define separate ",o("code",{children:"--arrow-down"})," ","properties for you light and dark themes, or you can use a neutral color like ",o("code",{children:"#888"})," which works well in both cases."]}),o(I,{html:zI,language:"html",caption:"Custom Icon"}),o("h2",{children:"Placeholder"}),d("p",{children:["Another annoying thing about select inputs is that they don't support the ",o("code",{children:"placeholder"})," attribute.  You can work around the problem by adding the ",o("code",{children:"required"})," attribute to the"," ",o("code",{children:"select"})," input and the ",o("code",{children:"hidden"}),","," ",o("code",{children:"disabled"})," and ",o("code",{children:"selected"})," attributes to the first option which contains your placeholder text."]}),o(I,{html:AI,language:"html",caption:"Select Placeholder"}),o("h2",{children:"Option Groups"}),d("p",{children:["You can group options using the ",o("code",{children:"optgroup"})," element."]}),o(I,{html:OI,language:"html",caption:"Option Groups"}),o("h2",{children:"Custom Select Component"}),d(de,{align:"bottom",children:[d("div",{children:[d("p",{className:"mar-t-none",children:["Sometimes the builtin ",o("code",{children:"select"})," element just isn't enough. If you want to define your own select component with more advanced functionality then you can piggy-back off the provided styles."]}),d("p",{children:["Add the ",o("code",{children:"select"})," CSS class to a container element. Then define an element with an ",o("code",{children:"input"})," class with either ",o("code",{children:"placeholder"})," for placeholder text or"," ",o("code",{children:"value"})," to designated a selected value.  Options should be defined in elements with the ",o("code",{children:"option"})," class, all in a container element having the ",o("code",{children:"options"})," class."]})]}),o(Mo,{children:"The examples below don't have any interactivity.  They're just for show."})]}),o(I,{html:DI,language:"html",caption:"Custom Select"})]}),jI=Object.freeze(Object.defineProperty({__proto__:null,default:BI},Symbol.toStringTag,{value:"Module"})),UI=`<style>
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
  [data-theme=dark] form.shaded, [data-theme=dark] .field {
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
</form>`,HI=()=>d("div",{className:"prose",children:[o("h1",{children:"Form Styling"}),o("p",{}),o(I,{html:UI,language:"html",caption:"Form Styling",expand:!0})]}),WI=Object.freeze(Object.defineProperty({__proto__:null,default:HI},Symbol.toStringTag,{value:"Module"})),VI=`<input
  type="text"
  name="my-input"
  placeholder="Placeholder text"
/>
`,GI=`<input
  type="text"
  name="my-input"
  placeholder="Inline"
  class="inline"
/>
`,YI=`<div class="grid-2 gap-4">
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
`,qI=`<div class="grid-3 gap-4">
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
`,ZI=`<div class="grid-2 gap-4">
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
</div>`,QI=()=>d("div",{className:"prose",children:[o("h1",{children:"Text Input"}),o("p",{children:"Text inputs are perhaps the most common kind of input."}),o(I,{html:VI,language:"html",caption:"Text Input"}),o("h2",{children:"Inline Text Input"}),d("p",{children:["Inputs are full-width by default. Add the ",o("code",{children:"inline"})," class to give it a fluid width."]}),o(I,{html:GI,language:"html",caption:"Inline Text Input"}),o("h2",{children:"Grid and Flex Layout"}),d("p",{children:["You can also use the ",o(le,{to:"/utilities/grid",text:"grid"})," and"," ",o(le,{to:"/utilities/flexbox",text:"flexbox"})," classes to control layout."]}),o(I,{html:YI,language:"html",caption:"Grid and Flex"}),o("h2",{children:"Other Input Types"}),d("p",{children:["You can set the ",o("code",{children:"type"})," to one of the other text-based input types (e.g. ",o("code",{children:"password"}),", ",o("code",{children:"number"}),","," ",o("code",{children:"telephone"}),", ",o("code",{children:"date"}),", ",o("code",{children:"time"}),", etc). There's also some styling provided for the ",o("code",{children:"color"})," type although it's notoriously hard to style and the appearance can vary on different browsers, devices and operating systems."]}),o(I,{html:qI,language:"html",caption:"Other Input Types"}),o("h2",{children:"Disabled Text Input"}),d("p",{children:["Add the ",o("code",{children:"disabled"})," attribute to disabled the input or the ",o("code",{children:"disabled"})," CSS class."]}),o(I,{html:ZI,language:"html",caption:"Disabled Text Input"})]}),KI=Object.freeze(Object.defineProperty({__proto__:null,default:QI},Symbol.toStringTag,{value:"Module"})),XI=`<textarea
  rows="5"
  placeholder="I like badgers because..."
></textarea>
`,JI=`<textarea
  rows="5"
  class="inline"
  placeholder="I like badgers because..."
></textarea>
`,eM=`<div class="grid-2 gap-4">
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

`,nM=`<textarea
  rows="5"
  placeholder="Badgers are brilliant..."
  disabled
></textarea>

<textarea
  rows="5"
  placeholder="Mushrooms are magic..."
  class="disabled"
></textarea>
`,tM=()=>d("div",{children:[o("h1",{children:"Text Area Input"}),d("p",{children:["Text area inputs are much like ",o(le,{to:"/form/text",text:"text inputs"}),"."]}),d("p",{children:["One thing to note (that always catches me out) - if you want placeholder text to appear then you have to make sure there is ",o("em",{children:"nothing"})," ","(not even a newline) between the opening and closing ",o("code",{children:"textarea"})," tags."]}),o(I,{html:XI,language:"html",caption:"Text Area Input",expand:!0}),o("h2",{children:"Inline Text Area Input"}),d("p",{children:["Text area inputs are full-width by default.  Add the"," ",o("code",{children:"inline"})," class to give them a fluid width."]}),o(I,{html:JI,language:"html",caption:"Inline Text Area Input",expand:!0}),o("h2",{children:"Grid and Flex Layout"}),d("p",{children:["You can also use the ",o(le,{to:"/utilities/grid",text:"grid"})," and"," ",o(le,{to:"/utilities/flexbox",text:"flexbox"})," classes to control layout."]}),o(I,{html:eM,language:"html",caption:"Grid and Flex"}),o("h2",{children:"Disabled Text Area Input"}),d("p",{children:["Add the ",o("code",{children:"disabled"})," attribute to disabled the input or the ",o("code",{children:"disabled"})," CSS class."]}),o(I,{html:nM,language:"html",caption:"Disabled Text Area Input"})]}),rM=Object.freeze(Object.defineProperty({__proto__:null,default:tM},Symbol.toStringTag,{value:"Module"})),oM=e=>D.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},D.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),D.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),D.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),D.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),D.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),D.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),D.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),aM=()=>d("div",{className:"prose",children:[o("h1",{children:"What's Wrong With It?"}),o("p",{className:"intro wide",children:"There are many, many CSS toolkits and UI frameworks already out there to choose from. If you're looking for something that's stable, reliable, comprehensive and well-supported then this probably isn't for you."}),d(de,{children:[d("div",{children:[o("h2",{children:"Work in Progress"}),o("p",{children:"This is a work in progress.  It started out life as an ad-hoc collection of CSS classes that I copy and pasted between projects.  Then it became part of Bader UI, a collection of React components implementing some basic UI widgets.  Now it's being moved out into its own module which concentrates on just the CSS without any dependency on React."}),o("p",{children:"One of the reasons that I'm moving it into a new module is because it gives me the opportunity to break backwards compatibility.  There are some things that, given the chance to do again, I would do differently. This gives me that chance and hopefully I won't make too many bad decisions that I later come to regret.  But until I've had a chance to eat my own dog food and build a few sites with it, I can't predict what's going to work well and what isn't."}),o("p",{children:"I'm also migrating everything to use modern CSS techniques which are now well supported by browsers.  That means that a lot of things that were previously hard become much easier.  But different."}),o("p",{children:"As a result, this module is still in a state of flux.  If you build anything with it now then there's a good chance that something will break in the near future."}),o("h2",{children:"Some Assembly Required"}),o("p",{children:"If you have a good working knowledge of modern CSS and SASS then you should be able to easily adapt it to your needs.  Nearly everything is customisable, either through SASS variables, CSS custom properties, or by using the provided scripts to build your own toolkit."}),d("p",{children:["You don't need to buy in to the whole package.  As well as being customisable it's also modular.  With a small amount of effort you can configure it to include the bits your want and ignore the rest. Or you can browse the source code and borrow the ",o("i",{children:"ideas"})," that you think are useful."]}),o("p",{children:"Just remember that this is aimed more at people who already know how to build web sites and are familiar with CSS. If you're looking for a fully-featured, widely used and well supported UI toolkit that does everything for you then there are plenty of others to choose from."}),o("p",{children:"If you don't like the sound of that then these probably aren't the badgers you're looking for.  You can go about your business. Move along."})]}),d("div",{children:[o("h2",{children:"Opinionated and Selfish Software"}),d("p",{children:["This is based on my personal collection of CSS styles and utility classes that I use on a daily basis in my job building web sites for clients. It's Open Source and you're welcome to use it but be aware that it's something that I built for ",o("em",{children:"me"})," to help"," ",o("em",{children:"me"})," get my job done."]}),o("p",{children:"I didn't build it for you (unless you're one of my clients) and I don't really have the time or inclination to promote it, increase the user base or provide unpaid support for it.  It's not my intention for this to be the next great CSS toolkit - there are plenty of those already. My goal isn't to change the World, only to make it a slightly better place."}),o("p",{children:"So be warned that it does things the way I like to do them.  You may not agree with all my decisions, but that's fine.  They're my decisions to make, not yours.  It's free software (in both senses: free speech and free beer) and if you don't like it then you're entitled to a full refund of the price you paid."}),o("p",{children:"On the plus-side, the Badger-UI toolkit contains a lot of tried and tested techniques for managing web site styles that have been honed over nearly 30 years of experience.  It contains the features that I can't live without when I'm building a web site.  Of course, you may have different ideas about the best way to do it, but this is what works for me.  It's supposed to be a reasonable starting point not the final destination."}),o("div",{className:"text-center",children:o(oM,{style:{width:"12em",marginTop:"2rem"}})})]})]})]}),lM=Object.freeze(Object.defineProperty({__proto__:null,default:aM},Symbol.toStringTag,{value:"Module"})),iM=`@charset "UTF-8";
/* config/all.scss */ /* config/namespaces.scss */ /* config/units.scss */
:where(html) {
  --unit-size: 1em;
  --unit-line: 1.5;
  --unit-space: 0.25;
  --unit-margin: 0.25rem;
  --unit-padding: 0.25em;
  --unit-padding-v: 0.25em;
  --unit-padding-h: 0.5em;
  --unit-radius: 0.25rem;
  --unit-transition: 0.3s;
}

:where(html) {
  --red-0: hsl(0, 65%, 5%);
  --red-5: hsl(0, 66%, 8%);
  --red-10: hsl(0, 68%, 11%);
  --red-15: hsl(0, 69%, 15%);
  --red-20: hsl(0, 70%, 18%);
  --red-25: hsl(0, 71%, 22%);
  --red-30: hsl(0, 72%, 27%);
  --red-35: hsl(0, 73%, 31%);
  --red-40: hsl(0, 73%, 36%);
  --red-45: hsl(0, 74%, 42%);
  --red-50: hsl(0, 74%, 48%);
  --red-55: hsl(0, 74%, 55%);
  --red-60: hsl(0, 75%, 62%);
  --red-65: hsl(0, 75%, 68%);
  --red-70: hsl(0, 74%, 74%);
  --red-75: hsl(0, 74%, 80%);
  --red-80: hsl(0, 74%, 84%);
  --red-85: hsl(0, 73%, 88%);
  --red-90: hsl(0, 73%, 92%);
  --red-95: hsl(0, 72%, 95%);
  --red-100: hsl(0, 71%, 98%);
  --brown-0: hsl(18, 52%, 5%);
  --brown-5: hsl(17, 53%, 8%);
  --brown-10: hsl(17, 54%, 11%);
  --brown-15: hsl(16, 54%, 14%);
  --brown-20: hsl(15, 55%, 17%);
  --brown-25: hsl(15, 56%, 20%);
  --brown-30: hsl(15, 56%, 24%);
  --brown-35: hsl(14, 56%, 28%);
  --brown-40: hsl(14, 57%, 32%);
  --brown-45: hsl(14, 57%, 37%);
  --brown-50: hsl(14, 57%, 42%);
  --brown-55: hsl(14, 58%, 47%);
  --brown-60: hsl(14, 58%, 53%);
  --brown-65: hsl(13, 58%, 60%);
  --brown-70: hsl(13, 58%, 67%);
  --brown-75: hsl(13, 58%, 75%);
  --brown-80: hsl(14, 58%, 81%);
  --brown-85: hsl(14, 58%, 87%);
  --brown-90: hsl(14, 58%, 92%);
  --brown-95: hsl(14, 57%, 95%);
  --brown-100: hsl(14, 57%, 98%);
  --orange-0: hsl(25, 93%, 5%);
  --orange-5: hsl(25, 94%, 8%);
  --orange-10: hsl(26, 94%, 11%);
  --orange-15: hsl(26, 95%, 14%);
  --orange-20: hsl(26, 96%, 18%);
  --orange-25: hsl(26, 96%, 21%);
  --orange-30: hsl(26, 96%, 25%);
  --orange-35: hsl(26, 97%, 30%);
  --orange-40: hsl(26, 97%, 35%);
  --orange-45: hsl(26, 97%, 40%);
  --orange-50: hsl(26, 97%, 46%);
  --orange-55: hsl(26, 96%, 52%);
  --orange-60: hsl(26, 96%, 59%);
  --orange-65: hsl(26, 95%, 65%);
  --orange-70: hsl(25, 94%, 72%);
  --orange-75: hsl(25, 93%, 78%);
  --orange-80: hsl(24, 92%, 83%);
  --orange-85: hsl(24, 91%, 88%);
  --orange-90: hsl(23, 90%, 91%);
  --orange-95: hsl(22, 88%, 95%);
  --orange-100: hsl(20, 87%, 97%);
  --yellow-0: hsl(52, 90%, 5%);
  --yellow-5: hsl(51, 91%, 8%);
  --yellow-10: hsl(49, 92%, 10%);
  --yellow-15: hsl(48, 93%, 13%);
  --yellow-20: hsl(47, 94%, 17%);
  --yellow-25: hsl(46, 95%, 20%);
  --yellow-30: hsl(45, 96%, 24%);
  --yellow-35: hsl(44, 96%, 28%);
  --yellow-40: hsl(43, 97%, 33%);
  --yellow-45: hsl(42, 97%, 38%);
  --yellow-50: hsl(41, 97%, 43%);
  --yellow-55: hsl(41, 96%, 48%);
  --yellow-60: hsl(40, 95%, 54%);
  --yellow-65: hsl(39, 94%, 60%);
  --yellow-70: hsl(39, 93%, 66%);
  --yellow-75: hsl(38, 92%, 72%);
  --yellow-80: hsl(38, 90%, 77%);
  --yellow-85: hsl(38, 88%, 82%);
  --yellow-90: hsl(37, 86%, 87%);
  --yellow-95: hsl(37, 84%, 92%);
  --yellow-100: hsl(37, 82%, 96%);
  --olive-0: hsl(64, 66%, 4%);
  --olive-5: hsl(64, 68%, 6%);
  --olive-10: hsl(65, 70%, 9%);
  --olive-15: hsl(65, 72%, 12%);
  --olive-20: hsl(66, 73%, 15%);
  --olive-25: hsl(66, 74%, 18%);
  --olive-30: hsl(67, 74%, 21%);
  --olive-35: hsl(67, 74%, 25%);
  --olive-40: hsl(67, 73%, 29%);
  --olive-45: hsl(68, 70%, 33%);
  --olive-50: hsl(68, 66%, 37%);
  --olive-55: hsl(69, 60%, 43%);
  --olive-60: hsl(69, 55%, 48%);
  --olive-65: hsl(70, 52%, 54%);
  --olive-70: hsl(70, 50%, 61%);
  --olive-75: hsl(71, 49%, 68%);
  --olive-80: hsl(71, 48%, 75%);
  --olive-85: hsl(71, 49%, 82%);
  --olive-90: hsl(72, 49%, 87%);
  --olive-95: hsl(72, 51%, 93%);
  --olive-100: hsl(72, 52%, 97%);
  --green-0: hsl(117, 45%, 5%);
  --green-5: hsl(117, 48%, 8%);
  --green-10: hsl(117, 50%, 11%);
  --green-15: hsl(117, 52%, 14%);
  --green-20: hsl(117, 53%, 17%);
  --green-25: hsl(117, 54%, 21%);
  --green-30: hsl(117, 55%, 25%);
  --green-35: hsl(117, 55%, 29%);
  --green-40: hsl(117, 55%, 33%);
  --green-45: hsl(117, 54%, 38%);
  --green-50: hsl(117, 54%, 43%);
  --green-55: hsl(117, 53%, 48%);
  --green-60: hsl(117, 52%, 54%);
  --green-65: hsl(117, 51%, 60%);
  --green-70: hsl(117, 50%, 66%);
  --green-75: hsl(117, 48%, 73%);
  --green-80: hsl(117, 47%, 79%);
  --green-85: hsl(117, 46%, 85%);
  --green-90: hsl(116, 45%, 90%);
  --green-95: hsl(116, 44%, 94%);
  --green-100: hsl(116, 43%, 98%);
  --teal-0: hsl(165, 52%, 5%);
  --teal-5: hsl(165, 56%, 7%);
  --teal-10: hsl(165, 59%, 10%);
  --teal-15: hsl(165, 61%, 13%);
  --teal-20: hsl(165, 62%, 15%);
  --teal-25: hsl(165, 63%, 18%);
  --teal-30: hsl(165, 63%, 21%);
  --teal-35: hsl(165, 63%, 25%);
  --teal-40: hsl(165, 62%, 29%);
  --teal-45: hsl(165, 60%, 33%);
  --teal-50: hsl(165, 59%, 37%);
  --teal-55: hsl(165, 58%, 42%);
  --teal-60: hsl(165, 57%, 47%);
  --teal-65: hsl(165, 56%, 53%);
  --teal-70: hsl(165, 55%, 60%);
  --teal-75: hsl(165, 54%, 67%);
  --teal-80: hsl(165, 54%, 75%);
  --teal-85: hsl(165, 55%, 81%);
  --teal-90: hsl(165, 55%, 88%);
  --teal-95: hsl(165, 57%, 93%);
  --teal-100: hsl(165, 58%, 98%);
  --blue-0: hsl(202, 72%, 5%);
  --blue-5: hsl(202, 74%, 8%);
  --blue-10: hsl(203, 75%, 11%);
  --blue-15: hsl(203, 77%, 15%);
  --blue-20: hsl(203, 78%, 18%);
  --blue-25: hsl(204, 79%, 22%);
  --blue-30: hsl(204, 80%, 26%);
  --blue-35: hsl(205, 81%, 31%);
  --blue-40: hsl(205, 82%, 35%);
  --blue-45: hsl(205, 83%, 41%);
  --blue-50: hsl(206, 84%, 46%);
  --blue-55: hsl(206, 84%, 52%);
  --blue-60: hsl(207, 85%, 58%);
  --blue-65: hsl(207, 85%, 65%);
  --blue-70: hsl(207, 85%, 71%);
  --blue-75: hsl(207, 85%, 77%);
  --blue-80: hsl(208, 84%, 82%);
  --blue-85: hsl(208, 84%, 87%);
  --blue-90: hsl(208, 83%, 91%);
  --blue-95: hsl(208, 82%, 95%);
  --blue-100: hsl(208, 81%, 98%);
  --indigo-0: hsl(238, 50%, 7%);
  --indigo-5: hsl(238, 52%, 11%);
  --indigo-10: hsl(237, 54%, 16%);
  --indigo-15: hsl(237, 56%, 21%);
  --indigo-20: hsl(237, 58%, 27%);
  --indigo-25: hsl(237, 61%, 32%);
  --indigo-30: hsl(236, 64%, 38%);
  --indigo-35: hsl(236, 67%, 44%);
  --indigo-40: hsl(236, 71%, 50%);
  --indigo-45: hsl(236, 75%, 56%);
  --indigo-50: hsl(236, 78%, 62%);
  --indigo-55: hsl(236, 81%, 67%);
  --indigo-60: hsl(236, 82%, 72%);
  --indigo-65: hsl(237, 82%, 77%);
  --indigo-70: hsl(237, 82%, 81%);
  --indigo-75: hsl(237, 81%, 85%);
  --indigo-80: hsl(237, 79%, 89%);
  --indigo-85: hsl(237, 77%, 92%);
  --indigo-90: hsl(237, 75%, 94%);
  --indigo-95: hsl(237, 72%, 97%);
  --indigo-100: hsl(237, 70%, 99%);
  --violet-0: hsl(247, 53%, 8%);
  --violet-5: hsl(249, 53%, 12%);
  --violet-10: hsl(250, 54%, 16%);
  --violet-15: hsl(252, 55%, 21%);
  --violet-20: hsl(253, 56%, 26%);
  --violet-25: hsl(254, 57%, 31%);
  --violet-30: hsl(255, 59%, 36%);
  --violet-35: hsl(256, 62%, 42%);
  --violet-40: hsl(257, 66%, 48%);
  --violet-45: hsl(258, 71%, 53%);
  --violet-50: hsl(259, 76%, 59%);
  --violet-55: hsl(260, 79%, 65%);
  --violet-60: hsl(260, 81%, 71%);
  --violet-65: hsl(261, 82%, 76%);
  --violet-70: hsl(261, 82%, 80%);
  --violet-75: hsl(262, 82%, 85%);
  --violet-80: hsl(262, 81%, 88%);
  --violet-85: hsl(263, 80%, 92%);
  --violet-90: hsl(263, 79%, 94%);
  --violet-95: hsl(263, 78%, 97%);
  --violet-100: hsl(263, 77%, 99%);
  --purple-0: hsl(274, 47%, 6%);
  --purple-5: hsl(275, 50%, 8%);
  --purple-10: hsl(276, 53%, 11%);
  --purple-15: hsl(278, 56%, 14%);
  --purple-20: hsl(279, 59%, 18%);
  --purple-25: hsl(280, 62%, 22%);
  --purple-30: hsl(281, 64%, 26%);
  --purple-35: hsl(282, 67%, 31%);
  --purple-40: hsl(282, 69%, 37%);
  --purple-45: hsl(283, 71%, 43%);
  --purple-50: hsl(284, 73%, 49%);
  --purple-55: hsl(285, 74%, 55%);
  --purple-60: hsl(285, 75%, 62%);
  --purple-65: hsl(286, 77%, 68%);
  --purple-70: hsl(286, 77%, 75%);
  --purple-75: hsl(287, 78%, 80%);
  --purple-80: hsl(287, 79%, 85%);
  --purple-85: hsl(288, 79%, 90%);
  --purple-90: hsl(288, 80%, 94%);
  --purple-95: hsl(288, 80%, 97%);
  --purple-100: hsl(288, 80%, 99%);
  --pink-0: hsl(312, 64%, 5%);
  --pink-5: hsl(312, 66%, 7%);
  --pink-10: hsl(313, 69%, 10%);
  --pink-15: hsl(313, 71%, 13%);
  --pink-20: hsl(313, 73%, 16%);
  --pink-25: hsl(313, 74%, 19%);
  --pink-30: hsl(313, 76%, 23%);
  --pink-35: hsl(313, 77%, 27%);
  --pink-40: hsl(313, 77%, 32%);
  --pink-45: hsl(313, 78%, 37%);
  --pink-50: hsl(313, 77%, 42%);
  --pink-55: hsl(313, 77%, 48%);
  --pink-60: hsl(313, 76%, 55%);
  --pink-65: hsl(313, 76%, 63%);
  --pink-70: hsl(314, 75%, 70%);
  --pink-75: hsl(314, 74%, 77%);
  --pink-80: hsl(314, 73%, 83%);
  --pink-85: hsl(314, 72%, 88%);
  --pink-90: hsl(315, 71%, 92%);
  --pink-95: hsl(315, 70%, 96%);
  --pink-100: hsl(316, 69%, 99%);
  --maroon-0: hsl(339, 57%, 6%);
  --maroon-5: hsl(339, 62%, 8%);
  --maroon-10: hsl(339, 66%, 11%);
  --maroon-15: hsl(339, 70%, 13%);
  --maroon-20: hsl(339, 74%, 17%);
  --maroon-25: hsl(339, 76%, 20%);
  --maroon-30: hsl(339, 79%, 24%);
  --maroon-35: hsl(339, 81%, 29%);
  --maroon-40: hsl(339, 82%, 33%);
  --maroon-45: hsl(339, 83%, 39%);
  --maroon-50: hsl(339, 84%, 45%);
  --maroon-55: hsl(339, 84%, 51%);
  --maroon-60: hsl(339, 84%, 57%);
  --maroon-65: hsl(339, 83%, 64%);
  --maroon-70: hsl(339, 82%, 71%);
  --maroon-75: hsl(339, 81%, 77%);
  --maroon-80: hsl(339, 79%, 83%);
  --maroon-85: hsl(339, 78%, 88%);
  --maroon-90: hsl(339, 76%, 92%);
  --maroon-95: hsl(339, 73%, 96%);
  --maroon-100: hsl(339, 71%, 99%);
  --grey-0: hsl(206, 5%, 5%);
  --grey-5: hsl(206, 5%, 10%);
  --grey-10: hsl(206, 5%, 14%);
  --grey-15: hsl(206, 5%, 19%);
  --grey-20: hsl(206, 5%, 23%);
  --grey-25: hsl(206, 5%, 28%);
  --grey-30: hsl(206, 5%, 33%);
  --grey-35: hsl(206, 5%, 37%);
  --grey-40: hsl(206, 5%, 42%);
  --grey-45: hsl(206, 5%, 47%);
  --grey-50: hsl(206, 5%, 52%);
  --grey-55: hsl(206, 5%, 56%);
  --grey-60: hsl(206, 5%, 61%);
  --grey-65: hsl(206, 5%, 66%);
  --grey-70: hsl(206, 5%, 71%);
  --grey-75: hsl(206, 5%, 75%);
  --grey-80: hsl(206, 5%, 80%);
  --grey-85: hsl(206, 5%, 85%);
  --grey-90: hsl(206, 5%, 89%);
  --grey-95: hsl(206, 5%, 94%);
  --grey-100: hsl(206, 5%, 98%);
  --grey20-0: hsl(206, 20%, 5%);
  --grey20-5: hsl(206, 20%, 10%);
  --grey20-10: hsl(206, 20%, 14%);
  --grey20-15: hsl(206, 20%, 19%);
  --grey20-20: hsl(206, 20%, 23%);
  --grey20-25: hsl(206, 20%, 28%);
  --grey20-30: hsl(206, 20%, 33%);
  --grey20-35: hsl(206, 20%, 37%);
  --grey20-40: hsl(206, 20%, 42%);
  --grey20-45: hsl(206, 20%, 47%);
  --grey20-50: hsl(206, 20%, 52%);
  --grey20-55: hsl(206, 20%, 56%);
  --grey20-60: hsl(206, 20%, 61%);
  --grey20-65: hsl(206, 20%, 66%);
  --grey20-70: hsl(206, 20%, 71%);
  --grey20-75: hsl(206, 20%, 75%);
  --grey20-80: hsl(206, 20%, 80%);
  --grey20-85: hsl(206, 20%, 85%);
  --grey20-90: hsl(206, 20%, 89%);
  --grey20-95: hsl(206, 20%, 94%);
  --grey20-100: hsl(206, 20%, 98%);
  --grey40-0: hsl(206, 40%, 5%);
  --grey40-5: hsl(206, 40%, 10%);
  --grey40-10: hsl(206, 40%, 14%);
  --grey40-15: hsl(206, 40%, 19%);
  --grey40-20: hsl(206, 40%, 23%);
  --grey40-25: hsl(206, 40%, 28%);
  --grey40-30: hsl(206, 40%, 33%);
  --grey40-35: hsl(206, 40%, 37%);
  --grey40-40: hsl(206, 40%, 42%);
  --grey40-45: hsl(206, 40%, 47%);
  --grey40-50: hsl(206, 40%, 52%);
  --grey40-55: hsl(206, 40%, 56%);
  --grey40-60: hsl(206, 40%, 61%);
  --grey40-65: hsl(206, 40%, 66%);
  --grey40-70: hsl(206, 40%, 71%);
  --grey40-75: hsl(206, 40%, 75%);
  --grey40-80: hsl(206, 40%, 80%);
  --grey40-85: hsl(206, 40%, 85%);
  --grey40-90: hsl(206, 40%, 89%);
  --grey40-95: hsl(206, 40%, 94%);
  --grey40-100: hsl(206, 40%, 98%);
  --brand-0: var(--blue-0);
  --brand-5: var(--blue-5);
  --brand-10: var(--blue-10);
  --brand-15: var(--blue-15);
  --brand-20: var(--blue-20);
  --brand-25: var(--blue-25);
  --brand-30: var(--blue-30);
  --brand-35: var(--blue-35);
  --brand-40: var(--blue-40);
  --brand-45: var(--blue-45);
  --brand-50: var(--blue-50);
  --brand-55: var(--blue-55);
  --brand-60: var(--blue-60);
  --brand-65: var(--blue-65);
  --brand-70: var(--blue-70);
  --brand-75: var(--blue-75);
  --brand-80: var(--blue-80);
  --brand-85: var(--blue-85);
  --brand-90: var(--blue-90);
  --brand-95: var(--blue-95);
  --brand-100: var(--blue-100);
  --color-0: var(--grey-0);
  --color-5: var(--grey-5);
  --color-10: var(--grey-10);
  --color-15: var(--grey-15);
  --color-20: var(--grey-20);
  --color-25: var(--grey-25);
  --color-30: var(--grey-30);
  --color-35: var(--grey-35);
  --color-40: var(--grey-40);
  --color-45: var(--grey-45);
  --color-50: var(--grey-50);
  --color-55: var(--grey-55);
  --color-60: var(--grey-60);
  --color-65: var(--grey-65);
  --color-70: var(--grey-70);
  --color-75: var(--grey-75);
  --color-80: var(--grey-80);
  --color-85: var(--grey-85);
  --color-90: var(--grey-90);
  --color-95: var(--grey-95);
  --color-100: var(--grey-100);
}

.red {
  --color-0: var(--red-0);
  --color-5: var(--red-5);
  --color-10: var(--red-10);
  --color-15: var(--red-15);
  --color-20: var(--red-20);
  --color-25: var(--red-25);
  --color-30: var(--red-30);
  --color-35: var(--red-35);
  --color-40: var(--red-40);
  --color-45: var(--red-45);
  --color-50: var(--red-50);
  --color-55: var(--red-55);
  --color-60: var(--red-60);
  --color-65: var(--red-65);
  --color-70: var(--red-70);
  --color-75: var(--red-75);
  --color-80: var(--red-80);
  --color-85: var(--red-85);
  --color-90: var(--red-90);
  --color-95: var(--red-95);
  --color-100: var(--red-100);
}

.brown {
  --color-0: var(--brown-0);
  --color-5: var(--brown-5);
  --color-10: var(--brown-10);
  --color-15: var(--brown-15);
  --color-20: var(--brown-20);
  --color-25: var(--brown-25);
  --color-30: var(--brown-30);
  --color-35: var(--brown-35);
  --color-40: var(--brown-40);
  --color-45: var(--brown-45);
  --color-50: var(--brown-50);
  --color-55: var(--brown-55);
  --color-60: var(--brown-60);
  --color-65: var(--brown-65);
  --color-70: var(--brown-70);
  --color-75: var(--brown-75);
  --color-80: var(--brown-80);
  --color-85: var(--brown-85);
  --color-90: var(--brown-90);
  --color-95: var(--brown-95);
  --color-100: var(--brown-100);
}

.orange {
  --color-0: var(--orange-0);
  --color-5: var(--orange-5);
  --color-10: var(--orange-10);
  --color-15: var(--orange-15);
  --color-20: var(--orange-20);
  --color-25: var(--orange-25);
  --color-30: var(--orange-30);
  --color-35: var(--orange-35);
  --color-40: var(--orange-40);
  --color-45: var(--orange-45);
  --color-50: var(--orange-50);
  --color-55: var(--orange-55);
  --color-60: var(--orange-60);
  --color-65: var(--orange-65);
  --color-70: var(--orange-70);
  --color-75: var(--orange-75);
  --color-80: var(--orange-80);
  --color-85: var(--orange-85);
  --color-90: var(--orange-90);
  --color-95: var(--orange-95);
  --color-100: var(--orange-100);
}

.yellow {
  --color-0: var(--yellow-0);
  --color-5: var(--yellow-5);
  --color-10: var(--yellow-10);
  --color-15: var(--yellow-15);
  --color-20: var(--yellow-20);
  --color-25: var(--yellow-25);
  --color-30: var(--yellow-30);
  --color-35: var(--yellow-35);
  --color-40: var(--yellow-40);
  --color-45: var(--yellow-45);
  --color-50: var(--yellow-50);
  --color-55: var(--yellow-55);
  --color-60: var(--yellow-60);
  --color-65: var(--yellow-65);
  --color-70: var(--yellow-70);
  --color-75: var(--yellow-75);
  --color-80: var(--yellow-80);
  --color-85: var(--yellow-85);
  --color-90: var(--yellow-90);
  --color-95: var(--yellow-95);
  --color-100: var(--yellow-100);
}

.olive {
  --color-0: var(--olive-0);
  --color-5: var(--olive-5);
  --color-10: var(--olive-10);
  --color-15: var(--olive-15);
  --color-20: var(--olive-20);
  --color-25: var(--olive-25);
  --color-30: var(--olive-30);
  --color-35: var(--olive-35);
  --color-40: var(--olive-40);
  --color-45: var(--olive-45);
  --color-50: var(--olive-50);
  --color-55: var(--olive-55);
  --color-60: var(--olive-60);
  --color-65: var(--olive-65);
  --color-70: var(--olive-70);
  --color-75: var(--olive-75);
  --color-80: var(--olive-80);
  --color-85: var(--olive-85);
  --color-90: var(--olive-90);
  --color-95: var(--olive-95);
  --color-100: var(--olive-100);
}

.green {
  --color-0: var(--green-0);
  --color-5: var(--green-5);
  --color-10: var(--green-10);
  --color-15: var(--green-15);
  --color-20: var(--green-20);
  --color-25: var(--green-25);
  --color-30: var(--green-30);
  --color-35: var(--green-35);
  --color-40: var(--green-40);
  --color-45: var(--green-45);
  --color-50: var(--green-50);
  --color-55: var(--green-55);
  --color-60: var(--green-60);
  --color-65: var(--green-65);
  --color-70: var(--green-70);
  --color-75: var(--green-75);
  --color-80: var(--green-80);
  --color-85: var(--green-85);
  --color-90: var(--green-90);
  --color-95: var(--green-95);
  --color-100: var(--green-100);
}

.teal {
  --color-0: var(--teal-0);
  --color-5: var(--teal-5);
  --color-10: var(--teal-10);
  --color-15: var(--teal-15);
  --color-20: var(--teal-20);
  --color-25: var(--teal-25);
  --color-30: var(--teal-30);
  --color-35: var(--teal-35);
  --color-40: var(--teal-40);
  --color-45: var(--teal-45);
  --color-50: var(--teal-50);
  --color-55: var(--teal-55);
  --color-60: var(--teal-60);
  --color-65: var(--teal-65);
  --color-70: var(--teal-70);
  --color-75: var(--teal-75);
  --color-80: var(--teal-80);
  --color-85: var(--teal-85);
  --color-90: var(--teal-90);
  --color-95: var(--teal-95);
  --color-100: var(--teal-100);
}

.blue {
  --color-0: var(--blue-0);
  --color-5: var(--blue-5);
  --color-10: var(--blue-10);
  --color-15: var(--blue-15);
  --color-20: var(--blue-20);
  --color-25: var(--blue-25);
  --color-30: var(--blue-30);
  --color-35: var(--blue-35);
  --color-40: var(--blue-40);
  --color-45: var(--blue-45);
  --color-50: var(--blue-50);
  --color-55: var(--blue-55);
  --color-60: var(--blue-60);
  --color-65: var(--blue-65);
  --color-70: var(--blue-70);
  --color-75: var(--blue-75);
  --color-80: var(--blue-80);
  --color-85: var(--blue-85);
  --color-90: var(--blue-90);
  --color-95: var(--blue-95);
  --color-100: var(--blue-100);
}

.indigo {
  --color-0: var(--indigo-0);
  --color-5: var(--indigo-5);
  --color-10: var(--indigo-10);
  --color-15: var(--indigo-15);
  --color-20: var(--indigo-20);
  --color-25: var(--indigo-25);
  --color-30: var(--indigo-30);
  --color-35: var(--indigo-35);
  --color-40: var(--indigo-40);
  --color-45: var(--indigo-45);
  --color-50: var(--indigo-50);
  --color-55: var(--indigo-55);
  --color-60: var(--indigo-60);
  --color-65: var(--indigo-65);
  --color-70: var(--indigo-70);
  --color-75: var(--indigo-75);
  --color-80: var(--indigo-80);
  --color-85: var(--indigo-85);
  --color-90: var(--indigo-90);
  --color-95: var(--indigo-95);
  --color-100: var(--indigo-100);
}

.violet {
  --color-0: var(--violet-0);
  --color-5: var(--violet-5);
  --color-10: var(--violet-10);
  --color-15: var(--violet-15);
  --color-20: var(--violet-20);
  --color-25: var(--violet-25);
  --color-30: var(--violet-30);
  --color-35: var(--violet-35);
  --color-40: var(--violet-40);
  --color-45: var(--violet-45);
  --color-50: var(--violet-50);
  --color-55: var(--violet-55);
  --color-60: var(--violet-60);
  --color-65: var(--violet-65);
  --color-70: var(--violet-70);
  --color-75: var(--violet-75);
  --color-80: var(--violet-80);
  --color-85: var(--violet-85);
  --color-90: var(--violet-90);
  --color-95: var(--violet-95);
  --color-100: var(--violet-100);
}

.purple {
  --color-0: var(--purple-0);
  --color-5: var(--purple-5);
  --color-10: var(--purple-10);
  --color-15: var(--purple-15);
  --color-20: var(--purple-20);
  --color-25: var(--purple-25);
  --color-30: var(--purple-30);
  --color-35: var(--purple-35);
  --color-40: var(--purple-40);
  --color-45: var(--purple-45);
  --color-50: var(--purple-50);
  --color-55: var(--purple-55);
  --color-60: var(--purple-60);
  --color-65: var(--purple-65);
  --color-70: var(--purple-70);
  --color-75: var(--purple-75);
  --color-80: var(--purple-80);
  --color-85: var(--purple-85);
  --color-90: var(--purple-90);
  --color-95: var(--purple-95);
  --color-100: var(--purple-100);
}

.pink {
  --color-0: var(--pink-0);
  --color-5: var(--pink-5);
  --color-10: var(--pink-10);
  --color-15: var(--pink-15);
  --color-20: var(--pink-20);
  --color-25: var(--pink-25);
  --color-30: var(--pink-30);
  --color-35: var(--pink-35);
  --color-40: var(--pink-40);
  --color-45: var(--pink-45);
  --color-50: var(--pink-50);
  --color-55: var(--pink-55);
  --color-60: var(--pink-60);
  --color-65: var(--pink-65);
  --color-70: var(--pink-70);
  --color-75: var(--pink-75);
  --color-80: var(--pink-80);
  --color-85: var(--pink-85);
  --color-90: var(--pink-90);
  --color-95: var(--pink-95);
  --color-100: var(--pink-100);
}

.maroon {
  --color-0: var(--maroon-0);
  --color-5: var(--maroon-5);
  --color-10: var(--maroon-10);
  --color-15: var(--maroon-15);
  --color-20: var(--maroon-20);
  --color-25: var(--maroon-25);
  --color-30: var(--maroon-30);
  --color-35: var(--maroon-35);
  --color-40: var(--maroon-40);
  --color-45: var(--maroon-45);
  --color-50: var(--maroon-50);
  --color-55: var(--maroon-55);
  --color-60: var(--maroon-60);
  --color-65: var(--maroon-65);
  --color-70: var(--maroon-70);
  --color-75: var(--maroon-75);
  --color-80: var(--maroon-80);
  --color-85: var(--maroon-85);
  --color-90: var(--maroon-90);
  --color-95: var(--maroon-95);
  --color-100: var(--maroon-100);
}

.grey {
  --color-0: var(--grey-0);
  --color-5: var(--grey-5);
  --color-10: var(--grey-10);
  --color-15: var(--grey-15);
  --color-20: var(--grey-20);
  --color-25: var(--grey-25);
  --color-30: var(--grey-30);
  --color-35: var(--grey-35);
  --color-40: var(--grey-40);
  --color-45: var(--grey-45);
  --color-50: var(--grey-50);
  --color-55: var(--grey-55);
  --color-60: var(--grey-60);
  --color-65: var(--grey-65);
  --color-70: var(--grey-70);
  --color-75: var(--grey-75);
  --color-80: var(--grey-80);
  --color-85: var(--grey-85);
  --color-90: var(--grey-90);
  --color-95: var(--grey-95);
  --color-100: var(--grey-100);
}

.grey20 {
  --color-0: var(--grey20-0);
  --color-5: var(--grey20-5);
  --color-10: var(--grey20-10);
  --color-15: var(--grey20-15);
  --color-20: var(--grey20-20);
  --color-25: var(--grey20-25);
  --color-30: var(--grey20-30);
  --color-35: var(--grey20-35);
  --color-40: var(--grey20-40);
  --color-45: var(--grey20-45);
  --color-50: var(--grey20-50);
  --color-55: var(--grey20-55);
  --color-60: var(--grey20-60);
  --color-65: var(--grey20-65);
  --color-70: var(--grey20-70);
  --color-75: var(--grey20-75);
  --color-80: var(--grey20-80);
  --color-85: var(--grey20-85);
  --color-90: var(--grey20-90);
  --color-95: var(--grey20-95);
  --color-100: var(--grey20-100);
}

.grey40 {
  --color-0: var(--grey40-0);
  --color-5: var(--grey40-5);
  --color-10: var(--grey40-10);
  --color-15: var(--grey40-15);
  --color-20: var(--grey40-20);
  --color-25: var(--grey40-25);
  --color-30: var(--grey40-30);
  --color-35: var(--grey40-35);
  --color-40: var(--grey40-40);
  --color-45: var(--grey40-45);
  --color-50: var(--grey40-50);
  --color-55: var(--grey40-55);
  --color-60: var(--grey40-60);
  --color-65: var(--grey40-65);
  --color-70: var(--grey40-70);
  --color-75: var(--grey40-75);
  --color-80: var(--grey40-80);
  --color-85: var(--grey40-85);
  --color-90: var(--grey40-90);
  --color-95: var(--grey40-95);
  --color-100: var(--grey40-100);
}

.brand {
  --color-0: var(--blue-0);
  --color-5: var(--blue-5);
  --color-10: var(--blue-10);
  --color-15: var(--blue-15);
  --color-20: var(--blue-20);
  --color-25: var(--blue-25);
  --color-30: var(--blue-30);
  --color-35: var(--blue-35);
  --color-40: var(--blue-40);
  --color-45: var(--blue-45);
  --color-50: var(--blue-50);
  --color-55: var(--blue-55);
  --color-60: var(--blue-60);
  --color-65: var(--blue-65);
  --color-70: var(--blue-70);
  --color-75: var(--blue-75);
  --color-80: var(--blue-80);
  --color-85: var(--blue-85);
  --color-90: var(--blue-90);
  --color-95: var(--blue-95);
  --color-100: var(--blue-100);
}

.info {
  --color-0: var(--blue-0);
  --color-5: var(--blue-5);
  --color-10: var(--blue-10);
  --color-15: var(--blue-15);
  --color-20: var(--blue-20);
  --color-25: var(--blue-25);
  --color-30: var(--blue-30);
  --color-35: var(--blue-35);
  --color-40: var(--blue-40);
  --color-45: var(--blue-45);
  --color-50: var(--blue-50);
  --color-55: var(--blue-55);
  --color-60: var(--blue-60);
  --color-65: var(--blue-65);
  --color-70: var(--blue-70);
  --color-75: var(--blue-75);
  --color-80: var(--blue-80);
  --color-85: var(--blue-85);
  --color-90: var(--blue-90);
  --color-95: var(--blue-95);
  --color-100: var(--blue-100);
}

.success {
  --color-0: var(--green-0);
  --color-5: var(--green-5);
  --color-10: var(--green-10);
  --color-15: var(--green-15);
  --color-20: var(--green-20);
  --color-25: var(--green-25);
  --color-30: var(--green-30);
  --color-35: var(--green-35);
  --color-40: var(--green-40);
  --color-45: var(--green-45);
  --color-50: var(--green-50);
  --color-55: var(--green-55);
  --color-60: var(--green-60);
  --color-65: var(--green-65);
  --color-70: var(--green-70);
  --color-75: var(--green-75);
  --color-80: var(--green-80);
  --color-85: var(--green-85);
  --color-90: var(--green-90);
  --color-95: var(--green-95);
  --color-100: var(--green-100);
}

.warning {
  --color-0: var(--orange-0);
  --color-5: var(--orange-5);
  --color-10: var(--orange-10);
  --color-15: var(--orange-15);
  --color-20: var(--orange-20);
  --color-25: var(--orange-25);
  --color-30: var(--orange-30);
  --color-35: var(--orange-35);
  --color-40: var(--orange-40);
  --color-45: var(--orange-45);
  --color-50: var(--orange-50);
  --color-55: var(--orange-55);
  --color-60: var(--orange-60);
  --color-65: var(--orange-65);
  --color-70: var(--orange-70);
  --color-75: var(--orange-75);
  --color-80: var(--orange-80);
  --color-85: var(--orange-85);
  --color-90: var(--orange-90);
  --color-95: var(--orange-95);
  --color-100: var(--orange-100);
}

.error {
  --color-0: var(--red-0);
  --color-5: var(--red-5);
  --color-10: var(--red-10);
  --color-15: var(--red-15);
  --color-20: var(--red-20);
  --color-25: var(--red-25);
  --color-30: var(--red-30);
  --color-35: var(--red-35);
  --color-40: var(--red-40);
  --color-45: var(--red-45);
  --color-50: var(--red-50);
  --color-55: var(--red-55);
  --color-60: var(--red-60);
  --color-65: var(--red-65);
  --color-70: var(--red-70);
  --color-75: var(--red-75);
  --color-80: var(--red-80);
  --color-85: var(--red-85);
  --color-90: var(--red-90);
  --color-95: var(--red-95);
  --color-100: var(--red-100);
}

/* utilities/all.scss */ /* utilities/reset.scss */
html, body {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font-size: 1rem;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}

ul[role=list],
ol[role=list] {
  list-style: none;
  padding: 0 0 0 1em;
}

html:focus-within {
  scroll-behavior: smooth;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img,
picture {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

input[type=text],
input[type=email],
input[type=search],
input[type=password] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
/*-- utilities/alignment.scss --*/
.text-left {
  text-align: left !important;
}

.text-right {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

.block-left, .block-center {
  margin-right: auto;
}

.block-right, .block-center {
  margin-left: auto;
}

/* utilities/borders.scss */
:where(.border) {
  --border-width: 1px;
  --border-style: solid;
  --border-color: var(--color-75);
  --border-radius: 0;
}

:where([data-theme=dark] .border) {
  --border-color: var(--color-25);
}

.border {
  border: var(--border-width) var(--border-style) var(--border-color);
  border-radius: var(--border-radius);
}

.bdw-0 {
  --border-width: 0px;
}

.bdw-1 {
  --border-width: 1px;
}

.bdw-2 {
  --border-width: 2px;
}

.bdw-3 {
  --border-width: 3px;
}

.bdw-4 {
  --border-width: 4px;
}

.bdw-5 {
  --border-width: 5px;
}

.bdw-6 {
  --border-width: 6px;
}

.bdw-8 {
  --border-width: 8px;
}

.bdw-10 {
  --border-width: 10px;
}

:where(html) {
  --border-radius: 0.25rem;
}

:is([class*=bdr-]) {
  --radius-top-left: var(--border-radius);
  --radius-top-right: var(--border-radius);
  --radius-bottom-left: var(--border-radius);
  --radius-bottom-right: var(--border-radius);
}

[class*=bdr-] {
  border-radius: var(--radius-top-left) var(--radius-top-right) var(--radius-bottom-right) var(--radius-bottom-left);
}

.square {
  --border-radius: 0 !important;
}

.bdr-0 {
  --border-radius: calc(var(--unit-radius) * 0);
}

.bdr-t-0,
.bdr-l-0,
.bdr-tl-0 {
  --radius-top-left: calc(var(--unit-radius) * 0);
}

.bdr-t-0,
.bdr-r-0,
.bdr-tr-0 {
  --radius-top-right: calc(var(--unit-radius) * 0);
}

.bdr-b-0,
.bdr-l-0,
.bdr-bl-0 {
  --radius-bottom-left: calc(var(--unit-radius) * 0);
}

.bdr-b-0,
.bdr-r-0,
.bdr-br-0 {
  --radius-bottom-right: calc(var(--unit-radius) * 0);
}

.bdr-1 {
  --border-radius: calc(var(--unit-radius) * 1);
}

.bdr-t-1,
.bdr-l-1,
.bdr-tl-1 {
  --radius-top-left: calc(var(--unit-radius) * 1);
}

.bdr-t-1,
.bdr-r-1,
.bdr-tr-1 {
  --radius-top-right: calc(var(--unit-radius) * 1);
}

.bdr-b-1,
.bdr-l-1,
.bdr-bl-1 {
  --radius-bottom-left: calc(var(--unit-radius) * 1);
}

.bdr-b-1,
.bdr-r-1,
.bdr-br-1 {
  --radius-bottom-right: calc(var(--unit-radius) * 1);
}

.bdr-2 {
  --border-radius: calc(var(--unit-radius) * 2);
}

.bdr-t-2,
.bdr-l-2,
.bdr-tl-2 {
  --radius-top-left: calc(var(--unit-radius) * 2);
}

.bdr-t-2,
.bdr-r-2,
.bdr-tr-2 {
  --radius-top-right: calc(var(--unit-radius) * 2);
}

.bdr-b-2,
.bdr-l-2,
.bdr-bl-2 {
  --radius-bottom-left: calc(var(--unit-radius) * 2);
}

.bdr-b-2,
.bdr-r-2,
.bdr-br-2 {
  --radius-bottom-right: calc(var(--unit-radius) * 2);
}

.bdr-3 {
  --border-radius: calc(var(--unit-radius) * 3);
}

.bdr-t-3,
.bdr-l-3,
.bdr-tl-3 {
  --radius-top-left: calc(var(--unit-radius) * 3);
}

.bdr-t-3,
.bdr-r-3,
.bdr-tr-3 {
  --radius-top-right: calc(var(--unit-radius) * 3);
}

.bdr-b-3,
.bdr-l-3,
.bdr-bl-3 {
  --radius-bottom-left: calc(var(--unit-radius) * 3);
}

.bdr-b-3,
.bdr-r-3,
.bdr-br-3 {
  --radius-bottom-right: calc(var(--unit-radius) * 3);
}

.bdr-4 {
  --border-radius: calc(var(--unit-radius) * 4);
}

.bdr-t-4,
.bdr-l-4,
.bdr-tl-4 {
  --radius-top-left: calc(var(--unit-radius) * 4);
}

.bdr-t-4,
.bdr-r-4,
.bdr-tr-4 {
  --radius-top-right: calc(var(--unit-radius) * 4);
}

.bdr-b-4,
.bdr-l-4,
.bdr-bl-4 {
  --radius-bottom-left: calc(var(--unit-radius) * 4);
}

.bdr-b-4,
.bdr-r-4,
.bdr-br-4 {
  --radius-bottom-right: calc(var(--unit-radius) * 4);
}

.bdr-5 {
  --border-radius: calc(var(--unit-radius) * 5);
}

.bdr-t-5,
.bdr-l-5,
.bdr-tl-5 {
  --radius-top-left: calc(var(--unit-radius) * 5);
}

.bdr-t-5,
.bdr-r-5,
.bdr-tr-5 {
  --radius-top-right: calc(var(--unit-radius) * 5);
}

.bdr-b-5,
.bdr-l-5,
.bdr-bl-5 {
  --radius-bottom-left: calc(var(--unit-radius) * 5);
}

.bdr-b-5,
.bdr-r-5,
.bdr-br-5 {
  --radius-bottom-right: calc(var(--unit-radius) * 5);
}

.bdr-6 {
  --border-radius: calc(var(--unit-radius) * 6);
}

.bdr-t-6,
.bdr-l-6,
.bdr-tl-6 {
  --radius-top-left: calc(var(--unit-radius) * 6);
}

.bdr-t-6,
.bdr-r-6,
.bdr-tr-6 {
  --radius-top-right: calc(var(--unit-radius) * 6);
}

.bdr-b-6,
.bdr-l-6,
.bdr-bl-6 {
  --radius-bottom-left: calc(var(--unit-radius) * 6);
}

.bdr-b-6,
.bdr-r-6,
.bdr-br-6 {
  --radius-bottom-right: calc(var(--unit-radius) * 6);
}

.bdr-8 {
  --border-radius: calc(var(--unit-radius) * 8);
}

.bdr-t-8,
.bdr-l-8,
.bdr-tl-8 {
  --radius-top-left: calc(var(--unit-radius) * 8);
}

.bdr-t-8,
.bdr-r-8,
.bdr-tr-8 {
  --radius-top-right: calc(var(--unit-radius) * 8);
}

.bdr-b-8,
.bdr-l-8,
.bdr-bl-8 {
  --radius-bottom-left: calc(var(--unit-radius) * 8);
}

.bdr-b-8,
.bdr-r-8,
.bdr-br-8 {
  --radius-bottom-right: calc(var(--unit-radius) * 8);
}

.bdr-10 {
  --border-radius: calc(var(--unit-radius) * 10);
}

.bdr-t-10,
.bdr-l-10,
.bdr-tl-10 {
  --radius-top-left: calc(var(--unit-radius) * 10);
}

.bdr-t-10,
.bdr-r-10,
.bdr-tr-10 {
  --radius-top-right: calc(var(--unit-radius) * 10);
}

.bdr-b-10,
.bdr-l-10,
.bdr-bl-10 {
  --radius-bottom-left: calc(var(--unit-radius) * 10);
}

.bdr-b-10,
.bdr-r-10,
.bdr-br-10 {
  --radius-bottom-right: calc(var(--unit-radius) * 10);
}

.bdc-0 {
  --border-color: var(--color-0);
}

.bdc-5 {
  --border-color: var(--color-5);
}

.bdc-10 {
  --border-color: var(--color-10);
}

.bdc-15 {
  --border-color: var(--color-15);
}

.bdc-20 {
  --border-color: var(--color-20);
}

.bdc-25 {
  --border-color: var(--color-25);
}

.bdc-30 {
  --border-color: var(--color-30);
}

.bdc-35 {
  --border-color: var(--color-35);
}

.bdc-40 {
  --border-color: var(--color-40);
}

.bdc-45 {
  --border-color: var(--color-45);
}

.bdc-50 {
  --border-color: var(--color-50);
}

.bdc-55 {
  --border-color: var(--color-55);
}

.bdc-60 {
  --border-color: var(--color-60);
}

.bdc-65 {
  --border-color: var(--color-65);
}

.bdc-70 {
  --border-color: var(--color-70);
}

.bdc-75 {
  --border-color: var(--color-75);
}

.bdc-80 {
  --border-color: var(--color-80);
}

.bdc-85 {
  --border-color: var(--color-85);
}

.bdc-90 {
  --border-color: var(--color-90);
}

.bdc-95 {
  --border-color: var(--color-95);
}

.bdc-100 {
  --border-color: var(--color-100);
}

[data-theme=dark] .bdd-0 {
  --border-color: var(--color-0);
}
[data-theme=dark] .bdd-5 {
  --border-color: var(--color-5);
}
[data-theme=dark] .bdd-10 {
  --border-color: var(--color-10);
}
[data-theme=dark] .bdd-15 {
  --border-color: var(--color-15);
}
[data-theme=dark] .bdd-20 {
  --border-color: var(--color-20);
}
[data-theme=dark] .bdd-25 {
  --border-color: var(--color-25);
}
[data-theme=dark] .bdd-30 {
  --border-color: var(--color-30);
}
[data-theme=dark] .bdd-35 {
  --border-color: var(--color-35);
}
[data-theme=dark] .bdd-40 {
  --border-color: var(--color-40);
}
[data-theme=dark] .bdd-45 {
  --border-color: var(--color-45);
}
[data-theme=dark] .bdd-50 {
  --border-color: var(--color-50);
}
[data-theme=dark] .bdd-55 {
  --border-color: var(--color-55);
}
[data-theme=dark] .bdd-60 {
  --border-color: var(--color-60);
}
[data-theme=dark] .bdd-65 {
  --border-color: var(--color-65);
}
[data-theme=dark] .bdd-70 {
  --border-color: var(--color-70);
}
[data-theme=dark] .bdd-75 {
  --border-color: var(--color-75);
}
[data-theme=dark] .bdd-80 {
  --border-color: var(--color-80);
}
[data-theme=dark] .bdd-85 {
  --border-color: var(--color-85);
}
[data-theme=dark] .bdd-90 {
  --border-color: var(--color-90);
}
[data-theme=dark] .bdd-95 {
  --border-color: var(--color-95);
}
[data-theme=dark] .bdd-100 {
  --border-color: var(--color-100);
}

/*-- utilities/breakpoints.scss --*/
.mobile {
  max-width: 30rem;
}

.mobile-width:before {
  content: "30rem";
}

.tablet {
  max-width: 50rem;
}

.tablet-width:before {
  content: "50rem";
}

.laptop {
  max-width: 70rem;
}

.laptop-width:before {
  content: "70rem";
}

.desktop {
  max-width: 80rem;
}

.desktop-width:before {
  content: "80rem";
}

.widescreen {
  max-width: 90rem;
}

.widescreen-width:before {
  content: "90rem";
}

.lt-mobile,
.lt-tablet,
.lt-laptop,
.lt-desktop,
.lt-widescreen {
  display: none;
}

@media only screen and (max-width: 30rem) {
  .gt-mobile {
    display: none !important;
  }
  .lt-mobile {
    display: block !important;
  }
}
@media only screen and (max-width: 50rem) {
  .gt-tablet {
    display: none !important;
  }
  .lt-tablet {
    display: block !important;
  }
}
@media only screen and (max-width: 70rem) {
  .gt-laptop {
    display: none !important;
  }
  .lt-laptop {
    display: block !important;
  }
}
@media only screen and (max-width: 80rem) {
  .gt-desktop {
    display: none !important;
  }
  .lt-desktop {
    display: block !important;
  }
}
@media only screen and (max-width: 90rem) {
  .gt-widescreen {
    display: none !important;
  }
  .lt-widescreen {
    display: block !important;
  }
}
/*-- utilities/color.scss --*/
:where(html) {
  --color: var(--color-30);
  --color-none: transparent;
  --heading-color: var(--color-20);
  --background-color: var(--color-100);
}

[class*=fgc-] {
  color: var(--color);
}

[class*=bgc-] {
  background-color: var(--background-color);
}

[class*=hdc-] h1, [class*=hdc-] h2, [class*=hdc-] h3, [class*=hdc-] h4, [class*=hdc-] h5, [class*=hdc-] h6, [class*=hdc-] .head {
  color: var(--heading-color);
}

.fgc-0 {
  --color: var(--color-0);
}

.bgc-0 {
  --background-color: var(--color-0);
}

.hdc-0 {
  --heading-color: var(--color-0);
}

.fgc-5 {
  --color: var(--color-5);
}

.bgc-5 {
  --background-color: var(--color-5);
}

.hdc-5 {
  --heading-color: var(--color-5);
}

.fgc-10 {
  --color: var(--color-10);
}

.bgc-10 {
  --background-color: var(--color-10);
}

.hdc-10 {
  --heading-color: var(--color-10);
}

.fgc-15 {
  --color: var(--color-15);
}

.bgc-15 {
  --background-color: var(--color-15);
}

.hdc-15 {
  --heading-color: var(--color-15);
}

.fgc-20 {
  --color: var(--color-20);
}

.bgc-20 {
  --background-color: var(--color-20);
}

.hdc-20 {
  --heading-color: var(--color-20);
}

.fgc-25 {
  --color: var(--color-25);
}

.bgc-25 {
  --background-color: var(--color-25);
}

.hdc-25 {
  --heading-color: var(--color-25);
}

.fgc-30 {
  --color: var(--color-30);
}

.bgc-30 {
  --background-color: var(--color-30);
}

.hdc-30 {
  --heading-color: var(--color-30);
}

.fgc-35 {
  --color: var(--color-35);
}

.bgc-35 {
  --background-color: var(--color-35);
}

.hdc-35 {
  --heading-color: var(--color-35);
}

.fgc-40 {
  --color: var(--color-40);
}

.bgc-40 {
  --background-color: var(--color-40);
}

.hdc-40 {
  --heading-color: var(--color-40);
}

.fgc-45 {
  --color: var(--color-45);
}

.bgc-45 {
  --background-color: var(--color-45);
}

.hdc-45 {
  --heading-color: var(--color-45);
}

.fgc-50 {
  --color: var(--color-50);
}

.bgc-50 {
  --background-color: var(--color-50);
}

.hdc-50 {
  --heading-color: var(--color-50);
}

.fgc-55 {
  --color: var(--color-55);
}

.bgc-55 {
  --background-color: var(--color-55);
}

.hdc-55 {
  --heading-color: var(--color-55);
}

.fgc-60 {
  --color: var(--color-60);
}

.bgc-60 {
  --background-color: var(--color-60);
}

.hdc-60 {
  --heading-color: var(--color-60);
}

.fgc-65 {
  --color: var(--color-65);
}

.bgc-65 {
  --background-color: var(--color-65);
}

.hdc-65 {
  --heading-color: var(--color-65);
}

.fgc-70 {
  --color: var(--color-70);
}

.bgc-70 {
  --background-color: var(--color-70);
}

.hdc-70 {
  --heading-color: var(--color-70);
}

.fgc-75 {
  --color: var(--color-75);
}

.bgc-75 {
  --background-color: var(--color-75);
}

.hdc-75 {
  --heading-color: var(--color-75);
}

.fgc-80 {
  --color: var(--color-80);
}

.bgc-80 {
  --background-color: var(--color-80);
}

.hdc-80 {
  --heading-color: var(--color-80);
}

.fgc-85 {
  --color: var(--color-85);
}

.bgc-85 {
  --background-color: var(--color-85);
}

.hdc-85 {
  --heading-color: var(--color-85);
}

.fgc-90 {
  --color: var(--color-90);
}

.bgc-90 {
  --background-color: var(--color-90);
}

.hdc-90 {
  --heading-color: var(--color-90);
}

.fgc-95 {
  --color: var(--color-95);
}

.bgc-95 {
  --background-color: var(--color-95);
}

.hdc-95 {
  --heading-color: var(--color-95);
}

.fgc-100 {
  --color: var(--color-100);
}

.bgc-100 {
  --background-color: var(--color-100);
}

.hdc-100 {
  --heading-color: var(--color-100);
}

[data-theme=dark] [class*=fgd-] {
  color: var(--color);
}
[data-theme=dark] [class*=bgd-] {
  background-color: var(--background-color);
}
[data-theme=dark] [class*=hdd-] h1, [data-theme=dark] [class*=hdd-] h2, [data-theme=dark] [class*=hdd-] h3, [data-theme=dark] [class*=hdd-] h4, [data-theme=dark] [class*=hdd-] h5, [data-theme=dark] [class*=hdd-] h6, [data-theme=dark] [class*=hdd-] .head {
  color: var(--heading-color);
}
[data-theme=dark] .fgd-0 {
  --color: var(--color-0);
}
[data-theme=dark] .bgd-0 {
  --background-color: var(--color-0);
}
[data-theme=dark] .hdd-0 {
  --heading-color: var(--color-0);
}
[data-theme=dark] .fgd-5 {
  --color: var(--color-5);
}
[data-theme=dark] .bgd-5 {
  --background-color: var(--color-5);
}
[data-theme=dark] .hdd-5 {
  --heading-color: var(--color-5);
}
[data-theme=dark] .fgd-10 {
  --color: var(--color-10);
}
[data-theme=dark] .bgd-10 {
  --background-color: var(--color-10);
}
[data-theme=dark] .hdd-10 {
  --heading-color: var(--color-10);
}
[data-theme=dark] .fgd-15 {
  --color: var(--color-15);
}
[data-theme=dark] .bgd-15 {
  --background-color: var(--color-15);
}
[data-theme=dark] .hdd-15 {
  --heading-color: var(--color-15);
}
[data-theme=dark] .fgd-20 {
  --color: var(--color-20);
}
[data-theme=dark] .bgd-20 {
  --background-color: var(--color-20);
}
[data-theme=dark] .hdd-20 {
  --heading-color: var(--color-20);
}
[data-theme=dark] .fgd-25 {
  --color: var(--color-25);
}
[data-theme=dark] .bgd-25 {
  --background-color: var(--color-25);
}
[data-theme=dark] .hdd-25 {
  --heading-color: var(--color-25);
}
[data-theme=dark] .fgd-30 {
  --color: var(--color-30);
}
[data-theme=dark] .bgd-30 {
  --background-color: var(--color-30);
}
[data-theme=dark] .hdd-30 {
  --heading-color: var(--color-30);
}
[data-theme=dark] .fgd-35 {
  --color: var(--color-35);
}
[data-theme=dark] .bgd-35 {
  --background-color: var(--color-35);
}
[data-theme=dark] .hdd-35 {
  --heading-color: var(--color-35);
}
[data-theme=dark] .fgd-40 {
  --color: var(--color-40);
}
[data-theme=dark] .bgd-40 {
  --background-color: var(--color-40);
}
[data-theme=dark] .hdd-40 {
  --heading-color: var(--color-40);
}
[data-theme=dark] .fgd-45 {
  --color: var(--color-45);
}
[data-theme=dark] .bgd-45 {
  --background-color: var(--color-45);
}
[data-theme=dark] .hdd-45 {
  --heading-color: var(--color-45);
}
[data-theme=dark] .fgd-50 {
  --color: var(--color-50);
}
[data-theme=dark] .bgd-50 {
  --background-color: var(--color-50);
}
[data-theme=dark] .hdd-50 {
  --heading-color: var(--color-50);
}
[data-theme=dark] .fgd-55 {
  --color: var(--color-55);
}
[data-theme=dark] .bgd-55 {
  --background-color: var(--color-55);
}
[data-theme=dark] .hdd-55 {
  --heading-color: var(--color-55);
}
[data-theme=dark] .fgd-60 {
  --color: var(--color-60);
}
[data-theme=dark] .bgd-60 {
  --background-color: var(--color-60);
}
[data-theme=dark] .hdd-60 {
  --heading-color: var(--color-60);
}
[data-theme=dark] .fgd-65 {
  --color: var(--color-65);
}
[data-theme=dark] .bgd-65 {
  --background-color: var(--color-65);
}
[data-theme=dark] .hdd-65 {
  --heading-color: var(--color-65);
}
[data-theme=dark] .fgd-70 {
  --color: var(--color-70);
}
[data-theme=dark] .bgd-70 {
  --background-color: var(--color-70);
}
[data-theme=dark] .hdd-70 {
  --heading-color: var(--color-70);
}
[data-theme=dark] .fgd-75 {
  --color: var(--color-75);
}
[data-theme=dark] .bgd-75 {
  --background-color: var(--color-75);
}
[data-theme=dark] .hdd-75 {
  --heading-color: var(--color-75);
}
[data-theme=dark] .fgd-80 {
  --color: var(--color-80);
}
[data-theme=dark] .bgd-80 {
  --background-color: var(--color-80);
}
[data-theme=dark] .hdd-80 {
  --heading-color: var(--color-80);
}
[data-theme=dark] .fgd-85 {
  --color: var(--color-85);
}
[data-theme=dark] .bgd-85 {
  --background-color: var(--color-85);
}
[data-theme=dark] .hdd-85 {
  --heading-color: var(--color-85);
}
[data-theme=dark] .fgd-90 {
  --color: var(--color-90);
}
[data-theme=dark] .bgd-90 {
  --background-color: var(--color-90);
}
[data-theme=dark] .hdd-90 {
  --heading-color: var(--color-90);
}
[data-theme=dark] .fgd-95 {
  --color: var(--color-95);
}
[data-theme=dark] .bgd-95 {
  --background-color: var(--color-95);
}
[data-theme=dark] .hdd-95 {
  --heading-color: var(--color-95);
}
[data-theme=dark] .fgd-100 {
  --color: var(--color-100);
}
[data-theme=dark] .bgd-100 {
  --background-color: var(--color-100);
}
[data-theme=dark] .hdd-100 {
  --heading-color: var(--color-100);
}

[data-theme=dark] {
  color-scheme: dark;
}

[data-theme=light] {
  color-scheme: light;
}

/*-- utilities/display.scss --*/
.block {
  display: block;
}

.inline {
  display: inline;
}

.inline-block {
  display: inline-block;
}

/*
.row {
  display: flow-root
}
.tr {
  display: table
}
.td {
  display: table-cell;
  // vertical-align: top;
}
*/
/*-- utilities/flex.scss --*/
.flex {
  display: flex !important;
}
.flex.row {
  flex-direction: row;
}
.flex.column {
  flex-direction: column;
}
.flex.stretch {
  align-items: stretch;
}
.flex.top, .flex.start {
  align-items: flex-start;
}
.flex.baseline {
  align-items: baseline;
}
.flex.middle {
  align-items: center !important;
}
.flex.bottom, .flex.end {
  align-items: flex-end;
}
.flex.left {
  justify-content: flex-start;
}
.flex.center {
  justify-content: center;
}
.flex.right {
  justify-content: flex-end;
}
.flex.space {
  justify-content: space-between;
}
.flex.evenly {
  justify-content: space-evenly;
}
.flex.across {
  flex-direction: row;
  align-items: flex-start;
  display: flex;
}
.flex.wrap {
  flex-wrap: wrap;
}

.flex-inflexible {
  flex: 0 0 auto;
}

.flex-flexible {
  flex: 1 1 auto;
}

.flex-shrink {
  flex-shrink: 1;
}

.flex-grow {
  flex-grow: 1;
}

/* utilities/fonts.scss */
:where(html) {
  --font-sans: Open Sans, Helvetica, sans-serif;
  --font-serif: Times New Roman, Times, Baskerville, Georgia, serif;
  --font-mono: Monaco, Bitstream Vera Sans Mono, Lucida Console, Terminal, monospace;
  --font-system: -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue;
}

.font-sans {
  font-family: var(--font-sans);
}

.font-serif {
  font-family: var(--font-serif);
}

.font-mono {
  font-family: var(--font-mono);
}

.font-system {
  font-family: var(--font-system);
}

/*-- utilities/grid.scss --*/
.grid, [class*=grid-] {
  display: grid;
}
.grid.stretch, [class*=grid-].stretch {
  align-items: stretch;
}
.grid.top, .grid.start, [class*=grid-].top, [class*=grid-].start {
  align-items: start;
}
.grid.baseline, [class*=grid-].baseline {
  align-items: baseline;
}
.grid.middle, [class*=grid-].middle {
  align-items: center;
}
.grid.bottom, .grid.end, [class*=grid-].bottom, [class*=grid-].end {
  align-items: end;
}

.grid-fit {
  --min-width: 100px;
  grid-template-columns: repeat(auto-fit, minmax(var(--min-width), 1fr));
}

.grid-fill {
  --min-width: 100px;
  grid-template-columns: repeat(auto-fill, minmax(var(--min-width), 1fr));
}

.grid-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.grid-5 {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.grid-6 {
  grid-template-columns: repeat(6, minmax(0, 1fr));
}

.grid-7 {
  grid-template-columns: repeat(7, minmax(0, 1fr));
}

.grid-8 {
  grid-template-columns: repeat(8, minmax(0, 1fr));
}

.grid-9 {
  grid-template-columns: repeat(9, minmax(0, 1fr));
}

.grid-10 {
  grid-template-columns: repeat(10, minmax(0, 1fr));
}

.grid-11 {
  grid-template-columns: repeat(11, minmax(0, 1fr));
}

.grid-12 {
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.grid-13 {
  grid-template-columns: repeat(13, minmax(0, 1fr));
}

.grid-14 {
  grid-template-columns: repeat(14, minmax(0, 1fr));
}

.grid-15 {
  grid-template-columns: repeat(15, minmax(0, 1fr));
}

.grid-16 {
  grid-template-columns: repeat(16, minmax(0, 1fr));
}

.gap-0 {
  gap: 0rem;
}

.gap-h-0 {
  column-gap: 0rem;
}

.gap-v-0 {
  row-gap: 0rem;
}

.gap-1 {
  gap: 0.25rem;
}

.gap-h-1 {
  column-gap: 0.25rem;
}

.gap-v-1 {
  row-gap: 0.25rem;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-h-2 {
  column-gap: 0.5rem;
}

.gap-v-2 {
  row-gap: 0.5rem;
}

.gap-3 {
  gap: 0.75rem;
}

.gap-h-3 {
  column-gap: 0.75rem;
}

.gap-v-3 {
  row-gap: 0.75rem;
}

.gap-4 {
  gap: 1rem;
}

.gap-h-4 {
  column-gap: 1rem;
}

.gap-v-4 {
  row-gap: 1rem;
}

.gap-5 {
  gap: 1.25rem;
}

.gap-h-5 {
  column-gap: 1.25rem;
}

.gap-v-5 {
  row-gap: 1.25rem;
}

.gap-6 {
  gap: 1.5rem;
}

.gap-h-6 {
  column-gap: 1.5rem;
}

.gap-v-6 {
  row-gap: 1.5rem;
}

.gap-7 {
  gap: 1.75rem;
}

.gap-h-7 {
  column-gap: 1.75rem;
}

.gap-v-7 {
  row-gap: 1.75rem;
}

.gap-8 {
  gap: 2rem;
}

.gap-h-8 {
  column-gap: 2rem;
}

.gap-v-8 {
  row-gap: 2rem;
}

.gap-9 {
  gap: 2.25rem;
}

.gap-h-9 {
  column-gap: 2.25rem;
}

.gap-v-9 {
  row-gap: 2.25rem;
}

.gap-10 {
  gap: 2.5rem;
}

.gap-h-10 {
  column-gap: 2.5rem;
}

.gap-v-10 {
  row-gap: 2.5rem;
}

.gap-11 {
  gap: 2.75rem;
}

.gap-h-11 {
  column-gap: 2.75rem;
}

.gap-v-11 {
  row-gap: 2.75rem;
}

.gap-12 {
  gap: 3rem;
}

.gap-h-12 {
  column-gap: 3rem;
}

.gap-v-12 {
  row-gap: 3rem;
}

.gap-13 {
  gap: 3.25rem;
}

.gap-h-13 {
  column-gap: 3.25rem;
}

.gap-v-13 {
  row-gap: 3.25rem;
}

.gap-14 {
  gap: 3.5rem;
}

.gap-h-14 {
  column-gap: 3.5rem;
}

.gap-v-14 {
  row-gap: 3.5rem;
}

.gap-15 {
  gap: 3.75rem;
}

.gap-h-15 {
  column-gap: 3.75rem;
}

.gap-v-15 {
  row-gap: 3.75rem;
}

.gap-16 {
  gap: 4rem;
}

.gap-h-16 {
  column-gap: 4rem;
}

.gap-v-16 {
  row-gap: 4rem;
}

/*-- utilities/layout.scss --*/
.hidden {
  display: none;
}

.nowrap {
  white-space: nowrap;
}

/*-- utilities/position.scss --*/
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.fixed {
  position: fixed;
}

.top {
  top: 0;
}

.bottom {
  bottom: 0;
}

.left {
  left: 0;
}

.right {
  right: 0;
}

/*-- utilities/scroll.scss --*/
.scroll-x {
  width: auto;
  min-width: 100%;
  overflow-x: scroll;
}

.scroll-y {
  overflow-y: scroll;
}

/*-- utilities/shadows.scss --*/
:where(html) {
  --shadow-1:
    1px 2px 4px rgba(12, 13, 13, 0.06),
    0 1px 2px rgba(12, 13, 13, 0.08);
  --shadow-2:
    2px 4px 8px rgba(12, 13, 13, 0.05),
    1px 2px 4px rgba(12, 13, 13, 0.07);
  --shadow-3:
    3px 6px 12px rgba(12, 13, 13, 0.04),
    2px 4px 8px rgba(12, 13, 13, 0.06);
  --shadow-4:
    4px 8px 16px rgba(12, 13, 13, 0.03),
    3px 6px 12px rgba(12, 13, 13, 0.05);
  --shadow-5:
    5px 10px 20px rgba(12, 13, 13, 0.02),
    4px 8px 16px rgba(12, 13, 13, 0.05);
}

[data-theme=dark] {
  --shadow-1:
    1px 2px 4px rgba(0, 0, 0, 0.18),
    0 1px 2px rgba(0, 0, 0, 0.24);
  --shadow-2:
    2px 4px 8px rgba(0, 0, 0, 0.14),
    1px 2px 4px rgba(0, 0, 0, 0.21);
  --shadow-3:
    3px 6px 12px rgba(0, 0, 0, 0.1),
    2px 4px 8px rgba(0, 0, 0, 0.18);
  --shadow-4:
    4px 8px 16px rgba(0, 0, 0, 0.06),
    3px 6px 12px rgba(0, 0, 0, 0.15);
  --shadow-5:
    5px 10px 20px rgba(0, 0, 0, 0.02),
    4px 8px 16px rgba(0, 0, 0, 0.12);
}

.shadow-1 {
  box-shadow: var(--shadow-1);
}

.shadow-2 {
  box-shadow: var(--shadow-2);
}

.shadow-3 {
  box-shadow: var(--shadow-3);
}

.shadow-4 {
  box-shadow: var(--shadow-4);
}

.shadow-5 {
  box-shadow: var(--shadow-5);
}

/*-- utilities/sizes.scss --*/
:where(html) {
  --size-largest: 2rem;
  --size-larger: 1.5rem;
  --size-large: 1.25rem;
  --size-medium: 1rem;
  --size-small: 0.875rem;
  --size-smaller: 0.75rem;
  --size-smallest: 0.625rem;
}

.largest {
  font-size: 2rem !important;
  line-height: 1.5;
}

.larger {
  font-size: 1.5rem !important;
  line-height: 1.5;
}

.large {
  font-size: 1.25rem !important;
  line-height: 1.5;
}

.medium {
  font-size: 1rem !important;
  line-height: 1.5;
}

.small {
  font-size: 0.875rem !important;
  line-height: 1.5;
}

.smaller {
  font-size: 0.75rem !important;
  line-height: 1.5;
}

.smallest {
  font-size: 0.625rem !important;
  line-height: 1.5;
}

.x2 {
  font-size: 2rem !important;
  line-height: 100%;
}

.x3 {
  font-size: 3rem !important;
  line-height: 100%;
}

.x4 {
  font-size: 4rem !important;
  line-height: 100%;
}

.x5 {
  font-size: 5rem !important;
  line-height: 100%;
}

.x6 {
  font-size: 6rem !important;
  line-height: 100%;
}

.x7 {
  font-size: 7rem !important;
  line-height: 100%;
}

.x8 {
  font-size: 8rem !important;
  line-height: 100%;
}

.x9 {
  font-size: 9rem !important;
  line-height: 100%;
}

.x10 {
  font-size: 10rem !important;
  line-height: 100%;
}

.lh-100 {
  line-height: 100% !important;
}

.lh-110 {
  line-height: 110% !important;
}

.lh-120 {
  line-height: 120% !important;
}

.lh-130 {
  line-height: 130% !important;
}

.lh-140 {
  line-height: 140% !important;
}

.lh-150 {
  line-height: 150% !important;
}

.lh-160 {
  line-height: 160% !important;
}

.lh-170 {
  line-height: 170% !important;
}

.lh-180 {
  line-height: 180% !important;
}

.lh-190 {
  line-height: 190% !important;
}

.lh-200 {
  line-height: 200% !important;
}

.normal {
  font-size: 1rem;
}

/*-- utilities/spacing.scss --*/
.mar {
  margin: 0.25rem !important;
}

.mar-h,
.mar-l {
  margin-left: 0.25rem !important;
}

.mar-h,
.mar-r {
  margin-right: 0.25rem !important;
}

.mar-v,
.mar-t {
  margin-top: 0.25rem !important;
}

.mar-v,
.mar-b {
  margin-bottom: 0.25rem !important;
}

.pad {
  padding: 0.25em !important;
}

.pad-h,
.pad-l {
  padding-left: 0.25em !important;
}

.pad-h,
.pad-r {
  padding-right: 0.25em !important;
}

.pad-v,
.pad-t {
  padding-top: 0.25em !important;
}

.pad-v,
.pad-b {
  padding-bottom: 0.25em !important;
}

.mar-none {
  margin: 0 !important;
}

.mar-h-none,
.mar-l-none {
  margin-left: 0 !important;
}

.mar-h-none,
.mar-r-none {
  margin-right: 0 !important;
}

.mar-v-none,
.mar-t-none {
  margin-top: 0 !important;
}

.mar-v-none,
.mar-b-none {
  margin-bottom: 0 !important;
}

.pad-none {
  padding: 0 !important;
}

.pad-h-none,
.pad-l-none {
  padding-left: 0 !important;
}

.pad-h-none,
.pad-r-none {
  padding-right: 0 !important;
}

.pad-v-none,
.pad-t-none {
  padding-top: 0 !important;
}

.pad-v-none,
.pad-b-none {
  padding-bottom: 0 !important;
}

.mar-0 {
  margin: 0rem !important;
}

.mar-h-0,
.mar-l-0 {
  margin-left: 0rem !important;
}

.mar-h-0,
.mar-r-0 {
  margin-right: 0rem !important;
}

.mar-v-0,
.mar-t-0 {
  margin-top: 0rem !important;
}

.mar-v-0,
.mar-b-0 {
  margin-bottom: 0rem !important;
}

.pad-0 {
  padding: 0em !important;
}

.pad-h-0,
.pad-l-0 {
  padding-left: 0em !important;
}

.pad-h-0,
.pad-r-0 {
  padding-right: 0em !important;
}

.pad-v-0,
.pad-t-0 {
  padding-top: 0em !important;
}

.pad-v-0,
.pad-b-0 {
  padding-bottom: 0em !important;
}

.mar-1 {
  margin: 0.25rem !important;
}

.mar-h-1,
.mar-l-1 {
  margin-left: 0.25rem !important;
}

.mar-h-1,
.mar-r-1 {
  margin-right: 0.25rem !important;
}

.mar-v-1,
.mar-t-1 {
  margin-top: 0.25rem !important;
}

.mar-v-1,
.mar-b-1 {
  margin-bottom: 0.25rem !important;
}

.pad-1 {
  padding: 0.25em !important;
}

.pad-h-1,
.pad-l-1 {
  padding-left: 0.25em !important;
}

.pad-h-1,
.pad-r-1 {
  padding-right: 0.25em !important;
}

.pad-v-1,
.pad-t-1 {
  padding-top: 0.25em !important;
}

.pad-v-1,
.pad-b-1 {
  padding-bottom: 0.25em !important;
}

.mar-2 {
  margin: 0.5rem !important;
}

.mar-h-2,
.mar-l-2 {
  margin-left: 0.5rem !important;
}

.mar-h-2,
.mar-r-2 {
  margin-right: 0.5rem !important;
}

.mar-v-2,
.mar-t-2 {
  margin-top: 0.5rem !important;
}

.mar-v-2,
.mar-b-2 {
  margin-bottom: 0.5rem !important;
}

.pad-2 {
  padding: 0.5em !important;
}

.pad-h-2,
.pad-l-2 {
  padding-left: 0.5em !important;
}

.pad-h-2,
.pad-r-2 {
  padding-right: 0.5em !important;
}

.pad-v-2,
.pad-t-2 {
  padding-top: 0.5em !important;
}

.pad-v-2,
.pad-b-2 {
  padding-bottom: 0.5em !important;
}

.mar-3 {
  margin: 0.75rem !important;
}

.mar-h-3,
.mar-l-3 {
  margin-left: 0.75rem !important;
}

.mar-h-3,
.mar-r-3 {
  margin-right: 0.75rem !important;
}

.mar-v-3,
.mar-t-3 {
  margin-top: 0.75rem !important;
}

.mar-v-3,
.mar-b-3 {
  margin-bottom: 0.75rem !important;
}

.pad-3 {
  padding: 0.75em !important;
}

.pad-h-3,
.pad-l-3 {
  padding-left: 0.75em !important;
}

.pad-h-3,
.pad-r-3 {
  padding-right: 0.75em !important;
}

.pad-v-3,
.pad-t-3 {
  padding-top: 0.75em !important;
}

.pad-v-3,
.pad-b-3 {
  padding-bottom: 0.75em !important;
}

.mar-4 {
  margin: 1rem !important;
}

.mar-h-4,
.mar-l-4 {
  margin-left: 1rem !important;
}

.mar-h-4,
.mar-r-4 {
  margin-right: 1rem !important;
}

.mar-v-4,
.mar-t-4 {
  margin-top: 1rem !important;
}

.mar-v-4,
.mar-b-4 {
  margin-bottom: 1rem !important;
}

.pad-4 {
  padding: 1em !important;
}

.pad-h-4,
.pad-l-4 {
  padding-left: 1em !important;
}

.pad-h-4,
.pad-r-4 {
  padding-right: 1em !important;
}

.pad-v-4,
.pad-t-4 {
  padding-top: 1em !important;
}

.pad-v-4,
.pad-b-4 {
  padding-bottom: 1em !important;
}

.mar-6 {
  margin: 1.5rem !important;
}

.mar-h-6,
.mar-l-6 {
  margin-left: 1.5rem !important;
}

.mar-h-6,
.mar-r-6 {
  margin-right: 1.5rem !important;
}

.mar-v-6,
.mar-t-6 {
  margin-top: 1.5rem !important;
}

.mar-v-6,
.mar-b-6 {
  margin-bottom: 1.5rem !important;
}

.pad-6 {
  padding: 1.5em !important;
}

.pad-h-6,
.pad-l-6 {
  padding-left: 1.5em !important;
}

.pad-h-6,
.pad-r-6 {
  padding-right: 1.5em !important;
}

.pad-v-6,
.pad-t-6 {
  padding-top: 1.5em !important;
}

.pad-v-6,
.pad-b-6 {
  padding-bottom: 1.5em !important;
}

.mar-8 {
  margin: 2rem !important;
}

.mar-h-8,
.mar-l-8 {
  margin-left: 2rem !important;
}

.mar-h-8,
.mar-r-8 {
  margin-right: 2rem !important;
}

.mar-v-8,
.mar-t-8 {
  margin-top: 2rem !important;
}

.mar-v-8,
.mar-b-8 {
  margin-bottom: 2rem !important;
}

.pad-8 {
  padding: 2em !important;
}

.pad-h-8,
.pad-l-8 {
  padding-left: 2em !important;
}

.pad-h-8,
.pad-r-8 {
  padding-right: 2em !important;
}

.pad-v-8,
.pad-t-8 {
  padding-top: 2em !important;
}

.pad-v-8,
.pad-b-8 {
  padding-bottom: 2em !important;
}

.mar-10 {
  margin: 2.5rem !important;
}

.mar-h-10,
.mar-l-10 {
  margin-left: 2.5rem !important;
}

.mar-h-10,
.mar-r-10 {
  margin-right: 2.5rem !important;
}

.mar-v-10,
.mar-t-10 {
  margin-top: 2.5rem !important;
}

.mar-v-10,
.mar-b-10 {
  margin-bottom: 2.5rem !important;
}

.pad-10 {
  padding: 2.5em !important;
}

.pad-h-10,
.pad-l-10 {
  padding-left: 2.5em !important;
}

.pad-h-10,
.pad-r-10 {
  padding-right: 2.5em !important;
}

.pad-v-10,
.pad-t-10 {
  padding-top: 2.5em !important;
}

.pad-v-10,
.pad-b-10 {
  padding-bottom: 2.5em !important;
}

.mar-12 {
  margin: 3rem !important;
}

.mar-h-12,
.mar-l-12 {
  margin-left: 3rem !important;
}

.mar-h-12,
.mar-r-12 {
  margin-right: 3rem !important;
}

.mar-v-12,
.mar-t-12 {
  margin-top: 3rem !important;
}

.mar-v-12,
.mar-b-12 {
  margin-bottom: 3rem !important;
}

.pad-12 {
  padding: 3em !important;
}

.pad-h-12,
.pad-l-12 {
  padding-left: 3em !important;
}

.pad-h-12,
.pad-r-12 {
  padding-right: 3em !important;
}

.pad-v-12,
.pad-t-12 {
  padding-top: 3em !important;
}

.pad-v-12,
.pad-b-12 {
  padding-bottom: 3em !important;
}

.mar-16 {
  margin: 4rem !important;
}

.mar-h-16,
.mar-l-16 {
  margin-left: 4rem !important;
}

.mar-h-16,
.mar-r-16 {
  margin-right: 4rem !important;
}

.mar-v-16,
.mar-t-16 {
  margin-top: 4rem !important;
}

.mar-v-16,
.mar-b-16 {
  margin-bottom: 4rem !important;
}

.pad-16 {
  padding: 4em !important;
}

.pad-h-16,
.pad-l-16 {
  padding-left: 4em !important;
}

.pad-h-16,
.pad-r-16 {
  padding-right: 4em !important;
}

.pad-v-16,
.pad-t-16 {
  padding-top: 4em !important;
}

.pad-v-16,
.pad-b-16 {
  padding-bottom: 4em !important;
}

.mar-20 {
  margin: 5rem !important;
}

.mar-h-20,
.mar-l-20 {
  margin-left: 5rem !important;
}

.mar-h-20,
.mar-r-20 {
  margin-right: 5rem !important;
}

.mar-v-20,
.mar-t-20 {
  margin-top: 5rem !important;
}

.mar-v-20,
.mar-b-20 {
  margin-bottom: 5rem !important;
}

.pad-20 {
  padding: 5em !important;
}

.pad-h-20,
.pad-l-20 {
  padding-left: 5em !important;
}

.pad-h-20,
.pad-r-20 {
  padding-right: 5em !important;
}

.pad-v-20,
.pad-t-20 {
  padding-top: 5em !important;
}

.pad-v-20,
.pad-b-20 {
  padding-bottom: 5em !important;
}

.mar-24 {
  margin: 6rem !important;
}

.mar-h-24,
.mar-l-24 {
  margin-left: 6rem !important;
}

.mar-h-24,
.mar-r-24 {
  margin-right: 6rem !important;
}

.mar-v-24,
.mar-t-24 {
  margin-top: 6rem !important;
}

.mar-v-24,
.mar-b-24 {
  margin-bottom: 6rem !important;
}

.pad-24 {
  padding: 6em !important;
}

.pad-h-24,
.pad-l-24 {
  padding-left: 6em !important;
}

.pad-h-24,
.pad-r-24 {
  padding-right: 6em !important;
}

.pad-v-24,
.pad-t-24 {
  padding-top: 6em !important;
}

.pad-v-24,
.pad-b-24 {
  padding-bottom: 6em !important;
}

.mar-28 {
  margin: 7rem !important;
}

.mar-h-28,
.mar-l-28 {
  margin-left: 7rem !important;
}

.mar-h-28,
.mar-r-28 {
  margin-right: 7rem !important;
}

.mar-v-28,
.mar-t-28 {
  margin-top: 7rem !important;
}

.mar-v-28,
.mar-b-28 {
  margin-bottom: 7rem !important;
}

.pad-28 {
  padding: 7em !important;
}

.pad-h-28,
.pad-l-28 {
  padding-left: 7em !important;
}

.pad-h-28,
.pad-r-28 {
  padding-right: 7em !important;
}

.pad-v-28,
.pad-t-28 {
  padding-top: 7em !important;
}

.pad-v-28,
.pad-b-28 {
  padding-bottom: 7em !important;
}

.mar-32 {
  margin: 8rem !important;
}

.mar-h-32,
.mar-l-32 {
  margin-left: 8rem !important;
}

.mar-h-32,
.mar-r-32 {
  margin-right: 8rem !important;
}

.mar-v-32,
.mar-t-32 {
  margin-top: 8rem !important;
}

.mar-v-32,
.mar-b-32 {
  margin-bottom: 8rem !important;
}

.pad-32 {
  padding: 8em !important;
}

.pad-h-32,
.pad-l-32 {
  padding-left: 8em !important;
}

.pad-h-32,
.pad-r-32 {
  padding-right: 8em !important;
}

.pad-v-32,
.pad-t-32 {
  padding-top: 8em !important;
}

.pad-v-32,
.pad-b-32 {
  padding-bottom: 8em !important;
}

/*-- utilities/split.scss --*/
[class*=split-] {
  width: var(--width);
}

.split-2 {
  --width: 50%;
}

.split-3 {
  --width: 33.33333333%;
}

.split-2-3 {
  --width: 66.66666666%;
}

.split-4 {
  --width: 25%;
}

.split-3-4 {
  --width: 75%;
}

.split-5 {
  --width: 20%;
}

.split-2-5 {
  --width: 40%;
}

.split-3-5 {
  --width: 60%;
}

.split-4-5 {
  --width: 80%;
}

.split-6 {
  --width: 16.66666666%;
}

.split-5-6 {
  --width: 83.33333333%;
}

.split-2-7 {
  --width: 28.57142858%;
}

.split-3-7 {
  --width: 42.85714287%;
}

.split-4-7 {
  --width: 57.14285716%;
}

.split-5-7 {
  --width: 71.42857145%;
}

.split-6-7 {
  --width: 85.71428574%;
}

.split-7 {
  --width: 14.28571429%;
}

.split-8 {
  --width: 12.5%;
}

.split-3-8 {
  --width: 37.5%;
}

.split-5-8 {
  --width: 62.5%;
}

.split-7-8 {
  --width: 87.5%;
}

.split-9 {
  --width: 11.11111111%;
}

.split-2-9 {
  --width: 22.22222222%;
}

.split-4-9 {
  --width: 44.44444444%;
}

.split-5-9 {
  --width: 55.55555555%;
}

.split-7-9 {
  --width: 77.77777777%;
}

.split-8-9 {
  --width: 88.88888888%;
}

.split-10 {
  --width: 10%;
}

.split-3-10 {
  --width: 30%;
}

.split-7-10 {
  --width: 70%;
}

.split-9-10 {
  --width: 90%;
}

.split-11 {
  --width: 9.09090909%;
}

.split-12 {
  --width: 8.333333333%;
}

.split-13 {
  --width: 7.692307692%;
}

.split-14 {
  --width: 7.142857142%;
}

.split-15 {
  --width: 6.666666666%;
}

.split-16 {
  --width: 6.25%;
}

/* utilities/styles.scss */
.italic {
  font-style: italic;
}

.underline {
  text-decoration: underline;
  text-decoration-skip-ink: auto;
}

.strike {
  text-decoration: line-through;
}

/* utilities/surfaces.scss */
:is(.surface) {
  --color: var(--color-0);
  --background-color: white;
  --border-color: var(--color-80);
}

:is(.surface-1) {
  --color: var(--color-45);
  --background-color: var(--color-80);
  --border-color: var(--color-65);
}

:is(.surface-2) {
  --color: var(--color-40);
  --background-color: var(--color-85);
  --border-color: var(--color-70);
}

:is(.surface-3) {
  --color: var(--color-35);
  --background-color: var(--color-90);
  --border-color: var(--color-75);
}

:is(.surface-4) {
  --color: var(--color-25);
  --background-color: var(--color-95);
  --border-color: var(--color-80);
}

:is(.surface-5) {
  --color: var(--color-10);
  --background-color: var(--color-100);
  --border-color: var(--color-85);
}

[data-theme=dark] :is(.surface) {
  --color: var(--color-100);
  --background-color: black;
  --border-color: var(--color-15);
}
[data-theme=dark] :is(.surface-1) {
  --color: var(--color-50);
  --background-color: var(--color-0);
  --border-color: var(--color-15);
}
[data-theme=dark] :is(.surface-2) {
  --color: var(--color-60);
  --background-color: var(--color-5);
  --border-color: var(--color-20);
}
[data-theme=dark] :is(.surface-3) {
  --color: var(--color-70);
  --background-color: var(--color-10);
  --border-color: var(--color-25);
}
[data-theme=dark] :is(.surface-4) {
  --color: var(--color-80);
  --background-color: var(--color-15);
  --border-color: var(--color-30);
}
[data-theme=dark] :is(.surface-5) {
  --color: var(--color-90);
  --background-color: var(--color-20);
  --border-color: var(--color-35);
}

[class*=surface] {
  color: var(--color);
  background-color: var(--background-color);
}

/* utilities/typography.scss */
h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.25rem;
}

h4 {
  font-size: 1rem;
}

h5 {
  font-size: 0.875rem;
}

h6 {
  font-size: 0.75rem;
}

h1, h2, h3 {
  font-weight: 400;
}

h4, h5, h6 {
  font-weight: 700;
}

h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
  line-height: 1.3;
}

:where(html) {
  --flow-space: 1em;
  --prose-width: 40rem;
}

:where(.flow) h1, :where(.flow) h2, :where(.flow) h3, :where(.flow) h4, :where(.flow) h5, :where(.flow) h6,
:where(.flow) p, :where(.flow) figure, :where(.flow) blockquote, :where(.flow) dl, :where(.flow) dd {
  margin-block-start: 0;
  margin-block-end: 0;
}

.flow > * + * {
  margin-block-start: var(--flow-space, 1em);
}

.prose {
  --flow-space: 1.5em;
}
.prose p, .prose blockquote {
  max-width: var(--prose-width);
}

.wide {
  --prose-width: 100%;
}

/* utilities/weights.scss */
[class*=weight-] {
  font-weight: var(--font-weight, 400);
}

.weight-100, .weight-thin {
  --font-weight: 100;
}

.weight-200, .weight-extra-light {
  --font-weight: 200;
}

.weight-300, .weight-light {
  --font-weight: 300;
}

.weight-400, .weight-regular {
  --font-weight: 400;
}

.weight-500, .weight-medium {
  --font-weight: 500;
}

.weight-600, .weight-semi-bold {
  --font-weight: 600;
}

.weight-700, .weight-bold {
  --font-weight: 700;
}

.weight-800, .weight-extra-bold {
  --font-weight: 800;
}

.weight-900, .weight-black {
  --font-weight: 900;
}

.thin {
  font-weight: 100;
}

.bold {
  font-weight: 700;
}

.thick {
  font-weight: 900;
}

/*-- utilities/widths --*/
[class*="-2rem"], [class*="-32px"] {
  --width: 2rem;
}

[class*="-4rem"], [class*="-64px"] {
  --width: 4rem;
}

[class*="-6rem"], [class*="-96px"] {
  --width: 6rem;
}

[class*="-8rem"], [class*="-128px"] {
  --width: 8rem;
}

[class*="-10rem"], [class*="-160px"] {
  --width: 10rem;
}

[class*="-12rem"], [class*="-192px"] {
  --width: 12rem;
}

[class*="-14rem"], [class*="-224px"] {
  --width: 14rem;
}

[class*="-16rem"], [class*="-256px"] {
  --width: 16rem;
}

[class*="-18rem"], [class*="-288px"] {
  --width: 18rem;
}

[class*="-20rem"], [class*="-320px"] {
  --width: 20rem;
}

[class*="-25rem"], [class*="-400px"] {
  --width: 25rem;
}

[class*="-30rem"], [class*="-480px"] {
  --width: 30rem;
}

[class*="-35rem"], [class*="-560px"] {
  --width: 35rem;
}

[class*="-40rem"], [class*="-640px"] {
  --width: 40rem;
}

[class*="-45rem"], [class*="-720px"] {
  --width: 45rem;
}

[class*="-50rem"], [class*="-800px"] {
  --width: 50rem;
}

[class*="-60rem"], [class*="-960px"] {
  --width: 60rem;
}

[class*="-70rem"], [class*="-1120px"] {
  --width: 70rem;
}

[class*="-80rem"], [class*="-1280px"] {
  --width: 80rem;
}

[class*="-90rem"], [class*="-1440px"] {
  --width: 90rem;
}

[class*="-100rem"], [class*="-1600px"] {
  --width: 100rem;
}

[class*=width-] {
  width: var(--width);
}

[class*=max-width-] {
  width: auto;
  max-width: var(--width);
}

.wide {
  width: 100%;
  max-width: 100%;
}

/* utilities/responsive.scss */
@media only screen and (max-width: 30rem) {
  .stack-mobile[class*=split-], .stack-mobile > [class*=split-] {
    width: 100% !important;
  }
  .stack-mobile.flex {
    display: block !important;
  }
  .stack-mobile[class*=grid-] {
    grid-template-columns: 1fr;
  }
}
@media only screen and (max-width: 50rem) {
  .stack-tablet[class*=split-], .stack-tablet > [class*=split-] {
    width: 100% !important;
  }
  .stack-tablet.flex {
    display: block !important;
  }
  .stack-tablet[class*=grid-] {
    grid-template-columns: 1fr;
  }
}
@media only screen and (max-width: 70rem) {
  .stack-laptop[class*=split-], .stack-laptop > [class*=split-] {
    width: 100% !important;
  }
  .stack-laptop.flex {
    display: block !important;
  }
  .stack-laptop[class*=grid-] {
    grid-template-columns: 1fr;
  }
}
@media only screen and (max-width: 80rem) {
  .stack-desktop[class*=split-], .stack-desktop > [class*=split-] {
    width: 100% !important;
  }
  .stack-desktop.flex {
    display: block !important;
  }
  .stack-desktop[class*=grid-] {
    grid-template-columns: 1fr;
  }
}
@media only screen and (max-width: 90rem) {
  .stack-widescreen[class*=split-], .stack-widescreen > [class*=split-] {
    width: 100% !important;
  }
  .stack-widescreen.flex {
    display: block !important;
  }
  .stack-widescreen[class*=grid-] {
    grid-template-columns: 1fr;
  }
}
/* forms/all.scss */ /* forms/config.scss */
:where(html) {
  --input-line-height: 1.5;
  --input-border-width: 1px;
  --input-border-radius: 0.25rem;
  --input-padding-v: 0.25em;
  --input-padding-h: 0.5em;
  --input-transition-time: 0.3s;
  --input-disabled-opacity: 0.5;
  --input-focus-ring-width: 3px;
  --input-focus-ring-gap: 1px;
  --input-inner-height: calc((1em * var(--input-line-height)) + (var(--input-padding-v) * 2));
  --input-outer-height: calc(var(--input-inner-height) + (var(--input-border-width) * 2));
  --input-label-inset: var(--input-padding-h);
  --input-help-inset: var(--input-padding-h);
  --input-accent-color: var(--brand-50);
  --input-valid-accent-color: var(--green-50);
  --input-invalid-accent-color: var(--red-50);
  --input-color: var(--color-30);
  --input-border-color: var(--color-70);
  --input-background-color: var(--color-100);
  --input-placeholder-color: var(--color-60);
  --input-hover-color: var(--color-20);
  --input-hover-border-color: var(--color-60);
  --input-hover-background-color: var(--color-95);
  --input-hover-placeholder-color: var(--color-50);
  --input-focus-color: var(--blue-0);
  --input-focus-border-color: var(--blue-50);
  --input-focus-background-color: var(--blue-100);
  --input-focus-ring-color: var(--blue-70);
  --input-focus-gap-color: var(--blue-90);
}

:where(.field) {
  --label-color: var(--grey-10);
  --help-color: var(--color-50);
  --help-prefix-color: var(--color-50);
  --required-color: var(--orange-40);
  --required-background-color: var(--orange-95);
  --required-border-color: var(--orange-85);
  --optional-color: var(--blue-40);
  --optional-background-color: var(--blue-95);
  --optional-border-color: var(--blue-85);
  --label-size: 0.875em;
  --label-margin: 0.5em;
  --help-size: 0.75em;
  --help-margin: 0.5em;
  --tag-size: 0.8em;
  --margin-bottom: 1rem;
  --required-text: "Required";
  --optional-text: "Optional";
  --valid-help-prefix: "✔︎";
  --invalid-help-prefix: "✗";
}

:where(.field, .input) {
  --fix-color: var(--color-40);
  --fix-background: var(--color-95);
  --fix-hover-color: var(--color-30);
  --fix-hover-background: var(--color-90);
  --fix-focus-color: var(--blue-20);
  --fix-focus-background: var(--blue-85);
}

:where(.field.valid) {
  --label-color: var(--green-30);
  --help-color: var(--green-45);
  --help-prefix-color: var(--green-45);
  --input-color: var(--green-40);
  --input-border-color: var(--green-60);
  --input-background-color: var(--green-95);
  --input-placeholder-color: var(--green-60);
  --input-hover-color: var(--green-20);
  --input-hover-border-color: var(--green-55);
  --input-hover-background-color: var(--green-90);
  --input-hover-placeholder-color: var(--green-50);
  --input-focus-color: var(--green-0);
  --input-focus-border-color: var(--green-50);
  --input-focus-background-color: var(--green-100);
  --input-focus-ring-color: var(--green-70);
  --input-focus-gap-color: var(--green-90);
  --fix-color: var(--green-40);
  --fix-background: var(--green-90);
  --fix-hover-color: var(--green-30);
  --fix-hover-background: var(--green-85);
  --fix-focus-color: var(--green-20);
  --fix-focus-background: var(--green-80);
}
:where(.field.valid) label:is(.checkbox, .radio, :has(input[type=checkbox], input[type=radio])) {
  --accent-color: var(--input-valid-accent-color);
}

:where(.field.invalid) {
  --label-color: var(--red-30);
  --help-color: var(--red-45);
  --help-prefix-color: var(--red-45);
  --input-color: var(--red-40);
  --input-border-color: var(--red-65);
  --input-background-color: var(--red-95);
  --input-placeholder-color: var(--red-60);
  --input-hover-color: var(--red-20);
  --input-hover-border-color: var(--red-60);
  --input-hover-background-color: var(--red-90);
  --input-hover-placeholder-color: var(--red-50);
  --input-focus-color: var(--red-0);
  --input-focus-border-color: var(--red-55);
  --input-focus-background-color: var(--red-100);
  --input-focus-ring-color: var(--red-70);
  --input-focus-gap-color: var(--red-90);
  --fix-color: var(--red-40);
  --fix-background: var(--red-90);
  --fix-hover-color: var(--red-30);
  --fix-hover-background: var(--red-85);
  --fix-focus-color: var(--red-20);
  --fix-focus-background: var(--red-80);
}
:where(.field.invalid) label:is(.checkbox, .radio, :has(input[type=checkbox], input[type=radio])) {
  --accent-color: var(--input-invalid-accent-color);
}

:where(.surface-1) {
  --input-border-color: var(--color-50);
}
:where(.surface-1) :where(.field) {
  --help-color: var(--color-30);
}
:where(.surface-1) :where(.field.valid) {
  --help-color: var(--green-30);
  --input-border-color: var(--green-50);
}
:where(.surface-1) :where(.field.invalid) {
  --help-color: var(--red-30);
  --input-border-color: var(--red-50);
}

[data-theme=dark] {
  --input-color: var(--color-70);
  --input-border-color: var(--color-30);
  --input-background-color: var(--color-5);
  --input-placeholder-color: var(--color-40);
  --input-hover-color: var(--color-80);
  --input-hover-border-color: var(--color-40);
  --input-hover-background-color: var(--color-10);
  --input-hover-placeholder-color: var(--color-50);
  --input-focus-color: var(--blue-100);
  --input-focus-border-color: var(--blue-50);
  --input-focus-background-color: var(--blue-5);
  --input-focus-ring-color: var(--blue-30);
  --input-focus-gap-color: var(--blue-10);
}
[data-theme=dark] :where(.field) {
  --label-color: var(--grey-90);
  --help-color: var(--color-50);
  --help-prefix-color: var(--color-50);
  --required-color: var(--orange-60);
  --required-background-color: var(--orange-10);
  --required-border-color: var(--orange-15);
  --optional-color: var(--blue-60);
  --optional-background-color: var(--blue-10);
  --optional-border-color: var(--blue-15);
}
[data-theme=dark] :where(.field, .inputs) {
  --fix-color: var(--color-40);
  --fix-background: var(--color-10);
  --fix-hover-color: var(--color-50);
  --fix-hover-background: var(--color-15);
  --fix-focus-color: var(--blue-60);
  --fix-focus-background: var(--blue-20);
}
[data-theme=dark] :where(.field.valid) {
  --label-color: var(--green-50);
  --help-color: var(--green-40);
  --help-prefix-color: var(--green-40);
  --input-color: var(--green-65);
  --input-border-color: var(--green-40);
  --input-background-color: var(--green-5);
  --input-placeholder-color: var(--green-40);
  --input-hover-color: var(--green-80);
  --input-hover-border-color: var(--green-45);
  --input-hover-background-color: var(--green-10);
  --input-hover-placeholder-color: var(--green-40);
  --input-focus-color: var(--green-100);
  --input-focus-border-color: var(--green-50);
  --input-focus-background-color: var(--green-0);
  --input-focus-ring-color: var(--green-30);
  --input-focus-gap-color: var(--green-10);
  --accent-color: var(--green-50);
}
[data-theme=dark] :where(.field.valid .inputs) {
  --fix-color: var(--green-40);
  --fix-background: var(--green-10);
  --fix-hover-color: var(--green-50);
  --fix-hover-background: var(--green-15);
  --fix-focus-color: var(--green-60);
  --fix-focus-background: var(--green-20);
}
[data-theme=dark] :where(.field.invalid) {
  --label-color: var(--red-50);
  --help-color: var(--red-40);
  --help-prefix-color: var(--red-40);
  --input-color: var(--red-60);
  --input-border-color: var(--red-40);
  --input-background-color: var(--red-5);
  --input-placeholder-color: var(--red-40);
  --input-hover-color: var(--red-80);
  --input-hover-border-color: var(--red-45);
  --input-hover-background-color: var(--red-10);
  --input-hover-placeholder-color: var(--red-40);
  --input-focus-color: var(--red-100);
  --input-focus-border-color: var(--red-50);
  --input-focus-background-color: var(--red-0);
  --input-focus-ring-color: var(--red-35);
  --input-focus-gap-color: var(--red-10);
}
[data-theme=dark] :where(.field.invalid .inputs) {
  --fix-color: var(--red-45);
  --fix-background: var(--red-15);
  --fix-hover-color: var(--red-50);
  --fix-hover-background: var(--red-15);
  --fix-focus-color: var(--red-60);
  --fix-focus-background: var(--red-20);
}
[data-theme=dark] :where(.surface-1) {
  --input-border-color: var(--color-40);
}
[data-theme=dark] :where(.surface-1) :where(.field) {
  --help-color: var(--color-50);
}
[data-theme=dark] :where(.surface-1) :where(.field.valid) {
  --help-color: var(--green-40);
  --input-border-color: var(--green-40);
}
[data-theme=dark] :where(.surface-1) :where(.field.invalid) {
  --help-color: var(--red-40);
  --input-border-color: var(--red-40);
}
[data-theme=dark] :where(.surface-4, .surface-5) {
  --input-border-color: var(--color-40);
}
[data-theme=dark] :where(.surface-4, .surface-5) :where(.field) {
  --help-color: var(--color-60);
}
[data-theme=dark] :where(.surface-4, .surface-5) :where(.field.valid) {
  --help-color: var(--green-50);
}
[data-theme=dark] :where(.surface-4, .surface-5) :where(.field.invalid) {
  --help-color: var(--red-50);
}

:where(input:not([type=checkbox], [type=radio]), textarea, select, label:is(.checkbox, .radio, :has(input[type=checkbox], input[type=radio])), .select, .field, .inputs, .input, button, .button) {
  --color: var(--input-color);
  --background-color: var(--input-background-color);
  --placeholder-color: var(--input-placeholder-color);
  --border-color: var(--input-border-color);
  --accent-color: var(--input-accent-color);
  --border-width: var(--input-border-width);
  --border-radius: var(--input-border-radius);
  --padding-h: var(--input-padding-h);
  --padding-v: var(--input-padding-v);
  --line-height: var(--input-line-height);
  --transition-time: var(--input-transition-time);
  --focus-ring-outline: 0 0 0 var(--input-focus-ring-width) var(--input-focus-ring-color);
  --focus-ring-inline: 0 0 0 var(--input-focus-ring-gap) var(--input-focus-gap-color);
  --focus-ring: var(--focus-ring-inline), var(--focus-ring-outline);
}

:where(input:not([type=checkbox], [type=radio]), textarea, select):hover {
  --color: var(--input-hover-color);
  --border-color: var(--input-hover-border-color);
  --background-color: var(--input-hover-background-color);
  --placeholder-color: var(--input-hover-placeholder-color);
  --fix-color: var(--fix-hover-color);
  --fix-background: var(--fix-hover-background);
}
:where(input:not([type=checkbox], [type=radio]), textarea, select).focus:not(.no-focus), :where(input:not([type=checkbox], [type=radio]), textarea, select):focus:not(.no-focus) {
  --color: var(--input-focus-color);
  --border-color: var(--input-focus-border-color);
  --background-color: var(--input-focus-background-color);
  --fix-color: var(--fix-focus-color);
  --fix-background: var(--fix-focus-background);
}
:where(input:not([type=checkbox], [type=radio]), textarea, select)::placeholder, :where(input:not([type=checkbox], [type=radio]), textarea, select) .placeholder {
  color: var(--placeholder-color);
  font-weight: 300;
}
:where(input:not([type=checkbox], [type=radio]), textarea, select):disabled, :where(input:not([type=checkbox], [type=radio]), textarea, select)[disabled], :where(input:not([type=checkbox], [type=radio]), textarea, select).disabled, :where(input:not([type=checkbox], [type=radio]), textarea, select) :disabled, :where(input:not([type=checkbox], [type=radio]), textarea, select) .disabled {
  opacity: var(--input-disabled-opacity);
}

/*

input:not([type=checkbox], [type=radio]), textarea, select, label:is(.checkbox,.radio,:has(input[type=checkbox], input[type=radio])), .select, .field, .inputs, .input, button, .button {
  --line-height:            1.5;
  --border-width:           1px;
  --border-radius:          0.25rem;
  --padding-v:              0.25em;
  --padding-h:              0.5em;
  --transition-time:        0.3s;
  --disabled-opacity:       0.5;
  --focus-border-color:     var(--color-50);
  --focus-ring-width:       3px;
  --focus-ring-gap:         1px;
  --focus-ring-color:       var(--color-80);
  --focus-gap-color:        var(--color-95);
  --focus-ring-outline:     0 0 0 var(--focus-ring-width) var(--focus-ring-color);
  --focus-ring-inline:      0 0 0 var(--focus-ring-gap)   var(--focus-gap-color);
  --focus-ring:             var(--focus-ring-inline), var(--focus-ring-outline);
  --inner-height:           calc((1em * var(--line-height)) + (var(--padding-v) * 2));
  --outer-height:           calc(var(--inner-height) + (var(--border-width) * 2));
  --label-inset:            var(--padding-h);
  --help-inset:             var(--padding-h);
}

:where(html, .field) {
  --input-color:                     var(--color-30);
  --input-border-color:              var(--color-80);
  --input-background-top:            var(--color-100);
  --input-background-bottom:         var(--color-100);
  --input-hover-color:               var(--color-10);
  --input-hover-border-color:        var(--color-65);
  --input-hover-background-top:      var(--color-95);
  --input-hover-background-bottom:   var(--color-95);
  --input-focus-color:               var(--color-0);
  --input-focus-border-color:        var(--color-50);
  --input-focus-background-top:      var(--color-100);
  --input-focus-background-bottom:   var(--color-100);
}

input:not([type=checkbox], [type=radio]), textarea, select, label:is(.checkbox,.radio,:has(input[type=checkbox], input[type=radio])), .select, .field, .inputs, .input {
  --color:                    var(--input-color);
  --background-top:           var(--input-background-top);
  --background-bottom:        var(--input-background-bottom);
  --background:               var(--background-bottom);
  --shadow-color:             rgba(0,0,0,0.05);
  --box-shadow:               inset 1px 1px 5px 2px var(--shadow-color);
  --placeholder-color:        var(--color-60);
  --input-focus-border-color: var(--color-60);
}

input:not([type=checkbox], [type=radio]), textarea, select, label:is(.checkbox,.radio,:has(input[type=checkbox], input[type=radio])).border, .field, .inputs, .input {
  --border-color: var(--input-border-color);
}

label:is(.checkbox,.radio,:has(input[type=checkbox], input[type=radio])) {
  --accent-color:           var(--brand-50);
}

.field {
  --label-color:            var(--grey-10);
  --help-color:             var(--color-50);
  --help-prefix-color:      var(--color-50);
  --required-color:         var(--orange-40);
  --required-background:    var(--orange-95);
  --required-border:        var(--orange-85);
  --optional-color:         var(--blue-40);
  --optional-background:    var(--blue-95);
  --optional-border:        var(--blue-85);
  --border-width:           1px;
  --label-size:             0.875em;
  --label-margin:           0.5em;
  --help-size:              0.75em;
  --help-margin:            0.5em;
  --tag-size:               0.8em;
  --margin-bottom:          1rem;
  --required-text:          "Required";
  --optional-text:          "Optional";
  --fix-color:              var(--color-40);
  --fix-background:         var(--color-95);
  --fix-hover-background:   var(--color-90);
  --valid-help-prefix:      "✔︎";
  --invalid-help-prefix:    "✗";
}

.surface-1, .surface-2, .surface-3,
.surface-1 .field, .surface-2 .field, .surface-3 .field {
  --input-border-color:              var(--color-75);
  // --input-background-top:            var(--color-90);
  --input-background-top:            var(--color-95);
  --input-background-bottom:         var(--color-95);
  --input-hover-border-color:        var(--color-55);
  --input-hover-background-top:      var(--color-90);
  --input-hover-background-bottom:   var(--color-90);

  input:not([type=checkbox], [type=radio]), textarea, select, label:is(.checkbox,.radio,:has(input[type=checkbox], input[type=radio])), .select, .field, .inputs, .input, button, .button {
    --focus-ring-color:        var(--color-65);
  }
  .field {
    --label-color:            var(--grey-20);
    --help-color:             var(--color-45);
    --help-prefix-color:      var(--color-45);
    --required-background:    var(--orange-90);
    --required-border:        var(--orange-80);
    --optional-background:    var(--blue-90);
    --optional-border:        var(--blue-75);
    --fix-color:              var(--color-40);
    --fix-background:         var(--color-85);
  }
}
.surface-1,
.surface-1 .field {
  --input-border-color:              var(--color-65);
  --input-hover-border-color:        var(--color-45);
  .field {
    --label-color:            var(--grey-10);
    --help-color:             var(--color-45);
    --help-prefix-color:      var(--color-45);
  }
}

[data-theme=dark] {
  input:not([type=checkbox], [type=radio]), textarea, select, label:is(.checkbox,.radio,:has(input[type=checkbox], input[type=radio])), .select, .field, .inputs, .input, button, .button {
    --input-color:                     var(--color-60);
    --input-border-color:              var(--color-25);
    --input-background-top:            var(--color-5);
    --input-background-bottom:         var(--color-5);
    --input-hover-color:               var(--color-80);
    --input-hover-border-color:        var(--color-35);
    --input-hover-background-top:      var(--color-10);
    --input-hover-background-bottom:   var(--color-10);
    --input-focus-color:               var(--color-100);
    --input-focus-border-color:        var(--color-50);
    --input-focus-background-top:      var(--color-5);
    --input-focus-background-bottom:    var(--color-5);

    --focus-ring-color:       var(--color-30);
    --focus-gap-color:        var(--color-5);
  }
  input:not([type=checkbox], [type=radio]), textarea, select, label:is(.checkbox,.radio,:has(input[type=checkbox], input[type=radio])), .select, .field, .inputs, .input {
    --shadow-color:           rgba(0,0,0,0.1);
    --placeholder-color:      var(--color-35);
  }
  .field {
    --label-color:            var(--grey-80);
    --help-color:             var(--color-50);
    --help-prefix-color:      var(--color-50);
    --required-color:         var(--orange-60);
    --required-background:    var(--orange-10);
    --required-border:        var(--orange-15);
    --optional-color:         var(--blue-60);
    --optional-background:    var(--blue-10);
    --optional-border:        var(--blue-15);
    --fix-color:              var(--color-50);
    --fix-background:         var(--color-15);
    --fix-hover-background:   var(--color-20);
  }
  .surface-3,
  .surface-3 .field {
    input:not([type=checkbox], [type=radio]), textarea, select, label:is(.checkbox,.radio,:has(input[type=checkbox], input[type=radio])), .select, .field, .inputs, .input, button, .button {
      --input-background-top:            var(--color-5);
      --input-background-bottom:         var(--color-5);
    }
  }
  .surface-3, .surface-4, .surface-5,
  .surface-3 .field, .surface-4 .field, .surface-5 .field {
    input:not([type=checkbox], [type=radio]), textarea, select, label:is(.checkbox,.radio,:has(input[type=checkbox], input[type=radio])), .select, .field, .inputs, .input, button, .button {
      --focus-ring-color:        var(--color-40);
    }
    input:not([type=checkbox], [type=radio]), textarea, select, label:is(.checkbox,.radio,:has(input[type=checkbox], input[type=radio])), .select, .field, .inputs, .input {
      --background-color:       var(--color-10);
      --placeholder-color:      var(--color-50);
    }
    .field {
      --label-color:            var(--grey-60);
      // --help-color:             var(--color-50);
      // --help-prefix-color:      var(--color-50);
      --required-color:         var(--orange-65);
      --required-background:    var(--orange-20);
      --required-border:        var(--orange-25);
      --optional-color:         var(--blue-65);
      --optional-background:    var(--blue-20);
      --optional-border:        var(--blue-25);
      --fix-color:              var(--color-60);
      --fix-background:         var(--color-25);
    }
  }
  .surface-5,
  .surface-5 .field {
    --input-border-color:              var(--color-35);
    --input-hover-border-color:        var(--color-50);

    input:not([type=checkbox], [type=radio]), textarea, select, label:is(.checkbox,.radio,:has(input[type=checkbox], input[type=radio])), .select, .field, .inputs, .input, button, .button {
      --focus-ring-color:        var(--color-40);
    }
    input:not([type=checkbox], [type=radio]), textarea, select, label:is(.checkbox,.radio,:has(input[type=checkbox], input[type=radio])), .select, .field, .inputs, .input {
      --background-color:       var(--color-10);
      --placeholder-color:      var(--color-50);
    }
    .field {
      --label-color:            var(--grey-60);
      --help-color:             var(--color-55);
      --help-prefix-color:      var(--color-55);
      --required-color:         var(--orange-65);
      --required-background:    var(--orange-20);
      --required-border:        var(--orange-25);
      --optional-color:         var(--blue-65);
      --optional-background:    var(--blue-20);
      --optional-border:        var(--blue-25);
      --fix-color:              var(--color-60);
      --fix-background:         var(--color-25);
    }
  }
}
*/
/* forms/buttons.scss */
@property --gradient-from {
  syntax: "<color>";
  inherits: false;
  initial-value: red;
}
@property --gradient-to {
  syntax: "<color>";
  inherits: false;
  initial-value: blue;
}
:where(button, .button) {
  --color: var(--color-100);
  --border-color: var(--color-50);
  --background-color: var(--color-50);
}

:is(button, .button) {
  --padding-h: 1em;
  --padless-h: 0.5em;
}

button, .button {
  display: inline-flex;
  position: relative;
  appearance: none;
  justify-content: center;
  align-items: center;
  color: var(--color);
  margin: 0;
  background-color: var(--background-color);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  padding: var(--padding-v) var(--padding-h);
  font-size: 1em;
  line-height: var(--line-height);
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  outline: none;
  touch-action: manipulation;
  background-image: none;
  white-space: nowrap;
  user-select: none;
  transition: all var(--transition-time);
  cursor: pointer;
}
button:hover, .button:hover {
  --border-color: var(--color-55);
  --background-color: var(--color-55);
}
button.outline, .button.outline {
  --color: var(--color-40);
  --background-color: var(--color-95);
  --border-color: var(--color-70);
}
button.outline:hover, .button.outline:hover {
  --color: var(--color-30);
  --background-color: var(--color-90);
  --border-color: var(--color-60);
}
button.bare, .button.bare {
  --color: var(--color-50);
  --background-color: transparent;
  --border-color: transparent;
}
button.bare:hover, .button.bare:hover {
  --color: var(--color-35);
  --background-color: var(--color-95);
  --border-color: var(--color-85);
}
button.dark, .button.dark {
  --border-color: var(--color-40);
  --background-color: var(--color-40);
}
button.dark:hover, .button.dark:hover {
  --background-color: var(--color-45);
  --border-color: var(--color-45);
}
button.bright, .button.bright {
  --color: var(--color-0);
  --border-color: var(--color-60);
  --background-color: var(--color-60);
}
button.bright:hover, .button.bright:hover {
  --background-color: var(--color-55);
  --border-color: var(--color-55);
}
button.shaded, .button.shaded {
  --color: var(--color-100);
  --border-color: var(--color-50);
  --gradient-from: var(--color-55);
  --gradient-to: var(--color-45);
  --gradient-angle: 175deg;
  transition: --gradient-from 0.2s, --gradient-to 0.2s;
  background: linear-gradient(var(--gradient-angle), var(--gradient-from), var(--gradient-to));
  border-top-color: var(--gradient-from);
  border-left-color: var(--gradient-from);
  border-bottom-color: var(--gradient-to);
  border-right-color: var(--gradient-to);
}
button.shaded:hover, button.shaded:focus, .button.shaded:hover, .button.shaded:focus {
  --gradient-from: var(--color-45);
  --gradient-to: var(--color-50);
}
button.disabled, button:disabled,
button .disabled, .button.disabled, .button:disabled,
.button .disabled {
  cursor: not-allowed;
  pointer-events: none;
  opacity: var(--disabled-opacity);
  box-shadow: none;
}
button.disabled:hover, button:disabled:hover,
button .disabled:hover, .button.disabled:hover, .button:disabled:hover,
.button .disabled:hover {
  --color: var(--grey-40);
  --border-color: var(--grey-50);
  --background-color: var(--grey-60);
}
button.focus-visible:not(.no-focus), button:focus-visible:not(.no-focus), .button.focus-visible:not(.no-focus), .button:focus-visible:not(.no-focus) {
  box-shadow: var(--focus-ring);
}
button svg.icon, .button svg.icon {
  font-size: calc(1em + var(--padding-v));
  margin: calc(var(--padding-v) / 2);
}
button.icon, .button.icon {
  padding-right: 0.5em;
  padding-left: 0.5em;
}

.buttons {
  display: inline-flex;
}
.buttons button:hover, .buttons .button:hover {
  z-index: 1;
}
.buttons button:not(:first-child), .buttons .button:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-left: calc(var(--border-width) * -1);
}
.buttons button:not(:last-child), .buttons .button:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

[data-theme=dark] button, [data-theme=dark] .button {
  --color: var(--color-90);
  --border-color: var(--color-40);
  --background-color: var(--color-40);
}
[data-theme=dark] button:hover, [data-theme=dark] .button:hover {
  --color: var(--color-100);
  --border-color: var(--color-45);
  --background-color: var(--color-45);
}
[data-theme=dark] button.outline, [data-theme=dark] .button.outline {
  --color: var(--color-80);
  --border-color: var(--color-40);
  --background-color: var(--color-5);
}
[data-theme=dark] button.outline:hover, [data-theme=dark] .button.outline:hover {
  --color: var(--color-100);
  --border-color: var(--color-50);
  --background-color: var(--color-10);
}
[data-theme=dark] button.bare, [data-theme=dark] .button.bare {
  --color: var(--color-50);
  --background-color: transparent;
  --border-color: transparent;
}
[data-theme=dark] button.bare:hover, [data-theme=dark] .button.bare:hover {
  --color: var(--color-65);
  --background-color: var(--color-5);
  --border-color: var(--color-15);
}
[data-theme=dark] button.dark, [data-theme=dark] .button.dark {
  --border-color: var(--color-30);
  --background-color: var(--color-30);
}
[data-theme=dark] button.dark:hover, [data-theme=dark] .button.dark:hover {
  --background-color: var(--color-35);
  --border-color: var(--color-35);
}
[data-theme=dark] button.bright, [data-theme=dark] .button.bright {
  --color: var(--color-0);
  --border-color: var(--color-55);
  --background-color: var(--color-55);
}
[data-theme=dark] button.bright:hover, [data-theme=dark] .button.bright:hover {
  --background-color: var(--color-60);
  --border-color: var(--color-60);
}
[data-theme=dark] button.shaded, [data-theme=dark] .button.shaded {
  --gradient-from: var(--color-45);
  --gradient-to: var(--color-35);
}

/* forms/inputs.scss */
input:not([type=checkbox], [type=radio]), textarea, select, .input {
  position: relative;
  display: inline-block;
  appearance: none;
  min-width: 0;
  padding: var(--padding-v) var(--padding-h);
  color: var(--color);
  background-color: var(--background-color);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none !important;
  font-style: normal;
  font-size: 1em;
  line-height: var(--line-height);
  transition: all var(--transition-time);
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  /*
  &:hover {
    --color: var(--input-hover-color);
    --border-color: var(--input-hover-border-color);
    --background-color: var(--input-hover-background-color);
  }
  &.focus:not(.no-focus),
  &:focus:not(.no-focus) {
    --color: var(--input-focus-color);
    --border-color: var(--input-focus-border-color);
    --background-color: var(--input-focus-background-color);
    box-shadow: var(--focus-ring);
  }
  &::placeholder {
    color: var(--placeholder-color);
    font-weight: 300;
  }
  */
}
input:not([type=checkbox], [type=radio]):not(.inline), textarea:not(.inline), select:not(.inline), .input:not(.inline) {
  width: 100%;
}
input:not([type=checkbox], [type=radio]).focus:not(.no-focus), input:not([type=checkbox], [type=radio]):focus:not(.no-focus), textarea.focus:not(.no-focus), textarea:focus:not(.no-focus), select.focus:not(.no-focus), select:focus:not(.no-focus), .input.focus:not(.no-focus), .input:focus:not(.no-focus) {
  box-shadow: var(--focus-ring);
}
input:not([type=checkbox], [type=radio]):disabled, input:not([type=checkbox], [type=radio])[disabled], input:not([type=checkbox], [type=radio]).disabled, textarea:disabled, textarea[disabled], textarea.disabled, select:disabled, select[disabled], select.disabled, .input:disabled, .input[disabled], .input.disabled {
  opacity: var(--input-disabled-opacity);
  pointer-events: none;
  box-shadow: none;
}

input[type=color] {
  height: var(--outer-height);
}

/* forms/fields.scss */
.inputs {
  position: relative;
  display: inline-flex;
  border-radius: var(--border-radius);
  padding: 0;
  min-width: 0;
  color: var(--color);
  background-color: var(--background-color);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none !important;
  font-style: normal;
  font-size: 1em;
  line-height: var(--line-height);
  transition: all var(--transition-time);
  align-items: stretch;
  white-space: nowrap;
}
.inputs:not(.inline, :has(.inline)) {
  width: 100%;
}
.inputs:has(:hover) {
  --color: var(--input-hover-color);
  --border-color: var(--input-hover-border-color);
  --background-color: var(--input-hover-background-color);
  --placeholder-color: var(--input-hover-placeholder-color);
  --fix-color: var(--fix-hover-color);
  --fix-background: var(--fix-hover-background);
}
.inputs.focus:not(.no-focus), .inputs:focus:not(.no-focus) {
  box-shadow: var(--focus-ring);
}
.inputs > * {
  --border-width: 0;
  --focus-ring: none;
}
.inputs:not(.inline, :has(.inline)) {
  width: 100%;
}
.inputs .prefix, .inputs .suffix {
  padding: var(--padding-v) var(--padding-h);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  color: var(--fix-color);
  transition: all var(--transition-time);
}
.inputs .prefix.shaded, .inputs .suffix.shaded {
  background-color: var(--fix-background);
}
.inputs .prefix {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.inputs .prefix.lined {
  border-right: var(--input-border-width) solid var(--border-color);
}
.inputs .suffix {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.inputs .suffix.lined {
  border-left: var(--input-border-width) solid var(--border-color);
}
.inputs.focus, .inputs:focus-within {
  --color: var(--input-focus-color);
  --border-color: var(--input-focus-border-color);
  --background-color: var(--input-focus-background-color);
  --fix-color: var(--fix-focus-color);
  --fix-background: var(--fix-focus-background);
  box-shadow: var(--focus-ring);
}

/* forms/switches.scss */
:where(select, .select) {
  --arrow-down: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' %3e%3cpolyline points='6 9 12 15 18 9' style='fill:none;stroke:%23888;stroke-width:2;stroke-linecap:round;stroke-linejoin:round'%3e%3c/polyline%3e%3c/svg%3e");
}

select, .select {
  background-color: var(--background-color);
  background: var(--arrow-down) no-repeat right 0.5em center, var(--background-color);
  padding-right: 2em;
  background-size: 1em;
  color: var(--color);
  margin-left: 0;
  appearance: none;
}
select:invalid,
select option:disabled,
select option:invalid,
select .placeholder, .select:invalid,
.select option:disabled,
.select option:invalid,
.select .placeholder {
  color: var(--placeholder-color);
  font-weight: 300;
}

.select {
  --arrow-down: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' %3e%3cpolyline points='6 9 12 15 18 9' style='fill:none;stroke:%23888;stroke-width:2;stroke-linecap:round;stroke-linejoin:round'%3e%3c/polyline%3e%3c/svg%3e");
  display: block;
  width: 100%;
}
.select .input {
  display: block;
  width: 100%;
  background: var(--arrow-down) no-repeat right 0.5em center, var(--background-color);
  padding-right: 2em;
  background-size: 1em;
}
.select .input:hover {
  --color: var(--input-hover-color);
  --border-color: var(--input-hover-border-color);
  --background-color: var(--input-hover-background-color);
}
.select .options {
  display: none;
  border: var(--border-width) solid var(--border-color);
  border-top: none;
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  user-select: none;
  background: var(--background);
}
.select .options .option {
  cursor: pointer;
  padding: var(--padding-v) var(--padding-h);
  border-bottom: var(--border-width) solid var(--border-color);
}
.select .options .option:last-child {
  border-bottom: none;
}
.select .options .option:hover, .select .options .option.selected {
  --color: var(--input-hover-color);
  --background-color: var(--input-hover-background-color);
  background-color: var(--background-color);
}
.select .options .option:disabled, .select .options .option.disabled {
  cursor: not-allowed;
  pointer-events: none;
  opacity: var(--input-disabled-opacity);
  box-shadow: none;
}
.select.open .input {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.select.open .options {
  display: block;
}

/* forms/switches.scss */
:where(label:is(.checkbox, .radio, :has(input[type=checkbox], input[type=radio]))) {
  --background-color: transparent;
  --border-color: transparent;
}

label:is(.checkbox, .radio, :has(input[type=checkbox], input[type=radio])) {
  display: inline-flex;
  align-items: center;
  color: var(--color);
  accent-color: var(--accent-color);
  padding: var(--padding-v) var(--padding-h);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  background-color: var(--background-color);
  outline: none !important;
  transition: all 0.25s;
  font-weight: normal;
  font-style: normal;
  font-size: 1em;
  flex-basis: 100%;
  line-height: var(--line-height);
  transition: all var(--transition-time);
  user-select: none;
  cursor: pointer;
}
label:is(.checkbox, .radio, :has(input[type=checkbox], input[type=radio])) input {
  margin: 0 0.5rem 0 0;
  height: 1em;
  width: 1em;
  padding: 0;
  line-height: var(--line-height);
  outline: none;
  flex-basis: 1em;
}
label:is(.checkbox, .radio, :has(input[type=checkbox], input[type=radio])) span {
  text-align: left;
  font-size: 1em;
  line-height: 1;
  padding: 0 0.5em;
}
label:is(.checkbox, .radio, :has(input[type=checkbox], input[type=radio])):not(.inline) {
  width: 100%;
}
label:is(.checkbox, .radio, :has(input[type=checkbox], input[type=radio])):hover {
  color: var(--input-hover-color);
}
label:is(.checkbox, .radio, :has(input[type=checkbox], input[type=radio])).border {
  --background-color: var(--input-background-color);
  --border-color: var(--input-border-color);
}
label:is(.checkbox, .radio, :has(input[type=checkbox], input[type=radio])).border:hover {
  --border-color:var(--input-hover-border-color);
  --background-color: var(--input-hover-background-color);
}
label:is(.checkbox, .radio, :has(input[type=checkbox], input[type=radio])):has(:focus):not(.no-focus) {
  --color: var(--input-focus-color);
  --border-color: var(--input-focus-border-color);
  --background-color: var(--input-focus-background-color);
  box-shadow: var(--focus-ring);
}
label:is(.checkbox, .radio, :has(input[type=checkbox], input[type=radio])):disabled, label:is(.checkbox, .radio, :has(input[type=checkbox], input[type=radio])).disabled, label:is(.checkbox, .radio, :has(input[type=checkbox], input[type=radio])):has(:disabled) {
  cursor: not-allowed;
  opacity: var(--disabled-opacity);
}
label:is(.checkbox, .radio, :has(input[type=checkbox], input[type=radio])).start {
  align-items: flex-start;
}
label:is(.checkbox, .radio, :has(input[type=checkbox], input[type=radio])).baseline {
  align-items: baseline;
}
label:is(.checkbox, .radio, :has(input[type=checkbox], input[type=radio])).baseline input {
  position: relative;
  top: 0.125em;
}

input[type=checkbox][role=switch] {
  --border-color: var(--grey-70);
  --background-color: var(--grey-80);
  --switch-color: var(--brand-100);
  --border-width: 2px;
  --unit-size: 1em;
  --width: calc(2 * (var(--unit-size) + var(--border-width)));
  --height: calc(var(--unit-size) + (2 * var(--border-width)));
  --transition: 0.3s;
  --shadow-opacity: 0.1;
  --shadow: inset 0.1em 0.1em 0.3em rgba(0,0,0,var(--shadow-opacity));
  --border-radius: 0.25em;
  --switch-radius: calc(var(--border-radius) - var(--border-width));
  appearance: none;
  border: var(--border-width) solid var(--border-color);
  width: var(--width);
  flex-basis: var(--width);
  height: var(--height);
  border-radius: var(--border-radius);
  background-color: var(--background-color);
  transition: all var(--transition) ease-in-out;
  box-shadow: var(--shadow);
}
input[type=checkbox][role=switch]::before {
  display: block;
  width: var(--unit-size);
  height: 100%;
  border-radius: var(--switch-radius);
  background-color: var(--switch-color);
  transition: margin var(--transition) ease-in-out;
  content: "";
}
input[type=checkbox][role=switch]:checked {
  --border-color: var(--brand-45);
  --background-color: var(--brand-50);
}
input[type=checkbox][role=switch]:checked::before {
  margin-left: var(--unit-size);
}
input[type=checkbox][role=switch]:hover {
  --background-color: var(--grey-70);
}
input[type=checkbox][role=switch]:checked:hover {
  --background-color: var(--brand-55);
}
input[type=checkbox][role=switch].rounded {
  --border-radius: 0.25em;
  --switch-radius: calc(var(--border-radius) - var(--border-width));
}
input[type=checkbox][role=switch].round {
  --border-radius: calc(var(--height) / 2);
  --switch-radius: calc(var(--unit-size) / 2);
}
input[type=checkbox][role=switch].square {
  --border-radius: 0;
  --switch-radius: 0;
}

[data-theme=dark] input[type=checkbox][role=switch] {
  --border-color: var(--grey-30);
  --background-color: var(--grey-20);
  --shadow-opacity: 0.2;
}
[data-theme=dark] input[type=checkbox][role=switch]:checked {
  --border-color: var(--brand-45);
  --background-color: var(--brand-40);
}
[data-theme=dark] input[type=checkbox][role=switch]:hover {
  --background-color: var(--grey-30);
}
[data-theme=dark] input[type=checkbox][role=switch]:checked:hover {
  --background-color: var(--brand-50);
}

/* forms/fields.scss */
.field {
  margin-bottom: var(--margin-bottom);
  /*
    &:hover {
      .prefix, .suffix {
        // background-color: var(--fix-hover-background);
        &.bare {
          // background-color: var(--input-hover-background-bottom);
          background-color: var(--background-color);
        }
      }
    }
    &.focus, &:focus-within {
      --color:              var(--input-focus-color);
      --border-color:       var(--input-focus-border-color);
      --background-color:   var(--input-focus-background-color);
      --fix-color:           var(--fix-focus-color);
      --fix-background:      var(--fix-focus-background);
      box-shadow: var(--focus-ring);
      .prefix, .suffix {
        // border-color: var(--focus-border-color);
        &.bare {
          // background-color: var(--input-focus-background-bottom);
          background-color: var(--background-color);
        }
      }
      input {
        --border-color: var(--input-focus-border-color);
      }
      input:not([type=checkbox], [type=radio]), textarea, select, label:is(.checkbox,.radio,:has(input[type=checkbox], input[type=radio])).border  {
        // border-color: var(--input-focus-border-color);
      }
    }
  }
  */
}
.field label:not(.checkbox, .radio, :has(input[type=checkbox]), :has(input[type=radio])) {
  display: block;
  margin-bottom: var(--label-margin);
  color: var(--label-color);
  font-size: var(--label-size);
  line-height: 1.5;
  margin-left: var(--label-inset);
}
.field label:not(.checkbox, .radio)::after {
  display: none;
  margin-left: 1em;
  font-size: 0.8em;
  padding: 0em 0.25em;
  position: relative;
  bottom: 0.1em;
  border-radius: 0.25em;
  color: var(--tag-color);
  background-color: var(--tag-background-color);
  border: 1px solid var(--tag-border-color);
}
.field div.help {
  margin-top: var(--help-margin);
  font-size: var(--help-size);
  color: var(--help-color);
  line-height: 1.5;
  margin-left: var(--help-inset);
}
.field.valid div.help {
  --help-prefix: var(--valid-help-prefix);
}
.field.invalid div.help {
  --help-prefix: var(--invalid-help-prefix);
}
.field.valid div.help::before, .field.invalid div.help::before {
  content: var(--help-prefix);
  color: var(--help-prefix-color);
  margin-right: 0.5em;
}
.field.required label:not(:has(input[type=checkbox]), :has(input[type=radio]))::after {
  display: inline-block;
  content: var(--required-text);
  --tag-color: var(--required-color);
  --tag-border-color: var(--required-border-color);
  --tag-background-color: var(--required-background-color);
}
.field.optional label:not(:has(input[type=checkbox]), :has(input[type=radio]))::after {
  display: inline-block;
  content: var(--optional-text);
  --tag-color: var(--optional-color);
  --tag-border-color: var(--optional-border-color);
  --tag-background-color: var(--optional-background-color);
}

:is(fieldset) {
  --margin-bottom: 1rem;
  --padding-v: 1em;
  --padding-h: 1.5em;
  --border-width: 1px;
  --border-radius: 0.5rem;
  --border-color: var(--color-70);
  --border-focus: var(--color-50);
  --legend-color: var(--color-50);
  --legend-focus: var(--color-30);
  --legend-size: 0.8em;
  --background-color: var(--color-100);
}

[data-theme=dark] :is(fieldset) {
  --border-color: var(--color-30);
  --legend-color: var(--color-50);
  --border-focus: var(--color-50);
  --legend-focus: var(--color-70);
}

fieldset {
  padding: var(--padding-v) var(--padding-h);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  margin-bottom: var(--margin-bottom);
}
fieldset legend {
  font-size: var(--legend-size);
  line-height: 1;
  padding: 0 0.5em;
  color: var(--legend-color);
}
fieldset :first-child {
  margin-top: 0;
}
fieldset :last-child {
  margin-bottom: 0;
}
fieldset:has(:focus) {
  --border-color: var(--border-focus);
  --legend-color: var(--legend-focus);
}

/* components/all.scss */ /*-- components/alerts.scss --*/
:where(.alert) {
  --border-radius: 0.25rem;
  --border-width: 1px;
  border-radius: var(--border-radius);
}

.alert {
  --padding-v: 1em;
  --padding-h: 1.5em;
  --color: var(--color-35);
  --head-color: var(--color-20);
  --headline-color: var(--color-100);
  --background-color: var(--color-90);
  --border-color: var(--color-60);
  --headline-back: var(--color-50);
  --link-color: var(--color-50);
  --link-hover: var(--color-30);
  --bold-color: var(--color);
  margin-bottom: 1rem;
  padding: var(--padding-v) var(--padding-h);
  color: var(--color);
  background-color: var(--background-color);
  overflow: scroll;
}
.alert :first-child {
  margin-top: 0;
}
.alert :last-child {
  margin-bottom: 0;
}
.alert h1, .alert h2, .alert h3, .alert h4, .alert h5, .alert h6, .alert .heading {
  color: var(--head-color);
}
.alert a:not(button, .button) {
  transition: color 0.2s;
  color: var(--link-color);
  text-decoration: underline dotted;
}
.alert a:not(button, .button):hover {
  color: var(--hover-color);
}
.alert b {
  color: var(--bold-color);
}
.alert:has(.headline) {
  --border-color: var(--headline-back);
}
.alert .headline {
  background-color: var(--headline-back);
  color: var(--headline-color);
  margin: calc(var(--padding-v) * -1) calc(var(--padding-h) * -1) var(--padding-v);
  padding: 0.25em var(--padding-h);
}
.alert.stripe {
  --background-color: white;
  --border-width: 8px;
  border: 0;
  border-left: var(--border-width) solid var(--border-color);
}

[data-theme=dark] .alert {
  --color: var(--color-70);
  --head-color: var(--color-85);
  --background-color: var(--color-15);
  --headline-color: var(--color-100);
  --headline-back: var(--color-40);
  --border-color: var(--color-30);
  --link-hover: var(--color-70);
}
[data-theme=dark] .alert.stripe {
  --border-color: var(--color-50);
  --background-color: black;
}

details {
  --icon-svg: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' %3e%3cpolyline points='6 9 12 15 18 9' style='fill:none;stroke:rgba%280%2C0%2C0%2C0.5%29%0A;stroke-width:2;stroke-linecap:round;stroke-linejoin:round'%3e%3c/polyline%3e%3c/svg%3e");
  --icon-align: left;
  --icon-margin: 0.25rem;
  --icon-position: 0em;
  --icon-padding: 1.5em;
  --icon-rotate: -90deg;
  --icon-transition: 0.25s;
  --body-padding: 0;
  --head-margin: 0.25em;
  --head-shade-back: var(--color-90);
  --head-shade-text: var(--color-20);
  --hover-shade-back: var(--color-85);
  --hover-shade-text: var(--color-10);
  --body-shade-back: var(--color-95);
  --body-shade-text: var(--color-30);
  --shade-transition: 0.25s;
  overflow: auto;
}
details summary {
  position: relative;
  display: flex;
  padding: 0.25em 0;
  cursor: pointer;
  list-style: none;
}
details summary > * {
  display: inline;
}
details summary::before {
  display: inline-block;
  width: 1em;
  height: 1em;
  margin: 0.25em var(--icon-margin) 0 var(--icon-position);
  line-height: inherit;
  background-image: var(--icon-svg);
  background-position: var(--icon-align) 0 center;
  background-repeat: no-repeat;
  background-size: 1em;
  transform: rotate(var(--icon-rotate));
  transition: transform var(--icon-transition) ease-in-out;
  content: "";
}
details > *:not(summary) {
  padding: 0 var(--body-padding);
}
details > *:last-child {
  margin-block-end: var(--body-padding);
}
details[open] {
  --icon-rotate: 0deg;
}
details[open] summary {
  margin-bottom: var(--head-margin);
}
details.lined {
  --head-margin: 0.5em;
}
details.border, details.shaded {
  --icon-position: 0.5em;
  --icon-padding: 2em;
  --body-padding: 1em;
  --head-margin: 0.5em;
}
details.border.shaded, details.border.lined, details.shaded.shaded, details.shaded.lined {
  --head-margin: 1em;
}
details.lined[open] summary {
  border-bottom: var(--line-width) var(--line-style) var(--line-color);
}
details.shaded {
  background-color: var(--body-shade-back);
  color: var(--body-shade-text);
}
details.shaded summary {
  transition: background-color var(--shade-transition);
  background-color: var(--head-shade-back);
  color: var(--head-shade-text);
}
details.shaded summary:hover {
  color: var(--hover-shade-text);
  background-color: var(--hover-shade-back);
}
details.icon-right {
  --icon-align: left;
}
details[class*=bdr-] summary {
  border-top-left-radius: var(--radius-top-left);
  border-top-right-radius: var(--radius-top-right);
}
details[class*=bdr-]:not([open]) summary {
  border-bottom-left-radius: var(--radius-bottom-left);
  border-bottom-right-radius: var(--radius-bottom-right);
}

:where(details.lined) {
  --border-width: 1px;
  --border-style: solid;
  --border-color: var(--color-75);
  --border-radius: 0;
  --line-width: var(--border-width);
  --line-style: var(--border-style);
  --line-color: var(--border-color);
}

:where([data-theme=dark] details.lined) {
  --border-color: var(--color-25);
}

[data-theme=dark] details {
  --icon-svg: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' %3e%3cpolyline points='6 9 12 15 18 9' style='fill:none;stroke:rgba%28255%2C255%2C255%2C0.5%29%0A;stroke-width:2;stroke-linecap:round;stroke-linejoin:round'%3e%3c/polyline%3e%3c/svg%3e");
  --head-shade-back: var(--color-20);
  --head-shade-text: var(--color-90);
  --hover-shade-back: var(--color-25);
  --hover-shade-text: var(--color-100);
  --body-shade-back: var(--color-10);
  --body-shade-text: var(--color-70);
}

/*-- components/dialog.scss --*/
:where(dialog) {
  --border-width: 1px;
  --border-radius: 0.25rem;
  --background-color: var(--grey-100);
  --border-color: var(--grey-30);
  --header-background: var(--grey-95);
  --footer-background: var(--grey-95);
  --divider-color: var(--grey-90);
  --close-color: var(--grey-10);
  --close-background: var(--grey-90);
  --close-hover-color: var(--grey-100);
  --close-hover-background: var(--brand-50);
  --max-width: 80vw;
  --max-height: 90vh;
  --padding: 1.5rem;
  --animation-time: 0.3s;
}

#site.dark dialog {
  --background-color: var(--grey-20);
  --border-color: var(--grey-40);
  --close-background: var(--grey-40);
  --header-background: var(--grey-15);
  --footer-background: var(--grey-15);
  --divider-color: var(--grey-10);
}

dialog {
  border: var(--border-width) solid var(--border-color);
  background-color: var(--background-color);
  position: relative;
  border-radius: 8px;
  padding: var(--padding);
  box-shadow: var(--shadow-4);
  max-height: var(--max-height);
  max-width: var(--max-width);
  animation: var(--animation-time) dialog ease-in-out;
}
dialog > .close {
  transition: all 0.25s;
  position: absolute;
  top: 0;
  right: 0;
  color: var(--close-color);
  background-color: var(--close-background);
  padding: 0 calc(0.5em + var(--border-radius) / 2);
  border-radius: 0 calc(var(--border-radius) - var(--border-width)) 0 var(--border-radius);
  border: 1px solid var(--close-background);
  line-height: 1.6;
}
dialog > .close:hover {
  color: var(--close-hover-color);
  background-color: var(--close-hover-background);
  border-color: var(--close-hover-background);
}
dialog > article > header, dialog > article > footer {
  margin: calc(var(--padding) * -1);
  padding: var(--padding);
}
dialog > article > header {
  margin-bottom: var(--padding);
  border-bottom: 1px solid var(--divider-color);
  background-color: var(--header-background);
}
dialog > article > footer {
  margin-top: var(--padding);
  border-top: 1px solid var(--divider-color);
  background-color: var(--footer-background);
}
@keyframes dialog {
  from {
    transform-origin: center;
    transform: scale(80%);
    opacity: 0;
  }
}
@keyframes backdrop {
  from {
    opacity: 0;
  }
}

dialog::backdrop {
  --backdrop-color: rgba(0,0,0,0.5);
  --backdrop-filter: blur(2px);
  --animation-time: 0.6s;
  backdrop-filter: var(--backdrop-filter);
  background-color: var(--backdrop-color);
  animation: var(--animation-time) backdrop ease-in-out;
}

/*-- components/dropdown.scss --*/
:where(.dropdown) {
  --padding: 0.25em 0.5em;
  --border-width: 1px;
  --border-radius: 0.25rem;
  --border-color: var(--color-80);
  --color: var(--color-10);
  --background-color: var(--color-100);
  --item-color: var(--color-20);
  --item-border-color:var(--color-90);
  --hover-color: var(--color-0);
  --hover-background: var(--color-90);
  --shadow: var(--shadow-2);
  --animation-time: 0.3s;
  --menu-padding: 2px;
  --item-padding: var(--padding);
  --item-radius: 2px;
  --item-transition: 0.2s;
  --separator-width: 2px;
  --transform-origin: top left;
}

#site.dark .dropdown {
  --border-color: var(--color-20);
  --color: var(--color-100);
  --background-color: var(--color-10);
  --item-color: var(--color-80);
  --hover-color: var(--color-100);
  --hover-background: var(--color-20);
}

.dropdown {
  position: relative;
  overflow: visible;
  display: inline-block;
  /*
  &.closed {
    .content {
      display: none;
    }
  }
  */
}
.dropdown .trigger {
  margin: 0;
  z-index: 19;
}
.dropdown .content {
  visibility: hidden;
  min-width: -webkit-max-content;
  min-width: -moz-max-content;
  min-width: max-content;
  padding: var(--padding);
  position: absolute;
  min-width: 120%;
  top: 100%;
  left: 0;
  z-index: 20;
  border: var(--border-width) solid var(--border-color);
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  border-top-left-radius: 0;
  will-change: transform, opacity;
}
.dropdown .content .item .caption {
  white-space: nowrap;
}
.dropdown ul.content {
  margin: 0;
  padding: var(--menu-padding);
  list-style: none;
}
.dropdown ul.content li {
  color: var(--item-color);
  white-space: nowrap;
  margin: 0;
  padding: var(--padding);
  border-radius: var(--item-radius);
  transition: all var(--item-transition) ease-in-out;
}
.dropdown ul.content li.caption {
  margin: var(--menu-padding) 0;
}
.dropdown ul.content li.caption:first-child {
  margin-top: 0;
}
.dropdown ul.content li:hover:not(.dropdown ul.content li.caption) {
  cursor: pointer;
  color: var(--hover-color);
  background-color: var(--hover-background);
}
.dropdown ul.content li.separator {
  margin: var(--menu-padding) calc(var(--menu-padding) * -1);
  border-radius: 0;
  font-size: 0;
  line-height: 0;
  display: block;
  border-bottom: var(--separator-width) solid var(--border-color);
}
.dropdown:hover .trigger, .dropdown:hover [aria-haspopup], .dropdown:has(:focus) .trigger, .dropdown:has(:focus) [aria-haspopup] {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.dropdown:hover .content, .dropdown:has(:focus) .content {
  visibility: visible;
  opacity: 1;
  display: block;
  box-shadow: var(--shadow);
  animation: var(--animation-time) dropdown ease-in-out;
}
.dropdown.right {
  margin-right: 0;
  --transform-origin: top right;
}
.dropdown.right .content {
  left: auto;
  right: 0;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: 0;
}
@keyframes dropdown {
  from {
    transform-origin: var(--transform-origin);
    transform: translateY(-2em) scaleY(70%);
    opacity: 0;
  }
}

svg .fill-fg {
  fill: var(--color);
}
svg .fill-bg {
  fill: var(--background-color);
}
svg .stroke-fg {
  stroke: var(--color);
}
svg .stroke-bg {
  stroke: var(--background-color);
}
svg.icon {
  --icon-margin: 0.5em;
  overflow: visible;
  box-sizing: content-box;
  display: inline-block;
  height: 1em;
  font-size: 1em;
  line-height: 1;
  overflow: visible;
  vertical-align: -0.125em;
}
svg.icon.on-left {
  margin-right: var(--icon-margin);
}
svg.icon.on-right {
  margin-left: var(--icon-margin);
}

/*-- components/overlay.scss --*/
:where(.overlay) {
  --color: var(--color-0);
  --animation-time: 0.3s;
  --backdrop-filter: blur(1px);
  --background-opacity: 10%;
  --background-color: var(--color-100);
}

.overlay {
  --background: color-mix(
    in srgb,
    var(--background-color),
    transparent var(--background-opacity)
  );
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: scroll;
  color: var(--color);
  backdrop-filter: var(--backdrop-filter);
  background: var(--background-color);
  background: var(--background);
  animation: var(--animation-time) overlay ease-in-out;
  z-index: 1000;
}
.overlay.fixed {
  position: fixed;
}
@keyframes overlay {
  from {
    opacity: 0;
  }
}

[data-theme=dark] .overlay {
  --color: var(--color-100);
  --background-color: var(--color-0);
  --background-opacity: 20%;
}

/*-- components/tables.scss --*/
:where(table) {
  --border-width: 1px;
  --border-radius: 0.25rem;
}

table {
  --table-padding-v: 0.25em;
  --table-padding-h: 0.5em;
  --table-border-width: 1px;
  --border-radius: 0.25rem;
  --border-right: 0;
  --table-border: var(--color-75);
  --background-color: var(--table-back);
  --border-color: var(--table-back);
  --border-bottom: var(--table-border-width);
  --padding-v: var(--table-padding-v);
  --padding-h: var(--table-padding-h);
  --padding-l: var(--padding-h);
  --padding-r: var(--padding-h);
  --padding-t: var(--padding-v);
  --padding-b: var(--padding-v);
  border-collapse: separate;
  border-spacing: 0px;
  border-radius: var(--border-radius);
  overflow: hidden;
}
table > :first-child > tr:first-child > :first-child {
  border-top-left-radius: var(--border-radius-1);
}
table > :first-child > tr:first-child > :last-child {
  border-top-right-radius: var(--border-radius-1);
}
table > :last-child > tr:last-child > :first-child {
  border-bottom-left-radius: var(--border-radius-1);
}
table > :last-child > tr:last-child > :last-child {
  border-bottom-right-radius: var(--border-radius-1);
}
table tr {
  --table-text: var(--color-25);
  --table-head: var(--color-20);
  --table-back: var(--color-none);
  --table-line: var(--table-border);
  --table-shade-1: var(--color-95);
  --table-shade-2: var(--color-90);
  --table-shade-3: var(--color-80);
  --table-shade-4: var(--color-75);
  --color: var(--table-text);
  --background-color: var(--table-back);
}
table tr th, table tr td {
  padding: var(--padding-t) var(--padding-r) var(--padding-b) var(--padding-l);
  color: var(--color);
  background-color: var(--background-color);
  border-bottom: var(--border-bottom) solid var(--border-color);
  border-right: var(--border-right) solid var(--border-color);
  transition: background-color 0.3s ease, color 0.1s ease;
  text-align: inherit;
  white-space: inherit;
}
table tr th, table tr td.key {
  --color: var(--table-head);
}
table tr > *:first-child {
  --padding-l: 0;
}
table tr > *:last-child {
  --padding-r: 0;
}
table.lined tr {
  --border-color: var(--table-line);
  --border-bottom: 1px;
}
table.lined :last-child > tr:last-child > * {
  --border-bottom: 0;
}
table.celled {
  --border-color: var(--table-border);
  --border-right: 1px;
  border: 1px solid var(--border-color);
}
table.celled > * tr > *:last-child {
  --border-right: 0;
}
table.celled :last-child > tr:last-child > *:last-child {
  --border-right: 0;
}
table.celled :last-child > tr:last-child:last-child > * {
  --border-bottom: 0;
}
table.celled tr > *:first-child, table.shaded tr > *:first-child, table.striped tr > *:first-child {
  --padding-l: var(--padding-h);
}
table.celled tr > *:last-child, table.shaded tr > *:last-child, table.striped tr > *:last-child {
  --padding-r: var(--padding-h);
}
table.shaded th, table.striped th {
  --background-color: var(--table-shade-3);
}
table.shaded td, table.striped td {
  --background-color: var(--table-shade-1);
}
table.striped tr:nth-child(even) th {
  --background-color: var(--table-shade-4);
}
table.striped tr:nth-child(even) td {
  --background-color: var(--table-shade-2);
}
table.even {
  table-layout: fixed;
}
table.even-2 td {
  width: 50% !important;
}
table.even-3 td {
  width: 33.33% !important;
}
table .even-4 td {
  width: 25% !important;
}
table .even-5 td {
  width: 20% !important;
}

[data-theme=dark] table {
  --table-border: var(--color-20);
}
[data-theme=dark] table tr {
  --table-text: var(--color-85);
  --table-head: var(--color-90);
  --table-back: var(--color-none);
  --table-line: var(--table-border);
  --table-shade-1: var(--color-5);
  --table-shade-2: var(--color-10);
  --table-shade-3: var(--color-15);
  --table-shade-4: var(--color-25);
}

/*
.compact.table {
  th, td {
    font-size: $size-smallish;
    line-height: $unit-line;
    padding: $unit-pad-v $unit-pad-h;
  }
}
table.even-3 td {
  width: 33.33% !important;
}
table.even-4 td {
  width: 25% !important;
}
table.even-5 td {
  width: 20% !important;
}
.table.spec {
  border-color: $table-spec-border;
  th, td.key {
    background-color: $table-key-back;
    color: $table-key-fore;
  }
  td {
    background-color: $table-spec-back;
    color: $table-spec-fore;
    border-top: none;
  }
}
table.selectable tr:hover td,
table tr.selectable:hover td,
table tr td.selectable:hover,
table tr th.selectable:hover {
  background-color: $select-hover-back !important;
  color: $select-hover-fore;
  cursor: pointer;
  user-select: none;
  .label {
    background-color: rgba($white, 0.6);
    color: rgba($black, 0.9) !important;
    border-color: rgba($black, 0.5);
  }
}

table tr.selected td,
table.selectable tr.selectable.selected td {
  background-color: rgba($orange, 0.8) !important;
  color: white;
  .label {
    background-color: rgba($white, 0.6);
    color: rgba($black, 0.9) !important;
    border-color: rgba($black, 0.5);
  }
}

table tr {
  td.middle {
    vertical-align: middle;
  }
  th.shrink,
  td.shrink {
    width:0.1%;
    white-space: nowrap;
  }
  td.saving,
  &.saving td {
    background-color: $saving-back !important;
    color: $saving-fore;
  }
}
*/
:where(html) {
  --tooltip-color: var(--grey-90);
  --tooltip-background: var(--grey-10);
  --tooltip-opacity: 1;
  --tooltip-radius: 0.25rem;
  --tooltip-arrow: 8px;
  --tooltip-padding: 0.5em 1em;
  --tooltip-margin: 4px;
  --tooltip-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  --tooltip-transition: 0.3s;
  --tooltip-delay: 0.2s;
  --tooltip-font-size: 1em;
  --tooltip-font-weight: inherit;
}

[data-theme=dark] {
  --tooltip-color: var(--grey-10);
  --tooltip-background: var(--grey-90);
}

[data-tooltip] {
  --tooltip-ty: 0;
  --tooltip-tx: 0;
  --tooltip-top: auto;
  --tooltip-left: auto;
  --tooltip-right: auto;
  --tooltip-bottom: auto;
  --tooltip-margin-incl: calc(100% + var(--tooltip-margin) + var(--tooltip-arrow));
  --tooltip-margin-excl: calc(100% + var(--tooltip-margin) - var(--tooltip-arrow));
  position: relative;
}
[data-tooltip]:before, [data-tooltip]:after,
[data-tooltip] .tooltip {
  position: absolute;
  display: block;
  opacity: 0;
  transition: opacity var(--tooltip-transition);
  transition-delay: var(--tooltip-delay);
  transform: translate(var(--tooltip-tx, 0), var(--tooltip-ty, 0));
  top: var(--tooltip-top, auto);
  left: var(--tooltip-left, auto);
  right: var(--tooltip-right, auto);
  bottom: var(--tooltip-bottom, auto);
  pointer-events: none;
}
[data-tooltip]:before,
[data-tooltip] .tooltip {
  font-size: var(--tooltip-font-size);
  font-weight: var(--tooltip-font-weight);
  min-width: 12em;
  max-width: 50vw;
  width: fit-content;
  white-space: normal;
  color: var(--tooltip-color);
  background-color: var(--tooltip-background);
  padding: var(--tooltip-padding);
  border-radius: var(--tooltip-radius);
  box-shadow: var(--tooltip-shadow);
  z-index: 999;
  text-align: center;
}
[data-tooltip]:before {
  content: attr(aria-label);
}
[data-tooltip]:after {
  content: "";
  z-index: 998;
  border: var(--tooltip-arrow) solid transparent;
}
[data-tooltip].tt-wide:before {
  white-space: pre;
}
[data-tooltip]:hover, [data-tooltip].visible {
  cursor: pointer;
}
[data-tooltip]:hover:before, [data-tooltip]:hover:after,
[data-tooltip]:hover .tooltip, [data-tooltip].visible:before, [data-tooltip].visible:after,
[data-tooltip].visible .tooltip {
  z-index: 999;
  opacity: var(--tooltip-opacity);
}
[data-tooltip]:hover:not([aria-label]):before, [data-tooltip].visible:not([aria-label]):before {
  opacity: 0;
}
[data-tooltip][data-tooltip*=right], [data-tooltip][data-tooltip*=left] {
  --tooltip-top: 50%;
  --tooltip-ty: -50%;
}
[data-tooltip][data-tooltip*=left]:before, [data-tooltip][data-tooltip*=left] .tooltip {
  --tooltip-right: var(--tooltip-margin-incl);
}
[data-tooltip][data-tooltip*=left]:after {
  --tooltip-right: var(--tooltip-margin-excl);
  border-left-color: var(--tooltip-background);
}
[data-tooltip][data-tooltip*=right]:before, [data-tooltip][data-tooltip*=right] .tooltip {
  --tooltip-left: var(--tooltip-margin-incl);
}
[data-tooltip][data-tooltip*=right]:after {
  --tooltip-left: var(--tooltip-margin-excl);
  border-right-color: var(--tooltip-background);
}
[data-tooltip][data-tooltip=""], [data-tooltip][data-tooltip*=top], [data-tooltip][data-tooltip*=bottom] {
  --tooltip-left: 50%;
  --tooltip-tx: -50%;
}
[data-tooltip][data-tooltip=""]:before, [data-tooltip][data-tooltip=""] .tooltip, [data-tooltip][data-tooltip*=top]:before, [data-tooltip][data-tooltip*=top] .tooltip {
  --tooltip-bottom: var(--tooltip-margin-incl);
}
[data-tooltip][data-tooltip=""]:after, [data-tooltip][data-tooltip*=top]:after {
  --tooltip-bottom: var(--tooltip-margin-excl);
  border-top-color: var(--tooltip-background);
}
[data-tooltip][data-tooltip*=bottom]:before, [data-tooltip][data-tooltip*=bottom] .tooltip {
  --tooltip-top: var(--tooltip-margin-incl);
}
[data-tooltip][data-tooltip*=bottom]:after {
  --tooltip-top: var(--tooltip-margin-excl);
  border-bottom-color: var(--tooltip-background);
}
[data-tooltip][data-tooltip*=top][data-tooltip*=left], [data-tooltip][data-tooltip*=top][data-tooltip*=right] {
  --tooltip-top: auto;
  --tooltip-ty: 0;
}
[data-tooltip][data-tooltip*=top][data-tooltip*=left]:before, [data-tooltip][data-tooltip*=top][data-tooltip*=left] .tooltip, [data-tooltip][data-tooltip*=top][data-tooltip*=right]:before, [data-tooltip][data-tooltip*=top][data-tooltip*=right] .tooltip {
  --toolkit-top: auto;
  --tooltip-bottom: var(--tooltip-margin-incl);
}
[data-tooltip][data-tooltip*=top][data-tooltip*=left]:after, [data-tooltip][data-tooltip*=top][data-tooltip*=right]:after {
  --tooltip-bottom: var(--tooltip-margin-excl);
  border-left-color: transparent;
  border-right-color: transparent;
}
[data-tooltip][data-tooltip*=top][data-tooltip*=left] {
  --tooltip-left: 0;
  --tooltip-tx: 0;
}
[data-tooltip][data-tooltip*=top][data-tooltip*=left]:before, [data-tooltip][data-tooltip*=top][data-tooltip*=left] .tooltip {
  --tooltip-left: 0;
  --tooltip-right: auto;
}
[data-tooltip][data-tooltip*=top][data-tooltip*=left]:after {
  --tooltip-left: calc(var(--tooltip-arrow) * 2);
  --tooltip-right: auto;
}
[data-tooltip][data-tooltip*=top][data-tooltip*=right] {
  --tooltip-right: 0;
  --tooltip-tx: 0;
}
[data-tooltip][data-tooltip*=top][data-tooltip*=right]:before, [data-tooltip][data-tooltip*=top][data-tooltip*=right] .tooltip {
  --tooltip-right: 0;
  --tooltip-left: auto;
}
[data-tooltip][data-tooltip*=top][data-tooltip*=right]:after {
  --tooltip-left: auto;
  --tooltip-right: calc(var(--tooltip-arrow) * 2);
}
[data-tooltip][data-tooltip*=bottom][data-tooltip*=left], [data-tooltip][data-tooltip*=bottom][data-tooltip*=right] {
  --tooltip-bottom: auto;
  --tooltip-ty: 0;
}
[data-tooltip][data-tooltip*=bottom][data-tooltip*=left]:before, [data-tooltip][data-tooltip*=bottom][data-tooltip*=left] .tooltip, [data-tooltip][data-tooltip*=bottom][data-tooltip*=right]:before, [data-tooltip][data-tooltip*=bottom][data-tooltip*=right] .tooltip {
  --toolkit-bottom: auto;
  --tooltip-top: var(--tooltip-margin-incl);
}
[data-tooltip][data-tooltip*=bottom][data-tooltip*=left]:after, [data-tooltip][data-tooltip*=bottom][data-tooltip*=right]:after {
  --tooltip-top: var(--tooltip-margin-excl);
  border-left-color: transparent;
  border-right-color: transparent;
}
[data-tooltip][data-tooltip*=bottom][data-tooltip*=left] {
  --tooltip-left: 0;
  --tooltip-tx: 0;
}
[data-tooltip][data-tooltip*=bottom][data-tooltip*=left]:before, [data-tooltip][data-tooltip*=bottom][data-tooltip*=left] .tooltip {
  --tooltip-left: 0;
  --tooltip-right: auto;
}
[data-tooltip][data-tooltip*=bottom][data-tooltip*=left]:after {
  --tooltip-left: calc(var(--tooltip-arrow) * 2);
  --tooltip-right: auto;
}
[data-tooltip][data-tooltip*=bottom][data-tooltip*=right] {
  --tooltip-right: 0;
  --tooltip-tx: 0;
}
[data-tooltip][data-tooltip*=bottom][data-tooltip*=right]:before, [data-tooltip][data-tooltip*=bottom][data-tooltip*=right] .tooltip {
  --tooltip-right: 0;
  --tooltip-left: auto;
}
[data-tooltip][data-tooltip*=bottom][data-tooltip*=right]:after {
  --tooltip-left: auto;
  --tooltip-right: calc(var(--tooltip-arrow) * 2);
}
`,sM=()=>d("div",{className:"prose",children:[o("h1",{children:"What's Good About It?"}),o("p",{className:"intro wide",children:"If you're wondering what makes Badger CSS better than all the other CSS frameworks and UI toolkits out there then the short and simple answer is that it isn't.  It's just another one to add to the pile."}),d(de,{children:[d("div",{children:[o("h2",{children:"A Solid Foundation"}),o("p",{children:"Badger CSS is a collection of tools and techniques that I've built up over many years (nearly 30) of building web sites.  It's what works for me and maybe it will work for you too.  But I'm not making any promises."}),o("p",{children:"It's supposed to be a starting point, not a destination.  If you're building a web site and you want a reasonable foundation to build your styles on then it might be better for you than a more fully-featured toolkit that has everything including the kitchen sink."}),o("h2",{children:"Small(ish) and Simple"}),o("p",{children:"The default Badger CSS stylesheet is around 15kb minimised and compressed (around 100kb uncompressed).  That includes all 16 color ranges which you probably aren't ever going to need in practice. If you define your own palette with a limited set of colors then you can reduce the size a fair bit."}),o("h2",{children:"Modern CSS"}),o("p",{children:"It is based on modern CSS techniques and works in all modern browsers. In particular it makes heavy use of CSS custom properties that you can easily change as required. Behind the scenes it is built using SASS (specifically SCSS) which gives you more opportunities for configuring and extending it."}),o("h2",{children:"Color Management"}),d("p",{children:["Badger CSS uses a novel approach to defining and selecting"," ",o(le,{to:"/colors/ranges",text:"color ranges"}),".  The color palette was created using ",o("a",{href:"https://abw.github.io/badger-color",children:"Badger Color"})," (which itself was created for this specific task) and you can use it to create your own custom palettes if necessary. The palette data that it generates can be automatically expanded out to SASS component files, ready to be used in Badger CSS."]}),d("p",{children:["You can easily change the hues of the standard palette to match your ",o(le,{to:"/colors/brand",text:"brand colors"}),".  It will automatically create greyscale color ranges based on your primary brand color."]}),d("p",{children:["The use of ",o(le,{to:"/colors/variables",text:"CSS custom properties"})," ","to define color ranges, and CSS class scopes to select them, makes it easy to create UI components that work automatically with any color range. It also makes it easy to define different color schemes for light and dark themes."]}),o("h2",{children:"Utility Classes"}),d("p",{children:["Badger CSS comes with a core set of"," ",o(le,{to:"/utilities",text:"utility classes"})," for ad-hoc styling. They are intentionally limited to the kind of things that I find myself using all the time.  If you prefer the approach of"," ",o("a",{href:"https://tailwindcss.com/",children:"Tailwind"})," that provides CSS classes for absolutely everything then you know where to find it."]}),d("p",{children:["I'm not knocking Tailwind, by the way.  CSS utility classes are an ",o("em",{children:"extremely"}),` useful set of tools to have in your toolkit. I just think they should be limited in their scope and not a replacement for writing "proper" CSS when it's more appropriate to do so.`]}),o("h2",{children:"Form Styling"}),d("p",{children:["Styling ",o(le,{to:"/forms",text:"forms"})," is not much fun. I have wasted many hours, days, even weeks of my life trying to get form styling just right and I never want to have to do it again."]}),d("p",{children:["If you've got better things to do than trying to figure out why your ",o("code",{children:"select"})," component is 1 pixel shorter than your text ",o("code",{children:"input"})," component then take a look at what Badger CSS has to offer.  It provides basic styles for all the standard form components and has smoothed over a lot of the problems so you don't have to worry too much about them.  Spend the time you save playing with your kids or flying a kite."]}),o("h2",{children:"UI Components"}),o("p",{children:"Badger CSS has styling for a limited set of UI components. It's not really supposed to be a complete UI toolkit (because the World already has enough of them), but rather to be a foundation on which UI components can be built."}),d("p",{children:["Experience has taught me that off-the-shelf UI components (even ones that I've written myself) often need a fair bit of tweaking to match the styling for a particular site.  Sometimes it's easier just to write them from scratch as they're needed.  CSS has come a long way since the days when we relied on toolkits like"," ",o("a",{href:"https://getbootstrap.com/",children:"Bootstrap"})," to provide a consistent cross-browser experience."]}),o("p",{children:"That said, it's useful to have a reasonable starting point for some of the common UI components: things like alerts, dialogs, dropdown menus, overlays, tables and tooltips.  You can easily customise Badger CSS to remove anything you don't want."})]}),d("div",{children:[o("h2",{children:"Light and Dark Themes"}),o("p",{children:"Everything contains styling for both light and dark themes, out of the box."}),d("div",{className:"grid-2 gap-4 stack-tablet mar-b-8",children:[o(dM,{}),o(cM,{})]})]})]})]}),dM=()=>o(E5,{theme:"light"}),cM=()=>o(E5,{theme:"dark"}),E5=({theme:e})=>d(N5.div,{children:[o("style",{type:"text/css",children:iM}),o(uM,{theme:e})]}),uM=({theme:e})=>o("div",{"data-theme":e,children:d("div",{className:"surface pad-4 border",children:[d("h3",{className:"mar-t-0",children:[UC(e)," Theme"]}),d("div",{className:"field mar-t-4",children:[o("label",{children:"Form Field"}),o("input",{type:"text",name:"a"}),o("div",{className:"help",children:"Field help"})]}),d("div",{className:"field valid",children:[o("label",{children:"Valid Field"}),o("input",{type:"text",name:"b"}),o("div",{className:"help",children:"This is fine"})]}),d("div",{className:"field invalid",children:[o("label",{children:"Invalid Field"}),o("input",{type:"text",name:"c"}),o("div",{className:"help",children:"This is not so good"})]}),d("div",{className:"field mar-t-4",children:[o("label",{children:"Input Prefix/Suffix"}),d("div",{className:"inputs",children:[o("div",{className:"prefix",children:"£"}),o("input",{type:"text",name:"d"}),o("div",{className:"suffix",children:".00"})]})]}),d("div",{className:"field mar-t-4",children:[o("label",{children:"Bare Prefix/Suffix"}),d("div",{className:"inputs",children:[o("div",{className:"prefix bare",children:o(Fa,{name:"unlock"})}),o("input",{type:"text",name:"e"}),o("div",{className:"suffix bare",children:o(Fa,{name:"check"})})]})]}),d("div",{className:"field",children:[o("label",{children:"Select"}),d("select",{name:"animal",required:!0,children:[o("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Choose an animal"}),o("option",{value:"ant",children:"Ant"}),o("option",{value:"badger",children:"Badger"}),o("option",{value:"cat",children:"Cat"}),o("option",{value:"dog",children:"Dog"})]})]}),d("label",{className:"inline radio",children:[o("input",{type:"radio",name:"radio1"}),"Radio"]}),d("label",{className:"inline radio",children:[o("input",{type:"radio",name:"radio1"}),"Buttons"]}),d("label",{children:[o("input",{type:"checkbox"}),"Checkbox"]}),d("div",{className:"mar-t-4 grid-2 gap-4",children:[d("label",{className:"inline radio border",children:[o("input",{type:"radio",name:"radio2"}),"Radio"]}),d("label",{className:"inline radio border",children:[o("input",{type:"radio",name:"radio2"}),"Buttons"]})]}),o("div",{className:"mar-t-4",children:d("label",{className:"border",children:[o("input",{type:"checkbox"}),"Checkbox"]})}),d("label",{className:"mar-t-4",children:[o("input",{type:"checkbox",role:"switch"}),"Turn it on again"]}),d("div",{className:"flex space mar-t-4",children:[o("button",{className:"grey outline",children:"Reset"}),o("button",{className:"blue",children:"Submit"})]}),o("div",{className:"success alert border mar-t-4",children:"Success alert"}),o("div",{className:"error alert border",children:"Error alert!"}),o("div",{className:"info alert border",children:"Info alert"}),d("details",{className:"shaded lined border orange bdr-1",children:[o("summary",{children:"Revealable Details"}),o("p",{children:"Hello World!"})]}),o("div",{"data-tooltip":"top left","aria-label":"This is a tooltip!",className:"violet border pad-2 pad-h-4 bgc-95 bgd-5 bdc-80 bdd-20 mar-t-4 Xtext-center bdr-1",children:"Hover here for tooltip"}),d("table",{className:"wide striped celled mar-t-4",children:[o("thead",{children:d("tr",{children:[o("th",{children:"Name"}),o("th",{children:"Instrument"})]})}),d("tbody",{children:[d("tr",{children:[o("td",{children:"Nigel"}),o("td",{children:"Guitar"})]}),d("tr",{children:[o("td",{children:"David"}),o("td",{children:"Guitar"})]}),d("tr",{children:[o("td",{children:"Derek"}),o("td",{children:"Bass"})]}),d("tr",{children:[o("td",{children:"Viv"}),o("td",{children:"Keyboards"})]}),d("tr",{children:[o("td",{children:"Mick"}),o("td",{children:"Drums"})]})]})]})]})}),hM=Object.freeze(Object.defineProperty({__proto__:null,default:sM},Symbol.toStringTag,{value:"Module"})),pM=`<link
  rel="stylesheet"
  href="https://unpkg.com/@abw/badger-css/dist/styles/badger.min.css"
/>`,fM=`## using npm
$ npm add -D @abw/badger-css

## using yarn
$ yarn add -D @abw/badger-css

## using pnpm
$ pnpm add -D @abw/badger-css`,gM="import '@abw/badger-css/styles/badger.min.css';",vM="@import '@abw/badger-css/styles/badger.scss';",mM=`$ git clone https://github.com/abw/badger-css.git
$ cd badger-css
$ sass styles/badger.scss > your-badger-file.css`,bM=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Installation"}),o("h2",{children:"No Installation Required!"}),d(de,{children:[d("p",{children:["You don't need to install anything to get starting using Badger CSS in a website.  Simply add the following tag to the"," ",o("code",{children:"<head>"})," section of your web page."]}),o(ze,{code:pM,caption:"Unpkg Link",language:"html",className:"mar-b-8",expand:!0})]}),o("h2",{children:"Adding to a Javascript Project"}),d(de,{children:[d("p",{children:["If you want to configure, modify or adapt Badger CSS then you should add ",o("code",{children:"@abw/badger-css"})," to your Javascript project using your favourite package manager.  In most cases you should be able to add it as a development dependency using the ",o("code",{children:"-D"})," option."]}),o(ze,{code:fM,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0})]}),o("h2",{children:"Importing the CSS"}),d(de,{children:[d("div",{children:[o("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script like so:"}),d("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",o("code",{children:"node_modules"})," directory."]})]}),o(ze,{code:gM,caption:"Importing CSS",language:"js",className:"mar-b-8",expand:!0})]}),o("h2",{children:"Importing the SCSS"}),d(de,{children:[d("div",{children:[o("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components.  This gives you the flexibility to configure the default options, or to pick and choose which components you want to include."}),o("p",{children:"Add the following line to your main SCSS stylesheet source."})]}),o(ze,{code:vM,caption:"Importing SCSS",language:"scss",className:"mar-b-8",expand:!0})]}),o("h2",{children:"Going it Alone"}),d(de,{children:[d("p",{children:["If you're not using Javascript but want to play with the SCSS source files then you can check out the project repository from Github and run ",o("code",{children:"sass"})," to compile the source files into CSS."]}),o(ze,{code:mM,caption:"CSS from SASS",language:"shell",className:"mar-b-8",expand:!0})]})]}),yM=Object.freeze(Object.defineProperty({__proto__:null,default:bM},Symbol.toStringTag,{value:"Module"})),wM=e=>D.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 717 337",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},D.createElement("path",{className:"white",d:"M248.362,204.8C251.303,208.841 251.506,216.92 246.886,220.486C247.235,215.811 245.076,210.416 243.385,207.987C242.142,206.2 237.32,201.909 232.525,201.457C236.319,199.212 245.27,200.55 248.362,204.8ZM380.931,288.851C382.012,292.919 365.895,290.457 365.767,303.096C365.703,309.466 368.575,313.608 364.949,314.116C360.977,314.673 360.493,310.692 359.8,305.449C358.316,294.227 366.194,290.723 373.729,288.466C380.03,286.58 380.512,287.273 380.931,288.851ZM250.509,198.166C250.116,197.944 249.715,197.73 249.306,197.524C237.097,191.351 222.986,194.646 217.814,204.876C213.744,212.926 216.415,222.888 223.688,229.775C220.646,228.505 217.677,226.862 214.911,224.779C198.663,212.542 195.441,190.333 199.289,185.248C202.588,180.888 226.299,177.823 242.548,190.06C245.688,192.424 248.324,195.199 250.509,198.166ZM234.492,31.758C231.75,33.423 225.901,22.543 215.941,24.48C210.088,25.619 206.755,23.124 210.523,20.119C221.225,11.585 239.546,28.689 234.492,31.758ZM99.149,58.412C89.72,51.898 79.11,48.569 67.051,51.951C58.397,54.378 52.734,60.065 49.994,67.45C48.707,67.555 47.4,67.691 46.084,67.853C38.149,68.832 29.859,70.741 23.646,72.288C42.126,47.476 64.861,38.817 87.003,38.714L88.566,38.707L88.864,37.173C90.304,29.757 86.13,22.597 75.216,17.044C99.723,11.821 129.948,17.277 146.178,26.501L148.305,27.709L148.955,25.351C149.908,21.892 149.675,13.343 143.798,5.723C174.533,11.177 197.842,21.068 216.166,33.985C250.062,62.777 267.98,100.361 283.213,136.181C299.907,175.44 313.396,212.581 341.026,233.82C341.522,234.342 342.023,234.861 342.528,235.377C350.993,244.039 366.478,256.93 385.23,273.49C387.358,275.369 389.327,277.224 391.08,279.038C386.966,279.245 381.675,280.641 374.911,282.18C352.689,287.237 351.849,297.009 354.41,312.963C355.723,321.141 359.376,324.914 364.644,326.161C344.448,331.711 334.138,335.299 309.216,330.594C270.323,323.25 233.474,308.826 222.734,303.773C222.54,303.387 222.214,303.065 221.786,302.881C207.397,296.693 197.713,288.82 193.624,279.767C195.586,278.724 197.158,277.535 198.531,276.583C199.395,275.985 199.61,274.797 199.011,273.933C198.412,273.069 197.225,272.854 196.361,273.453C193.368,275.527 189.319,279.035 181.419,278.358C180.371,278.268 179.448,279.046 179.359,280.093C179.269,281.14 180.046,282.063 181.094,282.153C184.73,282.464 187.673,282.036 190.117,281.255C194.043,289.991 202.664,297.858 215.527,304.192C190.321,313.397 168.064,307.288 148.128,295.655C126.82,283.221 108.129,264.526 91.308,250.982C77.307,239.708 64.463,232.065 52.581,233.695C45.172,234.711 38.017,239.243 31.166,248.886C20.017,224.385 34.815,199.803 49.449,184.213L50.995,182.566L49.11,181.321C34.813,171.879 18.601,177.687 7.799,189.755C6.995,180.056 11.532,165.892 18.973,152.99C26.481,139.972 37,128.18 48.427,123.711C118.961,110.252 153.156,169.713 188.827,221.409C209.775,251.767 256.49,287.586 345.223,316.241C340.436,301.054 342.628,293.783 346.067,286.802C324.7,276.815 298.269,260.277 280.877,228.797C233.283,142.653 212.43,81.347 143.665,64.082C131.685,61.074 116.053,57.87 99.149,58.412ZM99.066,72.542C97.614,80.151 74.887,58.073 70.407,69.969C62.107,92.007 54.173,79.428 56.142,73.447C66.246,42.754 100.4,65.551 99.066,72.542Z",style:{fill:"white"}}),D.createElement("path",{className:"black",d:"M48.845,71.376C48.085,71.452 47.319,71.538 46.55,71.633C36.384,72.888 25.625,75.704 19.567,77.251L14.706,78.493L17.519,74.338C36.933,45.669 61.411,35.483 85.316,34.929C85.679,28.465 80.142,22.804 68.715,18.305L63.513,16.258L68.883,14.704C94.004,7.433 126.953,12.429 145.602,21.872C145.715,17.476 143.99,10.119 137.262,4.358L132.173,0L138.793,1.03C164.858,5.083 185.888,12.137 203.193,21.438C203.366,21.5 203.539,21.563 203.712,21.626C205.114,17.121 209.176,13.252 216.656,13.924C236.466,15.704 240.708,25.62 241.751,43.904C266.891,65.236 284.026,95.363 297.467,125.916C309.511,153.29 318.589,181.001 327.822,202.999C331.443,211.626 335.086,219.374 338.942,225.872C340.965,228.196 343.066,230.479 345.252,232.715C353.685,241.344 369.071,254.139 387.751,270.635C391.391,273.849 394.564,277.022 397.067,280.061C399.65,281.424 401.411,284.251 402.569,289.316C402.766,289.952 402.91,290.575 403,291.183C403.044,291.476 403.078,291.773 403.104,292.073C403.406,293.909 403.652,295.979 403.849,298.307C404.631,307.557 401.813,319.773 387.422,323.48C384.617,324.202 381.912,324.872 379.338,325.409C375.566,326.623 372.295,327.675 372.296,327.675C350.779,335.844 336.841,339.686 308.509,334.336C267.627,326.617 228.986,311.137 219.844,306.606C192.192,317.895 167.885,311.593 146.209,298.945C124.732,286.413 105.872,267.6 88.919,253.949C82.285,248.607 75.954,244.066 69.867,241.062C64.049,238.191 58.481,236.73 53.099,237.468C45.892,238.456 39.128,243.397 32.519,253.689L30.774,256.406L29.24,253.565C15.116,227.399 29.491,200.652 45.081,183.337C31.813,176.104 17.177,183.299 8.174,195.3L5.878,198.362L4.821,194.683C1.901,184.524 6.568,166.875 15.674,151.087C21.122,141.64 28.135,132.887 35.912,126.766C24.827,130.039 12.898,135.014 0,141.953C13.007,107.592 30.082,86.63 48.343,74.289C48.468,73.299 48.636,72.327 48.845,71.376ZM248.362,204.8C245.27,200.55 236.319,199.212 232.525,201.457C237.32,201.909 242.142,206.2 243.385,207.987C245.076,210.416 247.235,215.811 246.886,220.486C251.506,216.92 251.303,208.841 248.362,204.8ZM380.931,288.851C380.512,287.273 380.03,286.58 373.729,288.466C366.194,290.723 358.316,294.227 359.8,305.449C360.493,310.692 360.977,314.673 364.949,314.116C368.575,313.608 365.703,309.466 365.767,303.096C365.895,290.457 382.012,292.919 380.931,288.851ZM250.509,198.166C248.324,195.199 245.688,192.424 242.548,190.06C226.299,177.823 202.588,180.888 199.289,185.248C195.441,190.333 198.663,212.542 214.911,224.779C217.677,226.862 220.646,228.505 223.688,229.775C216.415,222.888 213.744,212.926 217.814,204.876C222.986,194.646 237.097,191.351 249.306,197.524C249.715,197.73 250.116,197.944 250.509,198.166ZM234.492,31.758C239.546,28.689 221.225,11.585 210.523,20.119C206.755,23.124 210.088,25.619 215.941,24.48C225.901,22.543 231.75,33.423 234.492,31.758ZM99.149,58.412C116.053,57.87 131.685,61.074 143.665,64.082C212.43,81.347 233.283,142.653 280.877,228.797C298.269,260.277 324.7,276.815 346.067,286.802C342.628,293.783 340.436,301.054 345.223,316.241C256.49,287.586 209.775,251.767 188.827,221.409C153.156,169.713 118.961,110.252 48.427,123.711C37,128.18 26.481,139.972 18.973,152.99C11.532,165.892 6.995,180.056 7.799,189.755C18.601,177.687 34.813,171.879 49.11,181.321L50.995,182.566L49.449,184.213C34.815,199.803 20.017,224.385 31.166,248.886C38.017,239.243 45.172,234.711 52.581,233.695C64.463,232.065 77.307,239.708 91.308,250.982C108.129,264.526 126.82,283.221 148.128,295.655C168.064,307.288 190.321,313.397 215.527,304.192C202.664,297.858 194.043,289.991 190.117,281.255C187.673,282.036 184.73,282.464 181.094,282.153C180.046,282.063 179.269,281.14 179.359,280.093C179.448,279.046 180.371,278.268 181.419,278.358C189.319,279.035 193.368,275.527 196.361,273.453C197.225,272.854 198.412,273.069 199.011,273.933C199.61,274.797 199.395,275.985 198.531,276.583C197.158,277.535 195.586,278.724 193.624,279.767C197.713,288.82 207.397,296.693 221.786,302.881C222.214,303.065 222.54,303.387 222.734,303.773C233.474,308.826 270.323,323.25 309.216,330.594C334.138,335.299 344.448,331.711 364.644,326.161C359.376,324.914 355.723,321.141 354.41,312.963C351.849,297.009 352.689,287.237 374.911,282.18C381.675,280.641 386.966,279.245 391.08,279.038C389.327,277.224 387.358,275.369 385.23,273.49C366.478,256.93 350.993,244.039 342.528,235.377C342.023,234.861 341.522,234.342 341.026,233.82C313.396,212.581 299.907,175.44 283.213,136.181C267.98,100.361 250.062,62.777 216.166,33.985C197.842,21.068 174.533,11.177 143.798,5.723C149.675,13.343 149.908,21.892 148.955,25.351L148.305,27.709L146.178,26.501C129.948,17.277 99.723,11.821 75.216,17.044C86.13,22.597 90.304,29.757 88.864,37.173L88.566,38.707L87.003,38.714C64.861,38.817 42.126,47.476 23.646,72.288C29.859,70.741 38.149,68.832 46.084,67.853C47.4,67.691 48.707,67.555 49.994,67.45C52.734,60.065 58.397,54.378 67.051,51.951C79.11,48.569 89.72,51.898 99.149,58.412ZM99.066,72.542C100.4,65.551 66.246,42.754 56.142,73.447C54.173,79.428 62.107,92.007 70.407,69.969C74.887,58.073 97.614,80.151 99.066,72.542Z"}),D.createElement("path",{className:"badger",d:"M347.242,14.148C348.016,13.915 349.256,13.664 350.96,13.392C352.664,13.121 354.406,12.986 356.188,12.986C357.892,12.986 359.421,13.102 360.777,13.334C362.132,13.567 363.274,14.031 364.204,14.729C365.133,15.426 365.83,16.374 366.295,17.575C366.76,18.775 366.992,20.344 366.992,22.28L366.992,33.666C368.928,32.891 370.768,32.349 372.511,32.039C374.253,31.729 376.17,31.574 378.261,31.574C381.979,31.574 385.503,32.233 388.834,33.549C392.164,34.866 395.107,36.783 397.663,39.3C400.219,41.817 402.233,44.935 403.704,48.653C405.176,52.37 405.912,56.669 405.912,61.548C405.912,66.583 405.157,70.978 403.646,74.735C402.136,78.491 400.025,81.608 397.315,84.087C394.604,86.565 391.293,88.444 387.381,89.722C383.47,90.999 379.152,91.638 374.428,91.638C369.316,91.638 364.978,91.038 361.416,89.838C357.853,88.637 354.832,87.146 352.354,85.365C348.946,82.964 347.242,79.866 347.242,76.071L347.242,14.148ZM374.428,76.071C377.99,76.071 380.759,74.851 382.734,72.411C384.709,69.971 385.697,66.35 385.697,61.548C385.697,56.669 384.69,53.029 382.676,50.628C380.662,48.227 377.952,47.026 374.544,47.026C372.995,47.026 371.659,47.181 370.536,47.491C369.413,47.801 368.193,48.265 366.876,48.885L366.876,74.212C367.728,74.754 368.754,75.199 369.955,75.548C371.155,75.896 372.646,76.071 374.428,76.071ZM439.023,31.574C443.205,31.574 447.02,32 450.466,32.852C453.913,33.704 456.856,35.002 459.296,36.744C461.735,38.487 463.614,40.694 464.93,43.366C466.247,46.039 466.905,49.195 466.905,52.835L466.905,78.859C466.905,80.873 466.344,82.518 465.221,83.796C464.098,85.074 462.762,86.178 461.213,87.108C456.178,90.128 449.091,91.638 439.952,91.638C435.847,91.638 432.149,91.251 428.857,90.477C425.565,89.702 422.738,88.54 420.376,86.991C418.014,85.442 416.194,83.467 414.916,81.066C413.638,78.665 412.999,75.877 412.999,72.701C412.999,67.357 414.586,63.252 417.762,60.387C420.938,57.521 425.856,55.739 432.517,55.042L447.736,53.416L447.736,52.603C447.736,50.356 446.748,48.749 444.773,47.781C442.798,46.813 439.952,46.329 436.234,46.329C433.291,46.329 430.425,46.639 427.637,47.258C424.849,47.878 422.332,48.653 420.086,49.582C419.079,48.885 418.227,47.82 417.53,46.387C416.833,44.954 416.484,43.463 416.484,41.914C416.484,39.9 416.968,38.293 417.936,37.093C418.904,35.892 420.395,34.866 422.409,34.014C424.655,33.162 427.308,32.542 430.367,32.155C433.427,31.768 436.312,31.574 439.023,31.574ZM439.952,77.232C441.269,77.232 442.721,77.097 444.309,76.826C445.896,76.555 447.078,76.187 447.852,75.722L447.852,66.428L439.487,67.125C437.319,67.28 435.537,67.744 434.143,68.519C432.749,69.294 432.052,70.455 432.052,72.004C432.052,73.553 432.652,74.812 433.853,75.78C435.053,76.748 437.086,77.232 439.952,77.232ZM476.548,61.548C476.548,56.436 477.323,52.002 478.872,48.246C480.421,44.489 482.57,41.372 485.32,38.894C488.069,36.415 491.283,34.576 494.962,33.375C498.641,32.175 502.611,31.574 506.871,31.574C508.42,31.574 509.93,31.71 511.402,31.981C512.873,32.252 514.074,32.581 515.003,32.968L515.003,14.148C515.778,13.915 517.017,13.664 518.721,13.392C520.425,13.121 522.167,12.986 523.949,12.986C525.653,12.986 527.182,13.102 528.538,13.334C529.893,13.567 531.036,14.031 531.965,14.729C532.895,15.426 533.592,16.374 534.056,17.575C534.521,18.775 534.753,20.344 534.753,22.28L534.753,77.349C534.753,80.989 533.049,83.893 529.642,86.062C527.395,87.533 524.491,88.831 520.928,89.954C517.365,91.077 513.26,91.638 508.613,91.638C503.579,91.638 499.067,90.941 495.079,89.547C491.09,88.153 487.721,86.139 484.971,83.506C482.222,80.873 480.13,77.716 478.697,74.037C477.265,70.358 476.548,66.195 476.548,61.548ZM509.543,47.026C505.36,47.026 502.146,48.227 499.9,50.628C497.654,53.029 496.531,56.669 496.531,61.548C496.531,66.35 497.576,69.971 499.668,72.411C501.759,74.851 504.779,76.071 508.73,76.071C510.124,76.071 511.382,75.858 512.505,75.432C513.628,75.006 514.5,74.522 515.119,73.979L515.119,48.42C513.57,47.491 511.711,47.026 509.543,47.026ZM574.603,31.574C579.017,31.574 583.025,32.136 586.627,33.259C590.228,34.382 593.268,35.834 595.747,37.616C597.296,38.7 598.516,39.9 599.407,41.217C600.297,42.534 600.743,44.238 600.743,46.329L600.743,86.991C600.743,91.096 599.968,94.64 598.419,97.622C596.87,100.604 594.759,103.082 592.087,105.057C589.415,107.032 586.278,108.484 582.677,109.414C579.075,110.343 575.222,110.808 571.117,110.808C564.069,110.808 558.531,109.859 554.504,107.961C550.476,106.064 548.462,102.985 548.462,98.725C548.462,96.944 548.83,95.376 549.566,94.02C550.302,92.665 551.135,91.638 552.064,90.941C554.31,92.181 556.847,93.226 559.674,94.078C562.501,94.93 565.424,95.356 568.445,95.356C572.627,95.356 575.958,94.659 578.436,93.265C580.915,91.871 582.154,89.625 582.154,86.527L582.154,84.668C578.979,86.062 575.106,86.759 570.536,86.759C567.051,86.759 563.74,86.236 560.603,85.191C557.466,84.145 554.717,82.518 552.354,80.311C549.992,78.104 548.095,75.257 546.662,71.772C545.229,68.287 544.512,64.143 544.512,59.341C544.512,54.616 545.268,50.511 546.778,47.026C548.288,43.541 550.379,40.656 553.051,38.371C555.724,36.086 558.899,34.382 562.578,33.259C566.257,32.136 570.265,31.574 574.603,31.574ZM581.806,48.42C581.263,48.11 580.47,47.801 579.424,47.491C578.378,47.181 577.081,47.026 575.532,47.026C571.737,47.026 568.89,48.091 566.993,50.221C565.095,52.351 564.146,55.391 564.146,59.341C564.146,63.833 565.095,67.067 566.993,69.042C568.89,71.017 571.311,72.004 574.254,72.004C577.43,72.004 579.947,71.269 581.806,69.797L581.806,48.42ZM642.799,91.638C638.229,91.638 633.989,90.999 630.078,89.722C626.166,88.444 622.758,86.527 619.854,83.971C616.949,81.415 614.665,78.201 612.999,74.328C611.334,70.455 610.502,65.924 610.502,60.735C610.502,55.623 611.334,51.228 612.999,47.549C614.665,43.87 616.853,40.849 619.563,38.487C622.274,36.125 625.372,34.382 628.858,33.259C632.343,32.136 635.906,31.574 639.546,31.574C643.651,31.574 647.388,32.194 650.757,33.433C654.126,34.672 657.031,36.376 659.471,38.545C661.91,40.714 663.808,43.308 665.163,46.329C666.519,49.35 667.197,52.641 667.197,56.204C667.197,58.837 666.461,60.851 664.989,62.245C663.518,63.64 661.465,64.53 658.832,64.917L630.136,69.216C630.988,71.772 632.73,73.689 635.364,74.967C637.997,76.245 641.018,76.884 644.426,76.884C647.601,76.884 650.602,76.477 653.429,75.664C656.256,74.851 658.561,73.902 660.342,72.818C661.581,73.592 662.627,74.676 663.479,76.071C664.331,77.465 664.757,78.936 664.757,80.485C664.757,83.971 663.13,86.565 659.877,88.269C657.399,89.586 654.611,90.477 651.512,90.941C648.414,91.406 645.51,91.638 642.799,91.638ZM639.546,45.98C637.687,45.98 636.08,46.29 634.725,46.91C633.369,47.529 632.266,48.323 631.414,49.292C630.562,50.26 629.923,51.344 629.497,52.545C629.071,53.745 628.819,54.965 628.742,56.204L648.608,52.951C648.376,51.402 647.524,49.853 646.052,48.304C644.581,46.755 642.412,45.98 639.546,45.98ZM696.473,89.663C695.699,89.896 694.479,90.128 692.814,90.36C691.149,90.593 689.425,90.709 687.644,90.709C685.94,90.709 684.41,90.593 683.055,90.36C681.699,90.128 680.557,89.663 679.628,88.966C678.698,88.269 677.982,87.321 677.478,86.12C676.975,84.919 676.723,83.351 676.723,81.415L676.723,46.561C676.723,44.78 677.052,43.25 677.711,41.972C678.369,40.694 679.318,39.552 680.557,38.545C681.796,37.538 683.326,36.628 685.146,35.815C686.966,35.002 688.922,34.285 691.013,33.666C693.104,33.046 695.273,32.562 697.519,32.213C699.765,31.865 702.011,31.691 704.257,31.691C707.975,31.691 710.918,32.407 713.087,33.84C715.256,35.273 716.34,37.616 716.34,40.869C716.34,41.953 716.185,43.018 715.875,44.063C715.565,45.109 715.178,46.058 714.713,46.91C713.087,46.91 711.422,46.987 709.718,47.142C708.014,47.297 706.349,47.529 704.722,47.839C703.096,48.149 701.566,48.478 700.133,48.827C698.7,49.175 697.48,49.582 696.473,50.047L696.473,89.663Z"}),D.createElement("path",{className:"css",d:"M586.337,162.306C584.4,162.306 582.561,162.616 580.818,163.236C579.075,163.855 577.565,164.765 576.287,165.966C575.009,167.166 573.983,168.657 573.208,170.439C572.434,172.22 572.047,174.311 572.047,176.712C572.047,181.514 573.421,185.116 576.171,187.517C578.92,189.918 582.27,191.119 586.22,191.119C588.544,191.119 590.558,190.847 592.262,190.305C593.966,189.763 595.476,189.182 596.793,188.563C598.342,189.647 599.503,190.828 600.278,192.106C601.052,193.384 601.44,194.914 601.44,196.695C601.44,199.871 599.929,202.33 596.909,204.072C593.888,205.815 589.706,206.686 584.361,206.686C579.482,206.686 575.067,205.97 571.117,204.537C567.167,203.104 563.779,201.09 560.952,198.496C558.125,195.901 555.937,192.784 554.388,189.143C552.838,185.503 552.064,181.476 552.064,177.061C552.064,171.949 552.897,167.476 554.562,163.642C556.227,159.809 558.492,156.652 561.358,154.174C564.224,151.695 567.535,149.837 571.291,148.597C575.048,147.358 579.017,146.738 583.2,146.738C588.776,146.738 593.075,147.745 596.095,149.759C599.116,151.773 600.626,154.367 600.626,157.543C600.626,159.015 600.278,160.389 599.581,161.667C598.884,162.945 598.071,164.049 597.141,164.978C595.824,164.359 594.237,163.759 592.378,163.178C590.519,162.597 588.505,162.306 586.337,162.306ZM657.786,188.098C657.786,193.984 655.579,198.593 651.164,201.923C646.749,205.254 640.243,206.919 631.646,206.919C628.393,206.919 625.372,206.686 622.584,206.222C619.796,205.757 617.414,205.041 615.439,204.072C613.464,203.104 611.915,201.884 610.792,200.413C609.669,198.941 609.107,197.199 609.107,195.185C609.107,193.326 609.495,191.758 610.269,190.48C611.044,189.202 611.973,188.137 613.057,187.285C615.304,188.524 617.879,189.628 620.783,190.596C623.688,191.564 627.038,192.048 630.833,192.048C633.234,192.048 635.073,191.699 636.351,191.002C637.629,190.305 638.268,189.376 638.268,188.214C638.268,187.13 637.803,186.278 636.874,185.658C635.945,185.039 634.396,184.535 632.227,184.148L628.742,183.451C622.003,182.134 616.988,180.062 613.696,177.235C610.405,174.408 608.759,170.361 608.759,165.095C608.759,162.229 609.379,159.634 610.618,157.311C611.857,154.987 613.6,153.051 615.846,151.502C618.092,149.953 620.783,148.752 623.92,147.9C627.057,147.048 630.523,146.622 634.318,146.622C637.184,146.622 639.875,146.835 642.392,147.261C644.91,147.687 647.098,148.326 648.957,149.178C650.815,150.03 652.287,151.134 653.371,152.489C654.456,153.845 654.998,155.452 654.998,157.311C654.998,159.092 654.669,160.622 654.01,161.9C653.352,163.178 652.519,164.243 651.512,165.095C650.893,164.707 649.963,164.301 648.724,163.875C647.485,163.449 646.13,163.061 644.658,162.713C643.186,162.364 641.695,162.074 640.185,161.842C638.675,161.609 637.3,161.493 636.061,161.493C633.505,161.493 631.53,161.784 630.136,162.364C628.742,162.945 628.044,163.855 628.044,165.095C628.044,165.947 628.432,166.644 629.206,167.186C629.981,167.728 631.452,168.231 633.621,168.696L637.223,169.509C644.658,171.213 649.944,173.556 653.081,176.538C656.218,179.52 657.786,183.373 657.786,188.098ZM714.946,188.098C714.946,193.984 712.738,198.593 708.324,201.923C703.909,205.254 697.403,206.919 688.806,206.919C685.553,206.919 682.532,206.686 679.744,206.222C676.955,205.757 674.574,205.041 672.599,204.072C670.624,203.104 669.075,201.884 667.952,200.413C666.829,198.941 666.267,197.199 666.267,195.185C666.267,193.326 666.654,191.758 667.429,190.48C668.203,189.202 669.133,188.137 670.217,187.285C672.463,188.524 675.039,189.628 677.943,190.596C680.847,191.564 684.197,192.048 687.992,192.048C690.393,192.048 692.233,191.699 693.511,191.002C694.789,190.305 695.428,189.376 695.428,188.214C695.428,187.13 694.963,186.278 694.034,185.658C693.104,185.039 691.555,184.535 689.387,184.148L685.901,183.451C679.163,182.134 674.148,180.062 670.856,177.235C667.564,174.408 665.919,170.361 665.919,165.095C665.919,162.229 666.538,159.634 667.777,157.311C669.017,154.987 670.759,153.051 673.005,151.502C675.252,149.953 677.943,148.752 681.08,147.9C684.217,147.048 687.683,146.622 691.478,146.622C694.343,146.622 697.035,146.835 699.552,147.261C702.069,147.687 704.257,148.326 706.116,149.178C707.975,150.03 709.447,151.134 710.531,152.489C711.615,153.845 712.157,155.452 712.157,157.311C712.157,159.092 711.828,160.622 711.17,161.9C710.512,163.178 709.679,164.243 708.672,165.095C708.053,164.707 707.123,164.301 705.884,163.875C704.645,163.449 703.289,163.061 701.818,162.713C700.346,162.364 698.855,162.074 697.345,161.842C695.834,161.609 694.46,161.493 693.22,161.493C690.665,161.493 688.689,161.784 687.295,162.364C685.901,162.945 685.204,163.855 685.204,165.095C685.204,165.947 685.591,166.644 686.366,167.186C687.14,167.728 688.612,168.231 690.781,168.696L694.382,169.509C701.818,171.213 707.104,173.556 710.241,176.538C713.377,179.52 714.946,183.373 714.946,188.098Z"})),xM=()=>o("div",{children:d("div",{className:"mobile block-center pad-t-8 flow",children:[o(wM,{className:"badger-css"}),o("h1",{className:"mar-t-8",children:"Modern, minimal CSS presets"}),d("p",{children:["You've probably heard of CSS ",o("b",{children:"reset"})," stylesheets that provide sensible defaults for HTML elements to smooth out some of the inconsistencies between browsers.  And no doubt you're aware of the plethora of fully-featured CSS ",o("b",{children:"toolkits"})," that implement all manner of styles for UI components."]}),d("p",{children:["Badger CSS sits somewhere between the two.  It provides some sensible"," ",o("b",{children:"presets"})," for HTML elements that you can use out of the box and expect to get reasonable results.  It's highly configurable and is really designed to be a starting point for building your own CSS stylesheets, design systems and UI toolkits."]}),d("div",{className:"grid-2 gap-2",children:[o(le,{to:"demo",text:"Demo",className:"brand button Xbdr-tl-4"}),o(le,{to:"getting-started/installation",text:"Getting Started",className:"brand button Xbdr-tr-4"}),o(le,{to:"getting-started/good",text:"What's Good?",className:"brand button Xbdr-bl-4"}),o(le,{to:"getting-started/bad",text:"What's Bad?",className:"brand button Xbdr-br-4"})]}),o("h2",{children:"TL;DR:"}),o("h3",{children:"Cool Colors"}),d("ul",{children:[d("li",{children:["Hand-crafted palette with ",o(le,{to:"/colors/ranges",children:"13 color ranges"})," ","and 3 greyscales, each containing 21 color stops from none more black to a whiter shade of pale."]}),d("li",{children:["Easily adapt the palette to match your ",o(le,{to:"/colors/brand",children:"brand colors"}),"."]}),d("li",{children:["Create and your own custom palette using ",o("a",{href:"https://abw.github.io/badger-color/",children:"Badger Color"})," and"," ",o(le,{to:"/colors/palette",children:"import it"})," into Badger CSS."]})]}),o("h3",{children:"Useful Utilities"}),d("ul",{children:[o("li",{children:"Utility classes for the things you need to do most often."}),o("li",{children:"Useful for prototyping or ad-hoc styling."}),o("li",{children:"CSS custom properties for applying them into your own custom styles."}),o("li",{children:"All configurable by SASS variables."})]}),o("h3",{children:"Fantastic Forms"}),d("ul",{children:[d("li",{children:[o("i",{children:"Mostly Classless"})," styling providing sensible and modern defaults for HTML forms."]}),o("li",{children:"Minimal additional markup required."}),o("li",{children:"Easily modified using CSS properties and/or SASS variables."})]}),o("h3",{children:"Components"}),d("ul",{children:[o("li",{children:"A basic set of components that you just can't live without."}),o("li",{children:"Different variations of the basic styles."}),o("li",{children:"Automatically adapt to any color range or brand colors."}),o("li",{children:"Configurable and customisable, using CSS properties and/or SASS variables."})]})]})}),kM=Object.freeze(Object.defineProperty({__proto__:null,default:xM},Symbol.toStringTag,{value:"Module"})),CM=`<div class="block-left width-12rem border pad-2">
  Block left
</div>
<div class="block-center width-12rem border pad-2 mar-t-4">
  Block center
</div>
<div class="block-right width-12rem border pad-2 mar-t-4">
  Block right
</div>
`,SM=`<div class="text-left border pad-2 mar-b-2">
  Text on the left
</div>
<div class="text-center border pad-2 mar-b-2">
  Text in the center
</div>
<div class="text-right border pad-2">
  Text on the right
</div>`,TM=`<div class="text-right border pad-4">
  Text on the right
  <div class="text-left border pad-2 mar-v-2">
    Text on the left
  </div>
  Text on the right
</div>`,_M=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Alignment"}),o("h2",{children:"Text Alignment"}),d("p",{children:["Add the ",o("code",{children:"text-left"}),", ",o("code",{children:"text-center"})," and"," ",o("code",{children:"text-right"})," CSS classes to set the text alignment."]}),o(I,{html:SM,caption:"Text Alignment",expand:!0}),d("p",{children:["Text is aligned left by default making the ",o("code",{children:"text-left"})," ","class ",o("em",{children:"mostly"})," redundant.  However it can be useful to reset the alignment to the left for a block that would otherwise be aligned centrally or to the right"]}),o(I,{html:TM,caption:"Text Left",expand:!0}),o("h2",{children:"Block Alignment"}),d("p",{children:["Add the ",o("code",{children:"block-left"}),", ",o("code",{children:"block-center"})," and"," ",o("code",{children:"block-right"})," CSS classes to align a block to the left, in the center, or on the right, respectively."]}),d("p",{children:["You'll need to set a block width to stop it from expanding to fill the full width of the parent element.  You can do that using one of the"," ",o(le,{to:"/utilities/widths",text:"width-*"})," utility classes."]}),o(I,{html:CM,caption:"Block Alignment",expand:!0})]}),LM=Object.freeze(Object.defineProperty({__proto__:null,default:_M},Symbol.toStringTag,{value:"Module"})),$M=`<div class="border pad-4">
  This element has a border.
</div>
`,NM=`<div class="grid-1 gap-2">
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
</div>`,EM=`<div class="grid-2 gap-2">
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
`,IM=`<div class="border pad-4 mar-b-2">
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
`,MM=`<div class="grid-3 gap-4 pad-t-2">
  <button class="brand solid">default</button>
  <button class="brand solid bdr-0">bdr-0</button>
  <button class="brand solid square">square</button>
</div>
<div class="grid-3 gap-4 pad-t-2">
  <input type="text" value="default">
  <input type="text" value="bdr-0" class="bdr-0">
  <input type="text" value="square" class="square">
</div>
`,RM=`<div class="bdr-6 surface-1 pad-2 border grid-1 gap-2">
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
</div>`,PM=`<style>
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
`,AM=`// define your own $border-width-values...
$border-width-values: 1, 2, 3, 5, 8, 13, 21, 34;
// ...and/or set the $border-width-prefix...
$border-width-prefix: 'br-wd';

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,FM=`// define your own $border-radius-values...
$border-radius-values: 1, 2, 3, 5, 8, 13, 21, 34;
// ...and/or set the $border-width-prefix...
$border-radius-prefix: 'br-rd';

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,OM=`<div class="grid-1 gap-4">
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
</div>`,zM=({properties:e})=>d("table",{className:"brand celled striped properties wide",children:[o("thead",{children:d("tr",{children:[o("th",{children:"Property"}),o("th",{children:"Default"}),o("th",{children:"Description"})]})}),o("tbody",{children:e.map(n=>d("tr",{children:[o("td",{className:"key nowrap",children:o("code",{children:n[0]})}),o("td",{className:"nowrap",children:n[1]}),o("td",{children:n[2]})]},n[0]))})]}),DM=({sets:e})=>o("div",{className:`grid-${e.length} gap-8 stack-desktop mar-b-8`,children:e.map(n=>d("div",{children:[o("h4",{className:"mar-b-2",children:n.title}),o(zM,{properties:n.properties}),!!n.notes&&o("div",{className:"smallish info alert",children:n.notes})]},n.title))}),BM=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Borders"}),o("h2",{children:"Border Class"}),d("p",{children:["Add the ",o("code",{children:"border"})," CSS class to an element to give it a border."]}),o(I,{html:$M,caption:"Border",expand:!0}),o("h2",{children:"Border Width"}),d("p",{children:["Add the ",o("code",{children:"bdw-N"})," CSS class to set the border width, where"," ",o("code",{children:"N"})," is in pixel units."]}),o(I,{html:NM,caption:"Border Width",expand:!0}),d("div",{className:"grid-2 gap-8 stack-desktop",children:[d("div",{className:"wide",children:[d("p",{children:["The pre-defined values for ",o("code",{children:"N"})," are"," ",o("code",{children:"0"}),", ",o("code",{children:"1"}),", ",o("code",{children:"2"}),", ",o("code",{children:"3"}),","," ",o("code",{children:"4"}),", ",o("code",{children:"5"}),", ",o("code",{children:"6"}),", ",o("code",{children:"8"})," and"," ",o("code",{children:"10"}),"."]}),d("p",{children:["You can set the ",o("code",{children:"$border-width-values"})," SCSS variable if you want to define a different set of values. You can also use the ",o("code",{children:"$border-width-prefix"})," to define a different prefix for the border width classes if you don't like ",o("code",{children:"bdw"}),"."]}),d("p",{children:["In the example shown here the generated CSS classes would be"," ",o("code",{children:"br-wd-1"}),", ",o("code",{children:"br-wd-2"}),","," ",o("code",{children:"br-wd-3"}),", ",o("code",{children:"br-wd-5"})," and so on."]})]}),o(ze,{code:AM,caption:"Custom Border Widths",language:"scss",className:"mar-b-8",expand:!0})]}),o("h2",{children:"Border Color"}),d("p",{children:["Add the ",o("code",{children:"bdc-N"})," CSS class to set the border color, where"," ",o("code",{children:"N"})," is a color stop (0, 5, 10, etc) for the current color range."]}),o(I,{html:EM,caption:"Border Color"}),o("h2",{children:"Border Radius"}),d("p",{children:["Add the ",o("code",{children:"bdr-N"})," classes to set the radius of borders. The ",o("code",{children:"-N"})," multiplier is a multiple of the base unit radius (0.25rem by default)."]}),o(I,{html:IM,caption:"Border Radius",expand:!0}),d("p",{children:["The ",o("code",{children:"bdr-0"})," class can be used to ",o("i",{children:"explicitly"})," set the border radius to 0. The ",o("code",{children:"square"})," class is an alias for"," ",o("code",{children:"bdr-0"})," with the added benefit of having the"," ",o("code",{children:"!important"})," flag set for when you really need to drive the point home."]}),o("p",{children:"They can be used to remove the corner radius from components which have them by default, like buttons and form fields."}),o(I,{html:MM,caption:"Square Corners",expand:!0}),d("div",{className:"grid-2 gap-8 stack-desktop",children:[d("div",{className:"wide",children:[d("p",{children:["The pre-defined values for ",o("code",{children:"N"})," are"," ",o("code",{children:"0"}),", ",o("code",{children:"1"}),", ",o("code",{children:"2"}),", ",o("code",{children:"3"}),","," ",o("code",{children:"4"}),", ",o("code",{children:"5"}),", ",o("code",{children:"6"}),", ",o("code",{children:"8"})," and"," ",o("code",{children:"10"}),"."]}),d("p",{children:["You can set the ",o("code",{children:"$border-radius-values"})," SCSS variable if you want to define a different set of values. You can also use the ",o("code",{children:"$border-radius-prefix"})," to define a different prefix for the border radius classes if you don't like ",o("code",{children:"bdr"}),"."]}),d("p",{children:["In the example shown here the generated CSS classes would be"," ",o("code",{children:"br-rd-1"}),", ",o("code",{children:"br-rd-2"}),","," ",o("code",{children:"br-rd-3"}),", ",o("code",{children:"br-rd-5"})," and so on."]})]}),o(ze,{code:FM,caption:"Custom Border Radius",language:"scss",className:"mar-b-8",expand:!0})]}),o("h2",{children:"Border Radius Corners"}),o("p",{children:"You can independently set the radius for different corners using these classes."}),d("div",{className:"grid-2 gap-8 stack-desktop",children:[d("table",{className:"brand border lined striped mar-b-8",children:[o("thead",{children:d("tr",{children:[o("th",{children:"Class"}),o("th",{children:"Description"})]})}),d("tbody",{children:[d("tr",{children:[o("td",{children:o("code",{children:"bdr-t-N"})}),o("td",{children:"Top left and top right corner radius"})]}),d("tr",{children:[o("td",{children:o("code",{children:"bdr-b-N"})}),o("td",{children:"Bottom left and bottom right corner radius"})]}),d("tr",{children:[o("td",{children:o("code",{children:"bdr-l-N"})}),o("td",{children:"Top left and bottom left corner radius"})]}),d("tr",{children:[o("td",{children:o("code",{children:"bdr-r-N"})}),o("td",{children:"Top right and bottom right corner radius"})]}),d("tr",{children:[o("td",{children:o("code",{children:"bdr-tl-N"})}),o("td",{children:"Top left corner radius"})]}),d("tr",{children:[o("td",{children:o("code",{children:"bdr-tr-N"})}),o("td",{children:"Top right corner radius"})]}),d("tr",{children:[o("td",{children:o("code",{children:"bdr-bl-N"})}),o("td",{children:"Bottom left corner radius"})]}),d("tr",{children:[o("td",{children:o("code",{children:"bdr-br-N"})}),o("td",{children:"Bottom right corner radius"})]})]})]}),o("div",{children:d(Mo,{children:["If you set a custom ",o("code",{children:"$border-radius-prefix"})," as shown above then your CSS classes will start with your chosen prefix instead of ",o("code",{children:"bdr"})," as shown here."]})})]}),o(I,{html:RM,caption:"Border Radius Corners",expand:!0}),o("h2",{children:"No Border Required!"}),d("p",{children:["You don't need to have a border displayed to set the border radius. The ",o("code",{children:"bdr-N"})," classes can be used to set the border radius on various components."]}),o(I,{html:OM,caption:"Radius Components",expand:!0}),o("h2",{children:"Border Properties"}),o("p",{children:"The following properties are used to define the border style."}),o(DM,{sets:[{title:"Defaults",properties:[["--border-width",o("code",{children:"1px"},"1px"),"Border width"],["--border-style",o("code",{children:"solid"},"solid"),d("span",{children:["Border style: ",o("code",{children:"solid"}),", ",o("code",{children:"dotted"}),", ",o("code",{children:"dashed"}),", etc."]},"desc")],["--border-radius",o("code",{children:"var(--unit-radius)"},"radius"),"Border radius"],["--border-color",o("code",{children:"var(--color-75)"},"color"),"Border color from current color range"]]},{title:"Dark Theme",properties:[["--border-color",o("code",{children:"var(--color-25)"},"color"),"Border color from current color range"]]}]}),o("h2",{children:"Setting Custom Properties"}),o(I,{html:PM,caption:"Custom Border Style",expand:!0})]}),jM=Object.freeze(Object.defineProperty({__proto__:null,default:BM},Symbol.toStringTag,{value:"Module"})),UM=`<div class="inline border pad-2">
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
`,HM=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Display"}),o("h2",{children:"Display Modes"}),d(de,{children:[d("p",{children:["The ",o("code",{children:"inline"}),", ",o("code",{children:"block"})," and"," ",o("code",{children:"inline-block"})," CSS classes can be used to set the"," ",o("code",{children:"display"})," mode.   These are useful when you have an element that would normally have one display type that you want displayed in a different way."]}),d("p",{children:["See the"," ",o(le,{to:"/utilities/flexbox",text:"flexbox"})," and"," ",o(le,{to:"/utilities/grid",text:"grid"})," pages for information about using flex and grid display modes."]})]}),o(I,{html:UM,caption:"Display Modes",expand:!0})]}),WM=Object.freeze(Object.defineProperty({__proto__:null,default:HM},Symbol.toStringTag,{value:"Module"})),VM=`<div class="flex">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>`,GM=`<div class="flex top">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,YM=`<div class="flex middle">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,qM=`<div class="flex bottom">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,ZM=`<div class="flex baseline">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,QM=`<div class="flex top gap-4">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,KM=`<div class="flex left gap-2">
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
`,XM=`<div class="flex center gap-2">
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
`,JM=`<div class="flex right gap-2">
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
`,eR=`<div class="flex space">
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
`,nR=`<div class="flex evenly">
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
`,tR=`<div class="flex gap-2 red">
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
`,rR=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Flexbox"}),o("h2",{children:"Flexbox Classes"}),d("p",{children:["Use the ",o("code",{children:"flex"})," CSS class to set the ",o("code",{children:"display"})," ","mode to ",o("code",{children:"flex"}),".  The default alignment mode"," ","(i.e. the ",o("code",{children:"align-items"})," CSS property) is ",o("code",{children:"stretch"}),"."]}),o(I,{html:VM,caption:".flex",expand:!0}),o("h2",{children:"Gaps"}),d("p",{children:["The ",o("code",{children:"gap-N"})," classes can be used to add a gap between successive elements.  Here ",o("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit (",o("code",{children:"0.25rem"})," by default)."]}),o(I,{html:QM,caption:".flex.gap-4",expand:!0}),o("h2",{children:"Flex Top"}),d("p",{children:["Add the ",o("code",{children:"top"})," (or ",o("code",{children:"start"}),") class to align the items to the stop."]}),o(I,{html:GM,caption:".flex.top",expand:!0}),o("h2",{children:"Flex Middle"}),d("p",{children:["Add the ",o("code",{children:"middle"})," class to align the items to the middle."]}),o(I,{html:YM,caption:".flex.middle",expand:!0}),o("h2",{children:"Flex Baseline"}),d("p",{children:["Add the ",o("code",{children:"baseline"})," class to align the items to the text baseline."]}),o(I,{html:ZM,caption:".flex.baseline",expand:!0}),o("h2",{children:"Flex Bottom"}),d("p",{children:["Add the ",o("code",{children:"bottom"})," class to align the items to the bottom."]}),o(I,{html:qM,caption:".flex.bottom",expand:!0}),o("h2",{children:"Flex Left"}),d("p",{children:["Items are align to the left (technically, ",o("code",{children:"flex-start"}),") by default but you can add the ",o("code",{children:"left"})," class if you want to make it explicit."]}),o(I,{html:KM,caption:".flex.left",expand:!0}),o("h2",{children:"Flex Center"}),d("p",{children:["Add the ",o("code",{children:"center"})," class to align the items to the center."]}),o(I,{html:XM,caption:".flex.center",expand:!0}),o("h2",{children:"Flex Right"}),d("p",{children:["Add the ",o("code",{children:"right"})," class to align the items to the right."]}),o(I,{html:JM,caption:".flex.right",expand:!0}),o("h2",{children:"Flex Space"}),d("p",{children:["Add the ",o("code",{children:"space"})," class to space the items as much as possible. This is equivalent to setting the ",o("code",{children:"justify-content"})," CSS property to ",o("code",{children:"space-between"}),"."]}),o(I,{html:eR,caption:".flex.space",expand:!0}),o("h2",{children:"Flex Evenly"}),d("p",{children:["Add the ",o("code",{children:"evenly"})," class to divide the space evenly between and around the items.  This is equivalent to setting the"," ",o("code",{children:"justify-content"})," CSS property to ",o("code",{children:"space-evenly"}),"."]}),o(I,{html:nR,caption:".flex.evenly",expand:!0}),o("h2",{children:"Flex Wrap"}),d("p",{children:["Add the ",o("code",{children:"wrap"})," class to set the ",o("code",{children:"flex-wrap"})," property to ",o("code",{children:"wrap"}),"."]}),o(I,{html:tR,caption:".flex.wrap",expand:!0})]}),oR=Object.freeze(Object.defineProperty({__proto__:null,default:rR},Symbol.toStringTag,{value:"Module"})),aR=`<div class="italic larger">
  Italic
</div>
<div class="underline larger">
  Underline
</div>
<div class="strike larger">
  Strike
</div>
`,lR=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Font Styles"}),o("p",{children:"The following classes are defined for common font styles."}),o(I,{html:aR,caption:"Font Styles",expand:!0})]}),iR=Object.freeze(Object.defineProperty({__proto__:null,default:lR},Symbol.toStringTag,{value:"Module"})),sR=`<div class="weight-thin larger">
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
</div>`,dR=`<div class="weight-100 larger">
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
</div>`,cR=`<div class="thin larger">
  Thin
</div>
<div class="bold larger">
  Bold
</div>
<div class="thick larger">
  Thick
</div>
`,uR=`// define your own font weights...
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
`,hR=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Font Weights"}),o("h2",{children:"Weight Names"}),d(de,{children:[d("p",{children:["The ",o("code",{children:"weight-<name>"})," classes can be used to set the font weight."]}),d("p",{children:["The values for ",o("code",{children:"<name>"})," can be",o("code",{children:"thin"}),", ",o("code",{children:"extra-light"}),", ",o("code",{children:"light"}),","," ",o("code",{children:"regular"}),", ",o("code",{children:"medium"}),", ",o("code",{children:"semi-bold"}),","," ",o("code",{children:"bold"}),", ",o("code",{children:"extra-bold"})," or ",o("code",{children:"black"}),"."]})]}),o(I,{html:sR,caption:"Weight Names",expand:!0}),o("h2",{children:"Weight Numbers"}),d(de,{children:[o("p",{children:"Alternately you can use the corresponding weight numbers."}),d("p",{children:["Those numbers can be"," ",o("code",{children:"100"}),", ",o("code",{children:"200"}),", ",o("code",{children:"300"}),","," ",o("code",{children:"400"}),", ",o("code",{children:"500"}),", ",o("code",{children:"600"}),","," ",o("code",{children:"700"}),", ",o("code",{children:"800"})," or ",o("code",{children:"900"}),"."]})]}),o(I,{html:dR,caption:"Weight Numbers",expand:!0}),o("h2",{children:"Weight Aliases"}),d("p",{children:["There are some short-cut aliases for the common cases.  Note that we use ",o("code",{children:"thick"})," rather than ",o("code",{children:"black"})," to avoid any confusion with the color black."]}),o(I,{html:cR,caption:"Weight Aliases",expand:!0}),o("h2",{children:"Custom Weights"}),d(de,{children:[d("p",{children:["You can set the ",o("code",{children:"$font-weights"})," SASS variable if you want to define a different set of font weights."]}),o(ze,{code:uR,caption:"Font Weights",language:"scss",className:"mar-b-8",expand:!0})]})]}),pR=Object.freeze(Object.defineProperty({__proto__:null,default:hR},Symbol.toStringTag,{value:"Module"})),fR=`<div class="large">
  <p class="font-sans">Sans-serif Font</p>
  <p class="font-serif">Serif Font</p>
  <p class="font-system">System Font</p>
  <p class="font-mono">Mono Font</p>
</div>
`,gR=`// redefine any of the following fonts to taste...
$font-sans:   'Open Sans', Helvetica, sans-serif;
$font-serif:  'Times New Roman', Times, Baskerville, Georgia, serif;
$font-mono:   Monaco, 'Bitstream Vera Sans Mono', 'Lucida Console', Terminal, monospace;
$font-system: -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,vR=`// define your own font names...
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
`,mR=`p {
  font-family: $font-sans;
}
`,bR=`p {
  font-family: var(--font-sans);
}
`,yR=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Fonts"}),o("h2",{children:"Font Classes"}),d("p",{children:["The ",o("code",{children:"font-sans"})," CSS class can be used to select a sans-serif font, ",o("code",{children:"font-serif"})," for a serif font, ",o("code",{children:"font-system"})," ","for the system font, or ",o("code",{children:"font-mono"})," for a monospaced font."]}),o(I,{html:fR,caption:"Fonts",expand:!0}),o("h2",{children:"Font Variables"}),o("p",{children:"Each of the above fonts is defined by a SASS variable which you can override to define your own font stacks."}),o(ze,{code:gR,caption:"Customising Fonts",language:"scss",className:"mar-b-8",expand:!0}),d("p",{children:["These variables are exposed as the corresponding CSS custom properties:"," ",o("code",{children:"--font-sans"}),", ",o("code",{children:"--font-serif"}),","," ",o("code",{children:"--font-system"})," and ",o("code",{children:"--font-mono"}),"."]}),d("div",{className:"grid-2 gap-4 stack-laptop mar-b-8",children:[o(ze,{code:mR,caption:"Font Variables in SCSS",language:"scss",expand:!0}),o(ze,{code:bR,caption:"Font Variables in CSS",language:"css",expand:!0})]}),o("h2",{children:"Custom Fonts"}),d(de,{children:[d("div",{children:[o("p",{children:"You can define your own names for fonts."}),d("p",{children:["In this case the CSS classes created will be ",o("code",{children:"font-body"}),","," ",o("code",{children:"font-head"})," and ",o("code",{children:"font-code"}),".  The fonts will also be defined as the ",o("code",{children:"--font-body"}),", ",o("code",{children:"--font-head"}),","," ","and ",o("code",{children:"--font-code"})," CSS custom properties."]})]}),o(ze,{code:vR,caption:"Font Aliases",language:"scss",className:"mar-b-8",expand:!0})]})]}),wR=Object.freeze(Object.defineProperty({__proto__:null,default:yR},Symbol.toStringTag,{value:"Module"})),xR=`<h3 class="mar-b-2"><code>grid-2</code></h3>
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
`,kR=`<div class="grid gap-4">
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
`,CR=`<div class="grid-2 gap-4">
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
`,SR=`<div class="grid-2 gap-v-8 gap-h-2">
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
`,TR=`<div class="grid-3 gap-2 top">
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
`,_R=`<div class="grid-3 gap-2 middle">
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
`,LR=`<div class="grid-3 gap-2 bottom">
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
`,$R=`<div class="grid-fit gap-2">
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
`,NR=`<div class="grid-fit gap-2" style="--min-width: 200px">
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
`,ER=`<h3><code>grid-fit</code></h3>

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
`,IR=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Grid"}),o("h2",{children:"Grid Columns"}),d("p",{children:["Use a ",o("code",{children:"grid-N"})," CSS class to set the ",o("code",{children:"display"})," ","mode to ",o("code",{children:"grid"})," where ",o("code",{children:"N"})," is the number of columns from 2 to 16."]}),o(I,{html:xR,caption:"Grid Columns",expand:!0}),o("h2",{children:"Gaps"}),d("p",{children:["The ",o("code",{children:"gap-N"})," classes can be used to add a gap between successive elements.  Here ",o("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit (",o("code",{children:"0.25rem"})," by default)."]}),o(I,{html:CR,caption:"Grid Gaps",expand:!0}),o("h2",{children:"Vertical and Horizontal Gaps"}),d("p",{children:["The the ",o("code",{children:"gap-v-N"})," and ",o("code",{children:"gap-h-N"})," classes can be used to define the vertical and horizontal gaps separately. Again, ",o("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit."]}),o(I,{html:SR,caption:"Grid Gaps",expand:!0}),o("h2",{children:"Single Column Grid"}),d("p",{children:["The ",o("code",{children:"grid"})," CSS class (or ",o("code",{children:"grid-1"})," which does the same thing) creates a single column grid.  It's useful because it then allows you to use the ",o("code",{children:"gap-N"})," classes to add a vertical gap between child components."]}),o(I,{html:kR,caption:"Single Column Grid",expand:!0}),o("h2",{children:"Grid Fit"}),d("p",{children:["The ",o("code",{children:"grid-fit"})," CSS class will fit as many items into the grid as it can and then wrap onto the next line."]}),o(I,{html:$R,caption:"Grid Fit"}),o("h2",{children:"Grid Fill"}),d("p",{children:["The ",o("code",{children:"grid-fill"})," CSS class is similar to ",o("code",{children:"grid-fit"}),". The difference between them is what happens when there are't enough items to fill the container width.  ",o("code",{children:"grid-fit"})," will stretch them whereas ",o("code",{children:"grid-fill"})," will not."]}),o(I,{html:ER,caption:"Grid Fill"}),o("h2",{children:"Grid Fit/Fill Size"}),d("p",{children:["Both ",o("code",{children:"grid-fit"})," and ",o("code",{children:"grid-fill"})," can define a minimum size for each child element.  By default this is"," ",o("code",{children:"100px"})," wide.  You can set the ",o("code",{children:"--min-width"})," property to change it."]}),o(I,{html:NR,caption:"Grid Size"}),o("h2",{children:"Grid Top"}),d("p",{children:["Add the ",o("code",{children:"top"})," (or ",o("code",{children:"start"}),") CSS class to align items to the top of grid columns."]}),o(I,{html:TR,caption:"Grid Top",expand:!0}),o("h2",{children:"Grid Middle"}),d("p",{children:["Add the ",o("code",{children:"middle"})," CSS class to align items to the middle of grid columns."]}),o(I,{html:_R,caption:"Grid Middle",expand:!0}),o("h2",{children:"Grid Bottom"}),d("p",{children:["Add the ",o("code",{children:"bottom"})," (or ",o("code",{children:"end"}),") CSS class to align items to the end of grid columns."]}),o(I,{html:LR,caption:"Grid Bottom",expand:!0})]}),MR=Object.freeze(Object.defineProperty({__proto__:null,default:IR},Symbol.toStringTag,{value:"Module"})),RR=()=>d("div",{className:"prose",children:[o("h1",{children:"Utility Classes"}),d("p",{className:"intro wide",children:["CSS utility classes are ",o("i",{children:"extremely"})," useful for applying styles to elements on an ad-hoc basis.  But they shouldn't be used as a substitute for writing CSS for reusable styles."]}),d(de,{children:[d("div",{children:[o("h2",{children:"Moderation in All Things"}),d("p",{children:["Some CSS frameworks, most notably"," ",o("a",{href:"https://tailwindcss.com/",children:"tailwind.css"}),", have taken this to the extreme where everything is a utility class and you never need to write any CSS at all. Although this approach has some merits for rapid prototyping, I personally wouldn't use it when building a non-trivial site because I think that it can have a negative impact on readability and maintainability."]}),d("p",{children:["I prefer to take the pragmatic approach and use utility classes to apply ",o("i",{children:"exceptional"})," styling to elements that don't warrant having their own dedicated CSS classes.  The general rule that I follow is to create dedicated CSS classes for components that I'm using in different places in a site.  For example, a product card, a user avatar, button and form styling, and so.  This ensures that they are consistent and can easily be changed across the whole site by updating the rules in the stylesheet."]}),d("p",{children:["For styling that depends on the context in which an element is being used, I'll generally reach for utility classes. By far the most useful of these, and the ones that I use more than any other, are the ",o("code",{children:"mar"})," and ",o("code",{children:"pad"}),` utility classes to add custom margins and padding.  The amount of margin or padding required on an element will often depend on the other elements around it, so there isn't a "one size fits all" solution. Other useful utility classes include those to set the font size, add a border or drop shadow, or to set the layout to use flexbox or grid.`]}),o("h2",{children:"CSS Custom Properties"}),d("p",{children:['CSS custom properties or CSS variables as they are also know, are an incredibly powerful addition to the toolkit for any web designer or developer.  They allow you to define reusable "snippets" of CSS that can easily be applied to different elements.  They can be used to replace much of the functionality that was previously only accessible by using variables and/or mixins in a CSS pre-processing language like'," ",o("a",{href:"https://sass-lang.com/",children:"SASS"}),"."]})]}),d("div",{children:[o("h2",{children:"SASS Variables"}),o("p",{children:"Although CSS custom properties have largely removed the need for CSS pre-processors like SASS, there are still benefits to be had from using them.  One benefit is that they can help to reduce bloat in your CSS files.  SASS allows you to define variables that can be used to implement system-wide configuration options that are then compiled into the generated CSS files.  In contrast, any CSS custom properties that you use must be included in the CSS and, if overdone, can lead to significant increases in the file size."}),o("h2",{children:"When to Use Each?"}),o("p",{children:"The general rule that I follow is to use SASS variables for configuration options that I might want to change on a site-wide basis but generally remain constant throughout the site.  For example, the default font face, the breakpoints, the colors or default spacing units.  It's useful to have these defined as variables because it allows me to plug Badger CSS into a project, tweak the default settings, and then get coding.  If at some point in the future I decide they're not quite right, or if the client or a designer wants me to change them, then it should be easy to do so, and they should be applied universally."}),o("p",{children:"For styles that I might want to change in different parts of the site, need to reflect some application state (e.g. the differences between a success, warning or error message), or that should have different properties depending on the user selecting a light or dark theme, then CSS properties are generally the way to go."}),o("p",{children:"For styles that need to be applied on an ad-hoc basis, utility classes are what I reach for."})]})]})]}),PR=Object.freeze(Object.defineProperty({__proto__:null,default:RR},Symbol.toStringTag,{value:"Module"})),AR=`<div class="relative border" style="height: 140px">
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
`,FR=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Position"}),o("h2",{children:"Position Classes"}),d("p",{children:["Add the ",o("code",{children:"absolute"}),", ",o("code",{children:"relative"})," and"," ",o("code",{children:"fixed"})," CSS classes to set the position type."]}),d("p",{children:["For elements that are set to ",o("code",{children:"absolute"})," or ",o("code",{children:"fixed"})," ","position, the ",o("code",{children:"top"}),", ",o("code",{children:"bottom"}),", ",o("code",{children:"left"})," ","and ",o("code",{children:"right"})," classes can be used to position them against the corresponding edge of the closest parent element with the"," ",o("code",{children:"relative"})," position type."]}),o(I,{html:AR,caption:"Position",expand:!0})]}),OR=Object.freeze(Object.defineProperty({__proto__:null,default:FR},Symbol.toStringTag,{value:"Module"})),zR=`<div class="scroll-x border pad-2 nowrap mar-b-2">
  Yeah, I like it, just been fooling about with it for a few months now, very delicate... Yeah, it's part of a... trilogy really, a musical trilogy I'm doing, in, D minor, which I always find is really the saddest of all keys really. I don't know why, but it makes people weep instantly. You play a "baaaaa... baaaaaa..." it's the horn part. "...baaaa, baaaaa...", yeah, just simple lines intertwining, you know very much like, I'm really influenced by Mozart and Bach, It's sort of in between those, really, it's like a Mach piece really.<
</div>
`,DR=`<div class="scroll-y border pad-2" style="height: 7rem">
  Yeah, I like it, just been fooling about with it for a few months
  now, very delicate... Yeah, it's part of a... trilogy really, a
  musical trilogy I'm doing, in, D minor, which I always find is really
  the saddest of all keys really. I don't know why, but it makes people
  weep instantly. You play a "baaaaa... baaaaaa..." it's the horn part.
  "...baaaa, baaaaa...", yeah, just simple lines intertwining, you
  know very much like, I'm really influenced by Mozart and Bach,
  It's sort of in between those, really, it's like a Mach piece
  really.
</div>`,BR=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Scolling"}),o("h2",{children:"Scroll Classes"}),d("p",{children:["Add the ",o("code",{children:"scroll-x"})," or ",o("code",{children:"scroll-y"})," CSS classes to set ",o("code",{children:"overflow-x"})," or ",o("code",{children:"overflow-y"})," to ",o("code",{children:"scroll"}),", respectively."]}),o("p",{children:`Be warned that you'll also need to set widths and/or heights as appropriate to stop the layout engine from doing the "right" thing and expanding the containers to fit the content.`}),o(I,{html:zR,caption:"scroll-x",expand:!0}),o(I,{html:DR,caption:"scroll-y",expand:!0})]}),jR=Object.freeze(Object.defineProperty({__proto__:null,default:BR},Symbol.toStringTag,{value:"Module"})),UR=`<div class="surface-3 pad-8">
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
</div>`,HR=`<div class="surface-3 pad-8">
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
`,WR=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Shadows"}),o("h2",{children:"Shadow Classes"}),d("p",{children:["Use the ",o("code",{children:"shadow-1"}),", ",o("code",{children:"shadow-2"}),","," ",o("code",{children:"shadow-3"}),", ",o("code",{children:"shadow-4"})," and ",o("code",{children:"shadow-5"})," ","CSS classes to add a box shadow of progressively larger size.  Larger shadows can be used to suggest that an element is lifted higher off the background and thus appears closer to the foreground."]}),o(I,{html:UR,caption:"Shadows",expand:!0}),o("h2",{children:"Shadow Properties"}),d(de,{children:[d("p",{children:["The shadow styles are defined as CSS custom properties, (e.g."," ",o("code",{children:"--shadow-1"}),", ",o("code",{children:"--shadow-2"}),", etc).  The colors and opacities used for the shadows depend on both the shadow depth and color theme.  For the default light theme the base color is"," ",o("code",{children:"--grey-0"})," and the shadows are more transparent.  For the dark theme, where shadows need to be a bit more prominent to be visible, the base color is ",o("code",{children:"black"})," and the shadows are more opaque."]}),d("p",{children:["The benefit of CSS custom properties is that you can easily apply them to your own style rules.  In this example we define a"," ",o("code",{children:".shadow-example"})," rule which adds a ",o("code",{children:"box-shadow"})," using the ",o("code",{children:"--shadow-2"})," custom property.  The shadow color will be set correctly for both light and dark themes so you don't need to worry about defining separate rules for each."]})]}),o(I,{html:HR,caption:"Shadow Style",expand:!0})]}),VR=Object.freeze(Object.defineProperty({__proto__:null,default:WR},Symbol.toStringTag,{value:"Module"})),GR=`<div class="smallest">Smallest text</div>
<div class="smaller">Smaller text</div>
<div class="small">Small text</div>
<div>Normal size text</div>
<div class="large">Large text</div>
<div class="larger">Larger text</div>
<div class="largest">Largest text</div>
`,YR=`<div>x1</div>
<div class="x2">x2</div>
<div class="x3">x3</div>
<div class="x4">x4</div>
<div class="x5">x5</div>
<div class="x6">x6</div>
<div class="x7">x7</div>
<div class="x8">x8</div>
<div class="x9">x9</div>
<div class="x10">x10</div>
`,qR=`// define your own text sizes...
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
@import "@abw/badger-css/styles/badger.scss";`,ZR=({heading1:e="Class",heading2:n="Rem Size",heading3:t=d(Rt,{children:["Pixel Size ",o("span",{className:"smaller",children:"(when 1rem=16px)"})]}),rows:r})=>d("table",{className:"brand celled striped properties small wide mar-b-2",children:[o("thead",{children:d("tr",{children:[o("th",{children:e}),o("th",{children:n}),o("th",{children:t})]})}),o("tbody",{children:r.map(a=>d("tr",{children:[o("td",{children:o("code",{children:a[0]})}),o("td",{children:a[1]}),o("td",{children:a[2]})]},a[0]))})]}),QR=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Text Sizes"}),o("h2",{children:"Size Classes"}),d("p",{children:["Use the ",o("code",{children:"smallest"}),", ",o("code",{children:"smaller"}),","," ",o("code",{children:"small"}),", ",o("code",{children:"medium"})," (default)"," ",o("code",{children:"large"}),", ",o("code",{children:"larger"})," and ",o("code",{children:"largest"})," CSS classes to set the text size. These are defined as SASS variables which you can override (e.g. ",o("code",{children:"$size-large"}),") and CSS custom properties which you can use in your own stylesheets or inline styles (e.g. ",o("code",{children:"--size-large"}),")."]}),o(I,{html:GR,caption:"Text Sizes",expand:!0}),o("h2",{children:"Default Sizes"}),d(de,{children:[o("p",{children:"The pre-defined values for the sizes are shown here."}),o(ZR,{rows:[["smallest","0.625rem","10px"],["smaller","0.75rem","12px"],["small","0.875rem","14px"],["medium","1rem","16px"],["large","1.25rem","20px"],["larger","1.5rem","24px"],["largest","2rem","32p<"]]})]}),o("h2",{children:"Custom Sizes"}),d(Zt,{code:qR,caption:"Custom Sizes",language:"scss",expand:!0,children:[d("p",{children:["You can set the ",o("code",{children:"$sizes"})," SCSS variable if you want to define a different set of sizes, either to give them different names or values."]}),d("p",{children:["In the example shown here the generated CSS classes would be"," ",o("code",{children:"xxs"}),", ",o("code",{children:"xs"}),", ",o("code",{children:"s"}),","," ",o("code",{children:"m"}),", ",o("code",{children:"l"}),", ",o("code",{children:"xl"})," and ",o("code",{children:"xxl"}),"."]})]}),o("h2",{children:"Size Multipliers"}),d("p",{children:["For larger text sizes you can use the size multiple classes:"," ",o("code",{children:"x2"}),", ",o("code",{children:"x3"}),", etc., up to ",o("code",{children:"x10"}),". These are all multiples of ",o("code",{children:"1rem"}),"."]}),o(I,{html:YR,caption:"Text Sizes",expand:!0})]}),KR=Object.freeze(Object.defineProperty({__proto__:null,default:QR},Symbol.toStringTag,{value:"Module"})),XR=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
  <div class="mar surface pad-2">
    This has 1 unit of margin.
  </div>
</div>
`,JR=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
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
`,eP=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
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
`,nP=`<div class="pad-2 grey20 bgc-50 fgc-90 mar-b-2">
  Two units of padding all around.
</div>
<div class="pad-v-4 pad-h-8 grey20 bgc-50 fgc-90 border">
  Four units of padding vertically and eight units
  horizontally
</div>
`,tP=`<div class="grid-1 gap-4 surface-3 pad-4">
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
`,rP=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Spacing"}),d("p",{children:["The ",o("code",{children:"mar"})," and ",o("code",{children:"pad"})," CSS utility classes can be used to set the margins and padding for and element."]}),o("h2",{children:"Margins"}),d("p",{children:["The ",o("code",{children:"mar"})," class by itself will add 1 unit of margin to all four sides of an element.  The default unit size is ",o("code",{children:"0.25rem"}),"."]}),o(I,{html:XR,caption:"Margins",expand:!0}),d("p",{children:["The ",o("code",{children:"mar-N"})," classes will add multiples of the unit, where ",o("code",{children:"N"})," is one of the values:"," ",o("code",{children:"0"}),", ",o("code",{children:"1"}),", ",o("code",{children:"2"}),", ",o("code",{children:"3"}),","," ",o("code",{children:"4"}),", ",o("code",{children:"6"}),", ",o("code",{children:"8"}),", ",o("code",{children:"10"}),","," ",o("code",{children:"12"}),", ",o("code",{children:"16"}),", ",o("code",{children:"20"}),","," ",o("code",{children:"24"}),", ",o("code",{children:"28"})," or ",o("code",{children:"32"}),".  The"," ",o("code",{children:"mar-1"})," class is effectively the same as just ",o("code",{children:"mar"})," ","but is included for completeness.  Also note that ",o("code",{children:"mar-0"})," can be used to remove any margin that would otherwise be present on an element."]}),o(I,{html:JR,caption:"Margin Multiple",expand:!0}),o("h2",{children:"Margin Directions"}),d("p",{children:["You can also specify the direction for the margin using the"," ",o("code",{children:"mar-t"})," (top), ",o("code",{children:"mar-r"})," (right),"," ",o("code",{children:"mar-b"})," (bottom), ",o("code",{children:"mar-l"})," (left),"," ",o("code",{children:"mar-v"})," (vertical: top and bottom) and"," ",o("code",{children:"mar-h"})," (horizontal: left and right) classes. The default is 1 unit of margin or a ",o("code",{children:"-N"})," suffix can be added as a multiplier.  For example ",o("code",{children:"mar-t-4"})," to add 4 units of margin to the top of an element."]}),o(I,{html:eP,caption:"Margin Direction",expand:!0}),o("h2",{children:"Padding"}),d("p",{children:["The ",o("code",{children:"pad"})," and related utility classes work in the same way but add padding inside the element."]}),o(I,{html:nP,caption:"Padding",expand:!0}),d("p",{children:["One important thing to note is that padding is applied in multiples of 0.25",o("b",{children:"em"})," whereas margins use 0.25",o("b",{children:"rem"}),".  This is because you usually want spacing around elements to be consistent (which rem provides) but padding inside an element should be based on the text size (which em provides)."]}),o(I,{html:tP,caption:"Pad Sizes",expand:!0})]}),oP=Object.freeze(Object.defineProperty({__proto__:null,default:rP},Symbol.toStringTag,{value:"Module"})),aP=`<div class="flex gap-4">
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
`,lP=`<div class="flex gap-4">
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
`,iP=`<table class="wide shaded lined">
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
`,sP=`// redefine $splits to include what you want...
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
@import "@abw/badger-css/styles/badger.scss";`,dP=[["2","One half","50%"],["3","One third","33.33333333%"],["2-3","Two thirds","66.66666666%"],["4","One quarter","25%"],["3-4","Three quarters","75%"],["5","One fifth","20%"],["2-5","Two fifths","40%"],["3-5","Three fifths","60%"],["4-5","Four fifths","80%"],["6","One sixth","16.66666666%"],["5-6","Five sixth","83.33333333%"],["7","One seventh","14.28571429%"],["2-7","Two sevenths","28.57142858%"],["3-7","Three sevenths","42.85714287%"],["4-7","Four sevenths","57.14285716%"],["5-7","Five sevenths","71.42857145%"],["6-7","Six sevenths","85.71428574%"],["8","One eighth","12.5%"],["3-8","Three eighths","37.5%"],["5-8","Five eighths","62.5%"],["7-8","Seven eighths","87.5%"],["9","One ninth","11.11111111%"],["2-9","Two ninths","22.22222222%"],["4-9","Four ninths","44.44444444%"],["5-9","Five ninths","55.55555555%"],["7-9","Seven ninths","77.77777777%"],["8-9","Eight ninths","88.88888888%"],["10","One tenth","10%"],["3-10","Three tenths","30%"],["7-10","Seven tenths","70%"],["9-10","Nine tenths","90%"],["11","One eleventh","9.090909090%"],["12","One twelfth","8.333333333%"],["13","One thirteenth","7.692307692%"],["14","One fourteenth","7.142857142%"],["15","One fifteenth","6.666666666%"],["16","One sixteenth","6.25%"]],cP=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Split"}),o("h2",{children:"Evenly Split Columns"}),d(de,{children:[d("p",{children:["The ",o("code",{children:"split-N"})," classes can be used to set the width of an element to a fraction of the width of the parent container. For example, ",o("code",{children:"split-2"})," sets the width to one half,"," ",o("code",{children:"split-3"})," to one third, and so on.  The value for"," ",o("code",{children:"N"})," can be anything from 2 to 16."]}),d("p",{children:["They can be useful in conjunction with the"," ",o(le,{to:"/utilities/flexbox",text:"flexbox"})," classes to constrain columns to be a particular width.  Otherwise the flexbox layout engine will try to expand the width of columns that have more content."]})]}),o(I,{html:aP,caption:"Even Splits"}),o("h2",{children:"Unevenly Split Columns"}),d("p",{children:["The ",o("code",{children:"split-N-M"})," classes can be used to create uneven splits. For example, ",o("code",{children:"split-2-5"})," creates a columns that is two fifths of the width."]}),d("p",{children:["These are defined for all uneven splits up to tenths (e.g. there's a ",o("code",{children:"split-3-10"})," class for three tenths, but no ",o("code",{children:"split-3-11"})," ","for three elevenths).  Not that redundant classes are not included. For example, there's no ",o("code",{children:"split-3-6"})," class because it's one half or ",o("code",{children:"split-2"}),"."]}),o(I,{html:lP,caption:"Uneven Splits"}),o("h2",{children:"Tables"}),d("p",{children:["The ",o("code",{children:"split-*"})," classes also work with table columns. This can be useful to prevent the layout engine from expanding columns to fit the content.  It's especially useful if you have multiple tables and you want the columns to be the same width in each of the tables."]}),o(I,{html:iP,caption:"Table Splits"}),o("h2",{children:"Split Classes"}),d(de,{children:[o("p",{children:"The CSS classes and their corresponding widths are listed below."}),d("p",{children:["You can set the ",o("code",{children:"$splits"})," SASS variable if you want to define a different set of splits."]})]}),o(Zt,{code:sP,caption:"Custom Splits",language:"scss",expand:!0,children:d("table",{className:"brand celled striped properties small wide mar-b-2",children:[o("thead",{children:d("tr",{children:[o("th",{children:"Class"}),o("th",{children:"Size"}),o("th",{children:"%age Width"})]})}),o("tbody",{children:dP.map(e=>d("tr",{children:[o("td",{children:d("code",{children:["split-",e[0]]})}),o("td",{children:e[1]}),o("td",{children:e[2]})]},e[0]))})]})})]}),uP=Object.freeze(Object.defineProperty({__proto__:null,default:cP},Symbol.toStringTag,{value:"Module"})),hP=`<h4 class="font-mono smaller">stack-widescreen</h4>
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
`,pP=`<h4 class="font-mono smaller">stack-widescreen</h4>
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
`,fP=`// define your own breakpoints...
$breakpoints: (
  'mobile':     30rem,
  'tablet':     50rem,
  'laptop':     70rem,
  'desktop':    80rem,
  'widescreen': 90rem
) !default;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";`,gP={mobile:30,tablet:50,laptop:70,desktop:80,widescreen:90},vP=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Stacking Split Columns"}),d("p",{children:["One of the problems with creating columns using"," ",o(le,{to:"/utilities/grid",text:"grid"}),","," ",o(le,{to:"/utilities/flexbox",text:"flexbox"})," ","and ",o(le,{to:"/utilities/split",text:"split"})," is that sometimes a user's screen size isn't large enough to accommodate them."]}),d("p",{children:["The ",o("code",{children:"stack-*"})," classes can be used to stack columns when the screen size is narrower than a threshold breakpoint. These are ",o("code",{children:"stack-mobile"}),", ",o("code",{children:"stack-tablet"}),","," ",o("code",{children:"stack-laptop"}),", ",o("code",{children:"stack-desktop"})," and"," ",o("code",{children:"stack-widescreen"}),"."]}),o("h2",{children:"Grid Stacking"}),d(de,{children:[d("p",{children:["This example shows how adding a ",o("code",{children:"stack-*"})," class to an element that has one of the ",o("code",{children:"grid-*"})," classes will cause the columns to be stacked at different breakpoints."]}),o(Mo,{title:"Try it out!",children:"Try resizing your browser window and see how the grid elements below get stacked."})]}),o(I,{html:hP,caption:"Stacking Grids"}),o("h2",{children:"Flexbox Stacking"}),d("p",{children:["This example shows the same thing for ",o("code",{children:"flex"})," containers."]}),o(I,{html:pP,caption:"Stacking Flexbox"}),o("h2",{children:"Breakpoint Names"}),d(de,{children:[o("p",{children:"The breakpoint names and their corresponding widths in rems and pixels (assuming 1rem = 16px) are shown below."}),d("p",{children:["You can set the ",o("code",{children:"$breakpoints"})," SASS variable if you want to define a different set of breakpoints."]})]}),o(Zt,{code:fP,caption:"Custom Breakpoints",language:"scss",expand:!0,children:d("table",{className:"brand celled striped properties small wide mar-b-2",children:[o("thead",{children:d("tr",{children:[o("th",{children:"Class"}),o("th",{children:"Rems"}),o("th",{children:"Pixels"})]})}),o("tbody",{children:Object.entries(gP).map(([e,n])=>d("tr",{children:[o("td",{children:o("code",{children:e})}),d("td",{children:[n,"rem"]}),d("td",{children:[n*16,"px"]})]},e))})]})})]}),mP=Object.freeze(Object.defineProperty({__proto__:null,default:vP},Symbol.toStringTag,{value:"Module"})),bP=`<div class="surface border pad-2">
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
`,yP=`<div class="surface-1 border pad-2 mar-b-2">
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
`,wP=`<div class="grid-3 gap-2 smallish">
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
`,xP=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Surfaces"}),d("p",{children:['When building UI components it can be useful to think in terms of "surfaces", with each surface getting progressively "closer" to the user and demanding their closer attention. You may want to combine these with the ',o("code",{children:"shadow-N"})," classes to further emphasise the effect."]}),o("p",{children:"As a general rule surfaces that are in the foreground should be lighter than those in the background.  Note that this applies to dark themes as well as light themes."}),o("h2",{children:"Surface Classes"}),d("p",{children:["Use the ",o("code",{children:"surface-1"}),", ",o("code",{children:"surface-2"}),","," ",o("code",{children:"surface-3"}),", ",o("code",{children:"surface-4"})," and"," ",o("code",{children:"surface-5"})," CSS classes to define elements with appropriate background and text colors to achieve this effect.  The lower numbers are meant to be further in the background with higher numbers being closer to the foreground."]}),o(I,{html:bP,caption:"Surfaces",expand:!0}),d("p",{children:["The ",o("code",{children:"surface"})," class is a special case being used here to apply a background color for the examples.  When using a light theme this"," ","is ",o("code",{children:"white"})," and for a dark theme it is ",o("code",{children:"black"}),"."]}),d("p",{children:["The styles are defined using CSS variables for the foreground, background and border colors, e.g. ",o("code",{children:"--color"}),", ",o("code",{children:"--background-color"})," ","and ",o("code",{children:"--border-color"}),". In turn these are defined using the ",o("code",{children:"grey"})," color range depending on the color theme. For example, the ",o("code",{children:"--background-color"}),"for ",o("code",{children:"--surface-3"}),"is defined to be ",o("code",{children:"--color-90"})," by default, and ",o("code",{children:"--color-10"})," when the dark theme is in effect."]}),o("h2",{children:"Surfaces With Borders"}),d("p",{children:["Add the ",o("code",{children:"border"})," CSS class to add a border around a surface. You can also add the ",o(le,{to:"/utilities/borders",children:o("code",{children:"bdr-N"})})," classes to set the border radius."]}),o(I,{html:yP,caption:"Surface Borders",expand:!0}),o("h2",{children:"Colored Surfaces"}),o("p",{children:"Add any of the color classes to get different colored surfaces."}),o(I,{html:wP,caption:"Color Surfaces"})]}),kP=Object.freeze(Object.defineProperty({__proto__:null,default:xP},Symbol.toStringTag,{value:"Module"})),CP=`<div class="flex gap-2 mar-b-2">
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
`,SP=`<div class="flow">
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
</div>`,TP=`<p class="large">
  Ian, can I have a word with you for a minute?
</p>
<p>
  Uh, a couple of
  problems with the... arrangements backstage... Well, uh.. Well, no,
  there's some problems here, I don't even know where to start, alright?
</p>
<p>
  This, uh.. No, no, no, no this... look, look, look, there's a little
  problem with the... look this, this miniature bread. It's like...
  I've been working with this now for about half an hour. I can't
  figure out... Let's say I want a bite, right, you've got this...
</p>
<p>
  You'd like bigger bread?
</p>
<p>
  Exactly! I don't understand how...
</p>
<p>
  You could fold this though...
</p>
<p>
  Well, no then it's half the size.
</p>
<p>
  Not the bread, you could fold the meat.
</p>
<p>
  Yeah, but then it, then it breaks up, breaks apart like this.
</p>
<p>
  No, no, no, you put it on the bread like this, you see...
</p>
<p>
  But then, if you keep folding it, it keeps breaking... And then you...
  everything has to be folded, and then it's this, and I don't want this
  I want large bread so that I can put this... so then it's like this,
  this does not work because then... it's all... Would you be seen holding
  this?
</p>
`,_P=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Typography"}),o("h2",{children:"Headings"}),d("p",{children:["Headings have ",o("code",{children:"text-wrap: balance"})," set to balance the length of long lines.  The ",o("code",{children:"line-height"})," is reduced to ",o("code",{children:"1.3"}),"."]}),d("p",{children:["Margins and padding are removed by default.  You can add them in yourself, either using the ",o(le,{to:"/utilities/spacing",text:"spacing utiltiy classes"})," ","or globally to match your site style. Or use something like the",o("code",{children:"flow"})," class (see below) to add margins between elements where appropriate."]}),o(I,{html:CP,caption:"Headings"}),o("h2",{children:"Paragraphs"}),o(I,{html:TP,caption:"Paragraphs"}),o("h2",{children:"Flow"}),d("p",{children:["Use the ",o("code",{children:"flow"})," class on a container to add spacing between block elements.  Thanks to"," ",o("a",{href:"https://andy-bell.co.uk/my-favourite-3-lines-of-css/",children:"Andy Bell"})," ","for this one."]}),o(I,{html:SP,caption:"Flow"})]}),LP=Object.freeze(Object.defineProperty({__proto__:null,default:_P},Symbol.toStringTag,{value:"Module"})),$P=`<div class="grid-1 gap-4">
  <input type="text" value="A wide input"/>
  <button class="blue wide">
    A wide button
  </button>
</div>`,NP=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,EP=`<div class="fgc-100 grid gap-2 scroll-x">
  <style>
    .wb {
      padding: 0.25rem;
      font-size: var(--size-smaller);
      background-color: var(--color-50);
      border-right: 5px solid var(--color-40);
    }
  </style>
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
</div>`,IP=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,MP=`// define your own range of rem widths...
$rem-widths:
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 25, 30,
  35, 40, 45, 50, 60, 70, 80, 90, 100 !default;

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,RP=[2,4,6,8,10,12,14,16,18,20,25,30,35,40,45,50,60,70,80,90,100],PP=()=>d("div",{className:"prose flow",children:[o("h1",{children:"Widths"}),o("h2",{children:"Wide"}),d("p",{children:["Use the ",o("code",{children:"wide"})," CSS class to set an inline element to expand to the full width of the container."]}),o(I,{html:$P,caption:"Wide",expand:!0}),o("h2",{children:"Width Classes"}),d(de,{children:[d("p",{children:["The ",o("code",{children:"width-Nrem"})," classes can be used to set the width of an element to a number of rem units."]}),d("p",{children:["The values for ",o("code",{children:"N"})," can be",o("code",{children:"2"}),", ",o("code",{children:"4"}),","," ",o("code",{children:"6"}),", ",o("code",{children:"8"}),", ",o("code",{children:"10"}),", ",o("code",{children:"12"}),","," ",o("code",{children:"14"}),", ",o("code",{children:"16"}),", ",o("code",{children:"18"}),", ",o("code",{children:"20"}),","," ",o("code",{children:"25"}),", ",o("code",{children:"30"}),", ",o("code",{children:"35"}),", ",o("code",{children:"40"}),","," ",o("code",{children:"45"}),", ",o("code",{children:"50"}),", ",o("code",{children:"60"}),","," ",o("code",{children:"70"}),", ",o("code",{children:"80"}),", ",o("code",{children:"90"})," or ",o("code",{children:"100"}),"."]})]}),o(I,{html:NP,caption:"Widths",expand:!0}),o("h2",{children:"Pixel Width Classes"}),d("p",{children:["If you prefer to think in pixels, you can use the corresponding"," ",o("code",{children:"width-Npx"})," classes instead."]}),o(I,{html:EP,caption:"Widths in Px",expand:!0}),o("h2",{children:"Max Width Classes"}),d(de,{children:[d("p",{children:["The ",o("code",{children:"max-width-Nrem"})," classes can be used to set the maximum width of an element to a number of rem units.  In this case the width of the element will be constrained to the width of the parent element. You can also use the corresponding ",o("code",{children:"max-width-Npx"})," classes if you prefer to think in pixels."]}),d("p",{children:["The ",o("code",{children:"width-*"})," and ",o("code",{children:"max-width-*"})," classes work by using the ",o("code",{children:"--width"})," custom property which is set to the appropriate number of rem units based on the ",o("code",{children:"-Nrem"})," ","or ",o("code",{children:"-Npx"})," suffix."]})]}),o(I,{html:IP,caption:"Widths",expand:!0}),o("h2",{children:"Rem/Pixel Sizes"}),d(de,{children:[o("p",{children:"The corresponding pixel widths (assuming 1rem = 16px) for each of the classes are shown below."}),d("p",{children:["You can set the ",o("code",{children:"$rem-widths"})," SASS variable if you want to define a different set of width classes."]})]}),o(Zt,{code:MP,caption:"Custom Sizes",language:"scss",expand:!0,children:d("table",{className:"brand celled striped properties small wide mar-b-2",children:[o("thead",{children:d("tr",{children:[o("th",{children:"Rem Class"}),o("th",{children:"Pixel Class"}),o("th",{children:"Rems"}),o("th",{children:"Pixels"})]})}),o("tbody",{children:RP.map(e=>d("tr",{children:[o("td",{children:d("code",{children:["width-",e,"rem"]})}),o("td",{children:d("code",{children:["width-",e*16,"px"]})}),o("td",{children:e}),o("td",{children:e*16})]},e))})]})})]}),AP=Object.freeze(Object.defineProperty({__proto__:null,default:PP},Symbol.toStringTag,{value:"Module"})),I5=({path:e,onClick:n,width:t=512,height:r=512,style:a,className:l="night-and-day--icon",fill:i="currentColor"})=>o("svg",{"aria-hidden":"true",focusable:"false",className:l,style:a,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${t} ${r}`,onClick:n,children:o("path",{d:e,fill:i})}),FP=e=>o(I5,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),M5=({Icon:e,caption:n,onClick:t,iconClass:r,iconStyle:a,captionStyle:l,className:i="night-and-day--switcher",captionClass:s="night-and-day--caption",style:u={display:"inline-block"}})=>d("div",{className:i,onClick:t,style:u,children:[o(e,{style:a,className:r}),!!n&&o("div",{className:s,style:l,children:n})]}),OP=e=>{const{setDark:n}=xi();return o(M5,{Icon:FP,onClick:n,...e})},zP=e=>o(I5,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),DP=e=>{const{setLight:n}=xi();return o(M5,{Icon:zP,onClick:n,...e})},BP=({sunrise:e={},nightfall:n={}})=>{const{isLight:t,setLight:r,setDark:a}=xi();return t?o(DP,{onClick:a,...e}):o(OP,{onClick:r,...n})},R5=D.createContext(),xi=()=>D.useContext(R5),is="dark",eu="light",P5="(prefers-color-scheme: dark)",jP=()=>{var e;return(e=window==null?void 0:window.matchMedia)==null?void 0:e.call(window,P5).matches},na=window==null?void 0:window.localStorage,UP=e=>e.split(" "),dg=(e,n="")=>`${e} ${n}`,HP=({storageKey:e,defaultVariant:n,children:t})=>{const r=e?na==null?void 0:na.getItem(e):null,[a,l=""]=r?UP(r):[jP(),null],[i,s]=D.useState(a===is),[u,p]=D.useState(l||n),v=N=>{s(N),e&&na&&na.setItem(e,dg(N?is:eu,u))},y=N=>{p(N),e&&na&&na.setItem(e,dg(i?is:eu,N))},k=N=>v(N.matches);D.useEffect(()=>{if(window&&window.matchMedia){const N=window.matchMedia(P5);return N.addEventListener("change",k),()=>N==null?void 0:N.removeEventListener("change",k)}},[]);const E={isDark:i,isLight:!i,setDark:()=>v(!0),setLight:()=>v(!1),setIsDark:s,toggleTheme:()=>v(!i),theme:i?is:eu,variant:u,setVariant:y};return o(R5.Provider,{value:E,children:t})},WP=e=>D.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},D.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z",fill:"currentColor"})),cg="sidebar",VP="no-sidebar",A5="0.2.3",F5="2023-11-05",ug="2018",nu=F5.match(/^(\d+)/)[1],GP=nu===ug?nu:`${ug} - ${nu}`,YP=()=>{const{variant:e,setVariant:n}=xi();return o("header",{children:d("nav",{children:[d("div",{children:[o(Fa,{name:"bars",className:"toggle-sidebar action",onClick:()=>n(e===cg?VP:cg)}),o(le,{to:"/",className:"home mar-l-2",text:"Badger-CSS"}),d("span",{className:"small mar-l-2",children:["v",A5]})]}),d("div",{children:[o("a",{href:"https://github.com/abw/badger-css",children:o(WP,{className:"night-and-day--icon mar-r-2"})}),o(BP,{})]})]})})},ml=({title:e,items:n})=>d("div",{className:"menu",children:[o("h4",{children:e}),n.map(t=>o(le,{...t},t.to))]}),qP=[{to:"/demo",text:"Demo"},{to:"/getting-started/installation",text:"Installation"},{to:"/getting-started/good",text:"What's good about it?"},{to:"/getting-started/bad",text:"What's wrong with it?"}],ZP=[{to:"/colors/ranges",text:"Color Ranges"},{to:"/colors/brand",text:"Brand Colors"},{to:"/colors/variables",text:"Color Variables"},{to:"/colors/utilities",text:"Color Utilities"},{to:"/colors/palette",text:"Custom Palette"}],QP=[{to:"/utilities/",text:"Introduction"},{to:"/utilities/alignment",text:"Alignment"},{to:"/utilities/borders",text:"Borders"},{to:"/utilities/display",text:"Display"},{to:"/utilities/flexbox",text:"Flexbox"},{to:"/utilities/fonts",text:"Fonts"},{to:"/utilities/font-styles",text:"Font Styles"},{to:"/utilities/font-weights",text:"Font Weights"},{to:"/utilities/grid",text:"Grid"},{to:"/utilities/position",text:"Position"},{to:"/utilities/scrolling",text:"Scrolling"},{to:"/utilities/shadows",text:"Shadows"},{to:"/utilities/sizes",text:"Text Sizes"},{to:"/utilities/spacing",text:"Spacing"},{to:"/utilities/split",text:"Splits"},{to:"/utilities/stack",text:"Stacking"},{to:"/utilities/surfaces",text:"Surfaces"},{to:"/utilities/typography",text:"Typography"},{to:"/utilities/widths",text:"Widths"}],KP=[{to:"/forms/",text:"Introduction"},{to:"/forms/buttons",text:"Buttons"},{to:"/forms/checkboxes",text:"Checkboxes"},{to:"/forms/radio-buttons",text:"Radio Buttons"},{to:"/forms/select",text:"Select Inputs"},{to:"/forms/text",text:"Text Inputs"},{to:"/forms/textarea",text:"Text Area Inputs"},{to:"/forms/input",text:"Fake Inputs"},{to:"/forms/multi-inputs",text:"Multiple Inputs"},{to:"/forms/field",text:"Form Fields"},{to:"/forms/prefix-suffix",text:"Prefix and Suffix"},{to:"/forms/fieldset",text:"Form Field Sets"},{to:"/forms/styling",text:"Form Styling"}],XP=[{to:"/components/alerts",text:"Alerts"},{to:"/components/details",text:"Details"},{to:"/components/dialog",text:"Dialog"},{to:"/components/dropdown",text:"Dropdown"},{to:"/components/icons",text:"SVG Icons"},{to:"/components/overlay",text:"Overlay"},{to:"/components/tables",text:"Tables"},{to:"/components/tooltips",text:"Tooltips"}],JP=()=>d("div",{children:[o(ml,{title:"Getting Started",items:qP}),o(ml,{title:"Colors",items:ZP}),o(ml,{title:"Utilities",items:QP}),o(ml,{title:"Forms",items:KP}),o(ml,{title:"Components",items:XP})]}),eA=()=>o("footer",{children:d("div",{className:"flex space",children:[d("div",{children:["© Copyright ",GP," Andy Wardley"]}),d("div",{children:["Version ",A5," ",F5]})]})});function nA(){const{pathname:e}=Ua();return D.useEffect(()=>tA(document.getElementById("content")),[e]),null}function tA(e){e==null||e.scrollTo({top:0,left:0})}const rA=()=>{const{theme:e,variant:n}=xi();return d("div",{id:"site","data-sidebar":n,"data-theme":e,children:[o(YP,{}),d("div",{id:"app",children:[o(nA,{}),o("aside",{children:o(JP,{})}),o("main",{id:"content",children:o(JS,{})})]}),o(eA,{})]})},oA=Object.assign({"../pages/colors/brand.jsx":gT,"../pages/colors/greyscale.jsx":ET,"../pages/colors/palette.jsx":OT,"../pages/colors/ranges.jsx":UT,"../pages/colors/utilities.jsx":JT,"../pages/colors/variables.jsx":n_,"../pages/components/alerts.jsx":v_,"../pages/components/details.jsx":__,"../pages/components/dialog.jsx":P_,"../pages/components/dropdown.jsx":D_,"../pages/components/icons.jsx":G_,"../pages/components/overlay.jsx":X_,"../pages/components/tables.jsx":uL,"../pages/components/tooltips.jsx":yL,"../pages/decoder.jsx":TL,"../pages/demo/index.jsx":zL,"../pages/forms/buttons.jsx":KL,"../pages/forms/checkboxes.jsx":o$,"../pages/forms/field.jsx":m$,"../pages/forms/fieldset.jsx":w$,"../pages/forms/index.jsx":eI,"../pages/forms/input.jsx":lI,"../pages/forms/multi-inputs.jsx":cI,"../pages/forms/prefix-suffix.jsx":TI,"../pages/forms/radio-buttons.jsx":II,"../pages/forms/select.jsx":jI,"../pages/forms/styling.jsx":WI,"../pages/forms/text.jsx":KI,"../pages/forms/textarea.jsx":rM,"../pages/getting-started/bad.jsx":lM,"../pages/getting-started/good.jsx":hM,"../pages/getting-started/installation.jsx":yM,"../pages/index.jsx":kM,"../pages/utilities/alignment.jsx":LM,"../pages/utilities/borders.jsx":jM,"../pages/utilities/display.jsx":WM,"../pages/utilities/flexbox.jsx":oR,"../pages/utilities/font-styles.jsx":iR,"../pages/utilities/font-weights.jsx":pR,"../pages/utilities/fonts.jsx":wR,"../pages/utilities/grid.jsx":MR,"../pages/utilities/index.jsx":PR,"../pages/utilities/position.jsx":OR,"../pages/utilities/scrolling.jsx":jR,"../pages/utilities/shadows.jsx":VR,"../pages/utilities/sizes.jsx":KR,"../pages/utilities/spacing.jsx":oP,"../pages/utilities/split.jsx":uP,"../pages/utilities/stack.jsx":mP,"../pages/utilities/surfaces.jsx":kP,"../pages/utilities/typography.jsx":LP,"../pages/utilities/widths.jsx":AP}),aA=Object.entries(oA).map(([e,n])=>({path:e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,""),Component:n.default})),lA=lT([{path:"/",element:o(rA,{}),children:aA}],{basename:"/badger-css/"});tu.createRoot(document.getElementById("root")).render(o(En.StrictMode,{children:o(HP,{storageKey:"theme",children:o(KS,{router:lA})})}));
