const Zc=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}};Zc();function Cr(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const pe={},$t=[],Ve=()=>{},Yc=()=>!1,Xc=/^on[^a-z]/,ys=e=>Xc.test(e),Ar=e=>e.startsWith("onUpdate:"),xe=Object.assign,qr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ei=Object.prototype.hasOwnProperty,Z=(e,t)=>ei.call(e,t),K=Array.isArray,Bt=e=>bs(e)==="[object Map]",ll=e=>bs(e)==="[object Set]",V=e=>typeof e=="function",je=e=>typeof e=="string",Rr=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",cl=e=>fe(e)&&V(e.then)&&V(e.catch),il=Object.prototype.toString,bs=e=>il.call(e),ti=e=>bs(e).slice(8,-1),ul=e=>bs(e)==="[object Object]",Tr=e=>je(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Zn=Cr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),js=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ni=/-(\w)/g,st=js(e=>e.replace(ni,(t,n)=>n?n.toUpperCase():"")),si=/\B([A-Z])/g,Xt=js(e=>e.replace(si,"-$1").toLowerCase()),xs=js(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ms=js(e=>e?`on${xs(e)}`:""),jn=(e,t)=>!Object.is(e,t),Ls=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},as=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ri=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let la;const er=()=>la||(la=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function xn(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=je(s)?ci(s):xn(s);if(r)for(const a in r)t[a]=r[a]}return t}else{if(je(e))return e;if(fe(e))return e}}const ai=/;(?![^(]*\))/g,oi=/:([^]+)/,li=/\/\*[^]*?\*\//g;function ci(e){const t={};return e.replace(li,"").split(ai).forEach(n=>{if(n){const s=n.split(oi);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Wt(e){let t="";if(je(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const s=Wt(e[n]);s&&(t+=s+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ii="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ui=Cr(ii);function pl(e){return!!e||e===""}const Ce=e=>je(e)?e:e==null?"":K(e)||fe(e)&&(e.toString===il||!V(e.toString))?JSON.stringify(e,fl,2):String(e),fl=(e,t)=>t&&t.__v_isRef?fl(e,t.value):Bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:ll(t)?{[`Set(${t.size})`]:[...t.values()]}:fe(t)&&!K(t)&&!ul(t)?String(t):t;let $e;class pi{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$e,!t&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=$e;try{return $e=this,t()}finally{$e=n}}}on(){$e=this}off(){$e=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function fi(e,t=$e){t&&t.active&&t.effects.push(e)}function hi(){return $e}const Dr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},hl=e=>(e.w&_t)>0,dl=e=>(e.n&_t)>0,di=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=_t},mi=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];hl(r)&&!dl(r)?r.delete(e):t[n++]=r,r.w&=~_t,r.n&=~_t}t.length=n}},tr=new WeakMap;let cn=0,_t=1;const nr=30;let Be;const Pt=Symbol(""),sr=Symbol("");class Nr{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fi(this,s)}run(){if(!this.active)return this.fn();let t=Be,n=gt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Be,Be=this,gt=!0,_t=1<<++cn,cn<=nr?di(this):ca(this),this.fn()}finally{cn<=nr&&mi(this),_t=1<<--cn,Be=this.parent,gt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Be===this?this.deferStop=!0:this.active&&(ca(this),this.onStop&&this.onStop(),this.active=!1)}}function ca(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let gt=!0;const ml=[];function en(){ml.push(gt),gt=!1}function tn(){const e=ml.pop();gt=e===void 0?!0:e}function Te(e,t,n){if(gt&&Be){let s=tr.get(e);s||tr.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=Dr()),gl(r)}}function gl(e,t){let n=!1;cn<=nr?dl(e)||(e.n|=_t,n=!hl(e)):n=!e.has(Be),n&&(e.add(Be),Be.deps.push(e))}function ut(e,t,n,s,r,a){const o=tr.get(e);if(!o)return;let c=[];if(t==="clear")c=[...o.values()];else if(n==="length"&&K(e)){const l=Number(s);o.forEach((u,i)=>{(i==="length"||i>=l)&&c.push(u)})}else switch(n!==void 0&&c.push(o.get(n)),t){case"add":K(e)?Tr(n)&&c.push(o.get("length")):(c.push(o.get(Pt)),Bt(e)&&c.push(o.get(sr)));break;case"delete":K(e)||(c.push(o.get(Pt)),Bt(e)&&c.push(o.get(sr)));break;case"set":Bt(e)&&c.push(o.get(Pt));break}if(c.length===1)c[0]&&rr(c[0]);else{const l=[];for(const u of c)u&&l.push(...u);rr(Dr(l))}}function rr(e,t){const n=K(e)?e:[...e];for(const s of n)s.computed&&ia(s);for(const s of n)s.computed||ia(s)}function ia(e,t){(e!==Be||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const gi=Cr("__proto__,__v_isRef,__isVue"),vl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Rr)),vi=Mr(),_i=Mr(!1,!0),yi=Mr(!0),ua=bi();function bi(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=se(this);for(let a=0,o=this.length;a<o;a++)Te(s,"get",a+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(se)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){en();const s=se(this)[t].apply(this,n);return tn(),s}}),e}function ji(e){const t=se(this);return Te(t,"has",e),t.hasOwnProperty(e)}function Mr(e=!1,t=!1){return function(s,r,a){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&a===(e?t?Mi:xl:t?jl:bl).get(s))return s;const o=K(s);if(!e){if(o&&Z(ua,r))return Reflect.get(ua,r,a);if(r==="hasOwnProperty")return ji}const c=Reflect.get(s,r,a);return(Rr(r)?vl.has(r):gi(r))||(e||Te(s,"get",r),t)?c:Se(c)?o&&Tr(r)?c:c.value:fe(c)?e?wl(c):Rn(c):c}}const xi=_l(),wi=_l(!0);function _l(e=!1){return function(n,s,r,a){let o=n[s];if(Jt(o)&&Se(o)&&!Se(r))return!1;if(!e&&(!os(r)&&!Jt(r)&&(o=se(o),r=se(r)),!K(n)&&Se(o)&&!Se(r)))return o.value=r,!0;const c=K(n)&&Tr(s)?Number(s)<n.length:Z(n,s),l=Reflect.set(n,s,r,a);return n===se(a)&&(c?jn(r,o)&&ut(n,"set",s,r):ut(n,"add",s,r)),l}}function Oi(e,t){const n=Z(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&ut(e,"delete",t,void 0),s}function Ei(e,t){const n=Reflect.has(e,t);return(!Rr(t)||!vl.has(t))&&Te(e,"has",t),n}function Si(e){return Te(e,"iterate",K(e)?"length":Pt),Reflect.ownKeys(e)}const yl={get:vi,set:xi,deleteProperty:Oi,has:Ei,ownKeys:Si},Ii={get:yi,set(e,t){return!0},deleteProperty(e,t){return!0}},ki=xe({},yl,{get:_i,set:wi}),Lr=e=>e,ws=e=>Reflect.getPrototypeOf(e);function Nn(e,t,n=!1,s=!1){e=e.__v_raw;const r=se(e),a=se(t);n||(t!==a&&Te(r,"get",t),Te(r,"get",a));const{has:o}=ws(r),c=s?Lr:n?Fr:wn;if(o.call(r,t))return c(e.get(t));if(o.call(r,a))return c(e.get(a));e!==r&&e.get(t)}function Mn(e,t=!1){const n=this.__v_raw,s=se(n),r=se(e);return t||(e!==r&&Te(s,"has",e),Te(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Ln(e,t=!1){return e=e.__v_raw,!t&&Te(se(e),"iterate",Pt),Reflect.get(e,"size",e)}function pa(e){e=se(e);const t=se(this);return ws(t).has.call(t,e)||(t.add(e),ut(t,"add",e,e)),this}function fa(e,t){t=se(t);const n=se(this),{has:s,get:r}=ws(n);let a=s.call(n,e);a||(e=se(e),a=s.call(n,e));const o=r.call(n,e);return n.set(e,t),a?jn(t,o)&&ut(n,"set",e,t):ut(n,"add",e,t),this}function ha(e){const t=se(this),{has:n,get:s}=ws(t);let r=n.call(t,e);r||(e=se(e),r=n.call(t,e)),s&&s.call(t,e);const a=t.delete(e);return r&&ut(t,"delete",e,void 0),a}function da(){const e=se(this),t=e.size!==0,n=e.clear();return t&&ut(e,"clear",void 0,void 0),n}function Hn(e,t){return function(s,r){const a=this,o=a.__v_raw,c=se(o),l=t?Lr:e?Fr:wn;return!e&&Te(c,"iterate",Pt),o.forEach((u,i)=>s.call(r,l(u),l(i),a))}}function Un(e,t,n){return function(...s){const r=this.__v_raw,a=se(r),o=Bt(a),c=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=r[e](...s),i=n?Lr:t?Fr:wn;return!t&&Te(a,"iterate",l?sr:Pt),{next(){const{value:p,done:f}=u.next();return f?{value:p,done:f}:{value:c?[i(p[0]),i(p[1])]:i(p),done:f}},[Symbol.iterator](){return this}}}}function ft(e){return function(...t){return e==="delete"?!1:this}}function Pi(){const e={get(a){return Nn(this,a)},get size(){return Ln(this)},has:Mn,add:pa,set:fa,delete:ha,clear:da,forEach:Hn(!1,!1)},t={get(a){return Nn(this,a,!1,!0)},get size(){return Ln(this)},has:Mn,add:pa,set:fa,delete:ha,clear:da,forEach:Hn(!1,!0)},n={get(a){return Nn(this,a,!0)},get size(){return Ln(this,!0)},has(a){return Mn.call(this,a,!0)},add:ft("add"),set:ft("set"),delete:ft("delete"),clear:ft("clear"),forEach:Hn(!0,!1)},s={get(a){return Nn(this,a,!0,!0)},get size(){return Ln(this,!0)},has(a){return Mn.call(this,a,!0)},add:ft("add"),set:ft("set"),delete:ft("delete"),clear:ft("clear"),forEach:Hn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=Un(a,!1,!1),n[a]=Un(a,!0,!1),t[a]=Un(a,!1,!0),s[a]=Un(a,!0,!0)}),[e,n,t,s]}const[Ci,Ai,qi,Ri]=Pi();function Hr(e,t){const n=t?e?Ri:qi:e?Ai:Ci;return(s,r,a)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(Z(n,r)&&r in s?n:s,r,a)}const Ti={get:Hr(!1,!1)},Di={get:Hr(!1,!0)},Ni={get:Hr(!0,!1)},bl=new WeakMap,jl=new WeakMap,xl=new WeakMap,Mi=new WeakMap;function Li(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hi(e){return e.__v_skip||!Object.isExtensible(e)?0:Li(ti(e))}function Rn(e){return Jt(e)?e:Ur(e,!1,yl,Ti,bl)}function Ui(e){return Ur(e,!1,ki,Di,jl)}function wl(e){return Ur(e,!0,Ii,Ni,xl)}function Ur(e,t,n,s,r){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=r.get(e);if(a)return a;const o=Hi(e);if(o===0)return e;const c=new Proxy(e,o===2?s:n);return r.set(e,c),c}function zt(e){return Jt(e)?zt(e.__v_raw):!!(e&&e.__v_isReactive)}function Jt(e){return!!(e&&e.__v_isReadonly)}function os(e){return!!(e&&e.__v_isShallow)}function Ol(e){return zt(e)||Jt(e)}function se(e){const t=e&&e.__v_raw;return t?se(t):e}function El(e){return as(e,"__v_skip",!0),e}const wn=e=>fe(e)?Rn(e):e,Fr=e=>fe(e)?wl(e):e;function Sl(e){gt&&Be&&(e=se(e),gl(e.dep||(e.dep=Dr())))}function Il(e,t){e=se(e);const n=e.dep;n&&rr(n)}function Se(e){return!!(e&&e.__v_isRef===!0)}function Re(e){return kl(e,!1)}function Fi(e){return kl(e,!0)}function kl(e,t){return Se(e)?e:new $i(e,t)}class $i{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:se(t),this._value=n?t:wn(t)}get value(){return Sl(this),this._value}set value(t){const n=this.__v_isShallow||os(t)||Jt(t);t=n?t:se(t),jn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:wn(t),Il(this))}}function tt(e){return Se(e)?e.value:e}const Bi={get:(e,t,n)=>tt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Se(r)&&!Se(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Pl(e){return zt(e)?e:new Proxy(e,Bi)}class zi{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Nr(t,()=>{this._dirty||(this._dirty=!0,Il(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=se(this);return Sl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ki(e,t,n=!1){let s,r;const a=V(e);return a?(s=e,r=Ve):(s=e.get,r=e.set),new zi(s,r,a||!r,n)}function vt(e,t,n,s){let r;try{r=s?e(...s):e()}catch(a){Os(a,t,n)}return r}function We(e,t,n,s){if(V(e)){const a=vt(e,t,n,s);return a&&cl(a)&&a.catch(o=>{Os(o,t,n)}),a}const r=[];for(let a=0;a<e.length;a++)r.push(We(e[a],t,n,s));return r}function Os(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,c=n;for(;a;){const u=a.ec;if(u){for(let i=0;i<u.length;i++)if(u[i](e,o,c)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){vt(l,null,10,[e,o,c]);return}}Vi(e,n,r,s)}function Vi(e,t,n,s=!0){console.error(e)}let On=!1,ar=!1;const Ee=[];let Xe=0;const Kt=[];let lt=null,It=0;const Cl=Promise.resolve();let $r=null;function Al(e){const t=$r||Cl;return e?t.then(this?e.bind(this):e):t}function Wi(e){let t=Xe+1,n=Ee.length;for(;t<n;){const s=t+n>>>1;En(Ee[s])<e?t=s+1:n=s}return t}function Br(e){(!Ee.length||!Ee.includes(e,On&&e.allowRecurse?Xe+1:Xe))&&(e.id==null?Ee.push(e):Ee.splice(Wi(e.id),0,e),ql())}function ql(){!On&&!ar&&(ar=!0,$r=Cl.then(Tl))}function Ji(e){const t=Ee.indexOf(e);t>Xe&&Ee.splice(t,1)}function Qi(e){K(e)?Kt.push(...e):(!lt||!lt.includes(e,e.allowRecurse?It+1:It))&&Kt.push(e),ql()}function ma(e,t=On?Xe+1:0){for(;t<Ee.length;t++){const n=Ee[t];n&&n.pre&&(Ee.splice(t,1),t--,n())}}function Rl(e){if(Kt.length){const t=[...new Set(Kt)];if(Kt.length=0,lt){lt.push(...t);return}for(lt=t,lt.sort((n,s)=>En(n)-En(s)),It=0;It<lt.length;It++)lt[It]();lt=null,It=0}}const En=e=>e.id==null?1/0:e.id,Gi=(e,t)=>{const n=En(e)-En(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Tl(e){ar=!1,On=!0,Ee.sort(Gi);const t=Ve;try{for(Xe=0;Xe<Ee.length;Xe++){const n=Ee[Xe];n&&n.active!==!1&&vt(n,null,14)}}finally{Xe=0,Ee.length=0,Rl(),On=!1,$r=null,(Ee.length||Kt.length)&&Tl()}}function Zi(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||pe;let r=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in s){const i=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:f}=s[i]||pe;f&&(r=n.map(g=>je(g)?g.trim():g)),p&&(r=n.map(ri))}let c,l=s[c=Ms(t)]||s[c=Ms(st(t))];!l&&a&&(l=s[c=Ms(Xt(t))]),l&&We(l,e,6,r);const u=s[c+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,We(u,e,6,r)}}function Dl(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const a=e.emits;let o={},c=!1;if(!V(e)){const l=u=>{const i=Dl(u,t,!0);i&&(c=!0,xe(o,i))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!c?(fe(e)&&s.set(e,null),null):(K(a)?a.forEach(l=>o[l]=null):xe(o,a),fe(e)&&s.set(e,o),o)}function Es(e,t){return!e||!ys(t)?!1:(t=t.slice(2).replace(/Once$/,""),Z(e,t[0].toLowerCase()+t.slice(1))||Z(e,Xt(t))||Z(e,t))}let ze=null,Ss=null;function ls(e){const t=ze;return ze=e,Ss=e&&e.type.__scopeId||null,t}function Is(e){Ss=e}function ks(){Ss=null}function Yi(e,t=ze,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Sa(-1);const a=ls(t);let o;try{o=e(...r)}finally{ls(a),s._d&&Sa(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Hs(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:a,propsOptions:[o],slots:c,attrs:l,emit:u,render:i,renderCache:p,data:f,setupState:g,ctx:b,inheritAttrs:y}=e;let w,S;const O=ls(e);try{if(n.shapeFlag&4){const E=r||s;w=Ye(i.call(E,E,p,a,g,f,b)),S=l}else{const E=t;w=Ye(E.length>1?E(a,{attrs:l,slots:c,emit:u}):E(a,null)),S=t.props?l:Xi(l)}}catch(E){mn.length=0,Os(E,e,1),w=me(At)}let C=w;if(S&&y!==!1){const E=Object.keys(S),{shapeFlag:A}=C;E.length&&A&7&&(o&&E.some(Ar)&&(S=eu(S,o)),C=Qt(C,S))}return n.dirs&&(C=Qt(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),w=C,ls(O),w}const Xi=e=>{let t;for(const n in e)(n==="class"||n==="style"||ys(n))&&((t||(t={}))[n]=e[n]);return t},eu=(e,t)=>{const n={};for(const s in e)(!Ar(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function tu(e,t,n){const{props:s,children:r,component:a}=e,{props:o,children:c,patchFlag:l}=t,u=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ga(s,o,u):!!o;if(l&8){const i=t.dynamicProps;for(let p=0;p<i.length;p++){const f=i[p];if(o[f]!==s[f]&&!Es(u,f))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:s===o?!1:s?o?ga(s,o,u):!0:!!o;return!1}function ga(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const a=s[r];if(t[a]!==e[a]&&!Es(n,a))return!0}return!1}function nu({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const su=e=>e.__isSuspense;function ru(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):Qi(e)}const Fn={};function hn(e,t,n){return Nl(e,t,n)}function Nl(e,t,{immediate:n,deep:s,flush:r,onTrack:a,onTrigger:o}=pe){var c;const l=hi()===((c=we)==null?void 0:c.scope)?we:null;let u,i=!1,p=!1;if(Se(e)?(u=()=>e.value,i=os(e)):zt(e)?(u=()=>e,s=!0):K(e)?(p=!0,i=e.some(E=>zt(E)||os(E)),u=()=>e.map(E=>{if(Se(E))return E.value;if(zt(E))return Ht(E);if(V(E))return vt(E,l,2)})):V(e)?t?u=()=>vt(e,l,2):u=()=>{if(!(l&&l.isUnmounted))return f&&f(),We(e,l,3,[g])}:u=Ve,t&&s){const E=u;u=()=>Ht(E())}let f,g=E=>{f=O.onStop=()=>{vt(E,l,4)}},b;if(In)if(g=Ve,t?n&&We(t,l,3,[u(),p?[]:void 0,g]):u(),r==="sync"){const E=Yu();b=E.__watcherHandles||(E.__watcherHandles=[])}else return Ve;let y=p?new Array(e.length).fill(Fn):Fn;const w=()=>{if(!!O.active)if(t){const E=O.run();(s||i||(p?E.some((A,F)=>jn(A,y[F])):jn(E,y)))&&(f&&f(),We(t,l,3,[E,y===Fn?void 0:p&&y[0]===Fn?[]:y,g]),y=E)}else O.run()};w.allowRecurse=!!t;let S;r==="sync"?S=w:r==="post"?S=()=>qe(w,l&&l.suspense):(w.pre=!0,l&&(w.id=l.uid),S=()=>Br(w));const O=new Nr(u,S);t?n?w():y=O.run():r==="post"?qe(O.run.bind(O),l&&l.suspense):O.run();const C=()=>{O.stop(),l&&l.scope&&qr(l.scope.effects,O)};return b&&b.push(C),C}function au(e,t,n){const s=this.proxy,r=je(e)?e.includes(".")?Ml(s,e):()=>s[e]:e.bind(s,s);let a;V(t)?a=t:(a=t.handler,n=t);const o=we;Gt(this);const c=Nl(r,a.bind(s),n);return o?Gt(o):Ct(),c}function Ml(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ht(e,t){if(!fe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Se(e))Ht(e.value,t);else if(K(e))for(let n=0;n<e.length;n++)Ht(e[n],t);else if(ll(e)||Bt(e))e.forEach(n=>{Ht(n,t)});else if(ul(e))for(const n in e)Ht(e[n],t);return e}function xt(e,t,n,s){const r=e.dirs,a=t&&t.dirs;for(let o=0;o<r.length;o++){const c=r[o];a&&(c.oldValue=a[o].value);let l=c.dir[s];l&&(en(),We(l,n,8,[e.el,c,e,t]),tn())}}function zr(e,t){return V(e)?(()=>xe({name:e.name},t,{setup:e}))():e}const Yn=e=>!!e.type.__asyncLoader,Ll=e=>e.type.__isKeepAlive;function ou(e,t){Hl(e,"a",t)}function lu(e,t){Hl(e,"da",t)}function Hl(e,t,n=we){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Ps(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Ll(r.parent.vnode)&&cu(s,t,n,r),r=r.parent}}function cu(e,t,n,s){const r=Ps(t,e,s,!0);Kr(()=>{qr(s[t],r)},n)}function Ps(e,t,n=we,s=!1){if(n){const r=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;en(),Gt(n);const c=We(t,n,e,o);return Ct(),tn(),c});return s?r.unshift(a):r.push(a),a}}const pt=e=>(t,n=we)=>(!In||e==="sp")&&Ps(e,(...s)=>t(...s),n),iu=pt("bm"),jt=pt("m"),uu=pt("bu"),pu=pt("u"),fu=pt("bum"),Kr=pt("um"),hu=pt("sp"),du=pt("rtg"),mu=pt("rtc");function gu(e,t=we){Ps("ec",e,t)}const Ul="components";function Fl(e,t){return _u(Ul,e,!0,t)||e}const vu=Symbol.for("v-ndc");function _u(e,t,n=!0,s=!1){const r=ze||we;if(r){const a=r.type;if(e===Ul){const c=Qu(a,!1);if(c&&(c===t||c===st(t)||c===xs(st(t))))return a}const o=va(r[e]||a[e],t)||va(r.appContext[e],t);return!o&&s?a:o}}function va(e,t){return e&&(e[t]||e[st(t)]||e[xs(st(t))])}function yt(e,t,n,s){let r;const a=n&&n[s];if(K(e)||je(e)){r=new Array(e.length);for(let o=0,c=e.length;o<c;o++)r[o]=t(e[o],o,void 0,a&&a[o])}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,a&&a[o])}else if(fe(e))if(e[Symbol.iterator])r=Array.from(e,(o,c)=>t(o,c,void 0,a&&a[c]));else{const o=Object.keys(e);r=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const u=o[c];r[c]=t(e[u],u,c,a&&a[c])}}else r=[];return n&&(n[s]=r),r}const or=e=>e?Yl(e)?Zr(e)||e.proxy:or(e.parent):null,dn=xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>or(e.parent),$root:e=>or(e.root),$emit:e=>e.emit,$options:e=>Vr(e),$forceUpdate:e=>e.f||(e.f=()=>Br(e.update)),$nextTick:e=>e.n||(e.n=Al.bind(e.proxy)),$watch:e=>au.bind(e)}),Us=(e,t)=>e!==pe&&!e.__isScriptSetup&&Z(e,t),yu={get({_:e},t){const{ctx:n,setupState:s,data:r,props:a,accessCache:o,type:c,appContext:l}=e;let u;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return a[t]}else{if(Us(s,t))return o[t]=1,s[t];if(r!==pe&&Z(r,t))return o[t]=2,r[t];if((u=e.propsOptions[0])&&Z(u,t))return o[t]=3,a[t];if(n!==pe&&Z(n,t))return o[t]=4,n[t];lr&&(o[t]=0)}}const i=dn[t];let p,f;if(i)return t==="$attrs"&&Te(e,"get",t),i(e);if((p=c.__cssModules)&&(p=p[t]))return p;if(n!==pe&&Z(n,t))return o[t]=4,n[t];if(f=l.config.globalProperties,Z(f,t))return f[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:a}=e;return Us(r,t)?(r[t]=n,!0):s!==pe&&Z(s,t)?(s[t]=n,!0):Z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:a}},o){let c;return!!n[o]||e!==pe&&Z(e,o)||Us(t,o)||(c=a[0])&&Z(c,o)||Z(s,o)||Z(dn,o)||Z(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function _a(e){return K(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let lr=!0;function bu(e){const t=Vr(e),n=e.proxy,s=e.ctx;lr=!1,t.beforeCreate&&ya(t.beforeCreate,e,"bc");const{data:r,computed:a,methods:o,watch:c,provide:l,inject:u,created:i,beforeMount:p,mounted:f,beforeUpdate:g,updated:b,activated:y,deactivated:w,beforeDestroy:S,beforeUnmount:O,destroyed:C,unmounted:E,render:A,renderTracked:F,renderTriggered:Y,errorCaptured:ue,serverPrefetch:ce,expose:Q,inheritAttrs:ie,components:ge,directives:he,filters:ve}=t;if(u&&ju(u,s,null),o)for(const te in o){const W=o[te];V(W)&&(s[te]=W.bind(n))}if(r){const te=r.call(n,n);fe(te)&&(e.data=Rn(te))}if(lr=!0,a)for(const te in a){const W=a[te],De=V(W)?W.bind(n,n):V(W.get)?W.get.bind(n,n):Ve,Ue=!V(W)&&V(W.set)?W.set.bind(n):Ve,Ie=Le({get:De,set:Ue});Object.defineProperty(s,te,{enumerable:!0,configurable:!0,get:()=>Ie.value,set:_e=>Ie.value=_e})}if(c)for(const te in c)$l(c[te],s,n,te);if(l){const te=V(l)?l.call(n):l;Reflect.ownKeys(te).forEach(W=>{Xn(W,te[W])})}i&&ya(i,e,"c");function le(te,W){K(W)?W.forEach(De=>te(De.bind(n))):W&&te(W.bind(n))}if(le(iu,p),le(jt,f),le(uu,g),le(pu,b),le(ou,y),le(lu,w),le(gu,ue),le(mu,F),le(du,Y),le(fu,O),le(Kr,E),le(hu,ce),K(Q))if(Q.length){const te=e.exposed||(e.exposed={});Q.forEach(W=>{Object.defineProperty(te,W,{get:()=>n[W],set:De=>n[W]=De})})}else e.exposed||(e.exposed={});A&&e.render===Ve&&(e.render=A),ie!=null&&(e.inheritAttrs=ie),ge&&(e.components=ge),he&&(e.directives=he)}function ju(e,t,n=Ve){K(e)&&(e=cr(e));for(const s in e){const r=e[s];let a;fe(r)?"default"in r?a=Je(r.from||s,r.default,!0):a=Je(r.from||s):a=Je(r),Se(a)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):t[s]=a}}function ya(e,t,n){We(K(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function $l(e,t,n,s){const r=s.includes(".")?Ml(n,s):()=>n[s];if(je(e)){const a=t[e];V(a)&&hn(r,a)}else if(V(e))hn(r,e.bind(n));else if(fe(e))if(K(e))e.forEach(a=>$l(a,t,n,s));else{const a=V(e.handler)?e.handler.bind(n):t[e.handler];V(a)&&hn(r,a,e)}}function Vr(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,c=a.get(t);let l;return c?l=c:!r.length&&!n&&!s?l=t:(l={},r.length&&r.forEach(u=>cs(l,u,o,!0)),cs(l,t,o)),fe(t)&&a.set(t,l),l}function cs(e,t,n,s=!1){const{mixins:r,extends:a}=t;a&&cs(e,a,n,!0),r&&r.forEach(o=>cs(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const c=xu[o]||n&&n[o];e[o]=c?c(e[o],t[o]):t[o]}return e}const xu={data:ba,props:ja,emits:ja,methods:un,computed:un,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:un,directives:un,watch:Ou,provide:ba,inject:wu};function ba(e,t){return t?e?function(){return xe(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function wu(e,t){return un(cr(e),cr(t))}function cr(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Pe(e,t){return e?[...new Set([].concat(e,t))]:t}function un(e,t){return e?xe(Object.create(null),e,t):t}function ja(e,t){return e?K(e)&&K(t)?[...new Set([...e,...t])]:xe(Object.create(null),_a(e),_a(t!=null?t:{})):t}function Ou(e,t){if(!e)return t;if(!t)return e;const n=xe(Object.create(null),e);for(const s in t)n[s]=Pe(e[s],t[s]);return n}function Bl(){return{app:null,config:{isNativeTag:Yc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Eu=0;function Su(e,t){return function(s,r=null){V(s)||(s=xe({},s)),r!=null&&!fe(r)&&(r=null);const a=Bl(),o=new Set;let c=!1;const l=a.app={_uid:Eu++,_component:s,_props:r,_container:null,_context:a,_instance:null,version:Xu,get config(){return a.config},set config(u){},use(u,...i){return o.has(u)||(u&&V(u.install)?(o.add(u),u.install(l,...i)):V(u)&&(o.add(u),u(l,...i))),l},mixin(u){return a.mixins.includes(u)||a.mixins.push(u),l},component(u,i){return i?(a.components[u]=i,l):a.components[u]},directive(u,i){return i?(a.directives[u]=i,l):a.directives[u]},mount(u,i,p){if(!c){const f=me(s,r);return f.appContext=a,i&&t?t(f,u):e(f,u,p),c=!0,l._container=u,u.__vue_app__=l,Zr(f.component)||f.component.proxy}},unmount(){c&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,i){return a.provides[u]=i,l},runWithContext(u){is=l;try{return u()}finally{is=null}}};return l}}let is=null;function Xn(e,t){if(we){let n=we.provides;const s=we.parent&&we.parent.provides;s===n&&(n=we.provides=Object.create(s)),n[e]=t}}function Je(e,t,n=!1){const s=we||ze;if(s||is){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:is._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&V(t)?t.call(s&&s.proxy):t}}function Iu(e,t,n,s=!1){const r={},a={};as(a,As,1),e.propsDefaults=Object.create(null),zl(e,t,r,a);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:Ui(r):e.type.props?e.props=r:e.props=a,e.attrs=a}function ku(e,t,n,s){const{props:r,attrs:a,vnode:{patchFlag:o}}=e,c=se(r),[l]=e.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const i=e.vnode.dynamicProps;for(let p=0;p<i.length;p++){let f=i[p];if(Es(e.emitsOptions,f))continue;const g=t[f];if(l)if(Z(a,f))g!==a[f]&&(a[f]=g,u=!0);else{const b=st(f);r[b]=ir(l,c,b,g,e,!1)}else g!==a[f]&&(a[f]=g,u=!0)}}}else{zl(e,t,r,a)&&(u=!0);let i;for(const p in c)(!t||!Z(t,p)&&((i=Xt(p))===p||!Z(t,i)))&&(l?n&&(n[p]!==void 0||n[i]!==void 0)&&(r[p]=ir(l,c,p,void 0,e,!0)):delete r[p]);if(a!==c)for(const p in a)(!t||!Z(t,p)&&!0)&&(delete a[p],u=!0)}u&&ut(e,"set","$attrs")}function zl(e,t,n,s){const[r,a]=e.propsOptions;let o=!1,c;if(t)for(let l in t){if(Zn(l))continue;const u=t[l];let i;r&&Z(r,i=st(l))?!a||!a.includes(i)?n[i]=u:(c||(c={}))[i]=u:Es(e.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,o=!0)}if(a){const l=se(n),u=c||pe;for(let i=0;i<a.length;i++){const p=a[i];n[p]=ir(r,l,p,u[p],e,!Z(u,p))}}return o}function ir(e,t,n,s,r,a){const o=e[n];if(o!=null){const c=Z(o,"default");if(c&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&V(l)){const{propsDefaults:u}=r;n in u?s=u[n]:(Gt(r),s=u[n]=l.call(null,t),Ct())}else s=l}o[0]&&(a&&!c?s=!1:o[1]&&(s===""||s===Xt(n))&&(s=!0))}return s}function Kl(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const a=e.props,o={},c=[];let l=!1;if(!V(e)){const i=p=>{l=!0;const[f,g]=Kl(p,t,!0);xe(o,f),g&&c.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!a&&!l)return fe(e)&&s.set(e,$t),$t;if(K(a))for(let i=0;i<a.length;i++){const p=st(a[i]);xa(p)&&(o[p]=pe)}else if(a)for(const i in a){const p=st(i);if(xa(p)){const f=a[i],g=o[p]=K(f)||V(f)?{type:f}:xe({},f);if(g){const b=Ea(Boolean,g.type),y=Ea(String,g.type);g[0]=b>-1,g[1]=y<0||b<y,(b>-1||Z(g,"default"))&&c.push(p)}}}const u=[o,c];return fe(e)&&s.set(e,u),u}function xa(e){return e[0]!=="$"}function wa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Oa(e,t){return wa(e)===wa(t)}function Ea(e,t){return K(t)?t.findIndex(n=>Oa(n,e)):V(t)&&Oa(t,e)?0:-1}const Vl=e=>e[0]==="_"||e==="$stable",Wr=e=>K(e)?e.map(Ye):[Ye(e)],Pu=(e,t,n)=>{if(t._n)return t;const s=Yi((...r)=>Wr(t(...r)),n);return s._c=!1,s},Wl=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Vl(r))continue;const a=e[r];if(V(a))t[r]=Pu(r,a,s);else if(a!=null){const o=Wr(a);t[r]=()=>o}}},Jl=(e,t)=>{const n=Wr(t);e.slots.default=()=>n},Cu=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=se(t),as(t,"_",n)):Wl(t,e.slots={})}else e.slots={},t&&Jl(e,t);as(e.slots,As,1)},Au=(e,t,n)=>{const{vnode:s,slots:r}=e;let a=!0,o=pe;if(s.shapeFlag&32){const c=t._;c?n&&c===1?a=!1:(xe(r,t),!n&&c===1&&delete r._):(a=!t.$stable,Wl(t,r)),o=t}else t&&(Jl(e,t),o={default:1});if(a)for(const c in r)!Vl(c)&&!(c in o)&&delete r[c]};function ur(e,t,n,s,r=!1){if(K(e)){e.forEach((f,g)=>ur(f,t&&(K(t)?t[g]:t),n,s,r));return}if(Yn(s)&&!r)return;const a=s.shapeFlag&4?Zr(s.component)||s.component.proxy:s.el,o=r?null:a,{i:c,r:l}=e,u=t&&t.r,i=c.refs===pe?c.refs={}:c.refs,p=c.setupState;if(u!=null&&u!==l&&(je(u)?(i[u]=null,Z(p,u)&&(p[u]=null)):Se(u)&&(u.value=null)),V(l))vt(l,c,12,[o,i]);else{const f=je(l),g=Se(l);if(f||g){const b=()=>{if(e.f){const y=f?Z(p,l)?p[l]:i[l]:l.value;r?K(y)&&qr(y,a):K(y)?y.includes(a)||y.push(a):f?(i[l]=[a],Z(p,l)&&(p[l]=i[l])):(l.value=[a],e.k&&(i[e.k]=l.value))}else f?(i[l]=o,Z(p,l)&&(p[l]=o)):g&&(l.value=o,e.k&&(i[e.k]=o))};o?(b.id=-1,qe(b,n)):b()}}}const qe=ru;function qu(e){return Ru(e)}function Ru(e,t){const n=er();n.__VUE__=!0;const{insert:s,remove:r,patchProp:a,createElement:o,createText:c,createComment:l,setText:u,setElementText:i,parentNode:p,nextSibling:f,setScopeId:g=Ve,insertStaticContent:b}=e,y=(h,d,v,_=null,j=null,I=null,T=!1,k=null,q=!!d.dynamicChildren)=>{if(h===d)return;h&&!rn(h,d)&&(_=x(h),_e(h,j,I,!0),h=null),d.patchFlag===-2&&(q=!1,d.dynamicChildren=null);const{type:P,ref:H,shapeFlag:N}=d;switch(P){case Cs:w(h,d,v,_);break;case At:S(h,d,v,_);break;case Fs:h==null&&O(d,v,_,T);break;case de:ge(h,d,v,_,j,I,T,k,q);break;default:N&1?A(h,d,v,_,j,I,T,k,q):N&6?he(h,d,v,_,j,I,T,k,q):(N&64||N&128)&&P.process(h,d,v,_,j,I,T,k,q,R)}H!=null&&j&&ur(H,h&&h.ref,I,d||h,!d)},w=(h,d,v,_)=>{if(h==null)s(d.el=c(d.children),v,_);else{const j=d.el=h.el;d.children!==h.children&&u(j,d.children)}},S=(h,d,v,_)=>{h==null?s(d.el=l(d.children||""),v,_):d.el=h.el},O=(h,d,v,_)=>{[h.el,h.anchor]=b(h.children,d,v,_,h.el,h.anchor)},C=({el:h,anchor:d},v,_)=>{let j;for(;h&&h!==d;)j=f(h),s(h,v,_),h=j;s(d,v,_)},E=({el:h,anchor:d})=>{let v;for(;h&&h!==d;)v=f(h),r(h),h=v;r(d)},A=(h,d,v,_,j,I,T,k,q)=>{T=T||d.type==="svg",h==null?F(d,v,_,j,I,T,k,q):ce(h,d,j,I,T,k,q)},F=(h,d,v,_,j,I,T,k)=>{let q,P;const{type:H,props:N,shapeFlag:L,transition:B,dirs:z}=h;if(q=h.el=o(h.type,I,N&&N.is,N),L&8?i(q,h.children):L&16&&ue(h.children,q,null,_,j,I&&H!=="foreignObject",T,k),z&&xt(h,null,_,"created"),Y(q,h,h.scopeId,T,_),N){for(const G in N)G!=="value"&&!Zn(G)&&a(q,G,null,N[G],I,h.children,_,j,be);"value"in N&&a(q,"value",null,N.value),(P=N.onVnodeBeforeMount)&&Ze(P,_,h)}z&&xt(h,null,_,"beforeMount");const ee=(!j||j&&!j.pendingBranch)&&B&&!B.persisted;ee&&B.beforeEnter(q),s(q,d,v),((P=N&&N.onVnodeMounted)||ee||z)&&qe(()=>{P&&Ze(P,_,h),ee&&B.enter(q),z&&xt(h,null,_,"mounted")},j)},Y=(h,d,v,_,j)=>{if(v&&g(h,v),_)for(let I=0;I<_.length;I++)g(h,_[I]);if(j){let I=j.subTree;if(d===I){const T=j.vnode;Y(h,T,T.scopeId,T.slotScopeIds,j.parent)}}},ue=(h,d,v,_,j,I,T,k,q=0)=>{for(let P=q;P<h.length;P++){const H=h[P]=k?dt(h[P]):Ye(h[P]);y(null,H,d,v,_,j,I,T,k)}},ce=(h,d,v,_,j,I,T)=>{const k=d.el=h.el;let{patchFlag:q,dynamicChildren:P,dirs:H}=d;q|=h.patchFlag&16;const N=h.props||pe,L=d.props||pe;let B;v&&wt(v,!1),(B=L.onVnodeBeforeUpdate)&&Ze(B,v,d,h),H&&xt(d,h,v,"beforeUpdate"),v&&wt(v,!0);const z=j&&d.type!=="foreignObject";if(P?Q(h.dynamicChildren,P,k,v,_,z,I):T||W(h,d,k,null,v,_,z,I,!1),q>0){if(q&16)ie(k,d,N,L,v,_,j);else if(q&2&&N.class!==L.class&&a(k,"class",null,L.class,j),q&4&&a(k,"style",N.style,L.style,j),q&8){const ee=d.dynamicProps;for(let G=0;G<ee.length;G++){const ye=ee[G],Fe=N[ye],qt=L[ye];(qt!==Fe||ye==="value")&&a(k,ye,Fe,qt,j,h.children,v,_,be)}}q&1&&h.children!==d.children&&i(k,d.children)}else!T&&P==null&&ie(k,d,N,L,v,_,j);((B=L.onVnodeUpdated)||H)&&qe(()=>{B&&Ze(B,v,d,h),H&&xt(d,h,v,"updated")},_)},Q=(h,d,v,_,j,I,T)=>{for(let k=0;k<d.length;k++){const q=h[k],P=d[k],H=q.el&&(q.type===de||!rn(q,P)||q.shapeFlag&70)?p(q.el):v;y(q,P,H,null,_,j,I,T,!0)}},ie=(h,d,v,_,j,I,T)=>{if(v!==_){if(v!==pe)for(const k in v)!Zn(k)&&!(k in _)&&a(h,k,v[k],null,T,d.children,j,I,be);for(const k in _){if(Zn(k))continue;const q=_[k],P=v[k];q!==P&&k!=="value"&&a(h,k,P,q,T,d.children,j,I,be)}"value"in _&&a(h,"value",v.value,_.value)}},ge=(h,d,v,_,j,I,T,k,q)=>{const P=d.el=h?h.el:c(""),H=d.anchor=h?h.anchor:c("");let{patchFlag:N,dynamicChildren:L,slotScopeIds:B}=d;B&&(k=k?k.concat(B):B),h==null?(s(P,v,_),s(H,v,_),ue(d.children,v,H,j,I,T,k,q)):N>0&&N&64&&L&&h.dynamicChildren?(Q(h.dynamicChildren,L,v,j,I,T,k),(d.key!=null||j&&d===j.subTree)&&Ql(h,d,!0)):W(h,d,v,H,j,I,T,k,q)},he=(h,d,v,_,j,I,T,k,q)=>{d.slotScopeIds=k,h==null?d.shapeFlag&512?j.ctx.activate(d,v,_,T,q):ve(d,v,_,j,I,T,q):He(h,d,q)},ve=(h,d,v,_,j,I,T)=>{const k=h.component=zu(h,_,j);if(Ll(h)&&(k.ctx.renderer=R),Ku(k),k.asyncDep){if(j&&j.registerDep(k,le),!h.el){const q=k.subTree=me(At);S(null,q,d,v)}return}le(k,h,d,v,j,I,T)},He=(h,d,v)=>{const _=d.component=h.component;if(tu(h,d,v))if(_.asyncDep&&!_.asyncResolved){te(_,d,v);return}else _.next=d,Ji(_.update),_.update();else d.el=h.el,_.vnode=d},le=(h,d,v,_,j,I,T)=>{const k=()=>{if(h.isMounted){let{next:H,bu:N,u:L,parent:B,vnode:z}=h,ee=H,G;wt(h,!1),H?(H.el=z.el,te(h,H,T)):H=z,N&&Ls(N),(G=H.props&&H.props.onVnodeBeforeUpdate)&&Ze(G,B,H,z),wt(h,!0);const ye=Hs(h),Fe=h.subTree;h.subTree=ye,y(Fe,ye,p(Fe.el),x(Fe),h,j,I),H.el=ye.el,ee===null&&nu(h,ye.el),L&&qe(L,j),(G=H.props&&H.props.onVnodeUpdated)&&qe(()=>Ze(G,B,H,z),j)}else{let H;const{el:N,props:L}=d,{bm:B,m:z,parent:ee}=h,G=Yn(d);if(wt(h,!1),B&&Ls(B),!G&&(H=L&&L.onVnodeBeforeMount)&&Ze(H,ee,d),wt(h,!0),N&&X){const ye=()=>{h.subTree=Hs(h),X(N,h.subTree,h,j,null)};G?d.type.__asyncLoader().then(()=>!h.isUnmounted&&ye()):ye()}else{const ye=h.subTree=Hs(h);y(null,ye,v,_,h,j,I),d.el=ye.el}if(z&&qe(z,j),!G&&(H=L&&L.onVnodeMounted)){const ye=d;qe(()=>Ze(H,ee,ye),j)}(d.shapeFlag&256||ee&&Yn(ee.vnode)&&ee.vnode.shapeFlag&256)&&h.a&&qe(h.a,j),h.isMounted=!0,d=v=_=null}},q=h.effect=new Nr(k,()=>Br(P),h.scope),P=h.update=()=>q.run();P.id=h.uid,wt(h,!0),P()},te=(h,d,v)=>{d.component=h;const _=h.vnode.props;h.vnode=d,h.next=null,ku(h,d.props,_,v),Au(h,d.children,v),en(),ma(),tn()},W=(h,d,v,_,j,I,T,k,q=!1)=>{const P=h&&h.children,H=h?h.shapeFlag:0,N=d.children,{patchFlag:L,shapeFlag:B}=d;if(L>0){if(L&128){Ue(P,N,v,_,j,I,T,k,q);return}else if(L&256){De(P,N,v,_,j,I,T,k,q);return}}B&8?(H&16&&be(P,j,I),N!==P&&i(v,N)):H&16?B&16?Ue(P,N,v,_,j,I,T,k,q):be(P,j,I,!0):(H&8&&i(v,""),B&16&&ue(N,v,_,j,I,T,k,q))},De=(h,d,v,_,j,I,T,k,q)=>{h=h||$t,d=d||$t;const P=h.length,H=d.length,N=Math.min(P,H);let L;for(L=0;L<N;L++){const B=d[L]=q?dt(d[L]):Ye(d[L]);y(h[L],B,v,null,j,I,T,k,q)}P>H?be(h,j,I,!0,!1,N):ue(d,v,_,j,I,T,k,q,N)},Ue=(h,d,v,_,j,I,T,k,q)=>{let P=0;const H=d.length;let N=h.length-1,L=H-1;for(;P<=N&&P<=L;){const B=h[P],z=d[P]=q?dt(d[P]):Ye(d[P]);if(rn(B,z))y(B,z,v,null,j,I,T,k,q);else break;P++}for(;P<=N&&P<=L;){const B=h[N],z=d[L]=q?dt(d[L]):Ye(d[L]);if(rn(B,z))y(B,z,v,null,j,I,T,k,q);else break;N--,L--}if(P>N){if(P<=L){const B=L+1,z=B<H?d[B].el:_;for(;P<=L;)y(null,d[P]=q?dt(d[P]):Ye(d[P]),v,z,j,I,T,k,q),P++}}else if(P>L)for(;P<=N;)_e(h[P],j,I,!0),P++;else{const B=P,z=P,ee=new Map;for(P=z;P<=L;P++){const Ne=d[P]=q?dt(d[P]):Ye(d[P]);Ne.key!=null&&ee.set(Ne.key,P)}let G,ye=0;const Fe=L-z+1;let qt=!1,ra=0;const sn=new Array(Fe);for(P=0;P<Fe;P++)sn[P]=0;for(P=B;P<=N;P++){const Ne=h[P];if(ye>=Fe){_e(Ne,j,I,!0);continue}let Ge;if(Ne.key!=null)Ge=ee.get(Ne.key);else for(G=z;G<=L;G++)if(sn[G-z]===0&&rn(Ne,d[G])){Ge=G;break}Ge===void 0?_e(Ne,j,I,!0):(sn[Ge-z]=P+1,Ge>=ra?ra=Ge:qt=!0,y(Ne,d[Ge],v,null,j,I,T,k,q),ye++)}const aa=qt?Tu(sn):$t;for(G=aa.length-1,P=Fe-1;P>=0;P--){const Ne=z+P,Ge=d[Ne],oa=Ne+1<H?d[Ne+1].el:_;sn[P]===0?y(null,Ge,v,oa,j,I,T,k,q):qt&&(G<0||P!==aa[G]?Ie(Ge,v,oa,2):G--)}}},Ie=(h,d,v,_,j=null)=>{const{el:I,type:T,transition:k,children:q,shapeFlag:P}=h;if(P&6){Ie(h.component.subTree,d,v,_);return}if(P&128){h.suspense.move(d,v,_);return}if(P&64){T.move(h,d,v,R);return}if(T===de){s(I,d,v);for(let N=0;N<q.length;N++)Ie(q[N],d,v,_);s(h.anchor,d,v);return}if(T===Fs){C(h,d,v);return}if(_!==2&&P&1&&k)if(_===0)k.beforeEnter(I),s(I,d,v),qe(()=>k.enter(I),j);else{const{leave:N,delayLeave:L,afterLeave:B}=k,z=()=>s(I,d,v),ee=()=>{N(I,()=>{z(),B&&B()})};L?L(I,z,ee):ee()}else s(I,d,v)},_e=(h,d,v,_=!1,j=!1)=>{const{type:I,props:T,ref:k,children:q,dynamicChildren:P,shapeFlag:H,patchFlag:N,dirs:L}=h;if(k!=null&&ur(k,null,v,h,!0),H&256){d.ctx.deactivate(h);return}const B=H&1&&L,z=!Yn(h);let ee;if(z&&(ee=T&&T.onVnodeBeforeUnmount)&&Ze(ee,d,h),H&6)Me(h.component,v,_);else{if(H&128){h.suspense.unmount(v,_);return}B&&xt(h,null,d,"beforeUnmount"),H&64?h.type.remove(h,d,v,j,R,_):P&&(I!==de||N>0&&N&64)?be(P,d,v,!1,!0):(I===de&&N&384||!j&&H&16)&&be(q,d,v),_&&ke(h)}(z&&(ee=T&&T.onVnodeUnmounted)||B)&&qe(()=>{ee&&Ze(ee,d,h),B&&xt(h,null,d,"unmounted")},v)},ke=h=>{const{type:d,el:v,anchor:_,transition:j}=h;if(d===de){at(v,_);return}if(d===Fs){E(h);return}const I=()=>{r(v),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(h.shapeFlag&1&&j&&!j.persisted){const{leave:T,delayLeave:k}=j,q=()=>T(v,I);k?k(h.el,I,q):q()}else I()},at=(h,d)=>{let v;for(;h!==d;)v=f(h),r(h),h=v;r(d)},Me=(h,d,v)=>{const{bum:_,scope:j,update:I,subTree:T,um:k}=h;_&&Ls(_),j.stop(),I&&(I.active=!1,_e(T,h,d,v)),k&&qe(k,d),qe(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},be=(h,d,v,_=!1,j=!1,I=0)=>{for(let T=I;T<h.length;T++)_e(h[T],d,v,_,j)},x=h=>h.shapeFlag&6?x(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),D=(h,d,v)=>{h==null?d._vnode&&_e(d._vnode,null,null,!0):y(d._vnode||null,h,d,null,null,null,v),ma(),Rl(),d._vnode=h},R={p:y,um:_e,m:Ie,r:ke,mt:ve,mc:ue,pc:W,pbc:Q,n:x,o:e};let M,X;return t&&([M,X]=t(R)),{render:D,hydrate:M,createApp:Su(D,M)}}function wt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ql(e,t,n=!1){const s=e.children,r=t.children;if(K(s)&&K(r))for(let a=0;a<s.length;a++){const o=s[a];let c=r[a];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[a]=dt(r[a]),c.el=o.el),n||Ql(o,c)),c.type===Cs&&(c.el=o.el)}}function Tu(e){const t=e.slice(),n=[0];let s,r,a,o,c;const l=e.length;for(s=0;s<l;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(a=0,o=n.length-1;a<o;)c=a+o>>1,e[n[c]]<u?a=c+1:o=c;u<e[n[a]]&&(a>0&&(t[s]=n[a-1]),n[a]=s)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}const Du=e=>e.__isTeleport,de=Symbol.for("v-fgt"),Cs=Symbol.for("v-txt"),At=Symbol.for("v-cmt"),Fs=Symbol.for("v-stc"),mn=[];let Ke=null;function re(e=!1){mn.push(Ke=e?null:[])}function Nu(){mn.pop(),Ke=mn[mn.length-1]||null}let Sn=1;function Sa(e){Sn+=e}function Gl(e){return e.dynamicChildren=Sn>0?Ke||$t:null,Nu(),Sn>0&&Ke&&Ke.push(e),e}function oe(e,t,n,s,r,a){return Gl($(e,t,n,s,r,a,!0))}function Jr(e,t,n,s,r){return Gl(me(e,t,n,s,r,!0))}function pr(e){return e?e.__v_isVNode===!0:!1}function rn(e,t){return e.type===t.type&&e.key===t.key}const As="__vInternal",Zl=({key:e})=>e!=null?e:null,es=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?je(e)||Se(e)||V(e)?{i:ze,r:e,k:t,f:!!n}:e:null);function $(e,t=null,n=null,s=0,r=null,a=e===de?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Zl(t),ref:t&&es(t),scopeId:Ss,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ze};return c?(Qr(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=je(n)?8:16),Sn>0&&!o&&Ke&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&Ke.push(l),l}const me=Mu;function Mu(e,t=null,n=null,s=0,r=null,a=!1){if((!e||e===vu)&&(e=At),pr(e)){const c=Qt(e,t,!0);return n&&Qr(c,n),Sn>0&&!a&&Ke&&(c.shapeFlag&6?Ke[Ke.indexOf(e)]=c:Ke.push(c)),c.patchFlag|=-2,c}if(Gu(e)&&(e=e.__vccOpts),t){t=Lu(t);let{class:c,style:l}=t;c&&!je(c)&&(t.class=Wt(c)),fe(l)&&(Ol(l)&&!K(l)&&(l=xe({},l)),t.style=xn(l))}const o=je(e)?1:su(e)?128:Du(e)?64:fe(e)?4:V(e)?2:0;return $(e,t,n,s,r,o,a,!0)}function Lu(e){return e?Ol(e)||As in e?xe({},e):e:null}function Qt(e,t,n=!1){const{props:s,ref:r,patchFlag:a,children:o}=e,c=t?Fu(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Zl(c),ref:t&&t.ref?n&&r?K(r)?r.concat(es(t)):[r,es(t)]:es(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==de?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Qt(e.ssContent),ssFallback:e.ssFallback&&Qt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Hu(e=" ",t=0){return me(Cs,null,e,t)}function Uu(e="",t=!1){return t?(re(),Jr(At,null,e)):me(At,null,e)}function Ye(e){return e==null||typeof e=="boolean"?me(At):K(e)?me(de,null,e.slice()):typeof e=="object"?dt(e):me(Cs,null,String(e))}function dt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Qt(e)}function Qr(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Qr(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(As in t)?t._ctx=ze:r===3&&ze&&(ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:ze},n=32):(t=String(t),s&64?(n=16,t=[Hu(t)]):n=8);e.children=t,e.shapeFlag|=n}function Fu(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Wt([t.class,s.class]));else if(r==="style")t.style=xn([t.style,s.style]);else if(ys(r)){const a=t[r],o=s[r];o&&a!==o&&!(K(a)&&a.includes(o))&&(t[r]=a?[].concat(a,o):o)}else r!==""&&(t[r]=s[r])}return t}function Ze(e,t,n,s=null){We(e,t,7,[n,s])}const $u=Bl();let Bu=0;function zu(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||$u,a={uid:Bu++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new pi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kl(s,r),emitsOptions:Dl(s,r),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:s.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Zi.bind(null,a),e.ce&&e.ce(a),a}let we=null,Gr,Rt,Ia="__VUE_INSTANCE_SETTERS__";(Rt=er()[Ia])||(Rt=er()[Ia]=[]),Rt.push(e=>we=e),Gr=e=>{Rt.length>1?Rt.forEach(t=>t(e)):Rt[0](e)};const Gt=e=>{Gr(e),e.scope.on()},Ct=()=>{we&&we.scope.off(),Gr(null)};function Yl(e){return e.vnode.shapeFlag&4}let In=!1;function Ku(e,t=!1){In=t;const{props:n,children:s}=e.vnode,r=Yl(e);Iu(e,n,r,t),Cu(e,s);const a=r?Vu(e,t):void 0;return In=!1,a}function Vu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=El(new Proxy(e.ctx,yu));const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?Ju(e):null;Gt(e),en();const a=vt(s,e,0,[e.props,r]);if(tn(),Ct(),cl(a)){if(a.then(Ct,Ct),t)return a.then(o=>{ka(e,o,t)}).catch(o=>{Os(o,e,0)});e.asyncDep=a}else ka(e,a,t)}else Xl(e,t)}function ka(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=Pl(t)),Xl(e,n)}let Pa;function Xl(e,t,n){const s=e.type;if(!e.render){if(!t&&Pa&&!s.render){const r=s.template||Vr(e).template;if(r){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:c,compilerOptions:l}=s,u=xe(xe({isCustomElement:a,delimiters:c},o),l);s.render=Pa(r,u)}}e.render=s.render||Ve}Gt(e),en(),bu(e),tn(),Ct()}function Wu(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Te(e,"get","$attrs"),t[n]}}))}function Ju(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Wu(e)},slots:e.slots,emit:e.emit,expose:t}}function Zr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Pl(El(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in dn)return dn[n](e)},has(t,n){return n in t||n in dn}}))}function Qu(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function Gu(e){return V(e)&&"__vccOpts"in e}const Le=(e,t)=>Ki(e,t,In);function ec(e,t,n){const s=arguments.length;return s===2?fe(t)&&!K(t)?pr(t)?me(e,null,[t]):me(e,t):me(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&pr(n)&&(n=[n]),me(e,t,n))}const Zu=Symbol.for("v-scx"),Yu=()=>Je(Zu),Xu="3.3.4",ep="http://www.w3.org/2000/svg",kt=typeof document!="undefined"?document:null,Ca=kt&&kt.createElement("template"),tp={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?kt.createElementNS(ep,e):kt.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>kt.createTextNode(e),createComment:e=>kt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>kt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,a){const o=n?n.previousSibling:t.lastChild;if(r&&(r===a||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===a||!(r=r.nextSibling)););else{Ca.innerHTML=s?`<svg>${e}</svg>`:e;const c=Ca.content;if(s){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}t.insertBefore(c,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function np(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function sp(e,t,n){const s=e.style,r=je(n);if(n&&!r){if(t&&!je(t))for(const a in t)n[a]==null&&fr(s,a,"");for(const a in n)fr(s,a,n[a])}else{const a=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=a)}}const Aa=/\s*!important$/;function fr(e,t,n){if(K(n))n.forEach(s=>fr(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=rp(e,t);Aa.test(n)?e.setProperty(Xt(s),n.replace(Aa,""),"important"):e[s]=n}}const qa=["Webkit","Moz","ms"],$s={};function rp(e,t){const n=$s[t];if(n)return n;let s=st(t);if(s!=="filter"&&s in e)return $s[t]=s;s=xs(s);for(let r=0;r<qa.length;r++){const a=qa[r]+s;if(a in e)return $s[t]=a}return t}const Ra="http://www.w3.org/1999/xlink";function ap(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ra,t.slice(6,t.length)):e.setAttributeNS(Ra,t,n);else{const a=ui(t);n==null||a&&!pl(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function op(e,t,n,s,r,a,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,r,a),e[t]=n==null?"":n;return}const c=e.tagName;if(t==="value"&&c!=="PROGRESS"&&!c.includes("-")){e._value=n;const u=c==="OPTION"?e.getAttribute("value"):e.value,i=n==null?"":n;u!==i&&(e.value=i),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=pl(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function lp(e,t,n,s){e.addEventListener(t,n,s)}function cp(e,t,n,s){e.removeEventListener(t,n,s)}function ip(e,t,n,s,r=null){const a=e._vei||(e._vei={}),o=a[t];if(s&&o)o.value=s;else{const[c,l]=up(t);if(s){const u=a[t]=hp(s,r);lp(e,c,u,l)}else o&&(cp(e,c,o,l),a[t]=void 0)}}const Ta=/(?:Once|Passive|Capture)$/;function up(e){let t;if(Ta.test(e)){t={};let s;for(;s=e.match(Ta);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Xt(e.slice(2)),t]}let Bs=0;const pp=Promise.resolve(),fp=()=>Bs||(pp.then(()=>Bs=0),Bs=Date.now());function hp(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;We(dp(s,n.value),t,5,[s])};return n.value=e,n.attached=fp(),n}function dp(e,t){if(K(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Da=/^on[a-z]/,mp=(e,t,n,s,r=!1,a,o,c,l)=>{t==="class"?np(e,s,r):t==="style"?sp(e,n,s):ys(t)?Ar(t)||ip(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):gp(e,t,s,r))?op(e,t,s,a,o,c,l):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),ap(e,t,s,r))};function gp(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Da.test(t)&&V(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Da.test(t)&&je(n)?!1:t in e}const vp=xe({patchProp:mp},tp);let Na;function _p(){return Na||(Na=qu(vp))}const yp=(...e)=>{const t=_p().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=bp(s);if(!r)return;const a=t._component;!V(a)&&!a.render&&!a.template&&(a.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function bp(e){return je(e)?document.querySelector(e):e}var rt=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n};const jp={};function xp(e,t){const n=Fl("router-view");return re(),Jr(n)}var wp=rt(jp,[["render",xp]]);/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Mt=typeof window!="undefined";function Op(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ae=Object.assign;function zs(e,t){const n={};for(const s in t){const r=t[s];n[s]=Qe(r)?r.map(e):e(r)}return n}const gn=()=>{},Qe=Array.isArray,Ep=/\/$/,Sp=e=>e.replace(Ep,"");function Ks(e,t,n="/"){let s,r={},a="",o="";const c=t.indexOf("#");let l=t.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(s=t.slice(0,l),a=t.slice(l+1,c>-1?c:t.length),r=e(a)),c>-1&&(s=s||t.slice(0,c),o=t.slice(c,t.length)),s=Cp(s!=null?s:t,n),{fullPath:s+(a&&"?")+a+o,path:s,query:r,hash:o}}function Ip(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ma(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function kp(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Zt(t.matched[s],n.matched[r])&&tc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Zt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function tc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Pp(e[n],t[n]))return!1;return!0}function Pp(e,t){return Qe(e)?La(e,t):Qe(t)?La(t,e):e===t}function La(e,t){return Qe(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Cp(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let a=n.length-1,o,c;for(o=0;o<s.length;o++)if(c=s[o],c!==".")if(c==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var kn;(function(e){e.pop="pop",e.push="push"})(kn||(kn={}));var vn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(vn||(vn={}));function Ap(e){if(!e)if(Mt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Sp(e)}const qp=/^[^#]+#/;function Rp(e,t){return e.replace(qp,"#")+t}function Tp(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const qs=()=>({left:window.pageXOffset,top:window.pageYOffset});function Dp(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=Tp(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ha(e,t){return(history.state?history.state.position-t:-1)+e}const hr=new Map;function Np(e,t){hr.set(e,t)}function Mp(e){const t=hr.get(e);return hr.delete(e),t}let Lp=()=>location.protocol+"//"+location.host;function nc(e,t){const{pathname:n,search:s,hash:r}=t,a=e.indexOf("#");if(a>-1){let c=r.includes(e.slice(a))?e.slice(a).length:1,l=r.slice(c);return l[0]!=="/"&&(l="/"+l),Ma(l,"")}return Ma(n,e)+s+r}function Hp(e,t,n,s){let r=[],a=[],o=null;const c=({state:f})=>{const g=nc(e,location),b=n.value,y=t.value;let w=0;if(f){if(n.value=g,t.value=f,o&&o===b){o=null;return}w=y?f.position-y.position:0}else s(g);r.forEach(S=>{S(n.value,b,{delta:w,type:kn.pop,direction:w?w>0?vn.forward:vn.back:vn.unknown})})};function l(){o=n.value}function u(f){r.push(f);const g=()=>{const b=r.indexOf(f);b>-1&&r.splice(b,1)};return a.push(g),g}function i(){const{history:f}=window;!f.state||f.replaceState(ae({},f.state,{scroll:qs()}),"")}function p(){for(const f of a)f();a=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",i)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",i,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function Ua(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?qs():null}}function Up(e){const{history:t,location:n}=window,s={value:nc(e,n)},r={value:t.state};r.value||a(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(l,u,i){const p=e.indexOf("#"),f=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+l:Lp()+e+l;try{t[i?"replaceState":"pushState"](u,"",f),r.value=u}catch(g){console.error(g),n[i?"replace":"assign"](f)}}function o(l,u){const i=ae({},t.state,Ua(r.value.back,l,r.value.forward,!0),u,{position:r.value.position});a(l,i,!0),s.value=l}function c(l,u){const i=ae({},r.value,t.state,{forward:l,scroll:qs()});a(i.current,i,!0);const p=ae({},Ua(s.value,l,null),{position:i.position+1},u);a(l,p,!1),s.value=l}return{location:s,state:r,push:c,replace:o}}function Fp(e){e=Ap(e);const t=Up(e),n=Hp(e,t.state,t.location,t.replace);function s(a,o=!0){o||n.pauseListeners(),history.go(a)}const r=ae({location:"",base:e,go:s,createHref:Rp.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function $p(e){return typeof e=="string"||e&&typeof e=="object"}function sc(e){return typeof e=="string"||typeof e=="symbol"}const ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},rc=Symbol("");var Fa;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Fa||(Fa={}));function Yt(e,t){return ae(new Error,{type:e,[rc]:!0},t)}function ot(e,t){return e instanceof Error&&rc in e&&(t==null||!!(e.type&t))}const $a="[^/]+?",Bp={sensitive:!1,strict:!1,start:!0,end:!0},zp=/[.+*?^${}()[\]/\\]/g;function Kp(e,t){const n=ae({},Bp,t),s=[];let r=n.start?"^":"";const a=[];for(const u of e){const i=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let p=0;p<u.length;p++){const f=u[p];let g=40+(n.sensitive?.25:0);if(f.type===0)p||(r+="/"),r+=f.value.replace(zp,"\\$&"),g+=40;else if(f.type===1){const{value:b,repeatable:y,optional:w,regexp:S}=f;a.push({name:b,repeatable:y,optional:w});const O=S||$a;if(O!==$a){g+=10;try{new RegExp(`(${O})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${b}" (${O}): `+E.message)}}let C=y?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;p||(C=w&&u.length<2?`(?:/${C})`:"/"+C),w&&(C+="?"),r+=C,g+=20,w&&(g+=-8),y&&(g+=-20),O===".*"&&(g+=-50)}i.push(g)}s.push(i)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function c(u){const i=u.match(o),p={};if(!i)return null;for(let f=1;f<i.length;f++){const g=i[f]||"",b=a[f-1];p[b.name]=g&&b.repeatable?g.split("/"):g}return p}function l(u){let i="",p=!1;for(const f of e){(!p||!i.endsWith("/"))&&(i+="/"),p=!1;for(const g of f)if(g.type===0)i+=g.value;else if(g.type===1){const{value:b,repeatable:y,optional:w}=g,S=b in u?u[b]:"";if(Qe(S)&&!y)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const O=Qe(S)?S.join("/"):S;if(!O)if(w)f.length<2&&(i.endsWith("/")?i=i.slice(0,-1):p=!0);else throw new Error(`Missing required param "${b}"`);i+=O}}return i||"/"}return{re:o,score:s,keys:a,parse:c,stringify:l}}function Vp(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Wp(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const a=Vp(s[n],r[n]);if(a)return a;n++}if(Math.abs(r.length-s.length)===1){if(Ba(s))return 1;if(Ba(r))return-1}return r.length-s.length}function Ba(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Jp={type:0,value:""},Qp=/[a-zA-Z0-9_]/;function Gp(e){if(!e)return[[]];if(e==="/")return[[Jp]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let a;function o(){a&&r.push(a),a=[]}let c=0,l,u="",i="";function p(){!u||(n===0?a.push({type:0,value:u}):n===1||n===2||n===3?(a.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:u,regexp:i,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=l}for(;c<e.length;){if(l=e[c++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:Qp.test(l)?f():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?i[i.length-1]=="\\"?i=i.slice(0,-1)+l:n=3:i+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,i="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),p(),o(),r}function Zp(e,t,n){const s=Kp(Gp(e.path),n),r=ae(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Yp(e,t){const n=[],s=new Map;t=Va({strict:!1,end:!0,sensitive:!1},t);function r(i){return s.get(i)}function a(i,p,f){const g=!f,b=Xp(i);b.aliasOf=f&&f.record;const y=Va(t,i),w=[b];if("alias"in i){const C=typeof i.alias=="string"?[i.alias]:i.alias;for(const E of C)w.push(ae({},b,{components:f?f.record.components:b.components,path:E,aliasOf:f?f.record:b}))}let S,O;for(const C of w){const{path:E}=C;if(p&&E[0]!=="/"){const A=p.record.path,F=A[A.length-1]==="/"?"":"/";C.path=p.record.path+(E&&F+E)}if(S=Zp(C,p,y),f?f.alias.push(S):(O=O||S,O!==S&&O.alias.push(S),g&&i.name&&!Ka(S)&&o(i.name)),b.children){const A=b.children;for(let F=0;F<A.length;F++)a(A[F],S,f&&f.children[F])}f=f||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&l(S)}return O?()=>{o(O)}:gn}function o(i){if(sc(i)){const p=s.get(i);p&&(s.delete(i),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(i);p>-1&&(n.splice(p,1),i.record.name&&s.delete(i.record.name),i.children.forEach(o),i.alias.forEach(o))}}function c(){return n}function l(i){let p=0;for(;p<n.length&&Wp(i,n[p])>=0&&(i.record.path!==n[p].record.path||!ac(i,n[p]));)p++;n.splice(p,0,i),i.record.name&&!Ka(i)&&s.set(i.record.name,i)}function u(i,p){let f,g={},b,y;if("name"in i&&i.name){if(f=s.get(i.name),!f)throw Yt(1,{location:i});y=f.record.name,g=ae(za(p.params,f.keys.filter(O=>!O.optional).map(O=>O.name)),i.params&&za(i.params,f.keys.map(O=>O.name))),b=f.stringify(g)}else if("path"in i)b=i.path,f=n.find(O=>O.re.test(b)),f&&(g=f.parse(b),y=f.record.name);else{if(f=p.name?s.get(p.name):n.find(O=>O.re.test(p.path)),!f)throw Yt(1,{location:i,currentLocation:p});y=f.record.name,g=ae({},p.params,i.params),b=f.stringify(g)}const w=[];let S=f;for(;S;)w.unshift(S.record),S=S.parent;return{name:y,path:b,params:g,matched:w,meta:tf(w)}}return e.forEach(i=>a(i)),{addRoute:a,resolve:u,removeRoute:o,getRoutes:c,getRecordMatcher:r}}function za(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Xp(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ef(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ef(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function Ka(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function tf(e){return e.reduce((t,n)=>ae(t,n.meta),{})}function Va(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function ac(e,t){return t.children.some(n=>n===e||ac(e,n))}const oc=/#/g,nf=/&/g,sf=/\//g,rf=/=/g,af=/\?/g,lc=/\+/g,of=/%5B/g,lf=/%5D/g,cc=/%5E/g,cf=/%60/g,ic=/%7B/g,uf=/%7C/g,uc=/%7D/g,pf=/%20/g;function Yr(e){return encodeURI(""+e).replace(uf,"|").replace(of,"[").replace(lf,"]")}function ff(e){return Yr(e).replace(ic,"{").replace(uc,"}").replace(cc,"^")}function dr(e){return Yr(e).replace(lc,"%2B").replace(pf,"+").replace(oc,"%23").replace(nf,"%26").replace(cf,"`").replace(ic,"{").replace(uc,"}").replace(cc,"^")}function hf(e){return dr(e).replace(rf,"%3D")}function df(e){return Yr(e).replace(oc,"%23").replace(af,"%3F")}function mf(e){return e==null?"":df(e).replace(sf,"%2F")}function us(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function gf(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const a=s[r].replace(lc," "),o=a.indexOf("="),c=us(o<0?a:a.slice(0,o)),l=o<0?null:us(a.slice(o+1));if(c in t){let u=t[c];Qe(u)||(u=t[c]=[u]),u.push(l)}else t[c]=l}return t}function Wa(e){let t="";for(let n in e){const s=e[n];if(n=hf(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Qe(s)?s.map(a=>a&&dr(a)):[s&&dr(s)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function vf(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Qe(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const _f=Symbol(""),Ja=Symbol(""),Rs=Symbol(""),Xr=Symbol(""),mr=Symbol("");function an(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function mt(e,t,n,s,r){const a=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,c)=>{const l=p=>{p===!1?c(Yt(4,{from:n,to:t})):p instanceof Error?c(p):$p(p)?c(Yt(2,{from:t,to:p})):(a&&s.enterCallbacks[r]===a&&typeof p=="function"&&a.push(p),o())},u=e.call(s&&s.instances[r],t,n,l);let i=Promise.resolve(u);e.length<3&&(i=i.then(l)),i.catch(p=>c(p))})}function Vs(e,t,n,s){const r=[];for(const a of e)for(const o in a.components){let c=a.components[o];if(!(t!=="beforeRouteEnter"&&!a.instances[o]))if(yf(c)){const u=(c.__vccOpts||c)[t];u&&r.push(mt(u,n,s,a,o))}else{let l=c();r.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${a.path}"`));const i=Op(u)?u.default:u;a.components[o]=i;const f=(i.__vccOpts||i)[t];return f&&mt(f,n,s,a,o)()}))}}return r}function yf(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Qa(e){const t=Je(Rs),n=Je(Xr),s=Le(()=>t.resolve(tt(e.to))),r=Le(()=>{const{matched:l}=s.value,{length:u}=l,i=l[u-1],p=n.matched;if(!i||!p.length)return-1;const f=p.findIndex(Zt.bind(null,i));if(f>-1)return f;const g=Ga(l[u-2]);return u>1&&Ga(i)===g&&p[p.length-1].path!==g?p.findIndex(Zt.bind(null,l[u-2])):f}),a=Le(()=>r.value>-1&&wf(n.params,s.value.params)),o=Le(()=>r.value>-1&&r.value===n.matched.length-1&&tc(n.params,s.value.params));function c(l={}){return xf(l)?t[tt(e.replace)?"replace":"push"](tt(e.to)).catch(gn):Promise.resolve()}return{route:s,href:Le(()=>s.value.href),isActive:a,isExactActive:o,navigate:c}}const bf=zr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qa,setup(e,{slots:t}){const n=Rn(Qa(e)),{options:s}=Je(Rs),r=Le(()=>({[Za(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Za(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:ec("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},a)}}}),jf=bf;function xf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function wf(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Qe(r)||r.length!==s.length||s.some((a,o)=>a!==r[o]))return!1}return!0}function Ga(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Za=(e,t,n)=>e!=null?e:t!=null?t:n,Of=zr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Je(mr),r=Le(()=>e.route||s.value),a=Je(Ja,0),o=Le(()=>{let u=tt(a);const{matched:i}=r.value;let p;for(;(p=i[u])&&!p.components;)u++;return u}),c=Le(()=>r.value.matched[o.value]);Xn(Ja,Le(()=>o.value+1)),Xn(_f,c),Xn(mr,r);const l=Re();return hn(()=>[l.value,c.value,e.name],([u,i,p],[f,g,b])=>{i&&(i.instances[p]=u,g&&g!==i&&u&&u===f&&(i.leaveGuards.size||(i.leaveGuards=g.leaveGuards),i.updateGuards.size||(i.updateGuards=g.updateGuards))),u&&i&&(!g||!Zt(i,g)||!f)&&(i.enterCallbacks[p]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=r.value,i=e.name,p=c.value,f=p&&p.components[i];if(!f)return Ya(n.default,{Component:f,route:u});const g=p.props[i],b=g?g===!0?u.params:typeof g=="function"?g(u):g:null,w=ec(f,ae({},b,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(p.instances[i]=null)},ref:l}));return Ya(n.default,{Component:w,route:u})||w}}});function Ya(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ef=Of;function Sf(e){const t=Yp(e.routes,e),n=e.parseQuery||gf,s=e.stringifyQuery||Wa,r=e.history,a=an(),o=an(),c=an(),l=Fi(ht);let u=ht;Mt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const i=zs.bind(null,x=>""+x),p=zs.bind(null,mf),f=zs.bind(null,us);function g(x,D){let R,M;return sc(x)?(R=t.getRecordMatcher(x),M=D):M=x,t.addRoute(M,R)}function b(x){const D=t.getRecordMatcher(x);D&&t.removeRoute(D)}function y(){return t.getRoutes().map(x=>x.record)}function w(x){return!!t.getRecordMatcher(x)}function S(x,D){if(D=ae({},D||l.value),typeof x=="string"){const v=Ks(n,x,D.path),_=t.resolve({path:v.path},D),j=r.createHref(v.fullPath);return ae(v,_,{params:f(_.params),hash:us(v.hash),redirectedFrom:void 0,href:j})}let R;if("path"in x)R=ae({},x,{path:Ks(n,x.path,D.path).path});else{const v=ae({},x.params);for(const _ in v)v[_]==null&&delete v[_];R=ae({},x,{params:p(v)}),D.params=p(D.params)}const M=t.resolve(R,D),X=x.hash||"";M.params=i(f(M.params));const h=Ip(s,ae({},x,{hash:ff(X),path:M.path})),d=r.createHref(h);return ae({fullPath:h,hash:X,query:s===Wa?vf(x.query):x.query||{}},M,{redirectedFrom:void 0,href:d})}function O(x){return typeof x=="string"?Ks(n,x,l.value.path):ae({},x)}function C(x,D){if(u!==x)return Yt(8,{from:D,to:x})}function E(x){return Y(x)}function A(x){return E(ae(O(x),{replace:!0}))}function F(x){const D=x.matched[x.matched.length-1];if(D&&D.redirect){const{redirect:R}=D;let M=typeof R=="function"?R(x):R;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=O(M):{path:M},M.params={}),ae({query:x.query,hash:x.hash,params:"path"in M?{}:x.params},M)}}function Y(x,D){const R=u=S(x),M=l.value,X=x.state,h=x.force,d=x.replace===!0,v=F(R);if(v)return Y(ae(O(v),{state:typeof v=="object"?ae({},X,v.state):X,force:h,replace:d}),D||R);const _=R;_.redirectedFrom=D;let j;return!h&&kp(s,M,R)&&(j=Yt(16,{to:_,from:M}),Ie(M,M,!0,!1)),(j?Promise.resolve(j):Q(_,M)).catch(I=>ot(I)?ot(I,2)?I:Ue(I):W(I,_,M)).then(I=>{if(I){if(ot(I,2))return Y(ae({replace:d},O(I.to),{state:typeof I.to=="object"?ae({},X,I.to.state):X,force:h}),D||_)}else I=ge(_,M,!0,d,X);return ie(_,M,I),I})}function ue(x,D){const R=C(x,D);return R?Promise.reject(R):Promise.resolve()}function ce(x){const D=at.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(x):x()}function Q(x,D){let R;const[M,X,h]=If(x,D);R=Vs(M.reverse(),"beforeRouteLeave",x,D);for(const v of M)v.leaveGuards.forEach(_=>{R.push(mt(_,x,D))});const d=ue.bind(null,x,D);return R.push(d),be(R).then(()=>{R=[];for(const v of a.list())R.push(mt(v,x,D));return R.push(d),be(R)}).then(()=>{R=Vs(X,"beforeRouteUpdate",x,D);for(const v of X)v.updateGuards.forEach(_=>{R.push(mt(_,x,D))});return R.push(d),be(R)}).then(()=>{R=[];for(const v of x.matched)if(v.beforeEnter&&!D.matched.includes(v))if(Qe(v.beforeEnter))for(const _ of v.beforeEnter)R.push(mt(_,x,D));else R.push(mt(v.beforeEnter,x,D));return R.push(d),be(R)}).then(()=>(x.matched.forEach(v=>v.enterCallbacks={}),R=Vs(h,"beforeRouteEnter",x,D),R.push(d),be(R))).then(()=>{R=[];for(const v of o.list())R.push(mt(v,x,D));return R.push(d),be(R)}).catch(v=>ot(v,8)?v:Promise.reject(v))}function ie(x,D,R){for(const M of c.list())ce(()=>M(x,D,R))}function ge(x,D,R,M,X){const h=C(x,D);if(h)return h;const d=D===ht,v=Mt?history.state:{};R&&(M||d?r.replace(x.fullPath,ae({scroll:d&&v&&v.scroll},X)):r.push(x.fullPath,X)),l.value=x,Ie(x,D,R,d),Ue()}let he;function ve(){he||(he=r.listen((x,D,R)=>{if(!Me.listening)return;const M=S(x),X=F(M);if(X){Y(ae(X,{replace:!0}),M).catch(gn);return}u=M;const h=l.value;Mt&&Np(Ha(h.fullPath,R.delta),qs()),Q(M,h).catch(d=>ot(d,12)?d:ot(d,2)?(Y(d.to,M).then(v=>{ot(v,20)&&!R.delta&&R.type===kn.pop&&r.go(-1,!1)}).catch(gn),Promise.reject()):(R.delta&&r.go(-R.delta,!1),W(d,M,h))).then(d=>{d=d||ge(M,h,!1),d&&(R.delta&&!ot(d,8)?r.go(-R.delta,!1):R.type===kn.pop&&ot(d,20)&&r.go(-1,!1)),ie(M,h,d)}).catch(gn)}))}let He=an(),le=an(),te;function W(x,D,R){Ue(x);const M=le.list();return M.length?M.forEach(X=>X(x,D,R)):console.error(x),Promise.reject(x)}function De(){return te&&l.value!==ht?Promise.resolve():new Promise((x,D)=>{He.add([x,D])})}function Ue(x){return te||(te=!x,ve(),He.list().forEach(([D,R])=>x?R(x):D()),He.reset()),x}function Ie(x,D,R,M){const{scrollBehavior:X}=e;if(!Mt||!X)return Promise.resolve();const h=!R&&Mp(Ha(x.fullPath,0))||(M||!R)&&history.state&&history.state.scroll||null;return Al().then(()=>X(x,D,h)).then(d=>d&&Dp(d)).catch(d=>W(d,x,D))}const _e=x=>r.go(x);let ke;const at=new Set,Me={currentRoute:l,listening:!0,addRoute:g,removeRoute:b,hasRoute:w,getRoutes:y,resolve:S,options:e,push:E,replace:A,go:_e,back:()=>_e(-1),forward:()=>_e(1),beforeEach:a.add,beforeResolve:o.add,afterEach:c.add,onError:le.add,isReady:De,install(x){const D=this;x.component("RouterLink",jf),x.component("RouterView",Ef),x.config.globalProperties.$router=D,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>tt(l)}),Mt&&!ke&&l.value===ht&&(ke=!0,E(r.location).catch(X=>{}));const R={};for(const X in ht)R[X]=Le(()=>l.value[X]);x.provide(Rs,D),x.provide(Xr,Rn(R)),x.provide(mr,l);const M=x.unmount;at.add(x),x.unmount=function(){at.delete(x),at.size<1&&(u=ht,he&&he(),he=null,l.value=ht,ke=!1,te=!1),M()}}};function be(x){return x.reduce((D,R)=>D.then(()=>ce(R)),Promise.resolve())}return Me}function If(e,t){const n=[],s=[],r=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){const c=t.matched[o];c&&(e.matched.find(u=>Zt(u,c))?s.push(c):n.push(c));const l=e.matched[o];l&&(t.matched.find(u=>Zt(u,l))||r.push(l))}return[n,s,r]}function kf(){return Je(Rs)}function Tn(){return Je(Xr)}var Pf="/assets/close.32d69e24.svg",Cf="/assets/more.2b04406d.svg";function Af(e,t){let n;return function(s){n&&clearTimeout(n),n=setTimeout(()=>{e(s)},t)}}/*! @docsearch/js 3.4.0 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */function Xa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xa(Object(n),!0).forEach(function(s){qf(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xa(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function Pn(e){return Pn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pn(e)}function qf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gr(){return gr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},gr.apply(this,arguments)}function Rf(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ps(e,t){return function(n){if(Array.isArray(n))return n}(e)||function(n,s){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var a,o,c=[],l=!0,u=!1;try{for(r=r.call(n);!(l=(a=r.next()).done)&&(c.push(a.value),!s||c.length!==s);l=!0);}catch(i){u=!0,o=i}finally{try{l||r.return==null||r.return()}finally{if(u)throw o}}return c}}(e,t)||pc(e,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function fs(e){return function(t){if(Array.isArray(t))return vr(t)}(e)||function(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||pc(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function pc(e,t){if(e){if(typeof e=="string")return vr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?vr(e,t):void 0}}function vr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}var U,_n,fc,eo,hc,hs={},ea=[],Tf=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function ct(e,t){for(var n in t)e[n]=t[n];return e}function dc(e){var t=e.parentNode;t&&t.removeChild(e)}function et(e,t,n){var s,r,a,o=arguments,c={};for(a in t)a=="key"?s=t[a]:a=="ref"?r=t[a]:c[a]=t[a];if(arguments.length>3)for(n=[n],a=3;a<arguments.length;a++)n.push(o[a]);if(n!=null&&(c.children=n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)c[a]===void 0&&(c[a]=e.defaultProps[a]);return yn(e,c,s,r,null)}function yn(e,t,n,s,r){var a={type:e,props:t,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r==null?++U.__v:r};return U.vnode!=null&&U.vnode(a),a}function bt(e){return e.children}function nt(e,t){this.props=e,this.context=t}function Cn(e,t){if(t==null)return e.__?Cn(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Cn(e):null}function mc(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return mc(e)}}function _r(e){(!e.__d&&(e.__d=!0)&&_n.push(e)&&!ds.__r++||eo!==U.debounceRendering)&&((eo=U.debounceRendering)||fc)(ds)}function ds(){for(var e;ds.__r=_n.length;)e=_n.sort(function(t,n){return t.__v.__b-n.__v.__b}),_n=[],e.some(function(t){var n,s,r,a,o,c;t.__d&&(o=(a=(n=t).__v).__e,(c=n.__P)&&(s=[],(r=ct({},a)).__v=a.__v+1,ta(c,a,r,n.__n,c.ownerSVGElement!==void 0,a.__h!=null?[o]:null,s,o==null?Cn(a):o,a.__h),yc(s,a),a.__e!=o&&mc(a)))})}function gc(e,t,n,s,r,a,o,c,l,u){var i,p,f,g,b,y,w,S=s&&s.__k||ea,O=S.length;for(n.__k=[],i=0;i<t.length;i++)if((g=n.__k[i]=(g=t[i])==null||typeof g=="boolean"?null:typeof g=="string"||typeof g=="number"?yn(null,g,null,null,g):Array.isArray(g)?yn(bt,{children:g},null,null,null):g.__b>0?yn(g.type,g.props,g.key,null,g.__v):g)!=null){if(g.__=n,g.__b=n.__b+1,(f=S[i])===null||f&&g.key==f.key&&g.type===f.type)S[i]=void 0;else for(p=0;p<O;p++){if((f=S[p])&&g.key==f.key&&g.type===f.type){S[p]=void 0;break}f=null}ta(e,g,f=f||hs,r,a,o,c,l,u),b=g.__e,(p=g.ref)&&f.ref!=p&&(w||(w=[]),f.ref&&w.push(f.ref,null,g),w.push(p,g.__c||b,g)),b!=null?(y==null&&(y=b),typeof g.type=="function"&&g.__k!=null&&g.__k===f.__k?g.__d=l=vc(g,l,e):l=_c(e,g,f,S,b,l),u||n.type!=="option"?typeof n.type=="function"&&(n.__d=l):e.value=""):l&&f.__e==l&&l.parentNode!=e&&(l=Cn(f))}for(n.__e=y,i=O;i--;)S[i]!=null&&(typeof n.type=="function"&&S[i].__e!=null&&S[i].__e==n.__d&&(n.__d=Cn(s,i+1)),jc(S[i],S[i]));if(w)for(i=0;i<w.length;i++)bc(w[i],w[++i],w[++i])}function vc(e,t,n){var s,r;for(s=0;s<e.__k.length;s++)(r=e.__k[s])&&(r.__=e,t=typeof r.type=="function"?vc(r,t,n):_c(n,r,r,e.__k,r.__e,t));return t}function it(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){it(n,t)}):t.push(e)),t}function _c(e,t,n,s,r,a){var o,c,l;if(t.__d!==void 0)o=t.__d,t.__d=void 0;else if(n==null||r!=a||r.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(r),o=null;else{for(c=a,l=0;(c=c.nextSibling)&&l<s.length;l+=2)if(c==r)break e;e.insertBefore(r,a),o=a}return o!==void 0?o:r.nextSibling}function to(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Tf.test(t)?n:n+"px"}function $n(e,t,n,s,r){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)n&&t in n||to(e.style,t,"");if(n)for(t in n)s&&n[t]===s[t]||to(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?s||e.addEventListener(t,a?so:no,a):e.removeEventListener(t,a?so:no,a);else if(t!=="dangerouslySetInnerHTML"){if(r)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function no(e){this.l[e.type+!1](U.event?U.event(e):e)}function so(e){this.l[e.type+!0](U.event?U.event(e):e)}function ta(e,t,n,s,r,a,o,c,l){var u,i,p,f,g,b,y,w,S,O,C,E=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,c=t.__e=n.__e,t.__h=null,a=[c]),(u=U.__b)&&u(t);try{e:if(typeof E=="function"){if(w=t.props,S=(u=E.contextType)&&s[u.__c],O=u?S?S.props.value:u.__:s,n.__c?y=(i=t.__c=n.__c).__=i.__E:("prototype"in E&&E.prototype.render?t.__c=i=new E(w,O):(t.__c=i=new nt(w,O),i.constructor=E,i.render=Nf),S&&S.sub(i),i.props=w,i.state||(i.state={}),i.context=O,i.__n=s,p=i.__d=!0,i.__h=[]),i.__s==null&&(i.__s=i.state),E.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=ct({},i.__s)),ct(i.__s,E.getDerivedStateFromProps(w,i.__s))),f=i.props,g=i.state,p)E.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(E.getDerivedStateFromProps==null&&w!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(w,O),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(w,i.__s,O)===!1||t.__v===n.__v){i.props=w,i.state=i.__s,t.__v!==n.__v&&(i.__d=!1),i.__v=t,t.__e=n.__e,t.__k=n.__k,i.__h.length&&o.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(w,i.__s,O),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,g,b)})}i.context=O,i.props=w,i.state=i.__s,(u=U.__r)&&u(t),i.__d=!1,i.__v=t,i.__P=e,u=i.render(i.props,i.state,i.context),i.state=i.__s,i.getChildContext!=null&&(s=ct(ct({},s),i.getChildContext())),p||i.getSnapshotBeforeUpdate==null||(b=i.getSnapshotBeforeUpdate(f,g)),C=u!=null&&u.type===bt&&u.key==null?u.props.children:u,gc(e,Array.isArray(C)?C:[C],t,n,s,r,a,o,c,l),i.base=t.__e,t.__h=null,i.__h.length&&o.push(i),y&&(i.__E=i.__=null),i.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Df(n.__e,t,n,s,r,a,o,l);(u=U.diffed)&&u(t)}catch(A){t.__v=null,(l||a!=null)&&(t.__e=c,t.__h=!!l,a[a.indexOf(c)]=null),U.__e(A,t,n)}}function yc(e,t){U.__c&&U.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(s){s.call(n)})}catch(s){U.__e(s,n.__v)}})}function Df(e,t,n,s,r,a,o,c){var l,u,i,p,f=n.props,g=t.props,b=t.type,y=0;if(b==="svg"&&(r=!0),a!=null){for(;y<a.length;y++)if((l=a[y])&&(l===e||(b?l.localName==b:l.nodeType==3))){e=l,a[y]=null;break}}if(e==null){if(b===null)return document.createTextNode(g);e=r?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,g.is&&g),a=null,c=!1}if(b===null)f===g||c&&e.data===g||(e.data=g);else{if(a=a&&ea.slice.call(e.childNodes),u=(f=n.props||hs).dangerouslySetInnerHTML,i=g.dangerouslySetInnerHTML,!c){if(a!=null)for(f={},p=0;p<e.attributes.length;p++)f[e.attributes[p].name]=e.attributes[p].value;(i||u)&&(i&&(u&&i.__html==u.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(function(w,S,O,C,E){var A;for(A in O)A==="children"||A==="key"||A in S||$n(w,A,null,O[A],C);for(A in S)E&&typeof S[A]!="function"||A==="children"||A==="key"||A==="value"||A==="checked"||O[A]===S[A]||$n(w,A,S[A],O[A],C)}(e,g,f,r,c),i)t.__k=[];else if(y=t.props.children,gc(e,Array.isArray(y)?y:[y],t,n,s,r&&b!=="foreignObject",a,o,e.firstChild,c),a!=null)for(y=a.length;y--;)a[y]!=null&&dc(a[y]);c||("value"in g&&(y=g.value)!==void 0&&(y!==e.value||b==="progress"&&!y)&&$n(e,"value",y,f.value,!1),"checked"in g&&(y=g.checked)!==void 0&&y!==e.checked&&$n(e,"checked",y,f.checked,!1))}return e}function bc(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(s){U.__e(s,n)}}function jc(e,t,n){var s,r,a;if(U.unmount&&U.unmount(e),(s=e.ref)&&(s.current&&s.current!==e.__e||bc(s,null,t)),n||typeof e.type=="function"||(n=(r=e.__e)!=null),e.__e=e.__d=void 0,(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(o){U.__e(o,t)}s.base=s.__P=null}if(s=e.__k)for(a=0;a<s.length;a++)s[a]&&jc(s[a],t,n);r!=null&&dc(r)}function Nf(e,t,n){return this.constructor(e,n)}function An(e,t,n){var s,r,a;U.__&&U.__(e,t),r=(s=typeof n=="function")?null:n&&n.__k||t.__k,a=[],ta(t,e=(!s&&n||t).__k=et(bt,null,[e]),r||hs,hs,t.ownerSVGElement!==void 0,!s&&n?[n]:r?null:t.firstChild?ea.slice.call(t.childNodes):null,a,!s&&n?n:r?r.__e:t.firstChild,s),yc(a,e)}function xc(e,t){An(e,t,xc)}function Mf(e,t,n){var s,r,a,o=arguments,c=ct({},e.props);for(a in t)a=="key"?s=t[a]:a=="ref"?r=t[a]:c[a]=t[a];if(arguments.length>3)for(n=[n],a=3;a<arguments.length;a++)n.push(o[a]);return n!=null&&(c.children=n),yn(e.type,c,s||e.key,r||e.ref,null)}U={__e:function(e,t){for(var n,s,r;t=t.__;)if((n=t.__c)&&!n.__)try{if((s=n.constructor)&&s.getDerivedStateFromError!=null&&(n.setState(s.getDerivedStateFromError(e)),r=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),r=n.__d),r)return n.__E=n}catch(a){e=a}throw e},__v:0},nt.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=ct({},this.state),typeof e=="function"&&(e=e(ct({},n),this.props)),e&&ct(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),_r(this))},nt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),_r(this))},nt.prototype.render=bt,_n=[],fc=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ds.__r=0,hc=0;var nn,Ae,ro,Vt=0,yr=[],ao=U.__b,oo=U.__r,lo=U.diffed,co=U.__c,io=U.unmount;function Dn(e,t){U.__h&&U.__h(Ae,e,Vt||t),Vt=0;var n=Ae.__H||(Ae.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function wc(e){return Vt=1,Oc(Sc,e)}function Oc(e,t,n){var s=Dn(nn++,2);return s.t=e,s.__c||(s.__=[n?n(t):Sc(void 0,t),function(r){var a=s.t(s.__[0],r);s.__[0]!==a&&(s.__=[a,s.__[1]],s.__c.setState({}))}],s.__c=Ae),s.__}function Ec(e,t){var n=Dn(nn++,3);!U.__s&&na(n.__H,t)&&(n.__=e,n.__H=t,Ae.__H.__h.push(n))}function uo(e,t){var n=Dn(nn++,4);!U.__s&&na(n.__H,t)&&(n.__=e,n.__H=t,Ae.__h.push(n))}function Ws(e,t){var n=Dn(nn++,7);return na(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Lf(){yr.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(ts),e.__H.__h.forEach(br),e.__H.__h=[]}catch(t){e.__H.__h=[],U.__e(t,e.__v)}}),yr=[]}U.__b=function(e){Ae=null,ao&&ao(e)},U.__r=function(e){oo&&oo(e),nn=0;var t=(Ae=e.__c).__H;t&&(t.__h.forEach(ts),t.__h.forEach(br),t.__h=[])},U.diffed=function(e){lo&&lo(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(yr.push(t)!==1&&ro===U.requestAnimationFrame||((ro=U.requestAnimationFrame)||function(n){var s,r=function(){clearTimeout(a),po&&cancelAnimationFrame(s),setTimeout(n)},a=setTimeout(r,100);po&&(s=requestAnimationFrame(r))})(Lf)),Ae=void 0},U.__c=function(e,t){t.some(function(n){try{n.__h.forEach(ts),n.__h=n.__h.filter(function(s){return!s.__||br(s)})}catch(s){t.some(function(r){r.__h&&(r.__h=[])}),t=[],U.__e(s,n.__v)}}),co&&co(e,t)},U.unmount=function(e){io&&io(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(ts)}catch(n){U.__e(n,t.__v)}};var po=typeof requestAnimationFrame=="function";function ts(e){var t=Ae;typeof e.__c=="function"&&e.__c(),Ae=t}function br(e){var t=Ae;e.__c=e.__(),Ae=t}function na(e,t){return!e||e.length!==t.length||t.some(function(n,s){return n!==e[s]})}function Sc(e,t){return typeof t=="function"?t(e):t}function Ic(e,t){for(var n in t)e[n]=t[n];return e}function jr(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var s in t)if(s!=="__source"&&e[s]!==t[s])return!0;return!1}function xr(e){this.props=e}(xr.prototype=new nt).isPureReactComponent=!0,xr.prototype.shouldComponentUpdate=function(e,t){return jr(this.props,e)||jr(this.state,t)};var fo=U.__b;U.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),fo&&fo(e)};var Hf=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.forward_ref")||3911,ho=function(e,t){return e==null?null:it(it(e).map(t))},Uf={map:ho,forEach:ho,count:function(e){return e?it(e).length:0},only:function(e){var t=it(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:it},Ff=U.__e;function ns(){this.__u=0,this.t=null,this.__b=null}function kc(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function pn(){this.u=null,this.o=null}U.__e=function(e,t,n){if(e.then){for(var s,r=t;r=r.__;)if((s=r.__c)&&s.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),s.__c(e,t)}Ff(e,t,n)},(ns.prototype=new nt).__c=function(e,t){var n=t.__c,s=this;s.t==null&&(s.t=[]),s.t.push(n);var r=kc(s.__v),a=!1,o=function(){a||(a=!0,n.componentWillUnmount=n.__c,r?r(c):c())};n.__c=n.componentWillUnmount,n.componentWillUnmount=function(){o(),n.__c&&n.__c()};var c=function(){if(!--s.__u){if(s.state.__e){var u=s.state.__e;s.__v.__k[0]=function p(f,g,b){return f&&(f.__v=null,f.__k=f.__k&&f.__k.map(function(y){return p(y,g,b)}),f.__c&&f.__c.__P===g&&(f.__e&&b.insertBefore(f.__e,f.__d),f.__c.__e=!0,f.__c.__P=b)),f}(u,u.__c.__P,u.__c.__O)}var i;for(s.setState({__e:s.__b=null});i=s.t.pop();)i.forceUpdate()}},l=t.__h===!0;s.__u++||l||s.setState({__e:s.__b=s.__v.__k[0]}),e.then(o,o)},ns.prototype.componentWillUnmount=function(){this.t=[]},ns.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),s=this.__v.__k[0].__c;this.__v.__k[0]=function a(o,c,l){return o&&(o.__c&&o.__c.__H&&(o.__c.__H.__.forEach(function(u){typeof u.__c=="function"&&u.__c()}),o.__c.__H=null),(o=Ic({},o)).__c!=null&&(o.__c.__P===l&&(o.__c.__P=c),o.__c=null),o.__k=o.__k&&o.__k.map(function(u){return a(u,c,l)})),o}(this.__b,n,s.__O=s.__P)}this.__b=null}var r=t.__e&&et(bt,null,e.fallback);return r&&(r.__h=null),[et(bt,null,t.__e?null:e.children),r]};var mo=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function $f(e){return this.getChildContext=function(){return e.context},e.children}function Bf(e){var t=this,n=e.i;t.componentWillUnmount=function(){An(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(s){this.childNodes.push(s),t.i.appendChild(s)},insertBefore:function(s,r){this.childNodes.push(s),t.i.appendChild(s)},removeChild:function(s){this.childNodes.splice(this.childNodes.indexOf(s)>>>1,1),t.i.removeChild(s)}}),An(et($f,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function Pc(e,t){return et(Bf,{__v:e,i:t})}(pn.prototype=new nt).__e=function(e){var t=this,n=kc(t.__v),s=t.o.get(e);return s[0]++,function(r){var a=function(){t.props.revealOrder?(s.push(r),mo(t,e,s)):r()};n?n(a):a()}},pn.prototype.render=function(e){this.u=null,this.o=new Map;var t=it(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},pn.prototype.componentDidUpdate=pn.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){mo(e,n,t)})};var Cc=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,zf=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Kf=function(e){return(typeof Symbol!="undefined"&&Pn(Symbol())=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};function Ac(e,t,n){return t.__k==null&&(t.textContent=""),An(e,t),typeof n=="function"&&n(),e?e.__c:null}nt.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(nt.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var go=U.event;function Vf(){}function Wf(){return this.cancelBubble}function Jf(){return this.defaultPrevented}U.event=function(e){return go&&(e=go(e)),e.persist=Vf,e.isPropagationStopped=Wf,e.isDefaultPrevented=Jf,e.nativeEvent=e};var qc,vo={configurable:!0,get:function(){return this.class}},_o=U.vnode;U.vnode=function(e){var t=e.type,n=e.props,s=n;if(typeof t=="string"){for(var r in s={},n){var a=n[r];r==="value"&&"defaultValue"in n&&a==null||(r==="defaultValue"&&"value"in n&&n.value==null?r="value":r==="download"&&a===!0?a="":/ondoubleclick/i.test(r)?r="ondblclick":/^onchange(textarea|input)/i.test(r+t)&&!Kf(n.type)?r="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(r)?r=r.toLowerCase():zf.test(r)?r=r.replace(/[A-Z0-9]/,"-$&").toLowerCase():a===null&&(a=void 0),s[r]=a)}t=="select"&&s.multiple&&Array.isArray(s.value)&&(s.value=it(n.children).forEach(function(o){o.props.selected=s.value.indexOf(o.props.value)!=-1})),t=="select"&&s.defaultValue!=null&&(s.value=it(n.children).forEach(function(o){o.props.selected=s.multiple?s.defaultValue.indexOf(o.props.value)!=-1:s.defaultValue==o.props.value})),e.props=s}t&&n.class!=n.className&&(vo.enumerable="className"in n,n.className!=null&&(s.class=n.className),Object.defineProperty(s,"className",vo)),e.$$typeof=Cc,_o&&_o(e)};var yo=U.__r;U.__r=function(e){yo&&yo(e),qc=e.__c};var Qf={ReactCurrentDispatcher:{current:{readContext:function(e){return qc.__n[e.__c].props.value}}}};(typeof performance=="undefined"?"undefined":Pn(performance))=="object"&&typeof performance.now=="function"&&performance.now.bind(performance);function bo(e){return!!e&&e.$$typeof===Cc}var m={useState:wc,useReducer:Oc,useEffect:Ec,useLayoutEffect:uo,useRef:function(e){return Vt=5,Ws(function(){return{current:e}},[])},useImperativeHandle:function(e,t,n){Vt=6,uo(function(){typeof e=="function"?e(t()):e&&(e.current=t())},n==null?n:n.concat(e))},useMemo:Ws,useCallback:function(e,t){return Vt=8,Ws(function(){return e},t)},useContext:function(e){var t=Ae.context[e.__c],n=Dn(nn++,9);return n.__c=e,t?(n.__==null&&(n.__=!0,t.sub(Ae)),t.props.value):e.__},useDebugValue:function(e,t){U.useDebugValue&&U.useDebugValue(t?t(e):e)},version:"16.8.0",Children:Uf,render:Ac,hydrate:function(e,t,n){return xc(e,t),typeof n=="function"&&n(),e?e.__c:null},unmountComponentAtNode:function(e){return!!e.__k&&(An(null,e),!0)},createPortal:Pc,createElement:et,createContext:function(e,t){var n={__c:t="__cC"+hc++,__:e,Consumer:function(s,r){return s.children(r)},Provider:function(s){var r,a;return this.getChildContext||(r=[],(a={})[t]=this,this.getChildContext=function(){return a},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&r.some(_r)},this.sub=function(o){r.push(o);var c=o.componentWillUnmount;o.componentWillUnmount=function(){r.splice(r.indexOf(o),1),c&&c.call(o)}}),s.children}};return n.Provider.__=n.Consumer.contextType=n},createFactory:function(e){return et.bind(null,e)},cloneElement:function(e){return bo(e)?Mf.apply(null,arguments):e},createRef:function(){return{current:null}},Fragment:bt,isValidElement:bo,findDOMNode:function(e){return e&&(e.base||e.nodeType===1&&e)||null},Component:nt,PureComponent:xr,memo:function(e,t){function n(r){var a=this.props.ref,o=a==r.ref;return!o&&a&&(a.call?a(null):a.current=null),t?!t(this.props,r)||!o:jr(this.props,r)}function s(r){return this.shouldComponentUpdate=n,et(e,r)}return s.displayName="Memo("+(e.displayName||e.name)+")",s.prototype.isReactComponent=!0,s.__f=!0,s},forwardRef:function(e){function t(n,s){var r=Ic({},n);return delete r.ref,e(r,(s=n.ref||s)&&(Pn(s)!="object"||"current"in s)?s:null)}return t.$$typeof=Hf,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t},unstable_batchedUpdates:function(e,t){return e(t)},StrictMode:bt,Suspense:ns,SuspenseList:pn,lazy:function(e){var t,n,s;function r(a){if(t||(t=e()).then(function(o){n=o.default||o},function(o){s=o}),s)throw s;if(!n)throw t;return et(n,a)}return r.displayName="Lazy",r.__f=!0,r},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Qf};function Gf(){return m.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},m.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}function Rc(){return m.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},m.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}var Zf=["translations"];function wr(){return wr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},wr.apply(this,arguments)}function Yf(e,t){return function(n){if(Array.isArray(n))return n}(e)||function(n,s){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var a,o,c=[],l=!0,u=!1;try{for(r=r.call(n);!(l=(a=r.next()).done)&&(c.push(a.value),!s||c.length!==s);l=!0);}catch(i){u=!0,o=i}finally{try{l||r.return==null||r.return()}finally{if(u)throw o}}return c}}(e,t)||function(n,s){if(!!n){if(typeof n=="string")return jo(n,s);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return jo(n,s)}}(e,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function jo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function Xf(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var eh=m.forwardRef(function(e,t){var n=e.translations,s=n===void 0?{}:n,r=Xf(e,Zf),a=s.buttonText,o=a===void 0?"Search":a,c=s.buttonAriaLabel,l=c===void 0?"Search":c,u=Yf(wc(null),2),i=u[0],p=u[1];return Ec(function(){typeof navigator!="undefined"&&(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?p("\u2318"):p("Ctrl"))},[]),m.createElement("button",wr({type:"button",className:"DocSearch DocSearch-Button","aria-label":l},r,{ref:t}),m.createElement("span",{className:"DocSearch-Button-Container"},m.createElement(Rc,null),m.createElement("span",{className:"DocSearch-Button-Placeholder"},o)),m.createElement("span",{className:"DocSearch-Button-Keys"},i!==null&&m.createElement(m.Fragment,null,m.createElement("kbd",{className:"DocSearch-Button-Key"},i==="Ctrl"?m.createElement(Gf,null):i),m.createElement("kbd",{className:"DocSearch-Button-Key"},"K"))))});function qn(e){return e.reduce(function(t,n){return t.concat(n)},[])}var th=0;function Or(e){return e.collections.length===0?0:e.collections.reduce(function(t,n){return t+n.items.length},0)}var Er=function(){},nh=[{segment:"autocomplete-core",version:"1.8.2"}];function ss(e,t){var n=t;return{then:function(s,r){return ss(e.then(Bn(s,n,e),Bn(r,n,e)),n)},catch:function(s){return ss(e.catch(Bn(s,n,e)),n)},finally:function(s){return s&&n.onCancelList.push(s),ss(e.finally(Bn(s&&function(){return n.onCancelList=[],s()},n,e)),n)},cancel:function(){n.isCanceled=!0;var s=n.onCancelList;n.onCancelList=[],s.forEach(function(r){r()})},isCanceled:function(){return n.isCanceled===!0}}}function xo(e){return ss(e,{isCanceled:!1,onCancelList:[]})}function Bn(e,t,n){return e?function(s){return t.isCanceled?s:e(s)}:n}function wo(e,t,n,s){if(!n)return null;if(e<0&&(t===null||s!==null&&t===0))return n+e;var r=(t===null?-1:t)+e;return r<=-1||r>=n?s===null?null:0:r}function Oo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function Eo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Oo(Object(n),!0).forEach(function(s){sh(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oo(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function sh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ut(e){var t=function(r){var a=r.collections.map(function(o){return o.items.length}).reduce(function(o,c,l){var u=(o[l-1]||0)+c;return o.push(u),o},[]).reduce(function(o,c){return c<=r.activeItemId?o+1:o},0);return r.collections[a]}(e);if(!t)return null;var n=t.items[function(r){for(var a=r.state,o=r.collection,c=!1,l=0,u=0;c===!1;){var i=a.collections[l];if(i===o){c=!0;break}u+=i.items.length,l++}return a.activeItemId-u}({state:e,collection:t})],s=t.source;return{item:n,itemInputValue:s.getItemInputValue({item:n,state:e}),itemUrl:s.getItemUrl({item:n,state:e}),source:s}}var rh=/((gt|sm)-|galaxy nexus)|samsung[- ]/i;function So(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function zn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?So(Object(n),!0).forEach(function(s){ah(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):So(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function ah(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Io(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function oh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lh(e,t,n){var s,r=t.initialState;return{getState:function(){return r},dispatch:function(a,o){var c=function(l){for(var u=1;u<arguments.length;u++){var i=arguments[u]!=null?arguments[u]:{};u%2?Io(Object(i),!0).forEach(function(p){oh(l,p,i[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(i)):Io(Object(i)).forEach(function(p){Object.defineProperty(l,p,Object.getOwnPropertyDescriptor(i,p))})}return l}({},r);r=e(r,{type:a,props:t,payload:o}),n({state:r,prevState:c})},pendingRequests:(s=[],{add:function(a){return s.push(a),a.finally(function(){s=s.filter(function(o){return o!==a})})},cancelAll:function(){s.forEach(function(a){return a.cancel()})},isEmpty:function(){return s.length===0}})}}function ko(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function Kn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ko(Object(n),!0).forEach(function(s){ch(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ko(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function ch(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ih(e){return function(t){if(Array.isArray(t))return Js(t)}(e)||function(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||function(t,n){if(!!t){if(typeof t=="string")return Js(t,n);var s=Object.prototype.toString.call(t).slice(8,-1);if(s==="Object"&&t.constructor&&(s=t.constructor.name),s==="Map"||s==="Set")return Array.from(t);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return Js(t,n)}}(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Js(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function Po(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function Tt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Po(Object(n),!0).forEach(function(s){uh(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Po(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function uh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ph(e,t){var n,s=typeof window!="undefined"?window:{},r=e.plugins||[];return Tt(Tt({debug:!1,openOnFocus:!1,placeholder:"",autoFocus:!1,defaultActiveItemId:null,stallThreshold:300,environment:s,shouldPanelOpen:function(a){return Or(a.state)>0},reshape:function(a){return a.sources}},e),{},{id:(n=e.id)!==null&&n!==void 0?n:"autocomplete-".concat(th++),plugins:r,initialState:Tt({activeItemId:null,query:"",completion:null,collections:[],isOpen:!1,status:"idle",context:{}},e.initialState),onStateChange:function(a){var o;(o=e.onStateChange)===null||o===void 0||o.call(e,a),r.forEach(function(c){var l;return(l=c.onStateChange)===null||l===void 0?void 0:l.call(c,a)})},onSubmit:function(a){var o;(o=e.onSubmit)===null||o===void 0||o.call(e,a),r.forEach(function(c){var l;return(l=c.onSubmit)===null||l===void 0?void 0:l.call(c,a)})},onReset:function(a){var o;(o=e.onReset)===null||o===void 0||o.call(e,a),r.forEach(function(c){var l;return(l=c.onReset)===null||l===void 0?void 0:l.call(c,a)})},getSources:function(a){return Promise.all([].concat(ih(r.map(function(o){return o.getSources})),[e.getSources]).filter(Boolean).map(function(o){return function(c,l){var u=[];return Promise.resolve(c(l)).then(function(i){return Promise.all(i.filter(function(p){return Boolean(p)}).map(function(p){if(p.sourceId,u.includes(p.sourceId))throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(p.sourceId)," is not unique."));u.push(p.sourceId);var f={getItemInputValue:function(b){return b.state.query},getItemUrl:function(){},onSelect:function(b){(0,b.setIsOpen)(!1)},onActive:Er,onResolve:Er};Object.keys(f).forEach(function(b){f[b].__default=!0});var g=Eo(Eo({},f),p);return Promise.resolve(g)}))})}(o,a)})).then(function(o){return qn(o)}).then(function(o){return o.map(function(c){return Tt(Tt({},c),{},{onSelect:function(l){c.onSelect(l),t.forEach(function(u){var i;return(i=u.onSelect)===null||i===void 0?void 0:i.call(u,l)})},onActive:function(l){c.onActive(l),t.forEach(function(u){var i;return(i=u.onActive)===null||i===void 0?void 0:i.call(u,l)})},onResolve:function(l){c.onResolve(l),t.forEach(function(u){var i;return(i=u.onResolve)===null||i===void 0?void 0:i.call(u,l)})}})})})},navigator:Tt({navigate:function(a){var o=a.itemUrl;s.location.assign(o)},navigateNewTab:function(a){var o=a.itemUrl,c=s.open(o,"_blank","noopener");c==null||c.focus()},navigateNewWindow:function(a){var o=a.itemUrl;s.open(o,"_blank","noopener")}},e.navigator)})}function Co(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function Vn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Co(Object(n),!0).forEach(function(s){Tc(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Co(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function Tc(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ao(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function Dt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ao(Object(n),!0).forEach(function(s){fh(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ao(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function fh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Dc(e){return function(t){if(Array.isArray(t))return Qs(t)}(e)||function(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||function(t,n){if(!!t){if(typeof t=="string")return Qs(t,n);var s=Object.prototype.toString.call(t).slice(8,-1);if(s==="Object"&&t.constructor&&(s=t.constructor.name),s==="Map"||s==="Set")return Array.from(t);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return Qs(t,n)}}(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Qs(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function Wn(e){return Boolean(e.execute)}function hh(e,t,n){if(r=e,Boolean(r==null?void 0:r.execute)){var s=e.requesterId==="algolia"?Object.assign.apply(Object,[{}].concat(Dc(Object.keys(n.context).map(function(a){var o;return(o=n.context[a])===null||o===void 0?void 0:o.__algoliaSearchParameters})))):{};return Dt(Dt({},e),{},{requests:e.queries.map(function(a){return{query:e.requesterId==="algolia"?Dt(Dt({},a),{},{params:Dt(Dt({},s),a.params)}):a,sourceId:t,transformResponse:e.transformResponse}})})}var r;return{items:e,sourceId:t}}function dh(e){var t=e.reduce(function(n,s){if(!Wn(s))return n.push(s),n;var r=s.searchClient,a=s.execute,o=s.requesterId,c=s.requests,l=n.find(function(p){return Wn(s)&&Wn(p)&&p.searchClient===r&&Boolean(o)&&p.requesterId===o});if(l){var u;(u=l.items).push.apply(u,Dc(c))}else{var i={execute:a,requesterId:o,items:c,searchClient:r};n.push(i)}return n},[]).map(function(n){if(!Wn(n))return Promise.resolve(n);var s=n,r=s.execute,a=s.items;return r({searchClient:s.searchClient,requests:a})});return Promise.all(t).then(function(n){return qn(n)})}function mh(e,t,n){return t.map(function(s){var r=e.filter(function(l){return l.sourceId===s.sourceId}),a=r.map(function(l){return l.items}),o=r[0].transformResponse,c=o?o(function(l){var u=l.map(function(i){var p;return zn(zn({},i),{},{hits:(p=i.hits)===null||p===void 0?void 0:p.map(function(f){return zn(zn({},f),{},{__autocomplete_indexName:i.index,__autocomplete_queryID:i.queryID})})})});return{results:u,hits:u.map(function(i){return i.hits}).filter(Boolean),facetHits:u.map(function(i){var p;return(p=i.facetHits)===null||p===void 0?void 0:p.map(function(f){return{label:f.value,count:f.count,_highlightResult:{label:{value:f.highlighted}}}})}).filter(Boolean)}}(a)):a;return s.onResolve({source:s,results:a,items:c,state:n.getState()}),c.every(Boolean),'The `getItems` function from source "'.concat(s.sourceId,'" must return an array of items but returned ').concat(JSON.stringify(void 0),`.

Did you forget to return items?

See: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems`),{source:s,items:c}})}var gh=["event","nextState","props","query","refresh","store"];function qo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function on(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qo(Object(n),!0).forEach(function(s){vh(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qo(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function vh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _h(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ro,Gs,Jn,ln=null,To=(Ro=-1,Gs=-1,Jn=void 0,function(e){var t=++Ro;return Promise.resolve(e).then(function(n){return Jn&&t<Gs?Jn:(Gs=t,Jn=n,n)})});function Lt(e){var t=e.event,n=e.nextState,s=n===void 0?{}:n,r=e.props,a=e.query,o=e.refresh,c=e.store,l=_h(e,gh);ln&&r.environment.clearTimeout(ln);var u=l.setCollections,i=l.setIsOpen,p=l.setQuery,f=l.setActiveItemId,g=l.setStatus;if(p(a),f(r.defaultActiveItemId),!a&&r.openOnFocus===!1){var b,y=c.getState().collections.map(function(O){return on(on({},O),{},{items:[]})});g("idle"),u(y),i((b=s.isOpen)!==null&&b!==void 0?b:r.shouldPanelOpen({state:c.getState()}));var w=xo(To(y).then(function(){return Promise.resolve()}));return c.pendingRequests.add(w)}g("loading"),ln=r.environment.setTimeout(function(){g("stalled")},r.stallThreshold);var S=xo(To(r.getSources(on({query:a,refresh:o,state:c.getState()},l)).then(function(O){return Promise.all(O.map(function(C){return Promise.resolve(C.getItems(on({query:a,refresh:o,state:c.getState()},l))).then(function(E){return hh(E,C.sourceId,c.getState())})})).then(dh).then(function(C){return mh(C,O,c)}).then(function(C){return function(E){var A=E.collections,F=E.props,Y=E.state,ue=A.reduce(function(Q,ie){return Vn(Vn({},Q),{},Tc({},ie.source.sourceId,Vn(Vn({},ie.source),{},{getItems:function(){return qn(ie.items)}})))},{}),ce=F.plugins.reduce(function(Q,ie){return ie.reshape?ie.reshape(Q):Q},{sourcesBySourceId:ue,state:Y}).sourcesBySourceId;return qn(F.reshape({sourcesBySourceId:ce,sources:Object.values(ce),state:Y})).filter(Boolean).map(function(Q){return{source:Q,items:Q.getItems()}})}({collections:C,props:r,state:c.getState()})})}))).then(function(O){var C;g("idle"),u(O);var E=r.shouldPanelOpen({state:c.getState()});i((C=s.isOpen)!==null&&C!==void 0?C:r.openOnFocus&&!a&&E||E);var A=Ut(c.getState());if(c.getState().activeItemId!==null&&A){var F=A.item,Y=A.itemInputValue,ue=A.itemUrl,ce=A.source;ce.onActive(on({event:t,item:F,itemInputValue:Y,itemUrl:ue,refresh:o,source:ce,state:c.getState()},l))}}).finally(function(){g("idle"),ln&&r.environment.clearTimeout(ln)});return c.pendingRequests.add(S)}var yh=["event","props","refresh","store"];function Do(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function Ot(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Do(Object(n),!0).forEach(function(s){bh(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Do(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function bh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jh(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var xh=["props","refresh","store"],wh=["inputElement","formElement","panelElement"],Oh=["inputElement"],Eh=["inputElement","maxLength"],Sh=["sourceIndex"],Ih=["sourceIndex"],kh=["item","source","sourceIndex"];function No(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?No(Object(n),!0).forEach(function(s){Ph(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):No(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function Ph(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Et(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Ch(e){var t=e.props,n=e.refresh,s=e.store,r=Et(e,xh),a=function(o,c){return c!==void 0?"".concat(o,"-").concat(c):o};return{getEnvironmentProps:function(o){var c=o.inputElement,l=o.formElement,u=o.panelElement;function i(p){!s.getState().isOpen&&s.pendingRequests.isEmpty()||p.target===c||[l,u].some(function(f){return g=f,b=p.target,g===b||g.contains(b);var g,b})===!1&&(s.dispatch("blur",null),t.debug||s.pendingRequests.cancelAll())}return Oe({onTouchStart:i,onMouseDown:i,onTouchMove:function(p){s.getState().isOpen!==!1&&c===t.environment.document.activeElement&&p.target!==c&&c.blur()}},Et(o,wh))},getRootProps:function(o){return Oe({role:"combobox","aria-expanded":s.getState().isOpen,"aria-haspopup":"listbox","aria-owns":s.getState().isOpen?"".concat(t.id,"-list"):void 0,"aria-labelledby":"".concat(t.id,"-label")},o)},getFormProps:function(o){return o.inputElement,Oe({action:"",noValidate:!0,role:"search",onSubmit:function(c){var l;c.preventDefault(),t.onSubmit(Oe({event:c,refresh:n,state:s.getState()},r)),s.dispatch("submit",null),(l=o.inputElement)===null||l===void 0||l.blur()},onReset:function(c){var l;c.preventDefault(),t.onReset(Oe({event:c,refresh:n,state:s.getState()},r)),s.dispatch("reset",null),(l=o.inputElement)===null||l===void 0||l.focus()}},Et(o,Oh))},getLabelProps:function(o){var c=o||{},l=c.sourceIndex,u=Et(c,Sh);return Oe({htmlFor:"".concat(a(t.id,l),"-input"),id:"".concat(a(t.id,l),"-label")},u)},getInputProps:function(o){var c;function l(w){(t.openOnFocus||Boolean(s.getState().query))&&Lt(Oe({event:w,props:t,query:s.getState().completion||s.getState().query,refresh:n,store:s},r)),s.dispatch("focus",null)}var u=o||{},i=(u.inputElement,u.maxLength),p=i===void 0?512:i,f=Et(u,Eh),g=Ut(s.getState()),b=function(w){return Boolean(w&&w.match(rh))}(((c=t.environment.navigator)===null||c===void 0?void 0:c.userAgent)||""),y=g!=null&&g.itemUrl&&!b?"go":"search";return Oe({"aria-autocomplete":"both","aria-activedescendant":s.getState().isOpen&&s.getState().activeItemId!==null?"".concat(t.id,"-item-").concat(s.getState().activeItemId):void 0,"aria-controls":s.getState().isOpen?"".concat(t.id,"-list"):void 0,"aria-labelledby":"".concat(t.id,"-label"),value:s.getState().completion||s.getState().query,id:"".concat(t.id,"-input"),autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",enterKeyHint:y,spellCheck:"false",autoFocus:t.autoFocus,placeholder:t.placeholder,maxLength:p,type:"search",onChange:function(w){Lt(Oe({event:w,props:t,query:w.currentTarget.value.slice(0,p),refresh:n,store:s},r))},onKeyDown:function(w){(function(S){var O=S.event,C=S.props,E=S.refresh,A=S.store,F=jh(S,yh);if(O.key==="ArrowUp"||O.key==="ArrowDown"){var Y=function(){var ve=C.environment.document.getElementById("".concat(C.id,"-item-").concat(A.getState().activeItemId));ve&&(ve.scrollIntoViewIfNeeded?ve.scrollIntoViewIfNeeded(!1):ve.scrollIntoView(!1))},ue=function(){var ve=Ut(A.getState());if(A.getState().activeItemId!==null&&ve){var He=ve.item,le=ve.itemInputValue,te=ve.itemUrl,W=ve.source;W.onActive(Ot({event:O,item:He,itemInputValue:le,itemUrl:te,refresh:E,source:W,state:A.getState()},F))}};O.preventDefault(),A.getState().isOpen===!1&&(C.openOnFocus||Boolean(A.getState().query))?Lt(Ot({event:O,props:C,query:A.getState().query,refresh:E,store:A},F)).then(function(){A.dispatch(O.key,{nextActiveItemId:C.defaultActiveItemId}),ue(),setTimeout(Y,0)}):(A.dispatch(O.key,{}),ue(),Y())}else if(O.key==="Escape")O.preventDefault(),A.dispatch(O.key,null),A.pendingRequests.cancelAll();else if(O.key==="Tab")A.dispatch("blur",null),A.pendingRequests.cancelAll();else if(O.key==="Enter"){if(A.getState().activeItemId===null||A.getState().collections.every(function(ve){return ve.items.length===0}))return void(C.debug||A.pendingRequests.cancelAll());O.preventDefault();var ce=Ut(A.getState()),Q=ce.item,ie=ce.itemInputValue,ge=ce.itemUrl,he=ce.source;if(O.metaKey||O.ctrlKey)ge!==void 0&&(he.onSelect(Ot({event:O,item:Q,itemInputValue:ie,itemUrl:ge,refresh:E,source:he,state:A.getState()},F)),C.navigator.navigateNewTab({itemUrl:ge,item:Q,state:A.getState()}));else if(O.shiftKey)ge!==void 0&&(he.onSelect(Ot({event:O,item:Q,itemInputValue:ie,itemUrl:ge,refresh:E,source:he,state:A.getState()},F)),C.navigator.navigateNewWindow({itemUrl:ge,item:Q,state:A.getState()}));else if(!O.altKey){if(ge!==void 0)return he.onSelect(Ot({event:O,item:Q,itemInputValue:ie,itemUrl:ge,refresh:E,source:he,state:A.getState()},F)),void C.navigator.navigate({itemUrl:ge,item:Q,state:A.getState()});Lt(Ot({event:O,nextState:{isOpen:!1},props:C,query:ie,refresh:E,store:A},F)).then(function(){he.onSelect(Ot({event:O,item:Q,itemInputValue:ie,itemUrl:ge,refresh:E,source:he,state:A.getState()},F))})}}})(Oe({event:w,props:t,refresh:n,store:s},r))},onFocus:l,onBlur:Er,onClick:function(w){o.inputElement!==t.environment.document.activeElement||s.getState().isOpen||l(w)}},f)},getPanelProps:function(o){return Oe({onMouseDown:function(c){c.preventDefault()},onMouseLeave:function(){s.dispatch("mouseleave",null)}},o)},getListProps:function(o){var c=o||{},l=c.sourceIndex,u=Et(c,Ih);return Oe({role:"listbox","aria-labelledby":"".concat(a(t.id,l),"-label"),id:"".concat(a(t.id,l),"-list")},u)},getItemProps:function(o){var c=o.item,l=o.source,u=o.sourceIndex,i=Et(o,kh);return Oe({id:"".concat(a(t.id,u),"-item-").concat(c.__autocomplete_id),role:"option","aria-selected":s.getState().activeItemId===c.__autocomplete_id,onMouseMove:function(p){if(c.__autocomplete_id!==s.getState().activeItemId){s.dispatch("mousemove",c.__autocomplete_id);var f=Ut(s.getState());if(s.getState().activeItemId!==null&&f){var g=f.item,b=f.itemInputValue,y=f.itemUrl,w=f.source;w.onActive(Oe({event:p,item:g,itemInputValue:b,itemUrl:y,refresh:n,source:w,state:s.getState()},r))}}},onMouseDown:function(p){p.preventDefault()},onClick:function(p){var f=l.getItemInputValue({item:c,state:s.getState()}),g=l.getItemUrl({item:c,state:s.getState()});(g?Promise.resolve():Lt(Oe({event:p,nextState:{isOpen:!1},props:t,query:f,refresh:n,store:s},r))).then(function(){l.onSelect(Oe({event:p,item:c,itemInputValue:f,itemUrl:g,refresh:n,source:l,state:s.getState()},r))})}},i)}}}function Mo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function Ah(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mo(Object(n),!0).forEach(function(s){Nc(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mo(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function Nc(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qh(e){var t,n,s,r,a=e.plugins,o=e.options,c=(t=(((n=o.__autocomplete_metadata)===null||n===void 0?void 0:n.userAgents)||[])[0])===null||t===void 0?void 0:t.segment,l=c?Nc({},c,Object.keys(((s=o.__autocomplete_metadata)===null||s===void 0?void 0:s.options)||{})):{};return{plugins:a.map(function(u){return{name:u.name,options:Object.keys(u.__autocomplete_pluginOptions||[])}}),options:Ah({"autocomplete-core":Object.keys(o)},l),ua:nh.concat(((r=o.__autocomplete_metadata)===null||r===void 0?void 0:r.userAgents)||[])}}function Lo(e){var t,n=e.state;return n.isOpen===!1||n.activeItemId===null?null:((t=Ut(n))===null||t===void 0?void 0:t.itemInputValue)||null}function Ho(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ho(Object(n),!0).forEach(function(s){Rh(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ho(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function Rh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Th=function(e,t){switch(t.type){case"setActiveItemId":case"mousemove":return J(J({},e),{},{activeItemId:t.payload});case"setQuery":return J(J({},e),{},{query:t.payload,completion:null});case"setCollections":return J(J({},e),{},{collections:t.payload});case"setIsOpen":return J(J({},e),{},{isOpen:t.payload});case"setStatus":return J(J({},e),{},{status:t.payload});case"setContext":return J(J({},e),{},{context:J(J({},e.context),t.payload)});case"ArrowDown":var n=J(J({},e),{},{activeItemId:t.payload.hasOwnProperty("nextActiveItemId")?t.payload.nextActiveItemId:wo(1,e.activeItemId,Or(e),t.props.defaultActiveItemId)});return J(J({},n),{},{completion:Lo({state:n})});case"ArrowUp":var s=J(J({},e),{},{activeItemId:wo(-1,e.activeItemId,Or(e),t.props.defaultActiveItemId)});return J(J({},s),{},{completion:Lo({state:s})});case"Escape":return e.isOpen?J(J({},e),{},{activeItemId:null,isOpen:!1,completion:null}):J(J({},e),{},{activeItemId:null,query:"",status:"idle",collections:[]});case"submit":return J(J({},e),{},{activeItemId:null,isOpen:!1,status:"idle"});case"reset":return J(J({},e),{},{activeItemId:t.props.openOnFocus===!0?t.props.defaultActiveItemId:null,status:"idle",query:""});case"focus":return J(J({},e),{},{activeItemId:t.props.defaultActiveItemId,isOpen:(t.props.openOnFocus||Boolean(e.query))&&t.props.shouldPanelOpen({state:e})});case"blur":return t.props.debug?e:J(J({},e),{},{isOpen:!1,activeItemId:null});case"mouseleave":return J(J({},e),{},{activeItemId:t.props.defaultActiveItemId});default:return"The reducer action ".concat(JSON.stringify(t.type)," is not supported."),e}};function Uo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function St(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Uo(Object(n),!0).forEach(function(s){Dh(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Uo(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function Dh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Nh(e){var t=[],n=ph(e,t),s=lh(Th,n,function(c){var l=c.prevState,u=c.state;n.onStateChange(St({prevState:l,state:u,refresh:o,navigator:n.navigator},r))}),r=function(c){var l=c.store;return{setActiveItemId:function(u){l.dispatch("setActiveItemId",u)},setQuery:function(u){l.dispatch("setQuery",u)},setCollections:function(u){var i=0,p=u.map(function(f){return Kn(Kn({},f),{},{items:qn(f.items).map(function(g){return Kn(Kn({},g),{},{__autocomplete_id:i++})})})});l.dispatch("setCollections",p)},setIsOpen:function(u){l.dispatch("setIsOpen",u)},setStatus:function(u){l.dispatch("setStatus",u)},setContext:function(u){l.dispatch("setContext",u)}}}({store:s}),a=Ch(St({props:n,refresh:o,store:s,navigator:n.navigator},r));function o(){return Lt(St({event:new Event("input"),nextState:{isOpen:s.getState().isOpen},props:n,navigator:n.navigator,query:s.getState().query,refresh:o,store:s},r))}return n.plugins.forEach(function(c){var l;return(l=c.subscribe)===null||l===void 0?void 0:l.call(c,St(St({},r),{},{navigator:n.navigator,refresh:o,onSelect:function(u){t.push({onSelect:u})},onActive:function(u){t.push({onActive:u})},onResolve:function(u){t.push({onResolve:u})}}))}),function(c){var l,u,i=c.metadata,p=c.environment;if(!((l=p.navigator)===null||l===void 0||(u=l.userAgent)===null||u===void 0)&&u.includes("Algolia Crawler")){var f=p.document.createElement("meta"),g=p.document.querySelector("head");f.name="algolia:metadata",setTimeout(function(){f.content=JSON.stringify(i),g.appendChild(f)},0)}}({metadata:qh({plugins:n.plugins,options:e}),environment:n.environment}),St(St({refresh:o,navigator:n.navigator},a),r)}function Mh(e){var t=e.translations,n=(t===void 0?{}:t).searchByText,s=n===void 0?"Search by":n;return m.createElement("a",{href:"https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname,"&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"),target:"_blank",rel:"noopener noreferrer"},m.createElement("span",{className:"DocSearch-Label"},s),m.createElement("svg",{width:"77",height:"19","aria-label":"Algolia",role:"img",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2196.2 500"},m.createElement("defs",null,m.createElement("style",null,".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")),m.createElement("path",{className:"cls-2",d:"M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z"}),m.createElement("rect",{className:"cls-1",x:"1845.88",y:"104.73",width:"62.58",height:"277.9",rx:"5.9",ry:"5.9"}),m.createElement("path",{className:"cls-2",d:"M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z"}),m.createElement("path",{className:"cls-2",d:"M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z"}),m.createElement("path",{className:"cls-2",d:"M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z"}),m.createElement("path",{className:"cls-2",d:"M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z"}),m.createElement("path",{className:"cls-2",d:"M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z"}),m.createElement("path",{className:"cls-2",d:"M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z"}),m.createElement("path",{className:"cls-1",d:"M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z"})))}function Qn(e){return m.createElement("svg",{width:"15",height:"15","aria-label":e.ariaLabel,role:"img"},m.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.2"},e.children))}function Lh(e){var t=e.translations,n=t===void 0?{}:t,s=n.selectText,r=s===void 0?"to select":s,a=n.selectKeyAriaLabel,o=a===void 0?"Enter key":a,c=n.navigateText,l=c===void 0?"to navigate":c,u=n.navigateUpKeyAriaLabel,i=u===void 0?"Arrow up":u,p=n.navigateDownKeyAriaLabel,f=p===void 0?"Arrow down":p,g=n.closeText,b=g===void 0?"to close":g,y=n.closeKeyAriaLabel,w=y===void 0?"Escape key":y,S=n.searchByText,O=S===void 0?"Search by":S;return m.createElement(m.Fragment,null,m.createElement("div",{className:"DocSearch-Logo"},m.createElement(Mh,{translations:{searchByText:O}})),m.createElement("ul",{className:"DocSearch-Commands"},m.createElement("li",null,m.createElement("kbd",{className:"DocSearch-Commands-Key"},m.createElement(Qn,{ariaLabel:o},m.createElement("path",{d:"M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"}))),m.createElement("span",{className:"DocSearch-Label"},r)),m.createElement("li",null,m.createElement("kbd",{className:"DocSearch-Commands-Key"},m.createElement(Qn,{ariaLabel:f},m.createElement("path",{d:"M7.5 3.5v8M10.5 8.5l-3 3-3-3"}))),m.createElement("kbd",{className:"DocSearch-Commands-Key"},m.createElement(Qn,{ariaLabel:i},m.createElement("path",{d:"M7.5 11.5v-8M10.5 6.5l-3-3-3 3"}))),m.createElement("span",{className:"DocSearch-Label"},l)),m.createElement("li",null,m.createElement("kbd",{className:"DocSearch-Commands-Key"},m.createElement(Qn,{ariaLabel:w},m.createElement("path",{d:"M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"}))),m.createElement("span",{className:"DocSearch-Label"},b))))}function Hh(e){var t=e.hit,n=e.children;return m.createElement("a",{href:t.url},n)}function Uh(){return m.createElement("svg",{viewBox:"0 0 38 38",stroke:"currentColor",strokeOpacity:".5"},m.createElement("g",{fill:"none",fillRule:"evenodd"},m.createElement("g",{transform:"translate(1 1)",strokeWidth:"2"},m.createElement("circle",{strokeOpacity:".3",cx:"18",cy:"18",r:"18"}),m.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},m.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})))))}function Fh(){return m.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},m.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},m.createElement("path",{d:"M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0"}),m.createElement("path",{d:"M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13"})))}function Sr(){return m.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},m.createElement("path",{d:"M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}function $h(){return m.createElement("svg",{className:"DocSearch-Hit-Select-Icon",width:"20",height:"20",viewBox:"0 0 20 20"},m.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},m.createElement("path",{d:"M18 3v4c0 2-2 4-4 4H2"}),m.createElement("path",{d:"M8 17l-6-6 6-6"})))}var Bh=function(){return m.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},m.createElement("path",{d:"M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))};function zh(e){switch(e.type){case"lvl1":return m.createElement(Bh,null);case"content":return m.createElement(Vh,null);default:return m.createElement(Kh,null)}}function Kh(){return m.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},m.createElement("path",{d:"M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}function Vh(){return m.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},m.createElement("path",{d:"M17 5H3h14zm0 5H3h14zm0 5H3h14z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))}function Fo(){return m.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},m.createElement("path",{d:"M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))}function Wh(){return m.createElement("svg",{width:"40",height:"40",viewBox:"0 0 20 20",fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},m.createElement("path",{d:"M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0"}))}function Jh(){return m.createElement("svg",{width:"40",height:"40",viewBox:"0 0 20 20",fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},m.createElement("path",{d:"M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"}))}function Qh(e){var t=e.translations,n=t===void 0?{}:t,s=n.titleText,r=s===void 0?"Unable to fetch results":s,a=n.helpText,o=a===void 0?"You might want to check your network connection.":a;return m.createElement("div",{className:"DocSearch-ErrorScreen"},m.createElement("div",{className:"DocSearch-Screen-Icon"},m.createElement(Wh,null)),m.createElement("p",{className:"DocSearch-Title"},r),m.createElement("p",{className:"DocSearch-Help"},o))}var Gh=["translations"];function Zh(e){return function(t){if(Array.isArray(t))return Zs(t)}(e)||function(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||function(t,n){if(!!t){if(typeof t=="string")return Zs(t,n);var s=Object.prototype.toString.call(t).slice(8,-1);if(s==="Object"&&t.constructor&&(s=t.constructor.name),s==="Map"||s==="Set")return Array.from(t);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return Zs(t,n)}}(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Zs(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function Yh(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Xh(e){var t=e.translations,n=t===void 0?{}:t,s=Yh(e,Gh),r=n.noResultsText,a=r===void 0?"No results for":r,o=n.suggestedQueryText,c=o===void 0?"Try searching for":o,l=n.reportMissingResultsText,u=l===void 0?"Believe this query should return results?":l,i=n.reportMissingResultsLinkText,p=i===void 0?"Let us know.":i,f=s.state.context.searchSuggestions;return m.createElement("div",{className:"DocSearch-NoResults"},m.createElement("div",{className:"DocSearch-Screen-Icon"},m.createElement(Jh,null)),m.createElement("p",{className:"DocSearch-Title"},a,' "',m.createElement("strong",null,s.state.query),'"'),f&&f.length>0&&m.createElement("div",{className:"DocSearch-NoResults-Prefill-List"},m.createElement("p",{className:"DocSearch-Help"},c,":"),m.createElement("ul",null,f.slice(0,3).reduce(function(g,b){return[].concat(Zh(g),[m.createElement("li",{key:b},m.createElement("button",{className:"DocSearch-Prefill",key:b,type:"button",onClick:function(){s.setQuery(b.toLowerCase()+" "),s.refresh(),s.inputRef.current.focus()}},b))])},[]))),s.getMissingResultsUrl&&m.createElement("p",{className:"DocSearch-Help"},"".concat(u," "),m.createElement("a",{href:s.getMissingResultsUrl({query:s.state.query}),target:"_blank",rel:"noopener noreferrer"},p)))}var ed=["hit","attribute","tagName"];function $o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function Bo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$o(Object(n),!0).forEach(function(s){td(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$o(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function td(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nd(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function zo(e,t){return t.split(".").reduce(function(n,s){return n!=null&&n[s]?n[s]:null},e)}function Nt(e){var t=e.hit,n=e.attribute,s=e.tagName;return et(s===void 0?"span":s,Bo(Bo({},nd(e,ed)),{},{dangerouslySetInnerHTML:{__html:zo(t,"_snippetResult.".concat(n,".value"))||zo(t,n)}}))}function Ko(e,t){return function(n){if(Array.isArray(n))return n}(e)||function(n,s){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var a,o,c=[],l=!0,u=!1;try{for(r=r.call(n);!(l=(a=r.next()).done)&&(c.push(a.value),!s||c.length!==s);l=!0);}catch(i){u=!0,o=i}finally{try{l||r.return==null||r.return()}finally{if(u)throw o}}return c}}(e,t)||function(n,s){if(!!n){if(typeof n=="string")return Vo(n,s);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Vo(n,s)}}(e,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Vo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function ms(){return ms=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ms.apply(this,arguments)}function Ir(e){return e.collection&&e.collection.items.length!==0?m.createElement("section",{className:"DocSearch-Hits"},m.createElement("div",{className:"DocSearch-Hit-source"},e.title),m.createElement("ul",e.getListProps(),e.collection.items.map(function(t,n){return m.createElement(sd,ms({key:[e.title,t.objectID].join(":"),item:t,index:n},e))}))):null}function sd(e){var t=e.item,n=e.index,s=e.renderIcon,r=e.renderAction,a=e.getItemProps,o=e.onItemClick,c=e.collection,l=e.hitComponent,u=Ko(m.useState(!1),2),i=u[0],p=u[1],f=Ko(m.useState(!1),2),g=f[0],b=f[1],y=m.useRef(null),w=l;return m.createElement("li",ms({className:["DocSearch-Hit",t.__docsearch_parent&&"DocSearch-Hit--Child",i&&"DocSearch-Hit--deleting",g&&"DocSearch-Hit--favoriting"].filter(Boolean).join(" "),onTransitionEnd:function(){y.current&&y.current()}},a({item:t,source:c.source,onClick:function(S){o(t,S)}})),m.createElement(w,{hit:t},m.createElement("div",{className:"DocSearch-Hit-Container"},s({item:t,index:n}),t.hierarchy[t.type]&&t.type==="lvl1"&&m.createElement("div",{className:"DocSearch-Hit-content-wrapper"},m.createElement(Nt,{className:"DocSearch-Hit-title",hit:t,attribute:"hierarchy.lvl1"}),t.content&&m.createElement(Nt,{className:"DocSearch-Hit-path",hit:t,attribute:"content"})),t.hierarchy[t.type]&&(t.type==="lvl2"||t.type==="lvl3"||t.type==="lvl4"||t.type==="lvl5"||t.type==="lvl6")&&m.createElement("div",{className:"DocSearch-Hit-content-wrapper"},m.createElement(Nt,{className:"DocSearch-Hit-title",hit:t,attribute:"hierarchy.".concat(t.type)}),m.createElement(Nt,{className:"DocSearch-Hit-path",hit:t,attribute:"hierarchy.lvl1"})),t.type==="content"&&m.createElement("div",{className:"DocSearch-Hit-content-wrapper"},m.createElement(Nt,{className:"DocSearch-Hit-title",hit:t,attribute:"content"}),m.createElement(Nt,{className:"DocSearch-Hit-path",hit:t,attribute:"hierarchy.lvl1"})),r({item:t,runDeleteTransition:function(S){p(!0),y.current=S},runFavoriteTransition:function(S){b(!0),y.current=S}}))))}function Wo(e,t,n){return e.reduce(function(s,r){var a=t(r);return s.hasOwnProperty(a)||(s[a]=[]),s[a].length<(n||5)&&s[a].push(r),s},{})}function Jo(e){return e}function Gn(e){return e.button===1||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey}function rd(){}var Mc=/(<mark>|<\/mark>)/g,ad=RegExp(Mc.source);function Lc(e){var t,n,s,r,a,o=e;if(!o.__docsearch_parent&&!e._highlightResult)return e.hierarchy.lvl0;var c=((o.__docsearch_parent?(t=o.__docsearch_parent)===null||t===void 0||(n=t._highlightResult)===null||n===void 0||(s=n.hierarchy)===null||s===void 0?void 0:s.lvl0:(r=e._highlightResult)===null||r===void 0||(a=r.hierarchy)===null||a===void 0?void 0:a.lvl0)||{}).value;return c&&ad.test(c)?c.replace(Mc,""):c}function kr(){return kr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},kr.apply(this,arguments)}function od(e){return m.createElement("div",{className:"DocSearch-Dropdown-Container"},e.state.collections.map(function(t){if(t.items.length===0)return null;var n=Lc(t.items[0]);return m.createElement(Ir,kr({},e,{key:t.source.sourceId,title:n,collection:t,renderIcon:function(s){var r,a=s.item,o=s.index;return m.createElement(m.Fragment,null,a.__docsearch_parent&&m.createElement("svg",{className:"DocSearch-Hit-Tree",viewBox:"0 0 24 54"},m.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},a.__docsearch_parent!==((r=t.items[o+1])===null||r===void 0?void 0:r.__docsearch_parent)?m.createElement("path",{d:"M8 6v21M20 27H8.3"}):m.createElement("path",{d:"M8 6v42M20 27H8.3"}))),m.createElement("div",{className:"DocSearch-Hit-icon"},m.createElement(zh,{type:a.type})))},renderAction:function(){return m.createElement("div",{className:"DocSearch-Hit-action"},m.createElement($h,null))}}))}),e.resultsFooterComponent&&m.createElement("section",{className:"DocSearch-HitsFooter"},m.createElement(e.resultsFooterComponent,{state:e.state})))}var ld=["translations"];function gs(){return gs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},gs.apply(this,arguments)}function cd(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function id(e){var t=e.translations,n=t===void 0?{}:t,s=cd(e,ld),r=n.recentSearchesTitle,a=r===void 0?"Recent":r,o=n.noRecentSearchesText,c=o===void 0?"No recent searches":o,l=n.saveRecentSearchButtonTitle,u=l===void 0?"Save this search":l,i=n.removeRecentSearchButtonTitle,p=i===void 0?"Remove this search from history":i,f=n.favoriteSearchesTitle,g=f===void 0?"Favorite":f,b=n.removeFavoriteSearchButtonTitle,y=b===void 0?"Remove this search from favorites":b;return s.state.status==="idle"&&s.hasCollections===!1?s.disableUserPersonalization?null:m.createElement("div",{className:"DocSearch-StartScreen"},m.createElement("p",{className:"DocSearch-Help"},c)):s.hasCollections===!1?null:m.createElement("div",{className:"DocSearch-Dropdown-Container"},m.createElement(Ir,gs({},s,{title:a,collection:s.state.collections[0],renderIcon:function(){return m.createElement("div",{className:"DocSearch-Hit-icon"},m.createElement(Fh,null))},renderAction:function(w){var S=w.item,O=w.runFavoriteTransition,C=w.runDeleteTransition;return m.createElement(m.Fragment,null,m.createElement("div",{className:"DocSearch-Hit-action"},m.createElement("button",{className:"DocSearch-Hit-action-button",title:u,type:"submit",onClick:function(E){E.preventDefault(),E.stopPropagation(),O(function(){s.favoriteSearches.add(S),s.recentSearches.remove(S),s.refresh()})}},m.createElement(Fo,null))),m.createElement("div",{className:"DocSearch-Hit-action"},m.createElement("button",{className:"DocSearch-Hit-action-button",title:p,type:"submit",onClick:function(E){E.preventDefault(),E.stopPropagation(),C(function(){s.recentSearches.remove(S),s.refresh()})}},m.createElement(Sr,null))))}})),m.createElement(Ir,gs({},s,{title:g,collection:s.state.collections[1],renderIcon:function(){return m.createElement("div",{className:"DocSearch-Hit-icon"},m.createElement(Fo,null))},renderAction:function(w){var S=w.item,O=w.runDeleteTransition;return m.createElement("div",{className:"DocSearch-Hit-action"},m.createElement("button",{className:"DocSearch-Hit-action-button",title:y,type:"submit",onClick:function(C){C.preventDefault(),C.stopPropagation(),O(function(){s.favoriteSearches.remove(S),s.refresh()})}},m.createElement(Sr,null)))}})))}var ud=["translations"];function vs(){return vs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},vs.apply(this,arguments)}function pd(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var fd=m.memo(function(e){var t=e.translations,n=t===void 0?{}:t,s=pd(e,ud);if(s.state.status==="error")return m.createElement(Qh,{translations:n==null?void 0:n.errorScreen});var r=s.state.collections.some(function(a){return a.items.length>0});return s.state.query?r===!1?m.createElement(Xh,vs({},s,{translations:n==null?void 0:n.noResultsScreen})):m.createElement(od,s):m.createElement(id,vs({},s,{hasCollections:r,translations:n==null?void 0:n.startScreen}))},function(e,t){return t.state.status==="loading"||t.state.status==="stalled"}),hd=["translations"];function _s(){return _s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},_s.apply(this,arguments)}function dd(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function md(e){var t=e.translations,n=t===void 0?{}:t,s=dd(e,hd),r=n.resetButtonTitle,a=r===void 0?"Clear the query":r,o=n.resetButtonAriaLabel,c=o===void 0?"Clear the query":o,l=n.cancelButtonText,u=l===void 0?"Cancel":l,i=n.cancelButtonAriaLabel,p=i===void 0?"Cancel":i,f=s.getFormProps({inputElement:s.inputRef.current}).onReset;return m.useEffect(function(){s.autoFocus&&s.inputRef.current&&s.inputRef.current.focus()},[s.autoFocus,s.inputRef]),m.useEffect(function(){s.isFromSelection&&s.inputRef.current&&s.inputRef.current.select()},[s.isFromSelection,s.inputRef]),m.createElement(m.Fragment,null,m.createElement("form",{className:"DocSearch-Form",onSubmit:function(g){g.preventDefault()},onReset:f},m.createElement("label",_s({className:"DocSearch-MagnifierLabel"},s.getLabelProps()),m.createElement(Rc,null)),m.createElement("div",{className:"DocSearch-LoadingIndicator"},m.createElement(Uh,null)),m.createElement("input",_s({className:"DocSearch-Input",ref:s.inputRef},s.getInputProps({inputElement:s.inputRef.current,autoFocus:s.autoFocus,maxLength:64}))),m.createElement("button",{type:"reset",title:a,className:"DocSearch-Reset","aria-label":c,hidden:!s.state.query},m.createElement(Sr,null))),m.createElement("button",{className:"DocSearch-Cancel",type:"reset","aria-label":p,onClick:s.onClose},u))}var gd=["_highlightResult","_snippetResult"];function vd(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function _d(e){return function(){var t="__TEST_KEY__";try{return localStorage.setItem(t,""),localStorage.removeItem(t),!0}catch{return!1}}()===!1?{setItem:function(){},getItem:function(){return[]}}:{setItem:function(t){return window.localStorage.setItem(e,JSON.stringify(t))},getItem:function(){var t=window.localStorage.getItem(e);return t?JSON.parse(t):[]}}}function Qo(e){var t=e.key,n=e.limit,s=n===void 0?5:n,r=_d(t),a=r.getItem().slice(0,s);return{add:function(o){var c=o,l=(c._highlightResult,c._snippetResult,vd(c,gd)),u=a.findIndex(function(i){return i.objectID===l.objectID});u>-1&&a.splice(u,1),a.unshift(l),a=a.slice(0,s),r.setItem(a)},remove:function(o){a=a.filter(function(c){return c.objectID!==o.objectID}),r.setItem(a)},getAll:function(){return a}}}var yd=["facetName","facetQuery"];function bd(e){var t,n="algoliasearch-client-js-".concat(e.key),s=function(){return t===void 0&&(t=e.localStorage||window.localStorage),t},r=function(){return JSON.parse(s().getItem(n)||"{}")};return{get:function(a,o){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then(function(){var l=JSON.stringify(a),u=r()[l];return Promise.all([u||o(),u!==void 0])}).then(function(l){var u=ps(l,2),i=u[0],p=u[1];return Promise.all([i,p||c.miss(i)])}).then(function(l){return ps(l,1)[0]})},set:function(a,o){return Promise.resolve().then(function(){var c=r();return c[JSON.stringify(a)]=o,s().setItem(n,JSON.stringify(c)),o})},delete:function(a){return Promise.resolve().then(function(){var o=r();delete o[JSON.stringify(a)],s().setItem(n,JSON.stringify(o))})},clear:function(){return Promise.resolve().then(function(){s().removeItem(n)})}}}function fn(e){var t=fs(e.caches),n=t.shift();return n===void 0?{get:function(s,r){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}};return r().then(function(o){return Promise.all([o,a.miss(o)])}).then(function(o){return ps(o,1)[0]})},set:function(s,r){return Promise.resolve(r)},delete:function(s){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(s,r){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}};return n.get(s,r,a).catch(function(){return fn({caches:t}).get(s,r,a)})},set:function(s,r){return n.set(s,r).catch(function(){return fn({caches:t}).set(s,r)})},delete:function(s){return n.delete(s).catch(function(){return fn({caches:t}).delete(s)})},clear:function(){return n.clear().catch(function(){return fn({caches:t}).clear()})}}}function Ys(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{serializable:!0},t={};return{get:function(n,s){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}},a=JSON.stringify(n);if(a in t)return Promise.resolve(e.serializable?JSON.parse(t[a]):t[a]);var o=s(),c=r&&r.miss||function(){return Promise.resolve()};return o.then(function(l){return c(l)}).then(function(){return o})},set:function(n,s){return t[JSON.stringify(n)]=e.serializable?JSON.stringify(s):s,Promise.resolve(s)},delete:function(n){return delete t[JSON.stringify(n)],Promise.resolve()},clear:function(){return t={},Promise.resolve()}}}function jd(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[n],e[n]=s}return e}function Hc(e,t){return t&&Object.keys(t).forEach(function(n){e[n]=t[n](e)}),e}function Ts(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];var r=0;return e.replace(/%s/g,function(){return encodeURIComponent(n[r++])})}var rs={WithinQueryParameters:0,WithinHeaders:1};function Go(e,t){var n=e||{},s=n.data||{};return Object.keys(n).forEach(function(r){["timeout","headers","queryParameters","data","cacheable"].indexOf(r)===-1&&(s[r]=n[r])}),{data:Object.entries(s).length>0?s:void 0,timeout:n.timeout||t,headers:n.headers||{},queryParameters:n.queryParameters||{},cacheable:n.cacheable}}var Ft={Read:1,Write:2,Any:3},Uc=1,xd=2,Fc=3;function $c(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Uc;return ne(ne({},e),{},{status:t,lastUpdate:Date.now()})}function Bc(e){return typeof e=="string"?{protocol:"https",url:e,accept:Ft.Any}:{protocol:e.protocol||"https",url:e.url,accept:e.accept||Ft.Any}}var Zo="GET",Ds="POST";function wd(e,t){return Promise.all(t.map(function(n){return e.get(n,function(){return Promise.resolve($c(n))})})).then(function(n){var s=n.filter(function(o){return function(c){return c.status===Uc||Date.now()-c.lastUpdate>12e4}(o)}),r=n.filter(function(o){return function(c){return c.status===Fc&&Date.now()-c.lastUpdate<=12e4}(o)}),a=[].concat(fs(s),fs(r));return{getTimeout:function(o,c){return(r.length===0&&o===0?1:r.length+3+o)*c},statelessHosts:a.length>0?a.map(function(o){return Bc(o)}):t}})}function Yo(e,t,n,s){var r=[],a=function(f,g){if(!(f.method===Zo||f.data===void 0&&g.data===void 0)){var b=Array.isArray(f.data)?f.data:ne(ne({},f.data),g.data);return JSON.stringify(b)}}(n,s),o=function(f,g){var b=ne(ne({},f.headers),g.headers),y={};return Object.keys(b).forEach(function(w){var S=b[w];y[w.toLowerCase()]=S}),y}(e,s),c=n.method,l=n.method!==Zo?{}:ne(ne({},n.data),s.data),u=ne(ne(ne({"x-algolia-agent":e.userAgent.value},e.queryParameters),l),s.queryParameters),i=0,p=function f(g,b){var y=g.pop();if(y===void 0)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:Xo(r)};var w={data:a,headers:o,method:c,url:Ed(y,n.path,u),connectTimeout:b(i,e.timeouts.connect),responseTimeout:b(i,s.timeout)},S=function(C){var E={request:w,response:C,host:y,triesLeft:g.length};return r.push(E),E},O={onSucess:function(C){return function(E){try{return JSON.parse(E.content)}catch(A){throw function(F,Y){return{name:"DeserializationError",message:F,response:Y}}(A.message,E)}}(C)},onRetry:function(C){var E=S(C);return C.isTimedOut&&i++,Promise.all([e.logger.info("Retryable failure",Kc(E)),e.hostsCache.set(y,$c(y,C.isTimedOut?Fc:xd))]).then(function(){return f(g,b)})},onFail:function(C){throw S(C),function(E,A){var F=E.content,Y=E.status,ue=F;try{ue=JSON.parse(F).message}catch{}return function(ce,Q,ie){return{name:"ApiError",message:ce,status:Q,transporterStackTrace:ie}}(ue,Y,A)}(C,Xo(r))}};return e.requester.send(w).then(function(C){return function(E,A){return function(F){var Y=F.status;return F.isTimedOut||function(ue){var ce=ue.isTimedOut,Q=ue.status;return!ce&&~~Q==0}(F)||~~(Y/100)!=2&&~~(Y/100)!=4}(E)?A.onRetry(E):~~(E.status/100)==2?A.onSucess(E):A.onFail(E)}(C,O)})};return wd(e.hostsCache,t).then(function(f){return p(fs(f.statelessHosts).reverse(),f.getTimeout)})}function Od(e){var t={value:"Algolia for JavaScript (".concat(e,")"),add:function(n){var s="; ".concat(n.segment).concat(n.version!==void 0?" (".concat(n.version,")"):"");return t.value.indexOf(s)===-1&&(t.value="".concat(t.value).concat(s)),t}};return t}function Ed(e,t,n){var s=zc(n),r="".concat(e.protocol,"://").concat(e.url,"/").concat(t.charAt(0)==="/"?t.substr(1):t);return s.length&&(r+="?".concat(s)),r}function zc(e){return Object.keys(e).map(function(t){return Ts("%s=%s",t,(n=e[t],Object.prototype.toString.call(n)==="[object Object]"||Object.prototype.toString.call(n)==="[object Array]"?JSON.stringify(e[t]):e[t]));var n}).join("&")}function Xo(e){return e.map(function(t){return Kc(t)})}function Kc(e){var t=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return ne(ne({},e),{},{request:ne(ne({},e.request),{},{headers:ne(ne({},e.request.headers),t)})})}var Sd=function(e){var t=e.appId,n=function(a,o,c){var l={"x-algolia-api-key":c,"x-algolia-application-id":o};return{headers:function(){return a===rs.WithinHeaders?l:{}},queryParameters:function(){return a===rs.WithinQueryParameters?l:{}}}}(e.authMode!==void 0?e.authMode:rs.WithinHeaders,t,e.apiKey),s=function(a){var o=a.hostsCache,c=a.logger,l=a.requester,u=a.requestsCache,i=a.responsesCache,p=a.timeouts,f=a.userAgent,g=a.hosts,b=a.queryParameters,y={hostsCache:o,logger:c,requester:l,requestsCache:u,responsesCache:i,timeouts:p,userAgent:f,headers:a.headers,queryParameters:b,hosts:g.map(function(w){return Bc(w)}),read:function(w,S){var O=Go(S,y.timeouts.read),C=function(){return Yo(y,y.hosts.filter(function(A){return(A.accept&Ft.Read)!=0}),w,O)};if((O.cacheable!==void 0?O.cacheable:w.cacheable)!==!0)return C();var E={request:w,mappedRequestOptions:O,transporter:{queryParameters:y.queryParameters,headers:y.headers}};return y.responsesCache.get(E,function(){return y.requestsCache.get(E,function(){return y.requestsCache.set(E,C()).then(function(A){return Promise.all([y.requestsCache.delete(E),A])},function(A){return Promise.all([y.requestsCache.delete(E),Promise.reject(A)])}).then(function(A){var F=ps(A,2);return F[0],F[1]})})},{miss:function(A){return y.responsesCache.set(E,A)}})},write:function(w,S){return Yo(y,y.hosts.filter(function(O){return(O.accept&Ft.Write)!=0}),w,Go(S,y.timeouts.write))}};return y}(ne(ne({hosts:[{url:"".concat(t,"-dsn.algolia.net"),accept:Ft.Read},{url:"".concat(t,".algolia.net"),accept:Ft.Write}].concat(jd([{url:"".concat(t,"-1.algolianet.com")},{url:"".concat(t,"-2.algolianet.com")},{url:"".concat(t,"-3.algolianet.com")}]))},e),{},{headers:ne(ne(ne({},n.headers()),{"content-type":"application/x-www-form-urlencoded"}),e.headers),queryParameters:ne(ne({},n.queryParameters()),e.queryParameters)})),r={transporter:s,appId:t,addAlgoliaAgent:function(a,o){s.userAgent.add({segment:a,version:o})},clearCache:function(){return Promise.all([s.requestsCache.clear(),s.responsesCache.clear()]).then(function(){})}};return Hc(r,e.methods)},Vc=function(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s={transporter:e.transporter,appId:e.appId,indexName:t};return Hc(s,n.methods)}},el=function(e){return function(t,n){var s=t.map(function(r){return ne(ne({},r),{},{params:zc(r.params||{})})});return e.transporter.read({method:Ds,path:"1/indexes/*/queries",data:{requests:s},cacheable:!0},n)}},tl=function(e){return function(t,n){return Promise.all(t.map(function(s){var r=s.params,a=r.facetName,o=r.facetQuery,c=Rf(r,yd);return Vc(e)(s.indexName,{methods:{searchForFacetValues:Wc}}).searchForFacetValues(a,o,ne(ne({},n),c))}))}},Id=function(e){return function(t,n,s){return e.transporter.read({method:Ds,path:Ts("1/answers/%s/prediction",e.indexName),data:{query:t,queryLanguages:n},cacheable:!0},s)}},kd=function(e){return function(t,n){return e.transporter.read({method:Ds,path:Ts("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},n)}},Wc=function(e){return function(t,n,s){return e.transporter.read({method:Ds,path:Ts("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:n},cacheable:!0},s)}},Pd=1,Cd=2,Ad=3;function Jc(e,t,n){var s,r={appId:e,apiKey:t,timeouts:{connect:1,read:2,write:30},requester:{send:function(a){return new Promise(function(o){var c=new XMLHttpRequest;c.open(a.method,a.url,!0),Object.keys(a.headers).forEach(function(p){return c.setRequestHeader(p,a.headers[p])});var l,u=function(p,f){return setTimeout(function(){c.abort(),o({status:0,content:f,isTimedOut:!0})},1e3*p)},i=u(a.connectTimeout,"Connection timeout");c.onreadystatechange=function(){c.readyState>c.OPENED&&l===void 0&&(clearTimeout(i),l=u(a.responseTimeout,"Socket timeout"))},c.onerror=function(){c.status===0&&(clearTimeout(i),clearTimeout(l),o({content:c.responseText||"Network request failed",status:c.status,isTimedOut:!1}))},c.onload=function(){clearTimeout(i),clearTimeout(l),o({content:c.responseText,status:c.status,isTimedOut:!1})},c.send(a.data)})}},logger:(s=Ad,{debug:function(a,o){return Pd>=s&&console.debug(a,o),Promise.resolve()},info:function(a,o){return Cd>=s&&console.info(a,o),Promise.resolve()},error:function(a,o){return console.error(a,o),Promise.resolve()}}),responsesCache:Ys(),requestsCache:Ys({serializable:!1}),hostsCache:fn({caches:[bd({key:"".concat("4.8.5","-").concat(e)}),Ys()]}),userAgent:Od("4.8.5").add({segment:"Browser",version:"lite"}),authMode:rs.WithinQueryParameters};return Sd(ne(ne(ne({},r),n),{},{methods:{search:el,searchForFacetValues:tl,multipleQueries:el,multipleSearchForFacetValues:tl,initIndex:function(a){return function(o){return Vc(a)(o,{methods:{search:kd,searchForFacetValues:Wc,findAnswers:Id}})}}}}))}Jc.version="4.8.5";var qd=["footer","searchBox"];function bn(){return bn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},bn.apply(this,arguments)}function nl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function Xs(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nl(Object(n),!0).forEach(function(s){Rd(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nl(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function Rd(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Td(e,t){return function(n){if(Array.isArray(n))return n}(e)||function(n,s){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var a,o,c=[],l=!0,u=!1;try{for(r=r.call(n);!(l=(a=r.next()).done)&&(c.push(a.value),!s||c.length!==s);l=!0);}catch(i){u=!0,o=i}finally{try{l||r.return==null||r.return()}finally{if(u)throw o}}return c}}(e,t)||function(n,s){if(!!n){if(typeof n=="string")return sl(n,s);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return sl(n,s)}}(e,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function sl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function Dd(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Nd(e){var t=e.appId,n=e.apiKey,s=e.indexName,r=e.placeholder,a=r===void 0?"Search docs":r,o=e.searchParameters,c=e.maxResultsPerGroup,l=e.onClose,u=l===void 0?rd:l,i=e.transformItems,p=i===void 0?Jo:i,f=e.hitComponent,g=f===void 0?Hh:f,b=e.resultsFooterComponent,y=b===void 0?function(){return null}:b,w=e.navigator,S=e.initialScrollY,O=S===void 0?0:S,C=e.transformSearchClient,E=C===void 0?Jo:C,A=e.disableUserPersonalization,F=A!==void 0&&A,Y=e.initialQuery,ue=Y===void 0?"":Y,ce=e.translations,Q=ce===void 0?{}:ce,ie=e.getMissingResultsUrl,ge=Q.footer,he=Q.searchBox,ve=Dd(Q,qd),He=Td(m.useState({query:"",collections:[],completion:null,context:{},isOpen:!1,activeItemId:null,status:"idle"}),2),le=He[0],te=He[1],W=m.useRef(null),De=m.useRef(null),Ue=m.useRef(null),Ie=m.useRef(null),_e=m.useRef(null),ke=m.useRef(10),at=m.useRef(typeof window!="undefined"?window.getSelection().toString().slice(0,64):"").current,Me=m.useRef(ue||at).current,be=function(v,_,j){return m.useMemo(function(){var I=Jc(v,_);return I.addAlgoliaAgent("docsearch","3.4.0"),/docsearch.js \(.*\)/.test(I.transporter.userAgent.value)===!1&&I.addAlgoliaAgent("docsearch-react","3.4.0"),j(I)},[v,_,j])}(t,n,E),x=m.useRef(Qo({key:"__DOCSEARCH_FAVORITE_SEARCHES__".concat(s),limit:10})).current,D=m.useRef(Qo({key:"__DOCSEARCH_RECENT_SEARCHES__".concat(s),limit:x.getAll().length===0?7:4})).current,R=m.useCallback(function(v){if(!F){var _=v.type==="content"?v.__docsearch_parent:v;_&&x.getAll().findIndex(function(j){return j.objectID===_.objectID})===-1&&D.add(_)}},[x,D,F]),M=m.useMemo(function(){return Nh({id:"docsearch",defaultActiveItemId:0,placeholder:a,openOnFocus:!0,initialState:{query:Me,context:{searchSuggestions:[]}},navigator:w,onStateChange:function(v){te(v.state)},getSources:function(v){var _=v.query,j=v.state,I=v.setContext,T=v.setStatus;return _?be.search([{query:_,indexName:s,params:Xs({attributesToRetrieve:["hierarchy.lvl0","hierarchy.lvl1","hierarchy.lvl2","hierarchy.lvl3","hierarchy.lvl4","hierarchy.lvl5","hierarchy.lvl6","content","type","url"],attributesToSnippet:["hierarchy.lvl1:".concat(ke.current),"hierarchy.lvl2:".concat(ke.current),"hierarchy.lvl3:".concat(ke.current),"hierarchy.lvl4:".concat(ke.current),"hierarchy.lvl5:".concat(ke.current),"hierarchy.lvl6:".concat(ke.current),"content:".concat(ke.current)],snippetEllipsisText:"\u2026",highlightPreTag:"<mark>",highlightPostTag:"</mark>",hitsPerPage:20},o)}]).catch(function(k){throw k.name==="RetryError"&&T("error"),k}).then(function(k){var q=k.results[0],P=q.hits,H=q.nbHits,N=Wo(P,function(L){return Lc(L)},c);return j.context.searchSuggestions.length<Object.keys(N).length&&I({searchSuggestions:Object.keys(N)}),I({nbHits:H}),Object.values(N).map(function(L,B){return{sourceId:"hits".concat(B),onSelect:function(z){var ee=z.item,G=z.event;R(ee),Gn(G)||u()},getItemUrl:function(z){return z.item.url},getItems:function(){return Object.values(Wo(L,function(z){return z.hierarchy.lvl1},c)).map(p).map(function(z){return z.map(function(ee){return Xs(Xs({},ee),{},{__docsearch_parent:ee.type!=="lvl1"&&z.find(function(G){return G.type==="lvl1"&&G.hierarchy.lvl1===ee.hierarchy.lvl1})})})}).flat()}}})}):F?[]:[{sourceId:"recentSearches",onSelect:function(k){var q=k.item,P=k.event;R(q),Gn(P)||u()},getItemUrl:function(k){return k.item.url},getItems:function(){return D.getAll()}},{sourceId:"favoriteSearches",onSelect:function(k){var q=k.item,P=k.event;R(q),Gn(P)||u()},getItemUrl:function(k){return k.item.url},getItems:function(){return x.getAll()}}]}})},[s,o,c,be,u,D,x,R,Me,a,w,p,F]),X=M.getEnvironmentProps,h=M.getRootProps,d=M.refresh;return function(v){var _=v.getEnvironmentProps,j=v.panelElement,I=v.formElement,T=v.inputElement;m.useEffect(function(){if(j&&I&&T){var k=_({panelElement:j,formElement:I,inputElement:T}),q=k.onTouchStart,P=k.onTouchMove;return window.addEventListener("touchstart",q),window.addEventListener("touchmove",P),function(){window.removeEventListener("touchstart",q),window.removeEventListener("touchmove",P)}}},[_,j,I,T])}({getEnvironmentProps:X,panelElement:Ie.current,formElement:Ue.current,inputElement:_e.current}),function(v){var _=v.container;m.useEffect(function(){if(_){var j=_.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"),I=j[0],T=j[j.length-1];return _.addEventListener("keydown",k),function(){_.removeEventListener("keydown",k)}}function k(q){q.key==="Tab"&&(q.shiftKey?document.activeElement===I&&(q.preventDefault(),T.focus()):document.activeElement===T&&(q.preventDefault(),I.focus()))}},[_])}({container:W.current}),m.useEffect(function(){return document.body.classList.add("DocSearch--active"),function(){var v,_;document.body.classList.remove("DocSearch--active"),(v=(_=window).scrollTo)===null||v===void 0||v.call(_,0,O)}},[]),m.useEffect(function(){window.matchMedia("(max-width: 768px)").matches&&(ke.current=5)},[]),m.useEffect(function(){Ie.current&&(Ie.current.scrollTop=0)},[le.query]),m.useEffect(function(){Me.length>0&&(d(),_e.current&&_e.current.focus())},[Me,d]),m.useEffect(function(){function v(){if(De.current){var _=.01*window.innerHeight;De.current.style.setProperty("--docsearch-vh","".concat(_,"px"))}}return v(),window.addEventListener("resize",v),function(){window.removeEventListener("resize",v)}},[]),m.createElement("div",bn({ref:W},h({"aria-expanded":!0}),{className:["DocSearch","DocSearch-Container",le.status==="stalled"&&"DocSearch-Container--Stalled",le.status==="error"&&"DocSearch-Container--Errored"].filter(Boolean).join(" "),role:"button",tabIndex:0,onMouseDown:function(v){v.target===v.currentTarget&&u()}}),m.createElement("div",{className:"DocSearch-Modal",ref:De},m.createElement("header",{className:"DocSearch-SearchBar",ref:Ue},m.createElement(md,bn({},M,{state:le,autoFocus:Me.length===0,inputRef:_e,isFromSelection:Boolean(Me)&&Me===at,translations:he,onClose:u}))),m.createElement("div",{className:"DocSearch-Dropdown",ref:Ie},m.createElement(fd,bn({},M,{indexName:s,state:le,hitComponent:g,resultsFooterComponent:y,disableUserPersonalization:F,recentSearches:D,favoriteSearches:x,inputRef:_e,translations:ve,getMissingResultsUrl:ie,onItemClick:function(v,_){R(v),Gn(_)||u()}}))),m.createElement("footer",{className:"DocSearch-Footer"},m.createElement(Lh,{translations:ge}))))}function Pr(){return Pr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Pr.apply(this,arguments)}function rl(e,t){return function(n){if(Array.isArray(n))return n}(e)||function(n,s){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var a,o,c=[],l=!0,u=!1;try{for(r=r.call(n);!(l=(a=r.next()).done)&&(c.push(a.value),!s||c.length!==s);l=!0);}catch(i){u=!0,o=i}finally{try{l||r.return==null||r.return()}finally{if(u)throw o}}return c}}(e,t)||function(n,s){if(!!n){if(typeof n=="string")return al(n,s);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return al(n,s)}}(e,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function al(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function Md(e){var t,n,s=m.useRef(null),r=rl(m.useState(!1),2),a=r[0],o=r[1],c=rl(m.useState((e==null?void 0:e.initialQuery)||void 0),2),l=c[0],u=c[1],i=m.useCallback(function(){o(!0)},[o]),p=m.useCallback(function(){o(!1)},[o]);return function(f){var g=f.isOpen,b=f.onOpen,y=f.onClose,w=f.onInput,S=f.searchButtonRef;m.useEffect(function(){function O(C){var E;(C.keyCode===27&&g||((E=C.key)===null||E===void 0?void 0:E.toLowerCase())==="k"&&(C.metaKey||C.ctrlKey)||!function(A){var F=A.target,Y=F.tagName;return F.isContentEditable||Y==="INPUT"||Y==="SELECT"||Y==="TEXTAREA"}(C)&&C.key==="/"&&!g)&&(C.preventDefault(),g?y():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||b()),S&&S.current===document.activeElement&&w&&/[a-zA-Z0-9]/.test(String.fromCharCode(C.keyCode))&&w(C)}return window.addEventListener("keydown",O),function(){window.removeEventListener("keydown",O)}},[g,b,y,w,S])}({isOpen:a,onOpen:i,onClose:p,onInput:m.useCallback(function(f){o(!0),u(f.key)},[o,u]),searchButtonRef:s}),m.createElement(m.Fragment,null,m.createElement(eh,{ref:s,translations:e==null||(t=e.translations)===null||t===void 0?void 0:t.button,onClick:i}),a&&Pc(m.createElement(Nd,Pr({},e,{initialScrollY:window.scrollY,initialQuery:l,translations:e==null||(n=e.translations)===null||n===void 0?void 0:n.modal,onClose:p})),document.body))}function Ld(e){Ac(m.createElement(Md,gr({},e,{transformSearchClient:function(t){return t.addAlgoliaAgent("docsearch.js","3.4.0"),e.transformSearchClient?e.transformSearchClient(t):t}})),function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:window;return typeof t=="string"?n.document.querySelector(t):t}(e.container,e.environment))}const Hd={id:"docsearch"},Ud={__name:"search",setup(e){return jt(()=>{Ld({container:"#docsearch",appId:"NZ6NE3PZQJ",indexName:"poseidon_data",apiKey:"89ae2420035114468a5e96a0e1154423"})}),(t,n)=>(re(),oe("div",Hd))}};const Fd=e=>(Is("data-v-4db0198f"),e=e(),ks(),e),$d={class:"header-container"},Bd=Fd(()=>$("h1",{class:"logo"},[$("a",{href:"/"},"\u65E7\u68A6")],-1)),zd={class:"nav"},Kd=["onClick"],Vd=["href"],Wd={key:0,src:Pf},Jd={key:1,src:Cf},Qd={class:"main-container"},Gd={class:"main"},Zd={class:"mobile-menus-container"},Yd={class:"navbar-links"},Xd=["href"],em={__name:"page-layout",setup(e){const t=Tn(),n=Re(""),s=[{name:"\u5206\u7C7B",link:"/article-category"},{name:"\u5F52\u6863",link:"/article-archive"},{name:"\u53CB\u94FE",link:"/friend-links"},{name:"\u5173\u4E8E",link:"/custom/about"}],r=Re(!1),a=Af(()=>{window.innerWidth>768&&o()},300);function o(){r.value=!1}return jt(()=>{n.value=t.path,window.addEventListener("resize",a)}),Kr(()=>{window.removeEventListener("resize",a)}),(c,l)=>{const u=Fl("router-view");return re(),oe("div",{class:Wt(["index-container",{active:r.value}])},[$("div",$d,[$("header",null,[Bd,$("ul",zd,[me(Ud),(re(),oe(de,null,yt(s,i=>$("li",{class:Wt(["nav-item",{active:n.value===i.link}]),key:i.link,onClick:p=>n.value=i.link},[$("a",{href:i.link},Ce(i.name),9,Vd)],10,Kd)),64)),$("div",{class:"toggle-menus",onClick:l[0]||(l[0]=i=>r.value=!r.value)},[r.value?(re(),oe("img",Wd)):(re(),oe("img",Jd))])])])]),$("div",Qd,[$("div",Gd,[me(u)])]),$("div",Zd,[$("nav",Yd,[(re(),oe(de,null,yt(s,i=>$("div",{class:"navbar-links__item",key:i.link},[$("a",{href:i.link,onClick:o},Ce(i.name),9,Xd)])),64))])])],2)}}};var tm=rt(em,[["__scopeId","data-v-4db0198f"]]),Ns=[{name:"git-base",title:"Git\u57FA\u672C\u64CD\u4F5C",date:"Aug 11, 2021",category:["Git"],content:`<h3>\u521B\u5EFA\u4ED3\u5E93</h3>
<p>\u521D\u59CB\u5316\u4E00\u4E2A\u6587\u4EF6\u4E3A\u672C\u5730\u4ED3\u5E93</p>
<pre><code class='language-javascript'>git init
</code></pre>
<p>\u4ECE\u73B0\u6709\u7684\u4ED3\u5E93\u4E2D\u62F7\u8D1D\u9879\u76EE</p>
<pre><code class='language-javascript'>git clone \u5730\u5740
</code></pre>
<h3>\u63D0\u4EA4\u6D41\u7A0B</h3>
<p>\u4ECE\u8FDC\u7AEF\u62C9\u53D6\u4EE3\u7801</p>
<pre><code class='language-javascript'>git pull

<span class='hljs-comment'>// \u5C06\u8FDC\u7A0B\u4E3B\u673A origin \u7684 master \u5206\u652F\u62C9\u53D6\u8FC7\u6765\uFF0C\u4E0E\u672C\u5730\u7684 brantest \u5206\u652F\u5408\u5E76\u3002</span>
git pull origin <span class='hljs-attr'>master</span>:brantest

<span class='hljs-comment'>// \u5982\u679C\u8FDC\u7A0B\u5206\u652F\u662F\u4E0E\u5F53\u524D\u5206\u652F\u5408\u5E76\uFF0C\u5219\u5192\u53F7\u540E\u9762\u7684\u90E8\u5206\u53EF\u4EE5\u7701\u7565\u3002</span>
git pull origin master
</code></pre>
<p>\u5C06\u4FEE\u6539\u63D0\u4EA4\u81F3\u6682\u5B58\u533A</p>
<pre><code class='language-javascript'><span class='hljs-comment'>// \u63D0\u4EA4\u4FEE\u6539\u6587\u4EF6\u548C\u65B0\u589E\u6587\u4EF6\uFF08\u4E0D\u5305\u62EC\u5220\u9664\u6587\u4EF6\uFF09</span>
git add .

<span class='hljs-comment'>// \u63D0\u4EA4\u5DF2\u7ECF\u88ABadd\u7684\u6587\u4EF6\uFF08\u4FEE\u6539\u6587\u4EF6\u548C\u5220\u9664\u6587\u4EF6\uFF09\u4E0D\u5305\u62EC\u65B0\u589E\u6587\u4EF6</span>
git add -u

<span class='hljs-comment'>// \u63D0\u4EA4\u6240\u6709\u7684\u4FEE\u6539</span>
git add -A
</code></pre>
<p>\u67E5\u770B\u4ED3\u5E93\u5F53\u524D\u7684\u72B6\u6001\uFF0C\u663E\u793A\u6709\u53D8\u66F4\u7684\u6587\u4EF6\u3002</p>
<pre><code class='language-javascript'>git status
</code></pre>
<p>\u63D0\u4EA4\u6682\u5B58\u533A\u5230\u672C\u5730\u4ED3\u5E93\u4E2D</p>
<pre><code class='language-javascript'>git commit -m <span class='hljs-string'>&quot;message&quot;</span>
</code></pre>
<p>\u67E5\u770B\u63D0\u4EA4\u65E5\u5FD7</p>
<pre><code class='language-javascript'>git log
</code></pre>
<p>\u5C06\u4EE3\u7801\u63A8\u9001\u81F3\u8FDC\u7AEF</p>
<pre><code class='language-javascript'>git push
</code></pre>
<p>\u4E34\u65F6\u5B58\u50A8</p>
<pre><code class='language-javascript'><span class='hljs-comment'>// \u5C06\u4FEE\u6539\u4E34\u65F6\u5B58\u50A8</span>
git stash

<span class='hljs-comment'>// \u6062\u590D\u5DE5\u4F5C\u76EE\u5F55</span>
git stash pop

<span class='hljs-comment'>// \u67E5\u770Bstash\u4E86\u54EA\u4E9B\u5B58\u50A8</span>
git stash list

<span class='hljs-comment'>// \u5220\u9664\u6240\u6709stash</span>
git stash clear
</code></pre>
<h3>\u5206\u652F\u64CD\u4F5C</h3>
<p>\u67E5\u770B\u5206\u652F</p>
<pre><code class='language-javascript'><span class='hljs-comment'>// \u67E5\u770B\u5206\u652F</span>
git branch

<span class='hljs-comment'>// \u67E5\u770B\u8FDC\u7A0B\u5206\u652F</span>
git branch -r

<span class='hljs-comment'>// \u67E5\u770B\u6240\u6709\u5206\u652F</span>
git branch -a
</code></pre>
<p>\u64CD\u4F5C\u5206\u652F</p>
<pre><code class='language-javascript'><span class='hljs-comment'>// \u5207\u6362\u5206\u652F</span>
git checkout \u5206\u652F\u540D

<span class='hljs-comment'>// \u521B\u5EFA\u5206\u652F</span>
git branch \u5206\u652F\u540D

<span class='hljs-comment'>// \u521B\u5EFA\u5E76\u5207\u6362\u5206\u652F</span>
git checkout -b \u5206\u652F\u540D

<span class='hljs-comment'>// \u5C06\u5206\u652F\u63A8\u9001\u5230\u8FDC\u7A0B</span>
git push origin \u5206\u652F\u540D

<span class='hljs-comment'>// \u5C06\u672C\u5730\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u5173\u8054\uFF08\u5173\u8054\u540E\u624D\u53EF\u8FDB\u884C git pull \u548C git push \u64CD\u4F5C\uFF09</span>
git push --set-upstream origin \u5206\u652F\u540D

<span class='hljs-comment'>// \u5C06\u8FDC\u7A0B\u5206\u652F\u540C\u6B65\u5230\u672C\u5730\uFF08\u5728\u6B64\u4E4B\u524D\u9700\u8981 git pull \u62C9\u53D6\u8FDC\u7A0B\u4ED3\u5E93\u6700\u65B0\u5206\u652F\u4FE1\u606F\uFF09</span>
git checkout origin/\u5206\u652F\u540D --track

<span class='hljs-comment'>// \u5408\u5E76\u5206\u652F</span>
git merge \u5206\u652F\u540D

<span class='hljs-comment'>// \u5220\u9664\u672C\u5730\u5206\u652F</span>
git branch -d \u5206\u652F\u540D

<span class='hljs-comment'>// \u5220\u9664\u8FDC\u7A0B\u5206\u652F</span>
git push origin --<span class='hljs-keyword'>delete</span> \u5206\u652F\u540D
</code></pre>
<h3>\u4EE3\u7801\u56DE\u6EDA</h3>
<pre><code class='language-javascript'><span class='hljs-comment'>// \u64A4\u56DE\u6700\u8FD1\u4E00\u6B21\u7684commit(\u64A4\u9500commit\uFF0C\u4E0D\u64A4\u9500git add)</span>
git reset --soft <span class='hljs-variable constant_'>HEAD</span>~<span class='hljs-number'>1</span>

<span class='hljs-comment'>// \u64A4\u56DE\u6700\u8FD1\u4E00\u6B21\u7684commit(\u64A4\u9500commit\uFF0C\u64A4\u9500git add)</span>
git reset --mixed <span class='hljs-variable constant_'>HEAD</span>~<span class='hljs-number'>1</span>

<span class='hljs-comment'>// \u64A4\u56DE\u6700\u8FD1\u4E00\u6B21\u7684commit(\u64A4\u9500commit\uFF0C\u64A4\u9500git add,\u8FD8\u539F\u6539\u52A8\u7684\u4EE3\u7801)</span>
git reset --hard <span class='hljs-variable constant_'>HEAD</span>~<span class='hljs-number'>1</span>

<span class='hljs-comment'>// \u6267\u884C git log \uFF0C\u83B7\u53D6\u5230 commit id</span>
git reset [commit id]
</code></pre>
<h3>commit\u63D0\u4EA4\u89C4\u8303</h3>
<table>
<thead>
<tr>
<th style='text-align:left'>\u7C7B\u578B</th>
<th style='text-align:left'>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody>
<tr>
<td style='text-align:left'>ci</td>
<td style='text-align:left'>\u4E3B\u8981\u76EE\u7684\u662F\u4FEE\u6539\u9879\u76EE\u7EE7\u7EED\u96C6\u6210\u6D41\u7A0B(\u4F8B\u5982 Travis\uFF0CJenkins\uFF0CGitLab CI\uFF0CCircle\u7B49)\u7684\u63D0\u4EA4</td>
</tr>
<tr>
<td style='text-align:left'>docs</td>
<td style='text-align:left'>\u6587\u6863\u66F4\u65B0</td>
</tr>
<tr>
<td style='text-align:left'>feat</td>
<td style='text-align:left'>\u65B0\u589E\u529F\u80FD</td>
</tr>
<tr>
<td style='text-align:left'>fix</td>
<td style='text-align:left'>bug \u4FEE\u590D</td>
</tr>
<tr>
<td style='text-align:left'>perf</td>
<td style='text-align:left'>\u6027\u80FD, \u4F53\u9A8C\u4F18\u5316</td>
</tr>
<tr>
<td style='text-align:left'>refactor</td>
<td style='text-align:left'>\u91CD\u6784\u4EE3\u7801(\u65E2\u6CA1\u6709\u65B0\u589E\u529F\u80FD\uFF0C\u4E5F\u6CA1\u6709\u4FEE\u590D bug)</td>
</tr>
<tr>
<td style='text-align:left'>revert</td>
<td style='text-align:left'>\u56DE\u6EDA\u67D0\u4E2A\u66F4\u65E9\u4E4B\u524D\u7684\u63D0\u4EA4</td>
</tr>
<tr>
<td style='text-align:left'>style</td>
<td style='text-align:left'>\u4E0D\u5F71\u54CD\u7A0B\u5E8F\u903B\u8F91\u7684\u4EE3\u7801\u4FEE\u6539(\u4FEE\u6539\u7A7A\u767D\u5B57\u7B26\uFF0C\u683C\u5F0F\u7F29\u8FDB\uFF0C\u8865\u5168\u7F3A\u5931\u7684\u5206\u53F7\u7B49\uFF0C\u6CA1\u6709\u6539\u53D8\u4EE3\u7801\u903B\u8F91)</td>
</tr>
<tr>
<td style='text-align:left'>test</td>
<td style='text-align:left'>\u65B0\u589E\u6D4B\u8BD5\u7528\u4F8B\u6216\u662F\u66F4\u65B0\u73B0\u6709\u6D4B\u8BD5</td>
</tr>
<tr>
<td style='text-align:left'>chore</td>
<td style='text-align:left'>\u4E0D\u5C5E\u4E8E\u4EE5\u4E0A\u7C7B\u578B\u7684\u5176\u4ED6\u7C7B\u578B</td>
</tr>
<tr>
<td style='text-align:left'>build</td>
<td style='text-align:left'>\u4E3B\u8981\u76EE\u7684\u662F\u4FEE\u6539\u9879\u76EE\u6784\u5EFA\u7CFB\u7EDF(\u4F8B\u5982 glup\uFF0Cwebpack\uFF0Crollup \u7684\u914D\u7F6E\u7B49)\u7684\u63D0\u4EA4</td>
</tr>
</tbody>
</table>
`,abstract:`\u521B\u5EFA\u4ED3\u5E93
\u521D\u59CB\u5316\u4E00\u4E2A\u6587\u4EF6\u4E3A\u672C\u5730\u4ED3\u5E93
git init

\u4ECE\u73B0\u6709\u7684\u4ED3\u5E93\u4E2D\u62F7\u8D1D\u9879\u76EE
git clone \u5730\u5740

\u63D0\u4EA4\u6D41\u7A0B
\u4ECE\u8FDC\u7AEF\u62C9\u53D6\u4EE3\u7801
git pull

// \u5C06\u8FDC\u7A0B\u4E3B\u673A origin \u7684 master \u5206\u652F\u62C9\u53D6\u8FC7\u6765\uFF0C\u4E0E\u672C\u5730\u7684 brantest \u5206\u652F\u5408\u5E76\u3002
git pull origin master:brantest

// \u5982\u679C\u8FDC\u7A0B\u5206\u652F\u662F\u4E0E\u5F53\u524D\u5206\u652F\u5408\u5E76\uFF0C\u5219\u5192\u53F7\u540E\u9762\u7684\u90E8\u5206\u53EF\u4EE5\u7701\u7565\u3002
git pull origin master

\u5C06\u4FEE\u6539\u63D0\u4EA4\u81F3\u6682\u5B58\u533A
// \u63D0\u4EA4\u4FEE\u6539\u6587\u4EF6\u548C\u65B0\u589E\u6587\u4EF6\uFF08\u4E0D\u5305\u62EC\u5220\u9664\u6587\u4EF6\uFF09
git add .

// \u63D0\u4EA4\u5DF2\u7ECF\u88ABadd\u7684\u6587\u4EF6\uFF08\u4FEE\u6539\u6587\u4EF6\u548C\u5220\u9664\u6587\u4EF6\uFF09\u4E0D\u5305\u62EC\u65B0\u589E\u6587\u4EF6
git add -u

// \u63D0\u4EA4\u6240\u6709\u7684\u4FEE\u6539
git add -A

\u67E5\u770B\u4ED3\u5E93\u5F53\u524D\u7684\u72B6\u6001\uFF0C\u663E\u793A\u6709\u53D8\u66F4\u7684\u6587\u4EF6\u3002
git status

\u63D0\u4EA4\u6682\u5B58\u533A\u5230\u672C\u5730\u4ED3\u5E93\u4E2D
git commit -m &quot;message&quot;

\u67E5\u770B\u63D0\u4EA4\u65E5\u5FD7
git log

\u5C06\u4EE3\u7801\u63A8\u9001\u81F3\u8FDC\u7AEF
git push

\u4E34\u65F6\u5B58\u50A8
// \u5C06\u4FEE\u6539\u4E34\u65F6\u5B58\u50A8
git stash

// \u6062\u590D\u5DE5\u4F5C\u76EE\u5F55
git stash pop

// \u67E5\u770Bstash\u4E86\u54EA\u4E9B\u5B58\u50A8
git stash list

// \u5220\u9664\u6240\u6709stash
git stash clear

\u5206\u652F\u64CD\u4F5C
\u67E5\u770B\u5206\u652F
// \u67E5\u770B\u5206\u652F
git branch

// \u67E5\u770B\u8FDC\u7A0B\u5206\u652F
git branch -r

// \u67E5\u770B\u6240\u6709\u5206\u652F
git branch -a

\u64CD\u4F5C\u5206\u652F
// \u5207\u6362\u5206\u652F
git checkout \u5206\u652F\u540D

// \u521B\u5EFA\u5206\u652F
git branch \u5206\u652F\u540D

// \u521B\u5EFA\u5E76\u5207\u6362\u5206\u652F
git checkout -b \u5206\u652F\u540D

// \u5C06\u5206\u652F\u63A8\u9001\u5230\u8FDC\u7A0B
git push origin \u5206\u652F\u540D

// \u5C06\u672C\u5730\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u5173\u8054\uFF08\u5173\u8054\u540E\u624D\u53EF\u8FDB\u884C git pull \u548C git push \u64CD\u4F5C\uFF09
git push --set-upstream origin \u5206\u652F\u540D

// \u5C06\u8FDC\u7A0B\u5206\u652F\u540C\u6B65\u5230\u672C\u5730\uFF08\u5728\u6B64\u4E4B\u524D\u9700\u8981 git pull \u62C9\u53D6\u8FDC\u7A0B\u4ED3\u5E93\u6700\u65B0\u5206\u652F\u4FE1\u606F\uFF09
git checkout origin/\u5206\u652F\u540D --track

// \u5408\u5E76\u5206\u652F
git merge \u5206\u652F\u540D

// \u5220\u9664\u672C\u5730\u5206\u652F
git branch -d \u5206\u652F\u540D

// \u5220\u9664\u8FDC\u7A0B\u5206\u652F
git push origin --delete \u5206\u652F\u540D

\u4EE3\u7801\u56DE\u6EDA
// \u64A4\u56DE\u6700\u8FD1\u4E00\u6B21\u7684commit(\u64A4\u9500commit\uFF0C\u4E0D\u64A4\u9500git add)
git reset --soft HEAD~1

// \u64A4\u56DE\u6700\u8FD1\u4E00\u6B21\u7684commit(\u64A4\u9500commit\uFF0C\u64A4\u9500git add)
git reset --mixed HEAD~1

// \u64A4\u56DE\u6700\u8FD1\u4E00\u6B21\u7684commit(\u64A4\u9500commit\uFF0C\u64A4\u9500git add,\u8FD8\u539F\u6539\u52A8\u7684\u4EE3\u7801)
git reset --hard HEAD~1

// \u6267\u884C git log \uFF0C\u83B7\u53D6\u5230 commit id
git reset [commit id]

commit\u63D0\u4EA4\u89C4\u8303



\u7C7B\u578B
\u63CF\u8FF0




ci
\u4E3B\u8981\u76EE\u7684\u662F\u4FEE\u6539\u9879\u76EE\u7EE7\u7EED\u96C6\u6210\u6D41\u7A0B(\u4F8B\u5982 Travis\uFF0CJenkins\uFF0CGitLab CI\uFF0CCircle\u7B49)\u7684\u63D0\u4EA4


docs
\u6587\u6863\u66F4\u65B0


feat
\u65B0\u589E\u529F\u80FD


fix
bug \u4FEE\u590D


perf
\u6027\u80FD, \u4F53\u9A8C\u4F18\u5316


refactor
\u91CD\u6784\u4EE3\u7801(\u65E2\u6CA1\u6709\u65B0\u589E\u529F\u80FD\uFF0C\u4E5F\u6CA1\u6709\u4FEE\u590D bug)


revert
\u56DE\u6EDA\u67D0\u4E2A\u66F4\u65E9\u4E4B\u524D\u7684\u63D0\u4EA4


style
\u4E0D\u5F71\u54CD\u7A0B\u5E8F\u903B\u8F91\u7684\u4EE3\u7801\u4FEE\u6539(\u4FEE\u6539\u7A7A\u767D\u5B57\u7B26\uFF0C\u683C\u5F0F\u7F29\u8FDB\uFF0C\u8865\u5168\u7F3A\u5931\u7684\u5206\u53F7\u7B49\uFF0C\u6CA1\u6709\u6539\u53D8\u4EE3\u7801\u903B\u8F91)


test
\u65B0\u589E\u6D4B\u8BD5\u7528\u4F8B\u6216\u662F\u66F4\u65B0\u73B0\u6709\u6D4B\u8BD5


chore
\u4E0D\u5C5E\u4E8E\u4EE5\u4E0A\u7C7B\u578B\u7684\u5176\u4ED6\u7C7B\u578B


build
\u4E3B\u8981\u76EE\u7684\u662F\u4FEE\u6539\u9879\u76EE\u6784\u5EFA\u7CFB\u7EDF(\u4F8B\u5982 glup\uFF0Cwebpack\uFF0Crollup \u7684\u914D\u7F6E\u7B49)\u7684\u63D0\u4EA4



`},{name:"git-lint",title:"husky + eslint \u5B9E\u73B0\u4EE3\u7801\u63D0\u4EA4\u68C0\u6D4B",date:"Oct 19, 2022",category:["Git"],content:`<h2>\u4E00\u3001\u914D\u7F6EESlint</h2>
<p>1.1 \u5B89\u88C5eslint</p>
<pre><code class='language-bash'>npm install eslint -D
</code></pre>
<p>1.2 \u521D\u59CB\u5316eslint\uFF0C\u751F\u6210\u914D\u7F6E\u6587\u4EF6</p>
<pre><code class='language-bash'>npx eslint --init
</code></pre>
<p>1.3 \u5728\u7F16\u8F91\u5668\u5B89\u88C5<code>ESlint</code>\u63D2\u4EF6</p>
<p>1.4 \u901A\u8FC7\u6267\u884C\u547D\u4EE4\u68C0\u6D4B\u6587\u4EF6\u4EE3\u7801\u89C4\u8303</p>
<pre><code class='language-bash'><span class='hljs-comment'># ./ \u4E3A\u9700\u8981\u68C0\u6D4B\u7684\u6587\u4EF6\u8DEF\u5F84</span>
npx eslint ./
</code></pre>
<h2>\u4E8C\u3001\u914D\u7F6Ehusky</h2>
<p>2.1 \u5B89\u88C5husky</p>
<pre><code class='language-bash'>npm install husky -D
</code></pre>
<p>2.2 \u5728 package.json \u4E2D\u52A0\u5165prepare\u811A\u672C\uFF0C\u6BCF\u6B21\u5728 npm i \u5B89\u88C5\u5B8C\u4F9D\u8D56\u540E\u90FD\u4F1A\u6267\u884C\u8FD9\u4E2A\u547D\u4EE4</p>
<pre><code class='language-bash'>npm set-script prepare <span class='hljs-string'>&quot;husky install&quot;</span>
npm run prepare
</code></pre>
<p>2.3 \u6DFB\u52A0 pre-commit \u94A9\u5B50</p>
<pre><code class='language-bash'>npx husky add .husky/pre-commit <span class='hljs-string'>&quot;npx eslint ./&quot;</span>
</code></pre>
<p>\u8FD0\u884C\u5B8C\u4E4B\u540E\u4F1A\u5728 .husky \u6587\u4EF6\u4E0B\u65B0\u589E pre-commit \u6587\u4EF6</p>
<p>\u82E5 pre-commit \u6587\u4EF6\u751F\u6210\u5931\u8D25\uFF0C\u53EF\u624B\u52A8\u6DFB\u52A0</p>
<pre><code class='language-bash'><span class='hljs-meta'>#!/bin/sh</span>
. <span class='hljs-string'>&quot;<span class='hljs-subst'>$(dirname <span class='hljs-string'>&quot;<span class='hljs-variable'>$0</span>&quot;</span>)</span>/_/husky.sh&quot;</span>

npx eslint ./
</code></pre>
<h2>\u4E09\u3001\u914D\u7F6E commit \u63D0\u4EA4\u89C4\u8303</h2>
<blockquote>
<ul>
<li>\u5B8C\u6210\u4EE5\u4E0A\u4E24\u9879\u914D\u7F6E\u5C31\u5DF2\u7ECF\u53EF\u4EE5\u5BF9\u63D0\u4EA4\u4EE3\u7801\u8FDB\u884C\u68C0\u6D4B</li>
<li>\u4EE5\u4E0B\u5185\u5BB9\u662F\u5BF9 commit \u63D0\u4EA4\u4FE1\u606F\u7684\u68C0\u6D4B\uFF0C\u9700\u8981\u5BF9 commit\u63D0\u4EA4\u89C4\u8303 \u6709\u4E86\u89E3</li>
<li>\u4F8B\u5982\uFF1A&quot;feat: \u65B0\u589E\u529F\u80FD&quot;\uFF0C&quot;fix: \u4FEE\u590Dbug&quot;</li>
</ul>
</blockquote>
<p>3.1 \u5B89\u88C5 commitlint</p>
<pre><code class='language-bash'>npm install --save-dev @commitlint/config-conventional @commitlint/cli
</code></pre>
<p>3.2 \u65B0\u589E commitlint.config.js \u6587\u4EF6</p>
<pre><code class='language-bash'><span class='hljs-comment'># \u6CE8\u610F\uFF1A\u751F\u6210\u7684\u6587\u4EF6\u683C\u5F0F\u7F16\u7801\u5982\u679C\u4E0D\u662FUTF-8\u7684\uFF0C\u9700\u8981\u624B\u52A8\u6539\u4E0B</span>
<span class='hljs-built_in'>echo</span> <span class='hljs-string'>&quot;module.exports = {extends: [&#x27;@commitlint/config-conventional&#x27;]}&quot;</span> &gt; commitlint.config.js
</code></pre>
<p>3.3 \u65B0\u589E commit-msg \u94A9\u5B50</p>
<pre><code class='language-bash'>npx husky add .husky/commit-msg  <span class='hljs-string'>&quot;npx --no -- commitlint --edit <span class='hljs-variable'>\${1}</span>&quot;</span>
</code></pre>
<p>\u8FD0\u884C\u5B8C\u4E4B\u540E\u4F1A\u5728 .husky \u6587\u4EF6\u4E0B\u65B0\u589E commit-msg \u6587\u4EF6</p>
<p>\u82E5 commit-msg \u6587\u4EF6\u751F\u6210\u5931\u8D25\uFF0C\u53EF\u624B\u52A8\u6DFB\u52A0</p>
<pre><code class='language-bash'><span class='hljs-meta'>#!/bin/sh</span>
. <span class='hljs-string'>&quot;<span class='hljs-subst'>$(dirname <span class='hljs-string'>&quot;<span class='hljs-variable'>$0</span>&quot;</span>)</span>/_/husky.sh&quot;</span>

npx --no-install commitlint --edit <span class='hljs-variable'>$1</span>
</code></pre>
`,abstract:`\u4E00\u3001\u914D\u7F6EESlint
1.1 \u5B89\u88C5eslint
npm install eslint -D

1.2 \u521D\u59CB\u5316eslint\uFF0C\u751F\u6210\u914D\u7F6E\u6587\u4EF6
npx eslint --init

1.3 \u5728\u7F16\u8F91\u5668\u5B89\u88C5ESlint\u63D2\u4EF6
1.4 \u901A\u8FC7\u6267\u884C\u547D\u4EE4\u68C0\u6D4B\u6587\u4EF6\u4EE3\u7801\u89C4\u8303
# ./ \u4E3A\u9700\u8981\u68C0\u6D4B\u7684\u6587\u4EF6\u8DEF\u5F84
npx eslint ./

\u4E8C\u3001\u914D\u7F6Ehusky
2.1 \u5B89\u88C5husky
npm install husky -D

2.2 \u5728 package.json \u4E2D\u52A0\u5165prepare\u811A\u672C\uFF0C\u6BCF\u6B21\u5728 npm i \u5B89\u88C5\u5B8C\u4F9D\u8D56\u540E\u90FD\u4F1A\u6267\u884C\u8FD9\u4E2A\u547D\u4EE4
npm set-script prepare &quot;husky install&quot;
npm run prepare

2.3 \u6DFB\u52A0 pre-commit \u94A9\u5B50
npx husky add .husky/pre-commit &quot;npx eslint ./&quot;

\u8FD0\u884C\u5B8C\u4E4B\u540E\u4F1A\u5728 .husky \u6587\u4EF6\u4E0B\u65B0\u589E pre-commit \u6587\u4EF6
\u82E5 pre-commit \u6587\u4EF6\u751F\u6210\u5931\u8D25\uFF0C\u53EF\u624B\u52A8\u6DFB\u52A0
#!/bin/sh
. &quot;$(dirname &quot;$0&quot;)/_/husky.sh&quot;

npx eslint ./

\u4E09\u3001\u914D\u7F6E commit \u63D0\u4EA4\u89C4\u8303


\u5B8C\u6210\u4EE5\u4E0A\u4E24\u9879\u914D\u7F6E\u5C31\u5DF2\u7ECF\u53EF\u4EE5\u5BF9\u63D0\u4EA4\u4EE3\u7801\u8FDB\u884C\u68C0\u6D4B
\u4EE5\u4E0B\u5185\u5BB9\u662F\u5BF9 commit \u63D0\u4EA4\u4FE1\u606F\u7684\u68C0\u6D4B\uFF0C\u9700\u8981\u5BF9 commit\u63D0\u4EA4\u89C4\u8303 \u6709\u4E86\u89E3
\u4F8B\u5982\uFF1A&quot;feat: \u65B0\u589E\u529F\u80FD&quot;\uFF0C&quot;fix: \u4FEE\u590Dbug&quot;


3.1 \u5B89\u88C5 commitlint
npm install --save-dev @commitlint/config-conventional @commitlint/cli

3.2 \u65B0\u589E commitlint.config.js \u6587\u4EF6
# \u6CE8\u610F\uFF1A\u751F\u6210\u7684\u6587\u4EF6\u683C\u5F0F\u7F16\u7801\u5982\u679C\u4E0D\u662FUTF-8\u7684\uFF0C\u9700\u8981\u624B\u52A8\u6539\u4E0B
echo &quot;module.exports = {extends: [&#x27;@commitlint/config-conventional&#x27;]}&quot; &gt; commitlint.config.js

3.3 \u65B0\u589E commit-msg \u94A9\u5B50
npx husky add .husky/commit-msg  &quot;npx --no -- commitlint --edit \${1}&quot;

\u8FD0\u884C\u5B8C\u4E4B\u540E\u4F1A\u5728 .husky \u6587\u4EF6\u4E0B\u65B0\u589E commit-msg \u6587\u4EF6
\u82E5 commit-msg \u6587\u4EF6\u751F\u6210\u5931\u8D25\uFF0C\u53EF\u624B\u52A8\u6DFB\u52A0
#!/bin/sh
. &quot;$(dirname &quot;$0&quot;)/_/husky.sh&quot;

npx --no-install commitlint --edit $1

`},{name:"js_1",title:"JavaScript\u4E2D\u7684\u9632\u6296\u4E0E\u8282\u6D41",date:"Jul 14, 2021",category:["JavaScript"],content:`<h2>\u9632\u6296</h2>
<p>\u8FD9\u4E2A\u51FD\u6570\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF1A\u8981\u6267\u884C\u7684\u51FD\u6570 <code>func</code> \u548C\u5EF6\u8FDF\u65F6\u95F4 <code>delay</code>\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u51FD\u6570\u3002 \u65B0\u51FD\u6570\u5728\u88AB\u8FDE\u7EED\u8C03\u7528\u7684\u4E00\u6BB5\u65F6\u95F4\u5185\u53EA\u4F1A\u6267\u884C\u4E00\u6B21\uFF0C\u76F4\u5230\u8C03\u7528\u505C\u6B62\u8D85\u8FC7 <code>delay</code> \u6BEB\u79D2\u3002</p>
<p>\u5728\u65B0\u51FD\u6570\u5185\u90E8\uFF0C\u4F7F\u7528 <code>clearTimeout</code> \u6E05\u9664\u4E0A\u4E00\u4E2A\uFF08\u5982\u679C\u6709\u7684\u8BDD\uFF09 <code>setTimeout</code> \u8BA1\u65F6\u5668\uFF0C\u5E76\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 <code>setTimeout</code> \u8BA1\u65F6\u5668\uFF0C\u4EE5\u5728\u5EF6\u8FDF\u65F6\u95F4 <code>delay</code> \u540E\u6267\u884C <code>func</code>\u3002\u7531\u4E8E\u65B0\u51FD\u6570\u6CA1\u6CD5\u8BBF\u95EE <code>timer</code> \u53D8\u91CF\uFF0C\u56E0\u6B64\u4F7F\u7528\u4E86\u95ED\u5305\u6765\u6355\u83B7\u548C\u5B58\u50A8\u8BA1\u65F6\u5668 ID\u3002</p>
<p>\u8FD9\u4E2A\u9632\u6296\u51FD\u6570\u901A\u5E38\u7528\u4E8E\u5EF6\u8FDF\u7528\u6237\u8F93\u5165\u4E8B\u4EF6\u7684\u54CD\u5E94\uFF0C\u4EE5\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u91CD\u590D API \u8BF7\u6C42\u6216\u8BA1\u7B97\u3002</p>
<pre><code class='language-html'><span class='hljs-tag'>&lt;<span class='hljs-name'>body</span>&gt;</span>
	<span class='hljs-tag'>&lt;<span class='hljs-name'>input</span> <span class='hljs-attr'>id</span>=<span class='hljs-string'>&quot;myInput&quot;</span> <span class='hljs-attr'>type</span>=<span class='hljs-string'>&quot;text&quot;</span>&gt;</span>
<span class='hljs-tag'>&lt;/<span class='hljs-name'>body</span>&gt;</span>
<span class='hljs-tag'>&lt;<span class='hljs-name'>script</span>&gt;</span><span class='language-javascript'>
	<span class='hljs-keyword'>let</span> myInput = <span class='hljs-variable language_'>document</span>.<span class='hljs-title function_'>getElementById</span>(<span class='hljs-string'>&#x27;myInput&#x27;</span>);
    myInput.<span class='hljs-property'>oninput</span> = <span class='hljs-title function_'>debounce</span>(handle, <span class='hljs-number'>500</span>);
    <span class='hljs-keyword'>function</span> <span class='hljs-title function_'>debounce</span>(<span class='hljs-params'>fn, delay</span>) {
		<span class='hljs-keyword'>let</span> timer;
		<span class='hljs-keyword'>return</span> <span class='hljs-keyword'>function</span>(<span class='hljs-params'>e</span>) {
			<span class='hljs-keyword'>if</span> (timer) {
				<span class='hljs-built_in'>clearTimeout</span>(timer)
			}
			timer = <span class='hljs-built_in'>setTimeout</span>(<span class='hljs-function'>() =&gt;</span> {
                <span class='hljs-title function_'>fn</span>(e);
			}, delay)
		}
	}
    <span class='hljs-keyword'>function</span> <span class='hljs-title function_'>handle</span>(<span class='hljs-params'>e</span>) {
		<span class='hljs-variable language_'>console</span>.<span class='hljs-title function_'>log</span>(e.<span class='hljs-property'>target</span>.<span class='hljs-property'>value</span>);
	}
</span><span class='hljs-tag'>&lt;/<span class='hljs-name'>script</span>&gt;</span>
</code></pre>
<h2>\u8282\u6D41</h2>
<p>\u8FD9\u4E2A\u51FD\u6570\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF1A\u8981\u6267\u884C\u7684\u51FD\u6570 <code>func</code> \u548C\u5EF6\u8FDF\u65F6\u95F4 <code>delay</code>\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u51FD\u6570\u3002 \u65B0\u51FD\u6570\u5728\u88AB\u8FDE\u7EED\u8C03\u7528\u7684\u4E00\u6BB5\u65F6\u95F4\u5185\u6700\u591A\u53EA\u4F1A\u6267\u884C\u4E00\u6B21\uFF0C\u76F4\u5230\u5EF6\u8FDF\u65F6\u95F4 <code>delay</code> \u8FC7\u53BB\u3002</p>
<p>\u5728\u65B0\u51FD\u6570\u5185\u90E8\uFF0C\u4F7F\u7528\u4E00\u4E2A\u53D8\u91CF <code>timer</code> \u6807\u8BB0\u5F53\u524D\u662F\u5426\u5DF2\u7ECF\u8BBE\u7F6E\u4E86\u5B9A\u65F6\u5668\u3002\u5982\u679C <code>timer</code> \u4E3A <code>null</code>\uFF0C\u5219\u8BF4\u660E\u53EF\u4EE5\u6267\u884C <code>func</code>\u3002\u5728\u6267\u884C\u5B8C <code>func</code> \u540E\uFF0C\u5C06 <code>timer</code> \u91CD\u8BBE\u4E3A <code>null</code>\u3002\u5426\u5219\uFF0C\u5982\u679C <code>timer</code> \u4E0D\u4E3A <code>null</code>\uFF0C\u5219\u8BF4\u660E\u4E0A\u4E00\u4E2A\u5B9A\u65F6\u5668\u8FD8\u672A\u89E6\u53D1\uFF0C\u4E0D\u9700\u8981\u518D\u8BBE\u7F6E\u65B0\u7684\u5B9A\u65F6\u5668\u3002\u8FD9\u5C31\u5B9E\u73B0\u4E86\u8282\u6D41\u4F5C\u7528\u3002</p>
<p>\u8FD9\u4E2A\u8282\u6D41\u51FD\u6570\u901A\u5E38\u7528\u4E8E\u51CF\u5C11\u54CD\u5E94\u9891\u7387\u8F83\u9AD8\u7684\u4E8B\u4EF6\u7684\u89E6\u53D1\u6B21\u6570\uFF0C\u4F8B\u5982\u6D4F\u89C8\u5668\u7684 <code>resize</code> \u548C <code>scroll</code> \u4E8B\u4EF6\u3002</p>
<pre><code class='language-html'><span class='hljs-tag'>&lt;<span class='hljs-name'>body</span>&gt;</span>
	<span class='hljs-tag'>&lt;<span class='hljs-name'>input</span> <span class='hljs-attr'>id</span>=<span class='hljs-string'>&quot;myInput&quot;</span> <span class='hljs-attr'>type</span>=<span class='hljs-string'>&quot;text&quot;</span>&gt;</span>
<span class='hljs-tag'>&lt;/<span class='hljs-name'>body</span>&gt;</span>
<span class='hljs-tag'>&lt;<span class='hljs-name'>script</span>&gt;</span><span class='language-javascript'>
	<span class='hljs-keyword'>let</span> myInput = <span class='hljs-variable language_'>document</span>.<span class='hljs-title function_'>getElementById</span>(<span class='hljs-string'>&#x27;myInput&#x27;</span>);
    myInput.<span class='hljs-property'>oninput</span> = <span class='hljs-title function_'>control</span>(handle, <span class='hljs-number'>500</span>);
	<span class='hljs-keyword'>function</span> <span class='hljs-title function_'>control</span>(<span class='hljs-params'>fn, delay</span>) {
		<span class='hljs-keyword'>let</span> timer;
		<span class='hljs-keyword'>return</span> <span class='hljs-keyword'>function</span>(<span class='hljs-params'>e</span>) {
			<span class='hljs-keyword'>if</span> (timer) {
				<span class='hljs-keyword'>return</span>;
			}
			timer = <span class='hljs-built_in'>setTimeout</span>(<span class='hljs-function'>() =&gt;</span> {
				<span class='hljs-title function_'>fn</span>(e);
				timer = <span class='hljs-literal'>null</span>;
			}, delay);
		}
	}
	<span class='hljs-keyword'>function</span> <span class='hljs-title function_'>handle</span>(<span class='hljs-params'>e</span>) {
		<span class='hljs-variable language_'>console</span>.<span class='hljs-title function_'>log</span>(e.<span class='hljs-property'>target</span>.<span class='hljs-property'>value</span>);
	}
</span><span class='hljs-tag'>&lt;/<span class='hljs-name'>script</span>&gt;</span>
</code></pre>
`,abstract:`\u9632\u6296
\u8FD9\u4E2A\u51FD\u6570\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF1A\u8981\u6267\u884C\u7684\u51FD\u6570 func \u548C\u5EF6\u8FDF\u65F6\u95F4 delay\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u51FD\u6570\u3002 \u65B0\u51FD\u6570\u5728\u88AB\u8FDE\u7EED\u8C03\u7528\u7684\u4E00\u6BB5\u65F6\u95F4\u5185\u53EA\u4F1A\u6267\u884C\u4E00\u6B21\uFF0C\u76F4\u5230\u8C03\u7528\u505C\u6B62\u8D85\u8FC7 delay \u6BEB\u79D2\u3002
\u5728\u65B0\u51FD\u6570\u5185\u90E8\uFF0C\u4F7F\u7528 clearTimeout \u6E05\u9664\u4E0A\u4E00\u4E2A\uFF08\u5982\u679C\u6709\u7684\u8BDD\uFF09 setTimeout \u8BA1\u65F6\u5668\uFF0C\u5E76\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 setTimeout \u8BA1\u65F6\u5668\uFF0C\u4EE5\u5728\u5EF6\u8FDF\u65F6\u95F4 delay \u540E\u6267\u884C func\u3002\u7531\u4E8E\u65B0\u51FD\u6570\u6CA1\u6CD5\u8BBF\u95EE timer \u53D8\u91CF\uFF0C\u56E0\u6B64\u4F7F\u7528\u4E86\u95ED\u5305\u6765\u6355\u83B7\u548C\u5B58\u50A8\u8BA1\u65F6\u5668 ID\u3002
\u8FD9\u4E2A\u9632\u6296\u51FD\u6570\u901A\u5E38\u7528\u4E8E\u5EF6\u8FDF\u7528\u6237\u8F93\u5165\u4E8B\u4EF6\u7684\u54CD\u5E94\uFF0C\u4EE5\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u91CD\u590D API \u8BF7\u6C42\u6216\u8BA1\u7B97\u3002
&lt;body&gt;
	&lt;input id=&quot;myInput&quot; type=&quot;text&quot;&gt;
&lt;/body&gt;
&lt;script&gt;
	let myInput = document.getElementById(&#x27;myInput&#x27;);
    myInput.oninput = debounce(handle, 500);
    function debounce(fn, delay) {
		let timer;
		return function(e) {
			if (timer) {
				clearTimeout(timer)
			}
			timer = setTimeout(() =&gt; {
                fn(e);
			}, delay)
		}
	}
    function handle(e) {
		console.log(e.target.value);
	}
&lt;/script&gt;

\u8282\u6D41
\u8FD9\u4E2A\u51FD\u6570\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF1A\u8981\u6267\u884C\u7684\u51FD\u6570 func \u548C\u5EF6\u8FDF\u65F6\u95F4 delay\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u51FD\u6570\u3002 \u65B0\u51FD\u6570\u5728\u88AB\u8FDE\u7EED\u8C03\u7528\u7684\u4E00\u6BB5\u65F6\u95F4\u5185\u6700\u591A\u53EA\u4F1A\u6267\u884C\u4E00\u6B21\uFF0C\u76F4\u5230\u5EF6\u8FDF\u65F6\u95F4 delay \u8FC7\u53BB\u3002
\u5728\u65B0\u51FD\u6570\u5185\u90E8\uFF0C\u4F7F\u7528\u4E00\u4E2A\u53D8\u91CF timer \u6807\u8BB0\u5F53\u524D\u662F\u5426\u5DF2\u7ECF\u8BBE\u7F6E\u4E86\u5B9A\u65F6\u5668\u3002\u5982\u679C timer \u4E3A null\uFF0C\u5219\u8BF4\u660E\u53EF\u4EE5\u6267\u884C func\u3002\u5728\u6267\u884C\u5B8C func \u540E\uFF0C\u5C06 timer \u91CD\u8BBE\u4E3A null\u3002\u5426\u5219\uFF0C\u5982\u679C timer \u4E0D\u4E3A null\uFF0C\u5219\u8BF4\u660E\u4E0A\u4E00\u4E2A\u5B9A\u65F6\u5668\u8FD8\u672A\u89E6\u53D1\uFF0C\u4E0D\u9700\u8981\u518D\u8BBE\u7F6E\u65B0\u7684\u5B9A\u65F6\u5668\u3002\u8FD9\u5C31\u5B9E\u73B0\u4E86\u8282\u6D41\u4F5C\u7528\u3002
\u8FD9\u4E2A\u8282\u6D41\u51FD\u6570\u901A\u5E38\u7528\u4E8E\u51CF\u5C11\u54CD\u5E94\u9891\u7387\u8F83\u9AD8\u7684\u4E8B\u4EF6\u7684\u89E6\u53D1\u6B21\u6570\uFF0C\u4F8B\u5982\u6D4F\u89C8\u5668\u7684 resize \u548C scroll \u4E8B\u4EF6\u3002
&lt;body&gt;
	&lt;input id=&quot;myInput&quot; type=&quot;text&quot;&gt;
&lt;/body&gt;
&lt;script&gt;
	let myInput = document.getElementById(&#x27;myInput&#x27;);
    myInput.oninput = control(handle, 500);
	function control(fn, delay) {
		let timer;
		return function(e) {
			if (timer) {
				return;
			}
			timer = setTimeout(() =&gt; {
				fn(e);
				timer = null;
			}, delay);
		}
	}
	function handle(e) {
		console.log(e.target.value);
	}
&lt;/script&gt;

`},{name:"js_2",title:"\u89E3\u51B3\u8DE8\u57DF\u7684\u51E0\u79CD\u65B9\u5F0F",date:"May 12, 2023",category:["JavaScript"],content:`<h2>JSONP</h2>
<p>\u5229\u7528<code>&lt;script&gt;</code>\u6807\u7B7E\u53EF\u4EE5\u8DE8\u57DF\u52A0\u8F7D\u8D44\u6E90\u7684\u7279\u6027\uFF0C\u901A\u8FC7\u52A8\u6001\u521B\u5EFA\u4E00\u4E2A<code>&lt;script&gt;</code>\u6807\u7B7E\uFF0C\u7136\u540E\u5C06\u54CD\u5E94\u6570\u636E\u4F5C\u4E3A\u56DE\u8C03\u51FD\u6570\u7684\u53C2\u6570\u8FD4\u56DE\uFF0C\u4ECE\u800C\u5B9E\u73B0\u8DE8\u57DF\u8BF7\u6C42\u8D44\u6E90\u3002\u8BE5\u65B9\u5F0F\u53EA\u652F\u6301GET\u8BF7\u6C42\u65B9\u5F0F\uFF0C\u4E14\u4E0D\u652F\u6301\u53D1\u9001POST\u7B49\u5176\u5B83\u8BF7\u6C42\u3002</p>
<p>\u5BA2\u6237\u7AEF\u4EE3\u7801\uFF1A</p>
<pre><code class='language-js'><span class='hljs-keyword'>const</span> script = <span class='hljs-variable language_'>document</span>.<span class='hljs-title function_'>createElement</span>(<span class='hljs-string'>&#x27;script&#x27;</span>);
script.<span class='hljs-property'>src</span> = <span class='hljs-string'>&#x27;http://example.com/data.js?callback=handleResponse&#x27;</span>;
<span class='hljs-variable language_'>document</span>.<span class='hljs-property'>body</span>.<span class='hljs-title function_'>appendChild</span>(script);

<span class='hljs-keyword'>function</span> <span class='hljs-title function_'>handleResponse</span>(<span class='hljs-params'>data</span>) {
  <span class='hljs-variable language_'>console</span>.<span class='hljs-title function_'>log</span>(data);
}
</code></pre>
<p>\u670D\u52A1\u7AEF\u5E94\u8FD4\u56DE\u5982\u4E0B\u683C\u5F0F\u7684\u54CD\u5E94\u6570\u636E\uFF1A</p>
<pre><code class='language-js'><span class='hljs-title function_'>handleResponse</span>({<span class='hljs-string'>&quot;status&quot;</span>: <span class='hljs-string'>&quot;ok&quot;</span>, <span class='hljs-string'>&quot;data&quot;</span>: {<span class='hljs-string'>&quot;foo&quot;</span>: <span class='hljs-string'>&quot;bar&quot;</span>}});
</code></pre>
<p>\u5BA2\u6237\u7AEF\u521B\u5EFA\u4E00\u4E2A<code>&lt;script&gt;</code>\u6807\u7B7E\u5E76\u6DFB\u52A0\u5230DOM\u4E2D\uFF0C\u6307\u5B9Asrc\u5C5E\u6027\u4E3A\u5E26\u6709callback\u53C2\u6570\u7684\u8BF7\u6C42URL\uFF0C\u670D\u52A1\u7AEF\u4F1A\u5C06\u54CD\u5E94\u6570\u636E\u4EE5\u56DE\u8C03\u51FD\u6570\u7684\u53C2\u6570\u5F62\u5F0F\u8FD4\u56DE\uFF0C\u4ECE\u800C\u5B9E\u73B0\u83B7\u53D6\u6570\u636E\u7684\u76EE\u7684\u3002\u5F53\u54CD\u5E94\u6570\u636E\u8FD4\u56DE\u540E\uFF0C\u5BA2\u6237\u7AEF\u81EA\u884C\u5B9A\u4E49\u7684\u56DE\u8C03\u51FD\u6570\u4F1A\u88AB\u89E6\u53D1\u3002</p>
<h2>CORS\uFF08\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\uFF09</h2>
<p>\u8BE5\u65B9\u5F0F\u9700\u8981\u5728\u670D\u52A1\u7AEF\u8FDB\u884C\u914D\u7F6E\uFF0C\u901A\u8FC7\u8BBE\u7F6E\u54CD\u5E94\u5934Access-Control-Allow-Origin\u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u7684\u6765\u6E90\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u8DE8\u57DF\u8BF7\u6C42\u8D44\u6E90\u3002\u6B64\u65B9\u6CD5\u66F4\u4E3A\u5B89\u5168\uFF0C\u4E14\u652F\u6301\u6240\u6709\u8BF7\u6C42\u65B9\u6CD5\u3002</p>
<p>\u5BA2\u6237\u7AEF\u4EE3\u7801\uFF1A</p>
<pre><code class='language-js'><span class='hljs-title function_'>fetch</span>(<span class='hljs-string'>&#x27;http://example.com/data.json&#x27;</span>, {
  <span class='hljs-attr'>method</span>: <span class='hljs-string'>&#x27;GET&#x27;</span>,
  <span class='hljs-attr'>mode</span>: <span class='hljs-string'>&#x27;cors&#x27;</span>,
})
.<span class='hljs-title function_'>then</span>(<span class='hljs-function'><span class='hljs-params'>response</span> =&gt;</span> response.<span class='hljs-title function_'>json</span>())
.<span class='hljs-title function_'>then</span>(<span class='hljs-function'><span class='hljs-params'>data</span> =&gt;</span> <span class='hljs-variable language_'>console</span>.<span class='hljs-title function_'>log</span>(data))
.<span class='hljs-title function_'>catch</span>(<span class='hljs-function'><span class='hljs-params'>error</span> =&gt;</span> <span class='hljs-variable language_'>console</span>.<span class='hljs-title function_'>error</span>(error));
</code></pre>
<p>\u670D\u52A1\u7AEF\u4EE3\u7801\uFF1A</p>
<pre><code class='language-js'><span class='hljs-comment'>// \u5141\u8BB8\u6307\u5B9A\u6765\u6E90\u7684\u8DE8\u57DF\u8BBF\u95EE\uFF0C\u4F8B\u5982\u5141\u8BB8\u4ECEhttp://localhost:8080\u57DF\u540D\u4E0B\u8BBF\u95EE</span>
app.<span class='hljs-title function_'>use</span>(<span class='hljs-function'>(<span class='hljs-params'>req, res, next</span>) =&gt;</span> {
  res.<span class='hljs-title function_'>setHeader</span>(<span class='hljs-string'>&#x27;Access-Control-Allow-Origin&#x27;</span>, <span class='hljs-string'>&#x27;http://localhost:8080&#x27;</span>);
  res.<span class='hljs-title function_'>setHeader</span>(<span class='hljs-string'>&#x27;Access-Control-Allow-Headers&#x27;</span>, <span class='hljs-string'>&#x27;Content-Type&#x27;</span>);
  <span class='hljs-title function_'>next</span>();
});
</code></pre>
<p>\u5BA2\u6237\u7AEF\u4F7F\u7528<code>fetch</code>\u51FD\u6570\u53D1\u9001\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u901A\u8FC7\u8BBE\u7F6E<code>mode</code>\u4E3A<code>cors</code>\u6765\u8868\u660E\u8DE8\u57DF\u65B9\u5F0F\u3002\u670D\u52A1\u7AEF\u4F7F\u7528Node.js\u7684Express\u6846\u67B6\uFF0C\u901A\u8FC7\u8BBE\u7F6E\u54CD\u5E94\u5934\u7684<code>Access-Control-Allow-Origin</code>\u5141\u8BB8\u4ECE\u6307\u5B9A\u6765\u6E90\u8DE8\u57DF\u8BBF\u95EE\u3002\u5F53\u670D\u52A1\u7AEF\u6210\u529F\u5904\u7406\u8BF7\u6C42\u5E76\u54CD\u5E94\u6570\u636E\u540E\uFF0C\u5BA2\u6237\u7AEF\u901A\u8FC7<code>response.json()</code>\u5C06\u54CD\u5E94\u4F53\u89E3\u6790\u4E3AJSON\u683C\u5F0F\u7684\u6570\u636E\u3002</p>
<h2>\u4EE3\u7406</h2>
<p>\u5728\u540C\u6E90\u57DF\u540D\u4E0B\uFF0C\u901A\u8FC7\u670D\u52A1\u7AEF\u4EE3\u7406\u8BF7\u6C42\u76EE\u6807\u7F51\u7AD9\u7684\u8D44\u6E90\uFF0C\u518D\u5C06\u54CD\u5E94\u7ED3\u679C\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u4ECE\u800C\u5B9E\u73B0\u8DE8\u57DF\u8BBF\u95EE\u76EE\u6807\u8D44\u6E90\u3002\u8BE5\u65B9\u5F0F\u76F8\u5BF9\u590D\u6742\uFF0C\u4F46\u662F\u53EF\u4EE5\u5B9E\u73B0\u6240\u6709\u8BF7\u6C42\u65B9\u6CD5\u3002</p>
<p>\u524D\u7AEF\u901A\u8FC7\u4EE3\u7406\u65B9\u5F0F\u5B9E\u73B0\u8DE8\u57DF\uFF0C\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u4E00\u4E2ANode.js\u7684Express\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u7136\u540E\u5728\u524D\u7AEF\u53D1\u9001\u8BF7\u6C42\u65F6\uFF0C\u5C06\u8BF7\u6C42\u53D1\u9001\u81F3\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u4EE3\u7406\u670D\u52A1\u5668\u518D\u5C06\u8BF7\u6C42\u8F6C\u53D1\u81F3\u76EE\u6807\u670D\u52A1\u5668\uFF0C\u83B7\u53D6\u54CD\u5E94\u540E\u518D\u8FD4\u56DE\u7ED9\u524D\u7AEF\u3002\u5177\u4F53\u6B65\u9AA4\u5982\u4E0B\uFF1A</p>
<ol>
<li>\u521B\u5EFA\u4E00\u4E2ANode.js\u7684Express\u4EE3\u7406\u670D\u52A1\u5668\u3002</li>
</ol>
<pre><code class='language-js'><span class='hljs-keyword'>const</span> express = <span class='hljs-built_in'>require</span>(<span class='hljs-string'>&#x27;express&#x27;</span>);
<span class='hljs-keyword'>const</span> http = <span class='hljs-built_in'>require</span>(<span class='hljs-string'>&#x27;http&#x27;</span>);
<span class='hljs-keyword'>const</span> app = <span class='hljs-title function_'>express</span>();

<span class='hljs-keyword'>const</span> <span class='hljs-variable constant_'>PORT</span> = <span class='hljs-number'>3000</span>;
<span class='hljs-keyword'>const</span> <span class='hljs-variable constant_'>TARGET_SERVER</span> = <span class='hljs-string'>&#x27;http://example.com&#x27;</span>;

<span class='hljs-comment'>// \u8F6C\u53D1\u8BF7\u6C42\u5230\u76EE\u6807\u670D\u52A1\u5668</span>
app.<span class='hljs-title function_'>use</span>(<span class='hljs-string'>&#x27;/&#x27;</span>, <span class='hljs-function'>(<span class='hljs-params'>req, res</span>) =&gt;</span> {
  <span class='hljs-keyword'>const</span> targetUrl = <span class='hljs-variable constant_'>TARGET_SERVER</span> + req.<span class='hljs-property'>url</span>;
  <span class='hljs-keyword'>const</span> proxy = http.<span class='hljs-title function_'>request</span>(targetUrl, <span class='hljs-function'>(<span class='hljs-params'>response</span>) =&gt;</span> {
    response.<span class='hljs-title function_'>pipe</span>(res);
  });

  req.<span class='hljs-title function_'>pipe</span>(proxy);
});

app.<span class='hljs-title function_'>listen</span>(<span class='hljs-variable constant_'>PORT</span>, <span class='hljs-function'>() =&gt;</span> {
  <span class='hljs-variable language_'>console</span>.<span class='hljs-title function_'>log</span>(<span class='hljs-string'>\`Proxy server is running on port <span class='hljs-subst'>\${PORT}</span>\`</span>);
});
</code></pre>
<p>\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u521B\u5EFA\u4E86\u4E00\u4E2A\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u8FD0\u884C\u5728<code>3000</code>\u7AEF\u53E3\u4E0A\uFF0C\u8BE5\u670D\u52A1\u5668\u53EF\u4EE5\u63A5\u6536\u4EFB\u610F\u8BF7\u6C42\u5E76\u5C06\u8BF7\u6C42\u8F6C\u53D1\u5230\u76EE\u6807\u670D\u52A1\u5668<code>http://example.com</code>\u4E0A\uFF0C\u7136\u540E\u5C06\u54CD\u5E94\u8FD4\u56DE\u5BA2\u6237\u7AEF\u3002</p>
<ol start='2'>
<li>\u5728\u524D\u7AEF\u901A\u8FC7\u4EE3\u7406\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42</li>
</ol>
<pre><code class='language-js'><span class='hljs-title function_'>fetch</span>(<span class='hljs-string'>&#x27;/api/data&#x27;</span>)
  .<span class='hljs-title function_'>then</span>(<span class='hljs-function'><span class='hljs-params'>response</span> =&gt;</span> response.<span class='hljs-title function_'>json</span>())
  .<span class='hljs-title function_'>then</span>(<span class='hljs-function'><span class='hljs-params'>data</span> =&gt;</span> <span class='hljs-variable language_'>console</span>.<span class='hljs-title function_'>log</span>(data))
  .<span class='hljs-title function_'>catch</span>(<span class='hljs-function'><span class='hljs-params'>error</span> =&gt;</span> <span class='hljs-variable language_'>console</span>.<span class='hljs-title function_'>error</span>(error));
</code></pre>
<p>\u5728\u524D\u7AEF\u4F7F\u7528fetch\u51FD\u6570\u6765\u53D1\u9001\u9700\u8981\u8DE8\u57DF\u7684\u8BF7\u6C42\uFF0C\u7531\u4E8E\u4EE3\u7406\u670D\u52A1\u5668\u76D1\u542C\u7684\u662F3000\u7AEF\u53E3\uFF0C\u6240\u4EE5\u8FD9\u91CC\u7684\u8BF7\u6C42URL\u5E94\u8BE5\u662F\u4EE3\u7406\u670D\u52A1\u5668\u7684\u8DEF\u5F84/api/data\u3002</p>
<p>\u4E0A\u8FF0\u65B9\u6CD5\u4EC5\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u4F7F\u7528\uFF0C\u800C\u4E0D\u9002\u5408\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u4F7F\u7528\uFF0C\u56E0\u4E3A\u5C06\u4F1A\u6D89\u53CA\u66F4\u591A\u7684\u5B89\u5168\u95EE\u9898\uFF0C\u4F8B\u5982\u5982\u4F55\u4FDD\u8BC1\u7528\u6237\u7684\u6570\u636E\u5904\u4E8E\u5B89\u5168\u7684\u72B6\u6001\u3002</p>
`,abstract:`JSONP
\u5229\u7528&lt;script&gt;\u6807\u7B7E\u53EF\u4EE5\u8DE8\u57DF\u52A0\u8F7D\u8D44\u6E90\u7684\u7279\u6027\uFF0C\u901A\u8FC7\u52A8\u6001\u521B\u5EFA\u4E00\u4E2A&lt;script&gt;\u6807\u7B7E\uFF0C\u7136\u540E\u5C06\u54CD\u5E94\u6570\u636E\u4F5C\u4E3A\u56DE\u8C03\u51FD\u6570\u7684\u53C2\u6570\u8FD4\u56DE\uFF0C\u4ECE\u800C\u5B9E\u73B0\u8DE8\u57DF\u8BF7\u6C42\u8D44\u6E90\u3002\u8BE5\u65B9\u5F0F\u53EA\u652F\u6301GET\u8BF7\u6C42\u65B9\u5F0F\uFF0C\u4E14\u4E0D\u652F\u6301\u53D1\u9001POST\u7B49\u5176\u5B83\u8BF7\u6C42\u3002
\u5BA2\u6237\u7AEF\u4EE3\u7801\uFF1A
const script = document.createElement(&#x27;script&#x27;);
script.src = &#x27;http://example.com/data.js?callback=handleResponse&#x27;;
document.body.appendChild(script);

function handleResponse(data) {
  console.log(data);
}

\u670D\u52A1\u7AEF\u5E94\u8FD4\u56DE\u5982\u4E0B\u683C\u5F0F\u7684\u54CD\u5E94\u6570\u636E\uFF1A
handleResponse({&quot;status&quot;: &quot;ok&quot;, &quot;data&quot;: {&quot;foo&quot;: &quot;bar&quot;}});

\u5BA2\u6237\u7AEF\u521B\u5EFA\u4E00\u4E2A&lt;script&gt;\u6807\u7B7E\u5E76\u6DFB\u52A0\u5230DOM\u4E2D\uFF0C\u6307\u5B9Asrc\u5C5E\u6027\u4E3A\u5E26\u6709callback\u53C2\u6570\u7684\u8BF7\u6C42URL\uFF0C\u670D\u52A1\u7AEF\u4F1A\u5C06\u54CD\u5E94\u6570\u636E\u4EE5\u56DE\u8C03\u51FD\u6570\u7684\u53C2\u6570\u5F62\u5F0F\u8FD4\u56DE\uFF0C\u4ECE\u800C\u5B9E\u73B0\u83B7\u53D6\u6570\u636E\u7684\u76EE\u7684\u3002\u5F53\u54CD\u5E94\u6570\u636E\u8FD4\u56DE\u540E\uFF0C\u5BA2\u6237\u7AEF\u81EA\u884C\u5B9A\u4E49\u7684\u56DE\u8C03\u51FD\u6570\u4F1A\u88AB\u89E6\u53D1\u3002
CORS\uFF08\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\uFF09
\u8BE5\u65B9\u5F0F\u9700\u8981\u5728\u670D\u52A1\u7AEF\u8FDB\u884C\u914D\u7F6E\uFF0C\u901A\u8FC7\u8BBE\u7F6E\u54CD\u5E94\u5934Access-Control-Allow-Origin\u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u7684\u6765\u6E90\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u8DE8\u57DF\u8BF7\u6C42\u8D44\u6E90\u3002\u6B64\u65B9\u6CD5\u66F4\u4E3A\u5B89\u5168\uFF0C\u4E14\u652F\u6301\u6240\u6709\u8BF7\u6C42\u65B9\u6CD5\u3002
\u5BA2\u6237\u7AEF\u4EE3\u7801\uFF1A
fetch(&#x27;http://example.com/data.json&#x27;, {
  method: &#x27;GET&#x27;,
  mode: &#x27;cors&#x27;,
})
.then(response =&gt; response.json())
.then(data =&gt; console.log(data))
.catch(error =&gt; console.error(error));

\u670D\u52A1\u7AEF\u4EE3\u7801\uFF1A
// \u5141\u8BB8\u6307\u5B9A\u6765\u6E90\u7684\u8DE8\u57DF\u8BBF\u95EE\uFF0C\u4F8B\u5982\u5141\u8BB8\u4ECEhttp://localhost:8080\u57DF\u540D\u4E0B\u8BBF\u95EE
app.use((req, res, next) =&gt; {
  res.setHeader(&#x27;Access-Control-Allow-Origin&#x27;, &#x27;http://localhost:8080&#x27;);
  res.setHeader(&#x27;Access-Control-Allow-Headers&#x27;, &#x27;Content-Type&#x27;);
  next();
});

\u5BA2\u6237\u7AEF\u4F7F\u7528fetch\u51FD\u6570\u53D1\u9001\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u901A\u8FC7\u8BBE\u7F6Emode\u4E3Acors\u6765\u8868\u660E\u8DE8\u57DF\u65B9\u5F0F\u3002\u670D\u52A1\u7AEF\u4F7F\u7528Node.js\u7684Express\u6846\u67B6\uFF0C\u901A\u8FC7\u8BBE\u7F6E\u54CD\u5E94\u5934\u7684Access-Control-Allow-Origin\u5141\u8BB8\u4ECE\u6307\u5B9A\u6765\u6E90\u8DE8\u57DF\u8BBF\u95EE\u3002\u5F53\u670D\u52A1\u7AEF\u6210\u529F\u5904\u7406\u8BF7\u6C42\u5E76\u54CD\u5E94\u6570\u636E\u540E\uFF0C\u5BA2\u6237\u7AEF\u901A\u8FC7response.json()\u5C06\u54CD\u5E94\u4F53\u89E3\u6790\u4E3AJSON\u683C\u5F0F\u7684\u6570\u636E\u3002
\u4EE3\u7406
\u5728\u540C\u6E90\u57DF\u540D\u4E0B\uFF0C\u901A\u8FC7\u670D\u52A1\u7AEF\u4EE3\u7406\u8BF7\u6C42\u76EE\u6807\u7F51\u7AD9\u7684\u8D44\u6E90\uFF0C\u518D\u5C06\u54CD\u5E94\u7ED3\u679C\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u4ECE\u800C\u5B9E\u73B0\u8DE8\u57DF\u8BBF\u95EE\u76EE\u6807\u8D44\u6E90\u3002\u8BE5\u65B9\u5F0F\u76F8\u5BF9\u590D\u6742\uFF0C\u4F46\u662F\u53EF\u4EE5\u5B9E\u73B0\u6240\u6709\u8BF7\u6C42\u65B9\u6CD5\u3002
\u524D\u7AEF\u901A\u8FC7\u4EE3\u7406\u65B9\u5F0F\u5B9E\u73B0\u8DE8\u57DF\uFF0C\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u4E00\u4E2ANode.js\u7684Express\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u7136\u540E\u5728\u524D\u7AEF\u53D1\u9001\u8BF7\u6C42\u65F6\uFF0C\u5C06\u8BF7\u6C42\u53D1\u9001\u81F3\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u4EE3\u7406\u670D\u52A1\u5668\u518D\u5C06\u8BF7\u6C42\u8F6C\u53D1\u81F3\u76EE\u6807\u670D\u52A1\u5668\uFF0C\u83B7\u53D6\u54CD\u5E94\u540E\u518D\u8FD4\u56DE\u7ED9\u524D\u7AEF\u3002\u5177\u4F53\u6B65\u9AA4\u5982\u4E0B\uFF1A

\u521B\u5EFA\u4E00\u4E2ANode.js\u7684Express\u4EE3\u7406\u670D\u52A1\u5668\u3002

const express = require(&#x27;express&#x27;);
const http = require(&#x27;http&#x27;);
const app = express();

const PORT = 3000;
const TARGET_SERVER = &#x27;http://example.com&#x27;;

// \u8F6C\u53D1\u8BF7\u6C42\u5230\u76EE\u6807\u670D\u52A1\u5668
app.use(&#x27;/&#x27;, (req, res) =&gt; {
  const targetUrl = TARGET_SERVER + req.url;
  const proxy = http.request(targetUrl, (response) =&gt; {
    response.pipe(res);
  });

  req.pipe(proxy);
});

app.listen(PORT, () =&gt; {
  console.log(\`Proxy server is running on port \${PORT}\`);
});

\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u521B\u5EFA\u4E86\u4E00\u4E2A\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u8FD0\u884C\u57283000\u7AEF\u53E3\u4E0A\uFF0C\u8BE5\u670D\u52A1\u5668\u53EF\u4EE5\u63A5\u6536\u4EFB\u610F\u8BF7\u6C42\u5E76\u5C06\u8BF7\u6C42\u8F6C\u53D1\u5230\u76EE\u6807\u670D\u52A1\u5668http://example.com\u4E0A\uFF0C\u7136\u540E\u5C06\u54CD\u5E94\u8FD4\u56DE\u5BA2\u6237\u7AEF\u3002

\u5728\u524D\u7AEF\u901A\u8FC7\u4EE3\u7406\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42

fetch(&#x27;/api/data&#x27;)
  .then(response =&gt; response.json())
  .then(data =&gt; console.log(data))
  .catch(error =&gt; console.error(error));

\u5728\u524D\u7AEF\u4F7F\u7528fetch\u51FD\u6570\u6765\u53D1\u9001\u9700\u8981\u8DE8\u57DF\u7684\u8BF7\u6C42\uFF0C\u7531\u4E8E\u4EE3\u7406\u670D\u52A1\u5668\u76D1\u542C\u7684\u662F3000\u7AEF\u53E3\uFF0C\u6240\u4EE5\u8FD9\u91CC\u7684\u8BF7\u6C42URL\u5E94\u8BE5\u662F\u4EE3\u7406\u670D\u52A1\u5668\u7684\u8DEF\u5F84/api/data\u3002
\u4E0A\u8FF0\u65B9\u6CD5\u4EC5\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u4F7F\u7528\uFF0C\u800C\u4E0D\u9002\u5408\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u4F7F\u7528\uFF0C\u56E0\u4E3A\u5C06\u4F1A\u6D89\u53CA\u66F4\u591A\u7684\u5B89\u5168\u95EE\u9898\uFF0C\u4F8B\u5982\u5982\u4F55\u4FDD\u8BC1\u7528\u6237\u7684\u6570\u636E\u5904\u4E8E\u5B89\u5168\u7684\u72B6\u6001\u3002
`},{name:"node_1",title:"\u642D\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684node\u670D\u52A1\u5668",date:"Nov 26, 2022",category:["Node"],content:`<h2>\u529F\u80FD\u4ECB\u7ECD</h2>
<ol>
<li>\u901A\u8FC7<code>mockjs</code>\u6A21\u62DF\u63A5\u53E3\u6570\u636E\u5E76\u8FD4\u56DE</li>
<li>\u63A5\u53E3\u5B9E\u73B0\u5206\u9875\u67E5\u8BE2</li>
<li>\u652F\u6301\u8DE8\u57DF</li>
</ol>
<h2>\u9879\u76EE\u642D\u5EFA</h2>
<p>1\u3001\u521D\u59CB\u5316</p>
<pre><code class='language-bash'>npm init
</code></pre>
<p>2\u3001\u5B89\u88C5\u6240\u9700\u8981\u7684\u5305</p>
<pre><code class='language-bash'>npm i express cors mockjs
</code></pre>
<p>3\u3001\u521B\u5EFA\u5165\u53E3\u6587\u4EF6<code>app.js</code></p>
<pre><code class='language-javascript'><span class='hljs-keyword'>import</span> express <span class='hljs-keyword'>from</span> <span class='hljs-string'>&#x27;express&#x27;</span>;

<span class='hljs-keyword'>const</span> app = <span class='hljs-title function_'>express</span>();

<span class='hljs-comment'>/* \u76D1\u542C\u7AEF\u53E3 */</span>
app.<span class='hljs-title function_'>listen</span>(<span class='hljs-number'>3000</span>, <span class='hljs-function'>() =&gt;</span> {
    <span class='hljs-variable language_'>console</span>.<span class='hljs-title function_'>log</span>(<span class='hljs-string'>&#x27;\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u670D\u52A1\u5DF2\u542F\u52A8\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014&#x27;</span>);
});
</code></pre>
<h2>\u63A5\u53E3\u5B9E\u73B0</h2>
<p>1\u3001\u65B0\u589E\u4E00\u4E2A<code>getList</code>\u63A5\u53E3</p>
<pre><code class='language-javascript'>app.<span class='hljs-title function_'>get</span>(<span class='hljs-string'>&quot;/getList&quot;</span>, <span class='hljs-function'>(<span class='hljs-params'>request, response</span>) =&gt;</span> {
	response.<span class='hljs-title function_'>json</span>({ <span class='hljs-attr'>code</span>: <span class='hljs-number'>200</span>, <span class='hljs-attr'>data</span>: {} });
});
</code></pre>
<p>2\u3001 <code>mockjs</code>\u6A21\u62DF\u6570\u636E</p>
<pre><code class='language-javascript'><span class='hljs-comment'>/**
 * mockjs\u6A21\u62DF\u6570\u636E
 * \u8BED\u6CD5\u89C4\u5219\u53C2\u8003\u793A\u4F8B\uFF1Ahttp://mockjs.com/examples.html
 */</span>
<span class='hljs-keyword'>import</span> <span class='hljs-title class_'>Mock</span> <span class='hljs-keyword'>from</span> <span class='hljs-string'>&quot;mockjs&quot;</span>;

<span class='hljs-keyword'>const</span> { list } = <span class='hljs-title class_'>Mock</span>.<span class='hljs-title function_'>mock</span>({
    <span class='hljs-string'>&#x27;list|60&#x27;</span>: [
        {
            <span class='hljs-attr'>id</span>: <span class='hljs-string'>&#x27;@increment(1)&#x27;</span>,
            <span class='hljs-string'>&quot;isTrue|1&quot;</span>: [ <span class='hljs-number'>1</span>, <span class='hljs-number'>0</span> ],
            <span class='hljs-attr'>describe</span>: <span class='hljs-string'>&quot;@paragraph(1, 3)&quot;</span>,
            <span class='hljs-attr'>num</span>: <span class='hljs-string'>&quot;@integer(10, 100)&quot;</span>,
            <span class='hljs-attr'>author</span>: <span class='hljs-string'>&quot;@cname&quot;</span>,
            <span class='hljs-attr'>title</span>: <span class='hljs-string'>&#x27;@ctitle&#x27;</span>,
            <span class='hljs-attr'>content</span>: <span class='hljs-string'>&#x27;@cparagraph&#x27;</span>,
            <span class='hljs-attr'>url</span>: <span class='hljs-string'>&quot;@url&quot;</span>,
            <span class='hljs-attr'>create_time</span>: <span class='hljs-string'>&#x27;@date(yyyy-MM-dd hh:mm:ss)&#x27;</span>
        }
    ],
});
</code></pre>
<p>3\u3001\u5199\u4E00\u4E2A\u5206\u9875\u7684\u65B9\u6CD5</p>
<pre><code class='language-javascript'><span class='hljs-comment'>/**
 * \u5206\u9875\u51FD\u6570
 * <span class='hljs-doctag'>@param</span> {<span class='hljs-type'>*</span>} page \u9875\u7801
 * <span class='hljs-doctag'>@param</span> {<span class='hljs-type'>*</span>} size \u6761\u6570
 * <span class='hljs-doctag'>@param</span> {<span class='hljs-type'>*</span>} list \u5217\u8868\u6570\u636E
 */</span>
<span class='hljs-keyword'>const</span> <span class='hljs-title function_'>datapager</span> = (<span class='hljs-params'>page = <span class='hljs-number'>1</span>, size = <span class='hljs-number'>10</span>, list = []</span>) =&gt; {
    <span class='hljs-keyword'>const</span> pageNum = <span class='hljs-title class_'>Number</span>(page);
    <span class='hljs-keyword'>const</span> pageSize = <span class='hljs-title class_'>Number</span>(size);
    <span class='hljs-keyword'>const</span> startIndex = (pageNum - <span class='hljs-number'>1</span>) * pageSize;
    <span class='hljs-keyword'>const</span> endIndex = startIndex + pageSize;
    <span class='hljs-keyword'>return</span> list.<span class='hljs-title function_'>slice</span>(startIndex, endIndex);
};
</code></pre>
<p>4\u3001\u63A5\u53E3\u8FD4\u56DE\u6570\u636E</p>
<pre><code class='language-javascript'>app.<span class='hljs-title function_'>get</span>(<span class='hljs-string'>&#x27;/getList&#x27;</span>, <span class='hljs-function'>(<span class='hljs-params'>request, response</span>) =&gt;</span> {
    <span class='hljs-keyword'>const</span> { page, size } = request.<span class='hljs-property'>query</span>;
    response.<span class='hljs-title function_'>json</span>({
        <span class='hljs-attr'>code</span>: <span class='hljs-number'>200</span>,
        <span class='hljs-attr'>data</span>: {
            <span class='hljs-attr'>list</span>: <span class='hljs-title function_'>datapager</span>(page, size, list),
            <span class='hljs-attr'>total</span>: list.<span class='hljs-property'>length</span>
        },
    })
});
</code></pre>
<h2>\u914D\u7F6E\u8DE8\u57DF</h2>
<p>\u5728\u6211\u4EEC\u81EA\u5DF1\u7684\u670D\u52A1\u4E0A\u53BB\u5141\u8BB8\u8DE8\u57DF\uFF0C\u4F1A\u6BD4\u5728\u9879\u76EE\u4E2D\u53BB\u89E3\u51B3\u8DE8\u57DF\u7684\u64CD\u4F5C\u66F4\u52A0\u65B9\u4FBF\uFF0C\u56E0\u4E3A\u6211\u4EEC\u642D\u5EFA\u8FD9\u4E2A\u7B80\u5355\u670D\u52A1\u5668\u7684\u76EE\u7684\u53EA\u662F\u4E3A\u4E86\u65B9\u4FBF\u81EA\u5DF1\u8C03\u8BD5</p>
<pre><code class='language-javascript'><span class='hljs-keyword'>import</span> cors <span class='hljs-keyword'>from</span> <span class='hljs-string'>&#x27;cors&#x27;</span>;

<span class='hljs-comment'>/**
 * \u542F\u7528\u6240\u6709cors\u8BF7\u6C42
 * \u8BE6\u7EC6\u914D\u7F6E\u53C2\u8003\uFF1Ahttps://github.com/expressjs/cors
 */</span>
app.<span class='hljs-title function_'>use</span>(<span class='hljs-title function_'>cors</span>({
    <span class='hljs-string'>&quot;origin&quot;</span>: <span class='hljs-literal'>true</span>,
    <span class='hljs-string'>&quot;credentials&quot;</span>: <span class='hljs-literal'>true</span>,
}));
</code></pre>
<h2>\u6E90\u7801\u5730\u5740</h2>
<p>\u5B9E\u7528\u7684\u8BDD\u5C31\u7ED9\u4E2A star
<a href='https://github.com/hai-zou/simple-services'>https://github.com/hai-zou/simple-services</a></p>
`,abstract:`\u529F\u80FD\u4ECB\u7ECD

\u901A\u8FC7mockjs\u6A21\u62DF\u63A5\u53E3\u6570\u636E\u5E76\u8FD4\u56DE
\u63A5\u53E3\u5B9E\u73B0\u5206\u9875\u67E5\u8BE2
\u652F\u6301\u8DE8\u57DF

\u9879\u76EE\u642D\u5EFA
1\u3001\u521D\u59CB\u5316
npm init

2\u3001\u5B89\u88C5\u6240\u9700\u8981\u7684\u5305
npm i express cors mockjs

3\u3001\u521B\u5EFA\u5165\u53E3\u6587\u4EF6app.js
import express from &#x27;express&#x27;;

const app = express();

/* \u76D1\u542C\u7AEF\u53E3 */
app.listen(3000, () =&gt; {
    console.log(&#x27;\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u670D\u52A1\u5DF2\u542F\u52A8\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014&#x27;);
});

\u63A5\u53E3\u5B9E\u73B0
1\u3001\u65B0\u589E\u4E00\u4E2AgetList\u63A5\u53E3
app.get(&quot;/getList&quot;, (request, response) =&gt; {
	response.json({ code: 200, data: {} });
});

2\u3001 mockjs\u6A21\u62DF\u6570\u636E
/**
 * mockjs\u6A21\u62DF\u6570\u636E
 * \u8BED\u6CD5\u89C4\u5219\u53C2\u8003\u793A\u4F8B\uFF1Ahttp://mockjs.com/examples.html
 */
import Mock from &quot;mockjs&quot;;

const { list } = Mock.mock({
    &#x27;list|60&#x27;: [
        {
            id: &#x27;@increment(1)&#x27;,
            &quot;isTrue|1&quot;: [ 1, 0 ],
            describe: &quot;@paragraph(1, 3)&quot;,
            num: &quot;@integer(10, 100)&quot;,
            author: &quot;@cname&quot;,
            title: &#x27;@ctitle&#x27;,
            content: &#x27;@cparagraph&#x27;,
            url: &quot;@url&quot;,
            create_time: &#x27;@date(yyyy-MM-dd hh:mm:ss)&#x27;
        }
    ],
});

3\u3001\u5199\u4E00\u4E2A\u5206\u9875\u7684\u65B9\u6CD5
/**
 * \u5206\u9875\u51FD\u6570
 * @param {*} page \u9875\u7801
 * @param {*} size \u6761\u6570
 * @param {*} list \u5217\u8868\u6570\u636E
 */
const datapager = (page = 1, size = 10, list = []) =&gt; {
    const pageNum = Number(page);
    const pageSize = Number(size);
    const startIndex = (pageNum - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return list.slice(startIndex, endIndex);
};

4\u3001\u63A5\u53E3\u8FD4\u56DE\u6570\u636E
app.get(&#x27;/getList&#x27;, (request, response) =&gt; {
    const { page, size } = request.query;
    response.json({
        code: 200,
        data: {
            list: datapager(page, size, list),
            total: list.length
        },
    })
});

\u914D\u7F6E\u8DE8\u57DF
\u5728\u6211\u4EEC\u81EA\u5DF1\u7684\u670D\u52A1\u4E0A\u53BB\u5141\u8BB8\u8DE8\u57DF\uFF0C\u4F1A\u6BD4\u5728\u9879\u76EE\u4E2D\u53BB\u89E3\u51B3\u8DE8\u57DF\u7684\u64CD\u4F5C\u66F4\u52A0\u65B9\u4FBF\uFF0C\u56E0\u4E3A\u6211\u4EEC\u642D\u5EFA\u8FD9\u4E2A\u7B80\u5355\u670D\u52A1\u5668\u7684\u76EE\u7684\u53EA\u662F\u4E3A\u4E86\u65B9\u4FBF\u81EA\u5DF1\u8C03\u8BD5
import cors from &#x27;cors&#x27;;

/**
 * \u542F\u7528\u6240\u6709cors\u8BF7\u6C42
 * \u8BE6\u7EC6\u914D\u7F6E\u53C2\u8003\uFF1Ahttps://github.com/expressjs/cors
 */
app.use(cors({
    &quot;origin&quot;: true,
    &quot;credentials&quot;: true,
}));

\u6E90\u7801\u5730\u5740
\u5B9E\u7528\u7684\u8BDD\u5C31\u7ED9\u4E2A star
https://github.com/hai-zou/simple-services
`},{name:"text-overflow",title:"\u6587\u672C\u8D85\u51FA\u7701\u7565",date:"May 12, 2023",category:["CSS"],content:`<h2>\u5355\u884C\u7701\u7565</h2>
<pre><code class='language-css'><span class='hljs-attribute'>overflow</span>: hidden;
<span class='hljs-attribute'>text-overflow</span>: ellipsis;
<span class='hljs-attribute'>white-space</span>: nowrap;
</code></pre>
<h2>\u591A\u884C\u7701\u7565</h2>
<pre><code class='language-css'><span class='hljs-attribute'>display</span>: -webkit-box;
<span class='hljs-attribute'>overflow</span>: hidden;
<span class='hljs-attribute'>text-overflow</span>: ellipsis;
-webkit-box-orient: vertical;
-webkit-line-clamp: <span class='hljs-number'>2</span>;  <span class='hljs-comment'>/*\u9650\u5236\u884C\u6570*/</span>
line-clamp: <span class='hljs-number'>2</span>;          <span class='hljs-comment'>/*\u9650\u5236\u884C\u6570*/</span>
</code></pre>
`,abstract:`\u5355\u884C\u7701\u7565
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;

\u591A\u884C\u7701\u7565
display: -webkit-box;
overflow: hidden;
text-overflow: ellipsis;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;  /*\u9650\u5236\u884C\u6570*/
line-clamp: 2;          /*\u9650\u5236\u884C\u6570*/

`},{name:"upload-img",title:"\u539F\u751FJS\u5B9E\u73B0\u4E0A\u4F20\u56FE\u7247\u63A7\u4EF6",date:"Aug 18, 2021",category:["JavaScript"],content:`<h3>\u4E00\u3001\u4FEE\u6539\u539F\u751F input \u6837\u5F0F</h3>
<p>html \u7ED3\u6784</p>
<pre><code class='language-html'><span class='hljs-tag'>&lt;<span class='hljs-name'>div</span> <span class='hljs-attr'>class</span>=<span class='hljs-string'>&quot;card&quot;</span>&gt;</span>
    <span class='hljs-tag'>&lt;<span class='hljs-name'>input</span> <span class='hljs-attr'>id</span>=<span class='hljs-string'>&quot;upload&quot;</span> <span class='hljs-attr'>type</span>=<span class='hljs-string'>&quot;file&quot;</span> <span class='hljs-attr'>accept</span>=<span class='hljs-string'>&quot;.jpg&quot;</span> /&gt;</span>
    <span class='hljs-tag'>&lt;<span class='hljs-name'>div</span> <span class='hljs-attr'>class</span>=<span class='hljs-string'>&quot;view&quot;</span>&gt;</span>
        <span class='hljs-comment'>&lt;!-- \u4E0A\u4F20\u6210\u529F\u540E --&gt;</span>
        <span class='hljs-tag'>&lt;<span class='hljs-name'>div</span> <span class='hljs-attr'>id</span>=<span class='hljs-string'>&quot;imgContainer&quot;</span> <span class='hljs-attr'>class</span>=<span class='hljs-string'>&quot;img-container&quot;</span>&gt;</span>
            <span class='hljs-tag'>&lt;<span class='hljs-name'>img</span> <span class='hljs-attr'>id</span>=<span class='hljs-string'>&quot;img&quot;</span> /&gt;</span>
            <span class='hljs-comment'>&lt;!-- \u9F20\u6807\u79FB\u5165\u5C55\u793A \u67E5\u770B \u4E0E \u5220\u9664 \u64CD\u4F5C --&gt;</span>
            <span class='hljs-tag'>&lt;<span class='hljs-name'>div</span> <span class='hljs-attr'>class</span>=<span class='hljs-string'>&quot;img-mask&quot;</span>&gt;</span>
                <span class='hljs-tag'>&lt;<span class='hljs-name'>span</span> <span class='hljs-attr'>id</span>=<span class='hljs-string'>&quot;showImg&quot;</span>&gt;</span>\u67E5\u770B<span class='hljs-tag'>&lt;/<span class='hljs-name'>span</span>&gt;</span>
                <span class='hljs-tag'>&lt;<span class='hljs-name'>span</span> <span class='hljs-attr'>id</span>=<span class='hljs-string'>&quot;delImg&quot;</span>&gt;</span>\u5220\u9664<span class='hljs-tag'>&lt;/<span class='hljs-name'>span</span>&gt;</span>
            <span class='hljs-tag'>&lt;/<span class='hljs-name'>div</span>&gt;</span>
        <span class='hljs-tag'>&lt;/<span class='hljs-name'>div</span>&gt;</span>
        <span class='hljs-comment'>&lt;!-- \u4E0A\u4F20\u6210\u529F\u524D --&gt;</span>
        <span class='hljs-tag'>&lt;<span class='hljs-name'>span</span> <span class='hljs-attr'>id</span>=<span class='hljs-string'>&quot;icon&quot;</span>&gt;</span>+<span class='hljs-tag'>&lt;/<span class='hljs-name'>span</span>&gt;</span>
    <span class='hljs-tag'>&lt;/<span class='hljs-name'>div</span>&gt;</span>
<span class='hljs-tag'>&lt;/<span class='hljs-name'>div</span>&gt;</span>
</code></pre>
<p>css \u6837\u5F0F</p>
<pre><code class='language-css'><span class='hljs-selector-class'>.card</span> {
    <span class='hljs-attribute'>position</span>: relative;
    <span class='hljs-attribute'>width</span>: <span class='hljs-number'>200px</span>;
    <span class='hljs-attribute'>height</span>: <span class='hljs-number'>140px</span>;
    <span class='hljs-attribute'>padding</span>: <span class='hljs-number'>5px</span>;
    <span class='hljs-attribute'>margin-right</span>: <span class='hljs-number'>20px</span>;
    <span class='hljs-attribute'>border</span>: <span class='hljs-number'>1px</span> dashed <span class='hljs-number'>#d9d9d9</span>;
    <span class='hljs-attribute'>border-radius</span>: <span class='hljs-number'>6px</span>;
    <span class='hljs-attribute'>margin</span>: <span class='hljs-number'>300px</span> auto;
}

<span class='hljs-selector-class'>.card</span> <span class='hljs-selector-tag'>input</span> {
    <span class='hljs-attribute'>position</span>: absolute;
    <span class='hljs-attribute'>left</span>: <span class='hljs-number'>0</span>;
    <span class='hljs-attribute'>top</span>: <span class='hljs-number'>0</span>;
    <span class='hljs-attribute'>width</span>: <span class='hljs-number'>100%</span>;
    <span class='hljs-attribute'>height</span>: <span class='hljs-number'>100%</span>;
    <span class='hljs-attribute'>opacity</span>: <span class='hljs-number'>0</span>;
    <span class='hljs-attribute'>cursor</span>: pointer;
}

<span class='hljs-selector-class'>.card</span> <span class='hljs-selector-class'>.view</span> {
    <span class='hljs-attribute'>width</span>: <span class='hljs-number'>100%</span>;
    <span class='hljs-attribute'>height</span>: <span class='hljs-number'>100%</span>;
    <span class='hljs-attribute'>display</span>: flex;
    <span class='hljs-attribute'>justify-content</span>: center;
    <span class='hljs-attribute'>align-items</span>: center;
}

<span class='hljs-selector-class'>.card</span> <span class='hljs-selector-class'>.view</span> <span class='hljs-selector-id'>#icon</span> {
    <span class='hljs-attribute'>display</span>: inline-block;
    <span class='hljs-attribute'>font-size</span>: <span class='hljs-number'>30px</span>;
}

<span class='hljs-selector-class'>.card</span> <span class='hljs-selector-class'>.view</span> <span class='hljs-selector-class'>.img-container</span> {
    <span class='hljs-attribute'>position</span>: absolute;
    <span class='hljs-attribute'>left</span>: <span class='hljs-number'>0</span>;
    <span class='hljs-attribute'>top</span>: <span class='hljs-number'>0</span>;
    <span class='hljs-attribute'>width</span>: <span class='hljs-number'>100%</span>;
    <span class='hljs-attribute'>height</span>: <span class='hljs-number'>100%</span>;
    <span class='hljs-attribute'>display</span>: none;
}

<span class='hljs-selector-class'>.img-container</span> <span class='hljs-selector-tag'>img</span> {
    <span class='hljs-attribute'>width</span>: <span class='hljs-number'>100%</span>;
    <span class='hljs-attribute'>height</span>: <span class='hljs-number'>100%</span>;
}

<span class='hljs-selector-class'>.img-container</span> <span class='hljs-selector-class'>.img-mask</span> {
    <span class='hljs-attribute'>position</span>: absolute;
    <span class='hljs-attribute'>left</span>: <span class='hljs-number'>0</span>;
    <span class='hljs-attribute'>top</span>: <span class='hljs-number'>0</span>;
    <span class='hljs-attribute'>width</span>: <span class='hljs-number'>100%</span>;
    <span class='hljs-attribute'>height</span>: <span class='hljs-number'>100%</span>;
    <span class='hljs-attribute'>opacity</span>: <span class='hljs-number'>0</span>;
    <span class='hljs-attribute'>background</span>: <span class='hljs-built_in'>rgba</span>(<span class='hljs-number'>0</span>, <span class='hljs-number'>0</span>, <span class='hljs-number'>0</span>, .<span class='hljs-number'>3</span>);
    <span class='hljs-attribute'>transition</span>: all .<span class='hljs-number'>5s</span> ease;
    <span class='hljs-attribute'>display</span>: flex;
    <span class='hljs-attribute'>justify-content</span>: center;
    <span class='hljs-attribute'>align-items</span>: center;
}

<span class='hljs-selector-class'>.img-container</span><span class='hljs-selector-pseudo'>:hover</span> <span class='hljs-selector-class'>.img-mask</span> {
    <span class='hljs-attribute'>opacity</span>: <span class='hljs-number'>1</span>;
}

<span class='hljs-selector-class'>.img-mask</span> <span class='hljs-selector-tag'>span</span> {
    <span class='hljs-attribute'>color</span>: <span class='hljs-number'>#fff</span>;
    <span class='hljs-attribute'>margin</span>: <span class='hljs-number'>0</span> <span class='hljs-number'>10px</span>;
    <span class='hljs-attribute'>cursor</span>: pointer;
}
</code></pre>
<p>\u6548\u679C\u5C55\u793A</p>
<p><img src='/article/upload-img_1.png' alt=''></p>
<h3>\u4E8C\u3001\u4E0A\u4F20\u56FE\u7247\u5E76\u5C55\u793A</h3>
<p>\u76D1\u542C input \u7684 change \u4E8B\u4EF6\uFF0C\u56FE\u7247\u4E0A\u4F20\u6210\u529F\u540E\u521B\u5EFA URL</p>
<pre><code class='language-javascript'>&lt;script&gt;
    <span class='hljs-keyword'>const</span> upload = <span class='hljs-variable language_'>document</span>.<span class='hljs-title function_'>getElementById</span>(<span class='hljs-string'>&#x27;upload&#x27;</span>);
    <span class='hljs-keyword'>const</span> imgContainer = <span class='hljs-variable language_'>document</span>.<span class='hljs-title function_'>getElementById</span>(<span class='hljs-string'>&#x27;imgContainer&#x27;</span>);
    <span class='hljs-keyword'>const</span> img = <span class='hljs-variable language_'>document</span>.<span class='hljs-title function_'>getElementById</span>(<span class='hljs-string'>&#x27;img&#x27;</span>);
    <span class='hljs-keyword'>const</span> icon = <span class='hljs-variable language_'>document</span>.<span class='hljs-title function_'>getElementById</span>(<span class='hljs-string'>&#x27;icon&#x27;</span>);

    <span class='hljs-keyword'>let</span> imgUrl = <span class='hljs-string'>&#x27;&#x27;</span>;
    <span class='hljs-comment'>// \u56FE\u7247\u4E0A\u4F20\u6210\u529F\u540E\u521B\u5EFA URL</span>
    upload.<span class='hljs-property'>onchange</span> = <span class='hljs-keyword'>function</span> (<span class='hljs-params'>value</span>) {
        <span class='hljs-keyword'>const</span> fileList = value.<span class='hljs-property'>target</span>.<span class='hljs-property'>files</span>;
        <span class='hljs-keyword'>if</span> (fileList.<span class='hljs-property'>length</span>) {
            imgContainer.<span class='hljs-property'>style</span>.<span class='hljs-property'>display</span> = <span class='hljs-string'>&#x27;block&#x27;</span>;
            icon.<span class='hljs-property'>style</span>.<span class='hljs-property'>display</span> = <span class='hljs-string'>&#x27;none&#x27;</span>;
            imgUrl = <span class='hljs-variable language_'>window</span>.<span class='hljs-property'>URL</span>.<span class='hljs-title function_'>createObjectURL</span>(fileList[<span class='hljs-number'>0</span>]);
            img.<span class='hljs-property'>src</span> = imgUrl;
        }
    }
&lt;script&gt;
</code></pre>
<p>\u4E0A\u4F20\u6210\u529F\u540E\u5C55\u793A</p>
<p><img src='/article/upload-img_2.png' alt=''>
<img src='/article/upload-img_3.png' alt=''></p>
<h3>\u4E09\u3001\u5B9E\u73B0\u56FE\u7247\u9884\u89C8</h3>
<p>\u5199\u4E00\u4E2A modal \u6846</p>
<pre><code class='language-html'><span class='hljs-comment'>&lt;!-- \u9884\u89C8\u56FE\u7247\u7684 modal \u6846 --&gt;</span>
<span class='hljs-tag'>&lt;<span class='hljs-name'>div</span> <span class='hljs-attr'>id</span>=<span class='hljs-string'>&quot;modal&quot;</span>&gt;</span>
    <span class='hljs-tag'>&lt;<span class='hljs-name'>span</span> <span class='hljs-attr'>id</span>=<span class='hljs-string'>&quot;closeIcon&quot;</span>&gt;</span>\u5173\u95ED<span class='hljs-tag'>&lt;/<span class='hljs-name'>span</span>&gt;</span>
    <span class='hljs-tag'>&lt;<span class='hljs-name'>div</span> <span class='hljs-attr'>class</span>=<span class='hljs-string'>&quot;content&quot;</span>&gt;</span>
        <span class='hljs-tag'>&lt;<span class='hljs-name'>img</span> <span class='hljs-attr'>id</span>=<span class='hljs-string'>&quot;modalImg&quot;</span>&gt;</span>
    <span class='hljs-tag'>&lt;/<span class='hljs-name'>div</span>&gt;</span>
<span class='hljs-tag'>&lt;/<span class='hljs-name'>div</span>&gt;</span>
</code></pre>
<p>modal \u6837\u5F0F</p>
<pre><code class='language-css'><span class='hljs-comment'>/* modal \u6837\u5F0F */</span>
<span class='hljs-selector-id'>#modal</span> {
    <span class='hljs-attribute'>position</span>: fixed;
    <span class='hljs-attribute'>top</span>: <span class='hljs-number'>50%</span>;
    <span class='hljs-attribute'>left</span>: <span class='hljs-number'>50%</span>;
    <span class='hljs-attribute'>transform</span>: <span class='hljs-built_in'>translate</span>(-<span class='hljs-number'>50%</span>, -<span class='hljs-number'>50%</span>);
    <span class='hljs-attribute'>width</span>: <span class='hljs-number'>0</span>;
    <span class='hljs-attribute'>height</span>: <span class='hljs-number'>0</span>;
    <span class='hljs-attribute'>box-shadow</span>: <span class='hljs-number'>0</span> <span class='hljs-number'>0</span> <span class='hljs-number'>10px</span> <span class='hljs-number'>#d9d9d9</span>;
    <span class='hljs-attribute'>background</span>: <span class='hljs-built_in'>rgba</span>(<span class='hljs-number'>0</span>, <span class='hljs-number'>0</span>, <span class='hljs-number'>0</span>, .<span class='hljs-number'>3</span>);
    <span class='hljs-comment'>/* transition: all .1s ease-in-out; */</span>
    <span class='hljs-attribute'>overflow</span>: hidden;
}

<span class='hljs-selector-id'>#modal</span> <span class='hljs-selector-class'>.content</span> {
    <span class='hljs-attribute'>box-sizing</span>: border-box;
    <span class='hljs-attribute'>width</span>: <span class='hljs-number'>100%</span>;
    <span class='hljs-attribute'>height</span>: <span class='hljs-number'>100%</span>;
    <span class='hljs-attribute'>padding</span>: <span class='hljs-number'>45px</span> <span class='hljs-number'>20px</span> <span class='hljs-number'>20px</span>;
    <span class='hljs-attribute'>display</span>: flex;
    <span class='hljs-attribute'>justify-content</span>: center;
}

<span class='hljs-selector-id'>#modal</span> <span class='hljs-selector-id'>#modalImg</span> {
    <span class='hljs-attribute'>height</span>: <span class='hljs-number'>100%</span>;
}

<span class='hljs-selector-id'>#modal</span> <span class='hljs-selector-id'>#closeIcon</span> {
    <span class='hljs-attribute'>position</span>: absolute;
    <span class='hljs-attribute'>top</span>: <span class='hljs-number'>10px</span>;
    <span class='hljs-attribute'>right</span>: <span class='hljs-number'>10px</span>;
    <span class='hljs-attribute'>cursor</span>: pointer;
}
</code></pre>
<p>\u7136\u540E\u83B7\u53D6\u5143\u7D20, \u76D1\u542C\u70B9\u51FB\u4E8B\u4EF6</p>
<pre><code class='language-javascript'><span class='hljs-comment'>/* ...\u63A5\u4EE5\u4E0A\u4EE3\u7801 */</span>
<span class='hljs-keyword'>const</span> showImg = <span class='hljs-variable language_'>document</span>.<span class='hljs-title function_'>getElementById</span>(<span class='hljs-string'>&#x27;showImg&#x27;</span>);
<span class='hljs-keyword'>const</span> delImg = <span class='hljs-variable language_'>document</span>.<span class='hljs-title function_'>getElementById</span>(<span class='hljs-string'>&#x27;delImg&#x27;</span>);
<span class='hljs-keyword'>const</span> modal = <span class='hljs-variable language_'>document</span>.<span class='hljs-title function_'>getElementById</span>(<span class='hljs-string'>&#x27;modal&#x27;</span>);
<span class='hljs-keyword'>const</span> modalImg = <span class='hljs-variable language_'>document</span>.<span class='hljs-title function_'>getElementById</span>(<span class='hljs-string'>&#x27;modalImg&#x27;</span>);
<span class='hljs-keyword'>const</span> closeIcon = <span class='hljs-variable language_'>document</span>.<span class='hljs-title function_'>getElementById</span>(<span class='hljs-string'>&#x27;closeIcon&#x27;</span>);

<span class='hljs-comment'>// \u70B9\u51FB\u9884\u89C8\u56FE\u7247</span>
showImg.<span class='hljs-property'>onclick</span> = <span class='hljs-keyword'>function</span> (<span class='hljs-params'></span>) {
    modal.<span class='hljs-property'>style</span>.<span class='hljs-property'>width</span> = <span class='hljs-string'>&#x27;100%&#x27;</span>;
    modal.<span class='hljs-property'>style</span>.<span class='hljs-property'>height</span> = <span class='hljs-string'>&#x27;100%&#x27;</span>;
    modalImg.<span class='hljs-property'>src</span> = imgUrl;
}

<span class='hljs-comment'>// \u5173\u95ED modal \u6846</span>
closeIcon.<span class='hljs-property'>onclick</span> = <span class='hljs-keyword'>function</span> (<span class='hljs-params'></span>) {
    modal.<span class='hljs-property'>style</span>.<span class='hljs-property'>width</span> = <span class='hljs-string'>&#x27;0&#x27;</span>;
    modal.<span class='hljs-property'>style</span>.<span class='hljs-property'>height</span> = <span class='hljs-string'>&#x27;0&#x27;</span>;
    modalImg.<span class='hljs-property'>src</span> = <span class='hljs-string'>&#x27;&#x27;</span>;
}

<span class='hljs-comment'>// \u5220\u9664\u4E0A\u4F20\u7684\u56FE\u7247</span>
delImg.<span class='hljs-property'>onclick</span> = <span class='hljs-keyword'>function</span> (<span class='hljs-params'></span>) {
    upload.<span class='hljs-property'>value</span> = <span class='hljs-string'>&#x27;&#x27;</span>;
    imgUrl = <span class='hljs-string'>&#x27;&#x27;</span>;
    icon.<span class='hljs-property'>style</span>.<span class='hljs-property'>display</span> = <span class='hljs-string'>&#x27;block&#x27;</span>;
    imgContainer.<span class='hljs-property'>style</span>.<span class='hljs-property'>display</span> = <span class='hljs-string'>&#x27;none&#x27;</span>;
}
</code></pre>
<p>\u9884\u89C8\u6548\u679C\u56FE</p>
<p><img src='/article/upload-img_4.png' alt=''></p>
`,abstract:`\u4E00\u3001\u4FEE\u6539\u539F\u751F input \u6837\u5F0F
html \u7ED3\u6784
&lt;div class=&quot;card&quot;&gt;
    &lt;input id=&quot;upload&quot; type=&quot;file&quot; accept=&quot;.jpg&quot; /&gt;
    &lt;div class=&quot;view&quot;&gt;
        &lt;!-- \u4E0A\u4F20\u6210\u529F\u540E --&gt;
        &lt;div id=&quot;imgContainer&quot; class=&quot;img-container&quot;&gt;
            &lt;img id=&quot;img&quot; /&gt;
            &lt;!-- \u9F20\u6807\u79FB\u5165\u5C55\u793A \u67E5\u770B \u4E0E \u5220\u9664 \u64CD\u4F5C --&gt;
            &lt;div class=&quot;img-mask&quot;&gt;
                &lt;span id=&quot;showImg&quot;&gt;\u67E5\u770B&lt;/span&gt;
                &lt;span id=&quot;delImg&quot;&gt;\u5220\u9664&lt;/span&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;!-- \u4E0A\u4F20\u6210\u529F\u524D --&gt;
        &lt;span id=&quot;icon&quot;&gt;+&lt;/span&gt;
    &lt;/div&gt;
&lt;/div&gt;

css \u6837\u5F0F
.card {
    position: relative;
    width: 200px;
    height: 140px;
    padding: 5px;
    margin-right: 20px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    margin: 300px auto;
}

.card input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
}

.card .view {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card .view #icon {
    display: inline-block;
    font-size: 30px;
}

.card .view .img-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: none;
}

.img-container img {
    width: 100%;
    height: 100%;
}

.img-container .img-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: rgba(0, 0, 0, .3);
    transition: all .5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-container:hover .img-mask {
    opacity: 1;
}

.img-mask span {
    color: #fff;
    margin: 0 10px;
    cursor: pointer;
}

\u6548\u679C\u5C55\u793A

\u4E8C\u3001\u4E0A\u4F20\u56FE\u7247\u5E76\u5C55\u793A
\u76D1\u542C input \u7684 change \u4E8B\u4EF6\uFF0C\u56FE\u7247\u4E0A\u4F20\u6210\u529F\u540E\u521B\u5EFA URL
&lt;script&gt;
    const upload = document.getElementById(&#x27;upload&#x27;);
    const imgContainer = document.getElementById(&#x27;imgContainer&#x27;);
    const img = document.getElementById(&#x27;img&#x27;);
    const icon = document.getElementById(&#x27;icon&#x27;);

    let imgUrl = &#x27;&#x27;;
    // \u56FE\u7247\u4E0A\u4F20\u6210\u529F\u540E\u521B\u5EFA URL
    upload.onchange = function (value) {
        const fileList = value.target.files;
        if (fileList.length) {
            imgContainer.style.display = &#x27;block&#x27;;
            icon.style.display = &#x27;none&#x27;;
            imgUrl = window.URL.createObjectURL(fileList[0]);
            img.src = imgUrl;
        }
    }
&lt;script&gt;

\u4E0A\u4F20\u6210\u529F\u540E\u5C55\u793A


\u4E09\u3001\u5B9E\u73B0\u56FE\u7247\u9884\u89C8
\u5199\u4E00\u4E2A modal \u6846
&lt;!-- \u9884\u89C8\u56FE\u7247\u7684 modal \u6846 --&gt;
&lt;div id=&quot;modal&quot;&gt;
    &lt;span id=&quot;closeIcon&quot;&gt;\u5173\u95ED&lt;/span&gt;
    &lt;div class=&quot;content&quot;&gt;
        &lt;img id=&quot;modalImg&quot;&gt;
    &lt;/div&gt;
&lt;/div&gt;

modal \u6837\u5F0F
/* modal \u6837\u5F0F */
#modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    box-shadow: 0 0 10px #d9d9d9;
    background: rgba(0, 0, 0, .3);
    /* transition: all .1s ease-in-out; */
    overflow: hidden;
}

#modal .content {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 45px 20px 20px;
    display: flex;
    justify-content: center;
}

#modal #modalImg {
    height: 100%;
}

#modal #closeIcon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}

\u7136\u540E\u83B7\u53D6\u5143\u7D20, \u76D1\u542C\u70B9\u51FB\u4E8B\u4EF6
/* ...\u63A5\u4EE5\u4E0A\u4EE3\u7801 */
const showImg = document.getElementById(&#x27;showImg&#x27;);
const delImg = document.getElementById(&#x27;delImg&#x27;);
const modal = document.getElementById(&#x27;modal&#x27;);
const modalImg = document.getElementById(&#x27;modalImg&#x27;);
const closeIcon = document.getElementById(&#x27;closeIcon&#x27;);

// \u70B9\u51FB\u9884\u89C8\u56FE\u7247
showImg.onclick = function () {
    modal.style.width = &#x27;100%&#x27;;
    modal.style.height = &#x27;100%&#x27;;
    modalImg.src = imgUrl;
}

// \u5173\u95ED modal \u6846
closeIcon.onclick = function () {
    modal.style.width = &#x27;0&#x27;;
    modal.style.height = &#x27;0&#x27;;
    modalImg.src = &#x27;&#x27;;
}

// \u5220\u9664\u4E0A\u4F20\u7684\u56FE\u7247
delImg.onclick = function () {
    upload.value = &#x27;&#x27;;
    imgUrl = &#x27;&#x27;;
    icon.style.display = &#x27;block&#x27;;
    imgContainer.style.display = &#x27;none&#x27;;
}

\u9884\u89C8\u6548\u679C\u56FE

`},{name:"vue_1",title:"Vue\u9879\u76EE\u5982\u4F55\u914D\u7F6E\u56FD\u9645\u5316",date:"Aug 15, 2021",category:["Vue"],content:`<blockquote>
<p>\u672C\u6587\u4F7F\u7528\u7684\u662F vue@3 + vue-i18n@9 \u7684\u5199\u6CD5</p>
</blockquote>
<h2>\u5B89\u88C5vue-i18n</h2>
<pre><code class='language-javascript'>npm install vue-i18n@<span class='hljs-number'>9</span> --save
</code></pre>
<h2>\u65B0\u5EFAi18n\u6587\u4EF6</h2>
<ol>
<li>
<p>\u6587\u4EF6\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A<div><img src='/article/vue_1_1.png' alt='\u76EE\u5F55\u7ED3\u6784\u56FE'></div></p>
</li>
<li>
<p>\u5728 index.js \u4E0B\u521B\u5EFA i18n \u5B9E\u4F8B</p>
</li>
</ol>
<pre><code class='language-javascript'><span class='hljs-keyword'>import</span> { createI18n } <span class='hljs-keyword'>from</span> <span class='hljs-string'>&#x27;vue-i18n/index&#x27;</span>;
<span class='hljs-keyword'>import</span> zh <span class='hljs-keyword'>from</span> <span class='hljs-string'>&#x27;./lang/zh&#x27;</span>;
<span class='hljs-keyword'>import</span> en <span class='hljs-keyword'>from</span> <span class='hljs-string'>&#x27;./lang/en&#x27;</span>;

<span class='hljs-keyword'>const</span> i18n = <span class='hljs-title function_'>createI18n</span>({
    <span class='hljs-comment'>// \u8BBE\u7F6E\u5730\u533A</span>
    <span class='hljs-attr'>locale</span>: <span class='hljs-variable language_'>localStorage</span>.<span class='hljs-title function_'>getItem</span>(<span class='hljs-string'>&#x27;language&#x27;</span>) || <span class='hljs-string'>&#x27;zh&#x27;</span>,
    <span class='hljs-comment'>// \u8BBE\u7F6E\u8BED\u8A00\u73AF\u5883\u4FE1\u606F</span>
    <span class='hljs-attr'>messages</span>: {
        zh,
        en
    },
});

<span class='hljs-keyword'>export</span> <span class='hljs-keyword'>default</span> i18n;
</code></pre>
<ol start='3'>
<li>\u7136\u540E\u5206\u522B\u521B\u5EFA zh.js \u548C en.js \u7684\u8BED\u8A00\u5305</li>
</ol>
<pre><code class='language-javascript'><span class='hljs-comment'>// zh.js</span>
<span class='hljs-keyword'>export</span> <span class='hljs-keyword'>default</span> {
    <span class='hljs-attr'>message</span>: {
        <span class='hljs-attr'>resume</span>: <span class='hljs-string'>&#x27;\u751F\u6D3B\u4E0D\u6B62\u773C\u524D\u7684\u82DF\u4E14&#x27;</span>
    }
}
</code></pre>
<pre><code class='language-javascript'><span class='hljs-comment'>// en.js</span>
<span class='hljs-keyword'>export</span> <span class='hljs-keyword'>default</span> {
    <span class='hljs-attr'>message</span>: {
        <span class='hljs-attr'>resume</span>: <span class='hljs-string'>&#x27;There is more to life than subsistence&#x27;</span>
    }
}
</code></pre>
<h2>\u5728main.js\u4E2D\u5F15\u5165</h2>
<pre><code class='language-javascript'><span class='hljs-keyword'>import</span> { createApp } <span class='hljs-keyword'>from</span> <span class='hljs-string'>&#x27;vue&#x27;</span>
<span class='hljs-keyword'>import</span> <span class='hljs-title class_'>App</span> <span class='hljs-keyword'>from</span> <span class='hljs-string'>&#x27;./App.vue&#x27;</span>
<span class='hljs-keyword'>import</span> i18n <span class='hljs-keyword'>from</span> <span class='hljs-string'>&#x27;./i18n&#x27;</span>;

<span class='hljs-keyword'>const</span> app = <span class='hljs-title function_'>createApp</span>(<span class='hljs-title class_'>App</span>);
app.<span class='hljs-title function_'>use</span>(i18n);

app.<span class='hljs-title function_'>mount</span>(<span class='hljs-string'>&#x27;#app&#x27;</span>);
</code></pre>
<h2>\u5728\u6A21\u677F\u4E2D\u4F7F\u7528</h2>
<ol>
<li>\u5728\u6A21\u677F\u4E2D\u4F7F\u7528</li>
</ol>
<pre><code class='language-javascript'>&lt;div <span class='hljs-keyword'>class</span>=<span class='hljs-string'>&quot;content&quot;</span>&gt;
    {{ $t(<span class='hljs-string'>&#x27;message.resume&#x27;</span>) }}
&lt;/div&gt;
</code></pre>
<ol start='2'>
<li>\u5199\u4E00\u4E2A\u5207\u6362\u8BED\u8A00\u7684\u65B9\u6CD5</li>
</ol>
<pre><code class='language-javascript'>&lt;template&gt;
    <span class='language-xml'><span class='hljs-tag'>&lt;<span class='hljs-name'>button</span> @<span class='hljs-attr'>click</span>=<span class='hljs-string'>&quot;toggle&quot;</span>&gt;</span>\u5207\u6362<span class='hljs-tag'>&lt;/<span class='hljs-name'>button</span>&gt;</span></span>
&lt;/template&gt;

<span class='language-xml'><span class='hljs-tag'>&lt;<span class='hljs-name'>script</span>&gt;</span><span class='language-javascript'>
<span class='hljs-keyword'>export</span> <span class='hljs-keyword'>default</span> {
    <span class='hljs-attr'>methods</span>: {
        <span class='hljs-title function_'>toggle</span>(<span class='hljs-params'></span>) {
            <span class='hljs-keyword'>const</span> curLang = <span class='hljs-variable language_'>localStorage</span>.<span class='hljs-title function_'>getItem</span>(<span class='hljs-string'>&#x27;language&#x27;</span>);
            <span class='hljs-keyword'>const</span> setLang = curLang == <span class='hljs-string'>&#x27;zh&#x27;</span> ? <span class='hljs-string'>&#x27;en&#x27;</span> : <span class='hljs-string'>&#x27;zh&#x27;</span>;
            <span class='hljs-variable language_'>localStorage</span>.<span class='hljs-title function_'>setItem</span>(<span class='hljs-string'>&#x27;language&#x27;</span>, setLang);
            location.<span class='hljs-title function_'>reload</span>();
        }
    }
}
</span><span class='hljs-tag'>&lt;/<span class='hljs-name'>script</span>&gt;</span></span>
</code></pre>
<h2>\u4F7F\u7528\u6548\u679C</h2>
<p><img src='/article/vue_1_2.png' alt='\u6548\u679C\u56FE1'></p>
<p><img src='/article/vue_1_3.png' alt='\u6548\u679C\u56FE2'></p>
`,abstract:`
\u672C\u6587\u4F7F\u7528\u7684\u662F vue@3 + vue-i18n@9 \u7684\u5199\u6CD5

\u5B89\u88C5vue-i18n
npm install vue-i18n@9 --save

\u65B0\u5EFAi18n\u6587\u4EF6


\u6587\u4EF6\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A


\u5728 index.js \u4E0B\u521B\u5EFA i18n \u5B9E\u4F8B


import { createI18n } from &#x27;vue-i18n/index&#x27;;
import zh from &#x27;./lang/zh&#x27;;
import en from &#x27;./lang/en&#x27;;

const i18n = createI18n({
    // \u8BBE\u7F6E\u5730\u533A
    locale: localStorage.getItem(&#x27;language&#x27;) || &#x27;zh&#x27;,
    // \u8BBE\u7F6E\u8BED\u8A00\u73AF\u5883\u4FE1\u606F
    messages: {
        zh,
        en
    },
});

export default i18n;


\u7136\u540E\u5206\u522B\u521B\u5EFA zh.js \u548C en.js \u7684\u8BED\u8A00\u5305

// zh.js
export default {
    message: {
        resume: &#x27;\u751F\u6D3B\u4E0D\u6B62\u773C\u524D\u7684\u82DF\u4E14&#x27;
    }
}

// en.js
export default {
    message: {
        resume: &#x27;There is more to life than subsistence&#x27;
    }
}

\u5728main.js\u4E2D\u5F15\u5165
import { createApp } from &#x27;vue&#x27;
import App from &#x27;./App.vue&#x27;
import i18n from &#x27;./i18n&#x27;;

const app = createApp(App);
app.use(i18n);

app.mount(&#x27;#app&#x27;);

\u5728\u6A21\u677F\u4E2D\u4F7F\u7528

\u5728\u6A21\u677F\u4E2D\u4F7F\u7528

&lt;div class=&quot;content&quot;&gt;
    {{ $t(&#x27;message.resume&#x27;) }}
&lt;/div&gt;


\u5199\u4E00\u4E2A\u5207\u6362\u8BED\u8A00\u7684\u65B9\u6CD5

&lt;template&gt;
    &lt;button @click=&quot;toggle&quot;&gt;\u5207\u6362&lt;/button&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    methods: {
        toggle() {
            const curLang = localStorage.getItem(&#x27;language&#x27;);
            const setLang = curLang == &#x27;zh&#x27; ? &#x27;en&#x27; : &#x27;zh&#x27;;
            localStorage.setItem(&#x27;language&#x27;, setLang);
            location.reload();
        }
    }
}
&lt;/script&gt;

\u4F7F\u7528\u6548\u679C


`},{name:"vue_2",title:"Vue\u9879\u76EE\u4E2D\u4F7F\u7528vuex\u5B9E\u73B0\uFF08\u72B6\u6001\uFF09\u6570\u636E\u5171\u4EAB",date:"Aug 07, 2021",category:["Vue"],content:`<blockquote>
<p>\u672C\u6587\u4F7F\u7528\u7684\u662F vue3.0 + vuex4.0 \u7684\u5199\u6CD5\u3002</p>
</blockquote>
<h2>\u4EC0\u4E48\u662Fvuex</h2>
<p>vuex \u662F\u5B9E\u73B0\u7EC4\u4EF6\u5168\u5C40\u72B6\u6001\uFF08\u6570\u636E\uFF09\u7BA1\u7406\u7684\u4E00\u79CD\u673A\u5236\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u5B9E\u73B0\u7EC4\u4EF6\u4E4B\u95F4\u6570\u636E\u7684\u5171\u4EAB\u3002</p>
<h2>\u5B89\u88C5\u4F9D\u8D56</h2>
<pre><code class='language-bash'>npm install vuex --save
</code></pre>
<h2>\u4F7F\u7528vuex</h2>
<ol>
<li>\u521B\u5EFAstore\u6587\u4EF6</li>
</ol>
<pre><code class='language-js'><span class='hljs-keyword'>import</span> { createStore } <span class='hljs-keyword'>from</span> <span class='hljs-string'>&quot;vuex&quot;</span>;

<span class='hljs-comment'>// \u6A21\u62DF\u8BF7\u6C42\u6570\u636E</span>
<span class='hljs-keyword'>function</span> <span class='hljs-title function_'>getUserInfo</span>(<span class='hljs-params'></span>) {
    <span class='hljs-keyword'>return</span> <span class='hljs-keyword'>new</span> <span class='hljs-title class_'>Promise</span>(<span class='hljs-function'>(<span class='hljs-params'>resolve</span>) =&gt;</span> {
        <span class='hljs-title function_'>resolve</span>({ <span class='hljs-attr'>name</span>: <span class='hljs-string'>&#x27;\u5F20\u4E09&#x27;</span> })
    });
}

<span class='hljs-keyword'>const</span> store = <span class='hljs-title function_'>createStore</span>({
	<span class='hljs-comment'>// \u76F8\u5F53\u4E8E vue \u4E2D\u7684 data\uFF0C\u5B58\u653E\u53D8\u91CF</span>
    <span class='hljs-title function_'>state</span>(<span class='hljs-params'></span>) {
        <span class='hljs-keyword'>return</span> {
            <span class='hljs-attr'>userInfo</span>: {}
        }
    },
    <span class='hljs-comment'>// \u8BA1\u7B97\u5C5E\u6027\uFF0C\u5BF9 state \u4E2D\u7684\u53D8\u91CF\u8FDB\u884C\u5904\u7406</span>
    <span class='hljs-attr'>getters</span>: {
        <span class='hljs-title function_'>userName</span>(<span class='hljs-params'>state</span>) {
            <span class='hljs-keyword'>return</span> state.<span class='hljs-property'>userInfo</span>.<span class='hljs-property'>name</span>;
        }
    },
    <span class='hljs-comment'>// \u66F4\u6539 store \u4E2D\u7684\u72B6\u6001\u7684\u552F\u4E00\u65B9\u5F0F</span>
    <span class='hljs-attr'>mutations</span>: {
        <span class='hljs-title function_'>setUserInfo</span>(<span class='hljs-params'>state, value</span>) {
            state.<span class='hljs-property'>userInfo</span> = value;
        }
    },
    <span class='hljs-comment'>/*
     * action \u63D0\u4EA4\u7684\u662F mutation\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u53D8\u66F4\u72B6\u6001\u3002
     * action \u53EF\u4EE5\u5305\u542B\u4EFB\u610F\u5F02\u6B65\u64CD\u4F5C
     */</span>
    <span class='hljs-attr'>actions</span>: {
        <span class='hljs-keyword'>async</span> <span class='hljs-title function_'>getUserInfo</span>(<span class='hljs-params'>{ commit }</span>) {
            <span class='hljs-keyword'>const</span> userInfo = <span class='hljs-keyword'>await</span> <span class='hljs-title function_'>getUserInfo</span>();
            <span class='hljs-title function_'>commit</span>(<span class='hljs-string'>&#x27;setUserInfo&#x27;</span>, userInfo)
        }
    },
});

<span class='hljs-keyword'>export</span> <span class='hljs-keyword'>default</span> store;
</code></pre>
<ol start='2'>
<li>\u5728main.js\u4E2D\u5F15\u5165</li>
</ol>
<pre><code class='language-js'><span class='hljs-keyword'>import</span> { createApp } <span class='hljs-keyword'>from</span> <span class='hljs-string'>&#x27;vue&#x27;</span>;
<span class='hljs-keyword'>import</span> <span class='hljs-title class_'>App</span> <span class='hljs-keyword'>from</span> <span class='hljs-string'>&#x27;./App.vue&#x27;</span>;
<span class='hljs-keyword'>import</span> store <span class='hljs-keyword'>from</span> <span class='hljs-string'>&#x27;./store&#x27;</span>;

<span class='hljs-keyword'>const</span> app = <span class='hljs-title function_'>createApp</span>(<span class='hljs-title class_'>App</span>);
app.<span class='hljs-title function_'>use</span>(store);

app.<span class='hljs-title function_'>mount</span>(<span class='hljs-string'>&#x27;#app&#x27;</span>);
</code></pre>
<ol start='3'>
<li>\u4F7F\u7528\u5171\u4EAB\u6570\u636E</li>
</ol>
<pre><code class='language-vue'>&lt;template&gt;
    &lt;div&gt;{{ userName }}&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
	created() {
        this.getUserInfo();
    },
    computed: {
        ...mapState(['userInfo']),
        ...mapGetters(['userName']),
    },
	methods: {
        ...mapActions(['getUserInfo']),
    }
}
&lt;/script&gt;
</code></pre>
`,abstract:`
\u672C\u6587\u4F7F\u7528\u7684\u662F vue3.0 + vuex4.0 \u7684\u5199\u6CD5\u3002

\u4EC0\u4E48\u662Fvuex
vuex \u662F\u5B9E\u73B0\u7EC4\u4EF6\u5168\u5C40\u72B6\u6001\uFF08\u6570\u636E\uFF09\u7BA1\u7406\u7684\u4E00\u79CD\u673A\u5236\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u5B9E\u73B0\u7EC4\u4EF6\u4E4B\u95F4\u6570\u636E\u7684\u5171\u4EAB\u3002
\u5B89\u88C5\u4F9D\u8D56
npm install vuex --save

\u4F7F\u7528vuex

\u521B\u5EFAstore\u6587\u4EF6

import { createStore } from &quot;vuex&quot;;

// \u6A21\u62DF\u8BF7\u6C42\u6570\u636E
function getUserInfo() {
    return new Promise((resolve) =&gt; {
        resolve({ name: &#x27;\u5F20\u4E09&#x27; })
    });
}

const store = createStore({
	// \u76F8\u5F53\u4E8E vue \u4E2D\u7684 data\uFF0C\u5B58\u653E\u53D8\u91CF
    state() {
        return {
            userInfo: {}
        }
    },
    // \u8BA1\u7B97\u5C5E\u6027\uFF0C\u5BF9 state \u4E2D\u7684\u53D8\u91CF\u8FDB\u884C\u5904\u7406
    getters: {
        userName(state) {
            return state.userInfo.name;
        }
    },
    // \u66F4\u6539 store \u4E2D\u7684\u72B6\u6001\u7684\u552F\u4E00\u65B9\u5F0F
    mutations: {
        setUserInfo(state, value) {
            state.userInfo = value;
        }
    },
    /*
     * action \u63D0\u4EA4\u7684\u662F mutation\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u53D8\u66F4\u72B6\u6001\u3002
     * action \u53EF\u4EE5\u5305\u542B\u4EFB\u610F\u5F02\u6B65\u64CD\u4F5C
     */
    actions: {
        async getUserInfo({ commit }) {
            const userInfo = await getUserInfo();
            commit(&#x27;setUserInfo&#x27;, userInfo)
        }
    },
});

export default store;


\u5728main.js\u4E2D\u5F15\u5165

import { createApp } from &#x27;vue&#x27;;
import App from &#x27;./App.vue&#x27;;
import store from &#x27;./store&#x27;;

const app = createApp(App);
app.use(store);

app.mount(&#x27;#app&#x27;);


\u4F7F\u7528\u5171\u4EAB\u6570\u636E

&lt;template&gt;
    &lt;div&gt;{{ userName }}&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
	created() {
        this.getUserInfo();
    },
    computed: {
        ...mapState(['userInfo']),
        ...mapGetters(['userName']),
    },
	methods: {
        ...mapActions(['getUserInfo']),
    }
}
&lt;/script&gt;

`}];const nm={class:"pagination-container"},sm={class:"page-index"},rm={__name:"pagination",props:{pageIndex:Number,pageSize:Number,length:Number},emits:["pageChange"],setup(e,{emit:t}){const n=e;function s(){const a=n.pageIndex-1;t("pageChange",{pageIndex:a})}function r(){const a=n.pageIndex+1;t("pageChange",{pageIndex:a})}return(a,o)=>(re(),oe("div",nm,[$("a",{style:xn({visibility:e.pageIndex>1?"visible":"hidden"}),class:"arrow",onClick:o[0]||(o[0]=c=>s())}," \u2190 \u4E0A\u4E00\u9875 ",4),$("span",sm,Ce(e.pageIndex),1),$("a",{style:xn({visibility:e.pageIndex*e.pageSize<e.length?"visible":"hidden"}),class:"arrow",onClick:o[1]||(o[1]=c=>r())}," \u4E0B\u4E00\u9875 \u2192 ",4)]))}};const am={class:"footer-container"},om={__name:"footer",setup(e){const t=new Date().getFullYear();return(n,s)=>(re(),oe("div",am," \xA9 2021-"+Ce(tt(t))+" | \u65E7\u68A6 ",1))}};var sa=rt(om,[["__scopeId","data-v-ea868832"]]);const lm=e=>(Is("data-v-12816bbe"),e=e(),ks(),e),cm={class:"home-container"},im={class:"article-time"},um={class:"article-title"},pm=["href"],fm=lm(()=>$("div",{class:"article-line"},null,-1)),hm=["innerHTML"],dm={__name:"article-list",setup(e){const t=Ns.sort((l,u)=>new Date(u.date).getTime()-new Date(l.date).getTime()),n=Re(t),s=Tn(),r=Re(1),a=Re(5);hn(()=>s.params.page,l=>{r.value=+l||1,c()},{immediate:!0});function o(l){const{pageIndex:u}=l;location.href=`/article-list/${u}`}function c(){const l=r.value,u=a.value,i=(l-1)*u,p=i+u;n.value=t.slice(i,p)}return(l,u)=>(re(),oe("div",cm,[(re(!0),oe(de,null,yt(n.value,i=>(re(),oe("div",{class:"article-item",key:i.name},[$("time",im,Ce(i.date),1),$("h2",um,[$("a",{href:"/article-detail/"+i.name},Ce(i.title),9,pm)]),fm,$("div",{class:"abstract",innerHTML:i.abstract},null,8,hm)]))),128)),me(rm,{"page-index":r.value,"onUpdate:pageIndex":u[0]||(u[0]=i=>r.value=i),"page-size":a.value,length:tt(t).length,onPageChange:o},null,8,["page-index","page-size","length"]),me(sa)]))}};var mm=rt(dm,[["__scopeId","data-v-12816bbe"]]);const gm="modulepreload",ol={},vm="/",_m=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${vm}${s}`,s in ol)return;ol[s]=!0;const r=s.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":gm,r||(o.as="script",o.crossOrigin=""),o.href=s,document.head.appendChild(o),r)return new Promise((c,l)=>{o.addEventListener("load",c),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},ym=["id","host","repo","repoid","category","categoryid","mapping","term","strict","reactionsenabled","emitmetadata","inputposition","theme","lang","loading"],bm=zr({__name:"Giscus",props:{id:null,host:null,repo:null,repoId:null,category:null,categoryId:null,mapping:null,term:null,theme:null,strict:null,reactionsEnabled:null,emitMetadata:null,inputPosition:null,lang:null,loading:null},setup(e){const t=Re(!1);return jt(()=>{t.value=!0,_m(()=>import("./giscus-a53917f0.a14eedf1.js"),[])}),(n,s)=>t.value?(re(),oe("giscus-widget",{key:0,id:e.id,host:e.host,repo:e.repo,repoid:e.repoId,category:e.category,categoryid:e.categoryId,mapping:e.mapping,term:e.term,strict:e.strict,reactionsenabled:e.reactionsEnabled,emitmetadata:e.emitMetadata,inputposition:e.inputPosition,theme:e.theme,lang:e.lang,loading:e.loading},null,8,ym)):Uu("",!0)}}),Qc={__name:"comment",setup(e){return(t,n)=>(re(),Jr(tt(bm),{id:"comments",repo:"hai-zou/poseidon",repoId:"R_kgDOIPqaJQ",category:"General",categoryId:"DIC_kwDOIPqaJc4CW4xW",mapping:"pathname",term:"Welcome to component!",inputPosition:"top",theme:"light",lang:"zh-CN",loading:"lazy"}))}};const jm={class:"article-content"},xm={class:"detail-title"},wm={class:"post-info"},Om={class:"detail-container markdown-body"},Em=["innerHTML"],Sm={__name:"article-detail",setup(e){const t=Re({}),n=Tn();jt(()=>{const{name:r}=n.params;t.value=s(r)});function s(r){return Ns.find(a=>a.name===r)||{}}return(r,a)=>(re(),oe(de,null,[$("div",jm,[$("h1",xm,Ce(t.value.title),1),$("div",wm,[$("time",null,Ce(t.value.date),1)]),$("div",Om,[$("div",{innerHTML:t.value.content},null,8,Em)]),me(Qc)]),me(sa)],64))}};var Im=rt(Sm,[["__scopeId","data-v-50d961ac"]]);const km=e=>(Is("data-v-6fba9c4b"),e=e(),ks(),e),Pm={class:"category-list"},Cm=["onClick"],Am=["href"],qm=km(()=>$("span",null," \u2014 ",-1)),Rm={__name:"article-category",setup(e){const t=Tn(),n=kf(),s=Re([]),r=Re({}),a=Re([]),o=Re("");jt(()=>{const{category:u}=t.query;c(),u&&(o.value=u,l(u))});function c(){const u=[],i={};for(const p of Ns){const f=p.category||[];u.push(...f);for(const g of f)i[g]||(i[g]=[]),i[g].push(p)}s.value=new Set([...u]),r.value=i}function l(u){o.value=u,a.value=r.value[u],n.push(`/article-category?category=${u}`)}return(u,i)=>(re(),oe(de,null,[$("ul",Pm,[(re(!0),oe(de,null,yt(s.value,p=>(re(),oe("li",{key:p,class:Wt({active:o.value===p}),onClick:f=>l(p)},Ce(p),11,Cm))),128))]),(re(!0),oe(de,null,yt(a.value,p=>(re(),oe("ul",{class:"category-item",key:p},[$("li",null,[$("a",{href:"/article-detail/"+p.name},[$("span",null,Ce(p.title),1),qm,$("span",null,Ce(p.date),1)],8,Am)])]))),128))],64))}};var Tm=rt(Rm,[["__scopeId","data-v-6fba9c4b"]]);const Dm={class:"article-wrap"},Nm=["href"],Mm={__name:"article-archive",setup(e){const t=Re([]);jt(()=>{n()});function n(){const s=Ns.sort((a,o)=>new Date(o.date).getTime()-new Date(a.date).getTime()),r={};for(const a of s){const o=new Date(a.date).getFullYear();r[o]||(r[o]=[]),r[o].push(a)}t.value=Object.entries(r).map(a=>{const[o,c]=a;return{year:o,children:c}}).reverse()}return(s,r)=>(re(!0),oe(de,null,yt(t.value,a=>(re(),oe("div",{class:"archive-container",key:a},[$("h3",null,Ce(a.year),1),$("ul",Dm,[(re(!0),oe(de,null,yt(a.children,o=>(re(),oe("li",{class:"article-item",key:o},[$("a",{href:"/article-detail/"+o.name},Ce(o.title),9,Nm)]))),128))])]))),128))}};var Lm=rt(Mm,[["__scopeId","data-v-2eabe858"]]),Hm=[{name:"\u5DE6\u773C\u4F1A\u966A\u53F3\u773C\u54ED\u306E\u535A\u5BA2",desc:"\u53E6\u4E00\u4E2A\u4E16\u754C",link:"https://qkongtao.cn/"},{name:"\u5B89\u77E5\u9C7C",desc:"\u751F\u6D3B\u660E\u6717\uFF0C\u4E07\u7269\u53EF\u7231",link:"https://anzhiy.cn/"}];const Um=e=>(Is("data-v-255bbc51"),e=e(),ks(),e),Fm=Um(()=>$("div",{class:"friend-header"},[$("a",{href:"https://github.com/hai-zou/Poseidon/edit/main/src/data/links.js",target:"_blank"},"\u5982\u4F55\u6DFB\u52A0\u53CB\u94FE")],-1)),$m={class:"link-container"},Bm=["href"],zm={class:"desc"},Km={__name:"friend-links",setup(e){return(t,n)=>(re(),oe(de,null,[Fm,$("ul",$m,[(re(!0),oe(de,null,yt(tt(Hm),s=>(re(),oe("li",{class:"link-item",key:s},[$("a",{class:"name",href:s.link,target:"_blank"},Ce(s.name),9,Bm),$("span",zm,Ce(s.desc),1)]))),128))])],64))}};var Vm=rt(Km,[["__scopeId","data-v-255bbc51"]]),Wm=[{name:"about",date:"",content:`<h2>\u5173\u4E8E\u6211</h2>
<p>Hello\uFF0C\u5927\u5BB6\u597D\uFF01</p>
<p>\u6211\u76EE\u524D\u5728\u6DF1\u5733\u7684\u4E00\u5BB6\u4E92\u8054\u7F51\u516C\u53F8\u4ECE\u4E8BWeb\u524D\u7AEF\u5F00\u53D1\u7684\u5DE5\u4F5C\uFF0C\u4ECE\u6BD5\u4E1A\u5230\u73B0\u5728\u4E24\u5E74\u65F6\u95F4\u3002
\u8FD9\u4E24\u5E74\u6765\u4E5F\u8FDB\u6B65\u4E0D\u5C11\uFF0C\u4F46\u5927\u591A\u6570\u90FD\u662F\u5728\u5DE5\u4F5C\u4E2D\u5B66\u5230\u7684\uFF0C\u56E0\u4E3A\u4E0B\u73ED\u540E\u6839\u672C\u6CA1\u6709\u7CBE\u529B\u518D\u53BB\u5B66\u4E60\u3002
\u6211\u5C31\u50CF\u4E95\u91CC\u7684\u4E00\u53EA\u9752\u86D9\uFF0C\u6211\u6240\u80FD\u770B\u5230\u7684\u5C31\u53EA\u6709\u516C\u53F8\u8FD9\u4E00\u5C0F\u7247\u5929\u7A7A\uFF0C\u6211\u6E34\u671B\u89C1\u5230\u5916\u9762\u7684\u4E16\u754C\uFF0C\u4F46\u5FC3\u6709\u4F59\u800C\u529B\u4E0D\u8DB3\u3002</p>
<p>\u73B0\u5728\u5462\uFF0C\u4E5F\u7B97\u627E\u5230\u4E86\u4E00\u4EF6\u81EA\u5DF1\u559C\u6B22\u505A\u7684\u4E8B\u60C5\uFF0C\u4ECE\u5EFA\u7ACB\u8FD9\u4E2A\u535A\u5BA2\u7AD9\u70B9\u5F00\u59CB\uFF0C\u6211\u8981\u4E00\u70B9\u4E00\u70B9\u7684\u5F80\u4E0A\u722C\uFF0C\u53BB\u770B\u770B\u90A3\u66F4\u5E7F\u8302\u7684\u4E16\u754C\u3002</p>
<h3>\u7231\u597D</h3>
<ul>
<li>\u559C\u6B22coding\uFF0C\u5E76\u68A6\u60F3\u6210\u4E3A\u72EC\u7ACB\u5F00\u53D1\u8005</li>
<li>\u559C\u6B22\u65C5\u6E38\uFF0C\u7528\u76F8\u673A\u8BB0\u5F55\u81EA\u5DF1\u5230\u8FC7\u7684\u6BCF\u4E00\u4E2A\u5730\u65B9\uFF01</li>
<li>\u559C\u6B22\u4E66\u6CD5\uFF0C\u5199\u5B57\u80FD\u8BA9\u81EA\u5DF1\u7684\u5185\u5FC3\u66F4\u52A0\u7684\u5E73\u9759</li>
<li>\u559C\u6B22\u6253\u6E38\u620F\uFF0C\u4E0B\u73ED\u4E4B\u540E\u6253\u6253\u6E38\u620F\uFF0C\u8BA9\u5DE5\u4F5C\u4E2D\u7684\u538B\u529B\u90FD\u5F97\u5230\u91CA\u653E</li>
</ul>
<h3>\u8054\u7CFB\u65B9\u5F0F</h3>
<ul>
<li>\u90AE\u7BB1: <a href='mailto:303768942@qq.com'>303768942@qq.com</a></li>
<li>GitHub: <a href='https://github.com/hai-zou'>https://github.com/hai-zou</a></li>
</ul>
<h2>\u5173\u4E8E\u672C\u7AD9</h2>
<ol>
<li>\u9646\u9646\u7EED\u7EED\u6362\u8FC7\u51E0\u6B3E\u535A\u5BA2\uFF0C\u4F46\u662F\u90FD\u4E0D\u662F\u5F88\u6EE1\u610F\uFF0C\u867D\u7136\u8BF4\u6709\u4E9B\u535A\u5BA2\u4E5F\u652F\u6301\u81EA\u5B9A\u4E49\uFF0C\u4F46\u6211\u6CA1\u65F6\u95F4\u4E5F\u4E0D\u60F3\u53BB\u7814\u7A76\u5B83\u7684\u5199\u6CD5\u3002</li>
<li>\u4ECE\u96F6\u5F00\u59CB\u53BB\u5B8C\u6210\u4E00\u4E2A\u535A\u5BA2\u7684\u5F00\u53D1\uFF0C\u8FD9\u5BF9\u4E8E\u6211\u4E2A\u4EBA\u7684\u63D0\u5347\u8FD8\u662F\u86EE\u5927\u7684\u3002</li>
<li>\u5728\u95F2\u6687\u65F6\u95F4\u91CC\u53BB\u6162\u6162\u6253\u9020\u81EA\u5DF1\u7684\u4E2A\u4EBA\u4F5C\u54C1\u8FD8\u662F\u633A\u4E0D\u9519\u7684\u3002</li>
</ol>
<h3>UI\u98CE\u683C</h3>
<ul>
<li>\u672C\u7AD9\u662F\u501F\u9274 <a href='https://hutusi.com/'>\u80E1\u6D82\u8BF4</a> \u7684UI\uFF0C\u91C7\u7528\u6781\u7B80\u98CE\u683C\u3002</li>
<li>\u9009\u62E9\u6781\u7B80\u98CE\u683C\u4E3B\u9898\u7684\u535A\u5BA2\uFF0C\u8BA9\u81EA\u5DF1\u66F4\u4E13\u6CE8\u4E8E\u6587\u7AE0\u7684\u8D28\u91CF\uFF0C\u4E0D\u53BB\u7BA1\u90A3\u4E9B\u82B1\u54E8\u7684\u529F\u80FD\u3002</li>
</ul>
<h3>\u6280\u672F</h3>
<ul>
<li><code>Vite</code> \u6781\u901F\u7684\u670D\u52A1\u542F\u52A8, \u8F7B\u91CF\u5FEB\u901F\u7684\u70ED\u91CD\u8F7D</li>
<li><code>markdown-it</code> <code>yaml-front-matter</code> \u5904\u7406md\u6587\u4EF6</li>
<li><code>highlight.js</code> \u4EE3\u7801\u9AD8\u4EAE</li>
<li><code>@docsearch/js</code> \u57FA\u4E8EAlgolia\u5F00\u53D1\u7684\u641C\u7D22\u63D2\u4EF6</li>
<li><code>@giscus/vue</code> \u4E00\u6B3E\u57FA\u4E8EGitHub\u7684\u8BC4\u8BBA\u63D2\u4EF6</li>
</ul>
`,abstract:`\u5173\u4E8E\u6211
Hello\uFF0C\u5927\u5BB6\u597D\uFF01
\u6211\u76EE\u524D\u5728\u6DF1\u5733\u7684\u4E00\u5BB6\u4E92\u8054\u7F51\u516C\u53F8\u4ECE\u4E8BWeb\u524D\u7AEF\u5F00\u53D1\u7684\u5DE5\u4F5C\uFF0C\u4ECE\u6BD5\u4E1A\u5230\u73B0\u5728\u4E24\u5E74\u65F6\u95F4\u3002
\u8FD9\u4E24\u5E74\u6765\u4E5F\u8FDB\u6B65\u4E0D\u5C11\uFF0C\u4F46\u5927\u591A\u6570\u90FD\u662F\u5728\u5DE5\u4F5C\u4E2D\u5B66\u5230\u7684\uFF0C\u56E0\u4E3A\u4E0B\u73ED\u540E\u6839\u672C\u6CA1\u6709\u7CBE\u529B\u518D\u53BB\u5B66\u4E60\u3002
\u6211\u5C31\u50CF\u4E95\u91CC\u7684\u4E00\u53EA\u9752\u86D9\uFF0C\u6211\u6240\u80FD\u770B\u5230\u7684\u5C31\u53EA\u6709\u516C\u53F8\u8FD9\u4E00\u5C0F\u7247\u5929\u7A7A\uFF0C\u6211\u6E34\u671B\u89C1\u5230\u5916\u9762\u7684\u4E16\u754C\uFF0C\u4F46\u5FC3\u6709\u4F59\u800C\u529B\u4E0D\u8DB3\u3002
\u73B0\u5728\u5462\uFF0C\u4E5F\u7B97\u627E\u5230\u4E86\u4E00\u4EF6\u81EA\u5DF1\u559C\u6B22\u505A\u7684\u4E8B\u60C5\uFF0C\u4ECE\u5EFA\u7ACB\u8FD9\u4E2A\u535A\u5BA2\u7AD9\u70B9\u5F00\u59CB\uFF0C\u6211\u8981\u4E00\u70B9\u4E00\u70B9\u7684\u5F80\u4E0A\u722C\uFF0C\u53BB\u770B\u770B\u90A3\u66F4\u5E7F\u8302\u7684\u4E16\u754C\u3002
\u7231\u597D

\u559C\u6B22coding\uFF0C\u5E76\u68A6\u60F3\u6210\u4E3A\u72EC\u7ACB\u5F00\u53D1\u8005
\u559C\u6B22\u65C5\u6E38\uFF0C\u7528\u76F8\u673A\u8BB0\u5F55\u81EA\u5DF1\u5230\u8FC7\u7684\u6BCF\u4E00\u4E2A\u5730\u65B9\uFF01
\u559C\u6B22\u4E66\u6CD5\uFF0C\u5199\u5B57\u80FD\u8BA9\u81EA\u5DF1\u7684\u5185\u5FC3\u66F4\u52A0\u7684\u5E73\u9759
\u559C\u6B22\u6253\u6E38\u620F\uFF0C\u4E0B\u73ED\u4E4B\u540E\u6253\u6253\u6E38\u620F\uFF0C\u8BA9\u5DE5\u4F5C\u4E2D\u7684\u538B\u529B\u90FD\u5F97\u5230\u91CA\u653E

\u8054\u7CFB\u65B9\u5F0F

\u90AE\u7BB1: 303768942@qq.com
GitHub: https://github.com/hai-zou

\u5173\u4E8E\u672C\u7AD9

\u9646\u9646\u7EED\u7EED\u6362\u8FC7\u51E0\u6B3E\u535A\u5BA2\uFF0C\u4F46\u662F\u90FD\u4E0D\u662F\u5F88\u6EE1\u610F\uFF0C\u867D\u7136\u8BF4\u6709\u4E9B\u535A\u5BA2\u4E5F\u652F\u6301\u81EA\u5B9A\u4E49\uFF0C\u4F46\u6211\u6CA1\u65F6\u95F4\u4E5F\u4E0D\u60F3\u53BB\u7814\u7A76\u5B83\u7684\u5199\u6CD5\u3002
\u4ECE\u96F6\u5F00\u59CB\u53BB\u5B8C\u6210\u4E00\u4E2A\u535A\u5BA2\u7684\u5F00\u53D1\uFF0C\u8FD9\u5BF9\u4E8E\u6211\u4E2A\u4EBA\u7684\u63D0\u5347\u8FD8\u662F\u86EE\u5927\u7684\u3002
\u5728\u95F2\u6687\u65F6\u95F4\u91CC\u53BB\u6162\u6162\u6253\u9020\u81EA\u5DF1\u7684\u4E2A\u4EBA\u4F5C\u54C1\u8FD8\u662F\u633A\u4E0D\u9519\u7684\u3002

UI\u98CE\u683C

\u672C\u7AD9\u662F\u501F\u9274 \u80E1\u6D82\u8BF4 \u7684UI\uFF0C\u91C7\u7528\u6781\u7B80\u98CE\u683C\u3002
\u9009\u62E9\u6781\u7B80\u98CE\u683C\u4E3B\u9898\u7684\u535A\u5BA2\uFF0C\u8BA9\u81EA\u5DF1\u66F4\u4E13\u6CE8\u4E8E\u6587\u7AE0\u7684\u8D28\u91CF\uFF0C\u4E0D\u53BB\u7BA1\u90A3\u4E9B\u82B1\u54E8\u7684\u529F\u80FD\u3002

\u6280\u672F

Vite \u6781\u901F\u7684\u670D\u52A1\u542F\u52A8, \u8F7B\u91CF\u5FEB\u901F\u7684\u70ED\u91CD\u8F7D
markdown-it yaml-front-matter \u5904\u7406md\u6587\u4EF6
highlight.js \u4EE3\u7801\u9AD8\u4EAE
@docsearch/js \u57FA\u4E8EAlgolia\u5F00\u53D1\u7684\u641C\u7D22\u63D2\u4EF6
@giscus/vue \u4E00\u6B3E\u57FA\u4E8EGitHub\u7684\u8BC4\u8BBA\u63D2\u4EF6

`}];const Jm={class:"custom-comtainer"},Qm={class:"markdown-body"},Gm=["innerHTML"],Zm={__name:"custom",setup(e){const t=Re({}),n=Tn();jt(()=>{const{link:r}=n.params;t.value=s(r)});function s(r){return Wm.find(a=>a.name===r)||{}}return(r,a)=>(re(),oe(de,null,[$("div",Jm,[$("div",Qm,[$("div",{innerHTML:t.value.content},null,8,Gm)]),me(Qc)]),me(sa)],64))}};var Ym=rt(Zm,[["__scopeId","data-v-2c42665d"]]);const Xm={};function eg(e,t){return re(),oe("div",null,"404")}var tg=rt(Xm,[["render",eg]]);const ng=[{path:"/",component:tm,redirect:"/article-list/1/",children:[{path:"/article-list/:page",component:mm},{path:"/article-detail/:name",component:Im},{path:"/article-category",component:Tm},{path:"/article-archive",component:Lm},{path:"/friend-links",component:Vm},{path:"/custom/:link",component:Ym},{path:"/:catchAll(.*)",component:tg}]}],sg=Sf({history:Fp(),routes:ng});const Gc=yp(wp);Gc.use(sg);Gc.mount("#app");
