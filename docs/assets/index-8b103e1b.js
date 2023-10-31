function d6(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const o=Object.getOwnPropertyDescriptor(r,l);o&&Object.defineProperty(e,l,o.get?o:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var Do=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fv={exports:{}},pc={},pv={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var di=Symbol.for("react.element"),u6=Symbol.for("react.portal"),h6=Symbol.for("react.fragment"),f6=Symbol.for("react.strict_mode"),p6=Symbol.for("react.profiler"),g6=Symbol.for("react.provider"),m6=Symbol.for("react.context"),v6=Symbol.for("react.forward_ref"),y6=Symbol.for("react.suspense"),b6=Symbol.for("react.memo"),w6=Symbol.for("react.lazy"),pg=Symbol.iterator;function x6(e){return e===null||typeof e!="object"?null:(e=pg&&e[pg]||e["@@iterator"],typeof e=="function"?e:null)}var gv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mv=Object.assign,vv={};function Ml(e,t,n){this.props=e,this.context=t,this.refs=vv,this.updater=n||gv}Ml.prototype.isReactComponent={};Ml.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ml.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yv(){}yv.prototype=Ml.prototype;function mh(e,t,n){this.props=e,this.context=t,this.refs=vv,this.updater=n||gv}var vh=mh.prototype=new yv;vh.constructor=mh;mv(vh,Ml.prototype);vh.isPureReactComponent=!0;var gg=Array.isArray,bv=Object.prototype.hasOwnProperty,yh={current:null},wv={key:!0,ref:!0,__self:!0,__source:!0};function xv(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)bv.call(t,r)&&!wv.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var d=Array(s),f=0;f<s;f++)d[f]=arguments[f+2];l.children=d}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:di,type:e,key:o,ref:i,props:l,_owner:yh.current}}function S6(e,t){return{$$typeof:di,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bh(e){return typeof e=="object"&&e!==null&&e.$$typeof===di}function k6(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mg=/\/+/g;function md(e,t){return typeof e=="object"&&e!==null&&e.key!=null?k6(""+e.key):t.toString(36)}function ss(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case di:case u6:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+md(i,0):r,gg(l)?(n="",e!=null&&(n=e.replace(mg,"$&/")+"/"),ss(l,t,n,"",function(f){return f})):l!=null&&(bh(l)&&(l=S6(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(mg,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",gg(e))for(var s=0;s<e.length;s++){o=e[s];var d=r+md(o,s);i+=ss(o,t,n,d,l)}else if(d=x6(e),typeof d=="function")for(e=d.call(e),s=0;!(o=e.next()).done;)o=o.value,d=r+md(o,s++),i+=ss(o,t,n,d,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Oi(e,t,n){if(e==null)return e;var r=[],l=0;return ss(e,r,"","",function(o){return t.call(n,o,l++)}),r}function C6(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ht={current:null},cs={transition:null},_6={ReactCurrentDispatcher:Ht,ReactCurrentBatchConfig:cs,ReactCurrentOwner:yh};Ce.Children={map:Oi,forEach:function(e,t,n){Oi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Oi(e,function(){t++}),t},toArray:function(e){return Oi(e,function(t){return t})||[]},only:function(e){if(!bh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ce.Component=Ml;Ce.Fragment=h6;Ce.Profiler=p6;Ce.PureComponent=mh;Ce.StrictMode=f6;Ce.Suspense=y6;Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_6;Ce.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=mv({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=yh.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(d in t)bv.call(t,d)&&!wv.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&s!==void 0?s[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){s=Array(d);for(var f=0;f<d;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:di,type:e.type,key:l,ref:o,props:r,_owner:i}};Ce.createContext=function(e){return e={$$typeof:m6,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:g6,_context:e},e.Consumer=e};Ce.createElement=xv;Ce.createFactory=function(e){var t=xv.bind(null,e);return t.type=e,t};Ce.createRef=function(){return{current:null}};Ce.forwardRef=function(e){return{$$typeof:v6,render:e}};Ce.isValidElement=bh;Ce.lazy=function(e){return{$$typeof:w6,_payload:{_status:-1,_result:e},_init:C6}};Ce.memo=function(e,t){return{$$typeof:b6,type:e,compare:t===void 0?null:t}};Ce.startTransition=function(e){var t=cs.transition;cs.transition={};try{e()}finally{cs.transition=t}};Ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ce.useCallback=function(e,t){return Ht.current.useCallback(e,t)};Ce.useContext=function(e){return Ht.current.useContext(e)};Ce.useDebugValue=function(){};Ce.useDeferredValue=function(e){return Ht.current.useDeferredValue(e)};Ce.useEffect=function(e,t){return Ht.current.useEffect(e,t)};Ce.useId=function(){return Ht.current.useId()};Ce.useImperativeHandle=function(e,t,n){return Ht.current.useImperativeHandle(e,t,n)};Ce.useInsertionEffect=function(e,t){return Ht.current.useInsertionEffect(e,t)};Ce.useLayoutEffect=function(e,t){return Ht.current.useLayoutEffect(e,t)};Ce.useMemo=function(e,t){return Ht.current.useMemo(e,t)};Ce.useReducer=function(e,t,n){return Ht.current.useReducer(e,t,n)};Ce.useRef=function(e){return Ht.current.useRef(e)};Ce.useState=function(e){return Ht.current.useState(e)};Ce.useSyncExternalStore=function(e,t,n){return Ht.current.useSyncExternalStore(e,t,n)};Ce.useTransition=function(){return Ht.current.useTransition()};Ce.version="18.2.0";pv.exports=Ce;var j=pv.exports;const Et=Kn(j),vg=d6({__proto__:null,default:Et},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T6=j,$6=Symbol.for("react.element"),E6=Symbol.for("react.fragment"),N6=Object.prototype.hasOwnProperty,I6=T6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L6={key:!0,ref:!0,__self:!0,__source:!0};function Sv(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)N6.call(t,r)&&!L6.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:$6,type:e,key:o,ref:i,props:l,_owner:I6.current}}pc.Fragment=E6;pc.jsx=Sv;pc.jsxs=Sv;fv.exports=pc;var wh=fv.exports;const Rn=wh.Fragment,a=wh.jsx,u=wh.jsxs;var ru={},kv={exports:{}},mn={},Cv={exports:{}},_v={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(U,Z){var J=U.length;U.push(Z);e:for(;0<J;){var le=J-1>>>1,fe=U[le];if(0<l(fe,Z))U[le]=Z,U[J]=fe,J=le;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var Z=U[0],J=U.pop();if(J!==Z){U[0]=J;e:for(var le=0,fe=U.length,Bt=fe>>>1;le<Bt;){var pe=2*(le+1)-1,et=U[pe],qe=pe+1,ft=U[qe];if(0>l(et,J))qe<fe&&0>l(ft,et)?(U[le]=ft,U[qe]=J,le=qe):(U[le]=et,U[pe]=J,le=pe);else if(qe<fe&&0>l(ft,J))U[le]=ft,U[qe]=J,le=qe;else break e}}return Z}function l(U,Z){var J=U.sortIndex-Z.sortIndex;return J!==0?J:U.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var d=[],f=[],m=1,b=null,S=3,I=!1,N=!1,k=!1,L=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(U){for(var Z=n(f);Z!==null;){if(Z.callback===null)r(f);else if(Z.startTime<=U)r(f),Z.sortIndex=Z.expirationTime,t(d,Z);else break;Z=n(f)}}function v(U){if(k=!1,y(U),!N)if(n(d)!==null)N=!0,Be($);else{var Z=n(f);Z!==null&&Ye(v,Z.startTime-U)}}function $(U,Z){N=!1,k&&(k=!1,w(O),O=-1),I=!0;var J=S;try{for(y(Z),b=n(d);b!==null&&(!(b.expirationTime>Z)||U&&!he());){var le=b.callback;if(typeof le=="function"){b.callback=null,S=b.priorityLevel;var fe=le(b.expirationTime<=Z);Z=e.unstable_now(),typeof fe=="function"?b.callback=fe:b===n(d)&&r(d),y(Z)}else r(d);b=n(d)}if(b!==null)var Bt=!0;else{var pe=n(f);pe!==null&&Ye(v,pe.startTime-Z),Bt=!1}return Bt}finally{b=null,S=J,I=!1}}var _=!1,M=null,O=-1,z=5,q=-1;function he(){return!(e.unstable_now()-q<z)}function se(){if(M!==null){var U=e.unstable_now();q=U;var Z=!0;try{Z=M(!0,U)}finally{Z?ze():(_=!1,M=null)}}else _=!1}var ze;if(typeof g=="function")ze=function(){g(se)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,Ve=lt.port2;lt.port1.onmessage=se,ze=function(){Ve.postMessage(null)}}else ze=function(){L(se,0)};function Be(U){M=U,_||(_=!0,ze())}function Ye(U,Z){O=L(function(){U(e.unstable_now())},Z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_continueExecution=function(){N||I||(N=!0,Be($))},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return S},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(U){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var J=S;S=Z;try{return U()}finally{S=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(U,Z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var J=S;S=U;try{return Z()}finally{S=J}},e.unstable_scheduleCallback=function(U,Z,J){var le=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?le+J:le):J=le,U){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=J+fe,U={id:m++,callback:Z,priorityLevel:U,startTime:J,expirationTime:fe,sortIndex:-1},J>le?(U.sortIndex=J,t(f,U),n(d)===null&&U===n(f)&&(k?(w(O),O=-1):k=!0,Ye(v,J-le))):(U.sortIndex=fe,t(d,U),N||I||(N=!0,Be($))),U},e.unstable_shouldYield=he,e.unstable_wrapCallback=function(U){var Z=S;return function(){var J=S;S=Z;try{return U.apply(this,arguments)}finally{S=J}}}})(_v);Cv.exports=_v;var R6=Cv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv=j,gn=R6;function Y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $v=new Set,Bo={};function La(e,t){_l(e,t),_l(e+"Capture",t)}function _l(e,t){for(Bo[e]=t,e=0;e<t.length;e++)$v.add(t[e])}var hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),au=Object.prototype.hasOwnProperty,P6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yg={},bg={};function M6(e){return au.call(bg,e)?!0:au.call(yg,e)?!1:P6.test(e)?bg[e]=!0:(yg[e]=!0,!1)}function F6(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function A6(e,t,n,r){if(t===null||typeof t>"u"||F6(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Gt(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var Lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Lt[e]=new Gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Lt[t]=new Gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Lt[e]=new Gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Lt[e]=new Gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Lt[e]=new Gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Lt[e]=new Gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Lt[e]=new Gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Lt[e]=new Gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Lt[e]=new Gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var xh=/[\-:]([a-z])/g;function Sh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xh,Sh);Lt[t]=new Gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xh,Sh);Lt[t]=new Gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xh,Sh);Lt[t]=new Gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Lt[e]=new Gt(e,1,!1,e.toLowerCase(),null,!1,!1)});Lt.xlinkHref=new Gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Lt[e]=new Gt(e,1,!1,e.toLowerCase(),null,!0,!0)});function kh(e,t,n,r){var l=Lt.hasOwnProperty(t)?Lt[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(A6(t,n,l,r)&&(n=null),r||l===null?M6(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yr=Tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Di=Symbol.for("react.element"),nl=Symbol.for("react.portal"),rl=Symbol.for("react.fragment"),Ch=Symbol.for("react.strict_mode"),lu=Symbol.for("react.profiler"),Ev=Symbol.for("react.provider"),Nv=Symbol.for("react.context"),_h=Symbol.for("react.forward_ref"),ou=Symbol.for("react.suspense"),iu=Symbol.for("react.suspense_list"),Th=Symbol.for("react.memo"),Er=Symbol.for("react.lazy"),Iv=Symbol.for("react.offscreen"),wg=Symbol.iterator;function ro(e){return e===null||typeof e!="object"?null:(e=wg&&e[wg]||e["@@iterator"],typeof e=="function"?e:null)}var at=Object.assign,vd;function mo(e){if(vd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);vd=t&&t[1]||""}return`
`+vd+e}var yd=!1;function bd(e,t){if(!e||yd)return"";yd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var d=`
`+l[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=s);break}}}finally{yd=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?mo(e):""}function O6(e){switch(e.tag){case 5:return mo(e.type);case 16:return mo("Lazy");case 13:return mo("Suspense");case 19:return mo("SuspenseList");case 0:case 2:case 15:return e=bd(e.type,!1),e;case 11:return e=bd(e.type.render,!1),e;case 1:return e=bd(e.type,!0),e;default:return""}}function su(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rl:return"Fragment";case nl:return"Portal";case lu:return"Profiler";case Ch:return"StrictMode";case ou:return"Suspense";case iu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nv:return(e.displayName||"Context")+".Consumer";case Ev:return(e._context.displayName||"Context")+".Provider";case _h:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Th:return t=e.displayName||null,t!==null?t:su(e.type)||"Memo";case Er:t=e._payload,e=e._init;try{return su(e(t))}catch{}}return null}function D6(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return su(t);case 8:return t===Ch?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Hr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function B6(e){var t=Lv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bi(e){e._valueTracker||(e._valueTracker=B6(e))}function Rv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Lv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cu(e,t){var n=t.checked;return at({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xg(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Hr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Pv(e,t){t=t.checked,t!=null&&kh(e,"checked",t,!1)}function du(e,t){Pv(e,t);var n=Hr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?uu(e,t.type,n):t.hasOwnProperty("defaultValue")&&uu(e,t.type,Hr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Sg(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function uu(e,t,n){(t!=="number"||Rs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vo=Array.isArray;function vl(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Hr(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function hu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Y(91));return at({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function kg(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Y(92));if(vo(n)){if(1<n.length)throw Error(Y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Hr(n)}}function Mv(e,t){var n=Hr(t.value),r=Hr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Cg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ji,Av=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ji=ji||document.createElement("div"),ji.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ji.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var To={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},j6=["Webkit","ms","Moz","O"];Object.keys(To).forEach(function(e){j6.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),To[t]=To[e]})});function Ov(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||To.hasOwnProperty(e)&&To[e]?(""+t).trim():t+"px"}function Dv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ov(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var z6=at({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pu(e,t){if(t){if(z6[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Y(62))}}function gu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mu=null;function $h(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vu=null,yl=null,bl=null;function _g(e){if(e=fi(e)){if(typeof vu!="function")throw Error(Y(280));var t=e.stateNode;t&&(t=bc(t),vu(e.stateNode,e.type,t))}}function Bv(e){yl?bl?bl.push(e):bl=[e]:yl=e}function jv(){if(yl){var e=yl,t=bl;if(bl=yl=null,_g(e),t)for(e=0;e<t.length;e++)_g(t[e])}}function zv(e,t){return e(t)}function Uv(){}var wd=!1;function Wv(e,t,n){if(wd)return e(t,n);wd=!0;try{return zv(e,t,n)}finally{wd=!1,(yl!==null||bl!==null)&&(Uv(),jv())}}function zo(e,t){var n=e.stateNode;if(n===null)return null;var r=bc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Y(231,t,typeof n));return n}var yu=!1;if(hr)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){yu=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{yu=!1}function U6(e,t,n,r,l,o,i,s,d){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(m){this.onError(m)}}var $o=!1,Ps=null,Ms=!1,bu=null,W6={onError:function(e){$o=!0,Ps=e}};function H6(e,t,n,r,l,o,i,s,d){$o=!1,Ps=null,U6.apply(W6,arguments)}function G6(e,t,n,r,l,o,i,s,d){if(H6.apply(this,arguments),$o){if($o){var f=Ps;$o=!1,Ps=null}else throw Error(Y(198));Ms||(Ms=!0,bu=f)}}function Ra(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tg(e){if(Ra(e)!==e)throw Error(Y(188))}function V6(e){var t=e.alternate;if(!t){if(t=Ra(e),t===null)throw Error(Y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Tg(l),e;if(o===r)return Tg(l),t;o=o.sibling}throw Error(Y(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(Y(189))}}if(n.alternate!==r)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?e:t}function Gv(e){return e=V6(e),e!==null?Vv(e):null}function Vv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vv(e);if(t!==null)return t;e=e.sibling}return null}var Yv=gn.unstable_scheduleCallback,$g=gn.unstable_cancelCallback,Y6=gn.unstable_shouldYield,q6=gn.unstable_requestPaint,it=gn.unstable_now,Z6=gn.unstable_getCurrentPriorityLevel,Eh=gn.unstable_ImmediatePriority,qv=gn.unstable_UserBlockingPriority,Fs=gn.unstable_NormalPriority,Q6=gn.unstable_LowPriority,Zv=gn.unstable_IdlePriority,gc=null,Zn=null;function K6(e){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(gc,e,void 0,(e.current.flags&128)===128)}catch{}}var Dn=Math.clz32?Math.clz32:ew,X6=Math.log,J6=Math.LN2;function ew(e){return e>>>=0,e===0?32:31-(X6(e)/J6|0)|0}var zi=64,Ui=4194304;function yo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function As(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=yo(s):(o&=i,o!==0&&(r=yo(o)))}else i=n&~l,i!==0?r=yo(i):o!==0&&(r=yo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Dn(t),l=1<<n,r|=e[n],t&=~l;return r}function tw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Dn(o),s=1<<i,d=l[i];d===-1?(!(s&n)||s&r)&&(l[i]=tw(s,t)):d<=t&&(e.expiredLanes|=s),o&=~s}}function wu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qv(){var e=zi;return zi<<=1,!(zi&4194240)&&(zi=64),e}function xd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ui(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Dn(t),e[t]=n}function rw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Dn(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function Nh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Dn(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var De=0;function Kv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xv,Ih,Jv,e1,t1,xu=!1,Wi=[],Ar=null,Or=null,Dr=null,Uo=new Map,Wo=new Map,Ir=[],aw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eg(e,t){switch(e){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":Uo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(t.pointerId)}}function lo(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=fi(t),t!==null&&Ih(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function lw(e,t,n,r,l){switch(t){case"focusin":return Ar=lo(Ar,e,t,n,r,l),!0;case"dragenter":return Or=lo(Or,e,t,n,r,l),!0;case"mouseover":return Dr=lo(Dr,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Uo.set(o,lo(Uo.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Wo.set(o,lo(Wo.get(o)||null,e,t,n,r,l)),!0}return!1}function n1(e){var t=ma(e.target);if(t!==null){var n=Ra(t);if(n!==null){if(t=n.tag,t===13){if(t=Hv(n),t!==null){e.blockedOn=t,t1(e.priority,function(){Jv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ds(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Su(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);mu=r,n.target.dispatchEvent(r),mu=null}else return t=fi(n),t!==null&&Ih(t),e.blockedOn=n,!1;t.shift()}return!0}function Ng(e,t,n){ds(e)&&n.delete(t)}function ow(){xu=!1,Ar!==null&&ds(Ar)&&(Ar=null),Or!==null&&ds(Or)&&(Or=null),Dr!==null&&ds(Dr)&&(Dr=null),Uo.forEach(Ng),Wo.forEach(Ng)}function oo(e,t){e.blockedOn===t&&(e.blockedOn=null,xu||(xu=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,ow)))}function Ho(e){function t(l){return oo(l,e)}if(0<Wi.length){oo(Wi[0],e);for(var n=1;n<Wi.length;n++){var r=Wi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ar!==null&&oo(Ar,e),Or!==null&&oo(Or,e),Dr!==null&&oo(Dr,e),Uo.forEach(t),Wo.forEach(t),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)n1(n),n.blockedOn===null&&Ir.shift()}var wl=yr.ReactCurrentBatchConfig,Os=!0;function iw(e,t,n,r){var l=De,o=wl.transition;wl.transition=null;try{De=1,Lh(e,t,n,r)}finally{De=l,wl.transition=o}}function sw(e,t,n,r){var l=De,o=wl.transition;wl.transition=null;try{De=4,Lh(e,t,n,r)}finally{De=l,wl.transition=o}}function Lh(e,t,n,r){if(Os){var l=Su(e,t,n,r);if(l===null)Ld(e,t,r,Ds,n),Eg(e,r);else if(lw(l,e,t,n,r))r.stopPropagation();else if(Eg(e,r),t&4&&-1<aw.indexOf(e)){for(;l!==null;){var o=fi(l);if(o!==null&&Xv(o),o=Su(e,t,n,r),o===null&&Ld(e,t,r,Ds,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Ld(e,t,r,null,n)}}var Ds=null;function Su(e,t,n,r){if(Ds=null,e=$h(r),e=ma(e),e!==null)if(t=Ra(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ds=e,null}function r1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Z6()){case Eh:return 1;case qv:return 4;case Fs:case Q6:return 16;case Zv:return 536870912;default:return 16}default:return 16}}var Rr=null,Rh=null,us=null;function a1(){if(us)return us;var e,t=Rh,n=t.length,r,l="value"in Rr?Rr.value:Rr.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return us=l.slice(e,1<r?1-r:void 0)}function hs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hi(){return!0}function Ig(){return!1}function vn(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Hi:Ig,this.isPropagationStopped=Ig,this}return at(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hi)},persist:function(){},isPersistent:Hi}),t}var Fl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ph=vn(Fl),hi=at({},Fl,{view:0,detail:0}),cw=vn(hi),Sd,kd,io,mc=at({},hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==io&&(io&&e.type==="mousemove"?(Sd=e.screenX-io.screenX,kd=e.screenY-io.screenY):kd=Sd=0,io=e),Sd)},movementY:function(e){return"movementY"in e?e.movementY:kd}}),Lg=vn(mc),dw=at({},mc,{dataTransfer:0}),uw=vn(dw),hw=at({},hi,{relatedTarget:0}),Cd=vn(hw),fw=at({},Fl,{animationName:0,elapsedTime:0,pseudoElement:0}),pw=vn(fw),gw=at({},Fl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mw=vn(gw),vw=at({},Fl,{data:0}),Rg=vn(vw),yw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ww={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ww[e])?!!t[e]:!1}function Mh(){return xw}var Sw=at({},hi,{key:function(e){if(e.key){var t=yw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mh,charCode:function(e){return e.type==="keypress"?hs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kw=vn(Sw),Cw=at({},mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pg=vn(Cw),_w=at({},hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mh}),Tw=vn(_w),$w=at({},Fl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ew=vn($w),Nw=at({},mc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Iw=vn(Nw),Lw=[9,13,27,32],Fh=hr&&"CompositionEvent"in window,Eo=null;hr&&"documentMode"in document&&(Eo=document.documentMode);var Rw=hr&&"TextEvent"in window&&!Eo,l1=hr&&(!Fh||Eo&&8<Eo&&11>=Eo),Mg=String.fromCharCode(32),Fg=!1;function o1(e,t){switch(e){case"keyup":return Lw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function i1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var al=!1;function Pw(e,t){switch(e){case"compositionend":return i1(t);case"keypress":return t.which!==32?null:(Fg=!0,Mg);case"textInput":return e=t.data,e===Mg&&Fg?null:e;default:return null}}function Mw(e,t){if(al)return e==="compositionend"||!Fh&&o1(e,t)?(e=a1(),us=Rh=Rr=null,al=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return l1&&t.locale!=="ko"?null:t.data;default:return null}}var Fw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ag(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fw[e.type]:t==="textarea"}function s1(e,t,n,r){Bv(r),t=Bs(t,"onChange"),0<t.length&&(n=new Ph("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var No=null,Go=null;function Aw(e){b1(e,0)}function vc(e){var t=il(e);if(Rv(t))return e}function Ow(e,t){if(e==="change")return t}var c1=!1;if(hr){var _d;if(hr){var Td="oninput"in document;if(!Td){var Og=document.createElement("div");Og.setAttribute("oninput","return;"),Td=typeof Og.oninput=="function"}_d=Td}else _d=!1;c1=_d&&(!document.documentMode||9<document.documentMode)}function Dg(){No&&(No.detachEvent("onpropertychange",d1),Go=No=null)}function d1(e){if(e.propertyName==="value"&&vc(Go)){var t=[];s1(t,Go,e,$h(e)),Wv(Aw,t)}}function Dw(e,t,n){e==="focusin"?(Dg(),No=t,Go=n,No.attachEvent("onpropertychange",d1)):e==="focusout"&&Dg()}function Bw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vc(Go)}function jw(e,t){if(e==="click")return vc(t)}function zw(e,t){if(e==="input"||e==="change")return vc(t)}function Uw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jn=typeof Object.is=="function"?Object.is:Uw;function Vo(e,t){if(jn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!au.call(t,l)||!jn(e[l],t[l]))return!1}return!0}function Bg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jg(e,t){var n=Bg(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bg(n)}}function u1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?u1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function h1(){for(var e=window,t=Rs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rs(e.document)}return t}function Ah(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ww(e){var t=h1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&u1(n.ownerDocument.documentElement,n)){if(r!==null&&Ah(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=jg(n,o);var i=jg(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hw=hr&&"documentMode"in document&&11>=document.documentMode,ll=null,ku=null,Io=null,Cu=!1;function zg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cu||ll==null||ll!==Rs(r)||(r=ll,"selectionStart"in r&&Ah(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Io&&Vo(Io,r)||(Io=r,r=Bs(ku,"onSelect"),0<r.length&&(t=new Ph("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ll)))}function Gi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ol={animationend:Gi("Animation","AnimationEnd"),animationiteration:Gi("Animation","AnimationIteration"),animationstart:Gi("Animation","AnimationStart"),transitionend:Gi("Transition","TransitionEnd")},$d={},f1={};hr&&(f1=document.createElement("div").style,"AnimationEvent"in window||(delete ol.animationend.animation,delete ol.animationiteration.animation,delete ol.animationstart.animation),"TransitionEvent"in window||delete ol.transitionend.transition);function yc(e){if($d[e])return $d[e];if(!ol[e])return e;var t=ol[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in f1)return $d[e]=t[n];return e}var p1=yc("animationend"),g1=yc("animationiteration"),m1=yc("animationstart"),v1=yc("transitionend"),y1=new Map,Ug="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(e,t){y1.set(e,t),La(t,[e])}for(var Ed=0;Ed<Ug.length;Ed++){var Nd=Ug[Ed],Gw=Nd.toLowerCase(),Vw=Nd[0].toUpperCase()+Nd.slice(1);Yr(Gw,"on"+Vw)}Yr(p1,"onAnimationEnd");Yr(g1,"onAnimationIteration");Yr(m1,"onAnimationStart");Yr("dblclick","onDoubleClick");Yr("focusin","onFocus");Yr("focusout","onBlur");Yr(v1,"onTransitionEnd");_l("onMouseEnter",["mouseout","mouseover"]);_l("onMouseLeave",["mouseout","mouseover"]);_l("onPointerEnter",["pointerout","pointerover"]);_l("onPointerLeave",["pointerout","pointerover"]);La("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));La("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));La("onBeforeInput",["compositionend","keypress","textInput","paste"]);La("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));La("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));La("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yw=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function Wg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,G6(r,t,void 0,e),e.currentTarget=null}function b1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],d=s.instance,f=s.currentTarget;if(s=s.listener,d!==o&&l.isPropagationStopped())break e;Wg(l,s,f),o=d}else for(i=0;i<r.length;i++){if(s=r[i],d=s.instance,f=s.currentTarget,s=s.listener,d!==o&&l.isPropagationStopped())break e;Wg(l,s,f),o=d}}}if(Ms)throw e=bu,Ms=!1,bu=null,e}function Qe(e,t){var n=t[Nu];n===void 0&&(n=t[Nu]=new Set);var r=e+"__bubble";n.has(r)||(w1(t,e,2,!1),n.add(r))}function Id(e,t,n){var r=0;t&&(r|=4),w1(n,e,r,t)}var Vi="_reactListening"+Math.random().toString(36).slice(2);function Yo(e){if(!e[Vi]){e[Vi]=!0,$v.forEach(function(n){n!=="selectionchange"&&(Yw.has(n)||Id(n,!1,e),Id(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vi]||(t[Vi]=!0,Id("selectionchange",!1,t))}}function w1(e,t,n,r){switch(r1(t)){case 1:var l=iw;break;case 4:l=sw;break;default:l=Lh}n=l.bind(null,t,n,e),l=void 0,!yu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ld(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var d=i.tag;if((d===3||d===4)&&(d=i.stateNode.containerInfo,d===l||d.nodeType===8&&d.parentNode===l))return;i=i.return}for(;s!==null;){if(i=ma(s),i===null)return;if(d=i.tag,d===5||d===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Wv(function(){var f=o,m=$h(n),b=[];e:{var S=y1.get(e);if(S!==void 0){var I=Ph,N=e;switch(e){case"keypress":if(hs(n)===0)break e;case"keydown":case"keyup":I=kw;break;case"focusin":N="focus",I=Cd;break;case"focusout":N="blur",I=Cd;break;case"beforeblur":case"afterblur":I=Cd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Lg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=uw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=Tw;break;case p1:case g1:case m1:I=pw;break;case v1:I=Ew;break;case"scroll":I=cw;break;case"wheel":I=Iw;break;case"copy":case"cut":case"paste":I=mw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Pg}var k=(t&4)!==0,L=!k&&e==="scroll",w=k?S!==null?S+"Capture":null:S;k=[];for(var g=f,y;g!==null;){y=g;var v=y.stateNode;if(y.tag===5&&v!==null&&(y=v,w!==null&&(v=zo(g,w),v!=null&&k.push(qo(g,v,y)))),L)break;g=g.return}0<k.length&&(S=new I(S,N,null,n,m),b.push({event:S,listeners:k}))}}if(!(t&7)){e:{if(S=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",S&&n!==mu&&(N=n.relatedTarget||n.fromElement)&&(ma(N)||N[fr]))break e;if((I||S)&&(S=m.window===m?m:(S=m.ownerDocument)?S.defaultView||S.parentWindow:window,I?(N=n.relatedTarget||n.toElement,I=f,N=N?ma(N):null,N!==null&&(L=Ra(N),N!==L||N.tag!==5&&N.tag!==6)&&(N=null)):(I=null,N=f),I!==N)){if(k=Lg,v="onMouseLeave",w="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(k=Pg,v="onPointerLeave",w="onPointerEnter",g="pointer"),L=I==null?S:il(I),y=N==null?S:il(N),S=new k(v,g+"leave",I,n,m),S.target=L,S.relatedTarget=y,v=null,ma(m)===f&&(k=new k(w,g+"enter",N,n,m),k.target=y,k.relatedTarget=L,v=k),L=v,I&&N)t:{for(k=I,w=N,g=0,y=k;y;y=Ka(y))g++;for(y=0,v=w;v;v=Ka(v))y++;for(;0<g-y;)k=Ka(k),g--;for(;0<y-g;)w=Ka(w),y--;for(;g--;){if(k===w||w!==null&&k===w.alternate)break t;k=Ka(k),w=Ka(w)}k=null}else k=null;I!==null&&Hg(b,S,I,k,!1),N!==null&&L!==null&&Hg(b,L,N,k,!0)}}e:{if(S=f?il(f):window,I=S.nodeName&&S.nodeName.toLowerCase(),I==="select"||I==="input"&&S.type==="file")var $=Ow;else if(Ag(S))if(c1)$=zw;else{$=Bw;var _=Dw}else(I=S.nodeName)&&I.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&($=jw);if($&&($=$(e,f))){s1(b,$,n,m);break e}_&&_(e,S,f),e==="focusout"&&(_=S._wrapperState)&&_.controlled&&S.type==="number"&&uu(S,"number",S.value)}switch(_=f?il(f):window,e){case"focusin":(Ag(_)||_.contentEditable==="true")&&(ll=_,ku=f,Io=null);break;case"focusout":Io=ku=ll=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,zg(b,n,m);break;case"selectionchange":if(Hw)break;case"keydown":case"keyup":zg(b,n,m)}var M;if(Fh)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else al?o1(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(l1&&n.locale!=="ko"&&(al||O!=="onCompositionStart"?O==="onCompositionEnd"&&al&&(M=a1()):(Rr=m,Rh="value"in Rr?Rr.value:Rr.textContent,al=!0)),_=Bs(f,O),0<_.length&&(O=new Rg(O,e,null,n,m),b.push({event:O,listeners:_}),M?O.data=M:(M=i1(n),M!==null&&(O.data=M)))),(M=Rw?Pw(e,n):Mw(e,n))&&(f=Bs(f,"onBeforeInput"),0<f.length&&(m=new Rg("onBeforeInput","beforeinput",null,n,m),b.push({event:m,listeners:f}),m.data=M))}b1(b,t)})}function qo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Bs(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=zo(e,n),o!=null&&r.unshift(qo(e,o,l)),o=zo(e,t),o!=null&&r.push(qo(e,o,l))),e=e.return}return r}function Ka(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hg(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,d=s.alternate,f=s.stateNode;if(d!==null&&d===r)break;s.tag===5&&f!==null&&(s=f,l?(d=zo(n,o),d!=null&&i.unshift(qo(n,d,s))):l||(d=zo(n,o),d!=null&&i.push(qo(n,d,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var qw=/\r\n?/g,Zw=/\u0000|\uFFFD/g;function Gg(e){return(typeof e=="string"?e:""+e).replace(qw,`
`).replace(Zw,"")}function Yi(e,t,n){if(t=Gg(t),Gg(e)!==t&&n)throw Error(Y(425))}function js(){}var _u=null,Tu=null;function $u(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Eu=typeof setTimeout=="function"?setTimeout:void 0,Qw=typeof clearTimeout=="function"?clearTimeout:void 0,Vg=typeof Promise=="function"?Promise:void 0,Kw=typeof queueMicrotask=="function"?queueMicrotask:typeof Vg<"u"?function(e){return Vg.resolve(null).then(e).catch(Xw)}:Eu;function Xw(e){setTimeout(function(){throw e})}function Rd(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Ho(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Ho(t)}function Br(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Al=Math.random().toString(36).slice(2),qn="__reactFiber$"+Al,Zo="__reactProps$"+Al,fr="__reactContainer$"+Al,Nu="__reactEvents$"+Al,Jw="__reactListeners$"+Al,e8="__reactHandles$"+Al;function ma(e){var t=e[qn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fr]||n[qn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Yg(e);e!==null;){if(n=e[qn])return n;e=Yg(e)}return t}e=n,n=e.parentNode}return null}function fi(e){return e=e[qn]||e[fr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function il(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Y(33))}function bc(e){return e[Zo]||null}var Iu=[],sl=-1;function qr(e){return{current:e}}function Xe(e){0>sl||(e.current=Iu[sl],Iu[sl]=null,sl--)}function Ge(e,t){sl++,Iu[sl]=e.current,e.current=t}var Gr={},Dt=qr(Gr),tn=qr(!1),_a=Gr;function Tl(e,t){var n=e.type.contextTypes;if(!n)return Gr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function nn(e){return e=e.childContextTypes,e!=null}function zs(){Xe(tn),Xe(Dt)}function qg(e,t,n){if(Dt.current!==Gr)throw Error(Y(168));Ge(Dt,t),Ge(tn,n)}function x1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(Y(108,D6(e)||"Unknown",l));return at({},n,r)}function Us(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gr,_a=Dt.current,Ge(Dt,e),Ge(tn,tn.current),!0}function Zg(e,t,n){var r=e.stateNode;if(!r)throw Error(Y(169));n?(e=x1(e,t,_a),r.__reactInternalMemoizedMergedChildContext=e,Xe(tn),Xe(Dt),Ge(Dt,e)):Xe(tn),Ge(tn,n)}var ir=null,wc=!1,Pd=!1;function S1(e){ir===null?ir=[e]:ir.push(e)}function t8(e){wc=!0,S1(e)}function Zr(){if(!Pd&&ir!==null){Pd=!0;var e=0,t=De;try{var n=ir;for(De=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ir=null,wc=!1}catch(l){throw ir!==null&&(ir=ir.slice(e+1)),Yv(Eh,Zr),l}finally{De=t,Pd=!1}}return null}var cl=[],dl=0,Ws=null,Hs=0,wn=[],xn=0,Ta=null,sr=1,cr="";function ua(e,t){cl[dl++]=Hs,cl[dl++]=Ws,Ws=e,Hs=t}function k1(e,t,n){wn[xn++]=sr,wn[xn++]=cr,wn[xn++]=Ta,Ta=e;var r=sr;e=cr;var l=32-Dn(r)-1;r&=~(1<<l),n+=1;var o=32-Dn(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,sr=1<<32-Dn(t)+l|n<<l|r,cr=o+e}else sr=1<<o|n<<l|r,cr=e}function Oh(e){e.return!==null&&(ua(e,1),k1(e,1,0))}function Dh(e){for(;e===Ws;)Ws=cl[--dl],cl[dl]=null,Hs=cl[--dl],cl[dl]=null;for(;e===Ta;)Ta=wn[--xn],wn[xn]=null,cr=wn[--xn],wn[xn]=null,sr=wn[--xn],wn[xn]=null}var pn=null,fn=null,Je=!1,An=null;function C1(e,t){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qg(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,pn=e,fn=Br(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,pn=e,fn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ta!==null?{id:sr,overflow:cr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,pn=e,fn=null,!0):!1;default:return!1}}function Lu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ru(e){if(Je){var t=fn;if(t){var n=t;if(!Qg(e,t)){if(Lu(e))throw Error(Y(418));t=Br(n.nextSibling);var r=pn;t&&Qg(e,t)?C1(r,n):(e.flags=e.flags&-4097|2,Je=!1,pn=e)}}else{if(Lu(e))throw Error(Y(418));e.flags=e.flags&-4097|2,Je=!1,pn=e}}}function Kg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pn=e}function qi(e){if(e!==pn)return!1;if(!Je)return Kg(e),Je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$u(e.type,e.memoizedProps)),t&&(t=fn)){if(Lu(e))throw _1(),Error(Y(418));for(;t;)C1(e,t),t=Br(t.nextSibling)}if(Kg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){fn=Br(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}fn=null}}else fn=pn?Br(e.stateNode.nextSibling):null;return!0}function _1(){for(var e=fn;e;)e=Br(e.nextSibling)}function $l(){fn=pn=null,Je=!1}function Bh(e){An===null?An=[e]:An.push(e)}var n8=yr.ReactCurrentBatchConfig;function Pn(e,t){if(e&&e.defaultProps){t=at({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Gs=qr(null),Vs=null,ul=null,jh=null;function zh(){jh=ul=Vs=null}function Uh(e){var t=Gs.current;Xe(Gs),e._currentValue=t}function Pu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xl(e,t){Vs=e,jh=ul=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(en=!0),e.firstContext=null)}function Cn(e){var t=e._currentValue;if(jh!==e)if(e={context:e,memoizedValue:t,next:null},ul===null){if(Vs===null)throw Error(Y(308));ul=e,Vs.dependencies={lanes:0,firstContext:e}}else ul=ul.next=e;return t}var va=null;function Wh(e){va===null?va=[e]:va.push(e)}function T1(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Wh(t)):(n.next=l.next,l.next=n),t.interleaved=n,pr(e,r)}function pr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nr=!1;function Hh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ne&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,pr(e,n)}return l=r.interleaved,l===null?(t.next=t,Wh(r)):(t.next=l.next,l.next=t),r.interleaved=t,pr(e,n)}function fs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nh(e,n)}}function Xg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ys(e,t,n,r){var l=e.updateQueue;Nr=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var d=s,f=d.next;d.next=null,i===null?o=f:i.next=f,i=d;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==i&&(s===null?m.firstBaseUpdate=f:s.next=f,m.lastBaseUpdate=d))}if(o!==null){var b=l.baseState;i=0,m=f=d=null,s=o;do{var S=s.lane,I=s.eventTime;if((r&S)===S){m!==null&&(m=m.next={eventTime:I,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var N=e,k=s;switch(S=t,I=n,k.tag){case 1:if(N=k.payload,typeof N=="function"){b=N.call(I,b,S);break e}b=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=k.payload,S=typeof N=="function"?N.call(I,b,S):N,S==null)break e;b=at({},b,S);break e;case 2:Nr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,S=l.effects,S===null?l.effects=[s]:S.push(s))}else I={eventTime:I,lane:S,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(f=m=I,d=b):m=m.next=I,i|=S;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;S=s,s=S.next,S.next=null,l.lastBaseUpdate=S,l.shared.pending=null}}while(1);if(m===null&&(d=b),l.baseState=d,l.firstBaseUpdate=f,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Ea|=i,e.lanes=i,e.memoizedState=b}}function Jg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(Y(191,l));l.call(r)}}}var E1=new Tv.Component().refs;function Mu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:at({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xc={isMounted:function(e){return(e=e._reactInternals)?Ra(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Wt(),l=Ur(e),o=dr(r,l);o.payload=t,n!=null&&(o.callback=n),t=jr(e,o,l),t!==null&&(Bn(t,e,l,r),fs(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Wt(),l=Ur(e),o=dr(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=jr(e,o,l),t!==null&&(Bn(t,e,l,r),fs(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Wt(),r=Ur(e),l=dr(n,r);l.tag=2,t!=null&&(l.callback=t),t=jr(e,l,r),t!==null&&(Bn(t,e,r,n),fs(t,e,r))}};function em(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Vo(n,r)||!Vo(l,o):!0}function N1(e,t,n){var r=!1,l=Gr,o=t.contextType;return typeof o=="object"&&o!==null?o=Cn(o):(l=nn(t)?_a:Dt.current,r=t.contextTypes,o=(r=r!=null)?Tl(e,l):Gr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function tm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xc.enqueueReplaceState(t,t.state,null)}function Fu(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs=E1,Hh(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Cn(o):(o=nn(t)?_a:Dt.current,l.context=Tl(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Mu(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&xc.enqueueReplaceState(l,l.state,null),Ys(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function so(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Y(309));var r=n.stateNode}if(!r)throw Error(Y(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;s===E1&&(s=l.refs={}),i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(Y(284));if(!n._owner)throw Error(Y(290,e))}return e}function Zi(e,t){throw e=Object.prototype.toString.call(t),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nm(e){var t=e._init;return t(e._payload)}function I1(e){function t(w,g){if(e){var y=w.deletions;y===null?(w.deletions=[g],w.flags|=16):y.push(g)}}function n(w,g){if(!e)return null;for(;g!==null;)t(w,g),g=g.sibling;return null}function r(w,g){for(w=new Map;g!==null;)g.key!==null?w.set(g.key,g):w.set(g.index,g),g=g.sibling;return w}function l(w,g){return w=Wr(w,g),w.index=0,w.sibling=null,w}function o(w,g,y){return w.index=y,e?(y=w.alternate,y!==null?(y=y.index,y<g?(w.flags|=2,g):y):(w.flags|=2,g)):(w.flags|=1048576,g)}function i(w){return e&&w.alternate===null&&(w.flags|=2),w}function s(w,g,y,v){return g===null||g.tag!==6?(g=jd(y,w.mode,v),g.return=w,g):(g=l(g,y),g.return=w,g)}function d(w,g,y,v){var $=y.type;return $===rl?m(w,g,y.props.children,v,y.key):g!==null&&(g.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Er&&nm($)===g.type)?(v=l(g,y.props),v.ref=so(w,g,y),v.return=w,v):(v=bs(y.type,y.key,y.props,null,w.mode,v),v.ref=so(w,g,y),v.return=w,v)}function f(w,g,y,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=zd(y,w.mode,v),g.return=w,g):(g=l(g,y.children||[]),g.return=w,g)}function m(w,g,y,v,$){return g===null||g.tag!==7?(g=Ca(y,w.mode,v,$),g.return=w,g):(g=l(g,y),g.return=w,g)}function b(w,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=jd(""+g,w.mode,y),g.return=w,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Di:return y=bs(g.type,g.key,g.props,null,w.mode,y),y.ref=so(w,null,g),y.return=w,y;case nl:return g=zd(g,w.mode,y),g.return=w,g;case Er:var v=g._init;return b(w,v(g._payload),y)}if(vo(g)||ro(g))return g=Ca(g,w.mode,y,null),g.return=w,g;Zi(w,g)}return null}function S(w,g,y,v){var $=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return $!==null?null:s(w,g,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Di:return y.key===$?d(w,g,y,v):null;case nl:return y.key===$?f(w,g,y,v):null;case Er:return $=y._init,S(w,g,$(y._payload),v)}if(vo(y)||ro(y))return $!==null?null:m(w,g,y,v,null);Zi(w,y)}return null}function I(w,g,y,v,$){if(typeof v=="string"&&v!==""||typeof v=="number")return w=w.get(y)||null,s(g,w,""+v,$);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Di:return w=w.get(v.key===null?y:v.key)||null,d(g,w,v,$);case nl:return w=w.get(v.key===null?y:v.key)||null,f(g,w,v,$);case Er:var _=v._init;return I(w,g,y,_(v._payload),$)}if(vo(v)||ro(v))return w=w.get(y)||null,m(g,w,v,$,null);Zi(g,v)}return null}function N(w,g,y,v){for(var $=null,_=null,M=g,O=g=0,z=null;M!==null&&O<y.length;O++){M.index>O?(z=M,M=null):z=M.sibling;var q=S(w,M,y[O],v);if(q===null){M===null&&(M=z);break}e&&M&&q.alternate===null&&t(w,M),g=o(q,g,O),_===null?$=q:_.sibling=q,_=q,M=z}if(O===y.length)return n(w,M),Je&&ua(w,O),$;if(M===null){for(;O<y.length;O++)M=b(w,y[O],v),M!==null&&(g=o(M,g,O),_===null?$=M:_.sibling=M,_=M);return Je&&ua(w,O),$}for(M=r(w,M);O<y.length;O++)z=I(M,w,O,y[O],v),z!==null&&(e&&z.alternate!==null&&M.delete(z.key===null?O:z.key),g=o(z,g,O),_===null?$=z:_.sibling=z,_=z);return e&&M.forEach(function(he){return t(w,he)}),Je&&ua(w,O),$}function k(w,g,y,v){var $=ro(y);if(typeof $!="function")throw Error(Y(150));if(y=$.call(y),y==null)throw Error(Y(151));for(var _=$=null,M=g,O=g=0,z=null,q=y.next();M!==null&&!q.done;O++,q=y.next()){M.index>O?(z=M,M=null):z=M.sibling;var he=S(w,M,q.value,v);if(he===null){M===null&&(M=z);break}e&&M&&he.alternate===null&&t(w,M),g=o(he,g,O),_===null?$=he:_.sibling=he,_=he,M=z}if(q.done)return n(w,M),Je&&ua(w,O),$;if(M===null){for(;!q.done;O++,q=y.next())q=b(w,q.value,v),q!==null&&(g=o(q,g,O),_===null?$=q:_.sibling=q,_=q);return Je&&ua(w,O),$}for(M=r(w,M);!q.done;O++,q=y.next())q=I(M,w,O,q.value,v),q!==null&&(e&&q.alternate!==null&&M.delete(q.key===null?O:q.key),g=o(q,g,O),_===null?$=q:_.sibling=q,_=q);return e&&M.forEach(function(se){return t(w,se)}),Je&&ua(w,O),$}function L(w,g,y,v){if(typeof y=="object"&&y!==null&&y.type===rl&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Di:e:{for(var $=y.key,_=g;_!==null;){if(_.key===$){if($=y.type,$===rl){if(_.tag===7){n(w,_.sibling),g=l(_,y.props.children),g.return=w,w=g;break e}}else if(_.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Er&&nm($)===_.type){n(w,_.sibling),g=l(_,y.props),g.ref=so(w,_,y),g.return=w,w=g;break e}n(w,_);break}else t(w,_);_=_.sibling}y.type===rl?(g=Ca(y.props.children,w.mode,v,y.key),g.return=w,w=g):(v=bs(y.type,y.key,y.props,null,w.mode,v),v.ref=so(w,g,y),v.return=w,w=v)}return i(w);case nl:e:{for(_=y.key;g!==null;){if(g.key===_)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(w,g.sibling),g=l(g,y.children||[]),g.return=w,w=g;break e}else{n(w,g);break}else t(w,g);g=g.sibling}g=zd(y,w.mode,v),g.return=w,w=g}return i(w);case Er:return _=y._init,L(w,g,_(y._payload),v)}if(vo(y))return N(w,g,y,v);if(ro(y))return k(w,g,y,v);Zi(w,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(w,g.sibling),g=l(g,y),g.return=w,w=g):(n(w,g),g=jd(y,w.mode,v),g.return=w,w=g),i(w)):n(w,g)}return L}var El=I1(!0),L1=I1(!1),pi={},Qn=qr(pi),Qo=qr(pi),Ko=qr(pi);function ya(e){if(e===pi)throw Error(Y(174));return e}function Gh(e,t){switch(Ge(Ko,t),Ge(Qo,e),Ge(Qn,pi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fu(t,e)}Xe(Qn),Ge(Qn,t)}function Nl(){Xe(Qn),Xe(Qo),Xe(Ko)}function R1(e){ya(Ko.current);var t=ya(Qn.current),n=fu(t,e.type);t!==n&&(Ge(Qo,e),Ge(Qn,n))}function Vh(e){Qo.current===e&&(Xe(Qn),Xe(Qo))}var tt=qr(0);function qs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Md=[];function Yh(){for(var e=0;e<Md.length;e++)Md[e]._workInProgressVersionPrimary=null;Md.length=0}var ps=yr.ReactCurrentDispatcher,Fd=yr.ReactCurrentBatchConfig,$a=0,rt=null,vt=null,St=null,Zs=!1,Lo=!1,Xo=0,r8=0;function Ft(){throw Error(Y(321))}function qh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jn(e[n],t[n]))return!1;return!0}function Zh(e,t,n,r,l,o){if($a=o,rt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ps.current=e===null||e.memoizedState===null?i8:s8,e=n(r,l),Lo){o=0;do{if(Lo=!1,Xo=0,25<=o)throw Error(Y(301));o+=1,St=vt=null,t.updateQueue=null,ps.current=c8,e=n(r,l)}while(Lo)}if(ps.current=Qs,t=vt!==null&&vt.next!==null,$a=0,St=vt=rt=null,Zs=!1,t)throw Error(Y(300));return e}function Qh(){var e=Xo!==0;return Xo=0,e}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?rt.memoizedState=St=e:St=St.next=e,St}function _n(){if(vt===null){var e=rt.alternate;e=e!==null?e.memoizedState:null}else e=vt.next;var t=St===null?rt.memoizedState:St.next;if(t!==null)St=t,vt=e;else{if(e===null)throw Error(Y(310));vt=e,e={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},St===null?rt.memoizedState=St=e:St=St.next=e}return St}function Jo(e,t){return typeof t=="function"?t(e):t}function Ad(e){var t=_n(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var r=vt,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,d=null,f=o;do{var m=f.lane;if(($a&m)===m)d!==null&&(d=d.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var b={lane:m,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};d===null?(s=d=b,i=r):d=d.next=b,rt.lanes|=m,Ea|=m}f=f.next}while(f!==null&&f!==o);d===null?i=r:d.next=s,jn(r,t.memoizedState)||(en=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,rt.lanes|=o,Ea|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Od(e){var t=_n(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);jn(o,t.memoizedState)||(en=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function P1(){}function M1(e,t){var n=rt,r=_n(),l=t(),o=!jn(r.memoizedState,l);if(o&&(r.memoizedState=l,en=!0),r=r.queue,Kh(O1.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||St!==null&&St.memoizedState.tag&1){if(n.flags|=2048,ei(9,A1.bind(null,n,r,l,t),void 0,null),kt===null)throw Error(Y(349));$a&30||F1(n,t,l)}return l}function F1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=rt.updateQueue,t===null?(t={lastEffect:null,stores:null},rt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function A1(e,t,n,r){t.value=n,t.getSnapshot=r,D1(t)&&B1(e)}function O1(e,t,n){return n(function(){D1(t)&&B1(e)})}function D1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jn(e,n)}catch{return!0}}function B1(e){var t=pr(e,1);t!==null&&Bn(t,e,1,-1)}function rm(e){var t=Vn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:e},t.queue=e,e=e.dispatch=o8.bind(null,rt,e),[t.memoizedState,e]}function ei(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=rt.updateQueue,t===null?(t={lastEffect:null,stores:null},rt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function j1(){return _n().memoizedState}function gs(e,t,n,r){var l=Vn();rt.flags|=e,l.memoizedState=ei(1|t,n,void 0,r===void 0?null:r)}function Sc(e,t,n,r){var l=_n();r=r===void 0?null:r;var o=void 0;if(vt!==null){var i=vt.memoizedState;if(o=i.destroy,r!==null&&qh(r,i.deps)){l.memoizedState=ei(t,n,o,r);return}}rt.flags|=e,l.memoizedState=ei(1|t,n,o,r)}function am(e,t){return gs(8390656,8,e,t)}function Kh(e,t){return Sc(2048,8,e,t)}function z1(e,t){return Sc(4,2,e,t)}function U1(e,t){return Sc(4,4,e,t)}function W1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function H1(e,t,n){return n=n!=null?n.concat([e]):null,Sc(4,4,W1.bind(null,t,e),n)}function Xh(){}function G1(e,t){var n=_n();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function V1(e,t){var n=_n();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Y1(e,t,n){return $a&21?(jn(n,t)||(n=Qv(),rt.lanes|=n,Ea|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,en=!0),e.memoizedState=n)}function a8(e,t){var n=De;De=n!==0&&4>n?n:4,e(!0);var r=Fd.transition;Fd.transition={};try{e(!1),t()}finally{De=n,Fd.transition=r}}function q1(){return _n().memoizedState}function l8(e,t,n){var r=Ur(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Z1(e))Q1(t,n);else if(n=T1(e,t,n,r),n!==null){var l=Wt();Bn(n,e,r,l),K1(n,t,r)}}function o8(e,t,n){var r=Ur(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Z1(e))Q1(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,jn(s,i)){var d=t.interleaved;d===null?(l.next=l,Wh(t)):(l.next=d.next,d.next=l),t.interleaved=l;return}}catch{}finally{}n=T1(e,t,l,r),n!==null&&(l=Wt(),Bn(n,e,r,l),K1(n,t,r))}}function Z1(e){var t=e.alternate;return e===rt||t!==null&&t===rt}function Q1(e,t){Lo=Zs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function K1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nh(e,n)}}var Qs={readContext:Cn,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},i8={readContext:Cn,useCallback:function(e,t){return Vn().memoizedState=[e,t===void 0?null:t],e},useContext:Cn,useEffect:am,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,gs(4194308,4,W1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gs(4194308,4,e,t)},useInsertionEffect:function(e,t){return gs(4,2,e,t)},useMemo:function(e,t){var n=Vn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Vn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=l8.bind(null,rt,e),[r.memoizedState,e]},useRef:function(e){var t=Vn();return e={current:e},t.memoizedState=e},useState:rm,useDebugValue:Xh,useDeferredValue:function(e){return Vn().memoizedState=e},useTransition:function(){var e=rm(!1),t=e[0];return e=a8.bind(null,e[1]),Vn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=rt,l=Vn();if(Je){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=t(),kt===null)throw Error(Y(349));$a&30||F1(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,am(O1.bind(null,r,o,e),[e]),r.flags|=2048,ei(9,A1.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Vn(),t=kt.identifierPrefix;if(Je){var n=cr,r=sr;n=(r&~(1<<32-Dn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=r8++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},s8={readContext:Cn,useCallback:G1,useContext:Cn,useEffect:Kh,useImperativeHandle:H1,useInsertionEffect:z1,useLayoutEffect:U1,useMemo:V1,useReducer:Ad,useRef:j1,useState:function(){return Ad(Jo)},useDebugValue:Xh,useDeferredValue:function(e){var t=_n();return Y1(t,vt.memoizedState,e)},useTransition:function(){var e=Ad(Jo)[0],t=_n().memoizedState;return[e,t]},useMutableSource:P1,useSyncExternalStore:M1,useId:q1,unstable_isNewReconciler:!1},c8={readContext:Cn,useCallback:G1,useContext:Cn,useEffect:Kh,useImperativeHandle:H1,useInsertionEffect:z1,useLayoutEffect:U1,useMemo:V1,useReducer:Od,useRef:j1,useState:function(){return Od(Jo)},useDebugValue:Xh,useDeferredValue:function(e){var t=_n();return vt===null?t.memoizedState=e:Y1(t,vt.memoizedState,e)},useTransition:function(){var e=Od(Jo)[0],t=_n().memoizedState;return[e,t]},useMutableSource:P1,useSyncExternalStore:M1,useId:q1,unstable_isNewReconciler:!1};function Il(e,t){try{var n="",r=t;do n+=O6(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Dd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Au(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var d8=typeof WeakMap=="function"?WeakMap:Map;function X1(e,t,n){n=dr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xs||(Xs=!0,Vu=r),Au(e,t)},n}function J1(e,t,n){n=dr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Au(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Au(e,t),typeof r!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function lm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new d8;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=C8.bind(null,e,t,n),t.then(e,e))}function om(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function im(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dr(-1,1),t.tag=2,jr(n,t,1))),n.lanes|=1),e)}var u8=yr.ReactCurrentOwner,en=!1;function zt(e,t,n,r){t.child=e===null?L1(t,null,n,r):El(t,e.child,n,r)}function sm(e,t,n,r,l){n=n.render;var o=t.ref;return xl(t,l),r=Zh(e,t,n,r,o,l),n=Qh(),e!==null&&!en?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,gr(e,t,l)):(Je&&n&&Oh(t),t.flags|=1,zt(e,t,r,l),t.child)}function cm(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!of(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,e2(e,t,o,r,l)):(e=bs(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Vo,n(i,r)&&e.ref===t.ref)return gr(e,t,l)}return t.flags|=1,e=Wr(o,r),e.ref=t.ref,e.return=t,t.child=e}function e2(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Vo(o,r)&&e.ref===t.ref)if(en=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(en=!0);else return t.lanes=e.lanes,gr(e,t,l)}return Ou(e,t,n,r,l)}function t2(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(fl,sn),sn|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ge(fl,sn),sn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ge(fl,sn),sn|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ge(fl,sn),sn|=r;return zt(e,t,l,n),t.child}function n2(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ou(e,t,n,r,l){var o=nn(n)?_a:Dt.current;return o=Tl(t,o),xl(t,l),n=Zh(e,t,n,r,o,l),r=Qh(),e!==null&&!en?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,gr(e,t,l)):(Je&&r&&Oh(t),t.flags|=1,zt(e,t,n,l),t.child)}function dm(e,t,n,r,l){if(nn(n)){var o=!0;Us(t)}else o=!1;if(xl(t,l),t.stateNode===null)ms(e,t),N1(t,n,r),Fu(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var d=i.context,f=n.contextType;typeof f=="object"&&f!==null?f=Cn(f):(f=nn(n)?_a:Dt.current,f=Tl(t,f));var m=n.getDerivedStateFromProps,b=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||d!==f)&&tm(t,i,r,f),Nr=!1;var S=t.memoizedState;i.state=S,Ys(t,r,i,l),d=t.memoizedState,s!==r||S!==d||tn.current||Nr?(typeof m=="function"&&(Mu(t,n,m,r),d=t.memoizedState),(s=Nr||em(t,n,s,r,S,d,f))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),i.props=r,i.state=d,i.context=f,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,$1(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:Pn(t.type,s),i.props=f,b=t.pendingProps,S=i.context,d=n.contextType,typeof d=="object"&&d!==null?d=Cn(d):(d=nn(n)?_a:Dt.current,d=Tl(t,d));var I=n.getDerivedStateFromProps;(m=typeof I=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==b||S!==d)&&tm(t,i,r,d),Nr=!1,S=t.memoizedState,i.state=S,Ys(t,r,i,l);var N=t.memoizedState;s!==b||S!==N||tn.current||Nr?(typeof I=="function"&&(Mu(t,n,I,r),N=t.memoizedState),(f=Nr||em(t,n,f,r,S,N,d)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,N,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,N,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),i.props=r,i.state=N,i.context=d,r=f):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),r=!1)}return Du(e,t,n,r,o,l)}function Du(e,t,n,r,l,o){n2(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&Zg(t,n,!1),gr(e,t,o);r=t.stateNode,u8.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=El(t,e.child,null,o),t.child=El(t,null,s,o)):zt(e,t,s,o),t.memoizedState=r.state,l&&Zg(t,n,!0),t.child}function r2(e){var t=e.stateNode;t.pendingContext?qg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qg(e,t.context,!1),Gh(e,t.containerInfo)}function um(e,t,n,r,l){return $l(),Bh(l),t.flags|=256,zt(e,t,n,r),t.child}var Bu={dehydrated:null,treeContext:null,retryLane:0};function ju(e){return{baseLanes:e,cachePool:null,transitions:null}}function a2(e,t,n){var r=t.pendingProps,l=tt.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Ge(tt,l&1),e===null)return Ru(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=_c(i,r,0,null),e=Ca(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ju(n),t.memoizedState=Bu,e):Jh(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return h8(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var d={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Wr(l,d),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=Wr(s,o):(o=Ca(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?ju(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Bu,r}return o=e.child,e=o.sibling,r=Wr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Jh(e,t){return t=_c({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Qi(e,t,n,r){return r!==null&&Bh(r),El(t,e.child,null,n),e=Jh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function h8(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Dd(Error(Y(422))),Qi(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=_c({mode:"visible",children:r.children},l,0,null),o=Ca(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&El(t,e.child,null,i),t.child.memoizedState=ju(i),t.memoizedState=Bu,o);if(!(t.mode&1))return Qi(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(Y(419)),r=Dd(o,r,void 0),Qi(e,t,i,r)}if(s=(i&e.childLanes)!==0,en||s){if(r=kt,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,pr(e,l),Bn(r,e,l,-1))}return lf(),r=Dd(Error(Y(421))),Qi(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=_8.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,fn=Br(l.nextSibling),pn=t,Je=!0,An=null,e!==null&&(wn[xn++]=sr,wn[xn++]=cr,wn[xn++]=Ta,sr=e.id,cr=e.overflow,Ta=t),t=Jh(t,r.children),t.flags|=4096,t)}function hm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pu(e.return,t,n)}function Bd(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function l2(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(zt(e,t,r.children,n),r=tt.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hm(e,n,t);else if(e.tag===19)hm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ge(tt,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&qs(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Bd(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&qs(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Bd(t,!0,n,null,o);break;case"together":Bd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ms(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ea|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Y(153));if(t.child!==null){for(e=t.child,n=Wr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function f8(e,t,n){switch(t.tag){case 3:r2(t),$l();break;case 5:R1(t);break;case 1:nn(t.type)&&Us(t);break;case 4:Gh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;Ge(Gs,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ge(tt,tt.current&1),t.flags|=128,null):n&t.child.childLanes?a2(e,t,n):(Ge(tt,tt.current&1),e=gr(e,t,n),e!==null?e.sibling:null);Ge(tt,tt.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return l2(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ge(tt,tt.current),r)break;return null;case 22:case 23:return t.lanes=0,t2(e,t,n)}return gr(e,t,n)}var o2,zu,i2,s2;o2=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zu=function(){};i2=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,ya(Qn.current);var o=null;switch(n){case"input":l=cu(e,l),r=cu(e,r),o=[];break;case"select":l=at({},l,{value:void 0}),r=at({},r,{value:void 0}),o=[];break;case"textarea":l=hu(e,l),r=hu(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=js)}pu(n,r);var i;n=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var s=l[f];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Bo.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var d=r[f];if(s=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&d!==s&&(d!=null||s!=null))if(f==="style")if(s){for(i in s)!s.hasOwnProperty(i)||d&&d.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in d)d.hasOwnProperty(i)&&s[i]!==d[i]&&(n||(n={}),n[i]=d[i])}else n||(o||(o=[]),o.push(f,n)),n=d;else f==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,s=s?s.__html:void 0,d!=null&&s!==d&&(o=o||[]).push(f,d)):f==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(f,""+d):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(f)?(d!=null&&f==="onScroll"&&Qe("scroll",e),o||s===d||(o=[])):(o=o||[]).push(f,d))}n&&(o=o||[]).push("style",n);var f=o;(t.updateQueue=f)&&(t.flags|=4)}};s2=function(e,t,n,r){n!==r&&(t.flags|=4)};function co(e,t){if(!Je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function At(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function p8(e,t,n){var r=t.pendingProps;switch(Dh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(t),null;case 1:return nn(t.type)&&zs(),At(t),null;case 3:return r=t.stateNode,Nl(),Xe(tn),Xe(Dt),Yh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,An!==null&&(Zu(An),An=null))),zu(e,t),At(t),null;case 5:Vh(t);var l=ya(Ko.current);if(n=t.type,e!==null&&t.stateNode!=null)i2(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(Y(166));return At(t),null}if(e=ya(Qn.current),qi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[qn]=t,r[Zo]=o,e=(t.mode&1)!==0,n){case"dialog":Qe("cancel",r),Qe("close",r);break;case"iframe":case"object":case"embed":Qe("load",r);break;case"video":case"audio":for(l=0;l<bo.length;l++)Qe(bo[l],r);break;case"source":Qe("error",r);break;case"img":case"image":case"link":Qe("error",r),Qe("load",r);break;case"details":Qe("toggle",r);break;case"input":xg(r,o),Qe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Qe("invalid",r);break;case"textarea":kg(r,o),Qe("invalid",r)}pu(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Yi(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Yi(r.textContent,s,e),l=["children",""+s]):Bo.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Qe("scroll",r)}switch(n){case"input":Bi(r),Sg(r,o,!0);break;case"textarea":Bi(r),Cg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=js)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[qn]=t,e[Zo]=r,o2(e,t,!1,!1),t.stateNode=e;e:{switch(i=gu(n,r),n){case"dialog":Qe("cancel",e),Qe("close",e),l=r;break;case"iframe":case"object":case"embed":Qe("load",e),l=r;break;case"video":case"audio":for(l=0;l<bo.length;l++)Qe(bo[l],e);l=r;break;case"source":Qe("error",e),l=r;break;case"img":case"image":case"link":Qe("error",e),Qe("load",e),l=r;break;case"details":Qe("toggle",e),l=r;break;case"input":xg(e,r),l=cu(e,r),Qe("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=at({},r,{value:void 0}),Qe("invalid",e);break;case"textarea":kg(e,r),l=hu(e,r),Qe("invalid",e);break;default:l=r}pu(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var d=s[o];o==="style"?Dv(e,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Av(e,d)):o==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&jo(e,d):typeof d=="number"&&jo(e,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Bo.hasOwnProperty(o)?d!=null&&o==="onScroll"&&Qe("scroll",e):d!=null&&kh(e,o,d,i))}switch(n){case"input":Bi(e),Sg(e,r,!1);break;case"textarea":Bi(e),Cg(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Hr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?vl(e,!!r.multiple,o,!1):r.defaultValue!=null&&vl(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=js)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return At(t),null;case 6:if(e&&t.stateNode!=null)s2(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(Y(166));if(n=ya(Ko.current),ya(Qn.current),qi(t)){if(r=t.stateNode,n=t.memoizedProps,r[qn]=t,(o=r.nodeValue!==n)&&(e=pn,e!==null))switch(e.tag){case 3:Yi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qn]=t,t.stateNode=r}return At(t),null;case 13:if(Xe(tt),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Je&&fn!==null&&t.mode&1&&!(t.flags&128))_1(),$l(),t.flags|=98560,o=!1;else if(o=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(Y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Y(317));o[qn]=t}else $l(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;At(t),o=!1}else An!==null&&(Zu(An),An=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||tt.current&1?yt===0&&(yt=3):lf())),t.updateQueue!==null&&(t.flags|=4),At(t),null);case 4:return Nl(),zu(e,t),e===null&&Yo(t.stateNode.containerInfo),At(t),null;case 10:return Uh(t.type._context),At(t),null;case 17:return nn(t.type)&&zs(),At(t),null;case 19:if(Xe(tt),o=t.memoizedState,o===null)return At(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)co(o,!1);else{if(yt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=qs(e),i!==null){for(t.flags|=128,co(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ge(tt,tt.current&1|2),t.child}e=e.sibling}o.tail!==null&&it()>Ll&&(t.flags|=128,r=!0,co(o,!1),t.lanes=4194304)}else{if(!r)if(e=qs(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),co(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Je)return At(t),null}else 2*it()-o.renderingStartTime>Ll&&n!==1073741824&&(t.flags|=128,r=!0,co(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=it(),t.sibling=null,n=tt.current,Ge(tt,r?n&1|2:n&1),t):(At(t),null);case 22:case 23:return af(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?sn&1073741824&&(At(t),t.subtreeFlags&6&&(t.flags|=8192)):At(t),null;case 24:return null;case 25:return null}throw Error(Y(156,t.tag))}function g8(e,t){switch(Dh(t),t.tag){case 1:return nn(t.type)&&zs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nl(),Xe(tn),Xe(Dt),Yh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vh(t),null;case 13:if(Xe(tt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Y(340));$l()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Xe(tt),null;case 4:return Nl(),null;case 10:return Uh(t.type._context),null;case 22:case 23:return af(),null;case 24:return null;default:return null}}var Ki=!1,Ot=!1,m8=typeof WeakSet=="function"?WeakSet:Set,te=null;function hl(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ot(e,t,r)}else n.current=null}function Uu(e,t,n){try{n()}catch(r){ot(e,t,r)}}var fm=!1;function v8(e,t){if(_u=Os,e=h1(),Ah(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,d=-1,f=0,m=0,b=e,S=null;t:for(;;){for(var I;b!==n||l!==0&&b.nodeType!==3||(s=i+l),b!==o||r!==0&&b.nodeType!==3||(d=i+r),b.nodeType===3&&(i+=b.nodeValue.length),(I=b.firstChild)!==null;)S=b,b=I;for(;;){if(b===e)break t;if(S===n&&++f===l&&(s=i),S===o&&++m===r&&(d=i),(I=b.nextSibling)!==null)break;b=S,S=b.parentNode}b=I}n=s===-1||d===-1?null:{start:s,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tu={focusedElem:e,selectionRange:n},Os=!1,te=t;te!==null;)if(t=te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,te=e;else for(;te!==null;){t=te;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var k=N.memoizedProps,L=N.memoizedState,w=t.stateNode,g=w.getSnapshotBeforeUpdate(t.elementType===t.type?k:Pn(t.type,k),L);w.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(v){ot(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,te=e;break}te=t.return}return N=fm,fm=!1,N}function Ro(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Uu(t,n,o)}l=l.next}while(l!==r)}}function kc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function c2(e){var t=e.alternate;t!==null&&(e.alternate=null,c2(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qn],delete t[Zo],delete t[Nu],delete t[Jw],delete t[e8])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function d2(e){return e.tag===5||e.tag===3||e.tag===4}function pm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||d2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=js));else if(r!==4&&(e=e.child,e!==null))for(Hu(e,t,n),e=e.sibling;e!==null;)Hu(e,t,n),e=e.sibling}function Gu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gu(e,t,n),e=e.sibling;e!==null;)Gu(e,t,n),e=e.sibling}var Tt=null,Fn=!1;function _r(e,t,n){for(n=n.child;n!==null;)u2(e,t,n),n=n.sibling}function u2(e,t,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(gc,n)}catch{}switch(n.tag){case 5:Ot||hl(n,t);case 6:var r=Tt,l=Fn;Tt=null,_r(e,t,n),Tt=r,Fn=l,Tt!==null&&(Fn?(e=Tt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Tt.removeChild(n.stateNode));break;case 18:Tt!==null&&(Fn?(e=Tt,n=n.stateNode,e.nodeType===8?Rd(e.parentNode,n):e.nodeType===1&&Rd(e,n),Ho(e)):Rd(Tt,n.stateNode));break;case 4:r=Tt,l=Fn,Tt=n.stateNode.containerInfo,Fn=!0,_r(e,t,n),Tt=r,Fn=l;break;case 0:case 11:case 14:case 15:if(!Ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Uu(n,t,i),l=l.next}while(l!==r)}_r(e,t,n);break;case 1:if(!Ot&&(hl(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ot(n,t,s)}_r(e,t,n);break;case 21:_r(e,t,n);break;case 22:n.mode&1?(Ot=(r=Ot)||n.memoizedState!==null,_r(e,t,n),Ot=r):_r(e,t,n);break;default:_r(e,t,n)}}function gm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new m8),t.forEach(function(r){var l=T8.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ln(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:Tt=s.stateNode,Fn=!1;break e;case 3:Tt=s.stateNode.containerInfo,Fn=!0;break e;case 4:Tt=s.stateNode.containerInfo,Fn=!0;break e}s=s.return}if(Tt===null)throw Error(Y(160));u2(o,i,l),Tt=null,Fn=!1;var d=l.alternate;d!==null&&(d.return=null),l.return=null}catch(f){ot(l,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)h2(t,e),t=t.sibling}function h2(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ln(t,e),zn(e),r&4){try{Ro(3,e,e.return),kc(3,e)}catch(k){ot(e,e.return,k)}try{Ro(5,e,e.return)}catch(k){ot(e,e.return,k)}}break;case 1:Ln(t,e),zn(e),r&512&&n!==null&&hl(n,n.return);break;case 5:if(Ln(t,e),zn(e),r&512&&n!==null&&hl(n,n.return),e.flags&32){var l=e.stateNode;try{jo(l,"")}catch(k){ot(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Pv(l,o),gu(s,i);var f=gu(s,o);for(i=0;i<d.length;i+=2){var m=d[i],b=d[i+1];m==="style"?Dv(l,b):m==="dangerouslySetInnerHTML"?Av(l,b):m==="children"?jo(l,b):kh(l,m,b,f)}switch(s){case"input":du(l,o);break;case"textarea":Mv(l,o);break;case"select":var S=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var I=o.value;I!=null?vl(l,!!o.multiple,I,!1):S!==!!o.multiple&&(o.defaultValue!=null?vl(l,!!o.multiple,o.defaultValue,!0):vl(l,!!o.multiple,o.multiple?[]:"",!1))}l[Zo]=o}catch(k){ot(e,e.return,k)}}break;case 6:if(Ln(t,e),zn(e),r&4){if(e.stateNode===null)throw Error(Y(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(k){ot(e,e.return,k)}}break;case 3:if(Ln(t,e),zn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ho(t.containerInfo)}catch(k){ot(e,e.return,k)}break;case 4:Ln(t,e),zn(e);break;case 13:Ln(t,e),zn(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(nf=it())),r&4&&gm(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Ot=(f=Ot)||m,Ln(t,e),Ot=f):Ln(t,e),zn(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!m&&e.mode&1)for(te=e,m=e.child;m!==null;){for(b=te=m;te!==null;){switch(S=te,I=S.child,S.tag){case 0:case 11:case 14:case 15:Ro(4,S,S.return);break;case 1:hl(S,S.return);var N=S.stateNode;if(typeof N.componentWillUnmount=="function"){r=S,n=S.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(k){ot(r,n,k)}}break;case 5:hl(S,S.return);break;case 22:if(S.memoizedState!==null){vm(b);continue}}I!==null?(I.return=S,te=I):vm(b)}m=m.sibling}e:for(m=null,b=e;;){if(b.tag===5){if(m===null){m=b;try{l=b.stateNode,f?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=b.stateNode,d=b.memoizedProps.style,i=d!=null&&d.hasOwnProperty("display")?d.display:null,s.style.display=Ov("display",i))}catch(k){ot(e,e.return,k)}}}else if(b.tag===6){if(m===null)try{b.stateNode.nodeValue=f?"":b.memoizedProps}catch(k){ot(e,e.return,k)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;m===b&&(m=null),b=b.return}m===b&&(m=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:Ln(t,e),zn(e),r&4&&gm(e);break;case 21:break;default:Ln(t,e),zn(e)}}function zn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(d2(n)){var r=n;break e}n=n.return}throw Error(Y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(jo(l,""),r.flags&=-33);var o=pm(e);Gu(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=pm(e);Hu(e,s,i);break;default:throw Error(Y(161))}}catch(d){ot(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function y8(e,t,n){te=e,f2(e)}function f2(e,t,n){for(var r=(e.mode&1)!==0;te!==null;){var l=te,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Ki;if(!i){var s=l.alternate,d=s!==null&&s.memoizedState!==null||Ot;s=Ki;var f=Ot;if(Ki=i,(Ot=d)&&!f)for(te=l;te!==null;)i=te,d=i.child,i.tag===22&&i.memoizedState!==null?ym(l):d!==null?(d.return=i,te=d):ym(l);for(;o!==null;)te=o,f2(o),o=o.sibling;te=l,Ki=s,Ot=f}mm(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,te=o):mm(e)}}function mm(e){for(;te!==null;){var t=te;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ot||kc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ot)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Pn(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Jg(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Jg(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var m=f.memoizedState;if(m!==null){var b=m.dehydrated;b!==null&&Ho(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}Ot||t.flags&512&&Wu(t)}catch(S){ot(t,t.return,S)}}if(t===e){te=null;break}if(n=t.sibling,n!==null){n.return=t.return,te=n;break}te=t.return}}function vm(e){for(;te!==null;){var t=te;if(t===e){te=null;break}var n=t.sibling;if(n!==null){n.return=t.return,te=n;break}te=t.return}}function ym(e){for(;te!==null;){var t=te;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{kc(4,t)}catch(d){ot(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(d){ot(t,l,d)}}var o=t.return;try{Wu(t)}catch(d){ot(t,o,d)}break;case 5:var i=t.return;try{Wu(t)}catch(d){ot(t,i,d)}}}catch(d){ot(t,t.return,d)}if(t===e){te=null;break}var s=t.sibling;if(s!==null){s.return=t.return,te=s;break}te=t.return}}var b8=Math.ceil,Ks=yr.ReactCurrentDispatcher,ef=yr.ReactCurrentOwner,kn=yr.ReactCurrentBatchConfig,Ne=0,kt=null,ut=null,It=0,sn=0,fl=qr(0),yt=0,ti=null,Ea=0,Cc=0,tf=0,Po=null,Jt=null,nf=0,Ll=1/0,lr=null,Xs=!1,Vu=null,zr=null,Xi=!1,Pr=null,Js=0,Mo=0,Yu=null,vs=-1,ys=0;function Wt(){return Ne&6?it():vs!==-1?vs:vs=it()}function Ur(e){return e.mode&1?Ne&2&&It!==0?It&-It:n8.transition!==null?(ys===0&&(ys=Qv()),ys):(e=De,e!==0||(e=window.event,e=e===void 0?16:r1(e.type)),e):1}function Bn(e,t,n,r){if(50<Mo)throw Mo=0,Yu=null,Error(Y(185));ui(e,n,r),(!(Ne&2)||e!==kt)&&(e===kt&&(!(Ne&2)&&(Cc|=n),yt===4&&Lr(e,It)),rn(e,r),n===1&&Ne===0&&!(t.mode&1)&&(Ll=it()+500,wc&&Zr()))}function rn(e,t){var n=e.callbackNode;nw(e,t);var r=As(e,e===kt?It:0);if(r===0)n!==null&&$g(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$g(n),t===1)e.tag===0?t8(bm.bind(null,e)):S1(bm.bind(null,e)),Kw(function(){!(Ne&6)&&Zr()}),n=null;else{switch(Kv(r)){case 1:n=Eh;break;case 4:n=qv;break;case 16:n=Fs;break;case 536870912:n=Zv;break;default:n=Fs}n=x2(n,p2.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function p2(e,t){if(vs=-1,ys=0,Ne&6)throw Error(Y(327));var n=e.callbackNode;if(Sl()&&e.callbackNode!==n)return null;var r=As(e,e===kt?It:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ec(e,r);else{t=r;var l=Ne;Ne|=2;var o=m2();(kt!==e||It!==t)&&(lr=null,Ll=it()+500,ka(e,t));do try{S8();break}catch(s){g2(e,s)}while(1);zh(),Ks.current=o,Ne=l,ut!==null?t=0:(kt=null,It=0,t=yt)}if(t!==0){if(t===2&&(l=wu(e),l!==0&&(r=l,t=qu(e,l))),t===1)throw n=ti,ka(e,0),Lr(e,r),rn(e,it()),n;if(t===6)Lr(e,r);else{if(l=e.current.alternate,!(r&30)&&!w8(l)&&(t=ec(e,r),t===2&&(o=wu(e),o!==0&&(r=o,t=qu(e,o))),t===1))throw n=ti,ka(e,0),Lr(e,r),rn(e,it()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(Y(345));case 2:ha(e,Jt,lr);break;case 3:if(Lr(e,r),(r&130023424)===r&&(t=nf+500-it(),10<t)){if(As(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Wt(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Eu(ha.bind(null,e,Jt,lr),t);break}ha(e,Jt,lr);break;case 4:if(Lr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Dn(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=it()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*b8(r/1960))-r,10<r){e.timeoutHandle=Eu(ha.bind(null,e,Jt,lr),r);break}ha(e,Jt,lr);break;case 5:ha(e,Jt,lr);break;default:throw Error(Y(329))}}}return rn(e,it()),e.callbackNode===n?p2.bind(null,e):null}function qu(e,t){var n=Po;return e.current.memoizedState.isDehydrated&&(ka(e,t).flags|=256),e=ec(e,t),e!==2&&(t=Jt,Jt=n,t!==null&&Zu(t)),e}function Zu(e){Jt===null?Jt=e:Jt.push.apply(Jt,e)}function w8(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!jn(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lr(e,t){for(t&=~tf,t&=~Cc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Dn(t),r=1<<n;e[n]=-1,t&=~r}}function bm(e){if(Ne&6)throw Error(Y(327));Sl();var t=As(e,0);if(!(t&1))return rn(e,it()),null;var n=ec(e,t);if(e.tag!==0&&n===2){var r=wu(e);r!==0&&(t=r,n=qu(e,r))}if(n===1)throw n=ti,ka(e,0),Lr(e,t),rn(e,it()),n;if(n===6)throw Error(Y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ha(e,Jt,lr),rn(e,it()),null}function rf(e,t){var n=Ne;Ne|=1;try{return e(t)}finally{Ne=n,Ne===0&&(Ll=it()+500,wc&&Zr())}}function Na(e){Pr!==null&&Pr.tag===0&&!(Ne&6)&&Sl();var t=Ne;Ne|=1;var n=kn.transition,r=De;try{if(kn.transition=null,De=1,e)return e()}finally{De=r,kn.transition=n,Ne=t,!(Ne&6)&&Zr()}}function af(){sn=fl.current,Xe(fl)}function ka(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qw(n)),ut!==null)for(n=ut.return;n!==null;){var r=n;switch(Dh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zs();break;case 3:Nl(),Xe(tn),Xe(Dt),Yh();break;case 5:Vh(r);break;case 4:Nl();break;case 13:Xe(tt);break;case 19:Xe(tt);break;case 10:Uh(r.type._context);break;case 22:case 23:af()}n=n.return}if(kt=e,ut=e=Wr(e.current,null),It=sn=t,yt=0,ti=null,tf=Cc=Ea=0,Jt=Po=null,va!==null){for(t=0;t<va.length;t++)if(n=va[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}va=null}return e}function g2(e,t){do{var n=ut;try{if(zh(),ps.current=Qs,Zs){for(var r=rt.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Zs=!1}if($a=0,St=vt=rt=null,Lo=!1,Xo=0,ef.current=null,n===null||n.return===null){yt=1,ti=t,ut=null;break}e:{var o=e,i=n.return,s=n,d=t;if(t=It,s.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var f=d,m=s,b=m.tag;if(!(m.mode&1)&&(b===0||b===11||b===15)){var S=m.alternate;S?(m.updateQueue=S.updateQueue,m.memoizedState=S.memoizedState,m.lanes=S.lanes):(m.updateQueue=null,m.memoizedState=null)}var I=om(i);if(I!==null){I.flags&=-257,im(I,i,s,o,t),I.mode&1&&lm(o,f,t),t=I,d=f;var N=t.updateQueue;if(N===null){var k=new Set;k.add(d),t.updateQueue=k}else N.add(d);break e}else{if(!(t&1)){lm(o,f,t),lf();break e}d=Error(Y(426))}}else if(Je&&s.mode&1){var L=om(i);if(L!==null){!(L.flags&65536)&&(L.flags|=256),im(L,i,s,o,t),Bh(Il(d,s));break e}}o=d=Il(d,s),yt!==4&&(yt=2),Po===null?Po=[o]:Po.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var w=X1(o,d,t);Xg(o,w);break e;case 1:s=d;var g=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(zr===null||!zr.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=J1(o,s,t);Xg(o,v);break e}}o=o.return}while(o!==null)}y2(n)}catch($){t=$,ut===n&&n!==null&&(ut=n=n.return);continue}break}while(1)}function m2(){var e=Ks.current;return Ks.current=Qs,e===null?Qs:e}function lf(){(yt===0||yt===3||yt===2)&&(yt=4),kt===null||!(Ea&268435455)&&!(Cc&268435455)||Lr(kt,It)}function ec(e,t){var n=Ne;Ne|=2;var r=m2();(kt!==e||It!==t)&&(lr=null,ka(e,t));do try{x8();break}catch(l){g2(e,l)}while(1);if(zh(),Ne=n,Ks.current=r,ut!==null)throw Error(Y(261));return kt=null,It=0,yt}function x8(){for(;ut!==null;)v2(ut)}function S8(){for(;ut!==null&&!Y6();)v2(ut)}function v2(e){var t=w2(e.alternate,e,sn);e.memoizedProps=e.pendingProps,t===null?y2(e):ut=t,ef.current=null}function y2(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=g8(n,t),n!==null){n.flags&=32767,ut=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{yt=6,ut=null;return}}else if(n=p8(n,t,sn),n!==null){ut=n;return}if(t=t.sibling,t!==null){ut=t;return}ut=t=e}while(t!==null);yt===0&&(yt=5)}function ha(e,t,n){var r=De,l=kn.transition;try{kn.transition=null,De=1,k8(e,t,n,r)}finally{kn.transition=l,De=r}return null}function k8(e,t,n,r){do Sl();while(Pr!==null);if(Ne&6)throw Error(Y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(rw(e,o),e===kt&&(ut=kt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xi||(Xi=!0,x2(Fs,function(){return Sl(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=kn.transition,kn.transition=null;var i=De;De=1;var s=Ne;Ne|=4,ef.current=null,v8(e,n),h2(n,e),Ww(Tu),Os=!!_u,Tu=_u=null,e.current=n,y8(n),q6(),Ne=s,De=i,kn.transition=o}else e.current=n;if(Xi&&(Xi=!1,Pr=e,Js=l),o=e.pendingLanes,o===0&&(zr=null),K6(n.stateNode),rn(e,it()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Xs)throw Xs=!1,e=Vu,Vu=null,e;return Js&1&&e.tag!==0&&Sl(),o=e.pendingLanes,o&1?e===Yu?Mo++:(Mo=0,Yu=e):Mo=0,Zr(),null}function Sl(){if(Pr!==null){var e=Kv(Js),t=kn.transition,n=De;try{if(kn.transition=null,De=16>e?16:e,Pr===null)var r=!1;else{if(e=Pr,Pr=null,Js=0,Ne&6)throw Error(Y(331));var l=Ne;for(Ne|=4,te=e.current;te!==null;){var o=te,i=o.child;if(te.flags&16){var s=o.deletions;if(s!==null){for(var d=0;d<s.length;d++){var f=s[d];for(te=f;te!==null;){var m=te;switch(m.tag){case 0:case 11:case 15:Ro(8,m,o)}var b=m.child;if(b!==null)b.return=m,te=b;else for(;te!==null;){m=te;var S=m.sibling,I=m.return;if(c2(m),m===f){te=null;break}if(S!==null){S.return=I,te=S;break}te=I}}}var N=o.alternate;if(N!==null){var k=N.child;if(k!==null){N.child=null;do{var L=k.sibling;k.sibling=null,k=L}while(k!==null)}}te=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,te=i;else e:for(;te!==null;){if(o=te,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ro(9,o,o.return)}var w=o.sibling;if(w!==null){w.return=o.return,te=w;break e}te=o.return}}var g=e.current;for(te=g;te!==null;){i=te;var y=i.child;if(i.subtreeFlags&2064&&y!==null)y.return=i,te=y;else e:for(i=g;te!==null;){if(s=te,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:kc(9,s)}}catch($){ot(s,s.return,$)}if(s===i){te=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,te=v;break e}te=s.return}}if(Ne=l,Zr(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(gc,e)}catch{}r=!0}return r}finally{De=n,kn.transition=t}}return!1}function wm(e,t,n){t=Il(n,t),t=X1(e,t,1),e=jr(e,t,1),t=Wt(),e!==null&&(ui(e,1,t),rn(e,t))}function ot(e,t,n){if(e.tag===3)wm(e,e,n);else for(;t!==null;){if(t.tag===3){wm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zr===null||!zr.has(r))){e=Il(n,e),e=J1(t,e,1),t=jr(t,e,1),e=Wt(),t!==null&&(ui(t,1,e),rn(t,e));break}}t=t.return}}function C8(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Wt(),e.pingedLanes|=e.suspendedLanes&n,kt===e&&(It&n)===n&&(yt===4||yt===3&&(It&130023424)===It&&500>it()-nf?ka(e,0):tf|=n),rn(e,t)}function b2(e,t){t===0&&(e.mode&1?(t=Ui,Ui<<=1,!(Ui&130023424)&&(Ui=4194304)):t=1);var n=Wt();e=pr(e,t),e!==null&&(ui(e,t,n),rn(e,n))}function _8(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),b2(e,n)}function T8(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Y(314))}r!==null&&r.delete(t),b2(e,n)}var w2;w2=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||tn.current)en=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return en=!1,f8(e,t,n);en=!!(e.flags&131072)}else en=!1,Je&&t.flags&1048576&&k1(t,Hs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ms(e,t),e=t.pendingProps;var l=Tl(t,Dt.current);xl(t,n),l=Zh(null,t,r,e,l,n);var o=Qh();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nn(r)?(o=!0,Us(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Hh(t),l.updater=xc,t.stateNode=l,l._reactInternals=t,Fu(t,r,e,n),t=Du(null,t,r,!0,o,n)):(t.tag=0,Je&&o&&Oh(t),zt(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ms(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=E8(r),e=Pn(r,e),l){case 0:t=Ou(null,t,r,e,n);break e;case 1:t=dm(null,t,r,e,n);break e;case 11:t=sm(null,t,r,e,n);break e;case 14:t=cm(null,t,r,Pn(r.type,e),n);break e}throw Error(Y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pn(r,l),Ou(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pn(r,l),dm(e,t,r,l,n);case 3:e:{if(r2(t),e===null)throw Error(Y(387));r=t.pendingProps,o=t.memoizedState,l=o.element,$1(e,t),Ys(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Il(Error(Y(423)),t),t=um(e,t,r,n,l);break e}else if(r!==l){l=Il(Error(Y(424)),t),t=um(e,t,r,n,l);break e}else for(fn=Br(t.stateNode.containerInfo.firstChild),pn=t,Je=!0,An=null,n=L1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($l(),r===l){t=gr(e,t,n);break e}zt(e,t,r,n)}t=t.child}return t;case 5:return R1(t),e===null&&Ru(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,$u(r,l)?i=null:o!==null&&$u(r,o)&&(t.flags|=32),n2(e,t),zt(e,t,i,n),t.child;case 6:return e===null&&Ru(t),null;case 13:return a2(e,t,n);case 4:return Gh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=El(t,null,r,n):zt(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pn(r,l),sm(e,t,r,l,n);case 7:return zt(e,t,t.pendingProps,n),t.child;case 8:return zt(e,t,t.pendingProps.children,n),t.child;case 12:return zt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,Ge(Gs,r._currentValue),r._currentValue=i,o!==null)if(jn(o.value,i)){if(o.children===l.children&&!tn.current){t=gr(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var d=s.firstContext;d!==null;){if(d.context===r){if(o.tag===1){d=dr(-1,n&-n),d.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var m=f.pending;m===null?d.next=d:(d.next=m.next,m.next=d),f.pending=d}}o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),Pu(o.return,n,t),s.lanes|=n;break}d=d.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(Y(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Pu(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}zt(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,xl(t,n),l=Cn(l),r=r(l),t.flags|=1,zt(e,t,r,n),t.child;case 14:return r=t.type,l=Pn(r,t.pendingProps),l=Pn(r.type,l),cm(e,t,r,l,n);case 15:return e2(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pn(r,l),ms(e,t),t.tag=1,nn(r)?(e=!0,Us(t)):e=!1,xl(t,n),N1(t,r,l),Fu(t,r,l,n),Du(null,t,r,!0,e,n);case 19:return l2(e,t,n);case 22:return t2(e,t,n)}throw Error(Y(156,t.tag))};function x2(e,t){return Yv(e,t)}function $8(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(e,t,n,r){return new $8(e,t,n,r)}function of(e){return e=e.prototype,!(!e||!e.isReactComponent)}function E8(e){if(typeof e=="function")return of(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_h)return 11;if(e===Th)return 14}return 2}function Wr(e,t){var n=e.alternate;return n===null?(n=Sn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bs(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")of(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case rl:return Ca(n.children,l,o,t);case Ch:i=8,l|=8;break;case lu:return e=Sn(12,n,t,l|2),e.elementType=lu,e.lanes=o,e;case ou:return e=Sn(13,n,t,l),e.elementType=ou,e.lanes=o,e;case iu:return e=Sn(19,n,t,l),e.elementType=iu,e.lanes=o,e;case Iv:return _c(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ev:i=10;break e;case Nv:i=9;break e;case _h:i=11;break e;case Th:i=14;break e;case Er:i=16,r=null;break e}throw Error(Y(130,e==null?e:typeof e,""))}return t=Sn(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Ca(e,t,n,r){return e=Sn(7,e,r,t),e.lanes=n,e}function _c(e,t,n,r){return e=Sn(22,e,r,t),e.elementType=Iv,e.lanes=n,e.stateNode={isHidden:!1},e}function jd(e,t,n){return e=Sn(6,e,null,t),e.lanes=n,e}function zd(e,t,n){return t=Sn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function N8(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xd(0),this.expirationTimes=xd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xd(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function sf(e,t,n,r,l,o,i,s,d){return e=new N8(e,t,n,s,d),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Sn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hh(o),e}function I8(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nl,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function S2(e){if(!e)return Gr;e=e._reactInternals;e:{if(Ra(e)!==e||e.tag!==1)throw Error(Y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Y(171))}if(e.tag===1){var n=e.type;if(nn(n))return x1(e,n,t)}return t}function k2(e,t,n,r,l,o,i,s,d){return e=sf(n,r,!0,e,l,o,i,s,d),e.context=S2(null),n=e.current,r=Wt(),l=Ur(n),o=dr(r,l),o.callback=t??null,jr(n,o,l),e.current.lanes=l,ui(e,l,r),rn(e,r),e}function Tc(e,t,n,r){var l=t.current,o=Wt(),i=Ur(l);return n=S2(n),t.context===null?t.context=n:t.pendingContext=n,t=dr(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jr(l,t,i),e!==null&&(Bn(e,l,i,o),fs(e,l,i)),i}function tc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cf(e,t){xm(e,t),(e=e.alternate)&&xm(e,t)}function L8(){return null}var C2=typeof reportError=="function"?reportError:function(e){console.error(e)};function df(e){this._internalRoot=e}$c.prototype.render=df.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Y(409));Tc(e,t,null,null)};$c.prototype.unmount=df.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Na(function(){Tc(null,e,null,null)}),t[fr]=null}};function $c(e){this._internalRoot=e}$c.prototype.unstable_scheduleHydration=function(e){if(e){var t=e1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ir.length&&t!==0&&t<Ir[n].priority;n++);Ir.splice(n,0,e),n===0&&n1(e)}};function uf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ec(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sm(){}function R8(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var f=tc(i);o.call(f)}}var i=k2(t,r,e,0,null,!1,!1,"",Sm);return e._reactRootContainer=i,e[fr]=i.current,Yo(e.nodeType===8?e.parentNode:e),Na(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var f=tc(d);s.call(f)}}var d=sf(e,0,!1,null,null,!1,!1,"",Sm);return e._reactRootContainer=d,e[fr]=d.current,Yo(e.nodeType===8?e.parentNode:e),Na(function(){Tc(t,d,n,r)}),d}function Nc(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var d=tc(i);s.call(d)}}Tc(t,i,e,l)}else i=R8(n,t,e,l,r);return tc(i)}Xv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yo(t.pendingLanes);n!==0&&(Nh(t,n|1),rn(t,it()),!(Ne&6)&&(Ll=it()+500,Zr()))}break;case 13:Na(function(){var r=pr(e,1);if(r!==null){var l=Wt();Bn(r,e,1,l)}}),cf(e,1)}};Ih=function(e){if(e.tag===13){var t=pr(e,134217728);if(t!==null){var n=Wt();Bn(t,e,134217728,n)}cf(e,134217728)}};Jv=function(e){if(e.tag===13){var t=Ur(e),n=pr(e,t);if(n!==null){var r=Wt();Bn(n,e,t,r)}cf(e,t)}};e1=function(){return De};t1=function(e,t){var n=De;try{return De=e,t()}finally{De=n}};vu=function(e,t,n){switch(t){case"input":if(du(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=bc(r);if(!l)throw Error(Y(90));Rv(r),du(r,l)}}}break;case"textarea":Mv(e,n);break;case"select":t=n.value,t!=null&&vl(e,!!n.multiple,t,!1)}};zv=rf;Uv=Na;var P8={usingClientEntryPoint:!1,Events:[fi,il,bc,Bv,jv,rf]},uo={findFiberByHostInstance:ma,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},M8={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gv(e),e===null?null:e.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||L8,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ji.isDisabled&&Ji.supportsFiber)try{gc=Ji.inject(M8),Zn=Ji}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P8;mn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uf(t))throw Error(Y(200));return I8(e,t,null,n)};mn.createRoot=function(e,t){if(!uf(e))throw Error(Y(299));var n=!1,r="",l=C2;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=sf(e,1,!1,null,null,n,!1,r,l),e[fr]=t.current,Yo(e.nodeType===8?e.parentNode:e),new df(t)};mn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=Gv(t),e=e===null?null:e.stateNode,e};mn.flushSync=function(e){return Na(e)};mn.hydrate=function(e,t,n){if(!Ec(t))throw Error(Y(200));return Nc(null,e,t,!0,n)};mn.hydrateRoot=function(e,t,n){if(!uf(e))throw Error(Y(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=C2;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=k2(t,null,e,1,n??null,l,!1,o,i),e[fr]=t.current,Yo(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new $c(t)};mn.render=function(e,t,n){if(!Ec(t))throw Error(Y(200));return Nc(null,e,t,!1,n)};mn.unmountComponentAtNode=function(e){if(!Ec(e))throw Error(Y(40));return e._reactRootContainer?(Na(function(){Nc(null,null,e,!1,function(){e._reactRootContainer=null,e[fr]=null})}),!0):!1};mn.unstable_batchedUpdates=rf;mn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ec(n))throw Error(Y(200));if(e==null||e._reactInternals===void 0)throw Error(Y(38));return Nc(e,t,n,!1,r)};mn.version="18.2.0-next-9e3b772b8-20220608";function _2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_2)}catch(e){console.error(e)}}_2(),kv.exports=mn;var T2=kv.exports,km=T2;ru.createRoot=km.createRoot,ru.hydrateRoot=km.hydrateRoot;function F8(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,o;for(o=0;o<r.length;o++)l=r[o],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function A8(e,t){if(e==null)return{};var n=F8(e,t),r,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)r=o[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Qu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O8(e){if(Array.isArray(e))return Qu(e)}function D8(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function B8(e,t){if(e){if(typeof e=="string")return Qu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qu(e,t)}}function j8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z8(e){return O8(e)||D8(e)||B8(e)||j8()}function ni(e){"@babel/helpers - typeof";return ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ni(e)}function U8(e,t){if(ni(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ni(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function W8(e){var t=U8(e,"string");return ni(t)==="symbol"?t:String(t)}function $2(e,t,n){return t=W8(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ku(){return Ku=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ku.apply(this,arguments)}function Cm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function pl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cm(Object(n),!0).forEach(function(r){$2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function H8(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var Ud={};function G8(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return Ud[t]||(Ud[t]=H8(e)),Ud[t]}function V8(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=e.filter(function(o){return o!=="token"}),l=G8(r);return l.reduce(function(o,i){return pl(pl({},o),n[i])},t)}function _m(e){return e.join(" ")}function Y8(e,t){var n=0;return function(r){return n+=1,r.map(function(l,o){return E2({node:l,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(o)})})}}function E2(e){var t=e.node,n=e.stylesheet,r=e.style,l=r===void 0?{}:r,o=e.useInlineStyles,i=e.key,s=t.properties,d=t.type,f=t.tagName,m=t.value;if(d==="text")return m;if(f){var b=Y8(n,o),S;if(!o)S=pl(pl({},s),{},{className:_m(s.className)});else{var I=Object.keys(n).reduce(function(w,g){return g.split(".").forEach(function(y){w.includes(y)||w.push(y)}),w},[]),N=s.className&&s.className.includes("token")?["token"]:[],k=s.className&&N.concat(s.className.filter(function(w){return!I.includes(w)}));S=pl(pl({},s),{},{className:_m(k)||void 0,style:V8(s.className,Object.assign({},s.style,l),n)})}var L=b(t.children);return Et.createElement(f,Ku({key:i},S),L)}}const q8=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var Z8=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function Tm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function Yn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tm(Object(n),!0).forEach(function(r){$2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Q8=/\n/g;function K8(e){return e.match(Q8)}function X8(e){var t=e.lines,n=e.startingLineNumber,r=e.style;return t.map(function(l,o){var i=o+n;return Et.createElement("span",{key:"line-".concat(o),className:"react-syntax-highlighter-line-number",style:typeof r=="function"?r(i):r},"".concat(i,`
`))})}function J8(e){var t=e.codeString,n=e.codeStyle,r=e.containerStyle,l=r===void 0?{float:"left",paddingRight:"10px"}:r,o=e.numberStyle,i=o===void 0?{}:o,s=e.startingLineNumber;return Et.createElement("code",{style:Object.assign({},n,l)},X8({lines:t.replace(/\n$/,"").split(`
`),style:i,startingLineNumber:s}))}function ex(e){return"".concat(e.toString().length,".25em")}function N2(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function I2(e,t,n){var r={display:"inline-block",minWidth:ex(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},l=typeof e=="function"?e(t):e,o=Yn(Yn({},r),l);return o}function ws(e){var t=e.children,n=e.lineNumber,r=e.lineNumberStyle,l=e.largestLineNumber,o=e.showInlineLineNumbers,i=e.lineProps,s=i===void 0?{}:i,d=e.className,f=d===void 0?[]:d,m=e.showLineNumbers,b=e.wrapLongLines,S=typeof s=="function"?s(n):s;if(S.className=f,n&&o){var I=I2(r,n,l);t.unshift(N2(n,I))}return b&m&&(S.style=Yn(Yn({},S.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:S,children:t}}function L2(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=0;r<e.length;r++){var l=e[r];if(l.type==="text")n.push(ws({children:[l],className:z8(new Set(t))}));else if(l.children){var o=t.concat(l.properties.className);L2(l.children,o).forEach(function(i){return n.push(i)})}}return n}function tx(e,t,n,r,l,o,i,s,d){var f,m=L2(e.value),b=[],S=-1,I=0;function N($,_){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return ws({children:$,lineNumber:_,lineNumberStyle:s,largestLineNumber:i,showInlineLineNumbers:l,lineProps:n,className:M,showLineNumbers:r,wrapLongLines:d})}function k($,_){if(r&&_&&l){var M=I2(s,_,i);$.unshift(N2(_,M))}return $}function L($,_){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||M.length>0?N($,_,M):k($,_)}for(var w=function(){var _=m[I],M=_.children[0].value,O=K8(M);if(O){var z=M.split(`
`);z.forEach(function(q,he){var se=r&&b.length+o,ze={type:"text",value:"".concat(q,`
`)};if(he===0){var lt=m.slice(S+1,I).concat(ws({children:[ze],className:_.properties.className})),Ve=L(lt,se);b.push(Ve)}else if(he===z.length-1){var Be=m[I+1]&&m[I+1].children&&m[I+1].children[0],Ye={type:"text",value:"".concat(q)};if(Be){var U=ws({children:[Ye],className:_.properties.className});m.splice(I+1,0,U)}else{var Z=[Ye],J=L(Z,se,_.properties.className);b.push(J)}}else{var le=[ze],fe=L(le,se,_.properties.className);b.push(fe)}}),S=I}I++};I<m.length;)w();if(S!==m.length-1){var g=m.slice(S+1,m.length);if(g&&g.length){var y=r&&b.length+o,v=L(g,y);b.push(v)}}return t?b:(f=[]).concat.apply(f,b)}function nx(e){var t=e.rows,n=e.stylesheet,r=e.useInlineStyles;return t.map(function(l,o){return E2({node:l,stylesheet:n,useInlineStyles:r,key:"code-segement".concat(o)})})}function R2(e){return e&&typeof e.highlightAuto<"u"}function rx(e){var t=e.astGenerator,n=e.language,r=e.code,l=e.defaultCodeValue;if(R2(t)){var o=q8(t,n);return n==="text"?{value:l,language:"text"}:o?t.highlight(n,r):t.highlightAuto(r)}try{return n&&n!=="text"?{value:t.highlight(r,n)}:{value:l}}catch{return{value:l}}}function ax(e,t){return function(r){var l=r.language,o=r.children,i=r.style,s=i===void 0?t:i,d=r.customStyle,f=d===void 0?{}:d,m=r.codeTagProps,b=m===void 0?{className:l?"language-".concat(l):void 0,style:Yn(Yn({},s['code[class*="language-"]']),s['code[class*="language-'.concat(l,'"]')])}:m,S=r.useInlineStyles,I=S===void 0?!0:S,N=r.showLineNumbers,k=N===void 0?!1:N,L=r.showInlineLineNumbers,w=L===void 0?!0:L,g=r.startingLineNumber,y=g===void 0?1:g,v=r.lineNumberContainerStyle,$=r.lineNumberStyle,_=$===void 0?{}:$,M=r.wrapLines,O=r.wrapLongLines,z=O===void 0?!1:O,q=r.lineProps,he=q===void 0?{}:q,se=r.renderer,ze=r.PreTag,lt=ze===void 0?"pre":ze,Ve=r.CodeTag,Be=Ve===void 0?"code":Ve,Ye=r.code,U=Ye===void 0?(Array.isArray(o)?o[0]:o)||"":Ye,Z=r.astGenerator,J=A8(r,Z8);Z=Z||e;var le=k?Et.createElement(J8,{containerStyle:v,codeStyle:b.style||{},numberStyle:_,startingLineNumber:y,codeString:U}):null,fe=s.hljs||s['pre[class*="language-"]']||{backgroundColor:"#fff"},Bt=R2(Z)?"hljs":"prismjs",pe=I?Object.assign({},J,{style:Object.assign({},fe,f)}):Object.assign({},J,{className:J.className?"".concat(Bt," ").concat(J.className):Bt,style:Object.assign({},f)});if(z?b.style=Yn(Yn({},b.style),{},{whiteSpace:"pre-wrap"}):b.style=Yn(Yn({},b.style),{},{whiteSpace:"pre"}),!Z)return Et.createElement(lt,pe,le,Et.createElement(Be,b,U));(M===void 0&&se||z)&&(M=!0),se=se||nx;var et=[{type:"text",value:U}],qe=rx({astGenerator:Z,language:l,code:U,defaultCodeValue:et});qe.language===null&&(qe.value=et);var ft=qe.value.length+y,Mt=tx(qe,M,he,k,w,y,ft,_,z);return Et.createElement(lt,pe,Et.createElement(Be,b,!w&&le,se({rows:Mt,stylesheet:s,useInlineStyles:I})))}}var lx=ix,ox=Object.prototype.hasOwnProperty;function ix(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)ox.call(n,r)&&(e[r]=n[r])}return e}var P2=M2,hf=M2.prototype;hf.space=null;hf.normal={};hf.property={};function M2(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var $m=lx,sx=P2,cx=dx;function dx(e){for(var t=e.length,n=[],r=[],l=-1,o,i;++l<t;)o=e[l],n.push(o.property),r.push(o.normal),i=o.space;return new sx($m.apply(null,n),$m.apply(null,r),i)}var ff=ux;function ux(e){return e.toLowerCase()}var F2=A2,Tn=A2.prototype;Tn.space=null;Tn.attribute=null;Tn.property=null;Tn.boolean=!1;Tn.booleanish=!1;Tn.overloadedBoolean=!1;Tn.number=!1;Tn.commaSeparated=!1;Tn.spaceSeparated=!1;Tn.commaOrSpaceSeparated=!1;Tn.mustUseProperty=!1;Tn.defined=!1;function A2(e,t){this.property=e,this.attribute=t}var Xn={},hx=0;Xn.boolean=Pa();Xn.booleanish=Pa();Xn.overloadedBoolean=Pa();Xn.number=Pa();Xn.spaceSeparated=Pa();Xn.commaSeparated=Pa();Xn.commaOrSpaceSeparated=Pa();function Pa(){return Math.pow(2,++hx)}var O2=F2,Em=Xn,D2=pf;pf.prototype=new O2;pf.prototype.defined=!0;var B2=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],fx=B2.length;function pf(e,t,n,r){var l=-1,o;for(Nm(this,"space",r),O2.call(this,e,t);++l<fx;)o=B2[l],Nm(this,o,(n&Em[o])===Em[o])}function Nm(e,t,n){n&&(e[t]=n)}var Im=ff,px=P2,gx=D2,gi=mx;function mx(e){var t=e.space,n=e.mustUseProperty||[],r=e.attributes||{},l=e.properties,o=e.transform,i={},s={},d,f;for(d in l)f=new gx(d,o(r,d),l[d],t),n.indexOf(d)!==-1&&(f.mustUseProperty=!0),i[d]=f,s[Im(d)]=d,s[Im(f.attribute)]=d;return new px(i,s,t)}var vx=gi,yx=vx({space:"xlink",transform:bx,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function bx(e,t){return"xlink:"+t.slice(5).toLowerCase()}var wx=gi,xx=wx({space:"xml",transform:Sx,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Sx(e,t){return"xml:"+t.slice(3).toLowerCase()}var kx=Cx;function Cx(e,t){return t in e?e[t]:t}var _x=kx,j2=Tx;function Tx(e,t){return _x(e,t.toLowerCase())}var $x=gi,Ex=j2,Nx=$x({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Ex,properties:{xmlns:null,xmlnsXLink:null}}),gf=Xn,Ix=gi,Qt=gf.booleanish,bn=gf.number,ca=gf.spaceSeparated,Lx=Ix({transform:Rx,properties:{ariaActiveDescendant:null,ariaAtomic:Qt,ariaAutoComplete:null,ariaBusy:Qt,ariaChecked:Qt,ariaColCount:bn,ariaColIndex:bn,ariaColSpan:bn,ariaControls:ca,ariaCurrent:null,ariaDescribedBy:ca,ariaDetails:null,ariaDisabled:Qt,ariaDropEffect:ca,ariaErrorMessage:null,ariaExpanded:Qt,ariaFlowTo:ca,ariaGrabbed:Qt,ariaHasPopup:null,ariaHidden:Qt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ca,ariaLevel:bn,ariaLive:null,ariaModal:Qt,ariaMultiLine:Qt,ariaMultiSelectable:Qt,ariaOrientation:null,ariaOwns:ca,ariaPlaceholder:null,ariaPosInSet:bn,ariaPressed:Qt,ariaReadOnly:Qt,ariaRelevant:null,ariaRequired:Qt,ariaRoleDescription:ca,ariaRowCount:bn,ariaRowIndex:bn,ariaRowSpan:bn,ariaSelected:Qt,ariaSetSize:bn,ariaSort:null,ariaValueMax:bn,ariaValueMin:bn,ariaValueNow:bn,ariaValueText:null,role:null}});function Rx(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var Ol=Xn,Px=gi,Mx=j2,we=Ol.boolean,Fx=Ol.overloadedBoolean,ho=Ol.booleanish,Ze=Ol.number,jt=Ol.spaceSeparated,es=Ol.commaSeparated,Ax=Px({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Mx,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:es,acceptCharset:jt,accessKey:jt,action:null,allow:null,allowFullScreen:we,allowPaymentRequest:we,allowUserMedia:we,alt:null,as:null,async:we,autoCapitalize:null,autoComplete:jt,autoFocus:we,autoPlay:we,capture:we,charSet:null,checked:we,cite:null,className:jt,cols:Ze,colSpan:null,content:null,contentEditable:ho,controls:we,controlsList:jt,coords:Ze|es,crossOrigin:null,data:null,dateTime:null,decoding:null,default:we,defer:we,dir:null,dirName:null,disabled:we,download:Fx,draggable:ho,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:we,formTarget:null,headers:jt,height:Ze,hidden:we,high:Ze,href:null,hrefLang:null,htmlFor:jt,httpEquiv:jt,id:null,imageSizes:null,imageSrcSet:es,inputMode:null,integrity:null,is:null,isMap:we,itemId:null,itemProp:jt,itemRef:jt,itemScope:we,itemType:jt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:we,low:Ze,manifest:null,max:null,maxLength:Ze,media:null,method:null,min:null,minLength:Ze,multiple:we,muted:we,name:null,nonce:null,noModule:we,noValidate:we,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:we,optimum:Ze,pattern:null,ping:jt,placeholder:null,playsInline:we,poster:null,preload:null,readOnly:we,referrerPolicy:null,rel:jt,required:we,reversed:we,rows:Ze,rowSpan:Ze,sandbox:jt,scope:null,scoped:we,seamless:we,selected:we,shape:null,size:Ze,sizes:null,slot:null,span:Ze,spellCheck:ho,src:null,srcDoc:null,srcLang:null,srcSet:es,start:Ze,step:null,style:null,tabIndex:Ze,target:null,title:null,translate:null,type:null,typeMustMatch:we,useMap:null,value:ho,width:Ze,wrap:null,align:null,aLink:null,archive:jt,axis:null,background:null,bgColor:null,border:Ze,borderColor:null,bottomMargin:Ze,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:we,declare:we,event:null,face:null,frame:null,frameBorder:null,hSpace:Ze,leftMargin:Ze,link:null,longDesc:null,lowSrc:null,marginHeight:Ze,marginWidth:Ze,noResize:we,noHref:we,noShade:we,noWrap:we,object:null,profile:null,prompt:null,rev:null,rightMargin:Ze,rules:null,scheme:null,scrolling:ho,standby:null,summary:null,text:null,topMargin:Ze,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Ze,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:we,disableRemotePlayback:we,prefix:null,property:null,results:Ze,security:null,unselectable:null}}),Ox=cx,Dx=yx,Bx=xx,jx=Nx,zx=Lx,Ux=Ax,Wx=Ox([Bx,Dx,jx,zx,Ux]),Hx=ff,Gx=D2,Vx=F2,mf="data",Yx=Qx,qx=/^data[-\w.:]+$/i,z2=/-[a-z]/g,Zx=/[A-Z]/g;function Qx(e,t){var n=Hx(t),r=t,l=Vx;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===mf&&qx.test(t)&&(t.charAt(4)==="-"?r=Kx(t):t=Xx(t),l=Gx),new l(r,t))}function Kx(e){var t=e.slice(5).replace(z2,e9);return mf+t.charAt(0).toUpperCase()+t.slice(1)}function Xx(e){var t=e.slice(4);return z2.test(t)?e:(t=t.replace(Zx,Jx),t.charAt(0)!=="-"&&(t="-"+t),mf+t)}function Jx(e){return"-"+e.toLowerCase()}function e9(e){return e.charAt(1).toUpperCase()}var t9=n9,Lm=/[#.]/g;function n9(e,t){for(var n=e||"",r=t||"div",l={},o=0,i,s,d;o<n.length;)Lm.lastIndex=o,d=Lm.exec(n),i=n.slice(o,d?d.index:n.length),i&&(s?s==="#"?l.id=i:l.className?l.className.push(i):l.className=[i]:r=i,o+=i.length),d&&(s=d[0],o++);return{type:"element",tagName:r,properties:l,children:[]}}var vf={};vf.parse=l9;vf.stringify=o9;var Rm="",r9=" ",a9=/[ \t\n\r\f]+/g;function l9(e){var t=String(e||Rm).trim();return t===Rm?[]:t.split(a9)}function o9(e){return e.join(r9).trim()}var yf={};yf.parse=i9;yf.stringify=s9;var Xu=",",Pm=" ",wo="";function i9(e){for(var t=[],n=String(e||wo),r=n.indexOf(Xu),l=0,o=!1,i;!o;)r===-1&&(r=n.length,o=!0),i=n.slice(l,r).trim(),(i||!o)&&t.push(i),l=r+1,r=n.indexOf(Xu,l);return t}function s9(e,t){var n=t||{},r=n.padLeft===!1?wo:Pm,l=n.padRight?Pm:wo;return e[e.length-1]===wo&&(e=e.concat(wo)),e.join(l+Xu+r).trim()}var c9=Yx,Mm=ff,d9=t9,Fm=vf.parse,Am=yf.parse,u9=f9,h9={}.hasOwnProperty;function f9(e,t,n){var r=n?y9(n):null;return l;function l(i,s){var d=d9(i,t),f=Array.prototype.slice.call(arguments,2),m=d.tagName.toLowerCase(),b;if(d.tagName=r&&h9.call(r,m)?r[m]:m,s&&p9(s,d)&&(f.unshift(s),s=null),s)for(b in s)o(d.properties,b,s[b]);return U2(d.children,f),d.tagName==="template"&&(d.content={type:"root",children:d.children},d.children=[]),d}function o(i,s,d){var f,m,b;d==null||d!==d||(f=c9(e,s),m=f.property,b=d,typeof b=="string"&&(f.spaceSeparated?b=Fm(b):f.commaSeparated?b=Am(b):f.commaOrSpaceSeparated&&(b=Fm(Am(b).join(" ")))),m==="style"&&typeof d!="string"&&(b=v9(b)),m==="className"&&i.className&&(b=i.className.concat(b)),i[m]=m9(f,m,b))}}function p9(e,t){return typeof e=="string"||"length"in e||g9(t.tagName,e)}function g9(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function U2(e,t){var n,r;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,r=t.length;++n<r;)U2(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function m9(e,t,n){var r,l,o;if(typeof n!="object"||!("length"in n))return Om(e,t,n);for(l=n.length,r=-1,o=[];++r<l;)o[r]=Om(e,t,n[r]);return o}function Om(e,t,n){var r=n;return e.number||e.positiveNumber?!isNaN(r)&&r!==""&&(r=Number(r)):(e.boolean||e.overloadedBoolean)&&typeof r=="string"&&(r===""||Mm(n)===Mm(t))&&(r=!0),r}function v9(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function y9(e){for(var t=e.length,n=-1,r={},l;++n<t;)l=e[n],r[l.toLowerCase()]=l;return r}var b9=Wx,w9=u9,W2=w9(b9,"div");W2.displayName="html";var x9=W2,S9=x9;const k9="Æ",C9="&",_9="Á",T9="Â",$9="À",E9="Å",N9="Ã",I9="Ä",L9="©",R9="Ç",P9="Ð",M9="É",F9="Ê",A9="È",O9="Ë",D9=">",B9="Í",j9="Î",z9="Ì",U9="Ï",W9="<",H9="Ñ",G9="Ó",V9="Ô",Y9="Ò",q9="Ø",Z9="Õ",Q9="Ö",K9='"',X9="®",J9="Þ",e7="Ú",t7="Û",n7="Ù",r7="Ü",a7="Ý",l7="á",o7="â",i7="´",s7="æ",c7="à",d7="&",u7="å",h7="ã",f7="ä",p7="¦",g7="ç",m7="¸",v7="¢",y7="©",b7="¤",w7="°",x7="÷",S7="é",k7="ê",C7="è",_7="ð",T7="ë",$7="½",E7="¼",N7="¾",I7=">",L7="í",R7="î",P7="¡",M7="ì",F7="¿",A7="ï",O7="«",D7="<",B7="¯",j7="µ",z7="·",U7=" ",W7="¬",H7="ñ",G7="ó",V7="ô",Y7="ò",q7="ª",Z7="º",Q7="ø",K7="õ",X7="ö",J7="¶",eS="±",tS="£",nS='"',rS="»",aS="®",lS="§",oS="­",iS="¹",sS="²",cS="³",dS="ß",uS="þ",hS="×",fS="ú",pS="û",gS="ù",mS="¨",vS="ü",yS="ý",bS="¥",wS="ÿ",xS={AElig:k9,AMP:C9,Aacute:_9,Acirc:T9,Agrave:$9,Aring:E9,Atilde:N9,Auml:I9,COPY:L9,Ccedil:R9,ETH:P9,Eacute:M9,Ecirc:F9,Egrave:A9,Euml:O9,GT:D9,Iacute:B9,Icirc:j9,Igrave:z9,Iuml:U9,LT:W9,Ntilde:H9,Oacute:G9,Ocirc:V9,Ograve:Y9,Oslash:q9,Otilde:Z9,Ouml:Q9,QUOT:K9,REG:X9,THORN:J9,Uacute:e7,Ucirc:t7,Ugrave:n7,Uuml:r7,Yacute:a7,aacute:l7,acirc:o7,acute:i7,aelig:s7,agrave:c7,amp:d7,aring:u7,atilde:h7,auml:f7,brvbar:p7,ccedil:g7,cedil:m7,cent:v7,copy:y7,curren:b7,deg:w7,divide:x7,eacute:S7,ecirc:k7,egrave:C7,eth:_7,euml:T7,frac12:$7,frac14:E7,frac34:N7,gt:I7,iacute:L7,icirc:R7,iexcl:P7,igrave:M7,iquest:F7,iuml:A7,laquo:O7,lt:D7,macr:B7,micro:j7,middot:z7,nbsp:U7,not:W7,ntilde:H7,oacute:G7,ocirc:V7,ograve:Y7,ordf:q7,ordm:Z7,oslash:Q7,otilde:K7,ouml:X7,para:J7,plusmn:eS,pound:tS,quot:nS,raquo:rS,reg:aS,sect:lS,shy:oS,sup1:iS,sup2:sS,sup3:cS,szlig:dS,thorn:uS,times:hS,uacute:fS,ucirc:pS,ugrave:gS,uml:mS,uuml:vS,yacute:yS,yen:bS,yuml:wS},SS={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var H2=kS;function kS(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var CS=_S;function _S(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var TS=$S;function $S(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var ES=TS,NS=H2,IS=LS;function LS(e){return ES(e)||NS(e)}var ts,RS=59,PS=MS;function MS(e){var t="&"+e+";",n;return ts=ts||document.createElement("i"),ts.innerHTML=t,n=ts.textContent,n.charCodeAt(n.length-1)===RS&&e!=="semi"||n===t?!1:n}var Dm=xS,Bm=SS,FS=H2,AS=CS,G2=IS,OS=PS,DS=KS,BS={}.hasOwnProperty,Xa=String.fromCharCode,jS=Function.prototype,jm={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},zS=9,zm=10,US=12,WS=32,Um=38,HS=59,GS=60,VS=61,YS=35,qS=88,ZS=120,QS=65533,el="named",bf="hexadecimal",wf="decimal",xf={};xf[bf]=16;xf[wf]=10;var Ic={};Ic[el]=G2;Ic[wf]=FS;Ic[bf]=AS;var V2=1,Y2=2,q2=3,Z2=4,Q2=5,Ju=6,K2=7,Qr={};Qr[V2]="Named character references must be terminated by a semicolon";Qr[Y2]="Numeric character references must be terminated by a semicolon";Qr[q2]="Named character references cannot be empty";Qr[Z2]="Numeric character references cannot be empty";Qr[Q2]="Named character references must be known";Qr[Ju]="Numeric character references cannot be disallowed";Qr[K2]="Numeric character references cannot be outside the permissible Unicode range";function KS(e,t){var n={},r,l;t||(t={});for(l in jm)r=t[l],n[l]=r??jm[l];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),XS(e,n)}function XS(e,t){var n=t.additional,r=t.nonTerminated,l=t.text,o=t.reference,i=t.warning,s=t.textContext,d=t.referenceContext,f=t.warningContext,m=t.position,b=t.indent||[],S=e.length,I=0,N=-1,k=m.column||1,L=m.line||1,w="",g=[],y,v,$,_,M,O,z,q,he,se,ze,lt,Ve,Be,Ye,U,Z,J,le;for(typeof n=="string"&&(n=n.charCodeAt(0)),U=fe(),q=i?Bt:jS,I--,S++;++I<S;)if(M===zm&&(k=b[N]||1),M=e.charCodeAt(I),M===Um){if(z=e.charCodeAt(I+1),z===zS||z===zm||z===US||z===WS||z===Um||z===GS||z!==z||n&&z===n){w+=Xa(M),k++;continue}for(Ve=I+1,lt=Ve,le=Ve,z===YS?(le=++lt,z=e.charCodeAt(le),z===qS||z===ZS?(Be=bf,le=++lt):Be=wf):Be=el,y="",ze="",_="",Ye=Ic[Be],le--;++le<S&&(z=e.charCodeAt(le),!!Ye(z));)_+=Xa(z),Be===el&&BS.call(Dm,_)&&(y=_,ze=Dm[_]);$=e.charCodeAt(le)===HS,$&&(le++,v=Be===el?OS(_):!1,v&&(y=_,ze=v)),J=1+le-Ve,!$&&!r||(_?Be===el?($&&!ze?q(Q2,1):(y!==_&&(le=lt+y.length,J=1+le-lt,$=!1),$||(he=y?V2:q2,t.attribute?(z=e.charCodeAt(le),z===VS?(q(he,J),ze=null):G2(z)?ze=null:q(he,J)):q(he,J))),O=ze):($||q(Y2,J),O=parseInt(_,xf[Be]),JS(O)?(q(K2,J),O=Xa(QS)):O in Bm?(q(Ju,J),O=Bm[O]):(se="",ek(O)&&q(Ju,J),O>65535&&(O-=65536,se+=Xa(O>>>10|55296),O=56320|O&1023),O=se+Xa(O))):Be!==el&&q(Z2,J)),O?(pe(),U=fe(),I=le-1,k+=le-Ve+1,g.push(O),Z=fe(),Z.offset++,o&&o.call(d,O,{start:U,end:Z},e.slice(Ve-1,le)),U=Z):(_=e.slice(Ve-1,le),w+=_,k+=_.length,I=le-1)}else M===10&&(L++,N++,k=0),M===M?(w+=Xa(M),k++):pe();return g.join("");function fe(){return{line:L,column:k,offset:I+(m.offset||0)}}function Bt(et,qe){var ft=fe();ft.column+=qe,ft.offset+=qe,i.call(f,Qr[et],ft,et)}function pe(){w&&(g.push(w),l&&l.call(s,w,{start:U,end:fe()}),w="")}}function JS(e){return e>=55296&&e<=57343||e>1114111}function ek(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var X2={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var l=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,i={},s={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function g(y){return y instanceof d?new d(y.type,g(y.content),y.alias):Array.isArray(y)?y.map(g):y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++o}),g.__id},clone:function g(y,v){v=v||{};var $,_;switch(s.util.type(y)){case"Object":if(_=s.util.objId(y),v[_])return v[_];$={},v[_]=$;for(var M in y)y.hasOwnProperty(M)&&($[M]=g(y[M],v));return $;case"Array":return _=s.util.objId(y),v[_]?v[_]:($=[],v[_]=$,y.forEach(function(O,z){$[z]=g(O,v)}),$);default:return y}},getLanguage:function(g){for(;g;){var y=l.exec(g.className);if(y)return y[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,y){g.className=g.className.replace(RegExp(l,"gi"),""),g.classList.add("language-"+y)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch($){var g=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec($.stack)||[])[1];if(g){var y=document.getElementsByTagName("script");for(var v in y)if(y[v].src==g)return y[v]}return null}},isActive:function(g,y,v){for(var $="no-"+y;g;){var _=g.classList;if(_.contains(y))return!0;if(_.contains($))return!1;g=g.parentElement}return!!v}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(g,y){var v=s.util.clone(s.languages[g]);for(var $ in y)v[$]=y[$];return v},insertBefore:function(g,y,v,$){$=$||s.languages;var _=$[g],M={};for(var O in _)if(_.hasOwnProperty(O)){if(O==y)for(var z in v)v.hasOwnProperty(z)&&(M[z]=v[z]);v.hasOwnProperty(O)||(M[O]=_[O])}var q=$[g];return $[g]=M,s.languages.DFS(s.languages,function(he,se){se===q&&he!=g&&(this[he]=M)}),M},DFS:function g(y,v,$,_){_=_||{};var M=s.util.objId;for(var O in y)if(y.hasOwnProperty(O)){v.call(y,O,y[O],$||O);var z=y[O],q=s.util.type(z);q==="Object"&&!_[M(z)]?(_[M(z)]=!0,g(z,v,null,_)):q==="Array"&&!_[M(z)]&&(_[M(z)]=!0,g(z,v,O,_))}}},plugins:{},highlightAll:function(g,y){s.highlightAllUnder(document,g,y)},highlightAllUnder:function(g,y,v){var $={callback:v,container:g,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",$),$.elements=Array.prototype.slice.apply($.container.querySelectorAll($.selector)),s.hooks.run("before-all-elements-highlight",$);for(var _=0,M;M=$.elements[_++];)s.highlightElement(M,y===!0,$.callback)},highlightElement:function(g,y,v){var $=s.util.getLanguage(g),_=s.languages[$];s.util.setLanguage(g,$);var M=g.parentElement;M&&M.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(M,$);var O=g.textContent,z={element:g,language:$,grammar:_,code:O};function q(se){z.highlightedCode=se,s.hooks.run("before-insert",z),z.element.innerHTML=z.highlightedCode,s.hooks.run("after-highlight",z),s.hooks.run("complete",z),v&&v.call(z.element)}if(s.hooks.run("before-sanity-check",z),M=z.element.parentElement,M&&M.nodeName.toLowerCase()==="pre"&&!M.hasAttribute("tabindex")&&M.setAttribute("tabindex","0"),!z.code){s.hooks.run("complete",z),v&&v.call(z.element);return}if(s.hooks.run("before-highlight",z),!z.grammar){q(s.util.encode(z.code));return}if(y&&r.Worker){var he=new Worker(s.filename);he.onmessage=function(se){q(se.data)},he.postMessage(JSON.stringify({language:z.language,code:z.code,immediateClose:!0}))}else q(s.highlight(z.code,z.grammar,z.language))},highlight:function(g,y,v){var $={code:g,grammar:y,language:v};if(s.hooks.run("before-tokenize",$),!$.grammar)throw new Error('The language "'+$.language+'" has no grammar.');return $.tokens=s.tokenize($.code,$.grammar),s.hooks.run("after-tokenize",$),d.stringify(s.util.encode($.tokens),$.language)},tokenize:function(g,y){var v=y.rest;if(v){for(var $ in v)y[$]=v[$];delete y.rest}var _=new b;return S(_,_.head,g),m(g,_,y,_.head,0),N(_)},hooks:{all:{},add:function(g,y){var v=s.hooks.all;v[g]=v[g]||[],v[g].push(y)},run:function(g,y){var v=s.hooks.all[g];if(!(!v||!v.length))for(var $=0,_;_=v[$++];)_(y)}},Token:d};r.Prism=s;function d(g,y,v,$){this.type=g,this.content=y,this.alias=v,this.length=($||"").length|0}d.stringify=function g(y,v){if(typeof y=="string")return y;if(Array.isArray(y)){var $="";return y.forEach(function(q){$+=g(q,v)}),$}var _={type:y.type,content:g(y.content,v),tag:"span",classes:["token",y.type],attributes:{},language:v},M=y.alias;M&&(Array.isArray(M)?Array.prototype.push.apply(_.classes,M):_.classes.push(M)),s.hooks.run("wrap",_);var O="";for(var z in _.attributes)O+=" "+z+'="'+(_.attributes[z]||"").replace(/"/g,"&quot;")+'"';return"<"+_.tag+' class="'+_.classes.join(" ")+'"'+O+">"+_.content+"</"+_.tag+">"};function f(g,y,v,$){g.lastIndex=y;var _=g.exec(v);if(_&&$&&_[1]){var M=_[1].length;_.index+=M,_[0]=_[0].slice(M)}return _}function m(g,y,v,$,_,M){for(var O in v)if(!(!v.hasOwnProperty(O)||!v[O])){var z=v[O];z=Array.isArray(z)?z:[z];for(var q=0;q<z.length;++q){if(M&&M.cause==O+","+q)return;var he=z[q],se=he.inside,ze=!!he.lookbehind,lt=!!he.greedy,Ve=he.alias;if(lt&&!he.pattern.global){var Be=he.pattern.toString().match(/[imsuy]*$/)[0];he.pattern=RegExp(he.pattern.source,Be+"g")}for(var Ye=he.pattern||he,U=$.next,Z=_;U!==y.tail&&!(M&&Z>=M.reach);Z+=U.value.length,U=U.next){var J=U.value;if(y.length>g.length)return;if(!(J instanceof d)){var le=1,fe;if(lt){if(fe=f(Ye,Z,g,ze),!fe||fe.index>=g.length)break;var qe=fe.index,Bt=fe.index+fe[0].length,pe=Z;for(pe+=U.value.length;qe>=pe;)U=U.next,pe+=U.value.length;if(pe-=U.value.length,Z=pe,U.value instanceof d)continue;for(var et=U;et!==y.tail&&(pe<Bt||typeof et.value=="string");et=et.next)le++,pe+=et.value.length;le--,J=g.slice(Z,pe),fe.index-=Z}else if(fe=f(Ye,0,J,ze),!fe)continue;var qe=fe.index,ft=fe[0],Mt=J.slice(0,qe),Xr=J.slice(qe+ft.length),Jr=Z+J.length;M&&Jr>M.reach&&(M.reach=Jr);var Jn=U.prev;Mt&&(Jn=S(y,Jn,Mt),Z+=Mt.length),I(y,Jn,le);var Ul=new d(O,se?s.tokenize(ft,se):ft,Ve,ft);if(U=S(y,Jn,Ul),Xr&&S(y,U,Xr),le>1){var ea={cause:O+","+q,reach:Jr};m(g,y,v,U.prev,Z,ea),M&&ea.reach>M.reach&&(M.reach=ea.reach)}}}}}}function b(){var g={value:null,prev:null,next:null},y={value:null,prev:g,next:null};g.next=y,this.head=g,this.tail=y,this.length=0}function S(g,y,v){var $=y.next,_={value:v,prev:y,next:$};return y.next=_,$.prev=_,g.length++,_}function I(g,y,v){for(var $=y.next,_=0;_<v&&$!==g.tail;_++)$=$.next;y.next=$,$.prev=y,g.length-=_}function N(g){for(var y=[],v=g.head.next;v!==g.tail;)y.push(v.value),v=v.next;return y}if(!r.document)return r.addEventListener&&(s.disableWorkerMessageHandler||r.addEventListener("message",function(g){var y=JSON.parse(g.data),v=y.language,$=y.code,_=y.immediateClose;r.postMessage(s.highlight($,s.languages[v],v)),_&&r.close()},!1)),s;var k=s.util.currentScript();k&&(s.filename=k.src,k.hasAttribute("data-manual")&&(s.manual=!0));function L(){s.manual||s.highlightAll()}if(!s.manual){var w=document.readyState;w==="loading"||w==="interactive"&&k&&k.defer?document.addEventListener("DOMContentLoaded",L):window.requestAnimationFrame?window.requestAnimationFrame(L):window.setTimeout(L,16)}return s}(t);e.exports&&(e.exports=n),typeof Do<"u"&&(Do.Prism=n)})(X2);var tk=X2.exports,nk=Sf;Sf.displayName="markup";Sf.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function Sf(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,r){var l={};l["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[r]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};o["language-"+r]={pattern:/[\s\S]+/,inside:e.languages[r]};var i={};i[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:o},e.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var J2=kf;kf.displayName="css";kf.aliases=[];function kf(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var r=t.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(e)}const rk=Kn(J2);var ak=Cf;Cf.displayName="clike";Cf.aliases=[];function Cf(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var lk=_f;_f.displayName="javascript";_f.aliases=["js"];function _f(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var xo=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof Do=="object"?Do:{},ok=Sk();xo.Prism={manual:!0,disableWorkerMessageHandler:!0};var ik=S9,sk=DS,ey=tk,ck=nk,dk=J2,uk=ak,hk=lk;ok();var Tf={}.hasOwnProperty;function ty(){}ty.prototype=ey;var ht=new ty,fk=ht;ht.highlight=gk;ht.register=mi;ht.alias=pk;ht.registered=mk;ht.listLanguages=vk;mi(ck);mi(dk);mi(uk);mi(hk);ht.util.encode=wk;ht.Token.stringify=yk;function mi(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");ht.languages[e.displayName]===void 0&&e(ht)}function pk(e,t){var n=ht.languages,r=e,l,o,i,s;t&&(r={},r[e]=t);for(l in r)for(o=r[l],o=typeof o=="string"?[o]:o,i=o.length,s=-1;++s<i;)n[o[s]]=n[l]}function gk(e,t){var n=ey.highlight,r;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(ht.util.type(t)==="Object")r=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(Tf.call(ht.languages,t))r=ht.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,r,t)}function mk(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return Tf.call(ht.languages,e)}function vk(){var e=ht.languages,t=[],n;for(n in e)Tf.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function yk(e,t,n){var r;return typeof e=="string"?{type:"text",value:e}:ht.util.type(e)==="Array"?bk(e,t):(r={type:e.type,content:ht.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(r.classes=r.classes.concat(e.alias)),ht.hooks.run("wrap",r),ik(r.tag+"."+r.classes.join("."),xk(r.attributes),r.content))}function bk(e,t){for(var n=[],r=e.length,l=-1,o;++l<r;)o=e[l],o!==""&&o!==null&&o!==void 0&&n.push(o);for(l=-1,r=n.length;++l<r;)o=n[l],n[l]=ht.Token.stringify(o,t,n);return n}function wk(e){return e}function xk(e){var t;for(t in e)e[t]=sk(e[t]);return e}function Sk(){var e="Prism"in xo,t=e?xo.Prism:void 0;return n;function n(){e?xo.Prism=t:delete xo.Prism,e=void 0,t=void 0}}const $f=Kn(fk);var Ef=ax($f,{});Ef.registerLanguage=function(e,t){return $f.register(t)};Ef.alias=function(e,t){return $f.alias(e,t)};const Ma=Ef;var kk=Nf;Nf.displayName="bash";Nf.aliases=["shell"];function Nf(e){(function(t){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},l={bash:r,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:l},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:l},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:l.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:l.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=t.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=l.variable[1].inside,s=0;s<o.length;s++)i[o[s]]=t.languages.bash[o[s]];t.languages.shell=t.languages.bash})(e)}const Ck=Kn(kk);var _k=If;If.displayName="json";If.aliases=["webmanifest"];function If(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}const Tk=Kn(_k);var $k=Lf;Lf.displayName="jsx";Lf.aliases=[];function Lf(e){(function(t){var n=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,l=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,o=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function i(f,m){return f=f.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return l}).replace(/<SPREAD>/g,function(){return o}),RegExp(f,m)}o=i(o).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:i(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:i(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var s=function(f){return f?typeof f=="string"?f:typeof f.content=="string"?f.content:f.content.map(s).join(""):""},d=function(f){for(var m=[],b=0;b<f.length;b++){var S=f[b],I=!1;if(typeof S!="string"&&(S.type==="tag"&&S.content[0]&&S.content[0].type==="tag"?S.content[0].content[0].content==="</"?m.length>0&&m[m.length-1].tagName===s(S.content[0].content[1])&&m.pop():S.content[S.content.length-1].content==="/>"||m.push({tagName:s(S.content[0].content[1]),openedBraces:0}):m.length>0&&S.type==="punctuation"&&S.content==="{"?m[m.length-1].openedBraces++:m.length>0&&m[m.length-1].openedBraces>0&&S.type==="punctuation"&&S.content==="}"?m[m.length-1].openedBraces--:I=!0),(I||typeof S=="string")&&m.length>0&&m[m.length-1].openedBraces===0){var N=s(S);b<f.length-1&&(typeof f[b+1]=="string"||f[b+1].type==="plain-text")&&(N+=s(f[b+1]),f.splice(b+1,1)),b>0&&(typeof f[b-1]=="string"||f[b-1].type==="plain-text")&&(N=s(f[b-1])+N,f.splice(b-1,1),b--),f[b]=new t.Token("plain-text",N,null,N)}S.content&&typeof S.content!="string"&&d(S.content)}};t.hooks.add("after-tokenize",function(f){f.language!=="jsx"&&f.language!=="tsx"||d(f.tokens)})})(e)}const Ek=Kn($k);var Nk=Rf;Rf.displayName="scss";Rf.aliases=[];function Rf(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const Ik=Kn(Nk);var Lk=Pf;Pf.displayName="yaml";Pf.aliases=["yml"];function Pf(e){(function(t){var n=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,l="(?:"+r.source+"(?:[ 	]+"+n.source+")?|"+n.source+"(?:[ 	]+"+r.source+")?)",o=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),i=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function s(d,f){f=(f||"").replace(/m/g,"")+"m";var m=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return l}).replace(/<<value>>/g,function(){return d});return RegExp(m,f)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return l})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return l}).replace(/<<key>>/g,function(){return"(?:"+o+"|"+i+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:s(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:s(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:s(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:s(i),lookbehind:!0,greedy:!0},number:{pattern:s(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:n,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml})(e)}const Rk=Kn(Lk);function ny(e){return typeof e=="string"}function Pk(e){return Array.isArray(e)}function Mk(e){return e===void 0}function Fk(e){return e===null}function $t(e){return!(Mk(e)||Fk(e))}function Ak(e){return!$t(e)}function Ok(...e){throw new Error(e.join(""))}function Dk(){return Intl.DateTimeFormat().resolvedOptions().locale}Dk();const vi=(e,t,n=1)=>{const r=t<e?-Math.abs(n):n;return Array(1+Math.floor(Math.abs((t-e)/n))).fill(e).map((l,o)=>l+o*r)};function ry(e){return Ak(e)?[]:ny(e)?e.length?e.split(/,\s*|\s+/):[]:Pk(e)?e:[e]}function Bk(e){return new Promise(t=>setTimeout(t,e))}Ma.registerLanguage("jsx",Ek);Ma.registerLanguage("json",Tk);Ma.registerLanguage("css",rk);Ma.registerLanguage("scss",Ik);Ma.registerLanguage("bash",Ck);Ma.registerLanguage("yaml",Rk);const Pe=({code:e,language:t="jsx",caption:n,expand:r=!1,fixed:l=r,className:o=""})=>{const[i,s]=j.useState(!1),[d,f]=j.useState(r),m=()=>{navigator.clipboard.writeText(e),s(!0),Bk(2e3).then(()=>s(!1))};return u("div",{className:`codeblock ${o} ${d?"expanded":""} ${l?"fixed-open":"expandable"}`,children:[!!n&&a("h4",{className:"caption",children:n}),u("div",{className:"controls",children:[a("div",{className:"expand",onClick:()=>f(!d),children:d?"Compress":"Expand"}),a("div",{className:`clipboard ${i?"copied":""}`,onClick:m,children:i?"Copied":"Copy"})]}),a(Ma,{language:t,showLineNumbers:!0,useInlineStyles:!1,customStyle:{},children:jk(e)})]})},jk=e=>e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/\/\*\s*REAL\s*\*\/.*?\/\*\s*UNREAL\s*\*\//g,"").replaceAll(/{\/\*\s*(UN?)PRETEND\s*\*\/}/g,"").replace(/\n+$/,""),zk=`// define your brand hue and color name
$purple-hue:   295;
$brand-hue:    $purple-hue;
$brand-color:  'purple';

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,Uk=`// define your own brand colors...
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
`,Wk=`// define your own brand colors and greyscale hues...
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
`,Hk=`// define the colors that you want to use...
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
 */function Re(){return Re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Re.apply(this,arguments)}var dt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dt||(dt={}));const Wm="popstate";function Gk(e){e===void 0&&(e={});function t(r,l){let{pathname:o,search:i,hash:s}=r.location;return ri("",{pathname:o,search:i,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:Ia(l)}return Yk(t,n,null,e)}function ke(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Vk(){return Math.random().toString(36).substr(2,8)}function Hm(e,t){return{usr:e.state,key:e.key,idx:t}}function ri(e,t,n,r){return n===void 0&&(n=null),Re({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?br(t):t,{state:n,key:t&&t.key||r||Vk()})}function Ia(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function br(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Yk(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:o=!1}=r,i=l.history,s=dt.Pop,d=null,f=m();f==null&&(f=0,i.replaceState(Re({},i.state,{idx:f}),""));function m(){return(i.state||{idx:null}).idx}function b(){s=dt.Pop;let L=m(),w=L==null?null:L-f;f=L,d&&d({action:s,location:k.location,delta:w})}function S(L,w){s=dt.Push;let g=ri(k.location,L,w);n&&n(g,L),f=m()+1;let y=Hm(g,f),v=k.createHref(g);try{i.pushState(y,"",v)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;l.location.assign(v)}o&&d&&d({action:s,location:k.location,delta:1})}function I(L,w){s=dt.Replace;let g=ri(k.location,L,w);n&&n(g,L),f=m();let y=Hm(g,f),v=k.createHref(g);i.replaceState(y,"",v),o&&d&&d({action:s,location:k.location,delta:0})}function N(L){let w=l.location.origin!=="null"?l.location.origin:l.location.href,g=typeof L=="string"?L:Ia(L);return ke(w,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,w)}let k={get action(){return s},get location(){return e(l,i)},listen(L){if(d)throw new Error("A history only accepts one active listener");return l.addEventListener(Wm,b),d=L,()=>{l.removeEventListener(Wm,b),d=null}},createHref(L){return t(l,L)},createURL:N,encodeLocation(L){let w=N(L);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:S,replace:I,go(L){return i.go(L)}};return k}var mt;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(mt||(mt={}));const qk=new Set(["lazy","caseSensitive","path","id","index","children"]);function Zk(e){return e.index===!0}function eh(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((l,o)=>{let i=[...n,o],s=typeof l.id=="string"?l.id:i.join("-");if(ke(l.index!==!0||!l.children,"Cannot specify children on an index route"),ke(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),Zk(l)){let d=Re({},l,t(l),{id:s});return r[s]=d,d}else{let d=Re({},l,t(l),{id:s,children:void 0});return r[s]=d,l.children&&(d.children=eh(l.children,t,i,r)),d}})}function gl(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?br(t):t,l=Dl(r.pathname||"/",n);if(l==null)return null;let o=ay(e);Qk(o);let i=null;for(let s=0;i==null&&s<o.length;++s)i=lC(o[s],sC(l));return i}function ay(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(o,i,s)=>{let d={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};d.relativePath.startsWith("/")&&(ke(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let f=ur([r,d.relativePath]),m=n.concat(d);o.children&&o.children.length>0&&(ke(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),ay(o.children,t,m,f)),!(o.path==null&&!o.index)&&t.push({path:f,score:rC(f,o.index),routesMeta:m})};return e.forEach((o,i)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))l(o,i);else for(let d of ly(o.path))l(o,i,d)}),t}function ly(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let i=ly(r.join("/")),s=[];return s.push(...i.map(d=>d===""?o:[o,d].join("/"))),l&&s.push(...i),s.map(d=>e.startsWith("/")&&d===""?"/":d)}function Qk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:aC(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Kk=/^:\w+$/,Xk=3,Jk=2,eC=1,tC=10,nC=-2,Gm=e=>e==="*";function rC(e,t){let n=e.split("/"),r=n.length;return n.some(Gm)&&(r+=nC),t&&(r+=Jk),n.filter(l=>!Gm(l)).reduce((l,o)=>l+(Kk.test(o)?Xk:o===""?eC:tC),r)}function aC(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function lC(e,t){let{routesMeta:n}=e,r={},l="/",o=[];for(let i=0;i<n.length;++i){let s=n[i],d=i===n.length-1,f=l==="/"?t:t.slice(l.length)||"/",m=oC({path:s.relativePath,caseSensitive:s.caseSensitive,end:d},f);if(!m)return null;Object.assign(r,m.params);let b=s.route;o.push({params:r,pathname:ur([l,m.pathname]),pathnameBase:hC(ur([l,m.pathnameBase])),route:b}),m.pathnameBase!=="/"&&(l=ur([l,m.pathnameBase]))}return o}function oC(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=iC(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let o=l[0],i=o.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((f,m,b)=>{if(m==="*"){let S=s[b]||"";i=o.slice(0,o.length-S.length).replace(/(.)\/+$/,"$1")}return f[m]=cC(s[b]||"",m),f},{}),pathname:o,pathnameBase:i,pattern:e}}function iC(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Rl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function sC(e){try{return decodeURI(e)}catch(t){return Rl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function cC(e,t){try{return decodeURIComponent(e)}catch(n){return Rl(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Dl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function dC(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?br(e):e;return{pathname:n?n.startsWith("/")?n:uC(n,t):t,search:fC(r),hash:pC(l)}}function uC(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Wd(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Lc(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Mf(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=br(e):(l=Re({},e),ke(!l.pathname||!l.pathname.includes("?"),Wd("?","pathname","search",l)),ke(!l.pathname||!l.pathname.includes("#"),Wd("#","pathname","hash",l)),ke(!l.search||!l.search.includes("#"),Wd("#","search","hash",l)));let o=e===""||l.pathname==="",i=o?"/":l.pathname,s;if(r||i==null)s=n;else{let b=t.length-1;if(i.startsWith("..")){let S=i.split("/");for(;S[0]==="..";)S.shift(),b-=1;l.pathname=S.join("/")}s=b>=0?t[b]:"/"}let d=dC(l,s),f=i&&i!=="/"&&i.endsWith("/"),m=(o||i===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(f||m)&&(d.pathname+="/"),d}const ur=e=>e.join("/").replace(/\/\/+/g,"/"),hC=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,pC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Ff{constructor(t,n,r,l){l===void 0&&(l=!1),this.status=t,this.statusText=n||"",this.internal=l,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function oy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const iy=["post","put","patch","delete"],gC=new Set(iy),mC=["get",...iy],vC=new Set(mC),yC=new Set([301,302,303,307,308]),bC=new Set([307,308]),Hd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},wC={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Vm={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},sy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xC=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function SC(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;ke(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let l;if(e.mapRouteProperties)l=e.mapRouteProperties;else if(e.detectErrorBoundary){let A=e.detectErrorBoundary;l=D=>({hasErrorBoundary:A(D)})}else l=xC;let o={},i=eh(e.routes,l,void 0,o),s,d=e.basename||"/",f=Re({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),m=null,b=new Set,S=null,I=null,N=null,k=e.hydrationData!=null,L=gl(i,e.history.location,d),w=null;if(L==null){let A=Mn(404,{pathname:e.history.location.pathname}),{matches:D,route:H}=Jm(i);L=D,w={[H.id]:A}}let g=!L.some(A=>A.route.lazy)&&(!L.some(A=>A.route.loader)||e.hydrationData!=null),y,v={historyAction:e.history.action,location:e.history.location,matches:L,initialized:g,navigation:Hd,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||w,fetchers:new Map,blockers:new Map},$=dt.Pop,_=!1,M,O=!1,z=!1,q=[],he=[],se=new Map,ze=0,lt=-1,Ve=new Map,Be=new Set,Ye=new Map,U=new Map,Z=new Map,J=!1;function le(){return m=e.history.listen(A=>{let{action:D,location:H,delta:Q}=A;if(J){J=!1;return}Rl(Z.size===0||Q!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ie=Zl({currentLocation:v.location,nextLocation:H,historyAction:D});if(ie&&Q!=null){J=!0,e.history.go(Q*-1),ra(ie,{state:"blocked",location:H,proceed(){ra(ie,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),e.history.go(Q)},reset(){wr(ie),pe({blockers:new Map(y.state.blockers)})}});return}return Mt(D,H)}),v.initialized||Mt(dt.Pop,v.location),y}function fe(){m&&m(),b.clear(),M&&M.abort(),v.fetchers.forEach((A,D)=>Gl(D)),v.blockers.forEach((A,D)=>wr(D))}function Bt(A){return b.add(A),()=>b.delete(A)}function pe(A){v=Re({},v,A),b.forEach(D=>D(v))}function et(A,D){var H,Q;let ie=v.actionData!=null&&v.navigation.formMethod!=null&&or(v.navigation.formMethod)&&v.navigation.state==="loading"&&((H=A.state)==null?void 0:H._isRedirect)!==!0,ce;D.actionData?Object.keys(D.actionData).length>0?ce=D.actionData:ce=null:ie?ce=v.actionData:ce=null;let de=D.loaderData?Xm(v.loaderData,D.loaderData,D.matches||[],D.errors):v.loaderData;for(let[ae]of Z)wr(ae);let ue=_===!0||v.navigation.formMethod!=null&&or(v.navigation.formMethod)&&((Q=A.state)==null?void 0:Q._isRedirect)!==!0;s&&(i=s,s=void 0),pe(Re({},D,{actionData:ce,loaderData:de,historyAction:$,location:A,initialized:!0,navigation:Hd,revalidation:"idle",restoreScrollPosition:Ti(A,D.matches||v.matches),preventScrollReset:ue,blockers:new Map(v.blockers)})),O||$===dt.Pop||($===dt.Push?e.history.push(A,A.state):$===dt.Replace&&e.history.replace(A,A.state)),$=dt.Pop,_=!1,O=!1,z=!1,q=[],he=[]}async function qe(A,D){if(typeof A=="number"){e.history.go(A);return}let H=th(v.location,v.matches,d,f.v7_prependBasename,A,D==null?void 0:D.fromRouteId,D==null?void 0:D.relative),{path:Q,submission:ie,error:ce}=Ym(f.v7_normalizeFormMethod,!1,H,D),de=v.location,ue=ri(v.location,Q,D&&D.state);ue=Re({},ue,e.history.encodeLocation(ue));let ae=D&&D.replace!=null?D.replace:void 0,Te=dt.Push;ae===!0?Te=dt.Replace:ae===!1||ie!=null&&or(ie.formMethod)&&ie.formAction===v.location.pathname+v.location.search&&(Te=dt.Replace);let Me=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,bt=Zl({currentLocation:de,nextLocation:ue,historyAction:Te});if(bt){ra(bt,{state:"blocked",location:ue,proceed(){ra(bt,{state:"proceeding",proceed:void 0,reset:void 0,location:ue}),qe(A,D)},reset(){wr(bt),pe({blockers:new Map(v.blockers)})}});return}return await Mt(Te,ue,{submission:ie,pendingError:ce,preventScrollReset:Me,replace:D&&D.replace})}function ft(){if(Hl(),pe({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){Mt(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}Mt($||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function Mt(A,D,H){M&&M.abort(),M=null,$=A,O=(H&&H.startUninterruptedRevalidation)===!0,_i(v.location,v.matches),_=(H&&H.preventScrollReset)===!0;let Q=s||i,ie=H&&H.overrideNavigation,ce=gl(Q,D,d);if(!ce){let st=Mn(404,{pathname:D.pathname}),{matches:pt,route:yn}=Jm(Q);Oa(),et(D,{matches:pt,loaderData:{},errors:{[yn.id]:st}});return}if(v.initialized&&!z&&$C(v.location,D)&&!(H&&H.submission&&or(H.submission.formMethod))){et(D,{matches:ce});return}M=new AbortController;let de=po(e.history,D,M.signal,H&&H.submission),ue,ae;if(H&&H.pendingError)ae={[ml(ce).route.id]:H.pendingError};else if(H&&H.submission&&or(H.submission.formMethod)){let st=await Xr(de,D,H.submission,ce,{replace:H.replace});if(st.shortCircuited)return;ue=st.pendingActionData,ae=st.pendingActionError,ie=Re({state:"loading",location:D},H.submission),de=new Request(de.url,{signal:de.signal})}let{shortCircuited:Te,loaderData:Me,errors:bt}=await Jr(de,D,ce,ie,H&&H.submission,H&&H.fetcherSubmission,H&&H.replace,ue,ae);Te||(M=null,et(D,Re({matches:ce},ue?{actionData:ue}:{},{loaderData:Me,errors:bt})))}async function Xr(A,D,H,Q,ie){Hl();let ce=Re({state:"submitting",location:D},H);pe({navigation:ce});let de,ue=nh(Q,D);if(!ue.route.action&&!ue.route.lazy)de={type:mt.error,error:Mn(405,{method:A.method,pathname:D.pathname,routeId:ue.route.id})};else if(de=await fo("action",A,ue,Q,o,l,d),A.signal.aborted)return{shortCircuited:!0};if(kl(de)){let ae;return ie&&ie.replace!=null?ae=ie.replace:ae=de.location===v.location.pathname+v.location.search,await ta(v,de,{submission:H,replace:ae}),{shortCircuited:!0}}if(Fo(de)){let ae=ml(Q,ue.route.id);return(ie&&ie.replace)!==!0&&($=dt.Push),{pendingActionData:{},pendingActionError:{[ae.route.id]:de.error}}}if(ba(de))throw Mn(400,{type:"defer-action"});return{pendingActionData:{[ue.route.id]:de.data}}}async function Jr(A,D,H,Q,ie,ce,de,ue,ae){let Te=Q;Te||(Te=Re({state:"loading",location:D,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ie));let Me=ie||ce?ie||ce:Te.formMethod&&Te.formAction&&Te.formData&&Te.formEncType?{formMethod:Te.formMethod,formAction:Te.formAction,formData:Te.formData,formEncType:Te.formEncType}:void 0,bt=s||i,[st,pt]=qm(e.history,v,H,Me,D,z,q,he,Ye,bt,d,ue,ae);if(Oa(je=>!(H&&H.some(qt=>qt.route.id===je))||st&&st.some(qt=>qt.route.id===je)),st.length===0&&pt.length===0){let je=Yl();return et(D,Re({matches:H,loaderData:{},errors:ae||null},ue?{actionData:ue}:{},je?{fetchers:new Map(v.fetchers)}:{})),{shortCircuited:!0}}if(!O){pt.forEach(qt=>{let tr=v.fetchers.get(qt.key),gt={state:"loading",data:tr&&tr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(qt.key,gt)});let je=ue||v.actionData;pe(Re({navigation:Te},je?Object.keys(je).length===0?{actionData:null}:{actionData:je}:{},pt.length>0?{fetchers:new Map(v.fetchers)}:{}))}lt=++ze,pt.forEach(je=>{je.controller&&se.set(je.key,je.controller)});let yn=()=>pt.forEach(je=>er(je.key));M&&M.signal.addEventListener("abort",yn);let{results:aa,loaderResults:Ql,fetcherResults:Da}=await Si(v.matches,H,st,pt,A);if(A.signal.aborted)return{shortCircuited:!0};M&&M.signal.removeEventListener("abort",yn),pt.forEach(je=>se.delete(je.key));let $n=e0(aa);if($n)return await ta(v,$n,{replace:de}),{shortCircuited:!0};let{loaderData:la,errors:Ba}=Km(v,H,st,Ql,ae,pt,Da,U);U.forEach((je,qt)=>{je.subscribe(tr=>{(tr||je.done)&&U.delete(qt)})});let Kl=Yl(),Xl=ql(lt),ja=Kl||Xl||pt.length>0;return Re({loaderData:la,errors:Ba},ja?{fetchers:new Map(v.fetchers)}:{})}function Jn(A){return v.fetchers.get(A)||wC}function Ul(A,D,H,Q){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");se.has(A)&&er(A);let ie=s||i,ce=th(v.location,v.matches,d,f.v7_prependBasename,H,D,Q==null?void 0:Q.relative),de=gl(ie,ce,d);if(!de){na(A,D,Mn(404,{pathname:ce}));return}let{path:ue,submission:ae}=Ym(f.v7_normalizeFormMethod,!0,ce,Q),Te=nh(de,ue);if(_=(Q&&Q.preventScrollReset)===!0,ae&&or(ae.formMethod)){ea(A,D,ue,Te,de,ae);return}Ye.set(A,{routeId:D,path:ue}),Wl(A,D,ue,Te,de,ae)}async function ea(A,D,H,Q,ie,ce){if(Hl(),Ye.delete(A),!Q.route.action&&!Q.route.lazy){let gt=Mn(405,{method:ce.formMethod,pathname:H,routeId:D});na(A,D,gt);return}let de=v.fetchers.get(A),ue=Re({state:"submitting"},ce,{data:de&&de.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(A,ue),pe({fetchers:new Map(v.fetchers)});let ae=new AbortController,Te=po(e.history,H,ae.signal,ce);se.set(A,ae);let Me=await fo("action",Te,Q,ie,o,l,d);if(Te.signal.aborted){se.get(A)===ae&&se.delete(A);return}if(kl(Me)){se.delete(A),Be.add(A);let gt=Re({state:"loading"},ce,{data:void 0," _hasFetcherDoneAnything ":!0});return v.fetchers.set(A,gt),pe({fetchers:new Map(v.fetchers)}),ta(v,Me,{submission:ce,isFetchActionRedirect:!0})}if(Fo(Me)){na(A,D,Me.error);return}if(ba(Me))throw Mn(400,{type:"defer-action"});let bt=v.navigation.location||v.location,st=po(e.history,bt,ae.signal),pt=s||i,yn=v.navigation.state!=="idle"?gl(pt,v.navigation.location,d):v.matches;ke(yn,"Didn't find any matches after fetcher action");let aa=++ze;Ve.set(A,aa);let Ql=Re({state:"loading",data:Me.data},ce,{" _hasFetcherDoneAnything ":!0});v.fetchers.set(A,Ql);let[Da,$n]=qm(e.history,v,yn,ce,bt,z,q,he,Ye,pt,d,{[Q.route.id]:Me.data},void 0);$n.filter(gt=>gt.key!==A).forEach(gt=>{let Jl=gt.key,$i=v.fetchers.get(Jl),Ei={state:"loading",data:$i&&$i.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(Jl,Ei),gt.controller&&se.set(Jl,gt.controller)}),pe({fetchers:new Map(v.fetchers)});let la=()=>$n.forEach(gt=>er(gt.key));ae.signal.addEventListener("abort",la);let{results:Ba,loaderResults:Kl,fetcherResults:Xl}=await Si(v.matches,yn,Da,$n,st);if(ae.signal.aborted)return;ae.signal.removeEventListener("abort",la),Ve.delete(A),se.delete(A),$n.forEach(gt=>se.delete(gt.key));let ja=e0(Ba);if(ja)return ta(v,ja);let{loaderData:je,errors:qt}=Km(v,v.matches,Da,Kl,void 0,$n,Xl,U);if(v.fetchers.has(A)){let gt={state:"idle",data:Me.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(A,gt)}let tr=ql(aa);v.navigation.state==="loading"&&aa>lt?(ke($,"Expected pending action"),M&&M.abort(),et(v.navigation.location,{matches:yn,loaderData:je,errors:qt,fetchers:new Map(v.fetchers)})):(pe(Re({errors:qt,loaderData:Xm(v.loaderData,je,yn,qt)},tr||$n.length>0?{fetchers:new Map(v.fetchers)}:{})),z=!1)}async function Wl(A,D,H,Q,ie,ce){let de=v.fetchers.get(A),ue=Re({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ce,{data:de&&de.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(A,ue),pe({fetchers:new Map(v.fetchers)});let ae=new AbortController,Te=po(e.history,H,ae.signal);se.set(A,ae);let Me=await fo("loader",Te,Q,ie,o,l,d);if(ba(Me)&&(Me=await hy(Me,Te.signal,!0)||Me),se.get(A)===ae&&se.delete(A),Te.signal.aborted)return;if(kl(Me)){Be.add(A),await ta(v,Me);return}if(Fo(Me)){let st=ml(v.matches,D);v.fetchers.delete(A),pe({fetchers:new Map(v.fetchers),errors:{[st.route.id]:Me.error}});return}ke(!ba(Me),"Unhandled fetcher deferred data");let bt={state:"idle",data:Me.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(A,bt),pe({fetchers:new Map(v.fetchers)})}async function ta(A,D,H){let{submission:Q,replace:ie,isFetchActionRedirect:ce}=H===void 0?{}:H;D.revalidate&&(z=!0);let de=ri(A.location,D.location,Re({_isRedirect:!0},ce?{_isFetchActionRedirect:!0}:{}));if(ke(de,"Expected a location on the redirect navigation"),sy.test(D.location)&&n){let st=e.history.createURL(D.location),pt=Dl(st.pathname,d)==null;if(t.location.origin!==st.origin||pt){ie?t.location.replace(D.location):t.location.assign(D.location);return}}M=null;let ue=ie===!0?dt.Replace:dt.Push,{formMethod:ae,formAction:Te,formEncType:Me,formData:bt}=A.navigation;!Q&&ae&&Te&&bt&&Me&&(Q={formMethod:ae,formAction:Te,formEncType:Me,formData:bt}),bC.has(D.status)&&Q&&or(Q.formMethod)?await Mt(ue,de,{submission:Re({},Q,{formAction:D.location}),preventScrollReset:_}):ce?await Mt(ue,de,{overrideNavigation:{state:"loading",location:de,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:Q,preventScrollReset:_}):await Mt(ue,de,{overrideNavigation:{state:"loading",location:de,formMethod:Q?Q.formMethod:void 0,formAction:Q?Q.formAction:void 0,formEncType:Q?Q.formEncType:void 0,formData:Q?Q.formData:void 0},preventScrollReset:_})}async function Si(A,D,H,Q,ie){let ce=await Promise.all([...H.map(ae=>fo("loader",ie,ae,D,o,l,d)),...Q.map(ae=>ae.matches&&ae.match&&ae.controller?fo("loader",po(e.history,ae.path,ae.controller.signal),ae.match,ae.matches,o,l,d):{type:mt.error,error:Mn(404,{pathname:ae.path})})]),de=ce.slice(0,H.length),ue=ce.slice(H.length);return await Promise.all([t0(A,H,de,de.map(()=>ie.signal),!1,v.loaderData),t0(A,Q.map(ae=>ae.match),ue,Q.map(ae=>ae.controller?ae.controller.signal:null),!0)]),{results:ce,loaderResults:de,fetcherResults:ue}}function Hl(){z=!0,q.push(...Oa()),Ye.forEach((A,D)=>{se.has(D)&&(he.push(D),er(D))})}function na(A,D,H){let Q=ml(v.matches,D);Gl(A),pe({errors:{[Q.route.id]:H},fetchers:new Map(v.fetchers)})}function Gl(A){let D=v.fetchers.get(A);se.has(A)&&!(D&&D.state==="loading"&&Ve.has(A))&&er(A),Ye.delete(A),Ve.delete(A),Be.delete(A),v.fetchers.delete(A)}function er(A){let D=se.get(A);ke(D,"Expected fetch controller: "+A),D.abort(),se.delete(A)}function Vl(A){for(let D of A){let Q={state:"idle",data:Jn(D).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(D,Q)}}function Yl(){let A=[],D=!1;for(let H of Be){let Q=v.fetchers.get(H);ke(Q,"Expected fetcher: "+H),Q.state==="loading"&&(Be.delete(H),A.push(H),D=!0)}return Vl(A),D}function ql(A){let D=[];for(let[H,Q]of Ve)if(Q<A){let ie=v.fetchers.get(H);ke(ie,"Expected fetcher: "+H),ie.state==="loading"&&(er(H),Ve.delete(H),D.push(H))}return Vl(D),D.length>0}function ki(A,D){let H=v.blockers.get(A)||Vm;return Z.get(A)!==D&&Z.set(A,D),H}function wr(A){v.blockers.delete(A),Z.delete(A)}function ra(A,D){let H=v.blockers.get(A)||Vm;ke(H.state==="unblocked"&&D.state==="blocked"||H.state==="blocked"&&D.state==="blocked"||H.state==="blocked"&&D.state==="proceeding"||H.state==="blocked"&&D.state==="unblocked"||H.state==="proceeding"&&D.state==="unblocked","Invalid blocker state transition: "+H.state+" -> "+D.state),v.blockers.set(A,D),pe({blockers:new Map(v.blockers)})}function Zl(A){let{currentLocation:D,nextLocation:H,historyAction:Q}=A;if(Z.size===0)return;Z.size>1&&Rl(!1,"A router only supports one blocker at a time");let ie=Array.from(Z.entries()),[ce,de]=ie[ie.length-1],ue=v.blockers.get(ce);if(!(ue&&ue.state==="proceeding")&&de({currentLocation:D,nextLocation:H,historyAction:Q}))return ce}function Oa(A){let D=[];return U.forEach((H,Q)=>{(!A||A(Q))&&(H.cancel(),D.push(Q),U.delete(Q))}),D}function Ci(A,D,H){if(S=A,N=D,I=H||(Q=>Q.key),!k&&v.navigation===Hd){k=!0;let Q=Ti(v.location,v.matches);Q!=null&&pe({restoreScrollPosition:Q})}return()=>{S=null,N=null,I=null}}function _i(A,D){if(S&&I&&N){let H=D.map(ie=>n0(ie,v.loaderData)),Q=I(A,H)||A.key;S[Q]=N()}}function Ti(A,D){if(S&&I&&N){let H=D.map(ce=>n0(ce,v.loaderData)),Q=I(A,H)||A.key,ie=S[Q];if(typeof ie=="number")return ie}return null}function Uc(A){o={},s=eh(A,l,void 0,o)}return y={get basename(){return d},get state(){return v},get routes(){return i},initialize:le,subscribe:Bt,enableScrollRestoration:Ci,navigate:qe,fetch:Ul,revalidate:ft,createHref:A=>e.history.createHref(A),encodeLocation:A=>e.history.encodeLocation(A),getFetcher:Jn,deleteFetcher:Gl,dispose:fe,getBlocker:ki,deleteBlocker:wr,_internalFetchControllers:se,_internalActiveDeferreds:U,_internalSetRoutes:Uc},y}function kC(e){return e!=null&&"formData"in e}function th(e,t,n,r,l,o,i){let s,d;if(o!=null&&i!=="path"){s=[];for(let m of t)if(s.push(m),m.route.id===o){d=m;break}}else s=t,d=t[t.length-1];let f=Mf(l||".",Lc(s).map(m=>m.pathnameBase),Dl(e.pathname,n)||e.pathname,i==="path");return l==null&&(f.search=e.search,f.hash=e.hash),(l==null||l===""||l===".")&&d&&d.route.index&&!Af(f.search)&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(f.pathname=f.pathname==="/"?n:ur([n,f.pathname])),Ia(f)}function Ym(e,t,n,r){if(!r||!kC(r))return{path:n};if(r.formMethod&&!IC(r.formMethod))return{path:n,error:Mn(405,{method:r.formMethod})};let l;if(r.formData){let s=r.formMethod||"get";if(l={formMethod:e?s.toUpperCase():s.toLowerCase(),formAction:uy(n),formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:r.formData},or(l.formMethod))return{path:n,submission:l}}let o=br(n),i=dy(r.formData);return t&&o.search&&Af(o.search)&&i.append("index",""),o.search="?"+i,{path:Ia(o),submission:l}}function CC(e,t){let n=e;if(t){let r=e.findIndex(l=>l.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function qm(e,t,n,r,l,o,i,s,d,f,m,b,S){let I=S?Object.values(S)[0]:b?Object.values(b)[0]:void 0,N=e.createURL(t.location),k=e.createURL(l),L=S?Object.keys(S)[0]:void 0,g=CC(n,L).filter((v,$)=>{if(v.route.lazy)return!0;if(v.route.loader==null)return!1;if(_C(t.loaderData,t.matches[$],v)||i.some(O=>O===v.route.id))return!0;let _=t.matches[$],M=v;return Zm(v,Re({currentUrl:N,currentParams:_.params,nextUrl:k,nextParams:M.params},r,{actionResult:I,defaultShouldRevalidate:o||N.pathname+N.search===k.pathname+k.search||N.search!==k.search||cy(_,M)}))}),y=[];return d.forEach((v,$)=>{if(!n.some(z=>z.route.id===v.routeId))return;let _=gl(f,v.path,m);if(!_){y.push({key:$,routeId:v.routeId,path:v.path,matches:null,match:null,controller:null});return}let M=nh(_,v.path);if(s.includes($)){y.push({key:$,routeId:v.routeId,path:v.path,matches:_,match:M,controller:new AbortController});return}Zm(M,Re({currentUrl:N,currentParams:t.matches[t.matches.length-1].params,nextUrl:k,nextParams:n[n.length-1].params},r,{actionResult:I,defaultShouldRevalidate:o}))&&y.push({key:$,routeId:v.routeId,path:v.path,matches:_,match:M,controller:new AbortController})}),[g,y]}function _C(e,t,n){let r=!t||n.route.id!==t.route.id,l=e[n.route.id]===void 0;return r||l}function cy(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Zm(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Qm(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let l=n[e.id];ke(l,"No route found in manifest");let o={};for(let i in r){let d=l[i]!==void 0&&i!=="hasErrorBoundary";Rl(!d,'Route "'+l.id+'" has a static property "'+i+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+i+'" will be ignored.')),!d&&!qk.has(i)&&(o[i]=r[i])}Object.assign(l,o),Object.assign(l,Re({},t(l),{lazy:void 0}))}async function fo(e,t,n,r,l,o,i,s,d,f){s===void 0&&(s=!1),d===void 0&&(d=!1);let m,b,S,I=L=>{let w,g=new Promise((y,v)=>w=v);return S=()=>w(),t.signal.addEventListener("abort",S),Promise.race([L({request:t,params:n.params,context:f}),g])};try{let L=n.route[e];if(n.route.lazy)if(L)b=(await Promise.all([I(L),Qm(n.route,o,l)]))[0];else if(await Qm(n.route,o,l),L=n.route[e],L)b=await I(L);else if(e==="action"){let w=new URL(t.url),g=w.pathname+w.search;throw Mn(405,{method:t.method,pathname:g,routeId:n.route.id})}else return{type:mt.data,data:void 0};else if(L)b=await I(L);else{let w=new URL(t.url),g=w.pathname+w.search;throw Mn(404,{pathname:g})}ke(b!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(L){m=mt.error,b=L}finally{S&&t.signal.removeEventListener("abort",S)}if(NC(b)){let L=b.status;if(yC.has(L)){let y=b.headers.get("Location");if(ke(y,"Redirects returned/thrown from loaders/actions must have a Location header"),!sy.test(y))y=th(new URL(t.url),r.slice(0,r.indexOf(n)+1),i,!0,y);else if(!s){let v=new URL(t.url),$=y.startsWith("//")?new URL(v.protocol+y):new URL(y),_=Dl($.pathname,i)!=null;$.origin===v.origin&&_&&(y=$.pathname+$.search+$.hash)}if(s)throw b.headers.set("Location",y),b;return{type:mt.redirect,status:L,location:y,revalidate:b.headers.get("X-Remix-Revalidate")!==null}}if(d)throw{type:m||mt.data,response:b};let w,g=b.headers.get("Content-Type");return g&&/\bapplication\/json\b/.test(g)?w=await b.json():w=await b.text(),m===mt.error?{type:m,error:new Ff(L,b.statusText,w),headers:b.headers}:{type:mt.data,data:w,statusCode:b.status,headers:b.headers}}if(m===mt.error)return{type:m,error:b};if(EC(b)){var N,k;return{type:mt.deferred,deferredData:b,statusCode:(N=b.init)==null?void 0:N.status,headers:((k=b.init)==null?void 0:k.headers)&&new Headers(b.init.headers)}}return{type:mt.data,data:b}}function po(e,t,n,r){let l=e.createURL(uy(t)).toString(),o={signal:n};if(r&&or(r.formMethod)){let{formMethod:i,formEncType:s,formData:d}=r;o.method=i.toUpperCase(),o.body=s==="application/x-www-form-urlencoded"?dy(d):d}return new Request(l,o)}function dy(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function TC(e,t,n,r,l){let o={},i=null,s,d=!1,f={};return n.forEach((m,b)=>{let S=t[b].route.id;if(ke(!kl(m),"Cannot handle redirect results in processLoaderData"),Fo(m)){let I=ml(e,S),N=m.error;r&&(N=Object.values(r)[0],r=void 0),i=i||{},i[I.route.id]==null&&(i[I.route.id]=N),o[S]=void 0,d||(d=!0,s=oy(m.error)?m.error.status:500),m.headers&&(f[S]=m.headers)}else ba(m)?(l.set(S,m.deferredData),o[S]=m.deferredData.data):o[S]=m.data,m.statusCode!=null&&m.statusCode!==200&&!d&&(s=m.statusCode),m.headers&&(f[S]=m.headers)}),r&&(i=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:i,statusCode:s||200,loaderHeaders:f}}function Km(e,t,n,r,l,o,i,s){let{loaderData:d,errors:f}=TC(t,n,r,l,s);for(let m=0;m<o.length;m++){let{key:b,match:S,controller:I}=o[m];ke(i!==void 0&&i[m]!==void 0,"Did not find corresponding fetcher result");let N=i[m];if(!(I&&I.signal.aborted))if(Fo(N)){let k=ml(e.matches,S==null?void 0:S.route.id);f&&f[k.route.id]||(f=Re({},f,{[k.route.id]:N.error})),e.fetchers.delete(b)}else if(kl(N))ke(!1,"Unhandled fetcher revalidation redirect");else if(ba(N))ke(!1,"Unhandled fetcher deferred data");else{let k={state:"idle",data:N.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(b,k)}}return{loaderData:d,errors:f}}function Xm(e,t,n,r){let l=Re({},t);for(let o of n){let i=o.route.id;if(t.hasOwnProperty(i)?t[i]!==void 0&&(l[i]=t[i]):e[i]!==void 0&&o.route.loader&&(l[i]=e[i]),r&&r.hasOwnProperty(i))break}return l}function ml(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Jm(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Mn(e,t){let{pathname:n,routeId:r,method:l,type:o}=t===void 0?{}:t,i="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(i="Bad Request",l&&n&&r?s="You made a "+l+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(s="defer() is not supported in actions")):e===403?(i="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(i="Not Found",s='No route matches URL "'+n+'"'):e===405&&(i="Method Not Allowed",l&&n&&r?s="You made a "+l.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":l&&(s='Invalid request method "'+l.toUpperCase()+'"')),new Ff(e||500,i,new Error(s),!0)}function e0(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(kl(n))return n}}function uy(e){let t=typeof e=="string"?br(e):e;return Ia(Re({},t,{hash:""}))}function $C(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function ba(e){return e.type===mt.deferred}function Fo(e){return e.type===mt.error}function kl(e){return(e&&e.type)===mt.redirect}function EC(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function NC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function IC(e){return vC.has(e.toLowerCase())}function or(e){return gC.has(e.toLowerCase())}async function t0(e,t,n,r,l,o){for(let i=0;i<n.length;i++){let s=n[i],d=t[i];if(!d)continue;let f=e.find(b=>b.route.id===d.route.id),m=f!=null&&!cy(f,d)&&(o&&o[d.route.id])!==void 0;if(ba(s)&&(l||m)){let b=r[i];ke(b,"Expected an AbortSignal for revalidating fetcher deferred result"),await hy(s,b,l).then(S=>{S&&(n[i]=S||n[i])})}}}async function hy(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:mt.data,data:e.deferredData.unwrappedData}}catch(l){return{type:mt.error,error:l}}return{type:mt.data,data:e.deferredData.data}}}function Af(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function n0(e,t){let{route:n,pathname:r,params:l}=e;return{id:n.id,pathname:r,params:l,data:t[n.id],handle:n.handle}}function nh(e,t){let n=typeof t=="string"?br(t).search:t.search;if(e[e.length-1].route.index&&Af(n||""))return e[e.length-1];let r=Lc(e);return r[r.length-1]}/**
 * React Router v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nc(){return nc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nc.apply(this,arguments)}const Rc=j.createContext(null),Of=j.createContext(null),Fa=j.createContext(null),Pc=j.createContext(null),Kr=j.createContext({outlet:null,matches:[],isDataRoute:!1}),fy=j.createContext(null);function LC(e,t){let{relative:n}=t===void 0?{}:t;yi()||ke(!1);let{basename:r,navigator:l}=j.useContext(Fa),{hash:o,pathname:i,search:s}=Df(e,{relative:n}),d=i;return r!=="/"&&(d=i==="/"?r:ur([r,i])),l.createHref({pathname:d,search:s,hash:o})}function yi(){return j.useContext(Pc)!=null}function Bl(){return yi()||ke(!1),j.useContext(Pc).location}function py(e){j.useContext(Fa).static||j.useLayoutEffect(e)}function RC(){let{isDataRoute:e}=j.useContext(Kr);return e?VC():PC()}function PC(){yi()||ke(!1);let e=j.useContext(Rc),{basename:t,navigator:n}=j.useContext(Fa),{matches:r}=j.useContext(Kr),{pathname:l}=Bl(),o=JSON.stringify(Lc(r).map(d=>d.pathnameBase)),i=j.useRef(!1);return py(()=>{i.current=!0}),j.useCallback(function(d,f){if(f===void 0&&(f={}),!i.current)return;if(typeof d=="number"){n.go(d);return}let m=Mf(d,JSON.parse(o),l,f.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:ur([t,m.pathname])),(f.replace?n.replace:n.push)(m,f.state,f)},[t,n,o,l,e])}const MC=j.createContext(null);function FC(e){let t=j.useContext(Kr).outlet;return t&&j.createElement(MC.Provider,{value:e},t)}function Df(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=j.useContext(Kr),{pathname:l}=Bl(),o=JSON.stringify(Lc(r).map(i=>i.pathnameBase));return j.useMemo(()=>Mf(e,JSON.parse(o),l,n==="path"),[e,o,l,n])}function AC(e,t,n){yi()||ke(!1);let{navigator:r}=j.useContext(Fa),{matches:l}=j.useContext(Kr),o=l[l.length-1],i=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let d=Bl(),f;if(t){var m;let k=typeof t=="string"?br(t):t;s==="/"||(m=k.pathname)!=null&&m.startsWith(s)||ke(!1),f=k}else f=d;let b=f.pathname||"/",S=s==="/"?b:b.slice(s.length)||"/",I=gl(e,{pathname:S}),N=zC(I&&I.map(k=>Object.assign({},k,{params:Object.assign({},i,k.params),pathname:ur([s,r.encodeLocation?r.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?s:ur([s,r.encodeLocation?r.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),l,n);return t&&N?j.createElement(Pc.Provider,{value:{location:nc({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:dt.Pop}},N):N}function OC(){let e=GC(),t=oy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:l},n):null,o)}const DC=j.createElement(OC,null);class BC extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?j.createElement(Kr.Provider,{value:this.props.routeContext},j.createElement(fy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jC(e){let{routeContext:t,match:n,children:r}=e,l=j.useContext(Rc);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Kr.Provider,{value:t},r)}function zC(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var l;if((l=n)!=null&&l.errors)e=n.matches;else return null}let o=e,i=(r=n)==null?void 0:r.errors;if(i!=null){let s=o.findIndex(d=>d.route.id&&(i==null?void 0:i[d.route.id]));s>=0||ke(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,d,f)=>{let m=d.route.id?i==null?void 0:i[d.route.id]:null,b=null;n&&(b=d.route.errorElement||DC);let S=t.concat(o.slice(0,f+1)),I=()=>{let N;return m?N=b:d.route.Component?N=j.createElement(d.route.Component,null):d.route.element?N=d.route.element:N=s,j.createElement(jC,{match:d,routeContext:{outlet:s,matches:S,isDataRoute:n!=null},children:N})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?j.createElement(BC,{location:n.location,revalidation:n.revalidation,component:b,error:m,children:I(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):I()},null)}var rh;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(rh||(rh={}));var ai;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(ai||(ai={}));function UC(e){let t=j.useContext(Rc);return t||ke(!1),t}function WC(e){let t=j.useContext(Of);return t||ke(!1),t}function HC(e){let t=j.useContext(Kr);return t||ke(!1),t}function gy(e){let t=HC(),n=t.matches[t.matches.length-1];return n.route.id||ke(!1),n.route.id}function GC(){var e;let t=j.useContext(fy),n=WC(ai.UseRouteError),r=gy(ai.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function VC(){let{router:e}=UC(rh.UseNavigateStable),t=gy(ai.UseNavigateStable),n=j.useRef(!1);return py(()=>{n.current=!0}),j.useCallback(function(l,o){o===void 0&&(o={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,nc({fromRouteId:t},o)))},[e,t])}const r0="startTransition";function YC(e){let{fallbackElement:t,router:n}=e,[r,l]=j.useState(n.state),o=j.useCallback(f=>{r0 in vg?vg[r0](()=>l(f)):l(f)},[l]);j.useLayoutEffect(()=>n.subscribe(o),[n,o]);let i=j.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:f=>n.navigate(f),push:(f,m,b)=>n.navigate(f,{state:m,preventScrollReset:b==null?void 0:b.preventScrollReset}),replace:(f,m,b)=>n.navigate(f,{replace:!0,state:m,preventScrollReset:b==null?void 0:b.preventScrollReset})}),[n]),s=n.basename||"/",d=j.useMemo(()=>({router:n,navigator:i,static:!1,basename:s}),[n,i,s]);return j.createElement(j.Fragment,null,j.createElement(Rc.Provider,{value:d},j.createElement(Of.Provider,{value:r},j.createElement(QC,{basename:s,location:r.location,navigationType:r.historyAction,navigator:i},r.initialized?j.createElement(qC,{routes:n.routes,state:r}):t))),null)}function qC(e){let{routes:t,state:n}=e;return AC(t,void 0,n)}function ZC(e){return FC(e.context)}function QC(e){let{basename:t="/",children:n=null,location:r,navigationType:l=dt.Pop,navigator:o,static:i=!1}=e;yi()&&ke(!1);let s=t.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:s,navigator:o,static:i}),[s,o,i]);typeof r=="string"&&(r=br(r));let{pathname:f="/",search:m="",hash:b="",state:S=null,key:I="default"}=r,N=j.useMemo(()=>{let k=Dl(f,s);return k==null?null:{location:{pathname:k,search:m,hash:b,state:S,key:I},navigationType:l}},[s,f,m,b,S,I,l]);return N==null?null:j.createElement(Fa.Provider,{value:d},j.createElement(Pc.Provider,{children:n,value:N}))}var a0;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(a0||(a0={}));new Promise(()=>{});function KC(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:j.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:j.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pl(){return Pl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pl.apply(this,arguments)}function my(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,o;for(o=0;o<r.length;o++)l=r[o],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function XC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function JC(e,t){return e.button===0&&(!t||t==="_self")&&!XC(e)}const e_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],t_=["aria-current","caseSensitive","className","end","style","to","children"];function n_(e,t){return SC({basename:t==null?void 0:t.basename,future:Pl({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:Gk({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||r_(),routes:e,mapRouteProperties:KC}).initialize()}function r_(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Pl({},t,{errors:a_(t.errors)})),t}function a_(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,l]of t)if(l&&l.__type==="RouteErrorResponse")n[r]=new Ff(l.status,l.statusText,l.data,l.internal===!0);else if(l&&l.__type==="Error"){let o=new Error(l.message);o.stack="",n[r]=o}else n[r]=l;return n}const l_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",o_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,i_=j.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:o,replace:i,state:s,target:d,to:f,preventScrollReset:m}=t,b=my(t,e_),{basename:S}=j.useContext(Fa),I,N=!1;if(typeof f=="string"&&o_.test(f)&&(I=f,l_))try{let g=new URL(window.location.href),y=f.startsWith("//")?new URL(g.protocol+f):new URL(f),v=Dl(y.pathname,S);y.origin===g.origin&&v!=null?f=v+y.search+y.hash:N=!0}catch{}let k=LC(f,{relative:l}),L=c_(f,{replace:i,state:s,target:d,preventScrollReset:m,relative:l});function w(g){r&&r(g),g.defaultPrevented||L(g)}return j.createElement("a",Pl({},b,{href:I||k,onClick:N||o?r:w,ref:n,target:d}))}),s_=j.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:l=!1,className:o="",end:i=!1,style:s,to:d,children:f}=t,m=my(t,t_),b=Df(d,{relative:m.relative}),S=Bl(),I=j.useContext(Of),{navigator:N}=j.useContext(Fa),k=N.encodeLocation?N.encodeLocation(b).pathname:b.pathname,L=S.pathname,w=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;l||(L=L.toLowerCase(),w=w?w.toLowerCase():null,k=k.toLowerCase());let g=L===k||!i&&L.startsWith(k)&&L.charAt(k.length)==="/",y=w!=null&&(w===k||!i&&w.startsWith(k)&&w.charAt(k.length)==="/"),v=g?r:void 0,$;typeof o=="function"?$=o({isActive:g,isPending:y}):$=[o,g?"active":null,y?"pending":null].filter(Boolean).join(" ");let _=typeof s=="function"?s({isActive:g,isPending:y}):s;return j.createElement(i_,Pl({},m,{"aria-current":v,className:$,ref:n,style:_,to:d}),typeof f=="function"?f({isActive:g,isPending:y}):f)});var l0;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(l0||(l0={}));var o0;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(o0||(o0={}));function c_(e,t){let{target:n,replace:r,state:l,preventScrollReset:o,relative:i}=t===void 0?{}:t,s=RC(),d=Bl(),f=Df(e,{relative:i});return j.useCallback(m=>{if(JC(m,n)){m.preventDefault();let b=r!==void 0?r:Ia(d)===Ia(f);s(e,{replace:b,state:l,preventScrollReset:o,relative:i})}},[d,s,f,r,l,n,e,o,i])}const Ie=({to:e,className:t="",exact:n,children:r,text:l,onClick:o,label:i,style:s})=>a(s_,{to:e,onClick:o,end:n&&"end",className:({isActive:d})=>`${t} ${d?"active":""}`,"aria-label":i,style:s,children:r||l}),d_=()=>u("div",{className:"prose",children:[a("h1",{children:"Brand Colours"}),a("p",{children:"The palette is designed to be adjustable so that you can match it to your brand colors."}),a("h2",{children:"Brand Hue and Color"}),u("p",{children:["You should pick a color that is closest to your brand color and adjust the hue to match it if necessary.  Then define that as the"," ",a("code",{children:"$brand-hue"})," and set the ",a("code",{children:"$brand-color"})," by name."]}),a(Pe,{code:zk,caption:"Brand Color",language:"scss",expand:!0}),a("h2",{children:"Multiple Brand Colors"}),u("p",{children:["If you have multiple brand colors you can set them using the"," ",a("code",{children:"$brand-colors"})," variable.  You can call them whatever you like (we're using ",a("code",{children:"primary"}),", ",a("code",{children:"secondary"})," ","and ",a("code",{children:"tertiary"})," in this example). You should define one to be the primary ",a("code",{children:"$brand-color"})," and set the ",a("code",{children:"$brand-hue"})]}),a(Pe,{code:Uk,caption:"Brand Colors",language:"scss",expand:!0}),a("h2",{children:"Greyscale Colors"}),u("p",{children:["An important side-effect of setting ",a("code",{children:"$brand-hue"})," is that it will set the hue of the greyscale color ranges to match it."]}),u("p",{children:["If you want to use different hues for the greyscale color ranges then you can do that using the ",a("code",{children:"$grey-hue"}),","," ",a("code",{children:"$grey20-hue"})," and ",a("code",{children:"$grey40-hue"})," variables."]}),a(Pe,{code:Wk,caption:"Greyscale Colors",language:"scss",expand:!0}),a("h2",{children:"Culling the Palette"}),a("p",{children:"The chances are that you aren't going to need all of the colors defined in the standard palette.  You can reduce the size of the generated CSS file by excluding any that you don't need."}),u("p",{children:["Set the ",a("code",{children:"$color-names"})," variable to list those that you want to keep.  Note that ",a("code",{children:"red"}),", ",a("code",{children:"orange"}),","," ",a("code",{children:"green"}),", ",a("code",{children:"blue"})," and ",a("code",{children:"grey"})," are used by various components, including ",a(Ie,{to:"/forms/",text:"forms"})," and"," ",a(Ie,{to:"/components/alerts",text:"alerts"})," so you'll probably want to keep those."]}),a(Pe,{code:Hk,caption:"Selecting Colors",language:"scss",expand:!0})]}),u_=Object.freeze(Object.defineProperty({__proto__:null,default:d_},Symbol.toStringTag,{value:"Module"})),h_="Badger CSS v4",f_="Badger CSS Palette - fourth version",p_="badger-css-v4",g_="",m_={red:{name:"Red",hue:0,stops:{0:{h:0,s:65,l:5,hex:"#150404"},5:{h:0,s:66,l:8,hex:"#220707"},10:{h:0,s:68,l:11,hex:"#2f0909"},15:{h:0,s:69,l:15,hex:"#410c0c"},20:{h:0,s:70,l:19,hex:"#520f0f"},25:{h:0,s:71,l:23,hex:"#641111"},30:{h:0,s:72,l:28,hex:"#7b1414"},35:{h:0,s:73,l:32,hex:"#8d1616"},40:{h:0,s:73,l:38,hex:"#a81a1a"},45:{h:0,s:74,l:43,hex:"#bf1d1d"},50:{h:0,s:74,l:49,hex:"#d92020"},55:{h:0,s:74,l:56,hex:"#e23c3c"},60:{h:0,s:73,l:62,hex:"#e55757"},65:{h:0,s:72,l:69,hex:"#e97777"},70:{h:0,s:71,l:76,hex:"#ed9696"},75:{h:0,s:69,l:82,hex:"#f1b1b1"},80:{h:0,s:66,l:88,hex:"#f5cccc"},85:{h:0,s:62,l:92,hex:"#f7dede"},90:{h:0,s:56,l:95,hex:"#f9ebeb"},95:{h:0,s:48,l:97,hex:"#fbf4f4"},100:{h:0,s:33,l:98,hex:"#fcf8f8"}},curves:{h:{min:0,max:0,minControl:{x:30,y:0},maxControl:{x:70,y:0}},s:{min:65,max:33,minControl:{x:31,y:74},maxControl:{x:88,y:89}},l:{min:5,max:98,minControl:{x:62,y:42},maxControl:{x:69,y:96}}},uri:"red"},brown:{name:"Brown",hue:14,stops:{0:{h:10,s:52,l:5,hex:"#130806"},5:{h:11,s:53,l:8,hex:"#1f0e0a"},10:{h:11,s:54,l:11,hex:"#2b120d"},15:{h:12,s:54,l:14,hex:"#371810"},20:{h:13,s:55,l:17,hex:"#431e14"},25:{h:13,s:56,l:21,hex:"#542518"},30:{h:13,s:56,l:25,hex:"#632c1c"},35:{h:14,s:57,l:29,hex:"#743320"},40:{h:14,s:57,l:34,hex:"#883c25"},45:{h:14,s:57,l:40,hex:"#a0472c"},50:{h:14,s:57,l:46,hex:"#b85232"},55:{h:14,s:56,l:54,hex:"#cb6748"},60:{h:14,s:56,l:62,hex:"#d48168"},65:{h:15,s:55,l:70,hex:"#dd9d88"},70:{h:15,s:53,l:77,hex:"#e3b5a5"},75:{h:15,s:51,l:83,hex:"#eac9be"},80:{h:14,s:49,l:87,hex:"#eed5ce"},85:{h:14,s:45,l:91,hex:"#f2e3de"},90:{h:14,s:41,l:94,hex:"#f6ece9"},95:{h:14,s:34,l:96,hex:"#f8f3f1"},100:{h:14,s:23,l:98,hex:"#fbf9f9"}},curves:{h:{min:10,max:14,minControl:{x:30,y:15},maxControl:{x:70,y:15}},s:{min:52,max:23,minControl:{x:35,y:58},maxControl:{x:86,y:66}},l:{min:5,max:98,minControl:{x:72,y:43},maxControl:{x:50,y:80}}},uri:"brown"},orange:{name:"Orange",hue:26,stops:{0:{h:27,s:93,l:5,hex:"#190c01"},5:{h:27,s:94,l:8,hex:"#281201"},10:{h:26,s:94,l:11,hex:"#361902"},15:{h:26,s:95,l:14,hex:"#461f02"},20:{h:26,s:95,l:18,hex:"#5a2802"},25:{h:26,s:95,l:22,hex:"#6d3103"},30:{h:26,s:96,l:26,hex:"#823a03"},35:{h:26,s:96,l:30,hex:"#964303"},40:{h:26,s:96,l:35,hex:"#af4e04"},45:{h:26,s:96,l:41,hex:"#cd5b04"},50:{h:26,s:95,l:47,hex:"#ea6906"},55:{h:26,s:95,l:53,hex:"#f97815"},60:{h:26,s:94,l:60,hex:"#f98c39"},65:{h:26,s:92,l:67,hex:"#f8a15d"},70:{h:27,s:90,l:74,hex:"#f8b781"},75:{h:27,s:87,l:80,hex:"#f8c8a0"},80:{h:28,s:84,l:85,hex:"#f9d7b9"},85:{h:28,s:78,l:90,hex:"#f9e4d2"},90:{h:29,s:71,l:93,hex:"#faede0"},95:{h:30,s:58,l:96,hex:"#fbf5ef"},100:{h:32,s:26,l:98,hex:"#fbfaf9"}},curves:{h:{min:27,max:32,minControl:{x:30,y:25},maxControl:{x:77,y:24}},s:{min:93,max:24,minControl:{x:59,y:100},maxControl:{x:97,y:100}},l:{min:5,max:98,minControl:{x:62,y:39},maxControl:{x:64,y:86}}},uri:"orange"},yellow:{name:"Yellow",hue:41,stops:{0:{h:30,s:90,l:5,hex:"#180d01"},5:{h:31,s:91,l:8,hex:"#271502"},10:{h:33,s:92,l:11,hex:"#361f02"},15:{h:34,s:92,l:14,hex:"#452803"},20:{h:35,s:93,l:17,hex:"#543203"},25:{h:36,s:93,l:20,hex:"#623c04"},30:{h:37,s:94,l:24,hex:"#774b04"},35:{h:38,s:94,l:28,hex:"#8b5904"},40:{h:39,s:95,l:33,hex:"#a46c04"},45:{h:40,s:95,l:37,hex:"#b87c05"},50:{h:41,s:94,l:42,hex:"#d09006"},55:{h:41,s:94,l:48,hex:"#eda507"},60:{h:42,s:93,l:53,hex:"#f7b418"},65:{h:43,s:92,l:60,hex:"#f7c23b"},70:{h:43,s:90,l:66,hex:"#f6ca5a"},75:{h:44,s:87,l:73,hex:"#f6d67e"},80:{h:44,s:84,l:79,hex:"#f6de9c"},85:{h:44,s:78,l:86,hex:"#f7e8bf"},90:{h:45,s:70,l:91,hex:"#f8f0d8"},95:{h:45,s:57,l:96,hex:"#fbf8ef"},100:{h:45,s:27,l:98,hex:"#fbfbf9"}},curves:{h:{min:30,max:45,minControl:{x:28,y:38},maxControl:{x:70,y:45}},s:{min:90,max:26,minControl:{x:63,y:100},maxControl:{x:94,y:100}},l:{min:5,max:98,minControl:{x:65,y:38},maxControl:{x:81,y:94}}},uri:"yellow"},olive:{name:"Olive",hue:68,stops:{0:{h:72,s:66,l:4,hex:"#0e1103"},5:{h:72,s:68,l:7,hex:"#191e06"},10:{h:71,s:70,l:9,hex:"#212707"},15:{h:71,s:71,l:12,hex:"#2c3409"},20:{h:70,s:72,l:15,hex:"#39420b"},25:{h:70,s:73,l:19,hex:"#48540d"},30:{h:69,s:73,l:22,hex:"#55610f"},35:{h:69,s:73,l:26,hex:"#647312"},40:{h:69,s:73,l:30,hex:"#748415"},45:{h:68,s:71,l:35,hex:"#88991a"},50:{h:68,s:69,l:40,hex:"#9aac20"},55:{h:67,s:65,l:45,hex:"#acbd28"},60:{h:67,s:60,l:51,hex:"#bccd37"},65:{h:66,s:54,l:58,hex:"#c2ce5a"},70:{h:66,s:47,l:66,hex:"#c9d180"},75:{h:65,s:40,l:74,hex:"#d3d7a2"},80:{h:65,s:34,l:82,hex:"#dee1c1"},85:{h:65,s:29,l:88,hex:"#e8e9d8"},90:{h:64,s:25,l:93,hex:"#f1f2e9"},95:{h:64,s:22,l:96,hex:"#f7f7f3"},100:{h:64,s:19,l:98,hex:"#fbfbf9"}},curves:{h:{min:72,max:64,minControl:{x:30,y:70},maxControl:{x:69,y:65}},s:{min:66,max:19,minControl:{x:69,y:93},maxControl:{x:57,y:40}},l:{min:4,max:98,minControl:{x:79,y:44},maxControl:{x:67,y:86}}},uri:"olive"},green:{name:"Green",hue:117,stops:{0:{h:117,s:45,l:5,hex:"#081207"},5:{h:117,s:48,l:8,hex:"#0c1e0b"},10:{h:117,s:50,l:11,hex:"#0f2a0e"},15:{h:117,s:52,l:14,hex:"#133611"},20:{h:117,s:53,l:18,hex:"#184616"},25:{h:117,s:54,l:22,hex:"#1d561a"},30:{h:117,s:55,l:26,hex:"#21671e"},35:{h:117,s:55,l:31,hex:"#287b24"},40:{h:117,s:55,l:36,hex:"#2e8e29"},45:{h:117,s:54,l:41,hex:"#36a130"},50:{h:117,s:54,l:46,hex:"#3cb536"},55:{h:117,s:52,l:52,hex:"#4bc445"},60:{h:117,s:51,l:58,hex:"#63cb5d"},65:{h:117,s:49,l:65,hex:"#7ed17a"},70:{h:117,s:47,l:71,hex:"#96d892"},75:{h:117,s:44,l:77,hex:"#addeab"},80:{h:117,s:40,l:83,hex:"#c4e5c2"},85:{h:117,s:36,l:89,hex:"#daedd9"},90:{h:118,s:31,l:93,hex:"#e8f3e8"},95:{h:118,s:24,l:96,hex:"#f3f7f2"},100:{h:118,s:16,l:98,hex:"#f9fbf9"}},curves:{h:{min:117,max:118,minControl:{x:30,y:118},maxControl:{x:57,y:116}},s:{min:45,max:16,minControl:{x:34,y:65},maxControl:{x:81,y:54}},l:{min:5,max:98,minControl:{x:58,y:37},maxControl:{x:75,y:92}}},uri:"green"},teal:{name:"Teal",hue:165,stops:{0:{h:165,s:52,l:5,hex:"#061310"},5:{h:165,s:56,l:7,hex:"#081c17"},10:{h:165,s:59,l:10,hex:"#0a2921"},15:{h:165,s:61,l:13,hex:"#0d352b"},20:{h:165,s:62,l:16,hex:"#104235"},25:{h:165,s:63,l:19,hex:"#124f40"},30:{h:165,s:64,l:23,hex:"#15604d"},35:{h:165,s:63,l:27,hex:"#19705b"},40:{h:165,s:63,l:31,hex:"#1d8168"},45:{h:165,s:62,l:36,hex:"#239578"},50:{h:165,s:60,l:41,hex:"#2aa788"},55:{h:165,s:58,l:46,hex:"#31b997"},60:{h:165,s:56,l:52,hex:"#40c9a7"},65:{h:165,s:53,l:59,hex:"#5fceb2"},70:{h:165,s:50,l:66,hex:"#7dd4be"},75:{h:165,s:46,l:74,hex:"#9edbcc"},80:{h:165,s:41,l:81,hex:"#bbe2d8"},85:{h:165,s:36,l:88,hex:"#d5ebe6"},90:{h:165,s:30,l:93,hex:"#e8f3f0"},95:{h:165,s:23,l:96,hex:"#f2f7f6"},100:{h:165,s:13,l:98,hex:"#f9fbfa"}},curves:{h:{min:165,max:165,minControl:{x:30,y:165},maxControl:{x:70,y:165}},s:{min:52,max:13,minControl:{x:34,y:81},maxControl:{x:83,y:51}},l:{min:5,max:98,minControl:{x:71,y:38},maxControl:{x:75,y:94}}},uri:"teal"},blue:{name:"Blue",hue:206,stops:{0:{h:210,s:75,l:5,hex:"#030d16"},5:{h:210,s:78,l:8,hex:"#041424"},10:{h:209,s:80,l:11,hex:"#061d32"},15:{h:209,s:83,l:15,hex:"#072746"},20:{h:209,s:85,l:19,hex:"#07325a"},25:{h:208,s:87,l:23,hex:"#083e6e"},30:{h:208,s:88,l:27,hex:"#084981"},35:{h:207,s:89,l:32,hex:"#09599a"},40:{h:207,s:90,l:37,hex:"#0967b3"},45:{h:207,s:90,l:42,hex:"#0b75cb"},50:{h:206,s:90,l:48,hex:"#0c89e9"},55:{h:206,s:89,l:54,hex:"#2198f2"},60:{h:205,s:87,l:60,hex:"#40a8f2"},65:{h:205,s:85,l:66,hex:"#5fb5f2"},70:{h:205,s:82,l:73,hex:"#82c4f3"},75:{h:205,s:77,l:79,hex:"#a0d0f3"},80:{h:204,s:72,l:85,hex:"#bddef4"},85:{h:204,s:65,l:90,hex:"#d5e9f6"},90:{h:204,s:56,l:94,hex:"#e7f1f8"},95:{h:204,s:45,l:97,hex:"#f4f8fb"},100:{h:204,s:33,l:98,hex:"#f8fafc"}},curves:{h:{min:210,max:204,minControl:{x:42,y:207},maxControl:{x:70,y:204}},s:{min:75,max:33,minControl:{x:43,y:100},maxControl:{x:76,y:100}},l:{min:5,max:98,minControl:{x:61,y:41},maxControl:{x:74,y:95}}},uri:"blue"},indigo:{name:"Indigo",hue:236,stops:{0:{h:234,s:42,l:7,hex:"#0a0c19"},5:{h:234,s:47,l:10,hex:"#0e1025"},10:{h:235,s:53,l:14,hex:"#111437"},15:{h:235,s:58,l:19,hex:"#14194d"},20:{h:235,s:62,l:24,hex:"#171e63"},25:{h:235,s:67,l:29,hex:"#18217b"},30:{h:236,s:70,l:35,hex:"#1b2398"},35:{h:236,s:74,l:42,hex:"#1c26ba"},40:{h:236,s:77,l:48,hex:"#1c29d9"},45:{h:236,s:79,l:55,hex:"#323ee7"},50:{h:236,s:80,l:62,hex:"#515bec"},55:{h:236,s:81,l:68,hex:"#6b74ef"},60:{h:236,s:81,l:73,hex:"#828af2"},65:{h:235,s:80,l:78,hex:"#9aa2f4"},70:{h:235,s:77,l:82,hex:"#aeb4f4"},75:{h:235,s:73,l:86,hex:"#c1c6f5"},80:{h:235,s:68,l:89,hex:"#d0d3f6"},85:{h:235,s:60,l:92,hex:"#dee0f7"},90:{h:235,s:50,l:95,hex:"#ecedf9"},95:{h:235,s:37,l:97,hex:"#f5f5fa"},100:{h:235,s:20,l:99,hex:"#fcfcfd"}},curves:{h:{min:234,max:235,minControl:{x:30,y:237},maxControl:{x:70,y:235}},s:{min:42,max:20,minControl:{x:47,y:95},maxControl:{x:79,y:100}},l:{min:7,max:99,minControl:{x:46,y:38},maxControl:{x:42,y:76}}},uri:"indigo"},violet:{name:"Violet",uri:"violet",hue:259,stops:{0:{h:271,s:53,l:8,hex:"#150a1f"},5:{h:269,s:55,l:12,hex:"#1e0e2f"},10:{h:268,s:56,l:16,hex:"#271240"},15:{h:266,s:58,l:21,hex:"#311655"},20:{h:265,s:60,l:26,hex:"#3c1b6a"},25:{h:264,s:62,l:31,hex:"#451e80"},30:{h:263,s:65,l:36,hex:"#4e2097"},35:{h:262,s:67,l:42,hex:"#5823b3"},40:{h:261,s:69,l:48,hex:"#6126cf"},45:{h:260,s:72,l:53,hex:"#6a31dd"},50:{h:259,s:73,l:59,hex:"#7a4ae3"},55:{h:258,s:75,l:65,hex:"#8b63e9"},60:{h:258,s:75,l:71,hex:"#9f7eed"},65:{h:257,s:73,l:76,hex:"#ae95ee"},70:{h:257,s:70,l:80,hex:"#bda8f0"},75:{h:256,s:64,l:85,hex:"#cdc0f1"},80:{h:256,s:58,l:88,hex:"#d8cff2"},85:{h:255,s:51,l:92,hex:"#e5e0f5"},90:{h:255,s:43,l:94,hex:"#ece9f6"},95:{h:255,s:35,l:97,hex:"#f6f5fa"},100:{h:255,s:27,l:99,hex:"#fcfcfd"}},curves:{h:{min:271,max:255,minControl:{x:33,y:260},maxControl:{x:70,y:255}},s:{min:53,max:27,minControl:{x:64,y:73},maxControl:{x:56,y:100}},l:{min:8,max:99,minControl:{x:45,y:43},maxControl:{x:58,y:83}}}},purple:{name:"Purple",hue:284,stops:{0:{h:294,s:47,l:6,hex:"#150816"},5:{h:293,s:50,l:8,hex:"#1c0a1f"},10:{h:292,s:53,l:11,hex:"#270d2b"},15:{h:290,s:56,l:14,hex:"#311038"},20:{h:289,s:59,l:18,hex:"#3f1349"},25:{h:288,s:62,l:22,hex:"#4d155b"},30:{h:287,s:65,l:26,hex:"#5b176d"},35:{h:286,s:67,l:31,hex:"#6b1a84"},40:{h:286,s:69,l:37,hex:"#811d9f"},45:{h:285,s:71,l:43,hex:"#9520bc"},50:{h:284,s:72,l:49,hex:"#a723d7"},55:{h:283,s:73,l:55,hex:"#b138e0"},60:{h:283,s:73,l:62,hex:"#bd57e5"},65:{h:282,s:72,l:68,hex:"#c573e8"},70:{h:282,s:70,l:75,hex:"#d193ec"},75:{h:281,s:67,l:80,hex:"#d9aaee"},80:{h:281,s:61,l:85,hex:"#e1c1f0"},85:{h:280,s:54,l:90,hex:"#ead8f3"},90:{h:280,s:46,l:94,hex:"#f2e9f7"},95:{h:280,s:35,l:97,hex:"#f8f5fa"},100:{h:280,s:22,l:99,hex:"#fdfcfd"}},curves:{h:{min:294,max:280,minControl:{x:32,y:286},maxControl:{x:67,y:280}},s:{min:47,max:22,minControl:{x:51,y:78},maxControl:{x:74,y:94}},l:{min:6,max:99,minControl:{x:48,y:26},maxControl:{x:64,y:85}}},uri:"purple"},pink:{name:"Pink",hue:313,stops:{0:{h:314,s:64,l:5,hex:"#150511"},5:{h:314,s:66,l:7,hex:"#1e0618"},10:{h:313,s:69,l:10,hex:"#2b0823"},15:{h:313,s:71,l:13,hex:"#390a2e"},20:{h:313,s:72,l:16,hex:"#460b39"},25:{h:313,s:74,l:19,hex:"#540d45"},30:{h:313,s:75,l:23,hex:"#670f54"},35:{h:313,s:76,l:27,hex:"#791163"},40:{h:313,s:77,l:32,hex:"#901375"},45:{h:313,s:77,l:37,hex:"#a71688"},50:{h:313,s:76,l:42,hex:"#bc1a99"},55:{h:313,s:76,l:48,hex:"#d71daf"},60:{h:313,s:74,l:55,hex:"#e137bc"},65:{h:313,s:72,l:63,hex:"#e55dc7"},70:{h:312,s:70,l:70,hex:"#e87dd3"},75:{h:312,s:66,l:77,hex:"#eb9edc"},80:{h:312,s:61,l:83,hex:"#eeb9e4"},85:{h:312,s:55,l:88,hex:"#f1d0ea"},90:{h:311,s:47,l:92,hex:"#f4e1f1"},95:{h:311,s:37,l:96,hex:"#f9f1f7"},100:{h:310,s:21,l:99,hex:"#fdfcfd"}},curves:{h:{min:314,max:310,minControl:{x:26,y:311},maxControl:{x:67,y:315}},s:{min:64,max:21,minControl:{x:45,y:87},maxControl:{x:84,y:82}},l:{min:5,max:99,minControl:{x:64,y:34},maxControl:{x:62,y:78}}},uri:"pink"},maroon:{name:"Maroon",hue:339,stops:{0:{h:339,s:57,l:6,hex:"#18070d"},5:{h:339,s:62,l:8,hex:"#210811"},10:{h:339,s:66,l:11,hex:"#2f0a16"},15:{h:339,s:69,l:13,hex:"#380a1a"},20:{h:339,s:73,l:17,hex:"#4b0c22"},25:{h:339,s:76,l:20,hex:"#5a0c27"},30:{h:339,s:79,l:24,hex:"#6e0d2f"},35:{h:339,s:81,l:29,hex:"#860e38"},40:{h:339,s:83,l:33,hex:"#9a0e3f"},45:{h:339,s:84,l:39,hex:"#b7104a"},50:{h:339,s:84,l:45,hex:"#d31256"},55:{h:339,s:84,l:51,hex:"#eb1963"},60:{h:339,s:84,l:57,hex:"#ed3576"},65:{h:339,s:82,l:64,hex:"#ee588d"},70:{h:339,s:80,l:71,hex:"#f07aa3"},75:{h:339,s:76,l:77,hex:"#f198b7"},80:{h:339,s:71,l:83,hex:"#f2b5ca"},85:{h:339,s:64,l:88,hex:"#f4cddb"},90:{h:339,s:55,l:92,hex:"#f6dfe7"},95:{h:339,s:41,l:96,hex:"#f9f1f4"},100:{h:339,s:21,l:99,hex:"#fdfcfc"}},curves:{h:{min:339,max:339,minControl:{x:26,y:339},maxControl:{x:67,y:339}},s:{min:57,max:21,minControl:{x:43,y:97},maxControl:{x:85,y:100}},l:{min:6,max:99,minControl:{x:54,y:28},maxControl:{x:64,y:79}}},uri:"maroon"},grey:{name:"Grey",hue:200,stops:{0:{h:200,s:5,l:5,hex:"#0c0d0d"},5:{h:200,s:5,l:10,hex:"#181a1b"},10:{h:200,s:5,l:14,hex:"#222425"},15:{h:200,s:5,l:19,hex:"#2e3133"},20:{h:200,s:5,l:23,hex:"#383c3e"},25:{h:200,s:5,l:28,hex:"#44494b"},30:{h:200,s:5,l:33,hex:"#505658"},35:{h:200,s:5,l:37,hex:"#5a6063"},40:{h:200,s:5,l:42,hex:"#666d70"},45:{h:200,s:5,l:47,hex:"#727a7e"},50:{h:200,s:5,l:52,hex:"#7e878b"},55:{h:200,s:5,l:56,hex:"#899194"},60:{h:200,s:5,l:61,hex:"#979da1"},65:{h:200,s:5,l:66,hex:"#a4aaad"},70:{h:200,s:5,l:71,hex:"#b1b6b9"},75:{h:200,s:5,l:75,hex:"#bcc0c2"},80:{h:200,s:5,l:80,hex:"#c9cdcf"},85:{h:200,s:5,l:85,hex:"#d7d9db"},90:{h:200,s:5,l:89,hex:"#e2e3e4"},95:{h:200,s:5,l:94,hex:"#eff0f0"},100:{h:200,s:5,l:98,hex:"#fafafa"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:5,max:5,minControl:{x:30,y:5},maxControl:{x:70,y:5}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey",greyscale:!0},grey20:{name:"Grey20",hue:200,stops:{0:{h:200,s:20,l:5,hex:"#0a0e0f"},5:{h:200,s:20,l:10,hex:"#141b1f"},10:{h:200,s:20,l:14,hex:"#1d262b"},15:{h:200,s:20,l:19,hex:"#27343a"},20:{h:200,s:20,l:23,hex:"#2f3f46"},25:{h:200,s:20,l:28,hex:"#394c56"},30:{h:200,s:20,l:33,hex:"#435a65"},35:{h:200,s:20,l:37,hex:"#4b6571"},40:{h:200,s:20,l:42,hex:"#567281"},45:{h:200,s:20,l:47,hex:"#608090"},50:{h:200,s:20,l:52,hex:"#6c8d9d"},55:{h:200,s:20,l:56,hex:"#7896a5"},60:{h:200,s:20,l:61,hex:"#88a2af"},65:{h:200,s:20,l:66,hex:"#97aeba"},70:{h:200,s:20,l:71,hex:"#a6bac4"},75:{h:200,s:20,l:75,hex:"#b3c3cc"},80:{h:200,s:20,l:80,hex:"#c2cfd6"},85:{h:200,s:20,l:85,hex:"#d1dbe0"},90:{h:200,s:20,l:89,hex:"#dde5e9"},95:{h:200,s:20,l:94,hex:"#edf1f3"},100:{h:200,s:20,l:98,hex:"#f9fafb"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:20,max:20,minControl:{x:30,y:20},maxControl:{x:70,y:20}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey20",greyscale:!0},grey40:{name:"Grey40",hue:200,stops:{0:{h:200,s:40,l:5,hex:"#080e12"},5:{h:200,s:40,l:10,hex:"#0f1d24"},10:{h:200,s:40,l:14,hex:"#152832"},15:{h:200,s:40,l:19,hex:"#1d3744"},20:{h:200,s:40,l:23,hex:"#234252"},25:{h:200,s:40,l:28,hex:"#2b5164"},30:{h:200,s:40,l:33,hex:"#325f76"},35:{h:200,s:40,l:37,hex:"#396b84"},40:{h:200,s:40,l:42,hex:"#407996"},45:{h:200,s:40,l:47,hex:"#4888a8"},50:{h:200,s:40,l:52,hex:"#5495b6"},55:{h:200,s:40,l:56,hex:"#629ebc"},60:{h:200,s:40,l:61,hex:"#74a9c3"},65:{h:200,s:40,l:66,hex:"#86b4cb"},70:{h:200,s:40,l:71,hex:"#97bfd3"},75:{h:200,s:40,l:75,hex:"#a6c8d9"},80:{h:200,s:40,l:80,hex:"#b8d3e0"},85:{h:200,s:40,l:85,hex:"#c9dee8"},90:{h:200,s:40,l:89,hex:"#d8e7ee"},95:{h:200,s:40,l:94,hex:"#eaf2f6"},100:{h:200,s:40,l:98,hex:"#f8fbfc"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:40,max:40,minControl:{x:30,y:40},maxControl:{x:70,y:40}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey40",greyscale:!0}},Vr={name:h_,comment:f_,uri:p_,source:g_,ranges:m_},rc=Object.keys(Vr.ranges),v_=Object.entries(Vr.ranges).filter(([,e])=>!e.greyscale).map(([e])=>e),y_=Object.entries(Vr.ranges).filter(([,e])=>e.greyscale).map(([e])=>e);var vy={exports:{}};/**
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
 */(function(e,t){(function(n,r){e.exports=r()})(Do,function(){for(var n=function(c,h,p){return h===void 0&&(h=0),p===void 0&&(p=1),c<h?h:c>p?p:c},r=n,l=function(c){c._clipped=!1,c._unclipped=c.slice(0);for(var h=0;h<=3;h++)h<3?((c[h]<0||c[h]>255)&&(c._clipped=!0),c[h]=r(c[h],0,255)):h===3&&(c[h]=r(c[h],0,1));return c},o={},i=0,s=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];i<s.length;i+=1){var d=s[i];o["[object "+d+"]"]=d.toLowerCase()}var f=function(c){return o[Object.prototype.toString.call(c)]||"object"},m=f,b=function(c,h){return h===void 0&&(h=null),c.length>=3?Array.prototype.slice.call(c):m(c[0])=="object"&&h?h.split("").filter(function(p){return c[0][p]!==void 0}).map(function(p){return c[0][p]}):c[0]},S=f,I=function(c){if(c.length<2)return null;var h=c.length-1;return S(c[h])=="string"?c[h].toLowerCase():null},N=Math.PI,k={clip_rgb:l,limit:n,type:f,unpack:b,last:I,PI:N,TWOPI:N*2,PITHIRD:N/3,DEG2RAD:N/180,RAD2DEG:180/N},L={format:{},autodetect:[]},w=k.last,g=k.clip_rgb,y=k.type,v=L,$=function(){for(var h=[],p=arguments.length;p--;)h[p]=arguments[p];var x=this;if(y(h[0])==="object"&&h[0].constructor&&h[0].constructor===this.constructor)return h[0];var T=w(h),E=!1;if(!T){E=!0,v.sorted||(v.autodetect=v.autodetect.sort(function(W,K){return K.p-W.p}),v.sorted=!0);for(var C=0,R=v.autodetect;C<R.length;C+=1){var P=R[C];if(T=P.test.apply(P,h),T)break}}if(v.format[T]){var B=v.format[T].apply(null,E?h:h.slice(0,-1));x._rgb=g(B)}else throw new Error("unknown format: "+h);x._rgb.length===3&&x._rgb.push(1)};$.prototype.toString=function(){return y(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var _=$,M=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(M.Color,[null].concat(c)))};M.Color=_,M.version="2.4.2";var O=M,z=k.unpack,q=Math.max,he=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=z(c,"rgb"),x=p[0],T=p[1],E=p[2];x=x/255,T=T/255,E=E/255;var C=1-q(x,q(T,E)),R=C<1?1/(1-C):0,P=(1-x-C)*R,B=(1-T-C)*R,W=(1-E-C)*R;return[P,B,W,C]},se=he,ze=k.unpack,lt=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=ze(c,"cmyk");var p=c[0],x=c[1],T=c[2],E=c[3],C=c.length>4?c[4]:1;return E===1?[0,0,0,C]:[p>=1?0:255*(1-p)*(1-E),x>=1?0:255*(1-x)*(1-E),T>=1?0:255*(1-T)*(1-E),C]},Ve=lt,Be=O,Ye=_,U=L,Z=k.unpack,J=k.type,le=se;Ye.prototype.cmyk=function(){return le(this._rgb)},Be.cmyk=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Ye,[null].concat(c,["cmyk"])))},U.format.cmyk=Ve,U.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=Z(c,"cmyk"),J(c)==="array"&&c.length===4)return"cmyk"}});var fe=k.unpack,Bt=k.last,pe=function(c){return Math.round(c*100)/100},et=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=fe(c,"hsla"),x=Bt(c)||"lsa";return p[0]=pe(p[0]||0),p[1]=pe(p[1]*100)+"%",p[2]=pe(p[2]*100)+"%",x==="hsla"||p.length>3&&p[3]<1?(p[3]=p.length>3?p[3]:1,x="hsla"):p.length=3,x+"("+p.join(",")+")"},qe=et,ft=k.unpack,Mt=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=ft(c,"rgba");var p=c[0],x=c[1],T=c[2];p/=255,x/=255,T/=255;var E=Math.min(p,x,T),C=Math.max(p,x,T),R=(C+E)/2,P,B;return C===E?(P=0,B=Number.NaN):P=R<.5?(C-E)/(C+E):(C-E)/(2-C-E),p==C?B=(x-T)/(C-E):x==C?B=2+(T-p)/(C-E):T==C&&(B=4+(p-x)/(C-E)),B*=60,B<0&&(B+=360),c.length>3&&c[3]!==void 0?[B,P,R,c[3]]:[B,P,R]},Xr=Mt,Jr=k.unpack,Jn=k.last,Ul=qe,ea=Xr,Wl=Math.round,ta=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=Jr(c,"rgba"),x=Jn(c)||"rgb";return x.substr(0,3)=="hsl"?Ul(ea(p),x):(p[0]=Wl(p[0]),p[1]=Wl(p[1]),p[2]=Wl(p[2]),(x==="rgba"||p.length>3&&p[3]<1)&&(p[3]=p.length>3?p[3]:1,x="rgba"),x+"("+p.slice(0,x==="rgb"?3:4).join(",")+")")},Si=ta,Hl=k.unpack,na=Math.round,Gl=function(){for(var c,h=[],p=arguments.length;p--;)h[p]=arguments[p];h=Hl(h,"hsl");var x=h[0],T=h[1],E=h[2],C,R,P;if(T===0)C=R=P=E*255;else{var B=[0,0,0],W=[0,0,0],K=E<.5?E*(1+T):E+T-E*T,G=2*E-K,ne=x/360;B[0]=ne+1/3,B[1]=ne,B[2]=ne-1/3;for(var ee=0;ee<3;ee++)B[ee]<0&&(B[ee]+=1),B[ee]>1&&(B[ee]-=1),6*B[ee]<1?W[ee]=G+(K-G)*6*B[ee]:2*B[ee]<1?W[ee]=K:3*B[ee]<2?W[ee]=G+(K-G)*(2/3-B[ee])*6:W[ee]=G;c=[na(W[0]*255),na(W[1]*255),na(W[2]*255)],C=c[0],R=c[1],P=c[2]}return h.length>3?[C,R,P,h[3]]:[C,R,P,1]},er=Gl,Vl=er,Yl=L,ql=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,ki=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,wr=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,ra=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Zl=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,Oa=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Ci=Math.round,_i=function(c){c=c.toLowerCase().trim();var h;if(Yl.format.named)try{return Yl.format.named(c)}catch{}if(h=c.match(ql)){for(var p=h.slice(1,4),x=0;x<3;x++)p[x]=+p[x];return p[3]=1,p}if(h=c.match(ki)){for(var T=h.slice(1,5),E=0;E<4;E++)T[E]=+T[E];return T}if(h=c.match(wr)){for(var C=h.slice(1,4),R=0;R<3;R++)C[R]=Ci(C[R]*2.55);return C[3]=1,C}if(h=c.match(ra)){for(var P=h.slice(1,5),B=0;B<3;B++)P[B]=Ci(P[B]*2.55);return P[3]=+P[3],P}if(h=c.match(Zl)){var W=h.slice(1,4);W[1]*=.01,W[2]*=.01;var K=Vl(W);return K[3]=1,K}if(h=c.match(Oa)){var G=h.slice(1,4);G[1]*=.01,G[2]*=.01;var ne=Vl(G);return ne[3]=+h[4],ne}};_i.test=function(c){return ql.test(c)||ki.test(c)||wr.test(c)||ra.test(c)||Zl.test(c)||Oa.test(c)};var Ti=_i,Uc=O,A=_,D=L,H=k.type,Q=Si,ie=Ti;A.prototype.css=function(c){return Q(this._rgb,c)},Uc.css=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(A,[null].concat(c,["css"])))},D.format.css=ie,D.autodetect.push({p:5,test:function(c){for(var h=[],p=arguments.length-1;p-- >0;)h[p]=arguments[p+1];if(!h.length&&H(c)==="string"&&ie.test(c))return"css"}});var ce=_,de=O,ue=L,ae=k.unpack;ue.format.gl=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=ae(c,"rgba");return p[0]*=255,p[1]*=255,p[2]*=255,p},de.gl=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(ce,[null].concat(c,["gl"])))},ce.prototype.gl=function(){var c=this._rgb;return[c[0]/255,c[1]/255,c[2]/255,c[3]]};var Te=k.unpack,Me=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=Te(c,"rgb"),x=p[0],T=p[1],E=p[2],C=Math.min(x,T,E),R=Math.max(x,T,E),P=R-C,B=P*100/255,W=C/(255-P)*100,K;return P===0?K=Number.NaN:(x===R&&(K=(T-E)/P),T===R&&(K=2+(E-x)/P),E===R&&(K=4+(x-T)/P),K*=60,K<0&&(K+=360)),[K,B,W]},bt=Me,st=k.unpack,pt=Math.floor,yn=function(){for(var c,h,p,x,T,E,C=[],R=arguments.length;R--;)C[R]=arguments[R];C=st(C,"hcg");var P=C[0],B=C[1],W=C[2],K,G,ne;W=W*255;var ee=B*255;if(B===0)K=G=ne=W;else{P===360&&(P=0),P>360&&(P-=360),P<0&&(P+=360),P/=60;var me=pt(P),Se=P-me,$e=W*(1-B),Le=$e+ee*(1-Se),Ct=$e+ee*Se,xt=$e+ee;switch(me){case 0:c=[xt,Ct,$e],K=c[0],G=c[1],ne=c[2];break;case 1:h=[Le,xt,$e],K=h[0],G=h[1],ne=h[2];break;case 2:p=[$e,xt,Ct],K=p[0],G=p[1],ne=p[2];break;case 3:x=[$e,Le,xt],K=x[0],G=x[1],ne=x[2];break;case 4:T=[Ct,$e,xt],K=T[0],G=T[1],ne=T[2];break;case 5:E=[xt,$e,Le],K=E[0],G=E[1],ne=E[2];break}}return[K,G,ne,C.length>3?C[3]:1]},aa=yn,Ql=k.unpack,Da=k.type,$n=O,la=_,Ba=L,Kl=bt;la.prototype.hcg=function(){return Kl(this._rgb)},$n.hcg=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(la,[null].concat(c,["hcg"])))},Ba.format.hcg=aa,Ba.autodetect.push({p:1,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=Ql(c,"hcg"),Da(c)==="array"&&c.length===3)return"hcg"}});var Xl=k.unpack,ja=k.last,je=Math.round,qt=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=Xl(c,"rgba"),x=p[0],T=p[1],E=p[2],C=p[3],R=ja(c)||"auto";C===void 0&&(C=1),R==="auto"&&(R=C<1?"rgba":"rgb"),x=je(x),T=je(T),E=je(E);var P=x<<16|T<<8|E,B="000000"+P.toString(16);B=B.substr(B.length-6);var W="0"+je(C*255).toString(16);switch(W=W.substr(W.length-2),R.toLowerCase()){case"rgba":return"#"+B+W;case"argb":return"#"+W+B;default:return"#"+B}},tr=qt,gt=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,Jl=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,$i=function(c){if(c.match(gt)){(c.length===4||c.length===7)&&(c=c.substr(1)),c.length===3&&(c=c.split(""),c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]);var h=parseInt(c,16),p=h>>16,x=h>>8&255,T=h&255;return[p,x,T,1]}if(c.match(Jl)){(c.length===5||c.length===9)&&(c=c.substr(1)),c.length===4&&(c=c.split(""),c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]+c[3]+c[3]);var E=parseInt(c,16),C=E>>24&255,R=E>>16&255,P=E>>8&255,B=Math.round((E&255)/255*100)/100;return[C,R,P,B]}throw new Error("unknown hex color: "+c)},Ei=$i,Mb=O,op=_,Fb=k.type,ip=L,Ab=tr;op.prototype.hex=function(c){return Ab(this._rgb,c)},Mb.hex=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(op,[null].concat(c,["hex"])))},ip.format.hex=Ei,ip.autodetect.push({p:4,test:function(c){for(var h=[],p=arguments.length-1;p-- >0;)h[p]=arguments[p+1];if(!h.length&&Fb(c)==="string"&&[3,4,5,6,7,8,9].indexOf(c.length)>=0)return"hex"}});var Ob=k.unpack,sp=k.TWOPI,Db=Math.min,Bb=Math.sqrt,jb=Math.acos,zb=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=Ob(c,"rgb"),x=p[0],T=p[1],E=p[2];x/=255,T/=255,E/=255;var C,R=Db(x,T,E),P=(x+T+E)/3,B=P>0?1-R/P:0;return B===0?C=NaN:(C=(x-T+(x-E))/2,C/=Bb((x-T)*(x-T)+(x-E)*(T-E)),C=jb(C),E>T&&(C=sp-C),C/=sp),[C*360,B,P]},Ub=zb,Wb=k.unpack,Wc=k.limit,za=k.TWOPI,Hc=k.PITHIRD,Ua=Math.cos,Hb=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=Wb(c,"hsi");var p=c[0],x=c[1],T=c[2],E,C,R;return isNaN(p)&&(p=0),isNaN(x)&&(x=0),p>360&&(p-=360),p<0&&(p+=360),p/=360,p<1/3?(R=(1-x)/3,E=(1+x*Ua(za*p)/Ua(Hc-za*p))/3,C=1-(R+E)):p<2/3?(p-=1/3,E=(1-x)/3,C=(1+x*Ua(za*p)/Ua(Hc-za*p))/3,R=1-(E+C)):(p-=2/3,C=(1-x)/3,R=(1+x*Ua(za*p)/Ua(Hc-za*p))/3,E=1-(C+R)),E=Wc(T*E*3),C=Wc(T*C*3),R=Wc(T*R*3),[E*255,C*255,R*255,c.length>3?c[3]:1]},Gb=Hb,Vb=k.unpack,Yb=k.type,qb=O,cp=_,dp=L,Zb=Ub;cp.prototype.hsi=function(){return Zb(this._rgb)},qb.hsi=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(cp,[null].concat(c,["hsi"])))},dp.format.hsi=Gb,dp.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=Vb(c,"hsi"),Yb(c)==="array"&&c.length===3)return"hsi"}});var Qb=k.unpack,Kb=k.type,Xb=O,up=_,hp=L,Jb=Xr;up.prototype.hsl=function(){return Jb(this._rgb)},Xb.hsl=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(up,[null].concat(c,["hsl"])))},hp.format.hsl=er,hp.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=Qb(c,"hsl"),Kb(c)==="array"&&c.length===3)return"hsl"}});var e3=k.unpack,t3=Math.min,n3=Math.max,r3=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=e3(c,"rgb");var p=c[0],x=c[1],T=c[2],E=t3(p,x,T),C=n3(p,x,T),R=C-E,P,B,W;return W=C/255,C===0?(P=Number.NaN,B=0):(B=R/C,p===C&&(P=(x-T)/R),x===C&&(P=2+(T-p)/R),T===C&&(P=4+(p-x)/R),P*=60,P<0&&(P+=360)),[P,B,W]},a3=r3,l3=k.unpack,o3=Math.floor,i3=function(){for(var c,h,p,x,T,E,C=[],R=arguments.length;R--;)C[R]=arguments[R];C=l3(C,"hsv");var P=C[0],B=C[1],W=C[2],K,G,ne;if(W*=255,B===0)K=G=ne=W;else{P===360&&(P=0),P>360&&(P-=360),P<0&&(P+=360),P/=60;var ee=o3(P),me=P-ee,Se=W*(1-B),$e=W*(1-B*me),Le=W*(1-B*(1-me));switch(ee){case 0:c=[W,Le,Se],K=c[0],G=c[1],ne=c[2];break;case 1:h=[$e,W,Se],K=h[0],G=h[1],ne=h[2];break;case 2:p=[Se,W,Le],K=p[0],G=p[1],ne=p[2];break;case 3:x=[Se,$e,W],K=x[0],G=x[1],ne=x[2];break;case 4:T=[Le,Se,W],K=T[0],G=T[1],ne=T[2];break;case 5:E=[W,Se,$e],K=E[0],G=E[1],ne=E[2];break}}return[K,G,ne,C.length>3?C[3]:1]},s3=i3,c3=k.unpack,d3=k.type,u3=O,fp=_,pp=L,h3=a3;fp.prototype.hsv=function(){return h3(this._rgb)},u3.hsv=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(fp,[null].concat(c,["hsv"])))},pp.format.hsv=s3,pp.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=c3(c,"hsv"),d3(c)==="array"&&c.length===3)return"hsv"}});var Ni={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},Wa=Ni,f3=k.unpack,gp=Math.pow,p3=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=f3(c,"rgb"),x=p[0],T=p[1],E=p[2],C=g3(x,T,E),R=C[0],P=C[1],B=C[2],W=116*P-16;return[W<0?0:W,500*(R-P),200*(P-B)]},Gc=function(c){return(c/=255)<=.04045?c/12.92:gp((c+.055)/1.055,2.4)},Vc=function(c){return c>Wa.t3?gp(c,1/3):c/Wa.t2+Wa.t0},g3=function(c,h,p){c=Gc(c),h=Gc(h),p=Gc(p);var x=Vc((.4124564*c+.3575761*h+.1804375*p)/Wa.Xn),T=Vc((.2126729*c+.7151522*h+.072175*p)/Wa.Yn),E=Vc((.0193339*c+.119192*h+.9503041*p)/Wa.Zn);return[x,T,E]},mp=p3,Ha=Ni,m3=k.unpack,v3=Math.pow,y3=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=m3(c,"lab");var p=c[0],x=c[1],T=c[2],E,C,R,P,B,W;return C=(p+16)/116,E=isNaN(x)?C:C+x/500,R=isNaN(T)?C:C-T/200,C=Ha.Yn*qc(C),E=Ha.Xn*qc(E),R=Ha.Zn*qc(R),P=Yc(3.2404542*E-1.5371385*C-.4985314*R),B=Yc(-.969266*E+1.8760108*C+.041556*R),W=Yc(.0556434*E-.2040259*C+1.0572252*R),[P,B,W,c.length>3?c[3]:1]},Yc=function(c){return 255*(c<=.00304?12.92*c:1.055*v3(c,1/2.4)-.055)},qc=function(c){return c>Ha.t1?c*c*c:Ha.t2*(c-Ha.t0)},vp=y3,b3=k.unpack,w3=k.type,x3=O,yp=_,bp=L,S3=mp;yp.prototype.lab=function(){return S3(this._rgb)},x3.lab=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(yp,[null].concat(c,["lab"])))},bp.format.lab=vp,bp.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=b3(c,"lab"),w3(c)==="array"&&c.length===3)return"lab"}});var k3=k.unpack,C3=k.RAD2DEG,_3=Math.sqrt,T3=Math.atan2,$3=Math.round,E3=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=k3(c,"lab"),x=p[0],T=p[1],E=p[2],C=_3(T*T+E*E),R=(T3(E,T)*C3+360)%360;return $3(C*1e4)===0&&(R=Number.NaN),[x,C,R]},wp=E3,N3=k.unpack,I3=mp,L3=wp,R3=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=N3(c,"rgb"),x=p[0],T=p[1],E=p[2],C=I3(x,T,E),R=C[0],P=C[1],B=C[2];return L3(R,P,B)},P3=R3,M3=k.unpack,F3=k.DEG2RAD,A3=Math.sin,O3=Math.cos,D3=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=M3(c,"lch"),x=p[0],T=p[1],E=p[2];return isNaN(E)&&(E=0),E=E*F3,[x,O3(E)*T,A3(E)*T]},xp=D3,B3=k.unpack,j3=xp,z3=vp,U3=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=B3(c,"lch");var p=c[0],x=c[1],T=c[2],E=j3(p,x,T),C=E[0],R=E[1],P=E[2],B=z3(C,R,P),W=B[0],K=B[1],G=B[2];return[W,K,G,c.length>3?c[3]:1]},Sp=U3,W3=k.unpack,H3=Sp,G3=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=W3(c,"hcl").reverse();return H3.apply(void 0,p)},V3=G3,Y3=k.unpack,q3=k.type,kp=O,Ii=_,Zc=L,Cp=P3;Ii.prototype.lch=function(){return Cp(this._rgb)},Ii.prototype.hcl=function(){return Cp(this._rgb).reverse()},kp.lch=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Ii,[null].concat(c,["lch"])))},kp.hcl=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Ii,[null].concat(c,["hcl"])))},Zc.format.lch=Sp,Zc.format.hcl=V3,["lch","hcl"].forEach(function(c){return Zc.autodetect.push({p:2,test:function(){for(var h=[],p=arguments.length;p--;)h[p]=arguments[p];if(h=Y3(h,c),q3(h)==="array"&&h.length===3)return c}})});var Z3={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},_p=Z3,Q3=_,Tp=L,K3=k.type,eo=_p,X3=Ei,J3=tr;Q3.prototype.name=function(){for(var c=J3(this._rgb,"rgb"),h=0,p=Object.keys(eo);h<p.length;h+=1){var x=p[h];if(eo[x]===c)return x.toLowerCase()}return c},Tp.format.named=function(c){if(c=c.toLowerCase(),eo[c])return X3(eo[c]);throw new Error("unknown color name: "+c)},Tp.autodetect.push({p:5,test:function(c){for(var h=[],p=arguments.length-1;p-- >0;)h[p]=arguments[p+1];if(!h.length&&K3(c)==="string"&&eo[c.toLowerCase()])return"named"}});var e4=k.unpack,t4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=e4(c,"rgb"),x=p[0],T=p[1],E=p[2];return(x<<16)+(T<<8)+E},n4=t4,r4=k.type,a4=function(c){if(r4(c)=="number"&&c>=0&&c<=16777215){var h=c>>16,p=c>>8&255,x=c&255;return[h,p,x,1]}throw new Error("unknown num color: "+c)},l4=a4,o4=O,$p=_,Ep=L,i4=k.type,s4=n4;$p.prototype.num=function(){return s4(this._rgb)},o4.num=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply($p,[null].concat(c,["num"])))},Ep.format.num=l4,Ep.autodetect.push({p:5,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c.length===1&&i4(c[0])==="number"&&c[0]>=0&&c[0]<=16777215)return"num"}});var c4=O,Qc=_,Np=L,Ip=k.unpack,Lp=k.type,Rp=Math.round;Qc.prototype.rgb=function(c){return c===void 0&&(c=!0),c===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(Rp)},Qc.prototype.rgba=function(c){return c===void 0&&(c=!0),this._rgb.slice(0,4).map(function(h,p){return p<3?c===!1?h:Rp(h):h})},c4.rgb=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Qc,[null].concat(c,["rgb"])))},Np.format.rgb=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=Ip(c,"rgba");return p[3]===void 0&&(p[3]=1),p},Np.autodetect.push({p:3,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=Ip(c,"rgba"),Lp(c)==="array"&&(c.length===3||c.length===4&&Lp(c[3])=="number"&&c[3]>=0&&c[3]<=1))return"rgb"}});var Li=Math.log,d4=function(c){var h=c/100,p,x,T;return h<66?(p=255,x=h<6?0:-155.25485562709179-.44596950469579133*(x=h-2)+104.49216199393888*Li(x),T=h<20?0:-254.76935184120902+.8274096064007395*(T=h-10)+115.67994401066147*Li(T)):(p=351.97690566805693+.114206453784165*(p=h-55)-40.25366309332127*Li(p),x=325.4494125711974+.07943456536662342*(x=h-50)-28.0852963507957*Li(x),T=255),[p,x,T,1]},Pp=d4,u4=Pp,h4=k.unpack,f4=Math.round,p4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];for(var p=h4(c,"rgb"),x=p[0],T=p[2],E=1e3,C=4e4,R=.4,P;C-E>R;){P=(C+E)*.5;var B=u4(P);B[2]/B[0]>=T/x?C=P:E=P}return f4(P)},g4=p4,Kc=O,Ri=_,Xc=L,m4=g4;Ri.prototype.temp=Ri.prototype.kelvin=Ri.prototype.temperature=function(){return m4(this._rgb)},Kc.temp=Kc.kelvin=Kc.temperature=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Ri,[null].concat(c,["temp"])))},Xc.format.temp=Xc.format.kelvin=Xc.format.temperature=Pp;var v4=k.unpack,Jc=Math.cbrt,y4=Math.pow,b4=Math.sign,w4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=v4(c,"rgb"),x=p[0],T=p[1],E=p[2],C=[ed(x/255),ed(T/255),ed(E/255)],R=C[0],P=C[1],B=C[2],W=Jc(.4122214708*R+.5363325363*P+.0514459929*B),K=Jc(.2119034982*R+.6806995451*P+.1073969566*B),G=Jc(.0883024619*R+.2817188376*P+.6299787005*B);return[.2104542553*W+.793617785*K-.0040720468*G,1.9779984951*W-2.428592205*K+.4505937099*G,.0259040371*W+.7827717662*K-.808675766*G]},Mp=w4;function ed(c){var h=Math.abs(c);return h<.04045?c/12.92:(b4(c)||1)*y4((h+.055)/1.055,2.4)}var x4=k.unpack,Pi=Math.pow,S4=Math.sign,k4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=x4(c,"lab");var p=c[0],x=c[1],T=c[2],E=Pi(p+.3963377774*x+.2158037573*T,3),C=Pi(p-.1055613458*x-.0638541728*T,3),R=Pi(p-.0894841775*x-1.291485548*T,3);return[255*td(4.0767416621*E-3.3077115913*C+.2309699292*R),255*td(-1.2684380046*E+2.6097574011*C-.3413193965*R),255*td(-.0041960863*E-.7034186147*C+1.707614701*R),c.length>3?c[3]:1]},Fp=k4;function td(c){var h=Math.abs(c);return h>.0031308?(S4(c)||1)*(1.055*Pi(h,1/2.4)-.055):c*12.92}var C4=k.unpack,_4=k.type,T4=O,Ap=_,Op=L,$4=Mp;Ap.prototype.oklab=function(){return $4(this._rgb)},T4.oklab=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Ap,[null].concat(c,["oklab"])))},Op.format.oklab=Fp,Op.autodetect.push({p:3,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=C4(c,"oklab"),_4(c)==="array"&&c.length===3)return"oklab"}});var E4=k.unpack,N4=Mp,I4=wp,L4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var p=E4(c,"rgb"),x=p[0],T=p[1],E=p[2],C=N4(x,T,E),R=C[0],P=C[1],B=C[2];return I4(R,P,B)},R4=L4,P4=k.unpack,M4=xp,F4=Fp,A4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=P4(c,"lch");var p=c[0],x=c[1],T=c[2],E=M4(p,x,T),C=E[0],R=E[1],P=E[2],B=F4(C,R,P),W=B[0],K=B[1],G=B[2];return[W,K,G,c.length>3?c[3]:1]},O4=A4,D4=k.unpack,B4=k.type,j4=O,Dp=_,Bp=L,z4=R4;Dp.prototype.oklch=function(){return z4(this._rgb)},j4.oklch=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Dp,[null].concat(c,["oklch"])))},Bp.format.oklch=O4,Bp.autodetect.push({p:3,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=D4(c,"oklch"),B4(c)==="array"&&c.length===3)return"oklch"}});var jp=_,U4=k.type;jp.prototype.alpha=function(c,h){return h===void 0&&(h=!1),c!==void 0&&U4(c)==="number"?h?(this._rgb[3]=c,this):new jp([this._rgb[0],this._rgb[1],this._rgb[2],c],"rgb"):this._rgb[3]};var W4=_;W4.prototype.clipped=function(){return this._rgb._clipped||!1};var oa=_,H4=Ni;oa.prototype.darken=function(c){c===void 0&&(c=1);var h=this,p=h.lab();return p[0]-=H4.Kn*c,new oa(p,"lab").alpha(h.alpha(),!0)},oa.prototype.brighten=function(c){return c===void 0&&(c=1),this.darken(-c)},oa.prototype.darker=oa.prototype.darken,oa.prototype.brighter=oa.prototype.brighten;var G4=_;G4.prototype.get=function(c){var h=c.split("."),p=h[0],x=h[1],T=this[p]();if(x){var E=p.indexOf(x)-(p.substr(0,2)==="ok"?2:0);if(E>-1)return T[E];throw new Error("unknown channel "+x+" in mode "+p)}else return T};var Ga=_,V4=k.type,Y4=Math.pow,q4=1e-7,Z4=20;Ga.prototype.luminance=function(c){if(c!==void 0&&V4(c)==="number"){if(c===0)return new Ga([0,0,0,this._rgb[3]],"rgb");if(c===1)return new Ga([255,255,255,this._rgb[3]],"rgb");var h=this.luminance(),p="rgb",x=Z4,T=function(C,R){var P=C.interpolate(R,.5,p),B=P.luminance();return Math.abs(c-B)<q4||!x--?P:B>c?T(C,P):T(P,R)},E=(h>c?T(new Ga([0,0,0]),this):T(this,new Ga([255,255,255]))).rgb();return new Ga(E.concat([this._rgb[3]]))}return Q4.apply(void 0,this._rgb.slice(0,3))};var Q4=function(c,h,p){return c=nd(c),h=nd(h),p=nd(p),.2126*c+.7152*h+.0722*p},nd=function(c){return c/=255,c<=.03928?c/12.92:Y4((c+.055)/1.055,2.4)},an={},zp=_,Up=k.type,Mi=an,Wp=function(c,h,p){p===void 0&&(p=.5);for(var x=[],T=arguments.length-3;T-- >0;)x[T]=arguments[T+3];var E=x[0]||"lrgb";if(!Mi[E]&&!x.length&&(E=Object.keys(Mi)[0]),!Mi[E])throw new Error("interpolation mode "+E+" is not defined");return Up(c)!=="object"&&(c=new zp(c)),Up(h)!=="object"&&(h=new zp(h)),Mi[E](c,h,p).alpha(c.alpha()+p*(h.alpha()-c.alpha()))},Hp=_,K4=Wp;Hp.prototype.mix=Hp.prototype.interpolate=function(c,h){h===void 0&&(h=.5);for(var p=[],x=arguments.length-2;x-- >0;)p[x]=arguments[x+2];return K4.apply(void 0,[this,c,h].concat(p))};var Gp=_;Gp.prototype.premultiply=function(c){c===void 0&&(c=!1);var h=this._rgb,p=h[3];return c?(this._rgb=[h[0]*p,h[1]*p,h[2]*p,p],this):new Gp([h[0]*p,h[1]*p,h[2]*p,p],"rgb")};var rd=_,X4=Ni;rd.prototype.saturate=function(c){c===void 0&&(c=1);var h=this,p=h.lch();return p[1]+=X4.Kn*c,p[1]<0&&(p[1]=0),new rd(p,"lch").alpha(h.alpha(),!0)},rd.prototype.desaturate=function(c){return c===void 0&&(c=1),this.saturate(-c)};var Vp=_,Yp=k.type;Vp.prototype.set=function(c,h,p){p===void 0&&(p=!1);var x=c.split("."),T=x[0],E=x[1],C=this[T]();if(E){var R=T.indexOf(E)-(T.substr(0,2)==="ok"?2:0);if(R>-1){if(Yp(h)=="string")switch(h.charAt(0)){case"+":C[R]+=+h;break;case"-":C[R]+=+h;break;case"*":C[R]*=+h.substr(1);break;case"/":C[R]/=+h.substr(1);break;default:C[R]=+h}else if(Yp(h)==="number")C[R]=h;else throw new Error("unsupported value for Color.set");var P=new Vp(C,T);return p?(this._rgb=P._rgb,this):P}throw new Error("unknown channel "+E+" in mode "+T)}else return C};var J4=_,e5=function(c,h,p){var x=c._rgb,T=h._rgb;return new J4(x[0]+p*(T[0]-x[0]),x[1]+p*(T[1]-x[1]),x[2]+p*(T[2]-x[2]),"rgb")};an.rgb=e5;var t5=_,ad=Math.sqrt,Va=Math.pow,n5=function(c,h,p){var x=c._rgb,T=x[0],E=x[1],C=x[2],R=h._rgb,P=R[0],B=R[1],W=R[2];return new t5(ad(Va(T,2)*(1-p)+Va(P,2)*p),ad(Va(E,2)*(1-p)+Va(B,2)*p),ad(Va(C,2)*(1-p)+Va(W,2)*p),"rgb")};an.lrgb=n5;var r5=_,a5=function(c,h,p){var x=c.lab(),T=h.lab();return new r5(x[0]+p*(T[0]-x[0]),x[1]+p*(T[1]-x[1]),x[2]+p*(T[2]-x[2]),"lab")};an.lab=a5;var qp=_,Ya=function(c,h,p,x){var T,E,C,R;x==="hsl"?(C=c.hsl(),R=h.hsl()):x==="hsv"?(C=c.hsv(),R=h.hsv()):x==="hcg"?(C=c.hcg(),R=h.hcg()):x==="hsi"?(C=c.hsi(),R=h.hsi()):x==="lch"||x==="hcl"?(x="hcl",C=c.hcl(),R=h.hcl()):x==="oklch"&&(C=c.oklch().reverse(),R=h.oklch().reverse());var P,B,W,K,G,ne;(x.substr(0,1)==="h"||x==="oklch")&&(T=C,P=T[0],W=T[1],G=T[2],E=R,B=E[0],K=E[1],ne=E[2]);var ee,me,Se,$e;return!isNaN(P)&&!isNaN(B)?(B>P&&B-P>180?$e=B-(P+360):B<P&&P-B>180?$e=B+360-P:$e=B-P,me=P+p*$e):isNaN(P)?isNaN(B)?me=Number.NaN:(me=B,(G==1||G==0)&&x!="hsv"&&(ee=K)):(me=P,(ne==1||ne==0)&&x!="hsv"&&(ee=W)),ee===void 0&&(ee=W+p*(K-W)),Se=G+p*(ne-G),x==="oklch"?new qp([Se,ee,me],x):new qp([me,ee,Se],x)},l5=Ya,Zp=function(c,h,p){return l5(c,h,p,"lch")};an.lch=Zp,an.hcl=Zp;var o5=_,i5=function(c,h,p){var x=c.num(),T=h.num();return new o5(x+p*(T-x),"num")};an.num=i5;var s5=Ya,c5=function(c,h,p){return s5(c,h,p,"hcg")};an.hcg=c5;var d5=Ya,u5=function(c,h,p){return d5(c,h,p,"hsi")};an.hsi=u5;var h5=Ya,f5=function(c,h,p){return h5(c,h,p,"hsl")};an.hsl=f5;var p5=Ya,g5=function(c,h,p){return p5(c,h,p,"hsv")};an.hsv=g5;var m5=_,v5=function(c,h,p){var x=c.oklab(),T=h.oklab();return new m5(x[0]+p*(T[0]-x[0]),x[1]+p*(T[1]-x[1]),x[2]+p*(T[2]-x[2]),"oklab")};an.oklab=v5;var y5=Ya,b5=function(c,h,p){return y5(c,h,p,"oklch")};an.oklch=b5;var ld=_,w5=k.clip_rgb,od=Math.pow,id=Math.sqrt,sd=Math.PI,Qp=Math.cos,Kp=Math.sin,x5=Math.atan2,S5=function(c,h,p){h===void 0&&(h="lrgb"),p===void 0&&(p=null);var x=c.length;p||(p=Array.from(new Array(x)).map(function(){return 1}));var T=x/p.reduce(function(me,Se){return me+Se});if(p.forEach(function(me,Se){p[Se]*=T}),c=c.map(function(me){return new ld(me)}),h==="lrgb")return k5(c,p);for(var E=c.shift(),C=E.get(h),R=[],P=0,B=0,W=0;W<C.length;W++)if(C[W]=(C[W]||0)*p[0],R.push(isNaN(C[W])?0:p[0]),h.charAt(W)==="h"&&!isNaN(C[W])){var K=C[W]/180*sd;P+=Qp(K)*p[0],B+=Kp(K)*p[0]}var G=E.alpha()*p[0];c.forEach(function(me,Se){var $e=me.get(h);G+=me.alpha()*p[Se+1];for(var Le=0;Le<C.length;Le++)if(!isNaN($e[Le]))if(R[Le]+=p[Se+1],h.charAt(Le)==="h"){var Ct=$e[Le]/180*sd;P+=Qp(Ct)*p[Se+1],B+=Kp(Ct)*p[Se+1]}else C[Le]+=$e[Le]*p[Se+1]});for(var ne=0;ne<C.length;ne++)if(h.charAt(ne)==="h"){for(var ee=x5(B/R[ne],P/R[ne])/sd*180;ee<0;)ee+=360;for(;ee>=360;)ee-=360;C[ne]=ee}else C[ne]=C[ne]/R[ne];return G/=x,new ld(C,h).alpha(G>.99999?1:G,!0)},k5=function(c,h){for(var p=c.length,x=[0,0,0,0],T=0;T<c.length;T++){var E=c[T],C=h[T]/p,R=E._rgb;x[0]+=od(R[0],2)*C,x[1]+=od(R[1],2)*C,x[2]+=od(R[2],2)*C,x[3]+=R[3]*C}return x[0]=id(x[0]),x[1]=id(x[1]),x[2]=id(x[2]),x[3]>.9999999&&(x[3]=1),new ld(w5(x))},En=O,qa=k.type,C5=Math.pow,cd=function(c){var h="rgb",p=En("#ccc"),x=0,T=[0,1],E=[],C=[0,0],R=!1,P=[],B=!1,W=0,K=1,G=!1,ne={},ee=!0,me=1,Se=function(V){if(V=V||["#fff","#000"],V&&qa(V)==="string"&&En.brewer&&En.brewer[V.toLowerCase()]&&(V=En.brewer[V.toLowerCase()]),qa(V)==="array"){V.length===1&&(V=[V[0],V[0]]),V=V.slice(0);for(var oe=0;oe<V.length;oe++)V[oe]=En(V[oe]);E.length=0;for(var be=0;be<V.length;be++)E.push(be/(V.length-1))}return Zt(),P=V},$e=function(V){if(R!=null){for(var oe=R.length-1,be=0;be<oe&&V>=R[be];)be++;return be-1}return 0},Le=function(V){return V},Ct=function(V){return V},xt=function(V,oe){var be,ve;if(oe==null&&(oe=!1),isNaN(V)||V===null)return p;if(oe)ve=V;else if(R&&R.length>2){var _t=$e(V);ve=_t/(R.length-2)}else K!==W?ve=(V-W)/(K-W):ve=1;ve=Ct(ve),oe||(ve=Le(ve)),me!==1&&(ve=C5(ve,me)),ve=C[0]+ve*(1-C[0]-C[1]),ve=Math.min(1,Math.max(0,ve));var Ue=Math.floor(ve*1e4);if(ee&&ne[Ue])be=ne[Ue];else{if(qa(P)==="array")for(var Ee=0;Ee<E.length;Ee++){var Fe=E[Ee];if(ve<=Fe){be=P[Ee];break}if(ve>=Fe&&Ee===E.length-1){be=P[Ee];break}if(ve>Fe&&ve<E[Ee+1]){ve=(ve-Fe)/(E[Ee+1]-Fe),be=En.interpolate(P[Ee],P[Ee+1],ve,h);break}}else qa(P)==="function"&&(be=P(ve));ee&&(ne[Ue]=be)}return be},Zt=function(){return ne={}};Se(c);var _e=function(V){var oe=En(xt(V));return B&&oe[B]?oe[B]():oe};return _e.classes=function(V){if(V!=null){if(qa(V)==="array")R=V,T=[V[0],V[V.length-1]];else{var oe=En.analyze(T);V===0?R=[oe.min,oe.max]:R=En.limits(oe,"e",V)}return _e}return R},_e.domain=function(V){if(!arguments.length)return T;W=V[0],K=V[V.length-1],E=[];var oe=P.length;if(V.length===oe&&W!==K)for(var be=0,ve=Array.from(V);be<ve.length;be+=1){var _t=ve[be];E.push((_t-W)/(K-W))}else{for(var Ue=0;Ue<oe;Ue++)E.push(Ue/(oe-1));if(V.length>2){var Ee=V.map(function(Ae,Oe){return Oe/(V.length-1)}),Fe=V.map(function(Ae){return(Ae-W)/(K-W)});Fe.every(function(Ae,Oe){return Ee[Oe]===Ae})||(Ct=function(Ae){if(Ae<=0||Ae>=1)return Ae;for(var Oe=0;Ae>=Fe[Oe+1];)Oe++;var In=(Ae-Fe[Oe])/(Fe[Oe+1]-Fe[Oe]),kr=Ee[Oe]+In*(Ee[Oe+1]-Ee[Oe]);return kr})}}return T=[W,K],_e},_e.mode=function(V){return arguments.length?(h=V,Zt(),_e):h},_e.range=function(V,oe){return Se(V),_e},_e.out=function(V){return B=V,_e},_e.spread=function(V){return arguments.length?(x=V,_e):x},_e.correctLightness=function(V){return V==null&&(V=!0),G=V,Zt(),G?Le=function(oe){for(var be=xt(0,!0).lab()[0],ve=xt(1,!0).lab()[0],_t=be>ve,Ue=xt(oe,!0).lab()[0],Ee=be+(ve-be)*oe,Fe=Ue-Ee,Ae=0,Oe=1,In=20;Math.abs(Fe)>.01&&In-- >0;)(function(){return _t&&(Fe*=-1),Fe<0?(Ae=oe,oe+=(Oe-oe)*.5):(Oe=oe,oe+=(Ae-oe)*.5),Ue=xt(oe,!0).lab()[0],Fe=Ue-Ee})();return oe}:Le=function(oe){return oe},_e},_e.padding=function(V){return V!=null?(qa(V)==="number"&&(V=[V,V]),C=V,_e):C},_e.colors=function(V,oe){arguments.length<2&&(oe="hex");var be=[];if(arguments.length===0)be=P.slice(0);else if(V===1)be=[_e(.5)];else if(V>1){var ve=T[0],_t=T[1]-ve;be=_5(0,V,!1).map(function(Oe){return _e(ve+Oe/(V-1)*_t)})}else{c=[];var Ue=[];if(R&&R.length>2)for(var Ee=1,Fe=R.length,Ae=1<=Fe;Ae?Ee<Fe:Ee>Fe;Ae?Ee++:Ee--)Ue.push((R[Ee-1]+R[Ee])*.5);else Ue=T;be=Ue.map(function(Oe){return _e(Oe)})}return En[oe]&&(be=be.map(function(Oe){return Oe[oe]()})),be},_e.cache=function(V){return V!=null?(ee=V,_e):ee},_e.gamma=function(V){return V!=null?(me=V,_e):me},_e.nodata=function(V){return V!=null?(p=En(V),_e):p},_e};function _5(c,h,p){for(var x=[],T=c<h,E=p?T?h+1:h-1:h,C=c;T?C<E:C>E;T?C++:C--)x.push(C);return x}var to=_,T5=cd,$5=function(c){for(var h=[1,1],p=1;p<c;p++){for(var x=[1],T=1;T<=h.length;T++)x[T]=(h[T]||0)+h[T-1];h=x}return h},E5=function(c){var h,p,x,T,E,C,R;if(c=c.map(function(G){return new to(G)}),c.length===2)h=c.map(function(G){return G.lab()}),E=h[0],C=h[1],T=function(G){var ne=[0,1,2].map(function(ee){return E[ee]+G*(C[ee]-E[ee])});return new to(ne,"lab")};else if(c.length===3)p=c.map(function(G){return G.lab()}),E=p[0],C=p[1],R=p[2],T=function(G){var ne=[0,1,2].map(function(ee){return(1-G)*(1-G)*E[ee]+2*(1-G)*G*C[ee]+G*G*R[ee]});return new to(ne,"lab")};else if(c.length===4){var P;x=c.map(function(G){return G.lab()}),E=x[0],C=x[1],R=x[2],P=x[3],T=function(G){var ne=[0,1,2].map(function(ee){return(1-G)*(1-G)*(1-G)*E[ee]+3*(1-G)*(1-G)*G*C[ee]+3*(1-G)*G*G*R[ee]+G*G*G*P[ee]});return new to(ne,"lab")}}else if(c.length>=5){var B,W,K;B=c.map(function(G){return G.lab()}),K=c.length-1,W=$5(K),T=function(G){var ne=1-G,ee=[0,1,2].map(function(me){return B.reduce(function(Se,$e,Le){return Se+W[Le]*Math.pow(ne,K-Le)*Math.pow(G,Le)*$e[me]},0)});return new to(ee,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return T},N5=function(c){var h=E5(c);return h.scale=function(){return T5(h)},h},dd=O,Nn=function(c,h,p){if(!Nn[p])throw new Error("unknown blend mode "+p);return Nn[p](c,h)},xr=function(c){return function(h,p){var x=dd(p).rgb(),T=dd(h).rgb();return dd.rgb(c(x,T))}},Sr=function(c){return function(h,p){var x=[];return x[0]=c(h[0],p[0]),x[1]=c(h[1],p[1]),x[2]=c(h[2],p[2]),x}},I5=function(c){return c},L5=function(c,h){return c*h/255},R5=function(c,h){return c>h?h:c},P5=function(c,h){return c>h?c:h},M5=function(c,h){return 255*(1-(1-c/255)*(1-h/255))},F5=function(c,h){return h<128?2*c*h/255:255*(1-2*(1-c/255)*(1-h/255))},A5=function(c,h){return 255*(1-(1-h/255)/(c/255))},O5=function(c,h){return c===255?255:(c=255*(h/255)/(1-c/255),c>255?255:c)};Nn.normal=xr(Sr(I5)),Nn.multiply=xr(Sr(L5)),Nn.screen=xr(Sr(M5)),Nn.overlay=xr(Sr(F5)),Nn.darken=xr(Sr(R5)),Nn.lighten=xr(Sr(P5)),Nn.dodge=xr(Sr(O5)),Nn.burn=xr(Sr(A5));for(var D5=Nn,ud=k.type,B5=k.clip_rgb,j5=k.TWOPI,z5=Math.pow,U5=Math.sin,W5=Math.cos,Xp=O,H5=function(c,h,p,x,T){c===void 0&&(c=300),h===void 0&&(h=-1.5),p===void 0&&(p=1),x===void 0&&(x=1),T===void 0&&(T=[0,1]);var E=0,C;ud(T)==="array"?C=T[1]-T[0]:(C=0,T=[T,T]);var R=function(P){var B=j5*((c+120)/360+h*P),W=z5(T[0]+C*P,x),K=E!==0?p[0]+P*E:p,G=K*W*(1-W)/2,ne=W5(B),ee=U5(B),me=W+G*(-.14861*ne+1.78277*ee),Se=W+G*(-.29227*ne-.90649*ee),$e=W+G*(1.97294*ne);return Xp(B5([me*255,Se*255,$e*255,1]))};return R.start=function(P){return P==null?c:(c=P,R)},R.rotations=function(P){return P==null?h:(h=P,R)},R.gamma=function(P){return P==null?x:(x=P,R)},R.hue=function(P){return P==null?p:(p=P,ud(p)==="array"?(E=p[1]-p[0],E===0&&(p=p[1])):E=0,R)},R.lightness=function(P){return P==null?T:(ud(P)==="array"?(T=P,C=P[1]-P[0]):(T=[P,P],C=0),R)},R.scale=function(){return Xp.scale(R)},R.hue(p),R},G5=_,V5="0123456789abcdef",Y5=Math.floor,q5=Math.random,Z5=function(){for(var c="#",h=0;h<6;h++)c+=V5.charAt(Y5(q5()*16));return new G5(c,"hex")},hd=f,Jp=Math.log,Q5=Math.pow,K5=Math.floor,X5=Math.abs,eg=function(c,h){h===void 0&&(h=null);var p={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return hd(c)==="object"&&(c=Object.values(c)),c.forEach(function(x){h&&hd(x)==="object"&&(x=x[h]),x!=null&&!isNaN(x)&&(p.values.push(x),p.sum+=x,x<p.min&&(p.min=x),x>p.max&&(p.max=x),p.count+=1)}),p.domain=[p.min,p.max],p.limits=function(x,T){return tg(p,x,T)},p},tg=function(c,h,p){h===void 0&&(h="equal"),p===void 0&&(p=7),hd(c)=="array"&&(c=eg(c));var x=c.min,T=c.max,E=c.values.sort(function(pd,gd){return pd-gd});if(p===1)return[x,T];var C=[];if(h.substr(0,1)==="c"&&(C.push(x),C.push(T)),h.substr(0,1)==="e"){C.push(x);for(var R=1;R<p;R++)C.push(x+R/p*(T-x));C.push(T)}else if(h.substr(0,1)==="l"){if(x<=0)throw new Error("Logarithmic scales are only possible for values > 0");var P=Math.LOG10E*Jp(x),B=Math.LOG10E*Jp(T);C.push(x);for(var W=1;W<p;W++)C.push(Q5(10,P+W/p*(B-P)));C.push(T)}else if(h.substr(0,1)==="q"){C.push(x);for(var K=1;K<p;K++){var G=(E.length-1)*K/p,ne=K5(G);if(ne===G)C.push(E[ne]);else{var ee=G-ne;C.push(E[ne]*(1-ee)+E[ne+1]*ee)}}C.push(T)}else if(h.substr(0,1)==="k"){var me,Se=E.length,$e=new Array(Se),Le=new Array(p),Ct=!0,xt=0,Zt=null;Zt=[],Zt.push(x);for(var _e=1;_e<p;_e++)Zt.push(x+_e/p*(T-x));for(Zt.push(T);Ct;){for(var V=0;V<p;V++)Le[V]=0;for(var oe=0;oe<Se;oe++)for(var be=E[oe],ve=Number.MAX_VALUE,_t=void 0,Ue=0;Ue<p;Ue++){var Ee=X5(Zt[Ue]-be);Ee<ve&&(ve=Ee,_t=Ue),Le[_t]++,$e[oe]=_t}for(var Fe=new Array(p),Ae=0;Ae<p;Ae++)Fe[Ae]=null;for(var Oe=0;Oe<Se;Oe++)me=$e[Oe],Fe[me]===null?Fe[me]=E[Oe]:Fe[me]+=E[Oe];for(var In=0;In<p;In++)Fe[In]*=1/Le[In];Ct=!1;for(var kr=0;kr<p;kr++)if(Fe[kr]!==Zt[kr]){Ct=!0;break}Zt=Fe,xt++,xt>200&&(Ct=!1)}for(var Cr={},Za=0;Za<p;Za++)Cr[Za]=[];for(var Qa=0;Qa<Se;Qa++)me=$e[Qa],Cr[me].push(E[Qa]);for(var rr=[],ia=0;ia<p;ia++)rr.push(Cr[ia][0]),rr.push(Cr[ia][Cr[ia].length-1]);rr=rr.sort(function(pd,gd){return pd-gd}),C.push(rr[0]);for(var no=1;no<rr.length;no+=2){var sa=rr[no];!isNaN(sa)&&C.indexOf(sa)===-1&&C.push(sa)}}return C},ng={analyze:eg,limits:tg},rg=_,J5=function(c,h){c=new rg(c),h=new rg(h);var p=c.luminance(),x=h.luminance();return p>x?(p+.05)/(x+.05):(x+.05)/(p+.05)},ag=_,nr=Math.sqrt,ct=Math.pow,e6=Math.min,t6=Math.max,lg=Math.atan2,og=Math.abs,Fi=Math.cos,ig=Math.sin,n6=Math.exp,sg=Math.PI,r6=function(c,h,p,x,T){p===void 0&&(p=1),x===void 0&&(x=1),T===void 0&&(T=1);var E=function(sa){return 360*sa/(2*sg)},C=function(sa){return 2*sg*sa/360};c=new ag(c),h=new ag(h);var R=Array.from(c.lab()),P=R[0],B=R[1],W=R[2],K=Array.from(h.lab()),G=K[0],ne=K[1],ee=K[2],me=(P+G)/2,Se=nr(ct(B,2)+ct(W,2)),$e=nr(ct(ne,2)+ct(ee,2)),Le=(Se+$e)/2,Ct=.5*(1-nr(ct(Le,7)/(ct(Le,7)+ct(25,7)))),xt=B*(1+Ct),Zt=ne*(1+Ct),_e=nr(ct(xt,2)+ct(W,2)),V=nr(ct(Zt,2)+ct(ee,2)),oe=(_e+V)/2,be=E(lg(W,xt)),ve=E(lg(ee,Zt)),_t=be>=0?be:be+360,Ue=ve>=0?ve:ve+360,Ee=og(_t-Ue)>180?(_t+Ue+360)/2:(_t+Ue)/2,Fe=1-.17*Fi(C(Ee-30))+.24*Fi(C(2*Ee))+.32*Fi(C(3*Ee+6))-.2*Fi(C(4*Ee-63)),Ae=Ue-_t;Ae=og(Ae)<=180?Ae:Ue<=_t?Ae+360:Ae-360,Ae=2*nr(_e*V)*ig(C(Ae)/2);var Oe=G-P,In=V-_e,kr=1+.015*ct(me-50,2)/nr(20+ct(me-50,2)),Cr=1+.045*oe,Za=1+.015*oe*Fe,Qa=30*n6(-ct((Ee-275)/25,2)),rr=2*nr(ct(oe,7)/(ct(oe,7)+ct(25,7))),ia=-rr*ig(2*C(Qa)),no=nr(ct(Oe/(p*kr),2)+ct(In/(x*Cr),2)+ct(Ae/(T*Za),2)+ia*(In/(x*Cr))*(Ae/(T*Za)));return t6(0,e6(100,no))},cg=_,a6=function(c,h,p){p===void 0&&(p="lab"),c=new cg(c),h=new cg(h);var x=c.get(p),T=h.get(p),E=0;for(var C in x){var R=(x[C]||0)-(T[C]||0);E+=R*R}return Math.sqrt(E)},l6=_,o6=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];try{return new(Function.prototype.bind.apply(l6,[null].concat(c))),!0}catch{return!1}},dg=O,ug=cd,i6={cool:function(){return ug([dg.hsl(180,1,.9),dg.hsl(250,.7,.4)])},hot:function(){return ug(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Ai={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},fd=0,hg=Object.keys(Ai);fd<hg.length;fd+=1){var fg=hg[fd];Ai[fg.toLowerCase()]=Ai[fg]}var s6=Ai,wt=O;wt.average=S5,wt.bezier=N5,wt.blend=D5,wt.cubehelix=H5,wt.mix=wt.interpolate=Wp,wt.random=Z5,wt.scale=cd,wt.analyze=ng.analyze,wt.contrast=J5,wt.deltaE=r6,wt.distance=a6,wt.limits=ng.limits,wt.valid=o6,wt.scales=i6,wt.colors=_p,wt.brewer=s6;var c6=wt;return c6})})(vy);var b_=vy.exports;const w_=Kn(b_);function x_(e){const{h:t,s:n,l:r}=e;return w_.hsl(t,n/100,r/100)}const S_=e=>x_(e).luminance(),yy=e=>S_(e)<.5,Cl=({label:e,checked:t,toggle:n})=>u("label",{className:"checkbox no-focus",children:[a("input",{type:"checkbox",checked:t,onChange:n}),e]}),by=`// redefine any of the following hues to taste...
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
`,k_=()=>{const[e,t]=j.useState({names:!1,info:!1,show5s:!1}),n=i=>t(s=>({...s,[i]:!s[i]})),r=()=>n("names"),l=()=>n("info"),o=()=>n("show5s");return u("div",{className:"prose",children:[a("h1",{children:"Standard Colors"}),a("p",{children:"The following greyscale ranges are also defined."}),u("div",{className:"flex space end",children:[a("h2",{children:"Greyscale Ranges"}),u("div",{className:"text-right color-options",children:[a(Cl,{label:"Show Names",checked:e.names,toggle:r}),a(Cl,{label:"Show Info",checked:e.info,toggle:l}),a(Cl,{label:"Show 5s",checked:e.show5s,toggle:o})]})]}),a("div",{className:`ranges ${e.names?"names":"nameless"}`,children:rc.filter(i=>Vr.ranges[i].greyscale).map(i=>a(C_,{uri:i,range:Vr.ranges[i],options:e},i))}),a("h2",{children:"Brand Hue"}),u("p",{children:["The greyscale ranges are designed to based on your primary brand color. The ",a("code",{children:"grey"})," range is desaturated to around 5%.  The"," ",a("code",{children:"grey20"})," and ",a("code",{children:"grey40"})," ranges are saturated to around 20% and 40% respectively."]}),u("p",{children:["The brand color for this website is ",a("code",{children:"violet"})," which is why these greyscales have a violet tinge to them."]}),u("p",{children:["Each of the colours show above has a corresponding SCSS variable composed of the color name and stop delimited by a hyphen, e.g."," ",a("code",{children:"$red-0"})," through to ",a("code",{children:"$grey-100"}),".  They are also defined as CSS custom properties, e.g. ",a("code",{children:"--red-0"})," through to ",a("code",{children:"--grey-100"}),"."]}),u("p",{children:["Each range of colors is built from a base hue.  These are defined in SASS variables using the SASS ",a("code",{children:"!default"})," flag.  If you want to adjust the hues you can set any of these SASS variables before importing the main ",a("code",{children:"badger-ui.scss"})," component."]}),a(Pe,{code:by,caption:"Customising Hues",language:"scss",expand:!0}),a("h2",{children:"TODO"}),u("ul",{children:[a("li",{children:"Editing or updating a palette using Badger Color"}),a("li",{children:"Expanding the palette into SCSS files"}),a("li",{children:"Customising the palette using SCSS variables"}),a("li",{children:"Customising the color hues"}),a("li",{children:"Defining your brand color"}),a("li",{children:"Adding/editing CSS scopes"}),a("li",{children:"Including or omitting colors"})]})]})},C_=({uri:e,range:t,options:n})=>u("div",{className:"range",children:[n.names&&a("h3",{children:t.name}),a("div",{className:"swatches",children:vi(0,100,n.show5s?5:10).map(r=>a(__,{uri:e,range:t,stop:r,options:n},r))})]}),__=({uri:e,range:t,stop:n,options:r})=>{const l=t.stops[n];return a("div",{className:`swatch ${yy(l)?"dark":"light"}`,style:{backgroundColor:`var(--${e}-${n})`},children:r.info&&a(wy,{uri:e,stop:n,color:l})})},wy=({uri:e,stop:t,color:n})=>u("div",{children:[u("div",{className:"stop",children:[e,"-",t]}),u("div",{className:"specs",children:[n.hex,a("br",{}),"h:",n.h,"°",a("br",{}),"s:",n.s,"%",a("br",{}),"l:",n.l,"%"]})]}),T_=Object.freeze(Object.defineProperty({__proto__:null,Info:wy,default:k_},Symbol.toStringTag,{value:"Module"})),$_=`# Path to the palette data file (exported from
# badger-color) relative to the project root
palette: config/my-palette.json

# Path to the SCSS output directory, also
# relative to the project root
output: styles/color

# Your default brand color
brandColor: blue
`,E_=`{
  "scripts": {
    "palette": "badger-css-palette-scss -c config/export-my-palette.yaml -v"
  }
}`,N_=`## using npm
$ npm run palette

## using yarn
$ yarn run palette

## using pnpm
$ pnpm run palette`,I_=`// Load the default helpers and configuration files
@import '@abw/badger-css/styles/helpers/all.scss';
@import '@abw/badger-css/styles/config/all.scss';

// Load your custom palette
@import "color/palette.scss";

// Then the default utilities, form styles and other components
@import "@abw/badger-css/styles/utilities/all.scss";
@import "@abw/badger-css/styles/forms/all.scss";
@import "@abw/badger-css/styles/components/all.scss";
`,L_=`// Replace this:
// @import "@abw/badger-css/styles/badger.scss";

// With something like this (you may need to adjust
// the path prefix, depending on where you're loading
// it from, e.g. "../styles/badger.scss")
@import "styles/badger.scss";`,nt=({children:e,align:t="start"})=>a("div",{className:`grid-2 gap-h-8 stack-desktop ${t}`,style:{"--prose-width":"100%"},children:e}),R_=()=>u("div",{className:"prose",children:[a("h1",{children:"Custom Palette"}),a("p",{children:"The pre-defined color palette is a good starting point for building a web site.  There's a certain amount of flexibility built in to the SASS source files: you can adjust the hues of the different color ranges, define your own brand color or colors, and specify which of the color ranges you want to include (and implicitly, which ones you don't want)."}),u("p",{children:["When you need a bit more flexibility you can head over to the"," ",a("a",{href:"https://abw.github.io/badger-color/",children:"Badger Color"})," web app and either customise one of the standard palettes or design your own palette from scratch."]}),a("p",{children:"You can then download the palette data as a JSON file and use the script provided to generate the SCSS configuration files for your palette, ready to integrate into Badger CSS.  At any point you can upload the palette back into Badger Color, make some adjustments, download it again and repeat the process."}),u("p",{children:["You'll need to have ",a("code",{children:"@abw/badger-css"})," installed as a developer dependency for your project for these next steps to work. See the ",a(Ie,{to:"/getting-started/installation",text:"installation"})," ","page for details (TL;DR: ",a("code",{children:"npm add -D @abw/badger-css"})," or the equivalent with ",a("code",{children:"yarn"})," or ",a("code",{children:"pnpm"}),")."]}),a("h2",{children:"Palette Configuration File"}),u(nt,{children:[u("div",{children:[u("p",{children:["For these examples, we'll assume that you've download your custom palette file and saved it in a ",a("code",{children:"config"})," directory under your project root as ",a("code",{children:"my-palette.json"}),".  It doesn't have to be in the ",a("code",{children:"config"})," directory - you can put it anywhere you like in your project."]}),u("p",{children:["You then need to create a configuration file like the one shown here.  It can be a YAML file or JSON file, you can call it anything you like (as long as it has a ",a("code",{children:".yaml"})," or ",a("code",{children:".json"})," ","file extension), and you can put it anywhere you like in your project. Here we'll assume it's called"," ",a("code",{children:"export-my-palette.yaml"})," and is also located in the ",a("code",{children:"config"})," directory under the project root."]}),u("p",{children:["You should define ",a("code",{children:"palette"})," to be the path to your palette data file (relative to the project root), and"," ",a("code",{children:"output"})," to be a path to the directory where you want the SCSS files to be written (also relative to the project root)."]}),u("p",{children:["You can also define your brand color as ",a("code",{children:"brandColor"}),". There are other configuration options you can specify but we'll keep it simple for now."]})]}),a(Pe,{code:$_,caption:"config/export-my-palette.yaml",language:"yaml",expand:!0})]}),u("h2",{children:["Adding a ",a("code",{children:"package.json"})," Script"]}),u(nt,{children:[u("div",{children:[u("p",{children:["Then add a line to the ",a("code",{children:"scripts"})," section of your"," ",a("code",{children:"package.json"})," file like this."]}),u("p",{children:["The ",a("code",{children:"-c"})," (or ",a("code",{children:"--config"})," if you prefer verbosity) option tells it where your config file is located.  The ",a("code",{children:"-v"})," ","(or ",a("code",{children:"--verbose"}),") option enables messages to tell you what it's doing.  You can leave this off if you prefer."]})]}),a(Pe,{code:E_,caption:"package.json",language:"json",expand:!0})]}),a("h2",{children:"Export the Palette as SCSS"}),u(nt,{children:[u("div",{children:[u("p",{children:["You can then ",a("code",{children:"run palette"})," from the command line using"," ",a("code",{children:"npm"}),", ",a("code",{children:"yarn"})," or ",a("code",{children:"pnpm"}),", depending on which package manager you're using."]}),u("p",{children:["If you've got the verbose mode enabled, you should see a message reporting each color range being written to a file in"," ",a("code",{children:"style/color/range/XXX"}),", and the main palette index file being written to ",a("code",{children:"style/color/palette.scss"}),"."]})]}),a(Pe,{code:N_,caption:"Exporting the palette",language:"bash",expand:!0})]}),u("h2",{children:["Defining a Custom ",a("code",{children:"badger.scss"})," File"]}),u(nt,{children:[u("div",{children:[u("p",{children:["Now you need to define your own version of the main"," ",a("code",{children:"badger.scss"})," which loads your palette instead of the default one."]}),u("p",{children:["In this example we'll assume that it's saved as",a("code",{children:"badger.scss"})," in the ",a("code",{children:"styles"})," directory, alongside the newly created ",a("code",{children:"color"})," directory that has been exported from the palette."]}),a("p",{children:"This is also a good place to set any SASS variables that change the defaults for Badger CSS.  They should go at the top of this file."})]}),a(Pe,{code:I_,caption:"Custom badger.scss",language:"scss",expand:!0})]}),u("h2",{children:["Replace the Standard ",a("code",{children:"badger.scss"})," File"]}),u(nt,{children:[a("div",{children:u("p",{children:["Now you just need to include the new file ",a("code",{children:"badger.scss"})," ","into your website or main stylesheet.  If you were previously loading the default ",a("code",{children:"badger.scss"})," then should change the path to point to your new local ",a("code",{children:"badger.scss"})," file."]})}),a(Pe,{code:L_,caption:"Including your badger.scss",language:"scss",expand:!0})]})]}),P_=Object.freeze(Object.defineProperty({__proto__:null,default:R_},Symbol.toStringTag,{value:"Module"})),M_=`// define the hues for the greyscale colors...
$grey-hue:   40;
$grey20-hue: 40;
$grey40-hue: 40;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,bi=({children:e,code:t,caption:n,language:r,expand:l,className:o=""})=>u("div",{className:`grid-2 gap-8 start stack-desktop ${o}`,children:[a("div",{children:e}),a(Pe,{code:t,caption:n,language:r,expand:l,className:"mar-b-8"})]}),F_=()=>{const[e,t]=j.useState({names:!1,info:!1,show5s:!1}),n=i=>t(s=>({...s,[i]:!s[i]})),r=()=>n("names"),l=()=>n("info"),o=()=>n("show5s");return u("div",{className:"prose",children:[a("h1",{children:"Standard Colors"}),u("p",{children:["The following standard color ranges are defined.  This palette was created using ",a("a",{href:"https://abw.github.io/badger-color",children:"Badger Color"}),", a companion to this library.  You can use it to clone and update this palette or to create your own palettes from scratch."]}),u("p",{children:["Each color range is divided into color ",a("em",{children:"stops"}),".  They range in increments of 5 from ",a("code",{children:"0"})," which is very close to black, up to"," ",a("code",{children:"100"}),", which is very close to white."]}),a(i0,{title:"Color Ranges",colors:rc.filter(i=>!Vr.ranges[i].greyscale),options:e,toggleNames:r,toggleInfo:l,toggleShow5s:o}),u("p",{children:["Each range of colors is built from a base hue.  These are defined in SASS variables using the SASS ",a("code",{children:"!default"})," flag.  If you want to adjust the hues you can set any of these SASS variables before importing the main ",a("code",{children:"badger.scss"})," component."]}),a(Pe,{code:by,caption:"Customising Hues",language:"scss",expand:!0}),a(i0,{title:"Greyscale Ranges",colors:rc.filter(i=>Vr.ranges[i].greyscale),options:e,toggleNames:r,toggleInfo:l,toggleShow5s:o}),u(bi,{code:M_,caption:"Customising Greyscale Hues",language:"scss",className:"mar-t-8",expand:!0,children:[u("p",{children:["Three greyscale color ranges are also defined.  They are designed to be based on your primary brand color. The ",a("code",{children:"grey"})," range is desaturated to around 5%.  The"," ",a("code",{children:"grey20"})," and ",a("code",{children:"grey40"})," ranges are saturated to around 20% and 40% respectively."]}),u("p",{children:["The brand color for this website is ",a("code",{children:"violet"})," which is why these greyscales have a violet tinge to them.  You can set the hues for these color ranges using the ",a("code",{children:"$grey-hue"}),","," ",a("code",{children:"$grey20-hue"})," and ",a("code",{children:"$grey40-hue"})," variables."]})]}),u("p",{className:"mar-t-4",children:[a(Ie,{to:"/colors/brand",text:"Read on"})," to see how you can define your own brand color and automatically get greyscales to match."]})]})},i0=({title:e,colors:t,options:n,toggleNames:r,toggleInfo:l,toggleShow5s:o})=>u(Rn,{children:[u("div",{className:"flex space end",children:[a("h2",{children:e}),u("div",{className:"text-right color-options",children:[a(Cl,{label:"Show Names",checked:n.names,toggle:r}),a(Cl,{label:"Show Info",checked:n.info,toggle:l}),a(Cl,{label:"Show 5s",checked:n.show5s,toggle:o})]})]}),a("div",{className:`ranges ${n.names?"names":"nameless"}`,children:t.map(i=>a(A_,{uri:i,range:Vr.ranges[i],options:n},i))})]}),A_=({uri:e,range:t,options:n})=>u("div",{className:"range",children:[n.names&&a("h3",{children:t.name}),a("div",{className:"swatches",children:vi(0,100,n.show5s?5:10).map(r=>a(O_,{uri:e,range:t,stop:r,options:n},r))})]}),O_=({uri:e,range:t,stop:n,options:r})=>{const l=t.stops[n];return a("div",{className:`swatch ${yy(l)?"dark":"light"}`,style:{backgroundColor:`var(--${e}-${n})`},children:r.info&&a(xy,{uri:e,stop:n,color:l})})},xy=({uri:e,stop:t,color:n})=>u("div",{children:[u("div",{className:"stop",children:[e,"-",t]}),u("div",{className:"specs",children:[n.hex,a("br",{}),"h:",n.h,"°",a("br",{}),"s:",n.s,"%",a("br",{}),"l:",n.l,"%"]})]}),D_=Object.freeze(Object.defineProperty({__proto__:null,Info:xy,default:F_},Symbol.toStringTag,{value:"Module"})),F=({Component:e,code:t,html:n,children:r,className:l="",caption:o,fixed:i,expand:s,language:d})=>u("div",{className:`example grid-2 gap-8 stack-desktop ${l}`,children:[a("div",{className:"source",children:a(Pe,{caption:o,code:t||n,expand:s,fixed:i,language:n?"html":d})}),!!r&&a("div",{className:"interim",children:r}),e?u("div",{className:"output",children:[a("h4",{className:"caption",children:"Output"}),a(e,{})]}):null,n?u("div",{className:"output",children:[a("h4",{className:"caption",children:"Output"}),a("div",{dangerouslySetInnerHTML:{__html:n}})]}):null]}),B_=`<div class="
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
`,H_={bars:"M0 96C0 78 14 64 32 64H416c18 0 32 14 32 32s-14 32-32 32H32C14 128 0 114 0 96zM0 256c0-18 14-32 32-32H416c18 0 32 14 32 32s-14 32-32 32H32c-18 0-32-14-32-32zM448 416c0 18-14 32-32 32H32c-18 0-32-14-32-32s14-32 32-32H416c18 0 32 14 32 32z",check:"M486,91C499,104 499,127 486,140L212,422C198,435 177,435 163,422L26,281C13,267 13,245 26,231C39,217 61,217 75,231L187,347L438,91C451,77 473,77 486,91L486,91Z",cross:"M456,109C470,94 470,71 456,56C441,42 418,42 403,56L256,204L109,56C94,42 71,42 56,56C42,71 42,94 56,109L204,256L56,403C42,418 42,441 56,456C71,470 94,470 109,456L256,308L403,456C418,470 441,470 456,456C470,441 470,418 456,403L308,256L456,109Z",github:"M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z",info:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13 0-24-11-24-24s11-24 24-24h48c13 0 24 11 24 24v88h8c13 0 24 11 24 24s-11 24-24 24H216c-13 0-24-11-24-24s11-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",lock:"M159,133L159,226L301,226L301,133C301,94 269,62 230,62C191,62 159,94 159,133ZM101,226L101,133C101,62 159,4 230,4C301,4 359,62 359,133L359,226L373,226C404,226 430,252 430,283L430,455C430,486 404,512 373,512L87,512C56,512 30,486 30,455L30,283C30,252 56,226 87,226L101,226Z",pen:"M356,34L311,79L433,201L478,156C502,132 502,94 478,71L441,34C418,10 380,10 356,34L356,34ZM290,100L71,319C61,329 54,341 50,355L16,468C14,476 16,484 22,490C28,496 36,498 44,496L157,462C171,458 183,451 192,442L412,222L290,100Z",plus:"M292,56C292,36 276,20 256,20C236,20 220,36 220,56L220,220L56,220C36,220 20,236 20,256C20,276 36,292 56,292L220,292L220,456C220,476 236,492 256,492C276,492 292,476 292,456L292,292L456,292C476,292 492,276 492,256C492,236 476,220 456,220L292,220L292,56Z",trash:"M173,33L166,46L76,46C59,46 46,59 46,76C46,93 59,106 76,106L436,106C453,106 466,93 466,76C466,59 453,46 436,46L346,46L339,33C334,22 324,16 312,16L200,16C188,16 178,22 173,33ZM436,136L76,136L96,454C97,478 117,496 141,496L371,496C395,496 415,478 416,454L436,136Z",undo:"M168,224L40,224C27,224 16,213 16,200L16,72C16,62 22,54 31,50C40,46 50,48 57,55L99,97C186,10 327,10 414,98C502,185 502,327 414,414C327,502 185,502 98,414C85,402 85,382 98,369C110,357 130,357 143,369C205,432 307,432 369,369C432,307 432,205 369,143C307,81 207,80 144,142L185,183C192,190 194,200 190,209C187,218 178,224 168,224Z",unlock:"M313,131C313,92 345,60 384,60C423,60 455,92 455,131L455,174C455,190 468,203 484,203C499,203 512,190 512,174L512,131C512,61 455,3 384,3C313,3 256,61 256,131L256,227L57,227C26,227 0,253 0,284L0,455C0,486 26,512 57,512L341,512C373,512 398,486 398,455L398,284C398,253 373,227 341,227L313,227L313,131Z",checked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083ZM88.43,298.82C75.421,285.811 75.421,264.689 88.43,251.68C101.439,238.671 122.561,238.671 135.57,251.68L202,318.11L376.43,143.68C389.439,130.671 410.561,130.671 423.57,143.68C436.579,156.689 436.579,177.811 423.57,190.82L225.57,388.82C212.553,401.838 191.447,401.838 178.43,388.82L88.43,298.82Z",unchecked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083Z"},G_=e=>{const t=H_[e]||Ok(`Invalid icon name: ${e}`);return ny(t)?{path:t,width:512,height:512}:t},s0=({path:e,onClick:t,width:n=512,height:r=512,style:l,className:o="",fill:i="currentColor"})=>a("svg",{"aria-hidden":"true",focusable:"false",className:`${o} icon`,style:l,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n} ${r}`,onClick:t,children:a("path",{d:e,fill:i})}),Mc=({name:e,...t})=>e?a(s0,{...t,...G_(e)}):a(s0,{...t}),li=({title:e="Note",children:t})=>u("div",{className:"info alert flex start border small",children:[a(Mc,{name:"info",className:"side-icon"}),u("div",{children:[a("h3",{children:e}),t]})]}),xs=({scope:e,to:t,from:n="color",size:r="smallish"})=>u("table",{className:`${e} ${r} celled striped properties mar-b-8`,children:[a("thead",{children:u("tr",{children:[a("th",{children:"Variable"}),a("th",{children:"Mapped To"})]})}),a("tbody",{children:vi(0,100,5).map(l=>u("tr",{children:[u("td",{className:"font-mono",children:["--",n,"-",l]}),u("td",{className:"font-mono",children:["--",t,"-",l]})]},l))})]}),V_=["red","brown","orange"],Y_=()=>u("div",{className:"prose",children:[a("h1",{children:"Color Utilities"}),a("h2",{children:"Color Classes"}),u("p",{children:["Each of the color ranges defined in your palette has a corresponding class. For example, the ",a("code",{children:"red"})," class can be used to select the red color range.  Some of the colors also have semantic aliases, e.g. ",a("code",{children:"error"})," and ",a("code",{children:"invalid"})," are aliases for"," ",a("code",{children:"red"}),"."]}),u("p",{children:["Selecting a color range doesn't have much of a visible effect by itself.  The important things is that it maps the ",a("code",{children:"--color-N"})," ","CSS custom properties to the equivalent stops from the selected color range.  For example, in the scope of the ",a("code",{children:"red"})," CSS class, the"," ",a("code",{children:"--color-0"})," property is mapped to ",a("code",{children:"--red-0"}),","," ",a("code",{children:"--color-5"})," is mapped to ",a("code",{children:"--red-5"}),","," ",a("code",{children:"--color-10"})," to ",a("code",{children:"--red-10"})," and so on up to 100."]}),u("div",{className:"flex gap-4",children:[V_.map(e=>u("div",{children:[u("h3",{className:"font-mono mar-b-2",children:[".",e," ","{"," ... ","}"]}),a(xs,{scope:e,to:e})]},e)),a("div",{children:a("h3",{className:"font-mono mar-b-2",children:"...etc"})})]}),a("h2",{children:"Foreground, Background and Border Colors"}),u("p",{children:["The ",a("code",{children:"fgc-N"}),", ",a("code",{children:"bgc-N"}),", ",a("code",{children:"hdc-N"})," and"," ",a("code",{children:"bdc-N"})," classes can be used to select a stop from the color range for the foreground color, background color, heading color and border color, respectively."]}),u("p",{children:["For example, the ",a("code",{children:"bgc-80"})," CSS class will set the background color to whatever color is mapped to ",a("code",{children:"--color-80"}),".  In the scope of the ",a("code",{children:"red"})," CSS class, that will be ",a("code",{children:"--red-80"}),"."]}),u("div",{className:"grid-2 gap-8 stack-desktop",children:[a(c0,{classes:[["fgc-N","--color",u(Rn,{children:[a("b",{children:"f"}),"ore",a("b",{children:"g"}),"round ",a("b",{children:"c"}),"olor stop ",a("code",{children:"N"})]})],["bgc-N","--background-color",u(Rn,{children:[a("b",{children:"b"}),"ack",a("b",{children:"g"}),"round ",a("b",{children:"c"}),"olor stop ",a("code",{children:"N"})]})],["hdc-N","--heading-color",u(Rn,{children:[a("b",{children:"h"}),"ea",a("b",{children:"d"}),"ing ",a("b",{children:"c"}),"olor stop ",a("code",{children:"N"})]})],["bdc-N","--border-color",u(Rn,{children:[a("b",{children:"b"}),"or",a("b",{children:"d"}),"er ",a("b",{children:"c"}),"olor stop ",a("code",{children:"N"})]})]]}),a("div",{children:u(li,{children:["The ",a("code",{children:"bdc-N"})," classes are designed to be used in conjunction with the ",a("code",{children:"border"})," class and other classes for setting ",a(Ie,{to:"/utilities/borders",text:"borders"}),".  A"," ",a("code",{children:"bdc-N"})," class will set the color border, but you won't see any effect unless you also add the ",a("code",{children:"border"})," class."]})})]}),a(F,{html:B_,caption:"Color Classes",expand:!0}),a("h2",{children:"Dark Theme"}),u("p",{children:["The ",a("code",{children:"fgd-N"}),", ",a("code",{children:"bgd-N"}),", ",a("code",{children:"hdd-N"})," and"," ",a("code",{children:"bdd-N"})," classes are equivalents of the above for when a dark theme is selected.  You can set foreground, background, heading and border colors for both light and dark themes and they will be switched in automatically."]}),u("div",{className:"grid-2 gap-2 stack-desktop",children:[a(c0,{classes:[["fgd-N","--color",u(Rn,{children:[a("b",{children:"f"}),"ore",a("b",{children:"g"}),"round ",a("b",{children:"d"}),"ark theme color stop ",a("code",{children:"N"})]})],["bgd-N","--background-color",u(Rn,{children:[a("b",{children:"b"}),"ack",a("b",{children:"g"}),"round ",a("b",{children:"d"}),"ark theme color stop ",a("code",{children:"N"})]})],["hdd-N","--heading-color",u(Rn,{children:[a("b",{children:"h"}),"ea",a("b",{children:"d"}),"ing ",a("b",{children:"d"}),"ark theme color stop ",a("code",{children:"N"})]})],["bdd-N","--border-color",u(Rn,{children:[a("b",{children:"b"}),"or",a("b",{children:"d"}),"er ",a("b",{children:"d"}),"ark theme color stop ",a("code",{children:"N"})]})]]}),a("div",{children:u(li,{children:["The same rule applies for ",a("code",{children:"bdd-N"})," as it does for"," ",a("code",{children:"bdc-N"})," - it selects the border color but you still need to add the ",a("code",{children:"border"})," class to make the border visible."]})})]}),a(F,{html:j_,caption:"Dark Theme",expand:!0}),a("h2",{children:"Color Inheritance"}),a("p",{children:"CSS custom properties are inherited by child elements.  This means you can select a color range on an element and all children will inherit that color range."}),a(F,{html:z_,caption:"Color Inheritance",expand:!0}),a("h2",{children:"Easy Component Coloring"}),u("p",{children:["This effect is used by various badger-css components. They use the generic ",a("code",{children:"--color-N"})," properties to define colors and can then be rendered using any color range."]}),a(F,{html:U_,caption:"Color Components"}),a("h2",{children:"Creating Your Own Colored Components"}),u("p",{children:["You can employ this in your own components by using the"," ",a("code",{children:"--color-N"})," CSS custom properties to define your component colours."]}),u("p",{children:["This is particularly useful when implementing components for both light and dark themes.  You only need to specify which ",a("code",{children:"--color-N"})," stops you want to use in each case.  You don't need to write separate CSS rules for each of the colors you might want to use."]}),a(F,{html:W_,caption:"Custom Components"})]}),c0=({classes:e})=>u("table",{className:"brand celled striped mar-b-8",children:[a("thead",{children:u("tr",{children:[a("th",{children:"Class"}),a("th",{children:"Property"}),a("th",{children:"Description"})]})}),a("tbody",{children:e.map(t=>u("tr",{children:[a("td",{children:a("code",{children:t[0]})}),a("td",{children:a("code",{children:t[1]})}),a("td",{children:t[2]})]},t[0]))})]}),q_=Object.freeze(Object.defineProperty({__proto__:null,default:Y_},Symbol.toStringTag,{value:"Module"})),Z_=()=>u("div",{className:"prose",children:[a("h1",{children:"Color Variables"}),a("h2",{children:"SASS Color Variables"}),u("p",{children:["Each stop in a color range has a SASS variable defined, e.g.",a("code",{children:"$red-0"}),", ",a("code",{children:"$red-5"}),","," ",a("code",{children:"$red-10"})," and so on.  You can use these in your SASS components as necessary."]}),a("h2",{children:"CSS Custom Properties"}),u("p",{children:["Each of the colour stops also has a corresponding CSS custom property (a.k.a. CSS variable) defined, e.g.",a("code",{children:"--red-0"}),", ",a("code",{children:"--red-5"}),","," ",a("code",{children:"--red-10"})," and so on.  You can use these in your CSS files, e.g. as ",a("code",{children:"color: var(--red-10)"}),"."]}),u("p",{children:["Each of your brand colors will also have CSS custom properties defined. If you're using the default ",a("code",{children:"brand"})," name then they will be ",a("code",{children:"--brand-0"}),", ",a("code",{children:"--brand-5"}),","," ",a("code",{children:"--brand-10"})," and so on."]}),u("p",{children:["If you have defined a different set of names via"," ",a("code",{children:"$brand-colors"})," then they will have corresponding names.  For example, if you defined the names in your ",a("code",{children:"$brand-colors"})," to be ",a("code",{children:"primary"}),","," ",a("code",{children:"secondary"})," and ",a("code",{children:"tertiary"})," then the custom properties will be ",a("code",{children:"--primary-0"}),","," ",a("code",{children:"--secondary-0"}),", ",a("code",{children:"--tertiary-0"}),", and so on."]}),a("h2",{children:"Color Switching"}),u("p",{children:["CSS custom properties are defined for a generic color, appropriately named ",a("code",{children:"color"}),".  By default they are mapped to grey."]}),a(xs,{scope:"grey",to:"grey"}),u("p",{children:["CSS scopes will be generated for each color range which map the generic colors to the colors from that range.  For example, the"," ",a("code",{children:".red"})," class selector scope will map the colors as shown here."]}),u("h3",{className:"font-mono mar-b-2",children:[".red ","{"," ... ","}"]}),a(xs,{scope:"red",to:"red"}),u("p",{children:["Scopes will also be generated for your brand colors, either using the default ",a("code",{children:"brand"})," name or the custom names you have defined using ",a("code",{children:"$brand-colors"}),"."]}),u("p",{children:["For example, in the ",a("code",{children:".brand"})," scope the colors will be mapped as follows."]}),u("h3",{className:"font-mono mar-b-2",children:[".brand ","{"," ... ","}"]}),a(xs,{scope:"brand",to:"brand"}),u("p",{children:["The benefit of this approach is that it allows you to define UI components using the generic colors ",a("code",{children:"--color-N"}),".  By default they will appear in grey, but adding a CSS class matching the color name will switch in the appropriate color range."]}),a("h2",{children:"CSS Scope Aliases"}),u("p",{children:["A number of additional CSS scopes are defined for some of the colors. For example, the CSS scope created for the ",a("code",{children:"red"})," color range is actually ",a("code",{children:".red, .error, .invalid"}),".  This allows you to add the ",a("code",{children:"red"}),", ",a("code",{children:"error"})," or ",a("code",{children:"invalid"})," CSS class to an element to have the red color range selected."]}),u("p",{children:["This is used by ",a(Ie,{to:"/forms",text:"forms"})," and "," ",a(Ie,{to:"/components/alerts",text:"alerts"}),", for example, to provide semantic names for the colors."]})]}),Q_=Object.freeze(Object.defineProperty({__proto__:null,default:Z_},Symbol.toStringTag,{value:"Module"})),K_=`<div class="alert">
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
</div>`,Bf=({color:e,setColor:t})=>u("select",{name:"color",required:!0,value:e,onChange:n=>t(n.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Color"}),a("option",{value:"",children:"Default"}),rc.map(n=>a("option",{value:n,children:n},n))]}),nT=["smallest","smaller","small","medium","large","larger","largest"],jf=({size:e,setSize:t})=>u("select",{name:"size",required:!0,value:e,onChange:n=>t(n.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),a("option",{value:"",children:"Default"}),nT.map(n=>a("option",{value:n,children:n},n))]}),rT=[0,1,2,3,4,5,6,8,10],zf=({radius:e,setRadius:t})=>u("select",{name:"radius",required:!0,value:e,onChange:n=>t(n.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),a("option",{value:"",children:"Default"}),rT.map(n=>u("option",{value:n,children:["radius: ",n]},n))]}),wi=e=>e.filter(t=>$t(t)&&t).join(" ").replace(/^\s+/,"").replaceAll(/\s+/g," "),aT=(e,t={},...n)=>wi(Object.entries(e).reduce((r,[l,o])=>(o&&r.push(t[l]||l),r),[...n])),lT=(e,t="",...n)=>wi([...ry(t).filter(r=>e[r]),...n]),oT=[1,2,3,4,5],Sy=({shadow:e,setShadow:t})=>u("select",{name:"shadow",required:!0,value:e,onChange:n=>t(n.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),a("option",{value:"",children:"Default"}),oT.map(n=>u("option",{value:n,children:["shadow: ",n]},n))]}),wa=({checked:e,toggle:t,label:n})=>a("div",{className:"field",children:u("label",{className:"checkbox border no-focus wide",children:[a("input",{type:"checkbox",checked:e,onChange:t}),n]})}),iT=[0,1,2,3,4,5,6,8,10],ky=({borderWidth:e,setBorderWidth:t})=>u("select",{name:"borderWidth",required:!0,value:e,onChange:n=>t(n.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),a("option",{value:"",children:"Default"}),iT.map(n=>u("option",{value:n,children:["width: ",n]},n))]}),sT=()=>{const[e,t]=j.useState({body:!0});return u("div",{className:"example grid-2 gap-8 stack-desktop",children:[a(cT,{options:e,setOption:l=>o=>t(i=>({...i,[l]:o})),toggleOption:l=>()=>t(o=>({...o,[l]:!o[l]}))}),u("div",{children:[a("h3",{className:"mar-b-2",children:"Output"}),a("div",{className:"output",children:a(dT,{options:e})})]})]})},cT=({options:e,toggleOption:t,setOption:n})=>{const r=t("headline"),l=t("heading"),o=t("border"),i=t("stripe"),s=n("type"),d=n("size"),f=n("color"),m=n("radius"),b=n("shadow"),S=n("borderWidth"),N=`<div class="${Cy(e)}">
  ...
</div>`;return u("div",{children:[a("h3",{className:"mar-b-2",children:"Options"}),u("div",{className:"grid-5 gap-4 stack-tablet start",children:[a(wa,{checked:e.headline,toggle:r,label:"Headline"}),a(wa,{checked:e.head,toggle:l,label:"Heading"}),a(wa,{checked:e.stripe,toggle:i,label:"Stripe"}),a(wa,{checked:e.border,toggle:o,label:"Border"}),a(ky,{borderWidth:e.borderWidth,setBorderWidth:S})]}),u("div",{className:"grid-5 gap-4 stack-tablet mar-t-4",children:[a(uT,{type:e.type,setType:s}),a(Bf,{color:e.color,setColor:f}),a(jf,{size:e.size,setSize:d}),a(zf,{radius:e.radius,setRadius:m}),a(Sy,{radius:e.shadow,setShadow:b})]}),a("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),a(Pe,{code:N,language:"html",expand:!0})]})},Cy=e=>wi([e.color,e.type,e.size,e.border&&"border",e.stripe&&"stripe",e.radius&&`bdr-${e.radius}`,e.shadow&&`shadow-${e.shadow}`,e.borderWidth&&`bdw-${e.borderWidth}`,"alert"]),dT=({options:e})=>{const t=Cy(e);return u("div",{className:t,children:[e.headline&&a("div",{className:"headline",children:"This is a headline"}),e.heading&&a("h3",{children:"Hello World!"}),u("p",{children:["This is an alert.  This is some ",a("b",{children:"bold text"}),". This is a ",a("a",{href:"/",children:"link"}),"."]}),a("button",{children:"Default Button"}),a("button",{className:"red mar-l-2",children:"Red Button"})]})},uT=({type:e,setType:t})=>u("select",{name:"type",required:!0,value:e,onChange:n=>t(n.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),a("option",{value:"",children:"Default"}),["info","warning","success","error"].map(n=>a("option",{value:n,children:n},n))]}),hT=()=>u("div",{className:"prose",children:[a("h1",{children:"Alerts"}),u("p",{children:["The ",a("code",{children:"alert"})," class can be used to display alerts. Add any of the ",a("code",{children:"info"}),", ",a("code",{children:"success"}),","," ",a("code",{children:"warning"})," or ",a("code",{children:"error"})," classes to set the color."]}),a("h2",{children:"Demo"}),a("p",{children:"Select the options to determine how the alert is displayed. Note that some options are mutually exclusive (e.g. stripe and border)."}),a(sT,{}),a("h2",{children:"Default Alerts"}),a(F,{html:K_,language:"html",caption:"Alerts"}),a("h2",{children:"Alerts With Borders"}),u("p",{children:["Add the ",a("code",{children:"border"})," class to add a border."]}),a(F,{html:X_,language:"html",caption:"Added Borders"}),a("h2",{children:"Alert Headings"}),a("p",{children:"Headings are displayed in a slightly darker color than the body text."}),a(F,{html:J_,language:"html",caption:"Alert Headings"}),a("h2",{children:"Alert Headlines"}),u("p",{children:["Add an element with the ",a("code",{children:"headline"})," class to really make it stand out.  This works well with and without borders.  Throw in a"," ",a(Ie,{to:"/utilities/shadows",text:"shadow"})," if you want to make it really pop."]}),a(F,{html:eT,language:"html",caption:"Alert Headlines"}),a("h2",{children:"Stripe Alerts"}),u("p",{children:["For a more subdued look, try adding the ",a("code",{children:"stripe"})," class."]}),a(F,{html:tT,language:"html",caption:"Stripe Alert"})]}),fT=Object.freeze(Object.defineProperty({__proto__:null,default:hT},Symbol.toStringTag,{value:"Module"})),pT=`<div class="grid-1 gap-4">
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
`,bT=()=>{const[e,t]=j.useState({body:!0});return u("div",{className:"example grid-2 gap-8 stack-desktop",children:[a(wT,{options:e,setOption:l=>o=>t(i=>({...i,[l]:o})),toggleOption:l=>()=>t(o=>({...o,[l]:!o[l]}))}),u("div",{children:[a("h3",{className:"mar-b-2",children:"Output"}),a("div",{className:"output",children:a(xT,{options:e})})]})]})},wT=({options:e,toggleOption:t,setOption:n})=>{const r=t("border"),l=t("shaded"),o=t("lined"),i=n("size"),s=n("color"),d=n("radius"),f=n("shadow"),m=n("borderWidth"),S=`<div class="${_y(e)}">
  ...
</div>`;return u("div",{children:[a("h3",{className:"mar-b-2",children:"Options"}),u("div",{className:"grid-3 gap-4 stack-tablet start",children:[a(wa,{checked:e.lined,toggle:o,label:"Lined"}),a(wa,{checked:e.shaded,toggle:l,label:"Shaded"})]}),u("div",{className:"grid-3 gap-4 stack-tablet start",children:[a(wa,{checked:e.border,toggle:r,label:"Border"}),a(ky,{borderWidth:e.borderWidth,setBorderWidth:m}),a(zf,{radius:e.radius,setRadius:d})]}),u("div",{className:"grid-3 gap-4 stack-tablet",children:[a(Bf,{color:e.color,setColor:s}),a(jf,{size:e.size,setSize:i}),a(Sy,{radius:e.shadow,setShadow:f})]}),a("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),a(Pe,{code:S,language:"html",expand:!0})]})},_y=e=>wi([e.color,e.size,e.lined&&"lined",e.shaded&&"shaded",e.border&&"border",e.radius&&`bdr-${e.radius}`,e.shadow&&`shadow-${e.shadow}`,e.borderWidth&&`bdw-${e.borderWidth}`]),xT=({options:e})=>{const t=_y(e);return u("details",{className:t,children:[a("summary",{children:"This is a demo details widget - click to reveal"}),a("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),a("p",{children:"I really think you're just making a much too big thing out of it."}),a("p",{children:"Making a big thing out of it would've been a good idea."})]})},ST=()=>u("div",{className:"prose",children:[a("h1",{children:"Details"}),u("p",{children:["The ",a("code",{children:"details"})," HTML element can be used to create a disclosure widget."]}),a("h2",{children:"Demo"}),a("p",{children:"Select the options to determine how the details widget is displayed."}),a(bT,{}),a("h2",{children:"Default Style"}),u("p",{children:["The default style will be applied without the need for any special CSS classes.  You can add any of the utility classes (e.g. the size classes like ",a("code",{children:"small"}),", ",a("code",{children:"large"}),", etc.) to change the basic appearance of either the whole widget, the summary, or any of the content elements."]}),a(F,{html:pT,language:"html",caption:"Default Style"}),a("h2",{children:"Border Style"}),u("p",{children:["Add the ",a("code",{children:"border"})," class to add a border.  The usual"," ",a("code",{children:"bdr-N"})," classes can be added to set the border radius"," ","and ",a("code",{children:"bdw-N"})," to set the border width."]}),u("p",{children:["The ",a("code",{children:"bdc-N"})," classes can be used to set the border color stop, and ",a("code",{children:"bdd-N"})," classes for the border color stop in dark mode."]}),a(F,{html:gT,language:"html",caption:"Details With Borders"}),a("h2",{children:"Lined Style"}),u("p",{children:["The ",a("code",{children:"lined"})," class can be added to put an additional border line between the summary header and body content."]}),a(F,{html:mT,language:"html",caption:"Details With Borders"}),a("h2",{children:"Shaded Style"}),u("p",{children:["Add the ",a("code",{children:"shaded"})," class to shade the background colors. You can add any of the color classes to change the color palette."]}),a(F,{html:vT,language:"html",caption:"Shaded Details"}),a("h2",{children:"Custom Styling"}),a("p",{children:"There are a number of CSS variables that you can set to change the styling."}),a(F,{html:yT,language:"html",caption:"Custom Styling"})]}),kT=Object.freeze(Object.defineProperty({__proto__:null,default:ST},Symbol.toStringTag,{value:"Module"})),Fc=({open:e,close:t,className:n,children:r})=>{const l=j.useRef(null);return j.useEffect(()=>{const{current:o}=l;e?o.showModal():o.close()},[e]),u("dialog",{ref:l,className:n,children:[!!t&&a("div",{className:"close",onClick:t,children:a(Mc,{name:"cross"})}),r]})},CT=()=>{const[e,t]=j.useState(!1);return u("div",{className:"output",children:[a("button",{onClick:()=>t(!0),className:"blue",children:"Show Dialog"}),u(Fc,{open:e,close:()=>t(!1),children:[a("h1",{children:"Hello World!"}),a("p",{children:"This is a dialog."})]})]})},_T=()=>{const[e,t]=j.useState(!1);return u("div",{className:"output",children:[a("button",{onClick:()=>t(!0),className:"blue",children:"Show Tall Dialog"}),u(Fc,{open:e,close:()=>t(!1),children:[a("h1",{children:"Tall Dialog"}),u("div",{className:"mobile block-center",children:[a("p",{children:"David. David. David. Wait, please, wait a minute. Have you any idea what it will costs to dress up the band as animals? Oh, it don't cost nothing. It really doesn't. They're not animals, they're signs of the zodiac. They're animals. It's a way to fight the drabs. You know we've got the drabs. Well that's true. I think mine would look good - better in dubly. If it was done in dubly."}),a("p",{children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion. Well let's hear yours. Let's hear your suggestion. Stonehenge! Stonehenge. It's the best production value we've ever had on stage. But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't... Not yet we don't. Let's start... Please, please just a moment. Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this... I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore. I know, so we build a new one. And this is it, look! Consider... consider it done. So you're just going to take care of it like that. You're going to find someone to design it... using that as a plan? Let's try. Let's try. If you can do it, I'll do the number."}),a("p",{children:`This looks actually perfect. I mean it's, uh, the right proportions. It'll be this color right? Yeah. That's... that's... that's just terrific. It almost looks like the real thing. When we get the actual, uh, set, when we get the piece, it'll... it'll follow exactly these specifications. I mean even these contours and everything? Um, I'm not understanding it. What do you mean "the actual piece?" Well I mean... I mean when you build the actual piece... But this is what you asked for, isn't it? What? Well this is the piece. This is the piece? Yes. Are you telling me that this is it? This is scenery? Have you ever been to Stonehenge? No, I haven't been to Stonehenge. The triptychs are... the triptychs are twenty feet high. You can stand four men up them! Ian, I was... I was... I was supposed to build it eighteen inches high. This is insane. This isn't a piece of scenery. Look, look. Look, this is what I was asked to build. Eighteen inches. Right here, it specified eighteen inches. I was given this napkin, I mean... Forget this! Fuck the napkin!!!`}),a("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object. I really think you're just making a much too big thing out of it. Making a big thing out of it would've been a good idea. Nigel gave me a drawing that said eighteen inches. Alright? I know he did, and that's what I'm talking about. Now, whether he knows the difference between feet and inches is not my problem. I do what I'm told. But you're not as confused as him are you? I mean it's not your job to be as confused as Nigel is."}),a("p",{children:"It's my job to do what I'm asked to do by the creative element of this band. And that's what I did. C'mon... The audience were laughing. So it became a comedy number. Yes it did! Yes it fucking well did, and it was not pleasant to be part of the comedy on stage. Backstage, perhaps, it was very amusing."}),a("p",{children:"Maybe we just fix the choreography. Keep the dwarf clear. What do you mean? So they won't trod upon it."})]})]})]})},TT=()=>{const[e,t]=j.useState(!1);return u("div",{className:"output",children:[a("button",{onClick:()=>t(!0),className:"blue",children:"Show Wide Dialog"}),u(Fc,{open:e,close:()=>t(!1),children:[a("h1",{children:"Wide Dialog"}),a("p",{children:"David. David. David. Wait, please, wait a minute. Have you any idea what it will costs to dress up the band as animals? Oh, it don't cost nothing. It really doesn't. They're not animals, they're signs of the zodiac. They're animals. It's a way to fight the drabs. You know we've got the drabs. Well that's true. I think mine would look good - better in dubly. If it was done in dubly."}),a("p",{children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion. Well let's hear yours. Let's hear your suggestion. Stonehenge! Stonehenge. It's the best production value we've ever had on stage. But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't... Not yet we don't. Let's start... Please, please just a moment. Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this... I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore. I know, so we build a new one. And this is it, look! Consider... consider it done. So you're just going to take care of it like that. You're going to find someone to design it... using that as a plan? Let's try. Let's try. If you can do it, I'll do the number."}),a("p",{children:`This looks actually perfect. I mean it's, uh, the right proportions. It'll be this color right? Yeah. That's... that's... that's just terrific. It almost looks like the real thing. When we get the actual, uh, set, when we get the piece, it'll... it'll follow exactly these specifications. I mean even these contours and everything? Um, I'm not understanding it. What do you mean "the actual piece?" Well I mean... I mean when you build the actual piece... But this is what you asked for, isn't it? What? Well this is the piece. This is the piece? Yes. Are you telling me that this is it? This is scenery? Have you ever been to Stonehenge? No, I haven't been to Stonehenge. The triptychs are... the triptychs are twenty feet high. You can stand four men up them! Ian, I was... I was... I was supposed to build it eighteen inches high. This is insane. This isn't a piece of scenery. Look, look. Look, this is what I was asked to build. Eighteen inches. Right here, it specified eighteen inches. I was given this napkin, I mean... Forget this! Fuck the napkin!!!`}),a("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object. I really think you're just making a much too big thing out of it. Making a big thing out of it would've been a good idea. Nigel gave me a drawing that said eighteen inches. Alright? I know he did, and that's what I'm talking about. Now, whether he knows the difference between feet and inches is not my problem. I do what I'm told. But you're not as confused as him are you? I mean it's not your job to be as confused as Nigel is."}),a("p",{children:"It's my job to do what I'm asked to do by the creative element of this band. And that's what I did. C'mon... The audience were laughing. So it became a comedy number. Yes it did! Yes it fucking well did, and it was not pleasant to be part of the comedy on stage. Backstage, perhaps, it was very amusing."}),a("p",{children:"Maybe we just fix the choreography. Keep the dwarf clear. What do you mean? So they won't trod upon it."})]})]})},$T=()=>{const[e,t]=j.useState(!1),n=()=>t(!1);return u("div",{className:"output",children:[a("button",{onClick:()=>t(!0),className:"blue",children:"Show Dialog Article"}),a(Fc,{open:e,children:u("article",{children:[a("header",{children:a("h3",{children:"User Login"})}),u("form",{className:"width-20rem",children:[u("div",{className:"field wide",children:[a("label",{children:"Email Address"}),a("input",{name:"email",className:"wide"})]}),u("div",{className:"field mar-b-8",children:[a("label",{children:"Password"}),a("input",{name:"password",type:"password",className:"wide"})]})]}),u("footer",{className:"text-right",children:[a("button",{className:"grey outline",onClick:n,children:"Cancel"}),a("button",{className:"blue mar-l-4",onClick:n,children:"Login"})]})]})})]})},ET=`<dialog open>
  <div className="close" onClick={yourCloseHandler}>
    <Icon name="cross"/>
  </div>
  <h1>Hello World!</h1>
  <p>
    This is a dialog.
  </p>
</dialog>`,NT=`<dialog open>
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
`,IT=()=>u("div",{className:"prose",children:[a("h1",{children:"Dialog"}),u("p",{children:["Some default styling is provided for the ",a("code",{children:"dialog"})," element which can be used to display modals."]}),u("p",{children:["A immediate child element with the ",a("code",{children:"close"})," CSS class can be used to create a close button."]}),u(nt,{children:[a(Pe,{code:ET,caption:"Dialog",language:"html",className:"mar-b-8",expand:!0}),a(CT,{})]}),u("p",{children:["The ",a("code",{children:"$dialog-max-width"})," SASS variable defaults to"," ",a("code",{children:"80vw"})," and is set as the ",a("code",{children:"--max-width"})," CSS variable in the scope of a ",a("code",{children:"dialog"})," element. Similarly the ",a("code",{children:"$dialog-max-height"})," SASS variable defaults to"," ",a("code",{children:"90vh"})," and is set as the ",a("code",{children:"--max-height"})," CSS variable."]}),a("p",{children:"In general, you can constrain the width of the content and the dialog which size appropriately."}),u(nt,{children:[a(TT,{}),a(_T,{})]}),a("h2",{children:"Header and Footer"}),u("p",{children:["You can add ",a("code",{children:"header"})," and ",a("code",{children:"footer"})," elements to a dialog.  To be semantically correct, you should enclose them in an"," ",a("code",{children:"article"})," element."]}),u(nt,{children:[a(Pe,{code:NT,caption:"Header and Footer",language:"html",className:"mar-b-8",expand:!0}),a($T,{})]})]}),LT=Object.freeze(Object.defineProperty({__proto__:null,default:IT},Symbol.toStringTag,{value:"Module"})),RT=`<div class="dropdown">
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
</div>`,PT=`<div class="brand dropdown">
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
</div>`,MT=`<div class="text-right">
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
</div>`,FT=()=>u("div",{className:"prose",children:[a("h1",{children:"Dropdown"}),u("p",{children:["Use the ",a("code",{children:"dropdown"})," class to create dropdown content. The trigger should either have the ",a("code",{children:"trigger"})," CSS class or (more correctly) have the ",a("code",{children:"aria-haspopup"})," attribute set.  The content should have the ",a("code",{children:"content"})," class."]}),a(F,{html:RT,language:"html",caption:"Dropdown Content"}),u("p",{children:["For dropdown menus you can add the ",a("code",{children:"content"})," class to"," ","a ",a("code",{children:"ul"})," list.  Add the ",a("code",{children:"separator"})," class to a ",a("code",{children:"li"})," element to create a separator."]}),a(F,{html:PT,language:"html",caption:"Dropdown Menu"}),u("p",{children:["The ",a("code",{children:"right"})," class will right-align the dropdown content. You can add the ",a("code",{children:"caption"})," class to a ",a("code",{children:"li"})," element to prevent it from being displayed as a hoverable menu item."]}),a(F,{html:MT,language:"html",caption:"Right Menu"})]}),AT=Object.freeze(Object.defineProperty({__proto__:null,default:FT},Symbol.toStringTag,{value:"Module"})),OT=`<svg
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
`,UT=()=>u("div",{className:"prose",children:[a("h1",{children:"Icons"}),u("p",{children:["Some basic styles are included for SVG icons. Add the ",a("code",{children:"icon"})," ","class to an inline SVG image to use them."]}),a(F,{html:OT,language:"html",caption:"Icon"}),a("p",{children:"Icons are sized in em units meaning they scale with text in different sizes."}),a(F,{html:DT,language:"html",caption:"Icon Sizes"}),u("p",{children:["SVG icons can use ",a("code",{children:"currentColor"})," for either the"," ",a("code",{children:"fill"})," or ",a("code",{children:"stroke"})," properties to inherit the current text color."]}),a(F,{html:BT,language:"html",caption:"Icon Colors"}),u("div",{className:"grid-2 gap-8 stack-desktop",children:[u("div",{children:[u("p",{children:["SVG elements can use the ",a("code",{children:"fill-fg"})," and ",a("code",{children:"fill-bg"})," ","classes to set the fill color to the current foreground or background colors respectively.  Similarly the ",a("code",{children:"stroke-fg"})," and"," ",a("code",{children:"stroke-bg"})," will set the stroke color to the foreground or"," ","background color."]}),u("p",{children:["These CSS rules are scoped to all ",a("code",{children:"svg"})," elements rather",a("code",{children:"svg.icon"})," specifically.  So you can use them in any SVG images, not just icons."]})]}),a("div",{children:u(li,{children:["CSS styles can only be applied to inline SVG elements.  They don't work for SVG images loaded using the ",a("code",{children:"img"})," ","tag or applied using a ",a("code",{children:"background-image"})," style."]})})]}),a(F,{html:jT,language:"html",caption:"Icon Style"}),u("p",{children:["You can define your own styles to target different elements in an SVG icon.  This example illustrated the use of generic"," ",a("code",{children:"--color-N"})," variables to set the fill and stroke styles on elements in an icon.  The only thing that's determining the color range is the ",a("code",{children:"blue"})," class on the ",a("code",{children:"svg"})," ","element.  Change that to the name of any other color range and the styles will work equally well."]}),u("p",{children:["Also note the use of the"," ",a("code",{children:"--unfilled"})," custom property which sets the background color for the unchecked checkbox.  This allows us to set different color stops for use in light and dark themes."]}),a(F,{html:zT,language:"html",caption:"Icon Style"})]}),WT=Object.freeze(Object.defineProperty({__proto__:null,default:UT},Symbol.toStringTag,{value:"Module"})),HT=()=>{const[e,t]=j.useState({head1:!0,body:!0,foot1:!0});return u("div",{className:"example grid-2 gap-8 stack-desktop",children:[a(GT,{options:e,setOption:l=>o=>t(i=>({...i,[l]:o})),toggleOption:l=>()=>t(o=>({...o,[l]:!o[l]}))}),u("div",{children:[a("h3",{className:"mar-b-2",children:"Output"}),a("div",{className:"output",children:a(VT,{options:e})})]})]})},GT=({options:e,toggleOption:t,setOption:n})=>{const r=t("head1"),l=t("head2"),o=t("body"),i=t("foot1"),s=t("foot2"),d=t("wide"),f=t("celled"),m=t("shaded"),b=t("lined"),S=t("striped"),I=n("size"),N=n("color"),k=n("radius"),w=`<table class="${lT(e,"wide celled shaded lined striped",e.color,e.size,e.radius&&`bdr-${e.radius}`)}">
  ...
</table>`;return u("div",{children:[a("h3",{className:"mar-b-2",children:"Options"}),u("div",{className:"grid-5 gap-4 stack-tablet",children:[a(Un,{checked:e.wide,toggle:d,label:"Wide"}),a(Un,{checked:e.celled,toggle:f,label:"Celled"}),a(Un,{checked:e.shaded,toggle:m,label:"Shaded"}),a(Un,{checked:e.lined,toggle:b,label:"Lined"}),a(Un,{checked:e.striped,toggle:S,label:"Striped"})]}),u("div",{className:"grid-5 gap-4 stack-tablet mar-t-4",children:[a(Un,{checked:e.head1,toggle:r,label:"Header"}),a(Un,{checked:e.body,toggle:o,label:"Body"}),a(Un,{checked:e.foot1,toggle:i,label:"Footer"}),a(Un,{checked:e.head2,toggle:l,label:"Pre-header"}),a(Un,{checked:e.foot2,toggle:s,label:"Post-footer"})]}),u("div",{className:"grid-5 gap-4 stack-tablet mar-t-4",children:[a(Bf,{color:e.color,setColor:N}),a(jf,{size:e.size,setSize:I}),a(zf,{radius:e.radius,setRadius:k})]}),a("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),a(Pe,{code:w,language:"html",expand:!0})]})},Un=({checked:e,toggle:t,label:n})=>a("div",{className:"field",children:u("label",{className:"checkbox border no-focus wide",children:[a("input",{type:"checkbox",checked:e,onChange:t}),n]})}),VT=({options:e})=>{const t=aT(e,{},e.color,e.size,e.radius&&`bdr-${e.radius}`);return u("table",{className:t,children:[(e.head1||e.head2)&&u("thead",{children:[e.head2&&a("tr",{children:a("th",{colSpan:"3",className:"text-center",children:"Spinal Tap"})}),e.head1&&u("tr",{children:[a("th",{children:"Name"}),a("th",{children:"Instrument"}),a("th",{children:"Danger Level"})]})]}),e.body&&u("tbody",{children:[u("tr",{children:[a("td",{children:"Nigel"}),a("td",{children:"Tufnel"}),a("td",{children:"Guitar"})]}),u("tr",{children:[a("td",{children:"David"}),a("td",{children:"St.Hubbins"}),a("td",{children:"Guitar"})]}),u("tr",{children:[a("td",{children:"Derek"}),a("td",{children:"Smalls"}),a("td",{children:"Bass"})]}),u("tr",{children:[a("td",{children:"Viv"}),a("td",{children:"Savage"}),a("td",{children:"Keyboards"})]}),u("tr",{children:[a("td",{children:"Mick"}),a("td",{children:"Shrimpton"}),a("td",{children:"Drums"})]})]}),(e.foot1||e.foot2)&&u("tfoot",{children:[e.foot1&&u("tr",{children:[a("th",{colSpan:"2",className:"text-right",children:"Total"}),a("th",{children:"5"})]}),e.foot2&&a("tr",{children:a("th",{colSpan:"3",className:"text-center",children:"Tap into America!"})})]})]})},YT=`<table>
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
</table>`,qT=`<table class="celled">
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
</table>`,ZT=`<table class="shaded">
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
</table>`,e$=`<div class="flex start gap-4">
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
</div>`,t$=()=>u("div",{className:"prose",children:[a("h1",{children:"Tables"}),a("p",{children:"Badger CSS contains some basic table styling by default and a number of additional classes you can add to snazz things up."}),a("h2",{children:"Demo"}),a("p",{children:"Select the options to determine how the table is displayed."}),a(HT,{}),a("h2",{children:"Default Table"}),a(F,{html:YT,language:"html",caption:"Table"}),a("h2",{children:"Celled Table"}),a(F,{html:qT,language:"html",caption:"Celled Table"}),a("h2",{children:"Shaded Table"}),a(F,{html:ZT,language:"html",caption:"Shaded Table"}),a("h2",{children:"Lined Table"}),a(F,{html:QT,language:"html",caption:"Lined Table"}),a("h2",{children:"Striped Table"}),a(F,{html:KT,language:"html",caption:"Striped Table"}),a("h2",{children:"Colored Table"}),a(F,{html:XT,language:"html",caption:"Colored Table"}),a("h2",{children:"Colored Rows"}),a(F,{html:JT,language:"html",caption:"Colored Rows"}),a("h2",{children:"Customised Table"}),a(F,{html:e$,language:"html",caption:"Rounded Table"})]}),n$=Object.freeze(Object.defineProperty({__proto__:null,default:t$},Symbol.toStringTag,{value:"Module"})),r$=`<button
  data-tooltip
  aria-label="This is a tooltip"
>
    Hover to see tooltip
</button>
`,a$=`<div class="flex space">
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
`,l$=`<div class="flex space">
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
</div>`,o$=`<button
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
`,i$=`<button data-tooltip>
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
`,s$=`<style>
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
</div>`,c$=()=>u("div",{className:"prose",children:[a("h1",{children:"Tooltips"}),u("p",{children:["Add the ",a("code",{children:"data-tooltip"})," attribute to an element to enable a tooltip.  The tooltip text should be defined in the ",a("code",{children:"aria-label"})," ","property so that it's also accessible to screen readers."]}),a(F,{html:r$,language:"html",caption:"Tooltip"}),a("h2",{children:"Tooltip Position"}),u("p",{children:["You can set the ",a("code",{children:"data-tooltip"})," attribute to any of"," ",a("code",{children:"left"}),", ",a("code",{children:"right"}),", ",a("code",{children:"top"})," or"," ",a("code",{children:"bottom"})," to set the tooltip position."]}),a(F,{html:a$,language:"html",caption:"Tooltip Position"}),u("p",{children:["You can also combine them as "," ",a("code",{children:"top left"}),", ",a("code",{children:"top right"}),", ",a("code",{children:"bottom left"})," ","and ",a("code",{children:"bottom right"}),"."]}),a(F,{html:l$,language:"html",caption:"Tooltip Corners"}),a("h2",{children:"Wrapping"}),u("p",{children:["The tooltip has a minimum and maximum width set to keep things sensible. You can add the ",a("code",{children:"tt-wide"})," class if you want the tooltip to extend to the full width of the tooltip text."]}),u("p",{children:["You can add newlines to the ",a("code",{children:"aria-label"})," property if you want to force line breaks."]}),a(F,{html:o$,language:"html",caption:"Tooltip Wrapping"}),a("h2",{children:"Content"}),u("p",{children:["As an alternative to setting the ",a("code",{children:"aria-label"})," you can define the tooltip content in a child element with the"," ",a("code",{children:"tooltip"})," CSS class."]}),a(F,{html:i$,language:"html",caption:"Tooltip Content"}),a("h2",{children:"Custom Tooltip Style"}),a("p",{children:"There are a number of SCSS variables that can be used to set the defaults, or you can use CSS variables to create custom tooltip styles."}),a(F,{html:s$,language:"html",caption:"Custom Tooltips"})]}),d$=Object.freeze(Object.defineProperty({__proto__:null,default:c$},Symbol.toStringTag,{value:"Module"})),da=(e="rem",t=.25)=>[0,1,2,3,4,6,8,10,12,16,20,24,28,32].reduce((n,r)=>({...n,[r]:{vars:{unit:`${r} unit${r==1?"":"s"} (${r*t}${e})`}}}),{}),d0=e=>({t:{vars:{sides:"the top"},more:da(e)},r:{vars:{sides:"the right"},more:da(e)},b:{vars:{sides:"the right"},more:da(e)},l:{vars:{sides:"the left"},more:da(e)},v:{vars:{sides:"the top and bottom (v = vertical)"},more:da(e)},h:{vars:{sides:"the left and right (h = horizontal)"},more:da(e)},...da(e)}),u0=e=>[2,4,6,8,10,12,14,16,18,20,30,40,50,60,70,90,100].reduce((t,n)=>({...t,[`${n}rem`]:{description:()=>e(n)}}),{}),h0=e=>[2,4,6,8,10,12,14,16,18,20,30,40,50,60,70,90,100].reduce((t,n)=>({...t,[`${n*16}px`]:{description:()=>e(n*16)}}),{}),u$={mar:{vars:{unit:"1 unit (0.25rem)",sides:"all sides"},description:e=>`Add ${e.unit} margin to ${e.sides}`,more:d0("rem")},pad:{vars:{unit:"1 unit (0.25em)",sides:"all sides"},description:e=>`Add ${e.unit} margin to ${e.sides}`,more:d0("em")},width:{more:{...u0(e=>`Set width to ${e}rem (${e*16}px)`),...h0(e=>`Set width to ${e}px`)}},max:{more:{width:{more:{...u0(e=>`Set max-width to ${e}rem (${e*16}px)`),...h0(e=>`Set max-width to ${e}px`)}}}},text:{more:{left:{description:()=>"Align text to the left"},right:{description:()=>"Align text to the right"},center:{description:()=>"Align text to the center"}}},block:{more:{left:{description:()=>"Align block to the left"},right:{description:()=>"Align block to the right"},center:{description:()=>"Align block to the center"}}},display:{more:{inline:{description:()=>"Display element inline"},block:{description:()=>"Display element as a block"},"inline-block":{description:()=>"Display element as an inline block"}}},font:{more:{sans:{description:()=>"Use a sans-serif font"},serif:{description:()=>"Use a serif font"},system:{description:()=>"Use the system font"},mono:{description:()=>"Use a monospaced font"}}}},h$=e=>{const t=e.split("-");let n=[],r=[],l=[],o={},i=u$,s;for(;t.length;){const d=t.shift(),f=i[d];if(f)console.log(`matched ${d}`),s=f.description||s,f.vars&&(o={...o,...f.vars}),n.push(d),i=f.more||{},l=Object.keys(i);else{r.push(d);break}}return{good:n,rest:r,vars:o,next:l,description:s?s(o):null}},f$=e=>ry(e).filter(t=>!t.match(/^\s*$/)).map(h$),p$=()=>{const[e,t]=j.useState("");return u("div",{children:[a("h1",{children:"Class Decoder"}),a("p",{children:"Enter one or more Badger-CSS classes for an explanation."}),u("form",{className:"max-width-30rem",children:[u("div",{className:"field",children:[a("label",{children:"CSS Classes"}),a("input",{type:"text",className:"wide",value:e,onChange:n=>t(n.target.value)})]}),a("button",{type:"button",className:"reset grey button outline",onClick:()=>t(""),children:"Reset"})]}),a("div",{children:!!e.length&&a(g$,{input:e})})]})},g$=({input:e})=>{const t=f$(e);return console.log("results: ",t),a("table",{className:"celled border bdr-2 mar-t-4",children:a("tbody",{children:t.map((n,r)=>u("tr",{children:[u("td",{className:"font-mono bgc-95 bgd-10 split-4",children:[a("span",{className:"green fgc-50",children:n.good.join("-")}),!!n.rest.length&&u("span",{className:"red fgc-50",children:[!!n.good.length&&"-",n.rest.join("-")]})]}),a("td",{className:"bgc-100 bgd-5",children:n.description}),a("td",{className:"bgc-100 bgd-5 font-mono small",children:!!n.next.length&&n.next.map(l=>`-${l} `)})]},r))})})},m$=Object.freeze(Object.defineProperty({__proto__:null,default:p$},Symbol.toStringTag,{value:"Module"})),Aa=({color:e,selected:t,select:n,iconColor:r="white",className:l="",alt:o=a(Rn,{children:" "})})=>a("button",{className:`${l} ${e} icon ${t?"focus":""}`,onClick:n,children:t?a(Mc,{name:"check",className:r}):o}),v$=({range:e,setRange:t})=>u("div",{children:[u("div",{className:"flex space mar-b-0",children:[a("h3",{children:"Color Range"}),a("h4",{children:$t(e)&&a("code",{children:e||""})})]}),u("div",{className:"grid-fit gap-2",style:{"--min-width":"2em"},children:[a(f0,{colors:v_,range:e,setRange:t}),a("div",{children:" "}),a(Aa,{color:"brand",selected:e==="brand",select:()=>t("brand")}),a(f0,{colors:y_,range:e,setRange:t})]})]}),f0=({range:e,setRange:t,colors:n})=>n.map(r=>a(Aa,{color:r,select:()=>t(r),selected:e==r},r)),ns=({stop:e,setStop:t,className:n,title:r,prefix:l})=>u("div",{children:[u("div",{className:"flex space mar-b-0",children:[a("h3",{children:r}),a("h4",{children:$t(e)&&u("code",{children:[l,"-",e]})})]}),a("div",{className:`${n} grid-fit gap-2`,style:{"--min-width":"2em"},children:vi(0,100,5).map(o=>a(Aa,{color:`bgc-${o} bdc-${o} fgc-${o>50?"0":"100"} bgd-${o} bdd-${o} fgd-${o>50?"0":"100"}`,iconColor:o>50?"black":"white",selected:e===o,select:()=>t(o)},o))})]}),y$=[0,1,2,3,4,6,8,10,12,16,20,24,28,32],p0=({spacing:e,setSpacing:t,className:n,title:r,prefix:l,range:o})=>u("div",{children:[u("div",{className:"flex space mar-b-0",children:[a("h3",{children:r}),a("h4",{children:$t(e)&&u("code",{children:[l,"-",e]})})]}),a("div",{className:`${n} grid-fit gap-2`,style:{"--min-width":"2em"},children:y$.map(i=>a(Aa,{color:o,className:"wide",alt:a("span",{className:"font-mono",children:i}),selected:e===i,select:()=>t(i)},i))})]}),b$=["smallest","smaller","small","medium","large","larger","largest"],w$=({size:e,setSize:t,title:n="Size",range:r})=>u("div",{children:[u("div",{className:"flex space mar-b-0",children:[a("h3",{children:n}),a("h4",{children:$t(e)&&a("code",{children:e})})]}),a("div",{className:"grid-fit gap-2",style:{"--min-width":"2em"},children:b$.map(l=>a(Aa,{color:r,className:"wide",alt:a("span",{className:"font-mono",children:l}),selected:e===l,select:()=>t(l)},l))})]}),x$=[0,1,2,3,4,5,6,8,10],g0=({border:e,setBorder:t,className:n,title:r,prefix:l,range:o})=>u("div",{children:[u("div",{className:"flex space mar-b-0",children:[a("h3",{children:r}),a("h4",{children:$t(e)&&u("code",{children:[l,"-",e]})})]}),a("div",{className:`${n} grid-fit gap-2`,style:{"--min-width":"2em"},children:x$.map(i=>a(Aa,{color:o,className:"wide",alt:a("span",{className:"font-mono",children:i}),selected:e===i,select:()=>t(i)},i))})]}),S$=({checked:e,toggle:t,label:n})=>a("div",{className:"field",children:u("label",{className:"checkbox border no-focus wide",children:[a("input",{type:"checkbox",checked:e,onChange:t}),n]})}),k$=({shadow:e,setShadow:t,className:n,title:r="Shadow",prefix:l="shadow",range:o})=>u("div",{children:[u("div",{className:"flex space mar-b-0",children:[a("h3",{children:r}),a("h4",{children:$t(e)&&u("code",{children:[l,"-",e]})})]}),a("div",{className:`${n} grid-fit gap-2`,style:{"--min-width":"2em"},children:vi(0,5).map(i=>a(Aa,{color:o,className:"wide",alt:a("span",{className:"font-mono",children:i}),selected:e===i,select:()=>t(i)},i))})]}),C$=({options:e,setOption:t,toggleOption:n})=>u("div",{className:"surface-5 pad-4",children:[u("div",{className:"flex space baseline stack-desktop mar-b-2",children:[a("h2",{className:"mar-v-none",children:"Controls"}),a("h3",{className:"text-right mar-v-none",children:a("code",{children:'class="..."'})})]}),u("div",{className:"grid gap-2 small",children:[a(v$,{range:e.range,setRange:t("range")}),a(ns,{title:"Background Color Stop",prefix:"bgc",className:e.range,stop:e.bgc,setStop:t("bgc")}),a(ns,{title:"Foreground Color Stop",prefix:"fgc",className:e.range,stop:e.fgc,setStop:t("fgc")}),a(ns,{title:"Heading Color Stop",prefix:"hdc",className:e.range,stop:e.hdc,setStop:t("hdc")}),a(ns,{title:"Border Color Stop",prefix:"bdc",className:e.range,stop:e.bdc,setStop:t("bdc")}),a(g0,{title:"Border Width",prefix:"bdw",border:e.bdw,setBorder:t("bdw"),range:e.range}),a(g0,{title:"Border Radius",prefix:"bdr",border:e.bdr,setBorder:t("bdr"),range:e.range}),a(w$,{title:"Size",size:e.size,setSize:t("size"),range:e.range}),a(p0,{title:"Margin",prefix:"mar",className:e.mar,spacing:e.mar,setSpacing:t("mar"),range:e.range}),a(p0,{title:"Padding",prefix:"pad",className:e.pad,spacing:e.pad,setSpacing:t("pad"),range:e.range}),a(k$,{title:"Shadow",prefix:"shadow",shadow:e.shadow,setShadow:t("shadow"),range:e.range}),u("div",{children:[a("h3",{className:"mar-b-2",children:"Options"}),a("div",{className:"grid-fill",style:{"--min-width":"10rem"},children:a(S$,{label:"Show Border",checked:e.border,toggle:n("border")})})]})]})]}),_$=({options:e})=>{const t=T$(e);return u("div",{className:"surface-5 pad-4",children:[u("div",{className:"flex space baseline stack-desktop mar-b-2",children:[a("h2",{className:"mar-v-none",children:"Output"}),a("div",{className:"text-right",children:u("code",{children:['class="',t,'"']})})]}),a("div",{className:"border surface-4",style:{borderStyle:"dotted"},children:u("div",{className:t,children:[a("h3",{className:"mar-b-2",children:"It's One Louder"}),"You see, most... most blokes, you know, will be playing at ten. You're on ten here... all the way up... all the way up... all the way up. You're on ten on your guitar...where can you go from there? Where? Nowhere. Exactly. What we do is if we need that extra... push over the cliff... you know what we do? Put it up to eleven. Eleven. Exactly. One louder."]})})]})},T$=e=>wi([e.range,$t(e.bgc)?`bgc-${e.bgc}`:"",$t(e.fgc)?`fgc-${e.fgc}`:"",$t(e.hdc)?`hdc-${e.hdc}`:"",$t(e.bdc)?`bdc-${e.bdc}`:"",$t(e.bdw)?`bdw-${e.bdw}`:"",$t(e.bdr)?`bdr-${e.bdr}`:"",e.size,$t(e.mar)?`mar-${e.mar}`:"",$t(e.pad)?`pad-${e.pad}`:"",$t(e.shadow)?`shadow-${e.shadow}`:"",e.border?"border":""]),$$=()=>{const[e,t]=j.useState({range:"brand",bgc:90,fgc:30,hdc:20,bdc:60,bdr:3,bdw:2,pad:4,mar:6,shadow:2,border:!0});return u("div",{className:"grid gap-8",children:[a(_$,{options:e}),a(C$,{options:e,setOption:l=>o=>t(i=>({...i,[l]:o})),toggleOption:l=>()=>t(o=>({...o,[l]:!o[l]}))})]})},E$=()=>u("div",{children:[a("h1",{children:"Demo"}),u("div",{className:"grid-2 gap-h-8 stack-desktop",children:[u("div",{children:[u("p",{children:["One of the novel approaches that Badger CSS employs is to provide CSS classes for each of the colors in the palette.  There are then further CSS classes that can be used to select the particular shade (or color"," ",'"stop") from that range to use for the background, foreground, heading and border colors.']}),u("p",{children:["One benefit of this approach is that it allows you to design color agnostic components that work with both light and dark themes, and can then be used with any color range.  For some examples, see the"," ",a(Ie,{to:"/components/alerts",text:"Alerts"})," and "," ",a(Ie,{to:"/components/tables",text:"Tables"})," pages"]}),a("p",{children:"Another more practical benefit is that it avoid the combinatorial explosion of CSS classes required to cover every combination of color range and stop for foreground, background, heading and border colors."})]}),u("div",{children:[a("p",{children:"Further utility classes are provided for selecting font size, border width and radius, margins, padding, shadows and various layout options. They're similar to what you'll find in other CSS toolkits."}),a("p",{children:"The choice about what is included and what isn't is entirely arbitrary but I lean towards minimalism and have only included the kind of utility classes that I use in most, if not all web sites. It's really easy for you to add in your own utility classes, or change the settings for the provided utilities, if you want to."}),a("p",{children:"So without further ado, click on the buttons below to select different colors and layout options.  Each one selects a CSS class which affects the way the output is displayed."})]})]}),a($$,{})]}),N$=Object.freeze(Object.defineProperty({__proto__:null,default:E$},Symbol.toStringTag,{value:"Module"})),I$=`<div class="grid-fit gap-2">
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
`,L$=`<div class="grid-fit gap-2">
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
`,R$=`<div class="grid-fit gap-2">
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
`,P$=`<div class="grid-fit gap-2">
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
`,M$=`<div class="grid-fit gap-2">
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
`,F$=`<div class="grid-fit gap-2">
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
`,A$=`<div class="grid-fit gap-2">
  <span class="button">Default</span>
  <span class="red shaded button">Red Shaded</span>
  <span class="orange outline button">Orange Outline</span>
</div>
`,O$=`<div class="flex start gap-4">
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
</div>`,D$=`<div class="flex start gap-4">
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
</div>`,B$=`<div class="buttons">
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
`,j$=()=>u("div",{className:"prose",children:[a("h1",{children:"Buttons"}),u("p",{children:["For the sake of accessibility, buttons should usually be rendered using the ",a("code",{children:"button"})," element.  I mean, that's what it's there for, right?  For those cases when you really need to make a link or something else look like a button you can add the"," ",a("code",{children:"button"})," class."]}),u("p",{children:["The default button color is grey. Any one of the color classes (e.g. ",a("code",{children:"red"}),", ",a("code",{children:"green"}),", etc) can be added to get different colors."]}),a("p",{children:"Button color stops automatically adapt between light and dark modes."}),a("h2",{children:"Default Style"}),a("p",{children:"The default button style is solid."}),a(F,{html:I$,language:"html",caption:"Buttons"}),a("h2",{children:"Bright Colors"}),u("p",{children:["Add the ",a("code",{children:"bright"})," CSS class to make the buttons brighter."]}),a(F,{html:L$,language:"html",caption:"Bright Buttons"}),a("h2",{children:"Dark Colors"}),u("p",{children:["Add the ",a("code",{children:"dark"})," CSS class to make the buttons darker."]}),a(F,{html:R$,language:"html",caption:"Dark Buttons"}),a("h2",{children:"Outline Style"}),u("p",{children:["Add the ",a("code",{children:"outline"})," class for outline buttons."]}),a(F,{html:P$,caption:"Outline Buttons"}),a("h2",{children:"Bare Naked Buttons"}),u("p",{children:["Add the ",a("code",{children:"bare"})," class for remove the background and border completely."]}),a(F,{html:M$,caption:"Bare Buttons"}),a("h2",{children:"Shaded Style"}),u("p",{children:["Add the ",a("code",{children:"shaded"})," class for subtly shaded buttons.  It's only a matter of time until flat design is out and shaded is back in. Be ahead of the curve!"]}),a(F,{html:F$,caption:"Shaded Buttons"}),a("h2",{children:"Button Class"}),u("p",{children:["Add the ",a("code",{children:"button"})," class to any non-button element to give it the button styling.  You can also add the ",a("code",{children:"outline"})," and/or"," ",a("code",{children:"shaded"})," classes."]}),a(F,{html:A$,caption:".button class"}),a("h2",{children:"Button Icons"}),u("p",{children:["You can add ",a(Ie,{to:"/components/icons",text:"SVG Icons"})," to buttons. You can set the margins for icons manually using the ",a("code",{children:"mar-N"})," ","classes described on the ",a(Ie,{to:"/utilities/spacing",text:"spacing"})," page. The ",a("code",{children:"on-left"})," and ",a("code",{children:"on-right"})," classes are provided as shortcuts and are equivalent to ",a("code",{children:"mar-r-2"})," and ",a("code",{children:"mar-l-2"}),", respectively."]}),a(F,{html:O$,caption:"Button icons"}),a("h2",{children:"Button Padding"}),a("p",{children:"The default padding for buttons is larger in the horizontal direction (4 units = 1em) than it is in the vertical direction (1 unit = 0.25em). This isn't as unbalanced as it initially seems when you factor in the line-height (1.5), which effectively results in  the vertical padding being equivalent to 2 units (0.5em)."}),u("p",{children:["If you have a button that only contains an icon then it can look a bit strange, as shown in the first button here.  Adding the ",a("code",{children:"pad-h-2"})," class to the button will reduce the horizontal padding to 2 units (0.5em) which will even things out, as shown in the second button.  Or you can add the ",a("code",{children:"icon"})," class to the button which will have the same effect and doesn't require you to remember how many units of padding you need to set."]}),a(F,{html:D$,caption:"Button padding"}),a("h2",{children:"Button Sets"}),u("p",{children:["Button sets can be created by adding a container with the"," ",a("code",{children:"buttons"})," class."]}),a(F,{html:B$,caption:"Button Sets"})]}),z$=Object.freeze(Object.defineProperty({__proto__:null,default:j$},Symbol.toStringTag,{value:"Module"})),U$=`<label>
  <input type="checkbox">
  Option 1
</label>

<label class="checkbox">
  <input type="checkbox">
  Option 2
</label>
`,W$=`<label class="wide">
  <input type="checkbox">
  Option 1
</label>

<label class="wide checkbox">
  <input type="checkbox">
  Option 2
</label>
`,H$=`<div class="grid-2 gap-2">
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
`,G$=`<div>
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
</div>`,V$=()=>u("div",{children:[a("h1",{children:"Checkboxes"}),a("h2",{children:"Checkbox Class"}),u("p",{children:["The usual approach to creating a checkbox is to define a"," ",a("code",{children:"label"})," that contains an ",a("code",{children:"input"})," with a",a("code",{children:'type="label"'})," attribute."]}),u("p",{children:["That will work fine on most browsers.  However at the time of writing (July 2023), Firefox (v115) still doesn't support the"," ",a("code",{children:":has()"})," CSS selector that this depends upon.  Although the other major browsers currently support it and we're expecting it to be implemented in Firefox soon."]}),u("p",{children:["As a work-around you can add the ",a("code",{children:"checkbox"})," class to the"," ",a("code",{children:"label"}),"."]}),a(F,{html:U$,language:"html",caption:"Checkboxes"}),a("h2",{children:"Wide Checkboxes"}),u("p",{children:["Add the ",a("code",{children:"wide"})," class for full-width checkboxes."]}),a(F,{html:W$,language:"html",caption:"Wide Checkboxes"}),a("h2",{children:"Checkbox Borders"}),u("p",{children:["Add the ",a("code",{children:"border"})," class for borders."]}),a(F,{html:H$,language:"html",caption:"Border Checkboxes"}),a("h2",{children:"Custom Checkboxes"}),a(F,{html:G$,language:"html",caption:"Custom Checkboxes"})]}),Y$=Object.freeze(Object.defineProperty({__proto__:null,default:V$},Symbol.toStringTag,{value:"Module"})),q$=`<div class="field">
  <label>Label</label>
  <input type="text" value="Input value">
  <div class="help">Help message</div>
</div>`,Z$=`<div class="field invalid">
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
</div>`,Q$=`<div class="field valid">
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
</div>`,K$=`<div class="field required">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
<div class="field required">
  <label>Terms</label>
  <label class="Xcheckbox">
    <input type="checkbox">
    I accept the terms and conditions
  </label>
</div>`,X$=`<style>
  .mandatory-text {
    --required-text: 'MANDATORY';
  }
</style>
<div class="field required mandatory-text">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
`,J$=`<div class="field optional">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>`,eE=`<style>
  .not-required {
    --optional-text: 'NOT REQUIRED';
  }
</style>
<div class="field optional not-required">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
`,tE=`// define your own text for the required/optional labels...
$field-required-text: '"Important"';
$field-optional-text: '"Not Required"';

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,nE=`<div class="field">
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
`,rE=`<div class="field">
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
`,aE=`<div class="field">
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
`,lE=()=>u("div",{className:"prose",children:[a("h1",{children:"Form Fields"}),a("p",{children:"Form fields are usually comprised of more than just an input. A label is usually present and sometimes an additional help message too."}),a("h2",{children:"Field Class"}),u("p",{children:["Create a container with the ",a("code",{children:"field"})," class. Any help message should have the ",a("code",{children:"help"})," class."]}),a(F,{html:q$,language:"html",caption:"Form Field"}),a("h2",{children:"Invalid Field"}),u("p",{children:["Add the ",a("code",{children:"invalid"})," class to the ",a("code",{children:"field"})," to indicate fields that are invalid."]}),a(F,{html:Z$,language:"html",caption:"Invalid Field"}),a("h2",{children:"Valid Field"}),u("p",{children:["Add the ",a("code",{children:"valid"})," class to the ",a("code",{children:"field"})," to indicate fields that have passed validation."]}),a(F,{html:Q$,language:"html",caption:"Valid Field"}),a("h2",{children:"Required Field"}),u("p",{children:["Add the ",a("code",{children:"required"})," class to the ",a("code",{children:"field"})," if you want an additional tag added to the label."]}),a(F,{html:K$,language:"html",caption:"Required Field"}),u("p",{children:["You can use the ",a("code",{children:"--required-text"})," CSS variable to change the text displayed."]}),a(F,{html:X$,language:"html",caption:"Custom Required Field"}),a("h2",{children:"Optional Field"}),u("p",{children:["Add the ",a("code",{children:"optional"})," class to the ",a("code",{children:"field"})," if you want an additional tag added to the label."]}),a(F,{html:J$,language:"html",caption:"Optional Field"}),u("p",{children:["You can use the ",a("code",{children:"--optional-text"})," CSS variable to change the text displayed."]}),a(F,{html:eE,language:"html",caption:"Custom Optional Field"}),u("p",{children:["You can also change the text displayed for either the required and/or optional labels on a global level by setting the"," ",a("code",{children:"$field-required-text"})," and ",a("code",{children:"$field-optional-text"})," ","SASS variables. Be warned that you need to quote the values twice, so that the value defined includes a set of quotes, as shown here."]}),a(Pe,{code:tE,caption:"Required Text",language:"scss",className:"mar-b-8",expand:!0}),a("h2",{children:"Input Prefix"}),u("p",{children:["If you want to add a prefix to a field you should enclose the input in an element with the ",a("code",{children:"input"})," class and add the"," ",a("code",{children:"prefix"})," class to the prefix element.  You can add a prefix to a text input, textarea, select or a checkbox or radio option with the ",a("code",{children:"border"})," class set.  You can try it without the "," ",a("code",{children:"border"})," but the effect is lost somewhat."]}),u("p",{children:["If you want a wide input then add the ",a("code",{children:"wide"})," class to the"," ",a("code",{children:"input"})," container element."]}),a(F,{html:nE,language:"html",caption:"Input Prefix"}),a("h2",{children:"Input Suffix"}),u("p",{children:["Adding an input suffix is just the same, except for giving your suffix element the ",a("code",{children:"suffix"})," class and putting it after the input."]}),a(F,{html:rE,language:"html",caption:"Input Suffix"}),a("h2",{children:"Prefix and Suffix"}),u("p",{children:["You can add both a ",a("code",{children:"prefix"})," and a ",a("code",{children:"suffix"}),". Not only do the colours and focus rings work correctly, but they also adapt their colors for ",a("code",{children:"valid"})," and ",a("code",{children:"invalid"})," fields."]}),a(F,{html:aE,language:"html",caption:"Prefix and Suffix"})]}),oE=Object.freeze(Object.defineProperty({__proto__:null,default:lE},Symbol.toStringTag,{value:"Module"})),iE=`<fieldset>
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
</fieldset>`,sE=()=>u("div",{className:"prose",children:[a("h1",{children:"Form Field Sets"}),u("p",{children:["You can group related fields together in a ",a("code",{children:"fieldset"}),"."]}),a("h2",{children:"Fieldset Container"}),a(F,{html:iE,language:"html",caption:"Form Fieldset"})]}),cE=Object.freeze(Object.defineProperty({__proto__:null,default:sE},Symbol.toStringTag,{value:"Module"})),m0=`<div class="field">
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
`,dE=`<div class="grid-1 gap-4">
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
</div>`,uE=`<div class="field optional">
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
`,hE=`<div class="grid-1 gap-4">
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
</div>`;var jl={};/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty=j;function ge(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kt=Object.prototype.hasOwnProperty,fE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v0={},y0={};function $y(e){return Kt.call(y0,e)?!0:Kt.call(v0,e)?!1:fE.test(e)?y0[e]=!0:(v0[e]=!0,!1)}function Vt(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var Rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Rt[e]=new Vt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Rt[t]=new Vt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Rt[e]=new Vt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Rt[e]=new Vt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Rt[e]=new Vt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Rt[e]=new Vt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Rt[e]=new Vt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Rt[e]=new Vt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Rt[e]=new Vt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Uf=/[\-:]([a-z])/g;function Wf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Uf,Wf);Rt[t]=new Vt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Uf,Wf);Rt[t]=new Vt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Uf,Wf);Rt[t]=new Vt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Rt[e]=new Vt(e,1,!1,e.toLowerCase(),null,!1,!1)});Rt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Rt[e]=new Vt(e,1,!1,e.toLowerCase(),null,!0,!0)});var Ss={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pE=["Webkit","ms","Moz","O"];Object.keys(Ss).forEach(function(e){pE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ss[t]=Ss[e]})});var gE=/["'&<>]/;function Ut(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=gE.exec(e);if(t){var n="",r,l=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}l!==r&&(n+=e.substring(l,r)),l=r+1,n+=t}e=l!==r?n+e.substring(l,r):n}return e}var mE=/([A-Z])/g,vE=/^ms-/,ah=Array.isArray;function ar(e,t){return{insertionMode:e,selectedValue:t}}function yE(e,t,n){switch(t){case"select":return ar(1,n.value!=null?n.value:n.defaultValue);case"svg":return ar(2,null);case"math":return ar(3,null);case"foreignObject":return ar(1,null);case"table":return ar(4,null);case"thead":case"tbody":case"tfoot":return ar(5,null);case"colgroup":return ar(7,null);case"tr":return ar(6,null)}return 4<=e.insertionMode||e.insertionMode===0?ar(1,null):e}var b0=new Map;function Ey(e,t,n){if(typeof n!="object")throw Error(ge(62));t=!0;for(var r in n)if(Kt.call(n,r)){var l=n[r];if(l!=null&&typeof l!="boolean"&&l!==""){if(r.indexOf("--")===0){var o=Ut(r);l=Ut((""+l).trim())}else{o=r;var i=b0.get(o);i!==void 0||(i=Ut(o.replace(mE,"-$1").toLowerCase().replace(vE,"-ms-")),b0.set(o,i)),o=i,l=typeof l=="number"?l===0||Kt.call(Ss,r)?""+l:l+"px":Ut((""+l).trim())}t?(t=!1,e.push(' style="',o,":",l)):e.push(";",o,":",l)}}t||e.push('"')}function ln(e,t,n,r){switch(n){case"style":Ey(e,t,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N"){if(t=Rt.hasOwnProperty(n)?Rt[n]:null,t!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(n=t.attributeName,t.type){case 3:r&&e.push(" ",n,'=""');break;case 4:r===!0?e.push(" ",n,'=""'):r!==!1&&e.push(" ",n,'="',Ut(r),'"');break;case 5:isNaN(r)||e.push(" ",n,'="',Ut(r),'"');break;case 6:!isNaN(r)&&1<=r&&e.push(" ",n,'="',Ut(r),'"');break;default:t.sanitizeURL&&(r=""+r),e.push(" ",n,'="',Ut(r),'"')}}else if($y(n)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(t=n.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-")return}e.push(" ",n,'="',Ut(r),'"')}}}function ks(e,t,n){if(t!=null){if(n!=null)throw Error(ge(60));if(typeof t!="object"||!("__html"in t))throw Error(ge(61));t=t.__html,t!=null&&e.push(""+t)}}function bE(e){var t="";return Ty.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function Gd(e,t,n,r){e.push(Wn(n));var l=n=null,o;for(o in t)if(Kt.call(t,o)){var i=t[o];if(i!=null)switch(o){case"children":n=i;break;case"dangerouslySetInnerHTML":l=i;break;default:ln(e,r,o,i)}}return e.push(">"),ks(e,l,n),typeof n=="string"?(e.push(Ut(n)),null):n}var wE=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,w0=new Map;function Wn(e){var t=w0.get(e);if(t===void 0){if(!wE.test(e))throw Error(ge(65,e));t="<"+e,w0.set(e,t)}return t}function xE(e,t,n,r,l){switch(t){case"select":e.push(Wn("select"));var o=null,i=null;for(m in n)if(Kt.call(n,m)){var s=n[m];if(s!=null)switch(m){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"defaultValue":case"value":break;default:ln(e,r,m,s)}}return e.push(">"),ks(e,i,o),o;case"option":i=l.selectedValue,e.push(Wn("option"));var d=s=null,f=null,m=null;for(o in n)if(Kt.call(n,o)){var b=n[o];if(b!=null)switch(o){case"children":s=b;break;case"selected":f=b;break;case"dangerouslySetInnerHTML":m=b;break;case"value":d=b;default:ln(e,r,o,b)}}if(i!=null)if(n=d!==null?""+d:bE(s),ah(i)){for(r=0;r<i.length;r++)if(""+i[r]===n){e.push(' selected=""');break}}else""+i===n&&e.push(' selected=""');else f&&e.push(' selected=""');return e.push(">"),ks(e,m,s),s;case"textarea":e.push(Wn("textarea")),m=i=o=null;for(s in n)if(Kt.call(n,s)&&(d=n[s],d!=null))switch(s){case"children":m=d;break;case"value":o=d;break;case"defaultValue":i=d;break;case"dangerouslySetInnerHTML":throw Error(ge(91));default:ln(e,r,s,d)}if(o===null&&i!==null&&(o=i),e.push(">"),m!=null){if(o!=null)throw Error(ge(92));if(ah(m)&&1<m.length)throw Error(ge(93));o=""+m}return typeof o=="string"&&o[0]===`
`&&e.push(`
`),o!==null&&e.push(Ut(""+o)),null;case"input":e.push(Wn("input")),d=m=s=o=null;for(i in n)if(Kt.call(n,i)&&(f=n[i],f!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(ge(399,"input"));case"defaultChecked":d=f;break;case"defaultValue":s=f;break;case"checked":m=f;break;case"value":o=f;break;default:ln(e,r,i,f)}return m!==null?ln(e,r,"checked",m):d!==null&&ln(e,r,"checked",d),o!==null?ln(e,r,"value",o):s!==null&&ln(e,r,"value",s),e.push("/>"),null;case"menuitem":e.push(Wn("menuitem"));for(var S in n)if(Kt.call(n,S)&&(o=n[S],o!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(ge(400));default:ln(e,r,S,o)}return e.push(">"),null;case"title":e.push(Wn("title")),o=null;for(b in n)if(Kt.call(n,b)&&(i=n[b],i!=null))switch(b){case"children":o=i;break;case"dangerouslySetInnerHTML":throw Error(ge(434));default:ln(e,r,b,i)}return e.push(">"),o;case"listing":case"pre":e.push(Wn(t)),i=o=null;for(d in n)if(Kt.call(n,d)&&(s=n[d],s!=null))switch(d){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;default:ln(e,r,d,s)}if(e.push(">"),i!=null){if(o!=null)throw Error(ge(60));if(typeof i!="object"||!("__html"in i))throw Error(ge(61));n=i.__html,n!=null&&(typeof n=="string"&&0<n.length&&n[0]===`
`?e.push(`
`,n):e.push(""+n))}return typeof o=="string"&&o[0]===`
`&&e.push(`
`),o;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Wn(t));for(var I in n)if(Kt.call(n,I)&&(o=n[I],o!=null))switch(I){case"children":case"dangerouslySetInnerHTML":throw Error(ge(399,t));default:ln(e,r,I,o)}return e.push("/>"),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Gd(e,n,t,r);case"html":return l.insertionMode===0&&e.push("<!DOCTYPE html>"),Gd(e,n,t,r);default:if(t.indexOf("-")===-1&&typeof n.is!="string")return Gd(e,n,t,r);e.push(Wn(t)),i=o=null;for(f in n)if(Kt.call(n,f)&&(s=n[f],s!=null))switch(f){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"style":Ey(e,r,s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:$y(f)&&typeof s!="function"&&typeof s!="symbol"&&e.push(" ",f,'="',Ut(s),'"')}return e.push(">"),ks(e,i,o),o}}function x0(e,t,n){if(e.push('<!--$?--><template id="'),n===null)throw Error(ge(395));return e.push(n),e.push('"></template>')}function SE(e,t,n,r){switch(n.insertionMode){case 0:case 1:return e.push('<div hidden id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 2:return e.push('<svg aria-hidden="true" style="display:none" id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 3:return e.push('<math aria-hidden="true" style="display:none" id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 4:return e.push('<table hidden id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 5:return e.push('<table hidden><tbody id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 6:return e.push('<table hidden><tr id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');case 7:return e.push('<table hidden><colgroup id="'),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push('">');default:throw Error(ge(397))}}function kE(e,t){switch(t.insertionMode){case 0:case 1:return e.push("</div>");case 2:return e.push("</svg>");case 3:return e.push("</math>");case 4:return e.push("</table>");case 5:return e.push("</tbody></table>");case 6:return e.push("</tr></table>");case 7:return e.push("</colgroup></table>");default:throw Error(ge(397))}}var CE=/[<\u2028\u2029]/g;function Vd(e){return JSON.stringify(e).replace(CE,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}function _E(e,t){return t=t===void 0?"":t,{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:t+"P:",segmentPrefix:t+"S:",boundaryPrefix:t+"B:",idPrefix:t,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:e}}function S0(e,t,n,r){return n.generateStaticMarkup?(e.push(Ut(t)),!1):(t===""?e=r:(r&&e.push("<!-- -->"),e.push(Ut(t)),e=!0),e)}var Ao=Object.assign,TE=Symbol.for("react.element"),Ny=Symbol.for("react.portal"),Iy=Symbol.for("react.fragment"),Ly=Symbol.for("react.strict_mode"),Ry=Symbol.for("react.profiler"),Py=Symbol.for("react.provider"),My=Symbol.for("react.context"),Fy=Symbol.for("react.forward_ref"),Ay=Symbol.for("react.suspense"),Oy=Symbol.for("react.suspense_list"),Dy=Symbol.for("react.memo"),Hf=Symbol.for("react.lazy"),$E=Symbol.for("react.scope"),EE=Symbol.for("react.debug_trace_mode"),NE=Symbol.for("react.legacy_hidden"),IE=Symbol.for("react.default_value"),k0=Symbol.iterator;function lh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Iy:return"Fragment";case Ny:return"Portal";case Ry:return"Profiler";case Ly:return"StrictMode";case Ay:return"Suspense";case Oy:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case My:return(e.displayName||"Context")+".Consumer";case Py:return(e._context.displayName||"Context")+".Provider";case Fy:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Dy:return t=e.displayName||null,t!==null?t:lh(e.type)||"Memo";case Hf:t=e._payload,e=e._init;try{return lh(e(t))}catch{}}return null}var By={};function C0(e,t){if(e=e.contextTypes,!e)return By;var n={},r;for(r in e)n[r]=t[r];return n}var xa=null;function Ac(e,t){if(e!==t){e.context._currentValue2=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(ge(401))}else{if(n===null)throw Error(ge(401));Ac(e,n)}t.context._currentValue2=t.value}}function jy(e){e.context._currentValue2=e.parentValue,e=e.parent,e!==null&&jy(e)}function zy(e){var t=e.parent;t!==null&&zy(t),e.context._currentValue2=e.value}function Uy(e,t){if(e.context._currentValue2=e.parentValue,e=e.parent,e===null)throw Error(ge(402));e.depth===t.depth?Ac(e,t):Uy(e,t)}function Wy(e,t){var n=t.parent;if(n===null)throw Error(ge(402));e.depth===n.depth?Ac(e,n):Wy(e,n),t.context._currentValue2=t.value}function ac(e){var t=xa;t!==e&&(t===null?zy(e):e===null?jy(t):t.depth===e.depth?Ac(t,e):t.depth>e.depth?Uy(t,e):Wy(t,e),xa=e)}var _0={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function T0(e,t,n,r){var l=e.state!==void 0?e.state:null;e.updater=_0,e.props=n,e.state=l;var o={queue:[],replace:!1};e._reactInternals=o;var i=t.contextType;if(e.context=typeof i=="object"&&i!==null?i._currentValue2:r,i=t.getDerivedStateFromProps,typeof i=="function"&&(i=i(n,l),l=i==null?l:Ao({},l,i),e.state=l),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&_0.enqueueReplaceState(e,e.state,null),o.queue!==null&&0<o.queue.length)if(t=o.queue,i=o.replace,o.queue=null,o.replace=!1,i&&t.length===1)e.state=t[0];else{for(o=i?t[0]:e.state,l=!0,i=i?1:0;i<t.length;i++){var s=t[i];s=typeof s=="function"?s.call(e,o,n,r):s,s!=null&&(l?(l=!1,o=Ao({},o,s)):Ao(o,s))}e.state=o}else o.queue=null}var LE={id:1,overflow:""};function oh(e,t,n){var r=e.id;e=e.overflow;var l=32-Cs(r)-1;r&=~(1<<l),n+=1;var o=32-Cs(t)+l;if(30<o){var i=l-l%5;return o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,{id:1<<32-Cs(t)+l|n<<l|r,overflow:o+e}}return{id:1<<o|n<<l|r,overflow:e}}var Cs=Math.clz32?Math.clz32:ME,RE=Math.log,PE=Math.LN2;function ME(e){return e>>>=0,e===0?32:31-(RE(e)/PE|0)|0}function FE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var AE=typeof Object.is=="function"?Object.is:FE,mr=null,Gf=null,_s=null,We=null,So=!1,lc=!1,oi=0,Mr=null,Oc=0;function fa(){if(mr===null)throw Error(ge(321));return mr}function $0(){if(0<Oc)throw Error(ge(312));return{memoizedState:null,queue:null,next:null}}function Vf(){return We===null?_s===null?(So=!1,_s=We=$0()):(So=!0,We=_s):We.next===null?(So=!1,We=We.next=$0()):(So=!0,We=We.next),We}function Yf(){Gf=mr=null,lc=!1,_s=null,Oc=0,We=Mr=null}function Hy(e,t){return typeof t=="function"?t(e):t}function E0(e,t,n){if(mr=fa(),We=Vf(),So){var r=We.queue;if(t=r.dispatch,Mr!==null&&(n=Mr.get(r),n!==void 0)){Mr.delete(r),r=We.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return We.memoizedState=r,[r,t]}return[We.memoizedState,t]}return e=e===Hy?typeof t=="function"?t():t:n!==void 0?n(t):t,We.memoizedState=e,e=We.queue={last:null,dispatch:null},e=e.dispatch=OE.bind(null,mr,e),[We.memoizedState,e]}function N0(e,t){if(mr=fa(),We=Vf(),t=t===void 0?null:t,We!==null){var n=We.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var l=0;l<r.length&&l<t.length;l++)if(!AE(t[l],r[l])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),We.memoizedState=[e,t],e}function OE(e,t,n){if(25<=Oc)throw Error(ge(301));if(e===mr)if(lc=!0,e={action:n,next:null},Mr===null&&(Mr=new Map),n=Mr.get(t),n===void 0)Mr.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function DE(){throw Error(ge(394))}function rs(){}var I0={readContext:function(e){return e._currentValue2},useContext:function(e){return fa(),e._currentValue2},useMemo:N0,useReducer:E0,useRef:function(e){mr=fa(),We=Vf();var t=We.memoizedState;return t===null?(e={current:e},We.memoizedState=e):t},useState:function(e){return E0(Hy,e)},useInsertionEffect:rs,useLayoutEffect:function(){},useCallback:function(e,t){return N0(function(){return e},t)},useImperativeHandle:rs,useEffect:rs,useDebugValue:rs,useDeferredValue:function(e){return fa(),e},useTransition:function(){return fa(),[!1,DE]},useId:function(){var e=Gf.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-Cs(e)-1)).toString(32)+t;var n=Ts;if(n===null)throw Error(ge(404));return t=oi++,e=":"+n.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return fa(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(ge(407));return n()}},Ts=null,Yd=Ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function BE(e){return console.error(e),null}function ko(){}function jE(e,t,n,r,l,o,i,s,d){var f=[],m=new Set;return t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:m,pingedTasks:f,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:l===void 0?BE:l,onAllReady:o===void 0?ko:o,onShellReady:i===void 0?ko:i,onShellError:s===void 0?ko:s,onFatalError:d===void 0?ko:d},n=oc(t,0,null,n,!1,!1),n.parentFlushed=!0,e=qf(t,e,null,n,m,By,null,LE),f.push(e),t}function qf(e,t,n,r,l,o,i,s){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var d={node:t,ping:function(){var f=e.pingedTasks;f.push(d),f.length===1&&Yy(e)},blockedBoundary:n,blockedSegment:r,abortSet:l,legacyContext:o,context:i,treeContext:s};return l.add(d),d}function oc(e,t,n,r,l,o){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:l,textEmbedded:o}}function ii(e,t){if(e=e.onError(t),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function ic(e,t){var n=e.onShellError;n(t),n=e.onFatalError,n(t),e.destination!==null?(e.status=2,e.destination.destroy(t)):(e.status=1,e.fatalError=t)}function L0(e,t,n,r,l){for(mr={},Gf=t,oi=0,e=n(r,l);lc;)lc=!1,oi=0,Oc+=1,We=null,e=n(r,l);return Yf(),e}function R0(e,t,n,r){var l=n.render(),o=r.childContextTypes;if(o!=null){var i=t.legacyContext;if(typeof n.getChildContext!="function")r=i;else{n=n.getChildContext();for(var s in n)if(!(s in o))throw Error(ge(108,lh(r)||"Unknown",s));r=Ao({},i,n)}t.legacyContext=r,cn(e,t,l),t.legacyContext=i}else cn(e,t,l)}function P0(e,t){if(e&&e.defaultProps){t=Ao({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ih(e,t,n,r,l){if(typeof n=="function")if(n.prototype&&n.prototype.isReactComponent){l=C0(n,t.legacyContext);var o=n.contextType;o=new n(r,typeof o=="object"&&o!==null?o._currentValue2:l),T0(o,n,r,l),R0(e,t,o,n)}else{o=C0(n,t.legacyContext),l=L0(e,t,n,r,o);var i=oi!==0;if(typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0)T0(l,n,r,o),R0(e,t,l,n);else if(i){r=t.treeContext,t.treeContext=oh(r,1,0);try{cn(e,t,l)}finally{t.treeContext=r}}else cn(e,t,l)}else if(typeof n=="string"){switch(l=t.blockedSegment,o=xE(l.chunks,n,r,e.responseState,l.formatContext),l.lastPushedText=!1,i=l.formatContext,l.formatContext=yE(i,n,r),sh(e,t,o),l.formatContext=i,n){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:l.chunks.push("</",n,">")}l.lastPushedText=!1}else{switch(n){case NE:case EE:case Ly:case Ry:case Iy:cn(e,t,r.children);return;case Oy:cn(e,t,r.children);return;case $E:throw Error(ge(343));case Ay:e:{n=t.blockedBoundary,l=t.blockedSegment,o=r.fallback,r=r.children,i=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:i,errorDigest:null},d=oc(e,l.chunks.length,s,l.formatContext,!1,!1);l.children.push(d),l.lastPushedText=!1;var f=oc(e,0,null,l.formatContext,!1,!1);f.parentFlushed=!0,t.blockedBoundary=s,t.blockedSegment=f;try{if(sh(e,t,r),e.responseState.generateStaticMarkup||f.lastPushedText&&f.textEmbedded&&f.chunks.push("<!-- -->"),f.status=1,sc(s,f),s.pendingTasks===0)break e}catch(m){f.status=4,s.forceClientRender=!0,s.errorDigest=ii(e,m)}finally{t.blockedBoundary=n,t.blockedSegment=l}t=qf(e,o,n,d,i,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Fy:if(r=L0(e,t,n.render,r,l),oi!==0){n=t.treeContext,t.treeContext=oh(n,1,0);try{cn(e,t,r)}finally{t.treeContext=n}}else cn(e,t,r);return;case Dy:n=n.type,r=P0(n,r),ih(e,t,n,r,l);return;case Py:if(l=r.children,n=n._context,r=r.value,o=n._currentValue2,n._currentValue2=r,i=xa,xa=r={parent:i,depth:i===null?0:i.depth+1,context:n,parentValue:o,value:r},t.context=r,cn(e,t,l),e=xa,e===null)throw Error(ge(403));r=e.parentValue,e.context._currentValue2=r===IE?e.context._defaultValue:r,e=xa=e.parent,t.context=e;return;case My:r=r.children,r=r(n._currentValue2),cn(e,t,r);return;case Hf:l=n._init,n=l(n._payload),r=P0(n,r),ih(e,t,n,r,void 0);return}throw Error(ge(130,n==null?n:typeof n,""))}}function cn(e,t,n){if(t.node=n,typeof n=="object"&&n!==null){switch(n.$$typeof){case TE:ih(e,t,n.type,n.props,n.ref);return;case Ny:throw Error(ge(257));case Hf:var r=n._init;n=r(n._payload),cn(e,t,n);return}if(ah(n)){M0(e,t,n);return}if(n===null||typeof n!="object"?r=null:(r=k0&&n[k0]||n["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(n))){if(n=r.next(),!n.done){var l=[];do l.push(n.value),n=r.next();while(!n.done);M0(e,t,l)}return}throw e=Object.prototype.toString.call(n),Error(ge(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}typeof n=="string"?(r=t.blockedSegment,r.lastPushedText=S0(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText)):typeof n=="number"&&(r=t.blockedSegment,r.lastPushedText=S0(t.blockedSegment.chunks,""+n,e.responseState,r.lastPushedText))}function M0(e,t,n){for(var r=n.length,l=0;l<r;l++){var o=t.treeContext;t.treeContext=oh(o,r,l);try{sh(e,t,n[l])}finally{t.treeContext=o}}}function sh(e,t,n){var r=t.blockedSegment.formatContext,l=t.legacyContext,o=t.context;try{return cn(e,t,n)}catch(d){if(Yf(),typeof d=="object"&&d!==null&&typeof d.then=="function"){n=d;var i=t.blockedSegment,s=oc(e,i.chunks.length,null,i.formatContext,i.lastPushedText,!0);i.children.push(s),i.lastPushedText=!1,e=qf(e,t.node,t.blockedBoundary,s,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=l,t.context=o,ac(o)}else throw t.blockedSegment.formatContext=r,t.legacyContext=l,t.context=o,ac(o),d}}function zE(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,Vy(this,t,e)}function Gy(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.push(null))):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(ge(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(l){return Gy(l,t,n)}),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady,r()))}function sc(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&sc(e,n)}else e.completedSegments.push(t)}function Vy(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(ge(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=ko,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&sc(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(zE,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(sc(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function Yy(e){if(e.status!==2){var t=xa,n=Yd.current;Yd.current=I0;var r=Ts;Ts=e.responseState;try{var l=e.pingedTasks,o;for(o=0;o<l.length;o++){var i=l[o],s=e,d=i.blockedSegment;if(d.status===0){ac(i.context);try{cn(s,i,i.node),s.responseState.generateStaticMarkup||d.lastPushedText&&d.textEmbedded&&d.chunks.push("<!-- -->"),i.abortSet.delete(i),d.status=1,Vy(s,i.blockedBoundary,d)}catch(N){if(Yf(),typeof N=="object"&&N!==null&&typeof N.then=="function"){var f=i.ping;N.then(f,f)}else{i.abortSet.delete(i),d.status=4;var m=i.blockedBoundary,b=N,S=ii(s,b);if(m===null?ic(s,b):(m.pendingTasks--,m.forceClientRender||(m.forceClientRender=!0,m.errorDigest=S,m.parentFlushed&&s.clientRenderedBoundaries.push(m))),s.allPendingTasks--,s.allPendingTasks===0){var I=s.onAllReady;I()}}}finally{}}}l.splice(0,o),e.destination!==null&&Zf(e,e.destination)}catch(N){ii(e,N),ic(e,N)}finally{Ts=r,Yd.current=n,n===I0&&ac(t)}}}function as(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,t.push('<template id="'),t.push(e.placeholderPrefix),e=r.toString(16),t.push(e),t.push('"></template>');case 1:n.status=2;var l=!0;r=n.chunks;var o=0;n=n.children;for(var i=0;i<n.length;i++){for(l=n[i];o<l.index;o++)t.push(r[o]);l=Dc(e,t,l)}for(;o<r.length-1;o++)t.push(r[o]);return o<r.length&&(l=t.push(r[o])),l;default:throw Error(ge(390))}}function Dc(e,t,n){var r=n.boundary;if(r===null)return as(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)return e.responseState.generateStaticMarkup||(r=r.errorDigest,t.push("<!--$!-->"),t.push("<template"),r&&(t.push(' data-dgst="'),r=Ut(r),t.push(r),t.push('"')),t.push("></template>")),as(e,t,n),e=e.responseState.generateStaticMarkup?!0:t.push("<!--/$-->"),e;if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var l=e.responseState,o=l.nextSuspenseID++;return l=l.boundaryPrefix+o.toString(16),r=r.id=l,x0(t,e.responseState,r),as(e,t,n),t.push("<!--/$-->")}if(r.byteSize>e.progressiveChunkSize)return r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),x0(t,e.responseState,r.id),as(e,t,n),t.push("<!--/$-->");if(e.responseState.generateStaticMarkup||t.push("<!--$-->"),n=r.completedSegments,n.length!==1)throw Error(ge(391));return Dc(e,t,n[0]),e=e.responseState.generateStaticMarkup?!0:t.push("<!--/$-->"),e}function F0(e,t,n){return SE(t,e.responseState,n.formatContext,n.id),Dc(e,t,n),kE(t,n.formatContext)}function A0(e,t,n){for(var r=n.completedSegments,l=0;l<r.length;l++)qy(e,t,n,r[l]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,t.push(e.startInlineScript),e.sentCompleteBoundaryFunction?t.push('$RC("'):(e.sentCompleteBoundaryFunction=!0,t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')),r===null)throw Error(ge(395));return n=n.toString(16),t.push(r),t.push('","'),t.push(e.segmentPrefix),t.push(n),t.push('")<\/script>')}function qy(e,t,n,r){if(r.status===2)return!0;var l=r.id;if(l===-1){if((r.id=n.rootSegmentID)===-1)throw Error(ge(392));return F0(e,t,r)}return F0(e,t,r),e=e.responseState,t.push(e.startInlineScript),e.sentCompleteSegmentFunction?t.push('$RS("'):(e.sentCompleteSegmentFunction=!0,t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')),t.push(e.segmentPrefix),l=l.toString(16),t.push(l),t.push('","'),t.push(e.placeholderPrefix),t.push(l),t.push('")<\/script>')}function Zf(e,t){try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){Dc(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)t.push(r[n]);n<r.length&&t.push(r[n])}var l=e.clientRenderedBoundaries,o;for(o=0;o<l.length;o++){var i=l[o];r=t;var s=e.responseState,d=i.id,f=i.errorDigest,m=i.errorMessage,b=i.errorComponentStack;if(r.push(s.startInlineScript),s.sentClientRenderFunction?r.push('$RX("'):(s.sentClientRenderFunction=!0,r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')),d===null)throw Error(ge(395));if(r.push(d),r.push('"'),f||m||b){r.push(",");var S=Vd(f||"");r.push(S)}if(m||b){r.push(",");var I=Vd(m||"");r.push(I)}if(b){r.push(",");var N=Vd(b);r.push(N)}if(!r.push(")<\/script>")){e.destination=null,o++,l.splice(0,o);return}}l.splice(0,o);var k=e.completedBoundaries;for(o=0;o<k.length;o++)if(!A0(e,t,k[o])){e.destination=null,o++,k.splice(0,o);return}k.splice(0,o);var L=e.partialBoundaries;for(o=0;o<L.length;o++){var w=L[o];e:{l=e,i=t;var g=w.completedSegments;for(s=0;s<g.length;s++)if(!qy(l,i,w,g[s])){s++,g.splice(0,s);var y=!1;break e}g.splice(0,s),y=!0}if(!y){e.destination=null,o++,L.splice(0,o);return}}L.splice(0,o);var v=e.completedBoundaries;for(o=0;o<v.length;o++)if(!A0(e,t,v[o])){e.destination=null,o++,v.splice(0,o);return}v.splice(0,o)}finally{e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.push(null)}}function UE(e,t){try{var n=e.abortableTasks;n.forEach(function(r){return Gy(r,e,t)}),n.clear(),e.destination!==null&&Zf(e,e.destination)}catch(r){ii(e,r),ic(e,r)}}function WE(){}function Zy(e,t,n,r){var l=!1,o=null,i="",s={push:function(f){return f!==null&&(i+=f),!0},destroy:function(f){l=!0,o=f}},d=!1;if(e=jE(e,_E(n,t?t.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,WE,void 0,function(){d=!0},void 0,void 0),Yy(e),UE(e,r),e.status===1)e.status=2,s.destroy(e.fatalError);else if(e.status!==2&&e.destination===null){e.destination=s;try{Zf(e,s)}catch(f){ii(e,f),ic(e,f)}}if(l)throw o;if(!d)throw Error(ge(426));return i}jl.renderToNodeStream=function(){throw Error(ge(207))};jl.renderToStaticMarkup=function(e,t){return Zy(e,t,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};jl.renderToStaticNodeStream=function(){throw Error(ge(208))};jl.renderToString=function(e,t){return Zy(e,t,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};jl.version="18.2.0";var Qf={};/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qy=j;function ye(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dn=null,un=0;function re(e,t){if(t.length!==0)if(512<t.length)0<un&&(e.enqueue(new Uint8Array(dn.buffer,0,un)),dn=new Uint8Array(512),un=0),e.enqueue(t);else{var n=dn.length-un;n<t.length&&(n===0?e.enqueue(dn):(dn.set(t.subarray(0,n),un),e.enqueue(dn),t=t.subarray(n)),dn=new Uint8Array(512),un=0),dn.set(t,un),un+=t.length}}function Ke(e,t){return re(e,t),!0}function O0(e){dn&&0<un&&(e.enqueue(new Uint8Array(dn.buffer,0,un)),dn=null,un=0)}var Ky=new TextEncoder;function xe(e){return Ky.encode(e)}function X(e){return Ky.encode(e)}function Xy(e,t){typeof e.error=="function"?e.error(t):e.close()}var Xt=Object.prototype.hasOwnProperty,HE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,D0={},B0={};function Jy(e){return Xt.call(B0,e)?!0:Xt.call(D0,e)?!1:HE.test(e)?B0[e]=!0:(D0[e]=!0,!1)}function Yt(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pt[e]=new Yt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Pt[t]=new Yt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pt[e]=new Yt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pt[e]=new Yt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pt[e]=new Yt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pt[e]=new Yt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pt[e]=new Yt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pt[e]=new Yt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pt[e]=new Yt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Kf=/[\-:]([a-z])/g;function Xf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Kf,Xf);Pt[t]=new Yt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Kf,Xf);Pt[t]=new Yt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Kf,Xf);Pt[t]=new Yt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pt[e]=new Yt(e,1,!1,e.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pt[e]=new Yt(e,1,!1,e.toLowerCase(),null,!0,!0)});var $s={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},GE=["Webkit","ms","Moz","O"];Object.keys($s).forEach(function(e){GE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$s[t]=$s[e]})});var VE=/["'&<>]/;function Nt(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=VE.exec(e);if(t){var n="",r,l=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}l!==r&&(n+=e.substring(l,r)),l=r+1,n+=t}e=l!==r?n+e.substring(l,r):n}return e}var YE=/([A-Z])/g,qE=/^ms-/,ch=Array.isArray,ZE=X("<script>"),QE=X("<\/script>"),KE=X('<script src="'),XE=X('<script type="module" src="'),j0=X('" async=""><\/script>'),JE=/(<\/|<)(s)(cript)/gi;function eN(e,t,n,r){return""+t+(n==="s"?"\\u0073":"\\u0053")+r}function tN(e,t,n,r,l){e=e===void 0?"":e,t=t===void 0?ZE:X('<script nonce="'+Nt(t)+'">');var o=[];if(n!==void 0&&o.push(t,xe((""+n).replace(JE,eN)),QE),r!==void 0)for(n=0;n<r.length;n++)o.push(KE,xe(Nt(r[n])),j0);if(l!==void 0)for(r=0;r<l.length;r++)o.push(XE,xe(Nt(l[r])),j0);return{bootstrapChunks:o,startInlineScript:t,placeholderPrefix:X(e+"P:"),segmentPrefix:X(e+"S:"),boundaryPrefix:e+"B:",idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function Hn(e,t){return{insertionMode:e,selectedValue:t}}function nN(e){return Hn(e==="http://www.w3.org/2000/svg"?2:e==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function rN(e,t,n){switch(t){case"select":return Hn(1,n.value!=null?n.value:n.defaultValue);case"svg":return Hn(2,null);case"math":return Hn(3,null);case"foreignObject":return Hn(1,null);case"table":return Hn(4,null);case"thead":case"tbody":case"tfoot":return Hn(5,null);case"colgroup":return Hn(7,null);case"tr":return Hn(6,null)}return 4<=e.insertionMode||e.insertionMode===0?Hn(1,null):e}var Jf=X("<!-- -->");function z0(e,t,n,r){return t===""?r:(r&&e.push(Jf),e.push(xe(Nt(t))),!0)}var U0=new Map,aN=X(' style="'),W0=X(":"),lN=X(";");function eb(e,t,n){if(typeof n!="object")throw Error(ye(62));t=!0;for(var r in n)if(Xt.call(n,r)){var l=n[r];if(l!=null&&typeof l!="boolean"&&l!==""){if(r.indexOf("--")===0){var o=xe(Nt(r));l=xe(Nt((""+l).trim()))}else{o=r;var i=U0.get(o);i!==void 0||(i=X(Nt(o.replace(YE,"-$1").toLowerCase().replace(qE,"-ms-"))),U0.set(o,i)),o=i,l=typeof l=="number"?l===0||Xt.call($s,r)?xe(""+l):xe(l+"px"):xe(Nt((""+l).trim()))}t?(t=!1,e.push(aN,o,W0,l)):e.push(lN,o,W0,l)}}t||e.push(pa)}var Tr=X(" "),tl=X('="'),pa=X('"'),H0=X('=""');function on(e,t,n,r){switch(n){case"style":eb(e,t,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N"){if(t=Pt.hasOwnProperty(n)?Pt[n]:null,t!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(n=xe(t.attributeName),t.type){case 3:r&&e.push(Tr,n,H0);break;case 4:r===!0?e.push(Tr,n,H0):r!==!1&&e.push(Tr,n,tl,xe(Nt(r)),pa);break;case 5:isNaN(r)||e.push(Tr,n,tl,xe(Nt(r)),pa);break;case 6:!isNaN(r)&&1<=r&&e.push(Tr,n,tl,xe(Nt(r)),pa);break;default:t.sanitizeURL&&(r=""+r),e.push(Tr,n,tl,xe(Nt(r)),pa)}}else if(Jy(n)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(t=n.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-")return}e.push(Tr,xe(n),tl,xe(Nt(r)),pa)}}}var $r=X(">"),G0=X("/>");function Es(e,t,n){if(t!=null){if(n!=null)throw Error(ye(60));if(typeof t!="object"||!("__html"in t))throw Error(ye(61));t=t.__html,t!=null&&e.push(xe(""+t))}}function oN(e){var t="";return Qy.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}var qd=X(' selected=""');function Zd(e,t,n,r){e.push(Gn(n));var l=n=null,o;for(o in t)if(Xt.call(t,o)){var i=t[o];if(i!=null)switch(o){case"children":n=i;break;case"dangerouslySetInnerHTML":l=i;break;default:on(e,r,o,i)}}return e.push($r),Es(e,l,n),typeof n=="string"?(e.push(xe(Nt(n))),null):n}var Qd=X(`
`),iN=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,V0=new Map;function Gn(e){var t=V0.get(e);if(t===void 0){if(!iN.test(e))throw Error(ye(65,e));t=X("<"+e),V0.set(e,t)}return t}var sN=X("<!DOCTYPE html>");function cN(e,t,n,r,l){switch(t){case"select":e.push(Gn("select"));var o=null,i=null;for(m in n)if(Xt.call(n,m)){var s=n[m];if(s!=null)switch(m){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"defaultValue":case"value":break;default:on(e,r,m,s)}}return e.push($r),Es(e,i,o),o;case"option":i=l.selectedValue,e.push(Gn("option"));var d=s=null,f=null,m=null;for(o in n)if(Xt.call(n,o)){var b=n[o];if(b!=null)switch(o){case"children":s=b;break;case"selected":f=b;break;case"dangerouslySetInnerHTML":m=b;break;case"value":d=b;default:on(e,r,o,b)}}if(i!=null)if(n=d!==null?""+d:oN(s),ch(i)){for(r=0;r<i.length;r++)if(""+i[r]===n){e.push(qd);break}}else""+i===n&&e.push(qd);else f&&e.push(qd);return e.push($r),Es(e,m,s),s;case"textarea":e.push(Gn("textarea")),m=i=o=null;for(s in n)if(Xt.call(n,s)&&(d=n[s],d!=null))switch(s){case"children":m=d;break;case"value":o=d;break;case"defaultValue":i=d;break;case"dangerouslySetInnerHTML":throw Error(ye(91));default:on(e,r,s,d)}if(o===null&&i!==null&&(o=i),e.push($r),m!=null){if(o!=null)throw Error(ye(92));if(ch(m)&&1<m.length)throw Error(ye(93));o=""+m}return typeof o=="string"&&o[0]===`
`&&e.push(Qd),o!==null&&e.push(xe(Nt(""+o))),null;case"input":e.push(Gn("input")),d=m=s=o=null;for(i in n)if(Xt.call(n,i)&&(f=n[i],f!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(ye(399,"input"));case"defaultChecked":d=f;break;case"defaultValue":s=f;break;case"checked":m=f;break;case"value":o=f;break;default:on(e,r,i,f)}return m!==null?on(e,r,"checked",m):d!==null&&on(e,r,"checked",d),o!==null?on(e,r,"value",o):s!==null&&on(e,r,"value",s),e.push(G0),null;case"menuitem":e.push(Gn("menuitem"));for(var S in n)if(Xt.call(n,S)&&(o=n[S],o!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(ye(400));default:on(e,r,S,o)}return e.push($r),null;case"title":e.push(Gn("title")),o=null;for(b in n)if(Xt.call(n,b)&&(i=n[b],i!=null))switch(b){case"children":o=i;break;case"dangerouslySetInnerHTML":throw Error(ye(434));default:on(e,r,b,i)}return e.push($r),o;case"listing":case"pre":e.push(Gn(t)),i=o=null;for(d in n)if(Xt.call(n,d)&&(s=n[d],s!=null))switch(d){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;default:on(e,r,d,s)}if(e.push($r),i!=null){if(o!=null)throw Error(ye(60));if(typeof i!="object"||!("__html"in i))throw Error(ye(61));n=i.__html,n!=null&&(typeof n=="string"&&0<n.length&&n[0]===`
`?e.push(Qd,xe(n)):e.push(xe(""+n)))}return typeof o=="string"&&o[0]===`
`&&e.push(Qd),o;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Gn(t));for(var I in n)if(Xt.call(n,I)&&(o=n[I],o!=null))switch(I){case"children":case"dangerouslySetInnerHTML":throw Error(ye(399,t));default:on(e,r,I,o)}return e.push(G0),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Zd(e,n,t,r);case"html":return l.insertionMode===0&&e.push(sN),Zd(e,n,t,r);default:if(t.indexOf("-")===-1&&typeof n.is!="string")return Zd(e,n,t,r);e.push(Gn(t)),i=o=null;for(f in n)if(Xt.call(n,f)&&(s=n[f],s!=null))switch(f){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"style":eb(e,r,s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:Jy(f)&&typeof s!="function"&&typeof s!="symbol"&&e.push(Tr,xe(f),tl,xe(Nt(s)),pa)}return e.push($r),Es(e,i,o),o}}var dN=X("</"),uN=X(">"),hN=X('<template id="'),fN=X('"></template>'),pN=X("<!--$-->"),gN=X('<!--$?--><template id="'),mN=X('"></template>'),vN=X("<!--$!-->"),yN=X("<!--/$-->"),bN=X("<template"),wN=X('"'),xN=X(' data-dgst="');X(' data-msg="');X(' data-stck="');var SN=X("></template>");function Y0(e,t,n){if(re(e,gN),n===null)throw Error(ye(395));return re(e,n),Ke(e,mN)}var kN=X('<div hidden id="'),CN=X('">'),_N=X("</div>"),TN=X('<svg aria-hidden="true" style="display:none" id="'),$N=X('">'),EN=X("</svg>"),NN=X('<math aria-hidden="true" style="display:none" id="'),IN=X('">'),LN=X("</math>"),RN=X('<table hidden id="'),PN=X('">'),MN=X("</table>"),FN=X('<table hidden><tbody id="'),AN=X('">'),ON=X("</tbody></table>"),DN=X('<table hidden><tr id="'),BN=X('">'),jN=X("</tr></table>"),zN=X('<table hidden><colgroup id="'),UN=X('">'),WN=X("</colgroup></table>");function HN(e,t,n,r){switch(n.insertionMode){case 0:case 1:return re(e,kN),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Ke(e,CN);case 2:return re(e,TN),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Ke(e,$N);case 3:return re(e,NN),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Ke(e,IN);case 4:return re(e,RN),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Ke(e,PN);case 5:return re(e,FN),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Ke(e,AN);case 6:return re(e,DN),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Ke(e,BN);case 7:return re(e,zN),re(e,t.segmentPrefix),re(e,xe(r.toString(16))),Ke(e,UN);default:throw Error(ye(397))}}function GN(e,t){switch(t.insertionMode){case 0:case 1:return Ke(e,_N);case 2:return Ke(e,EN);case 3:return Ke(e,LN);case 4:return Ke(e,MN);case 5:return Ke(e,ON);case 6:return Ke(e,jN);case 7:return Ke(e,WN);default:throw Error(ye(397))}}var VN=X('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),YN=X('$RS("'),qN=X('","'),ZN=X('")<\/script>'),QN=X('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),KN=X('$RC("'),XN=X('","'),JN=X('")<\/script>'),eI=X('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),tI=X('$RX("'),nI=X('"'),rI=X(")<\/script>"),Kd=X(","),aI=/[<\u2028\u2029]/g;function Xd(e){return JSON.stringify(e).replace(aI,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var Oo=Object.assign,lI=Symbol.for("react.element"),tb=Symbol.for("react.portal"),nb=Symbol.for("react.fragment"),rb=Symbol.for("react.strict_mode"),ab=Symbol.for("react.profiler"),lb=Symbol.for("react.provider"),ob=Symbol.for("react.context"),ib=Symbol.for("react.forward_ref"),sb=Symbol.for("react.suspense"),cb=Symbol.for("react.suspense_list"),db=Symbol.for("react.memo"),ep=Symbol.for("react.lazy"),oI=Symbol.for("react.scope"),iI=Symbol.for("react.debug_trace_mode"),sI=Symbol.for("react.legacy_hidden"),cI=Symbol.for("react.default_value"),q0=Symbol.iterator;function dh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nb:return"Fragment";case tb:return"Portal";case ab:return"Profiler";case rb:return"StrictMode";case sb:return"Suspense";case cb:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ob:return(e.displayName||"Context")+".Consumer";case lb:return(e._context.displayName||"Context")+".Provider";case ib:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case db:return t=e.displayName||null,t!==null?t:dh(e.type)||"Memo";case ep:t=e._payload,e=e._init;try{return dh(e(t))}catch{}}return null}var ub={};function Z0(e,t){if(e=e.contextTypes,!e)return ub;var n={},r;for(r in e)n[r]=t[r];return n}var Sa=null;function Bc(e,t){if(e!==t){e.context._currentValue=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(ye(401))}else{if(n===null)throw Error(ye(401));Bc(e,n)}t.context._currentValue=t.value}}function hb(e){e.context._currentValue=e.parentValue,e=e.parent,e!==null&&hb(e)}function fb(e){var t=e.parent;t!==null&&fb(t),e.context._currentValue=e.value}function pb(e,t){if(e.context._currentValue=e.parentValue,e=e.parent,e===null)throw Error(ye(402));e.depth===t.depth?Bc(e,t):pb(e,t)}function gb(e,t){var n=t.parent;if(n===null)throw Error(ye(402));e.depth===n.depth?Bc(e,n):gb(e,n),t.context._currentValue=t.value}function cc(e){var t=Sa;t!==e&&(t===null?fb(e):e===null?hb(t):t.depth===e.depth?Bc(t,e):t.depth>e.depth?pb(t,e):gb(t,e),Sa=e)}var Q0={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function K0(e,t,n,r){var l=e.state!==void 0?e.state:null;e.updater=Q0,e.props=n,e.state=l;var o={queue:[],replace:!1};e._reactInternals=o;var i=t.contextType;if(e.context=typeof i=="object"&&i!==null?i._currentValue:r,i=t.getDerivedStateFromProps,typeof i=="function"&&(i=i(n,l),l=i==null?l:Oo({},l,i),e.state=l),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&Q0.enqueueReplaceState(e,e.state,null),o.queue!==null&&0<o.queue.length)if(t=o.queue,i=o.replace,o.queue=null,o.replace=!1,i&&t.length===1)e.state=t[0];else{for(o=i?t[0]:e.state,l=!0,i=i?1:0;i<t.length;i++){var s=t[i];s=typeof s=="function"?s.call(e,o,n,r):s,s!=null&&(l?(l=!1,o=Oo({},o,s)):Oo(o,s))}e.state=o}else o.queue=null}var dI={id:1,overflow:""};function uh(e,t,n){var r=e.id;e=e.overflow;var l=32-Ns(r)-1;r&=~(1<<l),n+=1;var o=32-Ns(t)+l;if(30<o){var i=l-l%5;return o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,{id:1<<32-Ns(t)+l|n<<l|r,overflow:o+e}}return{id:1<<o|n<<l|r,overflow:e}}var Ns=Math.clz32?Math.clz32:fI,uI=Math.log,hI=Math.LN2;function fI(e){return e>>>=0,e===0?32:31-(uI(e)/hI|0)|0}function pI(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gI=typeof Object.is=="function"?Object.is:pI,vr=null,tp=null,Is=null,He=null,Co=!1,dc=!1,si=0,Fr=null,jc=0;function ga(){if(vr===null)throw Error(ye(321));return vr}function X0(){if(0<jc)throw Error(ye(312));return{memoizedState:null,queue:null,next:null}}function np(){return He===null?Is===null?(Co=!1,Is=He=X0()):(Co=!0,He=Is):He.next===null?(Co=!1,He=He.next=X0()):(Co=!0,He=He.next),He}function rp(){tp=vr=null,dc=!1,Is=null,jc=0,He=Fr=null}function mb(e,t){return typeof t=="function"?t(e):t}function J0(e,t,n){if(vr=ga(),He=np(),Co){var r=He.queue;if(t=r.dispatch,Fr!==null&&(n=Fr.get(r),n!==void 0)){Fr.delete(r),r=He.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return He.memoizedState=r,[r,t]}return[He.memoizedState,t]}return e=e===mb?typeof t=="function"?t():t:n!==void 0?n(t):t,He.memoizedState=e,e=He.queue={last:null,dispatch:null},e=e.dispatch=mI.bind(null,vr,e),[He.memoizedState,e]}function ev(e,t){if(vr=ga(),He=np(),t=t===void 0?null:t,He!==null){var n=He.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var l=0;l<r.length&&l<t.length;l++)if(!gI(t[l],r[l])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),He.memoizedState=[e,t],e}function mI(e,t,n){if(25<=jc)throw Error(ye(301));if(e===vr)if(dc=!0,e={action:n,next:null},Fr===null&&(Fr=new Map),n=Fr.get(t),n===void 0)Fr.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function vI(){throw Error(ye(394))}function ls(){}var tv={readContext:function(e){return e._currentValue},useContext:function(e){return ga(),e._currentValue},useMemo:ev,useReducer:J0,useRef:function(e){vr=ga(),He=np();var t=He.memoizedState;return t===null?(e={current:e},He.memoizedState=e):t},useState:function(e){return J0(mb,e)},useInsertionEffect:ls,useLayoutEffect:function(){},useCallback:function(e,t){return ev(function(){return e},t)},useImperativeHandle:ls,useEffect:ls,useDebugValue:ls,useDeferredValue:function(e){return ga(),e},useTransition:function(){return ga(),[!1,vI]},useId:function(){var e=tp.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-Ns(e)-1)).toString(32)+t;var n=Ls;if(n===null)throw Error(ye(404));return t=si++,e=":"+n.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return ga(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(ye(407));return n()}},Ls=null,Jd=Qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function yI(e){return console.error(e),null}function _o(){}function bI(e,t,n,r,l,o,i,s,d){var f=[],m=new Set;return t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:m,pingedTasks:f,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:l===void 0?yI:l,onAllReady:o===void 0?_o:o,onShellReady:i===void 0?_o:i,onShellError:s===void 0?_o:s,onFatalError:d===void 0?_o:d},n=uc(t,0,null,n,!1,!1),n.parentFlushed=!0,e=ap(t,e,null,n,m,ub,null,dI),f.push(e),t}function ap(e,t,n,r,l,o,i,s){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var d={node:t,ping:function(){var f=e.pingedTasks;f.push(d),f.length===1&&bb(e)},blockedBoundary:n,blockedSegment:r,abortSet:l,legacyContext:o,context:i,treeContext:s};return l.add(d),d}function uc(e,t,n,r,l,o){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:l,textEmbedded:o}}function ci(e,t){if(e=e.onError(t),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function hc(e,t){var n=e.onShellError;n(t),n=e.onFatalError,n(t),e.destination!==null?(e.status=2,Xy(e.destination,t)):(e.status=1,e.fatalError=t)}function nv(e,t,n,r,l){for(vr={},tp=t,si=0,e=n(r,l);dc;)dc=!1,si=0,jc+=1,He=null,e=n(r,l);return rp(),e}function rv(e,t,n,r){var l=n.render(),o=r.childContextTypes;if(o!=null){var i=t.legacyContext;if(typeof n.getChildContext!="function")r=i;else{n=n.getChildContext();for(var s in n)if(!(s in o))throw Error(ye(108,dh(r)||"Unknown",s));r=Oo({},i,n)}t.legacyContext=r,hn(e,t,l),t.legacyContext=i}else hn(e,t,l)}function av(e,t){if(e&&e.defaultProps){t=Oo({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function hh(e,t,n,r,l){if(typeof n=="function")if(n.prototype&&n.prototype.isReactComponent){l=Z0(n,t.legacyContext);var o=n.contextType;o=new n(r,typeof o=="object"&&o!==null?o._currentValue:l),K0(o,n,r,l),rv(e,t,o,n)}else{o=Z0(n,t.legacyContext),l=nv(e,t,n,r,o);var i=si!==0;if(typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0)K0(l,n,r,o),rv(e,t,l,n);else if(i){r=t.treeContext,t.treeContext=uh(r,1,0);try{hn(e,t,l)}finally{t.treeContext=r}}else hn(e,t,l)}else if(typeof n=="string"){switch(l=t.blockedSegment,o=cN(l.chunks,n,r,e.responseState,l.formatContext),l.lastPushedText=!1,i=l.formatContext,l.formatContext=rN(i,n,r),fh(e,t,o),l.formatContext=i,n){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:l.chunks.push(dN,xe(n),uN)}l.lastPushedText=!1}else{switch(n){case sI:case iI:case rb:case ab:case nb:hn(e,t,r.children);return;case cb:hn(e,t,r.children);return;case oI:throw Error(ye(343));case sb:e:{n=t.blockedBoundary,l=t.blockedSegment,o=r.fallback,r=r.children,i=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:i,errorDigest:null},d=uc(e,l.chunks.length,s,l.formatContext,!1,!1);l.children.push(d),l.lastPushedText=!1;var f=uc(e,0,null,l.formatContext,!1,!1);f.parentFlushed=!0,t.blockedBoundary=s,t.blockedSegment=f;try{if(fh(e,t,r),f.lastPushedText&&f.textEmbedded&&f.chunks.push(Jf),f.status=1,fc(s,f),s.pendingTasks===0)break e}catch(m){f.status=4,s.forceClientRender=!0,s.errorDigest=ci(e,m)}finally{t.blockedBoundary=n,t.blockedSegment=l}t=ap(e,o,n,d,i,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ib:if(r=nv(e,t,n.render,r,l),si!==0){n=t.treeContext,t.treeContext=uh(n,1,0);try{hn(e,t,r)}finally{t.treeContext=n}}else hn(e,t,r);return;case db:n=n.type,r=av(n,r),hh(e,t,n,r,l);return;case lb:if(l=r.children,n=n._context,r=r.value,o=n._currentValue,n._currentValue=r,i=Sa,Sa=r={parent:i,depth:i===null?0:i.depth+1,context:n,parentValue:o,value:r},t.context=r,hn(e,t,l),e=Sa,e===null)throw Error(ye(403));r=e.parentValue,e.context._currentValue=r===cI?e.context._defaultValue:r,e=Sa=e.parent,t.context=e;return;case ob:r=r.children,r=r(n._currentValue),hn(e,t,r);return;case ep:l=n._init,n=l(n._payload),r=av(n,r),hh(e,t,n,r,void 0);return}throw Error(ye(130,n==null?n:typeof n,""))}}function hn(e,t,n){if(t.node=n,typeof n=="object"&&n!==null){switch(n.$$typeof){case lI:hh(e,t,n.type,n.props,n.ref);return;case tb:throw Error(ye(257));case ep:var r=n._init;n=r(n._payload),hn(e,t,n);return}if(ch(n)){lv(e,t,n);return}if(n===null||typeof n!="object"?r=null:(r=q0&&n[q0]||n["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(n))){if(n=r.next(),!n.done){var l=[];do l.push(n.value),n=r.next();while(!n.done);lv(e,t,l)}return}throw e=Object.prototype.toString.call(n),Error(ye(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}typeof n=="string"?(r=t.blockedSegment,r.lastPushedText=z0(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText)):typeof n=="number"&&(r=t.blockedSegment,r.lastPushedText=z0(t.blockedSegment.chunks,""+n,e.responseState,r.lastPushedText))}function lv(e,t,n){for(var r=n.length,l=0;l<r;l++){var o=t.treeContext;t.treeContext=uh(o,r,l);try{fh(e,t,n[l])}finally{t.treeContext=o}}}function fh(e,t,n){var r=t.blockedSegment.formatContext,l=t.legacyContext,o=t.context;try{return hn(e,t,n)}catch(d){if(rp(),typeof d=="object"&&d!==null&&typeof d.then=="function"){n=d;var i=t.blockedSegment,s=uc(e,i.chunks.length,null,i.formatContext,i.lastPushedText,!0);i.children.push(s),i.lastPushedText=!1,e=ap(e,t.node,t.blockedBoundary,s,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=l,t.context=o,cc(o)}else throw t.blockedSegment.formatContext=r,t.legacyContext=l,t.context=o,cc(o),d}}function wI(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,yb(this,t,e)}function vb(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.close())):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(ye(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(l){return vb(l,t,n)}),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady,r()))}function fc(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&fc(e,n)}else e.completedSegments.push(t)}function yb(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(ye(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=_o,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&fc(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(wI,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(fc(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function bb(e){if(e.status!==2){var t=Sa,n=Jd.current;Jd.current=tv;var r=Ls;Ls=e.responseState;try{var l=e.pingedTasks,o;for(o=0;o<l.length;o++){var i=l[o],s=e,d=i.blockedSegment;if(d.status===0){cc(i.context);try{hn(s,i,i.node),d.lastPushedText&&d.textEmbedded&&d.chunks.push(Jf),i.abortSet.delete(i),d.status=1,yb(s,i.blockedBoundary,d)}catch(N){if(rp(),typeof N=="object"&&N!==null&&typeof N.then=="function"){var f=i.ping;N.then(f,f)}else{i.abortSet.delete(i),d.status=4;var m=i.blockedBoundary,b=N,S=ci(s,b);if(m===null?hc(s,b):(m.pendingTasks--,m.forceClientRender||(m.forceClientRender=!0,m.errorDigest=S,m.parentFlushed&&s.clientRenderedBoundaries.push(m))),s.allPendingTasks--,s.allPendingTasks===0){var I=s.onAllReady;I()}}}finally{}}}l.splice(0,o),e.destination!==null&&lp(e,e.destination)}catch(N){ci(e,N),hc(e,N)}finally{Ls=r,Jd.current=n,n===tv&&cc(t)}}}function os(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,re(t,hN),re(t,e.placeholderPrefix),e=xe(r.toString(16)),re(t,e),Ke(t,fN);case 1:n.status=2;var l=!0;r=n.chunks;var o=0;n=n.children;for(var i=0;i<n.length;i++){for(l=n[i];o<l.index;o++)re(t,r[o]);l=zc(e,t,l)}for(;o<r.length-1;o++)re(t,r[o]);return o<r.length&&(l=Ke(t,r[o])),l;default:throw Error(ye(390))}}function zc(e,t,n){var r=n.boundary;if(r===null)return os(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)r=r.errorDigest,Ke(t,vN),re(t,bN),r&&(re(t,xN),re(t,xe(Nt(r))),re(t,wN)),Ke(t,SN),os(e,t,n);else if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var l=e.responseState,o=l.nextSuspenseID++;l=X(l.boundaryPrefix+o.toString(16)),r=r.id=l,Y0(t,e.responseState,r),os(e,t,n)}else if(r.byteSize>e.progressiveChunkSize)r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),Y0(t,e.responseState,r.id),os(e,t,n);else{if(Ke(t,pN),n=r.completedSegments,n.length!==1)throw Error(ye(391));zc(e,t,n[0])}return Ke(t,yN)}function ov(e,t,n){return HN(t,e.responseState,n.formatContext,n.id),zc(e,t,n),GN(t,n.formatContext)}function iv(e,t,n){for(var r=n.completedSegments,l=0;l<r.length;l++)wb(e,t,n,r[l]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,re(t,e.startInlineScript),e.sentCompleteBoundaryFunction?re(t,KN):(e.sentCompleteBoundaryFunction=!0,re(t,QN)),r===null)throw Error(ye(395));return n=xe(n.toString(16)),re(t,r),re(t,XN),re(t,e.segmentPrefix),re(t,n),Ke(t,JN)}function wb(e,t,n,r){if(r.status===2)return!0;var l=r.id;if(l===-1){if((r.id=n.rootSegmentID)===-1)throw Error(ye(392));return ov(e,t,r)}return ov(e,t,r),e=e.responseState,re(t,e.startInlineScript),e.sentCompleteSegmentFunction?re(t,YN):(e.sentCompleteSegmentFunction=!0,re(t,VN)),re(t,e.segmentPrefix),l=xe(l.toString(16)),re(t,l),re(t,qN),re(t,e.placeholderPrefix),re(t,l),Ke(t,ZN)}function lp(e,t){dn=new Uint8Array(512),un=0;try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){zc(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)re(t,r[n]);n<r.length&&Ke(t,r[n])}var l=e.clientRenderedBoundaries,o;for(o=0;o<l.length;o++){var i=l[o];r=t;var s=e.responseState,d=i.id,f=i.errorDigest,m=i.errorMessage,b=i.errorComponentStack;if(re(r,s.startInlineScript),s.sentClientRenderFunction?re(r,tI):(s.sentClientRenderFunction=!0,re(r,eI)),d===null)throw Error(ye(395));re(r,d),re(r,nI),(f||m||b)&&(re(r,Kd),re(r,xe(Xd(f||"")))),(m||b)&&(re(r,Kd),re(r,xe(Xd(m||"")))),b&&(re(r,Kd),re(r,xe(Xd(b)))),Ke(r,rI)}l.splice(0,o);var S=e.completedBoundaries;for(o=0;o<S.length;o++)iv(e,t,S[o]);S.splice(0,o),O0(t),dn=new Uint8Array(512),un=0;var I=e.partialBoundaries;for(o=0;o<I.length;o++){var N=I[o];e:{l=e,i=t;var k=N.completedSegments;for(s=0;s<k.length;s++)if(!wb(l,i,N,k[s])){s++,k.splice(0,s);var L=!1;break e}k.splice(0,s),L=!0}if(!L){e.destination=null,o++,I.splice(0,o);return}}I.splice(0,o);var w=e.completedBoundaries;for(o=0;o<w.length;o++)iv(e,t,w[o]);w.splice(0,o)}finally{O0(t),e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.close()}}function sv(e,t){try{var n=e.abortableTasks;n.forEach(function(r){return vb(r,e,t)}),n.clear(),e.destination!==null&&lp(e,e.destination)}catch(r){ci(e,r),hc(e,r)}}Qf.renderToReadableStream=function(e,t){return new Promise(function(n,r){var l,o,i=new Promise(function(m,b){o=m,l=b}),s=bI(e,tN(t?t.identifierPrefix:void 0,t?t.nonce:void 0,t?t.bootstrapScriptContent:void 0,t?t.bootstrapScripts:void 0,t?t.bootstrapModules:void 0),nN(t?t.namespaceURI:void 0),t?t.progressiveChunkSize:void 0,t?t.onError:void 0,o,function(){var m=new ReadableStream({type:"bytes",pull:function(b){if(s.status===1)s.status=2,Xy(b,s.fatalError);else if(s.status!==2&&s.destination===null){s.destination=b;try{lp(s,b)}catch(S){ci(s,S),hc(s,S)}}},cancel:function(){sv(s)}},{highWaterMark:0});m.allReady=i,n(m)},function(m){i.catch(function(){}),r(m)},l);if(t&&t.signal){var d=t.signal,f=function(){sv(s,d.reason),d.removeEventListener("abort",f)};d.addEventListener("abort",f)}bb(s)})};Qf.version="18.2.0";var zl,xb;zl=jl,xb=Qf;zl.version;var xI=zl.renderToString;zl.renderToStaticMarkup;zl.renderToNodeStream;zl.renderToStaticNodeStream;xb.renderToReadableStream;var Sb={exports:{}},SI="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",kI=SI,CI=kI;function kb(){}function Cb(){}Cb.resetWarningCache=kb;var _I=function(){function e(r,l,o,i,s,d){if(d!==CI){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Cb,resetWarningCache:kb};return n.PropTypes=n,n};Sb.exports=_I();var TI=Sb.exports;const On=Kn(TI);var $I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _b(e,t){return e(t={exports:{}},t.exports),t.exports}var EI=_b(function(e){(function(t){var n=function(L,w,g){if(!d(w)||m(w)||b(w)||S(w)||s(w))return w;var y,v=0,$=0;if(f(w))for(y=[],$=w.length;v<$;v++)y.push(n(L,w[v],g));else for(var _ in y={},w)Object.prototype.hasOwnProperty.call(w,_)&&(y[L(_,g)]=n(L,w[_],g));return y},r=function(L){return I(L)?L:(L=L.replace(/[\-_\s]+(.)?/g,function(w,g){return g?g.toUpperCase():""})).substr(0,1).toLowerCase()+L.substr(1)},l=function(L){var w=r(L);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(L,w){return function(g,y){var v=(y=y||{}).separator||"_",$=y.split||/(?=[A-Z])/;return g.split($).join(v)}(L,w).toLowerCase()},i=Object.prototype.toString,s=function(L){return typeof L=="function"},d=function(L){return L===Object(L)},f=function(L){return i.call(L)=="[object Array]"},m=function(L){return i.call(L)=="[object Date]"},b=function(L){return i.call(L)=="[object RegExp]"},S=function(L){return i.call(L)=="[object Boolean]"},I=function(L){return(L-=0)==L},N=function(L,w){var g=w&&"process"in w?w.process:w;return typeof g!="function"?L:function(y,v){return g(y,L,v)}},k={camelize:r,decamelize:o,pascalize:l,depascalize:o,camelizeKeys:function(L,w){return n(N(r,w),L)},decamelizeKeys:function(L,w){return n(N(o,w),L,w)},pascalizeKeys:function(L,w){return n(N(l,w),L)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=k:t.humps=k})($I)}).decamelize,NI=function(e){if(Array.isArray(e))return e},II=function(e,t){if(typeof Symbol<"u"&&Symbol.iterator in Object(e)){var n=[],r=!0,l=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(d){l=!0,o=d}finally{try{r||s.return==null||s.return()}finally{if(l)throw o}}return n}},cv=function(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},LI=function(e,t){if(e){if(typeof e=="string")return cv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?cv(e,t):void 0}},RI=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},PI=function(e,t){return NI(e)||II(e,t)||LI(e,t)||RI()},Tb=_b(function(e){function t(){return e.exports=t=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(n[o]=l[o])}return n},t.apply(this,arguments)}e.exports=t}),MI=function(e,t){if(e==null)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l},$b=function(e,t){if(e==null)return{};var n,r,l=MI(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l},FI=j.createContext(null);function ph(e){var t=e.children,n=$b(e,["children"]);return typeof t!="string"&&(t=xI(t)),Et.createElement("template",Tb({},n,{dangerouslySetInnerHTML:{__html:t}}))}function gh(e){var t=e.root,n=e.children;return T2.createPortal(n,t)}function AI(e){var t=j.forwardRef(function(n,r){var l,o,i=n.mode,s=n.delegatesFocus,d=n.styleSheets,f=n.ssr,m=n.children,b=$b(n,["mode","delegatesFocus","styleSheets","ssr","children"]),S=(o=j.useRef((l=r)&&l.current),j.useEffect(function(){l&&(l.current=o.current)},[l]),o),I=j.useState(null),N=PI(I,2),k=N[0],L=N[1],w="node_".concat(i).concat(s);return j.useLayoutEffect(function(){if(S.current)try{if(typeof r=="function"&&r(S.current),f){var g=S.current.shadowRoot;return void L(g)}var y=S.current.attachShadow({mode:i,delegatesFocus:s});d.length>0&&(y.adoptedStyleSheets=d),L(y)}catch(v){(function($){var _=$.error,M=$.styleSheets,O=$.root;switch(_.name){case"NotSupportedError":M.length>0&&(O.adoptedStyleSheets=M);break;default:throw _}})({error:v,styleSheets:d,root:k})}},[r,S,d]),Et.createElement(Et.Fragment,null,Et.createElement(e.tag,Tb({key:w,ref:S},b),(k||f)&&Et.createElement(FI.Provider,{value:k},f?Et.createElement(ph,{shadowroot:"open"},e.render({root:k,ssr:f,children:m})):Et.createElement(gh,{root:k},e.render({root:k,ssr:f,children:m})))))});return t.propTypes={mode:On.oneOf(["open","closed"]),delegatesFocus:On.bool,styleSheets:On.arrayOf(On.instanceOf(globalThis.CSSStyleSheet)),ssr:On.bool,children:On.node},t.defaultProps={mode:"open",delegatesFocus:!1,styleSheets:[],ssr:!1,children:null},t}ph.propTypes={children:On.oneOfType([On.string,On.node])},ph.defaultProps={children:""},gh.propTypes={root:On.object.isRequired,children:On.node},gh.defaultProps={children:null};var eu=new Map;function OI(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"core",n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(r){return r.children};return new Proxy(e,{get:function(r,l){var o=EI(l,{separator:"-"}),i="".concat(t,"-").concat(o);return eu.has(i)||eu.set(i,AI({tag:o,render:n})),eu.get(i)}})}var DI=OI();const BI=()=>u("div",{className:"prose",children:[a("h1",{children:"Forms"}),u("blockquote",{className:"intro",children:["There is something about styling forms, that's so not fun. It's like ",a("em",{children:'"How much less fun could this be?"'})," ","and the answer is ",a("em",{children:'"None, none... less fun."'}),a("div",{className:"attrib",children:"Nigel Tufnel's website designer"})]}),a("h2",{children:"None Less Fun"}),a("p",{children:"Anyone reading this who is old enough to have served in the browser wars will no doubt be rolling their eyes at this point, thinking that kids these days don't know how lucky they are."}),u("p",{children:["It's certainly true that things are ",a("i",{children:"much"})," better than they used.  But despite all the advances in CSS support and cross-browser compatibility, the default styling for HTML forms still looks like 1995 called and asked for its website back."]}),a("p",{children:"Badger CSS includes form styling presets, supporting both light and dark themes out of the box. It uses native form components for accessibility and mobile friendliness.  Everything is configurable if you want to change things, but you don't have to."}),a("p",{children:"Here's the same form rendered twice.  Once with the default HTML styling and again with the default Badger CSS styles.  In case you're wondering, there's no Javascript in any of these forms.  It's all just vanilla HTML and CSS."}),u("div",{className:"grid-2 gap-8 mar-t-10 stack-desktop",children:[u("div",{className:"output",children:[a("h3",{className:"mar-b-4",children:"Default Form Styles"}),a(DI.div,{children:a("div",{dangerouslySetInnerHTML:{__html:m0}})})]}),u("div",{className:"output",children:[a("h3",{className:"mar-b-4",children:"Badger CSS Form Styles"}),a("div",{dangerouslySetInnerHTML:{__html:m0}})]})]}),a("h2",{children:"Go Large?"}),u("p",{children:["All form components are sized using ems and will adapt to whatever the current text size is.  If you want a small form, for example, then you just need to add a ",a("code",{children:"small"})," class to the form or one of its parent containers."]}),a("div",{className:"grid-2 gap-4 stack-widescreen",children:["smallest","smaller","small","large","larger","largest"].map(e=>u("div",{className:`${e} pad-6 border output shadow-2`,children:[a("h3",{className:"font-mono mar-b-3",children:e}),a("div",{dangerouslySetInnerHTML:{__html:dE}})]},e))}),a("h2",{children:"Accessibility and Focus"}),a("p",{children:"If you've played with any of the forms above you may have noticed the prominent ring around inputs when focussed.  This is important for accessibility to clearly indicate which field is selected."}),u("p",{children:["If for some reason you really, really need to disabled it because you're indicating the focus some other way then you can add the"," ",a("code",{children:"no-focus"})," class to the inputs."]}),a(F,{html:hE,language:"html"}),a("h2",{children:"Themes and Surfaces"}),a("p",{children:"Styling forms is made that much harder these days by the need to support both light and dark themes.  On top of that we might want to have forms included on different surfaces with varying levels of background intensity. Thanks to the magic of CSS custom properties we can tweak the colors used to render forms depending on the background color of the container."}),a("p",{children:"In these examples below it may not be immediately obvious that the colors are slightly different but they are.  They're different so that they look more-or-less the same, while providing adequate contrast."}),a("div",{className:"grid-3 gap-4 stack-widescreen mar-b-8",children:["surface","surface-1","surface-2","surface-3","surface-4","surface-5"].map(e=>u("div",{className:`${e} pad-6 border shadow-2`,children:[a("h3",{className:"font-mono mar-b-3",children:e}),a("div",{dangerouslySetInnerHTML:{__html:uE}})]},e))})]}),jI=Object.freeze(Object.defineProperty({__proto__:null,default:BI},Symbol.toStringTag,{value:"Module"})),zI=`<label>
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
`,UI=`<label class="wide radio">
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
`,WI=`<label class="border radio mar-r-2">
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
`,HI=`<div>
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
</div>`,GI=()=>u("div",{children:[a("h1",{children:"Radio Buttons"}),a("h2",{children:"Radio Class"}),u("p",{children:["Radio buttons are implemented much like"," ",a(Ie,{to:"/forms/checkboxes",text:"checkboxes"}),".  Create a"," ",a("code",{children:"label"})," enclosing an ",a("code",{children:"input"})," with the"," ",a("code",{children:'type="radio"'})," attribute."]}),u("p",{children:["The same warning about Firefox applies.  The current version (v115) doesn't support the ",a("code",{children:":has()"})," CSS selector that this depends on so you have to manually add the ",a("code",{children:"radio"})," class to the ",a("code",{children:"label"})," as a work-around."]}),a(F,{html:zI,language:"html",caption:"Radio Buttons"}),a("h2",{children:"Wide Radio Buttons"}),u("p",{children:["Add the ",a("code",{children:"wide"})," class for full-width radio buttons."]}),a(F,{html:UI,language:"html",caption:"Wide Radio Buttons"}),a("h2",{children:"Radio Button Borders"}),u("p",{children:["Add the ",a("code",{children:"border"})," class for borders."]}),a(F,{html:WI,language:"html",caption:"Border Radio Buttons"}),a("h2",{children:"Custom Radio Buttons"}),a(F,{html:HI,language:"html",caption:"Custom Checkboxes"})]}),VI=Object.freeze(Object.defineProperty({__proto__:null,default:GI},Symbol.toStringTag,{value:"Module"})),YI=`<select name="animal">
  <option value="">-- Choose an animal --</option>
  <option value="ant">Ant</option>
  <option value="badger">Badger</option>
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
  <option value="elephant">Elephant</option>
  <option value="ferret">Ferret</option>
  <option value="goldfish">Goldfish</option>
</select>
`,qI=`<select name="animal" required>
  <option value="" hidden disabled selected>Choose an animal</option>
  <option value="ant">Ant</option>
  <option value="badger">Badger</option>
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
  <option value="elephant">Elephant</option>
  <option value="ferret">Ferret</option>
  <option value="goldfish">Goldfish</option>
</select>
`,ZI=`<div class="small flex start gap-4 mar-b-4">
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
`,QI=`<select name="animal">
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
`,KI=`<div>
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

`,XI=()=>u("div",{className:"prose",children:[a("h1",{children:"Select Input"}),a("p",{children:"Select inputs are the bane of web developers and designers everywhere. There are notoriously difficult to style.  They don't want to align with other elements.  Their size is often wrong.  And just when you think you've finally cracked it, you look at it on another browser and see that it's all on the wonk."}),a("p",{children:"I have wasted far too many hours of my life starting at forms like this one trying to get everything the same size and aligned properly."}),a(F,{html:ZI,language:"html",caption:"Select Alignment"}),u("p",{children:["The least bad solution is to set ",a("code",{children:"appearance: none"})," to remove the browser-specific rendering quirks.  The problem then is that you also lose drop down arrow indicating that it's a select input.  So we have to put that back in using an SVG background image. But you don't need to worry about that - I did so you don't have to."]}),a(F,{html:YI,language:"html",caption:"Select Input"}),a("h2",{children:"Custom Icon"}),u("p",{children:["You can define your own drop down arrow icon using the"," ",a("code",{children:"--arrow-down"})," property.  It's a little bit tricky because you have to URI encode the SVG and define it as shown in this example.  If you've got an SVG icon with a simple path and your icon is 16px square then you can copy the definition from this example and insert your path data into the ",a("code",{children:"path d='...'"})," part."]}),u("p",{children:["Note that you can't use ",a("code",{children:"currentColor"})," to set the stroke or fill color.  You can define separate ",a("code",{children:"--arrow-down"})," ","properties for you light and dark themes, or you can use a neutral color like ",a("code",{children:"#888"})," which works well in both cases."]}),a(F,{html:KI,language:"html",caption:"Custom Icon"}),a("h2",{children:"Placeholder"}),u("p",{children:["Another annoying thing about select inputs is that they don't support the ",a("code",{children:"placeholder"})," attribute.  You can work around the problem by adding the ",a("code",{children:"required"})," attribute to the"," ",a("code",{children:"select"})," input and the ",a("code",{children:"hidden"}),","," ",a("code",{children:"disabled"})," and ",a("code",{children:"selected"})," attributes to the first option which contains your placeholder text."]}),a(F,{html:qI,language:"html",caption:"Select Placeholder"}),a("h2",{children:"Option Groups"}),u("p",{children:["You can group options using the ",a("code",{children:"optgroup"})," element."]}),a(F,{html:QI,language:"html",caption:"Option Groups"})]}),JI=Object.freeze(Object.defineProperty({__proto__:null,default:XI},Symbol.toStringTag,{value:"Module"})),eL=`<style>
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
</form>`,tL=()=>u("div",{className:"prose",children:[a("h1",{children:"Form Styling"}),a("p",{}),a(F,{html:eL,language:"html",caption:"Form Styling",expand:!0})]}),nL=Object.freeze(Object.defineProperty({__proto__:null,default:tL},Symbol.toStringTag,{value:"Module"})),rL=`<input
  type="text" name="my-input"
  placeholder="Placeholder text"
/>
`,aL=`<input
  type="text" name="my-input"
  placeholder="Placeholder text"
  class="wide"
/>
`,lL=`<div class="grid-2 gap-4">
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
`,oL=`<div class="grid-3 gap-4">
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
`,iL=()=>u("div",{className:"prose",children:[a("h1",{children:"Text Input"}),a("p",{children:"Text inputs are perhaps the most common kind of input."}),a(F,{html:rL,language:"html",caption:"Text Input"}),u("p",{children:["Add the ",a("code",{children:"wide"})," class to make it stretch to fill the container."]}),a(F,{html:aL,language:"html",caption:"Wide Text Input"}),u("p",{children:["You can use the ",a(Ie,{to:"/utilities/grid",text:"grid"})," utility classes to group inputs together on the same line."]}),a(F,{html:lL,language:"html",caption:"Text Grid"}),u("p",{children:["You can set the ",a("code",{children:"type"})," to one of the other text-based input types (e.g. ",a("code",{children:"password"}),", ",a("code",{children:"number"}),","," ",a("code",{children:"telephone"}),", ",a("code",{children:"date"}),", ",a("code",{children:"time"}),", etc). There's also some styling provided for the ",a("code",{children:"color"})," type although it's notoriously hard to style and the appearance can vary on different browsers, devices and operating systems."]}),a(F,{html:oL,language:"html",caption:"Other Input Types"})]}),sL=Object.freeze(Object.defineProperty({__proto__:null,default:iL},Symbol.toStringTag,{value:"Module"})),cL=`<textarea
  rows="5"
  placeholder="I like badgers because..."
/></textarea>
`,dL=`<textarea
  rows="5" class="wide"
  placeholder="I like badgers because..."
/></textarea>
`,uL=()=>u("div",{children:[a("h1",{children:"Text Area Input"}),u("p",{children:["Text area inputs are much like ",a(Ie,{to:"/form/text",text:"text inputs"}),"."]}),u("p",{children:["One thing to note (that always catches me out) - if you want placeholder text to appear then you have to make sure there is ",a("em",{children:"nothing"})," ","(not even a newline) between the opening and closing ",a("code",{children:"textarea"})," tags."]}),a(F,{html:cL,language:"html",caption:"Text Area Input",expand:!0}),u("p",{children:["Add the ",a("code",{children:"wide"})," class to make it stretch to fill the container."]}),a(F,{html:dL,language:"html",caption:"Wide Text Area Input",expand:!0})]}),hL=Object.freeze(Object.defineProperty({__proto__:null,default:uL},Symbol.toStringTag,{value:"Module"})),fL=()=>u("div",{className:"prose",children:[a("h1",{children:"What's Wrong With It?"}),a("p",{className:"intro",children:"There are many, many CSS toolkits and UI frameworks already out there to choose from. If you're looking for something that's stable, reliable, comprehensive and well-supported then this probably isn't for you."}),a("h2",{children:"Work in Progress"}),a("p",{children:"This is a work in progress.  It started out life as an ad-hoc collection of CSS classes that I copy and pasted between projects.  Then it became part of Bader UI, a collection of React components implementing some basic UI widgets.  Now it's being moved out into its own module which concentrates on just the CSS without any dependency on React."}),a("p",{children:"One of the reasons that I'm moving it into a new module is because it gives me the opportunity to break backwards compatibility.  There are some things that, given the chance to do again, I would do differently. This gives me that chance and hopefully I won't make too many bad decisions that I later come to regret.  But until I've had a chance to eat my own dog food and build a few sites with it, I can't predict what's going to work well and what isn't."}),a("p",{children:"I'm also migrating everything to use modern CSS techniques which are now well supported by browsers.  That means that a lot of things that were previously hard become much easier.  But different."}),a("p",{children:"As a result, this module is still in a state of flux.  If you build anything with it now then there's a good chance that something will break in the near future."}),a("h2",{children:"Opinionated and Selfish Software"}),u("p",{children:["This is based on my personal collection of CSS styles and utility classes that I use on a daily basis in my job building web sites for clients. It's Open Source and you're welcome to use it but be aware that it's something that I built for ",a("em",{children:"me"})," to help"," ",a("em",{children:"me"})," get my job done."]}),a("p",{children:"I didn't build it for you (unless you're one of my clients) and I don't really have the time or inclination to promote it, increase the user base or provide unpaid support for it.  It's not my intention for this to be the next great CSS toolkit - there are plenty of those already. My goal isn't to change the World, only to make it a slightly better place."}),a("p",{children:"So be warned that it does things the way I like to do them.  You may not agree with all my decisions, but that's fine.  They're my decisions to make, not yours.  It's free software (in both senses: free speech and free beer) and if you don't like it then you're entitled to a full refund of the price you paid."}),a("p",{children:"On the plus-side, the Badger-UI toolkit contains a lot of tried and tested techniques for managing web site styles that have been honed over nearly 30 years of experience.  It contains the features that I can't live without when I'm building a web site.  Of course, you may have different ideas about the best way to do it, but this is what works for me.  It's supposed to be a reasonable starting point not the final destination."}),a("h2",{children:"Some Assembly Required"}),a("p",{children:"If you have a good working knowledge of modern CSS and SASS then you should be able to easily adapt it to your needs.  Nearly everything is customisable, either through SASS variables, CSS custom properties, or by using the provided scripts to build your own toolkit."}),u("p",{children:["You don't need to buy in to the whole package.  As well as being customisable it's also modular.  With a small amount of effort you can configure it to include the bits your want and ignore the rest. Or you can browse the source code and borrow the ",a("i",{children:"ideas"})," that you think are useful."]}),a("p",{children:"Just remember that this is aimed more at people who already know how to build web sites and are familiar with CSS. If you're looking for a fully-featured, widely used and well supported UI toolkit that does everything for you then there are plenty of others to choose from."}),a("p",{children:"If you don't like the sound of that then these probably aren't the badgers you're looking for.  You can go about your business. Move along."})]}),pL=Object.freeze(Object.defineProperty({__proto__:null,default:fL},Symbol.toStringTag,{value:"Module"})),gL=()=>u("div",{className:"prose",children:[a("h1",{children:"What's Good About It?"}),a("p",{className:"intro",children:"If you're wondering what makes Badger CSS better than all the other CSS frameworks and UI toolkits out there then the short and simple answer is that it isn't.  It's just another one to add to the pile."}),a("h2",{children:"A Solid Foundation"}),a("p",{children:"Badger CSS is a collection of tools and techniques that I've built up over many years (nearly 30) of building web sites.  It's what works for me and maybe it will work for you too.  But I'm not making any promises."}),a("p",{children:"It's supposed to be a starting point, not a destination.  If you're building a web site and you want a reasonable foundation to build your styles on then it might be better for you than a more fully-featured toolkit that has everything including the kitchen sink."}),a("h2",{children:"Small(ish) and Simple"}),a("p",{children:"The default Badger CSS stylesheet is around 15kb minimised and compressed (around 100kb uncompressed).  That includes all 16 color ranges which you probably aren't ever going to need in practice. If you define your own palette with a limited set of colors then you can reduce the size a fair bit."}),a("h2",{children:"Modern CSS"}),a("p",{children:"It is based on modern CSS techniques and works in all modern browsers. In particular it makes heavy use of CSS custom properties that you can easily change as required. Behind the scenes it is built using SASS (specifically SCSS) which gives you more opportunities for configuring and extending it."}),a("h2",{children:"Color Management"}),u("p",{children:["Badger CSS uses a novel approach to defining and selecting"," ",a(Ie,{to:"/colors/ranges",text:"color ranges"}),".  The color palette was created using ",a("a",{href:"https://abw.github.io/badger-color",children:"Badger Color"})," (which itself was created for this specific task) and you can use it to create your own custom palettes if necessary. The palette data that it generates can be automatically expanded out to SASS component files, ready to be used in Badger CSS."]}),u("p",{children:["You can easily change the hues of the standard palette to match your ",a(Ie,{to:"/colors/brand",text:"brand colors"}),".  It will automatically create greyscale color ranges based on your primary brand color."]}),u("p",{children:["The use of ",a(Ie,{to:"/colors/variables",text:"CSS custom properties"})," ","to define color ranges, and CSS class scopes to select them, makes it easy to create UI components that work automatically with any color range. It also makes it easy to define different color schemes for light and dark themes."]}),a("h2",{children:"Utility Classes"}),u("p",{children:["Badger CSS comes with a core set of"," ",a(Ie,{to:"/utilities",text:"utility classes"})," for ad-hoc styling. They are intentionally limited to the kind of things that I find myself using all the time.  If you prefer the approach of"," ",a("a",{href:"https://tailwindcss.com/",children:"Tailwind"})," that provides CSS classes for absolutely everything then you know where to find it."]}),u("p",{children:["I'm not knocking Tailwind, by the way.  CSS utility classes are an ",a("em",{children:"extremely"}),` useful set of tools to have in your toolkit. I just think they should be limited in their scope and not a replacement for writing "proper" CSS when it's more appropriate to do so.`]}),a("h2",{children:"Form Styling"}),u("p",{children:["Styling ",a(Ie,{to:"/forms",text:"forms"})," is not much fun. I have wasted many hours, days, even weeks of my life trying to get form styling just right and I never want to have to do it again."]}),u("p",{children:["If you've got better things to do than trying to figure out why your ",a("code",{children:"select"})," component is 1 pixel shorter than your text ",a("code",{children:"input"})," component then take a look at what Badger CSS has to offer.  It provides basic styles for all the standard form components and has smoothed over a lot of the problems so you don't have to worry too much about them.  Spend the time you save playing with your kids or flying a kite."]}),a("h2",{children:"UI Components"}),u("p",{children:["Badger CSS has styling for a limited set of UI components (at the time of writing it's ",a("em",{children:"very"})," limited, but more may be coming soon). It's not really supposed to be a complete UI toolkit (because the World already has enough of them), but rather to be a foundation on which UI toolkits can be built."]}),u("p",{children:["Experience has taught me that off-the-shelf UI components (even ones that I've written myself) often need a fair bit of tweaking to match the styling for a particular site.  Sometimes it's easier just to write them from scratch as they're needed.  CSS has come a long way since the days when we relied on toolkits like"," ",a("a",{href:"https://getbootstrap.com/",children:"Bootstrap"})," to provide a consistent cross-browser experience.  Hopefully I will never again have to go searching through the Bootstrap source to figure out how they worked around a particular problem with IE."]}),a("p",{children:"At the very least, I won't be adding many more UI components until a) I've made it easy to select only the components that you want for a particular site and b) when I've convinced myself that something can be added that's sufficiently generic to warrant inclusion.  Watch this space."})]}),mL=Object.freeze(Object.defineProperty({__proto__:null,default:gL},Symbol.toStringTag,{value:"Module"})),vL=`<link
  rel="stylesheet"
  href="https://unpkg.com/@abw/badger-css/dist/styles/badger.min.css"
/>`,yL=`## using npm
$ npm add -D @abw/badger-css

## using yarn
$ yarn add -D @abw/badger-css

## using pnpm
$ pnpm add -D @abw/badger-css`,bL="import '@abw/badger-css/styles/badger.min.css';",wL="@import '@abw/badger-css/styles/badger.scss';",xL=`$ git clone https://github.com/abw/badger-css.git
$ cd badger-css
$ sass styles/badger.scss > your-badger-file.css`,SL=()=>u("div",{className:"prose",children:[a("h1",{children:"Installation"}),a("h2",{children:"No Installation Required!"}),u(nt,{children:[u("p",{children:["You don't need to install anything to get starting using Badger CSS in a website.  Simply add the following tag to the"," ",a("code",{children:"<head>"})," section of your web page."]}),a(Pe,{code:vL,caption:"Unpkg Link",language:"html",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Adding to a Javascript Project"}),u(nt,{children:[u("p",{children:["If you want to configure, modify or adapt Badger CSS then you should add ",a("code",{children:"@abw/badger-css"})," to your Javascript project using your favourite package manager.  In most cases you should be able to add it as a development dependency using the ",a("code",{children:"-D"})," option."]}),a(Pe,{code:yL,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Importing the CSS"}),u(nt,{children:[u("div",{children:[a("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script like so:"}),u("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",a("code",{children:"node_modules"})," directory."]})]}),a(Pe,{code:bL,caption:"Importing CSS",language:"js",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Importing the SCSS"}),u(nt,{children:[u("div",{children:[a("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components.  This gives you the flexibility to configure the default options, or to pick and choose which components you want to include."}),a("p",{children:"Add the following line to your main SCSS stylesheet source."})]}),a(Pe,{code:wL,caption:"Importing SCSS",language:"scss",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Going it Alone"}),u(nt,{children:[u("p",{children:["If you're not using Javascript but want to play with the SCSS source files then you can check out the project repository from Github and run ",a("code",{children:"sass"})," to compile the source files into CSS."]}),a(Pe,{code:xL,caption:"CSS from SASS",language:"shell",className:"mar-b-8",expand:!0})]})]}),kL=Object.freeze(Object.defineProperty({__proto__:null,default:SL},Symbol.toStringTag,{value:"Module"})),CL=e=>j.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 717 337",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},j.createElement("path",{className:"white",d:"M248.362,204.8C251.303,208.841 251.506,216.92 246.886,220.486C247.235,215.811 245.076,210.416 243.385,207.987C242.142,206.2 237.32,201.909 232.525,201.457C236.319,199.212 245.27,200.55 248.362,204.8ZM380.931,288.851C382.012,292.919 365.895,290.457 365.767,303.096C365.703,309.466 368.575,313.608 364.949,314.116C360.977,314.673 360.493,310.692 359.8,305.449C358.316,294.227 366.194,290.723 373.729,288.466C380.03,286.58 380.512,287.273 380.931,288.851ZM250.509,198.166C250.116,197.944 249.715,197.73 249.306,197.524C237.097,191.351 222.986,194.646 217.814,204.876C213.744,212.926 216.415,222.888 223.688,229.775C220.646,228.505 217.677,226.862 214.911,224.779C198.663,212.542 195.441,190.333 199.289,185.248C202.588,180.888 226.299,177.823 242.548,190.06C245.688,192.424 248.324,195.199 250.509,198.166ZM234.492,31.758C231.75,33.423 225.901,22.543 215.941,24.48C210.088,25.619 206.755,23.124 210.523,20.119C221.225,11.585 239.546,28.689 234.492,31.758ZM99.149,58.412C89.72,51.898 79.11,48.569 67.051,51.951C58.397,54.378 52.734,60.065 49.994,67.45C48.707,67.555 47.4,67.691 46.084,67.853C38.149,68.832 29.859,70.741 23.646,72.288C42.126,47.476 64.861,38.817 87.003,38.714L88.566,38.707L88.864,37.173C90.304,29.757 86.13,22.597 75.216,17.044C99.723,11.821 129.948,17.277 146.178,26.501L148.305,27.709L148.955,25.351C149.908,21.892 149.675,13.343 143.798,5.723C174.533,11.177 197.842,21.068 216.166,33.985C250.062,62.777 267.98,100.361 283.213,136.181C299.907,175.44 313.396,212.581 341.026,233.82C341.522,234.342 342.023,234.861 342.528,235.377C350.993,244.039 366.478,256.93 385.23,273.49C387.358,275.369 389.327,277.224 391.08,279.038C386.966,279.245 381.675,280.641 374.911,282.18C352.689,287.237 351.849,297.009 354.41,312.963C355.723,321.141 359.376,324.914 364.644,326.161C344.448,331.711 334.138,335.299 309.216,330.594C270.323,323.25 233.474,308.826 222.734,303.773C222.54,303.387 222.214,303.065 221.786,302.881C207.397,296.693 197.713,288.82 193.624,279.767C195.586,278.724 197.158,277.535 198.531,276.583C199.395,275.985 199.61,274.797 199.011,273.933C198.412,273.069 197.225,272.854 196.361,273.453C193.368,275.527 189.319,279.035 181.419,278.358C180.371,278.268 179.448,279.046 179.359,280.093C179.269,281.14 180.046,282.063 181.094,282.153C184.73,282.464 187.673,282.036 190.117,281.255C194.043,289.991 202.664,297.858 215.527,304.192C190.321,313.397 168.064,307.288 148.128,295.655C126.82,283.221 108.129,264.526 91.308,250.982C77.307,239.708 64.463,232.065 52.581,233.695C45.172,234.711 38.017,239.243 31.166,248.886C20.017,224.385 34.815,199.803 49.449,184.213L50.995,182.566L49.11,181.321C34.813,171.879 18.601,177.687 7.799,189.755C6.995,180.056 11.532,165.892 18.973,152.99C26.481,139.972 37,128.18 48.427,123.711C118.961,110.252 153.156,169.713 188.827,221.409C209.775,251.767 256.49,287.586 345.223,316.241C340.436,301.054 342.628,293.783 346.067,286.802C324.7,276.815 298.269,260.277 280.877,228.797C233.283,142.653 212.43,81.347 143.665,64.082C131.685,61.074 116.053,57.87 99.149,58.412ZM99.066,72.542C97.614,80.151 74.887,58.073 70.407,69.969C62.107,92.007 54.173,79.428 56.142,73.447C66.246,42.754 100.4,65.551 99.066,72.542Z",style:{fill:"white"}}),j.createElement("path",{className:"black",d:"M48.845,71.376C48.085,71.452 47.319,71.538 46.55,71.633C36.384,72.888 25.625,75.704 19.567,77.251L14.706,78.493L17.519,74.338C36.933,45.669 61.411,35.483 85.316,34.929C85.679,28.465 80.142,22.804 68.715,18.305L63.513,16.258L68.883,14.704C94.004,7.433 126.953,12.429 145.602,21.872C145.715,17.476 143.99,10.119 137.262,4.358L132.173,0L138.793,1.03C164.858,5.083 185.888,12.137 203.193,21.438C203.366,21.5 203.539,21.563 203.712,21.626C205.114,17.121 209.176,13.252 216.656,13.924C236.466,15.704 240.708,25.62 241.751,43.904C266.891,65.236 284.026,95.363 297.467,125.916C309.511,153.29 318.589,181.001 327.822,202.999C331.443,211.626 335.086,219.374 338.942,225.872C340.965,228.196 343.066,230.479 345.252,232.715C353.685,241.344 369.071,254.139 387.751,270.635C391.391,273.849 394.564,277.022 397.067,280.061C399.65,281.424 401.411,284.251 402.569,289.316C402.766,289.952 402.91,290.575 403,291.183C403.044,291.476 403.078,291.773 403.104,292.073C403.406,293.909 403.652,295.979 403.849,298.307C404.631,307.557 401.813,319.773 387.422,323.48C384.617,324.202 381.912,324.872 379.338,325.409C375.566,326.623 372.295,327.675 372.296,327.675C350.779,335.844 336.841,339.686 308.509,334.336C267.627,326.617 228.986,311.137 219.844,306.606C192.192,317.895 167.885,311.593 146.209,298.945C124.732,286.413 105.872,267.6 88.919,253.949C82.285,248.607 75.954,244.066 69.867,241.062C64.049,238.191 58.481,236.73 53.099,237.468C45.892,238.456 39.128,243.397 32.519,253.689L30.774,256.406L29.24,253.565C15.116,227.399 29.491,200.652 45.081,183.337C31.813,176.104 17.177,183.299 8.174,195.3L5.878,198.362L4.821,194.683C1.901,184.524 6.568,166.875 15.674,151.087C21.122,141.64 28.135,132.887 35.912,126.766C24.827,130.039 12.898,135.014 0,141.953C13.007,107.592 30.082,86.63 48.343,74.289C48.468,73.299 48.636,72.327 48.845,71.376ZM248.362,204.8C245.27,200.55 236.319,199.212 232.525,201.457C237.32,201.909 242.142,206.2 243.385,207.987C245.076,210.416 247.235,215.811 246.886,220.486C251.506,216.92 251.303,208.841 248.362,204.8ZM380.931,288.851C380.512,287.273 380.03,286.58 373.729,288.466C366.194,290.723 358.316,294.227 359.8,305.449C360.493,310.692 360.977,314.673 364.949,314.116C368.575,313.608 365.703,309.466 365.767,303.096C365.895,290.457 382.012,292.919 380.931,288.851ZM250.509,198.166C248.324,195.199 245.688,192.424 242.548,190.06C226.299,177.823 202.588,180.888 199.289,185.248C195.441,190.333 198.663,212.542 214.911,224.779C217.677,226.862 220.646,228.505 223.688,229.775C216.415,222.888 213.744,212.926 217.814,204.876C222.986,194.646 237.097,191.351 249.306,197.524C249.715,197.73 250.116,197.944 250.509,198.166ZM234.492,31.758C239.546,28.689 221.225,11.585 210.523,20.119C206.755,23.124 210.088,25.619 215.941,24.48C225.901,22.543 231.75,33.423 234.492,31.758ZM99.149,58.412C116.053,57.87 131.685,61.074 143.665,64.082C212.43,81.347 233.283,142.653 280.877,228.797C298.269,260.277 324.7,276.815 346.067,286.802C342.628,293.783 340.436,301.054 345.223,316.241C256.49,287.586 209.775,251.767 188.827,221.409C153.156,169.713 118.961,110.252 48.427,123.711C37,128.18 26.481,139.972 18.973,152.99C11.532,165.892 6.995,180.056 7.799,189.755C18.601,177.687 34.813,171.879 49.11,181.321L50.995,182.566L49.449,184.213C34.815,199.803 20.017,224.385 31.166,248.886C38.017,239.243 45.172,234.711 52.581,233.695C64.463,232.065 77.307,239.708 91.308,250.982C108.129,264.526 126.82,283.221 148.128,295.655C168.064,307.288 190.321,313.397 215.527,304.192C202.664,297.858 194.043,289.991 190.117,281.255C187.673,282.036 184.73,282.464 181.094,282.153C180.046,282.063 179.269,281.14 179.359,280.093C179.448,279.046 180.371,278.268 181.419,278.358C189.319,279.035 193.368,275.527 196.361,273.453C197.225,272.854 198.412,273.069 199.011,273.933C199.61,274.797 199.395,275.985 198.531,276.583C197.158,277.535 195.586,278.724 193.624,279.767C197.713,288.82 207.397,296.693 221.786,302.881C222.214,303.065 222.54,303.387 222.734,303.773C233.474,308.826 270.323,323.25 309.216,330.594C334.138,335.299 344.448,331.711 364.644,326.161C359.376,324.914 355.723,321.141 354.41,312.963C351.849,297.009 352.689,287.237 374.911,282.18C381.675,280.641 386.966,279.245 391.08,279.038C389.327,277.224 387.358,275.369 385.23,273.49C366.478,256.93 350.993,244.039 342.528,235.377C342.023,234.861 341.522,234.342 341.026,233.82C313.396,212.581 299.907,175.44 283.213,136.181C267.98,100.361 250.062,62.777 216.166,33.985C197.842,21.068 174.533,11.177 143.798,5.723C149.675,13.343 149.908,21.892 148.955,25.351L148.305,27.709L146.178,26.501C129.948,17.277 99.723,11.821 75.216,17.044C86.13,22.597 90.304,29.757 88.864,37.173L88.566,38.707L87.003,38.714C64.861,38.817 42.126,47.476 23.646,72.288C29.859,70.741 38.149,68.832 46.084,67.853C47.4,67.691 48.707,67.555 49.994,67.45C52.734,60.065 58.397,54.378 67.051,51.951C79.11,48.569 89.72,51.898 99.149,58.412ZM99.066,72.542C100.4,65.551 66.246,42.754 56.142,73.447C54.173,79.428 62.107,92.007 70.407,69.969C74.887,58.073 97.614,80.151 99.066,72.542Z"}),j.createElement("path",{className:"badger",d:"M347.242,14.148C348.016,13.915 349.256,13.664 350.96,13.392C352.664,13.121 354.406,12.986 356.188,12.986C357.892,12.986 359.421,13.102 360.777,13.334C362.132,13.567 363.274,14.031 364.204,14.729C365.133,15.426 365.83,16.374 366.295,17.575C366.76,18.775 366.992,20.344 366.992,22.28L366.992,33.666C368.928,32.891 370.768,32.349 372.511,32.039C374.253,31.729 376.17,31.574 378.261,31.574C381.979,31.574 385.503,32.233 388.834,33.549C392.164,34.866 395.107,36.783 397.663,39.3C400.219,41.817 402.233,44.935 403.704,48.653C405.176,52.37 405.912,56.669 405.912,61.548C405.912,66.583 405.157,70.978 403.646,74.735C402.136,78.491 400.025,81.608 397.315,84.087C394.604,86.565 391.293,88.444 387.381,89.722C383.47,90.999 379.152,91.638 374.428,91.638C369.316,91.638 364.978,91.038 361.416,89.838C357.853,88.637 354.832,87.146 352.354,85.365C348.946,82.964 347.242,79.866 347.242,76.071L347.242,14.148ZM374.428,76.071C377.99,76.071 380.759,74.851 382.734,72.411C384.709,69.971 385.697,66.35 385.697,61.548C385.697,56.669 384.69,53.029 382.676,50.628C380.662,48.227 377.952,47.026 374.544,47.026C372.995,47.026 371.659,47.181 370.536,47.491C369.413,47.801 368.193,48.265 366.876,48.885L366.876,74.212C367.728,74.754 368.754,75.199 369.955,75.548C371.155,75.896 372.646,76.071 374.428,76.071ZM439.023,31.574C443.205,31.574 447.02,32 450.466,32.852C453.913,33.704 456.856,35.002 459.296,36.744C461.735,38.487 463.614,40.694 464.93,43.366C466.247,46.039 466.905,49.195 466.905,52.835L466.905,78.859C466.905,80.873 466.344,82.518 465.221,83.796C464.098,85.074 462.762,86.178 461.213,87.108C456.178,90.128 449.091,91.638 439.952,91.638C435.847,91.638 432.149,91.251 428.857,90.477C425.565,89.702 422.738,88.54 420.376,86.991C418.014,85.442 416.194,83.467 414.916,81.066C413.638,78.665 412.999,75.877 412.999,72.701C412.999,67.357 414.586,63.252 417.762,60.387C420.938,57.521 425.856,55.739 432.517,55.042L447.736,53.416L447.736,52.603C447.736,50.356 446.748,48.749 444.773,47.781C442.798,46.813 439.952,46.329 436.234,46.329C433.291,46.329 430.425,46.639 427.637,47.258C424.849,47.878 422.332,48.653 420.086,49.582C419.079,48.885 418.227,47.82 417.53,46.387C416.833,44.954 416.484,43.463 416.484,41.914C416.484,39.9 416.968,38.293 417.936,37.093C418.904,35.892 420.395,34.866 422.409,34.014C424.655,33.162 427.308,32.542 430.367,32.155C433.427,31.768 436.312,31.574 439.023,31.574ZM439.952,77.232C441.269,77.232 442.721,77.097 444.309,76.826C445.896,76.555 447.078,76.187 447.852,75.722L447.852,66.428L439.487,67.125C437.319,67.28 435.537,67.744 434.143,68.519C432.749,69.294 432.052,70.455 432.052,72.004C432.052,73.553 432.652,74.812 433.853,75.78C435.053,76.748 437.086,77.232 439.952,77.232ZM476.548,61.548C476.548,56.436 477.323,52.002 478.872,48.246C480.421,44.489 482.57,41.372 485.32,38.894C488.069,36.415 491.283,34.576 494.962,33.375C498.641,32.175 502.611,31.574 506.871,31.574C508.42,31.574 509.93,31.71 511.402,31.981C512.873,32.252 514.074,32.581 515.003,32.968L515.003,14.148C515.778,13.915 517.017,13.664 518.721,13.392C520.425,13.121 522.167,12.986 523.949,12.986C525.653,12.986 527.182,13.102 528.538,13.334C529.893,13.567 531.036,14.031 531.965,14.729C532.895,15.426 533.592,16.374 534.056,17.575C534.521,18.775 534.753,20.344 534.753,22.28L534.753,77.349C534.753,80.989 533.049,83.893 529.642,86.062C527.395,87.533 524.491,88.831 520.928,89.954C517.365,91.077 513.26,91.638 508.613,91.638C503.579,91.638 499.067,90.941 495.079,89.547C491.09,88.153 487.721,86.139 484.971,83.506C482.222,80.873 480.13,77.716 478.697,74.037C477.265,70.358 476.548,66.195 476.548,61.548ZM509.543,47.026C505.36,47.026 502.146,48.227 499.9,50.628C497.654,53.029 496.531,56.669 496.531,61.548C496.531,66.35 497.576,69.971 499.668,72.411C501.759,74.851 504.779,76.071 508.73,76.071C510.124,76.071 511.382,75.858 512.505,75.432C513.628,75.006 514.5,74.522 515.119,73.979L515.119,48.42C513.57,47.491 511.711,47.026 509.543,47.026ZM574.603,31.574C579.017,31.574 583.025,32.136 586.627,33.259C590.228,34.382 593.268,35.834 595.747,37.616C597.296,38.7 598.516,39.9 599.407,41.217C600.297,42.534 600.743,44.238 600.743,46.329L600.743,86.991C600.743,91.096 599.968,94.64 598.419,97.622C596.87,100.604 594.759,103.082 592.087,105.057C589.415,107.032 586.278,108.484 582.677,109.414C579.075,110.343 575.222,110.808 571.117,110.808C564.069,110.808 558.531,109.859 554.504,107.961C550.476,106.064 548.462,102.985 548.462,98.725C548.462,96.944 548.83,95.376 549.566,94.02C550.302,92.665 551.135,91.638 552.064,90.941C554.31,92.181 556.847,93.226 559.674,94.078C562.501,94.93 565.424,95.356 568.445,95.356C572.627,95.356 575.958,94.659 578.436,93.265C580.915,91.871 582.154,89.625 582.154,86.527L582.154,84.668C578.979,86.062 575.106,86.759 570.536,86.759C567.051,86.759 563.74,86.236 560.603,85.191C557.466,84.145 554.717,82.518 552.354,80.311C549.992,78.104 548.095,75.257 546.662,71.772C545.229,68.287 544.512,64.143 544.512,59.341C544.512,54.616 545.268,50.511 546.778,47.026C548.288,43.541 550.379,40.656 553.051,38.371C555.724,36.086 558.899,34.382 562.578,33.259C566.257,32.136 570.265,31.574 574.603,31.574ZM581.806,48.42C581.263,48.11 580.47,47.801 579.424,47.491C578.378,47.181 577.081,47.026 575.532,47.026C571.737,47.026 568.89,48.091 566.993,50.221C565.095,52.351 564.146,55.391 564.146,59.341C564.146,63.833 565.095,67.067 566.993,69.042C568.89,71.017 571.311,72.004 574.254,72.004C577.43,72.004 579.947,71.269 581.806,69.797L581.806,48.42ZM642.799,91.638C638.229,91.638 633.989,90.999 630.078,89.722C626.166,88.444 622.758,86.527 619.854,83.971C616.949,81.415 614.665,78.201 612.999,74.328C611.334,70.455 610.502,65.924 610.502,60.735C610.502,55.623 611.334,51.228 612.999,47.549C614.665,43.87 616.853,40.849 619.563,38.487C622.274,36.125 625.372,34.382 628.858,33.259C632.343,32.136 635.906,31.574 639.546,31.574C643.651,31.574 647.388,32.194 650.757,33.433C654.126,34.672 657.031,36.376 659.471,38.545C661.91,40.714 663.808,43.308 665.163,46.329C666.519,49.35 667.197,52.641 667.197,56.204C667.197,58.837 666.461,60.851 664.989,62.245C663.518,63.64 661.465,64.53 658.832,64.917L630.136,69.216C630.988,71.772 632.73,73.689 635.364,74.967C637.997,76.245 641.018,76.884 644.426,76.884C647.601,76.884 650.602,76.477 653.429,75.664C656.256,74.851 658.561,73.902 660.342,72.818C661.581,73.592 662.627,74.676 663.479,76.071C664.331,77.465 664.757,78.936 664.757,80.485C664.757,83.971 663.13,86.565 659.877,88.269C657.399,89.586 654.611,90.477 651.512,90.941C648.414,91.406 645.51,91.638 642.799,91.638ZM639.546,45.98C637.687,45.98 636.08,46.29 634.725,46.91C633.369,47.529 632.266,48.323 631.414,49.292C630.562,50.26 629.923,51.344 629.497,52.545C629.071,53.745 628.819,54.965 628.742,56.204L648.608,52.951C648.376,51.402 647.524,49.853 646.052,48.304C644.581,46.755 642.412,45.98 639.546,45.98ZM696.473,89.663C695.699,89.896 694.479,90.128 692.814,90.36C691.149,90.593 689.425,90.709 687.644,90.709C685.94,90.709 684.41,90.593 683.055,90.36C681.699,90.128 680.557,89.663 679.628,88.966C678.698,88.269 677.982,87.321 677.478,86.12C676.975,84.919 676.723,83.351 676.723,81.415L676.723,46.561C676.723,44.78 677.052,43.25 677.711,41.972C678.369,40.694 679.318,39.552 680.557,38.545C681.796,37.538 683.326,36.628 685.146,35.815C686.966,35.002 688.922,34.285 691.013,33.666C693.104,33.046 695.273,32.562 697.519,32.213C699.765,31.865 702.011,31.691 704.257,31.691C707.975,31.691 710.918,32.407 713.087,33.84C715.256,35.273 716.34,37.616 716.34,40.869C716.34,41.953 716.185,43.018 715.875,44.063C715.565,45.109 715.178,46.058 714.713,46.91C713.087,46.91 711.422,46.987 709.718,47.142C708.014,47.297 706.349,47.529 704.722,47.839C703.096,48.149 701.566,48.478 700.133,48.827C698.7,49.175 697.48,49.582 696.473,50.047L696.473,89.663Z"}),j.createElement("path",{className:"css",d:"M586.337,162.306C584.4,162.306 582.561,162.616 580.818,163.236C579.075,163.855 577.565,164.765 576.287,165.966C575.009,167.166 573.983,168.657 573.208,170.439C572.434,172.22 572.047,174.311 572.047,176.712C572.047,181.514 573.421,185.116 576.171,187.517C578.92,189.918 582.27,191.119 586.22,191.119C588.544,191.119 590.558,190.847 592.262,190.305C593.966,189.763 595.476,189.182 596.793,188.563C598.342,189.647 599.503,190.828 600.278,192.106C601.052,193.384 601.44,194.914 601.44,196.695C601.44,199.871 599.929,202.33 596.909,204.072C593.888,205.815 589.706,206.686 584.361,206.686C579.482,206.686 575.067,205.97 571.117,204.537C567.167,203.104 563.779,201.09 560.952,198.496C558.125,195.901 555.937,192.784 554.388,189.143C552.838,185.503 552.064,181.476 552.064,177.061C552.064,171.949 552.897,167.476 554.562,163.642C556.227,159.809 558.492,156.652 561.358,154.174C564.224,151.695 567.535,149.837 571.291,148.597C575.048,147.358 579.017,146.738 583.2,146.738C588.776,146.738 593.075,147.745 596.095,149.759C599.116,151.773 600.626,154.367 600.626,157.543C600.626,159.015 600.278,160.389 599.581,161.667C598.884,162.945 598.071,164.049 597.141,164.978C595.824,164.359 594.237,163.759 592.378,163.178C590.519,162.597 588.505,162.306 586.337,162.306ZM657.786,188.098C657.786,193.984 655.579,198.593 651.164,201.923C646.749,205.254 640.243,206.919 631.646,206.919C628.393,206.919 625.372,206.686 622.584,206.222C619.796,205.757 617.414,205.041 615.439,204.072C613.464,203.104 611.915,201.884 610.792,200.413C609.669,198.941 609.107,197.199 609.107,195.185C609.107,193.326 609.495,191.758 610.269,190.48C611.044,189.202 611.973,188.137 613.057,187.285C615.304,188.524 617.879,189.628 620.783,190.596C623.688,191.564 627.038,192.048 630.833,192.048C633.234,192.048 635.073,191.699 636.351,191.002C637.629,190.305 638.268,189.376 638.268,188.214C638.268,187.13 637.803,186.278 636.874,185.658C635.945,185.039 634.396,184.535 632.227,184.148L628.742,183.451C622.003,182.134 616.988,180.062 613.696,177.235C610.405,174.408 608.759,170.361 608.759,165.095C608.759,162.229 609.379,159.634 610.618,157.311C611.857,154.987 613.6,153.051 615.846,151.502C618.092,149.953 620.783,148.752 623.92,147.9C627.057,147.048 630.523,146.622 634.318,146.622C637.184,146.622 639.875,146.835 642.392,147.261C644.91,147.687 647.098,148.326 648.957,149.178C650.815,150.03 652.287,151.134 653.371,152.489C654.456,153.845 654.998,155.452 654.998,157.311C654.998,159.092 654.669,160.622 654.01,161.9C653.352,163.178 652.519,164.243 651.512,165.095C650.893,164.707 649.963,164.301 648.724,163.875C647.485,163.449 646.13,163.061 644.658,162.713C643.186,162.364 641.695,162.074 640.185,161.842C638.675,161.609 637.3,161.493 636.061,161.493C633.505,161.493 631.53,161.784 630.136,162.364C628.742,162.945 628.044,163.855 628.044,165.095C628.044,165.947 628.432,166.644 629.206,167.186C629.981,167.728 631.452,168.231 633.621,168.696L637.223,169.509C644.658,171.213 649.944,173.556 653.081,176.538C656.218,179.52 657.786,183.373 657.786,188.098ZM714.946,188.098C714.946,193.984 712.738,198.593 708.324,201.923C703.909,205.254 697.403,206.919 688.806,206.919C685.553,206.919 682.532,206.686 679.744,206.222C676.955,205.757 674.574,205.041 672.599,204.072C670.624,203.104 669.075,201.884 667.952,200.413C666.829,198.941 666.267,197.199 666.267,195.185C666.267,193.326 666.654,191.758 667.429,190.48C668.203,189.202 669.133,188.137 670.217,187.285C672.463,188.524 675.039,189.628 677.943,190.596C680.847,191.564 684.197,192.048 687.992,192.048C690.393,192.048 692.233,191.699 693.511,191.002C694.789,190.305 695.428,189.376 695.428,188.214C695.428,187.13 694.963,186.278 694.034,185.658C693.104,185.039 691.555,184.535 689.387,184.148L685.901,183.451C679.163,182.134 674.148,180.062 670.856,177.235C667.564,174.408 665.919,170.361 665.919,165.095C665.919,162.229 666.538,159.634 667.777,157.311C669.017,154.987 670.759,153.051 673.005,151.502C675.252,149.953 677.943,148.752 681.08,147.9C684.217,147.048 687.683,146.622 691.478,146.622C694.343,146.622 697.035,146.835 699.552,147.261C702.069,147.687 704.257,148.326 706.116,149.178C707.975,150.03 709.447,151.134 710.531,152.489C711.615,153.845 712.157,155.452 712.157,157.311C712.157,159.092 711.828,160.622 711.17,161.9C710.512,163.178 709.679,164.243 708.672,165.095C708.053,164.707 707.123,164.301 705.884,163.875C704.645,163.449 703.289,163.061 701.818,162.713C700.346,162.364 698.855,162.074 697.345,161.842C695.834,161.609 694.46,161.493 693.22,161.493C690.665,161.493 688.689,161.784 687.295,162.364C685.901,162.945 685.204,163.855 685.204,165.095C685.204,165.947 685.591,166.644 686.366,167.186C687.14,167.728 688.612,168.231 690.781,168.696L694.382,169.509C701.818,171.213 707.104,173.556 710.241,176.538C713.377,179.52 714.946,183.373 714.946,188.098Z"})),_L=()=>a("div",{children:u("div",{className:"mobile block-center pad-t-8",children:[a(CL,{className:"badger-css"}),a("h1",{className:"intro mar-t-8",children:"Modern, minimal CSS presets"}),u("p",{children:["You've probably heard of CSS ",a("b",{children:"reset"})," stylesheets that provide sensible defaults for HTML elements to smooth out some of the inconsistencies between browsers.  And no doubt you're aware of the plethora of fully-featured CSS ",a("b",{children:"toolkits"})," that implement all manner of styles for UI components."]}),u("p",{children:["Badger CSS sits somewhere between the two.  It provides some sensible"," ",a("b",{children:"presets"})," for HTML elements that you can use out of the box and expect to get reasonable results.  It's highly configurable and is really designed to be a starting point for building your own CSS stylesheets, design systems and UI toolkits."]}),u("div",{className:"grid-2 gap-2",children:[a(Ie,{to:"demo",text:"Demo",className:"brand button Xbdr-tl-4"}),a(Ie,{to:"getting-started/installation",text:"Getting Started",className:"brand button Xbdr-tr-4"}),a(Ie,{to:"getting-started/good",text:"What's Good?",className:"brand button Xbdr-bl-4"}),a(Ie,{to:"getting-started/bad",text:"What's Bad?",className:"brand button Xbdr-br-4"})]})]})}),TL=Object.freeze(Object.defineProperty({__proto__:null,default:_L},Symbol.toStringTag,{value:"Module"})),$L=`<div class="block-left width-12rem border pad-2">
  Block left
</div>
<div class="block-center width-12rem border pad-2 mar-t-4">
  Block center
</div>
<div class="block-right width-12rem border pad-2 mar-t-4">
  Block right
</div>
`,EL=`<div class="text-left border pad-2 mar-b-2">
  Text on the left
</div>
<div class="text-center border pad-2 mar-b-2">
  Text in the center
</div>
<div class="text-right border pad-2">
  Text on the right
</div>`,NL=`<div class="text-right border pad-4">
  Text on the right
  <div class="text-left border pad-2 mar-v-2">
    Text on the left
  </div>
  Text on the right
</div>`,IL=()=>u("div",{className:"prose",children:[a("h1",{children:"Alignment"}),a("h2",{children:"Text Alignment"}),u("p",{children:["Add the ",a("code",{children:"text-left"}),", ",a("code",{children:"text-center"})," and"," ",a("code",{children:"text-right"})," CSS classes to set the text alignment."]}),a(F,{html:EL,caption:"Text Alignment",expand:!0}),u("p",{children:["Text is aligned left by default making the ",a("code",{children:"text-left"})," ","class ",a("em",{children:"mostly"})," redundant.  However it can be useful to reset the alignment to the left for a block that would otherwise be aligned centrally or to the right"]}),a(F,{html:NL,caption:"Text Left",expand:!0}),a("h2",{children:"Block Alignment"}),u("p",{children:["Add the ",a("code",{children:"block-left"}),", ",a("code",{children:"block-center"})," and"," ",a("code",{children:"block-right"})," CSS classes to align a block to the left, in the center, or on the right, respectively."]}),u("p",{children:["You'll need to set a block width to stop it from expanding to fill the full width of the parent element.  You can do that using one of the"," ",a(Ie,{to:"/utilities/widths",text:"width-*"})," utility classes."]}),a(F,{html:$L,caption:"Block Alignment",expand:!0})]}),LL=Object.freeze(Object.defineProperty({__proto__:null,default:IL},Symbol.toStringTag,{value:"Module"})),RL=`<div class="border pad-4">
  This element has a border.
</div>
`,PL=`<div class="grid-1 gap-2">
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
</div>`,ML=`<div class="grid-2 gap-2">
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
`,FL=`<div class="border pad-4 mar-b-2">
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
`,AL=`<div class="grid-3 gap-4 pad-t-2">
  <button class="brand solid">default</button>
  <button class="brand solid bdr-0">bdr-0</button>
  <button class="brand solid square">square</button>
</div>
<div class="grid-3 gap-4 pad-t-2">
  <input type="text" value="default">
  <input type="text" value="bdr-0" class="bdr-0">
  <input type="text" value="square" class="square">
</div>
`,OL=`<div class="bdr-6 surface-1 pad-2 border grid-1 gap-2">
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
</div>`,DL=`<style>
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
`,BL=`// define your own $border-width-values...
$border-width-values: 1, 2, 3, 5, 8, 13, 21, 34;
// ...and/or set the $border-width-prefix...
$border-width-prefix: 'br-wd';

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,jL=`// define your own $border-radius-values...
$border-radius-values: 1, 2, 3, 5, 8, 13, 21, 34;
// ...and/or set the $border-width-prefix...
$border-radius-prefix: 'br-rd';

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,zL=`<div class="grid-1 gap-4">
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
</div>`,UL=({properties:e})=>u("table",{className:"brand celled striped properties wide",children:[a("thead",{children:u("tr",{children:[a("th",{children:"Property"}),a("th",{children:"Default"}),a("th",{children:"Description"})]})}),a("tbody",{children:e.map(t=>u("tr",{children:[a("td",{className:"key nowrap",children:a("code",{children:t[0]})}),a("td",{className:"nowrap",children:t[1]}),a("td",{children:t[2]})]},t[0]))})]}),WL=({sets:e})=>a("div",{className:`grid-${e.length} gap-8 stack-desktop mar-b-8`,children:e.map(t=>u("div",{children:[a("h4",{className:"mar-b-2",children:t.title}),a(UL,{properties:t.properties}),!!t.notes&&a("div",{className:"smallish info alert",children:t.notes})]},t.title))}),HL=()=>u("div",{className:"prose",children:[a("h1",{children:"Borders"}),a("h2",{children:"Border Class"}),u("p",{children:["Add the ",a("code",{children:"border"})," CSS class to an element to give it a border."]}),a(F,{html:RL,caption:"Border",expand:!0}),a("h2",{children:"Border Width"}),u("p",{children:["Add the ",a("code",{children:"bdw-N"})," CSS class to set the border width, where"," ",a("code",{children:"N"})," is in pixel units."]}),a(F,{html:PL,caption:"Border Width",expand:!0}),u("div",{className:"grid-2 gap-8 stack-desktop",children:[u("div",{children:[u("p",{children:["The pre-defined values for ",a("code",{children:"N"})," are"," ",a("code",{children:"0"}),", ",a("code",{children:"1"}),", ",a("code",{children:"2"}),", ",a("code",{children:"3"}),","," ",a("code",{children:"4"}),", ",a("code",{children:"5"}),", ",a("code",{children:"6"}),", ",a("code",{children:"8"})," and"," ",a("code",{children:"10"}),"."]}),u("p",{children:["You can set the ",a("code",{children:"$border-width-values"})," SCSS variable if you want to define a different set of values. You can also use the ",a("code",{children:"$border-width-prefix"})," to define a different prefix for the border width classes if you don't like ",a("code",{children:"bdw"}),"."]}),u("p",{children:["In the example shown here the generated CSS classes would be"," ",a("code",{children:"br-wd-1"}),", ",a("code",{children:"br-wd-2"}),","," ",a("code",{children:"br-wd-3"}),", ",a("code",{children:"br-wd-5"})," and so on."]})]}),a(Pe,{code:BL,caption:"Custom Border Widths",language:"scss",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Border Color"}),u("p",{children:["Add the ",a("code",{children:"bdc-N"})," CSS class to set the border color, where"," ",a("code",{children:"N"})," is a color stop (0, 5, 10, etc) for the current color range."]}),a(F,{html:ML,caption:"Border Color"}),a("h2",{children:"Border Radius"}),u("p",{children:["Add the ",a("code",{children:"bdr-N"})," classes to set the radius of borders. The ",a("code",{children:"-N"})," multiplier is a multiple of the base unit radius (0.25rem by default)."]}),a(F,{html:FL,caption:"Border Radius",expand:!0}),u("p",{children:["The ",a("code",{children:"bdr-0"})," class can be used to ",a("i",{children:"explicitly"})," set the border radius to 0. The ",a("code",{children:"square"})," class is an alias for"," ",a("code",{children:"bdr-0"})," with the added benefit of having the"," ",a("code",{children:"!important"})," flag set for when you really need to drive the point home."]}),a("p",{children:"They can be used to remove the corner radius from components which have them by default, like buttons and form fields."}),a(F,{html:AL,caption:"Square Corners",expand:!0}),u("div",{className:"grid-2 gap-8 stack-desktop",children:[u("div",{children:[u("p",{children:["The pre-defined values for ",a("code",{children:"N"})," are"," ",a("code",{children:"0"}),", ",a("code",{children:"1"}),", ",a("code",{children:"2"}),", ",a("code",{children:"3"}),","," ",a("code",{children:"4"}),", ",a("code",{children:"5"}),", ",a("code",{children:"6"}),", ",a("code",{children:"8"})," and"," ",a("code",{children:"10"}),"."]}),u("p",{children:["You can set the ",a("code",{children:"$border-radius-values"})," SCSS variable if you want to define a different set of values. You can also use the ",a("code",{children:"$border-radius-prefix"})," to define a different prefix for the border radius classes if you don't like ",a("code",{children:"bdr"}),"."]}),u("p",{children:["In the example shown here the generated CSS classes would be"," ",a("code",{children:"br-rd-1"}),", ",a("code",{children:"br-rd-2"}),","," ",a("code",{children:"br-rd-3"}),", ",a("code",{children:"br-rd-5"})," and so on."]})]}),a(Pe,{code:jL,caption:"Custom Border Radius",language:"scss",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Border Radius Corners"}),a("p",{children:"You can independently set the radius for different corners using these classes."}),u("div",{className:"grid-2 gap-8 stack-desktop",children:[u("table",{className:"brand border lined striped mar-b-8",children:[a("thead",{children:u("tr",{children:[a("th",{children:"Class"}),a("th",{children:"Description"})]})}),u("tbody",{children:[u("tr",{children:[a("td",{children:a("code",{children:"bdr-t-N"})}),a("td",{children:"Top left and top right corner radius"})]}),u("tr",{children:[a("td",{children:a("code",{children:"bdr-b-N"})}),a("td",{children:"Bottom left and bottom right corner radius"})]}),u("tr",{children:[a("td",{children:a("code",{children:"bdr-l-N"})}),a("td",{children:"Top left and bottom left corner radius"})]}),u("tr",{children:[a("td",{children:a("code",{children:"bdr-r-N"})}),a("td",{children:"Top right and bottom right corner radius"})]}),u("tr",{children:[a("td",{children:a("code",{children:"bdr-tl-N"})}),a("td",{children:"Top left corner radius"})]}),u("tr",{children:[a("td",{children:a("code",{children:"bdr-tr-N"})}),a("td",{children:"Top right corner radius"})]}),u("tr",{children:[a("td",{children:a("code",{children:"bdr-bl-N"})}),a("td",{children:"Bottom left corner radius"})]}),u("tr",{children:[a("td",{children:a("code",{children:"bdr-br-N"})}),a("td",{children:"Bottom right corner radius"})]})]})]}),a("div",{children:u(li,{children:["If you set a custom ",a("code",{children:"$border-radius-prefix"})," as shown above then your CSS classes will start with your chosen prefix instead of ",a("code",{children:"bdr"})," as shown here."]})})]}),a(F,{html:OL,caption:"Border Radius Corners",expand:!0}),a("h2",{children:"No Border Required!"}),u("p",{children:["You don't need to have a border displayed to set the border radius. The ",a("code",{children:"bdr-N"})," classes can be used to set the border radius on various components."]}),a(F,{html:zL,caption:"Radius Components",expand:!0}),a("h2",{children:"Border Properties"}),a("p",{children:"The following properties are used to define the border style."}),a(WL,{sets:[{title:"Defaults",properties:[["--border-width",a("code",{children:"1px"},"1px"),"Border width"],["--border-style",a("code",{children:"solid"},"solid"),u("span",{children:["Border style: ",a("code",{children:"solid"}),", ",a("code",{children:"dotted"}),", ",a("code",{children:"dashed"}),", etc."]},"desc")],["--border-radius",a("code",{children:"var(--unit-radius)"},"radius"),"Border radius"],["--border-color",a("code",{children:"var(--color-75)"},"color"),"Border color from current color range"]]},{title:"Dark Theme",properties:[["--border-color",a("code",{children:"var(--color-25)"},"color"),"Border color from current color range"]]}]}),a("h2",{children:"Setting Custom Properties"}),a(F,{html:DL,caption:"Custom Border Style",expand:!0})]}),GL=Object.freeze(Object.defineProperty({__proto__:null,default:HL},Symbol.toStringTag,{value:"Module"})),VL=`<div class="inline border pad-2">
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
`,YL=()=>u("div",{className:"prose",children:[a("h1",{children:"Display"}),a("h2",{children:"Display Modes"}),u("p",{children:["The ",a("code",{children:"inline"}),", ",a("code",{children:"block"})," and"," ",a("code",{children:"inline-block"})," CSS classes can be used to set the"," ",a("code",{children:"display"})," mode.   These are useful when you have an element that would normally have one display type that you want displayed in a different way."]}),u("p",{children:["See the"," ",a(Ie,{to:"/utilities/flexbox",text:"flexbox"})," and"," ",a(Ie,{to:"/utilities/grid",text:"grid"})," pages for information about using flex and grid display modes."]}),a(F,{html:VL,caption:"Display Modes",expand:!0})]}),qL=Object.freeze(Object.defineProperty({__proto__:null,default:YL},Symbol.toStringTag,{value:"Module"})),ZL=`<div class="flex">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>`,QL=`<div class="flex start">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,KL=`<div class="flex center">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,XL=`<div class="flex end">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,JL=`<div class="flex baseline">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,eR=`<div class="flex start gap-4">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,tR=`<div class="flex space">
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
`,nR=`<div class="flex evenly">
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
`,rR=()=>u("div",{className:"prose",children:[a("h1",{children:"Flexbox"}),a("h2",{children:"Flexbox Classes"}),u("p",{children:["Use the ",a("code",{children:"flex"})," CSS class to set the ",a("code",{children:"display"})," ","mode to ",a("code",{children:"flex"}),".  The default alignment mode"," ","(i.e. the ",a("code",{children:"align-items"})," CSS property) is ",a("code",{children:"stretch"}),"."]}),a(F,{html:ZL,caption:".flex",expand:!0}),a("h2",{children:"Flexbox Alignment"}),u("p",{children:["Add the ",a("code",{children:"start"})," class to align the items to the start."]}),a(F,{html:QL,caption:".flex.start",expand:!0}),u("p",{children:["Add the ",a("code",{children:"center"})," class to align the items to the center."]}),a(F,{html:KL,caption:".flex.center",expand:!0}),u("p",{children:["Add the ",a("code",{children:"baseline"})," class to align the items to the text baseline."]}),a(F,{html:JL,caption:".flex.baseline",expand:!0}),u("p",{children:["Add the ",a("code",{children:"end"})," class to align the items to the end."]}),a(F,{html:XL,caption:".flex.end",expand:!0}),a("h2",{children:"Flexbox Spacing"}),u("p",{children:["The ",a("code",{children:"gap-N"})," classes can be used to add a gap between successive elements.  Here ",a("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit (",a("code",{children:"0.25rem"})," by default)."]}),a(F,{html:eR,caption:".flex.gap-4",expand:!0}),u("p",{children:["Add the ",a("code",{children:"space"})," class to space the items as much as possible. This is equivalent to setting the ",a("code",{children:"justify-content"})," CSS property to ",a("code",{children:"space-between"}),"."]}),a(F,{html:tR,caption:".flex.space",expand:!0}),u("p",{children:["Add the ",a("code",{children:"evenly"})," class to divide the space evenly between and around the items.  This is equivalent to setting the"," ",a("code",{children:"justify-content"})," CSS property to ",a("code",{children:"space-evenly"}),"."]}),a(F,{html:nR,caption:".flex.evenly",expand:!0})]}),aR=Object.freeze(Object.defineProperty({__proto__:null,default:rR},Symbol.toStringTag,{value:"Module"})),lR=`<div class="italic larger">
  Italic
</div>
<div class="underline larger">
  Underline
</div>
<div class="strike larger">
  Strike
</div>
`,oR=()=>u("div",{className:"prose",children:[a("h1",{children:"Font Styles"}),a("p",{children:"The following classes are defined for common font styles."}),a(F,{html:lR,caption:"Font Styles",expand:!0})]}),iR=Object.freeze(Object.defineProperty({__proto__:null,default:oR},Symbol.toStringTag,{value:"Module"})),sR=`<div class="weight-thin larger">
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
</div>`,cR=`<div class="weight-100 larger">
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
</div>`,dR=`<div class="thin larger">
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
`,hR=()=>u("div",{className:"prose",children:[a("h1",{children:"Font Weights"}),a("h2",{children:"Weight Names"}),u(nt,{children:[u("p",{children:["The ",a("code",{children:"weight-<name>"})," classes can be used to set the font weight."]}),u("p",{children:["The values for ",a("code",{children:"<name>"})," can be",a("code",{children:"thin"}),", ",a("code",{children:"extra-light"}),", ",a("code",{children:"light"}),","," ",a("code",{children:"regular"}),", ",a("code",{children:"medium"}),", ",a("code",{children:"semi-bold"}),","," ",a("code",{children:"bold"}),", ",a("code",{children:"extra-bold"})," or ",a("code",{children:"black"}),"."]})]}),a(F,{html:sR,caption:"Weight Names",expand:!0}),a("h2",{children:"Weight Numbers"}),u(nt,{children:[a("p",{children:"Alternately you can use the corresponding weight numbers."}),u("p",{children:["Those numbers can be"," ",a("code",{children:"100"}),", ",a("code",{children:"200"}),", ",a("code",{children:"300"}),","," ",a("code",{children:"400"}),", ",a("code",{children:"500"}),", ",a("code",{children:"600"}),","," ",a("code",{children:"700"}),", ",a("code",{children:"800"})," or ",a("code",{children:"900"}),"."]})]}),a(F,{html:cR,caption:"Weight Numbers",expand:!0}),a("h2",{children:"Weight Aliases"}),u("p",{children:["There are some short-cut aliases for the common cases.  Note that we use ",a("code",{children:"thick"})," rather than ",a("code",{children:"black"})," to avoid any confusion with the color black."]}),a(F,{html:dR,caption:"Weight Aliases",expand:!0}),a("h2",{children:"Custom Weights"}),a(nt,{children:u("p",{children:["You can set the ",a("code",{children:"$font-weights"})," SASS variable if you want to define a different set of font weights."]})}),a(Pe,{code:uR,caption:"Font Weights",language:"scss",className:"mar-b-8",expand:!0})]}),fR=Object.freeze(Object.defineProperty({__proto__:null,default:hR},Symbol.toStringTag,{value:"Module"})),pR=`<div class="large">
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
`,mR=`// define your own font names...
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
`,vR=`p {
  font-family: $font-sans;
}
`,yR=`p {
  font-family: var(--font-sans);
}
`,bR=()=>u("div",{className:"prose",children:[a("h1",{children:"Fonts"}),a("h2",{children:"Font Classes"}),u("p",{children:["The ",a("code",{children:"font-sans"})," CSS class can be used to select a sans-serif font, ",a("code",{children:"font-serif"})," for a serif font, ",a("code",{children:"font-system"})," ","for the system font, or ",a("code",{children:"font-mono"})," for a monospaced font."]}),a(F,{html:pR,caption:"Fonts",expand:!0}),a("h2",{children:"Font Variables"}),a("p",{children:"Each of the above fonts is defined by a SASS variable which you can override to define your own font stacks."}),a(Pe,{code:gR,caption:"Customising Fonts",language:"scss",className:"mar-b-8",expand:!0}),u("p",{children:["These variables are exposed as the corresponding CSS custom properties:"," ",a("code",{children:"--font-sans"}),", ",a("code",{children:"--font-serif"}),","," ",a("code",{children:"--font-system"})," and ",a("code",{children:"--font-mono"}),"."]}),u("div",{className:"grid-2 gap-4 stack-laptop mar-b-8",children:[a(Pe,{code:vR,caption:"Font Variables in SCSS",language:"scss",expand:!0}),a(Pe,{code:yR,caption:"Font Variables in CSS",language:"css",expand:!0})]}),a("p",{children:"Or you can define your own names for fonts."}),a(Pe,{code:mR,caption:"Font Aliases",language:"scss",className:"mar-b-8",expand:!0}),u("p",{children:["In this case the CSS classes created will be ",a("code",{children:"font-body"}),","," ",a("code",{children:"font-head"})," and ",a("code",{children:"font-code"}),".  The fonts will also be defined as the ",a("code",{children:"--font-body"}),", ",a("code",{children:"--font-head"}),","," ","and ",a("code",{children:"--font-code"})," CSS custom properties."]})]}),wR=Object.freeze(Object.defineProperty({__proto__:null,default:bR},Symbol.toStringTag,{value:"Module"})),xR=`<h3>grid-2</h3>
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
`,SR=`<div class="grid gap-4">
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
`,kR=`<div class="grid-2 gap-4">
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
`,CR=`<div class="grid-2 gap-v-8 gap-h-2">
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
`,_R=`<div class="grid-3 gap-2 start">
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
`,TR=`<div class="grid-3 gap-2 center">
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
`,$R=`<div class="grid-3 gap-2 end">
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
`,ER=`<div class="grid-fit gap-2">
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
`,IR=`<h3><code>grid-fit</code></h3>

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
`,LR=()=>u("div",{className:"prose",children:[a("h1",{children:"Grid"}),a("h2",{children:"Grid Columns"}),u("p",{children:["Use a ",a("code",{children:"grid-N"})," CSS class to set the ",a("code",{children:"display"})," ","mode to ",a("code",{children:"grid"})," where ",a("code",{children:"N"})," is the number of columns from 2 to 16."]}),a(F,{html:xR,caption:"Grid Columns",expand:!0}),a("h2",{children:"Gaps"}),u("p",{children:["The ",a("code",{children:"gap-N"})," classes can be used to add a gap between successive elements.  Here ",a("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit (",a("code",{children:"0.25rem"})," by default)."]}),a(F,{html:kR,caption:"Grid Gaps",expand:!0}),a("h2",{children:"Vertical and Horizontal Gaps"}),u("p",{children:["The the ",a("code",{children:"gap-v-N"})," and ",a("code",{children:"gap-h-N"})," classes can be used to define the vertical and horizontal gaps separately. Again, ",a("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit."]}),a(F,{html:CR,caption:"Grid Gaps",expand:!0}),a("h2",{children:"Single Column Grid"}),u("p",{children:["The ",a("code",{children:"grid"})," CSS class (or ",a("code",{children:"grid-1"})," which does the same thing) creates a single column grid.  It's useful because it then allows you to use the ",a("code",{children:"gap-N"})," classes to add a vertical gap between child components."]}),a(F,{html:SR,caption:"Single Column Grid",expand:!0}),a("h2",{children:"Grid Fit"}),u("p",{children:["The ",a("code",{children:"grid-fit"})," CSS class will fit as many items into the grid as it can and then wrap onto the next line."]}),a(F,{html:ER,caption:"Grid Fit"}),a("h2",{children:"Grid Fill"}),u("p",{children:["The ",a("code",{children:"grid-fill"})," CSS class is similar to ",a("code",{children:"grid-fit"}),". The difference between them is what happens when there are't enough items to fill the container width.  ",a("code",{children:"grid-fit"})," will stretch them whereas ",a("code",{children:"grid-fill"})," will not."]}),a(F,{html:IR,caption:"Grid Fill"}),a("h2",{children:"Grid Fit/Fill Size"}),u("p",{children:["Both ",a("code",{children:"grid-fit"})," and ",a("code",{children:"grid-fill"})," can define a minimum size for each child element.  By default this is"," ",a("code",{children:"100px"})," wide.  You can set the ",a("code",{children:"--min-width"})," property to change it."]}),a(F,{html:NR,caption:"Grid Size"}),a("h2",{children:"Grid Start"}),u("p",{children:["Add the ",a("code",{children:"start"})," CSS class to align items to the start of grid columns."]}),a(F,{html:_R,caption:"Grid Start",expand:!0}),a("h2",{children:"Grid Center"}),u("p",{children:["Add the ",a("code",{children:"center"})," CSS class to align items to the center of grid columns."]}),a(F,{html:TR,caption:"Grid Center",expand:!0}),a("h2",{children:"Grid End"}),u("p",{children:["Add the ",a("code",{children:"end"})," CSS class to align items to the end of grid columns."]}),a(F,{html:$R,caption:"Grid End",expand:!0})]}),RR=Object.freeze(Object.defineProperty({__proto__:null,default:LR},Symbol.toStringTag,{value:"Module"})),PR=()=>u("div",{className:"page prose",children:[a("h1",{children:"Utility Classes"}),u("p",{className:"intro",children:["CSS utility classes are ",a("i",{children:"extremely"})," useful for applying styles to elements on an ad-hoc basis.  But they shouldn't be used as a substitute for writing CSS for reusable styles."]}),u("p",{children:["Some CSS frameworks, most notably"," ",a("a",{href:"https://tailwindcss.com/",children:"tailwind.css"}),", have taken this to the extreme where everything is a utility class and you never need to write any CSS at all. Although this approach has some merits for rapid prototyping, I personally wouldn't use it when building a non-trivial site because I think that it can have a negative impact on readability and maintainability."]}),u("p",{children:["I prefer to take the pragmatic approach and use utility classes to apply ",a("i",{children:"exceptional"})," styling to elements that don't warrant having their own dedicated CSS classes.  The general rule that I follow is to create dedicated CSS classes for components that I'm using in different places in a site.  For example, a product card, a user avatar, button and form styling, and so.  This ensures that they are consistent and can easily be changed across the whole site by updating the rules in the stylesheet."]}),u("p",{children:["For styling that depends on the context in which an element is being used, I'll generally reach for utility classes. By far the most useful of these, and the ones that I use more than any other, are the ",a("code",{children:"mar"})," and ",a("code",{children:"pad"}),` utility classes to add custom margins and padding.  The amount of margin or padding required on an element will often depend on the other elements around it, so there isn't a "one size fits all" solution. Other useful utility classes include those to set the font size, add a border or drop shadow, or to set the layout to use flexbox or grid.`]}),a("h2",{children:"CSS Custom Properties"}),u("p",{children:['CSS custom properties or CSS variables as they are also know, are an incredibly powerful addition to the toolkit for any web designer or developer.  They allow you to define reusable "snippets" of CSS that can easily be applied to different elements.  They can be used to replace much of the functionality that was previously only accessible by using variables and/or mixins in a CSS pre-processing language like'," ",a("a",{href:"https://sass-lang.com/",children:"SASS"}),"."]}),a("h2",{children:"SASS Variables"}),a("p",{children:"Although CSS custom properties have largely removed the need for CSS pre-processors like SASS, there are still benefits to be had from using them.  One benefit is that they can help to reduce bloat in your CSS files.  SASS allows you to define variables that can be used to implement system-wide configuration options that are then compiled into the generated CSS files.  In contrast, any CSS custom properties that you use must be included in the CSS and, if overdone, can lead to significant increases in the file size."}),a("h2",{children:"When to Use Each?"}),a("p",{children:"The general rule that I follow is to use SASS variables for configuration options that I might want to change on a site-wide basis but generally remain constant throughout the site.  For example, the default font face, the breakpoints, the colors or default spacing units.  It's useful to have these defined as variables because it allows me to plug Badger-UI into a project, tweak the default settings, and then get coding.  If at some point in the future I decide they're not quite right, or if the client or a designer wants me to change them, then it should be easy to do so, and they should be applied universally."}),a("p",{children:"For styles that I might want to change in different parts of the site, need to reflect some application state (e.g. the differences between a success, warning or error message), or that should have different properties depending on the user selecting a light or dark theme, then CSS properties are generally the way to go."}),a("p",{children:"For styles that need to be applied on an ad-hoc basis, utility classes are what I reach for."})]}),MR=Object.freeze(Object.defineProperty({__proto__:null,default:PR},Symbol.toStringTag,{value:"Module"})),FR=`<div class="relative border" style="height: 140px">
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
`,AR=()=>u("div",{className:"prose",children:[a("h1",{children:"Position"}),a("h2",{children:"Position Classes"}),u("p",{children:["Add the ",a("code",{children:"absolute"}),", ",a("code",{children:"relative"})," and"," ",a("code",{children:"fixed"})," CSS classes to set the position type."]}),u("p",{children:["For elements that are set to ",a("code",{children:"absolute"})," or ",a("code",{children:"fixed"})," ","position, the ",a("code",{children:"top"}),", ",a("code",{children:"bottom"}),", ",a("code",{children:"left"})," ","and ",a("code",{children:"right"})," classes can be used to position them against the corresponding edge of the closest parent element with the"," ",a("code",{children:"relative"})," position type."]}),a(F,{html:FR,caption:"Position",expand:!0})]}),OR=Object.freeze(Object.defineProperty({__proto__:null,default:AR},Symbol.toStringTag,{value:"Module"})),DR=`<div class="scroll-x border pad-2 nowrap mar-b-2">
  Yeah, I like it, just been fooling about with it for a few months now, very delicate... Yeah, it's part of a... trilogy really, a musical trilogy I'm doing, in, D minor, which I always find is really the saddest of all keys really. I don't know why, but it makes people weep instantly. You play a "baaaaa... baaaaaa..." it's the horn part. "...baaaa, baaaaa...", yeah, just simple lines intertwining, you know very much like, I'm really influenced by Mozart and Bach, It's sort of in between those, really, it's like a Mach piece really.<
</div>
`,BR=`<div class="scroll-y border pad-2" style="height: 7rem">
  Yeah, I like it, just been fooling about with it for a few months
  now, very delicate... Yeah, it's part of a... trilogy really, a
  musical trilogy I'm doing, in, D minor, which I always find is really
  the saddest of all keys really. I don't know why, but it makes people
  weep instantly. You play a "baaaaa... baaaaaa..." it's the horn part.
  "...baaaa, baaaaa...", yeah, just simple lines intertwining, you
  know very much like, I'm really influenced by Mozart and Bach,
  It's sort of in between those, really, it's like a Mach piece
  really.
</div>`,jR=()=>u("div",{className:"prose",children:[a("h1",{children:"Scolling"}),a("h2",{children:"Scroll Classes"}),u("p",{children:["Add the ",a("code",{children:"scroll-x"})," or ",a("code",{children:"scroll-y"})," CSS classes to set ",a("code",{children:"overflow-x"})," or ",a("code",{children:"overflow-y"})," to ",a("code",{children:"scroll"}),", respectively."]}),a("p",{children:`Be warned that you'll also need to set widths and/or heights as appropriate to stop the layout engine from doing the "right" thing and expanding the containers to fit the content.`}),a(F,{html:DR,caption:"scroll-x",expand:!0}),a(F,{html:BR,caption:"scroll-y",expand:!0})]}),zR=Object.freeze(Object.defineProperty({__proto__:null,default:jR},Symbol.toStringTag,{value:"Module"})),UR=`<div class="surface-3 pad-8">
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
</div>`,WR=`<div class="surface-3 pad-8">
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
`,HR=()=>u("div",{className:"prose",children:[a("h1",{children:"Shadows"}),a("h2",{children:"Shadow Classes"}),u("p",{children:["Use the ",a("code",{children:"shadow-1"}),", ",a("code",{children:"shadow-2"}),","," ",a("code",{children:"shadow-3"}),", ",a("code",{children:"shadow-4"})," and ",a("code",{children:"shadow-5"})," ","CSS classes to add a box shadow of progressively larger size.  Larger shadows can be used to suggest that an element is lifted higher off the background and thus appears closer to the foreground."]}),a(F,{html:UR,caption:"Shadows",expand:!0}),a("h2",{children:"Shadow Properties"}),u("p",{children:["The shadow styles are defined as CSS custom properties, (e.g."," ",a("code",{children:"--shadow-1"}),", ",a("code",{children:"--shadow-2"}),", etc).  The colors and opacities used for the shadows depend on both the shadow depth and color theme.  For the default light theme the base color is"," ",a("code",{children:"--grey-0"})," and the shadows are more transparent.  For the dark theme, where shadows need to be a bit more prominent to be visible, the base color is ",a("code",{children:"black"})," and the shadows are more opaque."]}),u("p",{children:["The benefit of CSS custom properties is that you can easily apply them to your own style rules.  In this example we define a"," ",a("code",{children:".shadow-example"})," rule which adds a ",a("code",{children:"box-shadow"})," using the ",a("code",{children:"--shadow-2"})," custom property.  The shadow color will be set correctly for both light and dark themes so you don't need to worry about defining separate rules for each."]}),a(F,{html:WR,caption:"Shadow Style",expand:!0})]}),GR=Object.freeze(Object.defineProperty({__proto__:null,default:HR},Symbol.toStringTag,{value:"Module"})),VR=`<div class="smallest">Smallest text</div>
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
@import "@abw/badger-css/styles/badger.scss";`,ZR=({heading1:e="Class",heading2:t="Rem Size",heading3:n=u(Rn,{children:["Pixel Size ",a("span",{className:"smaller",children:"(when 1rem=16px)"})]}),rows:r})=>u("table",{className:"brand celled striped properties small wide mar-b-2",children:[a("thead",{children:u("tr",{children:[a("th",{children:e}),a("th",{children:t}),a("th",{children:n})]})}),a("tbody",{children:r.map(l=>u("tr",{children:[a("td",{children:a("code",{children:l[0]})}),a("td",{children:l[1]}),a("td",{children:l[2]})]},l[0]))})]}),QR=()=>u("div",{className:"prose",children:[a("h1",{children:"Text Sizes"}),a("h2",{children:"Size Classes"}),u("p",{children:["Use the ",a("code",{children:"smallest"}),", ",a("code",{children:"smaller"}),","," ",a("code",{children:"small"}),", ",a("code",{children:"medium"})," (default)"," ",a("code",{children:"large"}),", ",a("code",{children:"larger"})," and ",a("code",{children:"largest"})," CSS classes to set the text size. These are defined as SASS variables which you can override (e.g. ",a("code",{children:"$size-large"}),") and CSS custom properties which you can use in your own stylesheets or inline styles (e.g. ",a("code",{children:"--size-large"}),")."]}),a(F,{html:VR,caption:"Text Sizes",expand:!0}),a("h2",{children:"Custom Sizes"}),a("p",{children:"The pre-defined values for the sizes are shown in the table below."}),u("p",{children:["You can set the ",a("code",{children:"$sizes"})," SCSS variable if you want to define a different set of sizes, either to give them different names or values."]}),u("p",{children:["In the example shown here the generated CSS classes would be"," ",a("code",{children:"xxs"}),", ",a("code",{children:"xs"}),", ",a("code",{children:"s"}),","," ",a("code",{children:"m"}),", ",a("code",{children:"l"}),", ",a("code",{children:"xl"})," and ",a("code",{children:"xxl"}),"."]}),a(bi,{code:qR,caption:"Custom Sizes",language:"scss",expand:!0,children:a(ZR,{rows:[["smallest","0.625rem","10px"],["smaller","0.75rem","12px"],["small","0.875rem","14px"],["medium","1rem","16px"],["large","1.25rem","20px"],["larger","1.5rem","24px"],["largest","2rem","32p<"]]})}),a("h2",{children:"Size Multipliers"}),u("p",{children:["For larger text sizes you can use the size multiple classes:"," ",a("code",{children:"x2"}),", ",a("code",{children:"x3"}),", etc., up to ",a("code",{children:"x10"}),". These are all multiples of ",a("code",{children:"1rem"}),"."]}),a(F,{html:YR,caption:"Text Sizes",expand:!0})]}),KR=Object.freeze(Object.defineProperty({__proto__:null,default:QR},Symbol.toStringTag,{value:"Module"})),XR=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
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
`,tP=`<div class="pad-2 grey20 bgc-50 fgc-90 mar-b-2">
  Two units of padding all around.
</div>
<div class="pad-v-4 pad-h-8 grey20 bgc-50 fgc-90 border">
  Four units of padding vertically and eight units
  horizontally
</div>
`,nP=`<div class="grid-1 gap-4 surface-3 pad-4">
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
`,rP=()=>u("div",{className:"prose",children:[a("h1",{children:"Spacing"}),u("p",{children:["The ",a("code",{children:"mar"})," and ",a("code",{children:"pad"})," CSS utility classes can be used to set the margins and padding for and element."]}),a("h2",{children:"Margins"}),u("p",{children:["The ",a("code",{children:"mar"})," class by itself will add 1 unit of margin to all four sides of an element.  The default unit size is ",a("code",{children:"0.25rem"}),"."]}),a(F,{html:XR,caption:"Margins",expand:!0}),u("p",{children:["The ",a("code",{children:"mar-N"})," classes will add multiples of the unit, where ",a("code",{children:"N"})," is one of the values:"," ",a("code",{children:"0"}),", ",a("code",{children:"1"}),", ",a("code",{children:"2"}),", ",a("code",{children:"3"}),","," ",a("code",{children:"4"}),", ",a("code",{children:"6"}),", ",a("code",{children:"8"}),", ",a("code",{children:"10"}),","," ",a("code",{children:"12"}),", ",a("code",{children:"16"}),", ",a("code",{children:"20"}),","," ",a("code",{children:"24"}),", ",a("code",{children:"28"})," or ",a("code",{children:"32"}),".  The"," ",a("code",{children:"mar-1"})," class is effectively the same as just ",a("code",{children:"mar"})," ","but is included for completeness.  Also note that ",a("code",{children:"mar-0"})," can be used to remove any margin that would otherwise be present on an element."]}),a(F,{html:JR,caption:"Margin Multiple",expand:!0}),a("h2",{children:"Margin Directions"}),u("p",{children:["You can also specify the direction for the margin using the"," ",a("code",{children:"mar-t"})," (top), ",a("code",{children:"mar-r"})," (right),"," ",a("code",{children:"mar-b"})," (bottom), ",a("code",{children:"mar-l"})," (left),"," ",a("code",{children:"mar-v"})," (vertical: top and bottom) and"," ",a("code",{children:"mar-h"})," (horizontal: left and right) classes. The default is 1 unit of margin or a ",a("code",{children:"-N"})," suffix can be added as a multiplier.  For example ",a("code",{children:"mar-t-4"})," to add 4 units of margin to the top of an element."]}),a(F,{html:eP,caption:"Margin Direction",expand:!0}),a("h2",{children:"Padding"}),u("p",{children:["The ",a("code",{children:"pad"})," and related utility classes work in the same way but add padding inside the element."]}),a(F,{html:tP,caption:"Padding",expand:!0}),u("p",{children:["One important thing to note is that padding is applied in multiples of 0.25",a("b",{children:"em"})," whereas margins use 0.25",a("b",{children:"rem"}),".  This is because you usually want spacing around elements to be consistent (which rem provides) but padding inside an element should be based on the text size (which em provides)."]}),a(F,{html:nP,caption:"Pad Sizes",expand:!0})]}),aP=Object.freeze(Object.defineProperty({__proto__:null,default:rP},Symbol.toStringTag,{value:"Module"})),lP=`<div class="flex gap-4">
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
`,oP=`<div class="flex gap-4">
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
@import "@abw/badger-css/styles/badger.scss";`,cP=[["2","One half","50%"],["3","One third","33.33333333%"],["2-3","Two thirds","66.66666666%"],["4","One quarter","25%"],["3-4","Three quarters","75%"],["5","One fifth","20%"],["2-5","Two fifths","40%"],["3-5","Three fifths","60%"],["4-5","Four fifths","80%"],["6","One sixth","16.66666666%"],["5-6","Five sixth","83.33333333%"],["7","One seventh","14.28571429%"],["2-7","Two sevenths","28.57142858%"],["3-7","Three sevenths","42.85714287%"],["4-7","Four sevenths","57.14285716%"],["5-7","Five sevenths","71.42857145%"],["6-7","Six sevenths","85.71428574%"],["8","One eighth","12.5%"],["3-8","Three eighths","37.5%"],["5-8","Five eighths","62.5%"],["7-8","Seven eighths","87.5%"],["9","One ninth","11.11111111%"],["2-9","Two ninths","22.22222222%"],["4-9","Four ninths","44.44444444%"],["5-9","Five ninths","55.55555555%"],["7-9","Seven ninths","77.77777777%"],["8-9","Eight ninths","88.88888888%"],["10","One tenth","10%"],["3-10","Three tenths","30%"],["7-10","Seven tenths","70%"],["9-10","Nine tenths","90%"],["11","One eleventh","9.090909090%"],["12","One twelfth","8.333333333%"],["13","One thirteenth","7.692307692%"],["14","One fourteenth","7.142857142%"],["15","One fifteenth","6.666666666%"],["16","One sixteenth","6.25%"]],dP=()=>u("div",{className:"prose",children:[a("h1",{children:"Split"}),a("h2",{children:"Evenly Split Columns"}),u(nt,{children:[u("p",{children:["The ",a("code",{children:"split-N"})," classes can be used to set the width of an element to a fraction of the width of the parent container. For example, ",a("code",{children:"split-2"})," sets the width to one half,"," ",a("code",{children:"split-3"})," to one third, and so on.  The value for"," ",a("code",{children:"N"})," can be anything from 2 to 16."]}),u("p",{children:["They can be useful in conjunction with the"," ",a(Ie,{to:"/utilities/flexbox",text:"flexbox"})," classes to constrain columns to be a particular width.  Otherwise the flexbox layout engine will try to expand the width of columns that have more content."]})]}),a(F,{html:lP,caption:"Even Splits"}),a("h2",{children:"Unevenly Split Columns"}),u("p",{children:["The ",a("code",{children:"split-N-M"})," classes can be used to create uneven splits. For example, ",a("code",{children:"split-2-5"})," creates a columns that is two fifths of the width."]}),u("p",{children:["These are defined for all uneven splits up to tenths (e.g. there's a ",a("code",{children:"split-3-10"})," class for three tenths, but no ",a("code",{children:"split-3-11"})," ","for three elevenths).  Not that redundant classes are not included. For example, there's no ",a("code",{children:"split-3-6"})," class because it's one half or ",a("code",{children:"split-2"}),"."]}),a(F,{html:oP,caption:"Uneven Splits"}),a("h2",{children:"Tables"}),u("p",{children:["The ",a("code",{children:"split-*"})," classes also work with table columns. This can be useful to prevent the layout engine from expanding columns to fit the content.  It's especially useful if you have multiple tables and you want the columns to be the same width in each of the tables."]}),a(F,{html:iP,caption:"Table Splits"}),a("h2",{children:"Split Classes"}),u(nt,{children:[a("p",{children:"The CSS classes and their corresponding widths are listed below."}),u("p",{children:["You can set the ",a("code",{children:"$splits"})," SASS variable if you want to define a different set of splits."]})]}),a(bi,{code:sP,caption:"Custom Splits",language:"scss",expand:!0,children:u("table",{className:"brand celled striped properties small wide mar-b-2",children:[a("thead",{children:u("tr",{children:[a("th",{children:"Class"}),a("th",{children:"Size"}),a("th",{children:"%age Width"})]})}),a("tbody",{children:cP.map(e=>u("tr",{children:[a("td",{children:u("code",{children:["split-",e[0]]})}),a("td",{children:e[1]}),a("td",{children:e[2]})]},e[0]))})]})})]}),uP=Object.freeze(Object.defineProperty({__proto__:null,default:dP},Symbol.toStringTag,{value:"Module"})),hP=`<h4 class="font-mono smaller">stack-widescreen</h4>
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
`,fP=`<h4 class="font-mono smaller">stack-widescreen</h4>
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
`,pP=`// define your own breakpoints...
$breakpoints: (
  'mobile':     30rem,
  'tablet':     50rem,
  'laptop':     70rem,
  'desktop':    80rem,
  'widescreen': 90rem
) !default;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";`,gP={mobile:30,tablet:50,laptop:70,desktop:80,widescreen:90},mP=()=>u("div",{className:"prose",children:[a("h1",{children:"Stacking Split Columns"}),u("p",{children:["One of the problems with creating columns using"," ",a(Ie,{to:"/utilities/grid",text:"grid"}),","," ",a(Ie,{to:"/utilities/flexbox",text:"flexbox"})," ","and ",a(Ie,{to:"/utilities/split",text:"split"})," is that sometimes a user's screen size isn't large enough to accommodate them."]}),u("p",{children:["The ",a("code",{children:"stack-*"})," classes can be used to stack columns when the screen size is narrower than a threshold breakpoint. These are ",a("code",{children:"stack-mobile"}),", ",a("code",{children:"stack-tablet"}),","," ",a("code",{children:"stack-laptop"}),", ",a("code",{children:"stack-desktop"})," and"," ",a("code",{children:"stack-widescreen"}),"."]}),a("h2",{children:"Grid Stacking"}),u(nt,{children:[u("p",{children:["This example shows how adding a ",a("code",{children:"stack-*"})," class to an element that has one of the ",a("code",{children:"grid-*"})," classes will cause the columns to be stacked at different breakpoints."]}),a(li,{title:"Try it out!",children:"Try resizing your browser window and see how the grid elements below get stacked."})]}),a(F,{html:hP,caption:"Stacking Grids"}),a("h2",{children:"Flexbox Stacking"}),u("p",{children:["This example shows the same thing for ",a("code",{children:"flex"})," containers."]}),a(F,{html:fP,caption:"Stacking Flexbox"}),a("h2",{children:"Breakpoint Names"}),u(nt,{children:[a("p",{children:"The breakpoint names and their corresponding widths in rems and pixels (assuming 1rem = 16px) are shown below."}),u("p",{children:["You can set the ",a("code",{children:"$breakpoints"})," SASS variable if you want to define a different set of breakpoints."]})]}),a(bi,{code:pP,caption:"Custom Breakpoints",language:"scss",expand:!0,children:u("table",{className:"brand celled striped properties small wide mar-b-2",children:[a("thead",{children:u("tr",{children:[a("th",{children:"Class"}),a("th",{children:"Rems"}),a("th",{children:"Pixels"})]})}),a("tbody",{children:Object.entries(gP).map(([e,t])=>u("tr",{children:[a("td",{children:a("code",{children:e})}),u("td",{children:[t,"rem"]}),u("td",{children:[t*16,"px"]})]},e))})]})})]}),vP=Object.freeze(Object.defineProperty({__proto__:null,default:mP},Symbol.toStringTag,{value:"Module"})),yP=`<div class="surface border pad-2">
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
`,bP=`<div class="surface-1 border pad-2 mar-b-2">
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
`,xP=()=>u("div",{className:"prose",children:[a("h1",{children:"Surfaces"}),u("p",{children:['When building UI components it can be useful to think in terms of "surfaces", with each surface getting progressively "closer" to the user and demanding their closer attention. You may want to combine these with the ',a("code",{children:"shadow-N"})," classes to further emphasise the effect."]}),a("p",{children:"As a general rule surfaces that are in the foreground should be lighter than those in the background.  Note that this applies to dark themes as well as light themes."}),a("h2",{children:"Surface Classes"}),u("p",{children:["Use the ",a("code",{children:"surface-1"}),", ",a("code",{children:"surface-2"}),","," ",a("code",{children:"surface-3"}),", ",a("code",{children:"surface-4"})," and"," ",a("code",{children:"surface-5"})," CSS classes to define elements with appropriate background and text colors to achieve this effect.  The lower numbers are meant to be further in the background with higher numbers being closer to the foreground."]}),a(F,{html:yP,caption:"Surfaces",expand:!0}),u("p",{children:["The ",a("code",{children:"surface"})," class is a special case being used here to apply a background color for the examples.  When using a light theme this"," ","is ",a("code",{children:"white"})," and for a dark theme it is ",a("code",{children:"black"}),"."]}),u("p",{children:["The styles are defined using CSS variables for the foreground, background and border colors, e.g. ",a("code",{children:"--color"}),", ",a("code",{children:"--background-color"})," ","and ",a("code",{children:"--border-color"}),". In turn these are defined using the ",a("code",{children:"grey"})," color range depending on the color theme. For example, the ",a("code",{children:"--background-color"}),"for ",a("code",{children:"--surface-3"}),"is defined to be ",a("code",{children:"--color-90"})," by default, and ",a("code",{children:"--color-10"})," when the dark theme is in effect."]}),a("h2",{children:"Surfaces With Borders"}),u("p",{children:["Add the ",a("code",{children:"border"})," CSS class to add a border around a surface."]}),a(F,{html:bP,caption:"Surface Borders",expand:!0}),a("h2",{children:"Colored Surfaces"}),a("p",{children:"Add any of the color classes to get different colored surfaces."}),a(F,{html:wP,caption:"Color Surfaces"})]}),SP=Object.freeze(Object.defineProperty({__proto__:null,default:xP},Symbol.toStringTag,{value:"Module"})),kP=`<div class="grid-1 gap-4">
  <input type="text" value="A wide input"/>
  <button class="blue wide">
    A wide button
  </button>
</div>`,CP=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,_P=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,TP=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,$P=`// define your own range of rem widths...
$rem-widths:
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 25, 30,
  35, 40, 45, 50, 60, 70, 80, 90, 100 !default;

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,EP=[2,4,6,8,10,12,14,16,18,20,25,30,35,40,45,50,60,70,80,90,100],NP=()=>u("div",{className:"prose",children:[a("h1",{children:"Widths"}),a("h2",{children:"Wide"}),u("p",{children:["Use the ",a("code",{children:"wide"})," CSS class to set an inline element to expand to the full width of the container."]}),a(F,{html:kP,caption:"Wide",expand:!0}),a("h2",{children:"Width Classes"}),u(nt,{children:[u("p",{children:["The ",a("code",{children:"width-Nrem"})," classes can be used to set the width of an element to a number of rem units."]}),u("p",{children:["The values for ",a("code",{children:"N"})," can be",a("code",{children:"2"}),", ",a("code",{children:"4"}),","," ",a("code",{children:"6"}),", ",a("code",{children:"8"}),", ",a("code",{children:"10"}),", ",a("code",{children:"12"}),","," ",a("code",{children:"14"}),", ",a("code",{children:"16"}),", ",a("code",{children:"18"}),", ",a("code",{children:"20"}),","," ",a("code",{children:"25"}),", ",a("code",{children:"30"}),", ",a("code",{children:"35"}),", ",a("code",{children:"40"}),","," ",a("code",{children:"45"}),", ",a("code",{children:"50"}),", ",a("code",{children:"60"}),","," ",a("code",{children:"70"}),", ",a("code",{children:"80"}),", ",a("code",{children:"90"})," or ",a("code",{children:"100"}),"."]})]}),a(F,{html:CP,caption:"Widths",expand:!0}),a("h2",{children:"Pixel Width Classes"}),u("p",{children:["If you prefer to think in pixels, you can use the corresponding"," ",a("code",{children:"width-Npx"})," classes instead."]}),a(F,{html:_P,caption:"Widths in Px",expand:!0}),a("h2",{children:"Max Width Classes"}),u(nt,{children:[u("p",{children:["The ",a("code",{children:"max-width-Nrem"})," classes can be used to set the maximum width of an element to a number of rem units.  In this case the width of the element will be constrained to the width of the parent element. You can also use the corresponding ",a("code",{children:"max-width-Npx"})," classes if you prefer to think in pixels."]}),u("p",{children:["The ",a("code",{children:"width-*"})," and ",a("code",{children:"max-width-*"})," classes work by using the ",a("code",{children:"--width"})," custom property which is set to the appropriate number of rem units based on the ",a("code",{children:"-Nrem"})," ","or ",a("code",{children:"-Npx"})," suffix."]})]}),a(F,{html:TP,caption:"Widths",expand:!0}),a("h2",{children:"Rem/Pixel Sizes"}),u(nt,{children:[a("p",{children:"The corresponding pixel widths (assuming 1rem = 16px) for each of the classes are shown below."}),u("p",{children:["You can set the ",a("code",{children:"$rem-widths"})," SASS variable if you want to define a different set of width classes."]})]}),a(bi,{code:$P,caption:"Custom Sizes",language:"scss",expand:!0,children:u("table",{className:"brand celled striped properties small wide mar-b-2",children:[a("thead",{children:u("tr",{children:[a("th",{children:"Rem Class"}),a("th",{children:"Pixel Class"}),a("th",{children:"Rems"}),a("th",{children:"Pixels"})]})}),a("tbody",{children:EP.map(e=>u("tr",{children:[a("td",{children:u("code",{children:["width-",e,"rem"]})}),a("td",{children:u("code",{children:["width-",e*16,"px"]})}),a("td",{children:e}),a("td",{children:e*16})]},e))})]})})]}),IP=Object.freeze(Object.defineProperty({__proto__:null,default:NP},Symbol.toStringTag,{value:"Module"})),Eb=({path:e,onClick:t,width:n=512,height:r=512,style:l,className:o="night-and-day--icon",fill:i="currentColor"})=>a("svg",{"aria-hidden":"true",focusable:"false",className:o,style:l,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n} ${r}`,onClick:t,children:a("path",{d:e,fill:i})}),LP=e=>a(Eb,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),Nb=({Icon:e,caption:t,onClick:n,iconClass:r,iconStyle:l,captionStyle:o,className:i="night-and-day--switcher",captionClass:s="night-and-day--caption",style:d={display:"inline-block"}})=>u("div",{className:i,onClick:n,style:d,children:[a(e,{style:l,className:r}),!!t&&a("div",{className:s,style:o,children:t})]}),RP=e=>{const{setDark:t}=xi();return a(Nb,{Icon:LP,onClick:t,...e})},PP=e=>a(Eb,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),MP=e=>{const{setLight:t}=xi();return a(Nb,{Icon:PP,onClick:t,...e})},FP=({sunrise:e={},nightfall:t={}})=>{const{isLight:n,setLight:r,setDark:l}=xi();return n?a(MP,{onClick:l,...e}):a(RP,{onClick:r,...t})},Ib=j.createContext(),xi=()=>j.useContext(Ib),is="dark",tu="light",Lb="(prefers-color-scheme: dark)",AP=()=>{var e;return(e=window==null?void 0:window.matchMedia)==null?void 0:e.call(window,Lb).matches},Ja=window==null?void 0:window.localStorage,OP=e=>e.split(" "),dv=(e,t="")=>`${e} ${t}`,DP=({storageKey:e,defaultVariant:t,children:n})=>{const r=e?Ja==null?void 0:Ja.getItem(e):null,[l,o=""]=r?OP(r):[AP(),null],[i,s]=j.useState(l===is),[d,f]=j.useState(o||t),m=N=>{s(N),e&&Ja&&Ja.setItem(e,dv(N?is:tu,d))},b=N=>{f(N),e&&Ja&&Ja.setItem(e,dv(i?is:tu,N))},S=N=>m(N.matches);j.useEffect(()=>{if(window&&window.matchMedia){const N=window.matchMedia(Lb);return N.addEventListener("change",S),()=>N==null?void 0:N.removeEventListener("change",S)}},[]);const I={isDark:i,isLight:!i,setDark:()=>m(!0),setLight:()=>m(!1),setIsDark:s,toggleTheme:()=>m(!i),theme:i?is:tu,variant:d,setVariant:b};return a(Ib.Provider,{value:I,children:n})},BP=e=>j.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},j.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z",fill:"currentColor"})),uv="sidebar",jP="no-sidebar",Rb="0.1.12",Pb="2023-10-31",hv="2018",nu=Pb.match(/^(\d+)/)[1],zP=nu===hv?nu:`${hv} - ${nu}`,UP=()=>{const{variant:e,setVariant:t}=xi();return a("header",{children:u("nav",{children:[u("div",{children:[a(Mc,{name:"bars",className:"toggle-sidebar action",onClick:()=>t(e===uv?jP:uv)}),a(Ie,{to:"/",className:"home mar-l-2",text:"Badger-CSS"}),u("span",{className:"small mar-l-2",children:["v",Rb]})]}),u("div",{children:[a("a",{href:"https://github.com/abw/badger-css",children:a(BP,{className:"night-and-day--icon mar-r-2"})}),a(FP,{})]})]})})},go=({title:e,items:t})=>u("div",{className:"menu",children:[a("h4",{children:e}),t.map(n=>a(Ie,{...n},n.to))]}),WP=[{to:"/demo",text:"Demo"},{to:"/getting-started/installation",text:"Installation"},{to:"/getting-started/good",text:"What's good about it?"},{to:"/getting-started/bad",text:"What's wrong with it?"}],HP=[{to:"/colors/ranges",text:"Color Ranges"},{to:"/colors/brand",text:"Brand Colors"},{to:"/colors/variables",text:"Color Variables"},{to:"/colors/utilities",text:"Color Utilities"},{to:"/colors/palette",text:"Custom Palette"}],GP=[{to:"/utilities/",text:"Introduction"},{to:"/utilities/alignment",text:"Alignment"},{to:"/utilities/borders",text:"Borders"},{to:"/utilities/display",text:"Display"},{to:"/utilities/flexbox",text:"Flexbox"},{to:"/utilities/fonts",text:"Fonts"},{to:"/utilities/font-styles",text:"Font Styles"},{to:"/utilities/font-weights",text:"Font Weights"},{to:"/utilities/grid",text:"Grid"},{to:"/utilities/position",text:"Position"},{to:"/utilities/scrolling",text:"Scrolling"},{to:"/utilities/shadows",text:"Shadows"},{to:"/utilities/sizes",text:"Text Sizes"},{to:"/utilities/spacing",text:"Spacing"},{to:"/utilities/split",text:"Splits"},{to:"/utilities/stack",text:"Stacking"},{to:"/utilities/surfaces",text:"Surfaces"},{to:"/utilities/widths",text:"Widths"}],VP=[{to:"/forms/",text:"Introduction"},{to:"/forms/buttons",text:"Buttons"},{to:"/forms/checkboxes",text:"Checkboxes"},{to:"/forms/radio-buttons",text:"Radio Buttons"},{to:"/forms/select",text:"Select Inputs"},{to:"/forms/text",text:"Text Inputs"},{to:"/forms/textarea",text:"Text Area Inputs"},{to:"/forms/field",text:"Form Fields"},{to:"/forms/fieldset",text:"Form Field Sets"},{to:"/forms/styling",text:"Form Styling"}],YP=[{to:"/components/alerts",text:"Alerts"},{to:"/components/details",text:"Details"},{to:"/components/dialog",text:"Dialog"},{to:"/components/dropdown",text:"Dropdown"},{to:"/components/icons",text:"SVG Icons"},{to:"/components/tables",text:"Tables"},{to:"/components/tooltips",text:"Tooltips"}],qP=()=>u("div",{children:[a(go,{title:"Getting Started",items:WP}),a(go,{title:"Colors",items:HP}),a(go,{title:"Utilities",items:GP}),a(go,{title:"Forms",items:VP}),a(go,{title:"Components",items:YP})]}),ZP=()=>a("footer",{children:u("div",{className:"flex space",children:[u("div",{children:["© Copyright ",zP," Andy Wardley"]}),u("div",{children:["Version ",Rb," ",Pb]})]})});function QP(){const{pathname:e}=Bl();return j.useEffect(()=>KP(document.getElementById("content")),[e]),null}function KP(e){e==null||e.scrollTo({top:0,left:0})}const XP=()=>{const{theme:e,variant:t}=xi(),n=[e,t].join(" ");return u("div",{id:"site",className:n,children:[a(UP,{}),u("div",{id:"app",children:[a(QP,{}),a("aside",{children:a(qP,{})}),a("main",{id:"content",children:a(ZC,{})})]}),a(ZP,{})]})},JP=Object.assign({"../pages/colors/brand.jsx":u_,"../pages/colors/greyscale.jsx":T_,"../pages/colors/palette.jsx":P_,"../pages/colors/ranges.jsx":D_,"../pages/colors/utilities.jsx":q_,"../pages/colors/variables.jsx":Q_,"../pages/components/alerts.jsx":fT,"../pages/components/details.jsx":kT,"../pages/components/dialog.jsx":LT,"../pages/components/dropdown.jsx":AT,"../pages/components/icons.jsx":WT,"../pages/components/tables.jsx":n$,"../pages/components/tooltips.jsx":d$,"../pages/decoder.jsx":m$,"../pages/demo/index.jsx":N$,"../pages/forms/buttons.jsx":z$,"../pages/forms/checkboxes.jsx":Y$,"../pages/forms/field.jsx":oE,"../pages/forms/fieldset.jsx":cE,"../pages/forms/index.jsx":jI,"../pages/forms/radio-buttons.jsx":VI,"../pages/forms/select.jsx":JI,"../pages/forms/styling.jsx":nL,"../pages/forms/text.jsx":sL,"../pages/forms/textarea.jsx":hL,"../pages/getting-started/bad.jsx":pL,"../pages/getting-started/good.jsx":mL,"../pages/getting-started/installation.jsx":kL,"../pages/index.jsx":TL,"../pages/utilities/alignment.jsx":LL,"../pages/utilities/borders.jsx":GL,"../pages/utilities/display.jsx":qL,"../pages/utilities/flexbox.jsx":aR,"../pages/utilities/font-styles.jsx":iR,"../pages/utilities/font-weights.jsx":fR,"../pages/utilities/fonts.jsx":wR,"../pages/utilities/grid.jsx":RR,"../pages/utilities/index.jsx":MR,"../pages/utilities/position.jsx":OR,"../pages/utilities/scrolling.jsx":zR,"../pages/utilities/shadows.jsx":GR,"../pages/utilities/sizes.jsx":KR,"../pages/utilities/spacing.jsx":aP,"../pages/utilities/split.jsx":uP,"../pages/utilities/stack.jsx":vP,"../pages/utilities/surfaces.jsx":SP,"../pages/utilities/widths.jsx":IP}),eM=Object.entries(JP).map(([e,t])=>({path:e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,""),Component:t.default})),tM=n_([{path:"/",element:a(XP,{}),children:eM}],{basename:"/badger-css/"});ru.createRoot(document.getElementById("root")).render(a(Et.StrictMode,{children:a(DP,{storageKey:"theme",children:a(YC,{router:tM})})}));
