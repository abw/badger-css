function d7(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var Dl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var f3={exports:{}},pc={},p3={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var di=Symbol.for("react.element"),u7=Symbol.for("react.portal"),h7=Symbol.for("react.fragment"),f7=Symbol.for("react.strict_mode"),p7=Symbol.for("react.profiler"),g7=Symbol.for("react.provider"),m7=Symbol.for("react.context"),v7=Symbol.for("react.forward_ref"),y7=Symbol.for("react.suspense"),b7=Symbol.for("react.memo"),w7=Symbol.for("react.lazy"),pp=Symbol.iterator;function x7(e){return e===null||typeof e!="object"?null:(e=pp&&e[pp]||e["@@iterator"],typeof e=="function"?e:null)}var g3={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m3=Object.assign,v3={};function Ao(e,t,n){this.props=e,this.context=t,this.refs=v3,this.updater=n||g3}Ao.prototype.isReactComponent={};Ao.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ao.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function y3(){}y3.prototype=Ao.prototype;function mh(e,t,n){this.props=e,this.context=t,this.refs=v3,this.updater=n||g3}var vh=mh.prototype=new y3;vh.constructor=mh;m3(vh,Ao.prototype);vh.isPureReactComponent=!0;var gp=Array.isArray,b3=Object.prototype.hasOwnProperty,yh={current:null},w3={key:!0,ref:!0,__self:!0,__source:!0};function x3(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)b3.call(t,r)&&!w3.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var d=Array(s),f=0;f<s;f++)d[f]=arguments[f+2];o.children=d}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:di,type:e,key:l,ref:i,props:o,_owner:yh.current}}function C7(e,t){return{$$typeof:di,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bh(e){return typeof e=="object"&&e!==null&&e.$$typeof===di}function S7(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mp=/\/+/g;function md(e,t){return typeof e=="object"&&e!==null&&e.key!=null?S7(""+e.key):t.toString(36)}function ss(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case di:case u7:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+md(i,0):r,gp(o)?(n="",e!=null&&(n=e.replace(mp,"$&/")+"/"),ss(o,t,n,"",function(f){return f})):o!=null&&(bh(o)&&(o=C7(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(mp,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",gp(e))for(var s=0;s<e.length;s++){l=e[s];var d=r+md(l,s);i+=ss(l,t,n,d,o)}else if(d=x7(e),typeof d=="function")for(e=d.call(e),s=0;!(l=e.next()).done;)l=l.value,d=r+md(l,s++),i+=ss(l,t,n,d,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Oi(e,t,n){if(e==null)return e;var r=[],o=0;return ss(e,r,"","",function(l){return t.call(n,l,o++)}),r}function k7(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ht={current:null},cs={transition:null},_7={ReactCurrentDispatcher:Ht,ReactCurrentBatchConfig:cs,ReactCurrentOwner:yh};ke.Children={map:Oi,forEach:function(e,t,n){Oi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Oi(e,function(){t++}),t},toArray:function(e){return Oi(e,function(t){return t})||[]},only:function(e){if(!bh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ke.Component=Ao;ke.Fragment=h7;ke.Profiler=p7;ke.PureComponent=mh;ke.StrictMode=f7;ke.Suspense=y7;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_7;ke.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=m3({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=yh.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(d in t)b3.call(t,d)&&!w3.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&s!==void 0?s[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){s=Array(d);for(var f=0;f<d;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:di,type:e.type,key:o,ref:l,props:r,_owner:i}};ke.createContext=function(e){return e={$$typeof:m7,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:g7,_context:e},e.Consumer=e};ke.createElement=x3;ke.createFactory=function(e){var t=x3.bind(null,e);return t.type=e,t};ke.createRef=function(){return{current:null}};ke.forwardRef=function(e){return{$$typeof:v7,render:e}};ke.isValidElement=bh;ke.lazy=function(e){return{$$typeof:w7,_payload:{_status:-1,_result:e},_init:k7}};ke.memo=function(e,t){return{$$typeof:b7,type:e,compare:t===void 0?null:t}};ke.startTransition=function(e){var t=cs.transition;cs.transition={};try{e()}finally{cs.transition=t}};ke.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ke.useCallback=function(e,t){return Ht.current.useCallback(e,t)};ke.useContext=function(e){return Ht.current.useContext(e)};ke.useDebugValue=function(){};ke.useDeferredValue=function(e){return Ht.current.useDeferredValue(e)};ke.useEffect=function(e,t){return Ht.current.useEffect(e,t)};ke.useId=function(){return Ht.current.useId()};ke.useImperativeHandle=function(e,t,n){return Ht.current.useImperativeHandle(e,t,n)};ke.useInsertionEffect=function(e,t){return Ht.current.useInsertionEffect(e,t)};ke.useLayoutEffect=function(e,t){return Ht.current.useLayoutEffect(e,t)};ke.useMemo=function(e,t){return Ht.current.useMemo(e,t)};ke.useReducer=function(e,t,n){return Ht.current.useReducer(e,t,n)};ke.useRef=function(e){return Ht.current.useRef(e)};ke.useState=function(e){return Ht.current.useState(e)};ke.useSyncExternalStore=function(e,t,n){return Ht.current.useSyncExternalStore(e,t,n)};ke.useTransition=function(){return Ht.current.useTransition()};ke.version="18.2.0";p3.exports=ke;var j=p3.exports;const $t=Kn(j),vp=d7({__proto__:null,default:$t},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T7=j,L7=Symbol.for("react.element"),$7=Symbol.for("react.fragment"),E7=Object.prototype.hasOwnProperty,N7=T7.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I7={key:!0,ref:!0,__self:!0,__source:!0};function C3(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)E7.call(t,r)&&!I7.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:L7,type:e,key:l,ref:i,props:o,_owner:N7.current}}pc.Fragment=$7;pc.jsx=C3;pc.jsxs=C3;f3.exports=pc;var wh=f3.exports;const Mn=wh.Fragment,a=wh.jsx,u=wh.jsxs;var ru={},S3={exports:{}},mn={},k3={exports:{}},_3={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(U,q){var J=U.length;U.push(q);e:for(;0<J;){var oe=J-1>>>1,fe=U[oe];if(0<o(fe,q))U[oe]=q,U[J]=fe,J=oe;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var q=U[0],J=U.pop();if(J!==q){U[0]=J;e:for(var oe=0,fe=U.length,Bt=fe>>>1;oe<Bt;){var pe=2*(oe+1)-1,tt=U[pe],Ze=pe+1,ft=U[Ze];if(0>o(tt,J))Ze<fe&&0>o(ft,tt)?(U[oe]=ft,U[Ze]=J,oe=Ze):(U[oe]=tt,U[pe]=J,oe=pe);else if(Ze<fe&&0>o(ft,J))U[oe]=ft,U[Ze]=J,oe=Ze;else break e}}return q}function o(U,q){var J=U.sortIndex-q.sortIndex;return J!==0?J:U.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var d=[],f=[],m=1,b=null,C=3,N=!1,E=!1,S=!1,I=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(U){for(var q=n(f);q!==null;){if(q.callback===null)r(f);else if(q.startTime<=U)r(f),q.sortIndex=q.expirationTime,t(d,q);else break;q=n(f)}}function v(U){if(S=!1,y(U),!E)if(n(d)!==null)E=!0,Be(L);else{var q=n(f);q!==null&&Ye(v,q.startTime-U)}}function L(U,q){E=!1,S&&(S=!1,w(O),O=-1),N=!0;var J=C;try{for(y(q),b=n(d);b!==null&&(!(b.expirationTime>q)||U&&!he());){var oe=b.callback;if(typeof oe=="function"){b.callback=null,C=b.priorityLevel;var fe=oe(b.expirationTime<=q);q=e.unstable_now(),typeof fe=="function"?b.callback=fe:b===n(d)&&r(d),y(q)}else r(d);b=n(d)}if(b!==null)var Bt=!0;else{var pe=n(f);pe!==null&&Ye(v,pe.startTime-q),Bt=!1}return Bt}finally{b=null,C=J,N=!1}}var _=!1,P=null,O=-1,z=5,Z=-1;function he(){return!(e.unstable_now()-Z<z)}function se(){if(P!==null){var U=e.unstable_now();Z=U;var q=!0;try{q=P(!0,U)}finally{q?ze():(_=!1,P=null)}}else _=!1}var ze;if(typeof g=="function")ze=function(){g(se)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,Ge=ot.port2;ot.port1.onmessage=se,ze=function(){Ge.postMessage(null)}}else ze=function(){I(se,0)};function Be(U){P=U,_||(_=!0,ze())}function Ye(U,q){O=I(function(){U(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_continueExecution=function(){E||N||(E=!0,Be(L))},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return C},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(U){switch(C){case 1:case 2:case 3:var q=3;break;default:q=C}var J=C;C=q;try{return U()}finally{C=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(U,q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var J=C;C=U;try{return q()}finally{C=J}},e.unstable_scheduleCallback=function(U,q,J){var oe=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?oe+J:oe):J=oe,U){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=J+fe,U={id:m++,callback:q,priorityLevel:U,startTime:J,expirationTime:fe,sortIndex:-1},J>oe?(U.sortIndex=J,t(f,U),n(d)===null&&U===n(f)&&(S?(w(O),O=-1):S=!0,Ye(v,J-oe))):(U.sortIndex=fe,t(d,U),E||N||(E=!0,Be(L))),U},e.unstable_shouldYield=he,e.unstable_wrapCallback=function(U){var q=C;return function(){var J=C;C=q;try{return U.apply(this,arguments)}finally{C=J}}}})(_3);k3.exports=_3;var M7=k3.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T3=j,gn=M7;function Y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var L3=new Set,Bl={};function Ia(e,t){To(e,t),To(e+"Capture",t)}function To(e,t){for(Bl[e]=t,e=0;e<t.length;e++)L3.add(t[e])}var hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),au=Object.prototype.hasOwnProperty,R7=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yp={},bp={};function P7(e){return au.call(bp,e)?!0:au.call(yp,e)?!1:R7.test(e)?bp[e]=!0:(yp[e]=!0,!1)}function A7(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F7(e,t,n,r){if(t===null||typeof t>"u"||A7(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Vt(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){It[e]=new Vt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];It[t]=new Vt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){It[e]=new Vt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){It[e]=new Vt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){It[e]=new Vt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){It[e]=new Vt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){It[e]=new Vt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){It[e]=new Vt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){It[e]=new Vt(e,5,!1,e.toLowerCase(),null,!1,!1)});var xh=/[\-:]([a-z])/g;function Ch(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xh,Ch);It[t]=new Vt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xh,Ch);It[t]=new Vt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xh,Ch);It[t]=new Vt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){It[e]=new Vt(e,1,!1,e.toLowerCase(),null,!1,!1)});It.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){It[e]=new Vt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Sh(e,t,n,r){var o=It.hasOwnProperty(t)?It[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(F7(t,n,o,r)&&(n=null),r||o===null?P7(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yr=T3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Di=Symbol.for("react.element"),no=Symbol.for("react.portal"),ro=Symbol.for("react.fragment"),kh=Symbol.for("react.strict_mode"),ou=Symbol.for("react.profiler"),$3=Symbol.for("react.provider"),E3=Symbol.for("react.context"),_h=Symbol.for("react.forward_ref"),lu=Symbol.for("react.suspense"),iu=Symbol.for("react.suspense_list"),Th=Symbol.for("react.memo"),$r=Symbol.for("react.lazy"),N3=Symbol.for("react.offscreen"),wp=Symbol.iterator;function al(e){return e===null||typeof e!="object"?null:(e=wp&&e[wp]||e["@@iterator"],typeof e=="function"?e:null)}var at=Object.assign,vd;function ml(e){if(vd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);vd=t&&t[1]||""}return`
`+vd+e}var yd=!1;function bd(e,t){if(!e||yd)return"";yd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var o=f.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var d=`
`+o[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=s);break}}}finally{yd=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ml(e):""}function O7(e){switch(e.tag){case 5:return ml(e.type);case 16:return ml("Lazy");case 13:return ml("Suspense");case 19:return ml("SuspenseList");case 0:case 2:case 15:return e=bd(e.type,!1),e;case 11:return e=bd(e.type.render,!1),e;case 1:return e=bd(e.type,!0),e;default:return""}}function su(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ro:return"Fragment";case no:return"Portal";case ou:return"Profiler";case kh:return"StrictMode";case lu:return"Suspense";case iu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case E3:return(e.displayName||"Context")+".Consumer";case $3:return(e._context.displayName||"Context")+".Provider";case _h:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Th:return t=e.displayName||null,t!==null?t:su(e.type)||"Memo";case $r:t=e._payload,e=e._init;try{return su(e(t))}catch{}}return null}function D7(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return su(t);case 8:return t===kh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Hr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function I3(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function B7(e){var t=I3(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bi(e){e._valueTracker||(e._valueTracker=B7(e))}function M3(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=I3(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ms(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cu(e,t){var n=t.checked;return at({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Hr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function R3(e,t){t=t.checked,t!=null&&Sh(e,"checked",t,!1)}function du(e,t){R3(e,t);var n=Hr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?uu(e,t.type,n):t.hasOwnProperty("defaultValue")&&uu(e,t.type,Hr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Cp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function uu(e,t,n){(t!=="number"||Ms(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vl=Array.isArray;function yo(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Hr(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function hu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Y(91));return at({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Y(92));if(vl(n)){if(1<n.length)throw Error(Y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Hr(n)}}function P3(e,t){var n=Hr(t.value),r=Hr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function kp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function A3(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?A3(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ji,F3=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ji=ji||document.createElement("div"),ji.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ji.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},j7=["Webkit","ms","Moz","O"];Object.keys(Tl).forEach(function(e){j7.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tl[t]=Tl[e]})});function O3(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tl.hasOwnProperty(e)&&Tl[e]?(""+t).trim():t+"px"}function D3(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=O3(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var z7=at({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pu(e,t){if(t){if(z7[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Y(62))}}function gu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mu=null;function Lh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vu=null,bo=null,wo=null;function _p(e){if(e=fi(e)){if(typeof vu!="function")throw Error(Y(280));var t=e.stateNode;t&&(t=bc(t),vu(e.stateNode,e.type,t))}}function B3(e){bo?wo?wo.push(e):wo=[e]:bo=e}function j3(){if(bo){var e=bo,t=wo;if(wo=bo=null,_p(e),t)for(e=0;e<t.length;e++)_p(t[e])}}function z3(e,t){return e(t)}function U3(){}var wd=!1;function W3(e,t,n){if(wd)return e(t,n);wd=!0;try{return z3(e,t,n)}finally{wd=!1,(bo!==null||wo!==null)&&(U3(),j3())}}function zl(e,t){var n=e.stateNode;if(n===null)return null;var r=bc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Y(231,t,typeof n));return n}var yu=!1;if(hr)try{var ol={};Object.defineProperty(ol,"passive",{get:function(){yu=!0}}),window.addEventListener("test",ol,ol),window.removeEventListener("test",ol,ol)}catch{yu=!1}function U7(e,t,n,r,o,l,i,s,d){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(m){this.onError(m)}}var Ll=!1,Rs=null,Ps=!1,bu=null,W7={onError:function(e){Ll=!0,Rs=e}};function H7(e,t,n,r,o,l,i,s,d){Ll=!1,Rs=null,U7.apply(W7,arguments)}function V7(e,t,n,r,o,l,i,s,d){if(H7.apply(this,arguments),Ll){if(Ll){var f=Rs;Ll=!1,Rs=null}else throw Error(Y(198));Ps||(Ps=!0,bu=f)}}function Ma(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function H3(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tp(e){if(Ma(e)!==e)throw Error(Y(188))}function G7(e){var t=e.alternate;if(!t){if(t=Ma(e),t===null)throw Error(Y(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Tp(o),e;if(l===r)return Tp(o),t;l=l.sibling}throw Error(Y(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i)throw Error(Y(189))}}if(n.alternate!==r)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?e:t}function V3(e){return e=G7(e),e!==null?G3(e):null}function G3(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=G3(e);if(t!==null)return t;e=e.sibling}return null}var Y3=gn.unstable_scheduleCallback,Lp=gn.unstable_cancelCallback,Y7=gn.unstable_shouldYield,Z7=gn.unstable_requestPaint,it=gn.unstable_now,q7=gn.unstable_getCurrentPriorityLevel,$h=gn.unstable_ImmediatePriority,Z3=gn.unstable_UserBlockingPriority,As=gn.unstable_NormalPriority,Q7=gn.unstable_LowPriority,q3=gn.unstable_IdlePriority,gc=null,qn=null;function K7(e){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(gc,e,void 0,(e.current.flags&128)===128)}catch{}}var Dn=Math.clz32?Math.clz32:e9,X7=Math.log,J7=Math.LN2;function e9(e){return e>>>=0,e===0?32:31-(X7(e)/J7|0)|0}var zi=64,Ui=4194304;function yl(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=yl(s):(l&=i,l!==0&&(r=yl(l)))}else i=n&~o,i!==0?r=yl(i):l!==0&&(r=yl(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Dn(t),o=1<<n,r|=e[n],t&=~o;return r}function t9(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function n9(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Dn(l),s=1<<i,d=o[i];d===-1?(!(s&n)||s&r)&&(o[i]=t9(s,t)):d<=t&&(e.expiredLanes|=s),l&=~s}}function wu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Q3(){var e=zi;return zi<<=1,!(zi&4194240)&&(zi=64),e}function xd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ui(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Dn(t),e[t]=n}function r9(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Dn(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Eh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Dn(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var De=0;function K3(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var X3,Nh,J3,eg,tg,xu=!1,Wi=[],Fr=null,Or=null,Dr=null,Ul=new Map,Wl=new Map,Nr=[],a9="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $p(e,t){switch(e){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":Ul.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wl.delete(t.pointerId)}}function ll(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=fi(t),t!==null&&Nh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function o9(e,t,n,r,o){switch(t){case"focusin":return Fr=ll(Fr,e,t,n,r,o),!0;case"dragenter":return Or=ll(Or,e,t,n,r,o),!0;case"mouseover":return Dr=ll(Dr,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Ul.set(l,ll(Ul.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Wl.set(l,ll(Wl.get(l)||null,e,t,n,r,o)),!0}return!1}function ng(e){var t=ma(e.target);if(t!==null){var n=Ma(t);if(n!==null){if(t=n.tag,t===13){if(t=H3(n),t!==null){e.blockedOn=t,tg(e.priority,function(){J3(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ds(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);mu=r,n.target.dispatchEvent(r),mu=null}else return t=fi(n),t!==null&&Nh(t),e.blockedOn=n,!1;t.shift()}return!0}function Ep(e,t,n){ds(e)&&n.delete(t)}function l9(){xu=!1,Fr!==null&&ds(Fr)&&(Fr=null),Or!==null&&ds(Or)&&(Or=null),Dr!==null&&ds(Dr)&&(Dr=null),Ul.forEach(Ep),Wl.forEach(Ep)}function il(e,t){e.blockedOn===t&&(e.blockedOn=null,xu||(xu=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,l9)))}function Hl(e){function t(o){return il(o,e)}if(0<Wi.length){il(Wi[0],e);for(var n=1;n<Wi.length;n++){var r=Wi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Fr!==null&&il(Fr,e),Or!==null&&il(Or,e),Dr!==null&&il(Dr,e),Ul.forEach(t),Wl.forEach(t),n=0;n<Nr.length;n++)r=Nr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)ng(n),n.blockedOn===null&&Nr.shift()}var xo=yr.ReactCurrentBatchConfig,Os=!0;function i9(e,t,n,r){var o=De,l=xo.transition;xo.transition=null;try{De=1,Ih(e,t,n,r)}finally{De=o,xo.transition=l}}function s9(e,t,n,r){var o=De,l=xo.transition;xo.transition=null;try{De=4,Ih(e,t,n,r)}finally{De=o,xo.transition=l}}function Ih(e,t,n,r){if(Os){var o=Cu(e,t,n,r);if(o===null)Id(e,t,r,Ds,n),$p(e,r);else if(o9(o,e,t,n,r))r.stopPropagation();else if($p(e,r),t&4&&-1<a9.indexOf(e)){for(;o!==null;){var l=fi(o);if(l!==null&&X3(l),l=Cu(e,t,n,r),l===null&&Id(e,t,r,Ds,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Id(e,t,r,null,n)}}var Ds=null;function Cu(e,t,n,r){if(Ds=null,e=Lh(r),e=ma(e),e!==null)if(t=Ma(e),t===null)e=null;else if(n=t.tag,n===13){if(e=H3(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ds=e,null}function rg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q7()){case $h:return 1;case Z3:return 4;case As:case Q7:return 16;case q3:return 536870912;default:return 16}default:return 16}}var Mr=null,Mh=null,us=null;function ag(){if(us)return us;var e,t=Mh,n=t.length,r,o="value"in Mr?Mr.value:Mr.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return us=o.slice(e,1<r?1-r:void 0)}function hs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hi(){return!0}function Np(){return!1}function vn(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Hi:Np,this.isPropagationStopped=Np,this}return at(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hi)},persist:function(){},isPersistent:Hi}),t}var Fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rh=vn(Fo),hi=at({},Fo,{view:0,detail:0}),c9=vn(hi),Cd,Sd,sl,mc=at({},hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ph,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sl&&(sl&&e.type==="mousemove"?(Cd=e.screenX-sl.screenX,Sd=e.screenY-sl.screenY):Sd=Cd=0,sl=e),Cd)},movementY:function(e){return"movementY"in e?e.movementY:Sd}}),Ip=vn(mc),d9=at({},mc,{dataTransfer:0}),u9=vn(d9),h9=at({},hi,{relatedTarget:0}),kd=vn(h9),f9=at({},Fo,{animationName:0,elapsedTime:0,pseudoElement:0}),p9=vn(f9),g9=at({},Fo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),m9=vn(g9),v9=at({},Fo,{data:0}),Mp=vn(v9),y9={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b9={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w9={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x9(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=w9[e])?!!t[e]:!1}function Ph(){return x9}var C9=at({},hi,{key:function(e){if(e.key){var t=y9[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?b9[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ph,charCode:function(e){return e.type==="keypress"?hs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),S9=vn(C9),k9=at({},mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=vn(k9),_9=at({},hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ph}),T9=vn(_9),L9=at({},Fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),$9=vn(L9),E9=at({},mc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),N9=vn(E9),I9=[9,13,27,32],Ah=hr&&"CompositionEvent"in window,$l=null;hr&&"documentMode"in document&&($l=document.documentMode);var M9=hr&&"TextEvent"in window&&!$l,og=hr&&(!Ah||$l&&8<$l&&11>=$l),Pp=String.fromCharCode(32),Ap=!1;function lg(e,t){switch(e){case"keyup":return I9.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ig(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ao=!1;function R9(e,t){switch(e){case"compositionend":return ig(t);case"keypress":return t.which!==32?null:(Ap=!0,Pp);case"textInput":return e=t.data,e===Pp&&Ap?null:e;default:return null}}function P9(e,t){if(ao)return e==="compositionend"||!Ah&&lg(e,t)?(e=ag(),us=Mh=Mr=null,ao=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return og&&t.locale!=="ko"?null:t.data;default:return null}}var A9={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!A9[e.type]:t==="textarea"}function sg(e,t,n,r){B3(r),t=Bs(t,"onChange"),0<t.length&&(n=new Rh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var El=null,Vl=null;function F9(e){bg(e,0)}function vc(e){var t=io(e);if(M3(t))return e}function O9(e,t){if(e==="change")return t}var cg=!1;if(hr){var _d;if(hr){var Td="oninput"in document;if(!Td){var Op=document.createElement("div");Op.setAttribute("oninput","return;"),Td=typeof Op.oninput=="function"}_d=Td}else _d=!1;cg=_d&&(!document.documentMode||9<document.documentMode)}function Dp(){El&&(El.detachEvent("onpropertychange",dg),Vl=El=null)}function dg(e){if(e.propertyName==="value"&&vc(Vl)){var t=[];sg(t,Vl,e,Lh(e)),W3(F9,t)}}function D9(e,t,n){e==="focusin"?(Dp(),El=t,Vl=n,El.attachEvent("onpropertychange",dg)):e==="focusout"&&Dp()}function B9(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vc(Vl)}function j9(e,t){if(e==="click")return vc(t)}function z9(e,t){if(e==="input"||e==="change")return vc(t)}function U9(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jn=typeof Object.is=="function"?Object.is:U9;function Gl(e,t){if(jn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!au.call(t,o)||!jn(e[o],t[o]))return!1}return!0}function Bp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jp(e,t){var n=Bp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bp(n)}}function ug(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ug(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hg(){for(var e=window,t=Ms();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ms(e.document)}return t}function Fh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function W9(e){var t=hg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ug(n.ownerDocument.documentElement,n)){if(r!==null&&Fh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=jp(n,l);var i=jp(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var H9=hr&&"documentMode"in document&&11>=document.documentMode,oo=null,Su=null,Nl=null,ku=!1;function zp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ku||oo==null||oo!==Ms(r)||(r=oo,"selectionStart"in r&&Fh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nl&&Gl(Nl,r)||(Nl=r,r=Bs(Su,"onSelect"),0<r.length&&(t=new Rh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=oo)))}function Vi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var lo={animationend:Vi("Animation","AnimationEnd"),animationiteration:Vi("Animation","AnimationIteration"),animationstart:Vi("Animation","AnimationStart"),transitionend:Vi("Transition","TransitionEnd")},Ld={},fg={};hr&&(fg=document.createElement("div").style,"AnimationEvent"in window||(delete lo.animationend.animation,delete lo.animationiteration.animation,delete lo.animationstart.animation),"TransitionEvent"in window||delete lo.transitionend.transition);function yc(e){if(Ld[e])return Ld[e];if(!lo[e])return e;var t=lo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fg)return Ld[e]=t[n];return e}var pg=yc("animationend"),gg=yc("animationiteration"),mg=yc("animationstart"),vg=yc("transitionend"),yg=new Map,Up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(e,t){yg.set(e,t),Ia(t,[e])}for(var $d=0;$d<Up.length;$d++){var Ed=Up[$d],V9=Ed.toLowerCase(),G9=Ed[0].toUpperCase()+Ed.slice(1);Yr(V9,"on"+G9)}Yr(pg,"onAnimationEnd");Yr(gg,"onAnimationIteration");Yr(mg,"onAnimationStart");Yr("dblclick","onDoubleClick");Yr("focusin","onFocus");Yr("focusout","onBlur");Yr(vg,"onTransitionEnd");To("onMouseEnter",["mouseout","mouseover"]);To("onMouseLeave",["mouseout","mouseover"]);To("onPointerEnter",["pointerout","pointerover"]);To("onPointerLeave",["pointerout","pointerover"]);Ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ia("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y9=new Set("cancel close invalid load scroll toggle".split(" ").concat(bl));function Wp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,V7(r,t,void 0,e),e.currentTarget=null}function bg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],d=s.instance,f=s.currentTarget;if(s=s.listener,d!==l&&o.isPropagationStopped())break e;Wp(o,s,f),l=d}else for(i=0;i<r.length;i++){if(s=r[i],d=s.instance,f=s.currentTarget,s=s.listener,d!==l&&o.isPropagationStopped())break e;Wp(o,s,f),l=d}}}if(Ps)throw e=bu,Ps=!1,bu=null,e}function Qe(e,t){var n=t[Eu];n===void 0&&(n=t[Eu]=new Set);var r=e+"__bubble";n.has(r)||(wg(t,e,2,!1),n.add(r))}function Nd(e,t,n){var r=0;t&&(r|=4),wg(n,e,r,t)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function Yl(e){if(!e[Gi]){e[Gi]=!0,L3.forEach(function(n){n!=="selectionchange"&&(Y9.has(n)||Nd(n,!1,e),Nd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gi]||(t[Gi]=!0,Nd("selectionchange",!1,t))}}function wg(e,t,n,r){switch(rg(t)){case 1:var o=i9;break;case 4:o=s9;break;default:o=Ih}n=o.bind(null,t,n,e),o=void 0,!yu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Id(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var d=i.tag;if((d===3||d===4)&&(d=i.stateNode.containerInfo,d===o||d.nodeType===8&&d.parentNode===o))return;i=i.return}for(;s!==null;){if(i=ma(s),i===null)return;if(d=i.tag,d===5||d===6){r=l=i;continue e}s=s.parentNode}}r=r.return}W3(function(){var f=l,m=Lh(n),b=[];e:{var C=yg.get(e);if(C!==void 0){var N=Rh,E=e;switch(e){case"keypress":if(hs(n)===0)break e;case"keydown":case"keyup":N=S9;break;case"focusin":E="focus",N=kd;break;case"focusout":E="blur",N=kd;break;case"beforeblur":case"afterblur":N=kd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=u9;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=T9;break;case pg:case gg:case mg:N=p9;break;case vg:N=$9;break;case"scroll":N=c9;break;case"wheel":N=N9;break;case"copy":case"cut":case"paste":N=m9;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Rp}var S=(t&4)!==0,I=!S&&e==="scroll",w=S?C!==null?C+"Capture":null:C;S=[];for(var g=f,y;g!==null;){y=g;var v=y.stateNode;if(y.tag===5&&v!==null&&(y=v,w!==null&&(v=zl(g,w),v!=null&&S.push(Zl(g,v,y)))),I)break;g=g.return}0<S.length&&(C=new N(C,E,null,n,m),b.push({event:C,listeners:S}))}}if(!(t&7)){e:{if(C=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",C&&n!==mu&&(E=n.relatedTarget||n.fromElement)&&(ma(E)||E[fr]))break e;if((N||C)&&(C=m.window===m?m:(C=m.ownerDocument)?C.defaultView||C.parentWindow:window,N?(E=n.relatedTarget||n.toElement,N=f,E=E?ma(E):null,E!==null&&(I=Ma(E),E!==I||E.tag!==5&&E.tag!==6)&&(E=null)):(N=null,E=f),N!==E)){if(S=Ip,v="onMouseLeave",w="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(S=Rp,v="onPointerLeave",w="onPointerEnter",g="pointer"),I=N==null?C:io(N),y=E==null?C:io(E),C=new S(v,g+"leave",N,n,m),C.target=I,C.relatedTarget=y,v=null,ma(m)===f&&(S=new S(w,g+"enter",E,n,m),S.target=y,S.relatedTarget=I,v=S),I=v,N&&E)t:{for(S=N,w=E,g=0,y=S;y;y=Ka(y))g++;for(y=0,v=w;v;v=Ka(v))y++;for(;0<g-y;)S=Ka(S),g--;for(;0<y-g;)w=Ka(w),y--;for(;g--;){if(S===w||w!==null&&S===w.alternate)break t;S=Ka(S),w=Ka(w)}S=null}else S=null;N!==null&&Hp(b,C,N,S,!1),E!==null&&I!==null&&Hp(b,I,E,S,!0)}}e:{if(C=f?io(f):window,N=C.nodeName&&C.nodeName.toLowerCase(),N==="select"||N==="input"&&C.type==="file")var L=O9;else if(Fp(C))if(cg)L=z9;else{L=B9;var _=D9}else(N=C.nodeName)&&N.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(L=j9);if(L&&(L=L(e,f))){sg(b,L,n,m);break e}_&&_(e,C,f),e==="focusout"&&(_=C._wrapperState)&&_.controlled&&C.type==="number"&&uu(C,"number",C.value)}switch(_=f?io(f):window,e){case"focusin":(Fp(_)||_.contentEditable==="true")&&(oo=_,Su=f,Nl=null);break;case"focusout":Nl=Su=oo=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,zp(b,n,m);break;case"selectionchange":if(H9)break;case"keydown":case"keyup":zp(b,n,m)}var P;if(Ah)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ao?lg(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(og&&n.locale!=="ko"&&(ao||O!=="onCompositionStart"?O==="onCompositionEnd"&&ao&&(P=ag()):(Mr=m,Mh="value"in Mr?Mr.value:Mr.textContent,ao=!0)),_=Bs(f,O),0<_.length&&(O=new Mp(O,e,null,n,m),b.push({event:O,listeners:_}),P?O.data=P:(P=ig(n),P!==null&&(O.data=P)))),(P=M9?R9(e,n):P9(e,n))&&(f=Bs(f,"onBeforeInput"),0<f.length&&(m=new Mp("onBeforeInput","beforeinput",null,n,m),b.push({event:m,listeners:f}),m.data=P))}bg(b,t)})}function Zl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Bs(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=zl(e,n),l!=null&&r.unshift(Zl(e,l,o)),l=zl(e,t),l!=null&&r.push(Zl(e,l,o))),e=e.return}return r}function Ka(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hp(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var s=n,d=s.alternate,f=s.stateNode;if(d!==null&&d===r)break;s.tag===5&&f!==null&&(s=f,o?(d=zl(n,l),d!=null&&i.unshift(Zl(n,d,s))):o||(d=zl(n,l),d!=null&&i.push(Zl(n,d,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Z9=/\r\n?/g,q9=/\u0000|\uFFFD/g;function Vp(e){return(typeof e=="string"?e:""+e).replace(Z9,`
`).replace(q9,"")}function Yi(e,t,n){if(t=Vp(t),Vp(e)!==t&&n)throw Error(Y(425))}function js(){}var _u=null,Tu=null;function Lu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $u=typeof setTimeout=="function"?setTimeout:void 0,Q9=typeof clearTimeout=="function"?clearTimeout:void 0,Gp=typeof Promise=="function"?Promise:void 0,K9=typeof queueMicrotask=="function"?queueMicrotask:typeof Gp<"u"?function(e){return Gp.resolve(null).then(e).catch(X9)}:$u;function X9(e){setTimeout(function(){throw e})}function Md(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Hl(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Hl(t)}function Br(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Oo=Math.random().toString(36).slice(2),Zn="__reactFiber$"+Oo,ql="__reactProps$"+Oo,fr="__reactContainer$"+Oo,Eu="__reactEvents$"+Oo,J9="__reactListeners$"+Oo,ey="__reactHandles$"+Oo;function ma(e){var t=e[Zn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fr]||n[Zn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Yp(e);e!==null;){if(n=e[Zn])return n;e=Yp(e)}return t}e=n,n=e.parentNode}return null}function fi(e){return e=e[Zn]||e[fr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function io(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Y(33))}function bc(e){return e[ql]||null}var Nu=[],so=-1;function Zr(e){return{current:e}}function Je(e){0>so||(e.current=Nu[so],Nu[so]=null,so--)}function Ve(e,t){so++,Nu[so]=e.current,e.current=t}var Vr={},Dt=Zr(Vr),tn=Zr(!1),_a=Vr;function Lo(e,t){var n=e.type.contextTypes;if(!n)return Vr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function nn(e){return e=e.childContextTypes,e!=null}function zs(){Je(tn),Je(Dt)}function Zp(e,t,n){if(Dt.current!==Vr)throw Error(Y(168));Ve(Dt,t),Ve(tn,n)}function xg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(Y(108,D7(e)||"Unknown",o));return at({},n,r)}function Us(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vr,_a=Dt.current,Ve(Dt,e),Ve(tn,tn.current),!0}function qp(e,t,n){var r=e.stateNode;if(!r)throw Error(Y(169));n?(e=xg(e,t,_a),r.__reactInternalMemoizedMergedChildContext=e,Je(tn),Je(Dt),Ve(Dt,e)):Je(tn),Ve(tn,n)}var ir=null,wc=!1,Rd=!1;function Cg(e){ir===null?ir=[e]:ir.push(e)}function ty(e){wc=!0,Cg(e)}function qr(){if(!Rd&&ir!==null){Rd=!0;var e=0,t=De;try{var n=ir;for(De=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ir=null,wc=!1}catch(o){throw ir!==null&&(ir=ir.slice(e+1)),Y3($h,qr),o}finally{De=t,Rd=!1}}return null}var co=[],uo=0,Ws=null,Hs=0,wn=[],xn=0,Ta=null,sr=1,cr="";function ua(e,t){co[uo++]=Hs,co[uo++]=Ws,Ws=e,Hs=t}function Sg(e,t,n){wn[xn++]=sr,wn[xn++]=cr,wn[xn++]=Ta,Ta=e;var r=sr;e=cr;var o=32-Dn(r)-1;r&=~(1<<o),n+=1;var l=32-Dn(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,sr=1<<32-Dn(t)+o|n<<o|r,cr=l+e}else sr=1<<l|n<<o|r,cr=e}function Oh(e){e.return!==null&&(ua(e,1),Sg(e,1,0))}function Dh(e){for(;e===Ws;)Ws=co[--uo],co[uo]=null,Hs=co[--uo],co[uo]=null;for(;e===Ta;)Ta=wn[--xn],wn[xn]=null,cr=wn[--xn],wn[xn]=null,sr=wn[--xn],wn[xn]=null}var pn=null,fn=null,et=!1,Fn=null;function kg(e,t){var n=Cn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,pn=e,fn=Br(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,pn=e,fn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ta!==null?{id:sr,overflow:cr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Cn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,pn=e,fn=null,!0):!1;default:return!1}}function Iu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mu(e){if(et){var t=fn;if(t){var n=t;if(!Qp(e,t)){if(Iu(e))throw Error(Y(418));t=Br(n.nextSibling);var r=pn;t&&Qp(e,t)?kg(r,n):(e.flags=e.flags&-4097|2,et=!1,pn=e)}}else{if(Iu(e))throw Error(Y(418));e.flags=e.flags&-4097|2,et=!1,pn=e}}}function Kp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pn=e}function Zi(e){if(e!==pn)return!1;if(!et)return Kp(e),et=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Lu(e.type,e.memoizedProps)),t&&(t=fn)){if(Iu(e))throw _g(),Error(Y(418));for(;t;)kg(e,t),t=Br(t.nextSibling)}if(Kp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){fn=Br(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}fn=null}}else fn=pn?Br(e.stateNode.nextSibling):null;return!0}function _g(){for(var e=fn;e;)e=Br(e.nextSibling)}function $o(){fn=pn=null,et=!1}function Bh(e){Fn===null?Fn=[e]:Fn.push(e)}var ny=yr.ReactCurrentBatchConfig;function Rn(e,t){if(e&&e.defaultProps){t=at({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Vs=Zr(null),Gs=null,ho=null,jh=null;function zh(){jh=ho=Gs=null}function Uh(e){var t=Vs.current;Je(Vs),e._currentValue=t}function Ru(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Co(e,t){Gs=e,jh=ho=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(en=!0),e.firstContext=null)}function kn(e){var t=e._currentValue;if(jh!==e)if(e={context:e,memoizedValue:t,next:null},ho===null){if(Gs===null)throw Error(Y(308));ho=e,Gs.dependencies={lanes:0,firstContext:e}}else ho=ho.next=e;return t}var va=null;function Wh(e){va===null?va=[e]:va.push(e)}function Tg(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Wh(t)):(n.next=o.next,o.next=n),t.interleaved=n,pr(e,r)}function pr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Er=!1;function Hh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ne&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,pr(e,n)}return o=r.interleaved,o===null?(t.next=t,Wh(r)):(t.next=o.next,o.next=t),r.interleaved=t,pr(e,n)}function fs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Eh(e,n)}}function Xp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ys(e,t,n,r){var o=e.updateQueue;Er=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var d=s,f=d.next;d.next=null,i===null?l=f:i.next=f,i=d;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==i&&(s===null?m.firstBaseUpdate=f:s.next=f,m.lastBaseUpdate=d))}if(l!==null){var b=o.baseState;i=0,m=f=d=null,s=l;do{var C=s.lane,N=s.eventTime;if((r&C)===C){m!==null&&(m=m.next={eventTime:N,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var E=e,S=s;switch(C=t,N=n,S.tag){case 1:if(E=S.payload,typeof E=="function"){b=E.call(N,b,C);break e}b=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=S.payload,C=typeof E=="function"?E.call(N,b,C):E,C==null)break e;b=at({},b,C);break e;case 2:Er=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,C=o.effects,C===null?o.effects=[s]:C.push(s))}else N={eventTime:N,lane:C,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(f=m=N,d=b):m=m.next=N,i|=C;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;C=s,s=C.next,C.next=null,o.lastBaseUpdate=C,o.shared.pending=null}}while(1);if(m===null&&(d=b),o.baseState=d,o.firstBaseUpdate=f,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);$a|=i,e.lanes=i,e.memoizedState=b}}function Jp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(Y(191,o));o.call(r)}}}var $g=new T3.Component().refs;function Pu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:at({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xc={isMounted:function(e){return(e=e._reactInternals)?Ma(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Wt(),o=Ur(e),l=dr(r,o);l.payload=t,n!=null&&(l.callback=n),t=jr(e,l,o),t!==null&&(Bn(t,e,o,r),fs(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Wt(),o=Ur(e),l=dr(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=jr(e,l,o),t!==null&&(Bn(t,e,o,r),fs(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Wt(),r=Ur(e),o=dr(n,r);o.tag=2,t!=null&&(o.callback=t),t=jr(e,o,r),t!==null&&(Bn(t,e,r,n),fs(t,e,r))}};function e2(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!Gl(n,r)||!Gl(o,l):!0}function Eg(e,t,n){var r=!1,o=Vr,l=t.contextType;return typeof l=="object"&&l!==null?l=kn(l):(o=nn(t)?_a:Dt.current,r=t.contextTypes,l=(r=r!=null)?Lo(e,o):Vr),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function t2(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xc.enqueueReplaceState(t,t.state,null)}function Au(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=$g,Hh(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=kn(l):(l=nn(t)?_a:Dt.current,o.context=Lo(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Pu(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&xc.enqueueReplaceState(o,o.state,null),Ys(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function cl(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Y(309));var r=n.stateNode}if(!r)throw Error(Y(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var s=o.refs;s===$g&&(s=o.refs={}),i===null?delete s[l]:s[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(Y(284));if(!n._owner)throw Error(Y(290,e))}return e}function qi(e,t){throw e=Object.prototype.toString.call(t),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function n2(e){var t=e._init;return t(e._payload)}function Ng(e){function t(w,g){if(e){var y=w.deletions;y===null?(w.deletions=[g],w.flags|=16):y.push(g)}}function n(w,g){if(!e)return null;for(;g!==null;)t(w,g),g=g.sibling;return null}function r(w,g){for(w=new Map;g!==null;)g.key!==null?w.set(g.key,g):w.set(g.index,g),g=g.sibling;return w}function o(w,g){return w=Wr(w,g),w.index=0,w.sibling=null,w}function l(w,g,y){return w.index=y,e?(y=w.alternate,y!==null?(y=y.index,y<g?(w.flags|=2,g):y):(w.flags|=2,g)):(w.flags|=1048576,g)}function i(w){return e&&w.alternate===null&&(w.flags|=2),w}function s(w,g,y,v){return g===null||g.tag!==6?(g=jd(y,w.mode,v),g.return=w,g):(g=o(g,y),g.return=w,g)}function d(w,g,y,v){var L=y.type;return L===ro?m(w,g,y.props.children,v,y.key):g!==null&&(g.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===$r&&n2(L)===g.type)?(v=o(g,y.props),v.ref=cl(w,g,y),v.return=w,v):(v=bs(y.type,y.key,y.props,null,w.mode,v),v.ref=cl(w,g,y),v.return=w,v)}function f(w,g,y,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=zd(y,w.mode,v),g.return=w,g):(g=o(g,y.children||[]),g.return=w,g)}function m(w,g,y,v,L){return g===null||g.tag!==7?(g=ka(y,w.mode,v,L),g.return=w,g):(g=o(g,y),g.return=w,g)}function b(w,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=jd(""+g,w.mode,y),g.return=w,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Di:return y=bs(g.type,g.key,g.props,null,w.mode,y),y.ref=cl(w,null,g),y.return=w,y;case no:return g=zd(g,w.mode,y),g.return=w,g;case $r:var v=g._init;return b(w,v(g._payload),y)}if(vl(g)||al(g))return g=ka(g,w.mode,y,null),g.return=w,g;qi(w,g)}return null}function C(w,g,y,v){var L=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return L!==null?null:s(w,g,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Di:return y.key===L?d(w,g,y,v):null;case no:return y.key===L?f(w,g,y,v):null;case $r:return L=y._init,C(w,g,L(y._payload),v)}if(vl(y)||al(y))return L!==null?null:m(w,g,y,v,null);qi(w,y)}return null}function N(w,g,y,v,L){if(typeof v=="string"&&v!==""||typeof v=="number")return w=w.get(y)||null,s(g,w,""+v,L);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Di:return w=w.get(v.key===null?y:v.key)||null,d(g,w,v,L);case no:return w=w.get(v.key===null?y:v.key)||null,f(g,w,v,L);case $r:var _=v._init;return N(w,g,y,_(v._payload),L)}if(vl(v)||al(v))return w=w.get(y)||null,m(g,w,v,L,null);qi(g,v)}return null}function E(w,g,y,v){for(var L=null,_=null,P=g,O=g=0,z=null;P!==null&&O<y.length;O++){P.index>O?(z=P,P=null):z=P.sibling;var Z=C(w,P,y[O],v);if(Z===null){P===null&&(P=z);break}e&&P&&Z.alternate===null&&t(w,P),g=l(Z,g,O),_===null?L=Z:_.sibling=Z,_=Z,P=z}if(O===y.length)return n(w,P),et&&ua(w,O),L;if(P===null){for(;O<y.length;O++)P=b(w,y[O],v),P!==null&&(g=l(P,g,O),_===null?L=P:_.sibling=P,_=P);return et&&ua(w,O),L}for(P=r(w,P);O<y.length;O++)z=N(P,w,O,y[O],v),z!==null&&(e&&z.alternate!==null&&P.delete(z.key===null?O:z.key),g=l(z,g,O),_===null?L=z:_.sibling=z,_=z);return e&&P.forEach(function(he){return t(w,he)}),et&&ua(w,O),L}function S(w,g,y,v){var L=al(y);if(typeof L!="function")throw Error(Y(150));if(y=L.call(y),y==null)throw Error(Y(151));for(var _=L=null,P=g,O=g=0,z=null,Z=y.next();P!==null&&!Z.done;O++,Z=y.next()){P.index>O?(z=P,P=null):z=P.sibling;var he=C(w,P,Z.value,v);if(he===null){P===null&&(P=z);break}e&&P&&he.alternate===null&&t(w,P),g=l(he,g,O),_===null?L=he:_.sibling=he,_=he,P=z}if(Z.done)return n(w,P),et&&ua(w,O),L;if(P===null){for(;!Z.done;O++,Z=y.next())Z=b(w,Z.value,v),Z!==null&&(g=l(Z,g,O),_===null?L=Z:_.sibling=Z,_=Z);return et&&ua(w,O),L}for(P=r(w,P);!Z.done;O++,Z=y.next())Z=N(P,w,O,Z.value,v),Z!==null&&(e&&Z.alternate!==null&&P.delete(Z.key===null?O:Z.key),g=l(Z,g,O),_===null?L=Z:_.sibling=Z,_=Z);return e&&P.forEach(function(se){return t(w,se)}),et&&ua(w,O),L}function I(w,g,y,v){if(typeof y=="object"&&y!==null&&y.type===ro&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Di:e:{for(var L=y.key,_=g;_!==null;){if(_.key===L){if(L=y.type,L===ro){if(_.tag===7){n(w,_.sibling),g=o(_,y.props.children),g.return=w,w=g;break e}}else if(_.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===$r&&n2(L)===_.type){n(w,_.sibling),g=o(_,y.props),g.ref=cl(w,_,y),g.return=w,w=g;break e}n(w,_);break}else t(w,_);_=_.sibling}y.type===ro?(g=ka(y.props.children,w.mode,v,y.key),g.return=w,w=g):(v=bs(y.type,y.key,y.props,null,w.mode,v),v.ref=cl(w,g,y),v.return=w,w=v)}return i(w);case no:e:{for(_=y.key;g!==null;){if(g.key===_)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(w,g.sibling),g=o(g,y.children||[]),g.return=w,w=g;break e}else{n(w,g);break}else t(w,g);g=g.sibling}g=zd(y,w.mode,v),g.return=w,w=g}return i(w);case $r:return _=y._init,I(w,g,_(y._payload),v)}if(vl(y))return E(w,g,y,v);if(al(y))return S(w,g,y,v);qi(w,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(w,g.sibling),g=o(g,y),g.return=w,w=g):(n(w,g),g=jd(y,w.mode,v),g.return=w,w=g),i(w)):n(w,g)}return I}var Eo=Ng(!0),Ig=Ng(!1),pi={},Qn=Zr(pi),Ql=Zr(pi),Kl=Zr(pi);function ya(e){if(e===pi)throw Error(Y(174));return e}function Vh(e,t){switch(Ve(Kl,t),Ve(Ql,e),Ve(Qn,pi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fu(t,e)}Je(Qn),Ve(Qn,t)}function No(){Je(Qn),Je(Ql),Je(Kl)}function Mg(e){ya(Kl.current);var t=ya(Qn.current),n=fu(t,e.type);t!==n&&(Ve(Ql,e),Ve(Qn,n))}function Gh(e){Ql.current===e&&(Je(Qn),Je(Ql))}var nt=Zr(0);function Zs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pd=[];function Yh(){for(var e=0;e<Pd.length;e++)Pd[e]._workInProgressVersionPrimary=null;Pd.length=0}var ps=yr.ReactCurrentDispatcher,Ad=yr.ReactCurrentBatchConfig,La=0,rt=null,vt=null,Ct=null,qs=!1,Il=!1,Xl=0,ry=0;function At(){throw Error(Y(321))}function Zh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jn(e[n],t[n]))return!1;return!0}function qh(e,t,n,r,o,l){if(La=l,rt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ps.current=e===null||e.memoizedState===null?iy:sy,e=n(r,o),Il){l=0;do{if(Il=!1,Xl=0,25<=l)throw Error(Y(301));l+=1,Ct=vt=null,t.updateQueue=null,ps.current=cy,e=n(r,o)}while(Il)}if(ps.current=Qs,t=vt!==null&&vt.next!==null,La=0,Ct=vt=rt=null,qs=!1,t)throw Error(Y(300));return e}function Qh(){var e=Xl!==0;return Xl=0,e}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?rt.memoizedState=Ct=e:Ct=Ct.next=e,Ct}function _n(){if(vt===null){var e=rt.alternate;e=e!==null?e.memoizedState:null}else e=vt.next;var t=Ct===null?rt.memoizedState:Ct.next;if(t!==null)Ct=t,vt=e;else{if(e===null)throw Error(Y(310));vt=e,e={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},Ct===null?rt.memoizedState=Ct=e:Ct=Ct.next=e}return Ct}function Jl(e,t){return typeof t=="function"?t(e):t}function Fd(e){var t=_n(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var r=vt,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=i=null,d=null,f=l;do{var m=f.lane;if((La&m)===m)d!==null&&(d=d.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var b={lane:m,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};d===null?(s=d=b,i=r):d=d.next=b,rt.lanes|=m,$a|=m}f=f.next}while(f!==null&&f!==l);d===null?i=r:d.next=s,jn(r,t.memoizedState)||(en=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,rt.lanes|=l,$a|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Od(e){var t=_n(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);jn(l,t.memoizedState)||(en=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Rg(){}function Pg(e,t){var n=rt,r=_n(),o=t(),l=!jn(r.memoizedState,o);if(l&&(r.memoizedState=o,en=!0),r=r.queue,Kh(Og.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,ei(9,Fg.bind(null,n,r,o,t),void 0,null),St===null)throw Error(Y(349));La&30||Ag(n,t,o)}return o}function Ag(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=rt.updateQueue,t===null?(t={lastEffect:null,stores:null},rt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fg(e,t,n,r){t.value=n,t.getSnapshot=r,Dg(t)&&Bg(e)}function Og(e,t,n){return n(function(){Dg(t)&&Bg(e)})}function Dg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jn(e,n)}catch{return!0}}function Bg(e){var t=pr(e,1);t!==null&&Bn(t,e,1,-1)}function r2(e){var t=Gn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jl,lastRenderedState:e},t.queue=e,e=e.dispatch=ly.bind(null,rt,e),[t.memoizedState,e]}function ei(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=rt.updateQueue,t===null?(t={lastEffect:null,stores:null},rt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function jg(){return _n().memoizedState}function gs(e,t,n,r){var o=Gn();rt.flags|=e,o.memoizedState=ei(1|t,n,void 0,r===void 0?null:r)}function Cc(e,t,n,r){var o=_n();r=r===void 0?null:r;var l=void 0;if(vt!==null){var i=vt.memoizedState;if(l=i.destroy,r!==null&&Zh(r,i.deps)){o.memoizedState=ei(t,n,l,r);return}}rt.flags|=e,o.memoizedState=ei(1|t,n,l,r)}function a2(e,t){return gs(8390656,8,e,t)}function Kh(e,t){return Cc(2048,8,e,t)}function zg(e,t){return Cc(4,2,e,t)}function Ug(e,t){return Cc(4,4,e,t)}function Wg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hg(e,t,n){return n=n!=null?n.concat([e]):null,Cc(4,4,Wg.bind(null,t,e),n)}function Xh(){}function Vg(e,t){var n=_n();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Gg(e,t){var n=_n();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yg(e,t,n){return La&21?(jn(n,t)||(n=Q3(),rt.lanes|=n,$a|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,en=!0),e.memoizedState=n)}function ay(e,t){var n=De;De=n!==0&&4>n?n:4,e(!0);var r=Ad.transition;Ad.transition={};try{e(!1),t()}finally{De=n,Ad.transition=r}}function Zg(){return _n().memoizedState}function oy(e,t,n){var r=Ur(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qg(e))Qg(t,n);else if(n=Tg(e,t,n,r),n!==null){var o=Wt();Bn(n,e,r,o),Kg(n,t,r)}}function ly(e,t,n){var r=Ur(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qg(e))Qg(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,n);if(o.hasEagerState=!0,o.eagerState=s,jn(s,i)){var d=t.interleaved;d===null?(o.next=o,Wh(t)):(o.next=d.next,d.next=o),t.interleaved=o;return}}catch{}finally{}n=Tg(e,t,o,r),n!==null&&(o=Wt(),Bn(n,e,r,o),Kg(n,t,r))}}function qg(e){var t=e.alternate;return e===rt||t!==null&&t===rt}function Qg(e,t){Il=qs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Kg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Eh(e,n)}}var Qs={readContext:kn,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useInsertionEffect:At,useLayoutEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useMutableSource:At,useSyncExternalStore:At,useId:At,unstable_isNewReconciler:!1},iy={readContext:kn,useCallback:function(e,t){return Gn().memoizedState=[e,t===void 0?null:t],e},useContext:kn,useEffect:a2,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,gs(4194308,4,Wg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gs(4194308,4,e,t)},useInsertionEffect:function(e,t){return gs(4,2,e,t)},useMemo:function(e,t){var n=Gn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Gn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=oy.bind(null,rt,e),[r.memoizedState,e]},useRef:function(e){var t=Gn();return e={current:e},t.memoizedState=e},useState:r2,useDebugValue:Xh,useDeferredValue:function(e){return Gn().memoizedState=e},useTransition:function(){var e=r2(!1),t=e[0];return e=ay.bind(null,e[1]),Gn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=rt,o=Gn();if(et){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=t(),St===null)throw Error(Y(349));La&30||Ag(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,a2(Og.bind(null,r,l,e),[e]),r.flags|=2048,ei(9,Fg.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Gn(),t=St.identifierPrefix;if(et){var n=cr,r=sr;n=(r&~(1<<32-Dn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ry++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sy={readContext:kn,useCallback:Vg,useContext:kn,useEffect:Kh,useImperativeHandle:Hg,useInsertionEffect:zg,useLayoutEffect:Ug,useMemo:Gg,useReducer:Fd,useRef:jg,useState:function(){return Fd(Jl)},useDebugValue:Xh,useDeferredValue:function(e){var t=_n();return Yg(t,vt.memoizedState,e)},useTransition:function(){var e=Fd(Jl)[0],t=_n().memoizedState;return[e,t]},useMutableSource:Rg,useSyncExternalStore:Pg,useId:Zg,unstable_isNewReconciler:!1},cy={readContext:kn,useCallback:Vg,useContext:kn,useEffect:Kh,useImperativeHandle:Hg,useInsertionEffect:zg,useLayoutEffect:Ug,useMemo:Gg,useReducer:Od,useRef:jg,useState:function(){return Od(Jl)},useDebugValue:Xh,useDeferredValue:function(e){var t=_n();return vt===null?t.memoizedState=e:Yg(t,vt.memoizedState,e)},useTransition:function(){var e=Od(Jl)[0],t=_n().memoizedState;return[e,t]},useMutableSource:Rg,useSyncExternalStore:Pg,useId:Zg,unstable_isNewReconciler:!1};function Io(e,t){try{var n="",r=t;do n+=O7(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Dd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dy=typeof WeakMap=="function"?WeakMap:Map;function Xg(e,t,n){n=dr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xs||(Xs=!0,Gu=r),Fu(e,t)},n}function Jg(e,t,n){n=dr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Fu(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Fu(e,t),typeof r!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function o2(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dy;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ky.bind(null,e,t,n),t.then(e,e))}function l2(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function i2(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dr(-1,1),t.tag=2,jr(n,t,1))),n.lanes|=1),e)}var uy=yr.ReactCurrentOwner,en=!1;function zt(e,t,n,r){t.child=e===null?Ig(t,null,n,r):Eo(t,e.child,n,r)}function s2(e,t,n,r,o){n=n.render;var l=t.ref;return Co(t,o),r=qh(e,t,n,r,l,o),n=Qh(),e!==null&&!en?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gr(e,t,o)):(et&&n&&Oh(t),t.flags|=1,zt(e,t,r,o),t.child)}function c2(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!lf(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,em(e,t,l,r,o)):(e=bs(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:Gl,n(i,r)&&e.ref===t.ref)return gr(e,t,o)}return t.flags|=1,e=Wr(l,r),e.ref=t.ref,e.return=t,t.child=e}function em(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Gl(l,r)&&e.ref===t.ref)if(en=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(en=!0);else return t.lanes=e.lanes,gr(e,t,o)}return Ou(e,t,n,r,o)}function tm(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ve(po,sn),sn|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ve(po,sn),sn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Ve(po,sn),sn|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Ve(po,sn),sn|=r;return zt(e,t,o,n),t.child}function nm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ou(e,t,n,r,o){var l=nn(n)?_a:Dt.current;return l=Lo(t,l),Co(t,o),n=qh(e,t,n,r,l,o),r=Qh(),e!==null&&!en?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gr(e,t,o)):(et&&r&&Oh(t),t.flags|=1,zt(e,t,n,o),t.child)}function d2(e,t,n,r,o){if(nn(n)){var l=!0;Us(t)}else l=!1;if(Co(t,o),t.stateNode===null)ms(e,t),Eg(t,n,r),Au(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var d=i.context,f=n.contextType;typeof f=="object"&&f!==null?f=kn(f):(f=nn(n)?_a:Dt.current,f=Lo(t,f));var m=n.getDerivedStateFromProps,b=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||d!==f)&&t2(t,i,r,f),Er=!1;var C=t.memoizedState;i.state=C,Ys(t,r,i,o),d=t.memoizedState,s!==r||C!==d||tn.current||Er?(typeof m=="function"&&(Pu(t,n,m,r),d=t.memoizedState),(s=Er||e2(t,n,s,r,C,d,f))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),i.props=r,i.state=d,i.context=f,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Lg(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:Rn(t.type,s),i.props=f,b=t.pendingProps,C=i.context,d=n.contextType,typeof d=="object"&&d!==null?d=kn(d):(d=nn(n)?_a:Dt.current,d=Lo(t,d));var N=n.getDerivedStateFromProps;(m=typeof N=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==b||C!==d)&&t2(t,i,r,d),Er=!1,C=t.memoizedState,i.state=C,Ys(t,r,i,o);var E=t.memoizedState;s!==b||C!==E||tn.current||Er?(typeof N=="function"&&(Pu(t,n,N,r),E=t.memoizedState),(f=Er||e2(t,n,f,r,C,E,d)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,E,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,E,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),i.props=r,i.state=E,i.context=d,r=f):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),r=!1)}return Du(e,t,n,r,l,o)}function Du(e,t,n,r,o,l){nm(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&qp(t,n,!1),gr(e,t,l);r=t.stateNode,uy.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Eo(t,e.child,null,l),t.child=Eo(t,null,s,l)):zt(e,t,s,l),t.memoizedState=r.state,o&&qp(t,n,!0),t.child}function rm(e){var t=e.stateNode;t.pendingContext?Zp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zp(e,t.context,!1),Vh(e,t.containerInfo)}function u2(e,t,n,r,o){return $o(),Bh(o),t.flags|=256,zt(e,t,n,r),t.child}var Bu={dehydrated:null,treeContext:null,retryLane:0};function ju(e){return{baseLanes:e,cachePool:null,transitions:null}}function am(e,t,n){var r=t.pendingProps,o=nt.current,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Ve(nt,o&1),e===null)return Mu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=_c(i,r,0,null),e=ka(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ju(n),t.memoizedState=Bu,e):Jh(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return hy(e,t,i,r,s,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,s=o.sibling;var d={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Wr(o,d),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=Wr(s,l):(l=ka(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?ju(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Bu,r}return l=e.child,e=l.sibling,r=Wr(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Jh(e,t){return t=_c({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Qi(e,t,n,r){return r!==null&&Bh(r),Eo(t,e.child,null,n),e=Jh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hy(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Dd(Error(Y(422))),Qi(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=_c({mode:"visible",children:r.children},o,0,null),l=ka(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Eo(t,e.child,null,i),t.child.memoizedState=ju(i),t.memoizedState=Bu,l);if(!(t.mode&1))return Qi(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(Y(419)),r=Dd(l,r,void 0),Qi(e,t,i,r)}if(s=(i&e.childLanes)!==0,en||s){if(r=St,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,pr(e,o),Bn(r,e,o,-1))}return of(),r=Dd(Error(Y(421))),Qi(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=_y.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,fn=Br(o.nextSibling),pn=t,et=!0,Fn=null,e!==null&&(wn[xn++]=sr,wn[xn++]=cr,wn[xn++]=Ta,sr=e.id,cr=e.overflow,Ta=t),t=Jh(t,r.children),t.flags|=4096,t)}function h2(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ru(e.return,t,n)}function Bd(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function om(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(zt(e,t,r.children,n),r=nt.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&h2(e,n,t);else if(e.tag===19)h2(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ve(nt,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Zs(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Bd(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Zs(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Bd(t,!0,n,null,l);break;case"together":Bd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ms(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$a|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Y(153));if(t.child!==null){for(e=t.child,n=Wr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fy(e,t,n){switch(t.tag){case 3:rm(t),$o();break;case 5:Mg(t);break;case 1:nn(t.type)&&Us(t);break;case 4:Vh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Ve(Vs,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ve(nt,nt.current&1),t.flags|=128,null):n&t.child.childLanes?am(e,t,n):(Ve(nt,nt.current&1),e=gr(e,t,n),e!==null?e.sibling:null);Ve(nt,nt.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return om(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ve(nt,nt.current),r)break;return null;case 22:case 23:return t.lanes=0,tm(e,t,n)}return gr(e,t,n)}var lm,zu,im,sm;lm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zu=function(){};im=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,ya(Qn.current);var l=null;switch(n){case"input":o=cu(e,o),r=cu(e,r),l=[];break;case"select":o=at({},o,{value:void 0}),r=at({},r,{value:void 0}),l=[];break;case"textarea":o=hu(e,o),r=hu(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=js)}pu(n,r);var i;n=null;for(f in o)if(!r.hasOwnProperty(f)&&o.hasOwnProperty(f)&&o[f]!=null)if(f==="style"){var s=o[f];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Bl.hasOwnProperty(f)?l||(l=[]):(l=l||[]).push(f,null));for(f in r){var d=r[f];if(s=o!=null?o[f]:void 0,r.hasOwnProperty(f)&&d!==s&&(d!=null||s!=null))if(f==="style")if(s){for(i in s)!s.hasOwnProperty(i)||d&&d.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in d)d.hasOwnProperty(i)&&s[i]!==d[i]&&(n||(n={}),n[i]=d[i])}else n||(l||(l=[]),l.push(f,n)),n=d;else f==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,s=s?s.__html:void 0,d!=null&&s!==d&&(l=l||[]).push(f,d)):f==="children"?typeof d!="string"&&typeof d!="number"||(l=l||[]).push(f,""+d):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Bl.hasOwnProperty(f)?(d!=null&&f==="onScroll"&&Qe("scroll",e),l||s===d||(l=[])):(l=l||[]).push(f,d))}n&&(l=l||[]).push("style",n);var f=l;(t.updateQueue=f)&&(t.flags|=4)}};sm=function(e,t,n,r){n!==r&&(t.flags|=4)};function dl(e,t){if(!et)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ft(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function py(e,t,n){var r=t.pendingProps;switch(Dh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(t),null;case 1:return nn(t.type)&&zs(),Ft(t),null;case 3:return r=t.stateNode,No(),Je(tn),Je(Dt),Yh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Fn!==null&&(qu(Fn),Fn=null))),zu(e,t),Ft(t),null;case 5:Gh(t);var o=ya(Kl.current);if(n=t.type,e!==null&&t.stateNode!=null)im(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(Y(166));return Ft(t),null}if(e=ya(Qn.current),Zi(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Zn]=t,r[ql]=l,e=(t.mode&1)!==0,n){case"dialog":Qe("cancel",r),Qe("close",r);break;case"iframe":case"object":case"embed":Qe("load",r);break;case"video":case"audio":for(o=0;o<bl.length;o++)Qe(bl[o],r);break;case"source":Qe("error",r);break;case"img":case"image":case"link":Qe("error",r),Qe("load",r);break;case"details":Qe("toggle",r);break;case"input":xp(r,l),Qe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Qe("invalid",r);break;case"textarea":Sp(r,l),Qe("invalid",r)}pu(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Yi(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Yi(r.textContent,s,e),o=["children",""+s]):Bl.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Qe("scroll",r)}switch(n){case"input":Bi(r),Cp(r,l,!0);break;case"textarea":Bi(r),kp(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=js)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=A3(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Zn]=t,e[ql]=r,lm(e,t,!1,!1),t.stateNode=e;e:{switch(i=gu(n,r),n){case"dialog":Qe("cancel",e),Qe("close",e),o=r;break;case"iframe":case"object":case"embed":Qe("load",e),o=r;break;case"video":case"audio":for(o=0;o<bl.length;o++)Qe(bl[o],e);o=r;break;case"source":Qe("error",e),o=r;break;case"img":case"image":case"link":Qe("error",e),Qe("load",e),o=r;break;case"details":Qe("toggle",e),o=r;break;case"input":xp(e,r),o=cu(e,r),Qe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=at({},r,{value:void 0}),Qe("invalid",e);break;case"textarea":Sp(e,r),o=hu(e,r),Qe("invalid",e);break;default:o=r}pu(n,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var d=s[l];l==="style"?D3(e,d):l==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&F3(e,d)):l==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&jl(e,d):typeof d=="number"&&jl(e,""+d):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Bl.hasOwnProperty(l)?d!=null&&l==="onScroll"&&Qe("scroll",e):d!=null&&Sh(e,l,d,i))}switch(n){case"input":Bi(e),Cp(e,r,!1);break;case"textarea":Bi(e),kp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Hr(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?yo(e,!!r.multiple,l,!1):r.defaultValue!=null&&yo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=js)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ft(t),null;case 6:if(e&&t.stateNode!=null)sm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(Y(166));if(n=ya(Kl.current),ya(Qn.current),Zi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Zn]=t,(l=r.nodeValue!==n)&&(e=pn,e!==null))switch(e.tag){case 3:Yi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yi(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zn]=t,t.stateNode=r}return Ft(t),null;case 13:if(Je(nt),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(et&&fn!==null&&t.mode&1&&!(t.flags&128))_g(),$o(),t.flags|=98560,l=!1;else if(l=Zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(Y(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(Y(317));l[Zn]=t}else $o(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ft(t),l=!1}else Fn!==null&&(qu(Fn),Fn=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||nt.current&1?yt===0&&(yt=3):of())),t.updateQueue!==null&&(t.flags|=4),Ft(t),null);case 4:return No(),zu(e,t),e===null&&Yl(t.stateNode.containerInfo),Ft(t),null;case 10:return Uh(t.type._context),Ft(t),null;case 17:return nn(t.type)&&zs(),Ft(t),null;case 19:if(Je(nt),l=t.memoizedState,l===null)return Ft(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)dl(l,!1);else{if(yt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Zs(e),i!==null){for(t.flags|=128,dl(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ve(nt,nt.current&1|2),t.child}e=e.sibling}l.tail!==null&&it()>Mo&&(t.flags|=128,r=!0,dl(l,!1),t.lanes=4194304)}else{if(!r)if(e=Zs(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),dl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!et)return Ft(t),null}else 2*it()-l.renderingStartTime>Mo&&n!==1073741824&&(t.flags|=128,r=!0,dl(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=it(),t.sibling=null,n=nt.current,Ve(nt,r?n&1|2:n&1),t):(Ft(t),null);case 22:case 23:return af(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?sn&1073741824&&(Ft(t),t.subtreeFlags&6&&(t.flags|=8192)):Ft(t),null;case 24:return null;case 25:return null}throw Error(Y(156,t.tag))}function gy(e,t){switch(Dh(t),t.tag){case 1:return nn(t.type)&&zs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return No(),Je(tn),Je(Dt),Yh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gh(t),null;case 13:if(Je(nt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Y(340));$o()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Je(nt),null;case 4:return No(),null;case 10:return Uh(t.type._context),null;case 22:case 23:return af(),null;case 24:return null;default:return null}}var Ki=!1,Ot=!1,my=typeof WeakSet=="function"?WeakSet:Set,te=null;function fo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){lt(e,t,r)}else n.current=null}function Uu(e,t,n){try{n()}catch(r){lt(e,t,r)}}var f2=!1;function vy(e,t){if(_u=Os,e=hg(),Fh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,s=-1,d=-1,f=0,m=0,b=e,C=null;t:for(;;){for(var N;b!==n||o!==0&&b.nodeType!==3||(s=i+o),b!==l||r!==0&&b.nodeType!==3||(d=i+r),b.nodeType===3&&(i+=b.nodeValue.length),(N=b.firstChild)!==null;)C=b,b=N;for(;;){if(b===e)break t;if(C===n&&++f===o&&(s=i),C===l&&++m===r&&(d=i),(N=b.nextSibling)!==null)break;b=C,C=b.parentNode}b=N}n=s===-1||d===-1?null:{start:s,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tu={focusedElem:e,selectionRange:n},Os=!1,te=t;te!==null;)if(t=te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,te=e;else for(;te!==null;){t=te;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var S=E.memoizedProps,I=E.memoizedState,w=t.stateNode,g=w.getSnapshotBeforeUpdate(t.elementType===t.type?S:Rn(t.type,S),I);w.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(v){lt(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,te=e;break}te=t.return}return E=f2,f2=!1,E}function Ml(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Uu(t,n,l)}o=o.next}while(o!==r)}}function Sc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function cm(e){var t=e.alternate;t!==null&&(e.alternate=null,cm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Zn],delete t[ql],delete t[Eu],delete t[J9],delete t[ey])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dm(e){return e.tag===5||e.tag===3||e.tag===4}function p2(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=js));else if(r!==4&&(e=e.child,e!==null))for(Hu(e,t,n),e=e.sibling;e!==null;)Hu(e,t,n),e=e.sibling}function Vu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vu(e,t,n),e=e.sibling;e!==null;)Vu(e,t,n),e=e.sibling}var Tt=null,An=!1;function _r(e,t,n){for(n=n.child;n!==null;)um(e,t,n),n=n.sibling}function um(e,t,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(gc,n)}catch{}switch(n.tag){case 5:Ot||fo(n,t);case 6:var r=Tt,o=An;Tt=null,_r(e,t,n),Tt=r,An=o,Tt!==null&&(An?(e=Tt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Tt.removeChild(n.stateNode));break;case 18:Tt!==null&&(An?(e=Tt,n=n.stateNode,e.nodeType===8?Md(e.parentNode,n):e.nodeType===1&&Md(e,n),Hl(e)):Md(Tt,n.stateNode));break;case 4:r=Tt,o=An,Tt=n.stateNode.containerInfo,An=!0,_r(e,t,n),Tt=r,An=o;break;case 0:case 11:case 14:case 15:if(!Ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Uu(n,t,i),o=o.next}while(o!==r)}_r(e,t,n);break;case 1:if(!Ot&&(fo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){lt(n,t,s)}_r(e,t,n);break;case 21:_r(e,t,n);break;case 22:n.mode&1?(Ot=(r=Ot)||n.memoizedState!==null,_r(e,t,n),Ot=r):_r(e,t,n);break;default:_r(e,t,n)}}function g2(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new my),t.forEach(function(r){var o=Ty.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function In(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:Tt=s.stateNode,An=!1;break e;case 3:Tt=s.stateNode.containerInfo,An=!0;break e;case 4:Tt=s.stateNode.containerInfo,An=!0;break e}s=s.return}if(Tt===null)throw Error(Y(160));um(l,i,o),Tt=null,An=!1;var d=o.alternate;d!==null&&(d.return=null),o.return=null}catch(f){lt(o,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hm(t,e),t=t.sibling}function hm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(In(t,e),zn(e),r&4){try{Ml(3,e,e.return),Sc(3,e)}catch(S){lt(e,e.return,S)}try{Ml(5,e,e.return)}catch(S){lt(e,e.return,S)}}break;case 1:In(t,e),zn(e),r&512&&n!==null&&fo(n,n.return);break;case 5:if(In(t,e),zn(e),r&512&&n!==null&&fo(n,n.return),e.flags&32){var o=e.stateNode;try{jl(o,"")}catch(S){lt(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,s=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&R3(o,l),gu(s,i);var f=gu(s,l);for(i=0;i<d.length;i+=2){var m=d[i],b=d[i+1];m==="style"?D3(o,b):m==="dangerouslySetInnerHTML"?F3(o,b):m==="children"?jl(o,b):Sh(o,m,b,f)}switch(s){case"input":du(o,l);break;case"textarea":P3(o,l);break;case"select":var C=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var N=l.value;N!=null?yo(o,!!l.multiple,N,!1):C!==!!l.multiple&&(l.defaultValue!=null?yo(o,!!l.multiple,l.defaultValue,!0):yo(o,!!l.multiple,l.multiple?[]:"",!1))}o[ql]=l}catch(S){lt(e,e.return,S)}}break;case 6:if(In(t,e),zn(e),r&4){if(e.stateNode===null)throw Error(Y(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(S){lt(e,e.return,S)}}break;case 3:if(In(t,e),zn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hl(t.containerInfo)}catch(S){lt(e,e.return,S)}break;case 4:In(t,e),zn(e);break;case 13:In(t,e),zn(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(nf=it())),r&4&&g2(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Ot=(f=Ot)||m,In(t,e),Ot=f):In(t,e),zn(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!m&&e.mode&1)for(te=e,m=e.child;m!==null;){for(b=te=m;te!==null;){switch(C=te,N=C.child,C.tag){case 0:case 11:case 14:case 15:Ml(4,C,C.return);break;case 1:fo(C,C.return);var E=C.stateNode;if(typeof E.componentWillUnmount=="function"){r=C,n=C.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(S){lt(r,n,S)}}break;case 5:fo(C,C.return);break;case 22:if(C.memoizedState!==null){v2(b);continue}}N!==null?(N.return=C,te=N):v2(b)}m=m.sibling}e:for(m=null,b=e;;){if(b.tag===5){if(m===null){m=b;try{o=b.stateNode,f?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=b.stateNode,d=b.memoizedProps.style,i=d!=null&&d.hasOwnProperty("display")?d.display:null,s.style.display=O3("display",i))}catch(S){lt(e,e.return,S)}}}else if(b.tag===6){if(m===null)try{b.stateNode.nodeValue=f?"":b.memoizedProps}catch(S){lt(e,e.return,S)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;m===b&&(m=null),b=b.return}m===b&&(m=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:In(t,e),zn(e),r&4&&g2(e);break;case 21:break;default:In(t,e),zn(e)}}function zn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(dm(n)){var r=n;break e}n=n.return}throw Error(Y(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(jl(o,""),r.flags&=-33);var l=p2(e);Vu(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=p2(e);Hu(e,s,i);break;default:throw Error(Y(161))}}catch(d){lt(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yy(e,t,n){te=e,fm(e)}function fm(e,t,n){for(var r=(e.mode&1)!==0;te!==null;){var o=te,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Ki;if(!i){var s=o.alternate,d=s!==null&&s.memoizedState!==null||Ot;s=Ki;var f=Ot;if(Ki=i,(Ot=d)&&!f)for(te=o;te!==null;)i=te,d=i.child,i.tag===22&&i.memoizedState!==null?y2(o):d!==null?(d.return=i,te=d):y2(o);for(;l!==null;)te=l,fm(l),l=l.sibling;te=o,Ki=s,Ot=f}m2(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,te=l):m2(e)}}function m2(e){for(;te!==null;){var t=te;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ot||Sc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ot)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Rn(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Jp(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Jp(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var m=f.memoizedState;if(m!==null){var b=m.dehydrated;b!==null&&Hl(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}Ot||t.flags&512&&Wu(t)}catch(C){lt(t,t.return,C)}}if(t===e){te=null;break}if(n=t.sibling,n!==null){n.return=t.return,te=n;break}te=t.return}}function v2(e){for(;te!==null;){var t=te;if(t===e){te=null;break}var n=t.sibling;if(n!==null){n.return=t.return,te=n;break}te=t.return}}function y2(e){for(;te!==null;){var t=te;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sc(4,t)}catch(d){lt(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(d){lt(t,o,d)}}var l=t.return;try{Wu(t)}catch(d){lt(t,l,d)}break;case 5:var i=t.return;try{Wu(t)}catch(d){lt(t,i,d)}}}catch(d){lt(t,t.return,d)}if(t===e){te=null;break}var s=t.sibling;if(s!==null){s.return=t.return,te=s;break}te=t.return}}var by=Math.ceil,Ks=yr.ReactCurrentDispatcher,ef=yr.ReactCurrentOwner,Sn=yr.ReactCurrentBatchConfig,Ne=0,St=null,ut=null,Nt=0,sn=0,po=Zr(0),yt=0,ti=null,$a=0,kc=0,tf=0,Rl=null,Jt=null,nf=0,Mo=1/0,or=null,Xs=!1,Gu=null,zr=null,Xi=!1,Rr=null,Js=0,Pl=0,Yu=null,vs=-1,ys=0;function Wt(){return Ne&6?it():vs!==-1?vs:vs=it()}function Ur(e){return e.mode&1?Ne&2&&Nt!==0?Nt&-Nt:ny.transition!==null?(ys===0&&(ys=Q3()),ys):(e=De,e!==0||(e=window.event,e=e===void 0?16:rg(e.type)),e):1}function Bn(e,t,n,r){if(50<Pl)throw Pl=0,Yu=null,Error(Y(185));ui(e,n,r),(!(Ne&2)||e!==St)&&(e===St&&(!(Ne&2)&&(kc|=n),yt===4&&Ir(e,Nt)),rn(e,r),n===1&&Ne===0&&!(t.mode&1)&&(Mo=it()+500,wc&&qr()))}function rn(e,t){var n=e.callbackNode;n9(e,t);var r=Fs(e,e===St?Nt:0);if(r===0)n!==null&&Lp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Lp(n),t===1)e.tag===0?ty(b2.bind(null,e)):Cg(b2.bind(null,e)),K9(function(){!(Ne&6)&&qr()}),n=null;else{switch(K3(r)){case 1:n=$h;break;case 4:n=Z3;break;case 16:n=As;break;case 536870912:n=q3;break;default:n=As}n=xm(n,pm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pm(e,t){if(vs=-1,ys=0,Ne&6)throw Error(Y(327));var n=e.callbackNode;if(So()&&e.callbackNode!==n)return null;var r=Fs(e,e===St?Nt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ec(e,r);else{t=r;var o=Ne;Ne|=2;var l=mm();(St!==e||Nt!==t)&&(or=null,Mo=it()+500,Sa(e,t));do try{Cy();break}catch(s){gm(e,s)}while(1);zh(),Ks.current=l,Ne=o,ut!==null?t=0:(St=null,Nt=0,t=yt)}if(t!==0){if(t===2&&(o=wu(e),o!==0&&(r=o,t=Zu(e,o))),t===1)throw n=ti,Sa(e,0),Ir(e,r),rn(e,it()),n;if(t===6)Ir(e,r);else{if(o=e.current.alternate,!(r&30)&&!wy(o)&&(t=ec(e,r),t===2&&(l=wu(e),l!==0&&(r=l,t=Zu(e,l))),t===1))throw n=ti,Sa(e,0),Ir(e,r),rn(e,it()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(Y(345));case 2:ha(e,Jt,or);break;case 3:if(Ir(e,r),(r&130023424)===r&&(t=nf+500-it(),10<t)){if(Fs(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Wt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=$u(ha.bind(null,e,Jt,or),t);break}ha(e,Jt,or);break;case 4:if(Ir(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Dn(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=it()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*by(r/1960))-r,10<r){e.timeoutHandle=$u(ha.bind(null,e,Jt,or),r);break}ha(e,Jt,or);break;case 5:ha(e,Jt,or);break;default:throw Error(Y(329))}}}return rn(e,it()),e.callbackNode===n?pm.bind(null,e):null}function Zu(e,t){var n=Rl;return e.current.memoizedState.isDehydrated&&(Sa(e,t).flags|=256),e=ec(e,t),e!==2&&(t=Jt,Jt=n,t!==null&&qu(t)),e}function qu(e){Jt===null?Jt=e:Jt.push.apply(Jt,e)}function wy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!jn(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ir(e,t){for(t&=~tf,t&=~kc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Dn(t),r=1<<n;e[n]=-1,t&=~r}}function b2(e){if(Ne&6)throw Error(Y(327));So();var t=Fs(e,0);if(!(t&1))return rn(e,it()),null;var n=ec(e,t);if(e.tag!==0&&n===2){var r=wu(e);r!==0&&(t=r,n=Zu(e,r))}if(n===1)throw n=ti,Sa(e,0),Ir(e,t),rn(e,it()),n;if(n===6)throw Error(Y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ha(e,Jt,or),rn(e,it()),null}function rf(e,t){var n=Ne;Ne|=1;try{return e(t)}finally{Ne=n,Ne===0&&(Mo=it()+500,wc&&qr())}}function Ea(e){Rr!==null&&Rr.tag===0&&!(Ne&6)&&So();var t=Ne;Ne|=1;var n=Sn.transition,r=De;try{if(Sn.transition=null,De=1,e)return e()}finally{De=r,Sn.transition=n,Ne=t,!(Ne&6)&&qr()}}function af(){sn=po.current,Je(po)}function Sa(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Q9(n)),ut!==null)for(n=ut.return;n!==null;){var r=n;switch(Dh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zs();break;case 3:No(),Je(tn),Je(Dt),Yh();break;case 5:Gh(r);break;case 4:No();break;case 13:Je(nt);break;case 19:Je(nt);break;case 10:Uh(r.type._context);break;case 22:case 23:af()}n=n.return}if(St=e,ut=e=Wr(e.current,null),Nt=sn=t,yt=0,ti=null,tf=kc=$a=0,Jt=Rl=null,va!==null){for(t=0;t<va.length;t++)if(n=va[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}va=null}return e}function gm(e,t){do{var n=ut;try{if(zh(),ps.current=Qs,qs){for(var r=rt.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}qs=!1}if(La=0,Ct=vt=rt=null,Il=!1,Xl=0,ef.current=null,n===null||n.return===null){yt=1,ti=t,ut=null;break}e:{var l=e,i=n.return,s=n,d=t;if(t=Nt,s.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var f=d,m=s,b=m.tag;if(!(m.mode&1)&&(b===0||b===11||b===15)){var C=m.alternate;C?(m.updateQueue=C.updateQueue,m.memoizedState=C.memoizedState,m.lanes=C.lanes):(m.updateQueue=null,m.memoizedState=null)}var N=l2(i);if(N!==null){N.flags&=-257,i2(N,i,s,l,t),N.mode&1&&o2(l,f,t),t=N,d=f;var E=t.updateQueue;if(E===null){var S=new Set;S.add(d),t.updateQueue=S}else E.add(d);break e}else{if(!(t&1)){o2(l,f,t),of();break e}d=Error(Y(426))}}else if(et&&s.mode&1){var I=l2(i);if(I!==null){!(I.flags&65536)&&(I.flags|=256),i2(I,i,s,l,t),Bh(Io(d,s));break e}}l=d=Io(d,s),yt!==4&&(yt=2),Rl===null?Rl=[l]:Rl.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var w=Xg(l,d,t);Xp(l,w);break e;case 1:s=d;var g=l.type,y=l.stateNode;if(!(l.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(zr===null||!zr.has(y)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=Jg(l,s,t);Xp(l,v);break e}}l=l.return}while(l!==null)}ym(n)}catch(L){t=L,ut===n&&n!==null&&(ut=n=n.return);continue}break}while(1)}function mm(){var e=Ks.current;return Ks.current=Qs,e===null?Qs:e}function of(){(yt===0||yt===3||yt===2)&&(yt=4),St===null||!($a&268435455)&&!(kc&268435455)||Ir(St,Nt)}function ec(e,t){var n=Ne;Ne|=2;var r=mm();(St!==e||Nt!==t)&&(or=null,Sa(e,t));do try{xy();break}catch(o){gm(e,o)}while(1);if(zh(),Ne=n,Ks.current=r,ut!==null)throw Error(Y(261));return St=null,Nt=0,yt}function xy(){for(;ut!==null;)vm(ut)}function Cy(){for(;ut!==null&&!Y7();)vm(ut)}function vm(e){var t=wm(e.alternate,e,sn);e.memoizedProps=e.pendingProps,t===null?ym(e):ut=t,ef.current=null}function ym(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gy(n,t),n!==null){n.flags&=32767,ut=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{yt=6,ut=null;return}}else if(n=py(n,t,sn),n!==null){ut=n;return}if(t=t.sibling,t!==null){ut=t;return}ut=t=e}while(t!==null);yt===0&&(yt=5)}function ha(e,t,n){var r=De,o=Sn.transition;try{Sn.transition=null,De=1,Sy(e,t,n,r)}finally{Sn.transition=o,De=r}return null}function Sy(e,t,n,r){do So();while(Rr!==null);if(Ne&6)throw Error(Y(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Y(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(r9(e,l),e===St&&(ut=St=null,Nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xi||(Xi=!0,xm(As,function(){return So(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Sn.transition,Sn.transition=null;var i=De;De=1;var s=Ne;Ne|=4,ef.current=null,vy(e,n),hm(n,e),W9(Tu),Os=!!_u,Tu=_u=null,e.current=n,yy(n),Z7(),Ne=s,De=i,Sn.transition=l}else e.current=n;if(Xi&&(Xi=!1,Rr=e,Js=o),l=e.pendingLanes,l===0&&(zr=null),K7(n.stateNode),rn(e,it()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Xs)throw Xs=!1,e=Gu,Gu=null,e;return Js&1&&e.tag!==0&&So(),l=e.pendingLanes,l&1?e===Yu?Pl++:(Pl=0,Yu=e):Pl=0,qr(),null}function So(){if(Rr!==null){var e=K3(Js),t=Sn.transition,n=De;try{if(Sn.transition=null,De=16>e?16:e,Rr===null)var r=!1;else{if(e=Rr,Rr=null,Js=0,Ne&6)throw Error(Y(331));var o=Ne;for(Ne|=4,te=e.current;te!==null;){var l=te,i=l.child;if(te.flags&16){var s=l.deletions;if(s!==null){for(var d=0;d<s.length;d++){var f=s[d];for(te=f;te!==null;){var m=te;switch(m.tag){case 0:case 11:case 15:Ml(8,m,l)}var b=m.child;if(b!==null)b.return=m,te=b;else for(;te!==null;){m=te;var C=m.sibling,N=m.return;if(cm(m),m===f){te=null;break}if(C!==null){C.return=N,te=C;break}te=N}}}var E=l.alternate;if(E!==null){var S=E.child;if(S!==null){E.child=null;do{var I=S.sibling;S.sibling=null,S=I}while(S!==null)}}te=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,te=i;else e:for(;te!==null;){if(l=te,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Ml(9,l,l.return)}var w=l.sibling;if(w!==null){w.return=l.return,te=w;break e}te=l.return}}var g=e.current;for(te=g;te!==null;){i=te;var y=i.child;if(i.subtreeFlags&2064&&y!==null)y.return=i,te=y;else e:for(i=g;te!==null;){if(s=te,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Sc(9,s)}}catch(L){lt(s,s.return,L)}if(s===i){te=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,te=v;break e}te=s.return}}if(Ne=o,qr(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(gc,e)}catch{}r=!0}return r}finally{De=n,Sn.transition=t}}return!1}function w2(e,t,n){t=Io(n,t),t=Xg(e,t,1),e=jr(e,t,1),t=Wt(),e!==null&&(ui(e,1,t),rn(e,t))}function lt(e,t,n){if(e.tag===3)w2(e,e,n);else for(;t!==null;){if(t.tag===3){w2(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zr===null||!zr.has(r))){e=Io(n,e),e=Jg(t,e,1),t=jr(t,e,1),e=Wt(),t!==null&&(ui(t,1,e),rn(t,e));break}}t=t.return}}function ky(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Wt(),e.pingedLanes|=e.suspendedLanes&n,St===e&&(Nt&n)===n&&(yt===4||yt===3&&(Nt&130023424)===Nt&&500>it()-nf?Sa(e,0):tf|=n),rn(e,t)}function bm(e,t){t===0&&(e.mode&1?(t=Ui,Ui<<=1,!(Ui&130023424)&&(Ui=4194304)):t=1);var n=Wt();e=pr(e,t),e!==null&&(ui(e,t,n),rn(e,n))}function _y(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bm(e,n)}function Ty(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Y(314))}r!==null&&r.delete(t),bm(e,n)}var wm;wm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||tn.current)en=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return en=!1,fy(e,t,n);en=!!(e.flags&131072)}else en=!1,et&&t.flags&1048576&&Sg(t,Hs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ms(e,t),e=t.pendingProps;var o=Lo(t,Dt.current);Co(t,n),o=qh(null,t,r,e,o,n);var l=Qh();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nn(r)?(l=!0,Us(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Hh(t),o.updater=xc,t.stateNode=o,o._reactInternals=t,Au(t,r,e,n),t=Du(null,t,r,!0,l,n)):(t.tag=0,et&&l&&Oh(t),zt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ms(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=$y(r),e=Rn(r,e),o){case 0:t=Ou(null,t,r,e,n);break e;case 1:t=d2(null,t,r,e,n);break e;case 11:t=s2(null,t,r,e,n);break e;case 14:t=c2(null,t,r,Rn(r.type,e),n);break e}throw Error(Y(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Rn(r,o),Ou(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Rn(r,o),d2(e,t,r,o,n);case 3:e:{if(rm(t),e===null)throw Error(Y(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Lg(e,t),Ys(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Io(Error(Y(423)),t),t=u2(e,t,r,n,o);break e}else if(r!==o){o=Io(Error(Y(424)),t),t=u2(e,t,r,n,o);break e}else for(fn=Br(t.stateNode.containerInfo.firstChild),pn=t,et=!0,Fn=null,n=Ig(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($o(),r===o){t=gr(e,t,n);break e}zt(e,t,r,n)}t=t.child}return t;case 5:return Mg(t),e===null&&Mu(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Lu(r,o)?i=null:l!==null&&Lu(r,l)&&(t.flags|=32),nm(e,t),zt(e,t,i,n),t.child;case 6:return e===null&&Mu(t),null;case 13:return am(e,t,n);case 4:return Vh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Eo(t,null,r,n):zt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Rn(r,o),s2(e,t,r,o,n);case 7:return zt(e,t,t.pendingProps,n),t.child;case 8:return zt(e,t,t.pendingProps.children,n),t.child;case 12:return zt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,Ve(Vs,r._currentValue),r._currentValue=i,l!==null)if(jn(l.value,i)){if(l.children===o.children&&!tn.current){t=gr(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var d=s.firstContext;d!==null;){if(d.context===r){if(l.tag===1){d=dr(-1,n&-n),d.tag=2;var f=l.updateQueue;if(f!==null){f=f.shared;var m=f.pending;m===null?d.next=d:(d.next=m.next,m.next=d),f.pending=d}}l.lanes|=n,d=l.alternate,d!==null&&(d.lanes|=n),Ru(l.return,n,t),s.lanes|=n;break}d=d.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(Y(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ru(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}zt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Co(t,n),o=kn(o),r=r(o),t.flags|=1,zt(e,t,r,n),t.child;case 14:return r=t.type,o=Rn(r,t.pendingProps),o=Rn(r.type,o),c2(e,t,r,o,n);case 15:return em(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Rn(r,o),ms(e,t),t.tag=1,nn(r)?(e=!0,Us(t)):e=!1,Co(t,n),Eg(t,r,o),Au(t,r,o,n),Du(null,t,r,!0,e,n);case 19:return om(e,t,n);case 22:return tm(e,t,n)}throw Error(Y(156,t.tag))};function xm(e,t){return Y3(e,t)}function Ly(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(e,t,n,r){return new Ly(e,t,n,r)}function lf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $y(e){if(typeof e=="function")return lf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_h)return 11;if(e===Th)return 14}return 2}function Wr(e,t){var n=e.alternate;return n===null?(n=Cn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bs(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")lf(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case ro:return ka(n.children,o,l,t);case kh:i=8,o|=8;break;case ou:return e=Cn(12,n,t,o|2),e.elementType=ou,e.lanes=l,e;case lu:return e=Cn(13,n,t,o),e.elementType=lu,e.lanes=l,e;case iu:return e=Cn(19,n,t,o),e.elementType=iu,e.lanes=l,e;case N3:return _c(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $3:i=10;break e;case E3:i=9;break e;case _h:i=11;break e;case Th:i=14;break e;case $r:i=16,r=null;break e}throw Error(Y(130,e==null?e:typeof e,""))}return t=Cn(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function ka(e,t,n,r){return e=Cn(7,e,r,t),e.lanes=n,e}function _c(e,t,n,r){return e=Cn(22,e,r,t),e.elementType=N3,e.lanes=n,e.stateNode={isHidden:!1},e}function jd(e,t,n){return e=Cn(6,e,null,t),e.lanes=n,e}function zd(e,t,n){return t=Cn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ey(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xd(0),this.expirationTimes=xd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xd(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function sf(e,t,n,r,o,l,i,s,d){return e=new Ey(e,t,n,s,d),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Cn(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hh(l),e}function Ny(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:no,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Cm(e){if(!e)return Vr;e=e._reactInternals;e:{if(Ma(e)!==e||e.tag!==1)throw Error(Y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Y(171))}if(e.tag===1){var n=e.type;if(nn(n))return xg(e,n,t)}return t}function Sm(e,t,n,r,o,l,i,s,d){return e=sf(n,r,!0,e,o,l,i,s,d),e.context=Cm(null),n=e.current,r=Wt(),o=Ur(n),l=dr(r,o),l.callback=t??null,jr(n,l,o),e.current.lanes=o,ui(e,o,r),rn(e,r),e}function Tc(e,t,n,r){var o=t.current,l=Wt(),i=Ur(o);return n=Cm(n),t.context===null?t.context=n:t.pendingContext=n,t=dr(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jr(o,t,i),e!==null&&(Bn(e,o,i,l),fs(e,o,i)),i}function tc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function x2(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cf(e,t){x2(e,t),(e=e.alternate)&&x2(e,t)}function Iy(){return null}var km=typeof reportError=="function"?reportError:function(e){console.error(e)};function df(e){this._internalRoot=e}Lc.prototype.render=df.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Y(409));Tc(e,t,null,null)};Lc.prototype.unmount=df.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ea(function(){Tc(null,e,null,null)}),t[fr]=null}};function Lc(e){this._internalRoot=e}Lc.prototype.unstable_scheduleHydration=function(e){if(e){var t=eg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nr.length&&t!==0&&t<Nr[n].priority;n++);Nr.splice(n,0,e),n===0&&ng(e)}};function uf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function C2(){}function My(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var f=tc(i);l.call(f)}}var i=Sm(t,r,e,0,null,!1,!1,"",C2);return e._reactRootContainer=i,e[fr]=i.current,Yl(e.nodeType===8?e.parentNode:e),Ea(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var f=tc(d);s.call(f)}}var d=sf(e,0,!1,null,null,!1,!1,"",C2);return e._reactRootContainer=d,e[fr]=d.current,Yl(e.nodeType===8?e.parentNode:e),Ea(function(){Tc(t,d,n,r)}),d}function Ec(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var d=tc(i);s.call(d)}}Tc(t,i,e,o)}else i=My(n,t,e,o,r);return tc(i)}X3=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yl(t.pendingLanes);n!==0&&(Eh(t,n|1),rn(t,it()),!(Ne&6)&&(Mo=it()+500,qr()))}break;case 13:Ea(function(){var r=pr(e,1);if(r!==null){var o=Wt();Bn(r,e,1,o)}}),cf(e,1)}};Nh=function(e){if(e.tag===13){var t=pr(e,134217728);if(t!==null){var n=Wt();Bn(t,e,134217728,n)}cf(e,134217728)}};J3=function(e){if(e.tag===13){var t=Ur(e),n=pr(e,t);if(n!==null){var r=Wt();Bn(n,e,t,r)}cf(e,t)}};eg=function(){return De};tg=function(e,t){var n=De;try{return De=e,t()}finally{De=n}};vu=function(e,t,n){switch(t){case"input":if(du(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=bc(r);if(!o)throw Error(Y(90));M3(r),du(r,o)}}}break;case"textarea":P3(e,n);break;case"select":t=n.value,t!=null&&yo(e,!!n.multiple,t,!1)}};z3=rf;U3=Ea;var Ry={usingClientEntryPoint:!1,Events:[fi,io,bc,B3,j3,rf]},ul={findFiberByHostInstance:ma,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Py={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=V3(e),e===null?null:e.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance||Iy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ji.isDisabled&&Ji.supportsFiber)try{gc=Ji.inject(Py),qn=Ji}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ry;mn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uf(t))throw Error(Y(200));return Ny(e,t,null,n)};mn.createRoot=function(e,t){if(!uf(e))throw Error(Y(299));var n=!1,r="",o=km;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=sf(e,1,!1,null,null,n,!1,r,o),e[fr]=t.current,Yl(e.nodeType===8?e.parentNode:e),new df(t)};mn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=V3(t),e=e===null?null:e.stateNode,e};mn.flushSync=function(e){return Ea(e)};mn.hydrate=function(e,t,n){if(!$c(t))throw Error(Y(200));return Ec(null,e,t,!0,n)};mn.hydrateRoot=function(e,t,n){if(!uf(e))throw Error(Y(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=km;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Sm(t,null,e,1,n??null,o,!1,l,i),e[fr]=t.current,Yl(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Lc(t)};mn.render=function(e,t,n){if(!$c(t))throw Error(Y(200));return Ec(null,e,t,!1,n)};mn.unmountComponentAtNode=function(e){if(!$c(e))throw Error(Y(40));return e._reactRootContainer?(Ea(function(){Ec(null,null,e,!1,function(){e._reactRootContainer=null,e[fr]=null})}),!0):!1};mn.unstable_batchedUpdates=rf;mn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$c(n))throw Error(Y(200));if(e==null||e._reactInternals===void 0)throw Error(Y(38));return Ec(e,t,n,!1,r)};mn.version="18.2.0-next-9e3b772b8-20220608";function _m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_m)}catch(e){console.error(e)}}_m(),S3.exports=mn;var Tm=S3.exports,S2=Tm;ru.createRoot=S2.createRoot,ru.hydrateRoot=S2.hydrateRoot;function Ay(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Fy(e,t){if(e==null)return{};var n=Ay(e,t),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Qu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Oy(e){if(Array.isArray(e))return Qu(e)}function Dy(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function By(e,t){if(e){if(typeof e=="string")return Qu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qu(e,t)}}function jy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zy(e){return Oy(e)||Dy(e)||By(e)||jy()}function ni(e){"@babel/helpers - typeof";return ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ni(e)}function Uy(e,t){if(ni(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ni(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Wy(e){var t=Uy(e,"string");return ni(t)==="symbol"?t:String(t)}function Lm(e,t,n){return t=Wy(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ku(){return Ku=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ku.apply(this,arguments)}function k2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function go(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?k2(Object(n),!0).forEach(function(r){Lm(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Hy(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var Ud={};function Vy(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return Ud[t]||(Ud[t]=Hy(e)),Ud[t]}function Gy(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=e.filter(function(l){return l!=="token"}),o=Vy(r);return o.reduce(function(l,i){return go(go({},l),n[i])},t)}function _2(e){return e.join(" ")}function Yy(e,t){var n=0;return function(r){return n+=1,r.map(function(o,l){return $m({node:o,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(l)})})}}function $m(e){var t=e.node,n=e.stylesheet,r=e.style,o=r===void 0?{}:r,l=e.useInlineStyles,i=e.key,s=t.properties,d=t.type,f=t.tagName,m=t.value;if(d==="text")return m;if(f){var b=Yy(n,l),C;if(!l)C=go(go({},s),{},{className:_2(s.className)});else{var N=Object.keys(n).reduce(function(w,g){return g.split(".").forEach(function(y){w.includes(y)||w.push(y)}),w},[]),E=s.className&&s.className.includes("token")?["token"]:[],S=s.className&&E.concat(s.className.filter(function(w){return!N.includes(w)}));C=go(go({},s),{},{className:_2(S)||void 0,style:Gy(s.className,Object.assign({},s.style,o),n)})}var I=b(t.children);return $t.createElement(f,Ku({key:i},C),I)}}const Zy=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var qy=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function T2(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Yn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?T2(Object(n),!0).forEach(function(r){Lm(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T2(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Qy=/\n/g;function Ky(e){return e.match(Qy)}function Xy(e){var t=e.lines,n=e.startingLineNumber,r=e.style;return t.map(function(o,l){var i=l+n;return $t.createElement("span",{key:"line-".concat(l),className:"react-syntax-highlighter-line-number",style:typeof r=="function"?r(i):r},"".concat(i,`
`))})}function Jy(e){var t=e.codeString,n=e.codeStyle,r=e.containerStyle,o=r===void 0?{float:"left",paddingRight:"10px"}:r,l=e.numberStyle,i=l===void 0?{}:l,s=e.startingLineNumber;return $t.createElement("code",{style:Object.assign({},n,o)},Xy({lines:t.replace(/\n$/,"").split(`
`),style:i,startingLineNumber:s}))}function eb(e){return"".concat(e.toString().length,".25em")}function Em(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function Nm(e,t,n){var r={display:"inline-block",minWidth:eb(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},o=typeof e=="function"?e(t):e,l=Yn(Yn({},r),o);return l}function ws(e){var t=e.children,n=e.lineNumber,r=e.lineNumberStyle,o=e.largestLineNumber,l=e.showInlineLineNumbers,i=e.lineProps,s=i===void 0?{}:i,d=e.className,f=d===void 0?[]:d,m=e.showLineNumbers,b=e.wrapLongLines,C=typeof s=="function"?s(n):s;if(C.className=f,n&&l){var N=Nm(r,n,o);t.unshift(Em(n,N))}return b&m&&(C.style=Yn(Yn({},C.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:C,children:t}}function Im(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=0;r<e.length;r++){var o=e[r];if(o.type==="text")n.push(ws({children:[o],className:zy(new Set(t))}));else if(o.children){var l=t.concat(o.properties.className);Im(o.children,l).forEach(function(i){return n.push(i)})}}return n}function tb(e,t,n,r,o,l,i,s,d){var f,m=Im(e.value),b=[],C=-1,N=0;function E(L,_){var P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return ws({children:L,lineNumber:_,lineNumberStyle:s,largestLineNumber:i,showInlineLineNumbers:o,lineProps:n,className:P,showLineNumbers:r,wrapLongLines:d})}function S(L,_){if(r&&_&&o){var P=Nm(s,_,i);L.unshift(Em(_,P))}return L}function I(L,_){var P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||P.length>0?E(L,_,P):S(L,_)}for(var w=function(){var _=m[N],P=_.children[0].value,O=Ky(P);if(O){var z=P.split(`
`);z.forEach(function(Z,he){var se=r&&b.length+l,ze={type:"text",value:"".concat(Z,`
`)};if(he===0){var ot=m.slice(C+1,N).concat(ws({children:[ze],className:_.properties.className})),Ge=I(ot,se);b.push(Ge)}else if(he===z.length-1){var Be=m[N+1]&&m[N+1].children&&m[N+1].children[0],Ye={type:"text",value:"".concat(Z)};if(Be){var U=ws({children:[Ye],className:_.properties.className});m.splice(N+1,0,U)}else{var q=[Ye],J=I(q,se,_.properties.className);b.push(J)}}else{var oe=[ze],fe=I(oe,se,_.properties.className);b.push(fe)}}),C=N}N++};N<m.length;)w();if(C!==m.length-1){var g=m.slice(C+1,m.length);if(g&&g.length){var y=r&&b.length+l,v=I(g,y);b.push(v)}}return t?b:(f=[]).concat.apply(f,b)}function nb(e){var t=e.rows,n=e.stylesheet,r=e.useInlineStyles;return t.map(function(o,l){return $m({node:o,stylesheet:n,useInlineStyles:r,key:"code-segement".concat(l)})})}function Mm(e){return e&&typeof e.highlightAuto<"u"}function rb(e){var t=e.astGenerator,n=e.language,r=e.code,o=e.defaultCodeValue;if(Mm(t)){var l=Zy(t,n);return n==="text"?{value:o,language:"text"}:l?t.highlight(n,r):t.highlightAuto(r)}try{return n&&n!=="text"?{value:t.highlight(r,n)}:{value:o}}catch{return{value:o}}}function ab(e,t){return function(r){var o=r.language,l=r.children,i=r.style,s=i===void 0?t:i,d=r.customStyle,f=d===void 0?{}:d,m=r.codeTagProps,b=m===void 0?{className:o?"language-".concat(o):void 0,style:Yn(Yn({},s['code[class*="language-"]']),s['code[class*="language-'.concat(o,'"]')])}:m,C=r.useInlineStyles,N=C===void 0?!0:C,E=r.showLineNumbers,S=E===void 0?!1:E,I=r.showInlineLineNumbers,w=I===void 0?!0:I,g=r.startingLineNumber,y=g===void 0?1:g,v=r.lineNumberContainerStyle,L=r.lineNumberStyle,_=L===void 0?{}:L,P=r.wrapLines,O=r.wrapLongLines,z=O===void 0?!1:O,Z=r.lineProps,he=Z===void 0?{}:Z,se=r.renderer,ze=r.PreTag,ot=ze===void 0?"pre":ze,Ge=r.CodeTag,Be=Ge===void 0?"code":Ge,Ye=r.code,U=Ye===void 0?(Array.isArray(l)?l[0]:l)||"":Ye,q=r.astGenerator,J=Fy(r,qy);q=q||e;var oe=S?$t.createElement(Jy,{containerStyle:v,codeStyle:b.style||{},numberStyle:_,startingLineNumber:y,codeString:U}):null,fe=s.hljs||s['pre[class*="language-"]']||{backgroundColor:"#fff"},Bt=Mm(q)?"hljs":"prismjs",pe=N?Object.assign({},J,{style:Object.assign({},fe,f)}):Object.assign({},J,{className:J.className?"".concat(Bt," ").concat(J.className):Bt,style:Object.assign({},f)});if(z?b.style=Yn(Yn({},b.style),{},{whiteSpace:"pre-wrap"}):b.style=Yn(Yn({},b.style),{},{whiteSpace:"pre"}),!q)return $t.createElement(ot,pe,oe,$t.createElement(Be,b,U));(P===void 0&&se||z)&&(P=!0),se=se||nb;var tt=[{type:"text",value:U}],Ze=rb({astGenerator:q,language:o,code:U,defaultCodeValue:tt});Ze.language===null&&(Ze.value=tt);var ft=Ze.value.length+y,Pt=tb(Ze,P,he,S,w,y,ft,_,z);return $t.createElement(ot,pe,$t.createElement(Be,b,!w&&oe,se({rows:Pt,stylesheet:s,useInlineStyles:N})))}}var ob=ib,lb=Object.prototype.hasOwnProperty;function ib(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)lb.call(n,r)&&(e[r]=n[r])}return e}var Rm=Pm,hf=Pm.prototype;hf.space=null;hf.normal={};hf.property={};function Pm(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var L2=ob,sb=Rm,cb=db;function db(e){for(var t=e.length,n=[],r=[],o=-1,l,i;++o<t;)l=e[o],n.push(l.property),r.push(l.normal),i=l.space;return new sb(L2.apply(null,n),L2.apply(null,r),i)}var ff=ub;function ub(e){return e.toLowerCase()}var Am=Fm,Tn=Fm.prototype;Tn.space=null;Tn.attribute=null;Tn.property=null;Tn.boolean=!1;Tn.booleanish=!1;Tn.overloadedBoolean=!1;Tn.number=!1;Tn.commaSeparated=!1;Tn.spaceSeparated=!1;Tn.commaOrSpaceSeparated=!1;Tn.mustUseProperty=!1;Tn.defined=!1;function Fm(e,t){this.property=e,this.attribute=t}var Xn={},hb=0;Xn.boolean=Ra();Xn.booleanish=Ra();Xn.overloadedBoolean=Ra();Xn.number=Ra();Xn.spaceSeparated=Ra();Xn.commaSeparated=Ra();Xn.commaOrSpaceSeparated=Ra();function Ra(){return Math.pow(2,++hb)}var Om=Am,$2=Xn,Dm=pf;pf.prototype=new Om;pf.prototype.defined=!0;var Bm=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],fb=Bm.length;function pf(e,t,n,r){var o=-1,l;for(E2(this,"space",r),Om.call(this,e,t);++o<fb;)l=Bm[o],E2(this,l,(n&$2[l])===$2[l])}function E2(e,t,n){n&&(e[t]=n)}var N2=ff,pb=Rm,gb=Dm,gi=mb;function mb(e){var t=e.space,n=e.mustUseProperty||[],r=e.attributes||{},o=e.properties,l=e.transform,i={},s={},d,f;for(d in o)f=new gb(d,l(r,d),o[d],t),n.indexOf(d)!==-1&&(f.mustUseProperty=!0),i[d]=f,s[N2(d)]=d,s[N2(f.attribute)]=d;return new pb(i,s,t)}var vb=gi,yb=vb({space:"xlink",transform:bb,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function bb(e,t){return"xlink:"+t.slice(5).toLowerCase()}var wb=gi,xb=wb({space:"xml",transform:Cb,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Cb(e,t){return"xml:"+t.slice(3).toLowerCase()}var Sb=kb;function kb(e,t){return t in e?e[t]:t}var _b=Sb,jm=Tb;function Tb(e,t){return _b(e,t.toLowerCase())}var Lb=gi,$b=jm,Eb=Lb({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:$b,properties:{xmlns:null,xmlnsXLink:null}}),gf=Xn,Nb=gi,Qt=gf.booleanish,bn=gf.number,ca=gf.spaceSeparated,Ib=Nb({transform:Mb,properties:{ariaActiveDescendant:null,ariaAtomic:Qt,ariaAutoComplete:null,ariaBusy:Qt,ariaChecked:Qt,ariaColCount:bn,ariaColIndex:bn,ariaColSpan:bn,ariaControls:ca,ariaCurrent:null,ariaDescribedBy:ca,ariaDetails:null,ariaDisabled:Qt,ariaDropEffect:ca,ariaErrorMessage:null,ariaExpanded:Qt,ariaFlowTo:ca,ariaGrabbed:Qt,ariaHasPopup:null,ariaHidden:Qt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ca,ariaLevel:bn,ariaLive:null,ariaModal:Qt,ariaMultiLine:Qt,ariaMultiSelectable:Qt,ariaOrientation:null,ariaOwns:ca,ariaPlaceholder:null,ariaPosInSet:bn,ariaPressed:Qt,ariaReadOnly:Qt,ariaRelevant:null,ariaRequired:Qt,ariaRoleDescription:ca,ariaRowCount:bn,ariaRowIndex:bn,ariaRowSpan:bn,ariaSelected:Qt,ariaSetSize:bn,ariaSort:null,ariaValueMax:bn,ariaValueMin:bn,ariaValueNow:bn,ariaValueText:null,role:null}});function Mb(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var Do=Xn,Rb=gi,Pb=jm,we=Do.boolean,Ab=Do.overloadedBoolean,hl=Do.booleanish,qe=Do.number,jt=Do.spaceSeparated,es=Do.commaSeparated,Fb=Rb({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Pb,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:es,acceptCharset:jt,accessKey:jt,action:null,allow:null,allowFullScreen:we,allowPaymentRequest:we,allowUserMedia:we,alt:null,as:null,async:we,autoCapitalize:null,autoComplete:jt,autoFocus:we,autoPlay:we,capture:we,charSet:null,checked:we,cite:null,className:jt,cols:qe,colSpan:null,content:null,contentEditable:hl,controls:we,controlsList:jt,coords:qe|es,crossOrigin:null,data:null,dateTime:null,decoding:null,default:we,defer:we,dir:null,dirName:null,disabled:we,download:Ab,draggable:hl,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:we,formTarget:null,headers:jt,height:qe,hidden:we,high:qe,href:null,hrefLang:null,htmlFor:jt,httpEquiv:jt,id:null,imageSizes:null,imageSrcSet:es,inputMode:null,integrity:null,is:null,isMap:we,itemId:null,itemProp:jt,itemRef:jt,itemScope:we,itemType:jt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:we,low:qe,manifest:null,max:null,maxLength:qe,media:null,method:null,min:null,minLength:qe,multiple:we,muted:we,name:null,nonce:null,noModule:we,noValidate:we,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:we,optimum:qe,pattern:null,ping:jt,placeholder:null,playsInline:we,poster:null,preload:null,readOnly:we,referrerPolicy:null,rel:jt,required:we,reversed:we,rows:qe,rowSpan:qe,sandbox:jt,scope:null,scoped:we,seamless:we,selected:we,shape:null,size:qe,sizes:null,slot:null,span:qe,spellCheck:hl,src:null,srcDoc:null,srcLang:null,srcSet:es,start:qe,step:null,style:null,tabIndex:qe,target:null,title:null,translate:null,type:null,typeMustMatch:we,useMap:null,value:hl,width:qe,wrap:null,align:null,aLink:null,archive:jt,axis:null,background:null,bgColor:null,border:qe,borderColor:null,bottomMargin:qe,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:we,declare:we,event:null,face:null,frame:null,frameBorder:null,hSpace:qe,leftMargin:qe,link:null,longDesc:null,lowSrc:null,marginHeight:qe,marginWidth:qe,noResize:we,noHref:we,noShade:we,noWrap:we,object:null,profile:null,prompt:null,rev:null,rightMargin:qe,rules:null,scheme:null,scrolling:hl,standby:null,summary:null,text:null,topMargin:qe,valueType:null,version:null,vAlign:null,vLink:null,vSpace:qe,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:we,disableRemotePlayback:we,prefix:null,property:null,results:qe,security:null,unselectable:null}}),Ob=cb,Db=yb,Bb=xb,jb=Eb,zb=Ib,Ub=Fb,Wb=Ob([Bb,Db,jb,zb,Ub]),Hb=ff,Vb=Dm,Gb=Am,mf="data",Yb=Qb,Zb=/^data[-\w.:]+$/i,zm=/-[a-z]/g,qb=/[A-Z]/g;function Qb(e,t){var n=Hb(t),r=t,o=Gb;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===mf&&Zb.test(t)&&(t.charAt(4)==="-"?r=Kb(t):t=Xb(t),o=Vb),new o(r,t))}function Kb(e){var t=e.slice(5).replace(zm,ew);return mf+t.charAt(0).toUpperCase()+t.slice(1)}function Xb(e){var t=e.slice(4);return zm.test(t)?e:(t=t.replace(qb,Jb),t.charAt(0)!=="-"&&(t="-"+t),mf+t)}function Jb(e){return"-"+e.toLowerCase()}function ew(e){return e.charAt(1).toUpperCase()}var tw=nw,I2=/[#.]/g;function nw(e,t){for(var n=e||"",r=t||"div",o={},l=0,i,s,d;l<n.length;)I2.lastIndex=l,d=I2.exec(n),i=n.slice(l,d?d.index:n.length),i&&(s?s==="#"?o.id=i:o.className?o.className.push(i):o.className=[i]:r=i,l+=i.length),d&&(s=d[0],l++);return{type:"element",tagName:r,properties:o,children:[]}}var vf={};vf.parse=ow;vf.stringify=lw;var M2="",rw=" ",aw=/[ \t\n\r\f]+/g;function ow(e){var t=String(e||M2).trim();return t===M2?[]:t.split(aw)}function lw(e){return e.join(rw).trim()}var yf={};yf.parse=iw;yf.stringify=sw;var Xu=",",R2=" ",wl="";function iw(e){for(var t=[],n=String(e||wl),r=n.indexOf(Xu),o=0,l=!1,i;!l;)r===-1&&(r=n.length,l=!0),i=n.slice(o,r).trim(),(i||!l)&&t.push(i),o=r+1,r=n.indexOf(Xu,o);return t}function sw(e,t){var n=t||{},r=n.padLeft===!1?wl:R2,o=n.padRight?R2:wl;return e[e.length-1]===wl&&(e=e.concat(wl)),e.join(o+Xu+r).trim()}var cw=Yb,P2=ff,dw=tw,A2=vf.parse,F2=yf.parse,uw=fw,hw={}.hasOwnProperty;function fw(e,t,n){var r=n?yw(n):null;return o;function o(i,s){var d=dw(i,t),f=Array.prototype.slice.call(arguments,2),m=d.tagName.toLowerCase(),b;if(d.tagName=r&&hw.call(r,m)?r[m]:m,s&&pw(s,d)&&(f.unshift(s),s=null),s)for(b in s)l(d.properties,b,s[b]);return Um(d.children,f),d.tagName==="template"&&(d.content={type:"root",children:d.children},d.children=[]),d}function l(i,s,d){var f,m,b;d==null||d!==d||(f=cw(e,s),m=f.property,b=d,typeof b=="string"&&(f.spaceSeparated?b=A2(b):f.commaSeparated?b=F2(b):f.commaOrSpaceSeparated&&(b=A2(F2(b).join(" ")))),m==="style"&&typeof d!="string"&&(b=vw(b)),m==="className"&&i.className&&(b=i.className.concat(b)),i[m]=mw(f,m,b))}}function pw(e,t){return typeof e=="string"||"length"in e||gw(t.tagName,e)}function gw(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function Um(e,t){var n,r;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,r=t.length;++n<r;)Um(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function mw(e,t,n){var r,o,l;if(typeof n!="object"||!("length"in n))return O2(e,t,n);for(o=n.length,r=-1,l=[];++r<o;)l[r]=O2(e,t,n[r]);return l}function O2(e,t,n){var r=n;return e.number||e.positiveNumber?!isNaN(r)&&r!==""&&(r=Number(r)):(e.boolean||e.overloadedBoolean)&&typeof r=="string"&&(r===""||P2(n)===P2(t))&&(r=!0),r}function vw(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function yw(e){for(var t=e.length,n=-1,r={},o;++n<t;)o=e[n],r[o.toLowerCase()]=o;return r}var bw=Wb,ww=uw,Wm=ww(bw,"div");Wm.displayName="html";var xw=Wm,Cw=xw;const Sw="Æ",kw="&",_w="Á",Tw="Â",Lw="À",$w="Å",Ew="Ã",Nw="Ä",Iw="©",Mw="Ç",Rw="Ð",Pw="É",Aw="Ê",Fw="È",Ow="Ë",Dw=">",Bw="Í",jw="Î",zw="Ì",Uw="Ï",Ww="<",Hw="Ñ",Vw="Ó",Gw="Ô",Yw="Ò",Zw="Ø",qw="Õ",Qw="Ö",Kw='"',Xw="®",Jw="Þ",ex="Ú",tx="Û",nx="Ù",rx="Ü",ax="Ý",ox="á",lx="â",ix="´",sx="æ",cx="à",dx="&",ux="å",hx="ã",fx="ä",px="¦",gx="ç",mx="¸",vx="¢",yx="©",bx="¤",wx="°",xx="÷",Cx="é",Sx="ê",kx="è",_x="ð",Tx="ë",Lx="½",$x="¼",Ex="¾",Nx=">",Ix="í",Mx="î",Rx="¡",Px="ì",Ax="¿",Fx="ï",Ox="«",Dx="<",Bx="¯",jx="µ",zx="·",Ux=" ",Wx="¬",Hx="ñ",Vx="ó",Gx="ô",Yx="ò",Zx="ª",qx="º",Qx="ø",Kx="õ",Xx="ö",Jx="¶",eC="±",tC="£",nC='"',rC="»",aC="®",oC="§",lC="­",iC="¹",sC="²",cC="³",dC="ß",uC="þ",hC="×",fC="ú",pC="û",gC="ù",mC="¨",vC="ü",yC="ý",bC="¥",wC="ÿ",xC={AElig:Sw,AMP:kw,Aacute:_w,Acirc:Tw,Agrave:Lw,Aring:$w,Atilde:Ew,Auml:Nw,COPY:Iw,Ccedil:Mw,ETH:Rw,Eacute:Pw,Ecirc:Aw,Egrave:Fw,Euml:Ow,GT:Dw,Iacute:Bw,Icirc:jw,Igrave:zw,Iuml:Uw,LT:Ww,Ntilde:Hw,Oacute:Vw,Ocirc:Gw,Ograve:Yw,Oslash:Zw,Otilde:qw,Ouml:Qw,QUOT:Kw,REG:Xw,THORN:Jw,Uacute:ex,Ucirc:tx,Ugrave:nx,Uuml:rx,Yacute:ax,aacute:ox,acirc:lx,acute:ix,aelig:sx,agrave:cx,amp:dx,aring:ux,atilde:hx,auml:fx,brvbar:px,ccedil:gx,cedil:mx,cent:vx,copy:yx,curren:bx,deg:wx,divide:xx,eacute:Cx,ecirc:Sx,egrave:kx,eth:_x,euml:Tx,frac12:Lx,frac14:$x,frac34:Ex,gt:Nx,iacute:Ix,icirc:Mx,iexcl:Rx,igrave:Px,iquest:Ax,iuml:Fx,laquo:Ox,lt:Dx,macr:Bx,micro:jx,middot:zx,nbsp:Ux,not:Wx,ntilde:Hx,oacute:Vx,ocirc:Gx,ograve:Yx,ordf:Zx,ordm:qx,oslash:Qx,otilde:Kx,ouml:Xx,para:Jx,plusmn:eC,pound:tC,quot:nC,raquo:rC,reg:aC,sect:oC,shy:lC,sup1:iC,sup2:sC,sup3:cC,szlig:dC,thorn:uC,times:hC,uacute:fC,ucirc:pC,ugrave:gC,uml:mC,uuml:vC,yacute:yC,yen:bC,yuml:wC},CC={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var Hm=SC;function SC(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var kC=_C;function _C(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var TC=LC;function LC(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var $C=TC,EC=Hm,NC=IC;function IC(e){return $C(e)||EC(e)}var ts,MC=59,RC=PC;function PC(e){var t="&"+e+";",n;return ts=ts||document.createElement("i"),ts.innerHTML=t,n=ts.textContent,n.charCodeAt(n.length-1)===MC&&e!=="semi"||n===t?!1:n}var D2=xC,B2=CC,AC=Hm,FC=kC,Vm=NC,OC=RC,DC=KC,BC={}.hasOwnProperty,Xa=String.fromCharCode,jC=Function.prototype,j2={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},zC=9,z2=10,UC=12,WC=32,U2=38,HC=59,VC=60,GC=61,YC=35,ZC=88,qC=120,QC=65533,eo="named",bf="hexadecimal",wf="decimal",xf={};xf[bf]=16;xf[wf]=10;var Nc={};Nc[eo]=Vm;Nc[wf]=AC;Nc[bf]=FC;var Gm=1,Ym=2,Zm=3,qm=4,Qm=5,Ju=6,Km=7,Qr={};Qr[Gm]="Named character references must be terminated by a semicolon";Qr[Ym]="Numeric character references must be terminated by a semicolon";Qr[Zm]="Named character references cannot be empty";Qr[qm]="Numeric character references cannot be empty";Qr[Qm]="Named character references must be known";Qr[Ju]="Numeric character references cannot be disallowed";Qr[Km]="Numeric character references cannot be outside the permissible Unicode range";function KC(e,t){var n={},r,o;t||(t={});for(o in j2)r=t[o],n[o]=r??j2[o];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),XC(e,n)}function XC(e,t){var n=t.additional,r=t.nonTerminated,o=t.text,l=t.reference,i=t.warning,s=t.textContext,d=t.referenceContext,f=t.warningContext,m=t.position,b=t.indent||[],C=e.length,N=0,E=-1,S=m.column||1,I=m.line||1,w="",g=[],y,v,L,_,P,O,z,Z,he,se,ze,ot,Ge,Be,Ye,U,q,J,oe;for(typeof n=="string"&&(n=n.charCodeAt(0)),U=fe(),Z=i?Bt:jC,N--,C++;++N<C;)if(P===z2&&(S=b[E]||1),P=e.charCodeAt(N),P===U2){if(z=e.charCodeAt(N+1),z===zC||z===z2||z===UC||z===WC||z===U2||z===VC||z!==z||n&&z===n){w+=Xa(P),S++;continue}for(Ge=N+1,ot=Ge,oe=Ge,z===YC?(oe=++ot,z=e.charCodeAt(oe),z===ZC||z===qC?(Be=bf,oe=++ot):Be=wf):Be=eo,y="",ze="",_="",Ye=Nc[Be],oe--;++oe<C&&(z=e.charCodeAt(oe),!!Ye(z));)_+=Xa(z),Be===eo&&BC.call(D2,_)&&(y=_,ze=D2[_]);L=e.charCodeAt(oe)===HC,L&&(oe++,v=Be===eo?OC(_):!1,v&&(y=_,ze=v)),J=1+oe-Ge,!L&&!r||(_?Be===eo?(L&&!ze?Z(Qm,1):(y!==_&&(oe=ot+y.length,J=1+oe-ot,L=!1),L||(he=y?Gm:Zm,t.attribute?(z=e.charCodeAt(oe),z===GC?(Z(he,J),ze=null):Vm(z)?ze=null:Z(he,J)):Z(he,J))),O=ze):(L||Z(Ym,J),O=parseInt(_,xf[Be]),JC(O)?(Z(Km,J),O=Xa(QC)):O in B2?(Z(Ju,J),O=B2[O]):(se="",eS(O)&&Z(Ju,J),O>65535&&(O-=65536,se+=Xa(O>>>10|55296),O=56320|O&1023),O=se+Xa(O))):Be!==eo&&Z(qm,J)),O?(pe(),U=fe(),N=oe-1,S+=oe-Ge+1,g.push(O),q=fe(),q.offset++,l&&l.call(d,O,{start:U,end:q},e.slice(Ge-1,oe)),U=q):(_=e.slice(Ge-1,oe),w+=_,S+=_.length,N=oe-1)}else P===10&&(I++,E++,S=0),P===P?(w+=Xa(P),S++):pe();return g.join("");function fe(){return{line:I,column:S,offset:N+(m.offset||0)}}function Bt(tt,Ze){var ft=fe();ft.column+=Ze,ft.offset+=Ze,i.call(f,Qr[tt],ft,tt)}function pe(){w&&(g.push(w),o&&o.call(s,w,{start:U,end:fe()}),w="")}}function JC(e){return e>=55296&&e<=57343||e>1114111}function eS(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var Xm={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,l=0,i={},s={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function g(y){return y instanceof d?new d(y.type,g(y.content),y.alias):Array.isArray(y)?y.map(g):y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++l}),g.__id},clone:function g(y,v){v=v||{};var L,_;switch(s.util.type(y)){case"Object":if(_=s.util.objId(y),v[_])return v[_];L={},v[_]=L;for(var P in y)y.hasOwnProperty(P)&&(L[P]=g(y[P],v));return L;case"Array":return _=s.util.objId(y),v[_]?v[_]:(L=[],v[_]=L,y.forEach(function(O,z){L[z]=g(O,v)}),L);default:return y}},getLanguage:function(g){for(;g;){var y=o.exec(g.className);if(y)return y[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,y){g.className=g.className.replace(RegExp(o,"gi"),""),g.classList.add("language-"+y)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(L){var g=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(L.stack)||[])[1];if(g){var y=document.getElementsByTagName("script");for(var v in y)if(y[v].src==g)return y[v]}return null}},isActive:function(g,y,v){for(var L="no-"+y;g;){var _=g.classList;if(_.contains(y))return!0;if(_.contains(L))return!1;g=g.parentElement}return!!v}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(g,y){var v=s.util.clone(s.languages[g]);for(var L in y)v[L]=y[L];return v},insertBefore:function(g,y,v,L){L=L||s.languages;var _=L[g],P={};for(var O in _)if(_.hasOwnProperty(O)){if(O==y)for(var z in v)v.hasOwnProperty(z)&&(P[z]=v[z]);v.hasOwnProperty(O)||(P[O]=_[O])}var Z=L[g];return L[g]=P,s.languages.DFS(s.languages,function(he,se){se===Z&&he!=g&&(this[he]=P)}),P},DFS:function g(y,v,L,_){_=_||{};var P=s.util.objId;for(var O in y)if(y.hasOwnProperty(O)){v.call(y,O,y[O],L||O);var z=y[O],Z=s.util.type(z);Z==="Object"&&!_[P(z)]?(_[P(z)]=!0,g(z,v,null,_)):Z==="Array"&&!_[P(z)]&&(_[P(z)]=!0,g(z,v,O,_))}}},plugins:{},highlightAll:function(g,y){s.highlightAllUnder(document,g,y)},highlightAllUnder:function(g,y,v){var L={callback:v,container:g,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",L),L.elements=Array.prototype.slice.apply(L.container.querySelectorAll(L.selector)),s.hooks.run("before-all-elements-highlight",L);for(var _=0,P;P=L.elements[_++];)s.highlightElement(P,y===!0,L.callback)},highlightElement:function(g,y,v){var L=s.util.getLanguage(g),_=s.languages[L];s.util.setLanguage(g,L);var P=g.parentElement;P&&P.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(P,L);var O=g.textContent,z={element:g,language:L,grammar:_,code:O};function Z(se){z.highlightedCode=se,s.hooks.run("before-insert",z),z.element.innerHTML=z.highlightedCode,s.hooks.run("after-highlight",z),s.hooks.run("complete",z),v&&v.call(z.element)}if(s.hooks.run("before-sanity-check",z),P=z.element.parentElement,P&&P.nodeName.toLowerCase()==="pre"&&!P.hasAttribute("tabindex")&&P.setAttribute("tabindex","0"),!z.code){s.hooks.run("complete",z),v&&v.call(z.element);return}if(s.hooks.run("before-highlight",z),!z.grammar){Z(s.util.encode(z.code));return}if(y&&r.Worker){var he=new Worker(s.filename);he.onmessage=function(se){Z(se.data)},he.postMessage(JSON.stringify({language:z.language,code:z.code,immediateClose:!0}))}else Z(s.highlight(z.code,z.grammar,z.language))},highlight:function(g,y,v){var L={code:g,grammar:y,language:v};if(s.hooks.run("before-tokenize",L),!L.grammar)throw new Error('The language "'+L.language+'" has no grammar.');return L.tokens=s.tokenize(L.code,L.grammar),s.hooks.run("after-tokenize",L),d.stringify(s.util.encode(L.tokens),L.language)},tokenize:function(g,y){var v=y.rest;if(v){for(var L in v)y[L]=v[L];delete y.rest}var _=new b;return C(_,_.head,g),m(g,_,y,_.head,0),E(_)},hooks:{all:{},add:function(g,y){var v=s.hooks.all;v[g]=v[g]||[],v[g].push(y)},run:function(g,y){var v=s.hooks.all[g];if(!(!v||!v.length))for(var L=0,_;_=v[L++];)_(y)}},Token:d};r.Prism=s;function d(g,y,v,L){this.type=g,this.content=y,this.alias=v,this.length=(L||"").length|0}d.stringify=function g(y,v){if(typeof y=="string")return y;if(Array.isArray(y)){var L="";return y.forEach(function(Z){L+=g(Z,v)}),L}var _={type:y.type,content:g(y.content,v),tag:"span",classes:["token",y.type],attributes:{},language:v},P=y.alias;P&&(Array.isArray(P)?Array.prototype.push.apply(_.classes,P):_.classes.push(P)),s.hooks.run("wrap",_);var O="";for(var z in _.attributes)O+=" "+z+'="'+(_.attributes[z]||"").replace(/"/g,"&quot;")+'"';return"<"+_.tag+' class="'+_.classes.join(" ")+'"'+O+">"+_.content+"</"+_.tag+">"};function f(g,y,v,L){g.lastIndex=y;var _=g.exec(v);if(_&&L&&_[1]){var P=_[1].length;_.index+=P,_[0]=_[0].slice(P)}return _}function m(g,y,v,L,_,P){for(var O in v)if(!(!v.hasOwnProperty(O)||!v[O])){var z=v[O];z=Array.isArray(z)?z:[z];for(var Z=0;Z<z.length;++Z){if(P&&P.cause==O+","+Z)return;var he=z[Z],se=he.inside,ze=!!he.lookbehind,ot=!!he.greedy,Ge=he.alias;if(ot&&!he.pattern.global){var Be=he.pattern.toString().match(/[imsuy]*$/)[0];he.pattern=RegExp(he.pattern.source,Be+"g")}for(var Ye=he.pattern||he,U=L.next,q=_;U!==y.tail&&!(P&&q>=P.reach);q+=U.value.length,U=U.next){var J=U.value;if(y.length>g.length)return;if(!(J instanceof d)){var oe=1,fe;if(ot){if(fe=f(Ye,q,g,ze),!fe||fe.index>=g.length)break;var Ze=fe.index,Bt=fe.index+fe[0].length,pe=q;for(pe+=U.value.length;Ze>=pe;)U=U.next,pe+=U.value.length;if(pe-=U.value.length,q=pe,U.value instanceof d)continue;for(var tt=U;tt!==y.tail&&(pe<Bt||typeof tt.value=="string");tt=tt.next)oe++,pe+=tt.value.length;oe--,J=g.slice(q,pe),fe.index-=q}else if(fe=f(Ye,0,J,ze),!fe)continue;var Ze=fe.index,ft=fe[0],Pt=J.slice(0,Ze),Xr=J.slice(Ze+ft.length),Jr=q+J.length;P&&Jr>P.reach&&(P.reach=Jr);var Jn=U.prev;Pt&&(Jn=C(y,Jn,Pt),q+=Pt.length),N(y,Jn,oe);var Wo=new d(O,se?s.tokenize(ft,se):ft,Ge,ft);if(U=C(y,Jn,Wo),Xr&&C(y,U,Xr),oe>1){var ea={cause:O+","+Z,reach:Jr};m(g,y,v,U.prev,q,ea),P&&ea.reach>P.reach&&(P.reach=ea.reach)}}}}}}function b(){var g={value:null,prev:null,next:null},y={value:null,prev:g,next:null};g.next=y,this.head=g,this.tail=y,this.length=0}function C(g,y,v){var L=y.next,_={value:v,prev:y,next:L};return y.next=_,L.prev=_,g.length++,_}function N(g,y,v){for(var L=y.next,_=0;_<v&&L!==g.tail;_++)L=L.next;y.next=L,L.prev=y,g.length-=_}function E(g){for(var y=[],v=g.head.next;v!==g.tail;)y.push(v.value),v=v.next;return y}if(!r.document)return r.addEventListener&&(s.disableWorkerMessageHandler||r.addEventListener("message",function(g){var y=JSON.parse(g.data),v=y.language,L=y.code,_=y.immediateClose;r.postMessage(s.highlight(L,s.languages[v],v)),_&&r.close()},!1)),s;var S=s.util.currentScript();S&&(s.filename=S.src,S.hasAttribute("data-manual")&&(s.manual=!0));function I(){s.manual||s.highlightAll()}if(!s.manual){var w=document.readyState;w==="loading"||w==="interactive"&&S&&S.defer?document.addEventListener("DOMContentLoaded",I):window.requestAnimationFrame?window.requestAnimationFrame(I):window.setTimeout(I,16)}return s}(t);e.exports&&(e.exports=n),typeof Dl<"u"&&(Dl.Prism=n)})(Xm);var tS=Xm.exports,nS=Cf;Cf.displayName="markup";Cf.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function Cf(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,r){var o={};o["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[r]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};l["language-"+r]={pattern:/[\s\S]+/,inside:e.languages[r]};var i={};i[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:l},e.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var Jm=Sf;Sf.displayName="css";Sf.aliases=[];function Sf(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var r=t.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(e)}const rS=Kn(Jm);var aS=kf;kf.displayName="clike";kf.aliases=[];function kf(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var oS=_f;_f.displayName="javascript";_f.aliases=["js"];function _f(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var xl=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof Dl=="object"?Dl:{},lS=CS();xl.Prism={manual:!0,disableWorkerMessageHandler:!0};var iS=Cw,sS=DC,ev=tS,cS=nS,dS=Jm,uS=aS,hS=oS;lS();var Tf={}.hasOwnProperty;function tv(){}tv.prototype=ev;var ht=new tv,fS=ht;ht.highlight=gS;ht.register=mi;ht.alias=pS;ht.registered=mS;ht.listLanguages=vS;mi(cS);mi(dS);mi(uS);mi(hS);ht.util.encode=wS;ht.Token.stringify=yS;function mi(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");ht.languages[e.displayName]===void 0&&e(ht)}function pS(e,t){var n=ht.languages,r=e,o,l,i,s;t&&(r={},r[e]=t);for(o in r)for(l=r[o],l=typeof l=="string"?[l]:l,i=l.length,s=-1;++s<i;)n[l[s]]=n[o]}function gS(e,t){var n=ev.highlight,r;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(ht.util.type(t)==="Object")r=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(Tf.call(ht.languages,t))r=ht.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,r,t)}function mS(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return Tf.call(ht.languages,e)}function vS(){var e=ht.languages,t=[],n;for(n in e)Tf.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function yS(e,t,n){var r;return typeof e=="string"?{type:"text",value:e}:ht.util.type(e)==="Array"?bS(e,t):(r={type:e.type,content:ht.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(r.classes=r.classes.concat(e.alias)),ht.hooks.run("wrap",r),iS(r.tag+"."+r.classes.join("."),xS(r.attributes),r.content))}function bS(e,t){for(var n=[],r=e.length,o=-1,l;++o<r;)l=e[o],l!==""&&l!==null&&l!==void 0&&n.push(l);for(o=-1,r=n.length;++o<r;)l=n[o],n[o]=ht.Token.stringify(l,t,n);return n}function wS(e){return e}function xS(e){var t;for(t in e)e[t]=sS(e[t]);return e}function CS(){var e="Prism"in xl,t=e?xl.Prism:void 0;return n;function n(){e?xl.Prism=t:delete xl.Prism,e=void 0,t=void 0}}const Lf=Kn(fS);var $f=ab(Lf,{});$f.registerLanguage=function(e,t){return Lf.register(t)};$f.alias=function(e,t){return Lf.alias(e,t)};const Pa=$f;var SS=Ef;Ef.displayName="bash";Ef.aliases=["shell"];function Ef(e){(function(t){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:r,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=t.languages.bash;for(var l=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=o.variable[1].inside,s=0;s<l.length;s++)i[l[s]]=t.languages.bash[l[s]];t.languages.shell=t.languages.bash})(e)}const kS=Kn(SS);var _S=Nf;Nf.displayName="json";Nf.aliases=["webmanifest"];function Nf(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}const TS=Kn(_S);var LS=If;If.displayName="jsx";If.aliases=[];function If(e){(function(t){var n=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,o=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,l=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function i(f,m){return f=f.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return o}).replace(/<SPREAD>/g,function(){return l}),RegExp(f,m)}l=i(l).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:i(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:i(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var s=function(f){return f?typeof f=="string"?f:typeof f.content=="string"?f.content:f.content.map(s).join(""):""},d=function(f){for(var m=[],b=0;b<f.length;b++){var C=f[b],N=!1;if(typeof C!="string"&&(C.type==="tag"&&C.content[0]&&C.content[0].type==="tag"?C.content[0].content[0].content==="</"?m.length>0&&m[m.length-1].tagName===s(C.content[0].content[1])&&m.pop():C.content[C.content.length-1].content==="/>"||m.push({tagName:s(C.content[0].content[1]),openedBraces:0}):m.length>0&&C.type==="punctuation"&&C.content==="{"?m[m.length-1].openedBraces++:m.length>0&&m[m.length-1].openedBraces>0&&C.type==="punctuation"&&C.content==="}"?m[m.length-1].openedBraces--:N=!0),(N||typeof C=="string")&&m.length>0&&m[m.length-1].openedBraces===0){var E=s(C);b<f.length-1&&(typeof f[b+1]=="string"||f[b+1].type==="plain-text")&&(E+=s(f[b+1]),f.splice(b+1,1)),b>0&&(typeof f[b-1]=="string"||f[b-1].type==="plain-text")&&(E=s(f[b-1])+E,f.splice(b-1,1),b--),f[b]=new t.Token("plain-text",E,null,E)}C.content&&typeof C.content!="string"&&d(C.content)}};t.hooks.add("after-tokenize",function(f){f.language!=="jsx"&&f.language!=="tsx"||d(f.tokens)})})(e)}const $S=Kn(LS);var ES=Mf;Mf.displayName="scss";Mf.aliases=[];function Mf(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const NS=Kn(ES);var IS=Rf;Rf.displayName="yaml";Rf.aliases=["yml"];function Rf(e){(function(t){var n=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,o="(?:"+r.source+"(?:[ 	]+"+n.source+")?|"+n.source+"(?:[ 	]+"+r.source+")?)",l=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),i=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function s(d,f){f=(f||"").replace(/m/g,"")+"m";var m=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return o}).replace(/<<value>>/g,function(){return d});return RegExp(m,f)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return o})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return o}).replace(/<<key>>/g,function(){return"(?:"+l+"|"+i+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:s(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:s(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:s(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:s(i),lookbehind:!0,greedy:!0},number:{pattern:s(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:n,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml})(e)}const MS=Kn(IS);function nv(e){return typeof e=="string"}function RS(e){return Array.isArray(e)}function PS(e){return e===void 0}function AS(e){return e===null}function Lt(e){return!(PS(e)||AS(e))}function FS(e){return!Lt(e)}function OS(...e){throw new Error(e.join(""))}function DS(){return Intl.DateTimeFormat().resolvedOptions().locale}DS();const vi=(e,t,n=1)=>{const r=t<e?-Math.abs(n):n;return Array(1+Math.floor(Math.abs((t-e)/n))).fill(e).map((o,l)=>o+l*r)};function rv(e){return FS(e)?[]:nv(e)?e.length?e.split(/,\s*|\s+/):[]:RS(e)?e:[e]}function BS(e){return new Promise(t=>setTimeout(t,e))}Pa.registerLanguage("jsx",$S);Pa.registerLanguage("json",TS);Pa.registerLanguage("css",rS);Pa.registerLanguage("scss",NS);Pa.registerLanguage("bash",kS);Pa.registerLanguage("yaml",MS);const Re=({code:e,language:t="jsx",caption:n,expand:r=!1,fixed:o=r,className:l=""})=>{const[i,s]=j.useState(!1),[d,f]=j.useState(r),m=()=>{navigator.clipboard.writeText(e),s(!0),BS(2e3).then(()=>s(!1))};return u("div",{className:`codeblock ${l} ${d?"expanded":""} ${o?"fixed-open":"expandable"}`,children:[!!n&&a("h4",{className:"caption",children:n}),u("div",{className:"controls",children:[a("div",{className:"expand",onClick:()=>f(!d),children:d?"Compress":"Expand"}),a("div",{className:`clipboard ${i?"copied":""}`,onClick:m,children:i?"Copied":"Copy"})]}),a(Pa,{language:t,showLineNumbers:!0,useInlineStyles:!1,customStyle:{},children:jS(e)})]})},jS=e=>e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/\/\*\s*REAL\s*\*\/.*?\/\*\s*UNREAL\s*\*\//g,"").replaceAll(/{\/\*\s*(UN?)PRETEND\s*\*\/}/g,"").replace(/\n+$/,""),zS=`// define your brand hue and color name
$purple-hue:   295;
$brand-hue:    $purple-hue;
$brand-color:  'purple';

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,US=`// define your own brand colors...
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
`,WS=`// define your own brand colors and greyscale hues...
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
`,HS=`// define the colors that you want to use...
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
 */function Me(){return Me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Me.apply(this,arguments)}var dt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dt||(dt={}));const W2="popstate";function VS(e){e===void 0&&(e={});function t(r,o){let{pathname:l,search:i,hash:s}=r.location;return ri("",{pathname:l,search:i,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Na(o)}return YS(t,n,null,e)}function Se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ro(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function GS(){return Math.random().toString(36).substr(2,8)}function H2(e,t){return{usr:e.state,key:e.key,idx:t}}function ri(e,t,n,r){return n===void 0&&(n=null),Me({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?br(t):t,{state:n,key:t&&t.key||r||GS()})}function Na(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function br(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function YS(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,s=dt.Pop,d=null,f=m();f==null&&(f=0,i.replaceState(Me({},i.state,{idx:f}),""));function m(){return(i.state||{idx:null}).idx}function b(){s=dt.Pop;let I=m(),w=I==null?null:I-f;f=I,d&&d({action:s,location:S.location,delta:w})}function C(I,w){s=dt.Push;let g=ri(S.location,I,w);n&&n(g,I),f=m()+1;let y=H2(g,f),v=S.createHref(g);try{i.pushState(y,"",v)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;o.location.assign(v)}l&&d&&d({action:s,location:S.location,delta:1})}function N(I,w){s=dt.Replace;let g=ri(S.location,I,w);n&&n(g,I),f=m();let y=H2(g,f),v=S.createHref(g);i.replaceState(y,"",v),l&&d&&d({action:s,location:S.location,delta:0})}function E(I){let w=o.location.origin!=="null"?o.location.origin:o.location.href,g=typeof I=="string"?I:Na(I);return Se(w,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,w)}let S={get action(){return s},get location(){return e(o,i)},listen(I){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(W2,b),d=I,()=>{o.removeEventListener(W2,b),d=null}},createHref(I){return t(o,I)},createURL:E,encodeLocation(I){let w=E(I);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:C,replace:N,go(I){return i.go(I)}};return S}var mt;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(mt||(mt={}));const ZS=new Set(["lazy","caseSensitive","path","id","index","children"]);function qS(e){return e.index===!0}function eh(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,l)=>{let i=[...n,l],s=typeof o.id=="string"?o.id:i.join("-");if(Se(o.index!==!0||!o.children,"Cannot specify children on an index route"),Se(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),qS(o)){let d=Me({},o,t(o),{id:s});return r[s]=d,d}else{let d=Me({},o,t(o),{id:s,children:void 0});return r[s]=d,o.children&&(d.children=eh(o.children,t,i,r)),d}})}function mo(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?br(t):t,o=Bo(r.pathname||"/",n);if(o==null)return null;let l=av(e);QS(l);let i=null;for(let s=0;i==null&&s<l.length;++s)i=ok(l[s],sk(o));return i}function av(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,s)=>{let d={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};d.relativePath.startsWith("/")&&(Se(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let f=ur([r,d.relativePath]),m=n.concat(d);l.children&&l.children.length>0&&(Se(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),av(l.children,t,m,f)),!(l.path==null&&!l.index)&&t.push({path:f,score:rk(f,l.index),routesMeta:m})};return e.forEach((l,i)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))o(l,i);else for(let d of ov(l.path))o(l,i,d)}),t}function ov(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=ov(r.join("/")),s=[];return s.push(...i.map(d=>d===""?l:[l,d].join("/"))),o&&s.push(...i),s.map(d=>e.startsWith("/")&&d===""?"/":d)}function QS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ak(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const KS=/^:\w+$/,XS=3,JS=2,ek=1,tk=10,nk=-2,V2=e=>e==="*";function rk(e,t){let n=e.split("/"),r=n.length;return n.some(V2)&&(r+=nk),t&&(r+=JS),n.filter(o=>!V2(o)).reduce((o,l)=>o+(KS.test(l)?XS:l===""?ek:tk),r)}function ak(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function ok(e,t){let{routesMeta:n}=e,r={},o="/",l=[];for(let i=0;i<n.length;++i){let s=n[i],d=i===n.length-1,f=o==="/"?t:t.slice(o.length)||"/",m=lk({path:s.relativePath,caseSensitive:s.caseSensitive,end:d},f);if(!m)return null;Object.assign(r,m.params);let b=s.route;l.push({params:r,pathname:ur([o,m.pathname]),pathnameBase:hk(ur([o,m.pathnameBase])),route:b}),m.pathnameBase!=="/"&&(o=ur([o,m.pathnameBase]))}return l}function lk(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ik(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((f,m,b)=>{if(m==="*"){let C=s[b]||"";i=l.slice(0,l.length-C.length).replace(/(.)\/+$/,"$1")}return f[m]=ck(s[b]||"",m),f},{}),pathname:l,pathnameBase:i,pattern:e}}function ik(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ro(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function sk(e){try{return decodeURI(e)}catch(t){return Ro(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ck(e,t){try{return decodeURIComponent(e)}catch(n){return Ro(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Bo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function dk(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?br(e):e;return{pathname:n?n.startsWith("/")?n:uk(n,t):t,search:fk(r),hash:pk(o)}}function uk(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Wd(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ic(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Pf(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=br(e):(o=Me({},e),Se(!o.pathname||!o.pathname.includes("?"),Wd("?","pathname","search",o)),Se(!o.pathname||!o.pathname.includes("#"),Wd("#","pathname","hash",o)),Se(!o.search||!o.search.includes("#"),Wd("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,s;if(r||i==null)s=n;else{let b=t.length-1;if(i.startsWith("..")){let C=i.split("/");for(;C[0]==="..";)C.shift(),b-=1;o.pathname=C.join("/")}s=b>=0?t[b]:"/"}let d=dk(o,s),f=i&&i!=="/"&&i.endsWith("/"),m=(l||i===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(f||m)&&(d.pathname+="/"),d}const ur=e=>e.join("/").replace(/\/\/+/g,"/"),hk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,pk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Af{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function lv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const iv=["post","put","patch","delete"],gk=new Set(iv),mk=["get",...iv],vk=new Set(mk),yk=new Set([301,302,303,307,308]),bk=new Set([307,308]),Hd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},wk={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},G2={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},sv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xk=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function Ck(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;Se(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let F=e.detectErrorBoundary;o=D=>({hasErrorBoundary:F(D)})}else o=xk;let l={},i=eh(e.routes,o,void 0,l),s,d=e.basename||"/",f=Me({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),m=null,b=new Set,C=null,N=null,E=null,S=e.hydrationData!=null,I=mo(i,e.history.location,d),w=null;if(I==null){let F=Pn(404,{pathname:e.history.location.pathname}),{matches:D,route:H}=J2(i);I=D,w={[H.id]:F}}let g=!I.some(F=>F.route.lazy)&&(!I.some(F=>F.route.loader)||e.hydrationData!=null),y,v={historyAction:e.history.action,location:e.history.location,matches:I,initialized:g,navigation:Hd,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||w,fetchers:new Map,blockers:new Map},L=dt.Pop,_=!1,P,O=!1,z=!1,Z=[],he=[],se=new Map,ze=0,ot=-1,Ge=new Map,Be=new Set,Ye=new Map,U=new Map,q=new Map,J=!1;function oe(){return m=e.history.listen(F=>{let{action:D,location:H,delta:Q}=F;if(J){J=!1;return}Ro(q.size===0||Q!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ie=Qo({currentLocation:v.location,nextLocation:H,historyAction:D});if(ie&&Q!=null){J=!0,e.history.go(Q*-1),ra(ie,{state:"blocked",location:H,proceed(){ra(ie,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),e.history.go(Q)},reset(){wr(ie),pe({blockers:new Map(y.state.blockers)})}});return}return Pt(D,H)}),v.initialized||Pt(dt.Pop,v.location),y}function fe(){m&&m(),b.clear(),P&&P.abort(),v.fetchers.forEach((F,D)=>Go(D)),v.blockers.forEach((F,D)=>wr(D))}function Bt(F){return b.add(F),()=>b.delete(F)}function pe(F){v=Me({},v,F),b.forEach(D=>D(v))}function tt(F,D){var H,Q;let ie=v.actionData!=null&&v.navigation.formMethod!=null&&lr(v.navigation.formMethod)&&v.navigation.state==="loading"&&((H=F.state)==null?void 0:H._isRedirect)!==!0,ce;D.actionData?Object.keys(D.actionData).length>0?ce=D.actionData:ce=null:ie?ce=v.actionData:ce=null;let de=D.loaderData?X2(v.loaderData,D.loaderData,D.matches||[],D.errors):v.loaderData;for(let[ae]of q)wr(ae);let ue=_===!0||v.navigation.formMethod!=null&&lr(v.navigation.formMethod)&&((Q=F.state)==null?void 0:Q._isRedirect)!==!0;s&&(i=s,s=void 0),pe(Me({},D,{actionData:ce,loaderData:de,historyAction:L,location:F,initialized:!0,navigation:Hd,revalidation:"idle",restoreScrollPosition:Ti(F,D.matches||v.matches),preventScrollReset:ue,blockers:new Map(v.blockers)})),O||L===dt.Pop||(L===dt.Push?e.history.push(F,F.state):L===dt.Replace&&e.history.replace(F,F.state)),L=dt.Pop,_=!1,O=!1,z=!1,Z=[],he=[]}async function Ze(F,D){if(typeof F=="number"){e.history.go(F);return}let H=th(v.location,v.matches,d,f.v7_prependBasename,F,D==null?void 0:D.fromRouteId,D==null?void 0:D.relative),{path:Q,submission:ie,error:ce}=Y2(f.v7_normalizeFormMethod,!1,H,D),de=v.location,ue=ri(v.location,Q,D&&D.state);ue=Me({},ue,e.history.encodeLocation(ue));let ae=D&&D.replace!=null?D.replace:void 0,Te=dt.Push;ae===!0?Te=dt.Replace:ae===!1||ie!=null&&lr(ie.formMethod)&&ie.formAction===v.location.pathname+v.location.search&&(Te=dt.Replace);let Pe=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,bt=Qo({currentLocation:de,nextLocation:ue,historyAction:Te});if(bt){ra(bt,{state:"blocked",location:ue,proceed(){ra(bt,{state:"proceeding",proceed:void 0,reset:void 0,location:ue}),Ze(F,D)},reset(){wr(bt),pe({blockers:new Map(v.blockers)})}});return}return await Pt(Te,ue,{submission:ie,pendingError:ce,preventScrollReset:Pe,replace:D&&D.replace})}function ft(){if(Vo(),pe({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){Pt(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}Pt(L||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function Pt(F,D,H){P&&P.abort(),P=null,L=F,O=(H&&H.startUninterruptedRevalidation)===!0,_i(v.location,v.matches),_=(H&&H.preventScrollReset)===!0;let Q=s||i,ie=H&&H.overrideNavigation,ce=mo(Q,D,d);if(!ce){let st=Pn(404,{pathname:D.pathname}),{matches:pt,route:yn}=J2(Q);Oa(),tt(D,{matches:pt,loaderData:{},errors:{[yn.id]:st}});return}if(v.initialized&&!z&&Lk(v.location,D)&&!(H&&H.submission&&lr(H.submission.formMethod))){tt(D,{matches:ce});return}P=new AbortController;let de=pl(e.history,D,P.signal,H&&H.submission),ue,ae;if(H&&H.pendingError)ae={[vo(ce).route.id]:H.pendingError};else if(H&&H.submission&&lr(H.submission.formMethod)){let st=await Xr(de,D,H.submission,ce,{replace:H.replace});if(st.shortCircuited)return;ue=st.pendingActionData,ae=st.pendingActionError,ie=Me({state:"loading",location:D},H.submission),de=new Request(de.url,{signal:de.signal})}let{shortCircuited:Te,loaderData:Pe,errors:bt}=await Jr(de,D,ce,ie,H&&H.submission,H&&H.fetcherSubmission,H&&H.replace,ue,ae);Te||(P=null,tt(D,Me({matches:ce},ue?{actionData:ue}:{},{loaderData:Pe,errors:bt})))}async function Xr(F,D,H,Q,ie){Vo();let ce=Me({state:"submitting",location:D},H);pe({navigation:ce});let de,ue=nh(Q,D);if(!ue.route.action&&!ue.route.lazy)de={type:mt.error,error:Pn(405,{method:F.method,pathname:D.pathname,routeId:ue.route.id})};else if(de=await fl("action",F,ue,Q,l,o,d),F.signal.aborted)return{shortCircuited:!0};if(ko(de)){let ae;return ie&&ie.replace!=null?ae=ie.replace:ae=de.location===v.location.pathname+v.location.search,await ta(v,de,{submission:H,replace:ae}),{shortCircuited:!0}}if(Al(de)){let ae=vo(Q,ue.route.id);return(ie&&ie.replace)!==!0&&(L=dt.Push),{pendingActionData:{},pendingActionError:{[ae.route.id]:de.error}}}if(ba(de))throw Pn(400,{type:"defer-action"});return{pendingActionData:{[ue.route.id]:de.data}}}async function Jr(F,D,H,Q,ie,ce,de,ue,ae){let Te=Q;Te||(Te=Me({state:"loading",location:D,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ie));let Pe=ie||ce?ie||ce:Te.formMethod&&Te.formAction&&Te.formData&&Te.formEncType?{formMethod:Te.formMethod,formAction:Te.formAction,formData:Te.formData,formEncType:Te.formEncType}:void 0,bt=s||i,[st,pt]=Z2(e.history,v,H,Pe,D,z,Z,he,Ye,bt,d,ue,ae);if(Oa(je=>!(H&&H.some(Zt=>Zt.route.id===je))||st&&st.some(Zt=>Zt.route.id===je)),st.length===0&&pt.length===0){let je=Zo();return tt(D,Me({matches:H,loaderData:{},errors:ae||null},ue?{actionData:ue}:{},je?{fetchers:new Map(v.fetchers)}:{})),{shortCircuited:!0}}if(!O){pt.forEach(Zt=>{let tr=v.fetchers.get(Zt.key),gt={state:"loading",data:tr&&tr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(Zt.key,gt)});let je=ue||v.actionData;pe(Me({navigation:Te},je?Object.keys(je).length===0?{actionData:null}:{actionData:je}:{},pt.length>0?{fetchers:new Map(v.fetchers)}:{}))}ot=++ze,pt.forEach(je=>{je.controller&&se.set(je.key,je.controller)});let yn=()=>pt.forEach(je=>er(je.key));P&&P.signal.addEventListener("abort",yn);let{results:aa,loaderResults:Ko,fetcherResults:Da}=await Ci(v.matches,H,st,pt,F);if(F.signal.aborted)return{shortCircuited:!0};P&&P.signal.removeEventListener("abort",yn),pt.forEach(je=>se.delete(je.key));let Ln=e0(aa);if(Ln)return await ta(v,Ln,{replace:de}),{shortCircuited:!0};let{loaderData:oa,errors:Ba}=K2(v,H,st,Ko,ae,pt,Da,U);U.forEach((je,Zt)=>{je.subscribe(tr=>{(tr||je.done)&&U.delete(Zt)})});let Xo=Zo(),Jo=qo(ot),ja=Xo||Jo||pt.length>0;return Me({loaderData:oa,errors:Ba},ja?{fetchers:new Map(v.fetchers)}:{})}function Jn(F){return v.fetchers.get(F)||wk}function Wo(F,D,H,Q){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");se.has(F)&&er(F);let ie=s||i,ce=th(v.location,v.matches,d,f.v7_prependBasename,H,D,Q==null?void 0:Q.relative),de=mo(ie,ce,d);if(!de){na(F,D,Pn(404,{pathname:ce}));return}let{path:ue,submission:ae}=Y2(f.v7_normalizeFormMethod,!0,ce,Q),Te=nh(de,ue);if(_=(Q&&Q.preventScrollReset)===!0,ae&&lr(ae.formMethod)){ea(F,D,ue,Te,de,ae);return}Ye.set(F,{routeId:D,path:ue}),Ho(F,D,ue,Te,de,ae)}async function ea(F,D,H,Q,ie,ce){if(Vo(),Ye.delete(F),!Q.route.action&&!Q.route.lazy){let gt=Pn(405,{method:ce.formMethod,pathname:H,routeId:D});na(F,D,gt);return}let de=v.fetchers.get(F),ue=Me({state:"submitting"},ce,{data:de&&de.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(F,ue),pe({fetchers:new Map(v.fetchers)});let ae=new AbortController,Te=pl(e.history,H,ae.signal,ce);se.set(F,ae);let Pe=await fl("action",Te,Q,ie,l,o,d);if(Te.signal.aborted){se.get(F)===ae&&se.delete(F);return}if(ko(Pe)){se.delete(F),Be.add(F);let gt=Me({state:"loading"},ce,{data:void 0," _hasFetcherDoneAnything ":!0});return v.fetchers.set(F,gt),pe({fetchers:new Map(v.fetchers)}),ta(v,Pe,{submission:ce,isFetchActionRedirect:!0})}if(Al(Pe)){na(F,D,Pe.error);return}if(ba(Pe))throw Pn(400,{type:"defer-action"});let bt=v.navigation.location||v.location,st=pl(e.history,bt,ae.signal),pt=s||i,yn=v.navigation.state!=="idle"?mo(pt,v.navigation.location,d):v.matches;Se(yn,"Didn't find any matches after fetcher action");let aa=++ze;Ge.set(F,aa);let Ko=Me({state:"loading",data:Pe.data},ce,{" _hasFetcherDoneAnything ":!0});v.fetchers.set(F,Ko);let[Da,Ln]=Z2(e.history,v,yn,ce,bt,z,Z,he,Ye,pt,d,{[Q.route.id]:Pe.data},void 0);Ln.filter(gt=>gt.key!==F).forEach(gt=>{let el=gt.key,Li=v.fetchers.get(el),$i={state:"loading",data:Li&&Li.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(el,$i),gt.controller&&se.set(el,gt.controller)}),pe({fetchers:new Map(v.fetchers)});let oa=()=>Ln.forEach(gt=>er(gt.key));ae.signal.addEventListener("abort",oa);let{results:Ba,loaderResults:Xo,fetcherResults:Jo}=await Ci(v.matches,yn,Da,Ln,st);if(ae.signal.aborted)return;ae.signal.removeEventListener("abort",oa),Ge.delete(F),se.delete(F),Ln.forEach(gt=>se.delete(gt.key));let ja=e0(Ba);if(ja)return ta(v,ja);let{loaderData:je,errors:Zt}=K2(v,v.matches,Da,Xo,void 0,Ln,Jo,U);if(v.fetchers.has(F)){let gt={state:"idle",data:Pe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(F,gt)}let tr=qo(aa);v.navigation.state==="loading"&&aa>ot?(Se(L,"Expected pending action"),P&&P.abort(),tt(v.navigation.location,{matches:yn,loaderData:je,errors:Zt,fetchers:new Map(v.fetchers)})):(pe(Me({errors:Zt,loaderData:X2(v.loaderData,je,yn,Zt)},tr||Ln.length>0?{fetchers:new Map(v.fetchers)}:{})),z=!1)}async function Ho(F,D,H,Q,ie,ce){let de=v.fetchers.get(F),ue=Me({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ce,{data:de&&de.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(F,ue),pe({fetchers:new Map(v.fetchers)});let ae=new AbortController,Te=pl(e.history,H,ae.signal);se.set(F,ae);let Pe=await fl("loader",Te,Q,ie,l,o,d);if(ba(Pe)&&(Pe=await hv(Pe,Te.signal,!0)||Pe),se.get(F)===ae&&se.delete(F),Te.signal.aborted)return;if(ko(Pe)){Be.add(F),await ta(v,Pe);return}if(Al(Pe)){let st=vo(v.matches,D);v.fetchers.delete(F),pe({fetchers:new Map(v.fetchers),errors:{[st.route.id]:Pe.error}});return}Se(!ba(Pe),"Unhandled fetcher deferred data");let bt={state:"idle",data:Pe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(F,bt),pe({fetchers:new Map(v.fetchers)})}async function ta(F,D,H){let{submission:Q,replace:ie,isFetchActionRedirect:ce}=H===void 0?{}:H;D.revalidate&&(z=!0);let de=ri(F.location,D.location,Me({_isRedirect:!0},ce?{_isFetchActionRedirect:!0}:{}));if(Se(de,"Expected a location on the redirect navigation"),sv.test(D.location)&&n){let st=e.history.createURL(D.location),pt=Bo(st.pathname,d)==null;if(t.location.origin!==st.origin||pt){ie?t.location.replace(D.location):t.location.assign(D.location);return}}P=null;let ue=ie===!0?dt.Replace:dt.Push,{formMethod:ae,formAction:Te,formEncType:Pe,formData:bt}=F.navigation;!Q&&ae&&Te&&bt&&Pe&&(Q={formMethod:ae,formAction:Te,formEncType:Pe,formData:bt}),bk.has(D.status)&&Q&&lr(Q.formMethod)?await Pt(ue,de,{submission:Me({},Q,{formAction:D.location}),preventScrollReset:_}):ce?await Pt(ue,de,{overrideNavigation:{state:"loading",location:de,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:Q,preventScrollReset:_}):await Pt(ue,de,{overrideNavigation:{state:"loading",location:de,formMethod:Q?Q.formMethod:void 0,formAction:Q?Q.formAction:void 0,formEncType:Q?Q.formEncType:void 0,formData:Q?Q.formData:void 0},preventScrollReset:_})}async function Ci(F,D,H,Q,ie){let ce=await Promise.all([...H.map(ae=>fl("loader",ie,ae,D,l,o,d)),...Q.map(ae=>ae.matches&&ae.match&&ae.controller?fl("loader",pl(e.history,ae.path,ae.controller.signal),ae.match,ae.matches,l,o,d):{type:mt.error,error:Pn(404,{pathname:ae.path})})]),de=ce.slice(0,H.length),ue=ce.slice(H.length);return await Promise.all([t0(F,H,de,de.map(()=>ie.signal),!1,v.loaderData),t0(F,Q.map(ae=>ae.match),ue,Q.map(ae=>ae.controller?ae.controller.signal:null),!0)]),{results:ce,loaderResults:de,fetcherResults:ue}}function Vo(){z=!0,Z.push(...Oa()),Ye.forEach((F,D)=>{se.has(D)&&(he.push(D),er(D))})}function na(F,D,H){let Q=vo(v.matches,D);Go(F),pe({errors:{[Q.route.id]:H},fetchers:new Map(v.fetchers)})}function Go(F){let D=v.fetchers.get(F);se.has(F)&&!(D&&D.state==="loading"&&Ge.has(F))&&er(F),Ye.delete(F),Ge.delete(F),Be.delete(F),v.fetchers.delete(F)}function er(F){let D=se.get(F);Se(D,"Expected fetch controller: "+F),D.abort(),se.delete(F)}function Yo(F){for(let D of F){let Q={state:"idle",data:Jn(D).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(D,Q)}}function Zo(){let F=[],D=!1;for(let H of Be){let Q=v.fetchers.get(H);Se(Q,"Expected fetcher: "+H),Q.state==="loading"&&(Be.delete(H),F.push(H),D=!0)}return Yo(F),D}function qo(F){let D=[];for(let[H,Q]of Ge)if(Q<F){let ie=v.fetchers.get(H);Se(ie,"Expected fetcher: "+H),ie.state==="loading"&&(er(H),Ge.delete(H),D.push(H))}return Yo(D),D.length>0}function Si(F,D){let H=v.blockers.get(F)||G2;return q.get(F)!==D&&q.set(F,D),H}function wr(F){v.blockers.delete(F),q.delete(F)}function ra(F,D){let H=v.blockers.get(F)||G2;Se(H.state==="unblocked"&&D.state==="blocked"||H.state==="blocked"&&D.state==="blocked"||H.state==="blocked"&&D.state==="proceeding"||H.state==="blocked"&&D.state==="unblocked"||H.state==="proceeding"&&D.state==="unblocked","Invalid blocker state transition: "+H.state+" -> "+D.state),v.blockers.set(F,D),pe({blockers:new Map(v.blockers)})}function Qo(F){let{currentLocation:D,nextLocation:H,historyAction:Q}=F;if(q.size===0)return;q.size>1&&Ro(!1,"A router only supports one blocker at a time");let ie=Array.from(q.entries()),[ce,de]=ie[ie.length-1],ue=v.blockers.get(ce);if(!(ue&&ue.state==="proceeding")&&de({currentLocation:D,nextLocation:H,historyAction:Q}))return ce}function Oa(F){let D=[];return U.forEach((H,Q)=>{(!F||F(Q))&&(H.cancel(),D.push(Q),U.delete(Q))}),D}function ki(F,D,H){if(C=F,E=D,N=H||(Q=>Q.key),!S&&v.navigation===Hd){S=!0;let Q=Ti(v.location,v.matches);Q!=null&&pe({restoreScrollPosition:Q})}return()=>{C=null,E=null,N=null}}function _i(F,D){if(C&&N&&E){let H=D.map(ie=>n0(ie,v.loaderData)),Q=N(F,H)||F.key;C[Q]=E()}}function Ti(F,D){if(C&&N&&E){let H=D.map(ce=>n0(ce,v.loaderData)),Q=N(F,H)||F.key,ie=C[Q];if(typeof ie=="number")return ie}return null}function Uc(F){l={},s=eh(F,o,void 0,l)}return y={get basename(){return d},get state(){return v},get routes(){return i},initialize:oe,subscribe:Bt,enableScrollRestoration:ki,navigate:Ze,fetch:Wo,revalidate:ft,createHref:F=>e.history.createHref(F),encodeLocation:F=>e.history.encodeLocation(F),getFetcher:Jn,deleteFetcher:Go,dispose:fe,getBlocker:Si,deleteBlocker:wr,_internalFetchControllers:se,_internalActiveDeferreds:U,_internalSetRoutes:Uc},y}function Sk(e){return e!=null&&"formData"in e}function th(e,t,n,r,o,l,i){let s,d;if(l!=null&&i!=="path"){s=[];for(let m of t)if(s.push(m),m.route.id===l){d=m;break}}else s=t,d=t[t.length-1];let f=Pf(o||".",Ic(s).map(m=>m.pathnameBase),Bo(e.pathname,n)||e.pathname,i==="path");return o==null&&(f.search=e.search,f.hash=e.hash),(o==null||o===""||o===".")&&d&&d.route.index&&!Ff(f.search)&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(f.pathname=f.pathname==="/"?n:ur([n,f.pathname])),Na(f)}function Y2(e,t,n,r){if(!r||!Sk(r))return{path:n};if(r.formMethod&&!Nk(r.formMethod))return{path:n,error:Pn(405,{method:r.formMethod})};let o;if(r.formData){let s=r.formMethod||"get";if(o={formMethod:e?s.toUpperCase():s.toLowerCase(),formAction:uv(n),formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:r.formData},lr(o.formMethod))return{path:n,submission:o}}let l=br(n),i=dv(r.formData);return t&&l.search&&Ff(l.search)&&i.append("index",""),l.search="?"+i,{path:Na(l),submission:o}}function kk(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Z2(e,t,n,r,o,l,i,s,d,f,m,b,C){let N=C?Object.values(C)[0]:b?Object.values(b)[0]:void 0,E=e.createURL(t.location),S=e.createURL(o),I=C?Object.keys(C)[0]:void 0,g=kk(n,I).filter((v,L)=>{if(v.route.lazy)return!0;if(v.route.loader==null)return!1;if(_k(t.loaderData,t.matches[L],v)||i.some(O=>O===v.route.id))return!0;let _=t.matches[L],P=v;return q2(v,Me({currentUrl:E,currentParams:_.params,nextUrl:S,nextParams:P.params},r,{actionResult:N,defaultShouldRevalidate:l||E.pathname+E.search===S.pathname+S.search||E.search!==S.search||cv(_,P)}))}),y=[];return d.forEach((v,L)=>{if(!n.some(z=>z.route.id===v.routeId))return;let _=mo(f,v.path,m);if(!_){y.push({key:L,routeId:v.routeId,path:v.path,matches:null,match:null,controller:null});return}let P=nh(_,v.path);if(s.includes(L)){y.push({key:L,routeId:v.routeId,path:v.path,matches:_,match:P,controller:new AbortController});return}q2(P,Me({currentUrl:E,currentParams:t.matches[t.matches.length-1].params,nextUrl:S,nextParams:n[n.length-1].params},r,{actionResult:N,defaultShouldRevalidate:l}))&&y.push({key:L,routeId:v.routeId,path:v.path,matches:_,match:P,controller:new AbortController})}),[g,y]}function _k(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function cv(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function q2(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Q2(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];Se(o,"No route found in manifest");let l={};for(let i in r){let d=o[i]!==void 0&&i!=="hasErrorBoundary";Ro(!d,'Route "'+o.id+'" has a static property "'+i+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+i+'" will be ignored.')),!d&&!ZS.has(i)&&(l[i]=r[i])}Object.assign(o,l),Object.assign(o,Me({},t(o),{lazy:void 0}))}async function fl(e,t,n,r,o,l,i,s,d,f){s===void 0&&(s=!1),d===void 0&&(d=!1);let m,b,C,N=I=>{let w,g=new Promise((y,v)=>w=v);return C=()=>w(),t.signal.addEventListener("abort",C),Promise.race([I({request:t,params:n.params,context:f}),g])};try{let I=n.route[e];if(n.route.lazy)if(I)b=(await Promise.all([N(I),Q2(n.route,l,o)]))[0];else if(await Q2(n.route,l,o),I=n.route[e],I)b=await N(I);else if(e==="action"){let w=new URL(t.url),g=w.pathname+w.search;throw Pn(405,{method:t.method,pathname:g,routeId:n.route.id})}else return{type:mt.data,data:void 0};else if(I)b=await N(I);else{let w=new URL(t.url),g=w.pathname+w.search;throw Pn(404,{pathname:g})}Se(b!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(I){m=mt.error,b=I}finally{C&&t.signal.removeEventListener("abort",C)}if(Ek(b)){let I=b.status;if(yk.has(I)){let y=b.headers.get("Location");if(Se(y,"Redirects returned/thrown from loaders/actions must have a Location header"),!sv.test(y))y=th(new URL(t.url),r.slice(0,r.indexOf(n)+1),i,!0,y);else if(!s){let v=new URL(t.url),L=y.startsWith("//")?new URL(v.protocol+y):new URL(y),_=Bo(L.pathname,i)!=null;L.origin===v.origin&&_&&(y=L.pathname+L.search+L.hash)}if(s)throw b.headers.set("Location",y),b;return{type:mt.redirect,status:I,location:y,revalidate:b.headers.get("X-Remix-Revalidate")!==null}}if(d)throw{type:m||mt.data,response:b};let w,g=b.headers.get("Content-Type");return g&&/\bapplication\/json\b/.test(g)?w=await b.json():w=await b.text(),m===mt.error?{type:m,error:new Af(I,b.statusText,w),headers:b.headers}:{type:mt.data,data:w,statusCode:b.status,headers:b.headers}}if(m===mt.error)return{type:m,error:b};if($k(b)){var E,S;return{type:mt.deferred,deferredData:b,statusCode:(E=b.init)==null?void 0:E.status,headers:((S=b.init)==null?void 0:S.headers)&&new Headers(b.init.headers)}}return{type:mt.data,data:b}}function pl(e,t,n,r){let o=e.createURL(uv(t)).toString(),l={signal:n};if(r&&lr(r.formMethod)){let{formMethod:i,formEncType:s,formData:d}=r;l.method=i.toUpperCase(),l.body=s==="application/x-www-form-urlencoded"?dv(d):d}return new Request(o,l)}function dv(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function Tk(e,t,n,r,o){let l={},i=null,s,d=!1,f={};return n.forEach((m,b)=>{let C=t[b].route.id;if(Se(!ko(m),"Cannot handle redirect results in processLoaderData"),Al(m)){let N=vo(e,C),E=m.error;r&&(E=Object.values(r)[0],r=void 0),i=i||{},i[N.route.id]==null&&(i[N.route.id]=E),l[C]=void 0,d||(d=!0,s=lv(m.error)?m.error.status:500),m.headers&&(f[C]=m.headers)}else ba(m)?(o.set(C,m.deferredData),l[C]=m.deferredData.data):l[C]=m.data,m.statusCode!=null&&m.statusCode!==200&&!d&&(s=m.statusCode),m.headers&&(f[C]=m.headers)}),r&&(i=r,l[Object.keys(r)[0]]=void 0),{loaderData:l,errors:i,statusCode:s||200,loaderHeaders:f}}function K2(e,t,n,r,o,l,i,s){let{loaderData:d,errors:f}=Tk(t,n,r,o,s);for(let m=0;m<l.length;m++){let{key:b,match:C,controller:N}=l[m];Se(i!==void 0&&i[m]!==void 0,"Did not find corresponding fetcher result");let E=i[m];if(!(N&&N.signal.aborted))if(Al(E)){let S=vo(e.matches,C==null?void 0:C.route.id);f&&f[S.route.id]||(f=Me({},f,{[S.route.id]:E.error})),e.fetchers.delete(b)}else if(ko(E))Se(!1,"Unhandled fetcher revalidation redirect");else if(ba(E))Se(!1,"Unhandled fetcher deferred data");else{let S={state:"idle",data:E.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(b,S)}}return{loaderData:d,errors:f}}function X2(e,t,n,r){let o=Me({},t);for(let l of n){let i=l.route.id;if(t.hasOwnProperty(i)?t[i]!==void 0&&(o[i]=t[i]):e[i]!==void 0&&l.route.loader&&(o[i]=e[i]),r&&r.hasOwnProperty(i))break}return o}function vo(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function J2(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Pn(e,t){let{pathname:n,routeId:r,method:o,type:l}=t===void 0?{}:t,i="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(i="Bad Request",o&&n&&r?s="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":l==="defer-action"&&(s="defer() is not supported in actions")):e===403?(i="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(i="Not Found",s='No route matches URL "'+n+'"'):e===405&&(i="Method Not Allowed",o&&n&&r?s="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(s='Invalid request method "'+o.toUpperCase()+'"')),new Af(e||500,i,new Error(s),!0)}function e0(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(ko(n))return n}}function uv(e){let t=typeof e=="string"?br(e):e;return Na(Me({},t,{hash:""}))}function Lk(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function ba(e){return e.type===mt.deferred}function Al(e){return e.type===mt.error}function ko(e){return(e&&e.type)===mt.redirect}function $k(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Ek(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Nk(e){return vk.has(e.toLowerCase())}function lr(e){return gk.has(e.toLowerCase())}async function t0(e,t,n,r,o,l){for(let i=0;i<n.length;i++){let s=n[i],d=t[i];if(!d)continue;let f=e.find(b=>b.route.id===d.route.id),m=f!=null&&!cv(f,d)&&(l&&l[d.route.id])!==void 0;if(ba(s)&&(o||m)){let b=r[i];Se(b,"Expected an AbortSignal for revalidating fetcher deferred result"),await hv(s,b,o).then(C=>{C&&(n[i]=C||n[i])})}}}async function hv(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:mt.data,data:e.deferredData.unwrappedData}}catch(o){return{type:mt.error,error:o}}return{type:mt.data,data:e.deferredData.data}}}function Ff(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function n0(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function nh(e,t){let n=typeof t=="string"?br(t).search:t.search;if(e[e.length-1].route.index&&Ff(n||""))return e[e.length-1];let r=Ic(e);return r[r.length-1]}/**
 * React Router v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nc(){return nc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nc.apply(this,arguments)}const Mc=j.createContext(null),Of=j.createContext(null),Aa=j.createContext(null),Rc=j.createContext(null),Kr=j.createContext({outlet:null,matches:[],isDataRoute:!1}),fv=j.createContext(null);function Ik(e,t){let{relative:n}=t===void 0?{}:t;yi()||Se(!1);let{basename:r,navigator:o}=j.useContext(Aa),{hash:l,pathname:i,search:s}=Df(e,{relative:n}),d=i;return r!=="/"&&(d=i==="/"?r:ur([r,i])),o.createHref({pathname:d,search:s,hash:l})}function yi(){return j.useContext(Rc)!=null}function jo(){return yi()||Se(!1),j.useContext(Rc).location}function pv(e){j.useContext(Aa).static||j.useLayoutEffect(e)}function Mk(){let{isDataRoute:e}=j.useContext(Kr);return e?Gk():Rk()}function Rk(){yi()||Se(!1);let e=j.useContext(Mc),{basename:t,navigator:n}=j.useContext(Aa),{matches:r}=j.useContext(Kr),{pathname:o}=jo(),l=JSON.stringify(Ic(r).map(d=>d.pathnameBase)),i=j.useRef(!1);return pv(()=>{i.current=!0}),j.useCallback(function(d,f){if(f===void 0&&(f={}),!i.current)return;if(typeof d=="number"){n.go(d);return}let m=Pf(d,JSON.parse(l),o,f.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:ur([t,m.pathname])),(f.replace?n.replace:n.push)(m,f.state,f)},[t,n,l,o,e])}const Pk=j.createContext(null);function Ak(e){let t=j.useContext(Kr).outlet;return t&&j.createElement(Pk.Provider,{value:e},t)}function Df(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=j.useContext(Kr),{pathname:o}=jo(),l=JSON.stringify(Ic(r).map(i=>i.pathnameBase));return j.useMemo(()=>Pf(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function Fk(e,t,n){yi()||Se(!1);let{navigator:r}=j.useContext(Aa),{matches:o}=j.useContext(Kr),l=o[o.length-1],i=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let d=jo(),f;if(t){var m;let S=typeof t=="string"?br(t):t;s==="/"||(m=S.pathname)!=null&&m.startsWith(s)||Se(!1),f=S}else f=d;let b=f.pathname||"/",C=s==="/"?b:b.slice(s.length)||"/",N=mo(e,{pathname:C}),E=zk(N&&N.map(S=>Object.assign({},S,{params:Object.assign({},i,S.params),pathname:ur([s,r.encodeLocation?r.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?s:ur([s,r.encodeLocation?r.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n);return t&&E?j.createElement(Rc.Provider,{value:{location:nc({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:dt.Pop}},E):E}function Ok(){let e=Vk(),t=lv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},l=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:o},n):null,l)}const Dk=j.createElement(Ok,null);class Bk extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?j.createElement(Kr.Provider,{value:this.props.routeContext},j.createElement(fv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jk(e){let{routeContext:t,match:n,children:r}=e,o=j.useContext(Mc);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Kr.Provider,{value:t},r)}function zk(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,i=(r=n)==null?void 0:r.errors;if(i!=null){let s=l.findIndex(d=>d.route.id&&(i==null?void 0:i[d.route.id]));s>=0||Se(!1),l=l.slice(0,Math.min(l.length,s+1))}return l.reduceRight((s,d,f)=>{let m=d.route.id?i==null?void 0:i[d.route.id]:null,b=null;n&&(b=d.route.errorElement||Dk);let C=t.concat(l.slice(0,f+1)),N=()=>{let E;return m?E=b:d.route.Component?E=j.createElement(d.route.Component,null):d.route.element?E=d.route.element:E=s,j.createElement(jk,{match:d,routeContext:{outlet:s,matches:C,isDataRoute:n!=null},children:E})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?j.createElement(Bk,{location:n.location,revalidation:n.revalidation,component:b,error:m,children:N(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):N()},null)}var rh;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(rh||(rh={}));var ai;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(ai||(ai={}));function Uk(e){let t=j.useContext(Mc);return t||Se(!1),t}function Wk(e){let t=j.useContext(Of);return t||Se(!1),t}function Hk(e){let t=j.useContext(Kr);return t||Se(!1),t}function gv(e){let t=Hk(),n=t.matches[t.matches.length-1];return n.route.id||Se(!1),n.route.id}function Vk(){var e;let t=j.useContext(fv),n=Wk(ai.UseRouteError),r=gv(ai.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Gk(){let{router:e}=Uk(rh.UseNavigateStable),t=gv(ai.UseNavigateStable),n=j.useRef(!1);return pv(()=>{n.current=!0}),j.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,nc({fromRouteId:t},l)))},[e,t])}const r0="startTransition";function Yk(e){let{fallbackElement:t,router:n}=e,[r,o]=j.useState(n.state),l=j.useCallback(f=>{r0 in vp?vp[r0](()=>o(f)):o(f)},[o]);j.useLayoutEffect(()=>n.subscribe(l),[n,l]);let i=j.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:f=>n.navigate(f),push:(f,m,b)=>n.navigate(f,{state:m,preventScrollReset:b==null?void 0:b.preventScrollReset}),replace:(f,m,b)=>n.navigate(f,{replace:!0,state:m,preventScrollReset:b==null?void 0:b.preventScrollReset})}),[n]),s=n.basename||"/",d=j.useMemo(()=>({router:n,navigator:i,static:!1,basename:s}),[n,i,s]);return j.createElement(j.Fragment,null,j.createElement(Mc.Provider,{value:d},j.createElement(Of.Provider,{value:r},j.createElement(Qk,{basename:s,location:r.location,navigationType:r.historyAction,navigator:i},r.initialized?j.createElement(Zk,{routes:n.routes,state:r}):t))),null)}function Zk(e){let{routes:t,state:n}=e;return Fk(t,void 0,n)}function qk(e){return Ak(e.context)}function Qk(e){let{basename:t="/",children:n=null,location:r,navigationType:o=dt.Pop,navigator:l,static:i=!1}=e;yi()&&Se(!1);let s=t.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:s,navigator:l,static:i}),[s,l,i]);typeof r=="string"&&(r=br(r));let{pathname:f="/",search:m="",hash:b="",state:C=null,key:N="default"}=r,E=j.useMemo(()=>{let S=Bo(f,s);return S==null?null:{location:{pathname:S,search:m,hash:b,state:C,key:N},navigationType:o}},[s,f,m,b,C,N,o]);return E==null?null:j.createElement(Aa.Provider,{value:d},j.createElement(Rc.Provider,{children:n,value:E}))}var a0;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(a0||(a0={}));new Promise(()=>{});function Kk(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:j.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:j.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Po(){return Po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Po.apply(this,arguments)}function mv(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Xk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Jk(e,t){return e.button===0&&(!t||t==="_self")&&!Xk(e)}const e_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],t_=["aria-current","caseSensitive","className","end","style","to","children"];function n_(e,t){return Ck({basename:t==null?void 0:t.basename,future:Po({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:VS({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||r_(),routes:e,mapRouteProperties:Kk}).initialize()}function r_(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Po({},t,{errors:a_(t.errors)})),t}function a_(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new Af(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){let l=new Error(o.message);l.stack="",n[r]=l}else n[r]=o;return n}const o_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",l_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,i_=j.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:s,target:d,to:f,preventScrollReset:m}=t,b=mv(t,e_),{basename:C}=j.useContext(Aa),N,E=!1;if(typeof f=="string"&&l_.test(f)&&(N=f,o_))try{let g=new URL(window.location.href),y=f.startsWith("//")?new URL(g.protocol+f):new URL(f),v=Bo(y.pathname,C);y.origin===g.origin&&v!=null?f=v+y.search+y.hash:E=!0}catch{}let S=Ik(f,{relative:o}),I=c_(f,{replace:i,state:s,target:d,preventScrollReset:m,relative:o});function w(g){r&&r(g),g.defaultPrevented||I(g)}return j.createElement("a",Po({},b,{href:N||S,onClick:E||l?r:w,ref:n,target:d}))}),s_=j.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:l="",end:i=!1,style:s,to:d,children:f}=t,m=mv(t,t_),b=Df(d,{relative:m.relative}),C=jo(),N=j.useContext(Of),{navigator:E}=j.useContext(Aa),S=E.encodeLocation?E.encodeLocation(b).pathname:b.pathname,I=C.pathname,w=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;o||(I=I.toLowerCase(),w=w?w.toLowerCase():null,S=S.toLowerCase());let g=I===S||!i&&I.startsWith(S)&&I.charAt(S.length)==="/",y=w!=null&&(w===S||!i&&w.startsWith(S)&&w.charAt(S.length)==="/"),v=g?r:void 0,L;typeof l=="function"?L=l({isActive:g,isPending:y}):L=[l,g?"active":null,y?"pending":null].filter(Boolean).join(" ");let _=typeof s=="function"?s({isActive:g,isPending:y}):s;return j.createElement(i_,Po({},m,{"aria-current":v,className:L,ref:n,style:_,to:d}),typeof f=="function"?f({isActive:g,isPending:y}):f)});var o0;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(o0||(o0={}));var l0;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(l0||(l0={}));function c_(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i}=t===void 0?{}:t,s=Mk(),d=jo(),f=Df(e,{relative:i});return j.useCallback(m=>{if(Jk(m,n)){m.preventDefault();let b=r!==void 0?r:Na(d)===Na(f);s(e,{replace:b,state:o,preventScrollReset:l,relative:i})}},[d,s,f,r,o,n,e,l,i])}const Ee=({to:e,className:t="",exact:n,children:r,text:o,onClick:l,label:i,style:s})=>a(s_,{to:e,onClick:l,end:n&&"end",className:({isActive:d})=>`${t} ${d?"active":""}`,"aria-label":i,style:s,children:r||o}),d_=()=>u("div",{className:"prose",children:[a("h1",{children:"Brand Colours"}),a("p",{children:"The palette is designed to be adjustable so that you can match it to your brand colors."}),a("h2",{children:"Brand Hue and Color"}),u("p",{children:["You should pick a color that is closest to your brand color and adjust the hue to match it if necessary.  Then define that as the"," ",a("code",{children:"$brand-hue"})," and set the ",a("code",{children:"$brand-color"})," by name."]}),a(Re,{code:zS,caption:"Brand Color",language:"scss",expand:!0}),a("h2",{children:"Multiple Brand Colors"}),u("p",{children:["If you have multiple brand colors you can set them using the"," ",a("code",{children:"$brand-colors"})," variable.  You can call them whatever you like (we're using ",a("code",{children:"primary"}),", ",a("code",{children:"secondary"})," ","and ",a("code",{children:"tertiary"})," in this example). You should define one to be the primary ",a("code",{children:"$brand-color"})," and set the ",a("code",{children:"$brand-hue"})]}),a(Re,{code:US,caption:"Brand Colors",language:"scss",expand:!0}),a("h2",{children:"Greyscale Colors"}),u("p",{children:["An important side-effect of setting ",a("code",{children:"$brand-hue"})," is that it will set the hue of the greyscale color ranges to match it."]}),u("p",{children:["If you want to use different hues for the greyscale color ranges then you can do that using the ",a("code",{children:"$grey-hue"}),","," ",a("code",{children:"$grey20-hue"})," and ",a("code",{children:"$grey40-hue"})," variables."]}),a(Re,{code:WS,caption:"Greyscale Colors",language:"scss",expand:!0}),a("h2",{children:"Culling the Palette"}),a("p",{children:"The chances are that you aren't going to need all of the colors defined in the standard palette.  You can reduce the size of the generated CSS file by excluding any that you don't need."}),u("p",{children:["Set the ",a("code",{children:"$color-names"})," variable to list those that you want to keep.  Note that ",a("code",{children:"red"}),", ",a("code",{children:"orange"}),","," ",a("code",{children:"green"}),", ",a("code",{children:"blue"})," and ",a("code",{children:"grey"})," are used by various components, including ",a(Ee,{to:"/forms/",text:"forms"})," and"," ",a(Ee,{to:"/components/alerts",text:"alerts"})," so you'll probably want to keep those."]}),a(Re,{code:HS,caption:"Selecting Colors",language:"scss",expand:!0})]}),u_=Object.freeze(Object.defineProperty({__proto__:null,default:d_},Symbol.toStringTag,{value:"Module"})),h_="Badger CSS",f_="Badger CSS palette",p_="badger-css",g_="",m_={red:{name:"Red",hue:0,stops:{0:{h:0,s:65,l:5,hex:"#150404"},5:{h:0,s:66,l:8,hex:"#220707"},10:{h:0,s:68,l:11,hex:"#2f0909"},15:{h:0,s:69,l:15,hex:"#410c0c"},20:{h:0,s:70,l:18,hex:"#4e0e0e"},25:{h:0,s:71,l:22,hex:"#601010"},30:{h:0,s:72,l:27,hex:"#761313"},35:{h:0,s:73,l:31,hex:"#891515"},40:{h:0,s:73,l:36,hex:"#9f1919"},45:{h:0,s:74,l:42,hex:"#ba1c1c"},50:{h:0,s:74,l:48,hex:"#d52020"},55:{h:0,s:74,l:55,hex:"#e13737"},60:{h:0,s:75,l:62,hex:"#e75555"},65:{h:0,s:75,l:68,hex:"#eb7070"},70:{h:0,s:74,l:74,hex:"#ee8c8c"},75:{h:0,s:74,l:80,hex:"#f2a6a6"},80:{h:0,s:74,l:84,hex:"#f4b8b8"},85:{h:0,s:73,l:88,hex:"#f7caca"},90:{h:0,s:73,l:92,hex:"#f9dcdc"},95:{h:0,s:72,l:95,hex:"#fbe9e9"},100:{h:0,s:71,l:98,hex:"#fef6f6"}},curves:{h:{min:0,max:0,minControl:{x:30,y:0},maxControl:{x:70,y:0}},s:{min:65,max:71,minControl:{x:31,y:74},maxControl:{x:63,y:78}},l:{min:5,max:98,minControl:{x:62,y:42},maxControl:{x:53,y:72}}},uri:"red"},brown:{name:"Brown",hue:14,stops:{0:{h:10,s:52,l:5,hex:"#130806"},5:{h:11,s:53,l:8,hex:"#1f0e0a"},10:{h:11,s:54,l:11,hex:"#2b120d"},15:{h:12,s:54,l:14,hex:"#371810"},20:{h:13,s:55,l:17,hex:"#431e14"},25:{h:13,s:56,l:20,hex:"#502316"},30:{h:13,s:56,l:24,hex:"#5f2a1b"},35:{h:14,s:56,l:28,hex:"#6f321f"},40:{h:14,s:57,l:32,hex:"#803923"},45:{h:14,s:57,l:37,hex:"#944229"},50:{h:14,s:57,l:42,hex:"#a84b2e"},55:{h:14,s:58,l:47,hex:"#bd5332"},60:{h:14,s:58,l:53,hex:"#cd6242"},65:{h:15,s:58,l:60,hex:"#d47b5e"},70:{h:15,s:58,l:67,hex:"#dc927a"},75:{h:15,s:58,l:75,hex:"#e4ad9a"},80:{h:14,s:58,l:81,hex:"#ebc0b2"},85:{h:14,s:58,l:87,hex:"#f1d4cb"},90:{h:14,s:58,l:92,hex:"#f6e4df"},95:{h:14,s:57,l:95,hex:"#faeeeb"},100:{h:14,s:57,l:98,hex:"#fdf8f7"}},curves:{h:{min:10,max:14,minControl:{x:30,y:15},maxControl:{x:70,y:15}},s:{min:52,max:57,minControl:{x:35,y:58},maxControl:{x:66,y:59}},l:{min:5,max:98,minControl:{x:72,y:43},maxControl:{x:67,y:82}}},uri:"brown"},orange:{name:"Orange",hue:26,stops:{0:{h:27,s:93,l:5,hex:"#190c01"},5:{h:27,s:94,l:8,hex:"#281201"},10:{h:26,s:94,l:11,hex:"#361902"},15:{h:26,s:95,l:14,hex:"#461f02"},20:{h:26,s:96,l:18,hex:"#5a2802"},25:{h:26,s:96,l:21,hex:"#692f02"},30:{h:26,s:96,l:25,hex:"#7d3803"},35:{h:26,s:97,l:30,hex:"#974302"},40:{h:26,s:97,l:35,hex:"#b04e03"},45:{h:26,s:97,l:40,hex:"#c95903"},50:{h:26,s:97,l:46,hex:"#e76604"},55:{h:26,s:96,l:52,hex:"#fa750f"},60:{h:26,s:96,l:59,hex:"#fb8932"},65:{h:26,s:95,l:65,hex:"#fb9a51"},70:{h:27,s:94,l:72,hex:"#fbb174"},75:{h:27,s:93,l:78,hex:"#fbc293"},80:{h:28,s:92,l:83,hex:"#fcd1ac"},85:{h:28,s:91,l:88,hex:"#fcdfc5"},90:{h:29,s:90,l:91,hex:"#fde7d3"},95:{h:30,s:88,l:95,hex:"#fdf2e7"},100:{h:32,s:87,l:97,hex:"#fef8f1"}},curves:{h:{min:27,max:32,minControl:{x:30,y:25},maxControl:{x:77,y:24}},s:{min:93,max:87,minControl:{x:46,y:100},maxControl:{x:64,y:97}},l:{min:5,max:97,minControl:{x:62,y:39},maxControl:{x:62,y:80}}},uri:"orange"},yellow:{name:"Yellow",hue:41,stops:{0:{h:30,s:90,l:5,hex:"#180d01"},5:{h:31,s:91,l:8,hex:"#271502"},10:{h:33,s:92,l:10,hex:"#311c02"},15:{h:34,s:93,l:13,hex:"#402502"},20:{h:35,s:94,l:17,hex:"#543203"},25:{h:36,s:95,l:20,hex:"#633d03"},30:{h:37,s:96,l:24,hex:"#784b02"},35:{h:38,s:96,l:28,hex:"#8c5a03"},40:{h:39,s:97,l:33,hex:"#a66d03"},45:{h:40,s:97,l:38,hex:"#bf8003"},50:{h:41,s:97,l:43,hex:"#d89503"},55:{h:41,s:96,l:48,hex:"#f0a505"},60:{h:42,s:95,l:54,hex:"#f9b61a"},65:{h:43,s:94,l:60,hex:"#f9c339"},70:{h:43,s:93,l:66,hex:"#f9cb58"},75:{h:44,s:92,l:72,hex:"#f9d676"},80:{h:44,s:90,l:77,hex:"#f9dd90"},85:{h:44,s:88,l:82,hex:"#f9e4a9"},90:{h:45,s:86,l:87,hex:"#faecc1"},95:{h:45,s:84,l:92,hex:"#fcf3d9"},100:{h:45,s:82,l:96,hex:"#fdf9ec"}},curves:{h:{min:30,max:45,minControl:{x:28,y:38},maxControl:{x:70,y:45}},s:{min:90,max:82,minControl:{x:44,y:100},maxControl:{x:58,y:100}},l:{min:5,max:96,minControl:{x:52,y:31},maxControl:{x:64,y:67}}},uri:"yellow"},olive:{name:"Olive",hue:68,stops:{0:{h:72,s:66,l:4,hex:"#0e1103"},5:{h:72,s:68,l:6,hex:"#161a05"},10:{h:71,s:70,l:9,hex:"#212707"},15:{h:71,s:72,l:12,hex:"#2d3509"},20:{h:70,s:73,l:15,hex:"#39420a"},25:{h:70,s:74,l:18,hex:"#45500c"},30:{h:69,s:74,l:21,hex:"#515d0e"},35:{h:69,s:74,l:25,hex:"#616f11"},40:{h:69,s:73,l:29,hex:"#708014"},45:{h:68,s:70,l:33,hex:"#7f8f19"},50:{h:68,s:66,l:37,hex:"#8c9d20"},55:{h:67,s:60,l:43,hex:"#a0af2c"},60:{h:67,s:55,l:48,hex:"#aebe37"},65:{h:66,s:52,l:54,hex:"#bac74d"},70:{h:66,s:50,l:61,hex:"#c3cd6a"},75:{h:65,s:49,l:68,hex:"#cfd585"},80:{h:65,s:48,l:75,hex:"#d9dea1"},85:{h:65,s:49,l:82,hex:"#e4e8bb"},90:{h:64,s:49,l:87,hex:"#eceece"},95:{h:64,s:51,l:93,hex:"#f5f6e4"},100:{h:64,s:52,l:97,hex:"#fbfbf3"}},curves:{h:{min:72,max:64,minControl:{x:30,y:70},maxControl:{x:69,y:65}},s:{min:66,max:52,minControl:{x:69,y:96},maxControl:{x:37,y:33}},l:{min:4,max:97,minControl:{x:67,y:35},maxControl:{x:72,y:75}}},uri:"olive"},green:{name:"Green",hue:117,stops:{0:{h:117,s:45,l:5,hex:"#081207"},5:{h:117,s:48,l:8,hex:"#0c1e0b"},10:{h:117,s:50,l:11,hex:"#0f2a0e"},15:{h:117,s:52,l:14,hex:"#133611"},20:{h:117,s:53,l:17,hex:"#174214"},25:{h:117,s:54,l:21,hex:"#1c5219"},30:{h:117,s:55,l:25,hex:"#20631d"},35:{h:117,s:55,l:29,hex:"#257321"},40:{h:117,s:55,l:33,hex:"#2a8226"},45:{h:117,s:54,l:38,hex:"#32952d"},50:{h:117,s:54,l:43,hex:"#38a932"},55:{h:117,s:53,l:48,hex:"#40bb3a"},60:{h:117,s:52,l:54,hex:"#53c74d"},65:{h:117,s:51,l:60,hex:"#6acd65"},70:{h:117,s:50,l:66,hex:"#81d47d"},75:{h:117,s:48,l:73,hex:"#9cdb99"},80:{h:117,s:47,l:79,hex:"#b3e3b0"},85:{h:117,s:46,l:85,hex:"#c9eac7"},90:{h:118,s:45,l:90,hex:"#dbf1da"},95:{h:118,s:44,l:94,hex:"#e9f6e9"},100:{h:118,s:43,l:98,hex:"#f8fcf8"}},curves:{h:{min:117,max:118,minControl:{x:30,y:118},maxControl:{x:57,y:116}},s:{min:45,max:43,minControl:{x:34,y:65},maxControl:{x:64,y:49}},l:{min:5,max:98,minControl:{x:61,y:38},maxControl:{x:72,y:79}}},uri:"green"},teal:{name:"Teal",hue:165,stops:{0:{h:165,s:52,l:5,hex:"#061310"},5:{h:165,s:56,l:7,hex:"#081c17"},10:{h:165,s:59,l:10,hex:"#0a2921"},15:{h:165,s:61,l:13,hex:"#0d352b"},20:{h:165,s:62,l:15,hex:"#0f3e32"},25:{h:165,s:63,l:18,hex:"#114b3c"},30:{h:165,s:63,l:21,hex:"#145746"},35:{h:165,s:63,l:25,hex:"#186854"},40:{h:165,s:62,l:29,hex:"#1c7861"},45:{h:165,s:60,l:33,hex:"#22876d"},50:{h:165,s:59,l:37,hex:"#27967a"},55:{h:165,s:58,l:42,hex:"#2da98a"},60:{h:165,s:57,l:47,hex:"#34bc9a"},65:{h:165,s:56,l:53,hex:"#44caa9"},70:{h:165,s:55,l:60,hex:"#61d1b5"},75:{h:165,s:54,l:67,hex:"#7dd8c2"},80:{h:165,s:54,l:75,hex:"#9de2d0"},85:{h:165,s:55,l:81,hex:"#b4e9dc"},90:{h:165,s:55,l:88,hex:"#d0f1e9"},95:{h:165,s:57,l:93,hex:"#e3f7f2"},100:{h:165,s:58,l:98,hex:"#f7fdfb"}},curves:{h:{min:165,max:165,minControl:{x:30,y:165},maxControl:{x:70,y:165}},s:{min:52,max:58,minControl:{x:34,y:81},maxControl:{x:55,y:43}},l:{min:5,max:98,minControl:{x:71,y:38},maxControl:{x:68,y:69}}},uri:"teal"},blue:{name:"Blue",hue:206,stops:{0:{h:210,s:72,l:5,hex:"#040d16"},5:{h:210,s:74,l:8,hex:"#051423"},10:{h:209,s:75,l:11,hex:"#071d31"},15:{h:209,s:77,l:15,hex:"#092744"},20:{h:209,s:78,l:18,hex:"#0a2f52"},25:{h:208,s:79,l:22,hex:"#0c3b64"},30:{h:208,s:80,l:26,hex:"#0d4677"},35:{h:207,s:81,l:31,hex:"#0f558f"},40:{h:207,s:82,l:35,hex:"#1061a2"},45:{h:207,s:83,l:41,hex:"#1271bf"},50:{h:206,s:84,l:46,hex:"#1382d8"},55:{h:206,s:84,l:52,hex:"#1e92eb"},60:{h:205,s:85,l:58,hex:"#39a3ef"},65:{h:205,s:85,l:65,hex:"#5ab2f2"},70:{h:205,s:85,l:71,hex:"#76c0f4"},75:{h:205,s:85,l:77,hex:"#92cdf6"},80:{h:204,s:84,l:82,hex:"#abd9f8"},85:{h:204,s:84,l:87,hex:"#c2e3fa"},90:{h:204,s:83,l:91,hex:"#d5ecfb"},95:{h:204,s:82,l:95,hex:"#e8f4fd"},100:{h:204,s:81,l:98,hex:"#f6fbfe"}},curves:{h:{min:210,max:204,minControl:{x:42,y:207},maxControl:{x:70,y:204}},s:{min:72,max:81,minControl:{x:43,y:86},maxControl:{x:69,y:88}},l:{min:5,max:98,minControl:{x:61,y:41},maxControl:{x:64,y:78}}},uri:"blue"},indigo:{name:"Indigo",hue:236,stops:{0:{h:234,s:50,l:7,hex:"#090b1b"},5:{h:234,s:52,l:11,hex:"#0d102b"},10:{h:235,s:54,l:16,hex:"#13163f"},15:{h:235,s:56,l:21,hex:"#181d54"},20:{h:235,s:58,l:27,hex:"#1d246d"},25:{h:235,s:61,l:32,hex:"#202883"},30:{h:236,s:64,l:38,hex:"#232b9f"},35:{h:236,s:67,l:44,hex:"#252fbb"},40:{h:236,s:71,l:50,hex:"#2531da"},45:{h:236,s:75,l:56,hex:"#3b46e3"},50:{h:236,s:78,l:62,hex:"#535dea"},55:{h:236,s:81,l:67,hex:"#6770ef"},60:{h:236,s:82,l:72,hex:"#7d85f2"},65:{h:235,s:82,l:77,hex:"#949cf4"},70:{h:235,s:82,l:81,hex:"#a7adf6"},75:{h:235,s:81,l:85,hex:"#babff8"},80:{h:235,s:79,l:89,hex:"#cdd0f9"},85:{h:235,s:77,l:92,hex:"#dbdefa"},90:{h:235,s:75,l:94,hex:"#e4e6fb"},95:{h:235,s:72,l:97,hex:"#f2f3fd"},100:{h:235,s:70,l:99,hex:"#fbfbfe"}},curves:{h:{min:234,max:235,minControl:{x:30,y:237},maxControl:{x:70,y:235}},s:{min:50,max:70,minControl:{x:60,y:69},maxControl:{x:40,y:100}},l:{min:7,max:99,minControl:{x:39,y:40},maxControl:{x:53,y:80}}},uri:"indigo"},violet:{name:"Violet",uri:"violet",hue:259,stops:{0:{h:271,s:53,l:8,hex:"#150a1f"},5:{h:269,s:53,l:12,hex:"#1e0e2f"},10:{h:268,s:54,l:16,hex:"#27133f"},15:{h:266,s:55,l:21,hex:"#321853"},20:{h:265,s:56,l:26,hex:"#3c1d67"},25:{h:264,s:57,l:31,hex:"#46227c"},30:{h:263,s:59,l:36,hex:"#4f2692"},35:{h:262,s:62,l:42,hex:"#5929ae"},40:{h:261,s:66,l:48,hex:"#622acb"},45:{h:260,s:71,l:53,hex:"#6b32dc"},50:{h:259,s:76,l:59,hex:"#7947e6"},55:{h:258,s:79,l:65,hex:"#8a5fec"},60:{h:258,s:81,l:71,hex:"#9d79f1"},65:{h:257,s:82,l:76,hex:"#ac90f4"},70:{h:257,s:82,l:80,hex:"#baa2f6"},75:{h:256,s:82,l:85,hex:"#cab9f8"},80:{h:256,s:81,l:88,hex:"#d5c8f9"},85:{h:255,s:80,l:92,hex:"#e2dafb"},90:{h:255,s:79,l:94,hex:"#eae4fc"},95:{h:255,s:78,l:97,hex:"#f4f1fd"},100:{h:255,s:77,l:99,hex:"#fbfafe"}},curves:{h:{min:271,max:255,minControl:{x:33,y:260},maxControl:{x:70,y:255}},s:{min:53,max:77,minControl:{x:68,y:57},maxControl:{x:26,y:96}},l:{min:8,max:99,minControl:{x:45,y:43},maxControl:{x:58,y:83}}}},purple:{name:"Purple",hue:284,stops:{0:{h:294,s:47,l:6,hex:"#150816"},5:{h:293,s:50,l:8,hex:"#1c0a1f"},10:{h:292,s:53,l:11,hex:"#270d2b"},15:{h:290,s:56,l:14,hex:"#311038"},20:{h:289,s:59,l:18,hex:"#3f1349"},25:{h:288,s:62,l:22,hex:"#4d155b"},30:{h:287,s:64,l:26,hex:"#5a186d"},35:{h:286,s:67,l:31,hex:"#6b1a84"},40:{h:286,s:69,l:37,hex:"#811d9f"},45:{h:285,s:71,l:43,hex:"#9520bc"},50:{h:284,s:73,l:49,hex:"#a822d8"},55:{h:283,s:74,l:55,hex:"#b137e1"},60:{h:283,s:75,l:62,hex:"#be55e7"},65:{h:282,s:77,l:68,hex:"#c76fec"},70:{h:282,s:77,l:75,hex:"#d38ef0"},75:{h:281,s:78,l:80,hex:"#dba4f4"},80:{h:281,s:79,l:85,hex:"#e4bbf7"},85:{h:280,s:79,l:90,hex:"#ecd1fa"},90:{h:280,s:80,l:94,hex:"#f4e3fc"},95:{h:280,s:80,l:97,hex:"#f9f1fd"},100:{h:280,s:80,l:99,hex:"#fdfafe"}},curves:{h:{min:294,max:280,minControl:{x:32,y:286},maxControl:{x:67,y:280}},s:{min:47,max:80,minControl:{x:34,y:67},maxControl:{x:51,y:79}},l:{min:6,max:99,minControl:{x:48,y:26},maxControl:{x:64,y:85}}},uri:"purple"},pink:{name:"Pink",hue:313,stops:{0:{h:314,s:64,l:5,hex:"#150511"},5:{h:314,s:66,l:7,hex:"#1e0618"},10:{h:313,s:69,l:10,hex:"#2b0823"},15:{h:313,s:71,l:13,hex:"#390a2e"},20:{h:313,s:73,l:16,hex:"#470b3a"},25:{h:313,s:74,l:19,hex:"#540d45"},30:{h:313,s:76,l:23,hex:"#670e54"},35:{h:313,s:77,l:27,hex:"#7a1063"},40:{h:313,s:77,l:32,hex:"#901375"},45:{h:313,s:78,l:37,hex:"#a81588"},50:{h:313,s:77,l:42,hex:"#be199a"},55:{h:313,s:77,l:48,hex:"#d91cb0"},60:{h:313,s:76,l:55,hex:"#e335be"},65:{h:313,s:76,l:63,hex:"#e859c9"},70:{h:312,s:75,l:70,hex:"#ec79d5"},75:{h:312,s:74,l:77,hex:"#f099de"},80:{h:312,s:73,l:83,hex:"#f3b4e7"},85:{h:312,s:72,l:88,hex:"#f6caee"},90:{h:311,s:71,l:92,hex:"#f9dcf4"},95:{h:311,s:70,l:96,hex:"#fceef9"},100:{h:310,s:69,l:99,hex:"#fefbfe"}},curves:{h:{min:314,max:310,minControl:{x:26,y:311},maxControl:{x:67,y:315}},s:{min:64,max:69,minControl:{x:45,y:87},maxControl:{x:58,y:75}},l:{min:5,max:99,minControl:{x:64,y:34},maxControl:{x:62,y:78}}},uri:"pink"},maroon:{name:"Maroon",hue:339,stops:{0:{h:339,s:57,l:6,hex:"#18070d"},5:{h:339,s:62,l:8,hex:"#210811"},10:{h:339,s:66,l:11,hex:"#2f0a16"},15:{h:339,s:70,l:13,hex:"#380a1a"},20:{h:339,s:74,l:17,hex:"#4b0b22"},25:{h:339,s:76,l:20,hex:"#5a0c27"},30:{h:339,s:79,l:24,hex:"#6e0d2f"},35:{h:339,s:81,l:29,hex:"#860e38"},40:{h:339,s:82,l:33,hex:"#990f3f"},45:{h:339,s:83,l:39,hex:"#b6114b"},50:{h:339,s:84,l:45,hex:"#d31256"},55:{h:339,s:84,l:51,hex:"#eb1963"},60:{h:339,s:84,l:57,hex:"#ed3576"},65:{h:339,s:83,l:64,hex:"#ef578c"},70:{h:339,s:82,l:71,hex:"#f278a3"},75:{h:339,s:81,l:77,hex:"#f495b6"},80:{h:339,s:79,l:83,hex:"#f6b1c9"},85:{h:339,s:78,l:88,hex:"#f8c9d9"},90:{h:339,s:76,l:92,hex:"#fadbe6"},95:{h:339,s:73,l:96,hex:"#fcedf3"},100:{h:339,s:71,l:99,hex:"#fefbfc"}},curves:{h:{min:339,max:339,minControl:{x:26,y:339},maxControl:{x:67,y:339}},s:{min:57,max:71,minControl:{x:32,y:90},maxControl:{x:62,y:90}},l:{min:6,max:99,minControl:{x:54,y:28},maxControl:{x:64,y:79}}},uri:"maroon"},grey:{name:"Grey",hue:200,stops:{0:{h:200,s:5,l:5,hex:"#0c0d0d"},5:{h:200,s:5,l:10,hex:"#181a1b"},10:{h:200,s:5,l:14,hex:"#222425"},15:{h:200,s:5,l:19,hex:"#2e3133"},20:{h:200,s:5,l:23,hex:"#383c3e"},25:{h:200,s:5,l:28,hex:"#44494b"},30:{h:200,s:5,l:33,hex:"#505658"},35:{h:200,s:5,l:37,hex:"#5a6063"},40:{h:200,s:5,l:42,hex:"#666d70"},45:{h:200,s:5,l:47,hex:"#727a7e"},50:{h:200,s:5,l:52,hex:"#7e878b"},55:{h:200,s:5,l:56,hex:"#899194"},60:{h:200,s:5,l:61,hex:"#979da1"},65:{h:200,s:5,l:66,hex:"#a4aaad"},70:{h:200,s:5,l:71,hex:"#b1b6b9"},75:{h:200,s:5,l:75,hex:"#bcc0c2"},80:{h:200,s:5,l:80,hex:"#c9cdcf"},85:{h:200,s:5,l:85,hex:"#d7d9db"},90:{h:200,s:5,l:89,hex:"#e2e3e4"},95:{h:200,s:5,l:94,hex:"#eff0f0"},100:{h:200,s:5,l:98,hex:"#fafafa"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:5,max:5,minControl:{x:30,y:5},maxControl:{x:70,y:5}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey",greyscale:!0},grey20:{name:"Grey20",hue:200,stops:{0:{h:200,s:20,l:5,hex:"#0a0e0f"},5:{h:200,s:20,l:10,hex:"#141b1f"},10:{h:200,s:20,l:14,hex:"#1d262b"},15:{h:200,s:20,l:19,hex:"#27343a"},20:{h:200,s:20,l:23,hex:"#2f3f46"},25:{h:200,s:20,l:28,hex:"#394c56"},30:{h:200,s:20,l:33,hex:"#435a65"},35:{h:200,s:20,l:37,hex:"#4b6571"},40:{h:200,s:20,l:42,hex:"#567281"},45:{h:200,s:20,l:47,hex:"#608090"},50:{h:200,s:20,l:52,hex:"#6c8d9d"},55:{h:200,s:20,l:56,hex:"#7896a5"},60:{h:200,s:20,l:61,hex:"#88a2af"},65:{h:200,s:20,l:66,hex:"#97aeba"},70:{h:200,s:20,l:71,hex:"#a6bac4"},75:{h:200,s:20,l:75,hex:"#b3c3cc"},80:{h:200,s:20,l:80,hex:"#c2cfd6"},85:{h:200,s:20,l:85,hex:"#d1dbe0"},90:{h:200,s:20,l:89,hex:"#dde5e9"},95:{h:200,s:20,l:94,hex:"#edf1f3"},100:{h:200,s:20,l:98,hex:"#f9fafb"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:20,max:20,minControl:{x:30,y:20},maxControl:{x:70,y:20}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey20",greyscale:!0},grey40:{name:"Grey40",hue:200,stops:{0:{h:200,s:40,l:5,hex:"#080e12"},5:{h:200,s:40,l:10,hex:"#0f1d24"},10:{h:200,s:40,l:14,hex:"#152832"},15:{h:200,s:40,l:19,hex:"#1d3744"},20:{h:200,s:40,l:23,hex:"#234252"},25:{h:200,s:40,l:28,hex:"#2b5164"},30:{h:200,s:40,l:33,hex:"#325f76"},35:{h:200,s:40,l:37,hex:"#396b84"},40:{h:200,s:40,l:42,hex:"#407996"},45:{h:200,s:40,l:47,hex:"#4888a8"},50:{h:200,s:40,l:52,hex:"#5495b6"},55:{h:200,s:40,l:56,hex:"#629ebc"},60:{h:200,s:40,l:61,hex:"#74a9c3"},65:{h:200,s:40,l:66,hex:"#86b4cb"},70:{h:200,s:40,l:71,hex:"#97bfd3"},75:{h:200,s:40,l:75,hex:"#a6c8d9"},80:{h:200,s:40,l:80,hex:"#b8d3e0"},85:{h:200,s:40,l:85,hex:"#c9dee8"},90:{h:200,s:40,l:89,hex:"#d8e7ee"},95:{h:200,s:40,l:94,hex:"#eaf2f6"},100:{h:200,s:40,l:98,hex:"#f8fbfc"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:40,max:40,minControl:{x:30,y:40},maxControl:{x:70,y:40}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey40",greyscale:!0}},Gr={name:h_,comment:f_,uri:p_,source:g_,ranges:m_},rc=Object.keys(Gr.ranges),v_=Object.entries(Gr.ranges).filter(([,e])=>!e.greyscale).map(([e])=>e),y_=Object.entries(Gr.ranges).filter(([,e])=>e.greyscale).map(([e])=>e);var vv={exports:{}};/**
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
 */(function(e,t){(function(n,r){e.exports=r()})(Dl,function(){for(var n=function(c,h,p){return h===void 0&&(h=0),p===void 0&&(p=1),c<h?h:c>p?p:c},r=n,o=function(c){c._clipped=!1,c._unclipped=c.slice(0);for(var h=0;h<=3;h++)h<3?((c[h]<0||c[h]>255)&&(c._clipped=!0),c[h]=r(c[h],0,255)):h===3&&(c[h]=r(c[h],0,1));return c},l={},i=0,s=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];i<s.length;i+=1){var d=s[i];l["[object "+d+"]"]=d.toLowerCase()}var f=function(c){return l[Object.prototype.toString.call(c)]||"object"},m=f,b=function(c,h){return h===void 0&&(h=null),c.length>=3?Array.prototype.slice.call(c):m(c[0])=="object"&&h?h.split("").filter(function(p){return c[0][p]!==void 0}).map(function(p){return c[0][p]}):c[0]},C=f,N=function(c){if(c.length<2)return null;var h=c.length-1;return C(c[h])=="string"?c[h].toLowerCase():null},E=Math.PI,S={clip_rgb:o,limit:n,type:f,unpack:b,last:N,PI:E,TWOPI:E*2,PITHIRD:E/3,DEG2RAD:E/180,RAD2DEG:180/E},I={format:{},autodetect:[]},w=S.last,g=S.clip_rgb,y=S.type,v=I,L=function(){for(var h=[],p=arguments.length;p--;)h[p]=arguments[p];var x=this;if(y(h[0])==="object"&&h[0].constructor&&h[0].constructor===this.constructor)return h[0];var T=w(h),$=!1;if(!T){$=!0,v.sorted||(v.autodetect=v.autodetect.sort(function(W,K){return K.p-W.p}),v.sorted=!0);for(var k=0,M=v.autodetect;k<M.length;k+=1){var R=M[k];if(T=R.test.apply(R,h),T)break}}if(v.format[T]){var B=v.format[T].apply(null,$?h:h.slice(0,-1));x._rgb=g(B)}else throw new Error("unknown format: "+h);x._rgb.length===3&&x._rgb.push(1)};L.prototype.toString=function(){return y(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var _=L,P=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(P.Color,[null].concat(c)))};P.Color=_,P.version="2.4.2";var O=P,z=S.unpack,Z=Math.max,he=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=z(c,"rgb"),x=p[0],T=p[1],$=p[2];x=x/255,T=T/255,$=$/255;var k=1-Z(x,Z(T,$)),M=k<1?1/(1-k):0,R=(1-x-k)*M,B=(1-T-k)*M,W=(1-$-k)*M;return[R,B,W,k]},se=he,ze=S.unpack,ot=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=ze(c,"cmyk");var p=c[0],x=c[1],T=c[2],$=c[3],k=c.length>4?c[4]:1;return $===1?[0,0,0,k]:[p>=1?0:255*(1-p)*(1-$),x>=1?0:255*(1-x)*(1-$),T>=1?0:255*(1-T)*(1-$),k]},Ge=ot,Be=O,Ye=_,U=I,q=S.unpack,J=S.type,oe=se;Ye.prototype.cmyk=function(){return oe(this._rgb)},Be.cmyk=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Ye,[null].concat(c,["cmyk"])))},U.format.cmyk=Ge,U.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=q(c,"cmyk"),J(c)==="array"&&c.length===4)return"cmyk"}});var fe=S.unpack,Bt=S.last,pe=function(c){return Math.round(c*100)/100},tt=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=fe(c,"hsla"),x=Bt(c)||"lsa";return p[0]=pe(p[0]||0),p[1]=pe(p[1]*100)+"%",p[2]=pe(p[2]*100)+"%",x==="hsla"||p.length>3&&p[3]<1?(p[3]=p.length>3?p[3]:1,x="hsla"):p.length=3,x+"("+p.join(",")+")"},Ze=tt,ft=S.unpack,Pt=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=ft(c,"rgba");var p=c[0],x=c[1],T=c[2];p/=255,x/=255,T/=255;var $=Math.min(p,x,T),k=Math.max(p,x,T),M=(k+$)/2,R,B;return k===$?(R=0,B=Number.NaN):R=M<.5?(k-$)/(k+$):(k-$)/(2-k-$),p==k?B=(x-T)/(k-$):x==k?B=2+(T-p)/(k-$):T==k&&(B=4+(p-x)/(k-$)),B*=60,B<0&&(B+=360),c.length>3&&c[3]!==void 0?[B,R,M,c[3]]:[B,R,M]},Xr=Pt,Jr=S.unpack,Jn=S.last,Wo=Ze,ea=Xr,Ho=Math.round,ta=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=Jr(c,"rgba"),x=Jn(c)||"rgb";return x.substr(0,3)=="hsl"?Wo(ea(p),x):(p[0]=Ho(p[0]),p[1]=Ho(p[1]),p[2]=Ho(p[2]),(x==="rgba"||p.length>3&&p[3]<1)&&(p[3]=p.length>3?p[3]:1,x="rgba"),x+"("+p.slice(0,x==="rgb"?3:4).join(",")+")")},Ci=ta,Vo=S.unpack,na=Math.round,Go=function(){for(var c,h=[],p=arguments.length;p--;)h[p]=arguments[p];h=Vo(h,"hsl");var x=h[0],T=h[1],$=h[2],k,M,R;if(T===0)k=M=R=$*255;else{var B=[0,0,0],W=[0,0,0],K=$<.5?$*(1+T):$+T-$*T,V=2*$-K,ne=x/360;B[0]=ne+1/3,B[1]=ne,B[2]=ne-1/3;for(var ee=0;ee<3;ee++)B[ee]<0&&(B[ee]+=1),B[ee]>1&&(B[ee]-=1),6*B[ee]<1?W[ee]=V+(K-V)*6*B[ee]:2*B[ee]<1?W[ee]=K:3*B[ee]<2?W[ee]=V+(K-V)*(2/3-B[ee])*6:W[ee]=V;c=[na(W[0]*255),na(W[1]*255),na(W[2]*255)],k=c[0],M=c[1],R=c[2]}return h.length>3?[k,M,R,h[3]]:[k,M,R,1]},er=Go,Yo=er,Zo=I,qo=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,Si=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,wr=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,ra=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Qo=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,Oa=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,ki=Math.round,_i=function(c){c=c.toLowerCase().trim();var h;if(Zo.format.named)try{return Zo.format.named(c)}catch{}if(h=c.match(qo)){for(var p=h.slice(1,4),x=0;x<3;x++)p[x]=+p[x];return p[3]=1,p}if(h=c.match(Si)){for(var T=h.slice(1,5),$=0;$<4;$++)T[$]=+T[$];return T}if(h=c.match(wr)){for(var k=h.slice(1,4),M=0;M<3;M++)k[M]=ki(k[M]*2.55);return k[3]=1,k}if(h=c.match(ra)){for(var R=h.slice(1,5),B=0;B<3;B++)R[B]=ki(R[B]*2.55);return R[3]=+R[3],R}if(h=c.match(Qo)){var W=h.slice(1,4);W[1]*=.01,W[2]*=.01;var K=Yo(W);return K[3]=1,K}if(h=c.match(Oa)){var V=h.slice(1,4);V[1]*=.01,V[2]*=.01;var ne=Yo(V);return ne[3]=+h[4],ne}};_i.test=function(c){return qo.test(c)||Si.test(c)||wr.test(c)||ra.test(c)||Qo.test(c)||Oa.test(c)};var Ti=_i,Uc=O,F=_,D=I,H=S.type,Q=Ci,ie=Ti;F.prototype.css=function(c){return Q(this._rgb,c)},Uc.css=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(F,[null].concat(c,["css"])))},D.format.css=ie,D.autodetect.push({p:5,test:function(c){for(var h=[],p=arguments.length-1;p-- >0;)h[p]=arguments[p+1];if(!h.length&&H(c)==="string"&&ie.test(c))return"css"}});var ce=_,de=O,ue=I,ae=S.unpack;ue.format.gl=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=ae(c,"rgba");return p[0]*=255,p[1]*=255,p[2]*=255,p},de.gl=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(ce,[null].concat(c,["gl"])))},ce.prototype.gl=function(){var c=this._rgb;return[c[0]/255,c[1]/255,c[2]/255,c[3]]};var Te=S.unpack,Pe=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=Te(c,"rgb"),x=p[0],T=p[1],$=p[2],k=Math.min(x,T,$),M=Math.max(x,T,$),R=M-k,B=R*100/255,W=k/(255-R)*100,K;return R===0?K=Number.NaN:(x===M&&(K=(T-$)/R),T===M&&(K=2+($-x)/R),$===M&&(K=4+(x-T)/R),K*=60,K<0&&(K+=360)),[K,B,W]},bt=Pe,st=S.unpack,pt=Math.floor,yn=function(){for(var c,h,p,x,T,$,k=[],M=arguments.length;M--;)k[M]=arguments[M];k=st(k,"hcg");var R=k[0],B=k[1],W=k[2],K,V,ne;W=W*255;var ee=B*255;if(B===0)K=V=ne=W;else{R===360&&(R=0),R>360&&(R-=360),R<0&&(R+=360),R/=60;var me=pt(R),Ce=R-me,Le=W*(1-B),Ie=Le+ee*(1-Ce),kt=Le+ee*Ce,xt=Le+ee;switch(me){case 0:c=[xt,kt,Le],K=c[0],V=c[1],ne=c[2];break;case 1:h=[Ie,xt,Le],K=h[0],V=h[1],ne=h[2];break;case 2:p=[Le,xt,kt],K=p[0],V=p[1],ne=p[2];break;case 3:x=[Le,Ie,xt],K=x[0],V=x[1],ne=x[2];break;case 4:T=[kt,Le,xt],K=T[0],V=T[1],ne=T[2];break;case 5:$=[xt,Le,Ie],K=$[0],V=$[1],ne=$[2];break}}return[K,V,ne,k.length>3?k[3]:1]},aa=yn,Ko=S.unpack,Da=S.type,Ln=O,oa=_,Ba=I,Xo=bt;oa.prototype.hcg=function(){return Xo(this._rgb)},Ln.hcg=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(oa,[null].concat(c,["hcg"])))},Ba.format.hcg=aa,Ba.autodetect.push({p:1,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=Ko(c,"hcg"),Da(c)==="array"&&c.length===3)return"hcg"}});var Jo=S.unpack,ja=S.last,je=Math.round,Zt=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=Jo(c,"rgba"),x=p[0],T=p[1],$=p[2],k=p[3],M=ja(c)||"auto";k===void 0&&(k=1),M==="auto"&&(M=k<1?"rgba":"rgb"),x=je(x),T=je(T),$=je($);var R=x<<16|T<<8|$,B="000000"+R.toString(16);B=B.substr(B.length-6);var W="0"+je(k*255).toString(16);switch(W=W.substr(W.length-2),M.toLowerCase()){case"rgba":return"#"+B+W;case"argb":return"#"+W+B;default:return"#"+B}},tr=Zt,gt=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,el=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,Li=function(c){if(c.match(gt)){(c.length===4||c.length===7)&&(c=c.substr(1)),c.length===3&&(c=c.split(""),c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]);var h=parseInt(c,16),p=h>>16,x=h>>8&255,T=h&255;return[p,x,T,1]}if(c.match(el)){(c.length===5||c.length===9)&&(c=c.substr(1)),c.length===4&&(c=c.split(""),c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]+c[3]+c[3]);var $=parseInt(c,16),k=$>>24&255,M=$>>16&255,R=$>>8&255,B=Math.round(($&255)/255*100)/100;return[k,M,R,B]}throw new Error("unknown hex color: "+c)},$i=Li,P4=O,l1=_,A4=S.type,i1=I,F4=tr;l1.prototype.hex=function(c){return F4(this._rgb,c)},P4.hex=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(l1,[null].concat(c,["hex"])))},i1.format.hex=$i,i1.autodetect.push({p:4,test:function(c){for(var h=[],p=arguments.length-1;p-- >0;)h[p]=arguments[p+1];if(!h.length&&A4(c)==="string"&&[3,4,5,6,7,8,9].indexOf(c.length)>=0)return"hex"}});var O4=S.unpack,s1=S.TWOPI,D4=Math.min,B4=Math.sqrt,j4=Math.acos,z4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=O4(c,"rgb"),x=p[0],T=p[1],$=p[2];x/=255,T/=255,$/=255;var k,M=D4(x,T,$),R=(x+T+$)/3,B=R>0?1-M/R:0;return B===0?k=NaN:(k=(x-T+(x-$))/2,k/=B4((x-T)*(x-T)+(x-$)*(T-$)),k=j4(k),$>T&&(k=s1-k),k/=s1),[k*360,B,R]},U4=z4,W4=S.unpack,Wc=S.limit,za=S.TWOPI,Hc=S.PITHIRD,Ua=Math.cos,H4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=W4(c,"hsi");var p=c[0],x=c[1],T=c[2],$,k,M;return isNaN(p)&&(p=0),isNaN(x)&&(x=0),p>360&&(p-=360),p<0&&(p+=360),p/=360,p<1/3?(M=(1-x)/3,$=(1+x*Ua(za*p)/Ua(Hc-za*p))/3,k=1-(M+$)):p<2/3?(p-=1/3,$=(1-x)/3,k=(1+x*Ua(za*p)/Ua(Hc-za*p))/3,M=1-($+k)):(p-=2/3,k=(1-x)/3,M=(1+x*Ua(za*p)/Ua(Hc-za*p))/3,$=1-(k+M)),$=Wc(T*$*3),k=Wc(T*k*3),M=Wc(T*M*3),[$*255,k*255,M*255,c.length>3?c[3]:1]},V4=H4,G4=S.unpack,Y4=S.type,Z4=O,c1=_,d1=I,q4=U4;c1.prototype.hsi=function(){return q4(this._rgb)},Z4.hsi=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(c1,[null].concat(c,["hsi"])))},d1.format.hsi=V4,d1.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=G4(c,"hsi"),Y4(c)==="array"&&c.length===3)return"hsi"}});var Q4=S.unpack,K4=S.type,X4=O,u1=_,h1=I,J4=Xr;u1.prototype.hsl=function(){return J4(this._rgb)},X4.hsl=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(u1,[null].concat(c,["hsl"])))},h1.format.hsl=er,h1.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=Q4(c,"hsl"),K4(c)==="array"&&c.length===3)return"hsl"}});var e5=S.unpack,t5=Math.min,n5=Math.max,r5=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=e5(c,"rgb");var p=c[0],x=c[1],T=c[2],$=t5(p,x,T),k=n5(p,x,T),M=k-$,R,B,W;return W=k/255,k===0?(R=Number.NaN,B=0):(B=M/k,p===k&&(R=(x-T)/M),x===k&&(R=2+(T-p)/M),T===k&&(R=4+(p-x)/M),R*=60,R<0&&(R+=360)),[R,B,W]},a5=r5,o5=S.unpack,l5=Math.floor,i5=function(){for(var c,h,p,x,T,$,k=[],M=arguments.length;M--;)k[M]=arguments[M];k=o5(k,"hsv");var R=k[0],B=k[1],W=k[2],K,V,ne;if(W*=255,B===0)K=V=ne=W;else{R===360&&(R=0),R>360&&(R-=360),R<0&&(R+=360),R/=60;var ee=l5(R),me=R-ee,Ce=W*(1-B),Le=W*(1-B*me),Ie=W*(1-B*(1-me));switch(ee){case 0:c=[W,Ie,Ce],K=c[0],V=c[1],ne=c[2];break;case 1:h=[Le,W,Ce],K=h[0],V=h[1],ne=h[2];break;case 2:p=[Ce,W,Ie],K=p[0],V=p[1],ne=p[2];break;case 3:x=[Ce,Le,W],K=x[0],V=x[1],ne=x[2];break;case 4:T=[Ie,Ce,W],K=T[0],V=T[1],ne=T[2];break;case 5:$=[W,Ce,Le],K=$[0],V=$[1],ne=$[2];break}}return[K,V,ne,k.length>3?k[3]:1]},s5=i5,c5=S.unpack,d5=S.type,u5=O,f1=_,p1=I,h5=a5;f1.prototype.hsv=function(){return h5(this._rgb)},u5.hsv=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(f1,[null].concat(c,["hsv"])))},p1.format.hsv=s5,p1.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=c5(c,"hsv"),d5(c)==="array"&&c.length===3)return"hsv"}});var Ei={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},Wa=Ei,f5=S.unpack,g1=Math.pow,p5=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=f5(c,"rgb"),x=p[0],T=p[1],$=p[2],k=g5(x,T,$),M=k[0],R=k[1],B=k[2],W=116*R-16;return[W<0?0:W,500*(M-R),200*(R-B)]},Vc=function(c){return(c/=255)<=.04045?c/12.92:g1((c+.055)/1.055,2.4)},Gc=function(c){return c>Wa.t3?g1(c,1/3):c/Wa.t2+Wa.t0},g5=function(c,h,p){c=Vc(c),h=Vc(h),p=Vc(p);var x=Gc((.4124564*c+.3575761*h+.1804375*p)/Wa.Xn),T=Gc((.2126729*c+.7151522*h+.072175*p)/Wa.Yn),$=Gc((.0193339*c+.119192*h+.9503041*p)/Wa.Zn);return[x,T,$]},m1=p5,Ha=Ei,m5=S.unpack,v5=Math.pow,y5=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=m5(c,"lab");var p=c[0],x=c[1],T=c[2],$,k,M,R,B,W;return k=(p+16)/116,$=isNaN(x)?k:k+x/500,M=isNaN(T)?k:k-T/200,k=Ha.Yn*Zc(k),$=Ha.Xn*Zc($),M=Ha.Zn*Zc(M),R=Yc(3.2404542*$-1.5371385*k-.4985314*M),B=Yc(-.969266*$+1.8760108*k+.041556*M),W=Yc(.0556434*$-.2040259*k+1.0572252*M),[R,B,W,c.length>3?c[3]:1]},Yc=function(c){return 255*(c<=.00304?12.92*c:1.055*v5(c,1/2.4)-.055)},Zc=function(c){return c>Ha.t1?c*c*c:Ha.t2*(c-Ha.t0)},v1=y5,b5=S.unpack,w5=S.type,x5=O,y1=_,b1=I,C5=m1;y1.prototype.lab=function(){return C5(this._rgb)},x5.lab=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(y1,[null].concat(c,["lab"])))},b1.format.lab=v1,b1.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=b5(c,"lab"),w5(c)==="array"&&c.length===3)return"lab"}});var S5=S.unpack,k5=S.RAD2DEG,_5=Math.sqrt,T5=Math.atan2,L5=Math.round,$5=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=S5(c,"lab"),x=p[0],T=p[1],$=p[2],k=_5(T*T+$*$),M=(T5($,T)*k5+360)%360;return L5(k*1e4)===0&&(M=Number.NaN),[x,k,M]},w1=$5,E5=S.unpack,N5=m1,I5=w1,M5=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=E5(c,"rgb"),x=p[0],T=p[1],$=p[2],k=N5(x,T,$),M=k[0],R=k[1],B=k[2];return I5(M,R,B)},R5=M5,P5=S.unpack,A5=S.DEG2RAD,F5=Math.sin,O5=Math.cos,D5=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=P5(c,"lch"),x=p[0],T=p[1],$=p[2];return isNaN($)&&($=0),$=$*A5,[x,O5($)*T,F5($)*T]},x1=D5,B5=S.unpack,j5=x1,z5=v1,U5=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=B5(c,"lch");var p=c[0],x=c[1],T=c[2],$=j5(p,x,T),k=$[0],M=$[1],R=$[2],B=z5(k,M,R),W=B[0],K=B[1],V=B[2];return[W,K,V,c.length>3?c[3]:1]},C1=U5,W5=S.unpack,H5=C1,V5=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=W5(c,"hcl").reverse();return H5.apply(void 0,p)},G5=V5,Y5=S.unpack,Z5=S.type,S1=O,Ni=_,qc=I,k1=R5;Ni.prototype.lch=function(){return k1(this._rgb)},Ni.prototype.hcl=function(){return k1(this._rgb).reverse()},S1.lch=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Ni,[null].concat(c,["lch"])))},S1.hcl=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Ni,[null].concat(c,["hcl"])))},qc.format.lch=C1,qc.format.hcl=G5,["lch","hcl"].forEach(function(c){return qc.autodetect.push({p:2,test:function(){for(var h=[],p=arguments.length;p--;)h[p]=arguments[p];if(h=Y5(h,c),Z5(h)==="array"&&h.length===3)return c}})});var q5={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},_1=q5,Q5=_,T1=I,K5=S.type,tl=_1,X5=$i,J5=tr;Q5.prototype.name=function(){for(var c=J5(this._rgb,"rgb"),h=0,p=Object.keys(tl);h<p.length;h+=1){var x=p[h];if(tl[x]===c)return x.toLowerCase()}return c},T1.format.named=function(c){if(c=c.toLowerCase(),tl[c])return X5(tl[c]);throw new Error("unknown color name: "+c)},T1.autodetect.push({p:5,test:function(c){for(var h=[],p=arguments.length-1;p-- >0;)h[p]=arguments[p+1];if(!h.length&&K5(c)==="string"&&tl[c.toLowerCase()])return"named"}});var e6=S.unpack,t6=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=e6(c,"rgb"),x=p[0],T=p[1],$=p[2];return(x<<16)+(T<<8)+$},n6=t6,r6=S.type,a6=function(c){if(r6(c)=="number"&&c>=0&&c<=16777215){var h=c>>16,p=c>>8&255,x=c&255;return[h,p,x,1]}throw new Error("unknown num color: "+c)},o6=a6,l6=O,L1=_,$1=I,i6=S.type,s6=n6;L1.prototype.num=function(){return s6(this._rgb)},l6.num=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(L1,[null].concat(c,["num"])))},$1.format.num=o6,$1.autodetect.push({p:5,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c.length===1&&i6(c[0])==="number"&&c[0]>=0&&c[0]<=16777215)return"num"}});var c6=O,Qc=_,E1=I,N1=S.unpack,I1=S.type,M1=Math.round;Qc.prototype.rgb=function(c){return c===void 0&&(c=!0),c===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(M1)},Qc.prototype.rgba=function(c){return c===void 0&&(c=!0),this._rgb.slice(0,4).map(function(h,p){return p<3?c===!1?h:M1(h):h})},c6.rgb=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Qc,[null].concat(c,["rgb"])))},E1.format.rgb=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=N1(c,"rgba");return p[3]===void 0&&(p[3]=1),p},E1.autodetect.push({p:3,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=N1(c,"rgba"),I1(c)==="array"&&(c.length===3||c.length===4&&I1(c[3])=="number"&&c[3]>=0&&c[3]<=1))return"rgb"}});var Ii=Math.log,d6=function(c){var h=c/100,p,x,T;return h<66?(p=255,x=h<6?0:-155.25485562709179-.44596950469579133*(x=h-2)+104.49216199393888*Ii(x),T=h<20?0:-254.76935184120902+.8274096064007395*(T=h-10)+115.67994401066147*Ii(T)):(p=351.97690566805693+.114206453784165*(p=h-55)-40.25366309332127*Ii(p),x=325.4494125711974+.07943456536662342*(x=h-50)-28.0852963507957*Ii(x),T=255),[p,x,T,1]},R1=d6,u6=R1,h6=S.unpack,f6=Math.round,p6=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];for(var p=h6(c,"rgb"),x=p[0],T=p[2],$=1e3,k=4e4,M=.4,R;k-$>M;){R=(k+$)*.5;var B=u6(R);B[2]/B[0]>=T/x?k=R:$=R}return f6(R)},g6=p6,Kc=O,Mi=_,Xc=I,m6=g6;Mi.prototype.temp=Mi.prototype.kelvin=Mi.prototype.temperature=function(){return m6(this._rgb)},Kc.temp=Kc.kelvin=Kc.temperature=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Mi,[null].concat(c,["temp"])))},Xc.format.temp=Xc.format.kelvin=Xc.format.temperature=R1;var v6=S.unpack,Jc=Math.cbrt,y6=Math.pow,b6=Math.sign,w6=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=v6(c,"rgb"),x=p[0],T=p[1],$=p[2],k=[ed(x/255),ed(T/255),ed($/255)],M=k[0],R=k[1],B=k[2],W=Jc(.4122214708*M+.5363325363*R+.0514459929*B),K=Jc(.2119034982*M+.6806995451*R+.1073969566*B),V=Jc(.0883024619*M+.2817188376*R+.6299787005*B);return[.2104542553*W+.793617785*K-.0040720468*V,1.9779984951*W-2.428592205*K+.4505937099*V,.0259040371*W+.7827717662*K-.808675766*V]},P1=w6;function ed(c){var h=Math.abs(c);return h<.04045?c/12.92:(b6(c)||1)*y6((h+.055)/1.055,2.4)}var x6=S.unpack,Ri=Math.pow,C6=Math.sign,S6=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=x6(c,"lab");var p=c[0],x=c[1],T=c[2],$=Ri(p+.3963377774*x+.2158037573*T,3),k=Ri(p-.1055613458*x-.0638541728*T,3),M=Ri(p-.0894841775*x-1.291485548*T,3);return[255*td(4.0767416621*$-3.3077115913*k+.2309699292*M),255*td(-1.2684380046*$+2.6097574011*k-.3413193965*M),255*td(-.0041960863*$-.7034186147*k+1.707614701*M),c.length>3?c[3]:1]},A1=S6;function td(c){var h=Math.abs(c);return h>.0031308?(C6(c)||1)*(1.055*Ri(h,1/2.4)-.055):c*12.92}var k6=S.unpack,_6=S.type,T6=O,F1=_,O1=I,L6=P1;F1.prototype.oklab=function(){return L6(this._rgb)},T6.oklab=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(F1,[null].concat(c,["oklab"])))},O1.format.oklab=A1,O1.autodetect.push({p:3,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=k6(c,"oklab"),_6(c)==="array"&&c.length===3)return"oklab"}});var $6=S.unpack,E6=P1,N6=w1,I6=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=$6(c,"rgb"),x=p[0],T=p[1],$=p[2],k=E6(x,T,$),M=k[0],R=k[1],B=k[2];return N6(M,R,B)},M6=I6,R6=S.unpack,P6=x1,A6=A1,F6=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=R6(c,"lch");var p=c[0],x=c[1],T=c[2],$=P6(p,x,T),k=$[0],M=$[1],R=$[2],B=A6(k,M,R),W=B[0],K=B[1],V=B[2];return[W,K,V,c.length>3?c[3]:1]},O6=F6,D6=S.unpack,B6=S.type,j6=O,D1=_,B1=I,z6=M6;D1.prototype.oklch=function(){return z6(this._rgb)},j6.oklch=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(D1,[null].concat(c,["oklch"])))},B1.format.oklch=O6,B1.autodetect.push({p:3,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=D6(c,"oklch"),B6(c)==="array"&&c.length===3)return"oklch"}});var j1=_,U6=S.type;j1.prototype.alpha=function(c,h){return h===void 0&&(h=!1),c!==void 0&&U6(c)==="number"?h?(this._rgb[3]=c,this):new j1([this._rgb[0],this._rgb[1],this._rgb[2],c],"rgb"):this._rgb[3]};var W6=_;W6.prototype.clipped=function(){return this._rgb._clipped||!1};var la=_,H6=Ei;la.prototype.darken=function(c){c===void 0&&(c=1);var h=this,p=h.lab();return p[0]-=H6.Kn*c,new la(p,"lab").alpha(h.alpha(),!0)},la.prototype.brighten=function(c){return c===void 0&&(c=1),this.darken(-c)},la.prototype.darker=la.prototype.darken,la.prototype.brighter=la.prototype.brighten;var V6=_;V6.prototype.get=function(c){var h=c.split("."),p=h[0],x=h[1],T=this[p]();if(x){var $=p.indexOf(x)-(p.substr(0,2)==="ok"?2:0);if($>-1)return T[$];throw new Error("unknown channel "+x+" in mode "+p)}else return T};var Va=_,G6=S.type,Y6=Math.pow,Z6=1e-7,q6=20;Va.prototype.luminance=function(c){if(c!==void 0&&G6(c)==="number"){if(c===0)return new Va([0,0,0,this._rgb[3]],"rgb");if(c===1)return new Va([255,255,255,this._rgb[3]],"rgb");var h=this.luminance(),p="rgb",x=q6,T=function(k,M){var R=k.interpolate(M,.5,p),B=R.luminance();return Math.abs(c-B)<Z6||!x--?R:B>c?T(k,R):T(R,M)},$=(h>c?T(new Va([0,0,0]),this):T(this,new Va([255,255,255]))).rgb();return new Va($.concat([this._rgb[3]]))}return Q6.apply(void 0,this._rgb.slice(0,3))};var Q6=function(c,h,p){return c=nd(c),h=nd(h),p=nd(p),.2126*c+.7152*h+.0722*p},nd=function(c){return c/=255,c<=.03928?c/12.92:Y6((c+.055)/1.055,2.4)},an={},z1=_,U1=S.type,Pi=an,W1=function(c,h,p){p===void 0&&(p=.5);for(var x=[],T=arguments.length-3;T-- >0;)x[T]=arguments[T+3];var $=x[0]||"lrgb";if(!Pi[$]&&!x.length&&($=Object.keys(Pi)[0]),!Pi[$])throw new Error("interpolation mode "+$+" is not defined");return U1(c)!=="object"&&(c=new z1(c)),U1(h)!=="object"&&(h=new z1(h)),Pi[$](c,h,p).alpha(c.alpha()+p*(h.alpha()-c.alpha()))},H1=_,K6=W1;H1.prototype.mix=H1.prototype.interpolate=function(c,h){h===void 0&&(h=.5);for(var p=[],x=arguments.length-2;x-- >0;)p[x]=arguments[x+2];return K6.apply(void 0,[this,c,h].concat(p))};var V1=_;V1.prototype.premultiply=function(c){c===void 0&&(c=!1);var h=this._rgb,p=h[3];return c?(this._rgb=[h[0]*p,h[1]*p,h[2]*p,p],this):new V1([h[0]*p,h[1]*p,h[2]*p,p],"rgb")};var rd=_,X6=Ei;rd.prototype.saturate=function(c){c===void 0&&(c=1);var h=this,p=h.lch();return p[1]+=X6.Kn*c,p[1]<0&&(p[1]=0),new rd(p,"lch").alpha(h.alpha(),!0)},rd.prototype.desaturate=function(c){return c===void 0&&(c=1),this.saturate(-c)};var G1=_,Y1=S.type;G1.prototype.set=function(c,h,p){p===void 0&&(p=!1);var x=c.split("."),T=x[0],$=x[1],k=this[T]();if($){var M=T.indexOf($)-(T.substr(0,2)==="ok"?2:0);if(M>-1){if(Y1(h)=="string")switch(h.charAt(0)){case"+":k[M]+=+h;break;case"-":k[M]+=+h;break;case"*":k[M]*=+h.substr(1);break;case"/":k[M]/=+h.substr(1);break;default:k[M]=+h}else if(Y1(h)==="number")k[M]=h;else throw new Error("unsupported value for Color.set");var R=new G1(k,T);return p?(this._rgb=R._rgb,this):R}throw new Error("unknown channel "+$+" in mode "+T)}else return k};var J6=_,e8=function(c,h,p){var x=c._rgb,T=h._rgb;return new J6(x[0]+p*(T[0]-x[0]),x[1]+p*(T[1]-x[1]),x[2]+p*(T[2]-x[2]),"rgb")};an.rgb=e8;var t8=_,ad=Math.sqrt,Ga=Math.pow,n8=function(c,h,p){var x=c._rgb,T=x[0],$=x[1],k=x[2],M=h._rgb,R=M[0],B=M[1],W=M[2];return new t8(ad(Ga(T,2)*(1-p)+Ga(R,2)*p),ad(Ga($,2)*(1-p)+Ga(B,2)*p),ad(Ga(k,2)*(1-p)+Ga(W,2)*p),"rgb")};an.lrgb=n8;var r8=_,a8=function(c,h,p){var x=c.lab(),T=h.lab();return new r8(x[0]+p*(T[0]-x[0]),x[1]+p*(T[1]-x[1]),x[2]+p*(T[2]-x[2]),"lab")};an.lab=a8;var Z1=_,Ya=function(c,h,p,x){var T,$,k,M;x==="hsl"?(k=c.hsl(),M=h.hsl()):x==="hsv"?(k=c.hsv(),M=h.hsv()):x==="hcg"?(k=c.hcg(),M=h.hcg()):x==="hsi"?(k=c.hsi(),M=h.hsi()):x==="lch"||x==="hcl"?(x="hcl",k=c.hcl(),M=h.hcl()):x==="oklch"&&(k=c.oklch().reverse(),M=h.oklch().reverse());var R,B,W,K,V,ne;(x.substr(0,1)==="h"||x==="oklch")&&(T=k,R=T[0],W=T[1],V=T[2],$=M,B=$[0],K=$[1],ne=$[2]);var ee,me,Ce,Le;return!isNaN(R)&&!isNaN(B)?(B>R&&B-R>180?Le=B-(R+360):B<R&&R-B>180?Le=B+360-R:Le=B-R,me=R+p*Le):isNaN(R)?isNaN(B)?me=Number.NaN:(me=B,(V==1||V==0)&&x!="hsv"&&(ee=K)):(me=R,(ne==1||ne==0)&&x!="hsv"&&(ee=W)),ee===void 0&&(ee=W+p*(K-W)),Ce=V+p*(ne-V),x==="oklch"?new Z1([Ce,ee,me],x):new Z1([me,ee,Ce],x)},o8=Ya,q1=function(c,h,p){return o8(c,h,p,"lch")};an.lch=q1,an.hcl=q1;var l8=_,i8=function(c,h,p){var x=c.num(),T=h.num();return new l8(x+p*(T-x),"num")};an.num=i8;var s8=Ya,c8=function(c,h,p){return s8(c,h,p,"hcg")};an.hcg=c8;var d8=Ya,u8=function(c,h,p){return d8(c,h,p,"hsi")};an.hsi=u8;var h8=Ya,f8=function(c,h,p){return h8(c,h,p,"hsl")};an.hsl=f8;var p8=Ya,g8=function(c,h,p){return p8(c,h,p,"hsv")};an.hsv=g8;var m8=_,v8=function(c,h,p){var x=c.oklab(),T=h.oklab();return new m8(x[0]+p*(T[0]-x[0]),x[1]+p*(T[1]-x[1]),x[2]+p*(T[2]-x[2]),"oklab")};an.oklab=v8;var y8=Ya,b8=function(c,h,p){return y8(c,h,p,"oklch")};an.oklch=b8;var od=_,w8=S.clip_rgb,ld=Math.pow,id=Math.sqrt,sd=Math.PI,Q1=Math.cos,K1=Math.sin,x8=Math.atan2,C8=function(c,h,p){h===void 0&&(h="lrgb"),p===void 0&&(p=null);var x=c.length;p||(p=Array.from(new Array(x)).map(function(){return 1}));var T=x/p.reduce(function(me,Ce){return me+Ce});if(p.forEach(function(me,Ce){p[Ce]*=T}),c=c.map(function(me){return new od(me)}),h==="lrgb")return S8(c,p);for(var $=c.shift(),k=$.get(h),M=[],R=0,B=0,W=0;W<k.length;W++)if(k[W]=(k[W]||0)*p[0],M.push(isNaN(k[W])?0:p[0]),h.charAt(W)==="h"&&!isNaN(k[W])){var K=k[W]/180*sd;R+=Q1(K)*p[0],B+=K1(K)*p[0]}var V=$.alpha()*p[0];c.forEach(function(me,Ce){var Le=me.get(h);V+=me.alpha()*p[Ce+1];for(var Ie=0;Ie<k.length;Ie++)if(!isNaN(Le[Ie]))if(M[Ie]+=p[Ce+1],h.charAt(Ie)==="h"){var kt=Le[Ie]/180*sd;R+=Q1(kt)*p[Ce+1],B+=K1(kt)*p[Ce+1]}else k[Ie]+=Le[Ie]*p[Ce+1]});for(var ne=0;ne<k.length;ne++)if(h.charAt(ne)==="h"){for(var ee=x8(B/M[ne],R/M[ne])/sd*180;ee<0;)ee+=360;for(;ee>=360;)ee-=360;k[ne]=ee}else k[ne]=k[ne]/M[ne];return V/=x,new od(k,h).alpha(V>.99999?1:V,!0)},S8=function(c,h){for(var p=c.length,x=[0,0,0,0],T=0;T<c.length;T++){var $=c[T],k=h[T]/p,M=$._rgb;x[0]+=ld(M[0],2)*k,x[1]+=ld(M[1],2)*k,x[2]+=ld(M[2],2)*k,x[3]+=M[3]*k}return x[0]=id(x[0]),x[1]=id(x[1]),x[2]=id(x[2]),x[3]>.9999999&&(x[3]=1),new od(w8(x))},$n=O,Za=S.type,k8=Math.pow,cd=function(c){var h="rgb",p=$n("#ccc"),x=0,T=[0,1],$=[],k=[0,0],M=!1,R=[],B=!1,W=0,K=1,V=!1,ne={},ee=!0,me=1,Ce=function(G){if(G=G||["#fff","#000"],G&&Za(G)==="string"&&$n.brewer&&$n.brewer[G.toLowerCase()]&&(G=$n.brewer[G.toLowerCase()]),Za(G)==="array"){G.length===1&&(G=[G[0],G[0]]),G=G.slice(0);for(var le=0;le<G.length;le++)G[le]=$n(G[le]);$.length=0;for(var be=0;be<G.length;be++)$.push(be/(G.length-1))}return qt(),R=G},Le=function(G){if(M!=null){for(var le=M.length-1,be=0;be<le&&G>=M[be];)be++;return be-1}return 0},Ie=function(G){return G},kt=function(G){return G},xt=function(G,le){var be,ve;if(le==null&&(le=!1),isNaN(G)||G===null)return p;if(le)ve=G;else if(M&&M.length>2){var _t=Le(G);ve=_t/(M.length-2)}else K!==W?ve=(G-W)/(K-W):ve=1;ve=kt(ve),le||(ve=Ie(ve)),me!==1&&(ve=k8(ve,me)),ve=k[0]+ve*(1-k[0]-k[1]),ve=Math.min(1,Math.max(0,ve));var Ue=Math.floor(ve*1e4);if(ee&&ne[Ue])be=ne[Ue];else{if(Za(R)==="array")for(var $e=0;$e<$.length;$e++){var Ae=$[$e];if(ve<=Ae){be=R[$e];break}if(ve>=Ae&&$e===$.length-1){be=R[$e];break}if(ve>Ae&&ve<$[$e+1]){ve=(ve-Ae)/($[$e+1]-Ae),be=$n.interpolate(R[$e],R[$e+1],ve,h);break}}else Za(R)==="function"&&(be=R(ve));ee&&(ne[Ue]=be)}return be},qt=function(){return ne={}};Ce(c);var _e=function(G){var le=$n(xt(G));return B&&le[B]?le[B]():le};return _e.classes=function(G){if(G!=null){if(Za(G)==="array")M=G,T=[G[0],G[G.length-1]];else{var le=$n.analyze(T);G===0?M=[le.min,le.max]:M=$n.limits(le,"e",G)}return _e}return M},_e.domain=function(G){if(!arguments.length)return T;W=G[0],K=G[G.length-1],$=[];var le=R.length;if(G.length===le&&W!==K)for(var be=0,ve=Array.from(G);be<ve.length;be+=1){var _t=ve[be];$.push((_t-W)/(K-W))}else{for(var Ue=0;Ue<le;Ue++)$.push(Ue/(le-1));if(G.length>2){var $e=G.map(function(Fe,Oe){return Oe/(G.length-1)}),Ae=G.map(function(Fe){return(Fe-W)/(K-W)});Ae.every(function(Fe,Oe){return $e[Oe]===Fe})||(kt=function(Fe){if(Fe<=0||Fe>=1)return Fe;for(var Oe=0;Fe>=Ae[Oe+1];)Oe++;var Nn=(Fe-Ae[Oe])/(Ae[Oe+1]-Ae[Oe]),Sr=$e[Oe]+Nn*($e[Oe+1]-$e[Oe]);return Sr})}}return T=[W,K],_e},_e.mode=function(G){return arguments.length?(h=G,qt(),_e):h},_e.range=function(G,le){return Ce(G),_e},_e.out=function(G){return B=G,_e},_e.spread=function(G){return arguments.length?(x=G,_e):x},_e.correctLightness=function(G){return G==null&&(G=!0),V=G,qt(),V?Ie=function(le){for(var be=xt(0,!0).lab()[0],ve=xt(1,!0).lab()[0],_t=be>ve,Ue=xt(le,!0).lab()[0],$e=be+(ve-be)*le,Ae=Ue-$e,Fe=0,Oe=1,Nn=20;Math.abs(Ae)>.01&&Nn-- >0;)(function(){return _t&&(Ae*=-1),Ae<0?(Fe=le,le+=(Oe-le)*.5):(Oe=le,le+=(Fe-le)*.5),Ue=xt(le,!0).lab()[0],Ae=Ue-$e})();return le}:Ie=function(le){return le},_e},_e.padding=function(G){return G!=null?(Za(G)==="number"&&(G=[G,G]),k=G,_e):k},_e.colors=function(G,le){arguments.length<2&&(le="hex");var be=[];if(arguments.length===0)be=R.slice(0);else if(G===1)be=[_e(.5)];else if(G>1){var ve=T[0],_t=T[1]-ve;be=_8(0,G,!1).map(function(Oe){return _e(ve+Oe/(G-1)*_t)})}else{c=[];var Ue=[];if(M&&M.length>2)for(var $e=1,Ae=M.length,Fe=1<=Ae;Fe?$e<Ae:$e>Ae;Fe?$e++:$e--)Ue.push((M[$e-1]+M[$e])*.5);else Ue=T;be=Ue.map(function(Oe){return _e(Oe)})}return $n[le]&&(be=be.map(function(Oe){return Oe[le]()})),be},_e.cache=function(G){return G!=null?(ee=G,_e):ee},_e.gamma=function(G){return G!=null?(me=G,_e):me},_e.nodata=function(G){return G!=null?(p=$n(G),_e):p},_e};function _8(c,h,p){for(var x=[],T=c<h,$=p?T?h+1:h-1:h,k=c;T?k<$:k>$;T?k++:k--)x.push(k);return x}var nl=_,T8=cd,L8=function(c){for(var h=[1,1],p=1;p<c;p++){for(var x=[1],T=1;T<=h.length;T++)x[T]=(h[T]||0)+h[T-1];h=x}return h},$8=function(c){var h,p,x,T,$,k,M;if(c=c.map(function(V){return new nl(V)}),c.length===2)h=c.map(function(V){return V.lab()}),$=h[0],k=h[1],T=function(V){var ne=[0,1,2].map(function(ee){return $[ee]+V*(k[ee]-$[ee])});return new nl(ne,"lab")};else if(c.length===3)p=c.map(function(V){return V.lab()}),$=p[0],k=p[1],M=p[2],T=function(V){var ne=[0,1,2].map(function(ee){return(1-V)*(1-V)*$[ee]+2*(1-V)*V*k[ee]+V*V*M[ee]});return new nl(ne,"lab")};else if(c.length===4){var R;x=c.map(function(V){return V.lab()}),$=x[0],k=x[1],M=x[2],R=x[3],T=function(V){var ne=[0,1,2].map(function(ee){return(1-V)*(1-V)*(1-V)*$[ee]+3*(1-V)*(1-V)*V*k[ee]+3*(1-V)*V*V*M[ee]+V*V*V*R[ee]});return new nl(ne,"lab")}}else if(c.length>=5){var B,W,K;B=c.map(function(V){return V.lab()}),K=c.length-1,W=L8(K),T=function(V){var ne=1-V,ee=[0,1,2].map(function(me){return B.reduce(function(Ce,Le,Ie){return Ce+W[Ie]*Math.pow(ne,K-Ie)*Math.pow(V,Ie)*Le[me]},0)});return new nl(ee,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return T},E8=function(c){var h=$8(c);return h.scale=function(){return T8(h)},h},dd=O,En=function(c,h,p){if(!En[p])throw new Error("unknown blend mode "+p);return En[p](c,h)},xr=function(c){return function(h,p){var x=dd(p).rgb(),T=dd(h).rgb();return dd.rgb(c(x,T))}},Cr=function(c){return function(h,p){var x=[];return x[0]=c(h[0],p[0]),x[1]=c(h[1],p[1]),x[2]=c(h[2],p[2]),x}},N8=function(c){return c},I8=function(c,h){return c*h/255},M8=function(c,h){return c>h?h:c},R8=function(c,h){return c>h?c:h},P8=function(c,h){return 255*(1-(1-c/255)*(1-h/255))},A8=function(c,h){return h<128?2*c*h/255:255*(1-2*(1-c/255)*(1-h/255))},F8=function(c,h){return 255*(1-(1-h/255)/(c/255))},O8=function(c,h){return c===255?255:(c=255*(h/255)/(1-c/255),c>255?255:c)};En.normal=xr(Cr(N8)),En.multiply=xr(Cr(I8)),En.screen=xr(Cr(P8)),En.overlay=xr(Cr(A8)),En.darken=xr(Cr(M8)),En.lighten=xr(Cr(R8)),En.dodge=xr(Cr(O8)),En.burn=xr(Cr(F8));for(var D8=En,ud=S.type,B8=S.clip_rgb,j8=S.TWOPI,z8=Math.pow,U8=Math.sin,W8=Math.cos,X1=O,H8=function(c,h,p,x,T){c===void 0&&(c=300),h===void 0&&(h=-1.5),p===void 0&&(p=1),x===void 0&&(x=1),T===void 0&&(T=[0,1]);var $=0,k;ud(T)==="array"?k=T[1]-T[0]:(k=0,T=[T,T]);var M=function(R){var B=j8*((c+120)/360+h*R),W=z8(T[0]+k*R,x),K=$!==0?p[0]+R*$:p,V=K*W*(1-W)/2,ne=W8(B),ee=U8(B),me=W+V*(-.14861*ne+1.78277*ee),Ce=W+V*(-.29227*ne-.90649*ee),Le=W+V*(1.97294*ne);return X1(B8([me*255,Ce*255,Le*255,1]))};return M.start=function(R){return R==null?c:(c=R,M)},M.rotations=function(R){return R==null?h:(h=R,M)},M.gamma=function(R){return R==null?x:(x=R,M)},M.hue=function(R){return R==null?p:(p=R,ud(p)==="array"?($=p[1]-p[0],$===0&&(p=p[1])):$=0,M)},M.lightness=function(R){return R==null?T:(ud(R)==="array"?(T=R,k=R[1]-R[0]):(T=[R,R],k=0),M)},M.scale=function(){return X1.scale(M)},M.hue(p),M},V8=_,G8="0123456789abcdef",Y8=Math.floor,Z8=Math.random,q8=function(){for(var c="#",h=0;h<6;h++)c+=G8.charAt(Y8(Z8()*16));return new V8(c,"hex")},hd=f,J1=Math.log,Q8=Math.pow,K8=Math.floor,X8=Math.abs,ep=function(c,h){h===void 0&&(h=null);var p={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return hd(c)==="object"&&(c=Object.values(c)),c.forEach(function(x){h&&hd(x)==="object"&&(x=x[h]),x!=null&&!isNaN(x)&&(p.values.push(x),p.sum+=x,x<p.min&&(p.min=x),x>p.max&&(p.max=x),p.count+=1)}),p.domain=[p.min,p.max],p.limits=function(x,T){return tp(p,x,T)},p},tp=function(c,h,p){h===void 0&&(h="equal"),p===void 0&&(p=7),hd(c)=="array"&&(c=ep(c));var x=c.min,T=c.max,$=c.values.sort(function(pd,gd){return pd-gd});if(p===1)return[x,T];var k=[];if(h.substr(0,1)==="c"&&(k.push(x),k.push(T)),h.substr(0,1)==="e"){k.push(x);for(var M=1;M<p;M++)k.push(x+M/p*(T-x));k.push(T)}else if(h.substr(0,1)==="l"){if(x<=0)throw new Error("Logarithmic scales are only possible for values > 0");var R=Math.LOG10E*J1(x),B=Math.LOG10E*J1(T);k.push(x);for(var W=1;W<p;W++)k.push(Q8(10,R+W/p*(B-R)));k.push(T)}else if(h.substr(0,1)==="q"){k.push(x);for(var K=1;K<p;K++){var V=($.length-1)*K/p,ne=K8(V);if(ne===V)k.push($[ne]);else{var ee=V-ne;k.push($[ne]*(1-ee)+$[ne+1]*ee)}}k.push(T)}else if(h.substr(0,1)==="k"){var me,Ce=$.length,Le=new Array(Ce),Ie=new Array(p),kt=!0,xt=0,qt=null;qt=[],qt.push(x);for(var _e=1;_e<p;_e++)qt.push(x+_e/p*(T-x));for(qt.push(T);kt;){for(var G=0;G<p;G++)Ie[G]=0;for(var le=0;le<Ce;le++)for(var be=$[le],ve=Number.MAX_VALUE,_t=void 0,Ue=0;Ue<p;Ue++){var $e=X8(qt[Ue]-be);$e<ve&&(ve=$e,_t=Ue),Ie[_t]++,Le[le]=_t}for(var Ae=new Array(p),Fe=0;Fe<p;Fe++)Ae[Fe]=null;for(var Oe=0;Oe<Ce;Oe++)me=Le[Oe],Ae[me]===null?Ae[me]=$[Oe]:Ae[me]+=$[Oe];for(var Nn=0;Nn<p;Nn++)Ae[Nn]*=1/Ie[Nn];kt=!1;for(var Sr=0;Sr<p;Sr++)if(Ae[Sr]!==qt[Sr]){kt=!0;break}qt=Ae,xt++,xt>200&&(kt=!1)}for(var kr={},qa=0;qa<p;qa++)kr[qa]=[];for(var Qa=0;Qa<Ce;Qa++)me=Le[Qa],kr[me].push($[Qa]);for(var rr=[],ia=0;ia<p;ia++)rr.push(kr[ia][0]),rr.push(kr[ia][kr[ia].length-1]);rr=rr.sort(function(pd,gd){return pd-gd}),k.push(rr[0]);for(var rl=1;rl<rr.length;rl+=2){var sa=rr[rl];!isNaN(sa)&&k.indexOf(sa)===-1&&k.push(sa)}}return k},np={analyze:ep,limits:tp},rp=_,J8=function(c,h){c=new rp(c),h=new rp(h);var p=c.luminance(),x=h.luminance();return p>x?(p+.05)/(x+.05):(x+.05)/(p+.05)},ap=_,nr=Math.sqrt,ct=Math.pow,e7=Math.min,t7=Math.max,op=Math.atan2,lp=Math.abs,Ai=Math.cos,ip=Math.sin,n7=Math.exp,sp=Math.PI,r7=function(c,h,p,x,T){p===void 0&&(p=1),x===void 0&&(x=1),T===void 0&&(T=1);var $=function(sa){return 360*sa/(2*sp)},k=function(sa){return 2*sp*sa/360};c=new ap(c),h=new ap(h);var M=Array.from(c.lab()),R=M[0],B=M[1],W=M[2],K=Array.from(h.lab()),V=K[0],ne=K[1],ee=K[2],me=(R+V)/2,Ce=nr(ct(B,2)+ct(W,2)),Le=nr(ct(ne,2)+ct(ee,2)),Ie=(Ce+Le)/2,kt=.5*(1-nr(ct(Ie,7)/(ct(Ie,7)+ct(25,7)))),xt=B*(1+kt),qt=ne*(1+kt),_e=nr(ct(xt,2)+ct(W,2)),G=nr(ct(qt,2)+ct(ee,2)),le=(_e+G)/2,be=$(op(W,xt)),ve=$(op(ee,qt)),_t=be>=0?be:be+360,Ue=ve>=0?ve:ve+360,$e=lp(_t-Ue)>180?(_t+Ue+360)/2:(_t+Ue)/2,Ae=1-.17*Ai(k($e-30))+.24*Ai(k(2*$e))+.32*Ai(k(3*$e+6))-.2*Ai(k(4*$e-63)),Fe=Ue-_t;Fe=lp(Fe)<=180?Fe:Ue<=_t?Fe+360:Fe-360,Fe=2*nr(_e*G)*ip(k(Fe)/2);var Oe=V-R,Nn=G-_e,Sr=1+.015*ct(me-50,2)/nr(20+ct(me-50,2)),kr=1+.045*le,qa=1+.015*le*Ae,Qa=30*n7(-ct(($e-275)/25,2)),rr=2*nr(ct(le,7)/(ct(le,7)+ct(25,7))),ia=-rr*ip(2*k(Qa)),rl=nr(ct(Oe/(p*Sr),2)+ct(Nn/(x*kr),2)+ct(Fe/(T*qa),2)+ia*(Nn/(x*kr))*(Fe/(T*qa)));return t7(0,e7(100,rl))},cp=_,a7=function(c,h,p){p===void 0&&(p="lab"),c=new cp(c),h=new cp(h);var x=c.get(p),T=h.get(p),$=0;for(var k in x){var M=(x[k]||0)-(T[k]||0);$+=M*M}return Math.sqrt($)},o7=_,l7=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];try{return new(Function.prototype.bind.apply(o7,[null].concat(c))),!0}catch{return!1}},dp=O,up=cd,i7={cool:function(){return up([dp.hsl(180,1,.9),dp.hsl(250,.7,.4)])},hot:function(){return up(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Fi={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},fd=0,hp=Object.keys(Fi);fd<hp.length;fd+=1){var fp=hp[fd];Fi[fp.toLowerCase()]=Fi[fp]}var s7=Fi,wt=O;wt.average=C8,wt.bezier=E8,wt.blend=D8,wt.cubehelix=H8,wt.mix=wt.interpolate=W1,wt.random=q8,wt.scale=cd,wt.analyze=np.analyze,wt.contrast=J8,wt.deltaE=r7,wt.distance=a7,wt.limits=np.limits,wt.valid=l7,wt.scales=i7,wt.colors=_1,wt.brewer=s7;var c7=wt;return c7})})(vv);var b_=vv.exports;const w_=Kn(b_);function x_(e){const{h:t,s:n,l:r}=e;return w_.hsl(t,n/100,r/100)}const C_=e=>x_(e).luminance(),yv=e=>C_(e)<.5,_o=({label:e,checked:t,toggle:n})=>u("label",{className:"checkbox no-focus",children:[a("input",{type:"checkbox",checked:t,onChange:n}),e]}),bv=`// redefine any of the following hues to taste...
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
`,S_=()=>{const[e,t]=j.useState({names:!1,info:!1,show5s:!1}),n=i=>t(s=>({...s,[i]:!s[i]})),r=()=>n("names"),o=()=>n("info"),l=()=>n("show5s");return u("div",{className:"prose",children:[a("h1",{children:"Standard Colors"}),a("p",{children:"The following greyscale ranges are also defined."}),u("div",{className:"flex space end",children:[a("h2",{children:"Greyscale Ranges"}),u("div",{className:"text-right color-options",children:[a(_o,{label:"Show Names",checked:e.names,toggle:r}),a(_o,{label:"Show Info",checked:e.info,toggle:o}),a(_o,{label:"Show 5s",checked:e.show5s,toggle:l})]})]}),a("div",{className:`ranges ${e.names?"names":"nameless"}`,children:rc.filter(i=>Gr.ranges[i].greyscale).map(i=>a(k_,{uri:i,range:Gr.ranges[i],options:e},i))}),a("h2",{children:"Brand Hue"}),u("p",{children:["The greyscale ranges are designed to based on your primary brand color. The ",a("code",{children:"grey"})," range is desaturated to around 5%.  The"," ",a("code",{children:"grey20"})," and ",a("code",{children:"grey40"})," ranges are saturated to around 20% and 40% respectively."]}),u("p",{children:["The brand color for this website is ",a("code",{children:"violet"})," which is why these greyscales have a violet tinge to them."]}),u("p",{children:["Each of the colours show above has a corresponding SCSS variable composed of the color name and stop delimited by a hyphen, e.g."," ",a("code",{children:"$red-0"})," through to ",a("code",{children:"$grey-100"}),".  They are also defined as CSS custom properties, e.g. ",a("code",{children:"--red-0"})," through to ",a("code",{children:"--grey-100"}),"."]}),u("p",{children:["Each range of colors is built from a base hue.  These are defined in SASS variables using the SASS ",a("code",{children:"!default"})," flag.  If you want to adjust the hues you can set any of these SASS variables before importing the main ",a("code",{children:"badger-ui.scss"})," component."]}),a(Re,{code:bv,caption:"Customising Hues",language:"scss",expand:!0}),a("h2",{children:"TODO"}),u("ul",{children:[a("li",{children:"Editing or updating a palette using Badger Color"}),a("li",{children:"Expanding the palette into SCSS files"}),a("li",{children:"Customising the palette using SCSS variables"}),a("li",{children:"Customising the color hues"}),a("li",{children:"Defining your brand color"}),a("li",{children:"Adding/editing CSS scopes"}),a("li",{children:"Including or omitting colors"})]})]})},k_=({uri:e,range:t,options:n})=>u("div",{className:"range",children:[n.names&&a("h3",{children:t.name}),a("div",{className:"swatches",children:vi(0,100,n.show5s?5:10).map(r=>a(__,{uri:e,range:t,stop:r,options:n},r))})]}),__=({uri:e,range:t,stop:n,options:r})=>{const o=t.stops[n];return a("div",{className:`swatch ${yv(o)?"dark":"light"}`,style:{backgroundColor:`var(--${e}-${n})`},children:r.info&&a(wv,{uri:e,stop:n,color:o})})},wv=({uri:e,stop:t,color:n})=>u("div",{children:[u("div",{className:"stop",children:[e,"-",t]}),u("div",{className:"specs",children:[n.hex,a("br",{}),"h:",n.h,"°",a("br",{}),"s:",n.s,"%",a("br",{}),"l:",n.l,"%"]})]}),T_=Object.freeze(Object.defineProperty({__proto__:null,Info:wv,default:S_},Symbol.toStringTag,{value:"Module"})),L_=`# Path to the palette data file (exported from
# badger-color) relative to the project root
palette: config/my-palette.json

# Path to the SCSS output directory, also
# relative to the project root
output: styles/color

# Your default brand color
brandColor: blue
`,$_=`{
  "scripts": {
    "palette": "badger-css-palette-scss -c config/export-my-palette.yaml -v"
  }
}`,E_=`## using npm
$ npm run palette

## using yarn
$ yarn run palette

## using pnpm
$ pnpm run palette`,N_=`// Load the default helpers and configuration files
@import '@abw/badger-css/styles/helpers/all.scss';
@import '@abw/badger-css/styles/config/all.scss';

// Load your custom palette
@import "color/palette.scss";

// Then the default utilities, form styles and other components
@import "@abw/badger-css/styles/utilities/all.scss";
@import "@abw/badger-css/styles/forms/all.scss";
@import "@abw/badger-css/styles/components/all.scss";
`,I_=`// Replace this:
// @import "@abw/badger-css/styles/badger.scss";

// With something like this (you may need to adjust
// the path prefix, depending on where you're loading
// it from, e.g. "../styles/badger.scss")
@import "styles/badger.scss";`,Xe=({children:e,align:t="start"})=>a("div",{className:`grid-2 gap-h-8 stack-desktop ${t}`,style:{"--prose-width":"100%"},children:e}),M_=()=>u("div",{className:"prose",children:[a("h1",{children:"Custom Palette"}),a("p",{children:"The pre-defined color palette is a good starting point for building a web site.  There's a certain amount of flexibility built in to the SASS source files: you can adjust the hues of the different color ranges, define your own brand color or colors, and specify which of the color ranges you want to include (and implicitly, which ones you don't want)."}),u("p",{children:["When you need a bit more flexibility you can head over to the"," ",a("a",{href:"https://abw.github.io/badger-color/",children:"Badger Color"})," web app and either customise one of the standard palettes or design your own palette from scratch."]}),a("p",{children:"You can then download the palette data as a JSON file and use the script provided to generate the SCSS configuration files for your palette, ready to integrate into Badger CSS.  At any point you can upload the palette back into Badger Color, make some adjustments, download it again and repeat the process."}),u("p",{children:["You'll need to have ",a("code",{children:"@abw/badger-css"})," installed as a developer dependency for your project for these next steps to work. See the ",a(Ee,{to:"/getting-started/installation",text:"installation"})," ","page for details (TL;DR: ",a("code",{children:"npm add -D @abw/badger-css"})," or the equivalent with ",a("code",{children:"yarn"})," or ",a("code",{children:"pnpm"}),")."]}),a("h2",{children:"Palette Configuration File"}),u(Xe,{children:[u("div",{children:[u("p",{children:["For these examples, we'll assume that you've download your custom palette file and saved it in a ",a("code",{children:"config"})," directory under your project root as ",a("code",{children:"my-palette.json"}),".  It doesn't have to be in the ",a("code",{children:"config"})," directory - you can put it anywhere you like in your project."]}),u("p",{children:["You then need to create a configuration file like the one shown here.  It can be a YAML file or JSON file, you can call it anything you like (as long as it has a ",a("code",{children:".yaml"})," or ",a("code",{children:".json"})," ","file extension), and you can put it anywhere you like in your project. Here we'll assume it's called"," ",a("code",{children:"export-my-palette.yaml"})," and is also located in the ",a("code",{children:"config"})," directory under the project root."]}),u("p",{children:["You should define ",a("code",{children:"palette"})," to be the path to your palette data file (relative to the project root), and"," ",a("code",{children:"output"})," to be a path to the directory where you want the SCSS files to be written (also relative to the project root)."]}),u("p",{children:["You can also define your brand color as ",a("code",{children:"brandColor"}),". There are other configuration options you can specify but we'll keep it simple for now."]})]}),a(Re,{code:L_,caption:"config/export-my-palette.yaml",language:"yaml",expand:!0})]}),u("h2",{children:["Adding a ",a("code",{children:"package.json"})," Script"]}),u(Xe,{children:[u("div",{children:[u("p",{children:["Then add a line to the ",a("code",{children:"scripts"})," section of your"," ",a("code",{children:"package.json"})," file like this."]}),u("p",{children:["The ",a("code",{children:"-c"})," (or ",a("code",{children:"--config"})," if you prefer verbosity) option tells it where your config file is located.  The ",a("code",{children:"-v"})," ","(or ",a("code",{children:"--verbose"}),") option enables messages to tell you what it's doing.  You can leave this off if you prefer."]})]}),a(Re,{code:$_,caption:"package.json",language:"json",expand:!0})]}),a("h2",{children:"Export the Palette as SCSS"}),u(Xe,{children:[u("div",{children:[u("p",{children:["You can then ",a("code",{children:"run palette"})," from the command line using"," ",a("code",{children:"npm"}),", ",a("code",{children:"yarn"})," or ",a("code",{children:"pnpm"}),", depending on which package manager you're using."]}),u("p",{children:["If you've got the verbose mode enabled, you should see a message reporting each color range being written to a file in"," ",a("code",{children:"style/color/range/XXX"}),", and the main palette index file being written to ",a("code",{children:"style/color/palette.scss"}),"."]})]}),a(Re,{code:E_,caption:"Exporting the palette",language:"bash",expand:!0})]}),u("h2",{children:["Defining a Custom ",a("code",{children:"badger.scss"})," File"]}),u(Xe,{children:[u("div",{children:[u("p",{children:["Now you need to define your own version of the main"," ",a("code",{children:"badger.scss"})," which loads your palette instead of the default one."]}),u("p",{children:["In this example we'll assume that it's saved as",a("code",{children:"badger.scss"})," in the ",a("code",{children:"styles"})," directory, alongside the newly created ",a("code",{children:"color"})," directory that has been exported from the palette."]}),a("p",{children:"This is also a good place to set any SASS variables that change the defaults for Badger CSS.  They should go at the top of this file."})]}),a(Re,{code:N_,caption:"Custom badger.scss",language:"scss",expand:!0})]}),u("h2",{children:["Replace the Standard ",a("code",{children:"badger.scss"})," File"]}),u(Xe,{children:[a("div",{children:u("p",{children:["Now you just need to include the new file ",a("code",{children:"badger.scss"})," ","into your website or main stylesheet.  If you were previously loading the default ",a("code",{children:"badger.scss"})," then should change the path to point to your new local ",a("code",{children:"badger.scss"})," file."]})}),a(Re,{code:I_,caption:"Including your badger.scss",language:"scss",expand:!0})]})]}),R_=Object.freeze(Object.defineProperty({__proto__:null,default:M_},Symbol.toStringTag,{value:"Module"})),P_=`// define the hues for the greyscale colors...
$grey-hue:   40;
$grey20-hue: 40;
$grey40-hue: 40;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,bi=({children:e,code:t,caption:n,language:r,expand:o,className:l=""})=>u("div",{className:`grid-2 gap-8 start stack-desktop ${l}`,children:[a("div",{children:e}),a(Re,{code:t,caption:n,language:r,expand:o,className:"mar-b-8"})]}),A_=()=>{const[e,t]=j.useState({names:!1,info:!1,show5s:!1}),n=i=>t(s=>({...s,[i]:!s[i]})),r=()=>n("names"),o=()=>n("info"),l=()=>n("show5s");return u("div",{className:"prose",children:[a("h1",{children:"Standard Colors"}),u("p",{children:["The following standard color ranges are defined.  This palette was created using ",a("a",{href:"https://abw.github.io/badger-color",children:"Badger Color"}),", a companion to this library.  You can use it to clone and update this palette or to create your own palettes from scratch."]}),u("p",{children:["Each color range is divided into color ",a("em",{children:"stops"}),".  They range in increments of 5 from ",a("code",{children:"0"})," which is very close to black, up to"," ",a("code",{children:"100"}),", which is very close to white."]}),a(i0,{title:"Color Ranges",colors:rc.filter(i=>!Gr.ranges[i].greyscale),options:e,toggleNames:r,toggleInfo:o,toggleShow5s:l}),u("p",{children:["Each range of colors is built from a base hue.  These are defined in SASS variables using the SASS ",a("code",{children:"!default"})," flag.  If you want to adjust the hues you can set any of these SASS variables before importing the main ",a("code",{children:"badger.scss"})," component."]}),a(Re,{code:bv,caption:"Customising Hues",language:"scss",expand:!0}),a(i0,{title:"Greyscale Ranges",colors:rc.filter(i=>Gr.ranges[i].greyscale),options:e,toggleNames:r,toggleInfo:o,toggleShow5s:l}),u(bi,{code:P_,caption:"Customising Greyscale Hues",language:"scss",className:"mar-t-8",expand:!0,children:[u("p",{children:["Three greyscale color ranges are also defined.  They are designed to be based on your primary brand color. The ",a("code",{children:"grey"})," range is desaturated to around 5%.  The"," ",a("code",{children:"grey20"})," and ",a("code",{children:"grey40"})," ranges are saturated to around 20% and 40% respectively."]}),u("p",{children:["The brand color for this website is ",a("code",{children:"violet"})," which is why these greyscales have a violet tinge to them.  You can set the hues for these color ranges using the ",a("code",{children:"$grey-hue"}),","," ",a("code",{children:"$grey20-hue"})," and ",a("code",{children:"$grey40-hue"})," variables."]})]}),u("p",{className:"mar-t-4",children:[a(Ee,{to:"/colors/brand",text:"Read on"})," to see how you can define your own brand color and automatically get greyscales to match."]})]})},i0=({title:e,colors:t,options:n,toggleNames:r,toggleInfo:o,toggleShow5s:l})=>u(Mn,{children:[u("div",{className:"flex space end",children:[a("h2",{children:e}),u("div",{className:"text-right color-options",children:[a(_o,{label:"Show Names",checked:n.names,toggle:r}),a(_o,{label:"Show Info",checked:n.info,toggle:o}),a(_o,{label:"Show 5s",checked:n.show5s,toggle:l})]})]}),a("div",{className:`ranges ${n.names?"names":"nameless"}`,children:t.map(i=>a(F_,{uri:i,range:Gr.ranges[i],options:n},i))})]}),F_=({uri:e,range:t,options:n})=>u("div",{className:"range",children:[n.names&&a("h3",{children:t.name}),a("div",{className:"swatches",children:vi(0,100,n.show5s?5:10).map(r=>a(O_,{uri:e,range:t,stop:r,options:n},r))})]}),O_=({uri:e,range:t,stop:n,options:r})=>{const o=t.stops[n];return a("div",{className:`swatch ${yv(o)?"dark":"light"}`,style:{backgroundColor:`var(--${e}-${n})`},children:r.info&&a(xv,{uri:e,stop:n,color:o})})},xv=({uri:e,stop:t,color:n})=>u("div",{children:[u("div",{className:"stop",children:[e,"-",t]}),u("div",{className:"specs",children:[n.hex,a("br",{}),"h:",n.h,"°",a("br",{}),"s:",n.s,"%",a("br",{}),"l:",n.l,"%"]})]}),D_=Object.freeze(Object.defineProperty({__proto__:null,Info:xv,default:A_},Symbol.toStringTag,{value:"Module"})),A=({Component:e,code:t,html:n,children:r,className:o="",caption:l,fixed:i,expand:s,language:d})=>u("div",{className:`example grid-2 gap-8 stack-desktop ${o}`,children:[a("div",{className:"source",children:a(Re,{caption:l,code:t||n,expand:s,fixed:i,language:n?"html":d})}),!!r&&a("div",{className:"interim",children:r}),e?u("div",{className:"output",children:[a("h4",{className:"caption",children:"Output"}),a(e,{})]}):null,n?u("div",{className:"output",children:[a("h4",{className:"caption",children:"Output"}),a("div",{dangerouslySetInnerHTML:{__html:n}})]}):null]}),B_=`<div class="
  violet border pad-4 bdr-2 bdw-2
  fgc-40 bgc-85 hdc-30 bdc-70
">
  <h3>Colors</h3>
  Foreground color violet-40<br/>
  Background color violet-85<br/>
  Heading color violet-30<br/>
  Border color violet-70<br/>
</div>
`,j_=`<div class="
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
`,z_=`<div class="red grid-3 gap-2">
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
`,U_=`<!-- Explicit color range -->
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
</div>`,W_=`<div>
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
`,H_={bars:"M0 96C0 78 14 64 32 64H416c18 0 32 14 32 32s-14 32-32 32H32C14 128 0 114 0 96zM0 256c0-18 14-32 32-32H416c18 0 32 14 32 32s-14 32-32 32H32c-18 0-32-14-32-32zM448 416c0 18-14 32-32 32H32c-18 0-32-14-32-32s14-32 32-32H416c18 0 32 14 32 32z",check:"M486,91C499,104 499,127 486,140L212,422C198,435 177,435 163,422L26,281C13,267 13,245 26,231C39,217 61,217 75,231L187,347L438,91C451,77 473,77 486,91L486,91Z",cross:"M456,109C470,94 470,71 456,56C441,42 418,42 403,56L256,204L109,56C94,42 71,42 56,56C42,71 42,94 56,109L204,256L56,403C42,418 42,441 56,456C71,470 94,470 109,456L256,308L403,456C418,470 441,470 456,456C470,441 470,418 456,403L308,256L456,109Z",github:"M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z",info:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13 0-24-11-24-24s11-24 24-24h48c13 0 24 11 24 24v88h8c13 0 24 11 24 24s-11 24-24 24H216c-13 0-24-11-24-24s11-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",lock:"M159,133L159,226L301,226L301,133C301,94 269,62 230,62C191,62 159,94 159,133ZM101,226L101,133C101,62 159,4 230,4C301,4 359,62 359,133L359,226L373,226C404,226 430,252 430,283L430,455C430,486 404,512 373,512L87,512C56,512 30,486 30,455L30,283C30,252 56,226 87,226L101,226Z",pen:"M356,34L311,79L433,201L478,156C502,132 502,94 478,71L441,34C418,10 380,10 356,34L356,34ZM290,100L71,319C61,329 54,341 50,355L16,468C14,476 16,484 22,490C28,496 36,498 44,496L157,462C171,458 183,451 192,442L412,222L290,100Z",plus:"M292,56C292,36 276,20 256,20C236,20 220,36 220,56L220,220L56,220C36,220 20,236 20,256C20,276 36,292 56,292L220,292L220,456C220,476 236,492 256,492C276,492 292,476 292,456L292,292L456,292C476,292 492,276 492,256C492,236 476,220 456,220L292,220L292,56Z",trash:"M173,33L166,46L76,46C59,46 46,59 46,76C46,93 59,106 76,106L436,106C453,106 466,93 466,76C466,59 453,46 436,46L346,46L339,33C334,22 324,16 312,16L200,16C188,16 178,22 173,33ZM436,136L76,136L96,454C97,478 117,496 141,496L371,496C395,496 415,478 416,454L436,136Z",undo:"M168,224L40,224C27,224 16,213 16,200L16,72C16,62 22,54 31,50C40,46 50,48 57,55L99,97C186,10 327,10 414,98C502,185 502,327 414,414C327,502 185,502 98,414C85,402 85,382 98,369C110,357 130,357 143,369C205,432 307,432 369,369C432,307 432,205 369,143C307,81 207,80 144,142L185,183C192,190 194,200 190,209C187,218 178,224 168,224Z",unlock:"M313,131C313,92 345,60 384,60C423,60 455,92 455,131L455,174C455,190 468,203 484,203C499,203 512,190 512,174L512,131C512,61 455,3 384,3C313,3 256,61 256,131L256,227L57,227C26,227 0,253 0,284L0,455C0,486 26,512 57,512L341,512C373,512 398,486 398,455L398,284C398,253 373,227 341,227L313,227L313,131Z",checked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083ZM88.43,298.82C75.421,285.811 75.421,264.689 88.43,251.68C101.439,238.671 122.561,238.671 135.57,251.68L202,318.11L376.43,143.68C389.439,130.671 410.561,130.671 423.57,143.68C436.579,156.689 436.579,177.811 423.57,190.82L225.57,388.82C212.553,401.838 191.447,401.838 178.43,388.82L88.43,298.82Z",unchecked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083Z"},V_=e=>{const t=H_[e]||OS(`Invalid icon name: ${e}`);return nv(t)?{path:t,width:512,height:512}:t},s0=({path:e,onClick:t,width:n=512,height:r=512,style:o,className:l="",fill:i="currentColor"})=>a("svg",{"aria-hidden":"true",focusable:"false",className:`${l} icon`,style:o,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n} ${r}`,onClick:t,children:a("path",{d:e,fill:i})}),Pc=({name:e,...t})=>e?a(s0,{...t,...V_(e)}):a(s0,{...t}),oi=({title:e="Note",children:t})=>u("div",{className:"info alert flex start border small",children:[a(Pc,{name:"info",className:"side-icon"}),u("div",{children:[a("h3",{children:e}),t]})]}),xs=({scope:e,to:t,from:n="color",size:r="smallish"})=>u("table",{className:`${e} ${r} celled striped properties mar-b-8`,children:[a("thead",{children:u("tr",{children:[a("th",{children:"Variable"}),a("th",{children:"Mapped To"})]})}),a("tbody",{children:vi(0,100,5).map(o=>u("tr",{children:[u("td",{className:"font-mono",children:["--",n,"-",o]}),u("td",{className:"font-mono",children:["--",t,"-",o]})]},o))})]}),G_=["red","brown","orange"],Y_=()=>u("div",{className:"prose",children:[a("h1",{children:"Color Utilities"}),a("h2",{children:"Color Classes"}),u("p",{children:["Each of the color ranges defined in your palette has a corresponding class. For example, the ",a("code",{children:"red"})," class can be used to select the red color range.  Some of the colors also have semantic aliases, e.g. ",a("code",{children:"error"})," and ",a("code",{children:"invalid"})," are aliases for"," ",a("code",{children:"red"}),"."]}),u("p",{children:["Selecting a color range doesn't have much of a visible effect by itself.  The important things is that it maps the ",a("code",{children:"--color-N"})," ","CSS custom properties to the equivalent stops from the selected color range.  For example, in the scope of the ",a("code",{children:"red"})," CSS class, the"," ",a("code",{children:"--color-0"})," property is mapped to ",a("code",{children:"--red-0"}),","," ",a("code",{children:"--color-5"})," is mapped to ",a("code",{children:"--red-5"}),","," ",a("code",{children:"--color-10"})," to ",a("code",{children:"--red-10"})," and so on up to 100."]}),u("div",{className:"flex gap-4",children:[G_.map(e=>u("div",{children:[u("h3",{className:"font-mono mar-b-2",children:[".",e," ","{"," ... ","}"]}),a(xs,{scope:e,to:e})]},e)),a("div",{children:a("h3",{className:"font-mono mar-b-2",children:"...etc"})})]}),a("h2",{children:"Foreground, Background and Border Colors"}),u("p",{children:["The ",a("code",{children:"fgc-N"}),", ",a("code",{children:"bgc-N"}),", ",a("code",{children:"hdc-N"})," and"," ",a("code",{children:"bdc-N"})," classes can be used to select a stop from the color range for the foreground color, background color, heading color and border color, respectively."]}),u("p",{children:["For example, the ",a("code",{children:"bgc-80"})," CSS class will set the background color to whatever color is mapped to ",a("code",{children:"--color-80"}),".  In the scope of the ",a("code",{children:"red"})," CSS class, that will be ",a("code",{children:"--red-80"}),"."]}),u("div",{className:"grid-2 gap-8 stack-desktop",children:[a(c0,{classes:[["fgc-N","--color",u(Mn,{children:[a("b",{children:"f"}),"ore",a("b",{children:"g"}),"round ",a("b",{children:"c"}),"olor stop ",a("code",{children:"N"})]})],["bgc-N","--background-color",u(Mn,{children:[a("b",{children:"b"}),"ack",a("b",{children:"g"}),"round ",a("b",{children:"c"}),"olor stop ",a("code",{children:"N"})]})],["hdc-N","--heading-color",u(Mn,{children:[a("b",{children:"h"}),"ea",a("b",{children:"d"}),"ing ",a("b",{children:"c"}),"olor stop ",a("code",{children:"N"})]})],["bdc-N","--border-color",u(Mn,{children:[a("b",{children:"b"}),"or",a("b",{children:"d"}),"er ",a("b",{children:"c"}),"olor stop ",a("code",{children:"N"})]})]]}),a("div",{children:u(oi,{children:["The ",a("code",{children:"bdc-N"})," classes are designed to be used in conjunction with the ",a("code",{children:"border"})," class and other classes for setting ",a(Ee,{to:"/utilities/borders",text:"borders"}),".  A"," ",a("code",{children:"bdc-N"})," class will set the color border, but you won't see any effect unless you also add the ",a("code",{children:"border"})," class."]})})]}),a(A,{html:B_,caption:"Color Classes",expand:!0}),a("h2",{children:"Dark Theme"}),u("p",{children:["The ",a("code",{children:"fgd-N"}),", ",a("code",{children:"bgd-N"}),", ",a("code",{children:"hdd-N"})," and"," ",a("code",{children:"bdd-N"})," classes are equivalents of the above for when a dark theme is selected.  You can set foreground, background, heading and border colors for both light and dark themes and they will be switched in automatically."]}),u("div",{className:"grid-2 gap-2 stack-desktop",children:[a(c0,{classes:[["fgd-N","--color",u(Mn,{children:[a("b",{children:"f"}),"ore",a("b",{children:"g"}),"round ",a("b",{children:"d"}),"ark theme color stop ",a("code",{children:"N"})]})],["bgd-N","--background-color",u(Mn,{children:[a("b",{children:"b"}),"ack",a("b",{children:"g"}),"round ",a("b",{children:"d"}),"ark theme color stop ",a("code",{children:"N"})]})],["hdd-N","--heading-color",u(Mn,{children:[a("b",{children:"h"}),"ea",a("b",{children:"d"}),"ing ",a("b",{children:"d"}),"ark theme color stop ",a("code",{children:"N"})]})],["bdd-N","--border-color",u(Mn,{children:[a("b",{children:"b"}),"or",a("b",{children:"d"}),"er ",a("b",{children:"d"}),"ark theme color stop ",a("code",{children:"N"})]})]]}),a("div",{children:u(oi,{children:["The same rule applies for ",a("code",{children:"bdd-N"})," as it does for"," ",a("code",{children:"bdc-N"})," - it selects the border color but you still need to add the ",a("code",{children:"border"})," class to make the border visible."]})})]}),a(A,{html:j_,caption:"Dark Theme",expand:!0}),a("h2",{children:"Color Inheritance"}),a("p",{children:"CSS custom properties are inherited by child elements.  This means you can select a color range on an element and all children will inherit that color range."}),a(A,{html:z_,caption:"Color Inheritance",expand:!0}),a("h2",{children:"Easy Component Coloring"}),u("p",{children:["This effect is used by various badger-css components. They use the generic ",a("code",{children:"--color-N"})," properties to define colors and can then be rendered using any color range."]}),a(A,{html:U_,caption:"Color Components"}),a("h2",{children:"Creating Your Own Colored Components"}),u("p",{children:["You can employ this in your own components by using the"," ",a("code",{children:"--color-N"})," CSS custom properties to define your component colours."]}),u("p",{children:["This is particularly useful when implementing components for both light and dark themes.  You only need to specify which ",a("code",{children:"--color-N"})," stops you want to use in each case.  You don't need to write separate CSS rules for each of the colors you might want to use."]}),a(A,{html:W_,caption:"Custom Components"})]}),c0=({classes:e})=>u("table",{className:"brand celled striped mar-b-8",children:[a("thead",{children:u("tr",{children:[a("th",{children:"Class"}),a("th",{children:"Property"}),a("th",{children:"Description"})]})}),a("tbody",{children:e.map(t=>u("tr",{children:[a("td",{children:a("code",{children:t[0]})}),a("td",{children:a("code",{children:t[1]})}),a("td",{children:t[2]})]},t[0]))})]}),Z_=Object.freeze(Object.defineProperty({__proto__:null,default:Y_},Symbol.toStringTag,{value:"Module"})),q_=()=>u("div",{className:"prose",children:[a("h1",{children:"Color Variables"}),a("h2",{children:"SASS Color Variables"}),u("p",{children:["Each stop in a color range has a SASS variable defined, e.g.",a("code",{children:"$red-0"}),", ",a("code",{children:"$red-5"}),","," ",a("code",{children:"$red-10"})," and so on.  You can use these in your SASS components as necessary."]}),a("h2",{children:"CSS Custom Properties"}),u("p",{children:["Each of the colour stops also has a corresponding CSS custom property (a.k.a. CSS variable) defined, e.g.",a("code",{children:"--red-0"}),", ",a("code",{children:"--red-5"}),","," ",a("code",{children:"--red-10"})," and so on.  You can use these in your CSS files, e.g. as ",a("code",{children:"color: var(--red-10)"}),"."]}),u("p",{children:["Each of your brand colors will also have CSS custom properties defined. If you're using the default ",a("code",{children:"brand"})," name then they will be ",a("code",{children:"--brand-0"}),", ",a("code",{children:"--brand-5"}),","," ",a("code",{children:"--brand-10"})," and so on."]}),u("p",{children:["If you have defined a different set of names via"," ",a("code",{children:"$brand-colors"})," then they will have corresponding names.  For example, if you defined the names in your ",a("code",{children:"$brand-colors"})," to be ",a("code",{children:"primary"}),","," ",a("code",{children:"secondary"})," and ",a("code",{children:"tertiary"})," then the custom properties will be ",a("code",{children:"--primary-0"}),","," ",a("code",{children:"--secondary-0"}),", ",a("code",{children:"--tertiary-0"}),", and so on."]}),a("h2",{children:"Color Switching"}),u("p",{children:["CSS custom properties are defined for a generic color, appropriately named ",a("code",{children:"color"}),".  By default they are mapped to grey."]}),a(xs,{scope:"grey",to:"grey"}),u("p",{children:["CSS scopes will be generated for each color range which map the generic colors to the colors from that range.  For example, the"," ",a("code",{children:".red"})," class selector scope will map the colors as shown here."]}),u("h3",{className:"font-mono mar-b-2",children:[".red ","{"," ... ","}"]}),a(xs,{scope:"red",to:"red"}),u("p",{children:["Scopes will also be generated for your brand colors, either using the default ",a("code",{children:"brand"})," name or the custom names you have defined using ",a("code",{children:"$brand-colors"}),"."]}),u("p",{children:["For example, in the ",a("code",{children:".brand"})," scope the colors will be mapped as follows."]}),u("h3",{className:"font-mono mar-b-2",children:[".brand ","{"," ... ","}"]}),a(xs,{scope:"brand",to:"brand"}),u("p",{children:["The benefit of this approach is that it allows you to define UI components using the generic colors ",a("code",{children:"--color-N"}),".  By default they will appear in grey, but adding a CSS class matching the color name will switch in the appropriate color range."]}),a("h2",{children:"CSS Scope Aliases"}),u("p",{children:["A number of additional CSS scopes are defined for some of the colors. For example, the CSS scope created for the ",a("code",{children:"red"})," color range is actually ",a("code",{children:".red, .error, .invalid"}),".  This allows you to add the ",a("code",{children:"red"}),", ",a("code",{children:"error"})," or ",a("code",{children:"invalid"})," CSS class to an element to have the red color range selected."]}),u("p",{children:["This is used by ",a(Ee,{to:"/forms",text:"forms"})," and "," ",a(Ee,{to:"/components/alerts",text:"alerts"}),", for example, to provide semantic names for the colors."]})]}),Q_=Object.freeze(Object.defineProperty({__proto__:null,default:q_},Symbol.toStringTag,{value:"Module"})),K_=`<div class="alert">
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
`,X_=`<div class="alert border">
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
`,J_=`<div class="alert">
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
</div>`,eT=`<div class="grid-2 gap-4">
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
</div>`,tT=`<div class="surface-3 pad-8">
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
</div>`,Bf=({color:e,setColor:t})=>u("select",{name:"color",required:!0,value:e,onChange:n=>t(n.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Color"}),a("option",{value:"",children:"Default"}),rc.map(n=>a("option",{value:n,children:n},n))]}),nT=["smallest","smaller","small","medium","large","larger","largest"],jf=({size:e,setSize:t})=>u("select",{name:"size",required:!0,value:e,onChange:n=>t(n.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),a("option",{value:"",children:"Default"}),nT.map(n=>a("option",{value:n,children:n},n))]}),rT=[0,1,2,3,4,5,6,8,10],zf=({radius:e,setRadius:t})=>u("select",{name:"radius",required:!0,value:e,onChange:n=>t(n.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),a("option",{value:"",children:"Default"}),rT.map(n=>u("option",{value:n,children:["radius: ",n]},n))]}),wi=e=>e.filter(t=>Lt(t)&&t).join(" ").replace(/^\s+/,"").replaceAll(/\s+/g," "),aT=(e,t={},...n)=>wi(Object.entries(e).reduce((r,[o,l])=>(l&&r.push(t[o]||o),r),[...n])),oT=(e,t="",...n)=>wi([...rv(t).filter(r=>e[r]),...n]),lT=[1,2,3,4,5],Cv=({shadow:e,setShadow:t})=>u("select",{name:"shadow",required:!0,value:e,onChange:n=>t(n.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),a("option",{value:"",children:"Default"}),lT.map(n=>u("option",{value:n,children:["shadow: ",n]},n))]}),wa=({checked:e,toggle:t,label:n})=>a("div",{className:"field",children:u("label",{className:"checkbox border no-focus wide",children:[a("input",{type:"checkbox",checked:e,onChange:t}),n]})}),iT=[0,1,2,3,4,5,6,8,10],Sv=({borderWidth:e,setBorderWidth:t})=>u("select",{name:"borderWidth",required:!0,value:e,onChange:n=>t(n.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),a("option",{value:"",children:"Default"}),iT.map(n=>u("option",{value:n,children:["width: ",n]},n))]}),sT=()=>{const[e,t]=j.useState({body:!0});return u("div",{className:"example grid-2 gap-8 stack-desktop",children:[a(cT,{options:e,setOption:o=>l=>t(i=>({...i,[o]:l})),toggleOption:o=>()=>t(l=>({...l,[o]:!l[o]}))}),u("div",{children:[a("h3",{className:"mar-b-2",children:"Output"}),a("div",{className:"output",children:a(dT,{options:e})})]})]})},cT=({options:e,toggleOption:t,setOption:n})=>{const r=t("headline"),o=t("heading"),l=t("border"),i=t("stripe"),s=n("type"),d=n("size"),f=n("color"),m=n("radius"),b=n("shadow"),C=n("borderWidth"),E=`<div class="${kv(e)}">
  ...
</div>`;return u("div",{children:[a("h3",{className:"mar-b-2",children:"Options"}),u("div",{className:"grid-5 gap-4 stack-tablet start",children:[a(wa,{checked:e.headline,toggle:r,label:"Headline"}),a(wa,{checked:e.head,toggle:o,label:"Heading"}),a(wa,{checked:e.stripe,toggle:i,label:"Stripe"}),a(wa,{checked:e.border,toggle:l,label:"Border"}),a(Sv,{borderWidth:e.borderWidth,setBorderWidth:C})]}),u("div",{className:"grid-5 gap-4 stack-tablet mar-t-4",children:[a(uT,{type:e.type,setType:s}),a(Bf,{color:e.color,setColor:f}),a(jf,{size:e.size,setSize:d}),a(zf,{radius:e.radius,setRadius:m}),a(Cv,{radius:e.shadow,setShadow:b})]}),a("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),a(Re,{code:E,language:"html",expand:!0})]})},kv=e=>wi([e.color,e.type,e.size,e.border&&"border",e.stripe&&"stripe",e.radius&&`bdr-${e.radius}`,e.shadow&&`shadow-${e.shadow}`,e.borderWidth&&`bdw-${e.borderWidth}`,"alert"]),dT=({options:e})=>{const t=kv(e);return u("div",{className:t,children:[e.headline&&a("div",{className:"headline",children:"This is a headline"}),e.heading&&a("h3",{children:"Hello World!"}),u("p",{children:["This is an alert.  This is some ",a("b",{children:"bold text"}),". This is a ",a("a",{href:"/",children:"link"}),"."]}),a("button",{children:"Default Button"}),a("button",{className:"red mar-l-2",children:"Red Button"})]})},uT=({type:e,setType:t})=>u("select",{name:"type",required:!0,value:e,onChange:n=>t(n.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),a("option",{value:"",children:"Default"}),["info","warning","success","error"].map(n=>a("option",{value:n,children:n},n))]}),hT=()=>u("div",{className:"prose",children:[a("h1",{children:"Alerts"}),u("p",{children:["The ",a("code",{children:"alert"})," class can be used to display alerts. Add any of the ",a("code",{children:"info"}),", ",a("code",{children:"success"}),","," ",a("code",{children:"warning"})," or ",a("code",{children:"error"})," classes to set the color."]}),a("h2",{children:"Demo"}),a("p",{children:"Select the options to determine how the alert is displayed. Note that some options are mutually exclusive (e.g. stripe and border)."}),a(sT,{}),a("h2",{children:"Default Alerts"}),a(A,{html:K_,language:"html",caption:"Alerts"}),a("h2",{children:"Alerts With Borders"}),u("p",{children:["Add the ",a("code",{children:"border"})," class to add a border."]}),a(A,{html:X_,language:"html",caption:"Added Borders"}),a("h2",{children:"Alert Headings"}),a("p",{children:"Headings are displayed in a slightly darker color than the body text."}),a(A,{html:J_,language:"html",caption:"Alert Headings"}),a("h2",{children:"Alert Headlines"}),u("p",{children:["Add an element with the ",a("code",{children:"headline"})," class to really make it stand out.  This works well with and without borders.  Throw in a"," ",a(Ee,{to:"/utilities/shadows",text:"shadow"})," if you want to make it really pop."]}),a(A,{html:eT,language:"html",caption:"Alert Headlines"}),a("h2",{children:"Stripe Alerts"}),u("p",{children:["For a more subdued look, try adding the ",a("code",{children:"stripe"})," class."]}),a(A,{html:tT,language:"html",caption:"Stripe Alert"})]}),fT=Object.freeze(Object.defineProperty({__proto__:null,default:hT},Symbol.toStringTag,{value:"Module"})),pT=`<div class="grid-1 gap-4">
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
`,gT=`<div class="grid-1 gap-4">
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
</div>`,mT=`<div class="grid-1 gap-4">
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
</div>`,vT=`<div class="grid-1 gap-4">
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
</div>`,yT=`<style>
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
`,bT=()=>{const[e,t]=j.useState({body:!0});return u("div",{className:"example grid-2 gap-8 stack-desktop",children:[a(wT,{options:e,setOption:o=>l=>t(i=>({...i,[o]:l})),toggleOption:o=>()=>t(l=>({...l,[o]:!l[o]}))}),u("div",{children:[a("h3",{className:"mar-b-2",children:"Output"}),a("div",{className:"output",children:a(xT,{options:e})})]})]})},wT=({options:e,toggleOption:t,setOption:n})=>{const r=t("border"),o=t("shaded"),l=t("lined"),i=n("size"),s=n("color"),d=n("radius"),f=n("shadow"),m=n("borderWidth"),C=`<details class="${_v(e)}">
  ...
</details>`;return u("div",{children:[a("h3",{className:"mar-b-2",children:"Options"}),u("div",{className:"grid-3 gap-4 stack-tablet start",children:[a(wa,{checked:e.lined,toggle:l,label:"Lined"}),a(wa,{checked:e.shaded,toggle:o,label:"Shaded"})]}),u("div",{className:"grid-3 gap-4 stack-tablet start",children:[a(wa,{checked:e.border,toggle:r,label:"Border"}),a(Sv,{borderWidth:e.borderWidth,setBorderWidth:m}),a(zf,{radius:e.radius,setRadius:d})]}),u("div",{className:"grid-3 gap-4 stack-tablet",children:[a(Bf,{color:e.color,setColor:s}),a(jf,{size:e.size,setSize:i}),a(Cv,{radius:e.shadow,setShadow:f})]}),a("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),a(Re,{code:C,language:"html",expand:!0})]})},_v=e=>wi([e.color,e.size,e.lined&&"lined",e.shaded&&"shaded",e.border&&"border",e.radius&&`bdr-${e.radius}`,e.shadow&&`shadow-${e.shadow}`,e.borderWidth&&`bdw-${e.borderWidth}`]),xT=({options:e})=>{const t=_v(e);return u("details",{className:t,children:[a("summary",{children:"This is a demo details widget - click to reveal"}),a("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),a("p",{children:"I really think you're just making a much too big thing out of it."}),a("p",{children:"Making a big thing out of it would've been a good idea."})]})},CT=()=>u("div",{className:"prose",children:[a("h1",{children:"Details"}),u("p",{children:["The ",a("code",{children:"details"})," HTML element can be used to create a disclosure widget."]}),a("h2",{children:"Demo"}),a("p",{children:"Select the options to determine how the details widget is displayed."}),a(bT,{}),a("h2",{children:"Default Style"}),u("p",{children:["The default style will be applied without the need for any special CSS classes.  You can add any of the utility classes (e.g. the size classes like ",a("code",{children:"small"}),", ",a("code",{children:"large"}),", etc.) to change the basic appearance of either the whole widget, the summary, or any of the content elements."]}),a(A,{html:pT,language:"html",caption:"Default Style"}),a("h2",{children:"Border Style"}),u("p",{children:["Add the ",a("code",{children:"border"})," class to add a border.  The usual"," ",a("code",{children:"bdr-N"})," classes can be added to set the border radius"," ","and ",a("code",{children:"bdw-N"})," to set the border width."]}),u("p",{children:["The ",a("code",{children:"bdc-N"})," classes can be used to set the border color stop, and ",a("code",{children:"bdd-N"})," classes for the border color stop in dark mode."]}),a(A,{html:gT,language:"html",caption:"Details With Borders"}),a("h2",{children:"Lined Style"}),u("p",{children:["The ",a("code",{children:"lined"})," class can be added to put an additional border line between the summary header and body content."]}),a(A,{html:mT,language:"html",caption:"Details With Borders"}),a("h2",{children:"Shaded Style"}),u("p",{children:["Add the ",a("code",{children:"shaded"})," class to shade the background colors. You can add any of the color classes to change the color palette."]}),a(A,{html:vT,language:"html",caption:"Shaded Details"}),a("h2",{children:"Custom Styling"}),a("p",{children:"There are a number of CSS variables that you can set to change the styling."}),a(A,{html:yT,language:"html",caption:"Custom Styling"})]}),ST=Object.freeze(Object.defineProperty({__proto__:null,default:CT},Symbol.toStringTag,{value:"Module"})),Ac=({open:e,close:t,className:n,children:r})=>{const o=j.useRef(null);return j.useEffect(()=>{const{current:l}=o;e?l.showModal():l.close()},[e]),u("dialog",{ref:o,className:n,children:[!!t&&a("div",{className:"close",onClick:t,children:a(Pc,{name:"cross"})}),r]})},kT=()=>{const[e,t]=j.useState(!1);return u("div",{className:"output",children:[a("button",{onClick:()=>t(!0),className:"blue",children:"Show Dialog"}),u(Ac,{open:e,close:()=>t(!1),children:[a("h1",{children:"Hello World!"}),a("p",{children:"This is a dialog."})]})]})},_T=()=>{const[e,t]=j.useState(!1);return u("div",{className:"output",children:[a("button",{onClick:()=>t(!0),className:"blue",children:"Show Tall Dialog"}),u(Ac,{open:e,close:()=>t(!1),children:[a("h1",{children:"Tall Dialog"}),u("div",{className:"mobile block-center",children:[a("p",{children:"David. David. David. Wait, please, wait a minute. Have you any idea what it will costs to dress up the band as animals? Oh, it don't cost nothing. It really doesn't. They're not animals, they're signs of the zodiac. They're animals. It's a way to fight the drabs. You know we've got the drabs. Well that's true. I think mine would look good - better in dubly. If it was done in dubly."}),a("p",{children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion. Well let's hear yours. Let's hear your suggestion. Stonehenge! Stonehenge. It's the best production value we've ever had on stage. But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't... Not yet we don't. Let's start... Please, please just a moment. Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this... I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore. I know, so we build a new one. And this is it, look! Consider... consider it done. So you're just going to take care of it like that. You're going to find someone to design it... using that as a plan? Let's try. Let's try. If you can do it, I'll do the number."}),a("p",{children:`This looks actually perfect. I mean it's, uh, the right proportions. It'll be this color right? Yeah. That's... that's... that's just terrific. It almost looks like the real thing. When we get the actual, uh, set, when we get the piece, it'll... it'll follow exactly these specifications. I mean even these contours and everything? Um, I'm not understanding it. What do you mean "the actual piece?" Well I mean... I mean when you build the actual piece... But this is what you asked for, isn't it? What? Well this is the piece. This is the piece? Yes. Are you telling me that this is it? This is scenery? Have you ever been to Stonehenge? No, I haven't been to Stonehenge. The triptychs are... the triptychs are twenty feet high. You can stand four men up them! Ian, I was... I was... I was supposed to build it eighteen inches high. This is insane. This isn't a piece of scenery. Look, look. Look, this is what I was asked to build. Eighteen inches. Right here, it specified eighteen inches. I was given this napkin, I mean... Forget this! Fuck the napkin!!!`}),a("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object. I really think you're just making a much too big thing out of it. Making a big thing out of it would've been a good idea. Nigel gave me a drawing that said eighteen inches. Alright? I know he did, and that's what I'm talking about. Now, whether he knows the difference between feet and inches is not my problem. I do what I'm told. But you're not as confused as him are you? I mean it's not your job to be as confused as Nigel is."}),a("p",{children:"It's my job to do what I'm asked to do by the creative element of this band. And that's what I did. C'mon... The audience were laughing. So it became a comedy number. Yes it did! Yes it fucking well did, and it was not pleasant to be part of the comedy on stage. Backstage, perhaps, it was very amusing."}),a("p",{children:"Maybe we just fix the choreography. Keep the dwarf clear. What do you mean? So they won't trod upon it."})]})]})]})},TT=()=>{const[e,t]=j.useState(!1);return u("div",{className:"output",children:[a("button",{onClick:()=>t(!0),className:"blue",children:"Show Wide Dialog"}),u(Ac,{open:e,close:()=>t(!1),children:[a("h1",{children:"Wide Dialog"}),a("p",{children:"David. David. David. Wait, please, wait a minute. Have you any idea what it will costs to dress up the band as animals? Oh, it don't cost nothing. It really doesn't. They're not animals, they're signs of the zodiac. They're animals. It's a way to fight the drabs. You know we've got the drabs. Well that's true. I think mine would look good - better in dubly. If it was done in dubly."}),a("p",{children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion. Well let's hear yours. Let's hear your suggestion. Stonehenge! Stonehenge. It's the best production value we've ever had on stage. But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't... Not yet we don't. Let's start... Please, please just a moment. Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this... I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore. I know, so we build a new one. And this is it, look! Consider... consider it done. So you're just going to take care of it like that. You're going to find someone to design it... using that as a plan? Let's try. Let's try. If you can do it, I'll do the number."}),a("p",{children:`This looks actually perfect. I mean it's, uh, the right proportions. It'll be this color right? Yeah. That's... that's... that's just terrific. It almost looks like the real thing. When we get the actual, uh, set, when we get the piece, it'll... it'll follow exactly these specifications. I mean even these contours and everything? Um, I'm not understanding it. What do you mean "the actual piece?" Well I mean... I mean when you build the actual piece... But this is what you asked for, isn't it? What? Well this is the piece. This is the piece? Yes. Are you telling me that this is it? This is scenery? Have you ever been to Stonehenge? No, I haven't been to Stonehenge. The triptychs are... the triptychs are twenty feet high. You can stand four men up them! Ian, I was... I was... I was supposed to build it eighteen inches high. This is insane. This isn't a piece of scenery. Look, look. Look, this is what I was asked to build. Eighteen inches. Right here, it specified eighteen inches. I was given this napkin, I mean... Forget this! Fuck the napkin!!!`}),a("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object. I really think you're just making a much too big thing out of it. Making a big thing out of it would've been a good idea. Nigel gave me a drawing that said eighteen inches. Alright? I know he did, and that's what I'm talking about. Now, whether he knows the difference between feet and inches is not my problem. I do what I'm told. But you're not as confused as him are you? I mean it's not your job to be as confused as Nigel is."}),a("p",{children:"It's my job to do what I'm asked to do by the creative element of this band. And that's what I did. C'mon... The audience were laughing. So it became a comedy number. Yes it did! Yes it fucking well did, and it was not pleasant to be part of the comedy on stage. Backstage, perhaps, it was very amusing."}),a("p",{children:"Maybe we just fix the choreography. Keep the dwarf clear. What do you mean? So they won't trod upon it."})]})]})},LT=()=>{const[e,t]=j.useState(!1),n=()=>t(!1);return u("div",{className:"output",children:[a("button",{onClick:()=>t(!0),className:"blue",children:"Show Dialog Article"}),a(Ac,{open:e,children:u("article",{children:[a("header",{children:a("h3",{children:"User Login"})}),u("form",{className:"width-20rem",children:[u("div",{className:"field wide",children:[a("label",{children:"Email Address"}),a("input",{name:"email",className:"wide"})]}),u("div",{className:"field mar-b-8",children:[a("label",{children:"Password"}),a("input",{name:"password",type:"password",className:"wide"})]})]}),u("footer",{className:"text-right",children:[a("button",{className:"grey outline",onClick:n,children:"Cancel"}),a("button",{className:"blue mar-l-4",onClick:n,children:"Login"})]})]})})]})},$T=`<dialog open>
  <div className="close" onClick={yourCloseHandler}>
    <Icon name="cross"/>
  </div>
  <h1>Hello World!</h1>
  <p>
    This is a dialog.
  </p>
</dialog>`,ET=`<dialog open>
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
`,NT=()=>u("div",{className:"prose",children:[a("h1",{children:"Dialog"}),u("p",{children:["Some default styling is provided for the ",a("code",{children:"dialog"})," element which can be used to display modals."]}),u("p",{children:["A immediate child element with the ",a("code",{children:"close"})," CSS class can be used to create a close button."]}),u(Xe,{children:[a(Re,{code:$T,caption:"Dialog",language:"html",className:"mar-b-8",expand:!0}),a(kT,{})]}),u("p",{children:["The ",a("code",{children:"$dialog-max-width"})," SASS variable defaults to"," ",a("code",{children:"80vw"})," and is set as the ",a("code",{children:"--max-width"})," CSS variable in the scope of a ",a("code",{children:"dialog"})," element. Similarly the ",a("code",{children:"$dialog-max-height"})," SASS variable defaults to"," ",a("code",{children:"90vh"})," and is set as the ",a("code",{children:"--max-height"})," CSS variable."]}),a("p",{children:"In general, you can constrain the width of the content and the dialog which size appropriately."}),u(Xe,{children:[a(TT,{}),a(_T,{})]}),a("h2",{children:"Header and Footer"}),u("p",{children:["You can add ",a("code",{children:"header"})," and ",a("code",{children:"footer"})," elements to a dialog.  To be semantically correct, you should enclose them in an"," ",a("code",{children:"article"})," element."]}),u(Xe,{children:[a(Re,{code:ET,caption:"Header and Footer",language:"html",className:"mar-b-8",expand:!0}),a(LT,{})]})]}),IT=Object.freeze(Object.defineProperty({__proto__:null,default:NT},Symbol.toStringTag,{value:"Module"})),MT=`<div class="dropdown">
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
</div>`,RT=`<div class="brand dropdown">
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
</div>`,PT=`<div class="text-right">
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
</div>`,AT=()=>u("div",{className:"prose",children:[a("h1",{children:"Dropdown"}),u("p",{children:["Use the ",a("code",{children:"dropdown"})," class to create dropdown content. The trigger should either have the ",a("code",{children:"trigger"})," CSS class or (more correctly) have the ",a("code",{children:"aria-haspopup"})," attribute set.  The content should have the ",a("code",{children:"content"})," class."]}),a(A,{html:MT,language:"html",caption:"Dropdown Content"}),u("p",{children:["For dropdown menus you can add the ",a("code",{children:"content"})," class to"," ","a ",a("code",{children:"ul"})," list.  Add the ",a("code",{children:"separator"})," class to a ",a("code",{children:"li"})," element to create a separator."]}),a(A,{html:RT,language:"html",caption:"Dropdown Menu"}),u("p",{children:["The ",a("code",{children:"right"})," class will right-align the dropdown content. You can add the ",a("code",{children:"caption"})," class to a ",a("code",{children:"li"})," element to prevent it from being displayed as a hoverable menu item."]}),a(A,{html:PT,language:"html",caption:"Right Menu"})]}),FT=Object.freeze(Object.defineProperty({__proto__:null,default:AT},Symbol.toStringTag,{value:"Module"})),OT=`<svg
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
  aria-hidden="true" focusable="false" role="img"
  class="icon"
>
  <path
    d="M64,268L184,388L448,124"
    style="fill:none;stroke:currentColor;stroke-width:65"
  />
</svg>
Check!`,DT=`<div class="small">
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
</div>`,BT=`<div class="red fgc-50 large">
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
</div>`,jT=`<svg
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
`,zT=`<div class="larger">
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
`,UT=()=>u("div",{className:"prose",children:[a("h1",{children:"Icons"}),u("p",{children:["Some basic styles are included for SVG icons. Add the ",a("code",{children:"icon"})," ","class to an inline SVG image to use them."]}),a(A,{html:OT,language:"html",caption:"Icon"}),a("p",{children:"Icons are sized in em units meaning they scale with text in different sizes."}),a(A,{html:DT,language:"html",caption:"Icon Sizes"}),u("p",{children:["SVG icons can use ",a("code",{children:"currentColor"})," for either the"," ",a("code",{children:"fill"})," or ",a("code",{children:"stroke"})," properties to inherit the current text color."]}),a(A,{html:BT,language:"html",caption:"Icon Colors"}),u("div",{className:"grid-2 gap-8 stack-desktop",children:[u("div",{children:[u("p",{children:["SVG elements can use the ",a("code",{children:"fill-fg"})," and ",a("code",{children:"fill-bg"})," ","classes to set the fill color to the current foreground or background colors respectively.  Similarly the ",a("code",{children:"stroke-fg"})," and"," ",a("code",{children:"stroke-bg"})," will set the stroke color to the foreground or"," ","background color."]}),u("p",{children:["These CSS rules are scoped to all ",a("code",{children:"svg"})," elements rather",a("code",{children:"svg.icon"})," specifically.  So you can use them in any SVG images, not just icons."]})]}),a("div",{children:u(oi,{children:["CSS styles can only be applied to inline SVG elements.  They don't work for SVG images loaded using the ",a("code",{children:"img"})," ","tag or applied using a ",a("code",{children:"background-image"})," style."]})})]}),a(A,{html:jT,language:"html",caption:"Icon Style"}),u("p",{children:["You can define your own styles to target different elements in an SVG icon.  This example illustrated the use of generic"," ",a("code",{children:"--color-N"})," variables to set the fill and stroke styles on elements in an icon.  The only thing that's determining the color range is the ",a("code",{children:"blue"})," class on the ",a("code",{children:"svg"})," ","element.  Change that to the name of any other color range and the styles will work equally well."]}),u("p",{children:["Also note the use of the"," ",a("code",{children:"--unfilled"})," custom property which sets the background color for the unchecked checkbox.  This allows us to set different color stops for use in light and dark themes."]}),a(A,{html:zT,language:"html",caption:"Icon Style"})]}),WT=Object.freeze(Object.defineProperty({__proto__:null,default:UT},Symbol.toStringTag,{value:"Module"})),HT=()=>{const[e,t]=j.useState({head1:!0,body:!0,foot1:!0});return u("div",{className:"example grid-2 gap-8 stack-desktop",children:[a(VT,{options:e,setOption:o=>l=>t(i=>({...i,[o]:l})),toggleOption:o=>()=>t(l=>({...l,[o]:!l[o]}))}),u("div",{children:[a("h3",{className:"mar-b-2",children:"Output"}),a("div",{className:"output",children:a(GT,{options:e})})]})]})},VT=({options:e,toggleOption:t,setOption:n})=>{const r=t("head1"),o=t("head2"),l=t("body"),i=t("foot1"),s=t("foot2"),d=t("wide"),f=t("celled"),m=t("shaded"),b=t("lined"),C=t("striped"),N=n("size"),E=n("color"),S=n("radius"),w=`<table class="${oT(e,"wide celled shaded lined striped",e.color,e.size,e.radius&&`bdr-${e.radius}`)}">
  ...
</table>`;return u("div",{children:[a("h3",{className:"mar-b-2",children:"Options"}),u("div",{className:"grid-5 gap-4 stack-tablet",children:[a(Un,{checked:e.wide,toggle:d,label:"Wide"}),a(Un,{checked:e.celled,toggle:f,label:"Celled"}),a(Un,{checked:e.shaded,toggle:m,label:"Shaded"}),a(Un,{checked:e.lined,toggle:b,label:"Lined"}),a(Un,{checked:e.striped,toggle:C,label:"Striped"})]}),u("div",{className:"grid-5 gap-4 stack-tablet mar-t-4",children:[a(Un,{checked:e.head1,toggle:r,label:"Header"}),a(Un,{checked:e.body,toggle:l,label:"Body"}),a(Un,{checked:e.foot1,toggle:i,label:"Footer"}),a(Un,{checked:e.head2,toggle:o,label:"Pre-header"}),a(Un,{checked:e.foot2,toggle:s,label:"Post-footer"})]}),u("div",{className:"grid-5 gap-4 stack-tablet mar-t-4",children:[a(Bf,{color:e.color,setColor:E}),a(jf,{size:e.size,setSize:N}),a(zf,{radius:e.radius,setRadius:S})]}),a("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),a(Re,{code:w,language:"html",expand:!0})]})},Un=({checked:e,toggle:t,label:n})=>a("div",{className:"field",children:u("label",{className:"checkbox border no-focus wide",children:[a("input",{type:"checkbox",checked:e,onChange:t}),n]})}),GT=({options:e})=>{const t=aT(e,{},e.color,e.size,e.radius&&`bdr-${e.radius}`);return u("table",{className:t,children:[(e.head1||e.head2)&&u("thead",{children:[e.head2&&a("tr",{children:a("th",{colSpan:"3",className:"text-center",children:"Spinal Tap"})}),e.head1&&u("tr",{children:[a("th",{children:"Name"}),a("th",{children:"Instrument"}),a("th",{children:"Danger Level"})]})]}),e.body&&u("tbody",{children:[u("tr",{children:[a("td",{children:"Nigel"}),a("td",{children:"Tufnel"}),a("td",{children:"Guitar"})]}),u("tr",{children:[a("td",{children:"David"}),a("td",{children:"St.Hubbins"}),a("td",{children:"Guitar"})]}),u("tr",{children:[a("td",{children:"Derek"}),a("td",{children:"Smalls"}),a("td",{children:"Bass"})]}),u("tr",{children:[a("td",{children:"Viv"}),a("td",{children:"Savage"}),a("td",{children:"Keyboards"})]}),u("tr",{children:[a("td",{children:"Mick"}),a("td",{children:"Shrimpton"}),a("td",{children:"Drums"})]})]}),(e.foot1||e.foot2)&&u("tfoot",{children:[e.foot1&&u("tr",{children:[a("th",{colSpan:"2",className:"text-right",children:"Total"}),a("th",{children:"5"})]}),e.foot2&&a("tr",{children:a("th",{colSpan:"3",className:"text-center",children:"Tap into America!"})})]})]})},YT=`<table>
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
</table>`,ZT=`<table class="celled">
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
</table>`,qT=`<table class="shaded">
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
</table>`,QT=`<table class="shaded lined">
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
</table>`,KT=`<table class="striped">
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
</table>`,XT=`<table class="brand striped celled">
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
</table>`,JT=`<table class="shaded lined wide">
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
</table>`,eL=`<div class="flex start gap-4">
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
</div>`,tL=()=>u("div",{className:"prose",children:[a("h1",{children:"Tables"}),a("p",{children:"Badger CSS contains some basic table styling by default and a number of additional classes you can add to snazz things up."}),a("h2",{children:"Demo"}),a("p",{children:"Select the options to determine how the table is displayed."}),a(HT,{}),a("h2",{children:"Default Table"}),a(A,{html:YT,language:"html",caption:"Table"}),a("h2",{children:"Celled Table"}),a(A,{html:ZT,language:"html",caption:"Celled Table"}),a("h2",{children:"Shaded Table"}),a(A,{html:qT,language:"html",caption:"Shaded Table"}),a("h2",{children:"Lined Table"}),a(A,{html:QT,language:"html",caption:"Lined Table"}),a("h2",{children:"Striped Table"}),a(A,{html:KT,language:"html",caption:"Striped Table"}),a("h2",{children:"Colored Table"}),a(A,{html:XT,language:"html",caption:"Colored Table"}),a("h2",{children:"Colored Rows"}),a(A,{html:JT,language:"html",caption:"Colored Rows"}),a("h2",{children:"Customised Table"}),a(A,{html:eL,language:"html",caption:"Rounded Table"})]}),nL=Object.freeze(Object.defineProperty({__proto__:null,default:tL},Symbol.toStringTag,{value:"Module"})),rL=`<button
  data-tooltip
  aria-label="This is a tooltip"
>
    Hover to see tooltip
</button>
`,aL=`<div class="flex space">
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
`,oL=`<div class="flex space">
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
</div>`,lL=`<button
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
`,iL=`<button data-tooltip>
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
`,sL=`<style>
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
</div>`,cL=()=>u("div",{className:"prose",children:[a("h1",{children:"Tooltips"}),u("p",{children:["Add the ",a("code",{children:"data-tooltip"})," attribute to an element to enable a tooltip.  The tooltip text should be defined in the ",a("code",{children:"aria-label"})," ","property so that it's also accessible to screen readers."]}),a(A,{html:rL,language:"html",caption:"Tooltip"}),a("h2",{children:"Tooltip Position"}),u("p",{children:["You can set the ",a("code",{children:"data-tooltip"})," attribute to any of"," ",a("code",{children:"left"}),", ",a("code",{children:"right"}),", ",a("code",{children:"top"})," or"," ",a("code",{children:"bottom"})," to set the tooltip position."]}),a(A,{html:aL,language:"html",caption:"Tooltip Position"}),u("p",{children:["You can also combine them as "," ",a("code",{children:"top left"}),", ",a("code",{children:"top right"}),", ",a("code",{children:"bottom left"})," ","and ",a("code",{children:"bottom right"}),"."]}),a(A,{html:oL,language:"html",caption:"Tooltip Corners"}),a("h2",{children:"Wrapping"}),u("p",{children:["The tooltip has a minimum and maximum width set to keep things sensible. You can add the ",a("code",{children:"tt-wide"})," class if you want the tooltip to extend to the full width of the tooltip text."]}),u("p",{children:["You can add newlines to the ",a("code",{children:"aria-label"})," property if you want to force line breaks."]}),a(A,{html:lL,language:"html",caption:"Tooltip Wrapping"}),a("h2",{children:"Content"}),u("p",{children:["As an alternative to setting the ",a("code",{children:"aria-label"})," you can define the tooltip content in a child element with the"," ",a("code",{children:"tooltip"})," CSS class."]}),a(A,{html:iL,language:"html",caption:"Tooltip Content"}),a("h2",{children:"Custom Tooltip Style"}),a("p",{children:"There are a number of SCSS variables that can be used to set the defaults, or you can use CSS variables to create custom tooltip styles."}),a(A,{html:sL,language:"html",caption:"Custom Tooltips"})]}),dL=Object.freeze(Object.defineProperty({__proto__:null,default:cL},Symbol.toStringTag,{value:"Module"})),da=(e="rem",t=.25)=>[0,1,2,3,4,6,8,10,12,16,20,24,28,32].reduce((n,r)=>({...n,[r]:{vars:{unit:`${r} unit${r==1?"":"s"} (${r*t}${e})`}}}),{}),d0=e=>({t:{vars:{sides:"the top"},more:da(e)},r:{vars:{sides:"the right"},more:da(e)},b:{vars:{sides:"the right"},more:da(e)},l:{vars:{sides:"the left"},more:da(e)},v:{vars:{sides:"the top and bottom (v = vertical)"},more:da(e)},h:{vars:{sides:"the left and right (h = horizontal)"},more:da(e)},...da(e)}),u0=e=>[2,4,6,8,10,12,14,16,18,20,30,40,50,60,70,90,100].reduce((t,n)=>({...t,[`${n}rem`]:{description:()=>e(n)}}),{}),h0=e=>[2,4,6,8,10,12,14,16,18,20,30,40,50,60,70,90,100].reduce((t,n)=>({...t,[`${n*16}px`]:{description:()=>e(n*16)}}),{}),uL={mar:{vars:{unit:"1 unit (0.25rem)",sides:"all sides"},description:e=>`Add ${e.unit} margin to ${e.sides}`,more:d0("rem")},pad:{vars:{unit:"1 unit (0.25em)",sides:"all sides"},description:e=>`Add ${e.unit} margin to ${e.sides}`,more:d0("em")},width:{more:{...u0(e=>`Set width to ${e}rem (${e*16}px)`),...h0(e=>`Set width to ${e}px`)}},max:{more:{width:{more:{...u0(e=>`Set max-width to ${e}rem (${e*16}px)`),...h0(e=>`Set max-width to ${e}px`)}}}},text:{more:{left:{description:()=>"Align text to the left"},right:{description:()=>"Align text to the right"},center:{description:()=>"Align text to the center"}}},block:{more:{left:{description:()=>"Align block to the left"},right:{description:()=>"Align block to the right"},center:{description:()=>"Align block to the center"}}},display:{more:{inline:{description:()=>"Display element inline"},block:{description:()=>"Display element as a block"},"inline-block":{description:()=>"Display element as an inline block"}}},font:{more:{sans:{description:()=>"Use a sans-serif font"},serif:{description:()=>"Use a serif font"},system:{description:()=>"Use the system font"},mono:{description:()=>"Use a monospaced font"}}}},hL=e=>{const t=e.split("-");let n=[],r=[],o=[],l={},i=uL,s;for(;t.length;){const d=t.shift(),f=i[d];if(f)console.log(`matched ${d}`),s=f.description||s,f.vars&&(l={...l,...f.vars}),n.push(d),i=f.more||{},o=Object.keys(i);else{r.push(d);break}}return{good:n,rest:r,vars:l,next:o,description:s?s(l):null}},fL=e=>rv(e).filter(t=>!t.match(/^\s*$/)).map(hL),pL=()=>{const[e,t]=j.useState("");return u("div",{children:[a("h1",{children:"Class Decoder"}),a("p",{children:"Enter one or more Badger-CSS classes for an explanation."}),u("form",{className:"max-width-30rem",children:[u("div",{className:"field",children:[a("label",{children:"CSS Classes"}),a("input",{type:"text",className:"wide",value:e,onChange:n=>t(n.target.value)})]}),a("button",{type:"button",className:"reset grey button outline",onClick:()=>t(""),children:"Reset"})]}),a("div",{children:!!e.length&&a(gL,{input:e})})]})},gL=({input:e})=>{const t=fL(e);return console.log("results: ",t),a("table",{className:"celled border bdr-2 mar-t-4",children:a("tbody",{children:t.map((n,r)=>u("tr",{children:[u("td",{className:"font-mono bgc-95 bgd-10 split-4",children:[a("span",{className:"green fgc-50",children:n.good.join("-")}),!!n.rest.length&&u("span",{className:"red fgc-50",children:[!!n.good.length&&"-",n.rest.join("-")]})]}),a("td",{className:"bgc-100 bgd-5",children:n.description}),a("td",{className:"bgc-100 bgd-5 font-mono small",children:!!n.next.length&&n.next.map(o=>`-${o} `)})]},r))})})},mL=Object.freeze(Object.defineProperty({__proto__:null,default:pL},Symbol.toStringTag,{value:"Module"})),Fa=({color:e,selected:t,select:n,iconColor:r="white",className:o="",alt:l=a(Mn,{children:" "})})=>a("button",{className:`${o} ${e} icon ${t?"focus":""}`,onClick:n,children:t?a(Pc,{name:"check",className:r}):l}),vL=({range:e,setRange:t})=>u("div",{children:[u("div",{className:"flex space mar-b-0",children:[a("h3",{children:"Color Range"}),a("h4",{children:Lt(e)&&a("code",{children:e||""})})]}),u("div",{className:"grid-fit gap-2",style:{"--min-width":"2em"},children:[a(f0,{colors:v_,range:e,setRange:t}),a("div",{children:" "}),a(Fa,{color:"brand",selected:e==="brand",select:()=>t("brand")}),a(f0,{colors:y_,range:e,setRange:t})]})]}),f0=({range:e,setRange:t,colors:n})=>n.map(r=>a(Fa,{color:r,select:()=>t(r),selected:e==r},r)),ns=({stop:e,setStop:t,className:n,title:r,prefix:o})=>u("div",{children:[u("div",{className:"flex space mar-b-0",children:[a("h3",{children:r}),a("h4",{children:Lt(e)&&u("code",{children:[o,"-",e]})})]}),a("div",{className:`${n} grid-fit gap-2`,style:{"--min-width":"2em"},children:vi(0,100,5).map(l=>a(Fa,{color:`bgc-${l} bdc-${l} fgc-${l>50?"0":"100"} bgd-${l} bdd-${l} fgd-${l>50?"0":"100"}`,iconColor:l>50?"black":"white",selected:e===l,select:()=>t(l)},l))})]}),yL=[0,1,2,3,4,6,8,10,12,16,20,24,28,32],p0=({spacing:e,setSpacing:t,className:n,title:r,prefix:o,range:l})=>u("div",{children:[u("div",{className:"flex space mar-b-0",children:[a("h3",{children:r}),a("h4",{children:Lt(e)&&u("code",{children:[o,"-",e]})})]}),a("div",{className:`${n} grid-fit gap-2`,style:{"--min-width":"2em"},children:yL.map(i=>a(Fa,{color:l,className:"wide",alt:a("span",{className:"font-mono",children:i}),selected:e===i,select:()=>t(i)},i))})]}),bL=["smallest","smaller","small","medium","large","larger","largest"],wL=({size:e,setSize:t,title:n="Size",range:r})=>u("div",{children:[u("div",{className:"flex space mar-b-0",children:[a("h3",{children:n}),a("h4",{children:Lt(e)&&a("code",{children:e})})]}),a("div",{className:"grid-fit gap-2",style:{"--min-width":"2em"},children:bL.map(o=>a(Fa,{color:r,className:"wide",alt:a("span",{className:"font-mono",children:o}),selected:e===o,select:()=>t(o)},o))})]}),xL=[0,1,2,3,4,5,6,8,10],g0=({border:e,setBorder:t,className:n,title:r,prefix:o,range:l})=>u("div",{children:[u("div",{className:"flex space mar-b-0",children:[a("h3",{children:r}),a("h4",{children:Lt(e)&&u("code",{children:[o,"-",e]})})]}),a("div",{className:`${n} grid-fit gap-2`,style:{"--min-width":"2em"},children:xL.map(i=>a(Fa,{color:l,className:"wide",alt:a("span",{className:"font-mono",children:i}),selected:e===i,select:()=>t(i)},i))})]}),CL=({checked:e,toggle:t,label:n})=>a("div",{className:"field",children:u("label",{className:"checkbox border no-focus wide",children:[a("input",{type:"checkbox",checked:e,onChange:t}),n]})}),SL=({shadow:e,setShadow:t,className:n,title:r="Shadow",prefix:o="shadow",range:l})=>u("div",{children:[u("div",{className:"flex space mar-b-0",children:[a("h3",{children:r}),a("h4",{children:Lt(e)&&u("code",{children:[o,"-",e]})})]}),a("div",{className:`${n} grid-fit gap-2`,style:{"--min-width":"2em"},children:vi(0,5).map(i=>a(Fa,{color:l,className:"wide",alt:a("span",{className:"font-mono",children:i}),selected:e===i,select:()=>t(i)},i))})]}),kL=({options:e,setOption:t,toggleOption:n})=>u("div",{className:"surface-5 pad-4",children:[u("div",{className:"flex space baseline stack-desktop mar-b-2",children:[a("h2",{className:"mar-v-none",children:"Controls"}),a("h3",{className:"text-right mar-v-none",children:a("code",{children:'class="..."'})})]}),u("div",{className:"grid gap-2 small",children:[a(vL,{range:e.range,setRange:t("range")}),a(ns,{title:"Background Color Stop",prefix:"bgc",className:e.range,stop:e.bgc,setStop:t("bgc")}),a(ns,{title:"Foreground Color Stop",prefix:"fgc",className:e.range,stop:e.fgc,setStop:t("fgc")}),a(ns,{title:"Heading Color Stop",prefix:"hdc",className:e.range,stop:e.hdc,setStop:t("hdc")}),a(ns,{title:"Border Color Stop",prefix:"bdc",className:e.range,stop:e.bdc,setStop:t("bdc")}),a(g0,{title:"Border Width",prefix:"bdw",border:e.bdw,setBorder:t("bdw"),range:e.range}),a(g0,{title:"Border Radius",prefix:"bdr",border:e.bdr,setBorder:t("bdr"),range:e.range}),a(wL,{title:"Size",size:e.size,setSize:t("size"),range:e.range}),a(p0,{title:"Margin",prefix:"mar",className:e.mar,spacing:e.mar,setSpacing:t("mar"),range:e.range}),a(p0,{title:"Padding",prefix:"pad",className:e.pad,spacing:e.pad,setSpacing:t("pad"),range:e.range}),a(SL,{title:"Shadow",prefix:"shadow",shadow:e.shadow,setShadow:t("shadow"),range:e.range}),u("div",{children:[a("h3",{className:"mar-b-2",children:"Options"}),a("div",{className:"grid-fill",style:{"--min-width":"10rem"},children:a(CL,{label:"Show Border",checked:e.border,toggle:n("border")})})]})]})]}),_L=({options:e})=>{const t=TL(e);return u("div",{className:"surface-5 pad-4",children:[u("div",{className:"flex space baseline stack-desktop mar-b-2",children:[a("h2",{className:"mar-v-none",children:"Output"}),a("div",{className:"text-right",children:u("code",{children:['class="',t,'"']})})]}),a("div",{className:"border surface-4",style:{borderStyle:"dotted"},children:u("div",{className:t,children:[a("h3",{className:"mar-b-2",children:"It's One Louder"}),"You see, most... most blokes, you know, will be playing at ten. You're on ten here... all the way up... all the way up... all the way up. You're on ten on your guitar...where can you go from there? Where? Nowhere. Exactly. What we do is if we need that extra... push over the cliff... you know what we do? Put it up to eleven. Eleven. Exactly. One louder."]})})]})},TL=e=>wi([e.range,Lt(e.bgc)?`bgc-${e.bgc}`:"",Lt(e.fgc)?`fgc-${e.fgc}`:"",Lt(e.hdc)?`hdc-${e.hdc}`:"",Lt(e.bdc)?`bdc-${e.bdc}`:"",Lt(e.bdw)?`bdw-${e.bdw}`:"",Lt(e.bdr)?`bdr-${e.bdr}`:"",e.size,Lt(e.mar)?`mar-${e.mar}`:"",Lt(e.pad)?`pad-${e.pad}`:"",Lt(e.shadow)?`shadow-${e.shadow}`:"",e.border?"border":""]),LL=()=>{const[e,t]=j.useState({range:"brand",bgc:90,fgc:30,hdc:20,bdc:60,bdr:3,bdw:2,pad:4,mar:6,shadow:2,border:!0});return u("div",{className:"grid gap-8",children:[a(_L,{options:e}),a(kL,{options:e,setOption:o=>l=>t(i=>({...i,[o]:l})),toggleOption:o=>()=>t(l=>({...l,[o]:!l[o]}))})]})},$L=()=>u("div",{children:[a("h1",{children:"Demo"}),u("div",{className:"grid-2 gap-h-8 stack-desktop",children:[u("div",{children:[u("p",{children:["One of the novel approaches that Badger CSS employs is to provide CSS classes for each of the colors in the palette.  There are then further CSS classes that can be used to select the particular shade (or color"," ",'"stop") from that range to use for the background, foreground, heading and border colors.']}),u("p",{children:["One benefit of this approach is that it allows you to design color agnostic components that work with both light and dark themes, and can then be used with any color range.  For some examples, see the"," ",a(Ee,{to:"/components/alerts",text:"Alerts"})," and "," ",a(Ee,{to:"/components/tables",text:"Tables"})," pages"]}),a("p",{children:"Another more practical benefit is that it avoid the combinatorial explosion of CSS classes required to cover every combination of color range and stop for foreground, background, heading and border colors."})]}),u("div",{children:[a("p",{children:"Further utility classes are provided for selecting font size, border width and radius, margins, padding, shadows and various layout options. They're similar to what you'll find in other CSS toolkits."}),a("p",{children:"The choice about what is included and what isn't is entirely arbitrary but I lean towards minimalism and have only included the kind of utility classes that I use in most, if not all web sites. It's really easy for you to add in your own utility classes, or change the settings for the provided utilities, if you want to."}),a("p",{children:"So without further ado, click on the buttons below to select different colors and layout options.  Each one selects a CSS class which affects the way the output is displayed."})]})]}),a(LL,{})]}),EL=Object.freeze(Object.defineProperty({__proto__:null,default:$L},Symbol.toStringTag,{value:"Module"})),NL=`<div class="grid-fit gap-2">
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
`,IL=`<div class="grid-fit gap-2">
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
`,ML=`<div class="grid-fit gap-2">
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
`,RL=`<div class="grid-fit gap-2">
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
`,PL=`<div class="grid-fit gap-2">
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
`,AL=`<div class="grid-fit gap-2">
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
`,FL=`<div class="grid-fit gap-2">
  <span class="button">Default</span>
  <span class="red shaded button">Red Shaded</span>
  <span class="orange outline button">Orange Outline</span>
</div>
`,OL=`<div class="flex start gap-4">
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
</div>`,DL=`<div class="flex start gap-4">
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
</div>`,BL=`<div class="buttons">
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
`,jL=()=>u("div",{className:"prose",children:[a("h1",{children:"Buttons"}),u("p",{children:["For the sake of accessibility, buttons should usually be rendered using the ",a("code",{children:"button"})," element.  I mean, that's what it's there for, right?  For those cases when you really need to make a link or something else look like a button you can add the"," ",a("code",{children:"button"})," class."]}),u("p",{children:["The default button color is grey. Any one of the color classes (e.g. ",a("code",{children:"red"}),", ",a("code",{children:"green"}),", etc) can be added to get different colors."]}),a("p",{children:"Button color stops automatically adapt between light and dark modes."}),a("h2",{children:"Default Style"}),a("p",{children:"The default button style is solid."}),a(A,{html:NL,language:"html",caption:"Buttons"}),a("h2",{children:"Bright Colors"}),u("p",{children:["Add the ",a("code",{children:"bright"})," CSS class to make the buttons brighter."]}),a(A,{html:IL,language:"html",caption:"Bright Buttons"}),a("h2",{children:"Dark Colors"}),u("p",{children:["Add the ",a("code",{children:"dark"})," CSS class to make the buttons darker."]}),a(A,{html:ML,language:"html",caption:"Dark Buttons"}),a("h2",{children:"Outline Style"}),u("p",{children:["Add the ",a("code",{children:"outline"})," class for outline buttons."]}),a(A,{html:RL,caption:"Outline Buttons"}),a("h2",{children:"Bare Naked Buttons"}),u("p",{children:["Add the ",a("code",{children:"bare"})," class for remove the background and border completely."]}),a(A,{html:PL,caption:"Bare Buttons"}),a("h2",{children:"Shaded Style"}),u("p",{children:["Add the ",a("code",{children:"shaded"})," class for subtly shaded buttons.  It's only a matter of time until flat design is out and shaded is back in. Be ahead of the curve!"]}),a(A,{html:AL,caption:"Shaded Buttons"}),a("h2",{children:"Button Class"}),u("p",{children:["Add the ",a("code",{children:"button"})," class to any non-button element to give it the button styling.  You can also add the ",a("code",{children:"outline"})," and/or"," ",a("code",{children:"shaded"})," classes."]}),a(A,{html:FL,caption:".button class"}),a("h2",{children:"Button Icons"}),u("p",{children:["You can add ",a(Ee,{to:"/components/icons",text:"SVG Icons"})," to buttons. You can set the margins for icons manually using the ",a("code",{children:"mar-N"})," ","classes described on the ",a(Ee,{to:"/utilities/spacing",text:"spacing"})," page. The ",a("code",{children:"on-left"})," and ",a("code",{children:"on-right"})," classes are provided as shortcuts and are equivalent to ",a("code",{children:"mar-r-2"})," and ",a("code",{children:"mar-l-2"}),", respectively."]}),a(A,{html:OL,caption:"Button icons"}),a("h2",{children:"Button Padding"}),a("p",{children:"The default padding for buttons is larger in the horizontal direction (4 units = 1em) than it is in the vertical direction (1 unit = 0.25em). This isn't as unbalanced as it initially seems when you factor in the line-height (1.5), which effectively results in  the vertical padding being equivalent to 2 units (0.5em)."}),u("p",{children:["If you have a button that only contains an icon then it can look a bit strange, as shown in the first button here.  Adding the ",a("code",{children:"pad-h-2"})," class to the button will reduce the horizontal padding to 2 units (0.5em) which will even things out, as shown in the second button.  Or you can add the ",a("code",{children:"icon"})," class to the button which will have the same effect and doesn't require you to remember how many units of padding you need to set."]}),a(A,{html:DL,caption:"Button padding"}),a("h2",{children:"Button Sets"}),u("p",{children:["Button sets can be created by adding a container with the"," ",a("code",{children:"buttons"})," class."]}),a(A,{html:BL,caption:"Button Sets"})]}),zL=Object.freeze(Object.defineProperty({__proto__:null,default:jL},Symbol.toStringTag,{value:"Module"})),UL=`<label>
  <input type="checkbox">
  Option 1
</label>

<label class="checkbox">
  <input type="checkbox">
  Option 2
</label>
`,WL=`<label class="wide">
  <input type="checkbox">
  Option 1
</label>

<label class="wide checkbox">
  <input type="checkbox">
  Option 2
</label>
`,HL=`<div class="grid-2 gap-2">
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
`,VL=`<div>
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
</div>`,GL=()=>u("div",{children:[a("h1",{children:"Checkboxes"}),a("h2",{children:"Checkbox Class"}),u("p",{children:["The usual approach to creating a checkbox is to define a"," ",a("code",{children:"label"})," that contains an ",a("code",{children:"input"})," with a",a("code",{children:'type="label"'})," attribute."]}),u("p",{children:["That will work fine on most browsers.  However at the time of writing (July 2023), Firefox (v115) still doesn't support the"," ",a("code",{children:":has()"})," CSS selector that this depends upon.  Although the other major browsers currently support it and we're expecting it to be implemented in Firefox soon."]}),u("p",{children:["As a work-around you can add the ",a("code",{children:"checkbox"})," class to the"," ",a("code",{children:"label"}),"."]}),a(A,{html:UL,language:"html",caption:"Checkboxes"}),a("h2",{children:"Wide Checkboxes"}),u("p",{children:["Add the ",a("code",{children:"wide"})," class for full-width checkboxes."]}),a(A,{html:WL,language:"html",caption:"Wide Checkboxes"}),a("h2",{children:"Checkbox Borders"}),u("p",{children:["Add the ",a("code",{children:"border"})," class for borders."]}),a(A,{html:HL,language:"html",caption:"Border Checkboxes"}),a("h2",{children:"Custom Checkboxes"}),a(A,{html:VL,language:"html",caption:"Custom Checkboxes"})]}),YL=Object.freeze(Object.defineProperty({__proto__:null,default:GL},Symbol.toStringTag,{value:"Module"})),ZL=`<div class="field">
  <label>Label</label>
  <input type="text" value="Input value">
  <div class="help">Help message</div>
</div>`,qL=`<div class="field invalid">
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
</div>`,QL=`<div class="field valid">
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
</div>`,KL=`<div class="field required">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
<div class="field required">
  <label>Terms</label>
  <label class="Xcheckbox">
    <input type="checkbox">
    I accept the terms and conditions
  </label>
</div>`,XL=`<style>
  .mandatory-text {
    --required-text: 'MANDATORY';
  }
</style>
<div class="field required mandatory-text">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
`,JL=`<div class="field optional">
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
`,t$=`// define your own text for the required/optional labels...
$field-required-text: '"Important"';
$field-optional-text: '"Not Required"';

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,n$=`<div class="field">
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
`,r$=`<div class="field">
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
`,a$=`<div class="field">
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
`,o$=()=>u("div",{className:"prose",children:[a("h1",{children:"Form Fields"}),a("p",{children:"Form fields are usually comprised of more than just an input. A label is usually present and sometimes an additional help message too."}),a("h2",{children:"Field Class"}),u("p",{children:["Create a container with the ",a("code",{children:"field"})," class. Any help message should have the ",a("code",{children:"help"})," class."]}),a(A,{html:ZL,language:"html",caption:"Form Field"}),a("h2",{children:"Invalid Field"}),u("p",{children:["Add the ",a("code",{children:"invalid"})," class to the ",a("code",{children:"field"})," to indicate fields that are invalid."]}),a(A,{html:qL,language:"html",caption:"Invalid Field"}),a("h2",{children:"Valid Field"}),u("p",{children:["Add the ",a("code",{children:"valid"})," class to the ",a("code",{children:"field"})," to indicate fields that have passed validation."]}),a(A,{html:QL,language:"html",caption:"Valid Field"}),a("h2",{children:"Required Field"}),u("p",{children:["Add the ",a("code",{children:"required"})," class to the ",a("code",{children:"field"})," if you want an additional tag added to the label."]}),a(A,{html:KL,language:"html",caption:"Required Field"}),u("p",{children:["You can use the ",a("code",{children:"--required-text"})," CSS variable to change the text displayed."]}),a(A,{html:XL,language:"html",caption:"Custom Required Field"}),a("h2",{children:"Optional Field"}),u("p",{children:["Add the ",a("code",{children:"optional"})," class to the ",a("code",{children:"field"})," if you want an additional tag added to the label."]}),a(A,{html:JL,language:"html",caption:"Optional Field"}),u("p",{children:["You can use the ",a("code",{children:"--optional-text"})," CSS variable to change the text displayed."]}),a(A,{html:e$,language:"html",caption:"Custom Optional Field"}),u("p",{children:["You can also change the text displayed for either the required and/or optional labels on a global level by setting the"," ",a("code",{children:"$field-required-text"})," and ",a("code",{children:"$field-optional-text"})," ","SASS variables. Be warned that you need to quote the values twice, so that the value defined includes a set of quotes, as shown here."]}),a(Re,{code:t$,caption:"Required Text",language:"scss",className:"mar-b-8",expand:!0}),a("h2",{children:"Input Prefix"}),u("p",{children:["If you want to add a prefix to a field you should enclose the input in an element with the ",a("code",{children:"input"})," class and add the"," ",a("code",{children:"prefix"})," class to the prefix element.  You can add a prefix to a text input, textarea, select or a checkbox or radio option with the ",a("code",{children:"border"})," class set.  You can try it without the "," ",a("code",{children:"border"})," but the effect is lost somewhat."]}),u("p",{children:["If you want a wide input then add the ",a("code",{children:"wide"})," class to the"," ",a("code",{children:"input"})," container element."]}),a(A,{html:n$,language:"html",caption:"Input Prefix"}),a("h2",{children:"Input Suffix"}),u("p",{children:["Adding an input suffix is just the same, except for giving your suffix element the ",a("code",{children:"suffix"})," class and putting it after the input."]}),a(A,{html:r$,language:"html",caption:"Input Suffix"}),a("h2",{children:"Prefix and Suffix"}),u("p",{children:["You can add both a ",a("code",{children:"prefix"})," and a ",a("code",{children:"suffix"}),". Not only do the colours and focus rings work correctly, but they also adapt their colors for ",a("code",{children:"valid"})," and ",a("code",{children:"invalid"})," fields."]}),a(A,{html:a$,language:"html",caption:"Prefix and Suffix"})]}),l$=Object.freeze(Object.defineProperty({__proto__:null,default:o$},Symbol.toStringTag,{value:"Module"})),i$=`<fieldset>
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
</fieldset>`,s$=()=>u("div",{className:"prose",children:[a("h1",{children:"Form Field Sets"}),u("p",{children:["You can group related fields together in a ",a("code",{children:"fieldset"}),"."]}),a("h2",{children:"Fieldset Container"}),a(A,{html:i$,language:"html",caption:"Form Fieldset"})]}),c$=Object.freeze(Object.defineProperty({__proto__:null,default:s$},Symbol.toStringTag,{value:"Module"})),m0=`<div class="field">
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
    <label class="checkbox wide disabled">
      <input type="checkbox" disabled>
      We don't need no stinkin' badgers
    </label>
  </div>
</fieldset>

<div class="text-right">
  <button class="solid brand">Submit</button>
</div>
`,d$=`<div class="grid-1 gap-4">
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
</div>`,u$=`<div class="field optional">
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
`,h$=`<div class="grid-1 gap-4">
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
</div>`;var zo={};/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv=j;function ge(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kt=Object.prototype.hasOwnProperty,f$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v0={},y0={};function Lv(e){return Kt.call(y0,e)?!0:Kt.call(v0,e)?!1:f$.test(e)?y0[e]=!0:(v0[e]=!0,!1)}function Gt(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var Mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Mt[e]=new Gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Mt[t]=new Gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Mt[e]=new Gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Mt[e]=new Gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Mt[e]=new Gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Mt[e]=new Gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Mt[e]=new Gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Mt[e]=new Gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Mt[e]=new Gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Uf=/[\-:]([a-z])/g;function Wf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Uf,Wf);Mt[t]=new Gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Uf,Wf);Mt[t]=new Gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Uf,Wf);Mt[t]=new Gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Mt[e]=new Gt(e,1,!1,e.toLowerCase(),null,!1,!1)});Mt.xlinkHref=new Gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Mt[e]=new Gt(e,1,!1,e.toLowerCase(),null,!0,!0)});var Cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},p$=["Webkit","ms","Moz","O"];Object.keys(Cs).forEach(function(e){p$.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cs[t]=Cs[e]})});var g$=/["'&<>]/;function Ut(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=g$.exec(e);if(t){var n="",r,o=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==r&&(n+=e.substring(o,r)),o=r+1,n+=t}e=o!==r?n+e.substring(o,r):n}return e}var m$=/([A-Z])/g,v$=/^ms-/,ah=Array.isArray;function ar(e,t){return{insertionMode:e,selectedValue:t}}function y$(e,t,n){switch(t){case"select":return ar(1,n.value!=null?n.value:n.defaultValue);case"svg":return ar(2,null);case"math":return ar(3,null);case"foreignObject":return ar(1,null);case"table":return ar(4,null);case"thead":case"tbody":case"tfoot":return ar(5,null);case"colgroup":return ar(7,null);case"tr":return ar(6,null)}return 4<=e.insertionMode||e.insertionMode===0?ar(1,null):e}var b0=new Map;function $v(e,t,n){if(typeof n!="object")throw Error(ge(62));t=!0;for(var r in n)if(Kt.call(n,r)){var o=n[r];if(o!=null&&typeof o!="boolean"&&o!==""){if(r.indexOf("--")===0){var l=Ut(r);o=Ut((""+o).trim())}else{l=r;var i=b0.get(l);i!==void 0||(i=Ut(l.replace(m$,"-$1").toLowerCase().replace(v$,"-ms-")),b0.set(l,i)),l=i,o=typeof o=="number"?o===0||Kt.call(Cs,r)?""+o:o+"px":Ut((""+o).trim())}t?(t=!1,e.push(' style="',l,":",o)):e.push(";",l,":",o)}}t||e.push('"')}function on(e,t,n,r){switch(n){case"style":$v(e,t,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N"){if(t=Mt.hasOwnProperty(n)?Mt[n]:null,t!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(n=t.attributeName,t.type){case 3:r&&e.push(" ",n,'=""');break;case 4:r===!0?e.push(" ",n,'=""'):r!==!1&&e.push(" ",n,'="',Ut(r),'"');break;case 5:isNaN(r)||e.push(" ",n,'="',Ut(r),'"');break;case 6:!isNaN(r)&&1<=r&&e.push(" ",n,'="',Ut(r),'"');break;default:t.sanitizeURL&&(r=""+r),e.push(" ",n,'="',Ut(r),'"')}}else if(Lv(n)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(t=n.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-")return}e.push(" ",n,'="',Ut(r),'"')}}}function Ss(e,t,n){if(t!=null){if(n!=null)throw Error(ge(60));if(typeof t!="object"||!("__html"in t))throw Error(ge(61));t=t.__html,t!=null&&e.push(""+t)}}function b$(e){var t="";return Tv.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function Vd(e,t,n,r){e.push(Wn(n));var o=n=null,l;for(l in t)if(Kt.call(t,l)){var i=t[l];if(i!=null)switch(l){case"children":n=i;break;case"dangerouslySetInnerHTML":o=i;break;default:on(e,r,l,i)}}return e.push(">"),Ss(e,o,n),typeof n=="string"?(e.push(Ut(n)),null):n}var w$=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,w0=new Map;function Wn(e){var t=w0.get(e);if(t===void 0){if(!w$.test(e))throw Error(ge(65,e));t="<"+e,w0.set(e,t)}return t}function x$(e,t,n,r,o){switch(t){case"select":e.push(Wn("select"));var l=null,i=null;for(m in n)if(Kt.call(n,m)){var s=n[m];if(s!=null)switch(m){case"children":l=s;break;case"dangerouslySetInnerHTML":i=s;break;case"defaultValue":case"value":break;default:on(e,r,m,s)}}return e.push(">"),Ss(e,i,l),l;case"option":i=o.selectedValue,e.push(Wn("option"));var d=s=null,f=null,m=null;for(l in n)if(Kt.call(n,l)){var b=n[l];if(b!=null)switch(l){case"children":s=b;break;case"selected":f=b;break;case"dangerouslySetInnerHTML":m=b;break;case"value":d=b;default:on(e,r,l,b)}}if(i!=null)if(n=d!==null?""+d:b$(s),ah(i)){for(r=0;r<i.length;r++)if(""+i[r]===n){e.push(' selected=""');break}}else""+i===n&&e.push(' selected=""');else f&&e.push(' selected=""');return e.push(">"),Ss(e,m,s),s;case"textarea":e.push(Wn("textarea")),m=i=l=null;for(s in n)if(Kt.call(n,s)&&(d=n[s],d!=null))switch(s){case"children":m=d;break;case"value":l=d;break;case"defaultValue":i=d;break;case"dangerouslySetInnerHTML":throw Error(ge(91));default:on(e,r,s,d)}if(l===null&&i!==null&&(l=i),e.push(">"),m!=null){if(l!=null)throw Error(ge(92));if(ah(m)&&1<m.length)throw Error(ge(93));l=""+m}return typeof l=="string"&&l[0]===`
`&&e.push(`
`),l!==null&&e.push(Ut(""+l)),null;case"input":e.push(Wn("input")),d=m=s=l=null;for(i in n)if(Kt.call(n,i)&&(f=n[i],f!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(ge(399,"input"));case"defaultChecked":d=f;break;case"defaultValue":s=f;break;case"checked":m=f;break;case"value":l=f;break;default:on(e,r,i,f)}return m!==null?on(e,r,"checked",m):d!==null&&on(e,r,"checked",d),l!==null?on(e,r,"value",l):s!==null&&on(e,r,"value",s),e.push("/>"),null;case"menuitem":e.push(Wn("menuitem"));for(var C in n)if(Kt.call(n,C)&&(l=n[C],l!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(ge(400));default:on(e,r,C,l)}return e.push(">"),null;case"title":e.push(Wn("title")),l=null;for(b in n)if(Kt.call(n,b)&&(i=n[b],i!=null))switch(b){case"children":l=i;break;case"dangerouslySetInnerHTML":throw Error(ge(434));default:on(e,r,b,i)}return e.push(">"),l;case"listing":case"pre":e.push(Wn(t)),i=l=null;for(d in n)if(Kt.call(n,d)&&(s=n[d],s!=null))switch(d){case"children":l=s;break;case"dangerouslySetInnerHTML":i=s;break;default:on(e,r,d,s)}if(e.push(">"),i!=null){if(l!=null)throw Error(ge(60));if(typeof i!="object"||!("__html"in i))throw Error(ge(61));n=i.__html,n!=null&&(typeof n=="string"&&0<n.length&&n[0]===`
`?e.push(`
`,n):e.push(""+n))}return typeof l=="string"&&l[0]===`
`&&e.push(`
`),l;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Wn(t));for(var N in n)if(Kt.call(n,N)&&(l=n[N],l!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(ge(399,t));default:on(e,r,N,l)}return e.push("/>"),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Vd(e,n,t,r);case"html":return o.insertionMode===0&&e.push("<!DOCTYPE html>"),Vd(e,n,t,r);default:if(t.indexOf("-")===-1&&typeof n.is!="string")return Vd(e,n,t,r);e.push(Wn(t)),i=l=null;for(f in n)if(Kt.call(n,f)&&(s=n[f],s!=null))switch(f){case"children":l=s;break;case"dangerouslySetInnerHTML":i=s;break;case"style":$v(e,r,s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:Lv(f)&&typeof s!="function"&&typeof s!="symbol"&&e.push(" ",f,'="',Ut(s),'"')}return e.push(">"),Ss(e,i,l),l}}function x0(e,t,n){if(e.push('<!--$?--><template id="'),n===null)throw Error(ge(395));return e.push(n),e.push('"></template>')}function C$(e,t,n,r){switch(n.insertionMode){case 0:case 1:return e.push('<div hidden id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 2:return e.push('<svg aria-hidden="true" style="display:none" id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 3:return e.push('<math aria-hidden="true" style="display:none" id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 4:return e.push('<table hidden id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 5:return e.push('<table hidden><tbody id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 6:return e.push('<table hidden><tr id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 7:return e.push('<table hidden><colgroup id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');default:throw Error(ge(397))}}function S$(e,t){switch(t.insertionMode){case 0:case 1:return e.push("</div>");case 2:return e.push("</svg>");case 3:return e.push("</math>");case 4:return e.push("</table>");case 5:return e.push("</tbody></table>");case 6:return e.push("</tr></table>");case 7:return e.push("</colgroup></table>");default:throw Error(ge(397))}}var k$=/[<\u2028\u2029]/g;function Gd(e){return JSON.stringify(e).replace(k$,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}function _$(e,t){return t=t===void 0?"":t,{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:t+"P:",segmentPrefix:t+"S:",boundaryPrefix:t+"B:",idPrefix:t,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:e}}function C0(e,t,n,r){return n.generateStaticMarkup?(e.push(Ut(t)),!1):(t===""?e=r:(r&&e.push("<!-- -->"),e.push(Ut(t)),e=!0),e)}var Fl=Object.assign,T$=Symbol.for("react.element"),Ev=Symbol.for("react.portal"),Nv=Symbol.for("react.fragment"),Iv=Symbol.for("react.strict_mode"),Mv=Symbol.for("react.profiler"),Rv=Symbol.for("react.provider"),Pv=Symbol.for("react.context"),Av=Symbol.for("react.forward_ref"),Fv=Symbol.for("react.suspense"),Ov=Symbol.for("react.suspense_list"),Dv=Symbol.for("react.memo"),Hf=Symbol.for("react.lazy"),L$=Symbol.for("react.scope"),$$=Symbol.for("react.debug_trace_mode"),E$=Symbol.for("react.legacy_hidden"),N$=Symbol.for("react.default_value"),S0=Symbol.iterator;function oh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nv:return"Fragment";case Ev:return"Portal";case Mv:return"Profiler";case Iv:return"StrictMode";case Fv:return"Suspense";case Ov:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pv:return(e.displayName||"Context")+".Consumer";case Rv:return(e._context.displayName||"Context")+".Provider";case Av:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Dv:return t=e.displayName||null,t!==null?t:oh(e.type)||"Memo";case Hf:t=e._payload,e=e._init;try{return oh(e(t))}catch{}}return null}var Bv={};function k0(e,t){if(e=e.contextTypes,!e)return Bv;var n={},r;for(r in e)n[r]=t[r];return n}var xa=null;function Fc(e,t){if(e!==t){e.context._currentValue2=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(ge(401))}else{if(n===null)throw Error(ge(401));Fc(e,n)}t.context._currentValue2=t.value}}function jv(e){e.context._currentValue2=e.parentValue,e=e.parent,e!==null&&jv(e)}function zv(e){var t=e.parent;t!==null&&zv(t),e.context._currentValue2=e.value}function Uv(e,t){if(e.context._currentValue2=e.parentValue,e=e.parent,e===null)throw Error(ge(402));e.depth===t.depth?Fc(e,t):Uv(e,t)}function Wv(e,t){var n=t.parent;if(n===null)throw Error(ge(402));e.depth===n.depth?Fc(e,n):Wv(e,n),t.context._currentValue2=t.value}function ac(e){var t=xa;t!==e&&(t===null?zv(e):e===null?jv(t):t.depth===e.depth?Fc(t,e):t.depth>e.depth?Uv(t,e):Wv(t,e),xa=e)}var _0={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function T0(e,t,n,r){var o=e.state!==void 0?e.state:null;e.updater=_0,e.props=n,e.state=o;var l={queue:[],replace:!1};e._reactInternals=l;var i=t.contextType;if(e.context=typeof i=="object"&&i!==null?i._currentValue2:r,i=t.getDerivedStateFromProps,typeof i=="function"&&(i=i(n,o),o=i==null?o:Fl({},o,i),e.state=o),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&_0.enqueueReplaceState(e,e.state,null),l.queue!==null&&0<l.queue.length)if(t=l.queue,i=l.replace,l.queue=null,l.replace=!1,i&&t.length===1)e.state=t[0];else{for(l=i?t[0]:e.state,o=!0,i=i?1:0;i<t.length;i++){var s=t[i];s=typeof s=="function"?s.call(e,l,n,r):s,s!=null&&(o?(o=!1,l=Fl({},l,s)):Fl(l,s))}e.state=l}else l.queue=null}var I$={id:1,overflow:""};function lh(e,t,n){var r=e.id;e=e.overflow;var o=32-ks(r)-1;r&=~(1<<o),n+=1;var l=32-ks(t)+o;if(30<l){var i=o-o%5;return l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,{id:1<<32-ks(t)+o|n<<o|r,overflow:l+e}}return{id:1<<l|n<<o|r,overflow:e}}var ks=Math.clz32?Math.clz32:P$,M$=Math.log,R$=Math.LN2;function P$(e){return e>>>=0,e===0?32:31-(M$(e)/R$|0)|0}function A$(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var F$=typeof Object.is=="function"?Object.is:A$,mr=null,Vf=null,_s=null,We=null,Cl=!1,oc=!1,li=0,Pr=null,Oc=0;function fa(){if(mr===null)throw Error(ge(321));return mr}function L0(){if(0<Oc)throw Error(ge(312));return{memoizedState:null,queue:null,next:null}}function Gf(){return We===null?_s===null?(Cl=!1,_s=We=L0()):(Cl=!0,We=_s):We.next===null?(Cl=!1,We=We.next=L0()):(Cl=!0,We=We.next),We}function Yf(){Vf=mr=null,oc=!1,_s=null,Oc=0,We=Pr=null}function Hv(e,t){return typeof t=="function"?t(e):t}function $0(e,t,n){if(mr=fa(),We=Gf(),Cl){var r=We.queue;if(t=r.dispatch,Pr!==null&&(n=Pr.get(r),n!==void 0)){Pr.delete(r),r=We.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return We.memoizedState=r,[r,t]}return[We.memoizedState,t]}return e=e===Hv?typeof t=="function"?t():t:n!==void 0?n(t):t,We.memoizedState=e,e=We.queue={last:null,dispatch:null},e=e.dispatch=O$.bind(null,mr,e),[We.memoizedState,e]}function E0(e,t){if(mr=fa(),We=Gf(),t=t===void 0?null:t,We!==null){var n=We.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var o=0;o<r.length&&o<t.length;o++)if(!F$(t[o],r[o])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),We.memoizedState=[e,t],e}function O$(e,t,n){if(25<=Oc)throw Error(ge(301));if(e===mr)if(oc=!0,e={action:n,next:null},Pr===null&&(Pr=new Map),n=Pr.get(t),n===void 0)Pr.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function D$(){throw Error(ge(394))}function rs(){}var N0={readContext:function(e){return e._currentValue2},useContext:function(e){return fa(),e._currentValue2},useMemo:E0,useReducer:$0,useRef:function(e){mr=fa(),We=Gf();var t=We.memoizedState;return t===null?(e={current:e},We.memoizedState=e):t},useState:function(e){return $0(Hv,e)},useInsertionEffect:rs,useLayoutEffect:function(){},useCallback:function(e,t){return E0(function(){return e},t)},useImperativeHandle:rs,useEffect:rs,useDebugValue:rs,useDeferredValue:function(e){return fa(),e},useTransition:function(){return fa(),[!1,D$]},useId:function(){var e=Vf.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-ks(e)-1)).toString(32)+t;var n=Ts;if(n===null)throw Error(ge(404));return t=li++,e=":"+n.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return fa(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(ge(407));return n()}},Ts=null,Yd=Tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function B$(e){return console.error(e),null}function Sl(){}function j$(e,t,n,r,o,l,i,s,d){var f=[],m=new Set;return t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:m,pingedTasks:f,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:o===void 0?B$:o,onAllReady:l===void 0?Sl:l,onShellReady:i===void 0?Sl:i,onShellError:s===void 0?Sl:s,onFatalError:d===void 0?Sl:d},n=lc(t,0,null,n,!1,!1),n.parentFlushed=!0,e=Zf(t,e,null,n,m,Bv,null,I$),f.push(e),t}function Zf(e,t,n,r,o,l,i,s){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var d={node:t,ping:function(){var f=e.pingedTasks;f.push(d),f.length===1&&Yv(e)},blockedBoundary:n,blockedSegment:r,abortSet:o,legacyContext:l,context:i,treeContext:s};return o.add(d),d}function lc(e,t,n,r,o,l){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:o,textEmbedded:l}}function ii(e,t){if(e=e.onError(t),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function ic(e,t){var n=e.onShellError;n(t),n=e.onFatalError,n(t),e.destination!==null?(e.status=2,e.destination.destroy(t)):(e.status=1,e.fatalError=t)}function I0(e,t,n,r,o){for(mr={},Vf=t,li=0,e=n(r,o);oc;)oc=!1,li=0,Oc+=1,We=null,e=n(r,o);return Yf(),e}function M0(e,t,n,r){var o=n.render(),l=r.childContextTypes;if(l!=null){var i=t.legacyContext;if(typeof n.getChildContext!="function")r=i;else{n=n.getChildContext();for(var s in n)if(!(s in l))throw Error(ge(108,oh(r)||"Unknown",s));r=Fl({},i,n)}t.legacyContext=r,cn(e,t,o),t.legacyContext=i}else cn(e,t,o)}function R0(e,t){if(e&&e.defaultProps){t=Fl({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ih(e,t,n,r,o){if(typeof n=="function")if(n.prototype&&n.prototype.isReactComponent){o=k0(n,t.legacyContext);var l=n.contextType;l=new n(r,typeof l=="object"&&l!==null?l._currentValue2:o),T0(l,n,r,o),M0(e,t,l,n)}else{l=k0(n,t.legacyContext),o=I0(e,t,n,r,l);var i=li!==0;if(typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0)T0(o,n,r,l),M0(e,t,o,n);else if(i){r=t.treeContext,t.treeContext=lh(r,1,0);try{cn(e,t,o)}finally{t.treeContext=r}}else cn(e,t,o)}else if(typeof n=="string"){switch(o=t.blockedSegment,l=x$(o.chunks,n,r,e.responseState,o.formatContext),o.lastPushedText=!1,i=o.formatContext,o.formatContext=y$(i,n,r),sh(e,t,l),o.formatContext=i,n){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:o.chunks.push("</",n,">")}o.lastPushedText=!1}else{switch(n){case E$:case $$:case Iv:case Mv:case Nv:cn(e,t,r.children);return;case Ov:cn(e,t,r.children);return;case L$:throw Error(ge(343));case Fv:e:{n=t.blockedBoundary,o=t.blockedSegment,l=r.fallback,r=r.children,i=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:i,errorDigest:null},d=lc(e,o.chunks.length,s,o.formatContext,!1,!1);o.children.push(d),o.lastPushedText=!1;var f=lc(e,0,null,o.formatContext,!1,!1);f.parentFlushed=!0,t.blockedBoundary=s,t.blockedSegment=f;try{if(sh(e,t,r),e.responseState.generateStaticMarkup||f.lastPushedText&&f.textEmbedded&&f.chunks.push("<!-- -->"),f.status=1,sc(s,f),s.pendingTasks===0)break e}catch(m){f.status=4,s.forceClientRender=!0,s.errorDigest=ii(e,m)}finally{t.blockedBoundary=n,t.blockedSegment=o}t=Zf(e,l,n,d,i,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Av:if(r=I0(e,t,n.render,r,o),li!==0){n=t.treeContext,t.treeContext=lh(n,1,0);try{cn(e,t,r)}finally{t.treeContext=n}}else cn(e,t,r);return;case Dv:n=n.type,r=R0(n,r),ih(e,t,n,r,o);return;case Rv:if(o=r.children,n=n._context,r=r.value,l=n._currentValue2,n._currentValue2=r,i=xa,xa=r={parent:i,depth:i===null?0:i.depth+1,context:n,parentValue:l,value:r},t.context=r,cn(e,t,o),e=xa,e===null)throw Error(ge(403));r=e.parentValue,e.context._currentValue2=r===N$?e.context._defaultValue:r,e=xa=e.parent,t.context=e;return;case Pv:r=r.children,r=r(n._currentValue2),cn(e,t,r);return;case Hf:o=n._init,n=o(n._payload),r=R0(n,r),ih(e,t,n,r,void 0);return}throw Error(ge(130,n==null?n:typeof n,""))}}function cn(e,t,n){if(t.node=n,typeof n=="object"&&n!==null){switch(n.$$typeof){case T$:ih(e,t,n.type,n.props,n.ref);return;case Ev:throw Error(ge(257));case Hf:var r=n._init;n=r(n._payload),cn(e,t,n);return}if(ah(n)){P0(e,t,n);return}if(n===null||typeof n!="object"?r=null:(r=S0&&n[S0]||n["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(n))){if(n=r.next(),!n.done){var o=[];do o.push(n.value),n=r.next();while(!n.done);P0(e,t,o)}return}throw e=Object.prototype.toString.call(n),Error(ge(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}typeof n=="string"?(r=t.blockedSegment,r.lastPushedText=C0(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText)):typeof n=="number"&&(r=t.blockedSegment,r.lastPushedText=C0(t.blockedSegment.chunks,""+n,e.responseState,r.lastPushedText))}function P0(e,t,n){for(var r=n.length,o=0;o<r;o++){var l=t.treeContext;t.treeContext=lh(l,r,o);try{sh(e,t,n[o])}finally{t.treeContext=l}}}function sh(e,t,n){var r=t.blockedSegment.formatContext,o=t.legacyContext,l=t.context;try{return cn(e,t,n)}catch(d){if(Yf(),typeof d=="object"&&d!==null&&typeof d.then=="function"){n=d;var i=t.blockedSegment,s=lc(e,i.chunks.length,null,i.formatContext,i.lastPushedText,!0);i.children.push(s),i.lastPushedText=!1,e=Zf(e,t.node,t.blockedBoundary,s,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=o,t.context=l,ac(l)}else throw t.blockedSegment.formatContext=r,t.legacyContext=o,t.context=l,ac(l),d}}function z$(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,Gv(this,t,e)}function Vv(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.push(null))):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(ge(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(o){return Vv(o,t,n)}),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady,r()))}function sc(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&sc(e,n)}else e.completedSegments.push(t)}function Gv(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(ge(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=Sl,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&sc(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(z$,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(sc(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function Yv(e){if(e.status!==2){var t=xa,n=Yd.current;Yd.current=N0;var r=Ts;Ts=e.responseState;try{var o=e.pingedTasks,l;for(l=0;l<o.length;l++){var i=o[l],s=e,d=i.blockedSegment;if(d.status===0){ac(i.context);try{cn(s,i,i.node),s.responseState.generateStaticMarkup||d.lastPushedText&&d.textEmbedded&&d.chunks.push("<!-- -->"),i.abortSet.delete(i),d.status=1,Gv(s,i.blockedBoundary,d)}catch(E){if(Yf(),typeof E=="object"&&E!==null&&typeof E.then=="function"){var f=i.ping;E.then(f,f)}else{i.abortSet.delete(i),d.status=4;var m=i.blockedBoundary,b=E,C=ii(s,b);if(m===null?ic(s,b):(m.pendingTasks--,m.forceClientRender||(m.forceClientRender=!0,m.errorDigest=C,m.parentFlushed&&s.clientRenderedBoundaries.push(m))),s.allPendingTasks--,s.allPendingTasks===0){var N=s.onAllReady;N()}}}finally{}}}o.splice(0,l),e.destination!==null&&qf(e,e.destination)}catch(E){ii(e,E),ic(e,E)}finally{Ts=r,Yd.current=n,n===N0&&ac(t)}}}function as(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,t.push('<template id="'),t.push(e.placeholderPrefix),e=r.toString(16),t.push(e),t.push('"></template>');case 1:n.status=2;var o=!0;r=n.chunks;var l=0;n=n.children;for(var i=0;i<n.length;i++){for(o=n[i];l<o.index;l++)t.push(r[l]);o=Dc(e,t,o)}for(;l<r.length-1;l++)t.push(r[l]);return l<r.length&&(o=t.push(r[l])),o;default:throw Error(ge(390))}}function Dc(e,t,n){var r=n.boundary;if(r===null)return as(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)return e.responseState.generateStaticMarkup||(r=r.errorDigest,t.push("<!--$!-->"),t.push("<template"),r&&(t.push(' data-dgst="'),r=Ut(r),t.push(r),t.push('"')),t.push("></template>")),as(e,t,n),e=e.responseState.generateStaticMarkup?!0:t.push("<!--/$-->"),e;if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var o=e.responseState,l=o.nextSuspenseID++;return o=o.boundaryPrefix+l.toString(16),r=r.id=o,x0(t,e.responseState,r),as(e,t,n),t.push("<!--/$-->")}if(r.byteSize>e.progressiveChunkSize)return r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),x0(t,e.responseState,r.id),as(e,t,n),t.push("<!--/$-->");if(e.responseState.generateStaticMarkup||t.push("<!--$-->"),n=r.completedSegments,n.length!==1)throw Error(ge(391));return Dc(e,t,n[0]),e=e.responseState.generateStaticMarkup?!0:t.push("<!--/$-->"),e}function A0(e,t,n){return C$(t,e.responseState,n.formatContext,n.id),Dc(e,t,n),S$(t,n.formatContext)}function F0(e,t,n){for(var r=n.completedSegments,o=0;o<r.length;o++)Zv(e,t,n,r[o]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,t.push(e.startInlineScript),e.sentCompleteBoundaryFunction?t.push('$RC("'):(e.sentCompleteBoundaryFunction=!0,t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')),r===null)throw Error(ge(395));return n=n.toString(16),t.push(r),t.push('","'),t.push(e.segmentPrefix),t.push(n),t.push('")<\/script>')}function Zv(e,t,n,r){if(r.status===2)return!0;var o=r.id;if(o===-1){if((r.id=n.rootSegmentID)===-1)throw Error(ge(392));return A0(e,t,r)}return A0(e,t,r),e=e.responseState,t.push(e.startInlineScript),e.sentCompleteSegmentFunction?t.push('$RS("'):(e.sentCompleteSegmentFunction=!0,t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')),t.push(e.segmentPrefix),o=o.toString(16),t.push(o),t.push('","'),t.push(e.placeholderPrefix),t.push(o),t.push('")<\/script>')}function qf(e,t){try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){Dc(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)t.push(r[n]);n<r.length&&t.push(r[n])}var o=e.clientRenderedBoundaries,l;for(l=0;l<o.length;l++){var i=o[l];r=t;var s=e.responseState,d=i.id,f=i.errorDigest,m=i.errorMessage,b=i.errorComponentStack;if(r.push(s.startInlineScript),s.sentClientRenderFunction?r.push('$RX("'):(s.sentClientRenderFunction=!0,r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')),d===null)throw Error(ge(395));if(r.push(d),r.push('"'),f||m||b){r.push(",");var C=Gd(f||"");r.push(C)}if(m||b){r.push(",");var N=Gd(m||"");r.push(N)}if(b){r.push(",");var E=Gd(b);r.push(E)}if(!r.push(")<\/script>")){e.destination=null,l++,o.splice(0,l);return}}o.splice(0,l);var S=e.completedBoundaries;for(l=0;l<S.length;l++)if(!F0(e,t,S[l])){e.destination=null,l++,S.splice(0,l);return}S.splice(0,l);var I=e.partialBoundaries;for(l=0;l<I.length;l++){var w=I[l];e:{o=e,i=t;var g=w.completedSegments;for(s=0;s<g.length;s++)if(!Zv(o,i,w,g[s])){s++,g.splice(0,s);var y=!1;break e}g.splice(0,s),y=!0}if(!y){e.destination=null,l++,I.splice(0,l);return}}I.splice(0,l);var v=e.completedBoundaries;for(l=0;l<v.length;l++)if(!F0(e,t,v[l])){e.destination=null,l++,v.splice(0,l);return}v.splice(0,l)}finally{e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.push(null)}}function U$(e,t){try{var n=e.abortableTasks;n.forEach(function(r){return Vv(r,e,t)}),n.clear(),e.destination!==null&&qf(e,e.destination)}catch(r){ii(e,r),ic(e,r)}}function W$(){}function qv(e,t,n,r){var o=!1,l=null,i="",s={push:function(f){return f!==null&&(i+=f),!0},destroy:function(f){o=!0,l=f}},d=!1;if(e=j$(e,_$(n,t?t.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,W$,void 0,function(){d=!0},void 0,void 0),Yv(e),U$(e,r),e.status===1)e.status=2,s.destroy(e.fatalError);else if(e.status!==2&&e.destination===null){e.destination=s;try{qf(e,s)}catch(f){ii(e,f),ic(e,f)}}if(o)throw l;if(!d)throw Error(ge(426));return i}zo.renderToNodeStream=function(){throw Error(ge(207))};zo.renderToStaticMarkup=function(e,t){return qv(e,t,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};zo.renderToStaticNodeStream=function(){throw Error(ge(208))};zo.renderToString=function(e,t){return qv(e,t,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};zo.version="18.2.0";var Qf={};/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv=j;function ye(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dn=null,un=0;function re(e,t){if(t.length!==0)if(512<t.length)0<un&&(e.enqueue(new Uint8Array(dn.buffer,0,un)),dn=new Uint8Array(512),un=0),e.enqueue(t);else{var n=dn.length-un;n<t.length&&(n===0?e.enqueue(dn):(dn.set(t.subarray(0,n),un),e.enqueue(dn),t=t.subarray(n)),dn=new Uint8Array(512),un=0),dn.set(t,un),un+=t.length}}function Ke(e,t){return re(e,t),!0}function O0(e){dn&&0<un&&(e.enqueue(new Uint8Array(dn.buffer,0,un)),dn=null,un=0)}var Kv=new TextEncoder;function xe(e){return Kv.encode(e)}function X(e){return Kv.encode(e)}function Xv(e,t){typeof e.error=="function"?e.error(t):e.close()}var Xt=Object.prototype.hasOwnProperty,H$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,D0={},B0={};function Jv(e){return Xt.call(B0,e)?!0:Xt.call(D0,e)?!1:H$.test(e)?B0[e]=!0:(D0[e]=!0,!1)}function Yt(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var Rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Rt[e]=new Yt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Rt[t]=new Yt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Rt[e]=new Yt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Rt[e]=new Yt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Rt[e]=new Yt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Rt[e]=new Yt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Rt[e]=new Yt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Rt[e]=new Yt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Rt[e]=new Yt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Kf=/[\-:]([a-z])/g;function Xf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Kf,Xf);Rt[t]=new Yt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Kf,Xf);Rt[t]=new Yt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Kf,Xf);Rt[t]=new Yt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Rt[e]=new Yt(e,1,!1,e.toLowerCase(),null,!1,!1)});Rt.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Rt[e]=new Yt(e,1,!1,e.toLowerCase(),null,!0,!0)});var Ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},V$=["Webkit","ms","Moz","O"];Object.keys(Ls).forEach(function(e){V$.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ls[t]=Ls[e]})});var G$=/["'&<>]/;function Et(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=G$.exec(e);if(t){var n="",r,o=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==r&&(n+=e.substring(o,r)),o=r+1,n+=t}e=o!==r?n+e.substring(o,r):n}return e}var Y$=/([A-Z])/g,Z$=/^ms-/,ch=Array.isArray,q$=X("<script>"),Q$=X("<\/script>"),K$=X('<script src="'),X$=X('<script type="module" src="'),j0=X('" async=""><\/script>'),J$=/(<\/|<)(s)(cript)/gi;function eE(e,t,n,r){return""+t+(n==="s"?"\\u0073":"\\u0053")+r}function tE(e,t,n,r,o){e=e===void 0?"":e,t=t===void 0?q$:X('<script nonce="'+Et(t)+'">');var l=[];if(n!==void 0&&l.push(t,xe((""+n).replace(J$,eE)),Q$),r!==void 0)for(n=0;n<r.length;n++)l.push(K$,xe(Et(r[n])),j0);if(o!==void 0)for(r=0;r<o.length;r++)l.push(X$,xe(Et(o[r])),j0);return{bootstrapChunks:l,startInlineScript:t,placeholderPrefix:X(e+"P:"),segmentPrefix:X(e+"S:"),boundaryPrefix:e+"B:",idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function Hn(e,t){return{insertionMode:e,selectedValue:t}}function nE(e){return Hn(e==="http://www.w3.org/2000/svg"?2:e==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function rE(e,t,n){switch(t){case"select":return Hn(1,n.value!=null?n.value:n.defaultValue);case"svg":return Hn(2,null);case"math":return Hn(3,null);case"foreignObject":return Hn(1,null);case"table":return Hn(4,null);case"thead":case"tbody":case"tfoot":return Hn(5,null);case"colgroup":return Hn(7,null);case"tr":return Hn(6,null)}return 4<=e.insertionMode||e.insertionMode===0?Hn(1,null):e}var Jf=X("<!-- -->");function z0(e,t,n,r){return t===""?r:(r&&e.push(Jf),e.push(xe(Et(t))),!0)}var U0=new Map,aE=X(' style="'),W0=X(":"),oE=X(";");function e4(e,t,n){if(typeof n!="object")throw Error(ye(62));t=!0;for(var r in n)if(Xt.call(n,r)){var o=n[r];if(o!=null&&typeof o!="boolean"&&o!==""){if(r.indexOf("--")===0){var l=xe(Et(r));o=xe(Et((""+o).trim()))}else{l=r;var i=U0.get(l);i!==void 0||(i=X(Et(l.replace(Y$,"-$1").toLowerCase().replace(Z$,"-ms-"))),U0.set(l,i)),l=i,o=typeof o=="number"?o===0||Xt.call(Ls,r)?xe(""+o):xe(o+"px"):xe(Et((""+o).trim()))}t?(t=!1,e.push(aE,l,W0,o)):e.push(oE,l,W0,o)}}t||e.push(pa)}var Tr=X(" "),to=X('="'),pa=X('"'),H0=X('=""');function ln(e,t,n,r){switch(n){case"style":e4(e,t,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N"){if(t=Rt.hasOwnProperty(n)?Rt[n]:null,t!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(n=xe(t.attributeName),t.type){case 3:r&&e.push(Tr,n,H0);break;case 4:r===!0?e.push(Tr,n,H0):r!==!1&&e.push(Tr,n,to,xe(Et(r)),pa);break;case 5:isNaN(r)||e.push(Tr,n,to,xe(Et(r)),pa);break;case 6:!isNaN(r)&&1<=r&&e.push(Tr,n,to,xe(Et(r)),pa);break;default:t.sanitizeURL&&(r=""+r),e.push(Tr,n,to,xe(Et(r)),pa)}}else if(Jv(n)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(t=n.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-")return}e.push(Tr,xe(n),to,xe(Et(r)),pa)}}}var Lr=X(">"),V0=X("/>");function $s(e,t,n){if(t!=null){if(n!=null)throw Error(ye(60));if(typeof t!="object"||!("__html"in t))throw Error(ye(61));t=t.__html,t!=null&&e.push(xe(""+t))}}function lE(e){var t="";return Qv.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}var Zd=X(' selected=""');function qd(e,t,n,r){e.push(Vn(n));var o=n=null,l;for(l in t)if(Xt.call(t,l)){var i=t[l];if(i!=null)switch(l){case"children":n=i;break;case"dangerouslySetInnerHTML":o=i;break;default:ln(e,r,l,i)}}return e.push(Lr),$s(e,o,n),typeof n=="string"?(e.push(xe(Et(n))),null):n}var Qd=X(`
`),iE=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,G0=new Map;function Vn(e){var t=G0.get(e);if(t===void 0){if(!iE.test(e))throw Error(ye(65,e));t=X("<"+e),G0.set(e,t)}return t}var sE=X("<!DOCTYPE html>");function cE(e,t,n,r,o){switch(t){case"select":e.push(Vn("select"));var l=null,i=null;for(m in n)if(Xt.call(n,m)){var s=n[m];if(s!=null)switch(m){case"children":l=s;break;case"dangerouslySetInnerHTML":i=s;break;case"defaultValue":case"value":break;default:ln(e,r,m,s)}}return e.push(Lr),$s(e,i,l),l;case"option":i=o.selectedValue,e.push(Vn("option"));var d=s=null,f=null,m=null;for(l in n)if(Xt.call(n,l)){var b=n[l];if(b!=null)switch(l){case"children":s=b;break;case"selected":f=b;break;case"dangerouslySetInnerHTML":m=b;break;case"value":d=b;default:ln(e,r,l,b)}}if(i!=null)if(n=d!==null?""+d:lE(s),ch(i)){for(r=0;r<i.length;r++)if(""+i[r]===n){e.push(Zd);break}}else""+i===n&&e.push(Zd);else f&&e.push(Zd);return e.push(Lr),$s(e,m,s),s;case"textarea":e.push(Vn("textarea")),m=i=l=null;for(s in n)if(Xt.call(n,s)&&(d=n[s],d!=null))switch(s){case"children":m=d;break;case"value":l=d;break;case"defaultValue":i=d;break;case"dangerouslySetInnerHTML":throw Error(ye(91));default:ln(e,r,s,d)}if(l===null&&i!==null&&(l=i),e.push(Lr),m!=null){if(l!=null)throw Error(ye(92));if(ch(m)&&1<m.length)throw Error(ye(93));l=""+m}return typeof l=="string"&&l[0]===`
`&&e.push(Qd),l!==null&&e.push(xe(Et(""+l))),null;case"input":e.push(Vn("input")),d=m=s=l=null;for(i in n)if(Xt.call(n,i)&&(f=n[i],f!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(ye(399,"input"));case"defaultChecked":d=f;break;case"defaultValue":s=f;break;case"checked":m=f;break;case"value":l=f;break;default:ln(e,r,i,f)}return m!==null?ln(e,r,"checked",m):d!==null&&ln(e,r,"checked",d),l!==null?ln(e,r,"value",l):s!==null&&ln(e,r,"value",s),e.push(V0),null;case"menuitem":e.push(Vn("menuitem"));for(var C in n)if(Xt.call(n,C)&&(l=n[C],l!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(ye(400));default:ln(e,r,C,l)}return e.push(Lr),null;case"title":e.push(Vn("title")),l=null;for(b in n)if(Xt.call(n,b)&&(i=n[b],i!=null))switch(b){case"children":l=i;break;case"dangerouslySetInnerHTML":throw Error(ye(434));default:ln(e,r,b,i)}return e.push(Lr),l;case"listing":case"pre":e.push(Vn(t)),i=l=null;for(d in n)if(Xt.call(n,d)&&(s=n[d],s!=null))switch(d){case"children":l=s;break;case"dangerouslySetInnerHTML":i=s;break;default:ln(e,r,d,s)}if(e.push(Lr),i!=null){if(l!=null)throw Error(ye(60));if(typeof i!="object"||!("__html"in i))throw Error(ye(61));n=i.__html,n!=null&&(typeof n=="string"&&0<n.length&&n[0]===`
`?e.push(Qd,xe(n)):e.push(xe(""+n)))}return typeof l=="string"&&l[0]===`
`&&e.push(Qd),l;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Vn(t));for(var N in n)if(Xt.call(n,N)&&(l=n[N],l!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(ye(399,t));default:ln(e,r,N,l)}return e.push(V0),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return qd(e,n,t,r);case"html":return o.insertionMode===0&&e.push(sE),qd(e,n,t,r);default:if(t.indexOf("-")===-1&&typeof n.is!="string")return qd(e,n,t,r);e.push(Vn(t)),i=l=null;for(f in n)if(Xt.call(n,f)&&(s=n[f],s!=null))switch(f){case"children":l=s;break;case"dangerouslySetInnerHTML":i=s;break;case"style":e4(e,r,s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:Jv(f)&&typeof s!="function"&&typeof s!="symbol"&&e.push(Tr,xe(f),to,xe(Et(s)),pa)}return e.push(Lr),$s(e,i,l),l}}var dE=X("</"),uE=X(">"),hE=X('<template id="'),fE=X('"></template>'),pE=X("<!--$-->"),gE=X('<!--$?--><template id="'),mE=X('"></template>'),vE=X("<!--$!-->"),yE=X("<!--/$-->"),bE=X("<template"),wE=X('"'),xE=X(' data-dgst="');X(' data-msg="');X(' data-stck="');var CE=X("></template>");function Y0(e,t,n){if(re(e,gE),n===null)throw Error(ye(395));return re(e,n),Ke(e,mE)}var SE=X('<div hidden id="'),kE=X('">'),_E=X("</div>"),TE=X('<svg aria-hidden="true" style="display:none" id="'),LE=X('">'),$E=X("</svg>"),EE=X('<math aria-hidden="true" style="display:none" id="'),NE=X('">'),IE=X("</math>"),ME=X('<table hidden id="'),RE=X('">'),PE=X("</table>"),AE=X('<table hidden><tbody id="'),FE=X('">'),OE=X("</tbody></table>"),DE=X('<table hidden><tr id="'),BE=X('">'),jE=X("</tr></table>"),zE=X('<table hidden><colgroup id="'),UE=X('">'),WE=X("</colgroup></table>");function HE(e,t,n,r){switch(n.insertionMode){case 0:case 1:return re(e,SE),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Ke(e,kE);case 2:return re(e,TE),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Ke(e,LE);case 3:return re(e,EE),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Ke(e,NE);case 4:return re(e,ME),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Ke(e,RE);case 5:return re(e,AE),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Ke(e,FE);case 6:return re(e,DE),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Ke(e,BE);case 7:return re(e,zE),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Ke(e,UE);default:throw Error(ye(397))}}function VE(e,t){switch(t.insertionMode){case 0:case 1:return Ke(e,_E);case 2:return Ke(e,$E);case 3:return Ke(e,IE);case 4:return Ke(e,PE);case 5:return Ke(e,OE);case 6:return Ke(e,jE);case 7:return Ke(e,WE);default:throw Error(ye(397))}}var GE=X('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),YE=X('$RS("'),ZE=X('","'),qE=X('")<\/script>'),QE=X('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),KE=X('$RC("'),XE=X('","'),JE=X('")<\/script>'),eN=X('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),tN=X('$RX("'),nN=X('"'),rN=X(")<\/script>"),Kd=X(","),aN=/[<\u2028\u2029]/g;function Xd(e){return JSON.stringify(e).replace(aN,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var Ol=Object.assign,oN=Symbol.for("react.element"),t4=Symbol.for("react.portal"),n4=Symbol.for("react.fragment"),r4=Symbol.for("react.strict_mode"),a4=Symbol.for("react.profiler"),o4=Symbol.for("react.provider"),l4=Symbol.for("react.context"),i4=Symbol.for("react.forward_ref"),s4=Symbol.for("react.suspense"),c4=Symbol.for("react.suspense_list"),d4=Symbol.for("react.memo"),e1=Symbol.for("react.lazy"),lN=Symbol.for("react.scope"),iN=Symbol.for("react.debug_trace_mode"),sN=Symbol.for("react.legacy_hidden"),cN=Symbol.for("react.default_value"),Z0=Symbol.iterator;function dh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case n4:return"Fragment";case t4:return"Portal";case a4:return"Profiler";case r4:return"StrictMode";case s4:return"Suspense";case c4:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case l4:return(e.displayName||"Context")+".Consumer";case o4:return(e._context.displayName||"Context")+".Provider";case i4:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case d4:return t=e.displayName||null,t!==null?t:dh(e.type)||"Memo";case e1:t=e._payload,e=e._init;try{return dh(e(t))}catch{}}return null}var u4={};function q0(e,t){if(e=e.contextTypes,!e)return u4;var n={},r;for(r in e)n[r]=t[r];return n}var Ca=null;function Bc(e,t){if(e!==t){e.context._currentValue=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(ye(401))}else{if(n===null)throw Error(ye(401));Bc(e,n)}t.context._currentValue=t.value}}function h4(e){e.context._currentValue=e.parentValue,e=e.parent,e!==null&&h4(e)}function f4(e){var t=e.parent;t!==null&&f4(t),e.context._currentValue=e.value}function p4(e,t){if(e.context._currentValue=e.parentValue,e=e.parent,e===null)throw Error(ye(402));e.depth===t.depth?Bc(e,t):p4(e,t)}function g4(e,t){var n=t.parent;if(n===null)throw Error(ye(402));e.depth===n.depth?Bc(e,n):g4(e,n),t.context._currentValue=t.value}function cc(e){var t=Ca;t!==e&&(t===null?f4(e):e===null?h4(t):t.depth===e.depth?Bc(t,e):t.depth>e.depth?p4(t,e):g4(t,e),Ca=e)}var Q0={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function K0(e,t,n,r){var o=e.state!==void 0?e.state:null;e.updater=Q0,e.props=n,e.state=o;var l={queue:[],replace:!1};e._reactInternals=l;var i=t.contextType;if(e.context=typeof i=="object"&&i!==null?i._currentValue:r,i=t.getDerivedStateFromProps,typeof i=="function"&&(i=i(n,o),o=i==null?o:Ol({},o,i),e.state=o),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&Q0.enqueueReplaceState(e,e.state,null),l.queue!==null&&0<l.queue.length)if(t=l.queue,i=l.replace,l.queue=null,l.replace=!1,i&&t.length===1)e.state=t[0];else{for(l=i?t[0]:e.state,o=!0,i=i?1:0;i<t.length;i++){var s=t[i];s=typeof s=="function"?s.call(e,l,n,r):s,s!=null&&(o?(o=!1,l=Ol({},l,s)):Ol(l,s))}e.state=l}else l.queue=null}var dN={id:1,overflow:""};function uh(e,t,n){var r=e.id;e=e.overflow;var o=32-Es(r)-1;r&=~(1<<o),n+=1;var l=32-Es(t)+o;if(30<l){var i=o-o%5;return l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,{id:1<<32-Es(t)+o|n<<o|r,overflow:l+e}}return{id:1<<l|n<<o|r,overflow:e}}var Es=Math.clz32?Math.clz32:fN,uN=Math.log,hN=Math.LN2;function fN(e){return e>>>=0,e===0?32:31-(uN(e)/hN|0)|0}function pN(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gN=typeof Object.is=="function"?Object.is:pN,vr=null,t1=null,Ns=null,He=null,kl=!1,dc=!1,si=0,Ar=null,jc=0;function ga(){if(vr===null)throw Error(ye(321));return vr}function X0(){if(0<jc)throw Error(ye(312));return{memoizedState:null,queue:null,next:null}}function n1(){return He===null?Ns===null?(kl=!1,Ns=He=X0()):(kl=!0,He=Ns):He.next===null?(kl=!1,He=He.next=X0()):(kl=!0,He=He.next),He}function r1(){t1=vr=null,dc=!1,Ns=null,jc=0,He=Ar=null}function m4(e,t){return typeof t=="function"?t(e):t}function J0(e,t,n){if(vr=ga(),He=n1(),kl){var r=He.queue;if(t=r.dispatch,Ar!==null&&(n=Ar.get(r),n!==void 0)){Ar.delete(r),r=He.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return He.memoizedState=r,[r,t]}return[He.memoizedState,t]}return e=e===m4?typeof t=="function"?t():t:n!==void 0?n(t):t,He.memoizedState=e,e=He.queue={last:null,dispatch:null},e=e.dispatch=mN.bind(null,vr,e),[He.memoizedState,e]}function e3(e,t){if(vr=ga(),He=n1(),t=t===void 0?null:t,He!==null){var n=He.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var o=0;o<r.length&&o<t.length;o++)if(!gN(t[o],r[o])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),He.memoizedState=[e,t],e}function mN(e,t,n){if(25<=jc)throw Error(ye(301));if(e===vr)if(dc=!0,e={action:n,next:null},Ar===null&&(Ar=new Map),n=Ar.get(t),n===void 0)Ar.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function vN(){throw Error(ye(394))}function os(){}var t3={readContext:function(e){return e._currentValue},useContext:function(e){return ga(),e._currentValue},useMemo:e3,useReducer:J0,useRef:function(e){vr=ga(),He=n1();var t=He.memoizedState;return t===null?(e={current:e},He.memoizedState=e):t},useState:function(e){return J0(m4,e)},useInsertionEffect:os,useLayoutEffect:function(){},useCallback:function(e,t){return e3(function(){return e},t)},useImperativeHandle:os,useEffect:os,useDebugValue:os,useDeferredValue:function(e){return ga(),e},useTransition:function(){return ga(),[!1,vN]},useId:function(){var e=t1.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-Es(e)-1)).toString(32)+t;var n=Is;if(n===null)throw Error(ye(404));return t=si++,e=":"+n.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return ga(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(ye(407));return n()}},Is=null,Jd=Qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function yN(e){return console.error(e),null}function _l(){}function bN(e,t,n,r,o,l,i,s,d){var f=[],m=new Set;return t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:m,pingedTasks:f,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:o===void 0?yN:o,onAllReady:l===void 0?_l:l,onShellReady:i===void 0?_l:i,onShellError:s===void 0?_l:s,onFatalError:d===void 0?_l:d},n=uc(t,0,null,n,!1,!1),n.parentFlushed=!0,e=a1(t,e,null,n,m,u4,null,dN),f.push(e),t}function a1(e,t,n,r,o,l,i,s){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var d={node:t,ping:function(){var f=e.pingedTasks;f.push(d),f.length===1&&b4(e)},blockedBoundary:n,blockedSegment:r,abortSet:o,legacyContext:l,context:i,treeContext:s};return o.add(d),d}function uc(e,t,n,r,o,l){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:o,textEmbedded:l}}function ci(e,t){if(e=e.onError(t),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function hc(e,t){var n=e.onShellError;n(t),n=e.onFatalError,n(t),e.destination!==null?(e.status=2,Xv(e.destination,t)):(e.status=1,e.fatalError=t)}function n3(e,t,n,r,o){for(vr={},t1=t,si=0,e=n(r,o);dc;)dc=!1,si=0,jc+=1,He=null,e=n(r,o);return r1(),e}function r3(e,t,n,r){var o=n.render(),l=r.childContextTypes;if(l!=null){var i=t.legacyContext;if(typeof n.getChildContext!="function")r=i;else{n=n.getChildContext();for(var s in n)if(!(s in l))throw Error(ye(108,dh(r)||"Unknown",s));r=Ol({},i,n)}t.legacyContext=r,hn(e,t,o),t.legacyContext=i}else hn(e,t,o)}function a3(e,t){if(e&&e.defaultProps){t=Ol({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function hh(e,t,n,r,o){if(typeof n=="function")if(n.prototype&&n.prototype.isReactComponent){o=q0(n,t.legacyContext);var l=n.contextType;l=new n(r,typeof l=="object"&&l!==null?l._currentValue:o),K0(l,n,r,o),r3(e,t,l,n)}else{l=q0(n,t.legacyContext),o=n3(e,t,n,r,l);var i=si!==0;if(typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0)K0(o,n,r,l),r3(e,t,o,n);else if(i){r=t.treeContext,t.treeContext=uh(r,1,0);try{hn(e,t,o)}finally{t.treeContext=r}}else hn(e,t,o)}else if(typeof n=="string"){switch(o=t.blockedSegment,l=cE(o.chunks,n,r,e.responseState,o.formatContext),o.lastPushedText=!1,i=o.formatContext,o.formatContext=rE(i,n,r),fh(e,t,l),o.formatContext=i,n){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:o.chunks.push(dE,xe(n),uE)}o.lastPushedText=!1}else{switch(n){case sN:case iN:case r4:case a4:case n4:hn(e,t,r.children);return;case c4:hn(e,t,r.children);return;case lN:throw Error(ye(343));case s4:e:{n=t.blockedBoundary,o=t.blockedSegment,l=r.fallback,r=r.children,i=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:i,errorDigest:null},d=uc(e,o.chunks.length,s,o.formatContext,!1,!1);o.children.push(d),o.lastPushedText=!1;var f=uc(e,0,null,o.formatContext,!1,!1);f.parentFlushed=!0,t.blockedBoundary=s,t.blockedSegment=f;try{if(fh(e,t,r),f.lastPushedText&&f.textEmbedded&&f.chunks.push(Jf),f.status=1,fc(s,f),s.pendingTasks===0)break e}catch(m){f.status=4,s.forceClientRender=!0,s.errorDigest=ci(e,m)}finally{t.blockedBoundary=n,t.blockedSegment=o}t=a1(e,l,n,d,i,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n=="object"&&n!==null)switch(n.$$typeof){case i4:if(r=n3(e,t,n.render,r,o),si!==0){n=t.treeContext,t.treeContext=uh(n,1,0);try{hn(e,t,r)}finally{t.treeContext=n}}else hn(e,t,r);return;case d4:n=n.type,r=a3(n,r),hh(e,t,n,r,o);return;case o4:if(o=r.children,n=n._context,r=r.value,l=n._currentValue,n._currentValue=r,i=Ca,Ca=r={parent:i,depth:i===null?0:i.depth+1,context:n,parentValue:l,value:r},t.context=r,hn(e,t,o),e=Ca,e===null)throw Error(ye(403));r=e.parentValue,e.context._currentValue=r===cN?e.context._defaultValue:r,e=Ca=e.parent,t.context=e;return;case l4:r=r.children,r=r(n._currentValue),hn(e,t,r);return;case e1:o=n._init,n=o(n._payload),r=a3(n,r),hh(e,t,n,r,void 0);return}throw Error(ye(130,n==null?n:typeof n,""))}}function hn(e,t,n){if(t.node=n,typeof n=="object"&&n!==null){switch(n.$$typeof){case oN:hh(e,t,n.type,n.props,n.ref);return;case t4:throw Error(ye(257));case e1:var r=n._init;n=r(n._payload),hn(e,t,n);return}if(ch(n)){o3(e,t,n);return}if(n===null||typeof n!="object"?r=null:(r=Z0&&n[Z0]||n["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(n))){if(n=r.next(),!n.done){var o=[];do o.push(n.value),n=r.next();while(!n.done);o3(e,t,o)}return}throw e=Object.prototype.toString.call(n),Error(ye(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}typeof n=="string"?(r=t.blockedSegment,r.lastPushedText=z0(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText)):typeof n=="number"&&(r=t.blockedSegment,r.lastPushedText=z0(t.blockedSegment.chunks,""+n,e.responseState,r.lastPushedText))}function o3(e,t,n){for(var r=n.length,o=0;o<r;o++){var l=t.treeContext;t.treeContext=uh(l,r,o);try{fh(e,t,n[o])}finally{t.treeContext=l}}}function fh(e,t,n){var r=t.blockedSegment.formatContext,o=t.legacyContext,l=t.context;try{return hn(e,t,n)}catch(d){if(r1(),typeof d=="object"&&d!==null&&typeof d.then=="function"){n=d;var i=t.blockedSegment,s=uc(e,i.chunks.length,null,i.formatContext,i.lastPushedText,!0);i.children.push(s),i.lastPushedText=!1,e=a1(e,t.node,t.blockedBoundary,s,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=o,t.context=l,cc(l)}else throw t.blockedSegment.formatContext=r,t.legacyContext=o,t.context=l,cc(l),d}}function wN(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,y4(this,t,e)}function v4(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.close())):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(ye(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(o){return v4(o,t,n)}),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady,r()))}function fc(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&fc(e,n)}else e.completedSegments.push(t)}function y4(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(ye(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=_l,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&fc(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(wN,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(fc(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function b4(e){if(e.status!==2){var t=Ca,n=Jd.current;Jd.current=t3;var r=Is;Is=e.responseState;try{var o=e.pingedTasks,l;for(l=0;l<o.length;l++){var i=o[l],s=e,d=i.blockedSegment;if(d.status===0){cc(i.context);try{hn(s,i,i.node),d.lastPushedText&&d.textEmbedded&&d.chunks.push(Jf),i.abortSet.delete(i),d.status=1,y4(s,i.blockedBoundary,d)}catch(E){if(r1(),typeof E=="object"&&E!==null&&typeof E.then=="function"){var f=i.ping;E.then(f,f)}else{i.abortSet.delete(i),d.status=4;var m=i.blockedBoundary,b=E,C=ci(s,b);if(m===null?hc(s,b):(m.pendingTasks--,m.forceClientRender||(m.forceClientRender=!0,m.errorDigest=C,m.parentFlushed&&s.clientRenderedBoundaries.push(m))),s.allPendingTasks--,s.allPendingTasks===0){var N=s.onAllReady;N()}}}finally{}}}o.splice(0,l),e.destination!==null&&o1(e,e.destination)}catch(E){ci(e,E),hc(e,E)}finally{Is=r,Jd.current=n,n===t3&&cc(t)}}}function ls(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,re(t,hE),re(t,e.placeholderPrefix),e=xe(r.toString(16)),re(t,e),Ke(t,fE);case 1:n.status=2;var o=!0;r=n.chunks;var l=0;n=n.children;for(var i=0;i<n.length;i++){for(o=n[i];l<o.index;l++)re(t,r[l]);o=zc(e,t,o)}for(;l<r.length-1;l++)re(t,r[l]);return l<r.length&&(o=Ke(t,r[l])),o;default:throw Error(ye(390))}}function zc(e,t,n){var r=n.boundary;if(r===null)return ls(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)r=r.errorDigest,Ke(t,vE),re(t,bE),r&&(re(t,xE),re(t,xe(Et(r))),re(t,wE)),Ke(t,CE),ls(e,t,n);else if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var o=e.responseState,l=o.nextSuspenseID++;o=X(o.boundaryPrefix+l.toString(16)),r=r.id=o,Y0(t,e.responseState,r),ls(e,t,n)}else if(r.byteSize>e.progressiveChunkSize)r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),Y0(t,e.responseState,r.id),ls(e,t,n);else{if(Ke(t,pE),n=r.completedSegments,n.length!==1)throw Error(ye(391));zc(e,t,n[0])}return Ke(t,yE)}function l3(e,t,n){return HE(t,e.responseState,n.formatContext,n.id),zc(e,t,n),VE(t,n.formatContext)}function i3(e,t,n){for(var r=n.completedSegments,o=0;o<r.length;o++)w4(e,t,n,r[o]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,re(t,e.startInlineScript),e.sentCompleteBoundaryFunction?re(t,KE):(e.sentCompleteBoundaryFunction=!0,re(t,QE)),r===null)throw Error(ye(395));return n=xe(n.toString(16)),re(t,r),re(t,XE),re(t,e.segmentPrefix),re(t,n),Ke(t,JE)}function w4(e,t,n,r){if(r.status===2)return!0;var o=r.id;if(o===-1){if((r.id=n.rootSegmentID)===-1)throw Error(ye(392));return l3(e,t,r)}return l3(e,t,r),e=e.responseState,re(t,e.startInlineScript),e.sentCompleteSegmentFunction?re(t,YE):(e.sentCompleteSegmentFunction=!0,re(t,GE)),re(t,e.segmentPrefix),o=xe(o.toString(16)),re(t,o),re(t,ZE),re(t,e.placeholderPrefix),re(t,o),Ke(t,qE)}function o1(e,t){dn=new Uint8Array(512),un=0;try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){zc(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)re(t,r[n]);n<r.length&&Ke(t,r[n])}var o=e.clientRenderedBoundaries,l;for(l=0;l<o.length;l++){var i=o[l];r=t;var s=e.responseState,d=i.id,f=i.errorDigest,m=i.errorMessage,b=i.errorComponentStack;if(re(r,s.startInlineScript),s.sentClientRenderFunction?re(r,tN):(s.sentClientRenderFunction=!0,re(r,eN)),d===null)throw Error(ye(395));re(r,d),re(r,nN),(f||m||b)&&(re(r,Kd),re(r,xe(Xd(f||"")))),(m||b)&&(re(r,Kd),re(r,xe(Xd(m||"")))),b&&(re(r,Kd),re(r,xe(Xd(b)))),Ke(r,rN)}o.splice(0,l);var C=e.completedBoundaries;for(l=0;l<C.length;l++)i3(e,t,C[l]);C.splice(0,l),O0(t),dn=new Uint8Array(512),un=0;var N=e.partialBoundaries;for(l=0;l<N.length;l++){var E=N[l];e:{o=e,i=t;var S=E.completedSegments;for(s=0;s<S.length;s++)if(!w4(o,i,E,S[s])){s++,S.splice(0,s);var I=!1;break e}S.splice(0,s),I=!0}if(!I){e.destination=null,l++,N.splice(0,l);return}}N.splice(0,l);var w=e.completedBoundaries;for(l=0;l<w.length;l++)i3(e,t,w[l]);w.splice(0,l)}finally{O0(t),e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.close()}}function s3(e,t){try{var n=e.abortableTasks;n.forEach(function(r){return v4(r,e,t)}),n.clear(),e.destination!==null&&o1(e,e.destination)}catch(r){ci(e,r),hc(e,r)}}Qf.renderToReadableStream=function(e,t){return new Promise(function(n,r){var o,l,i=new Promise(function(m,b){l=m,o=b}),s=bN(e,tE(t?t.identifierPrefix:void 0,t?t.nonce:void 0,t?t.bootstrapScriptContent:void 0,t?t.bootstrapScripts:void 0,t?t.bootstrapModules:void 0),nE(t?t.namespaceURI:void 0),t?t.progressiveChunkSize:void 0,t?t.onError:void 0,l,function(){var m=new ReadableStream({type:"bytes",pull:function(b){if(s.status===1)s.status=2,Xv(b,s.fatalError);else if(s.status!==2&&s.destination===null){s.destination=b;try{o1(s,b)}catch(C){ci(s,C),hc(s,C)}}},cancel:function(){s3(s)}},{highWaterMark:0});m.allReady=i,n(m)},function(m){i.catch(function(){}),r(m)},o);if(t&&t.signal){var d=t.signal,f=function(){s3(s,d.reason),d.removeEventListener("abort",f)};d.addEventListener("abort",f)}b4(s)})};Qf.version="18.2.0";var Uo,x4;Uo=zo,x4=Qf;Uo.version;var xN=Uo.renderToString;Uo.renderToStaticMarkup;Uo.renderToNodeStream;Uo.renderToStaticNodeStream;x4.renderToReadableStream;var C4={exports:{}},CN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",SN=CN,kN=SN;function S4(){}function k4(){}k4.resetWarningCache=S4;var _N=function(){function e(r,o,l,i,s,d){if(d!==kN){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:k4,resetWarningCache:S4};return n.PropTypes=n,n};C4.exports=_N();var TN=C4.exports;const On=Kn(TN);var LN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _4(e,t){return e(t={exports:{}},t.exports),t.exports}var $N=_4(function(e){(function(t){var n=function(I,w,g){if(!d(w)||m(w)||b(w)||C(w)||s(w))return w;var y,v=0,L=0;if(f(w))for(y=[],L=w.length;v<L;v++)y.push(n(I,w[v],g));else for(var _ in y={},w)Object.prototype.hasOwnProperty.call(w,_)&&(y[I(_,g)]=n(I,w[_],g));return y},r=function(I){return N(I)?I:(I=I.replace(/[\-_\s]+(.)?/g,function(w,g){return g?g.toUpperCase():""})).substr(0,1).toLowerCase()+I.substr(1)},o=function(I){var w=r(I);return w.substr(0,1).toUpperCase()+w.substr(1)},l=function(I,w){return function(g,y){var v=(y=y||{}).separator||"_",L=y.split||/(?=[A-Z])/;return g.split(L).join(v)}(I,w).toLowerCase()},i=Object.prototype.toString,s=function(I){return typeof I=="function"},d=function(I){return I===Object(I)},f=function(I){return i.call(I)=="[object Array]"},m=function(I){return i.call(I)=="[object Date]"},b=function(I){return i.call(I)=="[object RegExp]"},C=function(I){return i.call(I)=="[object Boolean]"},N=function(I){return(I-=0)==I},E=function(I,w){var g=w&&"process"in w?w.process:w;return typeof g!="function"?I:function(y,v){return g(y,I,v)}},S={camelize:r,decamelize:l,pascalize:o,depascalize:l,camelizeKeys:function(I,w){return n(E(r,w),I)},decamelizeKeys:function(I,w){return n(E(l,w),I,w)},pascalizeKeys:function(I,w){return n(E(o,w),I)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})(LN)}).decamelize,EN=function(e){if(Array.isArray(e))return e},NN=function(e,t){if(typeof Symbol<"u"&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,l=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(d){o=!0,l=d}finally{try{r||s.return==null||s.return()}finally{if(o)throw l}}return n}},c3=function(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},IN=function(e,t){if(e){if(typeof e=="string")return c3(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c3(e,t):void 0}},MN=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},RN=function(e,t){return EN(e)||NN(e,t)||IN(e,t)||MN()},T4=_4(function(e){function t(){return e.exports=t=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},t.apply(this,arguments)}e.exports=t}),PN=function(e,t){if(e==null)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o},L4=function(e,t){if(e==null)return{};var n,r,o=PN(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o},AN=j.createContext(null);function ph(e){var t=e.children,n=L4(e,["children"]);return typeof t!="string"&&(t=xN(t)),$t.createElement("template",T4({},n,{dangerouslySetInnerHTML:{__html:t}}))}function gh(e){var t=e.root,n=e.children;return Tm.createPortal(n,t)}function FN(e){var t=j.forwardRef(function(n,r){var o,l,i=n.mode,s=n.delegatesFocus,d=n.styleSheets,f=n.ssr,m=n.children,b=L4(n,["mode","delegatesFocus","styleSheets","ssr","children"]),C=(l=j.useRef((o=r)&&o.current),j.useEffect(function(){o&&(o.current=l.current)},[o]),l),N=j.useState(null),E=RN(N,2),S=E[0],I=E[1],w="node_".concat(i).concat(s);return j.useLayoutEffect(function(){if(C.current)try{if(typeof r=="function"&&r(C.current),f){var g=C.current.shadowRoot;return void I(g)}var y=C.current.attachShadow({mode:i,delegatesFocus:s});d.length>0&&(y.adoptedStyleSheets=d),I(y)}catch(v){(function(L){var _=L.error,P=L.styleSheets,O=L.root;switch(_.name){case"NotSupportedError":P.length>0&&(O.adoptedStyleSheets=P);break;default:throw _}})({error:v,styleSheets:d,root:S})}},[r,C,d]),$t.createElement($t.Fragment,null,$t.createElement(e.tag,T4({key:w,ref:C},b),(S||f)&&$t.createElement(AN.Provider,{value:S},f?$t.createElement(ph,{shadowroot:"open"},e.render({root:S,ssr:f,children:m})):$t.createElement(gh,{root:S},e.render({root:S,ssr:f,children:m})))))});return t.propTypes={mode:On.oneOf(["open","closed"]),delegatesFocus:On.bool,styleSheets:On.arrayOf(On.instanceOf(globalThis.CSSStyleSheet)),ssr:On.bool,children:On.node},t.defaultProps={mode:"open",delegatesFocus:!1,styleSheets:[],ssr:!1,children:null},t}ph.propTypes={children:On.oneOfType([On.string,On.node])},ph.defaultProps={children:""},gh.propTypes={root:On.object.isRequired,children:On.node},gh.defaultProps={children:null};var eu=new Map;function ON(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"core",n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(r){return r.children};return new Proxy(e,{get:function(r,o){var l=$N(o,{separator:"-"}),i="".concat(t,"-").concat(l);return eu.has(i)||eu.set(i,FN({tag:l,render:n})),eu.get(i)}})}var DN=ON();const BN=()=>u("div",{className:"prose",children:[a("h1",{children:"Forms"}),u("blockquote",{className:"intro",children:["There is something about styling forms, that's so not fun. It's like ",a("em",{children:'"How much less fun could this be?"'})," ","and the answer is ",a("em",{children:'"None, none... less fun."'}),a("div",{className:"attrib",children:"Nigel Tufnel's website designer"})]}),a("h2",{children:"None Less Fun"}),a("p",{children:"Anyone reading this who is old enough to have served in the browser wars will no doubt be rolling their eyes at this point, thinking that kids these days don't know how lucky they are."}),u("p",{children:["It's certainly true that things are ",a("i",{children:"much"})," better than they used.  But despite all the advances in CSS support and cross-browser compatibility, the default styling for HTML forms still looks like 1995 called and asked for its website back."]}),a("p",{children:"Badger CSS includes form styling presets, supporting both light and dark themes out of the box. It uses native form components for accessibility and mobile friendliness.  Everything is configurable if you want to change things, but you don't have to."}),a("p",{children:"Here's the same form rendered twice.  Once with the default HTML styling and again with the default Badger CSS styles.  In case you're wondering, there's no Javascript in any of these forms.  It's all just vanilla HTML and CSS."}),u("div",{className:"grid-2 gap-8 mar-t-10 stack-desktop",children:[u("div",{className:"output",children:[a("h3",{className:"mar-b-4",children:"Default Form Styles"}),a(DN.div,{children:a("div",{dangerouslySetInnerHTML:{__html:m0}})})]}),u("div",{className:"output",children:[a("h3",{className:"mar-b-4",children:"Badger CSS Form Styles"}),a("div",{dangerouslySetInnerHTML:{__html:m0}})]})]}),a("h2",{children:"Go Large?"}),u("p",{children:["All form components are sized using ems and will adapt to whatever the current text size is.  If you want a small form, for example, then you just need to add a ",a("code",{children:"small"})," class to the form or one of its parent containers."]}),a("div",{className:"grid-2 gap-4 stack-widescreen",children:["smallest","smaller","small","large","larger","largest"].map(e=>u("div",{className:`${e} pad-6 border output shadow-2`,children:[a("h3",{className:"font-mono mar-b-3",children:e}),a("div",{dangerouslySetInnerHTML:{__html:d$}})]},e))}),a("h2",{children:"Accessibility and Focus"}),a("p",{children:"If you've played with any of the forms above you may have noticed the prominent ring around inputs when focussed.  This is important for accessibility to clearly indicate which field is selected."}),u("p",{children:["If for some reason you really, really need to disabled it because you're indicating the focus some other way then you can add the"," ",a("code",{children:"no-focus"})," class to the inputs."]}),a(A,{html:h$,language:"html"}),a("h2",{children:"Themes and Surfaces"}),a("p",{children:"Styling forms is made that much harder these days by the need to support both light and dark themes.  On top of that we might want to have forms included on different surfaces with varying levels of background intensity. Thanks to the magic of CSS custom properties we can tweak the colors used to render forms depending on the background color of the container."}),a("p",{children:"In these examples below it may not be immediately obvious that the colors are slightly different but they are.  They're different so that they look more-or-less the same, while providing adequate contrast."}),a("div",{className:"grid-3 gap-4 stack-widescreen mar-b-8",children:["surface","surface-1","surface-2","surface-3","surface-4","surface-5"].map(e=>u("div",{className:`${e} pad-6 border shadow-2`,children:[a("h3",{className:"font-mono mar-b-3",children:e}),a("div",{dangerouslySetInnerHTML:{__html:u$}})]},e))})]}),jN=Object.freeze(Object.defineProperty({__proto__:null,default:BN},Symbol.toStringTag,{value:"Module"})),zN=`<label>
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
`,UN=`<label class="wide radio">
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
`,WN=`<label class="border radio mar-r-2">
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
`,HN=`<div>
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
</div>`,VN=()=>u("div",{children:[a("h1",{children:"Radio Buttons"}),a("h2",{children:"Radio Class"}),u("p",{children:["Radio buttons are implemented much like"," ",a(Ee,{to:"/forms/checkboxes",text:"checkboxes"}),".  Create a"," ",a("code",{children:"label"})," enclosing an ",a("code",{children:"input"})," with the"," ",a("code",{children:'type="radio"'})," attribute."]}),u("p",{children:["The same warning about Firefox applies.  The current version (v115) doesn't support the ",a("code",{children:":has()"})," CSS selector that this depends on so you have to manually add the ",a("code",{children:"radio"})," class to the ",a("code",{children:"label"})," as a work-around."]}),a(A,{html:zN,language:"html",caption:"Radio Buttons"}),a("h2",{children:"Wide Radio Buttons"}),u("p",{children:["Add the ",a("code",{children:"wide"})," class for full-width radio buttons."]}),a(A,{html:UN,language:"html",caption:"Wide Radio Buttons"}),a("h2",{children:"Radio Button Borders"}),u("p",{children:["Add the ",a("code",{children:"border"})," class for borders."]}),a(A,{html:WN,language:"html",caption:"Border Radio Buttons"}),a("h2",{children:"Custom Radio Buttons"}),a(A,{html:HN,language:"html",caption:"Custom Checkboxes"})]}),GN=Object.freeze(Object.defineProperty({__proto__:null,default:VN},Symbol.toStringTag,{value:"Module"})),YN=`<select name="animal">
  <option value="">-- Choose an animal --</option>
  <option value="ant">Ant</option>
  <option value="badger">Badger</option>
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
  <option value="elephant">Elephant</option>
  <option value="ferret">Ferret</option>
  <option value="goldfish">Goldfish</option>
</select>
`,ZN=`<select name="animal" required>
  <option value="" hidden disabled selected>Choose an animal</option>
  <option value="ant">Ant</option>
  <option value="badger">Badger</option>
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
  <option value="elephant">Elephant</option>
  <option value="ferret">Ferret</option>
  <option value="goldfish">Goldfish</option>
</select>
`,qN=`<div class="small flex start gap-4 mar-b-4">
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
`,QN=`<select name="animal">
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
`,KN=`<div>
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

`,XN=()=>u("div",{className:"prose",children:[a("h1",{children:"Select Input"}),a("p",{children:"Select inputs are the bane of web developers and designers everywhere. There are notoriously difficult to style.  They don't want to align with other elements.  Their size is often wrong.  And just when you think you've finally cracked it, you look at it on another browser and see that it's all on the wonk."}),a("p",{children:"I have wasted far too many hours of my life starting at forms like this one trying to get everything the same size and aligned properly."}),a(A,{html:qN,language:"html",caption:"Select Alignment"}),u("p",{children:["The least bad solution is to set ",a("code",{children:"appearance: none"})," to remove the browser-specific rendering quirks.  The problem then is that you also lose drop down arrow indicating that it's a select input.  So we have to put that back in using an SVG background image. But you don't need to worry about that - I did so you don't have to."]}),a(A,{html:YN,language:"html",caption:"Select Input"}),a("h2",{children:"Custom Icon"}),u("p",{children:["You can define your own drop down arrow icon using the"," ",a("code",{children:"--arrow-down"})," property.  It's a little bit tricky because you have to URI encode the SVG and define it as shown in this example.  If you've got an SVG icon with a simple path and your icon is 16px square then you can copy the definition from this example and insert your path data into the ",a("code",{children:"path d='...'"})," part."]}),u("p",{children:["Note that you can't use ",a("code",{children:"currentColor"})," to set the stroke or fill color.  You can define separate ",a("code",{children:"--arrow-down"})," ","properties for you light and dark themes, or you can use a neutral color like ",a("code",{children:"#888"})," which works well in both cases."]}),a(A,{html:KN,language:"html",caption:"Custom Icon"}),a("h2",{children:"Placeholder"}),u("p",{children:["Another annoying thing about select inputs is that they don't support the ",a("code",{children:"placeholder"})," attribute.  You can work around the problem by adding the ",a("code",{children:"required"})," attribute to the"," ",a("code",{children:"select"})," input and the ",a("code",{children:"hidden"}),","," ",a("code",{children:"disabled"})," and ",a("code",{children:"selected"})," attributes to the first option which contains your placeholder text."]}),a(A,{html:ZN,language:"html",caption:"Select Placeholder"}),a("h2",{children:"Option Groups"}),u("p",{children:["You can group options using the ",a("code",{children:"optgroup"})," element."]}),a(A,{html:QN,language:"html",caption:"Option Groups"})]}),JN=Object.freeze(Object.defineProperty({__proto__:null,default:XN},Symbol.toStringTag,{value:"Module"})),eI=`<style>
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
</form>`,tI=()=>u("div",{className:"prose",children:[a("h1",{children:"Form Styling"}),a("p",{}),a(A,{html:eI,language:"html",caption:"Form Styling",expand:!0})]}),nI=Object.freeze(Object.defineProperty({__proto__:null,default:tI},Symbol.toStringTag,{value:"Module"})),rI=`<input
  type="text" name="my-input"
  placeholder="Placeholder text"
/>
`,aI=`<input
  type="text" name="my-input"
  placeholder="Placeholder text"
  class="wide"
/>
`,oI=`<div class="grid-2 gap-4">
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
`,lI=`<div class="grid-3 gap-4">
  <input
    type="password" name="password"
    placeholder="Password"
    class="wide"
  />
  <input
    type="number" name="number"
    placeholder="Number"
    class="wide"
  />
  <input
    type="tel" name="tel"
    placeholder="Telephone"
    class="wide"
  />
  <input
    type="date" name="date"
    class="wide"
  />
  <input
    type="time" name="time"
    placeholder="Select a time"
    class="wide"
  />
  <input
    type="color" name="color"
    placeholder="Choose a color"
    class="wide"
  />
</div>
`,iI=()=>u("div",{className:"prose",children:[a("h1",{children:"Text Input"}),a("p",{children:"Text inputs are perhaps the most common kind of input."}),a(A,{html:rI,language:"html",caption:"Text Input"}),u("p",{children:["Add the ",a("code",{children:"wide"})," class to make it stretch to fill the container."]}),a(A,{html:aI,language:"html",caption:"Wide Text Input"}),u("p",{children:["You can use the ",a(Ee,{to:"/utilities/grid",text:"grid"})," utility classes to group inputs together on the same line."]}),a(A,{html:oI,language:"html",caption:"Text Grid"}),u("p",{children:["You can set the ",a("code",{children:"type"})," to one of the other text-based input types (e.g. ",a("code",{children:"password"}),", ",a("code",{children:"number"}),","," ",a("code",{children:"telephone"}),", ",a("code",{children:"date"}),", ",a("code",{children:"time"}),", etc). There's also some styling provided for the ",a("code",{children:"color"})," type although it's notoriously hard to style and the appearance can vary on different browsers, devices and operating systems."]}),a(A,{html:lI,language:"html",caption:"Other Input Types"})]}),sI=Object.freeze(Object.defineProperty({__proto__:null,default:iI},Symbol.toStringTag,{value:"Module"})),cI=`<textarea
  rows="5"
  placeholder="I like badgers because..."
/></textarea>
`,dI=`<textarea
  rows="5" class="wide"
  placeholder="I like badgers because..."
/></textarea>
`,uI=()=>u("div",{children:[a("h1",{children:"Text Area Input"}),u("p",{children:["Text area inputs are much like ",a(Ee,{to:"/form/text",text:"text inputs"}),"."]}),u("p",{children:["One thing to note (that always catches me out) - if you want placeholder text to appear then you have to make sure there is ",a("em",{children:"nothing"})," ","(not even a newline) between the opening and closing ",a("code",{children:"textarea"})," tags."]}),a(A,{html:cI,language:"html",caption:"Text Area Input",expand:!0}),u("p",{children:["Add the ",a("code",{children:"wide"})," class to make it stretch to fill the container."]}),a(A,{html:dI,language:"html",caption:"Wide Text Area Input",expand:!0})]}),hI=Object.freeze(Object.defineProperty({__proto__:null,default:uI},Symbol.toStringTag,{value:"Module"})),fI=e=>j.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},j.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),j.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),j.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),j.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),j.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),j.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),j.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),pI=()=>u("div",{className:"prose",children:[a("h1",{children:"What's Wrong With It?"}),a("p",{className:"intro wide",children:"There are many, many CSS toolkits and UI frameworks already out there to choose from. If you're looking for something that's stable, reliable, comprehensive and well-supported then this probably isn't for you."}),u(Xe,{children:[u("div",{children:[a("h2",{children:"Work in Progress"}),a("p",{children:"This is a work in progress.  It started out life as an ad-hoc collection of CSS classes that I copy and pasted between projects.  Then it became part of Bader UI, a collection of React components implementing some basic UI widgets.  Now it's being moved out into its own module which concentrates on just the CSS without any dependency on React."}),a("p",{children:"One of the reasons that I'm moving it into a new module is because it gives me the opportunity to break backwards compatibility.  There are some things that, given the chance to do again, I would do differently. This gives me that chance and hopefully I won't make too many bad decisions that I later come to regret.  But until I've had a chance to eat my own dog food and build a few sites with it, I can't predict what's going to work well and what isn't."}),a("p",{children:"I'm also migrating everything to use modern CSS techniques which are now well supported by browsers.  That means that a lot of things that were previously hard become much easier.  But different."}),a("p",{children:"As a result, this module is still in a state of flux.  If you build anything with it now then there's a good chance that something will break in the near future."}),a("h2",{children:"Some Assembly Required"}),a("p",{children:"If you have a good working knowledge of modern CSS and SASS then you should be able to easily adapt it to your needs.  Nearly everything is customisable, either through SASS variables, CSS custom properties, or by using the provided scripts to build your own toolkit."}),u("p",{children:["You don't need to buy in to the whole package.  As well as being customisable it's also modular.  With a small amount of effort you can configure it to include the bits your want and ignore the rest. Or you can browse the source code and borrow the ",a("i",{children:"ideas"})," that you think are useful."]}),a("p",{children:"Just remember that this is aimed more at people who already know how to build web sites and are familiar with CSS. If you're looking for a fully-featured, widely used and well supported UI toolkit that does everything for you then there are plenty of others to choose from."}),a("p",{children:"If you don't like the sound of that then these probably aren't the badgers you're looking for.  You can go about your business. Move along."})]}),u("div",{children:[a("h2",{children:"Opinionated and Selfish Software"}),u("p",{children:["This is based on my personal collection of CSS styles and utility classes that I use on a daily basis in my job building web sites for clients. It's Open Source and you're welcome to use it but be aware that it's something that I built for ",a("em",{children:"me"})," to help"," ",a("em",{children:"me"})," get my job done."]}),a("p",{children:"I didn't build it for you (unless you're one of my clients) and I don't really have the time or inclination to promote it, increase the user base or provide unpaid support for it.  It's not my intention for this to be the next great CSS toolkit - there are plenty of those already. My goal isn't to change the World, only to make it a slightly better place."}),a("p",{children:"So be warned that it does things the way I like to do them.  You may not agree with all my decisions, but that's fine.  They're my decisions to make, not yours.  It's free software (in both senses: free speech and free beer) and if you don't like it then you're entitled to a full refund of the price you paid."}),a("p",{children:"On the plus-side, the Badger-UI toolkit contains a lot of tried and tested techniques for managing web site styles that have been honed over nearly 30 years of experience.  It contains the features that I can't live without when I'm building a web site.  Of course, you may have different ideas about the best way to do it, but this is what works for me.  It's supposed to be a reasonable starting point not the final destination."}),a("div",{className:"text-center",children:a(fI,{style:{width:"12em",marginTop:"2rem"}})})]})]})]}),gI=Object.freeze(Object.defineProperty({__proto__:null,default:pI},Symbol.toStringTag,{value:"Module"})),mI=()=>u("div",{className:"prose",children:[a("h1",{children:"What's Good About It?"}),a("p",{className:"intro wide",children:"If you're wondering what makes Badger CSS better than all the other CSS frameworks and UI toolkits out there then the short and simple answer is that it isn't.  It's just another one to add to the pile."}),u(Xe,{children:[u("div",{children:[a("h2",{children:"A Solid Foundation"}),a("p",{children:"Badger CSS is a collection of tools and techniques that I've built up over many years (nearly 30) of building web sites.  It's what works for me and maybe it will work for you too.  But I'm not making any promises."}),a("p",{children:"It's supposed to be a starting point, not a destination.  If you're building a web site and you want a reasonable foundation to build your styles on then it might be better for you than a more fully-featured toolkit that has everything including the kitchen sink."}),a("h2",{children:"Small(ish) and Simple"}),a("p",{children:"The default Badger CSS stylesheet is around 15kb minimised and compressed (around 100kb uncompressed).  That includes all 16 color ranges which you probably aren't ever going to need in practice. If you define your own palette with a limited set of colors then you can reduce the size a fair bit."}),a("h2",{children:"Modern CSS"}),a("p",{children:"It is based on modern CSS techniques and works in all modern browsers. In particular it makes heavy use of CSS custom properties that you can easily change as required. Behind the scenes it is built using SASS (specifically SCSS) which gives you more opportunities for configuring and extending it."}),a("h2",{children:"Color Management"}),u("p",{children:["Badger CSS uses a novel approach to defining and selecting"," ",a(Ee,{to:"/colors/ranges",text:"color ranges"}),".  The color palette was created using ",a("a",{href:"https://abw.github.io/badger-color",children:"Badger Color"})," (which itself was created for this specific task) and you can use it to create your own custom palettes if necessary. The palette data that it generates can be automatically expanded out to SASS component files, ready to be used in Badger CSS."]}),u("p",{children:["You can easily change the hues of the standard palette to match your ",a(Ee,{to:"/colors/brand",text:"brand colors"}),".  It will automatically create greyscale color ranges based on your primary brand color."]}),u("p",{children:["The use of ",a(Ee,{to:"/colors/variables",text:"CSS custom properties"})," ","to define color ranges, and CSS class scopes to select them, makes it easy to create UI components that work automatically with any color range. It also makes it easy to define different color schemes for light and dark themes."]})]}),u("div",{children:[a("h2",{children:"Utility Classes"}),u("p",{children:["Badger CSS comes with a core set of"," ",a(Ee,{to:"/utilities",text:"utility classes"})," for ad-hoc styling. They are intentionally limited to the kind of things that I find myself using all the time.  If you prefer the approach of"," ",a("a",{href:"https://tailwindcss.com/",children:"Tailwind"})," that provides CSS classes for absolutely everything then you know where to find it."]}),u("p",{children:["I'm not knocking Tailwind, by the way.  CSS utility classes are an ",a("em",{children:"extremely"}),` useful set of tools to have in your toolkit. I just think they should be limited in their scope and not a replacement for writing "proper" CSS when it's more appropriate to do so.`]}),a("h2",{children:"Form Styling"}),u("p",{children:["Styling ",a(Ee,{to:"/forms",text:"forms"})," is not much fun. I have wasted many hours, days, even weeks of my life trying to get form styling just right and I never want to have to do it again."]}),u("p",{children:["If you've got better things to do than trying to figure out why your ",a("code",{children:"select"})," component is 1 pixel shorter than your text ",a("code",{children:"input"})," component then take a look at what Badger CSS has to offer.  It provides basic styles for all the standard form components and has smoothed over a lot of the problems so you don't have to worry too much about them.  Spend the time you save playing with your kids or flying a kite."]}),a("h2",{children:"UI Components"}),u("p",{children:["Badger CSS has styling for a limited set of UI components (at the time of writing it's ",a("em",{children:"very"})," limited, but more may be coming soon). It's not really supposed to be a complete UI toolkit (because the World already has enough of them), but rather to be a foundation on which UI toolkits can be built."]}),u("p",{children:["Experience has taught me that off-the-shelf UI components (even ones that I've written myself) often need a fair bit of tweaking to match the styling for a particular site.  Sometimes it's easier just to write them from scratch as they're needed.  CSS has come a long way since the days when we relied on toolkits like"," ",a("a",{href:"https://getbootstrap.com/",children:"Bootstrap"})," to provide a consistent cross-browser experience.  Hopefully I will never again have to go searching through the Bootstrap source to figure out how they worked around a particular problem with IE."]}),a("p",{children:"At the very least, I won't be adding many more UI components until a) I've made it easy to select only the components that you want for a particular site and b) when I've convinced myself that something can be added that's sufficiently generic to warrant inclusion.  Watch this space."})]})]})]}),vI=Object.freeze(Object.defineProperty({__proto__:null,default:mI},Symbol.toStringTag,{value:"Module"})),yI=`<link
  rel="stylesheet"
  href="https://unpkg.com/@abw/badger-css/dist/styles/badger.min.css"
/>`,bI=`## using npm
$ npm add -D @abw/badger-css

## using yarn
$ yarn add -D @abw/badger-css

## using pnpm
$ pnpm add -D @abw/badger-css`,wI="import '@abw/badger-css/styles/badger.min.css';",xI="@import '@abw/badger-css/styles/badger.scss';",CI=`$ git clone https://github.com/abw/badger-css.git
$ cd badger-css
$ sass styles/badger.scss > your-badger-file.css`,SI=()=>u("div",{className:"prose",children:[a("h1",{children:"Installation"}),a("h2",{children:"No Installation Required!"}),u(Xe,{children:[u("p",{children:["You don't need to install anything to get starting using Badger CSS in a website.  Simply add the following tag to the"," ",a("code",{children:"<head>"})," section of your web page."]}),a(Re,{code:yI,caption:"Unpkg Link",language:"html",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Adding to a Javascript Project"}),u(Xe,{children:[u("p",{children:["If you want to configure, modify or adapt Badger CSS then you should add ",a("code",{children:"@abw/badger-css"})," to your Javascript project using your favourite package manager.  In most cases you should be able to add it as a development dependency using the ",a("code",{children:"-D"})," option."]}),a(Re,{code:bI,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Importing the CSS"}),u(Xe,{children:[u("div",{children:[a("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script like so:"}),u("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",a("code",{children:"node_modules"})," directory."]})]}),a(Re,{code:wI,caption:"Importing CSS",language:"js",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Importing the SCSS"}),u(Xe,{children:[u("div",{children:[a("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components.  This gives you the flexibility to configure the default options, or to pick and choose which components you want to include."}),a("p",{children:"Add the following line to your main SCSS stylesheet source."})]}),a(Re,{code:xI,caption:"Importing SCSS",language:"scss",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Going it Alone"}),u(Xe,{children:[u("p",{children:["If you're not using Javascript but want to play with the SCSS source files then you can check out the project repository from Github and run ",a("code",{children:"sass"})," to compile the source files into CSS."]}),a(Re,{code:CI,caption:"CSS from SASS",language:"shell",className:"mar-b-8",expand:!0})]})]}),kI=Object.freeze(Object.defineProperty({__proto__:null,default:SI},Symbol.toStringTag,{value:"Module"})),_I=e=>j.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 717 337",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},j.createElement("path",{className:"white",d:"M248.362,204.8C251.303,208.841 251.506,216.92 246.886,220.486C247.235,215.811 245.076,210.416 243.385,207.987C242.142,206.2 237.32,201.909 232.525,201.457C236.319,199.212 245.27,200.55 248.362,204.8ZM380.931,288.851C382.012,292.919 365.895,290.457 365.767,303.096C365.703,309.466 368.575,313.608 364.949,314.116C360.977,314.673 360.493,310.692 359.8,305.449C358.316,294.227 366.194,290.723 373.729,288.466C380.03,286.58 380.512,287.273 380.931,288.851ZM250.509,198.166C250.116,197.944 249.715,197.73 249.306,197.524C237.097,191.351 222.986,194.646 217.814,204.876C213.744,212.926 216.415,222.888 223.688,229.775C220.646,228.505 217.677,226.862 214.911,224.779C198.663,212.542 195.441,190.333 199.289,185.248C202.588,180.888 226.299,177.823 242.548,190.06C245.688,192.424 248.324,195.199 250.509,198.166ZM234.492,31.758C231.75,33.423 225.901,22.543 215.941,24.48C210.088,25.619 206.755,23.124 210.523,20.119C221.225,11.585 239.546,28.689 234.492,31.758ZM99.149,58.412C89.72,51.898 79.11,48.569 67.051,51.951C58.397,54.378 52.734,60.065 49.994,67.45C48.707,67.555 47.4,67.691 46.084,67.853C38.149,68.832 29.859,70.741 23.646,72.288C42.126,47.476 64.861,38.817 87.003,38.714L88.566,38.707L88.864,37.173C90.304,29.757 86.13,22.597 75.216,17.044C99.723,11.821 129.948,17.277 146.178,26.501L148.305,27.709L148.955,25.351C149.908,21.892 149.675,13.343 143.798,5.723C174.533,11.177 197.842,21.068 216.166,33.985C250.062,62.777 267.98,100.361 283.213,136.181C299.907,175.44 313.396,212.581 341.026,233.82C341.522,234.342 342.023,234.861 342.528,235.377C350.993,244.039 366.478,256.93 385.23,273.49C387.358,275.369 389.327,277.224 391.08,279.038C386.966,279.245 381.675,280.641 374.911,282.18C352.689,287.237 351.849,297.009 354.41,312.963C355.723,321.141 359.376,324.914 364.644,326.161C344.448,331.711 334.138,335.299 309.216,330.594C270.323,323.25 233.474,308.826 222.734,303.773C222.54,303.387 222.214,303.065 221.786,302.881C207.397,296.693 197.713,288.82 193.624,279.767C195.586,278.724 197.158,277.535 198.531,276.583C199.395,275.985 199.61,274.797 199.011,273.933C198.412,273.069 197.225,272.854 196.361,273.453C193.368,275.527 189.319,279.035 181.419,278.358C180.371,278.268 179.448,279.046 179.359,280.093C179.269,281.14 180.046,282.063 181.094,282.153C184.73,282.464 187.673,282.036 190.117,281.255C194.043,289.991 202.664,297.858 215.527,304.192C190.321,313.397 168.064,307.288 148.128,295.655C126.82,283.221 108.129,264.526 91.308,250.982C77.307,239.708 64.463,232.065 52.581,233.695C45.172,234.711 38.017,239.243 31.166,248.886C20.017,224.385 34.815,199.803 49.449,184.213L50.995,182.566L49.11,181.321C34.813,171.879 18.601,177.687 7.799,189.755C6.995,180.056 11.532,165.892 18.973,152.99C26.481,139.972 37,128.18 48.427,123.711C118.961,110.252 153.156,169.713 188.827,221.409C209.775,251.767 256.49,287.586 345.223,316.241C340.436,301.054 342.628,293.783 346.067,286.802C324.7,276.815 298.269,260.277 280.877,228.797C233.283,142.653 212.43,81.347 143.665,64.082C131.685,61.074 116.053,57.87 99.149,58.412ZM99.066,72.542C97.614,80.151 74.887,58.073 70.407,69.969C62.107,92.007 54.173,79.428 56.142,73.447C66.246,42.754 100.4,65.551 99.066,72.542Z",style:{fill:"white"}}),j.createElement("path",{className:"black",d:"M48.845,71.376C48.085,71.452 47.319,71.538 46.55,71.633C36.384,72.888 25.625,75.704 19.567,77.251L14.706,78.493L17.519,74.338C36.933,45.669 61.411,35.483 85.316,34.929C85.679,28.465 80.142,22.804 68.715,18.305L63.513,16.258L68.883,14.704C94.004,7.433 126.953,12.429 145.602,21.872C145.715,17.476 143.99,10.119 137.262,4.358L132.173,0L138.793,1.03C164.858,5.083 185.888,12.137 203.193,21.438C203.366,21.5 203.539,21.563 203.712,21.626C205.114,17.121 209.176,13.252 216.656,13.924C236.466,15.704 240.708,25.62 241.751,43.904C266.891,65.236 284.026,95.363 297.467,125.916C309.511,153.29 318.589,181.001 327.822,202.999C331.443,211.626 335.086,219.374 338.942,225.872C340.965,228.196 343.066,230.479 345.252,232.715C353.685,241.344 369.071,254.139 387.751,270.635C391.391,273.849 394.564,277.022 397.067,280.061C399.65,281.424 401.411,284.251 402.569,289.316C402.766,289.952 402.91,290.575 403,291.183C403.044,291.476 403.078,291.773 403.104,292.073C403.406,293.909 403.652,295.979 403.849,298.307C404.631,307.557 401.813,319.773 387.422,323.48C384.617,324.202 381.912,324.872 379.338,325.409C375.566,326.623 372.295,327.675 372.296,327.675C350.779,335.844 336.841,339.686 308.509,334.336C267.627,326.617 228.986,311.137 219.844,306.606C192.192,317.895 167.885,311.593 146.209,298.945C124.732,286.413 105.872,267.6 88.919,253.949C82.285,248.607 75.954,244.066 69.867,241.062C64.049,238.191 58.481,236.73 53.099,237.468C45.892,238.456 39.128,243.397 32.519,253.689L30.774,256.406L29.24,253.565C15.116,227.399 29.491,200.652 45.081,183.337C31.813,176.104 17.177,183.299 8.174,195.3L5.878,198.362L4.821,194.683C1.901,184.524 6.568,166.875 15.674,151.087C21.122,141.64 28.135,132.887 35.912,126.766C24.827,130.039 12.898,135.014 0,141.953C13.007,107.592 30.082,86.63 48.343,74.289C48.468,73.299 48.636,72.327 48.845,71.376ZM248.362,204.8C245.27,200.55 236.319,199.212 232.525,201.457C237.32,201.909 242.142,206.2 243.385,207.987C245.076,210.416 247.235,215.811 246.886,220.486C251.506,216.92 251.303,208.841 248.362,204.8ZM380.931,288.851C380.512,287.273 380.03,286.58 373.729,288.466C366.194,290.723 358.316,294.227 359.8,305.449C360.493,310.692 360.977,314.673 364.949,314.116C368.575,313.608 365.703,309.466 365.767,303.096C365.895,290.457 382.012,292.919 380.931,288.851ZM250.509,198.166C248.324,195.199 245.688,192.424 242.548,190.06C226.299,177.823 202.588,180.888 199.289,185.248C195.441,190.333 198.663,212.542 214.911,224.779C217.677,226.862 220.646,228.505 223.688,229.775C216.415,222.888 213.744,212.926 217.814,204.876C222.986,194.646 237.097,191.351 249.306,197.524C249.715,197.73 250.116,197.944 250.509,198.166ZM234.492,31.758C239.546,28.689 221.225,11.585 210.523,20.119C206.755,23.124 210.088,25.619 215.941,24.48C225.901,22.543 231.75,33.423 234.492,31.758ZM99.149,58.412C116.053,57.87 131.685,61.074 143.665,64.082C212.43,81.347 233.283,142.653 280.877,228.797C298.269,260.277 324.7,276.815 346.067,286.802C342.628,293.783 340.436,301.054 345.223,316.241C256.49,287.586 209.775,251.767 188.827,221.409C153.156,169.713 118.961,110.252 48.427,123.711C37,128.18 26.481,139.972 18.973,152.99C11.532,165.892 6.995,180.056 7.799,189.755C18.601,177.687 34.813,171.879 49.11,181.321L50.995,182.566L49.449,184.213C34.815,199.803 20.017,224.385 31.166,248.886C38.017,239.243 45.172,234.711 52.581,233.695C64.463,232.065 77.307,239.708 91.308,250.982C108.129,264.526 126.82,283.221 148.128,295.655C168.064,307.288 190.321,313.397 215.527,304.192C202.664,297.858 194.043,289.991 190.117,281.255C187.673,282.036 184.73,282.464 181.094,282.153C180.046,282.063 179.269,281.14 179.359,280.093C179.448,279.046 180.371,278.268 181.419,278.358C189.319,279.035 193.368,275.527 196.361,273.453C197.225,272.854 198.412,273.069 199.011,273.933C199.61,274.797 199.395,275.985 198.531,276.583C197.158,277.535 195.586,278.724 193.624,279.767C197.713,288.82 207.397,296.693 221.786,302.881C222.214,303.065 222.54,303.387 222.734,303.773C233.474,308.826 270.323,323.25 309.216,330.594C334.138,335.299 344.448,331.711 364.644,326.161C359.376,324.914 355.723,321.141 354.41,312.963C351.849,297.009 352.689,287.237 374.911,282.18C381.675,280.641 386.966,279.245 391.08,279.038C389.327,277.224 387.358,275.369 385.23,273.49C366.478,256.93 350.993,244.039 342.528,235.377C342.023,234.861 341.522,234.342 341.026,233.82C313.396,212.581 299.907,175.44 283.213,136.181C267.98,100.361 250.062,62.777 216.166,33.985C197.842,21.068 174.533,11.177 143.798,5.723C149.675,13.343 149.908,21.892 148.955,25.351L148.305,27.709L146.178,26.501C129.948,17.277 99.723,11.821 75.216,17.044C86.13,22.597 90.304,29.757 88.864,37.173L88.566,38.707L87.003,38.714C64.861,38.817 42.126,47.476 23.646,72.288C29.859,70.741 38.149,68.832 46.084,67.853C47.4,67.691 48.707,67.555 49.994,67.45C52.734,60.065 58.397,54.378 67.051,51.951C79.11,48.569 89.72,51.898 99.149,58.412ZM99.066,72.542C100.4,65.551 66.246,42.754 56.142,73.447C54.173,79.428 62.107,92.007 70.407,69.969C74.887,58.073 97.614,80.151 99.066,72.542Z"}),j.createElement("path",{className:"badger",d:"M347.242,14.148C348.016,13.915 349.256,13.664 350.96,13.392C352.664,13.121 354.406,12.986 356.188,12.986C357.892,12.986 359.421,13.102 360.777,13.334C362.132,13.567 363.274,14.031 364.204,14.729C365.133,15.426 365.83,16.374 366.295,17.575C366.76,18.775 366.992,20.344 366.992,22.28L366.992,33.666C368.928,32.891 370.768,32.349 372.511,32.039C374.253,31.729 376.17,31.574 378.261,31.574C381.979,31.574 385.503,32.233 388.834,33.549C392.164,34.866 395.107,36.783 397.663,39.3C400.219,41.817 402.233,44.935 403.704,48.653C405.176,52.37 405.912,56.669 405.912,61.548C405.912,66.583 405.157,70.978 403.646,74.735C402.136,78.491 400.025,81.608 397.315,84.087C394.604,86.565 391.293,88.444 387.381,89.722C383.47,90.999 379.152,91.638 374.428,91.638C369.316,91.638 364.978,91.038 361.416,89.838C357.853,88.637 354.832,87.146 352.354,85.365C348.946,82.964 347.242,79.866 347.242,76.071L347.242,14.148ZM374.428,76.071C377.99,76.071 380.759,74.851 382.734,72.411C384.709,69.971 385.697,66.35 385.697,61.548C385.697,56.669 384.69,53.029 382.676,50.628C380.662,48.227 377.952,47.026 374.544,47.026C372.995,47.026 371.659,47.181 370.536,47.491C369.413,47.801 368.193,48.265 366.876,48.885L366.876,74.212C367.728,74.754 368.754,75.199 369.955,75.548C371.155,75.896 372.646,76.071 374.428,76.071ZM439.023,31.574C443.205,31.574 447.02,32 450.466,32.852C453.913,33.704 456.856,35.002 459.296,36.744C461.735,38.487 463.614,40.694 464.93,43.366C466.247,46.039 466.905,49.195 466.905,52.835L466.905,78.859C466.905,80.873 466.344,82.518 465.221,83.796C464.098,85.074 462.762,86.178 461.213,87.108C456.178,90.128 449.091,91.638 439.952,91.638C435.847,91.638 432.149,91.251 428.857,90.477C425.565,89.702 422.738,88.54 420.376,86.991C418.014,85.442 416.194,83.467 414.916,81.066C413.638,78.665 412.999,75.877 412.999,72.701C412.999,67.357 414.586,63.252 417.762,60.387C420.938,57.521 425.856,55.739 432.517,55.042L447.736,53.416L447.736,52.603C447.736,50.356 446.748,48.749 444.773,47.781C442.798,46.813 439.952,46.329 436.234,46.329C433.291,46.329 430.425,46.639 427.637,47.258C424.849,47.878 422.332,48.653 420.086,49.582C419.079,48.885 418.227,47.82 417.53,46.387C416.833,44.954 416.484,43.463 416.484,41.914C416.484,39.9 416.968,38.293 417.936,37.093C418.904,35.892 420.395,34.866 422.409,34.014C424.655,33.162 427.308,32.542 430.367,32.155C433.427,31.768 436.312,31.574 439.023,31.574ZM439.952,77.232C441.269,77.232 442.721,77.097 444.309,76.826C445.896,76.555 447.078,76.187 447.852,75.722L447.852,66.428L439.487,67.125C437.319,67.28 435.537,67.744 434.143,68.519C432.749,69.294 432.052,70.455 432.052,72.004C432.052,73.553 432.652,74.812 433.853,75.78C435.053,76.748 437.086,77.232 439.952,77.232ZM476.548,61.548C476.548,56.436 477.323,52.002 478.872,48.246C480.421,44.489 482.57,41.372 485.32,38.894C488.069,36.415 491.283,34.576 494.962,33.375C498.641,32.175 502.611,31.574 506.871,31.574C508.42,31.574 509.93,31.71 511.402,31.981C512.873,32.252 514.074,32.581 515.003,32.968L515.003,14.148C515.778,13.915 517.017,13.664 518.721,13.392C520.425,13.121 522.167,12.986 523.949,12.986C525.653,12.986 527.182,13.102 528.538,13.334C529.893,13.567 531.036,14.031 531.965,14.729C532.895,15.426 533.592,16.374 534.056,17.575C534.521,18.775 534.753,20.344 534.753,22.28L534.753,77.349C534.753,80.989 533.049,83.893 529.642,86.062C527.395,87.533 524.491,88.831 520.928,89.954C517.365,91.077 513.26,91.638 508.613,91.638C503.579,91.638 499.067,90.941 495.079,89.547C491.09,88.153 487.721,86.139 484.971,83.506C482.222,80.873 480.13,77.716 478.697,74.037C477.265,70.358 476.548,66.195 476.548,61.548ZM509.543,47.026C505.36,47.026 502.146,48.227 499.9,50.628C497.654,53.029 496.531,56.669 496.531,61.548C496.531,66.35 497.576,69.971 499.668,72.411C501.759,74.851 504.779,76.071 508.73,76.071C510.124,76.071 511.382,75.858 512.505,75.432C513.628,75.006 514.5,74.522 515.119,73.979L515.119,48.42C513.57,47.491 511.711,47.026 509.543,47.026ZM574.603,31.574C579.017,31.574 583.025,32.136 586.627,33.259C590.228,34.382 593.268,35.834 595.747,37.616C597.296,38.7 598.516,39.9 599.407,41.217C600.297,42.534 600.743,44.238 600.743,46.329L600.743,86.991C600.743,91.096 599.968,94.64 598.419,97.622C596.87,100.604 594.759,103.082 592.087,105.057C589.415,107.032 586.278,108.484 582.677,109.414C579.075,110.343 575.222,110.808 571.117,110.808C564.069,110.808 558.531,109.859 554.504,107.961C550.476,106.064 548.462,102.985 548.462,98.725C548.462,96.944 548.83,95.376 549.566,94.02C550.302,92.665 551.135,91.638 552.064,90.941C554.31,92.181 556.847,93.226 559.674,94.078C562.501,94.93 565.424,95.356 568.445,95.356C572.627,95.356 575.958,94.659 578.436,93.265C580.915,91.871 582.154,89.625 582.154,86.527L582.154,84.668C578.979,86.062 575.106,86.759 570.536,86.759C567.051,86.759 563.74,86.236 560.603,85.191C557.466,84.145 554.717,82.518 552.354,80.311C549.992,78.104 548.095,75.257 546.662,71.772C545.229,68.287 544.512,64.143 544.512,59.341C544.512,54.616 545.268,50.511 546.778,47.026C548.288,43.541 550.379,40.656 553.051,38.371C555.724,36.086 558.899,34.382 562.578,33.259C566.257,32.136 570.265,31.574 574.603,31.574ZM581.806,48.42C581.263,48.11 580.47,47.801 579.424,47.491C578.378,47.181 577.081,47.026 575.532,47.026C571.737,47.026 568.89,48.091 566.993,50.221C565.095,52.351 564.146,55.391 564.146,59.341C564.146,63.833 565.095,67.067 566.993,69.042C568.89,71.017 571.311,72.004 574.254,72.004C577.43,72.004 579.947,71.269 581.806,69.797L581.806,48.42ZM642.799,91.638C638.229,91.638 633.989,90.999 630.078,89.722C626.166,88.444 622.758,86.527 619.854,83.971C616.949,81.415 614.665,78.201 612.999,74.328C611.334,70.455 610.502,65.924 610.502,60.735C610.502,55.623 611.334,51.228 612.999,47.549C614.665,43.87 616.853,40.849 619.563,38.487C622.274,36.125 625.372,34.382 628.858,33.259C632.343,32.136 635.906,31.574 639.546,31.574C643.651,31.574 647.388,32.194 650.757,33.433C654.126,34.672 657.031,36.376 659.471,38.545C661.91,40.714 663.808,43.308 665.163,46.329C666.519,49.35 667.197,52.641 667.197,56.204C667.197,58.837 666.461,60.851 664.989,62.245C663.518,63.64 661.465,64.53 658.832,64.917L630.136,69.216C630.988,71.772 632.73,73.689 635.364,74.967C637.997,76.245 641.018,76.884 644.426,76.884C647.601,76.884 650.602,76.477 653.429,75.664C656.256,74.851 658.561,73.902 660.342,72.818C661.581,73.592 662.627,74.676 663.479,76.071C664.331,77.465 664.757,78.936 664.757,80.485C664.757,83.971 663.13,86.565 659.877,88.269C657.399,89.586 654.611,90.477 651.512,90.941C648.414,91.406 645.51,91.638 642.799,91.638ZM639.546,45.98C637.687,45.98 636.08,46.29 634.725,46.91C633.369,47.529 632.266,48.323 631.414,49.292C630.562,50.26 629.923,51.344 629.497,52.545C629.071,53.745 628.819,54.965 628.742,56.204L648.608,52.951C648.376,51.402 647.524,49.853 646.052,48.304C644.581,46.755 642.412,45.98 639.546,45.98ZM696.473,89.663C695.699,89.896 694.479,90.128 692.814,90.36C691.149,90.593 689.425,90.709 687.644,90.709C685.94,90.709 684.41,90.593 683.055,90.36C681.699,90.128 680.557,89.663 679.628,88.966C678.698,88.269 677.982,87.321 677.478,86.12C676.975,84.919 676.723,83.351 676.723,81.415L676.723,46.561C676.723,44.78 677.052,43.25 677.711,41.972C678.369,40.694 679.318,39.552 680.557,38.545C681.796,37.538 683.326,36.628 685.146,35.815C686.966,35.002 688.922,34.285 691.013,33.666C693.104,33.046 695.273,32.562 697.519,32.213C699.765,31.865 702.011,31.691 704.257,31.691C707.975,31.691 710.918,32.407 713.087,33.84C715.256,35.273 716.34,37.616 716.34,40.869C716.34,41.953 716.185,43.018 715.875,44.063C715.565,45.109 715.178,46.058 714.713,46.91C713.087,46.91 711.422,46.987 709.718,47.142C708.014,47.297 706.349,47.529 704.722,47.839C703.096,48.149 701.566,48.478 700.133,48.827C698.7,49.175 697.48,49.582 696.473,50.047L696.473,89.663Z"}),j.createElement("path",{className:"css",d:"M586.337,162.306C584.4,162.306 582.561,162.616 580.818,163.236C579.075,163.855 577.565,164.765 576.287,165.966C575.009,167.166 573.983,168.657 573.208,170.439C572.434,172.22 572.047,174.311 572.047,176.712C572.047,181.514 573.421,185.116 576.171,187.517C578.92,189.918 582.27,191.119 586.22,191.119C588.544,191.119 590.558,190.847 592.262,190.305C593.966,189.763 595.476,189.182 596.793,188.563C598.342,189.647 599.503,190.828 600.278,192.106C601.052,193.384 601.44,194.914 601.44,196.695C601.44,199.871 599.929,202.33 596.909,204.072C593.888,205.815 589.706,206.686 584.361,206.686C579.482,206.686 575.067,205.97 571.117,204.537C567.167,203.104 563.779,201.09 560.952,198.496C558.125,195.901 555.937,192.784 554.388,189.143C552.838,185.503 552.064,181.476 552.064,177.061C552.064,171.949 552.897,167.476 554.562,163.642C556.227,159.809 558.492,156.652 561.358,154.174C564.224,151.695 567.535,149.837 571.291,148.597C575.048,147.358 579.017,146.738 583.2,146.738C588.776,146.738 593.075,147.745 596.095,149.759C599.116,151.773 600.626,154.367 600.626,157.543C600.626,159.015 600.278,160.389 599.581,161.667C598.884,162.945 598.071,164.049 597.141,164.978C595.824,164.359 594.237,163.759 592.378,163.178C590.519,162.597 588.505,162.306 586.337,162.306ZM657.786,188.098C657.786,193.984 655.579,198.593 651.164,201.923C646.749,205.254 640.243,206.919 631.646,206.919C628.393,206.919 625.372,206.686 622.584,206.222C619.796,205.757 617.414,205.041 615.439,204.072C613.464,203.104 611.915,201.884 610.792,200.413C609.669,198.941 609.107,197.199 609.107,195.185C609.107,193.326 609.495,191.758 610.269,190.48C611.044,189.202 611.973,188.137 613.057,187.285C615.304,188.524 617.879,189.628 620.783,190.596C623.688,191.564 627.038,192.048 630.833,192.048C633.234,192.048 635.073,191.699 636.351,191.002C637.629,190.305 638.268,189.376 638.268,188.214C638.268,187.13 637.803,186.278 636.874,185.658C635.945,185.039 634.396,184.535 632.227,184.148L628.742,183.451C622.003,182.134 616.988,180.062 613.696,177.235C610.405,174.408 608.759,170.361 608.759,165.095C608.759,162.229 609.379,159.634 610.618,157.311C611.857,154.987 613.6,153.051 615.846,151.502C618.092,149.953 620.783,148.752 623.92,147.9C627.057,147.048 630.523,146.622 634.318,146.622C637.184,146.622 639.875,146.835 642.392,147.261C644.91,147.687 647.098,148.326 648.957,149.178C650.815,150.03 652.287,151.134 653.371,152.489C654.456,153.845 654.998,155.452 654.998,157.311C654.998,159.092 654.669,160.622 654.01,161.9C653.352,163.178 652.519,164.243 651.512,165.095C650.893,164.707 649.963,164.301 648.724,163.875C647.485,163.449 646.13,163.061 644.658,162.713C643.186,162.364 641.695,162.074 640.185,161.842C638.675,161.609 637.3,161.493 636.061,161.493C633.505,161.493 631.53,161.784 630.136,162.364C628.742,162.945 628.044,163.855 628.044,165.095C628.044,165.947 628.432,166.644 629.206,167.186C629.981,167.728 631.452,168.231 633.621,168.696L637.223,169.509C644.658,171.213 649.944,173.556 653.081,176.538C656.218,179.52 657.786,183.373 657.786,188.098ZM714.946,188.098C714.946,193.984 712.738,198.593 708.324,201.923C703.909,205.254 697.403,206.919 688.806,206.919C685.553,206.919 682.532,206.686 679.744,206.222C676.955,205.757 674.574,205.041 672.599,204.072C670.624,203.104 669.075,201.884 667.952,200.413C666.829,198.941 666.267,197.199 666.267,195.185C666.267,193.326 666.654,191.758 667.429,190.48C668.203,189.202 669.133,188.137 670.217,187.285C672.463,188.524 675.039,189.628 677.943,190.596C680.847,191.564 684.197,192.048 687.992,192.048C690.393,192.048 692.233,191.699 693.511,191.002C694.789,190.305 695.428,189.376 695.428,188.214C695.428,187.13 694.963,186.278 694.034,185.658C693.104,185.039 691.555,184.535 689.387,184.148L685.901,183.451C679.163,182.134 674.148,180.062 670.856,177.235C667.564,174.408 665.919,170.361 665.919,165.095C665.919,162.229 666.538,159.634 667.777,157.311C669.017,154.987 670.759,153.051 673.005,151.502C675.252,149.953 677.943,148.752 681.08,147.9C684.217,147.048 687.683,146.622 691.478,146.622C694.343,146.622 697.035,146.835 699.552,147.261C702.069,147.687 704.257,148.326 706.116,149.178C707.975,150.03 709.447,151.134 710.531,152.489C711.615,153.845 712.157,155.452 712.157,157.311C712.157,159.092 711.828,160.622 711.17,161.9C710.512,163.178 709.679,164.243 708.672,165.095C708.053,164.707 707.123,164.301 705.884,163.875C704.645,163.449 703.289,163.061 701.818,162.713C700.346,162.364 698.855,162.074 697.345,161.842C695.834,161.609 694.46,161.493 693.22,161.493C690.665,161.493 688.689,161.784 687.295,162.364C685.901,162.945 685.204,163.855 685.204,165.095C685.204,165.947 685.591,166.644 686.366,167.186C687.14,167.728 688.612,168.231 690.781,168.696L694.382,169.509C701.818,171.213 707.104,173.556 710.241,176.538C713.377,179.52 714.946,183.373 714.946,188.098Z"})),TI=()=>a("div",{children:u("div",{className:"mobile block-center pad-t-8",children:[a(_I,{className:"badger-css"}),a("h1",{className:"intro mar-t-8",children:"Modern, minimal CSS presets"}),u("p",{children:["You've probably heard of CSS ",a("b",{children:"reset"})," stylesheets that provide sensible defaults for HTML elements to smooth out some of the inconsistencies between browsers.  And no doubt you're aware of the plethora of fully-featured CSS ",a("b",{children:"toolkits"})," that implement all manner of styles for UI components."]}),u("p",{children:["Badger CSS sits somewhere between the two.  It provides some sensible"," ",a("b",{children:"presets"})," for HTML elements that you can use out of the box and expect to get reasonable results.  It's highly configurable and is really designed to be a starting point for building your own CSS stylesheets, design systems and UI toolkits."]}),u("div",{className:"grid-2 gap-2",children:[a(Ee,{to:"demo",text:"Demo",className:"brand button Xbdr-tl-4"}),a(Ee,{to:"getting-started/installation",text:"Getting Started",className:"brand button Xbdr-tr-4"}),a(Ee,{to:"getting-started/good",text:"What's Good?",className:"brand button Xbdr-bl-4"}),a(Ee,{to:"getting-started/bad",text:"What's Bad?",className:"brand button Xbdr-br-4"})]})]})}),LI=Object.freeze(Object.defineProperty({__proto__:null,default:TI},Symbol.toStringTag,{value:"Module"})),$I=`<div class="block-left width-12rem border pad-2">
  Block left
</div>
<div class="block-center width-12rem border pad-2 mar-t-4">
  Block center
</div>
<div class="block-right width-12rem border pad-2 mar-t-4">
  Block right
</div>
`,EI=`<div class="text-left border pad-2 mar-b-2">
  Text on the left
</div>
<div class="text-center border pad-2 mar-b-2">
  Text in the center
</div>
<div class="text-right border pad-2">
  Text on the right
</div>`,NI=`<div class="text-right border pad-4">
  Text on the right
  <div class="text-left border pad-2 mar-v-2">
    Text on the left
  </div>
  Text on the right
</div>`,II=()=>u("div",{className:"prose",children:[a("h1",{children:"Alignment"}),a("h2",{children:"Text Alignment"}),u("p",{children:["Add the ",a("code",{children:"text-left"}),", ",a("code",{children:"text-center"})," and"," ",a("code",{children:"text-right"})," CSS classes to set the text alignment."]}),a(A,{html:EI,caption:"Text Alignment",expand:!0}),u("p",{children:["Text is aligned left by default making the ",a("code",{children:"text-left"})," ","class ",a("em",{children:"mostly"})," redundant.  However it can be useful to reset the alignment to the left for a block that would otherwise be aligned centrally or to the right"]}),a(A,{html:NI,caption:"Text Left",expand:!0}),a("h2",{children:"Block Alignment"}),u("p",{children:["Add the ",a("code",{children:"block-left"}),", ",a("code",{children:"block-center"})," and"," ",a("code",{children:"block-right"})," CSS classes to align a block to the left, in the center, or on the right, respectively."]}),u("p",{children:["You'll need to set a block width to stop it from expanding to fill the full width of the parent element.  You can do that using one of the"," ",a(Ee,{to:"/utilities/widths",text:"width-*"})," utility classes."]}),a(A,{html:$I,caption:"Block Alignment",expand:!0})]}),MI=Object.freeze(Object.defineProperty({__proto__:null,default:II},Symbol.toStringTag,{value:"Module"})),RI=`<div class="border pad-4">
  This element has a border.
</div>
`,PI=`<div class="grid-1 gap-2">
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
</div>`,AI=`<div class="grid-2 gap-2">
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
`,FI=`<div class="border pad-4 mar-b-2">
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
`,OI=`<div class="grid-3 gap-4 pad-t-2">
  <button class="brand solid">default</button>
  <button class="brand solid bdr-0">bdr-0</button>
  <button class="brand solid square">square</button>
</div>
<div class="grid-3 gap-4 pad-t-2">
  <input type="text" value="default">
  <input type="text" value="bdr-0" class="bdr-0">
  <input type="text" value="square" class="square">
</div>
`,DI=`<div class="bdr-6 surface-1 pad-2 border grid-1 gap-2">
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
</div>`,BI=`<style>
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
`,jI=`// define your own $border-width-values...
$border-width-values: 1, 2, 3, 5, 8, 13, 21, 34;
// ...and/or set the $border-width-prefix...
$border-width-prefix: 'br-wd';

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,zI=`// define your own $border-radius-values...
$border-radius-values: 1, 2, 3, 5, 8, 13, 21, 34;
// ...and/or set the $border-width-prefix...
$border-radius-prefix: 'br-rd';

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,UI=`<div class="grid-1 gap-4">
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
</div>`,WI=({properties:e})=>u("table",{className:"brand celled striped properties wide",children:[a("thead",{children:u("tr",{children:[a("th",{children:"Property"}),a("th",{children:"Default"}),a("th",{children:"Description"})]})}),a("tbody",{children:e.map(t=>u("tr",{children:[a("td",{className:"key nowrap",children:a("code",{children:t[0]})}),a("td",{className:"nowrap",children:t[1]}),a("td",{children:t[2]})]},t[0]))})]}),HI=({sets:e})=>a("div",{className:`grid-${e.length} gap-8 stack-desktop mar-b-8`,children:e.map(t=>u("div",{children:[a("h4",{className:"mar-b-2",children:t.title}),a(WI,{properties:t.properties}),!!t.notes&&a("div",{className:"smallish info alert",children:t.notes})]},t.title))}),VI=()=>u("div",{className:"prose",children:[a("h1",{children:"Borders"}),a("h2",{children:"Border Class"}),u("p",{children:["Add the ",a("code",{children:"border"})," CSS class to an element to give it a border."]}),a(A,{html:RI,caption:"Border",expand:!0}),a("h2",{children:"Border Width"}),u("p",{children:["Add the ",a("code",{children:"bdw-N"})," CSS class to set the border width, where"," ",a("code",{children:"N"})," is in pixel units."]}),a(A,{html:PI,caption:"Border Width",expand:!0}),u("div",{className:"grid-2 gap-8 stack-desktop",children:[u("div",{children:[u("p",{children:["The pre-defined values for ",a("code",{children:"N"})," are"," ",a("code",{children:"0"}),", ",a("code",{children:"1"}),", ",a("code",{children:"2"}),", ",a("code",{children:"3"}),","," ",a("code",{children:"4"}),", ",a("code",{children:"5"}),", ",a("code",{children:"6"}),", ",a("code",{children:"8"})," and"," ",a("code",{children:"10"}),"."]}),u("p",{children:["You can set the ",a("code",{children:"$border-width-values"})," SCSS variable if you want to define a different set of values. You can also use the ",a("code",{children:"$border-width-prefix"})," to define a different prefix for the border width classes if you don't like ",a("code",{children:"bdw"}),"."]}),u("p",{children:["In the example shown here the generated CSS classes would be"," ",a("code",{children:"br-wd-1"}),", ",a("code",{children:"br-wd-2"}),","," ",a("code",{children:"br-wd-3"}),", ",a("code",{children:"br-wd-5"})," and so on."]})]}),a(Re,{code:jI,caption:"Custom Border Widths",language:"scss",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Border Color"}),u("p",{children:["Add the ",a("code",{children:"bdc-N"})," CSS class to set the border color, where"," ",a("code",{children:"N"})," is a color stop (0, 5, 10, etc) for the current color range."]}),a(A,{html:AI,caption:"Border Color"}),a("h2",{children:"Border Radius"}),u("p",{children:["Add the ",a("code",{children:"bdr-N"})," classes to set the radius of borders. The ",a("code",{children:"-N"})," multiplier is a multiple of the base unit radius (0.25rem by default)."]}),a(A,{html:FI,caption:"Border Radius",expand:!0}),u("p",{children:["The ",a("code",{children:"bdr-0"})," class can be used to ",a("i",{children:"explicitly"})," set the border radius to 0. The ",a("code",{children:"square"})," class is an alias for"," ",a("code",{children:"bdr-0"})," with the added benefit of having the"," ",a("code",{children:"!important"})," flag set for when you really need to drive the point home."]}),a("p",{children:"They can be used to remove the corner radius from components which have them by default, like buttons and form fields."}),a(A,{html:OI,caption:"Square Corners",expand:!0}),u("div",{className:"grid-2 gap-8 stack-desktop",children:[u("div",{children:[u("p",{children:["The pre-defined values for ",a("code",{children:"N"})," are"," ",a("code",{children:"0"}),", ",a("code",{children:"1"}),", ",a("code",{children:"2"}),", ",a("code",{children:"3"}),","," ",a("code",{children:"4"}),", ",a("code",{children:"5"}),", ",a("code",{children:"6"}),", ",a("code",{children:"8"})," and"," ",a("code",{children:"10"}),"."]}),u("p",{children:["You can set the ",a("code",{children:"$border-radius-values"})," SCSS variable if you want to define a different set of values. You can also use the ",a("code",{children:"$border-radius-prefix"})," to define a different prefix for the border radius classes if you don't like ",a("code",{children:"bdr"}),"."]}),u("p",{children:["In the example shown here the generated CSS classes would be"," ",a("code",{children:"br-rd-1"}),", ",a("code",{children:"br-rd-2"}),","," ",a("code",{children:"br-rd-3"}),", ",a("code",{children:"br-rd-5"})," and so on."]})]}),a(Re,{code:zI,caption:"Custom Border Radius",language:"scss",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Border Radius Corners"}),a("p",{children:"You can independently set the radius for different corners using these classes."}),u("div",{className:"grid-2 gap-8 stack-desktop",children:[u("table",{className:"brand border lined striped mar-b-8",children:[a("thead",{children:u("tr",{children:[a("th",{children:"Class"}),a("th",{children:"Description"})]})}),u("tbody",{children:[u("tr",{children:[a("td",{children:a("code",{children:"bdr-t-N"})}),a("td",{children:"Top left and top right corner radius"})]}),u("tr",{children:[a("td",{children:a("code",{children:"bdr-b-N"})}),a("td",{children:"Bottom left and bottom right corner radius"})]}),u("tr",{children:[a("td",{children:a("code",{children:"bdr-l-N"})}),a("td",{children:"Top left and bottom left corner radius"})]}),u("tr",{children:[a("td",{children:a("code",{children:"bdr-r-N"})}),a("td",{children:"Top right and bottom right corner radius"})]}),u("tr",{children:[a("td",{children:a("code",{children:"bdr-tl-N"})}),a("td",{children:"Top left corner radius"})]}),u("tr",{children:[a("td",{children:a("code",{children:"bdr-tr-N"})}),a("td",{children:"Top right corner radius"})]}),u("tr",{children:[a("td",{children:a("code",{children:"bdr-bl-N"})}),a("td",{children:"Bottom left corner radius"})]}),u("tr",{children:[a("td",{children:a("code",{children:"bdr-br-N"})}),a("td",{children:"Bottom right corner radius"})]})]})]}),a("div",{children:u(oi,{children:["If you set a custom ",a("code",{children:"$border-radius-prefix"})," as shown above then your CSS classes will start with your chosen prefix instead of ",a("code",{children:"bdr"})," as shown here."]})})]}),a(A,{html:DI,caption:"Border Radius Corners",expand:!0}),a("h2",{children:"No Border Required!"}),u("p",{children:["You don't need to have a border displayed to set the border radius. The ",a("code",{children:"bdr-N"})," classes can be used to set the border radius on various components."]}),a(A,{html:UI,caption:"Radius Components",expand:!0}),a("h2",{children:"Border Properties"}),a("p",{children:"The following properties are used to define the border style."}),a(HI,{sets:[{title:"Defaults",properties:[["--border-width",a("code",{children:"1px"},"1px"),"Border width"],["--border-style",a("code",{children:"solid"},"solid"),u("span",{children:["Border style: ",a("code",{children:"solid"}),", ",a("code",{children:"dotted"}),", ",a("code",{children:"dashed"}),", etc."]},"desc")],["--border-radius",a("code",{children:"var(--unit-radius)"},"radius"),"Border radius"],["--border-color",a("code",{children:"var(--color-75)"},"color"),"Border color from current color range"]]},{title:"Dark Theme",properties:[["--border-color",a("code",{children:"var(--color-25)"},"color"),"Border color from current color range"]]}]}),a("h2",{children:"Setting Custom Properties"}),a(A,{html:BI,caption:"Custom Border Style",expand:!0})]}),GI=Object.freeze(Object.defineProperty({__proto__:null,default:VI},Symbol.toStringTag,{value:"Module"})),YI=`<div class="inline border pad-2">
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
`,ZI=()=>u("div",{className:"prose",children:[a("h1",{children:"Display"}),a("h2",{children:"Display Modes"}),u("p",{children:["The ",a("code",{children:"inline"}),", ",a("code",{children:"block"})," and"," ",a("code",{children:"inline-block"})," CSS classes can be used to set the"," ",a("code",{children:"display"})," mode.   These are useful when you have an element that would normally have one display type that you want displayed in a different way."]}),u("p",{children:["See the"," ",a(Ee,{to:"/utilities/flexbox",text:"flexbox"})," and"," ",a(Ee,{to:"/utilities/grid",text:"grid"})," pages for information about using flex and grid display modes."]}),a(A,{html:YI,caption:"Display Modes",expand:!0})]}),qI=Object.freeze(Object.defineProperty({__proto__:null,default:ZI},Symbol.toStringTag,{value:"Module"})),QI=`<div class="flex">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>`,KI=`<div class="flex start">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,XI=`<div class="flex center">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,JI=`<div class="flex end">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,eM=`<div class="flex baseline">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,tM=`<div class="flex start gap-4">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,nM=`<div class="flex space">
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
`,rM=`<div class="flex evenly">
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
`,aM=()=>u("div",{className:"prose",children:[a("h1",{children:"Flexbox"}),a("h2",{children:"Flexbox Classes"}),u("p",{children:["Use the ",a("code",{children:"flex"})," CSS class to set the ",a("code",{children:"display"})," ","mode to ",a("code",{children:"flex"}),".  The default alignment mode"," ","(i.e. the ",a("code",{children:"align-items"})," CSS property) is ",a("code",{children:"stretch"}),"."]}),a(A,{html:QI,caption:".flex",expand:!0}),a("h2",{children:"Flexbox Alignment"}),u("p",{children:["Add the ",a("code",{children:"start"})," class to align the items to the start."]}),a(A,{html:KI,caption:".flex.start",expand:!0}),u("p",{children:["Add the ",a("code",{children:"center"})," class to align the items to the center."]}),a(A,{html:XI,caption:".flex.center",expand:!0}),u("p",{children:["Add the ",a("code",{children:"baseline"})," class to align the items to the text baseline."]}),a(A,{html:eM,caption:".flex.baseline",expand:!0}),u("p",{children:["Add the ",a("code",{children:"end"})," class to align the items to the end."]}),a(A,{html:JI,caption:".flex.end",expand:!0}),a("h2",{children:"Flexbox Spacing"}),u("p",{children:["The ",a("code",{children:"gap-N"})," classes can be used to add a gap between successive elements.  Here ",a("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit (",a("code",{children:"0.25rem"})," by default)."]}),a(A,{html:tM,caption:".flex.gap-4",expand:!0}),u("p",{children:["Add the ",a("code",{children:"space"})," class to space the items as much as possible. This is equivalent to setting the ",a("code",{children:"justify-content"})," CSS property to ",a("code",{children:"space-between"}),"."]}),a(A,{html:nM,caption:".flex.space",expand:!0}),u("p",{children:["Add the ",a("code",{children:"evenly"})," class to divide the space evenly between and around the items.  This is equivalent to setting the"," ",a("code",{children:"justify-content"})," CSS property to ",a("code",{children:"space-evenly"}),"."]}),a(A,{html:rM,caption:".flex.evenly",expand:!0})]}),oM=Object.freeze(Object.defineProperty({__proto__:null,default:aM},Symbol.toStringTag,{value:"Module"})),lM=`<div class="italic larger">
  Italic
</div>
<div class="underline larger">
  Underline
</div>
<div class="strike larger">
  Strike
</div>
`,iM=()=>u("div",{className:"prose",children:[a("h1",{children:"Font Styles"}),a("p",{children:"The following classes are defined for common font styles."}),a(A,{html:lM,caption:"Font Styles",expand:!0})]}),sM=Object.freeze(Object.defineProperty({__proto__:null,default:iM},Symbol.toStringTag,{value:"Module"})),cM=`<div class="weight-thin larger">
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
</div>`,dM=`<div class="weight-100 larger">
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
</div>`,uM=`<div class="thin larger">
  Thin
</div>
<div class="bold larger">
  Bold
</div>
<div class="thick larger">
  Thick
</div>
`,hM=`// define your own font weights...
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
`,fM=()=>u("div",{className:"prose",children:[a("h1",{children:"Font Weights"}),a("h2",{children:"Weight Names"}),u(Xe,{children:[u("p",{children:["The ",a("code",{children:"weight-<name>"})," classes can be used to set the font weight."]}),u("p",{children:["The values for ",a("code",{children:"<name>"})," can be",a("code",{children:"thin"}),", ",a("code",{children:"extra-light"}),", ",a("code",{children:"light"}),","," ",a("code",{children:"regular"}),", ",a("code",{children:"medium"}),", ",a("code",{children:"semi-bold"}),","," ",a("code",{children:"bold"}),", ",a("code",{children:"extra-bold"})," or ",a("code",{children:"black"}),"."]})]}),a(A,{html:cM,caption:"Weight Names",expand:!0}),a("h2",{children:"Weight Numbers"}),u(Xe,{children:[a("p",{children:"Alternately you can use the corresponding weight numbers."}),u("p",{children:["Those numbers can be"," ",a("code",{children:"100"}),", ",a("code",{children:"200"}),", ",a("code",{children:"300"}),","," ",a("code",{children:"400"}),", ",a("code",{children:"500"}),", ",a("code",{children:"600"}),","," ",a("code",{children:"700"}),", ",a("code",{children:"800"})," or ",a("code",{children:"900"}),"."]})]}),a(A,{html:dM,caption:"Weight Numbers",expand:!0}),a("h2",{children:"Weight Aliases"}),u("p",{children:["There are some short-cut aliases for the common cases.  Note that we use ",a("code",{children:"thick"})," rather than ",a("code",{children:"black"})," to avoid any confusion with the color black."]}),a(A,{html:uM,caption:"Weight Aliases",expand:!0}),a("h2",{children:"Custom Weights"}),a(Xe,{children:u("p",{children:["You can set the ",a("code",{children:"$font-weights"})," SASS variable if you want to define a different set of font weights."]})}),a(Re,{code:hM,caption:"Font Weights",language:"scss",className:"mar-b-8",expand:!0})]}),pM=Object.freeze(Object.defineProperty({__proto__:null,default:fM},Symbol.toStringTag,{value:"Module"})),gM=`<div class="large">
  <p class="font-sans">Sans-serif Font</p>
  <p class="font-serif">Serif Font</p>
  <p class="font-system">System Font</p>
  <p class="font-mono">Mono Font</p>
</div>
`,mM=`// redefine any of the following fonts to taste...
$font-sans:   'Open Sans', Helvetica, sans-serif;
$font-serif:  'Times New Roman', Times, Baskerville, Georgia, serif;
$font-mono:   Monaco, 'Bitstream Vera Sans Mono', 'Lucida Console', Terminal, monospace;
$font-system: -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,vM=`// define your own font names...
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
`,yM=`p {
  font-family: $font-sans;
}
`,bM=`p {
  font-family: var(--font-sans);
}
`,wM=()=>u("div",{className:"prose",children:[a("h1",{children:"Fonts"}),a("h2",{children:"Font Classes"}),u("p",{children:["The ",a("code",{children:"font-sans"})," CSS class can be used to select a sans-serif font, ",a("code",{children:"font-serif"})," for a serif font, ",a("code",{children:"font-system"})," ","for the system font, or ",a("code",{children:"font-mono"})," for a monospaced font."]}),a(A,{html:gM,caption:"Fonts",expand:!0}),a("h2",{children:"Font Variables"}),a("p",{children:"Each of the above fonts is defined by a SASS variable which you can override to define your own font stacks."}),a(Re,{code:mM,caption:"Customising Fonts",language:"scss",className:"mar-b-8",expand:!0}),u("p",{children:["These variables are exposed as the corresponding CSS custom properties:"," ",a("code",{children:"--font-sans"}),", ",a("code",{children:"--font-serif"}),","," ",a("code",{children:"--font-system"})," and ",a("code",{children:"--font-mono"}),"."]}),u("div",{className:"grid-2 gap-4 stack-laptop mar-b-8",children:[a(Re,{code:yM,caption:"Font Variables in SCSS",language:"scss",expand:!0}),a(Re,{code:bM,caption:"Font Variables in CSS",language:"css",expand:!0})]}),a("p",{children:"Or you can define your own names for fonts."}),a(Re,{code:vM,caption:"Font Aliases",language:"scss",className:"mar-b-8",expand:!0}),u("p",{children:["In this case the CSS classes created will be ",a("code",{children:"font-body"}),","," ",a("code",{children:"font-head"})," and ",a("code",{children:"font-code"}),".  The fonts will also be defined as the ",a("code",{children:"--font-body"}),", ",a("code",{children:"--font-head"}),","," ","and ",a("code",{children:"--font-code"})," CSS custom properties."]})]}),xM=Object.freeze(Object.defineProperty({__proto__:null,default:wM},Symbol.toStringTag,{value:"Module"})),CM=`<h3>grid-2</h3>
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
`,SM=`<div class="grid gap-4">
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
`,kM=`<div class="grid-2 gap-4">
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
`,_M=`<div class="grid-2 gap-v-8 gap-h-2">
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
`,TM=`<div class="grid-3 gap-2 start">
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
`,LM=`<div class="grid-3 gap-2 center">
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
`,$M=`<div class="grid-3 gap-2 end">
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
`,EM=`<div class="grid-fit gap-2">
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
`,NM=`<div class="grid-fit gap-2" style="--min-width: 200px">
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
`,IM=`<h3><code>grid-fit</code></h3>

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
`,MM=()=>u("div",{className:"prose",children:[a("h1",{children:"Grid"}),a("h2",{children:"Grid Columns"}),u("p",{children:["Use a ",a("code",{children:"grid-N"})," CSS class to set the ",a("code",{children:"display"})," ","mode to ",a("code",{children:"grid"})," where ",a("code",{children:"N"})," is the number of columns from 2 to 16."]}),a(A,{html:CM,caption:"Grid Columns",expand:!0}),a("h2",{children:"Gaps"}),u("p",{children:["The ",a("code",{children:"gap-N"})," classes can be used to add a gap between successive elements.  Here ",a("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit (",a("code",{children:"0.25rem"})," by default)."]}),a(A,{html:kM,caption:"Grid Gaps",expand:!0}),a("h2",{children:"Vertical and Horizontal Gaps"}),u("p",{children:["The the ",a("code",{children:"gap-v-N"})," and ",a("code",{children:"gap-h-N"})," classes can be used to define the vertical and horizontal gaps separately. Again, ",a("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit."]}),a(A,{html:_M,caption:"Grid Gaps",expand:!0}),a("h2",{children:"Single Column Grid"}),u("p",{children:["The ",a("code",{children:"grid"})," CSS class (or ",a("code",{children:"grid-1"})," which does the same thing) creates a single column grid.  It's useful because it then allows you to use the ",a("code",{children:"gap-N"})," classes to add a vertical gap between child components."]}),a(A,{html:SM,caption:"Single Column Grid",expand:!0}),a("h2",{children:"Grid Fit"}),u("p",{children:["The ",a("code",{children:"grid-fit"})," CSS class will fit as many items into the grid as it can and then wrap onto the next line."]}),a(A,{html:EM,caption:"Grid Fit"}),a("h2",{children:"Grid Fill"}),u("p",{children:["The ",a("code",{children:"grid-fill"})," CSS class is similar to ",a("code",{children:"grid-fit"}),". The difference between them is what happens when there are't enough items to fill the container width.  ",a("code",{children:"grid-fit"})," will stretch them whereas ",a("code",{children:"grid-fill"})," will not."]}),a(A,{html:IM,caption:"Grid Fill"}),a("h2",{children:"Grid Fit/Fill Size"}),u("p",{children:["Both ",a("code",{children:"grid-fit"})," and ",a("code",{children:"grid-fill"})," can define a minimum size for each child element.  By default this is"," ",a("code",{children:"100px"})," wide.  You can set the ",a("code",{children:"--min-width"})," property to change it."]}),a(A,{html:NM,caption:"Grid Size"}),a("h2",{children:"Grid Start"}),u("p",{children:["Add the ",a("code",{children:"start"})," CSS class to align items to the start of grid columns."]}),a(A,{html:TM,caption:"Grid Start",expand:!0}),a("h2",{children:"Grid Center"}),u("p",{children:["Add the ",a("code",{children:"center"})," CSS class to align items to the center of grid columns."]}),a(A,{html:LM,caption:"Grid Center",expand:!0}),a("h2",{children:"Grid End"}),u("p",{children:["Add the ",a("code",{children:"end"})," CSS class to align items to the end of grid columns."]}),a(A,{html:$M,caption:"Grid End",expand:!0})]}),RM=Object.freeze(Object.defineProperty({__proto__:null,default:MM},Symbol.toStringTag,{value:"Module"})),PM=()=>u("div",{className:"page prose",children:[a("h1",{children:"Utility Classes"}),u("p",{className:"intro",children:["CSS utility classes are ",a("i",{children:"extremely"})," useful for applying styles to elements on an ad-hoc basis.  But they shouldn't be used as a substitute for writing CSS for reusable styles."]}),u("p",{children:["Some CSS frameworks, most notably"," ",a("a",{href:"https://tailwindcss.com/",children:"tailwind.css"}),", have taken this to the extreme where everything is a utility class and you never need to write any CSS at all. Although this approach has some merits for rapid prototyping, I personally wouldn't use it when building a non-trivial site because I think that it can have a negative impact on readability and maintainability."]}),u("p",{children:["I prefer to take the pragmatic approach and use utility classes to apply ",a("i",{children:"exceptional"})," styling to elements that don't warrant having their own dedicated CSS classes.  The general rule that I follow is to create dedicated CSS classes for components that I'm using in different places in a site.  For example, a product card, a user avatar, button and form styling, and so.  This ensures that they are consistent and can easily be changed across the whole site by updating the rules in the stylesheet."]}),u("p",{children:["For styling that depends on the context in which an element is being used, I'll generally reach for utility classes. By far the most useful of these, and the ones that I use more than any other, are the ",a("code",{children:"mar"})," and ",a("code",{children:"pad"}),` utility classes to add custom margins and padding.  The amount of margin or padding required on an element will often depend on the other elements around it, so there isn't a "one size fits all" solution. Other useful utility classes include those to set the font size, add a border or drop shadow, or to set the layout to use flexbox or grid.`]}),a("h2",{children:"CSS Custom Properties"}),u("p",{children:['CSS custom properties or CSS variables as they are also know, are an incredibly powerful addition to the toolkit for any web designer or developer.  They allow you to define reusable "snippets" of CSS that can easily be applied to different elements.  They can be used to replace much of the functionality that was previously only accessible by using variables and/or mixins in a CSS pre-processing language like'," ",a("a",{href:"https://sass-lang.com/",children:"SASS"}),"."]}),a("h2",{children:"SASS Variables"}),a("p",{children:"Although CSS custom properties have largely removed the need for CSS pre-processors like SASS, there are still benefits to be had from using them.  One benefit is that they can help to reduce bloat in your CSS files.  SASS allows you to define variables that can be used to implement system-wide configuration options that are then compiled into the generated CSS files.  In contrast, any CSS custom properties that you use must be included in the CSS and, if overdone, can lead to significant increases in the file size."}),a("h2",{children:"When to Use Each?"}),a("p",{children:"The general rule that I follow is to use SASS variables for configuration options that I might want to change on a site-wide basis but generally remain constant throughout the site.  For example, the default font face, the breakpoints, the colors or default spacing units.  It's useful to have these defined as variables because it allows me to plug Badger-UI into a project, tweak the default settings, and then get coding.  If at some point in the future I decide they're not quite right, or if the client or a designer wants me to change them, then it should be easy to do so, and they should be applied universally."}),a("p",{children:"For styles that I might want to change in different parts of the site, need to reflect some application state (e.g. the differences between a success, warning or error message), or that should have different properties depending on the user selecting a light or dark theme, then CSS properties are generally the way to go."}),a("p",{children:"For styles that need to be applied on an ad-hoc basis, utility classes are what I reach for."})]}),AM=Object.freeze(Object.defineProperty({__proto__:null,default:PM},Symbol.toStringTag,{value:"Module"})),FM=`<div class="relative border" style="height: 140px">
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
`,OM=()=>u("div",{className:"prose",children:[a("h1",{children:"Position"}),a("h2",{children:"Position Classes"}),u("p",{children:["Add the ",a("code",{children:"absolute"}),", ",a("code",{children:"relative"})," and"," ",a("code",{children:"fixed"})," CSS classes to set the position type."]}),u("p",{children:["For elements that are set to ",a("code",{children:"absolute"})," or ",a("code",{children:"fixed"})," ","position, the ",a("code",{children:"top"}),", ",a("code",{children:"bottom"}),", ",a("code",{children:"left"})," ","and ",a("code",{children:"right"})," classes can be used to position them against the corresponding edge of the closest parent element with the"," ",a("code",{children:"relative"})," position type."]}),a(A,{html:FM,caption:"Position",expand:!0})]}),DM=Object.freeze(Object.defineProperty({__proto__:null,default:OM},Symbol.toStringTag,{value:"Module"})),BM=`<div class="scroll-x border pad-2 nowrap mar-b-2">
  Yeah, I like it, just been fooling about with it for a few months now, very delicate... Yeah, it's part of a... trilogy really, a musical trilogy I'm doing, in, D minor, which I always find is really the saddest of all keys really. I don't know why, but it makes people weep instantly. You play a "baaaaa... baaaaaa..." it's the horn part. "...baaaa, baaaaa...", yeah, just simple lines intertwining, you know very much like, I'm really influenced by Mozart and Bach, It's sort of in between those, really, it's like a Mach piece really.<
</div>
`,jM=`<div class="scroll-y border pad-2" style="height: 7rem">
  Yeah, I like it, just been fooling about with it for a few months
  now, very delicate... Yeah, it's part of a... trilogy really, a
  musical trilogy I'm doing, in, D minor, which I always find is really
  the saddest of all keys really. I don't know why, but it makes people
  weep instantly. You play a "baaaaa... baaaaaa..." it's the horn part.
  "...baaaa, baaaaa...", yeah, just simple lines intertwining, you
  know very much like, I'm really influenced by Mozart and Bach,
  It's sort of in between those, really, it's like a Mach piece
  really.
</div>`,zM=()=>u("div",{className:"prose",children:[a("h1",{children:"Scolling"}),a("h2",{children:"Scroll Classes"}),u("p",{children:["Add the ",a("code",{children:"scroll-x"})," or ",a("code",{children:"scroll-y"})," CSS classes to set ",a("code",{children:"overflow-x"})," or ",a("code",{children:"overflow-y"})," to ",a("code",{children:"scroll"}),", respectively."]}),a("p",{children:`Be warned that you'll also need to set widths and/or heights as appropriate to stop the layout engine from doing the "right" thing and expanding the containers to fit the content.`}),a(A,{html:BM,caption:"scroll-x",expand:!0}),a(A,{html:jM,caption:"scroll-y",expand:!0})]}),UM=Object.freeze(Object.defineProperty({__proto__:null,default:zM},Symbol.toStringTag,{value:"Module"})),WM=`<div class="surface-3 pad-8">
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
</div>`,HM=`<div class="surface-3 pad-8">
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
`,VM=()=>u("div",{className:"prose",children:[a("h1",{children:"Shadows"}),a("h2",{children:"Shadow Classes"}),u("p",{children:["Use the ",a("code",{children:"shadow-1"}),", ",a("code",{children:"shadow-2"}),","," ",a("code",{children:"shadow-3"}),", ",a("code",{children:"shadow-4"})," and ",a("code",{children:"shadow-5"})," ","CSS classes to add a box shadow of progressively larger size.  Larger shadows can be used to suggest that an element is lifted higher off the background and thus appears closer to the foreground."]}),a(A,{html:WM,caption:"Shadows",expand:!0}),a("h2",{children:"Shadow Properties"}),u("p",{children:["The shadow styles are defined as CSS custom properties, (e.g."," ",a("code",{children:"--shadow-1"}),", ",a("code",{children:"--shadow-2"}),", etc).  The colors and opacities used for the shadows depend on both the shadow depth and color theme.  For the default light theme the base color is"," ",a("code",{children:"--grey-0"})," and the shadows are more transparent.  For the dark theme, where shadows need to be a bit more prominent to be visible, the base color is ",a("code",{children:"black"})," and the shadows are more opaque."]}),u("p",{children:["The benefit of CSS custom properties is that you can easily apply them to your own style rules.  In this example we define a"," ",a("code",{children:".shadow-example"})," rule which adds a ",a("code",{children:"box-shadow"})," using the ",a("code",{children:"--shadow-2"})," custom property.  The shadow color will be set correctly for both light and dark themes so you don't need to worry about defining separate rules for each."]}),a(A,{html:HM,caption:"Shadow Style",expand:!0})]}),GM=Object.freeze(Object.defineProperty({__proto__:null,default:VM},Symbol.toStringTag,{value:"Module"})),YM=`<div class="smallest">Smallest text</div>
<div class="smaller">Smaller text</div>
<div class="small">Small text</div>
<div>Normal size text</div>
<div class="large">Large text</div>
<div class="larger">Larger text</div>
<div class="largest">Largest text</div>
`,ZM=`<div>x1</div>
<div class="x2">x2</div>
<div class="x3">x3</div>
<div class="x4">x4</div>
<div class="x5">x5</div>
<div class="x6">x6</div>
<div class="x7">x7</div>
<div class="x8">x8</div>
<div class="x9">x9</div>
<div class="x10">x10</div>
`,qM=`// define your own text sizes...
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
@import "@abw/badger-css/styles/badger.scss";`,QM=({heading1:e="Class",heading2:t="Rem Size",heading3:n=u(Mn,{children:["Pixel Size ",a("span",{className:"smaller",children:"(when 1rem=16px)"})]}),rows:r})=>u("table",{className:"brand celled striped properties small wide mar-b-2",children:[a("thead",{children:u("tr",{children:[a("th",{children:e}),a("th",{children:t}),a("th",{children:n})]})}),a("tbody",{children:r.map(o=>u("tr",{children:[a("td",{children:a("code",{children:o[0]})}),a("td",{children:o[1]}),a("td",{children:o[2]})]},o[0]))})]}),KM=()=>u("div",{className:"prose",children:[a("h1",{children:"Text Sizes"}),a("h2",{children:"Size Classes"}),u("p",{children:["Use the ",a("code",{children:"smallest"}),", ",a("code",{children:"smaller"}),","," ",a("code",{children:"small"}),", ",a("code",{children:"medium"})," (default)"," ",a("code",{children:"large"}),", ",a("code",{children:"larger"})," and ",a("code",{children:"largest"})," CSS classes to set the text size. These are defined as SASS variables which you can override (e.g. ",a("code",{children:"$size-large"}),") and CSS custom properties which you can use in your own stylesheets or inline styles (e.g. ",a("code",{children:"--size-large"}),")."]}),a(A,{html:YM,caption:"Text Sizes",expand:!0}),a("h2",{children:"Custom Sizes"}),a("p",{children:"The pre-defined values for the sizes are shown in the table below."}),u("p",{children:["You can set the ",a("code",{children:"$sizes"})," SCSS variable if you want to define a different set of sizes, either to give them different names or values."]}),u("p",{children:["In the example shown here the generated CSS classes would be"," ",a("code",{children:"xxs"}),", ",a("code",{children:"xs"}),", ",a("code",{children:"s"}),","," ",a("code",{children:"m"}),", ",a("code",{children:"l"}),", ",a("code",{children:"xl"})," and ",a("code",{children:"xxl"}),"."]}),a(bi,{code:qM,caption:"Custom Sizes",language:"scss",expand:!0,children:a(QM,{rows:[["smallest","0.625rem","10px"],["smaller","0.75rem","12px"],["small","0.875rem","14px"],["medium","1rem","16px"],["large","1.25rem","20px"],["larger","1.5rem","24px"],["largest","2rem","32p<"]]})}),a("h2",{children:"Size Multipliers"}),u("p",{children:["For larger text sizes you can use the size multiple classes:"," ",a("code",{children:"x2"}),", ",a("code",{children:"x3"}),", etc., up to ",a("code",{children:"x10"}),". These are all multiples of ",a("code",{children:"1rem"}),"."]}),a(A,{html:ZM,caption:"Text Sizes",expand:!0})]}),XM=Object.freeze(Object.defineProperty({__proto__:null,default:KM},Symbol.toStringTag,{value:"Module"})),JM=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
  <div class="mar surface pad-2">
    This has 1 unit of margin.
  </div>
</div>
`,eR=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
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
`,tR=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
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
`,nR=`<div class="pad-2 grey20 bgc-50 fgc-90 mar-b-2">
  Two units of padding all around.
</div>
<div class="pad-v-4 pad-h-8 grey20 bgc-50 fgc-90 border">
  Four units of padding vertically and eight units
  horizontally
</div>
`,rR=`<div class="grid-1 gap-4 surface-3 pad-4">
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
`,aR=()=>u("div",{className:"prose",children:[a("h1",{children:"Spacing"}),u("p",{children:["The ",a("code",{children:"mar"})," and ",a("code",{children:"pad"})," CSS utility classes can be used to set the margins and padding for and element."]}),a("h2",{children:"Margins"}),u("p",{children:["The ",a("code",{children:"mar"})," class by itself will add 1 unit of margin to all four sides of an element.  The default unit size is ",a("code",{children:"0.25rem"}),"."]}),a(A,{html:JM,caption:"Margins",expand:!0}),u("p",{children:["The ",a("code",{children:"mar-N"})," classes will add multiples of the unit, where ",a("code",{children:"N"})," is one of the values:"," ",a("code",{children:"0"}),", ",a("code",{children:"1"}),", ",a("code",{children:"2"}),", ",a("code",{children:"3"}),","," ",a("code",{children:"4"}),", ",a("code",{children:"6"}),", ",a("code",{children:"8"}),", ",a("code",{children:"10"}),","," ",a("code",{children:"12"}),", ",a("code",{children:"16"}),", ",a("code",{children:"20"}),","," ",a("code",{children:"24"}),", ",a("code",{children:"28"})," or ",a("code",{children:"32"}),".  The"," ",a("code",{children:"mar-1"})," class is effectively the same as just ",a("code",{children:"mar"})," ","but is included for completeness.  Also note that ",a("code",{children:"mar-0"})," can be used to remove any margin that would otherwise be present on an element."]}),a(A,{html:eR,caption:"Margin Multiple",expand:!0}),a("h2",{children:"Margin Directions"}),u("p",{children:["You can also specify the direction for the margin using the"," ",a("code",{children:"mar-t"})," (top), ",a("code",{children:"mar-r"})," (right),"," ",a("code",{children:"mar-b"})," (bottom), ",a("code",{children:"mar-l"})," (left),"," ",a("code",{children:"mar-v"})," (vertical: top and bottom) and"," ",a("code",{children:"mar-h"})," (horizontal: left and right) classes. The default is 1 unit of margin or a ",a("code",{children:"-N"})," suffix can be added as a multiplier.  For example ",a("code",{children:"mar-t-4"})," to add 4 units of margin to the top of an element."]}),a(A,{html:tR,caption:"Margin Direction",expand:!0}),a("h2",{children:"Padding"}),u("p",{children:["The ",a("code",{children:"pad"})," and related utility classes work in the same way but add padding inside the element."]}),a(A,{html:nR,caption:"Padding",expand:!0}),u("p",{children:["One important thing to note is that padding is applied in multiples of 0.25",a("b",{children:"em"})," whereas margins use 0.25",a("b",{children:"rem"}),".  This is because you usually want spacing around elements to be consistent (which rem provides) but padding inside an element should be based on the text size (which em provides)."]}),a(A,{html:rR,caption:"Pad Sizes",expand:!0})]}),oR=Object.freeze(Object.defineProperty({__proto__:null,default:aR},Symbol.toStringTag,{value:"Module"})),lR=`<div class="flex gap-4">
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
`,iR=`<div class="flex gap-4">
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
`,sR=`<table class="wide shaded lined">
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
`,cR=`// redefine $splits to include what you want...
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
@import "@abw/badger-css/styles/badger.scss";`,dR=[["2","One half","50%"],["3","One third","33.33333333%"],["2-3","Two thirds","66.66666666%"],["4","One quarter","25%"],["3-4","Three quarters","75%"],["5","One fifth","20%"],["2-5","Two fifths","40%"],["3-5","Three fifths","60%"],["4-5","Four fifths","80%"],["6","One sixth","16.66666666%"],["5-6","Five sixth","83.33333333%"],["7","One seventh","14.28571429%"],["2-7","Two sevenths","28.57142858%"],["3-7","Three sevenths","42.85714287%"],["4-7","Four sevenths","57.14285716%"],["5-7","Five sevenths","71.42857145%"],["6-7","Six sevenths","85.71428574%"],["8","One eighth","12.5%"],["3-8","Three eighths","37.5%"],["5-8","Five eighths","62.5%"],["7-8","Seven eighths","87.5%"],["9","One ninth","11.11111111%"],["2-9","Two ninths","22.22222222%"],["4-9","Four ninths","44.44444444%"],["5-9","Five ninths","55.55555555%"],["7-9","Seven ninths","77.77777777%"],["8-9","Eight ninths","88.88888888%"],["10","One tenth","10%"],["3-10","Three tenths","30%"],["7-10","Seven tenths","70%"],["9-10","Nine tenths","90%"],["11","One eleventh","9.090909090%"],["12","One twelfth","8.333333333%"],["13","One thirteenth","7.692307692%"],["14","One fourteenth","7.142857142%"],["15","One fifteenth","6.666666666%"],["16","One sixteenth","6.25%"]],uR=()=>u("div",{className:"prose",children:[a("h1",{children:"Split"}),a("h2",{children:"Evenly Split Columns"}),u(Xe,{children:[u("p",{children:["The ",a("code",{children:"split-N"})," classes can be used to set the width of an element to a fraction of the width of the parent container. For example, ",a("code",{children:"split-2"})," sets the width to one half,"," ",a("code",{children:"split-3"})," to one third, and so on.  The value for"," ",a("code",{children:"N"})," can be anything from 2 to 16."]}),u("p",{children:["They can be useful in conjunction with the"," ",a(Ee,{to:"/utilities/flexbox",text:"flexbox"})," classes to constrain columns to be a particular width.  Otherwise the flexbox layout engine will try to expand the width of columns that have more content."]})]}),a(A,{html:lR,caption:"Even Splits"}),a("h2",{children:"Unevenly Split Columns"}),u("p",{children:["The ",a("code",{children:"split-N-M"})," classes can be used to create uneven splits. For example, ",a("code",{children:"split-2-5"})," creates a columns that is two fifths of the width."]}),u("p",{children:["These are defined for all uneven splits up to tenths (e.g. there's a ",a("code",{children:"split-3-10"})," class for three tenths, but no ",a("code",{children:"split-3-11"})," ","for three elevenths).  Not that redundant classes are not included. For example, there's no ",a("code",{children:"split-3-6"})," class because it's one half or ",a("code",{children:"split-2"}),"."]}),a(A,{html:iR,caption:"Uneven Splits"}),a("h2",{children:"Tables"}),u("p",{children:["The ",a("code",{children:"split-*"})," classes also work with table columns. This can be useful to prevent the layout engine from expanding columns to fit the content.  It's especially useful if you have multiple tables and you want the columns to be the same width in each of the tables."]}),a(A,{html:sR,caption:"Table Splits"}),a("h2",{children:"Split Classes"}),u(Xe,{children:[a("p",{children:"The CSS classes and their corresponding widths are listed below."}),u("p",{children:["You can set the ",a("code",{children:"$splits"})," SASS variable if you want to define a different set of splits."]})]}),a(bi,{code:cR,caption:"Custom Splits",language:"scss",expand:!0,children:u("table",{className:"brand celled striped properties small wide mar-b-2",children:[a("thead",{children:u("tr",{children:[a("th",{children:"Class"}),a("th",{children:"Size"}),a("th",{children:"%age Width"})]})}),a("tbody",{children:dR.map(e=>u("tr",{children:[a("td",{children:u("code",{children:["split-",e[0]]})}),a("td",{children:e[1]}),a("td",{children:e[2]})]},e[0]))})]})})]}),hR=Object.freeze(Object.defineProperty({__proto__:null,default:uR},Symbol.toStringTag,{value:"Module"})),fR=`<h4 class="font-mono smaller">stack-widescreen</h4>
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
`,pR=`<h4 class="font-mono smaller">stack-widescreen</h4>
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
`,gR=`// define your own breakpoints...
$breakpoints: (
  'mobile':     30rem,
  'tablet':     50rem,
  'laptop':     70rem,
  'desktop':    80rem,
  'widescreen': 90rem
) !default;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";`,mR={mobile:30,tablet:50,laptop:70,desktop:80,widescreen:90},vR=()=>u("div",{className:"prose",children:[a("h1",{children:"Stacking Split Columns"}),u("p",{children:["One of the problems with creating columns using"," ",a(Ee,{to:"/utilities/grid",text:"grid"}),","," ",a(Ee,{to:"/utilities/flexbox",text:"flexbox"})," ","and ",a(Ee,{to:"/utilities/split",text:"split"})," is that sometimes a user's screen size isn't large enough to accommodate them."]}),u("p",{children:["The ",a("code",{children:"stack-*"})," classes can be used to stack columns when the screen size is narrower than a threshold breakpoint. These are ",a("code",{children:"stack-mobile"}),", ",a("code",{children:"stack-tablet"}),","," ",a("code",{children:"stack-laptop"}),", ",a("code",{children:"stack-desktop"})," and"," ",a("code",{children:"stack-widescreen"}),"."]}),a("h2",{children:"Grid Stacking"}),u(Xe,{children:[u("p",{children:["This example shows how adding a ",a("code",{children:"stack-*"})," class to an element that has one of the ",a("code",{children:"grid-*"})," classes will cause the columns to be stacked at different breakpoints."]}),a(oi,{title:"Try it out!",children:"Try resizing your browser window and see how the grid elements below get stacked."})]}),a(A,{html:fR,caption:"Stacking Grids"}),a("h2",{children:"Flexbox Stacking"}),u("p",{children:["This example shows the same thing for ",a("code",{children:"flex"})," containers."]}),a(A,{html:pR,caption:"Stacking Flexbox"}),a("h2",{children:"Breakpoint Names"}),u(Xe,{children:[a("p",{children:"The breakpoint names and their corresponding widths in rems and pixels (assuming 1rem = 16px) are shown below."}),u("p",{children:["You can set the ",a("code",{children:"$breakpoints"})," SASS variable if you want to define a different set of breakpoints."]})]}),a(bi,{code:gR,caption:"Custom Breakpoints",language:"scss",expand:!0,children:u("table",{className:"brand celled striped properties small wide mar-b-2",children:[a("thead",{children:u("tr",{children:[a("th",{children:"Class"}),a("th",{children:"Rems"}),a("th",{children:"Pixels"})]})}),a("tbody",{children:Object.entries(mR).map(([e,t])=>u("tr",{children:[a("td",{children:a("code",{children:e})}),u("td",{children:[t,"rem"]}),u("td",{children:[t*16,"px"]})]},e))})]})})]}),yR=Object.freeze(Object.defineProperty({__proto__:null,default:vR},Symbol.toStringTag,{value:"Module"})),bR=`<div class="surface border pad-2">
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
`,wR=`<div class="surface-1 border pad-2 mar-b-2">
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
`,xR=`<div class="grid-3 gap-2 smallish">
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
`,CR=()=>u("div",{className:"prose",children:[a("h1",{children:"Surfaces"}),u("p",{children:['When building UI components it can be useful to think in terms of "surfaces", with each surface getting progressively "closer" to the user and demanding their closer attention. You may want to combine these with the ',a("code",{children:"shadow-N"})," classes to further emphasise the effect."]}),a("p",{children:"As a general rule surfaces that are in the foreground should be lighter than those in the background.  Note that this applies to dark themes as well as light themes."}),a("h2",{children:"Surface Classes"}),u("p",{children:["Use the ",a("code",{children:"surface-1"}),", ",a("code",{children:"surface-2"}),","," ",a("code",{children:"surface-3"}),", ",a("code",{children:"surface-4"})," and"," ",a("code",{children:"surface-5"})," CSS classes to define elements with appropriate background and text colors to achieve this effect.  The lower numbers are meant to be further in the background with higher numbers being closer to the foreground."]}),a(A,{html:bR,caption:"Surfaces",expand:!0}),u("p",{children:["The ",a("code",{children:"surface"})," class is a special case being used here to apply a background color for the examples.  When using a light theme this"," ","is ",a("code",{children:"white"})," and for a dark theme it is ",a("code",{children:"black"}),"."]}),u("p",{children:["The styles are defined using CSS variables for the foreground, background and border colors, e.g. ",a("code",{children:"--color"}),", ",a("code",{children:"--background-color"})," ","and ",a("code",{children:"--border-color"}),". In turn these are defined using the ",a("code",{children:"grey"})," color range depending on the color theme. For example, the ",a("code",{children:"--background-color"}),"for ",a("code",{children:"--surface-3"}),"is defined to be ",a("code",{children:"--color-90"})," by default, and ",a("code",{children:"--color-10"})," when the dark theme is in effect."]}),a("h2",{children:"Surfaces With Borders"}),u("p",{children:["Add the ",a("code",{children:"border"})," CSS class to add a border around a surface."]}),a(A,{html:wR,caption:"Surface Borders",expand:!0}),a("h2",{children:"Colored Surfaces"}),a("p",{children:"Add any of the color classes to get different colored surfaces."}),a(A,{html:xR,caption:"Color Surfaces"})]}),SR=Object.freeze(Object.defineProperty({__proto__:null,default:CR},Symbol.toStringTag,{value:"Module"})),kR=`<div class="flex gap-2 mar-b-2">
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
`,_R=`<div class="flow">
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
</div>`,TR=`<p>
  Ian, can I have a word with you for a minute? ...uh, a couple of
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
`,LR=()=>u("div",{className:"prose flow",children:[a("h1",{children:"Typography"}),a("h2",{children:"Headings"}),u("p",{children:["Headings have ",a("code",{children:"text-wrap: balance"})," set to balance the length of long lines.  The ",a("code",{children:"line-height"})," is reduced to ",a("code",{children:"1.3"}),"."]}),u("p",{children:["Margins and padding are removed by default.  You can add them in yourself, either using the ",a(Ee,{to:"/utilities/spacing",text:"spacing utiltiy classes"})," ","or globally to match your site style. Or use something like the",a("code",{children:"flow"})," class (see below) to add margins between elements where appropriate."]}),a(A,{html:kR,caption:"Headings"}),a("h2",{children:"Paragraphs"}),a("p",{children:"Paragraphs also have the default margins removed, but a margin is added between successive paragraphs."}),a(A,{html:TR,caption:"Paragraphs"}),a("h2",{children:"Flow"}),u("p",{children:["Use the ",a("code",{children:"flow"})," class on a container to add spacing between block elements.  Thanks to"," ",a("a",{href:"https://andy-bell.co.uk/my-favourite-3-lines-of-css/",children:"Andy Bell"})," ","for this one."]}),a(A,{html:_R,caption:"Flow"})]}),$R=Object.freeze(Object.defineProperty({__proto__:null,default:LR},Symbol.toStringTag,{value:"Module"})),ER=`<div class="grid-1 gap-4">
  <input type="text" value="A wide input"/>
  <button class="blue wide">
    A wide button
  </button>
</div>`,NR=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,IR=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,MR=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,RR=`// define your own range of rem widths...
$rem-widths:
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 25, 30,
  35, 40, 45, 50, 60, 70, 80, 90, 100 !default;

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,PR=[2,4,6,8,10,12,14,16,18,20,25,30,35,40,45,50,60,70,80,90,100],AR=()=>u("div",{className:"prose",children:[a("h1",{children:"Widths"}),a("h2",{children:"Wide"}),u("p",{children:["Use the ",a("code",{children:"wide"})," CSS class to set an inline element to expand to the full width of the container."]}),a(A,{html:ER,caption:"Wide",expand:!0}),a("h2",{children:"Width Classes"}),u(Xe,{children:[u("p",{children:["The ",a("code",{children:"width-Nrem"})," classes can be used to set the width of an element to a number of rem units."]}),u("p",{children:["The values for ",a("code",{children:"N"})," can be",a("code",{children:"2"}),", ",a("code",{children:"4"}),","," ",a("code",{children:"6"}),", ",a("code",{children:"8"}),", ",a("code",{children:"10"}),", ",a("code",{children:"12"}),","," ",a("code",{children:"14"}),", ",a("code",{children:"16"}),", ",a("code",{children:"18"}),", ",a("code",{children:"20"}),","," ",a("code",{children:"25"}),", ",a("code",{children:"30"}),", ",a("code",{children:"35"}),", ",a("code",{children:"40"}),","," ",a("code",{children:"45"}),", ",a("code",{children:"50"}),", ",a("code",{children:"60"}),","," ",a("code",{children:"70"}),", ",a("code",{children:"80"}),", ",a("code",{children:"90"})," or ",a("code",{children:"100"}),"."]})]}),a(A,{html:NR,caption:"Widths",expand:!0}),a("h2",{children:"Pixel Width Classes"}),u("p",{children:["If you prefer to think in pixels, you can use the corresponding"," ",a("code",{children:"width-Npx"})," classes instead."]}),a(A,{html:IR,caption:"Widths in Px",expand:!0}),a("h2",{children:"Max Width Classes"}),u(Xe,{children:[u("p",{children:["The ",a("code",{children:"max-width-Nrem"})," classes can be used to set the maximum width of an element to a number of rem units.  In this case the width of the element will be constrained to the width of the parent element. You can also use the corresponding ",a("code",{children:"max-width-Npx"})," classes if you prefer to think in pixels."]}),u("p",{children:["The ",a("code",{children:"width-*"})," and ",a("code",{children:"max-width-*"})," classes work by using the ",a("code",{children:"--width"})," custom property which is set to the appropriate number of rem units based on the ",a("code",{children:"-Nrem"})," ","or ",a("code",{children:"-Npx"})," suffix."]})]}),a(A,{html:MR,caption:"Widths",expand:!0}),a("h2",{children:"Rem/Pixel Sizes"}),u(Xe,{children:[a("p",{children:"The corresponding pixel widths (assuming 1rem = 16px) for each of the classes are shown below."}),u("p",{children:["You can set the ",a("code",{children:"$rem-widths"})," SASS variable if you want to define a different set of width classes."]})]}),a(bi,{code:RR,caption:"Custom Sizes",language:"scss",expand:!0,children:u("table",{className:"brand celled striped properties small wide mar-b-2",children:[a("thead",{children:u("tr",{children:[a("th",{children:"Rem Class"}),a("th",{children:"Pixel Class"}),a("th",{children:"Rems"}),a("th",{children:"Pixels"})]})}),a("tbody",{children:PR.map(e=>u("tr",{children:[a("td",{children:u("code",{children:["width-",e,"rem"]})}),a("td",{children:u("code",{children:["width-",e*16,"px"]})}),a("td",{children:e}),a("td",{children:e*16})]},e))})]})})]}),FR=Object.freeze(Object.defineProperty({__proto__:null,default:AR},Symbol.toStringTag,{value:"Module"})),$4=({path:e,onClick:t,width:n=512,height:r=512,style:o,className:l="night-and-day--icon",fill:i="currentColor"})=>a("svg",{"aria-hidden":"true",focusable:"false",className:l,style:o,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n} ${r}`,onClick:t,children:a("path",{d:e,fill:i})}),OR=e=>a($4,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),E4=({Icon:e,caption:t,onClick:n,iconClass:r,iconStyle:o,captionStyle:l,className:i="night-and-day--switcher",captionClass:s="night-and-day--caption",style:d={display:"inline-block"}})=>u("div",{className:i,onClick:n,style:d,children:[a(e,{style:o,className:r}),!!t&&a("div",{className:s,style:l,children:t})]}),DR=e=>{const{setDark:t}=xi();return a(E4,{Icon:OR,onClick:t,...e})},BR=e=>a($4,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),jR=e=>{const{setLight:t}=xi();return a(E4,{Icon:BR,onClick:t,...e})},zR=({sunrise:e={},nightfall:t={}})=>{const{isLight:n,setLight:r,setDark:o}=xi();return n?a(jR,{onClick:o,...e}):a(DR,{onClick:r,...t})},N4=j.createContext(),xi=()=>j.useContext(N4),is="dark",tu="light",I4="(prefers-color-scheme: dark)",UR=()=>{var e;return(e=window==null?void 0:window.matchMedia)==null?void 0:e.call(window,I4).matches},Ja=window==null?void 0:window.localStorage,WR=e=>e.split(" "),d3=(e,t="")=>`${e} ${t}`,HR=({storageKey:e,defaultVariant:t,children:n})=>{const r=e?Ja==null?void 0:Ja.getItem(e):null,[o,l=""]=r?WR(r):[UR(),null],[i,s]=j.useState(o===is),[d,f]=j.useState(l||t),m=E=>{s(E),e&&Ja&&Ja.setItem(e,d3(E?is:tu,d))},b=E=>{f(E),e&&Ja&&Ja.setItem(e,d3(i?is:tu,E))},C=E=>m(E.matches);j.useEffect(()=>{if(window&&window.matchMedia){const E=window.matchMedia(I4);return E.addEventListener("change",C),()=>E==null?void 0:E.removeEventListener("change",C)}},[]);const N={isDark:i,isLight:!i,setDark:()=>m(!0),setLight:()=>m(!1),setIsDark:s,toggleTheme:()=>m(!i),theme:i?is:tu,variant:d,setVariant:b};return a(N4.Provider,{value:N,children:n})},VR=e=>j.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},j.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z",fill:"currentColor"})),u3="sidebar",GR="no-sidebar",M4="0.1.13",R4="2023-11-01",h3="2018",nu=R4.match(/^(\d+)/)[1],YR=nu===h3?nu:`${h3} - ${nu}`,ZR=()=>{const{variant:e,setVariant:t}=xi();return a("header",{children:u("nav",{children:[u("div",{children:[a(Pc,{name:"bars",className:"toggle-sidebar action",onClick:()=>t(e===u3?GR:u3)}),a(Ee,{to:"/",className:"home mar-l-2",text:"Badger-CSS"}),u("span",{className:"small mar-l-2",children:["v",M4]})]}),u("div",{children:[a("a",{href:"https://github.com/abw/badger-css",children:a(VR,{className:"night-and-day--icon mar-r-2"})}),a(zR,{})]})]})})},gl=({title:e,items:t})=>u("div",{className:"menu",children:[a("h4",{children:e}),t.map(n=>a(Ee,{...n},n.to))]}),qR=[{to:"/demo",text:"Demo"},{to:"/getting-started/installation",text:"Installation"},{to:"/getting-started/good",text:"What's good about it?"},{to:"/getting-started/bad",text:"What's wrong with it?"}],QR=[{to:"/colors/ranges",text:"Color Ranges"},{to:"/colors/brand",text:"Brand Colors"},{to:"/colors/variables",text:"Color Variables"},{to:"/colors/utilities",text:"Color Utilities"},{to:"/colors/palette",text:"Custom Palette"}],KR=[{to:"/utilities/",text:"Introduction"},{to:"/utilities/alignment",text:"Alignment"},{to:"/utilities/borders",text:"Borders"},{to:"/utilities/display",text:"Display"},{to:"/utilities/flexbox",text:"Flexbox"},{to:"/utilities/fonts",text:"Fonts"},{to:"/utilities/font-styles",text:"Font Styles"},{to:"/utilities/font-weights",text:"Font Weights"},{to:"/utilities/grid",text:"Grid"},{to:"/utilities/position",text:"Position"},{to:"/utilities/scrolling",text:"Scrolling"},{to:"/utilities/shadows",text:"Shadows"},{to:"/utilities/sizes",text:"Text Sizes"},{to:"/utilities/spacing",text:"Spacing"},{to:"/utilities/split",text:"Splits"},{to:"/utilities/stack",text:"Stacking"},{to:"/utilities/surfaces",text:"Surfaces"},{to:"/utilities/typography",text:"Typography"},{to:"/utilities/widths",text:"Widths"}],XR=[{to:"/forms/",text:"Introduction"},{to:"/forms/buttons",text:"Buttons"},{to:"/forms/checkboxes",text:"Checkboxes"},{to:"/forms/radio-buttons",text:"Radio Buttons"},{to:"/forms/select",text:"Select Inputs"},{to:"/forms/text",text:"Text Inputs"},{to:"/forms/textarea",text:"Text Area Inputs"},{to:"/forms/field",text:"Form Fields"},{to:"/forms/fieldset",text:"Form Field Sets"},{to:"/forms/styling",text:"Form Styling"}],JR=[{to:"/components/alerts",text:"Alerts"},{to:"/components/details",text:"Details"},{to:"/components/dialog",text:"Dialog"},{to:"/components/dropdown",text:"Dropdown"},{to:"/components/icons",text:"SVG Icons"},{to:"/components/tables",text:"Tables"},{to:"/components/tooltips",text:"Tooltips"}],eP=()=>u("div",{children:[a(gl,{title:"Getting Started",items:qR}),a(gl,{title:"Colors",items:QR}),a(gl,{title:"Utilities",items:KR}),a(gl,{title:"Forms",items:XR}),a(gl,{title:"Components",items:JR})]}),tP=()=>a("footer",{children:u("div",{className:"flex space",children:[u("div",{children:["© Copyright ",YR," Andy Wardley"]}),u("div",{children:["Version ",M4," ",R4]})]})});function nP(){const{pathname:e}=jo();return j.useEffect(()=>rP(document.getElementById("content")),[e]),null}function rP(e){e==null||e.scrollTo({top:0,left:0})}const aP=()=>{const{theme:e,variant:t}=xi(),n=[e,t].join(" ");return u("div",{id:"site",className:n,children:[a(ZR,{}),u("div",{id:"app",children:[a(nP,{}),a("aside",{children:a(eP,{})}),a("main",{id:"content",children:a(qk,{})})]}),a(tP,{})]})},oP=Object.assign({"../pages/colors/brand.jsx":u_,"../pages/colors/greyscale.jsx":T_,"../pages/colors/palette.jsx":R_,"../pages/colors/ranges.jsx":D_,"../pages/colors/utilities.jsx":Z_,"../pages/colors/variables.jsx":Q_,"../pages/components/alerts.jsx":fT,"../pages/components/details.jsx":ST,"../pages/components/dialog.jsx":IT,"../pages/components/dropdown.jsx":FT,"../pages/components/icons.jsx":WT,"../pages/components/tables.jsx":nL,"../pages/components/tooltips.jsx":dL,"../pages/decoder.jsx":mL,"../pages/demo/index.jsx":EL,"../pages/forms/buttons.jsx":zL,"../pages/forms/checkboxes.jsx":YL,"../pages/forms/field.jsx":l$,"../pages/forms/fieldset.jsx":c$,"../pages/forms/index.jsx":jN,"../pages/forms/radio-buttons.jsx":GN,"../pages/forms/select.jsx":JN,"../pages/forms/styling.jsx":nI,"../pages/forms/text.jsx":sI,"../pages/forms/textarea.jsx":hI,"../pages/getting-started/bad.jsx":gI,"../pages/getting-started/good.jsx":vI,"../pages/getting-started/installation.jsx":kI,"../pages/index.jsx":LI,"../pages/utilities/alignment.jsx":MI,"../pages/utilities/borders.jsx":GI,"../pages/utilities/display.jsx":qI,"../pages/utilities/flexbox.jsx":oM,"../pages/utilities/font-styles.jsx":sM,"../pages/utilities/font-weights.jsx":pM,"../pages/utilities/fonts.jsx":xM,"../pages/utilities/grid.jsx":RM,"../pages/utilities/index.jsx":AM,"../pages/utilities/position.jsx":DM,"../pages/utilities/scrolling.jsx":UM,"../pages/utilities/shadows.jsx":GM,"../pages/utilities/sizes.jsx":XM,"../pages/utilities/spacing.jsx":oR,"../pages/utilities/split.jsx":hR,"../pages/utilities/stack.jsx":yR,"../pages/utilities/surfaces.jsx":SR,"../pages/utilities/typography.jsx":$R,"../pages/utilities/widths.jsx":FR}),lP=Object.entries(oP).map(([e,t])=>({path:e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,""),Component:t.default})),iP=n_([{path:"/",element:a(aP,{}),children:lP}],{basename:"/badger-css/"});ru.createRoot(document.getElementById("root")).render(a($t.StrictMode,{children:a(HR,{storageKey:"theme",children:a(Yk,{router:iP})})}));
