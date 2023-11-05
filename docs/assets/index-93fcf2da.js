function fb(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(r,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();var zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pg={exports:{}},fd={},fg={exports:{}},_e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hi=Symbol.for("react.element"),gb=Symbol.for("react.portal"),mb=Symbol.for("react.fragment"),vb=Symbol.for("react.strict_mode"),bb=Symbol.for("react.profiler"),yb=Symbol.for("react.provider"),wb=Symbol.for("react.context"),xb=Symbol.for("react.forward_ref"),Cb=Symbol.for("react.suspense"),Sb=Symbol.for("react.memo"),kb=Symbol.for("react.lazy"),p1=Symbol.iterator;function Tb(e){return e===null||typeof e!="object"?null:(e=p1&&e[p1]||e["@@iterator"],typeof e=="function"?e:null)}var gg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mg=Object.assign,vg={};function Oa(e,n,t){this.props=e,this.context=n,this.refs=vg,this.updater=t||gg}Oa.prototype.isReactComponent={};Oa.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Oa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bg(){}bg.prototype=Oa.prototype;function gh(e,n,t){this.props=e,this.context=n,this.refs=vg,this.updater=t||gg}var mh=gh.prototype=new bg;mh.constructor=gh;mg(mh,Oa.prototype);mh.isPureReactComponent=!0;var f1=Array.isArray,yg=Object.prototype.hasOwnProperty,vh={current:null},wg={key:!0,ref:!0,__self:!0,__source:!0};function xg(e,n,t){var r,a={},o=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)yg.call(n,r)&&!wg.hasOwnProperty(r)&&(a[r]=n[r]);var s=arguments.length-2;if(s===1)a.children=t;else if(1<s){for(var u=Array(s),p=0;p<s;p++)u[p]=arguments[p+2];a.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:hi,type:e,key:o,ref:i,props:a,_owner:vh.current}}function _b(e,n){return{$$typeof:hi,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function bh(e){return typeof e=="object"&&e!==null&&e.$$typeof===hi}function Lb(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var g1=/\/+/g;function gc(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Lb(""+e.key):n.toString(36)}function ss(e,n,t,r,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case hi:case gb:i=!0}}if(i)return i=e,a=a(i),e=r===""?"."+gc(i,0):r,f1(a)?(t="",e!=null&&(t=e.replace(g1,"$&/")+"/"),ss(a,n,t,"",function(p){return p})):a!=null&&(bh(a)&&(a=_b(a,t+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(g1,"$&/")+"/")+e)),n.push(a)),1;if(i=0,r=r===""?".":r+":",f1(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+gc(o,s);i+=ss(o,n,t,u,a)}else if(u=Tb(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+gc(o,s++),i+=ss(o,n,t,u,a);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function Oi(e,n,t){if(e==null)return e;var r=[],a=0;return ss(e,r,"","",function(o){return n.call(t,o,a++)}),r}function $b(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Gn={current:null},ds={transition:null},Nb={ReactCurrentDispatcher:Gn,ReactCurrentBatchConfig:ds,ReactCurrentOwner:vh};_e.Children={map:Oi,forEach:function(e,n,t){Oi(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Oi(e,function(){n++}),n},toArray:function(e){return Oi(e,function(n){return n})||[]},only:function(e){if(!bh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_e.Component=Oa;_e.Fragment=mb;_e.Profiler=bb;_e.PureComponent=gh;_e.StrictMode=vb;_e.Suspense=Cb;_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nb;_e.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=mg({},e.props),a=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=vh.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in n)yg.call(n,u)&&!wg.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&s!==void 0?s[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){s=Array(u);for(var p=0;p<u;p++)s[p]=arguments[p+2];r.children=s}return{$$typeof:hi,type:e.type,key:a,ref:o,props:r,_owner:i}};_e.createContext=function(e){return e={$$typeof:wb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yb,_context:e},e.Consumer=e};_e.createElement=xg;_e.createFactory=function(e){var n=xg.bind(null,e);return n.type=e,n};_e.createRef=function(){return{current:null}};_e.forwardRef=function(e){return{$$typeof:xb,render:e}};_e.isValidElement=bh;_e.lazy=function(e){return{$$typeof:kb,_payload:{_status:-1,_result:e},_init:$b}};_e.memo=function(e,n){return{$$typeof:Sb,type:e,compare:n===void 0?null:n}};_e.startTransition=function(e){var n=ds.transition;ds.transition={};try{e()}finally{ds.transition=n}};_e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};_e.useCallback=function(e,n){return Gn.current.useCallback(e,n)};_e.useContext=function(e){return Gn.current.useContext(e)};_e.useDebugValue=function(){};_e.useDeferredValue=function(e){return Gn.current.useDeferredValue(e)};_e.useEffect=function(e,n){return Gn.current.useEffect(e,n)};_e.useId=function(){return Gn.current.useId()};_e.useImperativeHandle=function(e,n,t){return Gn.current.useImperativeHandle(e,n,t)};_e.useInsertionEffect=function(e,n){return Gn.current.useInsertionEffect(e,n)};_e.useLayoutEffect=function(e,n){return Gn.current.useLayoutEffect(e,n)};_e.useMemo=function(e,n){return Gn.current.useMemo(e,n)};_e.useReducer=function(e,n,t){return Gn.current.useReducer(e,n,t)};_e.useRef=function(e){return Gn.current.useRef(e)};_e.useState=function(e){return Gn.current.useState(e)};_e.useSyncExternalStore=function(e,n,t){return Gn.current.useSyncExternalStore(e,n,t)};_e.useTransition=function(){return Gn.current.useTransition()};_e.version="18.2.0";fg.exports=_e;var B=fg.exports;const En=Xt(B),m1=fb({__proto__:null,default:En},[B]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eb=B,Ib=Symbol.for("react.element"),Mb=Symbol.for("react.fragment"),Rb=Object.prototype.hasOwnProperty,Pb=Eb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ab={key:!0,ref:!0,__self:!0,__source:!0};function Cg(e,n,t){var r,a={},o=null,i=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)Rb.call(n,r)&&!Ab.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)a[r]===void 0&&(a[r]=n[r]);return{$$typeof:Ib,type:e,key:o,ref:i,props:a,_owner:Pb.current}}fd.Fragment=Mb;fd.jsx=Cg;fd.jsxs=Cg;pg.exports=fd;var yh=pg.exports;const Rt=yh.Fragment,l=yh.jsx,d=yh.jsxs;var tu={},Sg={exports:{}},vt={},kg={exports:{}},Tg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(U,q){var J=U.length;U.push(q);e:for(;0<J;){var ae=J-1>>>1,ge=U[ae];if(0<a(ge,q))U[ae]=q,U[J]=ge,J=ae;else break e}}function t(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var q=U[0],J=U.pop();if(J!==q){U[0]=J;e:for(var ae=0,ge=U.length,zn=ge>>>1;ae<zn;){var me=2*(ae+1)-1,nn=U[me],qe=me+1,fn=U[qe];if(0>a(nn,J))qe<ge&&0>a(fn,nn)?(U[ae]=fn,U[qe]=J,ae=qe):(U[ae]=nn,U[me]=J,ae=me);else if(qe<ge&&0>a(fn,J))U[ae]=fn,U[qe]=J,ae=qe;else break e}}return q}function a(U,q){var J=U.sortIndex-q.sortIndex;return J!==0?J:U.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],p=[],m=1,y=null,C=3,E=!1,N=!1,S=!1,M=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(U){for(var q=t(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=U)r(p),q.sortIndex=q.expirationTime,n(u,q);else break;q=t(p)}}function v(U){if(S=!1,b(U),!N)if(t(u)!==null)N=!0,je(L);else{var q=t(p);q!==null&&Ze(v,q.startTime-U)}}function L(U,q){N=!1,S&&(S=!1,w(O),O=-1),E=!0;var J=C;try{for(b(q),y=t(u);y!==null&&(!(y.expirationTime>q)||U&&!fe());){var ae=y.callback;if(typeof ae=="function"){y.callback=null,C=y.priorityLevel;var ge=ae(y.expirationTime<=q);q=e.unstable_now(),typeof ge=="function"?y.callback=ge:y===t(u)&&r(u),b(q)}else r(u);y=t(u)}if(y!==null)var zn=!0;else{var me=t(p);me!==null&&Ze(v,me.startTime-q),zn=!1}return zn}finally{y=null,C=J,E=!1}}var T=!1,A=null,O=-1,z=5,Z=-1;function fe(){return!(e.unstable_now()-Z<z)}function ce(){if(A!==null){var U=e.unstable_now();Z=U;var q=!0;try{q=A(!0,U)}finally{q?Ue():(T=!1,A=null)}}else T=!1}var Ue;if(typeof g=="function")Ue=function(){g(ce)};else if(typeof MessageChannel<"u"){var an=new MessageChannel,Ye=an.port2;an.port1.onmessage=ce,Ue=function(){Ye.postMessage(null)}}else Ue=function(){M(ce,0)};function je(U){A=U,T||(T=!0,Ue())}function Ze(U,q){O=M(function(){U(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_continueExecution=function(){N||E||(N=!0,je(L))},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return C},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(U){switch(C){case 1:case 2:case 3:var q=3;break;default:q=C}var J=C;C=q;try{return U()}finally{C=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(U,q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var J=C;C=U;try{return q()}finally{C=J}},e.unstable_scheduleCallback=function(U,q,J){var ae=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ae+J:ae):J=ae,U){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=J+ge,U={id:m++,callback:q,priorityLevel:U,startTime:J,expirationTime:ge,sortIndex:-1},J>ae?(U.sortIndex=J,n(p,U),t(u)===null&&U===t(p)&&(S?(w(O),O=-1):S=!0,Ze(v,J-ae))):(U.sortIndex=ge,n(u,U),N||E||(N=!0,je(L))),U},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(U){var q=C;return function(){var J=C;C=q;try{return U.apply(this,arguments)}finally{C=J}}}})(Tg);kg.exports=Tg;var Fb=kg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g=B,mt=Fb;function Y(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lg=new Set,Uo={};function Ml(e,n){La(e,n),La(e+"Capture",n)}function La(e,n){for(Uo[e]=n,e=0;e<n.length;e++)Lg.add(n[e])}var pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=Object.prototype.hasOwnProperty,Ob=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v1={},b1={};function Db(e){return ru.call(b1,e)?!0:ru.call(v1,e)?!1:Ob.test(e)?b1[e]=!0:(v1[e]=!0,!1)}function Bb(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function jb(e,n,t,r){if(n===null||typeof n>"u"||Bb(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Yn(e,n,t,r,a,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var Rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Rn[e]=new Yn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Rn[n]=new Yn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Rn[e]=new Yn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Rn[e]=new Yn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Rn[e]=new Yn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Rn[e]=new Yn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Rn[e]=new Yn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Rn[e]=new Yn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Rn[e]=new Yn(e,5,!1,e.toLowerCase(),null,!1,!1)});var wh=/[\-:]([a-z])/g;function xh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(wh,xh);Rn[n]=new Yn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(wh,xh);Rn[n]=new Yn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(wh,xh);Rn[n]=new Yn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Rn[e]=new Yn(e,1,!1,e.toLowerCase(),null,!1,!1)});Rn.xlinkHref=new Yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Rn[e]=new Yn(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ch(e,n,t,r){var a=Rn.hasOwnProperty(n)?Rn[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(jb(n,t,a,r)&&(t=null),r||a===null?Db(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var yr=_g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Di=Symbol.for("react.element"),la=Symbol.for("react.portal"),aa=Symbol.for("react.fragment"),Sh=Symbol.for("react.strict_mode"),lu=Symbol.for("react.profiler"),$g=Symbol.for("react.provider"),Ng=Symbol.for("react.context"),kh=Symbol.for("react.forward_ref"),au=Symbol.for("react.suspense"),ou=Symbol.for("react.suspense_list"),Th=Symbol.for("react.memo"),Nr=Symbol.for("react.lazy"),Eg=Symbol.for("react.offscreen"),y1=Symbol.iterator;function io(e){return e===null||typeof e!="object"?null:(e=y1&&e[y1]||e["@@iterator"],typeof e=="function"?e:null)}var ln=Object.assign,mc;function yo(e){if(mc===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);mc=n&&n[1]||""}return`
`+mc+e}var vc=!1;function bc(e,n){if(!e||vc)return"";vc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(p){var r=p}Reflect.construct(e,[],n)}else{try{n.call()}catch(p){r=p}e.call(n.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var a=p.stack.split(`
`),o=r.stack.split(`
`),i=a.length-1,s=o.length-1;1<=i&&0<=s&&a[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(a[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||a[i]!==o[s]){var u=`
`+a[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{vc=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?yo(e):""}function zb(e){switch(e.tag){case 5:return yo(e.type);case 16:return yo("Lazy");case 13:return yo("Suspense");case 19:return yo("SuspenseList");case 0:case 2:case 15:return e=bc(e.type,!1),e;case 11:return e=bc(e.type.render,!1),e;case 1:return e=bc(e.type,!0),e;default:return""}}function iu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case aa:return"Fragment";case la:return"Portal";case lu:return"Profiler";case Sh:return"StrictMode";case au:return"Suspense";case ou:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ng:return(e.displayName||"Context")+".Consumer";case $g:return(e._context.displayName||"Context")+".Provider";case kh:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Th:return n=e.displayName||null,n!==null?n:iu(e.type)||"Memo";case Nr:n=e._payload,e=e._init;try{return iu(e(n))}catch{}}return null}function Ub(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return iu(n);case 8:return n===Sh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Vr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ig(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Hb(e){var n=Ig(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Bi(e){e._valueTracker||(e._valueTracker=Hb(e))}function Mg(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Ig(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ms(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function su(e,n){var t=n.checked;return ln({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function w1(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Vr(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Rg(e,n){n=n.checked,n!=null&&Ch(e,"checked",n,!1)}function du(e,n){Rg(e,n);var t=Vr(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?cu(e,n.type,t):n.hasOwnProperty("defaultValue")&&cu(e,n.type,Vr(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function x1(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function cu(e,n,t){(n!=="number"||Ms(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var wo=Array.isArray;function ya(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Vr(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function uu(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(Y(91));return ln({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function C1(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(Y(92));if(wo(t)){if(1<t.length)throw Error(Y(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Vr(t)}}function Pg(e,n){var t=Vr(n.value),r=Vr(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function S1(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ag(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hu(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ag(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ji,Fg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ji=ji||document.createElement("div"),ji.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ji.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ho(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var No={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wb=["Webkit","ms","Moz","O"];Object.keys(No).forEach(function(e){Wb.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),No[n]=No[e]})});function Og(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||No.hasOwnProperty(e)&&No[e]?(""+n).trim():n+"px"}function Dg(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=Og(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var Vb=ln({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pu(e,n){if(n){if(Vb[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(Y(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(Y(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(Y(61))}if(n.style!=null&&typeof n.style!="object")throw Error(Y(62))}}function fu(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gu=null;function _h(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mu=null,wa=null,xa=null;function k1(e){if(e=gi(e)){if(typeof mu!="function")throw Error(Y(280));var n=e.stateNode;n&&(n=yd(n),mu(e.stateNode,e.type,n))}}function Bg(e){wa?xa?xa.push(e):xa=[e]:wa=e}function jg(){if(wa){var e=wa,n=xa;if(xa=wa=null,k1(e),n)for(e=0;e<n.length;e++)k1(n[e])}}function zg(e,n){return e(n)}function Ug(){}var yc=!1;function Hg(e,n,t){if(yc)return e(n,t);yc=!0;try{return zg(e,n,t)}finally{yc=!1,(wa!==null||xa!==null)&&(Ug(),jg())}}function Wo(e,n){var t=e.stateNode;if(t===null)return null;var r=yd(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(Y(231,n,typeof t));return t}var vu=!1;if(pr)try{var so={};Object.defineProperty(so,"passive",{get:function(){vu=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{vu=!1}function Gb(e,n,t,r,a,o,i,s,u){var p=Array.prototype.slice.call(arguments,3);try{n.apply(t,p)}catch(m){this.onError(m)}}var Eo=!1,Rs=null,Ps=!1,bu=null,Yb={onError:function(e){Eo=!0,Rs=e}};function Zb(e,n,t,r,a,o,i,s,u){Eo=!1,Rs=null,Gb.apply(Yb,arguments)}function qb(e,n,t,r,a,o,i,s,u){if(Zb.apply(this,arguments),Eo){if(Eo){var p=Rs;Eo=!1,Rs=null}else throw Error(Y(198));Ps||(Ps=!0,bu=p)}}function Rl(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Wg(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function T1(e){if(Rl(e)!==e)throw Error(Y(188))}function Qb(e){var n=e.alternate;if(!n){if(n=Rl(e),n===null)throw Error(Y(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===t)return T1(a),e;if(o===r)return T1(a),n;o=o.sibling}throw Error(Y(188))}if(t.return!==r.return)t=a,r=o;else{for(var i=!1,s=a.child;s;){if(s===t){i=!0,t=a,r=o;break}if(s===r){i=!0,r=a,t=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===t){i=!0,t=o,r=a;break}if(s===r){i=!0,r=o,t=a;break}s=s.sibling}if(!i)throw Error(Y(189))}}if(t.alternate!==r)throw Error(Y(190))}if(t.tag!==3)throw Error(Y(188));return t.stateNode.current===t?e:n}function Vg(e){return e=Qb(e),e!==null?Gg(e):null}function Gg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Gg(e);if(n!==null)return n;e=e.sibling}return null}var Yg=mt.unstable_scheduleCallback,_1=mt.unstable_cancelCallback,Kb=mt.unstable_shouldYield,Xb=mt.unstable_requestPaint,sn=mt.unstable_now,Jb=mt.unstable_getCurrentPriorityLevel,Lh=mt.unstable_ImmediatePriority,Zg=mt.unstable_UserBlockingPriority,As=mt.unstable_NormalPriority,ey=mt.unstable_LowPriority,qg=mt.unstable_IdlePriority,gd=null,Qt=null;function ny(e){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(gd,e,void 0,(e.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:ly,ty=Math.log,ry=Math.LN2;function ly(e){return e>>>=0,e===0?32:31-(ty(e)/ry|0)|0}var zi=64,Ui=4194304;function xo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fs(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var s=i&~a;s!==0?r=xo(s):(o&=i,o!==0&&(r=xo(o)))}else i=t&~a,i!==0?r=xo(i):o!==0&&(r=xo(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&a)&&(a=r&-r,o=n&-n,a>=o||a===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Bt(n),a=1<<t,r|=e[t],n&=~a;return r}function ay(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oy(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Bt(o),s=1<<i,u=a[i];u===-1?(!(s&t)||s&r)&&(a[i]=ay(s,n)):u<=n&&(e.expiredLanes|=s),o&=~s}}function yu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qg(){var e=zi;return zi<<=1,!(zi&4194240)&&(zi=64),e}function wc(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function pi(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Bt(n),e[n]=t}function iy(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Bt(t),o=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~o}}function $h(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Bt(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var Be=0;function Kg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xg,Nh,Jg,em,nm,wu=!1,Hi=[],Or=null,Dr=null,Br=null,Vo=new Map,Go=new Map,Ir=[],sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function L1(e,n){switch(e){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Dr=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":Vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(n.pointerId)}}function co(e,n,t,r,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},n!==null&&(n=gi(n),n!==null&&Nh(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function dy(e,n,t,r,a){switch(n){case"focusin":return Or=co(Or,e,n,t,r,a),!0;case"dragenter":return Dr=co(Dr,e,n,t,r,a),!0;case"mouseover":return Br=co(Br,e,n,t,r,a),!0;case"pointerover":var o=a.pointerId;return Vo.set(o,co(Vo.get(o)||null,e,n,t,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Go.set(o,co(Go.get(o)||null,e,n,t,r,a)),!0}return!1}function tm(e){var n=vl(e.target);if(n!==null){var t=Rl(n);if(t!==null){if(n=t.tag,n===13){if(n=Wg(t),n!==null){e.blockedOn=n,nm(e.priority,function(){Jg(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cs(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=xu(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);gu=r,t.target.dispatchEvent(r),gu=null}else return n=gi(t),n!==null&&Nh(n),e.blockedOn=t,!1;n.shift()}return!0}function $1(e,n,t){cs(e)&&t.delete(n)}function cy(){wu=!1,Or!==null&&cs(Or)&&(Or=null),Dr!==null&&cs(Dr)&&(Dr=null),Br!==null&&cs(Br)&&(Br=null),Vo.forEach($1),Go.forEach($1)}function uo(e,n){e.blockedOn===n&&(e.blockedOn=null,wu||(wu=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,cy)))}function Yo(e){function n(a){return uo(a,e)}if(0<Hi.length){uo(Hi[0],e);for(var t=1;t<Hi.length;t++){var r=Hi[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Or!==null&&uo(Or,e),Dr!==null&&uo(Dr,e),Br!==null&&uo(Br,e),Vo.forEach(n),Go.forEach(n),t=0;t<Ir.length;t++)r=Ir[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ir.length&&(t=Ir[0],t.blockedOn===null);)tm(t),t.blockedOn===null&&Ir.shift()}var Ca=yr.ReactCurrentBatchConfig,Os=!0;function uy(e,n,t,r){var a=Be,o=Ca.transition;Ca.transition=null;try{Be=1,Eh(e,n,t,r)}finally{Be=a,Ca.transition=o}}function hy(e,n,t,r){var a=Be,o=Ca.transition;Ca.transition=null;try{Be=4,Eh(e,n,t,r)}finally{Be=a,Ca.transition=o}}function Eh(e,n,t,r){if(Os){var a=xu(e,n,t,r);if(a===null)Ec(e,n,r,Ds,t),L1(e,r);else if(dy(a,e,n,t,r))r.stopPropagation();else if(L1(e,r),n&4&&-1<sy.indexOf(e)){for(;a!==null;){var o=gi(a);if(o!==null&&Xg(o),o=xu(e,n,t,r),o===null&&Ec(e,n,r,Ds,t),o===a)break;a=o}a!==null&&r.stopPropagation()}else Ec(e,n,r,null,t)}}var Ds=null;function xu(e,n,t,r){if(Ds=null,e=_h(r),e=vl(e),e!==null)if(n=Rl(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Wg(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ds=e,null}function rm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jb()){case Lh:return 1;case Zg:return 4;case As:case ey:return 16;case qg:return 536870912;default:return 16}default:return 16}}var Rr=null,Ih=null,us=null;function lm(){if(us)return us;var e,n=Ih,t=n.length,r,a="value"in Rr?Rr.value:Rr.textContent,o=a.length;for(e=0;e<t&&n[e]===a[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===a[o-r];r++);return us=a.slice(e,1<r?1-r:void 0)}function hs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Wi(){return!0}function N1(){return!1}function bt(e){function n(t,r,a,o,i){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Wi:N1,this.isPropagationStopped=N1,this}return ln(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Wi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Wi)},persist:function(){},isPersistent:Wi}),n}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mh=bt(Da),fi=ln({},Da,{view:0,detail:0}),py=bt(fi),xc,Cc,ho,md=ln({},fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ho&&(ho&&e.type==="mousemove"?(xc=e.screenX-ho.screenX,Cc=e.screenY-ho.screenY):Cc=xc=0,ho=e),xc)},movementY:function(e){return"movementY"in e?e.movementY:Cc}}),E1=bt(md),fy=ln({},md,{dataTransfer:0}),gy=bt(fy),my=ln({},fi,{relatedTarget:0}),Sc=bt(my),vy=ln({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),by=bt(vy),yy=ln({},Da,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wy=bt(yy),xy=ln({},Da,{data:0}),I1=bt(xy),Cy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ky={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ty(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ky[e])?!!n[e]:!1}function Rh(){return Ty}var _y=ln({},fi,{key:function(e){if(e.key){var n=Cy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rh,charCode:function(e){return e.type==="keypress"?hs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ly=bt(_y),$y=ln({},md,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),M1=bt($y),Ny=ln({},fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rh}),Ey=bt(Ny),Iy=ln({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),My=bt(Iy),Ry=ln({},md,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Py=bt(Ry),Ay=[9,13,27,32],Ph=pr&&"CompositionEvent"in window,Io=null;pr&&"documentMode"in document&&(Io=document.documentMode);var Fy=pr&&"TextEvent"in window&&!Io,am=pr&&(!Ph||Io&&8<Io&&11>=Io),R1=String.fromCharCode(32),P1=!1;function om(e,n){switch(e){case"keyup":return Ay.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function im(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var oa=!1;function Oy(e,n){switch(e){case"compositionend":return im(n);case"keypress":return n.which!==32?null:(P1=!0,R1);case"textInput":return e=n.data,e===R1&&P1?null:e;default:return null}}function Dy(e,n){if(oa)return e==="compositionend"||!Ph&&om(e,n)?(e=lm(),us=Ih=Rr=null,oa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return am&&n.locale!=="ko"?null:n.data;default:return null}}var By={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function A1(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!By[e.type]:n==="textarea"}function sm(e,n,t,r){Bg(r),n=Bs(n,"onChange"),0<n.length&&(t=new Mh("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Mo=null,Zo=null;function jy(e){ym(e,0)}function vd(e){var n=da(e);if(Mg(n))return e}function zy(e,n){if(e==="change")return n}var dm=!1;if(pr){var kc;if(pr){var Tc="oninput"in document;if(!Tc){var F1=document.createElement("div");F1.setAttribute("oninput","return;"),Tc=typeof F1.oninput=="function"}kc=Tc}else kc=!1;dm=kc&&(!document.documentMode||9<document.documentMode)}function O1(){Mo&&(Mo.detachEvent("onpropertychange",cm),Zo=Mo=null)}function cm(e){if(e.propertyName==="value"&&vd(Zo)){var n=[];sm(n,Zo,e,_h(e)),Hg(jy,n)}}function Uy(e,n,t){e==="focusin"?(O1(),Mo=n,Zo=t,Mo.attachEvent("onpropertychange",cm)):e==="focusout"&&O1()}function Hy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vd(Zo)}function Wy(e,n){if(e==="click")return vd(n)}function Vy(e,n){if(e==="input"||e==="change")return vd(n)}function Gy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var zt=typeof Object.is=="function"?Object.is:Gy;function qo(e,n){if(zt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!ru.call(n,a)||!zt(e[a],n[a]))return!1}return!0}function D1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function B1(e,n){var t=D1(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=D1(t)}}function um(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?um(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function hm(){for(var e=window,n=Ms();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ms(e.document)}return n}function Ah(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Yy(e){var n=hm(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&um(t.ownerDocument.documentElement,t)){if(r!==null&&Ah(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,o=Math.min(r.start,a);r=r.end===void 0?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=B1(t,o);var i=B1(t,r);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zy=pr&&"documentMode"in document&&11>=document.documentMode,ia=null,Cu=null,Ro=null,Su=!1;function j1(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Su||ia==null||ia!==Ms(r)||(r=ia,"selectionStart"in r&&Ah(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ro&&qo(Ro,r)||(Ro=r,r=Bs(Cu,"onSelect"),0<r.length&&(n=new Mh("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=ia)))}function Vi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var sa={animationend:Vi("Animation","AnimationEnd"),animationiteration:Vi("Animation","AnimationIteration"),animationstart:Vi("Animation","AnimationStart"),transitionend:Vi("Transition","TransitionEnd")},_c={},pm={};pr&&(pm=document.createElement("div").style,"AnimationEvent"in window||(delete sa.animationend.animation,delete sa.animationiteration.animation,delete sa.animationstart.animation),"TransitionEvent"in window||delete sa.transitionend.transition);function bd(e){if(_c[e])return _c[e];if(!sa[e])return e;var n=sa[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in pm)return _c[e]=n[t];return e}var fm=bd("animationend"),gm=bd("animationiteration"),mm=bd("animationstart"),vm=bd("transitionend"),bm=new Map,z1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(e,n){bm.set(e,n),Ml(n,[e])}for(var Lc=0;Lc<z1.length;Lc++){var $c=z1[Lc],qy=$c.toLowerCase(),Qy=$c[0].toUpperCase()+$c.slice(1);Zr(qy,"on"+Qy)}Zr(fm,"onAnimationEnd");Zr(gm,"onAnimationIteration");Zr(mm,"onAnimationStart");Zr("dblclick","onDoubleClick");Zr("focusin","onFocus");Zr("focusout","onBlur");Zr(vm,"onTransitionEnd");La("onMouseEnter",["mouseout","mouseover"]);La("onMouseLeave",["mouseout","mouseover"]);La("onPointerEnter",["pointerout","pointerover"]);La("onPointerLeave",["pointerout","pointerover"]);Ml("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ml("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ml("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ml("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ml("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ml("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ky=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));function U1(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,qb(r,n,void 0,e),e.currentTarget=null}function ym(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var s=r[i],u=s.instance,p=s.currentTarget;if(s=s.listener,u!==o&&a.isPropagationStopped())break e;U1(a,s,p),o=u}else for(i=0;i<r.length;i++){if(s=r[i],u=s.instance,p=s.currentTarget,s=s.listener,u!==o&&a.isPropagationStopped())break e;U1(a,s,p),o=u}}}if(Ps)throw e=bu,Ps=!1,bu=null,e}function Ke(e,n){var t=n[$u];t===void 0&&(t=n[$u]=new Set);var r=e+"__bubble";t.has(r)||(wm(n,e,2,!1),t.add(r))}function Nc(e,n,t){var r=0;n&&(r|=4),wm(t,e,r,n)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function Qo(e){if(!e[Gi]){e[Gi]=!0,Lg.forEach(function(t){t!=="selectionchange"&&(Ky.has(t)||Nc(t,!1,e),Nc(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Gi]||(n[Gi]=!0,Nc("selectionchange",!1,n))}}function wm(e,n,t,r){switch(rm(n)){case 1:var a=uy;break;case 4:a=hy;break;default:a=Eh}t=a.bind(null,n,t,e),a=void 0,!vu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function Ec(e,n,t,r,a){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;i=i.return}for(;s!==null;){if(i=vl(s),i===null)return;if(u=i.tag,u===5||u===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Hg(function(){var p=o,m=_h(t),y=[];e:{var C=bm.get(e);if(C!==void 0){var E=Mh,N=e;switch(e){case"keypress":if(hs(t)===0)break e;case"keydown":case"keyup":E=Ly;break;case"focusin":N="focus",E=Sc;break;case"focusout":N="blur",E=Sc;break;case"beforeblur":case"afterblur":E=Sc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=E1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Ey;break;case fm:case gm:case mm:E=by;break;case vm:E=My;break;case"scroll":E=py;break;case"wheel":E=Py;break;case"copy":case"cut":case"paste":E=wy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=M1}var S=(n&4)!==0,M=!S&&e==="scroll",w=S?C!==null?C+"Capture":null:C;S=[];for(var g=p,b;g!==null;){b=g;var v=b.stateNode;if(b.tag===5&&v!==null&&(b=v,w!==null&&(v=Wo(g,w),v!=null&&S.push(Ko(g,v,b)))),M)break;g=g.return}0<S.length&&(C=new E(C,N,null,t,m),y.push({event:C,listeners:S}))}}if(!(n&7)){e:{if(C=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",C&&t!==gu&&(N=t.relatedTarget||t.fromElement)&&(vl(N)||N[fr]))break e;if((E||C)&&(C=m.window===m?m:(C=m.ownerDocument)?C.defaultView||C.parentWindow:window,E?(N=t.relatedTarget||t.toElement,E=p,N=N?vl(N):null,N!==null&&(M=Rl(N),N!==M||N.tag!==5&&N.tag!==6)&&(N=null)):(E=null,N=p),E!==N)){if(S=E1,v="onMouseLeave",w="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(S=M1,v="onPointerLeave",w="onPointerEnter",g="pointer"),M=E==null?C:da(E),b=N==null?C:da(N),C=new S(v,g+"leave",E,t,m),C.target=M,C.relatedTarget=b,v=null,vl(m)===p&&(S=new S(w,g+"enter",N,t,m),S.target=b,S.relatedTarget=M,v=S),M=v,E&&N)n:{for(S=E,w=N,g=0,b=S;b;b=Xl(b))g++;for(b=0,v=w;v;v=Xl(v))b++;for(;0<g-b;)S=Xl(S),g--;for(;0<b-g;)w=Xl(w),b--;for(;g--;){if(S===w||w!==null&&S===w.alternate)break n;S=Xl(S),w=Xl(w)}S=null}else S=null;E!==null&&H1(y,C,E,S,!1),N!==null&&M!==null&&H1(y,M,N,S,!0)}}e:{if(C=p?da(p):window,E=C.nodeName&&C.nodeName.toLowerCase(),E==="select"||E==="input"&&C.type==="file")var L=zy;else if(A1(C))if(dm)L=Vy;else{L=Hy;var T=Uy}else(E=C.nodeName)&&E.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(L=Wy);if(L&&(L=L(e,p))){sm(y,L,t,m);break e}T&&T(e,C,p),e==="focusout"&&(T=C._wrapperState)&&T.controlled&&C.type==="number"&&cu(C,"number",C.value)}switch(T=p?da(p):window,e){case"focusin":(A1(T)||T.contentEditable==="true")&&(ia=T,Cu=p,Ro=null);break;case"focusout":Ro=Cu=ia=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,j1(y,t,m);break;case"selectionchange":if(Zy)break;case"keydown":case"keyup":j1(y,t,m)}var A;if(Ph)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else oa?om(e,t)&&(O="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(O="onCompositionStart");O&&(am&&t.locale!=="ko"&&(oa||O!=="onCompositionStart"?O==="onCompositionEnd"&&oa&&(A=lm()):(Rr=m,Ih="value"in Rr?Rr.value:Rr.textContent,oa=!0)),T=Bs(p,O),0<T.length&&(O=new I1(O,e,null,t,m),y.push({event:O,listeners:T}),A?O.data=A:(A=im(t),A!==null&&(O.data=A)))),(A=Fy?Oy(e,t):Dy(e,t))&&(p=Bs(p,"onBeforeInput"),0<p.length&&(m=new I1("onBeforeInput","beforeinput",null,t,m),y.push({event:m,listeners:p}),m.data=A))}ym(y,n)})}function Ko(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Bs(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Wo(e,t),o!=null&&r.unshift(Ko(e,o,a)),o=Wo(e,n),o!=null&&r.push(Ko(e,o,a))),e=e.return}return r}function Xl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function H1(e,n,t,r,a){for(var o=n._reactName,i=[];t!==null&&t!==r;){var s=t,u=s.alternate,p=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&p!==null&&(s=p,a?(u=Wo(t,o),u!=null&&i.unshift(Ko(t,u,s))):a||(u=Wo(t,o),u!=null&&i.push(Ko(t,u,s)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Xy=/\r\n?/g,Jy=/\u0000|\uFFFD/g;function W1(e){return(typeof e=="string"?e:""+e).replace(Xy,`
`).replace(Jy,"")}function Yi(e,n,t){if(n=W1(n),W1(e)!==n&&t)throw Error(Y(425))}function js(){}var ku=null,Tu=null;function _u(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Lu=typeof setTimeout=="function"?setTimeout:void 0,e7=typeof clearTimeout=="function"?clearTimeout:void 0,V1=typeof Promise=="function"?Promise:void 0,n7=typeof queueMicrotask=="function"?queueMicrotask:typeof V1<"u"?function(e){return V1.resolve(null).then(e).catch(t7)}:Lu;function t7(e){setTimeout(function(){throw e})}function Ic(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),Yo(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);Yo(n)}function jr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function G1(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Ba=Math.random().toString(36).slice(2),Zt="__reactFiber$"+Ba,Xo="__reactProps$"+Ba,fr="__reactContainer$"+Ba,$u="__reactEvents$"+Ba,r7="__reactListeners$"+Ba,l7="__reactHandles$"+Ba;function vl(e){var n=e[Zt];if(n)return n;for(var t=e.parentNode;t;){if(n=t[fr]||t[Zt]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=G1(e);e!==null;){if(t=e[Zt])return t;e=G1(e)}return n}e=t,t=e.parentNode}return null}function gi(e){return e=e[Zt]||e[fr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function da(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Y(33))}function yd(e){return e[Xo]||null}var Nu=[],ca=-1;function qr(e){return{current:e}}function Je(e){0>ca||(e.current=Nu[ca],Nu[ca]=null,ca--)}function Ge(e,n){ca++,Nu[ca]=e.current,e.current=n}var Gr={},jn=qr(Gr),rt=qr(!1),Tl=Gr;function $a(e,n){var t=e.type.contextTypes;if(!t)return Gr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in t)a[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function lt(e){return e=e.childContextTypes,e!=null}function zs(){Je(rt),Je(jn)}function Y1(e,n,t){if(jn.current!==Gr)throw Error(Y(168));Ge(jn,n),Ge(rt,t)}function xm(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(Y(108,Ub(e)||"Unknown",a));return ln({},t,r)}function Us(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gr,Tl=jn.current,Ge(jn,e),Ge(rt,rt.current),!0}function Z1(e,n,t){var r=e.stateNode;if(!r)throw Error(Y(169));t?(e=xm(e,n,Tl),r.__reactInternalMemoizedMergedChildContext=e,Je(rt),Je(jn),Ge(jn,e)):Je(rt),Ge(rt,t)}var sr=null,wd=!1,Mc=!1;function Cm(e){sr===null?sr=[e]:sr.push(e)}function a7(e){wd=!0,Cm(e)}function Qr(){if(!Mc&&sr!==null){Mc=!0;var e=0,n=Be;try{var t=sr;for(Be=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}sr=null,wd=!1}catch(a){throw sr!==null&&(sr=sr.slice(e+1)),Yg(Lh,Qr),a}finally{Be=n,Mc=!1}}return null}var ua=[],ha=0,Hs=null,Ws=0,xt=[],Ct=0,_l=null,dr=1,cr="";function hl(e,n){ua[ha++]=Ws,ua[ha++]=Hs,Hs=e,Ws=n}function Sm(e,n,t){xt[Ct++]=dr,xt[Ct++]=cr,xt[Ct++]=_l,_l=e;var r=dr;e=cr;var a=32-Bt(r)-1;r&=~(1<<a),t+=1;var o=32-Bt(n)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,dr=1<<32-Bt(n)+a|t<<a|r,cr=o+e}else dr=1<<o|t<<a|r,cr=e}function Fh(e){e.return!==null&&(hl(e,1),Sm(e,1,0))}function Oh(e){for(;e===Hs;)Hs=ua[--ha],ua[ha]=null,Ws=ua[--ha],ua[ha]=null;for(;e===_l;)_l=xt[--Ct],xt[Ct]=null,cr=xt[--Ct],xt[Ct]=null,dr=xt[--Ct],xt[Ct]=null}var gt=null,ft=null,en=!1,Ot=null;function km(e,n){var t=St(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function q1(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,gt=e,ft=jr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,gt=e,ft=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=_l!==null?{id:dr,overflow:cr}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=St(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,gt=e,ft=null,!0):!1;default:return!1}}function Eu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Iu(e){if(en){var n=ft;if(n){var t=n;if(!q1(e,n)){if(Eu(e))throw Error(Y(418));n=jr(t.nextSibling);var r=gt;n&&q1(e,n)?km(r,t):(e.flags=e.flags&-4097|2,en=!1,gt=e)}}else{if(Eu(e))throw Error(Y(418));e.flags=e.flags&-4097|2,en=!1,gt=e}}}function Q1(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;gt=e}function Zi(e){if(e!==gt)return!1;if(!en)return Q1(e),en=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!_u(e.type,e.memoizedProps)),n&&(n=ft)){if(Eu(e))throw Tm(),Error(Y(418));for(;n;)km(e,n),n=jr(n.nextSibling)}if(Q1(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ft=jr(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ft=null}}else ft=gt?jr(e.stateNode.nextSibling):null;return!0}function Tm(){for(var e=ft;e;)e=jr(e.nextSibling)}function Na(){ft=gt=null,en=!1}function Dh(e){Ot===null?Ot=[e]:Ot.push(e)}var o7=yr.ReactCurrentBatchConfig;function Pt(e,n){if(e&&e.defaultProps){n=ln({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Vs=qr(null),Gs=null,pa=null,Bh=null;function jh(){Bh=pa=Gs=null}function zh(e){var n=Vs.current;Je(Vs),e._currentValue=n}function Mu(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Sa(e,n){Gs=e,Bh=pa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(tt=!0),e.firstContext=null)}function Tt(e){var n=e._currentValue;if(Bh!==e)if(e={context:e,memoizedValue:n,next:null},pa===null){if(Gs===null)throw Error(Y(308));pa=e,Gs.dependencies={lanes:0,firstContext:e}}else pa=pa.next=e;return n}var bl=null;function Uh(e){bl===null?bl=[e]:bl.push(e)}function _m(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,Uh(n)):(t.next=a.next,a.next=t),n.interleaved=t,gr(e,r)}function gr(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Er=!1;function Hh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lm(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ur(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function zr(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ie&2){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,gr(e,t)}return a=r.interleaved,a===null?(n.next=n,Uh(r)):(n.next=a.next,a.next=n),r.interleaved=n,gr(e,t)}function ps(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,$h(e,t)}}function K1(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?a=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?a=o=n:o=o.next=n}else a=o=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ys(e,n,t,r){var a=e.updateQueue;Er=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var u=s,p=u.next;u.next=null,i===null?o=p:i.next=p,i=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==i&&(s===null?m.firstBaseUpdate=p:s.next=p,m.lastBaseUpdate=u))}if(o!==null){var y=a.baseState;i=0,m=p=u=null,s=o;do{var C=s.lane,E=s.eventTime;if((r&C)===C){m!==null&&(m=m.next={eventTime:E,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var N=e,S=s;switch(C=n,E=t,S.tag){case 1:if(N=S.payload,typeof N=="function"){y=N.call(E,y,C);break e}y=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=S.payload,C=typeof N=="function"?N.call(E,y,C):N,C==null)break e;y=ln({},y,C);break e;case 2:Er=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,C=a.effects,C===null?a.effects=[s]:C.push(s))}else E={eventTime:E,lane:C,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(p=m=E,u=y):m=m.next=E,i|=C;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;C=s,s=C.next,C.next=null,a.lastBaseUpdate=C,a.shared.pending=null}}while(1);if(m===null&&(u=y),a.baseState=u,a.firstBaseUpdate=p,a.lastBaseUpdate=m,n=a.shared.interleaved,n!==null){a=n;do i|=a.lane,a=a.next;while(a!==n)}else o===null&&(a.shared.lanes=0);$l|=i,e.lanes=i,e.memoizedState=y}}function X1(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(Y(191,a));a.call(r)}}}var $m=new _g.Component().refs;function Ru(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:ln({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var xd={isMounted:function(e){return(e=e._reactInternals)?Rl(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Vn(),a=Hr(e),o=ur(r,a);o.payload=n,t!=null&&(o.callback=t),n=zr(e,o,a),n!==null&&(jt(n,e,a,r),ps(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Vn(),a=Hr(e),o=ur(r,a);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=zr(e,o,a),n!==null&&(jt(n,e,a,r),ps(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Vn(),r=Hr(e),a=ur(t,r);a.tag=2,n!=null&&(a.callback=n),n=zr(e,a,r),n!==null&&(jt(n,e,r,t),ps(n,e,r))}};function J1(e,n,t,r,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!qo(t,r)||!qo(a,o):!0}function Nm(e,n,t){var r=!1,a=Gr,o=n.contextType;return typeof o=="object"&&o!==null?o=Tt(o):(a=lt(n)?Tl:jn.current,r=n.contextTypes,o=(r=r!=null)?$a(e,a):Gr),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=xd,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),n}function e2(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&xd.enqueueReplaceState(n,n.state,null)}function Pu(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs=$m,Hh(e);var o=n.contextType;typeof o=="object"&&o!==null?a.context=Tt(o):(o=lt(n)?Tl:jn.current,a.context=$a(e,o)),a.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Ru(e,n,o,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&xd.enqueueReplaceState(a,a.state,null),Ys(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function po(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Y(309));var r=t.stateNode}if(!r)throw Error(Y(147,e));var a=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var s=a.refs;s===$m&&(s=a.refs={}),i===null?delete s[o]:s[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(Y(284));if(!t._owner)throw Error(Y(290,e))}return e}function qi(e,n){throw e=Object.prototype.toString.call(n),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function n2(e){var n=e._init;return n(e._payload)}function Em(e){function n(w,g){if(e){var b=w.deletions;b===null?(w.deletions=[g],w.flags|=16):b.push(g)}}function t(w,g){if(!e)return null;for(;g!==null;)n(w,g),g=g.sibling;return null}function r(w,g){for(w=new Map;g!==null;)g.key!==null?w.set(g.key,g):w.set(g.index,g),g=g.sibling;return w}function a(w,g){return w=Wr(w,g),w.index=0,w.sibling=null,w}function o(w,g,b){return w.index=b,e?(b=w.alternate,b!==null?(b=b.index,b<g?(w.flags|=2,g):b):(w.flags|=2,g)):(w.flags|=1048576,g)}function i(w){return e&&w.alternate===null&&(w.flags|=2),w}function s(w,g,b,v){return g===null||g.tag!==6?(g=Bc(b,w.mode,v),g.return=w,g):(g=a(g,b),g.return=w,g)}function u(w,g,b,v){var L=b.type;return L===aa?m(w,g,b.props.children,v,b.key):g!==null&&(g.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Nr&&n2(L)===g.type)?(v=a(g,b.props),v.ref=po(w,g,b),v.return=w,v):(v=ys(b.type,b.key,b.props,null,w.mode,v),v.ref=po(w,g,b),v.return=w,v)}function p(w,g,b,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=jc(b,w.mode,v),g.return=w,g):(g=a(g,b.children||[]),g.return=w,g)}function m(w,g,b,v,L){return g===null||g.tag!==7?(g=kl(b,w.mode,v,L),g.return=w,g):(g=a(g,b),g.return=w,g)}function y(w,g,b){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Bc(""+g,w.mode,b),g.return=w,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Di:return b=ys(g.type,g.key,g.props,null,w.mode,b),b.ref=po(w,null,g),b.return=w,b;case la:return g=jc(g,w.mode,b),g.return=w,g;case Nr:var v=g._init;return y(w,v(g._payload),b)}if(wo(g)||io(g))return g=kl(g,w.mode,b,null),g.return=w,g;qi(w,g)}return null}function C(w,g,b,v){var L=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return L!==null?null:s(w,g,""+b,v);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Di:return b.key===L?u(w,g,b,v):null;case la:return b.key===L?p(w,g,b,v):null;case Nr:return L=b._init,C(w,g,L(b._payload),v)}if(wo(b)||io(b))return L!==null?null:m(w,g,b,v,null);qi(w,b)}return null}function E(w,g,b,v,L){if(typeof v=="string"&&v!==""||typeof v=="number")return w=w.get(b)||null,s(g,w,""+v,L);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Di:return w=w.get(v.key===null?b:v.key)||null,u(g,w,v,L);case la:return w=w.get(v.key===null?b:v.key)||null,p(g,w,v,L);case Nr:var T=v._init;return E(w,g,b,T(v._payload),L)}if(wo(v)||io(v))return w=w.get(b)||null,m(g,w,v,L,null);qi(g,v)}return null}function N(w,g,b,v){for(var L=null,T=null,A=g,O=g=0,z=null;A!==null&&O<b.length;O++){A.index>O?(z=A,A=null):z=A.sibling;var Z=C(w,A,b[O],v);if(Z===null){A===null&&(A=z);break}e&&A&&Z.alternate===null&&n(w,A),g=o(Z,g,O),T===null?L=Z:T.sibling=Z,T=Z,A=z}if(O===b.length)return t(w,A),en&&hl(w,O),L;if(A===null){for(;O<b.length;O++)A=y(w,b[O],v),A!==null&&(g=o(A,g,O),T===null?L=A:T.sibling=A,T=A);return en&&hl(w,O),L}for(A=r(w,A);O<b.length;O++)z=E(A,w,O,b[O],v),z!==null&&(e&&z.alternate!==null&&A.delete(z.key===null?O:z.key),g=o(z,g,O),T===null?L=z:T.sibling=z,T=z);return e&&A.forEach(function(fe){return n(w,fe)}),en&&hl(w,O),L}function S(w,g,b,v){var L=io(b);if(typeof L!="function")throw Error(Y(150));if(b=L.call(b),b==null)throw Error(Y(151));for(var T=L=null,A=g,O=g=0,z=null,Z=b.next();A!==null&&!Z.done;O++,Z=b.next()){A.index>O?(z=A,A=null):z=A.sibling;var fe=C(w,A,Z.value,v);if(fe===null){A===null&&(A=z);break}e&&A&&fe.alternate===null&&n(w,A),g=o(fe,g,O),T===null?L=fe:T.sibling=fe,T=fe,A=z}if(Z.done)return t(w,A),en&&hl(w,O),L;if(A===null){for(;!Z.done;O++,Z=b.next())Z=y(w,Z.value,v),Z!==null&&(g=o(Z,g,O),T===null?L=Z:T.sibling=Z,T=Z);return en&&hl(w,O),L}for(A=r(w,A);!Z.done;O++,Z=b.next())Z=E(A,w,O,Z.value,v),Z!==null&&(e&&Z.alternate!==null&&A.delete(Z.key===null?O:Z.key),g=o(Z,g,O),T===null?L=Z:T.sibling=Z,T=Z);return e&&A.forEach(function(ce){return n(w,ce)}),en&&hl(w,O),L}function M(w,g,b,v){if(typeof b=="object"&&b!==null&&b.type===aa&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Di:e:{for(var L=b.key,T=g;T!==null;){if(T.key===L){if(L=b.type,L===aa){if(T.tag===7){t(w,T.sibling),g=a(T,b.props.children),g.return=w,w=g;break e}}else if(T.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Nr&&n2(L)===T.type){t(w,T.sibling),g=a(T,b.props),g.ref=po(w,T,b),g.return=w,w=g;break e}t(w,T);break}else n(w,T);T=T.sibling}b.type===aa?(g=kl(b.props.children,w.mode,v,b.key),g.return=w,w=g):(v=ys(b.type,b.key,b.props,null,w.mode,v),v.ref=po(w,g,b),v.return=w,w=v)}return i(w);case la:e:{for(T=b.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){t(w,g.sibling),g=a(g,b.children||[]),g.return=w,w=g;break e}else{t(w,g);break}else n(w,g);g=g.sibling}g=jc(b,w.mode,v),g.return=w,w=g}return i(w);case Nr:return T=b._init,M(w,g,T(b._payload),v)}if(wo(b))return N(w,g,b,v);if(io(b))return S(w,g,b,v);qi(w,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,g!==null&&g.tag===6?(t(w,g.sibling),g=a(g,b),g.return=w,w=g):(t(w,g),g=Bc(b,w.mode,v),g.return=w,w=g),i(w)):t(w,g)}return M}var Ea=Em(!0),Im=Em(!1),mi={},Kt=qr(mi),Jo=qr(mi),ei=qr(mi);function yl(e){if(e===mi)throw Error(Y(174));return e}function Wh(e,n){switch(Ge(ei,n),Ge(Jo,e),Ge(Kt,mi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:hu(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=hu(n,e)}Je(Kt),Ge(Kt,n)}function Ia(){Je(Kt),Je(Jo),Je(ei)}function Mm(e){yl(ei.current);var n=yl(Kt.current),t=hu(n,e.type);n!==t&&(Ge(Jo,e),Ge(Kt,t))}function Vh(e){Jo.current===e&&(Je(Kt),Je(Jo))}var tn=qr(0);function Zs(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Rc=[];function Gh(){for(var e=0;e<Rc.length;e++)Rc[e]._workInProgressVersionPrimary=null;Rc.length=0}var fs=yr.ReactCurrentDispatcher,Pc=yr.ReactCurrentBatchConfig,Ll=0,rn=null,bn=null,Sn=null,qs=!1,Po=!1,ni=0,i7=0;function On(){throw Error(Y(321))}function Yh(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!zt(e[t],n[t]))return!1;return!0}function Zh(e,n,t,r,a,o){if(Ll=o,rn=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,fs.current=e===null||e.memoizedState===null?u7:h7,e=t(r,a),Po){o=0;do{if(Po=!1,ni=0,25<=o)throw Error(Y(301));o+=1,Sn=bn=null,n.updateQueue=null,fs.current=p7,e=t(r,a)}while(Po)}if(fs.current=Qs,n=bn!==null&&bn.next!==null,Ll=0,Sn=bn=rn=null,qs=!1,n)throw Error(Y(300));return e}function qh(){var e=ni!==0;return ni=0,e}function Gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?rn.memoizedState=Sn=e:Sn=Sn.next=e,Sn}function _t(){if(bn===null){var e=rn.alternate;e=e!==null?e.memoizedState:null}else e=bn.next;var n=Sn===null?rn.memoizedState:Sn.next;if(n!==null)Sn=n,bn=e;else{if(e===null)throw Error(Y(310));bn=e,e={memoizedState:bn.memoizedState,baseState:bn.baseState,baseQueue:bn.baseQueue,queue:bn.queue,next:null},Sn===null?rn.memoizedState=Sn=e:Sn=Sn.next=e}return Sn}function ti(e,n){return typeof n=="function"?n(e):n}function Ac(e){var n=_t(),t=n.queue;if(t===null)throw Error(Y(311));t.lastRenderedReducer=e;var r=bn,a=r.baseQueue,o=t.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}r.baseQueue=a=o,t.pending=null}if(a!==null){o=a.next,r=r.baseState;var s=i=null,u=null,p=o;do{var m=p.lane;if((Ll&m)===m)u!==null&&(u=u.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var y={lane:m,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};u===null?(s=u=y,i=r):u=u.next=y,rn.lanes|=m,$l|=m}p=p.next}while(p!==null&&p!==o);u===null?i=r:u.next=s,zt(r,n.memoizedState)||(tt=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do o=a.lane,rn.lanes|=o,$l|=o,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Fc(e){var n=_t(),t=n.queue;if(t===null)throw Error(Y(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,o=n.memoizedState;if(a!==null){t.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);zt(o,n.memoizedState)||(tt=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Rm(){}function Pm(e,n){var t=rn,r=_t(),a=n(),o=!zt(r.memoizedState,a);if(o&&(r.memoizedState=a,tt=!0),r=r.queue,Qh(Om.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Sn!==null&&Sn.memoizedState.tag&1){if(t.flags|=2048,ri(9,Fm.bind(null,t,r,a,n),void 0,null),kn===null)throw Error(Y(349));Ll&30||Am(t,n,a)}return a}function Am(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=rn.updateQueue,n===null?(n={lastEffect:null,stores:null},rn.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Fm(e,n,t,r){n.value=t,n.getSnapshot=r,Dm(n)&&Bm(e)}function Om(e,n,t){return t(function(){Dm(n)&&Bm(e)})}function Dm(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!zt(e,t)}catch{return!0}}function Bm(e){var n=gr(e,1);n!==null&&jt(n,e,1,-1)}function t2(e){var n=Gt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:e},n.queue=e,e=e.dispatch=c7.bind(null,rn,e),[n.memoizedState,e]}function ri(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=rn.updateQueue,n===null?(n={lastEffect:null,stores:null},rn.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function jm(){return _t().memoizedState}function gs(e,n,t,r){var a=Gt();rn.flags|=e,a.memoizedState=ri(1|n,t,void 0,r===void 0?null:r)}function Cd(e,n,t,r){var a=_t();r=r===void 0?null:r;var o=void 0;if(bn!==null){var i=bn.memoizedState;if(o=i.destroy,r!==null&&Yh(r,i.deps)){a.memoizedState=ri(n,t,o,r);return}}rn.flags|=e,a.memoizedState=ri(1|n,t,o,r)}function r2(e,n){return gs(8390656,8,e,n)}function Qh(e,n){return Cd(2048,8,e,n)}function zm(e,n){return Cd(4,2,e,n)}function Um(e,n){return Cd(4,4,e,n)}function Hm(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Wm(e,n,t){return t=t!=null?t.concat([e]):null,Cd(4,4,Hm.bind(null,n,e),t)}function Kh(){}function Vm(e,n){var t=_t();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Yh(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Gm(e,n){var t=_t();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Yh(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ym(e,n,t){return Ll&21?(zt(t,n)||(t=Qg(),rn.lanes|=t,$l|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=t)}function s7(e,n){var t=Be;Be=t!==0&&4>t?t:4,e(!0);var r=Pc.transition;Pc.transition={};try{e(!1),n()}finally{Be=t,Pc.transition=r}}function Zm(){return _t().memoizedState}function d7(e,n,t){var r=Hr(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},qm(e))Qm(n,t);else if(t=_m(e,n,t,r),t!==null){var a=Vn();jt(t,e,r,a),Km(t,n,r)}}function c7(e,n,t){var r=Hr(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(qm(e))Qm(n,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,s=o(i,t);if(a.hasEagerState=!0,a.eagerState=s,zt(s,i)){var u=n.interleaved;u===null?(a.next=a,Uh(n)):(a.next=u.next,u.next=a),n.interleaved=a;return}}catch{}finally{}t=_m(e,n,a,r),t!==null&&(a=Vn(),jt(t,e,r,a),Km(t,n,r))}}function qm(e){var n=e.alternate;return e===rn||n!==null&&n===rn}function Qm(e,n){Po=qs=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Km(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,$h(e,t)}}var Qs={readContext:Tt,useCallback:On,useContext:On,useEffect:On,useImperativeHandle:On,useInsertionEffect:On,useLayoutEffect:On,useMemo:On,useReducer:On,useRef:On,useState:On,useDebugValue:On,useDeferredValue:On,useTransition:On,useMutableSource:On,useSyncExternalStore:On,useId:On,unstable_isNewReconciler:!1},u7={readContext:Tt,useCallback:function(e,n){return Gt().memoizedState=[e,n===void 0?null:n],e},useContext:Tt,useEffect:r2,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,gs(4194308,4,Hm.bind(null,n,e),t)},useLayoutEffect:function(e,n){return gs(4194308,4,e,n)},useInsertionEffect:function(e,n){return gs(4,2,e,n)},useMemo:function(e,n){var t=Gt();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Gt();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=d7.bind(null,rn,e),[r.memoizedState,e]},useRef:function(e){var n=Gt();return e={current:e},n.memoizedState=e},useState:t2,useDebugValue:Kh,useDeferredValue:function(e){return Gt().memoizedState=e},useTransition:function(){var e=t2(!1),n=e[0];return e=s7.bind(null,e[1]),Gt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=rn,a=Gt();if(en){if(t===void 0)throw Error(Y(407));t=t()}else{if(t=n(),kn===null)throw Error(Y(349));Ll&30||Am(r,n,t)}a.memoizedState=t;var o={value:t,getSnapshot:n};return a.queue=o,r2(Om.bind(null,r,o,e),[e]),r.flags|=2048,ri(9,Fm.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Gt(),n=kn.identifierPrefix;if(en){var t=cr,r=dr;t=(r&~(1<<32-Bt(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=ni++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=i7++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},h7={readContext:Tt,useCallback:Vm,useContext:Tt,useEffect:Qh,useImperativeHandle:Wm,useInsertionEffect:zm,useLayoutEffect:Um,useMemo:Gm,useReducer:Ac,useRef:jm,useState:function(){return Ac(ti)},useDebugValue:Kh,useDeferredValue:function(e){var n=_t();return Ym(n,bn.memoizedState,e)},useTransition:function(){var e=Ac(ti)[0],n=_t().memoizedState;return[e,n]},useMutableSource:Rm,useSyncExternalStore:Pm,useId:Zm,unstable_isNewReconciler:!1},p7={readContext:Tt,useCallback:Vm,useContext:Tt,useEffect:Qh,useImperativeHandle:Wm,useInsertionEffect:zm,useLayoutEffect:Um,useMemo:Gm,useReducer:Fc,useRef:jm,useState:function(){return Fc(ti)},useDebugValue:Kh,useDeferredValue:function(e){var n=_t();return bn===null?n.memoizedState=e:Ym(n,bn.memoizedState,e)},useTransition:function(){var e=Fc(ti)[0],n=_t().memoizedState;return[e,n]},useMutableSource:Rm,useSyncExternalStore:Pm,useId:Zm,unstable_isNewReconciler:!1};function Ma(e,n){try{var t="",r=n;do t+=zb(r),r=r.return;while(r);var a=t}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:a,digest:null}}function Oc(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Au(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var f7=typeof WeakMap=="function"?WeakMap:Map;function Xm(e,n,t){t=ur(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Xs||(Xs=!0,Vu=r),Au(e,n)},t}function Jm(e,n,t){t=ur(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){Au(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Au(e,n),typeof r!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function l2(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new f7;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=$7.bind(null,e,n,t),n.then(e,e))}function a2(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function o2(e,n,t,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=ur(-1,1),n.tag=2,zr(t,n,1))),t.lanes|=1),e)}var g7=yr.ReactCurrentOwner,tt=!1;function Hn(e,n,t,r){n.child=e===null?Im(n,null,t,r):Ea(n,e.child,t,r)}function i2(e,n,t,r,a){t=t.render;var o=n.ref;return Sa(n,a),r=Zh(e,n,t,r,o,a),t=qh(),e!==null&&!tt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,mr(e,n,a)):(en&&t&&Fh(n),n.flags|=1,Hn(e,n,r,a),n.child)}function s2(e,n,t,r,a){if(e===null){var o=t.type;return typeof o=="function"&&!ap(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,e3(e,n,o,r,a)):(e=ys(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&a)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:qo,t(i,r)&&e.ref===n.ref)return mr(e,n,a)}return n.flags|=1,e=Wr(o,r),e.ref=n.ref,e.return=n,n.child=e}function e3(e,n,t,r,a){if(e!==null){var o=e.memoizedProps;if(qo(o,r)&&e.ref===n.ref)if(tt=!1,n.pendingProps=r=o,(e.lanes&a)!==0)e.flags&131072&&(tt=!0);else return n.lanes=e.lanes,mr(e,n,a)}return Fu(e,n,t,r,a)}function n3(e,n,t){var r=n.pendingProps,a=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(ga,dt),dt|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Ge(ga,dt),dt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,Ge(ga,dt),dt|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,Ge(ga,dt),dt|=r;return Hn(e,n,a,t),n.child}function t3(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Fu(e,n,t,r,a){var o=lt(t)?Tl:jn.current;return o=$a(n,o),Sa(n,a),t=Zh(e,n,t,r,o,a),r=qh(),e!==null&&!tt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,mr(e,n,a)):(en&&r&&Fh(n),n.flags|=1,Hn(e,n,t,a),n.child)}function d2(e,n,t,r,a){if(lt(t)){var o=!0;Us(n)}else o=!1;if(Sa(n,a),n.stateNode===null)ms(e,n),Nm(n,t,r),Pu(n,t,r,a),r=!0;else if(e===null){var i=n.stateNode,s=n.memoizedProps;i.props=s;var u=i.context,p=t.contextType;typeof p=="object"&&p!==null?p=Tt(p):(p=lt(t)?Tl:jn.current,p=$a(n,p));var m=t.getDerivedStateFromProps,y=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||u!==p)&&e2(n,i,r,p),Er=!1;var C=n.memoizedState;i.state=C,Ys(n,r,i,a),u=n.memoizedState,s!==r||C!==u||rt.current||Er?(typeof m=="function"&&(Ru(n,t,m,r),u=n.memoizedState),(s=Er||J1(n,t,s,r,C,u,p))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),i.props=r,i.state=u,i.context=p,r=s):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,Lm(e,n),s=n.memoizedProps,p=n.type===n.elementType?s:Pt(n.type,s),i.props=p,y=n.pendingProps,C=i.context,u=t.contextType,typeof u=="object"&&u!==null?u=Tt(u):(u=lt(t)?Tl:jn.current,u=$a(n,u));var E=t.getDerivedStateFromProps;(m=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==y||C!==u)&&e2(n,i,r,u),Er=!1,C=n.memoizedState,i.state=C,Ys(n,r,i,a);var N=n.memoizedState;s!==y||C!==N||rt.current||Er?(typeof E=="function"&&(Ru(n,t,E,r),N=n.memoizedState),(p=Er||J1(n,t,p,r,C,N,u)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,N,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,N,u)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=N),i.props=r,i.state=N,i.context=u,r=p):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(n.flags|=1024),r=!1)}return Ou(e,n,t,r,o,a)}function Ou(e,n,t,r,a,o){t3(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return a&&Z1(n,t,!1),mr(e,n,o);r=n.stateNode,g7.current=n;var s=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=Ea(n,e.child,null,o),n.child=Ea(n,null,s,o)):Hn(e,n,s,o),n.memoizedState=r.state,a&&Z1(n,t,!0),n.child}function r3(e){var n=e.stateNode;n.pendingContext?Y1(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Y1(e,n.context,!1),Wh(e,n.containerInfo)}function c2(e,n,t,r,a){return Na(),Dh(a),n.flags|=256,Hn(e,n,t,r),n.child}var Du={dehydrated:null,treeContext:null,retryLane:0};function Bu(e){return{baseLanes:e,cachePool:null,transitions:null}}function l3(e,n,t){var r=n.pendingProps,a=tn.current,o=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Ge(tn,a&1),e===null)return Iu(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Td(i,r,0,null),e=kl(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Bu(t),n.memoizedState=Du,e):Xh(n,i));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return m7(e,n,i,r,s,a,t);if(o){o=r.fallback,i=n.mode,a=e.child,s=a.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=Wr(a,u),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?o=Wr(s,o):(o=kl(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?Bu(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=Du,r}return o=e.child,e=o.sibling,r=Wr(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Xh(e,n){return n=Td({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Qi(e,n,t,r){return r!==null&&Dh(r),Ea(n,e.child,null,t),e=Xh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function m7(e,n,t,r,a,o,i){if(t)return n.flags&256?(n.flags&=-257,r=Oc(Error(Y(422))),Qi(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,a=n.mode,r=Td({mode:"visible",children:r.children},a,0,null),o=kl(o,a,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Ea(n,e.child,null,i),n.child.memoizedState=Bu(i),n.memoizedState=Du,o);if(!(n.mode&1))return Qi(e,n,i,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(Y(419)),r=Oc(o,r,void 0),Qi(e,n,i,r)}if(s=(i&e.childLanes)!==0,tt||s){if(r=kn,r!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|i)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,gr(e,a),jt(r,e,a,-1))}return lp(),r=Oc(Error(Y(421))),Qi(e,n,i,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=N7.bind(null,e),a._reactRetry=n,null):(e=o.treeContext,ft=jr(a.nextSibling),gt=n,en=!0,Ot=null,e!==null&&(xt[Ct++]=dr,xt[Ct++]=cr,xt[Ct++]=_l,dr=e.id,cr=e.overflow,_l=n),n=Xh(n,r.children),n.flags|=4096,n)}function u2(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Mu(e.return,n,t)}function Dc(e,n,t,r,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=a)}function a3(e,n,t){var r=n.pendingProps,a=r.revealOrder,o=r.tail;if(Hn(e,n,r.children,t),r=tn.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&u2(e,t,n);else if(e.tag===19)u2(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ge(tn,r),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&Zs(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),Dc(n,!1,a,t,o);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Zs(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Dc(n,!0,t,null,o);break;case"together":Dc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ms(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function mr(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),$l|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(Y(153));if(n.child!==null){for(e=n.child,t=Wr(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Wr(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function v7(e,n,t){switch(n.tag){case 3:r3(n),Na();break;case 5:Mm(n);break;case 1:lt(n.type)&&Us(n);break;case 4:Wh(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;Ge(Vs,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(Ge(tn,tn.current&1),n.flags|=128,null):t&n.child.childLanes?l3(e,n,t):(Ge(tn,tn.current&1),e=mr(e,n,t),e!==null?e.sibling:null);Ge(tn,tn.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return a3(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ge(tn,tn.current),r)break;return null;case 22:case 23:return n.lanes=0,n3(e,n,t)}return mr(e,n,t)}var o3,ju,i3,s3;o3=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ju=function(){};i3=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,yl(Kt.current);var o=null;switch(t){case"input":a=su(e,a),r=su(e,r),o=[];break;case"select":a=ln({},a,{value:void 0}),r=ln({},r,{value:void 0}),o=[];break;case"textarea":a=uu(e,a),r=uu(e,r),o=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=js)}pu(t,r);var i;t=null;for(p in a)if(!r.hasOwnProperty(p)&&a.hasOwnProperty(p)&&a[p]!=null)if(p==="style"){var s=a[p];for(i in s)s.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Uo.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in r){var u=r[p];if(s=a!=null?a[p]:void 0,r.hasOwnProperty(p)&&u!==s&&(u!=null||s!=null))if(p==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(t||(t={}),t[i]=u[i])}else t||(o||(o=[]),o.push(p,t)),t=u;else p==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(p,u)):p==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(p,""+u):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(p)?(u!=null&&p==="onScroll"&&Ke("scroll",e),o||s===u||(o=[])):(o=o||[]).push(p,u))}t&&(o=o||[]).push("style",t);var p=o;(n.updateQueue=p)&&(n.flags|=4)}};s3=function(e,n,t,r){t!==r&&(n.flags|=4)};function fo(e,n){if(!en)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Dn(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function b7(e,n,t){var r=n.pendingProps;switch(Oh(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dn(n),null;case 1:return lt(n.type)&&zs(),Dn(n),null;case 3:return r=n.stateNode,Ia(),Je(rt),Je(jn),Gh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ot!==null&&(Zu(Ot),Ot=null))),ju(e,n),Dn(n),null;case 5:Vh(n);var a=yl(ei.current);if(t=n.type,e!==null&&n.stateNode!=null)i3(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(Y(166));return Dn(n),null}if(e=yl(Kt.current),Zi(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Zt]=n,r[Xo]=o,e=(n.mode&1)!==0,t){case"dialog":Ke("cancel",r),Ke("close",r);break;case"iframe":case"object":case"embed":Ke("load",r);break;case"video":case"audio":for(a=0;a<Co.length;a++)Ke(Co[a],r);break;case"source":Ke("error",r);break;case"img":case"image":case"link":Ke("error",r),Ke("load",r);break;case"details":Ke("toggle",r);break;case"input":w1(r,o),Ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ke("invalid",r);break;case"textarea":C1(r,o),Ke("invalid",r)}pu(t,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Yi(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Yi(r.textContent,s,e),a=["children",""+s]):Uo.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Ke("scroll",r)}switch(t){case"input":Bi(r),x1(r,o,!0);break;case"textarea":Bi(r),S1(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=js)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ag(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[Zt]=n,e[Xo]=r,o3(e,n,!1,!1),n.stateNode=e;e:{switch(i=fu(t,r),t){case"dialog":Ke("cancel",e),Ke("close",e),a=r;break;case"iframe":case"object":case"embed":Ke("load",e),a=r;break;case"video":case"audio":for(a=0;a<Co.length;a++)Ke(Co[a],e);a=r;break;case"source":Ke("error",e),a=r;break;case"img":case"image":case"link":Ke("error",e),Ke("load",e),a=r;break;case"details":Ke("toggle",e),a=r;break;case"input":w1(e,r),a=su(e,r),Ke("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ln({},r,{value:void 0}),Ke("invalid",e);break;case"textarea":C1(e,r),a=uu(e,r),Ke("invalid",e);break;default:a=r}pu(t,a),s=a;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Dg(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Fg(e,u)):o==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Ho(e,u):typeof u=="number"&&Ho(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Uo.hasOwnProperty(o)?u!=null&&o==="onScroll"&&Ke("scroll",e):u!=null&&Ch(e,o,u,i))}switch(t){case"input":Bi(e),x1(e,r,!1);break;case"textarea":Bi(e),S1(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ya(e,!!r.multiple,o,!1):r.defaultValue!=null&&ya(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=js)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Dn(n),null;case 6:if(e&&n.stateNode!=null)s3(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(Y(166));if(t=yl(ei.current),yl(Kt.current),Zi(n)){if(r=n.stateNode,t=n.memoizedProps,r[Zt]=n,(o=r.nodeValue!==t)&&(e=gt,e!==null))switch(e.tag){case 3:Yi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yi(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Zt]=n,n.stateNode=r}return Dn(n),null;case 13:if(Je(tn),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(en&&ft!==null&&n.mode&1&&!(n.flags&128))Tm(),Na(),n.flags|=98560,o=!1;else if(o=Zi(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(Y(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Y(317));o[Zt]=n}else Na(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Dn(n),o=!1}else Ot!==null&&(Zu(Ot),Ot=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||tn.current&1?yn===0&&(yn=3):lp())),n.updateQueue!==null&&(n.flags|=4),Dn(n),null);case 4:return Ia(),ju(e,n),e===null&&Qo(n.stateNode.containerInfo),Dn(n),null;case 10:return zh(n.type._context),Dn(n),null;case 17:return lt(n.type)&&zs(),Dn(n),null;case 19:if(Je(tn),o=n.memoizedState,o===null)return Dn(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)fo(o,!1);else{if(yn!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Zs(e),i!==null){for(n.flags|=128,fo(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Ge(tn,tn.current&1|2),n.child}e=e.sibling}o.tail!==null&&sn()>Ra&&(n.flags|=128,r=!0,fo(o,!1),n.lanes=4194304)}else{if(!r)if(e=Zs(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),fo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!en)return Dn(n),null}else 2*sn()-o.renderingStartTime>Ra&&t!==1073741824&&(n.flags|=128,r=!0,fo(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=sn(),n.sibling=null,t=tn.current,Ge(tn,r?t&1|2:t&1),n):(Dn(n),null);case 22:case 23:return rp(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?dt&1073741824&&(Dn(n),n.subtreeFlags&6&&(n.flags|=8192)):Dn(n),null;case 24:return null;case 25:return null}throw Error(Y(156,n.tag))}function y7(e,n){switch(Oh(n),n.tag){case 1:return lt(n.type)&&zs(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ia(),Je(rt),Je(jn),Gh(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Vh(n),null;case 13:if(Je(tn),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(Y(340));Na()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Je(tn),null;case 4:return Ia(),null;case 10:return zh(n.type._context),null;case 22:case 23:return rp(),null;case 24:return null;default:return null}}var Ki=!1,Bn=!1,w7=typeof WeakSet=="function"?WeakSet:Set,ne=null;function fa(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){on(e,n,r)}else t.current=null}function zu(e,n,t){try{t()}catch(r){on(e,n,r)}}var h2=!1;function x7(e,n){if(ku=Os,e=hm(),Ah(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,s=-1,u=-1,p=0,m=0,y=e,C=null;n:for(;;){for(var E;y!==t||a!==0&&y.nodeType!==3||(s=i+a),y!==o||r!==0&&y.nodeType!==3||(u=i+r),y.nodeType===3&&(i+=y.nodeValue.length),(E=y.firstChild)!==null;)C=y,y=E;for(;;){if(y===e)break n;if(C===t&&++p===a&&(s=i),C===o&&++m===r&&(u=i),(E=y.nextSibling)!==null)break;y=C,C=y.parentNode}y=E}t=s===-1||u===-1?null:{start:s,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Tu={focusedElem:e,selectionRange:t},Os=!1,ne=n;ne!==null;)if(n=ne,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ne=e;else for(;ne!==null;){n=ne;try{var N=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var S=N.memoizedProps,M=N.memoizedState,w=n.stateNode,g=w.getSnapshotBeforeUpdate(n.elementType===n.type?S:Pt(n.type,S),M);w.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var b=n.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(v){on(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,ne=e;break}ne=n.return}return N=h2,h2=!1,N}function Ao(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&zu(n,t,o)}a=a.next}while(a!==r)}}function Sd(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Uu(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function d3(e){var n=e.alternate;n!==null&&(e.alternate=null,d3(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Zt],delete n[Xo],delete n[$u],delete n[r7],delete n[l7])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function c3(e){return e.tag===5||e.tag===3||e.tag===4}function p2(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||c3(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=js));else if(r!==4&&(e=e.child,e!==null))for(Hu(e,n,t),e=e.sibling;e!==null;)Hu(e,n,t),e=e.sibling}function Wu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wu(e,n,t),e=e.sibling;e!==null;)Wu(e,n,t),e=e.sibling}var Ln=null,Ft=!1;function _r(e,n,t){for(t=t.child;t!==null;)u3(e,n,t),t=t.sibling}function u3(e,n,t){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(gd,t)}catch{}switch(t.tag){case 5:Bn||fa(t,n);case 6:var r=Ln,a=Ft;Ln=null,_r(e,n,t),Ln=r,Ft=a,Ln!==null&&(Ft?(e=Ln,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ln.removeChild(t.stateNode));break;case 18:Ln!==null&&(Ft?(e=Ln,t=t.stateNode,e.nodeType===8?Ic(e.parentNode,t):e.nodeType===1&&Ic(e,t),Yo(e)):Ic(Ln,t.stateNode));break;case 4:r=Ln,a=Ft,Ln=t.stateNode.containerInfo,Ft=!0,_r(e,n,t),Ln=r,Ft=a;break;case 0:case 11:case 14:case 15:if(!Bn&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&zu(t,n,i),a=a.next}while(a!==r)}_r(e,n,t);break;case 1:if(!Bn&&(fa(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){on(t,n,s)}_r(e,n,t);break;case 21:_r(e,n,t);break;case 22:t.mode&1?(Bn=(r=Bn)||t.memoizedState!==null,_r(e,n,t),Bn=r):_r(e,n,t);break;default:_r(e,n,t)}}function f2(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new w7),n.forEach(function(r){var a=E7.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function Mt(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var o=e,i=n,s=i;e:for(;s!==null;){switch(s.tag){case 5:Ln=s.stateNode,Ft=!1;break e;case 3:Ln=s.stateNode.containerInfo,Ft=!0;break e;case 4:Ln=s.stateNode.containerInfo,Ft=!0;break e}s=s.return}if(Ln===null)throw Error(Y(160));u3(o,i,a),Ln=null,Ft=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(p){on(a,n,p)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)h3(n,e),n=n.sibling}function h3(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(n,e),Ut(e),r&4){try{Ao(3,e,e.return),Sd(3,e)}catch(S){on(e,e.return,S)}try{Ao(5,e,e.return)}catch(S){on(e,e.return,S)}}break;case 1:Mt(n,e),Ut(e),r&512&&t!==null&&fa(t,t.return);break;case 5:if(Mt(n,e),Ut(e),r&512&&t!==null&&fa(t,t.return),e.flags&32){var a=e.stateNode;try{Ho(a,"")}catch(S){on(e,e.return,S)}}if(r&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Rg(a,o),fu(s,i);var p=fu(s,o);for(i=0;i<u.length;i+=2){var m=u[i],y=u[i+1];m==="style"?Dg(a,y):m==="dangerouslySetInnerHTML"?Fg(a,y):m==="children"?Ho(a,y):Ch(a,m,y,p)}switch(s){case"input":du(a,o);break;case"textarea":Pg(a,o);break;case"select":var C=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var E=o.value;E!=null?ya(a,!!o.multiple,E,!1):C!==!!o.multiple&&(o.defaultValue!=null?ya(a,!!o.multiple,o.defaultValue,!0):ya(a,!!o.multiple,o.multiple?[]:"",!1))}a[Xo]=o}catch(S){on(e,e.return,S)}}break;case 6:if(Mt(n,e),Ut(e),r&4){if(e.stateNode===null)throw Error(Y(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(S){on(e,e.return,S)}}break;case 3:if(Mt(n,e),Ut(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Yo(n.containerInfo)}catch(S){on(e,e.return,S)}break;case 4:Mt(n,e),Ut(e);break;case 13:Mt(n,e),Ut(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(np=sn())),r&4&&f2(e);break;case 22:if(m=t!==null&&t.memoizedState!==null,e.mode&1?(Bn=(p=Bn)||m,Mt(n,e),Bn=p):Mt(n,e),Ut(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!m&&e.mode&1)for(ne=e,m=e.child;m!==null;){for(y=ne=m;ne!==null;){switch(C=ne,E=C.child,C.tag){case 0:case 11:case 14:case 15:Ao(4,C,C.return);break;case 1:fa(C,C.return);var N=C.stateNode;if(typeof N.componentWillUnmount=="function"){r=C,t=C.return;try{n=r,N.props=n.memoizedProps,N.state=n.memoizedState,N.componentWillUnmount()}catch(S){on(r,t,S)}}break;case 5:fa(C,C.return);break;case 22:if(C.memoizedState!==null){m2(y);continue}}E!==null?(E.return=C,ne=E):m2(y)}m=m.sibling}e:for(m=null,y=e;;){if(y.tag===5){if(m===null){m=y;try{a=y.stateNode,p?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=y.stateNode,u=y.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Og("display",i))}catch(S){on(e,e.return,S)}}}else if(y.tag===6){if(m===null)try{y.stateNode.nodeValue=p?"":y.memoizedProps}catch(S){on(e,e.return,S)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;m===y&&(m=null),y=y.return}m===y&&(m=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Mt(n,e),Ut(e),r&4&&f2(e);break;case 21:break;default:Mt(n,e),Ut(e)}}function Ut(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(c3(t)){var r=t;break e}t=t.return}throw Error(Y(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Ho(a,""),r.flags&=-33);var o=p2(e);Wu(e,o,a);break;case 3:case 4:var i=r.stateNode.containerInfo,s=p2(e);Hu(e,s,i);break;default:throw Error(Y(161))}}catch(u){on(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function C7(e,n,t){ne=e,p3(e)}function p3(e,n,t){for(var r=(e.mode&1)!==0;ne!==null;){var a=ne,o=a.child;if(a.tag===22&&r){var i=a.memoizedState!==null||Ki;if(!i){var s=a.alternate,u=s!==null&&s.memoizedState!==null||Bn;s=Ki;var p=Bn;if(Ki=i,(Bn=u)&&!p)for(ne=a;ne!==null;)i=ne,u=i.child,i.tag===22&&i.memoizedState!==null?v2(a):u!==null?(u.return=i,ne=u):v2(a);for(;o!==null;)ne=o,p3(o),o=o.sibling;ne=a,Ki=s,Bn=p}g2(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,ne=o):g2(e)}}function g2(e){for(;ne!==null;){var n=ne;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Bn||Sd(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Bn)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:Pt(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&X1(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}X1(n,i,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var p=n.alternate;if(p!==null){var m=p.memoizedState;if(m!==null){var y=m.dehydrated;y!==null&&Yo(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}Bn||n.flags&512&&Uu(n)}catch(C){on(n,n.return,C)}}if(n===e){ne=null;break}if(t=n.sibling,t!==null){t.return=n.return,ne=t;break}ne=n.return}}function m2(e){for(;ne!==null;){var n=ne;if(n===e){ne=null;break}var t=n.sibling;if(t!==null){t.return=n.return,ne=t;break}ne=n.return}}function v2(e){for(;ne!==null;){var n=ne;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Sd(4,n)}catch(u){on(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(u){on(n,a,u)}}var o=n.return;try{Uu(n)}catch(u){on(n,o,u)}break;case 5:var i=n.return;try{Uu(n)}catch(u){on(n,i,u)}}}catch(u){on(n,n.return,u)}if(n===e){ne=null;break}var s=n.sibling;if(s!==null){s.return=n.return,ne=s;break}ne=n.return}}var S7=Math.ceil,Ks=yr.ReactCurrentDispatcher,Jh=yr.ReactCurrentOwner,kt=yr.ReactCurrentBatchConfig,Ie=0,kn=null,hn=null,Mn=0,dt=0,ga=qr(0),yn=0,li=null,$l=0,kd=0,ep=0,Fo=null,nt=null,np=0,Ra=1/0,or=null,Xs=!1,Vu=null,Ur=null,Xi=!1,Pr=null,Js=0,Oo=0,Gu=null,vs=-1,bs=0;function Vn(){return Ie&6?sn():vs!==-1?vs:vs=sn()}function Hr(e){return e.mode&1?Ie&2&&Mn!==0?Mn&-Mn:o7.transition!==null?(bs===0&&(bs=Qg()),bs):(e=Be,e!==0||(e=window.event,e=e===void 0?16:rm(e.type)),e):1}function jt(e,n,t,r){if(50<Oo)throw Oo=0,Gu=null,Error(Y(185));pi(e,t,r),(!(Ie&2)||e!==kn)&&(e===kn&&(!(Ie&2)&&(kd|=t),yn===4&&Mr(e,Mn)),at(e,r),t===1&&Ie===0&&!(n.mode&1)&&(Ra=sn()+500,wd&&Qr()))}function at(e,n){var t=e.callbackNode;oy(e,n);var r=Fs(e,e===kn?Mn:0);if(r===0)t!==null&&_1(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&_1(t),n===1)e.tag===0?a7(b2.bind(null,e)):Cm(b2.bind(null,e)),n7(function(){!(Ie&6)&&Qr()}),t=null;else{switch(Kg(r)){case 1:t=Lh;break;case 4:t=Zg;break;case 16:t=As;break;case 536870912:t=qg;break;default:t=As}t=x3(t,f3.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function f3(e,n){if(vs=-1,bs=0,Ie&6)throw Error(Y(327));var t=e.callbackNode;if(ka()&&e.callbackNode!==t)return null;var r=Fs(e,e===kn?Mn:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ed(e,r);else{n=r;var a=Ie;Ie|=2;var o=m3();(kn!==e||Mn!==n)&&(or=null,Ra=sn()+500,Sl(e,n));do try{_7();break}catch(s){g3(e,s)}while(1);jh(),Ks.current=o,Ie=a,hn!==null?n=0:(kn=null,Mn=0,n=yn)}if(n!==0){if(n===2&&(a=yu(e),a!==0&&(r=a,n=Yu(e,a))),n===1)throw t=li,Sl(e,0),Mr(e,r),at(e,sn()),t;if(n===6)Mr(e,r);else{if(a=e.current.alternate,!(r&30)&&!k7(a)&&(n=ed(e,r),n===2&&(o=yu(e),o!==0&&(r=o,n=Yu(e,o))),n===1))throw t=li,Sl(e,0),Mr(e,r),at(e,sn()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(Y(345));case 2:pl(e,nt,or);break;case 3:if(Mr(e,r),(r&130023424)===r&&(n=np+500-sn(),10<n)){if(Fs(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Vn(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Lu(pl.bind(null,e,nt,or),n);break}pl(e,nt,or);break;case 4:if(Mr(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var i=31-Bt(r);o=1<<i,i=n[i],i>a&&(a=i),r&=~o}if(r=a,r=sn()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*S7(r/1960))-r,10<r){e.timeoutHandle=Lu(pl.bind(null,e,nt,or),r);break}pl(e,nt,or);break;case 5:pl(e,nt,or);break;default:throw Error(Y(329))}}}return at(e,sn()),e.callbackNode===t?f3.bind(null,e):null}function Yu(e,n){var t=Fo;return e.current.memoizedState.isDehydrated&&(Sl(e,n).flags|=256),e=ed(e,n),e!==2&&(n=nt,nt=t,n!==null&&Zu(n)),e}function Zu(e){nt===null?nt=e:nt.push.apply(nt,e)}function k7(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],o=a.getSnapshot;a=a.value;try{if(!zt(o(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Mr(e,n){for(n&=~ep,n&=~kd,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Bt(n),r=1<<t;e[t]=-1,n&=~r}}function b2(e){if(Ie&6)throw Error(Y(327));ka();var n=Fs(e,0);if(!(n&1))return at(e,sn()),null;var t=ed(e,n);if(e.tag!==0&&t===2){var r=yu(e);r!==0&&(n=r,t=Yu(e,r))}if(t===1)throw t=li,Sl(e,0),Mr(e,n),at(e,sn()),t;if(t===6)throw Error(Y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,pl(e,nt,or),at(e,sn()),null}function tp(e,n){var t=Ie;Ie|=1;try{return e(n)}finally{Ie=t,Ie===0&&(Ra=sn()+500,wd&&Qr())}}function Nl(e){Pr!==null&&Pr.tag===0&&!(Ie&6)&&ka();var n=Ie;Ie|=1;var t=kt.transition,r=Be;try{if(kt.transition=null,Be=1,e)return e()}finally{Be=r,kt.transition=t,Ie=n,!(Ie&6)&&Qr()}}function rp(){dt=ga.current,Je(ga)}function Sl(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,e7(t)),hn!==null)for(t=hn.return;t!==null;){var r=t;switch(Oh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zs();break;case 3:Ia(),Je(rt),Je(jn),Gh();break;case 5:Vh(r);break;case 4:Ia();break;case 13:Je(tn);break;case 19:Je(tn);break;case 10:zh(r.type._context);break;case 22:case 23:rp()}t=t.return}if(kn=e,hn=e=Wr(e.current,null),Mn=dt=n,yn=0,li=null,ep=kd=$l=0,nt=Fo=null,bl!==null){for(n=0;n<bl.length;n++)if(t=bl[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=a,r.next=i}t.pending=r}bl=null}return e}function g3(e,n){do{var t=hn;try{if(jh(),fs.current=Qs,qs){for(var r=rn.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}qs=!1}if(Ll=0,Sn=bn=rn=null,Po=!1,ni=0,Jh.current=null,t===null||t.return===null){yn=1,li=n,hn=null;break}e:{var o=e,i=t.return,s=t,u=n;if(n=Mn,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=u,m=s,y=m.tag;if(!(m.mode&1)&&(y===0||y===11||y===15)){var C=m.alternate;C?(m.updateQueue=C.updateQueue,m.memoizedState=C.memoizedState,m.lanes=C.lanes):(m.updateQueue=null,m.memoizedState=null)}var E=a2(i);if(E!==null){E.flags&=-257,o2(E,i,s,o,n),E.mode&1&&l2(o,p,n),n=E,u=p;var N=n.updateQueue;if(N===null){var S=new Set;S.add(u),n.updateQueue=S}else N.add(u);break e}else{if(!(n&1)){l2(o,p,n),lp();break e}u=Error(Y(426))}}else if(en&&s.mode&1){var M=a2(i);if(M!==null){!(M.flags&65536)&&(M.flags|=256),o2(M,i,s,o,n),Dh(Ma(u,s));break e}}o=u=Ma(u,s),yn!==4&&(yn=2),Fo===null?Fo=[o]:Fo.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var w=Xm(o,u,n);K1(o,w);break e;case 1:s=u;var g=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Ur===null||!Ur.has(b)))){o.flags|=65536,n&=-n,o.lanes|=n;var v=Jm(o,s,n);K1(o,v);break e}}o=o.return}while(o!==null)}b3(t)}catch(L){n=L,hn===t&&t!==null&&(hn=t=t.return);continue}break}while(1)}function m3(){var e=Ks.current;return Ks.current=Qs,e===null?Qs:e}function lp(){(yn===0||yn===3||yn===2)&&(yn=4),kn===null||!($l&268435455)&&!(kd&268435455)||Mr(kn,Mn)}function ed(e,n){var t=Ie;Ie|=2;var r=m3();(kn!==e||Mn!==n)&&(or=null,Sl(e,n));do try{T7();break}catch(a){g3(e,a)}while(1);if(jh(),Ie=t,Ks.current=r,hn!==null)throw Error(Y(261));return kn=null,Mn=0,yn}function T7(){for(;hn!==null;)v3(hn)}function _7(){for(;hn!==null&&!Kb();)v3(hn)}function v3(e){var n=w3(e.alternate,e,dt);e.memoizedProps=e.pendingProps,n===null?b3(e):hn=n,Jh.current=null}function b3(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=y7(t,n),t!==null){t.flags&=32767,hn=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{yn=6,hn=null;return}}else if(t=b7(t,n,dt),t!==null){hn=t;return}if(n=n.sibling,n!==null){hn=n;return}hn=n=e}while(n!==null);yn===0&&(yn=5)}function pl(e,n,t){var r=Be,a=kt.transition;try{kt.transition=null,Be=1,L7(e,n,t,r)}finally{kt.transition=a,Be=r}return null}function L7(e,n,t,r){do ka();while(Pr!==null);if(Ie&6)throw Error(Y(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(Y(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(iy(e,o),e===kn&&(hn=kn=null,Mn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Xi||(Xi=!0,x3(As,function(){return ka(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=kt.transition,kt.transition=null;var i=Be;Be=1;var s=Ie;Ie|=4,Jh.current=null,x7(e,t),h3(t,e),Yy(Tu),Os=!!ku,Tu=ku=null,e.current=t,C7(t),Xb(),Ie=s,Be=i,kt.transition=o}else e.current=t;if(Xi&&(Xi=!1,Pr=e,Js=a),o=e.pendingLanes,o===0&&(Ur=null),ny(t.stateNode),at(e,sn()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(Xs)throw Xs=!1,e=Vu,Vu=null,e;return Js&1&&e.tag!==0&&ka(),o=e.pendingLanes,o&1?e===Gu?Oo++:(Oo=0,Gu=e):Oo=0,Qr(),null}function ka(){if(Pr!==null){var e=Kg(Js),n=kt.transition,t=Be;try{if(kt.transition=null,Be=16>e?16:e,Pr===null)var r=!1;else{if(e=Pr,Pr=null,Js=0,Ie&6)throw Error(Y(331));var a=Ie;for(Ie|=4,ne=e.current;ne!==null;){var o=ne,i=o.child;if(ne.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var p=s[u];for(ne=p;ne!==null;){var m=ne;switch(m.tag){case 0:case 11:case 15:Ao(8,m,o)}var y=m.child;if(y!==null)y.return=m,ne=y;else for(;ne!==null;){m=ne;var C=m.sibling,E=m.return;if(d3(m),m===p){ne=null;break}if(C!==null){C.return=E,ne=C;break}ne=E}}}var N=o.alternate;if(N!==null){var S=N.child;if(S!==null){N.child=null;do{var M=S.sibling;S.sibling=null,S=M}while(S!==null)}}ne=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,ne=i;else e:for(;ne!==null;){if(o=ne,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ao(9,o,o.return)}var w=o.sibling;if(w!==null){w.return=o.return,ne=w;break e}ne=o.return}}var g=e.current;for(ne=g;ne!==null;){i=ne;var b=i.child;if(i.subtreeFlags&2064&&b!==null)b.return=i,ne=b;else e:for(i=g;ne!==null;){if(s=ne,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Sd(9,s)}}catch(L){on(s,s.return,L)}if(s===i){ne=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,ne=v;break e}ne=s.return}}if(Ie=a,Qr(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(gd,e)}catch{}r=!0}return r}finally{Be=t,kt.transition=n}}return!1}function y2(e,n,t){n=Ma(t,n),n=Xm(e,n,1),e=zr(e,n,1),n=Vn(),e!==null&&(pi(e,1,n),at(e,n))}function on(e,n,t){if(e.tag===3)y2(e,e,t);else for(;n!==null;){if(n.tag===3){y2(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ur===null||!Ur.has(r))){e=Ma(t,e),e=Jm(n,e,1),n=zr(n,e,1),e=Vn(),n!==null&&(pi(n,1,e),at(n,e));break}}n=n.return}}function $7(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Vn(),e.pingedLanes|=e.suspendedLanes&t,kn===e&&(Mn&t)===t&&(yn===4||yn===3&&(Mn&130023424)===Mn&&500>sn()-np?Sl(e,0):ep|=t),at(e,n)}function y3(e,n){n===0&&(e.mode&1?(n=Ui,Ui<<=1,!(Ui&130023424)&&(Ui=4194304)):n=1);var t=Vn();e=gr(e,n),e!==null&&(pi(e,n,t),at(e,t))}function N7(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),y3(e,t)}function E7(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Y(314))}r!==null&&r.delete(n),y3(e,t)}var w3;w3=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||rt.current)tt=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return tt=!1,v7(e,n,t);tt=!!(e.flags&131072)}else tt=!1,en&&n.flags&1048576&&Sm(n,Ws,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ms(e,n),e=n.pendingProps;var a=$a(n,jn.current);Sa(n,t),a=Zh(null,n,r,e,a,t);var o=qh();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,lt(r)?(o=!0,Us(n)):o=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Hh(n),a.updater=xd,n.stateNode=a,a._reactInternals=n,Pu(n,r,e,t),n=Ou(null,n,r,!0,o,t)):(n.tag=0,en&&o&&Fh(n),Hn(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ms(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=M7(r),e=Pt(r,e),a){case 0:n=Fu(null,n,r,e,t);break e;case 1:n=d2(null,n,r,e,t);break e;case 11:n=i2(null,n,r,e,t);break e;case 14:n=s2(null,n,r,Pt(r.type,e),t);break e}throw Error(Y(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Pt(r,a),Fu(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Pt(r,a),d2(e,n,r,a,t);case 3:e:{if(r3(n),e===null)throw Error(Y(387));r=n.pendingProps,o=n.memoizedState,a=o.element,Lm(e,n),Ys(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){a=Ma(Error(Y(423)),n),n=c2(e,n,r,t,a);break e}else if(r!==a){a=Ma(Error(Y(424)),n),n=c2(e,n,r,t,a);break e}else for(ft=jr(n.stateNode.containerInfo.firstChild),gt=n,en=!0,Ot=null,t=Im(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Na(),r===a){n=mr(e,n,t);break e}Hn(e,n,r,t)}n=n.child}return n;case 5:return Mm(n),e===null&&Iu(n),r=n.type,a=n.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,_u(r,a)?i=null:o!==null&&_u(r,o)&&(n.flags|=32),t3(e,n),Hn(e,n,i,t),n.child;case 6:return e===null&&Iu(n),null;case 13:return l3(e,n,t);case 4:return Wh(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ea(n,null,r,t):Hn(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Pt(r,a),i2(e,n,r,a,t);case 7:return Hn(e,n,n.pendingProps,t),n.child;case 8:return Hn(e,n,n.pendingProps.children,t),n.child;case 12:return Hn(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,o=n.memoizedProps,i=a.value,Ge(Vs,r._currentValue),r._currentValue=i,o!==null)if(zt(o.value,i)){if(o.children===a.children&&!rt.current){n=mr(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=ur(-1,t&-t),u.tag=2;var p=o.updateQueue;if(p!==null){p=p.shared;var m=p.pending;m===null?u.next=u:(u.next=m.next,m.next=u),p.pending=u}}o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Mu(o.return,t,n),s.lanes|=t;break}u=u.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(Y(341));i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Mu(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Hn(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,Sa(n,t),a=Tt(a),r=r(a),n.flags|=1,Hn(e,n,r,t),n.child;case 14:return r=n.type,a=Pt(r,n.pendingProps),a=Pt(r.type,a),s2(e,n,r,a,t);case 15:return e3(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Pt(r,a),ms(e,n),n.tag=1,lt(r)?(e=!0,Us(n)):e=!1,Sa(n,t),Nm(n,r,a),Pu(n,r,a,t),Ou(null,n,r,!0,e,t);case 19:return a3(e,n,t);case 22:return n3(e,n,t)}throw Error(Y(156,n.tag))};function x3(e,n){return Yg(e,n)}function I7(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,n,t,r){return new I7(e,n,t,r)}function ap(e){return e=e.prototype,!(!e||!e.isReactComponent)}function M7(e){if(typeof e=="function")return ap(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kh)return 11;if(e===Th)return 14}return 2}function Wr(e,n){var t=e.alternate;return t===null?(t=St(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ys(e,n,t,r,a,o){var i=2;if(r=e,typeof e=="function")ap(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case aa:return kl(t.children,a,o,n);case Sh:i=8,a|=8;break;case lu:return e=St(12,t,n,a|2),e.elementType=lu,e.lanes=o,e;case au:return e=St(13,t,n,a),e.elementType=au,e.lanes=o,e;case ou:return e=St(19,t,n,a),e.elementType=ou,e.lanes=o,e;case Eg:return Td(t,a,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $g:i=10;break e;case Ng:i=9;break e;case kh:i=11;break e;case Th:i=14;break e;case Nr:i=16,r=null;break e}throw Error(Y(130,e==null?e:typeof e,""))}return n=St(i,t,n,a),n.elementType=e,n.type=r,n.lanes=o,n}function kl(e,n,t,r){return e=St(7,e,r,n),e.lanes=t,e}function Td(e,n,t,r){return e=St(22,e,r,n),e.elementType=Eg,e.lanes=t,e.stateNode={isHidden:!1},e}function Bc(e,n,t){return e=St(6,e,null,n),e.lanes=t,e}function jc(e,n,t){return n=St(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function R7(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wc(0),this.expirationTimes=wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wc(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function op(e,n,t,r,a,o,i,s,u){return e=new R7(e,n,t,s,u),n===1?(n=1,o===!0&&(n|=8)):n=0,o=St(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hh(o),e}function P7(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:la,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function C3(e){if(!e)return Gr;e=e._reactInternals;e:{if(Rl(e)!==e||e.tag!==1)throw Error(Y(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(lt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(Y(171))}if(e.tag===1){var t=e.type;if(lt(t))return xm(e,t,n)}return n}function S3(e,n,t,r,a,o,i,s,u){return e=op(t,r,!0,e,a,o,i,s,u),e.context=C3(null),t=e.current,r=Vn(),a=Hr(t),o=ur(r,a),o.callback=n??null,zr(t,o,a),e.current.lanes=a,pi(e,a,r),at(e,r),e}function _d(e,n,t,r){var a=n.current,o=Vn(),i=Hr(a);return t=C3(t),n.context===null?n.context=t:n.pendingContext=t,n=ur(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=zr(a,n,i),e!==null&&(jt(e,a,i,o),ps(e,a,i)),i}function nd(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function w2(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ip(e,n){w2(e,n),(e=e.alternate)&&w2(e,n)}function A7(){return null}var k3=typeof reportError=="function"?reportError:function(e){console.error(e)};function sp(e){this._internalRoot=e}Ld.prototype.render=sp.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(Y(409));_d(e,n,null,null)};Ld.prototype.unmount=sp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Nl(function(){_d(null,e,null,null)}),n[fr]=null}};function Ld(e){this._internalRoot=e}Ld.prototype.unstable_scheduleHydration=function(e){if(e){var n=em();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Ir.length&&n!==0&&n<Ir[t].priority;t++);Ir.splice(t,0,e),t===0&&tm(e)}};function dp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function x2(){}function F7(e,n,t,r,a){if(a){if(typeof r=="function"){var o=r;r=function(){var p=nd(i);o.call(p)}}var i=S3(n,r,e,0,null,!1,!1,"",x2);return e._reactRootContainer=i,e[fr]=i.current,Qo(e.nodeType===8?e.parentNode:e),Nl(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var p=nd(u);s.call(p)}}var u=op(e,0,!1,null,null,!1,!1,"",x2);return e._reactRootContainer=u,e[fr]=u.current,Qo(e.nodeType===8?e.parentNode:e),Nl(function(){_d(n,u,t,r)}),u}function Nd(e,n,t,r,a){var o=t._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var s=a;a=function(){var u=nd(i);s.call(u)}}_d(n,i,e,a)}else i=F7(t,n,e,a,r);return nd(i)}Xg=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=xo(n.pendingLanes);t!==0&&($h(n,t|1),at(n,sn()),!(Ie&6)&&(Ra=sn()+500,Qr()))}break;case 13:Nl(function(){var r=gr(e,1);if(r!==null){var a=Vn();jt(r,e,1,a)}}),ip(e,1)}};Nh=function(e){if(e.tag===13){var n=gr(e,134217728);if(n!==null){var t=Vn();jt(n,e,134217728,t)}ip(e,134217728)}};Jg=function(e){if(e.tag===13){var n=Hr(e),t=gr(e,n);if(t!==null){var r=Vn();jt(t,e,n,r)}ip(e,n)}};em=function(){return Be};nm=function(e,n){var t=Be;try{return Be=e,n()}finally{Be=t}};mu=function(e,n,t){switch(n){case"input":if(du(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=yd(r);if(!a)throw Error(Y(90));Mg(r),du(r,a)}}}break;case"textarea":Pg(e,t);break;case"select":n=t.value,n!=null&&ya(e,!!t.multiple,n,!1)}};zg=tp;Ug=Nl;var O7={usingClientEntryPoint:!1,Events:[gi,da,yd,Bg,jg,tp]},go={findFiberByHostInstance:vl,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},D7={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vg(e),e===null?null:e.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||A7,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ji.isDisabled&&Ji.supportsFiber)try{gd=Ji.inject(D7),Qt=Ji}catch{}}vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O7;vt.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dp(n))throw Error(Y(200));return P7(e,n,null,t)};vt.createRoot=function(e,n){if(!dp(e))throw Error(Y(299));var t=!1,r="",a=k3;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=op(e,1,!1,null,null,t,!1,r,a),e[fr]=n.current,Qo(e.nodeType===8?e.parentNode:e),new sp(n)};vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=Vg(n),e=e===null?null:e.stateNode,e};vt.flushSync=function(e){return Nl(e)};vt.hydrate=function(e,n,t){if(!$d(n))throw Error(Y(200));return Nd(null,e,n,!0,t)};vt.hydrateRoot=function(e,n,t){if(!dp(e))throw Error(Y(405));var r=t!=null&&t.hydratedSources||null,a=!1,o="",i=k3;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=S3(n,null,e,1,t??null,a,!1,o,i),e[fr]=n.current,Qo(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new Ld(n)};vt.render=function(e,n,t){if(!$d(n))throw Error(Y(200));return Nd(null,e,n,!1,t)};vt.unmountComponentAtNode=function(e){if(!$d(e))throw Error(Y(40));return e._reactRootContainer?(Nl(function(){Nd(null,null,e,!1,function(){e._reactRootContainer=null,e[fr]=null})}),!0):!1};vt.unstable_batchedUpdates=tp;vt.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!$d(t))throw Error(Y(200));if(e==null||e._reactInternals===void 0)throw Error(Y(38));return Nd(e,n,t,!1,r)};vt.version="18.2.0-next-9e3b772b8-20220608";function T3(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T3)}catch(e){console.error(e)}}T3(),Sg.exports=vt;var _3=Sg.exports,C2=_3;tu.createRoot=C2.createRoot,tu.hydrateRoot=C2.hydrateRoot;function B7(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function j7(e,n){if(e==null)return{};var t=B7(e,n),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function qu(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function z7(e){if(Array.isArray(e))return qu(e)}function U7(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function H7(e,n){if(e){if(typeof e=="string")return qu(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return qu(e,n)}}function W7(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V7(e){return z7(e)||U7(e)||H7(e)||W7()}function ai(e){"@babel/helpers - typeof";return ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ai(e)}function G7(e,n){if(ai(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(ai(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Y7(e){var n=G7(e,"string");return ai(n)==="symbol"?n:String(n)}function L3(e,n,t){return n=Y7(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Qu(){return Qu=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Qu.apply(this,arguments)}function S2(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function ma(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?S2(Object(t),!0).forEach(function(r){L3(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S2(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Z7(e){var n=e.length;if(n===0||n===1)return e;if(n===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(n===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(n>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var zc={};function q7(e){if(e.length===0||e.length===1)return e;var n=e.join(".");return zc[n]||(zc[n]=Z7(e)),zc[n]}function Q7(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,r=e.filter(function(o){return o!=="token"}),a=q7(r);return a.reduce(function(o,i){return ma(ma({},o),t[i])},n)}function k2(e){return e.join(" ")}function K7(e,n){var t=0;return function(r){return t+=1,r.map(function(a,o){return $3({node:a,stylesheet:e,useInlineStyles:n,key:"code-segment-".concat(t,"-").concat(o)})})}}function $3(e){var n=e.node,t=e.stylesheet,r=e.style,a=r===void 0?{}:r,o=e.useInlineStyles,i=e.key,s=n.properties,u=n.type,p=n.tagName,m=n.value;if(u==="text")return m;if(p){var y=K7(t,o),C;if(!o)C=ma(ma({},s),{},{className:k2(s.className)});else{var E=Object.keys(t).reduce(function(w,g){return g.split(".").forEach(function(b){w.includes(b)||w.push(b)}),w},[]),N=s.className&&s.className.includes("token")?["token"]:[],S=s.className&&N.concat(s.className.filter(function(w){return!E.includes(w)}));C=ma(ma({},s),{},{className:k2(S)||void 0,style:Q7(s.className,Object.assign({},s.style,a),t)})}var M=y(n.children);return En.createElement(p,Qu({key:i},C),M)}}const X7=function(e,n){var t=e.listLanguages();return t.indexOf(n)!==-1};var J7=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function T2(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function Yt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?T2(Object(t),!0).forEach(function(r){L3(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T2(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var e9=/\n/g;function n9(e){return e.match(e9)}function t9(e){var n=e.lines,t=e.startingLineNumber,r=e.style;return n.map(function(a,o){var i=o+t;return En.createElement("span",{key:"line-".concat(o),className:"react-syntax-highlighter-line-number",style:typeof r=="function"?r(i):r},"".concat(i,`
`))})}function r9(e){var n=e.codeString,t=e.codeStyle,r=e.containerStyle,a=r===void 0?{float:"left",paddingRight:"10px"}:r,o=e.numberStyle,i=o===void 0?{}:o,s=e.startingLineNumber;return En.createElement("code",{style:Object.assign({},t,a)},t9({lines:n.replace(/\n$/,"").split(`
`),style:i,startingLineNumber:s}))}function l9(e){return"".concat(e.toString().length,".25em")}function N3(e,n){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:n},children:[{type:"text",value:e}]}}function E3(e,n,t){var r={display:"inline-block",minWidth:l9(t),paddingRight:"1em",textAlign:"right",userSelect:"none"},a=typeof e=="function"?e(n):e,o=Yt(Yt({},r),a);return o}function ws(e){var n=e.children,t=e.lineNumber,r=e.lineNumberStyle,a=e.largestLineNumber,o=e.showInlineLineNumbers,i=e.lineProps,s=i===void 0?{}:i,u=e.className,p=u===void 0?[]:u,m=e.showLineNumbers,y=e.wrapLongLines,C=typeof s=="function"?s(t):s;if(C.className=p,t&&o){var E=E3(r,t,a);n.unshift(N3(t,E))}return y&m&&(C.style=Yt(Yt({},C.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:C,children:n}}function I3(e){for(var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=0;r<e.length;r++){var a=e[r];if(a.type==="text")t.push(ws({children:[a],className:V7(new Set(n))}));else if(a.children){var o=n.concat(a.properties.className);I3(a.children,o).forEach(function(i){return t.push(i)})}}return t}function a9(e,n,t,r,a,o,i,s,u){var p,m=I3(e.value),y=[],C=-1,E=0;function N(L,T){var A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return ws({children:L,lineNumber:T,lineNumberStyle:s,largestLineNumber:i,showInlineLineNumbers:a,lineProps:t,className:A,showLineNumbers:r,wrapLongLines:u})}function S(L,T){if(r&&T&&a){var A=E3(s,T,i);L.unshift(N3(T,A))}return L}function M(L,T){var A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return n||A.length>0?N(L,T,A):S(L,T)}for(var w=function(){var T=m[E],A=T.children[0].value,O=n9(A);if(O){var z=A.split(`
`);z.forEach(function(Z,fe){var ce=r&&y.length+o,Ue={type:"text",value:"".concat(Z,`
`)};if(fe===0){var an=m.slice(C+1,E).concat(ws({children:[Ue],className:T.properties.className})),Ye=M(an,ce);y.push(Ye)}else if(fe===z.length-1){var je=m[E+1]&&m[E+1].children&&m[E+1].children[0],Ze={type:"text",value:"".concat(Z)};if(je){var U=ws({children:[Ze],className:T.properties.className});m.splice(E+1,0,U)}else{var q=[Ze],J=M(q,ce,T.properties.className);y.push(J)}}else{var ae=[Ue],ge=M(ae,ce,T.properties.className);y.push(ge)}}),C=E}E++};E<m.length;)w();if(C!==m.length-1){var g=m.slice(C+1,m.length);if(g&&g.length){var b=r&&y.length+o,v=M(g,b);y.push(v)}}return n?y:(p=[]).concat.apply(p,y)}function o9(e){var n=e.rows,t=e.stylesheet,r=e.useInlineStyles;return n.map(function(a,o){return $3({node:a,stylesheet:t,useInlineStyles:r,key:"code-segement".concat(o)})})}function M3(e){return e&&typeof e.highlightAuto<"u"}function i9(e){var n=e.astGenerator,t=e.language,r=e.code,a=e.defaultCodeValue;if(M3(n)){var o=X7(n,t);return t==="text"?{value:a,language:"text"}:o?n.highlight(t,r):n.highlightAuto(r)}try{return t&&t!=="text"?{value:n.highlight(r,t)}:{value:a}}catch{return{value:a}}}function s9(e,n){return function(r){var a=r.language,o=r.children,i=r.style,s=i===void 0?n:i,u=r.customStyle,p=u===void 0?{}:u,m=r.codeTagProps,y=m===void 0?{className:a?"language-".concat(a):void 0,style:Yt(Yt({},s['code[class*="language-"]']),s['code[class*="language-'.concat(a,'"]')])}:m,C=r.useInlineStyles,E=C===void 0?!0:C,N=r.showLineNumbers,S=N===void 0?!1:N,M=r.showInlineLineNumbers,w=M===void 0?!0:M,g=r.startingLineNumber,b=g===void 0?1:g,v=r.lineNumberContainerStyle,L=r.lineNumberStyle,T=L===void 0?{}:L,A=r.wrapLines,O=r.wrapLongLines,z=O===void 0?!1:O,Z=r.lineProps,fe=Z===void 0?{}:Z,ce=r.renderer,Ue=r.PreTag,an=Ue===void 0?"pre":Ue,Ye=r.CodeTag,je=Ye===void 0?"code":Ye,Ze=r.code,U=Ze===void 0?(Array.isArray(o)?o[0]:o)||"":Ze,q=r.astGenerator,J=j7(r,J7);q=q||e;var ae=S?En.createElement(r9,{containerStyle:v,codeStyle:y.style||{},numberStyle:T,startingLineNumber:b,codeString:U}):null,ge=s.hljs||s['pre[class*="language-"]']||{backgroundColor:"#fff"},zn=M3(q)?"hljs":"prismjs",me=E?Object.assign({},J,{style:Object.assign({},ge,p)}):Object.assign({},J,{className:J.className?"".concat(zn," ").concat(J.className):zn,style:Object.assign({},p)});if(z?y.style=Yt(Yt({},y.style),{},{whiteSpace:"pre-wrap"}):y.style=Yt(Yt({},y.style),{},{whiteSpace:"pre"}),!q)return En.createElement(an,me,ae,En.createElement(je,y,U));(A===void 0&&ce||z)&&(A=!0),ce=ce||o9;var nn=[{type:"text",value:U}],qe=i9({astGenerator:q,language:a,code:U,defaultCodeValue:nn});qe.language===null&&(qe.value=nn);var fn=qe.value.length+b,Fn=a9(qe,A,fe,S,w,b,fn,T,z);return En.createElement(an,me,En.createElement(je,y,!w&&ae,ce({rows:Fn,stylesheet:s,useInlineStyles:E})))}}var d9=u9,c9=Object.prototype.hasOwnProperty;function u9(){for(var e={},n=0;n<arguments.length;n++){var t=arguments[n];for(var r in t)c9.call(t,r)&&(e[r]=t[r])}return e}var R3=P3,cp=P3.prototype;cp.space=null;cp.normal={};cp.property={};function P3(e,n,t){this.property=e,this.normal=n,t&&(this.space=t)}var _2=d9,h9=R3,p9=f9;function f9(e){for(var n=e.length,t=[],r=[],a=-1,o,i;++a<n;)o=e[a],t.push(o.property),r.push(o.normal),i=o.space;return new h9(_2.apply(null,t),_2.apply(null,r),i)}var up=g9;function g9(e){return e.toLowerCase()}var A3=F3,Lt=F3.prototype;Lt.space=null;Lt.attribute=null;Lt.property=null;Lt.boolean=!1;Lt.booleanish=!1;Lt.overloadedBoolean=!1;Lt.number=!1;Lt.commaSeparated=!1;Lt.spaceSeparated=!1;Lt.commaOrSpaceSeparated=!1;Lt.mustUseProperty=!1;Lt.defined=!1;function F3(e,n){this.property=e,this.attribute=n}var Jt={},m9=0;Jt.boolean=Pl();Jt.booleanish=Pl();Jt.overloadedBoolean=Pl();Jt.number=Pl();Jt.spaceSeparated=Pl();Jt.commaSeparated=Pl();Jt.commaOrSpaceSeparated=Pl();function Pl(){return Math.pow(2,++m9)}var O3=A3,L2=Jt,D3=hp;hp.prototype=new O3;hp.prototype.defined=!0;var B3=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],v9=B3.length;function hp(e,n,t,r){var a=-1,o;for($2(this,"space",r),O3.call(this,e,n);++a<v9;)o=B3[a],$2(this,o,(t&L2[o])===L2[o])}function $2(e,n,t){t&&(e[n]=t)}var N2=up,b9=R3,y9=D3,vi=w9;function w9(e){var n=e.space,t=e.mustUseProperty||[],r=e.attributes||{},a=e.properties,o=e.transform,i={},s={},u,p;for(u in a)p=new y9(u,o(r,u),a[u],n),t.indexOf(u)!==-1&&(p.mustUseProperty=!0),i[u]=p,s[N2(u)]=u,s[N2(p.attribute)]=u;return new b9(i,s,n)}var x9=vi,C9=x9({space:"xlink",transform:S9,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function S9(e,n){return"xlink:"+n.slice(5).toLowerCase()}var k9=vi,T9=k9({space:"xml",transform:_9,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function _9(e,n){return"xml:"+n.slice(3).toLowerCase()}var L9=$9;function $9(e,n){return n in e?e[n]:n}var N9=L9,j3=E9;function E9(e,n){return N9(e,n.toLowerCase())}var I9=vi,M9=j3,R9=I9({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:M9,properties:{xmlns:null,xmlnsXLink:null}}),pp=Jt,P9=vi,Xn=pp.booleanish,wt=pp.number,cl=pp.spaceSeparated,A9=P9({transform:F9,properties:{ariaActiveDescendant:null,ariaAtomic:Xn,ariaAutoComplete:null,ariaBusy:Xn,ariaChecked:Xn,ariaColCount:wt,ariaColIndex:wt,ariaColSpan:wt,ariaControls:cl,ariaCurrent:null,ariaDescribedBy:cl,ariaDetails:null,ariaDisabled:Xn,ariaDropEffect:cl,ariaErrorMessage:null,ariaExpanded:Xn,ariaFlowTo:cl,ariaGrabbed:Xn,ariaHasPopup:null,ariaHidden:Xn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:cl,ariaLevel:wt,ariaLive:null,ariaModal:Xn,ariaMultiLine:Xn,ariaMultiSelectable:Xn,ariaOrientation:null,ariaOwns:cl,ariaPlaceholder:null,ariaPosInSet:wt,ariaPressed:Xn,ariaReadOnly:Xn,ariaRelevant:null,ariaRequired:Xn,ariaRoleDescription:cl,ariaRowCount:wt,ariaRowIndex:wt,ariaRowSpan:wt,ariaSelected:Xn,ariaSetSize:wt,ariaSort:null,ariaValueMax:wt,ariaValueMin:wt,ariaValueNow:wt,ariaValueText:null,role:null}});function F9(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}var ja=Jt,O9=vi,D9=j3,Ce=ja.boolean,B9=ja.overloadedBoolean,mo=ja.booleanish,Qe=ja.number,Un=ja.spaceSeparated,es=ja.commaSeparated,j9=O9({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:D9,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:es,acceptCharset:Un,accessKey:Un,action:null,allow:null,allowFullScreen:Ce,allowPaymentRequest:Ce,allowUserMedia:Ce,alt:null,as:null,async:Ce,autoCapitalize:null,autoComplete:Un,autoFocus:Ce,autoPlay:Ce,capture:Ce,charSet:null,checked:Ce,cite:null,className:Un,cols:Qe,colSpan:null,content:null,contentEditable:mo,controls:Ce,controlsList:Un,coords:Qe|es,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Ce,defer:Ce,dir:null,dirName:null,disabled:Ce,download:B9,draggable:mo,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Ce,formTarget:null,headers:Un,height:Qe,hidden:Ce,high:Qe,href:null,hrefLang:null,htmlFor:Un,httpEquiv:Un,id:null,imageSizes:null,imageSrcSet:es,inputMode:null,integrity:null,is:null,isMap:Ce,itemId:null,itemProp:Un,itemRef:Un,itemScope:Ce,itemType:Un,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Ce,low:Qe,manifest:null,max:null,maxLength:Qe,media:null,method:null,min:null,minLength:Qe,multiple:Ce,muted:Ce,name:null,nonce:null,noModule:Ce,noValidate:Ce,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Ce,optimum:Qe,pattern:null,ping:Un,placeholder:null,playsInline:Ce,poster:null,preload:null,readOnly:Ce,referrerPolicy:null,rel:Un,required:Ce,reversed:Ce,rows:Qe,rowSpan:Qe,sandbox:Un,scope:null,scoped:Ce,seamless:Ce,selected:Ce,shape:null,size:Qe,sizes:null,slot:null,span:Qe,spellCheck:mo,src:null,srcDoc:null,srcLang:null,srcSet:es,start:Qe,step:null,style:null,tabIndex:Qe,target:null,title:null,translate:null,type:null,typeMustMatch:Ce,useMap:null,value:mo,width:Qe,wrap:null,align:null,aLink:null,archive:Un,axis:null,background:null,bgColor:null,border:Qe,borderColor:null,bottomMargin:Qe,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Ce,declare:Ce,event:null,face:null,frame:null,frameBorder:null,hSpace:Qe,leftMargin:Qe,link:null,longDesc:null,lowSrc:null,marginHeight:Qe,marginWidth:Qe,noResize:Ce,noHref:Ce,noShade:Ce,noWrap:Ce,object:null,profile:null,prompt:null,rev:null,rightMargin:Qe,rules:null,scheme:null,scrolling:mo,standby:null,summary:null,text:null,topMargin:Qe,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Qe,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Ce,disableRemotePlayback:Ce,prefix:null,property:null,results:Qe,security:null,unselectable:null}}),z9=p9,U9=C9,H9=T9,W9=R9,V9=A9,G9=j9,Y9=z9([H9,U9,W9,V9,G9]),Z9=up,q9=D3,Q9=A3,fp="data",K9=ew,X9=/^data[-\w.:]+$/i,z3=/-[a-z]/g,J9=/[A-Z]/g;function ew(e,n){var t=Z9(n),r=n,a=Q9;return t in e.normal?e.property[e.normal[t]]:(t.length>4&&t.slice(0,4)===fp&&X9.test(n)&&(n.charAt(4)==="-"?r=nw(n):n=tw(n),a=q9),new a(r,n))}function nw(e){var n=e.slice(5).replace(z3,lw);return fp+n.charAt(0).toUpperCase()+n.slice(1)}function tw(e){var n=e.slice(4);return z3.test(n)?e:(n=n.replace(J9,rw),n.charAt(0)!=="-"&&(n="-"+n),fp+n)}function rw(e){return"-"+e.toLowerCase()}function lw(e){return e.charAt(1).toUpperCase()}var aw=ow,E2=/[#.]/g;function ow(e,n){for(var t=e||"",r=n||"div",a={},o=0,i,s,u;o<t.length;)E2.lastIndex=o,u=E2.exec(t),i=t.slice(o,u?u.index:t.length),i&&(s?s==="#"?a.id=i:a.className?a.className.push(i):a.className=[i]:r=i,o+=i.length),u&&(s=u[0],o++);return{type:"element",tagName:r,properties:a,children:[]}}var gp={};gp.parse=dw;gp.stringify=cw;var I2="",iw=" ",sw=/[ \t\n\r\f]+/g;function dw(e){var n=String(e||I2).trim();return n===I2?[]:n.split(sw)}function cw(e){return e.join(iw).trim()}var mp={};mp.parse=uw;mp.stringify=hw;var Ku=",",M2=" ",So="";function uw(e){for(var n=[],t=String(e||So),r=t.indexOf(Ku),a=0,o=!1,i;!o;)r===-1&&(r=t.length,o=!0),i=t.slice(a,r).trim(),(i||!o)&&n.push(i),a=r+1,r=t.indexOf(Ku,a);return n}function hw(e,n){var t=n||{},r=t.padLeft===!1?So:M2,a=t.padRight?M2:So;return e[e.length-1]===So&&(e=e.concat(So)),e.join(a+Ku+r).trim()}var pw=K9,R2=up,fw=aw,P2=gp.parse,A2=mp.parse,gw=vw,mw={}.hasOwnProperty;function vw(e,n,t){var r=t?Cw(t):null;return a;function a(i,s){var u=fw(i,n),p=Array.prototype.slice.call(arguments,2),m=u.tagName.toLowerCase(),y;if(u.tagName=r&&mw.call(r,m)?r[m]:m,s&&bw(s,u)&&(p.unshift(s),s=null),s)for(y in s)o(u.properties,y,s[y]);return U3(u.children,p),u.tagName==="template"&&(u.content={type:"root",children:u.children},u.children=[]),u}function o(i,s,u){var p,m,y;u==null||u!==u||(p=pw(e,s),m=p.property,y=u,typeof y=="string"&&(p.spaceSeparated?y=P2(y):p.commaSeparated?y=A2(y):p.commaOrSpaceSeparated&&(y=P2(A2(y).join(" ")))),m==="style"&&typeof u!="string"&&(y=xw(y)),m==="className"&&i.className&&(y=i.className.concat(y)),i[m]=ww(p,m,y))}}function bw(e,n){return typeof e=="string"||"length"in e||yw(n.tagName,e)}function yw(e,n){var t=n.type;return e==="input"||!t||typeof t!="string"?!1:typeof n.children=="object"&&"length"in n.children?!0:(t=t.toLowerCase(),e==="button"?t!=="menu"&&t!=="submit"&&t!=="reset"&&t!=="button":"value"in n)}function U3(e,n){var t,r;if(typeof n=="string"||typeof n=="number"){e.push({type:"text",value:String(n)});return}if(typeof n=="object"&&"length"in n){for(t=-1,r=n.length;++t<r;)U3(e,n[t]);return}if(typeof n!="object"||!("type"in n))throw new Error("Expected node, nodes, or string, got `"+n+"`");e.push(n)}function ww(e,n,t){var r,a,o;if(typeof t!="object"||!("length"in t))return F2(e,n,t);for(a=t.length,r=-1,o=[];++r<a;)o[r]=F2(e,n,t[r]);return o}function F2(e,n,t){var r=t;return e.number||e.positiveNumber?!isNaN(r)&&r!==""&&(r=Number(r)):(e.boolean||e.overloadedBoolean)&&typeof r=="string"&&(r===""||R2(t)===R2(n))&&(r=!0),r}function xw(e){var n=[],t;for(t in e)n.push([t,e[t]].join(": "));return n.join("; ")}function Cw(e){for(var n=e.length,t=-1,r={},a;++t<n;)a=e[t],r[a.toLowerCase()]=a;return r}var Sw=Y9,kw=gw,H3=kw(Sw,"div");H3.displayName="html";var Tw=H3,_w=Tw;const Lw="Æ",$w="&",Nw="Á",Ew="Â",Iw="À",Mw="Å",Rw="Ã",Pw="Ä",Aw="©",Fw="Ç",Ow="Ð",Dw="É",Bw="Ê",jw="È",zw="Ë",Uw=">",Hw="Í",Ww="Î",Vw="Ì",Gw="Ï",Yw="<",Zw="Ñ",qw="Ó",Qw="Ô",Kw="Ò",Xw="Ø",Jw="Õ",ex="Ö",nx='"',tx="®",rx="Þ",lx="Ú",ax="Û",ox="Ù",ix="Ü",sx="Ý",dx="á",cx="â",ux="´",hx="æ",px="à",fx="&",gx="å",mx="ã",vx="ä",bx="¦",yx="ç",wx="¸",xx="¢",Cx="©",Sx="¤",kx="°",Tx="÷",_x="é",Lx="ê",$x="è",Nx="ð",Ex="ë",Ix="½",Mx="¼",Rx="¾",Px=">",Ax="í",Fx="î",Ox="¡",Dx="ì",Bx="¿",jx="ï",zx="«",Ux="<",Hx="¯",Wx="µ",Vx="·",Gx=" ",Yx="¬",Zx="ñ",qx="ó",Qx="ô",Kx="ò",Xx="ª",Jx="º",eC="ø",nC="õ",tC="ö",rC="¶",lC="±",aC="£",oC='"',iC="»",sC="®",dC="§",cC="­",uC="¹",hC="²",pC="³",fC="ß",gC="þ",mC="×",vC="ú",bC="û",yC="ù",wC="¨",xC="ü",CC="ý",SC="¥",kC="ÿ",TC={AElig:Lw,AMP:$w,Aacute:Nw,Acirc:Ew,Agrave:Iw,Aring:Mw,Atilde:Rw,Auml:Pw,COPY:Aw,Ccedil:Fw,ETH:Ow,Eacute:Dw,Ecirc:Bw,Egrave:jw,Euml:zw,GT:Uw,Iacute:Hw,Icirc:Ww,Igrave:Vw,Iuml:Gw,LT:Yw,Ntilde:Zw,Oacute:qw,Ocirc:Qw,Ograve:Kw,Oslash:Xw,Otilde:Jw,Ouml:ex,QUOT:nx,REG:tx,THORN:rx,Uacute:lx,Ucirc:ax,Ugrave:ox,Uuml:ix,Yacute:sx,aacute:dx,acirc:cx,acute:ux,aelig:hx,agrave:px,amp:fx,aring:gx,atilde:mx,auml:vx,brvbar:bx,ccedil:yx,cedil:wx,cent:xx,copy:Cx,curren:Sx,deg:kx,divide:Tx,eacute:_x,ecirc:Lx,egrave:$x,eth:Nx,euml:Ex,frac12:Ix,frac14:Mx,frac34:Rx,gt:Px,iacute:Ax,icirc:Fx,iexcl:Ox,igrave:Dx,iquest:Bx,iuml:jx,laquo:zx,lt:Ux,macr:Hx,micro:Wx,middot:Vx,nbsp:Gx,not:Yx,ntilde:Zx,oacute:qx,ocirc:Qx,ograve:Kx,ordf:Xx,ordm:Jx,oslash:eC,otilde:nC,ouml:tC,para:rC,plusmn:lC,pound:aC,quot:oC,raquo:iC,reg:sC,sect:dC,shy:cC,sup1:uC,sup2:hC,sup3:pC,szlig:fC,thorn:gC,times:mC,uacute:vC,ucirc:bC,ugrave:yC,uml:wC,uuml:xC,yacute:CC,yen:SC,yuml:kC},_C={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var W3=LC;function LC(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=48&&n<=57}var $C=NC;function NC(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=97&&n<=102||n>=65&&n<=70||n>=48&&n<=57}var EC=IC;function IC(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=97&&n<=122||n>=65&&n<=90}var MC=EC,RC=W3,PC=AC;function AC(e){return MC(e)||RC(e)}var ns,FC=59,OC=DC;function DC(e){var n="&"+e+";",t;return ns=ns||document.createElement("i"),ns.innerHTML=n,t=ns.textContent,t.charCodeAt(t.length-1)===FC&&e!=="semi"||t===n?!1:t}var O2=TC,D2=_C,BC=W3,jC=$C,V3=PC,zC=OC,UC=nS,HC={}.hasOwnProperty,Jl=String.fromCharCode,WC=Function.prototype,B2={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},VC=9,j2=10,GC=12,YC=32,z2=38,ZC=59,qC=60,QC=61,KC=35,XC=88,JC=120,eS=65533,ta="named",vp="hexadecimal",bp="decimal",yp={};yp[vp]=16;yp[bp]=10;var Ed={};Ed[ta]=V3;Ed[bp]=BC;Ed[vp]=jC;var G3=1,Y3=2,Z3=3,q3=4,Q3=5,Xu=6,K3=7,Kr={};Kr[G3]="Named character references must be terminated by a semicolon";Kr[Y3]="Numeric character references must be terminated by a semicolon";Kr[Z3]="Named character references cannot be empty";Kr[q3]="Numeric character references cannot be empty";Kr[Q3]="Named character references must be known";Kr[Xu]="Numeric character references cannot be disallowed";Kr[K3]="Numeric character references cannot be outside the permissible Unicode range";function nS(e,n){var t={},r,a;n||(n={});for(a in B2)r=n[a],t[a]=r??B2[a];return(t.position.indent||t.position.start)&&(t.indent=t.position.indent||[],t.position=t.position.start),tS(e,t)}function tS(e,n){var t=n.additional,r=n.nonTerminated,a=n.text,o=n.reference,i=n.warning,s=n.textContext,u=n.referenceContext,p=n.warningContext,m=n.position,y=n.indent||[],C=e.length,E=0,N=-1,S=m.column||1,M=m.line||1,w="",g=[],b,v,L,T,A,O,z,Z,fe,ce,Ue,an,Ye,je,Ze,U,q,J,ae;for(typeof t=="string"&&(t=t.charCodeAt(0)),U=ge(),Z=i?zn:WC,E--,C++;++E<C;)if(A===j2&&(S=y[N]||1),A=e.charCodeAt(E),A===z2){if(z=e.charCodeAt(E+1),z===VC||z===j2||z===GC||z===YC||z===z2||z===qC||z!==z||t&&z===t){w+=Jl(A),S++;continue}for(Ye=E+1,an=Ye,ae=Ye,z===KC?(ae=++an,z=e.charCodeAt(ae),z===XC||z===JC?(je=vp,ae=++an):je=bp):je=ta,b="",Ue="",T="",Ze=Ed[je],ae--;++ae<C&&(z=e.charCodeAt(ae),!!Ze(z));)T+=Jl(z),je===ta&&HC.call(O2,T)&&(b=T,Ue=O2[T]);L=e.charCodeAt(ae)===ZC,L&&(ae++,v=je===ta?zC(T):!1,v&&(b=T,Ue=v)),J=1+ae-Ye,!L&&!r||(T?je===ta?(L&&!Ue?Z(Q3,1):(b!==T&&(ae=an+b.length,J=1+ae-an,L=!1),L||(fe=b?G3:Z3,n.attribute?(z=e.charCodeAt(ae),z===QC?(Z(fe,J),Ue=null):V3(z)?Ue=null:Z(fe,J)):Z(fe,J))),O=Ue):(L||Z(Y3,J),O=parseInt(T,yp[je]),rS(O)?(Z(K3,J),O=Jl(eS)):O in D2?(Z(Xu,J),O=D2[O]):(ce="",lS(O)&&Z(Xu,J),O>65535&&(O-=65536,ce+=Jl(O>>>10|55296),O=56320|O&1023),O=ce+Jl(O))):je!==ta&&Z(q3,J)),O?(me(),U=ge(),E=ae-1,S+=ae-Ye+1,g.push(O),q=ge(),q.offset++,o&&o.call(u,O,{start:U,end:q},e.slice(Ye-1,ae)),U=q):(T=e.slice(Ye-1,ae),w+=T,S+=T.length,E=ae-1)}else A===10&&(M++,N++,S=0),A===A?(w+=Jl(A),S++):me();return g.join("");function ge(){return{line:M,column:S,offset:E+(m.offset||0)}}function zn(nn,qe){var fn=ge();fn.column+=qe,fn.offset+=qe,i.call(p,Kr[nn],fn,nn)}function me(){w&&(g.push(w),a&&a.call(s,w,{start:U,end:ge()}),w="")}}function rS(e){return e>=55296&&e<=57343||e>1114111}function lS(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var X3={exports:{}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(r){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,i={},s={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function g(b){return b instanceof u?new u(b.type,g(b.content),b.alias):Array.isArray(b)?b.map(g):b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++o}),g.__id},clone:function g(b,v){v=v||{};var L,T;switch(s.util.type(b)){case"Object":if(T=s.util.objId(b),v[T])return v[T];L={},v[T]=L;for(var A in b)b.hasOwnProperty(A)&&(L[A]=g(b[A],v));return L;case"Array":return T=s.util.objId(b),v[T]?v[T]:(L=[],v[T]=L,b.forEach(function(O,z){L[z]=g(O,v)}),L);default:return b}},getLanguage:function(g){for(;g;){var b=a.exec(g.className);if(b)return b[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,b){g.className=g.className.replace(RegExp(a,"gi"),""),g.classList.add("language-"+b)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(L){var g=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(L.stack)||[])[1];if(g){var b=document.getElementsByTagName("script");for(var v in b)if(b[v].src==g)return b[v]}return null}},isActive:function(g,b,v){for(var L="no-"+b;g;){var T=g.classList;if(T.contains(b))return!0;if(T.contains(L))return!1;g=g.parentElement}return!!v}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(g,b){var v=s.util.clone(s.languages[g]);for(var L in b)v[L]=b[L];return v},insertBefore:function(g,b,v,L){L=L||s.languages;var T=L[g],A={};for(var O in T)if(T.hasOwnProperty(O)){if(O==b)for(var z in v)v.hasOwnProperty(z)&&(A[z]=v[z]);v.hasOwnProperty(O)||(A[O]=T[O])}var Z=L[g];return L[g]=A,s.languages.DFS(s.languages,function(fe,ce){ce===Z&&fe!=g&&(this[fe]=A)}),A},DFS:function g(b,v,L,T){T=T||{};var A=s.util.objId;for(var O in b)if(b.hasOwnProperty(O)){v.call(b,O,b[O],L||O);var z=b[O],Z=s.util.type(z);Z==="Object"&&!T[A(z)]?(T[A(z)]=!0,g(z,v,null,T)):Z==="Array"&&!T[A(z)]&&(T[A(z)]=!0,g(z,v,O,T))}}},plugins:{},highlightAll:function(g,b){s.highlightAllUnder(document,g,b)},highlightAllUnder:function(g,b,v){var L={callback:v,container:g,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",L),L.elements=Array.prototype.slice.apply(L.container.querySelectorAll(L.selector)),s.hooks.run("before-all-elements-highlight",L);for(var T=0,A;A=L.elements[T++];)s.highlightElement(A,b===!0,L.callback)},highlightElement:function(g,b,v){var L=s.util.getLanguage(g),T=s.languages[L];s.util.setLanguage(g,L);var A=g.parentElement;A&&A.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(A,L);var O=g.textContent,z={element:g,language:L,grammar:T,code:O};function Z(ce){z.highlightedCode=ce,s.hooks.run("before-insert",z),z.element.innerHTML=z.highlightedCode,s.hooks.run("after-highlight",z),s.hooks.run("complete",z),v&&v.call(z.element)}if(s.hooks.run("before-sanity-check",z),A=z.element.parentElement,A&&A.nodeName.toLowerCase()==="pre"&&!A.hasAttribute("tabindex")&&A.setAttribute("tabindex","0"),!z.code){s.hooks.run("complete",z),v&&v.call(z.element);return}if(s.hooks.run("before-highlight",z),!z.grammar){Z(s.util.encode(z.code));return}if(b&&r.Worker){var fe=new Worker(s.filename);fe.onmessage=function(ce){Z(ce.data)},fe.postMessage(JSON.stringify({language:z.language,code:z.code,immediateClose:!0}))}else Z(s.highlight(z.code,z.grammar,z.language))},highlight:function(g,b,v){var L={code:g,grammar:b,language:v};if(s.hooks.run("before-tokenize",L),!L.grammar)throw new Error('The language "'+L.language+'" has no grammar.');return L.tokens=s.tokenize(L.code,L.grammar),s.hooks.run("after-tokenize",L),u.stringify(s.util.encode(L.tokens),L.language)},tokenize:function(g,b){var v=b.rest;if(v){for(var L in v)b[L]=v[L];delete b.rest}var T=new y;return C(T,T.head,g),m(g,T,b,T.head,0),N(T)},hooks:{all:{},add:function(g,b){var v=s.hooks.all;v[g]=v[g]||[],v[g].push(b)},run:function(g,b){var v=s.hooks.all[g];if(!(!v||!v.length))for(var L=0,T;T=v[L++];)T(b)}},Token:u};r.Prism=s;function u(g,b,v,L){this.type=g,this.content=b,this.alias=v,this.length=(L||"").length|0}u.stringify=function g(b,v){if(typeof b=="string")return b;if(Array.isArray(b)){var L="";return b.forEach(function(Z){L+=g(Z,v)}),L}var T={type:b.type,content:g(b.content,v),tag:"span",classes:["token",b.type],attributes:{},language:v},A=b.alias;A&&(Array.isArray(A)?Array.prototype.push.apply(T.classes,A):T.classes.push(A)),s.hooks.run("wrap",T);var O="";for(var z in T.attributes)O+=" "+z+'="'+(T.attributes[z]||"").replace(/"/g,"&quot;")+'"';return"<"+T.tag+' class="'+T.classes.join(" ")+'"'+O+">"+T.content+"</"+T.tag+">"};function p(g,b,v,L){g.lastIndex=b;var T=g.exec(v);if(T&&L&&T[1]){var A=T[1].length;T.index+=A,T[0]=T[0].slice(A)}return T}function m(g,b,v,L,T,A){for(var O in v)if(!(!v.hasOwnProperty(O)||!v[O])){var z=v[O];z=Array.isArray(z)?z:[z];for(var Z=0;Z<z.length;++Z){if(A&&A.cause==O+","+Z)return;var fe=z[Z],ce=fe.inside,Ue=!!fe.lookbehind,an=!!fe.greedy,Ye=fe.alias;if(an&&!fe.pattern.global){var je=fe.pattern.toString().match(/[imsuy]*$/)[0];fe.pattern=RegExp(fe.pattern.source,je+"g")}for(var Ze=fe.pattern||fe,U=L.next,q=T;U!==b.tail&&!(A&&q>=A.reach);q+=U.value.length,U=U.next){var J=U.value;if(b.length>g.length)return;if(!(J instanceof u)){var ae=1,ge;if(an){if(ge=p(Ze,q,g,Ue),!ge||ge.index>=g.length)break;var qe=ge.index,zn=ge.index+ge[0].length,me=q;for(me+=U.value.length;qe>=me;)U=U.next,me+=U.value.length;if(me-=U.value.length,q=me,U.value instanceof u)continue;for(var nn=U;nn!==b.tail&&(me<zn||typeof nn.value=="string");nn=nn.next)ae++,me+=nn.value.length;ae--,J=g.slice(q,me),ge.index-=q}else if(ge=p(Ze,0,J,Ue),!ge)continue;var qe=ge.index,fn=ge[0],Fn=J.slice(0,qe),Jr=J.slice(qe+fn.length),el=q+J.length;A&&el>A.reach&&(A.reach=el);var er=U.prev;Fn&&(er=C(b,er,Fn),q+=Fn.length),E(b,er,ae);var Ga=new u(O,ce?s.tokenize(fn,ce):fn,Ye,fn);if(U=C(b,er,Ga),Jr&&C(b,U,Jr),ae>1){var nl={cause:O+","+Z,reach:el};m(g,b,v,U.prev,q,nl),A&&nl.reach>A.reach&&(A.reach=nl.reach)}}}}}}function y(){var g={value:null,prev:null,next:null},b={value:null,prev:g,next:null};g.next=b,this.head=g,this.tail=b,this.length=0}function C(g,b,v){var L=b.next,T={value:v,prev:b,next:L};return b.next=T,L.prev=T,g.length++,T}function E(g,b,v){for(var L=b.next,T=0;T<v&&L!==g.tail;T++)L=L.next;b.next=L,L.prev=b,g.length-=T}function N(g){for(var b=[],v=g.head.next;v!==g.tail;)b.push(v.value),v=v.next;return b}if(!r.document)return r.addEventListener&&(s.disableWorkerMessageHandler||r.addEventListener("message",function(g){var b=JSON.parse(g.data),v=b.language,L=b.code,T=b.immediateClose;r.postMessage(s.highlight(L,s.languages[v],v)),T&&r.close()},!1)),s;var S=s.util.currentScript();S&&(s.filename=S.src,S.hasAttribute("data-manual")&&(s.manual=!0));function M(){s.manual||s.highlightAll()}if(!s.manual){var w=document.readyState;w==="loading"||w==="interactive"&&S&&S.defer?document.addEventListener("DOMContentLoaded",M):window.requestAnimationFrame?window.requestAnimationFrame(M):window.setTimeout(M,16)}return s}(n);e.exports&&(e.exports=t),typeof zo<"u"&&(zo.Prism=t)})(X3);var aS=X3.exports,oS=wp;wp.displayName="markup";wp.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function wp(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(t,r){var a={};a["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[r]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};o["language-"+r]={pattern:/[\s\S]+/,inside:e.languages[r]};var i={};i[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:o},e.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(n,t){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:e.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var J3=xp;xp.displayName="css";xp.aliases=[];function xp(e){(function(n){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var r=n.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(e)}const iS=Xt(J3);var sS=Cp;Cp.displayName="clike";Cp.aliases=[];function Cp(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var dS=Sp;Sp.displayName="javascript";Sp.aliases=["js"];function Sp(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var ko=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof zo=="object"?zo:{},cS=_S();ko.Prism={manual:!0,disableWorkerMessageHandler:!0};var uS=_w,hS=UC,ev=aS,pS=oS,fS=J3,gS=sS,mS=dS;cS();var kp={}.hasOwnProperty;function nv(){}nv.prototype=ev;var pn=new nv,vS=pn;pn.highlight=yS;pn.register=bi;pn.alias=bS;pn.registered=wS;pn.listLanguages=xS;bi(pS);bi(fS);bi(gS);bi(mS);pn.util.encode=kS;pn.Token.stringify=CS;function bi(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");pn.languages[e.displayName]===void 0&&e(pn)}function bS(e,n){var t=pn.languages,r=e,a,o,i,s;n&&(r={},r[e]=n);for(a in r)for(o=r[a],o=typeof o=="string"?[o]:o,i=o.length,s=-1;++s<i;)t[o[s]]=t[a]}function yS(e,n){var t=ev.highlight,r;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(pn.util.type(n)==="Object")r=n,n=null;else{if(typeof n!="string")throw new Error("Expected `string` for `name`, got `"+n+"`");if(kp.call(pn.languages,n))r=pn.languages[n];else throw new Error("Unknown language: `"+n+"` is not registered")}return t.call(this,e,r,n)}function wS(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return kp.call(pn.languages,e)}function xS(){var e=pn.languages,n=[],t;for(t in e)kp.call(e,t)&&typeof e[t]=="object"&&n.push(t);return n}function CS(e,n,t){var r;return typeof e=="string"?{type:"text",value:e}:pn.util.type(e)==="Array"?SS(e,n):(r={type:e.type,content:pn.Token.stringify(e.content,n,t),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:t},e.alias&&(r.classes=r.classes.concat(e.alias)),pn.hooks.run("wrap",r),uS(r.tag+"."+r.classes.join("."),TS(r.attributes),r.content))}function SS(e,n){for(var t=[],r=e.length,a=-1,o;++a<r;)o=e[a],o!==""&&o!==null&&o!==void 0&&t.push(o);for(a=-1,r=t.length;++a<r;)o=t[a],t[a]=pn.Token.stringify(o,n,t);return t}function kS(e){return e}function TS(e){var n;for(n in e)e[n]=hS(e[n]);return e}function _S(){var e="Prism"in ko,n=e?ko.Prism:void 0;return t;function t(){e?ko.Prism=n:delete ko.Prism,e=void 0,n=void 0}}const Tp=Xt(vS);var _p=s9(Tp,{});_p.registerLanguage=function(e,n){return Tp.register(n)};_p.alias=function(e,n){return Tp.alias(e,n)};const Al=_p;var LS=Lp;Lp.displayName="bash";Lp.aliases=["shell"];function Lp(e){(function(n){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:r,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};n.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=n.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=a.variable[1].inside,s=0;s<o.length;s++)i[o[s]]=n.languages.bash[o[s]];n.languages.shell=n.languages.bash})(e)}const $S=Xt(LS);var NS=$p;$p.displayName="json";$p.aliases=["webmanifest"];function $p(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}const ES=Xt(NS);var IS=Np;Np.displayName="jsx";Np.aliases=[];function Np(e){(function(n){var t=n.util.clone(n.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,o=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function i(p,m){return p=p.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return o}),RegExp(p,m)}o=i(o).source,n.languages.jsx=n.languages.extend("markup",t),n.languages.jsx.tag.pattern=i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),n.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,n.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,n.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,n.languages.jsx.tag.inside.comment=t.comment,n.languages.insertBefore("inside","attr-name",{spread:{pattern:i(/<SPREAD>/.source),inside:n.languages.jsx}},n.languages.jsx.tag),n.languages.insertBefore("inside","special-attr",{script:{pattern:i(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:n.languages.jsx}}},n.languages.jsx.tag);var s=function(p){return p?typeof p=="string"?p:typeof p.content=="string"?p.content:p.content.map(s).join(""):""},u=function(p){for(var m=[],y=0;y<p.length;y++){var C=p[y],E=!1;if(typeof C!="string"&&(C.type==="tag"&&C.content[0]&&C.content[0].type==="tag"?C.content[0].content[0].content==="</"?m.length>0&&m[m.length-1].tagName===s(C.content[0].content[1])&&m.pop():C.content[C.content.length-1].content==="/>"||m.push({tagName:s(C.content[0].content[1]),openedBraces:0}):m.length>0&&C.type==="punctuation"&&C.content==="{"?m[m.length-1].openedBraces++:m.length>0&&m[m.length-1].openedBraces>0&&C.type==="punctuation"&&C.content==="}"?m[m.length-1].openedBraces--:E=!0),(E||typeof C=="string")&&m.length>0&&m[m.length-1].openedBraces===0){var N=s(C);y<p.length-1&&(typeof p[y+1]=="string"||p[y+1].type==="plain-text")&&(N+=s(p[y+1]),p.splice(y+1,1)),y>0&&(typeof p[y-1]=="string"||p[y-1].type==="plain-text")&&(N=s(p[y-1])+N,p.splice(y-1,1),y--),p[y]=new n.Token("plain-text",N,null,N)}C.content&&typeof C.content!="string"&&u(C.content)}};n.hooks.add("after-tokenize",function(p){p.language!=="jsx"&&p.language!=="tsx"||u(p.tokens)})})(e)}const MS=Xt(IS);var RS=Ep;Ep.displayName="scss";Ep.aliases=[];function Ep(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const PS=Xt(RS);var AS=Ip;Ip.displayName="yaml";Ip.aliases=["yml"];function Ip(e){(function(n){var t=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+r.source+"(?:[ 	]+"+t.source+")?|"+t.source+"(?:[ 	]+"+r.source+")?)",o=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),i=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function s(u,p){p=(p||"").replace(/m/g,"")+"m";var m=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<value>>/g,function(){return u});return RegExp(m,p)}n.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return a})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<key>>/g,function(){return"(?:"+o+"|"+i+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:s(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:s(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:s(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:s(i),lookbehind:!0,greedy:!0},number:{pattern:s(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},n.languages.yml=n.languages.yaml})(e)}const FS=Xt(AS);function tv(e){return typeof e=="string"}function OS(e){return Array.isArray(e)}function DS(e){return e===void 0}function BS(e){return e===null}function Nn(e){return!(DS(e)||BS(e))}function jS(e){return!Nn(e)}function zS(...e){throw new Error(e.join(""))}function US(){return Intl.DateTimeFormat().resolvedOptions().locale}US();const yi=(e,n,t=1)=>{const r=n<e?-Math.abs(t):t;return Array(1+Math.floor(Math.abs((n-e)/t))).fill(e).map((a,o)=>a+o*r)};function rv(e){return jS(e)?[]:tv(e)?e.length?e.split(/,\s*|\s+/):[]:OS(e)?e:[e]}function HS(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function WS(e){return new Promise(n=>setTimeout(n,e))}Al.registerLanguage("jsx",MS);Al.registerLanguage("json",ES);Al.registerLanguage("css",iS);Al.registerLanguage("scss",PS);Al.registerLanguage("bash",$S);Al.registerLanguage("yaml",FS);const Me=({code:e,language:n="jsx",caption:t,expand:r=!1,fixed:a=r,className:o=""})=>{const[i,s]=B.useState(!1),[u,p]=B.useState(r),m=()=>{navigator.clipboard.writeText(e),s(!0),WS(2e3).then(()=>s(!1))};return d("div",{className:`codeblock ${o} ${u?"expanded":""} ${a?"fixed-open":"expandable"}`,children:[!!t&&l("h4",{className:"caption",children:t}),d("div",{className:"controls",children:[l("div",{className:"expand",onClick:()=>p(!u),children:u?"Compress":"Expand"}),l("div",{className:`clipboard ${i?"copied":""}`,onClick:m,children:i?"Copied":"Copy"})]}),l(Al,{language:n,showLineNumbers:!0,useInlineStyles:!1,customStyle:{},children:VS(e)})]})},VS=e=>e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/\/\*\s*REAL\s*\*\/.*?\/\*\s*UNREAL\s*\*\//g,"").replaceAll(/{\/\*\s*(UN?)PRETEND\s*\*\/}/g,"").replace(/\n+$/,""),qt=({children:e,code:n,caption:t,language:r,expand:a,className:o=""})=>d("div",{className:`grid-2 gap-8 top stack-desktop ${o}`,children:[l("div",{className:"wide",children:e}),l(Me,{code:n,caption:t,language:r,expand:a,className:"mar-b-8"})]}),GS=`// define your brand hue and color name
$purple-hue:   295;
$brand-hue:    $purple-hue;
$brand-color:  'purple';

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,YS=`// define your own brand colors...
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
`,ZS=`// define your own brand colors and greyscale hues...
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
`,qS=`// define the colors that you want to use...
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
 */function Pe(){return Pe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Pe.apply(this,arguments)}var un;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(un||(un={}));const U2="popstate";function QS(e){e===void 0&&(e={});function n(r,a){let{pathname:o,search:i,hash:s}=r.location;return oi("",{pathname:o,search:i,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:El(a)}return XS(n,t,null,e)}function Te(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Pa(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function KS(){return Math.random().toString(36).substr(2,8)}function H2(e,n){return{usr:e.state,key:e.key,idx:n}}function oi(e,n,t,r){return t===void 0&&(t=null),Pe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?wr(n):n,{state:t,key:n&&n.key||r||KS()})}function El(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function wr(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function XS(e,n,t,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:o=!1}=r,i=a.history,s=un.Pop,u=null,p=m();p==null&&(p=0,i.replaceState(Pe({},i.state,{idx:p}),""));function m(){return(i.state||{idx:null}).idx}function y(){s=un.Pop;let M=m(),w=M==null?null:M-p;p=M,u&&u({action:s,location:S.location,delta:w})}function C(M,w){s=un.Push;let g=oi(S.location,M,w);t&&t(g,M),p=m()+1;let b=H2(g,p),v=S.createHref(g);try{i.pushState(b,"",v)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;a.location.assign(v)}o&&u&&u({action:s,location:S.location,delta:1})}function E(M,w){s=un.Replace;let g=oi(S.location,M,w);t&&t(g,M),p=m();let b=H2(g,p),v=S.createHref(g);i.replaceState(b,"",v),o&&u&&u({action:s,location:S.location,delta:0})}function N(M){let w=a.location.origin!=="null"?a.location.origin:a.location.href,g=typeof M=="string"?M:El(M);return Te(w,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,w)}let S={get action(){return s},get location(){return e(a,i)},listen(M){if(u)throw new Error("A history only accepts one active listener");return a.addEventListener(U2,y),u=M,()=>{a.removeEventListener(U2,y),u=null}},createHref(M){return n(a,M)},createURL:N,encodeLocation(M){let w=N(M);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:C,replace:E,go(M){return i.go(M)}};return S}var vn;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vn||(vn={}));const JS=new Set(["lazy","caseSensitive","path","id","index","children"]);function ek(e){return e.index===!0}function Ju(e,n,t,r){return t===void 0&&(t=[]),r===void 0&&(r={}),e.map((a,o)=>{let i=[...t,o],s=typeof a.id=="string"?a.id:i.join("-");if(Te(a.index!==!0||!a.children,"Cannot specify children on an index route"),Te(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),ek(a)){let u=Pe({},a,n(a),{id:s});return r[s]=u,u}else{let u=Pe({},a,n(a),{id:s,children:void 0});return r[s]=u,a.children&&(u.children=Ju(a.children,n,i,r)),u}})}function va(e,n,t){t===void 0&&(t="/");let r=typeof n=="string"?wr(n):n,a=za(r.pathname||"/",t);if(a==null)return null;let o=lv(e);nk(o);let i=null;for(let s=0;i==null&&s<o.length;++s)i=ck(o[s],pk(a));return i}function lv(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let a=(o,i,s)=>{let u={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};u.relativePath.startsWith("/")&&(Te(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let p=hr([r,u.relativePath]),m=t.concat(u);o.children&&o.children.length>0&&(Te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),lv(o.children,n,m,p)),!(o.path==null&&!o.index)&&n.push({path:p,score:sk(p,o.index),routesMeta:m})};return e.forEach((o,i)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))a(o,i);else for(let u of av(o.path))a(o,i,u)}),n}function av(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let i=av(r.join("/")),s=[];return s.push(...i.map(u=>u===""?o:[o,u].join("/"))),a&&s.push(...i),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function nk(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:dk(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const tk=/^:\w+$/,rk=3,lk=2,ak=1,ok=10,ik=-2,W2=e=>e==="*";function sk(e,n){let t=e.split("/"),r=t.length;return t.some(W2)&&(r+=ik),n&&(r+=lk),t.filter(a=>!W2(a)).reduce((a,o)=>a+(tk.test(o)?rk:o===""?ak:ok),r)}function dk(e,n){return e.length===n.length&&e.slice(0,-1).every((r,a)=>r===n[a])?e[e.length-1]-n[n.length-1]:0}function ck(e,n){let{routesMeta:t}=e,r={},a="/",o=[];for(let i=0;i<t.length;++i){let s=t[i],u=i===t.length-1,p=a==="/"?n:n.slice(a.length)||"/",m=uk({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},p);if(!m)return null;Object.assign(r,m.params);let y=s.route;o.push({params:r,pathname:hr([a,m.pathname]),pathnameBase:vk(hr([a,m.pathnameBase])),route:y}),m.pathnameBase!=="/"&&(a=hr([a,m.pathnameBase]))}return o}function uk(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=hk(e.path,e.caseSensitive,e.end),a=n.match(t);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((p,m,y)=>{if(m==="*"){let C=s[y]||"";i=o.slice(0,o.length-C.length).replace(/(.)\/+$/,"$1")}return p[m]=fk(s[y]||"",m),p},{}),pathname:o,pathnameBase:i,pattern:e}}function hk(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Pa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),r]}function pk(e){try{return decodeURI(e)}catch(n){return Pa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function fk(e,n){try{return decodeURIComponent(e)}catch(t){return Pa(!1,'The value for the URL param "'+n+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),e}}function za(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function gk(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:a=""}=typeof e=="string"?wr(e):e;return{pathname:t?t.startsWith("/")?t:mk(t,n):n,search:bk(r),hash:yk(a)}}function mk(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Uc(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Id(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Mp(e,n,t,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=wr(e):(a=Pe({},e),Te(!a.pathname||!a.pathname.includes("?"),Uc("?","pathname","search",a)),Te(!a.pathname||!a.pathname.includes("#"),Uc("#","pathname","hash",a)),Te(!a.search||!a.search.includes("#"),Uc("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,s;if(r||i==null)s=t;else{let y=n.length-1;if(i.startsWith("..")){let C=i.split("/");for(;C[0]==="..";)C.shift(),y-=1;a.pathname=C.join("/")}s=y>=0?n[y]:"/"}let u=gk(a,s),p=i&&i!=="/"&&i.endsWith("/"),m=(o||i===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(p||m)&&(u.pathname+="/"),u}const hr=e=>e.join("/").replace(/\/\/+/g,"/"),vk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),bk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,yk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Rp{constructor(n,t,r,a){a===void 0&&(a=!1),this.status=n,this.statusText=t||"",this.internal=a,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function ov(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const iv=["post","put","patch","delete"],wk=new Set(iv),xk=["get",...iv],Ck=new Set(xk),Sk=new Set([301,302,303,307,308]),kk=new Set([307,308]),Hc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Tk={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},V2={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},sv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_k=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function Lk(e){const n=e.window?e.window:typeof window<"u"?window:void 0,t=typeof n<"u"&&typeof n.document<"u"&&typeof n.document.createElement<"u",r=!t;Te(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let F=e.detectErrorBoundary;a=D=>({hasErrorBoundary:F(D)})}else a=_k;let o={},i=Ju(e.routes,a,void 0,o),s,u=e.basename||"/",p=Pe({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),m=null,y=new Set,C=null,E=null,N=null,S=e.hydrationData!=null,M=va(i,e.history.location,u),w=null;if(M==null){let F=At(404,{pathname:e.history.location.pathname}),{matches:D,route:W}=X2(i);M=D,w={[W.id]:F}}let g=!M.some(F=>F.route.lazy)&&(!M.some(F=>F.route.loader)||e.hydrationData!=null),b,v={historyAction:e.history.action,location:e.history.location,matches:M,initialized:g,navigation:Hc,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||w,fetchers:new Map,blockers:new Map},L=un.Pop,T=!1,A,O=!1,z=!1,Z=[],fe=[],ce=new Map,Ue=0,an=-1,Ye=new Map,je=new Set,Ze=new Map,U=new Map,q=new Map,J=!1;function ae(){return m=e.history.listen(F=>{let{action:D,location:W,delta:Q}=F;if(J){J=!1;return}Pa(q.size===0||Q!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let de=Ja({currentLocation:v.location,nextLocation:W,historyAction:D});if(de&&Q!=null){J=!0,e.history.go(Q*-1),ll(de,{state:"blocked",location:W,proceed(){ll(de,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),e.history.go(Q)},reset(){xr(de),me({blockers:new Map(b.state.blockers)})}});return}return Fn(D,W)}),v.initialized||Fn(un.Pop,v.location),b}function ge(){m&&m(),y.clear(),A&&A.abort(),v.fetchers.forEach((F,D)=>qa(D)),v.blockers.forEach((F,D)=>xr(D))}function zn(F){return y.add(F),()=>y.delete(F)}function me(F){v=Pe({},v,F),y.forEach(D=>D(v))}function nn(F,D){var W,Q;let de=v.actionData!=null&&v.navigation.formMethod!=null&&ir(v.navigation.formMethod)&&v.navigation.state==="loading"&&((W=F.state)==null?void 0:W._isRedirect)!==!0,ue;D.actionData?Object.keys(D.actionData).length>0?ue=D.actionData:ue=null:de?ue=v.actionData:ue=null;let he=D.loaderData?K2(v.loaderData,D.loaderData,D.matches||[],D.errors):v.loaderData;for(let[le]of q)xr(le);let pe=T===!0||v.navigation.formMethod!=null&&ir(v.navigation.formMethod)&&((Q=F.state)==null?void 0:Q._isRedirect)!==!0;s&&(i=s,s=void 0),me(Pe({},D,{actionData:ue,loaderData:he,historyAction:L,location:F,initialized:!0,navigation:Hc,revalidation:"idle",restoreScrollPosition:_i(F,D.matches||v.matches),preventScrollReset:pe,blockers:new Map(v.blockers)})),O||L===un.Pop||(L===un.Push?e.history.push(F,F.state):L===un.Replace&&e.history.replace(F,F.state)),L=un.Pop,T=!1,O=!1,z=!1,Z=[],fe=[]}async function qe(F,D){if(typeof F=="number"){e.history.go(F);return}let W=eh(v.location,v.matches,u,p.v7_prependBasename,F,D==null?void 0:D.fromRouteId,D==null?void 0:D.relative),{path:Q,submission:de,error:ue}=G2(p.v7_normalizeFormMethod,!1,W,D),he=v.location,pe=oi(v.location,Q,D&&D.state);pe=Pe({},pe,e.history.encodeLocation(pe));let le=D&&D.replace!=null?D.replace:void 0,$e=un.Push;le===!0?$e=un.Replace:le===!1||de!=null&&ir(de.formMethod)&&de.formAction===v.location.pathname+v.location.search&&($e=un.Replace);let Ae=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,wn=Ja({currentLocation:he,nextLocation:pe,historyAction:$e});if(wn){ll(wn,{state:"blocked",location:pe,proceed(){ll(wn,{state:"proceeding",proceed:void 0,reset:void 0,location:pe}),qe(F,D)},reset(){xr(wn),me({blockers:new Map(v.blockers)})}});return}return await Fn($e,pe,{submission:de,pendingError:ue,preventScrollReset:Ae,replace:D&&D.replace})}function fn(){if(Za(),me({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){Fn(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}Fn(L||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function Fn(F,D,W){A&&A.abort(),A=null,L=F,O=(W&&W.startUninterruptedRevalidation)===!0,Ti(v.location,v.matches),T=(W&&W.preventScrollReset)===!0;let Q=s||i,de=W&&W.overrideNavigation,ue=va(Q,D,u);if(!ue){let dn=At(404,{pathname:D.pathname}),{matches:gn,route:yt}=X2(Q);Dl(),nn(D,{matches:gn,loaderData:{},errors:{[yt.id]:dn}});return}if(v.initialized&&!z&&Mk(v.location,D)&&!(W&&W.submission&&ir(W.submission.formMethod))){nn(D,{matches:ue});return}A=new AbortController;let he=bo(e.history,D,A.signal,W&&W.submission),pe,le;if(W&&W.pendingError)le={[ba(ue).route.id]:W.pendingError};else if(W&&W.submission&&ir(W.submission.formMethod)){let dn=await Jr(he,D,W.submission,ue,{replace:W.replace});if(dn.shortCircuited)return;pe=dn.pendingActionData,le=dn.pendingActionError,de=Pe({state:"loading",location:D},W.submission),he=new Request(he.url,{signal:he.signal})}let{shortCircuited:$e,loaderData:Ae,errors:wn}=await el(he,D,ue,de,W&&W.submission,W&&W.fetcherSubmission,W&&W.replace,pe,le);$e||(A=null,nn(D,Pe({matches:ue},pe?{actionData:pe}:{},{loaderData:Ae,errors:wn})))}async function Jr(F,D,W,Q,de){Za();let ue=Pe({state:"submitting",location:D},W);me({navigation:ue});let he,pe=nh(Q,D);if(!pe.route.action&&!pe.route.lazy)he={type:vn.error,error:At(405,{method:F.method,pathname:D.pathname,routeId:pe.route.id})};else if(he=await vo("action",F,pe,Q,o,a,u),F.signal.aborted)return{shortCircuited:!0};if(Ta(he)){let le;return de&&de.replace!=null?le=de.replace:le=he.location===v.location.pathname+v.location.search,await tl(v,he,{submission:W,replace:le}),{shortCircuited:!0}}if(Do(he)){let le=ba(Q,pe.route.id);return(de&&de.replace)!==!0&&(L=un.Push),{pendingActionData:{},pendingActionError:{[le.route.id]:he.error}}}if(wl(he))throw At(400,{type:"defer-action"});return{pendingActionData:{[pe.route.id]:he.data}}}async function el(F,D,W,Q,de,ue,he,pe,le){let $e=Q;$e||($e=Pe({state:"loading",location:D,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},de));let Ae=de||ue?de||ue:$e.formMethod&&$e.formAction&&$e.formData&&$e.formEncType?{formMethod:$e.formMethod,formAction:$e.formAction,formData:$e.formData,formEncType:$e.formEncType}:void 0,wn=s||i,[dn,gn]=Y2(e.history,v,W,Ae,D,z,Z,fe,Ze,wn,u,pe,le);if(Dl(ze=>!(W&&W.some(Qn=>Qn.route.id===ze))||dn&&dn.some(Qn=>Qn.route.id===ze)),dn.length===0&&gn.length===0){let ze=Ka();return nn(D,Pe({matches:W,loaderData:{},errors:le||null},pe?{actionData:pe}:{},ze?{fetchers:new Map(v.fetchers)}:{})),{shortCircuited:!0}}if(!O){gn.forEach(Qn=>{let tr=v.fetchers.get(Qn.key),mn={state:"loading",data:tr&&tr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(Qn.key,mn)});let ze=pe||v.actionData;me(Pe({navigation:$e},ze?Object.keys(ze).length===0?{actionData:null}:{actionData:ze}:{},gn.length>0?{fetchers:new Map(v.fetchers)}:{}))}an=++Ue,gn.forEach(ze=>{ze.controller&&ce.set(ze.key,ze.controller)});let yt=()=>gn.forEach(ze=>nr(ze.key));A&&A.signal.addEventListener("abort",yt);let{results:al,loaderResults:eo,fetcherResults:Bl}=await Ci(v.matches,W,dn,gn,F);if(F.signal.aborted)return{shortCircuited:!0};A&&A.signal.removeEventListener("abort",yt),gn.forEach(ze=>ce.delete(ze.key));let $t=J2(al);if($t)return await tl(v,$t,{replace:he}),{shortCircuited:!0};let{loaderData:ol,errors:jl}=Q2(v,W,dn,eo,le,gn,Bl,U);U.forEach((ze,Qn)=>{ze.subscribe(tr=>{(tr||ze.done)&&U.delete(Qn)})});let no=Ka(),to=Xa(an),zl=no||to||gn.length>0;return Pe({loaderData:ol,errors:jl},zl?{fetchers:new Map(v.fetchers)}:{})}function er(F){return v.fetchers.get(F)||Tk}function Ga(F,D,W,Q){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ce.has(F)&&nr(F);let de=s||i,ue=eh(v.location,v.matches,u,p.v7_prependBasename,W,D,Q==null?void 0:Q.relative),he=va(de,ue,u);if(!he){rl(F,D,At(404,{pathname:ue}));return}let{path:pe,submission:le}=G2(p.v7_normalizeFormMethod,!0,ue,Q),$e=nh(he,pe);if(T=(Q&&Q.preventScrollReset)===!0,le&&ir(le.formMethod)){nl(F,D,pe,$e,he,le);return}Ze.set(F,{routeId:D,path:pe}),Ya(F,D,pe,$e,he,le)}async function nl(F,D,W,Q,de,ue){if(Za(),Ze.delete(F),!Q.route.action&&!Q.route.lazy){let mn=At(405,{method:ue.formMethod,pathname:W,routeId:D});rl(F,D,mn);return}let he=v.fetchers.get(F),pe=Pe({state:"submitting"},ue,{data:he&&he.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(F,pe),me({fetchers:new Map(v.fetchers)});let le=new AbortController,$e=bo(e.history,W,le.signal,ue);ce.set(F,le);let Ae=await vo("action",$e,Q,de,o,a,u);if($e.signal.aborted){ce.get(F)===le&&ce.delete(F);return}if(Ta(Ae)){ce.delete(F),je.add(F);let mn=Pe({state:"loading"},ue,{data:void 0," _hasFetcherDoneAnything ":!0});return v.fetchers.set(F,mn),me({fetchers:new Map(v.fetchers)}),tl(v,Ae,{submission:ue,isFetchActionRedirect:!0})}if(Do(Ae)){rl(F,D,Ae.error);return}if(wl(Ae))throw At(400,{type:"defer-action"});let wn=v.navigation.location||v.location,dn=bo(e.history,wn,le.signal),gn=s||i,yt=v.navigation.state!=="idle"?va(gn,v.navigation.location,u):v.matches;Te(yt,"Didn't find any matches after fetcher action");let al=++Ue;Ye.set(F,al);let eo=Pe({state:"loading",data:Ae.data},ue,{" _hasFetcherDoneAnything ":!0});v.fetchers.set(F,eo);let[Bl,$t]=Y2(e.history,v,yt,ue,wn,z,Z,fe,Ze,gn,u,{[Q.route.id]:Ae.data},void 0);$t.filter(mn=>mn.key!==F).forEach(mn=>{let ro=mn.key,Li=v.fetchers.get(ro),$i={state:"loading",data:Li&&Li.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(ro,$i),mn.controller&&ce.set(ro,mn.controller)}),me({fetchers:new Map(v.fetchers)});let ol=()=>$t.forEach(mn=>nr(mn.key));le.signal.addEventListener("abort",ol);let{results:jl,loaderResults:no,fetcherResults:to}=await Ci(v.matches,yt,Bl,$t,dn);if(le.signal.aborted)return;le.signal.removeEventListener("abort",ol),Ye.delete(F),ce.delete(F),$t.forEach(mn=>ce.delete(mn.key));let zl=J2(jl);if(zl)return tl(v,zl);let{loaderData:ze,errors:Qn}=Q2(v,v.matches,Bl,no,void 0,$t,to,U);if(v.fetchers.has(F)){let mn={state:"idle",data:Ae.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(F,mn)}let tr=Xa(al);v.navigation.state==="loading"&&al>an?(Te(L,"Expected pending action"),A&&A.abort(),nn(v.navigation.location,{matches:yt,loaderData:ze,errors:Qn,fetchers:new Map(v.fetchers)})):(me(Pe({errors:Qn,loaderData:K2(v.loaderData,ze,yt,Qn)},tr||$t.length>0?{fetchers:new Map(v.fetchers)}:{})),z=!1)}async function Ya(F,D,W,Q,de,ue){let he=v.fetchers.get(F),pe=Pe({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ue,{data:he&&he.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(F,pe),me({fetchers:new Map(v.fetchers)});let le=new AbortController,$e=bo(e.history,W,le.signal);ce.set(F,le);let Ae=await vo("loader",$e,Q,de,o,a,u);if(wl(Ae)&&(Ae=await hv(Ae,$e.signal,!0)||Ae),ce.get(F)===le&&ce.delete(F),$e.signal.aborted)return;if(Ta(Ae)){je.add(F),await tl(v,Ae);return}if(Do(Ae)){let dn=ba(v.matches,D);v.fetchers.delete(F),me({fetchers:new Map(v.fetchers),errors:{[dn.route.id]:Ae.error}});return}Te(!wl(Ae),"Unhandled fetcher deferred data");let wn={state:"idle",data:Ae.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(F,wn),me({fetchers:new Map(v.fetchers)})}async function tl(F,D,W){let{submission:Q,replace:de,isFetchActionRedirect:ue}=W===void 0?{}:W;D.revalidate&&(z=!0);let he=oi(F.location,D.location,Pe({_isRedirect:!0},ue?{_isFetchActionRedirect:!0}:{}));if(Te(he,"Expected a location on the redirect navigation"),sv.test(D.location)&&t){let dn=e.history.createURL(D.location),gn=za(dn.pathname,u)==null;if(n.location.origin!==dn.origin||gn){de?n.location.replace(D.location):n.location.assign(D.location);return}}A=null;let pe=de===!0?un.Replace:un.Push,{formMethod:le,formAction:$e,formEncType:Ae,formData:wn}=F.navigation;!Q&&le&&$e&&wn&&Ae&&(Q={formMethod:le,formAction:$e,formEncType:Ae,formData:wn}),kk.has(D.status)&&Q&&ir(Q.formMethod)?await Fn(pe,he,{submission:Pe({},Q,{formAction:D.location}),preventScrollReset:T}):ue?await Fn(pe,he,{overrideNavigation:{state:"loading",location:he,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:Q,preventScrollReset:T}):await Fn(pe,he,{overrideNavigation:{state:"loading",location:he,formMethod:Q?Q.formMethod:void 0,formAction:Q?Q.formAction:void 0,formEncType:Q?Q.formEncType:void 0,formData:Q?Q.formData:void 0},preventScrollReset:T})}async function Ci(F,D,W,Q,de){let ue=await Promise.all([...W.map(le=>vo("loader",de,le,D,o,a,u)),...Q.map(le=>le.matches&&le.match&&le.controller?vo("loader",bo(e.history,le.path,le.controller.signal),le.match,le.matches,o,a,u):{type:vn.error,error:At(404,{pathname:le.path})})]),he=ue.slice(0,W.length),pe=ue.slice(W.length);return await Promise.all([e0(F,W,he,he.map(()=>de.signal),!1,v.loaderData),e0(F,Q.map(le=>le.match),pe,Q.map(le=>le.controller?le.controller.signal:null),!0)]),{results:ue,loaderResults:he,fetcherResults:pe}}function Za(){z=!0,Z.push(...Dl()),Ze.forEach((F,D)=>{ce.has(D)&&(fe.push(D),nr(D))})}function rl(F,D,W){let Q=ba(v.matches,D);qa(F),me({errors:{[Q.route.id]:W},fetchers:new Map(v.fetchers)})}function qa(F){let D=v.fetchers.get(F);ce.has(F)&&!(D&&D.state==="loading"&&Ye.has(F))&&nr(F),Ze.delete(F),Ye.delete(F),je.delete(F),v.fetchers.delete(F)}function nr(F){let D=ce.get(F);Te(D,"Expected fetch controller: "+F),D.abort(),ce.delete(F)}function Qa(F){for(let D of F){let Q={state:"idle",data:er(D).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(D,Q)}}function Ka(){let F=[],D=!1;for(let W of je){let Q=v.fetchers.get(W);Te(Q,"Expected fetcher: "+W),Q.state==="loading"&&(je.delete(W),F.push(W),D=!0)}return Qa(F),D}function Xa(F){let D=[];for(let[W,Q]of Ye)if(Q<F){let de=v.fetchers.get(W);Te(de,"Expected fetcher: "+W),de.state==="loading"&&(nr(W),Ye.delete(W),D.push(W))}return Qa(D),D.length>0}function Si(F,D){let W=v.blockers.get(F)||V2;return q.get(F)!==D&&q.set(F,D),W}function xr(F){v.blockers.delete(F),q.delete(F)}function ll(F,D){let W=v.blockers.get(F)||V2;Te(W.state==="unblocked"&&D.state==="blocked"||W.state==="blocked"&&D.state==="blocked"||W.state==="blocked"&&D.state==="proceeding"||W.state==="blocked"&&D.state==="unblocked"||W.state==="proceeding"&&D.state==="unblocked","Invalid blocker state transition: "+W.state+" -> "+D.state),v.blockers.set(F,D),me({blockers:new Map(v.blockers)})}function Ja(F){let{currentLocation:D,nextLocation:W,historyAction:Q}=F;if(q.size===0)return;q.size>1&&Pa(!1,"A router only supports one blocker at a time");let de=Array.from(q.entries()),[ue,he]=de[de.length-1],pe=v.blockers.get(ue);if(!(pe&&pe.state==="proceeding")&&he({currentLocation:D,nextLocation:W,historyAction:Q}))return ue}function Dl(F){let D=[];return U.forEach((W,Q)=>{(!F||F(Q))&&(W.cancel(),D.push(Q),U.delete(Q))}),D}function ki(F,D,W){if(C=F,N=D,E=W||(Q=>Q.key),!S&&v.navigation===Hc){S=!0;let Q=_i(v.location,v.matches);Q!=null&&me({restoreScrollPosition:Q})}return()=>{C=null,N=null,E=null}}function Ti(F,D){if(C&&E&&N){let W=D.map(de=>n0(de,v.loaderData)),Q=E(F,W)||F.key;C[Q]=N()}}function _i(F,D){if(C&&E&&N){let W=D.map(ue=>n0(ue,v.loaderData)),Q=E(F,W)||F.key,de=C[Q];if(typeof de=="number")return de}return null}function zd(F){o={},s=Ju(F,a,void 0,o)}return b={get basename(){return u},get state(){return v},get routes(){return i},initialize:ae,subscribe:zn,enableScrollRestoration:ki,navigate:qe,fetch:Ga,revalidate:fn,createHref:F=>e.history.createHref(F),encodeLocation:F=>e.history.encodeLocation(F),getFetcher:er,deleteFetcher:qa,dispose:ge,getBlocker:Si,deleteBlocker:xr,_internalFetchControllers:ce,_internalActiveDeferreds:U,_internalSetRoutes:zd},b}function $k(e){return e!=null&&"formData"in e}function eh(e,n,t,r,a,o,i){let s,u;if(o!=null&&i!=="path"){s=[];for(let m of n)if(s.push(m),m.route.id===o){u=m;break}}else s=n,u=n[n.length-1];let p=Mp(a||".",Id(s).map(m=>m.pathnameBase),za(e.pathname,t)||e.pathname,i==="path");return a==null&&(p.search=e.search,p.hash=e.hash),(a==null||a===""||a===".")&&u&&u.route.index&&!Pp(p.search)&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),r&&t!=="/"&&(p.pathname=p.pathname==="/"?t:hr([t,p.pathname])),El(p)}function G2(e,n,t,r){if(!r||!$k(r))return{path:t};if(r.formMethod&&!Ak(r.formMethod))return{path:t,error:At(405,{method:r.formMethod})};let a;if(r.formData){let s=r.formMethod||"get";if(a={formMethod:e?s.toUpperCase():s.toLowerCase(),formAction:uv(t),formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:r.formData},ir(a.formMethod))return{path:t,submission:a}}let o=wr(t),i=cv(r.formData);return n&&o.search&&Pp(o.search)&&i.append("index",""),o.search="?"+i,{path:El(o),submission:a}}function Nk(e,n){let t=e;if(n){let r=e.findIndex(a=>a.route.id===n);r>=0&&(t=e.slice(0,r))}return t}function Y2(e,n,t,r,a,o,i,s,u,p,m,y,C){let E=C?Object.values(C)[0]:y?Object.values(y)[0]:void 0,N=e.createURL(n.location),S=e.createURL(a),M=C?Object.keys(C)[0]:void 0,g=Nk(t,M).filter((v,L)=>{if(v.route.lazy)return!0;if(v.route.loader==null)return!1;if(Ek(n.loaderData,n.matches[L],v)||i.some(O=>O===v.route.id))return!0;let T=n.matches[L],A=v;return Z2(v,Pe({currentUrl:N,currentParams:T.params,nextUrl:S,nextParams:A.params},r,{actionResult:E,defaultShouldRevalidate:o||N.pathname+N.search===S.pathname+S.search||N.search!==S.search||dv(T,A)}))}),b=[];return u.forEach((v,L)=>{if(!t.some(z=>z.route.id===v.routeId))return;let T=va(p,v.path,m);if(!T){b.push({key:L,routeId:v.routeId,path:v.path,matches:null,match:null,controller:null});return}let A=nh(T,v.path);if(s.includes(L)){b.push({key:L,routeId:v.routeId,path:v.path,matches:T,match:A,controller:new AbortController});return}Z2(A,Pe({currentUrl:N,currentParams:n.matches[n.matches.length-1].params,nextUrl:S,nextParams:t[t.length-1].params},r,{actionResult:E,defaultShouldRevalidate:o}))&&b.push({key:L,routeId:v.routeId,path:v.path,matches:T,match:A,controller:new AbortController})}),[g,b]}function Ek(e,n,t){let r=!n||t.route.id!==n.route.id,a=e[t.route.id]===void 0;return r||a}function dv(e,n){let t=e.route.path;return e.pathname!==n.pathname||t!=null&&t.endsWith("*")&&e.params["*"]!==n.params["*"]}function Z2(e,n){if(e.route.shouldRevalidate){let t=e.route.shouldRevalidate(n);if(typeof t=="boolean")return t}return n.defaultShouldRevalidate}async function q2(e,n,t){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let a=t[e.id];Te(a,"No route found in manifest");let o={};for(let i in r){let u=a[i]!==void 0&&i!=="hasErrorBoundary";Pa(!u,'Route "'+a.id+'" has a static property "'+i+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+i+'" will be ignored.')),!u&&!JS.has(i)&&(o[i]=r[i])}Object.assign(a,o),Object.assign(a,Pe({},n(a),{lazy:void 0}))}async function vo(e,n,t,r,a,o,i,s,u,p){s===void 0&&(s=!1),u===void 0&&(u=!1);let m,y,C,E=M=>{let w,g=new Promise((b,v)=>w=v);return C=()=>w(),n.signal.addEventListener("abort",C),Promise.race([M({request:n,params:t.params,context:p}),g])};try{let M=t.route[e];if(t.route.lazy)if(M)y=(await Promise.all([E(M),q2(t.route,o,a)]))[0];else if(await q2(t.route,o,a),M=t.route[e],M)y=await E(M);else if(e==="action"){let w=new URL(n.url),g=w.pathname+w.search;throw At(405,{method:n.method,pathname:g,routeId:t.route.id})}else return{type:vn.data,data:void 0};else if(M)y=await E(M);else{let w=new URL(n.url),g=w.pathname+w.search;throw At(404,{pathname:g})}Te(y!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+t.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(M){m=vn.error,y=M}finally{C&&n.signal.removeEventListener("abort",C)}if(Pk(y)){let M=y.status;if(Sk.has(M)){let b=y.headers.get("Location");if(Te(b,"Redirects returned/thrown from loaders/actions must have a Location header"),!sv.test(b))b=eh(new URL(n.url),r.slice(0,r.indexOf(t)+1),i,!0,b);else if(!s){let v=new URL(n.url),L=b.startsWith("//")?new URL(v.protocol+b):new URL(b),T=za(L.pathname,i)!=null;L.origin===v.origin&&T&&(b=L.pathname+L.search+L.hash)}if(s)throw y.headers.set("Location",b),y;return{type:vn.redirect,status:M,location:b,revalidate:y.headers.get("X-Remix-Revalidate")!==null}}if(u)throw{type:m||vn.data,response:y};let w,g=y.headers.get("Content-Type");return g&&/\bapplication\/json\b/.test(g)?w=await y.json():w=await y.text(),m===vn.error?{type:m,error:new Rp(M,y.statusText,w),headers:y.headers}:{type:vn.data,data:w,statusCode:y.status,headers:y.headers}}if(m===vn.error)return{type:m,error:y};if(Rk(y)){var N,S;return{type:vn.deferred,deferredData:y,statusCode:(N=y.init)==null?void 0:N.status,headers:((S=y.init)==null?void 0:S.headers)&&new Headers(y.init.headers)}}return{type:vn.data,data:y}}function bo(e,n,t,r){let a=e.createURL(uv(n)).toString(),o={signal:t};if(r&&ir(r.formMethod)){let{formMethod:i,formEncType:s,formData:u}=r;o.method=i.toUpperCase(),o.body=s==="application/x-www-form-urlencoded"?cv(u):u}return new Request(a,o)}function cv(e){let n=new URLSearchParams;for(let[t,r]of e.entries())n.append(t,r instanceof File?r.name:r);return n}function Ik(e,n,t,r,a){let o={},i=null,s,u=!1,p={};return t.forEach((m,y)=>{let C=n[y].route.id;if(Te(!Ta(m),"Cannot handle redirect results in processLoaderData"),Do(m)){let E=ba(e,C),N=m.error;r&&(N=Object.values(r)[0],r=void 0),i=i||{},i[E.route.id]==null&&(i[E.route.id]=N),o[C]=void 0,u||(u=!0,s=ov(m.error)?m.error.status:500),m.headers&&(p[C]=m.headers)}else wl(m)?(a.set(C,m.deferredData),o[C]=m.deferredData.data):o[C]=m.data,m.statusCode!=null&&m.statusCode!==200&&!u&&(s=m.statusCode),m.headers&&(p[C]=m.headers)}),r&&(i=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:i,statusCode:s||200,loaderHeaders:p}}function Q2(e,n,t,r,a,o,i,s){let{loaderData:u,errors:p}=Ik(n,t,r,a,s);for(let m=0;m<o.length;m++){let{key:y,match:C,controller:E}=o[m];Te(i!==void 0&&i[m]!==void 0,"Did not find corresponding fetcher result");let N=i[m];if(!(E&&E.signal.aborted))if(Do(N)){let S=ba(e.matches,C==null?void 0:C.route.id);p&&p[S.route.id]||(p=Pe({},p,{[S.route.id]:N.error})),e.fetchers.delete(y)}else if(Ta(N))Te(!1,"Unhandled fetcher revalidation redirect");else if(wl(N))Te(!1,"Unhandled fetcher deferred data");else{let S={state:"idle",data:N.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(y,S)}}return{loaderData:u,errors:p}}function K2(e,n,t,r){let a=Pe({},n);for(let o of t){let i=o.route.id;if(n.hasOwnProperty(i)?n[i]!==void 0&&(a[i]=n[i]):e[i]!==void 0&&o.route.loader&&(a[i]=e[i]),r&&r.hasOwnProperty(i))break}return a}function ba(e,n){return(n?e.slice(0,e.findIndex(r=>r.route.id===n)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function X2(e){let n=e.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:n}],route:n}}function At(e,n){let{pathname:t,routeId:r,method:a,type:o}=n===void 0?{}:n,i="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(i="Bad Request",a&&t&&r?s="You made a "+a+' request to "'+t+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(s="defer() is not supported in actions")):e===403?(i="Forbidden",s='Route "'+r+'" does not match URL "'+t+'"'):e===404?(i="Not Found",s='No route matches URL "'+t+'"'):e===405&&(i="Method Not Allowed",a&&t&&r?s="You made a "+a.toUpperCase()+' request to "'+t+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":a&&(s='Invalid request method "'+a.toUpperCase()+'"')),new Rp(e||500,i,new Error(s),!0)}function J2(e){for(let n=e.length-1;n>=0;n--){let t=e[n];if(Ta(t))return t}}function uv(e){let n=typeof e=="string"?wr(e):e;return El(Pe({},n,{hash:""}))}function Mk(e,n){return e.pathname!==n.pathname||e.search!==n.search?!1:e.hash===""?n.hash!=="":e.hash===n.hash?!0:n.hash!==""}function wl(e){return e.type===vn.deferred}function Do(e){return e.type===vn.error}function Ta(e){return(e&&e.type)===vn.redirect}function Rk(e){let n=e;return n&&typeof n=="object"&&typeof n.data=="object"&&typeof n.subscribe=="function"&&typeof n.cancel=="function"&&typeof n.resolveData=="function"}function Pk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Ak(e){return Ck.has(e.toLowerCase())}function ir(e){return wk.has(e.toLowerCase())}async function e0(e,n,t,r,a,o){for(let i=0;i<t.length;i++){let s=t[i],u=n[i];if(!u)continue;let p=e.find(y=>y.route.id===u.route.id),m=p!=null&&!dv(p,u)&&(o&&o[u.route.id])!==void 0;if(wl(s)&&(a||m)){let y=r[i];Te(y,"Expected an AbortSignal for revalidating fetcher deferred result"),await hv(s,y,a).then(C=>{C&&(t[i]=C||t[i])})}}}async function hv(e,n,t){if(t===void 0&&(t=!1),!await e.deferredData.resolveData(n)){if(t)try{return{type:vn.data,data:e.deferredData.unwrappedData}}catch(a){return{type:vn.error,error:a}}return{type:vn.data,data:e.deferredData.data}}}function Pp(e){return new URLSearchParams(e).getAll("index").some(n=>n==="")}function n0(e,n){let{route:t,pathname:r,params:a}=e;return{id:t.id,pathname:r,params:a,data:n[t.id],handle:t.handle}}function nh(e,n){let t=typeof n=="string"?wr(n).search:n.search;if(e[e.length-1].route.index&&Pp(t||""))return e[e.length-1];let r=Id(e);return r[r.length-1]}/**
 * React Router v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function td(){return td=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},td.apply(this,arguments)}const Md=B.createContext(null),Ap=B.createContext(null),Fl=B.createContext(null),Rd=B.createContext(null),Xr=B.createContext({outlet:null,matches:[],isDataRoute:!1}),pv=B.createContext(null);function Fk(e,n){let{relative:t}=n===void 0?{}:n;wi()||Te(!1);let{basename:r,navigator:a}=B.useContext(Fl),{hash:o,pathname:i,search:s}=Fp(e,{relative:t}),u=i;return r!=="/"&&(u=i==="/"?r:hr([r,i])),a.createHref({pathname:u,search:s,hash:o})}function wi(){return B.useContext(Rd)!=null}function Ua(){return wi()||Te(!1),B.useContext(Rd).location}function fv(e){B.useContext(Fl).static||B.useLayoutEffect(e)}function Ok(){let{isDataRoute:e}=B.useContext(Xr);return e?Kk():Dk()}function Dk(){wi()||Te(!1);let e=B.useContext(Md),{basename:n,navigator:t}=B.useContext(Fl),{matches:r}=B.useContext(Xr),{pathname:a}=Ua(),o=JSON.stringify(Id(r).map(u=>u.pathnameBase)),i=B.useRef(!1);return fv(()=>{i.current=!0}),B.useCallback(function(u,p){if(p===void 0&&(p={}),!i.current)return;if(typeof u=="number"){t.go(u);return}let m=Mp(u,JSON.parse(o),a,p.relative==="path");e==null&&n!=="/"&&(m.pathname=m.pathname==="/"?n:hr([n,m.pathname])),(p.replace?t.replace:t.push)(m,p.state,p)},[n,t,o,a,e])}const Bk=B.createContext(null);function jk(e){let n=B.useContext(Xr).outlet;return n&&B.createElement(Bk.Provider,{value:e},n)}function Fp(e,n){let{relative:t}=n===void 0?{}:n,{matches:r}=B.useContext(Xr),{pathname:a}=Ua(),o=JSON.stringify(Id(r).map(i=>i.pathnameBase));return B.useMemo(()=>Mp(e,JSON.parse(o),a,t==="path"),[e,o,a,t])}function zk(e,n,t){wi()||Te(!1);let{navigator:r}=B.useContext(Fl),{matches:a}=B.useContext(Xr),o=a[a.length-1],i=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=Ua(),p;if(n){var m;let S=typeof n=="string"?wr(n):n;s==="/"||(m=S.pathname)!=null&&m.startsWith(s)||Te(!1),p=S}else p=u;let y=p.pathname||"/",C=s==="/"?y:y.slice(s.length)||"/",E=va(e,{pathname:C}),N=Gk(E&&E.map(S=>Object.assign({},S,{params:Object.assign({},i,S.params),pathname:hr([s,r.encodeLocation?r.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?s:hr([s,r.encodeLocation?r.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),a,t);return n&&N?B.createElement(Rd.Provider,{value:{location:td({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:un.Pop}},N):N}function Uk(){let e=Qk(),n=ov(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},n),t?B.createElement("pre",{style:a},t):null,o)}const Hk=B.createElement(Uk,null);class Wk extends B.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error||t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error?B.createElement(Xr.Provider,{value:this.props.routeContext},B.createElement(pv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Vk(e){let{routeContext:n,match:t,children:r}=e,a=B.useContext(Md);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),B.createElement(Xr.Provider,{value:n},r)}function Gk(e,n,t){var r;if(n===void 0&&(n=[]),t===void 0&&(t=null),e==null){var a;if((a=t)!=null&&a.errors)e=t.matches;else return null}let o=e,i=(r=t)==null?void 0:r.errors;if(i!=null){let s=o.findIndex(u=>u.route.id&&(i==null?void 0:i[u.route.id]));s>=0||Te(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,u,p)=>{let m=u.route.id?i==null?void 0:i[u.route.id]:null,y=null;t&&(y=u.route.errorElement||Hk);let C=n.concat(o.slice(0,p+1)),E=()=>{let N;return m?N=y:u.route.Component?N=B.createElement(u.route.Component,null):u.route.element?N=u.route.element:N=s,B.createElement(Vk,{match:u,routeContext:{outlet:s,matches:C,isDataRoute:t!=null},children:N})};return t&&(u.route.ErrorBoundary||u.route.errorElement||p===0)?B.createElement(Wk,{location:t.location,revalidation:t.revalidation,component:y,error:m,children:E(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):E()},null)}var th;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(th||(th={}));var ii;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(ii||(ii={}));function Yk(e){let n=B.useContext(Md);return n||Te(!1),n}function Zk(e){let n=B.useContext(Ap);return n||Te(!1),n}function qk(e){let n=B.useContext(Xr);return n||Te(!1),n}function gv(e){let n=qk(),t=n.matches[n.matches.length-1];return t.route.id||Te(!1),t.route.id}function Qk(){var e;let n=B.useContext(pv),t=Zk(ii.UseRouteError),r=gv(ii.UseRouteError);return n||((e=t.errors)==null?void 0:e[r])}function Kk(){let{router:e}=Yk(th.UseNavigateStable),n=gv(ii.UseNavigateStable),t=B.useRef(!1);return fv(()=>{t.current=!0}),B.useCallback(function(a,o){o===void 0&&(o={}),t.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,td({fromRouteId:n},o)))},[e,n])}const t0="startTransition";function Xk(e){let{fallbackElement:n,router:t}=e,[r,a]=B.useState(t.state),o=B.useCallback(p=>{t0 in m1?m1[t0](()=>a(p)):a(p)},[a]);B.useLayoutEffect(()=>t.subscribe(o),[t,o]);let i=B.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:p=>t.navigate(p),push:(p,m,y)=>t.navigate(p,{state:m,preventScrollReset:y==null?void 0:y.preventScrollReset}),replace:(p,m,y)=>t.navigate(p,{replace:!0,state:m,preventScrollReset:y==null?void 0:y.preventScrollReset})}),[t]),s=t.basename||"/",u=B.useMemo(()=>({router:t,navigator:i,static:!1,basename:s}),[t,i,s]);return B.createElement(B.Fragment,null,B.createElement(Md.Provider,{value:u},B.createElement(Ap.Provider,{value:r},B.createElement(nT,{basename:s,location:r.location,navigationType:r.historyAction,navigator:i},r.initialized?B.createElement(Jk,{routes:t.routes,state:r}):n))),null)}function Jk(e){let{routes:n,state:t}=e;return zk(n,void 0,t)}function eT(e){return jk(e.context)}function nT(e){let{basename:n="/",children:t=null,location:r,navigationType:a=un.Pop,navigator:o,static:i=!1}=e;wi()&&Te(!1);let s=n.replace(/^\/*/,"/"),u=B.useMemo(()=>({basename:s,navigator:o,static:i}),[s,o,i]);typeof r=="string"&&(r=wr(r));let{pathname:p="/",search:m="",hash:y="",state:C=null,key:E="default"}=r,N=B.useMemo(()=>{let S=za(p,s);return S==null?null:{location:{pathname:S,search:m,hash:y,state:C,key:E},navigationType:a}},[s,p,m,y,C,E,a]);return N==null?null:B.createElement(Fl.Provider,{value:u},B.createElement(Rd.Provider,{children:t,value:N}))}var r0;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(r0||(r0={}));new Promise(()=>{});function tT(e){let n={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(n,{element:B.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(n,{errorElement:B.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),n}/**
 * React Router DOM v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Aa(){return Aa=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Aa.apply(this,arguments)}function mv(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function rT(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function lT(e,n){return e.button===0&&(!n||n==="_self")&&!rT(e)}const aT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],oT=["aria-current","caseSensitive","className","end","style","to","children"];function iT(e,n){return Lk({basename:n==null?void 0:n.basename,future:Aa({},n==null?void 0:n.future,{v7_prependBasename:!0}),history:QS({window:n==null?void 0:n.window}),hydrationData:(n==null?void 0:n.hydrationData)||sT(),routes:e,mapRouteProperties:tT}).initialize()}function sT(){var e;let n=(e=window)==null?void 0:e.__staticRouterHydrationData;return n&&n.errors&&(n=Aa({},n,{errors:dT(n.errors)})),n}function dT(e){if(!e)return null;let n=Object.entries(e),t={};for(let[r,a]of n)if(a&&a.__type==="RouteErrorResponse")t[r]=new Rp(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){let o=new Error(a.message);o.stack="",t[r]=o}else t[r]=a;return t}const cT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hT=B.forwardRef(function(n,t){let{onClick:r,relative:a,reloadDocument:o,replace:i,state:s,target:u,to:p,preventScrollReset:m}=n,y=mv(n,aT),{basename:C}=B.useContext(Fl),E,N=!1;if(typeof p=="string"&&uT.test(p)&&(E=p,cT))try{let g=new URL(window.location.href),b=p.startsWith("//")?new URL(g.protocol+p):new URL(p),v=za(b.pathname,C);b.origin===g.origin&&v!=null?p=v+b.search+b.hash:N=!0}catch{}let S=Fk(p,{relative:a}),M=fT(p,{replace:i,state:s,target:u,preventScrollReset:m,relative:a});function w(g){r&&r(g),g.defaultPrevented||M(g)}return B.createElement("a",Aa({},y,{href:E||S,onClick:N||o?r:w,ref:t,target:u}))}),pT=B.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:a=!1,className:o="",end:i=!1,style:s,to:u,children:p}=n,m=mv(n,oT),y=Fp(u,{relative:m.relative}),C=Ua(),E=B.useContext(Ap),{navigator:N}=B.useContext(Fl),S=N.encodeLocation?N.encodeLocation(y).pathname:y.pathname,M=C.pathname,w=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;a||(M=M.toLowerCase(),w=w?w.toLowerCase():null,S=S.toLowerCase());let g=M===S||!i&&M.startsWith(S)&&M.charAt(S.length)==="/",b=w!=null&&(w===S||!i&&w.startsWith(S)&&w.charAt(S.length)==="/"),v=g?r:void 0,L;typeof o=="function"?L=o({isActive:g,isPending:b}):L=[o,g?"active":null,b?"pending":null].filter(Boolean).join(" ");let T=typeof s=="function"?s({isActive:g,isPending:b}):s;return B.createElement(hT,Aa({},m,{"aria-current":v,className:L,ref:t,style:T,to:u}),typeof p=="function"?p({isActive:g,isPending:b}):p)});var l0;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(l0||(l0={}));var a0;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(a0||(a0={}));function fT(e,n){let{target:t,replace:r,state:a,preventScrollReset:o,relative:i}=n===void 0?{}:n,s=Ok(),u=Ua(),p=Fp(e,{relative:i});return B.useCallback(m=>{if(lT(m,t)){m.preventDefault();let y=r!==void 0?r:El(u)===El(p);s(e,{replace:y,state:a,preventScrollReset:o,relative:i})}},[u,s,p,r,a,t,e,o,i])}const oe=({to:e,className:n="",exact:t,children:r,text:a,onClick:o,label:i,style:s})=>l(pT,{to:e,onClick:o,end:t&&"end",className:({isActive:u})=>`${n} ${u?"active":""}`,"aria-label":i,style:s,children:r||a}),gT=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Brand Colours"}),l("p",{children:"The palette is designed to be adjustable so that you can match it to your brand colors."}),l("h2",{children:"Brand Hue and Color"}),l(qt,{code:GS,caption:"Brand Color",language:"scss",expand:!0,children:d("p",{children:["You should pick a color that is closest to your brand color and adjust the hue to match it if necessary.  Then define that as the"," ",l("code",{children:"$brand-hue"})," and set the ",l("code",{children:"$brand-color"})," by name."]})}),l("h2",{children:"Multiple Brand Colors"}),l(qt,{code:YS,caption:"Brand Colors",language:"scss",expand:!0,children:d("p",{children:["If you have multiple brand colors you can set them using the"," ",l("code",{children:"$brand-colors"})," variable.  You can call them whatever you like (we're using ",l("code",{children:"primary"}),", ",l("code",{children:"secondary"})," ","and ",l("code",{children:"tertiary"})," in this example). You should define one to be the primary ",l("code",{children:"$brand-color"})," and set the ",l("code",{children:"$brand-hue"})]})}),l("h2",{children:"Greyscale Colors"}),d(qt,{code:ZS,caption:"Greyscale Colors",language:"scss",expand:!0,children:[d("p",{children:["An important side-effect of setting ",l("code",{children:"$brand-hue"})," is that it will set the hue of the greyscale color ranges to match it."]}),d("p",{children:["If you want to use different hues for the greyscale color ranges then you can do that using the ",l("code",{children:"$grey-hue"}),","," ",l("code",{children:"$grey20-hue"})," and ",l("code",{children:"$grey40-hue"})," variables."]})]}),l("h2",{children:"Culling the Palette"}),d(qt,{code:qS,caption:"Selecting Colors",language:"scss",expand:!0,children:[l("p",{children:"The chances are that you aren't going to need all of the colors defined in the standard palette.  You can reduce the size of the generated CSS file by excluding any that you don't need."}),d("p",{children:["Set the ",l("code",{children:"$color-names"})," variable to list those that you want to keep.  Note that ",l("code",{children:"red"}),", ",l("code",{children:"orange"}),","," ",l("code",{children:"green"}),", ",l("code",{children:"blue"})," and ",l("code",{children:"grey"})," are used by various components, including ",l(oe,{to:"/forms/",text:"forms"})," and"," ",l(oe,{to:"/components/alerts",text:"alerts"})," so you'll probably want to keep those."]})]})]}),mT=Object.freeze(Object.defineProperty({__proto__:null,default:gT},Symbol.toStringTag,{value:"Module"})),vT={bars:"M0 96C0 78 14 64 32 64H416c18 0 32 14 32 32s-14 32-32 32H32C14 128 0 114 0 96zM0 256c0-18 14-32 32-32H416c18 0 32 14 32 32s-14 32-32 32H32c-18 0-32-14-32-32zM448 416c0 18-14 32-32 32H32c-18 0-32-14-32-32s14-32 32-32H416c18 0 32 14 32 32z",check:"M486,91C499,104 499,127 486,140L212,422C198,435 177,435 163,422L26,281C13,267 13,245 26,231C39,217 61,217 75,231L187,347L438,91C451,77 473,77 486,91L486,91Z",cross:"M456,109C470,94 470,71 456,56C441,42 418,42 403,56L256,204L109,56C94,42 71,42 56,56C42,71 42,94 56,109L204,256L56,403C42,418 42,441 56,456C71,470 94,470 109,456L256,308L403,456C418,470 441,470 456,456C470,441 470,418 456,403L308,256L456,109Z",github:"M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z",info:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13 0-24-11-24-24s11-24 24-24h48c13 0 24 11 24 24v88h8c13 0 24 11 24 24s-11 24-24 24H216c-13 0-24-11-24-24s11-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",lock:"M159,133L159,226L301,226L301,133C301,94 269,62 230,62C191,62 159,94 159,133ZM101,226L101,133C101,62 159,4 230,4C301,4 359,62 359,133L359,226L373,226C404,226 430,252 430,283L430,455C430,486 404,512 373,512L87,512C56,512 30,486 30,455L30,283C30,252 56,226 87,226L101,226Z",pen:"M356,34L311,79L433,201L478,156C502,132 502,94 478,71L441,34C418,10 380,10 356,34L356,34ZM290,100L71,319C61,329 54,341 50,355L16,468C14,476 16,484 22,490C28,496 36,498 44,496L157,462C171,458 183,451 192,442L412,222L290,100Z",plus:"M292,56C292,36 276,20 256,20C236,20 220,36 220,56L220,220L56,220C36,220 20,236 20,256C20,276 36,292 56,292L220,292L220,456C220,476 236,492 256,492C276,492 292,476 292,456L292,292L456,292C476,292 492,276 492,256C492,236 476,220 456,220L292,220L292,56Z",trash:"M173,33L166,46L76,46C59,46 46,59 46,76C46,93 59,106 76,106L436,106C453,106 466,93 466,76C466,59 453,46 436,46L346,46L339,33C334,22 324,16 312,16L200,16C188,16 178,22 173,33ZM436,136L76,136L96,454C97,478 117,496 141,496L371,496C395,496 415,478 416,454L436,136Z",undo:"M168,224L40,224C27,224 16,213 16,200L16,72C16,62 22,54 31,50C40,46 50,48 57,55L99,97C186,10 327,10 414,98C502,185 502,327 414,414C327,502 185,502 98,414C85,402 85,382 98,369C110,357 130,357 143,369C205,432 307,432 369,369C432,307 432,205 369,143C307,81 207,80 144,142L185,183C192,190 194,200 190,209C187,218 178,224 168,224Z",unlock:"M313,131C313,92 345,60 384,60C423,60 455,92 455,131L455,174C455,190 468,203 484,203C499,203 512,190 512,174L512,131C512,61 455,3 384,3C313,3 256,61 256,131L256,227L57,227C26,227 0,253 0,284L0,455C0,486 26,512 57,512L341,512C373,512 398,486 398,455L398,284C398,253 373,227 341,227L313,227L313,131Z",checked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083ZM88.43,298.82C75.421,285.811 75.421,264.689 88.43,251.68C101.439,238.671 122.561,238.671 135.57,251.68L202,318.11L376.43,143.68C389.439,130.671 410.561,130.671 423.57,143.68C436.579,156.689 436.579,177.811 423.57,190.82L225.57,388.82C212.553,401.838 191.447,401.838 178.43,388.82L88.43,298.82Z",unchecked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083Z"},bT=e=>{const n=vT[e]||zS(`Invalid icon name: ${e}`);return tv(n)?{path:n,width:512,height:512}:n},o0=({path:e,onClick:n,width:t=512,height:r=512,style:a,className:o="",fill:i="currentColor"})=>l("svg",{"aria-hidden":"true",focusable:"false",className:`${o} icon`,style:a,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${t} ${r}`,onClick:n,children:l("path",{d:e,fill:i})}),Fa=({name:e,...n})=>e?l(o0,{...n,...bT(e)}):l(o0,{...n}),Ol=({color:e,selected:n,select:t,iconColor:r="white",className:a="",alt:o=l(Rt,{children:" "})})=>l("button",{className:`${a} ${e} icon ${n?"focus":""}`,onClick:t,children:n?l(Fa,{name:"check",className:r}):o}),yT="Badger CSS",wT="Badger CSS palette",xT="badger-css",CT="",ST={red:{name:"Red",hue:0,stops:{0:{h:0,s:65,l:5,hex:"#150404"},5:{h:0,s:66,l:8,hex:"#220707"},10:{h:0,s:68,l:11,hex:"#2f0909"},15:{h:0,s:69,l:15,hex:"#410c0c"},20:{h:0,s:70,l:18,hex:"#4e0e0e"},25:{h:0,s:71,l:22,hex:"#601010"},30:{h:0,s:72,l:27,hex:"#761313"},35:{h:0,s:73,l:31,hex:"#891515"},40:{h:0,s:73,l:36,hex:"#9f1919"},45:{h:0,s:74,l:42,hex:"#ba1c1c"},50:{h:0,s:74,l:48,hex:"#d52020"},55:{h:0,s:74,l:55,hex:"#e13737"},60:{h:0,s:75,l:62,hex:"#e75555"},65:{h:0,s:75,l:68,hex:"#eb7070"},70:{h:0,s:74,l:74,hex:"#ee8c8c"},75:{h:0,s:74,l:80,hex:"#f2a6a6"},80:{h:0,s:74,l:84,hex:"#f4b8b8"},85:{h:0,s:73,l:88,hex:"#f7caca"},90:{h:0,s:73,l:92,hex:"#f9dcdc"},95:{h:0,s:72,l:95,hex:"#fbe9e9"},100:{h:0,s:71,l:98,hex:"#fef6f6"}},curves:{h:{min:0,max:0,minControl:{x:30,y:0},maxControl:{x:70,y:0}},s:{min:65,max:71,minControl:{x:31,y:74},maxControl:{x:63,y:78}},l:{min:5,max:98,minControl:{x:62,y:42},maxControl:{x:53,y:72}}},uri:"red"},brown:{name:"Brown",hue:14,stops:{0:{h:10,s:52,l:5,hex:"#130806"},5:{h:11,s:53,l:8,hex:"#1f0e0a"},10:{h:11,s:54,l:11,hex:"#2b120d"},15:{h:12,s:54,l:14,hex:"#371810"},20:{h:13,s:55,l:17,hex:"#431e14"},25:{h:13,s:56,l:20,hex:"#502316"},30:{h:13,s:56,l:24,hex:"#5f2a1b"},35:{h:14,s:56,l:28,hex:"#6f321f"},40:{h:14,s:57,l:32,hex:"#803923"},45:{h:14,s:57,l:37,hex:"#944229"},50:{h:14,s:57,l:42,hex:"#a84b2e"},55:{h:14,s:58,l:47,hex:"#bd5332"},60:{h:14,s:58,l:53,hex:"#cd6242"},65:{h:15,s:58,l:60,hex:"#d47b5e"},70:{h:15,s:58,l:67,hex:"#dc927a"},75:{h:15,s:58,l:75,hex:"#e4ad9a"},80:{h:14,s:58,l:81,hex:"#ebc0b2"},85:{h:14,s:58,l:87,hex:"#f1d4cb"},90:{h:14,s:58,l:92,hex:"#f6e4df"},95:{h:14,s:57,l:95,hex:"#faeeeb"},100:{h:14,s:57,l:98,hex:"#fdf8f7"}},curves:{h:{min:10,max:14,minControl:{x:30,y:15},maxControl:{x:70,y:15}},s:{min:52,max:57,minControl:{x:35,y:58},maxControl:{x:66,y:59}},l:{min:5,max:98,minControl:{x:72,y:43},maxControl:{x:67,y:82}}},uri:"brown"},orange:{name:"Orange",hue:26,stops:{0:{h:27,s:93,l:5,hex:"#190c01"},5:{h:27,s:94,l:8,hex:"#281201"},10:{h:26,s:94,l:11,hex:"#361902"},15:{h:26,s:95,l:14,hex:"#461f02"},20:{h:26,s:96,l:18,hex:"#5a2802"},25:{h:26,s:96,l:21,hex:"#692f02"},30:{h:26,s:96,l:25,hex:"#7d3803"},35:{h:26,s:97,l:30,hex:"#974302"},40:{h:26,s:97,l:35,hex:"#b04e03"},45:{h:26,s:97,l:40,hex:"#c95903"},50:{h:26,s:97,l:46,hex:"#e76604"},55:{h:26,s:96,l:52,hex:"#fa750f"},60:{h:26,s:96,l:59,hex:"#fb8932"},65:{h:26,s:95,l:65,hex:"#fb9a51"},70:{h:27,s:94,l:72,hex:"#fbb174"},75:{h:27,s:93,l:78,hex:"#fbc293"},80:{h:28,s:92,l:83,hex:"#fcd1ac"},85:{h:28,s:91,l:88,hex:"#fcdfc5"},90:{h:29,s:90,l:91,hex:"#fde7d3"},95:{h:30,s:88,l:95,hex:"#fdf2e7"},100:{h:32,s:87,l:97,hex:"#fef8f1"}},curves:{h:{min:27,max:32,minControl:{x:30,y:25},maxControl:{x:77,y:24}},s:{min:93,max:87,minControl:{x:46,y:100},maxControl:{x:64,y:97}},l:{min:5,max:97,minControl:{x:62,y:39},maxControl:{x:62,y:80}}},uri:"orange"},yellow:{name:"Yellow",hue:41,stops:{0:{h:30,s:90,l:5,hex:"#180d01"},5:{h:31,s:91,l:8,hex:"#271502"},10:{h:33,s:92,l:10,hex:"#311c02"},15:{h:34,s:93,l:13,hex:"#402502"},20:{h:35,s:94,l:17,hex:"#543203"},25:{h:36,s:95,l:20,hex:"#633d03"},30:{h:37,s:96,l:24,hex:"#784b02"},35:{h:38,s:96,l:28,hex:"#8c5a03"},40:{h:39,s:97,l:33,hex:"#a66d03"},45:{h:40,s:97,l:38,hex:"#bf8003"},50:{h:41,s:97,l:43,hex:"#d89503"},55:{h:41,s:96,l:48,hex:"#f0a505"},60:{h:42,s:95,l:54,hex:"#f9b61a"},65:{h:43,s:94,l:60,hex:"#f9c339"},70:{h:43,s:93,l:66,hex:"#f9cb58"},75:{h:44,s:92,l:72,hex:"#f9d676"},80:{h:44,s:90,l:77,hex:"#f9dd90"},85:{h:44,s:88,l:82,hex:"#f9e4a9"},90:{h:45,s:86,l:87,hex:"#faecc1"},95:{h:45,s:84,l:92,hex:"#fcf3d9"},100:{h:45,s:82,l:96,hex:"#fdf9ec"}},curves:{h:{min:30,max:45,minControl:{x:28,y:38},maxControl:{x:70,y:45}},s:{min:90,max:82,minControl:{x:44,y:100},maxControl:{x:58,y:100}},l:{min:5,max:96,minControl:{x:52,y:31},maxControl:{x:64,y:67}}},uri:"yellow"},olive:{name:"Olive",hue:68,stops:{0:{h:72,s:66,l:4,hex:"#0e1103"},5:{h:72,s:68,l:6,hex:"#161a05"},10:{h:71,s:70,l:9,hex:"#212707"},15:{h:71,s:72,l:12,hex:"#2d3509"},20:{h:70,s:73,l:15,hex:"#39420a"},25:{h:70,s:74,l:18,hex:"#45500c"},30:{h:69,s:74,l:21,hex:"#515d0e"},35:{h:69,s:74,l:25,hex:"#616f11"},40:{h:69,s:73,l:29,hex:"#708014"},45:{h:68,s:70,l:33,hex:"#7f8f19"},50:{h:68,s:66,l:37,hex:"#8c9d20"},55:{h:67,s:60,l:43,hex:"#a0af2c"},60:{h:67,s:55,l:48,hex:"#aebe37"},65:{h:66,s:52,l:54,hex:"#bac74d"},70:{h:66,s:50,l:61,hex:"#c3cd6a"},75:{h:65,s:49,l:68,hex:"#cfd585"},80:{h:65,s:48,l:75,hex:"#d9dea1"},85:{h:65,s:49,l:82,hex:"#e4e8bb"},90:{h:64,s:49,l:87,hex:"#eceece"},95:{h:64,s:51,l:93,hex:"#f5f6e4"},100:{h:64,s:52,l:97,hex:"#fbfbf3"}},curves:{h:{min:72,max:64,minControl:{x:30,y:70},maxControl:{x:69,y:65}},s:{min:66,max:52,minControl:{x:69,y:96},maxControl:{x:37,y:33}},l:{min:4,max:97,minControl:{x:67,y:35},maxControl:{x:72,y:75}}},uri:"olive"},green:{name:"Green",hue:117,stops:{0:{h:117,s:45,l:5,hex:"#081207"},5:{h:117,s:48,l:8,hex:"#0c1e0b"},10:{h:117,s:50,l:11,hex:"#0f2a0e"},15:{h:117,s:52,l:14,hex:"#133611"},20:{h:117,s:53,l:17,hex:"#174214"},25:{h:117,s:54,l:21,hex:"#1c5219"},30:{h:117,s:55,l:25,hex:"#20631d"},35:{h:117,s:55,l:29,hex:"#257321"},40:{h:117,s:55,l:33,hex:"#2a8226"},45:{h:117,s:54,l:38,hex:"#32952d"},50:{h:117,s:54,l:43,hex:"#38a932"},55:{h:117,s:53,l:48,hex:"#40bb3a"},60:{h:117,s:52,l:54,hex:"#53c74d"},65:{h:117,s:51,l:60,hex:"#6acd65"},70:{h:117,s:50,l:66,hex:"#81d47d"},75:{h:117,s:48,l:73,hex:"#9cdb99"},80:{h:117,s:47,l:79,hex:"#b3e3b0"},85:{h:117,s:46,l:85,hex:"#c9eac7"},90:{h:118,s:45,l:90,hex:"#dbf1da"},95:{h:118,s:44,l:94,hex:"#e9f6e9"},100:{h:118,s:43,l:98,hex:"#f8fcf8"}},curves:{h:{min:117,max:118,minControl:{x:30,y:118},maxControl:{x:57,y:116}},s:{min:45,max:43,minControl:{x:34,y:65},maxControl:{x:64,y:49}},l:{min:5,max:98,minControl:{x:61,y:38},maxControl:{x:72,y:79}}},uri:"green"},teal:{name:"Teal",hue:165,stops:{0:{h:165,s:52,l:5,hex:"#061310"},5:{h:165,s:56,l:7,hex:"#081c17"},10:{h:165,s:59,l:10,hex:"#0a2921"},15:{h:165,s:61,l:13,hex:"#0d352b"},20:{h:165,s:62,l:15,hex:"#0f3e32"},25:{h:165,s:63,l:18,hex:"#114b3c"},30:{h:165,s:63,l:21,hex:"#145746"},35:{h:165,s:63,l:25,hex:"#186854"},40:{h:165,s:62,l:29,hex:"#1c7861"},45:{h:165,s:60,l:33,hex:"#22876d"},50:{h:165,s:59,l:37,hex:"#27967a"},55:{h:165,s:58,l:42,hex:"#2da98a"},60:{h:165,s:57,l:47,hex:"#34bc9a"},65:{h:165,s:56,l:53,hex:"#44caa9"},70:{h:165,s:55,l:60,hex:"#61d1b5"},75:{h:165,s:54,l:67,hex:"#7dd8c2"},80:{h:165,s:54,l:75,hex:"#9de2d0"},85:{h:165,s:55,l:81,hex:"#b4e9dc"},90:{h:165,s:55,l:88,hex:"#d0f1e9"},95:{h:165,s:57,l:93,hex:"#e3f7f2"},100:{h:165,s:58,l:98,hex:"#f7fdfb"}},curves:{h:{min:165,max:165,minControl:{x:30,y:165},maxControl:{x:70,y:165}},s:{min:52,max:58,minControl:{x:34,y:81},maxControl:{x:55,y:43}},l:{min:5,max:98,minControl:{x:71,y:38},maxControl:{x:68,y:69}}},uri:"teal"},blue:{name:"Blue",hue:206,stops:{0:{h:210,s:72,l:5,hex:"#040d16"},5:{h:210,s:74,l:8,hex:"#051423"},10:{h:209,s:75,l:11,hex:"#071d31"},15:{h:209,s:77,l:15,hex:"#092744"},20:{h:209,s:78,l:18,hex:"#0a2f52"},25:{h:208,s:79,l:22,hex:"#0c3b64"},30:{h:208,s:80,l:26,hex:"#0d4677"},35:{h:207,s:81,l:31,hex:"#0f558f"},40:{h:207,s:82,l:35,hex:"#1061a2"},45:{h:207,s:83,l:41,hex:"#1271bf"},50:{h:206,s:84,l:46,hex:"#1382d8"},55:{h:206,s:84,l:52,hex:"#1e92eb"},60:{h:205,s:85,l:58,hex:"#39a3ef"},65:{h:205,s:85,l:65,hex:"#5ab2f2"},70:{h:205,s:85,l:71,hex:"#76c0f4"},75:{h:205,s:85,l:77,hex:"#92cdf6"},80:{h:204,s:84,l:82,hex:"#abd9f8"},85:{h:204,s:84,l:87,hex:"#c2e3fa"},90:{h:204,s:83,l:91,hex:"#d5ecfb"},95:{h:204,s:82,l:95,hex:"#e8f4fd"},100:{h:204,s:81,l:98,hex:"#f6fbfe"}},curves:{h:{min:210,max:204,minControl:{x:42,y:207},maxControl:{x:70,y:204}},s:{min:72,max:81,minControl:{x:43,y:86},maxControl:{x:69,y:88}},l:{min:5,max:98,minControl:{x:61,y:41},maxControl:{x:64,y:78}}},uri:"blue"},indigo:{name:"Indigo",hue:236,stops:{0:{h:234,s:50,l:7,hex:"#090b1b"},5:{h:234,s:52,l:11,hex:"#0d102b"},10:{h:235,s:54,l:16,hex:"#13163f"},15:{h:235,s:56,l:21,hex:"#181d54"},20:{h:235,s:58,l:27,hex:"#1d246d"},25:{h:235,s:61,l:32,hex:"#202883"},30:{h:236,s:64,l:38,hex:"#232b9f"},35:{h:236,s:67,l:44,hex:"#252fbb"},40:{h:236,s:71,l:50,hex:"#2531da"},45:{h:236,s:75,l:56,hex:"#3b46e3"},50:{h:236,s:78,l:62,hex:"#535dea"},55:{h:236,s:81,l:67,hex:"#6770ef"},60:{h:236,s:82,l:72,hex:"#7d85f2"},65:{h:235,s:82,l:77,hex:"#949cf4"},70:{h:235,s:82,l:81,hex:"#a7adf6"},75:{h:235,s:81,l:85,hex:"#babff8"},80:{h:235,s:79,l:89,hex:"#cdd0f9"},85:{h:235,s:77,l:92,hex:"#dbdefa"},90:{h:235,s:75,l:94,hex:"#e4e6fb"},95:{h:235,s:72,l:97,hex:"#f2f3fd"},100:{h:235,s:70,l:99,hex:"#fbfbfe"}},curves:{h:{min:234,max:235,minControl:{x:30,y:237},maxControl:{x:70,y:235}},s:{min:50,max:70,minControl:{x:60,y:69},maxControl:{x:40,y:100}},l:{min:7,max:99,minControl:{x:39,y:40},maxControl:{x:53,y:80}}},uri:"indigo"},violet:{name:"Violet",uri:"violet",hue:259,stops:{0:{h:271,s:53,l:8,hex:"#150a1f"},5:{h:269,s:53,l:12,hex:"#1e0e2f"},10:{h:268,s:54,l:16,hex:"#27133f"},15:{h:266,s:55,l:21,hex:"#321853"},20:{h:265,s:56,l:26,hex:"#3c1d67"},25:{h:264,s:57,l:31,hex:"#46227c"},30:{h:263,s:59,l:36,hex:"#4f2692"},35:{h:262,s:62,l:42,hex:"#5929ae"},40:{h:261,s:66,l:48,hex:"#622acb"},45:{h:260,s:71,l:53,hex:"#6b32dc"},50:{h:259,s:76,l:59,hex:"#7947e6"},55:{h:258,s:79,l:65,hex:"#8a5fec"},60:{h:258,s:81,l:71,hex:"#9d79f1"},65:{h:257,s:82,l:76,hex:"#ac90f4"},70:{h:257,s:82,l:80,hex:"#baa2f6"},75:{h:256,s:82,l:85,hex:"#cab9f8"},80:{h:256,s:81,l:88,hex:"#d5c8f9"},85:{h:255,s:80,l:92,hex:"#e2dafb"},90:{h:255,s:79,l:94,hex:"#eae4fc"},95:{h:255,s:78,l:97,hex:"#f4f1fd"},100:{h:255,s:77,l:99,hex:"#fbfafe"}},curves:{h:{min:271,max:255,minControl:{x:33,y:260},maxControl:{x:70,y:255}},s:{min:53,max:77,minControl:{x:68,y:57},maxControl:{x:26,y:96}},l:{min:8,max:99,minControl:{x:45,y:43},maxControl:{x:58,y:83}}}},purple:{name:"Purple",hue:284,stops:{0:{h:294,s:47,l:6,hex:"#150816"},5:{h:293,s:50,l:8,hex:"#1c0a1f"},10:{h:292,s:53,l:11,hex:"#270d2b"},15:{h:290,s:56,l:14,hex:"#311038"},20:{h:289,s:59,l:18,hex:"#3f1349"},25:{h:288,s:62,l:22,hex:"#4d155b"},30:{h:287,s:64,l:26,hex:"#5a186d"},35:{h:286,s:67,l:31,hex:"#6b1a84"},40:{h:286,s:69,l:37,hex:"#811d9f"},45:{h:285,s:71,l:43,hex:"#9520bc"},50:{h:284,s:73,l:49,hex:"#a822d8"},55:{h:283,s:74,l:55,hex:"#b137e1"},60:{h:283,s:75,l:62,hex:"#be55e7"},65:{h:282,s:77,l:68,hex:"#c76fec"},70:{h:282,s:77,l:75,hex:"#d38ef0"},75:{h:281,s:78,l:80,hex:"#dba4f4"},80:{h:281,s:79,l:85,hex:"#e4bbf7"},85:{h:280,s:79,l:90,hex:"#ecd1fa"},90:{h:280,s:80,l:94,hex:"#f4e3fc"},95:{h:280,s:80,l:97,hex:"#f9f1fd"},100:{h:280,s:80,l:99,hex:"#fdfafe"}},curves:{h:{min:294,max:280,minControl:{x:32,y:286},maxControl:{x:67,y:280}},s:{min:47,max:80,minControl:{x:34,y:67},maxControl:{x:51,y:79}},l:{min:6,max:99,minControl:{x:48,y:26},maxControl:{x:64,y:85}}},uri:"purple"},pink:{name:"Pink",hue:313,stops:{0:{h:314,s:64,l:5,hex:"#150511"},5:{h:314,s:66,l:7,hex:"#1e0618"},10:{h:313,s:69,l:10,hex:"#2b0823"},15:{h:313,s:71,l:13,hex:"#390a2e"},20:{h:313,s:73,l:16,hex:"#470b3a"},25:{h:313,s:74,l:19,hex:"#540d45"},30:{h:313,s:76,l:23,hex:"#670e54"},35:{h:313,s:77,l:27,hex:"#7a1063"},40:{h:313,s:77,l:32,hex:"#901375"},45:{h:313,s:78,l:37,hex:"#a81588"},50:{h:313,s:77,l:42,hex:"#be199a"},55:{h:313,s:77,l:48,hex:"#d91cb0"},60:{h:313,s:76,l:55,hex:"#e335be"},65:{h:313,s:76,l:63,hex:"#e859c9"},70:{h:312,s:75,l:70,hex:"#ec79d5"},75:{h:312,s:74,l:77,hex:"#f099de"},80:{h:312,s:73,l:83,hex:"#f3b4e7"},85:{h:312,s:72,l:88,hex:"#f6caee"},90:{h:311,s:71,l:92,hex:"#f9dcf4"},95:{h:311,s:70,l:96,hex:"#fceef9"},100:{h:310,s:69,l:99,hex:"#fefbfe"}},curves:{h:{min:314,max:310,minControl:{x:26,y:311},maxControl:{x:67,y:315}},s:{min:64,max:69,minControl:{x:45,y:87},maxControl:{x:58,y:75}},l:{min:5,max:99,minControl:{x:64,y:34},maxControl:{x:62,y:78}}},uri:"pink"},maroon:{name:"Maroon",hue:339,stops:{0:{h:339,s:57,l:6,hex:"#18070d"},5:{h:339,s:62,l:8,hex:"#210811"},10:{h:339,s:66,l:11,hex:"#2f0a16"},15:{h:339,s:70,l:13,hex:"#380a1a"},20:{h:339,s:74,l:17,hex:"#4b0b22"},25:{h:339,s:76,l:20,hex:"#5a0c27"},30:{h:339,s:79,l:24,hex:"#6e0d2f"},35:{h:339,s:81,l:29,hex:"#860e38"},40:{h:339,s:82,l:33,hex:"#990f3f"},45:{h:339,s:83,l:39,hex:"#b6114b"},50:{h:339,s:84,l:45,hex:"#d31256"},55:{h:339,s:84,l:51,hex:"#eb1963"},60:{h:339,s:84,l:57,hex:"#ed3576"},65:{h:339,s:83,l:64,hex:"#ef578c"},70:{h:339,s:82,l:71,hex:"#f278a3"},75:{h:339,s:81,l:77,hex:"#f495b6"},80:{h:339,s:79,l:83,hex:"#f6b1c9"},85:{h:339,s:78,l:88,hex:"#f8c9d9"},90:{h:339,s:76,l:92,hex:"#fadbe6"},95:{h:339,s:73,l:96,hex:"#fcedf3"},100:{h:339,s:71,l:99,hex:"#fefbfc"}},curves:{h:{min:339,max:339,minControl:{x:26,y:339},maxControl:{x:67,y:339}},s:{min:57,max:71,minControl:{x:32,y:90},maxControl:{x:62,y:90}},l:{min:6,max:99,minControl:{x:54,y:28},maxControl:{x:64,y:79}}},uri:"maroon"},grey:{name:"Grey",hue:200,stops:{0:{h:200,s:5,l:5,hex:"#0c0d0d"},5:{h:200,s:5,l:10,hex:"#181a1b"},10:{h:200,s:5,l:14,hex:"#222425"},15:{h:200,s:5,l:19,hex:"#2e3133"},20:{h:200,s:5,l:23,hex:"#383c3e"},25:{h:200,s:5,l:28,hex:"#44494b"},30:{h:200,s:5,l:33,hex:"#505658"},35:{h:200,s:5,l:37,hex:"#5a6063"},40:{h:200,s:5,l:42,hex:"#666d70"},45:{h:200,s:5,l:47,hex:"#727a7e"},50:{h:200,s:5,l:52,hex:"#7e878b"},55:{h:200,s:5,l:56,hex:"#899194"},60:{h:200,s:5,l:61,hex:"#979da1"},65:{h:200,s:5,l:66,hex:"#a4aaad"},70:{h:200,s:5,l:71,hex:"#b1b6b9"},75:{h:200,s:5,l:75,hex:"#bcc0c2"},80:{h:200,s:5,l:80,hex:"#c9cdcf"},85:{h:200,s:5,l:85,hex:"#d7d9db"},90:{h:200,s:5,l:89,hex:"#e2e3e4"},95:{h:200,s:5,l:94,hex:"#eff0f0"},100:{h:200,s:5,l:98,hex:"#fafafa"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:5,max:5,minControl:{x:30,y:5},maxControl:{x:70,y:5}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey",greyscale:!0},grey20:{name:"Grey20",hue:200,stops:{0:{h:200,s:20,l:5,hex:"#0a0e0f"},5:{h:200,s:20,l:10,hex:"#141b1f"},10:{h:200,s:20,l:14,hex:"#1d262b"},15:{h:200,s:20,l:19,hex:"#27343a"},20:{h:200,s:20,l:23,hex:"#2f3f46"},25:{h:200,s:20,l:28,hex:"#394c56"},30:{h:200,s:20,l:33,hex:"#435a65"},35:{h:200,s:20,l:37,hex:"#4b6571"},40:{h:200,s:20,l:42,hex:"#567281"},45:{h:200,s:20,l:47,hex:"#608090"},50:{h:200,s:20,l:52,hex:"#6c8d9d"},55:{h:200,s:20,l:56,hex:"#7896a5"},60:{h:200,s:20,l:61,hex:"#88a2af"},65:{h:200,s:20,l:66,hex:"#97aeba"},70:{h:200,s:20,l:71,hex:"#a6bac4"},75:{h:200,s:20,l:75,hex:"#b3c3cc"},80:{h:200,s:20,l:80,hex:"#c2cfd6"},85:{h:200,s:20,l:85,hex:"#d1dbe0"},90:{h:200,s:20,l:89,hex:"#dde5e9"},95:{h:200,s:20,l:94,hex:"#edf1f3"},100:{h:200,s:20,l:98,hex:"#f9fafb"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:20,max:20,minControl:{x:30,y:20},maxControl:{x:70,y:20}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey20",greyscale:!0},grey40:{name:"Grey40",hue:200,stops:{0:{h:200,s:40,l:5,hex:"#080e12"},5:{h:200,s:40,l:10,hex:"#0f1d24"},10:{h:200,s:40,l:14,hex:"#152832"},15:{h:200,s:40,l:19,hex:"#1d3744"},20:{h:200,s:40,l:23,hex:"#234252"},25:{h:200,s:40,l:28,hex:"#2b5164"},30:{h:200,s:40,l:33,hex:"#325f76"},35:{h:200,s:40,l:37,hex:"#396b84"},40:{h:200,s:40,l:42,hex:"#407996"},45:{h:200,s:40,l:47,hex:"#4888a8"},50:{h:200,s:40,l:52,hex:"#5495b6"},55:{h:200,s:40,l:56,hex:"#629ebc"},60:{h:200,s:40,l:61,hex:"#74a9c3"},65:{h:200,s:40,l:66,hex:"#86b4cb"},70:{h:200,s:40,l:71,hex:"#97bfd3"},75:{h:200,s:40,l:75,hex:"#a6c8d9"},80:{h:200,s:40,l:80,hex:"#b8d3e0"},85:{h:200,s:40,l:85,hex:"#c9dee8"},90:{h:200,s:40,l:89,hex:"#d8e7ee"},95:{h:200,s:40,l:94,hex:"#eaf2f6"},100:{h:200,s:40,l:98,hex:"#f8fbfc"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:40,max:40,minControl:{x:30,y:40},maxControl:{x:70,y:40}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey40",greyscale:!0}},Yr={name:yT,comment:wT,uri:xT,source:CT,ranges:ST},rd=Object.keys(Yr.ranges),kT=Object.entries(Yr.ranges).filter(([,e])=>!e.greyscale).map(([e])=>e),TT=Object.entries(Yr.ranges).filter(([,e])=>e.greyscale).map(([e])=>e),_T=({range:e,setRange:n})=>d("div",{children:[d("div",{className:"flex space mar-b-0",children:[l("h3",{children:"Color Range"}),l("h4",{children:Nn(e)&&l("code",{children:e||""})})]}),d("div",{className:"grid-fit gap-2",style:{"--min-width":"2em"},children:[l(i0,{colors:kT,range:e,setRange:n}),l("div",{children:" "}),l(Ol,{color:"brand",selected:e==="brand",select:()=>n("brand")}),l(i0,{colors:TT,range:e,setRange:n})]})]}),i0=({range:e,setRange:n,colors:t})=>t.map(r=>l(Ol,{color:r,select:()=>n(r),selected:e==r},r)),ts=({stop:e,setStop:n,className:t,title:r,prefix:a})=>d("div",{children:[d("div",{className:"flex space mar-b-0",children:[l("h3",{children:r}),l("h4",{children:Nn(e)&&d("code",{children:[a,"-",e]})})]}),l("div",{className:`${t} grid-fit gap-2`,style:{"--min-width":"2em"},children:yi(0,100,5).map(o=>l(Ol,{color:`bgc-${o} bdc-${o} fgc-${o>50?"0":"100"} bgd-${o} bdd-${o} fgd-${o>50?"0":"100"}`,iconColor:o>50?"black":"white",selected:e===o,select:()=>n(o)},o))})]}),LT=[0,1,2,3,4,6,8,10,12,16,20,24,28,32],s0=({spacing:e,setSpacing:n,className:t,title:r,prefix:a,range:o})=>d("div",{children:[d("div",{className:"flex space mar-b-0",children:[l("h3",{children:r}),l("h4",{children:Nn(e)&&d("code",{children:[a,"-",e]})})]}),l("div",{className:`${t} grid-fit gap-2`,style:{"--min-width":"2em"},children:LT.map(i=>l(Ol,{color:o,className:"wide",alt:l("span",{className:"font-mono",children:i}),selected:e===i,select:()=>n(i)},i))})]}),$T=["smallest","smaller","small","medium","large","larger","largest"],NT=({size:e,setSize:n,title:t="Size",range:r})=>d("div",{children:[d("div",{className:"flex space mar-b-0",children:[l("h3",{children:t}),l("h4",{children:Nn(e)&&l("code",{children:e})})]}),l("div",{className:"grid-fit gap-2",style:{"--min-width":"2em"},children:$T.map(a=>l(Ol,{color:r,className:"wide",alt:l("span",{className:"font-mono",children:a}),selected:e===a,select:()=>n(a)},a))})]}),ET=[0,1,2,3,4,5,6,8,10],d0=({border:e,setBorder:n,className:t,title:r,prefix:a,range:o})=>d("div",{children:[d("div",{className:"flex space mar-b-0",children:[l("h3",{children:r}),l("h4",{children:Nn(e)&&d("code",{children:[a,"-",e]})})]}),l("div",{className:`${t} grid-fit gap-2`,style:{"--min-width":"2em"},children:ET.map(i=>l(Ol,{color:o,className:"wide",alt:l("span",{className:"font-mono",children:i}),selected:e===i,select:()=>n(i)},i))})]}),IT=({checked:e,toggle:n,label:t})=>l("div",{className:"field",children:d("label",{className:"checkbox border no-focus wide",children:[l("input",{type:"checkbox",checked:e,onChange:n}),t]})}),MT=({shadow:e,setShadow:n,className:t,title:r="Shadow",prefix:a="shadow",range:o})=>d("div",{children:[d("div",{className:"flex space mar-b-0",children:[l("h3",{children:r}),l("h4",{children:Nn(e)&&d("code",{children:[a,"-",e]})})]}),l("div",{className:`${t} grid-fit gap-2`,style:{"--min-width":"2em"},children:yi(0,5).map(i=>l(Ol,{color:o,className:"wide",alt:l("span",{className:"font-mono",children:i}),selected:e===i,select:()=>n(i)},i))})]}),RT=({options:e,setOption:n,toggleOption:t})=>d("div",{className:"surface-5 pad-4",children:[d("div",{className:"flex space baseline stack-desktop mar-b-2",children:[l("h2",{className:"mar-v-none",children:"Controls"}),l("h3",{className:"text-right mar-v-none",children:l("code",{children:'class="..."'})})]}),d("div",{className:"grid gap-2 small",children:[l(_T,{range:e.range,setRange:n("range")}),l(ts,{title:"Background Color Stop",prefix:"bgc",className:e.range,stop:e.bgc,setStop:n("bgc")}),l(ts,{title:"Foreground Color Stop",prefix:"fgc",className:e.range,stop:e.fgc,setStop:n("fgc")}),l(ts,{title:"Heading Color Stop",prefix:"hdc",className:e.range,stop:e.hdc,setStop:n("hdc")}),l(ts,{title:"Border Color Stop",prefix:"bdc",className:e.range,stop:e.bdc,setStop:n("bdc")}),l(d0,{title:"Border Width",prefix:"bdw",border:e.bdw,setBorder:n("bdw"),range:e.range}),l(d0,{title:"Border Radius",prefix:"bdr",border:e.bdr,setBorder:n("bdr"),range:e.range}),l(NT,{title:"Size",size:e.size,setSize:n("size"),range:e.range}),l(s0,{title:"Margin",prefix:"mar",className:e.mar,spacing:e.mar,setSpacing:n("mar"),range:e.range}),l(s0,{title:"Padding",prefix:"pad",className:e.pad,spacing:e.pad,setSpacing:n("pad"),range:e.range}),l(MT,{title:"Shadow",prefix:"shadow",shadow:e.shadow,setShadow:n("shadow"),range:e.range}),d("div",{children:[l("h3",{className:"mar-b-2",children:"Options"}),l("div",{className:"grid-fill",style:{"--min-width":"10rem"},children:l(IT,{label:"Show Border",checked:e.border,toggle:t("border")})})]})]})]}),xi=e=>e.filter(n=>Nn(n)&&n).join(" ").replace(/^\s+/,"").replaceAll(/\s+/g," "),vv=(e,n={},...t)=>xi(Object.entries(e).reduce((r,[a,o])=>(o&&r.push(n[a]||a),r),[...t])),bv=(e,n="",...t)=>xi([...rv(n).filter(r=>e[r]),...t]),PT=({options:e})=>{const n=AT(e);return d("div",{className:"surface-5 pad-4",children:[d("div",{className:"flex space baseline stack-desktop mar-b-2",children:[l("h2",{className:"mar-v-none",children:"Output"}),l("div",{className:"text-right",children:d("code",{children:['class="',n,'"']})})]}),l("div",{className:"border surface-4",style:{borderStyle:"dotted"},children:d("div",{className:n,children:[l("h3",{className:"mar-b-2",children:"It's One Louder"}),"You see, most... most blokes, you know, will be playing at ten. You're on ten here... all the way up... all the way up... all the way up. You're on ten on your guitar...where can you go from there? Where? Nowhere. Exactly. What we do is if we need that extra... push over the cliff... you know what we do? Put it up to eleven. Eleven. Exactly. One louder."]})})]})},AT=e=>xi([e.range,Nn(e.bgc)?`bgc-${e.bgc}`:"",Nn(e.fgc)?`fgc-${e.fgc}`:"",Nn(e.hdc)?`hdc-${e.hdc}`:"",Nn(e.bdc)?`bdc-${e.bdc}`:"",Nn(e.bdw)?`bdw-${e.bdw}`:"",Nn(e.bdr)?`bdr-${e.bdr}`:"",e.size,Nn(e.mar)?`mar-${e.mar}`:"",Nn(e.pad)?`pad-${e.pad}`:"",Nn(e.shadow)?`shadow-${e.shadow}`:"",e.border?"border":""]),FT=()=>{const[e,n]=B.useState({range:"brand",bgc:90,fgc:30,hdc:20,bdc:60,bdr:3,bdw:2,pad:4,mar:6,shadow:2,border:!0});return d("div",{className:"grid gap-8",children:[l(PT,{options:e}),l(RT,{options:e,setOption:a=>o=>n(i=>({...i,[a]:o})),toggleOption:a=>()=>n(o=>({...o,[a]:!o[a]}))})]})},OT=()=>d("div",{children:[l("h1",{children:"Color Demo"}),d("div",{className:"grid-2 gap-h-8 stack-desktop",children:[d("div",{children:[d("p",{children:["One of the novel approaches that Badger CSS employs is to provide CSS classes for each of the colors in the palette.  There are then further CSS classes that can be used to select the particular shade (or color"," ",'"stop") from that range to use for the background, foreground, heading and border colors.']}),d("p",{children:["One benefit of this approach is that it allows you to design color agnostic components that work with both light and dark themes, and can then be used with any color range.  For some examples, see the"," ",l(oe,{to:"/components/alerts",text:"Alerts"})," and "," ",l(oe,{to:"/components/tables",text:"Tables"})," pages"]}),l("p",{children:"Another more practical benefit is that it avoid the combinatorial explosion of CSS classes required to cover every combination of color range and stop for foreground, background, heading and border colors."})]}),d("div",{children:[l("p",{children:"Further utility classes are provided for selecting font size, border width and radius, margins, padding, shadows and various layout options. They're similar to what you'll find in other CSS toolkits."}),l("p",{children:"The choice about what is included and what isn't is entirely arbitrary but I lean towards minimalism and have only included the kind of utility classes that I use in most, if not all web sites. It's really easy for you to add in your own utility classes, or change the settings for the provided utilities, if you want to."}),l("p",{children:"So without further ado, click on the buttons below to select different colors and layout options.  Each one selects a CSS class which affects the way the output is displayed."})]})]}),l(FT,{})]}),DT=Object.freeze(Object.defineProperty({__proto__:null,default:OT},Symbol.toStringTag,{value:"Module"}));var yv={exports:{}};/**
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
 */(function(e,n){(function(t,r){e.exports=r()})(zo,function(){for(var t=function(c,h,f){return h===void 0&&(h=0),f===void 0&&(f=1),c<h?h:c>f?f:c},r=t,a=function(c){c._clipped=!1,c._unclipped=c.slice(0);for(var h=0;h<=3;h++)h<3?((c[h]<0||c[h]>255)&&(c._clipped=!0),c[h]=r(c[h],0,255)):h===3&&(c[h]=r(c[h],0,1));return c},o={},i=0,s=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];i<s.length;i+=1){var u=s[i];o["[object "+u+"]"]=u.toLowerCase()}var p=function(c){return o[Object.prototype.toString.call(c)]||"object"},m=p,y=function(c,h){return h===void 0&&(h=null),c.length>=3?Array.prototype.slice.call(c):m(c[0])=="object"&&h?h.split("").filter(function(f){return c[0][f]!==void 0}).map(function(f){return c[0][f]}):c[0]},C=p,E=function(c){if(c.length<2)return null;var h=c.length-1;return C(c[h])=="string"?c[h].toLowerCase():null},N=Math.PI,S={clip_rgb:a,limit:t,type:p,unpack:y,last:E,PI:N,TWOPI:N*2,PITHIRD:N/3,DEG2RAD:N/180,RAD2DEG:180/N},M={format:{},autodetect:[]},w=S.last,g=S.clip_rgb,b=S.type,v=M,L=function(){for(var h=[],f=arguments.length;f--;)h[f]=arguments[f];var x=this;if(b(h[0])==="object"&&h[0].constructor&&h[0].constructor===this.constructor)return h[0];var _=w(h),$=!1;if(!_){$=!0,v.sorted||(v.autodetect=v.autodetect.sort(function(H,K){return K.p-H.p}),v.sorted=!0);for(var k=0,R=v.autodetect;k<R.length;k+=1){var P=R[k];if(_=P.test.apply(P,h),_)break}}if(v.format[_]){var j=v.format[_].apply(null,$?h:h.slice(0,-1));x._rgb=g(j)}else throw new Error("unknown format: "+h);x._rgb.length===3&&x._rgb.push(1)};L.prototype.toString=function(){return b(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var T=L,A=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(A.Color,[null].concat(c)))};A.Color=T,A.version="2.4.2";var O=A,z=S.unpack,Z=Math.max,fe=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=z(c,"rgb"),x=f[0],_=f[1],$=f[2];x=x/255,_=_/255,$=$/255;var k=1-Z(x,Z(_,$)),R=k<1?1/(1-k):0,P=(1-x-k)*R,j=(1-_-k)*R,H=(1-$-k)*R;return[P,j,H,k]},ce=fe,Ue=S.unpack,an=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=Ue(c,"cmyk");var f=c[0],x=c[1],_=c[2],$=c[3],k=c.length>4?c[4]:1;return $===1?[0,0,0,k]:[f>=1?0:255*(1-f)*(1-$),x>=1?0:255*(1-x)*(1-$),_>=1?0:255*(1-_)*(1-$),k]},Ye=an,je=O,Ze=T,U=M,q=S.unpack,J=S.type,ae=ce;Ze.prototype.cmyk=function(){return ae(this._rgb)},je.cmyk=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Ze,[null].concat(c,["cmyk"])))},U.format.cmyk=Ye,U.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=q(c,"cmyk"),J(c)==="array"&&c.length===4)return"cmyk"}});var ge=S.unpack,zn=S.last,me=function(c){return Math.round(c*100)/100},nn=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=ge(c,"hsla"),x=zn(c)||"lsa";return f[0]=me(f[0]||0),f[1]=me(f[1]*100)+"%",f[2]=me(f[2]*100)+"%",x==="hsla"||f.length>3&&f[3]<1?(f[3]=f.length>3?f[3]:1,x="hsla"):f.length=3,x+"("+f.join(",")+")"},qe=nn,fn=S.unpack,Fn=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=fn(c,"rgba");var f=c[0],x=c[1],_=c[2];f/=255,x/=255,_/=255;var $=Math.min(f,x,_),k=Math.max(f,x,_),R=(k+$)/2,P,j;return k===$?(P=0,j=Number.NaN):P=R<.5?(k-$)/(k+$):(k-$)/(2-k-$),f==k?j=(x-_)/(k-$):x==k?j=2+(_-f)/(k-$):_==k&&(j=4+(f-x)/(k-$)),j*=60,j<0&&(j+=360),c.length>3&&c[3]!==void 0?[j,P,R,c[3]]:[j,P,R]},Jr=Fn,el=S.unpack,er=S.last,Ga=qe,nl=Jr,Ya=Math.round,tl=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=el(c,"rgba"),x=er(c)||"rgb";return x.substr(0,3)=="hsl"?Ga(nl(f),x):(f[0]=Ya(f[0]),f[1]=Ya(f[1]),f[2]=Ya(f[2]),(x==="rgba"||f.length>3&&f[3]<1)&&(f[3]=f.length>3?f[3]:1,x="rgba"),x+"("+f.slice(0,x==="rgb"?3:4).join(",")+")")},Ci=tl,Za=S.unpack,rl=Math.round,qa=function(){for(var c,h=[],f=arguments.length;f--;)h[f]=arguments[f];h=Za(h,"hsl");var x=h[0],_=h[1],$=h[2],k,R,P;if(_===0)k=R=P=$*255;else{var j=[0,0,0],H=[0,0,0],K=$<.5?$*(1+_):$+_-$*_,V=2*$-K,te=x/360;j[0]=te+1/3,j[1]=te,j[2]=te-1/3;for(var ee=0;ee<3;ee++)j[ee]<0&&(j[ee]+=1),j[ee]>1&&(j[ee]-=1),6*j[ee]<1?H[ee]=V+(K-V)*6*j[ee]:2*j[ee]<1?H[ee]=K:3*j[ee]<2?H[ee]=V+(K-V)*(2/3-j[ee])*6:H[ee]=V;c=[rl(H[0]*255),rl(H[1]*255),rl(H[2]*255)],k=c[0],R=c[1],P=c[2]}return h.length>3?[k,R,P,h[3]]:[k,R,P,1]},nr=qa,Qa=nr,Ka=M,Xa=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,Si=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,xr=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,ll=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Ja=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,Dl=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,ki=Math.round,Ti=function(c){c=c.toLowerCase().trim();var h;if(Ka.format.named)try{return Ka.format.named(c)}catch{}if(h=c.match(Xa)){for(var f=h.slice(1,4),x=0;x<3;x++)f[x]=+f[x];return f[3]=1,f}if(h=c.match(Si)){for(var _=h.slice(1,5),$=0;$<4;$++)_[$]=+_[$];return _}if(h=c.match(xr)){for(var k=h.slice(1,4),R=0;R<3;R++)k[R]=ki(k[R]*2.55);return k[3]=1,k}if(h=c.match(ll)){for(var P=h.slice(1,5),j=0;j<3;j++)P[j]=ki(P[j]*2.55);return P[3]=+P[3],P}if(h=c.match(Ja)){var H=h.slice(1,4);H[1]*=.01,H[2]*=.01;var K=Qa(H);return K[3]=1,K}if(h=c.match(Dl)){var V=h.slice(1,4);V[1]*=.01,V[2]*=.01;var te=Qa(V);return te[3]=+h[4],te}};Ti.test=function(c){return Xa.test(c)||Si.test(c)||xr.test(c)||ll.test(c)||Ja.test(c)||Dl.test(c)};var _i=Ti,zd=O,F=T,D=M,W=S.type,Q=Ci,de=_i;F.prototype.css=function(c){return Q(this._rgb,c)},zd.css=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(F,[null].concat(c,["css"])))},D.format.css=de,D.autodetect.push({p:5,test:function(c){for(var h=[],f=arguments.length-1;f-- >0;)h[f]=arguments[f+1];if(!h.length&&W(c)==="string"&&de.test(c))return"css"}});var ue=T,he=O,pe=M,le=S.unpack;pe.format.gl=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=le(c,"rgba");return f[0]*=255,f[1]*=255,f[2]*=255,f},he.gl=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(ue,[null].concat(c,["gl"])))},ue.prototype.gl=function(){var c=this._rgb;return[c[0]/255,c[1]/255,c[2]/255,c[3]]};var $e=S.unpack,Ae=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=$e(c,"rgb"),x=f[0],_=f[1],$=f[2],k=Math.min(x,_,$),R=Math.max(x,_,$),P=R-k,j=P*100/255,H=k/(255-P)*100,K;return P===0?K=Number.NaN:(x===R&&(K=(_-$)/P),_===R&&(K=2+($-x)/P),$===R&&(K=4+(x-_)/P),K*=60,K<0&&(K+=360)),[K,j,H]},wn=Ae,dn=S.unpack,gn=Math.floor,yt=function(){for(var c,h,f,x,_,$,k=[],R=arguments.length;R--;)k[R]=arguments[R];k=dn(k,"hcg");var P=k[0],j=k[1],H=k[2],K,V,te;H=H*255;var ee=j*255;if(j===0)K=V=te=H;else{P===360&&(P=0),P>360&&(P-=360),P<0&&(P+=360),P/=60;var be=gn(P),ke=P-be,Ne=H*(1-j),Re=Ne+ee*(1-ke),Tn=Ne+ee*ke,Cn=Ne+ee;switch(be){case 0:c=[Cn,Tn,Ne],K=c[0],V=c[1],te=c[2];break;case 1:h=[Re,Cn,Ne],K=h[0],V=h[1],te=h[2];break;case 2:f=[Ne,Cn,Tn],K=f[0],V=f[1],te=f[2];break;case 3:x=[Ne,Re,Cn],K=x[0],V=x[1],te=x[2];break;case 4:_=[Tn,Ne,Cn],K=_[0],V=_[1],te=_[2];break;case 5:$=[Cn,Ne,Re],K=$[0],V=$[1],te=$[2];break}}return[K,V,te,k.length>3?k[3]:1]},al=yt,eo=S.unpack,Bl=S.type,$t=O,ol=T,jl=M,no=wn;ol.prototype.hcg=function(){return no(this._rgb)},$t.hcg=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(ol,[null].concat(c,["hcg"])))},jl.format.hcg=al,jl.autodetect.push({p:1,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=eo(c,"hcg"),Bl(c)==="array"&&c.length===3)return"hcg"}});var to=S.unpack,zl=S.last,ze=Math.round,Qn=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=to(c,"rgba"),x=f[0],_=f[1],$=f[2],k=f[3],R=zl(c)||"auto";k===void 0&&(k=1),R==="auto"&&(R=k<1?"rgba":"rgb"),x=ze(x),_=ze(_),$=ze($);var P=x<<16|_<<8|$,j="000000"+P.toString(16);j=j.substr(j.length-6);var H="0"+ze(k*255).toString(16);switch(H=H.substr(H.length-2),R.toLowerCase()){case"rgba":return"#"+j+H;case"argb":return"#"+H+j;default:return"#"+j}},tr=Qn,mn=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,ro=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,Li=function(c){if(c.match(mn)){(c.length===4||c.length===7)&&(c=c.substr(1)),c.length===3&&(c=c.split(""),c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]);var h=parseInt(c,16),f=h>>16,x=h>>8&255,_=h&255;return[f,x,_,1]}if(c.match(ro)){(c.length===5||c.length===9)&&(c=c.substr(1)),c.length===4&&(c=c.split(""),c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]+c[3]+c[3]);var $=parseInt(c,16),k=$>>24&255,R=$>>16&255,P=$>>8&255,j=Math.round(($&255)/255*100)/100;return[k,R,P,j]}throw new Error("unknown hex color: "+c)},$i=Li,D4=O,lf=T,B4=S.type,af=M,j4=tr;lf.prototype.hex=function(c){return j4(this._rgb,c)},D4.hex=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(lf,[null].concat(c,["hex"])))},af.format.hex=$i,af.autodetect.push({p:4,test:function(c){for(var h=[],f=arguments.length-1;f-- >0;)h[f]=arguments[f+1];if(!h.length&&B4(c)==="string"&&[3,4,5,6,7,8,9].indexOf(c.length)>=0)return"hex"}});var z4=S.unpack,of=S.TWOPI,U4=Math.min,H4=Math.sqrt,W4=Math.acos,V4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=z4(c,"rgb"),x=f[0],_=f[1],$=f[2];x/=255,_/=255,$/=255;var k,R=U4(x,_,$),P=(x+_+$)/3,j=P>0?1-R/P:0;return j===0?k=NaN:(k=(x-_+(x-$))/2,k/=H4((x-_)*(x-_)+(x-$)*(_-$)),k=W4(k),$>_&&(k=of-k),k/=of),[k*360,j,P]},G4=V4,Y4=S.unpack,Ud=S.limit,Ul=S.TWOPI,Hd=S.PITHIRD,Hl=Math.cos,Z4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=Y4(c,"hsi");var f=c[0],x=c[1],_=c[2],$,k,R;return isNaN(f)&&(f=0),isNaN(x)&&(x=0),f>360&&(f-=360),f<0&&(f+=360),f/=360,f<1/3?(R=(1-x)/3,$=(1+x*Hl(Ul*f)/Hl(Hd-Ul*f))/3,k=1-(R+$)):f<2/3?(f-=1/3,$=(1-x)/3,k=(1+x*Hl(Ul*f)/Hl(Hd-Ul*f))/3,R=1-($+k)):(f-=2/3,k=(1-x)/3,R=(1+x*Hl(Ul*f)/Hl(Hd-Ul*f))/3,$=1-(k+R)),$=Ud(_*$*3),k=Ud(_*k*3),R=Ud(_*R*3),[$*255,k*255,R*255,c.length>3?c[3]:1]},q4=Z4,Q4=S.unpack,K4=S.type,X4=O,sf=T,df=M,J4=G4;sf.prototype.hsi=function(){return J4(this._rgb)},X4.hsi=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(sf,[null].concat(c,["hsi"])))},df.format.hsi=q4,df.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=Q4(c,"hsi"),K4(c)==="array"&&c.length===3)return"hsi"}});var e5=S.unpack,n5=S.type,t5=O,cf=T,uf=M,r5=Jr;cf.prototype.hsl=function(){return r5(this._rgb)},t5.hsl=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(cf,[null].concat(c,["hsl"])))},uf.format.hsl=nr,uf.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=e5(c,"hsl"),n5(c)==="array"&&c.length===3)return"hsl"}});var l5=S.unpack,a5=Math.min,o5=Math.max,i5=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=l5(c,"rgb");var f=c[0],x=c[1],_=c[2],$=a5(f,x,_),k=o5(f,x,_),R=k-$,P,j,H;return H=k/255,k===0?(P=Number.NaN,j=0):(j=R/k,f===k&&(P=(x-_)/R),x===k&&(P=2+(_-f)/R),_===k&&(P=4+(f-x)/R),P*=60,P<0&&(P+=360)),[P,j,H]},s5=i5,d5=S.unpack,c5=Math.floor,u5=function(){for(var c,h,f,x,_,$,k=[],R=arguments.length;R--;)k[R]=arguments[R];k=d5(k,"hsv");var P=k[0],j=k[1],H=k[2],K,V,te;if(H*=255,j===0)K=V=te=H;else{P===360&&(P=0),P>360&&(P-=360),P<0&&(P+=360),P/=60;var ee=c5(P),be=P-ee,ke=H*(1-j),Ne=H*(1-j*be),Re=H*(1-j*(1-be));switch(ee){case 0:c=[H,Re,ke],K=c[0],V=c[1],te=c[2];break;case 1:h=[Ne,H,ke],K=h[0],V=h[1],te=h[2];break;case 2:f=[ke,H,Re],K=f[0],V=f[1],te=f[2];break;case 3:x=[ke,Ne,H],K=x[0],V=x[1],te=x[2];break;case 4:_=[Re,ke,H],K=_[0],V=_[1],te=_[2];break;case 5:$=[H,ke,Ne],K=$[0],V=$[1],te=$[2];break}}return[K,V,te,k.length>3?k[3]:1]},h5=u5,p5=S.unpack,f5=S.type,g5=O,hf=T,pf=M,m5=s5;hf.prototype.hsv=function(){return m5(this._rgb)},g5.hsv=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(hf,[null].concat(c,["hsv"])))},pf.format.hsv=h5,pf.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=p5(c,"hsv"),f5(c)==="array"&&c.length===3)return"hsv"}});var Ni={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},Wl=Ni,v5=S.unpack,ff=Math.pow,b5=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=v5(c,"rgb"),x=f[0],_=f[1],$=f[2],k=y5(x,_,$),R=k[0],P=k[1],j=k[2],H=116*P-16;return[H<0?0:H,500*(R-P),200*(P-j)]},Wd=function(c){return(c/=255)<=.04045?c/12.92:ff((c+.055)/1.055,2.4)},Vd=function(c){return c>Wl.t3?ff(c,1/3):c/Wl.t2+Wl.t0},y5=function(c,h,f){c=Wd(c),h=Wd(h),f=Wd(f);var x=Vd((.4124564*c+.3575761*h+.1804375*f)/Wl.Xn),_=Vd((.2126729*c+.7151522*h+.072175*f)/Wl.Yn),$=Vd((.0193339*c+.119192*h+.9503041*f)/Wl.Zn);return[x,_,$]},gf=b5,Vl=Ni,w5=S.unpack,x5=Math.pow,C5=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=w5(c,"lab");var f=c[0],x=c[1],_=c[2],$,k,R,P,j,H;return k=(f+16)/116,$=isNaN(x)?k:k+x/500,R=isNaN(_)?k:k-_/200,k=Vl.Yn*Yd(k),$=Vl.Xn*Yd($),R=Vl.Zn*Yd(R),P=Gd(3.2404542*$-1.5371385*k-.4985314*R),j=Gd(-.969266*$+1.8760108*k+.041556*R),H=Gd(.0556434*$-.2040259*k+1.0572252*R),[P,j,H,c.length>3?c[3]:1]},Gd=function(c){return 255*(c<=.00304?12.92*c:1.055*x5(c,1/2.4)-.055)},Yd=function(c){return c>Vl.t1?c*c*c:Vl.t2*(c-Vl.t0)},mf=C5,S5=S.unpack,k5=S.type,T5=O,vf=T,bf=M,_5=gf;vf.prototype.lab=function(){return _5(this._rgb)},T5.lab=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(vf,[null].concat(c,["lab"])))},bf.format.lab=mf,bf.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=S5(c,"lab"),k5(c)==="array"&&c.length===3)return"lab"}});var L5=S.unpack,$5=S.RAD2DEG,N5=Math.sqrt,E5=Math.atan2,I5=Math.round,M5=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=L5(c,"lab"),x=f[0],_=f[1],$=f[2],k=N5(_*_+$*$),R=(E5($,_)*$5+360)%360;return I5(k*1e4)===0&&(R=Number.NaN),[x,k,R]},yf=M5,R5=S.unpack,P5=gf,A5=yf,F5=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=R5(c,"rgb"),x=f[0],_=f[1],$=f[2],k=P5(x,_,$),R=k[0],P=k[1],j=k[2];return A5(R,P,j)},O5=F5,D5=S.unpack,B5=S.DEG2RAD,j5=Math.sin,z5=Math.cos,U5=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=D5(c,"lch"),x=f[0],_=f[1],$=f[2];return isNaN($)&&($=0),$=$*B5,[x,z5($)*_,j5($)*_]},wf=U5,H5=S.unpack,W5=wf,V5=mf,G5=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=H5(c,"lch");var f=c[0],x=c[1],_=c[2],$=W5(f,x,_),k=$[0],R=$[1],P=$[2],j=V5(k,R,P),H=j[0],K=j[1],V=j[2];return[H,K,V,c.length>3?c[3]:1]},xf=G5,Y5=S.unpack,Z5=xf,q5=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=Y5(c,"hcl").reverse();return Z5.apply(void 0,f)},Q5=q5,K5=S.unpack,X5=S.type,Cf=O,Ei=T,Zd=M,Sf=O5;Ei.prototype.lch=function(){return Sf(this._rgb)},Ei.prototype.hcl=function(){return Sf(this._rgb).reverse()},Cf.lch=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Ei,[null].concat(c,["lch"])))},Cf.hcl=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Ei,[null].concat(c,["hcl"])))},Zd.format.lch=xf,Zd.format.hcl=Q5,["lch","hcl"].forEach(function(c){return Zd.autodetect.push({p:2,test:function(){for(var h=[],f=arguments.length;f--;)h[f]=arguments[f];if(h=K5(h,c),X5(h)==="array"&&h.length===3)return c}})});var J5={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},kf=J5,e6=T,Tf=M,n6=S.type,lo=kf,t6=$i,r6=tr;e6.prototype.name=function(){for(var c=r6(this._rgb,"rgb"),h=0,f=Object.keys(lo);h<f.length;h+=1){var x=f[h];if(lo[x]===c)return x.toLowerCase()}return c},Tf.format.named=function(c){if(c=c.toLowerCase(),lo[c])return t6(lo[c]);throw new Error("unknown color name: "+c)},Tf.autodetect.push({p:5,test:function(c){for(var h=[],f=arguments.length-1;f-- >0;)h[f]=arguments[f+1];if(!h.length&&n6(c)==="string"&&lo[c.toLowerCase()])return"named"}});var l6=S.unpack,a6=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=l6(c,"rgb"),x=f[0],_=f[1],$=f[2];return(x<<16)+(_<<8)+$},o6=a6,i6=S.type,s6=function(c){if(i6(c)=="number"&&c>=0&&c<=16777215){var h=c>>16,f=c>>8&255,x=c&255;return[h,f,x,1]}throw new Error("unknown num color: "+c)},d6=s6,c6=O,_f=T,Lf=M,u6=S.type,h6=o6;_f.prototype.num=function(){return h6(this._rgb)},c6.num=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(_f,[null].concat(c,["num"])))},Lf.format.num=d6,Lf.autodetect.push({p:5,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c.length===1&&u6(c[0])==="number"&&c[0]>=0&&c[0]<=16777215)return"num"}});var p6=O,qd=T,$f=M,Nf=S.unpack,Ef=S.type,If=Math.round;qd.prototype.rgb=function(c){return c===void 0&&(c=!0),c===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(If)},qd.prototype.rgba=function(c){return c===void 0&&(c=!0),this._rgb.slice(0,4).map(function(h,f){return f<3?c===!1?h:If(h):h})},p6.rgb=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(qd,[null].concat(c,["rgb"])))},$f.format.rgb=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=Nf(c,"rgba");return f[3]===void 0&&(f[3]=1),f},$f.autodetect.push({p:3,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=Nf(c,"rgba"),Ef(c)==="array"&&(c.length===3||c.length===4&&Ef(c[3])=="number"&&c[3]>=0&&c[3]<=1))return"rgb"}});var Ii=Math.log,f6=function(c){var h=c/100,f,x,_;return h<66?(f=255,x=h<6?0:-155.25485562709179-.44596950469579133*(x=h-2)+104.49216199393888*Ii(x),_=h<20?0:-254.76935184120902+.8274096064007395*(_=h-10)+115.67994401066147*Ii(_)):(f=351.97690566805693+.114206453784165*(f=h-55)-40.25366309332127*Ii(f),x=325.4494125711974+.07943456536662342*(x=h-50)-28.0852963507957*Ii(x),_=255),[f,x,_,1]},Mf=f6,g6=Mf,m6=S.unpack,v6=Math.round,b6=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];for(var f=m6(c,"rgb"),x=f[0],_=f[2],$=1e3,k=4e4,R=.4,P;k-$>R;){P=(k+$)*.5;var j=g6(P);j[2]/j[0]>=_/x?k=P:$=P}return v6(P)},y6=b6,Qd=O,Mi=T,Kd=M,w6=y6;Mi.prototype.temp=Mi.prototype.kelvin=Mi.prototype.temperature=function(){return w6(this._rgb)},Qd.temp=Qd.kelvin=Qd.temperature=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Mi,[null].concat(c,["temp"])))},Kd.format.temp=Kd.format.kelvin=Kd.format.temperature=Mf;var x6=S.unpack,Xd=Math.cbrt,C6=Math.pow,S6=Math.sign,k6=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=x6(c,"rgb"),x=f[0],_=f[1],$=f[2],k=[Jd(x/255),Jd(_/255),Jd($/255)],R=k[0],P=k[1],j=k[2],H=Xd(.4122214708*R+.5363325363*P+.0514459929*j),K=Xd(.2119034982*R+.6806995451*P+.1073969566*j),V=Xd(.0883024619*R+.2817188376*P+.6299787005*j);return[.2104542553*H+.793617785*K-.0040720468*V,1.9779984951*H-2.428592205*K+.4505937099*V,.0259040371*H+.7827717662*K-.808675766*V]},Rf=k6;function Jd(c){var h=Math.abs(c);return h<.04045?c/12.92:(S6(c)||1)*C6((h+.055)/1.055,2.4)}var T6=S.unpack,Ri=Math.pow,_6=Math.sign,L6=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=T6(c,"lab");var f=c[0],x=c[1],_=c[2],$=Ri(f+.3963377774*x+.2158037573*_,3),k=Ri(f-.1055613458*x-.0638541728*_,3),R=Ri(f-.0894841775*x-1.291485548*_,3);return[255*ec(4.0767416621*$-3.3077115913*k+.2309699292*R),255*ec(-1.2684380046*$+2.6097574011*k-.3413193965*R),255*ec(-.0041960863*$-.7034186147*k+1.707614701*R),c.length>3?c[3]:1]},Pf=L6;function ec(c){var h=Math.abs(c);return h>.0031308?(_6(c)||1)*(1.055*Ri(h,1/2.4)-.055):c*12.92}var $6=S.unpack,N6=S.type,E6=O,Af=T,Ff=M,I6=Rf;Af.prototype.oklab=function(){return I6(this._rgb)},E6.oklab=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Af,[null].concat(c,["oklab"])))},Ff.format.oklab=Pf,Ff.autodetect.push({p:3,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=$6(c,"oklab"),N6(c)==="array"&&c.length===3)return"oklab"}});var M6=S.unpack,R6=Rf,P6=yf,A6=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=M6(c,"rgb"),x=f[0],_=f[1],$=f[2],k=R6(x,_,$),R=k[0],P=k[1],j=k[2];return P6(R,P,j)},F6=A6,O6=S.unpack,D6=wf,B6=Pf,j6=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=O6(c,"lch");var f=c[0],x=c[1],_=c[2],$=D6(f,x,_),k=$[0],R=$[1],P=$[2],j=B6(k,R,P),H=j[0],K=j[1],V=j[2];return[H,K,V,c.length>3?c[3]:1]},z6=j6,U6=S.unpack,H6=S.type,W6=O,Of=T,Df=M,V6=F6;Of.prototype.oklch=function(){return V6(this._rgb)},W6.oklch=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Of,[null].concat(c,["oklch"])))},Df.format.oklch=z6,Df.autodetect.push({p:3,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=U6(c,"oklch"),H6(c)==="array"&&c.length===3)return"oklch"}});var Bf=T,G6=S.type;Bf.prototype.alpha=function(c,h){return h===void 0&&(h=!1),c!==void 0&&G6(c)==="number"?h?(this._rgb[3]=c,this):new Bf([this._rgb[0],this._rgb[1],this._rgb[2],c],"rgb"):this._rgb[3]};var Y6=T;Y6.prototype.clipped=function(){return this._rgb._clipped||!1};var il=T,Z6=Ni;il.prototype.darken=function(c){c===void 0&&(c=1);var h=this,f=h.lab();return f[0]-=Z6.Kn*c,new il(f,"lab").alpha(h.alpha(),!0)},il.prototype.brighten=function(c){return c===void 0&&(c=1),this.darken(-c)},il.prototype.darker=il.prototype.darken,il.prototype.brighter=il.prototype.brighten;var q6=T;q6.prototype.get=function(c){var h=c.split("."),f=h[0],x=h[1],_=this[f]();if(x){var $=f.indexOf(x)-(f.substr(0,2)==="ok"?2:0);if($>-1)return _[$];throw new Error("unknown channel "+x+" in mode "+f)}else return _};var Gl=T,Q6=S.type,K6=Math.pow,X6=1e-7,J6=20;Gl.prototype.luminance=function(c){if(c!==void 0&&Q6(c)==="number"){if(c===0)return new Gl([0,0,0,this._rgb[3]],"rgb");if(c===1)return new Gl([255,255,255,this._rgb[3]],"rgb");var h=this.luminance(),f="rgb",x=J6,_=function(k,R){var P=k.interpolate(R,.5,f),j=P.luminance();return Math.abs(c-j)<X6||!x--?P:j>c?_(k,P):_(P,R)},$=(h>c?_(new Gl([0,0,0]),this):_(this,new Gl([255,255,255]))).rgb();return new Gl($.concat([this._rgb[3]]))}return e8.apply(void 0,this._rgb.slice(0,3))};var e8=function(c,h,f){return c=nc(c),h=nc(h),f=nc(f),.2126*c+.7152*h+.0722*f},nc=function(c){return c/=255,c<=.03928?c/12.92:K6((c+.055)/1.055,2.4)},ot={},jf=T,zf=S.type,Pi=ot,Uf=function(c,h,f){f===void 0&&(f=.5);for(var x=[],_=arguments.length-3;_-- >0;)x[_]=arguments[_+3];var $=x[0]||"lrgb";if(!Pi[$]&&!x.length&&($=Object.keys(Pi)[0]),!Pi[$])throw new Error("interpolation mode "+$+" is not defined");return zf(c)!=="object"&&(c=new jf(c)),zf(h)!=="object"&&(h=new jf(h)),Pi[$](c,h,f).alpha(c.alpha()+f*(h.alpha()-c.alpha()))},Hf=T,n8=Uf;Hf.prototype.mix=Hf.prototype.interpolate=function(c,h){h===void 0&&(h=.5);for(var f=[],x=arguments.length-2;x-- >0;)f[x]=arguments[x+2];return n8.apply(void 0,[this,c,h].concat(f))};var Wf=T;Wf.prototype.premultiply=function(c){c===void 0&&(c=!1);var h=this._rgb,f=h[3];return c?(this._rgb=[h[0]*f,h[1]*f,h[2]*f,f],this):new Wf([h[0]*f,h[1]*f,h[2]*f,f],"rgb")};var tc=T,t8=Ni;tc.prototype.saturate=function(c){c===void 0&&(c=1);var h=this,f=h.lch();return f[1]+=t8.Kn*c,f[1]<0&&(f[1]=0),new tc(f,"lch").alpha(h.alpha(),!0)},tc.prototype.desaturate=function(c){return c===void 0&&(c=1),this.saturate(-c)};var Vf=T,Gf=S.type;Vf.prototype.set=function(c,h,f){f===void 0&&(f=!1);var x=c.split("."),_=x[0],$=x[1],k=this[_]();if($){var R=_.indexOf($)-(_.substr(0,2)==="ok"?2:0);if(R>-1){if(Gf(h)=="string")switch(h.charAt(0)){case"+":k[R]+=+h;break;case"-":k[R]+=+h;break;case"*":k[R]*=+h.substr(1);break;case"/":k[R]/=+h.substr(1);break;default:k[R]=+h}else if(Gf(h)==="number")k[R]=h;else throw new Error("unsupported value for Color.set");var P=new Vf(k,_);return f?(this._rgb=P._rgb,this):P}throw new Error("unknown channel "+$+" in mode "+_)}else return k};var r8=T,l8=function(c,h,f){var x=c._rgb,_=h._rgb;return new r8(x[0]+f*(_[0]-x[0]),x[1]+f*(_[1]-x[1]),x[2]+f*(_[2]-x[2]),"rgb")};ot.rgb=l8;var a8=T,rc=Math.sqrt,Yl=Math.pow,o8=function(c,h,f){var x=c._rgb,_=x[0],$=x[1],k=x[2],R=h._rgb,P=R[0],j=R[1],H=R[2];return new a8(rc(Yl(_,2)*(1-f)+Yl(P,2)*f),rc(Yl($,2)*(1-f)+Yl(j,2)*f),rc(Yl(k,2)*(1-f)+Yl(H,2)*f),"rgb")};ot.lrgb=o8;var i8=T,s8=function(c,h,f){var x=c.lab(),_=h.lab();return new i8(x[0]+f*(_[0]-x[0]),x[1]+f*(_[1]-x[1]),x[2]+f*(_[2]-x[2]),"lab")};ot.lab=s8;var Yf=T,Zl=function(c,h,f,x){var _,$,k,R;x==="hsl"?(k=c.hsl(),R=h.hsl()):x==="hsv"?(k=c.hsv(),R=h.hsv()):x==="hcg"?(k=c.hcg(),R=h.hcg()):x==="hsi"?(k=c.hsi(),R=h.hsi()):x==="lch"||x==="hcl"?(x="hcl",k=c.hcl(),R=h.hcl()):x==="oklch"&&(k=c.oklch().reverse(),R=h.oklch().reverse());var P,j,H,K,V,te;(x.substr(0,1)==="h"||x==="oklch")&&(_=k,P=_[0],H=_[1],V=_[2],$=R,j=$[0],K=$[1],te=$[2]);var ee,be,ke,Ne;return!isNaN(P)&&!isNaN(j)?(j>P&&j-P>180?Ne=j-(P+360):j<P&&P-j>180?Ne=j+360-P:Ne=j-P,be=P+f*Ne):isNaN(P)?isNaN(j)?be=Number.NaN:(be=j,(V==1||V==0)&&x!="hsv"&&(ee=K)):(be=P,(te==1||te==0)&&x!="hsv"&&(ee=H)),ee===void 0&&(ee=H+f*(K-H)),ke=V+f*(te-V),x==="oklch"?new Yf([ke,ee,be],x):new Yf([be,ee,ke],x)},d8=Zl,Zf=function(c,h,f){return d8(c,h,f,"lch")};ot.lch=Zf,ot.hcl=Zf;var c8=T,u8=function(c,h,f){var x=c.num(),_=h.num();return new c8(x+f*(_-x),"num")};ot.num=u8;var h8=Zl,p8=function(c,h,f){return h8(c,h,f,"hcg")};ot.hcg=p8;var f8=Zl,g8=function(c,h,f){return f8(c,h,f,"hsi")};ot.hsi=g8;var m8=Zl,v8=function(c,h,f){return m8(c,h,f,"hsl")};ot.hsl=v8;var b8=Zl,y8=function(c,h,f){return b8(c,h,f,"hsv")};ot.hsv=y8;var w8=T,x8=function(c,h,f){var x=c.oklab(),_=h.oklab();return new w8(x[0]+f*(_[0]-x[0]),x[1]+f*(_[1]-x[1]),x[2]+f*(_[2]-x[2]),"oklab")};ot.oklab=x8;var C8=Zl,S8=function(c,h,f){return C8(c,h,f,"oklch")};ot.oklch=S8;var lc=T,k8=S.clip_rgb,ac=Math.pow,oc=Math.sqrt,ic=Math.PI,qf=Math.cos,Qf=Math.sin,T8=Math.atan2,_8=function(c,h,f){h===void 0&&(h="lrgb"),f===void 0&&(f=null);var x=c.length;f||(f=Array.from(new Array(x)).map(function(){return 1}));var _=x/f.reduce(function(be,ke){return be+ke});if(f.forEach(function(be,ke){f[ke]*=_}),c=c.map(function(be){return new lc(be)}),h==="lrgb")return L8(c,f);for(var $=c.shift(),k=$.get(h),R=[],P=0,j=0,H=0;H<k.length;H++)if(k[H]=(k[H]||0)*f[0],R.push(isNaN(k[H])?0:f[0]),h.charAt(H)==="h"&&!isNaN(k[H])){var K=k[H]/180*ic;P+=qf(K)*f[0],j+=Qf(K)*f[0]}var V=$.alpha()*f[0];c.forEach(function(be,ke){var Ne=be.get(h);V+=be.alpha()*f[ke+1];for(var Re=0;Re<k.length;Re++)if(!isNaN(Ne[Re]))if(R[Re]+=f[ke+1],h.charAt(Re)==="h"){var Tn=Ne[Re]/180*ic;P+=qf(Tn)*f[ke+1],j+=Qf(Tn)*f[ke+1]}else k[Re]+=Ne[Re]*f[ke+1]});for(var te=0;te<k.length;te++)if(h.charAt(te)==="h"){for(var ee=T8(j/R[te],P/R[te])/ic*180;ee<0;)ee+=360;for(;ee>=360;)ee-=360;k[te]=ee}else k[te]=k[te]/R[te];return V/=x,new lc(k,h).alpha(V>.99999?1:V,!0)},L8=function(c,h){for(var f=c.length,x=[0,0,0,0],_=0;_<c.length;_++){var $=c[_],k=h[_]/f,R=$._rgb;x[0]+=ac(R[0],2)*k,x[1]+=ac(R[1],2)*k,x[2]+=ac(R[2],2)*k,x[3]+=R[3]*k}return x[0]=oc(x[0]),x[1]=oc(x[1]),x[2]=oc(x[2]),x[3]>.9999999&&(x[3]=1),new lc(k8(x))},Nt=O,ql=S.type,$8=Math.pow,sc=function(c){var h="rgb",f=Nt("#ccc"),x=0,_=[0,1],$=[],k=[0,0],R=!1,P=[],j=!1,H=0,K=1,V=!1,te={},ee=!0,be=1,ke=function(G){if(G=G||["#fff","#000"],G&&ql(G)==="string"&&Nt.brewer&&Nt.brewer[G.toLowerCase()]&&(G=Nt.brewer[G.toLowerCase()]),ql(G)==="array"){G.length===1&&(G=[G[0],G[0]]),G=G.slice(0);for(var se=0;se<G.length;se++)G[se]=Nt(G[se]);$.length=0;for(var xe=0;xe<G.length;xe++)$.push(xe/(G.length-1))}return Kn(),P=G},Ne=function(G){if(R!=null){for(var se=R.length-1,xe=0;xe<se&&G>=R[xe];)xe++;return xe-1}return 0},Re=function(G){return G},Tn=function(G){return G},Cn=function(G,se){var xe,ye;if(se==null&&(se=!1),isNaN(G)||G===null)return f;if(se)ye=G;else if(R&&R.length>2){var _n=Ne(G);ye=_n/(R.length-2)}else K!==H?ye=(G-H)/(K-H):ye=1;ye=Tn(ye),se||(ye=Re(ye)),be!==1&&(ye=$8(ye,be)),ye=k[0]+ye*(1-k[0]-k[1]),ye=Math.min(1,Math.max(0,ye));var He=Math.floor(ye*1e4);if(ee&&te[He])xe=te[He];else{if(ql(P)==="array")for(var Ee=0;Ee<$.length;Ee++){var Fe=$[Ee];if(ye<=Fe){xe=P[Ee];break}if(ye>=Fe&&Ee===$.length-1){xe=P[Ee];break}if(ye>Fe&&ye<$[Ee+1]){ye=(ye-Fe)/($[Ee+1]-Fe),xe=Nt.interpolate(P[Ee],P[Ee+1],ye,h);break}}else ql(P)==="function"&&(xe=P(ye));ee&&(te[He]=xe)}return xe},Kn=function(){return te={}};ke(c);var Le=function(G){var se=Nt(Cn(G));return j&&se[j]?se[j]():se};return Le.classes=function(G){if(G!=null){if(ql(G)==="array")R=G,_=[G[0],G[G.length-1]];else{var se=Nt.analyze(_);G===0?R=[se.min,se.max]:R=Nt.limits(se,"e",G)}return Le}return R},Le.domain=function(G){if(!arguments.length)return _;H=G[0],K=G[G.length-1],$=[];var se=P.length;if(G.length===se&&H!==K)for(var xe=0,ye=Array.from(G);xe<ye.length;xe+=1){var _n=ye[xe];$.push((_n-H)/(K-H))}else{for(var He=0;He<se;He++)$.push(He/(se-1));if(G.length>2){var Ee=G.map(function(Oe,De){return De/(G.length-1)}),Fe=G.map(function(Oe){return(Oe-H)/(K-H)});Fe.every(function(Oe,De){return Ee[De]===Oe})||(Tn=function(Oe){if(Oe<=0||Oe>=1)return Oe;for(var De=0;Oe>=Fe[De+1];)De++;var It=(Oe-Fe[De])/(Fe[De+1]-Fe[De]),kr=Ee[De]+It*(Ee[De+1]-Ee[De]);return kr})}}return _=[H,K],Le},Le.mode=function(G){return arguments.length?(h=G,Kn(),Le):h},Le.range=function(G,se){return ke(G),Le},Le.out=function(G){return j=G,Le},Le.spread=function(G){return arguments.length?(x=G,Le):x},Le.correctLightness=function(G){return G==null&&(G=!0),V=G,Kn(),V?Re=function(se){for(var xe=Cn(0,!0).lab()[0],ye=Cn(1,!0).lab()[0],_n=xe>ye,He=Cn(se,!0).lab()[0],Ee=xe+(ye-xe)*se,Fe=He-Ee,Oe=0,De=1,It=20;Math.abs(Fe)>.01&&It-- >0;)(function(){return _n&&(Fe*=-1),Fe<0?(Oe=se,se+=(De-se)*.5):(De=se,se+=(Oe-se)*.5),He=Cn(se,!0).lab()[0],Fe=He-Ee})();return se}:Re=function(se){return se},Le},Le.padding=function(G){return G!=null?(ql(G)==="number"&&(G=[G,G]),k=G,Le):k},Le.colors=function(G,se){arguments.length<2&&(se="hex");var xe=[];if(arguments.length===0)xe=P.slice(0);else if(G===1)xe=[Le(.5)];else if(G>1){var ye=_[0],_n=_[1]-ye;xe=N8(0,G,!1).map(function(De){return Le(ye+De/(G-1)*_n)})}else{c=[];var He=[];if(R&&R.length>2)for(var Ee=1,Fe=R.length,Oe=1<=Fe;Oe?Ee<Fe:Ee>Fe;Oe?Ee++:Ee--)He.push((R[Ee-1]+R[Ee])*.5);else He=_;xe=He.map(function(De){return Le(De)})}return Nt[se]&&(xe=xe.map(function(De){return De[se]()})),xe},Le.cache=function(G){return G!=null?(ee=G,Le):ee},Le.gamma=function(G){return G!=null?(be=G,Le):be},Le.nodata=function(G){return G!=null?(f=Nt(G),Le):f},Le};function N8(c,h,f){for(var x=[],_=c<h,$=f?_?h+1:h-1:h,k=c;_?k<$:k>$;_?k++:k--)x.push(k);return x}var ao=T,E8=sc,I8=function(c){for(var h=[1,1],f=1;f<c;f++){for(var x=[1],_=1;_<=h.length;_++)x[_]=(h[_]||0)+h[_-1];h=x}return h},M8=function(c){var h,f,x,_,$,k,R;if(c=c.map(function(V){return new ao(V)}),c.length===2)h=c.map(function(V){return V.lab()}),$=h[0],k=h[1],_=function(V){var te=[0,1,2].map(function(ee){return $[ee]+V*(k[ee]-$[ee])});return new ao(te,"lab")};else if(c.length===3)f=c.map(function(V){return V.lab()}),$=f[0],k=f[1],R=f[2],_=function(V){var te=[0,1,2].map(function(ee){return(1-V)*(1-V)*$[ee]+2*(1-V)*V*k[ee]+V*V*R[ee]});return new ao(te,"lab")};else if(c.length===4){var P;x=c.map(function(V){return V.lab()}),$=x[0],k=x[1],R=x[2],P=x[3],_=function(V){var te=[0,1,2].map(function(ee){return(1-V)*(1-V)*(1-V)*$[ee]+3*(1-V)*(1-V)*V*k[ee]+3*(1-V)*V*V*R[ee]+V*V*V*P[ee]});return new ao(te,"lab")}}else if(c.length>=5){var j,H,K;j=c.map(function(V){return V.lab()}),K=c.length-1,H=I8(K),_=function(V){var te=1-V,ee=[0,1,2].map(function(be){return j.reduce(function(ke,Ne,Re){return ke+H[Re]*Math.pow(te,K-Re)*Math.pow(V,Re)*Ne[be]},0)});return new ao(ee,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return _},R8=function(c){var h=M8(c);return h.scale=function(){return E8(h)},h},dc=O,Et=function(c,h,f){if(!Et[f])throw new Error("unknown blend mode "+f);return Et[f](c,h)},Cr=function(c){return function(h,f){var x=dc(f).rgb(),_=dc(h).rgb();return dc.rgb(c(x,_))}},Sr=function(c){return function(h,f){var x=[];return x[0]=c(h[0],f[0]),x[1]=c(h[1],f[1]),x[2]=c(h[2],f[2]),x}},P8=function(c){return c},A8=function(c,h){return c*h/255},F8=function(c,h){return c>h?h:c},O8=function(c,h){return c>h?c:h},D8=function(c,h){return 255*(1-(1-c/255)*(1-h/255))},B8=function(c,h){return h<128?2*c*h/255:255*(1-2*(1-c/255)*(1-h/255))},j8=function(c,h){return 255*(1-(1-h/255)/(c/255))},z8=function(c,h){return c===255?255:(c=255*(h/255)/(1-c/255),c>255?255:c)};Et.normal=Cr(Sr(P8)),Et.multiply=Cr(Sr(A8)),Et.screen=Cr(Sr(D8)),Et.overlay=Cr(Sr(B8)),Et.darken=Cr(Sr(F8)),Et.lighten=Cr(Sr(O8)),Et.dodge=Cr(Sr(z8)),Et.burn=Cr(Sr(j8));for(var U8=Et,cc=S.type,H8=S.clip_rgb,W8=S.TWOPI,V8=Math.pow,G8=Math.sin,Y8=Math.cos,Kf=O,Z8=function(c,h,f,x,_){c===void 0&&(c=300),h===void 0&&(h=-1.5),f===void 0&&(f=1),x===void 0&&(x=1),_===void 0&&(_=[0,1]);var $=0,k;cc(_)==="array"?k=_[1]-_[0]:(k=0,_=[_,_]);var R=function(P){var j=W8*((c+120)/360+h*P),H=V8(_[0]+k*P,x),K=$!==0?f[0]+P*$:f,V=K*H*(1-H)/2,te=Y8(j),ee=G8(j),be=H+V*(-.14861*te+1.78277*ee),ke=H+V*(-.29227*te-.90649*ee),Ne=H+V*(1.97294*te);return Kf(H8([be*255,ke*255,Ne*255,1]))};return R.start=function(P){return P==null?c:(c=P,R)},R.rotations=function(P){return P==null?h:(h=P,R)},R.gamma=function(P){return P==null?x:(x=P,R)},R.hue=function(P){return P==null?f:(f=P,cc(f)==="array"?($=f[1]-f[0],$===0&&(f=f[1])):$=0,R)},R.lightness=function(P){return P==null?_:(cc(P)==="array"?(_=P,k=P[1]-P[0]):(_=[P,P],k=0),R)},R.scale=function(){return Kf.scale(R)},R.hue(f),R},q8=T,Q8="0123456789abcdef",K8=Math.floor,X8=Math.random,J8=function(){for(var c="#",h=0;h<6;h++)c+=Q8.charAt(K8(X8()*16));return new q8(c,"hex")},uc=p,Xf=Math.log,eb=Math.pow,nb=Math.floor,tb=Math.abs,Jf=function(c,h){h===void 0&&(h=null);var f={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return uc(c)==="object"&&(c=Object.values(c)),c.forEach(function(x){h&&uc(x)==="object"&&(x=x[h]),x!=null&&!isNaN(x)&&(f.values.push(x),f.sum+=x,x<f.min&&(f.min=x),x>f.max&&(f.max=x),f.count+=1)}),f.domain=[f.min,f.max],f.limits=function(x,_){return e1(f,x,_)},f},e1=function(c,h,f){h===void 0&&(h="equal"),f===void 0&&(f=7),uc(c)=="array"&&(c=Jf(c));var x=c.min,_=c.max,$=c.values.sort(function(pc,fc){return pc-fc});if(f===1)return[x,_];var k=[];if(h.substr(0,1)==="c"&&(k.push(x),k.push(_)),h.substr(0,1)==="e"){k.push(x);for(var R=1;R<f;R++)k.push(x+R/f*(_-x));k.push(_)}else if(h.substr(0,1)==="l"){if(x<=0)throw new Error("Logarithmic scales are only possible for values > 0");var P=Math.LOG10E*Xf(x),j=Math.LOG10E*Xf(_);k.push(x);for(var H=1;H<f;H++)k.push(eb(10,P+H/f*(j-P)));k.push(_)}else if(h.substr(0,1)==="q"){k.push(x);for(var K=1;K<f;K++){var V=($.length-1)*K/f,te=nb(V);if(te===V)k.push($[te]);else{var ee=V-te;k.push($[te]*(1-ee)+$[te+1]*ee)}}k.push(_)}else if(h.substr(0,1)==="k"){var be,ke=$.length,Ne=new Array(ke),Re=new Array(f),Tn=!0,Cn=0,Kn=null;Kn=[],Kn.push(x);for(var Le=1;Le<f;Le++)Kn.push(x+Le/f*(_-x));for(Kn.push(_);Tn;){for(var G=0;G<f;G++)Re[G]=0;for(var se=0;se<ke;se++)for(var xe=$[se],ye=Number.MAX_VALUE,_n=void 0,He=0;He<f;He++){var Ee=tb(Kn[He]-xe);Ee<ye&&(ye=Ee,_n=He),Re[_n]++,Ne[se]=_n}for(var Fe=new Array(f),Oe=0;Oe<f;Oe++)Fe[Oe]=null;for(var De=0;De<ke;De++)be=Ne[De],Fe[be]===null?Fe[be]=$[De]:Fe[be]+=$[De];for(var It=0;It<f;It++)Fe[It]*=1/Re[It];Tn=!1;for(var kr=0;kr<f;kr++)if(Fe[kr]!==Kn[kr]){Tn=!0;break}Kn=Fe,Cn++,Cn>200&&(Tn=!1)}for(var Tr={},Ql=0;Ql<f;Ql++)Tr[Ql]=[];for(var Kl=0;Kl<ke;Kl++)be=Ne[Kl],Tr[be].push($[Kl]);for(var lr=[],sl=0;sl<f;sl++)lr.push(Tr[sl][0]),lr.push(Tr[sl][Tr[sl].length-1]);lr=lr.sort(function(pc,fc){return pc-fc}),k.push(lr[0]);for(var oo=1;oo<lr.length;oo+=2){var dl=lr[oo];!isNaN(dl)&&k.indexOf(dl)===-1&&k.push(dl)}}return k},n1={analyze:Jf,limits:e1},t1=T,rb=function(c,h){c=new t1(c),h=new t1(h);var f=c.luminance(),x=h.luminance();return f>x?(f+.05)/(x+.05):(x+.05)/(f+.05)},r1=T,rr=Math.sqrt,cn=Math.pow,lb=Math.min,ab=Math.max,l1=Math.atan2,a1=Math.abs,Ai=Math.cos,o1=Math.sin,ob=Math.exp,i1=Math.PI,ib=function(c,h,f,x,_){f===void 0&&(f=1),x===void 0&&(x=1),_===void 0&&(_=1);var $=function(dl){return 360*dl/(2*i1)},k=function(dl){return 2*i1*dl/360};c=new r1(c),h=new r1(h);var R=Array.from(c.lab()),P=R[0],j=R[1],H=R[2],K=Array.from(h.lab()),V=K[0],te=K[1],ee=K[2],be=(P+V)/2,ke=rr(cn(j,2)+cn(H,2)),Ne=rr(cn(te,2)+cn(ee,2)),Re=(ke+Ne)/2,Tn=.5*(1-rr(cn(Re,7)/(cn(Re,7)+cn(25,7)))),Cn=j*(1+Tn),Kn=te*(1+Tn),Le=rr(cn(Cn,2)+cn(H,2)),G=rr(cn(Kn,2)+cn(ee,2)),se=(Le+G)/2,xe=$(l1(H,Cn)),ye=$(l1(ee,Kn)),_n=xe>=0?xe:xe+360,He=ye>=0?ye:ye+360,Ee=a1(_n-He)>180?(_n+He+360)/2:(_n+He)/2,Fe=1-.17*Ai(k(Ee-30))+.24*Ai(k(2*Ee))+.32*Ai(k(3*Ee+6))-.2*Ai(k(4*Ee-63)),Oe=He-_n;Oe=a1(Oe)<=180?Oe:He<=_n?Oe+360:Oe-360,Oe=2*rr(Le*G)*o1(k(Oe)/2);var De=V-P,It=G-Le,kr=1+.015*cn(be-50,2)/rr(20+cn(be-50,2)),Tr=1+.045*se,Ql=1+.015*se*Fe,Kl=30*ob(-cn((Ee-275)/25,2)),lr=2*rr(cn(se,7)/(cn(se,7)+cn(25,7))),sl=-lr*o1(2*k(Kl)),oo=rr(cn(De/(f*kr),2)+cn(It/(x*Tr),2)+cn(Oe/(_*Ql),2)+sl*(It/(x*Tr))*(Oe/(_*Ql)));return ab(0,lb(100,oo))},s1=T,sb=function(c,h,f){f===void 0&&(f="lab"),c=new s1(c),h=new s1(h);var x=c.get(f),_=h.get(f),$=0;for(var k in x){var R=(x[k]||0)-(_[k]||0);$+=R*R}return Math.sqrt($)},db=T,cb=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];try{return new(Function.prototype.bind.apply(db,[null].concat(c))),!0}catch{return!1}},d1=O,c1=sc,ub={cool:function(){return c1([d1.hsl(180,1,.9),d1.hsl(250,.7,.4)])},hot:function(){return c1(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Fi={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},hc=0,u1=Object.keys(Fi);hc<u1.length;hc+=1){var h1=u1[hc];Fi[h1.toLowerCase()]=Fi[h1]}var hb=Fi,xn=O;xn.average=_8,xn.bezier=R8,xn.blend=U8,xn.cubehelix=Z8,xn.mix=xn.interpolate=Uf,xn.random=J8,xn.scale=sc,xn.analyze=n1.analyze,xn.contrast=rb,xn.deltaE=ib,xn.distance=sb,xn.limits=n1.limits,xn.valid=cb,xn.scales=ub,xn.colors=kf,xn.brewer=hb;var pb=xn;return pb})})(yv);var BT=yv.exports;const jT=Xt(BT);function zT(e){const{h:n,s:t,l:r}=e;return jT.hsl(n,t/100,r/100)}const UT=e=>zT(e).luminance(),wv=e=>UT(e)<.5,_a=({label:e,checked:n,toggle:t})=>d("label",{className:"checkbox no-focus inline",children:[l("input",{type:"checkbox",checked:n,onChange:t}),e]}),xv=`// redefine any of the following hues to taste...
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
`,HT=()=>{const[e,n]=B.useState({names:!1,info:!1,show5s:!1}),t=i=>n(s=>({...s,[i]:!s[i]})),r=()=>t("names"),a=()=>t("info"),o=()=>t("show5s");return d("div",{className:"prose",children:[l("h1",{children:"Standard Colors"}),l("p",{children:"The following greyscale ranges are also defined."}),d("div",{className:"flex space end",children:[l("h2",{children:"Greyscale Ranges"}),d("div",{className:"text-right color-options",children:[l(_a,{label:"Show Names",checked:e.names,toggle:r}),l(_a,{label:"Show Info",checked:e.info,toggle:a}),l(_a,{label:"Show 5s",checked:e.show5s,toggle:o})]})]}),l("div",{className:`ranges ${e.names?"names":"nameless"}`,children:rd.filter(i=>Yr.ranges[i].greyscale).map(i=>l(WT,{uri:i,range:Yr.ranges[i],options:e},i))}),l("h2",{children:"Brand Hue"}),d("p",{children:["The greyscale ranges are designed to based on your primary brand color. The ",l("code",{children:"grey"})," range is desaturated to around 5%.  The"," ",l("code",{children:"grey20"})," and ",l("code",{children:"grey40"})," ranges are saturated to around 20% and 40% respectively."]}),d("p",{children:["The brand color for this website is ",l("code",{children:"violet"})," which is why these greyscales have a violet tinge to them."]}),d("p",{children:["Each of the colours show above has a corresponding SCSS variable composed of the color name and stop delimited by a hyphen, e.g."," ",l("code",{children:"$red-0"})," through to ",l("code",{children:"$grey-100"}),".  They are also defined as CSS custom properties, e.g. ",l("code",{children:"--red-0"})," through to ",l("code",{children:"--grey-100"}),"."]}),d("p",{children:["Each range of colors is built from a base hue.  These are defined in SASS variables using the SASS ",l("code",{children:"!default"})," flag.  If you want to adjust the hues you can set any of these SASS variables before importing the main ",l("code",{children:"badger-ui.scss"})," component."]}),l(Me,{code:xv,caption:"Customising Hues",language:"scss",expand:!0}),l("h2",{children:"TODO"}),d("ul",{children:[l("li",{children:"Editing or updating a palette using Badger Color"}),l("li",{children:"Expanding the palette into SCSS files"}),l("li",{children:"Customising the palette using SCSS variables"}),l("li",{children:"Customising the color hues"}),l("li",{children:"Defining your brand color"}),l("li",{children:"Adding/editing CSS scopes"}),l("li",{children:"Including or omitting colors"})]})]})},WT=({uri:e,range:n,options:t})=>d("div",{className:"range",children:[t.names&&l("h3",{children:n.name}),l("div",{className:"swatches",children:yi(0,100,t.show5s?5:10).map(r=>l(VT,{uri:e,range:n,stop:r,options:t},r))})]}),VT=({uri:e,range:n,stop:t,options:r})=>{const a=n.stops[t];return l("div",{className:`swatch ${wv(a)?"dark":"light"}`,style:{backgroundColor:`var(--${e}-${t})`},children:r.info&&l(Cv,{uri:e,stop:t,color:a})})},Cv=({uri:e,stop:n,color:t})=>d("div",{children:[d("div",{className:"stop",children:[e,"-",n]}),d("div",{className:"specs",children:[t.hex,l("br",{}),"h:",t.h,"°",l("br",{}),"s:",t.s,"%",l("br",{}),"l:",t.l,"%"]})]}),GT=Object.freeze(Object.defineProperty({__proto__:null,Info:Cv,default:HT},Symbol.toStringTag,{value:"Module"})),YT=`# Path to the palette data file (exported from
# badger-color) relative to the project root
palette: config/my-palette.json

# Path to the SCSS output directory, also
# relative to the project root
output: styles/color

# Your default brand color
brandColor: blue
`,ZT=`{
  "scripts": {
    "palette": "badger-css-palette-scss -c config/export-my-palette.yaml -v"
  }
}`,qT=`## using npm
$ npm run palette

## using yarn
$ yarn run palette

## using pnpm
$ pnpm run palette`,QT=`// Load the default helpers and configuration files
@import '@abw/badger-css/styles/helpers/all.scss';
@import '@abw/badger-css/styles/config/all.scss';

// Load your custom palette
@import "color/palette.scss";

// Then the default utilities, form styles and other components
@import "@abw/badger-css/styles/utilities/all.scss";
@import "@abw/badger-css/styles/forms/all.scss";
@import "@abw/badger-css/styles/components/all.scss";
`,KT=`// Replace this:
// @import "@abw/badger-css/styles/badger.scss";

// With something like this (you may need to adjust
// the path prefix, depending on where you're loading
// it from, e.g. "../styles/badger.scss")
@import "styles/badger.scss";`,ie=({children:e,align:n="top"})=>l("div",{className:`grid-2 gap-h-8 stack-desktop ${n}`,style:{"--prose-width":"100%"},children:e}),XT=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Custom Palette"}),d(ie,{children:[d("div",{children:[l("p",{children:"The pre-defined color palette is a good starting point for building a web site.  There's a certain amount of flexibility built in to the SASS source files: you can adjust the hues of the different color ranges, define your own brand color or colors, and specify which of the color ranges you want to include (and implicitly, which ones you don't want)."}),d("p",{children:["When you need a bit more flexibility you can head over to the"," ",l("a",{href:"https://abw.github.io/badger-color/",children:"Badger Color"})," web app and either customise one of the standard palettes or design your own palette from scratch."]})]}),d("div",{children:[l("p",{children:"You can then download the palette data as a JSON file and use the script provided to generate the SCSS configuration files for your palette, ready to integrate into Badger CSS.  At any point you can upload the palette back into Badger Color, make some adjustments, download it again and repeat the process."}),d("p",{children:["You'll need to have ",l("code",{children:"@abw/badger-css"})," installed as a developer dependency for your project for these next steps to work. See the ",l(oe,{to:"/getting-started/installation",text:"installation"})," ","page for details (TL;DR: ",l("code",{children:"npm add -D @abw/badger-css"})," or the equivalent with ",l("code",{children:"yarn"})," or ",l("code",{children:"pnpm"}),")."]})]})]}),l("h2",{children:"Palette Configuration File"}),d(ie,{children:[d("div",{children:[d("p",{children:["For these examples, we'll assume that you've download your custom palette file and saved it in a ",l("code",{children:"config"})," directory under your project root as ",l("code",{children:"my-palette.json"}),".  It doesn't have to be in the ",l("code",{children:"config"})," directory - you can put it anywhere you like in your project."]}),d("p",{children:["You then need to create a configuration file like the one shown here.  It can be a YAML file or JSON file, you can call it anything you like (as long as it has a ",l("code",{children:".yaml"})," or ",l("code",{children:".json"})," ","file extension), and you can put it anywhere you like in your project. Here we'll assume it's called"," ",l("code",{children:"export-my-palette.yaml"})," and is also located in the ",l("code",{children:"config"})," directory under the project root."]}),d("p",{children:["You should define ",l("code",{children:"palette"})," to be the path to your palette data file (relative to the project root), and"," ",l("code",{children:"output"})," to be a path to the directory where you want the SCSS files to be written (also relative to the project root)."]}),d("p",{children:["You can also define your brand color as ",l("code",{children:"brandColor"}),". There are other configuration options you can specify but we'll keep it simple for now."]})]}),l(Me,{code:YT,caption:"config/export-my-palette.yaml",language:"yaml",expand:!0})]}),d("h2",{children:["Adding a ",l("code",{children:"package.json"})," Script"]}),d(ie,{children:[d("div",{children:[d("p",{children:["Then add a line to the ",l("code",{children:"scripts"})," section of your"," ",l("code",{children:"package.json"})," file like this."]}),d("p",{children:["The ",l("code",{children:"-c"})," (or ",l("code",{children:"--config"})," if you prefer verbosity) option tells it where your config file is located.  The ",l("code",{children:"-v"})," ","(or ",l("code",{children:"--verbose"}),") option enables messages to tell you what it's doing.  You can leave this off if you prefer."]})]}),l(Me,{code:ZT,caption:"package.json",language:"json",expand:!0})]}),l("h2",{children:"Export the Palette as SCSS"}),d(ie,{children:[d("div",{children:[d("p",{children:["You can then ",l("code",{children:"run palette"})," from the command line using"," ",l("code",{children:"npm"}),", ",l("code",{children:"yarn"})," or ",l("code",{children:"pnpm"}),", depending on which package manager you're using."]}),d("p",{children:["If you've got the verbose mode enabled, you should see a message reporting each color range being written to a file in"," ",l("code",{children:"style/color/range/XXX"}),", and the main palette index file being written to ",l("code",{children:"style/color/palette.scss"}),"."]})]}),l(Me,{code:qT,caption:"Exporting the palette",language:"bash",expand:!0})]}),d("h2",{children:["Defining a Custom ",l("code",{children:"badger.scss"})," File"]}),d(ie,{children:[d("div",{children:[d("p",{children:["Now you need to define your own version of the main"," ",l("code",{children:"badger.scss"})," which loads your palette instead of the default one."]}),d("p",{children:["In this example we'll assume that it's saved as",l("code",{children:"badger.scss"})," in the ",l("code",{children:"styles"})," directory, alongside the newly created ",l("code",{children:"color"})," directory that has been exported from the palette."]}),l("p",{children:"This is also a good place to set any SASS variables that change the defaults for Badger CSS.  They should go at the top of this file."})]}),l(Me,{code:QT,caption:"Custom badger.scss",language:"scss",expand:!0})]}),d("h2",{children:["Replace the Standard ",l("code",{children:"badger.scss"})," File"]}),d(ie,{children:[l("div",{children:d("p",{children:["Now you just need to include the new file ",l("code",{children:"badger.scss"})," ","into your website or main stylesheet.  If you were previously loading the default ",l("code",{children:"badger.scss"})," then should change the path to point to your new local ",l("code",{children:"badger.scss"})," file."]})}),l(Me,{code:KT,caption:"Including your badger.scss",language:"scss",expand:!0})]})]}),JT=Object.freeze(Object.defineProperty({__proto__:null,default:XT},Symbol.toStringTag,{value:"Module"})),e_=`// define the hues for the greyscale colors...
$grey-hue:   40;
$grey20-hue: 40;
$grey40-hue: 40;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,n_=()=>{const[e,n]=B.useState({names:!1,info:!1,show5s:!1}),t=i=>n(s=>({...s,[i]:!s[i]})),r=()=>t("names"),a=()=>t("info"),o=()=>t("show5s");return d("div",{className:"prose flow",children:[l("h1",{children:"Standard Colors"}),d(ie,{children:[d("p",{children:["The following standard color ranges are defined.  This palette was created using ",l("a",{href:"https://abw.github.io/badger-color",children:"Badger Color"}),", a companion to this library.  You can use it to clone and update this palette or to create your own palettes from scratch."]}),d("p",{children:["Each color range is divided into color ",l("em",{children:"stops"}),".  They range in increments of 5 from ",l("code",{children:"0"})," which is very close to black, up to"," ",l("code",{children:"100"}),", which is very close to white."]})]}),l(c0,{title:"Color Ranges",colors:rd.filter(i=>!Yr.ranges[i].greyscale),options:e,toggleNames:r,toggleInfo:a,toggleShow5s:o}),l("h2",{children:"Range Hues"}),l(qt,{code:xv,caption:"Customising Hues",language:"scss",expand:!0,children:d("p",{children:["Each range of colors is built from a base hue.  These are defined in SASS variables using the SASS ",l("code",{children:"!default"})," flag.  If you want to adjust the hues you can set any of these SASS variables before importing the main ",l("code",{children:"badger.scss"})," component."]})}),l(c0,{title:"Greyscale Ranges",colors:rd.filter(i=>Yr.ranges[i].greyscale),options:e,toggleNames:r,toggleInfo:a,toggleShow5s:o}),d(qt,{code:e_,caption:"Customising Greyscale Hues",language:"scss",className:"mar-t-8",expand:!0,children:[d("p",{children:["Three greyscale color ranges are also defined.  They are designed to be based on your primary brand color. The ",l("code",{children:"grey"})," range is desaturated to around 5%.  The"," ",l("code",{children:"grey20"})," and ",l("code",{children:"grey40"})," ranges are saturated to around 20% and 40% respectively."]}),d("p",{children:["The brand color for this website is ",l("code",{children:"violet"})," which is why these greyscales have a violet tinge to them.  You can set the hues for these color ranges using the ",l("code",{children:"$grey-hue"}),","," ",l("code",{children:"$grey20-hue"})," and ",l("code",{children:"$grey40-hue"})," variables."]})]}),d("p",{className:"mar-t-4",children:[l(oe,{to:"/colors/brand",text:"Read on"})," to see how you can define your own brand color and automatically get greyscales to match."]})]})},c0=({title:e,colors:n,options:t,toggleNames:r,toggleInfo:a,toggleShow5s:o})=>d(Rt,{children:[d("div",{className:"flex space end",children:[l("h2",{children:e}),d("div",{className:"text-right color-options",children:[l(_a,{label:"Show Names",checked:t.names,toggle:r}),l(_a,{label:"Show Info",checked:t.info,toggle:a}),l(_a,{label:"Show 5s",checked:t.show5s,toggle:o})]})]}),l("div",{className:`ranges ${t.names?"names":"nameless"}`,children:n.map(i=>l(t_,{uri:i,range:Yr.ranges[i],options:t},i))})]}),t_=({uri:e,range:n,options:t})=>d("div",{className:"range",children:[t.names&&l("h3",{children:n.name}),l("div",{className:"swatches",children:yi(0,100,t.show5s?5:10).map(r=>l(r_,{uri:e,range:n,stop:r,options:t},r))})]}),r_=({uri:e,range:n,stop:t,options:r})=>{const a=n.stops[t];return l("div",{className:`swatch ${wv(a)?"dark":"light"}`,style:{backgroundColor:`var(--${e}-${t})`},children:r.info&&l(Sv,{uri:e,stop:t,color:a})})},Sv=({uri:e,stop:n,color:t})=>d("div",{children:[d("div",{className:"stop",children:[e,"-",n]}),d("div",{className:"specs",children:[t.hex,l("br",{}),"h:",t.h,"°",l("br",{}),"s:",t.s,"%",l("br",{}),"l:",t.l,"%"]})]}),l_=Object.freeze(Object.defineProperty({__proto__:null,Info:Sv,default:n_},Symbol.toStringTag,{value:"Module"})),I=({Component:e,code:n,html:t,children:r,className:a="",caption:o,fixed:i,expand:s,language:u})=>d("div",{className:`example grid-2 gap-8 stack-desktop ${a}`,children:[l("div",{className:"source",children:l(Me,{caption:o,code:n||t,expand:s,fixed:i,language:t?"html":u})}),!!r&&l("div",{className:"interim",children:r}),e?d("div",{className:"output",children:[l("h4",{className:"caption",children:"Output"}),l(e,{})]}):null,t?d("div",{className:"output",children:[l("h4",{className:"caption",children:"Output"}),l("div",{dangerouslySetInnerHTML:{__html:t}})]}):null]}),a_=`<div class="
  violet border pad-4 bdr-2 bdw-2
  fgc-40 bgc-85 hdc-30 bdc-70
">
  <h3>Colors</h3>
  Foreground color violet-40<br/>
  Background color violet-85<br/>
  Heading color violet-30<br/>
  Border color violet-70<br/>
</div>
`,o_=`<div class="
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
`,i_=`<div class="red grid-3 gap-2">
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
`,s_=`<!-- Explicit color range -->
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
</div>`,d_=`<div>
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
`,Il=({title:e="Note",children:n,className:t=""})=>d("div",{className:`info alert flex top border small ${t}`,children:[l(Fa,{name:"info",className:"side-icon"}),d("div",{children:[l("h3",{children:e}),n]})]}),xs=({scope:e,to:n,from:t="color",size:r="smallish",abbreviate:a=!1})=>d("table",{className:`${e} ${r} celled striped properties mar-b-8`,children:[l("thead",{children:d("tr",{children:[l("th",{children:"Variable"}),l("th",{children:"Mapped To"})]})}),l("tbody",{children:yi(0,100,5).map(o=>l(c_,{n:o,from:t,to:n,abbreviate:a},o))})]}),c_=({from:e,to:n,n:t,abbreviate:r})=>!r||t<=10||t>=90?d("tr",{children:[d("td",{className:"font-mono nowrap",children:["--",e,"-",t]}),d("td",{className:"font-mono nowrap",children:["--",n,"-",t]})]},t):t===15?d("tr",{children:[l("td",{className:"font-mono nowrap",children:"..etc..."}),l("td",{className:"font-mono nowrap",children:"...etc..."})]},t):null,u_=["red","brown","orange"],h_=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Color Utilities"}),l("h2",{children:"Color Classes"}),d(ie,{children:[d("p",{children:["Each of the color ranges defined in your palette has a corresponding class. For example, the ",l("code",{children:"red"})," class can be used to select the red color range.  Some of the colors also have semantic aliases, e.g. ",l("code",{children:"error"})," and ",l("code",{children:"invalid"})," are aliases for"," ",l("code",{children:"red"}),"."]}),d("p",{children:["Selecting a color range doesn't have much of a visible effect by itself.  The important things is that it maps the ",l("code",{children:"--color-N"})," ","CSS custom properties to the equivalent stops from the selected color range.  For example, in the scope of the ",l("code",{children:"red"})," CSS class, the"," ",l("code",{children:"--color-0"})," property is mapped to ",l("code",{children:"--red-0"}),","," ",l("code",{children:"--color-5"})," is mapped to ",l("code",{children:"--red-5"}),","," ",l("code",{children:"--color-10"})," to ",l("code",{children:"--red-10"})," and so on up to 100."]})]}),d("div",{className:"small flex gap-4",children:[u_.map(e=>d("div",{children:[d("h3",{className:"font-mono mar-b-2",children:[".",e," ","{"," ... ","}"]}),l(xs,{scope:e,to:e,abbreviate:!0})]},e)),l("div",{children:l("h3",{className:"font-mono mar-b-2",children:"...etc"})})]}),l("h2",{children:"Foreground, Background and Border Colors"}),d(ie,{children:[d("p",{children:["The ",l("code",{children:"fgc-N"}),", ",l("code",{children:"bgc-N"}),", ",l("code",{children:"hdc-N"})," and"," ",l("code",{children:"bdc-N"})," classes can be used to select a stop from the color range for the foreground color, background color, heading color and border color, respectively."]}),d("p",{children:["For example, the ",l("code",{children:"bgc-80"})," CSS class will set the background color to whatever color is mapped to ",l("code",{children:"--color-80"}),".  In the scope of the ",l("code",{children:"red"})," CSS class, that will be ",l("code",{children:"--red-80"}),"."]})]}),d("div",{className:"grid-2 gap-8 stack-desktop",children:[l(u0,{classes:[["fgc-N","--color",d(Rt,{children:[l("b",{children:"f"}),"ore",l("b",{children:"g"}),"round ",l("b",{children:"c"}),"olor stop ",l("code",{children:"N"})]})],["bgc-N","--background-color",d(Rt,{children:[l("b",{children:"b"}),"ack",l("b",{children:"g"}),"round ",l("b",{children:"c"}),"olor stop ",l("code",{children:"N"})]})],["hdc-N","--heading-color",d(Rt,{children:[l("b",{children:"h"}),"ea",l("b",{children:"d"}),"ing ",l("b",{children:"c"}),"olor stop ",l("code",{children:"N"})]})],["bdc-N","--border-color",d(Rt,{children:[l("b",{children:"b"}),"or",l("b",{children:"d"}),"er ",l("b",{children:"c"}),"olor stop ",l("code",{children:"N"})]})]]}),l("div",{children:d(Il,{children:["The ",l("code",{children:"bdc-N"})," classes are designed to be used in conjunction with the ",l("code",{children:"border"})," class and other classes for setting ",l(oe,{to:"/utilities/borders",text:"borders"}),".  A"," ",l("code",{children:"bdc-N"})," class will set the color border, but you won't see any effect unless you also add the ",l("code",{children:"border"})," class."]})})]}),l(I,{html:a_,caption:"Color Classes",expand:!0}),l("h2",{children:"Dark Theme"}),d("p",{children:["The ",l("code",{children:"fgd-N"}),", ",l("code",{children:"bgd-N"}),", ",l("code",{children:"hdd-N"})," and"," ",l("code",{children:"bdd-N"})," classes are equivalents of the above for when a dark theme is selected.  You can set foreground, background, heading and border colors for both light and dark themes and they will be switched in automatically."]}),d(ie,{children:[l(u0,{classes:[["fgd-N","--color",d(Rt,{children:[l("b",{children:"f"}),"ore",l("b",{children:"g"}),"round ",l("b",{children:"d"}),"ark theme color stop ",l("code",{children:"N"})]})],["bgd-N","--background-color",d(Rt,{children:[l("b",{children:"b"}),"ack",l("b",{children:"g"}),"round ",l("b",{children:"d"}),"ark theme color stop ",l("code",{children:"N"})]})],["hdd-N","--heading-color",d(Rt,{children:[l("b",{children:"h"}),"ea",l("b",{children:"d"}),"ing ",l("b",{children:"d"}),"ark theme color stop ",l("code",{children:"N"})]})],["bdd-N","--border-color",d(Rt,{children:[l("b",{children:"b"}),"or",l("b",{children:"d"}),"er ",l("b",{children:"d"}),"ark theme color stop ",l("code",{children:"N"})]})]]}),d(Il,{children:["The same rule applies for ",l("code",{children:"bdd-N"})," as it does for"," ",l("code",{children:"bdc-N"})," - it selects the border color but you still need to add the ",l("code",{children:"border"})," class to make the border visible."]})]}),l(I,{html:o_,caption:"Dark Theme",expand:!0}),l("h2",{children:"Color Inheritance"}),l("p",{children:"CSS custom properties are inherited by child elements.  This means you can select a color range on an element and all children will inherit that color range."}),l(I,{html:i_,caption:"Color Inheritance",expand:!0}),l("h2",{children:"Easy Component Coloring"}),d("p",{children:["This effect is used by various badger-css components. They use the generic ",l("code",{children:"--color-N"})," properties to define colors and can then be rendered using any color range."]}),l(I,{html:s_,caption:"Color Components"}),l("h2",{children:"Creating Your Own Colored Components"}),d(ie,{children:[d("p",{children:["You can employ this in your own components by using the"," ",l("code",{children:"--color-N"})," CSS custom properties to define your component colours."]}),d("p",{children:["This is particularly useful when implementing components for both light and dark themes.  You only need to specify which ",l("code",{children:"--color-N"})," stops you want to use in each case.  You don't need to write separate CSS rules for each of the colors you might want to use."]})]}),l(I,{html:d_,caption:"Custom Components"})]}),u0=({classes:e})=>d("table",{className:"brand celled striped mar-b-8",children:[l("thead",{children:d("tr",{children:[l("th",{children:"Class"}),l("th",{children:"Property"}),l("th",{children:"Description"})]})}),l("tbody",{children:e.map(n=>d("tr",{children:[l("td",{children:l("code",{children:n[0]})}),l("td",{children:l("code",{children:n[1]})}),l("td",{children:n[2]})]},n[0]))})]}),p_=Object.freeze(Object.defineProperty({__proto__:null,default:h_},Symbol.toStringTag,{value:"Module"})),f_=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Color Variables"}),l("h2",{children:"SASS Color Variables"}),d("p",{children:["Each stop in a color range has a SASS variable defined, e.g.",l("code",{children:"$red-0"}),", ",l("code",{children:"$red-5"}),","," ",l("code",{children:"$red-10"})," and so on.  You can use these in your SASS components as necessary."]}),l("h2",{children:"CSS Custom Properties"}),d(ie,{children:[d("div",{children:[d("p",{children:["Each of the colour stops also has a corresponding CSS custom property (a.k.a. CSS variable) defined, e.g.",l("code",{children:"--red-0"}),", ",l("code",{children:"--red-5"}),","," ",l("code",{children:"--red-10"})," and so on.  You can use these in your CSS files, e.g. as ",l("code",{children:"color: var(--red-10)"}),"."]}),d("p",{children:["Each of your brand colors will also have CSS custom properties defined. If you're using the default ",l("code",{children:"brand"})," name then they will be ",l("code",{children:"--brand-0"}),", ",l("code",{children:"--brand-5"}),","," ",l("code",{children:"--brand-10"})," and so on."]})]}),d("p",{children:["If you have defined a different set of names via"," ",l("code",{children:"$brand-colors"})," then they will have corresponding names.  For example, if you defined the names in your ",l("code",{children:"$brand-colors"})," to be ",l("code",{children:"primary"}),","," ",l("code",{children:"secondary"})," and ",l("code",{children:"tertiary"})," then the custom properties will be ",l("code",{children:"--primary-0"}),","," ",l("code",{children:"--secondary-0"}),", ",l("code",{children:"--tertiary-0"}),", and so on."]})]}),l("h2",{children:"Color Switching"}),d(ie,{children:[d("p",{children:["CSS custom properties are defined for a generic color, appropriately named ",l("code",{children:"color"}),".  By default they are mapped to grey."]}),l("div",{children:l(xs,{scope:"grey",to:"grey"})})]}),d(ie,{children:[d("p",{children:["CSS scopes will be generated for each color range which map the generic colors to the colors from that range.  For example, the"," ",l("code",{children:".red"})," class selector scope will map the colors as shown here."]}),d("div",{children:[d("h3",{className:"font-mono mar-b-2",children:[".red ","{"," ... ","}"]}),l(xs,{scope:"red",to:"red",abbreviate:!0})]})]}),d(ie,{children:[d("div",{children:[d("p",{children:["Scopes will also be generated for your brand colors, either using the default ",l("code",{children:"brand"})," name or the custom names you have defined using ",l("code",{children:"$brand-colors"}),"."]}),d("p",{children:["For example, in the ",l("code",{children:".brand"})," scope the colors will be mapped as follows."]})]}),d("div",{children:[d("h3",{className:"font-mono mar-b-2",children:[".brand ","{"," ... ","}"]}),l(xs,{scope:"brand",to:"brand",abbreviate:!0})]})]}),d("p",{children:["The benefit of this approach is that it allows you to define UI components using the generic colors ",l("code",{children:"--color-N"}),".  By default they will appear in grey, but adding a CSS class matching the color name will switch in the appropriate color range."]}),l("h2",{children:"CSS Scope Aliases"}),d("p",{children:["A number of additional CSS scopes are defined for some of the colors. For example, the CSS scope created for the ",l("code",{children:"red"})," color range is actually ",l("code",{children:".red, .error, .invalid"}),".  This allows you to add the ",l("code",{children:"red"}),", ",l("code",{children:"error"})," or ",l("code",{children:"invalid"})," CSS class to an element to have the red color range selected."]}),d("p",{children:["This is used by ",l(oe,{to:"/forms",text:"forms"})," and "," ",l(oe,{to:"/components/alerts",text:"alerts"}),", for example, to provide semantic names for the colors."]})]}),g_=Object.freeze(Object.defineProperty({__proto__:null,default:f_},Symbol.toStringTag,{value:"Module"})),m_=`<div class="alert">
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
`,v_=`<div class="alert border">
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
`,b_=`<div class="alert">
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
</div>`,y_=`<div class="grid-2 gap-4">
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
</div>`,w_=`<div class="surface-3 pad-8">
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
</div>`,Op=({color:e,setColor:n})=>d("select",{name:"color",required:!0,value:e,onChange:t=>n(t.target.value),children:[l("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Color"}),l("option",{value:"",children:"Default"}),rd.map(t=>l("option",{value:t,children:t},t))]}),x_=["smallest","smaller","small","medium","large","larger","largest"],Dp=({size:e,setSize:n})=>d("select",{name:"size",required:!0,value:e,onChange:t=>n(t.target.value),children:[l("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),l("option",{value:"",children:"Default"}),x_.map(t=>l("option",{value:t,children:t},t))]}),C_=[0,1,2,3,4,5,6,8,10],Bp=({radius:e,setRadius:n})=>d("select",{name:"radius",required:!0,value:e,onChange:t=>n(t.target.value),children:[l("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),l("option",{value:"",children:"Default"}),C_.map(t=>d("option",{value:t,children:["radius: ",t]},t))]}),S_=[1,2,3,4,5],kv=({shadow:e,setShadow:n})=>d("select",{name:"shadow",required:!0,value:e,onChange:t=>n(t.target.value),children:[l("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),l("option",{value:"",children:"Default"}),S_.map(t=>d("option",{value:t,children:["shadow: ",t]},t))]}),$n=({checked:e,toggle:n,label:t})=>d("label",{className:"checkbox border no-focus",children:[l("input",{type:"checkbox",checked:e,onChange:n}),t]}),k_=[0,1,2,3,4,5,6,8,10],Tv=({borderWidth:e,setBorderWidth:n})=>d("select",{name:"borderWidth",required:!0,value:e,onChange:t=>n(t.target.value),children:[l("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),l("option",{value:"",children:"Default"}),k_.map(t=>d("option",{value:t,children:["width: ",t]},t))]}),T_=()=>{const[e,n]=B.useState({body:!0});return d("div",{className:"example grid-2 gap-8 stack-desktop",children:[l(__,{options:e,setOption:a=>o=>n(i=>({...i,[a]:o})),toggleOption:a=>()=>n(o=>({...o,[a]:!o[a]}))}),d("div",{children:[l("h3",{className:"mar-b-2",children:"Output"}),l("div",{className:"output",children:l(L_,{options:e})})]})]})},__=({options:e,toggleOption:n,setOption:t})=>{const r=n("headline"),a=n("heading"),o=n("border"),i=n("stripe"),s=t("type"),u=t("size"),p=t("color"),m=t("radius"),y=t("shadow"),C=t("borderWidth"),N=`<div class="${_v(e)}">
  ...
</div>`;return d("div",{children:[l("h3",{className:"mar-b-2",children:"Options"}),d("div",{className:"grid-3 gap-4 stack-tablet top",children:[l($n,{checked:e.headline,toggle:r,label:"Headline"}),l($n,{checked:e.head,toggle:a,label:"Heading"}),l($n,{checked:e.stripe,toggle:i,label:"Stripe"}),l($n,{checked:e.border,toggle:o,label:"Border"}),l(Tv,{borderWidth:e.borderWidth,setBorderWidth:C}),l(Bp,{radius:e.radius,setRadius:m})]}),d("div",{className:"grid-4 gap-4 stack-tablet mar-t-4",children:[l($_,{type:e.type,setType:s}),l(Op,{color:e.color,setColor:p}),l(Dp,{size:e.size,setSize:u}),l(kv,{radius:e.shadow,setShadow:y})]}),l("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),l(Me,{code:N,language:"html",expand:!0})]})},_v=e=>xi([e.color,e.type,e.size,e.border&&"border",e.stripe&&"stripe",e.radius&&`bdr-${e.radius}`,e.shadow&&`shadow-${e.shadow}`,e.borderWidth&&`bdw-${e.borderWidth}`,"alert"]),L_=({options:e})=>{const n=_v(e);return d("div",{className:n,children:[e.headline&&l("div",{className:"headline",children:"This is a headline"}),e.heading&&l("h3",{children:"Hello World!"}),d("p",{children:["This is an alert.  This is some ",l("b",{children:"bold text"}),". This is a ",l("a",{href:"/",children:"link"}),"."]}),l("button",{children:"Default Button"}),l("button",{className:"red mar-l-2",children:"Red Button"})]})},$_=({type:e,setType:n})=>d("select",{name:"type",required:!0,value:e,onChange:t=>n(t.target.value),children:[l("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),l("option",{value:"",children:"Default"}),["info","warning","success","error"].map(t=>l("option",{value:t,children:t},t))]}),N_=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Alerts"}),d("p",{children:["The ",l("code",{children:"alert"})," class can be used to display alerts. Add any of the ",l("code",{children:"info"}),", ",l("code",{children:"success"}),","," ",l("code",{children:"warning"})," or ",l("code",{children:"error"})," classes to set the color."]}),l("h2",{children:"Demo"}),l("p",{children:"Select the options to determine how the alert is displayed. Note that some options are mutually exclusive (e.g. stripe and border)."}),l(T_,{}),l("h2",{children:"Default Alerts"}),l(I,{html:m_,language:"html",caption:"Alerts"}),l("h2",{children:"Alerts With Borders"}),d("p",{children:["Add the ",l("code",{children:"border"})," class to add a border."]}),l(I,{html:v_,language:"html",caption:"Added Borders"}),l("h2",{children:"Alert Headings"}),l("p",{children:"Headings are displayed in a slightly darker color than the body text."}),l(I,{html:b_,language:"html",caption:"Alert Headings"}),l("h2",{children:"Alert Headlines"}),d("p",{children:["Add an element with the ",l("code",{children:"headline"})," class to really make it stand out.  This works well with and without borders.  Throw in a"," ",l(oe,{to:"/utilities/shadows",text:"shadow"})," if you want to make it really pop."]}),l(I,{html:y_,language:"html",caption:"Alert Headlines"}),l("h2",{children:"Stripe Alerts"}),d("p",{children:["For a more subdued look, try adding the ",l("code",{children:"stripe"})," class."]}),l(I,{html:w_,language:"html",caption:"Stripe Alert"})]}),E_=Object.freeze(Object.defineProperty({__proto__:null,default:N_},Symbol.toStringTag,{value:"Module"})),I_=`<div class="grid-1 gap-4">
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
`,M_=`<div class="grid-1 gap-4">
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
</div>`,R_=`<div class="grid-1 gap-4">
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
</div>`,P_=`<div class="grid-1 gap-4">
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
</div>`,A_=`<style>
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
`,F_=()=>{const[e,n]=B.useState({body:!0});return d("div",{className:"example grid-2 gap-8 stack-desktop",children:[l(O_,{options:e,setOption:a=>o=>n(i=>({...i,[a]:o})),toggleOption:a=>()=>n(o=>({...o,[a]:!o[a]}))}),d("div",{children:[l("h3",{className:"mar-b-2",children:"Output"}),l("div",{className:"output",children:l(D_,{options:e})})]})]})},O_=({options:e,toggleOption:n,setOption:t})=>{const r=n("border"),a=n("shaded"),o=n("lined"),i=t("size"),s=t("color"),u=t("radius"),p=t("shadow"),m=t("borderWidth"),C=`<details class="${Lv(e)}">
  ...
</details>`;return d("div",{children:[l("h3",{className:"mar-b-2",children:"Options"}),d("div",{className:"grid-3 gap-4 stack-tablet top",children:[l($n,{checked:e.lined,toggle:o,label:"Lined"}),l($n,{checked:e.shaded,toggle:a,label:"Shaded"})]}),d("div",{className:"grid-3 gap-4 stack-tablet top mar-t-4",children:[l($n,{checked:e.border,toggle:r,label:"Border"}),l(Tv,{borderWidth:e.borderWidth,setBorderWidth:m}),l(Bp,{radius:e.radius,setRadius:u})]}),d("div",{className:"grid-3 gap-4 stack-tablet mar-t-4",children:[l(Op,{color:e.color,setColor:s}),l(Dp,{size:e.size,setSize:i}),l(kv,{radius:e.shadow,setShadow:p})]}),l("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),l(Me,{code:C,language:"html",expand:!0})]})},Lv=e=>xi([e.color,e.size,e.lined&&"lined",e.shaded&&"shaded",e.border&&"border",e.radius&&`bdr-${e.radius}`,e.shadow&&`shadow-${e.shadow}`,e.borderWidth&&`bdw-${e.borderWidth}`]),D_=({options:e})=>{const n=Lv(e);return d("details",{className:n,children:[l("summary",{children:"This is a demo details widget - click to reveal"}),l("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),l("p",{children:"I really think you're just making a much too big thing out of it."}),l("p",{children:"Making a big thing out of it would've been a good idea."})]})},B_=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Details"}),d("p",{children:["The ",l("code",{children:"details"})," HTML element can be used to create a disclosure widget."]}),l("h2",{children:"Demo"}),l("p",{children:"Select the options to determine how the details widget is displayed."}),l(F_,{}),l("h2",{children:"Default Style"}),d("p",{children:["The default style will be applied without the need for any special CSS classes.  You can add any of the utility classes (e.g. the size classes like ",l("code",{children:"small"}),", ",l("code",{children:"large"}),", etc.) to change the basic appearance of either the whole widget, the summary, or any of the content elements."]}),l(I,{html:I_,language:"html",caption:"Default Style"}),l("h2",{children:"Border Style"}),d("p",{children:["Add the ",l("code",{children:"border"})," class to add a border.  The usual"," ",l("code",{children:"bdr-N"})," classes can be added to set the border radius"," ","and ",l("code",{children:"bdw-N"})," to set the border width."]}),d("p",{children:["The ",l("code",{children:"bdc-N"})," classes can be used to set the border color stop, and ",l("code",{children:"bdd-N"})," classes for the border color stop in dark mode."]}),l(I,{html:M_,language:"html",caption:"Details With Borders"}),l("h2",{children:"Lined Style"}),d("p",{children:["The ",l("code",{children:"lined"})," class can be added to put an additional border line between the summary header and body content."]}),l(I,{html:R_,language:"html",caption:"Details With Borders"}),l("h2",{children:"Shaded Style"}),d("p",{children:["Add the ",l("code",{children:"shaded"})," class to shade the background colors. You can add any of the color classes to change the color palette."]}),l(I,{html:P_,language:"html",caption:"Shaded Details"}),l("h2",{children:"Custom Styling"}),l("p",{children:"There are a number of CSS variables that you can set to change the styling."}),l(I,{html:A_,language:"html",caption:"Custom Styling"})]}),j_=Object.freeze(Object.defineProperty({__proto__:null,default:B_},Symbol.toStringTag,{value:"Module"})),Pd=({open:e,close:n,className:t,children:r})=>{const a=B.useRef(null);return B.useEffect(()=>{const{current:o}=a;e?o.showModal():o.close()},[e]),d("dialog",{ref:a,className:t,children:[!!n&&l("div",{className:"close",onClick:n,children:l(Fa,{name:"cross"})}),r]})},z_=()=>{const[e,n]=B.useState(!1);return d("div",{className:"output",children:[l("button",{onClick:()=>n(!0),className:"blue",children:"Show Dialog"}),d(Pd,{open:e,close:()=>n(!1),children:[l("h1",{className:"mar-v-4",children:"Hello World!"}),l("p",{children:"This is a dialog."})]})]})},U_=()=>{const[e,n]=B.useState(!1);return d("div",{className:"output",children:[l("button",{onClick:()=>n(!0),className:"blue",children:"Show Tall Dialog"}),d(Pd,{open:e,close:()=>n(!1),children:[l("h1",{className:"mar-b-4",children:"Tall Dialog"}),d("div",{className:"mobile block-center",children:[l("p",{children:"David. David. David. Wait, please, wait a minute. Have you any idea what it will costs to dress up the band as animals? Oh, it don't cost nothing. It really doesn't. They're not animals, they're signs of the zodiac. They're animals. It's a way to fight the drabs. You know we've got the drabs. Well that's true. I think mine would look good - better in dubly. If it was done in dubly."}),l("p",{children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion. Well let's hear yours. Let's hear your suggestion. Stonehenge! Stonehenge. It's the best production value we've ever had on stage. But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't... Not yet we don't. Let's start... Please, please just a moment. Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this... I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore. I know, so we build a new one. And this is it, look! Consider... consider it done. So you're just going to take care of it like that. You're going to find someone to design it... using that as a plan? Let's try. Let's try. If you can do it, I'll do the number."}),l("p",{children:`This looks actually perfect. I mean it's, uh, the right proportions. It'll be this color right? Yeah. That's... that's... that's just terrific. It almost looks like the real thing. When we get the actual, uh, set, when we get the piece, it'll... it'll follow exactly these specifications. I mean even these contours and everything? Um, I'm not understanding it. What do you mean "the actual piece?" Well I mean... I mean when you build the actual piece... But this is what you asked for, isn't it? What? Well this is the piece. This is the piece? Yes. Are you telling me that this is it? This is scenery? Have you ever been to Stonehenge? No, I haven't been to Stonehenge. The triptychs are... the triptychs are twenty feet high. You can stand four men up them! Ian, I was... I was... I was supposed to build it eighteen inches high. This is insane. This isn't a piece of scenery. Look, look. Look, this is what I was asked to build. Eighteen inches. Right here, it specified eighteen inches. I was given this napkin, I mean... Forget this! Fuck the napkin!!!`}),l("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object. I really think you're just making a much too big thing out of it. Making a big thing out of it would've been a good idea. Nigel gave me a drawing that said eighteen inches. Alright? I know he did, and that's what I'm talking about. Now, whether he knows the difference between feet and inches is not my problem. I do what I'm told. But you're not as confused as him are you? I mean it's not your job to be as confused as Nigel is."}),l("p",{children:"It's my job to do what I'm asked to do by the creative element of this band. And that's what I did. C'mon... The audience were laughing. So it became a comedy number. Yes it did! Yes it fucking well did, and it was not pleasant to be part of the comedy on stage. Backstage, perhaps, it was very amusing."}),l("p",{children:"Maybe we just fix the choreography. Keep the dwarf clear. What do you mean? So they won't trod upon it."})]})]})]})},H_=()=>{const[e,n]=B.useState(!1);return d("div",{className:"output",children:[l("button",{onClick:()=>n(!0),className:"blue",children:"Show Wide Dialog"}),d(Pd,{open:e,close:()=>n(!1),children:[l("h1",{className:"mar-b-4",children:"Wide Dialog"}),l("p",{children:"David. David. David. Wait, please, wait a minute. Have you any idea what it will costs to dress up the band as animals? Oh, it don't cost nothing. It really doesn't. They're not animals, they're signs of the zodiac. They're animals. It's a way to fight the drabs. You know we've got the drabs. Well that's true. I think mine would look good - better in dubly. If it was done in dubly."}),l("p",{children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion. Well let's hear yours. Let's hear your suggestion. Stonehenge! Stonehenge. It's the best production value we've ever had on stage. But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't... Not yet we don't. Let's start... Please, please just a moment. Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this... I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore. I know, so we build a new one. And this is it, look! Consider... consider it done. So you're just going to take care of it like that. You're going to find someone to design it... using that as a plan? Let's try. Let's try. If you can do it, I'll do the number."}),l("p",{children:`This looks actually perfect. I mean it's, uh, the right proportions. It'll be this color right? Yeah. That's... that's... that's just terrific. It almost looks like the real thing. When we get the actual, uh, set, when we get the piece, it'll... it'll follow exactly these specifications. I mean even these contours and everything? Um, I'm not understanding it. What do you mean "the actual piece?" Well I mean... I mean when you build the actual piece... But this is what you asked for, isn't it? What? Well this is the piece. This is the piece? Yes. Are you telling me that this is it? This is scenery? Have you ever been to Stonehenge? No, I haven't been to Stonehenge. The triptychs are... the triptychs are twenty feet high. You can stand four men up them! Ian, I was... I was... I was supposed to build it eighteen inches high. This is insane. This isn't a piece of scenery. Look, look. Look, this is what I was asked to build. Eighteen inches. Right here, it specified eighteen inches. I was given this napkin, I mean... Forget this! Fuck the napkin!!!`}),l("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object. I really think you're just making a much too big thing out of it. Making a big thing out of it would've been a good idea. Nigel gave me a drawing that said eighteen inches. Alright? I know he did, and that's what I'm talking about. Now, whether he knows the difference between feet and inches is not my problem. I do what I'm told. But you're not as confused as him are you? I mean it's not your job to be as confused as Nigel is."}),l("p",{children:"It's my job to do what I'm asked to do by the creative element of this band. And that's what I did. C'mon... The audience were laughing. So it became a comedy number. Yes it did! Yes it fucking well did, and it was not pleasant to be part of the comedy on stage. Backstage, perhaps, it was very amusing."}),l("p",{children:"Maybe we just fix the choreography. Keep the dwarf clear. What do you mean? So they won't trod upon it."})]})]})},W_=()=>{const[e,n]=B.useState(!1),t=()=>n(!1);return d("div",{className:"output",children:[l("button",{onClick:()=>n(!0),className:"blue",children:"Show Dialog Article"}),l(Pd,{open:e,children:d("article",{children:[l("header",{children:l("h3",{children:"User Login"})}),d("form",{className:"width-20rem",children:[d("div",{className:"field wide",children:[l("label",{children:"Email Address"}),l("input",{name:"email",className:"wide"})]}),d("div",{className:"field mar-b-8",children:[l("label",{children:"Password"}),l("input",{name:"password",type:"password",className:"wide"})]})]}),d("footer",{className:"text-right",children:[l("button",{className:"grey outline",onClick:t,children:"Cancel"}),l("button",{className:"blue mar-l-4",onClick:t,children:"Login"})]})]})})]})},V_=`<dialog open>
  <div className="close" onClick={yourCloseHandler}>
    <Icon name="cross"/>
  </div>
  <h1>Hello World!</h1>
  <p>
    This is a dialog.
  </p>
</dialog>`,G_=`<dialog open>
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
`,Y_=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Dialog"}),d("p",{children:["Some default styling is provided for the ",l("code",{children:"dialog"})," element which can be used to display modals."]}),l("h2",{children:"Close Button"}),d("p",{children:["A child element with the ",l("code",{children:"close"})," CSS class can be used to create a close button."]}),d(ie,{children:[l(Me,{code:V_,caption:"Dialog",language:"html",className:"mar-b-8",expand:!0}),l(z_,{})]}),d("p",{children:["The ",l("code",{children:"$dialog-max-width"})," SASS variable defaults to"," ",l("code",{children:"80vw"})," and is set as the ",l("code",{children:"--max-width"})," CSS variable in the scope of a ",l("code",{children:"dialog"})," element. Similarly the ",l("code",{children:"$dialog-max-height"})," SASS variable defaults to"," ",l("code",{children:"90vh"})," and is set as the ",l("code",{children:"--max-height"})," CSS variable."]}),l("p",{children:"In general, you can constrain the width of the content and the dialog which size appropriately."}),d(ie,{children:[l(H_,{}),l(U_,{})]}),l("h2",{children:"Header and Footer"}),d("p",{children:["You can add ",l("code",{children:"header"})," and ",l("code",{children:"footer"})," elements to a dialog.  To be semantically correct, you should enclose them in an"," ",l("code",{children:"article"})," element."]}),d(ie,{children:[l(Me,{code:G_,caption:"Header and Footer",language:"html",className:"mar-b-8",expand:!0}),l(W_,{})]})]}),Z_=Object.freeze(Object.defineProperty({__proto__:null,default:Y_},Symbol.toStringTag,{value:"Module"})),q_=`<div class="dropdown">
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
</div>`,Q_=`<div class="brand dropdown">
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
</div>`,K_=`<div class="text-right">
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
</div>`,X_=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Dropdown"}),d("p",{children:["Use the ",l("code",{children:"dropdown"})," class to create dropdown content. The trigger should either have the ",l("code",{children:"trigger"})," CSS class or (more correctly) have the ",l("code",{children:"aria-haspopup"})," attribute set.  The content should have the ",l("code",{children:"content"})," class."]}),l(I,{html:q_,language:"html",caption:"Dropdown Content"}),d("p",{children:["For dropdown menus you can add the ",l("code",{children:"content"})," class to"," ","a ",l("code",{children:"ul"})," list.  Add the ",l("code",{children:"separator"})," class to a ",l("code",{children:"li"})," element to create a separator."]}),l(I,{html:Q_,language:"html",caption:"Dropdown Menu"}),d("p",{children:["The ",l("code",{children:"right"})," class will right-align the dropdown content. You can add the ",l("code",{children:"caption"})," class to a ",l("code",{children:"li"})," element to prevent it from being displayed as a hoverable menu item."]}),l(I,{html:K_,language:"html",caption:"Right Menu"})]}),J_=Object.freeze(Object.defineProperty({__proto__:null,default:X_},Symbol.toStringTag,{value:"Module"})),eL=`<svg
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
  aria-hidden="true" focusable="false" role="img"
  class="icon"
>
  <path
    d="M64,268L184,388L448,124"
    style="fill:none;stroke:currentColor;stroke-width:65"
  />
</svg>
Check!`,nL=`<div class="small">
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
</div>`,tL=`<div class="red fgc-50 large">
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
</div>`,rL=`<svg
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
`,lL=`<div class="larger">
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
`,aL=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Icons"}),d("p",{children:["Some basic styles are included for SVG icons. Add the ",l("code",{children:"icon"})," ","class to an inline SVG image to use them."]}),l(I,{html:eL,language:"html",caption:"Icon"}),l("p",{children:"Icons are sized in em units meaning they scale with text in different sizes."}),l(I,{html:nL,language:"html",caption:"Icon Sizes"}),d("p",{children:["SVG icons can use ",l("code",{children:"currentColor"})," for either the"," ",l("code",{children:"fill"})," or ",l("code",{children:"stroke"})," properties to inherit the current text color."]}),l(I,{html:tL,language:"html",caption:"Icon Colors"}),d(ie,{align:"bottom",children:[d("div",{children:[d("p",{children:["SVG elements can use the ",l("code",{children:"fill-fg"})," and ",l("code",{children:"fill-bg"})," ","classes to set the fill color to the current foreground or background colors respectively.  Similarly the ",l("code",{children:"stroke-fg"})," and"," ",l("code",{children:"stroke-bg"})," will set the stroke color to the foreground or"," ","background color."]}),d("p",{children:["These CSS rules are scoped to all ",l("code",{children:"svg"})," elements rather",l("code",{children:"svg.icon"})," specifically.  So you can use them in any SVG images, not just icons."]})]}),d(Il,{children:["CSS styles can only be applied to inline SVG elements.  They don't work for SVG images loaded using the ",l("code",{children:"img"})," ","tag or applied using a ",l("code",{children:"background-image"})," style."]})]}),l(I,{html:rL,language:"html",caption:"Icon Style"}),d("p",{children:["You can define your own styles to target different elements in an SVG icon.  This example illustrated the use of generic"," ",l("code",{children:"--color-N"})," variables to set the fill and stroke styles on elements in an icon.  The only thing that's determining the color range is the ",l("code",{children:"blue"})," class on the ",l("code",{children:"svg"})," ","element.  Change that to the name of any other color range and the styles will work equally well."]}),d("p",{children:["Also note the use of the"," ",l("code",{children:"--unfilled"})," custom property which sets the background color for the unchecked checkbox.  This allows us to set different color stops for use in light and dark themes."]}),l(I,{html:lL,language:"html",caption:"Icon Style"})]}),oL=Object.freeze(Object.defineProperty({__proto__:null,default:aL},Symbol.toStringTag,{value:"Module"})),iL=`<div class="relative">
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
</div>`,sL=`<div class="overlay fixed flex center middle">
  I do not, for one, think that the problem was that the
  band was down. I think that the problem may have been...
  that there was a Stonehenge monument on the stage that
  was in danger of being crushed by a dwarf. Alright? That
  tended to understate the hugeness of the object.
</div>
`,dL=()=>{const[e,n]=B.useState(!1);return e?l("div",{className:"overlay fixed flex center middle",children:d("div",{className:"max-width-40rem",children:[l("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),l("button",{onClick:()=>n(!1),className:"red",children:"Hide Overlay"})]})}):l("div",{children:l("button",{onClick:()=>n(!0),className:"green",children:"Show Overlay"})})},cL=()=>{const[e,n]=B.useState(!1);return d("div",{className:"relative pad-6 border",children:[e&&l("div",{className:"overlay flex middle center pad-8",children:d("div",{children:[l("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),l("button",{onClick:()=>n(!1),className:"red",children:"Hide Overlay"})]})}),l("p",{className:"mar-t-none",children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion."}),l("p",{children:"Well let's hear yours. Let's hear your suggestion."}),l("p",{children:"Stonehenge! It's the best production value we've ever had on stage."}),l("p",{children:"But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't..."}),l("p",{children:"Not yet we don't. Let's start... Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this..."}),l("p",{children:"I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore."}),l("p",{children:"I know, so we build a new one. And this is it, look!"}),l("button",{onClick:()=>n(!0),className:"green",children:"Show Overlay"})]})},uL=()=>d("div",{className:"prose",children:[l("h1",{children:"Overlay"}),d("p",{children:["Add the ",l("code",{children:"overlay"})," class to an element to make it an overlay. The default positioning is ",l("code",{children:"absolute"})," so it will fill to cover the nearest parent that has positioning set to ",l("code",{children:"relative"}),"."]}),d(ie,{children:[l(Me,{code:iL,language:"html",caption:"Overlay"}),l("div",{className:"output",children:l(cL,{})})]}),l("h2",{children:"Fixed Viewport"}),d("p",{children:["Add the ",l("code",{children:"fixed"})," class to set the overlay position to"," ",l("code",{children:"fixed"})," so that it covers the entire viewport."]}),d(ie,{children:[l(Me,{code:sL,caption:"Fixed",language:"html",className:"mar-b-8"}),l("div",{className:"output",children:l(dL,{})})]})]}),hL=Object.freeze(Object.defineProperty({__proto__:null,default:uL},Symbol.toStringTag,{value:"Module"})),pL=()=>{const[e,n]=B.useState({head1:!0,body:!0,foot1:!0});return d("div",{className:"example grid-2 gap-8 stack-desktop",children:[l(fL,{options:e,setOption:a=>o=>n(i=>({...i,[a]:o})),toggleOption:a=>()=>n(o=>({...o,[a]:!o[a]}))}),d("div",{children:[l("h3",{className:"mar-b-2",children:"Output"}),l("div",{className:"output",children:l(gL,{options:e})})]})]})},fL=({options:e,toggleOption:n,setOption:t})=>{const r=n("head1"),a=n("head2"),o=n("body"),i=n("foot1"),s=n("foot2"),u=n("wide"),p=n("celled"),m=n("shaded"),y=n("lined"),C=n("striped"),E=t("size"),N=t("color"),S=t("radius"),w=`<table class="${bv(e,"wide celled shaded lined striped",e.color,e.size,e.radius&&`bdr-${e.radius}`)}">
  ...
</table>`;return d("div",{children:[l("h3",{className:"mar-b-2",children:"Options"}),d("div",{className:"grid-4 gap-4 top stack-tablet",children:[l($n,{checked:e.wide,toggle:u,label:"Wide"}),l(Op,{color:e.color,setColor:N}),l(Dp,{size:e.size,setSize:E}),l(Bp,{radius:e.radius,setRadius:S}),l($n,{checked:e.lined,toggle:y,label:"Lined"}),l($n,{checked:e.celled,toggle:p,label:"Celled"}),l($n,{checked:e.shaded,toggle:m,label:"Shaded"}),l($n,{checked:e.striped,toggle:C,label:"Striped"})]}),d("div",{className:"grid-3 gap-4 stack-tablet mar-t-4",children:[l($n,{checked:e.head1,toggle:r,label:"Header"}),l($n,{checked:e.body,toggle:o,label:"Body"}),l($n,{checked:e.foot1,toggle:i,label:"Footer"})]}),d("div",{className:"grid-2 gap-4 stack-tablet mar-t-4",children:[l($n,{checked:e.head2,toggle:a,label:"Pre-header"}),l($n,{checked:e.foot2,toggle:s,label:"Post-footer"})]}),l("div",{className:"grid-5 gap-4 stack-tablet mar-t-4"}),l("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),l(Me,{code:w,language:"html",expand:!0})]})},gL=({options:e})=>{const n=vv(e,{},e.color,e.size,e.radius&&`bdr-${e.radius}`);return d("table",{className:n,children:[(e.head1||e.head2)&&d("thead",{children:[e.head2&&l("tr",{children:l("th",{colSpan:"3",className:"text-center",children:"Spinal Tap"})}),e.head1&&d("tr",{children:[l("th",{children:"Name"}),l("th",{children:"Instrument"}),l("th",{children:"Danger Level"})]})]}),e.body&&d("tbody",{children:[d("tr",{children:[l("td",{children:"Nigel"}),l("td",{children:"Tufnel"}),l("td",{children:"Guitar"})]}),d("tr",{children:[l("td",{children:"David"}),l("td",{children:"St.Hubbins"}),l("td",{children:"Guitar"})]}),d("tr",{children:[l("td",{children:"Derek"}),l("td",{children:"Smalls"}),l("td",{children:"Bass"})]}),d("tr",{children:[l("td",{children:"Viv"}),l("td",{children:"Savage"}),l("td",{children:"Keyboards"})]}),d("tr",{children:[l("td",{children:"Mick"}),l("td",{children:"Shrimpton"}),l("td",{children:"Drums"})]})]}),(e.foot1||e.foot2)&&d("tfoot",{children:[e.foot1&&d("tr",{children:[l("th",{colSpan:"2",className:"text-right",children:"Total"}),l("th",{children:"5"})]}),e.foot2&&l("tr",{children:l("th",{colSpan:"3",className:"text-center",children:"Tap into America!"})})]})]})},mL=`<table>
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
</table>`,vL=`<table class="celled">
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
</table>`,bL=`<table class="shaded">
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
</table>`,yL=`<table class="lined">
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
</table>`,wL=`<table class="striped">
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
</table>`,xL=`<table class="brand striped celled">
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
</table>`,CL=`<table class="shaded lined wide">
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
</table>`,SL=`<div class="flex top wrap gap-4">
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
</div>`,kL=()=>d("div",{className:"prose",children:[l("h1",{children:"Tables"}),l("p",{children:"Badger CSS contains some basic table styling by default and a number of additional classes you can add to snazz things up."}),l("h2",{children:"Demo"}),l("p",{children:"Select the options to determine how the table is displayed."}),l(pL,{}),l("h2",{children:"Default Table"}),l("p",{children:"The default table style is plain."}),l(I,{html:mL,language:"html",caption:"Table"}),l("h2",{children:"Lined Table"}),d("p",{children:["Add the ",l("code",{children:"lined"})," class to add borders between lines."]}),l(I,{html:yL,language:"html",caption:"Lined Table"}),l("h2",{children:"Celled Table"}),d("p",{children:["Add the ",l("code",{children:"celled"})," class to add cell borders."]}),l(I,{html:vL,language:"html",caption:"Celled Table"}),l("h2",{children:"Shaded Table"}),d("p",{children:["Add the ",l("code",{children:"shaded"})," class to add background colors."]}),l(I,{html:bL,language:"html",caption:"Shaded Table"}),l("h2",{children:"Striped Table"}),d("p",{children:["Add the ",l("code",{children:"striped"})," class to add alternate background colors for rows."]}),l(I,{html:wL,language:"html",caption:"Striped Table"}),l("h2",{children:"Colored Table"}),l("p",{children:"Add color classes to change the base color."}),l(I,{html:xL,language:"html",caption:"Colored Table"}),l("h2",{children:"Colored Rows"}),l("p",{children:"Add color classes to rows to get different background colors."}),l(I,{html:CL,language:"html",caption:"Colored Rows"}),l("h2",{children:"Customised Table"}),l("p",{children:"You can customise tables using CSS properties."}),l(I,{html:SL,language:"html",caption:"Rounded Table"})]}),TL=Object.freeze(Object.defineProperty({__proto__:null,default:kL},Symbol.toStringTag,{value:"Module"})),_L=`<div class="tabset">
  <ul class="tabs">
    <li>One</li>
    <li class="active">Two</li>
    <li>Three</li>
  </ul>
</div>`,LL=`<div class="tabset lined">
  <ul class="tabs">
    <li>One</li>
    <li class="active">Two</li>
    <li>Three</li>
  </ul>
</div>`,$L=`<div class="tabset brand solid lined">
  <ul class="tabs">
    <li>One</li>
    <li class="active">Two</li>
    <li>Three</li>
  </ul>
</div>`,NL=`<div class="tabset brand solid lined center">
  <ul class="tabs">
    <li>One</li>
    <li class="active">Two</li>
    <li>Three</li>
  </ul>
</div>`,EL=`<div class="tabset brand solid lined right">
  <ul class="tabs">
    <li>One</li>
    <li class="active">Two</li>
    <li>Three</li>
  </ul>
</div>`,IL=`<div class="tabset brand solid lined" style="--tab-line-width: 3px">
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
</div>`,ML=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Tabs"}),l("p",{}),l(I,{html:_L,language:"html",caption:"Tabs"}),l("h2",{children:"Lined"}),l("p",{}),l(I,{html:LL,language:"html",caption:"Lined Tabs"}),l("h2",{children:"Solid"}),l("p",{}),l(I,{html:$L,language:"html",caption:"Solid Tabs"}),l("h2",{children:"Center"}),l("p",{}),l(I,{html:NL,language:"html",caption:"Center Tabs"}),l("h2",{children:"Right"}),l("p",{}),l(I,{html:EL,language:"html",caption:"Right Tabs"}),l("h2",{children:"Scroll"}),l("p",{}),l(I,{html:IL,language:"html",caption:"Scrolling Tabs"})]}),RL=Object.freeze(Object.defineProperty({__proto__:null,default:ML},Symbol.toStringTag,{value:"Module"})),PL=`<button
  data-tooltip
  aria-label="This is a tooltip"
>
    Hover to see tooltip
</button>
`,AL=`<div class="flex space">
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
`,FL=`<div class="flex space">
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
</div>`,OL=`<button
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
`,DL=`<button data-tooltip>
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
`,BL=`<style>
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
</div>`,jL=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Tooltips"}),d("p",{children:["Add the ",l("code",{children:"data-tooltip"})," attribute to an element to enable a tooltip.  The tooltip text should be defined in the ",l("code",{children:"aria-label"})," ","property so that it's also accessible to screen readers."]}),l(I,{html:PL,language:"html",caption:"Tooltip"}),l("h2",{children:"Tooltip Position"}),d("p",{children:["You can set the ",l("code",{children:"data-tooltip"})," attribute to any of"," ",l("code",{children:"left"}),", ",l("code",{children:"right"}),", ",l("code",{children:"top"})," or"," ",l("code",{children:"bottom"})," to set the tooltip position."]}),l(I,{html:AL,language:"html",caption:"Tooltip Position"}),d("p",{children:["You can also combine them as "," ",l("code",{children:"top left"}),", ",l("code",{children:"top right"}),", ",l("code",{children:"bottom left"})," ","and ",l("code",{children:"bottom right"}),"."]}),l(I,{html:FL,language:"html",caption:"Tooltip Corners"}),l("h2",{children:"Wrapping"}),d("p",{children:["The tooltip has a minimum and maximum width set to keep things sensible. You can add the ",l("code",{children:"tt-wide"})," class if you want the tooltip to extend to the full width of the tooltip text."]}),d("p",{children:["You can add newlines to the ",l("code",{children:"aria-label"})," property if you want to force line breaks."]}),l(I,{html:OL,language:"html",caption:"Tooltip Wrapping"}),l("h2",{children:"Content"}),d("p",{children:["As an alternative to setting the ",l("code",{children:"aria-label"})," you can define the tooltip content in a child element with the"," ",l("code",{children:"tooltip"})," CSS class."]}),l(I,{html:DL,language:"html",caption:"Tooltip Content"}),l("h2",{children:"Custom Tooltip Style"}),l("p",{children:"There are a number of SCSS variables that can be used to set the defaults, or you can use CSS variables to create custom tooltip styles."}),l(I,{html:BL,language:"html",caption:"Custom Tooltips"})]}),zL=Object.freeze(Object.defineProperty({__proto__:null,default:jL},Symbol.toStringTag,{value:"Module"})),UL=`@import "helpers/all.scss";
@import "config/all.scss";
@import "color/palette.scss";
@import "utilities/all.scss";
@import "forms/all.scss";
@import "components/all.scss";
`,HL=`/* helpers/all.scss */
@import "functions.scss";
@import "mixins.scss";`,WL=`/* config/all.scss */
@import "namespaces.scss";
@import "units.scss";
`,VL=`/* utilities/all.scss */
@import "reset.scss";
@import "alignment.scss";
@import "borders.scss";
@import "breakpoints.scss";
@import "color.scss";
@import "dark.scss";
@import "display.scss";
@import "flex.scss";
@import "fonts.scss";
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
@import "responsive.scss";
`,GL=`/* forms/all.scss */
@import "config.scss";
@import "buttons.scss";
@import "input.scss";
@import "inputs.scss";
@import "select.scss";
@import "switches.scss";
@import "fields.scss";
@import "fieldset.scss";`,YL=`/* components/all.scss */
@import "alerts";
@import "details";
@import "dialog";
@import "dropdown";
@import "icons";
@import "overlay";
@import "tables";
@import "tabs";
@import "tooltips";
`,ZL=`@import "@abw/badger-css/styles/helpers/all.scss";
@import "@abw/badger-css/styles/config/all.scss";
@import "@abw/badger-css/styles/color/palette.scss";
@import "@abw/badger-css/styles/utilities/all.scss";
@import "@abw/badger-css/styles/forms/all.scss";
@import "@abw/badger-css/styles/components/all.scss";
`,h0={helpers:HL,config:WL,utilities:VL,forms:GL,components:YL},qL=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Customising With Sass"}),d(ie,{children:[l("div",{children:d("p",{children:["This is what the main ",l("code",{children:"badger.scss"})," file looks like."]})}),l(Me,{code:UL,caption:"badger.scss",language:"scss",expand:!0})]}),d("h2",{children:["Custom ",l("code",{children:"badger.scss"})]}),d(ie,{children:[d("div",{children:[d("p",{children:["You can create your own version of this file if you want to pick and choose which parts you want and don't want. You just need to prefix each file path with"," ",l("code",{children:"@abw/badger-css/styles"}),"."]}),d("p",{children:["For example, instead of",l("code",{children:'@import "helpers/all.scss";'})," you would write"," ",l("code",{children:'@import "@abw/badger-css/styles/helpers/all.scss";'}),"."]})]}),l(Me,{code:ZL,caption:"Custom badger.scss",language:"scss",expand:!0})]}),l("h2",{children:"Other Files"}),d("p",{children:["Each of the ",l("code",{children:"all.scss"})," file is an index which loads the other files in that directory.  The first two, ",l("code",{children:"helpers/all.scss"})," ","and ",l("code",{children:"config/all.scss"})," are mandatory.  They don't generate any output, but define variables and helper functions required by the other files."]}),d("p",{children:["The ",l("code",{children:"config/palette.scss"})," is a special case.  It's generated automatically from a palette configuration file.  You can create your own palette to replace the builtin palette if you want to.  You can read more about it on the ",l(oe,{to:"/colors/palette",children:"Custom Palette"})," page."]}),d("p",{children:["The remaining files are up for grabs.  For example, you can omit the"," ",l("code",{children:"forms/all.scss"})," if you're not interesting in the form styles, or the ",l("code",{children:"components/all.scss"})," if you don't want any of the components.  The ",l("code",{children:"utilities/all.scss"})," is also optional, although you might find that some of the components depend on utility classes contained therein."]}),l("p",{children:"Or you can create your own versions of those file to pick and choose which parts you want."}),l(QL,{})]}),QL=()=>{const[e,n]=B.useState("helpers");return d(ie,{children:[d("div",{children:[d("p",{children:["This is what the ",d("code",{children:[e,"/all.scss"]})," file looks like."]}),l("div",{className:"buttons mar-b-4",children:Object.keys(h0).map(t=>l("button",{onClick:()=>n(t),className:t===e?"brand":"grey outline",children:t},t))}),d("p",{children:["You can browse the source code for these files"," ",l("a",{href:"https://github.com/abw/badger-css/tree/master/styles",children:"on Github"}),"."]})]}),l(Me,{code:h0[e],caption:`${e}/all.scss`,language:"scss",expand:!0})]})},KL=Object.freeze(Object.defineProperty({__proto__:null,default:qL},Symbol.toStringTag,{value:"Module"})),ul=(e="rem",n=.25)=>[0,1,2,3,4,6,8,10,12,16,20,24,28,32].reduce((t,r)=>({...t,[r]:{vars:{unit:`${r} unit${r==1?"":"s"} (${r*n}${e})`}}}),{}),p0=e=>({t:{vars:{sides:"the top"},more:ul(e)},r:{vars:{sides:"the right"},more:ul(e)},b:{vars:{sides:"the right"},more:ul(e)},l:{vars:{sides:"the left"},more:ul(e)},v:{vars:{sides:"the top and bottom (v = vertical)"},more:ul(e)},h:{vars:{sides:"the left and right (h = horizontal)"},more:ul(e)},...ul(e)}),f0=e=>[2,4,6,8,10,12,14,16,18,20,30,40,50,60,70,90,100].reduce((n,t)=>({...n,[`${t}rem`]:{description:()=>e(t)}}),{}),g0=e=>[2,4,6,8,10,12,14,16,18,20,30,40,50,60,70,90,100].reduce((n,t)=>({...n,[`${t*16}px`]:{description:()=>e(t*16)}}),{}),XL={mar:{vars:{unit:"1 unit (0.25rem)",sides:"all sides"},description:e=>`Add ${e.unit} margin to ${e.sides}`,more:p0("rem")},pad:{vars:{unit:"1 unit (0.25em)",sides:"all sides"},description:e=>`Add ${e.unit} margin to ${e.sides}`,more:p0("em")},width:{more:{...f0(e=>`Set width to ${e}rem (${e*16}px)`),...g0(e=>`Set width to ${e}px`)}},max:{more:{width:{more:{...f0(e=>`Set max-width to ${e}rem (${e*16}px)`),...g0(e=>`Set max-width to ${e}px`)}}}},text:{more:{left:{description:()=>"Align text to the left"},right:{description:()=>"Align text to the right"},center:{description:()=>"Align text to the center"}}},block:{more:{left:{description:()=>"Align block to the left"},right:{description:()=>"Align block to the right"},center:{description:()=>"Align block to the center"}}},display:{more:{inline:{description:()=>"Display element inline"},block:{description:()=>"Display element as a block"},"inline-block":{description:()=>"Display element as an inline block"}}},font:{more:{sans:{description:()=>"Use a sans-serif font"},serif:{description:()=>"Use a serif font"},system:{description:()=>"Use the system font"},mono:{description:()=>"Use a monospaced font"}}}},JL=e=>{const n=e.split("-");let t=[],r=[],a=[],o={},i=XL,s;for(;n.length;){const u=n.shift(),p=i[u];if(p)console.log(`matched ${u}`),s=p.description||s,p.vars&&(o={...o,...p.vars}),t.push(u),i=p.more||{},a=Object.keys(i);else{r.push(u);break}}return{good:t,rest:r,vars:o,next:a,description:s?s(o):null}},e$=e=>rv(e).filter(n=>!n.match(/^\s*$/)).map(JL),n$=()=>{const[e,n]=B.useState("");return d("div",{children:[l("h1",{children:"Class Decoder"}),l("p",{children:"Enter one or more Badger-CSS classes for an explanation."}),d("form",{className:"max-width-30rem",children:[d("div",{className:"field",children:[l("label",{children:"CSS Classes"}),l("input",{type:"text",className:"wide",value:e,onChange:t=>n(t.target.value)})]}),l("button",{type:"button",className:"reset grey button outline",onClick:()=>n(""),children:"Reset"})]}),l("div",{children:!!e.length&&l(t$,{input:e})})]})},t$=({input:e})=>{const n=e$(e);return console.log("results: ",n),l("table",{className:"celled border bdr-2 mar-t-4",children:l("tbody",{children:n.map((t,r)=>d("tr",{children:[d("td",{className:"font-mono bgc-95 bgd-10 split-4",children:[l("span",{className:"green fgc-50",children:t.good.join("-")}),!!t.rest.length&&d("span",{className:"red fgc-50",children:[!!t.good.length&&"-",t.rest.join("-")]})]}),l("td",{className:"bgc-100 bgd-5",children:t.description}),l("td",{className:"bgc-100 bgd-5 font-mono small",children:!!t.next.length&&t.next.map(a=>`-${a} `)})]},r))})})},r$=Object.freeze(Object.defineProperty({__proto__:null,default:n$},Symbol.toStringTag,{value:"Module"})),l$=`<div class="grid-fit gap-2">
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
`,a$=`<div class="grid-2 gap-2">
  <button class="brand" disabled>Brand:disabled</button>
  <button class="brand disabled">Brand.disabled</button>
  <button class="brand outline" disabled>Brand:disabled</button>
  <button class="brand outline disabled">Brand.disabled</button>
</div>
`,o$=`<div class="grid-fit gap-2">
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
`,i$=`<div class="grid-fit gap-2">
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
`,s$=`<div class="grid-fit gap-2">
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
`,d$=`<div class="grid-fit gap-2">
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
`,c$=`<div class="grid-fit gap-2">
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
`,u$=`<div class="grid-fit gap-2">
  <span class="button">Default</span>
  <span class="red shaded button">Red Shaded</span>
  <span class="orange outline button">Orange Outline</span>
</div>
`,h$=`<div class="flex gap-4">
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
</div>`,p$=`<div class="flex gap-4">
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
</div>`,f$=`<div class="buttons">
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
`,g$=()=>d("div",{className:"prose",children:[l("h1",{children:"Buttons"}),d("p",{children:["For the sake of accessibility, buttons should usually be rendered using the ",l("code",{children:"button"})," element.  I mean, that's what it's there for, right?  For those cases when you really need to make a link or something else look like a button you can add the"," ",l("code",{children:"button"})," class."]}),d("p",{children:["The default button color is grey. Any one of the color classes (e.g. ",l("code",{children:"red"}),", ",l("code",{children:"green"}),", etc) can be added to get different colors."]}),l("p",{children:"Button color stops automatically adapt between light and dark modes."}),l("h2",{children:"Default Style"}),l("p",{children:"The default button style is solid."}),l(I,{html:l$,language:"html",caption:"Buttons"}),l("h2",{children:"Bright Colors"}),d("p",{children:["Add the ",l("code",{children:"bright"})," CSS class to make the buttons brighter."]}),l(I,{html:o$,language:"html",caption:"Bright Buttons"}),l("h2",{children:"Dark Colors"}),d("p",{children:["Add the ",l("code",{children:"dark"})," CSS class to make the buttons darker."]}),l(I,{html:i$,language:"html",caption:"Dark Buttons"}),l("h2",{children:"Outline Style"}),d("p",{children:["Add the ",l("code",{children:"outline"})," class for outline buttons."]}),l(I,{html:s$,caption:"Outline Buttons"}),l("h2",{children:"Bare Naked Buttons"}),d("p",{children:["Add the ",l("code",{children:"bare"})," class for remove the background and border completely."]}),l(I,{html:d$,caption:"Bare Buttons"}),l("h2",{children:"Shaded Style"}),d("p",{children:["Add the ",l("code",{children:"shaded"})," class for subtly shaded buttons.  It's only a matter of time until flat design is out and shaded is back in. Be ahead of the curve!"]}),l(I,{html:c$,caption:"Shaded Buttons"}),l("h2",{children:"Button Class"}),d("p",{children:["Add the ",l("code",{children:"button"})," class to any non-button element to give it the button styling.  You can also add the ",l("code",{children:"outline"})," and/or"," ",l("code",{children:"shaded"})," classes."]}),l(I,{html:u$,caption:".button class"}),l("h2",{children:"Disabled Buttons"}),d("p",{children:["Add the ",l("code",{children:"disabled"})," attribute or ",l("code",{children:"disabled"})," CSS class to disable a button."]}),l(I,{html:a$,language:"html",caption:"Disabled Buttons"}),l("h2",{children:"Button Icons"}),d("p",{children:["You can add ",l(oe,{to:"/components/icons",text:"SVG Icons"})," to buttons. You can set the margins for icons manually using the ",l("code",{children:"mar-N"})," ","classes described on the ",l(oe,{to:"/utilities/spacing",text:"spacing"})," page. The ",l("code",{children:"on-left"})," and ",l("code",{children:"on-right"})," classes are provided as shortcuts and are equivalent to ",l("code",{children:"mar-r-2"})," and ",l("code",{children:"mar-l-2"}),", respectively."]}),l(I,{html:h$,caption:"Button icons"}),l("h2",{children:"Button Padding"}),l("p",{children:"The default padding for buttons is larger in the horizontal direction (4 units = 1em) than it is in the vertical direction (1 unit = 0.25em). This isn't as unbalanced as it initially seems when you factor in the line-height (1.5), which effectively results in  the vertical padding being equivalent to 2 units (0.5em)."}),d("p",{children:["If you have a button that only contains an icon then it can look a bit strange, as shown in the first button here.  Adding the ",l("code",{children:"pad-h-2"})," class to the button will reduce the horizontal padding to 2 units (0.5em) which will even things out, as shown in the second button.  Or you can add the ",l("code",{children:"icon"})," class to the button which will have the same effect and doesn't require you to remember how many units of padding you need to set."]}),l(I,{html:p$,caption:"Button padding"}),l("h2",{children:"Button Sets"}),d("p",{children:["Button sets can be created by adding a container with the"," ",l("code",{children:"buttons"})," class."]}),l(I,{html:f$,caption:"Button Sets"})]}),m$=Object.freeze(Object.defineProperty({__proto__:null,default:g$},Symbol.toStringTag,{value:"Module"})),v$=`<label>
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
`,b$=`<label class="inline">
  <input type="checkbox">
  Option 1
</label>

<label class="inline checkbox">
  <input type="checkbox">
  Option 2
</label>
`,y$=`<label class="inline border">
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

`,w$=`<label>
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
`,x$=`<style>
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
</div>`,C$=()=>d("div",{className:"prose",children:[l("h1",{children:"Checkboxes"}),l("h2",{children:"Checkbox Class"}),d("p",{children:["The usual approach to creating a checkbox is to define a"," ",l("code",{children:"label"})," that contains an ",l("code",{children:"input"})," with a",l("code",{children:'type="label"'})," attribute.  This has the benefit that clicking on the label will toggle the checkbox input."]}),d("p",{children:["Badger-CSS identifies labels that include a checkbox input using the ",l("code",{children:":has()"})," CSS selector. All the major browsers currently support it, although Firefox was a bit late to the party, only adding support in v121 released on 19th December 2023."]}),d("p",{children:["As a work-around to support older versions of Firefox, you can add the ",l("code",{children:"checkbox"})," class to the ",l("code",{children:"label"}),"."]}),l(I,{html:v$,language:"html",caption:"Checkboxes"}),l("h2",{children:"Inline Checkboxes"}),d("p",{children:["Checkboxes are full-width by default. Add the ",l("code",{children:"inline"})," class to give it a fluid width."]}),l(I,{html:b$,language:"html",caption:"Inline Checkboxes"}),l("h2",{children:"Checkbox Borders"}),d("p",{children:["Add the ",l("code",{children:"border"})," class for borders.  You may need to manually add margins using the ",l(oe,{to:"/utilities/spacing",text:"margin"})," utility classes, or contain multiple checkboxes using the "," ",l(oe,{to:"/utilities/flexbox",text:"flexbox"})," or "," ",l(oe,{to:"/utilities/grid",text:"grid"})," container classes and set the gap between elements."]}),l(I,{html:y$,language:"html",caption:"Border Checkboxes"}),l("h2",{children:"Checkbox Switches"}),d("p",{children:["Set the ",l("code",{children:"role"})," to ",l("code",{children:"switch"})," to display the checkbox as a switch.  Add the ",l("code",{children:"round"})," class for a fully rounded switch or ",l("code",{children:"square"})," for square corners."]}),l("p",{children:"The background color for enabled switches will be based on your brand color.  There are a number of CSS properties you can set to customise the style."}),l(I,{html:w$,language:"html",caption:"Checkbox Switch"}),l("h2",{children:"Custom Checkboxes"}),l(I,{html:x$,language:"html",caption:"Custom Checkboxes"})]}),S$=Object.freeze(Object.defineProperty({__proto__:null,default:C$},Symbol.toStringTag,{value:"Module"})),k$=`<div class="field">
  <label>Label</label>
  <input type="text" value="Input value">
  <div class="help">Help message</div>
</div>`,T$=`<div class="field">
  <label>Inline Text Input</label>
  <input type="text" class="inline">
  <div class="help">Help message</div>
</div>

<div class="field mar-t-8">
  <label>Wide Text Input</label>
  <input type="text">
  <div class="help">Help message</div>
</div>
`,_$=`<div class="field">
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
</div>`,L$=`<div class="field">
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
`,$$=`<div class="field invalid">
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
</div>`,N$=`<div class="field valid">
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
</div>`,E$=`<div class="field required">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
<div class="field required">
  <label>Terms</label>
  <label class="Xcheckbox">
    <input type="checkbox">
    I accept the terms and conditions
  </label>
</div>`,I$=`<style>
  .mandatory-text {
    --required-text: 'MANDATORY';
  }
</style>
<div class="field required mandatory-text">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
`,M$=`<div class="field optional">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>`,R$=`<style>
  .not-required {
    --optional-text: 'NOT REQUIRED';
  }
</style>
<div class="field optional not-required">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
`,P$=`// define your own text for the
// required and/or optional labels...
$field-required-text: '"Important"';
$field-optional-text: '"Not Required"';

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,A$=()=>d("div",{className:"prose",children:[l("h1",{children:"Form Fields"}),l("p",{children:"Form fields are usually comprised of more than just an input. A label is usually present and sometimes an additional help message too."}),l("h2",{children:"Field Class"}),d("p",{children:["Create a container with the ",l("code",{children:"field"})," class. You can then add a ",l("code",{children:"label"})," for the field. If you want to display additional help for the input then give it the ",l("code",{children:"help"})," class."]}),l(I,{html:k$,language:"html",caption:"Form Field"}),l("h2",{children:"Field Width"}),d("p",{children:["Fields are wide by default, but you can add the ",l("code",{children:"inline"})," class to the input element or containing label in the case of checkboxes and radio buttons."]}),l(I,{html:T$,language:"html",caption:"Text Field"}),l(I,{html:_$,language:"html",caption:"Checkbox Field"}),l(I,{html:L$,language:"html",caption:"Radio Button Field"}),l("h2",{children:"Invalid Field"}),d("p",{children:["Add the ",l("code",{children:"invalid"})," class to the ",l("code",{children:"field"})," to indicate fields that are invalid."]}),l(I,{html:$$,language:"html",caption:"Invalid Field"}),l("h2",{children:"Valid Field"}),d("p",{children:["Add the ",l("code",{children:"valid"})," class to the ",l("code",{children:"field"})," to indicate fields that have passed validation."]}),l(I,{html:N$,language:"html",caption:"Valid Field"}),l("h2",{children:"Required Field"}),d("p",{children:["Add the ",l("code",{children:"required"})," class to the ",l("code",{children:"field"})," if you want an additional tag added to the label."]}),l(I,{html:E$,language:"html",caption:"Required Field"}),d("p",{children:["You can use the ",l("code",{children:"--required-text"})," CSS variable to change the text displayed."]}),l(I,{html:I$,language:"html",caption:"Custom Required Field"}),l("h2",{children:"Optional Field"}),d("p",{children:["Add the ",l("code",{children:"optional"})," class to the ",l("code",{children:"field"})," if you want an additional tag added to the label."]}),l(I,{html:M$,language:"html",caption:"Optional Field"}),d("p",{children:["You can use the ",l("code",{children:"--optional-text"})," CSS variable to change the text displayed."]}),l(I,{html:R$,language:"html",caption:"Custom Optional Field"}),d(ie,{children:[d("p",{children:["You can also change the text displayed for either the required and/or optional labels on a global level by setting the"," ",l("code",{children:"$field-required-text"})," and ",l("code",{children:"$field-optional-text"})," ","SASS variables. Be warned that you need to quote the values twice, so that the value defined includes a set of quotes, as shown here."]}),l(Me,{code:P$,caption:"Required Text",language:"scss",className:"mar-b-8",expand:!0})]})]}),F$=Object.freeze(Object.defineProperty({__proto__:null,default:A$},Symbol.toStringTag,{value:"Module"})),O$=`<fieldset>
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
</fieldset>`,D$=()=>d("div",{className:"prose",children:[l("h1",{children:"Form Field Sets"}),d("p",{children:["You can group related fields together in a ",l("code",{children:"fieldset"}),"."]}),l("h2",{children:"Fieldset Container"}),l(I,{html:O$,language:"html",caption:"Form Fieldset"})]}),B$=Object.freeze(Object.defineProperty({__proto__:null,default:D$},Symbol.toStringTag,{value:"Module"})),m0=`<div class="field">
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
`,j$=`<div class="field optional">
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
`,z$=`<div class="grid-1 gap-4">
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
</div>`,U$=["smallest","smaller","small","medium","large","larger","largest"],H$=({size:e,setSize:n})=>l("div",{children:U$.map(t=>d("label",{children:[l("input",{type:"radio",name:"size",value:t,checked:t===e,onChange:r=>n(r.target.value)}),t]},t))}),W$=()=>{const[e,n]=B.useState({});return d("div",{className:"example flex gap-8 stack-desktop",children:[l("div",{className:"split-4",children:l(V$,{options:e,setOption:a=>o=>n(i=>({...i,[a]:o})),toggleOption:a=>()=>n(o=>({...o,[a]:!o[a]}))})}),d("div",{className:"split-3-4",children:[l("h3",{className:"mar-b-2",children:"Output"}),l("div",{className:"output",children:l(G$,{options:e})})]})]})},V$=({options:e,setOption:n})=>{const t=n("size"),a=`<form class="${bv(e,{},e.size)}">
  ...
</form>`;return d("div",{children:[l("h3",{className:"mar-b-2",children:"Select Size"}),l("div",{className:"border surface-4 pad-4 bdr-1",children:l(H$,{size:e.size,setSize:t})}),l("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),l(Me,{code:a,language:"html",expand:!0})]})},G$=({options:e})=>{const n=vv(e,{},e.size);return d("form",{className:n,children:[d("div",{className:"field",children:[l("label",{children:"Text Input"}),d("div",{className:"flex end gap-4",children:[l("input",{type:"text",name:"input-1",className:"wide",placeholder:"Search"}),l("button",{className:"brand outline",children:"Search"})]})]}),d("div",{className:"field",children:[l("label",{children:"Radio Buttons"}),d("div",{className:"flex gap-4 stack-tablet",children:[d("label",{className:"radio border",children:[l("input",{type:"radio",name:"color"}),"Nigel"]}),d("label",{className:"radio border",children:[l("input",{type:"radio",name:"color"}),"David"]}),d("label",{className:"radio border",children:[l("input",{type:"radio",name:"color"}),"Derek"]})]})]}),d("div",{className:"grid-2 gap-4 stack-tablet",children:[d("div",{className:"field",children:[l("label",{children:"Select Input"}),d("select",{name:"animal",className:"wide",required:!0,children:[l("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Choose an animal"}),l("option",{value:"ant",children:"Ant"}),l("option",{value:"badger",children:"Badger"}),l("option",{value:"cat",children:"Cat"}),l("option",{value:"dog",children:"Dog"}),l("option",{value:"elephant",children:"Elephant"}),l("option",{value:"ferret",children:"Ferret"}),l("option",{value:"goldfish",children:"Goldfish"})]})]}),d("div",{className:"field",children:[l("label",{children:"Checkbox"}),d("label",{className:"checkbox border",children:[l("input",{type:"checkbox"}),"I like badgers"]})]})]}),d("label",{className:"checkbox inline",children:[l("input",{type:"checkbox",role:"switch"}),"Turn it on"]}),d("label",{className:"checkbox inline",children:[l("input",{type:"checkbox",role:"switch"}),"Turn it on again"]}),l("div",{className:"text-right",children:l("button",{className:"solid brand",children:"Submit"})})]})};var Ha={};/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v=B;function ve(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jn=Object.prototype.hasOwnProperty,Y$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v0={},b0={};function Nv(e){return Jn.call(b0,e)?!0:Jn.call(v0,e)?!1:Y$.test(e)?b0[e]=!0:(v0[e]=!0,!1)}function Zn(e,n,t,r,a,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var Pn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pn[e]=new Zn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Pn[n]=new Zn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pn[e]=new Zn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pn[e]=new Zn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pn[e]=new Zn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pn[e]=new Zn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pn[e]=new Zn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pn[e]=new Zn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pn[e]=new Zn(e,5,!1,e.toLowerCase(),null,!1,!1)});var jp=/[\-:]([a-z])/g;function zp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(jp,zp);Pn[n]=new Zn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(jp,zp);Pn[n]=new Zn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(jp,zp);Pn[n]=new Zn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pn[e]=new Zn(e,1,!1,e.toLowerCase(),null,!1,!1)});Pn.xlinkHref=new Zn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pn[e]=new Zn(e,1,!1,e.toLowerCase(),null,!0,!0)});var Cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Z$=["Webkit","ms","Moz","O"];Object.keys(Cs).forEach(function(e){Z$.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Cs[n]=Cs[e]})});var q$=/["'&<>]/;function Wn(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var n=q$.exec(e);if(n){var t="",r,a=0;for(r=n.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#x27;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}a!==r&&(t+=e.substring(a,r)),a=r+1,t+=n}e=a!==r?t+e.substring(a,r):t}return e}var Q$=/([A-Z])/g,K$=/^ms-/,rh=Array.isArray;function ar(e,n){return{insertionMode:e,selectedValue:n}}function X$(e,n,t){switch(n){case"select":return ar(1,t.value!=null?t.value:t.defaultValue);case"svg":return ar(2,null);case"math":return ar(3,null);case"foreignObject":return ar(1,null);case"table":return ar(4,null);case"thead":case"tbody":case"tfoot":return ar(5,null);case"colgroup":return ar(7,null);case"tr":return ar(6,null)}return 4<=e.insertionMode||e.insertionMode===0?ar(1,null):e}var y0=new Map;function Ev(e,n,t){if(typeof t!="object")throw Error(ve(62));n=!0;for(var r in t)if(Jn.call(t,r)){var a=t[r];if(a!=null&&typeof a!="boolean"&&a!==""){if(r.indexOf("--")===0){var o=Wn(r);a=Wn((""+a).trim())}else{o=r;var i=y0.get(o);i!==void 0||(i=Wn(o.replace(Q$,"-$1").toLowerCase().replace(K$,"-ms-")),y0.set(o,i)),o=i,a=typeof a=="number"?a===0||Jn.call(Cs,r)?""+a:a+"px":Wn((""+a).trim())}n?(n=!1,e.push(' style="',o,":",a)):e.push(";",o,":",a)}}n||e.push('"')}function it(e,n,t,r){switch(t){case"style":Ev(e,n,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N"){if(n=Pn.hasOwnProperty(t)?Pn[t]:null,n!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!n.acceptsBooleans)return}switch(t=n.attributeName,n.type){case 3:r&&e.push(" ",t,'=""');break;case 4:r===!0?e.push(" ",t,'=""'):r!==!1&&e.push(" ",t,'="',Wn(r),'"');break;case 5:isNaN(r)||e.push(" ",t,'="',Wn(r),'"');break;case 6:!isNaN(r)&&1<=r&&e.push(" ",t,'="',Wn(r),'"');break;default:n.sanitizeURL&&(r=""+r),e.push(" ",t,'="',Wn(r),'"')}}else if(Nv(t)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(n=t.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-")return}e.push(" ",t,'="',Wn(r),'"')}}}function Ss(e,n,t){if(n!=null){if(t!=null)throw Error(ve(60));if(typeof n!="object"||!("__html"in n))throw Error(ve(61));n=n.__html,n!=null&&e.push(""+n)}}function J$(e){var n="";return $v.Children.forEach(e,function(t){t!=null&&(n+=t)}),n}function Wc(e,n,t,r){e.push(Ht(t));var a=t=null,o;for(o in n)if(Jn.call(n,o)){var i=n[o];if(i!=null)switch(o){case"children":t=i;break;case"dangerouslySetInnerHTML":a=i;break;default:it(e,r,o,i)}}return e.push(">"),Ss(e,a,t),typeof t=="string"?(e.push(Wn(t)),null):t}var eN=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,w0=new Map;function Ht(e){var n=w0.get(e);if(n===void 0){if(!eN.test(e))throw Error(ve(65,e));n="<"+e,w0.set(e,n)}return n}function nN(e,n,t,r,a){switch(n){case"select":e.push(Ht("select"));var o=null,i=null;for(m in t)if(Jn.call(t,m)){var s=t[m];if(s!=null)switch(m){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"defaultValue":case"value":break;default:it(e,r,m,s)}}return e.push(">"),Ss(e,i,o),o;case"option":i=a.selectedValue,e.push(Ht("option"));var u=s=null,p=null,m=null;for(o in t)if(Jn.call(t,o)){var y=t[o];if(y!=null)switch(o){case"children":s=y;break;case"selected":p=y;break;case"dangerouslySetInnerHTML":m=y;break;case"value":u=y;default:it(e,r,o,y)}}if(i!=null)if(t=u!==null?""+u:J$(s),rh(i)){for(r=0;r<i.length;r++)if(""+i[r]===t){e.push(' selected=""');break}}else""+i===t&&e.push(' selected=""');else p&&e.push(' selected=""');return e.push(">"),Ss(e,m,s),s;case"textarea":e.push(Ht("textarea")),m=i=o=null;for(s in t)if(Jn.call(t,s)&&(u=t[s],u!=null))switch(s){case"children":m=u;break;case"value":o=u;break;case"defaultValue":i=u;break;case"dangerouslySetInnerHTML":throw Error(ve(91));default:it(e,r,s,u)}if(o===null&&i!==null&&(o=i),e.push(">"),m!=null){if(o!=null)throw Error(ve(92));if(rh(m)&&1<m.length)throw Error(ve(93));o=""+m}return typeof o=="string"&&o[0]===`
`&&e.push(`
`),o!==null&&e.push(Wn(""+o)),null;case"input":e.push(Ht("input")),u=m=s=o=null;for(i in t)if(Jn.call(t,i)&&(p=t[i],p!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(ve(399,"input"));case"defaultChecked":u=p;break;case"defaultValue":s=p;break;case"checked":m=p;break;case"value":o=p;break;default:it(e,r,i,p)}return m!==null?it(e,r,"checked",m):u!==null&&it(e,r,"checked",u),o!==null?it(e,r,"value",o):s!==null&&it(e,r,"value",s),e.push("/>"),null;case"menuitem":e.push(Ht("menuitem"));for(var C in t)if(Jn.call(t,C)&&(o=t[C],o!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(ve(400));default:it(e,r,C,o)}return e.push(">"),null;case"title":e.push(Ht("title")),o=null;for(y in t)if(Jn.call(t,y)&&(i=t[y],i!=null))switch(y){case"children":o=i;break;case"dangerouslySetInnerHTML":throw Error(ve(434));default:it(e,r,y,i)}return e.push(">"),o;case"listing":case"pre":e.push(Ht(n)),i=o=null;for(u in t)if(Jn.call(t,u)&&(s=t[u],s!=null))switch(u){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;default:it(e,r,u,s)}if(e.push(">"),i!=null){if(o!=null)throw Error(ve(60));if(typeof i!="object"||!("__html"in i))throw Error(ve(61));t=i.__html,t!=null&&(typeof t=="string"&&0<t.length&&t[0]===`
`?e.push(`
`,t):e.push(""+t))}return typeof o=="string"&&o[0]===`
`&&e.push(`
`),o;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Ht(n));for(var E in t)if(Jn.call(t,E)&&(o=t[E],o!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(ve(399,n));default:it(e,r,E,o)}return e.push("/>"),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Wc(e,t,n,r);case"html":return a.insertionMode===0&&e.push("<!DOCTYPE html>"),Wc(e,t,n,r);default:if(n.indexOf("-")===-1&&typeof t.is!="string")return Wc(e,t,n,r);e.push(Ht(n)),i=o=null;for(p in t)if(Jn.call(t,p)&&(s=t[p],s!=null))switch(p){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"style":Ev(e,r,s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:Nv(p)&&typeof s!="function"&&typeof s!="symbol"&&e.push(" ",p,'="',Wn(s),'"')}return e.push(">"),Ss(e,i,o),o}}function x0(e,n,t){if(e.push('<!--$?--><template id="'),t===null)throw Error(ve(395));return e.push(t),e.push('"></template>')}function tN(e,n,t,r){switch(t.insertionMode){case 0:case 1:return e.push('<div hidden id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 2:return e.push('<svg aria-hidden="true" style="display:none" id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 3:return e.push('<math aria-hidden="true" style="display:none" id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 4:return e.push('<table hidden id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 5:return e.push('<table hidden><tbody id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 6:return e.push('<table hidden><tr id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 7:return e.push('<table hidden><colgroup id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');default:throw Error(ve(397))}}function rN(e,n){switch(n.insertionMode){case 0:case 1:return e.push("</div>");case 2:return e.push("</svg>");case 3:return e.push("</math>");case 4:return e.push("</table>");case 5:return e.push("</tbody></table>");case 6:return e.push("</tr></table>");case 7:return e.push("</colgroup></table>");default:throw Error(ve(397))}}var lN=/[<\u2028\u2029]/g;function Vc(e){return JSON.stringify(e).replace(lN,function(n){switch(n){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}function aN(e,n){return n=n===void 0?"":n,{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:n+"P:",segmentPrefix:n+"S:",boundaryPrefix:n+"B:",idPrefix:n,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:e}}function C0(e,n,t,r){return t.generateStaticMarkup?(e.push(Wn(n)),!1):(n===""?e=r:(r&&e.push("<!-- -->"),e.push(Wn(n)),e=!0),e)}var Bo=Object.assign,oN=Symbol.for("react.element"),Iv=Symbol.for("react.portal"),Mv=Symbol.for("react.fragment"),Rv=Symbol.for("react.strict_mode"),Pv=Symbol.for("react.profiler"),Av=Symbol.for("react.provider"),Fv=Symbol.for("react.context"),Ov=Symbol.for("react.forward_ref"),Dv=Symbol.for("react.suspense"),Bv=Symbol.for("react.suspense_list"),jv=Symbol.for("react.memo"),Up=Symbol.for("react.lazy"),iN=Symbol.for("react.scope"),sN=Symbol.for("react.debug_trace_mode"),dN=Symbol.for("react.legacy_hidden"),cN=Symbol.for("react.default_value"),S0=Symbol.iterator;function lh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mv:return"Fragment";case Iv:return"Portal";case Pv:return"Profiler";case Rv:return"StrictMode";case Dv:return"Suspense";case Bv:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fv:return(e.displayName||"Context")+".Consumer";case Av:return(e._context.displayName||"Context")+".Provider";case Ov:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case jv:return n=e.displayName||null,n!==null?n:lh(e.type)||"Memo";case Up:n=e._payload,e=e._init;try{return lh(e(n))}catch{}}return null}var zv={};function k0(e,n){if(e=e.contextTypes,!e)return zv;var t={},r;for(r in e)t[r]=n[r];return t}var xl=null;function Ad(e,n){if(e!==n){e.context._currentValue2=e.parentValue,e=e.parent;var t=n.parent;if(e===null){if(t!==null)throw Error(ve(401))}else{if(t===null)throw Error(ve(401));Ad(e,t)}n.context._currentValue2=n.value}}function Uv(e){e.context._currentValue2=e.parentValue,e=e.parent,e!==null&&Uv(e)}function Hv(e){var n=e.parent;n!==null&&Hv(n),e.context._currentValue2=e.value}function Wv(e,n){if(e.context._currentValue2=e.parentValue,e=e.parent,e===null)throw Error(ve(402));e.depth===n.depth?Ad(e,n):Wv(e,n)}function Vv(e,n){var t=n.parent;if(t===null)throw Error(ve(402));e.depth===t.depth?Ad(e,t):Vv(e,t),n.context._currentValue2=n.value}function ld(e){var n=xl;n!==e&&(n===null?Hv(e):e===null?Uv(n):n.depth===e.depth?Ad(n,e):n.depth>e.depth?Wv(n,e):Vv(n,e),xl=e)}var T0={isMounted:function(){return!1},enqueueSetState:function(e,n){e=e._reactInternals,e.queue!==null&&e.queue.push(n)},enqueueReplaceState:function(e,n){e=e._reactInternals,e.replace=!0,e.queue=[n]},enqueueForceUpdate:function(){}};function _0(e,n,t,r){var a=e.state!==void 0?e.state:null;e.updater=T0,e.props=t,e.state=a;var o={queue:[],replace:!1};e._reactInternals=o;var i=n.contextType;if(e.context=typeof i=="object"&&i!==null?i._currentValue2:r,i=n.getDerivedStateFromProps,typeof i=="function"&&(i=i(t,a),a=i==null?a:Bo({},a,i),e.state=a),typeof n.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(n=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),n!==e.state&&T0.enqueueReplaceState(e,e.state,null),o.queue!==null&&0<o.queue.length)if(n=o.queue,i=o.replace,o.queue=null,o.replace=!1,i&&n.length===1)e.state=n[0];else{for(o=i?n[0]:e.state,a=!0,i=i?1:0;i<n.length;i++){var s=n[i];s=typeof s=="function"?s.call(e,o,t,r):s,s!=null&&(a?(a=!1,o=Bo({},o,s)):Bo(o,s))}e.state=o}else o.queue=null}var uN={id:1,overflow:""};function ah(e,n,t){var r=e.id;e=e.overflow;var a=32-ks(r)-1;r&=~(1<<a),t+=1;var o=32-ks(n)+a;if(30<o){var i=a-a%5;return o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,{id:1<<32-ks(n)+a|t<<a|r,overflow:o+e}}return{id:1<<o|t<<a|r,overflow:e}}var ks=Math.clz32?Math.clz32:fN,hN=Math.log,pN=Math.LN2;function fN(e){return e>>>=0,e===0?32:31-(hN(e)/pN|0)|0}function gN(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var mN=typeof Object.is=="function"?Object.is:gN,vr=null,Hp=null,Ts=null,We=null,To=!1,ad=!1,si=0,Ar=null,Fd=0;function fl(){if(vr===null)throw Error(ve(321));return vr}function L0(){if(0<Fd)throw Error(ve(312));return{memoizedState:null,queue:null,next:null}}function Wp(){return We===null?Ts===null?(To=!1,Ts=We=L0()):(To=!0,We=Ts):We.next===null?(To=!1,We=We.next=L0()):(To=!0,We=We.next),We}function Vp(){Hp=vr=null,ad=!1,Ts=null,Fd=0,We=Ar=null}function Gv(e,n){return typeof n=="function"?n(e):n}function $0(e,n,t){if(vr=fl(),We=Wp(),To){var r=We.queue;if(n=r.dispatch,Ar!==null&&(t=Ar.get(r),t!==void 0)){Ar.delete(r),r=We.memoizedState;do r=e(r,t.action),t=t.next;while(t!==null);return We.memoizedState=r,[r,n]}return[We.memoizedState,n]}return e=e===Gv?typeof n=="function"?n():n:t!==void 0?t(n):n,We.memoizedState=e,e=We.queue={last:null,dispatch:null},e=e.dispatch=vN.bind(null,vr,e),[We.memoizedState,e]}function N0(e,n){if(vr=fl(),We=Wp(),n=n===void 0?null:n,We!==null){var t=We.memoizedState;if(t!==null&&n!==null){var r=t[1];e:if(r===null)r=!1;else{for(var a=0;a<r.length&&a<n.length;a++)if(!mN(n[a],r[a])){r=!1;break e}r=!0}if(r)return t[0]}}return e=e(),We.memoizedState=[e,n],e}function vN(e,n,t){if(25<=Fd)throw Error(ve(301));if(e===vr)if(ad=!0,e={action:t,next:null},Ar===null&&(Ar=new Map),t=Ar.get(n),t===void 0)Ar.set(n,e);else{for(n=t;n.next!==null;)n=n.next;n.next=e}}function bN(){throw Error(ve(394))}function rs(){}var E0={readContext:function(e){return e._currentValue2},useContext:function(e){return fl(),e._currentValue2},useMemo:N0,useReducer:$0,useRef:function(e){vr=fl(),We=Wp();var n=We.memoizedState;return n===null?(e={current:e},We.memoizedState=e):n},useState:function(e){return $0(Gv,e)},useInsertionEffect:rs,useLayoutEffect:function(){},useCallback:function(e,n){return N0(function(){return e},n)},useImperativeHandle:rs,useEffect:rs,useDebugValue:rs,useDeferredValue:function(e){return fl(),e},useTransition:function(){return fl(),[!1,bN]},useId:function(){var e=Hp.treeContext,n=e.overflow;e=e.id,e=(e&~(1<<32-ks(e)-1)).toString(32)+n;var t=_s;if(t===null)throw Error(ve(404));return n=si++,e=":"+t.idPrefix+"R"+e,0<n&&(e+="H"+n.toString(32)),e+":"},useMutableSource:function(e,n){return fl(),n(e._source)},useSyncExternalStore:function(e,n,t){if(t===void 0)throw Error(ve(407));return t()}},_s=null,Gc=$v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function yN(e){return console.error(e),null}function _o(){}function wN(e,n,t,r,a,o,i,s,u){var p=[],m=new Set;return n={destination:null,responseState:n,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:m,pingedTasks:p,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:a===void 0?yN:a,onAllReady:o===void 0?_o:o,onShellReady:i===void 0?_o:i,onShellError:s===void 0?_o:s,onFatalError:u===void 0?_o:u},t=od(n,0,null,t,!1,!1),t.parentFlushed=!0,e=Gp(n,e,null,t,m,zv,null,uN),p.push(e),n}function Gp(e,n,t,r,a,o,i,s){e.allPendingTasks++,t===null?e.pendingRootTasks++:t.pendingTasks++;var u={node:n,ping:function(){var p=e.pingedTasks;p.push(u),p.length===1&&qv(e)},blockedBoundary:t,blockedSegment:r,abortSet:a,legacyContext:o,context:i,treeContext:s};return a.add(u),u}function od(e,n,t,r,a,o){return{status:0,id:-1,index:n,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:t,lastPushedText:a,textEmbedded:o}}function di(e,n){if(e=e.onError(n),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function id(e,n){var t=e.onShellError;t(n),t=e.onFatalError,t(n),e.destination!==null?(e.status=2,e.destination.destroy(n)):(e.status=1,e.fatalError=n)}function I0(e,n,t,r,a){for(vr={},Hp=n,si=0,e=t(r,a);ad;)ad=!1,si=0,Fd+=1,We=null,e=t(r,a);return Vp(),e}function M0(e,n,t,r){var a=t.render(),o=r.childContextTypes;if(o!=null){var i=n.legacyContext;if(typeof t.getChildContext!="function")r=i;else{t=t.getChildContext();for(var s in t)if(!(s in o))throw Error(ve(108,lh(r)||"Unknown",s));r=Bo({},i,t)}n.legacyContext=r,ct(e,n,a),n.legacyContext=i}else ct(e,n,a)}function R0(e,n){if(e&&e.defaultProps){n=Bo({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function oh(e,n,t,r,a){if(typeof t=="function")if(t.prototype&&t.prototype.isReactComponent){a=k0(t,n.legacyContext);var o=t.contextType;o=new t(r,typeof o=="object"&&o!==null?o._currentValue2:a),_0(o,t,r,a),M0(e,n,o,t)}else{o=k0(t,n.legacyContext),a=I0(e,n,t,r,o);var i=si!==0;if(typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0)_0(a,t,r,o),M0(e,n,a,t);else if(i){r=n.treeContext,n.treeContext=ah(r,1,0);try{ct(e,n,a)}finally{n.treeContext=r}}else ct(e,n,a)}else if(typeof t=="string"){switch(a=n.blockedSegment,o=nN(a.chunks,t,r,e.responseState,a.formatContext),a.lastPushedText=!1,i=a.formatContext,a.formatContext=X$(i,t,r),ih(e,n,o),a.formatContext=i,t){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:a.chunks.push("</",t,">")}a.lastPushedText=!1}else{switch(t){case dN:case sN:case Rv:case Pv:case Mv:ct(e,n,r.children);return;case Bv:ct(e,n,r.children);return;case iN:throw Error(ve(343));case Dv:e:{t=n.blockedBoundary,a=n.blockedSegment,o=r.fallback,r=r.children,i=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:i,errorDigest:null},u=od(e,a.chunks.length,s,a.formatContext,!1,!1);a.children.push(u),a.lastPushedText=!1;var p=od(e,0,null,a.formatContext,!1,!1);p.parentFlushed=!0,n.blockedBoundary=s,n.blockedSegment=p;try{if(ih(e,n,r),e.responseState.generateStaticMarkup||p.lastPushedText&&p.textEmbedded&&p.chunks.push("<!-- -->"),p.status=1,sd(s,p),s.pendingTasks===0)break e}catch(m){p.status=4,s.forceClientRender=!0,s.errorDigest=di(e,m)}finally{n.blockedBoundary=t,n.blockedSegment=a}n=Gp(e,o,t,u,i,n.legacyContext,n.context,n.treeContext),e.pingedTasks.push(n)}return}if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ov:if(r=I0(e,n,t.render,r,a),si!==0){t=n.treeContext,n.treeContext=ah(t,1,0);try{ct(e,n,r)}finally{n.treeContext=t}}else ct(e,n,r);return;case jv:t=t.type,r=R0(t,r),oh(e,n,t,r,a);return;case Av:if(a=r.children,t=t._context,r=r.value,o=t._currentValue2,t._currentValue2=r,i=xl,xl=r={parent:i,depth:i===null?0:i.depth+1,context:t,parentValue:o,value:r},n.context=r,ct(e,n,a),e=xl,e===null)throw Error(ve(403));r=e.parentValue,e.context._currentValue2=r===cN?e.context._defaultValue:r,e=xl=e.parent,n.context=e;return;case Fv:r=r.children,r=r(t._currentValue2),ct(e,n,r);return;case Up:a=t._init,t=a(t._payload),r=R0(t,r),oh(e,n,t,r,void 0);return}throw Error(ve(130,t==null?t:typeof t,""))}}function ct(e,n,t){if(n.node=t,typeof t=="object"&&t!==null){switch(t.$$typeof){case oN:oh(e,n,t.type,t.props,t.ref);return;case Iv:throw Error(ve(257));case Up:var r=t._init;t=r(t._payload),ct(e,n,t);return}if(rh(t)){P0(e,n,t);return}if(t===null||typeof t!="object"?r=null:(r=S0&&t[S0]||t["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(t))){if(t=r.next(),!t.done){var a=[];do a.push(t.value),t=r.next();while(!t.done);P0(e,n,a)}return}throw e=Object.prototype.toString.call(t),Error(ve(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}typeof t=="string"?(r=n.blockedSegment,r.lastPushedText=C0(n.blockedSegment.chunks,t,e.responseState,r.lastPushedText)):typeof t=="number"&&(r=n.blockedSegment,r.lastPushedText=C0(n.blockedSegment.chunks,""+t,e.responseState,r.lastPushedText))}function P0(e,n,t){for(var r=t.length,a=0;a<r;a++){var o=n.treeContext;n.treeContext=ah(o,r,a);try{ih(e,n,t[a])}finally{n.treeContext=o}}}function ih(e,n,t){var r=n.blockedSegment.formatContext,a=n.legacyContext,o=n.context;try{return ct(e,n,t)}catch(u){if(Vp(),typeof u=="object"&&u!==null&&typeof u.then=="function"){t=u;var i=n.blockedSegment,s=od(e,i.chunks.length,null,i.formatContext,i.lastPushedText,!0);i.children.push(s),i.lastPushedText=!1,e=Gp(e,n.node,n.blockedBoundary,s,n.abortSet,n.legacyContext,n.context,n.treeContext).ping,t.then(e,e),n.blockedSegment.formatContext=r,n.legacyContext=a,n.context=o,ld(o)}else throw n.blockedSegment.formatContext=r,n.legacyContext=a,n.context=o,ld(o),u}}function xN(e){var n=e.blockedBoundary;e=e.blockedSegment,e.status=3,Zv(this,n,e)}function Yv(e,n,t){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(n.allPendingTasks--,n.status!==2&&(n.status=2,n.destination!==null&&n.destination.push(null))):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=t===void 0?Error(ve(432)):t,r.errorDigest=n.onError(e),r.parentFlushed&&n.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(a){return Yv(a,n,t)}),r.fallbackAbortableTasks.clear(),n.allPendingTasks--,n.allPendingTasks===0&&(r=n.onAllReady,r()))}function sd(e,n){if(n.chunks.length===0&&n.children.length===1&&n.children[0].boundary===null){var t=n.children[0];t.id=n.id,t.parentFlushed=!0,t.status===1&&sd(e,t)}else e.completedSegments.push(n)}function Zv(e,n,t){if(n===null){if(t.parentFlushed){if(e.completedRootSegment!==null)throw Error(ve(389));e.completedRootSegment=t}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=_o,n=e.onShellReady,n())}else n.pendingTasks--,n.forceClientRender||(n.pendingTasks===0?(t.parentFlushed&&t.status===1&&sd(n,t),n.parentFlushed&&e.completedBoundaries.push(n),n.fallbackAbortableTasks.forEach(xN,e),n.fallbackAbortableTasks.clear()):t.parentFlushed&&t.status===1&&(sd(n,t),n.completedSegments.length===1&&n.parentFlushed&&e.partialBoundaries.push(n)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function qv(e){if(e.status!==2){var n=xl,t=Gc.current;Gc.current=E0;var r=_s;_s=e.responseState;try{var a=e.pingedTasks,o;for(o=0;o<a.length;o++){var i=a[o],s=e,u=i.blockedSegment;if(u.status===0){ld(i.context);try{ct(s,i,i.node),s.responseState.generateStaticMarkup||u.lastPushedText&&u.textEmbedded&&u.chunks.push("<!-- -->"),i.abortSet.delete(i),u.status=1,Zv(s,i.blockedBoundary,u)}catch(N){if(Vp(),typeof N=="object"&&N!==null&&typeof N.then=="function"){var p=i.ping;N.then(p,p)}else{i.abortSet.delete(i),u.status=4;var m=i.blockedBoundary,y=N,C=di(s,y);if(m===null?id(s,y):(m.pendingTasks--,m.forceClientRender||(m.forceClientRender=!0,m.errorDigest=C,m.parentFlushed&&s.clientRenderedBoundaries.push(m))),s.allPendingTasks--,s.allPendingTasks===0){var E=s.onAllReady;E()}}}finally{}}}a.splice(0,o),e.destination!==null&&Yp(e,e.destination)}catch(N){di(e,N),id(e,N)}finally{_s=r,Gc.current=t,t===E0&&ld(n)}}}function ls(e,n,t){switch(t.parentFlushed=!0,t.status){case 0:var r=t.id=e.nextSegmentId++;return t.lastPushedText=!1,t.textEmbedded=!1,e=e.responseState,n.push('<template id="'),n.push(e.placeholderPrefix),e=r.toString(16),n.push(e),n.push('"></template>');case 1:t.status=2;var a=!0;r=t.chunks;var o=0;t=t.children;for(var i=0;i<t.length;i++){for(a=t[i];o<a.index;o++)n.push(r[o]);a=Od(e,n,a)}for(;o<r.length-1;o++)n.push(r[o]);return o<r.length&&(a=n.push(r[o])),a;default:throw Error(ve(390))}}function Od(e,n,t){var r=t.boundary;if(r===null)return ls(e,n,t);if(r.parentFlushed=!0,r.forceClientRender)return e.responseState.generateStaticMarkup||(r=r.errorDigest,n.push("<!--$!-->"),n.push("<template"),r&&(n.push(' data-dgst="'),r=Wn(r),n.push(r),n.push('"')),n.push("></template>")),ls(e,n,t),e=e.responseState.generateStaticMarkup?!0:n.push("<!--/$-->"),e;if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var a=e.responseState,o=a.nextSuspenseID++;return a=a.boundaryPrefix+o.toString(16),r=r.id=a,x0(n,e.responseState,r),ls(e,n,t),n.push("<!--/$-->")}if(r.byteSize>e.progressiveChunkSize)return r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),x0(n,e.responseState,r.id),ls(e,n,t),n.push("<!--/$-->");if(e.responseState.generateStaticMarkup||n.push("<!--$-->"),t=r.completedSegments,t.length!==1)throw Error(ve(391));return Od(e,n,t[0]),e=e.responseState.generateStaticMarkup?!0:n.push("<!--/$-->"),e}function A0(e,n,t){return tN(n,e.responseState,t.formatContext,t.id),Od(e,n,t),rN(n,t.formatContext)}function F0(e,n,t){for(var r=t.completedSegments,a=0;a<r.length;a++)Qv(e,n,t,r[a]);if(r.length=0,e=e.responseState,r=t.id,t=t.rootSegmentID,n.push(e.startInlineScript),e.sentCompleteBoundaryFunction?n.push('$RC("'):(e.sentCompleteBoundaryFunction=!0,n.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')),r===null)throw Error(ve(395));return t=t.toString(16),n.push(r),n.push('","'),n.push(e.segmentPrefix),n.push(t),n.push('")<\/script>')}function Qv(e,n,t,r){if(r.status===2)return!0;var a=r.id;if(a===-1){if((r.id=t.rootSegmentID)===-1)throw Error(ve(392));return A0(e,n,r)}return A0(e,n,r),e=e.responseState,n.push(e.startInlineScript),e.sentCompleteSegmentFunction?n.push('$RS("'):(e.sentCompleteSegmentFunction=!0,n.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')),n.push(e.segmentPrefix),a=a.toString(16),n.push(a),n.push('","'),n.push(e.placeholderPrefix),n.push(a),n.push('")<\/script>')}function Yp(e,n){try{var t=e.completedRootSegment;if(t!==null&&e.pendingRootTasks===0){Od(e,n,t),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(t=0;t<r.length-1;t++)n.push(r[t]);t<r.length&&n.push(r[t])}var a=e.clientRenderedBoundaries,o;for(o=0;o<a.length;o++){var i=a[o];r=n;var s=e.responseState,u=i.id,p=i.errorDigest,m=i.errorMessage,y=i.errorComponentStack;if(r.push(s.startInlineScript),s.sentClientRenderFunction?r.push('$RX("'):(s.sentClientRenderFunction=!0,r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')),u===null)throw Error(ve(395));if(r.push(u),r.push('"'),p||m||y){r.push(",");var C=Vc(p||"");r.push(C)}if(m||y){r.push(",");var E=Vc(m||"");r.push(E)}if(y){r.push(",");var N=Vc(y);r.push(N)}if(!r.push(")<\/script>")){e.destination=null,o++,a.splice(0,o);return}}a.splice(0,o);var S=e.completedBoundaries;for(o=0;o<S.length;o++)if(!F0(e,n,S[o])){e.destination=null,o++,S.splice(0,o);return}S.splice(0,o);var M=e.partialBoundaries;for(o=0;o<M.length;o++){var w=M[o];e:{a=e,i=n;var g=w.completedSegments;for(s=0;s<g.length;s++)if(!Qv(a,i,w,g[s])){s++,g.splice(0,s);var b=!1;break e}g.splice(0,s),b=!0}if(!b){e.destination=null,o++,M.splice(0,o);return}}M.splice(0,o);var v=e.completedBoundaries;for(o=0;o<v.length;o++)if(!F0(e,n,v[o])){e.destination=null,o++,v.splice(0,o);return}v.splice(0,o)}finally{e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&n.push(null)}}function CN(e,n){try{var t=e.abortableTasks;t.forEach(function(r){return Yv(r,e,n)}),t.clear(),e.destination!==null&&Yp(e,e.destination)}catch(r){di(e,r),id(e,r)}}function SN(){}function Kv(e,n,t,r){var a=!1,o=null,i="",s={push:function(p){return p!==null&&(i+=p),!0},destroy:function(p){a=!0,o=p}},u=!1;if(e=wN(e,aN(t,n?n.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,SN,void 0,function(){u=!0},void 0,void 0),qv(e),CN(e,r),e.status===1)e.status=2,s.destroy(e.fatalError);else if(e.status!==2&&e.destination===null){e.destination=s;try{Yp(e,s)}catch(p){di(e,p),id(e,p)}}if(a)throw o;if(!u)throw Error(ve(426));return i}Ha.renderToNodeStream=function(){throw Error(ve(207))};Ha.renderToStaticMarkup=function(e,n){return Kv(e,n,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};Ha.renderToStaticNodeStream=function(){throw Error(ve(208))};Ha.renderToString=function(e,n){return Kv(e,n,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};Ha.version="18.2.0";var Zp={};/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv=B;function we(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ut=null,ht=0;function re(e,n){if(n.length!==0)if(512<n.length)0<ht&&(e.enqueue(new Uint8Array(ut.buffer,0,ht)),ut=new Uint8Array(512),ht=0),e.enqueue(n);else{var t=ut.length-ht;t<n.length&&(t===0?e.enqueue(ut):(ut.set(n.subarray(0,t),ht),e.enqueue(ut),n=n.subarray(t)),ut=new Uint8Array(512),ht=0),ut.set(n,ht),ht+=n.length}}function Xe(e,n){return re(e,n),!0}function O0(e){ut&&0<ht&&(e.enqueue(new Uint8Array(ut.buffer,0,ht)),ut=null,ht=0)}var Jv=new TextEncoder;function Se(e){return Jv.encode(e)}function X(e){return Jv.encode(e)}function e4(e,n){typeof e.error=="function"?e.error(n):e.close()}var et=Object.prototype.hasOwnProperty,kN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,D0={},B0={};function n4(e){return et.call(B0,e)?!0:et.call(D0,e)?!1:kN.test(e)?B0[e]=!0:(D0[e]=!0,!1)}function qn(e,n,t,r,a,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var An={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){An[e]=new qn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];An[n]=new qn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){An[e]=new qn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){An[e]=new qn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){An[e]=new qn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){An[e]=new qn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){An[e]=new qn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){An[e]=new qn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){An[e]=new qn(e,5,!1,e.toLowerCase(),null,!1,!1)});var qp=/[\-:]([a-z])/g;function Qp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(qp,Qp);An[n]=new qn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(qp,Qp);An[n]=new qn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(qp,Qp);An[n]=new qn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){An[e]=new qn(e,1,!1,e.toLowerCase(),null,!1,!1)});An.xlinkHref=new qn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){An[e]=new qn(e,1,!1,e.toLowerCase(),null,!0,!0)});var Ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},TN=["Webkit","ms","Moz","O"];Object.keys(Ls).forEach(function(e){TN.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ls[n]=Ls[e]})});var _N=/["'&<>]/;function In(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var n=_N.exec(e);if(n){var t="",r,a=0;for(r=n.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#x27;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}a!==r&&(t+=e.substring(a,r)),a=r+1,t+=n}e=a!==r?t+e.substring(a,r):t}return e}var LN=/([A-Z])/g,$N=/^ms-/,sh=Array.isArray,NN=X("<script>"),EN=X("<\/script>"),IN=X('<script src="'),MN=X('<script type="module" src="'),j0=X('" async=""><\/script>'),RN=/(<\/|<)(s)(cript)/gi;function PN(e,n,t,r){return""+n+(t==="s"?"\\u0073":"\\u0053")+r}function AN(e,n,t,r,a){e=e===void 0?"":e,n=n===void 0?NN:X('<script nonce="'+In(n)+'">');var o=[];if(t!==void 0&&o.push(n,Se((""+t).replace(RN,PN)),EN),r!==void 0)for(t=0;t<r.length;t++)o.push(IN,Se(In(r[t])),j0);if(a!==void 0)for(r=0;r<a.length;r++)o.push(MN,Se(In(a[r])),j0);return{bootstrapChunks:o,startInlineScript:n,placeholderPrefix:X(e+"P:"),segmentPrefix:X(e+"S:"),boundaryPrefix:e+"B:",idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function Wt(e,n){return{insertionMode:e,selectedValue:n}}function FN(e){return Wt(e==="http://www.w3.org/2000/svg"?2:e==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function ON(e,n,t){switch(n){case"select":return Wt(1,t.value!=null?t.value:t.defaultValue);case"svg":return Wt(2,null);case"math":return Wt(3,null);case"foreignObject":return Wt(1,null);case"table":return Wt(4,null);case"thead":case"tbody":case"tfoot":return Wt(5,null);case"colgroup":return Wt(7,null);case"tr":return Wt(6,null)}return 4<=e.insertionMode||e.insertionMode===0?Wt(1,null):e}var Kp=X("<!-- -->");function z0(e,n,t,r){return n===""?r:(r&&e.push(Kp),e.push(Se(In(n))),!0)}var U0=new Map,DN=X(' style="'),H0=X(":"),BN=X(";");function t4(e,n,t){if(typeof t!="object")throw Error(we(62));n=!0;for(var r in t)if(et.call(t,r)){var a=t[r];if(a!=null&&typeof a!="boolean"&&a!==""){if(r.indexOf("--")===0){var o=Se(In(r));a=Se(In((""+a).trim()))}else{o=r;var i=U0.get(o);i!==void 0||(i=X(In(o.replace(LN,"-$1").toLowerCase().replace($N,"-ms-"))),U0.set(o,i)),o=i,a=typeof a=="number"?a===0||et.call(Ls,r)?Se(""+a):Se(a+"px"):Se(In((""+a).trim()))}n?(n=!1,e.push(DN,o,H0,a)):e.push(BN,o,H0,a)}}n||e.push(gl)}var Lr=X(" "),ra=X('="'),gl=X('"'),W0=X('=""');function st(e,n,t,r){switch(t){case"style":t4(e,n,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N"){if(n=An.hasOwnProperty(t)?An[t]:null,n!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!n.acceptsBooleans)return}switch(t=Se(n.attributeName),n.type){case 3:r&&e.push(Lr,t,W0);break;case 4:r===!0?e.push(Lr,t,W0):r!==!1&&e.push(Lr,t,ra,Se(In(r)),gl);break;case 5:isNaN(r)||e.push(Lr,t,ra,Se(In(r)),gl);break;case 6:!isNaN(r)&&1<=r&&e.push(Lr,t,ra,Se(In(r)),gl);break;default:n.sanitizeURL&&(r=""+r),e.push(Lr,t,ra,Se(In(r)),gl)}}else if(n4(t)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(n=t.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-")return}e.push(Lr,Se(t),ra,Se(In(r)),gl)}}}var $r=X(">"),V0=X("/>");function $s(e,n,t){if(n!=null){if(t!=null)throw Error(we(60));if(typeof n!="object"||!("__html"in n))throw Error(we(61));n=n.__html,n!=null&&e.push(Se(""+n))}}function jN(e){var n="";return Xv.Children.forEach(e,function(t){t!=null&&(n+=t)}),n}var Yc=X(' selected=""');function Zc(e,n,t,r){e.push(Vt(t));var a=t=null,o;for(o in n)if(et.call(n,o)){var i=n[o];if(i!=null)switch(o){case"children":t=i;break;case"dangerouslySetInnerHTML":a=i;break;default:st(e,r,o,i)}}return e.push($r),$s(e,a,t),typeof t=="string"?(e.push(Se(In(t))),null):t}var qc=X(`
`),zN=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,G0=new Map;function Vt(e){var n=G0.get(e);if(n===void 0){if(!zN.test(e))throw Error(we(65,e));n=X("<"+e),G0.set(e,n)}return n}var UN=X("<!DOCTYPE html>");function HN(e,n,t,r,a){switch(n){case"select":e.push(Vt("select"));var o=null,i=null;for(m in t)if(et.call(t,m)){var s=t[m];if(s!=null)switch(m){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"defaultValue":case"value":break;default:st(e,r,m,s)}}return e.push($r),$s(e,i,o),o;case"option":i=a.selectedValue,e.push(Vt("option"));var u=s=null,p=null,m=null;for(o in t)if(et.call(t,o)){var y=t[o];if(y!=null)switch(o){case"children":s=y;break;case"selected":p=y;break;case"dangerouslySetInnerHTML":m=y;break;case"value":u=y;default:st(e,r,o,y)}}if(i!=null)if(t=u!==null?""+u:jN(s),sh(i)){for(r=0;r<i.length;r++)if(""+i[r]===t){e.push(Yc);break}}else""+i===t&&e.push(Yc);else p&&e.push(Yc);return e.push($r),$s(e,m,s),s;case"textarea":e.push(Vt("textarea")),m=i=o=null;for(s in t)if(et.call(t,s)&&(u=t[s],u!=null))switch(s){case"children":m=u;break;case"value":o=u;break;case"defaultValue":i=u;break;case"dangerouslySetInnerHTML":throw Error(we(91));default:st(e,r,s,u)}if(o===null&&i!==null&&(o=i),e.push($r),m!=null){if(o!=null)throw Error(we(92));if(sh(m)&&1<m.length)throw Error(we(93));o=""+m}return typeof o=="string"&&o[0]===`
`&&e.push(qc),o!==null&&e.push(Se(In(""+o))),null;case"input":e.push(Vt("input")),u=m=s=o=null;for(i in t)if(et.call(t,i)&&(p=t[i],p!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(we(399,"input"));case"defaultChecked":u=p;break;case"defaultValue":s=p;break;case"checked":m=p;break;case"value":o=p;break;default:st(e,r,i,p)}return m!==null?st(e,r,"checked",m):u!==null&&st(e,r,"checked",u),o!==null?st(e,r,"value",o):s!==null&&st(e,r,"value",s),e.push(V0),null;case"menuitem":e.push(Vt("menuitem"));for(var C in t)if(et.call(t,C)&&(o=t[C],o!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(we(400));default:st(e,r,C,o)}return e.push($r),null;case"title":e.push(Vt("title")),o=null;for(y in t)if(et.call(t,y)&&(i=t[y],i!=null))switch(y){case"children":o=i;break;case"dangerouslySetInnerHTML":throw Error(we(434));default:st(e,r,y,i)}return e.push($r),o;case"listing":case"pre":e.push(Vt(n)),i=o=null;for(u in t)if(et.call(t,u)&&(s=t[u],s!=null))switch(u){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;default:st(e,r,u,s)}if(e.push($r),i!=null){if(o!=null)throw Error(we(60));if(typeof i!="object"||!("__html"in i))throw Error(we(61));t=i.__html,t!=null&&(typeof t=="string"&&0<t.length&&t[0]===`
`?e.push(qc,Se(t)):e.push(Se(""+t)))}return typeof o=="string"&&o[0]===`
`&&e.push(qc),o;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Vt(n));for(var E in t)if(et.call(t,E)&&(o=t[E],o!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(we(399,n));default:st(e,r,E,o)}return e.push(V0),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Zc(e,t,n,r);case"html":return a.insertionMode===0&&e.push(UN),Zc(e,t,n,r);default:if(n.indexOf("-")===-1&&typeof t.is!="string")return Zc(e,t,n,r);e.push(Vt(n)),i=o=null;for(p in t)if(et.call(t,p)&&(s=t[p],s!=null))switch(p){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"style":t4(e,r,s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:n4(p)&&typeof s!="function"&&typeof s!="symbol"&&e.push(Lr,Se(p),ra,Se(In(s)),gl)}return e.push($r),$s(e,i,o),o}}var WN=X("</"),VN=X(">"),GN=X('<template id="'),YN=X('"></template>'),ZN=X("<!--$-->"),qN=X('<!--$?--><template id="'),QN=X('"></template>'),KN=X("<!--$!-->"),XN=X("<!--/$-->"),JN=X("<template"),eE=X('"'),nE=X(' data-dgst="');X(' data-msg="');X(' data-stck="');var tE=X("></template>");function Y0(e,n,t){if(re(e,qN),t===null)throw Error(we(395));return re(e,t),Xe(e,QN)}var rE=X('<div hidden id="'),lE=X('">'),aE=X("</div>"),oE=X('<svg aria-hidden="true" style="display:none" id="'),iE=X('">'),sE=X("</svg>"),dE=X('<math aria-hidden="true" style="display:none" id="'),cE=X('">'),uE=X("</math>"),hE=X('<table hidden id="'),pE=X('">'),fE=X("</table>"),gE=X('<table hidden><tbody id="'),mE=X('">'),vE=X("</tbody></table>"),bE=X('<table hidden><tr id="'),yE=X('">'),wE=X("</tr></table>"),xE=X('<table hidden><colgroup id="'),CE=X('">'),SE=X("</colgroup></table>");function kE(e,n,t,r){switch(t.insertionMode){case 0:case 1:return re(e,rE),re(e,n.segmentPrefix),re(e,Se(r.toString(16))),Xe(e,lE);case 2:return re(e,oE),re(e,n.segmentPrefix),re(e,Se(r.toString(16))),Xe(e,iE);case 3:return re(e,dE),re(e,n.segmentPrefix),re(e,Se(r.toString(16))),Xe(e,cE);case 4:return re(e,hE),re(e,n.segmentPrefix),re(e,Se(r.toString(16))),Xe(e,pE);case 5:return re(e,gE),re(e,n.segmentPrefix),re(e,Se(r.toString(16))),Xe(e,mE);case 6:return re(e,bE),re(e,n.segmentPrefix),re(e,Se(r.toString(16))),Xe(e,yE);case 7:return re(e,xE),re(e,n.segmentPrefix),re(e,Se(r.toString(16))),Xe(e,CE);default:throw Error(we(397))}}function TE(e,n){switch(n.insertionMode){case 0:case 1:return Xe(e,aE);case 2:return Xe(e,sE);case 3:return Xe(e,uE);case 4:return Xe(e,fE);case 5:return Xe(e,vE);case 6:return Xe(e,wE);case 7:return Xe(e,SE);default:throw Error(we(397))}}var _E=X('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),LE=X('$RS("'),$E=X('","'),NE=X('")<\/script>'),EE=X('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),IE=X('$RC("'),ME=X('","'),RE=X('")<\/script>'),PE=X('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),AE=X('$RX("'),FE=X('"'),OE=X(")<\/script>"),Qc=X(","),DE=/[<\u2028\u2029]/g;function Kc(e){return JSON.stringify(e).replace(DE,function(n){switch(n){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var jo=Object.assign,BE=Symbol.for("react.element"),r4=Symbol.for("react.portal"),l4=Symbol.for("react.fragment"),a4=Symbol.for("react.strict_mode"),o4=Symbol.for("react.profiler"),i4=Symbol.for("react.provider"),s4=Symbol.for("react.context"),d4=Symbol.for("react.forward_ref"),c4=Symbol.for("react.suspense"),u4=Symbol.for("react.suspense_list"),h4=Symbol.for("react.memo"),Xp=Symbol.for("react.lazy"),jE=Symbol.for("react.scope"),zE=Symbol.for("react.debug_trace_mode"),UE=Symbol.for("react.legacy_hidden"),HE=Symbol.for("react.default_value"),Z0=Symbol.iterator;function dh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case l4:return"Fragment";case r4:return"Portal";case o4:return"Profiler";case a4:return"StrictMode";case c4:return"Suspense";case u4:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case s4:return(e.displayName||"Context")+".Consumer";case i4:return(e._context.displayName||"Context")+".Provider";case d4:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case h4:return n=e.displayName||null,n!==null?n:dh(e.type)||"Memo";case Xp:n=e._payload,e=e._init;try{return dh(e(n))}catch{}}return null}var p4={};function q0(e,n){if(e=e.contextTypes,!e)return p4;var t={},r;for(r in e)t[r]=n[r];return t}var Cl=null;function Dd(e,n){if(e!==n){e.context._currentValue=e.parentValue,e=e.parent;var t=n.parent;if(e===null){if(t!==null)throw Error(we(401))}else{if(t===null)throw Error(we(401));Dd(e,t)}n.context._currentValue=n.value}}function f4(e){e.context._currentValue=e.parentValue,e=e.parent,e!==null&&f4(e)}function g4(e){var n=e.parent;n!==null&&g4(n),e.context._currentValue=e.value}function m4(e,n){if(e.context._currentValue=e.parentValue,e=e.parent,e===null)throw Error(we(402));e.depth===n.depth?Dd(e,n):m4(e,n)}function v4(e,n){var t=n.parent;if(t===null)throw Error(we(402));e.depth===t.depth?Dd(e,t):v4(e,t),n.context._currentValue=n.value}function dd(e){var n=Cl;n!==e&&(n===null?g4(e):e===null?f4(n):n.depth===e.depth?Dd(n,e):n.depth>e.depth?m4(n,e):v4(n,e),Cl=e)}var Q0={isMounted:function(){return!1},enqueueSetState:function(e,n){e=e._reactInternals,e.queue!==null&&e.queue.push(n)},enqueueReplaceState:function(e,n){e=e._reactInternals,e.replace=!0,e.queue=[n]},enqueueForceUpdate:function(){}};function K0(e,n,t,r){var a=e.state!==void 0?e.state:null;e.updater=Q0,e.props=t,e.state=a;var o={queue:[],replace:!1};e._reactInternals=o;var i=n.contextType;if(e.context=typeof i=="object"&&i!==null?i._currentValue:r,i=n.getDerivedStateFromProps,typeof i=="function"&&(i=i(t,a),a=i==null?a:jo({},a,i),e.state=a),typeof n.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(n=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),n!==e.state&&Q0.enqueueReplaceState(e,e.state,null),o.queue!==null&&0<o.queue.length)if(n=o.queue,i=o.replace,o.queue=null,o.replace=!1,i&&n.length===1)e.state=n[0];else{for(o=i?n[0]:e.state,a=!0,i=i?1:0;i<n.length;i++){var s=n[i];s=typeof s=="function"?s.call(e,o,t,r):s,s!=null&&(a?(a=!1,o=jo({},o,s)):jo(o,s))}e.state=o}else o.queue=null}var WE={id:1,overflow:""};function ch(e,n,t){var r=e.id;e=e.overflow;var a=32-Ns(r)-1;r&=~(1<<a),t+=1;var o=32-Ns(n)+a;if(30<o){var i=a-a%5;return o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,{id:1<<32-Ns(n)+a|t<<a|r,overflow:o+e}}return{id:1<<o|t<<a|r,overflow:e}}var Ns=Math.clz32?Math.clz32:YE,VE=Math.log,GE=Math.LN2;function YE(e){return e>>>=0,e===0?32:31-(VE(e)/GE|0)|0}function ZE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qE=typeof Object.is=="function"?Object.is:ZE,br=null,Jp=null,Es=null,Ve=null,Lo=!1,cd=!1,ci=0,Fr=null,Bd=0;function ml(){if(br===null)throw Error(we(321));return br}function X0(){if(0<Bd)throw Error(we(312));return{memoizedState:null,queue:null,next:null}}function ef(){return Ve===null?Es===null?(Lo=!1,Es=Ve=X0()):(Lo=!0,Ve=Es):Ve.next===null?(Lo=!1,Ve=Ve.next=X0()):(Lo=!0,Ve=Ve.next),Ve}function nf(){Jp=br=null,cd=!1,Es=null,Bd=0,Ve=Fr=null}function b4(e,n){return typeof n=="function"?n(e):n}function J0(e,n,t){if(br=ml(),Ve=ef(),Lo){var r=Ve.queue;if(n=r.dispatch,Fr!==null&&(t=Fr.get(r),t!==void 0)){Fr.delete(r),r=Ve.memoizedState;do r=e(r,t.action),t=t.next;while(t!==null);return Ve.memoizedState=r,[r,n]}return[Ve.memoizedState,n]}return e=e===b4?typeof n=="function"?n():n:t!==void 0?t(n):n,Ve.memoizedState=e,e=Ve.queue={last:null,dispatch:null},e=e.dispatch=QE.bind(null,br,e),[Ve.memoizedState,e]}function eg(e,n){if(br=ml(),Ve=ef(),n=n===void 0?null:n,Ve!==null){var t=Ve.memoizedState;if(t!==null&&n!==null){var r=t[1];e:if(r===null)r=!1;else{for(var a=0;a<r.length&&a<n.length;a++)if(!qE(n[a],r[a])){r=!1;break e}r=!0}if(r)return t[0]}}return e=e(),Ve.memoizedState=[e,n],e}function QE(e,n,t){if(25<=Bd)throw Error(we(301));if(e===br)if(cd=!0,e={action:t,next:null},Fr===null&&(Fr=new Map),t=Fr.get(n),t===void 0)Fr.set(n,e);else{for(n=t;n.next!==null;)n=n.next;n.next=e}}function KE(){throw Error(we(394))}function as(){}var ng={readContext:function(e){return e._currentValue},useContext:function(e){return ml(),e._currentValue},useMemo:eg,useReducer:J0,useRef:function(e){br=ml(),Ve=ef();var n=Ve.memoizedState;return n===null?(e={current:e},Ve.memoizedState=e):n},useState:function(e){return J0(b4,e)},useInsertionEffect:as,useLayoutEffect:function(){},useCallback:function(e,n){return eg(function(){return e},n)},useImperativeHandle:as,useEffect:as,useDebugValue:as,useDeferredValue:function(e){return ml(),e},useTransition:function(){return ml(),[!1,KE]},useId:function(){var e=Jp.treeContext,n=e.overflow;e=e.id,e=(e&~(1<<32-Ns(e)-1)).toString(32)+n;var t=Is;if(t===null)throw Error(we(404));return n=ci++,e=":"+t.idPrefix+"R"+e,0<n&&(e+="H"+n.toString(32)),e+":"},useMutableSource:function(e,n){return ml(),n(e._source)},useSyncExternalStore:function(e,n,t){if(t===void 0)throw Error(we(407));return t()}},Is=null,Xc=Xv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function XE(e){return console.error(e),null}function $o(){}function JE(e,n,t,r,a,o,i,s,u){var p=[],m=new Set;return n={destination:null,responseState:n,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:m,pingedTasks:p,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:a===void 0?XE:a,onAllReady:o===void 0?$o:o,onShellReady:i===void 0?$o:i,onShellError:s===void 0?$o:s,onFatalError:u===void 0?$o:u},t=ud(n,0,null,t,!1,!1),t.parentFlushed=!0,e=tf(n,e,null,t,m,p4,null,WE),p.push(e),n}function tf(e,n,t,r,a,o,i,s){e.allPendingTasks++,t===null?e.pendingRootTasks++:t.pendingTasks++;var u={node:n,ping:function(){var p=e.pingedTasks;p.push(u),p.length===1&&x4(e)},blockedBoundary:t,blockedSegment:r,abortSet:a,legacyContext:o,context:i,treeContext:s};return a.add(u),u}function ud(e,n,t,r,a,o){return{status:0,id:-1,index:n,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:t,lastPushedText:a,textEmbedded:o}}function ui(e,n){if(e=e.onError(n),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function hd(e,n){var t=e.onShellError;t(n),t=e.onFatalError,t(n),e.destination!==null?(e.status=2,e4(e.destination,n)):(e.status=1,e.fatalError=n)}function tg(e,n,t,r,a){for(br={},Jp=n,ci=0,e=t(r,a);cd;)cd=!1,ci=0,Bd+=1,Ve=null,e=t(r,a);return nf(),e}function rg(e,n,t,r){var a=t.render(),o=r.childContextTypes;if(o!=null){var i=n.legacyContext;if(typeof t.getChildContext!="function")r=i;else{t=t.getChildContext();for(var s in t)if(!(s in o))throw Error(we(108,dh(r)||"Unknown",s));r=jo({},i,t)}n.legacyContext=r,pt(e,n,a),n.legacyContext=i}else pt(e,n,a)}function lg(e,n){if(e&&e.defaultProps){n=jo({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function uh(e,n,t,r,a){if(typeof t=="function")if(t.prototype&&t.prototype.isReactComponent){a=q0(t,n.legacyContext);var o=t.contextType;o=new t(r,typeof o=="object"&&o!==null?o._currentValue:a),K0(o,t,r,a),rg(e,n,o,t)}else{o=q0(t,n.legacyContext),a=tg(e,n,t,r,o);var i=ci!==0;if(typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0)K0(a,t,r,o),rg(e,n,a,t);else if(i){r=n.treeContext,n.treeContext=ch(r,1,0);try{pt(e,n,a)}finally{n.treeContext=r}}else pt(e,n,a)}else if(typeof t=="string"){switch(a=n.blockedSegment,o=HN(a.chunks,t,r,e.responseState,a.formatContext),a.lastPushedText=!1,i=a.formatContext,a.formatContext=ON(i,t,r),hh(e,n,o),a.formatContext=i,t){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:a.chunks.push(WN,Se(t),VN)}a.lastPushedText=!1}else{switch(t){case UE:case zE:case a4:case o4:case l4:pt(e,n,r.children);return;case u4:pt(e,n,r.children);return;case jE:throw Error(we(343));case c4:e:{t=n.blockedBoundary,a=n.blockedSegment,o=r.fallback,r=r.children,i=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:i,errorDigest:null},u=ud(e,a.chunks.length,s,a.formatContext,!1,!1);a.children.push(u),a.lastPushedText=!1;var p=ud(e,0,null,a.formatContext,!1,!1);p.parentFlushed=!0,n.blockedBoundary=s,n.blockedSegment=p;try{if(hh(e,n,r),p.lastPushedText&&p.textEmbedded&&p.chunks.push(Kp),p.status=1,pd(s,p),s.pendingTasks===0)break e}catch(m){p.status=4,s.forceClientRender=!0,s.errorDigest=ui(e,m)}finally{n.blockedBoundary=t,n.blockedSegment=a}n=tf(e,o,t,u,i,n.legacyContext,n.context,n.treeContext),e.pingedTasks.push(n)}return}if(typeof t=="object"&&t!==null)switch(t.$$typeof){case d4:if(r=tg(e,n,t.render,r,a),ci!==0){t=n.treeContext,n.treeContext=ch(t,1,0);try{pt(e,n,r)}finally{n.treeContext=t}}else pt(e,n,r);return;case h4:t=t.type,r=lg(t,r),uh(e,n,t,r,a);return;case i4:if(a=r.children,t=t._context,r=r.value,o=t._currentValue,t._currentValue=r,i=Cl,Cl=r={parent:i,depth:i===null?0:i.depth+1,context:t,parentValue:o,value:r},n.context=r,pt(e,n,a),e=Cl,e===null)throw Error(we(403));r=e.parentValue,e.context._currentValue=r===HE?e.context._defaultValue:r,e=Cl=e.parent,n.context=e;return;case s4:r=r.children,r=r(t._currentValue),pt(e,n,r);return;case Xp:a=t._init,t=a(t._payload),r=lg(t,r),uh(e,n,t,r,void 0);return}throw Error(we(130,t==null?t:typeof t,""))}}function pt(e,n,t){if(n.node=t,typeof t=="object"&&t!==null){switch(t.$$typeof){case BE:uh(e,n,t.type,t.props,t.ref);return;case r4:throw Error(we(257));case Xp:var r=t._init;t=r(t._payload),pt(e,n,t);return}if(sh(t)){ag(e,n,t);return}if(t===null||typeof t!="object"?r=null:(r=Z0&&t[Z0]||t["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(t))){if(t=r.next(),!t.done){var a=[];do a.push(t.value),t=r.next();while(!t.done);ag(e,n,a)}return}throw e=Object.prototype.toString.call(t),Error(we(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}typeof t=="string"?(r=n.blockedSegment,r.lastPushedText=z0(n.blockedSegment.chunks,t,e.responseState,r.lastPushedText)):typeof t=="number"&&(r=n.blockedSegment,r.lastPushedText=z0(n.blockedSegment.chunks,""+t,e.responseState,r.lastPushedText))}function ag(e,n,t){for(var r=t.length,a=0;a<r;a++){var o=n.treeContext;n.treeContext=ch(o,r,a);try{hh(e,n,t[a])}finally{n.treeContext=o}}}function hh(e,n,t){var r=n.blockedSegment.formatContext,a=n.legacyContext,o=n.context;try{return pt(e,n,t)}catch(u){if(nf(),typeof u=="object"&&u!==null&&typeof u.then=="function"){t=u;var i=n.blockedSegment,s=ud(e,i.chunks.length,null,i.formatContext,i.lastPushedText,!0);i.children.push(s),i.lastPushedText=!1,e=tf(e,n.node,n.blockedBoundary,s,n.abortSet,n.legacyContext,n.context,n.treeContext).ping,t.then(e,e),n.blockedSegment.formatContext=r,n.legacyContext=a,n.context=o,dd(o)}else throw n.blockedSegment.formatContext=r,n.legacyContext=a,n.context=o,dd(o),u}}function eI(e){var n=e.blockedBoundary;e=e.blockedSegment,e.status=3,w4(this,n,e)}function y4(e,n,t){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(n.allPendingTasks--,n.status!==2&&(n.status=2,n.destination!==null&&n.destination.close())):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=t===void 0?Error(we(432)):t,r.errorDigest=n.onError(e),r.parentFlushed&&n.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(a){return y4(a,n,t)}),r.fallbackAbortableTasks.clear(),n.allPendingTasks--,n.allPendingTasks===0&&(r=n.onAllReady,r()))}function pd(e,n){if(n.chunks.length===0&&n.children.length===1&&n.children[0].boundary===null){var t=n.children[0];t.id=n.id,t.parentFlushed=!0,t.status===1&&pd(e,t)}else e.completedSegments.push(n)}function w4(e,n,t){if(n===null){if(t.parentFlushed){if(e.completedRootSegment!==null)throw Error(we(389));e.completedRootSegment=t}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=$o,n=e.onShellReady,n())}else n.pendingTasks--,n.forceClientRender||(n.pendingTasks===0?(t.parentFlushed&&t.status===1&&pd(n,t),n.parentFlushed&&e.completedBoundaries.push(n),n.fallbackAbortableTasks.forEach(eI,e),n.fallbackAbortableTasks.clear()):t.parentFlushed&&t.status===1&&(pd(n,t),n.completedSegments.length===1&&n.parentFlushed&&e.partialBoundaries.push(n)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function x4(e){if(e.status!==2){var n=Cl,t=Xc.current;Xc.current=ng;var r=Is;Is=e.responseState;try{var a=e.pingedTasks,o;for(o=0;o<a.length;o++){var i=a[o],s=e,u=i.blockedSegment;if(u.status===0){dd(i.context);try{pt(s,i,i.node),u.lastPushedText&&u.textEmbedded&&u.chunks.push(Kp),i.abortSet.delete(i),u.status=1,w4(s,i.blockedBoundary,u)}catch(N){if(nf(),typeof N=="object"&&N!==null&&typeof N.then=="function"){var p=i.ping;N.then(p,p)}else{i.abortSet.delete(i),u.status=4;var m=i.blockedBoundary,y=N,C=ui(s,y);if(m===null?hd(s,y):(m.pendingTasks--,m.forceClientRender||(m.forceClientRender=!0,m.errorDigest=C,m.parentFlushed&&s.clientRenderedBoundaries.push(m))),s.allPendingTasks--,s.allPendingTasks===0){var E=s.onAllReady;E()}}}finally{}}}a.splice(0,o),e.destination!==null&&rf(e,e.destination)}catch(N){ui(e,N),hd(e,N)}finally{Is=r,Xc.current=t,t===ng&&dd(n)}}}function os(e,n,t){switch(t.parentFlushed=!0,t.status){case 0:var r=t.id=e.nextSegmentId++;return t.lastPushedText=!1,t.textEmbedded=!1,e=e.responseState,re(n,GN),re(n,e.placeholderPrefix),e=Se(r.toString(16)),re(n,e),Xe(n,YN);case 1:t.status=2;var a=!0;r=t.chunks;var o=0;t=t.children;for(var i=0;i<t.length;i++){for(a=t[i];o<a.index;o++)re(n,r[o]);a=jd(e,n,a)}for(;o<r.length-1;o++)re(n,r[o]);return o<r.length&&(a=Xe(n,r[o])),a;default:throw Error(we(390))}}function jd(e,n,t){var r=t.boundary;if(r===null)return os(e,n,t);if(r.parentFlushed=!0,r.forceClientRender)r=r.errorDigest,Xe(n,KN),re(n,JN),r&&(re(n,nE),re(n,Se(In(r))),re(n,eE)),Xe(n,tE),os(e,n,t);else if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var a=e.responseState,o=a.nextSuspenseID++;a=X(a.boundaryPrefix+o.toString(16)),r=r.id=a,Y0(n,e.responseState,r),os(e,n,t)}else if(r.byteSize>e.progressiveChunkSize)r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),Y0(n,e.responseState,r.id),os(e,n,t);else{if(Xe(n,ZN),t=r.completedSegments,t.length!==1)throw Error(we(391));jd(e,n,t[0])}return Xe(n,XN)}function og(e,n,t){return kE(n,e.responseState,t.formatContext,t.id),jd(e,n,t),TE(n,t.formatContext)}function ig(e,n,t){for(var r=t.completedSegments,a=0;a<r.length;a++)C4(e,n,t,r[a]);if(r.length=0,e=e.responseState,r=t.id,t=t.rootSegmentID,re(n,e.startInlineScript),e.sentCompleteBoundaryFunction?re(n,IE):(e.sentCompleteBoundaryFunction=!0,re(n,EE)),r===null)throw Error(we(395));return t=Se(t.toString(16)),re(n,r),re(n,ME),re(n,e.segmentPrefix),re(n,t),Xe(n,RE)}function C4(e,n,t,r){if(r.status===2)return!0;var a=r.id;if(a===-1){if((r.id=t.rootSegmentID)===-1)throw Error(we(392));return og(e,n,r)}return og(e,n,r),e=e.responseState,re(n,e.startInlineScript),e.sentCompleteSegmentFunction?re(n,LE):(e.sentCompleteSegmentFunction=!0,re(n,_E)),re(n,e.segmentPrefix),a=Se(a.toString(16)),re(n,a),re(n,$E),re(n,e.placeholderPrefix),re(n,a),Xe(n,NE)}function rf(e,n){ut=new Uint8Array(512),ht=0;try{var t=e.completedRootSegment;if(t!==null&&e.pendingRootTasks===0){jd(e,n,t),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(t=0;t<r.length-1;t++)re(n,r[t]);t<r.length&&Xe(n,r[t])}var a=e.clientRenderedBoundaries,o;for(o=0;o<a.length;o++){var i=a[o];r=n;var s=e.responseState,u=i.id,p=i.errorDigest,m=i.errorMessage,y=i.errorComponentStack;if(re(r,s.startInlineScript),s.sentClientRenderFunction?re(r,AE):(s.sentClientRenderFunction=!0,re(r,PE)),u===null)throw Error(we(395));re(r,u),re(r,FE),(p||m||y)&&(re(r,Qc),re(r,Se(Kc(p||"")))),(m||y)&&(re(r,Qc),re(r,Se(Kc(m||"")))),y&&(re(r,Qc),re(r,Se(Kc(y)))),Xe(r,OE)}a.splice(0,o);var C=e.completedBoundaries;for(o=0;o<C.length;o++)ig(e,n,C[o]);C.splice(0,o),O0(n),ut=new Uint8Array(512),ht=0;var E=e.partialBoundaries;for(o=0;o<E.length;o++){var N=E[o];e:{a=e,i=n;var S=N.completedSegments;for(s=0;s<S.length;s++)if(!C4(a,i,N,S[s])){s++,S.splice(0,s);var M=!1;break e}S.splice(0,s),M=!0}if(!M){e.destination=null,o++,E.splice(0,o);return}}E.splice(0,o);var w=e.completedBoundaries;for(o=0;o<w.length;o++)ig(e,n,w[o]);w.splice(0,o)}finally{O0(n),e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&n.close()}}function sg(e,n){try{var t=e.abortableTasks;t.forEach(function(r){return y4(r,e,n)}),t.clear(),e.destination!==null&&rf(e,e.destination)}catch(r){ui(e,r),hd(e,r)}}Zp.renderToReadableStream=function(e,n){return new Promise(function(t,r){var a,o,i=new Promise(function(m,y){o=m,a=y}),s=JE(e,AN(n?n.identifierPrefix:void 0,n?n.nonce:void 0,n?n.bootstrapScriptContent:void 0,n?n.bootstrapScripts:void 0,n?n.bootstrapModules:void 0),FN(n?n.namespaceURI:void 0),n?n.progressiveChunkSize:void 0,n?n.onError:void 0,o,function(){var m=new ReadableStream({type:"bytes",pull:function(y){if(s.status===1)s.status=2,e4(y,s.fatalError);else if(s.status!==2&&s.destination===null){s.destination=y;try{rf(s,y)}catch(C){ui(s,C),hd(s,C)}}},cancel:function(){sg(s)}},{highWaterMark:0});m.allReady=i,t(m)},function(m){i.catch(function(){}),r(m)},a);if(n&&n.signal){var u=n.signal,p=function(){sg(s,u.reason),u.removeEventListener("abort",p)};u.addEventListener("abort",p)}x4(s)})};Zp.version="18.2.0";var Wa,S4;Wa=Ha,S4=Zp;Wa.version;var nI=Wa.renderToString;Wa.renderToStaticMarkup;Wa.renderToNodeStream;Wa.renderToStaticNodeStream;S4.renderToReadableStream;var k4={exports:{}},tI="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",rI=tI,lI=rI;function T4(){}function _4(){}_4.resetWarningCache=T4;var aI=function(){function e(r,a,o,i,s,u){if(u!==lI){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:_4,resetWarningCache:T4};return t.PropTypes=t,t};k4.exports=aI();var oI=k4.exports;const Dt=Xt(oI);var iI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function L4(e,n){return e(n={exports:{}},n.exports),n.exports}var sI=L4(function(e){(function(n){var t=function(M,w,g){if(!u(w)||m(w)||y(w)||C(w)||s(w))return w;var b,v=0,L=0;if(p(w))for(b=[],L=w.length;v<L;v++)b.push(t(M,w[v],g));else for(var T in b={},w)Object.prototype.hasOwnProperty.call(w,T)&&(b[M(T,g)]=t(M,w[T],g));return b},r=function(M){return E(M)?M:(M=M.replace(/[\-_\s]+(.)?/g,function(w,g){return g?g.toUpperCase():""})).substr(0,1).toLowerCase()+M.substr(1)},a=function(M){var w=r(M);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(M,w){return function(g,b){var v=(b=b||{}).separator||"_",L=b.split||/(?=[A-Z])/;return g.split(L).join(v)}(M,w).toLowerCase()},i=Object.prototype.toString,s=function(M){return typeof M=="function"},u=function(M){return M===Object(M)},p=function(M){return i.call(M)=="[object Array]"},m=function(M){return i.call(M)=="[object Date]"},y=function(M){return i.call(M)=="[object RegExp]"},C=function(M){return i.call(M)=="[object Boolean]"},E=function(M){return(M-=0)==M},N=function(M,w){var g=w&&"process"in w?w.process:w;return typeof g!="function"?M:function(b,v){return g(b,M,v)}},S={camelize:r,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(M,w){return t(N(r,w),M)},decamelizeKeys:function(M,w){return t(N(o,w),M,w)},pascalizeKeys:function(M,w){return t(N(a,w),M)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:n.humps=S})(iI)}).decamelize,dI=function(e){if(Array.isArray(e))return e},cI=function(e,n){if(typeof Symbol<"u"&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(u){a=!0,o=u}finally{try{r||s.return==null||s.return()}finally{if(a)throw o}}return t}},dg=function(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r},uI=function(e,n){if(e){if(typeof e=="string")return dg(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?dg(e,n):void 0}},hI=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},pI=function(e,n){return dI(e)||cI(e,n)||uI(e,n)||hI()},$4=L4(function(e){function n(){return e.exports=n=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o])}return t},n.apply(this,arguments)}e.exports=n}),fI=function(e,n){if(e==null)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a},N4=function(e,n){if(e==null)return{};var t,r,a=fI(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a},gI=B.createContext(null);function ph(e){var n=e.children,t=N4(e,["children"]);return typeof n!="string"&&(n=nI(n)),En.createElement("template",$4({},t,{dangerouslySetInnerHTML:{__html:n}}))}function fh(e){var n=e.root,t=e.children;return _3.createPortal(t,n)}function mI(e){var n=B.forwardRef(function(t,r){var a,o,i=t.mode,s=t.delegatesFocus,u=t.styleSheets,p=t.ssr,m=t.children,y=N4(t,["mode","delegatesFocus","styleSheets","ssr","children"]),C=(o=B.useRef((a=r)&&a.current),B.useEffect(function(){a&&(a.current=o.current)},[a]),o),E=B.useState(null),N=pI(E,2),S=N[0],M=N[1],w="node_".concat(i).concat(s);return B.useLayoutEffect(function(){if(C.current)try{if(typeof r=="function"&&r(C.current),p){var g=C.current.shadowRoot;return void M(g)}var b=C.current.attachShadow({mode:i,delegatesFocus:s});u.length>0&&(b.adoptedStyleSheets=u),M(b)}catch(v){(function(L){var T=L.error,A=L.styleSheets,O=L.root;switch(T.name){case"NotSupportedError":A.length>0&&(O.adoptedStyleSheets=A);break;default:throw T}})({error:v,styleSheets:u,root:S})}},[r,C,u]),En.createElement(En.Fragment,null,En.createElement(e.tag,$4({key:w,ref:C},y),(S||p)&&En.createElement(gI.Provider,{value:S},p?En.createElement(ph,{shadowroot:"open"},e.render({root:S,ssr:p,children:m})):En.createElement(fh,{root:S},e.render({root:S,ssr:p,children:m})))))});return n.propTypes={mode:Dt.oneOf(["open","closed"]),delegatesFocus:Dt.bool,styleSheets:Dt.arrayOf(Dt.instanceOf(globalThis.CSSStyleSheet)),ssr:Dt.bool,children:Dt.node},n.defaultProps={mode:"open",delegatesFocus:!1,styleSheets:[],ssr:!1,children:null},n}ph.propTypes={children:Dt.oneOfType([Dt.string,Dt.node])},ph.defaultProps={children:""},fh.propTypes={root:Dt.object.isRequired,children:Dt.node},fh.defaultProps={children:null};var Jc=new Map;function vI(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"core",t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(r){return r.children};return new Proxy(e,{get:function(r,a){var o=sI(a,{separator:"-"}),i="".concat(n,"-").concat(o);return Jc.has(i)||Jc.set(i,mI({tag:o,render:t})),Jc.get(i)}})}var bI=vI();const yI=()=>d("div",{className:"prose",children:[l("h1",{children:"Forms"}),d("blockquote",{className:"intro",children:["There is something about styling forms, that's so not fun. It's like ",l("em",{children:'"How much less fun could this be?"'})," ","and the answer is ",l("em",{children:'"None, none... less fun."'}),l("div",{className:"attrib",children:"Nigel Tufnel's website designer"})]}),l("h2",{children:"None Less Fun"}),d(ie,{children:[d("div",{children:[l("p",{children:"Anyone reading this who is old enough to have served in the browser wars will no doubt be rolling their eyes at this point, thinking that kids these days don't know how lucky they are."}),d("p",{children:["It's certainly true that things are ",l("i",{children:"much"})," better than they used.  But despite all the advances in CSS support and cross-browser compatibility, the default styling for HTML forms still looks like 1995 called and asked for its website back."]})]}),d("div",{children:[l("p",{children:"Badger CSS includes form styling presets, supporting both light and dark themes out of the box. It uses native form components for accessibility and mobile friendliness.  Everything is configurable if you want to change things, but you don't have to."}),l("p",{children:"Here's the same form rendered twice.  Once with the default HTML styling and again with the default Badger CSS styles.  In case you're wondering, there's no Javascript in any of these forms.  It's all just vanilla HTML and CSS."})]})]}),d("div",{className:"grid-2 gap-8 mar-t-10 stack-desktop",children:[d("div",{className:"output",children:[l("h3",{className:"mar-v",children:"Default HTML Form Styles"}),l("h4",{className:"mar-t mar-b-8",children:"Would you been seen holding this?"}),l(bI.div,{children:l("div",{dangerouslySetInnerHTML:{__html:m0}})})]}),d("div",{className:"output",children:[l("h3",{className:"mar-v",children:"Badger CSS Form Styles"}),l("h4",{className:"mar-t mar-b-8",children:"Beautiful plumage!"}),l("div",{dangerouslySetInnerHTML:{__html:m0}})]})]}),l("h2",{className:"mar-t-8",children:"Adaptive Sizes"}),d(ie,{children:[d("p",{children:["All form components are sized using ems and will adapt to whatever the current text size is.  If you want a small form, for example, then you just need to add a ",l("code",{children:"small"})," class to the form or one of its parent containers."]}),l(Il,{title:"Try it out",className:"mar-t-4",children:"Try selecting different sizes from the options below and see how the form inputs scale."})]}),l(W$,{}),l("h2",{children:"Accessibility and Focus"}),d(ie,{children:[l("p",{children:"If you've played with any of the forms above you may have noticed the prominent ring around inputs when focussed.  This is important for accessibility to clearly indicate which field is selected."}),d("p",{children:["If for some reason you really, really need to disabled it because you're indicating the focus some other way then you can add the"," ",l("code",{children:"no-focus"})," class to the inputs."]})]}),l(I,{html:z$,language:"html"}),l("h2",{children:"Themes and Surfaces"}),d(ie,{children:[l("p",{children:"Styling forms is made that much harder these days by the need to support both light and dark themes.  On top of that we might want to have forms included on different surfaces with varying levels of background intensity. Thanks to the magic of CSS custom properties we can tweak the colors used to render forms depending on the background color of the container."}),l("p",{children:"In these examples below it may not be immediately obvious that the colors are slightly different but they are.  They're different so that they look more-or-less the same, while providing adequate contrast."})]}),l("div",{className:"grid-3 gap-4 stack-widescreen mar-b-8",children:["surface","surface-1","surface-2","surface-3","surface-4","surface-5"].map(e=>d("div",{className:`${e} pad-6 border shadow-2`,children:[l("h3",{className:"font-mono mar-b-3",children:e}),l("div",{dangerouslySetInnerHTML:{__html:j$}})]},e))})]}),wI=Object.freeze(Object.defineProperty({__proto__:null,default:yI},Symbol.toStringTag,{value:"Module"})),xI=`<div class="input">
  Ceci n'est pas une entrée
</div>
`,CI=`<div class="input inline">
  Ceci n'est pas une entrée
</div>
`,SI=`<div class="grid-2 gap-4">
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
`,kI=`<div class="input" disabled>
  Ceci n'est pas une entrée
</div>

<div class="input disabled mar-t-4">
  Ceci n'est pas une entrée
</div>
`,TI=()=>d("div",{className:"prose",children:[l("h1",{children:"Fake Input"}),d("p",{children:["If you want something that isn't an input to look like an input then you can add the ",l("code",{children:"input"})," CSS class."]}),l(I,{html:xI,language:"html",caption:"Inline Text Input"}),l("h2",{children:"Inline Input"}),d("p",{children:["Just like regular inputs, they are full-width by default. Add the ",l("code",{children:"inline"})," class to give it a fluid width."]}),l(I,{html:CI,language:"html",caption:"Inline Text Input"}),l("h2",{children:"Grid and Flex Layout"}),d("p",{children:["You can also use the ",l(oe,{to:"/utilities/grid",text:"grid"})," and"," ",l(oe,{to:"/utilities/flexbox",text:"flexbox"})," classes to control layout."]}),l(I,{html:SI,language:"html",caption:"Grid and Flex"}),l("h2",{children:"Disabled Inputs"}),d("p",{children:["Add the ",l("code",{children:"disabled"})," attribute or CSS class if you want it to look disabled."]}),l(I,{html:kI,language:"html",caption:"Not an Input"})]}),_I=Object.freeze(Object.defineProperty({__proto__:null,default:TI},Symbol.toStringTag,{value:"Module"})),LI=`<style>
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
</div>`,$I=`<style>
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
</div>`,NI=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Multiple Input"}),l("p",{children:"Sometimes you need to create a form component that looks like a single input but is comprised of multiple inputs or other elements."}),d("p",{children:["In this case you can wrap them up in a container with the ",l("code",{children:"inputs"})," class.  See the"," ",l(oe,{to:"/forms/prefix-suffix",text:"Prefix and Suffix"})," page for details on adding the prefix icon."]}),l("h2",{children:"Credit Card Number"}),l("p",{children:"In this example we create an input for a credit card number. This demo doesn't have any interactive functionality and leaves a lot to be desired in terms of user experience.  For example, you can enter more than 4 numbers in each section, the focus doesn't automatically switch from one block to the next, and so on. But this is only supposed to be a demonstration of the styling, not the functionality."}),l("p",{children:"Making it work properly is left as an exercise for the reader."}),l(I,{html:LI,language:"html",caption:"Credit Card"}),l("h2",{children:"Date"}),l("p",{children:"This is also a less-than-perfect implementation in terms of functionality, but it demonstrates the form."}),l(I,{html:$I,language:"html",caption:"Date"})]}),EI=Object.freeze(Object.defineProperty({__proto__:null,default:NI},Symbol.toStringTag,{value:"Module"})),II=`<div class="field">
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
`,MI=`<div class="grid-3 gap-4 stack-tablet">
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

`,RI=`<div class="grid-3 gap-4 stack-tablet">
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

`,PI=`<div class="grid-3 gap-4 stack-tablet">
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

`,AI=`<div class="field">
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
`,FI=`<div class="field">
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
`,OI=`<div class="field">
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

`,DI=`<div class="field">
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

`,BI=`<div class="field">
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
`,jI=`<div class="field">
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
`,zI=`<div class="field">
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
`,UI=`<div class="field">
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
`,HI=()=>d("div",{className:"prose",children:[l("h1",{children:"Prefix and Suffix"}),d("p",{children:["You can add prefixes and suffixes to form fields, or any combination of ",l(oe,{to:"/forms/multi-inputs",text:"inputs"}),". Not only do the colours and focus rings work correctly, but they also adapt their colors for ",l("code",{children:"valid"})," and ",l("code",{children:"invalid"})," fields."]}),l(I,{html:II,language:"html",caption:"Prefix and Suffix"}),l("h2",{children:"Shaded"}),d("p",{children:["To visually distinguish a prefix or suffix you you can add the ",l("code",{children:"shaded"})," class..."]}),l(I,{html:MI,language:"html",caption:"Shaded"}),l("h2",{children:"Lined"}),d("p",{children:["...or the ",l("code",{children:"lined"})," class."]}),l(I,{html:RI,language:"html",caption:"Lined"}),l("h2",{children:"Shaded and Lined"}),l("p",{children:"...or both."}),l(I,{html:PI,language:"html",caption:"Shaded and Lined"}),l("h2",{children:"Input Prefix"}),d("p",{children:["If you want to add a prefix to a field you should enclose the input in an element with the ",l("code",{children:"inputs"})," class and add the"," ",l("code",{children:"prefix"})," class to the prefix element.  You can add a prefix to a text input, textarea, select or a checkbox or radio option with the ",l("code",{children:"border"})," class set.  You can try it without the "," ",l("code",{children:"border"})," but the effect is lost somewhat."]}),l("h3",{children:"Text Input With Prefix"}),l(I,{html:AI,language:"html",caption:"Text Prefix"}),l("h3",{children:"Text Area Input With Prefix"}),l(I,{html:FI,language:"html",caption:"Text Area Prefix"}),l("h3",{children:"Select Input With Prefix"}),l(I,{html:OI,language:"html",caption:"Select Prefix"}),l("h3",{children:"Checkbox With Prefix"}),d("p",{children:["This only really works with checkboxes that have the"," ",l("code",{children:"border"})," class"]}),l(I,{html:DI,language:"html",caption:"Checkbox Prefix"}),l("h2",{children:"Input Suffix"}),d("p",{children:["Adding an input suffix is just the same, except for giving your suffix element the ",l("code",{children:"suffix"})," class and putting it after the input."]}),l("h3",{children:"Text Input With Suffix"}),l(I,{html:BI,language:"html",caption:"Text Suffix"}),l("h3",{children:"Text Area Input With Suffix"}),l(I,{html:jI,language:"html",caption:"Text Area Suffix"}),l("h3",{children:"Select Input With Suffix"}),l(I,{html:zI,language:"html",caption:"Select Suffix"}),l("h3",{children:"Checkbox With Suffix"}),d("p",{children:["This only really works with checkboxes that have the"," ",l("code",{children:"border"})," class"]}),l(I,{html:UI,language:"html",caption:"Checkbox Suffix"})]}),WI=Object.freeze(Object.defineProperty({__proto__:null,default:HI},Symbol.toStringTag,{value:"Module"})),VI=`<label>
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
`,GI=`<label class="inline radio">
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
`,YI=`<label class="inline border">
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
    <input type="radio" name="four" disabled>
    Disabled
  </label>
</div>
`,ZI=`<div>
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
</div>`,qI=()=>d("div",{className:"prose",children:[l("h1",{children:"Radio Buttons"}),l("h2",{children:"Radio Class"}),d("p",{children:["Radio buttons are implemented much like"," ",l(oe,{to:"/forms/checkboxes",text:"checkboxes"}),".  Create a"," ",l("code",{children:"label"})," enclosing an ",l("code",{children:"input"})," with the"," ",l("code",{children:'type="radio"'})," attribute."]}),d("p",{children:["Badger-CSS identifies labels that include a radio button input using the ",l("code",{children:":has()"})," CSS selector. All the major browsers currently support it, although Firefox was a bit late to the party, only adding support in v121 released on 19th December 2023."]}),d("p",{children:["As a work-around to support older versions of Firefox, you can add the ",l("code",{children:"radio"})," class to the ",l("code",{children:"label"}),"."]}),l(I,{html:VI,language:"html",caption:"Radio Buttons"}),l("h2",{children:"Inline Radio Buttons"}),d("p",{children:["Radio buttons are full-width by default. Add the ",l("code",{children:"inline"})," class to give them a fluid width."]}),l(I,{html:GI,language:"html",caption:"Inline Radio Buttons"}),l("h2",{children:"Radio Button Borders"}),d("p",{children:["Add the ",l("code",{children:"border"})," class for borders.  You may need to manually add margins using the ",l(oe,{to:"/utilities/spacing",text:"margin"})," utility classes, or contain multiple checkboxes using the "," ",l(oe,{to:"/utilities/flexbox",text:"flexbox"})," or "," ",l(oe,{to:"/utilities/grid",text:"grid"})," container classes and set the gap between elements."]}),l(I,{html:YI,language:"html",caption:"Border Radio Buttons"}),l("h2",{children:"Custom Radio Buttons"}),l(I,{html:ZI,language:"html",caption:"Custom Checkboxes"})]}),QI=Object.freeze(Object.defineProperty({__proto__:null,default:qI},Symbol.toStringTag,{value:"Module"})),KI=`<select name="animal">
  <option value="">-- Choose an animal --</option>
  <option value="ant">Ant</option>
  <option value="badger">Badger</option>
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
  <option value="elephant">Elephant</option>
  <option value="ferret">Ferret</option>
  <option value="goldfish" disabled>Goldfish</option>
</select>
`,XI=`<select name="animal" class="inline">
  <option value="badger">Badger</option>
  <option value="mushroom">Mushroom</option>
  <option value="snake">Snake</option>
</select>
<select name="color" class="inline mar-l-2">
  <option value="badger">Badger</option>
  <option value="mushroom">Mushroom</option>
  <option value="snake">Snake</option>
</select>
`,JI=`<div class="grid-2 gap-4">
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
`,eM=`<select name="animal" required>
  <option value="" hidden disabled selected>Choose an animal</option>
  <option value="ant">Ant</option>
  <option value="badger">Badger</option>
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
  <option value="elephant">Elephant</option>
  <option value="ferret">Ferret</option>
  <option value="goldfish">Goldfish</option>
</select>
`,nM=`<div class="small flex top gap-4 mar-b-4">
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
`,tM=`<select name="animal">
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
`,rM=`<div>
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

`,lM=`<div class="select">
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
</div>`,aM=()=>d("div",{className:"prose",children:[l("h1",{children:"Select Input"}),l("p",{children:"Select inputs are the bane of web developers and designers everywhere. There are notoriously difficult to style.  They don't want to align with other elements.  Their size is often wrong.  And just when you think you've finally cracked it, you look at it on another browser and see that it's all on the wonk."}),l("p",{children:"I have wasted far too many hours of my life starting at forms like this one trying to get everything the same size and aligned properly."}),l(I,{html:nM,language:"html",caption:"Select Alignment"}),d("p",{children:["The least bad solution is to set ",l("code",{children:"appearance: none"})," to remove the browser-specific rendering quirks.  The problem then is that you also lose drop down arrow indicating that it's a select input.  So we have to put that back in using an SVG background image. But you don't need to worry about that - I did so you don't have to."]}),l(I,{html:KI,language:"html",caption:"Select Input"}),l("h2",{children:"Inline Select Input"}),d("p",{children:["Select inputs are full-width by default.  Add the ",l("code",{children:"inline"})," ","class to make them only as wide as necessary."]}),l(I,{html:XI,language:"html",caption:"Inline Select"}),l("h2",{children:"Grid and Flex Layout"}),d("p",{children:["You can also use the ",l(oe,{to:"/utilities/grid",text:"grid"})," and"," ",l(oe,{to:"/utilities/flexbox",text:"flexbox"})," classes to control layout."]}),l(I,{html:JI,language:"html",caption:"Grid/Flex"}),l("h2",{children:"Custom Icon"}),d("p",{children:["You can define your own drop down arrow icon using the"," ",l("code",{children:"--arrow-down"})," property.  It's a little bit tricky because you have to URI encode the SVG and define it as shown in this example.  If you've got an SVG icon with a simple path and your icon is 16px square then you can copy the definition from this example and insert your path data into the ",l("code",{children:"path d='...'"})," part."]}),d("p",{children:["Note that you can't use ",l("code",{children:"currentColor"})," to set the stroke or fill color.  You can define separate ",l("code",{children:"--arrow-down"})," ","properties for you light and dark themes, or you can use a neutral color like ",l("code",{children:"#888"})," which works well in both cases."]}),l(I,{html:rM,language:"html",caption:"Custom Icon"}),l("h2",{children:"Placeholder"}),d("p",{children:["Another annoying thing about select inputs is that they don't support the ",l("code",{children:"placeholder"})," attribute.  You can work around the problem by adding the ",l("code",{children:"required"})," attribute to the"," ",l("code",{children:"select"})," input and the ",l("code",{children:"hidden"}),","," ",l("code",{children:"disabled"})," and ",l("code",{children:"selected"})," attributes to the first option which contains your placeholder text."]}),l(I,{html:eM,language:"html",caption:"Select Placeholder"}),l("h2",{children:"Option Groups"}),d("p",{children:["You can group options using the ",l("code",{children:"optgroup"})," element."]}),l(I,{html:tM,language:"html",caption:"Option Groups"}),l("h2",{children:"Custom Select Component"}),d(ie,{align:"bottom",children:[d("div",{children:[d("p",{className:"mar-t-none",children:["Sometimes the builtin ",l("code",{children:"select"})," element just isn't enough. If you want to define your own select component with more advanced functionality then you can piggy-back off the provided styles."]}),d("p",{children:["Add the ",l("code",{children:"select"})," CSS class to a container element. Then define an element with an ",l("code",{children:"input"})," class with either ",l("code",{children:"placeholder"})," for placeholder text or"," ",l("code",{children:"value"})," to designated a selected value.  Options should be defined in elements with the ",l("code",{children:"option"})," class, all in a container element having the ",l("code",{children:"options"})," class."]})]}),l(Il,{children:"The examples below don't have any interactivity.  They're just for show."})]}),l(I,{html:lM,language:"html",caption:"Custom Select"})]}),oM=Object.freeze(Object.defineProperty({__proto__:null,default:aM},Symbol.toStringTag,{value:"Module"})),iM=`<style>
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
</form>`,sM=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Form Styling"}),l("p",{children:"There are numerous CSS properties that you can set to change the styling."}),l(I,{html:iM,language:"html",caption:"Form Styling",expand:!0})]}),dM=Object.freeze(Object.defineProperty({__proto__:null,default:sM},Symbol.toStringTag,{value:"Module"})),cM=`<input
  type="text"
  name="my-input"
  placeholder="Placeholder text"
/>
`,uM=`<input
  type="text"
  name="my-input"
  placeholder="Inline"
  class="inline"
/>
`,hM=`<div class="grid-2 gap-4">
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
`,pM=`<div class="grid-3 gap-4">
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
`,fM=`<div class="grid-2 gap-4">
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
</div>`,gM=()=>d("div",{className:"prose",children:[l("h1",{children:"Text Input"}),l("p",{children:"Text inputs are perhaps the most common kind of input."}),l(I,{html:cM,language:"html",caption:"Text Input"}),l("h2",{children:"Inline Text Input"}),d("p",{children:["Inputs are full-width by default. Add the ",l("code",{children:"inline"})," class to give it a fluid width."]}),l(I,{html:uM,language:"html",caption:"Inline Text Input"}),l("h2",{children:"Grid and Flex Layout"}),d("p",{children:["You can also use the ",l(oe,{to:"/utilities/grid",text:"grid"})," and"," ",l(oe,{to:"/utilities/flexbox",text:"flexbox"})," classes to control layout."]}),l(I,{html:hM,language:"html",caption:"Grid and Flex"}),l("h2",{children:"Other Input Types"}),d("p",{children:["You can set the ",l("code",{children:"type"})," to one of the other text-based input types (e.g. ",l("code",{children:"password"}),", ",l("code",{children:"number"}),","," ",l("code",{children:"telephone"}),", ",l("code",{children:"date"}),", ",l("code",{children:"time"}),", etc). There's also some styling provided for the ",l("code",{children:"color"})," type although it's notoriously hard to style and the appearance can vary on different browsers, devices and operating systems."]}),l(I,{html:pM,language:"html",caption:"Other Input Types"}),l("h2",{children:"Disabled Text Input"}),d("p",{children:["Add the ",l("code",{children:"disabled"})," attribute to disable the input or the ",l("code",{children:"disabled"})," CSS class."]}),l(I,{html:fM,language:"html",caption:"Disabled Text Input"})]}),mM=Object.freeze(Object.defineProperty({__proto__:null,default:gM},Symbol.toStringTag,{value:"Module"})),vM=`<textarea
  rows="5"
  placeholder="I like badgers because..."
></textarea>
`,bM=`<textarea
  rows="5"
  class="inline"
  placeholder="I like badgers because..."
></textarea>
`,yM=`<div class="grid-2 gap-4">
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

`,wM=`<textarea
  rows="5"
  placeholder="Badgers are brilliant..."
  disabled
></textarea>

<textarea
  rows="5"
  placeholder="Mushrooms are magic..."
  class="disabled"
></textarea>
`,xM=()=>d("div",{children:[l("h1",{children:"Text Area Input"}),d("p",{children:["Text area inputs are much like ",l(oe,{to:"/form/text",text:"text inputs"}),"."]}),d("p",{children:["One thing to note (that always catches me out) - if you want placeholder text to appear then you have to make sure there is ",l("em",{children:"nothing"})," ","(not even a newline) between the opening and closing ",l("code",{children:"textarea"})," tags."]}),l(I,{html:vM,language:"html",caption:"Text Area Input",expand:!0}),l("h2",{children:"Inline Text Area Input"}),d("p",{children:["Text area inputs are full-width by default.  Add the"," ",l("code",{children:"inline"})," class to give them a fluid width."]}),l(I,{html:bM,language:"html",caption:"Inline Text Area Input",expand:!0}),l("h2",{children:"Grid and Flex Layout"}),d("p",{children:["You can also use the ",l(oe,{to:"/utilities/grid",text:"grid"})," and"," ",l(oe,{to:"/utilities/flexbox",text:"flexbox"})," classes to control layout."]}),l(I,{html:yM,language:"html",caption:"Grid and Flex"}),l("h2",{children:"Disabled Text Area Input"}),d("p",{children:["Add the ",l("code",{children:"disabled"})," attribute to disabled the input or the ",l("code",{children:"disabled"})," CSS class."]}),l(I,{html:wM,language:"html",caption:"Disabled Text Area Input"})]}),CM=Object.freeze(Object.defineProperty({__proto__:null,default:xM},Symbol.toStringTag,{value:"Module"})),SM=e=>B.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},B.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),B.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),B.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),B.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),B.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),B.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),B.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),kM=()=>d("div",{className:"prose",children:[l("h1",{children:"What's Wrong With It?"}),l("p",{className:"intro wide",children:"There are many, many CSS toolkits and UI frameworks already out there to choose from. If you're looking for something that's stable, reliable, comprehensive and well-supported then this probably isn't for you."}),d(ie,{children:[d("div",{children:[l("h2",{children:"Work in Progress"}),l("p",{children:"This is a work in progress.  It started out life as an ad-hoc collection of CSS classes that I copy and pasted between projects.  Then it became part of Bader UI, a collection of React components implementing some basic UI widgets.  Now it's being moved out into its own module which concentrates on just the CSS without any dependency on React."}),l("p",{children:"One of the reasons that I'm moving it into a new module is because it gives me the opportunity to break backwards compatibility.  There are some things that, given the chance to do again, I would do differently. This gives me that chance and hopefully I won't make too many bad decisions that I later come to regret.  But until I've had a chance to eat my own dog food and build a few sites with it, I can't predict what's going to work well and what isn't."}),l("p",{children:"I'm also migrating everything to use modern CSS techniques which are now well supported by browsers.  That means that a lot of things that were previously hard become much easier.  But different."}),l("p",{children:"As a result, this module is still in a state of flux.  If you build anything with it now then there's a good chance that something will break in the near future."}),l("h2",{children:"Some Assembly Required"}),l("p",{children:"If you have a good working knowledge of modern CSS and SASS then you should be able to easily adapt it to your needs.  Nearly everything is customisable, either through SASS variables, CSS custom properties, or by using the provided scripts to build your own toolkit."}),d("p",{children:["You don't need to buy in to the whole package.  As well as being customisable it's also modular.  With a small amount of effort you can configure it to include the bits your want and ignore the rest. Or you can browse the source code and borrow the ",l("i",{children:"ideas"})," that you think are useful."]}),l("p",{children:"Just remember that this is aimed more at people who already know how to build web sites and are familiar with CSS. If you're looking for a fully-featured, widely used and well supported UI toolkit that does everything for you then there are plenty of others to choose from."}),l("p",{children:"If you don't like the sound of that then these probably aren't the badgers you're looking for.  You can go about your business. Move along."})]}),d("div",{children:[l("h2",{children:"Opinionated and Selfish Software"}),d("p",{children:["This is based on my personal collection of CSS styles and utility classes that I use on a daily basis in my job building web sites for clients. It's Open Source and you're welcome to use it but be aware that it's something that I built for ",l("em",{children:"me"})," to help"," ",l("em",{children:"me"})," get my job done."]}),l("p",{children:"I didn't build it for you (unless you're one of my clients) and I don't really have the time or inclination to promote it, increase the user base or provide unpaid support for it.  It's not my intention for this to be the next great CSS toolkit - there are plenty of those already. My goal isn't to change the World, only to make it a slightly better place."}),l("p",{children:"So be warned that it does things the way I like to do them.  You may not agree with all my decisions, but that's fine.  They're my decisions to make, not yours.  It's free software (in both senses: free speech and free beer) and if you don't like it then you're entitled to a full refund of the price you paid."}),l("p",{children:"On the plus-side, the Badger-UI toolkit contains a lot of tried and tested techniques for managing web site styles that have been honed over nearly 30 years of experience.  It contains the features that I can't live without when I'm building a web site.  Of course, you may have different ideas about the best way to do it, but this is what works for me.  It's supposed to be a reasonable starting point not the final destination."}),l("div",{className:"text-center",children:l(SM,{style:{width:"12em",marginTop:"2rem"}})})]})]})]}),TM=Object.freeze(Object.defineProperty({__proto__:null,default:kM},Symbol.toStringTag,{value:"Module"})),E4=({path:e,onClick:n,width:t=512,height:r=512,style:a,className:o="night-and-day--icon",fill:i="currentColor"})=>l("svg",{"aria-hidden":"true",focusable:"false",className:o,style:a,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${t} ${r}`,onClick:n,children:l("path",{d:e,fill:i})}),I4=e=>l(E4,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),M4=({Icon:e,caption:n,onClick:t,iconClass:r,iconStyle:a,captionStyle:o,className:i="night-and-day--switcher",captionClass:s="night-and-day--caption",style:u={display:"inline-block"}})=>d("div",{className:i,onClick:t,style:u,children:[l(e,{style:a,className:r}),!!n&&l("div",{className:s,style:o,children:n})]}),_M=e=>{const{setDark:n}=Va();return l(M4,{Icon:I4,onClick:n,...e})},R4=e=>l(E4,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),LM=e=>{const{setLight:n}=Va();return l(M4,{Icon:R4,onClick:n,...e})},$M=({sunrise:e={},nightfall:n={}})=>{const{isLight:t,setLight:r,setDark:a}=Va();return t?l(LM,{onClick:a,...e}):l(_M,{onClick:r,...n})},P4=B.createContext(),Va=()=>B.useContext(P4),is="dark",eu="light",A4="(prefers-color-scheme: dark)",NM=()=>{var e;return(e=window==null?void 0:window.matchMedia)==null?void 0:e.call(window,A4).matches},ea=window==null?void 0:window.localStorage,EM=e=>e.split(" "),cg=(e,n="")=>`${e} ${n}`,IM=({storageKey:e,defaultVariant:n,children:t})=>{const r=e?ea==null?void 0:ea.getItem(e):null,[a,o=""]=r?EM(r):[NM(),null],[i,s]=B.useState(a===is),[u,p]=B.useState(o||n),m=N=>{s(N),e&&ea&&ea.setItem(e,cg(N?is:eu,u))},y=N=>{p(N),e&&ea&&ea.setItem(e,cg(i?is:eu,N))},C=N=>m(N.matches);B.useEffect(()=>{if(window&&window.matchMedia){const N=window.matchMedia(A4);return N.addEventListener("change",C),()=>N==null?void 0:N.removeEventListener("change",C)}},[]);const E={isDark:i,isLight:!i,setDark:()=>m(!0),setLight:()=>m(!1),setIsDark:s,toggleTheme:()=>m(!i),theme:i?is:eu,variant:u,setVariant:y};return l(P4.Provider,{value:E,children:t})},MM=()=>d("div",{className:"prose",children:[l("h1",{children:"What's Good About It?"}),l("p",{className:"intro wide",children:"If you're wondering what makes Badger CSS better than all the other CSS frameworks and UI toolkits out there then the short and simple answer is that it isn't.  It's just another one to add to the pile."}),d(ie,{children:[d("div",{children:[l("h2",{children:"A Solid Foundation"}),l("p",{children:"Badger CSS is a collection of tools and techniques that I've built up over many years (nearly 30) of building web sites.  It's what works for me and maybe it will work for you too.  But I'm not making any promises."}),l("p",{children:"It's supposed to be a starting point, not a destination.  If you're building a web site and you want a reasonable foundation to build your styles on then it might be better for you than a more fully-featured toolkit that has everything including the kitchen sink."}),l("h2",{children:"Small(ish) and Simple"}),l("p",{children:"The default Badger CSS stylesheet is around 15kb minimised and compressed (around 100kb uncompressed).  That includes all 16 color ranges which you probably aren't ever going to need in practice. If you define your own palette with a limited set of colors then you can reduce the size a fair bit."}),l("h2",{children:"Modern CSS"}),l("p",{children:"It is based on modern CSS techniques and works in all modern browsers. In particular it makes heavy use of CSS custom properties that you can easily change as required. Behind the scenes it is built using SASS (specifically SCSS) which gives you more opportunities for configuring and extending it."}),l("h2",{children:"Color Management"}),d("p",{children:["Badger CSS uses a novel approach to defining and selecting"," ",l(oe,{to:"/colors/ranges",text:"color ranges"}),".  The color palette was created using ",l("a",{href:"https://abw.github.io/badger-color",children:"Badger Color"})," (which itself was created for this specific task) and you can use it to create your own custom palettes if necessary. The palette data that it generates can be automatically expanded out to SASS component files, ready to be used in Badger CSS."]}),d("p",{children:["You can easily change the hues of the standard palette to match your ",l(oe,{to:"/colors/brand",text:"brand colors"}),".  It will automatically create greyscale color ranges based on your primary brand color."]}),d("p",{children:["The use of ",l(oe,{to:"/colors/variables",text:"CSS custom properties"})," ","to define color ranges, and CSS class scopes to select them, makes it easy to create UI components that work automatically with any color range. It also makes it easy to define different color schemes for light and dark themes."]}),l("h2",{children:"Utility Classes"}),d("p",{children:["Badger CSS comes with a core set of"," ",l(oe,{to:"/utilities",text:"utility classes"})," for ad-hoc styling. They are intentionally limited to the kind of things that I find myself using all the time.  If you prefer the approach of"," ",l("a",{href:"https://tailwindcss.com/",children:"Tailwind"})," that provides CSS classes for absolutely everything then you know where to find it."]}),d("p",{children:["I'm not knocking Tailwind, by the way.  CSS utility classes are an ",l("em",{children:"extremely"}),` useful set of tools to have in your toolkit. I just think they should be limited in their scope and not a replacement for writing "proper" CSS when it's more appropriate to do so.`]}),l("h2",{children:"Form Styling"}),d("p",{children:["Styling ",l(oe,{to:"/forms",text:"forms"})," is not much fun. I have wasted many hours, days, even weeks of my life trying to get form styling just right and I never want to have to do it again."]}),d("p",{children:["If you've got better things to do than trying to figure out why your ",l("code",{children:"select"})," component is 1 pixel shorter than your text ",l("code",{children:"input"})," component then take a look at what Badger CSS has to offer.  It provides basic styles for all the standard form components and has smoothed over a lot of the problems so you don't have to worry too much about them.  Spend the time you save playing with your kids or flying a kite."]}),l("h2",{children:"UI Components"}),l("p",{children:"Badger CSS has styling for a limited set of UI components. It's not really supposed to be a complete UI toolkit (because the World already has enough of them), but rather to be a foundation on which UI components can be built."}),d("p",{children:["Experience has taught me that off-the-shelf UI components (even ones that I've written myself) often need a fair bit of tweaking to match the styling for a particular site.  Sometimes it's easier just to write them from scratch as they're needed.  CSS has come a long way since the days when we relied on toolkits like"," ",l("a",{href:"https://getbootstrap.com/",children:"Bootstrap"})," to provide a consistent cross-browser experience."]}),l("p",{children:"That said, it's useful to have a reasonable starting point for some of the common UI components: things like alerts, dialogs, dropdown menus, overlays, tables and tooltips.  You can easily customise Badger CSS to remove anything you don't want."})]}),d("div",{children:[l("h2",{children:"Light and Dark Themes"}),l("p",{children:"Everything contains styling for both light and dark themes, out of the box."}),l(RM,{})]})]})]}),RM=()=>{const{theme:e,toggleTheme:n,isDark:t}=Va();return d("div",{children:[d("button",{onClick:n,className:"mar-b-4",children:[d("span",{className:"mar-r-2",children:["Switch to the ",t?"light":"dark"," side"]}),t?l(R4,{}):l(I4,{})]}),l(PM,{theme:e})]})},PM=({theme:e})=>l("div",{children:d("div",{className:"surface pad-4 border",children:[d("h3",{className:"mar-t-0",children:[HS(e)," Theme"]}),d("div",{className:"field mar-t-4",children:[l("label",{children:"Form Field"}),l("input",{type:"text",name:"a"}),l("div",{className:"help",children:"Field help"})]}),d("div",{className:"field valid",children:[l("label",{children:"Valid Field"}),l("input",{type:"text",name:"b"}),l("div",{className:"help",children:"This is fine"})]}),d("div",{className:"field invalid",children:[l("label",{children:"Invalid Field"}),l("input",{type:"text",name:"c"}),l("div",{className:"help",children:"This is not so good"})]}),d("div",{className:"field mar-t-4",children:[l("label",{children:"Input Prefix/Suffix"}),d("div",{className:"inputs",children:[l("div",{className:"prefix",children:"£"}),l("input",{type:"text",name:"d"}),l("div",{className:"suffix",children:".00"})]})]}),d("div",{className:"field mar-t-4",children:[l("label",{children:"Bare Prefix/Suffix"}),d("div",{className:"inputs",children:[l("div",{className:"prefix bare",children:l(Fa,{name:"unlock"})}),l("input",{type:"text",name:"e"}),l("div",{className:"suffix bare",children:l(Fa,{name:"check"})})]})]}),d("div",{className:"field",children:[l("label",{children:"Select"}),d("select",{name:"animal",required:!0,children:[l("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Choose an animal"}),l("option",{value:"ant",children:"Ant"}),l("option",{value:"badger",children:"Badger"}),l("option",{value:"cat",children:"Cat"}),l("option",{value:"dog",children:"Dog"})]})]}),d("label",{className:"inline radio",children:[l("input",{type:"radio",name:"radio1"}),"Radio"]}),d("label",{className:"inline radio",children:[l("input",{type:"radio",name:"radio1"}),"Buttons"]}),d("label",{children:[l("input",{type:"checkbox"}),"Checkbox"]}),d("div",{className:"mar-t-4 grid-2 gap-4",children:[d("label",{className:"inline radio border",children:[l("input",{type:"radio",name:"radio2"}),"Radio"]}),d("label",{className:"inline radio border",children:[l("input",{type:"radio",name:"radio2"}),"Buttons"]})]}),l("div",{className:"mar-t-4",children:d("label",{className:"border",children:[l("input",{type:"checkbox"}),"Checkbox"]})}),d("label",{className:"mar-t-4",children:[l("input",{type:"checkbox",role:"switch"}),"Turn it on again"]}),d("div",{className:"flex space mar-t-4",children:[l("button",{className:"grey outline",children:"Reset"}),l("button",{className:"blue",children:"Submit"})]}),l("div",{className:"success alert border mar-t-4",children:"Success alert"}),l("div",{className:"error alert border",children:"Error alert!"}),l("div",{className:"info alert border",children:"Info alert"}),d("details",{className:"shaded lined border orange bdr-1",children:[l("summary",{children:"Revealable Details"}),l("p",{children:"Hello World!"})]}),l("div",{"data-tooltip":"top left","aria-label":"This is a tooltip!",className:"violet border pad-2 pad-h-4 bgc-95 bgd-5 bdc-80 bdd-20 mar-t-4 Xtext-center bdr-1",children:"Hover here for tooltip"}),d("table",{className:"wide striped celled mar-t-4",children:[l("thead",{children:d("tr",{children:[l("th",{children:"Name"}),l("th",{children:"Instrument"})]})}),d("tbody",{children:[d("tr",{children:[l("td",{children:"Nigel"}),l("td",{children:"Guitar"})]}),d("tr",{children:[l("td",{children:"David"}),l("td",{children:"Guitar"})]}),d("tr",{children:[l("td",{children:"Derek"}),l("td",{children:"Bass"})]}),d("tr",{children:[l("td",{children:"Viv"}),l("td",{children:"Keyboards"})]}),d("tr",{children:[l("td",{children:"Mick"}),l("td",{children:"Drums"})]})]})]})]})}),AM=Object.freeze(Object.defineProperty({__proto__:null,default:MM},Symbol.toStringTag,{value:"Module"})),FM=`<link
  rel="stylesheet"
  href="https://unpkg.com/@abw/badger-css/dist/styles/badger.min.css"
/>`,OM=`## using npm
$ npm add -D @abw/badger-css

## using yarn
$ yarn add -D @abw/badger-css

## using pnpm
$ pnpm add -D @abw/badger-css`,DM="import '@abw/badger-css/styles/badger.min.css';",BM="@import '@abw/badger-css/styles/badger.scss';",jM=`$ git clone https://github.com/abw/badger-css.git
$ cd badger-css
$ sass styles/badger.scss > your-badger-file.css`,zM=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Installation"}),l("h2",{children:"No Installation Required!"}),d(ie,{children:[d("p",{children:["You don't need to install anything to get starting using Badger CSS in a website.  Simply add the following tag to the"," ",l("code",{children:"<head>"})," section of your web page."]}),l(Me,{code:FM,caption:"Unpkg Link",language:"html",className:"mar-b-8",expand:!0})]}),l("h2",{children:"Adding to a Javascript Project"}),d(ie,{children:[d("p",{children:["If you want to configure, modify or adapt Badger CSS then you should add ",l("code",{children:"@abw/badger-css"})," to your Javascript project using your favourite package manager.  In most cases you should be able to add it as a development dependency using the ",l("code",{children:"-D"})," option."]}),l(Me,{code:OM,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0})]}),l("h2",{children:"Importing the CSS"}),d(ie,{children:[d("div",{children:[l("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script like so:"}),d("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",l("code",{children:"node_modules"})," directory."]})]}),l(Me,{code:DM,caption:"Importing CSS",language:"js",className:"mar-b-8",expand:!0})]}),l("h2",{children:"Importing the SCSS"}),d(ie,{children:[d("div",{children:[l("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components.  This gives you the flexibility to configure the default options, or to pick and choose which components you want to include."}),l("p",{children:"Add the following line to your main SCSS stylesheet source."})]}),l(Me,{code:BM,caption:"Importing SCSS",language:"scss",className:"mar-b-8",expand:!0})]}),l("h2",{children:"Going it Alone"}),d(ie,{children:[d("p",{children:["If you're not using Javascript but want to play with the SCSS source files then you can check out the project repository from Github and run ",l("code",{children:"sass"})," to compile the source files into CSS."]}),l(Me,{code:jM,caption:"CSS from SASS",language:"shell",className:"mar-b-8",expand:!0})]})]}),UM=Object.freeze(Object.defineProperty({__proto__:null,default:zM},Symbol.toStringTag,{value:"Module"})),HM=e=>B.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 717 337",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},B.createElement("path",{className:"white",d:"M248.362,204.8C251.303,208.841 251.506,216.92 246.886,220.486C247.235,215.811 245.076,210.416 243.385,207.987C242.142,206.2 237.32,201.909 232.525,201.457C236.319,199.212 245.27,200.55 248.362,204.8ZM380.931,288.851C382.012,292.919 365.895,290.457 365.767,303.096C365.703,309.466 368.575,313.608 364.949,314.116C360.977,314.673 360.493,310.692 359.8,305.449C358.316,294.227 366.194,290.723 373.729,288.466C380.03,286.58 380.512,287.273 380.931,288.851ZM250.509,198.166C250.116,197.944 249.715,197.73 249.306,197.524C237.097,191.351 222.986,194.646 217.814,204.876C213.744,212.926 216.415,222.888 223.688,229.775C220.646,228.505 217.677,226.862 214.911,224.779C198.663,212.542 195.441,190.333 199.289,185.248C202.588,180.888 226.299,177.823 242.548,190.06C245.688,192.424 248.324,195.199 250.509,198.166ZM234.492,31.758C231.75,33.423 225.901,22.543 215.941,24.48C210.088,25.619 206.755,23.124 210.523,20.119C221.225,11.585 239.546,28.689 234.492,31.758ZM99.149,58.412C89.72,51.898 79.11,48.569 67.051,51.951C58.397,54.378 52.734,60.065 49.994,67.45C48.707,67.555 47.4,67.691 46.084,67.853C38.149,68.832 29.859,70.741 23.646,72.288C42.126,47.476 64.861,38.817 87.003,38.714L88.566,38.707L88.864,37.173C90.304,29.757 86.13,22.597 75.216,17.044C99.723,11.821 129.948,17.277 146.178,26.501L148.305,27.709L148.955,25.351C149.908,21.892 149.675,13.343 143.798,5.723C174.533,11.177 197.842,21.068 216.166,33.985C250.062,62.777 267.98,100.361 283.213,136.181C299.907,175.44 313.396,212.581 341.026,233.82C341.522,234.342 342.023,234.861 342.528,235.377C350.993,244.039 366.478,256.93 385.23,273.49C387.358,275.369 389.327,277.224 391.08,279.038C386.966,279.245 381.675,280.641 374.911,282.18C352.689,287.237 351.849,297.009 354.41,312.963C355.723,321.141 359.376,324.914 364.644,326.161C344.448,331.711 334.138,335.299 309.216,330.594C270.323,323.25 233.474,308.826 222.734,303.773C222.54,303.387 222.214,303.065 221.786,302.881C207.397,296.693 197.713,288.82 193.624,279.767C195.586,278.724 197.158,277.535 198.531,276.583C199.395,275.985 199.61,274.797 199.011,273.933C198.412,273.069 197.225,272.854 196.361,273.453C193.368,275.527 189.319,279.035 181.419,278.358C180.371,278.268 179.448,279.046 179.359,280.093C179.269,281.14 180.046,282.063 181.094,282.153C184.73,282.464 187.673,282.036 190.117,281.255C194.043,289.991 202.664,297.858 215.527,304.192C190.321,313.397 168.064,307.288 148.128,295.655C126.82,283.221 108.129,264.526 91.308,250.982C77.307,239.708 64.463,232.065 52.581,233.695C45.172,234.711 38.017,239.243 31.166,248.886C20.017,224.385 34.815,199.803 49.449,184.213L50.995,182.566L49.11,181.321C34.813,171.879 18.601,177.687 7.799,189.755C6.995,180.056 11.532,165.892 18.973,152.99C26.481,139.972 37,128.18 48.427,123.711C118.961,110.252 153.156,169.713 188.827,221.409C209.775,251.767 256.49,287.586 345.223,316.241C340.436,301.054 342.628,293.783 346.067,286.802C324.7,276.815 298.269,260.277 280.877,228.797C233.283,142.653 212.43,81.347 143.665,64.082C131.685,61.074 116.053,57.87 99.149,58.412ZM99.066,72.542C97.614,80.151 74.887,58.073 70.407,69.969C62.107,92.007 54.173,79.428 56.142,73.447C66.246,42.754 100.4,65.551 99.066,72.542Z",style:{fill:"white"}}),B.createElement("path",{className:"black",d:"M48.845,71.376C48.085,71.452 47.319,71.538 46.55,71.633C36.384,72.888 25.625,75.704 19.567,77.251L14.706,78.493L17.519,74.338C36.933,45.669 61.411,35.483 85.316,34.929C85.679,28.465 80.142,22.804 68.715,18.305L63.513,16.258L68.883,14.704C94.004,7.433 126.953,12.429 145.602,21.872C145.715,17.476 143.99,10.119 137.262,4.358L132.173,0L138.793,1.03C164.858,5.083 185.888,12.137 203.193,21.438C203.366,21.5 203.539,21.563 203.712,21.626C205.114,17.121 209.176,13.252 216.656,13.924C236.466,15.704 240.708,25.62 241.751,43.904C266.891,65.236 284.026,95.363 297.467,125.916C309.511,153.29 318.589,181.001 327.822,202.999C331.443,211.626 335.086,219.374 338.942,225.872C340.965,228.196 343.066,230.479 345.252,232.715C353.685,241.344 369.071,254.139 387.751,270.635C391.391,273.849 394.564,277.022 397.067,280.061C399.65,281.424 401.411,284.251 402.569,289.316C402.766,289.952 402.91,290.575 403,291.183C403.044,291.476 403.078,291.773 403.104,292.073C403.406,293.909 403.652,295.979 403.849,298.307C404.631,307.557 401.813,319.773 387.422,323.48C384.617,324.202 381.912,324.872 379.338,325.409C375.566,326.623 372.295,327.675 372.296,327.675C350.779,335.844 336.841,339.686 308.509,334.336C267.627,326.617 228.986,311.137 219.844,306.606C192.192,317.895 167.885,311.593 146.209,298.945C124.732,286.413 105.872,267.6 88.919,253.949C82.285,248.607 75.954,244.066 69.867,241.062C64.049,238.191 58.481,236.73 53.099,237.468C45.892,238.456 39.128,243.397 32.519,253.689L30.774,256.406L29.24,253.565C15.116,227.399 29.491,200.652 45.081,183.337C31.813,176.104 17.177,183.299 8.174,195.3L5.878,198.362L4.821,194.683C1.901,184.524 6.568,166.875 15.674,151.087C21.122,141.64 28.135,132.887 35.912,126.766C24.827,130.039 12.898,135.014 0,141.953C13.007,107.592 30.082,86.63 48.343,74.289C48.468,73.299 48.636,72.327 48.845,71.376ZM248.362,204.8C245.27,200.55 236.319,199.212 232.525,201.457C237.32,201.909 242.142,206.2 243.385,207.987C245.076,210.416 247.235,215.811 246.886,220.486C251.506,216.92 251.303,208.841 248.362,204.8ZM380.931,288.851C380.512,287.273 380.03,286.58 373.729,288.466C366.194,290.723 358.316,294.227 359.8,305.449C360.493,310.692 360.977,314.673 364.949,314.116C368.575,313.608 365.703,309.466 365.767,303.096C365.895,290.457 382.012,292.919 380.931,288.851ZM250.509,198.166C248.324,195.199 245.688,192.424 242.548,190.06C226.299,177.823 202.588,180.888 199.289,185.248C195.441,190.333 198.663,212.542 214.911,224.779C217.677,226.862 220.646,228.505 223.688,229.775C216.415,222.888 213.744,212.926 217.814,204.876C222.986,194.646 237.097,191.351 249.306,197.524C249.715,197.73 250.116,197.944 250.509,198.166ZM234.492,31.758C239.546,28.689 221.225,11.585 210.523,20.119C206.755,23.124 210.088,25.619 215.941,24.48C225.901,22.543 231.75,33.423 234.492,31.758ZM99.149,58.412C116.053,57.87 131.685,61.074 143.665,64.082C212.43,81.347 233.283,142.653 280.877,228.797C298.269,260.277 324.7,276.815 346.067,286.802C342.628,293.783 340.436,301.054 345.223,316.241C256.49,287.586 209.775,251.767 188.827,221.409C153.156,169.713 118.961,110.252 48.427,123.711C37,128.18 26.481,139.972 18.973,152.99C11.532,165.892 6.995,180.056 7.799,189.755C18.601,177.687 34.813,171.879 49.11,181.321L50.995,182.566L49.449,184.213C34.815,199.803 20.017,224.385 31.166,248.886C38.017,239.243 45.172,234.711 52.581,233.695C64.463,232.065 77.307,239.708 91.308,250.982C108.129,264.526 126.82,283.221 148.128,295.655C168.064,307.288 190.321,313.397 215.527,304.192C202.664,297.858 194.043,289.991 190.117,281.255C187.673,282.036 184.73,282.464 181.094,282.153C180.046,282.063 179.269,281.14 179.359,280.093C179.448,279.046 180.371,278.268 181.419,278.358C189.319,279.035 193.368,275.527 196.361,273.453C197.225,272.854 198.412,273.069 199.011,273.933C199.61,274.797 199.395,275.985 198.531,276.583C197.158,277.535 195.586,278.724 193.624,279.767C197.713,288.82 207.397,296.693 221.786,302.881C222.214,303.065 222.54,303.387 222.734,303.773C233.474,308.826 270.323,323.25 309.216,330.594C334.138,335.299 344.448,331.711 364.644,326.161C359.376,324.914 355.723,321.141 354.41,312.963C351.849,297.009 352.689,287.237 374.911,282.18C381.675,280.641 386.966,279.245 391.08,279.038C389.327,277.224 387.358,275.369 385.23,273.49C366.478,256.93 350.993,244.039 342.528,235.377C342.023,234.861 341.522,234.342 341.026,233.82C313.396,212.581 299.907,175.44 283.213,136.181C267.98,100.361 250.062,62.777 216.166,33.985C197.842,21.068 174.533,11.177 143.798,5.723C149.675,13.343 149.908,21.892 148.955,25.351L148.305,27.709L146.178,26.501C129.948,17.277 99.723,11.821 75.216,17.044C86.13,22.597 90.304,29.757 88.864,37.173L88.566,38.707L87.003,38.714C64.861,38.817 42.126,47.476 23.646,72.288C29.859,70.741 38.149,68.832 46.084,67.853C47.4,67.691 48.707,67.555 49.994,67.45C52.734,60.065 58.397,54.378 67.051,51.951C79.11,48.569 89.72,51.898 99.149,58.412ZM99.066,72.542C100.4,65.551 66.246,42.754 56.142,73.447C54.173,79.428 62.107,92.007 70.407,69.969C74.887,58.073 97.614,80.151 99.066,72.542Z"}),B.createElement("path",{className:"badger",d:"M347.242,14.148C348.016,13.915 349.256,13.664 350.96,13.392C352.664,13.121 354.406,12.986 356.188,12.986C357.892,12.986 359.421,13.102 360.777,13.334C362.132,13.567 363.274,14.031 364.204,14.729C365.133,15.426 365.83,16.374 366.295,17.575C366.76,18.775 366.992,20.344 366.992,22.28L366.992,33.666C368.928,32.891 370.768,32.349 372.511,32.039C374.253,31.729 376.17,31.574 378.261,31.574C381.979,31.574 385.503,32.233 388.834,33.549C392.164,34.866 395.107,36.783 397.663,39.3C400.219,41.817 402.233,44.935 403.704,48.653C405.176,52.37 405.912,56.669 405.912,61.548C405.912,66.583 405.157,70.978 403.646,74.735C402.136,78.491 400.025,81.608 397.315,84.087C394.604,86.565 391.293,88.444 387.381,89.722C383.47,90.999 379.152,91.638 374.428,91.638C369.316,91.638 364.978,91.038 361.416,89.838C357.853,88.637 354.832,87.146 352.354,85.365C348.946,82.964 347.242,79.866 347.242,76.071L347.242,14.148ZM374.428,76.071C377.99,76.071 380.759,74.851 382.734,72.411C384.709,69.971 385.697,66.35 385.697,61.548C385.697,56.669 384.69,53.029 382.676,50.628C380.662,48.227 377.952,47.026 374.544,47.026C372.995,47.026 371.659,47.181 370.536,47.491C369.413,47.801 368.193,48.265 366.876,48.885L366.876,74.212C367.728,74.754 368.754,75.199 369.955,75.548C371.155,75.896 372.646,76.071 374.428,76.071ZM439.023,31.574C443.205,31.574 447.02,32 450.466,32.852C453.913,33.704 456.856,35.002 459.296,36.744C461.735,38.487 463.614,40.694 464.93,43.366C466.247,46.039 466.905,49.195 466.905,52.835L466.905,78.859C466.905,80.873 466.344,82.518 465.221,83.796C464.098,85.074 462.762,86.178 461.213,87.108C456.178,90.128 449.091,91.638 439.952,91.638C435.847,91.638 432.149,91.251 428.857,90.477C425.565,89.702 422.738,88.54 420.376,86.991C418.014,85.442 416.194,83.467 414.916,81.066C413.638,78.665 412.999,75.877 412.999,72.701C412.999,67.357 414.586,63.252 417.762,60.387C420.938,57.521 425.856,55.739 432.517,55.042L447.736,53.416L447.736,52.603C447.736,50.356 446.748,48.749 444.773,47.781C442.798,46.813 439.952,46.329 436.234,46.329C433.291,46.329 430.425,46.639 427.637,47.258C424.849,47.878 422.332,48.653 420.086,49.582C419.079,48.885 418.227,47.82 417.53,46.387C416.833,44.954 416.484,43.463 416.484,41.914C416.484,39.9 416.968,38.293 417.936,37.093C418.904,35.892 420.395,34.866 422.409,34.014C424.655,33.162 427.308,32.542 430.367,32.155C433.427,31.768 436.312,31.574 439.023,31.574ZM439.952,77.232C441.269,77.232 442.721,77.097 444.309,76.826C445.896,76.555 447.078,76.187 447.852,75.722L447.852,66.428L439.487,67.125C437.319,67.28 435.537,67.744 434.143,68.519C432.749,69.294 432.052,70.455 432.052,72.004C432.052,73.553 432.652,74.812 433.853,75.78C435.053,76.748 437.086,77.232 439.952,77.232ZM476.548,61.548C476.548,56.436 477.323,52.002 478.872,48.246C480.421,44.489 482.57,41.372 485.32,38.894C488.069,36.415 491.283,34.576 494.962,33.375C498.641,32.175 502.611,31.574 506.871,31.574C508.42,31.574 509.93,31.71 511.402,31.981C512.873,32.252 514.074,32.581 515.003,32.968L515.003,14.148C515.778,13.915 517.017,13.664 518.721,13.392C520.425,13.121 522.167,12.986 523.949,12.986C525.653,12.986 527.182,13.102 528.538,13.334C529.893,13.567 531.036,14.031 531.965,14.729C532.895,15.426 533.592,16.374 534.056,17.575C534.521,18.775 534.753,20.344 534.753,22.28L534.753,77.349C534.753,80.989 533.049,83.893 529.642,86.062C527.395,87.533 524.491,88.831 520.928,89.954C517.365,91.077 513.26,91.638 508.613,91.638C503.579,91.638 499.067,90.941 495.079,89.547C491.09,88.153 487.721,86.139 484.971,83.506C482.222,80.873 480.13,77.716 478.697,74.037C477.265,70.358 476.548,66.195 476.548,61.548ZM509.543,47.026C505.36,47.026 502.146,48.227 499.9,50.628C497.654,53.029 496.531,56.669 496.531,61.548C496.531,66.35 497.576,69.971 499.668,72.411C501.759,74.851 504.779,76.071 508.73,76.071C510.124,76.071 511.382,75.858 512.505,75.432C513.628,75.006 514.5,74.522 515.119,73.979L515.119,48.42C513.57,47.491 511.711,47.026 509.543,47.026ZM574.603,31.574C579.017,31.574 583.025,32.136 586.627,33.259C590.228,34.382 593.268,35.834 595.747,37.616C597.296,38.7 598.516,39.9 599.407,41.217C600.297,42.534 600.743,44.238 600.743,46.329L600.743,86.991C600.743,91.096 599.968,94.64 598.419,97.622C596.87,100.604 594.759,103.082 592.087,105.057C589.415,107.032 586.278,108.484 582.677,109.414C579.075,110.343 575.222,110.808 571.117,110.808C564.069,110.808 558.531,109.859 554.504,107.961C550.476,106.064 548.462,102.985 548.462,98.725C548.462,96.944 548.83,95.376 549.566,94.02C550.302,92.665 551.135,91.638 552.064,90.941C554.31,92.181 556.847,93.226 559.674,94.078C562.501,94.93 565.424,95.356 568.445,95.356C572.627,95.356 575.958,94.659 578.436,93.265C580.915,91.871 582.154,89.625 582.154,86.527L582.154,84.668C578.979,86.062 575.106,86.759 570.536,86.759C567.051,86.759 563.74,86.236 560.603,85.191C557.466,84.145 554.717,82.518 552.354,80.311C549.992,78.104 548.095,75.257 546.662,71.772C545.229,68.287 544.512,64.143 544.512,59.341C544.512,54.616 545.268,50.511 546.778,47.026C548.288,43.541 550.379,40.656 553.051,38.371C555.724,36.086 558.899,34.382 562.578,33.259C566.257,32.136 570.265,31.574 574.603,31.574ZM581.806,48.42C581.263,48.11 580.47,47.801 579.424,47.491C578.378,47.181 577.081,47.026 575.532,47.026C571.737,47.026 568.89,48.091 566.993,50.221C565.095,52.351 564.146,55.391 564.146,59.341C564.146,63.833 565.095,67.067 566.993,69.042C568.89,71.017 571.311,72.004 574.254,72.004C577.43,72.004 579.947,71.269 581.806,69.797L581.806,48.42ZM642.799,91.638C638.229,91.638 633.989,90.999 630.078,89.722C626.166,88.444 622.758,86.527 619.854,83.971C616.949,81.415 614.665,78.201 612.999,74.328C611.334,70.455 610.502,65.924 610.502,60.735C610.502,55.623 611.334,51.228 612.999,47.549C614.665,43.87 616.853,40.849 619.563,38.487C622.274,36.125 625.372,34.382 628.858,33.259C632.343,32.136 635.906,31.574 639.546,31.574C643.651,31.574 647.388,32.194 650.757,33.433C654.126,34.672 657.031,36.376 659.471,38.545C661.91,40.714 663.808,43.308 665.163,46.329C666.519,49.35 667.197,52.641 667.197,56.204C667.197,58.837 666.461,60.851 664.989,62.245C663.518,63.64 661.465,64.53 658.832,64.917L630.136,69.216C630.988,71.772 632.73,73.689 635.364,74.967C637.997,76.245 641.018,76.884 644.426,76.884C647.601,76.884 650.602,76.477 653.429,75.664C656.256,74.851 658.561,73.902 660.342,72.818C661.581,73.592 662.627,74.676 663.479,76.071C664.331,77.465 664.757,78.936 664.757,80.485C664.757,83.971 663.13,86.565 659.877,88.269C657.399,89.586 654.611,90.477 651.512,90.941C648.414,91.406 645.51,91.638 642.799,91.638ZM639.546,45.98C637.687,45.98 636.08,46.29 634.725,46.91C633.369,47.529 632.266,48.323 631.414,49.292C630.562,50.26 629.923,51.344 629.497,52.545C629.071,53.745 628.819,54.965 628.742,56.204L648.608,52.951C648.376,51.402 647.524,49.853 646.052,48.304C644.581,46.755 642.412,45.98 639.546,45.98ZM696.473,89.663C695.699,89.896 694.479,90.128 692.814,90.36C691.149,90.593 689.425,90.709 687.644,90.709C685.94,90.709 684.41,90.593 683.055,90.36C681.699,90.128 680.557,89.663 679.628,88.966C678.698,88.269 677.982,87.321 677.478,86.12C676.975,84.919 676.723,83.351 676.723,81.415L676.723,46.561C676.723,44.78 677.052,43.25 677.711,41.972C678.369,40.694 679.318,39.552 680.557,38.545C681.796,37.538 683.326,36.628 685.146,35.815C686.966,35.002 688.922,34.285 691.013,33.666C693.104,33.046 695.273,32.562 697.519,32.213C699.765,31.865 702.011,31.691 704.257,31.691C707.975,31.691 710.918,32.407 713.087,33.84C715.256,35.273 716.34,37.616 716.34,40.869C716.34,41.953 716.185,43.018 715.875,44.063C715.565,45.109 715.178,46.058 714.713,46.91C713.087,46.91 711.422,46.987 709.718,47.142C708.014,47.297 706.349,47.529 704.722,47.839C703.096,48.149 701.566,48.478 700.133,48.827C698.7,49.175 697.48,49.582 696.473,50.047L696.473,89.663Z"}),B.createElement("path",{className:"css",d:"M586.337,162.306C584.4,162.306 582.561,162.616 580.818,163.236C579.075,163.855 577.565,164.765 576.287,165.966C575.009,167.166 573.983,168.657 573.208,170.439C572.434,172.22 572.047,174.311 572.047,176.712C572.047,181.514 573.421,185.116 576.171,187.517C578.92,189.918 582.27,191.119 586.22,191.119C588.544,191.119 590.558,190.847 592.262,190.305C593.966,189.763 595.476,189.182 596.793,188.563C598.342,189.647 599.503,190.828 600.278,192.106C601.052,193.384 601.44,194.914 601.44,196.695C601.44,199.871 599.929,202.33 596.909,204.072C593.888,205.815 589.706,206.686 584.361,206.686C579.482,206.686 575.067,205.97 571.117,204.537C567.167,203.104 563.779,201.09 560.952,198.496C558.125,195.901 555.937,192.784 554.388,189.143C552.838,185.503 552.064,181.476 552.064,177.061C552.064,171.949 552.897,167.476 554.562,163.642C556.227,159.809 558.492,156.652 561.358,154.174C564.224,151.695 567.535,149.837 571.291,148.597C575.048,147.358 579.017,146.738 583.2,146.738C588.776,146.738 593.075,147.745 596.095,149.759C599.116,151.773 600.626,154.367 600.626,157.543C600.626,159.015 600.278,160.389 599.581,161.667C598.884,162.945 598.071,164.049 597.141,164.978C595.824,164.359 594.237,163.759 592.378,163.178C590.519,162.597 588.505,162.306 586.337,162.306ZM657.786,188.098C657.786,193.984 655.579,198.593 651.164,201.923C646.749,205.254 640.243,206.919 631.646,206.919C628.393,206.919 625.372,206.686 622.584,206.222C619.796,205.757 617.414,205.041 615.439,204.072C613.464,203.104 611.915,201.884 610.792,200.413C609.669,198.941 609.107,197.199 609.107,195.185C609.107,193.326 609.495,191.758 610.269,190.48C611.044,189.202 611.973,188.137 613.057,187.285C615.304,188.524 617.879,189.628 620.783,190.596C623.688,191.564 627.038,192.048 630.833,192.048C633.234,192.048 635.073,191.699 636.351,191.002C637.629,190.305 638.268,189.376 638.268,188.214C638.268,187.13 637.803,186.278 636.874,185.658C635.945,185.039 634.396,184.535 632.227,184.148L628.742,183.451C622.003,182.134 616.988,180.062 613.696,177.235C610.405,174.408 608.759,170.361 608.759,165.095C608.759,162.229 609.379,159.634 610.618,157.311C611.857,154.987 613.6,153.051 615.846,151.502C618.092,149.953 620.783,148.752 623.92,147.9C627.057,147.048 630.523,146.622 634.318,146.622C637.184,146.622 639.875,146.835 642.392,147.261C644.91,147.687 647.098,148.326 648.957,149.178C650.815,150.03 652.287,151.134 653.371,152.489C654.456,153.845 654.998,155.452 654.998,157.311C654.998,159.092 654.669,160.622 654.01,161.9C653.352,163.178 652.519,164.243 651.512,165.095C650.893,164.707 649.963,164.301 648.724,163.875C647.485,163.449 646.13,163.061 644.658,162.713C643.186,162.364 641.695,162.074 640.185,161.842C638.675,161.609 637.3,161.493 636.061,161.493C633.505,161.493 631.53,161.784 630.136,162.364C628.742,162.945 628.044,163.855 628.044,165.095C628.044,165.947 628.432,166.644 629.206,167.186C629.981,167.728 631.452,168.231 633.621,168.696L637.223,169.509C644.658,171.213 649.944,173.556 653.081,176.538C656.218,179.52 657.786,183.373 657.786,188.098ZM714.946,188.098C714.946,193.984 712.738,198.593 708.324,201.923C703.909,205.254 697.403,206.919 688.806,206.919C685.553,206.919 682.532,206.686 679.744,206.222C676.955,205.757 674.574,205.041 672.599,204.072C670.624,203.104 669.075,201.884 667.952,200.413C666.829,198.941 666.267,197.199 666.267,195.185C666.267,193.326 666.654,191.758 667.429,190.48C668.203,189.202 669.133,188.137 670.217,187.285C672.463,188.524 675.039,189.628 677.943,190.596C680.847,191.564 684.197,192.048 687.992,192.048C690.393,192.048 692.233,191.699 693.511,191.002C694.789,190.305 695.428,189.376 695.428,188.214C695.428,187.13 694.963,186.278 694.034,185.658C693.104,185.039 691.555,184.535 689.387,184.148L685.901,183.451C679.163,182.134 674.148,180.062 670.856,177.235C667.564,174.408 665.919,170.361 665.919,165.095C665.919,162.229 666.538,159.634 667.777,157.311C669.017,154.987 670.759,153.051 673.005,151.502C675.252,149.953 677.943,148.752 681.08,147.9C684.217,147.048 687.683,146.622 691.478,146.622C694.343,146.622 697.035,146.835 699.552,147.261C702.069,147.687 704.257,148.326 706.116,149.178C707.975,150.03 709.447,151.134 710.531,152.489C711.615,153.845 712.157,155.452 712.157,157.311C712.157,159.092 711.828,160.622 711.17,161.9C710.512,163.178 709.679,164.243 708.672,165.095C708.053,164.707 707.123,164.301 705.884,163.875C704.645,163.449 703.289,163.061 701.818,162.713C700.346,162.364 698.855,162.074 697.345,161.842C695.834,161.609 694.46,161.493 693.22,161.493C690.665,161.493 688.689,161.784 687.295,162.364C685.901,162.945 685.204,163.855 685.204,165.095C685.204,165.947 685.591,166.644 686.366,167.186C687.14,167.728 688.612,168.231 690.781,168.696L694.382,169.509C701.818,171.213 707.104,173.556 710.241,176.538C713.377,179.52 714.946,183.373 714.946,188.098Z"})),WM=()=>l("div",{children:d("div",{className:"mobile block-center pad-t-8 flow",children:[l(HM,{className:"badger-css"}),l("h1",{className:"mar-t-8",children:"Modern, minimal CSS presets"}),d("p",{children:["You've probably heard of CSS ",l("b",{children:"reset"})," stylesheets that provide sensible defaults for HTML elements to smooth out some of the inconsistencies between browsers.  And no doubt you're aware of the plethora of fully-featured CSS ",l("b",{children:"toolkits"})," that implement all manner of styles for UI components."]}),d("p",{children:["Badger CSS sits somewhere between the two.  It provides some sensible"," ",l("b",{children:"presets"})," for HTML elements that you can use out of the box and expect to get reasonable results.  It's highly configurable and is really designed to be a starting point for building your own CSS stylesheets, design systems and UI toolkits."]}),d("div",{className:"grid-2 gap-2",children:[l(oe,{to:"/colors/demo",text:"Color Demo",className:"brand button Xbdr-tl-4"}),l(oe,{to:"/getting-started/installation",text:"Getting Started",className:"brand button Xbdr-tr-4"}),l(oe,{to:"/getting-started/good",text:"What's Good?",className:"brand button Xbdr-bl-4"}),l(oe,{to:"/getting-started/bad",text:"What's Bad?",className:"brand button Xbdr-br-4"})]}),l("h2",{children:"TL;DR:"}),l("h3",{children:"Cool Colors"}),d("ul",{children:[d("li",{children:["Hand-crafted palette with ",l(oe,{to:"/colors/ranges",children:"13 color ranges"})," ","and 3 greyscales, each containing 21 color stops from none more black to a whiter shade of pale."]}),d("li",{children:["Easily adapt the palette to match your ",l(oe,{to:"/colors/brand",children:"brand colors"}),"."]}),d("li",{children:["Create and your own custom palette using ",l("a",{href:"https://abw.github.io/badger-color/",children:"Badger Color"})," and"," ",l(oe,{to:"/colors/palette",children:"import it"})," into Badger CSS."]})]}),l("h3",{children:"Useful Utilities"}),d("ul",{children:[l("li",{children:"Utility classes for the things you need to do most often."}),l("li",{children:"Useful for prototyping or ad-hoc styling."}),l("li",{children:"CSS custom properties for applying them into your own custom styles."}),l("li",{children:"All configurable by SASS variables."})]}),l("h3",{children:"Fantastic Forms"}),d("ul",{children:[d("li",{children:[l("i",{children:"Mostly Classless"})," styling providing sensible and modern defaults for HTML forms."]}),l("li",{children:"Minimal additional markup required."}),l("li",{children:"Easily modified using CSS properties and/or SASS variables."})]}),l("h3",{children:"Components"}),d("ul",{children:[l("li",{children:"A basic set of components that you just can't live without."}),l("li",{children:"Different variations of the basic styles."}),l("li",{children:"Automatically adapt to any color range or brand colors."}),l("li",{children:"Configurable and customisable, using CSS properties and/or SASS variables."})]})]})}),VM=Object.freeze(Object.defineProperty({__proto__:null,default:WM},Symbol.toStringTag,{value:"Module"})),GM=`<div class="block-left width-12rem border pad-2">
  Block left
</div>
<div class="block-center width-12rem border pad-2 mar-t-4">
  Block center
</div>
<div class="block-right width-12rem border pad-2 mar-t-4">
  Block right
</div>
`,YM=`<div class="text-left border pad-2 mar-b-2">
  Text on the left
</div>
<div class="text-center border pad-2 mar-b-2">
  Text in the center
</div>
<div class="text-right border pad-2">
  Text on the right
</div>`,ZM=`<div class="text-right border pad-4">
  Text on the right
  <div class="text-left border pad-2 mar-v-2">
    Text on the left
  </div>
  Text on the right
</div>`,qM=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Alignment"}),l("h2",{children:"Text Alignment"}),d("p",{children:["Add the ",l("code",{children:"text-left"}),", ",l("code",{children:"text-center"})," and"," ",l("code",{children:"text-right"})," CSS classes to set the text alignment."]}),l(I,{html:YM,caption:"Text Alignment",expand:!0}),d("p",{children:["Text is aligned left by default making the ",l("code",{children:"text-left"})," ","class ",l("em",{children:"mostly"})," redundant.  However it can be useful to reset the alignment to the left for a block that would otherwise be aligned centrally or to the right"]}),l(I,{html:ZM,caption:"Text Left",expand:!0}),l("h2",{children:"Block Alignment"}),d("p",{children:["Add the ",l("code",{children:"block-left"}),", ",l("code",{children:"block-center"})," and"," ",l("code",{children:"block-right"})," CSS classes to align a block to the left, in the center, or on the right, respectively."]}),d("p",{children:["You'll need to set a block width to stop it from expanding to fill the full width of the parent element.  You can do that using one of the"," ",l(oe,{to:"/utilities/widths",text:"width-*"})," utility classes."]}),l(I,{html:GM,caption:"Block Alignment",expand:!0})]}),QM=Object.freeze(Object.defineProperty({__proto__:null,default:qM},Symbol.toStringTag,{value:"Module"})),KM=`<div class="border pad-4">
  This element has a border.
</div>
`,XM=`<div class="grid-1 gap-2">
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
</div>`,JM=`<div class="grid-2 gap-2">
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
`,eR=`<div class="border pad-4 mar-b-2">
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
`,nR=`<div class="grid-3 gap-4 pad-t-2">
  <button class="brand solid">default</button>
  <button class="brand solid bdr-0">bdr-0</button>
  <button class="brand solid square">square</button>
</div>
<div class="grid-3 gap-4 pad-t-2">
  <input type="text" value="default">
  <input type="text" value="bdr-0" class="bdr-0">
  <input type="text" value="square" class="square">
</div>
`,tR=`<div class="bdr-6 surface-1 pad-2 border grid-1 gap-2">
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
</div>`,rR=`<style>
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
`,lR=`// define your own $border-width-values...
$border-width-values: 1, 2, 3, 5, 8, 13, 21, 34;
// ...and/or set the $border-width-prefix...
$border-width-prefix: 'br-wd';

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,aR=`// define your own $border-radius-values...
$border-radius-values: 1, 2, 3, 5, 8, 13, 21, 34;
// ...and/or set the $border-width-prefix...
$border-radius-prefix: 'br-rd';

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,oR=`<div class="grid-1 gap-4">
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
</div>`,iR=({properties:e})=>d("table",{className:"brand celled striped properties wide",children:[l("thead",{children:d("tr",{children:[l("th",{children:"Property"}),l("th",{children:"Default"}),l("th",{children:"Description"})]})}),l("tbody",{children:e.map(n=>d("tr",{children:[l("td",{className:"key nowrap",children:l("code",{children:n[0]})}),l("td",{className:"nowrap",children:n[1]}),l("td",{children:n[2]})]},n[0]))})]}),sR=({sets:e})=>l("div",{className:`grid-${e.length} gap-8 stack-desktop mar-b-8`,children:e.map(n=>d("div",{children:[l("h4",{className:"mar-b-2",children:n.title}),l(iR,{properties:n.properties}),!!n.notes&&l("div",{className:"smallish info alert",children:n.notes})]},n.title))}),dR=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Borders"}),l("h2",{children:"Border Class"}),d("p",{children:["Add the ",l("code",{children:"border"})," CSS class to an element to give it a border."]}),l(I,{html:KM,caption:"Border",expand:!0}),l("h2",{children:"Border Width"}),d("p",{children:["Add the ",l("code",{children:"bdw-N"})," CSS class to set the border width, where"," ",l("code",{children:"N"})," is in pixel units."]}),l(I,{html:XM,caption:"Border Width",expand:!0}),d("div",{className:"grid-2 gap-8 stack-desktop",children:[d("div",{className:"wide",children:[d("p",{children:["The pre-defined values for ",l("code",{children:"N"})," are"," ",l("code",{children:"0"}),", ",l("code",{children:"1"}),", ",l("code",{children:"2"}),", ",l("code",{children:"3"}),","," ",l("code",{children:"4"}),", ",l("code",{children:"5"}),", ",l("code",{children:"6"}),", ",l("code",{children:"8"})," and"," ",l("code",{children:"10"}),"."]}),d("p",{children:["You can set the ",l("code",{children:"$border-width-values"})," SCSS variable if you want to define a different set of values. You can also use the ",l("code",{children:"$border-width-prefix"})," to define a different prefix for the border width classes if you don't like ",l("code",{children:"bdw"}),"."]}),d("p",{children:["In the example shown here the generated CSS classes would be"," ",l("code",{children:"br-wd-1"}),", ",l("code",{children:"br-wd-2"}),","," ",l("code",{children:"br-wd-3"}),", ",l("code",{children:"br-wd-5"})," and so on."]})]}),l(Me,{code:lR,caption:"Custom Border Widths",language:"scss",className:"mar-b-8",expand:!0})]}),l("h2",{children:"Border Color"}),d("p",{children:["Add the ",l("code",{children:"bdc-N"})," CSS class to set the border color, where"," ",l("code",{children:"N"})," is a color stop (0, 5, 10, etc) for the current color range."]}),l(I,{html:JM,caption:"Border Color"}),l("h2",{children:"Border Radius"}),d("p",{children:["Add the ",l("code",{children:"bdr-N"})," classes to set the radius of borders. The ",l("code",{children:"-N"})," multiplier is a multiple of the base unit radius (0.25rem by default)."]}),l(I,{html:eR,caption:"Border Radius",expand:!0}),d("p",{children:["The ",l("code",{children:"bdr-0"})," class can be used to ",l("i",{children:"explicitly"})," set the border radius to 0. The ",l("code",{children:"square"})," class is an alias for"," ",l("code",{children:"bdr-0"})," with the added benefit of having the"," ",l("code",{children:"!important"})," flag set for when you really need to drive the point home."]}),l("p",{children:"They can be used to remove the corner radius from components which have them by default, like buttons and form fields."}),l(I,{html:nR,caption:"Square Corners",expand:!0}),d("div",{className:"grid-2 gap-8 stack-desktop",children:[d("div",{className:"wide",children:[d("p",{children:["The pre-defined values for ",l("code",{children:"N"})," are"," ",l("code",{children:"0"}),", ",l("code",{children:"1"}),", ",l("code",{children:"2"}),", ",l("code",{children:"3"}),","," ",l("code",{children:"4"}),", ",l("code",{children:"5"}),", ",l("code",{children:"6"}),", ",l("code",{children:"8"})," and"," ",l("code",{children:"10"}),"."]}),d("p",{children:["You can set the ",l("code",{children:"$border-radius-values"})," SCSS variable if you want to define a different set of values. You can also use the ",l("code",{children:"$border-radius-prefix"})," to define a different prefix for the border radius classes if you don't like ",l("code",{children:"bdr"}),"."]}),d("p",{children:["In the example shown here the generated CSS classes would be"," ",l("code",{children:"br-rd-1"}),", ",l("code",{children:"br-rd-2"}),","," ",l("code",{children:"br-rd-3"}),", ",l("code",{children:"br-rd-5"})," and so on."]})]}),l(Me,{code:aR,caption:"Custom Border Radius",language:"scss",className:"mar-b-8",expand:!0})]}),l("h2",{children:"Border Radius Corners"}),l("p",{children:"You can independently set the radius for different corners using these classes."}),d("div",{className:"grid-2 gap-8 stack-desktop",children:[d("table",{className:"brand border lined striped mar-b-8",children:[l("thead",{children:d("tr",{children:[l("th",{children:"Class"}),l("th",{children:"Description"})]})}),d("tbody",{children:[d("tr",{children:[l("td",{children:l("code",{children:"bdr-t-N"})}),l("td",{children:"Top left and top right corner radius"})]}),d("tr",{children:[l("td",{children:l("code",{children:"bdr-b-N"})}),l("td",{children:"Bottom left and bottom right corner radius"})]}),d("tr",{children:[l("td",{children:l("code",{children:"bdr-l-N"})}),l("td",{children:"Top left and bottom left corner radius"})]}),d("tr",{children:[l("td",{children:l("code",{children:"bdr-r-N"})}),l("td",{children:"Top right and bottom right corner radius"})]}),d("tr",{children:[l("td",{children:l("code",{children:"bdr-tl-N"})}),l("td",{children:"Top left corner radius"})]}),d("tr",{children:[l("td",{children:l("code",{children:"bdr-tr-N"})}),l("td",{children:"Top right corner radius"})]}),d("tr",{children:[l("td",{children:l("code",{children:"bdr-bl-N"})}),l("td",{children:"Bottom left corner radius"})]}),d("tr",{children:[l("td",{children:l("code",{children:"bdr-br-N"})}),l("td",{children:"Bottom right corner radius"})]})]})]}),l("div",{children:d(Il,{children:["If you set a custom ",l("code",{children:"$border-radius-prefix"})," as shown above then your CSS classes will start with your chosen prefix instead of ",l("code",{children:"bdr"})," as shown here."]})})]}),l(I,{html:tR,caption:"Border Radius Corners",expand:!0}),l("h2",{children:"No Border Required!"}),d("p",{children:["You don't need to have a border displayed to set the border radius. The ",l("code",{children:"bdr-N"})," classes can be used to set the border radius on various components."]}),l(I,{html:oR,caption:"Radius Components",expand:!0}),l("h2",{children:"Border Properties"}),l("p",{children:"The following properties are used to define the border style."}),l(sR,{sets:[{title:"Defaults",properties:[["--border-width",l("code",{children:"1px"},"1px"),"Border width"],["--border-style",l("code",{children:"solid"},"solid"),d("span",{children:["Border style: ",l("code",{children:"solid"}),", ",l("code",{children:"dotted"}),", ",l("code",{children:"dashed"}),", etc."]},"desc")],["--border-radius",l("code",{children:"var(--unit-radius)"},"radius"),"Border radius"],["--border-color",l("code",{children:"var(--color-75)"},"color"),"Border color from current color range"]]},{title:"Dark Theme",properties:[["--border-color",l("code",{children:"var(--color-25)"},"color"),"Border color from current color range"]]}]}),l("h2",{children:"Setting Custom Properties"}),l(I,{html:rR,caption:"Custom Border Style",expand:!0})]}),cR=Object.freeze(Object.defineProperty({__proto__:null,default:dR},Symbol.toStringTag,{value:"Module"})),uR=`<div class="inline border pad-2">
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
`,hR=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Display"}),l("h2",{children:"Display Modes"}),d(ie,{children:[d("p",{children:["The ",l("code",{children:"inline"}),", ",l("code",{children:"block"})," and"," ",l("code",{children:"inline-block"})," CSS classes can be used to set the"," ",l("code",{children:"display"})," mode.   These are useful when you have an element that would normally have one display type that you want displayed in a different way."]}),d("p",{children:["See the"," ",l(oe,{to:"/utilities/flexbox",text:"flexbox"})," and"," ",l(oe,{to:"/utilities/grid",text:"grid"})," pages for information about using flex and grid display modes."]})]}),l(I,{html:uR,caption:"Display Modes",expand:!0})]}),pR=Object.freeze(Object.defineProperty({__proto__:null,default:hR},Symbol.toStringTag,{value:"Module"})),fR=`<div class="flex">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>`,gR=`<div class="flex top">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,mR=`<div class="flex middle">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,vR=`<div class="flex bottom">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,bR=`<div class="flex baseline">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,yR=`<div class="flex top gap-4">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,wR=`<div class="flex left gap-2">
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
`,xR=`<div class="flex center gap-2">
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
`,CR=`<div class="flex right gap-2">
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
`,SR=`<div class="flex space">
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
`,kR=`<div class="flex evenly">
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
`,TR=`<div class="flex gap-2 red">
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
`,_R=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Flexbox"}),l("h2",{children:"Flexbox Classes"}),d("p",{children:["Use the ",l("code",{children:"flex"})," CSS class to set the ",l("code",{children:"display"})," ","mode to ",l("code",{children:"flex"}),".  The default alignment mode"," ","(i.e. the ",l("code",{children:"align-items"})," CSS property) is ",l("code",{children:"stretch"}),"."]}),l(I,{html:fR,caption:".flex",expand:!0}),l("h2",{children:"Gaps"}),d("p",{children:["The ",l("code",{children:"gap-N"})," classes can be used to add a gap between successive elements.  Here ",l("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit (",l("code",{children:"0.25rem"})," by default)."]}),l(I,{html:yR,caption:".flex.gap-4",expand:!0}),l("h2",{children:"Flex Top"}),d("p",{children:["Add the ",l("code",{children:"top"})," (or ",l("code",{children:"start"}),") class to align the items to the stop."]}),l(I,{html:gR,caption:".flex.top",expand:!0}),l("h2",{children:"Flex Middle"}),d("p",{children:["Add the ",l("code",{children:"middle"})," class to align the items to the middle."]}),l(I,{html:mR,caption:".flex.middle",expand:!0}),l("h2",{children:"Flex Baseline"}),d("p",{children:["Add the ",l("code",{children:"baseline"})," class to align the items to the text baseline."]}),l(I,{html:bR,caption:".flex.baseline",expand:!0}),l("h2",{children:"Flex Bottom"}),d("p",{children:["Add the ",l("code",{children:"bottom"})," class to align the items to the bottom."]}),l(I,{html:vR,caption:".flex.bottom",expand:!0}),l("h2",{children:"Flex Left"}),d("p",{children:["Items are align to the left (technically, ",l("code",{children:"flex-start"}),") by default but you can add the ",l("code",{children:"left"})," class if you want to make it explicit."]}),l(I,{html:wR,caption:".flex.left",expand:!0}),l("h2",{children:"Flex Center"}),d("p",{children:["Add the ",l("code",{children:"center"})," class to align the items to the center."]}),l(I,{html:xR,caption:".flex.center",expand:!0}),l("h2",{children:"Flex Right"}),d("p",{children:["Add the ",l("code",{children:"right"})," class to align the items to the right."]}),l(I,{html:CR,caption:".flex.right",expand:!0}),l("h2",{children:"Flex Space"}),d("p",{children:["Add the ",l("code",{children:"space"})," class to space the items as much as possible. This is equivalent to setting the ",l("code",{children:"justify-content"})," CSS property to ",l("code",{children:"space-between"}),"."]}),l(I,{html:SR,caption:".flex.space",expand:!0}),l("h2",{children:"Flex Evenly"}),d("p",{children:["Add the ",l("code",{children:"evenly"})," class to divide the space evenly between and around the items.  This is equivalent to setting the"," ",l("code",{children:"justify-content"})," CSS property to ",l("code",{children:"space-evenly"}),"."]}),l(I,{html:kR,caption:".flex.evenly",expand:!0}),l("h2",{children:"Flex Wrap"}),d("p",{children:["Add the ",l("code",{children:"wrap"})," class to set the ",l("code",{children:"flex-wrap"})," property to ",l("code",{children:"wrap"}),"."]}),l(I,{html:TR,caption:".flex.wrap",expand:!0})]}),LR=Object.freeze(Object.defineProperty({__proto__:null,default:_R},Symbol.toStringTag,{value:"Module"})),$R=`<div class="italic larger">
  Italic
</div>
<div class="underline larger">
  Underline
</div>
<div class="strike larger">
  Strike
</div>
`,NR=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Font Styles"}),l("p",{children:"The following classes are defined for common font styles."}),l(I,{html:$R,caption:"Font Styles",expand:!0})]}),ER=Object.freeze(Object.defineProperty({__proto__:null,default:NR},Symbol.toStringTag,{value:"Module"})),IR=`<div class="weight-thin larger">
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
</div>`,MR=`<div class="weight-100 larger">
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
</div>`,RR=`<div class="thin larger">
  Thin
</div>
<div class="bold larger">
  Bold
</div>
<div class="thick larger">
  Thick
</div>
`,PR=`// define your own font weights...
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
`,AR=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Font Weights"}),l("h2",{children:"Weight Names"}),d(ie,{children:[d("p",{children:["The ",l("code",{children:"weight-<name>"})," classes can be used to set the font weight."]}),d("p",{children:["The values for ",l("code",{children:"<name>"})," can be",l("code",{children:"thin"}),", ",l("code",{children:"extra-light"}),", ",l("code",{children:"light"}),","," ",l("code",{children:"regular"}),", ",l("code",{children:"medium"}),", ",l("code",{children:"semi-bold"}),","," ",l("code",{children:"bold"}),", ",l("code",{children:"extra-bold"})," or ",l("code",{children:"black"}),"."]})]}),l(I,{html:IR,caption:"Weight Names",expand:!0}),l("h2",{children:"Weight Numbers"}),d(ie,{children:[l("p",{children:"Alternately you can use the corresponding weight numbers."}),d("p",{children:["Those numbers can be"," ",l("code",{children:"100"}),", ",l("code",{children:"200"}),", ",l("code",{children:"300"}),","," ",l("code",{children:"400"}),", ",l("code",{children:"500"}),", ",l("code",{children:"600"}),","," ",l("code",{children:"700"}),", ",l("code",{children:"800"})," or ",l("code",{children:"900"}),"."]})]}),l(I,{html:MR,caption:"Weight Numbers",expand:!0}),l("h2",{children:"Weight Aliases"}),d("p",{children:["There are some short-cut aliases for the common cases.  Note that we use ",l("code",{children:"thick"})," rather than ",l("code",{children:"black"})," to avoid any confusion with the color black."]}),l(I,{html:RR,caption:"Weight Aliases",expand:!0}),l("h2",{children:"Custom Weights"}),d(ie,{children:[d("p",{children:["You can set the ",l("code",{children:"$font-weights"})," SASS variable if you want to define a different set of font weights."]}),l(Me,{code:PR,caption:"Font Weights",language:"scss",className:"mar-b-8",expand:!0})]})]}),FR=Object.freeze(Object.defineProperty({__proto__:null,default:AR},Symbol.toStringTag,{value:"Module"})),OR=`<div class="large">
  <p class="font-sans">Sans-serif Font</p>
  <p class="font-serif">Serif Font</p>
  <p class="font-system">System Font</p>
  <p class="font-mono">Mono Font</p>
</div>
`,DR=`// redefine any of the following fonts to taste...
$font-sans:   'Open Sans', Helvetica, sans-serif;
$font-serif:  'Times New Roman', Times, Baskerville, Georgia, serif;
$font-mono:   Monaco, 'Bitstream Vera Sans Mono', 'Lucida Console', Terminal, monospace;
$font-system: -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,BR=`// define your own font names...
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
`,jR=`p {
  font-family: $font-sans;
}
`,zR=`p {
  font-family: var(--font-sans);
}
`,UR=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Fonts"}),l("h2",{children:"Font Classes"}),d("p",{children:["The ",l("code",{children:"font-sans"})," CSS class can be used to select a sans-serif font, ",l("code",{children:"font-serif"})," for a serif font, ",l("code",{children:"font-system"})," ","for the system font, or ",l("code",{children:"font-mono"})," for a monospaced font."]}),l(I,{html:OR,caption:"Fonts",expand:!0}),l("h2",{children:"Font Variables"}),l("p",{children:"Each of the above fonts is defined by a SASS variable which you can override to define your own font stacks."}),l(Me,{code:DR,caption:"Customising Fonts",language:"scss",className:"mar-b-8",expand:!0}),d("p",{children:["These variables are exposed as the corresponding CSS custom properties:"," ",l("code",{children:"--font-sans"}),", ",l("code",{children:"--font-serif"}),","," ",l("code",{children:"--font-system"})," and ",l("code",{children:"--font-mono"}),"."]}),d("div",{className:"grid-2 gap-4 stack-laptop mar-b-8",children:[l(Me,{code:jR,caption:"Font Variables in SCSS",language:"scss",expand:!0}),l(Me,{code:zR,caption:"Font Variables in CSS",language:"css",expand:!0})]}),l("h2",{children:"Custom Fonts"}),d(ie,{children:[d("div",{children:[l("p",{children:"You can define your own names for fonts."}),d("p",{children:["In this case the CSS classes created will be ",l("code",{children:"font-body"}),","," ",l("code",{children:"font-head"})," and ",l("code",{children:"font-code"}),".  The fonts will also be defined as the ",l("code",{children:"--font-body"}),", ",l("code",{children:"--font-head"}),","," ","and ",l("code",{children:"--font-code"})," CSS custom properties."]})]}),l(Me,{code:BR,caption:"Font Aliases",language:"scss",className:"mar-b-8",expand:!0})]})]}),HR=Object.freeze(Object.defineProperty({__proto__:null,default:UR},Symbol.toStringTag,{value:"Module"})),WR=`<h3 class="mar-b-2"><code>grid-2</code></h3>
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
`,VR=`<div class="grid gap-4">
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
`,GR=`<div class="grid-2 gap-4">
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
`,YR=`<div class="grid-2 gap-v-8 gap-h-2">
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
`,ZR=`<div class="grid-3 gap-2 top">
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
`,qR=`<div class="grid-3 gap-2 middle">
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
`,QR=`<div class="grid-3 gap-2 bottom">
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
`,KR=`<div class="grid-fit gap-2">
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
`,XR=`<div class="grid-fit gap-2" style="--min-width: 200px">
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
`,JR=`<h3><code>grid-fit</code></h3>

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
`,eP=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Grid"}),l("h2",{children:"Grid Columns"}),d("p",{children:["Use a ",l("code",{children:"grid-N"})," CSS class to set the ",l("code",{children:"display"})," ","mode to ",l("code",{children:"grid"})," where ",l("code",{children:"N"})," is the number of columns from 2 to 16."]}),l(I,{html:WR,caption:"Grid Columns",expand:!0}),l("h2",{children:"Gaps"}),d("p",{children:["The ",l("code",{children:"gap-N"})," classes can be used to add a gap between successive elements.  Here ",l("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit (",l("code",{children:"0.25rem"})," by default)."]}),l(I,{html:GR,caption:"Grid Gaps",expand:!0}),l("h2",{children:"Vertical and Horizontal Gaps"}),d("p",{children:["The the ",l("code",{children:"gap-v-N"})," and ",l("code",{children:"gap-h-N"})," classes can be used to define the vertical and horizontal gaps separately. Again, ",l("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit."]}),l(I,{html:YR,caption:"Grid Gaps",expand:!0}),l("h2",{children:"Single Column Grid"}),d("p",{children:["The ",l("code",{children:"grid"})," CSS class (or ",l("code",{children:"grid-1"})," which does the same thing) creates a single column grid.  It's useful because it then allows you to use the ",l("code",{children:"gap-N"})," classes to add a vertical gap between child components."]}),l(I,{html:VR,caption:"Single Column Grid",expand:!0}),l("h2",{children:"Grid Fit"}),d("p",{children:["The ",l("code",{children:"grid-fit"})," CSS class will fit as many items into the grid as it can and then wrap onto the next line."]}),l(I,{html:KR,caption:"Grid Fit"}),l("h2",{children:"Grid Fill"}),d("p",{children:["The ",l("code",{children:"grid-fill"})," CSS class is similar to ",l("code",{children:"grid-fit"}),". The difference between them is what happens when there are't enough items to fill the container width.  ",l("code",{children:"grid-fit"})," will stretch them whereas ",l("code",{children:"grid-fill"})," will not."]}),l(I,{html:JR,caption:"Grid Fill"}),l("h2",{children:"Grid Fit/Fill Size"}),d("p",{children:["Both ",l("code",{children:"grid-fit"})," and ",l("code",{children:"grid-fill"})," can define a minimum size for each child element.  By default this is"," ",l("code",{children:"100px"})," wide.  You can set the ",l("code",{children:"--min-width"})," property to change it."]}),l(I,{html:XR,caption:"Grid Size"}),l("h2",{children:"Grid Top"}),d("p",{children:["Add the ",l("code",{children:"top"})," (or ",l("code",{children:"start"}),") CSS class to align items to the top of grid columns."]}),l(I,{html:ZR,caption:"Grid Top",expand:!0}),l("h2",{children:"Grid Middle"}),d("p",{children:["Add the ",l("code",{children:"middle"})," CSS class to align items to the middle of grid columns."]}),l(I,{html:qR,caption:"Grid Middle",expand:!0}),l("h2",{children:"Grid Bottom"}),d("p",{children:["Add the ",l("code",{children:"bottom"})," (or ",l("code",{children:"end"}),") CSS class to align items to the end of grid columns."]}),l(I,{html:QR,caption:"Grid Bottom",expand:!0})]}),nP=Object.freeze(Object.defineProperty({__proto__:null,default:eP},Symbol.toStringTag,{value:"Module"})),tP=()=>d("div",{className:"prose",children:[l("h1",{children:"Utility Classes"}),d("p",{className:"intro wide",children:["CSS utility classes are ",l("i",{children:"extremely"})," useful for applying styles to elements on an ad-hoc basis.  But they shouldn't be used as a substitute for writing CSS for reusable styles."]}),d(ie,{children:[d("div",{children:[l("h2",{children:"Moderation in All Things"}),d("p",{children:["Some CSS frameworks, most notably"," ",l("a",{href:"https://tailwindcss.com/",children:"tailwind.css"}),", have taken this to the extreme where everything is a utility class and you never need to write any CSS at all. Although this approach has some merits for rapid prototyping, I personally wouldn't use it when building a non-trivial site because I think that it can have a negative impact on readability and maintainability."]}),d("p",{children:["I prefer to take the pragmatic approach and use utility classes to apply ",l("i",{children:"exceptional"})," styling to elements that don't warrant having their own dedicated CSS classes.  The general rule that I follow is to create dedicated CSS classes for components that I'm using in different places in a site.  For example, a product card, a user avatar, button and form styling, and so.  This ensures that they are consistent and can easily be changed across the whole site by updating the rules in the stylesheet."]}),d("p",{children:["For styling that depends on the context in which an element is being used, I'll generally reach for utility classes. By far the most useful of these, and the ones that I use more than any other, are the ",l("code",{children:"mar"})," and ",l("code",{children:"pad"}),` utility classes to add custom margins and padding.  The amount of margin or padding required on an element will often depend on the other elements around it, so there isn't a "one size fits all" solution. Other useful utility classes include those to set the font size, add a border or drop shadow, or to set the layout to use flexbox or grid.`]}),l("h2",{children:"CSS Custom Properties"}),d("p",{children:['CSS custom properties or CSS variables as they are also know, are an incredibly powerful addition to the toolkit for any web designer or developer.  They allow you to define reusable "snippets" of CSS that can easily be applied to different elements.  They can be used to replace much of the functionality that was previously only accessible by using variables and/or mixins in a CSS pre-processing language like'," ",l("a",{href:"https://sass-lang.com/",children:"SASS"}),"."]})]}),d("div",{children:[l("h2",{children:"SASS Variables"}),l("p",{children:"Although CSS custom properties have largely removed the need for CSS pre-processors like SASS, there are still benefits to be had from using them.  One benefit is that they can help to reduce bloat in your CSS files.  SASS allows you to define variables that can be used to implement system-wide configuration options that are then compiled into the generated CSS files.  In contrast, any CSS custom properties that you use must be included in the CSS and, if overdone, can lead to significant increases in the file size."}),l("h2",{children:"When to Use Each?"}),l("p",{children:"The general rule that I follow is to use SASS variables for configuration options that I might want to change on a site-wide basis but generally remain constant throughout the site.  For example, the default font face, the breakpoints, the colors or default spacing units.  It's useful to have these defined as variables because it allows me to plug Badger CSS into a project, tweak the default settings, and then get coding.  If at some point in the future I decide they're not quite right, or if the client or a designer wants me to change them, then it should be easy to do so, and they should be applied universally."}),l("p",{children:"For styles that I might want to change in different parts of the site, need to reflect some application state (e.g. the differences between a success, warning or error message), or that should have different properties depending on the user selecting a light or dark theme, then CSS properties are generally the way to go."}),l("p",{children:"For styles that need to be applied on an ad-hoc basis, utility classes are what I reach for."})]})]})]}),rP=Object.freeze(Object.defineProperty({__proto__:null,default:tP},Symbol.toStringTag,{value:"Module"})),lP=`<div class="relative border" style="height: 140px">
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
`,aP=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Position"}),l("h2",{children:"Position Classes"}),d("p",{children:["Add the ",l("code",{children:"absolute"}),", ",l("code",{children:"relative"})," and"," ",l("code",{children:"fixed"})," CSS classes to set the position type."]}),d("p",{children:["For elements that are set to ",l("code",{children:"absolute"})," or ",l("code",{children:"fixed"})," ","position, the ",l("code",{children:"top"}),", ",l("code",{children:"bottom"}),", ",l("code",{children:"left"})," ","and ",l("code",{children:"right"})," classes can be used to position them against the corresponding edge of the closest parent element with the"," ",l("code",{children:"relative"})," position type."]}),l(I,{html:lP,caption:"Position",expand:!0})]}),oP=Object.freeze(Object.defineProperty({__proto__:null,default:aP},Symbol.toStringTag,{value:"Module"})),iP=`<div class="scroll-x border pad-2 nowrap mar-b-2">
  Yeah, I like it, just been fooling about with it for a few months now, very delicate... Yeah, it's part of a... trilogy really, a musical trilogy I'm doing, in, D minor, which I always find is really the saddest of all keys really. I don't know why, but it makes people weep instantly. You play a "baaaaa... baaaaaa..." it's the horn part. "...baaaa, baaaaa...", yeah, just simple lines intertwining, you know very much like, I'm really influenced by Mozart and Bach, It's sort of in between those, really, it's like a Mach piece really.<
</div>
`,sP=`<div class="scroll-y border pad-2" style="height: 7rem">
  Yeah, I like it, just been fooling about with it for a few months
  now, very delicate... Yeah, it's part of a... trilogy really, a
  musical trilogy I'm doing, in, D minor, which I always find is really
  the saddest of all keys really. I don't know why, but it makes people
  weep instantly. You play a "baaaaa... baaaaaa..." it's the horn part.
  "...baaaa, baaaaa...", yeah, just simple lines intertwining, you
  know very much like, I'm really influenced by Mozart and Bach,
  It's sort of in between those, really, it's like a Mach piece
  really.
</div>`,dP=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Scolling"}),l("h2",{children:"Scroll Classes"}),d("p",{children:["Add the ",l("code",{children:"scroll-x"})," or ",l("code",{children:"scroll-y"})," CSS classes to set ",l("code",{children:"overflow-x"})," or ",l("code",{children:"overflow-y"})," to ",l("code",{children:"scroll"}),", respectively."]}),l("p",{children:`Be warned that you'll also need to set widths and/or heights as appropriate to stop the layout engine from doing the "right" thing and expanding the containers to fit the content.`}),l(I,{html:iP,caption:"scroll-x",expand:!0}),l(I,{html:sP,caption:"scroll-y",expand:!0})]}),cP=Object.freeze(Object.defineProperty({__proto__:null,default:dP},Symbol.toStringTag,{value:"Module"})),uP=`<div class="surface-3 pad-8">
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
</div>`,hP=`<div class="surface-3 pad-8">
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
`,pP=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Shadows"}),l("h2",{children:"Shadow Classes"}),d("p",{children:["Use the ",l("code",{children:"shadow-1"}),", ",l("code",{children:"shadow-2"}),","," ",l("code",{children:"shadow-3"}),", ",l("code",{children:"shadow-4"})," and ",l("code",{children:"shadow-5"})," ","CSS classes to add a box shadow of progressively larger size.  Larger shadows can be used to suggest that an element is lifted higher off the background and thus appears closer to the foreground."]}),l(I,{html:uP,caption:"Shadows",expand:!0}),l("h2",{children:"Shadow Properties"}),d(ie,{children:[d("p",{children:["The shadow styles are defined as CSS custom properties, (e.g."," ",l("code",{children:"--shadow-1"}),", ",l("code",{children:"--shadow-2"}),", etc).  The colors and opacities used for the shadows depend on both the shadow depth and color theme.  For the default light theme the base color is"," ",l("code",{children:"--grey-0"})," and the shadows are more transparent.  For the dark theme, where shadows need to be a bit more prominent to be visible, the base color is ",l("code",{children:"black"})," and the shadows are more opaque."]}),d("p",{children:["The benefit of CSS custom properties is that you can easily apply them to your own style rules.  In this example we define a"," ",l("code",{children:".shadow-example"})," rule which adds a ",l("code",{children:"box-shadow"})," using the ",l("code",{children:"--shadow-2"})," custom property.  The shadow color will be set correctly for both light and dark themes so you don't need to worry about defining separate rules for each."]})]}),l(I,{html:hP,caption:"Shadow Style",expand:!0})]}),fP=Object.freeze(Object.defineProperty({__proto__:null,default:pP},Symbol.toStringTag,{value:"Module"})),gP=`<div class="smallest">Smallest text</div>
<div class="smaller">Smaller text</div>
<div class="small">Small text</div>
<div>Normal size text</div>
<div class="large">Large text</div>
<div class="larger">Larger text</div>
<div class="largest">Largest text</div>
`,mP=`<div>x1</div>
<div class="x2">x2</div>
<div class="x3">x3</div>
<div class="x4">x4</div>
<div class="x5">x5</div>
<div class="x6">x6</div>
<div class="x7">x7</div>
<div class="x8">x8</div>
<div class="x9">x9</div>
<div class="x10">x10</div>
`,vP=`// define your own text sizes...
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
@import "@abw/badger-css/styles/badger.scss";`,bP=({heading1:e="Class",heading2:n="Rem Size",heading3:t=d(Rt,{children:["Pixel Size ",l("span",{className:"smaller",children:"(when 1rem=16px)"})]}),rows:r})=>d("table",{className:"brand celled striped properties small wide mar-b-2",children:[l("thead",{children:d("tr",{children:[l("th",{children:e}),l("th",{children:n}),l("th",{children:t})]})}),l("tbody",{children:r.map(a=>d("tr",{children:[l("td",{children:l("code",{children:a[0]})}),l("td",{children:a[1]}),l("td",{children:a[2]})]},a[0]))})]}),yP=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Text Sizes"}),l("h2",{children:"Size Classes"}),d("p",{children:["Use the ",l("code",{children:"smallest"}),", ",l("code",{children:"smaller"}),","," ",l("code",{children:"small"}),", ",l("code",{children:"medium"})," (default)"," ",l("code",{children:"large"}),", ",l("code",{children:"larger"})," and ",l("code",{children:"largest"})," CSS classes to set the text size. These are defined as SASS variables which you can override (e.g. ",l("code",{children:"$size-large"}),") and CSS custom properties which you can use in your own stylesheets or inline styles (e.g. ",l("code",{children:"--size-large"}),")."]}),l(I,{html:gP,caption:"Text Sizes",expand:!0}),l("h2",{children:"Default Sizes"}),d(ie,{children:[l("p",{children:"The pre-defined values for the sizes are shown here."}),l(bP,{rows:[["smallest","0.625rem","10px"],["smaller","0.75rem","12px"],["small","0.875rem","14px"],["medium","1rem","16px"],["large","1.25rem","20px"],["larger","1.5rem","24px"],["largest","2rem","32p<"]]})]}),l("h2",{children:"Custom Sizes"}),d(qt,{code:vP,caption:"Custom Sizes",language:"scss",expand:!0,children:[d("p",{children:["You can set the ",l("code",{children:"$sizes"})," SCSS variable if you want to define a different set of sizes, either to give them different names or values."]}),d("p",{children:["In the example shown here the generated CSS classes would be"," ",l("code",{children:"xxs"}),", ",l("code",{children:"xs"}),", ",l("code",{children:"s"}),","," ",l("code",{children:"m"}),", ",l("code",{children:"l"}),", ",l("code",{children:"xl"})," and ",l("code",{children:"xxl"}),"."]})]}),l("h2",{children:"Size Multipliers"}),d("p",{children:["For larger text sizes you can use the size multiple classes:"," ",l("code",{children:"x2"}),", ",l("code",{children:"x3"}),", etc., up to ",l("code",{children:"x10"}),". These are all multiples of ",l("code",{children:"1rem"}),"."]}),l(I,{html:mP,caption:"Text Sizes",expand:!0})]}),wP=Object.freeze(Object.defineProperty({__proto__:null,default:yP},Symbol.toStringTag,{value:"Module"})),xP=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
  <div class="mar surface pad-2">
    This has 1 unit of margin.
  </div>
</div>
`,CP=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
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
`,SP=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
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
`,kP=`<div class="pad-2 grey20 bgc-50 fgc-90 mar-b-2">
  Two units of padding all around.
</div>
<div class="pad-v-4 pad-h-8 grey20 bgc-50 fgc-90 border">
  Four units of padding vertically and eight units
  horizontally
</div>
`,TP=`<div class="grid-1 gap-4 surface-3 pad-4">
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
`,_P=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Spacing"}),d("p",{children:["The ",l("code",{children:"mar"})," and ",l("code",{children:"pad"})," CSS utility classes can be used to set the margins and padding for and element."]}),l("h2",{children:"Margins"}),d("p",{children:["The ",l("code",{children:"mar"})," class by itself will add 1 unit of margin to all four sides of an element.  The default unit size is ",l("code",{children:"0.25rem"}),"."]}),l(I,{html:xP,caption:"Margins",expand:!0}),d("p",{children:["The ",l("code",{children:"mar-N"})," classes will add multiples of the unit, where ",l("code",{children:"N"})," is one of the values:"," ",l("code",{children:"0"}),", ",l("code",{children:"1"}),", ",l("code",{children:"2"}),", ",l("code",{children:"3"}),","," ",l("code",{children:"4"}),", ",l("code",{children:"6"}),", ",l("code",{children:"8"}),", ",l("code",{children:"10"}),","," ",l("code",{children:"12"}),", ",l("code",{children:"16"}),", ",l("code",{children:"20"}),","," ",l("code",{children:"24"}),", ",l("code",{children:"28"})," or ",l("code",{children:"32"}),".  The"," ",l("code",{children:"mar-1"})," class is effectively the same as just ",l("code",{children:"mar"})," ","but is included for completeness.  Also note that ",l("code",{children:"mar-0"})," can be used to remove any margin that would otherwise be present on an element."]}),l(I,{html:CP,caption:"Margin Multiple",expand:!0}),l("h2",{children:"Margin Directions"}),d("p",{children:["You can also specify the direction for the margin using the"," ",l("code",{children:"mar-t"})," (top), ",l("code",{children:"mar-r"})," (right),"," ",l("code",{children:"mar-b"})," (bottom), ",l("code",{children:"mar-l"})," (left),"," ",l("code",{children:"mar-v"})," (vertical: top and bottom) and"," ",l("code",{children:"mar-h"})," (horizontal: left and right) classes. The default is 1 unit of margin or a ",l("code",{children:"-N"})," suffix can be added as a multiplier.  For example ",l("code",{children:"mar-t-4"})," to add 4 units of margin to the top of an element."]}),l(I,{html:SP,caption:"Margin Direction",expand:!0}),l("h2",{children:"Padding"}),d("p",{children:["The ",l("code",{children:"pad"})," and related utility classes work in the same way but add padding inside the element."]}),l(I,{html:kP,caption:"Padding",expand:!0}),d("p",{children:["One important thing to note is that padding is applied in multiples of 0.25",l("b",{children:"em"})," whereas margins use 0.25",l("b",{children:"rem"}),".  This is because you usually want spacing around elements to be consistent (which rem provides) but padding inside an element should be based on the text size (which em provides)."]}),l(I,{html:TP,caption:"Pad Sizes",expand:!0})]}),LP=Object.freeze(Object.defineProperty({__proto__:null,default:_P},Symbol.toStringTag,{value:"Module"})),$P=`<div class="flex gap-4">
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
`,NP=`<div class="flex gap-4">
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
`,EP=`<table class="wide shaded lined">
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
`,IP=`// redefine $splits to include what you want...
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
@import "@abw/badger-css/styles/badger.scss";`,MP=[["2","One half","50%"],["3","One third","33.33333333%"],["2-3","Two thirds","66.66666666%"],["4","One quarter","25%"],["3-4","Three quarters","75%"],["5","One fifth","20%"],["2-5","Two fifths","40%"],["3-5","Three fifths","60%"],["4-5","Four fifths","80%"],["6","One sixth","16.66666666%"],["5-6","Five sixth","83.33333333%"],["7","One seventh","14.28571429%"],["2-7","Two sevenths","28.57142858%"],["3-7","Three sevenths","42.85714287%"],["4-7","Four sevenths","57.14285716%"],["5-7","Five sevenths","71.42857145%"],["6-7","Six sevenths","85.71428574%"],["8","One eighth","12.5%"],["3-8","Three eighths","37.5%"],["5-8","Five eighths","62.5%"],["7-8","Seven eighths","87.5%"],["9","One ninth","11.11111111%"],["2-9","Two ninths","22.22222222%"],["4-9","Four ninths","44.44444444%"],["5-9","Five ninths","55.55555555%"],["7-9","Seven ninths","77.77777777%"],["8-9","Eight ninths","88.88888888%"],["10","One tenth","10%"],["3-10","Three tenths","30%"],["7-10","Seven tenths","70%"],["9-10","Nine tenths","90%"],["11","One eleventh","9.090909090%"],["12","One twelfth","8.333333333%"],["13","One thirteenth","7.692307692%"],["14","One fourteenth","7.142857142%"],["15","One fifteenth","6.666666666%"],["16","One sixteenth","6.25%"]],RP=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Split"}),l("h2",{children:"Evenly Split Columns"}),d(ie,{children:[d("p",{children:["The ",l("code",{children:"split-N"})," classes can be used to set the width of an element to a fraction of the width of the parent container. For example, ",l("code",{children:"split-2"})," sets the width to one half,"," ",l("code",{children:"split-3"})," to one third, and so on.  The value for"," ",l("code",{children:"N"})," can be anything from 2 to 16."]}),d("p",{children:["They can be useful in conjunction with the"," ",l(oe,{to:"/utilities/flexbox",text:"flexbox"})," classes to constrain columns to be a particular width.  Otherwise the flexbox layout engine will try to expand the width of columns that have more content."]})]}),l(I,{html:$P,caption:"Even Splits"}),l("h2",{children:"Unevenly Split Columns"}),d("p",{children:["The ",l("code",{children:"split-N-M"})," classes can be used to create uneven splits. For example, ",l("code",{children:"split-2-5"})," creates a columns that is two fifths of the width."]}),d("p",{children:["These are defined for all uneven splits up to tenths (e.g. there's a ",l("code",{children:"split-3-10"})," class for three tenths, but no ",l("code",{children:"split-3-11"})," ","for three elevenths).  Not that redundant classes are not included. For example, there's no ",l("code",{children:"split-3-6"})," class because it's one half or ",l("code",{children:"split-2"}),"."]}),l(I,{html:NP,caption:"Uneven Splits"}),l("h2",{children:"Tables"}),d("p",{children:["The ",l("code",{children:"split-*"})," classes also work with table columns. This can be useful to prevent the layout engine from expanding columns to fit the content.  It's especially useful if you have multiple tables and you want the columns to be the same width in each of the tables."]}),l(I,{html:EP,caption:"Table Splits"}),l("h2",{children:"Split Classes"}),d(ie,{children:[l("p",{children:"The CSS classes and their corresponding widths are listed below."}),d("p",{children:["You can set the ",l("code",{children:"$splits"})," SASS variable if you want to define a different set of splits."]})]}),l(qt,{code:IP,caption:"Custom Splits",language:"scss",expand:!0,children:d("table",{className:"brand celled striped properties small wide mar-b-2",children:[l("thead",{children:d("tr",{children:[l("th",{children:"Class"}),l("th",{children:"Size"}),l("th",{children:"%age Width"})]})}),l("tbody",{children:MP.map(e=>d("tr",{children:[l("td",{children:d("code",{children:["split-",e[0]]})}),l("td",{children:e[1]}),l("td",{children:e[2]})]},e[0]))})]})})]}),PP=Object.freeze(Object.defineProperty({__proto__:null,default:RP},Symbol.toStringTag,{value:"Module"})),AP=`<h4 class="font-mono smaller">stack-widescreen</h4>
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
`,FP=`<h4 class="font-mono smaller">stack-widescreen</h4>
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
`,OP=`// define your own breakpoints...
$breakpoints: (
  'mobile':     30rem,
  'tablet':     50rem,
  'laptop':     70rem,
  'desktop':    80rem,
  'widescreen': 90rem
) !default;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";`,DP={mobile:30,tablet:50,laptop:70,desktop:80,widescreen:90},BP=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Stacking Split Columns"}),d("p",{children:["One of the problems with creating columns using"," ",l(oe,{to:"/utilities/grid",text:"grid"}),","," ",l(oe,{to:"/utilities/flexbox",text:"flexbox"})," ","and ",l(oe,{to:"/utilities/split",text:"split"})," is that sometimes a user's screen size isn't large enough to accommodate them."]}),d("p",{children:["The ",l("code",{children:"stack-*"})," classes can be used to stack columns when the screen size is narrower than a threshold breakpoint. These are ",l("code",{children:"stack-mobile"}),", ",l("code",{children:"stack-tablet"}),","," ",l("code",{children:"stack-laptop"}),", ",l("code",{children:"stack-desktop"})," and"," ",l("code",{children:"stack-widescreen"}),"."]}),l("h2",{children:"Grid Stacking"}),d(ie,{children:[d("p",{children:["This example shows how adding a ",l("code",{children:"stack-*"})," class to an element that has one of the ",l("code",{children:"grid-*"})," classes will cause the columns to be stacked at different breakpoints."]}),l(Il,{title:"Try it out!",children:"Try resizing your browser window and see how the grid elements below get stacked."})]}),l(I,{html:AP,caption:"Stacking Grids"}),l("h2",{children:"Flexbox Stacking"}),d("p",{children:["This example shows the same thing for ",l("code",{children:"flex"})," containers."]}),l(I,{html:FP,caption:"Stacking Flexbox"}),l("h2",{children:"Breakpoint Names"}),d(ie,{children:[l("p",{children:"The breakpoint names and their corresponding widths in rems and pixels (assuming 1rem = 16px) are shown below."}),d("p",{children:["You can set the ",l("code",{children:"$breakpoints"})," SASS variable if you want to define a different set of breakpoints."]})]}),l(qt,{code:OP,caption:"Custom Breakpoints",language:"scss",expand:!0,children:d("table",{className:"brand celled striped properties small wide mar-b-2",children:[l("thead",{children:d("tr",{children:[l("th",{children:"Class"}),l("th",{children:"Rems"}),l("th",{children:"Pixels"})]})}),l("tbody",{children:Object.entries(DP).map(([e,n])=>d("tr",{children:[l("td",{children:l("code",{children:e})}),d("td",{children:[n,"rem"]}),d("td",{children:[n*16,"px"]})]},e))})]})})]}),jP=Object.freeze(Object.defineProperty({__proto__:null,default:BP},Symbol.toStringTag,{value:"Module"})),zP=`<div class="surface border pad-2">
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
`,UP=`<div class="surface-1 border pad-2 mar-b-2">
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
`,HP=`<div class="grid-3 gap-2 smallish">
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
`,WP=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Surfaces"}),d("p",{children:['When building UI components it can be useful to think in terms of "surfaces", with each surface getting progressively "closer" to the user and demanding their closer attention. You may want to combine these with the ',l("code",{children:"shadow-N"})," classes to further emphasise the effect."]}),l("p",{children:"As a general rule surfaces that are in the foreground should be lighter than those in the background.  Note that this applies to dark themes as well as light themes."}),l("h2",{children:"Surface Classes"}),d("p",{children:["Use the ",l("code",{children:"surface-1"}),", ",l("code",{children:"surface-2"}),","," ",l("code",{children:"surface-3"}),", ",l("code",{children:"surface-4"})," and"," ",l("code",{children:"surface-5"})," CSS classes to define elements with appropriate background and text colors to achieve this effect.  The lower numbers are meant to be further in the background with higher numbers being closer to the foreground."]}),l(I,{html:zP,caption:"Surfaces",expand:!0}),d("p",{children:["The ",l("code",{children:"surface"})," class is a special case being used here to apply a background color for the examples.  When using a light theme this"," ","is ",l("code",{children:"white"})," and for a dark theme it is ",l("code",{children:"black"}),"."]}),d("p",{children:["The styles are defined using CSS variables for the foreground, background and border colors, e.g. ",l("code",{children:"--color"}),", ",l("code",{children:"--background-color"})," ","and ",l("code",{children:"--border-color"}),". In turn these are defined using the ",l("code",{children:"grey"})," color range depending on the color theme. For example, the ",l("code",{children:"--background-color"}),"for ",l("code",{children:"--surface-3"}),"is defined to be ",l("code",{children:"--color-90"})," by default, and ",l("code",{children:"--color-10"})," when the dark theme is in effect."]}),l("h2",{children:"Surfaces With Borders"}),d("p",{children:["Add the ",l("code",{children:"border"})," CSS class to add a border around a surface. You can also add the ",l(oe,{to:"/utilities/borders",children:l("code",{children:"bdr-N"})})," classes to set the border radius."]}),l(I,{html:UP,caption:"Surface Borders",expand:!0}),l("h2",{children:"Colored Surfaces"}),l("p",{children:"Add any of the color classes to get different colored surfaces."}),l(I,{html:HP,caption:"Color Surfaces"})]}),VP=Object.freeze(Object.defineProperty({__proto__:null,default:WP},Symbol.toStringTag,{value:"Module"})),GP=`<div class="flex gap-2 mar-b-2">
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
`,YP=`<div class="flow">
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
</div>`,ZP=`<p class="large">
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
`,qP=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Typography"}),l("h2",{children:"Headings"}),d("p",{children:["Headings have ",l("code",{children:"text-wrap: balance"})," set to balance the length of long lines.  The ",l("code",{children:"line-height"})," is reduced to ",l("code",{children:"1.3"}),"."]}),d("p",{children:["Margins and padding are removed by default.  You can add them in yourself, either using the ",l(oe,{to:"/utilities/spacing",text:"spacing utiltiy classes"})," ","or globally to match your site style. Or use something like the",l("code",{children:"flow"})," class (see below) to add margins between elements where appropriate."]}),l(I,{html:GP,caption:"Headings"}),l("h2",{children:"Paragraphs"}),l(I,{html:ZP,caption:"Paragraphs"}),l("h2",{children:"Flow"}),d("p",{children:["Use the ",l("code",{children:"flow"})," class on a container to add spacing between block elements.  Thanks to"," ",l("a",{href:"https://andy-bell.co.uk/my-favourite-3-lines-of-css/",children:"Andy Bell"})," ","for this one."]}),l(I,{html:YP,caption:"Flow"})]}),QP=Object.freeze(Object.defineProperty({__proto__:null,default:qP},Symbol.toStringTag,{value:"Module"})),KP=`<div class="grid-1 gap-4">
  <input type="text" value="A wide input"/>
  <button class="blue wide">
    A wide button
  </button>
</div>`,XP=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,JP=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,eA=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,nA=`// define your own range of rem widths...
$rem-widths:
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 25, 30,
  35, 40, 45, 50, 60, 70, 80, 90, 100 !default;

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,tA=[2,4,6,8,10,12,14,16,18,20,25,30,35,40,45,50,60,70,80,90,100],rA=()=>d("div",{className:"prose flow",children:[l("h1",{children:"Widths"}),l("h2",{children:"Wide"}),d("p",{children:["Use the ",l("code",{children:"wide"})," CSS class to set an inline element to expand to the full width of the container."]}),l(I,{html:KP,caption:"Wide",expand:!0}),l("h2",{children:"Width Classes"}),d(ie,{children:[d("p",{children:["The ",l("code",{children:"width-Nrem"})," classes can be used to set the width of an element to a number of rem units."]}),d("p",{children:["The values for ",l("code",{children:"N"})," can be",l("code",{children:"2"}),", ",l("code",{children:"4"}),","," ",l("code",{children:"6"}),", ",l("code",{children:"8"}),", ",l("code",{children:"10"}),", ",l("code",{children:"12"}),","," ",l("code",{children:"14"}),", ",l("code",{children:"16"}),", ",l("code",{children:"18"}),", ",l("code",{children:"20"}),","," ",l("code",{children:"25"}),", ",l("code",{children:"30"}),", ",l("code",{children:"35"}),", ",l("code",{children:"40"}),","," ",l("code",{children:"45"}),", ",l("code",{children:"50"}),", ",l("code",{children:"60"}),","," ",l("code",{children:"70"}),", ",l("code",{children:"80"}),", ",l("code",{children:"90"})," or ",l("code",{children:"100"}),"."]})]}),l(I,{html:XP,caption:"Widths",expand:!0}),l("h2",{children:"Pixel Width Classes"}),d("p",{children:["If you prefer to think in pixels, you can use the corresponding"," ",l("code",{children:"width-Npx"})," classes instead."]}),l(I,{html:JP,caption:"Widths in Px",expand:!0}),l("h2",{children:"Max Width Classes"}),d(ie,{children:[d("p",{children:["The ",l("code",{children:"max-width-Nrem"})," classes can be used to set the maximum width of an element to a number of rem units.  In this case the width of the element will be constrained to the width of the parent element. You can also use the corresponding ",l("code",{children:"max-width-Npx"})," classes if you prefer to think in pixels."]}),d("p",{children:["The ",l("code",{children:"width-*"})," and ",l("code",{children:"max-width-*"})," classes work by using the ",l("code",{children:"--width"})," custom property which is set to the appropriate number of rem units based on the ",l("code",{children:"-Nrem"})," ","or ",l("code",{children:"-Npx"})," suffix."]})]}),l(I,{html:eA,caption:"Widths",expand:!0}),l("h2",{children:"Rem/Pixel Sizes"}),d(ie,{children:[l("p",{children:"The corresponding pixel widths (assuming 1rem = 16px) for each of the classes are shown below."}),d("p",{children:["You can set the ",l("code",{children:"$rem-widths"})," SASS variable if you want to define a different set of width classes."]})]}),l(qt,{code:nA,caption:"Custom Sizes",language:"scss",expand:!0,children:d("table",{className:"brand celled striped properties small wide mar-b-2",children:[l("thead",{children:d("tr",{children:[l("th",{children:"Rem Class"}),l("th",{children:"Pixel Class"}),l("th",{children:"Rems"}),l("th",{children:"Pixels"})]})}),l("tbody",{children:tA.map(e=>d("tr",{children:[l("td",{children:d("code",{children:["width-",e,"rem"]})}),l("td",{children:d("code",{children:["width-",e*16,"px"]})}),l("td",{children:e}),l("td",{children:e*16})]},e))})]})})]}),lA=Object.freeze(Object.defineProperty({__proto__:null,default:rA},Symbol.toStringTag,{value:"Module"})),aA=e=>B.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},B.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z",fill:"currentColor"})),ug="sidebar",oA="no-sidebar",F4="0.2.5",O4="2023-11-05",hg="2018",nu=O4.match(/^(\d+)/)[1],iA=nu===hg?nu:`${hg} - ${nu}`,sA=()=>{const{variant:e,setVariant:n}=Va();return l("header",{children:d("nav",{children:[d("div",{children:[l(Fa,{name:"bars",className:"toggle-sidebar action",onClick:()=>n(e===ug?oA:ug)}),l(oe,{to:"/",className:"home mar-l-2",text:"Badger-CSS"}),d("span",{className:"small mar-l-2",children:["v",F4]})]}),d("div",{children:[l("a",{href:"https://github.com/abw/badger-css",children:l(aA,{className:"night-and-day--icon mar-r-2"})}),l($M,{})]})]})})},na=({title:e,items:n})=>d("div",{className:"menu",children:[l("h4",{children:e}),n.map(t=>l(oe,{...t},t.to))]}),dA=[{to:"/getting-started/installation",text:"Installation"},{to:"/getting-started/good",text:"What's good about it?"},{to:"/getting-started/bad",text:"What's wrong with it?"}],cA=[{to:"/colors/demo",text:"Color Demo"},{to:"/colors/ranges",text:"Color Ranges"},{to:"/colors/brand",text:"Brand Colors"},{to:"/colors/variables",text:"Color Variables"},{to:"/colors/utilities",text:"Color Utilities"},{to:"/colors/palette",text:"Custom Palette"}],uA=[{to:"/utilities/",text:"Introduction"},{to:"/utilities/alignment",text:"Alignment"},{to:"/utilities/borders",text:"Borders"},{to:"/utilities/display",text:"Display"},{to:"/utilities/flexbox",text:"Flexbox"},{to:"/utilities/fonts",text:"Fonts"},{to:"/utilities/font-styles",text:"Font Styles"},{to:"/utilities/font-weights",text:"Font Weights"},{to:"/utilities/grid",text:"Grid"},{to:"/utilities/position",text:"Position"},{to:"/utilities/scrolling",text:"Scrolling"},{to:"/utilities/shadows",text:"Shadows"},{to:"/utilities/sizes",text:"Text Sizes"},{to:"/utilities/spacing",text:"Spacing"},{to:"/utilities/split",text:"Splits"},{to:"/utilities/stack",text:"Stacking"},{to:"/utilities/surfaces",text:"Surfaces"},{to:"/utilities/typography",text:"Typography"},{to:"/utilities/widths",text:"Widths"}],hA=[{to:"/forms/",text:"Introduction"},{to:"/forms/buttons",text:"Buttons"},{to:"/forms/checkboxes",text:"Checkboxes"},{to:"/forms/radio-buttons",text:"Radio Buttons"},{to:"/forms/select",text:"Select Inputs"},{to:"/forms/text",text:"Text Inputs"},{to:"/forms/textarea",text:"Text Area Inputs"},{to:"/forms/input",text:"Fake Inputs"},{to:"/forms/multi-inputs",text:"Multiple Inputs"},{to:"/forms/field",text:"Form Fields"},{to:"/forms/prefix-suffix",text:"Prefix and Suffix"},{to:"/forms/fieldset",text:"Form Field Sets"},{to:"/forms/styling",text:"Form Styling"}],pA=[{to:"/components/alerts",text:"Alerts"},{to:"/components/details",text:"Details"},{to:"/components/dialog",text:"Dialog"},{to:"/components/dropdown",text:"Dropdown"},{to:"/components/icons",text:"SVG Icons"},{to:"/components/overlay",text:"Overlay"},{to:"/components/tables",text:"Tables"},{to:"/components/tabs",text:"Tabs"},{to:"/components/tooltips",text:"Tooltips"}],fA=[{to:"/customising/sass",text:"Custom Stylesheet"}],gA=()=>d("div",{children:[l(na,{title:"Getting Started",items:dA}),l(na,{title:"Colors",items:cA}),l(na,{title:"Utilities",items:uA}),l(na,{title:"Forms",items:hA}),l(na,{title:"Components",items:pA}),l(na,{title:"Customising",items:fA})]}),mA=()=>l("footer",{children:d("div",{className:"flex space",children:[d("div",{children:["© Copyright ",iA," Andy Wardley"]}),d("div",{children:["Version ",F4," ",O4]})]})});function vA(){const{pathname:e}=Ua();return B.useEffect(()=>bA(document.getElementById("content")),[e]),null}function bA(e){e==null||e.scrollTo({top:0,left:0})}const yA=()=>{const{theme:e,variant:n}=Va();return d("div",{id:"site","data-sidebar":n,"data-theme":e,children:[l(sA,{}),d("div",{id:"app",children:[l(vA,{}),l("aside",{children:l(gA,{})}),l("main",{id:"content",children:l(eT,{})})]}),l(mA,{})]})},wA=Object.assign({"../pages/colors/brand.jsx":mT,"../pages/colors/demo.jsx":DT,"../pages/colors/greyscale.jsx":GT,"../pages/colors/palette.jsx":JT,"../pages/colors/ranges.jsx":l_,"../pages/colors/utilities.jsx":p_,"../pages/colors/variables.jsx":g_,"../pages/components/alerts.jsx":E_,"../pages/components/details.jsx":j_,"../pages/components/dialog.jsx":Z_,"../pages/components/dropdown.jsx":J_,"../pages/components/icons.jsx":oL,"../pages/components/overlay.jsx":hL,"../pages/components/tables.jsx":TL,"../pages/components/tabs.jsx":RL,"../pages/components/tooltips.jsx":zL,"../pages/customising/sass.jsx":KL,"../pages/decoder.jsx":r$,"../pages/forms/buttons.jsx":m$,"../pages/forms/checkboxes.jsx":S$,"../pages/forms/field.jsx":F$,"../pages/forms/fieldset.jsx":B$,"../pages/forms/index.jsx":wI,"../pages/forms/input.jsx":_I,"../pages/forms/multi-inputs.jsx":EI,"../pages/forms/prefix-suffix.jsx":WI,"../pages/forms/radio-buttons.jsx":QI,"../pages/forms/select.jsx":oM,"../pages/forms/styling.jsx":dM,"../pages/forms/text.jsx":mM,"../pages/forms/textarea.jsx":CM,"../pages/getting-started/bad.jsx":TM,"../pages/getting-started/good.jsx":AM,"../pages/getting-started/installation.jsx":UM,"../pages/index.jsx":VM,"../pages/utilities/alignment.jsx":QM,"../pages/utilities/borders.jsx":cR,"../pages/utilities/display.jsx":pR,"../pages/utilities/flexbox.jsx":LR,"../pages/utilities/font-styles.jsx":ER,"../pages/utilities/font-weights.jsx":FR,"../pages/utilities/fonts.jsx":HR,"../pages/utilities/grid.jsx":nP,"../pages/utilities/index.jsx":rP,"../pages/utilities/position.jsx":oP,"../pages/utilities/scrolling.jsx":cP,"../pages/utilities/shadows.jsx":fP,"../pages/utilities/sizes.jsx":wP,"../pages/utilities/spacing.jsx":LP,"../pages/utilities/split.jsx":PP,"../pages/utilities/stack.jsx":jP,"../pages/utilities/surfaces.jsx":VP,"../pages/utilities/typography.jsx":QP,"../pages/utilities/widths.jsx":lA}),xA=Object.entries(wA).map(([e,n])=>({path:e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,""),Component:n.default})),CA=iT([{path:"/",element:l(yA,{}),children:xA}],{basename:"/badger-css/"});tu.createRoot(document.getElementById("root")).render(l(En.StrictMode,{children:l(IM,{storageKey:"theme",children:l(Xk,{router:CA})})}));
