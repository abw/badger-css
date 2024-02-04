function gb(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const o=Object.getOwnPropertyDescriptor(r,l);o&&Object.defineProperty(e,l,o.get?o:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();var zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var f3={exports:{}},fc={},m3={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hi=Symbol.for("react.element"),vb=Symbol.for("react.portal"),bb=Symbol.for("react.fragment"),yb=Symbol.for("react.strict_mode"),wb=Symbol.for("react.profiler"),xb=Symbol.for("react.provider"),Cb=Symbol.for("react.context"),Sb=Symbol.for("react.forward_ref"),kb=Symbol.for("react.suspense"),Tb=Symbol.for("react.memo"),Lb=Symbol.for("react.lazy"),pf=Symbol.iterator;function _b(e){return e===null||typeof e!="object"?null:(e=pf&&e[pf]||e["@@iterator"],typeof e=="function"?e:null)}var g3={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v3=Object.assign,b3={};function Fl(e,n,t){this.props=e,this.context=n,this.refs=b3,this.updater=t||g3}Fl.prototype.isReactComponent={};Fl.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Fl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function y3(){}y3.prototype=Fl.prototype;function mh(e,n,t){this.props=e,this.context=n,this.refs=b3,this.updater=t||g3}var gh=mh.prototype=new y3;gh.constructor=mh;v3(gh,Fl.prototype);gh.isPureReactComponent=!0;var ff=Array.isArray,w3=Object.prototype.hasOwnProperty,vh={current:null},x3={key:!0,ref:!0,__self:!0,__source:!0};function C3(e,n,t){var r,l={},o=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)w3.call(n,r)&&!x3.hasOwnProperty(r)&&(l[r]=n[r]);var s=arguments.length-2;if(s===1)l.children=t;else if(1<s){for(var u=Array(s),p=0;p<s;p++)u[p]=arguments[p+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:hi,type:e,key:o,ref:i,props:l,_owner:vh.current}}function Nb(e,n){return{$$typeof:hi,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function bh(e){return typeof e=="object"&&e!==null&&e.$$typeof===hi}function $b(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var mf=/\/+/g;function md(e,n){return typeof e=="object"&&e!==null&&e.key!=null?$b(""+e.key):n.toString(36)}function ss(e,n,t,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case hi:case vb:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+md(i,0):r,ff(l)?(t="",e!=null&&(t=e.replace(mf,"$&/")+"/"),ss(l,n,t,"",function(p){return p})):l!=null&&(bh(l)&&(l=Nb(l,t+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(mf,"$&/")+"/")+e)),n.push(l)),1;if(i=0,r=r===""?".":r+":",ff(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+md(o,s);i+=ss(o,n,t,u,l)}else if(u=_b(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+md(o,s++),i+=ss(o,n,t,u,l);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function Fi(e,n,t){if(e==null)return e;var r=[],l=0;return ss(e,r,"","",function(o){return n.call(t,o,l++)}),r}function Eb(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Gn={current:null},cs={transition:null},Ib={ReactCurrentDispatcher:Gn,ReactCurrentBatchConfig:cs,ReactCurrentOwner:vh};Le.Children={map:Fi,forEach:function(e,n,t){Fi(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Fi(e,function(){n++}),n},toArray:function(e){return Fi(e,function(n){return n})||[]},only:function(e){if(!bh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Le.Component=Fl;Le.Fragment=bb;Le.Profiler=wb;Le.PureComponent=mh;Le.StrictMode=yb;Le.Suspense=kb;Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ib;Le.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=v3({},e.props),l=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=vh.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in n)w3.call(n,u)&&!x3.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&s!==void 0?s[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){s=Array(u);for(var p=0;p<u;p++)s[p]=arguments[p+2];r.children=s}return{$$typeof:hi,type:e.type,key:l,ref:o,props:r,_owner:i}};Le.createContext=function(e){return e={$$typeof:Cb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:xb,_context:e},e.Consumer=e};Le.createElement=C3;Le.createFactory=function(e){var n=C3.bind(null,e);return n.type=e,n};Le.createRef=function(){return{current:null}};Le.forwardRef=function(e){return{$$typeof:Sb,render:e}};Le.isValidElement=bh;Le.lazy=function(e){return{$$typeof:Lb,_payload:{_status:-1,_result:e},_init:Eb}};Le.memo=function(e,n){return{$$typeof:Tb,type:e,compare:n===void 0?null:n}};Le.startTransition=function(e){var n=cs.transition;cs.transition={};try{e()}finally{cs.transition=n}};Le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Le.useCallback=function(e,n){return Gn.current.useCallback(e,n)};Le.useContext=function(e){return Gn.current.useContext(e)};Le.useDebugValue=function(){};Le.useDeferredValue=function(e){return Gn.current.useDeferredValue(e)};Le.useEffect=function(e,n){return Gn.current.useEffect(e,n)};Le.useId=function(){return Gn.current.useId()};Le.useImperativeHandle=function(e,n,t){return Gn.current.useImperativeHandle(e,n,t)};Le.useInsertionEffect=function(e,n){return Gn.current.useInsertionEffect(e,n)};Le.useLayoutEffect=function(e,n){return Gn.current.useLayoutEffect(e,n)};Le.useMemo=function(e,n){return Gn.current.useMemo(e,n)};Le.useReducer=function(e,n,t){return Gn.current.useReducer(e,n,t)};Le.useRef=function(e){return Gn.current.useRef(e)};Le.useState=function(e){return Gn.current.useState(e)};Le.useSyncExternalStore=function(e,n,t){return Gn.current.useSyncExternalStore(e,n,t)};Le.useTransition=function(){return Gn.current.useTransition()};Le.version="18.2.0";m3.exports=Le;var D=m3.exports;const En=Xt(D),gf=gb({__proto__:null,default:En},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mb=D,Pb=Symbol.for("react.element"),Rb=Symbol.for("react.fragment"),Ab=Object.prototype.hasOwnProperty,Ob=Mb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fb={key:!0,ref:!0,__self:!0,__source:!0};function S3(e,n,t){var r,l={},o=null,i=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)Ab.call(n,r)&&!Fb.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Pb,type:e,key:o,ref:i,props:l,_owner:Ob.current}}fc.Fragment=Rb;fc.jsx=S3;fc.jsxs=S3;f3.exports=fc;var yh=f3.exports;const Pt=yh.Fragment,a=yh.jsx,c=yh.jsxs;var tu={},k3={exports:{}},vt={},T3={exports:{}},L3={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(W,q){var J=W.length;W.push(q);e:for(;0<J;){var ie=J-1>>>1,me=W[ie];if(0<l(me,q))W[ie]=q,W[J]=me,J=ie;else break e}}function t(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var q=W[0],J=W.pop();if(J!==q){W[0]=J;e:for(var ie=0,me=W.length,zn=me>>>1;ie<zn;){var ge=2*(ie+1)-1,nn=W[ge],qe=ge+1,fn=W[qe];if(0>l(nn,J))qe<me&&0>l(fn,nn)?(W[ie]=fn,W[qe]=J,ie=qe):(W[ie]=nn,W[ge]=J,ie=ge);else if(qe<me&&0>l(fn,J))W[ie]=fn,W[qe]=J,ie=qe;else break e}}return q}function l(W,q){var J=W.sortIndex-q.sortIndex;return J!==0?J:W.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],p=[],g=1,y=null,C=3,I=!1,E=!1,S=!1,M=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(W){for(var q=t(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=W)r(p),q.sortIndex=q.expirationTime,n(u,q);else break;q=t(p)}}function v(W){if(S=!1,b(W),!E)if(t(u)!==null)E=!0,je(_);else{var q=t(p);q!==null&&Ze(v,q.startTime-W)}}function _(W,q){E=!1,S&&(S=!1,w(F),F=-1),I=!0;var J=C;try{for(b(q),y=t(u);y!==null&&(!(y.expirationTime>q)||W&&!fe());){var ie=y.callback;if(typeof ie=="function"){y.callback=null,C=y.priorityLevel;var me=ie(y.expirationTime<=q);q=e.unstable_now(),typeof me=="function"?y.callback=me:y===t(u)&&r(u),b(q)}else r(u);y=t(u)}if(y!==null)var zn=!0;else{var ge=t(p);ge!==null&&Ze(v,ge.startTime-q),zn=!1}return zn}finally{y=null,C=J,I=!1}}var T=!1,A=null,F=-1,z=5,Z=-1;function fe(){return!(e.unstable_now()-Z<z)}function de(){if(A!==null){var W=e.unstable_now();Z=W;var q=!0;try{q=A(!0,W)}finally{q?We():(T=!1,A=null)}}else T=!1}var We;if(typeof m=="function")We=function(){m(de)};else if(typeof MessageChannel<"u"){var ln=new MessageChannel,Ye=ln.port2;ln.port1.onmessage=de,We=function(){Ye.postMessage(null)}}else We=function(){M(de,0)};function je(W){A=W,T||(T=!0,We())}function Ze(W,q){F=M(function(){W(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(W){W.callback=null},e.unstable_continueExecution=function(){E||I||(E=!0,je(_))},e.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<W?Math.floor(1e3/W):5},e.unstable_getCurrentPriorityLevel=function(){return C},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(W){switch(C){case 1:case 2:case 3:var q=3;break;default:q=C}var J=C;C=q;try{return W()}finally{C=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(W,q){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var J=C;C=W;try{return q()}finally{C=J}},e.unstable_scheduleCallback=function(W,q,J){var ie=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ie+J:ie):J=ie,W){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=J+me,W={id:g++,callback:q,priorityLevel:W,startTime:J,expirationTime:me,sortIndex:-1},J>ie?(W.sortIndex=J,n(p,W),t(u)===null&&W===t(p)&&(S?(w(F),F=-1):S=!0,Ze(v,J-ie))):(W.sortIndex=me,n(u,W),E||I||(E=!0,je(_))),W},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(W){var q=C;return function(){var J=C;C=q;try{return W.apply(this,arguments)}finally{C=J}}}})(L3);T3.exports=L3;var Bb=T3.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _3=D,gt=Bb;function Y(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var N3=new Set,Wo={};function Ma(e,n){_l(e,n),_l(e+"Capture",n)}function _l(e,n){for(Wo[e]=n,e=0;e<n.length;e++)N3.add(n[e])}var pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=Object.prototype.hasOwnProperty,Db=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vf={},bf={};function jb(e){return ru.call(bf,e)?!0:ru.call(vf,e)?!1:Db.test(e)?bf[e]=!0:(vf[e]=!0,!1)}function zb(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wb(e,n,t,r){if(n===null||typeof n>"u"||zb(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Yn(e,n,t,r,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var Pn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pn[e]=new Yn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Pn[n]=new Yn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pn[e]=new Yn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pn[e]=new Yn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pn[e]=new Yn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pn[e]=new Yn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pn[e]=new Yn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pn[e]=new Yn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pn[e]=new Yn(e,5,!1,e.toLowerCase(),null,!1,!1)});var wh=/[\-:]([a-z])/g;function xh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(wh,xh);Pn[n]=new Yn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(wh,xh);Pn[n]=new Yn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(wh,xh);Pn[n]=new Yn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pn[e]=new Yn(e,1,!1,e.toLowerCase(),null,!1,!1)});Pn.xlinkHref=new Yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pn[e]=new Yn(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ch(e,n,t,r){var l=Pn.hasOwnProperty(n)?Pn[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Wb(n,t,l,r)&&(t=null),r||l===null?jb(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var yr=_3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bi=Symbol.for("react.element"),al=Symbol.for("react.portal"),ll=Symbol.for("react.fragment"),Sh=Symbol.for("react.strict_mode"),au=Symbol.for("react.profiler"),$3=Symbol.for("react.provider"),E3=Symbol.for("react.context"),kh=Symbol.for("react.forward_ref"),lu=Symbol.for("react.suspense"),ou=Symbol.for("react.suspense_list"),Th=Symbol.for("react.memo"),$r=Symbol.for("react.lazy"),I3=Symbol.for("react.offscreen"),yf=Symbol.iterator;function io(e){return e===null||typeof e!="object"?null:(e=yf&&e[yf]||e["@@iterator"],typeof e=="function"?e:null)}var an=Object.assign,gd;function yo(e){if(gd===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);gd=n&&n[1]||""}return`
`+gd+e}var vd=!1;function bd(e,n){if(!e||vd)return"";vd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(p){var r=p}Reflect.construct(e,[],n)}else{try{n.call()}catch(p){r=p}e.call(n.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var l=p.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{vd=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?yo(e):""}function Hb(e){switch(e.tag){case 5:return yo(e.type);case 16:return yo("Lazy");case 13:return yo("Suspense");case 19:return yo("SuspenseList");case 0:case 2:case 15:return e=bd(e.type,!1),e;case 11:return e=bd(e.type.render,!1),e;case 1:return e=bd(e.type,!0),e;default:return""}}function iu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ll:return"Fragment";case al:return"Portal";case au:return"Profiler";case Sh:return"StrictMode";case lu:return"Suspense";case ou:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case E3:return(e.displayName||"Context")+".Consumer";case $3:return(e._context.displayName||"Context")+".Provider";case kh:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Th:return n=e.displayName||null,n!==null?n:iu(e.type)||"Memo";case $r:n=e._payload,e=e._init;try{return iu(e(n))}catch{}}return null}function Ub(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return iu(n);case 8:return n===Sh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Vr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function M3(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Vb(e){var n=M3(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Di(e){e._valueTracker||(e._valueTracker=Vb(e))}function P3(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=M3(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ms(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function su(e,n){var t=n.checked;return an({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function wf(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Vr(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function R3(e,n){n=n.checked,n!=null&&Ch(e,"checked",n,!1)}function cu(e,n){R3(e,n);var t=Vr(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?du(e,n.type,t):n.hasOwnProperty("defaultValue")&&du(e,n.type,Vr(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function xf(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function du(e,n,t){(n!=="number"||Ms(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var wo=Array.isArray;function yl(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Vr(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function uu(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(Y(91));return an({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cf(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(Y(92));if(wo(t)){if(1<t.length)throw Error(Y(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Vr(t)}}function A3(e,n){var t=Vr(n.value),r=Vr(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Sf(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function O3(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hu(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?O3(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ji,F3=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ji=ji||document.createElement("div"),ji.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ji.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ho(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var $o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gb=["Webkit","ms","Moz","O"];Object.keys($o).forEach(function(e){Gb.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),$o[n]=$o[e]})});function B3(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||$o.hasOwnProperty(e)&&$o[e]?(""+n).trim():n+"px"}function D3(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=B3(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Yb=an({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pu(e,n){if(n){if(Yb[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(Y(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(Y(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(Y(61))}if(n.style!=null&&typeof n.style!="object")throw Error(Y(62))}}function fu(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mu=null;function Lh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gu=null,wl=null,xl=null;function kf(e){if(e=mi(e)){if(typeof gu!="function")throw Error(Y(280));var n=e.stateNode;n&&(n=yc(n),gu(e.stateNode,e.type,n))}}function j3(e){wl?xl?xl.push(e):xl=[e]:wl=e}function z3(){if(wl){var e=wl,n=xl;if(xl=wl=null,kf(e),n)for(e=0;e<n.length;e++)kf(n[e])}}function W3(e,n){return e(n)}function H3(){}var yd=!1;function U3(e,n,t){if(yd)return e(n,t);yd=!0;try{return W3(e,n,t)}finally{yd=!1,(wl!==null||xl!==null)&&(H3(),z3())}}function Uo(e,n){var t=e.stateNode;if(t===null)return null;var r=yc(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(Y(231,n,typeof t));return t}var vu=!1;if(pr)try{var so={};Object.defineProperty(so,"passive",{get:function(){vu=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{vu=!1}function Zb(e,n,t,r,l,o,i,s,u){var p=Array.prototype.slice.call(arguments,3);try{n.apply(t,p)}catch(g){this.onError(g)}}var Eo=!1,Ps=null,Rs=!1,bu=null,qb={onError:function(e){Eo=!0,Ps=e}};function Kb(e,n,t,r,l,o,i,s,u){Eo=!1,Ps=null,Zb.apply(qb,arguments)}function Qb(e,n,t,r,l,o,i,s,u){if(Kb.apply(this,arguments),Eo){if(Eo){var p=Ps;Eo=!1,Ps=null}else throw Error(Y(198));Rs||(Rs=!0,bu=p)}}function Pa(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function V3(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Tf(e){if(Pa(e)!==e)throw Error(Y(188))}function Xb(e){var n=e.alternate;if(!n){if(n=Pa(e),n===null)throw Error(Y(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return Tf(l),e;if(o===r)return Tf(l),n;o=o.sibling}throw Error(Y(188))}if(t.return!==r.return)t=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===t){i=!0,t=l,r=o;break}if(s===r){i=!0,r=l,t=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===t){i=!0,t=o,r=l;break}if(s===r){i=!0,r=o,t=l;break}s=s.sibling}if(!i)throw Error(Y(189))}}if(t.alternate!==r)throw Error(Y(190))}if(t.tag!==3)throw Error(Y(188));return t.stateNode.current===t?e:n}function G3(e){return e=Xb(e),e!==null?Y3(e):null}function Y3(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Y3(e);if(n!==null)return n;e=e.sibling}return null}var Z3=gt.unstable_scheduleCallback,Lf=gt.unstable_cancelCallback,Jb=gt.unstable_shouldYield,e7=gt.unstable_requestPaint,sn=gt.unstable_now,n7=gt.unstable_getCurrentPriorityLevel,_h=gt.unstable_ImmediatePriority,q3=gt.unstable_UserBlockingPriority,As=gt.unstable_NormalPriority,t7=gt.unstable_LowPriority,K3=gt.unstable_IdlePriority,mc=null,Kt=null;function r7(e){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(mc,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:o7,a7=Math.log,l7=Math.LN2;function o7(e){return e>>>=0,e===0?32:31-(a7(e)/l7|0)|0}var zi=64,Wi=4194304;function xo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Os(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var s=i&~l;s!==0?r=xo(s):(o&=i,o!==0&&(r=xo(o)))}else i=t&~l,i!==0?r=xo(i):o!==0&&(r=xo(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,o=n&-n,l>=o||l===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-jt(n),l=1<<t,r|=e[t],n&=~l;return r}function i7(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function s7(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-jt(o),s=1<<i,u=l[i];u===-1?(!(s&t)||s&r)&&(l[i]=i7(s,n)):u<=n&&(e.expiredLanes|=s),o&=~s}}function yu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Q3(){var e=zi;return zi<<=1,!(zi&4194240)&&(zi=64),e}function wd(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function pi(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-jt(n),e[n]=t}function c7(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-jt(t),o=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~o}}function Nh(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-jt(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var De=0;function X3(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var J3,$h,e5,n5,t5,wu=!1,Hi=[],Fr=null,Br=null,Dr=null,Vo=new Map,Go=new Map,Ir=[],d7="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _f(e,n){switch(e){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":Vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(n.pointerId)}}function co(e,n,t,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},n!==null&&(n=mi(n),n!==null&&$h(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function u7(e,n,t,r,l){switch(n){case"focusin":return Fr=co(Fr,e,n,t,r,l),!0;case"dragenter":return Br=co(Br,e,n,t,r,l),!0;case"mouseover":return Dr=co(Dr,e,n,t,r,l),!0;case"pointerover":var o=l.pointerId;return Vo.set(o,co(Vo.get(o)||null,e,n,t,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Go.set(o,co(Go.get(o)||null,e,n,t,r,l)),!0}return!1}function r5(e){var n=ba(e.target);if(n!==null){var t=Pa(n);if(t!==null){if(n=t.tag,n===13){if(n=V3(t),n!==null){e.blockedOn=n,t5(e.priority,function(){e5(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ds(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=xu(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);mu=r,t.target.dispatchEvent(r),mu=null}else return n=mi(t),n!==null&&$h(n),e.blockedOn=t,!1;n.shift()}return!0}function Nf(e,n,t){ds(e)&&t.delete(n)}function h7(){wu=!1,Fr!==null&&ds(Fr)&&(Fr=null),Br!==null&&ds(Br)&&(Br=null),Dr!==null&&ds(Dr)&&(Dr=null),Vo.forEach(Nf),Go.forEach(Nf)}function uo(e,n){e.blockedOn===n&&(e.blockedOn=null,wu||(wu=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,h7)))}function Yo(e){function n(l){return uo(l,e)}if(0<Hi.length){uo(Hi[0],e);for(var t=1;t<Hi.length;t++){var r=Hi[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Fr!==null&&uo(Fr,e),Br!==null&&uo(Br,e),Dr!==null&&uo(Dr,e),Vo.forEach(n),Go.forEach(n),t=0;t<Ir.length;t++)r=Ir[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ir.length&&(t=Ir[0],t.blockedOn===null);)r5(t),t.blockedOn===null&&Ir.shift()}var Cl=yr.ReactCurrentBatchConfig,Fs=!0;function p7(e,n,t,r){var l=De,o=Cl.transition;Cl.transition=null;try{De=1,Eh(e,n,t,r)}finally{De=l,Cl.transition=o}}function f7(e,n,t,r){var l=De,o=Cl.transition;Cl.transition=null;try{De=4,Eh(e,n,t,r)}finally{De=l,Cl.transition=o}}function Eh(e,n,t,r){if(Fs){var l=xu(e,n,t,r);if(l===null)Ed(e,n,r,Bs,t),_f(e,r);else if(u7(l,e,n,t,r))r.stopPropagation();else if(_f(e,r),n&4&&-1<d7.indexOf(e)){for(;l!==null;){var o=mi(l);if(o!==null&&J3(o),o=xu(e,n,t,r),o===null&&Ed(e,n,r,Bs,t),o===l)break;l=o}l!==null&&r.stopPropagation()}else Ed(e,n,r,null,t)}}var Bs=null;function xu(e,n,t,r){if(Bs=null,e=Lh(r),e=ba(e),e!==null)if(n=Pa(e),n===null)e=null;else if(t=n.tag,t===13){if(e=V3(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Bs=e,null}function a5(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(n7()){case _h:return 1;case q3:return 4;case As:case t7:return 16;case K3:return 536870912;default:return 16}default:return 16}}var Pr=null,Ih=null,us=null;function l5(){if(us)return us;var e,n=Ih,t=n.length,r,l="value"in Pr?Pr.value:Pr.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===l[o-r];r++);return us=l.slice(e,1<r?1-r:void 0)}function hs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ui(){return!0}function $f(){return!1}function bt(e){function n(t,r,l,o,i){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ui:$f,this.isPropagationStopped=$f,this}return an(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),n}var Bl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mh=bt(Bl),fi=an({},Bl,{view:0,detail:0}),m7=bt(fi),xd,Cd,ho,gc=an({},fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ph,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ho&&(ho&&e.type==="mousemove"?(xd=e.screenX-ho.screenX,Cd=e.screenY-ho.screenY):Cd=xd=0,ho=e),xd)},movementY:function(e){return"movementY"in e?e.movementY:Cd}}),Ef=bt(gc),g7=an({},gc,{dataTransfer:0}),v7=bt(g7),b7=an({},fi,{relatedTarget:0}),Sd=bt(b7),y7=an({},Bl,{animationName:0,elapsedTime:0,pseudoElement:0}),w7=bt(y7),x7=an({},Bl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),C7=bt(x7),S7=an({},Bl,{data:0}),If=bt(S7),k7={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T7={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L7={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _7(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=L7[e])?!!n[e]:!1}function Ph(){return _7}var N7=an({},fi,{key:function(e){if(e.key){var n=k7[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?T7[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ph,charCode:function(e){return e.type==="keypress"?hs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$7=bt(N7),E7=an({},gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mf=bt(E7),I7=an({},fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ph}),M7=bt(I7),P7=an({},Bl,{propertyName:0,elapsedTime:0,pseudoElement:0}),R7=bt(P7),A7=an({},gc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),O7=bt(A7),F7=[9,13,27,32],Rh=pr&&"CompositionEvent"in window,Io=null;pr&&"documentMode"in document&&(Io=document.documentMode);var B7=pr&&"TextEvent"in window&&!Io,o5=pr&&(!Rh||Io&&8<Io&&11>=Io),Pf=String.fromCharCode(32),Rf=!1;function i5(e,n){switch(e){case"keyup":return F7.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function s5(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ol=!1;function D7(e,n){switch(e){case"compositionend":return s5(n);case"keypress":return n.which!==32?null:(Rf=!0,Pf);case"textInput":return e=n.data,e===Pf&&Rf?null:e;default:return null}}function j7(e,n){if(ol)return e==="compositionend"||!Rh&&i5(e,n)?(e=l5(),us=Ih=Pr=null,ol=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return o5&&n.locale!=="ko"?null:n.data;default:return null}}var z7={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Af(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!z7[e.type]:n==="textarea"}function c5(e,n,t,r){j3(r),n=Ds(n,"onChange"),0<n.length&&(t=new Mh("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Mo=null,Zo=null;function W7(e){w5(e,0)}function vc(e){var n=cl(e);if(P3(n))return e}function H7(e,n){if(e==="change")return n}var d5=!1;if(pr){var kd;if(pr){var Td="oninput"in document;if(!Td){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),Td=typeof Of.oninput=="function"}kd=Td}else kd=!1;d5=kd&&(!document.documentMode||9<document.documentMode)}function Ff(){Mo&&(Mo.detachEvent("onpropertychange",u5),Zo=Mo=null)}function u5(e){if(e.propertyName==="value"&&vc(Zo)){var n=[];c5(n,Zo,e,Lh(e)),U3(W7,n)}}function U7(e,n,t){e==="focusin"?(Ff(),Mo=n,Zo=t,Mo.attachEvent("onpropertychange",u5)):e==="focusout"&&Ff()}function V7(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vc(Zo)}function G7(e,n){if(e==="click")return vc(n)}function Y7(e,n){if(e==="input"||e==="change")return vc(n)}function Z7(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wt=typeof Object.is=="function"?Object.is:Z7;function qo(e,n){if(Wt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!ru.call(n,l)||!Wt(e[l],n[l]))return!1}return!0}function Bf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Df(e,n){var t=Bf(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Bf(t)}}function h5(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?h5(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function p5(){for(var e=window,n=Ms();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ms(e.document)}return n}function Ah(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function q7(e){var n=p5(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&h5(t.ownerDocument.documentElement,t)){if(r!==null&&Ah(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Df(t,o);var i=Df(t,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var K7=pr&&"documentMode"in document&&11>=document.documentMode,il=null,Cu=null,Po=null,Su=!1;function jf(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Su||il==null||il!==Ms(r)||(r=il,"selectionStart"in r&&Ah(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Po&&qo(Po,r)||(Po=r,r=Ds(Cu,"onSelect"),0<r.length&&(n=new Mh("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=il)))}function Vi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var sl={animationend:Vi("Animation","AnimationEnd"),animationiteration:Vi("Animation","AnimationIteration"),animationstart:Vi("Animation","AnimationStart"),transitionend:Vi("Transition","TransitionEnd")},Ld={},f5={};pr&&(f5=document.createElement("div").style,"AnimationEvent"in window||(delete sl.animationend.animation,delete sl.animationiteration.animation,delete sl.animationstart.animation),"TransitionEvent"in window||delete sl.transitionend.transition);function bc(e){if(Ld[e])return Ld[e];if(!sl[e])return e;var n=sl[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in f5)return Ld[e]=n[t];return e}var m5=bc("animationend"),g5=bc("animationiteration"),v5=bc("animationstart"),b5=bc("transitionend"),y5=new Map,zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(e,n){y5.set(e,n),Ma(n,[e])}for(var _d=0;_d<zf.length;_d++){var Nd=zf[_d],Q7=Nd.toLowerCase(),X7=Nd[0].toUpperCase()+Nd.slice(1);qr(Q7,"on"+X7)}qr(m5,"onAnimationEnd");qr(g5,"onAnimationIteration");qr(v5,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(b5,"onTransitionEnd");_l("onMouseEnter",["mouseout","mouseover"]);_l("onMouseLeave",["mouseout","mouseover"]);_l("onPointerEnter",["pointerout","pointerover"]);_l("onPointerLeave",["pointerout","pointerover"]);Ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ma("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J7=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));function Wf(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Qb(r,n,void 0,e),e.currentTarget=null}function w5(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var s=r[i],u=s.instance,p=s.currentTarget;if(s=s.listener,u!==o&&l.isPropagationStopped())break e;Wf(l,s,p),o=u}else for(i=0;i<r.length;i++){if(s=r[i],u=s.instance,p=s.currentTarget,s=s.listener,u!==o&&l.isPropagationStopped())break e;Wf(l,s,p),o=u}}}if(Rs)throw e=bu,Rs=!1,bu=null,e}function Qe(e,n){var t=n[Nu];t===void 0&&(t=n[Nu]=new Set);var r=e+"__bubble";t.has(r)||(x5(n,e,2,!1),t.add(r))}function $d(e,n,t){var r=0;n&&(r|=4),x5(t,e,r,n)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function Ko(e){if(!e[Gi]){e[Gi]=!0,N3.forEach(function(t){t!=="selectionchange"&&(J7.has(t)||$d(t,!1,e),$d(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Gi]||(n[Gi]=!0,$d("selectionchange",!1,n))}}function x5(e,n,t,r){switch(a5(n)){case 1:var l=p7;break;case 4:l=f7;break;default:l=Eh}t=l.bind(null,n,t,e),l=void 0,!vu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Ed(e,n,t,r,l){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;s!==null;){if(i=ba(s),i===null)return;if(u=i.tag,u===5||u===6){r=o=i;continue e}s=s.parentNode}}r=r.return}U3(function(){var p=o,g=Lh(t),y=[];e:{var C=y5.get(e);if(C!==void 0){var I=Mh,E=e;switch(e){case"keypress":if(hs(t)===0)break e;case"keydown":case"keyup":I=$7;break;case"focusin":E="focus",I=Sd;break;case"focusout":E="blur",I=Sd;break;case"beforeblur":case"afterblur":I=Sd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Ef;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=v7;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=M7;break;case m5:case g5:case v5:I=w7;break;case b5:I=R7;break;case"scroll":I=m7;break;case"wheel":I=O7;break;case"copy":case"cut":case"paste":I=C7;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Mf}var S=(n&4)!==0,M=!S&&e==="scroll",w=S?C!==null?C+"Capture":null:C;S=[];for(var m=p,b;m!==null;){b=m;var v=b.stateNode;if(b.tag===5&&v!==null&&(b=v,w!==null&&(v=Uo(m,w),v!=null&&S.push(Qo(m,v,b)))),M)break;m=m.return}0<S.length&&(C=new I(C,E,null,t,g),y.push({event:C,listeners:S}))}}if(!(n&7)){e:{if(C=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",C&&t!==mu&&(E=t.relatedTarget||t.fromElement)&&(ba(E)||E[fr]))break e;if((I||C)&&(C=g.window===g?g:(C=g.ownerDocument)?C.defaultView||C.parentWindow:window,I?(E=t.relatedTarget||t.toElement,I=p,E=E?ba(E):null,E!==null&&(M=Pa(E),E!==M||E.tag!==5&&E.tag!==6)&&(E=null)):(I=null,E=p),I!==E)){if(S=Ef,v="onMouseLeave",w="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(S=Mf,v="onPointerLeave",w="onPointerEnter",m="pointer"),M=I==null?C:cl(I),b=E==null?C:cl(E),C=new S(v,m+"leave",I,t,g),C.target=M,C.relatedTarget=b,v=null,ba(g)===p&&(S=new S(w,m+"enter",E,t,g),S.target=b,S.relatedTarget=M,v=S),M=v,I&&E)n:{for(S=I,w=E,m=0,b=S;b;b=Xa(b))m++;for(b=0,v=w;v;v=Xa(v))b++;for(;0<m-b;)S=Xa(S),m--;for(;0<b-m;)w=Xa(w),b--;for(;m--;){if(S===w||w!==null&&S===w.alternate)break n;S=Xa(S),w=Xa(w)}S=null}else S=null;I!==null&&Hf(y,C,I,S,!1),E!==null&&M!==null&&Hf(y,M,E,S,!0)}}e:{if(C=p?cl(p):window,I=C.nodeName&&C.nodeName.toLowerCase(),I==="select"||I==="input"&&C.type==="file")var _=H7;else if(Af(C))if(d5)_=Y7;else{_=V7;var T=U7}else(I=C.nodeName)&&I.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(_=G7);if(_&&(_=_(e,p))){c5(y,_,t,g);break e}T&&T(e,C,p),e==="focusout"&&(T=C._wrapperState)&&T.controlled&&C.type==="number"&&du(C,"number",C.value)}switch(T=p?cl(p):window,e){case"focusin":(Af(T)||T.contentEditable==="true")&&(il=T,Cu=p,Po=null);break;case"focusout":Po=Cu=il=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,jf(y,t,g);break;case"selectionchange":if(K7)break;case"keydown":case"keyup":jf(y,t,g)}var A;if(Rh)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else ol?i5(e,t)&&(F="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(F="onCompositionStart");F&&(o5&&t.locale!=="ko"&&(ol||F!=="onCompositionStart"?F==="onCompositionEnd"&&ol&&(A=l5()):(Pr=g,Ih="value"in Pr?Pr.value:Pr.textContent,ol=!0)),T=Ds(p,F),0<T.length&&(F=new If(F,e,null,t,g),y.push({event:F,listeners:T}),A?F.data=A:(A=s5(t),A!==null&&(F.data=A)))),(A=B7?D7(e,t):j7(e,t))&&(p=Ds(p,"onBeforeInput"),0<p.length&&(g=new If("onBeforeInput","beforeinput",null,t,g),y.push({event:g,listeners:p}),g.data=A))}w5(y,n)})}function Qo(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ds(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Uo(e,t),o!=null&&r.unshift(Qo(e,o,l)),o=Uo(e,n),o!=null&&r.push(Qo(e,o,l))),e=e.return}return r}function Xa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hf(e,n,t,r,l){for(var o=n._reactName,i=[];t!==null&&t!==r;){var s=t,u=s.alternate,p=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&p!==null&&(s=p,l?(u=Uo(t,o),u!=null&&i.unshift(Qo(t,u,s))):l||(u=Uo(t,o),u!=null&&i.push(Qo(t,u,s)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var e9=/\r\n?/g,n9=/\u0000|\uFFFD/g;function Uf(e){return(typeof e=="string"?e:""+e).replace(e9,`
`).replace(n9,"")}function Yi(e,n,t){if(n=Uf(n),Uf(e)!==n&&t)throw Error(Y(425))}function js(){}var ku=null,Tu=null;function Lu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var _u=typeof setTimeout=="function"?setTimeout:void 0,t9=typeof clearTimeout=="function"?clearTimeout:void 0,Vf=typeof Promise=="function"?Promise:void 0,r9=typeof queueMicrotask=="function"?queueMicrotask:typeof Vf<"u"?function(e){return Vf.resolve(null).then(e).catch(a9)}:_u;function a9(e){setTimeout(function(){throw e})}function Id(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Yo(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Yo(n)}function jr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Gf(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Dl=Math.random().toString(36).slice(2),qt="__reactFiber$"+Dl,Xo="__reactProps$"+Dl,fr="__reactContainer$"+Dl,Nu="__reactEvents$"+Dl,l9="__reactListeners$"+Dl,o9="__reactHandles$"+Dl;function ba(e){var n=e[qt];if(n)return n;for(var t=e.parentNode;t;){if(n=t[fr]||t[qt]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Gf(e);e!==null;){if(t=e[qt])return t;e=Gf(e)}return n}e=t,t=e.parentNode}return null}function mi(e){return e=e[qt]||e[fr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function cl(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Y(33))}function yc(e){return e[Xo]||null}var $u=[],dl=-1;function Kr(e){return{current:e}}function Je(e){0>dl||(e.current=$u[dl],$u[dl]=null,dl--)}function Ge(e,n){dl++,$u[dl]=e.current,e.current=n}var Gr={},jn=Kr(Gr),rt=Kr(!1),La=Gr;function Nl(e,n){var t=e.type.contextTypes;if(!t)return Gr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in t)l[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function at(e){return e=e.childContextTypes,e!=null}function zs(){Je(rt),Je(jn)}function Yf(e,n,t){if(jn.current!==Gr)throw Error(Y(168));Ge(jn,n),Ge(rt,t)}function C5(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(Y(108,Ub(e)||"Unknown",l));return an({},t,r)}function Ws(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gr,La=jn.current,Ge(jn,e),Ge(rt,rt.current),!0}function Zf(e,n,t){var r=e.stateNode;if(!r)throw Error(Y(169));t?(e=C5(e,n,La),r.__reactInternalMemoizedMergedChildContext=e,Je(rt),Je(jn),Ge(jn,e)):Je(rt),Ge(rt,t)}var sr=null,wc=!1,Md=!1;function S5(e){sr===null?sr=[e]:sr.push(e)}function i9(e){wc=!0,S5(e)}function Qr(){if(!Md&&sr!==null){Md=!0;var e=0,n=De;try{var t=sr;for(De=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}sr=null,wc=!1}catch(l){throw sr!==null&&(sr=sr.slice(e+1)),Z3(_h,Qr),l}finally{De=n,Md=!1}}return null}var ul=[],hl=0,Hs=null,Us=0,xt=[],Ct=0,_a=null,cr=1,dr="";function pa(e,n){ul[hl++]=Us,ul[hl++]=Hs,Hs=e,Us=n}function k5(e,n,t){xt[Ct++]=cr,xt[Ct++]=dr,xt[Ct++]=_a,_a=e;var r=cr;e=dr;var l=32-jt(r)-1;r&=~(1<<l),t+=1;var o=32-jt(n)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,cr=1<<32-jt(n)+l|t<<l|r,dr=o+e}else cr=1<<o|t<<l|r,dr=e}function Oh(e){e.return!==null&&(pa(e,1),k5(e,1,0))}function Fh(e){for(;e===Hs;)Hs=ul[--hl],ul[hl]=null,Us=ul[--hl],ul[hl]=null;for(;e===_a;)_a=xt[--Ct],xt[Ct]=null,dr=xt[--Ct],xt[Ct]=null,cr=xt[--Ct],xt[Ct]=null}var mt=null,ft=null,en=!1,Ft=null;function T5(e,n){var t=St(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function qf(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,mt=e,ft=jr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,mt=e,ft=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=_a!==null?{id:cr,overflow:dr}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=St(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,mt=e,ft=null,!0):!1;default:return!1}}function Eu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Iu(e){if(en){var n=ft;if(n){var t=n;if(!qf(e,n)){if(Eu(e))throw Error(Y(418));n=jr(t.nextSibling);var r=mt;n&&qf(e,n)?T5(r,t):(e.flags=e.flags&-4097|2,en=!1,mt=e)}}else{if(Eu(e))throw Error(Y(418));e.flags=e.flags&-4097|2,en=!1,mt=e}}}function Kf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;mt=e}function Zi(e){if(e!==mt)return!1;if(!en)return Kf(e),en=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Lu(e.type,e.memoizedProps)),n&&(n=ft)){if(Eu(e))throw L5(),Error(Y(418));for(;n;)T5(e,n),n=jr(n.nextSibling)}if(Kf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ft=jr(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ft=null}}else ft=mt?jr(e.stateNode.nextSibling):null;return!0}function L5(){for(var e=ft;e;)e=jr(e.nextSibling)}function $l(){ft=mt=null,en=!1}function Bh(e){Ft===null?Ft=[e]:Ft.push(e)}var s9=yr.ReactCurrentBatchConfig;function Rt(e,n){if(e&&e.defaultProps){n=an({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Vs=Kr(null),Gs=null,pl=null,Dh=null;function jh(){Dh=pl=Gs=null}function zh(e){var n=Vs.current;Je(Vs),e._currentValue=n}function Mu(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Sl(e,n){Gs=e,Dh=pl=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(tt=!0),e.firstContext=null)}function Tt(e){var n=e._currentValue;if(Dh!==e)if(e={context:e,memoizedValue:n,next:null},pl===null){if(Gs===null)throw Error(Y(308));pl=e,Gs.dependencies={lanes:0,firstContext:e}}else pl=pl.next=e;return n}var ya=null;function Wh(e){ya===null?ya=[e]:ya.push(e)}function _5(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,Wh(n)):(t.next=l.next,l.next=t),n.interleaved=t,mr(e,r)}function mr(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Er=!1;function Hh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function N5(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ur(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function zr(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Me&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,mr(e,t)}return l=r.interleaved,l===null?(n.next=n,Wh(r)):(n.next=l.next,l.next=n),r.interleaved=n,mr(e,t)}function ps(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Nh(e,t)}}function Qf(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?l=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ys(e,n,t,r){var l=e.updateQueue;Er=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,p=u.next;u.next=null,i===null?o=p:i.next=p,i=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==i&&(s===null?g.firstBaseUpdate=p:s.next=p,g.lastBaseUpdate=u))}if(o!==null){var y=l.baseState;i=0,g=p=u=null,s=o;do{var C=s.lane,I=s.eventTime;if((r&C)===C){g!==null&&(g=g.next={eventTime:I,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var E=e,S=s;switch(C=n,I=t,S.tag){case 1:if(E=S.payload,typeof E=="function"){y=E.call(I,y,C);break e}y=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=S.payload,C=typeof E=="function"?E.call(I,y,C):E,C==null)break e;y=an({},y,C);break e;case 2:Er=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,C=l.effects,C===null?l.effects=[s]:C.push(s))}else I={eventTime:I,lane:C,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(p=g=I,u=y):g=g.next=I,i|=C;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;C=s,s=C.next,C.next=null,l.lastBaseUpdate=C,l.shared.pending=null}}while(1);if(g===null&&(u=y),l.baseState=u,l.firstBaseUpdate=p,l.lastBaseUpdate=g,n=l.shared.interleaved,n!==null){l=n;do i|=l.lane,l=l.next;while(l!==n)}else o===null&&(l.shared.lanes=0);$a|=i,e.lanes=i,e.memoizedState=y}}function Xf(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(Y(191,l));l.call(r)}}}var $5=new _3.Component().refs;function Pu(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:an({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var xc={isMounted:function(e){return(e=e._reactInternals)?Pa(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Vn(),l=Hr(e),o=ur(r,l);o.payload=n,t!=null&&(o.callback=t),n=zr(e,o,l),n!==null&&(zt(n,e,l,r),ps(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Vn(),l=Hr(e),o=ur(r,l);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=zr(e,o,l),n!==null&&(zt(n,e,l,r),ps(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Vn(),r=Hr(e),l=ur(t,r);l.tag=2,n!=null&&(l.callback=n),n=zr(e,l,r),n!==null&&(zt(n,e,r,t),ps(n,e,r))}};function Jf(e,n,t,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!qo(t,r)||!qo(l,o):!0}function E5(e,n,t){var r=!1,l=Gr,o=n.contextType;return typeof o=="object"&&o!==null?o=Tt(o):(l=at(n)?La:jn.current,r=n.contextTypes,o=(r=r!=null)?Nl(e,l):Gr),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=xc,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),n}function e2(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&xc.enqueueReplaceState(n,n.state,null)}function Ru(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs=$5,Hh(e);var o=n.contextType;typeof o=="object"&&o!==null?l.context=Tt(o):(o=at(n)?La:jn.current,l.context=Nl(e,o)),l.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Pu(e,n,o,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&xc.enqueueReplaceState(l,l.state,null),Ys(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function po(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Y(309));var r=t.stateNode}if(!r)throw Error(Y(147,e));var l=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var s=l.refs;s===$5&&(s=l.refs={}),i===null?delete s[o]:s[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(Y(284));if(!t._owner)throw Error(Y(290,e))}return e}function qi(e,n){throw e=Object.prototype.toString.call(n),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function n2(e){var n=e._init;return n(e._payload)}function I5(e){function n(w,m){if(e){var b=w.deletions;b===null?(w.deletions=[m],w.flags|=16):b.push(m)}}function t(w,m){if(!e)return null;for(;m!==null;)n(w,m),m=m.sibling;return null}function r(w,m){for(w=new Map;m!==null;)m.key!==null?w.set(m.key,m):w.set(m.index,m),m=m.sibling;return w}function l(w,m){return w=Ur(w,m),w.index=0,w.sibling=null,w}function o(w,m,b){return w.index=b,e?(b=w.alternate,b!==null?(b=b.index,b<m?(w.flags|=2,m):b):(w.flags|=2,m)):(w.flags|=1048576,m)}function i(w){return e&&w.alternate===null&&(w.flags|=2),w}function s(w,m,b,v){return m===null||m.tag!==6?(m=Dd(b,w.mode,v),m.return=w,m):(m=l(m,b),m.return=w,m)}function u(w,m,b,v){var _=b.type;return _===ll?g(w,m,b.props.children,v,b.key):m!==null&&(m.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===$r&&n2(_)===m.type)?(v=l(m,b.props),v.ref=po(w,m,b),v.return=w,v):(v=ys(b.type,b.key,b.props,null,w.mode,v),v.ref=po(w,m,b),v.return=w,v)}function p(w,m,b,v){return m===null||m.tag!==4||m.stateNode.containerInfo!==b.containerInfo||m.stateNode.implementation!==b.implementation?(m=jd(b,w.mode,v),m.return=w,m):(m=l(m,b.children||[]),m.return=w,m)}function g(w,m,b,v,_){return m===null||m.tag!==7?(m=Ta(b,w.mode,v,_),m.return=w,m):(m=l(m,b),m.return=w,m)}function y(w,m,b){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Dd(""+m,w.mode,b),m.return=w,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Bi:return b=ys(m.type,m.key,m.props,null,w.mode,b),b.ref=po(w,null,m),b.return=w,b;case al:return m=jd(m,w.mode,b),m.return=w,m;case $r:var v=m._init;return y(w,v(m._payload),b)}if(wo(m)||io(m))return m=Ta(m,w.mode,b,null),m.return=w,m;qi(w,m)}return null}function C(w,m,b,v){var _=m!==null?m.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return _!==null?null:s(w,m,""+b,v);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Bi:return b.key===_?u(w,m,b,v):null;case al:return b.key===_?p(w,m,b,v):null;case $r:return _=b._init,C(w,m,_(b._payload),v)}if(wo(b)||io(b))return _!==null?null:g(w,m,b,v,null);qi(w,b)}return null}function I(w,m,b,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return w=w.get(b)||null,s(m,w,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Bi:return w=w.get(v.key===null?b:v.key)||null,u(m,w,v,_);case al:return w=w.get(v.key===null?b:v.key)||null,p(m,w,v,_);case $r:var T=v._init;return I(w,m,b,T(v._payload),_)}if(wo(v)||io(v))return w=w.get(b)||null,g(m,w,v,_,null);qi(m,v)}return null}function E(w,m,b,v){for(var _=null,T=null,A=m,F=m=0,z=null;A!==null&&F<b.length;F++){A.index>F?(z=A,A=null):z=A.sibling;var Z=C(w,A,b[F],v);if(Z===null){A===null&&(A=z);break}e&&A&&Z.alternate===null&&n(w,A),m=o(Z,m,F),T===null?_=Z:T.sibling=Z,T=Z,A=z}if(F===b.length)return t(w,A),en&&pa(w,F),_;if(A===null){for(;F<b.length;F++)A=y(w,b[F],v),A!==null&&(m=o(A,m,F),T===null?_=A:T.sibling=A,T=A);return en&&pa(w,F),_}for(A=r(w,A);F<b.length;F++)z=I(A,w,F,b[F],v),z!==null&&(e&&z.alternate!==null&&A.delete(z.key===null?F:z.key),m=o(z,m,F),T===null?_=z:T.sibling=z,T=z);return e&&A.forEach(function(fe){return n(w,fe)}),en&&pa(w,F),_}function S(w,m,b,v){var _=io(b);if(typeof _!="function")throw Error(Y(150));if(b=_.call(b),b==null)throw Error(Y(151));for(var T=_=null,A=m,F=m=0,z=null,Z=b.next();A!==null&&!Z.done;F++,Z=b.next()){A.index>F?(z=A,A=null):z=A.sibling;var fe=C(w,A,Z.value,v);if(fe===null){A===null&&(A=z);break}e&&A&&fe.alternate===null&&n(w,A),m=o(fe,m,F),T===null?_=fe:T.sibling=fe,T=fe,A=z}if(Z.done)return t(w,A),en&&pa(w,F),_;if(A===null){for(;!Z.done;F++,Z=b.next())Z=y(w,Z.value,v),Z!==null&&(m=o(Z,m,F),T===null?_=Z:T.sibling=Z,T=Z);return en&&pa(w,F),_}for(A=r(w,A);!Z.done;F++,Z=b.next())Z=I(A,w,F,Z.value,v),Z!==null&&(e&&Z.alternate!==null&&A.delete(Z.key===null?F:Z.key),m=o(Z,m,F),T===null?_=Z:T.sibling=Z,T=Z);return e&&A.forEach(function(de){return n(w,de)}),en&&pa(w,F),_}function M(w,m,b,v){if(typeof b=="object"&&b!==null&&b.type===ll&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Bi:e:{for(var _=b.key,T=m;T!==null;){if(T.key===_){if(_=b.type,_===ll){if(T.tag===7){t(w,T.sibling),m=l(T,b.props.children),m.return=w,w=m;break e}}else if(T.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===$r&&n2(_)===T.type){t(w,T.sibling),m=l(T,b.props),m.ref=po(w,T,b),m.return=w,w=m;break e}t(w,T);break}else n(w,T);T=T.sibling}b.type===ll?(m=Ta(b.props.children,w.mode,v,b.key),m.return=w,w=m):(v=ys(b.type,b.key,b.props,null,w.mode,v),v.ref=po(w,m,b),v.return=w,w=v)}return i(w);case al:e:{for(T=b.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===b.containerInfo&&m.stateNode.implementation===b.implementation){t(w,m.sibling),m=l(m,b.children||[]),m.return=w,w=m;break e}else{t(w,m);break}else n(w,m);m=m.sibling}m=jd(b,w.mode,v),m.return=w,w=m}return i(w);case $r:return T=b._init,M(w,m,T(b._payload),v)}if(wo(b))return E(w,m,b,v);if(io(b))return S(w,m,b,v);qi(w,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,m!==null&&m.tag===6?(t(w,m.sibling),m=l(m,b),m.return=w,w=m):(t(w,m),m=Dd(b,w.mode,v),m.return=w,w=m),i(w)):t(w,m)}return M}var El=I5(!0),M5=I5(!1),gi={},Qt=Kr(gi),Jo=Kr(gi),ei=Kr(gi);function wa(e){if(e===gi)throw Error(Y(174));return e}function Uh(e,n){switch(Ge(ei,n),Ge(Jo,e),Ge(Qt,gi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:hu(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=hu(n,e)}Je(Qt),Ge(Qt,n)}function Il(){Je(Qt),Je(Jo),Je(ei)}function P5(e){wa(ei.current);var n=wa(Qt.current),t=hu(n,e.type);n!==t&&(Ge(Jo,e),Ge(Qt,t))}function Vh(e){Jo.current===e&&(Je(Qt),Je(Jo))}var tn=Kr(0);function Zs(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Pd=[];function Gh(){for(var e=0;e<Pd.length;e++)Pd[e]._workInProgressVersionPrimary=null;Pd.length=0}var fs=yr.ReactCurrentDispatcher,Rd=yr.ReactCurrentBatchConfig,Na=0,rn=null,bn=null,Sn=null,qs=!1,Ro=!1,ni=0,c9=0;function Fn(){throw Error(Y(321))}function Yh(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Wt(e[t],n[t]))return!1;return!0}function Zh(e,n,t,r,l,o){if(Na=o,rn=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,fs.current=e===null||e.memoizedState===null?p9:f9,e=t(r,l),Ro){o=0;do{if(Ro=!1,ni=0,25<=o)throw Error(Y(301));o+=1,Sn=bn=null,n.updateQueue=null,fs.current=m9,e=t(r,l)}while(Ro)}if(fs.current=Ks,n=bn!==null&&bn.next!==null,Na=0,Sn=bn=rn=null,qs=!1,n)throw Error(Y(300));return e}function qh(){var e=ni!==0;return ni=0,e}function Yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?rn.memoizedState=Sn=e:Sn=Sn.next=e,Sn}function Lt(){if(bn===null){var e=rn.alternate;e=e!==null?e.memoizedState:null}else e=bn.next;var n=Sn===null?rn.memoizedState:Sn.next;if(n!==null)Sn=n,bn=e;else{if(e===null)throw Error(Y(310));bn=e,e={memoizedState:bn.memoizedState,baseState:bn.baseState,baseQueue:bn.baseQueue,queue:bn.queue,next:null},Sn===null?rn.memoizedState=Sn=e:Sn=Sn.next=e}return Sn}function ti(e,n){return typeof n=="function"?n(e):n}function Ad(e){var n=Lt(),t=n.queue;if(t===null)throw Error(Y(311));t.lastRenderedReducer=e;var r=bn,l=r.baseQueue,o=t.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,t.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,u=null,p=o;do{var g=p.lane;if((Na&g)===g)u!==null&&(u=u.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var y={lane:g,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};u===null?(s=u=y,i=r):u=u.next=y,rn.lanes|=g,$a|=g}p=p.next}while(p!==null&&p!==o);u===null?i=r:u.next=s,Wt(r,n.memoizedState)||(tt=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do o=l.lane,rn.lanes|=o,$a|=o,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Od(e){var n=Lt(),t=n.queue;if(t===null)throw Error(Y(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Wt(o,n.memoizedState)||(tt=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function R5(){}function A5(e,n){var t=rn,r=Lt(),l=n(),o=!Wt(r.memoizedState,l);if(o&&(r.memoizedState=l,tt=!0),r=r.queue,Kh(B5.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Sn!==null&&Sn.memoizedState.tag&1){if(t.flags|=2048,ri(9,F5.bind(null,t,r,l,n),void 0,null),kn===null)throw Error(Y(349));Na&30||O5(t,n,l)}return l}function O5(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=rn.updateQueue,n===null?(n={lastEffect:null,stores:null},rn.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function F5(e,n,t,r){n.value=t,n.getSnapshot=r,D5(n)&&j5(e)}function B5(e,n,t){return t(function(){D5(n)&&j5(e)})}function D5(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Wt(e,t)}catch{return!0}}function j5(e){var n=mr(e,1);n!==null&&zt(n,e,1,-1)}function t2(e){var n=Yt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:e},n.queue=e,e=e.dispatch=h9.bind(null,rn,e),[n.memoizedState,e]}function ri(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=rn.updateQueue,n===null?(n={lastEffect:null,stores:null},rn.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function z5(){return Lt().memoizedState}function ms(e,n,t,r){var l=Yt();rn.flags|=e,l.memoizedState=ri(1|n,t,void 0,r===void 0?null:r)}function Cc(e,n,t,r){var l=Lt();r=r===void 0?null:r;var o=void 0;if(bn!==null){var i=bn.memoizedState;if(o=i.destroy,r!==null&&Yh(r,i.deps)){l.memoizedState=ri(n,t,o,r);return}}rn.flags|=e,l.memoizedState=ri(1|n,t,o,r)}function r2(e,n){return ms(8390656,8,e,n)}function Kh(e,n){return Cc(2048,8,e,n)}function W5(e,n){return Cc(4,2,e,n)}function H5(e,n){return Cc(4,4,e,n)}function U5(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function V5(e,n,t){return t=t!=null?t.concat([e]):null,Cc(4,4,U5.bind(null,n,e),t)}function Qh(){}function G5(e,n){var t=Lt();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Yh(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Y5(e,n){var t=Lt();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Yh(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Z5(e,n,t){return Na&21?(Wt(t,n)||(t=Q3(),rn.lanes|=t,$a|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=t)}function d9(e,n){var t=De;De=t!==0&&4>t?t:4,e(!0);var r=Rd.transition;Rd.transition={};try{e(!1),n()}finally{De=t,Rd.transition=r}}function q5(){return Lt().memoizedState}function u9(e,n,t){var r=Hr(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},K5(e))Q5(n,t);else if(t=_5(e,n,t,r),t!==null){var l=Vn();zt(t,e,r,l),X5(t,n,r)}}function h9(e,n,t){var r=Hr(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(K5(e))Q5(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,s=o(i,t);if(l.hasEagerState=!0,l.eagerState=s,Wt(s,i)){var u=n.interleaved;u===null?(l.next=l,Wh(n)):(l.next=u.next,u.next=l),n.interleaved=l;return}}catch{}finally{}t=_5(e,n,l,r),t!==null&&(l=Vn(),zt(t,e,r,l),X5(t,n,r))}}function K5(e){var n=e.alternate;return e===rn||n!==null&&n===rn}function Q5(e,n){Ro=qs=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function X5(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Nh(e,t)}}var Ks={readContext:Tt,useCallback:Fn,useContext:Fn,useEffect:Fn,useImperativeHandle:Fn,useInsertionEffect:Fn,useLayoutEffect:Fn,useMemo:Fn,useReducer:Fn,useRef:Fn,useState:Fn,useDebugValue:Fn,useDeferredValue:Fn,useTransition:Fn,useMutableSource:Fn,useSyncExternalStore:Fn,useId:Fn,unstable_isNewReconciler:!1},p9={readContext:Tt,useCallback:function(e,n){return Yt().memoizedState=[e,n===void 0?null:n],e},useContext:Tt,useEffect:r2,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ms(4194308,4,U5.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ms(4194308,4,e,n)},useInsertionEffect:function(e,n){return ms(4,2,e,n)},useMemo:function(e,n){var t=Yt();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Yt();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=u9.bind(null,rn,e),[r.memoizedState,e]},useRef:function(e){var n=Yt();return e={current:e},n.memoizedState=e},useState:t2,useDebugValue:Qh,useDeferredValue:function(e){return Yt().memoizedState=e},useTransition:function(){var e=t2(!1),n=e[0];return e=d9.bind(null,e[1]),Yt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=rn,l=Yt();if(en){if(t===void 0)throw Error(Y(407));t=t()}else{if(t=n(),kn===null)throw Error(Y(349));Na&30||O5(r,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,r2(B5.bind(null,r,o,e),[e]),r.flags|=2048,ri(9,F5.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Yt(),n=kn.identifierPrefix;if(en){var t=dr,r=cr;t=(r&~(1<<32-jt(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=ni++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=c9++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},f9={readContext:Tt,useCallback:G5,useContext:Tt,useEffect:Kh,useImperativeHandle:V5,useInsertionEffect:W5,useLayoutEffect:H5,useMemo:Y5,useReducer:Ad,useRef:z5,useState:function(){return Ad(ti)},useDebugValue:Qh,useDeferredValue:function(e){var n=Lt();return Z5(n,bn.memoizedState,e)},useTransition:function(){var e=Ad(ti)[0],n=Lt().memoizedState;return[e,n]},useMutableSource:R5,useSyncExternalStore:A5,useId:q5,unstable_isNewReconciler:!1},m9={readContext:Tt,useCallback:G5,useContext:Tt,useEffect:Kh,useImperativeHandle:V5,useInsertionEffect:W5,useLayoutEffect:H5,useMemo:Y5,useReducer:Od,useRef:z5,useState:function(){return Od(ti)},useDebugValue:Qh,useDeferredValue:function(e){var n=Lt();return bn===null?n.memoizedState=e:Z5(n,bn.memoizedState,e)},useTransition:function(){var e=Od(ti)[0],n=Lt().memoizedState;return[e,n]},useMutableSource:R5,useSyncExternalStore:A5,useId:q5,unstable_isNewReconciler:!1};function Ml(e,n){try{var t="",r=n;do t+=Hb(r),r=r.return;while(r);var l=t}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:l,digest:null}}function Fd(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Au(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var g9=typeof WeakMap=="function"?WeakMap:Map;function J5(e,n,t){t=ur(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Xs||(Xs=!0,Vu=r),Au(e,n)},t}function em(e,n,t){t=ur(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Au(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Au(e,n),typeof r!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function a2(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new g9;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=E9.bind(null,e,n,t),n.then(e,e))}function l2(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function o2(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=ur(-1,1),n.tag=2,zr(t,n,1))),t.lanes|=1),e)}var v9=yr.ReactCurrentOwner,tt=!1;function Hn(e,n,t,r){n.child=e===null?M5(n,null,t,r):El(n,e.child,t,r)}function i2(e,n,t,r,l){t=t.render;var o=n.ref;return Sl(n,l),r=Zh(e,n,t,r,o,l),t=qh(),e!==null&&!tt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,gr(e,n,l)):(en&&t&&Oh(n),n.flags|=1,Hn(e,n,r,l),n.child)}function s2(e,n,t,r,l){if(e===null){var o=t.type;return typeof o=="function"&&!lp(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,nm(e,n,o,r,l)):(e=ys(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:qo,t(i,r)&&e.ref===n.ref)return gr(e,n,l)}return n.flags|=1,e=Ur(o,r),e.ref=n.ref,e.return=n,n.child=e}function nm(e,n,t,r,l){if(e!==null){var o=e.memoizedProps;if(qo(o,r)&&e.ref===n.ref)if(tt=!1,n.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(tt=!0);else return n.lanes=e.lanes,gr(e,n,l)}return Ou(e,n,t,r,l)}function tm(e,n,t){var r=n.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(ml,ct),ct|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Ge(ml,ct),ct|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,Ge(ml,ct),ct|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,Ge(ml,ct),ct|=r;return Hn(e,n,l,t),n.child}function rm(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ou(e,n,t,r,l){var o=at(t)?La:jn.current;return o=Nl(n,o),Sl(n,l),t=Zh(e,n,t,r,o,l),r=qh(),e!==null&&!tt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,gr(e,n,l)):(en&&r&&Oh(n),n.flags|=1,Hn(e,n,t,l),n.child)}function c2(e,n,t,r,l){if(at(t)){var o=!0;Ws(n)}else o=!1;if(Sl(n,l),n.stateNode===null)gs(e,n),E5(n,t,r),Ru(n,t,r,l),r=!0;else if(e===null){var i=n.stateNode,s=n.memoizedProps;i.props=s;var u=i.context,p=t.contextType;typeof p=="object"&&p!==null?p=Tt(p):(p=at(t)?La:jn.current,p=Nl(n,p));var g=t.getDerivedStateFromProps,y=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||u!==p)&&e2(n,i,r,p),Er=!1;var C=n.memoizedState;i.state=C,Ys(n,r,i,l),u=n.memoizedState,s!==r||C!==u||rt.current||Er?(typeof g=="function"&&(Pu(n,t,g,r),u=n.memoizedState),(s=Er||Jf(n,t,s,r,C,u,p))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),i.props=r,i.state=u,i.context=p,r=s):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,N5(e,n),s=n.memoizedProps,p=n.type===n.elementType?s:Rt(n.type,s),i.props=p,y=n.pendingProps,C=i.context,u=t.contextType,typeof u=="object"&&u!==null?u=Tt(u):(u=at(t)?La:jn.current,u=Nl(n,u));var I=t.getDerivedStateFromProps;(g=typeof I=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==y||C!==u)&&e2(n,i,r,u),Er=!1,C=n.memoizedState,i.state=C,Ys(n,r,i,l);var E=n.memoizedState;s!==y||C!==E||rt.current||Er?(typeof I=="function"&&(Pu(n,t,I,r),E=n.memoizedState),(p=Er||Jf(n,t,p,r,C,E,u)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,E,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,E,u)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=E),i.props=r,i.state=E,i.context=u,r=p):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&C===e.memoizedState||(n.flags|=1024),r=!1)}return Fu(e,n,t,r,o,l)}function Fu(e,n,t,r,l,o){rm(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return l&&Zf(n,t,!1),gr(e,n,o);r=n.stateNode,v9.current=n;var s=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=El(n,e.child,null,o),n.child=El(n,null,s,o)):Hn(e,n,s,o),n.memoizedState=r.state,l&&Zf(n,t,!0),n.child}function am(e){var n=e.stateNode;n.pendingContext?Yf(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Yf(e,n.context,!1),Uh(e,n.containerInfo)}function d2(e,n,t,r,l){return $l(),Bh(l),n.flags|=256,Hn(e,n,t,r),n.child}var Bu={dehydrated:null,treeContext:null,retryLane:0};function Du(e){return{baseLanes:e,cachePool:null,transitions:null}}function lm(e,n,t){var r=n.pendingProps,l=tn.current,o=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Ge(tn,l&1),e===null)return Iu(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Tc(i,r,0,null),e=Ta(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Du(t),n.memoizedState=Bu,e):Xh(n,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return b9(e,n,i,r,s,l,t);if(o){o=r.fallback,i=n.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=Ur(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=Ur(s,o):(o=Ta(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?Du(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=Bu,r}return o=e.child,e=o.sibling,r=Ur(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Xh(e,n){return n=Tc({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ki(e,n,t,r){return r!==null&&Bh(r),El(n,e.child,null,t),e=Xh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function b9(e,n,t,r,l,o,i){if(t)return n.flags&256?(n.flags&=-257,r=Fd(Error(Y(422))),Ki(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,l=n.mode,r=Tc({mode:"visible",children:r.children},l,0,null),o=Ta(o,l,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&El(n,e.child,null,i),n.child.memoizedState=Du(i),n.memoizedState=Bu,o);if(!(n.mode&1))return Ki(e,n,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(Y(419)),r=Fd(o,r,void 0),Ki(e,n,i,r)}if(s=(i&e.childLanes)!==0,tt||s){if(r=kn,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,mr(e,l),zt(r,e,l,-1))}return ap(),r=Fd(Error(Y(421))),Ki(e,n,i,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=I9.bind(null,e),l._reactRetry=n,null):(e=o.treeContext,ft=jr(l.nextSibling),mt=n,en=!0,Ft=null,e!==null&&(xt[Ct++]=cr,xt[Ct++]=dr,xt[Ct++]=_a,cr=e.id,dr=e.overflow,_a=n),n=Xh(n,r.children),n.flags|=4096,n)}function u2(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Mu(e.return,n,t)}function Bd(e,n,t,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=l)}function om(e,n,t){var r=n.pendingProps,l=r.revealOrder,o=r.tail;if(Hn(e,n,r.children,t),r=tn.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&u2(e,t,n);else if(e.tag===19)u2(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ge(tn,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Zs(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Bd(n,!1,l,t,o);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Zs(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Bd(n,!0,t,null,o);break;case"together":Bd(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function gs(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function gr(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),$a|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(Y(153));if(n.child!==null){for(e=n.child,t=Ur(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Ur(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function y9(e,n,t){switch(n.tag){case 3:am(n),$l();break;case 5:P5(n);break;case 1:at(n.type)&&Ws(n);break;case 4:Uh(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;Ge(Vs,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(Ge(tn,tn.current&1),n.flags|=128,null):t&n.child.childLanes?lm(e,n,t):(Ge(tn,tn.current&1),e=gr(e,n,t),e!==null?e.sibling:null);Ge(tn,tn.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return om(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ge(tn,tn.current),r)break;return null;case 22:case 23:return n.lanes=0,tm(e,n,t)}return gr(e,n,t)}var im,ju,sm,cm;im=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ju=function(){};sm=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,wa(Qt.current);var o=null;switch(t){case"input":l=su(e,l),r=su(e,r),o=[];break;case"select":l=an({},l,{value:void 0}),r=an({},r,{value:void 0}),o=[];break;case"textarea":l=uu(e,l),r=uu(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=js)}pu(t,r);var i;t=null;for(p in l)if(!r.hasOwnProperty(p)&&l.hasOwnProperty(p)&&l[p]!=null)if(p==="style"){var s=l[p];for(i in s)s.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Wo.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in r){var u=r[p];if(s=l!=null?l[p]:void 0,r.hasOwnProperty(p)&&u!==s&&(u!=null||s!=null))if(p==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(t||(t={}),t[i]=u[i])}else t||(o||(o=[]),o.push(p,t)),t=u;else p==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(p,u)):p==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(p,""+u):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Wo.hasOwnProperty(p)?(u!=null&&p==="onScroll"&&Qe("scroll",e),o||s===u||(o=[])):(o=o||[]).push(p,u))}t&&(o=o||[]).push("style",t);var p=o;(n.updateQueue=p)&&(n.flags|=4)}};cm=function(e,n,t,r){t!==r&&(n.flags|=4)};function fo(e,n){if(!en)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Bn(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function w9(e,n,t){var r=n.pendingProps;switch(Fh(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bn(n),null;case 1:return at(n.type)&&zs(),Bn(n),null;case 3:return r=n.stateNode,Il(),Je(rt),Je(jn),Gh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ft!==null&&(Zu(Ft),Ft=null))),ju(e,n),Bn(n),null;case 5:Vh(n);var l=wa(ei.current);if(t=n.type,e!==null&&n.stateNode!=null)sm(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(Y(166));return Bn(n),null}if(e=wa(Qt.current),Zi(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[qt]=n,r[Xo]=o,e=(n.mode&1)!==0,t){case"dialog":Qe("cancel",r),Qe("close",r);break;case"iframe":case"object":case"embed":Qe("load",r);break;case"video":case"audio":for(l=0;l<Co.length;l++)Qe(Co[l],r);break;case"source":Qe("error",r);break;case"img":case"image":case"link":Qe("error",r),Qe("load",r);break;case"details":Qe("toggle",r);break;case"input":wf(r,o),Qe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Qe("invalid",r);break;case"textarea":Cf(r,o),Qe("invalid",r)}pu(t,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Yi(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Yi(r.textContent,s,e),l=["children",""+s]):Wo.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Qe("scroll",r)}switch(t){case"input":Di(r),xf(r,o,!0);break;case"textarea":Di(r),Sf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=js)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=O3(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[qt]=n,e[Xo]=r,im(e,n,!1,!1),n.stateNode=e;e:{switch(i=fu(t,r),t){case"dialog":Qe("cancel",e),Qe("close",e),l=r;break;case"iframe":case"object":case"embed":Qe("load",e),l=r;break;case"video":case"audio":for(l=0;l<Co.length;l++)Qe(Co[l],e);l=r;break;case"source":Qe("error",e),l=r;break;case"img":case"image":case"link":Qe("error",e),Qe("load",e),l=r;break;case"details":Qe("toggle",e),l=r;break;case"input":wf(e,r),l=su(e,r),Qe("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=an({},r,{value:void 0}),Qe("invalid",e);break;case"textarea":Cf(e,r),l=uu(e,r),Qe("invalid",e);break;default:l=r}pu(t,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?D3(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&F3(e,u)):o==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Ho(e,u):typeof u=="number"&&Ho(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Wo.hasOwnProperty(o)?u!=null&&o==="onScroll"&&Qe("scroll",e):u!=null&&Ch(e,o,u,i))}switch(t){case"input":Di(e),xf(e,r,!1);break;case"textarea":Di(e),Sf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?yl(e,!!r.multiple,o,!1):r.defaultValue!=null&&yl(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=js)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Bn(n),null;case 6:if(e&&n.stateNode!=null)cm(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(Y(166));if(t=wa(ei.current),wa(Qt.current),Zi(n)){if(r=n.stateNode,t=n.memoizedProps,r[qt]=n,(o=r.nodeValue!==t)&&(e=mt,e!==null))switch(e.tag){case 3:Yi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yi(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[qt]=n,n.stateNode=r}return Bn(n),null;case 13:if(Je(tn),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(en&&ft!==null&&n.mode&1&&!(n.flags&128))L5(),$l(),n.flags|=98560,o=!1;else if(o=Zi(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(Y(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Y(317));o[qt]=n}else $l(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Bn(n),o=!1}else Ft!==null&&(Zu(Ft),Ft=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||tn.current&1?yn===0&&(yn=3):ap())),n.updateQueue!==null&&(n.flags|=4),Bn(n),null);case 4:return Il(),ju(e,n),e===null&&Ko(n.stateNode.containerInfo),Bn(n),null;case 10:return zh(n.type._context),Bn(n),null;case 17:return at(n.type)&&zs(),Bn(n),null;case 19:if(Je(tn),o=n.memoizedState,o===null)return Bn(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)fo(o,!1);else{if(yn!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Zs(e),i!==null){for(n.flags|=128,fo(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Ge(tn,tn.current&1|2),n.child}e=e.sibling}o.tail!==null&&sn()>Pl&&(n.flags|=128,r=!0,fo(o,!1),n.lanes=4194304)}else{if(!r)if(e=Zs(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),fo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!en)return Bn(n),null}else 2*sn()-o.renderingStartTime>Pl&&t!==1073741824&&(n.flags|=128,r=!0,fo(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=sn(),n.sibling=null,t=tn.current,Ge(tn,r?t&1|2:t&1),n):(Bn(n),null);case 22:case 23:return rp(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ct&1073741824&&(Bn(n),n.subtreeFlags&6&&(n.flags|=8192)):Bn(n),null;case 24:return null;case 25:return null}throw Error(Y(156,n.tag))}function x9(e,n){switch(Fh(n),n.tag){case 1:return at(n.type)&&zs(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Il(),Je(rt),Je(jn),Gh(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Vh(n),null;case 13:if(Je(tn),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(Y(340));$l()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Je(tn),null;case 4:return Il(),null;case 10:return zh(n.type._context),null;case 22:case 23:return rp(),null;case 24:return null;default:return null}}var Qi=!1,Dn=!1,C9=typeof WeakSet=="function"?WeakSet:Set,ne=null;function fl(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){on(e,n,r)}else t.current=null}function zu(e,n,t){try{t()}catch(r){on(e,n,r)}}var h2=!1;function S9(e,n){if(ku=Fs,e=p5(),Ah(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,s=-1,u=-1,p=0,g=0,y=e,C=null;n:for(;;){for(var I;y!==t||l!==0&&y.nodeType!==3||(s=i+l),y!==o||r!==0&&y.nodeType!==3||(u=i+r),y.nodeType===3&&(i+=y.nodeValue.length),(I=y.firstChild)!==null;)C=y,y=I;for(;;){if(y===e)break n;if(C===t&&++p===l&&(s=i),C===o&&++g===r&&(u=i),(I=y.nextSibling)!==null)break;y=C,C=y.parentNode}y=I}t=s===-1||u===-1?null:{start:s,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Tu={focusedElem:e,selectionRange:t},Fs=!1,ne=n;ne!==null;)if(n=ne,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ne=e;else for(;ne!==null;){n=ne;try{var E=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var S=E.memoizedProps,M=E.memoizedState,w=n.stateNode,m=w.getSnapshotBeforeUpdate(n.elementType===n.type?S:Rt(n.type,S),M);w.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var b=n.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(v){on(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,ne=e;break}ne=n.return}return E=h2,h2=!1,E}function Ao(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&zu(n,t,o)}l=l.next}while(l!==r)}}function Sc(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Wu(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function dm(e){var n=e.alternate;n!==null&&(e.alternate=null,dm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[qt],delete n[Xo],delete n[Nu],delete n[l9],delete n[o9])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function um(e){return e.tag===5||e.tag===3||e.tag===4}function p2(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||um(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=js));else if(r!==4&&(e=e.child,e!==null))for(Hu(e,n,t),e=e.sibling;e!==null;)Hu(e,n,t),e=e.sibling}function Uu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Uu(e,n,t),e=e.sibling;e!==null;)Uu(e,n,t),e=e.sibling}var _n=null,Ot=!1;function Lr(e,n,t){for(t=t.child;t!==null;)hm(e,n,t),t=t.sibling}function hm(e,n,t){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(mc,t)}catch{}switch(t.tag){case 5:Dn||fl(t,n);case 6:var r=_n,l=Ot;_n=null,Lr(e,n,t),_n=r,Ot=l,_n!==null&&(Ot?(e=_n,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):_n.removeChild(t.stateNode));break;case 18:_n!==null&&(Ot?(e=_n,t=t.stateNode,e.nodeType===8?Id(e.parentNode,t):e.nodeType===1&&Id(e,t),Yo(e)):Id(_n,t.stateNode));break;case 4:r=_n,l=Ot,_n=t.stateNode.containerInfo,Ot=!0,Lr(e,n,t),_n=r,Ot=l;break;case 0:case 11:case 14:case 15:if(!Dn&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&zu(t,n,i),l=l.next}while(l!==r)}Lr(e,n,t);break;case 1:if(!Dn&&(fl(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){on(t,n,s)}Lr(e,n,t);break;case 21:Lr(e,n,t);break;case 22:t.mode&1?(Dn=(r=Dn)||t.memoizedState!==null,Lr(e,n,t),Dn=r):Lr(e,n,t);break;default:Lr(e,n,t)}}function f2(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new C9),n.forEach(function(r){var l=M9.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Mt(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var o=e,i=n,s=i;e:for(;s!==null;){switch(s.tag){case 5:_n=s.stateNode,Ot=!1;break e;case 3:_n=s.stateNode.containerInfo,Ot=!0;break e;case 4:_n=s.stateNode.containerInfo,Ot=!0;break e}s=s.return}if(_n===null)throw Error(Y(160));hm(o,i,l),_n=null,Ot=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(p){on(l,n,p)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)pm(n,e),n=n.sibling}function pm(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(n,e),Ht(e),r&4){try{Ao(3,e,e.return),Sc(3,e)}catch(S){on(e,e.return,S)}try{Ao(5,e,e.return)}catch(S){on(e,e.return,S)}}break;case 1:Mt(n,e),Ht(e),r&512&&t!==null&&fl(t,t.return);break;case 5:if(Mt(n,e),Ht(e),r&512&&t!==null&&fl(t,t.return),e.flags&32){var l=e.stateNode;try{Ho(l,"")}catch(S){on(e,e.return,S)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&R3(l,o),fu(s,i);var p=fu(s,o);for(i=0;i<u.length;i+=2){var g=u[i],y=u[i+1];g==="style"?D3(l,y):g==="dangerouslySetInnerHTML"?F3(l,y):g==="children"?Ho(l,y):Ch(l,g,y,p)}switch(s){case"input":cu(l,o);break;case"textarea":A3(l,o);break;case"select":var C=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var I=o.value;I!=null?yl(l,!!o.multiple,I,!1):C!==!!o.multiple&&(o.defaultValue!=null?yl(l,!!o.multiple,o.defaultValue,!0):yl(l,!!o.multiple,o.multiple?[]:"",!1))}l[Xo]=o}catch(S){on(e,e.return,S)}}break;case 6:if(Mt(n,e),Ht(e),r&4){if(e.stateNode===null)throw Error(Y(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(S){on(e,e.return,S)}}break;case 3:if(Mt(n,e),Ht(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Yo(n.containerInfo)}catch(S){on(e,e.return,S)}break;case 4:Mt(n,e),Ht(e);break;case 13:Mt(n,e),Ht(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(np=sn())),r&4&&f2(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(Dn=(p=Dn)||g,Mt(n,e),Dn=p):Mt(n,e),Ht(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!g&&e.mode&1)for(ne=e,g=e.child;g!==null;){for(y=ne=g;ne!==null;){switch(C=ne,I=C.child,C.tag){case 0:case 11:case 14:case 15:Ao(4,C,C.return);break;case 1:fl(C,C.return);var E=C.stateNode;if(typeof E.componentWillUnmount=="function"){r=C,t=C.return;try{n=r,E.props=n.memoizedProps,E.state=n.memoizedState,E.componentWillUnmount()}catch(S){on(r,t,S)}}break;case 5:fl(C,C.return);break;case 22:if(C.memoizedState!==null){g2(y);continue}}I!==null?(I.return=C,ne=I):g2(y)}g=g.sibling}e:for(g=null,y=e;;){if(y.tag===5){if(g===null){g=y;try{l=y.stateNode,p?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=y.stateNode,u=y.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=B3("display",i))}catch(S){on(e,e.return,S)}}}else if(y.tag===6){if(g===null)try{y.stateNode.nodeValue=p?"":y.memoizedProps}catch(S){on(e,e.return,S)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;g===y&&(g=null),y=y.return}g===y&&(g=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Mt(n,e),Ht(e),r&4&&f2(e);break;case 21:break;default:Mt(n,e),Ht(e)}}function Ht(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(um(t)){var r=t;break e}t=t.return}throw Error(Y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Ho(l,""),r.flags&=-33);var o=p2(e);Uu(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=p2(e);Hu(e,s,i);break;default:throw Error(Y(161))}}catch(u){on(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function k9(e,n,t){ne=e,fm(e)}function fm(e,n,t){for(var r=(e.mode&1)!==0;ne!==null;){var l=ne,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Qi;if(!i){var s=l.alternate,u=s!==null&&s.memoizedState!==null||Dn;s=Qi;var p=Dn;if(Qi=i,(Dn=u)&&!p)for(ne=l;ne!==null;)i=ne,u=i.child,i.tag===22&&i.memoizedState!==null?v2(l):u!==null?(u.return=i,ne=u):v2(l);for(;o!==null;)ne=o,fm(o),o=o.sibling;ne=l,Qi=s,Dn=p}m2(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,ne=o):m2(e)}}function m2(e){for(;ne!==null;){var n=ne;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Dn||Sc(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Dn)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Rt(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Xf(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Xf(n,i,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var p=n.alternate;if(p!==null){var g=p.memoizedState;if(g!==null){var y=g.dehydrated;y!==null&&Yo(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}Dn||n.flags&512&&Wu(n)}catch(C){on(n,n.return,C)}}if(n===e){ne=null;break}if(t=n.sibling,t!==null){t.return=n.return,ne=t;break}ne=n.return}}function g2(e){for(;ne!==null;){var n=ne;if(n===e){ne=null;break}var t=n.sibling;if(t!==null){t.return=n.return,ne=t;break}ne=n.return}}function v2(e){for(;ne!==null;){var n=ne;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Sc(4,n)}catch(u){on(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(u){on(n,l,u)}}var o=n.return;try{Wu(n)}catch(u){on(n,o,u)}break;case 5:var i=n.return;try{Wu(n)}catch(u){on(n,i,u)}}}catch(u){on(n,n.return,u)}if(n===e){ne=null;break}var s=n.sibling;if(s!==null){s.return=n.return,ne=s;break}ne=n.return}}var T9=Math.ceil,Qs=yr.ReactCurrentDispatcher,Jh=yr.ReactCurrentOwner,kt=yr.ReactCurrentBatchConfig,Me=0,kn=null,hn=null,Mn=0,ct=0,ml=Kr(0),yn=0,ai=null,$a=0,kc=0,ep=0,Oo=null,nt=null,np=0,Pl=1/0,or=null,Xs=!1,Vu=null,Wr=null,Xi=!1,Rr=null,Js=0,Fo=0,Gu=null,vs=-1,bs=0;function Vn(){return Me&6?sn():vs!==-1?vs:vs=sn()}function Hr(e){return e.mode&1?Me&2&&Mn!==0?Mn&-Mn:s9.transition!==null?(bs===0&&(bs=Q3()),bs):(e=De,e!==0||(e=window.event,e=e===void 0?16:a5(e.type)),e):1}function zt(e,n,t,r){if(50<Fo)throw Fo=0,Gu=null,Error(Y(185));pi(e,t,r),(!(Me&2)||e!==kn)&&(e===kn&&(!(Me&2)&&(kc|=t),yn===4&&Mr(e,Mn)),lt(e,r),t===1&&Me===0&&!(n.mode&1)&&(Pl=sn()+500,wc&&Qr()))}function lt(e,n){var t=e.callbackNode;s7(e,n);var r=Os(e,e===kn?Mn:0);if(r===0)t!==null&&Lf(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Lf(t),n===1)e.tag===0?i9(b2.bind(null,e)):S5(b2.bind(null,e)),r9(function(){!(Me&6)&&Qr()}),t=null;else{switch(X3(r)){case 1:t=_h;break;case 4:t=q3;break;case 16:t=As;break;case 536870912:t=K3;break;default:t=As}t=Cm(t,mm.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function mm(e,n){if(vs=-1,bs=0,Me&6)throw Error(Y(327));var t=e.callbackNode;if(kl()&&e.callbackNode!==t)return null;var r=Os(e,e===kn?Mn:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ec(e,r);else{n=r;var l=Me;Me|=2;var o=vm();(kn!==e||Mn!==n)&&(or=null,Pl=sn()+500,ka(e,n));do try{N9();break}catch(s){gm(e,s)}while(1);jh(),Qs.current=o,Me=l,hn!==null?n=0:(kn=null,Mn=0,n=yn)}if(n!==0){if(n===2&&(l=yu(e),l!==0&&(r=l,n=Yu(e,l))),n===1)throw t=ai,ka(e,0),Mr(e,r),lt(e,sn()),t;if(n===6)Mr(e,r);else{if(l=e.current.alternate,!(r&30)&&!L9(l)&&(n=ec(e,r),n===2&&(o=yu(e),o!==0&&(r=o,n=Yu(e,o))),n===1))throw t=ai,ka(e,0),Mr(e,r),lt(e,sn()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(Y(345));case 2:fa(e,nt,or);break;case 3:if(Mr(e,r),(r&130023424)===r&&(n=np+500-sn(),10<n)){if(Os(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Vn(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=_u(fa.bind(null,e,nt,or),n);break}fa(e,nt,or);break;case 4:if(Mr(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var i=31-jt(r);o=1<<i,i=n[i],i>l&&(l=i),r&=~o}if(r=l,r=sn()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*T9(r/1960))-r,10<r){e.timeoutHandle=_u(fa.bind(null,e,nt,or),r);break}fa(e,nt,or);break;case 5:fa(e,nt,or);break;default:throw Error(Y(329))}}}return lt(e,sn()),e.callbackNode===t?mm.bind(null,e):null}function Yu(e,n){var t=Oo;return e.current.memoizedState.isDehydrated&&(ka(e,n).flags|=256),e=ec(e,n),e!==2&&(n=nt,nt=t,n!==null&&Zu(n)),e}function Zu(e){nt===null?nt=e:nt.push.apply(nt,e)}function L9(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],o=l.getSnapshot;l=l.value;try{if(!Wt(o(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Mr(e,n){for(n&=~ep,n&=~kc,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-jt(n),r=1<<t;e[t]=-1,n&=~r}}function b2(e){if(Me&6)throw Error(Y(327));kl();var n=Os(e,0);if(!(n&1))return lt(e,sn()),null;var t=ec(e,n);if(e.tag!==0&&t===2){var r=yu(e);r!==0&&(n=r,t=Yu(e,r))}if(t===1)throw t=ai,ka(e,0),Mr(e,n),lt(e,sn()),t;if(t===6)throw Error(Y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,fa(e,nt,or),lt(e,sn()),null}function tp(e,n){var t=Me;Me|=1;try{return e(n)}finally{Me=t,Me===0&&(Pl=sn()+500,wc&&Qr())}}function Ea(e){Rr!==null&&Rr.tag===0&&!(Me&6)&&kl();var n=Me;Me|=1;var t=kt.transition,r=De;try{if(kt.transition=null,De=1,e)return e()}finally{De=r,kt.transition=t,Me=n,!(Me&6)&&Qr()}}function rp(){ct=ml.current,Je(ml)}function ka(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,t9(t)),hn!==null)for(t=hn.return;t!==null;){var r=t;switch(Fh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zs();break;case 3:Il(),Je(rt),Je(jn),Gh();break;case 5:Vh(r);break;case 4:Il();break;case 13:Je(tn);break;case 19:Je(tn);break;case 10:zh(r.type._context);break;case 22:case 23:rp()}t=t.return}if(kn=e,hn=e=Ur(e.current,null),Mn=ct=n,yn=0,ai=null,ep=kc=$a=0,nt=Oo=null,ya!==null){for(n=0;n<ya.length;n++)if(t=ya[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}t.pending=r}ya=null}return e}function gm(e,n){do{var t=hn;try{if(jh(),fs.current=Ks,qs){for(var r=rn.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}qs=!1}if(Na=0,Sn=bn=rn=null,Ro=!1,ni=0,Jh.current=null,t===null||t.return===null){yn=1,ai=n,hn=null;break}e:{var o=e,i=t.return,s=t,u=n;if(n=Mn,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=u,g=s,y=g.tag;if(!(g.mode&1)&&(y===0||y===11||y===15)){var C=g.alternate;C?(g.updateQueue=C.updateQueue,g.memoizedState=C.memoizedState,g.lanes=C.lanes):(g.updateQueue=null,g.memoizedState=null)}var I=l2(i);if(I!==null){I.flags&=-257,o2(I,i,s,o,n),I.mode&1&&a2(o,p,n),n=I,u=p;var E=n.updateQueue;if(E===null){var S=new Set;S.add(u),n.updateQueue=S}else E.add(u);break e}else{if(!(n&1)){a2(o,p,n),ap();break e}u=Error(Y(426))}}else if(en&&s.mode&1){var M=l2(i);if(M!==null){!(M.flags&65536)&&(M.flags|=256),o2(M,i,s,o,n),Bh(Ml(u,s));break e}}o=u=Ml(u,s),yn!==4&&(yn=2),Oo===null?Oo=[o]:Oo.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var w=J5(o,u,n);Qf(o,w);break e;case 1:s=u;var m=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Wr===null||!Wr.has(b)))){o.flags|=65536,n&=-n,o.lanes|=n;var v=em(o,s,n);Qf(o,v);break e}}o=o.return}while(o!==null)}ym(t)}catch(_){n=_,hn===t&&t!==null&&(hn=t=t.return);continue}break}while(1)}function vm(){var e=Qs.current;return Qs.current=Ks,e===null?Ks:e}function ap(){(yn===0||yn===3||yn===2)&&(yn=4),kn===null||!($a&268435455)&&!(kc&268435455)||Mr(kn,Mn)}function ec(e,n){var t=Me;Me|=2;var r=vm();(kn!==e||Mn!==n)&&(or=null,ka(e,n));do try{_9();break}catch(l){gm(e,l)}while(1);if(jh(),Me=t,Qs.current=r,hn!==null)throw Error(Y(261));return kn=null,Mn=0,yn}function _9(){for(;hn!==null;)bm(hn)}function N9(){for(;hn!==null&&!Jb();)bm(hn)}function bm(e){var n=xm(e.alternate,e,ct);e.memoizedProps=e.pendingProps,n===null?ym(e):hn=n,Jh.current=null}function ym(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=x9(t,n),t!==null){t.flags&=32767,hn=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{yn=6,hn=null;return}}else if(t=w9(t,n,ct),t!==null){hn=t;return}if(n=n.sibling,n!==null){hn=n;return}hn=n=e}while(n!==null);yn===0&&(yn=5)}function fa(e,n,t){var r=De,l=kt.transition;try{kt.transition=null,De=1,$9(e,n,t,r)}finally{kt.transition=l,De=r}return null}function $9(e,n,t,r){do kl();while(Rr!==null);if(Me&6)throw Error(Y(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(Y(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(c7(e,o),e===kn&&(hn=kn=null,Mn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Xi||(Xi=!0,Cm(As,function(){return kl(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=kt.transition,kt.transition=null;var i=De;De=1;var s=Me;Me|=4,Jh.current=null,S9(e,t),pm(t,e),q7(Tu),Fs=!!ku,Tu=ku=null,e.current=t,k9(t),e7(),Me=s,De=i,kt.transition=o}else e.current=t;if(Xi&&(Xi=!1,Rr=e,Js=l),o=e.pendingLanes,o===0&&(Wr=null),r7(t.stateNode),lt(e,sn()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Xs)throw Xs=!1,e=Vu,Vu=null,e;return Js&1&&e.tag!==0&&kl(),o=e.pendingLanes,o&1?e===Gu?Fo++:(Fo=0,Gu=e):Fo=0,Qr(),null}function kl(){if(Rr!==null){var e=X3(Js),n=kt.transition,t=De;try{if(kt.transition=null,De=16>e?16:e,Rr===null)var r=!1;else{if(e=Rr,Rr=null,Js=0,Me&6)throw Error(Y(331));var l=Me;for(Me|=4,ne=e.current;ne!==null;){var o=ne,i=o.child;if(ne.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var p=s[u];for(ne=p;ne!==null;){var g=ne;switch(g.tag){case 0:case 11:case 15:Ao(8,g,o)}var y=g.child;if(y!==null)y.return=g,ne=y;else for(;ne!==null;){g=ne;var C=g.sibling,I=g.return;if(dm(g),g===p){ne=null;break}if(C!==null){C.return=I,ne=C;break}ne=I}}}var E=o.alternate;if(E!==null){var S=E.child;if(S!==null){E.child=null;do{var M=S.sibling;S.sibling=null,S=M}while(S!==null)}}ne=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,ne=i;else e:for(;ne!==null;){if(o=ne,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ao(9,o,o.return)}var w=o.sibling;if(w!==null){w.return=o.return,ne=w;break e}ne=o.return}}var m=e.current;for(ne=m;ne!==null;){i=ne;var b=i.child;if(i.subtreeFlags&2064&&b!==null)b.return=i,ne=b;else e:for(i=m;ne!==null;){if(s=ne,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Sc(9,s)}}catch(_){on(s,s.return,_)}if(s===i){ne=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,ne=v;break e}ne=s.return}}if(Me=l,Qr(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(mc,e)}catch{}r=!0}return r}finally{De=t,kt.transition=n}}return!1}function y2(e,n,t){n=Ml(t,n),n=J5(e,n,1),e=zr(e,n,1),n=Vn(),e!==null&&(pi(e,1,n),lt(e,n))}function on(e,n,t){if(e.tag===3)y2(e,e,t);else for(;n!==null;){if(n.tag===3){y2(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wr===null||!Wr.has(r))){e=Ml(t,e),e=em(n,e,1),n=zr(n,e,1),e=Vn(),n!==null&&(pi(n,1,e),lt(n,e));break}}n=n.return}}function E9(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Vn(),e.pingedLanes|=e.suspendedLanes&t,kn===e&&(Mn&t)===t&&(yn===4||yn===3&&(Mn&130023424)===Mn&&500>sn()-np?ka(e,0):ep|=t),lt(e,n)}function wm(e,n){n===0&&(e.mode&1?(n=Wi,Wi<<=1,!(Wi&130023424)&&(Wi=4194304)):n=1);var t=Vn();e=mr(e,n),e!==null&&(pi(e,n,t),lt(e,t))}function I9(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),wm(e,t)}function M9(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Y(314))}r!==null&&r.delete(n),wm(e,t)}var xm;xm=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||rt.current)tt=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return tt=!1,y9(e,n,t);tt=!!(e.flags&131072)}else tt=!1,en&&n.flags&1048576&&k5(n,Us,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;gs(e,n),e=n.pendingProps;var l=Nl(n,jn.current);Sl(n,t),l=Zh(null,n,r,e,l,t);var o=qh();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,at(r)?(o=!0,Ws(n)):o=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Hh(n),l.updater=xc,n.stateNode=l,l._reactInternals=n,Ru(n,r,e,t),n=Fu(null,n,r,!0,o,t)):(n.tag=0,en&&o&&Oh(n),Hn(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(gs(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=R9(r),e=Rt(r,e),l){case 0:n=Ou(null,n,r,e,t);break e;case 1:n=c2(null,n,r,e,t);break e;case 11:n=i2(null,n,r,e,t);break e;case 14:n=s2(null,n,r,Rt(r.type,e),t);break e}throw Error(Y(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Rt(r,l),Ou(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Rt(r,l),c2(e,n,r,l,t);case 3:e:{if(am(n),e===null)throw Error(Y(387));r=n.pendingProps,o=n.memoizedState,l=o.element,N5(e,n),Ys(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){l=Ml(Error(Y(423)),n),n=d2(e,n,r,t,l);break e}else if(r!==l){l=Ml(Error(Y(424)),n),n=d2(e,n,r,t,l);break e}else for(ft=jr(n.stateNode.containerInfo.firstChild),mt=n,en=!0,Ft=null,t=M5(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if($l(),r===l){n=gr(e,n,t);break e}Hn(e,n,r,t)}n=n.child}return n;case 5:return P5(n),e===null&&Iu(n),r=n.type,l=n.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Lu(r,l)?i=null:o!==null&&Lu(r,o)&&(n.flags|=32),rm(e,n),Hn(e,n,i,t),n.child;case 6:return e===null&&Iu(n),null;case 13:return lm(e,n,t);case 4:return Uh(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=El(n,null,r,t):Hn(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Rt(r,l),i2(e,n,r,l,t);case 7:return Hn(e,n,n.pendingProps,t),n.child;case 8:return Hn(e,n,n.pendingProps.children,t),n.child;case 12:return Hn(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,o=n.memoizedProps,i=l.value,Ge(Vs,r._currentValue),r._currentValue=i,o!==null)if(Wt(o.value,i)){if(o.children===l.children&&!rt.current){n=gr(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=ur(-1,t&-t),u.tag=2;var p=o.updateQueue;if(p!==null){p=p.shared;var g=p.pending;g===null?u.next=u:(u.next=g.next,g.next=u),p.pending=u}}o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Mu(o.return,t,n),s.lanes|=t;break}u=u.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(Y(341));i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Mu(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Hn(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Sl(n,t),l=Tt(l),r=r(l),n.flags|=1,Hn(e,n,r,t),n.child;case 14:return r=n.type,l=Rt(r,n.pendingProps),l=Rt(r.type,l),s2(e,n,r,l,t);case 15:return nm(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Rt(r,l),gs(e,n),n.tag=1,at(r)?(e=!0,Ws(n)):e=!1,Sl(n,t),E5(n,r,l),Ru(n,r,l,t),Fu(null,n,r,!0,e,t);case 19:return om(e,n,t);case 22:return tm(e,n,t)}throw Error(Y(156,n.tag))};function Cm(e,n){return Z3(e,n)}function P9(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,n,t,r){return new P9(e,n,t,r)}function lp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function R9(e){if(typeof e=="function")return lp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kh)return 11;if(e===Th)return 14}return 2}function Ur(e,n){var t=e.alternate;return t===null?(t=St(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ys(e,n,t,r,l,o){var i=2;if(r=e,typeof e=="function")lp(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case ll:return Ta(t.children,l,o,n);case Sh:i=8,l|=8;break;case au:return e=St(12,t,n,l|2),e.elementType=au,e.lanes=o,e;case lu:return e=St(13,t,n,l),e.elementType=lu,e.lanes=o,e;case ou:return e=St(19,t,n,l),e.elementType=ou,e.lanes=o,e;case I3:return Tc(t,l,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $3:i=10;break e;case E3:i=9;break e;case kh:i=11;break e;case Th:i=14;break e;case $r:i=16,r=null;break e}throw Error(Y(130,e==null?e:typeof e,""))}return n=St(i,t,n,l),n.elementType=e,n.type=r,n.lanes=o,n}function Ta(e,n,t,r){return e=St(7,e,r,n),e.lanes=t,e}function Tc(e,n,t,r){return e=St(22,e,r,n),e.elementType=I3,e.lanes=t,e.stateNode={isHidden:!1},e}function Dd(e,n,t){return e=St(6,e,null,n),e.lanes=t,e}function jd(e,n,t){return n=St(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function A9(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wd(0),this.expirationTimes=wd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wd(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function op(e,n,t,r,l,o,i,s,u){return e=new A9(e,n,t,s,u),n===1?(n=1,o===!0&&(n|=8)):n=0,o=St(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hh(o),e}function O9(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:al,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Sm(e){if(!e)return Gr;e=e._reactInternals;e:{if(Pa(e)!==e||e.tag!==1)throw Error(Y(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(at(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(Y(171))}if(e.tag===1){var t=e.type;if(at(t))return C5(e,t,n)}return n}function km(e,n,t,r,l,o,i,s,u){return e=op(t,r,!0,e,l,o,i,s,u),e.context=Sm(null),t=e.current,r=Vn(),l=Hr(t),o=ur(r,l),o.callback=n??null,zr(t,o,l),e.current.lanes=l,pi(e,l,r),lt(e,r),e}function Lc(e,n,t,r){var l=n.current,o=Vn(),i=Hr(l);return t=Sm(t),n.context===null?n.context=t:n.pendingContext=t,n=ur(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=zr(l,n,i),e!==null&&(zt(e,l,i,o),ps(e,l,i)),i}function nc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function w2(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ip(e,n){w2(e,n),(e=e.alternate)&&w2(e,n)}function F9(){return null}var Tm=typeof reportError=="function"?reportError:function(e){console.error(e)};function sp(e){this._internalRoot=e}_c.prototype.render=sp.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(Y(409));Lc(e,n,null,null)};_c.prototype.unmount=sp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ea(function(){Lc(null,e,null,null)}),n[fr]=null}};function _c(e){this._internalRoot=e}_c.prototype.unstable_scheduleHydration=function(e){if(e){var n=n5();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Ir.length&&n!==0&&n<Ir[t].priority;t++);Ir.splice(t,0,e),t===0&&r5(e)}};function cp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Nc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function x2(){}function B9(e,n,t,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var p=nc(i);o.call(p)}}var i=km(n,r,e,0,null,!1,!1,"",x2);return e._reactRootContainer=i,e[fr]=i.current,Ko(e.nodeType===8?e.parentNode:e),Ea(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var p=nc(u);s.call(p)}}var u=op(e,0,!1,null,null,!1,!1,"",x2);return e._reactRootContainer=u,e[fr]=u.current,Ko(e.nodeType===8?e.parentNode:e),Ea(function(){Lc(n,u,t,r)}),u}function $c(e,n,t,r,l){var o=t._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var u=nc(i);s.call(u)}}Lc(n,i,e,l)}else i=B9(t,n,e,l,r);return nc(i)}J3=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=xo(n.pendingLanes);t!==0&&(Nh(n,t|1),lt(n,sn()),!(Me&6)&&(Pl=sn()+500,Qr()))}break;case 13:Ea(function(){var r=mr(e,1);if(r!==null){var l=Vn();zt(r,e,1,l)}}),ip(e,1)}};$h=function(e){if(e.tag===13){var n=mr(e,134217728);if(n!==null){var t=Vn();zt(n,e,134217728,t)}ip(e,134217728)}};e5=function(e){if(e.tag===13){var n=Hr(e),t=mr(e,n);if(t!==null){var r=Vn();zt(t,e,n,r)}ip(e,n)}};n5=function(){return De};t5=function(e,n){var t=De;try{return De=e,n()}finally{De=t}};gu=function(e,n,t){switch(n){case"input":if(cu(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=yc(r);if(!l)throw Error(Y(90));P3(r),cu(r,l)}}}break;case"textarea":A3(e,t);break;case"select":n=t.value,n!=null&&yl(e,!!t.multiple,n,!1)}};W3=tp;H3=Ea;var D9={usingClientEntryPoint:!1,Events:[mi,cl,yc,j3,z3,tp]},mo={findFiberByHostInstance:ba,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},j9={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=G3(e),e===null?null:e.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||F9,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ji.isDisabled&&Ji.supportsFiber)try{mc=Ji.inject(j9),Kt=Ji}catch{}}vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D9;vt.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cp(n))throw Error(Y(200));return O9(e,n,null,t)};vt.createRoot=function(e,n){if(!cp(e))throw Error(Y(299));var t=!1,r="",l=Tm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=op(e,1,!1,null,null,t,!1,r,l),e[fr]=n.current,Ko(e.nodeType===8?e.parentNode:e),new sp(n)};vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=G3(n),e=e===null?null:e.stateNode,e};vt.flushSync=function(e){return Ea(e)};vt.hydrate=function(e,n,t){if(!Nc(n))throw Error(Y(200));return $c(null,e,n,!0,t)};vt.hydrateRoot=function(e,n,t){if(!cp(e))throw Error(Y(405));var r=t!=null&&t.hydratedSources||null,l=!1,o="",i=Tm;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=km(n,null,e,1,t??null,l,!1,o,i),e[fr]=n.current,Ko(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new _c(n)};vt.render=function(e,n,t){if(!Nc(n))throw Error(Y(200));return $c(null,e,n,!1,t)};vt.unmountComponentAtNode=function(e){if(!Nc(e))throw Error(Y(40));return e._reactRootContainer?(Ea(function(){$c(null,null,e,!1,function(){e._reactRootContainer=null,e[fr]=null})}),!0):!1};vt.unstable_batchedUpdates=tp;vt.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Nc(t))throw Error(Y(200));if(e==null||e._reactInternals===void 0)throw Error(Y(38));return $c(e,n,t,!1,r)};vt.version="18.2.0-next-9e3b772b8-20220608";function Lm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lm)}catch(e){console.error(e)}}Lm(),k3.exports=vt;var _m=k3.exports,C2=_m;tu.createRoot=C2.createRoot,tu.hydrateRoot=C2.hydrateRoot;function z9(e,n){if(e==null)return{};var t={},r=Object.keys(e),l,o;for(o=0;o<r.length;o++)l=r[o],!(n.indexOf(l)>=0)&&(t[l]=e[l]);return t}function W9(e,n){if(e==null)return{};var t=z9(e,n),r,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)r=o[l],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function qu(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function H9(e){if(Array.isArray(e))return qu(e)}function U9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function V9(e,n){if(e){if(typeof e=="string")return qu(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return qu(e,n)}}function G9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y9(e){return H9(e)||U9(e)||V9(e)||G9()}function li(e){"@babel/helpers - typeof";return li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},li(e)}function Z9(e,n){if(li(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(li(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function q9(e){var n=Z9(e,"string");return li(n)==="symbol"?n:String(n)}function Nm(e,n,t){return n=q9(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Ku(){return Ku=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ku.apply(this,arguments)}function S2(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function gl(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?S2(Object(t),!0).forEach(function(r){Nm(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S2(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function K9(e){var n=e.length;if(n===0||n===1)return e;if(n===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(n===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(n>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var zd={};function Q9(e){if(e.length===0||e.length===1)return e;var n=e.join(".");return zd[n]||(zd[n]=K9(e)),zd[n]}function X9(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,r=e.filter(function(o){return o!=="token"}),l=Q9(r);return l.reduce(function(o,i){return gl(gl({},o),t[i])},n)}function k2(e){return e.join(" ")}function J9(e,n){var t=0;return function(r){return t+=1,r.map(function(l,o){return $m({node:l,stylesheet:e,useInlineStyles:n,key:"code-segment-".concat(t,"-").concat(o)})})}}function $m(e){var n=e.node,t=e.stylesheet,r=e.style,l=r===void 0?{}:r,o=e.useInlineStyles,i=e.key,s=n.properties,u=n.type,p=n.tagName,g=n.value;if(u==="text")return g;if(p){var y=J9(t,o),C;if(!o)C=gl(gl({},s),{},{className:k2(s.className)});else{var I=Object.keys(t).reduce(function(w,m){return m.split(".").forEach(function(b){w.includes(b)||w.push(b)}),w},[]),E=s.className&&s.className.includes("token")?["token"]:[],S=s.className&&E.concat(s.className.filter(function(w){return!I.includes(w)}));C=gl(gl({},s),{},{className:k2(S)||void 0,style:X9(s.className,Object.assign({},s.style,l),t)})}var M=y(n.children);return En.createElement(p,Ku({key:i},C),M)}}const ey=function(e,n){var t=e.listLanguages();return t.indexOf(n)!==-1};var ny=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function T2(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function Zt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?T2(Object(t),!0).forEach(function(r){Nm(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T2(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var ty=/\n/g;function ry(e){return e.match(ty)}function ay(e){var n=e.lines,t=e.startingLineNumber,r=e.style;return n.map(function(l,o){var i=o+t;return En.createElement("span",{key:"line-".concat(o),className:"react-syntax-highlighter-line-number",style:typeof r=="function"?r(i):r},"".concat(i,`
`))})}function ly(e){var n=e.codeString,t=e.codeStyle,r=e.containerStyle,l=r===void 0?{float:"left",paddingRight:"10px"}:r,o=e.numberStyle,i=o===void 0?{}:o,s=e.startingLineNumber;return En.createElement("code",{style:Object.assign({},t,l)},ay({lines:n.replace(/\n$/,"").split(`
`),style:i,startingLineNumber:s}))}function oy(e){return"".concat(e.toString().length,".25em")}function Em(e,n){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:n},children:[{type:"text",value:e}]}}function Im(e,n,t){var r={display:"inline-block",minWidth:oy(t),paddingRight:"1em",textAlign:"right",userSelect:"none"},l=typeof e=="function"?e(n):e,o=Zt(Zt({},r),l);return o}function ws(e){var n=e.children,t=e.lineNumber,r=e.lineNumberStyle,l=e.largestLineNumber,o=e.showInlineLineNumbers,i=e.lineProps,s=i===void 0?{}:i,u=e.className,p=u===void 0?[]:u,g=e.showLineNumbers,y=e.wrapLongLines,C=typeof s=="function"?s(t):s;if(C.className=p,t&&o){var I=Im(r,t,l);n.unshift(Em(t,I))}return y&g&&(C.style=Zt(Zt({},C.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:C,children:n}}function Mm(e){for(var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=0;r<e.length;r++){var l=e[r];if(l.type==="text")t.push(ws({children:[l],className:Y9(new Set(n))}));else if(l.children){var o=n.concat(l.properties.className);Mm(l.children,o).forEach(function(i){return t.push(i)})}}return t}function iy(e,n,t,r,l,o,i,s,u){var p,g=Mm(e.value),y=[],C=-1,I=0;function E(_,T){var A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return ws({children:_,lineNumber:T,lineNumberStyle:s,largestLineNumber:i,showInlineLineNumbers:l,lineProps:t,className:A,showLineNumbers:r,wrapLongLines:u})}function S(_,T){if(r&&T&&l){var A=Im(s,T,i);_.unshift(Em(T,A))}return _}function M(_,T){var A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return n||A.length>0?E(_,T,A):S(_,T)}for(var w=function(){var T=g[I],A=T.children[0].value,F=ry(A);if(F){var z=A.split(`
`);z.forEach(function(Z,fe){var de=r&&y.length+o,We={type:"text",value:"".concat(Z,`
`)};if(fe===0){var ln=g.slice(C+1,I).concat(ws({children:[We],className:T.properties.className})),Ye=M(ln,de);y.push(Ye)}else if(fe===z.length-1){var je=g[I+1]&&g[I+1].children&&g[I+1].children[0],Ze={type:"text",value:"".concat(Z)};if(je){var W=ws({children:[Ze],className:T.properties.className});g.splice(I+1,0,W)}else{var q=[Ze],J=M(q,de,T.properties.className);y.push(J)}}else{var ie=[We],me=M(ie,de,T.properties.className);y.push(me)}}),C=I}I++};I<g.length;)w();if(C!==g.length-1){var m=g.slice(C+1,g.length);if(m&&m.length){var b=r&&y.length+o,v=M(m,b);y.push(v)}}return n?y:(p=[]).concat.apply(p,y)}function sy(e){var n=e.rows,t=e.stylesheet,r=e.useInlineStyles;return n.map(function(l,o){return $m({node:l,stylesheet:t,useInlineStyles:r,key:"code-segement".concat(o)})})}function Pm(e){return e&&typeof e.highlightAuto<"u"}function cy(e){var n=e.astGenerator,t=e.language,r=e.code,l=e.defaultCodeValue;if(Pm(n)){var o=ey(n,t);return t==="text"?{value:l,language:"text"}:o?n.highlight(t,r):n.highlightAuto(r)}try{return t&&t!=="text"?{value:n.highlight(r,t)}:{value:l}}catch{return{value:l}}}function dy(e,n){return function(r){var l=r.language,o=r.children,i=r.style,s=i===void 0?n:i,u=r.customStyle,p=u===void 0?{}:u,g=r.codeTagProps,y=g===void 0?{className:l?"language-".concat(l):void 0,style:Zt(Zt({},s['code[class*="language-"]']),s['code[class*="language-'.concat(l,'"]')])}:g,C=r.useInlineStyles,I=C===void 0?!0:C,E=r.showLineNumbers,S=E===void 0?!1:E,M=r.showInlineLineNumbers,w=M===void 0?!0:M,m=r.startingLineNumber,b=m===void 0?1:m,v=r.lineNumberContainerStyle,_=r.lineNumberStyle,T=_===void 0?{}:_,A=r.wrapLines,F=r.wrapLongLines,z=F===void 0?!1:F,Z=r.lineProps,fe=Z===void 0?{}:Z,de=r.renderer,We=r.PreTag,ln=We===void 0?"pre":We,Ye=r.CodeTag,je=Ye===void 0?"code":Ye,Ze=r.code,W=Ze===void 0?(Array.isArray(o)?o[0]:o)||"":Ze,q=r.astGenerator,J=W9(r,ny);q=q||e;var ie=S?En.createElement(ly,{containerStyle:v,codeStyle:y.style||{},numberStyle:T,startingLineNumber:b,codeString:W}):null,me=s.hljs||s['pre[class*="language-"]']||{backgroundColor:"#fff"},zn=Pm(q)?"hljs":"prismjs",ge=I?Object.assign({},J,{style:Object.assign({},me,p)}):Object.assign({},J,{className:J.className?"".concat(zn," ").concat(J.className):zn,style:Object.assign({},p)});if(z?y.style=Zt(Zt({},y.style),{},{whiteSpace:"pre-wrap"}):y.style=Zt(Zt({},y.style),{},{whiteSpace:"pre"}),!q)return En.createElement(ln,ge,ie,En.createElement(je,y,W));(A===void 0&&de||z)&&(A=!0),de=de||sy;var nn=[{type:"text",value:W}],qe=cy({astGenerator:q,language:l,code:W,defaultCodeValue:nn});qe.language===null&&(qe.value=nn);var fn=qe.value.length+b,On=iy(qe,A,fe,S,w,b,fn,T,z);return En.createElement(ln,ge,En.createElement(je,y,!w&&ie,de({rows:On,stylesheet:s,useInlineStyles:I})))}}var uy=py,hy=Object.prototype.hasOwnProperty;function py(){for(var e={},n=0;n<arguments.length;n++){var t=arguments[n];for(var r in t)hy.call(t,r)&&(e[r]=t[r])}return e}var Rm=Am,dp=Am.prototype;dp.space=null;dp.normal={};dp.property={};function Am(e,n,t){this.property=e,this.normal=n,t&&(this.space=t)}var L2=uy,fy=Rm,my=gy;function gy(e){for(var n=e.length,t=[],r=[],l=-1,o,i;++l<n;)o=e[l],t.push(o.property),r.push(o.normal),i=o.space;return new fy(L2.apply(null,t),L2.apply(null,r),i)}var up=vy;function vy(e){return e.toLowerCase()}var Om=Fm,_t=Fm.prototype;_t.space=null;_t.attribute=null;_t.property=null;_t.boolean=!1;_t.booleanish=!1;_t.overloadedBoolean=!1;_t.number=!1;_t.commaSeparated=!1;_t.spaceSeparated=!1;_t.commaOrSpaceSeparated=!1;_t.mustUseProperty=!1;_t.defined=!1;function Fm(e,n){this.property=e,this.attribute=n}var Jt={},by=0;Jt.boolean=Ra();Jt.booleanish=Ra();Jt.overloadedBoolean=Ra();Jt.number=Ra();Jt.spaceSeparated=Ra();Jt.commaSeparated=Ra();Jt.commaOrSpaceSeparated=Ra();function Ra(){return Math.pow(2,++by)}var Bm=Om,_2=Jt,Dm=hp;hp.prototype=new Bm;hp.prototype.defined=!0;var jm=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],yy=jm.length;function hp(e,n,t,r){var l=-1,o;for(N2(this,"space",r),Bm.call(this,e,n);++l<yy;)o=jm[l],N2(this,o,(t&_2[o])===_2[o])}function N2(e,n,t){t&&(e[n]=t)}var $2=up,wy=Rm,xy=Dm,vi=Cy;function Cy(e){var n=e.space,t=e.mustUseProperty||[],r=e.attributes||{},l=e.properties,o=e.transform,i={},s={},u,p;for(u in l)p=new xy(u,o(r,u),l[u],n),t.indexOf(u)!==-1&&(p.mustUseProperty=!0),i[u]=p,s[$2(u)]=u,s[$2(p.attribute)]=u;return new wy(i,s,n)}var Sy=vi,ky=Sy({space:"xlink",transform:Ty,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function Ty(e,n){return"xlink:"+n.slice(5).toLowerCase()}var Ly=vi,_y=Ly({space:"xml",transform:Ny,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Ny(e,n){return"xml:"+n.slice(3).toLowerCase()}var $y=Ey;function Ey(e,n){return n in e?e[n]:n}var Iy=$y,zm=My;function My(e,n){return Iy(e,n.toLowerCase())}var Py=vi,Ry=zm,Ay=Py({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Ry,properties:{xmlns:null,xmlnsXLink:null}}),pp=Jt,Oy=vi,Xn=pp.booleanish,wt=pp.number,ua=pp.spaceSeparated,Fy=Oy({transform:By,properties:{ariaActiveDescendant:null,ariaAtomic:Xn,ariaAutoComplete:null,ariaBusy:Xn,ariaChecked:Xn,ariaColCount:wt,ariaColIndex:wt,ariaColSpan:wt,ariaControls:ua,ariaCurrent:null,ariaDescribedBy:ua,ariaDetails:null,ariaDisabled:Xn,ariaDropEffect:ua,ariaErrorMessage:null,ariaExpanded:Xn,ariaFlowTo:ua,ariaGrabbed:Xn,ariaHasPopup:null,ariaHidden:Xn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ua,ariaLevel:wt,ariaLive:null,ariaModal:Xn,ariaMultiLine:Xn,ariaMultiSelectable:Xn,ariaOrientation:null,ariaOwns:ua,ariaPlaceholder:null,ariaPosInSet:wt,ariaPressed:Xn,ariaReadOnly:Xn,ariaRelevant:null,ariaRequired:Xn,ariaRoleDescription:ua,ariaRowCount:wt,ariaRowIndex:wt,ariaRowSpan:wt,ariaSelected:Xn,ariaSetSize:wt,ariaSort:null,ariaValueMax:wt,ariaValueMin:wt,ariaValueNow:wt,ariaValueText:null,role:null}});function By(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}var jl=Jt,Dy=vi,jy=zm,Ce=jl.boolean,zy=jl.overloadedBoolean,go=jl.booleanish,Ke=jl.number,Wn=jl.spaceSeparated,es=jl.commaSeparated,Wy=Dy({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:jy,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:es,acceptCharset:Wn,accessKey:Wn,action:null,allow:null,allowFullScreen:Ce,allowPaymentRequest:Ce,allowUserMedia:Ce,alt:null,as:null,async:Ce,autoCapitalize:null,autoComplete:Wn,autoFocus:Ce,autoPlay:Ce,capture:Ce,charSet:null,checked:Ce,cite:null,className:Wn,cols:Ke,colSpan:null,content:null,contentEditable:go,controls:Ce,controlsList:Wn,coords:Ke|es,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Ce,defer:Ce,dir:null,dirName:null,disabled:Ce,download:zy,draggable:go,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Ce,formTarget:null,headers:Wn,height:Ke,hidden:Ce,high:Ke,href:null,hrefLang:null,htmlFor:Wn,httpEquiv:Wn,id:null,imageSizes:null,imageSrcSet:es,inputMode:null,integrity:null,is:null,isMap:Ce,itemId:null,itemProp:Wn,itemRef:Wn,itemScope:Ce,itemType:Wn,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Ce,low:Ke,manifest:null,max:null,maxLength:Ke,media:null,method:null,min:null,minLength:Ke,multiple:Ce,muted:Ce,name:null,nonce:null,noModule:Ce,noValidate:Ce,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Ce,optimum:Ke,pattern:null,ping:Wn,placeholder:null,playsInline:Ce,poster:null,preload:null,readOnly:Ce,referrerPolicy:null,rel:Wn,required:Ce,reversed:Ce,rows:Ke,rowSpan:Ke,sandbox:Wn,scope:null,scoped:Ce,seamless:Ce,selected:Ce,shape:null,size:Ke,sizes:null,slot:null,span:Ke,spellCheck:go,src:null,srcDoc:null,srcLang:null,srcSet:es,start:Ke,step:null,style:null,tabIndex:Ke,target:null,title:null,translate:null,type:null,typeMustMatch:Ce,useMap:null,value:go,width:Ke,wrap:null,align:null,aLink:null,archive:Wn,axis:null,background:null,bgColor:null,border:Ke,borderColor:null,bottomMargin:Ke,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Ce,declare:Ce,event:null,face:null,frame:null,frameBorder:null,hSpace:Ke,leftMargin:Ke,link:null,longDesc:null,lowSrc:null,marginHeight:Ke,marginWidth:Ke,noResize:Ce,noHref:Ce,noShade:Ce,noWrap:Ce,object:null,profile:null,prompt:null,rev:null,rightMargin:Ke,rules:null,scheme:null,scrolling:go,standby:null,summary:null,text:null,topMargin:Ke,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Ke,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Ce,disableRemotePlayback:Ce,prefix:null,property:null,results:Ke,security:null,unselectable:null}}),Hy=my,Uy=ky,Vy=_y,Gy=Ay,Yy=Fy,Zy=Wy,qy=Hy([Vy,Uy,Gy,Yy,Zy]),Ky=up,Qy=Dm,Xy=Om,fp="data",Jy=tw,ew=/^data[-\w.:]+$/i,Wm=/-[a-z]/g,nw=/[A-Z]/g;function tw(e,n){var t=Ky(n),r=n,l=Xy;return t in e.normal?e.property[e.normal[t]]:(t.length>4&&t.slice(0,4)===fp&&ew.test(n)&&(n.charAt(4)==="-"?r=rw(n):n=aw(n),l=Qy),new l(r,n))}function rw(e){var n=e.slice(5).replace(Wm,ow);return fp+n.charAt(0).toUpperCase()+n.slice(1)}function aw(e){var n=e.slice(4);return Wm.test(n)?e:(n=n.replace(nw,lw),n.charAt(0)!=="-"&&(n="-"+n),fp+n)}function lw(e){return"-"+e.toLowerCase()}function ow(e){return e.charAt(1).toUpperCase()}var iw=sw,E2=/[#.]/g;function sw(e,n){for(var t=e||"",r=n||"div",l={},o=0,i,s,u;o<t.length;)E2.lastIndex=o,u=E2.exec(t),i=t.slice(o,u?u.index:t.length),i&&(s?s==="#"?l.id=i:l.className?l.className.push(i):l.className=[i]:r=i,o+=i.length),u&&(s=u[0],o++);return{type:"element",tagName:r,properties:l,children:[]}}var mp={};mp.parse=uw;mp.stringify=hw;var I2="",cw=" ",dw=/[ \t\n\r\f]+/g;function uw(e){var n=String(e||I2).trim();return n===I2?[]:n.split(dw)}function hw(e){return e.join(cw).trim()}var gp={};gp.parse=pw;gp.stringify=fw;var Qu=",",M2=" ",So="";function pw(e){for(var n=[],t=String(e||So),r=t.indexOf(Qu),l=0,o=!1,i;!o;)r===-1&&(r=t.length,o=!0),i=t.slice(l,r).trim(),(i||!o)&&n.push(i),l=r+1,r=t.indexOf(Qu,l);return n}function fw(e,n){var t=n||{},r=t.padLeft===!1?So:M2,l=t.padRight?M2:So;return e[e.length-1]===So&&(e=e.concat(So)),e.join(l+Qu+r).trim()}var mw=Jy,P2=up,gw=iw,R2=mp.parse,A2=gp.parse,vw=yw,bw={}.hasOwnProperty;function yw(e,n,t){var r=t?kw(t):null;return l;function l(i,s){var u=gw(i,n),p=Array.prototype.slice.call(arguments,2),g=u.tagName.toLowerCase(),y;if(u.tagName=r&&bw.call(r,g)?r[g]:g,s&&ww(s,u)&&(p.unshift(s),s=null),s)for(y in s)o(u.properties,y,s[y]);return Hm(u.children,p),u.tagName==="template"&&(u.content={type:"root",children:u.children},u.children=[]),u}function o(i,s,u){var p,g,y;u==null||u!==u||(p=mw(e,s),g=p.property,y=u,typeof y=="string"&&(p.spaceSeparated?y=R2(y):p.commaSeparated?y=A2(y):p.commaOrSpaceSeparated&&(y=R2(A2(y).join(" ")))),g==="style"&&typeof u!="string"&&(y=Sw(y)),g==="className"&&i.className&&(y=i.className.concat(y)),i[g]=Cw(p,g,y))}}function ww(e,n){return typeof e=="string"||"length"in e||xw(n.tagName,e)}function xw(e,n){var t=n.type;return e==="input"||!t||typeof t!="string"?!1:typeof n.children=="object"&&"length"in n.children?!0:(t=t.toLowerCase(),e==="button"?t!=="menu"&&t!=="submit"&&t!=="reset"&&t!=="button":"value"in n)}function Hm(e,n){var t,r;if(typeof n=="string"||typeof n=="number"){e.push({type:"text",value:String(n)});return}if(typeof n=="object"&&"length"in n){for(t=-1,r=n.length;++t<r;)Hm(e,n[t]);return}if(typeof n!="object"||!("type"in n))throw new Error("Expected node, nodes, or string, got `"+n+"`");e.push(n)}function Cw(e,n,t){var r,l,o;if(typeof t!="object"||!("length"in t))return O2(e,n,t);for(l=t.length,r=-1,o=[];++r<l;)o[r]=O2(e,n,t[r]);return o}function O2(e,n,t){var r=t;return e.number||e.positiveNumber?!isNaN(r)&&r!==""&&(r=Number(r)):(e.boolean||e.overloadedBoolean)&&typeof r=="string"&&(r===""||P2(t)===P2(n))&&(r=!0),r}function Sw(e){var n=[],t;for(t in e)n.push([t,e[t]].join(": "));return n.join("; ")}function kw(e){for(var n=e.length,t=-1,r={},l;++t<n;)l=e[t],r[l.toLowerCase()]=l;return r}var Tw=qy,Lw=vw,Um=Lw(Tw,"div");Um.displayName="html";var _w=Um,Nw=_w;const $w="Æ",Ew="&",Iw="Á",Mw="Â",Pw="À",Rw="Å",Aw="Ã",Ow="Ä",Fw="©",Bw="Ç",Dw="Ð",jw="É",zw="Ê",Ww="È",Hw="Ë",Uw=">",Vw="Í",Gw="Î",Yw="Ì",Zw="Ï",qw="<",Kw="Ñ",Qw="Ó",Xw="Ô",Jw="Ò",ex="Ø",nx="Õ",tx="Ö",rx='"',ax="®",lx="Þ",ox="Ú",ix="Û",sx="Ù",cx="Ü",dx="Ý",ux="á",hx="â",px="´",fx="æ",mx="à",gx="&",vx="å",bx="ã",yx="ä",wx="¦",xx="ç",Cx="¸",Sx="¢",kx="©",Tx="¤",Lx="°",_x="÷",Nx="é",$x="ê",Ex="è",Ix="ð",Mx="ë",Px="½",Rx="¼",Ax="¾",Ox=">",Fx="í",Bx="î",Dx="¡",jx="ì",zx="¿",Wx="ï",Hx="«",Ux="<",Vx="¯",Gx="µ",Yx="·",Zx=" ",qx="¬",Kx="ñ",Qx="ó",Xx="ô",Jx="ò",eC="ª",nC="º",tC="ø",rC="õ",aC="ö",lC="¶",oC="±",iC="£",sC='"',cC="»",dC="®",uC="§",hC="­",pC="¹",fC="²",mC="³",gC="ß",vC="þ",bC="×",yC="ú",wC="û",xC="ù",CC="¨",SC="ü",kC="ý",TC="¥",LC="ÿ",_C={AElig:$w,AMP:Ew,Aacute:Iw,Acirc:Mw,Agrave:Pw,Aring:Rw,Atilde:Aw,Auml:Ow,COPY:Fw,Ccedil:Bw,ETH:Dw,Eacute:jw,Ecirc:zw,Egrave:Ww,Euml:Hw,GT:Uw,Iacute:Vw,Icirc:Gw,Igrave:Yw,Iuml:Zw,LT:qw,Ntilde:Kw,Oacute:Qw,Ocirc:Xw,Ograve:Jw,Oslash:ex,Otilde:nx,Ouml:tx,QUOT:rx,REG:ax,THORN:lx,Uacute:ox,Ucirc:ix,Ugrave:sx,Uuml:cx,Yacute:dx,aacute:ux,acirc:hx,acute:px,aelig:fx,agrave:mx,amp:gx,aring:vx,atilde:bx,auml:yx,brvbar:wx,ccedil:xx,cedil:Cx,cent:Sx,copy:kx,curren:Tx,deg:Lx,divide:_x,eacute:Nx,ecirc:$x,egrave:Ex,eth:Ix,euml:Mx,frac12:Px,frac14:Rx,frac34:Ax,gt:Ox,iacute:Fx,icirc:Bx,iexcl:Dx,igrave:jx,iquest:zx,iuml:Wx,laquo:Hx,lt:Ux,macr:Vx,micro:Gx,middot:Yx,nbsp:Zx,not:qx,ntilde:Kx,oacute:Qx,ocirc:Xx,ograve:Jx,ordf:eC,ordm:nC,oslash:tC,otilde:rC,ouml:aC,para:lC,plusmn:oC,pound:iC,quot:sC,raquo:cC,reg:dC,sect:uC,shy:hC,sup1:pC,sup2:fC,sup3:mC,szlig:gC,thorn:vC,times:bC,uacute:yC,ucirc:wC,ugrave:xC,uml:CC,uuml:SC,yacute:kC,yen:TC,yuml:LC},NC={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var Vm=$C;function $C(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=48&&n<=57}var EC=IC;function IC(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=97&&n<=102||n>=65&&n<=70||n>=48&&n<=57}var MC=PC;function PC(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=97&&n<=122||n>=65&&n<=90}var RC=MC,AC=Vm,OC=FC;function FC(e){return RC(e)||AC(e)}var ns,BC=59,DC=jC;function jC(e){var n="&"+e+";",t;return ns=ns||document.createElement("i"),ns.innerHTML=n,t=ns.textContent,t.charCodeAt(t.length-1)===BC&&e!=="semi"||t===n?!1:t}var F2=_C,B2=NC,zC=Vm,WC=EC,Gm=OC,HC=DC,UC=rS,VC={}.hasOwnProperty,Ja=String.fromCharCode,GC=Function.prototype,D2={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},YC=9,j2=10,ZC=12,qC=32,z2=38,KC=59,QC=60,XC=61,JC=35,eS=88,nS=120,tS=65533,tl="named",vp="hexadecimal",bp="decimal",yp={};yp[vp]=16;yp[bp]=10;var Ec={};Ec[tl]=Gm;Ec[bp]=zC;Ec[vp]=WC;var Ym=1,Zm=2,qm=3,Km=4,Qm=5,Xu=6,Xm=7,Xr={};Xr[Ym]="Named character references must be terminated by a semicolon";Xr[Zm]="Numeric character references must be terminated by a semicolon";Xr[qm]="Named character references cannot be empty";Xr[Km]="Numeric character references cannot be empty";Xr[Qm]="Named character references must be known";Xr[Xu]="Numeric character references cannot be disallowed";Xr[Xm]="Numeric character references cannot be outside the permissible Unicode range";function rS(e,n){var t={},r,l;n||(n={});for(l in D2)r=n[l],t[l]=r??D2[l];return(t.position.indent||t.position.start)&&(t.indent=t.position.indent||[],t.position=t.position.start),aS(e,t)}function aS(e,n){var t=n.additional,r=n.nonTerminated,l=n.text,o=n.reference,i=n.warning,s=n.textContext,u=n.referenceContext,p=n.warningContext,g=n.position,y=n.indent||[],C=e.length,I=0,E=-1,S=g.column||1,M=g.line||1,w="",m=[],b,v,_,T,A,F,z,Z,fe,de,We,ln,Ye,je,Ze,W,q,J,ie;for(typeof t=="string"&&(t=t.charCodeAt(0)),W=me(),Z=i?zn:GC,I--,C++;++I<C;)if(A===j2&&(S=y[E]||1),A=e.charCodeAt(I),A===z2){if(z=e.charCodeAt(I+1),z===YC||z===j2||z===ZC||z===qC||z===z2||z===QC||z!==z||t&&z===t){w+=Ja(A),S++;continue}for(Ye=I+1,ln=Ye,ie=Ye,z===JC?(ie=++ln,z=e.charCodeAt(ie),z===eS||z===nS?(je=vp,ie=++ln):je=bp):je=tl,b="",We="",T="",Ze=Ec[je],ie--;++ie<C&&(z=e.charCodeAt(ie),!!Ze(z));)T+=Ja(z),je===tl&&VC.call(F2,T)&&(b=T,We=F2[T]);_=e.charCodeAt(ie)===KC,_&&(ie++,v=je===tl?HC(T):!1,v&&(b=T,We=v)),J=1+ie-Ye,!_&&!r||(T?je===tl?(_&&!We?Z(Qm,1):(b!==T&&(ie=ln+b.length,J=1+ie-ln,_=!1),_||(fe=b?Ym:qm,n.attribute?(z=e.charCodeAt(ie),z===XC?(Z(fe,J),We=null):Gm(z)?We=null:Z(fe,J)):Z(fe,J))),F=We):(_||Z(Zm,J),F=parseInt(T,yp[je]),lS(F)?(Z(Xm,J),F=Ja(tS)):F in B2?(Z(Xu,J),F=B2[F]):(de="",oS(F)&&Z(Xu,J),F>65535&&(F-=65536,de+=Ja(F>>>10|55296),F=56320|F&1023),F=de+Ja(F))):je!==tl&&Z(Km,J)),F?(ge(),W=me(),I=ie-1,S+=ie-Ye+1,m.push(F),q=me(),q.offset++,o&&o.call(u,F,{start:W,end:q},e.slice(Ye-1,ie)),W=q):(T=e.slice(Ye-1,ie),w+=T,S+=T.length,I=ie-1)}else A===10&&(M++,E++,S=0),A===A?(w+=Ja(A),S++):ge();return m.join("");function me(){return{line:M,column:S,offset:I+(g.offset||0)}}function zn(nn,qe){var fn=me();fn.column+=qe,fn.offset+=qe,i.call(p,Xr[nn],fn,nn)}function ge(){w&&(m.push(w),l&&l.call(s,w,{start:W,end:me()}),w="")}}function lS(e){return e>=55296&&e<=57343||e>1114111}function oS(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var Jm={exports:{}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(r){var l=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,i={},s={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function m(b){return b instanceof u?new u(b.type,m(b.content),b.alias):Array.isArray(b)?b.map(m):b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++o}),m.__id},clone:function m(b,v){v=v||{};var _,T;switch(s.util.type(b)){case"Object":if(T=s.util.objId(b),v[T])return v[T];_={},v[T]=_;for(var A in b)b.hasOwnProperty(A)&&(_[A]=m(b[A],v));return _;case"Array":return T=s.util.objId(b),v[T]?v[T]:(_=[],v[T]=_,b.forEach(function(F,z){_[z]=m(F,v)}),_);default:return b}},getLanguage:function(m){for(;m;){var b=l.exec(m.className);if(b)return b[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,b){m.className=m.className.replace(RegExp(l,"gi"),""),m.classList.add("language-"+b)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(_){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(_.stack)||[])[1];if(m){var b=document.getElementsByTagName("script");for(var v in b)if(b[v].src==m)return b[v]}return null}},isActive:function(m,b,v){for(var _="no-"+b;m;){var T=m.classList;if(T.contains(b))return!0;if(T.contains(_))return!1;m=m.parentElement}return!!v}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(m,b){var v=s.util.clone(s.languages[m]);for(var _ in b)v[_]=b[_];return v},insertBefore:function(m,b,v,_){_=_||s.languages;var T=_[m],A={};for(var F in T)if(T.hasOwnProperty(F)){if(F==b)for(var z in v)v.hasOwnProperty(z)&&(A[z]=v[z]);v.hasOwnProperty(F)||(A[F]=T[F])}var Z=_[m];return _[m]=A,s.languages.DFS(s.languages,function(fe,de){de===Z&&fe!=m&&(this[fe]=A)}),A},DFS:function m(b,v,_,T){T=T||{};var A=s.util.objId;for(var F in b)if(b.hasOwnProperty(F)){v.call(b,F,b[F],_||F);var z=b[F],Z=s.util.type(z);Z==="Object"&&!T[A(z)]?(T[A(z)]=!0,m(z,v,null,T)):Z==="Array"&&!T[A(z)]&&(T[A(z)]=!0,m(z,v,F,T))}}},plugins:{},highlightAll:function(m,b){s.highlightAllUnder(document,m,b)},highlightAllUnder:function(m,b,v){var _={callback:v,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",_),_.elements=Array.prototype.slice.apply(_.container.querySelectorAll(_.selector)),s.hooks.run("before-all-elements-highlight",_);for(var T=0,A;A=_.elements[T++];)s.highlightElement(A,b===!0,_.callback)},highlightElement:function(m,b,v){var _=s.util.getLanguage(m),T=s.languages[_];s.util.setLanguage(m,_);var A=m.parentElement;A&&A.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(A,_);var F=m.textContent,z={element:m,language:_,grammar:T,code:F};function Z(de){z.highlightedCode=de,s.hooks.run("before-insert",z),z.element.innerHTML=z.highlightedCode,s.hooks.run("after-highlight",z),s.hooks.run("complete",z),v&&v.call(z.element)}if(s.hooks.run("before-sanity-check",z),A=z.element.parentElement,A&&A.nodeName.toLowerCase()==="pre"&&!A.hasAttribute("tabindex")&&A.setAttribute("tabindex","0"),!z.code){s.hooks.run("complete",z),v&&v.call(z.element);return}if(s.hooks.run("before-highlight",z),!z.grammar){Z(s.util.encode(z.code));return}if(b&&r.Worker){var fe=new Worker(s.filename);fe.onmessage=function(de){Z(de.data)},fe.postMessage(JSON.stringify({language:z.language,code:z.code,immediateClose:!0}))}else Z(s.highlight(z.code,z.grammar,z.language))},highlight:function(m,b,v){var _={code:m,grammar:b,language:v};if(s.hooks.run("before-tokenize",_),!_.grammar)throw new Error('The language "'+_.language+'" has no grammar.');return _.tokens=s.tokenize(_.code,_.grammar),s.hooks.run("after-tokenize",_),u.stringify(s.util.encode(_.tokens),_.language)},tokenize:function(m,b){var v=b.rest;if(v){for(var _ in v)b[_]=v[_];delete b.rest}var T=new y;return C(T,T.head,m),g(m,T,b,T.head,0),E(T)},hooks:{all:{},add:function(m,b){var v=s.hooks.all;v[m]=v[m]||[],v[m].push(b)},run:function(m,b){var v=s.hooks.all[m];if(!(!v||!v.length))for(var _=0,T;T=v[_++];)T(b)}},Token:u};r.Prism=s;function u(m,b,v,_){this.type=m,this.content=b,this.alias=v,this.length=(_||"").length|0}u.stringify=function m(b,v){if(typeof b=="string")return b;if(Array.isArray(b)){var _="";return b.forEach(function(Z){_+=m(Z,v)}),_}var T={type:b.type,content:m(b.content,v),tag:"span",classes:["token",b.type],attributes:{},language:v},A=b.alias;A&&(Array.isArray(A)?Array.prototype.push.apply(T.classes,A):T.classes.push(A)),s.hooks.run("wrap",T);var F="";for(var z in T.attributes)F+=" "+z+'="'+(T.attributes[z]||"").replace(/"/g,"&quot;")+'"';return"<"+T.tag+' class="'+T.classes.join(" ")+'"'+F+">"+T.content+"</"+T.tag+">"};function p(m,b,v,_){m.lastIndex=b;var T=m.exec(v);if(T&&_&&T[1]){var A=T[1].length;T.index+=A,T[0]=T[0].slice(A)}return T}function g(m,b,v,_,T,A){for(var F in v)if(!(!v.hasOwnProperty(F)||!v[F])){var z=v[F];z=Array.isArray(z)?z:[z];for(var Z=0;Z<z.length;++Z){if(A&&A.cause==F+","+Z)return;var fe=z[Z],de=fe.inside,We=!!fe.lookbehind,ln=!!fe.greedy,Ye=fe.alias;if(ln&&!fe.pattern.global){var je=fe.pattern.toString().match(/[imsuy]*$/)[0];fe.pattern=RegExp(fe.pattern.source,je+"g")}for(var Ze=fe.pattern||fe,W=_.next,q=T;W!==b.tail&&!(A&&q>=A.reach);q+=W.value.length,W=W.next){var J=W.value;if(b.length>m.length)return;if(!(J instanceof u)){var ie=1,me;if(ln){if(me=p(Ze,q,m,We),!me||me.index>=m.length)break;var qe=me.index,zn=me.index+me[0].length,ge=q;for(ge+=W.value.length;qe>=ge;)W=W.next,ge+=W.value.length;if(ge-=W.value.length,q=ge,W.value instanceof u)continue;for(var nn=W;nn!==b.tail&&(ge<zn||typeof nn.value=="string");nn=nn.next)ie++,ge+=nn.value.length;ie--,J=m.slice(q,ge),me.index-=q}else if(me=p(Ze,0,J,We),!me)continue;var qe=me.index,fn=me[0],On=J.slice(0,qe),ea=J.slice(qe+fn.length),na=q+J.length;A&&na>A.reach&&(A.reach=na);var er=W.prev;On&&(er=C(b,er,On),q+=On.length),I(b,er,ie);var Gl=new u(F,de?s.tokenize(fn,de):fn,Ye,fn);if(W=C(b,er,Gl),ea&&C(b,W,ea),ie>1){var ta={cause:F+","+Z,reach:na};g(m,b,v,W.prev,q,ta),A&&ta.reach>A.reach&&(A.reach=ta.reach)}}}}}}function y(){var m={value:null,prev:null,next:null},b={value:null,prev:m,next:null};m.next=b,this.head=m,this.tail=b,this.length=0}function C(m,b,v){var _=b.next,T={value:v,prev:b,next:_};return b.next=T,_.prev=T,m.length++,T}function I(m,b,v){for(var _=b.next,T=0;T<v&&_!==m.tail;T++)_=_.next;b.next=_,_.prev=b,m.length-=T}function E(m){for(var b=[],v=m.head.next;v!==m.tail;)b.push(v.value),v=v.next;return b}if(!r.document)return r.addEventListener&&(s.disableWorkerMessageHandler||r.addEventListener("message",function(m){var b=JSON.parse(m.data),v=b.language,_=b.code,T=b.immediateClose;r.postMessage(s.highlight(_,s.languages[v],v)),T&&r.close()},!1)),s;var S=s.util.currentScript();S&&(s.filename=S.src,S.hasAttribute("data-manual")&&(s.manual=!0));function M(){s.manual||s.highlightAll()}if(!s.manual){var w=document.readyState;w==="loading"||w==="interactive"&&S&&S.defer?document.addEventListener("DOMContentLoaded",M):window.requestAnimationFrame?window.requestAnimationFrame(M):window.setTimeout(M,16)}return s}(n);e.exports&&(e.exports=t),typeof zo<"u"&&(zo.Prism=t)})(Jm);var iS=Jm.exports,sS=wp;wp.displayName="markup";wp.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function wp(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(t,r){var l={};l["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[r]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};o["language-"+r]={pattern:/[\s\S]+/,inside:e.languages[r]};var i={};i[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:o},e.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(n,t){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:e.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var eg=xp;xp.displayName="css";xp.aliases=[];function xp(e){(function(n){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var r=n.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(e)}const cS=Xt(eg);var dS=Cp;Cp.displayName="clike";Cp.aliases=[];function Cp(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var uS=Sp;Sp.displayName="javascript";Sp.aliases=["js"];function Sp(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var ko=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof zo=="object"?zo:{},hS=NS();ko.Prism={manual:!0,disableWorkerMessageHandler:!0};var pS=Nw,fS=UC,ng=iS,mS=sS,gS=eg,vS=dS,bS=uS;hS();var kp={}.hasOwnProperty;function tg(){}tg.prototype=ng;var pn=new tg,yS=pn;pn.highlight=xS;pn.register=bi;pn.alias=wS;pn.registered=CS;pn.listLanguages=SS;bi(mS);bi(gS);bi(vS);bi(bS);pn.util.encode=LS;pn.Token.stringify=kS;function bi(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");pn.languages[e.displayName]===void 0&&e(pn)}function wS(e,n){var t=pn.languages,r=e,l,o,i,s;n&&(r={},r[e]=n);for(l in r)for(o=r[l],o=typeof o=="string"?[o]:o,i=o.length,s=-1;++s<i;)t[o[s]]=t[l]}function xS(e,n){var t=ng.highlight,r;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(pn.util.type(n)==="Object")r=n,n=null;else{if(typeof n!="string")throw new Error("Expected `string` for `name`, got `"+n+"`");if(kp.call(pn.languages,n))r=pn.languages[n];else throw new Error("Unknown language: `"+n+"` is not registered")}return t.call(this,e,r,n)}function CS(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return kp.call(pn.languages,e)}function SS(){var e=pn.languages,n=[],t;for(t in e)kp.call(e,t)&&typeof e[t]=="object"&&n.push(t);return n}function kS(e,n,t){var r;return typeof e=="string"?{type:"text",value:e}:pn.util.type(e)==="Array"?TS(e,n):(r={type:e.type,content:pn.Token.stringify(e.content,n,t),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:t},e.alias&&(r.classes=r.classes.concat(e.alias)),pn.hooks.run("wrap",r),pS(r.tag+"."+r.classes.join("."),_S(r.attributes),r.content))}function TS(e,n){for(var t=[],r=e.length,l=-1,o;++l<r;)o=e[l],o!==""&&o!==null&&o!==void 0&&t.push(o);for(l=-1,r=t.length;++l<r;)o=t[l],t[l]=pn.Token.stringify(o,n,t);return t}function LS(e){return e}function _S(e){var n;for(n in e)e[n]=fS(e[n]);return e}function NS(){var e="Prism"in ko,n=e?ko.Prism:void 0;return t;function t(){e?ko.Prism=n:delete ko.Prism,e=void 0,n=void 0}}const Tp=Xt(yS);var Lp=dy(Tp,{});Lp.registerLanguage=function(e,n){return Tp.register(n)};Lp.alias=function(e,n){return Tp.alias(e,n)};const Aa=Lp;var $S=_p;_p.displayName="bash";_p.aliases=["shell"];function _p(e){(function(n){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},l={bash:r,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};n.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:l},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:l},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:l.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:l.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=n.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=l.variable[1].inside,s=0;s<o.length;s++)i[o[s]]=n.languages.bash[o[s]];n.languages.shell=n.languages.bash})(e)}const ES=Xt($S);var IS=Np;Np.displayName="json";Np.aliases=["webmanifest"];function Np(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}const MS=Xt(IS);var PS=$p;$p.displayName="jsx";$p.aliases=[];function $p(e){(function(n){var t=n.util.clone(n.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,l=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,o=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function i(p,g){return p=p.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return l}).replace(/<SPREAD>/g,function(){return o}),RegExp(p,g)}o=i(o).source,n.languages.jsx=n.languages.extend("markup",t),n.languages.jsx.tag.pattern=i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),n.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,n.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,n.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,n.languages.jsx.tag.inside.comment=t.comment,n.languages.insertBefore("inside","attr-name",{spread:{pattern:i(/<SPREAD>/.source),inside:n.languages.jsx}},n.languages.jsx.tag),n.languages.insertBefore("inside","special-attr",{script:{pattern:i(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:n.languages.jsx}}},n.languages.jsx.tag);var s=function(p){return p?typeof p=="string"?p:typeof p.content=="string"?p.content:p.content.map(s).join(""):""},u=function(p){for(var g=[],y=0;y<p.length;y++){var C=p[y],I=!1;if(typeof C!="string"&&(C.type==="tag"&&C.content[0]&&C.content[0].type==="tag"?C.content[0].content[0].content==="</"?g.length>0&&g[g.length-1].tagName===s(C.content[0].content[1])&&g.pop():C.content[C.content.length-1].content==="/>"||g.push({tagName:s(C.content[0].content[1]),openedBraces:0}):g.length>0&&C.type==="punctuation"&&C.content==="{"?g[g.length-1].openedBraces++:g.length>0&&g[g.length-1].openedBraces>0&&C.type==="punctuation"&&C.content==="}"?g[g.length-1].openedBraces--:I=!0),(I||typeof C=="string")&&g.length>0&&g[g.length-1].openedBraces===0){var E=s(C);y<p.length-1&&(typeof p[y+1]=="string"||p[y+1].type==="plain-text")&&(E+=s(p[y+1]),p.splice(y+1,1)),y>0&&(typeof p[y-1]=="string"||p[y-1].type==="plain-text")&&(E=s(p[y-1])+E,p.splice(y-1,1),y--),p[y]=new n.Token("plain-text",E,null,E)}C.content&&typeof C.content!="string"&&u(C.content)}};n.hooks.add("after-tokenize",function(p){p.language!=="jsx"&&p.language!=="tsx"||u(p.tokens)})})(e)}const RS=Xt(PS);var AS=Ep;Ep.displayName="scss";Ep.aliases=[];function Ep(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const OS=Xt(AS);var FS=Ip;Ip.displayName="yaml";Ip.aliases=["yml"];function Ip(e){(function(n){var t=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,l="(?:"+r.source+"(?:[ 	]+"+t.source+")?|"+t.source+"(?:[ 	]+"+r.source+")?)",o=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),i=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function s(u,p){p=(p||"").replace(/m/g,"")+"m";var g=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return l}).replace(/<<value>>/g,function(){return u});return RegExp(g,p)}n.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return l})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return l}).replace(/<<key>>/g,function(){return"(?:"+o+"|"+i+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:s(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:s(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:s(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:s(i),lookbehind:!0,greedy:!0},number:{pattern:s(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},n.languages.yml=n.languages.yaml})(e)}const BS=Xt(FS);function rg(e){return typeof e=="string"}function DS(e){return Array.isArray(e)}function jS(e){return e===void 0}function zS(e){return e===null}function $n(e){return!(jS(e)||zS(e))}function WS(e){return!$n(e)}function HS(...e){throw new Error(e.join(""))}function US(){return Intl.DateTimeFormat().resolvedOptions().locale}US();const yi=(e,n,t=1)=>{const r=n<e?-Math.abs(t):t;return Array(1+Math.floor(Math.abs((n-e)/t))).fill(e).map((l,o)=>l+o*r)};function ag(e){return WS(e)?[]:rg(e)?e.length?e.split(/,\s*|\s+/):[]:DS(e)?e:[e]}function VS(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function GS(e){return new Promise(n=>setTimeout(n,e))}Aa.registerLanguage("jsx",RS);Aa.registerLanguage("json",MS);Aa.registerLanguage("css",cS);Aa.registerLanguage("scss",OS);Aa.registerLanguage("bash",ES);Aa.registerLanguage("yaml",BS);const Ie=({code:e,language:n="jsx",caption:t,expand:r=!1,fixed:l=r,className:o=""})=>{const[i,s]=D.useState(!1),[u,p]=D.useState(r),g=()=>{navigator.clipboard.writeText(e),s(!0),GS(2e3).then(()=>s(!1))};return c("div",{className:`codeblock ${o} ${u?"expanded":""} ${l?"fixed-open":"expandable"}`,children:[!!t&&a("h4",{className:"caption",children:t}),c("div",{className:"controls",children:[a("div",{className:"expand",onClick:()=>p(!u),children:u?"Compress":"Expand"}),a("div",{className:`clipboard ${i?"copied":""}`,onClick:g,children:i?"Copied":"Copy"})]}),a(Aa,{language:n,showLineNumbers:!0,useInlineStyles:!1,customStyle:{},children:YS(e)})]})},YS=e=>e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/\/\*\s*REAL\s*\*\/.*?\/\*\s*UNREAL\s*\*\//g,"").replaceAll(/{\/\*\s*(UN?)PRETEND\s*\*\/}/g,"").replace(/\n+$/,""),Dt=({children:e,code:n,caption:t,language:r,expand:l,className:o=""})=>c("div",{className:`grid-2 gap-8 top stack-desktop ${o}`,children:[a("div",{className:"wide",children:e}),a(Ie,{code:n,caption:t,language:r,expand:l,className:"mar-b-8"})]}),ZS=`// define your brand hue and color name
$purple-hue:   295;
$brand-hue:    $purple-hue;
$brand-color:  'purple';

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,qS=`// define your own brand colors...
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
`,KS=`// define your own brand colors and greyscale hues...
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
`,QS=`// define the colors that you want to use...
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
 */function Re(){return Re=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Re.apply(this,arguments)}var un;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(un||(un={}));const W2="popstate";function XS(e){e===void 0&&(e={});function n(r,l){let{pathname:o,search:i,hash:s}=r.location;return oi("",{pathname:o,search:i,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(r,l){return typeof l=="string"?l:Ia(l)}return ek(n,t,null,e)}function Te(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Rl(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function JS(){return Math.random().toString(36).substr(2,8)}function H2(e,n){return{usr:e.state,key:e.key,idx:n}}function oi(e,n,t,r){return t===void 0&&(t=null),Re({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?wr(n):n,{state:t,key:n&&n.key||r||JS()})}function Ia(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function wr(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function ek(e,n,t,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:o=!1}=r,i=l.history,s=un.Pop,u=null,p=g();p==null&&(p=0,i.replaceState(Re({},i.state,{idx:p}),""));function g(){return(i.state||{idx:null}).idx}function y(){s=un.Pop;let M=g(),w=M==null?null:M-p;p=M,u&&u({action:s,location:S.location,delta:w})}function C(M,w){s=un.Push;let m=oi(S.location,M,w);t&&t(m,M),p=g()+1;let b=H2(m,p),v=S.createHref(m);try{i.pushState(b,"",v)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;l.location.assign(v)}o&&u&&u({action:s,location:S.location,delta:1})}function I(M,w){s=un.Replace;let m=oi(S.location,M,w);t&&t(m,M),p=g();let b=H2(m,p),v=S.createHref(m);i.replaceState(b,"",v),o&&u&&u({action:s,location:S.location,delta:0})}function E(M){let w=l.location.origin!=="null"?l.location.origin:l.location.href,m=typeof M=="string"?M:Ia(M);return Te(w,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,w)}let S={get action(){return s},get location(){return e(l,i)},listen(M){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(W2,y),u=M,()=>{l.removeEventListener(W2,y),u=null}},createHref(M){return n(l,M)},createURL:E,encodeLocation(M){let w=E(M);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:C,replace:I,go(M){return i.go(M)}};return S}var vn;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vn||(vn={}));const nk=new Set(["lazy","caseSensitive","path","id","index","children"]);function tk(e){return e.index===!0}function Ju(e,n,t,r){return t===void 0&&(t=[]),r===void 0&&(r={}),e.map((l,o)=>{let i=[...t,o],s=typeof l.id=="string"?l.id:i.join("-");if(Te(l.index!==!0||!l.children,"Cannot specify children on an index route"),Te(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),tk(l)){let u=Re({},l,n(l),{id:s});return r[s]=u,u}else{let u=Re({},l,n(l),{id:s,children:void 0});return r[s]=u,l.children&&(u.children=Ju(l.children,n,i,r)),u}})}function vl(e,n,t){t===void 0&&(t="/");let r=typeof n=="string"?wr(n):n,l=zl(r.pathname||"/",t);if(l==null)return null;let o=lg(e);rk(o);let i=null;for(let s=0;i==null&&s<o.length;++s)i=hk(o[s],mk(l));return i}function lg(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let l=(o,i,s)=>{let u={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};u.relativePath.startsWith("/")&&(Te(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let p=hr([r,u.relativePath]),g=t.concat(u);o.children&&o.children.length>0&&(Te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),lg(o.children,n,g,p)),!(o.path==null&&!o.index)&&n.push({path:p,score:dk(p,o.index),routesMeta:g})};return e.forEach((o,i)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))l(o,i);else for(let u of og(o.path))l(o,i,u)}),n}function og(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,l=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let i=og(r.join("/")),s=[];return s.push(...i.map(u=>u===""?o:[o,u].join("/"))),l&&s.push(...i),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function rk(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:uk(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const ak=/^:\w+$/,lk=3,ok=2,ik=1,sk=10,ck=-2,U2=e=>e==="*";function dk(e,n){let t=e.split("/"),r=t.length;return t.some(U2)&&(r+=ck),n&&(r+=ok),t.filter(l=>!U2(l)).reduce((l,o)=>l+(ak.test(o)?lk:o===""?ik:sk),r)}function uk(e,n){return e.length===n.length&&e.slice(0,-1).every((r,l)=>r===n[l])?e[e.length-1]-n[n.length-1]:0}function hk(e,n){let{routesMeta:t}=e,r={},l="/",o=[];for(let i=0;i<t.length;++i){let s=t[i],u=i===t.length-1,p=l==="/"?n:n.slice(l.length)||"/",g=pk({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},p);if(!g)return null;Object.assign(r,g.params);let y=s.route;o.push({params:r,pathname:hr([l,g.pathname]),pathnameBase:yk(hr([l,g.pathnameBase])),route:y}),g.pathnameBase!=="/"&&(l=hr([l,g.pathnameBase]))}return o}function pk(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=fk(e.path,e.caseSensitive,e.end),l=n.match(t);if(!l)return null;let o=l[0],i=o.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((p,g,y)=>{if(g==="*"){let C=s[y]||"";i=o.slice(0,o.length-C.length).replace(/(.)\/+$/,"$1")}return p[g]=gk(s[y]||"",g),p},{}),pathname:o,pathnameBase:i,pattern:e}}function fk(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Rl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),r]}function mk(e){try{return decodeURI(e)}catch(n){return Rl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function gk(e,n){try{return decodeURIComponent(e)}catch(t){return Rl(!1,'The value for the URL param "'+n+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),e}}function zl(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function vk(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:l=""}=typeof e=="string"?wr(e):e;return{pathname:t?t.startsWith("/")?t:bk(t,n):n,search:wk(r),hash:xk(l)}}function bk(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?t.length>1&&t.pop():l!=="."&&t.push(l)}),t.length>1?t.join("/"):"/"}function Wd(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ic(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Mp(e,n,t,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=wr(e):(l=Re({},e),Te(!l.pathname||!l.pathname.includes("?"),Wd("?","pathname","search",l)),Te(!l.pathname||!l.pathname.includes("#"),Wd("#","pathname","hash",l)),Te(!l.search||!l.search.includes("#"),Wd("#","search","hash",l)));let o=e===""||l.pathname==="",i=o?"/":l.pathname,s;if(r||i==null)s=t;else{let y=n.length-1;if(i.startsWith("..")){let C=i.split("/");for(;C[0]==="..";)C.shift(),y-=1;l.pathname=C.join("/")}s=y>=0?n[y]:"/"}let u=vk(l,s),p=i&&i!=="/"&&i.endsWith("/"),g=(o||i===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(p||g)&&(u.pathname+="/"),u}const hr=e=>e.join("/").replace(/\/\/+/g,"/"),yk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),wk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Pp{constructor(n,t,r,l){l===void 0&&(l=!1),this.status=n,this.statusText=t||"",this.internal=l,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function ig(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const sg=["post","put","patch","delete"],Ck=new Set(sg),Sk=["get",...sg],kk=new Set(Sk),Tk=new Set([301,302,303,307,308]),Lk=new Set([307,308]),Hd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},_k={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},V2={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},cg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nk=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function $k(e){const n=e.window?e.window:typeof window<"u"?window:void 0,t=typeof n<"u"&&typeof n.document<"u"&&typeof n.document.createElement<"u",r=!t;Te(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let l;if(e.mapRouteProperties)l=e.mapRouteProperties;else if(e.detectErrorBoundary){let O=e.detectErrorBoundary;l=B=>({hasErrorBoundary:O(B)})}else l=Nk;let o={},i=Ju(e.routes,l,void 0,o),s,u=e.basename||"/",p=Re({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),g=null,y=new Set,C=null,I=null,E=null,S=e.hydrationData!=null,M=vl(i,e.history.location,u),w=null;if(M==null){let O=At(404,{pathname:e.history.location.pathname}),{matches:B,route:U}=X2(i);M=B,w={[U.id]:O}}let m=!M.some(O=>O.route.lazy)&&(!M.some(O=>O.route.loader)||e.hydrationData!=null),b,v={historyAction:e.history.action,location:e.history.location,matches:M,initialized:m,navigation:Hd,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||w,fetchers:new Map,blockers:new Map},_=un.Pop,T=!1,A,F=!1,z=!1,Z=[],fe=[],de=new Map,We=0,ln=-1,Ye=new Map,je=new Set,Ze=new Map,W=new Map,q=new Map,J=!1;function ie(){return g=e.history.listen(O=>{let{action:B,location:U,delta:K}=O;if(J){J=!1;return}Rl(q.size===0||K!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ce=Jl({currentLocation:v.location,nextLocation:U,historyAction:B});if(ce&&K!=null){J=!0,e.history.go(K*-1),la(ce,{state:"blocked",location:U,proceed(){la(ce,{state:"proceeding",proceed:void 0,reset:void 0,location:U}),e.history.go(K)},reset(){xr(ce),ge({blockers:new Map(b.state.blockers)})}});return}return On(B,U)}),v.initialized||On(un.Pop,v.location),b}function me(){g&&g(),y.clear(),A&&A.abort(),v.fetchers.forEach((O,B)=>ql(B)),v.blockers.forEach((O,B)=>xr(B))}function zn(O){return y.add(O),()=>y.delete(O)}function ge(O){v=Re({},v,O),y.forEach(B=>B(v))}function nn(O,B){var U,K;let ce=v.actionData!=null&&v.navigation.formMethod!=null&&ir(v.navigation.formMethod)&&v.navigation.state==="loading"&&((U=O.state)==null?void 0:U._isRedirect)!==!0,ue;B.actionData?Object.keys(B.actionData).length>0?ue=B.actionData:ue=null:ce?ue=v.actionData:ue=null;let he=B.loaderData?Q2(v.loaderData,B.loaderData,B.matches||[],B.errors):v.loaderData;for(let[oe]of q)xr(oe);let pe=T===!0||v.navigation.formMethod!=null&&ir(v.navigation.formMethod)&&((K=O.state)==null?void 0:K._isRedirect)!==!0;s&&(i=s,s=void 0),ge(Re({},B,{actionData:ue,loaderData:he,historyAction:_,location:O,initialized:!0,navigation:Hd,revalidation:"idle",restoreScrollPosition:Li(O,B.matches||v.matches),preventScrollReset:pe,blockers:new Map(v.blockers)})),F||_===un.Pop||(_===un.Push?e.history.push(O,O.state):_===un.Replace&&e.history.replace(O,O.state)),_=un.Pop,T=!1,F=!1,z=!1,Z=[],fe=[]}async function qe(O,B){if(typeof O=="number"){e.history.go(O);return}let U=eh(v.location,v.matches,u,p.v7_prependBasename,O,B==null?void 0:B.fromRouteId,B==null?void 0:B.relative),{path:K,submission:ce,error:ue}=G2(p.v7_normalizeFormMethod,!1,U,B),he=v.location,pe=oi(v.location,K,B&&B.state);pe=Re({},pe,e.history.encodeLocation(pe));let oe=B&&B.replace!=null?B.replace:void 0,Ne=un.Push;oe===!0?Ne=un.Replace:oe===!1||ce!=null&&ir(ce.formMethod)&&ce.formAction===v.location.pathname+v.location.search&&(Ne=un.Replace);let Ae=B&&"preventScrollReset"in B?B.preventScrollReset===!0:void 0,wn=Jl({currentLocation:he,nextLocation:pe,historyAction:Ne});if(wn){la(wn,{state:"blocked",location:pe,proceed(){la(wn,{state:"proceeding",proceed:void 0,reset:void 0,location:pe}),qe(O,B)},reset(){xr(wn),ge({blockers:new Map(v.blockers)})}});return}return await On(Ne,pe,{submission:ce,pendingError:ue,preventScrollReset:Ae,replace:B&&B.replace})}function fn(){if(Zl(),ge({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){On(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}On(_||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function On(O,B,U){A&&A.abort(),A=null,_=O,F=(U&&U.startUninterruptedRevalidation)===!0,Ti(v.location,v.matches),T=(U&&U.preventScrollReset)===!0;let K=s||i,ce=U&&U.overrideNavigation,ue=vl(K,B,u);if(!ue){let cn=At(404,{pathname:B.pathname}),{matches:mn,route:yt}=X2(K);Ba(),nn(B,{matches:mn,loaderData:{},errors:{[yt.id]:cn}});return}if(v.initialized&&!z&&Rk(v.location,B)&&!(U&&U.submission&&ir(U.submission.formMethod))){nn(B,{matches:ue});return}A=new AbortController;let he=bo(e.history,B,A.signal,U&&U.submission),pe,oe;if(U&&U.pendingError)oe={[bl(ue).route.id]:U.pendingError};else if(U&&U.submission&&ir(U.submission.formMethod)){let cn=await ea(he,B,U.submission,ue,{replace:U.replace});if(cn.shortCircuited)return;pe=cn.pendingActionData,oe=cn.pendingActionError,ce=Re({state:"loading",location:B},U.submission),he=new Request(he.url,{signal:he.signal})}let{shortCircuited:Ne,loaderData:Ae,errors:wn}=await na(he,B,ue,ce,U&&U.submission,U&&U.fetcherSubmission,U&&U.replace,pe,oe);Ne||(A=null,nn(B,Re({matches:ue},pe?{actionData:pe}:{},{loaderData:Ae,errors:wn})))}async function ea(O,B,U,K,ce){Zl();let ue=Re({state:"submitting",location:B},U);ge({navigation:ue});let he,pe=nh(K,B);if(!pe.route.action&&!pe.route.lazy)he={type:vn.error,error:At(405,{method:O.method,pathname:B.pathname,routeId:pe.route.id})};else if(he=await vo("action",O,pe,K,o,l,u),O.signal.aborted)return{shortCircuited:!0};if(Tl(he)){let oe;return ce&&ce.replace!=null?oe=ce.replace:oe=he.location===v.location.pathname+v.location.search,await ra(v,he,{submission:U,replace:oe}),{shortCircuited:!0}}if(Bo(he)){let oe=bl(K,pe.route.id);return(ce&&ce.replace)!==!0&&(_=un.Push),{pendingActionData:{},pendingActionError:{[oe.route.id]:he.error}}}if(xa(he))throw At(400,{type:"defer-action"});return{pendingActionData:{[pe.route.id]:he.data}}}async function na(O,B,U,K,ce,ue,he,pe,oe){let Ne=K;Ne||(Ne=Re({state:"loading",location:B,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ce));let Ae=ce||ue?ce||ue:Ne.formMethod&&Ne.formAction&&Ne.formData&&Ne.formEncType?{formMethod:Ne.formMethod,formAction:Ne.formAction,formData:Ne.formData,formEncType:Ne.formEncType}:void 0,wn=s||i,[cn,mn]=Y2(e.history,v,U,Ae,B,z,Z,fe,Ze,wn,u,pe,oe);if(Ba(ze=>!(U&&U.some(Kn=>Kn.route.id===ze))||cn&&cn.some(Kn=>Kn.route.id===ze)),cn.length===0&&mn.length===0){let ze=Ql();return nn(B,Re({matches:U,loaderData:{},errors:oe||null},pe?{actionData:pe}:{},ze?{fetchers:new Map(v.fetchers)}:{})),{shortCircuited:!0}}if(!F){mn.forEach(Kn=>{let tr=v.fetchers.get(Kn.key),gn={state:"loading",data:tr&&tr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(Kn.key,gn)});let ze=pe||v.actionData;ge(Re({navigation:Ne},ze?Object.keys(ze).length===0?{actionData:null}:{actionData:ze}:{},mn.length>0?{fetchers:new Map(v.fetchers)}:{}))}ln=++We,mn.forEach(ze=>{ze.controller&&de.set(ze.key,ze.controller)});let yt=()=>mn.forEach(ze=>nr(ze.key));A&&A.signal.addEventListener("abort",yt);let{results:oa,loaderResults:eo,fetcherResults:Da}=await Ci(v.matches,U,cn,mn,O);if(O.signal.aborted)return{shortCircuited:!0};A&&A.signal.removeEventListener("abort",yt),mn.forEach(ze=>de.delete(ze.key));let Nt=J2(oa);if(Nt)return await ra(v,Nt,{replace:he}),{shortCircuited:!0};let{loaderData:ia,errors:ja}=K2(v,U,cn,eo,oe,mn,Da,W);W.forEach((ze,Kn)=>{ze.subscribe(tr=>{(tr||ze.done)&&W.delete(Kn)})});let no=Ql(),to=Xl(ln),za=no||to||mn.length>0;return Re({loaderData:ia,errors:ja},za?{fetchers:new Map(v.fetchers)}:{})}function er(O){return v.fetchers.get(O)||_k}function Gl(O,B,U,K){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");de.has(O)&&nr(O);let ce=s||i,ue=eh(v.location,v.matches,u,p.v7_prependBasename,U,B,K==null?void 0:K.relative),he=vl(ce,ue,u);if(!he){aa(O,B,At(404,{pathname:ue}));return}let{path:pe,submission:oe}=G2(p.v7_normalizeFormMethod,!0,ue,K),Ne=nh(he,pe);if(T=(K&&K.preventScrollReset)===!0,oe&&ir(oe.formMethod)){ta(O,B,pe,Ne,he,oe);return}Ze.set(O,{routeId:B,path:pe}),Yl(O,B,pe,Ne,he,oe)}async function ta(O,B,U,K,ce,ue){if(Zl(),Ze.delete(O),!K.route.action&&!K.route.lazy){let gn=At(405,{method:ue.formMethod,pathname:U,routeId:B});aa(O,B,gn);return}let he=v.fetchers.get(O),pe=Re({state:"submitting"},ue,{data:he&&he.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(O,pe),ge({fetchers:new Map(v.fetchers)});let oe=new AbortController,Ne=bo(e.history,U,oe.signal,ue);de.set(O,oe);let Ae=await vo("action",Ne,K,ce,o,l,u);if(Ne.signal.aborted){de.get(O)===oe&&de.delete(O);return}if(Tl(Ae)){de.delete(O),je.add(O);let gn=Re({state:"loading"},ue,{data:void 0," _hasFetcherDoneAnything ":!0});return v.fetchers.set(O,gn),ge({fetchers:new Map(v.fetchers)}),ra(v,Ae,{submission:ue,isFetchActionRedirect:!0})}if(Bo(Ae)){aa(O,B,Ae.error);return}if(xa(Ae))throw At(400,{type:"defer-action"});let wn=v.navigation.location||v.location,cn=bo(e.history,wn,oe.signal),mn=s||i,yt=v.navigation.state!=="idle"?vl(mn,v.navigation.location,u):v.matches;Te(yt,"Didn't find any matches after fetcher action");let oa=++We;Ye.set(O,oa);let eo=Re({state:"loading",data:Ae.data},ue,{" _hasFetcherDoneAnything ":!0});v.fetchers.set(O,eo);let[Da,Nt]=Y2(e.history,v,yt,ue,wn,z,Z,fe,Ze,mn,u,{[K.route.id]:Ae.data},void 0);Nt.filter(gn=>gn.key!==O).forEach(gn=>{let ro=gn.key,_i=v.fetchers.get(ro),Ni={state:"loading",data:_i&&_i.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(ro,Ni),gn.controller&&de.set(ro,gn.controller)}),ge({fetchers:new Map(v.fetchers)});let ia=()=>Nt.forEach(gn=>nr(gn.key));oe.signal.addEventListener("abort",ia);let{results:ja,loaderResults:no,fetcherResults:to}=await Ci(v.matches,yt,Da,Nt,cn);if(oe.signal.aborted)return;oe.signal.removeEventListener("abort",ia),Ye.delete(O),de.delete(O),Nt.forEach(gn=>de.delete(gn.key));let za=J2(ja);if(za)return ra(v,za);let{loaderData:ze,errors:Kn}=K2(v,v.matches,Da,no,void 0,Nt,to,W);if(v.fetchers.has(O)){let gn={state:"idle",data:Ae.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(O,gn)}let tr=Xl(oa);v.navigation.state==="loading"&&oa>ln?(Te(_,"Expected pending action"),A&&A.abort(),nn(v.navigation.location,{matches:yt,loaderData:ze,errors:Kn,fetchers:new Map(v.fetchers)})):(ge(Re({errors:Kn,loaderData:Q2(v.loaderData,ze,yt,Kn)},tr||Nt.length>0?{fetchers:new Map(v.fetchers)}:{})),z=!1)}async function Yl(O,B,U,K,ce,ue){let he=v.fetchers.get(O),pe=Re({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ue,{data:he&&he.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(O,pe),ge({fetchers:new Map(v.fetchers)});let oe=new AbortController,Ne=bo(e.history,U,oe.signal);de.set(O,oe);let Ae=await vo("loader",Ne,K,ce,o,l,u);if(xa(Ae)&&(Ae=await pg(Ae,Ne.signal,!0)||Ae),de.get(O)===oe&&de.delete(O),Ne.signal.aborted)return;if(Tl(Ae)){je.add(O),await ra(v,Ae);return}if(Bo(Ae)){let cn=bl(v.matches,B);v.fetchers.delete(O),ge({fetchers:new Map(v.fetchers),errors:{[cn.route.id]:Ae.error}});return}Te(!xa(Ae),"Unhandled fetcher deferred data");let wn={state:"idle",data:Ae.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(O,wn),ge({fetchers:new Map(v.fetchers)})}async function ra(O,B,U){let{submission:K,replace:ce,isFetchActionRedirect:ue}=U===void 0?{}:U;B.revalidate&&(z=!0);let he=oi(O.location,B.location,Re({_isRedirect:!0},ue?{_isFetchActionRedirect:!0}:{}));if(Te(he,"Expected a location on the redirect navigation"),cg.test(B.location)&&t){let cn=e.history.createURL(B.location),mn=zl(cn.pathname,u)==null;if(n.location.origin!==cn.origin||mn){ce?n.location.replace(B.location):n.location.assign(B.location);return}}A=null;let pe=ce===!0?un.Replace:un.Push,{formMethod:oe,formAction:Ne,formEncType:Ae,formData:wn}=O.navigation;!K&&oe&&Ne&&wn&&Ae&&(K={formMethod:oe,formAction:Ne,formEncType:Ae,formData:wn}),Lk.has(B.status)&&K&&ir(K.formMethod)?await On(pe,he,{submission:Re({},K,{formAction:B.location}),preventScrollReset:T}):ue?await On(pe,he,{overrideNavigation:{state:"loading",location:he,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:K,preventScrollReset:T}):await On(pe,he,{overrideNavigation:{state:"loading",location:he,formMethod:K?K.formMethod:void 0,formAction:K?K.formAction:void 0,formEncType:K?K.formEncType:void 0,formData:K?K.formData:void 0},preventScrollReset:T})}async function Ci(O,B,U,K,ce){let ue=await Promise.all([...U.map(oe=>vo("loader",ce,oe,B,o,l,u)),...K.map(oe=>oe.matches&&oe.match&&oe.controller?vo("loader",bo(e.history,oe.path,oe.controller.signal),oe.match,oe.matches,o,l,u):{type:vn.error,error:At(404,{pathname:oe.path})})]),he=ue.slice(0,U.length),pe=ue.slice(U.length);return await Promise.all([e0(O,U,he,he.map(()=>ce.signal),!1,v.loaderData),e0(O,K.map(oe=>oe.match),pe,K.map(oe=>oe.controller?oe.controller.signal:null),!0)]),{results:ue,loaderResults:he,fetcherResults:pe}}function Zl(){z=!0,Z.push(...Ba()),Ze.forEach((O,B)=>{de.has(B)&&(fe.push(B),nr(B))})}function aa(O,B,U){let K=bl(v.matches,B);ql(O),ge({errors:{[K.route.id]:U},fetchers:new Map(v.fetchers)})}function ql(O){let B=v.fetchers.get(O);de.has(O)&&!(B&&B.state==="loading"&&Ye.has(O))&&nr(O),Ze.delete(O),Ye.delete(O),je.delete(O),v.fetchers.delete(O)}function nr(O){let B=de.get(O);Te(B,"Expected fetch controller: "+O),B.abort(),de.delete(O)}function Kl(O){for(let B of O){let K={state:"idle",data:er(B).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(B,K)}}function Ql(){let O=[],B=!1;for(let U of je){let K=v.fetchers.get(U);Te(K,"Expected fetcher: "+U),K.state==="loading"&&(je.delete(U),O.push(U),B=!0)}return Kl(O),B}function Xl(O){let B=[];for(let[U,K]of Ye)if(K<O){let ce=v.fetchers.get(U);Te(ce,"Expected fetcher: "+U),ce.state==="loading"&&(nr(U),Ye.delete(U),B.push(U))}return Kl(B),B.length>0}function Si(O,B){let U=v.blockers.get(O)||V2;return q.get(O)!==B&&q.set(O,B),U}function xr(O){v.blockers.delete(O),q.delete(O)}function la(O,B){let U=v.blockers.get(O)||V2;Te(U.state==="unblocked"&&B.state==="blocked"||U.state==="blocked"&&B.state==="blocked"||U.state==="blocked"&&B.state==="proceeding"||U.state==="blocked"&&B.state==="unblocked"||U.state==="proceeding"&&B.state==="unblocked","Invalid blocker state transition: "+U.state+" -> "+B.state),v.blockers.set(O,B),ge({blockers:new Map(v.blockers)})}function Jl(O){let{currentLocation:B,nextLocation:U,historyAction:K}=O;if(q.size===0)return;q.size>1&&Rl(!1,"A router only supports one blocker at a time");let ce=Array.from(q.entries()),[ue,he]=ce[ce.length-1],pe=v.blockers.get(ue);if(!(pe&&pe.state==="proceeding")&&he({currentLocation:B,nextLocation:U,historyAction:K}))return ue}function Ba(O){let B=[];return W.forEach((U,K)=>{(!O||O(K))&&(U.cancel(),B.push(K),W.delete(K))}),B}function ki(O,B,U){if(C=O,E=B,I=U||(K=>K.key),!S&&v.navigation===Hd){S=!0;let K=Li(v.location,v.matches);K!=null&&ge({restoreScrollPosition:K})}return()=>{C=null,E=null,I=null}}function Ti(O,B){if(C&&I&&E){let U=B.map(ce=>n0(ce,v.loaderData)),K=I(O,U)||O.key;C[K]=E()}}function Li(O,B){if(C&&I&&E){let U=B.map(ue=>n0(ue,v.loaderData)),K=I(O,U)||O.key,ce=C[K];if(typeof ce=="number")return ce}return null}function zc(O){o={},s=Ju(O,l,void 0,o)}return b={get basename(){return u},get state(){return v},get routes(){return i},initialize:ie,subscribe:zn,enableScrollRestoration:ki,navigate:qe,fetch:Gl,revalidate:fn,createHref:O=>e.history.createHref(O),encodeLocation:O=>e.history.encodeLocation(O),getFetcher:er,deleteFetcher:ql,dispose:me,getBlocker:Si,deleteBlocker:xr,_internalFetchControllers:de,_internalActiveDeferreds:W,_internalSetRoutes:zc},b}function Ek(e){return e!=null&&"formData"in e}function eh(e,n,t,r,l,o,i){let s,u;if(o!=null&&i!=="path"){s=[];for(let g of n)if(s.push(g),g.route.id===o){u=g;break}}else s=n,u=n[n.length-1];let p=Mp(l||".",Ic(s).map(g=>g.pathnameBase),zl(e.pathname,t)||e.pathname,i==="path");return l==null&&(p.search=e.search,p.hash=e.hash),(l==null||l===""||l===".")&&u&&u.route.index&&!Rp(p.search)&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),r&&t!=="/"&&(p.pathname=p.pathname==="/"?t:hr([t,p.pathname])),Ia(p)}function G2(e,n,t,r){if(!r||!Ek(r))return{path:t};if(r.formMethod&&!Fk(r.formMethod))return{path:t,error:At(405,{method:r.formMethod})};let l;if(r.formData){let s=r.formMethod||"get";if(l={formMethod:e?s.toUpperCase():s.toLowerCase(),formAction:hg(t),formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:r.formData},ir(l.formMethod))return{path:t,submission:l}}let o=wr(t),i=ug(r.formData);return n&&o.search&&Rp(o.search)&&i.append("index",""),o.search="?"+i,{path:Ia(o),submission:l}}function Ik(e,n){let t=e;if(n){let r=e.findIndex(l=>l.route.id===n);r>=0&&(t=e.slice(0,r))}return t}function Y2(e,n,t,r,l,o,i,s,u,p,g,y,C){let I=C?Object.values(C)[0]:y?Object.values(y)[0]:void 0,E=e.createURL(n.location),S=e.createURL(l),M=C?Object.keys(C)[0]:void 0,m=Ik(t,M).filter((v,_)=>{if(v.route.lazy)return!0;if(v.route.loader==null)return!1;if(Mk(n.loaderData,n.matches[_],v)||i.some(F=>F===v.route.id))return!0;let T=n.matches[_],A=v;return Z2(v,Re({currentUrl:E,currentParams:T.params,nextUrl:S,nextParams:A.params},r,{actionResult:I,defaultShouldRevalidate:o||E.pathname+E.search===S.pathname+S.search||E.search!==S.search||dg(T,A)}))}),b=[];return u.forEach((v,_)=>{if(!t.some(z=>z.route.id===v.routeId))return;let T=vl(p,v.path,g);if(!T){b.push({key:_,routeId:v.routeId,path:v.path,matches:null,match:null,controller:null});return}let A=nh(T,v.path);if(s.includes(_)){b.push({key:_,routeId:v.routeId,path:v.path,matches:T,match:A,controller:new AbortController});return}Z2(A,Re({currentUrl:E,currentParams:n.matches[n.matches.length-1].params,nextUrl:S,nextParams:t[t.length-1].params},r,{actionResult:I,defaultShouldRevalidate:o}))&&b.push({key:_,routeId:v.routeId,path:v.path,matches:T,match:A,controller:new AbortController})}),[m,b]}function Mk(e,n,t){let r=!n||t.route.id!==n.route.id,l=e[t.route.id]===void 0;return r||l}function dg(e,n){let t=e.route.path;return e.pathname!==n.pathname||t!=null&&t.endsWith("*")&&e.params["*"]!==n.params["*"]}function Z2(e,n){if(e.route.shouldRevalidate){let t=e.route.shouldRevalidate(n);if(typeof t=="boolean")return t}return n.defaultShouldRevalidate}async function q2(e,n,t){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let l=t[e.id];Te(l,"No route found in manifest");let o={};for(let i in r){let u=l[i]!==void 0&&i!=="hasErrorBoundary";Rl(!u,'Route "'+l.id+'" has a static property "'+i+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+i+'" will be ignored.')),!u&&!nk.has(i)&&(o[i]=r[i])}Object.assign(l,o),Object.assign(l,Re({},n(l),{lazy:void 0}))}async function vo(e,n,t,r,l,o,i,s,u,p){s===void 0&&(s=!1),u===void 0&&(u=!1);let g,y,C,I=M=>{let w,m=new Promise((b,v)=>w=v);return C=()=>w(),n.signal.addEventListener("abort",C),Promise.race([M({request:n,params:t.params,context:p}),m])};try{let M=t.route[e];if(t.route.lazy)if(M)y=(await Promise.all([I(M),q2(t.route,o,l)]))[0];else if(await q2(t.route,o,l),M=t.route[e],M)y=await I(M);else if(e==="action"){let w=new URL(n.url),m=w.pathname+w.search;throw At(405,{method:n.method,pathname:m,routeId:t.route.id})}else return{type:vn.data,data:void 0};else if(M)y=await I(M);else{let w=new URL(n.url),m=w.pathname+w.search;throw At(404,{pathname:m})}Te(y!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+t.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(M){g=vn.error,y=M}finally{C&&n.signal.removeEventListener("abort",C)}if(Ok(y)){let M=y.status;if(Tk.has(M)){let b=y.headers.get("Location");if(Te(b,"Redirects returned/thrown from loaders/actions must have a Location header"),!cg.test(b))b=eh(new URL(n.url),r.slice(0,r.indexOf(t)+1),i,!0,b);else if(!s){let v=new URL(n.url),_=b.startsWith("//")?new URL(v.protocol+b):new URL(b),T=zl(_.pathname,i)!=null;_.origin===v.origin&&T&&(b=_.pathname+_.search+_.hash)}if(s)throw y.headers.set("Location",b),y;return{type:vn.redirect,status:M,location:b,revalidate:y.headers.get("X-Remix-Revalidate")!==null}}if(u)throw{type:g||vn.data,response:y};let w,m=y.headers.get("Content-Type");return m&&/\bapplication\/json\b/.test(m)?w=await y.json():w=await y.text(),g===vn.error?{type:g,error:new Pp(M,y.statusText,w),headers:y.headers}:{type:vn.data,data:w,statusCode:y.status,headers:y.headers}}if(g===vn.error)return{type:g,error:y};if(Ak(y)){var E,S;return{type:vn.deferred,deferredData:y,statusCode:(E=y.init)==null?void 0:E.status,headers:((S=y.init)==null?void 0:S.headers)&&new Headers(y.init.headers)}}return{type:vn.data,data:y}}function bo(e,n,t,r){let l=e.createURL(hg(n)).toString(),o={signal:t};if(r&&ir(r.formMethod)){let{formMethod:i,formEncType:s,formData:u}=r;o.method=i.toUpperCase(),o.body=s==="application/x-www-form-urlencoded"?ug(u):u}return new Request(l,o)}function ug(e){let n=new URLSearchParams;for(let[t,r]of e.entries())n.append(t,r instanceof File?r.name:r);return n}function Pk(e,n,t,r,l){let o={},i=null,s,u=!1,p={};return t.forEach((g,y)=>{let C=n[y].route.id;if(Te(!Tl(g),"Cannot handle redirect results in processLoaderData"),Bo(g)){let I=bl(e,C),E=g.error;r&&(E=Object.values(r)[0],r=void 0),i=i||{},i[I.route.id]==null&&(i[I.route.id]=E),o[C]=void 0,u||(u=!0,s=ig(g.error)?g.error.status:500),g.headers&&(p[C]=g.headers)}else xa(g)?(l.set(C,g.deferredData),o[C]=g.deferredData.data):o[C]=g.data,g.statusCode!=null&&g.statusCode!==200&&!u&&(s=g.statusCode),g.headers&&(p[C]=g.headers)}),r&&(i=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:i,statusCode:s||200,loaderHeaders:p}}function K2(e,n,t,r,l,o,i,s){let{loaderData:u,errors:p}=Pk(n,t,r,l,s);for(let g=0;g<o.length;g++){let{key:y,match:C,controller:I}=o[g];Te(i!==void 0&&i[g]!==void 0,"Did not find corresponding fetcher result");let E=i[g];if(!(I&&I.signal.aborted))if(Bo(E)){let S=bl(e.matches,C==null?void 0:C.route.id);p&&p[S.route.id]||(p=Re({},p,{[S.route.id]:E.error})),e.fetchers.delete(y)}else if(Tl(E))Te(!1,"Unhandled fetcher revalidation redirect");else if(xa(E))Te(!1,"Unhandled fetcher deferred data");else{let S={state:"idle",data:E.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(y,S)}}return{loaderData:u,errors:p}}function Q2(e,n,t,r){let l=Re({},n);for(let o of t){let i=o.route.id;if(n.hasOwnProperty(i)?n[i]!==void 0&&(l[i]=n[i]):e[i]!==void 0&&o.route.loader&&(l[i]=e[i]),r&&r.hasOwnProperty(i))break}return l}function bl(e,n){return(n?e.slice(0,e.findIndex(r=>r.route.id===n)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function X2(e){let n=e.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:n}],route:n}}function At(e,n){let{pathname:t,routeId:r,method:l,type:o}=n===void 0?{}:n,i="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(i="Bad Request",l&&t&&r?s="You made a "+l+' request to "'+t+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(s="defer() is not supported in actions")):e===403?(i="Forbidden",s='Route "'+r+'" does not match URL "'+t+'"'):e===404?(i="Not Found",s='No route matches URL "'+t+'"'):e===405&&(i="Method Not Allowed",l&&t&&r?s="You made a "+l.toUpperCase()+' request to "'+t+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":l&&(s='Invalid request method "'+l.toUpperCase()+'"')),new Pp(e||500,i,new Error(s),!0)}function J2(e){for(let n=e.length-1;n>=0;n--){let t=e[n];if(Tl(t))return t}}function hg(e){let n=typeof e=="string"?wr(e):e;return Ia(Re({},n,{hash:""}))}function Rk(e,n){return e.pathname!==n.pathname||e.search!==n.search?!1:e.hash===""?n.hash!=="":e.hash===n.hash?!0:n.hash!==""}function xa(e){return e.type===vn.deferred}function Bo(e){return e.type===vn.error}function Tl(e){return(e&&e.type)===vn.redirect}function Ak(e){let n=e;return n&&typeof n=="object"&&typeof n.data=="object"&&typeof n.subscribe=="function"&&typeof n.cancel=="function"&&typeof n.resolveData=="function"}function Ok(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Fk(e){return kk.has(e.toLowerCase())}function ir(e){return Ck.has(e.toLowerCase())}async function e0(e,n,t,r,l,o){for(let i=0;i<t.length;i++){let s=t[i],u=n[i];if(!u)continue;let p=e.find(y=>y.route.id===u.route.id),g=p!=null&&!dg(p,u)&&(o&&o[u.route.id])!==void 0;if(xa(s)&&(l||g)){let y=r[i];Te(y,"Expected an AbortSignal for revalidating fetcher deferred result"),await pg(s,y,l).then(C=>{C&&(t[i]=C||t[i])})}}}async function pg(e,n,t){if(t===void 0&&(t=!1),!await e.deferredData.resolveData(n)){if(t)try{return{type:vn.data,data:e.deferredData.unwrappedData}}catch(l){return{type:vn.error,error:l}}return{type:vn.data,data:e.deferredData.data}}}function Rp(e){return new URLSearchParams(e).getAll("index").some(n=>n==="")}function n0(e,n){let{route:t,pathname:r,params:l}=e;return{id:t.id,pathname:r,params:l,data:n[t.id],handle:t.handle}}function nh(e,n){let t=typeof n=="string"?wr(n).search:n.search;if(e[e.length-1].route.index&&Rp(t||""))return e[e.length-1];let r=Ic(e);return r[r.length-1]}/**
 * React Router v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tc(){return tc=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},tc.apply(this,arguments)}const Mc=D.createContext(null),Ap=D.createContext(null),Oa=D.createContext(null),Pc=D.createContext(null),Jr=D.createContext({outlet:null,matches:[],isDataRoute:!1}),fg=D.createContext(null);function Bk(e,n){let{relative:t}=n===void 0?{}:n;wi()||Te(!1);let{basename:r,navigator:l}=D.useContext(Oa),{hash:o,pathname:i,search:s}=Op(e,{relative:t}),u=i;return r!=="/"&&(u=i==="/"?r:hr([r,i])),l.createHref({pathname:u,search:s,hash:o})}function wi(){return D.useContext(Pc)!=null}function Wl(){return wi()||Te(!1),D.useContext(Pc).location}function mg(e){D.useContext(Oa).static||D.useLayoutEffect(e)}function Dk(){let{isDataRoute:e}=D.useContext(Jr);return e?Jk():jk()}function jk(){wi()||Te(!1);let e=D.useContext(Mc),{basename:n,navigator:t}=D.useContext(Oa),{matches:r}=D.useContext(Jr),{pathname:l}=Wl(),o=JSON.stringify(Ic(r).map(u=>u.pathnameBase)),i=D.useRef(!1);return mg(()=>{i.current=!0}),D.useCallback(function(u,p){if(p===void 0&&(p={}),!i.current)return;if(typeof u=="number"){t.go(u);return}let g=Mp(u,JSON.parse(o),l,p.relative==="path");e==null&&n!=="/"&&(g.pathname=g.pathname==="/"?n:hr([n,g.pathname])),(p.replace?t.replace:t.push)(g,p.state,p)},[n,t,o,l,e])}const zk=D.createContext(null);function Wk(e){let n=D.useContext(Jr).outlet;return n&&D.createElement(zk.Provider,{value:e},n)}function Op(e,n){let{relative:t}=n===void 0?{}:n,{matches:r}=D.useContext(Jr),{pathname:l}=Wl(),o=JSON.stringify(Ic(r).map(i=>i.pathnameBase));return D.useMemo(()=>Mp(e,JSON.parse(o),l,t==="path"),[e,o,l,t])}function Hk(e,n,t){wi()||Te(!1);let{navigator:r}=D.useContext(Oa),{matches:l}=D.useContext(Jr),o=l[l.length-1],i=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=Wl(),p;if(n){var g;let S=typeof n=="string"?wr(n):n;s==="/"||(g=S.pathname)!=null&&g.startsWith(s)||Te(!1),p=S}else p=u;let y=p.pathname||"/",C=s==="/"?y:y.slice(s.length)||"/",I=vl(e,{pathname:C}),E=Zk(I&&I.map(S=>Object.assign({},S,{params:Object.assign({},i,S.params),pathname:hr([s,r.encodeLocation?r.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?s:hr([s,r.encodeLocation?r.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),l,t);return n&&E?D.createElement(Pc.Provider,{value:{location:tc({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:un.Pop}},E):E}function Uk(){let e=Xk(),n=ig(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},n),t?D.createElement("pre",{style:l},t):null,o)}const Vk=D.createElement(Uk,null);class Gk extends D.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error||t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error?D.createElement(Jr.Provider,{value:this.props.routeContext},D.createElement(fg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yk(e){let{routeContext:n,match:t,children:r}=e,l=D.useContext(Mc);return l&&l.static&&l.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=t.route.id),D.createElement(Jr.Provider,{value:n},r)}function Zk(e,n,t){var r;if(n===void 0&&(n=[]),t===void 0&&(t=null),e==null){var l;if((l=t)!=null&&l.errors)e=t.matches;else return null}let o=e,i=(r=t)==null?void 0:r.errors;if(i!=null){let s=o.findIndex(u=>u.route.id&&(i==null?void 0:i[u.route.id]));s>=0||Te(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,u,p)=>{let g=u.route.id?i==null?void 0:i[u.route.id]:null,y=null;t&&(y=u.route.errorElement||Vk);let C=n.concat(o.slice(0,p+1)),I=()=>{let E;return g?E=y:u.route.Component?E=D.createElement(u.route.Component,null):u.route.element?E=u.route.element:E=s,D.createElement(Yk,{match:u,routeContext:{outlet:s,matches:C,isDataRoute:t!=null},children:E})};return t&&(u.route.ErrorBoundary||u.route.errorElement||p===0)?D.createElement(Gk,{location:t.location,revalidation:t.revalidation,component:y,error:g,children:I(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):I()},null)}var th;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(th||(th={}));var ii;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(ii||(ii={}));function qk(e){let n=D.useContext(Mc);return n||Te(!1),n}function Kk(e){let n=D.useContext(Ap);return n||Te(!1),n}function Qk(e){let n=D.useContext(Jr);return n||Te(!1),n}function gg(e){let n=Qk(),t=n.matches[n.matches.length-1];return t.route.id||Te(!1),t.route.id}function Xk(){var e;let n=D.useContext(fg),t=Kk(ii.UseRouteError),r=gg(ii.UseRouteError);return n||((e=t.errors)==null?void 0:e[r])}function Jk(){let{router:e}=qk(th.UseNavigateStable),n=gg(ii.UseNavigateStable),t=D.useRef(!1);return mg(()=>{t.current=!0}),D.useCallback(function(l,o){o===void 0&&(o={}),t.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,tc({fromRouteId:n},o)))},[e,n])}const t0="startTransition";function eT(e){let{fallbackElement:n,router:t}=e,[r,l]=D.useState(t.state),o=D.useCallback(p=>{t0 in gf?gf[t0](()=>l(p)):l(p)},[l]);D.useLayoutEffect(()=>t.subscribe(o),[t,o]);let i=D.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:p=>t.navigate(p),push:(p,g,y)=>t.navigate(p,{state:g,preventScrollReset:y==null?void 0:y.preventScrollReset}),replace:(p,g,y)=>t.navigate(p,{replace:!0,state:g,preventScrollReset:y==null?void 0:y.preventScrollReset})}),[t]),s=t.basename||"/",u=D.useMemo(()=>({router:t,navigator:i,static:!1,basename:s}),[t,i,s]);return D.createElement(D.Fragment,null,D.createElement(Mc.Provider,{value:u},D.createElement(Ap.Provider,{value:r},D.createElement(rT,{basename:s,location:r.location,navigationType:r.historyAction,navigator:i},r.initialized?D.createElement(nT,{routes:t.routes,state:r}):n))),null)}function nT(e){let{routes:n,state:t}=e;return Hk(n,void 0,t)}function tT(e){return Wk(e.context)}function rT(e){let{basename:n="/",children:t=null,location:r,navigationType:l=un.Pop,navigator:o,static:i=!1}=e;wi()&&Te(!1);let s=n.replace(/^\/*/,"/"),u=D.useMemo(()=>({basename:s,navigator:o,static:i}),[s,o,i]);typeof r=="string"&&(r=wr(r));let{pathname:p="/",search:g="",hash:y="",state:C=null,key:I="default"}=r,E=D.useMemo(()=>{let S=zl(p,s);return S==null?null:{location:{pathname:S,search:g,hash:y,state:C,key:I},navigationType:l}},[s,p,g,y,C,I,l]);return E==null?null:D.createElement(Oa.Provider,{value:u},D.createElement(Pc.Provider,{children:t,value:E}))}var r0;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(r0||(r0={}));new Promise(()=>{});function aT(e){let n={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(n,{element:D.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(n,{errorElement:D.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),n}/**
 * React Router DOM v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Al(){return Al=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Al.apply(this,arguments)}function vg(e,n){if(e==null)return{};var t={},r=Object.keys(e),l,o;for(o=0;o<r.length;o++)l=r[o],!(n.indexOf(l)>=0)&&(t[l]=e[l]);return t}function lT(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function oT(e,n){return e.button===0&&(!n||n==="_self")&&!lT(e)}const iT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],sT=["aria-current","caseSensitive","className","end","style","to","children"];function cT(e,n){return $k({basename:n==null?void 0:n.basename,future:Al({},n==null?void 0:n.future,{v7_prependBasename:!0}),history:XS({window:n==null?void 0:n.window}),hydrationData:(n==null?void 0:n.hydrationData)||dT(),routes:e,mapRouteProperties:aT}).initialize()}function dT(){var e;let n=(e=window)==null?void 0:e.__staticRouterHydrationData;return n&&n.errors&&(n=Al({},n,{errors:uT(n.errors)})),n}function uT(e){if(!e)return null;let n=Object.entries(e),t={};for(let[r,l]of n)if(l&&l.__type==="RouteErrorResponse")t[r]=new Pp(l.status,l.statusText,l.data,l.internal===!0);else if(l&&l.__type==="Error"){let o=new Error(l.message);o.stack="",t[r]=o}else t[r]=l;return t}const hT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fT=D.forwardRef(function(n,t){let{onClick:r,relative:l,reloadDocument:o,replace:i,state:s,target:u,to:p,preventScrollReset:g}=n,y=vg(n,iT),{basename:C}=D.useContext(Oa),I,E=!1;if(typeof p=="string"&&pT.test(p)&&(I=p,hT))try{let m=new URL(window.location.href),b=p.startsWith("//")?new URL(m.protocol+p):new URL(p),v=zl(b.pathname,C);b.origin===m.origin&&v!=null?p=v+b.search+b.hash:E=!0}catch{}let S=Bk(p,{relative:l}),M=gT(p,{replace:i,state:s,target:u,preventScrollReset:g,relative:l});function w(m){r&&r(m),m.defaultPrevented||M(m)}return D.createElement("a",Al({},y,{href:I||S,onClick:E||o?r:w,ref:t,target:u}))}),mT=D.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:l=!1,className:o="",end:i=!1,style:s,to:u,children:p}=n,g=vg(n,sT),y=Op(u,{relative:g.relative}),C=Wl(),I=D.useContext(Ap),{navigator:E}=D.useContext(Oa),S=E.encodeLocation?E.encodeLocation(y).pathname:y.pathname,M=C.pathname,w=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;l||(M=M.toLowerCase(),w=w?w.toLowerCase():null,S=S.toLowerCase());let m=M===S||!i&&M.startsWith(S)&&M.charAt(S.length)==="/",b=w!=null&&(w===S||!i&&w.startsWith(S)&&w.charAt(S.length)==="/"),v=m?r:void 0,_;typeof o=="function"?_=o({isActive:m,isPending:b}):_=[o,m?"active":null,b?"pending":null].filter(Boolean).join(" ");let T=typeof s=="function"?s({isActive:m,isPending:b}):s;return D.createElement(fT,Al({},g,{"aria-current":v,className:_,ref:t,style:T,to:u}),typeof p=="function"?p({isActive:m,isPending:b}):p)});var a0;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(a0||(a0={}));var l0;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(l0||(l0={}));function gT(e,n){let{target:t,replace:r,state:l,preventScrollReset:o,relative:i}=n===void 0?{}:n,s=Dk(),u=Wl(),p=Op(e,{relative:i});return D.useCallback(g=>{if(oT(g,t)){g.preventDefault();let y=r!==void 0?r:Ia(u)===Ia(p);s(e,{replace:y,state:l,preventScrollReset:o,relative:i})}},[u,s,p,r,l,t,e,o,i])}const ae=({to:e,className:n="",exact:t,children:r,text:l,onClick:o,label:i,style:s})=>a(mT,{to:e,onClick:o,end:t&&"end",className:({isActive:u})=>`${n} ${u?"active":""}`,"aria-label":i,style:s,children:r||l}),vT=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Brand Colours"}),a("p",{children:"The palette is designed to be adjustable so that you can match it to your brand colors."}),a("h2",{children:"Brand Hue and Color"}),a(Dt,{code:ZS,caption:"Brand Color",language:"scss",expand:!0,children:c("p",{children:["You should pick a color that is closest to your brand color and adjust the hue to match it if necessary.  Then define that as the"," ",a("code",{children:"$brand-hue"})," and set the ",a("code",{children:"$brand-color"})," by name."]})}),a("h2",{children:"Multiple Brand Colors"}),a(Dt,{code:qS,caption:"Brand Colors",language:"scss",expand:!0,children:c("p",{children:["If you have multiple brand colors you can set them using the"," ",a("code",{children:"$brand-colors"})," variable.  You can call them whatever you like (we're using ",a("code",{children:"primary"}),", ",a("code",{children:"secondary"})," ","and ",a("code",{children:"tertiary"})," in this example). You should define one to be the primary ",a("code",{children:"$brand-color"})," and set the ",a("code",{children:"$brand-hue"})]})}),a("h2",{children:"Greyscale Colors"}),c(Dt,{code:KS,caption:"Greyscale Colors",language:"scss",expand:!0,children:[c("p",{children:["An important side-effect of setting ",a("code",{children:"$brand-hue"})," is that it will set the hue of the greyscale color ranges to match it."]}),c("p",{children:["If you want to use different hues for the greyscale color ranges then you can do that using the ",a("code",{children:"$grey-hue"}),","," ",a("code",{children:"$grey20-hue"})," and ",a("code",{children:"$grey40-hue"})," variables."]})]}),a("h2",{children:"Culling the Palette"}),c(Dt,{code:QS,caption:"Selecting Colors",language:"scss",expand:!0,children:[a("p",{children:"The chances are that you aren't going to need all of the colors defined in the standard palette.  You can reduce the size of the generated CSS file by excluding any that you don't need."}),c("p",{children:["Set the ",a("code",{children:"$color-names"})," variable to list those that you want to keep.  Note that ",a("code",{children:"red"}),", ",a("code",{children:"orange"}),","," ",a("code",{children:"green"}),", ",a("code",{children:"blue"})," and ",a("code",{children:"grey"})," are used by various components, including ",a(ae,{to:"/forms/",text:"forms"})," and"," ",a(ae,{to:"/components/alerts",text:"alerts"})," so you'll probably want to keep those."]})]})]}),bT=Object.freeze(Object.defineProperty({__proto__:null,default:vT},Symbol.toStringTag,{value:"Module"})),yT={bars:"M0 96C0 78 14 64 32 64H416c18 0 32 14 32 32s-14 32-32 32H32C14 128 0 114 0 96zM0 256c0-18 14-32 32-32H416c18 0 32 14 32 32s-14 32-32 32H32c-18 0-32-14-32-32zM448 416c0 18-14 32-32 32H32c-18 0-32-14-32-32s14-32 32-32H416c18 0 32 14 32 32z",check:"M486,91C499,104 499,127 486,140L212,422C198,435 177,435 163,422L26,281C13,267 13,245 26,231C39,217 61,217 75,231L187,347L438,91C451,77 473,77 486,91L486,91Z",cross:"M456,109C470,94 470,71 456,56C441,42 418,42 403,56L256,204L109,56C94,42 71,42 56,56C42,71 42,94 56,109L204,256L56,403C42,418 42,441 56,456C71,470 94,470 109,456L256,308L403,456C418,470 441,470 456,456C470,441 470,418 456,403L308,256L456,109Z",github:"M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z",info:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13 0-24-11-24-24s11-24 24-24h48c13 0 24 11 24 24v88h8c13 0 24 11 24 24s-11 24-24 24H216c-13 0-24-11-24-24s11-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",lock:"M159,133L159,226L301,226L301,133C301,94 269,62 230,62C191,62 159,94 159,133ZM101,226L101,133C101,62 159,4 230,4C301,4 359,62 359,133L359,226L373,226C404,226 430,252 430,283L430,455C430,486 404,512 373,512L87,512C56,512 30,486 30,455L30,283C30,252 56,226 87,226L101,226Z",pen:"M356,34L311,79L433,201L478,156C502,132 502,94 478,71L441,34C418,10 380,10 356,34L356,34ZM290,100L71,319C61,329 54,341 50,355L16,468C14,476 16,484 22,490C28,496 36,498 44,496L157,462C171,458 183,451 192,442L412,222L290,100Z",plus:"M292,56C292,36 276,20 256,20C236,20 220,36 220,56L220,220L56,220C36,220 20,236 20,256C20,276 36,292 56,292L220,292L220,456C220,476 236,492 256,492C276,492 292,476 292,456L292,292L456,292C476,292 492,276 492,256C492,236 476,220 456,220L292,220L292,56Z",trash:"M173,33L166,46L76,46C59,46 46,59 46,76C46,93 59,106 76,106L436,106C453,106 466,93 466,76C466,59 453,46 436,46L346,46L339,33C334,22 324,16 312,16L200,16C188,16 178,22 173,33ZM436,136L76,136L96,454C97,478 117,496 141,496L371,496C395,496 415,478 416,454L436,136Z",undo:"M168,224L40,224C27,224 16,213 16,200L16,72C16,62 22,54 31,50C40,46 50,48 57,55L99,97C186,10 327,10 414,98C502,185 502,327 414,414C327,502 185,502 98,414C85,402 85,382 98,369C110,357 130,357 143,369C205,432 307,432 369,369C432,307 432,205 369,143C307,81 207,80 144,142L185,183C192,190 194,200 190,209C187,218 178,224 168,224Z",unlock:"M313,131C313,92 345,60 384,60C423,60 455,92 455,131L455,174C455,190 468,203 484,203C499,203 512,190 512,174L512,131C512,61 455,3 384,3C313,3 256,61 256,131L256,227L57,227C26,227 0,253 0,284L0,455C0,486 26,512 57,512L341,512C373,512 398,486 398,455L398,284C398,253 373,227 341,227L313,227L313,131Z",checked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083ZM88.43,298.82C75.421,285.811 75.421,264.689 88.43,251.68C101.439,238.671 122.561,238.671 135.57,251.68L202,318.11L376.43,143.68C389.439,130.671 410.561,130.671 423.57,143.68C436.579,156.689 436.579,177.811 423.57,190.82L225.57,388.82C212.553,401.838 191.447,401.838 178.43,388.82L88.43,298.82Z",unchecked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083Z"},wT=e=>{const n=yT[e]||HS(`Invalid icon name: ${e}`);return rg(n)?{path:n,width:512,height:512}:n},o0=({path:e,onClick:n,width:t=512,height:r=512,style:l,className:o="",fill:i="currentColor"})=>a("svg",{"aria-hidden":"true",focusable:"false",className:`${o} icon`,style:l,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${t} ${r}`,onClick:n,children:a("path",{d:e,fill:i})}),Ol=({name:e,...n})=>e?a(o0,{...n,...wT(e)}):a(o0,{...n}),Fa=({color:e,selected:n,select:t,iconColor:r="white",className:l="",alt:o=a(Pt,{children:" "})})=>a("button",{className:`${l} ${e} icon ${n?"focus":""}`,onClick:t,children:n?a(Ol,{name:"check",className:r}):o}),xT="Badger CSS",CT="Badger CSS palette",ST="badger-css",kT="",TT={red:{name:"Red",hue:0,stops:{0:{h:0,s:65,l:5,hex:"#150404"},5:{h:0,s:66,l:8,hex:"#220707"},10:{h:0,s:68,l:11,hex:"#2f0909"},15:{h:0,s:69,l:15,hex:"#410c0c"},20:{h:0,s:70,l:18,hex:"#4e0e0e"},25:{h:0,s:71,l:22,hex:"#601010"},30:{h:0,s:72,l:27,hex:"#761313"},35:{h:0,s:73,l:31,hex:"#891515"},40:{h:0,s:73,l:36,hex:"#9f1919"},45:{h:0,s:74,l:42,hex:"#ba1c1c"},50:{h:0,s:74,l:48,hex:"#d52020"},55:{h:0,s:74,l:55,hex:"#e13737"},60:{h:0,s:75,l:62,hex:"#e75555"},65:{h:0,s:75,l:68,hex:"#eb7070"},70:{h:0,s:74,l:74,hex:"#ee8c8c"},75:{h:0,s:74,l:80,hex:"#f2a6a6"},80:{h:0,s:74,l:84,hex:"#f4b8b8"},85:{h:0,s:73,l:88,hex:"#f7caca"},90:{h:0,s:73,l:92,hex:"#f9dcdc"},95:{h:0,s:72,l:95,hex:"#fbe9e9"},100:{h:0,s:71,l:98,hex:"#fef6f6"}},curves:{h:{min:0,max:0,minControl:{x:30,y:0},maxControl:{x:70,y:0}},s:{min:65,max:71,minControl:{x:31,y:74},maxControl:{x:63,y:78}},l:{min:5,max:98,minControl:{x:62,y:42},maxControl:{x:53,y:72}}},uri:"red"},brown:{name:"Brown",hue:14,stops:{0:{h:10,s:52,l:5,hex:"#130806"},5:{h:11,s:53,l:8,hex:"#1f0e0a"},10:{h:11,s:54,l:11,hex:"#2b120d"},15:{h:12,s:54,l:14,hex:"#371810"},20:{h:13,s:55,l:17,hex:"#431e14"},25:{h:13,s:56,l:20,hex:"#502316"},30:{h:13,s:56,l:24,hex:"#5f2a1b"},35:{h:14,s:56,l:28,hex:"#6f321f"},40:{h:14,s:57,l:32,hex:"#803923"},45:{h:14,s:57,l:37,hex:"#944229"},50:{h:14,s:57,l:42,hex:"#a84b2e"},55:{h:14,s:58,l:47,hex:"#bd5332"},60:{h:14,s:58,l:53,hex:"#cd6242"},65:{h:15,s:58,l:60,hex:"#d47b5e"},70:{h:15,s:58,l:67,hex:"#dc927a"},75:{h:15,s:58,l:75,hex:"#e4ad9a"},80:{h:14,s:58,l:81,hex:"#ebc0b2"},85:{h:14,s:58,l:87,hex:"#f1d4cb"},90:{h:14,s:58,l:92,hex:"#f6e4df"},95:{h:14,s:57,l:95,hex:"#faeeeb"},100:{h:14,s:57,l:98,hex:"#fdf8f7"}},curves:{h:{min:10,max:14,minControl:{x:30,y:15},maxControl:{x:70,y:15}},s:{min:52,max:57,minControl:{x:35,y:58},maxControl:{x:66,y:59}},l:{min:5,max:98,minControl:{x:72,y:43},maxControl:{x:67,y:82}}},uri:"brown"},orange:{name:"Orange",hue:26,stops:{0:{h:27,s:93,l:5,hex:"#190c01"},5:{h:27,s:94,l:8,hex:"#281201"},10:{h:26,s:94,l:11,hex:"#361902"},15:{h:26,s:95,l:14,hex:"#461f02"},20:{h:26,s:96,l:18,hex:"#5a2802"},25:{h:26,s:96,l:21,hex:"#692f02"},30:{h:26,s:96,l:25,hex:"#7d3803"},35:{h:26,s:97,l:30,hex:"#974302"},40:{h:26,s:97,l:35,hex:"#b04e03"},45:{h:26,s:97,l:40,hex:"#c95903"},50:{h:26,s:97,l:46,hex:"#e76604"},55:{h:26,s:96,l:52,hex:"#fa750f"},60:{h:26,s:96,l:59,hex:"#fb8932"},65:{h:26,s:95,l:65,hex:"#fb9a51"},70:{h:27,s:94,l:72,hex:"#fbb174"},75:{h:27,s:93,l:78,hex:"#fbc293"},80:{h:28,s:92,l:83,hex:"#fcd1ac"},85:{h:28,s:91,l:88,hex:"#fcdfc5"},90:{h:29,s:90,l:91,hex:"#fde7d3"},95:{h:30,s:88,l:95,hex:"#fdf2e7"},100:{h:32,s:87,l:97,hex:"#fef8f1"}},curves:{h:{min:27,max:32,minControl:{x:30,y:25},maxControl:{x:77,y:24}},s:{min:93,max:87,minControl:{x:46,y:100},maxControl:{x:64,y:97}},l:{min:5,max:97,minControl:{x:62,y:39},maxControl:{x:62,y:80}}},uri:"orange"},yellow:{name:"Yellow",hue:41,stops:{0:{h:30,s:90,l:5,hex:"#180d01"},5:{h:31,s:91,l:8,hex:"#271502"},10:{h:33,s:92,l:10,hex:"#311c02"},15:{h:34,s:93,l:13,hex:"#402502"},20:{h:35,s:94,l:17,hex:"#543203"},25:{h:36,s:95,l:20,hex:"#633d03"},30:{h:37,s:96,l:24,hex:"#784b02"},35:{h:38,s:96,l:28,hex:"#8c5a03"},40:{h:39,s:97,l:33,hex:"#a66d03"},45:{h:40,s:97,l:38,hex:"#bf8003"},50:{h:41,s:97,l:43,hex:"#d89503"},55:{h:41,s:96,l:48,hex:"#f0a505"},60:{h:42,s:95,l:54,hex:"#f9b61a"},65:{h:43,s:94,l:60,hex:"#f9c339"},70:{h:43,s:93,l:66,hex:"#f9cb58"},75:{h:44,s:92,l:72,hex:"#f9d676"},80:{h:44,s:90,l:77,hex:"#f9dd90"},85:{h:44,s:88,l:82,hex:"#f9e4a9"},90:{h:45,s:86,l:87,hex:"#faecc1"},95:{h:45,s:84,l:92,hex:"#fcf3d9"},100:{h:45,s:82,l:96,hex:"#fdf9ec"}},curves:{h:{min:30,max:45,minControl:{x:28,y:38},maxControl:{x:70,y:45}},s:{min:90,max:82,minControl:{x:44,y:100},maxControl:{x:58,y:100}},l:{min:5,max:96,minControl:{x:52,y:31},maxControl:{x:64,y:67}}},uri:"yellow"},olive:{name:"Olive",hue:68,stops:{0:{h:72,s:66,l:4,hex:"#0e1103"},5:{h:72,s:68,l:6,hex:"#161a05"},10:{h:71,s:70,l:9,hex:"#212707"},15:{h:71,s:72,l:12,hex:"#2d3509"},20:{h:70,s:73,l:15,hex:"#39420a"},25:{h:70,s:74,l:18,hex:"#45500c"},30:{h:69,s:74,l:21,hex:"#515d0e"},35:{h:69,s:74,l:25,hex:"#616f11"},40:{h:69,s:73,l:29,hex:"#708014"},45:{h:68,s:70,l:33,hex:"#7f8f19"},50:{h:68,s:66,l:37,hex:"#8c9d20"},55:{h:67,s:60,l:43,hex:"#a0af2c"},60:{h:67,s:55,l:48,hex:"#aebe37"},65:{h:66,s:52,l:54,hex:"#bac74d"},70:{h:66,s:50,l:61,hex:"#c3cd6a"},75:{h:65,s:49,l:68,hex:"#cfd585"},80:{h:65,s:48,l:75,hex:"#d9dea1"},85:{h:65,s:49,l:82,hex:"#e4e8bb"},90:{h:64,s:49,l:87,hex:"#eceece"},95:{h:64,s:51,l:93,hex:"#f5f6e4"},100:{h:64,s:52,l:97,hex:"#fbfbf3"}},curves:{h:{min:72,max:64,minControl:{x:30,y:70},maxControl:{x:69,y:65}},s:{min:66,max:52,minControl:{x:69,y:96},maxControl:{x:37,y:33}},l:{min:4,max:97,minControl:{x:67,y:35},maxControl:{x:72,y:75}}},uri:"olive"},green:{name:"Green",hue:117,stops:{0:{h:117,s:45,l:5,hex:"#081207"},5:{h:117,s:48,l:8,hex:"#0c1e0b"},10:{h:117,s:50,l:11,hex:"#0f2a0e"},15:{h:117,s:52,l:14,hex:"#133611"},20:{h:117,s:53,l:17,hex:"#174214"},25:{h:117,s:54,l:21,hex:"#1c5219"},30:{h:117,s:55,l:25,hex:"#20631d"},35:{h:117,s:55,l:29,hex:"#257321"},40:{h:117,s:55,l:33,hex:"#2a8226"},45:{h:117,s:54,l:38,hex:"#32952d"},50:{h:117,s:54,l:43,hex:"#38a932"},55:{h:117,s:53,l:48,hex:"#40bb3a"},60:{h:117,s:52,l:54,hex:"#53c74d"},65:{h:117,s:51,l:60,hex:"#6acd65"},70:{h:117,s:50,l:66,hex:"#81d47d"},75:{h:117,s:48,l:73,hex:"#9cdb99"},80:{h:117,s:47,l:79,hex:"#b3e3b0"},85:{h:117,s:46,l:85,hex:"#c9eac7"},90:{h:118,s:45,l:90,hex:"#dbf1da"},95:{h:118,s:44,l:94,hex:"#e9f6e9"},100:{h:118,s:43,l:98,hex:"#f8fcf8"}},curves:{h:{min:117,max:118,minControl:{x:30,y:118},maxControl:{x:57,y:116}},s:{min:45,max:43,minControl:{x:34,y:65},maxControl:{x:64,y:49}},l:{min:5,max:98,minControl:{x:61,y:38},maxControl:{x:72,y:79}}},uri:"green"},teal:{name:"Teal",hue:165,stops:{0:{h:165,s:52,l:5,hex:"#061310"},5:{h:165,s:56,l:7,hex:"#081c17"},10:{h:165,s:59,l:10,hex:"#0a2921"},15:{h:165,s:61,l:13,hex:"#0d352b"},20:{h:165,s:62,l:15,hex:"#0f3e32"},25:{h:165,s:63,l:18,hex:"#114b3c"},30:{h:165,s:63,l:21,hex:"#145746"},35:{h:165,s:63,l:25,hex:"#186854"},40:{h:165,s:62,l:29,hex:"#1c7861"},45:{h:165,s:60,l:33,hex:"#22876d"},50:{h:165,s:59,l:37,hex:"#27967a"},55:{h:165,s:58,l:42,hex:"#2da98a"},60:{h:165,s:57,l:47,hex:"#34bc9a"},65:{h:165,s:56,l:53,hex:"#44caa9"},70:{h:165,s:55,l:60,hex:"#61d1b5"},75:{h:165,s:54,l:67,hex:"#7dd8c2"},80:{h:165,s:54,l:75,hex:"#9de2d0"},85:{h:165,s:55,l:81,hex:"#b4e9dc"},90:{h:165,s:55,l:88,hex:"#d0f1e9"},95:{h:165,s:57,l:93,hex:"#e3f7f2"},100:{h:165,s:58,l:98,hex:"#f7fdfb"}},curves:{h:{min:165,max:165,minControl:{x:30,y:165},maxControl:{x:70,y:165}},s:{min:52,max:58,minControl:{x:34,y:81},maxControl:{x:55,y:43}},l:{min:5,max:98,minControl:{x:71,y:38},maxControl:{x:68,y:69}}},uri:"teal"},blue:{name:"Blue",hue:206,stops:{0:{h:210,s:72,l:5,hex:"#040d16"},5:{h:210,s:74,l:8,hex:"#051423"},10:{h:209,s:75,l:11,hex:"#071d31"},15:{h:209,s:77,l:15,hex:"#092744"},20:{h:209,s:78,l:18,hex:"#0a2f52"},25:{h:208,s:79,l:22,hex:"#0c3b64"},30:{h:208,s:80,l:26,hex:"#0d4677"},35:{h:207,s:81,l:31,hex:"#0f558f"},40:{h:207,s:82,l:35,hex:"#1061a2"},45:{h:207,s:83,l:41,hex:"#1271bf"},50:{h:206,s:84,l:46,hex:"#1382d8"},55:{h:206,s:84,l:52,hex:"#1e92eb"},60:{h:205,s:85,l:58,hex:"#39a3ef"},65:{h:205,s:85,l:65,hex:"#5ab2f2"},70:{h:205,s:85,l:71,hex:"#76c0f4"},75:{h:205,s:85,l:77,hex:"#92cdf6"},80:{h:204,s:84,l:82,hex:"#abd9f8"},85:{h:204,s:84,l:87,hex:"#c2e3fa"},90:{h:204,s:83,l:91,hex:"#d5ecfb"},95:{h:204,s:82,l:95,hex:"#e8f4fd"},100:{h:204,s:81,l:98,hex:"#f6fbfe"}},curves:{h:{min:210,max:204,minControl:{x:42,y:207},maxControl:{x:70,y:204}},s:{min:72,max:81,minControl:{x:43,y:86},maxControl:{x:69,y:88}},l:{min:5,max:98,minControl:{x:61,y:41},maxControl:{x:64,y:78}}},uri:"blue"},indigo:{name:"Indigo",hue:236,stops:{0:{h:234,s:50,l:7,hex:"#090b1b"},5:{h:234,s:52,l:11,hex:"#0d102b"},10:{h:235,s:54,l:16,hex:"#13163f"},15:{h:235,s:56,l:21,hex:"#181d54"},20:{h:235,s:58,l:27,hex:"#1d246d"},25:{h:235,s:61,l:32,hex:"#202883"},30:{h:236,s:64,l:38,hex:"#232b9f"},35:{h:236,s:67,l:44,hex:"#252fbb"},40:{h:236,s:71,l:50,hex:"#2531da"},45:{h:236,s:75,l:56,hex:"#3b46e3"},50:{h:236,s:78,l:62,hex:"#535dea"},55:{h:236,s:81,l:67,hex:"#6770ef"},60:{h:236,s:82,l:72,hex:"#7d85f2"},65:{h:235,s:82,l:77,hex:"#949cf4"},70:{h:235,s:82,l:81,hex:"#a7adf6"},75:{h:235,s:81,l:85,hex:"#babff8"},80:{h:235,s:79,l:89,hex:"#cdd0f9"},85:{h:235,s:77,l:92,hex:"#dbdefa"},90:{h:235,s:75,l:94,hex:"#e4e6fb"},95:{h:235,s:72,l:97,hex:"#f2f3fd"},100:{h:235,s:70,l:99,hex:"#fbfbfe"}},curves:{h:{min:234,max:235,minControl:{x:30,y:237},maxControl:{x:70,y:235}},s:{min:50,max:70,minControl:{x:60,y:69},maxControl:{x:40,y:100}},l:{min:7,max:99,minControl:{x:39,y:40},maxControl:{x:53,y:80}}},uri:"indigo"},violet:{name:"Violet",uri:"violet",hue:259,stops:{0:{h:271,s:53,l:8,hex:"#150a1f"},5:{h:269,s:53,l:12,hex:"#1e0e2f"},10:{h:268,s:54,l:16,hex:"#27133f"},15:{h:266,s:55,l:21,hex:"#321853"},20:{h:265,s:56,l:26,hex:"#3c1d67"},25:{h:264,s:57,l:31,hex:"#46227c"},30:{h:263,s:59,l:36,hex:"#4f2692"},35:{h:262,s:62,l:42,hex:"#5929ae"},40:{h:261,s:66,l:48,hex:"#622acb"},45:{h:260,s:71,l:53,hex:"#6b32dc"},50:{h:259,s:76,l:59,hex:"#7947e6"},55:{h:258,s:79,l:65,hex:"#8a5fec"},60:{h:258,s:81,l:71,hex:"#9d79f1"},65:{h:257,s:82,l:76,hex:"#ac90f4"},70:{h:257,s:82,l:80,hex:"#baa2f6"},75:{h:256,s:82,l:85,hex:"#cab9f8"},80:{h:256,s:81,l:88,hex:"#d5c8f9"},85:{h:255,s:80,l:92,hex:"#e2dafb"},90:{h:255,s:79,l:94,hex:"#eae4fc"},95:{h:255,s:78,l:97,hex:"#f4f1fd"},100:{h:255,s:77,l:99,hex:"#fbfafe"}},curves:{h:{min:271,max:255,minControl:{x:33,y:260},maxControl:{x:70,y:255}},s:{min:53,max:77,minControl:{x:68,y:57},maxControl:{x:26,y:96}},l:{min:8,max:99,minControl:{x:45,y:43},maxControl:{x:58,y:83}}}},purple:{name:"Purple",hue:284,stops:{0:{h:294,s:47,l:6,hex:"#150816"},5:{h:293,s:50,l:8,hex:"#1c0a1f"},10:{h:292,s:53,l:11,hex:"#270d2b"},15:{h:290,s:56,l:14,hex:"#311038"},20:{h:289,s:59,l:18,hex:"#3f1349"},25:{h:288,s:62,l:22,hex:"#4d155b"},30:{h:287,s:64,l:26,hex:"#5a186d"},35:{h:286,s:67,l:31,hex:"#6b1a84"},40:{h:286,s:69,l:37,hex:"#811d9f"},45:{h:285,s:71,l:43,hex:"#9520bc"},50:{h:284,s:73,l:49,hex:"#a822d8"},55:{h:283,s:74,l:55,hex:"#b137e1"},60:{h:283,s:75,l:62,hex:"#be55e7"},65:{h:282,s:77,l:68,hex:"#c76fec"},70:{h:282,s:77,l:75,hex:"#d38ef0"},75:{h:281,s:78,l:80,hex:"#dba4f4"},80:{h:281,s:79,l:85,hex:"#e4bbf7"},85:{h:280,s:79,l:90,hex:"#ecd1fa"},90:{h:280,s:80,l:94,hex:"#f4e3fc"},95:{h:280,s:80,l:97,hex:"#f9f1fd"},100:{h:280,s:80,l:99,hex:"#fdfafe"}},curves:{h:{min:294,max:280,minControl:{x:32,y:286},maxControl:{x:67,y:280}},s:{min:47,max:80,minControl:{x:34,y:67},maxControl:{x:51,y:79}},l:{min:6,max:99,minControl:{x:48,y:26},maxControl:{x:64,y:85}}},uri:"purple"},pink:{name:"Pink",hue:313,stops:{0:{h:314,s:64,l:5,hex:"#150511"},5:{h:314,s:66,l:7,hex:"#1e0618"},10:{h:313,s:69,l:10,hex:"#2b0823"},15:{h:313,s:71,l:13,hex:"#390a2e"},20:{h:313,s:73,l:16,hex:"#470b3a"},25:{h:313,s:74,l:19,hex:"#540d45"},30:{h:313,s:76,l:23,hex:"#670e54"},35:{h:313,s:77,l:27,hex:"#7a1063"},40:{h:313,s:77,l:32,hex:"#901375"},45:{h:313,s:78,l:37,hex:"#a81588"},50:{h:313,s:77,l:42,hex:"#be199a"},55:{h:313,s:77,l:48,hex:"#d91cb0"},60:{h:313,s:76,l:55,hex:"#e335be"},65:{h:313,s:76,l:63,hex:"#e859c9"},70:{h:312,s:75,l:70,hex:"#ec79d5"},75:{h:312,s:74,l:77,hex:"#f099de"},80:{h:312,s:73,l:83,hex:"#f3b4e7"},85:{h:312,s:72,l:88,hex:"#f6caee"},90:{h:311,s:71,l:92,hex:"#f9dcf4"},95:{h:311,s:70,l:96,hex:"#fceef9"},100:{h:310,s:69,l:99,hex:"#fefbfe"}},curves:{h:{min:314,max:310,minControl:{x:26,y:311},maxControl:{x:67,y:315}},s:{min:64,max:69,minControl:{x:45,y:87},maxControl:{x:58,y:75}},l:{min:5,max:99,minControl:{x:64,y:34},maxControl:{x:62,y:78}}},uri:"pink"},maroon:{name:"Maroon",hue:339,stops:{0:{h:339,s:57,l:6,hex:"#18070d"},5:{h:339,s:62,l:8,hex:"#210811"},10:{h:339,s:66,l:11,hex:"#2f0a16"},15:{h:339,s:70,l:13,hex:"#380a1a"},20:{h:339,s:74,l:17,hex:"#4b0b22"},25:{h:339,s:76,l:20,hex:"#5a0c27"},30:{h:339,s:79,l:24,hex:"#6e0d2f"},35:{h:339,s:81,l:29,hex:"#860e38"},40:{h:339,s:82,l:33,hex:"#990f3f"},45:{h:339,s:83,l:39,hex:"#b6114b"},50:{h:339,s:84,l:45,hex:"#d31256"},55:{h:339,s:84,l:51,hex:"#eb1963"},60:{h:339,s:84,l:57,hex:"#ed3576"},65:{h:339,s:83,l:64,hex:"#ef578c"},70:{h:339,s:82,l:71,hex:"#f278a3"},75:{h:339,s:81,l:77,hex:"#f495b6"},80:{h:339,s:79,l:83,hex:"#f6b1c9"},85:{h:339,s:78,l:88,hex:"#f8c9d9"},90:{h:339,s:76,l:92,hex:"#fadbe6"},95:{h:339,s:73,l:96,hex:"#fcedf3"},100:{h:339,s:71,l:99,hex:"#fefbfc"}},curves:{h:{min:339,max:339,minControl:{x:26,y:339},maxControl:{x:67,y:339}},s:{min:57,max:71,minControl:{x:32,y:90},maxControl:{x:62,y:90}},l:{min:6,max:99,minControl:{x:54,y:28},maxControl:{x:64,y:79}}},uri:"maroon"},grey:{name:"Grey",hue:200,stops:{0:{h:200,s:5,l:5,hex:"#0c0d0d"},5:{h:200,s:5,l:10,hex:"#181a1b"},10:{h:200,s:5,l:14,hex:"#222425"},15:{h:200,s:5,l:19,hex:"#2e3133"},20:{h:200,s:5,l:23,hex:"#383c3e"},25:{h:200,s:5,l:28,hex:"#44494b"},30:{h:200,s:5,l:33,hex:"#505658"},35:{h:200,s:5,l:37,hex:"#5a6063"},40:{h:200,s:5,l:42,hex:"#666d70"},45:{h:200,s:5,l:47,hex:"#727a7e"},50:{h:200,s:5,l:52,hex:"#7e878b"},55:{h:200,s:5,l:56,hex:"#899194"},60:{h:200,s:5,l:61,hex:"#979da1"},65:{h:200,s:5,l:66,hex:"#a4aaad"},70:{h:200,s:5,l:71,hex:"#b1b6b9"},75:{h:200,s:5,l:75,hex:"#bcc0c2"},80:{h:200,s:5,l:80,hex:"#c9cdcf"},85:{h:200,s:5,l:85,hex:"#d7d9db"},90:{h:200,s:5,l:89,hex:"#e2e3e4"},95:{h:200,s:5,l:94,hex:"#eff0f0"},100:{h:200,s:5,l:98,hex:"#fafafa"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:5,max:5,minControl:{x:30,y:5},maxControl:{x:70,y:5}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey",greyscale:!0},grey20:{name:"Grey20",hue:200,stops:{0:{h:200,s:20,l:5,hex:"#0a0e0f"},5:{h:200,s:20,l:10,hex:"#141b1f"},10:{h:200,s:20,l:14,hex:"#1d262b"},15:{h:200,s:20,l:19,hex:"#27343a"},20:{h:200,s:20,l:23,hex:"#2f3f46"},25:{h:200,s:20,l:28,hex:"#394c56"},30:{h:200,s:20,l:33,hex:"#435a65"},35:{h:200,s:20,l:37,hex:"#4b6571"},40:{h:200,s:20,l:42,hex:"#567281"},45:{h:200,s:20,l:47,hex:"#608090"},50:{h:200,s:20,l:52,hex:"#6c8d9d"},55:{h:200,s:20,l:56,hex:"#7896a5"},60:{h:200,s:20,l:61,hex:"#88a2af"},65:{h:200,s:20,l:66,hex:"#97aeba"},70:{h:200,s:20,l:71,hex:"#a6bac4"},75:{h:200,s:20,l:75,hex:"#b3c3cc"},80:{h:200,s:20,l:80,hex:"#c2cfd6"},85:{h:200,s:20,l:85,hex:"#d1dbe0"},90:{h:200,s:20,l:89,hex:"#dde5e9"},95:{h:200,s:20,l:94,hex:"#edf1f3"},100:{h:200,s:20,l:98,hex:"#f9fafb"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:20,max:20,minControl:{x:30,y:20},maxControl:{x:70,y:20}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey20",greyscale:!0},grey40:{name:"Grey40",hue:200,stops:{0:{h:200,s:40,l:5,hex:"#080e12"},5:{h:200,s:40,l:10,hex:"#0f1d24"},10:{h:200,s:40,l:14,hex:"#152832"},15:{h:200,s:40,l:19,hex:"#1d3744"},20:{h:200,s:40,l:23,hex:"#234252"},25:{h:200,s:40,l:28,hex:"#2b5164"},30:{h:200,s:40,l:33,hex:"#325f76"},35:{h:200,s:40,l:37,hex:"#396b84"},40:{h:200,s:40,l:42,hex:"#407996"},45:{h:200,s:40,l:47,hex:"#4888a8"},50:{h:200,s:40,l:52,hex:"#5495b6"},55:{h:200,s:40,l:56,hex:"#629ebc"},60:{h:200,s:40,l:61,hex:"#74a9c3"},65:{h:200,s:40,l:66,hex:"#86b4cb"},70:{h:200,s:40,l:71,hex:"#97bfd3"},75:{h:200,s:40,l:75,hex:"#a6c8d9"},80:{h:200,s:40,l:80,hex:"#b8d3e0"},85:{h:200,s:40,l:85,hex:"#c9dee8"},90:{h:200,s:40,l:89,hex:"#d8e7ee"},95:{h:200,s:40,l:94,hex:"#eaf2f6"},100:{h:200,s:40,l:98,hex:"#f8fbfc"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:40,max:40,minControl:{x:30,y:40},maxControl:{x:70,y:40}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey40",greyscale:!0}},Yr={name:xT,comment:CT,uri:ST,source:kT,ranges:TT},rc=Object.keys(Yr.ranges),LT=Object.entries(Yr.ranges).filter(([,e])=>!e.greyscale).map(([e])=>e),_T=Object.entries(Yr.ranges).filter(([,e])=>e.greyscale).map(([e])=>e),NT=({range:e,setRange:n})=>c("div",{children:[c("div",{className:"flex space mar-b-0",children:[a("h3",{children:"Color Range"}),a("h4",{children:$n(e)&&a("code",{children:e||""})})]}),c("div",{className:"grid-fit gap-2",style:{"--min-width":"2em"},children:[a(i0,{colors:LT,range:e,setRange:n}),a("div",{children:" "}),a(Fa,{color:"brand",selected:e==="brand",select:()=>n("brand")}),a(i0,{colors:_T,range:e,setRange:n})]})]}),i0=({range:e,setRange:n,colors:t})=>t.map(r=>a(Fa,{color:r,select:()=>n(r),selected:e==r},r)),ts=({stop:e,setStop:n,className:t,title:r,prefix:l})=>c("div",{children:[c("div",{className:"flex space mar-b-0",children:[a("h3",{children:r}),a("h4",{children:$n(e)&&c("code",{children:[l,"-",e]})})]}),a("div",{className:`${t} grid-fit gap-2`,style:{"--min-width":"2em"},children:yi(0,100,5).map(o=>a(Fa,{color:`bgc-${o} bdc-${o} fgc-${o>50?"0":"100"} bgd-${o} bdd-${o} fgd-${o>50?"0":"100"}`,iconColor:o>50?"black":"white",selected:e===o,select:()=>n(o)},o))})]}),$T=[0,1,2,3,4,6,8,10,12,16,20,24,28,32],s0=({spacing:e,setSpacing:n,className:t,title:r,prefix:l,range:o})=>c("div",{children:[c("div",{className:"flex space mar-b-0",children:[a("h3",{children:r}),a("h4",{children:$n(e)&&c("code",{children:[l,"-",e]})})]}),a("div",{className:`${t} grid-fit gap-2`,style:{"--min-width":"2em"},children:$T.map(i=>a(Fa,{color:o,className:"wide",alt:a("span",{className:"font-mono",children:i}),selected:e===i,select:()=>n(i)},i))})]}),ET=["smallest","smaller","small","medium","large","larger","largest"],IT=({size:e,setSize:n,title:t="Size",range:r})=>c("div",{children:[c("div",{className:"flex space mar-b-0",children:[a("h3",{children:t}),a("h4",{children:$n(e)&&a("code",{children:e})})]}),a("div",{className:"grid-fit gap-2",style:{"--min-width":"2em"},children:ET.map(l=>a(Fa,{color:r,className:"wide",alt:a("span",{className:"font-mono",children:l}),selected:e===l,select:()=>n(l)},l))})]}),MT=[0,1,2,3,4,5,6,8,10],c0=({border:e,setBorder:n,className:t,title:r,prefix:l,range:o})=>c("div",{children:[c("div",{className:"flex space mar-b-0",children:[a("h3",{children:r}),a("h4",{children:$n(e)&&c("code",{children:[l,"-",e]})})]}),a("div",{className:`${t} grid-fit gap-2`,style:{"--min-width":"2em"},children:MT.map(i=>a(Fa,{color:o,className:"wide",alt:a("span",{className:"font-mono",children:i}),selected:e===i,select:()=>n(i)},i))})]}),PT=({checked:e,toggle:n,label:t})=>a("div",{className:"field",children:c("label",{className:"checkbox border no-focus wide",children:[a("input",{type:"checkbox",checked:e,onChange:n}),t]})}),RT=({shadow:e,setShadow:n,className:t,title:r="Shadow",prefix:l="shadow",range:o})=>c("div",{children:[c("div",{className:"flex space mar-b-0",children:[a("h3",{children:r}),a("h4",{children:$n(e)&&c("code",{children:[l,"-",e]})})]}),a("div",{className:`${t} grid-fit gap-2`,style:{"--min-width":"2em"},children:yi(0,5).map(i=>a(Fa,{color:o,className:"wide",alt:a("span",{className:"font-mono",children:i}),selected:e===i,select:()=>n(i)},i))})]}),AT=({options:e,setOption:n,toggleOption:t})=>c("div",{className:"surface-5 pad-4",children:[c("div",{className:"flex space baseline stack-desktop mar-b-2",children:[a("h2",{className:"mar-v-none",children:"Controls"}),a("h3",{className:"text-right mar-v-none",children:a("code",{children:'class="..."'})})]}),c("div",{className:"grid gap-2 small",children:[a(NT,{range:e.range,setRange:n("range")}),a(ts,{title:"Background Color Stop",prefix:"bgc",className:e.range,stop:e.bgc,setStop:n("bgc")}),a(ts,{title:"Foreground Color Stop",prefix:"fgc",className:e.range,stop:e.fgc,setStop:n("fgc")}),a(ts,{title:"Heading Color Stop",prefix:"hdc",className:e.range,stop:e.hdc,setStop:n("hdc")}),a(ts,{title:"Border Color Stop",prefix:"bdc",className:e.range,stop:e.bdc,setStop:n("bdc")}),a(c0,{title:"Border Width",prefix:"bdw",border:e.bdw,setBorder:n("bdw"),range:e.range}),a(c0,{title:"Border Radius",prefix:"bdr",border:e.bdr,setBorder:n("bdr"),range:e.range}),a(IT,{title:"Size",size:e.size,setSize:n("size"),range:e.range}),a(s0,{title:"Margin",prefix:"mar",className:e.mar,spacing:e.mar,setSpacing:n("mar"),range:e.range}),a(s0,{title:"Padding",prefix:"pad",className:e.pad,spacing:e.pad,setSpacing:n("pad"),range:e.range}),a(RT,{title:"Shadow",prefix:"shadow",shadow:e.shadow,setShadow:n("shadow"),range:e.range}),c("div",{children:[a("h3",{className:"mar-b-2",children:"Options"}),a("div",{className:"grid-fill",style:{"--min-width":"10rem"},children:a(PT,{label:"Show Border",checked:e.border,toggle:t("border")})})]})]})]}),xi=e=>e.filter(n=>$n(n)&&n).join(" ").replace(/^\s+/,"").replaceAll(/\s+/g," "),bg=(e,n={},...t)=>xi(Object.entries(e).reduce((r,[l,o])=>(o&&r.push(n[l]||l),r),[...t])),yg=(e,n="",...t)=>xi([...ag(n).filter(r=>e[r]),...t]),OT=({options:e})=>{const n=FT(e);return c("div",{className:"surface-5 pad-4",children:[c("div",{className:"flex space baseline stack-desktop mar-b-2",children:[a("h2",{className:"mar-v-none",children:"Output"}),a("div",{className:"text-right",children:c("code",{children:['class="',n,'"']})})]}),a("div",{className:"border surface-4",style:{borderStyle:"dotted"},children:c("div",{className:n,children:[a("h3",{className:"mar-b-2",children:"It's One Louder"}),"You see, most... most blokes, you know, will be playing at ten. You're on ten here... all the way up... all the way up... all the way up. You're on ten on your guitar...where can you go from there? Where? Nowhere. Exactly. What we do is if we need that extra... push over the cliff... you know what we do? Put it up to eleven. Eleven. Exactly. One louder."]})})]})},FT=e=>xi([e.range,$n(e.bgc)?`bgc-${e.bgc}`:"",$n(e.fgc)?`fgc-${e.fgc}`:"",$n(e.hdc)?`hdc-${e.hdc}`:"",$n(e.bdc)?`bdc-${e.bdc}`:"",$n(e.bdw)?`bdw-${e.bdw}`:"",$n(e.bdr)?`bdr-${e.bdr}`:"",e.size,$n(e.mar)?`mar-${e.mar}`:"",$n(e.pad)?`pad-${e.pad}`:"",$n(e.shadow)?`shadow-${e.shadow}`:"",e.border?"border":""]),BT=()=>{const[e,n]=D.useState({range:"brand",bgc:90,fgc:30,hdc:20,bdc:60,bdr:3,bdw:2,pad:4,mar:6,shadow:2,border:!0});return c("div",{className:"grid gap-8",children:[a(OT,{options:e}),a(AT,{options:e,setOption:l=>o=>n(i=>({...i,[l]:o})),toggleOption:l=>()=>n(o=>({...o,[l]:!o[l]}))})]})},DT=()=>c("div",{children:[a("h1",{children:"Color Demo"}),c("div",{className:"grid-2 gap-h-8 stack-desktop",children:[c("div",{children:[c("p",{children:["One of the novel approaches that Badger CSS employs is to provide CSS classes for each of the colors in the palette.  There are then further CSS classes that can be used to select the particular shade (or color"," ",'"stop") from that range to use for the background, foreground, heading and border colors.']}),c("p",{children:["One benefit of this approach is that it allows you to design color agnostic components that work with both light and dark themes, and can then be used with any color range.  For some examples, see the"," ",a(ae,{to:"/components/alerts",text:"Alerts"})," and "," ",a(ae,{to:"/components/tables",text:"Tables"})," pages"]}),a("p",{children:"Another more practical benefit is that it avoid the combinatorial explosion of CSS classes required to cover every combination of color range and stop for foreground, background, heading and border colors."})]}),c("div",{children:[a("p",{children:"Further utility classes are provided for selecting font size, border width and radius, margins, padding, shadows and various layout options. They're similar to what you'll find in other CSS toolkits."}),a("p",{children:"The choice about what is included and what isn't is entirely arbitrary but I lean towards minimalism and have only included the kind of utility classes that I use in most, if not all web sites. It's really easy for you to add in your own utility classes, or change the settings for the provided utilities, if you want to."}),a("p",{children:"So without further ado, click on the buttons below to select different colors and layout options.  Each one selects a CSS class which affects the way the output is displayed."})]})]}),a(BT,{})]}),jT=Object.freeze(Object.defineProperty({__proto__:null,default:DT},Symbol.toStringTag,{value:"Module"}));var wg={exports:{}};/**
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
 */(function(e,n){(function(t,r){e.exports=r()})(zo,function(){for(var t=function(d,h,f){return h===void 0&&(h=0),f===void 0&&(f=1),d<h?h:d>f?f:d},r=t,l=function(d){d._clipped=!1,d._unclipped=d.slice(0);for(var h=0;h<=3;h++)h<3?((d[h]<0||d[h]>255)&&(d._clipped=!0),d[h]=r(d[h],0,255)):h===3&&(d[h]=r(d[h],0,1));return d},o={},i=0,s=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];i<s.length;i+=1){var u=s[i];o["[object "+u+"]"]=u.toLowerCase()}var p=function(d){return o[Object.prototype.toString.call(d)]||"object"},g=p,y=function(d,h){return h===void 0&&(h=null),d.length>=3?Array.prototype.slice.call(d):g(d[0])=="object"&&h?h.split("").filter(function(f){return d[0][f]!==void 0}).map(function(f){return d[0][f]}):d[0]},C=p,I=function(d){if(d.length<2)return null;var h=d.length-1;return C(d[h])=="string"?d[h].toLowerCase():null},E=Math.PI,S={clip_rgb:l,limit:t,type:p,unpack:y,last:I,PI:E,TWOPI:E*2,PITHIRD:E/3,DEG2RAD:E/180,RAD2DEG:180/E},M={format:{},autodetect:[]},w=S.last,m=S.clip_rgb,b=S.type,v=M,_=function(){for(var h=[],f=arguments.length;f--;)h[f]=arguments[f];var x=this;if(b(h[0])==="object"&&h[0].constructor&&h[0].constructor===this.constructor)return h[0];var L=w(h),N=!1;if(!L){N=!0,v.sorted||(v.autodetect=v.autodetect.sort(function(H,Q){return Q.p-H.p}),v.sorted=!0);for(var k=0,P=v.autodetect;k<P.length;k+=1){var R=P[k];if(L=R.test.apply(R,h),L)break}}if(v.format[L]){var j=v.format[L].apply(null,N?h:h.slice(0,-1));x._rgb=m(j)}else throw new Error("unknown format: "+h);x._rgb.length===3&&x._rgb.push(1)};_.prototype.toString=function(){return b(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var T=_,A=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];return new(Function.prototype.bind.apply(A.Color,[null].concat(d)))};A.Color=T,A.version="2.4.2";var F=A,z=S.unpack,Z=Math.max,fe=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];var f=z(d,"rgb"),x=f[0],L=f[1],N=f[2];x=x/255,L=L/255,N=N/255;var k=1-Z(x,Z(L,N)),P=k<1?1/(1-k):0,R=(1-x-k)*P,j=(1-L-k)*P,H=(1-N-k)*P;return[R,j,H,k]},de=fe,We=S.unpack,ln=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];d=We(d,"cmyk");var f=d[0],x=d[1],L=d[2],N=d[3],k=d.length>4?d[4]:1;return N===1?[0,0,0,k]:[f>=1?0:255*(1-f)*(1-N),x>=1?0:255*(1-x)*(1-N),L>=1?0:255*(1-L)*(1-N),k]},Ye=ln,je=F,Ze=T,W=M,q=S.unpack,J=S.type,ie=de;Ze.prototype.cmyk=function(){return ie(this._rgb)},je.cmyk=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];return new(Function.prototype.bind.apply(Ze,[null].concat(d,["cmyk"])))},W.format.cmyk=Ye,W.autodetect.push({p:2,test:function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];if(d=q(d,"cmyk"),J(d)==="array"&&d.length===4)return"cmyk"}});var me=S.unpack,zn=S.last,ge=function(d){return Math.round(d*100)/100},nn=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];var f=me(d,"hsla"),x=zn(d)||"lsa";return f[0]=ge(f[0]||0),f[1]=ge(f[1]*100)+"%",f[2]=ge(f[2]*100)+"%",x==="hsla"||f.length>3&&f[3]<1?(f[3]=f.length>3?f[3]:1,x="hsla"):f.length=3,x+"("+f.join(",")+")"},qe=nn,fn=S.unpack,On=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];d=fn(d,"rgba");var f=d[0],x=d[1],L=d[2];f/=255,x/=255,L/=255;var N=Math.min(f,x,L),k=Math.max(f,x,L),P=(k+N)/2,R,j;return k===N?(R=0,j=Number.NaN):R=P<.5?(k-N)/(k+N):(k-N)/(2-k-N),f==k?j=(x-L)/(k-N):x==k?j=2+(L-f)/(k-N):L==k&&(j=4+(f-x)/(k-N)),j*=60,j<0&&(j+=360),d.length>3&&d[3]!==void 0?[j,R,P,d[3]]:[j,R,P]},ea=On,na=S.unpack,er=S.last,Gl=qe,ta=ea,Yl=Math.round,ra=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];var f=na(d,"rgba"),x=er(d)||"rgb";return x.substr(0,3)=="hsl"?Gl(ta(f),x):(f[0]=Yl(f[0]),f[1]=Yl(f[1]),f[2]=Yl(f[2]),(x==="rgba"||f.length>3&&f[3]<1)&&(f[3]=f.length>3?f[3]:1,x="rgba"),x+"("+f.slice(0,x==="rgb"?3:4).join(",")+")")},Ci=ra,Zl=S.unpack,aa=Math.round,ql=function(){for(var d,h=[],f=arguments.length;f--;)h[f]=arguments[f];h=Zl(h,"hsl");var x=h[0],L=h[1],N=h[2],k,P,R;if(L===0)k=P=R=N*255;else{var j=[0,0,0],H=[0,0,0],Q=N<.5?N*(1+L):N+L-N*L,V=2*N-Q,te=x/360;j[0]=te+1/3,j[1]=te,j[2]=te-1/3;for(var ee=0;ee<3;ee++)j[ee]<0&&(j[ee]+=1),j[ee]>1&&(j[ee]-=1),6*j[ee]<1?H[ee]=V+(Q-V)*6*j[ee]:2*j[ee]<1?H[ee]=Q:3*j[ee]<2?H[ee]=V+(Q-V)*(2/3-j[ee])*6:H[ee]=V;d=[aa(H[0]*255),aa(H[1]*255),aa(H[2]*255)],k=d[0],P=d[1],R=d[2]}return h.length>3?[k,P,R,h[3]]:[k,P,R,1]},nr=ql,Kl=nr,Ql=M,Xl=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,Si=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,xr=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,la=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Jl=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,Ba=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,ki=Math.round,Ti=function(d){d=d.toLowerCase().trim();var h;if(Ql.format.named)try{return Ql.format.named(d)}catch{}if(h=d.match(Xl)){for(var f=h.slice(1,4),x=0;x<3;x++)f[x]=+f[x];return f[3]=1,f}if(h=d.match(Si)){for(var L=h.slice(1,5),N=0;N<4;N++)L[N]=+L[N];return L}if(h=d.match(xr)){for(var k=h.slice(1,4),P=0;P<3;P++)k[P]=ki(k[P]*2.55);return k[3]=1,k}if(h=d.match(la)){for(var R=h.slice(1,5),j=0;j<3;j++)R[j]=ki(R[j]*2.55);return R[3]=+R[3],R}if(h=d.match(Jl)){var H=h.slice(1,4);H[1]*=.01,H[2]*=.01;var Q=Kl(H);return Q[3]=1,Q}if(h=d.match(Ba)){var V=h.slice(1,4);V[1]*=.01,V[2]*=.01;var te=Kl(V);return te[3]=+h[4],te}};Ti.test=function(d){return Xl.test(d)||Si.test(d)||xr.test(d)||la.test(d)||Jl.test(d)||Ba.test(d)};var Li=Ti,zc=F,O=T,B=M,U=S.type,K=Ci,ce=Li;O.prototype.css=function(d){return K(this._rgb,d)},zc.css=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];return new(Function.prototype.bind.apply(O,[null].concat(d,["css"])))},B.format.css=ce,B.autodetect.push({p:5,test:function(d){for(var h=[],f=arguments.length-1;f-- >0;)h[f]=arguments[f+1];if(!h.length&&U(d)==="string"&&ce.test(d))return"css"}});var ue=T,he=F,pe=M,oe=S.unpack;pe.format.gl=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];var f=oe(d,"rgba");return f[0]*=255,f[1]*=255,f[2]*=255,f},he.gl=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];return new(Function.prototype.bind.apply(ue,[null].concat(d,["gl"])))},ue.prototype.gl=function(){var d=this._rgb;return[d[0]/255,d[1]/255,d[2]/255,d[3]]};var Ne=S.unpack,Ae=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];var f=Ne(d,"rgb"),x=f[0],L=f[1],N=f[2],k=Math.min(x,L,N),P=Math.max(x,L,N),R=P-k,j=R*100/255,H=k/(255-R)*100,Q;return R===0?Q=Number.NaN:(x===P&&(Q=(L-N)/R),L===P&&(Q=2+(N-x)/R),N===P&&(Q=4+(x-L)/R),Q*=60,Q<0&&(Q+=360)),[Q,j,H]},wn=Ae,cn=S.unpack,mn=Math.floor,yt=function(){for(var d,h,f,x,L,N,k=[],P=arguments.length;P--;)k[P]=arguments[P];k=cn(k,"hcg");var R=k[0],j=k[1],H=k[2],Q,V,te;H=H*255;var ee=j*255;if(j===0)Q=V=te=H;else{R===360&&(R=0),R>360&&(R-=360),R<0&&(R+=360),R/=60;var be=mn(R),ke=R-be,$e=H*(1-j),Pe=$e+ee*(1-ke),Tn=$e+ee*ke,Cn=$e+ee;switch(be){case 0:d=[Cn,Tn,$e],Q=d[0],V=d[1],te=d[2];break;case 1:h=[Pe,Cn,$e],Q=h[0],V=h[1],te=h[2];break;case 2:f=[$e,Cn,Tn],Q=f[0],V=f[1],te=f[2];break;case 3:x=[$e,Pe,Cn],Q=x[0],V=x[1],te=x[2];break;case 4:L=[Tn,$e,Cn],Q=L[0],V=L[1],te=L[2];break;case 5:N=[Cn,$e,Pe],Q=N[0],V=N[1],te=N[2];break}}return[Q,V,te,k.length>3?k[3]:1]},oa=yt,eo=S.unpack,Da=S.type,Nt=F,ia=T,ja=M,no=wn;ia.prototype.hcg=function(){return no(this._rgb)},Nt.hcg=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];return new(Function.prototype.bind.apply(ia,[null].concat(d,["hcg"])))},ja.format.hcg=oa,ja.autodetect.push({p:1,test:function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];if(d=eo(d,"hcg"),Da(d)==="array"&&d.length===3)return"hcg"}});var to=S.unpack,za=S.last,ze=Math.round,Kn=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];var f=to(d,"rgba"),x=f[0],L=f[1],N=f[2],k=f[3],P=za(d)||"auto";k===void 0&&(k=1),P==="auto"&&(P=k<1?"rgba":"rgb"),x=ze(x),L=ze(L),N=ze(N);var R=x<<16|L<<8|N,j="000000"+R.toString(16);j=j.substr(j.length-6);var H="0"+ze(k*255).toString(16);switch(H=H.substr(H.length-2),P.toLowerCase()){case"rgba":return"#"+j+H;case"argb":return"#"+H+j;default:return"#"+j}},tr=Kn,gn=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,ro=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,_i=function(d){if(d.match(gn)){(d.length===4||d.length===7)&&(d=d.substr(1)),d.length===3&&(d=d.split(""),d=d[0]+d[0]+d[1]+d[1]+d[2]+d[2]);var h=parseInt(d,16),f=h>>16,x=h>>8&255,L=h&255;return[f,x,L,1]}if(d.match(ro)){(d.length===5||d.length===9)&&(d=d.substr(1)),d.length===4&&(d=d.split(""),d=d[0]+d[0]+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]);var N=parseInt(d,16),k=N>>24&255,P=N>>16&255,R=N>>8&255,j=Math.round((N&255)/255*100)/100;return[k,P,R,j]}throw new Error("unknown hex color: "+d)},Ni=_i,jv=F,a1=T,zv=S.type,l1=M,Wv=tr;a1.prototype.hex=function(d){return Wv(this._rgb,d)},jv.hex=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];return new(Function.prototype.bind.apply(a1,[null].concat(d,["hex"])))},l1.format.hex=Ni,l1.autodetect.push({p:4,test:function(d){for(var h=[],f=arguments.length-1;f-- >0;)h[f]=arguments[f+1];if(!h.length&&zv(d)==="string"&&[3,4,5,6,7,8,9].indexOf(d.length)>=0)return"hex"}});var Hv=S.unpack,o1=S.TWOPI,Uv=Math.min,Vv=Math.sqrt,Gv=Math.acos,Yv=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];var f=Hv(d,"rgb"),x=f[0],L=f[1],N=f[2];x/=255,L/=255,N/=255;var k,P=Uv(x,L,N),R=(x+L+N)/3,j=R>0?1-P/R:0;return j===0?k=NaN:(k=(x-L+(x-N))/2,k/=Vv((x-L)*(x-L)+(x-N)*(L-N)),k=Gv(k),N>L&&(k=o1-k),k/=o1),[k*360,j,R]},Zv=Yv,qv=S.unpack,Wc=S.limit,Wa=S.TWOPI,Hc=S.PITHIRD,Ha=Math.cos,Kv=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];d=qv(d,"hsi");var f=d[0],x=d[1],L=d[2],N,k,P;return isNaN(f)&&(f=0),isNaN(x)&&(x=0),f>360&&(f-=360),f<0&&(f+=360),f/=360,f<1/3?(P=(1-x)/3,N=(1+x*Ha(Wa*f)/Ha(Hc-Wa*f))/3,k=1-(P+N)):f<2/3?(f-=1/3,N=(1-x)/3,k=(1+x*Ha(Wa*f)/Ha(Hc-Wa*f))/3,P=1-(N+k)):(f-=2/3,k=(1-x)/3,P=(1+x*Ha(Wa*f)/Ha(Hc-Wa*f))/3,N=1-(k+P)),N=Wc(L*N*3),k=Wc(L*k*3),P=Wc(L*P*3),[N*255,k*255,P*255,d.length>3?d[3]:1]},Qv=Kv,Xv=S.unpack,Jv=S.type,e4=F,i1=T,s1=M,n4=Zv;i1.prototype.hsi=function(){return n4(this._rgb)},e4.hsi=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];return new(Function.prototype.bind.apply(i1,[null].concat(d,["hsi"])))},s1.format.hsi=Qv,s1.autodetect.push({p:2,test:function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];if(d=Xv(d,"hsi"),Jv(d)==="array"&&d.length===3)return"hsi"}});var t4=S.unpack,r4=S.type,a4=F,c1=T,d1=M,l4=ea;c1.prototype.hsl=function(){return l4(this._rgb)},a4.hsl=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];return new(Function.prototype.bind.apply(c1,[null].concat(d,["hsl"])))},d1.format.hsl=nr,d1.autodetect.push({p:2,test:function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];if(d=t4(d,"hsl"),r4(d)==="array"&&d.length===3)return"hsl"}});var o4=S.unpack,i4=Math.min,s4=Math.max,c4=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];d=o4(d,"rgb");var f=d[0],x=d[1],L=d[2],N=i4(f,x,L),k=s4(f,x,L),P=k-N,R,j,H;return H=k/255,k===0?(R=Number.NaN,j=0):(j=P/k,f===k&&(R=(x-L)/P),x===k&&(R=2+(L-f)/P),L===k&&(R=4+(f-x)/P),R*=60,R<0&&(R+=360)),[R,j,H]},d4=c4,u4=S.unpack,h4=Math.floor,p4=function(){for(var d,h,f,x,L,N,k=[],P=arguments.length;P--;)k[P]=arguments[P];k=u4(k,"hsv");var R=k[0],j=k[1],H=k[2],Q,V,te;if(H*=255,j===0)Q=V=te=H;else{R===360&&(R=0),R>360&&(R-=360),R<0&&(R+=360),R/=60;var ee=h4(R),be=R-ee,ke=H*(1-j),$e=H*(1-j*be),Pe=H*(1-j*(1-be));switch(ee){case 0:d=[H,Pe,ke],Q=d[0],V=d[1],te=d[2];break;case 1:h=[$e,H,ke],Q=h[0],V=h[1],te=h[2];break;case 2:f=[ke,H,Pe],Q=f[0],V=f[1],te=f[2];break;case 3:x=[ke,$e,H],Q=x[0],V=x[1],te=x[2];break;case 4:L=[Pe,ke,H],Q=L[0],V=L[1],te=L[2];break;case 5:N=[H,ke,$e],Q=N[0],V=N[1],te=N[2];break}}return[Q,V,te,k.length>3?k[3]:1]},f4=p4,m4=S.unpack,g4=S.type,v4=F,u1=T,h1=M,b4=d4;u1.prototype.hsv=function(){return b4(this._rgb)},v4.hsv=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];return new(Function.prototype.bind.apply(u1,[null].concat(d,["hsv"])))},h1.format.hsv=f4,h1.autodetect.push({p:2,test:function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];if(d=m4(d,"hsv"),g4(d)==="array"&&d.length===3)return"hsv"}});var $i={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},Ua=$i,y4=S.unpack,p1=Math.pow,w4=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];var f=y4(d,"rgb"),x=f[0],L=f[1],N=f[2],k=x4(x,L,N),P=k[0],R=k[1],j=k[2],H=116*R-16;return[H<0?0:H,500*(P-R),200*(R-j)]},Uc=function(d){return(d/=255)<=.04045?d/12.92:p1((d+.055)/1.055,2.4)},Vc=function(d){return d>Ua.t3?p1(d,1/3):d/Ua.t2+Ua.t0},x4=function(d,h,f){d=Uc(d),h=Uc(h),f=Uc(f);var x=Vc((.4124564*d+.3575761*h+.1804375*f)/Ua.Xn),L=Vc((.2126729*d+.7151522*h+.072175*f)/Ua.Yn),N=Vc((.0193339*d+.119192*h+.9503041*f)/Ua.Zn);return[x,L,N]},f1=w4,Va=$i,C4=S.unpack,S4=Math.pow,k4=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];d=C4(d,"lab");var f=d[0],x=d[1],L=d[2],N,k,P,R,j,H;return k=(f+16)/116,N=isNaN(x)?k:k+x/500,P=isNaN(L)?k:k-L/200,k=Va.Yn*Yc(k),N=Va.Xn*Yc(N),P=Va.Zn*Yc(P),R=Gc(3.2404542*N-1.5371385*k-.4985314*P),j=Gc(-.969266*N+1.8760108*k+.041556*P),H=Gc(.0556434*N-.2040259*k+1.0572252*P),[R,j,H,d.length>3?d[3]:1]},Gc=function(d){return 255*(d<=.00304?12.92*d:1.055*S4(d,1/2.4)-.055)},Yc=function(d){return d>Va.t1?d*d*d:Va.t2*(d-Va.t0)},m1=k4,T4=S.unpack,L4=S.type,_4=F,g1=T,v1=M,N4=f1;g1.prototype.lab=function(){return N4(this._rgb)},_4.lab=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];return new(Function.prototype.bind.apply(g1,[null].concat(d,["lab"])))},v1.format.lab=m1,v1.autodetect.push({p:2,test:function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];if(d=T4(d,"lab"),L4(d)==="array"&&d.length===3)return"lab"}});var $4=S.unpack,E4=S.RAD2DEG,I4=Math.sqrt,M4=Math.atan2,P4=Math.round,R4=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];var f=$4(d,"lab"),x=f[0],L=f[1],N=f[2],k=I4(L*L+N*N),P=(M4(N,L)*E4+360)%360;return P4(k*1e4)===0&&(P=Number.NaN),[x,k,P]},b1=R4,A4=S.unpack,O4=f1,F4=b1,B4=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];var f=A4(d,"rgb"),x=f[0],L=f[1],N=f[2],k=O4(x,L,N),P=k[0],R=k[1],j=k[2];return F4(P,R,j)},D4=B4,j4=S.unpack,z4=S.DEG2RAD,W4=Math.sin,H4=Math.cos,U4=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];var f=j4(d,"lch"),x=f[0],L=f[1],N=f[2];return isNaN(N)&&(N=0),N=N*z4,[x,H4(N)*L,W4(N)*L]},y1=U4,V4=S.unpack,G4=y1,Y4=m1,Z4=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];d=V4(d,"lch");var f=d[0],x=d[1],L=d[2],N=G4(f,x,L),k=N[0],P=N[1],R=N[2],j=Y4(k,P,R),H=j[0],Q=j[1],V=j[2];return[H,Q,V,d.length>3?d[3]:1]},w1=Z4,q4=S.unpack,K4=w1,Q4=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];var f=q4(d,"hcl").reverse();return K4.apply(void 0,f)},X4=Q4,J4=S.unpack,e6=S.type,x1=F,Ei=T,Zc=M,C1=D4;Ei.prototype.lch=function(){return C1(this._rgb)},Ei.prototype.hcl=function(){return C1(this._rgb).reverse()},x1.lch=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];return new(Function.prototype.bind.apply(Ei,[null].concat(d,["lch"])))},x1.hcl=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];return new(Function.prototype.bind.apply(Ei,[null].concat(d,["hcl"])))},Zc.format.lch=w1,Zc.format.hcl=X4,["lch","hcl"].forEach(function(d){return Zc.autodetect.push({p:2,test:function(){for(var h=[],f=arguments.length;f--;)h[f]=arguments[f];if(h=J4(h,d),e6(h)==="array"&&h.length===3)return d}})});var n6={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},S1=n6,t6=T,k1=M,r6=S.type,ao=S1,a6=Ni,l6=tr;t6.prototype.name=function(){for(var d=l6(this._rgb,"rgb"),h=0,f=Object.keys(ao);h<f.length;h+=1){var x=f[h];if(ao[x]===d)return x.toLowerCase()}return d},k1.format.named=function(d){if(d=d.toLowerCase(),ao[d])return a6(ao[d]);throw new Error("unknown color name: "+d)},k1.autodetect.push({p:5,test:function(d){for(var h=[],f=arguments.length-1;f-- >0;)h[f]=arguments[f+1];if(!h.length&&r6(d)==="string"&&ao[d.toLowerCase()])return"named"}});var o6=S.unpack,i6=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];var f=o6(d,"rgb"),x=f[0],L=f[1],N=f[2];return(x<<16)+(L<<8)+N},s6=i6,c6=S.type,d6=function(d){if(c6(d)=="number"&&d>=0&&d<=16777215){var h=d>>16,f=d>>8&255,x=d&255;return[h,f,x,1]}throw new Error("unknown num color: "+d)},u6=d6,h6=F,T1=T,L1=M,p6=S.type,f6=s6;T1.prototype.num=function(){return f6(this._rgb)},h6.num=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];return new(Function.prototype.bind.apply(T1,[null].concat(d,["num"])))},L1.format.num=u6,L1.autodetect.push({p:5,test:function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];if(d.length===1&&p6(d[0])==="number"&&d[0]>=0&&d[0]<=16777215)return"num"}});var m6=F,qc=T,_1=M,N1=S.unpack,$1=S.type,E1=Math.round;qc.prototype.rgb=function(d){return d===void 0&&(d=!0),d===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(E1)},qc.prototype.rgba=function(d){return d===void 0&&(d=!0),this._rgb.slice(0,4).map(function(h,f){return f<3?d===!1?h:E1(h):h})},m6.rgb=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];return new(Function.prototype.bind.apply(qc,[null].concat(d,["rgb"])))},_1.format.rgb=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];var f=N1(d,"rgba");return f[3]===void 0&&(f[3]=1),f},_1.autodetect.push({p:3,test:function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];if(d=N1(d,"rgba"),$1(d)==="array"&&(d.length===3||d.length===4&&$1(d[3])=="number"&&d[3]>=0&&d[3]<=1))return"rgb"}});var Ii=Math.log,g6=function(d){var h=d/100,f,x,L;return h<66?(f=255,x=h<6?0:-155.25485562709179-.44596950469579133*(x=h-2)+104.49216199393888*Ii(x),L=h<20?0:-254.76935184120902+.8274096064007395*(L=h-10)+115.67994401066147*Ii(L)):(f=351.97690566805693+.114206453784165*(f=h-55)-40.25366309332127*Ii(f),x=325.4494125711974+.07943456536662342*(x=h-50)-28.0852963507957*Ii(x),L=255),[f,x,L,1]},I1=g6,v6=I1,b6=S.unpack,y6=Math.round,w6=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];for(var f=b6(d,"rgb"),x=f[0],L=f[2],N=1e3,k=4e4,P=.4,R;k-N>P;){R=(k+N)*.5;var j=v6(R);j[2]/j[0]>=L/x?k=R:N=R}return y6(R)},x6=w6,Kc=F,Mi=T,Qc=M,C6=x6;Mi.prototype.temp=Mi.prototype.kelvin=Mi.prototype.temperature=function(){return C6(this._rgb)},Kc.temp=Kc.kelvin=Kc.temperature=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];return new(Function.prototype.bind.apply(Mi,[null].concat(d,["temp"])))},Qc.format.temp=Qc.format.kelvin=Qc.format.temperature=I1;var S6=S.unpack,Xc=Math.cbrt,k6=Math.pow,T6=Math.sign,L6=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];var f=S6(d,"rgb"),x=f[0],L=f[1],N=f[2],k=[Jc(x/255),Jc(L/255),Jc(N/255)],P=k[0],R=k[1],j=k[2],H=Xc(.4122214708*P+.5363325363*R+.0514459929*j),Q=Xc(.2119034982*P+.6806995451*R+.1073969566*j),V=Xc(.0883024619*P+.2817188376*R+.6299787005*j);return[.2104542553*H+.793617785*Q-.0040720468*V,1.9779984951*H-2.428592205*Q+.4505937099*V,.0259040371*H+.7827717662*Q-.808675766*V]},M1=L6;function Jc(d){var h=Math.abs(d);return h<.04045?d/12.92:(T6(d)||1)*k6((h+.055)/1.055,2.4)}var _6=S.unpack,Pi=Math.pow,N6=Math.sign,$6=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];d=_6(d,"lab");var f=d[0],x=d[1],L=d[2],N=Pi(f+.3963377774*x+.2158037573*L,3),k=Pi(f-.1055613458*x-.0638541728*L,3),P=Pi(f-.0894841775*x-1.291485548*L,3);return[255*ed(4.0767416621*N-3.3077115913*k+.2309699292*P),255*ed(-1.2684380046*N+2.6097574011*k-.3413193965*P),255*ed(-.0041960863*N-.7034186147*k+1.707614701*P),d.length>3?d[3]:1]},P1=$6;function ed(d){var h=Math.abs(d);return h>.0031308?(N6(d)||1)*(1.055*Pi(h,1/2.4)-.055):d*12.92}var E6=S.unpack,I6=S.type,M6=F,R1=T,A1=M,P6=M1;R1.prototype.oklab=function(){return P6(this._rgb)},M6.oklab=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];return new(Function.prototype.bind.apply(R1,[null].concat(d,["oklab"])))},A1.format.oklab=P1,A1.autodetect.push({p:3,test:function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];if(d=E6(d,"oklab"),I6(d)==="array"&&d.length===3)return"oklab"}});var R6=S.unpack,A6=M1,O6=b1,F6=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];var f=R6(d,"rgb"),x=f[0],L=f[1],N=f[2],k=A6(x,L,N),P=k[0],R=k[1],j=k[2];return O6(P,R,j)},B6=F6,D6=S.unpack,j6=y1,z6=P1,W6=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];d=D6(d,"lch");var f=d[0],x=d[1],L=d[2],N=j6(f,x,L),k=N[0],P=N[1],R=N[2],j=z6(k,P,R),H=j[0],Q=j[1],V=j[2];return[H,Q,V,d.length>3?d[3]:1]},H6=W6,U6=S.unpack,V6=S.type,G6=F,O1=T,F1=M,Y6=B6;O1.prototype.oklch=function(){return Y6(this._rgb)},G6.oklch=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];return new(Function.prototype.bind.apply(O1,[null].concat(d,["oklch"])))},F1.format.oklch=H6,F1.autodetect.push({p:3,test:function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];if(d=U6(d,"oklch"),V6(d)==="array"&&d.length===3)return"oklch"}});var B1=T,Z6=S.type;B1.prototype.alpha=function(d,h){return h===void 0&&(h=!1),d!==void 0&&Z6(d)==="number"?h?(this._rgb[3]=d,this):new B1([this._rgb[0],this._rgb[1],this._rgb[2],d],"rgb"):this._rgb[3]};var q6=T;q6.prototype.clipped=function(){return this._rgb._clipped||!1};var sa=T,K6=$i;sa.prototype.darken=function(d){d===void 0&&(d=1);var h=this,f=h.lab();return f[0]-=K6.Kn*d,new sa(f,"lab").alpha(h.alpha(),!0)},sa.prototype.brighten=function(d){return d===void 0&&(d=1),this.darken(-d)},sa.prototype.darker=sa.prototype.darken,sa.prototype.brighter=sa.prototype.brighten;var Q6=T;Q6.prototype.get=function(d){var h=d.split("."),f=h[0],x=h[1],L=this[f]();if(x){var N=f.indexOf(x)-(f.substr(0,2)==="ok"?2:0);if(N>-1)return L[N];throw new Error("unknown channel "+x+" in mode "+f)}else return L};var Ga=T,X6=S.type,J6=Math.pow,e8=1e-7,n8=20;Ga.prototype.luminance=function(d){if(d!==void 0&&X6(d)==="number"){if(d===0)return new Ga([0,0,0,this._rgb[3]],"rgb");if(d===1)return new Ga([255,255,255,this._rgb[3]],"rgb");var h=this.luminance(),f="rgb",x=n8,L=function(k,P){var R=k.interpolate(P,.5,f),j=R.luminance();return Math.abs(d-j)<e8||!x--?R:j>d?L(k,R):L(R,P)},N=(h>d?L(new Ga([0,0,0]),this):L(this,new Ga([255,255,255]))).rgb();return new Ga(N.concat([this._rgb[3]]))}return t8.apply(void 0,this._rgb.slice(0,3))};var t8=function(d,h,f){return d=nd(d),h=nd(h),f=nd(f),.2126*d+.7152*h+.0722*f},nd=function(d){return d/=255,d<=.03928?d/12.92:J6((d+.055)/1.055,2.4)},ot={},D1=T,j1=S.type,Ri=ot,z1=function(d,h,f){f===void 0&&(f=.5);for(var x=[],L=arguments.length-3;L-- >0;)x[L]=arguments[L+3];var N=x[0]||"lrgb";if(!Ri[N]&&!x.length&&(N=Object.keys(Ri)[0]),!Ri[N])throw new Error("interpolation mode "+N+" is not defined");return j1(d)!=="object"&&(d=new D1(d)),j1(h)!=="object"&&(h=new D1(h)),Ri[N](d,h,f).alpha(d.alpha()+f*(h.alpha()-d.alpha()))},W1=T,r8=z1;W1.prototype.mix=W1.prototype.interpolate=function(d,h){h===void 0&&(h=.5);for(var f=[],x=arguments.length-2;x-- >0;)f[x]=arguments[x+2];return r8.apply(void 0,[this,d,h].concat(f))};var H1=T;H1.prototype.premultiply=function(d){d===void 0&&(d=!1);var h=this._rgb,f=h[3];return d?(this._rgb=[h[0]*f,h[1]*f,h[2]*f,f],this):new H1([h[0]*f,h[1]*f,h[2]*f,f],"rgb")};var td=T,a8=$i;td.prototype.saturate=function(d){d===void 0&&(d=1);var h=this,f=h.lch();return f[1]+=a8.Kn*d,f[1]<0&&(f[1]=0),new td(f,"lch").alpha(h.alpha(),!0)},td.prototype.desaturate=function(d){return d===void 0&&(d=1),this.saturate(-d)};var U1=T,V1=S.type;U1.prototype.set=function(d,h,f){f===void 0&&(f=!1);var x=d.split("."),L=x[0],N=x[1],k=this[L]();if(N){var P=L.indexOf(N)-(L.substr(0,2)==="ok"?2:0);if(P>-1){if(V1(h)=="string")switch(h.charAt(0)){case"+":k[P]+=+h;break;case"-":k[P]+=+h;break;case"*":k[P]*=+h.substr(1);break;case"/":k[P]/=+h.substr(1);break;default:k[P]=+h}else if(V1(h)==="number")k[P]=h;else throw new Error("unsupported value for Color.set");var R=new U1(k,L);return f?(this._rgb=R._rgb,this):R}throw new Error("unknown channel "+N+" in mode "+L)}else return k};var l8=T,o8=function(d,h,f){var x=d._rgb,L=h._rgb;return new l8(x[0]+f*(L[0]-x[0]),x[1]+f*(L[1]-x[1]),x[2]+f*(L[2]-x[2]),"rgb")};ot.rgb=o8;var i8=T,rd=Math.sqrt,Ya=Math.pow,s8=function(d,h,f){var x=d._rgb,L=x[0],N=x[1],k=x[2],P=h._rgb,R=P[0],j=P[1],H=P[2];return new i8(rd(Ya(L,2)*(1-f)+Ya(R,2)*f),rd(Ya(N,2)*(1-f)+Ya(j,2)*f),rd(Ya(k,2)*(1-f)+Ya(H,2)*f),"rgb")};ot.lrgb=s8;var c8=T,d8=function(d,h,f){var x=d.lab(),L=h.lab();return new c8(x[0]+f*(L[0]-x[0]),x[1]+f*(L[1]-x[1]),x[2]+f*(L[2]-x[2]),"lab")};ot.lab=d8;var G1=T,Za=function(d,h,f,x){var L,N,k,P;x==="hsl"?(k=d.hsl(),P=h.hsl()):x==="hsv"?(k=d.hsv(),P=h.hsv()):x==="hcg"?(k=d.hcg(),P=h.hcg()):x==="hsi"?(k=d.hsi(),P=h.hsi()):x==="lch"||x==="hcl"?(x="hcl",k=d.hcl(),P=h.hcl()):x==="oklch"&&(k=d.oklch().reverse(),P=h.oklch().reverse());var R,j,H,Q,V,te;(x.substr(0,1)==="h"||x==="oklch")&&(L=k,R=L[0],H=L[1],V=L[2],N=P,j=N[0],Q=N[1],te=N[2]);var ee,be,ke,$e;return!isNaN(R)&&!isNaN(j)?(j>R&&j-R>180?$e=j-(R+360):j<R&&R-j>180?$e=j+360-R:$e=j-R,be=R+f*$e):isNaN(R)?isNaN(j)?be=Number.NaN:(be=j,(V==1||V==0)&&x!="hsv"&&(ee=Q)):(be=R,(te==1||te==0)&&x!="hsv"&&(ee=H)),ee===void 0&&(ee=H+f*(Q-H)),ke=V+f*(te-V),x==="oklch"?new G1([ke,ee,be],x):new G1([be,ee,ke],x)},u8=Za,Y1=function(d,h,f){return u8(d,h,f,"lch")};ot.lch=Y1,ot.hcl=Y1;var h8=T,p8=function(d,h,f){var x=d.num(),L=h.num();return new h8(x+f*(L-x),"num")};ot.num=p8;var f8=Za,m8=function(d,h,f){return f8(d,h,f,"hcg")};ot.hcg=m8;var g8=Za,v8=function(d,h,f){return g8(d,h,f,"hsi")};ot.hsi=v8;var b8=Za,y8=function(d,h,f){return b8(d,h,f,"hsl")};ot.hsl=y8;var w8=Za,x8=function(d,h,f){return w8(d,h,f,"hsv")};ot.hsv=x8;var C8=T,S8=function(d,h,f){var x=d.oklab(),L=h.oklab();return new C8(x[0]+f*(L[0]-x[0]),x[1]+f*(L[1]-x[1]),x[2]+f*(L[2]-x[2]),"oklab")};ot.oklab=S8;var k8=Za,T8=function(d,h,f){return k8(d,h,f,"oklch")};ot.oklch=T8;var ad=T,L8=S.clip_rgb,ld=Math.pow,od=Math.sqrt,id=Math.PI,Z1=Math.cos,q1=Math.sin,_8=Math.atan2,N8=function(d,h,f){h===void 0&&(h="lrgb"),f===void 0&&(f=null);var x=d.length;f||(f=Array.from(new Array(x)).map(function(){return 1}));var L=x/f.reduce(function(be,ke){return be+ke});if(f.forEach(function(be,ke){f[ke]*=L}),d=d.map(function(be){return new ad(be)}),h==="lrgb")return $8(d,f);for(var N=d.shift(),k=N.get(h),P=[],R=0,j=0,H=0;H<k.length;H++)if(k[H]=(k[H]||0)*f[0],P.push(isNaN(k[H])?0:f[0]),h.charAt(H)==="h"&&!isNaN(k[H])){var Q=k[H]/180*id;R+=Z1(Q)*f[0],j+=q1(Q)*f[0]}var V=N.alpha()*f[0];d.forEach(function(be,ke){var $e=be.get(h);V+=be.alpha()*f[ke+1];for(var Pe=0;Pe<k.length;Pe++)if(!isNaN($e[Pe]))if(P[Pe]+=f[ke+1],h.charAt(Pe)==="h"){var Tn=$e[Pe]/180*id;R+=Z1(Tn)*f[ke+1],j+=q1(Tn)*f[ke+1]}else k[Pe]+=$e[Pe]*f[ke+1]});for(var te=0;te<k.length;te++)if(h.charAt(te)==="h"){for(var ee=_8(j/P[te],R/P[te])/id*180;ee<0;)ee+=360;for(;ee>=360;)ee-=360;k[te]=ee}else k[te]=k[te]/P[te];return V/=x,new ad(k,h).alpha(V>.99999?1:V,!0)},$8=function(d,h){for(var f=d.length,x=[0,0,0,0],L=0;L<d.length;L++){var N=d[L],k=h[L]/f,P=N._rgb;x[0]+=ld(P[0],2)*k,x[1]+=ld(P[1],2)*k,x[2]+=ld(P[2],2)*k,x[3]+=P[3]*k}return x[0]=od(x[0]),x[1]=od(x[1]),x[2]=od(x[2]),x[3]>.9999999&&(x[3]=1),new ad(L8(x))},$t=F,qa=S.type,E8=Math.pow,sd=function(d){var h="rgb",f=$t("#ccc"),x=0,L=[0,1],N=[],k=[0,0],P=!1,R=[],j=!1,H=0,Q=1,V=!1,te={},ee=!0,be=1,ke=function(G){if(G=G||["#fff","#000"],G&&qa(G)==="string"&&$t.brewer&&$t.brewer[G.toLowerCase()]&&(G=$t.brewer[G.toLowerCase()]),qa(G)==="array"){G.length===1&&(G=[G[0],G[0]]),G=G.slice(0);for(var se=0;se<G.length;se++)G[se]=$t(G[se]);N.length=0;for(var xe=0;xe<G.length;xe++)N.push(xe/(G.length-1))}return Qn(),R=G},$e=function(G){if(P!=null){for(var se=P.length-1,xe=0;xe<se&&G>=P[xe];)xe++;return xe-1}return 0},Pe=function(G){return G},Tn=function(G){return G},Cn=function(G,se){var xe,ye;if(se==null&&(se=!1),isNaN(G)||G===null)return f;if(se)ye=G;else if(P&&P.length>2){var Ln=$e(G);ye=Ln/(P.length-2)}else Q!==H?ye=(G-H)/(Q-H):ye=1;ye=Tn(ye),se||(ye=Pe(ye)),be!==1&&(ye=E8(ye,be)),ye=k[0]+ye*(1-k[0]-k[1]),ye=Math.min(1,Math.max(0,ye));var He=Math.floor(ye*1e4);if(ee&&te[He])xe=te[He];else{if(qa(R)==="array")for(var Ee=0;Ee<N.length;Ee++){var Oe=N[Ee];if(ye<=Oe){xe=R[Ee];break}if(ye>=Oe&&Ee===N.length-1){xe=R[Ee];break}if(ye>Oe&&ye<N[Ee+1]){ye=(ye-Oe)/(N[Ee+1]-Oe),xe=$t.interpolate(R[Ee],R[Ee+1],ye,h);break}}else qa(R)==="function"&&(xe=R(ye));ee&&(te[He]=xe)}return xe},Qn=function(){return te={}};ke(d);var _e=function(G){var se=$t(Cn(G));return j&&se[j]?se[j]():se};return _e.classes=function(G){if(G!=null){if(qa(G)==="array")P=G,L=[G[0],G[G.length-1]];else{var se=$t.analyze(L);G===0?P=[se.min,se.max]:P=$t.limits(se,"e",G)}return _e}return P},_e.domain=function(G){if(!arguments.length)return L;H=G[0],Q=G[G.length-1],N=[];var se=R.length;if(G.length===se&&H!==Q)for(var xe=0,ye=Array.from(G);xe<ye.length;xe+=1){var Ln=ye[xe];N.push((Ln-H)/(Q-H))}else{for(var He=0;He<se;He++)N.push(He/(se-1));if(G.length>2){var Ee=G.map(function(Fe,Be){return Be/(G.length-1)}),Oe=G.map(function(Fe){return(Fe-H)/(Q-H)});Oe.every(function(Fe,Be){return Ee[Be]===Fe})||(Tn=function(Fe){if(Fe<=0||Fe>=1)return Fe;for(var Be=0;Fe>=Oe[Be+1];)Be++;var It=(Fe-Oe[Be])/(Oe[Be+1]-Oe[Be]),kr=Ee[Be]+It*(Ee[Be+1]-Ee[Be]);return kr})}}return L=[H,Q],_e},_e.mode=function(G){return arguments.length?(h=G,Qn(),_e):h},_e.range=function(G,se){return ke(G),_e},_e.out=function(G){return j=G,_e},_e.spread=function(G){return arguments.length?(x=G,_e):x},_e.correctLightness=function(G){return G==null&&(G=!0),V=G,Qn(),V?Pe=function(se){for(var xe=Cn(0,!0).lab()[0],ye=Cn(1,!0).lab()[0],Ln=xe>ye,He=Cn(se,!0).lab()[0],Ee=xe+(ye-xe)*se,Oe=He-Ee,Fe=0,Be=1,It=20;Math.abs(Oe)>.01&&It-- >0;)(function(){return Ln&&(Oe*=-1),Oe<0?(Fe=se,se+=(Be-se)*.5):(Be=se,se+=(Fe-se)*.5),He=Cn(se,!0).lab()[0],Oe=He-Ee})();return se}:Pe=function(se){return se},_e},_e.padding=function(G){return G!=null?(qa(G)==="number"&&(G=[G,G]),k=G,_e):k},_e.colors=function(G,se){arguments.length<2&&(se="hex");var xe=[];if(arguments.length===0)xe=R.slice(0);else if(G===1)xe=[_e(.5)];else if(G>1){var ye=L[0],Ln=L[1]-ye;xe=I8(0,G,!1).map(function(Be){return _e(ye+Be/(G-1)*Ln)})}else{d=[];var He=[];if(P&&P.length>2)for(var Ee=1,Oe=P.length,Fe=1<=Oe;Fe?Ee<Oe:Ee>Oe;Fe?Ee++:Ee--)He.push((P[Ee-1]+P[Ee])*.5);else He=L;xe=He.map(function(Be){return _e(Be)})}return $t[se]&&(xe=xe.map(function(Be){return Be[se]()})),xe},_e.cache=function(G){return G!=null?(ee=G,_e):ee},_e.gamma=function(G){return G!=null?(be=G,_e):be},_e.nodata=function(G){return G!=null?(f=$t(G),_e):f},_e};function I8(d,h,f){for(var x=[],L=d<h,N=f?L?h+1:h-1:h,k=d;L?k<N:k>N;L?k++:k--)x.push(k);return x}var lo=T,M8=sd,P8=function(d){for(var h=[1,1],f=1;f<d;f++){for(var x=[1],L=1;L<=h.length;L++)x[L]=(h[L]||0)+h[L-1];h=x}return h},R8=function(d){var h,f,x,L,N,k,P;if(d=d.map(function(V){return new lo(V)}),d.length===2)h=d.map(function(V){return V.lab()}),N=h[0],k=h[1],L=function(V){var te=[0,1,2].map(function(ee){return N[ee]+V*(k[ee]-N[ee])});return new lo(te,"lab")};else if(d.length===3)f=d.map(function(V){return V.lab()}),N=f[0],k=f[1],P=f[2],L=function(V){var te=[0,1,2].map(function(ee){return(1-V)*(1-V)*N[ee]+2*(1-V)*V*k[ee]+V*V*P[ee]});return new lo(te,"lab")};else if(d.length===4){var R;x=d.map(function(V){return V.lab()}),N=x[0],k=x[1],P=x[2],R=x[3],L=function(V){var te=[0,1,2].map(function(ee){return(1-V)*(1-V)*(1-V)*N[ee]+3*(1-V)*(1-V)*V*k[ee]+3*(1-V)*V*V*P[ee]+V*V*V*R[ee]});return new lo(te,"lab")}}else if(d.length>=5){var j,H,Q;j=d.map(function(V){return V.lab()}),Q=d.length-1,H=P8(Q),L=function(V){var te=1-V,ee=[0,1,2].map(function(be){return j.reduce(function(ke,$e,Pe){return ke+H[Pe]*Math.pow(te,Q-Pe)*Math.pow(V,Pe)*$e[be]},0)});return new lo(ee,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return L},A8=function(d){var h=R8(d);return h.scale=function(){return M8(h)},h},cd=F,Et=function(d,h,f){if(!Et[f])throw new Error("unknown blend mode "+f);return Et[f](d,h)},Cr=function(d){return function(h,f){var x=cd(f).rgb(),L=cd(h).rgb();return cd.rgb(d(x,L))}},Sr=function(d){return function(h,f){var x=[];return x[0]=d(h[0],f[0]),x[1]=d(h[1],f[1]),x[2]=d(h[2],f[2]),x}},O8=function(d){return d},F8=function(d,h){return d*h/255},B8=function(d,h){return d>h?h:d},D8=function(d,h){return d>h?d:h},j8=function(d,h){return 255*(1-(1-d/255)*(1-h/255))},z8=function(d,h){return h<128?2*d*h/255:255*(1-2*(1-d/255)*(1-h/255))},W8=function(d,h){return 255*(1-(1-h/255)/(d/255))},H8=function(d,h){return d===255?255:(d=255*(h/255)/(1-d/255),d>255?255:d)};Et.normal=Cr(Sr(O8)),Et.multiply=Cr(Sr(F8)),Et.screen=Cr(Sr(j8)),Et.overlay=Cr(Sr(z8)),Et.darken=Cr(Sr(B8)),Et.lighten=Cr(Sr(D8)),Et.dodge=Cr(Sr(H8)),Et.burn=Cr(Sr(W8));for(var U8=Et,dd=S.type,V8=S.clip_rgb,G8=S.TWOPI,Y8=Math.pow,Z8=Math.sin,q8=Math.cos,K1=F,K8=function(d,h,f,x,L){d===void 0&&(d=300),h===void 0&&(h=-1.5),f===void 0&&(f=1),x===void 0&&(x=1),L===void 0&&(L=[0,1]);var N=0,k;dd(L)==="array"?k=L[1]-L[0]:(k=0,L=[L,L]);var P=function(R){var j=G8*((d+120)/360+h*R),H=Y8(L[0]+k*R,x),Q=N!==0?f[0]+R*N:f,V=Q*H*(1-H)/2,te=q8(j),ee=Z8(j),be=H+V*(-.14861*te+1.78277*ee),ke=H+V*(-.29227*te-.90649*ee),$e=H+V*(1.97294*te);return K1(V8([be*255,ke*255,$e*255,1]))};return P.start=function(R){return R==null?d:(d=R,P)},P.rotations=function(R){return R==null?h:(h=R,P)},P.gamma=function(R){return R==null?x:(x=R,P)},P.hue=function(R){return R==null?f:(f=R,dd(f)==="array"?(N=f[1]-f[0],N===0&&(f=f[1])):N=0,P)},P.lightness=function(R){return R==null?L:(dd(R)==="array"?(L=R,k=R[1]-R[0]):(L=[R,R],k=0),P)},P.scale=function(){return K1.scale(P)},P.hue(f),P},Q8=T,X8="0123456789abcdef",J8=Math.floor,eb=Math.random,nb=function(){for(var d="#",h=0;h<6;h++)d+=X8.charAt(J8(eb()*16));return new Q8(d,"hex")},ud=p,Q1=Math.log,tb=Math.pow,rb=Math.floor,ab=Math.abs,X1=function(d,h){h===void 0&&(h=null);var f={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return ud(d)==="object"&&(d=Object.values(d)),d.forEach(function(x){h&&ud(x)==="object"&&(x=x[h]),x!=null&&!isNaN(x)&&(f.values.push(x),f.sum+=x,x<f.min&&(f.min=x),x>f.max&&(f.max=x),f.count+=1)}),f.domain=[f.min,f.max],f.limits=function(x,L){return J1(f,x,L)},f},J1=function(d,h,f){h===void 0&&(h="equal"),f===void 0&&(f=7),ud(d)=="array"&&(d=X1(d));var x=d.min,L=d.max,N=d.values.sort(function(pd,fd){return pd-fd});if(f===1)return[x,L];var k=[];if(h.substr(0,1)==="c"&&(k.push(x),k.push(L)),h.substr(0,1)==="e"){k.push(x);for(var P=1;P<f;P++)k.push(x+P/f*(L-x));k.push(L)}else if(h.substr(0,1)==="l"){if(x<=0)throw new Error("Logarithmic scales are only possible for values > 0");var R=Math.LOG10E*Q1(x),j=Math.LOG10E*Q1(L);k.push(x);for(var H=1;H<f;H++)k.push(tb(10,R+H/f*(j-R)));k.push(L)}else if(h.substr(0,1)==="q"){k.push(x);for(var Q=1;Q<f;Q++){var V=(N.length-1)*Q/f,te=rb(V);if(te===V)k.push(N[te]);else{var ee=V-te;k.push(N[te]*(1-ee)+N[te+1]*ee)}}k.push(L)}else if(h.substr(0,1)==="k"){var be,ke=N.length,$e=new Array(ke),Pe=new Array(f),Tn=!0,Cn=0,Qn=null;Qn=[],Qn.push(x);for(var _e=1;_e<f;_e++)Qn.push(x+_e/f*(L-x));for(Qn.push(L);Tn;){for(var G=0;G<f;G++)Pe[G]=0;for(var se=0;se<ke;se++)for(var xe=N[se],ye=Number.MAX_VALUE,Ln=void 0,He=0;He<f;He++){var Ee=ab(Qn[He]-xe);Ee<ye&&(ye=Ee,Ln=He),Pe[Ln]++,$e[se]=Ln}for(var Oe=new Array(f),Fe=0;Fe<f;Fe++)Oe[Fe]=null;for(var Be=0;Be<ke;Be++)be=$e[Be],Oe[be]===null?Oe[be]=N[Be]:Oe[be]+=N[Be];for(var It=0;It<f;It++)Oe[It]*=1/Pe[It];Tn=!1;for(var kr=0;kr<f;kr++)if(Oe[kr]!==Qn[kr]){Tn=!0;break}Qn=Oe,Cn++,Cn>200&&(Tn=!1)}for(var Tr={},Ka=0;Ka<f;Ka++)Tr[Ka]=[];for(var Qa=0;Qa<ke;Qa++)be=$e[Qa],Tr[be].push(N[Qa]);for(var ar=[],ca=0;ca<f;ca++)ar.push(Tr[ca][0]),ar.push(Tr[ca][Tr[ca].length-1]);ar=ar.sort(function(pd,fd){return pd-fd}),k.push(ar[0]);for(var oo=1;oo<ar.length;oo+=2){var da=ar[oo];!isNaN(da)&&k.indexOf(da)===-1&&k.push(da)}}return k},ef={analyze:X1,limits:J1},nf=T,lb=function(d,h){d=new nf(d),h=new nf(h);var f=d.luminance(),x=h.luminance();return f>x?(f+.05)/(x+.05):(x+.05)/(f+.05)},tf=T,rr=Math.sqrt,dn=Math.pow,ob=Math.min,ib=Math.max,rf=Math.atan2,af=Math.abs,Ai=Math.cos,lf=Math.sin,sb=Math.exp,of=Math.PI,cb=function(d,h,f,x,L){f===void 0&&(f=1),x===void 0&&(x=1),L===void 0&&(L=1);var N=function(da){return 360*da/(2*of)},k=function(da){return 2*of*da/360};d=new tf(d),h=new tf(h);var P=Array.from(d.lab()),R=P[0],j=P[1],H=P[2],Q=Array.from(h.lab()),V=Q[0],te=Q[1],ee=Q[2],be=(R+V)/2,ke=rr(dn(j,2)+dn(H,2)),$e=rr(dn(te,2)+dn(ee,2)),Pe=(ke+$e)/2,Tn=.5*(1-rr(dn(Pe,7)/(dn(Pe,7)+dn(25,7)))),Cn=j*(1+Tn),Qn=te*(1+Tn),_e=rr(dn(Cn,2)+dn(H,2)),G=rr(dn(Qn,2)+dn(ee,2)),se=(_e+G)/2,xe=N(rf(H,Cn)),ye=N(rf(ee,Qn)),Ln=xe>=0?xe:xe+360,He=ye>=0?ye:ye+360,Ee=af(Ln-He)>180?(Ln+He+360)/2:(Ln+He)/2,Oe=1-.17*Ai(k(Ee-30))+.24*Ai(k(2*Ee))+.32*Ai(k(3*Ee+6))-.2*Ai(k(4*Ee-63)),Fe=He-Ln;Fe=af(Fe)<=180?Fe:He<=Ln?Fe+360:Fe-360,Fe=2*rr(_e*G)*lf(k(Fe)/2);var Be=V-R,It=G-_e,kr=1+.015*dn(be-50,2)/rr(20+dn(be-50,2)),Tr=1+.045*se,Ka=1+.015*se*Oe,Qa=30*sb(-dn((Ee-275)/25,2)),ar=2*rr(dn(se,7)/(dn(se,7)+dn(25,7))),ca=-ar*lf(2*k(Qa)),oo=rr(dn(Be/(f*kr),2)+dn(It/(x*Tr),2)+dn(Fe/(L*Ka),2)+ca*(It/(x*Tr))*(Fe/(L*Ka)));return ib(0,ob(100,oo))},sf=T,db=function(d,h,f){f===void 0&&(f="lab"),d=new sf(d),h=new sf(h);var x=d.get(f),L=h.get(f),N=0;for(var k in x){var P=(x[k]||0)-(L[k]||0);N+=P*P}return Math.sqrt(N)},ub=T,hb=function(){for(var d=[],h=arguments.length;h--;)d[h]=arguments[h];try{return new(Function.prototype.bind.apply(ub,[null].concat(d))),!0}catch{return!1}},cf=F,df=sd,pb={cool:function(){return df([cf.hsl(180,1,.9),cf.hsl(250,.7,.4)])},hot:function(){return df(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Oi={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},hd=0,uf=Object.keys(Oi);hd<uf.length;hd+=1){var hf=uf[hd];Oi[hf.toLowerCase()]=Oi[hf]}var fb=Oi,xn=F;xn.average=N8,xn.bezier=A8,xn.blend=U8,xn.cubehelix=K8,xn.mix=xn.interpolate=z1,xn.random=nb,xn.scale=sd,xn.analyze=ef.analyze,xn.contrast=lb,xn.deltaE=cb,xn.distance=db,xn.limits=ef.limits,xn.valid=hb,xn.scales=pb,xn.colors=S1,xn.brewer=fb;var mb=xn;return mb})})(wg);var zT=wg.exports;const WT=Xt(zT);function HT(e){const{h:n,s:t,l:r}=e;return WT.hsl(n,t/100,r/100)}const UT=e=>HT(e).luminance(),xg=e=>UT(e)<.5,Ll=({label:e,checked:n,toggle:t})=>c("label",{className:"checkbox no-focus inline",children:[a("input",{type:"checkbox",checked:n,onChange:t}),e]}),Cg=`// redefine any of the following hues to taste...
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
`,VT=()=>{const[e,n]=D.useState({names:!1,info:!1,show5s:!1}),t=i=>n(s=>({...s,[i]:!s[i]})),r=()=>t("names"),l=()=>t("info"),o=()=>t("show5s");return c("div",{className:"prose",children:[a("h1",{children:"Standard Colors"}),a("p",{children:"The following greyscale ranges are also defined."}),c("div",{className:"flex space end",children:[a("h2",{children:"Greyscale Ranges"}),c("div",{className:"text-right color-options",children:[a(Ll,{label:"Show Names",checked:e.names,toggle:r}),a(Ll,{label:"Show Info",checked:e.info,toggle:l}),a(Ll,{label:"Show 5s",checked:e.show5s,toggle:o})]})]}),a("div",{className:`ranges ${e.names?"names":"nameless"}`,children:rc.filter(i=>Yr.ranges[i].greyscale).map(i=>a(GT,{uri:i,range:Yr.ranges[i],options:e},i))}),a("h2",{children:"Brand Hue"}),c("p",{children:["The greyscale ranges are designed to based on your primary brand color. The ",a("code",{children:"grey"})," range is desaturated to around 5%.  The"," ",a("code",{children:"grey20"})," and ",a("code",{children:"grey40"})," ranges are saturated to around 20% and 40% respectively."]}),c("p",{children:["The brand color for this website is ",a("code",{children:"violet"})," which is why these greyscales have a violet tinge to them."]}),c("p",{children:["Each of the colours show above has a corresponding SCSS variable composed of the color name and stop delimited by a hyphen, e.g."," ",a("code",{children:"$red-0"})," through to ",a("code",{children:"$grey-100"}),".  They are also defined as CSS custom properties, e.g. ",a("code",{children:"--red-0"})," through to ",a("code",{children:"--grey-100"}),"."]}),c("p",{children:["Each range of colors is built from a base hue.  These are defined in SASS variables using the SASS ",a("code",{children:"!default"})," flag.  If you want to adjust the hues you can set any of these SASS variables before importing the main ",a("code",{children:"badger-ui.scss"})," component."]}),a(Ie,{code:Cg,caption:"Customising Hues",language:"scss",expand:!0}),a("h2",{children:"TODO"}),c("ul",{children:[a("li",{children:"Editing or updating a palette using Badger Color"}),a("li",{children:"Expanding the palette into SCSS files"}),a("li",{children:"Customising the palette using SCSS variables"}),a("li",{children:"Customising the color hues"}),a("li",{children:"Defining your brand color"}),a("li",{children:"Adding/editing CSS scopes"}),a("li",{children:"Including or omitting colors"})]})]})},GT=({uri:e,range:n,options:t})=>c("div",{className:"range",children:[t.names&&a("h3",{children:n.name}),a("div",{className:"swatches",children:yi(0,100,t.show5s?5:10).map(r=>a(YT,{uri:e,range:n,stop:r,options:t},r))})]}),YT=({uri:e,range:n,stop:t,options:r})=>{const l=n.stops[t];return a("div",{className:`swatch ${xg(l)?"dark":"light"}`,style:{backgroundColor:`var(--${e}-${t})`},children:r.info&&a(Sg,{uri:e,stop:t,color:l})})},Sg=({uri:e,stop:n,color:t})=>c("div",{children:[c("div",{className:"stop",children:[e,"-",n]}),c("div",{className:"specs",children:[t.hex,a("br",{}),"h:",t.h,"°",a("br",{}),"s:",t.s,"%",a("br",{}),"l:",t.l,"%"]})]}),ZT=Object.freeze(Object.defineProperty({__proto__:null,Info:Sg,default:VT},Symbol.toStringTag,{value:"Module"})),qT=`# Path to the palette data file (exported from
# badger-color) relative to the project root
palette: config/my-palette.json

# Path to the SCSS output directory, also
# relative to the project root
output: styles/color

# Your default brand color
brandColor: blue
`,KT=`{
  "scripts": {
    "palette": "badger-css-palette-scss -c config/export-my-palette.yaml -v"
  }
}`,QT=`## using npm
$ npm run palette

## using yarn
$ yarn run palette

## using pnpm
$ pnpm run palette`,XT=`// Load the default helpers and configuration files
@import '@abw/badger-css/styles/helpers/all.scss';
@import '@abw/badger-css/styles/config/all.scss';

// Load your custom palette
@import "color/palette.scss";

// Then the default utilities, form styles and other components
@import "@abw/badger-css/styles/utilities/all.scss";
@import "@abw/badger-css/styles/forms/all.scss";
@import "@abw/badger-css/styles/components/all.scss";
`,JT=`// Replace this:
// @import "@abw/badger-css/styles/badger.scss";

// With something like this (you may need to adjust
// the path prefix, depending on where you're loading
// it from, e.g. "../styles/badger.scss")
@import "styles/badger.scss";`,le=({children:e,align:n="top"})=>a("div",{className:`grid-2 gap-h-8 stack-desktop ${n}`,style:{"--prose-width":"100%"},children:e}),eL=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Custom Palette"}),c(le,{children:[c("div",{children:[a("p",{children:"The pre-defined color palette is a good starting point for building a web site.  There's a certain amount of flexibility built in to the SASS source files: you can adjust the hues of the different color ranges, define your own brand color or colors, and specify which of the color ranges you want to include (and implicitly, which ones you don't want)."}),c("p",{children:["When you need a bit more flexibility you can head over to the"," ",a("a",{href:"https://abw.github.io/badger-color/",children:"Badger Color"})," web app and either customise one of the standard palettes or design your own palette from scratch."]})]}),c("div",{children:[a("p",{children:"You can then download the palette data as a JSON file and use the script provided to generate the SCSS configuration files for your palette, ready to integrate into Badger CSS.  At any point you can upload the palette back into Badger Color, make some adjustments, download it again and repeat the process."}),c("p",{children:["You'll need to have ",a("code",{children:"@abw/badger-css"})," installed as a developer dependency for your project for these next steps to work. See the ",a(ae,{to:"/getting-started/installation",text:"installation"})," ","page for details (TL;DR: ",a("code",{children:"npm add -D @abw/badger-css"})," or the equivalent with ",a("code",{children:"yarn"})," or ",a("code",{children:"pnpm"}),")."]})]})]}),a("h2",{children:"Palette Configuration File"}),c(le,{children:[c("div",{children:[c("p",{children:["For these examples, we'll assume that you've download your custom palette file and saved it in a ",a("code",{children:"config"})," directory under your project root as ",a("code",{children:"my-palette.json"}),".  It doesn't have to be in the ",a("code",{children:"config"})," directory - you can put it anywhere you like in your project."]}),c("p",{children:["You then need to create a configuration file like the one shown here.  It can be a YAML file or JSON file, you can call it anything you like (as long as it has a ",a("code",{children:".yaml"})," or ",a("code",{children:".json"})," ","file extension), and you can put it anywhere you like in your project. Here we'll assume it's called"," ",a("code",{children:"export-my-palette.yaml"})," and is also located in the ",a("code",{children:"config"})," directory under the project root."]}),c("p",{children:["You should define ",a("code",{children:"palette"})," to be the path to your palette data file (relative to the project root), and"," ",a("code",{children:"output"})," to be a path to the directory where you want the SCSS files to be written (also relative to the project root)."]}),c("p",{children:["You can also define your brand color as ",a("code",{children:"brandColor"}),". There are other configuration options you can specify but we'll keep it simple for now."]})]}),a(Ie,{code:qT,caption:"config/export-my-palette.yaml",language:"yaml",expand:!0})]}),c("h2",{children:["Adding a ",a("code",{children:"package.json"})," Script"]}),c(le,{children:[c("div",{children:[c("p",{children:["Then add a line to the ",a("code",{children:"scripts"})," section of your"," ",a("code",{children:"package.json"})," file like this."]}),c("p",{children:["The ",a("code",{children:"-c"})," (or ",a("code",{children:"--config"})," if you prefer verbosity) option tells it where your config file is located.  The ",a("code",{children:"-v"})," ","(or ",a("code",{children:"--verbose"}),") option enables messages to tell you what it's doing.  You can leave this off if you prefer."]})]}),a(Ie,{code:KT,caption:"package.json",language:"json",expand:!0})]}),a("h2",{children:"Export the Palette as SCSS"}),c(le,{children:[c("div",{children:[c("p",{children:["You can then ",a("code",{children:"run palette"})," from the command line using"," ",a("code",{children:"npm"}),", ",a("code",{children:"yarn"})," or ",a("code",{children:"pnpm"}),", depending on which package manager you're using."]}),c("p",{children:["If you've got the verbose mode enabled, you should see a message reporting each color range being written to a file in"," ",a("code",{children:"style/color/range/XXX"}),", and the main palette index file being written to ",a("code",{children:"style/color/palette.scss"}),"."]})]}),a(Ie,{code:QT,caption:"Exporting the palette",language:"bash",expand:!0})]}),c("h2",{children:["Defining a Custom ",a("code",{children:"badger.scss"})," File"]}),c(le,{children:[c("div",{children:[c("p",{children:["Now you need to define your own version of the main"," ",a("code",{children:"badger.scss"})," which loads your palette instead of the default one."]}),c("p",{children:["In this example we'll assume that it's saved as",a("code",{children:"badger.scss"})," in the ",a("code",{children:"styles"})," directory, alongside the newly created ",a("code",{children:"color"})," directory that has been exported from the palette."]}),a("p",{children:"This is also a good place to set any SASS variables that change the defaults for Badger CSS.  They should go at the top of this file."})]}),a(Ie,{code:XT,caption:"Custom badger.scss",language:"scss",expand:!0})]}),c("h2",{children:["Replace the Standard ",a("code",{children:"badger.scss"})," File"]}),c(le,{children:[a("div",{children:c("p",{children:["Now you just need to include the new file ",a("code",{children:"badger.scss"})," ","into your website or main stylesheet.  If you were previously loading the default ",a("code",{children:"badger.scss"})," then should change the path to point to your new local ",a("code",{children:"badger.scss"})," file."]})}),a(Ie,{code:JT,caption:"Including your badger.scss",language:"scss",expand:!0})]})]}),nL=Object.freeze(Object.defineProperty({__proto__:null,default:eL},Symbol.toStringTag,{value:"Module"})),tL=`// define the hues for the greyscale colors...
$grey-hue:   40;
$grey20-hue: 40;
$grey40-hue: 40;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,rL=()=>{const[e,n]=D.useState({names:!1,info:!1,show5s:!1}),t=i=>n(s=>({...s,[i]:!s[i]})),r=()=>t("names"),l=()=>t("info"),o=()=>t("show5s");return c("div",{className:"prose flow",children:[a("h1",{children:"Standard Colors"}),c(le,{children:[c("p",{children:["The following standard color ranges are defined.  This palette was created using ",a("a",{href:"https://abw.github.io/badger-color",children:"Badger Color"}),", a companion to this library.  You can use it to clone and update this palette or to create your own palettes from scratch."]}),c("p",{children:["Each color range is divided into color ",a("em",{children:"stops"}),".  They range in increments of 5 from ",a("code",{children:"0"})," which is very close to black, up to"," ",a("code",{children:"100"}),", which is very close to white."]})]}),a(d0,{title:"Color Ranges",colors:rc.filter(i=>!Yr.ranges[i].greyscale),options:e,toggleNames:r,toggleInfo:l,toggleShow5s:o}),a("h2",{children:"Range Hues"}),a(Dt,{code:Cg,caption:"Customising Hues",language:"scss",expand:!0,children:c("p",{children:["Each range of colors is built from a base hue.  These are defined in SASS variables using the SASS ",a("code",{children:"!default"})," flag.  If you want to adjust the hues you can set any of these SASS variables before importing the main ",a("code",{children:"badger.scss"})," component."]})}),a(d0,{title:"Greyscale Ranges",colors:rc.filter(i=>Yr.ranges[i].greyscale),options:e,toggleNames:r,toggleInfo:l,toggleShow5s:o}),c(Dt,{code:tL,caption:"Customising Greyscale Hues",language:"scss",className:"mar-t-8",expand:!0,children:[c("p",{children:["Three greyscale color ranges are also defined.  They are designed to be based on your primary brand color. The ",a("code",{children:"grey"})," range is desaturated to around 5%.  The"," ",a("code",{children:"grey20"})," and ",a("code",{children:"grey40"})," ranges are saturated to around 20% and 40% respectively."]}),c("p",{children:["The brand color for this website is ",a("code",{children:"blue"})," which is why these greyscales have a blue tinge to them.  You can set the hues for these color ranges using the ",a("code",{children:"$grey-hue"}),","," ",a("code",{children:"$grey20-hue"})," and ",a("code",{children:"$grey40-hue"})," variables."]})]}),c("p",{className:"mar-t-4",children:[a(ae,{to:"/colors/brand",text:"Read on"})," to see how you can define your own brand color and automatically get greyscales to match."]})]})},d0=({title:e,colors:n,options:t,toggleNames:r,toggleInfo:l,toggleShow5s:o})=>c(Pt,{children:[c("div",{className:"flex space end",children:[a("h2",{children:e}),c("div",{className:"text-right color-options",children:[a(Ll,{label:"Show Names",checked:t.names,toggle:r}),a(Ll,{label:"Show Info",checked:t.info,toggle:l}),a(Ll,{label:"Show 5s",checked:t.show5s,toggle:o})]})]}),a("div",{className:`ranges ${t.names?"names":"nameless"}`,children:n.map(i=>a(aL,{uri:i,range:Yr.ranges[i],options:t},i))})]}),aL=({uri:e,range:n,options:t})=>c("div",{className:"range",children:[t.names&&a("h3",{children:n.name}),a("div",{className:"swatches",children:yi(0,100,t.show5s?5:10).map(r=>a(lL,{uri:e,range:n,stop:r,options:t},r))})]}),lL=({uri:e,range:n,stop:t,options:r})=>{const l=n.stops[t];return a("div",{className:`swatch ${xg(l)?"dark":"light"}`,style:{backgroundColor:`var(--${e}-${t})`},children:r.info&&a(kg,{uri:e,stop:t,color:l})})},kg=({uri:e,stop:n,color:t})=>c("div",{children:[c("div",{className:"stop",children:[e,"-",n]}),c("div",{className:"specs",children:[t.hex,a("br",{}),"h:",t.h,"°",a("br",{}),"s:",t.s,"%",a("br",{}),"l:",t.l,"%"]})]}),oL=Object.freeze(Object.defineProperty({__proto__:null,Info:kg,default:rL},Symbol.toStringTag,{value:"Module"})),$=({Component:e,code:n,html:t,children:r,className:l="",caption:o,fixed:i,expand:s,language:u})=>c("div",{className:`example grid-2 gap-8 stack-desktop ${l}`,children:[a("div",{className:"source",children:a(Ie,{caption:o,code:n||t,expand:s,fixed:i,language:t?"html":u})}),!!r&&a("div",{className:"interim",children:r}),e?c("div",{className:"output",children:[a("h4",{className:"caption",children:"Output"}),a(e,{})]}):null,t?c("div",{className:"output",children:[a("h4",{className:"caption",children:"Output"}),a("div",{dangerouslySetInnerHTML:{__html:t}})]}):null]}),iL=`<div class="
  violet border pad-4 bdr-2 bdw-2
  fgc-40 bgc-85 hdc-30 bdc-70
">
  <h3>Colors</h3>
  Foreground color violet-40<br/>
  Background color violet-85<br/>
  Heading color violet-30<br/>
  Border color violet-70<br/>
</div>
`,sL=`<div class="
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
`,cL=`<div class="red grid-3 gap-2">
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
`,dL=`<!-- Explicit color range -->
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
</div>`,uL=`<div>
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
`,Zr=({title:e="Note",children:n,className:t=""})=>c("div",{className:`info alert flex top border small ${t}`,children:[a(Ol,{name:"info",className:"side-icon"}),c("div",{children:[a("h3",{children:e}),n]})]}),xs=({scope:e,to:n,from:t="color",size:r="smallish",abbreviate:l=!1})=>c("table",{className:`${e} ${r} celled striped properties mar-b-8`,children:[a("thead",{children:c("tr",{children:[a("th",{children:"Variable"}),a("th",{children:"Mapped To"})]})}),a("tbody",{children:yi(0,100,5).map(o=>a(hL,{n:o,from:t,to:n,abbreviate:l},o))})]}),hL=({from:e,to:n,n:t,abbreviate:r})=>!r||t<=10||t>=90?c("tr",{children:[c("td",{className:"font-mono nowrap",children:["--",e,"-",t]}),c("td",{className:"font-mono nowrap",children:["--",n,"-",t]})]},t):t===15?c("tr",{children:[a("td",{className:"font-mono nowrap",children:"..etc..."}),a("td",{className:"font-mono nowrap",children:"...etc..."})]},t):null,pL=["red","brown","orange"],fL=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Color Utilities"}),a("h2",{children:"Color Classes"}),c(le,{children:[c("p",{children:["Each of the color ranges defined in your palette has a corresponding class. For example, the ",a("code",{children:"red"})," class can be used to select the red color range.  Some of the colors also have semantic aliases, e.g. ",a("code",{children:"error"})," and ",a("code",{children:"invalid"})," are aliases for"," ",a("code",{children:"red"}),"."]}),c("p",{children:["Selecting a color range doesn't have much of a visible effect by itself.  The important things is that it maps the ",a("code",{children:"--color-N"})," ","CSS custom properties to the equivalent stops from the selected color range.  For example, in the scope of the ",a("code",{children:"red"})," CSS class, the"," ",a("code",{children:"--color-0"})," property is mapped to ",a("code",{children:"--red-0"}),","," ",a("code",{children:"--color-5"})," is mapped to ",a("code",{children:"--red-5"}),","," ",a("code",{children:"--color-10"})," to ",a("code",{children:"--red-10"})," and so on up to 100."]})]}),c("div",{className:"small flex gap-4",children:[pL.map(e=>c("div",{children:[c("h3",{className:"font-mono mar-b-2",children:[".",e," ","{"," ... ","}"]}),a(xs,{scope:e,to:e,abbreviate:!0})]},e)),a("div",{children:a("h3",{className:"font-mono mar-b-2",children:"...etc"})})]}),a("h2",{children:"Foreground, Background and Border Colors"}),c(le,{children:[c("p",{children:["The ",a("code",{children:"fgc-N"}),", ",a("code",{children:"bgc-N"}),", ",a("code",{children:"hdc-N"})," and"," ",a("code",{children:"bdc-N"})," classes can be used to select a stop from the color range for the foreground color, background color, heading color and border color, respectively."]}),c("p",{children:["For example, the ",a("code",{children:"bgc-80"})," CSS class will set the background color to whatever color is mapped to ",a("code",{children:"--color-80"}),".  In the scope of the ",a("code",{children:"red"})," CSS class, that will be ",a("code",{children:"--red-80"}),"."]})]}),c("div",{className:"grid-2 gap-8 stack-desktop",children:[a(u0,{classes:[["fgc-N","--color",c(Pt,{children:[a("b",{children:"f"}),"ore",a("b",{children:"g"}),"round ",a("b",{children:"c"}),"olor stop ",a("code",{children:"N"})]})],["bgc-N","--background-color",c(Pt,{children:[a("b",{children:"b"}),"ack",a("b",{children:"g"}),"round ",a("b",{children:"c"}),"olor stop ",a("code",{children:"N"})]})],["hdc-N","--heading-color",c(Pt,{children:[a("b",{children:"h"}),"ea",a("b",{children:"d"}),"ing ",a("b",{children:"c"}),"olor stop ",a("code",{children:"N"})]})],["bdc-N","--border-color",c(Pt,{children:[a("b",{children:"b"}),"or",a("b",{children:"d"}),"er ",a("b",{children:"c"}),"olor stop ",a("code",{children:"N"})]})]]}),a("div",{children:c(Zr,{children:["The ",a("code",{children:"bdc-N"})," classes are designed to be used in conjunction with the ",a("code",{children:"border"})," class and other classes for setting ",a(ae,{to:"/utilities/borders",text:"borders"}),".  A"," ",a("code",{children:"bdc-N"})," class will set the color border, but you won't see any effect unless you also add the ",a("code",{children:"border"})," class."]})})]}),a($,{html:iL,caption:"Color Classes",expand:!0}),a("h2",{children:"Dark Theme"}),c("p",{children:["The ",a("code",{children:"fgd-N"}),", ",a("code",{children:"bgd-N"}),", ",a("code",{children:"hdd-N"})," and"," ",a("code",{children:"bdd-N"})," classes are equivalents of the above for when a dark theme is selected.  You can set foreground, background, heading and border colors for both light and dark themes and they will be switched in automatically."]}),c(le,{children:[a(u0,{classes:[["fgd-N","--color",c(Pt,{children:[a("b",{children:"f"}),"ore",a("b",{children:"g"}),"round ",a("b",{children:"d"}),"ark theme color stop ",a("code",{children:"N"})]})],["bgd-N","--background-color",c(Pt,{children:[a("b",{children:"b"}),"ack",a("b",{children:"g"}),"round ",a("b",{children:"d"}),"ark theme color stop ",a("code",{children:"N"})]})],["hdd-N","--heading-color",c(Pt,{children:[a("b",{children:"h"}),"ea",a("b",{children:"d"}),"ing ",a("b",{children:"d"}),"ark theme color stop ",a("code",{children:"N"})]})],["bdd-N","--border-color",c(Pt,{children:[a("b",{children:"b"}),"or",a("b",{children:"d"}),"er ",a("b",{children:"d"}),"ark theme color stop ",a("code",{children:"N"})]})]]}),c(Zr,{children:["The same rule applies for ",a("code",{children:"bdd-N"})," as it does for"," ",a("code",{children:"bdc-N"})," - it selects the border color but you still need to add the ",a("code",{children:"border"})," class to make the border visible."]})]}),a($,{html:sL,caption:"Dark Theme",expand:!0}),a("h2",{children:"Color Inheritance"}),a("p",{children:"CSS custom properties are inherited by child elements.  This means you can select a color range on an element and all children will inherit that color range."}),a($,{html:cL,caption:"Color Inheritance",expand:!0}),a("h2",{children:"Easy Component Coloring"}),c("p",{children:["This effect is used by various badger-css components. They use the generic ",a("code",{children:"--color-N"})," properties to define colors and can then be rendered using any color range."]}),a($,{html:dL,caption:"Color Components"}),a("h2",{children:"Creating Your Own Colored Components"}),c(le,{children:[c("p",{children:["You can employ this in your own components by using the"," ",a("code",{children:"--color-N"})," CSS custom properties to define your component colours."]}),c("p",{children:["This is particularly useful when implementing components for both light and dark themes.  You only need to specify which ",a("code",{children:"--color-N"})," stops you want to use in each case.  You don't need to write separate CSS rules for each of the colors you might want to use."]})]}),a($,{html:uL,caption:"Custom Components"})]}),u0=({classes:e})=>c("table",{className:"brand celled striped mar-b-8",children:[a("thead",{children:c("tr",{children:[a("th",{children:"Class"}),a("th",{children:"Property"}),a("th",{children:"Description"})]})}),a("tbody",{children:e.map(n=>c("tr",{children:[a("td",{children:a("code",{children:n[0]})}),a("td",{children:a("code",{children:n[1]})}),a("td",{children:n[2]})]},n[0]))})]}),mL=Object.freeze(Object.defineProperty({__proto__:null,default:fL},Symbol.toStringTag,{value:"Module"})),gL=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Color Variables"}),a("h2",{children:"SASS Color Variables"}),c("p",{children:["Each stop in a color range has a SASS variable defined, e.g.",a("code",{children:"$red-0"}),", ",a("code",{children:"$red-5"}),","," ",a("code",{children:"$red-10"})," and so on.  You can use these in your SASS components as necessary."]}),a("h2",{children:"CSS Custom Properties"}),c(le,{children:[c("div",{children:[c("p",{children:["Each of the colour stops also has a corresponding CSS custom property (a.k.a. CSS variable) defined, e.g.",a("code",{children:"--red-0"}),", ",a("code",{children:"--red-5"}),","," ",a("code",{children:"--red-10"})," and so on.  You can use these in your CSS files, e.g. as ",a("code",{children:"color: var(--red-10)"}),"."]}),c("p",{children:["Each of your brand colors will also have CSS custom properties defined. If you're using the default ",a("code",{children:"brand"})," name then they will be ",a("code",{children:"--brand-0"}),", ",a("code",{children:"--brand-5"}),","," ",a("code",{children:"--brand-10"})," and so on."]})]}),c("p",{children:["If you have defined a different set of names via"," ",a("code",{children:"$brand-colors"})," then they will have corresponding names.  For example, if you defined the names in your ",a("code",{children:"$brand-colors"})," to be ",a("code",{children:"primary"}),","," ",a("code",{children:"secondary"})," and ",a("code",{children:"tertiary"})," then the custom properties will be ",a("code",{children:"--primary-0"}),","," ",a("code",{children:"--secondary-0"}),", ",a("code",{children:"--tertiary-0"}),", and so on."]})]}),a("h2",{children:"Color Switching"}),c(le,{children:[c("p",{children:["CSS custom properties are defined for a generic color, appropriately named ",a("code",{children:"color"}),".  By default they are mapped to grey."]}),a("div",{children:a(xs,{scope:"grey",to:"grey"})})]}),c(le,{children:[c("p",{children:["CSS scopes will be generated for each color range which map the generic colors to the colors from that range.  For example, the"," ",a("code",{children:".red"})," class selector scope will map the colors as shown here."]}),c("div",{children:[c("h3",{className:"font-mono mar-b-2",children:[".red ","{"," ... ","}"]}),a(xs,{scope:"red",to:"red",abbreviate:!0})]})]}),c(le,{children:[c("div",{children:[c("p",{children:["Scopes will also be generated for your brand colors, either using the default ",a("code",{children:"brand"})," name or the custom names you have defined using ",a("code",{children:"$brand-colors"}),"."]}),c("p",{children:["For example, in the ",a("code",{children:".brand"})," scope the colors will be mapped as follows."]})]}),c("div",{children:[c("h3",{className:"font-mono mar-b-2",children:[".brand ","{"," ... ","}"]}),a(xs,{scope:"brand",to:"brand",abbreviate:!0})]})]}),c("p",{children:["The benefit of this approach is that it allows you to define UI components using the generic colors ",a("code",{children:"--color-N"}),".  By default they will appear in grey, but adding a CSS class matching the color name will switch in the appropriate color range."]}),a("h2",{children:"CSS Scope Aliases"}),c("p",{children:["A number of additional CSS scopes are defined for some of the colors. For example, the CSS scope created for the ",a("code",{children:"red"})," color range is actually ",a("code",{children:".red, .error, .invalid"}),".  This allows you to add the ",a("code",{children:"red"}),", ",a("code",{children:"error"})," or ",a("code",{children:"invalid"})," CSS class to an element to have the red color range selected."]}),c("p",{children:["This is used by ",a(ae,{to:"/forms",text:"forms"})," and "," ",a(ae,{to:"/components/alerts",text:"alerts"}),", for example, to provide semantic names for the colors."]})]}),vL=Object.freeze(Object.defineProperty({__proto__:null,default:gL},Symbol.toStringTag,{value:"Module"})),bL=`<div class="alert">
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
`,yL=`<div class="alert border">
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
`,wL=`<div class="alert">
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
</div>`,xL=`<div class="grid-2 gap-4">
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
</div>`,CL=`<div class="surface-3 pad-8">
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
</div>`,Fp=({color:e,setColor:n})=>c("select",{name:"color",required:!0,value:e,onChange:t=>n(t.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Color"}),a("option",{value:"",children:"Default"}),rc.map(t=>a("option",{value:t,children:t},t))]}),SL=["smallest","smaller","small","medium","large","larger","largest"],Bp=({size:e,setSize:n})=>c("select",{name:"size",required:!0,value:e,onChange:t=>n(t.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),a("option",{value:"",children:"Default"}),SL.map(t=>a("option",{value:t,children:t},t))]}),kL=[0,1,2,3,4,5,6,8,10],Dp=({radius:e,setRadius:n})=>c("select",{name:"radius",required:!0,value:e,onChange:t=>n(t.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),a("option",{value:"",children:"Default"}),kL.map(t=>c("option",{value:t,children:["radius: ",t]},t))]}),TL=[1,2,3,4,5],Tg=({shadow:e,setShadow:n})=>c("select",{name:"shadow",required:!0,value:e,onChange:t=>n(t.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),a("option",{value:"",children:"Default"}),TL.map(t=>c("option",{value:t,children:["shadow: ",t]},t))]}),Nn=({checked:e,toggle:n,label:t})=>c("label",{className:"checkbox border no-focus",children:[a("input",{type:"checkbox",checked:e,onChange:n}),t]}),LL=[0,1,2,3,4,5,6,8,10],Lg=({borderWidth:e,setBorderWidth:n})=>c("select",{name:"borderWidth",required:!0,value:e,onChange:t=>n(t.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),a("option",{value:"",children:"Default"}),LL.map(t=>c("option",{value:t,children:["width: ",t]},t))]}),_L=()=>{const[e,n]=D.useState({body:!0});return c("div",{className:"example grid-2 gap-8 stack-desktop",children:[a(NL,{options:e,setOption:l=>o=>n(i=>({...i,[l]:o})),toggleOption:l=>()=>n(o=>({...o,[l]:!o[l]}))}),c("div",{children:[a("h3",{className:"mar-b-2",children:"Output"}),a("div",{className:"output",children:a($L,{options:e})})]})]})},NL=({options:e,toggleOption:n,setOption:t})=>{const r=n("headline"),l=n("heading"),o=n("border"),i=n("stripe"),s=t("type"),u=t("size"),p=t("color"),g=t("radius"),y=t("shadow"),C=t("borderWidth"),E=`<div class="${_g(e)}">
  ...
</div>`;return c("div",{children:[a("h3",{className:"mar-b-2",children:"Options"}),c("div",{className:"grid-3 gap-4 stack-tablet top",children:[a(Nn,{checked:e.headline,toggle:r,label:"Headline"}),a(Nn,{checked:e.head,toggle:l,label:"Heading"}),a(Nn,{checked:e.stripe,toggle:i,label:"Stripe"}),a(Nn,{checked:e.border,toggle:o,label:"Border"}),a(Lg,{borderWidth:e.borderWidth,setBorderWidth:C}),a(Dp,{radius:e.radius,setRadius:g})]}),c("div",{className:"grid-4 gap-4 stack-tablet mar-t-4",children:[a(EL,{type:e.type,setType:s}),a(Fp,{color:e.color,setColor:p}),a(Bp,{size:e.size,setSize:u}),a(Tg,{radius:e.shadow,setShadow:y})]}),a("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),a(Ie,{code:E,language:"html",expand:!0})]})},_g=e=>xi([e.color,e.type,e.size,e.border&&"border",e.stripe&&"stripe",e.radius&&`bdr-${e.radius}`,e.shadow&&`shadow-${e.shadow}`,e.borderWidth&&`bdw-${e.borderWidth}`,"alert"]),$L=({options:e})=>{const n=_g(e);return c("div",{className:n,children:[e.headline&&a("div",{className:"headline",children:"This is a headline"}),e.heading&&a("h3",{children:"Hello World!"}),c("p",{children:["This is an alert.  This is some ",a("b",{children:"bold text"}),". This is a ",a("a",{href:"/",children:"link"}),"."]}),a("button",{children:"Default Button"}),a("button",{className:"red mar-l-2",children:"Red Button"})]})},EL=({type:e,setType:n})=>c("select",{name:"type",required:!0,value:e,onChange:t=>n(t.target.value),children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),a("option",{value:"",children:"Default"}),["info","warning","success","error"].map(t=>a("option",{value:t,children:t},t))]}),IL=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Alerts"}),c("p",{children:["The ",a("code",{children:"alert"})," class can be used to display alerts. Add any of the ",a("code",{children:"info"}),", ",a("code",{children:"success"}),","," ",a("code",{children:"warning"})," or ",a("code",{children:"error"})," classes to set the color."]}),a("h2",{children:"Demo"}),a("p",{children:"Select the options to determine how the alert is displayed. Note that some options are mutually exclusive (e.g. stripe and border)."}),a(_L,{}),a("h2",{children:"Default Alerts"}),a($,{html:bL,language:"html",caption:"Alerts"}),a("h2",{children:"Alerts With Borders"}),c("p",{children:["Add the ",a("code",{children:"border"})," class to add a border."]}),a($,{html:yL,language:"html",caption:"Added Borders"}),a("h2",{children:"Alert Headings"}),a("p",{children:"Headings are displayed in a slightly darker color than the body text."}),a($,{html:wL,language:"html",caption:"Alert Headings"}),a("h2",{children:"Alert Headlines"}),c("p",{children:["Add an element with the ",a("code",{children:"headline"})," class to really make it stand out.  This works well with and without borders.  Throw in a"," ",a(ae,{to:"/utilities/shadows",text:"shadow"})," if you want to make it really pop."]}),a($,{html:xL,language:"html",caption:"Alert Headlines"}),a("h2",{children:"Stripe Alerts"}),c("p",{children:["For a more subdued look, try adding the ",a("code",{children:"stripe"})," class."]}),a($,{html:CL,language:"html",caption:"Stripe Alert"})]}),ML=Object.freeze(Object.defineProperty({__proto__:null,default:IL},Symbol.toStringTag,{value:"Module"})),PL=`<div class="grid-1 gap-4">
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
`,RL=`<div class="grid-1 gap-4">
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
</div>`,AL=`<div class="grid-1 gap-4">
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
</div>`,OL=`<div class="grid-1 gap-4">
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
</div>`,FL=`<style>
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
`,BL=()=>{const[e,n]=D.useState({body:!0});return c("div",{className:"example grid-2 gap-8 stack-desktop",children:[a(DL,{options:e,setOption:l=>o=>n(i=>({...i,[l]:o})),toggleOption:l=>()=>n(o=>({...o,[l]:!o[l]}))}),c("div",{children:[a("h3",{className:"mar-b-2",children:"Output"}),a("div",{className:"output",children:a(jL,{options:e})})]})]})},DL=({options:e,toggleOption:n,setOption:t})=>{const r=n("border"),l=n("shaded"),o=n("lined"),i=t("size"),s=t("color"),u=t("radius"),p=t("shadow"),g=t("borderWidth"),C=`<details class="${Ng(e)}">
  ...
</details>`;return c("div",{children:[a("h3",{className:"mar-b-2",children:"Options"}),c("div",{className:"grid-3 gap-4 stack-tablet top",children:[a(Nn,{checked:e.lined,toggle:o,label:"Lined"}),a(Nn,{checked:e.shaded,toggle:l,label:"Shaded"})]}),c("div",{className:"grid-3 gap-4 stack-tablet top mar-t-4",children:[a(Nn,{checked:e.border,toggle:r,label:"Border"}),a(Lg,{borderWidth:e.borderWidth,setBorderWidth:g}),a(Dp,{radius:e.radius,setRadius:u})]}),c("div",{className:"grid-3 gap-4 stack-tablet mar-t-4",children:[a(Fp,{color:e.color,setColor:s}),a(Bp,{size:e.size,setSize:i}),a(Tg,{radius:e.shadow,setShadow:p})]}),a("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),a(Ie,{code:C,language:"html",expand:!0})]})},Ng=e=>xi([e.color,e.size,e.lined&&"lined",e.shaded&&"shaded",e.border&&"border",e.radius&&`bdr-${e.radius}`,e.shadow&&`shadow-${e.shadow}`,e.borderWidth&&`bdw-${e.borderWidth}`]),jL=({options:e})=>{const n=Ng(e);return c("details",{className:n,children:[a("summary",{children:"This is a demo details widget - click to reveal"}),a("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),a("p",{children:"I really think you're just making a much too big thing out of it."}),a("p",{children:"Making a big thing out of it would've been a good idea."})]})},zL=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Details"}),c("p",{children:["The ",a("code",{children:"details"})," HTML element can be used to create a disclosure widget."]}),a("h2",{children:"Demo"}),a("p",{children:"Select the options to determine how the details widget is displayed."}),a(BL,{}),a("h2",{children:"Default Style"}),c("p",{children:["The default style will be applied without the need for any special CSS classes.  You can add any of the utility classes (e.g. the size classes like ",a("code",{children:"small"}),", ",a("code",{children:"large"}),", etc.) to change the basic appearance of either the whole widget, the summary, or any of the content elements."]}),a($,{html:PL,language:"html",caption:"Default Style"}),a("h2",{children:"Border Style"}),c("p",{children:["Add the ",a("code",{children:"border"})," class to add a border.  The usual"," ",a("code",{children:"bdr-N"})," classes can be added to set the border radius"," ","and ",a("code",{children:"bdw-N"})," to set the border width."]}),c("p",{children:["The ",a("code",{children:"bdc-N"})," classes can be used to set the border color stop, and ",a("code",{children:"bdd-N"})," classes for the border color stop in dark mode."]}),a($,{html:RL,language:"html",caption:"Details With Borders"}),a("h2",{children:"Lined Style"}),c("p",{children:["The ",a("code",{children:"lined"})," class can be added to put an additional border line between the summary header and body content."]}),a($,{html:AL,language:"html",caption:"Details With Borders"}),a("h2",{children:"Shaded Style"}),c("p",{children:["Add the ",a("code",{children:"shaded"})," class to shade the background colors. You can add any of the color classes to change the color palette."]}),a($,{html:OL,language:"html",caption:"Shaded Details"}),a("h2",{children:"Custom Styling"}),a("p",{children:"There are a number of CSS variables that you can set to change the styling."}),a($,{html:FL,language:"html",caption:"Custom Styling"})]}),WL=Object.freeze(Object.defineProperty({__proto__:null,default:zL},Symbol.toStringTag,{value:"Module"})),Rc=({open:e,close:n,className:t,children:r})=>{const l=D.useRef(null);return D.useEffect(()=>{const{current:o}=l;e?o.showModal():o.close()},[e]),c("dialog",{ref:l,className:t,children:[!!n&&a("div",{className:"close",onClick:n,children:a(Ol,{name:"cross"})}),r]})},HL=()=>{const[e,n]=D.useState(!1);return c("div",{className:"output",children:[a("button",{onClick:()=>n(!0),className:"blue",children:"Show Dialog"}),c(Rc,{open:e,close:()=>n(!1),children:[a("h1",{className:"mar-v-4",children:"Hello World!"}),a("p",{children:"This is a dialog."})]})]})},UL=()=>{const[e,n]=D.useState(!1);return c("div",{className:"output",children:[a("button",{onClick:()=>n(!0),className:"blue",children:"Show Tall Dialog"}),c(Rc,{open:e,close:()=>n(!1),children:[a("h1",{className:"mar-b-4",children:"Tall Dialog"}),c("div",{className:"mobile block-center",children:[a("p",{children:"David. David. David. Wait, please, wait a minute. Have you any idea what it will costs to dress up the band as animals? Oh, it don't cost nothing. It really doesn't. They're not animals, they're signs of the zodiac. They're animals. It's a way to fight the drabs. You know we've got the drabs. Well that's true. I think mine would look good - better in dubly. If it was done in dubly."}),a("p",{children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion. Well let's hear yours. Let's hear your suggestion. Stonehenge! Stonehenge. It's the best production value we've ever had on stage. But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't... Not yet we don't. Let's start... Please, please just a moment. Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this... I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore. I know, so we build a new one. And this is it, look! Consider... consider it done. So you're just going to take care of it like that. You're going to find someone to design it... using that as a plan? Let's try. Let's try. If you can do it, I'll do the number."}),a("p",{children:`This looks actually perfect. I mean it's, uh, the right proportions. It'll be this color right? Yeah. That's... that's... that's just terrific. It almost looks like the real thing. When we get the actual, uh, set, when we get the piece, it'll... it'll follow exactly these specifications. I mean even these contours and everything? Um, I'm not understanding it. What do you mean "the actual piece?" Well I mean... I mean when you build the actual piece... But this is what you asked for, isn't it? What? Well this is the piece. This is the piece? Yes. Are you telling me that this is it? This is scenery? Have you ever been to Stonehenge? No, I haven't been to Stonehenge. The triptychs are... the triptychs are twenty feet high. You can stand four men up them! Ian, I was... I was... I was supposed to build it eighteen inches high. This is insane. This isn't a piece of scenery. Look, look. Look, this is what I was asked to build. Eighteen inches. Right here, it specified eighteen inches. I was given this napkin, I mean... Forget this! Fuck the napkin!!!`}),a("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object. I really think you're just making a much too big thing out of it. Making a big thing out of it would've been a good idea. Nigel gave me a drawing that said eighteen inches. Alright? I know he did, and that's what I'm talking about. Now, whether he knows the difference between feet and inches is not my problem. I do what I'm told. But you're not as confused as him are you? I mean it's not your job to be as confused as Nigel is."}),a("p",{children:"It's my job to do what I'm asked to do by the creative element of this band. And that's what I did. C'mon... The audience were laughing. So it became a comedy number. Yes it did! Yes it fucking well did, and it was not pleasant to be part of the comedy on stage. Backstage, perhaps, it was very amusing."}),a("p",{children:"Maybe we just fix the choreography. Keep the dwarf clear. What do you mean? So they won't trod upon it."})]})]})]})},VL=()=>{const[e,n]=D.useState(!1);return c("div",{className:"output",children:[a("button",{onClick:()=>n(!0),className:"blue",children:"Show Wide Dialog"}),c(Rc,{open:e,close:()=>n(!1),children:[a("h1",{className:"mar-b-4",children:"Wide Dialog"}),a("p",{children:"David. David. David. Wait, please, wait a minute. Have you any idea what it will costs to dress up the band as animals? Oh, it don't cost nothing. It really doesn't. They're not animals, they're signs of the zodiac. They're animals. It's a way to fight the drabs. You know we've got the drabs. Well that's true. I think mine would look good - better in dubly. If it was done in dubly."}),a("p",{children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion. Well let's hear yours. Let's hear your suggestion. Stonehenge! Stonehenge. It's the best production value we've ever had on stage. But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't... Not yet we don't. Let's start... Please, please just a moment. Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this... I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore. I know, so we build a new one. And this is it, look! Consider... consider it done. So you're just going to take care of it like that. You're going to find someone to design it... using that as a plan? Let's try. Let's try. If you can do it, I'll do the number."}),a("p",{children:`This looks actually perfect. I mean it's, uh, the right proportions. It'll be this color right? Yeah. That's... that's... that's just terrific. It almost looks like the real thing. When we get the actual, uh, set, when we get the piece, it'll... it'll follow exactly these specifications. I mean even these contours and everything? Um, I'm not understanding it. What do you mean "the actual piece?" Well I mean... I mean when you build the actual piece... But this is what you asked for, isn't it? What? Well this is the piece. This is the piece? Yes. Are you telling me that this is it? This is scenery? Have you ever been to Stonehenge? No, I haven't been to Stonehenge. The triptychs are... the triptychs are twenty feet high. You can stand four men up them! Ian, I was... I was... I was supposed to build it eighteen inches high. This is insane. This isn't a piece of scenery. Look, look. Look, this is what I was asked to build. Eighteen inches. Right here, it specified eighteen inches. I was given this napkin, I mean... Forget this! Fuck the napkin!!!`}),a("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object. I really think you're just making a much too big thing out of it. Making a big thing out of it would've been a good idea. Nigel gave me a drawing that said eighteen inches. Alright? I know he did, and that's what I'm talking about. Now, whether he knows the difference between feet and inches is not my problem. I do what I'm told. But you're not as confused as him are you? I mean it's not your job to be as confused as Nigel is."}),a("p",{children:"It's my job to do what I'm asked to do by the creative element of this band. And that's what I did. C'mon... The audience were laughing. So it became a comedy number. Yes it did! Yes it fucking well did, and it was not pleasant to be part of the comedy on stage. Backstage, perhaps, it was very amusing."}),a("p",{children:"Maybe we just fix the choreography. Keep the dwarf clear. What do you mean? So they won't trod upon it."})]})]})},GL=()=>{const[e,n]=D.useState(!1),t=()=>n(!1);return c("div",{className:"output",children:[a("button",{onClick:()=>n(!0),className:"blue",children:"Show Dialog Article"}),a(Rc,{open:e,children:c("article",{children:[a("header",{children:a("h3",{children:"User Login"})}),c("form",{className:"width-20rem",children:[c("div",{className:"field wide",children:[a("label",{children:"Email Address"}),a("input",{name:"email",className:"wide"})]}),c("div",{className:"field mar-b-8",children:[a("label",{children:"Password"}),a("input",{name:"password",type:"password",className:"wide"})]})]}),c("footer",{className:"text-right",children:[a("button",{className:"grey outline",onClick:t,children:"Cancel"}),a("button",{className:"blue mar-l-4",onClick:t,children:"Login"})]})]})})]})},YL=`<dialog open>
  <div className="close" onClick={yourCloseHandler}>
    <Icon name="cross"/>
  </div>
  <h1>Hello World!</h1>
  <p>
    This is a dialog.
  </p>
</dialog>`,ZL=`<dialog open>
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
`,qL=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Dialog"}),c("p",{children:["Some default styling is provided for the ",a("code",{children:"dialog"})," element which can be used to display modals."]}),a("h2",{children:"Close Button"}),c("p",{children:["A child element with the ",a("code",{children:"close"})," CSS class can be used to create a close button."]}),c(le,{children:[a(Ie,{code:YL,caption:"Dialog",language:"html",className:"mar-b-8",expand:!0}),a(HL,{})]}),c("p",{children:["The ",a("code",{children:"$dialog-max-width"})," SASS variable defaults to"," ",a("code",{children:"80vw"})," and is set as the ",a("code",{children:"--max-width"})," CSS variable in the scope of a ",a("code",{children:"dialog"})," element. Similarly the ",a("code",{children:"$dialog-max-height"})," SASS variable defaults to"," ",a("code",{children:"90vh"})," and is set as the ",a("code",{children:"--max-height"})," CSS variable."]}),a("p",{children:"In general, you can constrain the width of the content and the dialog which size appropriately."}),c(le,{children:[a(VL,{}),a(UL,{})]}),a("h2",{children:"Header and Footer"}),c("p",{children:["You can add ",a("code",{children:"header"})," and ",a("code",{children:"footer"})," elements to a dialog.  To be semantically correct, you should enclose them in an"," ",a("code",{children:"article"})," element."]}),c(le,{children:[a(Ie,{code:ZL,caption:"Header and Footer",language:"html",className:"mar-b-8",expand:!0}),a(GL,{})]})]}),KL=Object.freeze(Object.defineProperty({__proto__:null,default:qL},Symbol.toStringTag,{value:"Module"})),QL=`<svg
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
  aria-hidden="true" focusable="false" role="img"
  class="icon"
>
  <path
    d="M64,268L184,388L448,124"
    style="fill:none;stroke:currentColor;stroke-width:65"
  />
</svg>
Check!`,XL=`<div class="small">
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
</div>`,JL=`<div class="red fgc-50 large">
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
</div>`,e_=`<svg
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
`,n_=`<svg
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
`,t_=`<div class="larger">
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
`,r_=`<svg
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
`,a_=`<svg
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

`,l_=()=>c("div",{className:"flow prose",children:[a("h1",{children:"Icons"}),c("p",{children:["Some basic styles are included for SVG icons. Add the ",a("code",{children:"icon"})," ","class to an inline SVG image to use them."]}),a($,{html:QL,language:"html",caption:"Icon"}),a("h2",{children:"Sizing"}),a("p",{children:"Icons are sized in em units meaning they scale with text in different sizes."}),a($,{html:XL,language:"html",caption:"Icon Sizes"}),a("h2",{children:"Fill and Stroke Colors"}),c("p",{children:["SVG icons can use ",a("code",{children:"currentColor"})," for either the"," ",a("code",{children:"fill"})," or ",a("code",{children:"stroke"})," properties to inherit the current text color."]}),a($,{html:JL,language:"html",caption:"Icon Colors"}),c(le,{align:"bottom",children:[c("div",{children:[c("p",{children:["SVG elements can use the ",a("code",{children:"fill-fg"})," and ",a("code",{children:"fill-bg"})," ","classes to set the fill color to the current foreground or background colors respectively.  Similarly the ",a("code",{children:"stroke-fg"})," and"," ",a("code",{children:"stroke-bg"})," will set the stroke color to the foreground or"," ","background color."]}),c("p",{children:["These CSS rules are scoped to all ",a("code",{children:"svg"})," elements rather",a("code",{children:"svg.icon"})," specifically.  So you can use them in any SVG images, not just icons."]})]}),c(Zr,{children:["CSS styles can only be applied to inline SVG elements.  They don't work for SVG images loaded using the ",a("code",{children:"img"})," ","tag or applied using a ",a("code",{children:"background-image"})," style."]})]}),a($,{html:n_,language:"html",caption:"Icon Style"}),c("p",{children:["You can also use the ",a("code",{children:"flc-N"})," and ",a("code",{children:"stc-N"})," classes to set the fill color or stroke color of an SVG element to a stop in the current palette.  The ",a("code",{children:"fld-N"})," and ",a("code",{children:"std-N"})," classes allow you to set different fill or stroke color stops for dark mode."]}),a($,{html:e_,language:"html",caption:"Icon Style"}),a("h2",{children:"Custom Styling"}),c("p",{children:["You can define your own styles to target different elements in an SVG icon.  This example illustrated the use of generic"," ",a("code",{children:"--color-N"})," variables to set the fill and stroke styles on elements in an icon.  The only thing that's determining the color range is the ",a("code",{children:"blue"})," class on the ",a("code",{children:"svg"})," ","element.  Change that to the name of any other color range and the styles will work equally well."]}),c("p",{children:["Also note the use of the"," ",a("code",{children:"--unfilled"})," custom property which sets the background color for the unchecked checkbox.  This allows us to set different color stops for use in light and dark themes."]}),a($,{html:t_,language:"html",caption:"Icon Style"}),a("h2",{children:"Animation Effects"}),c(le,{align:"end",children:[c("div",{children:[c("p",{children:["The ",a("code",{children:"spin"})," CSS class will make the icon spin.  Ideal for spinners!  Add the ",a("code",{children:"reverse"})," class to reverse the direction."]}),c("p",{children:["The default animation time is 2s.  You can add the ",a("code",{children:"fast"})," CSS class to double the speed (animation time is 1s) or ",a("code",{children:"slow"})," to halve it (animation time is 4s).  Or you can set the"," ",a("code",{children:"--animation-time"})," property to anything you like."]})]}),c(Zr,{children:["These animations are disabled if the user's browser has the ",a("code",{children:"prefers-reduced-motion"})," option set to ",a("code",{children:"reduce"}),"."]})]}),a($,{html:r_,language:"html",caption:"Icon Spin"}),a(le,{align:"end",children:c("div",{children:[c("p",{children:["The ",a("code",{children:"beat"})," CSS class will make the icon beat."]}),c("p",{children:["The default animation time here is 1s.  The ",a("code",{children:"fast"})," class doubles the speed (animation time is 0.5s) and the ",a("code",{children:"slow"})," class halves it (animation speed is 2s)."]})]})}),a($,{html:a_,language:"html",caption:"Icon Beat"})]}),o_=Object.freeze(Object.defineProperty({__proto__:null,default:l_},Symbol.toStringTag,{value:"Module"})),i_=`<div class="menu">
  <div class="item">
    Item One
  </div>
  <div class="item">
    Item Two
  </div>
  <div class="item">
    Item Three
  </div>
</div>`,s_=`<div class="menu lined">
  <div class="item">
    Item One
  </div>
  <div class="item">
    Item Two
  </div>
  <div class="item">
    Item Three
  </div>
</div>`,c_=`<div class="menu border">
  <div class="item">
    Item One
  </div>
  <div class="item">
    Item Two
  </div>
  <div class="item">
    Item Three
  </div>
</div>`,d_=`<div class="menu border bdr-2">
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
</div>`,u_=`<div class="menu border bdr-2">
  <div class="item disabled">
    Disabled Item One
  </div>
  <div class="item" aria-disabled="true">
    Disabled Item Two
  </div>
</div>
`,h_=`<div class="menu border bdr-2">
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
`,p_=`<div class="menu border bdr-2">
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
`,f_=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Menu"}),c("p",{children:["To render a simple vertical menu, add the ",a("code",{children:"menu"})," class to a container and ",a("code",{children:"item"})," to each child item."]}),a($,{html:i_,language:"html",caption:"Menu"}),a("h2",{children:"Lined Style"}),c("p",{children:["The ",a("code",{children:"lined"})," class can be added to put a line between each item."]}),a($,{html:s_,language:"html",caption:"Lined"}),a("h2",{children:"Border Style"}),c("p",{children:["The ",a("code",{children:"border"})," class can be added to put a border around the menu and lines between each item."]}),a($,{html:c_,language:"html",caption:"Border"}),c("p",{children:["You can add any of the other"," ",a(ae,{to:"/utilities/borders",text:"border utility classes"})," to control the border width, radius, color, etc."]}),a($,{html:d_,language:"html",caption:"Border Style"}),a("h2",{children:"Disabled Items"}),c("p",{children:["You can add the ",a("code",{children:"disabled"})," CSS class or set the"," ",a("code",{children:"aria-disabled"})," attribute to ",a("code",{children:"true"})," to disable an option in the menu."]}),a($,{html:u_,language:"html",caption:"Disabled Items"}),a("h2",{children:"No Hover Items"}),c("p",{children:["You can add the ",a("code",{children:"no-hover"})," CSS class if you want to disable the styling for hovered items."]}),a($,{html:h_,language:"html",caption:"No Hover Items"}),a("h2",{children:"Active Item"}),c("p",{children:["You can add the ",a("code",{children:"active"})," CSS class to indicate an active item.  This would typically be used in conjunction with"," ",a("code",{children:"no-hover"})," when you're implementing a UI component where the active element is determine by other means (e.g. mouseEnter events, keyboard control, etc)."]}),a($,{html:p_,language:"html",caption:"Active Item"})]}),m_=Object.freeze(Object.defineProperty({__proto__:null,default:f_},Symbol.toStringTag,{value:"Module"})),g_=`<div class="relative">
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
</div>`,v_=`<div class="overlay fixed flex center middle">
  I do not, for one, think that the problem was that the
  band was down. I think that the problem may have been...
  that there was a Stonehenge monument on the stage that
  was in danger of being crushed by a dwarf. Alright? That
  tended to understate the hugeness of the object.
</div>
`,b_=`<div class="light overlay flex center middle larger pad-8">
  Maybe we just fix the choreography.
  Keep the dwarf clear. So they won&apos;t
  trod upon it.
</div>`,y_=`<div class="dark overlay flex center middle larger pad-8">
  Maybe we just fix the choreography.
  Keep the dwarf clear. So they won&apos;t
  trod upon it.
</div>`,w_=({className:e,title:n="Show Overlay"})=>{const[t,r]=D.useState(!1),l=()=>r(!0),o=()=>r(!1);return t?a("div",{className:`overlay fixed flex center middle ${e}`,children:c("div",{className:"max-width-40rem",children:[a("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),a("button",{onClick:o,className:"red",children:"Hide Overlay"})]})}):a("div",{children:a("button",{onClick:l,className:"green",children:n})})},h0=({className:e,title:n="Show Overlay"})=>{const[t,r]=D.useState(!1),l=()=>r(!0),o=()=>r(!1);return t?a("div",{className:`overlay fixed flex center middle ${e}`,children:c("div",{className:"max-width-40rem",children:[a("p",{className:"larger",children:"Maybe we just fix the choreography. Keep the dwarf clear. So they won't trod upon it."}),a("button",{onClick:o,className:"red",children:"Hide Overlay"})]})}):a("div",{children:a("button",{onClick:l,className:"green",children:n})})},x_=()=>{const[e,n]=D.useState(!1);return c("div",{className:"relative pad-6 border",children:[e&&a("div",{className:"overlay flex middle center pad-8",children:c("div",{children:[a("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),a("button",{onClick:()=>n(!1),className:"red",children:"Hide Overlay"})]})}),a("p",{className:"mar-t-none",children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion."}),a("p",{children:"Well let's hear yours. Let's hear your suggestion."}),a("p",{children:"Stonehenge! It's the best production value we've ever had on stage."}),a("p",{children:"But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't..."}),a("p",{children:"Not yet we don't. Let's start... Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this..."}),a("p",{children:"I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore."}),a("p",{children:"I know, so we build a new one. And this is it, look!"}),a("button",{onClick:()=>n(!0),className:"green",children:"Show Overlay"})]})},C_=()=>c("div",{className:"prose",children:[a("h1",{children:"Overlay"}),c("p",{children:["Add the ",a("code",{children:"overlay"})," class to an element to make it an overlay. The default positioning is ",a("code",{children:"absolute"})," so it will fill to cover the nearest parent that has positioning set to ",a("code",{children:"relative"}),"."]}),c(le,{children:[a(Ie,{code:g_,language:"html",caption:"Overlay"}),a("div",{className:"output",children:a(x_,{})})]}),a("h2",{children:"Fixed Viewport"}),c("p",{children:["Add the ",a("code",{children:"fixed"})," class to set the overlay position to"," ",a("code",{children:"fixed"})," so that it covers the entire viewport."]}),c(le,{children:[a(Ie,{code:v_,caption:"Fixed",language:"html",className:"mar-b-8"}),a("div",{className:"output",children:a(w_,{})})]}),a("h2",{children:"Light and Dark"}),c("p",{children:["The default overlay color is white for a light theme and black for a dark theme.  You can explicitly add the ",a("code",{children:"light"})," or"," ",a("code",{children:"dark"})," CSS class if you want a particular color overlay regardless of the theme."]}),c(le,{children:[a(Ie,{code:b_,language:"html",caption:"Light Overlay"}),a("div",{className:"output",children:a(h0,{className:"light",title:"Show Light Overlay"})})]}),c(le,{align:"mar-t-8",children:[a(Ie,{code:y_,language:"html",caption:"Dark Overlay"}),a("div",{className:"output",children:a(h0,{className:"dark",title:"Show Dark Overlay"})})]})]}),S_=Object.freeze(Object.defineProperty({__proto__:null,default:C_},Symbol.toStringTag,{value:"Module"})),k_=()=>{const[e,n]=D.useState({head1:!0,body:!0,foot1:!0});return c("div",{className:"example grid-2 gap-8 stack-desktop",children:[a(T_,{options:e,setOption:l=>o=>n(i=>({...i,[l]:o})),toggleOption:l=>()=>n(o=>({...o,[l]:!o[l]}))}),c("div",{children:[a("h3",{className:"mar-b-2",children:"Output"}),a("div",{className:"output",children:a(L_,{options:e})})]})]})},T_=({options:e,toggleOption:n,setOption:t})=>{const r=n("head1"),l=n("head2"),o=n("body"),i=n("foot1"),s=n("foot2"),u=n("wide"),p=n("celled"),g=n("shaded"),y=n("lined"),C=n("striped"),I=t("size"),E=t("color"),S=t("radius"),w=`<table class="${yg(e,"wide celled shaded lined striped",e.color,e.size,e.radius&&`bdr-${e.radius}`)}">
  ...
</table>`;return c("div",{children:[a("h3",{className:"mar-b-2",children:"Options"}),c("div",{className:"grid-4 gap-4 top stack-tablet",children:[a(Nn,{checked:e.wide,toggle:u,label:"Wide"}),a(Fp,{color:e.color,setColor:E}),a(Bp,{size:e.size,setSize:I}),a(Dp,{radius:e.radius,setRadius:S}),a(Nn,{checked:e.lined,toggle:y,label:"Lined"}),a(Nn,{checked:e.celled,toggle:p,label:"Celled"}),a(Nn,{checked:e.shaded,toggle:g,label:"Shaded"}),a(Nn,{checked:e.striped,toggle:C,label:"Striped"})]}),c("div",{className:"grid-3 gap-4 stack-tablet mar-t-4",children:[a(Nn,{checked:e.head1,toggle:r,label:"Header"}),a(Nn,{checked:e.body,toggle:o,label:"Body"}),a(Nn,{checked:e.foot1,toggle:i,label:"Footer"})]}),c("div",{className:"grid-2 gap-4 stack-tablet mar-t-4",children:[a(Nn,{checked:e.head2,toggle:l,label:"Pre-header"}),a(Nn,{checked:e.foot2,toggle:s,label:"Post-footer"})]}),a("div",{className:"grid-5 gap-4 stack-tablet mar-t-4"}),a("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),a(Ie,{code:w,language:"html",expand:!0})]})},L_=({options:e})=>{const n=bg(e,{},e.color,e.size,e.radius&&`bdr-${e.radius}`);return c("table",{className:n,children:[(e.head1||e.head2)&&c("thead",{children:[e.head2&&a("tr",{children:a("th",{colSpan:"3",className:"text-center",children:"Spinal Tap"})}),e.head1&&c("tr",{children:[a("th",{children:"Name"}),a("th",{children:"Instrument"}),a("th",{children:"Danger Level"})]})]}),e.body&&c("tbody",{children:[c("tr",{children:[a("td",{children:"Nigel"}),a("td",{children:"Tufnel"}),a("td",{children:"Guitar"})]}),c("tr",{children:[a("td",{children:"David"}),a("td",{children:"St.Hubbins"}),a("td",{children:"Guitar"})]}),c("tr",{children:[a("td",{children:"Derek"}),a("td",{children:"Smalls"}),a("td",{children:"Bass"})]}),c("tr",{children:[a("td",{children:"Viv"}),a("td",{children:"Savage"}),a("td",{children:"Keyboards"})]}),c("tr",{children:[a("td",{children:"Mick"}),a("td",{children:"Shrimpton"}),a("td",{children:"Drums"})]})]}),(e.foot1||e.foot2)&&c("tfoot",{children:[e.foot1&&c("tr",{children:[a("th",{colSpan:"2",className:"text-right",children:"Total"}),a("th",{children:"5"})]}),e.foot2&&a("tr",{children:a("th",{colSpan:"3",className:"text-center",children:"Tap into America!"})})]})]})},__=`<table>
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
</table>`,N_=`<table class="celled">
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
</table>`,$_=`<table class="shaded">
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
</table>`,E_=`<table class="lined">
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
</table>`,I_=`<table class="striped">
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
</table>`,M_=`<table class="brand striped celled">
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
</table>`,P_=`<table class="shaded lined wide">
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
</table>`,R_=`<div class="flex top wrap gap-4">
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
</div>`,A_=()=>c("div",{className:"prose",children:[a("h1",{children:"Tables"}),a("p",{children:"Badger CSS contains some basic table styling by default and a number of additional classes you can add to snazz things up."}),a("h2",{children:"Demo"}),a("p",{children:"Select the options to determine how the table is displayed."}),a(k_,{}),a("h2",{children:"Default Table"}),a("p",{children:"The default table style is plain."}),a($,{html:__,language:"html",caption:"Table"}),a("h2",{children:"Lined Table"}),c("p",{children:["Add the ",a("code",{children:"lined"})," class to add borders between lines."]}),a($,{html:E_,language:"html",caption:"Lined Table"}),a("h2",{children:"Celled Table"}),c("p",{children:["Add the ",a("code",{children:"celled"})," class to add cell borders."]}),a($,{html:N_,language:"html",caption:"Celled Table"}),a("h2",{children:"Shaded Table"}),c("p",{children:["Add the ",a("code",{children:"shaded"})," class to add background colors."]}),a($,{html:$_,language:"html",caption:"Shaded Table"}),a("h2",{children:"Striped Table"}),c("p",{children:["Add the ",a("code",{children:"striped"})," class to add alternate background colors for rows."]}),a($,{html:I_,language:"html",caption:"Striped Table"}),a("h2",{children:"Colored Table"}),a("p",{children:"Add color classes to change the base color."}),a($,{html:M_,language:"html",caption:"Colored Table"}),a("h2",{children:"Colored Rows"}),a("p",{children:"Add color classes to rows to get different background colors."}),a($,{html:P_,language:"html",caption:"Colored Rows"}),a("h2",{children:"Customised Table"}),a("p",{children:"You can customise tables using CSS properties."}),a($,{html:R_,language:"html",caption:"Rounded Table"})]}),O_=Object.freeze(Object.defineProperty({__proto__:null,default:A_},Symbol.toStringTag,{value:"Module"})),F_=`<div class="tabset">
  <ul class="tabs">
    <li>One</li>
    <li class="active">Two</li>
    <li>Three</li>
  </ul>
</div>`,B_=`<div class="tabset lined">
  <ul class="tabs">
    <li>One</li>
    <li class="active">Two</li>
    <li>Three</li>
  </ul>
</div>`,D_=`<div class="tabset brand solid lined">
  <ul class="tabs">
    <li>One</li>
    <li class="active">Two</li>
    <li>Three</li>
  </ul>
</div>`,j_=`<div class="tabset brand solid lined center">
  <ul class="tabs">
    <li>One</li>
    <li class="active">Two</li>
    <li>Three</li>
  </ul>
</div>`,z_=`<div class="tabset brand solid lined right">
  <ul class="tabs">
    <li>One</li>
    <li class="active">Two</li>
    <li>Three</li>
  </ul>
</div>`,W_=`<div class="tabset brand solid lined" style="--tab-line-width: 3px">
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
</div>`,H_=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Tabs"}),a("p",{}),a($,{html:F_,language:"html",caption:"Tabs"}),a("h2",{children:"Lined"}),a("p",{}),a($,{html:B_,language:"html",caption:"Lined Tabs"}),a("h2",{children:"Solid"}),a("p",{}),a($,{html:D_,language:"html",caption:"Solid Tabs"}),a("h2",{children:"Center"}),a("p",{}),a($,{html:j_,language:"html",caption:"Center Tabs"}),a("h2",{children:"Right"}),a("p",{}),a($,{html:z_,language:"html",caption:"Right Tabs"}),a("h2",{children:"Scroll"}),a("p",{}),a($,{html:W_,language:"html",caption:"Scrolling Tabs"})]}),U_=Object.freeze(Object.defineProperty({__proto__:null,default:H_},Symbol.toStringTag,{value:"Module"})),V_=`<button
  data-tooltip
  aria-label="This is a tooltip"
>
    Hover to see tooltip
</button>
`,G_=`<div class="flex space">
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
`,Y_=`<div class="flex space">
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
</div>`,Z_=`<button
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
`,q_=`<button data-tooltip>
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
`,K_=`<style>
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
</div>`,Q_=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Tooltips"}),c("p",{children:["Add the ",a("code",{children:"data-tooltip"})," attribute to an element to enable a tooltip.  The tooltip text should be defined in the ",a("code",{children:"aria-label"})," ","property so that it's also accessible to screen readers."]}),a($,{html:V_,language:"html",caption:"Tooltip"}),a("h2",{children:"Tooltip Position"}),c("p",{children:["You can set the ",a("code",{children:"data-tooltip"})," attribute to any of"," ",a("code",{children:"left"}),", ",a("code",{children:"right"}),", ",a("code",{children:"top"})," or"," ",a("code",{children:"bottom"})," to set the tooltip position."]}),a($,{html:G_,language:"html",caption:"Tooltip Position"}),c("p",{children:["You can also combine them as "," ",a("code",{children:"top left"}),", ",a("code",{children:"top right"}),", ",a("code",{children:"bottom left"})," ","and ",a("code",{children:"bottom right"}),"."]}),a($,{html:Y_,language:"html",caption:"Tooltip Corners"}),a("h2",{children:"Wrapping"}),c("p",{children:["The tooltip has a minimum and maximum width set to keep things sensible. You can add the ",a("code",{children:"tt-wide"})," class if you want the tooltip to extend to the full width of the tooltip text."]}),c("p",{children:["You can add newlines to the ",a("code",{children:"aria-label"})," property if you want to force line breaks."]}),a($,{html:Z_,language:"html",caption:"Tooltip Wrapping"}),a("h2",{children:"Content"}),c("p",{children:["As an alternative to setting the ",a("code",{children:"aria-label"})," you can define the tooltip content in a child element with the"," ",a("code",{children:"tooltip"})," CSS class."]}),a($,{html:q_,language:"html",caption:"Tooltip Content"}),a("h2",{children:"Custom Tooltip Style"}),a("p",{children:"There are a number of SCSS variables that can be used to set the defaults, or you can use CSS variables to create custom tooltip styles."}),a($,{html:K_,language:"html",caption:"Custom Tooltips"})]}),X_=Object.freeze(Object.defineProperty({__proto__:null,default:Q_},Symbol.toStringTag,{value:"Module"})),J_=`@import "helpers/all.scss";
@import "config/all.scss";
@import "color/palette.scss";
@import "utilities/all.scss";
@import "forms/all.scss";
@import "components/all.scss";
`,eN=`/* helpers/all.scss */
@import "functions.scss";
@import "mixins.scss";`,nN=`/* config/all.scss */
@import "namespaces.scss";
@import "units.scss";
`,tN=`/* utilities/all.scss */
@import "reset.scss";
@import "alignment.scss";
@import "borders.scss";
@import "breakpoints.scss";
@import "color.scss";
@import "columns.scss";
@import "container.scss";
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
`,rN=`/* forms/all.scss */
@import "config.scss";
@import "buttons.scss";
@import "input.scss";
@import "inputs.scss";
@import "select.scss";
@import "switches.scss";
@import "fields.scss";
@import "fieldset.scss";`,aN=`/* components/all.scss */
@import "alerts";
@import "details";
@import "dialog";
// @import "dropdown";
@import "icons";
@import "menu";
@import "overlay";
@import "tables";
@import "tabs";
@import "tooltips";
`,lN=`@import "@abw/badger-css/styles/helpers/all.scss";
@import "@abw/badger-css/styles/config/all.scss";
@import "@abw/badger-css/styles/color/palette.scss";
@import "@abw/badger-css/styles/utilities/all.scss";
@import "@abw/badger-css/styles/forms/all.scss";
@import "@abw/badger-css/styles/components/all.scss";
`,p0={helpers:eN,config:nN,utilities:tN,forms:rN,components:aN},oN=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Customising With Sass"}),c(le,{children:[a("div",{children:c("p",{children:["This is what the main ",a("code",{children:"badger.scss"})," file looks like."]})}),a(Ie,{code:J_,caption:"badger.scss",language:"scss",expand:!0})]}),c("h2",{children:["Custom ",a("code",{children:"badger.scss"})]}),c(le,{children:[c("div",{children:[c("p",{children:["You can create your own version of this file if you want to pick and choose which parts you want and don't want. You just need to prefix each file path with"," ",a("code",{children:"@abw/badger-css/styles"}),"."]}),c("p",{children:["For example, instead of",a("code",{children:'@import "helpers/all.scss";'})," you would write"," ",a("code",{children:'@import "@abw/badger-css/styles/helpers/all.scss";'}),"."]})]}),a(Ie,{code:lN,caption:"Custom badger.scss",language:"scss",expand:!0})]}),a("h2",{children:"Other Files"}),c("p",{children:["Each of the ",a("code",{children:"all.scss"})," file is an index which loads the other files in that directory.  The first two, ",a("code",{children:"helpers/all.scss"})," ","and ",a("code",{children:"config/all.scss"})," are mandatory.  They don't generate any output, but define variables and helper functions required by the other files."]}),c("p",{children:["The ",a("code",{children:"config/palette.scss"})," is a special case.  It's generated automatically from a palette configuration file.  You can create your own palette to replace the builtin palette if you want to.  You can read more about it on the ",a(ae,{to:"/colors/palette",children:"Custom Palette"})," page."]}),c("p",{children:["The remaining files are up for grabs.  For example, you can omit the"," ",a("code",{children:"forms/all.scss"})," if you're not interesting in the form styles, or the ",a("code",{children:"components/all.scss"})," if you don't want any of the components.  The ",a("code",{children:"utilities/all.scss"})," is also optional, although you might find that some of the components depend on utility classes contained therein."]}),a("p",{children:"Or you can create your own versions of those file to pick and choose which parts you want."}),a(iN,{})]}),iN=()=>{const[e,n]=D.useState("helpers");return c(le,{children:[c("div",{children:[c("p",{children:["This is what the ",c("code",{children:[e,"/all.scss"]})," file looks like."]}),a("div",{className:"buttons mar-b-4",children:Object.keys(p0).map(t=>a("button",{onClick:()=>n(t),className:t===e?"brand":"grey outline",children:t},t))}),c("p",{children:["You can browse the source code for these files"," ",a("a",{href:"https://github.com/abw/badger-css/tree/master/styles",children:"on Github"}),"."]})]}),a(Ie,{code:p0[e],caption:`${e}/all.scss`,language:"scss",expand:!0})]})},sN=Object.freeze(Object.defineProperty({__proto__:null,default:oN},Symbol.toStringTag,{value:"Module"})),ha=(e="rem",n=.25)=>[0,1,2,3,4,6,8,10,12,16,20,24,28,32].reduce((t,r)=>({...t,[r]:{vars:{unit:`${r} unit${r==1?"":"s"} (${r*n}${e})`}}}),{}),f0=e=>({t:{vars:{sides:"the top"},more:ha(e)},r:{vars:{sides:"the right"},more:ha(e)},b:{vars:{sides:"the right"},more:ha(e)},l:{vars:{sides:"the left"},more:ha(e)},v:{vars:{sides:"the top and bottom (v = vertical)"},more:ha(e)},h:{vars:{sides:"the left and right (h = horizontal)"},more:ha(e)},...ha(e)}),m0=e=>[2,4,6,8,10,12,14,16,18,20,30,40,50,60,70,90,100].reduce((n,t)=>({...n,[`${t}rem`]:{description:()=>e(t)}}),{}),g0=e=>[2,4,6,8,10,12,14,16,18,20,30,40,50,60,70,90,100].reduce((n,t)=>({...n,[`${t*16}px`]:{description:()=>e(t*16)}}),{}),cN={mar:{vars:{unit:"1 unit (0.25rem)",sides:"all sides"},description:e=>`Add ${e.unit} margin to ${e.sides}`,more:f0("rem")},pad:{vars:{unit:"1 unit (0.25em)",sides:"all sides"},description:e=>`Add ${e.unit} margin to ${e.sides}`,more:f0("em")},width:{more:{...m0(e=>`Set width to ${e}rem (${e*16}px)`),...g0(e=>`Set width to ${e}px`)}},max:{more:{width:{more:{...m0(e=>`Set max-width to ${e}rem (${e*16}px)`),...g0(e=>`Set max-width to ${e}px`)}}}},text:{more:{left:{description:()=>"Align text to the left"},right:{description:()=>"Align text to the right"},center:{description:()=>"Align text to the center"}}},block:{more:{left:{description:()=>"Align block to the left"},right:{description:()=>"Align block to the right"},center:{description:()=>"Align block to the center"}}},display:{more:{inline:{description:()=>"Display element inline"},block:{description:()=>"Display element as a block"},"inline-block":{description:()=>"Display element as an inline block"}}},font:{more:{sans:{description:()=>"Use a sans-serif font"},serif:{description:()=>"Use a serif font"},system:{description:()=>"Use the system font"},mono:{description:()=>"Use a monospaced font"}}}},dN=e=>{const n=e.split("-");let t=[],r=[],l=[],o={},i=cN,s;for(;n.length;){const u=n.shift(),p=i[u];if(p)console.log(`matched ${u}`),s=p.description||s,p.vars&&(o={...o,...p.vars}),t.push(u),i=p.more||{},l=Object.keys(i);else{r.push(u);break}}return{good:t,rest:r,vars:o,next:l,description:s?s(o):null}},uN=e=>ag(e).filter(n=>!n.match(/^\s*$/)).map(dN),hN=()=>{const[e,n]=D.useState("");return c("div",{children:[a("h1",{children:"Class Decoder"}),a("p",{children:"Enter one or more Badger-CSS classes for an explanation."}),c("form",{className:"max-width-30rem",children:[c("div",{className:"field",children:[a("label",{children:"CSS Classes"}),a("input",{type:"text",className:"wide",value:e,onChange:t=>n(t.target.value)})]}),a("button",{type:"button",className:"reset grey button outline",onClick:()=>n(""),children:"Reset"})]}),a("div",{children:!!e.length&&a(pN,{input:e})})]})},pN=({input:e})=>{const n=uN(e);return console.log("results: ",n),a("table",{className:"celled border bdr-2 mar-t-4",children:a("tbody",{children:n.map((t,r)=>c("tr",{children:[c("td",{className:"font-mono bgc-95 bgd-10 split-4",children:[a("span",{className:"green fgc-50",children:t.good.join("-")}),!!t.rest.length&&c("span",{className:"red fgc-50",children:[!!t.good.length&&"-",t.rest.join("-")]})]}),a("td",{className:"bgc-100 bgd-5",children:t.description}),a("td",{className:"bgc-100 bgd-5 font-mono small",children:!!t.next.length&&t.next.map(l=>`-${l} `)})]},r))})})},fN=Object.freeze(Object.defineProperty({__proto__:null,default:hN},Symbol.toStringTag,{value:"Module"})),mN=`<div class="grid-fit gap-2">
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
`,gN=`<div class="grid-2 gap-2">
  <button class="brand" disabled>Brand:disabled</button>
  <button class="brand disabled">Brand.disabled</button>
  <button class="brand outline" disabled>Brand:disabled</button>
  <button class="brand outline disabled">Brand.disabled</button>
</div>
`,vN=`<div class="grid-fit gap-2">
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
`,bN=`<div class="grid-fit gap-2">
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
`,yN=`<div class="grid-fit gap-2">
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
`,wN=`<div class="grid-fit gap-2">
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
`,xN=`<div class="grid-fit gap-2">
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
`,CN=`<div class="grid-fit gap-2">
  <span class="button">Default</span>
  <span class="red shaded button">Red Shaded</span>
  <span class="orange outline button">Orange Outline</span>
</div>
`,SN=`<div class="flex wrap gap-4">
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
</div>`,kN=`<div class="flex gap-4">
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
</div>`,TN=`<div class="buttons">
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
`,LN=()=>c("div",{className:"prose",children:[a("h1",{children:"Buttons"}),c("p",{children:["For the sake of accessibility, buttons should usually be rendered using the ",a("code",{children:"button"})," element.  I mean, that's what it's there for, right?  For those cases when you really need to make a link or something else look like a button you can add the"," ",a("code",{children:"button"})," class."]}),c("p",{children:["The default button color is grey. Any one of the color classes (e.g. ",a("code",{children:"red"}),", ",a("code",{children:"green"}),", etc) can be added to get different colors."]}),a("p",{children:"Button color stops automatically adapt between light and dark modes."}),a("h2",{children:"Default Style"}),a("p",{children:"The default button style is solid."}),a($,{html:mN,language:"html",caption:"Buttons"}),a("h2",{children:"Bright Colors"}),c("p",{children:["Add the ",a("code",{children:"bright"})," CSS class to make the buttons brighter."]}),a($,{html:vN,language:"html",caption:"Bright Buttons"}),a("h2",{children:"Dark Colors"}),c("p",{children:["Add the ",a("code",{children:"dark"})," CSS class to make the buttons darker."]}),a($,{html:bN,language:"html",caption:"Dark Buttons"}),a("h2",{children:"Outline Style"}),c("p",{children:["Add the ",a("code",{children:"outline"})," class for outline buttons."]}),a($,{html:yN,caption:"Outline Buttons"}),a("h2",{children:"Bare Naked Buttons"}),c("p",{children:["Add the ",a("code",{children:"bare"})," class for remove the background and border completely."]}),a($,{html:wN,caption:"Bare Buttons"}),a("h2",{children:"Shaded Style"}),c("p",{children:["Add the ",a("code",{children:"shaded"})," class for subtly shaded buttons.  It's only a matter of time until flat design is out and shaded is back in. Be ahead of the curve!"]}),a($,{html:xN,caption:"Shaded Buttons"}),a("h2",{children:"Button Class"}),c("p",{children:["Add the ",a("code",{children:"button"})," class to any non-button element to give it the button styling.  You can also add the ",a("code",{children:"outline"})," and/or"," ",a("code",{children:"shaded"})," classes."]}),a($,{html:CN,caption:".button class"}),a("h2",{children:"Disabled Buttons"}),c("p",{children:["Add the ",a("code",{children:"disabled"})," attribute or ",a("code",{children:"disabled"})," CSS class to disable a button."]}),a($,{html:gN,language:"html",caption:"Disabled Buttons"}),a("h2",{children:"Button Icons"}),c("p",{children:["You can add ",a(ae,{to:"/components/icons",text:"SVG Icons"})," to buttons. You can set the margins for icons manually using the ",a("code",{children:"mar-N"})," ","classes described on the ",a(ae,{to:"/utilities/spacing",text:"spacing"})," page. The ",a("code",{children:"on-left"})," and ",a("code",{children:"on-right"})," classes are provided as shortcuts and are equivalent to ",a("code",{children:"mar-r-2"})," and ",a("code",{children:"mar-l-2"}),", respectively."]}),a($,{html:SN,caption:"Button icons"}),a("h2",{children:"Button Padding"}),a("p",{children:"The default padding for buttons is larger in the horizontal direction (4 units = 1em) than it is in the vertical direction (1 unit = 0.25em). This isn't as unbalanced as it initially seems when you factor in the line-height (1.5), which effectively results in  the vertical padding being equivalent to 2 units (0.5em)."}),c("p",{children:["If you have a button that only contains an icon then it can look a bit strange, as shown in the first button here.  Adding the ",a("code",{children:"pad-h-2"})," class to the button will reduce the horizontal padding to 2 units (0.5em) which will even things out, as shown in the second button.  Or you can add the ",a("code",{children:"icon"})," class to the button which will have the same effect and doesn't require you to remember how many units of padding you need to set."]}),a($,{html:kN,caption:"Button padding"}),a("h2",{children:"Button Sets"}),c("p",{children:["Button sets can be created by adding a container with the"," ",a("code",{children:"buttons"})," class."]}),a($,{html:TN,caption:"Button Sets"})]}),_N=Object.freeze(Object.defineProperty({__proto__:null,default:LN},Symbol.toStringTag,{value:"Module"})),NN=`<label>
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
`,$N=`<label class="inline">
  <input type="checkbox">
  Option 1
</label>

<label class="inline checkbox">
  <input type="checkbox">
  Option 2
</label>
`,EN=`<label class="inline border">
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

`,IN=`<label>
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
`,MN=`<style>
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
</div>`,PN=()=>c("div",{className:"prose",children:[a("h1",{children:"Checkboxes"}),a("h2",{children:"Checkbox Class"}),c("p",{children:["The usual approach to creating a checkbox is to define a"," ",a("code",{children:"label"})," that contains an ",a("code",{children:"input"})," with a",a("code",{children:'type="label"'})," attribute.  This has the benefit that clicking on the label will toggle the checkbox input."]}),c("p",{children:["Badger-CSS identifies labels that include a checkbox input using the ",a("code",{children:":has()"})," CSS selector. All the major browsers currently support it, although Firefox was a bit late to the party, only adding support in v121 released on 19th December 2023."]}),c("p",{children:["As a work-around to support older versions of Firefox, you can add the ",a("code",{children:"checkbox"})," class to the ",a("code",{children:"label"}),"."]}),a($,{html:NN,language:"html",caption:"Checkboxes"}),a("h2",{children:"Inline Checkboxes"}),c("p",{children:["Checkboxes are full-width by default. Add the ",a("code",{children:"inline"})," class to give it a fluid width."]}),a($,{html:$N,language:"html",caption:"Inline Checkboxes"}),a("h2",{children:"Checkbox Borders"}),c("p",{children:["Add the ",a("code",{children:"border"})," class for borders.  You may need to manually add margins using the ",a(ae,{to:"/utilities/spacing",text:"margin"})," utility classes, or contain multiple checkboxes using the "," ",a(ae,{to:"/utilities/flexbox",text:"flexbox"})," or "," ",a(ae,{to:"/utilities/grid",text:"grid"})," container classes and set the gap between elements."]}),a($,{html:EN,language:"html",caption:"Border Checkboxes"}),a("h2",{children:"Checkbox Switches"}),c("p",{children:["Set the ",a("code",{children:"role"})," to ",a("code",{children:"switch"})," to display the checkbox as a switch.  Add the ",a("code",{children:"round"})," class for a fully rounded switch or ",a("code",{children:"square"})," for square corners."]}),a("p",{children:"The background color for enabled switches will be based on your brand color.  There are a number of CSS properties you can set to customise the style."}),a($,{html:IN,language:"html",caption:"Checkbox Switch"}),a("h2",{children:"Custom Checkboxes"}),a($,{html:MN,language:"html",caption:"Custom Checkboxes"})]}),RN=Object.freeze(Object.defineProperty({__proto__:null,default:PN},Symbol.toStringTag,{value:"Module"})),AN=`<div class="field">
  <label>Label</label>
  <input type="text" value="Input value">
  <div class="help">Help message</div>
</div>`,ON=`<div class="field">
  <label>Inline Text Input</label>
  <input type="text" class="inline">
  <div class="help">Help message</div>
</div>

<div class="field mar-t-8">
  <label>Wide Text Input</label>
  <input type="text">
  <div class="help">Help message</div>
</div>
`,FN=`<div class="field">
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
</div>`,BN=`<div class="field">
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
`,DN=`<div class="field invalid">
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
</div>`,jN=`<div class="field valid">
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
</div>`,zN=`<div class="field required">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
<div class="field required">
  <label>Terms</label>
  <label class="Xcheckbox">
    <input type="checkbox">
    I accept the terms and conditions
  </label>
</div>`,WN=`<style>
  .mandatory-text {
    --required-text: 'MANDATORY';
  }
</style>
<div class="field required mandatory-text">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
`,HN=`<div class="field optional">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>`,UN=`<style>
  .not-required {
    --optional-text: 'NOT REQUIRED';
  }
</style>
<div class="field optional not-required">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
`,VN=`<div class="grid-3 gap-4">
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
</div>`,GN=`// define your own text for the
// required and/or optional labels...
$field-required-text: '"Important"';
$field-optional-text: '"Not Required"';

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,YN=()=>c("div",{className:"prose",children:[a("h1",{children:"Form Fields"}),a("p",{children:"Form fields are usually comprised of more than just an input. A label is usually present and sometimes an additional help message too."}),a("h2",{children:"Field Class"}),c("p",{children:["Create a container with the ",a("code",{children:"field"})," class. You can then add a ",a("code",{children:"label"})," for the field. If you want to display additional help for the input then give it the ",a("code",{children:"help"})," class."]}),a($,{html:AN,language:"html",caption:"Form Field"}),a("h2",{children:"Field Width"}),c("p",{children:["Fields are wide by default, but you can add the ",a("code",{children:"inline"})," class to the input element or containing label in the case of checkboxes and radio buttons."]}),a($,{html:ON,language:"html",caption:"Text Field"}),a($,{html:FN,language:"html",caption:"Checkbox Field"}),a($,{html:BN,language:"html",caption:"Radio Button Field"}),a("h2",{children:"Invalid Field"}),c("p",{children:["Add the ",a("code",{children:"invalid"})," class to the ",a("code",{children:"field"})," to indicate fields that are invalid."]}),a($,{html:DN,language:"html",caption:"Invalid Field"}),a("h2",{children:"Valid Field"}),c("p",{children:["Add the ",a("code",{children:"valid"})," class to the ",a("code",{children:"field"})," to indicate fields that have passed validation."]}),a($,{html:jN,language:"html",caption:"Valid Field"}),a("h2",{children:"Required Field"}),c("p",{children:["Add the ",a("code",{children:"required"})," class to the ",a("code",{children:"field"})," if you want an additional tag added to the label."]}),a($,{html:zN,language:"html",caption:"Required Field"}),c("p",{children:["You can use the ",a("code",{children:"--required-text"})," CSS variable to change the text displayed."]}),a($,{html:WN,language:"html",caption:"Custom Required Field"}),a("h2",{children:"Optional Field"}),c("p",{children:["Add the ",a("code",{children:"optional"})," class to the ",a("code",{children:"field"})," if you want an additional tag added to the label."]}),a($,{html:HN,language:"html",caption:"Optional Field"}),c("p",{children:["You can use the ",a("code",{children:"--optional-text"})," CSS variable to change the text displayed."]}),a($,{html:UN,language:"html",caption:"Custom Optional Field"}),c(le,{children:[c("p",{children:["You can also change the text displayed for either the required and/or optional labels on a global level by setting the"," ",a("code",{children:"$field-required-text"})," and ",a("code",{children:"$field-optional-text"})," ","SASS variables. Be warned that you need to quote the values twice, so that the value defined includes a set of quotes, as shown here."]}),a(Ie,{code:GN,caption:"Required Text",language:"scss",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Label Spacing"}),c("p",{children:["The ",a("code",{children:"mar-t-label"})," and ",a("code",{children:"pad-t-label"})," classes will add a margin or padding to the top of an element that matches the height of a field label.  This is useful if you want to vertically align inputs or other elements where some fields have label and others don't."]}),a($,{html:VN,language:"html",caption:"Label Spacing"})]}),ZN=Object.freeze(Object.defineProperty({__proto__:null,default:YN},Symbol.toStringTag,{value:"Module"})),qN=`<fieldset>
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
</fieldset>`,KN=()=>c("div",{className:"prose",children:[a("h1",{children:"Form Field Sets"}),c("p",{children:["You can group related fields together in a ",a("code",{children:"fieldset"}),"."]}),a("h2",{children:"Fieldset Container"}),a($,{html:qN,language:"html",caption:"Form Fieldset"})]}),QN=Object.freeze(Object.defineProperty({__proto__:null,default:KN},Symbol.toStringTag,{value:"Module"})),v0=`<div class="field">
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
`,XN=`<div class="field optional">
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
`,JN=`<div class="grid-1 gap-4">
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
</div>`,e$=["smallest","smaller","small","medium","large","larger","largest"],n$=({size:e,setSize:n})=>a("div",{children:e$.map(t=>c("label",{children:[a("input",{type:"radio",name:"size",value:t,checked:t===e,onChange:r=>n(r.target.value)}),t]},t))}),t$=()=>{const[e,n]=D.useState({});return c("div",{className:"example flex gap-8 stack-desktop",children:[a("div",{className:"split-4",children:a(r$,{options:e,setOption:l=>o=>n(i=>({...i,[l]:o})),toggleOption:l=>()=>n(o=>({...o,[l]:!o[l]}))})}),c("div",{className:"split-3-4",children:[a("h3",{className:"mar-b-2",children:"Output"}),a("div",{className:"output",children:a(a$,{options:e})})]})]})},r$=({options:e,setOption:n})=>{const t=n("size"),l=`<form class="${yg(e,{},e.size)}">
  ...
</form>`;return c("div",{children:[a("h3",{className:"mar-b-2",children:"Select Size"}),a("div",{className:"border surface-4 pad-4 bdr-1",children:a(n$,{size:e.size,setSize:t})}),a("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),a(Ie,{code:l,language:"html",expand:!0})]})},a$=({options:e})=>{const n=bg(e,{},e.size);return c("form",{className:n,children:[c("div",{className:"field",children:[a("label",{children:"Text Input"}),c("div",{className:"flex end gap-4",children:[a("input",{type:"text",name:"input-1",className:"wide",placeholder:"Search"}),a("button",{className:"brand outline",children:"Search"})]})]}),c("div",{className:"field",children:[a("label",{children:"Radio Buttons"}),c("div",{className:"flex gap-4 stack-tablet",children:[c("label",{className:"radio border",children:[a("input",{type:"radio",name:"color"}),"Nigel"]}),c("label",{className:"radio border",children:[a("input",{type:"radio",name:"color"}),"David"]}),c("label",{className:"radio border",children:[a("input",{type:"radio",name:"color"}),"Derek"]})]})]}),c("div",{className:"grid-2 gap-4 stack-tablet",children:[c("div",{className:"field",children:[a("label",{children:"Select Input"}),c("select",{name:"animal",className:"wide",required:!0,children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Choose an animal"}),a("option",{value:"ant",children:"Ant"}),a("option",{value:"badger",children:"Badger"}),a("option",{value:"cat",children:"Cat"}),a("option",{value:"dog",children:"Dog"}),a("option",{value:"elephant",children:"Elephant"}),a("option",{value:"ferret",children:"Ferret"}),a("option",{value:"goldfish",children:"Goldfish"})]})]}),c("div",{className:"field",children:[a("label",{children:"Checkbox"}),c("label",{className:"checkbox border",children:[a("input",{type:"checkbox"}),"I like badgers"]})]})]}),c("label",{className:"checkbox inline",children:[a("input",{type:"checkbox",role:"switch"}),"Turn it on"]}),c("label",{className:"checkbox inline",children:[a("input",{type:"checkbox",role:"switch"}),"Turn it on again"]}),a("div",{className:"text-right",children:a("button",{className:"solid brand",children:"Submit"})})]})};var Hl={};/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g=D;function ve(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jn=Object.prototype.hasOwnProperty,l$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b0={},y0={};function Eg(e){return Jn.call(y0,e)?!0:Jn.call(b0,e)?!1:l$.test(e)?y0[e]=!0:(b0[e]=!0,!1)}function Zn(e,n,t,r,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var Rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Rn[e]=new Zn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Rn[n]=new Zn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Rn[e]=new Zn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Rn[e]=new Zn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Rn[e]=new Zn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Rn[e]=new Zn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Rn[e]=new Zn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Rn[e]=new Zn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Rn[e]=new Zn(e,5,!1,e.toLowerCase(),null,!1,!1)});var jp=/[\-:]([a-z])/g;function zp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(jp,zp);Rn[n]=new Zn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(jp,zp);Rn[n]=new Zn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(jp,zp);Rn[n]=new Zn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Rn[e]=new Zn(e,1,!1,e.toLowerCase(),null,!1,!1)});Rn.xlinkHref=new Zn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Rn[e]=new Zn(e,1,!1,e.toLowerCase(),null,!0,!0)});var Cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},o$=["Webkit","ms","Moz","O"];Object.keys(Cs).forEach(function(e){o$.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Cs[n]=Cs[e]})});var i$=/["'&<>]/;function Un(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var n=i$.exec(e);if(n){var t="",r,l=0;for(r=n.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#x27;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}l!==r&&(t+=e.substring(l,r)),l=r+1,t+=n}e=l!==r?t+e.substring(l,r):t}return e}var s$=/([A-Z])/g,c$=/^ms-/,rh=Array.isArray;function lr(e,n){return{insertionMode:e,selectedValue:n}}function d$(e,n,t){switch(n){case"select":return lr(1,t.value!=null?t.value:t.defaultValue);case"svg":return lr(2,null);case"math":return lr(3,null);case"foreignObject":return lr(1,null);case"table":return lr(4,null);case"thead":case"tbody":case"tfoot":return lr(5,null);case"colgroup":return lr(7,null);case"tr":return lr(6,null)}return 4<=e.insertionMode||e.insertionMode===0?lr(1,null):e}var w0=new Map;function Ig(e,n,t){if(typeof t!="object")throw Error(ve(62));n=!0;for(var r in t)if(Jn.call(t,r)){var l=t[r];if(l!=null&&typeof l!="boolean"&&l!==""){if(r.indexOf("--")===0){var o=Un(r);l=Un((""+l).trim())}else{o=r;var i=w0.get(o);i!==void 0||(i=Un(o.replace(s$,"-$1").toLowerCase().replace(c$,"-ms-")),w0.set(o,i)),o=i,l=typeof l=="number"?l===0||Jn.call(Cs,r)?""+l:l+"px":Un((""+l).trim())}n?(n=!1,e.push(' style="',o,":",l)):e.push(";",o,":",l)}}n||e.push('"')}function it(e,n,t,r){switch(t){case"style":Ig(e,n,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N"){if(n=Rn.hasOwnProperty(t)?Rn[t]:null,n!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!n.acceptsBooleans)return}switch(t=n.attributeName,n.type){case 3:r&&e.push(" ",t,'=""');break;case 4:r===!0?e.push(" ",t,'=""'):r!==!1&&e.push(" ",t,'="',Un(r),'"');break;case 5:isNaN(r)||e.push(" ",t,'="',Un(r),'"');break;case 6:!isNaN(r)&&1<=r&&e.push(" ",t,'="',Un(r),'"');break;default:n.sanitizeURL&&(r=""+r),e.push(" ",t,'="',Un(r),'"')}}else if(Eg(t)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(n=t.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-")return}e.push(" ",t,'="',Un(r),'"')}}}function Ss(e,n,t){if(n!=null){if(t!=null)throw Error(ve(60));if(typeof n!="object"||!("__html"in n))throw Error(ve(61));n=n.__html,n!=null&&e.push(""+n)}}function u$(e){var n="";return $g.Children.forEach(e,function(t){t!=null&&(n+=t)}),n}function Ud(e,n,t,r){e.push(Ut(t));var l=t=null,o;for(o in n)if(Jn.call(n,o)){var i=n[o];if(i!=null)switch(o){case"children":t=i;break;case"dangerouslySetInnerHTML":l=i;break;default:it(e,r,o,i)}}return e.push(">"),Ss(e,l,t),typeof t=="string"?(e.push(Un(t)),null):t}var h$=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,x0=new Map;function Ut(e){var n=x0.get(e);if(n===void 0){if(!h$.test(e))throw Error(ve(65,e));n="<"+e,x0.set(e,n)}return n}function p$(e,n,t,r,l){switch(n){case"select":e.push(Ut("select"));var o=null,i=null;for(g in t)if(Jn.call(t,g)){var s=t[g];if(s!=null)switch(g){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"defaultValue":case"value":break;default:it(e,r,g,s)}}return e.push(">"),Ss(e,i,o),o;case"option":i=l.selectedValue,e.push(Ut("option"));var u=s=null,p=null,g=null;for(o in t)if(Jn.call(t,o)){var y=t[o];if(y!=null)switch(o){case"children":s=y;break;case"selected":p=y;break;case"dangerouslySetInnerHTML":g=y;break;case"value":u=y;default:it(e,r,o,y)}}if(i!=null)if(t=u!==null?""+u:u$(s),rh(i)){for(r=0;r<i.length;r++)if(""+i[r]===t){e.push(' selected=""');break}}else""+i===t&&e.push(' selected=""');else p&&e.push(' selected=""');return e.push(">"),Ss(e,g,s),s;case"textarea":e.push(Ut("textarea")),g=i=o=null;for(s in t)if(Jn.call(t,s)&&(u=t[s],u!=null))switch(s){case"children":g=u;break;case"value":o=u;break;case"defaultValue":i=u;break;case"dangerouslySetInnerHTML":throw Error(ve(91));default:it(e,r,s,u)}if(o===null&&i!==null&&(o=i),e.push(">"),g!=null){if(o!=null)throw Error(ve(92));if(rh(g)&&1<g.length)throw Error(ve(93));o=""+g}return typeof o=="string"&&o[0]===`
`&&e.push(`
`),o!==null&&e.push(Un(""+o)),null;case"input":e.push(Ut("input")),u=g=s=o=null;for(i in t)if(Jn.call(t,i)&&(p=t[i],p!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(ve(399,"input"));case"defaultChecked":u=p;break;case"defaultValue":s=p;break;case"checked":g=p;break;case"value":o=p;break;default:it(e,r,i,p)}return g!==null?it(e,r,"checked",g):u!==null&&it(e,r,"checked",u),o!==null?it(e,r,"value",o):s!==null&&it(e,r,"value",s),e.push("/>"),null;case"menuitem":e.push(Ut("menuitem"));for(var C in t)if(Jn.call(t,C)&&(o=t[C],o!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(ve(400));default:it(e,r,C,o)}return e.push(">"),null;case"title":e.push(Ut("title")),o=null;for(y in t)if(Jn.call(t,y)&&(i=t[y],i!=null))switch(y){case"children":o=i;break;case"dangerouslySetInnerHTML":throw Error(ve(434));default:it(e,r,y,i)}return e.push(">"),o;case"listing":case"pre":e.push(Ut(n)),i=o=null;for(u in t)if(Jn.call(t,u)&&(s=t[u],s!=null))switch(u){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;default:it(e,r,u,s)}if(e.push(">"),i!=null){if(o!=null)throw Error(ve(60));if(typeof i!="object"||!("__html"in i))throw Error(ve(61));t=i.__html,t!=null&&(typeof t=="string"&&0<t.length&&t[0]===`
`?e.push(`
`,t):e.push(""+t))}return typeof o=="string"&&o[0]===`
`&&e.push(`
`),o;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Ut(n));for(var I in t)if(Jn.call(t,I)&&(o=t[I],o!=null))switch(I){case"children":case"dangerouslySetInnerHTML":throw Error(ve(399,n));default:it(e,r,I,o)}return e.push("/>"),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Ud(e,t,n,r);case"html":return l.insertionMode===0&&e.push("<!DOCTYPE html>"),Ud(e,t,n,r);default:if(n.indexOf("-")===-1&&typeof t.is!="string")return Ud(e,t,n,r);e.push(Ut(n)),i=o=null;for(p in t)if(Jn.call(t,p)&&(s=t[p],s!=null))switch(p){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"style":Ig(e,r,s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:Eg(p)&&typeof s!="function"&&typeof s!="symbol"&&e.push(" ",p,'="',Un(s),'"')}return e.push(">"),Ss(e,i,o),o}}function C0(e,n,t){if(e.push('<!--$?--><template id="'),t===null)throw Error(ve(395));return e.push(t),e.push('"></template>')}function f$(e,n,t,r){switch(t.insertionMode){case 0:case 1:return e.push('<div hidden id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 2:return e.push('<svg aria-hidden="true" style="display:none" id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 3:return e.push('<math aria-hidden="true" style="display:none" id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 4:return e.push('<table hidden id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 5:return e.push('<table hidden><tbody id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 6:return e.push('<table hidden><tr id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');case 7:return e.push('<table hidden><colgroup id="'),e.push(n.segmentPrefix),n=r.toString(16),e.push(n),e.push('">');default:throw Error(ve(397))}}function m$(e,n){switch(n.insertionMode){case 0:case 1:return e.push("</div>");case 2:return e.push("</svg>");case 3:return e.push("</math>");case 4:return e.push("</table>");case 5:return e.push("</tbody></table>");case 6:return e.push("</tr></table>");case 7:return e.push("</colgroup></table>");default:throw Error(ve(397))}}var g$=/[<\u2028\u2029]/g;function Vd(e){return JSON.stringify(e).replace(g$,function(n){switch(n){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}function v$(e,n){return n=n===void 0?"":n,{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:n+"P:",segmentPrefix:n+"S:",boundaryPrefix:n+"B:",idPrefix:n,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:e}}function S0(e,n,t,r){return t.generateStaticMarkup?(e.push(Un(n)),!1):(n===""?e=r:(r&&e.push("<!-- -->"),e.push(Un(n)),e=!0),e)}var Do=Object.assign,b$=Symbol.for("react.element"),Mg=Symbol.for("react.portal"),Pg=Symbol.for("react.fragment"),Rg=Symbol.for("react.strict_mode"),Ag=Symbol.for("react.profiler"),Og=Symbol.for("react.provider"),Fg=Symbol.for("react.context"),Bg=Symbol.for("react.forward_ref"),Dg=Symbol.for("react.suspense"),jg=Symbol.for("react.suspense_list"),zg=Symbol.for("react.memo"),Wp=Symbol.for("react.lazy"),y$=Symbol.for("react.scope"),w$=Symbol.for("react.debug_trace_mode"),x$=Symbol.for("react.legacy_hidden"),C$=Symbol.for("react.default_value"),k0=Symbol.iterator;function ah(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pg:return"Fragment";case Mg:return"Portal";case Ag:return"Profiler";case Rg:return"StrictMode";case Dg:return"Suspense";case jg:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fg:return(e.displayName||"Context")+".Consumer";case Og:return(e._context.displayName||"Context")+".Provider";case Bg:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zg:return n=e.displayName||null,n!==null?n:ah(e.type)||"Memo";case Wp:n=e._payload,e=e._init;try{return ah(e(n))}catch{}}return null}var Wg={};function T0(e,n){if(e=e.contextTypes,!e)return Wg;var t={},r;for(r in e)t[r]=n[r];return t}var Ca=null;function Ac(e,n){if(e!==n){e.context._currentValue2=e.parentValue,e=e.parent;var t=n.parent;if(e===null){if(t!==null)throw Error(ve(401))}else{if(t===null)throw Error(ve(401));Ac(e,t)}n.context._currentValue2=n.value}}function Hg(e){e.context._currentValue2=e.parentValue,e=e.parent,e!==null&&Hg(e)}function Ug(e){var n=e.parent;n!==null&&Ug(n),e.context._currentValue2=e.value}function Vg(e,n){if(e.context._currentValue2=e.parentValue,e=e.parent,e===null)throw Error(ve(402));e.depth===n.depth?Ac(e,n):Vg(e,n)}function Gg(e,n){var t=n.parent;if(t===null)throw Error(ve(402));e.depth===t.depth?Ac(e,t):Gg(e,t),n.context._currentValue2=n.value}function ac(e){var n=Ca;n!==e&&(n===null?Ug(e):e===null?Hg(n):n.depth===e.depth?Ac(n,e):n.depth>e.depth?Vg(n,e):Gg(n,e),Ca=e)}var L0={isMounted:function(){return!1},enqueueSetState:function(e,n){e=e._reactInternals,e.queue!==null&&e.queue.push(n)},enqueueReplaceState:function(e,n){e=e._reactInternals,e.replace=!0,e.queue=[n]},enqueueForceUpdate:function(){}};function _0(e,n,t,r){var l=e.state!==void 0?e.state:null;e.updater=L0,e.props=t,e.state=l;var o={queue:[],replace:!1};e._reactInternals=o;var i=n.contextType;if(e.context=typeof i=="object"&&i!==null?i._currentValue2:r,i=n.getDerivedStateFromProps,typeof i=="function"&&(i=i(t,l),l=i==null?l:Do({},l,i),e.state=l),typeof n.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(n=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),n!==e.state&&L0.enqueueReplaceState(e,e.state,null),o.queue!==null&&0<o.queue.length)if(n=o.queue,i=o.replace,o.queue=null,o.replace=!1,i&&n.length===1)e.state=n[0];else{for(o=i?n[0]:e.state,l=!0,i=i?1:0;i<n.length;i++){var s=n[i];s=typeof s=="function"?s.call(e,o,t,r):s,s!=null&&(l?(l=!1,o=Do({},o,s)):Do(o,s))}e.state=o}else o.queue=null}var S$={id:1,overflow:""};function lh(e,n,t){var r=e.id;e=e.overflow;var l=32-ks(r)-1;r&=~(1<<l),t+=1;var o=32-ks(n)+l;if(30<o){var i=l-l%5;return o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,{id:1<<32-ks(n)+l|t<<l|r,overflow:o+e}}return{id:1<<o|t<<l|r,overflow:e}}var ks=Math.clz32?Math.clz32:L$,k$=Math.log,T$=Math.LN2;function L$(e){return e>>>=0,e===0?32:31-(k$(e)/T$|0)|0}function _$(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var N$=typeof Object.is=="function"?Object.is:_$,vr=null,Hp=null,Ts=null,Ue=null,To=!1,lc=!1,si=0,Ar=null,Oc=0;function ma(){if(vr===null)throw Error(ve(321));return vr}function N0(){if(0<Oc)throw Error(ve(312));return{memoizedState:null,queue:null,next:null}}function Up(){return Ue===null?Ts===null?(To=!1,Ts=Ue=N0()):(To=!0,Ue=Ts):Ue.next===null?(To=!1,Ue=Ue.next=N0()):(To=!0,Ue=Ue.next),Ue}function Vp(){Hp=vr=null,lc=!1,Ts=null,Oc=0,Ue=Ar=null}function Yg(e,n){return typeof n=="function"?n(e):n}function $0(e,n,t){if(vr=ma(),Ue=Up(),To){var r=Ue.queue;if(n=r.dispatch,Ar!==null&&(t=Ar.get(r),t!==void 0)){Ar.delete(r),r=Ue.memoizedState;do r=e(r,t.action),t=t.next;while(t!==null);return Ue.memoizedState=r,[r,n]}return[Ue.memoizedState,n]}return e=e===Yg?typeof n=="function"?n():n:t!==void 0?t(n):n,Ue.memoizedState=e,e=Ue.queue={last:null,dispatch:null},e=e.dispatch=$$.bind(null,vr,e),[Ue.memoizedState,e]}function E0(e,n){if(vr=ma(),Ue=Up(),n=n===void 0?null:n,Ue!==null){var t=Ue.memoizedState;if(t!==null&&n!==null){var r=t[1];e:if(r===null)r=!1;else{for(var l=0;l<r.length&&l<n.length;l++)if(!N$(n[l],r[l])){r=!1;break e}r=!0}if(r)return t[0]}}return e=e(),Ue.memoizedState=[e,n],e}function $$(e,n,t){if(25<=Oc)throw Error(ve(301));if(e===vr)if(lc=!0,e={action:t,next:null},Ar===null&&(Ar=new Map),t=Ar.get(n),t===void 0)Ar.set(n,e);else{for(n=t;n.next!==null;)n=n.next;n.next=e}}function E$(){throw Error(ve(394))}function rs(){}var I0={readContext:function(e){return e._currentValue2},useContext:function(e){return ma(),e._currentValue2},useMemo:E0,useReducer:$0,useRef:function(e){vr=ma(),Ue=Up();var n=Ue.memoizedState;return n===null?(e={current:e},Ue.memoizedState=e):n},useState:function(e){return $0(Yg,e)},useInsertionEffect:rs,useLayoutEffect:function(){},useCallback:function(e,n){return E0(function(){return e},n)},useImperativeHandle:rs,useEffect:rs,useDebugValue:rs,useDeferredValue:function(e){return ma(),e},useTransition:function(){return ma(),[!1,E$]},useId:function(){var e=Hp.treeContext,n=e.overflow;e=e.id,e=(e&~(1<<32-ks(e)-1)).toString(32)+n;var t=Ls;if(t===null)throw Error(ve(404));return n=si++,e=":"+t.idPrefix+"R"+e,0<n&&(e+="H"+n.toString(32)),e+":"},useMutableSource:function(e,n){return ma(),n(e._source)},useSyncExternalStore:function(e,n,t){if(t===void 0)throw Error(ve(407));return t()}},Ls=null,Gd=$g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function I$(e){return console.error(e),null}function Lo(){}function M$(e,n,t,r,l,o,i,s,u){var p=[],g=new Set;return n={destination:null,responseState:n,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:g,pingedTasks:p,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:l===void 0?I$:l,onAllReady:o===void 0?Lo:o,onShellReady:i===void 0?Lo:i,onShellError:s===void 0?Lo:s,onFatalError:u===void 0?Lo:u},t=oc(n,0,null,t,!1,!1),t.parentFlushed=!0,e=Gp(n,e,null,t,g,Wg,null,S$),p.push(e),n}function Gp(e,n,t,r,l,o,i,s){e.allPendingTasks++,t===null?e.pendingRootTasks++:t.pendingTasks++;var u={node:n,ping:function(){var p=e.pingedTasks;p.push(u),p.length===1&&Kg(e)},blockedBoundary:t,blockedSegment:r,abortSet:l,legacyContext:o,context:i,treeContext:s};return l.add(u),u}function oc(e,n,t,r,l,o){return{status:0,id:-1,index:n,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:t,lastPushedText:l,textEmbedded:o}}function ci(e,n){if(e=e.onError(n),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function ic(e,n){var t=e.onShellError;t(n),t=e.onFatalError,t(n),e.destination!==null?(e.status=2,e.destination.destroy(n)):(e.status=1,e.fatalError=n)}function M0(e,n,t,r,l){for(vr={},Hp=n,si=0,e=t(r,l);lc;)lc=!1,si=0,Oc+=1,Ue=null,e=t(r,l);return Vp(),e}function P0(e,n,t,r){var l=t.render(),o=r.childContextTypes;if(o!=null){var i=n.legacyContext;if(typeof t.getChildContext!="function")r=i;else{t=t.getChildContext();for(var s in t)if(!(s in o))throw Error(ve(108,ah(r)||"Unknown",s));r=Do({},i,t)}n.legacyContext=r,dt(e,n,l),n.legacyContext=i}else dt(e,n,l)}function R0(e,n){if(e&&e.defaultProps){n=Do({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function oh(e,n,t,r,l){if(typeof t=="function")if(t.prototype&&t.prototype.isReactComponent){l=T0(t,n.legacyContext);var o=t.contextType;o=new t(r,typeof o=="object"&&o!==null?o._currentValue2:l),_0(o,t,r,l),P0(e,n,o,t)}else{o=T0(t,n.legacyContext),l=M0(e,n,t,r,o);var i=si!==0;if(typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0)_0(l,t,r,o),P0(e,n,l,t);else if(i){r=n.treeContext,n.treeContext=lh(r,1,0);try{dt(e,n,l)}finally{n.treeContext=r}}else dt(e,n,l)}else if(typeof t=="string"){switch(l=n.blockedSegment,o=p$(l.chunks,t,r,e.responseState,l.formatContext),l.lastPushedText=!1,i=l.formatContext,l.formatContext=d$(i,t,r),ih(e,n,o),l.formatContext=i,t){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:l.chunks.push("</",t,">")}l.lastPushedText=!1}else{switch(t){case x$:case w$:case Rg:case Ag:case Pg:dt(e,n,r.children);return;case jg:dt(e,n,r.children);return;case y$:throw Error(ve(343));case Dg:e:{t=n.blockedBoundary,l=n.blockedSegment,o=r.fallback,r=r.children,i=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:i,errorDigest:null},u=oc(e,l.chunks.length,s,l.formatContext,!1,!1);l.children.push(u),l.lastPushedText=!1;var p=oc(e,0,null,l.formatContext,!1,!1);p.parentFlushed=!0,n.blockedBoundary=s,n.blockedSegment=p;try{if(ih(e,n,r),e.responseState.generateStaticMarkup||p.lastPushedText&&p.textEmbedded&&p.chunks.push("<!-- -->"),p.status=1,sc(s,p),s.pendingTasks===0)break e}catch(g){p.status=4,s.forceClientRender=!0,s.errorDigest=ci(e,g)}finally{n.blockedBoundary=t,n.blockedSegment=l}n=Gp(e,o,t,u,i,n.legacyContext,n.context,n.treeContext),e.pingedTasks.push(n)}return}if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Bg:if(r=M0(e,n,t.render,r,l),si!==0){t=n.treeContext,n.treeContext=lh(t,1,0);try{dt(e,n,r)}finally{n.treeContext=t}}else dt(e,n,r);return;case zg:t=t.type,r=R0(t,r),oh(e,n,t,r,l);return;case Og:if(l=r.children,t=t._context,r=r.value,o=t._currentValue2,t._currentValue2=r,i=Ca,Ca=r={parent:i,depth:i===null?0:i.depth+1,context:t,parentValue:o,value:r},n.context=r,dt(e,n,l),e=Ca,e===null)throw Error(ve(403));r=e.parentValue,e.context._currentValue2=r===C$?e.context._defaultValue:r,e=Ca=e.parent,n.context=e;return;case Fg:r=r.children,r=r(t._currentValue2),dt(e,n,r);return;case Wp:l=t._init,t=l(t._payload),r=R0(t,r),oh(e,n,t,r,void 0);return}throw Error(ve(130,t==null?t:typeof t,""))}}function dt(e,n,t){if(n.node=t,typeof t=="object"&&t!==null){switch(t.$$typeof){case b$:oh(e,n,t.type,t.props,t.ref);return;case Mg:throw Error(ve(257));case Wp:var r=t._init;t=r(t._payload),dt(e,n,t);return}if(rh(t)){A0(e,n,t);return}if(t===null||typeof t!="object"?r=null:(r=k0&&t[k0]||t["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(t))){if(t=r.next(),!t.done){var l=[];do l.push(t.value),t=r.next();while(!t.done);A0(e,n,l)}return}throw e=Object.prototype.toString.call(t),Error(ve(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}typeof t=="string"?(r=n.blockedSegment,r.lastPushedText=S0(n.blockedSegment.chunks,t,e.responseState,r.lastPushedText)):typeof t=="number"&&(r=n.blockedSegment,r.lastPushedText=S0(n.blockedSegment.chunks,""+t,e.responseState,r.lastPushedText))}function A0(e,n,t){for(var r=t.length,l=0;l<r;l++){var o=n.treeContext;n.treeContext=lh(o,r,l);try{ih(e,n,t[l])}finally{n.treeContext=o}}}function ih(e,n,t){var r=n.blockedSegment.formatContext,l=n.legacyContext,o=n.context;try{return dt(e,n,t)}catch(u){if(Vp(),typeof u=="object"&&u!==null&&typeof u.then=="function"){t=u;var i=n.blockedSegment,s=oc(e,i.chunks.length,null,i.formatContext,i.lastPushedText,!0);i.children.push(s),i.lastPushedText=!1,e=Gp(e,n.node,n.blockedBoundary,s,n.abortSet,n.legacyContext,n.context,n.treeContext).ping,t.then(e,e),n.blockedSegment.formatContext=r,n.legacyContext=l,n.context=o,ac(o)}else throw n.blockedSegment.formatContext=r,n.legacyContext=l,n.context=o,ac(o),u}}function P$(e){var n=e.blockedBoundary;e=e.blockedSegment,e.status=3,qg(this,n,e)}function Zg(e,n,t){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(n.allPendingTasks--,n.status!==2&&(n.status=2,n.destination!==null&&n.destination.push(null))):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=t===void 0?Error(ve(432)):t,r.errorDigest=n.onError(e),r.parentFlushed&&n.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(l){return Zg(l,n,t)}),r.fallbackAbortableTasks.clear(),n.allPendingTasks--,n.allPendingTasks===0&&(r=n.onAllReady,r()))}function sc(e,n){if(n.chunks.length===0&&n.children.length===1&&n.children[0].boundary===null){var t=n.children[0];t.id=n.id,t.parentFlushed=!0,t.status===1&&sc(e,t)}else e.completedSegments.push(n)}function qg(e,n,t){if(n===null){if(t.parentFlushed){if(e.completedRootSegment!==null)throw Error(ve(389));e.completedRootSegment=t}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=Lo,n=e.onShellReady,n())}else n.pendingTasks--,n.forceClientRender||(n.pendingTasks===0?(t.parentFlushed&&t.status===1&&sc(n,t),n.parentFlushed&&e.completedBoundaries.push(n),n.fallbackAbortableTasks.forEach(P$,e),n.fallbackAbortableTasks.clear()):t.parentFlushed&&t.status===1&&(sc(n,t),n.completedSegments.length===1&&n.parentFlushed&&e.partialBoundaries.push(n)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function Kg(e){if(e.status!==2){var n=Ca,t=Gd.current;Gd.current=I0;var r=Ls;Ls=e.responseState;try{var l=e.pingedTasks,o;for(o=0;o<l.length;o++){var i=l[o],s=e,u=i.blockedSegment;if(u.status===0){ac(i.context);try{dt(s,i,i.node),s.responseState.generateStaticMarkup||u.lastPushedText&&u.textEmbedded&&u.chunks.push("<!-- -->"),i.abortSet.delete(i),u.status=1,qg(s,i.blockedBoundary,u)}catch(E){if(Vp(),typeof E=="object"&&E!==null&&typeof E.then=="function"){var p=i.ping;E.then(p,p)}else{i.abortSet.delete(i),u.status=4;var g=i.blockedBoundary,y=E,C=ci(s,y);if(g===null?ic(s,y):(g.pendingTasks--,g.forceClientRender||(g.forceClientRender=!0,g.errorDigest=C,g.parentFlushed&&s.clientRenderedBoundaries.push(g))),s.allPendingTasks--,s.allPendingTasks===0){var I=s.onAllReady;I()}}}finally{}}}l.splice(0,o),e.destination!==null&&Yp(e,e.destination)}catch(E){ci(e,E),ic(e,E)}finally{Ls=r,Gd.current=t,t===I0&&ac(n)}}}function as(e,n,t){switch(t.parentFlushed=!0,t.status){case 0:var r=t.id=e.nextSegmentId++;return t.lastPushedText=!1,t.textEmbedded=!1,e=e.responseState,n.push('<template id="'),n.push(e.placeholderPrefix),e=r.toString(16),n.push(e),n.push('"></template>');case 1:t.status=2;var l=!0;r=t.chunks;var o=0;t=t.children;for(var i=0;i<t.length;i++){for(l=t[i];o<l.index;o++)n.push(r[o]);l=Fc(e,n,l)}for(;o<r.length-1;o++)n.push(r[o]);return o<r.length&&(l=n.push(r[o])),l;default:throw Error(ve(390))}}function Fc(e,n,t){var r=t.boundary;if(r===null)return as(e,n,t);if(r.parentFlushed=!0,r.forceClientRender)return e.responseState.generateStaticMarkup||(r=r.errorDigest,n.push("<!--$!-->"),n.push("<template"),r&&(n.push(' data-dgst="'),r=Un(r),n.push(r),n.push('"')),n.push("></template>")),as(e,n,t),e=e.responseState.generateStaticMarkup?!0:n.push("<!--/$-->"),e;if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var l=e.responseState,o=l.nextSuspenseID++;return l=l.boundaryPrefix+o.toString(16),r=r.id=l,C0(n,e.responseState,r),as(e,n,t),n.push("<!--/$-->")}if(r.byteSize>e.progressiveChunkSize)return r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),C0(n,e.responseState,r.id),as(e,n,t),n.push("<!--/$-->");if(e.responseState.generateStaticMarkup||n.push("<!--$-->"),t=r.completedSegments,t.length!==1)throw Error(ve(391));return Fc(e,n,t[0]),e=e.responseState.generateStaticMarkup?!0:n.push("<!--/$-->"),e}function O0(e,n,t){return f$(n,e.responseState,t.formatContext,t.id),Fc(e,n,t),m$(n,t.formatContext)}function F0(e,n,t){for(var r=t.completedSegments,l=0;l<r.length;l++)Qg(e,n,t,r[l]);if(r.length=0,e=e.responseState,r=t.id,t=t.rootSegmentID,n.push(e.startInlineScript),e.sentCompleteBoundaryFunction?n.push('$RC("'):(e.sentCompleteBoundaryFunction=!0,n.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')),r===null)throw Error(ve(395));return t=t.toString(16),n.push(r),n.push('","'),n.push(e.segmentPrefix),n.push(t),n.push('")<\/script>')}function Qg(e,n,t,r){if(r.status===2)return!0;var l=r.id;if(l===-1){if((r.id=t.rootSegmentID)===-1)throw Error(ve(392));return O0(e,n,r)}return O0(e,n,r),e=e.responseState,n.push(e.startInlineScript),e.sentCompleteSegmentFunction?n.push('$RS("'):(e.sentCompleteSegmentFunction=!0,n.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')),n.push(e.segmentPrefix),l=l.toString(16),n.push(l),n.push('","'),n.push(e.placeholderPrefix),n.push(l),n.push('")<\/script>')}function Yp(e,n){try{var t=e.completedRootSegment;if(t!==null&&e.pendingRootTasks===0){Fc(e,n,t),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(t=0;t<r.length-1;t++)n.push(r[t]);t<r.length&&n.push(r[t])}var l=e.clientRenderedBoundaries,o;for(o=0;o<l.length;o++){var i=l[o];r=n;var s=e.responseState,u=i.id,p=i.errorDigest,g=i.errorMessage,y=i.errorComponentStack;if(r.push(s.startInlineScript),s.sentClientRenderFunction?r.push('$RX("'):(s.sentClientRenderFunction=!0,r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')),u===null)throw Error(ve(395));if(r.push(u),r.push('"'),p||g||y){r.push(",");var C=Vd(p||"");r.push(C)}if(g||y){r.push(",");var I=Vd(g||"");r.push(I)}if(y){r.push(",");var E=Vd(y);r.push(E)}if(!r.push(")<\/script>")){e.destination=null,o++,l.splice(0,o);return}}l.splice(0,o);var S=e.completedBoundaries;for(o=0;o<S.length;o++)if(!F0(e,n,S[o])){e.destination=null,o++,S.splice(0,o);return}S.splice(0,o);var M=e.partialBoundaries;for(o=0;o<M.length;o++){var w=M[o];e:{l=e,i=n;var m=w.completedSegments;for(s=0;s<m.length;s++)if(!Qg(l,i,w,m[s])){s++,m.splice(0,s);var b=!1;break e}m.splice(0,s),b=!0}if(!b){e.destination=null,o++,M.splice(0,o);return}}M.splice(0,o);var v=e.completedBoundaries;for(o=0;o<v.length;o++)if(!F0(e,n,v[o])){e.destination=null,o++,v.splice(0,o);return}v.splice(0,o)}finally{e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&n.push(null)}}function R$(e,n){try{var t=e.abortableTasks;t.forEach(function(r){return Zg(r,e,n)}),t.clear(),e.destination!==null&&Yp(e,e.destination)}catch(r){ci(e,r),ic(e,r)}}function A$(){}function Xg(e,n,t,r){var l=!1,o=null,i="",s={push:function(p){return p!==null&&(i+=p),!0},destroy:function(p){l=!0,o=p}},u=!1;if(e=M$(e,v$(t,n?n.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,A$,void 0,function(){u=!0},void 0,void 0),Kg(e),R$(e,r),e.status===1)e.status=2,s.destroy(e.fatalError);else if(e.status!==2&&e.destination===null){e.destination=s;try{Yp(e,s)}catch(p){ci(e,p),ic(e,p)}}if(l)throw o;if(!u)throw Error(ve(426));return i}Hl.renderToNodeStream=function(){throw Error(ve(207))};Hl.renderToStaticMarkup=function(e,n){return Xg(e,n,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};Hl.renderToStaticNodeStream=function(){throw Error(ve(208))};Hl.renderToString=function(e,n){return Xg(e,n,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};Hl.version="18.2.0";var Zp={};/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg=D;function we(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ut=null,ht=0;function re(e,n){if(n.length!==0)if(512<n.length)0<ht&&(e.enqueue(new Uint8Array(ut.buffer,0,ht)),ut=new Uint8Array(512),ht=0),e.enqueue(n);else{var t=ut.length-ht;t<n.length&&(t===0?e.enqueue(ut):(ut.set(n.subarray(0,t),ht),e.enqueue(ut),n=n.subarray(t)),ut=new Uint8Array(512),ht=0),ut.set(n,ht),ht+=n.length}}function Xe(e,n){return re(e,n),!0}function B0(e){ut&&0<ht&&(e.enqueue(new Uint8Array(ut.buffer,0,ht)),ut=null,ht=0)}var ev=new TextEncoder;function Se(e){return ev.encode(e)}function X(e){return ev.encode(e)}function nv(e,n){typeof e.error=="function"?e.error(n):e.close()}var et=Object.prototype.hasOwnProperty,O$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,D0={},j0={};function tv(e){return et.call(j0,e)?!0:et.call(D0,e)?!1:O$.test(e)?j0[e]=!0:(D0[e]=!0,!1)}function qn(e,n,t,r,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var An={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){An[e]=new qn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];An[n]=new qn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){An[e]=new qn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){An[e]=new qn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){An[e]=new qn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){An[e]=new qn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){An[e]=new qn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){An[e]=new qn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){An[e]=new qn(e,5,!1,e.toLowerCase(),null,!1,!1)});var qp=/[\-:]([a-z])/g;function Kp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(qp,Kp);An[n]=new qn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(qp,Kp);An[n]=new qn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(qp,Kp);An[n]=new qn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){An[e]=new qn(e,1,!1,e.toLowerCase(),null,!1,!1)});An.xlinkHref=new qn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){An[e]=new qn(e,1,!1,e.toLowerCase(),null,!0,!0)});var _s={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F$=["Webkit","ms","Moz","O"];Object.keys(_s).forEach(function(e){F$.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),_s[n]=_s[e]})});var B$=/["'&<>]/;function In(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var n=B$.exec(e);if(n){var t="",r,l=0;for(r=n.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#x27;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}l!==r&&(t+=e.substring(l,r)),l=r+1,t+=n}e=l!==r?t+e.substring(l,r):t}return e}var D$=/([A-Z])/g,j$=/^ms-/,sh=Array.isArray,z$=X("<script>"),W$=X("<\/script>"),H$=X('<script src="'),U$=X('<script type="module" src="'),z0=X('" async=""><\/script>'),V$=/(<\/|<)(s)(cript)/gi;function G$(e,n,t,r){return""+n+(t==="s"?"\\u0073":"\\u0053")+r}function Y$(e,n,t,r,l){e=e===void 0?"":e,n=n===void 0?z$:X('<script nonce="'+In(n)+'">');var o=[];if(t!==void 0&&o.push(n,Se((""+t).replace(V$,G$)),W$),r!==void 0)for(t=0;t<r.length;t++)o.push(H$,Se(In(r[t])),z0);if(l!==void 0)for(r=0;r<l.length;r++)o.push(U$,Se(In(l[r])),z0);return{bootstrapChunks:o,startInlineScript:n,placeholderPrefix:X(e+"P:"),segmentPrefix:X(e+"S:"),boundaryPrefix:e+"B:",idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function Vt(e,n){return{insertionMode:e,selectedValue:n}}function Z$(e){return Vt(e==="http://www.w3.org/2000/svg"?2:e==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function q$(e,n,t){switch(n){case"select":return Vt(1,t.value!=null?t.value:t.defaultValue);case"svg":return Vt(2,null);case"math":return Vt(3,null);case"foreignObject":return Vt(1,null);case"table":return Vt(4,null);case"thead":case"tbody":case"tfoot":return Vt(5,null);case"colgroup":return Vt(7,null);case"tr":return Vt(6,null)}return 4<=e.insertionMode||e.insertionMode===0?Vt(1,null):e}var Qp=X("<!-- -->");function W0(e,n,t,r){return n===""?r:(r&&e.push(Qp),e.push(Se(In(n))),!0)}var H0=new Map,K$=X(' style="'),U0=X(":"),Q$=X(";");function rv(e,n,t){if(typeof t!="object")throw Error(we(62));n=!0;for(var r in t)if(et.call(t,r)){var l=t[r];if(l!=null&&typeof l!="boolean"&&l!==""){if(r.indexOf("--")===0){var o=Se(In(r));l=Se(In((""+l).trim()))}else{o=r;var i=H0.get(o);i!==void 0||(i=X(In(o.replace(D$,"-$1").toLowerCase().replace(j$,"-ms-"))),H0.set(o,i)),o=i,l=typeof l=="number"?l===0||et.call(_s,r)?Se(""+l):Se(l+"px"):Se(In((""+l).trim()))}n?(n=!1,e.push(K$,o,U0,l)):e.push(Q$,o,U0,l)}}n||e.push(ga)}var _r=X(" "),rl=X('="'),ga=X('"'),V0=X('=""');function st(e,n,t,r){switch(t){case"style":rv(e,n,r);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N"){if(n=An.hasOwnProperty(t)?An[t]:null,n!==null){switch(typeof r){case"function":case"symbol":return;case"boolean":if(!n.acceptsBooleans)return}switch(t=Se(n.attributeName),n.type){case 3:r&&e.push(_r,t,V0);break;case 4:r===!0?e.push(_r,t,V0):r!==!1&&e.push(_r,t,rl,Se(In(r)),ga);break;case 5:isNaN(r)||e.push(_r,t,rl,Se(In(r)),ga);break;case 6:!isNaN(r)&&1<=r&&e.push(_r,t,rl,Se(In(r)),ga);break;default:n.sanitizeURL&&(r=""+r),e.push(_r,t,rl,Se(In(r)),ga)}}else if(tv(t)){switch(typeof r){case"function":case"symbol":return;case"boolean":if(n=t.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-")return}e.push(_r,Se(t),rl,Se(In(r)),ga)}}}var Nr=X(">"),G0=X("/>");function Ns(e,n,t){if(n!=null){if(t!=null)throw Error(we(60));if(typeof n!="object"||!("__html"in n))throw Error(we(61));n=n.__html,n!=null&&e.push(Se(""+n))}}function X$(e){var n="";return Jg.Children.forEach(e,function(t){t!=null&&(n+=t)}),n}var Yd=X(' selected=""');function Zd(e,n,t,r){e.push(Gt(t));var l=t=null,o;for(o in n)if(et.call(n,o)){var i=n[o];if(i!=null)switch(o){case"children":t=i;break;case"dangerouslySetInnerHTML":l=i;break;default:st(e,r,o,i)}}return e.push(Nr),Ns(e,l,t),typeof t=="string"?(e.push(Se(In(t))),null):t}var qd=X(`
`),J$=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Y0=new Map;function Gt(e){var n=Y0.get(e);if(n===void 0){if(!J$.test(e))throw Error(we(65,e));n=X("<"+e),Y0.set(e,n)}return n}var eE=X("<!DOCTYPE html>");function nE(e,n,t,r,l){switch(n){case"select":e.push(Gt("select"));var o=null,i=null;for(g in t)if(et.call(t,g)){var s=t[g];if(s!=null)switch(g){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"defaultValue":case"value":break;default:st(e,r,g,s)}}return e.push(Nr),Ns(e,i,o),o;case"option":i=l.selectedValue,e.push(Gt("option"));var u=s=null,p=null,g=null;for(o in t)if(et.call(t,o)){var y=t[o];if(y!=null)switch(o){case"children":s=y;break;case"selected":p=y;break;case"dangerouslySetInnerHTML":g=y;break;case"value":u=y;default:st(e,r,o,y)}}if(i!=null)if(t=u!==null?""+u:X$(s),sh(i)){for(r=0;r<i.length;r++)if(""+i[r]===t){e.push(Yd);break}}else""+i===t&&e.push(Yd);else p&&e.push(Yd);return e.push(Nr),Ns(e,g,s),s;case"textarea":e.push(Gt("textarea")),g=i=o=null;for(s in t)if(et.call(t,s)&&(u=t[s],u!=null))switch(s){case"children":g=u;break;case"value":o=u;break;case"defaultValue":i=u;break;case"dangerouslySetInnerHTML":throw Error(we(91));default:st(e,r,s,u)}if(o===null&&i!==null&&(o=i),e.push(Nr),g!=null){if(o!=null)throw Error(we(92));if(sh(g)&&1<g.length)throw Error(we(93));o=""+g}return typeof o=="string"&&o[0]===`
`&&e.push(qd),o!==null&&e.push(Se(In(""+o))),null;case"input":e.push(Gt("input")),u=g=s=o=null;for(i in t)if(et.call(t,i)&&(p=t[i],p!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(we(399,"input"));case"defaultChecked":u=p;break;case"defaultValue":s=p;break;case"checked":g=p;break;case"value":o=p;break;default:st(e,r,i,p)}return g!==null?st(e,r,"checked",g):u!==null&&st(e,r,"checked",u),o!==null?st(e,r,"value",o):s!==null&&st(e,r,"value",s),e.push(G0),null;case"menuitem":e.push(Gt("menuitem"));for(var C in t)if(et.call(t,C)&&(o=t[C],o!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(we(400));default:st(e,r,C,o)}return e.push(Nr),null;case"title":e.push(Gt("title")),o=null;for(y in t)if(et.call(t,y)&&(i=t[y],i!=null))switch(y){case"children":o=i;break;case"dangerouslySetInnerHTML":throw Error(we(434));default:st(e,r,y,i)}return e.push(Nr),o;case"listing":case"pre":e.push(Gt(n)),i=o=null;for(u in t)if(et.call(t,u)&&(s=t[u],s!=null))switch(u){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;default:st(e,r,u,s)}if(e.push(Nr),i!=null){if(o!=null)throw Error(we(60));if(typeof i!="object"||!("__html"in i))throw Error(we(61));t=i.__html,t!=null&&(typeof t=="string"&&0<t.length&&t[0]===`
`?e.push(qd,Se(t)):e.push(Se(""+t)))}return typeof o=="string"&&o[0]===`
`&&e.push(qd),o;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Gt(n));for(var I in t)if(et.call(t,I)&&(o=t[I],o!=null))switch(I){case"children":case"dangerouslySetInnerHTML":throw Error(we(399,n));default:st(e,r,I,o)}return e.push(G0),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Zd(e,t,n,r);case"html":return l.insertionMode===0&&e.push(eE),Zd(e,t,n,r);default:if(n.indexOf("-")===-1&&typeof t.is!="string")return Zd(e,t,n,r);e.push(Gt(n)),i=o=null;for(p in t)if(et.call(t,p)&&(s=t[p],s!=null))switch(p){case"children":o=s;break;case"dangerouslySetInnerHTML":i=s;break;case"style":rv(e,r,s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:tv(p)&&typeof s!="function"&&typeof s!="symbol"&&e.push(_r,Se(p),rl,Se(In(s)),ga)}return e.push(Nr),Ns(e,i,o),o}}var tE=X("</"),rE=X(">"),aE=X('<template id="'),lE=X('"></template>'),oE=X("<!--$-->"),iE=X('<!--$?--><template id="'),sE=X('"></template>'),cE=X("<!--$!-->"),dE=X("<!--/$-->"),uE=X("<template"),hE=X('"'),pE=X(' data-dgst="');X(' data-msg="');X(' data-stck="');var fE=X("></template>");function Z0(e,n,t){if(re(e,iE),t===null)throw Error(we(395));return re(e,t),Xe(e,sE)}var mE=X('<div hidden id="'),gE=X('">'),vE=X("</div>"),bE=X('<svg aria-hidden="true" style="display:none" id="'),yE=X('">'),wE=X("</svg>"),xE=X('<math aria-hidden="true" style="display:none" id="'),CE=X('">'),SE=X("</math>"),kE=X('<table hidden id="'),TE=X('">'),LE=X("</table>"),_E=X('<table hidden><tbody id="'),NE=X('">'),$E=X("</tbody></table>"),EE=X('<table hidden><tr id="'),IE=X('">'),ME=X("</tr></table>"),PE=X('<table hidden><colgroup id="'),RE=X('">'),AE=X("</colgroup></table>");function OE(e,n,t,r){switch(t.insertionMode){case 0:case 1:return re(e,mE),re(e,n.segmentPrefix),re(e,Se(r.toString(16))),Xe(e,gE);case 2:return re(e,bE),re(e,n.segmentPrefix),re(e,Se(r.toString(16))),Xe(e,yE);case 3:return re(e,xE),re(e,n.segmentPrefix),re(e,Se(r.toString(16))),Xe(e,CE);case 4:return re(e,kE),re(e,n.segmentPrefix),re(e,Se(r.toString(16))),Xe(e,TE);case 5:return re(e,_E),re(e,n.segmentPrefix),re(e,Se(r.toString(16))),Xe(e,NE);case 6:return re(e,EE),re(e,n.segmentPrefix),re(e,Se(r.toString(16))),Xe(e,IE);case 7:return re(e,PE),re(e,n.segmentPrefix),re(e,Se(r.toString(16))),Xe(e,RE);default:throw Error(we(397))}}function FE(e,n){switch(n.insertionMode){case 0:case 1:return Xe(e,vE);case 2:return Xe(e,wE);case 3:return Xe(e,SE);case 4:return Xe(e,LE);case 5:return Xe(e,$E);case 6:return Xe(e,ME);case 7:return Xe(e,AE);default:throw Error(we(397))}}var BE=X('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),DE=X('$RS("'),jE=X('","'),zE=X('")<\/script>'),WE=X('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),HE=X('$RC("'),UE=X('","'),VE=X('")<\/script>'),GE=X('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),YE=X('$RX("'),ZE=X('"'),qE=X(")<\/script>"),Kd=X(","),KE=/[<\u2028\u2029]/g;function Qd(e){return JSON.stringify(e).replace(KE,function(n){switch(n){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var jo=Object.assign,QE=Symbol.for("react.element"),av=Symbol.for("react.portal"),lv=Symbol.for("react.fragment"),ov=Symbol.for("react.strict_mode"),iv=Symbol.for("react.profiler"),sv=Symbol.for("react.provider"),cv=Symbol.for("react.context"),dv=Symbol.for("react.forward_ref"),uv=Symbol.for("react.suspense"),hv=Symbol.for("react.suspense_list"),pv=Symbol.for("react.memo"),Xp=Symbol.for("react.lazy"),XE=Symbol.for("react.scope"),JE=Symbol.for("react.debug_trace_mode"),eI=Symbol.for("react.legacy_hidden"),nI=Symbol.for("react.default_value"),q0=Symbol.iterator;function ch(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lv:return"Fragment";case av:return"Portal";case iv:return"Profiler";case ov:return"StrictMode";case uv:return"Suspense";case hv:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cv:return(e.displayName||"Context")+".Consumer";case sv:return(e._context.displayName||"Context")+".Provider";case dv:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pv:return n=e.displayName||null,n!==null?n:ch(e.type)||"Memo";case Xp:n=e._payload,e=e._init;try{return ch(e(n))}catch{}}return null}var fv={};function K0(e,n){if(e=e.contextTypes,!e)return fv;var t={},r;for(r in e)t[r]=n[r];return t}var Sa=null;function Bc(e,n){if(e!==n){e.context._currentValue=e.parentValue,e=e.parent;var t=n.parent;if(e===null){if(t!==null)throw Error(we(401))}else{if(t===null)throw Error(we(401));Bc(e,t)}n.context._currentValue=n.value}}function mv(e){e.context._currentValue=e.parentValue,e=e.parent,e!==null&&mv(e)}function gv(e){var n=e.parent;n!==null&&gv(n),e.context._currentValue=e.value}function vv(e,n){if(e.context._currentValue=e.parentValue,e=e.parent,e===null)throw Error(we(402));e.depth===n.depth?Bc(e,n):vv(e,n)}function bv(e,n){var t=n.parent;if(t===null)throw Error(we(402));e.depth===t.depth?Bc(e,t):bv(e,t),n.context._currentValue=n.value}function cc(e){var n=Sa;n!==e&&(n===null?gv(e):e===null?mv(n):n.depth===e.depth?Bc(n,e):n.depth>e.depth?vv(n,e):bv(n,e),Sa=e)}var Q0={isMounted:function(){return!1},enqueueSetState:function(e,n){e=e._reactInternals,e.queue!==null&&e.queue.push(n)},enqueueReplaceState:function(e,n){e=e._reactInternals,e.replace=!0,e.queue=[n]},enqueueForceUpdate:function(){}};function X0(e,n,t,r){var l=e.state!==void 0?e.state:null;e.updater=Q0,e.props=t,e.state=l;var o={queue:[],replace:!1};e._reactInternals=o;var i=n.contextType;if(e.context=typeof i=="object"&&i!==null?i._currentValue:r,i=n.getDerivedStateFromProps,typeof i=="function"&&(i=i(t,l),l=i==null?l:jo({},l,i),e.state=l),typeof n.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(n=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),n!==e.state&&Q0.enqueueReplaceState(e,e.state,null),o.queue!==null&&0<o.queue.length)if(n=o.queue,i=o.replace,o.queue=null,o.replace=!1,i&&n.length===1)e.state=n[0];else{for(o=i?n[0]:e.state,l=!0,i=i?1:0;i<n.length;i++){var s=n[i];s=typeof s=="function"?s.call(e,o,t,r):s,s!=null&&(l?(l=!1,o=jo({},o,s)):jo(o,s))}e.state=o}else o.queue=null}var tI={id:1,overflow:""};function dh(e,n,t){var r=e.id;e=e.overflow;var l=32-$s(r)-1;r&=~(1<<l),t+=1;var o=32-$s(n)+l;if(30<o){var i=l-l%5;return o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,{id:1<<32-$s(n)+l|t<<l|r,overflow:o+e}}return{id:1<<o|t<<l|r,overflow:e}}var $s=Math.clz32?Math.clz32:lI,rI=Math.log,aI=Math.LN2;function lI(e){return e>>>=0,e===0?32:31-(rI(e)/aI|0)|0}function oI(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var iI=typeof Object.is=="function"?Object.is:oI,br=null,Jp=null,Es=null,Ve=null,_o=!1,dc=!1,di=0,Or=null,Dc=0;function va(){if(br===null)throw Error(we(321));return br}function J0(){if(0<Dc)throw Error(we(312));return{memoizedState:null,queue:null,next:null}}function e1(){return Ve===null?Es===null?(_o=!1,Es=Ve=J0()):(_o=!0,Ve=Es):Ve.next===null?(_o=!1,Ve=Ve.next=J0()):(_o=!0,Ve=Ve.next),Ve}function n1(){Jp=br=null,dc=!1,Es=null,Dc=0,Ve=Or=null}function yv(e,n){return typeof n=="function"?n(e):n}function e3(e,n,t){if(br=va(),Ve=e1(),_o){var r=Ve.queue;if(n=r.dispatch,Or!==null&&(t=Or.get(r),t!==void 0)){Or.delete(r),r=Ve.memoizedState;do r=e(r,t.action),t=t.next;while(t!==null);return Ve.memoizedState=r,[r,n]}return[Ve.memoizedState,n]}return e=e===yv?typeof n=="function"?n():n:t!==void 0?t(n):n,Ve.memoizedState=e,e=Ve.queue={last:null,dispatch:null},e=e.dispatch=sI.bind(null,br,e),[Ve.memoizedState,e]}function n3(e,n){if(br=va(),Ve=e1(),n=n===void 0?null:n,Ve!==null){var t=Ve.memoizedState;if(t!==null&&n!==null){var r=t[1];e:if(r===null)r=!1;else{for(var l=0;l<r.length&&l<n.length;l++)if(!iI(n[l],r[l])){r=!1;break e}r=!0}if(r)return t[0]}}return e=e(),Ve.memoizedState=[e,n],e}function sI(e,n,t){if(25<=Dc)throw Error(we(301));if(e===br)if(dc=!0,e={action:t,next:null},Or===null&&(Or=new Map),t=Or.get(n),t===void 0)Or.set(n,e);else{for(n=t;n.next!==null;)n=n.next;n.next=e}}function cI(){throw Error(we(394))}function ls(){}var t3={readContext:function(e){return e._currentValue},useContext:function(e){return va(),e._currentValue},useMemo:n3,useReducer:e3,useRef:function(e){br=va(),Ve=e1();var n=Ve.memoizedState;return n===null?(e={current:e},Ve.memoizedState=e):n},useState:function(e){return e3(yv,e)},useInsertionEffect:ls,useLayoutEffect:function(){},useCallback:function(e,n){return n3(function(){return e},n)},useImperativeHandle:ls,useEffect:ls,useDebugValue:ls,useDeferredValue:function(e){return va(),e},useTransition:function(){return va(),[!1,cI]},useId:function(){var e=Jp.treeContext,n=e.overflow;e=e.id,e=(e&~(1<<32-$s(e)-1)).toString(32)+n;var t=Is;if(t===null)throw Error(we(404));return n=di++,e=":"+t.idPrefix+"R"+e,0<n&&(e+="H"+n.toString(32)),e+":"},useMutableSource:function(e,n){return va(),n(e._source)},useSyncExternalStore:function(e,n,t){if(t===void 0)throw Error(we(407));return t()}},Is=null,Xd=Jg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function dI(e){return console.error(e),null}function No(){}function uI(e,n,t,r,l,o,i,s,u){var p=[],g=new Set;return n={destination:null,responseState:n,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:g,pingedTasks:p,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:l===void 0?dI:l,onAllReady:o===void 0?No:o,onShellReady:i===void 0?No:i,onShellError:s===void 0?No:s,onFatalError:u===void 0?No:u},t=uc(n,0,null,t,!1,!1),t.parentFlushed=!0,e=t1(n,e,null,t,g,fv,null,tI),p.push(e),n}function t1(e,n,t,r,l,o,i,s){e.allPendingTasks++,t===null?e.pendingRootTasks++:t.pendingTasks++;var u={node:n,ping:function(){var p=e.pingedTasks;p.push(u),p.length===1&&Cv(e)},blockedBoundary:t,blockedSegment:r,abortSet:l,legacyContext:o,context:i,treeContext:s};return l.add(u),u}function uc(e,n,t,r,l,o){return{status:0,id:-1,index:n,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:t,lastPushedText:l,textEmbedded:o}}function ui(e,n){if(e=e.onError(n),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function hc(e,n){var t=e.onShellError;t(n),t=e.onFatalError,t(n),e.destination!==null?(e.status=2,nv(e.destination,n)):(e.status=1,e.fatalError=n)}function r3(e,n,t,r,l){for(br={},Jp=n,di=0,e=t(r,l);dc;)dc=!1,di=0,Dc+=1,Ve=null,e=t(r,l);return n1(),e}function a3(e,n,t,r){var l=t.render(),o=r.childContextTypes;if(o!=null){var i=n.legacyContext;if(typeof t.getChildContext!="function")r=i;else{t=t.getChildContext();for(var s in t)if(!(s in o))throw Error(we(108,ch(r)||"Unknown",s));r=jo({},i,t)}n.legacyContext=r,pt(e,n,l),n.legacyContext=i}else pt(e,n,l)}function l3(e,n){if(e&&e.defaultProps){n=jo({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function uh(e,n,t,r,l){if(typeof t=="function")if(t.prototype&&t.prototype.isReactComponent){l=K0(t,n.legacyContext);var o=t.contextType;o=new t(r,typeof o=="object"&&o!==null?o._currentValue:l),X0(o,t,r,l),a3(e,n,o,t)}else{o=K0(t,n.legacyContext),l=r3(e,n,t,r,o);var i=di!==0;if(typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0)X0(l,t,r,o),a3(e,n,l,t);else if(i){r=n.treeContext,n.treeContext=dh(r,1,0);try{pt(e,n,l)}finally{n.treeContext=r}}else pt(e,n,l)}else if(typeof t=="string"){switch(l=n.blockedSegment,o=nE(l.chunks,t,r,e.responseState,l.formatContext),l.lastPushedText=!1,i=l.formatContext,l.formatContext=q$(i,t,r),hh(e,n,o),l.formatContext=i,t){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:l.chunks.push(tE,Se(t),rE)}l.lastPushedText=!1}else{switch(t){case eI:case JE:case ov:case iv:case lv:pt(e,n,r.children);return;case hv:pt(e,n,r.children);return;case XE:throw Error(we(343));case uv:e:{t=n.blockedBoundary,l=n.blockedSegment,o=r.fallback,r=r.children,i=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:i,errorDigest:null},u=uc(e,l.chunks.length,s,l.formatContext,!1,!1);l.children.push(u),l.lastPushedText=!1;var p=uc(e,0,null,l.formatContext,!1,!1);p.parentFlushed=!0,n.blockedBoundary=s,n.blockedSegment=p;try{if(hh(e,n,r),p.lastPushedText&&p.textEmbedded&&p.chunks.push(Qp),p.status=1,pc(s,p),s.pendingTasks===0)break e}catch(g){p.status=4,s.forceClientRender=!0,s.errorDigest=ui(e,g)}finally{n.blockedBoundary=t,n.blockedSegment=l}n=t1(e,o,t,u,i,n.legacyContext,n.context,n.treeContext),e.pingedTasks.push(n)}return}if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dv:if(r=r3(e,n,t.render,r,l),di!==0){t=n.treeContext,n.treeContext=dh(t,1,0);try{pt(e,n,r)}finally{n.treeContext=t}}else pt(e,n,r);return;case pv:t=t.type,r=l3(t,r),uh(e,n,t,r,l);return;case sv:if(l=r.children,t=t._context,r=r.value,o=t._currentValue,t._currentValue=r,i=Sa,Sa=r={parent:i,depth:i===null?0:i.depth+1,context:t,parentValue:o,value:r},n.context=r,pt(e,n,l),e=Sa,e===null)throw Error(we(403));r=e.parentValue,e.context._currentValue=r===nI?e.context._defaultValue:r,e=Sa=e.parent,n.context=e;return;case cv:r=r.children,r=r(t._currentValue),pt(e,n,r);return;case Xp:l=t._init,t=l(t._payload),r=l3(t,r),uh(e,n,t,r,void 0);return}throw Error(we(130,t==null?t:typeof t,""))}}function pt(e,n,t){if(n.node=t,typeof t=="object"&&t!==null){switch(t.$$typeof){case QE:uh(e,n,t.type,t.props,t.ref);return;case av:throw Error(we(257));case Xp:var r=t._init;t=r(t._payload),pt(e,n,t);return}if(sh(t)){o3(e,n,t);return}if(t===null||typeof t!="object"?r=null:(r=q0&&t[q0]||t["@@iterator"],r=typeof r=="function"?r:null),r&&(r=r.call(t))){if(t=r.next(),!t.done){var l=[];do l.push(t.value),t=r.next();while(!t.done);o3(e,n,l)}return}throw e=Object.prototype.toString.call(t),Error(we(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}typeof t=="string"?(r=n.blockedSegment,r.lastPushedText=W0(n.blockedSegment.chunks,t,e.responseState,r.lastPushedText)):typeof t=="number"&&(r=n.blockedSegment,r.lastPushedText=W0(n.blockedSegment.chunks,""+t,e.responseState,r.lastPushedText))}function o3(e,n,t){for(var r=t.length,l=0;l<r;l++){var o=n.treeContext;n.treeContext=dh(o,r,l);try{hh(e,n,t[l])}finally{n.treeContext=o}}}function hh(e,n,t){var r=n.blockedSegment.formatContext,l=n.legacyContext,o=n.context;try{return pt(e,n,t)}catch(u){if(n1(),typeof u=="object"&&u!==null&&typeof u.then=="function"){t=u;var i=n.blockedSegment,s=uc(e,i.chunks.length,null,i.formatContext,i.lastPushedText,!0);i.children.push(s),i.lastPushedText=!1,e=t1(e,n.node,n.blockedBoundary,s,n.abortSet,n.legacyContext,n.context,n.treeContext).ping,t.then(e,e),n.blockedSegment.formatContext=r,n.legacyContext=l,n.context=o,cc(o)}else throw n.blockedSegment.formatContext=r,n.legacyContext=l,n.context=o,cc(o),u}}function hI(e){var n=e.blockedBoundary;e=e.blockedSegment,e.status=3,xv(this,n,e)}function wv(e,n,t){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(n.allPendingTasks--,n.status!==2&&(n.status=2,n.destination!==null&&n.destination.close())):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=t===void 0?Error(we(432)):t,r.errorDigest=n.onError(e),r.parentFlushed&&n.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach(function(l){return wv(l,n,t)}),r.fallbackAbortableTasks.clear(),n.allPendingTasks--,n.allPendingTasks===0&&(r=n.onAllReady,r()))}function pc(e,n){if(n.chunks.length===0&&n.children.length===1&&n.children[0].boundary===null){var t=n.children[0];t.id=n.id,t.parentFlushed=!0,t.status===1&&pc(e,t)}else e.completedSegments.push(n)}function xv(e,n,t){if(n===null){if(t.parentFlushed){if(e.completedRootSegment!==null)throw Error(we(389));e.completedRootSegment=t}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=No,n=e.onShellReady,n())}else n.pendingTasks--,n.forceClientRender||(n.pendingTasks===0?(t.parentFlushed&&t.status===1&&pc(n,t),n.parentFlushed&&e.completedBoundaries.push(n),n.fallbackAbortableTasks.forEach(hI,e),n.fallbackAbortableTasks.clear()):t.parentFlushed&&t.status===1&&(pc(n,t),n.completedSegments.length===1&&n.parentFlushed&&e.partialBoundaries.push(n)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function Cv(e){if(e.status!==2){var n=Sa,t=Xd.current;Xd.current=t3;var r=Is;Is=e.responseState;try{var l=e.pingedTasks,o;for(o=0;o<l.length;o++){var i=l[o],s=e,u=i.blockedSegment;if(u.status===0){cc(i.context);try{pt(s,i,i.node),u.lastPushedText&&u.textEmbedded&&u.chunks.push(Qp),i.abortSet.delete(i),u.status=1,xv(s,i.blockedBoundary,u)}catch(E){if(n1(),typeof E=="object"&&E!==null&&typeof E.then=="function"){var p=i.ping;E.then(p,p)}else{i.abortSet.delete(i),u.status=4;var g=i.blockedBoundary,y=E,C=ui(s,y);if(g===null?hc(s,y):(g.pendingTasks--,g.forceClientRender||(g.forceClientRender=!0,g.errorDigest=C,g.parentFlushed&&s.clientRenderedBoundaries.push(g))),s.allPendingTasks--,s.allPendingTasks===0){var I=s.onAllReady;I()}}}finally{}}}l.splice(0,o),e.destination!==null&&r1(e,e.destination)}catch(E){ui(e,E),hc(e,E)}finally{Is=r,Xd.current=t,t===t3&&cc(n)}}}function os(e,n,t){switch(t.parentFlushed=!0,t.status){case 0:var r=t.id=e.nextSegmentId++;return t.lastPushedText=!1,t.textEmbedded=!1,e=e.responseState,re(n,aE),re(n,e.placeholderPrefix),e=Se(r.toString(16)),re(n,e),Xe(n,lE);case 1:t.status=2;var l=!0;r=t.chunks;var o=0;t=t.children;for(var i=0;i<t.length;i++){for(l=t[i];o<l.index;o++)re(n,r[o]);l=jc(e,n,l)}for(;o<r.length-1;o++)re(n,r[o]);return o<r.length&&(l=Xe(n,r[o])),l;default:throw Error(we(390))}}function jc(e,n,t){var r=t.boundary;if(r===null)return os(e,n,t);if(r.parentFlushed=!0,r.forceClientRender)r=r.errorDigest,Xe(n,cE),re(n,uE),r&&(re(n,pE),re(n,Se(In(r))),re(n,hE)),Xe(n,fE),os(e,n,t);else if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var l=e.responseState,o=l.nextSuspenseID++;l=X(l.boundaryPrefix+o.toString(16)),r=r.id=l,Z0(n,e.responseState,r),os(e,n,t)}else if(r.byteSize>e.progressiveChunkSize)r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),Z0(n,e.responseState,r.id),os(e,n,t);else{if(Xe(n,oE),t=r.completedSegments,t.length!==1)throw Error(we(391));jc(e,n,t[0])}return Xe(n,dE)}function i3(e,n,t){return OE(n,e.responseState,t.formatContext,t.id),jc(e,n,t),FE(n,t.formatContext)}function s3(e,n,t){for(var r=t.completedSegments,l=0;l<r.length;l++)Sv(e,n,t,r[l]);if(r.length=0,e=e.responseState,r=t.id,t=t.rootSegmentID,re(n,e.startInlineScript),e.sentCompleteBoundaryFunction?re(n,HE):(e.sentCompleteBoundaryFunction=!0,re(n,WE)),r===null)throw Error(we(395));return t=Se(t.toString(16)),re(n,r),re(n,UE),re(n,e.segmentPrefix),re(n,t),Xe(n,VE)}function Sv(e,n,t,r){if(r.status===2)return!0;var l=r.id;if(l===-1){if((r.id=t.rootSegmentID)===-1)throw Error(we(392));return i3(e,n,r)}return i3(e,n,r),e=e.responseState,re(n,e.startInlineScript),e.sentCompleteSegmentFunction?re(n,DE):(e.sentCompleteSegmentFunction=!0,re(n,BE)),re(n,e.segmentPrefix),l=Se(l.toString(16)),re(n,l),re(n,jE),re(n,e.placeholderPrefix),re(n,l),Xe(n,zE)}function r1(e,n){ut=new Uint8Array(512),ht=0;try{var t=e.completedRootSegment;if(t!==null&&e.pendingRootTasks===0){jc(e,n,t),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(t=0;t<r.length-1;t++)re(n,r[t]);t<r.length&&Xe(n,r[t])}var l=e.clientRenderedBoundaries,o;for(o=0;o<l.length;o++){var i=l[o];r=n;var s=e.responseState,u=i.id,p=i.errorDigest,g=i.errorMessage,y=i.errorComponentStack;if(re(r,s.startInlineScript),s.sentClientRenderFunction?re(r,YE):(s.sentClientRenderFunction=!0,re(r,GE)),u===null)throw Error(we(395));re(r,u),re(r,ZE),(p||g||y)&&(re(r,Kd),re(r,Se(Qd(p||"")))),(g||y)&&(re(r,Kd),re(r,Se(Qd(g||"")))),y&&(re(r,Kd),re(r,Se(Qd(y)))),Xe(r,qE)}l.splice(0,o);var C=e.completedBoundaries;for(o=0;o<C.length;o++)s3(e,n,C[o]);C.splice(0,o),B0(n),ut=new Uint8Array(512),ht=0;var I=e.partialBoundaries;for(o=0;o<I.length;o++){var E=I[o];e:{l=e,i=n;var S=E.completedSegments;for(s=0;s<S.length;s++)if(!Sv(l,i,E,S[s])){s++,S.splice(0,s);var M=!1;break e}S.splice(0,s),M=!0}if(!M){e.destination=null,o++,I.splice(0,o);return}}I.splice(0,o);var w=e.completedBoundaries;for(o=0;o<w.length;o++)s3(e,n,w[o]);w.splice(0,o)}finally{B0(n),e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&n.close()}}function c3(e,n){try{var t=e.abortableTasks;t.forEach(function(r){return wv(r,e,n)}),t.clear(),e.destination!==null&&r1(e,e.destination)}catch(r){ui(e,r),hc(e,r)}}Zp.renderToReadableStream=function(e,n){return new Promise(function(t,r){var l,o,i=new Promise(function(g,y){o=g,l=y}),s=uI(e,Y$(n?n.identifierPrefix:void 0,n?n.nonce:void 0,n?n.bootstrapScriptContent:void 0,n?n.bootstrapScripts:void 0,n?n.bootstrapModules:void 0),Z$(n?n.namespaceURI:void 0),n?n.progressiveChunkSize:void 0,n?n.onError:void 0,o,function(){var g=new ReadableStream({type:"bytes",pull:function(y){if(s.status===1)s.status=2,nv(y,s.fatalError);else if(s.status!==2&&s.destination===null){s.destination=y;try{r1(s,y)}catch(C){ui(s,C),hc(s,C)}}},cancel:function(){c3(s)}},{highWaterMark:0});g.allReady=i,t(g)},function(g){i.catch(function(){}),r(g)},l);if(n&&n.signal){var u=n.signal,p=function(){c3(s,u.reason),u.removeEventListener("abort",p)};u.addEventListener("abort",p)}Cv(s)})};Zp.version="18.2.0";var Ul,kv;Ul=Hl,kv=Zp;Ul.version;var pI=Ul.renderToString;Ul.renderToStaticMarkup;Ul.renderToNodeStream;Ul.renderToStaticNodeStream;kv.renderToReadableStream;var Tv={exports:{}},fI="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",mI=fI,gI=mI;function Lv(){}function _v(){}_v.resetWarningCache=Lv;var vI=function(){function e(r,l,o,i,s,u){if(u!==gI){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:_v,resetWarningCache:Lv};return t.PropTypes=t,t};Tv.exports=vI();var bI=Tv.exports;const Bt=Xt(bI);var yI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Nv(e,n){return e(n={exports:{}},n.exports),n.exports}var wI=Nv(function(e){(function(n){var t=function(M,w,m){if(!u(w)||g(w)||y(w)||C(w)||s(w))return w;var b,v=0,_=0;if(p(w))for(b=[],_=w.length;v<_;v++)b.push(t(M,w[v],m));else for(var T in b={},w)Object.prototype.hasOwnProperty.call(w,T)&&(b[M(T,m)]=t(M,w[T],m));return b},r=function(M){return I(M)?M:(M=M.replace(/[\-_\s]+(.)?/g,function(w,m){return m?m.toUpperCase():""})).substr(0,1).toLowerCase()+M.substr(1)},l=function(M){var w=r(M);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(M,w){return function(m,b){var v=(b=b||{}).separator||"_",_=b.split||/(?=[A-Z])/;return m.split(_).join(v)}(M,w).toLowerCase()},i=Object.prototype.toString,s=function(M){return typeof M=="function"},u=function(M){return M===Object(M)},p=function(M){return i.call(M)=="[object Array]"},g=function(M){return i.call(M)=="[object Date]"},y=function(M){return i.call(M)=="[object RegExp]"},C=function(M){return i.call(M)=="[object Boolean]"},I=function(M){return(M-=0)==M},E=function(M,w){var m=w&&"process"in w?w.process:w;return typeof m!="function"?M:function(b,v){return m(b,M,v)}},S={camelize:r,decamelize:o,pascalize:l,depascalize:o,camelizeKeys:function(M,w){return t(E(r,w),M)},decamelizeKeys:function(M,w){return t(E(o,w),M,w)},pascalizeKeys:function(M,w){return t(E(l,w),M)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:n.humps=S})(yI)}).decamelize,xI=function(e){if(Array.isArray(e))return e},CI=function(e,n){if(typeof Symbol<"u"&&Symbol.iterator in Object(e)){var t=[],r=!0,l=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(u){l=!0,o=u}finally{try{r||s.return==null||s.return()}finally{if(l)throw o}}return t}},d3=function(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r},SI=function(e,n){if(e){if(typeof e=="string")return d3(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d3(e,n):void 0}},kI=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},TI=function(e,n){return xI(e)||CI(e,n)||SI(e,n)||kI()},$v=Nv(function(e){function n(){return e.exports=n=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o])}return t},n.apply(this,arguments)}e.exports=n}),LI=function(e,n){if(e==null)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l},Ev=function(e,n){if(e==null)return{};var t,r,l=LI(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l},_I=D.createContext(null);function ph(e){var n=e.children,t=Ev(e,["children"]);return typeof n!="string"&&(n=pI(n)),En.createElement("template",$v({},t,{dangerouslySetInnerHTML:{__html:n}}))}function fh(e){var n=e.root,t=e.children;return _m.createPortal(t,n)}function NI(e){var n=D.forwardRef(function(t,r){var l,o,i=t.mode,s=t.delegatesFocus,u=t.styleSheets,p=t.ssr,g=t.children,y=Ev(t,["mode","delegatesFocus","styleSheets","ssr","children"]),C=(o=D.useRef((l=r)&&l.current),D.useEffect(function(){l&&(l.current=o.current)},[l]),o),I=D.useState(null),E=TI(I,2),S=E[0],M=E[1],w="node_".concat(i).concat(s);return D.useLayoutEffect(function(){if(C.current)try{if(typeof r=="function"&&r(C.current),p){var m=C.current.shadowRoot;return void M(m)}var b=C.current.attachShadow({mode:i,delegatesFocus:s});u.length>0&&(b.adoptedStyleSheets=u),M(b)}catch(v){(function(_){var T=_.error,A=_.styleSheets,F=_.root;switch(T.name){case"NotSupportedError":A.length>0&&(F.adoptedStyleSheets=A);break;default:throw T}})({error:v,styleSheets:u,root:S})}},[r,C,u]),En.createElement(En.Fragment,null,En.createElement(e.tag,$v({key:w,ref:C},y),(S||p)&&En.createElement(_I.Provider,{value:S},p?En.createElement(ph,{shadowroot:"open"},e.render({root:S,ssr:p,children:g})):En.createElement(fh,{root:S},e.render({root:S,ssr:p,children:g})))))});return n.propTypes={mode:Bt.oneOf(["open","closed"]),delegatesFocus:Bt.bool,styleSheets:Bt.arrayOf(Bt.instanceOf(globalThis.CSSStyleSheet)),ssr:Bt.bool,children:Bt.node},n.defaultProps={mode:"open",delegatesFocus:!1,styleSheets:[],ssr:!1,children:null},n}ph.propTypes={children:Bt.oneOfType([Bt.string,Bt.node])},ph.defaultProps={children:""},fh.propTypes={root:Bt.object.isRequired,children:Bt.node},fh.defaultProps={children:null};var Jd=new Map;function $I(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"core",t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(r){return r.children};return new Proxy(e,{get:function(r,l){var o=wI(l,{separator:"-"}),i="".concat(n,"-").concat(o);return Jd.has(i)||Jd.set(i,NI({tag:o,render:t})),Jd.get(i)}})}var EI=$I();const II=()=>c("div",{className:"prose",children:[a("h1",{children:"Forms"}),c("blockquote",{className:"intro",children:["There is something about styling forms, that's so not fun. It's like ",a("em",{children:'"How much less fun could this be?"'})," ","and the answer is ",a("em",{children:'"None, none... less fun."'}),a("div",{className:"attrib",children:"Nigel Tufnel's website designer"})]}),a("h2",{children:"None Less Fun"}),c(le,{children:[c("div",{children:[a("p",{children:"Anyone reading this who is old enough to have served in the browser wars will no doubt be rolling their eyes at this point, thinking that kids these days don't know how lucky they are."}),c("p",{children:["It's certainly true that things are ",a("i",{children:"much"})," better than they used.  But despite all the advances in CSS support and cross-browser compatibility, the default styling for HTML forms still looks like 1995 called and asked for its website back."]})]}),c("div",{children:[a("p",{children:"Badger CSS includes form styling presets, supporting both light and dark themes out of the box. It uses native form components for accessibility and mobile friendliness.  Everything is configurable if you want to change things, but you don't have to."}),a("p",{children:"Here's the same form rendered twice.  Once with the default HTML styling and again with the default Badger CSS styles.  In case you're wondering, there's no Javascript in any of these forms.  It's all just vanilla HTML and CSS."})]})]}),c("div",{className:"grid-2 gap-8 mar-t-10 stack-desktop",children:[c("div",{className:"output",children:[a("h3",{className:"mar-v",children:"Default HTML Form Styles"}),a("h4",{className:"mar-t mar-b-8",children:"Would you been seen holding this?"}),a(EI.div,{children:a("div",{dangerouslySetInnerHTML:{__html:v0}})})]}),c("div",{className:"output",children:[a("h3",{className:"mar-v",children:"Badger CSS Form Styles"}),a("h4",{className:"mar-t mar-b-8",children:"Beautiful plumage!"}),a("div",{dangerouslySetInnerHTML:{__html:v0}})]})]}),a("h2",{className:"mar-t-8",children:"Adaptive Sizes"}),c(le,{children:[c("p",{children:["All form components are sized using ems and will adapt to whatever the current text size is.  If you want a small form, for example, then you just need to add a ",a("code",{children:"small"})," class to the form or one of its parent containers."]}),a(Zr,{title:"Try it out",className:"mar-t-4",children:"Try selecting different sizes from the options below and see how the form inputs scale."})]}),a(t$,{}),a("h2",{children:"Accessibility and Focus"}),c(le,{children:[a("p",{children:"If you've played with any of the forms above you may have noticed the prominent ring around inputs when focussed.  This is important for accessibility to clearly indicate which field is selected."}),c("p",{children:["If for some reason you really, really need to disabled it because you're indicating the focus some other way then you can add the"," ",a("code",{children:"no-focus"})," class to the inputs."]})]}),a($,{html:JN,language:"html"}),a("h2",{children:"Themes and Surfaces"}),c(le,{children:[a("p",{children:"Styling forms is made that much harder these days by the need to support both light and dark themes.  On top of that we might want to have forms included on different surfaces with varying levels of background intensity. Thanks to the magic of CSS custom properties we can tweak the colors used to render forms depending on the background color of the container."}),a("p",{children:"In these examples below it may not be immediately obvious that the colors are slightly different but they are.  They're different so that they look more-or-less the same, while providing adequate contrast."})]}),a("div",{className:"grid-3 gap-4 stack-widescreen mar-b-8",children:["surface","surface-1","surface-2","surface-3","surface-4","surface-5"].map(e=>c("div",{className:`${e} pad-6 border shadow-2`,children:[a("h3",{className:"font-mono mar-b-3",children:e}),a("div",{dangerouslySetInnerHTML:{__html:XN}})]},e))})]}),MI=Object.freeze(Object.defineProperty({__proto__:null,default:II},Symbol.toStringTag,{value:"Module"})),PI=`<div class="input">
  Ceci n'est pas une entrée
</div>
`,RI=`<div class="input inline">
  Ceci n'est pas une entrée
</div>
`,AI=`<div class="input no-hover">
  Ceci n'est pas une entrée
</div>
`,OI=`<div class="grid-2 gap-4">
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
`,FI=`<div class="input" disabled>
  Ceci n'est pas une entrée
</div>

<div class="input disabled mar-t-4">
  Ceci n'est pas une entrée
</div>
`,BI=()=>c("div",{className:"prose",children:[a("h1",{children:"Fake Input"}),c("p",{children:["If you want something that isn't an input to look like an input then you can add the ",a("code",{children:"input"})," CSS class."]}),a($,{html:PI,language:"html",caption:"Inline Text Input"}),a("h2",{children:"Inline Input"}),c("p",{children:["Just like regular inputs, they are full-width by default. Add the ",a("code",{children:"inline"})," class to give it a fluid width."]}),a($,{html:RI,language:"html",caption:"Inline Text Input"}),a("h2",{children:"No Hover"}),c("p",{children:["Add the ",a("code",{children:"no-hover"})," class if you don't want it to change appearance on hover."]}),a($,{html:AI,language:"html",caption:"No Hover"}),a("h2",{children:"Grid and Flex Layout"}),c("p",{children:["You can also use the ",a(ae,{to:"/utilities/grid",text:"grid"})," and"," ",a(ae,{to:"/utilities/flexbox",text:"flexbox"})," classes to control layout."]}),a($,{html:OI,language:"html",caption:"Grid and Flex"}),a("h2",{children:"Disabled Inputs"}),c("p",{children:["Add the ",a("code",{children:"disabled"})," attribute or CSS class if you want it to look disabled."]}),a($,{html:FI,language:"html",caption:"Not an Input"})]}),DI=Object.freeze(Object.defineProperty({__proto__:null,default:BI},Symbol.toStringTag,{value:"Module"})),jI=`<style>
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
</div>`,zI=`<style>
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
</div>`,WI=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Multiple Input"}),a("p",{children:"Sometimes you need to create a form component that looks like a single input but is comprised of multiple inputs or other elements."}),c("p",{children:["In this case you can wrap them up in a container with the ",a("code",{children:"inputs"})," class.  See the"," ",a(ae,{to:"/forms/prefix-suffix",text:"Prefix and Suffix"})," page for details on adding the prefix icon."]}),a("h2",{children:"Credit Card Number"}),a("p",{children:"In this example we create an input for a credit card number. This demo doesn't have any interactive functionality and leaves a lot to be desired in terms of user experience.  For example, you can enter more than 4 numbers in each section, the focus doesn't automatically switch from one block to the next, and so on. But this is only supposed to be a demonstration of the styling, not the functionality."}),a("p",{children:"Making it work properly is left as an exercise for the reader."}),a($,{html:jI,language:"html",caption:"Credit Card"}),a("h2",{children:"Date"}),a("p",{children:"This is also a less-than-perfect implementation in terms of functionality, but it demonstrates the form."}),a($,{html:zI,language:"html",caption:"Date"})]}),HI=Object.freeze(Object.defineProperty({__proto__:null,default:WI},Symbol.toStringTag,{value:"Module"})),UI=`<div class="field">
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
`,VI=`<div class="grid-3 gap-4 stack-tablet">
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

`,GI=`<div class="grid-3 gap-4 stack-tablet">
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

`,YI=`<div class="grid-3 gap-4 stack-tablet">
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

`,ZI=`<div class="field">
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
`,qI=`<div class="field">
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
`,KI=`<div class="field">
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

`,QI=`<div class="field">
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

`,XI=`<div class="field">
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
`,JI=`<div class="field">
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
`,eM=`<div class="field">
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
`,nM=`<div class="field">
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
`,tM=`<div class="field">
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
`,rM=()=>c("div",{className:"prose",children:[a("h1",{children:"Prefix and Suffix"}),c("p",{children:["You can add prefixes and suffixes to form fields, or any combination of ",a(ae,{to:"/forms/multi-inputs",text:"inputs"}),". Not only do the colours and focus rings work correctly, but they also adapt their colors for ",a("code",{children:"valid"})," and ",a("code",{children:"invalid"})," fields."]}),a($,{html:UI,language:"html",caption:"Prefix and Suffix"}),a("h2",{children:"Shaded"}),c("p",{children:["To visually distinguish a prefix or suffix you you can add the ",a("code",{children:"shaded"})," class..."]}),a($,{html:VI,language:"html",caption:"Shaded"}),a("h2",{children:"Lined"}),c("p",{children:["...or the ",a("code",{children:"lined"})," class."]}),a($,{html:GI,language:"html",caption:"Lined"}),a("h2",{children:"Shaded and Lined"}),a("p",{children:"...or both."}),a($,{html:YI,language:"html",caption:"Shaded and Lined"}),a("h2",{children:"Input Prefix"}),c("p",{children:["If you want to add a prefix to a field you should enclose the input in an element with the ",a("code",{children:"inputs"})," class and add the"," ",a("code",{children:"prefix"})," class to the prefix element.  You can add a prefix to a text input, textarea, select or a checkbox or radio option with the ",a("code",{children:"border"})," class set.  You can try it without the "," ",a("code",{children:"border"})," but the effect is lost somewhat."]}),a("h3",{children:"Text Input With Prefix"}),a($,{html:ZI,language:"html",caption:"Text Prefix"}),a("h3",{children:"Text Area Input With Prefix"}),a($,{html:qI,language:"html",caption:"Text Area Prefix"}),a("h3",{children:"Select Input With Prefix"}),a($,{html:KI,language:"html",caption:"Select Prefix"}),a("h3",{children:"Checkbox With Prefix"}),c("p",{children:["This only really works with checkboxes that have the"," ",a("code",{children:"border"})," class"]}),a($,{html:QI,language:"html",caption:"Checkbox Prefix"}),a("h3",{children:"Fake Input"}),c("p",{children:["Instead of an input you can add the ",a("code",{children:"input"})," CSS class to any element."]}),a($,{html:XI,language:"html",caption:"Fake Input Prefix"}),a("h2",{children:"Input Suffix"}),c("p",{children:["Adding an input suffix is just the same, except for giving your suffix element the ",a("code",{children:"suffix"})," class and putting it after the input."]}),a("h3",{children:"Text Input With Suffix"}),a($,{html:JI,language:"html",caption:"Text Suffix"}),a("h3",{children:"Text Area Input With Suffix"}),a($,{html:eM,language:"html",caption:"Text Area Suffix"}),a("h3",{children:"Select Input With Suffix"}),a($,{html:nM,language:"html",caption:"Select Suffix"}),a("h3",{children:"Checkbox With Suffix"}),c("p",{children:["This only really works with checkboxes that have the"," ",a("code",{children:"border"})," class"]}),a($,{html:tM,language:"html",caption:"Checkbox Suffix"})]}),aM=Object.freeze(Object.defineProperty({__proto__:null,default:rM},Symbol.toStringTag,{value:"Module"})),lM=`<label>
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
`,oM=`<label class="inline radio">
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
`,iM=`<label class="inline border">
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
`,sM=`<div>
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
</div>`,cM=()=>c("div",{className:"prose",children:[a("h1",{children:"Radio Buttons"}),a("h2",{children:"Radio Class"}),c("p",{children:["Radio buttons are implemented much like"," ",a(ae,{to:"/forms/checkboxes",text:"checkboxes"}),".  Create a"," ",a("code",{children:"label"})," enclosing an ",a("code",{children:"input"})," with the"," ",a("code",{children:'type="radio"'})," attribute."]}),c("p",{children:["Badger-CSS identifies labels that include a radio button input using the ",a("code",{children:":has()"})," CSS selector. All the major browsers currently support it, although Firefox was a bit late to the party, only adding support in v121 released on 19th December 2023."]}),c("p",{children:["As a work-around to support older versions of Firefox, you can add the ",a("code",{children:"radio"})," class to the ",a("code",{children:"label"}),"."]}),a($,{html:lM,language:"html",caption:"Radio Buttons"}),a("h2",{children:"Inline Radio Buttons"}),c("p",{children:["Radio buttons are full-width by default. Add the ",a("code",{children:"inline"})," class to give them a fluid width."]}),a($,{html:oM,language:"html",caption:"Inline Radio Buttons"}),a("h2",{children:"Radio Button Borders"}),c("p",{children:["Add the ",a("code",{children:"border"})," class for borders.  You may need to manually add margins using the ",a(ae,{to:"/utilities/spacing",text:"margin"})," utility classes, or contain multiple checkboxes using the "," ",a(ae,{to:"/utilities/flexbox",text:"flexbox"})," or "," ",a(ae,{to:"/utilities/grid",text:"grid"})," container classes and set the gap between elements."]}),a($,{html:iM,language:"html",caption:"Border Radio Buttons"}),a("h2",{children:"Custom Radio Buttons"}),a($,{html:sM,language:"html",caption:"Custom Checkboxes"})]}),dM=Object.freeze(Object.defineProperty({__proto__:null,default:cM},Symbol.toStringTag,{value:"Module"})),uM=`<select name="animal">
  <option value="">-- Choose an animal --</option>
  <option value="ant">Ant</option>
  <option value="badger">Badger</option>
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
  <option value="elephant">Elephant</option>
  <option value="ferret">Ferret</option>
  <option value="goldfish" disabled>Goldfish</option>
</select>
`,hM=`<select name="animal" class="inline">
  <option value="badger">Badger</option>
  <option value="mushroom">Mushroom</option>
  <option value="snake">Snake</option>
</select>
<select name="color" class="inline mar-l-2">
  <option value="badger">Badger</option>
  <option value="mushroom">Mushroom</option>
  <option value="snake">Snake</option>
</select>
`,pM=`<div class="grid-2 gap-4">
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
`,fM=`<select name="animal" required>
  <option value="" hidden disabled selected>Choose an animal</option>
  <option value="ant">Ant</option>
  <option value="badger">Badger</option>
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
  <option value="elephant">Elephant</option>
  <option value="ferret">Ferret</option>
  <option value="goldfish">Goldfish</option>
</select>
`,mM=`<div class="small flex top gap-4 mar-b-4">
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
`,gM=`<select name="animal">
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
`,vM=`<div>
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

`,bM=()=>c("div",{className:"prose",children:[a("h1",{children:"Select Input"}),a("p",{children:"Select inputs are the bane of web developers and designers everywhere. There are notoriously difficult to style.  They don't want to align with other elements.  Their size is often wrong.  And just when you think you've finally cracked it, you look at it on another browser and see that it's all on the wonk."}),a("p",{children:"I have wasted far too many hours of my life starting at forms like this one trying to get everything the same size and aligned properly."}),a($,{html:mM,language:"html",caption:"Select Alignment"}),c("p",{children:["The least bad solution is to set ",a("code",{children:"appearance: none"})," to remove the browser-specific rendering quirks.  The problem then is that you also lose drop down arrow indicating that it's a select input.  So we have to put that back in using an SVG background image. But you don't need to worry about that - I did so you don't have to."]}),a($,{html:uM,language:"html",caption:"Select Input"}),a("h2",{children:"Inline Select Input"}),c("p",{children:["Select inputs are full-width by default.  Add the ",a("code",{children:"inline"})," ","class to make them only as wide as necessary."]}),a($,{html:hM,language:"html",caption:"Inline Select"}),a("h2",{children:"Grid and Flex Layout"}),c("p",{children:["You can also use the ",a(ae,{to:"/utilities/grid",text:"grid"})," and"," ",a(ae,{to:"/utilities/flexbox",text:"flexbox"})," classes to control layout."]}),a($,{html:pM,language:"html",caption:"Grid/Flex"}),a("h2",{children:"Custom Icon"}),c("p",{children:["You can define your own drop down arrow icon using the"," ",a("code",{children:"--arrow-down"})," property.  It's a little bit tricky because you have to URI encode the SVG and define it as shown in this example.  If you've got an SVG icon with a simple path and your icon is 16px square then you can copy the definition from this example and insert your path data into the ",a("code",{children:"path d='...'"})," part."]}),c("p",{children:["Note that you can't use ",a("code",{children:"currentColor"})," to set the stroke or fill color.  You can define separate ",a("code",{children:"--arrow-down"})," ","properties for you light and dark themes, or you can use a neutral color like ",a("code",{children:"#888"})," which works well in both cases."]}),a($,{html:vM,language:"html",caption:"Custom Icon"}),a("h2",{children:"Placeholder"}),c("p",{children:["Another annoying thing about select inputs is that they don't support the ",a("code",{children:"placeholder"})," attribute.  You can work around the problem by adding the ",a("code",{children:"required"})," attribute to the"," ",a("code",{children:"select"})," input and the ",a("code",{children:"hidden"}),","," ",a("code",{children:"disabled"})," and ",a("code",{children:"selected"})," attributes to the first option which contains your placeholder text."]}),a($,{html:fM,language:"html",caption:"Select Placeholder"}),a("h2",{children:"Option Groups"}),c("p",{children:["You can group options using the ",a("code",{children:"optgroup"})," element."]}),a($,{html:gM,language:"html",caption:"Option Groups"})]}),yM=Object.freeze(Object.defineProperty({__proto__:null,default:bM},Symbol.toStringTag,{value:"Module"})),wM=`<style>
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
</form>`,xM=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Form Styling"}),a("p",{children:"There are numerous CSS properties that you can set to change the styling."}),a($,{html:wM,language:"html",caption:"Form Styling",expand:!0})]}),CM=Object.freeze(Object.defineProperty({__proto__:null,default:xM},Symbol.toStringTag,{value:"Module"})),SM=`<input
  type="text"
  name="my-input"
  placeholder="Placeholder text"
/>
`,kM=`<input
  type="text"
  name="my-input"
  placeholder="Inline"
  class="inline"
/>
`,TM=`<div class="grid-2 gap-4">
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
`,LM=`<div class="grid-3 gap-4">
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
`,_M=`<div class="grid-2 gap-4">
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
</div>`,NM=()=>c("div",{className:"prose",children:[a("h1",{children:"Text Input"}),a("p",{children:"Text inputs are perhaps the most common kind of input."}),a($,{html:SM,language:"html",caption:"Text Input"}),a("h2",{children:"Inline Text Input"}),c("p",{children:["Inputs are full-width by default. Add the ",a("code",{children:"inline"})," class to give it a fluid width."]}),a($,{html:kM,language:"html",caption:"Inline Text Input"}),a("h2",{children:"Grid and Flex Layout"}),c("p",{children:["You can also use the ",a(ae,{to:"/utilities/grid",text:"grid"})," and"," ",a(ae,{to:"/utilities/flexbox",text:"flexbox"})," classes to control layout."]}),a($,{html:TM,language:"html",caption:"Grid and Flex"}),a("h2",{children:"Other Input Types"}),c("p",{children:["You can set the ",a("code",{children:"type"})," to one of the other text-based input types (e.g. ",a("code",{children:"password"}),", ",a("code",{children:"number"}),","," ",a("code",{children:"telephone"}),", ",a("code",{children:"date"}),", ",a("code",{children:"time"}),", etc). There's also some styling provided for the ",a("code",{children:"color"})," type although it's notoriously hard to style and the appearance can vary on different browsers, devices and operating systems."]}),a($,{html:LM,language:"html",caption:"Other Input Types"}),a("h2",{children:"Disabled Text Input"}),c("p",{children:["Add the ",a("code",{children:"disabled"})," attribute to disable the input or the ",a("code",{children:"disabled"})," CSS class."]}),a($,{html:_M,language:"html",caption:"Disabled Text Input"})]}),$M=Object.freeze(Object.defineProperty({__proto__:null,default:NM},Symbol.toStringTag,{value:"Module"})),EM=`<textarea
  rows="5"
  placeholder="I like badgers because..."
></textarea>
`,IM=`<textarea
  rows="5"
  class="inline"
  placeholder="I like badgers because..."
></textarea>
`,MM=`<div class="grid-2 gap-4">
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

`,PM=`<textarea
  rows="5"
  placeholder="Badgers are brilliant..."
  disabled
></textarea>

<textarea
  rows="5"
  placeholder="Mushrooms are magic..."
  class="disabled"
></textarea>
`,RM=()=>c("div",{children:[a("h1",{children:"Text Area Input"}),c("p",{children:["Text area inputs are much like ",a(ae,{to:"/form/text",text:"text inputs"}),"."]}),c("p",{children:["One thing to note (that always catches me out) - if you want placeholder text to appear then you have to make sure there is ",a("em",{children:"nothing"})," ","(not even a newline) between the opening and closing ",a("code",{children:"textarea"})," tags."]}),a($,{html:EM,language:"html",caption:"Text Area Input",expand:!0}),a("h2",{children:"Inline Text Area Input"}),c("p",{children:["Text area inputs are full-width by default.  Add the"," ",a("code",{children:"inline"})," class to give them a fluid width."]}),a($,{html:IM,language:"html",caption:"Inline Text Area Input",expand:!0}),a("h2",{children:"Grid and Flex Layout"}),c("p",{children:["You can also use the ",a(ae,{to:"/utilities/grid",text:"grid"})," and"," ",a(ae,{to:"/utilities/flexbox",text:"flexbox"})," classes to control layout."]}),a($,{html:MM,language:"html",caption:"Grid and Flex"}),a("h2",{children:"Disabled Text Area Input"}),c("p",{children:["Add the ",a("code",{children:"disabled"})," attribute to disabled the input or the ",a("code",{children:"disabled"})," CSS class."]}),a($,{html:PM,language:"html",caption:"Disabled Text Area Input"})]}),AM=Object.freeze(Object.defineProperty({__proto__:null,default:RM},Symbol.toStringTag,{value:"Module"})),OM=e=>D.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},D.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),D.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),D.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),D.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),D.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),D.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),D.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),FM=()=>c("div",{className:"prose",children:[a("h1",{children:"What's Wrong With It?"}),a("p",{className:"intro wide",children:"There are many, many CSS toolkits and UI frameworks already out there to choose from. If you're looking for something that's stable, reliable, comprehensive and well-supported then this probably isn't for you."}),c(le,{children:[c("div",{children:[a("h2",{children:"Work in Progress"}),a("p",{children:"This is a work in progress.  It started out life as an ad-hoc collection of CSS classes that I copy and pasted between projects.  Then it became part of Bader UI, a collection of React components implementing some basic UI widgets.  Now it's being moved out into its own module which concentrates on just the CSS without any dependency on React."}),a("p",{children:"One of the reasons that I'm moving it into a new module is because it gives me the opportunity to break backwards compatibility.  There are some things that, given the chance to do again, I would do differently. This gives me that chance and hopefully I won't make too many bad decisions that I later come to regret.  But until I've had a chance to eat my own dog food and build a few sites with it, I can't predict what's going to work well and what isn't."}),a("p",{children:"I'm also migrating everything to use modern CSS techniques which are now well supported by browsers.  That means that a lot of things that were previously hard become much easier.  But different."}),a("p",{children:"As a result, this module is still in a state of flux.  If you build anything with it now then there's a good chance that something will break in the near future."}),a("h2",{children:"Some Assembly Required"}),a("p",{children:"If you have a good working knowledge of modern CSS and SASS then you should be able to easily adapt it to your needs.  Nearly everything is customisable, either through SASS variables, CSS custom properties, or by using the provided scripts to build your own toolkit."}),c("p",{children:["You don't need to buy in to the whole package.  As well as being customisable it's also modular.  With a small amount of effort you can configure it to include the bits your want and ignore the rest. Or you can browse the source code and borrow the ",a("i",{children:"ideas"})," that you think are useful."]}),a("p",{children:"Just remember that this is aimed more at people who already know how to build web sites and are familiar with CSS. If you're looking for a fully-featured, widely used and well supported UI toolkit that does everything for you then there are plenty of others to choose from."}),a("p",{children:"If you don't like the sound of that then these probably aren't the badgers you're looking for.  You can go about your business. Move along."})]}),c("div",{children:[a("h2",{children:"Opinionated and Selfish Software"}),c("p",{children:["This is based on my personal collection of CSS styles and utility classes that I use on a daily basis in my job building web sites for clients. It's Open Source and you're welcome to use it but be aware that it's something that I built for ",a("em",{children:"me"})," to help"," ",a("em",{children:"me"})," get my job done."]}),a("p",{children:"I didn't build it for you (unless you're one of my clients) and I don't really have the time or inclination to promote it, increase the user base or provide unpaid support for it.  It's not my intention for this to be the next great CSS toolkit - there are plenty of those already. My goal isn't to change the World, only to make it a slightly better place."}),a("p",{children:"So be warned that it does things the way I like to do them.  You may not agree with all my decisions, but that's fine.  They're my decisions to make, not yours.  It's free software (in both senses: free speech and free beer) and if you don't like it then you're entitled to a full refund of the price you paid."}),a("p",{children:"On the plus-side, the Badger-UI toolkit contains a lot of tried and tested techniques for managing web site styles that have been honed over nearly 30 years of experience.  It contains the features that I can't live without when I'm building a web site.  Of course, you may have different ideas about the best way to do it, but this is what works for me.  It's supposed to be a reasonable starting point not the final destination."}),a("div",{className:"text-center",children:a(OM,{style:{width:"12em",marginTop:"2rem"}})})]})]})]}),BM=Object.freeze(Object.defineProperty({__proto__:null,default:FM},Symbol.toStringTag,{value:"Module"})),Iv=({path:e,onClick:n,width:t=512,height:r=512,style:l,className:o="night-and-day--icon",fill:i="currentColor"})=>a("svg",{"aria-hidden":"true",focusable:"false",className:o,style:l,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${t} ${r}`,onClick:n,children:a("path",{d:e,fill:i})}),Mv=e=>a(Iv,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),Pv=({Icon:e,caption:n,onClick:t,iconClass:r,iconStyle:l,captionStyle:o,className:i="night-and-day--switcher",captionClass:s="night-and-day--caption",style:u={display:"inline-block"}})=>c("div",{className:i,onClick:t,style:u,children:[a(e,{style:l,className:r}),!!n&&a("div",{className:s,style:o,children:n})]}),DM=e=>{const{setDark:n}=Vl();return a(Pv,{Icon:Mv,onClick:n,...e})},Rv=e=>a(Iv,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),jM=e=>{const{setLight:n}=Vl();return a(Pv,{Icon:Rv,onClick:n,...e})},zM=({sunrise:e={},nightfall:n={}})=>{const{isLight:t,setLight:r,setDark:l}=Vl();return t?a(jM,{onClick:l,...e}):a(DM,{onClick:r,...n})},Av=D.createContext(),Vl=()=>D.useContext(Av),is="dark",eu="light",Ov="(prefers-color-scheme: dark)",WM=()=>{var e;return(e=window==null?void 0:window.matchMedia)==null?void 0:e.call(window,Ov).matches},el=window==null?void 0:window.localStorage,HM=e=>e.split(" "),u3=(e,n="")=>`${e} ${n}`,UM=({storageKey:e,defaultVariant:n,children:t})=>{const r=e?el==null?void 0:el.getItem(e):null,[l,o=""]=r?HM(r):[WM(),null],[i,s]=D.useState(l===is),[u,p]=D.useState(o||n),g=E=>{s(E),e&&el&&el.setItem(e,u3(E?is:eu,u))},y=E=>{p(E),e&&el&&el.setItem(e,u3(i?is:eu,E))},C=E=>g(E.matches);D.useEffect(()=>{if(window&&window.matchMedia){const E=window.matchMedia(Ov);return E.addEventListener("change",C),()=>E==null?void 0:E.removeEventListener("change",C)}},[]);const I={isDark:i,isLight:!i,setDark:()=>g(!0),setLight:()=>g(!1),setIsDark:s,toggleTheme:()=>g(!i),theme:i?is:eu,variant:u,setVariant:y};return a(Av.Provider,{value:I,children:t})},VM=()=>c("div",{className:"prose",children:[a("h1",{children:"What's Good About It?"}),a("p",{className:"intro wide",children:"If you're wondering what makes Badger CSS better than all the other CSS frameworks and UI toolkits out there then the short and simple answer is that it isn't.  It's just another one to add to the pile."}),c(le,{children:[c("div",{children:[a("h2",{children:"A Solid Foundation"}),a("p",{children:"Badger CSS is a collection of tools and techniques that I've built up over many years (nearly 30) of building web sites.  It's what works for me and maybe it will work for you too.  But I'm not making any promises."}),a("p",{children:"It's supposed to be a starting point, not a destination.  If you're building a web site and you want a reasonable foundation to build your styles on then it might be better for you than a more fully-featured toolkit that has everything including the kitchen sink."}),a("h2",{children:"Small(ish) and Simple"}),a("p",{children:"The default Badger CSS stylesheet is around 15kb minimised and compressed (around 100kb uncompressed).  That includes all 16 color ranges which you probably aren't ever going to need in practice. If you define your own palette with a limited set of colors then you can reduce the size a fair bit."}),a("h2",{children:"Modern CSS"}),a("p",{children:"It is based on modern CSS techniques and works in all modern browsers. In particular it makes heavy use of CSS custom properties that you can easily change as required. Behind the scenes it is built using SASS (specifically SCSS) which gives you more opportunities for configuring and extending it."}),a("h2",{children:"Color Management"}),c("p",{children:["Badger CSS uses a novel approach to defining and selecting"," ",a(ae,{to:"/colors/ranges",text:"color ranges"}),".  The color palette was created using ",a("a",{href:"https://abw.github.io/badger-color",children:"Badger Color"})," (which itself was created for this specific task) and you can use it to create your own custom palettes if necessary. The palette data that it generates can be automatically expanded out to SASS component files, ready to be used in Badger CSS."]}),c("p",{children:["You can easily change the hues of the standard palette to match your ",a(ae,{to:"/colors/brand",text:"brand colors"}),".  It will automatically create greyscale color ranges based on your primary brand color."]}),c("p",{children:["The use of ",a(ae,{to:"/colors/variables",text:"CSS custom properties"})," ","to define color ranges, and CSS class scopes to select them, makes it easy to create UI components that work automatically with any color range. It also makes it easy to define different color schemes for light and dark themes."]}),a("h2",{children:"Utility Classes"}),c("p",{children:["Badger CSS comes with a core set of"," ",a(ae,{to:"/utilities",text:"utility classes"})," for ad-hoc styling. They are intentionally limited to the kind of things that I find myself using all the time.  If you prefer the approach of"," ",a("a",{href:"https://tailwindcss.com/",children:"Tailwind"})," that provides CSS classes for absolutely everything then you know where to find it."]}),c("p",{children:["I'm not knocking Tailwind, by the way.  CSS utility classes are an ",a("em",{children:"extremely"}),` useful set of tools to have in your toolkit. I just think they should be limited in their scope and not a replacement for writing "proper" CSS when it's more appropriate to do so.`]}),a("h2",{children:"Form Styling"}),c("p",{children:["Styling ",a(ae,{to:"/forms",text:"forms"})," is not much fun. I have wasted many hours, days, even weeks of my life trying to get form styling just right and I never want to have to do it again."]}),c("p",{children:["If you've got better things to do than trying to figure out why your ",a("code",{children:"select"})," component is 1 pixel shorter than your text ",a("code",{children:"input"})," component then take a look at what Badger CSS has to offer.  It provides basic styles for all the standard form components and has smoothed over a lot of the problems so you don't have to worry too much about them.  Spend the time you save playing with your kids or flying a kite."]}),a("h2",{children:"UI Components"}),a("p",{children:"Badger CSS has styling for a limited set of UI components. It's not really supposed to be a complete UI toolkit (because the World already has enough of them), but rather to be a foundation on which UI components can be built."}),c("p",{children:["Experience has taught me that off-the-shelf UI components (even ones that I've written myself) often need a fair bit of tweaking to match the styling for a particular site.  Sometimes it's easier just to write them from scratch as they're needed.  CSS has come a long way since the days when we relied on toolkits like"," ",a("a",{href:"https://getbootstrap.com/",children:"Bootstrap"})," to provide a consistent cross-browser experience."]}),a("p",{children:"That said, it's useful to have a reasonable starting point for some of the common UI components: things like alerts, dialogs, dropdown menus, overlays, tables and tooltips.  You can easily customise Badger CSS to remove anything you don't want."})]}),c("div",{children:[a("h2",{children:"Light and Dark Themes"}),a("p",{children:"Everything contains styling for both light and dark themes, out of the box."}),a(GM,{})]})]})]}),GM=()=>{const{theme:e,toggleTheme:n,isDark:t}=Vl();return c("div",{children:[c("button",{onClick:n,className:"mar-b-4",children:[c("span",{className:"mar-r-2",children:["Switch to the ",t?"light":"dark"," side"]}),t?a(Rv,{}):a(Mv,{})]}),a(YM,{theme:e})]})},YM=({theme:e})=>a("div",{children:c("div",{className:"surface pad-4 border",children:[c("h3",{className:"mar-t-0",children:[VS(e)," Theme"]}),c("div",{className:"field mar-t-4",children:[a("label",{children:"Form Field"}),a("input",{type:"text",name:"a"}),a("div",{className:"help",children:"Field help"})]}),c("div",{className:"field valid",children:[a("label",{children:"Valid Field"}),a("input",{type:"text",name:"b"}),a("div",{className:"help",children:"This is fine"})]}),c("div",{className:"field invalid",children:[a("label",{children:"Invalid Field"}),a("input",{type:"text",name:"c"}),a("div",{className:"help",children:"This is not so good"})]}),c("div",{className:"field mar-t-4",children:[a("label",{children:"Input Prefix/Suffix"}),c("div",{className:"inputs",children:[a("div",{className:"prefix",children:"£"}),a("input",{type:"text",name:"d"}),a("div",{className:"suffix",children:".00"})]})]}),c("div",{className:"field mar-t-4",children:[a("label",{children:"Shaded and Lined Prefix/Suffix"}),c("div",{className:"inputs",children:[a("div",{className:"prefix shaded lined",children:a(Ol,{name:"unlock"})}),a("input",{type:"text",name:"e"}),a("div",{className:"suffix shaded lined",children:a(Ol,{name:"check"})})]})]}),c("div",{className:"field",children:[a("label",{children:"Select"}),c("select",{name:"animal",required:!0,children:[a("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Choose an animal"}),a("option",{value:"ant",children:"Ant"}),a("option",{value:"badger",children:"Badger"}),a("option",{value:"cat",children:"Cat"}),a("option",{value:"dog",children:"Dog"})]})]}),c("label",{className:"inline radio",children:[a("input",{type:"radio",name:"radio1"}),"Radio"]}),c("label",{className:"inline radio",children:[a("input",{type:"radio",name:"radio1"}),"Buttons"]}),c("label",{children:[a("input",{type:"checkbox"}),"Checkbox"]}),c("div",{className:"mar-t-4 grid-2 gap-4",children:[c("label",{className:"inline radio border",children:[a("input",{type:"radio",name:"radio2"}),"Radio"]}),c("label",{className:"inline radio border",children:[a("input",{type:"radio",name:"radio2"}),"Buttons"]})]}),a("div",{className:"mar-t-4",children:c("label",{className:"border",children:[a("input",{type:"checkbox"}),"Checkbox"]})}),c("label",{className:"mar-t-4",children:[a("input",{type:"checkbox",role:"switch"}),"Turn it on again"]}),c("div",{className:"flex space mar-t-4",children:[a("button",{className:"grey outline",children:"Reset"}),a("button",{className:"blue",children:"Submit"})]}),a("div",{className:"success alert border mar-t-4",children:"Success alert"}),a("div",{className:"error alert border",children:"Error alert!"}),a("div",{className:"info alert border",children:"Info alert"}),c("details",{className:"shaded lined border orange bdr-1",children:[a("summary",{children:"Revealable Details"}),a("p",{children:"Hello World!"})]}),a("div",{"data-tooltip":"top left","aria-label":"This is a tooltip!",className:"violet border pad-2 pad-h-4 bgc-95 bgd-5 bdc-80 bdd-20 mar-t-4 Xtext-center bdr-1",children:"Hover here for tooltip"}),c("table",{className:"wide striped celled mar-t-4",children:[a("thead",{children:c("tr",{children:[a("th",{children:"Name"}),a("th",{children:"Instrument"})]})}),c("tbody",{children:[c("tr",{children:[a("td",{children:"Nigel"}),a("td",{children:"Guitar"})]}),c("tr",{children:[a("td",{children:"David"}),a("td",{children:"Guitar"})]}),c("tr",{children:[a("td",{children:"Derek"}),a("td",{children:"Bass"})]}),c("tr",{children:[a("td",{children:"Viv"}),a("td",{children:"Keyboards"})]}),c("tr",{children:[a("td",{children:"Mick"}),a("td",{children:"Drums"})]})]})]})]})}),ZM=Object.freeze(Object.defineProperty({__proto__:null,default:VM},Symbol.toStringTag,{value:"Module"})),qM=`<link
  rel="stylesheet"
  href="https://unpkg.com/@abw/badger-css/dist/styles/badger.min.css"
/>`,KM=`## using npm
$ npm add -D @abw/badger-css

## using yarn
$ yarn add -D @abw/badger-css

## using pnpm
$ pnpm add -D @abw/badger-css`,QM="import '@abw/badger-css/styles/badger.min.css';",XM="@import '@abw/badger-css/styles/badger.scss';",JM=`$ git clone https://github.com/abw/badger-css.git
$ cd badger-css
$ sass styles/badger.scss > your-badger-file.css`,eP=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Installation"}),a("h2",{children:"No Installation Required!"}),c(le,{children:[c("p",{children:["You don't need to install anything to get starting using Badger CSS in a website.  Simply add the following tag to the"," ",a("code",{children:"<head>"})," section of your web page."]}),a(Ie,{code:qM,caption:"Unpkg Link",language:"html",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Adding to a Javascript Project"}),c(le,{children:[c("p",{children:["If you want to configure, modify or adapt Badger CSS then you should add ",a("code",{children:"@abw/badger-css"})," to your Javascript project using your favourite package manager.  In most cases you should be able to add it as a development dependency using the ",a("code",{children:"-D"})," option."]}),a(Ie,{code:KM,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Importing the CSS"}),c(le,{children:[c("div",{children:[a("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script like so:"}),c("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",a("code",{children:"node_modules"})," directory."]})]}),a(Ie,{code:QM,caption:"Importing CSS",language:"js",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Importing the SCSS"}),c(le,{children:[c("div",{children:[a("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components.  This gives you the flexibility to configure the default options, or to pick and choose which components you want to include."}),a("p",{children:"Add the following line to your main SCSS stylesheet source."})]}),a(Ie,{code:XM,caption:"Importing SCSS",language:"scss",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Going it Alone"}),c(le,{children:[c("p",{children:["If you're not using Javascript but want to play with the SCSS source files then you can check out the project repository from Github and run ",a("code",{children:"sass"})," to compile the source files into CSS."]}),a(Ie,{code:JM,caption:"CSS from SASS",language:"shell",className:"mar-b-8",expand:!0})]})]}),nP=Object.freeze(Object.defineProperty({__proto__:null,default:eP},Symbol.toStringTag,{value:"Module"})),tP=e=>D.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 717 337",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},D.createElement("path",{className:"white",d:"M248.362,204.8C251.303,208.841 251.506,216.92 246.886,220.486C247.235,215.811 245.076,210.416 243.385,207.987C242.142,206.2 237.32,201.909 232.525,201.457C236.319,199.212 245.27,200.55 248.362,204.8ZM380.931,288.851C382.012,292.919 365.895,290.457 365.767,303.096C365.703,309.466 368.575,313.608 364.949,314.116C360.977,314.673 360.493,310.692 359.8,305.449C358.316,294.227 366.194,290.723 373.729,288.466C380.03,286.58 380.512,287.273 380.931,288.851ZM250.509,198.166C250.116,197.944 249.715,197.73 249.306,197.524C237.097,191.351 222.986,194.646 217.814,204.876C213.744,212.926 216.415,222.888 223.688,229.775C220.646,228.505 217.677,226.862 214.911,224.779C198.663,212.542 195.441,190.333 199.289,185.248C202.588,180.888 226.299,177.823 242.548,190.06C245.688,192.424 248.324,195.199 250.509,198.166ZM234.492,31.758C231.75,33.423 225.901,22.543 215.941,24.48C210.088,25.619 206.755,23.124 210.523,20.119C221.225,11.585 239.546,28.689 234.492,31.758ZM99.149,58.412C89.72,51.898 79.11,48.569 67.051,51.951C58.397,54.378 52.734,60.065 49.994,67.45C48.707,67.555 47.4,67.691 46.084,67.853C38.149,68.832 29.859,70.741 23.646,72.288C42.126,47.476 64.861,38.817 87.003,38.714L88.566,38.707L88.864,37.173C90.304,29.757 86.13,22.597 75.216,17.044C99.723,11.821 129.948,17.277 146.178,26.501L148.305,27.709L148.955,25.351C149.908,21.892 149.675,13.343 143.798,5.723C174.533,11.177 197.842,21.068 216.166,33.985C250.062,62.777 267.98,100.361 283.213,136.181C299.907,175.44 313.396,212.581 341.026,233.82C341.522,234.342 342.023,234.861 342.528,235.377C350.993,244.039 366.478,256.93 385.23,273.49C387.358,275.369 389.327,277.224 391.08,279.038C386.966,279.245 381.675,280.641 374.911,282.18C352.689,287.237 351.849,297.009 354.41,312.963C355.723,321.141 359.376,324.914 364.644,326.161C344.448,331.711 334.138,335.299 309.216,330.594C270.323,323.25 233.474,308.826 222.734,303.773C222.54,303.387 222.214,303.065 221.786,302.881C207.397,296.693 197.713,288.82 193.624,279.767C195.586,278.724 197.158,277.535 198.531,276.583C199.395,275.985 199.61,274.797 199.011,273.933C198.412,273.069 197.225,272.854 196.361,273.453C193.368,275.527 189.319,279.035 181.419,278.358C180.371,278.268 179.448,279.046 179.359,280.093C179.269,281.14 180.046,282.063 181.094,282.153C184.73,282.464 187.673,282.036 190.117,281.255C194.043,289.991 202.664,297.858 215.527,304.192C190.321,313.397 168.064,307.288 148.128,295.655C126.82,283.221 108.129,264.526 91.308,250.982C77.307,239.708 64.463,232.065 52.581,233.695C45.172,234.711 38.017,239.243 31.166,248.886C20.017,224.385 34.815,199.803 49.449,184.213L50.995,182.566L49.11,181.321C34.813,171.879 18.601,177.687 7.799,189.755C6.995,180.056 11.532,165.892 18.973,152.99C26.481,139.972 37,128.18 48.427,123.711C118.961,110.252 153.156,169.713 188.827,221.409C209.775,251.767 256.49,287.586 345.223,316.241C340.436,301.054 342.628,293.783 346.067,286.802C324.7,276.815 298.269,260.277 280.877,228.797C233.283,142.653 212.43,81.347 143.665,64.082C131.685,61.074 116.053,57.87 99.149,58.412ZM99.066,72.542C97.614,80.151 74.887,58.073 70.407,69.969C62.107,92.007 54.173,79.428 56.142,73.447C66.246,42.754 100.4,65.551 99.066,72.542Z",style:{fill:"white"}}),D.createElement("path",{className:"black",d:"M48.845,71.376C48.085,71.452 47.319,71.538 46.55,71.633C36.384,72.888 25.625,75.704 19.567,77.251L14.706,78.493L17.519,74.338C36.933,45.669 61.411,35.483 85.316,34.929C85.679,28.465 80.142,22.804 68.715,18.305L63.513,16.258L68.883,14.704C94.004,7.433 126.953,12.429 145.602,21.872C145.715,17.476 143.99,10.119 137.262,4.358L132.173,0L138.793,1.03C164.858,5.083 185.888,12.137 203.193,21.438C203.366,21.5 203.539,21.563 203.712,21.626C205.114,17.121 209.176,13.252 216.656,13.924C236.466,15.704 240.708,25.62 241.751,43.904C266.891,65.236 284.026,95.363 297.467,125.916C309.511,153.29 318.589,181.001 327.822,202.999C331.443,211.626 335.086,219.374 338.942,225.872C340.965,228.196 343.066,230.479 345.252,232.715C353.685,241.344 369.071,254.139 387.751,270.635C391.391,273.849 394.564,277.022 397.067,280.061C399.65,281.424 401.411,284.251 402.569,289.316C402.766,289.952 402.91,290.575 403,291.183C403.044,291.476 403.078,291.773 403.104,292.073C403.406,293.909 403.652,295.979 403.849,298.307C404.631,307.557 401.813,319.773 387.422,323.48C384.617,324.202 381.912,324.872 379.338,325.409C375.566,326.623 372.295,327.675 372.296,327.675C350.779,335.844 336.841,339.686 308.509,334.336C267.627,326.617 228.986,311.137 219.844,306.606C192.192,317.895 167.885,311.593 146.209,298.945C124.732,286.413 105.872,267.6 88.919,253.949C82.285,248.607 75.954,244.066 69.867,241.062C64.049,238.191 58.481,236.73 53.099,237.468C45.892,238.456 39.128,243.397 32.519,253.689L30.774,256.406L29.24,253.565C15.116,227.399 29.491,200.652 45.081,183.337C31.813,176.104 17.177,183.299 8.174,195.3L5.878,198.362L4.821,194.683C1.901,184.524 6.568,166.875 15.674,151.087C21.122,141.64 28.135,132.887 35.912,126.766C24.827,130.039 12.898,135.014 0,141.953C13.007,107.592 30.082,86.63 48.343,74.289C48.468,73.299 48.636,72.327 48.845,71.376ZM248.362,204.8C245.27,200.55 236.319,199.212 232.525,201.457C237.32,201.909 242.142,206.2 243.385,207.987C245.076,210.416 247.235,215.811 246.886,220.486C251.506,216.92 251.303,208.841 248.362,204.8ZM380.931,288.851C380.512,287.273 380.03,286.58 373.729,288.466C366.194,290.723 358.316,294.227 359.8,305.449C360.493,310.692 360.977,314.673 364.949,314.116C368.575,313.608 365.703,309.466 365.767,303.096C365.895,290.457 382.012,292.919 380.931,288.851ZM250.509,198.166C248.324,195.199 245.688,192.424 242.548,190.06C226.299,177.823 202.588,180.888 199.289,185.248C195.441,190.333 198.663,212.542 214.911,224.779C217.677,226.862 220.646,228.505 223.688,229.775C216.415,222.888 213.744,212.926 217.814,204.876C222.986,194.646 237.097,191.351 249.306,197.524C249.715,197.73 250.116,197.944 250.509,198.166ZM234.492,31.758C239.546,28.689 221.225,11.585 210.523,20.119C206.755,23.124 210.088,25.619 215.941,24.48C225.901,22.543 231.75,33.423 234.492,31.758ZM99.149,58.412C116.053,57.87 131.685,61.074 143.665,64.082C212.43,81.347 233.283,142.653 280.877,228.797C298.269,260.277 324.7,276.815 346.067,286.802C342.628,293.783 340.436,301.054 345.223,316.241C256.49,287.586 209.775,251.767 188.827,221.409C153.156,169.713 118.961,110.252 48.427,123.711C37,128.18 26.481,139.972 18.973,152.99C11.532,165.892 6.995,180.056 7.799,189.755C18.601,177.687 34.813,171.879 49.11,181.321L50.995,182.566L49.449,184.213C34.815,199.803 20.017,224.385 31.166,248.886C38.017,239.243 45.172,234.711 52.581,233.695C64.463,232.065 77.307,239.708 91.308,250.982C108.129,264.526 126.82,283.221 148.128,295.655C168.064,307.288 190.321,313.397 215.527,304.192C202.664,297.858 194.043,289.991 190.117,281.255C187.673,282.036 184.73,282.464 181.094,282.153C180.046,282.063 179.269,281.14 179.359,280.093C179.448,279.046 180.371,278.268 181.419,278.358C189.319,279.035 193.368,275.527 196.361,273.453C197.225,272.854 198.412,273.069 199.011,273.933C199.61,274.797 199.395,275.985 198.531,276.583C197.158,277.535 195.586,278.724 193.624,279.767C197.713,288.82 207.397,296.693 221.786,302.881C222.214,303.065 222.54,303.387 222.734,303.773C233.474,308.826 270.323,323.25 309.216,330.594C334.138,335.299 344.448,331.711 364.644,326.161C359.376,324.914 355.723,321.141 354.41,312.963C351.849,297.009 352.689,287.237 374.911,282.18C381.675,280.641 386.966,279.245 391.08,279.038C389.327,277.224 387.358,275.369 385.23,273.49C366.478,256.93 350.993,244.039 342.528,235.377C342.023,234.861 341.522,234.342 341.026,233.82C313.396,212.581 299.907,175.44 283.213,136.181C267.98,100.361 250.062,62.777 216.166,33.985C197.842,21.068 174.533,11.177 143.798,5.723C149.675,13.343 149.908,21.892 148.955,25.351L148.305,27.709L146.178,26.501C129.948,17.277 99.723,11.821 75.216,17.044C86.13,22.597 90.304,29.757 88.864,37.173L88.566,38.707L87.003,38.714C64.861,38.817 42.126,47.476 23.646,72.288C29.859,70.741 38.149,68.832 46.084,67.853C47.4,67.691 48.707,67.555 49.994,67.45C52.734,60.065 58.397,54.378 67.051,51.951C79.11,48.569 89.72,51.898 99.149,58.412ZM99.066,72.542C100.4,65.551 66.246,42.754 56.142,73.447C54.173,79.428 62.107,92.007 70.407,69.969C74.887,58.073 97.614,80.151 99.066,72.542Z"}),D.createElement("path",{className:"badger",d:"M347.242,14.148C348.016,13.915 349.256,13.664 350.96,13.392C352.664,13.121 354.406,12.986 356.188,12.986C357.892,12.986 359.421,13.102 360.777,13.334C362.132,13.567 363.274,14.031 364.204,14.729C365.133,15.426 365.83,16.374 366.295,17.575C366.76,18.775 366.992,20.344 366.992,22.28L366.992,33.666C368.928,32.891 370.768,32.349 372.511,32.039C374.253,31.729 376.17,31.574 378.261,31.574C381.979,31.574 385.503,32.233 388.834,33.549C392.164,34.866 395.107,36.783 397.663,39.3C400.219,41.817 402.233,44.935 403.704,48.653C405.176,52.37 405.912,56.669 405.912,61.548C405.912,66.583 405.157,70.978 403.646,74.735C402.136,78.491 400.025,81.608 397.315,84.087C394.604,86.565 391.293,88.444 387.381,89.722C383.47,90.999 379.152,91.638 374.428,91.638C369.316,91.638 364.978,91.038 361.416,89.838C357.853,88.637 354.832,87.146 352.354,85.365C348.946,82.964 347.242,79.866 347.242,76.071L347.242,14.148ZM374.428,76.071C377.99,76.071 380.759,74.851 382.734,72.411C384.709,69.971 385.697,66.35 385.697,61.548C385.697,56.669 384.69,53.029 382.676,50.628C380.662,48.227 377.952,47.026 374.544,47.026C372.995,47.026 371.659,47.181 370.536,47.491C369.413,47.801 368.193,48.265 366.876,48.885L366.876,74.212C367.728,74.754 368.754,75.199 369.955,75.548C371.155,75.896 372.646,76.071 374.428,76.071ZM439.023,31.574C443.205,31.574 447.02,32 450.466,32.852C453.913,33.704 456.856,35.002 459.296,36.744C461.735,38.487 463.614,40.694 464.93,43.366C466.247,46.039 466.905,49.195 466.905,52.835L466.905,78.859C466.905,80.873 466.344,82.518 465.221,83.796C464.098,85.074 462.762,86.178 461.213,87.108C456.178,90.128 449.091,91.638 439.952,91.638C435.847,91.638 432.149,91.251 428.857,90.477C425.565,89.702 422.738,88.54 420.376,86.991C418.014,85.442 416.194,83.467 414.916,81.066C413.638,78.665 412.999,75.877 412.999,72.701C412.999,67.357 414.586,63.252 417.762,60.387C420.938,57.521 425.856,55.739 432.517,55.042L447.736,53.416L447.736,52.603C447.736,50.356 446.748,48.749 444.773,47.781C442.798,46.813 439.952,46.329 436.234,46.329C433.291,46.329 430.425,46.639 427.637,47.258C424.849,47.878 422.332,48.653 420.086,49.582C419.079,48.885 418.227,47.82 417.53,46.387C416.833,44.954 416.484,43.463 416.484,41.914C416.484,39.9 416.968,38.293 417.936,37.093C418.904,35.892 420.395,34.866 422.409,34.014C424.655,33.162 427.308,32.542 430.367,32.155C433.427,31.768 436.312,31.574 439.023,31.574ZM439.952,77.232C441.269,77.232 442.721,77.097 444.309,76.826C445.896,76.555 447.078,76.187 447.852,75.722L447.852,66.428L439.487,67.125C437.319,67.28 435.537,67.744 434.143,68.519C432.749,69.294 432.052,70.455 432.052,72.004C432.052,73.553 432.652,74.812 433.853,75.78C435.053,76.748 437.086,77.232 439.952,77.232ZM476.548,61.548C476.548,56.436 477.323,52.002 478.872,48.246C480.421,44.489 482.57,41.372 485.32,38.894C488.069,36.415 491.283,34.576 494.962,33.375C498.641,32.175 502.611,31.574 506.871,31.574C508.42,31.574 509.93,31.71 511.402,31.981C512.873,32.252 514.074,32.581 515.003,32.968L515.003,14.148C515.778,13.915 517.017,13.664 518.721,13.392C520.425,13.121 522.167,12.986 523.949,12.986C525.653,12.986 527.182,13.102 528.538,13.334C529.893,13.567 531.036,14.031 531.965,14.729C532.895,15.426 533.592,16.374 534.056,17.575C534.521,18.775 534.753,20.344 534.753,22.28L534.753,77.349C534.753,80.989 533.049,83.893 529.642,86.062C527.395,87.533 524.491,88.831 520.928,89.954C517.365,91.077 513.26,91.638 508.613,91.638C503.579,91.638 499.067,90.941 495.079,89.547C491.09,88.153 487.721,86.139 484.971,83.506C482.222,80.873 480.13,77.716 478.697,74.037C477.265,70.358 476.548,66.195 476.548,61.548ZM509.543,47.026C505.36,47.026 502.146,48.227 499.9,50.628C497.654,53.029 496.531,56.669 496.531,61.548C496.531,66.35 497.576,69.971 499.668,72.411C501.759,74.851 504.779,76.071 508.73,76.071C510.124,76.071 511.382,75.858 512.505,75.432C513.628,75.006 514.5,74.522 515.119,73.979L515.119,48.42C513.57,47.491 511.711,47.026 509.543,47.026ZM574.603,31.574C579.017,31.574 583.025,32.136 586.627,33.259C590.228,34.382 593.268,35.834 595.747,37.616C597.296,38.7 598.516,39.9 599.407,41.217C600.297,42.534 600.743,44.238 600.743,46.329L600.743,86.991C600.743,91.096 599.968,94.64 598.419,97.622C596.87,100.604 594.759,103.082 592.087,105.057C589.415,107.032 586.278,108.484 582.677,109.414C579.075,110.343 575.222,110.808 571.117,110.808C564.069,110.808 558.531,109.859 554.504,107.961C550.476,106.064 548.462,102.985 548.462,98.725C548.462,96.944 548.83,95.376 549.566,94.02C550.302,92.665 551.135,91.638 552.064,90.941C554.31,92.181 556.847,93.226 559.674,94.078C562.501,94.93 565.424,95.356 568.445,95.356C572.627,95.356 575.958,94.659 578.436,93.265C580.915,91.871 582.154,89.625 582.154,86.527L582.154,84.668C578.979,86.062 575.106,86.759 570.536,86.759C567.051,86.759 563.74,86.236 560.603,85.191C557.466,84.145 554.717,82.518 552.354,80.311C549.992,78.104 548.095,75.257 546.662,71.772C545.229,68.287 544.512,64.143 544.512,59.341C544.512,54.616 545.268,50.511 546.778,47.026C548.288,43.541 550.379,40.656 553.051,38.371C555.724,36.086 558.899,34.382 562.578,33.259C566.257,32.136 570.265,31.574 574.603,31.574ZM581.806,48.42C581.263,48.11 580.47,47.801 579.424,47.491C578.378,47.181 577.081,47.026 575.532,47.026C571.737,47.026 568.89,48.091 566.993,50.221C565.095,52.351 564.146,55.391 564.146,59.341C564.146,63.833 565.095,67.067 566.993,69.042C568.89,71.017 571.311,72.004 574.254,72.004C577.43,72.004 579.947,71.269 581.806,69.797L581.806,48.42ZM642.799,91.638C638.229,91.638 633.989,90.999 630.078,89.722C626.166,88.444 622.758,86.527 619.854,83.971C616.949,81.415 614.665,78.201 612.999,74.328C611.334,70.455 610.502,65.924 610.502,60.735C610.502,55.623 611.334,51.228 612.999,47.549C614.665,43.87 616.853,40.849 619.563,38.487C622.274,36.125 625.372,34.382 628.858,33.259C632.343,32.136 635.906,31.574 639.546,31.574C643.651,31.574 647.388,32.194 650.757,33.433C654.126,34.672 657.031,36.376 659.471,38.545C661.91,40.714 663.808,43.308 665.163,46.329C666.519,49.35 667.197,52.641 667.197,56.204C667.197,58.837 666.461,60.851 664.989,62.245C663.518,63.64 661.465,64.53 658.832,64.917L630.136,69.216C630.988,71.772 632.73,73.689 635.364,74.967C637.997,76.245 641.018,76.884 644.426,76.884C647.601,76.884 650.602,76.477 653.429,75.664C656.256,74.851 658.561,73.902 660.342,72.818C661.581,73.592 662.627,74.676 663.479,76.071C664.331,77.465 664.757,78.936 664.757,80.485C664.757,83.971 663.13,86.565 659.877,88.269C657.399,89.586 654.611,90.477 651.512,90.941C648.414,91.406 645.51,91.638 642.799,91.638ZM639.546,45.98C637.687,45.98 636.08,46.29 634.725,46.91C633.369,47.529 632.266,48.323 631.414,49.292C630.562,50.26 629.923,51.344 629.497,52.545C629.071,53.745 628.819,54.965 628.742,56.204L648.608,52.951C648.376,51.402 647.524,49.853 646.052,48.304C644.581,46.755 642.412,45.98 639.546,45.98ZM696.473,89.663C695.699,89.896 694.479,90.128 692.814,90.36C691.149,90.593 689.425,90.709 687.644,90.709C685.94,90.709 684.41,90.593 683.055,90.36C681.699,90.128 680.557,89.663 679.628,88.966C678.698,88.269 677.982,87.321 677.478,86.12C676.975,84.919 676.723,83.351 676.723,81.415L676.723,46.561C676.723,44.78 677.052,43.25 677.711,41.972C678.369,40.694 679.318,39.552 680.557,38.545C681.796,37.538 683.326,36.628 685.146,35.815C686.966,35.002 688.922,34.285 691.013,33.666C693.104,33.046 695.273,32.562 697.519,32.213C699.765,31.865 702.011,31.691 704.257,31.691C707.975,31.691 710.918,32.407 713.087,33.84C715.256,35.273 716.34,37.616 716.34,40.869C716.34,41.953 716.185,43.018 715.875,44.063C715.565,45.109 715.178,46.058 714.713,46.91C713.087,46.91 711.422,46.987 709.718,47.142C708.014,47.297 706.349,47.529 704.722,47.839C703.096,48.149 701.566,48.478 700.133,48.827C698.7,49.175 697.48,49.582 696.473,50.047L696.473,89.663Z"}),D.createElement("path",{className:"css",d:"M586.337,162.306C584.4,162.306 582.561,162.616 580.818,163.236C579.075,163.855 577.565,164.765 576.287,165.966C575.009,167.166 573.983,168.657 573.208,170.439C572.434,172.22 572.047,174.311 572.047,176.712C572.047,181.514 573.421,185.116 576.171,187.517C578.92,189.918 582.27,191.119 586.22,191.119C588.544,191.119 590.558,190.847 592.262,190.305C593.966,189.763 595.476,189.182 596.793,188.563C598.342,189.647 599.503,190.828 600.278,192.106C601.052,193.384 601.44,194.914 601.44,196.695C601.44,199.871 599.929,202.33 596.909,204.072C593.888,205.815 589.706,206.686 584.361,206.686C579.482,206.686 575.067,205.97 571.117,204.537C567.167,203.104 563.779,201.09 560.952,198.496C558.125,195.901 555.937,192.784 554.388,189.143C552.838,185.503 552.064,181.476 552.064,177.061C552.064,171.949 552.897,167.476 554.562,163.642C556.227,159.809 558.492,156.652 561.358,154.174C564.224,151.695 567.535,149.837 571.291,148.597C575.048,147.358 579.017,146.738 583.2,146.738C588.776,146.738 593.075,147.745 596.095,149.759C599.116,151.773 600.626,154.367 600.626,157.543C600.626,159.015 600.278,160.389 599.581,161.667C598.884,162.945 598.071,164.049 597.141,164.978C595.824,164.359 594.237,163.759 592.378,163.178C590.519,162.597 588.505,162.306 586.337,162.306ZM657.786,188.098C657.786,193.984 655.579,198.593 651.164,201.923C646.749,205.254 640.243,206.919 631.646,206.919C628.393,206.919 625.372,206.686 622.584,206.222C619.796,205.757 617.414,205.041 615.439,204.072C613.464,203.104 611.915,201.884 610.792,200.413C609.669,198.941 609.107,197.199 609.107,195.185C609.107,193.326 609.495,191.758 610.269,190.48C611.044,189.202 611.973,188.137 613.057,187.285C615.304,188.524 617.879,189.628 620.783,190.596C623.688,191.564 627.038,192.048 630.833,192.048C633.234,192.048 635.073,191.699 636.351,191.002C637.629,190.305 638.268,189.376 638.268,188.214C638.268,187.13 637.803,186.278 636.874,185.658C635.945,185.039 634.396,184.535 632.227,184.148L628.742,183.451C622.003,182.134 616.988,180.062 613.696,177.235C610.405,174.408 608.759,170.361 608.759,165.095C608.759,162.229 609.379,159.634 610.618,157.311C611.857,154.987 613.6,153.051 615.846,151.502C618.092,149.953 620.783,148.752 623.92,147.9C627.057,147.048 630.523,146.622 634.318,146.622C637.184,146.622 639.875,146.835 642.392,147.261C644.91,147.687 647.098,148.326 648.957,149.178C650.815,150.03 652.287,151.134 653.371,152.489C654.456,153.845 654.998,155.452 654.998,157.311C654.998,159.092 654.669,160.622 654.01,161.9C653.352,163.178 652.519,164.243 651.512,165.095C650.893,164.707 649.963,164.301 648.724,163.875C647.485,163.449 646.13,163.061 644.658,162.713C643.186,162.364 641.695,162.074 640.185,161.842C638.675,161.609 637.3,161.493 636.061,161.493C633.505,161.493 631.53,161.784 630.136,162.364C628.742,162.945 628.044,163.855 628.044,165.095C628.044,165.947 628.432,166.644 629.206,167.186C629.981,167.728 631.452,168.231 633.621,168.696L637.223,169.509C644.658,171.213 649.944,173.556 653.081,176.538C656.218,179.52 657.786,183.373 657.786,188.098ZM714.946,188.098C714.946,193.984 712.738,198.593 708.324,201.923C703.909,205.254 697.403,206.919 688.806,206.919C685.553,206.919 682.532,206.686 679.744,206.222C676.955,205.757 674.574,205.041 672.599,204.072C670.624,203.104 669.075,201.884 667.952,200.413C666.829,198.941 666.267,197.199 666.267,195.185C666.267,193.326 666.654,191.758 667.429,190.48C668.203,189.202 669.133,188.137 670.217,187.285C672.463,188.524 675.039,189.628 677.943,190.596C680.847,191.564 684.197,192.048 687.992,192.048C690.393,192.048 692.233,191.699 693.511,191.002C694.789,190.305 695.428,189.376 695.428,188.214C695.428,187.13 694.963,186.278 694.034,185.658C693.104,185.039 691.555,184.535 689.387,184.148L685.901,183.451C679.163,182.134 674.148,180.062 670.856,177.235C667.564,174.408 665.919,170.361 665.919,165.095C665.919,162.229 666.538,159.634 667.777,157.311C669.017,154.987 670.759,153.051 673.005,151.502C675.252,149.953 677.943,148.752 681.08,147.9C684.217,147.048 687.683,146.622 691.478,146.622C694.343,146.622 697.035,146.835 699.552,147.261C702.069,147.687 704.257,148.326 706.116,149.178C707.975,150.03 709.447,151.134 710.531,152.489C711.615,153.845 712.157,155.452 712.157,157.311C712.157,159.092 711.828,160.622 711.17,161.9C710.512,163.178 709.679,164.243 708.672,165.095C708.053,164.707 707.123,164.301 705.884,163.875C704.645,163.449 703.289,163.061 701.818,162.713C700.346,162.364 698.855,162.074 697.345,161.842C695.834,161.609 694.46,161.493 693.22,161.493C690.665,161.493 688.689,161.784 687.295,162.364C685.901,162.945 685.204,163.855 685.204,165.095C685.204,165.947 685.591,166.644 686.366,167.186C687.14,167.728 688.612,168.231 690.781,168.696L694.382,169.509C701.818,171.213 707.104,173.556 710.241,176.538C713.377,179.52 714.946,183.373 714.946,188.098Z"})),rP=()=>a("div",{children:c("div",{className:"mobile block-center pad-t-8 flow",children:[a(tP,{className:"badger-css"}),a("h1",{className:"mar-t-8",children:"Modern, minimal CSS presets"}),c("p",{children:["You've probably heard of CSS ",a("b",{children:"reset"})," stylesheets that provide sensible defaults for HTML elements to smooth out some of the inconsistencies between browsers.  And no doubt you're aware of the plethora of fully-featured CSS ",a("b",{children:"toolkits"})," that implement all manner of styles for UI components."]}),c("p",{children:["Badger CSS sits somewhere between the two.  It provides some sensible"," ",a("b",{children:"presets"})," for HTML elements that you can use out of the box and expect to get reasonable results.  It's highly configurable and is really designed to be a starting point for building your own CSS stylesheets, design systems and UI toolkits."]}),c("div",{className:"grid-2 gap-2",children:[a(ae,{to:"/colors/demo",text:"Color Demo",className:"brand button Xbdr-tl-4"}),a(ae,{to:"/getting-started/installation",text:"Getting Started",className:"brand button Xbdr-tr-4"}),a(ae,{to:"/getting-started/good",text:"What's Good?",className:"brand button Xbdr-bl-4"}),a(ae,{to:"/getting-started/bad",text:"What's Bad?",className:"brand button Xbdr-br-4"})]}),a("h2",{children:"TL;DR:"}),a("h3",{children:"Cool Colors"}),c("ul",{children:[c("li",{children:["Hand-crafted palette with ",a(ae,{to:"/colors/ranges",children:"13 color ranges"})," ","and 3 greyscales, each containing 21 color stops from none more black to a whiter shade of pale."]}),c("li",{children:["Easily adapt the palette to match your ",a(ae,{to:"/colors/brand",children:"brand colors"}),"."]}),c("li",{children:["Create and your own custom palette using ",a("a",{href:"https://abw.github.io/badger-color/",children:"Badger Color"})," and"," ",a(ae,{to:"/colors/palette",children:"import it"})," into Badger CSS."]})]}),a("h3",{children:"Useful Utilities"}),c("ul",{children:[a("li",{children:"Utility classes for the things you need to do most often."}),a("li",{children:"Useful for prototyping or ad-hoc styling."}),a("li",{children:"CSS custom properties for applying them into your own custom styles."}),a("li",{children:"All configurable by SASS variables."})]}),a("h3",{children:"Fantastic Forms"}),c("ul",{children:[c("li",{children:[a("i",{children:"Mostly Classless"})," styling providing sensible and modern defaults for HTML forms."]}),a("li",{children:"Minimal additional markup required."}),a("li",{children:"Easily modified using CSS properties and/or SASS variables."})]}),a("h3",{children:"Components"}),c("ul",{children:[a("li",{children:"A basic set of components that you just can't live without."}),a("li",{children:"Different variations of the basic styles."}),a("li",{children:"Automatically adapt to any color range or brand colors."}),a("li",{children:"Configurable and customisable, using CSS properties and/or SASS variables."})]})]})}),aP=Object.freeze(Object.defineProperty({__proto__:null,default:rP},Symbol.toStringTag,{value:"Module"})),lP=`<div class="block-left width-12rem border pad-2">
  Block left
</div>
<div class="block-center width-12rem border pad-2 mar-t-4">
  Block center
</div>
<div class="block-right width-12rem border pad-2 mar-t-4">
  Block right
</div>
`,oP=`<div class="text-left border pad-2 mar-b-2">
  Text on the left
</div>
<div class="text-center border pad-2 mar-b-2">
  Text in the center
</div>
<div class="text-right border pad-2">
  Text on the right
</div>`,iP=`<div class="text-right border pad-4">
  Text on the right
  <div class="text-left border pad-2 mar-v-2">
    Text on the left
  </div>
  Text on the right
</div>`,sP=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Alignment"}),a("h2",{children:"Text Alignment"}),c("p",{children:["Add the ",a("code",{children:"text-left"}),", ",a("code",{children:"text-center"})," and"," ",a("code",{children:"text-right"})," CSS classes to set the text alignment."]}),a($,{html:oP,caption:"Text Alignment",expand:!0}),c("p",{children:["Text is aligned left by default making the ",a("code",{children:"text-left"})," ","class ",a("em",{children:"mostly"})," redundant.  However it can be useful to reset the alignment to the left for a block that would otherwise be aligned centrally or to the right"]}),a($,{html:iP,caption:"Text Left",expand:!0}),a("h2",{children:"Block Alignment"}),c("p",{children:["Add the ",a("code",{children:"block-left"}),", ",a("code",{children:"block-center"})," and"," ",a("code",{children:"block-right"})," CSS classes to align a block to the left, in the center, or on the right, respectively."]}),c("p",{children:["You'll need to set a block width to stop it from expanding to fill the full width of the parent element.  You can do that using one of the"," ",a(ae,{to:"/utilities/widths",text:"width-*"})," utility classes."]}),a($,{html:lP,caption:"Block Alignment",expand:!0})]}),cP=Object.freeze(Object.defineProperty({__proto__:null,default:sP},Symbol.toStringTag,{value:"Module"})),dP=`<div class="border pad-4">
  This element has a border.
</div>
`,uP=`<div class="grid-1 gap-2">
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
</div>`,hP=`<div class="grid-2 gap-2">
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
`,pP=`<div class="border pad-4 mar-b-2">
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
`,fP=`<div class="grid-3 gap-4 pad-t-2">
  <button class="brand solid">default</button>
  <button class="brand solid bdr-0">bdr-0</button>
  <button class="brand solid square">square</button>
</div>
<div class="grid-3 gap-4 pad-t-2">
  <input type="text" value="default">
  <input type="text" value="bdr-0" class="bdr-0">
  <input type="text" value="square" class="square">
</div>
`,mP=`<div class="bdr-6 surface-1 pad-2 border grid-1 gap-2">
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
</div>`,gP=`<style>
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
`,vP=`// define your own $border-width-values...
$border-width-values: 1, 2, 3, 5, 8, 13, 21, 34;
// ...and/or set the $border-width-prefix...
$border-width-prefix: 'br-wd';

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,bP=`// define your own $border-radius-values...
$border-radius-values: 1, 2, 3, 5, 8, 13, 21, 34;
// ...and/or set the $border-width-prefix...
$border-radius-prefix: 'br-rd';

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,yP=`<div class="grid-1 gap-4">
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
</div>`,wP=({properties:e})=>c("table",{className:"brand celled striped properties wide",children:[a("thead",{children:c("tr",{children:[a("th",{children:"Property"}),a("th",{children:"Default"}),a("th",{children:"Description"})]})}),a("tbody",{children:e.map(n=>c("tr",{children:[a("td",{className:"key nowrap",children:a("code",{children:n[0]})}),a("td",{className:"nowrap",children:n[1]}),a("td",{children:n[2]})]},n[0]))})]}),xP=({sets:e})=>a("div",{className:`grid-${e.length} gap-8 stack-desktop mar-b-8`,children:e.map(n=>c("div",{children:[a("h4",{className:"mar-b-2",children:n.title}),a(wP,{properties:n.properties}),!!n.notes&&a("div",{className:"smallish info alert",children:n.notes})]},n.title))}),CP=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Borders"}),a("h2",{children:"Border Class"}),c("p",{children:["Add the ",a("code",{children:"border"})," CSS class to an element to give it a border."]}),a($,{html:dP,caption:"Border",expand:!0}),a("h2",{children:"Border Width"}),c("p",{children:["Add the ",a("code",{children:"bdw-N"})," CSS class to set the border width, where"," ",a("code",{children:"N"})," is in pixel units."]}),a($,{html:uP,caption:"Border Width",expand:!0}),c("div",{className:"grid-2 gap-8 stack-desktop",children:[c("div",{className:"wide",children:[c("p",{children:["The pre-defined values for ",a("code",{children:"N"})," are"," ",a("code",{children:"0"}),", ",a("code",{children:"1"}),", ",a("code",{children:"2"}),", ",a("code",{children:"3"}),","," ",a("code",{children:"4"}),", ",a("code",{children:"5"}),", ",a("code",{children:"6"}),", ",a("code",{children:"8"})," and"," ",a("code",{children:"10"}),"."]}),c("p",{children:["You can set the ",a("code",{children:"$border-width-values"})," SCSS variable if you want to define a different set of values. You can also use the ",a("code",{children:"$border-width-prefix"})," to define a different prefix for the border width classes if you don't like ",a("code",{children:"bdw"}),"."]}),c("p",{children:["In the example shown here the generated CSS classes would be"," ",a("code",{children:"br-wd-1"}),", ",a("code",{children:"br-wd-2"}),","," ",a("code",{children:"br-wd-3"}),", ",a("code",{children:"br-wd-5"})," and so on."]})]}),a(Ie,{code:vP,caption:"Custom Border Widths",language:"scss",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Border Color"}),c("p",{children:["Add the ",a("code",{children:"bdc-N"})," CSS class to set the border color, where"," ",a("code",{children:"N"})," is a color stop (0, 5, 10, etc) for the current color range.  Use ",a("code",{children:"bdd-N"})," to set a different color for dark mode."]}),a($,{html:hP,caption:"Border Color"}),a("h2",{children:"Border Radius"}),c("p",{children:["Add the ",a("code",{children:"bdr-N"})," classes to set the radius of borders. The ",a("code",{children:"-N"})," multiplier is a multiple of the base unit radius (0.25rem by default)."]}),a($,{html:pP,caption:"Border Radius",expand:!0}),c("p",{children:["The ",a("code",{children:"bdr-0"})," class can be used to ",a("i",{children:"explicitly"})," set the border radius to 0. The ",a("code",{children:"square"})," class is an alias for"," ",a("code",{children:"bdr-0"})," with the added benefit of having the"," ",a("code",{children:"!important"})," flag set for when you really need to drive the point home."]}),a("p",{children:"They can be used to remove the corner radius from components which have them by default, like buttons and form fields."}),a($,{html:fP,caption:"Square Corners",expand:!0}),c("div",{className:"grid-2 gap-8 stack-desktop",children:[c("div",{className:"wide",children:[c("p",{children:["The pre-defined values for ",a("code",{children:"N"})," are"," ",a("code",{children:"0"}),", ",a("code",{children:"1"}),", ",a("code",{children:"2"}),", ",a("code",{children:"3"}),","," ",a("code",{children:"4"}),", ",a("code",{children:"5"}),", ",a("code",{children:"6"}),", ",a("code",{children:"8"})," and"," ",a("code",{children:"10"}),"."]}),c("p",{children:["You can set the ",a("code",{children:"$border-radius-values"})," SCSS variable if you want to define a different set of values. You can also use the ",a("code",{children:"$border-radius-prefix"})," to define a different prefix for the border radius classes if you don't like ",a("code",{children:"bdr"}),"."]}),c("p",{children:["In the example shown here the generated CSS classes would be"," ",a("code",{children:"br-rd-1"}),", ",a("code",{children:"br-rd-2"}),","," ",a("code",{children:"br-rd-3"}),", ",a("code",{children:"br-rd-5"})," and so on."]})]}),a(Ie,{code:bP,caption:"Custom Border Radius",language:"scss",className:"mar-b-8",expand:!0})]}),a("h2",{children:"Border Radius Corners"}),a("p",{children:"You can independently set the radius for different corners using these classes."}),c("div",{className:"grid-2 gap-8 stack-desktop",children:[c("table",{className:"brand border lined striped mar-b-8",children:[a("thead",{children:c("tr",{children:[a("th",{children:"Class"}),a("th",{children:"Description"})]})}),c("tbody",{children:[c("tr",{children:[a("td",{children:a("code",{children:"bdr-t-N"})}),a("td",{children:"Top left and top right corner radius"})]}),c("tr",{children:[a("td",{children:a("code",{children:"bdr-b-N"})}),a("td",{children:"Bottom left and bottom right corner radius"})]}),c("tr",{children:[a("td",{children:a("code",{children:"bdr-l-N"})}),a("td",{children:"Top left and bottom left corner radius"})]}),c("tr",{children:[a("td",{children:a("code",{children:"bdr-r-N"})}),a("td",{children:"Top right and bottom right corner radius"})]}),c("tr",{children:[a("td",{children:a("code",{children:"bdr-tl-N"})}),a("td",{children:"Top left corner radius"})]}),c("tr",{children:[a("td",{children:a("code",{children:"bdr-tr-N"})}),a("td",{children:"Top right corner radius"})]}),c("tr",{children:[a("td",{children:a("code",{children:"bdr-bl-N"})}),a("td",{children:"Bottom left corner radius"})]}),c("tr",{children:[a("td",{children:a("code",{children:"bdr-br-N"})}),a("td",{children:"Bottom right corner radius"})]})]})]}),a("div",{children:c(Zr,{children:["If you set a custom ",a("code",{children:"$border-radius-prefix"})," as shown above then your CSS classes will start with your chosen prefix instead of ",a("code",{children:"bdr"})," as shown here."]})})]}),a($,{html:mP,caption:"Border Radius Corners",expand:!0}),a("h2",{children:"No Border Required!"}),c("p",{children:["You don't need to have a border displayed to set the border radius. The ",a("code",{children:"bdr-N"})," classes can be used to set the border radius on various components."]}),a($,{html:yP,caption:"Radius Components",expand:!0}),a("h2",{children:"Border Properties"}),a("p",{children:"The following properties are used to define the border style."}),a(xP,{sets:[{title:"Defaults",properties:[["--border-width",a("code",{children:"1px"},"1px"),"Border width"],["--border-style",a("code",{children:"solid"},"solid"),c("span",{children:["Border style: ",a("code",{children:"solid"}),", ",a("code",{children:"dotted"}),", ",a("code",{children:"dashed"}),", etc."]},"desc")],["--border-radius",a("code",{children:"var(--unit-radius)"},"radius"),"Border radius"],["--border-color",a("code",{children:"var(--color-75)"},"color"),"Border color from current color range"]]},{title:"Dark Theme",properties:[["--border-color",a("code",{children:"var(--color-25)"},"color"),"Border color from current color range"]]}]}),a("h2",{children:"Setting Custom Properties"}),a($,{html:gP,caption:"Custom Border Style",expand:!0})]}),SP=Object.freeze(Object.defineProperty({__proto__:null,default:CP},Symbol.toStringTag,{value:"Module"})),Fv=`// define your own breakpoints...
$breakpoints: (
  'mobile':     30rem,
  'tablet':     50rem,
  'laptop':     70rem,
  'desktop':    80rem,
  'widescreen': 90rem
) !default;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";`,kP={mobile:30,tablet:50,laptop:70,desktop:80,widescreen:90},TP=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Breakpoints"}),a("h2",{children:"Breakpoint Names"}),c(le,{children:[a("p",{children:"The breakpoint names and their corresponding widths in rems and pixels (assuming 1rem = 16px) are shown below."}),c("p",{children:["You can set the ",a("code",{children:"$breakpoints"})," SASS variable if you want to define a different set of breakpoints."]})]}),a(Dt,{code:Fv,caption:"Custom Breakpoints",language:"scss",expand:!0,children:c("table",{className:"brand celled striped properties small wide mar-b-2",children:[a("thead",{children:c("tr",{children:[a("th",{children:"Class"}),a("th",{children:"Rems"}),a("th",{children:"Pixels"})]})}),a("tbody",{children:Object.entries(kP).map(([e,n])=>c("tr",{children:[a("td",{children:a("code",{children:e})}),c("td",{children:[n,"rem"]}),c("td",{children:[n*16,"px"]})]},e))})]})}),a("h2",{children:"Breakpoint Widths"}),c(le,{children:[c("div",{children:[a("p",{children:"You can add one of the breakpoint classes to an element to give it a maximum width."}),c("p",{children:["Add the ",a("code",{children:"block-center"})," class to center a block, or ",a("code",{children:"block-right"})," to right align it."]})]}),a(Zr,{title:"Try it out!",children:"Try resizing your browser window and see how the elements below respond."})]}),a("div",{className:"mobile surface-2 border pad-4",children:a("h3",{className:"font-mono",children:".mobile"})}),a("div",{className:"tablet surface-2 border pad-4",children:a("h3",{className:"font-mono",children:".tablet"})}),a("div",{className:"laptop surface-2 border pad-4",children:a("h3",{className:"font-mono",children:".laptop"})}),a("div",{className:"desktop surface-2 border pad-4",children:a("h3",{className:"font-mono",children:".desktop"})}),a("div",{className:"widescreen surface-2 border pad-4",children:a("h3",{className:"font-mono",children:".widescreen"})}),a("div",{className:"mobile block-center surface-2 border pad-4",children:a("h3",{className:"font-mono",children:".mobile.block-center"})}),a("div",{className:"tablet block-right surface-2 border pad-4",children:a("h3",{className:"font-mono",children:".tablet.block-right"})})]}),LP=Object.freeze(Object.defineProperty({__proto__:null,default:TP},Symbol.toStringTag,{value:"Module"})),_P=`<div class="cols-2">
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
</div>`,NP=`<div class="cols-3">
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
</div>`,$P=`<div class="cols-2 gap-12">
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
</div>`,EP=`<div class="cols-2" style="--column-gap: 4rem">
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
</div>`,IP=`<div class="cols-2 stack-laptop">
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
</div>`,MP=()=>c("div",{className:"flow",children:[a("h1",{children:"Columns"}),c("p",{className:"cols-2 stack-desktop",children:["The ",a("code",{children:"cols-N"})," class can be added to split text into",a("code",{children:"N"})," columns, from 1 to 5."]}),a("h2",{className:"font-mono",children:"Two Columns"}),c("p",{className:"cols-2 stack-desktop",children:["The ",a("code",{children:"cols-2"})," class splits the text into two columns."]}),a($,{html:_P,caption:"Two Columns"}),a("h2",{className:"font-mono",children:"Three Columns"}),c("p",{className:"cols-3 stack-desktop",children:["The ",a("code",{children:"cols-3"})," class splits the text into two columns. And so on..."]}),a($,{html:NP,caption:"Three Columns"}),a("h2",{className:"font-mono",children:"Gaps"}),c("p",{className:"cols-2 stack-desktop",children:["Add on of the ",a("code",{children:"gap-N"})," classes to define the gap between the columns (where ",a("code",{children:"N"})," is in units of 0.25rem from 1 to 16)."]}),a($,{html:$P,caption:"Column Gap"}),a("h2",{className:"font-mono",children:"--column-gap"}),c("p",{className:"cols-2 stack-desktop",children:["Alternately, you can set the ",a("code",{children:"--column-gap"})," CSS property to anything you like."]}),a($,{html:EP,caption:"Gap Property"}),a("h2",{className:"font-mono",children:"Stacking"}),c("p",{className:"cols-2 stack-desktop",children:["Add one of the ",a("code",{children:"stack-XXX"})," ",a(ae,{to:"/utilities/stack",text:"breakpoint stacking"})," classes (e.g."," ",a("code",{children:"stack-mobile"}),", ",a("code",{children:"stack-tablet"}),", etc).  To have the columns reduce to one when the screen width is less than the breakpoint width."]}),a($,{html:IP,caption:"Stacking Columns"})]}),PP=Object.freeze(Object.defineProperty({__proto__:null,default:MP},Symbol.toStringTag,{value:"Module"})),RP=()=>c("div",{className:"flow",children:[a("h1",{children:"Container"}),c("p",{className:"mar-b-none",children:["The ",a("code",{children:"container"})," class creates a fluid container that stretches to the full width of the parent element with some padding on each side."]}),c("p",{children:["By itself it's not particularly interesting.  There's really not much difference between this and defining an element with horizontal padding, e.g. using ",a("code",{children:"pad-h-8"}),"..."]}),c("div",{className:"container surface-2 border flow pad-v-6",children:[a("h3",{className:"font-mono",children:"container"}),a("p",{className:"mar-b-none",children:"We're very lucky in the sense that we've got two visionaries in the band.  David and Nigel are both like, uh, like poets, you know, like Shelley or Byron, or people like that. The two totally distinct types of visionaries.  It's like fire and ice, basically, you see, and I feel my role in the band, is to be kind of in the middle of that, kind of like lukewarm water, in a sense."})]}),a("h2",{children:"Breakpoint Widths"}),c("div",{className:"container-mobile surface-2 border pad-v-6",children:[a("h3",{className:"font-mono",children:"container-mobile"}),c("p",{className:"mar-v-4",children:["...but it gets more interesting when you add a breakpoint suffix to set the content width, e.g. ",a("code",{children:"container-mobile"}),".  Now the content will be centered and contained to the breakpoint size."]}),c("p",{children:["Now you may be wondering how this is any different to using the"," ",a("code",{children:"mobile"})," class to set the width and"," ",a("code",{children:"block-center"})," to center it?  Well it all comes down to being able to break out of the box."]}),c("section",{className:"popout blue bgc-30 fgc-90 pad-v-6",children:[a("h3",{className:"fgc-100 font-mono",children:"popout"}),a("p",{className:"mar-t-4 mar-b-none",children:"This is a popout section.  It's pushed out a bit wider than the normal content."})]}),a("p",{className:"mar-v-4",children:"He did a twist on it. A twist and it... He did, he did. He turned it around. We shoulda thought of that. We were so close. I mean if we had all you guys tied up, that probably woulda been fine."}),c("section",{className:"feature indigo bgc-30 fgc-90 pad-v-6",children:[a("h3",{className:"fgc-100 font-mono",children:"feature"}),a("p",{className:"mar-t-4 mar-b-none",children:"This is a feature section.  It's pushed out even further than the normal content.  How much more wider could this be? And the answer is..."})]}),a("p",{className:"mar-v-4",children:"But it's, it's still a stupid cover. It's such a fine line between stupid and... and clever. Yeah, and clever. Just that little turnabout..."}),c("section",{className:"full-width violet bgc-30 fgc-90 pad-h-8 pad-v-6",children:[a("h3",{className:"fgc-100 font-mono",children:"full-width"}),a("p",{className:"mar-t-4 mar-b-none",children:"...a lot wider!  This is a full-width section.  You see, most... most blokes, you know, will be playing at ten. You're on ten here... all the way up... all the way up... all the way up. You're on ten on your guitar...where can you go from there? Where? Nowhere. Exactly. What we do is if we need that extra... push over the cliff... you know what we do? Put it up to eleven. Eleven. Exactly. One louder."})]}),a("p",{className:"mar-v-4",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),c("section",{className:"full-width container-mobile purple bgc-30 fgc-90 pad-v-6",children:[a("h3",{className:"fgc-100 font-mono",children:"container-mobile"}),a("p",{className:"mar-t-4 mar-b-none",children:"You can add a container class to a full-width section and it will contain the content.  So you get a full width background, but contained content."})]}),a("p",{className:"mar-t-4 mar-b-none",children:`And I don't think that a sexy cover is the answer for why an album sells or doesn't sell because you tell me, the "White Album", what was that? There was nothing on that goddamn cover.`})]}),a("h2",{children:"Rem / px Widths"}),c("div",{className:"container-20rem surface-2 border pad-t-6",children:[a("h3",{className:"font-mono",children:"container-20rem"}),c("p",{className:"mar-t-4",children:["You can add any of the ",a("code",{children:"-Nrem"})," or ",a("code",{children:"-Npx"})," suffixes to the container class and the content will be set to that width. See the ",a(ae,{to:"/utilities/widths",text:"width utilities"})," page."]}),a("p",{className:"mar-v-4",children:`It's a matter of compromise, we made a joke, and it was a long time ago, they're making it like a big deal. That's true. You know, if we were serious and we said "yes she should be forced to sniff... smell the glove" then you'd have a point you know but it's all a joke, isn't it, we're making fun of that sort of thing. It is and it isn't, she should be made to smell it, but... But not you know over and over again.`}),a("section",{className:"full-width container-20rem maroon bgc-30 fgc-90 pad-v-6",style:{"--link-text":"var(--color-70)","--link-hover":"var(--color-80)"},children:c("p",{className:"mar-v-none large",children:["Shout out to"," ",a("a",{href:"https://www.youtube.com/watch?v=c13gpBrnGEw",children:"Kevin Powell"})," and"," ",a("a",{href:"https://ryanmulligan.dev/blog/layout-breakouts/",children:"Ryan Mulligan"})," ","for this technique!"]})})]})]}),AP=Object.freeze(Object.defineProperty({__proto__:null,default:RP},Symbol.toStringTag,{value:"Module"})),OP=`<div class="inline border pad-2">
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
`,FP=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Display"}),a("h2",{children:"Display Modes"}),c(le,{children:[c("p",{children:["The ",a("code",{children:"inline"}),", ",a("code",{children:"block"})," and"," ",a("code",{children:"inline-block"})," CSS classes can be used to set the"," ",a("code",{children:"display"})," mode.   These are useful when you have an element that would normally have one display type that you want displayed in a different way."]}),c("p",{children:["See the"," ",a(ae,{to:"/utilities/flexbox",text:"flexbox"})," and"," ",a(ae,{to:"/utilities/grid",text:"grid"})," pages for information about using flex and grid display modes."]})]}),a($,{html:OP,caption:"Display Modes",expand:!0})]}),BP=Object.freeze(Object.defineProperty({__proto__:null,default:FP},Symbol.toStringTag,{value:"Module"})),DP=`<div class="flex">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>`,jP=`<div class="flex top">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,zP=`<div class="flex middle">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,WP=`<div class="flex bottom">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,HP=`<div class="flex baseline">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,UP=`<div class="flex top gap-4">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,VP=`<div class="flex left gap-2">
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
`,GP=`<div class="flex center gap-2">
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
`,YP=`<div class="flex right gap-2">
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
`,ZP=`<div class="flex space">
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
`,qP=`<div class="flex evenly">
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
`,KP=`<div class="flex gap-2 red">
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
`,QP=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Flexbox"}),a("h2",{children:"Flexbox Classes"}),c("p",{children:["Use the ",a("code",{children:"flex"})," CSS class to set the ",a("code",{children:"display"})," ","mode to ",a("code",{children:"flex"}),".  The default alignment mode"," ","(i.e. the ",a("code",{children:"align-items"})," CSS property) is ",a("code",{children:"stretch"}),"."]}),a($,{html:DP,caption:".flex",expand:!0}),a("h2",{children:"Gaps"}),c("p",{children:["The ",a("code",{children:"gap-N"})," classes can be used to add a gap between successive elements.  Here ",a("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit (",a("code",{children:"0.25rem"})," by default)."]}),a($,{html:UP,caption:".flex.gap-4",expand:!0}),a("h2",{children:"Flex Top"}),c("p",{children:["Add the ",a("code",{children:"top"})," (or ",a("code",{children:"start"}),") class to align the items to the stop."]}),a($,{html:jP,caption:".flex.top",expand:!0}),a("h2",{children:"Flex Middle"}),c("p",{children:["Add the ",a("code",{children:"middle"})," class to align the items to the middle."]}),a($,{html:zP,caption:".flex.middle",expand:!0}),a("h2",{children:"Flex Baseline"}),c("p",{children:["Add the ",a("code",{children:"baseline"})," class to align the items to the text baseline."]}),a($,{html:HP,caption:".flex.baseline",expand:!0}),a("h2",{children:"Flex Bottom"}),c("p",{children:["Add the ",a("code",{children:"bottom"})," (or ",a("code",{children:"end"}),") class to align the items to the bottom."]}),a($,{html:WP,caption:".flex.bottom",expand:!0}),a("h2",{children:"Flex Left"}),c("p",{children:["Items are align to the left (technically, ",a("code",{children:"flex-start"}),") by default but you can add the ",a("code",{children:"left"})," class if you want to make it explicit."]}),a($,{html:VP,caption:".flex.left",expand:!0}),a("h2",{children:"Flex Center"}),c("p",{children:["Add the ",a("code",{children:"center"})," class to align the items to the center."]}),a($,{html:GP,caption:".flex.center",expand:!0}),a("h2",{children:"Flex Right"}),c("p",{children:["Add the ",a("code",{children:"right"})," class to align the items to the right."]}),a($,{html:YP,caption:".flex.right",expand:!0}),a("h2",{children:"Flex Space"}),c("p",{children:["Add the ",a("code",{children:"space"})," class to space the items as much as possible. This is equivalent to setting the ",a("code",{children:"justify-content"})," CSS property to ",a("code",{children:"space-between"}),"."]}),a($,{html:ZP,caption:".flex.space",expand:!0}),a("h2",{children:"Flex Evenly"}),c("p",{children:["Add the ",a("code",{children:"evenly"})," class to divide the space evenly between and around the items.  This is equivalent to setting the"," ",a("code",{children:"justify-content"})," CSS property to ",a("code",{children:"space-evenly"}),"."]}),a($,{html:qP,caption:".flex.evenly",expand:!0}),a("h2",{children:"Flex Wrap"}),c("p",{children:["Add the ",a("code",{children:"wrap"})," class to set the ",a("code",{children:"flex-wrap"})," property to ",a("code",{children:"wrap"}),"."]}),a($,{html:KP,caption:".flex.wrap",expand:!0})]}),XP=Object.freeze(Object.defineProperty({__proto__:null,default:QP},Symbol.toStringTag,{value:"Module"})),JP=`<div class="italic larger">
  Italic
</div>
<div class="underline larger">
  Underline
</div>
<div class="strike larger">
  Strike
</div>
`,eR=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Font Styles"}),a("p",{children:"The following classes are defined for common font styles."}),a($,{html:JP,caption:"Font Styles",expand:!0})]}),nR=Object.freeze(Object.defineProperty({__proto__:null,default:eR},Symbol.toStringTag,{value:"Module"})),tR=`<div class="weight-thin larger">
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
</div>`,rR=`<div class="weight-100 larger">
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
</div>`,aR=`<div class="thin larger">
  Thin
</div>
<div class="bold larger">
  Bold
</div>
<div class="thick larger">
  Thick
</div>
`,lR=`// define your own font weights...
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
`,oR=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Font Weights"}),a("h2",{children:"Weight Names"}),c(le,{children:[c("p",{children:["The ",a("code",{children:"weight-<name>"})," classes can be used to set the font weight."]}),c("p",{children:["The values for ",a("code",{children:"<name>"})," can be",a("code",{children:"thin"}),", ",a("code",{children:"extra-light"}),", ",a("code",{children:"light"}),","," ",a("code",{children:"regular"}),", ",a("code",{children:"medium"}),", ",a("code",{children:"semi-bold"}),","," ",a("code",{children:"bold"}),", ",a("code",{children:"extra-bold"})," or ",a("code",{children:"black"}),"."]})]}),a($,{html:tR,caption:"Weight Names",expand:!0}),a("h2",{children:"Weight Numbers"}),c(le,{children:[a("p",{children:"Alternately you can use the corresponding weight numbers."}),c("p",{children:["Those numbers can be"," ",a("code",{children:"100"}),", ",a("code",{children:"200"}),", ",a("code",{children:"300"}),","," ",a("code",{children:"400"}),", ",a("code",{children:"500"}),", ",a("code",{children:"600"}),","," ",a("code",{children:"700"}),", ",a("code",{children:"800"})," or ",a("code",{children:"900"}),"."]})]}),a($,{html:rR,caption:"Weight Numbers",expand:!0}),a("h2",{children:"Weight Aliases"}),c("p",{children:["There are some short-cut aliases for the common cases.  Note that we use ",a("code",{children:"thick"})," rather than ",a("code",{children:"black"})," to avoid any confusion with the color black."]}),a($,{html:aR,caption:"Weight Aliases",expand:!0}),a("h2",{children:"Custom Weights"}),c(le,{children:[c("p",{children:["You can set the ",a("code",{children:"$font-weights"})," SASS variable if you want to define a different set of font weights."]}),a(Ie,{code:lR,caption:"Font Weights",language:"scss",className:"mar-b-8",expand:!0})]})]}),iR=Object.freeze(Object.defineProperty({__proto__:null,default:oR},Symbol.toStringTag,{value:"Module"})),sR=`<div class="large">
  <p class="font-sans">Sans-serif Font</p>
  <p class="font-serif">Serif Font</p>
  <p class="font-mono">Mono Font</p>
</div>
`,cR=`// redefine any of the following fonts to taste...
$font-sans:   'Open Sans', Helvetica, sans-serif;
$font-serif:  'Times New Roman', Times, Baskerville, Georgia, serif;
$font-mono:   Monaco, 'Bitstream Vera Sans Mono', 'Lucida Console', Terminal, monospace;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,dR=`// define your own font names...
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
`,uR=`p {
  font-family: $font-sans;
}
`,hR=`p {
  font-family: var(--font-sans);
}
`,pR=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Fonts"}),a("h2",{children:"Font Classes"}),c("p",{children:["The ",a("code",{children:"font-sans"})," CSS class can be used to select a sans-serif font, ",a("code",{children:"font-serif"})," for a serif font or ",a("code",{children:"font-mono"})," ","for a monospaced font."]}),a($,{html:sR,caption:"Fonts",expand:!0}),a("h2",{children:"Font Variables"}),a("p",{children:"Each of the above fonts is defined by a SASS variable which you can override to define your own font stacks."}),a(Ie,{code:cR,caption:"Customising Fonts",language:"scss",className:"mar-b-8",expand:!0}),c("p",{children:["These variables are exposed as the corresponding CSS custom properties:"," ",a("code",{children:"--font-sans"}),", ",a("code",{children:"--font-serif"}),","," ","and ",a("code",{children:"--font-mono"}),"."]}),c("div",{className:"grid-2 gap-4 stack-laptop mar-b-8",children:[a(Ie,{code:uR,caption:"Font Variables in SCSS",language:"scss",expand:!0}),a(Ie,{code:hR,caption:"Font Variables in CSS",language:"css",expand:!0})]}),a("h2",{children:"Custom Fonts"}),c(le,{children:[c("div",{children:[a("p",{children:"You can define your own names for fonts."}),c("p",{children:["In this case the CSS classes created will be ",a("code",{children:"font-body"}),","," ",a("code",{children:"font-head"})," and ",a("code",{children:"font-code"}),".  The fonts will also be defined as the ",a("code",{children:"--font-body"}),", ",a("code",{children:"--font-head"}),","," ","and ",a("code",{children:"--font-code"})," CSS custom properties."]})]}),a(Ie,{code:dR,caption:"Font Aliases",language:"scss",className:"mar-b-8",expand:!0})]})]}),fR=Object.freeze(Object.defineProperty({__proto__:null,default:pR},Symbol.toStringTag,{value:"Module"})),mR=`<h3 class="mar-b-2"><code>grid-2</code></h3>
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
`,gR=`<div class="grid gap-4">
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
`,vR=`<div class="grid-2 gap-4">
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
`,bR=`<div class="grid-2 gap-v-8 gap-h-2">
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
`,yR=`<div class="grid-3 gap-2 top">
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
`,wR=`<div class="grid-3 gap-2 middle">
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
`,xR=`<div class="grid-3 gap-2 bottom">
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
`,CR=`<div class="grid-fit gap-2">
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
`,SR=`<div class="grid-fit gap-2" style="--min-width: 200px">
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
`,kR=`<h3><code>grid-fit</code></h3>

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
`,TR=`<style>
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
`,LR=`<div class="grid overlap">
  <img src="/badger-css/badger-forest.jpg" width="100%"/>
  <h1 class="fgc-100 pad-2 x3 weight-600" style="width: 70%">
    Anyone for mushrooms?
  </h1>
</div>
`,_R=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Grid"}),a("h2",{children:"Grid Columns"}),c("p",{children:["Use a ",a("code",{children:"grid-N"})," CSS class to set the ",a("code",{children:"display"})," ","mode to ",a("code",{children:"grid"})," where ",a("code",{children:"N"})," is the number of columns from 2 to 16."]}),a($,{html:mR,caption:"Grid Columns",expand:!0}),a("h2",{children:"Gaps"}),c("p",{children:["The ",a("code",{children:"gap-N"})," classes can be used to add a gap between successive elements.  Here ",a("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit (",a("code",{children:"0.25rem"})," by default)."]}),a($,{html:vR,caption:"Grid Gaps",expand:!0}),a("h2",{children:"Vertical and Horizontal Gaps"}),c("p",{children:["The the ",a("code",{children:"gap-v-N"})," and ",a("code",{children:"gap-h-N"})," classes can be used to define the vertical and horizontal gaps separately. Again, ",a("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit."]}),a($,{html:bR,caption:"Grid Gaps",expand:!0}),a("h2",{children:"Single Column Grid"}),c("p",{children:["The ",a("code",{children:"grid"})," CSS class (or ",a("code",{children:"grid-1"})," which does the same thing) creates a single column grid.  It's useful because it then allows you to use the ",a("code",{children:"gap-N"})," classes to add a vertical gap between child components."]}),a($,{html:gR,caption:"Single Column Grid",expand:!0}),a("h2",{children:"Grid Fit"}),c("p",{children:["The ",a("code",{children:"grid-fit"})," CSS class will fit as many items into the grid as it can and then wrap onto the next line."]}),a($,{html:CR,caption:"Grid Fit"}),a("h2",{children:"Grid Fill"}),c("p",{children:["The ",a("code",{children:"grid-fill"})," CSS class is similar to ",a("code",{children:"grid-fit"}),". The difference between them is what happens when there are't enough items to fill the container width.  ",a("code",{children:"grid-fit"})," will stretch them whereas ",a("code",{children:"grid-fill"})," will not."]}),a($,{html:kR,caption:"Grid Fill"}),a("h2",{children:"Grid Fit/Fill Size"}),c("p",{children:["Both ",a("code",{children:"grid-fit"})," and ",a("code",{children:"grid-fill"})," can define a minimum size for each child element.  By default this is"," ",a("code",{children:"100px"})," wide.  You can set the ",a("code",{children:"--min-width"})," property to change it."]}),a($,{html:SR,caption:"Grid Size"}),a("h2",{children:"Grid Top"}),c("p",{children:["Add the ",a("code",{children:"top"})," (or ",a("code",{children:"start"}),") CSS class to align items to the top of grid columns."]}),a($,{html:yR,caption:"Grid Top",expand:!0}),a("h2",{children:"Grid Middle"}),c("p",{children:["Add the ",a("code",{children:"middle"})," CSS class to align items to the middle of grid columns."]}),a($,{html:wR,caption:"Grid Middle",expand:!0}),a("h2",{children:"Grid Bottom"}),c("p",{children:["Add the ",a("code",{children:"bottom"})," (or ",a("code",{children:"end"}),") CSS class to align items to the end of grid columns."]}),a($,{html:xR,caption:"Grid Bottom",expand:!0}),a("h2",{children:"Grid Overlap"}),c("p",{children:["Add the ",a("code",{children:"overlap"})," CSS class to stack all children of the grid on top of each other.  This can be used when you want to layer some content on top of a background, for example."]}),a($,{html:LR,caption:"Grid Overlap",expand:!0}),a("p",{children:"You can also use it to hide previous components.  In this example, we create a label with a checkbox input (which is functional) but hide it with overlaid content."}),a($,{html:TR,caption:"Grid Overlap",expand:!0}),a("p",{children:"Why is this useful?"})]}),NR=Object.freeze(Object.defineProperty({__proto__:null,default:_R},Symbol.toStringTag,{value:"Module"})),$R=()=>c("div",{className:"prose",children:[a("h1",{children:"Utility Classes"}),c("p",{className:"intro wide",children:["CSS utility classes are ",a("i",{children:"extremely"})," useful for applying styles to elements on an ad-hoc basis.  But they shouldn't be used as a substitute for writing CSS for reusable styles."]}),c(le,{children:[c("div",{children:[a("h2",{children:"Moderation in All Things"}),c("p",{children:["Some CSS frameworks, most notably"," ",a("a",{href:"https://tailwindcss.com/",children:"tailwind.css"}),", have taken this to the extreme where everything is a utility class and you never need to write any CSS at all. Although this approach has some merits for rapid prototyping, I personally wouldn't use it when building a non-trivial site because I think that it can have a negative impact on readability and maintainability."]}),c("p",{children:["I prefer to take the pragmatic approach and use utility classes to apply ",a("i",{children:"exceptional"})," styling to elements that don't warrant having their own dedicated CSS classes.  The general rule that I follow is to create dedicated CSS classes for components that I'm using in different places in a site.  For example, a product card, a user avatar, button and form styling, and so.  This ensures that they are consistent and can easily be changed across the whole site by updating the rules in the stylesheet."]}),c("p",{children:["For styling that depends on the context in which an element is being used, I'll generally reach for utility classes. By far the most useful of these, and the ones that I use more than any other, are the ",a("code",{children:"mar"})," and ",a("code",{children:"pad"}),` utility classes to add custom margins and padding.  The amount of margin or padding required on an element will often depend on the other elements around it, so there isn't a "one size fits all" solution. Other useful utility classes include those to set the font size, add a border or drop shadow, or to set the layout to use flexbox or grid.`]}),a("h2",{children:"CSS Custom Properties"}),c("p",{children:['CSS custom properties or CSS variables as they are also know, are an incredibly powerful addition to the toolkit for any web designer or developer.  They allow you to define reusable "snippets" of CSS that can easily be applied to different elements.  They can be used to replace much of the functionality that was previously only accessible by using variables and/or mixins in a CSS pre-processing language like'," ",a("a",{href:"https://sass-lang.com/",children:"SASS"}),"."]})]}),c("div",{children:[a("h2",{children:"SASS Variables"}),a("p",{children:"Although CSS custom properties have largely removed the need for CSS pre-processors like SASS, there are still benefits to be had from using them.  One benefit is that they can help to reduce bloat in your CSS files.  SASS allows you to define variables that can be used to implement system-wide configuration options that are then compiled into the generated CSS files.  In contrast, any CSS custom properties that you use must be included in the CSS and, if overdone, can lead to significant increases in the file size."}),a("h2",{children:"When to Use Each?"}),a("p",{children:"The general rule that I follow is to use SASS variables for configuration options that I might want to change on a site-wide basis but generally remain constant throughout the site.  For example, the default font face, the breakpoints, the colors or default spacing units.  It's useful to have these defined as variables because it allows me to plug Badger CSS into a project, tweak the default settings, and then get coding.  If at some point in the future I decide they're not quite right, or if the client or a designer wants me to change them, then it should be easy to do so, and they should be applied universally."}),a("p",{children:"For styles that I might want to change in different parts of the site, need to reflect some application state (e.g. the differences between a success, warning or error message), or that should have different properties depending on the user selecting a light or dark theme, then CSS properties are generally the way to go."}),a("p",{children:"For styles that need to be applied on an ad-hoc basis, utility classes are what I reach for."})]})]})]}),ER=Object.freeze(Object.defineProperty({__proto__:null,default:$R},Symbol.toStringTag,{value:"Module"})),IR=`<div class="relative border" style="height: 140px">
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
`,MR=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Position"}),a("h2",{children:"Position Classes"}),c("p",{children:["Add the ",a("code",{children:"absolute"}),", ",a("code",{children:"relative"})," and"," ",a("code",{children:"fixed"})," CSS classes to set the position type."]}),c("p",{children:["For elements that are set to ",a("code",{children:"absolute"})," or ",a("code",{children:"fixed"})," ","position, the ",a("code",{children:"top"}),", ",a("code",{children:"bottom"}),", ",a("code",{children:"left"})," ","and ",a("code",{children:"right"})," classes can be used to position them against the corresponding edge of the closest parent element with the"," ",a("code",{children:"relative"})," position type."]}),a($,{html:IR,caption:"Position",expand:!0})]}),PR=Object.freeze(Object.defineProperty({__proto__:null,default:MR},Symbol.toStringTag,{value:"Module"})),RR=`<div class="scroll-x border pad-2 nowrap mar-b-2">
  Yeah, I like it, just been fooling about with it for a few months now, very delicate... Yeah, it's part of a... trilogy really, a musical trilogy I'm doing, in, D minor, which I always find is really the saddest of all keys really. I don't know why, but it makes people weep instantly. You play a "baaaaa... baaaaaa..." it's the horn part. "...baaaa, baaaaa...", yeah, just simple lines intertwining, you know very much like, I'm really influenced by Mozart and Bach, It's sort of in between those, really, it's like a Mach piece really.<
</div>
`,AR=`<div class="scroll-y border pad-2" style="height: 7rem">
  Yeah, I like it, just been fooling about with it for a few months
  now, very delicate... Yeah, it's part of a... trilogy really, a
  musical trilogy I'm doing, in, D minor, which I always find is really
  the saddest of all keys really. I don't know why, but it makes people
  weep instantly. You play a "baaaaa... baaaaaa..." it's the horn part.
  "...baaaa, baaaaa...", yeah, just simple lines intertwining, you
  know very much like, I'm really influenced by Mozart and Bach,
  It's sort of in between those, really, it's like a Mach piece
  really.
</div>`,OR=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Scolling"}),a("h2",{children:"Scroll Classes"}),c("p",{children:["Add the ",a("code",{children:"scroll-x"})," or ",a("code",{children:"scroll-y"})," CSS classes to set ",a("code",{children:"overflow-x"})," or ",a("code",{children:"overflow-y"})," to ",a("code",{children:"scroll"}),", respectively."]}),a("p",{children:`Be warned that you'll also need to set widths and/or heights as appropriate to stop the layout engine from doing the "right" thing and expanding the containers to fit the content.`}),a($,{html:RR,caption:"scroll-x",expand:!0}),a($,{html:AR,caption:"scroll-y",expand:!0})]}),FR=Object.freeze(Object.defineProperty({__proto__:null,default:OR},Symbol.toStringTag,{value:"Module"})),BR=`<div class="surface-3 pad-8">
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
</div>`,DR=`<div class="surface-3 pad-8">
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
`,jR=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Shadows"}),a("h2",{children:"Shadow Classes"}),c("p",{children:["Use the ",a("code",{children:"shadow-1"}),", ",a("code",{children:"shadow-2"}),","," ",a("code",{children:"shadow-3"}),", ",a("code",{children:"shadow-4"})," and ",a("code",{children:"shadow-5"})," ","CSS classes to add a box shadow of progressively larger size.  Larger shadows can be used to suggest that an element is lifted higher off the background and thus appears closer to the foreground."]}),a($,{html:BR,caption:"Shadows",expand:!0}),a("h2",{children:"Shadow Properties"}),c(le,{children:[c("p",{children:["The shadow styles are defined as CSS custom properties, (e.g."," ",a("code",{children:"--shadow-1"}),", ",a("code",{children:"--shadow-2"}),", etc).  The colors and opacities used for the shadows depend on both the shadow depth and color theme.  For the default light theme the base color is"," ",a("code",{children:"--grey-0"})," and the shadows are more transparent.  For the dark theme, where shadows need to be a bit more prominent to be visible, the base color is ",a("code",{children:"black"})," and the shadows are more opaque."]}),c("p",{children:["The benefit of CSS custom properties is that you can easily apply them to your own style rules.  In this example we define a"," ",a("code",{children:".shadow-example"})," rule which adds a ",a("code",{children:"box-shadow"})," using the ",a("code",{children:"--shadow-2"})," custom property.  The shadow color will be set correctly for both light and dark themes so you don't need to worry about defining separate rules for each."]})]}),a($,{html:DR,caption:"Shadow Style",expand:!0})]}),zR=Object.freeze(Object.defineProperty({__proto__:null,default:jR},Symbol.toStringTag,{value:"Module"})),WR=`<div class="smallest">Smallest text</div>
<div class="smaller">Smaller text</div>
<div class="small">Small text</div>
<div>Normal size text</div>
<div class="large">Large text</div>
<div class="larger">Larger text</div>
<div class="largest">Largest text</div>
`,HR=`<div>x1</div>
<div class="x2">x2</div>
<div class="x3">x3</div>
<div class="x4">x4</div>
<div class="x5">x5</div>
<div class="x6">x6</div>
<div class="x7">x7</div>
<div class="x8">x8</div>
<div class="x9">x9</div>
<div class="x10">x10</div>
`,UR=`// define your own text sizes...
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
@import "@abw/badger-css/styles/badger.scss";`,VR=({heading1:e="Class",heading2:n="Rem Size",heading3:t=c(Pt,{children:["Pixel Size ",a("span",{className:"smaller",children:"(when 1rem=16px)"})]}),rows:r})=>c("table",{className:"brand celled striped properties small wide mar-b-2",children:[a("thead",{children:c("tr",{children:[a("th",{children:e}),a("th",{children:n}),a("th",{children:t})]})}),a("tbody",{children:r.map(l=>c("tr",{children:[a("td",{children:a("code",{children:l[0]})}),a("td",{children:l[1]}),a("td",{children:l[2]})]},l[0]))})]}),GR=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Text Sizes"}),a("h2",{children:"Size Classes"}),c("p",{children:["Use the ",a("code",{children:"smallest"}),", ",a("code",{children:"smaller"}),","," ",a("code",{children:"small"}),", ",a("code",{children:"medium"})," (default)"," ",a("code",{children:"large"}),", ",a("code",{children:"larger"})," and ",a("code",{children:"largest"})," CSS classes to set the text size. These are defined as SASS variables which you can override (e.g. ",a("code",{children:"$size-large"}),") and CSS custom properties which you can use in your own stylesheets or inline styles (e.g. ",a("code",{children:"--size-large"}),")."]}),a($,{html:WR,caption:"Text Sizes",expand:!0}),a("h2",{children:"Default Sizes"}),c(le,{children:[a("p",{children:"The pre-defined values for the sizes are shown here."}),a(VR,{rows:[["smallest","0.625rem","10px"],["smaller","0.75rem","12px"],["small","0.875rem","14px"],["medium","1rem","16px"],["large","1.25rem","20px"],["larger","1.5rem","24px"],["largest","2rem","32p<"]]})]}),a("h2",{children:"Custom Sizes"}),c(Dt,{code:UR,caption:"Custom Sizes",language:"scss",expand:!0,children:[c("p",{children:["You can set the ",a("code",{children:"$sizes"})," SCSS variable if you want to define a different set of sizes, either to give them different names or values."]}),c("p",{children:["In the example shown here the generated CSS classes would be"," ",a("code",{children:"xxs"}),", ",a("code",{children:"xs"}),", ",a("code",{children:"s"}),","," ",a("code",{children:"m"}),", ",a("code",{children:"l"}),", ",a("code",{children:"xl"})," and ",a("code",{children:"xxl"}),"."]})]}),a("h2",{children:"Size Multipliers"}),c("p",{children:["For larger text sizes you can use the size multiple classes:"," ",a("code",{children:"x2"}),", ",a("code",{children:"x3"}),", etc., up to ",a("code",{children:"x10"}),". These are all multiples of ",a("code",{children:"1rem"}),"."]}),a($,{html:HR,caption:"Text Sizes",expand:!0})]}),YR=Object.freeze(Object.defineProperty({__proto__:null,default:GR},Symbol.toStringTag,{value:"Module"})),ZR=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
  <div class="mar surface pad-2">
    This has 1 unit of margin.
  </div>
</div>
`,qR=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
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
`,KR=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
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
`,QR=`<div class="pad-2 grey20 bgc-50 fgc-90 mar-b-2">
  Two units of padding all around.
</div>
<div class="pad-v-4 pad-h-8 grey20 bgc-50 fgc-90 border">
  Four units of padding vertically and eight units
  horizontally
</div>
`,XR=`<div class="grid-1 gap-4 surface-3 pad-4">
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
`,JR=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Spacing"}),c("p",{children:["The ",a("code",{children:"mar"})," and ",a("code",{children:"pad"})," CSS utility classes can be used to set the margins and padding for and element."]}),a("h2",{children:"Margins"}),c("p",{children:["The ",a("code",{children:"mar"})," class by itself will add 1 unit of margin to all four sides of an element.  The default unit size is ",a("code",{children:"0.25rem"}),"."]}),a($,{html:ZR,caption:"Margins",expand:!0}),c("p",{children:["The ",a("code",{children:"mar-N"})," classes will add multiples of the unit, where ",a("code",{children:"N"})," is one of the values:"," ",a("code",{children:"0"}),", ",a("code",{children:"1"}),", ",a("code",{children:"2"}),", ",a("code",{children:"3"}),","," ",a("code",{children:"4"}),", ",a("code",{children:"6"}),", ",a("code",{children:"8"}),", ",a("code",{children:"10"}),","," ",a("code",{children:"12"}),", ",a("code",{children:"16"}),", ",a("code",{children:"20"}),","," ",a("code",{children:"24"}),", ",a("code",{children:"28"})," or ",a("code",{children:"32"}),".  The"," ",a("code",{children:"mar-1"})," class is effectively the same as just ",a("code",{children:"mar"})," ","but is included for completeness.  Also note that ",a("code",{children:"mar-0"})," can be used to remove any margin that would otherwise be present on an element."]}),a($,{html:qR,caption:"Margin Multiple",expand:!0}),a("h2",{children:"Margin Directions"}),c("p",{children:["You can also specify the direction for the margin using the"," ",a("code",{children:"mar-t"})," (top), ",a("code",{children:"mar-r"})," (right),"," ",a("code",{children:"mar-b"})," (bottom), ",a("code",{children:"mar-l"})," (left),"," ",a("code",{children:"mar-v"})," (vertical: top and bottom) and"," ",a("code",{children:"mar-h"})," (horizontal: left and right) classes. The default is 1 unit of margin or a ",a("code",{children:"-N"})," suffix can be added as a multiplier.  For example ",a("code",{children:"mar-t-4"})," to add 4 units of margin to the top of an element."]}),a($,{html:KR,caption:"Margin Direction",expand:!0}),a("h2",{children:"Padding"}),c("p",{children:["The ",a("code",{children:"pad"})," and related utility classes work in the same way but add padding inside the element."]}),a($,{html:QR,caption:"Padding",expand:!0}),c("p",{children:["One important thing to note is that padding is applied in multiples of 0.25",a("b",{children:"em"})," whereas margins use 0.25",a("b",{children:"rem"}),".  This is because you usually want spacing around elements to be consistent (which rem provides) but padding inside an element should be based on the text size (which em provides)."]}),a($,{html:XR,caption:"Pad Sizes",expand:!0})]}),eA=Object.freeze(Object.defineProperty({__proto__:null,default:JR},Symbol.toStringTag,{value:"Module"})),nA=`<div class="flex gap-4">
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
`,tA=`<div class="flex gap-4">
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
`,rA=`<table class="wide shaded lined">
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
`,aA=`// redefine $splits to include what you want...
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
@import "@abw/badger-css/styles/badger.scss";`,lA=[["2","One half","50%"],["3","One third","33.33333333%"],["2-3","Two thirds","66.66666666%"],["4","One quarter","25%"],["3-4","Three quarters","75%"],["5","One fifth","20%"],["2-5","Two fifths","40%"],["3-5","Three fifths","60%"],["4-5","Four fifths","80%"],["6","One sixth","16.66666666%"],["5-6","Five sixth","83.33333333%"],["7","One seventh","14.28571429%"],["2-7","Two sevenths","28.57142858%"],["3-7","Three sevenths","42.85714287%"],["4-7","Four sevenths","57.14285716%"],["5-7","Five sevenths","71.42857145%"],["6-7","Six sevenths","85.71428574%"],["8","One eighth","12.5%"],["3-8","Three eighths","37.5%"],["5-8","Five eighths","62.5%"],["7-8","Seven eighths","87.5%"],["9","One ninth","11.11111111%"],["2-9","Two ninths","22.22222222%"],["4-9","Four ninths","44.44444444%"],["5-9","Five ninths","55.55555555%"],["7-9","Seven ninths","77.77777777%"],["8-9","Eight ninths","88.88888888%"],["10","One tenth","10%"],["3-10","Three tenths","30%"],["7-10","Seven tenths","70%"],["9-10","Nine tenths","90%"],["11","One eleventh","9.090909090%"],["12","One twelfth","8.333333333%"],["13","One thirteenth","7.692307692%"],["14","One fourteenth","7.142857142%"],["15","One fifteenth","6.666666666%"],["16","One sixteenth","6.25%"]],oA=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Split"}),a("h2",{children:"Evenly Split Columns"}),c(le,{children:[c("p",{children:["The ",a("code",{children:"split-N"})," classes can be used to set the width of an element to a fraction of the width of the parent container. For example, ",a("code",{children:"split-2"})," sets the width to one half,"," ",a("code",{children:"split-3"})," to one third, and so on.  The value for"," ",a("code",{children:"N"})," can be anything from 2 to 16."]}),c("p",{children:["They can be useful in conjunction with the"," ",a(ae,{to:"/utilities/flexbox",text:"flexbox"})," classes to constrain columns to be a particular width.  Otherwise the flexbox layout engine will try to expand the width of columns that have more content."]})]}),a($,{html:nA,caption:"Even Splits"}),a("h2",{children:"Unevenly Split Columns"}),c("p",{children:["The ",a("code",{children:"split-N-M"})," classes can be used to create uneven splits. For example, ",a("code",{children:"split-2-5"})," creates a columns that is two fifths of the width."]}),c("p",{children:["These are defined for all uneven splits up to tenths (e.g. there's a ",a("code",{children:"split-3-10"})," class for three tenths, but no ",a("code",{children:"split-3-11"})," ","for three elevenths).  Not that redundant classes are not included. For example, there's no ",a("code",{children:"split-3-6"})," class because it's one half or ",a("code",{children:"split-2"}),"."]}),a($,{html:tA,caption:"Uneven Splits"}),a("h2",{children:"Tables"}),c("p",{children:["The ",a("code",{children:"split-*"})," classes also work with table columns. This can be useful to prevent the layout engine from expanding columns to fit the content.  It's especially useful if you have multiple tables and you want the columns to be the same width in each of the tables."]}),a($,{html:rA,caption:"Table Splits"}),a("h2",{children:"Split Classes"}),c(le,{children:[a("p",{children:"The CSS classes and their corresponding widths are listed below."}),c("p",{children:["You can set the ",a("code",{children:"$splits"})," SASS variable if you want to define a different set of splits."]})]}),a(Dt,{code:aA,caption:"Custom Splits",language:"scss",expand:!0,children:c("table",{className:"brand celled striped properties small wide mar-b-2",children:[a("thead",{children:c("tr",{children:[a("th",{children:"Class"}),a("th",{children:"Size"}),a("th",{children:"%age Width"})]})}),a("tbody",{children:lA.map(e=>c("tr",{children:[a("td",{children:c("code",{children:["split-",e[0]]})}),a("td",{children:e[1]}),a("td",{children:e[2]})]},e[0]))})]})})]}),iA=Object.freeze(Object.defineProperty({__proto__:null,default:oA},Symbol.toStringTag,{value:"Module"})),sA=`<h4 class="font-mono smaller">stack-widescreen</h4>
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
`,cA=`<h4 class="font-mono smaller">stack-widescreen</h4>
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
`,dA={mobile:30,tablet:50,laptop:70,desktop:80,widescreen:90},uA=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Stacking Split Columns"}),c("p",{children:["One of the problems with creating columns using"," ",a(ae,{to:"/utilities/grid",text:"grid"}),","," ",a(ae,{to:"/utilities/flexbox",text:"flexbox"})," ","and ",a(ae,{to:"/utilities/split",text:"split"})," is that sometimes a user's screen size isn't large enough to accommodate them."]}),c("p",{children:["The ",a("code",{children:"stack-*"})," classes can be used to stack columns when the screen size is narrower than a threshold breakpoint. These are ",a("code",{children:"stack-mobile"}),", ",a("code",{children:"stack-tablet"}),","," ",a("code",{children:"stack-laptop"}),", ",a("code",{children:"stack-desktop"})," and"," ",a("code",{children:"stack-widescreen"}),"."]}),a("h2",{children:"Grid Stacking"}),c(le,{children:[c("p",{children:["This example shows how adding a ",a("code",{children:"stack-*"})," class to an element that has one of the ",a("code",{children:"grid-*"})," classes will cause the columns to be stacked at different breakpoints."]}),a(Zr,{title:"Try it out!",children:"Try resizing your browser window and see how the grid elements below get stacked."})]}),a($,{html:sA,caption:"Stacking Grids"}),a("h2",{children:"Flexbox Stacking"}),c("p",{children:["This example shows the same thing for ",a("code",{children:"flex"})," containers."]}),a($,{html:cA,caption:"Stacking Flexbox"}),a("h2",{children:"Breakpoint Names"}),c(le,{children:[a("p",{children:"The breakpoint names and their corresponding widths in rems and pixels (assuming 1rem = 16px) are shown below."}),c("p",{children:["You can set the ",a("code",{children:"$breakpoints"})," SASS variable if you want to define a different set of breakpoints."]})]}),a(Dt,{code:Fv,caption:"Custom Breakpoints",language:"scss",expand:!0,children:c("table",{className:"brand celled striped properties small wide mar-b-2",children:[a("thead",{children:c("tr",{children:[a("th",{children:"Class"}),a("th",{children:"Rems"}),a("th",{children:"Pixels"})]})}),a("tbody",{children:Object.entries(dA).map(([e,n])=>c("tr",{children:[a("td",{children:a("code",{children:e})}),c("td",{children:[n,"rem"]}),c("td",{children:[n*16,"px"]})]},e))})]})})]}),hA=Object.freeze(Object.defineProperty({__proto__:null,default:uA},Symbol.toStringTag,{value:"Module"})),pA=`<div class="surface border pad-2">
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
`,fA=`<div class="surface-1 border pad-2 mar-b-2">
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
`,mA=`<div class="grid-3 gap-2 smallish">
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
`,gA=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Surfaces"}),c("p",{children:['When building UI components it can be useful to think in terms of "surfaces", with each surface getting progressively "closer" to the user and demanding their closer attention. You may want to combine these with the ',a("code",{children:"shadow-N"})," classes to further emphasise the effect."]}),a("p",{children:"As a general rule surfaces that are in the foreground should be lighter than those in the background.  Note that this applies to dark themes as well as light themes."}),a("h2",{children:"Surface Classes"}),c("p",{children:["Use the ",a("code",{children:"surface-1"}),", ",a("code",{children:"surface-2"}),","," ",a("code",{children:"surface-3"}),", ",a("code",{children:"surface-4"})," and"," ",a("code",{children:"surface-5"})," CSS classes to define elements with appropriate background and text colors to achieve this effect.  The lower numbers are meant to be further in the background with higher numbers being closer to the foreground."]}),a($,{html:pA,caption:"Surfaces",expand:!0}),c("p",{children:["The ",a("code",{children:"surface"})," class is a special case being used here to apply a background color for the examples.  When using a light theme this"," ","is ",a("code",{children:"white"})," and for a dark theme it is ",a("code",{children:"black"}),"."]}),c("p",{children:["The styles are defined using CSS variables for the foreground, background and border colors, e.g. ",a("code",{children:"--color"}),", ",a("code",{children:"--background-color"})," ","and ",a("code",{children:"--border-color"}),". In turn these are defined using the ",a("code",{children:"grey"})," color range depending on the color theme. For example, the ",a("code",{children:"--background-color"}),"for ",a("code",{children:"--surface-3"}),"is defined to be ",a("code",{children:"--color-90"})," by default, and ",a("code",{children:"--color-10"})," when the dark theme is in effect."]}),a("h2",{children:"Surfaces With Borders"}),c("p",{children:["Add the ",a("code",{children:"border"})," CSS class to add a border around a surface. You can also add the ",a(ae,{to:"/utilities/borders",children:a("code",{children:"bdr-N"})})," classes to set the border radius."]}),a($,{html:fA,caption:"Surface Borders",expand:!0}),a("h2",{children:"Colored Surfaces"}),a("p",{children:"Add any of the color classes to get different colored surfaces."}),a($,{html:mA,caption:"Color Surfaces"})]}),vA=Object.freeze(Object.defineProperty({__proto__:null,default:gA},Symbol.toStringTag,{value:"Module"})),bA=`<div class="flex gap-2 mar-b-2">
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
`,yA=`<div class="flow">
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
</div>`,wA=`<p class="large">
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
`,xA=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Typography"}),a("h2",{children:"Headings"}),c("p",{children:["Headings have ",a("code",{children:"text-wrap: balance"})," set to balance the length of long lines.  The ",a("code",{children:"line-height"})," is reduced to ",a("code",{children:"1.3"}),"."]}),c("p",{children:["Margins and padding are removed by default.  You can add them in yourself, either using the ",a(ae,{to:"/utilities/spacing",text:"spacing utiltiy classes"})," ","or globally to match your site style. Or use something like the",a("code",{children:"flow"})," class (see below) to add margins between elements where appropriate."]}),a($,{html:bA,caption:"Headings"}),a("h2",{children:"Paragraphs"}),a($,{html:wA,caption:"Paragraphs"}),a("h2",{children:"Flow"}),c("p",{children:["Use the ",a("code",{children:"flow"})," class on a container to add spacing between block elements.  Thanks to"," ",a("a",{href:"https://andy-bell.co.uk/my-favourite-3-lines-of-css/",children:"Andy Bell"})," ","for this one."]}),a($,{html:yA,caption:"Flow"})]}),CA=Object.freeze(Object.defineProperty({__proto__:null,default:xA},Symbol.toStringTag,{value:"Module"})),SA=`<div class="grid-1 gap-4">
  <input type="text" value="A wide input"/>
  <button class="blue wide">
    A wide button
  </button>
</div>`,kA=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,TA=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,LA=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,_A=`// define your own range of rem widths...
$rem-widths:
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 25, 30,
  35, 40, 45, 50, 60, 70, 80, 90, 100 !default;

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,NA=[2,4,6,8,10,12,14,16,18,20,25,30,35,40,45,50,60,70,80,90,100],$A=()=>c("div",{className:"prose flow",children:[a("h1",{children:"Widths"}),a("h2",{children:"Wide"}),c("p",{children:["Use the ",a("code",{children:"wide"})," CSS class to set an inline element to expand to the full width of the container."]}),a($,{html:SA,caption:"Wide",expand:!0}),a("h2",{children:"Width Classes"}),c(le,{children:[c("p",{children:["The ",a("code",{children:"width-Nrem"})," classes can be used to set the width of an element to a number of rem units."]}),c("p",{children:["The values for ",a("code",{children:"N"})," can be",a("code",{children:"2"}),", ",a("code",{children:"4"}),","," ",a("code",{children:"6"}),", ",a("code",{children:"8"}),", ",a("code",{children:"10"}),", ",a("code",{children:"12"}),","," ",a("code",{children:"14"}),", ",a("code",{children:"16"}),", ",a("code",{children:"18"}),", ",a("code",{children:"20"}),","," ",a("code",{children:"25"}),", ",a("code",{children:"30"}),", ",a("code",{children:"35"}),", ",a("code",{children:"40"}),","," ",a("code",{children:"45"}),", ",a("code",{children:"50"}),", ",a("code",{children:"60"}),","," ",a("code",{children:"70"}),", ",a("code",{children:"80"}),", ",a("code",{children:"90"})," or ",a("code",{children:"100"}),"."]})]}),a($,{html:kA,caption:"Widths",expand:!0}),a("h2",{children:"Pixel Width Classes"}),c("p",{children:["If you prefer to think in pixels, you can use the corresponding"," ",a("code",{children:"width-Npx"})," classes instead."]}),a($,{html:TA,caption:"Widths in Px",expand:!0}),a("h2",{children:"Max Width Classes"}),c(le,{children:[c("p",{children:["The ",a("code",{children:"max-width-Nrem"})," classes can be used to set the maximum width of an element to a number of rem units.  In this case the width of the element will be constrained to the width of the parent element. You can also use the corresponding ",a("code",{children:"max-width-Npx"})," classes if you prefer to think in pixels."]}),c("p",{children:["The ",a("code",{children:"width-*"})," and ",a("code",{children:"max-width-*"})," classes work by using the ",a("code",{children:"--width"})," custom property which is set to the appropriate number of rem units based on the ",a("code",{children:"-Nrem"})," ","or ",a("code",{children:"-Npx"})," suffix."]})]}),a($,{html:LA,caption:"Widths",expand:!0}),a("h2",{children:"Rem/Pixel Sizes"}),c(le,{children:[a("p",{children:"The corresponding pixel widths (assuming 1rem = 16px) for each of the classes are shown below."}),c("p",{children:["You can set the ",a("code",{children:"$rem-widths"})," SASS variable if you want to define a different set of width classes."]})]}),a(Dt,{code:_A,caption:"Custom Sizes",language:"scss",expand:!0,children:c("table",{className:"brand celled striped properties small wide mar-b-2",children:[a("thead",{children:c("tr",{children:[a("th",{children:"Rem Class"}),a("th",{children:"Pixel Class"}),a("th",{children:"Rems"}),a("th",{children:"Pixels"})]})}),a("tbody",{children:NA.map(e=>c("tr",{children:[a("td",{children:c("code",{children:["width-",e,"rem"]})}),a("td",{children:c("code",{children:["width-",e*16,"px"]})}),a("td",{children:e}),a("td",{children:e*16})]},e))})]})})]}),EA=Object.freeze(Object.defineProperty({__proto__:null,default:$A},Symbol.toStringTag,{value:"Module"})),IA=e=>D.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},D.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z",fill:"currentColor"})),h3="sidebar",MA="no-sidebar",Bv="0.2.20",Dv="2024-02-04",p3="2018",nu=Dv.match(/^(\d+)/)[1],PA=nu===p3?nu:`${p3} - ${nu}`,RA=()=>{const{variant:e,setVariant:n}=Vl();return a("header",{children:c("nav",{children:[c("div",{children:[a(Ol,{name:"bars",className:"toggle-sidebar action",onClick:()=>n(e===h3?MA:h3)}),a(ae,{to:"/",className:"home mar-l-2",text:"Badger-CSS"}),c("span",{className:"small mar-l-2",children:["v",Bv]})]}),c("div",{children:[a("a",{href:"https://github.com/abw/badger-css",children:a(IA,{className:"night-and-day--icon mar-r-2"})}),a(zM,{})]})]})})},nl=({title:e,items:n})=>c("div",{className:"menu",children:[a("h4",{children:e}),n.map(t=>a(ae,{...t},t.to))]}),AA=[{to:"/getting-started/installation",text:"Installation"},{to:"/getting-started/good",text:"What's good about it?"},{to:"/getting-started/bad",text:"What's wrong with it?"}],OA=[{to:"/colors/demo",text:"Color Demo"},{to:"/colors/ranges",text:"Color Ranges"},{to:"/colors/brand",text:"Brand Colors"},{to:"/colors/variables",text:"Color Variables"},{to:"/colors/utilities",text:"Color Utilities"},{to:"/colors/palette",text:"Custom Palette"}],FA=[{to:"/utilities/",text:"Introduction"},{to:"/utilities/alignment",text:"Alignment"},{to:"/utilities/borders",text:"Borders"},{to:"/utilities/breakpoints",text:"Breakpoints"},{to:"/utilities/columns",text:"Columns"},{to:"/utilities/container",text:"Container"},{to:"/utilities/display",text:"Display"},{to:"/utilities/flexbox",text:"Flexbox"},{to:"/utilities/fonts",text:"Fonts"},{to:"/utilities/font-styles",text:"Font Styles"},{to:"/utilities/font-weights",text:"Font Weights"},{to:"/utilities/grid",text:"Grid"},{to:"/utilities/position",text:"Position"},{to:"/utilities/scrolling",text:"Scrolling"},{to:"/utilities/shadows",text:"Shadows"},{to:"/utilities/sizes",text:"Text Sizes"},{to:"/utilities/spacing",text:"Spacing"},{to:"/utilities/split",text:"Splits"},{to:"/utilities/stack",text:"Stacking"},{to:"/utilities/surfaces",text:"Surfaces"},{to:"/utilities/typography",text:"Typography"},{to:"/utilities/widths",text:"Widths"}],BA=[{to:"/forms/",text:"Introduction"},{to:"/forms/buttons",text:"Buttons"},{to:"/forms/checkboxes",text:"Checkboxes"},{to:"/forms/radio-buttons",text:"Radio Buttons"},{to:"/forms/select",text:"Select Inputs"},{to:"/forms/text",text:"Text Inputs"},{to:"/forms/textarea",text:"Text Area Inputs"},{to:"/forms/input",text:"Fake Inputs"},{to:"/forms/multi-inputs",text:"Multiple Inputs"},{to:"/forms/field",text:"Form Fields"},{to:"/forms/prefix-suffix",text:"Prefix and Suffix"},{to:"/forms/fieldset",text:"Form Field Sets"},{to:"/forms/styling",text:"Form Styling"}],DA=[{to:"/components/alerts",text:"Alerts"},{to:"/components/details",text:"Details"},{to:"/components/dialog",text:"Dialog"},{to:"/components/icons",text:"SVG Icons"},{to:"/components/menus",text:"Menus"},{to:"/components/overlay",text:"Overlay"},{to:"/components/tables",text:"Tables"},{to:"/components/tabs",text:"Tabs"},{to:"/components/tooltips",text:"Tooltips"}],jA=[{to:"/customising/sass",text:"Custom Stylesheet"}],zA=()=>c("div",{children:[a(nl,{title:"Getting Started",items:AA}),a(nl,{title:"Colors",items:OA}),a(nl,{title:"Utilities",items:FA}),a(nl,{title:"Forms",items:BA}),a(nl,{title:"Components",items:DA}),a(nl,{title:"Customising",items:jA})]}),WA=()=>a("footer",{children:c("div",{className:"flex space",children:[c("div",{children:["© Copyright ",PA," Andy Wardley"]}),c("div",{children:["Version ",Bv," ",Dv]})]})});function HA(){const{pathname:e}=Wl();return D.useEffect(()=>UA(document.getElementById("content")),[e]),null}function UA(e){e==null||e.scrollTo({top:0,left:0})}const VA=()=>{const{theme:e,variant:n}=Vl();return c("div",{id:"site","data-sidebar":n,"data-theme":e,children:[a(RA,{}),c("div",{id:"app",children:[a(HA,{}),a("aside",{children:a(zA,{})}),a("main",{id:"content",children:a(tT,{})})]}),a(WA,{})]})},GA=Object.assign({"../pages/colors/brand.jsx":bT,"../pages/colors/demo.jsx":jT,"../pages/colors/greyscale.jsx":ZT,"../pages/colors/palette.jsx":nL,"../pages/colors/ranges.jsx":oL,"../pages/colors/utilities.jsx":mL,"../pages/colors/variables.jsx":vL,"../pages/components/alerts.jsx":ML,"../pages/components/details.jsx":WL,"../pages/components/dialog.jsx":KL,"../pages/components/icons.jsx":o_,"../pages/components/menus.jsx":m_,"../pages/components/overlay.jsx":S_,"../pages/components/tables.jsx":O_,"../pages/components/tabs.jsx":U_,"../pages/components/tooltips.jsx":X_,"../pages/customising/sass.jsx":sN,"../pages/decoder.jsx":fN,"../pages/forms/buttons.jsx":_N,"../pages/forms/checkboxes.jsx":RN,"../pages/forms/field.jsx":ZN,"../pages/forms/fieldset.jsx":QN,"../pages/forms/index.jsx":MI,"../pages/forms/input.jsx":DI,"../pages/forms/multi-inputs.jsx":HI,"../pages/forms/prefix-suffix.jsx":aM,"../pages/forms/radio-buttons.jsx":dM,"../pages/forms/select.jsx":yM,"../pages/forms/styling.jsx":CM,"../pages/forms/text.jsx":$M,"../pages/forms/textarea.jsx":AM,"../pages/getting-started/bad.jsx":BM,"../pages/getting-started/good.jsx":ZM,"../pages/getting-started/installation.jsx":nP,"../pages/index.jsx":aP,"../pages/utilities/alignment.jsx":cP,"../pages/utilities/borders.jsx":SP,"../pages/utilities/breakpoints.jsx":LP,"../pages/utilities/columns.jsx":PP,"../pages/utilities/container.jsx":AP,"../pages/utilities/display.jsx":BP,"../pages/utilities/flexbox.jsx":XP,"../pages/utilities/font-styles.jsx":nR,"../pages/utilities/font-weights.jsx":iR,"../pages/utilities/fonts.jsx":fR,"../pages/utilities/grid.jsx":NR,"../pages/utilities/index.jsx":ER,"../pages/utilities/position.jsx":PR,"../pages/utilities/scrolling.jsx":FR,"../pages/utilities/shadows.jsx":zR,"../pages/utilities/sizes.jsx":YR,"../pages/utilities/spacing.jsx":eA,"../pages/utilities/split.jsx":iA,"../pages/utilities/stack.jsx":hA,"../pages/utilities/surfaces.jsx":vA,"../pages/utilities/typography.jsx":CA,"../pages/utilities/widths.jsx":EA}),YA=Object.entries(GA).filter(([e])=>!e.match(/\/_/)).map(([e,n])=>({path:e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,""),Component:n.default})),ZA=cT([{path:"/",element:a(VA,{}),children:YA}],{basename:"/badger-css/"});tu.createRoot(document.getElementById("root")).render(a(En.StrictMode,{children:a(UM,{storageKey:"theme",children:a(eT,{router:ZA})})}));
