function _b(e,n){for(var t=0;t<n.length;t++){const a=n[t];if(typeof a!="string"&&!Array.isArray(a)){for(const l in a)if(l!=="default"&&!(l in e)){const o=Object.getOwnPropertyDescriptor(a,l);o&&Object.defineProperty(e,l,o.get?o:{enumerable:!0,get:()=>a[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();var Ho=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cm={exports:{}},vd={},km={exports:{}},Te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mi=Symbol.for("react.element"),Nb=Symbol.for("react.portal"),$b=Symbol.for("react.fragment"),Ib=Symbol.for("react.strict_mode"),Eb=Symbol.for("react.profiler"),Mb=Symbol.for("react.provider"),Ab=Symbol.for("react.context"),Rb=Symbol.for("react.forward_ref"),Pb=Symbol.for("react.suspense"),Ob=Symbol.for("react.memo"),Fb=Symbol.for("react.lazy"),x1=Symbol.iterator;function Bb(e){return e===null||typeof e!="object"?null:(e=x1&&e[x1]||e["@@iterator"],typeof e=="function"?e:null)}var Sm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tm=Object.assign,Lm={};function jl(e,n,t){this.props=e,this.context=n,this.refs=Lm,this.updater=t||Sm}jl.prototype.isReactComponent={};jl.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};jl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _m(){}_m.prototype=jl.prototype;function wh(e,n,t){this.props=e,this.context=n,this.refs=Lm,this.updater=t||Sm}var xh=wh.prototype=new _m;xh.constructor=wh;Tm(xh,jl.prototype);xh.isPureReactComponent=!0;var C1=Array.isArray,Nm=Object.prototype.hasOwnProperty,Ch={current:null},$m={key:!0,ref:!0,__self:!0,__source:!0};function Im(e,n,t){var a,l={},o=null,i=null;if(n!=null)for(a in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)Nm.call(n,a)&&!$m.hasOwnProperty(a)&&(l[a]=n[a]);var d=arguments.length-2;if(d===1)l.children=t;else if(1<d){for(var u=Array(d),p=0;p<d;p++)u[p]=arguments[p+2];l.children=u}if(e&&e.defaultProps)for(a in d=e.defaultProps,d)l[a]===void 0&&(l[a]=d[a]);return{$$typeof:mi,type:e,key:o,ref:i,props:l,_owner:Ch.current}}function Db(e,n){return{$$typeof:mi,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function kh(e){return typeof e=="object"&&e!==null&&e.$$typeof===mi}function jb(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var k1=/\/+/g;function wc(e,n){return typeof e=="object"&&e!==null&&e.key!=null?jb(""+e.key):n.toString(36)}function us(e,n,t,a,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case mi:case Nb:i=!0}}if(i)return i=e,l=l(i),e=a===""?"."+wc(i,0):a,C1(l)?(t="",e!=null&&(t=e.replace(k1,"$&/")+"/"),us(l,n,t,"",function(p){return p})):l!=null&&(kh(l)&&(l=Db(l,t+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(k1,"$&/")+"/")+e)),n.push(l)),1;if(i=0,a=a===""?".":a+":",C1(e))for(var d=0;d<e.length;d++){o=e[d];var u=a+wc(o,d);i+=us(o,n,t,u,l)}else if(u=Bb(e),typeof u=="function")for(e=u.call(e),d=0;!(o=e.next()).done;)o=o.value,u=a+wc(o,d++),i+=us(o,n,t,u,l);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function ji(e,n,t){if(e==null)return e;var a=[],l=0;return us(e,a,"","",function(o){return n.call(t,o,l++)}),a}function zb(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Vn={current:null},hs={transition:null},Wb={ReactCurrentDispatcher:Vn,ReactCurrentBatchConfig:hs,ReactCurrentOwner:Ch};Te.Children={map:ji,forEach:function(e,n,t){ji(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ji(e,function(){n++}),n},toArray:function(e){return ji(e,function(n){return n})||[]},only:function(e){if(!kh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Te.Component=jl;Te.Fragment=$b;Te.Profiler=Eb;Te.PureComponent=wh;Te.StrictMode=Ib;Te.Suspense=Pb;Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wb;Te.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Tm({},e.props),l=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=Ch.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(u in n)Nm.call(n,u)&&!$m.hasOwnProperty(u)&&(a[u]=n[u]===void 0&&d!==void 0?d[u]:n[u])}var u=arguments.length-2;if(u===1)a.children=t;else if(1<u){d=Array(u);for(var p=0;p<u;p++)d[p]=arguments[p+2];a.children=d}return{$$typeof:mi,type:e.type,key:l,ref:o,props:a,_owner:i}};Te.createContext=function(e){return e={$$typeof:Ab,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Mb,_context:e},e.Consumer=e};Te.createElement=Im;Te.createFactory=function(e){var n=Im.bind(null,e);return n.type=e,n};Te.createRef=function(){return{current:null}};Te.forwardRef=function(e){return{$$typeof:Rb,render:e}};Te.isValidElement=kh;Te.lazy=function(e){return{$$typeof:Fb,_payload:{_status:-1,_result:e},_init:zb}};Te.memo=function(e,n){return{$$typeof:Ob,type:e,compare:n===void 0?null:n}};Te.startTransition=function(e){var n=hs.transition;hs.transition={};try{e()}finally{hs.transition=n}};Te.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Te.useCallback=function(e,n){return Vn.current.useCallback(e,n)};Te.useContext=function(e){return Vn.current.useContext(e)};Te.useDebugValue=function(){};Te.useDeferredValue=function(e){return Vn.current.useDeferredValue(e)};Te.useEffect=function(e,n){return Vn.current.useEffect(e,n)};Te.useId=function(){return Vn.current.useId()};Te.useImperativeHandle=function(e,n,t){return Vn.current.useImperativeHandle(e,n,t)};Te.useInsertionEffect=function(e,n){return Vn.current.useInsertionEffect(e,n)};Te.useLayoutEffect=function(e,n){return Vn.current.useLayoutEffect(e,n)};Te.useMemo=function(e,n){return Vn.current.useMemo(e,n)};Te.useReducer=function(e,n,t){return Vn.current.useReducer(e,n,t)};Te.useRef=function(e){return Vn.current.useRef(e)};Te.useState=function(e){return Vn.current.useState(e)};Te.useSyncExternalStore=function(e,n,t){return Vn.current.useSyncExternalStore(e,n,t)};Te.useTransition=function(){return Vn.current.useTransition()};Te.version="18.2.0";km.exports=Te;var D=km.exports;const In=Xt(D),S1=_b({__proto__:null,default:In},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ub=D,Hb=Symbol.for("react.element"),Gb=Symbol.for("react.fragment"),Vb=Object.prototype.hasOwnProperty,Yb=Ub.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zb={key:!0,ref:!0,__self:!0,__source:!0};function Em(e,n,t){var a,l={},o=null,i=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(a in n)Vb.call(n,a)&&!Zb.hasOwnProperty(a)&&(l[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)l[a]===void 0&&(l[a]=n[a]);return{$$typeof:Hb,type:e,key:o,ref:i,props:l,_owner:Yb.current}}vd.Fragment=Gb;vd.jsx=Em;vd.jsxs=Em;Cm.exports=vd;var Sh=Cm.exports;const At=Sh.Fragment,r=Sh.jsx,s=Sh.jsxs;var iu={},Mm={exports:{}},vt={},Am={exports:{}},Rm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(W,q){var J=W.length;W.push(q);e:for(;0<J;){var oe=J-1>>>1,fe=W[oe];if(0<l(fe,q))W[oe]=q,W[J]=fe,J=oe;else break e}}function t(W){return W.length===0?null:W[0]}function a(W){if(W.length===0)return null;var q=W[0],J=W.pop();if(J!==q){W[0]=J;e:for(var oe=0,fe=W.length,zn=fe>>>1;oe<zn;){var me=2*(oe+1)-1,en=W[me],Ze=me+1,fn=W[Ze];if(0>l(en,J))Ze<fe&&0>l(fn,en)?(W[oe]=fn,W[Ze]=J,oe=Ze):(W[oe]=en,W[me]=J,oe=me);else if(Ze<fe&&0>l(fn,J))W[oe]=fn,W[Ze]=J,oe=Ze;else break e}}return q}function l(W,q){var J=W.sortIndex-q.sortIndex;return J!==0?J:W.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,d=i.now();e.unstable_now=function(){return i.now()-d}}var u=[],p=[],g=1,y=null,C=3,E=!1,I=!1,k=!1,M=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(W){for(var q=t(p);q!==null;){if(q.callback===null)a(p);else if(q.startTime<=W)a(p),q.sortIndex=q.expirationTime,n(u,q);else break;q=t(p)}}function v(W){if(k=!1,b(W),!I)if(t(u)!==null)I=!0,De(N);else{var q=t(p);q!==null&&Ye(v,q.startTime-W)}}function N(W,q){I=!1,k&&(k=!1,w(F),F=-1),E=!0;var J=C;try{for(b(q),y=t(u);y!==null&&(!(y.expirationTime>q)||W&&!pe());){var oe=y.callback;if(typeof oe=="function"){y.callback=null,C=y.priorityLevel;var fe=oe(y.expirationTime<=q);q=e.unstable_now(),typeof fe=="function"?y.callback=fe:y===t(u)&&a(u),b(q)}else a(u);y=t(u)}if(y!==null)var zn=!0;else{var me=t(p);me!==null&&Ye(v,me.startTime-q),zn=!1}return zn}finally{y=null,C=J,E=!1}}var T=!1,P=null,F=-1,z=5,Z=-1;function pe(){return!(e.unstable_now()-Z<z)}function de(){if(P!==null){var W=e.unstable_now();Z=W;var q=!0;try{q=P(!0,W)}finally{q?ze():(T=!1,P=null)}}else T=!1}var ze;if(typeof m=="function")ze=function(){m(de)};else if(typeof MessageChannel<"u"){var ln=new MessageChannel,Ve=ln.port2;ln.port1.onmessage=de,ze=function(){Ve.postMessage(null)}}else ze=function(){M(de,0)};function De(W){P=W,T||(T=!0,ze())}function Ye(W,q){F=M(function(){W(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(W){W.callback=null},e.unstable_continueExecution=function(){I||E||(I=!0,De(N))},e.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<W?Math.floor(1e3/W):5},e.unstable_getCurrentPriorityLevel=function(){return C},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(W){switch(C){case 1:case 2:case 3:var q=3;break;default:q=C}var J=C;C=q;try{return W()}finally{C=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(W,q){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var J=C;C=W;try{return q()}finally{C=J}},e.unstable_scheduleCallback=function(W,q,J){var oe=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?oe+J:oe):J=oe,W){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=J+fe,W={id:g++,callback:q,priorityLevel:W,startTime:J,expirationTime:fe,sortIndex:-1},J>oe?(W.sortIndex=J,n(p,W),t(u)===null&&W===t(p)&&(k?(w(F),F=-1):k=!0,Ye(v,J-oe))):(W.sortIndex=fe,n(u,W),I||E||(I=!0,De(N))),W},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(W){var q=C;return function(){var J=C;C=q;try{return W.apply(this,arguments)}finally{C=J}}}})(Rm);Am.exports=Rm;var qb=Am.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm=D,gt=qb;function Y(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Om=new Set,Go={};function Pa(e,n){Il(e,n),Il(e+"Capture",n)}function Il(e,n){for(Go[e]=n,e=0;e<n.length;e++)Om.add(n[e])}var fr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=Object.prototype.hasOwnProperty,Kb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T1={},L1={};function Qb(e){return su.call(L1,e)?!0:su.call(T1,e)?!1:Kb.test(e)?L1[e]=!0:(T1[e]=!0,!1)}function Xb(e,n,t,a){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jb(e,n,t,a){if(n===null||typeof n>"u"||Xb(e,n,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Yn(e,n,t,a,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var An={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){An[e]=new Yn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];An[n]=new Yn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){An[e]=new Yn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){An[e]=new Yn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){An[e]=new Yn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){An[e]=new Yn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){An[e]=new Yn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){An[e]=new Yn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){An[e]=new Yn(e,5,!1,e.toLowerCase(),null,!1,!1)});var Th=/[\-:]([a-z])/g;function Lh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Th,Lh);An[n]=new Yn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Th,Lh);An[n]=new Yn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Th,Lh);An[n]=new Yn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){An[e]=new Yn(e,1,!1,e.toLowerCase(),null,!1,!1)});An.xlinkHref=new Yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){An[e]=new Yn(e,1,!1,e.toLowerCase(),null,!0,!0)});function _h(e,n,t,a){var l=An.hasOwnProperty(n)?An[n]:null;(l!==null?l.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Jb(n,t,l,a)&&(t=null),a||l===null?Qb(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,a=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,a?e.setAttributeNS(a,n,t):e.setAttribute(n,t))))}var wr=Pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zi=Symbol.for("react.element"),il=Symbol.for("react.portal"),sl=Symbol.for("react.fragment"),Nh=Symbol.for("react.strict_mode"),du=Symbol.for("react.profiler"),Fm=Symbol.for("react.provider"),Bm=Symbol.for("react.context"),$h=Symbol.for("react.forward_ref"),cu=Symbol.for("react.suspense"),uu=Symbol.for("react.suspense_list"),Ih=Symbol.for("react.memo"),Er=Symbol.for("react.lazy"),Dm=Symbol.for("react.offscreen"),_1=Symbol.iterator;function uo(e){return e===null||typeof e!="object"?null:(e=_1&&e[_1]||e["@@iterator"],typeof e=="function"?e:null)}var rn=Object.assign,xc;function Co(e){if(xc===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);xc=n&&n[1]||""}return`
`+xc+e}var Cc=!1;function kc(e,n){if(!e||Cc)return"";Cc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(p){var a=p}Reflect.construct(e,[],n)}else{try{n.call()}catch(p){a=p}e.call(n.prototype)}else{try{throw Error()}catch(p){a=p}e()}}catch(p){if(p&&a&&typeof p.stack=="string"){for(var l=p.stack.split(`
`),o=a.stack.split(`
`),i=l.length-1,d=o.length-1;1<=i&&0<=d&&l[i]!==o[d];)d--;for(;1<=i&&0<=d;i--,d--)if(l[i]!==o[d]){if(i!==1||d!==1)do if(i--,d--,0>d||l[i]!==o[d]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=d);break}}}finally{Cc=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Co(e):""}function ey(e){switch(e.tag){case 5:return Co(e.type);case 16:return Co("Lazy");case 13:return Co("Suspense");case 19:return Co("SuspenseList");case 0:case 2:case 15:return e=kc(e.type,!1),e;case 11:return e=kc(e.type.render,!1),e;case 1:return e=kc(e.type,!0),e;default:return""}}function hu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case sl:return"Fragment";case il:return"Portal";case du:return"Profiler";case Nh:return"StrictMode";case cu:return"Suspense";case uu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bm:return(e.displayName||"Context")+".Consumer";case Fm:return(e._context.displayName||"Context")+".Provider";case $h:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ih:return n=e.displayName||null,n!==null?n:hu(e.type)||"Memo";case Er:n=e._payload,e=e._init;try{return hu(e(n))}catch{}}return null}function ny(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hu(n);case 8:return n===Nh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Yr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jm(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ty(e){var n=jm(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){a=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wi(e){e._valueTracker||(e._valueTracker=ty(e))}function zm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=jm(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function Ps(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pu(e,n){var t=n.checked;return rn({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function N1(e,n){var t=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;t=Yr(n.value!=null?n.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Wm(e,n){n=n.checked,n!=null&&_h(e,"checked",n,!1)}function fu(e,n){Wm(e,n);var t=Yr(n.value),a=n.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?mu(e,n.type,t):n.hasOwnProperty("defaultValue")&&mu(e,n.type,Yr(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function $1(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function mu(e,n,t){(n!=="number"||Ps(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var ko=Array.isArray;function Cl(e,n,t,a){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&a&&(e[t].defaultSelected=!0)}else{for(t=""+Yr(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function gu(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(Y(91));return rn({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function I1(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(Y(92));if(ko(t)){if(1<t.length)throw Error(Y(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Yr(t)}}function Um(e,n){var t=Yr(n.value),a=Yr(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function E1(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Hm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vu(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Hm(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ui,Gm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,a,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,a,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ui=Ui||document.createElement("div"),Ui.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ui.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Vo(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ry=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(e){ry.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Mo[n]=Mo[e]})});function Vm(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Mo.hasOwnProperty(e)&&Mo[e]?(""+n).trim():n+"px"}function Ym(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var a=t.indexOf("--")===0,l=Vm(t,n[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,l):e[t]=l}}var ay=rn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bu(e,n){if(n){if(ay[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(Y(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(Y(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(Y(61))}if(n.style!=null&&typeof n.style!="object")throw Error(Y(62))}}function yu(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wu=null;function Eh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xu=null,kl=null,Sl=null;function M1(e){if(e=bi(e)){if(typeof xu!="function")throw Error(Y(280));var n=e.stateNode;n&&(n=Cd(n),xu(e.stateNode,e.type,n))}}function Zm(e){kl?Sl?Sl.push(e):Sl=[e]:kl=e}function qm(){if(kl){var e=kl,n=Sl;if(Sl=kl=null,M1(e),n)for(e=0;e<n.length;e++)M1(n[e])}}function Km(e,n){return e(n)}function Qm(){}var Sc=!1;function Xm(e,n,t){if(Sc)return e(n,t);Sc=!0;try{return Km(e,n,t)}finally{Sc=!1,(kl!==null||Sl!==null)&&(Qm(),qm())}}function Yo(e,n){var t=e.stateNode;if(t===null)return null;var a=Cd(t);if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(Y(231,n,typeof t));return t}var Cu=!1;if(fr)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{Cu=!1}function ly(e,n,t,a,l,o,i,d,u){var p=Array.prototype.slice.call(arguments,3);try{n.apply(t,p)}catch(g){this.onError(g)}}var Ao=!1,Os=null,Fs=!1,ku=null,oy={onError:function(e){Ao=!0,Os=e}};function iy(e,n,t,a,l,o,i,d,u){Ao=!1,Os=null,ly.apply(oy,arguments)}function sy(e,n,t,a,l,o,i,d,u){if(iy.apply(this,arguments),Ao){if(Ao){var p=Os;Ao=!1,Os=null}else throw Error(Y(198));Fs||(Fs=!0,ku=p)}}function Oa(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Jm(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function A1(e){if(Oa(e)!==e)throw Error(Y(188))}function dy(e){var n=e.alternate;if(!n){if(n=Oa(e),n===null)throw Error(Y(188));return n!==e?null:e}for(var t=e,a=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return A1(l),e;if(o===a)return A1(l),n;o=o.sibling}throw Error(Y(188))}if(t.return!==a.return)t=l,a=o;else{for(var i=!1,d=l.child;d;){if(d===t){i=!0,t=l,a=o;break}if(d===a){i=!0,a=l,t=o;break}d=d.sibling}if(!i){for(d=o.child;d;){if(d===t){i=!0,t=o,a=l;break}if(d===a){i=!0,a=o,t=l;break}d=d.sibling}if(!i)throw Error(Y(189))}}if(t.alternate!==a)throw Error(Y(190))}if(t.tag!==3)throw Error(Y(188));return t.stateNode.current===t?e:n}function e3(e){return e=dy(e),e!==null?n3(e):null}function n3(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=n3(e);if(n!==null)return n;e=e.sibling}return null}var t3=gt.unstable_scheduleCallback,R1=gt.unstable_cancelCallback,cy=gt.unstable_shouldYield,uy=gt.unstable_requestPaint,sn=gt.unstable_now,hy=gt.unstable_getCurrentPriorityLevel,Mh=gt.unstable_ImmediatePriority,r3=gt.unstable_UserBlockingPriority,Bs=gt.unstable_NormalPriority,py=gt.unstable_LowPriority,a3=gt.unstable_IdlePriority,bd=null,Kt=null;function fy(e){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(bd,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:vy,my=Math.log,gy=Math.LN2;function vy(e){return e>>>=0,e===0?32:31-(my(e)/gy|0)|0}var Hi=64,Gi=4194304;function So(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ds(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,l=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var d=i&~l;d!==0?a=So(d):(o&=i,o!==0&&(a=So(o)))}else i=t&~l,i!==0?a=So(i):o!==0&&(a=So(o));if(a===0)return 0;if(n!==0&&n!==a&&!(n&l)&&(l=a&-a,o=n&-n,l>=o||l===16&&(o&4194240)!==0))return n;if(a&4&&(a|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)t=31-jt(n),l=1<<t,a|=e[t],n&=~l;return a}function by(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yy(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-jt(o),d=1<<i,u=l[i];u===-1?(!(d&t)||d&a)&&(l[i]=by(d,n)):u<=n&&(e.expiredLanes|=d),o&=~d}}function Su(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function l3(){var e=Hi;return Hi<<=1,!(Hi&4194240)&&(Hi=64),e}function Tc(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function gi(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-jt(n),e[n]=t}function wy(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-jt(t),o=1<<l;n[l]=0,a[l]=-1,e[l]=-1,t&=~o}}function Ah(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-jt(t),l=1<<a;l&n|e[a]&n&&(e[a]|=n),t&=~l}}var Be=0;function o3(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var i3,Rh,s3,d3,c3,Tu=!1,Vi=[],Dr=null,jr=null,zr=null,Zo=new Map,qo=new Map,Ar=[],xy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function P1(e,n){switch(e){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":Zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(n.pointerId)}}function po(e,n,t,a,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:o,targetContainers:[l]},n!==null&&(n=bi(n),n!==null&&Rh(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Cy(e,n,t,a,l){switch(n){case"focusin":return Dr=po(Dr,e,n,t,a,l),!0;case"dragenter":return jr=po(jr,e,n,t,a,l),!0;case"mouseover":return zr=po(zr,e,n,t,a,l),!0;case"pointerover":var o=l.pointerId;return Zo.set(o,po(Zo.get(o)||null,e,n,t,a,l)),!0;case"gotpointercapture":return o=l.pointerId,qo.set(o,po(qo.get(o)||null,e,n,t,a,l)),!0}return!1}function u3(e){var n=xa(e.target);if(n!==null){var t=Oa(n);if(t!==null){if(n=t.tag,n===13){if(n=Jm(t),n!==null){e.blockedOn=n,c3(e.priority,function(){s3(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ps(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Lu(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);wu=a,t.target.dispatchEvent(a),wu=null}else return n=bi(t),n!==null&&Rh(n),e.blockedOn=t,!1;n.shift()}return!0}function O1(e,n,t){ps(e)&&t.delete(n)}function ky(){Tu=!1,Dr!==null&&ps(Dr)&&(Dr=null),jr!==null&&ps(jr)&&(jr=null),zr!==null&&ps(zr)&&(zr=null),Zo.forEach(O1),qo.forEach(O1)}function fo(e,n){e.blockedOn===n&&(e.blockedOn=null,Tu||(Tu=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,ky)))}function Ko(e){function n(l){return fo(l,e)}if(0<Vi.length){fo(Vi[0],e);for(var t=1;t<Vi.length;t++){var a=Vi[t];a.blockedOn===e&&(a.blockedOn=null)}}for(Dr!==null&&fo(Dr,e),jr!==null&&fo(jr,e),zr!==null&&fo(zr,e),Zo.forEach(n),qo.forEach(n),t=0;t<Ar.length;t++)a=Ar[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<Ar.length&&(t=Ar[0],t.blockedOn===null);)u3(t),t.blockedOn===null&&Ar.shift()}var Tl=wr.ReactCurrentBatchConfig,js=!0;function Sy(e,n,t,a){var l=Be,o=Tl.transition;Tl.transition=null;try{Be=1,Ph(e,n,t,a)}finally{Be=l,Tl.transition=o}}function Ty(e,n,t,a){var l=Be,o=Tl.transition;Tl.transition=null;try{Be=4,Ph(e,n,t,a)}finally{Be=l,Tl.transition=o}}function Ph(e,n,t,a){if(js){var l=Lu(e,n,t,a);if(l===null)Pc(e,n,a,zs,t),P1(e,a);else if(Cy(l,e,n,t,a))a.stopPropagation();else if(P1(e,a),n&4&&-1<xy.indexOf(e)){for(;l!==null;){var o=bi(l);if(o!==null&&i3(o),o=Lu(e,n,t,a),o===null&&Pc(e,n,a,zs,t),o===l)break;l=o}l!==null&&a.stopPropagation()}else Pc(e,n,a,null,t)}}var zs=null;function Lu(e,n,t,a){if(zs=null,e=Eh(a),e=xa(e),e!==null)if(n=Oa(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Jm(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return zs=e,null}function h3(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hy()){case Mh:return 1;case r3:return 4;case Bs:case py:return 16;case a3:return 536870912;default:return 16}default:return 16}}var Pr=null,Oh=null,fs=null;function p3(){if(fs)return fs;var e,n=Oh,t=n.length,a,l="value"in Pr?Pr.value:Pr.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var i=t-e;for(a=1;a<=i&&n[t-a]===l[o-a];a++);return fs=l.slice(e,1<a?1-a:void 0)}function ms(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Yi(){return!0}function F1(){return!1}function bt(e){function n(t,a,l,o,i){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(t=e[d],this[d]=t?t(o):o[d]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Yi:F1,this.isPropagationStopped=F1,this}return rn(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Yi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Yi)},persist:function(){},isPersistent:Yi}),n}var zl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fh=bt(zl),vi=rn({},zl,{view:0,detail:0}),Ly=bt(vi),Lc,_c,mo,yd=rn({},vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mo&&(mo&&e.type==="mousemove"?(Lc=e.screenX-mo.screenX,_c=e.screenY-mo.screenY):_c=Lc=0,mo=e),Lc)},movementY:function(e){return"movementY"in e?e.movementY:_c}}),B1=bt(yd),_y=rn({},yd,{dataTransfer:0}),Ny=bt(_y),$y=rn({},vi,{relatedTarget:0}),Nc=bt($y),Iy=rn({},zl,{animationName:0,elapsedTime:0,pseudoElement:0}),Ey=bt(Iy),My=rn({},zl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ay=bt(My),Ry=rn({},zl,{data:0}),D1=bt(Ry),Py={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function By(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Fy[e])?!!n[e]:!1}function Bh(){return By}var Dy=rn({},vi,{key:function(e){if(e.key){var n=Py[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ms(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Oy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bh,charCode:function(e){return e.type==="keypress"?ms(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ms(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jy=bt(Dy),zy=rn({},yd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),j1=bt(zy),Wy=rn({},vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bh}),Uy=bt(Wy),Hy=rn({},zl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gy=bt(Hy),Vy=rn({},yd,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yy=bt(Vy),Zy=[9,13,27,32],Dh=fr&&"CompositionEvent"in window,Ro=null;fr&&"documentMode"in document&&(Ro=document.documentMode);var qy=fr&&"TextEvent"in window&&!Ro,f3=fr&&(!Dh||Ro&&8<Ro&&11>=Ro),z1=String.fromCharCode(32),W1=!1;function m3(e,n){switch(e){case"keyup":return Zy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function g3(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dl=!1;function Ky(e,n){switch(e){case"compositionend":return g3(n);case"keypress":return n.which!==32?null:(W1=!0,z1);case"textInput":return e=n.data,e===z1&&W1?null:e;default:return null}}function Qy(e,n){if(dl)return e==="compositionend"||!Dh&&m3(e,n)?(e=p3(),fs=Oh=Pr=null,dl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return f3&&n.locale!=="ko"?null:n.data;default:return null}}var Xy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function U1(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Xy[e.type]:n==="textarea"}function v3(e,n,t,a){Zm(a),n=Ws(n,"onChange"),0<n.length&&(t=new Fh("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Po=null,Qo=null;function Jy(e){N3(e,0)}function wd(e){var n=hl(e);if(zm(n))return e}function e7(e,n){if(e==="change")return n}var b3=!1;if(fr){var $c;if(fr){var Ic="oninput"in document;if(!Ic){var H1=document.createElement("div");H1.setAttribute("oninput","return;"),Ic=typeof H1.oninput=="function"}$c=Ic}else $c=!1;b3=$c&&(!document.documentMode||9<document.documentMode)}function G1(){Po&&(Po.detachEvent("onpropertychange",y3),Qo=Po=null)}function y3(e){if(e.propertyName==="value"&&wd(Qo)){var n=[];v3(n,Qo,e,Eh(e)),Xm(Jy,n)}}function n7(e,n,t){e==="focusin"?(G1(),Po=n,Qo=t,Po.attachEvent("onpropertychange",y3)):e==="focusout"&&G1()}function t7(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wd(Qo)}function r7(e,n){if(e==="click")return wd(n)}function a7(e,n){if(e==="input"||e==="change")return wd(n)}function l7(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wt=typeof Object.is=="function"?Object.is:l7;function Xo(e,n){if(Wt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!su.call(n,l)||!Wt(e[l],n[l]))return!1}return!0}function V1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Y1(e,n){var t=V1(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=V1(t)}}function w3(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?w3(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function x3(){for(var e=window,n=Ps();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ps(e.document)}return n}function jh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function o7(e){var n=x3(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&w3(t.ownerDocument.documentElement,t)){if(a!==null&&jh(t)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,o=Math.min(a.start,l);a=a.end===void 0?o:Math.min(a.end,l),!e.extend&&o>a&&(l=a,a=o,o=l),l=Y1(t,o);var i=Y1(t,a);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),o>a?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var i7=fr&&"documentMode"in document&&11>=document.documentMode,cl=null,_u=null,Oo=null,Nu=!1;function Z1(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Nu||cl==null||cl!==Ps(a)||(a=cl,"selectionStart"in a&&jh(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Oo&&Xo(Oo,a)||(Oo=a,a=Ws(_u,"onSelect"),0<a.length&&(n=new Fh("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=cl)))}function Zi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ul={animationend:Zi("Animation","AnimationEnd"),animationiteration:Zi("Animation","AnimationIteration"),animationstart:Zi("Animation","AnimationStart"),transitionend:Zi("Transition","TransitionEnd")},Ec={},C3={};fr&&(C3=document.createElement("div").style,"AnimationEvent"in window||(delete ul.animationend.animation,delete ul.animationiteration.animation,delete ul.animationstart.animation),"TransitionEvent"in window||delete ul.transitionend.transition);function xd(e){if(Ec[e])return Ec[e];if(!ul[e])return e;var n=ul[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in C3)return Ec[e]=n[t];return e}var k3=xd("animationend"),S3=xd("animationiteration"),T3=xd("animationstart"),L3=xd("transitionend"),_3=new Map,q1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(e,n){_3.set(e,n),Pa(n,[e])}for(var Mc=0;Mc<q1.length;Mc++){var Ac=q1[Mc],s7=Ac.toLowerCase(),d7=Ac[0].toUpperCase()+Ac.slice(1);Qr(s7,"on"+d7)}Qr(k3,"onAnimationEnd");Qr(S3,"onAnimationIteration");Qr(T3,"onAnimationStart");Qr("dblclick","onDoubleClick");Qr("focusin","onFocus");Qr("focusout","onBlur");Qr(L3,"onTransitionEnd");Il("onMouseEnter",["mouseout","mouseover"]);Il("onMouseLeave",["mouseout","mouseover"]);Il("onPointerEnter",["pointerout","pointerover"]);Il("onPointerLeave",["pointerout","pointerover"]);Pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pa("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c7=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function K1(e,n,t){var a=e.type||"unknown-event";e.currentTarget=t,sy(a,n,void 0,e),e.currentTarget=null}function N3(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],l=a.event;a=a.listeners;e:{var o=void 0;if(n)for(var i=a.length-1;0<=i;i--){var d=a[i],u=d.instance,p=d.currentTarget;if(d=d.listener,u!==o&&l.isPropagationStopped())break e;K1(l,d,p),o=u}else for(i=0;i<a.length;i++){if(d=a[i],u=d.instance,p=d.currentTarget,d=d.listener,u!==o&&l.isPropagationStopped())break e;K1(l,d,p),o=u}}}if(Fs)throw e=ku,Fs=!1,ku=null,e}function Ke(e,n){var t=n[Au];t===void 0&&(t=n[Au]=new Set);var a=e+"__bubble";t.has(a)||($3(n,e,2,!1),t.add(a))}function Rc(e,n,t){var a=0;n&&(a|=4),$3(t,e,a,n)}var qi="_reactListening"+Math.random().toString(36).slice(2);function Jo(e){if(!e[qi]){e[qi]=!0,Om.forEach(function(t){t!=="selectionchange"&&(c7.has(t)||Rc(t,!1,e),Rc(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[qi]||(n[qi]=!0,Rc("selectionchange",!1,n))}}function $3(e,n,t,a){switch(h3(n)){case 1:var l=Sy;break;case 4:l=Ty;break;default:l=Ph}t=l.bind(null,n,t,e),l=void 0,!Cu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Pc(e,n,t,a,l){var o=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var d=a.stateNode.containerInfo;if(d===l||d.nodeType===8&&d.parentNode===l)break;if(i===4)for(i=a.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;d!==null;){if(i=xa(d),i===null)return;if(u=i.tag,u===5||u===6){a=o=i;continue e}d=d.parentNode}}a=a.return}Xm(function(){var p=o,g=Eh(t),y=[];e:{var C=_3.get(e);if(C!==void 0){var E=Fh,I=e;switch(e){case"keypress":if(ms(t)===0)break e;case"keydown":case"keyup":E=jy;break;case"focusin":I="focus",E=Nc;break;case"focusout":I="blur",E=Nc;break;case"beforeblur":case"afterblur":E=Nc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=B1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Ny;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Uy;break;case k3:case S3:case T3:E=Ey;break;case L3:E=Gy;break;case"scroll":E=Ly;break;case"wheel":E=Yy;break;case"copy":case"cut":case"paste":E=Ay;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=j1}var k=(n&4)!==0,M=!k&&e==="scroll",w=k?C!==null?C+"Capture":null:C;k=[];for(var m=p,b;m!==null;){b=m;var v=b.stateNode;if(b.tag===5&&v!==null&&(b=v,w!==null&&(v=Yo(m,w),v!=null&&k.push(ei(m,v,b)))),M)break;m=m.return}0<k.length&&(C=new E(C,I,null,t,g),y.push({event:C,listeners:k}))}}if(!(n&7)){e:{if(C=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",C&&t!==wu&&(I=t.relatedTarget||t.fromElement)&&(xa(I)||I[mr]))break e;if((E||C)&&(C=g.window===g?g:(C=g.ownerDocument)?C.defaultView||C.parentWindow:window,E?(I=t.relatedTarget||t.toElement,E=p,I=I?xa(I):null,I!==null&&(M=Oa(I),I!==M||I.tag!==5&&I.tag!==6)&&(I=null)):(E=null,I=p),E!==I)){if(k=B1,v="onMouseLeave",w="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(k=j1,v="onPointerLeave",w="onPointerEnter",m="pointer"),M=E==null?C:hl(E),b=I==null?C:hl(I),C=new k(v,m+"leave",E,t,g),C.target=M,C.relatedTarget=b,v=null,xa(g)===p&&(k=new k(w,m+"enter",I,t,g),k.target=b,k.relatedTarget=M,v=k),M=v,E&&I)n:{for(k=E,w=I,m=0,b=k;b;b=nl(b))m++;for(b=0,v=w;v;v=nl(v))b++;for(;0<m-b;)k=nl(k),m--;for(;0<b-m;)w=nl(w),b--;for(;m--;){if(k===w||w!==null&&k===w.alternate)break n;k=nl(k),w=nl(w)}k=null}else k=null;E!==null&&Q1(y,C,E,k,!1),I!==null&&M!==null&&Q1(y,M,I,k,!0)}}e:{if(C=p?hl(p):window,E=C.nodeName&&C.nodeName.toLowerCase(),E==="select"||E==="input"&&C.type==="file")var N=e7;else if(U1(C))if(b3)N=a7;else{N=t7;var T=n7}else(E=C.nodeName)&&E.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(N=r7);if(N&&(N=N(e,p))){v3(y,N,t,g);break e}T&&T(e,C,p),e==="focusout"&&(T=C._wrapperState)&&T.controlled&&C.type==="number"&&mu(C,"number",C.value)}switch(T=p?hl(p):window,e){case"focusin":(U1(T)||T.contentEditable==="true")&&(cl=T,_u=p,Oo=null);break;case"focusout":Oo=_u=cl=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,Z1(y,t,g);break;case"selectionchange":if(i7)break;case"keydown":case"keyup":Z1(y,t,g)}var P;if(Dh)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else dl?m3(e,t)&&(F="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(F="onCompositionStart");F&&(f3&&t.locale!=="ko"&&(dl||F!=="onCompositionStart"?F==="onCompositionEnd"&&dl&&(P=p3()):(Pr=g,Oh="value"in Pr?Pr.value:Pr.textContent,dl=!0)),T=Ws(p,F),0<T.length&&(F=new D1(F,e,null,t,g),y.push({event:F,listeners:T}),P?F.data=P:(P=g3(t),P!==null&&(F.data=P)))),(P=qy?Ky(e,t):Qy(e,t))&&(p=Ws(p,"onBeforeInput"),0<p.length&&(g=new D1("onBeforeInput","beforeinput",null,t,g),y.push({event:g,listeners:p}),g.data=P))}N3(y,n)})}function ei(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ws(e,n){for(var t=n+"Capture",a=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Yo(e,t),o!=null&&a.unshift(ei(e,o,l)),o=Yo(e,n),o!=null&&a.push(ei(e,o,l))),e=e.return}return a}function nl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Q1(e,n,t,a,l){for(var o=n._reactName,i=[];t!==null&&t!==a;){var d=t,u=d.alternate,p=d.stateNode;if(u!==null&&u===a)break;d.tag===5&&p!==null&&(d=p,l?(u=Yo(t,o),u!=null&&i.unshift(ei(t,u,d))):l||(u=Yo(t,o),u!=null&&i.push(ei(t,u,d)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var u7=/\r\n?/g,h7=/\u0000|\uFFFD/g;function X1(e){return(typeof e=="string"?e:""+e).replace(u7,`
`).replace(h7,"")}function Ki(e,n,t){if(n=X1(n),X1(e)!==n&&t)throw Error(Y(425))}function Us(){}var $u=null,Iu=null;function Eu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Mu=typeof setTimeout=="function"?setTimeout:void 0,p7=typeof clearTimeout=="function"?clearTimeout:void 0,J1=typeof Promise=="function"?Promise:void 0,f7=typeof queueMicrotask=="function"?queueMicrotask:typeof J1<"u"?function(e){return J1.resolve(null).then(e).catch(m7)}:Mu;function m7(e){setTimeout(function(){throw e})}function Oc(e,n){var t=n,a=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(a===0){e.removeChild(l),Ko(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=l}while(t);Ko(n)}function Wr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function e2(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Wl=Math.random().toString(36).slice(2),qt="__reactFiber$"+Wl,ni="__reactProps$"+Wl,mr="__reactContainer$"+Wl,Au="__reactEvents$"+Wl,g7="__reactListeners$"+Wl,v7="__reactHandles$"+Wl;function xa(e){var n=e[qt];if(n)return n;for(var t=e.parentNode;t;){if(n=t[mr]||t[qt]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=e2(e);e!==null;){if(t=e[qt])return t;e=e2(e)}return n}e=t,t=e.parentNode}return null}function bi(e){return e=e[qt]||e[mr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hl(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Y(33))}function Cd(e){return e[ni]||null}var Ru=[],pl=-1;function Xr(e){return{current:e}}function Xe(e){0>pl||(e.current=Ru[pl],Ru[pl]=null,pl--)}function Ge(e,n){pl++,Ru[pl]=e.current,e.current=n}var Zr={},jn=Xr(Zr),rt=Xr(!1),$a=Zr;function El(e,n){var t=e.type.contextTypes;if(!t)return Zr;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in t)l[o]=n[o];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function at(e){return e=e.childContextTypes,e!=null}function Hs(){Xe(rt),Xe(jn)}function n2(e,n,t){if(jn.current!==Zr)throw Error(Y(168));Ge(jn,n),Ge(rt,t)}function I3(e,n,t){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var l in a)if(!(l in n))throw Error(Y(108,ny(e)||"Unknown",l));return rn({},t,a)}function Gs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zr,$a=jn.current,Ge(jn,e),Ge(rt,rt.current),!0}function t2(e,n,t){var a=e.stateNode;if(!a)throw Error(Y(169));t?(e=I3(e,n,$a),a.__reactInternalMemoizedMergedChildContext=e,Xe(rt),Xe(jn),Ge(jn,e)):Xe(rt),Ge(rt,t)}var sr=null,kd=!1,Fc=!1;function E3(e){sr===null?sr=[e]:sr.push(e)}function b7(e){kd=!0,E3(e)}function Jr(){if(!Fc&&sr!==null){Fc=!0;var e=0,n=Be;try{var t=sr;for(Be=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}sr=null,kd=!1}catch(l){throw sr!==null&&(sr=sr.slice(e+1)),t3(Mh,Jr),l}finally{Be=n,Fc=!1}}return null}var fl=[],ml=0,Vs=null,Ys=0,xt=[],Ct=0,Ia=null,dr=1,cr="";function ga(e,n){fl[ml++]=Ys,fl[ml++]=Vs,Vs=e,Ys=n}function M3(e,n,t){xt[Ct++]=dr,xt[Ct++]=cr,xt[Ct++]=Ia,Ia=e;var a=dr;e=cr;var l=32-jt(a)-1;a&=~(1<<l),t+=1;var o=32-jt(n)+l;if(30<o){var i=l-l%5;o=(a&(1<<i)-1).toString(32),a>>=i,l-=i,dr=1<<32-jt(n)+l|t<<l|a,cr=o+e}else dr=1<<o|t<<l|a,cr=e}function zh(e){e.return!==null&&(ga(e,1),M3(e,1,0))}function Wh(e){for(;e===Vs;)Vs=fl[--ml],fl[ml]=null,Ys=fl[--ml],fl[ml]=null;for(;e===Ia;)Ia=xt[--Ct],xt[Ct]=null,cr=xt[--Ct],xt[Ct]=null,dr=xt[--Ct],xt[Ct]=null}var mt=null,ft=null,Je=!1,Ft=null;function A3(e,n){var t=kt(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function r2(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,mt=e,ft=Wr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,mt=e,ft=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Ia!==null?{id:dr,overflow:cr}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=kt(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,mt=e,ft=null,!0):!1;default:return!1}}function Pu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ou(e){if(Je){var n=ft;if(n){var t=n;if(!r2(e,n)){if(Pu(e))throw Error(Y(418));n=Wr(t.nextSibling);var a=mt;n&&r2(e,n)?A3(a,t):(e.flags=e.flags&-4097|2,Je=!1,mt=e)}}else{if(Pu(e))throw Error(Y(418));e.flags=e.flags&-4097|2,Je=!1,mt=e}}}function a2(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;mt=e}function Qi(e){if(e!==mt)return!1;if(!Je)return a2(e),Je=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Eu(e.type,e.memoizedProps)),n&&(n=ft)){if(Pu(e))throw R3(),Error(Y(418));for(;n;)A3(e,n),n=Wr(n.nextSibling)}if(a2(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ft=Wr(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ft=null}}else ft=mt?Wr(e.stateNode.nextSibling):null;return!0}function R3(){for(var e=ft;e;)e=Wr(e.nextSibling)}function Ml(){ft=mt=null,Je=!1}function Uh(e){Ft===null?Ft=[e]:Ft.push(e)}var y7=wr.ReactCurrentBatchConfig;function Rt(e,n){if(e&&e.defaultProps){n=rn({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Zs=Xr(null),qs=null,gl=null,Hh=null;function Gh(){Hh=gl=qs=null}function Vh(e){var n=Zs.current;Xe(Zs),e._currentValue=n}function Fu(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Ll(e,n){qs=e,Hh=gl=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(tt=!0),e.firstContext=null)}function Tt(e){var n=e._currentValue;if(Hh!==e)if(e={context:e,memoizedValue:n,next:null},gl===null){if(qs===null)throw Error(Y(308));gl=e,qs.dependencies={lanes:0,firstContext:e}}else gl=gl.next=e;return n}var Ca=null;function Yh(e){Ca===null?Ca=[e]:Ca.push(e)}function P3(e,n,t,a){var l=n.interleaved;return l===null?(t.next=t,Yh(n)):(t.next=l.next,l.next=t),n.interleaved=t,gr(e,a)}function gr(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Mr=!1;function Zh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function O3(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hr(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Ur(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,Ee&2){var l=a.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),a.pending=n,gr(e,t)}return l=a.interleaved,l===null?(n.next=n,Yh(a)):(n.next=l.next,l.next=n),a.interleaved=n,gr(e,t)}function gs(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Ah(e,t)}}function l2(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?l=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ks(e,n,t,a){var l=e.updateQueue;Mr=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,d=l.shared.pending;if(d!==null){l.shared.pending=null;var u=d,p=u.next;u.next=null,i===null?o=p:i.next=p,i=u;var g=e.alternate;g!==null&&(g=g.updateQueue,d=g.lastBaseUpdate,d!==i&&(d===null?g.firstBaseUpdate=p:d.next=p,g.lastBaseUpdate=u))}if(o!==null){var y=l.baseState;i=0,g=p=u=null,d=o;do{var C=d.lane,E=d.eventTime;if((a&C)===C){g!==null&&(g=g.next={eventTime:E,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var I=e,k=d;switch(C=n,E=t,k.tag){case 1:if(I=k.payload,typeof I=="function"){y=I.call(E,y,C);break e}y=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=k.payload,C=typeof I=="function"?I.call(E,y,C):I,C==null)break e;y=rn({},y,C);break e;case 2:Mr=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,C=l.effects,C===null?l.effects=[d]:C.push(d))}else E={eventTime:E,lane:C,tag:d.tag,payload:d.payload,callback:d.callback,next:null},g===null?(p=g=E,u=y):g=g.next=E,i|=C;if(d=d.next,d===null){if(d=l.shared.pending,d===null)break;C=d,d=C.next,C.next=null,l.lastBaseUpdate=C,l.shared.pending=null}}while(1);if(g===null&&(u=y),l.baseState=u,l.firstBaseUpdate=p,l.lastBaseUpdate=g,n=l.shared.interleaved,n!==null){l=n;do i|=l.lane,l=l.next;while(l!==n)}else o===null&&(l.shared.lanes=0);Ma|=i,e.lanes=i,e.memoizedState=y}}function o2(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],l=a.callback;if(l!==null){if(a.callback=null,a=t,typeof l!="function")throw Error(Y(191,l));l.call(a)}}}var F3=new Pm.Component().refs;function Bu(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:rn({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Sd={isMounted:function(e){return(e=e._reactInternals)?Oa(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=Gn(),l=Gr(e),o=hr(a,l);o.payload=n,t!=null&&(o.callback=t),n=Ur(e,o,l),n!==null&&(zt(n,e,l,a),gs(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=Gn(),l=Gr(e),o=hr(a,l);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Ur(e,o,l),n!==null&&(zt(n,e,l,a),gs(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Gn(),a=Gr(e),l=hr(t,a);l.tag=2,n!=null&&(l.callback=n),n=Ur(e,l,a),n!==null&&(zt(n,e,a,t),gs(n,e,a))}};function i2(e,n,t,a,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,i):n.prototype&&n.prototype.isPureReactComponent?!Xo(t,a)||!Xo(l,o):!0}function B3(e,n,t){var a=!1,l=Zr,o=n.contextType;return typeof o=="object"&&o!==null?o=Tt(o):(l=at(n)?$a:jn.current,a=n.contextTypes,o=(a=a!=null)?El(e,l):Zr),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Sd,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),n}function s2(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&Sd.enqueueReplaceState(n,n.state,null)}function Du(e,n,t,a){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs=F3,Zh(e);var o=n.contextType;typeof o=="object"&&o!==null?l.context=Tt(o):(o=at(n)?$a:jn.current,l.context=El(e,o)),l.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Bu(e,n,o,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&Sd.enqueueReplaceState(l,l.state,null),Ks(e,t,l,a),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function go(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Y(309));var a=t.stateNode}if(!a)throw Error(Y(147,e));var l=a,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var d=l.refs;d===F3&&(d=l.refs={}),i===null?delete d[o]:d[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(Y(284));if(!t._owner)throw Error(Y(290,e))}return e}function Xi(e,n){throw e=Object.prototype.toString.call(n),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function d2(e){var n=e._init;return n(e._payload)}function D3(e){function n(w,m){if(e){var b=w.deletions;b===null?(w.deletions=[m],w.flags|=16):b.push(m)}}function t(w,m){if(!e)return null;for(;m!==null;)n(w,m),m=m.sibling;return null}function a(w,m){for(w=new Map;m!==null;)m.key!==null?w.set(m.key,m):w.set(m.index,m),m=m.sibling;return w}function l(w,m){return w=Vr(w,m),w.index=0,w.sibling=null,w}function o(w,m,b){return w.index=b,e?(b=w.alternate,b!==null?(b=b.index,b<m?(w.flags|=2,m):b):(w.flags|=2,m)):(w.flags|=1048576,m)}function i(w){return e&&w.alternate===null&&(w.flags|=2),w}function d(w,m,b,v){return m===null||m.tag!==6?(m=Hc(b,w.mode,v),m.return=w,m):(m=l(m,b),m.return=w,m)}function u(w,m,b,v){var N=b.type;return N===sl?g(w,m,b.props.children,v,b.key):m!==null&&(m.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Er&&d2(N)===m.type)?(v=l(m,b.props),v.ref=go(w,m,b),v.return=w,v):(v=Cs(b.type,b.key,b.props,null,w.mode,v),v.ref=go(w,m,b),v.return=w,v)}function p(w,m,b,v){return m===null||m.tag!==4||m.stateNode.containerInfo!==b.containerInfo||m.stateNode.implementation!==b.implementation?(m=Gc(b,w.mode,v),m.return=w,m):(m=l(m,b.children||[]),m.return=w,m)}function g(w,m,b,v,N){return m===null||m.tag!==7?(m=Na(b,w.mode,v,N),m.return=w,m):(m=l(m,b),m.return=w,m)}function y(w,m,b){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Hc(""+m,w.mode,b),m.return=w,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case zi:return b=Cs(m.type,m.key,m.props,null,w.mode,b),b.ref=go(w,null,m),b.return=w,b;case il:return m=Gc(m,w.mode,b),m.return=w,m;case Er:var v=m._init;return y(w,v(m._payload),b)}if(ko(m)||uo(m))return m=Na(m,w.mode,b,null),m.return=w,m;Xi(w,m)}return null}function C(w,m,b,v){var N=m!==null?m.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return N!==null?null:d(w,m,""+b,v);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case zi:return b.key===N?u(w,m,b,v):null;case il:return b.key===N?p(w,m,b,v):null;case Er:return N=b._init,C(w,m,N(b._payload),v)}if(ko(b)||uo(b))return N!==null?null:g(w,m,b,v,null);Xi(w,b)}return null}function E(w,m,b,v,N){if(typeof v=="string"&&v!==""||typeof v=="number")return w=w.get(b)||null,d(m,w,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case zi:return w=w.get(v.key===null?b:v.key)||null,u(m,w,v,N);case il:return w=w.get(v.key===null?b:v.key)||null,p(m,w,v,N);case Er:var T=v._init;return E(w,m,b,T(v._payload),N)}if(ko(v)||uo(v))return w=w.get(b)||null,g(m,w,v,N,null);Xi(m,v)}return null}function I(w,m,b,v){for(var N=null,T=null,P=m,F=m=0,z=null;P!==null&&F<b.length;F++){P.index>F?(z=P,P=null):z=P.sibling;var Z=C(w,P,b[F],v);if(Z===null){P===null&&(P=z);break}e&&P&&Z.alternate===null&&n(w,P),m=o(Z,m,F),T===null?N=Z:T.sibling=Z,T=Z,P=z}if(F===b.length)return t(w,P),Je&&ga(w,F),N;if(P===null){for(;F<b.length;F++)P=y(w,b[F],v),P!==null&&(m=o(P,m,F),T===null?N=P:T.sibling=P,T=P);return Je&&ga(w,F),N}for(P=a(w,P);F<b.length;F++)z=E(P,w,F,b[F],v),z!==null&&(e&&z.alternate!==null&&P.delete(z.key===null?F:z.key),m=o(z,m,F),T===null?N=z:T.sibling=z,T=z);return e&&P.forEach(function(pe){return n(w,pe)}),Je&&ga(w,F),N}function k(w,m,b,v){var N=uo(b);if(typeof N!="function")throw Error(Y(150));if(b=N.call(b),b==null)throw Error(Y(151));for(var T=N=null,P=m,F=m=0,z=null,Z=b.next();P!==null&&!Z.done;F++,Z=b.next()){P.index>F?(z=P,P=null):z=P.sibling;var pe=C(w,P,Z.value,v);if(pe===null){P===null&&(P=z);break}e&&P&&pe.alternate===null&&n(w,P),m=o(pe,m,F),T===null?N=pe:T.sibling=pe,T=pe,P=z}if(Z.done)return t(w,P),Je&&ga(w,F),N;if(P===null){for(;!Z.done;F++,Z=b.next())Z=y(w,Z.value,v),Z!==null&&(m=o(Z,m,F),T===null?N=Z:T.sibling=Z,T=Z);return Je&&ga(w,F),N}for(P=a(w,P);!Z.done;F++,Z=b.next())Z=E(P,w,F,Z.value,v),Z!==null&&(e&&Z.alternate!==null&&P.delete(Z.key===null?F:Z.key),m=o(Z,m,F),T===null?N=Z:T.sibling=Z,T=Z);return e&&P.forEach(function(de){return n(w,de)}),Je&&ga(w,F),N}function M(w,m,b,v){if(typeof b=="object"&&b!==null&&b.type===sl&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case zi:e:{for(var N=b.key,T=m;T!==null;){if(T.key===N){if(N=b.type,N===sl){if(T.tag===7){t(w,T.sibling),m=l(T,b.props.children),m.return=w,w=m;break e}}else if(T.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Er&&d2(N)===T.type){t(w,T.sibling),m=l(T,b.props),m.ref=go(w,T,b),m.return=w,w=m;break e}t(w,T);break}else n(w,T);T=T.sibling}b.type===sl?(m=Na(b.props.children,w.mode,v,b.key),m.return=w,w=m):(v=Cs(b.type,b.key,b.props,null,w.mode,v),v.ref=go(w,m,b),v.return=w,w=v)}return i(w);case il:e:{for(T=b.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===b.containerInfo&&m.stateNode.implementation===b.implementation){t(w,m.sibling),m=l(m,b.children||[]),m.return=w,w=m;break e}else{t(w,m);break}else n(w,m);m=m.sibling}m=Gc(b,w.mode,v),m.return=w,w=m}return i(w);case Er:return T=b._init,M(w,m,T(b._payload),v)}if(ko(b))return I(w,m,b,v);if(uo(b))return k(w,m,b,v);Xi(w,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,m!==null&&m.tag===6?(t(w,m.sibling),m=l(m,b),m.return=w,w=m):(t(w,m),m=Hc(b,w.mode,v),m.return=w,w=m),i(w)):t(w,m)}return M}var Al=D3(!0),j3=D3(!1),yi={},Qt=Xr(yi),ti=Xr(yi),ri=Xr(yi);function ka(e){if(e===yi)throw Error(Y(174));return e}function qh(e,n){switch(Ge(ri,n),Ge(ti,e),Ge(Qt,yi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:vu(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=vu(n,e)}Xe(Qt),Ge(Qt,n)}function Rl(){Xe(Qt),Xe(ti),Xe(ri)}function z3(e){ka(ri.current);var n=ka(Qt.current),t=vu(n,e.type);n!==t&&(Ge(ti,e),Ge(Qt,t))}function Kh(e){ti.current===e&&(Xe(Qt),Xe(ti))}var nn=Xr(0);function Qs(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Bc=[];function Qh(){for(var e=0;e<Bc.length;e++)Bc[e]._workInProgressVersionPrimary=null;Bc.length=0}var vs=wr.ReactCurrentDispatcher,Dc=wr.ReactCurrentBatchConfig,Ea=0,tn=null,bn=null,kn=null,Xs=!1,Fo=!1,ai=0,w7=0;function Fn(){throw Error(Y(321))}function Xh(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Wt(e[t],n[t]))return!1;return!0}function Jh(e,n,t,a,l,o){if(Ea=o,tn=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,vs.current=e===null||e.memoizedState===null?S7:T7,e=t(a,l),Fo){o=0;do{if(Fo=!1,ai=0,25<=o)throw Error(Y(301));o+=1,kn=bn=null,n.updateQueue=null,vs.current=L7,e=t(a,l)}while(Fo)}if(vs.current=Js,n=bn!==null&&bn.next!==null,Ea=0,kn=bn=tn=null,Xs=!1,n)throw Error(Y(300));return e}function ep(){var e=ai!==0;return ai=0,e}function Yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kn===null?tn.memoizedState=kn=e:kn=kn.next=e,kn}function Lt(){if(bn===null){var e=tn.alternate;e=e!==null?e.memoizedState:null}else e=bn.next;var n=kn===null?tn.memoizedState:kn.next;if(n!==null)kn=n,bn=e;else{if(e===null)throw Error(Y(310));bn=e,e={memoizedState:bn.memoizedState,baseState:bn.baseState,baseQueue:bn.baseQueue,queue:bn.queue,next:null},kn===null?tn.memoizedState=kn=e:kn=kn.next=e}return kn}function li(e,n){return typeof n=="function"?n(e):n}function jc(e){var n=Lt(),t=n.queue;if(t===null)throw Error(Y(311));t.lastRenderedReducer=e;var a=bn,l=a.baseQueue,o=t.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}a.baseQueue=l=o,t.pending=null}if(l!==null){o=l.next,a=a.baseState;var d=i=null,u=null,p=o;do{var g=p.lane;if((Ea&g)===g)u!==null&&(u=u.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),a=p.hasEagerState?p.eagerState:e(a,p.action);else{var y={lane:g,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};u===null?(d=u=y,i=a):u=u.next=y,tn.lanes|=g,Ma|=g}p=p.next}while(p!==null&&p!==o);u===null?i=a:u.next=d,Wt(a,n.memoizedState)||(tt=!0),n.memoizedState=a,n.baseState=i,n.baseQueue=u,t.lastRenderedState=a}if(e=t.interleaved,e!==null){l=e;do o=l.lane,tn.lanes|=o,Ma|=o,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function zc(e){var n=Lt(),t=n.queue;if(t===null)throw Error(Y(311));t.lastRenderedReducer=e;var a=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Wt(o,n.memoizedState)||(tt=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,a]}function W3(){}function U3(e,n){var t=tn,a=Lt(),l=n(),o=!Wt(a.memoizedState,l);if(o&&(a.memoizedState=l,tt=!0),a=a.queue,np(V3.bind(null,t,a,e),[e]),a.getSnapshot!==n||o||kn!==null&&kn.memoizedState.tag&1){if(t.flags|=2048,oi(9,G3.bind(null,t,a,l,n),void 0,null),Sn===null)throw Error(Y(349));Ea&30||H3(t,n,l)}return l}function H3(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=tn.updateQueue,n===null?(n={lastEffect:null,stores:null},tn.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function G3(e,n,t,a){n.value=t,n.getSnapshot=a,Y3(n)&&Z3(e)}function V3(e,n,t){return t(function(){Y3(n)&&Z3(e)})}function Y3(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Wt(e,t)}catch{return!0}}function Z3(e){var n=gr(e,1);n!==null&&zt(n,e,1,-1)}function c2(e){var n=Yt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:li,lastRenderedState:e},n.queue=e,e=e.dispatch=k7.bind(null,tn,e),[n.memoizedState,e]}function oi(e,n,t,a){return e={tag:e,create:n,destroy:t,deps:a,next:null},n=tn.updateQueue,n===null?(n={lastEffect:null,stores:null},tn.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e)),e}function q3(){return Lt().memoizedState}function bs(e,n,t,a){var l=Yt();tn.flags|=e,l.memoizedState=oi(1|n,t,void 0,a===void 0?null:a)}function Td(e,n,t,a){var l=Lt();a=a===void 0?null:a;var o=void 0;if(bn!==null){var i=bn.memoizedState;if(o=i.destroy,a!==null&&Xh(a,i.deps)){l.memoizedState=oi(n,t,o,a);return}}tn.flags|=e,l.memoizedState=oi(1|n,t,o,a)}function u2(e,n){return bs(8390656,8,e,n)}function np(e,n){return Td(2048,8,e,n)}function K3(e,n){return Td(4,2,e,n)}function Q3(e,n){return Td(4,4,e,n)}function X3(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function J3(e,n,t){return t=t!=null?t.concat([e]):null,Td(4,4,X3.bind(null,n,e),t)}function tp(){}function e5(e,n){var t=Lt();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&Xh(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function n5(e,n){var t=Lt();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&Xh(n,a[1])?a[0]:(e=e(),t.memoizedState=[e,n],e)}function t5(e,n,t){return Ea&21?(Wt(t,n)||(t=l3(),tn.lanes|=t,Ma|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=t)}function x7(e,n){var t=Be;Be=t!==0&&4>t?t:4,e(!0);var a=Dc.transition;Dc.transition={};try{e(!1),n()}finally{Be=t,Dc.transition=a}}function r5(){return Lt().memoizedState}function C7(e,n,t){var a=Gr(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},a5(e))l5(n,t);else if(t=P3(e,n,t,a),t!==null){var l=Gn();zt(t,e,a,l),o5(t,n,a)}}function k7(e,n,t){var a=Gr(e),l={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(a5(e))l5(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,d=o(i,t);if(l.hasEagerState=!0,l.eagerState=d,Wt(d,i)){var u=n.interleaved;u===null?(l.next=l,Yh(n)):(l.next=u.next,u.next=l),n.interleaved=l;return}}catch{}finally{}t=P3(e,n,l,a),t!==null&&(l=Gn(),zt(t,e,a,l),o5(t,n,a))}}function a5(e){var n=e.alternate;return e===tn||n!==null&&n===tn}function l5(e,n){Fo=Xs=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function o5(e,n,t){if(t&4194240){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Ah(e,t)}}var Js={readContext:Tt,useCallback:Fn,useContext:Fn,useEffect:Fn,useImperativeHandle:Fn,useInsertionEffect:Fn,useLayoutEffect:Fn,useMemo:Fn,useReducer:Fn,useRef:Fn,useState:Fn,useDebugValue:Fn,useDeferredValue:Fn,useTransition:Fn,useMutableSource:Fn,useSyncExternalStore:Fn,useId:Fn,unstable_isNewReconciler:!1},S7={readContext:Tt,useCallback:function(e,n){return Yt().memoizedState=[e,n===void 0?null:n],e},useContext:Tt,useEffect:u2,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,bs(4194308,4,X3.bind(null,n,e),t)},useLayoutEffect:function(e,n){return bs(4194308,4,e,n)},useInsertionEffect:function(e,n){return bs(4,2,e,n)},useMemo:function(e,n){var t=Yt();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var a=Yt();return n=t!==void 0?t(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=C7.bind(null,tn,e),[a.memoizedState,e]},useRef:function(e){var n=Yt();return e={current:e},n.memoizedState=e},useState:c2,useDebugValue:tp,useDeferredValue:function(e){return Yt().memoizedState=e},useTransition:function(){var e=c2(!1),n=e[0];return e=x7.bind(null,e[1]),Yt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var a=tn,l=Yt();if(Je){if(t===void 0)throw Error(Y(407));t=t()}else{if(t=n(),Sn===null)throw Error(Y(349));Ea&30||H3(a,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,u2(V3.bind(null,a,o,e),[e]),a.flags|=2048,oi(9,G3.bind(null,a,o,t,n),void 0,null),t},useId:function(){var e=Yt(),n=Sn.identifierPrefix;if(Je){var t=cr,a=dr;t=(a&~(1<<32-jt(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=ai++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=w7++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},T7={readContext:Tt,useCallback:e5,useContext:Tt,useEffect:np,useImperativeHandle:J3,useInsertionEffect:K3,useLayoutEffect:Q3,useMemo:n5,useReducer:jc,useRef:q3,useState:function(){return jc(li)},useDebugValue:tp,useDeferredValue:function(e){var n=Lt();return t5(n,bn.memoizedState,e)},useTransition:function(){var e=jc(li)[0],n=Lt().memoizedState;return[e,n]},useMutableSource:W3,useSyncExternalStore:U3,useId:r5,unstable_isNewReconciler:!1},L7={readContext:Tt,useCallback:e5,useContext:Tt,useEffect:np,useImperativeHandle:J3,useInsertionEffect:K3,useLayoutEffect:Q3,useMemo:n5,useReducer:zc,useRef:q3,useState:function(){return zc(li)},useDebugValue:tp,useDeferredValue:function(e){var n=Lt();return bn===null?n.memoizedState=e:t5(n,bn.memoizedState,e)},useTransition:function(){var e=zc(li)[0],n=Lt().memoizedState;return[e,n]},useMutableSource:W3,useSyncExternalStore:U3,useId:r5,unstable_isNewReconciler:!1};function Pl(e,n){try{var t="",a=n;do t+=ey(a),a=a.return;while(a);var l=t}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:l,digest:null}}function Wc(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ju(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var _7=typeof WeakMap=="function"?WeakMap:Map;function i5(e,n,t){t=hr(-1,t),t.tag=3,t.payload={element:null};var a=n.value;return t.callback=function(){nd||(nd=!0,Ku=a),ju(e,n)},t}function s5(e,n,t){t=hr(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var l=n.value;t.payload=function(){return a(l)},t.callback=function(){ju(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){ju(e,n),typeof a!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function h2(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new _7;var l=new Set;a.set(n,l)}else l=a.get(n),l===void 0&&(l=new Set,a.set(n,l));l.has(t)||(l.add(t),e=z7.bind(null,e,n,t),n.then(e,e))}function p2(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function f2(e,n,t,a,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=hr(-1,1),n.tag=2,Ur(t,n,1))),t.lanes|=1),e)}var N7=wr.ReactCurrentOwner,tt=!1;function Un(e,n,t,a){n.child=e===null?j3(n,null,t,a):Al(n,e.child,t,a)}function m2(e,n,t,a,l){t=t.render;var o=n.ref;return Ll(n,l),a=Jh(e,n,t,a,o,l),t=ep(),e!==null&&!tt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,vr(e,n,l)):(Je&&t&&zh(n),n.flags|=1,Un(e,n,a,l),n.child)}function g2(e,n,t,a,l){if(e===null){var o=t.type;return typeof o=="function"&&!cp(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,d5(e,n,o,a,l)):(e=Cs(t.type,null,a,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:Xo,t(i,a)&&e.ref===n.ref)return vr(e,n,l)}return n.flags|=1,e=Vr(o,a),e.ref=n.ref,e.return=n,n.child=e}function d5(e,n,t,a,l){if(e!==null){var o=e.memoizedProps;if(Xo(o,a)&&e.ref===n.ref)if(tt=!1,n.pendingProps=a=o,(e.lanes&l)!==0)e.flags&131072&&(tt=!0);else return n.lanes=e.lanes,vr(e,n,l)}return zu(e,n,t,a,l)}function c5(e,n,t){var a=n.pendingProps,l=a.children,o=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(bl,dt),dt|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Ge(bl,dt),dt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=o!==null?o.baseLanes:t,Ge(bl,dt),dt|=a}else o!==null?(a=o.baseLanes|t,n.memoizedState=null):a=t,Ge(bl,dt),dt|=a;return Un(e,n,l,t),n.child}function u5(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function zu(e,n,t,a,l){var o=at(t)?$a:jn.current;return o=El(n,o),Ll(n,l),t=Jh(e,n,t,a,o,l),a=ep(),e!==null&&!tt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,vr(e,n,l)):(Je&&a&&zh(n),n.flags|=1,Un(e,n,t,l),n.child)}function v2(e,n,t,a,l){if(at(t)){var o=!0;Gs(n)}else o=!1;if(Ll(n,l),n.stateNode===null)ys(e,n),B3(n,t,a),Du(n,t,a,l),a=!0;else if(e===null){var i=n.stateNode,d=n.memoizedProps;i.props=d;var u=i.context,p=t.contextType;typeof p=="object"&&p!==null?p=Tt(p):(p=at(t)?$a:jn.current,p=El(n,p));var g=t.getDerivedStateFromProps,y=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==a||u!==p)&&s2(n,i,a,p),Mr=!1;var C=n.memoizedState;i.state=C,Ks(n,a,i,l),u=n.memoizedState,d!==a||C!==u||rt.current||Mr?(typeof g=="function"&&(Bu(n,t,g,a),u=n.memoizedState),(d=Mr||i2(n,t,d,a,C,u,p))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=u),i.props=a,i.state=u,i.context=p,a=d):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{i=n.stateNode,O3(e,n),d=n.memoizedProps,p=n.type===n.elementType?d:Rt(n.type,d),i.props=p,y=n.pendingProps,C=i.context,u=t.contextType,typeof u=="object"&&u!==null?u=Tt(u):(u=at(t)?$a:jn.current,u=El(n,u));var E=t.getDerivedStateFromProps;(g=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==y||C!==u)&&s2(n,i,a,u),Mr=!1,C=n.memoizedState,i.state=C,Ks(n,a,i,l);var I=n.memoizedState;d!==y||C!==I||rt.current||Mr?(typeof E=="function"&&(Bu(n,t,E,a),I=n.memoizedState),(p=Mr||i2(n,t,p,a,C,I,u)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,I,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,I,u)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=I),i.props=a,i.state=I,i.context=u,a=p):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(n.flags|=1024),a=!1)}return Wu(e,n,t,a,o,l)}function Wu(e,n,t,a,l,o){u5(e,n);var i=(n.flags&128)!==0;if(!a&&!i)return l&&t2(n,t,!1),vr(e,n,o);a=n.stateNode,N7.current=n;var d=i&&typeof t.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&i?(n.child=Al(n,e.child,null,o),n.child=Al(n,null,d,o)):Un(e,n,d,o),n.memoizedState=a.state,l&&t2(n,t,!0),n.child}function h5(e){var n=e.stateNode;n.pendingContext?n2(e,n.pendingContext,n.pendingContext!==n.context):n.context&&n2(e,n.context,!1),qh(e,n.containerInfo)}function b2(e,n,t,a,l){return Ml(),Uh(l),n.flags|=256,Un(e,n,t,a),n.child}var Uu={dehydrated:null,treeContext:null,retryLane:0};function Hu(e){return{baseLanes:e,cachePool:null,transitions:null}}function p5(e,n,t){var a=n.pendingProps,l=nn.current,o=!1,i=(n.flags&128)!==0,d;if((d=i)||(d=e!==null&&e.memoizedState===null?!1:(l&2)!==0),d?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Ge(nn,l&1),e===null)return Ou(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=a.children,e=a.fallback,o?(a=n.mode,o=n.child,i={mode:"hidden",children:i},!(a&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Nd(i,a,0,null),e=Na(e,a,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Hu(t),n.memoizedState=Uu,e):rp(n,i));if(l=e.memoizedState,l!==null&&(d=l.dehydrated,d!==null))return $7(e,n,i,a,d,l,t);if(o){o=a.fallback,i=n.mode,l=e.child,d=l.sibling;var u={mode:"hidden",children:a.children};return!(i&1)&&n.child!==l?(a=n.child,a.childLanes=0,a.pendingProps=u,n.deletions=null):(a=Vr(l,u),a.subtreeFlags=l.subtreeFlags&14680064),d!==null?o=Vr(d,o):(o=Na(o,i,t,null),o.flags|=2),o.return=n,a.return=n,a.sibling=o,n.child=a,a=o,o=n.child,i=e.child.memoizedState,i=i===null?Hu(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=Uu,a}return o=e.child,e=o.sibling,a=Vr(o,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function rp(e,n){return n=Nd({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ji(e,n,t,a){return a!==null&&Uh(a),Al(n,e.child,null,t),e=rp(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function $7(e,n,t,a,l,o,i){if(t)return n.flags&256?(n.flags&=-257,a=Wc(Error(Y(422))),Ji(e,n,i,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=a.fallback,l=n.mode,a=Nd({mode:"visible",children:a.children},l,0,null),o=Na(o,l,i,null),o.flags|=2,a.return=n,o.return=n,a.sibling=o,n.child=a,n.mode&1&&Al(n,e.child,null,i),n.child.memoizedState=Hu(i),n.memoizedState=Uu,o);if(!(n.mode&1))return Ji(e,n,i,null);if(l.data==="$!"){if(a=l.nextSibling&&l.nextSibling.dataset,a)var d=a.dgst;return a=d,o=Error(Y(419)),a=Wc(o,a,void 0),Ji(e,n,i,a)}if(d=(i&e.childLanes)!==0,tt||d){if(a=Sn,a!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(a.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,gr(e,l),zt(a,e,l,-1))}return dp(),a=Wc(Error(Y(421))),Ji(e,n,i,a)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=W7.bind(null,e),l._reactRetry=n,null):(e=o.treeContext,ft=Wr(l.nextSibling),mt=n,Je=!0,Ft=null,e!==null&&(xt[Ct++]=dr,xt[Ct++]=cr,xt[Ct++]=Ia,dr=e.id,cr=e.overflow,Ia=n),n=rp(n,a.children),n.flags|=4096,n)}function y2(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Fu(e.return,n,t)}function Uc(e,n,t,a,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=t,o.tailMode=l)}function f5(e,n,t){var a=n.pendingProps,l=a.revealOrder,o=a.tail;if(Un(e,n,a.children,t),a=nn.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&y2(e,t,n);else if(e.tag===19)y2(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Ge(nn,a),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Qs(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Uc(n,!1,l,t,o);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Qs(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Uc(n,!0,t,null,o);break;case"together":Uc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ys(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function vr(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ma|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(Y(153));if(n.child!==null){for(e=n.child,t=Vr(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Vr(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function I7(e,n,t){switch(n.tag){case 3:h5(n),Ml();break;case 5:z3(n);break;case 1:at(n.type)&&Gs(n);break;case 4:qh(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,l=n.memoizedProps.value;Ge(Zs,a._currentValue),a._currentValue=l;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(Ge(nn,nn.current&1),n.flags|=128,null):t&n.child.childLanes?p5(e,n,t):(Ge(nn,nn.current&1),e=vr(e,n,t),e!==null?e.sibling:null);Ge(nn,nn.current&1);break;case 19:if(a=(t&n.childLanes)!==0,e.flags&128){if(a)return f5(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ge(nn,nn.current),a)break;return null;case 22:case 23:return n.lanes=0,c5(e,n,t)}return vr(e,n,t)}var m5,Gu,g5,v5;m5=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Gu=function(){};g5=function(e,n,t,a){var l=e.memoizedProps;if(l!==a){e=n.stateNode,ka(Qt.current);var o=null;switch(t){case"input":l=pu(e,l),a=pu(e,a),o=[];break;case"select":l=rn({},l,{value:void 0}),a=rn({},a,{value:void 0}),o=[];break;case"textarea":l=gu(e,l),a=gu(e,a),o=[];break;default:typeof l.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Us)}bu(t,a);var i;t=null;for(p in l)if(!a.hasOwnProperty(p)&&l.hasOwnProperty(p)&&l[p]!=null)if(p==="style"){var d=l[p];for(i in d)d.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Go.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in a){var u=a[p];if(d=l!=null?l[p]:void 0,a.hasOwnProperty(p)&&u!==d&&(u!=null||d!=null))if(p==="style")if(d){for(i in d)!d.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in u)u.hasOwnProperty(i)&&d[i]!==u[i]&&(t||(t={}),t[i]=u[i])}else t||(o||(o=[]),o.push(p,t)),t=u;else p==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,d=d?d.__html:void 0,u!=null&&d!==u&&(o=o||[]).push(p,u)):p==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(p,""+u):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Go.hasOwnProperty(p)?(u!=null&&p==="onScroll"&&Ke("scroll",e),o||d===u||(o=[])):(o=o||[]).push(p,u))}t&&(o=o||[]).push("style",t);var p=o;(n.updateQueue=p)&&(n.flags|=4)}};v5=function(e,n,t,a){t!==a&&(n.flags|=4)};function vo(e,n){if(!Je)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Bn(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&14680064,a|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function E7(e,n,t){var a=n.pendingProps;switch(Wh(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bn(n),null;case 1:return at(n.type)&&Hs(),Bn(n),null;case 3:return a=n.stateNode,Rl(),Xe(rt),Xe(jn),Qh(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Qi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ft!==null&&(Ju(Ft),Ft=null))),Gu(e,n),Bn(n),null;case 5:Kh(n);var l=ka(ri.current);if(t=n.type,e!==null&&n.stateNode!=null)g5(e,n,t,a,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(Y(166));return Bn(n),null}if(e=ka(Qt.current),Qi(n)){a=n.stateNode,t=n.type;var o=n.memoizedProps;switch(a[qt]=n,a[ni]=o,e=(n.mode&1)!==0,t){case"dialog":Ke("cancel",a),Ke("close",a);break;case"iframe":case"object":case"embed":Ke("load",a);break;case"video":case"audio":for(l=0;l<To.length;l++)Ke(To[l],a);break;case"source":Ke("error",a);break;case"img":case"image":case"link":Ke("error",a),Ke("load",a);break;case"details":Ke("toggle",a);break;case"input":N1(a,o),Ke("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!o.multiple},Ke("invalid",a);break;case"textarea":I1(a,o),Ke("invalid",a)}bu(t,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var d=o[i];i==="children"?typeof d=="string"?a.textContent!==d&&(o.suppressHydrationWarning!==!0&&Ki(a.textContent,d,e),l=["children",d]):typeof d=="number"&&a.textContent!==""+d&&(o.suppressHydrationWarning!==!0&&Ki(a.textContent,d,e),l=["children",""+d]):Go.hasOwnProperty(i)&&d!=null&&i==="onScroll"&&Ke("scroll",a)}switch(t){case"input":Wi(a),$1(a,o,!0);break;case"textarea":Wi(a),E1(a);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(a.onclick=Us)}a=l,n.updateQueue=a,a!==null&&(n.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hm(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=i.createElement(t,{is:a.is}):(e=i.createElement(t),t==="select"&&(i=e,a.multiple?i.multiple=!0:a.size&&(i.size=a.size))):e=i.createElementNS(e,t),e[qt]=n,e[ni]=a,m5(e,n,!1,!1),n.stateNode=e;e:{switch(i=yu(t,a),t){case"dialog":Ke("cancel",e),Ke("close",e),l=a;break;case"iframe":case"object":case"embed":Ke("load",e),l=a;break;case"video":case"audio":for(l=0;l<To.length;l++)Ke(To[l],e);l=a;break;case"source":Ke("error",e),l=a;break;case"img":case"image":case"link":Ke("error",e),Ke("load",e),l=a;break;case"details":Ke("toggle",e),l=a;break;case"input":N1(e,a),l=pu(e,a),Ke("invalid",e);break;case"option":l=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},l=rn({},a,{value:void 0}),Ke("invalid",e);break;case"textarea":I1(e,a),l=gu(e,a),Ke("invalid",e);break;default:l=a}bu(t,l),d=l;for(o in d)if(d.hasOwnProperty(o)){var u=d[o];o==="style"?Ym(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Gm(e,u)):o==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Vo(e,u):typeof u=="number"&&Vo(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Go.hasOwnProperty(o)?u!=null&&o==="onScroll"&&Ke("scroll",e):u!=null&&_h(e,o,u,i))}switch(t){case"input":Wi(e),$1(e,a,!1);break;case"textarea":Wi(e),E1(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Yr(a.value));break;case"select":e.multiple=!!a.multiple,o=a.value,o!=null?Cl(e,!!a.multiple,o,!1):a.defaultValue!=null&&Cl(e,!!a.multiple,a.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Us)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Bn(n),null;case 6:if(e&&n.stateNode!=null)v5(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(Y(166));if(t=ka(ri.current),ka(Qt.current),Qi(n)){if(a=n.stateNode,t=n.memoizedProps,a[qt]=n,(o=a.nodeValue!==t)&&(e=mt,e!==null))switch(e.tag){case 3:Ki(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ki(a.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[qt]=n,n.stateNode=a}return Bn(n),null;case 13:if(Xe(nn),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Je&&ft!==null&&n.mode&1&&!(n.flags&128))R3(),Ml(),n.flags|=98560,o=!1;else if(o=Qi(n),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(Y(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Y(317));o[qt]=n}else Ml(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Bn(n),o=!1}else Ft!==null&&(Ju(Ft),Ft=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||nn.current&1?yn===0&&(yn=3):dp())),n.updateQueue!==null&&(n.flags|=4),Bn(n),null);case 4:return Rl(),Gu(e,n),e===null&&Jo(n.stateNode.containerInfo),Bn(n),null;case 10:return Vh(n.type._context),Bn(n),null;case 17:return at(n.type)&&Hs(),Bn(n),null;case 19:if(Xe(nn),o=n.memoizedState,o===null)return Bn(n),null;if(a=(n.flags&128)!==0,i=o.rendering,i===null)if(a)vo(o,!1);else{if(yn!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Qs(e),i!==null){for(n.flags|=128,vo(o,!1),a=i.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=t,t=n.child;t!==null;)o=t,e=a,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Ge(nn,nn.current&1|2),n.child}e=e.sibling}o.tail!==null&&sn()>Ol&&(n.flags|=128,a=!0,vo(o,!1),n.lanes=4194304)}else{if(!a)if(e=Qs(i),e!==null){if(n.flags|=128,a=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),vo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Je)return Bn(n),null}else 2*sn()-o.renderingStartTime>Ol&&t!==1073741824&&(n.flags|=128,a=!0,vo(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=sn(),n.sibling=null,t=nn.current,Ge(nn,a?t&1|2:t&1),n):(Bn(n),null);case 22:case 23:return sp(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?dt&1073741824&&(Bn(n),n.subtreeFlags&6&&(n.flags|=8192)):Bn(n),null;case 24:return null;case 25:return null}throw Error(Y(156,n.tag))}function M7(e,n){switch(Wh(n),n.tag){case 1:return at(n.type)&&Hs(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Rl(),Xe(rt),Xe(jn),Qh(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Kh(n),null;case 13:if(Xe(nn),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(Y(340));Ml()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Xe(nn),null;case 4:return Rl(),null;case 10:return Vh(n.type._context),null;case 22:case 23:return sp(),null;case 24:return null;default:return null}}var es=!1,Dn=!1,A7=typeof WeakSet=="function"?WeakSet:Set,ne=null;function vl(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){on(e,n,a)}else t.current=null}function Vu(e,n,t){try{t()}catch(a){on(e,n,a)}}var w2=!1;function R7(e,n){if($u=js,e=x3(),jh(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,d=-1,u=-1,p=0,g=0,y=e,C=null;n:for(;;){for(var E;y!==t||l!==0&&y.nodeType!==3||(d=i+l),y!==o||a!==0&&y.nodeType!==3||(u=i+a),y.nodeType===3&&(i+=y.nodeValue.length),(E=y.firstChild)!==null;)C=y,y=E;for(;;){if(y===e)break n;if(C===t&&++p===l&&(d=i),C===o&&++g===a&&(u=i),(E=y.nextSibling)!==null)break;y=C,C=y.parentNode}y=E}t=d===-1||u===-1?null:{start:d,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Iu={focusedElem:e,selectionRange:t},js=!1,ne=n;ne!==null;)if(n=ne,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ne=e;else for(;ne!==null;){n=ne;try{var I=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var k=I.memoizedProps,M=I.memoizedState,w=n.stateNode,m=w.getSnapshotBeforeUpdate(n.elementType===n.type?k:Rt(n.type,k),M);w.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var b=n.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(v){on(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,ne=e;break}ne=n.return}return I=w2,w2=!1,I}function Bo(e,n,t){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Vu(n,t,o)}l=l.next}while(l!==a)}}function Ld(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==n)}}function Yu(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function b5(e){var n=e.alternate;n!==null&&(e.alternate=null,b5(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[qt],delete n[ni],delete n[Au],delete n[g7],delete n[v7])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function y5(e){return e.tag===5||e.tag===3||e.tag===4}function x2(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||y5(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zu(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Us));else if(a!==4&&(e=e.child,e!==null))for(Zu(e,n,t),e=e.sibling;e!==null;)Zu(e,n,t),e=e.sibling}function qu(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(qu(e,n,t),e=e.sibling;e!==null;)qu(e,n,t),e=e.sibling}var _n=null,Ot=!1;function Nr(e,n,t){for(t=t.child;t!==null;)w5(e,n,t),t=t.sibling}function w5(e,n,t){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(bd,t)}catch{}switch(t.tag){case 5:Dn||vl(t,n);case 6:var a=_n,l=Ot;_n=null,Nr(e,n,t),_n=a,Ot=l,_n!==null&&(Ot?(e=_n,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):_n.removeChild(t.stateNode));break;case 18:_n!==null&&(Ot?(e=_n,t=t.stateNode,e.nodeType===8?Oc(e.parentNode,t):e.nodeType===1&&Oc(e,t),Ko(e)):Oc(_n,t.stateNode));break;case 4:a=_n,l=Ot,_n=t.stateNode.containerInfo,Ot=!0,Nr(e,n,t),_n=a,Ot=l;break;case 0:case 11:case 14:case 15:if(!Dn&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){l=a=a.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Vu(t,n,i),l=l.next}while(l!==a)}Nr(e,n,t);break;case 1:if(!Dn&&(vl(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(d){on(t,n,d)}Nr(e,n,t);break;case 21:Nr(e,n,t);break;case 22:t.mode&1?(Dn=(a=Dn)||t.memoizedState!==null,Nr(e,n,t),Dn=a):Nr(e,n,t);break;default:Nr(e,n,t)}}function C2(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new A7),n.forEach(function(a){var l=U7.bind(null,e,a);t.has(a)||(t.add(a),a.then(l,l))})}}function Mt(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];try{var o=e,i=n,d=i;e:for(;d!==null;){switch(d.tag){case 5:_n=d.stateNode,Ot=!1;break e;case 3:_n=d.stateNode.containerInfo,Ot=!0;break e;case 4:_n=d.stateNode.containerInfo,Ot=!0;break e}d=d.return}if(_n===null)throw Error(Y(160));w5(o,i,l),_n=null,Ot=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(p){on(l,n,p)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)x5(n,e),n=n.sibling}function x5(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(n,e),Ut(e),a&4){try{Bo(3,e,e.return),Ld(3,e)}catch(k){on(e,e.return,k)}try{Bo(5,e,e.return)}catch(k){on(e,e.return,k)}}break;case 1:Mt(n,e),Ut(e),a&512&&t!==null&&vl(t,t.return);break;case 5:if(Mt(n,e),Ut(e),a&512&&t!==null&&vl(t,t.return),e.flags&32){var l=e.stateNode;try{Vo(l,"")}catch(k){on(e,e.return,k)}}if(a&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,d=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{d==="input"&&o.type==="radio"&&o.name!=null&&Wm(l,o),yu(d,i);var p=yu(d,o);for(i=0;i<u.length;i+=2){var g=u[i],y=u[i+1];g==="style"?Ym(l,y):g==="dangerouslySetInnerHTML"?Gm(l,y):g==="children"?Vo(l,y):_h(l,g,y,p)}switch(d){case"input":fu(l,o);break;case"textarea":Um(l,o);break;case"select":var C=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var E=o.value;E!=null?Cl(l,!!o.multiple,E,!1):C!==!!o.multiple&&(o.defaultValue!=null?Cl(l,!!o.multiple,o.defaultValue,!0):Cl(l,!!o.multiple,o.multiple?[]:"",!1))}l[ni]=o}catch(k){on(e,e.return,k)}}break;case 6:if(Mt(n,e),Ut(e),a&4){if(e.stateNode===null)throw Error(Y(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(k){on(e,e.return,k)}}break;case 3:if(Mt(n,e),Ut(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Ko(n.containerInfo)}catch(k){on(e,e.return,k)}break;case 4:Mt(n,e),Ut(e);break;case 13:Mt(n,e),Ut(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(op=sn())),a&4&&C2(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(Dn=(p=Dn)||g,Mt(n,e),Dn=p):Mt(n,e),Ut(e),a&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!g&&e.mode&1)for(ne=e,g=e.child;g!==null;){for(y=ne=g;ne!==null;){switch(C=ne,E=C.child,C.tag){case 0:case 11:case 14:case 15:Bo(4,C,C.return);break;case 1:vl(C,C.return);var I=C.stateNode;if(typeof I.componentWillUnmount=="function"){a=C,t=C.return;try{n=a,I.props=n.memoizedProps,I.state=n.memoizedState,I.componentWillUnmount()}catch(k){on(a,t,k)}}break;case 5:vl(C,C.return);break;case 22:if(C.memoizedState!==null){S2(y);continue}}E!==null?(E.return=C,ne=E):S2(y)}g=g.sibling}e:for(g=null,y=e;;){if(y.tag===5){if(g===null){g=y;try{l=y.stateNode,p?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(d=y.stateNode,u=y.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,d.style.display=Vm("display",i))}catch(k){on(e,e.return,k)}}}else if(y.tag===6){if(g===null)try{y.stateNode.nodeValue=p?"":y.memoizedProps}catch(k){on(e,e.return,k)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;g===y&&(g=null),y=y.return}g===y&&(g=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Mt(n,e),Ut(e),a&4&&C2(e);break;case 21:break;default:Mt(n,e),Ut(e)}}function Ut(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(y5(t)){var a=t;break e}t=t.return}throw Error(Y(160))}switch(a.tag){case 5:var l=a.stateNode;a.flags&32&&(Vo(l,""),a.flags&=-33);var o=x2(e);qu(e,o,l);break;case 3:case 4:var i=a.stateNode.containerInfo,d=x2(e);Zu(e,d,i);break;default:throw Error(Y(161))}}catch(u){on(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function P7(e,n,t){ne=e,C5(e)}function C5(e,n,t){for(var a=(e.mode&1)!==0;ne!==null;){var l=ne,o=l.child;if(l.tag===22&&a){var i=l.memoizedState!==null||es;if(!i){var d=l.alternate,u=d!==null&&d.memoizedState!==null||Dn;d=es;var p=Dn;if(es=i,(Dn=u)&&!p)for(ne=l;ne!==null;)i=ne,u=i.child,i.tag===22&&i.memoizedState!==null?T2(l):u!==null?(u.return=i,ne=u):T2(l);for(;o!==null;)ne=o,C5(o),o=o.sibling;ne=l,es=d,Dn=p}k2(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,ne=o):k2(e)}}function k2(e){for(;ne!==null;){var n=ne;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Dn||Ld(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!Dn)if(t===null)a.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Rt(n.type,t.memoizedProps);a.componentDidUpdate(l,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&o2(n,o,a);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}o2(n,i,t)}break;case 5:var d=n.stateNode;if(t===null&&n.flags&4){t=d;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var p=n.alternate;if(p!==null){var g=p.memoizedState;if(g!==null){var y=g.dehydrated;y!==null&&Ko(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}Dn||n.flags&512&&Yu(n)}catch(C){on(n,n.return,C)}}if(n===e){ne=null;break}if(t=n.sibling,t!==null){t.return=n.return,ne=t;break}ne=n.return}}function S2(e){for(;ne!==null;){var n=ne;if(n===e){ne=null;break}var t=n.sibling;if(t!==null){t.return=n.return,ne=t;break}ne=n.return}}function T2(e){for(;ne!==null;){var n=ne;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ld(4,n)}catch(u){on(n,t,u)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var l=n.return;try{a.componentDidMount()}catch(u){on(n,l,u)}}var o=n.return;try{Yu(n)}catch(u){on(n,o,u)}break;case 5:var i=n.return;try{Yu(n)}catch(u){on(n,i,u)}}}catch(u){on(n,n.return,u)}if(n===e){ne=null;break}var d=n.sibling;if(d!==null){d.return=n.return,ne=d;break}ne=n.return}}var O7=Math.ceil,ed=wr.ReactCurrentDispatcher,ap=wr.ReactCurrentOwner,St=wr.ReactCurrentBatchConfig,Ee=0,Sn=null,hn=null,Mn=0,dt=0,bl=Xr(0),yn=0,ii=null,Ma=0,_d=0,lp=0,Do=null,nt=null,op=0,Ol=1/0,or=null,nd=!1,Ku=null,Hr=null,ns=!1,Or=null,td=0,jo=0,Qu=null,ws=-1,xs=0;function Gn(){return Ee&6?sn():ws!==-1?ws:ws=sn()}function Gr(e){return e.mode&1?Ee&2&&Mn!==0?Mn&-Mn:y7.transition!==null?(xs===0&&(xs=l3()),xs):(e=Be,e!==0||(e=window.event,e=e===void 0?16:h3(e.type)),e):1}function zt(e,n,t,a){if(50<jo)throw jo=0,Qu=null,Error(Y(185));gi(e,t,a),(!(Ee&2)||e!==Sn)&&(e===Sn&&(!(Ee&2)&&(_d|=t),yn===4&&Rr(e,Mn)),lt(e,a),t===1&&Ee===0&&!(n.mode&1)&&(Ol=sn()+500,kd&&Jr()))}function lt(e,n){var t=e.callbackNode;yy(e,n);var a=Ds(e,e===Sn?Mn:0);if(a===0)t!==null&&R1(t),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(t!=null&&R1(t),n===1)e.tag===0?b7(L2.bind(null,e)):E3(L2.bind(null,e)),f7(function(){!(Ee&6)&&Jr()}),t=null;else{switch(o3(a)){case 1:t=Mh;break;case 4:t=r3;break;case 16:t=Bs;break;case 536870912:t=a3;break;default:t=Bs}t=I5(t,k5.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function k5(e,n){if(ws=-1,xs=0,Ee&6)throw Error(Y(327));var t=e.callbackNode;if(_l()&&e.callbackNode!==t)return null;var a=Ds(e,e===Sn?Mn:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=rd(e,a);else{n=a;var l=Ee;Ee|=2;var o=T5();(Sn!==e||Mn!==n)&&(or=null,Ol=sn()+500,_a(e,n));do try{D7();break}catch(d){S5(e,d)}while(1);Gh(),ed.current=o,Ee=l,hn!==null?n=0:(Sn=null,Mn=0,n=yn)}if(n!==0){if(n===2&&(l=Su(e),l!==0&&(a=l,n=Xu(e,l))),n===1)throw t=ii,_a(e,0),Rr(e,a),lt(e,sn()),t;if(n===6)Rr(e,a);else{if(l=e.current.alternate,!(a&30)&&!F7(l)&&(n=rd(e,a),n===2&&(o=Su(e),o!==0&&(a=o,n=Xu(e,o))),n===1))throw t=ii,_a(e,0),Rr(e,a),lt(e,sn()),t;switch(e.finishedWork=l,e.finishedLanes=a,n){case 0:case 1:throw Error(Y(345));case 2:va(e,nt,or);break;case 3:if(Rr(e,a),(a&130023424)===a&&(n=op+500-sn(),10<n)){if(Ds(e,0)!==0)break;if(l=e.suspendedLanes,(l&a)!==a){Gn(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Mu(va.bind(null,e,nt,or),n);break}va(e,nt,or);break;case 4:if(Rr(e,a),(a&4194240)===a)break;for(n=e.eventTimes,l=-1;0<a;){var i=31-jt(a);o=1<<i,i=n[i],i>l&&(l=i),a&=~o}if(a=l,a=sn()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*O7(a/1960))-a,10<a){e.timeoutHandle=Mu(va.bind(null,e,nt,or),a);break}va(e,nt,or);break;case 5:va(e,nt,or);break;default:throw Error(Y(329))}}}return lt(e,sn()),e.callbackNode===t?k5.bind(null,e):null}function Xu(e,n){var t=Do;return e.current.memoizedState.isDehydrated&&(_a(e,n).flags|=256),e=rd(e,n),e!==2&&(n=nt,nt=t,n!==null&&Ju(n)),e}function Ju(e){nt===null?nt=e:nt.push.apply(nt,e)}function F7(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var l=t[a],o=l.getSnapshot;l=l.value;try{if(!Wt(o(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Rr(e,n){for(n&=~lp,n&=~_d,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-jt(n),a=1<<t;e[t]=-1,n&=~a}}function L2(e){if(Ee&6)throw Error(Y(327));_l();var n=Ds(e,0);if(!(n&1))return lt(e,sn()),null;var t=rd(e,n);if(e.tag!==0&&t===2){var a=Su(e);a!==0&&(n=a,t=Xu(e,a))}if(t===1)throw t=ii,_a(e,0),Rr(e,n),lt(e,sn()),t;if(t===6)throw Error(Y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,va(e,nt,or),lt(e,sn()),null}function ip(e,n){var t=Ee;Ee|=1;try{return e(n)}finally{Ee=t,Ee===0&&(Ol=sn()+500,kd&&Jr())}}function Aa(e){Or!==null&&Or.tag===0&&!(Ee&6)&&_l();var n=Ee;Ee|=1;var t=St.transition,a=Be;try{if(St.transition=null,Be=1,e)return e()}finally{Be=a,St.transition=t,Ee=n,!(Ee&6)&&Jr()}}function sp(){dt=bl.current,Xe(bl)}function _a(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,p7(t)),hn!==null)for(t=hn.return;t!==null;){var a=t;switch(Wh(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Hs();break;case 3:Rl(),Xe(rt),Xe(jn),Qh();break;case 5:Kh(a);break;case 4:Rl();break;case 13:Xe(nn);break;case 19:Xe(nn);break;case 10:Vh(a.type._context);break;case 22:case 23:sp()}t=t.return}if(Sn=e,hn=e=Vr(e.current,null),Mn=dt=n,yn=0,ii=null,lp=_d=Ma=0,nt=Do=null,Ca!==null){for(n=0;n<Ca.length;n++)if(t=Ca[n],a=t.interleaved,a!==null){t.interleaved=null;var l=a.next,o=t.pending;if(o!==null){var i=o.next;o.next=l,a.next=i}t.pending=a}Ca=null}return e}function S5(e,n){do{var t=hn;try{if(Gh(),vs.current=Js,Xs){for(var a=tn.memoizedState;a!==null;){var l=a.queue;l!==null&&(l.pending=null),a=a.next}Xs=!1}if(Ea=0,kn=bn=tn=null,Fo=!1,ai=0,ap.current=null,t===null||t.return===null){yn=1,ii=n,hn=null;break}e:{var o=e,i=t.return,d=t,u=n;if(n=Mn,d.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=u,g=d,y=g.tag;if(!(g.mode&1)&&(y===0||y===11||y===15)){var C=g.alternate;C?(g.updateQueue=C.updateQueue,g.memoizedState=C.memoizedState,g.lanes=C.lanes):(g.updateQueue=null,g.memoizedState=null)}var E=p2(i);if(E!==null){E.flags&=-257,f2(E,i,d,o,n),E.mode&1&&h2(o,p,n),n=E,u=p;var I=n.updateQueue;if(I===null){var k=new Set;k.add(u),n.updateQueue=k}else I.add(u);break e}else{if(!(n&1)){h2(o,p,n),dp();break e}u=Error(Y(426))}}else if(Je&&d.mode&1){var M=p2(i);if(M!==null){!(M.flags&65536)&&(M.flags|=256),f2(M,i,d,o,n),Uh(Pl(u,d));break e}}o=u=Pl(u,d),yn!==4&&(yn=2),Do===null?Do=[o]:Do.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var w=i5(o,u,n);l2(o,w);break e;case 1:d=u;var m=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Hr===null||!Hr.has(b)))){o.flags|=65536,n&=-n,o.lanes|=n;var v=s5(o,d,n);l2(o,v);break e}}o=o.return}while(o!==null)}_5(t)}catch(N){n=N,hn===t&&t!==null&&(hn=t=t.return);continue}break}while(1)}function T5(){var e=ed.current;return ed.current=Js,e===null?Js:e}function dp(){(yn===0||yn===3||yn===2)&&(yn=4),Sn===null||!(Ma&268435455)&&!(_d&268435455)||Rr(Sn,Mn)}function rd(e,n){var t=Ee;Ee|=2;var a=T5();(Sn!==e||Mn!==n)&&(or=null,_a(e,n));do try{B7();break}catch(l){S5(e,l)}while(1);if(Gh(),Ee=t,ed.current=a,hn!==null)throw Error(Y(261));return Sn=null,Mn=0,yn}function B7(){for(;hn!==null;)L5(hn)}function D7(){for(;hn!==null&&!cy();)L5(hn)}function L5(e){var n=$5(e.alternate,e,dt);e.memoizedProps=e.pendingProps,n===null?_5(e):hn=n,ap.current=null}function _5(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=M7(t,n),t!==null){t.flags&=32767,hn=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{yn=6,hn=null;return}}else if(t=E7(t,n,dt),t!==null){hn=t;return}if(n=n.sibling,n!==null){hn=n;return}hn=n=e}while(n!==null);yn===0&&(yn=5)}function va(e,n,t){var a=Be,l=St.transition;try{St.transition=null,Be=1,j7(e,n,t,a)}finally{St.transition=l,Be=a}return null}function j7(e,n,t,a){do _l();while(Or!==null);if(Ee&6)throw Error(Y(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(Y(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(wy(e,o),e===Sn&&(hn=Sn=null,Mn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ns||(ns=!0,I5(Bs,function(){return _l(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=St.transition,St.transition=null;var i=Be;Be=1;var d=Ee;Ee|=4,ap.current=null,R7(e,t),x5(t,e),o7(Iu),js=!!$u,Iu=$u=null,e.current=t,P7(t),uy(),Ee=d,Be=i,St.transition=o}else e.current=t;if(ns&&(ns=!1,Or=e,td=l),o=e.pendingLanes,o===0&&(Hr=null),fy(t.stateNode),lt(e,sn()),n!==null)for(a=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],a(l.value,{componentStack:l.stack,digest:l.digest});if(nd)throw nd=!1,e=Ku,Ku=null,e;return td&1&&e.tag!==0&&_l(),o=e.pendingLanes,o&1?e===Qu?jo++:(jo=0,Qu=e):jo=0,Jr(),null}function _l(){if(Or!==null){var e=o3(td),n=St.transition,t=Be;try{if(St.transition=null,Be=16>e?16:e,Or===null)var a=!1;else{if(e=Or,Or=null,td=0,Ee&6)throw Error(Y(331));var l=Ee;for(Ee|=4,ne=e.current;ne!==null;){var o=ne,i=o.child;if(ne.flags&16){var d=o.deletions;if(d!==null){for(var u=0;u<d.length;u++){var p=d[u];for(ne=p;ne!==null;){var g=ne;switch(g.tag){case 0:case 11:case 15:Bo(8,g,o)}var y=g.child;if(y!==null)y.return=g,ne=y;else for(;ne!==null;){g=ne;var C=g.sibling,E=g.return;if(b5(g),g===p){ne=null;break}if(C!==null){C.return=E,ne=C;break}ne=E}}}var I=o.alternate;if(I!==null){var k=I.child;if(k!==null){I.child=null;do{var M=k.sibling;k.sibling=null,k=M}while(k!==null)}}ne=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,ne=i;else e:for(;ne!==null;){if(o=ne,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Bo(9,o,o.return)}var w=o.sibling;if(w!==null){w.return=o.return,ne=w;break e}ne=o.return}}var m=e.current;for(ne=m;ne!==null;){i=ne;var b=i.child;if(i.subtreeFlags&2064&&b!==null)b.return=i,ne=b;else e:for(i=m;ne!==null;){if(d=ne,d.flags&2048)try{switch(d.tag){case 0:case 11:case 15:Ld(9,d)}}catch(N){on(d,d.return,N)}if(d===i){ne=null;break e}var v=d.sibling;if(v!==null){v.return=d.return,ne=v;break e}ne=d.return}}if(Ee=l,Jr(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(bd,e)}catch{}a=!0}return a}finally{Be=t,St.transition=n}}return!1}function _2(e,n,t){n=Pl(t,n),n=i5(e,n,1),e=Ur(e,n,1),n=Gn(),e!==null&&(gi(e,1,n),lt(e,n))}function on(e,n,t){if(e.tag===3)_2(e,e,t);else for(;n!==null;){if(n.tag===3){_2(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Hr===null||!Hr.has(a))){e=Pl(t,e),e=s5(n,e,1),n=Ur(n,e,1),e=Gn(),n!==null&&(gi(n,1,e),lt(n,e));break}}n=n.return}}function z7(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),n=Gn(),e.pingedLanes|=e.suspendedLanes&t,Sn===e&&(Mn&t)===t&&(yn===4||yn===3&&(Mn&130023424)===Mn&&500>sn()-op?_a(e,0):lp|=t),lt(e,n)}function N5(e,n){n===0&&(e.mode&1?(n=Gi,Gi<<=1,!(Gi&130023424)&&(Gi=4194304)):n=1);var t=Gn();e=gr(e,n),e!==null&&(gi(e,n,t),lt(e,t))}function W7(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),N5(e,t)}function U7(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(Y(314))}a!==null&&a.delete(n),N5(e,t)}var $5;$5=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||rt.current)tt=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return tt=!1,I7(e,n,t);tt=!!(e.flags&131072)}else tt=!1,Je&&n.flags&1048576&&M3(n,Ys,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;ys(e,n),e=n.pendingProps;var l=El(n,jn.current);Ll(n,t),l=Jh(null,n,a,e,l,t);var o=ep();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,at(a)?(o=!0,Gs(n)):o=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Zh(n),l.updater=Sd,n.stateNode=l,l._reactInternals=n,Du(n,a,e,t),n=Wu(null,n,a,!0,o,t)):(n.tag=0,Je&&o&&zh(n),Un(null,n,l,t),n=n.child),n;case 16:a=n.elementType;e:{switch(ys(e,n),e=n.pendingProps,l=a._init,a=l(a._payload),n.type=a,l=n.tag=G7(a),e=Rt(a,e),l){case 0:n=zu(null,n,a,e,t);break e;case 1:n=v2(null,n,a,e,t);break e;case 11:n=m2(null,n,a,e,t);break e;case 14:n=g2(null,n,a,Rt(a.type,e),t);break e}throw Error(Y(306,a,""))}return n;case 0:return a=n.type,l=n.pendingProps,l=n.elementType===a?l:Rt(a,l),zu(e,n,a,l,t);case 1:return a=n.type,l=n.pendingProps,l=n.elementType===a?l:Rt(a,l),v2(e,n,a,l,t);case 3:e:{if(h5(n),e===null)throw Error(Y(387));a=n.pendingProps,o=n.memoizedState,l=o.element,O3(e,n),Ks(n,a,null,t);var i=n.memoizedState;if(a=i.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){l=Pl(Error(Y(423)),n),n=b2(e,n,a,t,l);break e}else if(a!==l){l=Pl(Error(Y(424)),n),n=b2(e,n,a,t,l);break e}else for(ft=Wr(n.stateNode.containerInfo.firstChild),mt=n,Je=!0,Ft=null,t=j3(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ml(),a===l){n=vr(e,n,t);break e}Un(e,n,a,t)}n=n.child}return n;case 5:return z3(n),e===null&&Ou(n),a=n.type,l=n.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Eu(a,l)?i=null:o!==null&&Eu(a,o)&&(n.flags|=32),u5(e,n),Un(e,n,i,t),n.child;case 6:return e===null&&Ou(n),null;case 13:return p5(e,n,t);case 4:return qh(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Al(n,null,a,t):Un(e,n,a,t),n.child;case 11:return a=n.type,l=n.pendingProps,l=n.elementType===a?l:Rt(a,l),m2(e,n,a,l,t);case 7:return Un(e,n,n.pendingProps,t),n.child;case 8:return Un(e,n,n.pendingProps.children,t),n.child;case 12:return Un(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(a=n.type._context,l=n.pendingProps,o=n.memoizedProps,i=l.value,Ge(Zs,a._currentValue),a._currentValue=i,o!==null)if(Wt(o.value,i)){if(o.children===l.children&&!rt.current){n=vr(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var d=o.dependencies;if(d!==null){i=o.child;for(var u=d.firstContext;u!==null;){if(u.context===a){if(o.tag===1){u=hr(-1,t&-t),u.tag=2;var p=o.updateQueue;if(p!==null){p=p.shared;var g=p.pending;g===null?u.next=u:(u.next=g.next,g.next=u),p.pending=u}}o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Fu(o.return,t,n),d.lanes|=t;break}u=u.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(Y(341));i.lanes|=t,d=i.alternate,d!==null&&(d.lanes|=t),Fu(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Un(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,a=n.pendingProps.children,Ll(n,t),l=Tt(l),a=a(l),n.flags|=1,Un(e,n,a,t),n.child;case 14:return a=n.type,l=Rt(a,n.pendingProps),l=Rt(a.type,l),g2(e,n,a,l,t);case 15:return d5(e,n,n.type,n.pendingProps,t);case 17:return a=n.type,l=n.pendingProps,l=n.elementType===a?l:Rt(a,l),ys(e,n),n.tag=1,at(a)?(e=!0,Gs(n)):e=!1,Ll(n,t),B3(n,a,l),Du(n,a,l,t),Wu(null,n,a,!0,e,t);case 19:return f5(e,n,t);case 22:return c5(e,n,t)}throw Error(Y(156,n.tag))};function I5(e,n){return t3(e,n)}function H7(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,n,t,a){return new H7(e,n,t,a)}function cp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function G7(e){if(typeof e=="function")return cp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$h)return 11;if(e===Ih)return 14}return 2}function Vr(e,n){var t=e.alternate;return t===null?(t=kt(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Cs(e,n,t,a,l,o){var i=2;if(a=e,typeof e=="function")cp(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case sl:return Na(t.children,l,o,n);case Nh:i=8,l|=8;break;case du:return e=kt(12,t,n,l|2),e.elementType=du,e.lanes=o,e;case cu:return e=kt(13,t,n,l),e.elementType=cu,e.lanes=o,e;case uu:return e=kt(19,t,n,l),e.elementType=uu,e.lanes=o,e;case Dm:return Nd(t,l,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fm:i=10;break e;case Bm:i=9;break e;case $h:i=11;break e;case Ih:i=14;break e;case Er:i=16,a=null;break e}throw Error(Y(130,e==null?e:typeof e,""))}return n=kt(i,t,n,l),n.elementType=e,n.type=a,n.lanes=o,n}function Na(e,n,t,a){return e=kt(7,e,a,n),e.lanes=t,e}function Nd(e,n,t,a){return e=kt(22,e,a,n),e.elementType=Dm,e.lanes=t,e.stateNode={isHidden:!1},e}function Hc(e,n,t){return e=kt(6,e,null,n),e.lanes=t,e}function Gc(e,n,t){return n=kt(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function V7(e,n,t,a,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tc(0),this.expirationTimes=Tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tc(0),this.identifierPrefix=a,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function up(e,n,t,a,l,o,i,d,u){return e=new V7(e,n,t,d,u),n===1?(n=1,o===!0&&(n|=8)):n=0,o=kt(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zh(o),e}function Y7(e,n,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:il,key:a==null?null:""+a,children:e,containerInfo:n,implementation:t}}function E5(e){if(!e)return Zr;e=e._reactInternals;e:{if(Oa(e)!==e||e.tag!==1)throw Error(Y(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(at(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(Y(171))}if(e.tag===1){var t=e.type;if(at(t))return I3(e,t,n)}return n}function M5(e,n,t,a,l,o,i,d,u){return e=up(t,a,!0,e,l,o,i,d,u),e.context=E5(null),t=e.current,a=Gn(),l=Gr(t),o=hr(a,l),o.callback=n??null,Ur(t,o,l),e.current.lanes=l,gi(e,l,a),lt(e,a),e}function $d(e,n,t,a){var l=n.current,o=Gn(),i=Gr(l);return t=E5(t),n.context===null?n.context=t:n.pendingContext=t,n=hr(o,i),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=Ur(l,n,i),e!==null&&(zt(e,l,i,o),gs(e,l,i)),i}function ad(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function N2(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function hp(e,n){N2(e,n),(e=e.alternate)&&N2(e,n)}function Z7(){return null}var A5=typeof reportError=="function"?reportError:function(e){console.error(e)};function pp(e){this._internalRoot=e}Id.prototype.render=pp.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(Y(409));$d(e,n,null,null)};Id.prototype.unmount=pp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Aa(function(){$d(null,e,null,null)}),n[mr]=null}};function Id(e){this._internalRoot=e}Id.prototype.unstable_scheduleHydration=function(e){if(e){var n=d3();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Ar.length&&n!==0&&n<Ar[t].priority;t++);Ar.splice(t,0,e),t===0&&u3(e)}};function fp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ed(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $2(){}function q7(e,n,t,a,l){if(l){if(typeof a=="function"){var o=a;a=function(){var p=ad(i);o.call(p)}}var i=M5(n,a,e,0,null,!1,!1,"",$2);return e._reactRootContainer=i,e[mr]=i.current,Jo(e.nodeType===8?e.parentNode:e),Aa(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof a=="function"){var d=a;a=function(){var p=ad(u);d.call(p)}}var u=up(e,0,!1,null,null,!1,!1,"",$2);return e._reactRootContainer=u,e[mr]=u.current,Jo(e.nodeType===8?e.parentNode:e),Aa(function(){$d(n,u,t,a)}),u}function Md(e,n,t,a,l){var o=t._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var d=l;l=function(){var u=ad(i);d.call(u)}}$d(n,i,e,l)}else i=q7(t,n,e,l,a);return ad(i)}i3=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=So(n.pendingLanes);t!==0&&(Ah(n,t|1),lt(n,sn()),!(Ee&6)&&(Ol=sn()+500,Jr()))}break;case 13:Aa(function(){var a=gr(e,1);if(a!==null){var l=Gn();zt(a,e,1,l)}}),hp(e,1)}};Rh=function(e){if(e.tag===13){var n=gr(e,134217728);if(n!==null){var t=Gn();zt(n,e,134217728,t)}hp(e,134217728)}};s3=function(e){if(e.tag===13){var n=Gr(e),t=gr(e,n);if(t!==null){var a=Gn();zt(t,e,n,a)}hp(e,n)}};d3=function(){return Be};c3=function(e,n){var t=Be;try{return Be=e,n()}finally{Be=t}};xu=function(e,n,t){switch(n){case"input":if(fu(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var l=Cd(a);if(!l)throw Error(Y(90));zm(a),fu(a,l)}}}break;case"textarea":Um(e,t);break;case"select":n=t.value,n!=null&&Cl(e,!!t.multiple,n,!1)}};Km=ip;Qm=Aa;var K7={usingClientEntryPoint:!1,Events:[bi,hl,Cd,Zm,qm,ip]},bo={findFiberByHostInstance:xa,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Q7={bundleType:bo.bundleType,version:bo.version,rendererPackageName:bo.rendererPackageName,rendererConfig:bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=e3(e),e===null?null:e.stateNode},findFiberByHostInstance:bo.findFiberByHostInstance||Z7,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ts.isDisabled&&ts.supportsFiber)try{bd=ts.inject(Q7),Kt=ts}catch{}}vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K7;vt.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fp(n))throw Error(Y(200));return Y7(e,n,null,t)};vt.createRoot=function(e,n){if(!fp(e))throw Error(Y(299));var t=!1,a="",l=A5;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=up(e,1,!1,null,null,t,!1,a,l),e[mr]=n.current,Jo(e.nodeType===8?e.parentNode:e),new pp(n)};vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=e3(n),e=e===null?null:e.stateNode,e};vt.flushSync=function(e){return Aa(e)};vt.hydrate=function(e,n,t){if(!Ed(n))throw Error(Y(200));return Md(null,e,n,!0,t)};vt.hydrateRoot=function(e,n,t){if(!fp(e))throw Error(Y(405));var a=t!=null&&t.hydratedSources||null,l=!1,o="",i=A5;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=M5(n,null,e,1,t??null,l,!1,o,i),e[mr]=n.current,Jo(e),a)for(e=0;e<a.length;e++)t=a[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new Id(n)};vt.render=function(e,n,t){if(!Ed(n))throw Error(Y(200));return Md(null,e,n,!1,t)};vt.unmountComponentAtNode=function(e){if(!Ed(e))throw Error(Y(40));return e._reactRootContainer?(Aa(function(){Md(null,null,e,!1,function(){e._reactRootContainer=null,e[mr]=null})}),!0):!1};vt.unstable_batchedUpdates=ip;vt.unstable_renderSubtreeIntoContainer=function(e,n,t,a){if(!Ed(t))throw Error(Y(200));if(e==null||e._reactInternals===void 0)throw Error(Y(38));return Md(e,n,t,!1,a)};vt.version="18.2.0-next-9e3b772b8-20220608";function R5(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R5)}catch(e){console.error(e)}}R5(),Mm.exports=vt;var P5=Mm.exports,I2=P5;iu.createRoot=I2.createRoot,iu.hydrateRoot=I2.hydrateRoot;function X7(e,n){if(e==null)return{};var t={},a=Object.keys(e),l,o;for(o=0;o<a.length;o++)l=a[o],!(n.indexOf(l)>=0)&&(t[l]=e[l]);return t}function J7(e,n){if(e==null)return{};var t=X7(e,n),a,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}function eh(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function e9(e){if(Array.isArray(e))return eh(e)}function n9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function t9(e,n){if(e){if(typeof e=="string")return eh(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return eh(e,n)}}function r9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a9(e){return e9(e)||n9(e)||t9(e)||r9()}function si(e){"@babel/helpers - typeof";return si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},si(e)}function l9(e,n){if(si(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var a=t.call(e,n||"default");if(si(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function o9(e){var n=l9(e,"string");return si(n)==="symbol"?n:String(n)}function O5(e,n,t){return n=o9(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function nh(){return nh=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},nh.apply(this,arguments)}function E2(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,a)}return t}function yl(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?E2(Object(t),!0).forEach(function(a){O5(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E2(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function i9(e){var n=e.length;if(n===0||n===1)return e;if(n===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(n===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(n>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var Vc={};function s9(e){if(e.length===0||e.length===1)return e;var n=e.join(".");return Vc[n]||(Vc[n]=i9(e)),Vc[n]}function d9(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,a=e.filter(function(o){return o!=="token"}),l=s9(a);return l.reduce(function(o,i){return yl(yl({},o),t[i])},n)}function M2(e){return e.join(" ")}function c9(e,n){var t=0;return function(a){return t+=1,a.map(function(l,o){return F5({node:l,stylesheet:e,useInlineStyles:n,key:"code-segment-".concat(t,"-").concat(o)})})}}function F5(e){var n=e.node,t=e.stylesheet,a=e.style,l=a===void 0?{}:a,o=e.useInlineStyles,i=e.key,d=n.properties,u=n.type,p=n.tagName,g=n.value;if(u==="text")return g;if(p){var y=c9(t,o),C;if(!o)C=yl(yl({},d),{},{className:M2(d.className)});else{var E=Object.keys(t).reduce(function(w,m){return m.split(".").forEach(function(b){w.includes(b)||w.push(b)}),w},[]),I=d.className&&d.className.includes("token")?["token"]:[],k=d.className&&I.concat(d.className.filter(function(w){return!E.includes(w)}));C=yl(yl({},d),{},{className:M2(k)||void 0,style:d9(d.className,Object.assign({},d.style,l),t)})}var M=y(n.children);return In.createElement(p,nh({key:i},C),M)}}const u9=function(e,n){var t=e.listLanguages();return t.indexOf(n)!==-1};var h9=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function A2(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,a)}return t}function Zt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?A2(Object(t),!0).forEach(function(a){O5(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A2(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var p9=/\n/g;function f9(e){return e.match(p9)}function m9(e){var n=e.lines,t=e.startingLineNumber,a=e.style;return n.map(function(l,o){var i=o+t;return In.createElement("span",{key:"line-".concat(o),className:"react-syntax-highlighter-line-number",style:typeof a=="function"?a(i):a},"".concat(i,`
`))})}function g9(e){var n=e.codeString,t=e.codeStyle,a=e.containerStyle,l=a===void 0?{float:"left",paddingRight:"10px"}:a,o=e.numberStyle,i=o===void 0?{}:o,d=e.startingLineNumber;return In.createElement("code",{style:Object.assign({},t,l)},m9({lines:n.replace(/\n$/,"").split(`
`),style:i,startingLineNumber:d}))}function v9(e){return"".concat(e.toString().length,".25em")}function B5(e,n){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:n},children:[{type:"text",value:e}]}}function D5(e,n,t){var a={display:"inline-block",minWidth:v9(t),paddingRight:"1em",textAlign:"right",userSelect:"none"},l=typeof e=="function"?e(n):e,o=Zt(Zt({},a),l);return o}function ks(e){var n=e.children,t=e.lineNumber,a=e.lineNumberStyle,l=e.largestLineNumber,o=e.showInlineLineNumbers,i=e.lineProps,d=i===void 0?{}:i,u=e.className,p=u===void 0?[]:u,g=e.showLineNumbers,y=e.wrapLongLines,C=typeof d=="function"?d(t):d;if(C.className=p,t&&o){var E=D5(a,t,l);n.unshift(B5(t,E))}return y&g&&(C.style=Zt(Zt({},C.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:C,children:n}}function j5(e){for(var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],a=0;a<e.length;a++){var l=e[a];if(l.type==="text")t.push(ks({children:[l],className:a9(new Set(n))}));else if(l.children){var o=n.concat(l.properties.className);j5(l.children,o).forEach(function(i){return t.push(i)})}}return t}function b9(e,n,t,a,l,o,i,d,u){var p,g=j5(e.value),y=[],C=-1,E=0;function I(N,T){var P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return ks({children:N,lineNumber:T,lineNumberStyle:d,largestLineNumber:i,showInlineLineNumbers:l,lineProps:t,className:P,showLineNumbers:a,wrapLongLines:u})}function k(N,T){if(a&&T&&l){var P=D5(d,T,i);N.unshift(B5(T,P))}return N}function M(N,T){var P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return n||P.length>0?I(N,T,P):k(N,T)}for(var w=function(){var T=g[E],P=T.children[0].value,F=f9(P);if(F){var z=P.split(`
`);z.forEach(function(Z,pe){var de=a&&y.length+o,ze={type:"text",value:"".concat(Z,`
`)};if(pe===0){var ln=g.slice(C+1,E).concat(ks({children:[ze],className:T.properties.className})),Ve=M(ln,de);y.push(Ve)}else if(pe===z.length-1){var De=g[E+1]&&g[E+1].children&&g[E+1].children[0],Ye={type:"text",value:"".concat(Z)};if(De){var W=ks({children:[Ye],className:T.properties.className});g.splice(E+1,0,W)}else{var q=[Ye],J=M(q,de,T.properties.className);y.push(J)}}else{var oe=[ze],fe=M(oe,de,T.properties.className);y.push(fe)}}),C=E}E++};E<g.length;)w();if(C!==g.length-1){var m=g.slice(C+1,g.length);if(m&&m.length){var b=a&&y.length+o,v=M(m,b);y.push(v)}}return n?y:(p=[]).concat.apply(p,y)}function y9(e){var n=e.rows,t=e.stylesheet,a=e.useInlineStyles;return n.map(function(l,o){return F5({node:l,stylesheet:t,useInlineStyles:a,key:"code-segement".concat(o)})})}function z5(e){return e&&typeof e.highlightAuto<"u"}function w9(e){var n=e.astGenerator,t=e.language,a=e.code,l=e.defaultCodeValue;if(z5(n)){var o=u9(n,t);return t==="text"?{value:l,language:"text"}:o?n.highlight(t,a):n.highlightAuto(a)}try{return t&&t!=="text"?{value:n.highlight(a,t)}:{value:l}}catch{return{value:l}}}function x9(e,n){return function(a){var l=a.language,o=a.children,i=a.style,d=i===void 0?n:i,u=a.customStyle,p=u===void 0?{}:u,g=a.codeTagProps,y=g===void 0?{className:l?"language-".concat(l):void 0,style:Zt(Zt({},d['code[class*="language-"]']),d['code[class*="language-'.concat(l,'"]')])}:g,C=a.useInlineStyles,E=C===void 0?!0:C,I=a.showLineNumbers,k=I===void 0?!1:I,M=a.showInlineLineNumbers,w=M===void 0?!0:M,m=a.startingLineNumber,b=m===void 0?1:m,v=a.lineNumberContainerStyle,N=a.lineNumberStyle,T=N===void 0?{}:N,P=a.wrapLines,F=a.wrapLongLines,z=F===void 0?!1:F,Z=a.lineProps,pe=Z===void 0?{}:Z,de=a.renderer,ze=a.PreTag,ln=ze===void 0?"pre":ze,Ve=a.CodeTag,De=Ve===void 0?"code":Ve,Ye=a.code,W=Ye===void 0?(Array.isArray(o)?o[0]:o)||"":Ye,q=a.astGenerator,J=J7(a,h9);q=q||e;var oe=k?In.createElement(g9,{containerStyle:v,codeStyle:y.style||{},numberStyle:T,startingLineNumber:b,codeString:W}):null,fe=d.hljs||d['pre[class*="language-"]']||{backgroundColor:"#fff"},zn=z5(q)?"hljs":"prismjs",me=E?Object.assign({},J,{style:Object.assign({},fe,p)}):Object.assign({},J,{className:J.className?"".concat(zn," ").concat(J.className):zn,style:Object.assign({},p)});if(z?y.style=Zt(Zt({},y.style),{},{whiteSpace:"pre-wrap"}):y.style=Zt(Zt({},y.style),{},{whiteSpace:"pre"}),!q)return In.createElement(ln,me,oe,In.createElement(De,y,W));(P===void 0&&de||z)&&(P=!0),de=de||y9;var en=[{type:"text",value:W}],Ze=w9({astGenerator:q,language:l,code:W,defaultCodeValue:en});Ze.language===null&&(Ze.value=en);var fn=Ze.value.length+b,On=b9(Ze,P,pe,k,w,b,fn,T,z);return In.createElement(ln,me,In.createElement(De,y,!w&&oe,de({rows:On,stylesheet:d,useInlineStyles:E})))}}var C9=S9,k9=Object.prototype.hasOwnProperty;function S9(){for(var e={},n=0;n<arguments.length;n++){var t=arguments[n];for(var a in t)k9.call(t,a)&&(e[a]=t[a])}return e}var W5=U5,mp=U5.prototype;mp.space=null;mp.normal={};mp.property={};function U5(e,n,t){this.property=e,this.normal=n,t&&(this.space=t)}var R2=C9,T9=W5,L9=_9;function _9(e){for(var n=e.length,t=[],a=[],l=-1,o,i;++l<n;)o=e[l],t.push(o.property),a.push(o.normal),i=o.space;return new T9(R2.apply(null,t),R2.apply(null,a),i)}var gp=N9;function N9(e){return e.toLowerCase()}var H5=G5,_t=G5.prototype;_t.space=null;_t.attribute=null;_t.property=null;_t.boolean=!1;_t.booleanish=!1;_t.overloadedBoolean=!1;_t.number=!1;_t.commaSeparated=!1;_t.spaceSeparated=!1;_t.commaOrSpaceSeparated=!1;_t.mustUseProperty=!1;_t.defined=!1;function G5(e,n){this.property=e,this.attribute=n}var Jt={},$9=0;Jt.boolean=Fa();Jt.booleanish=Fa();Jt.overloadedBoolean=Fa();Jt.number=Fa();Jt.spaceSeparated=Fa();Jt.commaSeparated=Fa();Jt.commaOrSpaceSeparated=Fa();function Fa(){return Math.pow(2,++$9)}var V5=H5,P2=Jt,Y5=vp;vp.prototype=new V5;vp.prototype.defined=!0;var Z5=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],I9=Z5.length;function vp(e,n,t,a){var l=-1,o;for(O2(this,"space",a),V5.call(this,e,n);++l<I9;)o=Z5[l],O2(this,o,(t&P2[o])===P2[o])}function O2(e,n,t){t&&(e[n]=t)}var F2=gp,E9=W5,M9=Y5,wi=A9;function A9(e){var n=e.space,t=e.mustUseProperty||[],a=e.attributes||{},l=e.properties,o=e.transform,i={},d={},u,p;for(u in l)p=new M9(u,o(a,u),l[u],n),t.indexOf(u)!==-1&&(p.mustUseProperty=!0),i[u]=p,d[F2(u)]=u,d[F2(p.attribute)]=u;return new E9(i,d,n)}var R9=wi,P9=R9({space:"xlink",transform:O9,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function O9(e,n){return"xlink:"+n.slice(5).toLowerCase()}var F9=wi,B9=F9({space:"xml",transform:D9,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function D9(e,n){return"xml:"+n.slice(3).toLowerCase()}var j9=z9;function z9(e,n){return n in e?e[n]:n}var W9=j9,q5=U9;function U9(e,n){return W9(e,n.toLowerCase())}var H9=wi,G9=q5,V9=H9({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:G9,properties:{xmlns:null,xmlnsXLink:null}}),bp=Jt,Y9=wi,Xn=bp.booleanish,wt=bp.number,fa=bp.spaceSeparated,Z9=Y9({transform:q9,properties:{ariaActiveDescendant:null,ariaAtomic:Xn,ariaAutoComplete:null,ariaBusy:Xn,ariaChecked:Xn,ariaColCount:wt,ariaColIndex:wt,ariaColSpan:wt,ariaControls:fa,ariaCurrent:null,ariaDescribedBy:fa,ariaDetails:null,ariaDisabled:Xn,ariaDropEffect:fa,ariaErrorMessage:null,ariaExpanded:Xn,ariaFlowTo:fa,ariaGrabbed:Xn,ariaHasPopup:null,ariaHidden:Xn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:fa,ariaLevel:wt,ariaLive:null,ariaModal:Xn,ariaMultiLine:Xn,ariaMultiSelectable:Xn,ariaOrientation:null,ariaOwns:fa,ariaPlaceholder:null,ariaPosInSet:wt,ariaPressed:Xn,ariaReadOnly:Xn,ariaRelevant:null,ariaRequired:Xn,ariaRoleDescription:fa,ariaRowCount:wt,ariaRowIndex:wt,ariaRowSpan:wt,ariaSelected:Xn,ariaSetSize:wt,ariaSort:null,ariaValueMax:wt,ariaValueMin:wt,ariaValueNow:wt,ariaValueText:null,role:null}});function q9(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}var Ul=Jt,K9=wi,Q9=q5,xe=Ul.boolean,X9=Ul.overloadedBoolean,yo=Ul.booleanish,qe=Ul.number,Wn=Ul.spaceSeparated,rs=Ul.commaSeparated,J9=K9({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Q9,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:rs,acceptCharset:Wn,accessKey:Wn,action:null,allow:null,allowFullScreen:xe,allowPaymentRequest:xe,allowUserMedia:xe,alt:null,as:null,async:xe,autoCapitalize:null,autoComplete:Wn,autoFocus:xe,autoPlay:xe,capture:xe,charSet:null,checked:xe,cite:null,className:Wn,cols:qe,colSpan:null,content:null,contentEditable:yo,controls:xe,controlsList:Wn,coords:qe|rs,crossOrigin:null,data:null,dateTime:null,decoding:null,default:xe,defer:xe,dir:null,dirName:null,disabled:xe,download:X9,draggable:yo,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:xe,formTarget:null,headers:Wn,height:qe,hidden:xe,high:qe,href:null,hrefLang:null,htmlFor:Wn,httpEquiv:Wn,id:null,imageSizes:null,imageSrcSet:rs,inputMode:null,integrity:null,is:null,isMap:xe,itemId:null,itemProp:Wn,itemRef:Wn,itemScope:xe,itemType:Wn,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:xe,low:qe,manifest:null,max:null,maxLength:qe,media:null,method:null,min:null,minLength:qe,multiple:xe,muted:xe,name:null,nonce:null,noModule:xe,noValidate:xe,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:xe,optimum:qe,pattern:null,ping:Wn,placeholder:null,playsInline:xe,poster:null,preload:null,readOnly:xe,referrerPolicy:null,rel:Wn,required:xe,reversed:xe,rows:qe,rowSpan:qe,sandbox:Wn,scope:null,scoped:xe,seamless:xe,selected:xe,shape:null,size:qe,sizes:null,slot:null,span:qe,spellCheck:yo,src:null,srcDoc:null,srcLang:null,srcSet:rs,start:qe,step:null,style:null,tabIndex:qe,target:null,title:null,translate:null,type:null,typeMustMatch:xe,useMap:null,value:yo,width:qe,wrap:null,align:null,aLink:null,archive:Wn,axis:null,background:null,bgColor:null,border:qe,borderColor:null,bottomMargin:qe,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:xe,declare:xe,event:null,face:null,frame:null,frameBorder:null,hSpace:qe,leftMargin:qe,link:null,longDesc:null,lowSrc:null,marginHeight:qe,marginWidth:qe,noResize:xe,noHref:xe,noShade:xe,noWrap:xe,object:null,profile:null,prompt:null,rev:null,rightMargin:qe,rules:null,scheme:null,scrolling:yo,standby:null,summary:null,text:null,topMargin:qe,valueType:null,version:null,vAlign:null,vLink:null,vSpace:qe,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:xe,disableRemotePlayback:xe,prefix:null,property:null,results:qe,security:null,unselectable:null}}),ew=L9,nw=P9,tw=B9,rw=V9,aw=Z9,lw=J9,ow=ew([tw,nw,rw,aw,lw]),iw=gp,sw=Y5,dw=H5,yp="data",cw=pw,uw=/^data[-\w.:]+$/i,K5=/-[a-z]/g,hw=/[A-Z]/g;function pw(e,n){var t=iw(n),a=n,l=dw;return t in e.normal?e.property[e.normal[t]]:(t.length>4&&t.slice(0,4)===yp&&uw.test(n)&&(n.charAt(4)==="-"?a=fw(n):n=mw(n),l=sw),new l(a,n))}function fw(e){var n=e.slice(5).replace(K5,vw);return yp+n.charAt(0).toUpperCase()+n.slice(1)}function mw(e){var n=e.slice(4);return K5.test(n)?e:(n=n.replace(hw,gw),n.charAt(0)!=="-"&&(n="-"+n),yp+n)}function gw(e){return"-"+e.toLowerCase()}function vw(e){return e.charAt(1).toUpperCase()}var bw=yw,B2=/[#.]/g;function yw(e,n){for(var t=e||"",a=n||"div",l={},o=0,i,d,u;o<t.length;)B2.lastIndex=o,u=B2.exec(t),i=t.slice(o,u?u.index:t.length),i&&(d?d==="#"?l.id=i:l.className?l.className.push(i):l.className=[i]:a=i,o+=i.length),u&&(d=u[0],o++);return{type:"element",tagName:a,properties:l,children:[]}}var wp={};wp.parse=Cw;wp.stringify=kw;var D2="",ww=" ",xw=/[ \t\n\r\f]+/g;function Cw(e){var n=String(e||D2).trim();return n===D2?[]:n.split(xw)}function kw(e){return e.join(ww).trim()}var xp={};xp.parse=Sw;xp.stringify=Tw;var th=",",j2=" ",Lo="";function Sw(e){for(var n=[],t=String(e||Lo),a=t.indexOf(th),l=0,o=!1,i;!o;)a===-1&&(a=t.length,o=!0),i=t.slice(l,a).trim(),(i||!o)&&n.push(i),l=a+1,a=t.indexOf(th,l);return n}function Tw(e,n){var t=n||{},a=t.padLeft===!1?Lo:j2,l=t.padRight?j2:Lo;return e[e.length-1]===Lo&&(e=e.concat(Lo)),e.join(l+th+a).trim()}var Lw=cw,z2=gp,_w=bw,W2=wp.parse,U2=xp.parse,Nw=Iw,$w={}.hasOwnProperty;function Iw(e,n,t){var a=t?Pw(t):null;return l;function l(i,d){var u=_w(i,n),p=Array.prototype.slice.call(arguments,2),g=u.tagName.toLowerCase(),y;if(u.tagName=a&&$w.call(a,g)?a[g]:g,d&&Ew(d,u)&&(p.unshift(d),d=null),d)for(y in d)o(u.properties,y,d[y]);return Q5(u.children,p),u.tagName==="template"&&(u.content={type:"root",children:u.children},u.children=[]),u}function o(i,d,u){var p,g,y;u==null||u!==u||(p=Lw(e,d),g=p.property,y=u,typeof y=="string"&&(p.spaceSeparated?y=W2(y):p.commaSeparated?y=U2(y):p.commaOrSpaceSeparated&&(y=W2(U2(y).join(" ")))),g==="style"&&typeof u!="string"&&(y=Rw(y)),g==="className"&&i.className&&(y=i.className.concat(y)),i[g]=Aw(p,g,y))}}function Ew(e,n){return typeof e=="string"||"length"in e||Mw(n.tagName,e)}function Mw(e,n){var t=n.type;return e==="input"||!t||typeof t!="string"?!1:typeof n.children=="object"&&"length"in n.children?!0:(t=t.toLowerCase(),e==="button"?t!=="menu"&&t!=="submit"&&t!=="reset"&&t!=="button":"value"in n)}function Q5(e,n){var t,a;if(typeof n=="string"||typeof n=="number"){e.push({type:"text",value:String(n)});return}if(typeof n=="object"&&"length"in n){for(t=-1,a=n.length;++t<a;)Q5(e,n[t]);return}if(typeof n!="object"||!("type"in n))throw new Error("Expected node, nodes, or string, got `"+n+"`");e.push(n)}function Aw(e,n,t){var a,l,o;if(typeof t!="object"||!("length"in t))return H2(e,n,t);for(l=t.length,a=-1,o=[];++a<l;)o[a]=H2(e,n,t[a]);return o}function H2(e,n,t){var a=t;return e.number||e.positiveNumber?!isNaN(a)&&a!==""&&(a=Number(a)):(e.boolean||e.overloadedBoolean)&&typeof a=="string"&&(a===""||z2(t)===z2(n))&&(a=!0),a}function Rw(e){var n=[],t;for(t in e)n.push([t,e[t]].join(": "));return n.join("; ")}function Pw(e){for(var n=e.length,t=-1,a={},l;++t<n;)l=e[t],a[l.toLowerCase()]=l;return a}var Ow=ow,Fw=Nw,X5=Fw(Ow,"div");X5.displayName="html";var Bw=X5,Dw=Bw;const jw="Æ",zw="&",Ww="Á",Uw="Â",Hw="À",Gw="Å",Vw="Ã",Yw="Ä",Zw="©",qw="Ç",Kw="Ð",Qw="É",Xw="Ê",Jw="È",ex="Ë",nx=">",tx="Í",rx="Î",ax="Ì",lx="Ï",ox="<",ix="Ñ",sx="Ó",dx="Ô",cx="Ò",ux="Ø",hx="Õ",px="Ö",fx='"',mx="®",gx="Þ",vx="Ú",bx="Û",yx="Ù",wx="Ü",xx="Ý",Cx="á",kx="â",Sx="´",Tx="æ",Lx="à",_x="&",Nx="å",$x="ã",Ix="ä",Ex="¦",Mx="ç",Ax="¸",Rx="¢",Px="©",Ox="¤",Fx="°",Bx="÷",Dx="é",jx="ê",zx="è",Wx="ð",Ux="ë",Hx="½",Gx="¼",Vx="¾",Yx=">",Zx="í",qx="î",Kx="¡",Qx="ì",Xx="¿",Jx="ï",eC="«",nC="<",tC="¯",rC="µ",aC="·",lC=" ",oC="¬",iC="ñ",sC="ó",dC="ô",cC="ò",uC="ª",hC="º",pC="ø",fC="õ",mC="ö",gC="¶",vC="±",bC="£",yC='"',wC="»",xC="®",CC="§",kC="­",SC="¹",TC="²",LC="³",_C="ß",NC="þ",$C="×",IC="ú",EC="û",MC="ù",AC="¨",RC="ü",PC="ý",OC="¥",FC="ÿ",BC={AElig:jw,AMP:zw,Aacute:Ww,Acirc:Uw,Agrave:Hw,Aring:Gw,Atilde:Vw,Auml:Yw,COPY:Zw,Ccedil:qw,ETH:Kw,Eacute:Qw,Ecirc:Xw,Egrave:Jw,Euml:ex,GT:nx,Iacute:tx,Icirc:rx,Igrave:ax,Iuml:lx,LT:ox,Ntilde:ix,Oacute:sx,Ocirc:dx,Ograve:cx,Oslash:ux,Otilde:hx,Ouml:px,QUOT:fx,REG:mx,THORN:gx,Uacute:vx,Ucirc:bx,Ugrave:yx,Uuml:wx,Yacute:xx,aacute:Cx,acirc:kx,acute:Sx,aelig:Tx,agrave:Lx,amp:_x,aring:Nx,atilde:$x,auml:Ix,brvbar:Ex,ccedil:Mx,cedil:Ax,cent:Rx,copy:Px,curren:Ox,deg:Fx,divide:Bx,eacute:Dx,ecirc:jx,egrave:zx,eth:Wx,euml:Ux,frac12:Hx,frac14:Gx,frac34:Vx,gt:Yx,iacute:Zx,icirc:qx,iexcl:Kx,igrave:Qx,iquest:Xx,iuml:Jx,laquo:eC,lt:nC,macr:tC,micro:rC,middot:aC,nbsp:lC,not:oC,ntilde:iC,oacute:sC,ocirc:dC,ograve:cC,ordf:uC,ordm:hC,oslash:pC,otilde:fC,ouml:mC,para:gC,plusmn:vC,pound:bC,quot:yC,raquo:wC,reg:xC,sect:CC,shy:kC,sup1:SC,sup2:TC,sup3:LC,szlig:_C,thorn:NC,times:$C,uacute:IC,ucirc:EC,ugrave:MC,uml:AC,uuml:RC,yacute:PC,yen:OC,yuml:FC},DC={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var J5=jC;function jC(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=48&&n<=57}var zC=WC;function WC(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=97&&n<=102||n>=65&&n<=70||n>=48&&n<=57}var UC=HC;function HC(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=97&&n<=122||n>=65&&n<=90}var GC=UC,VC=J5,YC=ZC;function ZC(e){return GC(e)||VC(e)}var as,qC=59,KC=QC;function QC(e){var n="&"+e+";",t;return as=as||document.createElement("i"),as.innerHTML=n,t=as.textContent,t.charCodeAt(t.length-1)===qC&&e!=="semi"||t===n?!1:t}var G2=BC,V2=DC,XC=J5,JC=zC,eg=YC,ek=KC,nk=fk,tk={}.hasOwnProperty,tl=String.fromCharCode,rk=Function.prototype,Y2={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},ak=9,Z2=10,lk=12,ok=32,q2=38,ik=59,sk=60,dk=61,ck=35,uk=88,hk=120,pk=65533,ll="named",Cp="hexadecimal",kp="decimal",Sp={};Sp[Cp]=16;Sp[kp]=10;var Ad={};Ad[ll]=eg;Ad[kp]=XC;Ad[Cp]=JC;var ng=1,tg=2,rg=3,ag=4,lg=5,rh=6,og=7,ea={};ea[ng]="Named character references must be terminated by a semicolon";ea[tg]="Numeric character references must be terminated by a semicolon";ea[rg]="Named character references cannot be empty";ea[ag]="Numeric character references cannot be empty";ea[lg]="Named character references must be known";ea[rh]="Numeric character references cannot be disallowed";ea[og]="Numeric character references cannot be outside the permissible Unicode range";function fk(e,n){var t={},a,l;n||(n={});for(l in Y2)a=n[l],t[l]=a??Y2[l];return(t.position.indent||t.position.start)&&(t.indent=t.position.indent||[],t.position=t.position.start),mk(e,t)}function mk(e,n){var t=n.additional,a=n.nonTerminated,l=n.text,o=n.reference,i=n.warning,d=n.textContext,u=n.referenceContext,p=n.warningContext,g=n.position,y=n.indent||[],C=e.length,E=0,I=-1,k=g.column||1,M=g.line||1,w="",m=[],b,v,N,T,P,F,z,Z,pe,de,ze,ln,Ve,De,Ye,W,q,J,oe;for(typeof t=="string"&&(t=t.charCodeAt(0)),W=fe(),Z=i?zn:rk,E--,C++;++E<C;)if(P===Z2&&(k=y[I]||1),P=e.charCodeAt(E),P===q2){if(z=e.charCodeAt(E+1),z===ak||z===Z2||z===lk||z===ok||z===q2||z===sk||z!==z||t&&z===t){w+=tl(P),k++;continue}for(Ve=E+1,ln=Ve,oe=Ve,z===ck?(oe=++ln,z=e.charCodeAt(oe),z===uk||z===hk?(De=Cp,oe=++ln):De=kp):De=ll,b="",ze="",T="",Ye=Ad[De],oe--;++oe<C&&(z=e.charCodeAt(oe),!!Ye(z));)T+=tl(z),De===ll&&tk.call(G2,T)&&(b=T,ze=G2[T]);N=e.charCodeAt(oe)===ik,N&&(oe++,v=De===ll?ek(T):!1,v&&(b=T,ze=v)),J=1+oe-Ve,!N&&!a||(T?De===ll?(N&&!ze?Z(lg,1):(b!==T&&(oe=ln+b.length,J=1+oe-ln,N=!1),N||(pe=b?ng:rg,n.attribute?(z=e.charCodeAt(oe),z===dk?(Z(pe,J),ze=null):eg(z)?ze=null:Z(pe,J)):Z(pe,J))),F=ze):(N||Z(tg,J),F=parseInt(T,Sp[De]),gk(F)?(Z(og,J),F=tl(pk)):F in V2?(Z(rh,J),F=V2[F]):(de="",vk(F)&&Z(rh,J),F>65535&&(F-=65536,de+=tl(F>>>10|55296),F=56320|F&1023),F=de+tl(F))):De!==ll&&Z(ag,J)),F?(me(),W=fe(),E=oe-1,k+=oe-Ve+1,m.push(F),q=fe(),q.offset++,o&&o.call(u,F,{start:W,end:q},e.slice(Ve-1,oe)),W=q):(T=e.slice(Ve-1,oe),w+=T,k+=T.length,E=oe-1)}else P===10&&(M++,I++,k=0),P===P?(w+=tl(P),k++):me();return m.join("");function fe(){return{line:M,column:k,offset:E+(g.offset||0)}}function zn(en,Ze){var fn=fe();fn.column+=Ze,fn.offset+=Ze,i.call(p,ea[en],fn,en)}function me(){w&&(m.push(w),l&&l.call(d,w,{start:W,end:fe()}),w="")}}function gk(e){return e>=55296&&e<=57343||e>1114111}function vk(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var ig={exports:{}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(a){var l=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,i={},d={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function m(b){return b instanceof u?new u(b.type,m(b.content),b.alias):Array.isArray(b)?b.map(m):b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++o}),m.__id},clone:function m(b,v){v=v||{};var N,T;switch(d.util.type(b)){case"Object":if(T=d.util.objId(b),v[T])return v[T];N={},v[T]=N;for(var P in b)b.hasOwnProperty(P)&&(N[P]=m(b[P],v));return N;case"Array":return T=d.util.objId(b),v[T]?v[T]:(N=[],v[T]=N,b.forEach(function(F,z){N[z]=m(F,v)}),N);default:return b}},getLanguage:function(m){for(;m;){var b=l.exec(m.className);if(b)return b[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,b){m.className=m.className.replace(RegExp(l,"gi"),""),m.classList.add("language-"+b)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(N){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(N.stack)||[])[1];if(m){var b=document.getElementsByTagName("script");for(var v in b)if(b[v].src==m)return b[v]}return null}},isActive:function(m,b,v){for(var N="no-"+b;m;){var T=m.classList;if(T.contains(b))return!0;if(T.contains(N))return!1;m=m.parentElement}return!!v}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(m,b){var v=d.util.clone(d.languages[m]);for(var N in b)v[N]=b[N];return v},insertBefore:function(m,b,v,N){N=N||d.languages;var T=N[m],P={};for(var F in T)if(T.hasOwnProperty(F)){if(F==b)for(var z in v)v.hasOwnProperty(z)&&(P[z]=v[z]);v.hasOwnProperty(F)||(P[F]=T[F])}var Z=N[m];return N[m]=P,d.languages.DFS(d.languages,function(pe,de){de===Z&&pe!=m&&(this[pe]=P)}),P},DFS:function m(b,v,N,T){T=T||{};var P=d.util.objId;for(var F in b)if(b.hasOwnProperty(F)){v.call(b,F,b[F],N||F);var z=b[F],Z=d.util.type(z);Z==="Object"&&!T[P(z)]?(T[P(z)]=!0,m(z,v,null,T)):Z==="Array"&&!T[P(z)]&&(T[P(z)]=!0,m(z,v,F,T))}}},plugins:{},highlightAll:function(m,b){d.highlightAllUnder(document,m,b)},highlightAllUnder:function(m,b,v){var N={callback:v,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};d.hooks.run("before-highlightall",N),N.elements=Array.prototype.slice.apply(N.container.querySelectorAll(N.selector)),d.hooks.run("before-all-elements-highlight",N);for(var T=0,P;P=N.elements[T++];)d.highlightElement(P,b===!0,N.callback)},highlightElement:function(m,b,v){var N=d.util.getLanguage(m),T=d.languages[N];d.util.setLanguage(m,N);var P=m.parentElement;P&&P.nodeName.toLowerCase()==="pre"&&d.util.setLanguage(P,N);var F=m.textContent,z={element:m,language:N,grammar:T,code:F};function Z(de){z.highlightedCode=de,d.hooks.run("before-insert",z),z.element.innerHTML=z.highlightedCode,d.hooks.run("after-highlight",z),d.hooks.run("complete",z),v&&v.call(z.element)}if(d.hooks.run("before-sanity-check",z),P=z.element.parentElement,P&&P.nodeName.toLowerCase()==="pre"&&!P.hasAttribute("tabindex")&&P.setAttribute("tabindex","0"),!z.code){d.hooks.run("complete",z),v&&v.call(z.element);return}if(d.hooks.run("before-highlight",z),!z.grammar){Z(d.util.encode(z.code));return}if(b&&a.Worker){var pe=new Worker(d.filename);pe.onmessage=function(de){Z(de.data)},pe.postMessage(JSON.stringify({language:z.language,code:z.code,immediateClose:!0}))}else Z(d.highlight(z.code,z.grammar,z.language))},highlight:function(m,b,v){var N={code:m,grammar:b,language:v};if(d.hooks.run("before-tokenize",N),!N.grammar)throw new Error('The language "'+N.language+'" has no grammar.');return N.tokens=d.tokenize(N.code,N.grammar),d.hooks.run("after-tokenize",N),u.stringify(d.util.encode(N.tokens),N.language)},tokenize:function(m,b){var v=b.rest;if(v){for(var N in v)b[N]=v[N];delete b.rest}var T=new y;return C(T,T.head,m),g(m,T,b,T.head,0),I(T)},hooks:{all:{},add:function(m,b){var v=d.hooks.all;v[m]=v[m]||[],v[m].push(b)},run:function(m,b){var v=d.hooks.all[m];if(!(!v||!v.length))for(var N=0,T;T=v[N++];)T(b)}},Token:u};a.Prism=d;function u(m,b,v,N){this.type=m,this.content=b,this.alias=v,this.length=(N||"").length|0}u.stringify=function m(b,v){if(typeof b=="string")return b;if(Array.isArray(b)){var N="";return b.forEach(function(Z){N+=m(Z,v)}),N}var T={type:b.type,content:m(b.content,v),tag:"span",classes:["token",b.type],attributes:{},language:v},P=b.alias;P&&(Array.isArray(P)?Array.prototype.push.apply(T.classes,P):T.classes.push(P)),d.hooks.run("wrap",T);var F="";for(var z in T.attributes)F+=" "+z+'="'+(T.attributes[z]||"").replace(/"/g,"&quot;")+'"';return"<"+T.tag+' class="'+T.classes.join(" ")+'"'+F+">"+T.content+"</"+T.tag+">"};function p(m,b,v,N){m.lastIndex=b;var T=m.exec(v);if(T&&N&&T[1]){var P=T[1].length;T.index+=P,T[0]=T[0].slice(P)}return T}function g(m,b,v,N,T,P){for(var F in v)if(!(!v.hasOwnProperty(F)||!v[F])){var z=v[F];z=Array.isArray(z)?z:[z];for(var Z=0;Z<z.length;++Z){if(P&&P.cause==F+","+Z)return;var pe=z[Z],de=pe.inside,ze=!!pe.lookbehind,ln=!!pe.greedy,Ve=pe.alias;if(ln&&!pe.pattern.global){var De=pe.pattern.toString().match(/[imsuy]*$/)[0];pe.pattern=RegExp(pe.pattern.source,De+"g")}for(var Ye=pe.pattern||pe,W=N.next,q=T;W!==b.tail&&!(P&&q>=P.reach);q+=W.value.length,W=W.next){var J=W.value;if(b.length>m.length)return;if(!(J instanceof u)){var oe=1,fe;if(ln){if(fe=p(Ye,q,m,ze),!fe||fe.index>=m.length)break;var Ze=fe.index,zn=fe.index+fe[0].length,me=q;for(me+=W.value.length;Ze>=me;)W=W.next,me+=W.value.length;if(me-=W.value.length,q=me,W.value instanceof u)continue;for(var en=W;en!==b.tail&&(me<zn||typeof en.value=="string");en=en.next)oe++,me+=en.value.length;oe--,J=m.slice(q,me),fe.index-=q}else if(fe=p(Ye,0,J,ze),!fe)continue;var Ze=fe.index,fn=fe[0],On=J.slice(0,Ze),ra=J.slice(Ze+fn.length),aa=q+J.length;P&&aa>P.reach&&(P.reach=aa);var er=W.prev;On&&(er=C(b,er,On),q+=On.length),E(b,er,oe);var ql=new u(F,de?d.tokenize(fn,de):fn,Ve,fn);if(W=C(b,er,ql),ra&&C(b,W,ra),oe>1){var la={cause:F+","+Z,reach:aa};g(m,b,v,W.prev,q,la),P&&la.reach>P.reach&&(P.reach=la.reach)}}}}}}function y(){var m={value:null,prev:null,next:null},b={value:null,prev:m,next:null};m.next=b,this.head=m,this.tail=b,this.length=0}function C(m,b,v){var N=b.next,T={value:v,prev:b,next:N};return b.next=T,N.prev=T,m.length++,T}function E(m,b,v){for(var N=b.next,T=0;T<v&&N!==m.tail;T++)N=N.next;b.next=N,N.prev=b,m.length-=T}function I(m){for(var b=[],v=m.head.next;v!==m.tail;)b.push(v.value),v=v.next;return b}if(!a.document)return a.addEventListener&&(d.disableWorkerMessageHandler||a.addEventListener("message",function(m){var b=JSON.parse(m.data),v=b.language,N=b.code,T=b.immediateClose;a.postMessage(d.highlight(N,d.languages[v],v)),T&&a.close()},!1)),d;var k=d.util.currentScript();k&&(d.filename=k.src,k.hasAttribute("data-manual")&&(d.manual=!0));function M(){d.manual||d.highlightAll()}if(!d.manual){var w=document.readyState;w==="loading"||w==="interactive"&&k&&k.defer?document.addEventListener("DOMContentLoaded",M):window.requestAnimationFrame?window.requestAnimationFrame(M):window.setTimeout(M,16)}return d}(n);e.exports&&(e.exports=t),typeof Ho<"u"&&(Ho.Prism=t)})(ig);var bk=ig.exports,yk=Tp;Tp.displayName="markup";Tp.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function Tp(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(t,a){var l={};l["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[a]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};o["language-"+a]={pattern:/[\s\S]+/,inside:e.languages[a]};var i={};i[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:o},e.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(n,t){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:e.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var sg=Lp;Lp.displayName="css";Lp.aliases=[];function Lp(e){(function(n){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var a=n.languages.markup;a&&(a.tag.addInlined("style","css"),a.tag.addAttribute("style","css"))})(e)}const wk=Xt(sg);var xk=_p;_p.displayName="clike";_p.aliases=[];function _p(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var Ck=Np;Np.displayName="javascript";Np.aliases=["js"];function Np(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var _o=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof Ho=="object"?Ho:{},kk=Dk();_o.Prism={manual:!0,disableWorkerMessageHandler:!0};var Sk=Dw,Tk=nk,dg=bk,Lk=yk,_k=sg,Nk=xk,$k=Ck;kk();var $p={}.hasOwnProperty;function cg(){}cg.prototype=dg;var pn=new cg,Ik=pn;pn.highlight=Mk;pn.register=xi;pn.alias=Ek;pn.registered=Ak;pn.listLanguages=Rk;xi(Lk);xi(_k);xi(Nk);xi($k);pn.util.encode=Fk;pn.Token.stringify=Pk;function xi(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");pn.languages[e.displayName]===void 0&&e(pn)}function Ek(e,n){var t=pn.languages,a=e,l,o,i,d;n&&(a={},a[e]=n);for(l in a)for(o=a[l],o=typeof o=="string"?[o]:o,i=o.length,d=-1;++d<i;)t[o[d]]=t[l]}function Mk(e,n){var t=dg.highlight,a;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(pn.util.type(n)==="Object")a=n,n=null;else{if(typeof n!="string")throw new Error("Expected `string` for `name`, got `"+n+"`");if($p.call(pn.languages,n))a=pn.languages[n];else throw new Error("Unknown language: `"+n+"` is not registered")}return t.call(this,e,a,n)}function Ak(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return $p.call(pn.languages,e)}function Rk(){var e=pn.languages,n=[],t;for(t in e)$p.call(e,t)&&typeof e[t]=="object"&&n.push(t);return n}function Pk(e,n,t){var a;return typeof e=="string"?{type:"text",value:e}:pn.util.type(e)==="Array"?Ok(e,n):(a={type:e.type,content:pn.Token.stringify(e.content,n,t),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:t},e.alias&&(a.classes=a.classes.concat(e.alias)),pn.hooks.run("wrap",a),Sk(a.tag+"."+a.classes.join("."),Bk(a.attributes),a.content))}function Ok(e,n){for(var t=[],a=e.length,l=-1,o;++l<a;)o=e[l],o!==""&&o!==null&&o!==void 0&&t.push(o);for(l=-1,a=t.length;++l<a;)o=t[l],t[l]=pn.Token.stringify(o,n,t);return t}function Fk(e){return e}function Bk(e){var n;for(n in e)e[n]=Tk(e[n]);return e}function Dk(){var e="Prism"in _o,n=e?_o.Prism:void 0;return t;function t(){e?_o.Prism=n:delete _o.Prism,e=void 0,n=void 0}}const Ip=Xt(Ik);var Ep=x9(Ip,{});Ep.registerLanguage=function(e,n){return Ip.register(n)};Ep.alias=function(e,n){return Ip.alias(e,n)};const Ba=Ep;var jk=Mp;Mp.displayName="bash";Mp.aliases=["shell"];function Mp(e){(function(n){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},l={bash:a,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};n.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:l},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:a}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:l},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:l.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:l.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},a.inside=n.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=l.variable[1].inside,d=0;d<o.length;d++)i[o[d]]=n.languages.bash[o[d]];n.languages.shell=n.languages.bash})(e)}const zk=Xt(jk);var Wk=Ap;Ap.displayName="json";Ap.aliases=["webmanifest"];function Ap(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}const Uk=Xt(Wk);var Hk=Rp;Rp.displayName="jsx";Rp.aliases=[];function Rp(e){(function(n){var t=n.util.clone(n.languages.javascript),a=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,l=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,o=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function i(p,g){return p=p.replace(/<S>/g,function(){return a}).replace(/<BRACES>/g,function(){return l}).replace(/<SPREAD>/g,function(){return o}),RegExp(p,g)}o=i(o).source,n.languages.jsx=n.languages.extend("markup",t),n.languages.jsx.tag.pattern=i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),n.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,n.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,n.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,n.languages.jsx.tag.inside.comment=t.comment,n.languages.insertBefore("inside","attr-name",{spread:{pattern:i(/<SPREAD>/.source),inside:n.languages.jsx}},n.languages.jsx.tag),n.languages.insertBefore("inside","special-attr",{script:{pattern:i(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:n.languages.jsx}}},n.languages.jsx.tag);var d=function(p){return p?typeof p=="string"?p:typeof p.content=="string"?p.content:p.content.map(d).join(""):""},u=function(p){for(var g=[],y=0;y<p.length;y++){var C=p[y],E=!1;if(typeof C!="string"&&(C.type==="tag"&&C.content[0]&&C.content[0].type==="tag"?C.content[0].content[0].content==="</"?g.length>0&&g[g.length-1].tagName===d(C.content[0].content[1])&&g.pop():C.content[C.content.length-1].content==="/>"||g.push({tagName:d(C.content[0].content[1]),openedBraces:0}):g.length>0&&C.type==="punctuation"&&C.content==="{"?g[g.length-1].openedBraces++:g.length>0&&g[g.length-1].openedBraces>0&&C.type==="punctuation"&&C.content==="}"?g[g.length-1].openedBraces--:E=!0),(E||typeof C=="string")&&g.length>0&&g[g.length-1].openedBraces===0){var I=d(C);y<p.length-1&&(typeof p[y+1]=="string"||p[y+1].type==="plain-text")&&(I+=d(p[y+1]),p.splice(y+1,1)),y>0&&(typeof p[y-1]=="string"||p[y-1].type==="plain-text")&&(I=d(p[y-1])+I,p.splice(y-1,1),y--),p[y]=new n.Token("plain-text",I,null,I)}C.content&&typeof C.content!="string"&&u(C.content)}};n.hooks.add("after-tokenize",function(p){p.language!=="jsx"&&p.language!=="tsx"||u(p.tokens)})})(e)}const Gk=Xt(Hk);var Vk=Pp;Pp.displayName="scss";Pp.aliases=[];function Pp(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const Yk=Xt(Vk);var Zk=Op;Op.displayName="yaml";Op.aliases=["yml"];function Op(e){(function(n){var t=/[*&][^\s[\]{},]+/,a=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,l="(?:"+a.source+"(?:[ 	]+"+t.source+")?|"+t.source+"(?:[ 	]+"+a.source+")?)",o=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),i=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function d(u,p){p=(p||"").replace(/m/g,"")+"m";var g=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return l}).replace(/<<value>>/g,function(){return u});return RegExp(g,p)}n.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return l})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return l}).replace(/<<key>>/g,function(){return"(?:"+o+"|"+i+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:d(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:d(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:d(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:d(i),lookbehind:!0,greedy:!0},number:{pattern:d(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:a,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},n.languages.yml=n.languages.yaml})(e)}const qk=Xt(Zk);function ug(e){return typeof e=="string"}function Kk(e){return Array.isArray(e)}function Qk(e){return e===void 0}function Xk(e){return e===null}function $n(e){return!(Qk(e)||Xk(e))}function Jk(e){return!$n(e)}function eS(...e){throw new Error(e.join(""))}function nS(){return Intl.DateTimeFormat().resolvedOptions().locale}nS();const Ci=(e,n,t=1)=>{const a=n<e?-Math.abs(t):t;return Array(1+Math.floor(Math.abs((n-e)/t))).fill(e).map((l,o)=>l+o*a)};function hg(e,n=/,\s*|\s+/){return Jk(e)?[]:ug(e)?e.length?e.split(n):[]:Kk(e)?e:[e]}function tS(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function rS(e){return new Promise(n=>setTimeout(n,e))}Ba.registerLanguage("jsx",Gk);Ba.registerLanguage("json",Uk);Ba.registerLanguage("css",wk);Ba.registerLanguage("scss",Yk);Ba.registerLanguage("bash",zk);Ba.registerLanguage("yaml",qk);const Ie=({code:e,language:n="jsx",caption:t,expand:a=!1,fixed:l=a,className:o=""})=>{const[i,d]=D.useState(!1),[u,p]=D.useState(a),g=()=>{navigator.clipboard.writeText(e),d(!0),rS(2e3).then(()=>d(!1))};return s("div",{className:`codeblock ${o} ${u?"expanded":""} ${l?"fixed-open":"expandable"}`,children:[!!t&&r("h4",{className:"caption",children:t}),s("div",{className:"controls",children:[r("div",{className:"expand",onClick:()=>p(!u),children:u?"Compress":"Expand"}),r("div",{className:`clipboard ${i?"copied":""}`,onClick:g,children:i?"Copied":"Copy"})]}),r(Ba,{language:n,showLineNumbers:!0,useInlineStyles:!1,customStyle:{},children:aS(e)})]})},aS=e=>e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/\/\*\s*REAL\s*\*\/.*?\/\*\s*UNREAL\s*\*\//g,"").replaceAll(/{\/\*\s*(UN?)PRETEND\s*\*\/}/g,"").replace(/\n+$/,""),Dt=({children:e,code:n,caption:t,language:a,expand:l,className:o=""})=>s("div",{className:`grid-2 gap-8 top stack-desktop ${o}`,children:[r("div",{className:"wide",children:e}),r(Ie,{code:n,caption:t,language:a,expand:l,className:"mar-b-8"})]}),lS=`// define your brand hue and color name
$purple-hue:   295;
$brand-hue:    $purple-hue;
$brand-color:  'purple';

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,oS=`// define your own brand colors...
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
`,iS=`// define your own brand colors and greyscale hues...
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
`,sS=`// define the colors that you want to use...
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
 */function Ae(){return Ae=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Ae.apply(this,arguments)}var un;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(un||(un={}));const K2="popstate";function dS(e){e===void 0&&(e={});function n(a,l){let{pathname:o,search:i,hash:d}=a.location;return di("",{pathname:o,search:i,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(a,l){return typeof l=="string"?l:Ra(l)}return uS(n,t,null,e)}function Se(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Fl(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function cS(){return Math.random().toString(36).substr(2,8)}function Q2(e,n){return{usr:e.state,key:e.key,idx:n}}function di(e,n,t,a){return t===void 0&&(t=null),Ae({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?xr(n):n,{state:t,key:n&&n.key||a||cS()})}function Ra(e){let{pathname:n="/",search:t="",hash:a=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(n+=a.charAt(0)==="#"?a:"#"+a),n}function xr(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let a=e.indexOf("?");a>=0&&(n.search=e.substr(a),e=e.substr(0,a)),e&&(n.pathname=e)}return n}function uS(e,n,t,a){a===void 0&&(a={});let{window:l=document.defaultView,v5Compat:o=!1}=a,i=l.history,d=un.Pop,u=null,p=g();p==null&&(p=0,i.replaceState(Ae({},i.state,{idx:p}),""));function g(){return(i.state||{idx:null}).idx}function y(){d=un.Pop;let M=g(),w=M==null?null:M-p;p=M,u&&u({action:d,location:k.location,delta:w})}function C(M,w){d=un.Push;let m=di(k.location,M,w);t&&t(m,M),p=g()+1;let b=Q2(m,p),v=k.createHref(m);try{i.pushState(b,"",v)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;l.location.assign(v)}o&&u&&u({action:d,location:k.location,delta:1})}function E(M,w){d=un.Replace;let m=di(k.location,M,w);t&&t(m,M),p=g();let b=Q2(m,p),v=k.createHref(m);i.replaceState(b,"",v),o&&u&&u({action:d,location:k.location,delta:0})}function I(M){let w=l.location.origin!=="null"?l.location.origin:l.location.href,m=typeof M=="string"?M:Ra(M);return Se(w,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,w)}let k={get action(){return d},get location(){return e(l,i)},listen(M){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(K2,y),u=M,()=>{l.removeEventListener(K2,y),u=null}},createHref(M){return n(l,M)},createURL:I,encodeLocation(M){let w=I(M);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:C,replace:E,go(M){return i.go(M)}};return k}var vn;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vn||(vn={}));const hS=new Set(["lazy","caseSensitive","path","id","index","children"]);function pS(e){return e.index===!0}function ah(e,n,t,a){return t===void 0&&(t=[]),a===void 0&&(a={}),e.map((l,o)=>{let i=[...t,o],d=typeof l.id=="string"?l.id:i.join("-");if(Se(l.index!==!0||!l.children,"Cannot specify children on an index route"),Se(!a[d],'Found a route id collision on id "'+d+`".  Route id's must be globally unique within Data Router usages`),pS(l)){let u=Ae({},l,n(l),{id:d});return a[d]=u,u}else{let u=Ae({},l,n(l),{id:d,children:void 0});return a[d]=u,l.children&&(u.children=ah(l.children,n,i,a)),u}})}function wl(e,n,t){t===void 0&&(t="/");let a=typeof n=="string"?xr(n):n,l=Hl(a.pathname||"/",t);if(l==null)return null;let o=pg(e);fS(o);let i=null;for(let d=0;i==null&&d<o.length;++d)i=kS(o[d],LS(l));return i}function pg(e,n,t,a){n===void 0&&(n=[]),t===void 0&&(t=[]),a===void 0&&(a="");let l=(o,i,d)=>{let u={relativePath:d===void 0?o.path||"":d,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};u.relativePath.startsWith("/")&&(Se(u.relativePath.startsWith(a),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(a.length));let p=pr([a,u.relativePath]),g=t.concat(u);o.children&&o.children.length>0&&(Se(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),pg(o.children,n,g,p)),!(o.path==null&&!o.index)&&n.push({path:p,score:xS(p,o.index),routesMeta:g})};return e.forEach((o,i)=>{var d;if(o.path===""||!((d=o.path)!=null&&d.includes("?")))l(o,i);else for(let u of fg(o.path))l(o,i,u)}),n}function fg(e){let n=e.split("/");if(n.length===0)return[];let[t,...a]=n,l=t.endsWith("?"),o=t.replace(/\?$/,"");if(a.length===0)return l?[o,""]:[o];let i=fg(a.join("/")),d=[];return d.push(...i.map(u=>u===""?o:[o,u].join("/"))),l&&d.push(...i),d.map(u=>e.startsWith("/")&&u===""?"/":u)}function fS(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:CS(n.routesMeta.map(a=>a.childrenIndex),t.routesMeta.map(a=>a.childrenIndex)))}const mS=/^:\w+$/,gS=3,vS=2,bS=1,yS=10,wS=-2,X2=e=>e==="*";function xS(e,n){let t=e.split("/"),a=t.length;return t.some(X2)&&(a+=wS),n&&(a+=vS),t.filter(l=>!X2(l)).reduce((l,o)=>l+(mS.test(o)?gS:o===""?bS:yS),a)}function CS(e,n){return e.length===n.length&&e.slice(0,-1).every((a,l)=>a===n[l])?e[e.length-1]-n[n.length-1]:0}function kS(e,n){let{routesMeta:t}=e,a={},l="/",o=[];for(let i=0;i<t.length;++i){let d=t[i],u=i===t.length-1,p=l==="/"?n:n.slice(l.length)||"/",g=SS({path:d.relativePath,caseSensitive:d.caseSensitive,end:u},p);if(!g)return null;Object.assign(a,g.params);let y=d.route;o.push({params:a,pathname:pr([l,g.pathname]),pathnameBase:IS(pr([l,g.pathnameBase])),route:y}),g.pathnameBase!=="/"&&(l=pr([l,g.pathnameBase]))}return o}function SS(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,a]=TS(e.path,e.caseSensitive,e.end),l=n.match(t);if(!l)return null;let o=l[0],i=o.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:a.reduce((p,g,y)=>{if(g==="*"){let C=d[y]||"";i=o.slice(0,o.length-C.length).replace(/(.)\/+$/,"$1")}return p[g]=_S(d[y]||"",g),p},{}),pathname:o,pathnameBase:i,pattern:e}}function TS(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Fl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,d)=>(a.push(d),"/([^\\/]+)"));return e.endsWith("*")?(a.push("*"),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),a]}function LS(e){try{return decodeURI(e)}catch(n){return Fl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function _S(e,n){try{return decodeURIComponent(e)}catch(t){return Fl(!1,'The value for the URL param "'+n+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),e}}function Hl(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,a=e.charAt(t);return a&&a!=="/"?null:e.slice(t)||"/"}function NS(e,n){n===void 0&&(n="/");let{pathname:t,search:a="",hash:l=""}=typeof e=="string"?xr(e):e;return{pathname:t?t.startsWith("/")?t:$S(t,n):n,search:ES(a),hash:MS(l)}}function $S(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?t.length>1&&t.pop():l!=="."&&t.push(l)}),t.length>1?t.join("/"):"/"}function Yc(e,n,t,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Rd(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Fp(e,n,t,a){a===void 0&&(a=!1);let l;typeof e=="string"?l=xr(e):(l=Ae({},e),Se(!l.pathname||!l.pathname.includes("?"),Yc("?","pathname","search",l)),Se(!l.pathname||!l.pathname.includes("#"),Yc("#","pathname","hash",l)),Se(!l.search||!l.search.includes("#"),Yc("#","search","hash",l)));let o=e===""||l.pathname==="",i=o?"/":l.pathname,d;if(a||i==null)d=t;else{let y=n.length-1;if(i.startsWith("..")){let C=i.split("/");for(;C[0]==="..";)C.shift(),y-=1;l.pathname=C.join("/")}d=y>=0?n[y]:"/"}let u=NS(l,d),p=i&&i!=="/"&&i.endsWith("/"),g=(o||i===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(p||g)&&(u.pathname+="/"),u}const pr=e=>e.join("/").replace(/\/\/+/g,"/"),IS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ES=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,MS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Bp{constructor(n,t,a,l){l===void 0&&(l=!1),this.status=n,this.statusText=t||"",this.internal=l,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}}function mg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const gg=["post","put","patch","delete"],AS=new Set(gg),RS=["get",...gg],PS=new Set(RS),OS=new Set([301,302,303,307,308]),FS=new Set([307,308]),Zc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},BS={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},J2={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},vg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,DS=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function jS(e){const n=e.window?e.window:typeof window<"u"?window:void 0,t=typeof n<"u"&&typeof n.document<"u"&&typeof n.document.createElement<"u",a=!t;Se(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let l;if(e.mapRouteProperties)l=e.mapRouteProperties;else if(e.detectErrorBoundary){let O=e.detectErrorBoundary;l=B=>({hasErrorBoundary:O(B)})}else l=DS;let o={},i=ah(e.routes,l,void 0,o),d,u=e.basename||"/",p=Ae({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),g=null,y=new Set,C=null,E=null,I=null,k=e.hydrationData!=null,M=wl(i,e.history.location,u),w=null;if(M==null){let O=Pt(404,{pathname:e.history.location.pathname}),{matches:B,route:H}=o0(i);M=B,w={[H.id]:O}}let m=!M.some(O=>O.route.lazy)&&(!M.some(O=>O.route.loader)||e.hydrationData!=null),b,v={historyAction:e.history.action,location:e.history.location,matches:M,initialized:m,navigation:Zc,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||w,fetchers:new Map,blockers:new Map},N=un.Pop,T=!1,P,F=!1,z=!1,Z=[],pe=[],de=new Map,ze=0,ln=-1,Ve=new Map,De=new Set,Ye=new Map,W=new Map,q=new Map,J=!1;function oe(){return g=e.history.listen(O=>{let{action:B,location:H,delta:K}=O;if(J){J=!1;return}Fl(q.size===0||K!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let se=to({currentLocation:v.location,nextLocation:H,historyAction:B});if(se&&K!=null){J=!0,e.history.go(K*-1),sa(se,{state:"blocked",location:H,proceed(){sa(se,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),e.history.go(K)},reset(){kr(se),me({blockers:new Map(b.state.blockers)})}});return}return On(B,H)}),v.initialized||On(un.Pop,v.location),b}function fe(){g&&g(),y.clear(),P&&P.abort(),v.fetchers.forEach((O,B)=>Xl(B)),v.blockers.forEach((O,B)=>kr(B))}function zn(O){return y.add(O),()=>y.delete(O)}function me(O){v=Ae({},v,O),y.forEach(B=>B(v))}function en(O,B){var H,K;let se=v.actionData!=null&&v.navigation.formMethod!=null&&ir(v.navigation.formMethod)&&v.navigation.state==="loading"&&((H=O.state)==null?void 0:H._isRedirect)!==!0,ce;B.actionData?Object.keys(B.actionData).length>0?ce=B.actionData:ce=null:se?ce=v.actionData:ce=null;let ue=B.loaderData?l0(v.loaderData,B.loaderData,B.matches||[],B.errors):v.loaderData;for(let[le]of q)kr(le);let he=T===!0||v.navigation.formMethod!=null&&ir(v.navigation.formMethod)&&((K=O.state)==null?void 0:K._isRedirect)!==!0;d&&(i=d,d=void 0),me(Ae({},B,{actionData:ce,loaderData:ue,historyAction:N,location:O,initialized:!0,navigation:Zc,revalidation:"idle",restoreScrollPosition:$i(O,B.matches||v.matches),preventScrollReset:he,blockers:new Map(v.blockers)})),F||N===un.Pop||(N===un.Push?e.history.push(O,O.state):N===un.Replace&&e.history.replace(O,O.state)),N=un.Pop,T=!1,F=!1,z=!1,Z=[],pe=[]}async function Ze(O,B){if(typeof O=="number"){e.history.go(O);return}let H=lh(v.location,v.matches,u,p.v7_prependBasename,O,B==null?void 0:B.fromRouteId,B==null?void 0:B.relative),{path:K,submission:se,error:ce}=e0(p.v7_normalizeFormMethod,!1,H,B),ue=v.location,he=di(v.location,K,B&&B.state);he=Ae({},he,e.history.encodeLocation(he));let le=B&&B.replace!=null?B.replace:void 0,_e=un.Push;le===!0?_e=un.Replace:le===!1||se!=null&&ir(se.formMethod)&&se.formAction===v.location.pathname+v.location.search&&(_e=un.Replace);let Re=B&&"preventScrollReset"in B?B.preventScrollReset===!0:void 0,wn=to({currentLocation:ue,nextLocation:he,historyAction:_e});if(wn){sa(wn,{state:"blocked",location:he,proceed(){sa(wn,{state:"proceeding",proceed:void 0,reset:void 0,location:he}),Ze(O,B)},reset(){kr(wn),me({blockers:new Map(v.blockers)})}});return}return await On(_e,he,{submission:se,pendingError:ce,preventScrollReset:Re,replace:B&&B.replace})}function fn(){if(Ql(),me({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){On(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}On(N||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function On(O,B,H){P&&P.abort(),P=null,N=O,F=(H&&H.startUninterruptedRevalidation)===!0,Ni(v.location,v.matches),T=(H&&H.preventScrollReset)===!0;let K=d||i,se=H&&H.overrideNavigation,ce=wl(K,B,u);if(!ce){let dn=Pt(404,{pathname:B.pathname}),{matches:mn,route:yt}=o0(K);za(),en(B,{matches:mn,loaderData:{},errors:{[yt.id]:dn}});return}if(v.initialized&&!z&&GS(v.location,B)&&!(H&&H.submission&&ir(H.submission.formMethod))){en(B,{matches:ce});return}P=new AbortController;let ue=xo(e.history,B,P.signal,H&&H.submission),he,le;if(H&&H.pendingError)le={[xl(ce).route.id]:H.pendingError};else if(H&&H.submission&&ir(H.submission.formMethod)){let dn=await ra(ue,B,H.submission,ce,{replace:H.replace});if(dn.shortCircuited)return;he=dn.pendingActionData,le=dn.pendingActionError,se=Ae({state:"loading",location:B},H.submission),ue=new Request(ue.url,{signal:ue.signal})}let{shortCircuited:_e,loaderData:Re,errors:wn}=await aa(ue,B,ce,se,H&&H.submission,H&&H.fetcherSubmission,H&&H.replace,he,le);_e||(P=null,en(B,Ae({matches:ce},he?{actionData:he}:{},{loaderData:Re,errors:wn})))}async function ra(O,B,H,K,se){Ql();let ce=Ae({state:"submitting",location:B},H);me({navigation:ce});let ue,he=oh(K,B);if(!he.route.action&&!he.route.lazy)ue={type:vn.error,error:Pt(405,{method:O.method,pathname:B.pathname,routeId:he.route.id})};else if(ue=await wo("action",O,he,K,o,l,u),O.signal.aborted)return{shortCircuited:!0};if(Nl(ue)){let le;return se&&se.replace!=null?le=se.replace:le=ue.location===v.location.pathname+v.location.search,await oa(v,ue,{submission:H,replace:le}),{shortCircuited:!0}}if(zo(ue)){let le=xl(K,he.route.id);return(se&&se.replace)!==!0&&(N=un.Push),{pendingActionData:{},pendingActionError:{[le.route.id]:ue.error}}}if(Sa(ue))throw Pt(400,{type:"defer-action"});return{pendingActionData:{[he.route.id]:ue.data}}}async function aa(O,B,H,K,se,ce,ue,he,le){let _e=K;_e||(_e=Ae({state:"loading",location:B,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},se));let Re=se||ce?se||ce:_e.formMethod&&_e.formAction&&_e.formData&&_e.formEncType?{formMethod:_e.formMethod,formAction:_e.formAction,formData:_e.formData,formEncType:_e.formEncType}:void 0,wn=d||i,[dn,mn]=n0(e.history,v,H,Re,B,z,Z,pe,Ye,wn,u,he,le);if(za(je=>!(H&&H.some(Kn=>Kn.route.id===je))||dn&&dn.some(Kn=>Kn.route.id===je)),dn.length===0&&mn.length===0){let je=eo();return en(B,Ae({matches:H,loaderData:{},errors:le||null},he?{actionData:he}:{},je?{fetchers:new Map(v.fetchers)}:{})),{shortCircuited:!0}}if(!F){mn.forEach(Kn=>{let tr=v.fetchers.get(Kn.key),gn={state:"loading",data:tr&&tr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(Kn.key,gn)});let je=he||v.actionData;me(Ae({navigation:_e},je?Object.keys(je).length===0?{actionData:null}:{actionData:je}:{},mn.length>0?{fetchers:new Map(v.fetchers)}:{}))}ln=++ze,mn.forEach(je=>{je.controller&&de.set(je.key,je.controller)});let yt=()=>mn.forEach(je=>nr(je.key));P&&P.signal.addEventListener("abort",yt);let{results:da,loaderResults:ro,fetcherResults:Wa}=await Ti(v.matches,H,dn,mn,O);if(O.signal.aborted)return{shortCircuited:!0};P&&P.signal.removeEventListener("abort",yt),mn.forEach(je=>de.delete(je.key));let Nt=i0(da);if(Nt)return await oa(v,Nt,{replace:ue}),{shortCircuited:!0};let{loaderData:ca,errors:Ua}=a0(v,H,dn,ro,le,mn,Wa,W);W.forEach((je,Kn)=>{je.subscribe(tr=>{(tr||je.done)&&W.delete(Kn)})});let ao=eo(),lo=no(ln),Ha=ao||lo||mn.length>0;return Ae({loaderData:ca,errors:Ua},Ha?{fetchers:new Map(v.fetchers)}:{})}function er(O){return v.fetchers.get(O)||BS}function ql(O,B,H,K){if(a)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");de.has(O)&&nr(O);let se=d||i,ce=lh(v.location,v.matches,u,p.v7_prependBasename,H,B,K==null?void 0:K.relative),ue=wl(se,ce,u);if(!ue){ia(O,B,Pt(404,{pathname:ce}));return}let{path:he,submission:le}=e0(p.v7_normalizeFormMethod,!0,ce,K),_e=oh(ue,he);if(T=(K&&K.preventScrollReset)===!0,le&&ir(le.formMethod)){la(O,B,he,_e,ue,le);return}Ye.set(O,{routeId:B,path:he}),Kl(O,B,he,_e,ue,le)}async function la(O,B,H,K,se,ce){if(Ql(),Ye.delete(O),!K.route.action&&!K.route.lazy){let gn=Pt(405,{method:ce.formMethod,pathname:H,routeId:B});ia(O,B,gn);return}let ue=v.fetchers.get(O),he=Ae({state:"submitting"},ce,{data:ue&&ue.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(O,he),me({fetchers:new Map(v.fetchers)});let le=new AbortController,_e=xo(e.history,H,le.signal,ce);de.set(O,le);let Re=await wo("action",_e,K,se,o,l,u);if(_e.signal.aborted){de.get(O)===le&&de.delete(O);return}if(Nl(Re)){de.delete(O),De.add(O);let gn=Ae({state:"loading"},ce,{data:void 0," _hasFetcherDoneAnything ":!0});return v.fetchers.set(O,gn),me({fetchers:new Map(v.fetchers)}),oa(v,Re,{submission:ce,isFetchActionRedirect:!0})}if(zo(Re)){ia(O,B,Re.error);return}if(Sa(Re))throw Pt(400,{type:"defer-action"});let wn=v.navigation.location||v.location,dn=xo(e.history,wn,le.signal),mn=d||i,yt=v.navigation.state!=="idle"?wl(mn,v.navigation.location,u):v.matches;Se(yt,"Didn't find any matches after fetcher action");let da=++ze;Ve.set(O,da);let ro=Ae({state:"loading",data:Re.data},ce,{" _hasFetcherDoneAnything ":!0});v.fetchers.set(O,ro);let[Wa,Nt]=n0(e.history,v,yt,ce,wn,z,Z,pe,Ye,mn,u,{[K.route.id]:Re.data},void 0);Nt.filter(gn=>gn.key!==O).forEach(gn=>{let oo=gn.key,Ii=v.fetchers.get(oo),Ei={state:"loading",data:Ii&&Ii.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(oo,Ei),gn.controller&&de.set(oo,gn.controller)}),me({fetchers:new Map(v.fetchers)});let ca=()=>Nt.forEach(gn=>nr(gn.key));le.signal.addEventListener("abort",ca);let{results:Ua,loaderResults:ao,fetcherResults:lo}=await Ti(v.matches,yt,Wa,Nt,dn);if(le.signal.aborted)return;le.signal.removeEventListener("abort",ca),Ve.delete(O),de.delete(O),Nt.forEach(gn=>de.delete(gn.key));let Ha=i0(Ua);if(Ha)return oa(v,Ha);let{loaderData:je,errors:Kn}=a0(v,v.matches,Wa,ao,void 0,Nt,lo,W);if(v.fetchers.has(O)){let gn={state:"idle",data:Re.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(O,gn)}let tr=no(da);v.navigation.state==="loading"&&da>ln?(Se(N,"Expected pending action"),P&&P.abort(),en(v.navigation.location,{matches:yt,loaderData:je,errors:Kn,fetchers:new Map(v.fetchers)})):(me(Ae({errors:Kn,loaderData:l0(v.loaderData,je,yt,Kn)},tr||Nt.length>0?{fetchers:new Map(v.fetchers)}:{})),z=!1)}async function Kl(O,B,H,K,se,ce){let ue=v.fetchers.get(O),he=Ae({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ce,{data:ue&&ue.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(O,he),me({fetchers:new Map(v.fetchers)});let le=new AbortController,_e=xo(e.history,H,le.signal);de.set(O,le);let Re=await wo("loader",_e,K,se,o,l,u);if(Sa(Re)&&(Re=await xg(Re,_e.signal,!0)||Re),de.get(O)===le&&de.delete(O),_e.signal.aborted)return;if(Nl(Re)){De.add(O),await oa(v,Re);return}if(zo(Re)){let dn=xl(v.matches,B);v.fetchers.delete(O),me({fetchers:new Map(v.fetchers),errors:{[dn.route.id]:Re.error}});return}Se(!Sa(Re),"Unhandled fetcher deferred data");let wn={state:"idle",data:Re.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(O,wn),me({fetchers:new Map(v.fetchers)})}async function oa(O,B,H){let{submission:K,replace:se,isFetchActionRedirect:ce}=H===void 0?{}:H;B.revalidate&&(z=!0);let ue=di(O.location,B.location,Ae({_isRedirect:!0},ce?{_isFetchActionRedirect:!0}:{}));if(Se(ue,"Expected a location on the redirect navigation"),vg.test(B.location)&&t){let dn=e.history.createURL(B.location),mn=Hl(dn.pathname,u)==null;if(n.location.origin!==dn.origin||mn){se?n.location.replace(B.location):n.location.assign(B.location);return}}P=null;let he=se===!0?un.Replace:un.Push,{formMethod:le,formAction:_e,formEncType:Re,formData:wn}=O.navigation;!K&&le&&_e&&wn&&Re&&(K={formMethod:le,formAction:_e,formEncType:Re,formData:wn}),FS.has(B.status)&&K&&ir(K.formMethod)?await On(he,ue,{submission:Ae({},K,{formAction:B.location}),preventScrollReset:T}):ce?await On(he,ue,{overrideNavigation:{state:"loading",location:ue,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:K,preventScrollReset:T}):await On(he,ue,{overrideNavigation:{state:"loading",location:ue,formMethod:K?K.formMethod:void 0,formAction:K?K.formAction:void 0,formEncType:K?K.formEncType:void 0,formData:K?K.formData:void 0},preventScrollReset:T})}async function Ti(O,B,H,K,se){let ce=await Promise.all([...H.map(le=>wo("loader",se,le,B,o,l,u)),...K.map(le=>le.matches&&le.match&&le.controller?wo("loader",xo(e.history,le.path,le.controller.signal),le.match,le.matches,o,l,u):{type:vn.error,error:Pt(404,{pathname:le.path})})]),ue=ce.slice(0,H.length),he=ce.slice(H.length);return await Promise.all([s0(O,H,ue,ue.map(()=>se.signal),!1,v.loaderData),s0(O,K.map(le=>le.match),he,K.map(le=>le.controller?le.controller.signal:null),!0)]),{results:ce,loaderResults:ue,fetcherResults:he}}function Ql(){z=!0,Z.push(...za()),Ye.forEach((O,B)=>{de.has(B)&&(pe.push(B),nr(B))})}function ia(O,B,H){let K=xl(v.matches,B);Xl(O),me({errors:{[K.route.id]:H},fetchers:new Map(v.fetchers)})}function Xl(O){let B=v.fetchers.get(O);de.has(O)&&!(B&&B.state==="loading"&&Ve.has(O))&&nr(O),Ye.delete(O),Ve.delete(O),De.delete(O),v.fetchers.delete(O)}function nr(O){let B=de.get(O);Se(B,"Expected fetch controller: "+O),B.abort(),de.delete(O)}function Jl(O){for(let B of O){let K={state:"idle",data:er(B).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(B,K)}}function eo(){let O=[],B=!1;for(let H of De){let K=v.fetchers.get(H);Se(K,"Expected fetcher: "+H),K.state==="loading"&&(De.delete(H),O.push(H),B=!0)}return Jl(O),B}function no(O){let B=[];for(let[H,K]of Ve)if(K<O){let se=v.fetchers.get(H);Se(se,"Expected fetcher: "+H),se.state==="loading"&&(nr(H),Ve.delete(H),B.push(H))}return Jl(B),B.length>0}function Li(O,B){let H=v.blockers.get(O)||J2;return q.get(O)!==B&&q.set(O,B),H}function kr(O){v.blockers.delete(O),q.delete(O)}function sa(O,B){let H=v.blockers.get(O)||J2;Se(H.state==="unblocked"&&B.state==="blocked"||H.state==="blocked"&&B.state==="blocked"||H.state==="blocked"&&B.state==="proceeding"||H.state==="blocked"&&B.state==="unblocked"||H.state==="proceeding"&&B.state==="unblocked","Invalid blocker state transition: "+H.state+" -> "+B.state),v.blockers.set(O,B),me({blockers:new Map(v.blockers)})}function to(O){let{currentLocation:B,nextLocation:H,historyAction:K}=O;if(q.size===0)return;q.size>1&&Fl(!1,"A router only supports one blocker at a time");let se=Array.from(q.entries()),[ce,ue]=se[se.length-1],he=v.blockers.get(ce);if(!(he&&he.state==="proceeding")&&ue({currentLocation:B,nextLocation:H,historyAction:K}))return ce}function za(O){let B=[];return W.forEach((H,K)=>{(!O||O(K))&&(H.cancel(),B.push(K),W.delete(K))}),B}function _i(O,B,H){if(C=O,I=B,E=H||(K=>K.key),!k&&v.navigation===Zc){k=!0;let K=$i(v.location,v.matches);K!=null&&me({restoreScrollPosition:K})}return()=>{C=null,I=null,E=null}}function Ni(O,B){if(C&&E&&I){let H=B.map(se=>d0(se,v.loaderData)),K=E(O,H)||O.key;C[K]=I()}}function $i(O,B){if(C&&E&&I){let H=B.map(ce=>d0(ce,v.loaderData)),K=E(O,H)||O.key,se=C[K];if(typeof se=="number")return se}return null}function Vd(O){o={},d=ah(O,l,void 0,o)}return b={get basename(){return u},get state(){return v},get routes(){return i},initialize:oe,subscribe:zn,enableScrollRestoration:_i,navigate:Ze,fetch:ql,revalidate:fn,createHref:O=>e.history.createHref(O),encodeLocation:O=>e.history.encodeLocation(O),getFetcher:er,deleteFetcher:Xl,dispose:fe,getBlocker:Li,deleteBlocker:kr,_internalFetchControllers:de,_internalActiveDeferreds:W,_internalSetRoutes:Vd},b}function zS(e){return e!=null&&"formData"in e}function lh(e,n,t,a,l,o,i){let d,u;if(o!=null&&i!=="path"){d=[];for(let g of n)if(d.push(g),g.route.id===o){u=g;break}}else d=n,u=n[n.length-1];let p=Fp(l||".",Rd(d).map(g=>g.pathnameBase),Hl(e.pathname,t)||e.pathname,i==="path");return l==null&&(p.search=e.search,p.hash=e.hash),(l==null||l===""||l===".")&&u&&u.route.index&&!Dp(p.search)&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),a&&t!=="/"&&(p.pathname=p.pathname==="/"?t:pr([t,p.pathname])),Ra(p)}function e0(e,n,t,a){if(!a||!zS(a))return{path:t};if(a.formMethod&&!ZS(a.formMethod))return{path:t,error:Pt(405,{method:a.formMethod})};let l;if(a.formData){let d=a.formMethod||"get";if(l={formMethod:e?d.toUpperCase():d.toLowerCase(),formAction:wg(t),formEncType:a&&a.formEncType||"application/x-www-form-urlencoded",formData:a.formData},ir(l.formMethod))return{path:t,submission:l}}let o=xr(t),i=yg(a.formData);return n&&o.search&&Dp(o.search)&&i.append("index",""),o.search="?"+i,{path:Ra(o),submission:l}}function WS(e,n){let t=e;if(n){let a=e.findIndex(l=>l.route.id===n);a>=0&&(t=e.slice(0,a))}return t}function n0(e,n,t,a,l,o,i,d,u,p,g,y,C){let E=C?Object.values(C)[0]:y?Object.values(y)[0]:void 0,I=e.createURL(n.location),k=e.createURL(l),M=C?Object.keys(C)[0]:void 0,m=WS(t,M).filter((v,N)=>{if(v.route.lazy)return!0;if(v.route.loader==null)return!1;if(US(n.loaderData,n.matches[N],v)||i.some(F=>F===v.route.id))return!0;let T=n.matches[N],P=v;return t0(v,Ae({currentUrl:I,currentParams:T.params,nextUrl:k,nextParams:P.params},a,{actionResult:E,defaultShouldRevalidate:o||I.pathname+I.search===k.pathname+k.search||I.search!==k.search||bg(T,P)}))}),b=[];return u.forEach((v,N)=>{if(!t.some(z=>z.route.id===v.routeId))return;let T=wl(p,v.path,g);if(!T){b.push({key:N,routeId:v.routeId,path:v.path,matches:null,match:null,controller:null});return}let P=oh(T,v.path);if(d.includes(N)){b.push({key:N,routeId:v.routeId,path:v.path,matches:T,match:P,controller:new AbortController});return}t0(P,Ae({currentUrl:I,currentParams:n.matches[n.matches.length-1].params,nextUrl:k,nextParams:t[t.length-1].params},a,{actionResult:E,defaultShouldRevalidate:o}))&&b.push({key:N,routeId:v.routeId,path:v.path,matches:T,match:P,controller:new AbortController})}),[m,b]}function US(e,n,t){let a=!n||t.route.id!==n.route.id,l=e[t.route.id]===void 0;return a||l}function bg(e,n){let t=e.route.path;return e.pathname!==n.pathname||t!=null&&t.endsWith("*")&&e.params["*"]!==n.params["*"]}function t0(e,n){if(e.route.shouldRevalidate){let t=e.route.shouldRevalidate(n);if(typeof t=="boolean")return t}return n.defaultShouldRevalidate}async function r0(e,n,t){if(!e.lazy)return;let a=await e.lazy();if(!e.lazy)return;let l=t[e.id];Se(l,"No route found in manifest");let o={};for(let i in a){let u=l[i]!==void 0&&i!=="hasErrorBoundary";Fl(!u,'Route "'+l.id+'" has a static property "'+i+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+i+'" will be ignored.')),!u&&!hS.has(i)&&(o[i]=a[i])}Object.assign(l,o),Object.assign(l,Ae({},n(l),{lazy:void 0}))}async function wo(e,n,t,a,l,o,i,d,u,p){d===void 0&&(d=!1),u===void 0&&(u=!1);let g,y,C,E=M=>{let w,m=new Promise((b,v)=>w=v);return C=()=>w(),n.signal.addEventListener("abort",C),Promise.race([M({request:n,params:t.params,context:p}),m])};try{let M=t.route[e];if(t.route.lazy)if(M)y=(await Promise.all([E(M),r0(t.route,o,l)]))[0];else if(await r0(t.route,o,l),M=t.route[e],M)y=await E(M);else if(e==="action"){let w=new URL(n.url),m=w.pathname+w.search;throw Pt(405,{method:n.method,pathname:m,routeId:t.route.id})}else return{type:vn.data,data:void 0};else if(M)y=await E(M);else{let w=new URL(n.url),m=w.pathname+w.search;throw Pt(404,{pathname:m})}Se(y!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+t.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(M){g=vn.error,y=M}finally{C&&n.signal.removeEventListener("abort",C)}if(YS(y)){let M=y.status;if(OS.has(M)){let b=y.headers.get("Location");if(Se(b,"Redirects returned/thrown from loaders/actions must have a Location header"),!vg.test(b))b=lh(new URL(n.url),a.slice(0,a.indexOf(t)+1),i,!0,b);else if(!d){let v=new URL(n.url),N=b.startsWith("//")?new URL(v.protocol+b):new URL(b),T=Hl(N.pathname,i)!=null;N.origin===v.origin&&T&&(b=N.pathname+N.search+N.hash)}if(d)throw y.headers.set("Location",b),y;return{type:vn.redirect,status:M,location:b,revalidate:y.headers.get("X-Remix-Revalidate")!==null}}if(u)throw{type:g||vn.data,response:y};let w,m=y.headers.get("Content-Type");return m&&/\bapplication\/json\b/.test(m)?w=await y.json():w=await y.text(),g===vn.error?{type:g,error:new Bp(M,y.statusText,w),headers:y.headers}:{type:vn.data,data:w,statusCode:y.status,headers:y.headers}}if(g===vn.error)return{type:g,error:y};if(VS(y)){var I,k;return{type:vn.deferred,deferredData:y,statusCode:(I=y.init)==null?void 0:I.status,headers:((k=y.init)==null?void 0:k.headers)&&new Headers(y.init.headers)}}return{type:vn.data,data:y}}function xo(e,n,t,a){let l=e.createURL(wg(n)).toString(),o={signal:t};if(a&&ir(a.formMethod)){let{formMethod:i,formEncType:d,formData:u}=a;o.method=i.toUpperCase(),o.body=d==="application/x-www-form-urlencoded"?yg(u):u}return new Request(l,o)}function yg(e){let n=new URLSearchParams;for(let[t,a]of e.entries())n.append(t,a instanceof File?a.name:a);return n}function HS(e,n,t,a,l){let o={},i=null,d,u=!1,p={};return t.forEach((g,y)=>{let C=n[y].route.id;if(Se(!Nl(g),"Cannot handle redirect results in processLoaderData"),zo(g)){let E=xl(e,C),I=g.error;a&&(I=Object.values(a)[0],a=void 0),i=i||{},i[E.route.id]==null&&(i[E.route.id]=I),o[C]=void 0,u||(u=!0,d=mg(g.error)?g.error.status:500),g.headers&&(p[C]=g.headers)}else Sa(g)?(l.set(C,g.deferredData),o[C]=g.deferredData.data):o[C]=g.data,g.statusCode!=null&&g.statusCode!==200&&!u&&(d=g.statusCode),g.headers&&(p[C]=g.headers)}),a&&(i=a,o[Object.keys(a)[0]]=void 0),{loaderData:o,errors:i,statusCode:d||200,loaderHeaders:p}}function a0(e,n,t,a,l,o,i,d){let{loaderData:u,errors:p}=HS(n,t,a,l,d);for(let g=0;g<o.length;g++){let{key:y,match:C,controller:E}=o[g];Se(i!==void 0&&i[g]!==void 0,"Did not find corresponding fetcher result");let I=i[g];if(!(E&&E.signal.aborted))if(zo(I)){let k=xl(e.matches,C==null?void 0:C.route.id);p&&p[k.route.id]||(p=Ae({},p,{[k.route.id]:I.error})),e.fetchers.delete(y)}else if(Nl(I))Se(!1,"Unhandled fetcher revalidation redirect");else if(Sa(I))Se(!1,"Unhandled fetcher deferred data");else{let k={state:"idle",data:I.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(y,k)}}return{loaderData:u,errors:p}}function l0(e,n,t,a){let l=Ae({},n);for(let o of t){let i=o.route.id;if(n.hasOwnProperty(i)?n[i]!==void 0&&(l[i]=n[i]):e[i]!==void 0&&o.route.loader&&(l[i]=e[i]),a&&a.hasOwnProperty(i))break}return l}function xl(e,n){return(n?e.slice(0,e.findIndex(a=>a.route.id===n)+1):[...e]).reverse().find(a=>a.route.hasErrorBoundary===!0)||e[0]}function o0(e){let n=e.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:n}],route:n}}function Pt(e,n){let{pathname:t,routeId:a,method:l,type:o}=n===void 0?{}:n,i="Unknown Server Error",d="Unknown @remix-run/router error";return e===400?(i="Bad Request",l&&t&&a?d="You made a "+l+' request to "'+t+'" but '+('did not provide a `loader` for route "'+a+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(d="defer() is not supported in actions")):e===403?(i="Forbidden",d='Route "'+a+'" does not match URL "'+t+'"'):e===404?(i="Not Found",d='No route matches URL "'+t+'"'):e===405&&(i="Method Not Allowed",l&&t&&a?d="You made a "+l.toUpperCase()+' request to "'+t+'" but '+('did not provide an `action` for route "'+a+'", ')+"so there is no way to handle the request.":l&&(d='Invalid request method "'+l.toUpperCase()+'"')),new Bp(e||500,i,new Error(d),!0)}function i0(e){for(let n=e.length-1;n>=0;n--){let t=e[n];if(Nl(t))return t}}function wg(e){let n=typeof e=="string"?xr(e):e;return Ra(Ae({},n,{hash:""}))}function GS(e,n){return e.pathname!==n.pathname||e.search!==n.search?!1:e.hash===""?n.hash!=="":e.hash===n.hash?!0:n.hash!==""}function Sa(e){return e.type===vn.deferred}function zo(e){return e.type===vn.error}function Nl(e){return(e&&e.type)===vn.redirect}function VS(e){let n=e;return n&&typeof n=="object"&&typeof n.data=="object"&&typeof n.subscribe=="function"&&typeof n.cancel=="function"&&typeof n.resolveData=="function"}function YS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function ZS(e){return PS.has(e.toLowerCase())}function ir(e){return AS.has(e.toLowerCase())}async function s0(e,n,t,a,l,o){for(let i=0;i<t.length;i++){let d=t[i],u=n[i];if(!u)continue;let p=e.find(y=>y.route.id===u.route.id),g=p!=null&&!bg(p,u)&&(o&&o[u.route.id])!==void 0;if(Sa(d)&&(l||g)){let y=a[i];Se(y,"Expected an AbortSignal for revalidating fetcher deferred result"),await xg(d,y,l).then(C=>{C&&(t[i]=C||t[i])})}}}async function xg(e,n,t){if(t===void 0&&(t=!1),!await e.deferredData.resolveData(n)){if(t)try{return{type:vn.data,data:e.deferredData.unwrappedData}}catch(l){return{type:vn.error,error:l}}return{type:vn.data,data:e.deferredData.data}}}function Dp(e){return new URLSearchParams(e).getAll("index").some(n=>n==="")}function d0(e,n){let{route:t,pathname:a,params:l}=e;return{id:t.id,pathname:a,params:l,data:n[t.id],handle:t.handle}}function oh(e,n){let t=typeof n=="string"?xr(n).search:n.search;if(e[e.length-1].route.index&&Dp(t||""))return e[e.length-1];let a=Rd(e);return a[a.length-1]}/**
 * React Router v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ld(){return ld=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ld.apply(this,arguments)}const Pd=D.createContext(null),jp=D.createContext(null),Da=D.createContext(null),Od=D.createContext(null),na=D.createContext({outlet:null,matches:[],isDataRoute:!1}),Cg=D.createContext(null);function qS(e,n){let{relative:t}=n===void 0?{}:n;ki()||Se(!1);let{basename:a,navigator:l}=D.useContext(Da),{hash:o,pathname:i,search:d}=zp(e,{relative:t}),u=i;return a!=="/"&&(u=i==="/"?a:pr([a,i])),l.createHref({pathname:u,search:d,hash:o})}function ki(){return D.useContext(Od)!=null}function Gl(){return ki()||Se(!1),D.useContext(Od).location}function kg(e){D.useContext(Da).static||D.useLayoutEffect(e)}function KS(){let{isDataRoute:e}=D.useContext(na);return e?cT():QS()}function QS(){ki()||Se(!1);let e=D.useContext(Pd),{basename:n,navigator:t}=D.useContext(Da),{matches:a}=D.useContext(na),{pathname:l}=Gl(),o=JSON.stringify(Rd(a).map(u=>u.pathnameBase)),i=D.useRef(!1);return kg(()=>{i.current=!0}),D.useCallback(function(u,p){if(p===void 0&&(p={}),!i.current)return;if(typeof u=="number"){t.go(u);return}let g=Fp(u,JSON.parse(o),l,p.relative==="path");e==null&&n!=="/"&&(g.pathname=g.pathname==="/"?n:pr([n,g.pathname])),(p.replace?t.replace:t.push)(g,p.state,p)},[n,t,o,l,e])}const XS=D.createContext(null);function JS(e){let n=D.useContext(na).outlet;return n&&D.createElement(XS.Provider,{value:e},n)}function zp(e,n){let{relative:t}=n===void 0?{}:n,{matches:a}=D.useContext(na),{pathname:l}=Gl(),o=JSON.stringify(Rd(a).map(i=>i.pathnameBase));return D.useMemo(()=>Fp(e,JSON.parse(o),l,t==="path"),[e,o,l,t])}function eT(e,n,t){ki()||Se(!1);let{navigator:a}=D.useContext(Da),{matches:l}=D.useContext(na),o=l[l.length-1],i=o?o.params:{};o&&o.pathname;let d=o?o.pathnameBase:"/";o&&o.route;let u=Gl(),p;if(n){var g;let k=typeof n=="string"?xr(n):n;d==="/"||(g=k.pathname)!=null&&g.startsWith(d)||Se(!1),p=k}else p=u;let y=p.pathname||"/",C=d==="/"?y:y.slice(d.length)||"/",E=wl(e,{pathname:C}),I=lT(E&&E.map(k=>Object.assign({},k,{params:Object.assign({},i,k.params),pathname:pr([d,a.encodeLocation?a.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?d:pr([d,a.encodeLocation?a.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),l,t);return n&&I?D.createElement(Od.Provider,{value:{location:ld({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:un.Pop}},I):I}function nT(){let e=dT(),n=mg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},n),t?D.createElement("pre",{style:l},t):null,o)}const tT=D.createElement(nT,null);class rT extends D.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error||t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error?D.createElement(na.Provider,{value:this.props.routeContext},D.createElement(Cg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function aT(e){let{routeContext:n,match:t,children:a}=e,l=D.useContext(Pd);return l&&l.static&&l.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=t.route.id),D.createElement(na.Provider,{value:n},a)}function lT(e,n,t){var a;if(n===void 0&&(n=[]),t===void 0&&(t=null),e==null){var l;if((l=t)!=null&&l.errors)e=t.matches;else return null}let o=e,i=(a=t)==null?void 0:a.errors;if(i!=null){let d=o.findIndex(u=>u.route.id&&(i==null?void 0:i[u.route.id]));d>=0||Se(!1),o=o.slice(0,Math.min(o.length,d+1))}return o.reduceRight((d,u,p)=>{let g=u.route.id?i==null?void 0:i[u.route.id]:null,y=null;t&&(y=u.route.errorElement||tT);let C=n.concat(o.slice(0,p+1)),E=()=>{let I;return g?I=y:u.route.Component?I=D.createElement(u.route.Component,null):u.route.element?I=u.route.element:I=d,D.createElement(aT,{match:u,routeContext:{outlet:d,matches:C,isDataRoute:t!=null},children:I})};return t&&(u.route.ErrorBoundary||u.route.errorElement||p===0)?D.createElement(rT,{location:t.location,revalidation:t.revalidation,component:y,error:g,children:E(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):E()},null)}var ih;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(ih||(ih={}));var ci;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(ci||(ci={}));function oT(e){let n=D.useContext(Pd);return n||Se(!1),n}function iT(e){let n=D.useContext(jp);return n||Se(!1),n}function sT(e){let n=D.useContext(na);return n||Se(!1),n}function Sg(e){let n=sT(),t=n.matches[n.matches.length-1];return t.route.id||Se(!1),t.route.id}function dT(){var e;let n=D.useContext(Cg),t=iT(ci.UseRouteError),a=Sg(ci.UseRouteError);return n||((e=t.errors)==null?void 0:e[a])}function cT(){let{router:e}=oT(ih.UseNavigateStable),n=Sg(ci.UseNavigateStable),t=D.useRef(!1);return kg(()=>{t.current=!0}),D.useCallback(function(l,o){o===void 0&&(o={}),t.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,ld({fromRouteId:n},o)))},[e,n])}const c0="startTransition";function uT(e){let{fallbackElement:n,router:t}=e,[a,l]=D.useState(t.state),o=D.useCallback(p=>{c0 in S1?S1[c0](()=>l(p)):l(p)},[l]);D.useLayoutEffect(()=>t.subscribe(o),[t,o]);let i=D.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:p=>t.navigate(p),push:(p,g,y)=>t.navigate(p,{state:g,preventScrollReset:y==null?void 0:y.preventScrollReset}),replace:(p,g,y)=>t.navigate(p,{replace:!0,state:g,preventScrollReset:y==null?void 0:y.preventScrollReset})}),[t]),d=t.basename||"/",u=D.useMemo(()=>({router:t,navigator:i,static:!1,basename:d}),[t,i,d]);return D.createElement(D.Fragment,null,D.createElement(Pd.Provider,{value:u},D.createElement(jp.Provider,{value:a},D.createElement(fT,{basename:d,location:a.location,navigationType:a.historyAction,navigator:i},a.initialized?D.createElement(hT,{routes:t.routes,state:a}):n))),null)}function hT(e){let{routes:n,state:t}=e;return eT(n,void 0,t)}function pT(e){return JS(e.context)}function fT(e){let{basename:n="/",children:t=null,location:a,navigationType:l=un.Pop,navigator:o,static:i=!1}=e;ki()&&Se(!1);let d=n.replace(/^\/*/,"/"),u=D.useMemo(()=>({basename:d,navigator:o,static:i}),[d,o,i]);typeof a=="string"&&(a=xr(a));let{pathname:p="/",search:g="",hash:y="",state:C=null,key:E="default"}=a,I=D.useMemo(()=>{let k=Hl(p,d);return k==null?null:{location:{pathname:k,search:g,hash:y,state:C,key:E},navigationType:l}},[d,p,g,y,C,E,l]);return I==null?null:D.createElement(Da.Provider,{value:u},D.createElement(Od.Provider,{children:t,value:I}))}var u0;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(u0||(u0={}));new Promise(()=>{});function mT(e){let n={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(n,{element:D.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(n,{errorElement:D.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),n}/**
 * React Router DOM v6.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bl(){return Bl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Bl.apply(this,arguments)}function Tg(e,n){if(e==null)return{};var t={},a=Object.keys(e),l,o;for(o=0;o<a.length;o++)l=a[o],!(n.indexOf(l)>=0)&&(t[l]=e[l]);return t}function gT(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function vT(e,n){return e.button===0&&(!n||n==="_self")&&!gT(e)}const bT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],yT=["aria-current","caseSensitive","className","end","style","to","children"];function wT(e,n){return jS({basename:n==null?void 0:n.basename,future:Bl({},n==null?void 0:n.future,{v7_prependBasename:!0}),history:dS({window:n==null?void 0:n.window}),hydrationData:(n==null?void 0:n.hydrationData)||xT(),routes:e,mapRouteProperties:mT}).initialize()}function xT(){var e;let n=(e=window)==null?void 0:e.__staticRouterHydrationData;return n&&n.errors&&(n=Bl({},n,{errors:CT(n.errors)})),n}function CT(e){if(!e)return null;let n=Object.entries(e),t={};for(let[a,l]of n)if(l&&l.__type==="RouteErrorResponse")t[a]=new Bp(l.status,l.statusText,l.data,l.internal===!0);else if(l&&l.__type==="Error"){let o=new Error(l.message);o.stack="",t[a]=o}else t[a]=l;return t}const kT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ST=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,TT=D.forwardRef(function(n,t){let{onClick:a,relative:l,reloadDocument:o,replace:i,state:d,target:u,to:p,preventScrollReset:g}=n,y=Tg(n,bT),{basename:C}=D.useContext(Da),E,I=!1;if(typeof p=="string"&&ST.test(p)&&(E=p,kT))try{let m=new URL(window.location.href),b=p.startsWith("//")?new URL(m.protocol+p):new URL(p),v=Hl(b.pathname,C);b.origin===m.origin&&v!=null?p=v+b.search+b.hash:I=!0}catch{}let k=qS(p,{relative:l}),M=_T(p,{replace:i,state:d,target:u,preventScrollReset:g,relative:l});function w(m){a&&a(m),m.defaultPrevented||M(m)}return D.createElement("a",Bl({},y,{href:E||k,onClick:I||o?a:w,ref:t,target:u}))}),LT=D.forwardRef(function(n,t){let{"aria-current":a="page",caseSensitive:l=!1,className:o="",end:i=!1,style:d,to:u,children:p}=n,g=Tg(n,yT),y=zp(u,{relative:g.relative}),C=Gl(),E=D.useContext(jp),{navigator:I}=D.useContext(Da),k=I.encodeLocation?I.encodeLocation(y).pathname:y.pathname,M=C.pathname,w=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;l||(M=M.toLowerCase(),w=w?w.toLowerCase():null,k=k.toLowerCase());let m=M===k||!i&&M.startsWith(k)&&M.charAt(k.length)==="/",b=w!=null&&(w===k||!i&&w.startsWith(k)&&w.charAt(k.length)==="/"),v=m?a:void 0,N;typeof o=="function"?N=o({isActive:m,isPending:b}):N=[o,m?"active":null,b?"pending":null].filter(Boolean).join(" ");let T=typeof d=="function"?d({isActive:m,isPending:b}):d;return D.createElement(TT,Bl({},g,{"aria-current":v,className:N,ref:t,style:T,to:u}),typeof p=="function"?p({isActive:m,isPending:b}):p)});var h0;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(h0||(h0={}));var p0;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(p0||(p0={}));function _T(e,n){let{target:t,replace:a,state:l,preventScrollReset:o,relative:i}=n===void 0?{}:n,d=KS(),u=Gl(),p=zp(e,{relative:i});return D.useCallback(g=>{if(vT(g,t)){g.preventDefault();let y=a!==void 0?a:Ra(u)===Ra(p);d(e,{replace:y,state:l,preventScrollReset:o,relative:i})}},[u,d,p,a,l,t,e,o,i])}const ur=({to:e,className:n="",exact:t,children:a,text:l,onClick:o,label:i,style:d})=>r(LT,{to:e,onClick:o,end:t&&"end",className:({isActive:u})=>`${n} ${u?"active":""}`,"aria-label":i,style:d,children:a||l}),an=(e,n)=>(t={})=>r(ur,{to:e,text:n,...t}),NT=an("/getting-started/installation","installation"),$T=an("/colors/utilities","color"),Lg=an("/colors/ranges","color ranges"),Wp=an("/colors/brand","brand colors"),_g=an("/colors/palette","custom palette"),IT=an("/colors/variables","CSS custom properties"),ET=an("/utilities","utility classes"),Fd=an("/utilities/borders","border"),Cr=an("/utilities/flex","flex"),ta=an("/utilities/grid","grid"),MT=an("/utilities/size","size"),AT=an("/utilities/shadows","shadow"),Bd=an("/utilities/spacing","spacing"),RT=an("/utilities/split","split"),PT=an("/utilities/stack","stacking"),Ng=an("/utilities/widths","width"),Up=an("/components/alerts","alerts"),OT=an("/components/icons","icons"),FT=an("/components/menus","menus"),BT=an("/components/tables","tables"),Hp=an("/forms","forms"),DT=an("/forms/text","text"),jT=an("/forms/checkboxes","checkbox"),zT=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Brand Colours"}),r("p",{children:"The palette is designed to be adjustable so that you can match it to your brand colors."}),r("h2",{children:"Brand Hue and Color"}),r(Dt,{code:lS,caption:"Brand Color",language:"scss",expand:!0,children:s("p",{children:["You should pick a color that is closest to your brand color and adjust the hue to match it if necessary.  Then define that as the"," ",r("code",{children:"$brand-hue"})," and set the ",r("code",{children:"$brand-color"})," by name."]})}),r("h2",{children:"Multiple Brand Colors"}),r(Dt,{code:oS,caption:"Brand Colors",language:"scss",expand:!0,children:s("p",{children:["If you have multiple brand colors you can set them using the"," ",r("code",{children:"$brand-colors"})," variable.  You can call them whatever you like (we're using ",r("code",{children:"primary"}),", ",r("code",{children:"secondary"})," ","and ",r("code",{children:"tertiary"})," in this example). You should define one to be the primary ",r("code",{children:"$brand-color"})," and set the ",r("code",{children:"$brand-hue"})]})}),r("h2",{children:"Greyscale Colors"}),s(Dt,{code:iS,caption:"Greyscale Colors",language:"scss",expand:!0,children:[s("p",{children:["An important side-effect of setting ",r("code",{children:"$brand-hue"})," is that it will set the hue of the greyscale color ranges to match it."]}),s("p",{children:["If you want to use different hues for the greyscale color ranges then you can do that using the ",r("code",{children:"$grey-hue"}),","," ",r("code",{children:"$grey20-hue"})," and ",r("code",{children:"$grey40-hue"})," variables."]})]}),r("h2",{children:"Culling the Palette"}),s(Dt,{code:sS,caption:"Selecting Colors",language:"scss",expand:!0,children:[r("p",{children:"The chances are that you aren't going to need all of the colors defined in the standard palette.  You can reduce the size of the generated CSS file by excluding any that you don't need."}),s("p",{children:["Set the ",r("code",{children:"$color-names"})," variable to list those that you want to keep.  Note that ",r("code",{children:"red"}),", ",r("code",{children:"orange"}),","," ",r("code",{children:"green"}),", ",r("code",{children:"blue"})," and ",r("code",{children:"grey"})," are used by various components, including ",r(Hp,{})," and"," ",r(Up,{})," so you'll probably want to keep those."]})]})]}),WT=Object.freeze(Object.defineProperty({__proto__:null,default:zT},Symbol.toStringTag,{value:"Module"})),UT={bars:"M0 96C0 78 14 64 32 64H416c18 0 32 14 32 32s-14 32-32 32H32C14 128 0 114 0 96zM0 256c0-18 14-32 32-32H416c18 0 32 14 32 32s-14 32-32 32H32c-18 0-32-14-32-32zM448 416c0 18-14 32-32 32H32c-18 0-32-14-32-32s14-32 32-32H416c18 0 32 14 32 32z",check:"M486,91C499,104 499,127 486,140L212,422C198,435 177,435 163,422L26,281C13,267 13,245 26,231C39,217 61,217 75,231L187,347L438,91C451,77 473,77 486,91L486,91Z",cross:"M456,109C470,94 470,71 456,56C441,42 418,42 403,56L256,204L109,56C94,42 71,42 56,56C42,71 42,94 56,109L204,256L56,403C42,418 42,441 56,456C71,470 94,470 109,456L256,308L403,456C418,470 441,470 456,456C470,441 470,418 456,403L308,256L456,109Z",github:"M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z",info:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13 0-24-11-24-24s11-24 24-24h48c13 0 24 11 24 24v88h8c13 0 24 11 24 24s-11 24-24 24H216c-13 0-24-11-24-24s11-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",lock:"M159,133L159,226L301,226L301,133C301,94 269,62 230,62C191,62 159,94 159,133ZM101,226L101,133C101,62 159,4 230,4C301,4 359,62 359,133L359,226L373,226C404,226 430,252 430,283L430,455C430,486 404,512 373,512L87,512C56,512 30,486 30,455L30,283C30,252 56,226 87,226L101,226Z",pen:"M356,34L311,79L433,201L478,156C502,132 502,94 478,71L441,34C418,10 380,10 356,34L356,34ZM290,100L71,319C61,329 54,341 50,355L16,468C14,476 16,484 22,490C28,496 36,498 44,496L157,462C171,458 183,451 192,442L412,222L290,100Z",plus:"M292,56C292,36 276,20 256,20C236,20 220,36 220,56L220,220L56,220C36,220 20,236 20,256C20,276 36,292 56,292L220,292L220,456C220,476 236,492 256,492C276,492 292,476 292,456L292,292L456,292C476,292 492,276 492,256C492,236 476,220 456,220L292,220L292,56Z",trash:"M173,33L166,46L76,46C59,46 46,59 46,76C46,93 59,106 76,106L436,106C453,106 466,93 466,76C466,59 453,46 436,46L346,46L339,33C334,22 324,16 312,16L200,16C188,16 178,22 173,33ZM436,136L76,136L96,454C97,478 117,496 141,496L371,496C395,496 415,478 416,454L436,136Z",undo:"M168,224L40,224C27,224 16,213 16,200L16,72C16,62 22,54 31,50C40,46 50,48 57,55L99,97C186,10 327,10 414,98C502,185 502,327 414,414C327,502 185,502 98,414C85,402 85,382 98,369C110,357 130,357 143,369C205,432 307,432 369,369C432,307 432,205 369,143C307,81 207,80 144,142L185,183C192,190 194,200 190,209C187,218 178,224 168,224Z",unlock:"M313,131C313,92 345,60 384,60C423,60 455,92 455,131L455,174C455,190 468,203 484,203C499,203 512,190 512,174L512,131C512,61 455,3 384,3C313,3 256,61 256,131L256,227L57,227C26,227 0,253 0,284L0,455C0,486 26,512 57,512L341,512C373,512 398,486 398,455L398,284C398,253 373,227 341,227L313,227L313,131Z",checked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083ZM88.43,298.82C75.421,285.811 75.421,264.689 88.43,251.68C101.439,238.671 122.561,238.671 135.57,251.68L202,318.11L376.43,143.68C389.439,130.671 410.561,130.671 423.57,143.68C436.579,156.689 436.579,177.811 423.57,190.82L225.57,388.82C212.553,401.838 191.447,401.838 178.43,388.82L88.43,298.82Z",unchecked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083Z"},HT=e=>{const n=UT[e]||eS(`Invalid icon name: ${e}`);return ug(n)?{path:n,width:512,height:512}:n},f0=({path:e,onClick:n,width:t=512,height:a=512,style:l,className:o="",fill:i="currentColor"})=>r("svg",{"aria-hidden":"true",focusable:"false",className:`${o} icon`,style:l,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${t} ${a}`,onClick:n,children:r("path",{d:e,fill:i})}),Dl=({name:e,...n})=>e?r(f0,{...n,...HT(e)}):r(f0,{...n}),ja=({color:e,selected:n,select:t,iconColor:a="white",className:l="",alt:o=r(At,{children:" "})})=>r("button",{className:`${l} ${e} icon ${n?"focus":""}`,onClick:t,children:n?r(Dl,{name:"check",className:a}):o}),GT="Badger CSS",VT="Badger CSS palette",YT="badger-css",ZT="",qT={red:{name:"Red",hue:0,stops:{0:{h:0,s:65,l:5,hex:"#150404"},5:{h:0,s:66,l:8,hex:"#220707"},10:{h:0,s:68,l:11,hex:"#2f0909"},15:{h:0,s:69,l:15,hex:"#410c0c"},20:{h:0,s:70,l:18,hex:"#4e0e0e"},25:{h:0,s:71,l:22,hex:"#601010"},30:{h:0,s:72,l:27,hex:"#761313"},35:{h:0,s:73,l:31,hex:"#891515"},40:{h:0,s:73,l:36,hex:"#9f1919"},45:{h:0,s:74,l:42,hex:"#ba1c1c"},50:{h:0,s:74,l:48,hex:"#d52020"},55:{h:0,s:74,l:55,hex:"#e13737"},60:{h:0,s:75,l:62,hex:"#e75555"},65:{h:0,s:75,l:68,hex:"#eb7070"},70:{h:0,s:74,l:74,hex:"#ee8c8c"},75:{h:0,s:74,l:80,hex:"#f2a6a6"},80:{h:0,s:74,l:84,hex:"#f4b8b8"},85:{h:0,s:73,l:88,hex:"#f7caca"},90:{h:0,s:73,l:92,hex:"#f9dcdc"},95:{h:0,s:72,l:95,hex:"#fbe9e9"},100:{h:0,s:71,l:98,hex:"#fef6f6"}},curves:{h:{min:0,max:0,minControl:{x:30,y:0},maxControl:{x:70,y:0}},s:{min:65,max:71,minControl:{x:31,y:74},maxControl:{x:63,y:78}},l:{min:5,max:98,minControl:{x:62,y:42},maxControl:{x:53,y:72}}},uri:"red"},brown:{name:"Brown",hue:14,stops:{0:{h:10,s:52,l:5,hex:"#130806"},5:{h:11,s:53,l:8,hex:"#1f0e0a"},10:{h:11,s:54,l:11,hex:"#2b120d"},15:{h:12,s:54,l:14,hex:"#371810"},20:{h:13,s:55,l:17,hex:"#431e14"},25:{h:13,s:56,l:20,hex:"#502316"},30:{h:13,s:56,l:24,hex:"#5f2a1b"},35:{h:14,s:56,l:28,hex:"#6f321f"},40:{h:14,s:57,l:32,hex:"#803923"},45:{h:14,s:57,l:37,hex:"#944229"},50:{h:14,s:57,l:42,hex:"#a84b2e"},55:{h:14,s:58,l:47,hex:"#bd5332"},60:{h:14,s:58,l:53,hex:"#cd6242"},65:{h:15,s:58,l:60,hex:"#d47b5e"},70:{h:15,s:58,l:67,hex:"#dc927a"},75:{h:15,s:58,l:75,hex:"#e4ad9a"},80:{h:14,s:58,l:81,hex:"#ebc0b2"},85:{h:14,s:58,l:87,hex:"#f1d4cb"},90:{h:14,s:58,l:92,hex:"#f6e4df"},95:{h:14,s:57,l:95,hex:"#faeeeb"},100:{h:14,s:57,l:98,hex:"#fdf8f7"}},curves:{h:{min:10,max:14,minControl:{x:30,y:15},maxControl:{x:70,y:15}},s:{min:52,max:57,minControl:{x:35,y:58},maxControl:{x:66,y:59}},l:{min:5,max:98,minControl:{x:72,y:43},maxControl:{x:67,y:82}}},uri:"brown"},orange:{name:"Orange",hue:26,stops:{0:{h:27,s:93,l:5,hex:"#190c01"},5:{h:27,s:94,l:8,hex:"#281201"},10:{h:26,s:94,l:11,hex:"#361902"},15:{h:26,s:95,l:14,hex:"#461f02"},20:{h:26,s:96,l:18,hex:"#5a2802"},25:{h:26,s:96,l:21,hex:"#692f02"},30:{h:26,s:96,l:25,hex:"#7d3803"},35:{h:26,s:97,l:30,hex:"#974302"},40:{h:26,s:97,l:35,hex:"#b04e03"},45:{h:26,s:97,l:40,hex:"#c95903"},50:{h:26,s:97,l:46,hex:"#e76604"},55:{h:26,s:96,l:52,hex:"#fa750f"},60:{h:26,s:96,l:59,hex:"#fb8932"},65:{h:26,s:95,l:65,hex:"#fb9a51"},70:{h:27,s:94,l:72,hex:"#fbb174"},75:{h:27,s:93,l:78,hex:"#fbc293"},80:{h:28,s:92,l:83,hex:"#fcd1ac"},85:{h:28,s:91,l:88,hex:"#fcdfc5"},90:{h:29,s:90,l:91,hex:"#fde7d3"},95:{h:30,s:88,l:95,hex:"#fdf2e7"},100:{h:32,s:87,l:97,hex:"#fef8f1"}},curves:{h:{min:27,max:32,minControl:{x:30,y:25},maxControl:{x:77,y:24}},s:{min:93,max:87,minControl:{x:46,y:100},maxControl:{x:64,y:97}},l:{min:5,max:97,minControl:{x:62,y:39},maxControl:{x:62,y:80}}},uri:"orange"},yellow:{name:"Yellow",hue:41,stops:{0:{h:30,s:90,l:5,hex:"#180d01"},5:{h:31,s:91,l:8,hex:"#271502"},10:{h:33,s:92,l:10,hex:"#311c02"},15:{h:34,s:93,l:13,hex:"#402502"},20:{h:35,s:94,l:17,hex:"#543203"},25:{h:36,s:95,l:20,hex:"#633d03"},30:{h:37,s:96,l:24,hex:"#784b02"},35:{h:38,s:96,l:28,hex:"#8c5a03"},40:{h:39,s:97,l:33,hex:"#a66d03"},45:{h:40,s:97,l:38,hex:"#bf8003"},50:{h:41,s:97,l:43,hex:"#d89503"},55:{h:41,s:96,l:48,hex:"#f0a505"},60:{h:42,s:95,l:54,hex:"#f9b61a"},65:{h:43,s:94,l:60,hex:"#f9c339"},70:{h:43,s:93,l:66,hex:"#f9cb58"},75:{h:44,s:92,l:72,hex:"#f9d676"},80:{h:44,s:90,l:77,hex:"#f9dd90"},85:{h:44,s:88,l:82,hex:"#f9e4a9"},90:{h:45,s:86,l:87,hex:"#faecc1"},95:{h:45,s:84,l:92,hex:"#fcf3d9"},100:{h:45,s:82,l:96,hex:"#fdf9ec"}},curves:{h:{min:30,max:45,minControl:{x:28,y:38},maxControl:{x:70,y:45}},s:{min:90,max:82,minControl:{x:44,y:100},maxControl:{x:58,y:100}},l:{min:5,max:96,minControl:{x:52,y:31},maxControl:{x:64,y:67}}},uri:"yellow"},olive:{name:"Olive",hue:68,stops:{0:{h:72,s:66,l:4,hex:"#0e1103"},5:{h:72,s:68,l:6,hex:"#161a05"},10:{h:71,s:70,l:9,hex:"#212707"},15:{h:71,s:72,l:12,hex:"#2d3509"},20:{h:70,s:73,l:15,hex:"#39420a"},25:{h:70,s:74,l:18,hex:"#45500c"},30:{h:69,s:74,l:21,hex:"#515d0e"},35:{h:69,s:74,l:25,hex:"#616f11"},40:{h:69,s:73,l:29,hex:"#708014"},45:{h:68,s:70,l:33,hex:"#7f8f19"},50:{h:68,s:66,l:37,hex:"#8c9d20"},55:{h:67,s:60,l:43,hex:"#a0af2c"},60:{h:67,s:55,l:48,hex:"#aebe37"},65:{h:66,s:52,l:54,hex:"#bac74d"},70:{h:66,s:50,l:61,hex:"#c3cd6a"},75:{h:65,s:49,l:68,hex:"#cfd585"},80:{h:65,s:48,l:75,hex:"#d9dea1"},85:{h:65,s:49,l:82,hex:"#e4e8bb"},90:{h:64,s:49,l:87,hex:"#eceece"},95:{h:64,s:51,l:93,hex:"#f5f6e4"},100:{h:64,s:52,l:97,hex:"#fbfbf3"}},curves:{h:{min:72,max:64,minControl:{x:30,y:70},maxControl:{x:69,y:65}},s:{min:66,max:52,minControl:{x:69,y:96},maxControl:{x:37,y:33}},l:{min:4,max:97,minControl:{x:67,y:35},maxControl:{x:72,y:75}}},uri:"olive"},green:{name:"Green",hue:117,stops:{0:{h:117,s:45,l:5,hex:"#081207"},5:{h:117,s:48,l:8,hex:"#0c1e0b"},10:{h:117,s:50,l:11,hex:"#0f2a0e"},15:{h:117,s:52,l:14,hex:"#133611"},20:{h:117,s:53,l:17,hex:"#174214"},25:{h:117,s:54,l:21,hex:"#1c5219"},30:{h:117,s:55,l:25,hex:"#20631d"},35:{h:117,s:55,l:29,hex:"#257321"},40:{h:117,s:55,l:33,hex:"#2a8226"},45:{h:117,s:54,l:38,hex:"#32952d"},50:{h:117,s:54,l:43,hex:"#38a932"},55:{h:117,s:53,l:48,hex:"#40bb3a"},60:{h:117,s:52,l:54,hex:"#53c74d"},65:{h:117,s:51,l:60,hex:"#6acd65"},70:{h:117,s:50,l:66,hex:"#81d47d"},75:{h:117,s:48,l:73,hex:"#9cdb99"},80:{h:117,s:47,l:79,hex:"#b3e3b0"},85:{h:117,s:46,l:85,hex:"#c9eac7"},90:{h:118,s:45,l:90,hex:"#dbf1da"},95:{h:118,s:44,l:94,hex:"#e9f6e9"},100:{h:118,s:43,l:98,hex:"#f8fcf8"}},curves:{h:{min:117,max:118,minControl:{x:30,y:118},maxControl:{x:57,y:116}},s:{min:45,max:43,minControl:{x:34,y:65},maxControl:{x:64,y:49}},l:{min:5,max:98,minControl:{x:61,y:38},maxControl:{x:72,y:79}}},uri:"green"},teal:{name:"Teal",hue:165,stops:{0:{h:165,s:52,l:5,hex:"#061310"},5:{h:165,s:56,l:7,hex:"#081c17"},10:{h:165,s:59,l:10,hex:"#0a2921"},15:{h:165,s:61,l:13,hex:"#0d352b"},20:{h:165,s:62,l:15,hex:"#0f3e32"},25:{h:165,s:63,l:18,hex:"#114b3c"},30:{h:165,s:63,l:21,hex:"#145746"},35:{h:165,s:63,l:25,hex:"#186854"},40:{h:165,s:62,l:29,hex:"#1c7861"},45:{h:165,s:60,l:33,hex:"#22876d"},50:{h:165,s:59,l:37,hex:"#27967a"},55:{h:165,s:58,l:42,hex:"#2da98a"},60:{h:165,s:57,l:47,hex:"#34bc9a"},65:{h:165,s:56,l:53,hex:"#44caa9"},70:{h:165,s:55,l:60,hex:"#61d1b5"},75:{h:165,s:54,l:67,hex:"#7dd8c2"},80:{h:165,s:54,l:75,hex:"#9de2d0"},85:{h:165,s:55,l:81,hex:"#b4e9dc"},90:{h:165,s:55,l:88,hex:"#d0f1e9"},95:{h:165,s:57,l:93,hex:"#e3f7f2"},100:{h:165,s:58,l:98,hex:"#f7fdfb"}},curves:{h:{min:165,max:165,minControl:{x:30,y:165},maxControl:{x:70,y:165}},s:{min:52,max:58,minControl:{x:34,y:81},maxControl:{x:55,y:43}},l:{min:5,max:98,minControl:{x:71,y:38},maxControl:{x:68,y:69}}},uri:"teal"},blue:{name:"Blue",hue:206,stops:{0:{h:210,s:72,l:5,hex:"#040d16"},5:{h:210,s:74,l:8,hex:"#051423"},10:{h:209,s:75,l:11,hex:"#071d31"},15:{h:209,s:77,l:15,hex:"#092744"},20:{h:209,s:78,l:18,hex:"#0a2f52"},25:{h:208,s:79,l:22,hex:"#0c3b64"},30:{h:208,s:80,l:26,hex:"#0d4677"},35:{h:207,s:81,l:31,hex:"#0f558f"},40:{h:207,s:82,l:35,hex:"#1061a2"},45:{h:207,s:83,l:41,hex:"#1271bf"},50:{h:206,s:84,l:46,hex:"#1382d8"},55:{h:206,s:84,l:52,hex:"#1e92eb"},60:{h:205,s:85,l:58,hex:"#39a3ef"},65:{h:205,s:85,l:65,hex:"#5ab2f2"},70:{h:205,s:85,l:71,hex:"#76c0f4"},75:{h:205,s:85,l:77,hex:"#92cdf6"},80:{h:204,s:84,l:82,hex:"#abd9f8"},85:{h:204,s:84,l:87,hex:"#c2e3fa"},90:{h:204,s:83,l:91,hex:"#d5ecfb"},95:{h:204,s:82,l:95,hex:"#e8f4fd"},100:{h:204,s:81,l:98,hex:"#f6fbfe"}},curves:{h:{min:210,max:204,minControl:{x:42,y:207},maxControl:{x:70,y:204}},s:{min:72,max:81,minControl:{x:43,y:86},maxControl:{x:69,y:88}},l:{min:5,max:98,minControl:{x:61,y:41},maxControl:{x:64,y:78}}},uri:"blue"},indigo:{name:"Indigo",hue:236,stops:{0:{h:234,s:50,l:7,hex:"#090b1b"},5:{h:234,s:52,l:11,hex:"#0d102b"},10:{h:235,s:54,l:16,hex:"#13163f"},15:{h:235,s:56,l:21,hex:"#181d54"},20:{h:235,s:58,l:27,hex:"#1d246d"},25:{h:235,s:61,l:32,hex:"#202883"},30:{h:236,s:64,l:38,hex:"#232b9f"},35:{h:236,s:67,l:44,hex:"#252fbb"},40:{h:236,s:71,l:50,hex:"#2531da"},45:{h:236,s:75,l:56,hex:"#3b46e3"},50:{h:236,s:78,l:62,hex:"#535dea"},55:{h:236,s:81,l:67,hex:"#6770ef"},60:{h:236,s:82,l:72,hex:"#7d85f2"},65:{h:235,s:82,l:77,hex:"#949cf4"},70:{h:235,s:82,l:81,hex:"#a7adf6"},75:{h:235,s:81,l:85,hex:"#babff8"},80:{h:235,s:79,l:89,hex:"#cdd0f9"},85:{h:235,s:77,l:92,hex:"#dbdefa"},90:{h:235,s:75,l:94,hex:"#e4e6fb"},95:{h:235,s:72,l:97,hex:"#f2f3fd"},100:{h:235,s:70,l:99,hex:"#fbfbfe"}},curves:{h:{min:234,max:235,minControl:{x:30,y:237},maxControl:{x:70,y:235}},s:{min:50,max:70,minControl:{x:60,y:69},maxControl:{x:40,y:100}},l:{min:7,max:99,minControl:{x:39,y:40},maxControl:{x:53,y:80}}},uri:"indigo"},violet:{name:"Violet",uri:"violet",hue:259,stops:{0:{h:271,s:53,l:8,hex:"#150a1f"},5:{h:269,s:53,l:12,hex:"#1e0e2f"},10:{h:268,s:54,l:16,hex:"#27133f"},15:{h:266,s:55,l:21,hex:"#321853"},20:{h:265,s:56,l:26,hex:"#3c1d67"},25:{h:264,s:57,l:31,hex:"#46227c"},30:{h:263,s:59,l:36,hex:"#4f2692"},35:{h:262,s:62,l:42,hex:"#5929ae"},40:{h:261,s:66,l:48,hex:"#622acb"},45:{h:260,s:71,l:53,hex:"#6b32dc"},50:{h:259,s:76,l:59,hex:"#7947e6"},55:{h:258,s:79,l:65,hex:"#8a5fec"},60:{h:258,s:81,l:71,hex:"#9d79f1"},65:{h:257,s:82,l:76,hex:"#ac90f4"},70:{h:257,s:82,l:80,hex:"#baa2f6"},75:{h:256,s:82,l:85,hex:"#cab9f8"},80:{h:256,s:81,l:88,hex:"#d5c8f9"},85:{h:255,s:80,l:92,hex:"#e2dafb"},90:{h:255,s:79,l:94,hex:"#eae4fc"},95:{h:255,s:78,l:97,hex:"#f4f1fd"},100:{h:255,s:77,l:99,hex:"#fbfafe"}},curves:{h:{min:271,max:255,minControl:{x:33,y:260},maxControl:{x:70,y:255}},s:{min:53,max:77,minControl:{x:68,y:57},maxControl:{x:26,y:96}},l:{min:8,max:99,minControl:{x:45,y:43},maxControl:{x:58,y:83}}}},purple:{name:"Purple",hue:284,stops:{0:{h:294,s:47,l:6,hex:"#150816"},5:{h:293,s:50,l:8,hex:"#1c0a1f"},10:{h:292,s:53,l:11,hex:"#270d2b"},15:{h:290,s:56,l:14,hex:"#311038"},20:{h:289,s:59,l:18,hex:"#3f1349"},25:{h:288,s:62,l:22,hex:"#4d155b"},30:{h:287,s:64,l:26,hex:"#5a186d"},35:{h:286,s:67,l:31,hex:"#6b1a84"},40:{h:286,s:69,l:37,hex:"#811d9f"},45:{h:285,s:71,l:43,hex:"#9520bc"},50:{h:284,s:73,l:49,hex:"#a822d8"},55:{h:283,s:74,l:55,hex:"#b137e1"},60:{h:283,s:75,l:62,hex:"#be55e7"},65:{h:282,s:77,l:68,hex:"#c76fec"},70:{h:282,s:77,l:75,hex:"#d38ef0"},75:{h:281,s:78,l:80,hex:"#dba4f4"},80:{h:281,s:79,l:85,hex:"#e4bbf7"},85:{h:280,s:79,l:90,hex:"#ecd1fa"},90:{h:280,s:80,l:94,hex:"#f4e3fc"},95:{h:280,s:80,l:97,hex:"#f9f1fd"},100:{h:280,s:80,l:99,hex:"#fdfafe"}},curves:{h:{min:294,max:280,minControl:{x:32,y:286},maxControl:{x:67,y:280}},s:{min:47,max:80,minControl:{x:34,y:67},maxControl:{x:51,y:79}},l:{min:6,max:99,minControl:{x:48,y:26},maxControl:{x:64,y:85}}},uri:"purple"},pink:{name:"Pink",hue:313,stops:{0:{h:314,s:64,l:5,hex:"#150511"},5:{h:314,s:66,l:7,hex:"#1e0618"},10:{h:313,s:69,l:10,hex:"#2b0823"},15:{h:313,s:71,l:13,hex:"#390a2e"},20:{h:313,s:73,l:16,hex:"#470b3a"},25:{h:313,s:74,l:19,hex:"#540d45"},30:{h:313,s:76,l:23,hex:"#670e54"},35:{h:313,s:77,l:27,hex:"#7a1063"},40:{h:313,s:77,l:32,hex:"#901375"},45:{h:313,s:78,l:37,hex:"#a81588"},50:{h:313,s:77,l:42,hex:"#be199a"},55:{h:313,s:77,l:48,hex:"#d91cb0"},60:{h:313,s:76,l:55,hex:"#e335be"},65:{h:313,s:76,l:63,hex:"#e859c9"},70:{h:312,s:75,l:70,hex:"#ec79d5"},75:{h:312,s:74,l:77,hex:"#f099de"},80:{h:312,s:73,l:83,hex:"#f3b4e7"},85:{h:312,s:72,l:88,hex:"#f6caee"},90:{h:311,s:71,l:92,hex:"#f9dcf4"},95:{h:311,s:70,l:96,hex:"#fceef9"},100:{h:310,s:69,l:99,hex:"#fefbfe"}},curves:{h:{min:314,max:310,minControl:{x:26,y:311},maxControl:{x:67,y:315}},s:{min:64,max:69,minControl:{x:45,y:87},maxControl:{x:58,y:75}},l:{min:5,max:99,minControl:{x:64,y:34},maxControl:{x:62,y:78}}},uri:"pink"},maroon:{name:"Maroon",hue:339,stops:{0:{h:339,s:57,l:6,hex:"#18070d"},5:{h:339,s:62,l:8,hex:"#210811"},10:{h:339,s:66,l:11,hex:"#2f0a16"},15:{h:339,s:70,l:13,hex:"#380a1a"},20:{h:339,s:74,l:17,hex:"#4b0b22"},25:{h:339,s:76,l:20,hex:"#5a0c27"},30:{h:339,s:79,l:24,hex:"#6e0d2f"},35:{h:339,s:81,l:29,hex:"#860e38"},40:{h:339,s:82,l:33,hex:"#990f3f"},45:{h:339,s:83,l:39,hex:"#b6114b"},50:{h:339,s:84,l:45,hex:"#d31256"},55:{h:339,s:84,l:51,hex:"#eb1963"},60:{h:339,s:84,l:57,hex:"#ed3576"},65:{h:339,s:83,l:64,hex:"#ef578c"},70:{h:339,s:82,l:71,hex:"#f278a3"},75:{h:339,s:81,l:77,hex:"#f495b6"},80:{h:339,s:79,l:83,hex:"#f6b1c9"},85:{h:339,s:78,l:88,hex:"#f8c9d9"},90:{h:339,s:76,l:92,hex:"#fadbe6"},95:{h:339,s:73,l:96,hex:"#fcedf3"},100:{h:339,s:71,l:99,hex:"#fefbfc"}},curves:{h:{min:339,max:339,minControl:{x:26,y:339},maxControl:{x:67,y:339}},s:{min:57,max:71,minControl:{x:32,y:90},maxControl:{x:62,y:90}},l:{min:6,max:99,minControl:{x:54,y:28},maxControl:{x:64,y:79}}},uri:"maroon"},grey:{name:"Grey",hue:200,stops:{0:{h:200,s:5,l:5,hex:"#0c0d0d"},5:{h:200,s:5,l:10,hex:"#181a1b"},10:{h:200,s:5,l:14,hex:"#222425"},15:{h:200,s:5,l:19,hex:"#2e3133"},20:{h:200,s:5,l:23,hex:"#383c3e"},25:{h:200,s:5,l:28,hex:"#44494b"},30:{h:200,s:5,l:33,hex:"#505658"},35:{h:200,s:5,l:37,hex:"#5a6063"},40:{h:200,s:5,l:42,hex:"#666d70"},45:{h:200,s:5,l:47,hex:"#727a7e"},50:{h:200,s:5,l:52,hex:"#7e878b"},55:{h:200,s:5,l:56,hex:"#899194"},60:{h:200,s:5,l:61,hex:"#979da1"},65:{h:200,s:5,l:66,hex:"#a4aaad"},70:{h:200,s:5,l:71,hex:"#b1b6b9"},75:{h:200,s:5,l:75,hex:"#bcc0c2"},80:{h:200,s:5,l:80,hex:"#c9cdcf"},85:{h:200,s:5,l:85,hex:"#d7d9db"},90:{h:200,s:5,l:89,hex:"#e2e3e4"},95:{h:200,s:5,l:94,hex:"#eff0f0"},100:{h:200,s:5,l:98,hex:"#fafafa"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:5,max:5,minControl:{x:30,y:5},maxControl:{x:70,y:5}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey",greyscale:!0},grey20:{name:"Grey20",hue:200,stops:{0:{h:200,s:20,l:5,hex:"#0a0e0f"},5:{h:200,s:20,l:10,hex:"#141b1f"},10:{h:200,s:20,l:14,hex:"#1d262b"},15:{h:200,s:20,l:19,hex:"#27343a"},20:{h:200,s:20,l:23,hex:"#2f3f46"},25:{h:200,s:20,l:28,hex:"#394c56"},30:{h:200,s:20,l:33,hex:"#435a65"},35:{h:200,s:20,l:37,hex:"#4b6571"},40:{h:200,s:20,l:42,hex:"#567281"},45:{h:200,s:20,l:47,hex:"#608090"},50:{h:200,s:20,l:52,hex:"#6c8d9d"},55:{h:200,s:20,l:56,hex:"#7896a5"},60:{h:200,s:20,l:61,hex:"#88a2af"},65:{h:200,s:20,l:66,hex:"#97aeba"},70:{h:200,s:20,l:71,hex:"#a6bac4"},75:{h:200,s:20,l:75,hex:"#b3c3cc"},80:{h:200,s:20,l:80,hex:"#c2cfd6"},85:{h:200,s:20,l:85,hex:"#d1dbe0"},90:{h:200,s:20,l:89,hex:"#dde5e9"},95:{h:200,s:20,l:94,hex:"#edf1f3"},100:{h:200,s:20,l:98,hex:"#f9fafb"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:20,max:20,minControl:{x:30,y:20},maxControl:{x:70,y:20}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey20",greyscale:!0},grey40:{name:"Grey40",hue:200,stops:{0:{h:200,s:40,l:5,hex:"#080e12"},5:{h:200,s:40,l:10,hex:"#0f1d24"},10:{h:200,s:40,l:14,hex:"#152832"},15:{h:200,s:40,l:19,hex:"#1d3744"},20:{h:200,s:40,l:23,hex:"#234252"},25:{h:200,s:40,l:28,hex:"#2b5164"},30:{h:200,s:40,l:33,hex:"#325f76"},35:{h:200,s:40,l:37,hex:"#396b84"},40:{h:200,s:40,l:42,hex:"#407996"},45:{h:200,s:40,l:47,hex:"#4888a8"},50:{h:200,s:40,l:52,hex:"#5495b6"},55:{h:200,s:40,l:56,hex:"#629ebc"},60:{h:200,s:40,l:61,hex:"#74a9c3"},65:{h:200,s:40,l:66,hex:"#86b4cb"},70:{h:200,s:40,l:71,hex:"#97bfd3"},75:{h:200,s:40,l:75,hex:"#a6c8d9"},80:{h:200,s:40,l:80,hex:"#b8d3e0"},85:{h:200,s:40,l:85,hex:"#c9dee8"},90:{h:200,s:40,l:89,hex:"#d8e7ee"},95:{h:200,s:40,l:94,hex:"#eaf2f6"},100:{h:200,s:40,l:98,hex:"#f8fbfc"}},curves:{h:{min:200,max:200,minControl:{x:30,y:200},maxControl:{x:70,y:200}},s:{min:40,max:40,minControl:{x:30,y:40},maxControl:{x:70,y:40}},l:{min:5,max:98,minControl:{x:44,y:45},maxControl:{x:80,y:81}}},uri:"grey40",greyscale:!0}},qr={name:GT,comment:VT,uri:YT,source:ZT,ranges:qT},od=Object.keys(qr.ranges),KT=Object.entries(qr.ranges).filter(([,e])=>!e.greyscale).map(([e])=>e),QT=Object.entries(qr.ranges).filter(([,e])=>e.greyscale).map(([e])=>e),XT=({range:e,setRange:n})=>s("div",{children:[s("div",{className:"flex space mar-b-0",children:[r("h3",{children:"Color Range"}),r("h4",{children:$n(e)&&r("code",{children:e||""})})]}),s("div",{className:"grid-fit gap-2",style:{"--min-width":"2em"},children:[r(m0,{colors:KT,range:e,setRange:n}),r("div",{children:" "}),r(ja,{color:"brand",selected:e==="brand",select:()=>n("brand")}),r(m0,{colors:QT,range:e,setRange:n})]})]}),m0=({range:e,setRange:n,colors:t})=>t.map(a=>r(ja,{color:a,select:()=>n(a),selected:e==a},a)),ls=({stop:e,setStop:n,className:t,title:a,prefix:l})=>s("div",{children:[s("div",{className:"flex space mar-b-0",children:[r("h3",{children:a}),r("h4",{children:$n(e)&&s("code",{children:[l,"-",e]})})]}),r("div",{className:`${t} grid-fit gap-2`,style:{"--min-width":"2em"},children:Ci(0,100,5).map(o=>r(ja,{color:`bgc-${o} bdc-${o} fgc-${o>50?"0":"100"} bgd-${o} bdd-${o} fgd-${o>50?"0":"100"}`,iconColor:o>50?"black":"white",selected:e===o,select:()=>n(o)},o))})]}),JT=[0,1,2,3,4,6,8,10,12,16,20,24,28,32],g0=({spacing:e,setSpacing:n,className:t,title:a,prefix:l,range:o})=>s("div",{children:[s("div",{className:"flex space mar-b-0",children:[r("h3",{children:a}),r("h4",{children:$n(e)&&s("code",{children:[l,"-",e]})})]}),r("div",{className:`${t} grid-fit gap-2`,style:{"--min-width":"2em"},children:JT.map(i=>r(ja,{color:o,className:"wide",alt:r("span",{className:"font-mono",children:i}),selected:e===i,select:()=>n(i)},i))})]}),eL=["smallest","smaller","small","medium","large","larger","largest"],nL=({size:e,setSize:n,title:t="Size",range:a})=>s("div",{children:[s("div",{className:"flex space mar-b-0",children:[r("h3",{children:t}),r("h4",{children:$n(e)&&r("code",{children:e})})]}),r("div",{className:"grid-fit gap-2",style:{"--min-width":"2em"},children:eL.map(l=>r(ja,{color:a,className:"wide",alt:r("span",{className:"font-mono",children:l}),selected:e===l,select:()=>n(l)},l))})]}),tL=[0,1,2,3,4,5,6,8,10],v0=({border:e,setBorder:n,className:t,title:a,prefix:l,range:o})=>s("div",{children:[s("div",{className:"flex space mar-b-0",children:[r("h3",{children:a}),r("h4",{children:$n(e)&&s("code",{children:[l,"-",e]})})]}),r("div",{className:`${t} grid-fit gap-2`,style:{"--min-width":"2em"},children:tL.map(i=>r(ja,{color:o,className:"wide",alt:r("span",{className:"font-mono",children:i}),selected:e===i,select:()=>n(i)},i))})]}),rL=({checked:e,toggle:n,label:t})=>r("div",{className:"field",children:s("label",{className:"checkbox border no-focus wide",children:[r("input",{type:"checkbox",checked:e,onChange:n}),t]})}),aL=({shadow:e,setShadow:n,className:t,title:a="Shadow",prefix:l="shadow",range:o})=>s("div",{children:[s("div",{className:"flex space mar-b-0",children:[r("h3",{children:a}),r("h4",{children:$n(e)&&s("code",{children:[l,"-",e]})})]}),r("div",{className:`${t} grid-fit gap-2`,style:{"--min-width":"2em"},children:Ci(0,5).map(i=>r(ja,{color:o,className:"wide",alt:r("span",{className:"font-mono",children:i}),selected:e===i,select:()=>n(i)},i))})]}),lL=({options:e,setOption:n,toggleOption:t})=>s("div",{className:"surface-5 pad-4",children:[s("div",{className:"flex space baseline stack-desktop mar-b-2",children:[r("h2",{className:"mar-v-none",children:"Controls"}),r("h3",{className:"text-right mar-v-none",children:r("code",{children:'class="..."'})})]}),s("div",{className:"grid gap-2 small",children:[r(XT,{range:e.range,setRange:n("range")}),r(ls,{title:"Background Color Stop",prefix:"bgc",className:e.range,stop:e.bgc,setStop:n("bgc")}),r(ls,{title:"Foreground Color Stop",prefix:"fgc",className:e.range,stop:e.fgc,setStop:n("fgc")}),r(ls,{title:"Heading Color Stop",prefix:"hdc",className:e.range,stop:e.hdc,setStop:n("hdc")}),r(ls,{title:"Border Color Stop",prefix:"bdc",className:e.range,stop:e.bdc,setStop:n("bdc")}),r(v0,{title:"Border Width",prefix:"bdw",border:e.bdw,setBorder:n("bdw"),range:e.range}),r(v0,{title:"Border Radius",prefix:"bdr",border:e.bdr,setBorder:n("bdr"),range:e.range}),r(nL,{title:"Size",size:e.size,setSize:n("size"),range:e.range}),r(g0,{title:"Margin",prefix:"mar",className:e.mar,spacing:e.mar,setSpacing:n("mar"),range:e.range}),r(g0,{title:"Padding",prefix:"pad",className:e.pad,spacing:e.pad,setSpacing:n("pad"),range:e.range}),r(aL,{title:"Shadow",prefix:"shadow",shadow:e.shadow,setShadow:n("shadow"),range:e.range}),s("div",{children:[r("h3",{className:"mar-b-2",children:"Options"}),r("div",{className:"grid-fill",style:{"--min-width":"10rem"},children:r(rL,{label:"Show Border",checked:e.border,toggle:t("border")})})]})]})]}),Si=e=>e.filter(n=>$n(n)&&n).join(" ").replace(/^\s+/,"").replaceAll(/\s+/g," "),$g=(e,n={},...t)=>Si(Object.entries(e).reduce((a,[l,o])=>(o&&a.push(n[l]||l),a),[...t])),Ig=(e,n="",...t)=>Si([...hg(n).filter(a=>e[a]),...t]),oL=({options:e})=>{const n=iL(e);return s("div",{className:"surface-5 pad-4",children:[s("div",{className:"flex space baseline stack-desktop mar-b-2",children:[r("h2",{className:"mar-v-none",children:"Output"}),r("div",{className:"text-right",children:s("code",{children:['class="',n,'"']})})]}),r("div",{className:"border surface-4",style:{borderStyle:"dotted"},children:s("div",{className:n,children:[r("h3",{className:"mar-b-2",children:"It's One Louder"}),"You see, most... most blokes, you know, will be playing at ten. You're on ten here... all the way up... all the way up... all the way up. You're on ten on your guitar...where can you go from there? Where? Nowhere. Exactly. What we do is if we need that extra... push over the cliff... you know what we do? Put it up to eleven. Eleven. Exactly. One louder."]})})]})},iL=e=>Si([e.range,$n(e.bgc)?`bgc-${e.bgc}`:"",$n(e.fgc)?`fgc-${e.fgc}`:"",$n(e.hdc)?`hdc-${e.hdc}`:"",$n(e.bdc)?`bdc-${e.bdc}`:"",$n(e.bdw)?`bdw-${e.bdw}`:"",$n(e.bdr)?`bdr-${e.bdr}`:"",e.size,$n(e.mar)?`mar-${e.mar}`:"",$n(e.pad)?`pad-${e.pad}`:"",$n(e.shadow)?`shadow-${e.shadow}`:"",e.border?"border":""]),sL=()=>{const[e,n]=D.useState({range:"brand",bgc:90,fgc:30,hdc:20,bdc:60,bdr:3,bdw:2,pad:4,mar:6,shadow:2,border:!0});return s("div",{className:"grid gap-8",children:[r(oL,{options:e}),r(lL,{options:e,setOption:l=>o=>n(i=>({...i,[l]:o})),toggleOption:l=>()=>n(o=>({...o,[l]:!o[l]}))})]})},dL=()=>s("div",{children:[r("h1",{children:"Color Demo"}),s("div",{className:"grid-2 gap-h-8 stack-desktop",children:[s("div",{children:[s("p",{children:["One of the novel approaches that Badger CSS employs is to provide CSS classes for each of the colors in the palette.  There are then further CSS classes that can be used to select the particular shade (or color"," ",'"stop") from that range to use for the background, foreground, heading and border colors.']}),s("p",{children:["One benefit of this approach is that it allows you to design color agnostic components that work with both light and dark themes, and can then be used with any color range.  For some examples, see the ",r(Up,{})," and ",r(BT,{})," pages."]}),r("p",{children:"Another more practical benefit is that it avoid the combinatorial explosion of CSS classes required to cover every combination of color range and stop for foreground, background, heading and border colors."})]}),s("div",{children:[r("p",{children:"Further utility classes are provided for selecting font size, border width and radius, margins, padding, shadows and various layout options. They're similar to what you'll find in other CSS toolkits."}),r("p",{children:"The choice about what is included and what isn't is entirely arbitrary but I lean towards minimalism and have only included the kind of utility classes that I use in most, if not all web sites. It's really easy for you to add in your own utility classes, or change the settings for the provided utilities, if you want to."}),r("p",{children:"So without further ado, click on the buttons below to select different colors and layout options.  Each one selects a CSS class which affects the way the output is displayed."})]})]}),r(sL,{})]}),cL=Object.freeze(Object.defineProperty({__proto__:null,default:dL},Symbol.toStringTag,{value:"Module"}));var Eg={exports:{}};/**
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
 */(function(e,n){(function(t,a){e.exports=a()})(Ho,function(){for(var t=function(c,h,f){return h===void 0&&(h=0),f===void 0&&(f=1),c<h?h:c>f?f:c},a=t,l=function(c){c._clipped=!1,c._unclipped=c.slice(0);for(var h=0;h<=3;h++)h<3?((c[h]<0||c[h]>255)&&(c._clipped=!0),c[h]=a(c[h],0,255)):h===3&&(c[h]=a(c[h],0,1));return c},o={},i=0,d=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];i<d.length;i+=1){var u=d[i];o["[object "+u+"]"]=u.toLowerCase()}var p=function(c){return o[Object.prototype.toString.call(c)]||"object"},g=p,y=function(c,h){return h===void 0&&(h=null),c.length>=3?Array.prototype.slice.call(c):g(c[0])=="object"&&h?h.split("").filter(function(f){return c[0][f]!==void 0}).map(function(f){return c[0][f]}):c[0]},C=p,E=function(c){if(c.length<2)return null;var h=c.length-1;return C(c[h])=="string"?c[h].toLowerCase():null},I=Math.PI,k={clip_rgb:l,limit:t,type:p,unpack:y,last:E,PI:I,TWOPI:I*2,PITHIRD:I/3,DEG2RAD:I/180,RAD2DEG:180/I},M={format:{},autodetect:[]},w=k.last,m=k.clip_rgb,b=k.type,v=M,N=function(){for(var h=[],f=arguments.length;f--;)h[f]=arguments[f];var x=this;if(b(h[0])==="object"&&h[0].constructor&&h[0].constructor===this.constructor)return h[0];var L=w(h),$=!1;if(!L){$=!0,v.sorted||(v.autodetect=v.autodetect.sort(function(U,Q){return Q.p-U.p}),v.sorted=!0);for(var S=0,A=v.autodetect;S<A.length;S+=1){var R=A[S];if(L=R.test.apply(R,h),L)break}}if(v.format[L]){var j=v.format[L].apply(null,$?h:h.slice(0,-1));x._rgb=m(j)}else throw new Error("unknown format: "+h);x._rgb.length===3&&x._rgb.push(1)};N.prototype.toString=function(){return b(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var T=N,P=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(P.Color,[null].concat(c)))};P.Color=T,P.version="2.4.2";var F=P,z=k.unpack,Z=Math.max,pe=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=z(c,"rgb"),x=f[0],L=f[1],$=f[2];x=x/255,L=L/255,$=$/255;var S=1-Z(x,Z(L,$)),A=S<1?1/(1-S):0,R=(1-x-S)*A,j=(1-L-S)*A,U=(1-$-S)*A;return[R,j,U,S]},de=pe,ze=k.unpack,ln=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=ze(c,"cmyk");var f=c[0],x=c[1],L=c[2],$=c[3],S=c.length>4?c[4]:1;return $===1?[0,0,0,S]:[f>=1?0:255*(1-f)*(1-$),x>=1?0:255*(1-x)*(1-$),L>=1?0:255*(1-L)*(1-$),S]},Ve=ln,De=F,Ye=T,W=M,q=k.unpack,J=k.type,oe=de;Ye.prototype.cmyk=function(){return oe(this._rgb)},De.cmyk=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Ye,[null].concat(c,["cmyk"])))},W.format.cmyk=Ve,W.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=q(c,"cmyk"),J(c)==="array"&&c.length===4)return"cmyk"}});var fe=k.unpack,zn=k.last,me=function(c){return Math.round(c*100)/100},en=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=fe(c,"hsla"),x=zn(c)||"lsa";return f[0]=me(f[0]||0),f[1]=me(f[1]*100)+"%",f[2]=me(f[2]*100)+"%",x==="hsla"||f.length>3&&f[3]<1?(f[3]=f.length>3?f[3]:1,x="hsla"):f.length=3,x+"("+f.join(",")+")"},Ze=en,fn=k.unpack,On=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=fn(c,"rgba");var f=c[0],x=c[1],L=c[2];f/=255,x/=255,L/=255;var $=Math.min(f,x,L),S=Math.max(f,x,L),A=(S+$)/2,R,j;return S===$?(R=0,j=Number.NaN):R=A<.5?(S-$)/(S+$):(S-$)/(2-S-$),f==S?j=(x-L)/(S-$):x==S?j=2+(L-f)/(S-$):L==S&&(j=4+(f-x)/(S-$)),j*=60,j<0&&(j+=360),c.length>3&&c[3]!==void 0?[j,R,A,c[3]]:[j,R,A]},ra=On,aa=k.unpack,er=k.last,ql=Ze,la=ra,Kl=Math.round,oa=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=aa(c,"rgba"),x=er(c)||"rgb";return x.substr(0,3)=="hsl"?ql(la(f),x):(f[0]=Kl(f[0]),f[1]=Kl(f[1]),f[2]=Kl(f[2]),(x==="rgba"||f.length>3&&f[3]<1)&&(f[3]=f.length>3?f[3]:1,x="rgba"),x+"("+f.slice(0,x==="rgb"?3:4).join(",")+")")},Ti=oa,Ql=k.unpack,ia=Math.round,Xl=function(){for(var c,h=[],f=arguments.length;f--;)h[f]=arguments[f];h=Ql(h,"hsl");var x=h[0],L=h[1],$=h[2],S,A,R;if(L===0)S=A=R=$*255;else{var j=[0,0,0],U=[0,0,0],Q=$<.5?$*(1+L):$+L-$*L,G=2*$-Q,te=x/360;j[0]=te+1/3,j[1]=te,j[2]=te-1/3;for(var ee=0;ee<3;ee++)j[ee]<0&&(j[ee]+=1),j[ee]>1&&(j[ee]-=1),6*j[ee]<1?U[ee]=G+(Q-G)*6*j[ee]:2*j[ee]<1?U[ee]=Q:3*j[ee]<2?U[ee]=G+(Q-G)*(2/3-j[ee])*6:U[ee]=G;c=[ia(U[0]*255),ia(U[1]*255),ia(U[2]*255)],S=c[0],A=c[1],R=c[2]}return h.length>3?[S,A,R,h[3]]:[S,A,R,1]},nr=Xl,Jl=nr,eo=M,no=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,Li=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,kr=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,sa=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,to=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,za=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,_i=Math.round,Ni=function(c){c=c.toLowerCase().trim();var h;if(eo.format.named)try{return eo.format.named(c)}catch{}if(h=c.match(no)){for(var f=h.slice(1,4),x=0;x<3;x++)f[x]=+f[x];return f[3]=1,f}if(h=c.match(Li)){for(var L=h.slice(1,5),$=0;$<4;$++)L[$]=+L[$];return L}if(h=c.match(kr)){for(var S=h.slice(1,4),A=0;A<3;A++)S[A]=_i(S[A]*2.55);return S[3]=1,S}if(h=c.match(sa)){for(var R=h.slice(1,5),j=0;j<3;j++)R[j]=_i(R[j]*2.55);return R[3]=+R[3],R}if(h=c.match(to)){var U=h.slice(1,4);U[1]*=.01,U[2]*=.01;var Q=Jl(U);return Q[3]=1,Q}if(h=c.match(za)){var G=h.slice(1,4);G[1]*=.01,G[2]*=.01;var te=Jl(G);return te[3]=+h[4],te}};Ni.test=function(c){return no.test(c)||Li.test(c)||kr.test(c)||sa.test(c)||to.test(c)||za.test(c)};var $i=Ni,Vd=F,O=T,B=M,H=k.type,K=Ti,se=$i;O.prototype.css=function(c){return K(this._rgb,c)},Vd.css=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(O,[null].concat(c,["css"])))},B.format.css=se,B.autodetect.push({p:5,test:function(c){for(var h=[],f=arguments.length-1;f-- >0;)h[f]=arguments[f+1];if(!h.length&&H(c)==="string"&&se.test(c))return"css"}});var ce=T,ue=F,he=M,le=k.unpack;he.format.gl=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=le(c,"rgba");return f[0]*=255,f[1]*=255,f[2]*=255,f},ue.gl=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(ce,[null].concat(c,["gl"])))},ce.prototype.gl=function(){var c=this._rgb;return[c[0]/255,c[1]/255,c[2]/255,c[3]]};var _e=k.unpack,Re=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=_e(c,"rgb"),x=f[0],L=f[1],$=f[2],S=Math.min(x,L,$),A=Math.max(x,L,$),R=A-S,j=R*100/255,U=S/(255-R)*100,Q;return R===0?Q=Number.NaN:(x===A&&(Q=(L-$)/R),L===A&&(Q=2+($-x)/R),$===A&&(Q=4+(x-L)/R),Q*=60,Q<0&&(Q+=360)),[Q,j,U]},wn=Re,dn=k.unpack,mn=Math.floor,yt=function(){for(var c,h,f,x,L,$,S=[],A=arguments.length;A--;)S[A]=arguments[A];S=dn(S,"hcg");var R=S[0],j=S[1],U=S[2],Q,G,te;U=U*255;var ee=j*255;if(j===0)Q=G=te=U;else{R===360&&(R=0),R>360&&(R-=360),R<0&&(R+=360),R/=60;var ve=mn(R),ke=R-ve,Ne=U*(1-j),Me=Ne+ee*(1-ke),Tn=Ne+ee*ke,Cn=Ne+ee;switch(ve){case 0:c=[Cn,Tn,Ne],Q=c[0],G=c[1],te=c[2];break;case 1:h=[Me,Cn,Ne],Q=h[0],G=h[1],te=h[2];break;case 2:f=[Ne,Cn,Tn],Q=f[0],G=f[1],te=f[2];break;case 3:x=[Ne,Me,Cn],Q=x[0],G=x[1],te=x[2];break;case 4:L=[Tn,Ne,Cn],Q=L[0],G=L[1],te=L[2];break;case 5:$=[Cn,Ne,Me],Q=$[0],G=$[1],te=$[2];break}}return[Q,G,te,S.length>3?S[3]:1]},da=yt,ro=k.unpack,Wa=k.type,Nt=F,ca=T,Ua=M,ao=wn;ca.prototype.hcg=function(){return ao(this._rgb)},Nt.hcg=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(ca,[null].concat(c,["hcg"])))},Ua.format.hcg=da,Ua.autodetect.push({p:1,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=ro(c,"hcg"),Wa(c)==="array"&&c.length===3)return"hcg"}});var lo=k.unpack,Ha=k.last,je=Math.round,Kn=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=lo(c,"rgba"),x=f[0],L=f[1],$=f[2],S=f[3],A=Ha(c)||"auto";S===void 0&&(S=1),A==="auto"&&(A=S<1?"rgba":"rgb"),x=je(x),L=je(L),$=je($);var R=x<<16|L<<8|$,j="000000"+R.toString(16);j=j.substr(j.length-6);var U="0"+je(S*255).toString(16);switch(U=U.substr(U.length-2),A.toLowerCase()){case"rgba":return"#"+j+U;case"argb":return"#"+U+j;default:return"#"+j}},tr=Kn,gn=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,oo=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,Ii=function(c){if(c.match(gn)){(c.length===4||c.length===7)&&(c=c.substr(1)),c.length===3&&(c=c.split(""),c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]);var h=parseInt(c,16),f=h>>16,x=h>>8&255,L=h&255;return[f,x,L,1]}if(c.match(oo)){(c.length===5||c.length===9)&&(c=c.substr(1)),c.length===4&&(c=c.split(""),c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]+c[3]+c[3]);var $=parseInt(c,16),S=$>>24&255,A=$>>16&255,R=$>>8&255,j=Math.round(($&255)/255*100)/100;return[S,A,R,j]}throw new Error("unknown hex color: "+c)},Ei=Ii,Qv=F,pf=T,Xv=k.type,ff=M,Jv=tr;pf.prototype.hex=function(c){return Jv(this._rgb,c)},Qv.hex=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(pf,[null].concat(c,["hex"])))},ff.format.hex=Ei,ff.autodetect.push({p:4,test:function(c){for(var h=[],f=arguments.length-1;f-- >0;)h[f]=arguments[f+1];if(!h.length&&Xv(c)==="string"&&[3,4,5,6,7,8,9].indexOf(c.length)>=0)return"hex"}});var e4=k.unpack,mf=k.TWOPI,n4=Math.min,t4=Math.sqrt,r4=Math.acos,a4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=e4(c,"rgb"),x=f[0],L=f[1],$=f[2];x/=255,L/=255,$/=255;var S,A=n4(x,L,$),R=(x+L+$)/3,j=R>0?1-A/R:0;return j===0?S=NaN:(S=(x-L+(x-$))/2,S/=t4((x-L)*(x-L)+(x-$)*(L-$)),S=r4(S),$>L&&(S=mf-S),S/=mf),[S*360,j,R]},l4=a4,o4=k.unpack,Yd=k.limit,Ga=k.TWOPI,Zd=k.PITHIRD,Va=Math.cos,i4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=o4(c,"hsi");var f=c[0],x=c[1],L=c[2],$,S,A;return isNaN(f)&&(f=0),isNaN(x)&&(x=0),f>360&&(f-=360),f<0&&(f+=360),f/=360,f<1/3?(A=(1-x)/3,$=(1+x*Va(Ga*f)/Va(Zd-Ga*f))/3,S=1-(A+$)):f<2/3?(f-=1/3,$=(1-x)/3,S=(1+x*Va(Ga*f)/Va(Zd-Ga*f))/3,A=1-($+S)):(f-=2/3,S=(1-x)/3,A=(1+x*Va(Ga*f)/Va(Zd-Ga*f))/3,$=1-(S+A)),$=Yd(L*$*3),S=Yd(L*S*3),A=Yd(L*A*3),[$*255,S*255,A*255,c.length>3?c[3]:1]},s4=i4,d4=k.unpack,c4=k.type,u4=F,gf=T,vf=M,h4=l4;gf.prototype.hsi=function(){return h4(this._rgb)},u4.hsi=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(gf,[null].concat(c,["hsi"])))},vf.format.hsi=s4,vf.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=d4(c,"hsi"),c4(c)==="array"&&c.length===3)return"hsi"}});var p4=k.unpack,f4=k.type,m4=F,bf=T,yf=M,g4=ra;bf.prototype.hsl=function(){return g4(this._rgb)},m4.hsl=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(bf,[null].concat(c,["hsl"])))},yf.format.hsl=nr,yf.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=p4(c,"hsl"),f4(c)==="array"&&c.length===3)return"hsl"}});var v4=k.unpack,b4=Math.min,y4=Math.max,w4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=v4(c,"rgb");var f=c[0],x=c[1],L=c[2],$=b4(f,x,L),S=y4(f,x,L),A=S-$,R,j,U;return U=S/255,S===0?(R=Number.NaN,j=0):(j=A/S,f===S&&(R=(x-L)/A),x===S&&(R=2+(L-f)/A),L===S&&(R=4+(f-x)/A),R*=60,R<0&&(R+=360)),[R,j,U]},x4=w4,C4=k.unpack,k4=Math.floor,S4=function(){for(var c,h,f,x,L,$,S=[],A=arguments.length;A--;)S[A]=arguments[A];S=C4(S,"hsv");var R=S[0],j=S[1],U=S[2],Q,G,te;if(U*=255,j===0)Q=G=te=U;else{R===360&&(R=0),R>360&&(R-=360),R<0&&(R+=360),R/=60;var ee=k4(R),ve=R-ee,ke=U*(1-j),Ne=U*(1-j*ve),Me=U*(1-j*(1-ve));switch(ee){case 0:c=[U,Me,ke],Q=c[0],G=c[1],te=c[2];break;case 1:h=[Ne,U,ke],Q=h[0],G=h[1],te=h[2];break;case 2:f=[ke,U,Me],Q=f[0],G=f[1],te=f[2];break;case 3:x=[ke,Ne,U],Q=x[0],G=x[1],te=x[2];break;case 4:L=[Me,ke,U],Q=L[0],G=L[1],te=L[2];break;case 5:$=[U,ke,Ne],Q=$[0],G=$[1],te=$[2];break}}return[Q,G,te,S.length>3?S[3]:1]},T4=S4,L4=k.unpack,_4=k.type,N4=F,wf=T,xf=M,$4=x4;wf.prototype.hsv=function(){return $4(this._rgb)},N4.hsv=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(wf,[null].concat(c,["hsv"])))},xf.format.hsv=T4,xf.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=L4(c,"hsv"),_4(c)==="array"&&c.length===3)return"hsv"}});var Mi={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},Ya=Mi,I4=k.unpack,Cf=Math.pow,E4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=I4(c,"rgb"),x=f[0],L=f[1],$=f[2],S=M4(x,L,$),A=S[0],R=S[1],j=S[2],U=116*R-16;return[U<0?0:U,500*(A-R),200*(R-j)]},qd=function(c){return(c/=255)<=.04045?c/12.92:Cf((c+.055)/1.055,2.4)},Kd=function(c){return c>Ya.t3?Cf(c,1/3):c/Ya.t2+Ya.t0},M4=function(c,h,f){c=qd(c),h=qd(h),f=qd(f);var x=Kd((.4124564*c+.3575761*h+.1804375*f)/Ya.Xn),L=Kd((.2126729*c+.7151522*h+.072175*f)/Ya.Yn),$=Kd((.0193339*c+.119192*h+.9503041*f)/Ya.Zn);return[x,L,$]},kf=E4,Za=Mi,A4=k.unpack,R4=Math.pow,P4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=A4(c,"lab");var f=c[0],x=c[1],L=c[2],$,S,A,R,j,U;return S=(f+16)/116,$=isNaN(x)?S:S+x/500,A=isNaN(L)?S:S-L/200,S=Za.Yn*Xd(S),$=Za.Xn*Xd($),A=Za.Zn*Xd(A),R=Qd(3.2404542*$-1.5371385*S-.4985314*A),j=Qd(-.969266*$+1.8760108*S+.041556*A),U=Qd(.0556434*$-.2040259*S+1.0572252*A),[R,j,U,c.length>3?c[3]:1]},Qd=function(c){return 255*(c<=.00304?12.92*c:1.055*R4(c,1/2.4)-.055)},Xd=function(c){return c>Za.t1?c*c*c:Za.t2*(c-Za.t0)},Sf=P4,O4=k.unpack,F4=k.type,B4=F,Tf=T,Lf=M,D4=kf;Tf.prototype.lab=function(){return D4(this._rgb)},B4.lab=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Tf,[null].concat(c,["lab"])))},Lf.format.lab=Sf,Lf.autodetect.push({p:2,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=O4(c,"lab"),F4(c)==="array"&&c.length===3)return"lab"}});var j4=k.unpack,z4=k.RAD2DEG,W4=Math.sqrt,U4=Math.atan2,H4=Math.round,G4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=j4(c,"lab"),x=f[0],L=f[1],$=f[2],S=W4(L*L+$*$),A=(U4($,L)*z4+360)%360;return H4(S*1e4)===0&&(A=Number.NaN),[x,S,A]},_f=G4,V4=k.unpack,Y4=kf,Z4=_f,q4=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=V4(c,"rgb"),x=f[0],L=f[1],$=f[2],S=Y4(x,L,$),A=S[0],R=S[1],j=S[2];return Z4(A,R,j)},K4=q4,Q4=k.unpack,X4=k.DEG2RAD,J4=Math.sin,e6=Math.cos,n6=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=Q4(c,"lch"),x=f[0],L=f[1],$=f[2];return isNaN($)&&($=0),$=$*X4,[x,e6($)*L,J4($)*L]},Nf=n6,t6=k.unpack,r6=Nf,a6=Sf,l6=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=t6(c,"lch");var f=c[0],x=c[1],L=c[2],$=r6(f,x,L),S=$[0],A=$[1],R=$[2],j=a6(S,A,R),U=j[0],Q=j[1],G=j[2];return[U,Q,G,c.length>3?c[3]:1]},$f=l6,o6=k.unpack,i6=$f,s6=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=o6(c,"hcl").reverse();return i6.apply(void 0,f)},d6=s6,c6=k.unpack,u6=k.type,If=F,Ai=T,Jd=M,Ef=K4;Ai.prototype.lch=function(){return Ef(this._rgb)},Ai.prototype.hcl=function(){return Ef(this._rgb).reverse()},If.lch=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Ai,[null].concat(c,["lch"])))},If.hcl=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Ai,[null].concat(c,["hcl"])))},Jd.format.lch=$f,Jd.format.hcl=d6,["lch","hcl"].forEach(function(c){return Jd.autodetect.push({p:2,test:function(){for(var h=[],f=arguments.length;f--;)h[f]=arguments[f];if(h=c6(h,c),u6(h)==="array"&&h.length===3)return c}})});var h6={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},Mf=h6,p6=T,Af=M,f6=k.type,io=Mf,m6=Ei,g6=tr;p6.prototype.name=function(){for(var c=g6(this._rgb,"rgb"),h=0,f=Object.keys(io);h<f.length;h+=1){var x=f[h];if(io[x]===c)return x.toLowerCase()}return c},Af.format.named=function(c){if(c=c.toLowerCase(),io[c])return m6(io[c]);throw new Error("unknown color name: "+c)},Af.autodetect.push({p:5,test:function(c){for(var h=[],f=arguments.length-1;f-- >0;)h[f]=arguments[f+1];if(!h.length&&f6(c)==="string"&&io[c.toLowerCase()])return"named"}});var v6=k.unpack,b6=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=v6(c,"rgb"),x=f[0],L=f[1],$=f[2];return(x<<16)+(L<<8)+$},y6=b6,w6=k.type,x6=function(c){if(w6(c)=="number"&&c>=0&&c<=16777215){var h=c>>16,f=c>>8&255,x=c&255;return[h,f,x,1]}throw new Error("unknown num color: "+c)},C6=x6,k6=F,Rf=T,Pf=M,S6=k.type,T6=y6;Rf.prototype.num=function(){return T6(this._rgb)},k6.num=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Rf,[null].concat(c,["num"])))},Pf.format.num=C6,Pf.autodetect.push({p:5,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c.length===1&&S6(c[0])==="number"&&c[0]>=0&&c[0]<=16777215)return"num"}});var L6=F,ec=T,Of=M,Ff=k.unpack,Bf=k.type,Df=Math.round;ec.prototype.rgb=function(c){return c===void 0&&(c=!0),c===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(Df)},ec.prototype.rgba=function(c){return c===void 0&&(c=!0),this._rgb.slice(0,4).map(function(h,f){return f<3?c===!1?h:Df(h):h})},L6.rgb=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(ec,[null].concat(c,["rgb"])))},Of.format.rgb=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=Ff(c,"rgba");return f[3]===void 0&&(f[3]=1),f},Of.autodetect.push({p:3,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=Ff(c,"rgba"),Bf(c)==="array"&&(c.length===3||c.length===4&&Bf(c[3])=="number"&&c[3]>=0&&c[3]<=1))return"rgb"}});var Ri=Math.log,_6=function(c){var h=c/100,f,x,L;return h<66?(f=255,x=h<6?0:-155.25485562709179-.44596950469579133*(x=h-2)+104.49216199393888*Ri(x),L=h<20?0:-254.76935184120902+.8274096064007395*(L=h-10)+115.67994401066147*Ri(L)):(f=351.97690566805693+.114206453784165*(f=h-55)-40.25366309332127*Ri(f),x=325.4494125711974+.07943456536662342*(x=h-50)-28.0852963507957*Ri(x),L=255),[f,x,L,1]},jf=_6,N6=jf,$6=k.unpack,I6=Math.round,E6=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];for(var f=$6(c,"rgb"),x=f[0],L=f[2],$=1e3,S=4e4,A=.4,R;S-$>A;){R=(S+$)*.5;var j=N6(R);j[2]/j[0]>=L/x?S=R:$=R}return I6(R)},M6=E6,nc=F,Pi=T,tc=M,A6=M6;Pi.prototype.temp=Pi.prototype.kelvin=Pi.prototype.temperature=function(){return A6(this._rgb)},nc.temp=nc.kelvin=nc.temperature=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Pi,[null].concat(c,["temp"])))},tc.format.temp=tc.format.kelvin=tc.format.temperature=jf;var R6=k.unpack,rc=Math.cbrt,P6=Math.pow,O6=Math.sign,F6=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=R6(c,"rgb"),x=f[0],L=f[1],$=f[2],S=[ac(x/255),ac(L/255),ac($/255)],A=S[0],R=S[1],j=S[2],U=rc(.4122214708*A+.5363325363*R+.0514459929*j),Q=rc(.2119034982*A+.6806995451*R+.1073969566*j),G=rc(.0883024619*A+.2817188376*R+.6299787005*j);return[.2104542553*U+.793617785*Q-.0040720468*G,1.9779984951*U-2.428592205*Q+.4505937099*G,.0259040371*U+.7827717662*Q-.808675766*G]},zf=F6;function ac(c){var h=Math.abs(c);return h<.04045?c/12.92:(O6(c)||1)*P6((h+.055)/1.055,2.4)}var B6=k.unpack,Oi=Math.pow,D6=Math.sign,j6=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=B6(c,"lab");var f=c[0],x=c[1],L=c[2],$=Oi(f+.3963377774*x+.2158037573*L,3),S=Oi(f-.1055613458*x-.0638541728*L,3),A=Oi(f-.0894841775*x-1.291485548*L,3);return[255*lc(4.0767416621*$-3.3077115913*S+.2309699292*A),255*lc(-1.2684380046*$+2.6097574011*S-.3413193965*A),255*lc(-.0041960863*$-.7034186147*S+1.707614701*A),c.length>3?c[3]:1]},Wf=j6;function lc(c){var h=Math.abs(c);return h>.0031308?(D6(c)||1)*(1.055*Oi(h,1/2.4)-.055):c*12.92}var z6=k.unpack,W6=k.type,U6=F,Uf=T,Hf=M,H6=zf;Uf.prototype.oklab=function(){return H6(this._rgb)},U6.oklab=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Uf,[null].concat(c,["oklab"])))},Hf.format.oklab=Wf,Hf.autodetect.push({p:3,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=z6(c,"oklab"),W6(c)==="array"&&c.length===3)return"oklab"}});var G6=k.unpack,V6=zf,Y6=_f,Z6=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];var f=G6(c,"rgb"),x=f[0],L=f[1],$=f[2],S=V6(x,L,$),A=S[0],R=S[1],j=S[2];return Y6(A,R,j)},q6=Z6,K6=k.unpack,Q6=Nf,X6=Wf,J6=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];c=K6(c,"lch");var f=c[0],x=c[1],L=c[2],$=Q6(f,x,L),S=$[0],A=$[1],R=$[2],j=X6(S,A,R),U=j[0],Q=j[1],G=j[2];return[U,Q,G,c.length>3?c[3]:1]},e8=J6,n8=k.unpack,t8=k.type,r8=F,Gf=T,Vf=M,a8=q6;Gf.prototype.oklch=function(){return a8(this._rgb)},r8.oklch=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];return new(Function.prototype.bind.apply(Gf,[null].concat(c,["oklch"])))},Vf.format.oklch=e8,Vf.autodetect.push({p:3,test:function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(c=n8(c,"oklch"),t8(c)==="array"&&c.length===3)return"oklch"}});var Yf=T,l8=k.type;Yf.prototype.alpha=function(c,h){return h===void 0&&(h=!1),c!==void 0&&l8(c)==="number"?h?(this._rgb[3]=c,this):new Yf([this._rgb[0],this._rgb[1],this._rgb[2],c],"rgb"):this._rgb[3]};var o8=T;o8.prototype.clipped=function(){return this._rgb._clipped||!1};var ua=T,i8=Mi;ua.prototype.darken=function(c){c===void 0&&(c=1);var h=this,f=h.lab();return f[0]-=i8.Kn*c,new ua(f,"lab").alpha(h.alpha(),!0)},ua.prototype.brighten=function(c){return c===void 0&&(c=1),this.darken(-c)},ua.prototype.darker=ua.prototype.darken,ua.prototype.brighter=ua.prototype.brighten;var s8=T;s8.prototype.get=function(c){var h=c.split("."),f=h[0],x=h[1],L=this[f]();if(x){var $=f.indexOf(x)-(f.substr(0,2)==="ok"?2:0);if($>-1)return L[$];throw new Error("unknown channel "+x+" in mode "+f)}else return L};var qa=T,d8=k.type,c8=Math.pow,u8=1e-7,h8=20;qa.prototype.luminance=function(c){if(c!==void 0&&d8(c)==="number"){if(c===0)return new qa([0,0,0,this._rgb[3]],"rgb");if(c===1)return new qa([255,255,255,this._rgb[3]],"rgb");var h=this.luminance(),f="rgb",x=h8,L=function(S,A){var R=S.interpolate(A,.5,f),j=R.luminance();return Math.abs(c-j)<u8||!x--?R:j>c?L(S,R):L(R,A)},$=(h>c?L(new qa([0,0,0]),this):L(this,new qa([255,255,255]))).rgb();return new qa($.concat([this._rgb[3]]))}return p8.apply(void 0,this._rgb.slice(0,3))};var p8=function(c,h,f){return c=oc(c),h=oc(h),f=oc(f),.2126*c+.7152*h+.0722*f},oc=function(c){return c/=255,c<=.03928?c/12.92:c8((c+.055)/1.055,2.4)},ot={},Zf=T,qf=k.type,Fi=ot,Kf=function(c,h,f){f===void 0&&(f=.5);for(var x=[],L=arguments.length-3;L-- >0;)x[L]=arguments[L+3];var $=x[0]||"lrgb";if(!Fi[$]&&!x.length&&($=Object.keys(Fi)[0]),!Fi[$])throw new Error("interpolation mode "+$+" is not defined");return qf(c)!=="object"&&(c=new Zf(c)),qf(h)!=="object"&&(h=new Zf(h)),Fi[$](c,h,f).alpha(c.alpha()+f*(h.alpha()-c.alpha()))},Qf=T,f8=Kf;Qf.prototype.mix=Qf.prototype.interpolate=function(c,h){h===void 0&&(h=.5);for(var f=[],x=arguments.length-2;x-- >0;)f[x]=arguments[x+2];return f8.apply(void 0,[this,c,h].concat(f))};var Xf=T;Xf.prototype.premultiply=function(c){c===void 0&&(c=!1);var h=this._rgb,f=h[3];return c?(this._rgb=[h[0]*f,h[1]*f,h[2]*f,f],this):new Xf([h[0]*f,h[1]*f,h[2]*f,f],"rgb")};var ic=T,m8=Mi;ic.prototype.saturate=function(c){c===void 0&&(c=1);var h=this,f=h.lch();return f[1]+=m8.Kn*c,f[1]<0&&(f[1]=0),new ic(f,"lch").alpha(h.alpha(),!0)},ic.prototype.desaturate=function(c){return c===void 0&&(c=1),this.saturate(-c)};var Jf=T,e1=k.type;Jf.prototype.set=function(c,h,f){f===void 0&&(f=!1);var x=c.split("."),L=x[0],$=x[1],S=this[L]();if($){var A=L.indexOf($)-(L.substr(0,2)==="ok"?2:0);if(A>-1){if(e1(h)=="string")switch(h.charAt(0)){case"+":S[A]+=+h;break;case"-":S[A]+=+h;break;case"*":S[A]*=+h.substr(1);break;case"/":S[A]/=+h.substr(1);break;default:S[A]=+h}else if(e1(h)==="number")S[A]=h;else throw new Error("unsupported value for Color.set");var R=new Jf(S,L);return f?(this._rgb=R._rgb,this):R}throw new Error("unknown channel "+$+" in mode "+L)}else return S};var g8=T,v8=function(c,h,f){var x=c._rgb,L=h._rgb;return new g8(x[0]+f*(L[0]-x[0]),x[1]+f*(L[1]-x[1]),x[2]+f*(L[2]-x[2]),"rgb")};ot.rgb=v8;var b8=T,sc=Math.sqrt,Ka=Math.pow,y8=function(c,h,f){var x=c._rgb,L=x[0],$=x[1],S=x[2],A=h._rgb,R=A[0],j=A[1],U=A[2];return new b8(sc(Ka(L,2)*(1-f)+Ka(R,2)*f),sc(Ka($,2)*(1-f)+Ka(j,2)*f),sc(Ka(S,2)*(1-f)+Ka(U,2)*f),"rgb")};ot.lrgb=y8;var w8=T,x8=function(c,h,f){var x=c.lab(),L=h.lab();return new w8(x[0]+f*(L[0]-x[0]),x[1]+f*(L[1]-x[1]),x[2]+f*(L[2]-x[2]),"lab")};ot.lab=x8;var n1=T,Qa=function(c,h,f,x){var L,$,S,A;x==="hsl"?(S=c.hsl(),A=h.hsl()):x==="hsv"?(S=c.hsv(),A=h.hsv()):x==="hcg"?(S=c.hcg(),A=h.hcg()):x==="hsi"?(S=c.hsi(),A=h.hsi()):x==="lch"||x==="hcl"?(x="hcl",S=c.hcl(),A=h.hcl()):x==="oklch"&&(S=c.oklch().reverse(),A=h.oklch().reverse());var R,j,U,Q,G,te;(x.substr(0,1)==="h"||x==="oklch")&&(L=S,R=L[0],U=L[1],G=L[2],$=A,j=$[0],Q=$[1],te=$[2]);var ee,ve,ke,Ne;return!isNaN(R)&&!isNaN(j)?(j>R&&j-R>180?Ne=j-(R+360):j<R&&R-j>180?Ne=j+360-R:Ne=j-R,ve=R+f*Ne):isNaN(R)?isNaN(j)?ve=Number.NaN:(ve=j,(G==1||G==0)&&x!="hsv"&&(ee=Q)):(ve=R,(te==1||te==0)&&x!="hsv"&&(ee=U)),ee===void 0&&(ee=U+f*(Q-U)),ke=G+f*(te-G),x==="oklch"?new n1([ke,ee,ve],x):new n1([ve,ee,ke],x)},C8=Qa,t1=function(c,h,f){return C8(c,h,f,"lch")};ot.lch=t1,ot.hcl=t1;var k8=T,S8=function(c,h,f){var x=c.num(),L=h.num();return new k8(x+f*(L-x),"num")};ot.num=S8;var T8=Qa,L8=function(c,h,f){return T8(c,h,f,"hcg")};ot.hcg=L8;var _8=Qa,N8=function(c,h,f){return _8(c,h,f,"hsi")};ot.hsi=N8;var $8=Qa,I8=function(c,h,f){return $8(c,h,f,"hsl")};ot.hsl=I8;var E8=Qa,M8=function(c,h,f){return E8(c,h,f,"hsv")};ot.hsv=M8;var A8=T,R8=function(c,h,f){var x=c.oklab(),L=h.oklab();return new A8(x[0]+f*(L[0]-x[0]),x[1]+f*(L[1]-x[1]),x[2]+f*(L[2]-x[2]),"oklab")};ot.oklab=R8;var P8=Qa,O8=function(c,h,f){return P8(c,h,f,"oklch")};ot.oklch=O8;var dc=T,F8=k.clip_rgb,cc=Math.pow,uc=Math.sqrt,hc=Math.PI,r1=Math.cos,a1=Math.sin,B8=Math.atan2,D8=function(c,h,f){h===void 0&&(h="lrgb"),f===void 0&&(f=null);var x=c.length;f||(f=Array.from(new Array(x)).map(function(){return 1}));var L=x/f.reduce(function(ve,ke){return ve+ke});if(f.forEach(function(ve,ke){f[ke]*=L}),c=c.map(function(ve){return new dc(ve)}),h==="lrgb")return j8(c,f);for(var $=c.shift(),S=$.get(h),A=[],R=0,j=0,U=0;U<S.length;U++)if(S[U]=(S[U]||0)*f[0],A.push(isNaN(S[U])?0:f[0]),h.charAt(U)==="h"&&!isNaN(S[U])){var Q=S[U]/180*hc;R+=r1(Q)*f[0],j+=a1(Q)*f[0]}var G=$.alpha()*f[0];c.forEach(function(ve,ke){var Ne=ve.get(h);G+=ve.alpha()*f[ke+1];for(var Me=0;Me<S.length;Me++)if(!isNaN(Ne[Me]))if(A[Me]+=f[ke+1],h.charAt(Me)==="h"){var Tn=Ne[Me]/180*hc;R+=r1(Tn)*f[ke+1],j+=a1(Tn)*f[ke+1]}else S[Me]+=Ne[Me]*f[ke+1]});for(var te=0;te<S.length;te++)if(h.charAt(te)==="h"){for(var ee=B8(j/A[te],R/A[te])/hc*180;ee<0;)ee+=360;for(;ee>=360;)ee-=360;S[te]=ee}else S[te]=S[te]/A[te];return G/=x,new dc(S,h).alpha(G>.99999?1:G,!0)},j8=function(c,h){for(var f=c.length,x=[0,0,0,0],L=0;L<c.length;L++){var $=c[L],S=h[L]/f,A=$._rgb;x[0]+=cc(A[0],2)*S,x[1]+=cc(A[1],2)*S,x[2]+=cc(A[2],2)*S,x[3]+=A[3]*S}return x[0]=uc(x[0]),x[1]=uc(x[1]),x[2]=uc(x[2]),x[3]>.9999999&&(x[3]=1),new dc(F8(x))},$t=F,Xa=k.type,z8=Math.pow,pc=function(c){var h="rgb",f=$t("#ccc"),x=0,L=[0,1],$=[],S=[0,0],A=!1,R=[],j=!1,U=0,Q=1,G=!1,te={},ee=!0,ve=1,ke=function(V){if(V=V||["#fff","#000"],V&&Xa(V)==="string"&&$t.brewer&&$t.brewer[V.toLowerCase()]&&(V=$t.brewer[V.toLowerCase()]),Xa(V)==="array"){V.length===1&&(V=[V[0],V[0]]),V=V.slice(0);for(var ie=0;ie<V.length;ie++)V[ie]=$t(V[ie]);$.length=0;for(var we=0;we<V.length;we++)$.push(we/(V.length-1))}return Qn(),R=V},Ne=function(V){if(A!=null){for(var ie=A.length-1,we=0;we<ie&&V>=A[we];)we++;return we-1}return 0},Me=function(V){return V},Tn=function(V){return V},Cn=function(V,ie){var we,be;if(ie==null&&(ie=!1),isNaN(V)||V===null)return f;if(ie)be=V;else if(A&&A.length>2){var Ln=Ne(V);be=Ln/(A.length-2)}else Q!==U?be=(V-U)/(Q-U):be=1;be=Tn(be),ie||(be=Me(be)),ve!==1&&(be=z8(be,ve)),be=S[0]+be*(1-S[0]-S[1]),be=Math.min(1,Math.max(0,be));var We=Math.floor(be*1e4);if(ee&&te[We])we=te[We];else{if(Xa(R)==="array")for(var $e=0;$e<$.length;$e++){var Pe=$[$e];if(be<=Pe){we=R[$e];break}if(be>=Pe&&$e===$.length-1){we=R[$e];break}if(be>Pe&&be<$[$e+1]){be=(be-Pe)/($[$e+1]-Pe),we=$t.interpolate(R[$e],R[$e+1],be,h);break}}else Xa(R)==="function"&&(we=R(be));ee&&(te[We]=we)}return we},Qn=function(){return te={}};ke(c);var Le=function(V){var ie=$t(Cn(V));return j&&ie[j]?ie[j]():ie};return Le.classes=function(V){if(V!=null){if(Xa(V)==="array")A=V,L=[V[0],V[V.length-1]];else{var ie=$t.analyze(L);V===0?A=[ie.min,ie.max]:A=$t.limits(ie,"e",V)}return Le}return A},Le.domain=function(V){if(!arguments.length)return L;U=V[0],Q=V[V.length-1],$=[];var ie=R.length;if(V.length===ie&&U!==Q)for(var we=0,be=Array.from(V);we<be.length;we+=1){var Ln=be[we];$.push((Ln-U)/(Q-U))}else{for(var We=0;We<ie;We++)$.push(We/(ie-1));if(V.length>2){var $e=V.map(function(Oe,Fe){return Fe/(V.length-1)}),Pe=V.map(function(Oe){return(Oe-U)/(Q-U)});Pe.every(function(Oe,Fe){return $e[Fe]===Oe})||(Tn=function(Oe){if(Oe<=0||Oe>=1)return Oe;for(var Fe=0;Oe>=Pe[Fe+1];)Fe++;var Et=(Oe-Pe[Fe])/(Pe[Fe+1]-Pe[Fe]),Lr=$e[Fe]+Et*($e[Fe+1]-$e[Fe]);return Lr})}}return L=[U,Q],Le},Le.mode=function(V){return arguments.length?(h=V,Qn(),Le):h},Le.range=function(V,ie){return ke(V),Le},Le.out=function(V){return j=V,Le},Le.spread=function(V){return arguments.length?(x=V,Le):x},Le.correctLightness=function(V){return V==null&&(V=!0),G=V,Qn(),G?Me=function(ie){for(var we=Cn(0,!0).lab()[0],be=Cn(1,!0).lab()[0],Ln=we>be,We=Cn(ie,!0).lab()[0],$e=we+(be-we)*ie,Pe=We-$e,Oe=0,Fe=1,Et=20;Math.abs(Pe)>.01&&Et-- >0;)(function(){return Ln&&(Pe*=-1),Pe<0?(Oe=ie,ie+=(Fe-ie)*.5):(Fe=ie,ie+=(Oe-ie)*.5),We=Cn(ie,!0).lab()[0],Pe=We-$e})();return ie}:Me=function(ie){return ie},Le},Le.padding=function(V){return V!=null?(Xa(V)==="number"&&(V=[V,V]),S=V,Le):S},Le.colors=function(V,ie){arguments.length<2&&(ie="hex");var we=[];if(arguments.length===0)we=R.slice(0);else if(V===1)we=[Le(.5)];else if(V>1){var be=L[0],Ln=L[1]-be;we=W8(0,V,!1).map(function(Fe){return Le(be+Fe/(V-1)*Ln)})}else{c=[];var We=[];if(A&&A.length>2)for(var $e=1,Pe=A.length,Oe=1<=Pe;Oe?$e<Pe:$e>Pe;Oe?$e++:$e--)We.push((A[$e-1]+A[$e])*.5);else We=L;we=We.map(function(Fe){return Le(Fe)})}return $t[ie]&&(we=we.map(function(Fe){return Fe[ie]()})),we},Le.cache=function(V){return V!=null?(ee=V,Le):ee},Le.gamma=function(V){return V!=null?(ve=V,Le):ve},Le.nodata=function(V){return V!=null?(f=$t(V),Le):f},Le};function W8(c,h,f){for(var x=[],L=c<h,$=f?L?h+1:h-1:h,S=c;L?S<$:S>$;L?S++:S--)x.push(S);return x}var so=T,U8=pc,H8=function(c){for(var h=[1,1],f=1;f<c;f++){for(var x=[1],L=1;L<=h.length;L++)x[L]=(h[L]||0)+h[L-1];h=x}return h},G8=function(c){var h,f,x,L,$,S,A;if(c=c.map(function(G){return new so(G)}),c.length===2)h=c.map(function(G){return G.lab()}),$=h[0],S=h[1],L=function(G){var te=[0,1,2].map(function(ee){return $[ee]+G*(S[ee]-$[ee])});return new so(te,"lab")};else if(c.length===3)f=c.map(function(G){return G.lab()}),$=f[0],S=f[1],A=f[2],L=function(G){var te=[0,1,2].map(function(ee){return(1-G)*(1-G)*$[ee]+2*(1-G)*G*S[ee]+G*G*A[ee]});return new so(te,"lab")};else if(c.length===4){var R;x=c.map(function(G){return G.lab()}),$=x[0],S=x[1],A=x[2],R=x[3],L=function(G){var te=[0,1,2].map(function(ee){return(1-G)*(1-G)*(1-G)*$[ee]+3*(1-G)*(1-G)*G*S[ee]+3*(1-G)*G*G*A[ee]+G*G*G*R[ee]});return new so(te,"lab")}}else if(c.length>=5){var j,U,Q;j=c.map(function(G){return G.lab()}),Q=c.length-1,U=H8(Q),L=function(G){var te=1-G,ee=[0,1,2].map(function(ve){return j.reduce(function(ke,Ne,Me){return ke+U[Me]*Math.pow(te,Q-Me)*Math.pow(G,Me)*Ne[ve]},0)});return new so(ee,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return L},V8=function(c){var h=G8(c);return h.scale=function(){return U8(h)},h},fc=F,It=function(c,h,f){if(!It[f])throw new Error("unknown blend mode "+f);return It[f](c,h)},Sr=function(c){return function(h,f){var x=fc(f).rgb(),L=fc(h).rgb();return fc.rgb(c(x,L))}},Tr=function(c){return function(h,f){var x=[];return x[0]=c(h[0],f[0]),x[1]=c(h[1],f[1]),x[2]=c(h[2],f[2]),x}},Y8=function(c){return c},Z8=function(c,h){return c*h/255},q8=function(c,h){return c>h?h:c},K8=function(c,h){return c>h?c:h},Q8=function(c,h){return 255*(1-(1-c/255)*(1-h/255))},X8=function(c,h){return h<128?2*c*h/255:255*(1-2*(1-c/255)*(1-h/255))},J8=function(c,h){return 255*(1-(1-h/255)/(c/255))},eb=function(c,h){return c===255?255:(c=255*(h/255)/(1-c/255),c>255?255:c)};It.normal=Sr(Tr(Y8)),It.multiply=Sr(Tr(Z8)),It.screen=Sr(Tr(Q8)),It.overlay=Sr(Tr(X8)),It.darken=Sr(Tr(q8)),It.lighten=Sr(Tr(K8)),It.dodge=Sr(Tr(eb)),It.burn=Sr(Tr(J8));for(var nb=It,mc=k.type,tb=k.clip_rgb,rb=k.TWOPI,ab=Math.pow,lb=Math.sin,ob=Math.cos,l1=F,ib=function(c,h,f,x,L){c===void 0&&(c=300),h===void 0&&(h=-1.5),f===void 0&&(f=1),x===void 0&&(x=1),L===void 0&&(L=[0,1]);var $=0,S;mc(L)==="array"?S=L[1]-L[0]:(S=0,L=[L,L]);var A=function(R){var j=rb*((c+120)/360+h*R),U=ab(L[0]+S*R,x),Q=$!==0?f[0]+R*$:f,G=Q*U*(1-U)/2,te=ob(j),ee=lb(j),ve=U+G*(-.14861*te+1.78277*ee),ke=U+G*(-.29227*te-.90649*ee),Ne=U+G*(1.97294*te);return l1(tb([ve*255,ke*255,Ne*255,1]))};return A.start=function(R){return R==null?c:(c=R,A)},A.rotations=function(R){return R==null?h:(h=R,A)},A.gamma=function(R){return R==null?x:(x=R,A)},A.hue=function(R){return R==null?f:(f=R,mc(f)==="array"?($=f[1]-f[0],$===0&&(f=f[1])):$=0,A)},A.lightness=function(R){return R==null?L:(mc(R)==="array"?(L=R,S=R[1]-R[0]):(L=[R,R],S=0),A)},A.scale=function(){return l1.scale(A)},A.hue(f),A},sb=T,db="0123456789abcdef",cb=Math.floor,ub=Math.random,hb=function(){for(var c="#",h=0;h<6;h++)c+=db.charAt(cb(ub()*16));return new sb(c,"hex")},gc=p,o1=Math.log,pb=Math.pow,fb=Math.floor,mb=Math.abs,i1=function(c,h){h===void 0&&(h=null);var f={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return gc(c)==="object"&&(c=Object.values(c)),c.forEach(function(x){h&&gc(x)==="object"&&(x=x[h]),x!=null&&!isNaN(x)&&(f.values.push(x),f.sum+=x,x<f.min&&(f.min=x),x>f.max&&(f.max=x),f.count+=1)}),f.domain=[f.min,f.max],f.limits=function(x,L){return s1(f,x,L)},f},s1=function(c,h,f){h===void 0&&(h="equal"),f===void 0&&(f=7),gc(c)=="array"&&(c=i1(c));var x=c.min,L=c.max,$=c.values.sort(function(bc,yc){return bc-yc});if(f===1)return[x,L];var S=[];if(h.substr(0,1)==="c"&&(S.push(x),S.push(L)),h.substr(0,1)==="e"){S.push(x);for(var A=1;A<f;A++)S.push(x+A/f*(L-x));S.push(L)}else if(h.substr(0,1)==="l"){if(x<=0)throw new Error("Logarithmic scales are only possible for values > 0");var R=Math.LOG10E*o1(x),j=Math.LOG10E*o1(L);S.push(x);for(var U=1;U<f;U++)S.push(pb(10,R+U/f*(j-R)));S.push(L)}else if(h.substr(0,1)==="q"){S.push(x);for(var Q=1;Q<f;Q++){var G=($.length-1)*Q/f,te=fb(G);if(te===G)S.push($[te]);else{var ee=G-te;S.push($[te]*(1-ee)+$[te+1]*ee)}}S.push(L)}else if(h.substr(0,1)==="k"){var ve,ke=$.length,Ne=new Array(ke),Me=new Array(f),Tn=!0,Cn=0,Qn=null;Qn=[],Qn.push(x);for(var Le=1;Le<f;Le++)Qn.push(x+Le/f*(L-x));for(Qn.push(L);Tn;){for(var V=0;V<f;V++)Me[V]=0;for(var ie=0;ie<ke;ie++)for(var we=$[ie],be=Number.MAX_VALUE,Ln=void 0,We=0;We<f;We++){var $e=mb(Qn[We]-we);$e<be&&(be=$e,Ln=We),Me[Ln]++,Ne[ie]=Ln}for(var Pe=new Array(f),Oe=0;Oe<f;Oe++)Pe[Oe]=null;for(var Fe=0;Fe<ke;Fe++)ve=Ne[Fe],Pe[ve]===null?Pe[ve]=$[Fe]:Pe[ve]+=$[Fe];for(var Et=0;Et<f;Et++)Pe[Et]*=1/Me[Et];Tn=!1;for(var Lr=0;Lr<f;Lr++)if(Pe[Lr]!==Qn[Lr]){Tn=!0;break}Qn=Pe,Cn++,Cn>200&&(Tn=!1)}for(var _r={},Ja=0;Ja<f;Ja++)_r[Ja]=[];for(var el=0;el<ke;el++)ve=Ne[el],_r[ve].push($[el]);for(var ar=[],ha=0;ha<f;ha++)ar.push(_r[ha][0]),ar.push(_r[ha][_r[ha].length-1]);ar=ar.sort(function(bc,yc){return bc-yc}),S.push(ar[0]);for(var co=1;co<ar.length;co+=2){var pa=ar[co];!isNaN(pa)&&S.indexOf(pa)===-1&&S.push(pa)}}return S},d1={analyze:i1,limits:s1},c1=T,gb=function(c,h){c=new c1(c),h=new c1(h);var f=c.luminance(),x=h.luminance();return f>x?(f+.05)/(x+.05):(x+.05)/(f+.05)},u1=T,rr=Math.sqrt,cn=Math.pow,vb=Math.min,bb=Math.max,h1=Math.atan2,p1=Math.abs,Bi=Math.cos,f1=Math.sin,yb=Math.exp,m1=Math.PI,wb=function(c,h,f,x,L){f===void 0&&(f=1),x===void 0&&(x=1),L===void 0&&(L=1);var $=function(pa){return 360*pa/(2*m1)},S=function(pa){return 2*m1*pa/360};c=new u1(c),h=new u1(h);var A=Array.from(c.lab()),R=A[0],j=A[1],U=A[2],Q=Array.from(h.lab()),G=Q[0],te=Q[1],ee=Q[2],ve=(R+G)/2,ke=rr(cn(j,2)+cn(U,2)),Ne=rr(cn(te,2)+cn(ee,2)),Me=(ke+Ne)/2,Tn=.5*(1-rr(cn(Me,7)/(cn(Me,7)+cn(25,7)))),Cn=j*(1+Tn),Qn=te*(1+Tn),Le=rr(cn(Cn,2)+cn(U,2)),V=rr(cn(Qn,2)+cn(ee,2)),ie=(Le+V)/2,we=$(h1(U,Cn)),be=$(h1(ee,Qn)),Ln=we>=0?we:we+360,We=be>=0?be:be+360,$e=p1(Ln-We)>180?(Ln+We+360)/2:(Ln+We)/2,Pe=1-.17*Bi(S($e-30))+.24*Bi(S(2*$e))+.32*Bi(S(3*$e+6))-.2*Bi(S(4*$e-63)),Oe=We-Ln;Oe=p1(Oe)<=180?Oe:We<=Ln?Oe+360:Oe-360,Oe=2*rr(Le*V)*f1(S(Oe)/2);var Fe=G-R,Et=V-Le,Lr=1+.015*cn(ve-50,2)/rr(20+cn(ve-50,2)),_r=1+.045*ie,Ja=1+.015*ie*Pe,el=30*yb(-cn(($e-275)/25,2)),ar=2*rr(cn(ie,7)/(cn(ie,7)+cn(25,7))),ha=-ar*f1(2*S(el)),co=rr(cn(Fe/(f*Lr),2)+cn(Et/(x*_r),2)+cn(Oe/(L*Ja),2)+ha*(Et/(x*_r))*(Oe/(L*Ja)));return bb(0,vb(100,co))},g1=T,xb=function(c,h,f){f===void 0&&(f="lab"),c=new g1(c),h=new g1(h);var x=c.get(f),L=h.get(f),$=0;for(var S in x){var A=(x[S]||0)-(L[S]||0);$+=A*A}return Math.sqrt($)},Cb=T,kb=function(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];try{return new(Function.prototype.bind.apply(Cb,[null].concat(c))),!0}catch{return!1}},v1=F,b1=pc,Sb={cool:function(){return b1([v1.hsl(180,1,.9),v1.hsl(250,.7,.4)])},hot:function(){return b1(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Di={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},vc=0,y1=Object.keys(Di);vc<y1.length;vc+=1){var w1=y1[vc];Di[w1.toLowerCase()]=Di[w1]}var Tb=Di,xn=F;xn.average=D8,xn.bezier=V8,xn.blend=nb,xn.cubehelix=ib,xn.mix=xn.interpolate=Kf,xn.random=hb,xn.scale=pc,xn.analyze=d1.analyze,xn.contrast=gb,xn.deltaE=wb,xn.distance=xb,xn.limits=d1.limits,xn.valid=kb,xn.scales=Sb,xn.colors=Mf,xn.brewer=Tb;var Lb=xn;return Lb})})(Eg);var uL=Eg.exports;const hL=Xt(uL);function pL(e){const{h:n,s:t,l:a}=e;return hL.hsl(n,t/100,a/100)}const fL=e=>pL(e).luminance(),Mg=e=>fL(e)<.5,$l=({label:e,checked:n,toggle:t})=>s("label",{className:"checkbox no-focus inline",children:[r("input",{type:"checkbox",checked:n,onChange:t}),e]}),Ag=`// redefine any of the following hues to taste...
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
`,mL=()=>{const[e,n]=D.useState({names:!1,info:!1,show5s:!1}),t=i=>n(d=>({...d,[i]:!d[i]})),a=()=>t("names"),l=()=>t("info"),o=()=>t("show5s");return s("div",{className:"prose",children:[r("h1",{children:"Standard Colors"}),r("p",{children:"The following greyscale ranges are also defined."}),s("div",{className:"flex space end",children:[r("h2",{children:"Greyscale Ranges"}),s("div",{className:"text-right color-options",children:[r($l,{label:"Show Names",checked:e.names,toggle:a}),r($l,{label:"Show Info",checked:e.info,toggle:l}),r($l,{label:"Show 5s",checked:e.show5s,toggle:o})]})]}),r("div",{className:`ranges ${e.names?"names":"nameless"}`,children:od.filter(i=>qr.ranges[i].greyscale).map(i=>r(gL,{uri:i,range:qr.ranges[i],options:e},i))}),r("h2",{children:"Brand Hue"}),s("p",{children:["The greyscale ranges are designed to based on your primary brand color. The ",r("code",{children:"grey"})," range is desaturated to around 5%.  The"," ",r("code",{children:"grey20"})," and ",r("code",{children:"grey40"})," ranges are saturated to around 20% and 40% respectively."]}),s("p",{children:["The brand color for this website is ",r("code",{children:"violet"})," which is why these greyscales have a violet tinge to them."]}),s("p",{children:["Each of the colours show above has a corresponding SCSS variable composed of the color name and stop delimited by a hyphen, e.g."," ",r("code",{children:"$red-0"})," through to ",r("code",{children:"$grey-100"}),".  They are also defined as CSS custom properties, e.g. ",r("code",{children:"--red-0"})," through to ",r("code",{children:"--grey-100"}),"."]}),s("p",{children:["Each range of colors is built from a base hue.  These are defined in SASS variables using the SASS ",r("code",{children:"!default"})," flag.  If you want to adjust the hues you can set any of these SASS variables before importing the main ",r("code",{children:"badger-ui.scss"})," component."]}),r(Ie,{code:Ag,caption:"Customising Hues",language:"scss",expand:!0}),r("h2",{children:"TODO"}),s("ul",{children:[r("li",{children:"Editing or updating a palette using Badger Color"}),r("li",{children:"Expanding the palette into SCSS files"}),r("li",{children:"Customising the palette using SCSS variables"}),r("li",{children:"Customising the color hues"}),r("li",{children:"Defining your brand color"}),r("li",{children:"Adding/editing CSS scopes"}),r("li",{children:"Including or omitting colors"})]})]})},gL=({uri:e,range:n,options:t})=>s("div",{className:"range",children:[t.names&&r("h3",{children:n.name}),r("div",{className:"swatches",children:Ci(0,100,t.show5s?5:10).map(a=>r(vL,{uri:e,range:n,stop:a,options:t},a))})]}),vL=({uri:e,range:n,stop:t,options:a})=>{const l=n.stops[t];return r("div",{className:`swatch ${Mg(l)?"dark":"light"}`,style:{backgroundColor:`var(--${e}-${t})`},children:a.info&&r(Rg,{uri:e,stop:t,color:l})})},Rg=({uri:e,stop:n,color:t})=>s("div",{children:[s("div",{className:"stop",children:[e,"-",n]}),s("div",{className:"specs",children:[t.hex,r("br",{}),"h:",t.h,"°",r("br",{}),"s:",t.s,"%",r("br",{}),"l:",t.l,"%"]})]}),bL=Object.freeze(Object.defineProperty({__proto__:null,Info:Rg,default:mL},Symbol.toStringTag,{value:"Module"})),yL=`# Path to the palette data file (exported from
# badger-color) relative to the project root
palette: config/my-palette.json

# Path to the SCSS output directory, also
# relative to the project root
output: styles/color

# Your default brand color
brandColor: blue
`,wL=`{
  "scripts": {
    "palette": "badger-css-palette-scss -c config/export-my-palette.yaml -v"
  }
}`,xL=`## using npm
$ npm run palette

## using yarn
$ yarn run palette

## using pnpm
$ pnpm run palette`,CL=`// Load the default helpers and configuration files
@import '@abw/badger-css/styles/helpers/all.scss';
@import '@abw/badger-css/styles/config/all.scss';

// Load your custom palette
@import "color/palette.scss";

// Then the default utilities, form styles and other components
@import "@abw/badger-css/styles/utilities/all.scss";
@import "@abw/badger-css/styles/forms/all.scss";
@import "@abw/badger-css/styles/components/all.scss";
`,kL=`// Replace this:
// @import "@abw/badger-css/styles/badger.scss";

// With something like this (you may need to adjust
// the path prefix, depending on where you're loading
// it from, e.g. "../styles/badger.scss")
@import "styles/badger.scss";`,ae=({children:e,align:n="top"})=>r("div",{className:`grid-2 gap-h-8 stack-desktop ${n}`,style:{"--prose-width":"100%"},children:e}),SL=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Custom Palette"}),s(ae,{children:[s("div",{children:[r("p",{children:"The pre-defined color palette is a good starting point for building a web site.  There's a certain amount of flexibility built in to the SASS source files: you can adjust the hues of the different color ranges, define your own brand color or colors, and specify which of the color ranges you want to include (and implicitly, which ones you don't want)."}),s("p",{children:["When you need a bit more flexibility you can head over to the"," ",r("a",{href:"https://abw.github.io/badger-color/",children:"Badger Color"})," web app and either customise one of the standard palettes or design your own palette from scratch."]})]}),s("div",{children:[r("p",{children:"You can then download the palette data as a JSON file and use the script provided to generate the SCSS configuration files for your palette, ready to integrate into Badger CSS.  At any point you can upload the palette back into Badger Color, make some adjustments, download it again and repeat the process."}),s("p",{children:["You'll need to have ",r("code",{children:"@abw/badger-css"})," installed as a developer dependency for your project for these next steps to work. See the ",r(NT,{})," page for details (TL;DR:"," ",r("code",{children:"npm add -D @abw/badger-css"})," or the equivalent with ",r("code",{children:"yarn"})," or ",r("code",{children:"pnpm"}),")."]})]})]}),r("h2",{children:"Palette Configuration File"}),s(ae,{children:[s("div",{children:[s("p",{children:["For these examples, we'll assume that you've download your custom palette file and saved it in a ",r("code",{children:"config"})," directory under your project root as ",r("code",{children:"my-palette.json"}),".  It doesn't have to be in the ",r("code",{children:"config"})," directory - you can put it anywhere you like in your project."]}),s("p",{children:["You then need to create a configuration file like the one shown here.  It can be a YAML file or JSON file, you can call it anything you like (as long as it has a ",r("code",{children:".yaml"})," or ",r("code",{children:".json"})," ","file extension), and you can put it anywhere you like in your project. Here we'll assume it's called"," ",r("code",{children:"export-my-palette.yaml"})," and is also located in the ",r("code",{children:"config"})," directory under the project root."]}),s("p",{children:["You should define ",r("code",{children:"palette"})," to be the path to your palette data file (relative to the project root), and"," ",r("code",{children:"output"})," to be a path to the directory where you want the SCSS files to be written (also relative to the project root)."]}),s("p",{children:["You can also define your brand color as ",r("code",{children:"brandColor"}),". There are other configuration options you can specify but we'll keep it simple for now."]})]}),r(Ie,{code:yL,caption:"config/export-my-palette.yaml",language:"yaml",expand:!0})]}),s("h2",{children:["Adding a ",r("code",{children:"package.json"})," Script"]}),s(ae,{children:[s("div",{children:[s("p",{children:["Then add a line to the ",r("code",{children:"scripts"})," section of your"," ",r("code",{children:"package.json"})," file like this."]}),s("p",{children:["The ",r("code",{children:"-c"})," (or ",r("code",{children:"--config"})," if you prefer verbosity) option tells it where your config file is located.  The ",r("code",{children:"-v"})," ","(or ",r("code",{children:"--verbose"}),") option enables messages to tell you what it's doing.  You can leave this off if you prefer."]})]}),r(Ie,{code:wL,caption:"package.json",language:"json",expand:!0})]}),r("h2",{children:"Export the Palette as SCSS"}),s(ae,{children:[s("div",{children:[s("p",{children:["You can then ",r("code",{children:"run palette"})," from the command line using"," ",r("code",{children:"npm"}),", ",r("code",{children:"yarn"})," or ",r("code",{children:"pnpm"}),", depending on which package manager you're using."]}),s("p",{children:["If you've got the verbose mode enabled, you should see a message reporting each color range being written to a file in"," ",r("code",{children:"style/color/range/XXX"}),", and the main palette index file being written to ",r("code",{children:"style/color/palette.scss"}),"."]})]}),r(Ie,{code:xL,caption:"Exporting the palette",language:"bash",expand:!0})]}),s("h2",{children:["Defining a Custom ",r("code",{children:"badger.scss"})," File"]}),s(ae,{children:[s("div",{children:[s("p",{children:["Now you need to define your own version of the main"," ",r("code",{children:"badger.scss"})," which loads your palette instead of the default one."]}),s("p",{children:["In this example we'll assume that it's saved as",r("code",{children:"badger.scss"})," in the ",r("code",{children:"styles"})," directory, alongside the newly created ",r("code",{children:"color"})," directory that has been exported from the palette."]}),r("p",{children:"This is also a good place to set any SASS variables that change the defaults for Badger CSS.  They should go at the top of this file."})]}),r(Ie,{code:CL,caption:"Custom badger.scss",language:"scss",expand:!0})]}),s("h2",{children:["Replace the Standard ",r("code",{children:"badger.scss"})," File"]}),s(ae,{children:[r("div",{children:s("p",{children:["Now you just need to include the new file ",r("code",{children:"badger.scss"})," ","into your website or main stylesheet.  If you were previously loading the default ",r("code",{children:"badger.scss"})," then should change the path to point to your new local ",r("code",{children:"badger.scss"})," file."]})}),r(Ie,{code:kL,caption:"Including your badger.scss",language:"scss",expand:!0})]})]}),TL=Object.freeze(Object.defineProperty({__proto__:null,default:SL},Symbol.toStringTag,{value:"Module"})),LL=`// define the hues for the greyscale colors...
$grey-hue:   40;
$grey20-hue: 40;
$grey40-hue: 40;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,_L=()=>{const[e,n]=D.useState({names:!1,info:!1,show5s:!1}),t=i=>n(d=>({...d,[i]:!d[i]})),a=()=>t("names"),l=()=>t("info"),o=()=>t("show5s");return s("div",{className:"prose flow",children:[r("h1",{children:"Standard Colors"}),s(ae,{children:[s("p",{children:["The following standard color ranges are defined.  This palette was created using ",r("a",{href:"https://abw.github.io/badger-color",children:"Badger Color"}),", a companion to this library.  You can use it to clone and update this palette or to create your own palettes from scratch."]}),s("p",{children:["Each color range is divided into color ",r("em",{children:"stops"}),".  They range in increments of 5 from ",r("code",{children:"0"})," which is very close to black, up to"," ",r("code",{children:"100"}),", which is very close to white."]})]}),r(b0,{title:"Color Ranges",colors:od.filter(i=>!qr.ranges[i].greyscale),options:e,toggleNames:a,toggleInfo:l,toggleShow5s:o}),r("h2",{children:"Range Hues"}),r(Dt,{code:Ag,caption:"Customising Hues",language:"scss",expand:!0,children:s("p",{children:["Each range of colors is built from a base hue.  These are defined in SASS variables using the SASS ",r("code",{children:"!default"})," flag.  If you want to adjust the hues you can set any of these SASS variables before importing the main ",r("code",{children:"badger.scss"})," component."]})}),r(b0,{title:"Greyscale Ranges",colors:od.filter(i=>qr.ranges[i].greyscale),options:e,toggleNames:a,toggleInfo:l,toggleShow5s:o}),s(Dt,{code:LL,caption:"Customising Greyscale Hues",language:"scss",className:"mar-t-8",expand:!0,children:[s("p",{children:["Three greyscale color ranges are also defined.  They are designed to be based on your primary brand color. The ",r("code",{children:"grey"})," range is desaturated to around 5%.  The"," ",r("code",{children:"grey20"})," and ",r("code",{children:"grey40"})," ranges are saturated to around 20% and 40% respectively."]}),s("p",{children:["The brand color for this website is ",r("code",{children:"blue"})," which is why these greyscales have a blue tinge to them.  You can set the hues for these color ranges using the ",r("code",{children:"$grey-hue"}),","," ",r("code",{children:"$grey20-hue"})," and ",r("code",{children:"$grey40-hue"})," variables."]})]}),s("p",{className:"mar-t-4",children:[r(Wp,{text:"Read on"})," to see how you can define your own brand color and automatically get greyscales to match."]})]})},b0=({title:e,colors:n,options:t,toggleNames:a,toggleInfo:l,toggleShow5s:o})=>s(At,{children:[s("div",{className:"flex space end",children:[r("h2",{children:e}),s("div",{className:"text-right color-options",children:[r($l,{label:"Show Names",checked:t.names,toggle:a}),r($l,{label:"Show Info",checked:t.info,toggle:l}),r($l,{label:"Show 5s",checked:t.show5s,toggle:o})]})]}),r("div",{className:`ranges ${t.names?"names":"nameless"}`,children:n.map(i=>r(NL,{uri:i,range:qr.ranges[i],options:t},i))})]}),NL=({uri:e,range:n,options:t})=>s("div",{className:"range",children:[t.names&&r("h3",{children:n.name}),r("div",{className:"swatches",children:Ci(0,100,t.show5s?5:10).map(a=>r($L,{uri:e,range:n,stop:a,options:t},a))})]}),$L=({uri:e,range:n,stop:t,options:a})=>{const l=n.stops[t];return r("div",{className:`swatch ${Mg(l)?"dark":"light"}`,style:{backgroundColor:`var(--${e}-${t})`},children:a.info&&r(Pg,{uri:e,stop:t,color:l})})},Pg=({uri:e,stop:n,color:t})=>s("div",{children:[s("div",{className:"stop",children:[e,"-",n]}),s("div",{className:"specs",children:[t.hex,r("br",{}),"h:",t.h,"°",r("br",{}),"s:",t.s,"%",r("br",{}),"l:",t.l,"%"]})]}),IL=Object.freeze(Object.defineProperty({__proto__:null,Info:Pg,default:_L},Symbol.toStringTag,{value:"Module"})),_=({Component:e,code:n,html:t,children:a,className:l="",caption:o,fixed:i,expand:d,language:u})=>s("div",{className:`example grid-2 gap-8 stack-desktop ${l}`,children:[r("div",{className:"source",children:r(Ie,{caption:o,code:n||t,expand:d,fixed:i,language:t?"html":u})}),!!a&&r("div",{className:"interim",children:a}),e?s("div",{className:"output",children:[r("h4",{className:"caption",children:"Output"}),r(e,{})]}):null,t?s("div",{className:"output",children:[r("h4",{className:"caption",children:"Output"}),r("div",{dangerouslySetInnerHTML:{__html:t}})]}):null]}),EL=`<div class="
  violet border pad-4 bdr-2 bdw-2
  fgc-40 bgc-85 hdc-30 bdc-70
">
  <h3>Colors</h3>
  Foreground color violet-40<br/>
  Background color violet-85<br/>
  Heading color violet-30<br/>
  Border color violet-70<br/>
</div>
`,ML=`<div class="
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
`,AL=`<div class="inverse pad-2">
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
`,RL=`<div class="red grid-3 gap-2">
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
`,PL=`<!-- Explicit color range -->
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
</div>`,OL=`<div>
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
`,Kr=({title:e="Note",children:n,className:t=""})=>s("div",{className:`info alert flex top border small ${t}`,children:[r(Dl,{name:"info",className:"side-icon"}),s("div",{children:[r("h3",{children:e}),n]})]}),Ss=({scope:e,to:n,from:t="color",size:a="smallish",abbreviate:l=!1})=>s("table",{className:`${e} ${a} celled striped properties mar-b-8`,children:[r("thead",{children:s("tr",{children:[r("th",{children:"Variable"}),r("th",{children:"Mapped To"})]})}),r("tbody",{children:Ci(0,100,5).map(o=>r(FL,{n:o,from:t,to:n,abbreviate:l},o))})]}),FL=({from:e,to:n,n:t,abbreviate:a})=>!a||t<=10||t>=90?s("tr",{children:[s("td",{className:"font-mono nowrap",children:["--",e,"-",t]}),s("td",{className:"font-mono nowrap",children:["--",n,"-",t]})]},t):t===15?s("tr",{children:[r("td",{className:"font-mono nowrap",children:"..etc..."}),r("td",{className:"font-mono nowrap",children:"...etc..."})]},t):null,BL=["red","brown","orange"],DL=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Color Utilities"}),r("h2",{children:"Color Classes"}),s(ae,{children:[s("p",{children:["Each of the color ranges defined in your palette has a corresponding class. For example, the ",r("code",{children:"red"})," class can be used to select the red color range.  Some of the colors also have semantic aliases, e.g. ",r("code",{children:"error"})," and ",r("code",{children:"invalid"})," are aliases for"," ",r("code",{children:"red"}),"."]}),s("p",{children:["Selecting a color range doesn't have much of a visible effect by itself.  The important things is that it maps the ",r("code",{children:"--color-N"})," ","CSS custom properties to the equivalent stops from the selected color range.  For example, in the scope of the ",r("code",{children:"red"})," CSS class, the"," ",r("code",{children:"--color-0"})," property is mapped to ",r("code",{children:"--red-0"}),","," ",r("code",{children:"--color-5"})," is mapped to ",r("code",{children:"--red-5"}),","," ",r("code",{children:"--color-10"})," to ",r("code",{children:"--red-10"})," and so on up to 100."]})]}),s("div",{className:"small flex gap-4",children:[BL.map(e=>s("div",{children:[s("h3",{className:"font-mono mar-b-2",children:[".",e," ","{"," ... ","}"]}),r(Ss,{scope:e,to:e,abbreviate:!0})]},e)),r("div",{children:r("h3",{className:"font-mono mar-b-2",children:"...etc"})})]}),r("h2",{children:"Foreground, Background and Border Colors"}),s(ae,{children:[s("p",{children:["The ",r("code",{children:"fgc-N"}),", ",r("code",{children:"bgc-N"}),", ",r("code",{children:"hdc-N"})," and"," ",r("code",{children:"bdc-N"})," classes can be used to select a stop from the color range for the foreground color, background color, heading color and border color, respectively."]}),s("p",{children:["For example, the ",r("code",{children:"bgc-80"})," CSS class will set the background color to whatever color is mapped to ",r("code",{children:"--color-80"}),".  In the scope of the ",r("code",{children:"red"})," CSS class, that will be ",r("code",{children:"--red-80"}),"."]})]}),s("div",{className:"grid-2 gap-8 stack-desktop",children:[r(y0,{classes:[["fgc-N","--color",s(At,{children:[r("b",{children:"f"}),"ore",r("b",{children:"g"}),"round ",r("b",{children:"c"}),"olor stop ",r("code",{children:"N"})]})],["bgc-N","--background-color",s(At,{children:[r("b",{children:"b"}),"ack",r("b",{children:"g"}),"round ",r("b",{children:"c"}),"olor stop ",r("code",{children:"N"})]})],["hdc-N","--heading-color",s(At,{children:[r("b",{children:"h"}),"ea",r("b",{children:"d"}),"ing ",r("b",{children:"c"}),"olor stop ",r("code",{children:"N"})]})],["bdc-N","--border-color",s(At,{children:[r("b",{children:"b"}),"or",r("b",{children:"d"}),"er ",r("b",{children:"c"}),"olor stop ",r("code",{children:"N"})]})]]}),r("div",{children:s(Kr,{children:["The ",r("code",{children:"bdc-N"})," classes are designed to be used in conjunction with the ",r("code",{children:"border"})," class and other classes for setting ",r(Fd,{}),".  A ",r("code",{children:"bdc-N"})," class will set the color border, but you won't see any effect unless you also add the ",r("code",{children:"border"})," class."]})})]}),r(_,{html:EL,caption:"Color Classes",expand:!0}),r("h2",{children:"Dark Theme"}),s("p",{children:["The ",r("code",{children:"fgd-N"}),", ",r("code",{children:"bgd-N"}),", ",r("code",{children:"hdd-N"})," and"," ",r("code",{children:"bdd-N"})," classes are equivalents of the above for when a dark theme is selected.  You can set foreground, background, heading and border colors for both light and dark themes and they will be switched in automatically."]}),s(ae,{children:[r(y0,{classes:[["fgd-N","--color",s(At,{children:[r("b",{children:"f"}),"ore",r("b",{children:"g"}),"round ",r("b",{children:"d"}),"ark theme color stop ",r("code",{children:"N"})]})],["bgd-N","--background-color",s(At,{children:[r("b",{children:"b"}),"ack",r("b",{children:"g"}),"round ",r("b",{children:"d"}),"ark theme color stop ",r("code",{children:"N"})]})],["hdd-N","--heading-color",s(At,{children:[r("b",{children:"h"}),"ea",r("b",{children:"d"}),"ing ",r("b",{children:"d"}),"ark theme color stop ",r("code",{children:"N"})]})],["bdd-N","--border-color",s(At,{children:[r("b",{children:"b"}),"or",r("b",{children:"d"}),"er ",r("b",{children:"d"}),"ark theme color stop ",r("code",{children:"N"})]})]]}),s(Kr,{children:["The same rule applies for ",r("code",{children:"bdd-N"})," as it does for"," ",r("code",{children:"bdc-N"})," - it selects the border color but you still need to add the ",r("code",{children:"border"})," class to make the border visible."]})]}),r(_,{html:ML,caption:"Dark Theme",expand:!0}),r("h2",{children:"Color Inheritance"}),r("p",{children:"CSS custom properties are inherited by child elements.  This means you can select a color range on an element and all children will inherit that color range."}),r(_,{html:RL,caption:"Color Inheritance",expand:!0}),r("h2",{children:"Easy Component Coloring"}),s("p",{children:["This effect is used by various badger-css components. They use the generic ",r("code",{children:"--color-N"})," properties to define colors and can then be rendered using any color range."]}),r(_,{html:PL,caption:"Color Components"}),r("h2",{children:"Creating Your Own Colored Components"}),s(ae,{children:[s("p",{children:["You can employ this in your own components by using the"," ",r("code",{children:"--color-N"})," CSS custom properties to define your component colours."]}),s("p",{children:["This is particularly useful when implementing components for both light and dark themes.  You only need to specify which ",r("code",{children:"--color-N"})," stops you want to use in each case.  You don't need to write separate CSS rules for each of the colors you might want to use."]})]}),r(_,{html:OL,caption:"Custom Components"}),r("h2",{children:"Inverse Colors"}),s("p",{children:["The ",r("code",{children:"inverse"})," CSS class can be added as a shortcut to define an inverse color block."]}),r(_,{html:AL,caption:"Inverse Colors",expand:!0})]}),y0=({classes:e})=>s("table",{className:"brand celled striped mar-b-8",children:[r("thead",{children:s("tr",{children:[r("th",{children:"Class"}),r("th",{children:"Property"}),r("th",{children:"Description"})]})}),r("tbody",{children:e.map(n=>s("tr",{children:[r("td",{children:r("code",{children:n[0]})}),r("td",{children:r("code",{children:n[1]})}),r("td",{children:n[2]})]},n[0]))})]}),jL=Object.freeze(Object.defineProperty({__proto__:null,default:DL},Symbol.toStringTag,{value:"Module"})),zL=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Color Variables"}),r("h2",{children:"SASS Color Variables"}),s("p",{children:["Each stop in a color range has a SASS variable defined, e.g.",r("code",{children:"$red-0"}),", ",r("code",{children:"$red-5"}),","," ",r("code",{children:"$red-10"})," and so on.  You can use these in your SASS components as necessary."]}),r("h2",{children:"CSS Custom Properties"}),s(ae,{children:[s("div",{children:[s("p",{children:["Each of the colour stops also has a corresponding CSS custom property (a.k.a. CSS variable) defined, e.g.",r("code",{children:"--red-0"}),", ",r("code",{children:"--red-5"}),","," ",r("code",{children:"--red-10"})," and so on.  You can use these in your CSS files, e.g. as ",r("code",{children:"color: var(--red-10)"}),"."]}),s("p",{children:["Each of your brand colors will also have CSS custom properties defined. If you're using the default ",r("code",{children:"brand"})," name then they will be ",r("code",{children:"--brand-0"}),", ",r("code",{children:"--brand-5"}),","," ",r("code",{children:"--brand-10"})," and so on."]})]}),s("p",{children:["If you have defined a different set of names via"," ",r("code",{children:"$brand-colors"})," then they will have corresponding names.  For example, if you defined the names in your ",r("code",{children:"$brand-colors"})," to be ",r("code",{children:"primary"}),","," ",r("code",{children:"secondary"})," and ",r("code",{children:"tertiary"})," then the custom properties will be ",r("code",{children:"--primary-0"}),","," ",r("code",{children:"--secondary-0"}),", ",r("code",{children:"--tertiary-0"}),", and so on."]})]}),r("h2",{children:"Color Switching"}),s(ae,{children:[s("p",{children:["CSS custom properties are defined for a generic color, appropriately named ",r("code",{children:"color"}),".  By default they are mapped to grey."]}),r("div",{children:r(Ss,{scope:"grey",to:"grey"})})]}),s(ae,{children:[s("p",{children:["CSS scopes will be generated for each color range which map the generic colors to the colors from that range.  For example, the"," ",r("code",{children:".red"})," class selector scope will map the colors as shown here."]}),s("div",{children:[s("h3",{className:"font-mono mar-b-2",children:[".red ","{"," ... ","}"]}),r(Ss,{scope:"red",to:"red",abbreviate:!0})]})]}),s(ae,{children:[s("div",{children:[s("p",{children:["Scopes will also be generated for your brand colors, either using the default ",r("code",{children:"brand"})," name or the custom names you have defined using ",r("code",{children:"$brand-colors"}),"."]}),s("p",{children:["For example, in the ",r("code",{children:".brand"})," scope the colors will be mapped as follows."]})]}),s("div",{children:[s("h3",{className:"font-mono mar-b-2",children:[".brand ","{"," ... ","}"]}),r(Ss,{scope:"brand",to:"brand",abbreviate:!0})]})]}),s("p",{children:["The benefit of this approach is that it allows you to define UI components using the generic colors ",r("code",{children:"--color-N"}),".  By default they will appear in grey, but adding a CSS class matching the color name will switch in the appropriate color range."]}),r("h2",{children:"CSS Scope Aliases"}),s("p",{children:["A number of additional CSS scopes are defined for some of the colors. For example, the CSS scope created for the ",r("code",{children:"red"})," color range is actually ",r("code",{children:".red, .error, .invalid"}),".  This allows you to add the ",r("code",{children:"red"}),", ",r("code",{children:"error"})," or ",r("code",{children:"invalid"})," CSS class to an element to have the red color range selected."]}),s("p",{children:["This is used by ",r(Hp,{})," and ",r(Up,{}),", for example, to provide semantic names for the colors."]})]}),WL=Object.freeze(Object.defineProperty({__proto__:null,default:zL},Symbol.toStringTag,{value:"Module"})),UL=`<div class="alert">
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
`,HL=`<div class="alert border">
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
`,GL=`<div class="alert">
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
</div>`,VL=`<div class="grid-2 gap-4">
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
</div>`,YL=`<div class="surface-3 pad-8">
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
</div>`,Gp=({color:e,setColor:n})=>s("select",{name:"color",required:!0,value:e,onChange:t=>n(t.target.value),children:[r("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Color"}),r("option",{value:"",children:"Default"}),od.map(t=>r("option",{value:t,children:t},t))]}),ZL=["smallest","smaller","small","medium","large","larger","largest"],Vp=({size:e,setSize:n})=>s("select",{name:"size",required:!0,value:e,onChange:t=>n(t.target.value),children:[r("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),r("option",{value:"",children:"Default"}),ZL.map(t=>r("option",{value:t,children:t},t))]}),qL=[0,1,2,3,4,5,6,8,10],Yp=({radius:e,setRadius:n})=>s("select",{name:"radius",required:!0,value:e,onChange:t=>n(t.target.value),children:[r("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),r("option",{value:"",children:"Default"}),qL.map(t=>s("option",{value:t,children:["radius: ",t]},t))]}),KL=[1,2,3,4,5],Og=({shadow:e,setShadow:n})=>s("select",{name:"shadow",required:!0,value:e,onChange:t=>n(t.target.value),children:[r("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),r("option",{value:"",children:"Default"}),KL.map(t=>s("option",{value:t,children:["shadow: ",t]},t))]}),Nn=({checked:e,toggle:n,label:t})=>s("label",{className:"checkbox border no-focus",children:[r("input",{type:"checkbox",checked:e,onChange:n}),t]}),QL=[0,1,2,3,4,5,6,8,10],Fg=({borderWidth:e,setBorderWidth:n})=>s("select",{name:"borderWidth",required:!0,value:e,onChange:t=>n(t.target.value),children:[r("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),r("option",{value:"",children:"Default"}),QL.map(t=>s("option",{value:t,children:["width: ",t]},t))]}),XL=()=>{const[e,n]=D.useState({body:!0});return s("div",{className:"example grid-2 gap-8 stack-desktop",children:[r(JL,{options:e,setOption:l=>o=>n(i=>({...i,[l]:o})),toggleOption:l=>()=>n(o=>({...o,[l]:!o[l]}))}),s("div",{children:[r("h3",{className:"mar-b-2",children:"Output"}),r("div",{className:"output",children:r(e_,{options:e})})]})]})},JL=({options:e,toggleOption:n,setOption:t})=>{const a=n("headline"),l=n("heading"),o=n("border"),i=n("stripe"),d=t("type"),u=t("size"),p=t("color"),g=t("radius"),y=t("shadow"),C=t("borderWidth"),I=`<div class="${Bg(e)}">
  ...
</div>`;return s("div",{children:[r("h3",{className:"mar-b-2",children:"Options"}),s("div",{className:"grid-3 gap-4 stack-tablet top",children:[r(Nn,{checked:e.headline,toggle:a,label:"Headline"}),r(Nn,{checked:e.head,toggle:l,label:"Heading"}),r(Nn,{checked:e.stripe,toggle:i,label:"Stripe"}),r(Nn,{checked:e.border,toggle:o,label:"Border"}),r(Fg,{borderWidth:e.borderWidth,setBorderWidth:C}),r(Yp,{radius:e.radius,setRadius:g})]}),s("div",{className:"grid-4 gap-4 stack-tablet mar-t-4",children:[r(n_,{type:e.type,setType:d}),r(Gp,{color:e.color,setColor:p}),r(Vp,{size:e.size,setSize:u}),r(Og,{radius:e.shadow,setShadow:y})]}),r("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),r(Ie,{code:I,language:"html",expand:!0})]})},Bg=e=>Si([e.color,e.type,e.size,e.border&&"border",e.stripe&&"stripe",e.radius&&`bdr-${e.radius}`,e.shadow&&`shadow-${e.shadow}`,e.borderWidth&&`bdw-${e.borderWidth}`,"alert"]),e_=({options:e})=>{const n=Bg(e);return s("div",{className:n,children:[e.headline&&r("div",{className:"headline",children:"This is a headline"}),e.heading&&r("h3",{children:"Hello World!"}),s("p",{children:["This is an alert.  This is some ",r("b",{children:"bold text"}),". This is a ",r("a",{href:"/",children:"link"}),"."]}),r("button",{children:"Default Button"}),r("button",{className:"red mar-l-2",children:"Red Button"})]})},n_=({type:e,setType:n})=>s("select",{name:"type",required:!0,value:e,onChange:t=>n(t.target.value),children:[r("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),r("option",{value:"",children:"Default"}),["info","warning","success","error"].map(t=>r("option",{value:t,children:t},t))]}),t_=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Alerts"}),s("p",{children:["The ",r("code",{children:"alert"})," class can be used to display alerts. Add any of the ",r("code",{children:"info"}),", ",r("code",{children:"success"}),","," ",r("code",{children:"warning"})," or ",r("code",{children:"error"})," classes to set the color."]}),r("h2",{children:"Demo"}),r("p",{children:"Select the options to determine how the alert is displayed. Note that some options are mutually exclusive (e.g. stripe and border)."}),r(XL,{}),r("h2",{children:"Default Alerts"}),r(_,{html:UL,language:"html",caption:"Alerts"}),r("h2",{children:"Alerts With Borders"}),s("p",{children:["Add the ",r("code",{children:"border"})," class to add a border."]}),r(_,{html:HL,language:"html",caption:"Added Borders"}),r("h2",{children:"Alert Headings"}),r("p",{children:"Headings are displayed in a slightly darker color than the body text."}),r(_,{html:GL,language:"html",caption:"Alert Headings"}),r("h2",{children:"Alert Headlines"}),s("p",{children:["Add an element with the ",r("code",{children:"headline"})," class to really make it stand out.  This works well with and without borders.  Throw in a"," ",r(AT,{})," if you want to make it really pop."]}),r(_,{html:VL,language:"html",caption:"Alert Headlines"}),r("h2",{children:"Stripe Alerts"}),s("p",{children:["For a more subdued look, try adding the ",r("code",{children:"stripe"})," class."]}),r(_,{html:YL,language:"html",caption:"Stripe Alert"})]}),r_=Object.freeze(Object.defineProperty({__proto__:null,default:t_},Symbol.toStringTag,{value:"Module"})),a_=`<div class="flex gap-4">
  <div class="badge">Badge 1</div>
  <div class="badge">Badge 2</div>
</div>
`,l_=`<div class="flex wrap gap-2">
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
`,o_=`<div class="flex wrap middle gap-2">
  <span class="smallest badge">Smallest badge</span>
  <span class="smaller badge">Smaller badge</span>
  <span class="small badge">Small badge</span>
  <span class="large badge">Large badge</span>
  <span class="larger badge">Larger badge</span>
  <span class="largest badge">Largest badge</span>
</div>
`,i_=`<div class="flex wrap middle gap-2">
  <span class="badge bdw-4">Border width 4</span>
  <span class="badge bdr-2">Border radius 2</span>
  <span class="badge bdc-50">Border color stop 50</span>
</div>
`,s_=`<div class="badge tag">Badge Tag</div>
`,d_=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Badges"}),s("p",{children:["Add the ",r("code",{children:"badge"})," class to an element to make it a badge."]}),r(_,{html:a_,language:"html",caption:"Badge",expand:!0}),r("h2",{children:"Badge Colors"}),s("p",{children:["Add any of the ",r($T,{})," range classes to set the badge color."]}),r(_,{html:l_,language:"html",caption:"Badge Colors",expand:!0}),r("h2",{children:"Badge Sizes"}),s("p",{children:["Add any of the ",r(MT,{})," utility classesto set the badge size."]}),r(_,{html:o_,language:"html",caption:"Badge Sizes",expand:!0}),r("h2",{children:"Badge Borders"}),s("p",{children:["Use any of the ",r(Fd,{})," utility classes to modify the border width, radius or color stop."]}),r(_,{html:i_,language:"html",caption:"Badge Borders",expand:!0}),r("h2",{children:"Badge Tags"}),s("p",{children:["Add the ",r("code",{children:"tag"})," class to make the badge look like tag."]}),r(_,{html:s_,language:"html",caption:"Badge Tags",expand:!0})]}),c_=Object.freeze(Object.defineProperty({__proto__:null,default:d_},Symbol.toStringTag,{value:"Module"})),u_=`<div class="grid-1 gap-4">
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
`,h_=`<div class="grid-1 gap-4">
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
</div>`,p_=`<div class="grid-1 gap-4">
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
</div>`,f_=`<div class="grid-1 gap-4">
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
</div>`,m_=`<style>
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
`,g_=`<details class="no-icon">
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
`,v_=`<div class="accordion">
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
`,b_=`<details class="border lined" open>
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
`,y_=`<div class="details lined border open">
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
</div>`,w_=`<div class="accordion">
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
`,x_=()=>{const[e,n]=D.useState({body:!0});return s("div",{className:"example grid-2 gap-8 stack-desktop",children:[r(C_,{options:e,setOption:l=>o=>n(i=>({...i,[l]:o})),toggleOption:l=>()=>n(o=>({...o,[l]:!o[l]}))}),s("div",{children:[r("h3",{className:"mar-b-2",children:"Output"}),r("div",{className:"output",children:r(k_,{options:e})})]})]})},C_=({options:e,toggleOption:n,setOption:t})=>{const a=n("border"),l=n("shaded"),o=n("lined"),i=t("size"),d=t("color"),u=t("radius"),p=t("shadow"),g=t("borderWidth"),C=`<details class="${Dg(e)}">
  ...
</details>`;return s("div",{children:[r("h3",{className:"mar-b-2",children:"Options"}),s("div",{className:"grid-3 gap-4 stack-tablet top",children:[r(Nn,{checked:e.lined,toggle:o,label:"Lined"}),r(Nn,{checked:e.shaded,toggle:l,label:"Shaded"})]}),s("div",{className:"grid-3 gap-4 stack-tablet top mar-t-4",children:[r(Nn,{checked:e.border,toggle:a,label:"Border"}),r(Fg,{borderWidth:e.borderWidth,setBorderWidth:g}),r(Yp,{radius:e.radius,setRadius:u})]}),s("div",{className:"grid-3 gap-4 stack-tablet mar-t-4",children:[r(Gp,{color:e.color,setColor:d}),r(Vp,{size:e.size,setSize:i}),r(Og,{radius:e.shadow,setShadow:p})]}),r("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),r(Ie,{code:C,language:"html",expand:!0})]})},Dg=e=>Si([e.color,e.size,e.lined&&"lined",e.shaded&&"shaded",e.border&&"border",e.radius&&`bdr-${e.radius}`,e.shadow&&`shadow-${e.shadow}`,e.borderWidth&&`bdw-${e.borderWidth}`]),k_=({options:e})=>{const n=Dg(e);return s("details",{className:n,children:[r("summary",{children:"This is a demo details widget - click to reveal"}),r("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r("p",{children:"I really think you're just making a much too big thing out of it."}),r("p",{children:"Making a big thing out of it would've been a good idea."})]})},S_=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Details"}),s("p",{children:["The ",r("code",{children:"details"})," HTML element can be used to create a disclosure widget."]}),r("h2",{children:"Demo"}),r("p",{children:"Select the options to determine how the details widget is displayed."}),r(x_,{}),r("h2",{children:"Default Style"}),s("p",{children:["The default style will be applied without the need for any special CSS classes.  You can add any of the utility classes (e.g. the size classes like ",r("code",{children:"small"}),", ",r("code",{children:"large"}),", etc.) to change the basic appearance of either the whole widget, the summary, or any of the content elements."]}),r(_,{html:u_,language:"html",caption:"Default Style"}),r("h2",{children:"Border Style"}),s("p",{children:["Add the ",r("code",{children:"border"})," class to add a border.  The usual"," ",r("code",{children:"bdr-N"})," classes can be added to set the border radius"," ","and ",r("code",{children:"bdw-N"})," to set the border width."]}),s("p",{children:["The ",r("code",{children:"bdc-N"})," classes can be used to set the border color stop, and ",r("code",{children:"bdd-N"})," classes for the border color stop in dark mode."]}),r(_,{html:h_,language:"html",caption:"Details With Borders"}),r("h2",{children:"Lined Style"}),s("p",{children:["The ",r("code",{children:"lined"})," class can be added to put an additional border line between the summary header and body content."]}),r(_,{html:p_,language:"html",caption:"Details With Borders"}),r("h2",{children:"Shaded Style"}),s("p",{children:["Add the ",r("code",{children:"shaded"})," class to shade the background colors. You can add any of the color classes to change the color palette."]}),r(_,{html:f_,language:"html",caption:"Shaded Details"}),r("h2",{children:"No Icon"}),s("p",{children:["Add the ",r("code",{children:"no-icon"})," class if you don't want the default icon.  This applies to both native ",r("code",{children:"details"})," elements (like the first two examples below) and also ",r("code",{children:"div.details"})," element (like the third example, which is non-interactive)."]}),r(_,{html:g_,language:"html",caption:"no-icon"}),r("h2",{children:"Custom Styling"}),r("p",{children:"There are a number of CSS variables that you can set to change the styling."}),r(_,{html:m_,language:"html",caption:"Custom Styling"}),r("h2",{children:"Accordion"}),s("p",{children:["You can wrap a number of ",r("code",{children:"details"})," elements in a container with the ",r("code",{children:"accordion"})," class.  This applies some additional styling rules to remove redundant lines between successive elements. It will also remove any border radii except on the first and last elements."]}),r(_,{html:v_,language:"html",caption:"Accordion"}),r("h2",{children:"Layout Issues"}),s("p",{children:["I've noticed some strange layout problems.  Content inside the details body seems to get confused about how wide 100% is.  I suspect (but don't know for certain at this time) that this is because the browser is using a shadow DOM to render the details element. The example below shows demonstrates the problem. There's also a ",r("a",{href:"https://codepen.io/abw-the-bashful/pen/jORQNZM",children:"a codepen here"})," ","which demonstrates it in isolation."]}),r(_,{html:b_,language:"html",caption:"Layout problems"}),s("p",{children:["To sidestep this problem, there are also CSS classes for applying the details styles to other elements so you can build your own details widget.  Add the ",r("code",{children:"details"})," class to a container element and ",r("code",{children:"summary"})," to an immediate child element.  The"," ",r("code",{children:"open"})," class should be added to the container to indicate that it's open."]}),r("p",{children:"Note that the example shown here aren't interactive so click on them won't have any effect."}),r(_,{html:y_,language:"html",caption:"Alternate classes"}),s("p",{children:["This also applies to elements in an ",r("code",{children:"accordion"})," container. Note that the example below isn't interactive."]}),r(_,{html:w_,language:"html",caption:"Accordion classes"})]}),T_=Object.freeze(Object.defineProperty({__proto__:null,default:S_},Symbol.toStringTag,{value:"Module"})),Dd=({open:e,close:n,className:t,children:a})=>{const l=D.useRef(null);return D.useEffect(()=>{const{current:o}=l;e?o.showModal():o.close()},[e]),s("dialog",{ref:l,className:t,children:[!!n&&r("div",{className:"close",onClick:n,children:r(Dl,{name:"cross"})}),a]})},L_=()=>{const[e,n]=D.useState(!1);return s("div",{className:"output",children:[r("button",{onClick:()=>n(!0),className:"blue",children:"Show Dialog"}),s(Dd,{open:e,close:()=>n(!1),children:[r("h1",{className:"mar-v-4",children:"Hello World!"}),r("p",{children:"This is a dialog."})]})]})},__=()=>{const[e,n]=D.useState(!1);return s("div",{className:"output",children:[r("button",{onClick:()=>n(!0),className:"blue",children:"Show Tall Dialog"}),s(Dd,{open:e,close:()=>n(!1),children:[r("h1",{className:"mar-b-4",children:"Tall Dialog"}),s("div",{className:"mobile block-center",children:[r("p",{children:"David. David. David. Wait, please, wait a minute. Have you any idea what it will costs to dress up the band as animals? Oh, it don't cost nothing. It really doesn't. They're not animals, they're signs of the zodiac. They're animals. It's a way to fight the drabs. You know we've got the drabs. Well that's true. I think mine would look good - better in dubly. If it was done in dubly."}),r("p",{children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion. Well let's hear yours. Let's hear your suggestion. Stonehenge! Stonehenge. It's the best production value we've ever had on stage. But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't... Not yet we don't. Let's start... Please, please just a moment. Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this... I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore. I know, so we build a new one. And this is it, look! Consider... consider it done. So you're just going to take care of it like that. You're going to find someone to design it... using that as a plan? Let's try. Let's try. If you can do it, I'll do the number."}),r("p",{children:`This looks actually perfect. I mean it's, uh, the right proportions. It'll be this color right? Yeah. That's... that's... that's just terrific. It almost looks like the real thing. When we get the actual, uh, set, when we get the piece, it'll... it'll follow exactly these specifications. I mean even these contours and everything? Um, I'm not understanding it. What do you mean "the actual piece?" Well I mean... I mean when you build the actual piece... But this is what you asked for, isn't it? What? Well this is the piece. This is the piece? Yes. Are you telling me that this is it? This is scenery? Have you ever been to Stonehenge? No, I haven't been to Stonehenge. The triptychs are... the triptychs are twenty feet high. You can stand four men up them! Ian, I was... I was... I was supposed to build it eighteen inches high. This is insane. This isn't a piece of scenery. Look, look. Look, this is what I was asked to build. Eighteen inches. Right here, it specified eighteen inches. I was given this napkin, I mean... Forget this! Fuck the napkin!!!`}),r("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object. I really think you're just making a much too big thing out of it. Making a big thing out of it would've been a good idea. Nigel gave me a drawing that said eighteen inches. Alright? I know he did, and that's what I'm talking about. Now, whether he knows the difference between feet and inches is not my problem. I do what I'm told. But you're not as confused as him are you? I mean it's not your job to be as confused as Nigel is."}),r("p",{children:"It's my job to do what I'm asked to do by the creative element of this band. And that's what I did. C'mon... The audience were laughing. So it became a comedy number. Yes it did! Yes it fucking well did, and it was not pleasant to be part of the comedy on stage. Backstage, perhaps, it was very amusing."}),r("p",{children:"Maybe we just fix the choreography. Keep the dwarf clear. What do you mean? So they won't trod upon it."})]})]})]})},N_=()=>{const[e,n]=D.useState(!1);return s("div",{className:"output",children:[r("button",{onClick:()=>n(!0),className:"blue",children:"Show Wide Dialog"}),s(Dd,{open:e,close:()=>n(!1),children:[r("h1",{className:"mar-b-4",children:"Wide Dialog"}),r("p",{children:"David. David. David. Wait, please, wait a minute. Have you any idea what it will costs to dress up the band as animals? Oh, it don't cost nothing. It really doesn't. They're not animals, they're signs of the zodiac. They're animals. It's a way to fight the drabs. You know we've got the drabs. Well that's true. I think mine would look good - better in dubly. If it was done in dubly."}),r("p",{children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion. Well let's hear yours. Let's hear your suggestion. Stonehenge! Stonehenge. It's the best production value we've ever had on stage. But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't... Not yet we don't. Let's start... Please, please just a moment. Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this... I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore. I know, so we build a new one. And this is it, look! Consider... consider it done. So you're just going to take care of it like that. You're going to find someone to design it... using that as a plan? Let's try. Let's try. If you can do it, I'll do the number."}),r("p",{children:`This looks actually perfect. I mean it's, uh, the right proportions. It'll be this color right? Yeah. That's... that's... that's just terrific. It almost looks like the real thing. When we get the actual, uh, set, when we get the piece, it'll... it'll follow exactly these specifications. I mean even these contours and everything? Um, I'm not understanding it. What do you mean "the actual piece?" Well I mean... I mean when you build the actual piece... But this is what you asked for, isn't it? What? Well this is the piece. This is the piece? Yes. Are you telling me that this is it? This is scenery? Have you ever been to Stonehenge? No, I haven't been to Stonehenge. The triptychs are... the triptychs are twenty feet high. You can stand four men up them! Ian, I was... I was... I was supposed to build it eighteen inches high. This is insane. This isn't a piece of scenery. Look, look. Look, this is what I was asked to build. Eighteen inches. Right here, it specified eighteen inches. I was given this napkin, I mean... Forget this! Fuck the napkin!!!`}),r("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object. I really think you're just making a much too big thing out of it. Making a big thing out of it would've been a good idea. Nigel gave me a drawing that said eighteen inches. Alright? I know he did, and that's what I'm talking about. Now, whether he knows the difference between feet and inches is not my problem. I do what I'm told. But you're not as confused as him are you? I mean it's not your job to be as confused as Nigel is."}),r("p",{children:"It's my job to do what I'm asked to do by the creative element of this band. And that's what I did. C'mon... The audience were laughing. So it became a comedy number. Yes it did! Yes it fucking well did, and it was not pleasant to be part of the comedy on stage. Backstage, perhaps, it was very amusing."}),r("p",{children:"Maybe we just fix the choreography. Keep the dwarf clear. What do you mean? So they won't trod upon it."})]})]})},$_=()=>{const[e,n]=D.useState(!1),t=()=>n(!1);return s("div",{className:"output",children:[r("button",{onClick:()=>n(!0),className:"blue",children:"Show Dialog Article"}),r(Dd,{open:e,children:s("article",{children:[r("header",{children:r("h3",{children:"User Login"})}),s("form",{className:"width-20rem",children:[s("div",{className:"field wide",children:[r("label",{children:"Email Address"}),r("input",{name:"email",className:"wide"})]}),s("div",{className:"field mar-b-8",children:[r("label",{children:"Password"}),r("input",{name:"password",type:"password",className:"wide"})]})]}),s("footer",{className:"text-right",children:[r("button",{className:"grey outline",onClick:t,children:"Cancel"}),r("button",{className:"blue mar-l-4",onClick:t,children:"Login"})]})]})})]})},I_=`<dialog open>
  <div className="close" onClick={yourCloseHandler}>
    <Icon name="cross"/>
  </div>
  <h1>Hello World!</h1>
  <p>
    This is a dialog.
  </p>
</dialog>`,E_=`<dialog open>
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
`,M_=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Dialog"}),s("p",{children:["Some default styling is provided for the ",r("code",{children:"dialog"})," element which can be used to display modals."]}),r("h2",{children:"Close Button"}),s("p",{children:["A child element with the ",r("code",{children:"close"})," CSS class can be used to create a close button."]}),s(ae,{children:[r(Ie,{code:I_,caption:"Dialog",language:"html",className:"mar-b-8",expand:!0}),r(L_,{})]}),s("p",{children:["The ",r("code",{children:"$dialog-max-width"})," SASS variable defaults to"," ",r("code",{children:"80vw"})," and is set as the ",r("code",{children:"--max-width"})," CSS variable in the scope of a ",r("code",{children:"dialog"})," element. Similarly the ",r("code",{children:"$dialog-max-height"})," SASS variable defaults to"," ",r("code",{children:"90vh"})," and is set as the ",r("code",{children:"--max-height"})," CSS variable."]}),r("p",{children:"In general, you can constrain the width of the content and the dialog which size appropriately."}),s(ae,{children:[r(N_,{}),r(__,{})]}),r("h2",{children:"Header and Footer"}),s("p",{children:["You can add ",r("code",{children:"header"})," and ",r("code",{children:"footer"})," elements to a dialog.  To be semantically correct, you should enclose them in an"," ",r("code",{children:"article"})," element."]}),s(ae,{children:[r(Ie,{code:E_,caption:"Header and Footer",language:"html",className:"mar-b-8",expand:!0}),r($_,{})]})]}),A_=Object.freeze(Object.defineProperty({__proto__:null,default:M_},Symbol.toStringTag,{value:"Module"})),R_=`<svg
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
  aria-hidden="true" focusable="false" role="img"
  class="icon"
>
  <path
    d="M64,268L184,388L448,124"
    style="fill:none;stroke:currentColor;stroke-width:65"
  />
</svg>
Check!`,P_=`<div class="small">
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
</div>`,O_=`<div class="red fgc-50 large">
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
</div>`,F_=`<svg
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
`,B_=`<svg
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
`,D_=`<div class="larger">
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
`,j_=`<svg
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
`,z_=`<svg
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

`,W_=()=>s("div",{className:"flow prose",children:[r("h1",{children:"Icons"}),s("p",{children:["Some basic styles are included for SVG icons. Add the ",r("code",{children:"icon"})," ","class to an inline SVG image to use them."]}),r(_,{html:R_,language:"html",caption:"Icon"}),r("h2",{children:"Sizing"}),r("p",{children:"Icons are sized in em units meaning they scale with text in different sizes."}),r(_,{html:P_,language:"html",caption:"Icon Sizes"}),r("h2",{children:"Fill and Stroke Colors"}),s("p",{children:["SVG icons can use ",r("code",{children:"currentColor"})," for either the"," ",r("code",{children:"fill"})," or ",r("code",{children:"stroke"})," properties to inherit the current text color."]}),r(_,{html:O_,language:"html",caption:"Icon Colors"}),s(ae,{align:"bottom",children:[s("div",{children:[s("p",{children:["SVG elements can use the ",r("code",{children:"fill-fg"})," and ",r("code",{children:"fill-bg"})," ","classes to set the fill color to the current foreground or background colors respectively.  Similarly the ",r("code",{children:"stroke-fg"})," and"," ",r("code",{children:"stroke-bg"})," will set the stroke color to the foreground or"," ","background color."]}),s("p",{children:["These CSS rules are scoped to all ",r("code",{children:"svg"})," elements rather",r("code",{children:"svg.icon"})," specifically.  So you can use them in any SVG images, not just icons."]})]}),s(Kr,{children:["CSS styles can only be applied to inline SVG elements.  They don't work for SVG images loaded using the ",r("code",{children:"img"})," ","tag or applied using a ",r("code",{children:"background-image"})," style."]})]}),r(_,{html:B_,language:"html",caption:"Icon Style"}),s("p",{children:["You can also use the ",r("code",{children:"flc-N"})," and ",r("code",{children:"stc-N"})," classes to set the fill color or stroke color of an SVG element to a stop in the current palette.  The ",r("code",{children:"fld-N"})," and ",r("code",{children:"std-N"})," classes allow you to set different fill or stroke color stops for dark mode."]}),r(_,{html:F_,language:"html",caption:"Icon Style"}),r("h2",{children:"Custom Styling"}),s("p",{children:["You can define your own styles to target different elements in an SVG icon.  This example illustrated the use of generic"," ",r("code",{children:"--color-N"})," variables to set the fill and stroke styles on elements in an icon.  The only thing that's determining the color range is the ",r("code",{children:"blue"})," class on the ",r("code",{children:"svg"})," ","element.  Change that to the name of any other color range and the styles will work equally well."]}),s("p",{children:["Also note the use of the"," ",r("code",{children:"--unfilled"})," custom property which sets the background color for the unchecked checkbox.  This allows us to set different color stops for use in light and dark themes."]}),r(_,{html:D_,language:"html",caption:"Icon Style"}),r("h2",{children:"Animation Effects"}),s(ae,{align:"end",children:[s("div",{children:[s("p",{children:["The ",r("code",{children:"spin"})," CSS class will make the icon spin.  Ideal for spinners!  Add the ",r("code",{children:"reverse"})," class to reverse the direction."]}),s("p",{children:["The default animation time is 2s.  You can add the ",r("code",{children:"fast"})," CSS class to double the speed (animation time is 1s) or ",r("code",{children:"slow"})," to halve it (animation time is 4s).  Or you can set the"," ",r("code",{children:"--icon-animation-time"})," property to anything you like."]})]}),s(Kr,{children:["These animations are disabled if the user's browser has the ",r("code",{children:"prefers-reduced-motion"})," option set to ",r("code",{children:"reduce"}),"."]})]}),r(_,{html:j_,language:"html",caption:"Icon Spin"}),r(ae,{align:"end",children:s("div",{children:[s("p",{children:["The ",r("code",{children:"beat"})," CSS class will make the icon beat."]}),s("p",{children:["The default animation time here is 1s.  The ",r("code",{children:"fast"})," class doubles the speed (animation time is 0.5s) and the ",r("code",{children:"slow"})," class halves it (animation speed is 2s)."]})]})}),r(_,{html:z_,language:"html",caption:"Icon Beat"})]}),U_=Object.freeze(Object.defineProperty({__proto__:null,default:W_},Symbol.toStringTag,{value:"Module"})),H_=`<div class="menu">
  <div class="item">
    Item One
  </div>
  <div class="item">
    Item Two
  </div>
  <div class="item">
    Item Three
  </div>
</div>`,G_=`<div class="menu lined">
  <div class="item">
    Item One
  </div>
  <div class="item">
    Item Two
  </div>
  <div class="item">
    Item Three
  </div>
</div>`,V_=`<div class="menu border">
  <div class="item">
    Item One
  </div>
  <div class="item">
    Item Two
  </div>
  <div class="item">
    Item Three
  </div>
</div>`,Y_=`<div class="menu border">
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
</div>`,Z_=`<div class="menu border bdr-2">
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
</div>`,q_=`<div class="menu border bdr-2">
  <div class="item disabled">
    Disabled Item One
  </div>
  <div class="item" aria-disabled="true">
    Disabled Item Two
  </div>
</div>
`,K_=`<div class="menu border bdr-2">
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
`,Q_=`<div class="menu border bdr-2">
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
`,X_=`<div class="menu border bdr-2">
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
`,J_=`<div class="menu border bdr-2">
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
`,eN=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Menu"}),s("p",{children:["To render a simple vertical menu, add the ",r("code",{children:"menu"})," class to a container and ",r("code",{children:"item"})," to each child item."]}),r(_,{html:H_,language:"html",caption:"Menu"}),r("h2",{children:"Lined Style"}),s("p",{children:["The ",r("code",{children:"lined"})," class can be added to put a line between each item."]}),r(_,{html:G_,language:"html",caption:"Lined"}),r("h2",{children:"Border Style"}),s("p",{children:["The ",r("code",{children:"border"})," class can be added to put a border around the menu and lines between each item."]}),r(_,{html:V_,language:"html",caption:"Border"}),s("p",{children:["You can add any of the other ",r(Fd,{})," utility classes to control the border width, radius, color, etc."]}),r(_,{html:Z_,language:"html",caption:"Border Style"}),r("h2",{children:"Colors"}),r("p",{children:"Note that the hover/active color is set on child elements to prevent colored text becoming unreadable when an item is active.  Inverse colors, buttons and badges will have their backgrounds set to a pale variant of the background color."}),r(_,{html:Y_,language:"html",caption:"Colors"}),r("h2",{children:"Disabled Items"}),s("p",{children:["You can add the ",r("code",{children:"disabled"})," CSS class or set the"," ",r("code",{children:"aria-disabled"})," attribute to ",r("code",{children:"true"})," to disable an option in the menu."]}),r(_,{html:q_,language:"html",caption:"Disabled Items"}),r("h2",{children:"No Hover Items"}),s("p",{children:["You can add the ",r("code",{children:"no-hover"})," CSS class if you want to disable the styling for hovered items."]}),r(_,{html:K_,language:"html",caption:"No Hover Items"}),r("h2",{children:"Active Item"}),s("p",{children:["You can add the ",r("code",{children:"active"})," CSS class to indicate an active item.  This would typically be used in conjunction with"," ",r("code",{children:"no-hover"})," when you're implementing a UI component where the active element is determine by other means (e.g. mouseEnter events, keyboard control, etc)."]}),r(_,{html:Q_,language:"html",caption:"Active Item"}),r("h2",{children:"Heading Item"}),s("p",{children:["You can add the ",r("code",{children:"heading"})," CSS class to an item to denote it as a heading."]}),r(_,{html:X_,language:"html",caption:"Heading Item"}),r("h2",{children:"Indented Items"}),s("p",{children:["You can add the ",r("code",{children:"indent-N"})," CSS class to an item to indent it. The value for ",r("code",{children:"N"})," can be 1 to 4."]}),r(_,{html:J_,language:"html",caption:"Indented Items"}),r("h2",{children:"Styling"}),s("p",{children:["The ",r("code",{children:"$selectable-color"})," SASS variable can be used to set the color range used to indicate selectable items.  The default value is ",r("code",{children:'"brand"'})]}),s("p",{children:["You can also set the ",r("code",{children:"--selectable-color"})," and"," ",r("code",{children:"--selectable-background"})," CSS custom properties to change the foreground and background colors respectively.  The default value for ",r("code",{children:"--selectable-color"})," is ",r("code",{children:"var(--brand-100)"})," ","and for ",r("code",{children:"--selectable-background"})," is ",r("code",{children:"var(--brand-50)"})," when using a light theme and ",r("code",{children:"var(--brand-40)"})," for the dark theme."]})]}),nN=Object.freeze(Object.defineProperty({__proto__:null,default:eN},Symbol.toStringTag,{value:"Module"})),tN=`<div class="relative">
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
</div>`,rN=`<div class="overlay fixed flex center middle">
  I do not, for one, think that the problem was that the
  band was down. I think that the problem may have been...
  that there was a Stonehenge monument on the stage that
  was in danger of being crushed by a dwarf. Alright? That
  tended to understate the hugeness of the object.
</div>
`,aN=`<div class="light overlay flex center middle larger pad-8">
  Maybe we just fix the choreography.
  Keep the dwarf clear. So they won&apos;t
  trod upon it.
</div>`,lN=`<div class="dark overlay flex center middle larger pad-8">
  Maybe we just fix the choreography.
  Keep the dwarf clear. So they won&apos;t
  trod upon it.
</div>`,oN=({className:e,title:n="Show Overlay"})=>{const[t,a]=D.useState(!1),l=()=>a(!0),o=()=>a(!1);return t?r("div",{className:`overlay fixed flex center middle ${e}`,children:s("div",{className:"max-width-40rem",children:[r("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r("button",{onClick:o,className:"red",children:"Hide Overlay"})]})}):r("div",{children:r("button",{onClick:l,className:"green",children:n})})},w0=({className:e,title:n="Show Overlay"})=>{const[t,a]=D.useState(!1),l=()=>a(!0),o=()=>a(!1);return t?r("div",{className:`overlay fixed flex center middle ${e}`,children:s("div",{className:"max-width-40rem",children:[r("p",{className:"larger",children:"Maybe we just fix the choreography. Keep the dwarf clear. So they won't trod upon it."}),r("button",{onClick:o,className:"red",children:"Hide Overlay"})]})}):r("div",{children:r("button",{onClick:l,className:"green",children:n})})},iN=()=>{const[e,n]=D.useState(!1);return s("div",{className:"relative pad-6 border",children:[e&&r("div",{className:"overlay flex middle center pad-8",children:s("div",{children:[r("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r("button",{onClick:()=>n(!1),className:"red",children:"Hide Overlay"})]})}),r("p",{className:"mar-t-none",children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion."}),r("p",{children:"Well let's hear yours. Let's hear your suggestion."}),r("p",{children:"Stonehenge! It's the best production value we've ever had on stage."}),r("p",{children:"But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't..."}),r("p",{children:"Not yet we don't. Let's start... Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this..."}),r("p",{children:"I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore."}),r("p",{children:"I know, so we build a new one. And this is it, look!"}),r("button",{onClick:()=>n(!0),className:"green",children:"Show Overlay"})]})},sN=()=>s("div",{className:"prose",children:[r("h1",{children:"Overlay"}),s("p",{children:["Add the ",r("code",{children:"overlay"})," class to an element to make it an overlay. The default positioning is ",r("code",{children:"absolute"})," so it will fill to cover the nearest parent that has positioning set to ",r("code",{children:"relative"}),"."]}),s(ae,{children:[r(Ie,{code:tN,language:"html",caption:"Overlay"}),r("div",{className:"output",children:r(iN,{})})]}),r("h2",{children:"Fixed Viewport"}),s("p",{children:["Add the ",r("code",{children:"fixed"})," class to set the overlay position to"," ",r("code",{children:"fixed"})," so that it covers the entire viewport."]}),s(ae,{children:[r(Ie,{code:rN,caption:"Fixed",language:"html",className:"mar-b-8"}),r("div",{className:"output",children:r(oN,{})})]}),r("h2",{children:"Light and Dark"}),s("p",{children:["The default overlay color is white for a light theme and black for a dark theme.  You can explicitly add the ",r("code",{children:"light"})," or"," ",r("code",{children:"dark"})," CSS class if you want a particular color overlay regardless of the theme."]}),s(ae,{children:[r(Ie,{code:aN,language:"html",caption:"Light Overlay"}),r("div",{className:"output",children:r(w0,{className:"light",title:"Show Light Overlay"})})]}),s(ae,{align:"mar-t-8",children:[r(Ie,{code:lN,language:"html",caption:"Dark Overlay"}),r("div",{className:"output",children:r(w0,{className:"dark",title:"Show Dark Overlay"})})]})]}),dN=Object.freeze(Object.defineProperty({__proto__:null,default:sN},Symbol.toStringTag,{value:"Module"})),cN=()=>{const[e,n]=D.useState({head1:!0,body:!0,foot1:!0,celled:!0,shaded:!0,striped:!0});return s("div",{className:"example grid-2 gap-8 stack-desktop",children:[r(uN,{options:e,setOption:l=>o=>n(i=>({...i,[l]:o})),toggleOption:l=>()=>n(o=>({...o,[l]:!o[l]}))}),s("div",{children:[r("h3",{className:"mar-b-2",children:"Output"}),r("div",{className:"output",children:r(hN,{options:e})})]})]})},uN=({options:e,toggleOption:n,setOption:t})=>{const a=n("head1"),l=n("head2"),o=n("body"),i=n("foot1"),d=n("foot2"),u=n("wide"),p=n("celled"),g=n("shaded"),y=n("lined"),C=n("striped"),E=t("size"),I=t("color"),k=t("radius"),w=`<table class="${Ig(e,"wide celled shaded lined striped",e.color,e.size,e.radius&&`bdr-${e.radius}`)}">
  ...
</table>`;return s("div",{children:[r("h3",{className:"mar-b-2",children:"Options"}),s("div",{className:"grid-4 gap-4 top stack-tablet",children:[r(Nn,{checked:e.wide,toggle:u,label:"Wide"}),r(Gp,{color:e.color,setColor:I}),r(Vp,{size:e.size,setSize:E}),r(Yp,{radius:e.radius,setRadius:k}),r(Nn,{checked:e.lined,toggle:y,label:"Lined"}),r(Nn,{checked:e.celled,toggle:p,label:"Celled"}),r(Nn,{checked:e.shaded,toggle:g,label:"Shaded"}),r(Nn,{checked:e.striped,toggle:C,label:"Striped"})]}),s("div",{className:"grid-3 gap-4 stack-tablet mar-t-4",children:[r(Nn,{checked:e.head1,toggle:a,label:"Header"}),r(Nn,{checked:e.body,toggle:o,label:"Body"}),r(Nn,{checked:e.foot1,toggle:i,label:"Footer"})]}),s("div",{className:"grid-2 gap-4 stack-tablet mar-t-4",children:[r(Nn,{checked:e.head2,toggle:l,label:"Pre-header"}),r(Nn,{checked:e.foot2,toggle:d,label:"Post-footer"})]}),r("div",{className:"grid-5 gap-4 stack-tablet mar-t-4"}),r("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),r(Ie,{code:w,language:"html",expand:!0})]})},hN=({options:e})=>{const n=$g(e,{},e.color,e.size,e.radius&&`bdr-${e.radius}`);return s("table",{className:n,children:[(e.head1||e.head2)&&s("thead",{children:[e.head2&&r("tr",{children:r("th",{colSpan:"3",className:"text-center",children:"Spinal Tap"})}),e.head1&&s("tr",{children:[r("th",{children:"Name"}),r("th",{children:"Instrument"}),r("th",{children:"Danger Level"})]})]}),e.body&&s("tbody",{children:[s("tr",{children:[r("td",{children:"Nigel"}),r("td",{children:"Tufnel"}),r("td",{children:"Guitar"})]}),s("tr",{children:[r("td",{children:"David"}),r("td",{children:"St.Hubbins"}),r("td",{children:"Guitar"})]}),s("tr",{children:[r("td",{children:"Derek"}),r("td",{children:"Smalls"}),r("td",{children:"Bass"})]}),s("tr",{children:[r("td",{children:"Viv"}),r("td",{children:"Savage"}),r("td",{children:"Keyboards"})]}),s("tr",{children:[r("td",{children:"Mick"}),r("td",{children:"Shrimpton"}),r("td",{children:"Drums"})]})]}),(e.foot1||e.foot2)&&s("tfoot",{children:[e.foot1&&s("tr",{children:[r("th",{colSpan:"2",className:"text-right",children:"Total"}),r("th",{children:"5"})]}),e.foot2&&r("tr",{children:r("th",{colSpan:"3",className:"text-center",children:"Tap into America!"})})]})]})},pN=`<table>
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
</table>`,fN=`<table class="celled">
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
</table>`,mN=`<table class="shaded">
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
</table>`,gN=`<table class="lined">
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
</table>`,vN=`<table class="striped">
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
</table>`,bN=`<table class="shaded celled">
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
</table>`,yN=`<table class="compressed celled lined striped">
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
</table>`,wN=`<table class="expanded celled lined striped">
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
</table>`,xN=`<table class="brand striped celled">
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
</table>`,CN=`<table class="shaded lined wide">
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
</table>`,kN=`<table class="celled shaded selectable">
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
</table>`,SN=`<div class="flex top wrap gap-4">
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
</div>`,TN=()=>s("div",{className:"prose",children:[r("h1",{children:"Tables"}),r("p",{children:"Badger CSS contains some basic table styling by default and a number of additional classes you can add to snazz things up."}),r("h2",{children:"Demo"}),r("p",{children:"Select the options to determine how the table is displayed."}),r(cN,{}),r("h2",{children:"Default Table"}),r("p",{children:"The default table style is plain."}),r(_,{html:pN,language:"html",caption:"Table"}),r("h2",{children:"Lined Table"}),s("p",{children:["Add the ",r("code",{children:"lined"})," class to add borders between lines."]}),r(_,{html:gN,language:"html",caption:"Lined Table"}),r("h2",{children:"Celled Table"}),s("p",{children:["Add the ",r("code",{children:"celled"})," class to add cell borders."]}),r(_,{html:fN,language:"html",caption:"Celled Table"}),r("h2",{children:"Shaded Table"}),s("p",{children:["Add the ",r("code",{children:"shaded"})," class to add background colors."]}),r(_,{html:mN,language:"html",caption:"Shaded Table"}),r("h2",{children:"Striped Table"}),s("p",{children:["Add the ",r("code",{children:"striped"})," class to add alternate background colors for rows."]}),r(_,{html:vN,language:"html",caption:"Striped Table"}),r("h2",{children:"Heading Cells"}),s("p",{children:["This example shows ",r("code",{children:"th"})," elements in a row."]}),r(_,{html:bN,language:"html",caption:"Row Headings"}),r("h2",{children:"Compressed Table"}),s("p",{children:["Add the ",r("code",{children:"compresses"})," class to reduce the padding."]}),r(_,{html:yN,language:"html",caption:"Compressed Table"}),r("h2",{children:"Expanded Table"}),s("p",{children:["Add the ",r("code",{children:"expanded"})," class to increase the padding."]}),r(_,{html:wN,language:"html",caption:"Expanded Table"}),r("h2",{children:"Colored Table"}),r("p",{children:"Add color classes to change the base color."}),r(_,{html:xN,language:"html",caption:"Colored Table"}),r("h2",{children:"Colored Rows"}),r("p",{children:"Add color classes to rows to get different background colors."}),r(_,{html:CN,language:"html",caption:"Colored Rows"}),r("h2",{children:"Selectable Rows"}),s("p",{children:["Add the ",r("code",{children:"selectable"})," class to make the rows appear selectable. This uses the same colours as ",r(FT,{})," which can be changed using the ",r("code",{children:"$selectable-color"})," SASS variable or the ",r("code",{children:"--selectable-color"})," and ",r("code",{children:"--selectable-background"})," ","CSS custom properties."]}),r(_,{html:kN,language:"html",caption:"Selectable Rows"}),r("h2",{children:"Customised Table"}),r("p",{children:"You can customise tables using CSS properties."}),r(_,{html:SN,language:"html",caption:"Rounded Table"})]}),LN=Object.freeze(Object.defineProperty({__proto__:null,default:TN},Symbol.toStringTag,{value:"Module"})),_N=`<div class="tabset">
  <ul class="tabs">
    <li>One</li>
    <li class="active">Two</li>
    <li>Three</li>
    <li class="disabled">Four</li>
  </ul>
</div>`,NN=`<div class="tabset lined">
  <ul class="tabs">
    <li>One</li>
    <li class="active">Two</li>
    <li>Three</li>
    <li class="disabled">Four</li>
  </ul>
</div>`,$N=`<div class="tabset brand solid lined">
  <ul class="tabs">
    <li>One</li>
    <li class="active">Two</li>
    <li>Three</li>
    <li class="disabled">Four</li>
  </ul>
</div>`,IN=`<div class="tabset brand solid lined center">
  <ul class="tabs">
    <li>One</li>
    <li class="active">Two</li>
    <li>Three</li>
  </ul>
</div>`,EN=`<div class="tabset brand solid lined right">
  <ul class="tabs">
    <li>One</li>
    <li class="active">Two</li>
    <li>Three</li>
  </ul>
</div>`,MN=`<div class="tabset brand solid lined" style="--tab-line-width: 3px">
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
</div>`,AN=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Tabs"}),s("p",{children:["Add the ",r("code",{children:"tabset"})," class to a container and then define a set of elements with the ",r("code",{children:"tab"})," class.  The"," ",r("code",{children:"disabled"})," class can be added to a tab to disable it."]}),r(_,{html:_N,language:"html",caption:"Tabs"}),r("h2",{children:"Lined"}),s("p",{children:["Add the ",r("code",{children:"lined"})," class to the ",r("code",{children:"tabset"})," to add a line under the tabs."]}),r(_,{html:NN,language:"html",caption:"Lined Tabs"}),r("h2",{children:"Solid"}),s("p",{children:["Add the ",r("code",{children:"solid"})," class to the ",r("code",{children:"tabset"})," for solid tabs."]}),r(_,{html:$N,language:"html",caption:"Solid Tabs"}),r("h2",{children:"Center"}),s("p",{children:["Add the ",r("code",{children:"center"})," class to the ",r("code",{children:"tabset"})," to align the tabs in the center."]}),r(_,{html:IN,language:"html",caption:"Center Tabs"}),r("h2",{children:"Right"}),s("p",{children:["Add the ",r("code",{children:"right"})," class to the ",r("code",{children:"tabset"})," to align the tabs to the right."]}),r(_,{html:EN,language:"html",caption:"Right Tabs"}),r("h2",{children:"Scroll"}),r("p",{children:"If there are too many tabs to be displayed then they will appear in a horizontally scrolling element."}),r(_,{html:MN,language:"html",caption:"Scrolling Tabs"})]}),RN=Object.freeze(Object.defineProperty({__proto__:null,default:AN},Symbol.toStringTag,{value:"Module"})),PN=`<button
  data-tooltip
  aria-label="This is a tooltip"
>
    Hover to see tooltip
</button>
`,ON=`<div class="flex space">
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
`,FN=`<div class="flex space">
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
</div>`,BN=`<button
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
`,DN=`<button data-tooltip>
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
`,jN=`<style>
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
</div>`,zN=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Tooltips"}),s("p",{children:["Add the ",r("code",{children:"data-tooltip"})," attribute to an element to enable a tooltip.  The tooltip text should be defined in the ",r("code",{children:"aria-label"})," ","property so that it's also accessible to screen readers."]}),r(_,{html:PN,language:"html",caption:"Tooltip"}),r("h2",{children:"Tooltip Position"}),s("p",{children:["You can set the ",r("code",{children:"data-tooltip"})," attribute to any of"," ",r("code",{children:"left"}),", ",r("code",{children:"right"}),", ",r("code",{children:"top"})," or"," ",r("code",{children:"bottom"})," to set the tooltip position."]}),r(_,{html:ON,language:"html",caption:"Tooltip Position"}),s("p",{children:["You can also combine them as "," ",r("code",{children:"top left"}),", ",r("code",{children:"top right"}),", ",r("code",{children:"bottom left"})," ","and ",r("code",{children:"bottom right"}),"."]}),r(_,{html:FN,language:"html",caption:"Tooltip Corners"}),r("h2",{children:"Wrapping"}),s("p",{children:["The tooltip has a minimum and maximum width set to keep things sensible. You can add the ",r("code",{children:"tt-wide"})," class if you want the tooltip to extend to the full width of the tooltip text."]}),s("p",{children:["You can add newlines to the ",r("code",{children:"aria-label"})," property if you want to force line breaks."]}),r(_,{html:BN,language:"html",caption:"Tooltip Wrapping"}),r("h2",{children:"Content"}),s("p",{children:["As an alternative to setting the ",r("code",{children:"aria-label"})," you can define the tooltip content in a child element with the"," ",r("code",{children:"tooltip"})," CSS class."]}),r(_,{html:DN,language:"html",caption:"Tooltip Content"}),r("h2",{children:"Custom Tooltip Style"}),r("p",{children:"There are a number of SCSS variables that can be used to set the defaults, or you can use CSS variables to create custom tooltip styles."}),r(_,{html:jN,language:"html",caption:"Custom Tooltips"})]}),WN=Object.freeze(Object.defineProperty({__proto__:null,default:zN},Symbol.toStringTag,{value:"Module"})),UN=`@import "helpers/all.scss";
@import "config/all.scss";
@import "color/palette.scss";
@import "utilities/all.scss";
@import "forms/all.scss";
@import "components/all.scss";
`,HN=`/* helpers/all.scss */
@import "functions.scss";
@import "mixins.scss";`,GN=`/* config/all.scss */
@import "namespaces.scss";
@import "units.scss";
`,VN=`/* utilities/all.scss */
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
@import "wrap.scss";
@import "responsive.scss";
`,YN=`/* forms/all.scss */
@import "config.scss";
@import "buttons.scss";
@import "input.scss";
@import "inputs.scss";
@import "select.scss";
@import "switches.scss";
@import "fields.scss";
@import "fieldset.scss";`,ZN=`/* components/all.scss */
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
`,qN=`@import "@abw/badger-css/styles/helpers/all.scss";
@import "@abw/badger-css/styles/config/all.scss";
@import "@abw/badger-css/styles/color/palette.scss";
@import "@abw/badger-css/styles/utilities/all.scss";
@import "@abw/badger-css/styles/forms/all.scss";
@import "@abw/badger-css/styles/components/all.scss";
`,x0={helpers:HN,config:GN,utilities:VN,forms:YN,components:ZN},KN=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Customising With Sass"}),s(ae,{children:[r("div",{children:s("p",{children:["This is what the main ",r("code",{children:"badger.scss"})," file looks like."]})}),r(Ie,{code:UN,caption:"badger.scss",language:"scss",expand:!0})]}),s("h2",{children:["Custom ",r("code",{children:"badger.scss"})]}),s(ae,{children:[s("div",{children:[s("p",{children:["You can create your own version of this file if you want to pick and choose which parts you want and don't want. You just need to prefix each file path with"," ",r("code",{children:"@abw/badger-css/styles"}),"."]}),s("p",{children:["For example, instead of",r("code",{children:'@import "helpers/all.scss";'})," you would write"," ",r("code",{children:'@import "@abw/badger-css/styles/helpers/all.scss";'}),"."]})]}),r(Ie,{code:qN,caption:"Custom badger.scss",language:"scss",expand:!0})]}),r("h2",{children:"Other Files"}),s("p",{children:["Each of the ",r("code",{children:"all.scss"})," file is an index which loads the other files in that directory.  The first two, ",r("code",{children:"helpers/all.scss"})," ","and ",r("code",{children:"config/all.scss"})," are mandatory.  They don't generate any output, but define variables and helper functions required by the other files."]}),s("p",{children:["The ",r("code",{children:"config/palette.scss"})," is a special case.  It's generated automatically from a palette configuration file.  You can create your own palette to replace the builtin palette if you want to.  You can read more about it on the ",r(_g,{})," page."]}),s("p",{children:["The remaining files are up for grabs.  For example, you can omit the"," ",r("code",{children:"forms/all.scss"})," if you're not interesting in the form styles, or the ",r("code",{children:"components/all.scss"})," if you don't want any of the components.  The ",r("code",{children:"utilities/all.scss"})," is also optional, although you might find that some of the components depend on utility classes contained therein."]}),r("p",{children:"Or you can create your own versions of those file to pick and choose which parts you want."}),r(QN,{})]}),QN=()=>{const[e,n]=D.useState("helpers");return s(ae,{children:[s("div",{children:[s("p",{children:["This is what the ",s("code",{children:[e,"/all.scss"]})," file looks like."]}),r("div",{className:"buttons mar-b-4",children:Object.keys(x0).map(t=>r("button",{onClick:()=>n(t),className:t===e?"brand":"grey outline",children:t},t))}),s("p",{children:["You can browse the source code for these files"," ",r("a",{href:"https://github.com/abw/badger-css/tree/master/styles",children:"on Github"}),"."]})]}),r(Ie,{code:x0[e],caption:`${e}/all.scss`,language:"scss",expand:!0})]})},XN=Object.freeze(Object.defineProperty({__proto__:null,default:KN},Symbol.toStringTag,{value:"Module"})),ma=(e="rem",n=.25)=>[0,1,2,3,4,6,8,10,12,16,20,24,28,32].reduce((t,a)=>({...t,[a]:{vars:{unit:`${a} unit${a==1?"":"s"} (${a*n}${e})`}}}),{}),C0=e=>({t:{vars:{sides:"the top"},more:ma(e)},r:{vars:{sides:"the right"},more:ma(e)},b:{vars:{sides:"the right"},more:ma(e)},l:{vars:{sides:"the left"},more:ma(e)},v:{vars:{sides:"the top and bottom (v = vertical)"},more:ma(e)},h:{vars:{sides:"the left and right (h = horizontal)"},more:ma(e)},...ma(e)}),k0=e=>[2,4,6,8,10,12,14,16,18,20,30,40,50,60,70,90,100].reduce((n,t)=>({...n,[`${t}rem`]:{description:()=>e(t)}}),{}),S0=e=>[2,4,6,8,10,12,14,16,18,20,30,40,50,60,70,90,100].reduce((n,t)=>({...n,[`${t*16}px`]:{description:()=>e(t*16)}}),{}),JN={mar:{vars:{unit:"1 unit (0.25rem)",sides:"all sides"},description:e=>`Add ${e.unit} margin to ${e.sides}`,more:C0("rem")},pad:{vars:{unit:"1 unit (0.25em)",sides:"all sides"},description:e=>`Add ${e.unit} margin to ${e.sides}`,more:C0("em")},width:{more:{...k0(e=>`Set width to ${e}rem (${e*16}px)`),...S0(e=>`Set width to ${e}px`)}},max:{more:{width:{more:{...k0(e=>`Set max-width to ${e}rem (${e*16}px)`),...S0(e=>`Set max-width to ${e}px`)}}}},text:{more:{left:{description:()=>"Align text to the left"},right:{description:()=>"Align text to the right"},center:{description:()=>"Align text to the center"}}},block:{more:{left:{description:()=>"Align block to the left"},right:{description:()=>"Align block to the right"},center:{description:()=>"Align block to the center"}}},display:{more:{inline:{description:()=>"Display element inline"},block:{description:()=>"Display element as a block"},"inline-block":{description:()=>"Display element as an inline block"}}},font:{more:{sans:{description:()=>"Use a sans-serif font"},serif:{description:()=>"Use a serif font"},system:{description:()=>"Use the system font"},mono:{description:()=>"Use a monospaced font"}}}},e$=e=>{const n=e.split("-");let t=[],a=[],l=[],o={},i=JN,d;for(;n.length;){const u=n.shift(),p=i[u];if(p)console.log(`matched ${u}`),d=p.description||d,p.vars&&(o={...o,...p.vars}),t.push(u),i=p.more||{},l=Object.keys(i);else{a.push(u);break}}return{good:t,rest:a,vars:o,next:l,description:d?d(o):null}},n$=e=>hg(e).filter(n=>!n.match(/^\s*$/)).map(e$),t$=()=>{const[e,n]=D.useState("");return s("div",{children:[r("h1",{children:"Class Decoder"}),r("p",{children:"Enter one or more Badger-CSS classes for an explanation."}),s("form",{className:"max-width-30rem",children:[s("div",{className:"field",children:[r("label",{children:"CSS Classes"}),r("input",{type:"text",className:"wide",value:e,onChange:t=>n(t.target.value)})]}),r("button",{type:"button",className:"reset grey button outline",onClick:()=>n(""),children:"Reset"})]}),r("div",{children:!!e.length&&r(r$,{input:e})})]})},r$=({input:e})=>{const n=n$(e);return console.log("results: ",n),r("table",{className:"celled border bdr-2 mar-t-4",children:r("tbody",{children:n.map((t,a)=>s("tr",{children:[s("td",{className:"font-mono bgc-95 bgd-10 split-4",children:[r("span",{className:"green fgc-50",children:t.good.join("-")}),!!t.rest.length&&s("span",{className:"red fgc-50",children:[!!t.good.length&&"-",t.rest.join("-")]})]}),r("td",{className:"bgc-100 bgd-5",children:t.description}),r("td",{className:"bgc-100 bgd-5 font-mono small",children:!!t.next.length&&t.next.map(l=>`-${l} `)})]},a))})})},a$=Object.freeze(Object.defineProperty({__proto__:null,default:t$},Symbol.toStringTag,{value:"Module"})),l$=`<div class="grid-fit gap-2">
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
`,o$=`<div class="grid-2 gap-2">
  <button class="brand" disabled>Brand:disabled</button>
  <button class="brand disabled">Brand.disabled</button>
  <button class="brand outline" disabled>Brand:disabled</button>
  <button class="brand outline disabled">Brand.disabled</button>
</div>
`,i$=`<div class="grid-fit gap-2">
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
`,s$=`<div class="grid-fit gap-2">
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
`,d$=`<div class="grid-fit gap-2">
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
`,c$=`<div class="grid-fit gap-2">
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
`,u$=`<div class="grid-fit gap-2">
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
`,h$=`<div class="grid-fit gap-2">
  <span class="button">Default</span>
  <span class="red shaded button">Red Shaded</span>
  <span class="orange outline button">Orange Outline</span>
</div>
`,p$=`<div class="flex wrap gap-4">
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
</div>`,f$=`<div class="flex gap-4">
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
</div>`,m$=`<div class="buttons">
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
`,g$=()=>s("div",{className:"prose",children:[r("h1",{children:"Buttons"}),s("p",{children:["For the sake of accessibility, buttons should usually be rendered using the ",r("code",{children:"button"})," element.  I mean, that's what it's there for, right?  For those cases when you really need to make a link or something else look like a button you can add the"," ",r("code",{children:"button"})," class."]}),s("div",{className:"small flex gap-2",children:[r("button",{children:"button element"}),r("a",{href:"/",className:"button",children:"button class"})]}),s("p",{children:["The default button color is grey. Any one of the color classes (e.g. ",r("code",{children:"red"}),", ",r("code",{children:"green"}),", etc) can be added to get different colors."]}),r("p",{children:"Button color stops automatically adapt between light and dark modes."}),r("h2",{children:"Default Style"}),r("p",{children:"The default button style is solid."}),r(_,{html:l$,language:"html",caption:"Buttons"}),r("h2",{children:"Bright Colors"}),s("p",{children:["Add the ",r("code",{children:"bright"})," CSS class to make the buttons brighter."]}),r(_,{html:i$,language:"html",caption:"Bright Buttons"}),r("h2",{children:"Dark Colors"}),s("p",{children:["Add the ",r("code",{children:"dark"})," CSS class to make the buttons darker."]}),r(_,{html:s$,language:"html",caption:"Dark Buttons"}),r("h2",{children:"Outline Style"}),s("p",{children:["Add the ",r("code",{children:"outline"})," class for outline buttons."]}),r(_,{html:d$,caption:"Outline Buttons"}),r("h2",{children:"Bare Naked Buttons"}),s("p",{children:["Add the ",r("code",{children:"bare"})," class for remove the background and border completely."]}),r(_,{html:c$,caption:"Bare Buttons"}),r("h2",{children:"Shaded Style"}),s("p",{children:["Add the ",r("code",{children:"shaded"})," class for subtly shaded buttons.  It's only a matter of time until flat design is out and shaded is back in. Be ahead of the curve!"]}),r(_,{html:u$,caption:"Shaded Buttons"}),r("h2",{children:"Button Class"}),s("p",{children:["Add the ",r("code",{children:"button"})," class to any non-button element to give it the button styling.  You can also add the ",r("code",{children:"outline"})," and/or"," ",r("code",{children:"shaded"})," classes."]}),r(_,{html:h$,caption:".button class"}),r("h2",{children:"Disabled Buttons"}),s("p",{children:["Add the ",r("code",{children:"disabled"})," attribute or ",r("code",{children:"disabled"})," CSS class to disable a button."]}),r(_,{html:o$,language:"html",caption:"Disabled Buttons"}),r("h2",{children:"Button Icons"}),s("p",{children:["You can add SVG ",r(OT,{})," to buttons. You can set the margins for icons manually using the ",r("code",{children:"mar-N"})," ","classes described on the ",r(Bd,{})," page. The ",r("code",{children:"on-left"})," and ",r("code",{children:"on-right"})," classes are provided as shortcuts and are equivalent to ",r("code",{children:"mar-r-2"})," and ",r("code",{children:"mar-l-2"}),", respectively."]}),r(_,{html:p$,caption:"Button icons"}),r("h2",{children:"Button Padding"}),r("p",{children:"The default padding for buttons is larger in the horizontal direction (4 units = 1em) than it is in the vertical direction (1 unit = 0.25em). This isn't as unbalanced as it initially seems when you factor in the line-height (1.5), which effectively results in  the vertical padding being equivalent to 2 units (0.5em)."}),s("p",{children:["If you have a button that only contains an icon then it can look a bit strange, as shown in the first button here.  Adding the ",r("code",{children:"pad-h-2"})," class to the button will reduce the horizontal padding to 2 units (0.5em) which will even things out, as shown in the second button.  Or you can add the ",r("code",{children:"icon"})," class to the button which will have the same effect and doesn't require you to remember how many units of padding you need to set."]}),r(_,{html:f$,caption:"Button padding"}),r("h2",{children:"Button Sets"}),s("p",{children:["Button sets can be created by adding a container with the"," ",r("code",{children:"buttons"})," class."]}),r(_,{html:m$,caption:"Button Sets"})]}),v$=Object.freeze(Object.defineProperty({__proto__:null,default:g$},Symbol.toStringTag,{value:"Module"})),b$=`<label>
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
`,y$=`<label class="inline">
  <input type="checkbox">
  Option 1
</label>

<label class="inline checkbox">
  <input type="checkbox">
  Option 2
</label>
`,w$=`<label class="inline border">
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

`,x$=`<label>
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
`,C$=`<style>
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
</div>`,k$=()=>s("div",{className:"prose",children:[r("h1",{children:"Checkboxes"}),r("h2",{children:"Checkbox Class"}),s("p",{children:["The usual approach to creating a checkbox is to define a"," ",r("code",{children:"label"})," that contains an ",r("code",{children:"input"})," with a",r("code",{children:'type="label"'})," attribute.  This has the benefit that clicking on the label will toggle the checkbox input."]}),s("p",{children:["Badger-CSS identifies labels that include a checkbox input using the ",r("code",{children:":has()"})," CSS selector. All the major browsers currently support it, although Firefox was a bit late to the party, only adding support in v121 released on 19th December 2023."]}),s("p",{children:["As a work-around to support older versions of Firefox, you can add the ",r("code",{children:"checkbox"})," class to the ",r("code",{children:"label"}),"."]}),r(_,{html:b$,language:"html",caption:"Checkboxes"}),r("h2",{children:"Inline Checkboxes"}),s("p",{children:["Checkboxes are full-width by default. Add the ",r("code",{children:"inline"})," class to give it a fluid width."]}),r(_,{html:y$,language:"html",caption:"Inline Checkboxes"}),r("h2",{children:"Checkbox Borders"}),s("p",{children:["Add the ",r("code",{children:"border"})," class for borders.  You may need to manually add margins using the ",r(Bd,{text:"margin"})," utility classes, or contain multiple checkboxes using the "," ",r(Cr,{})," or ",r(ta,{})," container classes and set the gap between elements."]}),r(_,{html:w$,language:"html",caption:"Border Checkboxes"}),r("h2",{children:"Checkbox Switches"}),s("p",{children:["Set the ",r("code",{children:"role"})," to ",r("code",{children:"switch"})," to display the checkbox as a switch.  Add the ",r("code",{children:"round"})," class for a fully rounded switch or ",r("code",{children:"square"})," for square corners."]}),r("p",{children:"The background color for enabled switches will be based on your brand color.  There are a number of CSS properties you can set to customise the style."}),r(_,{html:x$,language:"html",caption:"Checkbox Switch"}),r("h2",{children:"Custom Checkboxes"}),r(_,{html:C$,language:"html",caption:"Custom Checkboxes"})]}),S$=Object.freeze(Object.defineProperty({__proto__:null,default:k$},Symbol.toStringTag,{value:"Module"})),T$=`<div class="field">
  <label>Label</label>
  <input type="text" value="Input value">
  <div class="help">Help message</div>
</div>`,L$=`<div class="field">
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
</div>`,N$=`<div class="field">
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
</div>`,I$=`<div class="field valid">
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
</div>`,M$=`<style>
  .mandatory-text {
    --required-text: 'MANDATORY';
  }
</style>
<div class="field required mandatory-text">
  <label>Email Address</label>
  <input type="text" placeholder="you@your-domain.com">
</div>
`,A$=`<div class="field optional">
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
`,P$=`<div class="grid-3 gap-4">
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
</div>`,O$=`// define your own text for the
// required and/or optional labels...
$field-required-text: '"Important"';
$field-optional-text: '"Not Required"';

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,F$=()=>s("div",{className:"prose",children:[r("h1",{children:"Form Fields"}),r("p",{children:"Form fields are usually comprised of more than just an input. A label is usually present and sometimes an additional help message too."}),r("h2",{children:"Field Class"}),s("p",{children:["Create a container with the ",r("code",{children:"field"})," class. You can then add a ",r("code",{children:"label"})," for the field. If you want to display additional help for the input then give it the ",r("code",{children:"help"})," class."]}),r(_,{html:T$,language:"html",caption:"Form Field"}),r("h2",{children:"Field Width"}),s("p",{children:["Fields are wide by default, but you can add the ",r("code",{children:"inline"})," class to the input element or containing label in the case of checkboxes and radio buttons."]}),r(_,{html:L$,language:"html",caption:"Text Field"}),r(_,{html:_$,language:"html",caption:"Checkbox Field"}),r(_,{html:N$,language:"html",caption:"Radio Button Field"}),r("h2",{children:"Invalid Field"}),s("p",{children:["Add the ",r("code",{children:"invalid"})," class to the ",r("code",{children:"field"})," to indicate fields that are invalid."]}),r(_,{html:$$,language:"html",caption:"Invalid Field"}),r("h2",{children:"Valid Field"}),s("p",{children:["Add the ",r("code",{children:"valid"})," class to the ",r("code",{children:"field"})," to indicate fields that have passed validation."]}),r(_,{html:I$,language:"html",caption:"Valid Field"}),r("h2",{children:"Required Field"}),s("p",{children:["Add the ",r("code",{children:"required"})," class to the ",r("code",{children:"field"})," if you want an additional tag added to the label."]}),r(_,{html:E$,language:"html",caption:"Required Field"}),s("p",{children:["You can use the ",r("code",{children:"--required-text"})," CSS variable to change the text displayed."]}),r(_,{html:M$,language:"html",caption:"Custom Required Field"}),r("h2",{children:"Optional Field"}),s("p",{children:["Add the ",r("code",{children:"optional"})," class to the ",r("code",{children:"field"})," if you want an additional tag added to the label."]}),r(_,{html:A$,language:"html",caption:"Optional Field"}),s("p",{children:["You can use the ",r("code",{children:"--optional-text"})," CSS variable to change the text displayed."]}),r(_,{html:R$,language:"html",caption:"Custom Optional Field"}),s(ae,{children:[s("p",{children:["You can also change the text displayed for either the required and/or optional labels on a global level by setting the"," ",r("code",{children:"$field-required-text"})," and ",r("code",{children:"$field-optional-text"})," ","SASS variables. Be warned that you need to quote the values twice, so that the value defined includes a set of quotes, as shown here."]}),r(Ie,{code:O$,caption:"Required Text",language:"scss",className:"mar-b-8",expand:!0})]}),r("h2",{children:"Label Spacing"}),s("p",{children:["The ",r("code",{children:"mar-t-label"})," and ",r("code",{children:"pad-t-label"})," classes will add a margin or padding to the top of an element that matches the height of a field label.  This is useful if you want to vertically align inputs or other elements where some fields have label and others don't."]}),r(_,{html:P$,language:"html",caption:"Label Spacing"})]}),B$=Object.freeze(Object.defineProperty({__proto__:null,default:F$},Symbol.toStringTag,{value:"Module"})),D$=`<fieldset>
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
</fieldset>`,j$=()=>s("div",{className:"prose",children:[r("h1",{children:"Form Field Sets"}),s("p",{children:["You can group related fields together in a ",r("code",{children:"fieldset"}),"."]}),r("h2",{children:"Fieldset Container"}),r(_,{html:D$,language:"html",caption:"Form Fieldset"})]}),z$=Object.freeze(Object.defineProperty({__proto__:null,default:j$},Symbol.toStringTag,{value:"Module"})),T0=`<div class="field">
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
`,W$=`<div class="field optional">
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
`,U$=`<div class="grid-1 gap-4">
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
</div>`,H$=["smallest","smaller","small","medium","large","larger","largest"],G$=({size:e,setSize:n})=>r("div",{children:H$.map(t=>s("label",{children:[r("input",{type:"radio",name:"size",value:t,checked:t===e,onChange:a=>n(a.target.value)}),t]},t))}),V$=()=>{const[e,n]=D.useState({});return s("div",{className:"example flex gap-8 stack-desktop",children:[r("div",{className:"split-4",children:r(Y$,{options:e,setOption:l=>o=>n(i=>({...i,[l]:o})),toggleOption:l=>()=>n(o=>({...o,[l]:!o[l]}))})}),s("div",{className:"split-3-4",children:[r("h3",{className:"mar-b-2",children:"Output"}),r("div",{className:"output",children:r(Z$,{options:e})})]})]})},Y$=({options:e,setOption:n})=>{const t=n("size"),l=`<form class="${Ig(e,{},e.size)}">
  ...
</form>`;return s("div",{children:[r("h3",{className:"mar-b-2",children:"Select Size"}),r("div",{className:"border surface-4 pad-4 bdr-1",children:r(G$,{size:e.size,setSize:t})}),r("h3",{className:"mar-b-2 mar-t-4",children:"Markup"}),r(Ie,{code:l,language:"html",expand:!0})]})},Z$=({options:e})=>{const n=$g(e,{},e.size);return s("form",{className:n,children:[s("div",{className:"field",children:[r("label",{children:"Text Input"}),s("div",{className:"flex end gap-4",children:[r("input",{type:"text",name:"input-1",className:"wide",placeholder:"Search"}),r("button",{className:"brand outline",children:"Search"})]})]}),s("div",{className:"field",children:[r("label",{children:"Radio Buttons"}),s("div",{className:"flex gap-4 stack-tablet",children:[s("label",{className:"radio border",children:[r("input",{type:"radio",name:"color"}),"Nigel"]}),s("label",{className:"radio border",children:[r("input",{type:"radio",name:"color"}),"David"]}),s("label",{className:"radio border",children:[r("input",{type:"radio",name:"color"}),"Derek"]})]})]}),s("div",{className:"grid-2 gap-4 stack-tablet",children:[s("div",{className:"field",children:[r("label",{children:"Select Input"}),s("select",{name:"animal",className:"wide",required:!0,children:[r("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Choose an animal"}),r("option",{value:"ant",children:"Ant"}),r("option",{value:"badger",children:"Badger"}),r("option",{value:"cat",children:"Cat"}),r("option",{value:"dog",children:"Dog"}),r("option",{value:"elephant",children:"Elephant"}),r("option",{value:"ferret",children:"Ferret"}),r("option",{value:"goldfish",children:"Goldfish"})]})]}),s("div",{className:"field",children:[r("label",{children:"Checkbox"}),s("label",{className:"checkbox border",children:[r("input",{type:"checkbox"}),"I like badgers"]})]})]}),s("label",{className:"checkbox inline",children:[r("input",{type:"checkbox",role:"switch"}),"Turn it on"]}),s("label",{className:"checkbox inline",children:[r("input",{type:"checkbox",role:"switch"}),"Turn it on again"]}),r("div",{className:"text-right",children:r("button",{className:"solid brand",children:"Submit"})})]})};var Vl={};/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg=D;function ge(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jn=Object.prototype.hasOwnProperty,q$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,L0={},_0={};function zg(e){return Jn.call(_0,e)?!0:Jn.call(L0,e)?!1:q$.test(e)?_0[e]=!0:(L0[e]=!0,!1)}function Zn(e,n,t,a,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var Rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Rn[e]=new Zn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Rn[n]=new Zn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Rn[e]=new Zn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Rn[e]=new Zn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Rn[e]=new Zn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Rn[e]=new Zn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Rn[e]=new Zn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Rn[e]=new Zn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Rn[e]=new Zn(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zp=/[\-:]([a-z])/g;function qp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Zp,qp);Rn[n]=new Zn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Zp,qp);Rn[n]=new Zn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Zp,qp);Rn[n]=new Zn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Rn[e]=new Zn(e,1,!1,e.toLowerCase(),null,!1,!1)});Rn.xlinkHref=new Zn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Rn[e]=new Zn(e,1,!1,e.toLowerCase(),null,!0,!0)});var Ts={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},K$=["Webkit","ms","Moz","O"];Object.keys(Ts).forEach(function(e){K$.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ts[n]=Ts[e]})});var Q$=/["'&<>]/;function Hn(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var n=Q$.exec(e);if(n){var t="",a,l=0;for(a=n.index;a<e.length;a++){switch(e.charCodeAt(a)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#x27;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}l!==a&&(t+=e.substring(l,a)),l=a+1,t+=n}e=l!==a?t+e.substring(l,a):t}return e}var X$=/([A-Z])/g,J$=/^ms-/,sh=Array.isArray;function lr(e,n){return{insertionMode:e,selectedValue:n}}function eI(e,n,t){switch(n){case"select":return lr(1,t.value!=null?t.value:t.defaultValue);case"svg":return lr(2,null);case"math":return lr(3,null);case"foreignObject":return lr(1,null);case"table":return lr(4,null);case"thead":case"tbody":case"tfoot":return lr(5,null);case"colgroup":return lr(7,null);case"tr":return lr(6,null)}return 4<=e.insertionMode||e.insertionMode===0?lr(1,null):e}var N0=new Map;function Wg(e,n,t){if(typeof t!="object")throw Error(ge(62));n=!0;for(var a in t)if(Jn.call(t,a)){var l=t[a];if(l!=null&&typeof l!="boolean"&&l!==""){if(a.indexOf("--")===0){var o=Hn(a);l=Hn((""+l).trim())}else{o=a;var i=N0.get(o);i!==void 0||(i=Hn(o.replace(X$,"-$1").toLowerCase().replace(J$,"-ms-")),N0.set(o,i)),o=i,l=typeof l=="number"?l===0||Jn.call(Ts,a)?""+l:l+"px":Hn((""+l).trim())}n?(n=!1,e.push(' style="',o,":",l)):e.push(";",o,":",l)}}n||e.push('"')}function it(e,n,t,a){switch(t){case"style":Wg(e,n,a);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N"){if(n=Rn.hasOwnProperty(t)?Rn[t]:null,n!==null){switch(typeof a){case"function":case"symbol":return;case"boolean":if(!n.acceptsBooleans)return}switch(t=n.attributeName,n.type){case 3:a&&e.push(" ",t,'=""');break;case 4:a===!0?e.push(" ",t,'=""'):a!==!1&&e.push(" ",t,'="',Hn(a),'"');break;case 5:isNaN(a)||e.push(" ",t,'="',Hn(a),'"');break;case 6:!isNaN(a)&&1<=a&&e.push(" ",t,'="',Hn(a),'"');break;default:n.sanitizeURL&&(a=""+a),e.push(" ",t,'="',Hn(a),'"')}}else if(zg(t)){switch(typeof a){case"function":case"symbol":return;case"boolean":if(n=t.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-")return}e.push(" ",t,'="',Hn(a),'"')}}}function Ls(e,n,t){if(n!=null){if(t!=null)throw Error(ge(60));if(typeof n!="object"||!("__html"in n))throw Error(ge(61));n=n.__html,n!=null&&e.push(""+n)}}function nI(e){var n="";return jg.Children.forEach(e,function(t){t!=null&&(n+=t)}),n}function qc(e,n,t,a){e.push(Ht(t));var l=t=null,o;for(o in n)if(Jn.call(n,o)){var i=n[o];if(i!=null)switch(o){case"children":t=i;break;case"dangerouslySetInnerHTML":l=i;break;default:it(e,a,o,i)}}return e.push(">"),Ls(e,l,t),typeof t=="string"?(e.push(Hn(t)),null):t}var tI=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,$0=new Map;function Ht(e){var n=$0.get(e);if(n===void 0){if(!tI.test(e))throw Error(ge(65,e));n="<"+e,$0.set(e,n)}return n}function rI(e,n,t,a,l){switch(n){case"select":e.push(Ht("select"));var o=null,i=null;for(g in t)if(Jn.call(t,g)){var d=t[g];if(d!=null)switch(g){case"children":o=d;break;case"dangerouslySetInnerHTML":i=d;break;case"defaultValue":case"value":break;default:it(e,a,g,d)}}return e.push(">"),Ls(e,i,o),o;case"option":i=l.selectedValue,e.push(Ht("option"));var u=d=null,p=null,g=null;for(o in t)if(Jn.call(t,o)){var y=t[o];if(y!=null)switch(o){case"children":d=y;break;case"selected":p=y;break;case"dangerouslySetInnerHTML":g=y;break;case"value":u=y;default:it(e,a,o,y)}}if(i!=null)if(t=u!==null?""+u:nI(d),sh(i)){for(a=0;a<i.length;a++)if(""+i[a]===t){e.push(' selected=""');break}}else""+i===t&&e.push(' selected=""');else p&&e.push(' selected=""');return e.push(">"),Ls(e,g,d),d;case"textarea":e.push(Ht("textarea")),g=i=o=null;for(d in t)if(Jn.call(t,d)&&(u=t[d],u!=null))switch(d){case"children":g=u;break;case"value":o=u;break;case"defaultValue":i=u;break;case"dangerouslySetInnerHTML":throw Error(ge(91));default:it(e,a,d,u)}if(o===null&&i!==null&&(o=i),e.push(">"),g!=null){if(o!=null)throw Error(ge(92));if(sh(g)&&1<g.length)throw Error(ge(93));o=""+g}return typeof o=="string"&&o[0]===`
`&&e.push(`
`),o!==null&&e.push(Hn(""+o)),null;case"input":e.push(Ht("input")),u=g=d=o=null;for(i in t)if(Jn.call(t,i)&&(p=t[i],p!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(ge(399,"input"));case"defaultChecked":u=p;break;case"defaultValue":d=p;break;case"checked":g=p;break;case"value":o=p;break;default:it(e,a,i,p)}return g!==null?it(e,a,"checked",g):u!==null&&it(e,a,"checked",u),o!==null?it(e,a,"value",o):d!==null&&it(e,a,"value",d),e.push("/>"),null;case"menuitem":e.push(Ht("menuitem"));for(var C in t)if(Jn.call(t,C)&&(o=t[C],o!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(ge(400));default:it(e,a,C,o)}return e.push(">"),null;case"title":e.push(Ht("title")),o=null;for(y in t)if(Jn.call(t,y)&&(i=t[y],i!=null))switch(y){case"children":o=i;break;case"dangerouslySetInnerHTML":throw Error(ge(434));default:it(e,a,y,i)}return e.push(">"),o;case"listing":case"pre":e.push(Ht(n)),i=o=null;for(u in t)if(Jn.call(t,u)&&(d=t[u],d!=null))switch(u){case"children":o=d;break;case"dangerouslySetInnerHTML":i=d;break;default:it(e,a,u,d)}if(e.push(">"),i!=null){if(o!=null)throw Error(ge(60));if(typeof i!="object"||!("__html"in i))throw Error(ge(61));t=i.__html,t!=null&&(typeof t=="string"&&0<t.length&&t[0]===`
`?e.push(`
`,t):e.push(""+t))}return typeof o=="string"&&o[0]===`
`&&e.push(`
`),o;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Ht(n));for(var E in t)if(Jn.call(t,E)&&(o=t[E],o!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(ge(399,n));default:it(e,a,E,o)}return e.push("/>"),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return qc(e,t,n,a);case"html":return l.insertionMode===0&&e.push("<!DOCTYPE html>"),qc(e,t,n,a);default:if(n.indexOf("-")===-1&&typeof t.is!="string")return qc(e,t,n,a);e.push(Ht(n)),i=o=null;for(p in t)if(Jn.call(t,p)&&(d=t[p],d!=null))switch(p){case"children":o=d;break;case"dangerouslySetInnerHTML":i=d;break;case"style":Wg(e,a,d);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:zg(p)&&typeof d!="function"&&typeof d!="symbol"&&e.push(" ",p,'="',Hn(d),'"')}return e.push(">"),Ls(e,i,o),o}}function I0(e,n,t){if(e.push('<!--$?--><template id="'),t===null)throw Error(ge(395));return e.push(t),e.push('"></template>')}function aI(e,n,t,a){switch(t.insertionMode){case 0:case 1:return e.push('<div hidden id="'),e.push(n.segmentPrefix),n=a.toString(16),e.push(n),e.push('">');case 2:return e.push('<svg aria-hidden="true" style="display:none" id="'),e.push(n.segmentPrefix),n=a.toString(16),e.push(n),e.push('">');case 3:return e.push('<math aria-hidden="true" style="display:none" id="'),e.push(n.segmentPrefix),n=a.toString(16),e.push(n),e.push('">');case 4:return e.push('<table hidden id="'),e.push(n.segmentPrefix),n=a.toString(16),e.push(n),e.push('">');case 5:return e.push('<table hidden><tbody id="'),e.push(n.segmentPrefix),n=a.toString(16),e.push(n),e.push('">');case 6:return e.push('<table hidden><tr id="'),e.push(n.segmentPrefix),n=a.toString(16),e.push(n),e.push('">');case 7:return e.push('<table hidden><colgroup id="'),e.push(n.segmentPrefix),n=a.toString(16),e.push(n),e.push('">');default:throw Error(ge(397))}}function lI(e,n){switch(n.insertionMode){case 0:case 1:return e.push("</div>");case 2:return e.push("</svg>");case 3:return e.push("</math>");case 4:return e.push("</table>");case 5:return e.push("</tbody></table>");case 6:return e.push("</tr></table>");case 7:return e.push("</colgroup></table>");default:throw Error(ge(397))}}var oI=/[<\u2028\u2029]/g;function Kc(e){return JSON.stringify(e).replace(oI,function(n){switch(n){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}function iI(e,n){return n=n===void 0?"":n,{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:n+"P:",segmentPrefix:n+"S:",boundaryPrefix:n+"B:",idPrefix:n,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:e}}function E0(e,n,t,a){return t.generateStaticMarkup?(e.push(Hn(n)),!1):(n===""?e=a:(a&&e.push("<!-- -->"),e.push(Hn(n)),e=!0),e)}var Wo=Object.assign,sI=Symbol.for("react.element"),Ug=Symbol.for("react.portal"),Hg=Symbol.for("react.fragment"),Gg=Symbol.for("react.strict_mode"),Vg=Symbol.for("react.profiler"),Yg=Symbol.for("react.provider"),Zg=Symbol.for("react.context"),qg=Symbol.for("react.forward_ref"),Kg=Symbol.for("react.suspense"),Qg=Symbol.for("react.suspense_list"),Xg=Symbol.for("react.memo"),Kp=Symbol.for("react.lazy"),dI=Symbol.for("react.scope"),cI=Symbol.for("react.debug_trace_mode"),uI=Symbol.for("react.legacy_hidden"),hI=Symbol.for("react.default_value"),M0=Symbol.iterator;function dh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hg:return"Fragment";case Ug:return"Portal";case Vg:return"Profiler";case Gg:return"StrictMode";case Kg:return"Suspense";case Qg:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zg:return(e.displayName||"Context")+".Consumer";case Yg:return(e._context.displayName||"Context")+".Provider";case qg:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xg:return n=e.displayName||null,n!==null?n:dh(e.type)||"Memo";case Kp:n=e._payload,e=e._init;try{return dh(e(n))}catch{}}return null}var Jg={};function A0(e,n){if(e=e.contextTypes,!e)return Jg;var t={},a;for(a in e)t[a]=n[a];return t}var Ta=null;function jd(e,n){if(e!==n){e.context._currentValue2=e.parentValue,e=e.parent;var t=n.parent;if(e===null){if(t!==null)throw Error(ge(401))}else{if(t===null)throw Error(ge(401));jd(e,t)}n.context._currentValue2=n.value}}function ev(e){e.context._currentValue2=e.parentValue,e=e.parent,e!==null&&ev(e)}function nv(e){var n=e.parent;n!==null&&nv(n),e.context._currentValue2=e.value}function tv(e,n){if(e.context._currentValue2=e.parentValue,e=e.parent,e===null)throw Error(ge(402));e.depth===n.depth?jd(e,n):tv(e,n)}function rv(e,n){var t=n.parent;if(t===null)throw Error(ge(402));e.depth===t.depth?jd(e,t):rv(e,t),n.context._currentValue2=n.value}function id(e){var n=Ta;n!==e&&(n===null?nv(e):e===null?ev(n):n.depth===e.depth?jd(n,e):n.depth>e.depth?tv(n,e):rv(n,e),Ta=e)}var R0={isMounted:function(){return!1},enqueueSetState:function(e,n){e=e._reactInternals,e.queue!==null&&e.queue.push(n)},enqueueReplaceState:function(e,n){e=e._reactInternals,e.replace=!0,e.queue=[n]},enqueueForceUpdate:function(){}};function P0(e,n,t,a){var l=e.state!==void 0?e.state:null;e.updater=R0,e.props=t,e.state=l;var o={queue:[],replace:!1};e._reactInternals=o;var i=n.contextType;if(e.context=typeof i=="object"&&i!==null?i._currentValue2:a,i=n.getDerivedStateFromProps,typeof i=="function"&&(i=i(t,l),l=i==null?l:Wo({},l,i),e.state=l),typeof n.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(n=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),n!==e.state&&R0.enqueueReplaceState(e,e.state,null),o.queue!==null&&0<o.queue.length)if(n=o.queue,i=o.replace,o.queue=null,o.replace=!1,i&&n.length===1)e.state=n[0];else{for(o=i?n[0]:e.state,l=!0,i=i?1:0;i<n.length;i++){var d=n[i];d=typeof d=="function"?d.call(e,o,t,a):d,d!=null&&(l?(l=!1,o=Wo({},o,d)):Wo(o,d))}e.state=o}else o.queue=null}var pI={id:1,overflow:""};function ch(e,n,t){var a=e.id;e=e.overflow;var l=32-_s(a)-1;a&=~(1<<l),t+=1;var o=32-_s(n)+l;if(30<o){var i=l-l%5;return o=(a&(1<<i)-1).toString(32),a>>=i,l-=i,{id:1<<32-_s(n)+l|t<<l|a,overflow:o+e}}return{id:1<<o|t<<l|a,overflow:e}}var _s=Math.clz32?Math.clz32:gI,fI=Math.log,mI=Math.LN2;function gI(e){return e>>>=0,e===0?32:31-(fI(e)/mI|0)|0}function vI(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var bI=typeof Object.is=="function"?Object.is:vI,br=null,Qp=null,Ns=null,Ue=null,No=!1,sd=!1,ui=0,Fr=null,zd=0;function ba(){if(br===null)throw Error(ge(321));return br}function O0(){if(0<zd)throw Error(ge(312));return{memoizedState:null,queue:null,next:null}}function Xp(){return Ue===null?Ns===null?(No=!1,Ns=Ue=O0()):(No=!0,Ue=Ns):Ue.next===null?(No=!1,Ue=Ue.next=O0()):(No=!0,Ue=Ue.next),Ue}function Jp(){Qp=br=null,sd=!1,Ns=null,zd=0,Ue=Fr=null}function av(e,n){return typeof n=="function"?n(e):n}function F0(e,n,t){if(br=ba(),Ue=Xp(),No){var a=Ue.queue;if(n=a.dispatch,Fr!==null&&(t=Fr.get(a),t!==void 0)){Fr.delete(a),a=Ue.memoizedState;do a=e(a,t.action),t=t.next;while(t!==null);return Ue.memoizedState=a,[a,n]}return[Ue.memoizedState,n]}return e=e===av?typeof n=="function"?n():n:t!==void 0?t(n):n,Ue.memoizedState=e,e=Ue.queue={last:null,dispatch:null},e=e.dispatch=yI.bind(null,br,e),[Ue.memoizedState,e]}function B0(e,n){if(br=ba(),Ue=Xp(),n=n===void 0?null:n,Ue!==null){var t=Ue.memoizedState;if(t!==null&&n!==null){var a=t[1];e:if(a===null)a=!1;else{for(var l=0;l<a.length&&l<n.length;l++)if(!bI(n[l],a[l])){a=!1;break e}a=!0}if(a)return t[0]}}return e=e(),Ue.memoizedState=[e,n],e}function yI(e,n,t){if(25<=zd)throw Error(ge(301));if(e===br)if(sd=!0,e={action:t,next:null},Fr===null&&(Fr=new Map),t=Fr.get(n),t===void 0)Fr.set(n,e);else{for(n=t;n.next!==null;)n=n.next;n.next=e}}function wI(){throw Error(ge(394))}function os(){}var D0={readContext:function(e){return e._currentValue2},useContext:function(e){return ba(),e._currentValue2},useMemo:B0,useReducer:F0,useRef:function(e){br=ba(),Ue=Xp();var n=Ue.memoizedState;return n===null?(e={current:e},Ue.memoizedState=e):n},useState:function(e){return F0(av,e)},useInsertionEffect:os,useLayoutEffect:function(){},useCallback:function(e,n){return B0(function(){return e},n)},useImperativeHandle:os,useEffect:os,useDebugValue:os,useDeferredValue:function(e){return ba(),e},useTransition:function(){return ba(),[!1,wI]},useId:function(){var e=Qp.treeContext,n=e.overflow;e=e.id,e=(e&~(1<<32-_s(e)-1)).toString(32)+n;var t=$s;if(t===null)throw Error(ge(404));return n=ui++,e=":"+t.idPrefix+"R"+e,0<n&&(e+="H"+n.toString(32)),e+":"},useMutableSource:function(e,n){return ba(),n(e._source)},useSyncExternalStore:function(e,n,t){if(t===void 0)throw Error(ge(407));return t()}},$s=null,Qc=jg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function xI(e){return console.error(e),null}function $o(){}function CI(e,n,t,a,l,o,i,d,u){var p=[],g=new Set;return n={destination:null,responseState:n,progressiveChunkSize:a===void 0?12800:a,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:g,pingedTasks:p,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:l===void 0?xI:l,onAllReady:o===void 0?$o:o,onShellReady:i===void 0?$o:i,onShellError:d===void 0?$o:d,onFatalError:u===void 0?$o:u},t=dd(n,0,null,t,!1,!1),t.parentFlushed=!0,e=ef(n,e,null,t,g,Jg,null,pI),p.push(e),n}function ef(e,n,t,a,l,o,i,d){e.allPendingTasks++,t===null?e.pendingRootTasks++:t.pendingTasks++;var u={node:n,ping:function(){var p=e.pingedTasks;p.push(u),p.length===1&&iv(e)},blockedBoundary:t,blockedSegment:a,abortSet:l,legacyContext:o,context:i,treeContext:d};return l.add(u),u}function dd(e,n,t,a,l,o){return{status:0,id:-1,index:n,parentFlushed:!1,chunks:[],children:[],formatContext:a,boundary:t,lastPushedText:l,textEmbedded:o}}function hi(e,n){if(e=e.onError(n),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function cd(e,n){var t=e.onShellError;t(n),t=e.onFatalError,t(n),e.destination!==null?(e.status=2,e.destination.destroy(n)):(e.status=1,e.fatalError=n)}function j0(e,n,t,a,l){for(br={},Qp=n,ui=0,e=t(a,l);sd;)sd=!1,ui=0,zd+=1,Ue=null,e=t(a,l);return Jp(),e}function z0(e,n,t,a){var l=t.render(),o=a.childContextTypes;if(o!=null){var i=n.legacyContext;if(typeof t.getChildContext!="function")a=i;else{t=t.getChildContext();for(var d in t)if(!(d in o))throw Error(ge(108,dh(a)||"Unknown",d));a=Wo({},i,t)}n.legacyContext=a,ct(e,n,l),n.legacyContext=i}else ct(e,n,l)}function W0(e,n){if(e&&e.defaultProps){n=Wo({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function uh(e,n,t,a,l){if(typeof t=="function")if(t.prototype&&t.prototype.isReactComponent){l=A0(t,n.legacyContext);var o=t.contextType;o=new t(a,typeof o=="object"&&o!==null?o._currentValue2:l),P0(o,t,a,l),z0(e,n,o,t)}else{o=A0(t,n.legacyContext),l=j0(e,n,t,a,o);var i=ui!==0;if(typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0)P0(l,t,a,o),z0(e,n,l,t);else if(i){a=n.treeContext,n.treeContext=ch(a,1,0);try{ct(e,n,l)}finally{n.treeContext=a}}else ct(e,n,l)}else if(typeof t=="string"){switch(l=n.blockedSegment,o=rI(l.chunks,t,a,e.responseState,l.formatContext),l.lastPushedText=!1,i=l.formatContext,l.formatContext=eI(i,t,a),hh(e,n,o),l.formatContext=i,t){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:l.chunks.push("</",t,">")}l.lastPushedText=!1}else{switch(t){case uI:case cI:case Gg:case Vg:case Hg:ct(e,n,a.children);return;case Qg:ct(e,n,a.children);return;case dI:throw Error(ge(343));case Kg:e:{t=n.blockedBoundary,l=n.blockedSegment,o=a.fallback,a=a.children,i=new Set;var d={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:i,errorDigest:null},u=dd(e,l.chunks.length,d,l.formatContext,!1,!1);l.children.push(u),l.lastPushedText=!1;var p=dd(e,0,null,l.formatContext,!1,!1);p.parentFlushed=!0,n.blockedBoundary=d,n.blockedSegment=p;try{if(hh(e,n,a),e.responseState.generateStaticMarkup||p.lastPushedText&&p.textEmbedded&&p.chunks.push("<!-- -->"),p.status=1,ud(d,p),d.pendingTasks===0)break e}catch(g){p.status=4,d.forceClientRender=!0,d.errorDigest=hi(e,g)}finally{n.blockedBoundary=t,n.blockedSegment=l}n=ef(e,o,t,u,i,n.legacyContext,n.context,n.treeContext),e.pingedTasks.push(n)}return}if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qg:if(a=j0(e,n,t.render,a,l),ui!==0){t=n.treeContext,n.treeContext=ch(t,1,0);try{ct(e,n,a)}finally{n.treeContext=t}}else ct(e,n,a);return;case Xg:t=t.type,a=W0(t,a),uh(e,n,t,a,l);return;case Yg:if(l=a.children,t=t._context,a=a.value,o=t._currentValue2,t._currentValue2=a,i=Ta,Ta=a={parent:i,depth:i===null?0:i.depth+1,context:t,parentValue:o,value:a},n.context=a,ct(e,n,l),e=Ta,e===null)throw Error(ge(403));a=e.parentValue,e.context._currentValue2=a===hI?e.context._defaultValue:a,e=Ta=e.parent,n.context=e;return;case Zg:a=a.children,a=a(t._currentValue2),ct(e,n,a);return;case Kp:l=t._init,t=l(t._payload),a=W0(t,a),uh(e,n,t,a,void 0);return}throw Error(ge(130,t==null?t:typeof t,""))}}function ct(e,n,t){if(n.node=t,typeof t=="object"&&t!==null){switch(t.$$typeof){case sI:uh(e,n,t.type,t.props,t.ref);return;case Ug:throw Error(ge(257));case Kp:var a=t._init;t=a(t._payload),ct(e,n,t);return}if(sh(t)){U0(e,n,t);return}if(t===null||typeof t!="object"?a=null:(a=M0&&t[M0]||t["@@iterator"],a=typeof a=="function"?a:null),a&&(a=a.call(t))){if(t=a.next(),!t.done){var l=[];do l.push(t.value),t=a.next();while(!t.done);U0(e,n,l)}return}throw e=Object.prototype.toString.call(t),Error(ge(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}typeof t=="string"?(a=n.blockedSegment,a.lastPushedText=E0(n.blockedSegment.chunks,t,e.responseState,a.lastPushedText)):typeof t=="number"&&(a=n.blockedSegment,a.lastPushedText=E0(n.blockedSegment.chunks,""+t,e.responseState,a.lastPushedText))}function U0(e,n,t){for(var a=t.length,l=0;l<a;l++){var o=n.treeContext;n.treeContext=ch(o,a,l);try{hh(e,n,t[l])}finally{n.treeContext=o}}}function hh(e,n,t){var a=n.blockedSegment.formatContext,l=n.legacyContext,o=n.context;try{return ct(e,n,t)}catch(u){if(Jp(),typeof u=="object"&&u!==null&&typeof u.then=="function"){t=u;var i=n.blockedSegment,d=dd(e,i.chunks.length,null,i.formatContext,i.lastPushedText,!0);i.children.push(d),i.lastPushedText=!1,e=ef(e,n.node,n.blockedBoundary,d,n.abortSet,n.legacyContext,n.context,n.treeContext).ping,t.then(e,e),n.blockedSegment.formatContext=a,n.legacyContext=l,n.context=o,id(o)}else throw n.blockedSegment.formatContext=a,n.legacyContext=l,n.context=o,id(o),u}}function kI(e){var n=e.blockedBoundary;e=e.blockedSegment,e.status=3,ov(this,n,e)}function lv(e,n,t){var a=e.blockedBoundary;e.blockedSegment.status=3,a===null?(n.allPendingTasks--,n.status!==2&&(n.status=2,n.destination!==null&&n.destination.push(null))):(a.pendingTasks--,a.forceClientRender||(a.forceClientRender=!0,e=t===void 0?Error(ge(432)):t,a.errorDigest=n.onError(e),a.parentFlushed&&n.clientRenderedBoundaries.push(a)),a.fallbackAbortableTasks.forEach(function(l){return lv(l,n,t)}),a.fallbackAbortableTasks.clear(),n.allPendingTasks--,n.allPendingTasks===0&&(a=n.onAllReady,a()))}function ud(e,n){if(n.chunks.length===0&&n.children.length===1&&n.children[0].boundary===null){var t=n.children[0];t.id=n.id,t.parentFlushed=!0,t.status===1&&ud(e,t)}else e.completedSegments.push(n)}function ov(e,n,t){if(n===null){if(t.parentFlushed){if(e.completedRootSegment!==null)throw Error(ge(389));e.completedRootSegment=t}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=$o,n=e.onShellReady,n())}else n.pendingTasks--,n.forceClientRender||(n.pendingTasks===0?(t.parentFlushed&&t.status===1&&ud(n,t),n.parentFlushed&&e.completedBoundaries.push(n),n.fallbackAbortableTasks.forEach(kI,e),n.fallbackAbortableTasks.clear()):t.parentFlushed&&t.status===1&&(ud(n,t),n.completedSegments.length===1&&n.parentFlushed&&e.partialBoundaries.push(n)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function iv(e){if(e.status!==2){var n=Ta,t=Qc.current;Qc.current=D0;var a=$s;$s=e.responseState;try{var l=e.pingedTasks,o;for(o=0;o<l.length;o++){var i=l[o],d=e,u=i.blockedSegment;if(u.status===0){id(i.context);try{ct(d,i,i.node),d.responseState.generateStaticMarkup||u.lastPushedText&&u.textEmbedded&&u.chunks.push("<!-- -->"),i.abortSet.delete(i),u.status=1,ov(d,i.blockedBoundary,u)}catch(I){if(Jp(),typeof I=="object"&&I!==null&&typeof I.then=="function"){var p=i.ping;I.then(p,p)}else{i.abortSet.delete(i),u.status=4;var g=i.blockedBoundary,y=I,C=hi(d,y);if(g===null?cd(d,y):(g.pendingTasks--,g.forceClientRender||(g.forceClientRender=!0,g.errorDigest=C,g.parentFlushed&&d.clientRenderedBoundaries.push(g))),d.allPendingTasks--,d.allPendingTasks===0){var E=d.onAllReady;E()}}}finally{}}}l.splice(0,o),e.destination!==null&&nf(e,e.destination)}catch(I){hi(e,I),cd(e,I)}finally{$s=a,Qc.current=t,t===D0&&id(n)}}}function is(e,n,t){switch(t.parentFlushed=!0,t.status){case 0:var a=t.id=e.nextSegmentId++;return t.lastPushedText=!1,t.textEmbedded=!1,e=e.responseState,n.push('<template id="'),n.push(e.placeholderPrefix),e=a.toString(16),n.push(e),n.push('"></template>');case 1:t.status=2;var l=!0;a=t.chunks;var o=0;t=t.children;for(var i=0;i<t.length;i++){for(l=t[i];o<l.index;o++)n.push(a[o]);l=Wd(e,n,l)}for(;o<a.length-1;o++)n.push(a[o]);return o<a.length&&(l=n.push(a[o])),l;default:throw Error(ge(390))}}function Wd(e,n,t){var a=t.boundary;if(a===null)return is(e,n,t);if(a.parentFlushed=!0,a.forceClientRender)return e.responseState.generateStaticMarkup||(a=a.errorDigest,n.push("<!--$!-->"),n.push("<template"),a&&(n.push(' data-dgst="'),a=Hn(a),n.push(a),n.push('"')),n.push("></template>")),is(e,n,t),e=e.responseState.generateStaticMarkup?!0:n.push("<!--/$-->"),e;if(0<a.pendingTasks){a.rootSegmentID=e.nextSegmentId++,0<a.completedSegments.length&&e.partialBoundaries.push(a);var l=e.responseState,o=l.nextSuspenseID++;return l=l.boundaryPrefix+o.toString(16),a=a.id=l,I0(n,e.responseState,a),is(e,n,t),n.push("<!--/$-->")}if(a.byteSize>e.progressiveChunkSize)return a.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(a),I0(n,e.responseState,a.id),is(e,n,t),n.push("<!--/$-->");if(e.responseState.generateStaticMarkup||n.push("<!--$-->"),t=a.completedSegments,t.length!==1)throw Error(ge(391));return Wd(e,n,t[0]),e=e.responseState.generateStaticMarkup?!0:n.push("<!--/$-->"),e}function H0(e,n,t){return aI(n,e.responseState,t.formatContext,t.id),Wd(e,n,t),lI(n,t.formatContext)}function G0(e,n,t){for(var a=t.completedSegments,l=0;l<a.length;l++)sv(e,n,t,a[l]);if(a.length=0,e=e.responseState,a=t.id,t=t.rootSegmentID,n.push(e.startInlineScript),e.sentCompleteBoundaryFunction?n.push('$RC("'):(e.sentCompleteBoundaryFunction=!0,n.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')),a===null)throw Error(ge(395));return t=t.toString(16),n.push(a),n.push('","'),n.push(e.segmentPrefix),n.push(t),n.push('")<\/script>')}function sv(e,n,t,a){if(a.status===2)return!0;var l=a.id;if(l===-1){if((a.id=t.rootSegmentID)===-1)throw Error(ge(392));return H0(e,n,a)}return H0(e,n,a),e=e.responseState,n.push(e.startInlineScript),e.sentCompleteSegmentFunction?n.push('$RS("'):(e.sentCompleteSegmentFunction=!0,n.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')),n.push(e.segmentPrefix),l=l.toString(16),n.push(l),n.push('","'),n.push(e.placeholderPrefix),n.push(l),n.push('")<\/script>')}function nf(e,n){try{var t=e.completedRootSegment;if(t!==null&&e.pendingRootTasks===0){Wd(e,n,t),e.completedRootSegment=null;var a=e.responseState.bootstrapChunks;for(t=0;t<a.length-1;t++)n.push(a[t]);t<a.length&&n.push(a[t])}var l=e.clientRenderedBoundaries,o;for(o=0;o<l.length;o++){var i=l[o];a=n;var d=e.responseState,u=i.id,p=i.errorDigest,g=i.errorMessage,y=i.errorComponentStack;if(a.push(d.startInlineScript),d.sentClientRenderFunction?a.push('$RX("'):(d.sentClientRenderFunction=!0,a.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')),u===null)throw Error(ge(395));if(a.push(u),a.push('"'),p||g||y){a.push(",");var C=Kc(p||"");a.push(C)}if(g||y){a.push(",");var E=Kc(g||"");a.push(E)}if(y){a.push(",");var I=Kc(y);a.push(I)}if(!a.push(")<\/script>")){e.destination=null,o++,l.splice(0,o);return}}l.splice(0,o);var k=e.completedBoundaries;for(o=0;o<k.length;o++)if(!G0(e,n,k[o])){e.destination=null,o++,k.splice(0,o);return}k.splice(0,o);var M=e.partialBoundaries;for(o=0;o<M.length;o++){var w=M[o];e:{l=e,i=n;var m=w.completedSegments;for(d=0;d<m.length;d++)if(!sv(l,i,w,m[d])){d++,m.splice(0,d);var b=!1;break e}m.splice(0,d),b=!0}if(!b){e.destination=null,o++,M.splice(0,o);return}}M.splice(0,o);var v=e.completedBoundaries;for(o=0;o<v.length;o++)if(!G0(e,n,v[o])){e.destination=null,o++,v.splice(0,o);return}v.splice(0,o)}finally{e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&n.push(null)}}function SI(e,n){try{var t=e.abortableTasks;t.forEach(function(a){return lv(a,e,n)}),t.clear(),e.destination!==null&&nf(e,e.destination)}catch(a){hi(e,a),cd(e,a)}}function TI(){}function dv(e,n,t,a){var l=!1,o=null,i="",d={push:function(p){return p!==null&&(i+=p),!0},destroy:function(p){l=!0,o=p}},u=!1;if(e=CI(e,iI(t,n?n.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,TI,void 0,function(){u=!0},void 0,void 0),iv(e),SI(e,a),e.status===1)e.status=2,d.destroy(e.fatalError);else if(e.status!==2&&e.destination===null){e.destination=d;try{nf(e,d)}catch(p){hi(e,p),cd(e,p)}}if(l)throw o;if(!u)throw Error(ge(426));return i}Vl.renderToNodeStream=function(){throw Error(ge(207))};Vl.renderToStaticMarkup=function(e,n){return dv(e,n,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};Vl.renderToStaticNodeStream=function(){throw Error(ge(208))};Vl.renderToString=function(e,n){return dv(e,n,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};Vl.version="18.2.0";var tf={};/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv=D;function ye(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ut=null,ht=0;function re(e,n){if(n.length!==0)if(512<n.length)0<ht&&(e.enqueue(new Uint8Array(ut.buffer,0,ht)),ut=new Uint8Array(512),ht=0),e.enqueue(n);else{var t=ut.length-ht;t<n.length&&(t===0?e.enqueue(ut):(ut.set(n.subarray(0,t),ht),e.enqueue(ut),n=n.subarray(t)),ut=new Uint8Array(512),ht=0),ut.set(n,ht),ht+=n.length}}function Qe(e,n){return re(e,n),!0}function V0(e){ut&&0<ht&&(e.enqueue(new Uint8Array(ut.buffer,0,ht)),ut=null,ht=0)}var uv=new TextEncoder;function Ce(e){return uv.encode(e)}function X(e){return uv.encode(e)}function hv(e,n){typeof e.error=="function"?e.error(n):e.close()}var et=Object.prototype.hasOwnProperty,LI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Y0={},Z0={};function pv(e){return et.call(Z0,e)?!0:et.call(Y0,e)?!1:LI.test(e)?Z0[e]=!0:(Y0[e]=!0,!1)}function qn(e,n,t,a,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var Pn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pn[e]=new qn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Pn[n]=new qn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pn[e]=new qn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pn[e]=new qn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pn[e]=new qn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pn[e]=new qn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pn[e]=new qn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pn[e]=new qn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pn[e]=new qn(e,5,!1,e.toLowerCase(),null,!1,!1)});var rf=/[\-:]([a-z])/g;function af(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(rf,af);Pn[n]=new qn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(rf,af);Pn[n]=new qn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(rf,af);Pn[n]=new qn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pn[e]=new qn(e,1,!1,e.toLowerCase(),null,!1,!1)});Pn.xlinkHref=new qn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pn[e]=new qn(e,1,!1,e.toLowerCase(),null,!0,!0)});var Is={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_I=["Webkit","ms","Moz","O"];Object.keys(Is).forEach(function(e){_I.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Is[n]=Is[e]})});var NI=/["'&<>]/;function En(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var n=NI.exec(e);if(n){var t="",a,l=0;for(a=n.index;a<e.length;a++){switch(e.charCodeAt(a)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#x27;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}l!==a&&(t+=e.substring(l,a)),l=a+1,t+=n}e=l!==a?t+e.substring(l,a):t}return e}var $I=/([A-Z])/g,II=/^ms-/,ph=Array.isArray,EI=X("<script>"),MI=X("<\/script>"),AI=X('<script src="'),RI=X('<script type="module" src="'),q0=X('" async=""><\/script>'),PI=/(<\/|<)(s)(cript)/gi;function OI(e,n,t,a){return""+n+(t==="s"?"\\u0073":"\\u0053")+a}function FI(e,n,t,a,l){e=e===void 0?"":e,n=n===void 0?EI:X('<script nonce="'+En(n)+'">');var o=[];if(t!==void 0&&o.push(n,Ce((""+t).replace(PI,OI)),MI),a!==void 0)for(t=0;t<a.length;t++)o.push(AI,Ce(En(a[t])),q0);if(l!==void 0)for(a=0;a<l.length;a++)o.push(RI,Ce(En(l[a])),q0);return{bootstrapChunks:o,startInlineScript:n,placeholderPrefix:X(e+"P:"),segmentPrefix:X(e+"S:"),boundaryPrefix:e+"B:",idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function Gt(e,n){return{insertionMode:e,selectedValue:n}}function BI(e){return Gt(e==="http://www.w3.org/2000/svg"?2:e==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function DI(e,n,t){switch(n){case"select":return Gt(1,t.value!=null?t.value:t.defaultValue);case"svg":return Gt(2,null);case"math":return Gt(3,null);case"foreignObject":return Gt(1,null);case"table":return Gt(4,null);case"thead":case"tbody":case"tfoot":return Gt(5,null);case"colgroup":return Gt(7,null);case"tr":return Gt(6,null)}return 4<=e.insertionMode||e.insertionMode===0?Gt(1,null):e}var lf=X("<!-- -->");function K0(e,n,t,a){return n===""?a:(a&&e.push(lf),e.push(Ce(En(n))),!0)}var Q0=new Map,jI=X(' style="'),X0=X(":"),zI=X(";");function fv(e,n,t){if(typeof t!="object")throw Error(ye(62));n=!0;for(var a in t)if(et.call(t,a)){var l=t[a];if(l!=null&&typeof l!="boolean"&&l!==""){if(a.indexOf("--")===0){var o=Ce(En(a));l=Ce(En((""+l).trim()))}else{o=a;var i=Q0.get(o);i!==void 0||(i=X(En(o.replace($I,"-$1").toLowerCase().replace(II,"-ms-"))),Q0.set(o,i)),o=i,l=typeof l=="number"?l===0||et.call(Is,a)?Ce(""+l):Ce(l+"px"):Ce(En((""+l).trim()))}n?(n=!1,e.push(jI,o,X0,l)):e.push(zI,o,X0,l)}}n||e.push(ya)}var $r=X(" "),ol=X('="'),ya=X('"'),J0=X('=""');function st(e,n,t,a){switch(t){case"style":fv(e,n,a);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N"){if(n=Pn.hasOwnProperty(t)?Pn[t]:null,n!==null){switch(typeof a){case"function":case"symbol":return;case"boolean":if(!n.acceptsBooleans)return}switch(t=Ce(n.attributeName),n.type){case 3:a&&e.push($r,t,J0);break;case 4:a===!0?e.push($r,t,J0):a!==!1&&e.push($r,t,ol,Ce(En(a)),ya);break;case 5:isNaN(a)||e.push($r,t,ol,Ce(En(a)),ya);break;case 6:!isNaN(a)&&1<=a&&e.push($r,t,ol,Ce(En(a)),ya);break;default:n.sanitizeURL&&(a=""+a),e.push($r,t,ol,Ce(En(a)),ya)}}else if(pv(t)){switch(typeof a){case"function":case"symbol":return;case"boolean":if(n=t.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-")return}e.push($r,Ce(t),ol,Ce(En(a)),ya)}}}var Ir=X(">"),em=X("/>");function Es(e,n,t){if(n!=null){if(t!=null)throw Error(ye(60));if(typeof n!="object"||!("__html"in n))throw Error(ye(61));n=n.__html,n!=null&&e.push(Ce(""+n))}}function WI(e){var n="";return cv.Children.forEach(e,function(t){t!=null&&(n+=t)}),n}var Xc=X(' selected=""');function Jc(e,n,t,a){e.push(Vt(t));var l=t=null,o;for(o in n)if(et.call(n,o)){var i=n[o];if(i!=null)switch(o){case"children":t=i;break;case"dangerouslySetInnerHTML":l=i;break;default:st(e,a,o,i)}}return e.push(Ir),Es(e,l,t),typeof t=="string"?(e.push(Ce(En(t))),null):t}var eu=X(`
`),UI=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,nm=new Map;function Vt(e){var n=nm.get(e);if(n===void 0){if(!UI.test(e))throw Error(ye(65,e));n=X("<"+e),nm.set(e,n)}return n}var HI=X("<!DOCTYPE html>");function GI(e,n,t,a,l){switch(n){case"select":e.push(Vt("select"));var o=null,i=null;for(g in t)if(et.call(t,g)){var d=t[g];if(d!=null)switch(g){case"children":o=d;break;case"dangerouslySetInnerHTML":i=d;break;case"defaultValue":case"value":break;default:st(e,a,g,d)}}return e.push(Ir),Es(e,i,o),o;case"option":i=l.selectedValue,e.push(Vt("option"));var u=d=null,p=null,g=null;for(o in t)if(et.call(t,o)){var y=t[o];if(y!=null)switch(o){case"children":d=y;break;case"selected":p=y;break;case"dangerouslySetInnerHTML":g=y;break;case"value":u=y;default:st(e,a,o,y)}}if(i!=null)if(t=u!==null?""+u:WI(d),ph(i)){for(a=0;a<i.length;a++)if(""+i[a]===t){e.push(Xc);break}}else""+i===t&&e.push(Xc);else p&&e.push(Xc);return e.push(Ir),Es(e,g,d),d;case"textarea":e.push(Vt("textarea")),g=i=o=null;for(d in t)if(et.call(t,d)&&(u=t[d],u!=null))switch(d){case"children":g=u;break;case"value":o=u;break;case"defaultValue":i=u;break;case"dangerouslySetInnerHTML":throw Error(ye(91));default:st(e,a,d,u)}if(o===null&&i!==null&&(o=i),e.push(Ir),g!=null){if(o!=null)throw Error(ye(92));if(ph(g)&&1<g.length)throw Error(ye(93));o=""+g}return typeof o=="string"&&o[0]===`
`&&e.push(eu),o!==null&&e.push(Ce(En(""+o))),null;case"input":e.push(Vt("input")),u=g=d=o=null;for(i in t)if(et.call(t,i)&&(p=t[i],p!=null))switch(i){case"children":case"dangerouslySetInnerHTML":throw Error(ye(399,"input"));case"defaultChecked":u=p;break;case"defaultValue":d=p;break;case"checked":g=p;break;case"value":o=p;break;default:st(e,a,i,p)}return g!==null?st(e,a,"checked",g):u!==null&&st(e,a,"checked",u),o!==null?st(e,a,"value",o):d!==null&&st(e,a,"value",d),e.push(em),null;case"menuitem":e.push(Vt("menuitem"));for(var C in t)if(et.call(t,C)&&(o=t[C],o!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(ye(400));default:st(e,a,C,o)}return e.push(Ir),null;case"title":e.push(Vt("title")),o=null;for(y in t)if(et.call(t,y)&&(i=t[y],i!=null))switch(y){case"children":o=i;break;case"dangerouslySetInnerHTML":throw Error(ye(434));default:st(e,a,y,i)}return e.push(Ir),o;case"listing":case"pre":e.push(Vt(n)),i=o=null;for(u in t)if(et.call(t,u)&&(d=t[u],d!=null))switch(u){case"children":o=d;break;case"dangerouslySetInnerHTML":i=d;break;default:st(e,a,u,d)}if(e.push(Ir),i!=null){if(o!=null)throw Error(ye(60));if(typeof i!="object"||!("__html"in i))throw Error(ye(61));t=i.__html,t!=null&&(typeof t=="string"&&0<t.length&&t[0]===`
`?e.push(eu,Ce(t)):e.push(Ce(""+t)))}return typeof o=="string"&&o[0]===`
`&&e.push(eu),o;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Vt(n));for(var E in t)if(et.call(t,E)&&(o=t[E],o!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(ye(399,n));default:st(e,a,E,o)}return e.push(em),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Jc(e,t,n,a);case"html":return l.insertionMode===0&&e.push(HI),Jc(e,t,n,a);default:if(n.indexOf("-")===-1&&typeof t.is!="string")return Jc(e,t,n,a);e.push(Vt(n)),i=o=null;for(p in t)if(et.call(t,p)&&(d=t[p],d!=null))switch(p){case"children":o=d;break;case"dangerouslySetInnerHTML":i=d;break;case"style":fv(e,a,d);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:pv(p)&&typeof d!="function"&&typeof d!="symbol"&&e.push($r,Ce(p),ol,Ce(En(d)),ya)}return e.push(Ir),Es(e,i,o),o}}var VI=X("</"),YI=X(">"),ZI=X('<template id="'),qI=X('"></template>'),KI=X("<!--$-->"),QI=X('<!--$?--><template id="'),XI=X('"></template>'),JI=X("<!--$!-->"),eE=X("<!--/$-->"),nE=X("<template"),tE=X('"'),rE=X(' data-dgst="');X(' data-msg="');X(' data-stck="');var aE=X("></template>");function tm(e,n,t){if(re(e,QI),t===null)throw Error(ye(395));return re(e,t),Qe(e,XI)}var lE=X('<div hidden id="'),oE=X('">'),iE=X("</div>"),sE=X('<svg aria-hidden="true" style="display:none" id="'),dE=X('">'),cE=X("</svg>"),uE=X('<math aria-hidden="true" style="display:none" id="'),hE=X('">'),pE=X("</math>"),fE=X('<table hidden id="'),mE=X('">'),gE=X("</table>"),vE=X('<table hidden><tbody id="'),bE=X('">'),yE=X("</tbody></table>"),wE=X('<table hidden><tr id="'),xE=X('">'),CE=X("</tr></table>"),kE=X('<table hidden><colgroup id="'),SE=X('">'),TE=X("</colgroup></table>");function LE(e,n,t,a){switch(t.insertionMode){case 0:case 1:return re(e,lE),re(e,n.segmentPrefix),re(e,Ce(a.toString(16))),Qe(e,oE);case 2:return re(e,sE),re(e,n.segmentPrefix),re(e,Ce(a.toString(16))),Qe(e,dE);case 3:return re(e,uE),re(e,n.segmentPrefix),re(e,Ce(a.toString(16))),Qe(e,hE);case 4:return re(e,fE),re(e,n.segmentPrefix),re(e,Ce(a.toString(16))),Qe(e,mE);case 5:return re(e,vE),re(e,n.segmentPrefix),re(e,Ce(a.toString(16))),Qe(e,bE);case 6:return re(e,wE),re(e,n.segmentPrefix),re(e,Ce(a.toString(16))),Qe(e,xE);case 7:return re(e,kE),re(e,n.segmentPrefix),re(e,Ce(a.toString(16))),Qe(e,SE);default:throw Error(ye(397))}}function _E(e,n){switch(n.insertionMode){case 0:case 1:return Qe(e,iE);case 2:return Qe(e,cE);case 3:return Qe(e,pE);case 4:return Qe(e,gE);case 5:return Qe(e,yE);case 6:return Qe(e,CE);case 7:return Qe(e,TE);default:throw Error(ye(397))}}var NE=X('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),$E=X('$RS("'),IE=X('","'),EE=X('")<\/script>'),ME=X('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),AE=X('$RC("'),RE=X('","'),PE=X('")<\/script>'),OE=X('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),FE=X('$RX("'),BE=X('"'),DE=X(")<\/script>"),nu=X(","),jE=/[<\u2028\u2029]/g;function tu(e){return JSON.stringify(e).replace(jE,function(n){switch(n){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var Uo=Object.assign,zE=Symbol.for("react.element"),mv=Symbol.for("react.portal"),gv=Symbol.for("react.fragment"),vv=Symbol.for("react.strict_mode"),bv=Symbol.for("react.profiler"),yv=Symbol.for("react.provider"),wv=Symbol.for("react.context"),xv=Symbol.for("react.forward_ref"),Cv=Symbol.for("react.suspense"),kv=Symbol.for("react.suspense_list"),Sv=Symbol.for("react.memo"),of=Symbol.for("react.lazy"),WE=Symbol.for("react.scope"),UE=Symbol.for("react.debug_trace_mode"),HE=Symbol.for("react.legacy_hidden"),GE=Symbol.for("react.default_value"),rm=Symbol.iterator;function fh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gv:return"Fragment";case mv:return"Portal";case bv:return"Profiler";case vv:return"StrictMode";case Cv:return"Suspense";case kv:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wv:return(e.displayName||"Context")+".Consumer";case yv:return(e._context.displayName||"Context")+".Provider";case xv:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Sv:return n=e.displayName||null,n!==null?n:fh(e.type)||"Memo";case of:n=e._payload,e=e._init;try{return fh(e(n))}catch{}}return null}var Tv={};function am(e,n){if(e=e.contextTypes,!e)return Tv;var t={},a;for(a in e)t[a]=n[a];return t}var La=null;function Ud(e,n){if(e!==n){e.context._currentValue=e.parentValue,e=e.parent;var t=n.parent;if(e===null){if(t!==null)throw Error(ye(401))}else{if(t===null)throw Error(ye(401));Ud(e,t)}n.context._currentValue=n.value}}function Lv(e){e.context._currentValue=e.parentValue,e=e.parent,e!==null&&Lv(e)}function _v(e){var n=e.parent;n!==null&&_v(n),e.context._currentValue=e.value}function Nv(e,n){if(e.context._currentValue=e.parentValue,e=e.parent,e===null)throw Error(ye(402));e.depth===n.depth?Ud(e,n):Nv(e,n)}function $v(e,n){var t=n.parent;if(t===null)throw Error(ye(402));e.depth===t.depth?Ud(e,t):$v(e,t),n.context._currentValue=n.value}function hd(e){var n=La;n!==e&&(n===null?_v(e):e===null?Lv(n):n.depth===e.depth?Ud(n,e):n.depth>e.depth?Nv(n,e):$v(n,e),La=e)}var lm={isMounted:function(){return!1},enqueueSetState:function(e,n){e=e._reactInternals,e.queue!==null&&e.queue.push(n)},enqueueReplaceState:function(e,n){e=e._reactInternals,e.replace=!0,e.queue=[n]},enqueueForceUpdate:function(){}};function om(e,n,t,a){var l=e.state!==void 0?e.state:null;e.updater=lm,e.props=t,e.state=l;var o={queue:[],replace:!1};e._reactInternals=o;var i=n.contextType;if(e.context=typeof i=="object"&&i!==null?i._currentValue:a,i=n.getDerivedStateFromProps,typeof i=="function"&&(i=i(t,l),l=i==null?l:Uo({},l,i),e.state=l),typeof n.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(n=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),n!==e.state&&lm.enqueueReplaceState(e,e.state,null),o.queue!==null&&0<o.queue.length)if(n=o.queue,i=o.replace,o.queue=null,o.replace=!1,i&&n.length===1)e.state=n[0];else{for(o=i?n[0]:e.state,l=!0,i=i?1:0;i<n.length;i++){var d=n[i];d=typeof d=="function"?d.call(e,o,t,a):d,d!=null&&(l?(l=!1,o=Uo({},o,d)):Uo(o,d))}e.state=o}else o.queue=null}var VE={id:1,overflow:""};function mh(e,n,t){var a=e.id;e=e.overflow;var l=32-Ms(a)-1;a&=~(1<<l),t+=1;var o=32-Ms(n)+l;if(30<o){var i=l-l%5;return o=(a&(1<<i)-1).toString(32),a>>=i,l-=i,{id:1<<32-Ms(n)+l|t<<l|a,overflow:o+e}}return{id:1<<o|t<<l|a,overflow:e}}var Ms=Math.clz32?Math.clz32:qE,YE=Math.log,ZE=Math.LN2;function qE(e){return e>>>=0,e===0?32:31-(YE(e)/ZE|0)|0}function KE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var QE=typeof Object.is=="function"?Object.is:KE,yr=null,sf=null,As=null,He=null,Io=!1,pd=!1,pi=0,Br=null,Hd=0;function wa(){if(yr===null)throw Error(ye(321));return yr}function im(){if(0<Hd)throw Error(ye(312));return{memoizedState:null,queue:null,next:null}}function df(){return He===null?As===null?(Io=!1,As=He=im()):(Io=!0,He=As):He.next===null?(Io=!1,He=He.next=im()):(Io=!0,He=He.next),He}function cf(){sf=yr=null,pd=!1,As=null,Hd=0,He=Br=null}function Iv(e,n){return typeof n=="function"?n(e):n}function sm(e,n,t){if(yr=wa(),He=df(),Io){var a=He.queue;if(n=a.dispatch,Br!==null&&(t=Br.get(a),t!==void 0)){Br.delete(a),a=He.memoizedState;do a=e(a,t.action),t=t.next;while(t!==null);return He.memoizedState=a,[a,n]}return[He.memoizedState,n]}return e=e===Iv?typeof n=="function"?n():n:t!==void 0?t(n):n,He.memoizedState=e,e=He.queue={last:null,dispatch:null},e=e.dispatch=XE.bind(null,yr,e),[He.memoizedState,e]}function dm(e,n){if(yr=wa(),He=df(),n=n===void 0?null:n,He!==null){var t=He.memoizedState;if(t!==null&&n!==null){var a=t[1];e:if(a===null)a=!1;else{for(var l=0;l<a.length&&l<n.length;l++)if(!QE(n[l],a[l])){a=!1;break e}a=!0}if(a)return t[0]}}return e=e(),He.memoizedState=[e,n],e}function XE(e,n,t){if(25<=Hd)throw Error(ye(301));if(e===yr)if(pd=!0,e={action:t,next:null},Br===null&&(Br=new Map),t=Br.get(n),t===void 0)Br.set(n,e);else{for(n=t;n.next!==null;)n=n.next;n.next=e}}function JE(){throw Error(ye(394))}function ss(){}var cm={readContext:function(e){return e._currentValue},useContext:function(e){return wa(),e._currentValue},useMemo:dm,useReducer:sm,useRef:function(e){yr=wa(),He=df();var n=He.memoizedState;return n===null?(e={current:e},He.memoizedState=e):n},useState:function(e){return sm(Iv,e)},useInsertionEffect:ss,useLayoutEffect:function(){},useCallback:function(e,n){return dm(function(){return e},n)},useImperativeHandle:ss,useEffect:ss,useDebugValue:ss,useDeferredValue:function(e){return wa(),e},useTransition:function(){return wa(),[!1,JE]},useId:function(){var e=sf.treeContext,n=e.overflow;e=e.id,e=(e&~(1<<32-Ms(e)-1)).toString(32)+n;var t=Rs;if(t===null)throw Error(ye(404));return n=pi++,e=":"+t.idPrefix+"R"+e,0<n&&(e+="H"+n.toString(32)),e+":"},useMutableSource:function(e,n){return wa(),n(e._source)},useSyncExternalStore:function(e,n,t){if(t===void 0)throw Error(ye(407));return t()}},Rs=null,ru=cv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function eM(e){return console.error(e),null}function Eo(){}function nM(e,n,t,a,l,o,i,d,u){var p=[],g=new Set;return n={destination:null,responseState:n,progressiveChunkSize:a===void 0?12800:a,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:g,pingedTasks:p,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:l===void 0?eM:l,onAllReady:o===void 0?Eo:o,onShellReady:i===void 0?Eo:i,onShellError:d===void 0?Eo:d,onFatalError:u===void 0?Eo:u},t=fd(n,0,null,t,!1,!1),t.parentFlushed=!0,e=uf(n,e,null,t,g,Tv,null,VE),p.push(e),n}function uf(e,n,t,a,l,o,i,d){e.allPendingTasks++,t===null?e.pendingRootTasks++:t.pendingTasks++;var u={node:n,ping:function(){var p=e.pingedTasks;p.push(u),p.length===1&&Av(e)},blockedBoundary:t,blockedSegment:a,abortSet:l,legacyContext:o,context:i,treeContext:d};return l.add(u),u}function fd(e,n,t,a,l,o){return{status:0,id:-1,index:n,parentFlushed:!1,chunks:[],children:[],formatContext:a,boundary:t,lastPushedText:l,textEmbedded:o}}function fi(e,n){if(e=e.onError(n),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function md(e,n){var t=e.onShellError;t(n),t=e.onFatalError,t(n),e.destination!==null?(e.status=2,hv(e.destination,n)):(e.status=1,e.fatalError=n)}function um(e,n,t,a,l){for(yr={},sf=n,pi=0,e=t(a,l);pd;)pd=!1,pi=0,Hd+=1,He=null,e=t(a,l);return cf(),e}function hm(e,n,t,a){var l=t.render(),o=a.childContextTypes;if(o!=null){var i=n.legacyContext;if(typeof t.getChildContext!="function")a=i;else{t=t.getChildContext();for(var d in t)if(!(d in o))throw Error(ye(108,fh(a)||"Unknown",d));a=Uo({},i,t)}n.legacyContext=a,pt(e,n,l),n.legacyContext=i}else pt(e,n,l)}function pm(e,n){if(e&&e.defaultProps){n=Uo({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function gh(e,n,t,a,l){if(typeof t=="function")if(t.prototype&&t.prototype.isReactComponent){l=am(t,n.legacyContext);var o=t.contextType;o=new t(a,typeof o=="object"&&o!==null?o._currentValue:l),om(o,t,a,l),hm(e,n,o,t)}else{o=am(t,n.legacyContext),l=um(e,n,t,a,o);var i=pi!==0;if(typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0)om(l,t,a,o),hm(e,n,l,t);else if(i){a=n.treeContext,n.treeContext=mh(a,1,0);try{pt(e,n,l)}finally{n.treeContext=a}}else pt(e,n,l)}else if(typeof t=="string"){switch(l=n.blockedSegment,o=GI(l.chunks,t,a,e.responseState,l.formatContext),l.lastPushedText=!1,i=l.formatContext,l.formatContext=DI(i,t,a),vh(e,n,o),l.formatContext=i,t){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:l.chunks.push(VI,Ce(t),YI)}l.lastPushedText=!1}else{switch(t){case HE:case UE:case vv:case bv:case gv:pt(e,n,a.children);return;case kv:pt(e,n,a.children);return;case WE:throw Error(ye(343));case Cv:e:{t=n.blockedBoundary,l=n.blockedSegment,o=a.fallback,a=a.children,i=new Set;var d={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:i,errorDigest:null},u=fd(e,l.chunks.length,d,l.formatContext,!1,!1);l.children.push(u),l.lastPushedText=!1;var p=fd(e,0,null,l.formatContext,!1,!1);p.parentFlushed=!0,n.blockedBoundary=d,n.blockedSegment=p;try{if(vh(e,n,a),p.lastPushedText&&p.textEmbedded&&p.chunks.push(lf),p.status=1,gd(d,p),d.pendingTasks===0)break e}catch(g){p.status=4,d.forceClientRender=!0,d.errorDigest=fi(e,g)}finally{n.blockedBoundary=t,n.blockedSegment=l}n=uf(e,o,t,u,i,n.legacyContext,n.context,n.treeContext),e.pingedTasks.push(n)}return}if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xv:if(a=um(e,n,t.render,a,l),pi!==0){t=n.treeContext,n.treeContext=mh(t,1,0);try{pt(e,n,a)}finally{n.treeContext=t}}else pt(e,n,a);return;case Sv:t=t.type,a=pm(t,a),gh(e,n,t,a,l);return;case yv:if(l=a.children,t=t._context,a=a.value,o=t._currentValue,t._currentValue=a,i=La,La=a={parent:i,depth:i===null?0:i.depth+1,context:t,parentValue:o,value:a},n.context=a,pt(e,n,l),e=La,e===null)throw Error(ye(403));a=e.parentValue,e.context._currentValue=a===GE?e.context._defaultValue:a,e=La=e.parent,n.context=e;return;case wv:a=a.children,a=a(t._currentValue),pt(e,n,a);return;case of:l=t._init,t=l(t._payload),a=pm(t,a),gh(e,n,t,a,void 0);return}throw Error(ye(130,t==null?t:typeof t,""))}}function pt(e,n,t){if(n.node=t,typeof t=="object"&&t!==null){switch(t.$$typeof){case zE:gh(e,n,t.type,t.props,t.ref);return;case mv:throw Error(ye(257));case of:var a=t._init;t=a(t._payload),pt(e,n,t);return}if(ph(t)){fm(e,n,t);return}if(t===null||typeof t!="object"?a=null:(a=rm&&t[rm]||t["@@iterator"],a=typeof a=="function"?a:null),a&&(a=a.call(t))){if(t=a.next(),!t.done){var l=[];do l.push(t.value),t=a.next();while(!t.done);fm(e,n,l)}return}throw e=Object.prototype.toString.call(t),Error(ye(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}typeof t=="string"?(a=n.blockedSegment,a.lastPushedText=K0(n.blockedSegment.chunks,t,e.responseState,a.lastPushedText)):typeof t=="number"&&(a=n.blockedSegment,a.lastPushedText=K0(n.blockedSegment.chunks,""+t,e.responseState,a.lastPushedText))}function fm(e,n,t){for(var a=t.length,l=0;l<a;l++){var o=n.treeContext;n.treeContext=mh(o,a,l);try{vh(e,n,t[l])}finally{n.treeContext=o}}}function vh(e,n,t){var a=n.blockedSegment.formatContext,l=n.legacyContext,o=n.context;try{return pt(e,n,t)}catch(u){if(cf(),typeof u=="object"&&u!==null&&typeof u.then=="function"){t=u;var i=n.blockedSegment,d=fd(e,i.chunks.length,null,i.formatContext,i.lastPushedText,!0);i.children.push(d),i.lastPushedText=!1,e=uf(e,n.node,n.blockedBoundary,d,n.abortSet,n.legacyContext,n.context,n.treeContext).ping,t.then(e,e),n.blockedSegment.formatContext=a,n.legacyContext=l,n.context=o,hd(o)}else throw n.blockedSegment.formatContext=a,n.legacyContext=l,n.context=o,hd(o),u}}function tM(e){var n=e.blockedBoundary;e=e.blockedSegment,e.status=3,Mv(this,n,e)}function Ev(e,n,t){var a=e.blockedBoundary;e.blockedSegment.status=3,a===null?(n.allPendingTasks--,n.status!==2&&(n.status=2,n.destination!==null&&n.destination.close())):(a.pendingTasks--,a.forceClientRender||(a.forceClientRender=!0,e=t===void 0?Error(ye(432)):t,a.errorDigest=n.onError(e),a.parentFlushed&&n.clientRenderedBoundaries.push(a)),a.fallbackAbortableTasks.forEach(function(l){return Ev(l,n,t)}),a.fallbackAbortableTasks.clear(),n.allPendingTasks--,n.allPendingTasks===0&&(a=n.onAllReady,a()))}function gd(e,n){if(n.chunks.length===0&&n.children.length===1&&n.children[0].boundary===null){var t=n.children[0];t.id=n.id,t.parentFlushed=!0,t.status===1&&gd(e,t)}else e.completedSegments.push(n)}function Mv(e,n,t){if(n===null){if(t.parentFlushed){if(e.completedRootSegment!==null)throw Error(ye(389));e.completedRootSegment=t}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=Eo,n=e.onShellReady,n())}else n.pendingTasks--,n.forceClientRender||(n.pendingTasks===0?(t.parentFlushed&&t.status===1&&gd(n,t),n.parentFlushed&&e.completedBoundaries.push(n),n.fallbackAbortableTasks.forEach(tM,e),n.fallbackAbortableTasks.clear()):t.parentFlushed&&t.status===1&&(gd(n,t),n.completedSegments.length===1&&n.parentFlushed&&e.partialBoundaries.push(n)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function Av(e){if(e.status!==2){var n=La,t=ru.current;ru.current=cm;var a=Rs;Rs=e.responseState;try{var l=e.pingedTasks,o;for(o=0;o<l.length;o++){var i=l[o],d=e,u=i.blockedSegment;if(u.status===0){hd(i.context);try{pt(d,i,i.node),u.lastPushedText&&u.textEmbedded&&u.chunks.push(lf),i.abortSet.delete(i),u.status=1,Mv(d,i.blockedBoundary,u)}catch(I){if(cf(),typeof I=="object"&&I!==null&&typeof I.then=="function"){var p=i.ping;I.then(p,p)}else{i.abortSet.delete(i),u.status=4;var g=i.blockedBoundary,y=I,C=fi(d,y);if(g===null?md(d,y):(g.pendingTasks--,g.forceClientRender||(g.forceClientRender=!0,g.errorDigest=C,g.parentFlushed&&d.clientRenderedBoundaries.push(g))),d.allPendingTasks--,d.allPendingTasks===0){var E=d.onAllReady;E()}}}finally{}}}l.splice(0,o),e.destination!==null&&hf(e,e.destination)}catch(I){fi(e,I),md(e,I)}finally{Rs=a,ru.current=t,t===cm&&hd(n)}}}function ds(e,n,t){switch(t.parentFlushed=!0,t.status){case 0:var a=t.id=e.nextSegmentId++;return t.lastPushedText=!1,t.textEmbedded=!1,e=e.responseState,re(n,ZI),re(n,e.placeholderPrefix),e=Ce(a.toString(16)),re(n,e),Qe(n,qI);case 1:t.status=2;var l=!0;a=t.chunks;var o=0;t=t.children;for(var i=0;i<t.length;i++){for(l=t[i];o<l.index;o++)re(n,a[o]);l=Gd(e,n,l)}for(;o<a.length-1;o++)re(n,a[o]);return o<a.length&&(l=Qe(n,a[o])),l;default:throw Error(ye(390))}}function Gd(e,n,t){var a=t.boundary;if(a===null)return ds(e,n,t);if(a.parentFlushed=!0,a.forceClientRender)a=a.errorDigest,Qe(n,JI),re(n,nE),a&&(re(n,rE),re(n,Ce(En(a))),re(n,tE)),Qe(n,aE),ds(e,n,t);else if(0<a.pendingTasks){a.rootSegmentID=e.nextSegmentId++,0<a.completedSegments.length&&e.partialBoundaries.push(a);var l=e.responseState,o=l.nextSuspenseID++;l=X(l.boundaryPrefix+o.toString(16)),a=a.id=l,tm(n,e.responseState,a),ds(e,n,t)}else if(a.byteSize>e.progressiveChunkSize)a.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(a),tm(n,e.responseState,a.id),ds(e,n,t);else{if(Qe(n,KI),t=a.completedSegments,t.length!==1)throw Error(ye(391));Gd(e,n,t[0])}return Qe(n,eE)}function mm(e,n,t){return LE(n,e.responseState,t.formatContext,t.id),Gd(e,n,t),_E(n,t.formatContext)}function gm(e,n,t){for(var a=t.completedSegments,l=0;l<a.length;l++)Rv(e,n,t,a[l]);if(a.length=0,e=e.responseState,a=t.id,t=t.rootSegmentID,re(n,e.startInlineScript),e.sentCompleteBoundaryFunction?re(n,AE):(e.sentCompleteBoundaryFunction=!0,re(n,ME)),a===null)throw Error(ye(395));return t=Ce(t.toString(16)),re(n,a),re(n,RE),re(n,e.segmentPrefix),re(n,t),Qe(n,PE)}function Rv(e,n,t,a){if(a.status===2)return!0;var l=a.id;if(l===-1){if((a.id=t.rootSegmentID)===-1)throw Error(ye(392));return mm(e,n,a)}return mm(e,n,a),e=e.responseState,re(n,e.startInlineScript),e.sentCompleteSegmentFunction?re(n,$E):(e.sentCompleteSegmentFunction=!0,re(n,NE)),re(n,e.segmentPrefix),l=Ce(l.toString(16)),re(n,l),re(n,IE),re(n,e.placeholderPrefix),re(n,l),Qe(n,EE)}function hf(e,n){ut=new Uint8Array(512),ht=0;try{var t=e.completedRootSegment;if(t!==null&&e.pendingRootTasks===0){Gd(e,n,t),e.completedRootSegment=null;var a=e.responseState.bootstrapChunks;for(t=0;t<a.length-1;t++)re(n,a[t]);t<a.length&&Qe(n,a[t])}var l=e.clientRenderedBoundaries,o;for(o=0;o<l.length;o++){var i=l[o];a=n;var d=e.responseState,u=i.id,p=i.errorDigest,g=i.errorMessage,y=i.errorComponentStack;if(re(a,d.startInlineScript),d.sentClientRenderFunction?re(a,FE):(d.sentClientRenderFunction=!0,re(a,OE)),u===null)throw Error(ye(395));re(a,u),re(a,BE),(p||g||y)&&(re(a,nu),re(a,Ce(tu(p||"")))),(g||y)&&(re(a,nu),re(a,Ce(tu(g||"")))),y&&(re(a,nu),re(a,Ce(tu(y)))),Qe(a,DE)}l.splice(0,o);var C=e.completedBoundaries;for(o=0;o<C.length;o++)gm(e,n,C[o]);C.splice(0,o),V0(n),ut=new Uint8Array(512),ht=0;var E=e.partialBoundaries;for(o=0;o<E.length;o++){var I=E[o];e:{l=e,i=n;var k=I.completedSegments;for(d=0;d<k.length;d++)if(!Rv(l,i,I,k[d])){d++,k.splice(0,d);var M=!1;break e}k.splice(0,d),M=!0}if(!M){e.destination=null,o++,E.splice(0,o);return}}E.splice(0,o);var w=e.completedBoundaries;for(o=0;o<w.length;o++)gm(e,n,w[o]);w.splice(0,o)}finally{V0(n),e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&n.close()}}function vm(e,n){try{var t=e.abortableTasks;t.forEach(function(a){return Ev(a,e,n)}),t.clear(),e.destination!==null&&hf(e,e.destination)}catch(a){fi(e,a),md(e,a)}}tf.renderToReadableStream=function(e,n){return new Promise(function(t,a){var l,o,i=new Promise(function(g,y){o=g,l=y}),d=nM(e,FI(n?n.identifierPrefix:void 0,n?n.nonce:void 0,n?n.bootstrapScriptContent:void 0,n?n.bootstrapScripts:void 0,n?n.bootstrapModules:void 0),BI(n?n.namespaceURI:void 0),n?n.progressiveChunkSize:void 0,n?n.onError:void 0,o,function(){var g=new ReadableStream({type:"bytes",pull:function(y){if(d.status===1)d.status=2,hv(y,d.fatalError);else if(d.status!==2&&d.destination===null){d.destination=y;try{hf(d,y)}catch(C){fi(d,C),md(d,C)}}},cancel:function(){vm(d)}},{highWaterMark:0});g.allReady=i,t(g)},function(g){i.catch(function(){}),a(g)},l);if(n&&n.signal){var u=n.signal,p=function(){vm(d,u.reason),u.removeEventListener("abort",p)};u.addEventListener("abort",p)}Av(d)})};tf.version="18.2.0";var Yl,Pv;Yl=Vl,Pv=tf;Yl.version;var rM=Yl.renderToString;Yl.renderToStaticMarkup;Yl.renderToNodeStream;Yl.renderToStaticNodeStream;Pv.renderToReadableStream;var Ov={exports:{}},aM="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",lM=aM,oM=lM;function Fv(){}function Bv(){}Bv.resetWarningCache=Fv;var iM=function(){function e(a,l,o,i,d,u){if(u!==oM){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:Bv,resetWarningCache:Fv};return t.PropTypes=t,t};Ov.exports=iM();var sM=Ov.exports;const Bt=Xt(sM);var dM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dv(e,n){return e(n={exports:{}},n.exports),n.exports}var cM=Dv(function(e){(function(n){var t=function(M,w,m){if(!u(w)||g(w)||y(w)||C(w)||d(w))return w;var b,v=0,N=0;if(p(w))for(b=[],N=w.length;v<N;v++)b.push(t(M,w[v],m));else for(var T in b={},w)Object.prototype.hasOwnProperty.call(w,T)&&(b[M(T,m)]=t(M,w[T],m));return b},a=function(M){return E(M)?M:(M=M.replace(/[\-_\s]+(.)?/g,function(w,m){return m?m.toUpperCase():""})).substr(0,1).toLowerCase()+M.substr(1)},l=function(M){var w=a(M);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(M,w){return function(m,b){var v=(b=b||{}).separator||"_",N=b.split||/(?=[A-Z])/;return m.split(N).join(v)}(M,w).toLowerCase()},i=Object.prototype.toString,d=function(M){return typeof M=="function"},u=function(M){return M===Object(M)},p=function(M){return i.call(M)=="[object Array]"},g=function(M){return i.call(M)=="[object Date]"},y=function(M){return i.call(M)=="[object RegExp]"},C=function(M){return i.call(M)=="[object Boolean]"},E=function(M){return(M-=0)==M},I=function(M,w){var m=w&&"process"in w?w.process:w;return typeof m!="function"?M:function(b,v){return m(b,M,v)}},k={camelize:a,decamelize:o,pascalize:l,depascalize:o,camelizeKeys:function(M,w){return t(I(a,w),M)},decamelizeKeys:function(M,w){return t(I(o,w),M,w)},pascalizeKeys:function(M,w){return t(I(l,w),M)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=k:n.humps=k})(dM)}).decamelize,uM=function(e){if(Array.isArray(e))return e},hM=function(e,n){if(typeof Symbol<"u"&&Symbol.iterator in Object(e)){var t=[],a=!0,l=!1,o=void 0;try{for(var i,d=e[Symbol.iterator]();!(a=(i=d.next()).done)&&(t.push(i.value),!n||t.length!==n);a=!0);}catch(u){l=!0,o=u}finally{try{a||d.return==null||d.return()}finally{if(l)throw o}}return t}},bm=function(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a},pM=function(e,n){if(e){if(typeof e=="string")return bm(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?bm(e,n):void 0}},fM=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},mM=function(e,n){return uM(e)||hM(e,n)||pM(e,n)||fM()},jv=Dv(function(e){function n(){return e.exports=n=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o])}return t},n.apply(this,arguments)}e.exports=n}),gM=function(e,n){if(e==null)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l},zv=function(e,n){if(e==null)return{};var t,a,l=gM(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l},vM=D.createContext(null);function bh(e){var n=e.children,t=zv(e,["children"]);return typeof n!="string"&&(n=rM(n)),In.createElement("template",jv({},t,{dangerouslySetInnerHTML:{__html:n}}))}function yh(e){var n=e.root,t=e.children;return P5.createPortal(t,n)}function bM(e){var n=D.forwardRef(function(t,a){var l,o,i=t.mode,d=t.delegatesFocus,u=t.styleSheets,p=t.ssr,g=t.children,y=zv(t,["mode","delegatesFocus","styleSheets","ssr","children"]),C=(o=D.useRef((l=a)&&l.current),D.useEffect(function(){l&&(l.current=o.current)},[l]),o),E=D.useState(null),I=mM(E,2),k=I[0],M=I[1],w="node_".concat(i).concat(d);return D.useLayoutEffect(function(){if(C.current)try{if(typeof a=="function"&&a(C.current),p){var m=C.current.shadowRoot;return void M(m)}var b=C.current.attachShadow({mode:i,delegatesFocus:d});u.length>0&&(b.adoptedStyleSheets=u),M(b)}catch(v){(function(N){var T=N.error,P=N.styleSheets,F=N.root;switch(T.name){case"NotSupportedError":P.length>0&&(F.adoptedStyleSheets=P);break;default:throw T}})({error:v,styleSheets:u,root:k})}},[a,C,u]),In.createElement(In.Fragment,null,In.createElement(e.tag,jv({key:w,ref:C},y),(k||p)&&In.createElement(vM.Provider,{value:k},p?In.createElement(bh,{shadowroot:"open"},e.render({root:k,ssr:p,children:g})):In.createElement(yh,{root:k},e.render({root:k,ssr:p,children:g})))))});return n.propTypes={mode:Bt.oneOf(["open","closed"]),delegatesFocus:Bt.bool,styleSheets:Bt.arrayOf(Bt.instanceOf(globalThis.CSSStyleSheet)),ssr:Bt.bool,children:Bt.node},n.defaultProps={mode:"open",delegatesFocus:!1,styleSheets:[],ssr:!1,children:null},n}bh.propTypes={children:Bt.oneOfType([Bt.string,Bt.node])},bh.defaultProps={children:""},yh.propTypes={root:Bt.object.isRequired,children:Bt.node},yh.defaultProps={children:null};var au=new Map;function yM(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"core",t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(a){return a.children};return new Proxy(e,{get:function(a,l){var o=cM(l,{separator:"-"}),i="".concat(n,"-").concat(o);return au.has(i)||au.set(i,bM({tag:o,render:t})),au.get(i)}})}var wM=yM();const xM=()=>s("div",{className:"prose",children:[r("h1",{children:"Forms"}),s("blockquote",{className:"intro",children:["There is something about styling forms, that's so not fun. It's like ",r("em",{children:'"How much less fun could this be?"'})," ","and the answer is ",r("em",{children:'"None, none... less fun."'}),r("div",{className:"attrib",children:"Nigel Tufnel's website designer"})]}),r("h2",{children:"None Less Fun"}),s(ae,{children:[s("div",{children:[r("p",{children:"Anyone reading this who is old enough to have served in the browser wars will no doubt be rolling their eyes at this point, thinking that kids these days don't know how lucky they are."}),s("p",{children:["It's certainly true that things are ",r("i",{children:"much"})," better than they used.  But despite all the advances in CSS support and cross-browser compatibility, the default styling for HTML forms still looks like 1995 called and asked for its website back."]})]}),s("div",{children:[r("p",{children:"Badger CSS includes form styling presets, supporting both light and dark themes out of the box. It uses native form components for accessibility and mobile friendliness.  Everything is configurable if you want to change things, but you don't have to."}),r("p",{children:"Here's the same form rendered twice.  Once with the default HTML styling and again with the default Badger CSS styles.  In case you're wondering, there's no Javascript in any of these forms.  It's all just vanilla HTML and CSS."})]})]}),s("div",{className:"grid-2 gap-8 mar-t-10 stack-desktop",children:[s("div",{className:"output",children:[r("h3",{className:"mar-v",children:"Default HTML Form Styles"}),r("h4",{className:"mar-t mar-b-8",children:"Would you been seen holding this?"}),r(wM.div,{children:r("div",{dangerouslySetInnerHTML:{__html:T0}})})]}),s("div",{className:"output",children:[r("h3",{className:"mar-v",children:"Badger CSS Form Styles"}),r("h4",{className:"mar-t mar-b-8",children:"Beautiful plumage!"}),r("div",{dangerouslySetInnerHTML:{__html:T0}})]})]}),r("h2",{className:"mar-t-8",children:"Adaptive Sizes"}),s(ae,{children:[s("p",{children:["All form components are sized using ems and will adapt to whatever the current text size is.  If you want a small form, for example, then you just need to add a ",r("code",{children:"small"})," class to the form or one of its parent containers."]}),r(Kr,{title:"Try it out",className:"mar-t-4",children:"Try selecting different sizes from the options below and see how the form inputs scale."})]}),r(V$,{}),r("h2",{children:"Accessibility and Focus"}),s(ae,{children:[r("p",{children:"If you've played with any of the forms above you may have noticed the prominent ring around inputs when focussed.  This is important for accessibility to clearly indicate which field is selected."}),s("p",{children:["If for some reason you really, really need to disabled it because you're indicating the focus some other way then you can add the"," ",r("code",{children:"no-focus"})," class to the inputs."]})]}),r(_,{html:U$,language:"html"}),r("h2",{children:"Themes and Surfaces"}),s(ae,{children:[r("p",{children:"Styling forms is made that much harder these days by the need to support both light and dark themes.  On top of that we might want to have forms included on different surfaces with varying levels of background intensity. Thanks to the magic of CSS custom properties we can tweak the colors used to render forms depending on the background color of the container."}),r("p",{children:"In these examples below it may not be immediately obvious that the colors are slightly different but they are.  They're different so that they look more-or-less the same, while providing adequate contrast."})]}),r("div",{className:"grid-3 gap-4 stack-widescreen mar-b-8",children:["surface","surface-1","surface-2","surface-3","surface-4","surface-5"].map(e=>s("div",{className:`${e} pad-6 border shadow-2`,children:[r("h3",{className:"font-mono mar-b-3",children:e}),r("div",{dangerouslySetInnerHTML:{__html:W$}})]},e))})]}),CM=Object.freeze(Object.defineProperty({__proto__:null,default:xM},Symbol.toStringTag,{value:"Module"})),kM=`<div class="input">
  Ceci n'est pas une entrée
</div>
`,SM=`<div class="input inline">
  Ceci n'est pas une entrée
</div>
`,TM=`<div class="input no-hover">
  Ceci n'est pas une entrée
</div>
`,LM=`<div class="grid-2 gap-4">
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
`,_M=`<div class="input" disabled>
  Ceci n'est pas une entrée
</div>

<div class="input disabled mar-t-4">
  Ceci n'est pas une entrée
</div>
`,NM=()=>s("div",{className:"prose",children:[r("h1",{children:"Fake Input"}),s("p",{children:["If you want something that isn't an input to look like an input then you can add the ",r("code",{children:"input"})," CSS class."]}),r(_,{html:kM,language:"html",caption:"Inline Text Input"}),r("h2",{children:"Inline Input"}),s("p",{children:["Just like regular inputs, they are full-width by default. Add the ",r("code",{children:"inline"})," class to give it a fluid width."]}),r(_,{html:SM,language:"html",caption:"Inline Text Input"}),r("h2",{children:"No Hover"}),s("p",{children:["Add the ",r("code",{children:"no-hover"})," class if you don't want it to change appearance on hover."]}),r(_,{html:TM,language:"html",caption:"No Hover"}),r("h2",{children:"Grid and Flex Layout"}),s("p",{children:["You can also use the ",r(ta,{})," and ",r(Cr,{})," classes to control layout."]}),r(_,{html:LM,language:"html",caption:"Grid and Flex"}),r("h2",{children:"Disabled Inputs"}),s("p",{children:["Add the ",r("code",{children:"disabled"})," attribute or CSS class if you want it to look disabled."]}),r(_,{html:_M,language:"html",caption:"Not an Input"})]}),$M=Object.freeze(Object.defineProperty({__proto__:null,default:NM},Symbol.toStringTag,{value:"Module"})),IM=`<style>
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
</div>`,EM=`<style>
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
</div>`,MM=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Multiple Input"}),r("p",{children:"Sometimes you need to create a form component that looks like a single input but is comprised of multiple inputs or other elements."}),s("p",{children:["In this case you can wrap them up in a container with the ",r("code",{children:"inputs"})," class.  See the"," ",r(ur,{to:"/forms/prefix-suffix",text:"Prefix and Suffix"})," page for details on adding the prefix icon."]}),r("h2",{children:"Credit Card Number"}),r("p",{children:"In this example we create an input for a credit card number. This demo doesn't have any interactive functionality and leaves a lot to be desired in terms of user experience.  For example, you can enter more than 4 numbers in each section, the focus doesn't automatically switch from one block to the next, and so on. But this is only supposed to be a demonstration of the styling, not the functionality."}),r("p",{children:"Making it work properly is left as an exercise for the reader."}),r(_,{html:IM,language:"html",caption:"Credit Card"}),r("h2",{children:"Date"}),r("p",{children:"This is also a less-than-perfect implementation in terms of functionality, but it demonstrates the form."}),r(_,{html:EM,language:"html",caption:"Date"})]}),AM=Object.freeze(Object.defineProperty({__proto__:null,default:MM},Symbol.toStringTag,{value:"Module"})),RM=`<div class="field">
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
`,PM=`<div class="grid-3 gap-4 stack-tablet">
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

`,OM=`<div class="grid-3 gap-4 stack-tablet">
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

`,FM=`<div class="grid-3 gap-4 stack-tablet">
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

`,BM=`<div class="field">
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
`,DM=`<div class="field">
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
`,jM=`<div class="field">
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

`,zM=`<div class="field">
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

`,WM=`<div class="field">
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
`,UM=`<div class="field">
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
`,HM=`<div class="field">
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
`,GM=`<div class="field">
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
`,VM=`<div class="field">
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
`,YM=()=>s("div",{className:"prose",children:[r("h1",{children:"Prefix and Suffix"}),s("p",{children:["You can add prefixes and suffixes to form fields, or any combination of ",r(ur,{to:"/forms/multi-inputs",text:"inputs"}),". Not only do the colours and focus rings work correctly, but they also adapt their colors for ",r("code",{children:"valid"})," and ",r("code",{children:"invalid"})," fields."]}),r(_,{html:RM,language:"html",caption:"Prefix and Suffix"}),r("h2",{children:"Shaded"}),s("p",{children:["To visually distinguish a prefix or suffix you you can add the ",r("code",{children:"shaded"})," class..."]}),r(_,{html:PM,language:"html",caption:"Shaded"}),r("h2",{children:"Lined"}),s("p",{children:["...or the ",r("code",{children:"lined"})," class."]}),r(_,{html:OM,language:"html",caption:"Lined"}),r("h2",{children:"Shaded and Lined"}),r("p",{children:"...or both."}),r(_,{html:FM,language:"html",caption:"Shaded and Lined"}),r("h2",{children:"Input Prefix"}),s("p",{children:["If you want to add a prefix to a field you should enclose the input in an element with the ",r("code",{children:"inputs"})," class and add the"," ",r("code",{children:"prefix"})," class to the prefix element.  You can add a prefix to a text input, textarea, select or a checkbox or radio option with the ",r("code",{children:"border"})," class set.  You can try it without the "," ",r("code",{children:"border"})," but the effect is lost somewhat."]}),r("h3",{children:"Text Input With Prefix"}),r(_,{html:BM,language:"html",caption:"Text Prefix"}),r("h3",{children:"Text Area Input With Prefix"}),r(_,{html:DM,language:"html",caption:"Text Area Prefix"}),r("h3",{children:"Select Input With Prefix"}),r(_,{html:jM,language:"html",caption:"Select Prefix"}),r("h3",{children:"Checkbox With Prefix"}),s("p",{children:["This only really works with checkboxes that have the"," ",r("code",{children:"border"})," class"]}),r(_,{html:zM,language:"html",caption:"Checkbox Prefix"}),r("h3",{children:"Fake Input"}),s("p",{children:["Instead of an input you can add the ",r("code",{children:"input"})," CSS class to any element."]}),r(_,{html:WM,language:"html",caption:"Fake Input Prefix"}),r("h2",{children:"Input Suffix"}),s("p",{children:["Adding an input suffix is just the same, except for giving your suffix element the ",r("code",{children:"suffix"})," class and putting it after the input."]}),r("h3",{children:"Text Input With Suffix"}),r(_,{html:UM,language:"html",caption:"Text Suffix"}),r("h3",{children:"Text Area Input With Suffix"}),r(_,{html:HM,language:"html",caption:"Text Area Suffix"}),r("h3",{children:"Select Input With Suffix"}),r(_,{html:GM,language:"html",caption:"Select Suffix"}),r("h3",{children:"Checkbox With Suffix"}),s("p",{children:["This only really works with checkboxes that have the"," ",r("code",{children:"border"})," class"]}),r(_,{html:VM,language:"html",caption:"Checkbox Suffix"})]}),ZM=Object.freeze(Object.defineProperty({__proto__:null,default:YM},Symbol.toStringTag,{value:"Module"})),qM=`<label>
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
`,KM=`<label class="inline radio">
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
`,QM=`<label class="inline border">
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
`,XM=`<div>
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
</div>`,JM=()=>s("div",{className:"prose",children:[r("h1",{children:"Radio Buttons"}),r("h2",{children:"Radio Class"}),s("p",{children:["Radio buttons are implemented much like"," ",r(jT,{text:"checkboxes"}),".  Create a"," ",r("code",{children:"label"})," enclosing an ",r("code",{children:"input"})," with the"," ",r("code",{children:'type="radio"'})," attribute."]}),s("p",{children:["Badger-CSS identifies labels that include a radio button input using the ",r("code",{children:":has()"})," CSS selector. All the major browsers currently support it, although Firefox was a bit late to the party, only adding support in v121 released on 19th December 2023."]}),s("p",{children:["As a work-around to support older versions of Firefox, you can add the ",r("code",{children:"radio"})," class to the ",r("code",{children:"label"}),"."]}),r(_,{html:qM,language:"html",caption:"Radio Buttons"}),r("h2",{children:"Inline Radio Buttons"}),s("p",{children:["Radio buttons are full-width by default. Add the ",r("code",{children:"inline"})," class to give them a fluid width."]}),r(_,{html:KM,language:"html",caption:"Inline Radio Buttons"}),r("h2",{children:"Radio Button Borders"}),s("p",{children:["Add the ",r("code",{children:"border"})," class for borders.  You may need to manually add margins using the ",r(Bd,{text:"margin"})," utility classes, or contain multiple checkboxes using the "," ",r(Cr,{})," or ",r(ta,{})," container classes and set the gap between elements."]}),r(_,{html:QM,language:"html",caption:"Border Radio Buttons"}),r("h2",{children:"Custom Radio Buttons"}),r(_,{html:XM,language:"html",caption:"Custom Checkboxes"})]}),eA=Object.freeze(Object.defineProperty({__proto__:null,default:JM},Symbol.toStringTag,{value:"Module"})),nA=`<select name="animal">
  <option value="">-- Choose an animal --</option>
  <option value="ant">Ant</option>
  <option value="badger">Badger</option>
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
  <option value="elephant">Elephant</option>
  <option value="ferret">Ferret</option>
  <option value="goldfish" disabled>Goldfish</option>
</select>
`,tA=`<select name="animal" class="inline">
  <option value="badger">Badger</option>
  <option value="mushroom">Mushroom</option>
  <option value="snake">Snake</option>
</select>
<select name="color" class="inline mar-l-2">
  <option value="badger">Badger</option>
  <option value="mushroom">Mushroom</option>
  <option value="snake">Snake</option>
</select>
`,rA=`<div class="grid-2 gap-4">
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
`,aA=`<select name="animal" required>
  <option value="" hidden disabled selected>Choose an animal</option>
  <option value="ant">Ant</option>
  <option value="badger">Badger</option>
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
  <option value="elephant">Elephant</option>
  <option value="ferret">Ferret</option>
  <option value="goldfish">Goldfish</option>
</select>
`,lA=`<div class="small flex top gap-4 mar-b-4">
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
`,oA=`<select name="animal">
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
`,iA=`<div>
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

`,sA=()=>s("div",{className:"prose",children:[r("h1",{children:"Select Input"}),r("p",{children:"Select inputs are the bane of web developers and designers everywhere. There are notoriously difficult to style.  They don't want to align with other elements.  Their size is often wrong.  And just when you think you've finally cracked it, you look at it on another browser and see that it's all on the wonk."}),r("p",{children:"I have wasted far too many hours of my life starting at forms like this one trying to get everything the same size and aligned properly."}),r(_,{html:lA,language:"html",caption:"Select Alignment"}),s("p",{children:["The least bad solution is to set ",r("code",{children:"appearance: none"})," to remove the browser-specific rendering quirks.  The problem then is that you also lose drop down arrow indicating that it's a select input.  So we have to put that back in using an SVG background image. But you don't need to worry about that - I did so you don't have to."]}),r(_,{html:nA,language:"html",caption:"Select Input"}),r("h2",{children:"Inline Select Input"}),s("p",{children:["Select inputs are full-width by default.  Add the ",r("code",{children:"inline"})," ","class to make them only as wide as necessary."]}),r(_,{html:tA,language:"html",caption:"Inline Select"}),r("h2",{children:"Grid and Flex Layout"}),s("p",{children:["You can also use the ",r(ta,{})," and ",r(Cr,{})," classes to control layout."]}),r(_,{html:rA,language:"html",caption:"Grid/Flex"}),r("h2",{children:"Custom Icon"}),s("p",{children:["You can define your own drop down arrow icon using the"," ",r("code",{children:"--arrow-down"})," property.  It's a little bit tricky because you have to URI encode the SVG and define it as shown in this example.  If you've got an SVG icon with a simple path and your icon is 16px square then you can copy the definition from this example and insert your path data into the ",r("code",{children:"path d='...'"})," part."]}),s("p",{children:["Note that you can't use ",r("code",{children:"currentColor"})," to set the stroke or fill color.  You can define separate ",r("code",{children:"--arrow-down"})," ","properties for you light and dark themes, or you can use a neutral color like ",r("code",{children:"#888"})," which works well in both cases."]}),r(_,{html:iA,language:"html",caption:"Custom Icon"}),r("h2",{children:"Placeholder"}),s("p",{children:["Another annoying thing about select inputs is that they don't support the ",r("code",{children:"placeholder"})," attribute.  You can work around the problem by adding the ",r("code",{children:"required"})," attribute to the"," ",r("code",{children:"select"})," input and the ",r("code",{children:"hidden"}),","," ",r("code",{children:"disabled"})," and ",r("code",{children:"selected"})," attributes to the first option which contains your placeholder text."]}),r(_,{html:aA,language:"html",caption:"Select Placeholder"}),r("h2",{children:"Option Groups"}),s("p",{children:["You can group options using the ",r("code",{children:"optgroup"})," element."]}),r(_,{html:oA,language:"html",caption:"Option Groups"})]}),dA=Object.freeze(Object.defineProperty({__proto__:null,default:sA},Symbol.toStringTag,{value:"Module"})),cA=`<style>
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
</form>`,uA=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Form Styling"}),r("p",{children:"There are numerous CSS properties that you can set to change the styling."}),r(_,{html:cA,language:"html",caption:"Form Styling",expand:!0})]}),hA=Object.freeze(Object.defineProperty({__proto__:null,default:uA},Symbol.toStringTag,{value:"Module"})),pA=`<input
  type="text"
  name="my-input"
  placeholder="Placeholder text"
/>
`,fA=`<input
  type="text"
  name="my-input"
  placeholder="Inline"
  class="inline"
/>
`,mA=`<div class="grid-2 gap-4">
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
`,gA=`<div class="grid-3 gap-4">
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
`,vA=`<div class="grid-2 gap-4">
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
</div>`,bA=()=>s("div",{className:"prose",children:[r("h1",{children:"Text Input"}),r("p",{children:"Text inputs are perhaps the most common kind of input."}),r(_,{html:pA,language:"html",caption:"Text Input"}),r("h2",{children:"Inline Text Input"}),s("p",{children:["Inputs are full-width by default. Add the ",r("code",{children:"inline"})," class to give it a fluid width."]}),r(_,{html:fA,language:"html",caption:"Inline Text Input"}),r("h2",{children:"Grid and Flex Layout"}),s("p",{children:["You can also use the ",r(ta,{})," and ",r(Cr,{})," classes to control layout."]}),r(_,{html:mA,language:"html",caption:"Grid and Flex"}),r("h2",{children:"Other Input Types"}),s("p",{children:["You can set the ",r("code",{children:"type"})," to one of the other text-based input types (e.g. ",r("code",{children:"password"}),", ",r("code",{children:"number"}),","," ",r("code",{children:"telephone"}),", ",r("code",{children:"date"}),", ",r("code",{children:"time"}),", etc). There's also some styling provided for the ",r("code",{children:"color"})," type although it's notoriously hard to style and the appearance can vary on different browsers, devices and operating systems."]}),r(_,{html:gA,language:"html",caption:"Other Input Types"}),r("h2",{children:"Disabled Text Input"}),s("p",{children:["Add the ",r("code",{children:"disabled"})," attribute to disable the input or the ",r("code",{children:"disabled"})," CSS class."]}),r(_,{html:vA,language:"html",caption:"Disabled Text Input"})]}),yA=Object.freeze(Object.defineProperty({__proto__:null,default:bA},Symbol.toStringTag,{value:"Module"})),wA=`<textarea
  rows="5"
  placeholder="I like badgers because..."
></textarea>
`,xA=`<textarea
  rows="5"
  class="inline"
  placeholder="I like badgers because..."
></textarea>
`,CA=`<div class="grid-2 gap-4">
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

`,kA=`<textarea
  rows="5"
  placeholder="Badgers are brilliant..."
  disabled
></textarea>

<textarea
  rows="5"
  placeholder="Mushrooms are magic..."
  class="disabled"
></textarea>
`,SA=()=>s("div",{children:[r("h1",{children:"Text Area Input"}),s("p",{children:["Text area inputs are much like ",r(DT,{})," inputs."]}),s("p",{children:["One thing to note (that always catches me out) - if you want placeholder text to appear then you have to make sure there is ",r("em",{children:"nothing"})," ","(not even a newline) between the opening and closing ",r("code",{children:"textarea"})," tags."]}),r(_,{html:wA,language:"html",caption:"Text Area Input",expand:!0}),r("h2",{children:"Inline Text Area Input"}),s("p",{children:["Text area inputs are full-width by default.  Add the"," ",r("code",{children:"inline"})," class to give them a fluid width."]}),r(_,{html:xA,language:"html",caption:"Inline Text Area Input",expand:!0}),r("h2",{children:"Grid and Flex Layout"}),s("p",{children:["You can also use the ",r(ta,{})," and ",r(Cr,{})," classes to control layout."]}),r(_,{html:CA,language:"html",caption:"Grid and Flex"}),r("h2",{children:"Disabled Text Area Input"}),s("p",{children:["Add the ",r("code",{children:"disabled"})," attribute to disabled the input or the ",r("code",{children:"disabled"})," CSS class."]}),r(_,{html:kA,language:"html",caption:"Disabled Text Area Input"})]}),TA=Object.freeze(Object.defineProperty({__proto__:null,default:SA},Symbol.toStringTag,{value:"Module"})),LA=e=>D.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},D.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),D.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),D.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),D.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),D.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),D.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),D.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),_A=()=>s("div",{className:"prose",children:[r("h1",{children:"What's Wrong With It?"}),r("p",{className:"intro wide",children:"There are many, many CSS toolkits and UI frameworks already out there to choose from. If you're looking for something that's stable, reliable, comprehensive and well-supported then this probably isn't for you."}),s(ae,{children:[s("div",{children:[r("h2",{children:"Work in Progress"}),r("p",{children:"This is a work in progress.  It started out life as an ad-hoc collection of CSS classes that I copy and pasted between projects.  Then it became part of Bader UI, a collection of React components implementing some basic UI widgets.  Now it's being moved out into its own module which concentrates on just the CSS without any dependency on React."}),r("p",{children:"One of the reasons that I'm moving it into a new module is because it gives me the opportunity to break backwards compatibility.  There are some things that, given the chance to do again, I would do differently. This gives me that chance and hopefully I won't make too many bad decisions that I later come to regret.  But until I've had a chance to eat my own dog food and build a few sites with it, I can't predict what's going to work well and what isn't."}),r("p",{children:"I'm also migrating everything to use modern CSS techniques which are now well supported by browsers.  That means that a lot of things that were previously hard become much easier.  But different."}),r("p",{children:"As a result, this module is still in a state of flux.  If you build anything with it now then there's a good chance that something will break in the near future."}),r("h2",{children:"Some Assembly Required"}),r("p",{children:"If you have a good working knowledge of modern CSS and SASS then you should be able to easily adapt it to your needs.  Nearly everything is customisable, either through SASS variables, CSS custom properties, or by using the provided scripts to build your own toolkit."}),s("p",{children:["You don't need to buy in to the whole package.  As well as being customisable it's also modular.  With a small amount of effort you can configure it to include the bits your want and ignore the rest. Or you can browse the source code and borrow the ",r("i",{children:"ideas"})," that you think are useful."]}),r("p",{children:"Just remember that this is aimed more at people who already know how to build web sites and are familiar with CSS. If you're looking for a fully-featured, widely used and well supported UI toolkit that does everything for you then there are plenty of others to choose from."}),r("p",{children:"If you don't like the sound of that then these probably aren't the badgers you're looking for.  You can go about your business. Move along."})]}),s("div",{children:[r("h2",{children:"Opinionated and Selfish Software"}),s("p",{children:["This is based on my personal collection of CSS styles and utility classes that I use on a daily basis in my job building web sites for clients. It's Open Source and you're welcome to use it but be aware that it's something that I built for ",r("em",{children:"me"})," to help"," ",r("em",{children:"me"})," get my job done."]}),r("p",{children:"I didn't build it for you (unless you're one of my clients) and I don't really have the time or inclination to promote it, increase the user base or provide unpaid support for it.  It's not my intention for this to be the next great CSS toolkit - there are plenty of those already. My goal isn't to change the World, only to make it a slightly better place."}),r("p",{children:"So be warned that it does things the way I like to do them.  You may not agree with all my decisions, but that's fine.  They're my decisions to make, not yours.  It's free software (in both senses: free speech and free beer) and if you don't like it then you're entitled to a full refund of the price you paid."}),r("p",{children:"On the plus-side, the Badger-UI toolkit contains a lot of tried and tested techniques for managing web site styles that have been honed over nearly 30 years of experience.  It contains the features that I can't live without when I'm building a web site.  Of course, you may have different ideas about the best way to do it, but this is what works for me.  It's supposed to be a reasonable starting point not the final destination."}),r("div",{className:"text-center",children:r(LA,{style:{width:"12em",marginTop:"2rem"}})})]})]})]}),NA=Object.freeze(Object.defineProperty({__proto__:null,default:_A},Symbol.toStringTag,{value:"Module"})),Wv=({path:e,onClick:n,width:t=512,height:a=512,style:l,className:o="night-and-day--icon",fill:i="currentColor"})=>r("svg",{"aria-hidden":"true",focusable:"false",className:o,style:l,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${t} ${a}`,onClick:n,children:r("path",{d:e,fill:i})}),Uv=e=>r(Wv,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),Hv=({Icon:e,caption:n,onClick:t,iconClass:a,iconStyle:l,captionStyle:o,className:i="night-and-day--switcher",captionClass:d="night-and-day--caption",style:u={display:"inline-block"}})=>s("div",{className:i,onClick:t,style:u,children:[r(e,{style:l,className:a}),!!n&&r("div",{className:d,style:o,children:n})]}),$A=e=>{const{setDark:n}=Zl();return r(Hv,{Icon:Uv,onClick:n,...e})},Gv=e=>r(Wv,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),IA=e=>{const{setLight:n}=Zl();return r(Hv,{Icon:Gv,onClick:n,...e})},EA=({sunrise:e={},nightfall:n={}})=>{const{isLight:t,setLight:a,setDark:l}=Zl();return t?r(IA,{onClick:l,...e}):r($A,{onClick:a,...n})},Vv=D.createContext(),Zl=()=>D.useContext(Vv),cs="dark",lu="light",Yv="(prefers-color-scheme: dark)",MA=()=>{var e;return(e=window==null?void 0:window.matchMedia)==null?void 0:e.call(window,Yv).matches},rl=window==null?void 0:window.localStorage,AA=e=>e.split(" "),ym=(e,n="")=>`${e} ${n}`,RA=({storageKey:e,defaultVariant:n,children:t})=>{const a=e?rl==null?void 0:rl.getItem(e):null,[l,o=""]=a?AA(a):[MA(),null],[i,d]=D.useState(l===cs),[u,p]=D.useState(o||n),g=I=>{d(I),e&&rl&&rl.setItem(e,ym(I?cs:lu,u))},y=I=>{p(I),e&&rl&&rl.setItem(e,ym(i?cs:lu,I))},C=I=>g(I.matches);D.useEffect(()=>{if(window&&window.matchMedia){const I=window.matchMedia(Yv);return I.addEventListener("change",C),()=>I==null?void 0:I.removeEventListener("change",C)}},[]);const E={isDark:i,isLight:!i,setDark:()=>g(!0),setLight:()=>g(!1),setIsDark:d,toggleTheme:()=>g(!i),theme:i?cs:lu,variant:u,setVariant:y};return r(Vv.Provider,{value:E,children:t})},PA=()=>s("div",{className:"prose",children:[r("h1",{children:"What's Good About It?"}),r("p",{className:"intro wide",children:"If you're wondering what makes Badger CSS better than all the other CSS frameworks and UI toolkits out there then the short and simple answer is that it isn't.  It's just another one to add to the pile."}),s(ae,{children:[s("div",{children:[r("h2",{children:"A Solid Foundation"}),r("p",{children:"Badger CSS is a collection of tools and techniques that I've built up over many years (nearly 30) of building web sites.  It's what works for me and maybe it will work for you too.  But I'm not making any promises."}),r("p",{children:"It's supposed to be a starting point, not a destination.  If you're building a web site and you want a reasonable foundation to build your styles on then it might be better for you than a more fully-featured toolkit that has everything including the kitchen sink."}),r("h2",{children:"Small(ish) and Simple"}),r("p",{children:"The default Badger CSS stylesheet is around 15kb minimised and compressed (around 100kb uncompressed).  That includes all 16 color ranges which you probably aren't ever going to need in practice. If you define your own palette with a limited set of colors then you can reduce the size a fair bit."}),r("h2",{children:"Modern CSS"}),r("p",{children:"It is based on modern CSS techniques and works in all modern browsers. In particular it makes heavy use of CSS custom properties that you can easily change as required. Behind the scenes it is built using SASS (specifically SCSS) which gives you more opportunities for configuring and extending it."}),r("h2",{children:"Color Management"}),s("p",{children:["Badger CSS uses a novel approach to defining and selecting"," ",r(Lg,{}),".  The color palette was created using ",r("a",{href:"https://abw.github.io/badger-color",children:"Badger Color"})," (which itself was created for this specific task) and you can use it to create your own custom palettes if necessary. The palette data that it generates can be automatically expanded out to SASS component files, ready to be used in Badger CSS."]}),s("p",{children:["You can easily change the hues of the standard palette to match your ",r(Wp,{}),".  It will automatically create greyscale color ranges based on your primary brand color."]}),s("p",{children:["The use of ",r(IT,{})," to define color ranges, and CSS class scopes to select them, makes it easy to create UI components that work automatically with any color range. It also makes it easy to define different color schemes for light and dark themes."]}),r("h2",{children:"Utility Classes"}),s("p",{children:["Badger CSS comes with a core set of ",r(ET,{})," for ad-hoc styling. They are intentionally limited to the kind of things that I find myself using all the time.  If you prefer the approach of"," ",r("a",{href:"https://tailwindcss.com/",children:"Tailwind"})," that provides CSS classes for absolutely everything then you know where to find it."]}),s("p",{children:["I'm not knocking Tailwind, by the way.  CSS utility classes are an ",r("em",{children:"extremely"}),` useful set of tools to have in your toolkit. I just think they should be limited in their scope and not a replacement for writing "proper" CSS when it's more appropriate to do so.`]}),r("h2",{children:"Form Styling"}),s("p",{children:["Styling ",r(Hp,{})," is not much fun. I have wasted many hours, days, even weeks of my life trying to get form styling just right and I never want to have to do it again."]}),s("p",{children:["If you've got better things to do than trying to figure out why your ",r("code",{children:"select"})," component is 1 pixel shorter than your text ",r("code",{children:"input"})," component then take a look at what Badger CSS has to offer.  It provides basic styles for all the standard form components and has smoothed over a lot of the problems so you don't have to worry too much about them.  Spend the time you save playing with your kids or flying a kite."]}),r("h2",{children:"UI Components"}),r("p",{children:"Badger CSS has styling for a limited set of UI components. It's not really supposed to be a complete UI toolkit (because the World already has enough of them), but rather to be a foundation on which UI components can be built."}),s("p",{children:["Experience has taught me that off-the-shelf UI components (even ones that I've written myself) often need a fair bit of tweaking to match the styling for a particular site.  Sometimes it's easier just to write them from scratch as they're needed.  CSS has come a long way since the days when we relied on toolkits like"," ",r("a",{href:"https://getbootstrap.com/",children:"Bootstrap"})," to provide a consistent cross-browser experience."]}),r("p",{children:"That said, it's useful to have a reasonable starting point for some of the common UI components: things like alerts, dialogs, dropdown menus, overlays, tables and tooltips.  You can easily customise Badger CSS to remove anything you don't want."})]}),s("div",{children:[r("h2",{children:"Light and Dark Themes"}),r("p",{children:"Everything contains styling for both light and dark themes, out of the box."}),r(OA,{})]})]})]}),OA=()=>{const{theme:e,toggleTheme:n,isDark:t}=Zl();return s("div",{children:[s("button",{onClick:n,className:"mar-b-4",children:[s("span",{className:"mar-r-2",children:["Switch to the ",t?"light":"dark"," side"]}),t?r(Gv,{}):r(Uv,{})]}),r(FA,{theme:e})]})},FA=({theme:e})=>r("div",{children:s("div",{className:"surface pad-4 border",children:[s("h3",{className:"mar-t-0",children:[tS(e)," Theme"]}),s("div",{className:"field mar-t-4",children:[r("label",{children:"Form Field"}),r("input",{type:"text",name:"a"}),r("div",{className:"help",children:"Field help"})]}),s("div",{className:"field valid",children:[r("label",{children:"Valid Field"}),r("input",{type:"text",name:"b"}),r("div",{className:"help",children:"This is fine"})]}),s("div",{className:"field invalid",children:[r("label",{children:"Invalid Field"}),r("input",{type:"text",name:"c"}),r("div",{className:"help",children:"This is not so good"})]}),s("div",{className:"field mar-t-4",children:[r("label",{children:"Input Prefix/Suffix"}),s("div",{className:"inputs",children:[r("div",{className:"prefix",children:"£"}),r("input",{type:"text",name:"d"}),r("div",{className:"suffix",children:".00"})]})]}),s("div",{className:"field mar-t-4",children:[r("label",{children:"Shaded and Lined Prefix/Suffix"}),s("div",{className:"inputs",children:[r("div",{className:"prefix shaded lined",children:r(Dl,{name:"unlock"})}),r("input",{type:"text",name:"e"}),r("div",{className:"suffix shaded lined",children:r(Dl,{name:"check"})})]})]}),s("div",{className:"field",children:[r("label",{children:"Select"}),s("select",{name:"animal",required:!0,children:[r("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Choose an animal"}),r("option",{value:"ant",children:"Ant"}),r("option",{value:"badger",children:"Badger"}),r("option",{value:"cat",children:"Cat"}),r("option",{value:"dog",children:"Dog"})]})]}),s("label",{className:"inline radio",children:[r("input",{type:"radio",name:"radio1"}),"Radio"]}),s("label",{className:"inline radio",children:[r("input",{type:"radio",name:"radio1"}),"Buttons"]}),s("label",{children:[r("input",{type:"checkbox"}),"Checkbox"]}),s("div",{className:"mar-t-4 grid-2 gap-4",children:[s("label",{className:"inline radio border",children:[r("input",{type:"radio",name:"radio2"}),"Radio"]}),s("label",{className:"inline radio border",children:[r("input",{type:"radio",name:"radio2"}),"Buttons"]})]}),r("div",{className:"mar-t-4",children:s("label",{className:"border",children:[r("input",{type:"checkbox"}),"Checkbox"]})}),s("label",{className:"mar-t-4",children:[r("input",{type:"checkbox",role:"switch"}),"Turn it on again"]}),s("div",{className:"flex space mar-t-4",children:[r("button",{className:"grey outline",children:"Reset"}),r("button",{className:"blue",children:"Submit"})]}),r("div",{className:"success alert border mar-t-4",children:"Success alert"}),r("div",{className:"error alert border",children:"Error alert!"}),r("div",{className:"info alert border",children:"Info alert"}),s("details",{className:"shaded lined border orange bdr-1",children:[r("summary",{children:"Revealable Details"}),r("p",{children:"Hello World!"})]}),r("div",{"data-tooltip":"top left","aria-label":"This is a tooltip!",className:"violet border pad-2 pad-h-4 bgc-95 bgd-5 bdc-80 bdd-20 mar-t-4 Xtext-center bdr-1",children:"Hover here for tooltip"}),s("table",{className:"wide striped celled mar-t-4",children:[r("thead",{children:s("tr",{children:[r("th",{children:"Name"}),r("th",{children:"Instrument"})]})}),s("tbody",{children:[s("tr",{children:[r("td",{children:"Nigel"}),r("td",{children:"Guitar"})]}),s("tr",{children:[r("td",{children:"David"}),r("td",{children:"Guitar"})]}),s("tr",{children:[r("td",{children:"Derek"}),r("td",{children:"Bass"})]}),s("tr",{children:[r("td",{children:"Viv"}),r("td",{children:"Keyboards"})]}),s("tr",{children:[r("td",{children:"Mick"}),r("td",{children:"Drums"})]})]})]})]})}),BA=Object.freeze(Object.defineProperty({__proto__:null,default:PA},Symbol.toStringTag,{value:"Module"})),DA=`<link
  rel="stylesheet"
  href="https://unpkg.com/@abw/badger-css/dist/styles/badger.min.css"
/>`,jA=`## using npm
$ npm add -D @abw/badger-css

## using yarn
$ yarn add -D @abw/badger-css

## using pnpm
$ pnpm add -D @abw/badger-css`,zA="import '@abw/badger-css/styles/badger.min.css';",WA="@import '@abw/badger-css/styles/badger.scss';",UA=`$ git clone https://github.com/abw/badger-css.git
$ cd badger-css
$ sass styles/badger.scss > your-badger-file.css`,HA=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Installation"}),r("h2",{children:"No Installation Required!"}),s(ae,{children:[s("p",{children:["You don't need to install anything to get starting using Badger CSS in a website.  Simply add the following tag to the"," ",r("code",{children:"<head>"})," section of your web page."]}),r(Ie,{code:DA,caption:"Unpkg Link",language:"html",className:"mar-b-8",expand:!0})]}),r("h2",{children:"Adding to a Javascript Project"}),s(ae,{children:[s("p",{children:["If you want to configure, modify or adapt Badger CSS then you should add ",r("code",{children:"@abw/badger-css"})," to your Javascript project using your favourite package manager.  In most cases you should be able to add it as a development dependency using the ",r("code",{children:"-D"})," option."]}),r(Ie,{code:jA,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0})]}),r("h2",{children:"Importing the CSS"}),s(ae,{children:[s("div",{children:[r("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script like so:"}),s("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",r("code",{children:"node_modules"})," directory."]})]}),r(Ie,{code:zA,caption:"Importing CSS",language:"js",className:"mar-b-8",expand:!0})]}),r("h2",{children:"Importing the SCSS"}),s(ae,{children:[s("div",{children:[r("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components.  This gives you the flexibility to configure the default options, or to pick and choose which components you want to include."}),r("p",{children:"Add the following line to your main SCSS stylesheet source."})]}),r(Ie,{code:WA,caption:"Importing SCSS",language:"scss",className:"mar-b-8",expand:!0})]}),r("h2",{children:"Going it Alone"}),s(ae,{children:[s("p",{children:["If you're not using Javascript but want to play with the SCSS source files then you can check out the project repository from Github and run ",r("code",{children:"sass"})," to compile the source files into CSS."]}),r(Ie,{code:UA,caption:"CSS from SASS",language:"shell",className:"mar-b-8",expand:!0})]})]}),GA=Object.freeze(Object.defineProperty({__proto__:null,default:HA},Symbol.toStringTag,{value:"Module"})),VA=e=>D.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 717 337",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},D.createElement("path",{className:"white",d:"M248.362,204.8C251.303,208.841 251.506,216.92 246.886,220.486C247.235,215.811 245.076,210.416 243.385,207.987C242.142,206.2 237.32,201.909 232.525,201.457C236.319,199.212 245.27,200.55 248.362,204.8ZM380.931,288.851C382.012,292.919 365.895,290.457 365.767,303.096C365.703,309.466 368.575,313.608 364.949,314.116C360.977,314.673 360.493,310.692 359.8,305.449C358.316,294.227 366.194,290.723 373.729,288.466C380.03,286.58 380.512,287.273 380.931,288.851ZM250.509,198.166C250.116,197.944 249.715,197.73 249.306,197.524C237.097,191.351 222.986,194.646 217.814,204.876C213.744,212.926 216.415,222.888 223.688,229.775C220.646,228.505 217.677,226.862 214.911,224.779C198.663,212.542 195.441,190.333 199.289,185.248C202.588,180.888 226.299,177.823 242.548,190.06C245.688,192.424 248.324,195.199 250.509,198.166ZM234.492,31.758C231.75,33.423 225.901,22.543 215.941,24.48C210.088,25.619 206.755,23.124 210.523,20.119C221.225,11.585 239.546,28.689 234.492,31.758ZM99.149,58.412C89.72,51.898 79.11,48.569 67.051,51.951C58.397,54.378 52.734,60.065 49.994,67.45C48.707,67.555 47.4,67.691 46.084,67.853C38.149,68.832 29.859,70.741 23.646,72.288C42.126,47.476 64.861,38.817 87.003,38.714L88.566,38.707L88.864,37.173C90.304,29.757 86.13,22.597 75.216,17.044C99.723,11.821 129.948,17.277 146.178,26.501L148.305,27.709L148.955,25.351C149.908,21.892 149.675,13.343 143.798,5.723C174.533,11.177 197.842,21.068 216.166,33.985C250.062,62.777 267.98,100.361 283.213,136.181C299.907,175.44 313.396,212.581 341.026,233.82C341.522,234.342 342.023,234.861 342.528,235.377C350.993,244.039 366.478,256.93 385.23,273.49C387.358,275.369 389.327,277.224 391.08,279.038C386.966,279.245 381.675,280.641 374.911,282.18C352.689,287.237 351.849,297.009 354.41,312.963C355.723,321.141 359.376,324.914 364.644,326.161C344.448,331.711 334.138,335.299 309.216,330.594C270.323,323.25 233.474,308.826 222.734,303.773C222.54,303.387 222.214,303.065 221.786,302.881C207.397,296.693 197.713,288.82 193.624,279.767C195.586,278.724 197.158,277.535 198.531,276.583C199.395,275.985 199.61,274.797 199.011,273.933C198.412,273.069 197.225,272.854 196.361,273.453C193.368,275.527 189.319,279.035 181.419,278.358C180.371,278.268 179.448,279.046 179.359,280.093C179.269,281.14 180.046,282.063 181.094,282.153C184.73,282.464 187.673,282.036 190.117,281.255C194.043,289.991 202.664,297.858 215.527,304.192C190.321,313.397 168.064,307.288 148.128,295.655C126.82,283.221 108.129,264.526 91.308,250.982C77.307,239.708 64.463,232.065 52.581,233.695C45.172,234.711 38.017,239.243 31.166,248.886C20.017,224.385 34.815,199.803 49.449,184.213L50.995,182.566L49.11,181.321C34.813,171.879 18.601,177.687 7.799,189.755C6.995,180.056 11.532,165.892 18.973,152.99C26.481,139.972 37,128.18 48.427,123.711C118.961,110.252 153.156,169.713 188.827,221.409C209.775,251.767 256.49,287.586 345.223,316.241C340.436,301.054 342.628,293.783 346.067,286.802C324.7,276.815 298.269,260.277 280.877,228.797C233.283,142.653 212.43,81.347 143.665,64.082C131.685,61.074 116.053,57.87 99.149,58.412ZM99.066,72.542C97.614,80.151 74.887,58.073 70.407,69.969C62.107,92.007 54.173,79.428 56.142,73.447C66.246,42.754 100.4,65.551 99.066,72.542Z",style:{fill:"white"}}),D.createElement("path",{className:"black",d:"M48.845,71.376C48.085,71.452 47.319,71.538 46.55,71.633C36.384,72.888 25.625,75.704 19.567,77.251L14.706,78.493L17.519,74.338C36.933,45.669 61.411,35.483 85.316,34.929C85.679,28.465 80.142,22.804 68.715,18.305L63.513,16.258L68.883,14.704C94.004,7.433 126.953,12.429 145.602,21.872C145.715,17.476 143.99,10.119 137.262,4.358L132.173,0L138.793,1.03C164.858,5.083 185.888,12.137 203.193,21.438C203.366,21.5 203.539,21.563 203.712,21.626C205.114,17.121 209.176,13.252 216.656,13.924C236.466,15.704 240.708,25.62 241.751,43.904C266.891,65.236 284.026,95.363 297.467,125.916C309.511,153.29 318.589,181.001 327.822,202.999C331.443,211.626 335.086,219.374 338.942,225.872C340.965,228.196 343.066,230.479 345.252,232.715C353.685,241.344 369.071,254.139 387.751,270.635C391.391,273.849 394.564,277.022 397.067,280.061C399.65,281.424 401.411,284.251 402.569,289.316C402.766,289.952 402.91,290.575 403,291.183C403.044,291.476 403.078,291.773 403.104,292.073C403.406,293.909 403.652,295.979 403.849,298.307C404.631,307.557 401.813,319.773 387.422,323.48C384.617,324.202 381.912,324.872 379.338,325.409C375.566,326.623 372.295,327.675 372.296,327.675C350.779,335.844 336.841,339.686 308.509,334.336C267.627,326.617 228.986,311.137 219.844,306.606C192.192,317.895 167.885,311.593 146.209,298.945C124.732,286.413 105.872,267.6 88.919,253.949C82.285,248.607 75.954,244.066 69.867,241.062C64.049,238.191 58.481,236.73 53.099,237.468C45.892,238.456 39.128,243.397 32.519,253.689L30.774,256.406L29.24,253.565C15.116,227.399 29.491,200.652 45.081,183.337C31.813,176.104 17.177,183.299 8.174,195.3L5.878,198.362L4.821,194.683C1.901,184.524 6.568,166.875 15.674,151.087C21.122,141.64 28.135,132.887 35.912,126.766C24.827,130.039 12.898,135.014 0,141.953C13.007,107.592 30.082,86.63 48.343,74.289C48.468,73.299 48.636,72.327 48.845,71.376ZM248.362,204.8C245.27,200.55 236.319,199.212 232.525,201.457C237.32,201.909 242.142,206.2 243.385,207.987C245.076,210.416 247.235,215.811 246.886,220.486C251.506,216.92 251.303,208.841 248.362,204.8ZM380.931,288.851C380.512,287.273 380.03,286.58 373.729,288.466C366.194,290.723 358.316,294.227 359.8,305.449C360.493,310.692 360.977,314.673 364.949,314.116C368.575,313.608 365.703,309.466 365.767,303.096C365.895,290.457 382.012,292.919 380.931,288.851ZM250.509,198.166C248.324,195.199 245.688,192.424 242.548,190.06C226.299,177.823 202.588,180.888 199.289,185.248C195.441,190.333 198.663,212.542 214.911,224.779C217.677,226.862 220.646,228.505 223.688,229.775C216.415,222.888 213.744,212.926 217.814,204.876C222.986,194.646 237.097,191.351 249.306,197.524C249.715,197.73 250.116,197.944 250.509,198.166ZM234.492,31.758C239.546,28.689 221.225,11.585 210.523,20.119C206.755,23.124 210.088,25.619 215.941,24.48C225.901,22.543 231.75,33.423 234.492,31.758ZM99.149,58.412C116.053,57.87 131.685,61.074 143.665,64.082C212.43,81.347 233.283,142.653 280.877,228.797C298.269,260.277 324.7,276.815 346.067,286.802C342.628,293.783 340.436,301.054 345.223,316.241C256.49,287.586 209.775,251.767 188.827,221.409C153.156,169.713 118.961,110.252 48.427,123.711C37,128.18 26.481,139.972 18.973,152.99C11.532,165.892 6.995,180.056 7.799,189.755C18.601,177.687 34.813,171.879 49.11,181.321L50.995,182.566L49.449,184.213C34.815,199.803 20.017,224.385 31.166,248.886C38.017,239.243 45.172,234.711 52.581,233.695C64.463,232.065 77.307,239.708 91.308,250.982C108.129,264.526 126.82,283.221 148.128,295.655C168.064,307.288 190.321,313.397 215.527,304.192C202.664,297.858 194.043,289.991 190.117,281.255C187.673,282.036 184.73,282.464 181.094,282.153C180.046,282.063 179.269,281.14 179.359,280.093C179.448,279.046 180.371,278.268 181.419,278.358C189.319,279.035 193.368,275.527 196.361,273.453C197.225,272.854 198.412,273.069 199.011,273.933C199.61,274.797 199.395,275.985 198.531,276.583C197.158,277.535 195.586,278.724 193.624,279.767C197.713,288.82 207.397,296.693 221.786,302.881C222.214,303.065 222.54,303.387 222.734,303.773C233.474,308.826 270.323,323.25 309.216,330.594C334.138,335.299 344.448,331.711 364.644,326.161C359.376,324.914 355.723,321.141 354.41,312.963C351.849,297.009 352.689,287.237 374.911,282.18C381.675,280.641 386.966,279.245 391.08,279.038C389.327,277.224 387.358,275.369 385.23,273.49C366.478,256.93 350.993,244.039 342.528,235.377C342.023,234.861 341.522,234.342 341.026,233.82C313.396,212.581 299.907,175.44 283.213,136.181C267.98,100.361 250.062,62.777 216.166,33.985C197.842,21.068 174.533,11.177 143.798,5.723C149.675,13.343 149.908,21.892 148.955,25.351L148.305,27.709L146.178,26.501C129.948,17.277 99.723,11.821 75.216,17.044C86.13,22.597 90.304,29.757 88.864,37.173L88.566,38.707L87.003,38.714C64.861,38.817 42.126,47.476 23.646,72.288C29.859,70.741 38.149,68.832 46.084,67.853C47.4,67.691 48.707,67.555 49.994,67.45C52.734,60.065 58.397,54.378 67.051,51.951C79.11,48.569 89.72,51.898 99.149,58.412ZM99.066,72.542C100.4,65.551 66.246,42.754 56.142,73.447C54.173,79.428 62.107,92.007 70.407,69.969C74.887,58.073 97.614,80.151 99.066,72.542Z"}),D.createElement("path",{className:"badger",d:"M347.242,14.148C348.016,13.915 349.256,13.664 350.96,13.392C352.664,13.121 354.406,12.986 356.188,12.986C357.892,12.986 359.421,13.102 360.777,13.334C362.132,13.567 363.274,14.031 364.204,14.729C365.133,15.426 365.83,16.374 366.295,17.575C366.76,18.775 366.992,20.344 366.992,22.28L366.992,33.666C368.928,32.891 370.768,32.349 372.511,32.039C374.253,31.729 376.17,31.574 378.261,31.574C381.979,31.574 385.503,32.233 388.834,33.549C392.164,34.866 395.107,36.783 397.663,39.3C400.219,41.817 402.233,44.935 403.704,48.653C405.176,52.37 405.912,56.669 405.912,61.548C405.912,66.583 405.157,70.978 403.646,74.735C402.136,78.491 400.025,81.608 397.315,84.087C394.604,86.565 391.293,88.444 387.381,89.722C383.47,90.999 379.152,91.638 374.428,91.638C369.316,91.638 364.978,91.038 361.416,89.838C357.853,88.637 354.832,87.146 352.354,85.365C348.946,82.964 347.242,79.866 347.242,76.071L347.242,14.148ZM374.428,76.071C377.99,76.071 380.759,74.851 382.734,72.411C384.709,69.971 385.697,66.35 385.697,61.548C385.697,56.669 384.69,53.029 382.676,50.628C380.662,48.227 377.952,47.026 374.544,47.026C372.995,47.026 371.659,47.181 370.536,47.491C369.413,47.801 368.193,48.265 366.876,48.885L366.876,74.212C367.728,74.754 368.754,75.199 369.955,75.548C371.155,75.896 372.646,76.071 374.428,76.071ZM439.023,31.574C443.205,31.574 447.02,32 450.466,32.852C453.913,33.704 456.856,35.002 459.296,36.744C461.735,38.487 463.614,40.694 464.93,43.366C466.247,46.039 466.905,49.195 466.905,52.835L466.905,78.859C466.905,80.873 466.344,82.518 465.221,83.796C464.098,85.074 462.762,86.178 461.213,87.108C456.178,90.128 449.091,91.638 439.952,91.638C435.847,91.638 432.149,91.251 428.857,90.477C425.565,89.702 422.738,88.54 420.376,86.991C418.014,85.442 416.194,83.467 414.916,81.066C413.638,78.665 412.999,75.877 412.999,72.701C412.999,67.357 414.586,63.252 417.762,60.387C420.938,57.521 425.856,55.739 432.517,55.042L447.736,53.416L447.736,52.603C447.736,50.356 446.748,48.749 444.773,47.781C442.798,46.813 439.952,46.329 436.234,46.329C433.291,46.329 430.425,46.639 427.637,47.258C424.849,47.878 422.332,48.653 420.086,49.582C419.079,48.885 418.227,47.82 417.53,46.387C416.833,44.954 416.484,43.463 416.484,41.914C416.484,39.9 416.968,38.293 417.936,37.093C418.904,35.892 420.395,34.866 422.409,34.014C424.655,33.162 427.308,32.542 430.367,32.155C433.427,31.768 436.312,31.574 439.023,31.574ZM439.952,77.232C441.269,77.232 442.721,77.097 444.309,76.826C445.896,76.555 447.078,76.187 447.852,75.722L447.852,66.428L439.487,67.125C437.319,67.28 435.537,67.744 434.143,68.519C432.749,69.294 432.052,70.455 432.052,72.004C432.052,73.553 432.652,74.812 433.853,75.78C435.053,76.748 437.086,77.232 439.952,77.232ZM476.548,61.548C476.548,56.436 477.323,52.002 478.872,48.246C480.421,44.489 482.57,41.372 485.32,38.894C488.069,36.415 491.283,34.576 494.962,33.375C498.641,32.175 502.611,31.574 506.871,31.574C508.42,31.574 509.93,31.71 511.402,31.981C512.873,32.252 514.074,32.581 515.003,32.968L515.003,14.148C515.778,13.915 517.017,13.664 518.721,13.392C520.425,13.121 522.167,12.986 523.949,12.986C525.653,12.986 527.182,13.102 528.538,13.334C529.893,13.567 531.036,14.031 531.965,14.729C532.895,15.426 533.592,16.374 534.056,17.575C534.521,18.775 534.753,20.344 534.753,22.28L534.753,77.349C534.753,80.989 533.049,83.893 529.642,86.062C527.395,87.533 524.491,88.831 520.928,89.954C517.365,91.077 513.26,91.638 508.613,91.638C503.579,91.638 499.067,90.941 495.079,89.547C491.09,88.153 487.721,86.139 484.971,83.506C482.222,80.873 480.13,77.716 478.697,74.037C477.265,70.358 476.548,66.195 476.548,61.548ZM509.543,47.026C505.36,47.026 502.146,48.227 499.9,50.628C497.654,53.029 496.531,56.669 496.531,61.548C496.531,66.35 497.576,69.971 499.668,72.411C501.759,74.851 504.779,76.071 508.73,76.071C510.124,76.071 511.382,75.858 512.505,75.432C513.628,75.006 514.5,74.522 515.119,73.979L515.119,48.42C513.57,47.491 511.711,47.026 509.543,47.026ZM574.603,31.574C579.017,31.574 583.025,32.136 586.627,33.259C590.228,34.382 593.268,35.834 595.747,37.616C597.296,38.7 598.516,39.9 599.407,41.217C600.297,42.534 600.743,44.238 600.743,46.329L600.743,86.991C600.743,91.096 599.968,94.64 598.419,97.622C596.87,100.604 594.759,103.082 592.087,105.057C589.415,107.032 586.278,108.484 582.677,109.414C579.075,110.343 575.222,110.808 571.117,110.808C564.069,110.808 558.531,109.859 554.504,107.961C550.476,106.064 548.462,102.985 548.462,98.725C548.462,96.944 548.83,95.376 549.566,94.02C550.302,92.665 551.135,91.638 552.064,90.941C554.31,92.181 556.847,93.226 559.674,94.078C562.501,94.93 565.424,95.356 568.445,95.356C572.627,95.356 575.958,94.659 578.436,93.265C580.915,91.871 582.154,89.625 582.154,86.527L582.154,84.668C578.979,86.062 575.106,86.759 570.536,86.759C567.051,86.759 563.74,86.236 560.603,85.191C557.466,84.145 554.717,82.518 552.354,80.311C549.992,78.104 548.095,75.257 546.662,71.772C545.229,68.287 544.512,64.143 544.512,59.341C544.512,54.616 545.268,50.511 546.778,47.026C548.288,43.541 550.379,40.656 553.051,38.371C555.724,36.086 558.899,34.382 562.578,33.259C566.257,32.136 570.265,31.574 574.603,31.574ZM581.806,48.42C581.263,48.11 580.47,47.801 579.424,47.491C578.378,47.181 577.081,47.026 575.532,47.026C571.737,47.026 568.89,48.091 566.993,50.221C565.095,52.351 564.146,55.391 564.146,59.341C564.146,63.833 565.095,67.067 566.993,69.042C568.89,71.017 571.311,72.004 574.254,72.004C577.43,72.004 579.947,71.269 581.806,69.797L581.806,48.42ZM642.799,91.638C638.229,91.638 633.989,90.999 630.078,89.722C626.166,88.444 622.758,86.527 619.854,83.971C616.949,81.415 614.665,78.201 612.999,74.328C611.334,70.455 610.502,65.924 610.502,60.735C610.502,55.623 611.334,51.228 612.999,47.549C614.665,43.87 616.853,40.849 619.563,38.487C622.274,36.125 625.372,34.382 628.858,33.259C632.343,32.136 635.906,31.574 639.546,31.574C643.651,31.574 647.388,32.194 650.757,33.433C654.126,34.672 657.031,36.376 659.471,38.545C661.91,40.714 663.808,43.308 665.163,46.329C666.519,49.35 667.197,52.641 667.197,56.204C667.197,58.837 666.461,60.851 664.989,62.245C663.518,63.64 661.465,64.53 658.832,64.917L630.136,69.216C630.988,71.772 632.73,73.689 635.364,74.967C637.997,76.245 641.018,76.884 644.426,76.884C647.601,76.884 650.602,76.477 653.429,75.664C656.256,74.851 658.561,73.902 660.342,72.818C661.581,73.592 662.627,74.676 663.479,76.071C664.331,77.465 664.757,78.936 664.757,80.485C664.757,83.971 663.13,86.565 659.877,88.269C657.399,89.586 654.611,90.477 651.512,90.941C648.414,91.406 645.51,91.638 642.799,91.638ZM639.546,45.98C637.687,45.98 636.08,46.29 634.725,46.91C633.369,47.529 632.266,48.323 631.414,49.292C630.562,50.26 629.923,51.344 629.497,52.545C629.071,53.745 628.819,54.965 628.742,56.204L648.608,52.951C648.376,51.402 647.524,49.853 646.052,48.304C644.581,46.755 642.412,45.98 639.546,45.98ZM696.473,89.663C695.699,89.896 694.479,90.128 692.814,90.36C691.149,90.593 689.425,90.709 687.644,90.709C685.94,90.709 684.41,90.593 683.055,90.36C681.699,90.128 680.557,89.663 679.628,88.966C678.698,88.269 677.982,87.321 677.478,86.12C676.975,84.919 676.723,83.351 676.723,81.415L676.723,46.561C676.723,44.78 677.052,43.25 677.711,41.972C678.369,40.694 679.318,39.552 680.557,38.545C681.796,37.538 683.326,36.628 685.146,35.815C686.966,35.002 688.922,34.285 691.013,33.666C693.104,33.046 695.273,32.562 697.519,32.213C699.765,31.865 702.011,31.691 704.257,31.691C707.975,31.691 710.918,32.407 713.087,33.84C715.256,35.273 716.34,37.616 716.34,40.869C716.34,41.953 716.185,43.018 715.875,44.063C715.565,45.109 715.178,46.058 714.713,46.91C713.087,46.91 711.422,46.987 709.718,47.142C708.014,47.297 706.349,47.529 704.722,47.839C703.096,48.149 701.566,48.478 700.133,48.827C698.7,49.175 697.48,49.582 696.473,50.047L696.473,89.663Z"}),D.createElement("path",{className:"css",d:"M586.337,162.306C584.4,162.306 582.561,162.616 580.818,163.236C579.075,163.855 577.565,164.765 576.287,165.966C575.009,167.166 573.983,168.657 573.208,170.439C572.434,172.22 572.047,174.311 572.047,176.712C572.047,181.514 573.421,185.116 576.171,187.517C578.92,189.918 582.27,191.119 586.22,191.119C588.544,191.119 590.558,190.847 592.262,190.305C593.966,189.763 595.476,189.182 596.793,188.563C598.342,189.647 599.503,190.828 600.278,192.106C601.052,193.384 601.44,194.914 601.44,196.695C601.44,199.871 599.929,202.33 596.909,204.072C593.888,205.815 589.706,206.686 584.361,206.686C579.482,206.686 575.067,205.97 571.117,204.537C567.167,203.104 563.779,201.09 560.952,198.496C558.125,195.901 555.937,192.784 554.388,189.143C552.838,185.503 552.064,181.476 552.064,177.061C552.064,171.949 552.897,167.476 554.562,163.642C556.227,159.809 558.492,156.652 561.358,154.174C564.224,151.695 567.535,149.837 571.291,148.597C575.048,147.358 579.017,146.738 583.2,146.738C588.776,146.738 593.075,147.745 596.095,149.759C599.116,151.773 600.626,154.367 600.626,157.543C600.626,159.015 600.278,160.389 599.581,161.667C598.884,162.945 598.071,164.049 597.141,164.978C595.824,164.359 594.237,163.759 592.378,163.178C590.519,162.597 588.505,162.306 586.337,162.306ZM657.786,188.098C657.786,193.984 655.579,198.593 651.164,201.923C646.749,205.254 640.243,206.919 631.646,206.919C628.393,206.919 625.372,206.686 622.584,206.222C619.796,205.757 617.414,205.041 615.439,204.072C613.464,203.104 611.915,201.884 610.792,200.413C609.669,198.941 609.107,197.199 609.107,195.185C609.107,193.326 609.495,191.758 610.269,190.48C611.044,189.202 611.973,188.137 613.057,187.285C615.304,188.524 617.879,189.628 620.783,190.596C623.688,191.564 627.038,192.048 630.833,192.048C633.234,192.048 635.073,191.699 636.351,191.002C637.629,190.305 638.268,189.376 638.268,188.214C638.268,187.13 637.803,186.278 636.874,185.658C635.945,185.039 634.396,184.535 632.227,184.148L628.742,183.451C622.003,182.134 616.988,180.062 613.696,177.235C610.405,174.408 608.759,170.361 608.759,165.095C608.759,162.229 609.379,159.634 610.618,157.311C611.857,154.987 613.6,153.051 615.846,151.502C618.092,149.953 620.783,148.752 623.92,147.9C627.057,147.048 630.523,146.622 634.318,146.622C637.184,146.622 639.875,146.835 642.392,147.261C644.91,147.687 647.098,148.326 648.957,149.178C650.815,150.03 652.287,151.134 653.371,152.489C654.456,153.845 654.998,155.452 654.998,157.311C654.998,159.092 654.669,160.622 654.01,161.9C653.352,163.178 652.519,164.243 651.512,165.095C650.893,164.707 649.963,164.301 648.724,163.875C647.485,163.449 646.13,163.061 644.658,162.713C643.186,162.364 641.695,162.074 640.185,161.842C638.675,161.609 637.3,161.493 636.061,161.493C633.505,161.493 631.53,161.784 630.136,162.364C628.742,162.945 628.044,163.855 628.044,165.095C628.044,165.947 628.432,166.644 629.206,167.186C629.981,167.728 631.452,168.231 633.621,168.696L637.223,169.509C644.658,171.213 649.944,173.556 653.081,176.538C656.218,179.52 657.786,183.373 657.786,188.098ZM714.946,188.098C714.946,193.984 712.738,198.593 708.324,201.923C703.909,205.254 697.403,206.919 688.806,206.919C685.553,206.919 682.532,206.686 679.744,206.222C676.955,205.757 674.574,205.041 672.599,204.072C670.624,203.104 669.075,201.884 667.952,200.413C666.829,198.941 666.267,197.199 666.267,195.185C666.267,193.326 666.654,191.758 667.429,190.48C668.203,189.202 669.133,188.137 670.217,187.285C672.463,188.524 675.039,189.628 677.943,190.596C680.847,191.564 684.197,192.048 687.992,192.048C690.393,192.048 692.233,191.699 693.511,191.002C694.789,190.305 695.428,189.376 695.428,188.214C695.428,187.13 694.963,186.278 694.034,185.658C693.104,185.039 691.555,184.535 689.387,184.148L685.901,183.451C679.163,182.134 674.148,180.062 670.856,177.235C667.564,174.408 665.919,170.361 665.919,165.095C665.919,162.229 666.538,159.634 667.777,157.311C669.017,154.987 670.759,153.051 673.005,151.502C675.252,149.953 677.943,148.752 681.08,147.9C684.217,147.048 687.683,146.622 691.478,146.622C694.343,146.622 697.035,146.835 699.552,147.261C702.069,147.687 704.257,148.326 706.116,149.178C707.975,150.03 709.447,151.134 710.531,152.489C711.615,153.845 712.157,155.452 712.157,157.311C712.157,159.092 711.828,160.622 711.17,161.9C710.512,163.178 709.679,164.243 708.672,165.095C708.053,164.707 707.123,164.301 705.884,163.875C704.645,163.449 703.289,163.061 701.818,162.713C700.346,162.364 698.855,162.074 697.345,161.842C695.834,161.609 694.46,161.493 693.22,161.493C690.665,161.493 688.689,161.784 687.295,162.364C685.901,162.945 685.204,163.855 685.204,165.095C685.204,165.947 685.591,166.644 686.366,167.186C687.14,167.728 688.612,168.231 690.781,168.696L694.382,169.509C701.818,171.213 707.104,173.556 710.241,176.538C713.377,179.52 714.946,183.373 714.946,188.098Z"})),YA=()=>r("div",{children:s("div",{className:"mobile block-center pad-t-8 flow",children:[r(VA,{className:"badger-css"}),r("h1",{className:"mar-t-8",children:"Modern, minimal CSS presets"}),s("p",{children:["You've probably heard of CSS ",r("b",{children:"reset"})," stylesheets that provide sensible defaults for HTML elements to smooth out some of the inconsistencies between browsers.  And no doubt you're aware of the plethora of fully-featured CSS ",r("b",{children:"toolkits"})," that implement all manner of styles for UI components."]}),s("p",{children:["Badger CSS sits somewhere between the two.  It provides some sensible"," ",r("b",{children:"presets"})," for HTML elements that you can use out of the box and expect to get reasonable results.  It's highly configurable and is really designed to be a starting point for building your own CSS stylesheets, design systems and UI toolkits."]}),s("div",{className:"grid-2 gap-2",children:[r(ur,{to:"/colors/demo",text:"Color Demo",className:"brand button"}),r(ur,{to:"/getting-started/installation",text:"Getting Started",className:"brand button"}),r(ur,{to:"/getting-started/good",text:"What's Good?",className:"brand button"}),r(ur,{to:"/getting-started/bad",text:"What's Bad?",className:"brand button"})]}),r("h2",{children:"TL;DR:"}),r("h3",{children:"Cool Colors"}),s("ul",{children:[s("li",{children:["Hand-crafted palette with ",r(Lg,{text:"13 color ranges"})," ","and 3 greyscales, each containing 21 color stops from none more black to a whiter shade of pale."]}),s("li",{children:["Easily adapt the palette to match your ",r(Wp,{}),"."]}),s("li",{children:["Create and your own custom palette using ",r("a",{href:"https://abw.github.io/badger-color/",children:"Badger Color"})," and"," ",r(_g,{text:"import it"})," into Badger CSS."]})]}),r("h3",{children:"Useful Utilities"}),s("ul",{children:[r("li",{children:"Utility classes for the things you need to do most often."}),r("li",{children:"Useful for prototyping or ad-hoc styling."}),r("li",{children:"CSS custom properties for applying them into your own custom styles."}),r("li",{children:"All configurable by SASS variables."})]}),r("h3",{children:"Fantastic Forms"}),s("ul",{children:[s("li",{children:[r("i",{children:"Mostly Classless"})," styling providing sensible and modern defaults for HTML forms."]}),r("li",{children:"Minimal additional markup required."}),r("li",{children:"Easily modified using CSS properties and/or SASS variables."})]}),r("h3",{children:"Components"}),s("ul",{children:[r("li",{children:"A basic set of components that you just can't live without."}),r("li",{children:"Different variations of the basic styles."}),r("li",{children:"Automatically adapt to any color range or brand colors."}),r("li",{children:"Configurable and customisable, using CSS properties and/or SASS variables."})]})]})}),ZA=Object.freeze(Object.defineProperty({__proto__:null,default:YA},Symbol.toStringTag,{value:"Module"})),qA=`<div class="block-left width-12rem border pad-2">
  Block left
</div>
<div class="block-center width-12rem border pad-2 mar-t-4">
  Block center
</div>
<div class="block-right width-12rem border pad-2 mar-t-4">
  Block right
</div>
`,KA=`<div class="text-left border pad-2 mar-b-2">
  Text on the left
</div>
<div class="text-center border pad-2 mar-b-2">
  Text in the center
</div>
<div class="text-right border pad-2">
  Text on the right
</div>`,QA=`<div class="text-right border pad-4">
  Text on the right
  <div class="text-left border pad-2 mar-v-2">
    Text on the left
  </div>
  Text on the right
</div>`,XA=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Alignment"}),r("h2",{children:"Text Alignment"}),s("p",{children:["Add the ",r("code",{children:"text-left"}),", ",r("code",{children:"text-center"})," and"," ",r("code",{children:"text-right"})," CSS classes to set the text alignment."]}),r(_,{html:KA,caption:"Text Alignment",expand:!0}),s("p",{children:["Text is aligned left by default making the ",r("code",{children:"text-left"})," ","class ",r("em",{children:"mostly"})," redundant.  However it can be useful to reset the alignment to the left for a block that would otherwise be aligned centrally or to the right"]}),r(_,{html:QA,caption:"Text Left",expand:!0}),r("h2",{children:"Block Alignment"}),s("p",{children:["Add the ",r("code",{children:"block-left"}),", ",r("code",{children:"block-center"})," and"," ",r("code",{children:"block-right"})," CSS classes to align a block to the left, in the center, or on the right, respectively."]}),s("p",{children:["You'll need to set a block width to stop it from expanding to fill the full width of the parent element.  You can do that using one of the"," ",r(Ng,{})," utility classes."]}),r(_,{html:qA,caption:"Block Alignment",expand:!0})]}),JA=Object.freeze(Object.defineProperty({__proto__:null,default:XA},Symbol.toStringTag,{value:"Module"})),eR=`<div class="border pad-4">
  This element has a border.
</div>
`,nR=`<div class="grid-1 gap-2">
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
</div>`,tR=`<div class="grid-2 gap-2">
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
`,rR=`<div class="border pad-4 mar-b-2">
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
`,aR=`<div class="grid-3 gap-4 pad-t-2">
  <button class="brand solid">default</button>
  <button class="brand solid bdr-0">bdr-0</button>
  <button class="brand solid square">square</button>
</div>
<div class="grid-3 gap-4 pad-t-2">
  <input type="text" value="default">
  <input type="text" value="bdr-0" class="bdr-0">
  <input type="text" value="square" class="square">
</div>
`,lR=`<div class="bdr-6 surface-1 pad-2 border grid-1 gap-2">
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
</div>`,oR=`<style>
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
`,iR=`// define your own $border-width-values...
$border-width-values: 1, 2, 3, 5, 8, 13, 21, 34;
// ...and/or set the $border-width-prefix...
$border-width-prefix: 'br-wd';

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,sR=`// define your own $border-radius-values...
$border-radius-values: 1, 2, 3, 5, 8, 13, 21, 34;
// ...and/or set the $border-width-prefix...
$border-radius-prefix: 'br-rd';

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,dR=`<div class="grid-1 gap-4">
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
</div>`,cR=({properties:e})=>s("table",{className:"brand celled striped properties wide",children:[r("thead",{children:s("tr",{children:[r("th",{children:"Property"}),r("th",{children:"Default"}),r("th",{children:"Description"})]})}),r("tbody",{children:e.map(n=>s("tr",{children:[r("td",{className:"key nowrap",children:r("code",{children:n[0]})}),r("td",{className:"nowrap",children:n[1]}),r("td",{children:n[2]})]},n[0]))})]}),uR=({sets:e})=>r("div",{className:`grid-${e.length} gap-8 stack-desktop mar-b-8`,children:e.map(n=>s("div",{children:[r("h4",{className:"mar-b-2",children:n.title}),r(cR,{properties:n.properties}),!!n.notes&&r("div",{className:"smallish info alert",children:n.notes})]},n.title))}),hR=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Borders"}),r("h2",{children:"Border Class"}),s("p",{children:["Add the ",r("code",{children:"border"})," CSS class to an element to give it a border."]}),r(_,{html:eR,caption:"Border",expand:!0}),r("h2",{children:"Border Width"}),s("p",{children:["Add the ",r("code",{children:"bdw-N"})," CSS class to set the border width, where"," ",r("code",{children:"N"})," is in pixel units."]}),r(_,{html:nR,caption:"Border Width",expand:!0}),s("div",{className:"grid-2 gap-8 stack-desktop",children:[s("div",{className:"wide",children:[s("p",{children:["The pre-defined values for ",r("code",{children:"N"})," are"," ",r("code",{children:"0"}),", ",r("code",{children:"1"}),", ",r("code",{children:"2"}),", ",r("code",{children:"3"}),","," ",r("code",{children:"4"}),", ",r("code",{children:"5"}),", ",r("code",{children:"6"}),", ",r("code",{children:"8"})," and"," ",r("code",{children:"10"}),"."]}),s("p",{children:["You can set the ",r("code",{children:"$border-width-values"})," SCSS variable if you want to define a different set of values. You can also use the ",r("code",{children:"$border-width-prefix"})," to define a different prefix for the border width classes if you don't like ",r("code",{children:"bdw"}),"."]}),s("p",{children:["In the example shown here the generated CSS classes would be"," ",r("code",{children:"br-wd-1"}),", ",r("code",{children:"br-wd-2"}),","," ",r("code",{children:"br-wd-3"}),", ",r("code",{children:"br-wd-5"})," and so on."]})]}),r(Ie,{code:iR,caption:"Custom Border Widths",language:"scss",className:"mar-b-8",expand:!0})]}),r("h2",{children:"Border Color"}),s("p",{children:["Add the ",r("code",{children:"bdc-N"})," CSS class to set the border color, where"," ",r("code",{children:"N"})," is a color stop (0, 5, 10, etc) for the current color range.  Use ",r("code",{children:"bdd-N"})," to set a different color for dark mode."]}),r(_,{html:tR,caption:"Border Color"}),r("h2",{children:"Border Radius"}),s("p",{children:["Add the ",r("code",{children:"bdr-N"})," classes to set the radius of borders. The ",r("code",{children:"-N"})," multiplier is a multiple of the base unit radius (0.25rem by default)."]}),r(_,{html:rR,caption:"Border Radius",expand:!0}),s("p",{children:["The ",r("code",{children:"bdr-0"})," class can be used to ",r("i",{children:"explicitly"})," set the border radius to 0. The ",r("code",{children:"square"})," class is an alias for"," ",r("code",{children:"bdr-0"})," with the added benefit of having the"," ",r("code",{children:"!important"})," flag set for when you really need to drive the point home."]}),r("p",{children:"They can be used to remove the corner radius from components which have them by default, like buttons and form fields."}),r(_,{html:aR,caption:"Square Corners",expand:!0}),s("div",{className:"grid-2 gap-8 stack-desktop",children:[s("div",{className:"wide",children:[s("p",{children:["The pre-defined values for ",r("code",{children:"N"})," are"," ",r("code",{children:"0"}),", ",r("code",{children:"1"}),", ",r("code",{children:"2"}),", ",r("code",{children:"3"}),","," ",r("code",{children:"4"}),", ",r("code",{children:"5"}),", ",r("code",{children:"6"}),", ",r("code",{children:"8"})," and"," ",r("code",{children:"10"}),"."]}),s("p",{children:["You can set the ",r("code",{children:"$border-radius-values"})," SCSS variable if you want to define a different set of values. You can also use the ",r("code",{children:"$border-radius-prefix"})," to define a different prefix for the border radius classes if you don't like ",r("code",{children:"bdr"}),"."]}),s("p",{children:["In the example shown here the generated CSS classes would be"," ",r("code",{children:"br-rd-1"}),", ",r("code",{children:"br-rd-2"}),","," ",r("code",{children:"br-rd-3"}),", ",r("code",{children:"br-rd-5"})," and so on."]})]}),r(Ie,{code:sR,caption:"Custom Border Radius",language:"scss",className:"mar-b-8",expand:!0})]}),r("h2",{children:"Border Radius Corners"}),r("p",{children:"You can independently set the radius for different corners using these classes."}),s("div",{className:"grid-2 gap-8 stack-desktop",children:[s("table",{className:"brand border lined striped mar-b-8",children:[r("thead",{children:s("tr",{children:[r("th",{children:"Class"}),r("th",{children:"Description"})]})}),s("tbody",{children:[s("tr",{children:[r("td",{children:r("code",{children:"bdr-t-N"})}),r("td",{children:"Top left and top right corner radius"})]}),s("tr",{children:[r("td",{children:r("code",{children:"bdr-b-N"})}),r("td",{children:"Bottom left and bottom right corner radius"})]}),s("tr",{children:[r("td",{children:r("code",{children:"bdr-l-N"})}),r("td",{children:"Top left and bottom left corner radius"})]}),s("tr",{children:[r("td",{children:r("code",{children:"bdr-r-N"})}),r("td",{children:"Top right and bottom right corner radius"})]}),s("tr",{children:[r("td",{children:r("code",{children:"bdr-tl-N"})}),r("td",{children:"Top left corner radius"})]}),s("tr",{children:[r("td",{children:r("code",{children:"bdr-tr-N"})}),r("td",{children:"Top right corner radius"})]}),s("tr",{children:[r("td",{children:r("code",{children:"bdr-bl-N"})}),r("td",{children:"Bottom left corner radius"})]}),s("tr",{children:[r("td",{children:r("code",{children:"bdr-br-N"})}),r("td",{children:"Bottom right corner radius"})]})]})]}),r("div",{children:s(Kr,{children:["If you set a custom ",r("code",{children:"$border-radius-prefix"})," as shown above then your CSS classes will start with your chosen prefix instead of ",r("code",{children:"bdr"})," as shown here."]})})]}),r(_,{html:lR,caption:"Border Radius Corners",expand:!0}),r("h2",{children:"No Border Required!"}),s("p",{children:["You don't need to have a border displayed to set the border radius. The ",r("code",{children:"bdr-N"})," classes can be used to set the border radius on various components."]}),r(_,{html:dR,caption:"Radius Components",expand:!0}),r("h2",{children:"Border Properties"}),r("p",{children:"The following properties are used to define the border style."}),r(uR,{sets:[{title:"Defaults",properties:[["--border-width",r("code",{children:"1px"},"1px"),"Border width"],["--border-style",r("code",{children:"solid"},"solid"),s("span",{children:["Border style: ",r("code",{children:"solid"}),", ",r("code",{children:"dotted"}),", ",r("code",{children:"dashed"}),", etc."]},"desc")],["--border-radius",r("code",{children:"var(--unit-radius)"},"radius"),"Border radius"],["--border-color",r("code",{children:"var(--color-75)"},"color"),"Border color from current color range"]]},{title:"Dark Theme",properties:[["--border-color",r("code",{children:"var(--color-25)"},"color"),"Border color from current color range"]]}]}),r("h2",{children:"Setting Custom Properties"}),r(_,{html:oR,caption:"Custom Border Style",expand:!0})]}),pR=Object.freeze(Object.defineProperty({__proto__:null,default:hR},Symbol.toStringTag,{value:"Module"})),Zv=`// define your own breakpoints...
$breakpoints: (
  'mobile':     30rem,
  'tablet':     50rem,
  'laptop':     70rem,
  'desktop':    80rem,
  'widescreen': 90rem
) !default;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";`,fR={mobile:30,tablet:50,laptop:70,desktop:80,widescreen:90},mR=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Breakpoints"}),r("h2",{children:"Breakpoint Names"}),s(ae,{children:[r("p",{children:"The breakpoint names and their corresponding widths in rems and pixels (assuming 1rem = 16px) are shown below."}),s("p",{children:["You can set the ",r("code",{children:"$breakpoints"})," SASS variable if you want to define a different set of breakpoints."]})]}),r(Dt,{code:Zv,caption:"Custom Breakpoints",language:"scss",expand:!0,children:s("table",{className:"brand celled striped properties small wide mar-b-2",children:[r("thead",{children:s("tr",{children:[r("th",{children:"Class"}),r("th",{children:"Rems"}),r("th",{children:"Pixels"})]})}),r("tbody",{children:Object.entries(fR).map(([e,n])=>s("tr",{children:[r("td",{children:r("code",{children:e})}),s("td",{children:[n,"rem"]}),s("td",{children:[n*16,"px"]})]},e))})]})}),r("h2",{children:"Breakpoint Widths"}),s(ae,{children:[s("div",{children:[r("p",{children:"You can add one of the breakpoint classes to an element to give it a maximum width."}),s("p",{children:["Add the ",r("code",{children:"block-center"})," class to center a block, or ",r("code",{children:"block-right"})," to right align it."]})]}),r(Kr,{title:"Try it out!",children:"Try resizing your browser window and see how the elements below respond."})]}),r("div",{className:"mobile surface-2 border pad-4",children:r("h3",{className:"font-mono",children:".mobile"})}),r("div",{className:"tablet surface-2 border pad-4",children:r("h3",{className:"font-mono",children:".tablet"})}),r("div",{className:"laptop surface-2 border pad-4",children:r("h3",{className:"font-mono",children:".laptop"})}),r("div",{className:"desktop surface-2 border pad-4",children:r("h3",{className:"font-mono",children:".desktop"})}),r("div",{className:"widescreen surface-2 border pad-4",children:r("h3",{className:"font-mono",children:".widescreen"})}),r("div",{className:"mobile block-center surface-2 border pad-4",children:r("h3",{className:"font-mono",children:".mobile.block-center"})}),r("div",{className:"tablet block-right surface-2 border pad-4",children:r("h3",{className:"font-mono",children:".tablet.block-right"})})]}),gR=Object.freeze(Object.defineProperty({__proto__:null,default:mR},Symbol.toStringTag,{value:"Module"})),vR=`<div class="columns-2">
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
</div>`,bR=`<div class="columns-3">
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
</div>`,yR=`<div class="columns-2 gap-12">
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
</div>`,wR=`<div class="columns-2" style="--column-gap: 4rem">
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
</div>`,xR=`<div class="columns-2 stack-laptop">
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
</div>`,CR=()=>s("div",{className:"flow",children:[r("h1",{children:"Columns"}),s("p",{className:"columns-2 stack-desktop",children:["The ",r("code",{children:"columns-N"})," class can be added to split text into",r("code",{children:"N"})," columns, from 1 to 5."]}),r("h2",{className:"font-mono",children:"Two Columns"}),s("p",{className:"columns-2 stack-desktop",children:["The ",r("code",{children:"columns-2"})," class splits the text into two columns."]}),r(_,{html:vR,caption:"Two Columns"}),r("h2",{className:"font-mono",children:"Three Columns"}),s("p",{className:"columns-3 stack-desktop",children:["The ",r("code",{children:"columns-3"})," class splits the text into two columns. And so on..."]}),r(_,{html:bR,caption:"Three Columns"}),r("h2",{className:"font-mono",children:"Gaps"}),s("p",{className:"columns-2 stack-desktop",children:["Add on of the ",r("code",{children:"gap-N"})," classes to define the gap between the columns (where ",r("code",{children:"N"})," is in units of 0.25rem from 1 to 16)."]}),r(_,{html:yR,caption:"Column Gap"}),r("h2",{className:"font-mono",children:"--column-gap"}),s("p",{className:"columns-2 stack-desktop",children:["Alternately, you can set the ",r("code",{children:"--column-gap"})," CSS property to anything you like."]}),r(_,{html:wR,caption:"Gap Property"}),r("h2",{className:"font-mono",children:"Stacking"}),s("p",{className:"columns-2 stack-desktop",children:["Add one of the ",r("code",{children:"stack-XXX"})," ",r(PT,{text:"breakpoint stacking"})," classes (e.g."," ",r("code",{children:"stack-mobile"}),", ",r("code",{children:"stack-tablet"}),", etc).  To have the columns reduce to one when the screen width is less than the breakpoint width."]}),r(_,{html:xR,caption:"Stacking Columns"})]}),kR=Object.freeze(Object.defineProperty({__proto__:null,default:CR},Symbol.toStringTag,{value:"Module"})),SR=()=>s("div",{className:"flow",children:[r("h1",{children:"Container"}),s("p",{className:"mar-b-none",children:["The ",r("code",{children:"container"})," class creates a fluid container that stretches to the full width of the parent element with some padding on each side."]}),s("p",{children:["By itself it's not particularly interesting.  There's really not much difference between this and defining an element with horizontal padding, e.g. using ",r("code",{children:"pad-h-8"}),"..."]}),s("div",{className:"container surface-2 border flow pad-v-6",children:[r("h3",{className:"font-mono",children:"container"}),r("p",{className:"mar-b-none",children:"We're very lucky in the sense that we've got two visionaries in the band.  David and Nigel are both like, uh, like poets, you know, like Shelley or Byron, or people like that. The two totally distinct types of visionaries.  It's like fire and ice, basically, you see, and I feel my role in the band, is to be kind of in the middle of that, kind of like lukewarm water, in a sense."})]}),r("h2",{children:"Breakpoint Widths"}),s("div",{className:"container-mobile surface-2 border pad-v-6",children:[r("h3",{className:"font-mono",children:"container-mobile"}),s("p",{className:"mar-v-4",children:["...but it gets more interesting when you add a breakpoint suffix to set the content width, e.g. ",r("code",{children:"container-mobile"}),".  Now the content will be centered and contained to the breakpoint size."]}),s("p",{children:["Now you may be wondering how this is any different to using the"," ",r("code",{children:"mobile"})," class to set the width and"," ",r("code",{children:"block-center"})," to center it?  Well it all comes down to being able to break out of the box."]}),s("section",{className:"popout blue bgc-30 fgc-90 pad-v-6",children:[r("h3",{className:"fgc-100 font-mono",children:"popout"}),r("p",{className:"mar-t-4 mar-b-none",children:"This is a popout section.  It's pushed out a bit wider than the normal content."})]}),r("p",{className:"mar-v-4",children:"He did a twist on it. A twist and it... He did, he did. He turned it around. We shoulda thought of that. We were so close. I mean if we had all you guys tied up, that probably woulda been fine."}),s("section",{className:"feature indigo bgc-30 fgc-90 pad-v-6",children:[r("h3",{className:"fgc-100 font-mono",children:"feature"}),r("p",{className:"mar-t-4 mar-b-none",children:"This is a feature section.  It's pushed out even further than the normal content.  How much more wider could this be? And the answer is..."})]}),r("p",{className:"mar-v-4",children:"But it's, it's still a stupid cover. It's such a fine line between stupid and... and clever. Yeah, and clever. Just that little turnabout..."}),s("section",{className:"full-width violet bgc-30 fgc-90 pad-h-8 pad-v-6",children:[r("h3",{className:"fgc-100 font-mono",children:"full-width"}),r("p",{className:"mar-t-4 mar-b-none",children:"...a lot wider!  This is a full-width section.  You see, most... most blokes, you know, will be playing at ten. You're on ten here... all the way up... all the way up... all the way up. You're on ten on your guitar...where can you go from there? Where? Nowhere. Exactly. What we do is if we need that extra... push over the cliff... you know what we do? Put it up to eleven. Eleven. Exactly. One louder."})]}),r("p",{className:"mar-v-4",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been...that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),s("section",{className:"full-width container-mobile purple bgc-30 fgc-90 pad-v-6",children:[r("h3",{className:"fgc-100 font-mono",children:"container-mobile"}),r("p",{className:"mar-t-4 mar-b-none",children:"You can add a container class to a full-width section and it will contain the content.  So you get a full width background, but contained content."})]}),r("p",{className:"mar-t-4 mar-b-none",children:`And I don't think that a sexy cover is the answer for why an album sells or doesn't sell because you tell me, the "White Album", what was that? There was nothing on that goddamn cover.`})]}),r("h2",{children:"Rem / px Widths"}),s("div",{className:"container-20rem surface-2 border pad-t-6",children:[r("h3",{className:"font-mono",children:"container-20rem"}),s("p",{className:"mar-t-4",children:["You can add any of the ",r("code",{children:"-Nrem"})," or ",r("code",{children:"-Npx"})," suffixes to the container class and the content will be set to that width. See the ",r(Ng,{})," utilities page."]}),r("p",{className:"mar-v-4",children:`It's a matter of compromise, we made a joke, and it was a long time ago, they're making it like a big deal. That's true. You know, if we were serious and we said "yes she should be forced to sniff... smell the glove" then you'd have a point you know but it's all a joke, isn't it, we're making fun of that sort of thing. It is and it isn't, she should be made to smell it, but... But not you know over and over again.`}),r("section",{className:"full-width container-20rem maroon bgc-30 fgc-90 pad-v-6",style:{"--link-text":"var(--color-70)","--link-hover":"var(--color-80)"},children:s("p",{className:"mar-v-none large",children:["Shout out to"," ",r("a",{href:"https://www.youtube.com/watch?v=c13gpBrnGEw",children:"Kevin Powell"})," and"," ",r("a",{href:"https://ryanmulligan.dev/blog/layout-breakouts/",children:"Ryan Mulligan"})," ","for this technique!"]})})]})]}),TR=Object.freeze(Object.defineProperty({__proto__:null,default:SR},Symbol.toStringTag,{value:"Module"})),LR=`<div class="inline border pad-2">
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
`,_R=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Display"}),r("h2",{children:"Display Modes"}),s(ae,{children:[s("p",{children:["The ",r("code",{children:"inline"}),", ",r("code",{children:"block"})," and"," ",r("code",{children:"inline-block"})," CSS classes can be used to set the"," ",r("code",{children:"display"})," mode.   These are useful when you have an element that would normally have one display type that you want displayed in a different way."]}),s("p",{children:["See the ",r(Cr,{})," and ",r(ta,{})," pages for information about using flex and grid display modes."]})]}),r(_,{html:LR,caption:"Display Modes",expand:!0})]}),NR=Object.freeze(Object.defineProperty({__proto__:null,default:_R},Symbol.toStringTag,{value:"Module"})),$R=`<div class="flex">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>`,IR=`<div class="flex top">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,ER=`<div class="flex middle">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,MR=`<div class="flex bottom">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,AR=`<div class="flex baseline">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,RR=`<div class="flex top gap-4">
  <h1 class="surface-2 mar-0 pad-4">
    Heading
  </h1>
  <p class="surface-3 mar-0 pad-2">
    This is some text.
  </p>
</div>
`,PR=`<div class="flex left gap-2">
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
`,OR=`<div class="flex center gap-2">
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
`,FR=`<div class="flex right gap-2">
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
`,BR=`<div class="flex space">
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
`,DR=`<div class="flex evenly">
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
`,jR=`<div class="flex gap-2 red">
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
`,zR=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Flex"}),r("h2",{children:"Flex Classes"}),s("p",{children:["Use the ",r("code",{children:"flex"})," CSS class to set the ",r("code",{children:"display"})," ","mode to ",r("code",{children:"flex"}),".  The default alignment mode"," ","(i.e. the ",r("code",{children:"align-items"})," CSS property) is ",r("code",{children:"stretch"}),"."]}),r(_,{html:$R,caption:".flex",expand:!0}),r("h2",{children:"Gaps"}),s("p",{children:["The ",r("code",{children:"gap-N"})," classes can be used to add a gap between successive elements.  Here ",r("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit (",r("code",{children:"0.25rem"})," by default)."]}),r(_,{html:RR,caption:".flex.gap-4",expand:!0}),r("h2",{children:"Flex Top"}),s("p",{children:["Add the ",r("code",{children:"top"})," (or ",r("code",{children:"start"}),") class to align the items to the stop."]}),r(_,{html:IR,caption:".flex.top",expand:!0}),r("h2",{children:"Flex Middle"}),s("p",{children:["Add the ",r("code",{children:"middle"})," class to align the items to the middle."]}),r(_,{html:ER,caption:".flex.middle",expand:!0}),r("h2",{children:"Flex Baseline"}),s("p",{children:["Add the ",r("code",{children:"baseline"})," class to align the items to the text baseline."]}),r(_,{html:AR,caption:".flex.baseline",expand:!0}),r("h2",{children:"Flex Bottom"}),s("p",{children:["Add the ",r("code",{children:"bottom"})," (or ",r("code",{children:"end"}),") class to align the items to the bottom."]}),r(_,{html:MR,caption:".flex.bottom",expand:!0}),r("h2",{children:"Flex Left"}),s("p",{children:["Items are align to the left (technically, ",r("code",{children:"flex-start"}),") by default but you can add the ",r("code",{children:"left"})," class if you want to make it explicit."]}),r(_,{html:PR,caption:".flex.left",expand:!0}),r("h2",{children:"Flex Center"}),s("p",{children:["Add the ",r("code",{children:"center"})," class to align the items to the center."]}),r(_,{html:OR,caption:".flex.center",expand:!0}),r("h2",{children:"Flex Right"}),s("p",{children:["Add the ",r("code",{children:"right"})," class to align the items to the right."]}),r(_,{html:FR,caption:".flex.right",expand:!0}),r("h2",{children:"Flex Space"}),s("p",{children:["Add the ",r("code",{children:"space"})," class to space the items as much as possible. This is equivalent to setting the ",r("code",{children:"justify-content"})," CSS property to ",r("code",{children:"space-between"}),"."]}),r(_,{html:BR,caption:".flex.space",expand:!0}),r("h2",{children:"Flex Evenly"}),s("p",{children:["Add the ",r("code",{children:"evenly"})," class to divide the space evenly between and around the items.  This is equivalent to setting the"," ",r("code",{children:"justify-content"})," CSS property to ",r("code",{children:"space-evenly"}),"."]}),r(_,{html:DR,caption:".flex.evenly",expand:!0}),r("h2",{children:"Flex Wrap"}),s("p",{children:["Add the ",r("code",{children:"wrap"})," class to set the ",r("code",{children:"flex-wrap"})," property to ",r("code",{children:"wrap"}),"."]}),r(_,{html:jR,caption:".flex.wrap",expand:!0})]}),WR=Object.freeze(Object.defineProperty({__proto__:null,default:zR},Symbol.toStringTag,{value:"Module"})),UR=`<div class="text-italic larger">
  Italic
</div>
<div class="text-underline larger">
  Underline
</div>
<div class="text-strike larger">
  Strike
</div>
`,HR=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Font Styles"}),r("p",{children:"The following classes are defined for common font styles."}),r(_,{html:UR,caption:"Font Styles",expand:!0})]}),GR=Object.freeze(Object.defineProperty({__proto__:null,default:HR},Symbol.toStringTag,{value:"Module"})),VR=`<div class="weight-thin larger">
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
</div>`,YR=`<div class="weight-100 larger">
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
</div>`,ZR=`<div class="thin larger">
  Thin
</div>
<div class="bold larger">
  Bold
</div>
<div class="thick larger">
  Thick
</div>
`,qR=`// define your own font weights...
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
`,KR=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Font Weights"}),r("h2",{children:"Weight Names"}),s(ae,{children:[s("p",{children:["The ",r("code",{children:"weight-<name>"})," classes can be used to set the font weight."]}),s("p",{children:["The values for ",r("code",{children:"<name>"})," can be",r("code",{children:"thin"}),", ",r("code",{children:"extra-light"}),", ",r("code",{children:"light"}),","," ",r("code",{children:"regular"}),", ",r("code",{children:"medium"}),", ",r("code",{children:"semi-bold"}),","," ",r("code",{children:"bold"}),", ",r("code",{children:"extra-bold"})," or ",r("code",{children:"black"}),"."]})]}),r(_,{html:VR,caption:"Weight Names",expand:!0}),r("h2",{children:"Weight Numbers"}),s(ae,{children:[r("p",{children:"Alternately you can use the corresponding weight numbers."}),s("p",{children:["Those numbers can be"," ",r("code",{children:"100"}),", ",r("code",{children:"200"}),", ",r("code",{children:"300"}),","," ",r("code",{children:"400"}),", ",r("code",{children:"500"}),", ",r("code",{children:"600"}),","," ",r("code",{children:"700"}),", ",r("code",{children:"800"})," or ",r("code",{children:"900"}),"."]})]}),r(_,{html:YR,caption:"Weight Numbers",expand:!0}),r("h2",{children:"Weight Aliases"}),s("p",{children:["There are some short-cut aliases for the common cases.  Note that we use ",r("code",{children:"thick"})," rather than ",r("code",{children:"black"})," to avoid any confusion with the color black."]}),r(_,{html:ZR,caption:"Weight Aliases",expand:!0}),r("h2",{children:"Custom Weights"}),s(ae,{children:[s("p",{children:["You can set the ",r("code",{children:"$font-weights"})," SASS variable if you want to define a different set of font weights."]}),r(Ie,{code:qR,caption:"Font Weights",language:"scss",className:"mar-b-8",expand:!0})]})]}),QR=Object.freeze(Object.defineProperty({__proto__:null,default:KR},Symbol.toStringTag,{value:"Module"})),XR=`<div class="large">
  <p class="font-sans">Sans-serif Font</p>
  <p class="font-serif">Serif Font</p>
  <p class="font-mono">Mono Font</p>
</div>
`,JR=`// redefine any of the following fonts to taste...
$font-sans:   'Open Sans', Helvetica, sans-serif;
$font-serif:  'Times New Roman', Times, Baskerville, Georgia, serif;
$font-mono:   Monaco, 'Bitstream Vera Sans Mono', 'Lucida Console', Terminal, monospace;

// ...before importing the badger.scss styles
@import "@abw/badger-css/styles/badger.scss";
`,eP=`// define your own font names...
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
`,nP=`p {
  font-family: $font-sans;
}
`,tP=`p {
  font-family: var(--font-sans);
}
`,rP=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Fonts"}),r("h2",{children:"Font Classes"}),s("p",{children:["The ",r("code",{children:"font-sans"})," CSS class can be used to select a sans-serif font, ",r("code",{children:"font-serif"})," for a serif font or ",r("code",{children:"font-mono"})," ","for a monospaced font."]}),r(_,{html:XR,caption:"Fonts",expand:!0}),r("h2",{children:"Font Stacks"}),r("p",{children:"The default font stacks are designed to provide a consistent appearance across different browsers and platforms.  They should usually match the operating system default UI font and should be available in all font weights.  There are also backup fonts included to render emojis."}),r("table",{className:"small brand celled shaded wide font-mono",children:s("tbody",{children:[s("tr",{children:[r("th",{className:"nowrap",children:"$font-sans"}),r("td",{children:'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'})]}),s("tr",{children:[r("th",{className:"nowrap",children:"$font-serif"}),r("td",{children:'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'})]}),s("tr",{children:[r("th",{className:"nowrap",children:"$font-mono"}),r("td",{children:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'})]})]})}),r("h2",{children:"Font Variables"}),r("p",{children:"Each of the above fonts is defined by a SASS variable which you can override to define your own font stacks."}),r(Ie,{code:JR,caption:"Customising Fonts",language:"scss",className:"mar-b-8",expand:!0}),s("p",{children:["These variables are exposed as the corresponding CSS custom properties:"," ",r("code",{children:"--font-sans"}),", ",r("code",{children:"--font-serif"}),","," ","and ",r("code",{children:"--font-mono"}),"."]}),s("div",{className:"grid-2 gap-4 stack-laptop mar-b-8",children:[r(Ie,{code:nP,caption:"Font Variables in SCSS",language:"scss",expand:!0}),r(Ie,{code:tP,caption:"Font Variables in CSS",language:"css",expand:!0})]}),r("h2",{children:"Custom Fonts"}),s(ae,{children:[s("div",{children:[r("p",{children:"You can define your own names for fonts."}),s("p",{children:["In this case the CSS classes created will be ",r("code",{children:"font-body"}),","," ",r("code",{children:"font-head"})," and ",r("code",{children:"font-code"}),".  The fonts will also be defined as the ",r("code",{children:"--font-body"}),", ",r("code",{children:"--font-head"}),","," ","and ",r("code",{children:"--font-code"})," CSS custom properties."]})]}),r(Ie,{code:eP,caption:"Font Aliases",language:"scss",className:"mar-b-8",expand:!0})]})]}),aP=Object.freeze(Object.defineProperty({__proto__:null,default:rP},Symbol.toStringTag,{value:"Module"})),lP=`<h3 class="mar-b-2"><code>grid-2</code></h3>
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
`,oP=`<div class="grid gap-4">
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
`,iP=`<div class="grid-2 gap-4">
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
`,sP=`<div class="grid-2 gap-v-8 gap-h-2">
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
`,dP=`<div class="grid-3 gap-2 top">
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
`,cP=`<div class="grid-3 gap-2 middle">
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
`,uP=`<div class="grid-3 gap-2 bottom">
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
`,hP=`<div class="grid-fit gap-2">
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
`,pP=`<div class="grid-fit gap-2" style="--min-width: 200px">
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
`,fP=`<h3><code>grid-fit</code></h3>

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
`,mP=`<style>
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
`,gP=`<div class="grid overlap">
  <img src="/badger-css/badger-forest.jpg" width="100%"/>
  <h1 class="fgc-100 pad-2 x3 weight-600" style="width: 70%">
    Anyone for mushrooms?
  </h1>
</div>
`,vP=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Grid"}),r("h2",{children:"Grid Columns"}),s("p",{children:["Use a ",r("code",{children:"grid-N"})," CSS class to set the ",r("code",{children:"display"})," ","mode to ",r("code",{children:"grid"})," where ",r("code",{children:"N"})," is the number of columns from 2 to 16."]}),r(_,{html:lP,caption:"Grid Columns",expand:!0}),r("h2",{children:"Gaps"}),s("p",{children:["The ",r("code",{children:"gap-N"})," classes can be used to add a gap between successive elements.  Here ",r("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit (",r("code",{children:"0.25rem"})," by default)."]}),r(_,{html:iP,caption:"Grid Gaps",expand:!0}),r("h2",{children:"Vertical and Horizontal Gaps"}),s("p",{children:["The the ",r("code",{children:"gap-v-N"})," and ",r("code",{children:"gap-h-N"})," classes can be used to define the vertical and horizontal gaps separately. Again, ",r("code",{children:"N"})," is a number from 1 to 16 representing multiples of the default spacing unit."]}),r(_,{html:sP,caption:"Grid Gaps",expand:!0}),r("h2",{children:"Single Column Grid"}),s("p",{children:["The ",r("code",{children:"grid"})," CSS class (or ",r("code",{children:"grid-1"})," which does the same thing) creates a single column grid.  It's useful because it then allows you to use the ",r("code",{children:"gap-N"})," classes to add a vertical gap between child components."]}),r(_,{html:oP,caption:"Single Column Grid",expand:!0}),r("h2",{children:"Grid Fit"}),s("p",{children:["The ",r("code",{children:"grid-fit"})," CSS class will fit as many items into the grid as it can and then wrap onto the next line."]}),r(_,{html:hP,caption:"Grid Fit"}),r("h2",{children:"Grid Fill"}),s("p",{children:["The ",r("code",{children:"grid-fill"})," CSS class is similar to ",r("code",{children:"grid-fit"}),". The difference between them is what happens when there are't enough items to fill the container width.  ",r("code",{children:"grid-fit"})," will stretch them whereas ",r("code",{children:"grid-fill"})," will not."]}),r(_,{html:fP,caption:"Grid Fill"}),r("h2",{children:"Grid Fit/Fill Size"}),s("p",{children:["Both ",r("code",{children:"grid-fit"})," and ",r("code",{children:"grid-fill"})," can define a minimum size for each child element.  By default this is"," ",r("code",{children:"100px"})," wide.  You can set the ",r("code",{children:"--min-width"})," property to change it."]}),r(_,{html:pP,caption:"Grid Size"}),r("h2",{children:"Grid Top"}),s("p",{children:["Add the ",r("code",{children:"top"})," (or ",r("code",{children:"start"}),") CSS class to align items to the top of grid columns."]}),r(_,{html:dP,caption:"Grid Top",expand:!0}),r("h2",{children:"Grid Middle"}),s("p",{children:["Add the ",r("code",{children:"middle"})," CSS class to align items to the middle of grid columns."]}),r(_,{html:cP,caption:"Grid Middle",expand:!0}),r("h2",{children:"Grid Bottom"}),s("p",{children:["Add the ",r("code",{children:"bottom"})," (or ",r("code",{children:"end"}),") CSS class to align items to the end of grid columns."]}),r(_,{html:uP,caption:"Grid Bottom",expand:!0}),r("h2",{children:"Grid Overlap"}),s("p",{children:["Add the ",r("code",{children:"overlap"})," CSS class to stack all children of the grid on top of each other.  This can be used when you want to layer some content on top of a background, for example."]}),r(_,{html:gP,caption:"Grid Overlap",expand:!0}),r("p",{children:"You can also use it to hide previous components.  In this example, we create a label with a checkbox input (which is functional) but hide it with overlaid content."}),r(_,{html:mP,caption:"Grid Overlap",expand:!0}),r("p",{children:"Why is this useful?"})]}),bP=Object.freeze(Object.defineProperty({__proto__:null,default:vP},Symbol.toStringTag,{value:"Module"})),yP=()=>s("div",{className:"prose",children:[r("h1",{children:"Utility Classes"}),s("p",{className:"intro wide",children:["CSS utility classes are ",r("i",{children:"extremely"})," useful for applying styles to elements on an ad-hoc basis.  But they shouldn't be used as a substitute for writing CSS for reusable styles."]}),s(ae,{children:[s("div",{children:[r("h2",{children:"Moderation in All Things"}),s("p",{children:["Some CSS frameworks, most notably"," ",r("a",{href:"https://tailwindcss.com/",children:"tailwind.css"}),", have taken this to the extreme where everything is a utility class and you never need to write any CSS at all. Although this approach has some merits for rapid prototyping, I personally wouldn't use it when building a non-trivial site because I think that it can have a negative impact on readability and maintainability."]}),s("p",{children:["I prefer to take the pragmatic approach and use utility classes to apply ",r("i",{children:"exceptional"})," styling to elements that don't warrant having their own dedicated CSS classes.  The general rule that I follow is to create dedicated CSS classes for components that I'm using in different places in a site.  For example, a product card, a user avatar, button and form styling, and so.  This ensures that they are consistent and can easily be changed across the whole site by updating the rules in the stylesheet."]}),s("p",{children:["For styling that depends on the context in which an element is being used, I'll generally reach for utility classes. By far the most useful of these, and the ones that I use more than any other, are the ",r("code",{children:"mar"})," and ",r("code",{children:"pad"}),` utility classes to add custom margins and padding.  The amount of margin or padding required on an element will often depend on the other elements around it, so there isn't a "one size fits all" solution. Other useful utility classes include those to set the font size, add a border or drop shadow, or to set the layout to use flexbox or grid.`]}),r("h2",{children:"CSS Custom Properties"}),s("p",{children:['CSS custom properties or CSS variables as they are also know, are an incredibly powerful addition to the toolkit for any web designer or developer.  They allow you to define reusable "snippets" of CSS that can easily be applied to different elements.  They can be used to replace much of the functionality that was previously only accessible by using variables and/or mixins in a CSS pre-processing language like'," ",r("a",{href:"https://sass-lang.com/",children:"SASS"}),"."]})]}),s("div",{children:[r("h2",{children:"SASS Variables"}),r("p",{children:"Although CSS custom properties have largely removed the need for CSS pre-processors like SASS, there are still benefits to be had from using them.  One benefit is that they can help to reduce bloat in your CSS files.  SASS allows you to define variables that can be used to implement system-wide configuration options that are then compiled into the generated CSS files.  In contrast, any CSS custom properties that you use must be included in the CSS and, if overdone, can lead to significant increases in the file size."}),r("h2",{children:"When to Use Each?"}),r("p",{children:"The general rule that I follow is to use SASS variables for configuration options that I might want to change on a site-wide basis but generally remain constant throughout the site.  For example, the default font face, the breakpoints, the colors or default spacing units.  It's useful to have these defined as variables because it allows me to plug Badger CSS into a project, tweak the default settings, and then get coding.  If at some point in the future I decide they're not quite right, or if the client or a designer wants me to change them, then it should be easy to do so, and they should be applied universally."}),r("p",{children:"For styles that I might want to change in different parts of the site, need to reflect some application state (e.g. the differences between a success, warning or error message), or that should have different properties depending on the user selecting a light or dark theme, then CSS properties are generally the way to go."}),r("p",{children:"For styles that need to be applied on an ad-hoc basis, utility classes are what I reach for."})]})]})]}),wP=Object.freeze(Object.defineProperty({__proto__:null,default:yP},Symbol.toStringTag,{value:"Module"})),xP=`<div class="relative border" style="height: 140px">
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
`,CP=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Position"}),r("h2",{children:"Position Classes"}),s("p",{children:["Add the ",r("code",{children:"absolute"}),", ",r("code",{children:"relative"})," and"," ",r("code",{children:"fixed"})," CSS classes to set the position type."]}),s("p",{children:["For elements that are set to ",r("code",{children:"absolute"})," or ",r("code",{children:"fixed"})," ","position, the ",r("code",{children:"top"}),", ",r("code",{children:"bottom"}),", ",r("code",{children:"left"})," ","and ",r("code",{children:"right"})," classes can be used to position them against the corresponding edge of the closest parent element with the"," ",r("code",{children:"relative"})," position type."]}),r(_,{html:xP,caption:"Position",expand:!0})]}),kP=Object.freeze(Object.defineProperty({__proto__:null,default:CP},Symbol.toStringTag,{value:"Module"})),SP=`<div class="scroll-x border pad-2 nowrap mar-b-2">
  Yeah, I like it, just been fooling about with it for a few months now, very delicate... Yeah, it's part of a... trilogy really, a musical trilogy I'm doing, in, D minor, which I always find is really the saddest of all keys really. I don't know why, but it makes people weep instantly. You play a "baaaaa... baaaaaa..." it's the horn part. "...baaaa, baaaaa...", yeah, just simple lines intertwining, you know very much like, I'm really influenced by Mozart and Bach, It's sort of in between those, really, it's like a Mach piece really.<
</div>
`,TP=`<div class="scroll-y border pad-2" style="height: 7rem">
  Yeah, I like it, just been fooling about with it for a few months
  now, very delicate... Yeah, it's part of a... trilogy really, a
  musical trilogy I'm doing, in, D minor, which I always find is really
  the saddest of all keys really. I don't know why, but it makes people
  weep instantly. You play a "baaaaa... baaaaaa..." it's the horn part.
  "...baaaa, baaaaa...", yeah, just simple lines intertwining, you
  know very much like, I'm really influenced by Mozart and Bach,
  It's sort of in between those, really, it's like a Mach piece
  really.
</div>`,LP=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Scolling"}),r("h2",{children:"Scroll Classes"}),s("p",{children:["Add the ",r("code",{children:"scroll-x"})," or ",r("code",{children:"scroll-y"})," CSS classes to set ",r("code",{children:"overflow-x"})," or ",r("code",{children:"overflow-y"})," to ",r("code",{children:"scroll"}),", respectively."]}),r("p",{children:`Be warned that you'll also need to set widths and/or heights as appropriate to stop the layout engine from doing the "right" thing and expanding the containers to fit the content.`}),r(_,{html:SP,caption:"scroll-x",expand:!0}),r(_,{html:TP,caption:"scroll-y",expand:!0})]}),_P=Object.freeze(Object.defineProperty({__proto__:null,default:LP},Symbol.toStringTag,{value:"Module"})),NP=`<div class="surface-3 pad-8">
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
</div>`,$P=`<div class="surface-3 pad-8">
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
`,IP=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Shadows"}),r("h2",{children:"Shadow Classes"}),s("p",{children:["Use the ",r("code",{children:"shadow-1"}),", ",r("code",{children:"shadow-2"}),","," ",r("code",{children:"shadow-3"}),", ",r("code",{children:"shadow-4"})," and ",r("code",{children:"shadow-5"})," ","CSS classes to add a box shadow of progressively larger size.  Larger shadows can be used to suggest that an element is lifted higher off the background and thus appears closer to the foreground."]}),r(_,{html:NP,caption:"Shadows",expand:!0}),r("h2",{children:"Shadow Properties"}),s(ae,{children:[s("p",{children:["The shadow styles are defined as CSS custom properties, (e.g."," ",r("code",{children:"--shadow-1"}),", ",r("code",{children:"--shadow-2"}),", etc).  The colors and opacities used for the shadows depend on both the shadow depth and color theme.  For the default light theme the base color is"," ",r("code",{children:"--grey-0"})," and the shadows are more transparent.  For the dark theme, where shadows need to be a bit more prominent to be visible, the base color is ",r("code",{children:"black"})," and the shadows are more opaque."]}),s("p",{children:["The benefit of CSS custom properties is that you can easily apply them to your own style rules.  In this example we define a"," ",r("code",{children:".shadow-example"})," rule which adds a ",r("code",{children:"box-shadow"})," using the ",r("code",{children:"--shadow-2"})," custom property.  The shadow color will be set correctly for both light and dark themes so you don't need to worry about defining separate rules for each."]})]}),r(_,{html:$P,caption:"Shadow Style",expand:!0})]}),EP=Object.freeze(Object.defineProperty({__proto__:null,default:IP},Symbol.toStringTag,{value:"Module"})),MP=`<div class="smallest">Smallest text</div>
<div class="smaller">Smaller text</div>
<div class="small">Small text</div>
<div>Normal size text</div>
<div class="large">Large text</div>
<div class="larger">Larger text</div>
<div class="largest">Largest text</div>
`,AP=`<div>x1</div>
<div class="x2">x2</div>
<div class="x3">x3</div>
<div class="x4">x4</div>
<div class="x5">x5</div>
<div class="x6">x6</div>
<div class="x7">x7</div>
<div class="x8">x8</div>
<div class="x9">x9</div>
<div class="x10">x10</div>
`,RP=`// define your own text sizes...
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
@import "@abw/badger-css/styles/badger.scss";`,PP=({heading1:e="Class",heading2:n="Rem Size",heading3:t=s(At,{children:["Pixel Size ",r("span",{className:"smaller",children:"(when 1rem=16px)"})]}),rows:a})=>s("table",{className:"brand celled striped properties small wide mar-b-2",children:[r("thead",{children:s("tr",{children:[r("th",{children:e}),r("th",{children:n}),r("th",{children:t})]})}),r("tbody",{children:a.map(l=>s("tr",{children:[r("td",{children:r("code",{children:l[0]})}),r("td",{children:l[1]}),r("td",{children:l[2]})]},l[0]))})]}),OP=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Text Sizes"}),r("h2",{children:"Size Classes"}),s("p",{children:["Use the ",r("code",{children:"smallest"}),", ",r("code",{children:"smaller"}),","," ",r("code",{children:"small"}),", ",r("code",{children:"medium"})," (default)"," ",r("code",{children:"large"}),", ",r("code",{children:"larger"})," and ",r("code",{children:"largest"})," CSS classes to set the text size. These are defined as SASS variables which you can override (e.g. ",r("code",{children:"$size-large"}),") and CSS custom properties which you can use in your own stylesheets or inline styles (e.g. ",r("code",{children:"--size-large"}),")."]}),r(_,{html:MP,caption:"Text Sizes",expand:!0}),r("h2",{children:"Default Sizes"}),s(ae,{children:[r("p",{children:"The pre-defined values for the sizes are shown here."}),r(PP,{rows:[["smallest","0.625rem","10px"],["smaller","0.75rem","12px"],["small","0.875rem","14px"],["medium","1rem","16px"],["large","1.25rem","20px"],["larger","1.5rem","24px"],["largest","2rem","32p<"]]})]}),r("h2",{children:"Custom Sizes"}),s(Dt,{code:RP,caption:"Custom Sizes",language:"scss",expand:!0,children:[s("p",{children:["You can set the ",r("code",{children:"$sizes"})," SCSS variable if you want to define a different set of sizes, either to give them different names or values."]}),s("p",{children:["In the example shown here the generated CSS classes would be"," ",r("code",{children:"xxs"}),", ",r("code",{children:"xs"}),", ",r("code",{children:"s"}),","," ",r("code",{children:"m"}),", ",r("code",{children:"l"}),", ",r("code",{children:"xl"})," and ",r("code",{children:"xxl"}),"."]})]}),r("h2",{children:"Size Multipliers"}),s("p",{children:["For larger text sizes you can use the size multiple classes:"," ",r("code",{children:"x2"}),", ",r("code",{children:"x3"}),", etc., up to ",r("code",{children:"x10"}),". These are all multiples of ",r("code",{children:"1rem"}),"."]}),r(_,{html:AP,caption:"Text Sizes",expand:!0})]}),FP=Object.freeze(Object.defineProperty({__proto__:null,default:OP},Symbol.toStringTag,{value:"Module"})),BP=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
  <div class="mar surface pad-2">
    This has 1 unit of margin.
  </div>
</div>
`,DP=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
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
`,jP=`<div class="grey20 bgc-50 fgc-90 bdc-40 border mar-b-4">
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
`,zP=`<div class="pad-2 grey20 bgc-50 fgc-90 mar-b-2">
  Two units of padding all around.
</div>
<div class="pad-v-4 pad-h-8 grey20 bgc-50 fgc-90 border">
  Four units of padding vertically and eight units
  horizontally
</div>
`,WP=`<div class="grid-1 gap-4 surface-3 pad-4">
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
`,UP=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Spacing"}),s("p",{children:["The ",r("code",{children:"mar"})," and ",r("code",{children:"pad"})," CSS utility classes can be used to set the margins and padding for and element."]}),r("h2",{children:"Margins"}),s("p",{children:["The ",r("code",{children:"mar"})," class by itself will add 1 unit of margin to all four sides of an element.  The default unit size is ",r("code",{children:"0.25rem"}),"."]}),r(_,{html:BP,caption:"Margins",expand:!0}),s("p",{children:["The ",r("code",{children:"mar-N"})," classes will add multiples of the unit, where ",r("code",{children:"N"})," is one of the values:"," ",r("code",{children:"0"}),", ",r("code",{children:"1"}),", ",r("code",{children:"2"}),", ",r("code",{children:"3"}),","," ",r("code",{children:"4"}),", ",r("code",{children:"6"}),", ",r("code",{children:"8"}),", ",r("code",{children:"10"}),","," ",r("code",{children:"12"}),", ",r("code",{children:"16"}),", ",r("code",{children:"20"}),","," ",r("code",{children:"24"}),", ",r("code",{children:"28"})," or ",r("code",{children:"32"}),".  The"," ",r("code",{children:"mar-1"})," class is effectively the same as just ",r("code",{children:"mar"})," ","but is included for completeness.  Also note that ",r("code",{children:"mar-0"})," can be used to remove any margin that would otherwise be present on an element."]}),r(_,{html:DP,caption:"Margin Multiple",expand:!0}),r("h2",{children:"Margin Directions"}),s("p",{children:["You can also specify the direction for the margin using the"," ",r("code",{children:"mar-t"})," (top), ",r("code",{children:"mar-r"})," (right),"," ",r("code",{children:"mar-b"})," (bottom), ",r("code",{children:"mar-l"})," (left),"," ",r("code",{children:"mar-v"})," (vertical: top and bottom) and"," ",r("code",{children:"mar-h"})," (horizontal: left and right) classes. The default is 1 unit of margin or a ",r("code",{children:"-N"})," suffix can be added as a multiplier.  For example ",r("code",{children:"mar-t-4"})," to add 4 units of margin to the top of an element."]}),r(_,{html:jP,caption:"Margin Direction",expand:!0}),r("h2",{children:"Padding"}),s("p",{children:["The ",r("code",{children:"pad"})," and related utility classes work in the same way but add padding inside the element."]}),r(_,{html:zP,caption:"Padding",expand:!0}),s("p",{children:["One important thing to note is that padding is applied in multiples of 0.25",r("b",{children:"em"})," whereas margins use 0.25",r("b",{children:"rem"}),".  This is because you usually want spacing around elements to be consistent (which rem provides) but padding inside an element should be based on the text size (which em provides)."]}),r(_,{html:WP,caption:"Pad Sizes",expand:!0})]}),HP=Object.freeze(Object.defineProperty({__proto__:null,default:UP},Symbol.toStringTag,{value:"Module"})),GP=`<div class="flex gap-4">
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
`,VP=`<div class="flex gap-4">
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
`,YP=`<table class="wide shaded lined">
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
`,ZP=`// redefine $splits to include what you want...
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
@import "@abw/badger-css/styles/badger.scss";`,qP=[["2","One half","50%"],["3","One third","33.33333333%"],["2-3","Two thirds","66.66666666%"],["4","One quarter","25%"],["3-4","Three quarters","75%"],["5","One fifth","20%"],["2-5","Two fifths","40%"],["3-5","Three fifths","60%"],["4-5","Four fifths","80%"],["6","One sixth","16.66666666%"],["5-6","Five sixth","83.33333333%"],["7","One seventh","14.28571429%"],["2-7","Two sevenths","28.57142858%"],["3-7","Three sevenths","42.85714287%"],["4-7","Four sevenths","57.14285716%"],["5-7","Five sevenths","71.42857145%"],["6-7","Six sevenths","85.71428574%"],["8","One eighth","12.5%"],["3-8","Three eighths","37.5%"],["5-8","Five eighths","62.5%"],["7-8","Seven eighths","87.5%"],["9","One ninth","11.11111111%"],["2-9","Two ninths","22.22222222%"],["4-9","Four ninths","44.44444444%"],["5-9","Five ninths","55.55555555%"],["7-9","Seven ninths","77.77777777%"],["8-9","Eight ninths","88.88888888%"],["10","One tenth","10%"],["3-10","Three tenths","30%"],["7-10","Seven tenths","70%"],["9-10","Nine tenths","90%"],["11","One eleventh","9.090909090%"],["12","One twelfth","8.333333333%"],["13","One thirteenth","7.692307692%"],["14","One fourteenth","7.142857142%"],["15","One fifteenth","6.666666666%"],["16","One sixteenth","6.25%"]],KP=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Split"}),r("h2",{children:"Evenly Split Columns"}),s(ae,{children:[s("p",{children:["The ",r("code",{children:"split-N"})," classes can be used to set the width of an element to a fraction of the width of the parent container. For example, ",r("code",{children:"split-2"})," sets the width to one half,"," ",r("code",{children:"split-3"})," to one third, and so on.  The value for"," ",r("code",{children:"N"})," can be anything from 2 to 16."]}),s("p",{children:["They can be useful in conjunction with the ",r(Cr,{})," classes to constrain columns to be a particular width.  Otherwise the flexbox layout engine will try to expand the width of columns that have more content."]})]}),r(_,{html:GP,caption:"Even Splits"}),r("h2",{children:"Unevenly Split Columns"}),s("p",{children:["The ",r("code",{children:"split-N-M"})," classes can be used to create uneven splits. For example, ",r("code",{children:"split-2-5"})," creates a columns that is two fifths of the width."]}),s("p",{children:["These are defined for all uneven splits up to tenths (e.g. there's a ",r("code",{children:"split-3-10"})," class for three tenths, but no ",r("code",{children:"split-3-11"})," ","for three elevenths).  Not that redundant classes are not included. For example, there's no ",r("code",{children:"split-3-6"})," class because it's one half or ",r("code",{children:"split-2"}),"."]}),r(_,{html:VP,caption:"Uneven Splits"}),r("h2",{children:"Tables"}),s("p",{children:["The ",r("code",{children:"split-*"})," classes also work with table columns. This can be useful to prevent the layout engine from expanding columns to fit the content.  It's especially useful if you have multiple tables and you want the columns to be the same width in each of the tables."]}),r(_,{html:YP,caption:"Table Splits"}),r("h2",{children:"Split Classes"}),s(ae,{children:[r("p",{children:"The CSS classes and their corresponding widths are listed below."}),s("p",{children:["You can set the ",r("code",{children:"$splits"})," SASS variable if you want to define a different set of splits."]})]}),r(Dt,{code:ZP,caption:"Custom Splits",language:"scss",expand:!0,children:s("table",{className:"brand celled striped properties small wide mar-b-2",children:[r("thead",{children:s("tr",{children:[r("th",{children:"Class"}),r("th",{children:"Size"}),r("th",{children:"%age Width"})]})}),r("tbody",{children:qP.map(e=>s("tr",{children:[r("td",{children:s("code",{children:["split-",e[0]]})}),r("td",{children:e[1]}),r("td",{children:e[2]})]},e[0]))})]})})]}),QP=Object.freeze(Object.defineProperty({__proto__:null,default:KP},Symbol.toStringTag,{value:"Module"})),XP=`<h4 class="font-mono smaller">stack-widescreen</h4>
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
`,JP=`<h4 class="font-mono smaller">stack-widescreen</h4>
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
`,eO={mobile:30,tablet:50,laptop:70,desktop:80,widescreen:90},nO=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Stacking Split Columns"}),s("p",{children:["One of the problems with creating columns using"," ",r(ta,{}),", ",r(Cr,{})," and  ",r(RT,{})," is that sometimes a user's screen size isn't large enough to accommodate them."]}),s("p",{children:["The ",r("code",{children:"stack-*"})," classes can be used to stack columns when the screen size is narrower than a threshold breakpoint. These are ",r("code",{children:"stack-mobile"}),", ",r("code",{children:"stack-tablet"}),","," ",r("code",{children:"stack-laptop"}),", ",r("code",{children:"stack-desktop"})," and"," ",r("code",{children:"stack-widescreen"}),"."]}),r("h2",{children:"Grid Stacking"}),s(ae,{children:[s("p",{children:["This example shows how adding a ",r("code",{children:"stack-*"})," class to an element that has one of the ",r("code",{children:"grid-*"})," classes will cause the columns to be stacked at different breakpoints."]}),r(Kr,{title:"Try it out!",children:"Try resizing your browser window and see how the grid elements below get stacked."})]}),r(_,{html:XP,caption:"Stacking Grids"}),r("h2",{children:"Flexbox Stacking"}),s("p",{children:["This example shows the same thing for ",r("code",{children:"flex"})," containers."]}),r(_,{html:JP,caption:"Stacking Flexbox"}),r("h2",{children:"Breakpoint Names"}),s(ae,{children:[r("p",{children:"The breakpoint names and their corresponding widths in rems and pixels (assuming 1rem = 16px) are shown below."}),s("p",{children:["You can set the ",r("code",{children:"$breakpoints"})," SASS variable if you want to define a different set of breakpoints."]})]}),r(Dt,{code:Zv,caption:"Custom Breakpoints",language:"scss",expand:!0,children:s("table",{className:"brand celled striped properties small wide mar-b-2",children:[r("thead",{children:s("tr",{children:[r("th",{children:"Class"}),r("th",{children:"Rems"}),r("th",{children:"Pixels"})]})}),r("tbody",{children:Object.entries(eO).map(([e,n])=>s("tr",{children:[r("td",{children:r("code",{children:e})}),s("td",{children:[n,"rem"]}),s("td",{children:[n*16,"px"]})]},e))})]})})]}),tO=Object.freeze(Object.defineProperty({__proto__:null,default:nO},Symbol.toStringTag,{value:"Module"})),rO=`<div class="surface border pad-2">
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
`,aO=`<div class="grid-2 gap-2 surface-3 pad-2">
  <div class="surface pad-2">
    surface
  </div>
  <div class="paper pad-2">
    paper (alias)
  </div>
</div>
`,lO=`<div class="surface-1 border pad-2 mar-b-2">
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
`,oO=`<div class="grid-3 gap-2 smallish">
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
`,iO=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Surfaces"}),s("p",{children:['When building UI components it can be useful to think in terms of "surfaces", with each surface getting progressively "closer" to the user and demanding their closer attention. You may want to combine these with the ',r("code",{children:"shadow-N"})," classes to further emphasise the effect."]}),r("p",{children:"As a general rule surfaces that are in the foreground should be lighter than those in the background.  Note that this applies to dark themes as well as light themes."}),r("h2",{children:"Surface Classes"}),s("p",{children:["Use the ",r("code",{children:"surface-1"}),", ",r("code",{children:"surface-2"}),","," ",r("code",{children:"surface-3"}),", ",r("code",{children:"surface-4"})," and"," ",r("code",{children:"surface-5"})," CSS classes to define elements with appropriate background and text colors to achieve this effect.  The lower numbers are meant to be further in the background with higher numbers being closer to the foreground."]}),r(_,{html:rO,caption:"Surfaces",expand:!0}),s("p",{children:["The ",r("code",{children:"surface"})," class is a special case being used here to apply a background color for the examples.  When using a light theme this"," ","is ",r("code",{children:"white"})," and for a dark theme it is ",r("code",{children:"black"}),". This also has the ",r("code",{children:"paper"})," alias (which I find easier to remember)."]}),r(_,{html:aO,caption:"surface / paper",expand:!0}),s("p",{children:["The styles are defined using CSS variables for the foreground, background and border colors, e.g. ",r("code",{children:"--color"}),", ",r("code",{children:"--background-color"})," ","and ",r("code",{children:"--border-color"}),". In turn these are defined using the ",r("code",{children:"grey"})," color range depending on the color theme. For example, the ",r("code",{children:"--background-color"}),"for ",r("code",{children:"--surface-3"}),"is defined to be ",r("code",{children:"--color-90"})," by default, and ",r("code",{children:"--color-10"})," when the dark theme is in effect."]}),r("h2",{children:"Surfaces With Borders"}),s("p",{children:["Add the ",r("code",{children:"border"})," CSS class to add a border around a surface. You can also add the ",r(Fd,{className:"code",text:"bdr-N"})," classes to set the border radius."]}),r(_,{html:lO,caption:"Surface Borders",expand:!0}),r("h2",{children:"Colored Surfaces"}),r("p",{children:"Add any of the color classes to get different colored surfaces."}),r(_,{html:oO,caption:"Color Surfaces"})]}),sO=Object.freeze(Object.defineProperty({__proto__:null,default:iO},Symbol.toStringTag,{value:"Module"})),dO=`<div class="flex gap-2 mar-b-2">
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
`,cO=`<div class="flow">
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
</div>`,uO=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Typography"}),r("h2",{children:"Headings"}),s("p",{children:["Headings have ",r("code",{children:"text-wrap: balance"})," set to balance the length of long lines.  The ",r("code",{children:"line-height"})," is reduced to ",r("code",{children:"1.3"}),"."]}),s("p",{children:["Margins and padding are removed by default.  You can add them in yourself, either using the ",r(Bd,{})," utiltiy classes or globally to match your site style. Or use something like the ",r("code",{children:"flow"})," class (see below) to add margins between elements where appropriate."]}),r(_,{html:dO,caption:"Headings"}),r("h2",{children:"Flow"}),s("p",{children:["Use the ",r("code",{children:"flow"})," class on a container to add spacing between block elements.  Thanks to"," ",r("a",{href:"https://andy-bell.co.uk/my-favourite-3-lines-of-css/",children:"Andy Bell"})," ","for this one."]}),r(_,{html:cO,caption:"Flow"})]}),hO=Object.freeze(Object.defineProperty({__proto__:null,default:uO},Symbol.toStringTag,{value:"Module"})),pO=`<div class="grid-1 gap-4">
  <input type="text" value="A wide input"/>
  <button class="blue wide">
    A wide button
  </button>
</div>`,fO=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,mO=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,gO=`<div class="fgc-100 grid gap-2 scroll-x">
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
</div>`,vO=`// define your own range of rem widths...
$rem-widths:
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 25, 30,
  35, 40, 45, 50, 60, 70, 80, 90, 100 !default;

// ...before importing the badger.scss styles
@import '@abw/badger-css/styles/badger.scss';
`,bO=[2,4,6,8,10,12,14,16,18,20,25,30,35,40,45,50,60,70,80,90,100],yO=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Widths"}),r("h2",{children:"Wide"}),s("p",{children:["Use the ",r("code",{children:"wide"})," CSS class to set an inline element to expand to the full width of the container."]}),r(_,{html:pO,caption:"Wide",expand:!0}),r("h2",{children:"Width Classes"}),s(ae,{children:[s("p",{children:["The ",r("code",{children:"width-Nrem"})," classes can be used to set the width of an element to a number of rem units."]}),s("p",{children:["The values for ",r("code",{children:"N"})," can be",r("code",{children:"2"}),", ",r("code",{children:"4"}),","," ",r("code",{children:"6"}),", ",r("code",{children:"8"}),", ",r("code",{children:"10"}),", ",r("code",{children:"12"}),","," ",r("code",{children:"14"}),", ",r("code",{children:"16"}),", ",r("code",{children:"18"}),", ",r("code",{children:"20"}),","," ",r("code",{children:"25"}),", ",r("code",{children:"30"}),", ",r("code",{children:"35"}),", ",r("code",{children:"40"}),","," ",r("code",{children:"45"}),", ",r("code",{children:"50"}),", ",r("code",{children:"60"}),","," ",r("code",{children:"70"}),", ",r("code",{children:"80"}),", ",r("code",{children:"90"})," or ",r("code",{children:"100"}),"."]})]}),r(_,{html:fO,caption:"Widths",expand:!0}),r("h2",{children:"Pixel Width Classes"}),s("p",{children:["If you prefer to think in pixels, you can use the corresponding"," ",r("code",{children:"width-Npx"})," classes instead."]}),r(_,{html:mO,caption:"Widths in Px",expand:!0}),r("h2",{children:"Max Width Classes"}),s(ae,{children:[s("p",{children:["The ",r("code",{children:"max-width-Nrem"})," classes can be used to set the maximum width of an element to a number of rem units.  In this case the width of the element will be constrained to the width of the parent element. You can also use the corresponding ",r("code",{children:"max-width-Npx"})," classes if you prefer to think in pixels."]}),s("p",{children:["The ",r("code",{children:"width-*"})," and ",r("code",{children:"max-width-*"})," classes work by using the ",r("code",{children:"--width"})," custom property which is set to the appropriate number of rem units based on the ",r("code",{children:"-Nrem"})," ","or ",r("code",{children:"-Npx"})," suffix."]})]}),r(_,{html:gO,caption:"Widths",expand:!0}),r("h2",{children:"Rem/Pixel Sizes"}),s(ae,{children:[r("p",{children:"The corresponding pixel widths (assuming 1rem = 16px) for each of the classes are shown below."}),s("p",{children:["You can set the ",r("code",{children:"$rem-widths"})," SASS variable if you want to define a different set of width classes."]})]}),r(Dt,{code:vO,caption:"Custom Sizes",language:"scss",expand:!0,children:s("table",{className:"brand celled striped properties small wide mar-b-2",children:[r("thead",{children:s("tr",{children:[r("th",{children:"Rem Class"}),r("th",{children:"Pixel Class"}),r("th",{children:"Rems"}),r("th",{children:"Pixels"})]})}),r("tbody",{children:bO.map(e=>s("tr",{children:[r("td",{children:s("code",{children:["width-",e,"rem"]})}),r("td",{children:s("code",{children:["width-",e*16,"px"]})}),r("td",{children:e}),r("td",{children:e*16})]},e))})]})})]}),wO=Object.freeze(Object.defineProperty({__proto__:null,default:yO},Symbol.toStringTag,{value:"Module"})),xO=`<div class="grid-1 gap-6">
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
</div>`,CO=()=>s("div",{className:"prose flow",children:[r("h1",{children:"Wrap"}),s("p",{children:["The ",r("code",{children:"wrap"})," CSS class sets the ",r("code",{children:"text-wrap"})," to"," ",r("code",{children:"wrap"})," (which is the default).The ",r("code",{children:"nowrap"})," class unsurprisingly sets it to ",r("code",{children:"nowrap"}),".  The ",r("code",{children:"wrap-balance"}),","," ",r("code",{children:"wrap-pretty"})," and ",r("code",{children:"wrap-stable"})," classes set it to ",r("code",{children:"balance"}),", ",r("code",{children:"pretty"})," and ",r("code",{children:"stable"})," respectively."]}),r("p",{children:"You may not see much difference between them.  Try resizing your browser window to see how they flow differently."}),r(_,{html:xO,caption:"wrap"})]}),kO=Object.freeze(Object.defineProperty({__proto__:null,default:CO},Symbol.toStringTag,{value:"Module"})),SO=e=>D.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},D.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z",fill:"currentColor"})),wm="sidebar",TO="no-sidebar",qv="1.0.16",Kv="2024-04-24",xm="2018",ou=Kv.match(/^(\d+)/)[1],LO=ou===xm?ou:`${xm} - ${ou}`,_O=()=>{const{variant:e,setVariant:n}=Zl();return r("header",{children:s("nav",{children:[s("div",{children:[r(Dl,{name:"bars",className:"toggle-sidebar action",onClick:()=>n(e===wm?TO:wm)}),r(ur,{to:"/",className:"home mar-l-2",text:"Badger-CSS"}),s("span",{className:"small mar-l-2",children:["v",qv]})]}),s("div",{children:[r("a",{href:"https://github.com/abw/badger-css",children:r(SO,{className:"night-and-day--icon mar-r-2"})}),r(EA,{})]})]})})},al=({title:e,items:n})=>s("div",{className:"menu",children:[r("h4",{children:e}),n.map(t=>r(ur,{...t},t.to))]}),NO=[{to:"/getting-started/installation",text:"Installation"},{to:"/getting-started/good",text:"What's good about it?"},{to:"/getting-started/bad",text:"What's wrong with it?"}],$O=[{to:"/colors/demo",text:"Color Demo"},{to:"/colors/ranges",text:"Color Ranges"},{to:"/colors/brand",text:"Brand Colors"},{to:"/colors/variables",text:"Color Variables"},{to:"/colors/utilities",text:"Color Utilities"},{to:"/colors/palette",text:"Custom Palette"}],IO=[{to:"/utilities/",text:"Introduction"},{to:"/utilities/alignment",text:"Alignment"},{to:"/utilities/borders",text:"Borders"},{to:"/utilities/breakpoints",text:"Breakpoints"},{to:"/utilities/columns",text:"Columns"},{to:"/utilities/container",text:"Container"},{to:"/utilities/display",text:"Display"},{to:"/utilities/flex",text:"Flex"},{to:"/utilities/fonts",text:"Fonts"},{to:"/utilities/font-styles",text:"Font Styles"},{to:"/utilities/font-weights",text:"Font Weights"},{to:"/utilities/grid",text:"Grid"},{to:"/utilities/position",text:"Position"},{to:"/utilities/scrolling",text:"Scrolling"},{to:"/utilities/shadows",text:"Shadows"},{to:"/utilities/sizes",text:"Text Sizes"},{to:"/utilities/spacing",text:"Spacing"},{to:"/utilities/split",text:"Splits"},{to:"/utilities/stack",text:"Stacking"},{to:"/utilities/surfaces",text:"Surfaces"},{to:"/utilities/typography",text:"Typography"},{to:"/utilities/widths",text:"Widths"},{to:"/utilities/wrap",text:"Wrap"}],EO=[{to:"/forms/",text:"Introduction"},{to:"/forms/buttons",text:"Buttons"},{to:"/forms/checkboxes",text:"Checkboxes"},{to:"/forms/radio-buttons",text:"Radio Buttons"},{to:"/forms/select",text:"Select Inputs"},{to:"/forms/text",text:"Text Inputs"},{to:"/forms/textarea",text:"Text Area Inputs"},{to:"/forms/input",text:"Fake Inputs"},{to:"/forms/multi-inputs",text:"Multiple Inputs"},{to:"/forms/field",text:"Form Fields"},{to:"/forms/prefix-suffix",text:"Prefix and Suffix"},{to:"/forms/fieldset",text:"Form Field Sets"},{to:"/forms/styling",text:"Form Styling"}],MO=[{to:"/components/alerts",text:"Alerts"},{to:"/components/badges",text:"Badges"},{to:"/components/details",text:"Details"},{to:"/components/dialog",text:"Dialog"},{to:"/components/icons",text:"SVG Icons"},{to:"/components/menus",text:"Menus"},{to:"/components/overlay",text:"Overlay"},{to:"/components/tables",text:"Tables"},{to:"/components/tabs",text:"Tabs"},{to:"/components/tooltips",text:"Tooltips"}],AO=[{to:"/customising/sass",text:"Custom Stylesheet"}],RO=()=>s("div",{children:[r(al,{title:"Getting Started",items:NO}),r(al,{title:"Colors",items:$O}),r(al,{title:"Utilities",items:IO}),r(al,{title:"Forms",items:EO}),r(al,{title:"Components",items:MO}),r(al,{title:"Customising",items:AO})]}),PO=()=>r("footer",{children:s("div",{className:"flex space",children:[s("div",{children:["© Copyright ",LO," Andy Wardley"]}),s("div",{children:["Version ",qv," ",Kv]})]})});function OO(){const{pathname:e}=Gl();return D.useEffect(()=>FO(document.getElementById("content")),[e]),null}function FO(e){e==null||e.scrollTo({top:0,left:0})}const BO=()=>{const{theme:e,variant:n}=Zl();return s("div",{id:"site","data-sidebar":n,"data-theme":e,children:[r(_O,{}),s("div",{id:"app",children:[r(OO,{}),r("aside",{children:r(RO,{})}),r("main",{id:"content",children:r(pT,{})})]}),r(PO,{})]})},DO=Object.assign({"../pages/colors/brand.jsx":WT,"../pages/colors/demo.jsx":cL,"../pages/colors/greyscale.jsx":bL,"../pages/colors/palette.jsx":TL,"../pages/colors/ranges.jsx":IL,"../pages/colors/utilities.jsx":jL,"../pages/colors/variables.jsx":WL,"../pages/components/alerts.jsx":r_,"../pages/components/badges.jsx":c_,"../pages/components/details.jsx":T_,"../pages/components/dialog.jsx":A_,"../pages/components/icons.jsx":U_,"../pages/components/menus.jsx":nN,"../pages/components/overlay.jsx":dN,"../pages/components/tables.jsx":LN,"../pages/components/tabs.jsx":RN,"../pages/components/tooltips.jsx":WN,"../pages/customising/sass.jsx":XN,"../pages/decoder.jsx":a$,"../pages/forms/buttons.jsx":v$,"../pages/forms/checkboxes.jsx":S$,"../pages/forms/field.jsx":B$,"../pages/forms/fieldset.jsx":z$,"../pages/forms/index.jsx":CM,"../pages/forms/input.jsx":$M,"../pages/forms/multi-inputs.jsx":AM,"../pages/forms/prefix-suffix.jsx":ZM,"../pages/forms/radio-buttons.jsx":eA,"../pages/forms/select.jsx":dA,"../pages/forms/styling.jsx":hA,"../pages/forms/text.jsx":yA,"../pages/forms/textarea.jsx":TA,"../pages/getting-started/bad.jsx":NA,"../pages/getting-started/good.jsx":BA,"../pages/getting-started/installation.jsx":GA,"../pages/index.jsx":ZA,"../pages/utilities/alignment.jsx":JA,"../pages/utilities/borders.jsx":pR,"../pages/utilities/breakpoints.jsx":gR,"../pages/utilities/columns.jsx":kR,"../pages/utilities/container.jsx":TR,"../pages/utilities/display.jsx":NR,"../pages/utilities/flex.jsx":WR,"../pages/utilities/font-styles.jsx":GR,"../pages/utilities/font-weights.jsx":QR,"../pages/utilities/fonts.jsx":aP,"../pages/utilities/grid.jsx":bP,"../pages/utilities/index.jsx":wP,"../pages/utilities/position.jsx":kP,"../pages/utilities/scrolling.jsx":_P,"../pages/utilities/shadows.jsx":EP,"../pages/utilities/sizes.jsx":FP,"../pages/utilities/spacing.jsx":HP,"../pages/utilities/split.jsx":QP,"../pages/utilities/stack.jsx":tO,"../pages/utilities/surfaces.jsx":sO,"../pages/utilities/typography.jsx":hO,"../pages/utilities/widths.jsx":wO,"../pages/utilities/wrap.jsx":kO}),jO=Object.entries(DO).filter(([e])=>!e.match(/\/_/)).map(([e,n])=>({path:e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,""),Component:n.default})),zO=wT([{path:"/",element:r(BO,{}),children:jO}],{basename:"/badger-css/"});iu.createRoot(document.getElementById("root")).render(r(In.StrictMode,{children:r(RA,{storageKey:"theme",children:r(uT,{router:zO})})}));
