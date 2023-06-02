const Gc=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}};Gc();function Cr(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ue={},$t=[],Ve=()=>{},Zc=()=>!1,Yc=/^on[^a-z]/,_s=e=>Yc.test(e),Ar=e=>e.startsWith("onUpdate:"),xe=Object.assign,Rr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Xc=Object.prototype.hasOwnProperty,Z=(e,t)=>Xc.call(e,t),z=Array.isArray,Bt=e=>ys(e)==="[object Map]",al=e=>ys(e)==="[object Set]",K=e=>typeof e=="function",je=e=>typeof e=="string",qr=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",ol=e=>pe(e)&&K(e.then)&&K(e.catch),ll=Object.prototype.toString,ys=e=>ll.call(e),ei=e=>ys(e).slice(8,-1),cl=e=>ys(e)==="[object Object]",Tr=e=>je(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Gn=Cr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bs=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ti=/-(\w)/g,st=bs(e=>e.replace(ti,(t,n)=>n?n.toUpperCase():"")),ni=/\B([A-Z])/g,Yt=bs(e=>e.replace(ni,"-$1").toLowerCase()),js=bs(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ms=bs(e=>e?`on${js(e)}`:""),bn=(e,t)=>!Object.is(e,t),Ls=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},rs=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},si=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let aa;const er=()=>aa||(aa=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function jn(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=je(s)?li(s):jn(s);if(r)for(const a in r)t[a]=r[a]}return t}else{if(je(e))return e;if(pe(e))return e}}const ri=/;(?![^(]*\))/g,ai=/:([^]+)/,oi=/\/\*[^]*?\*\//g;function li(e){const t={};return e.replace(oi,"").split(ri).forEach(n=>{if(n){const s=n.split(ai);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Rn(e){let t="";if(je(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const s=Rn(e[n]);s&&(t+=s+" ")}else if(pe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ci="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ii=Cr(ci);function il(e){return!!e||e===""}const Re=e=>je(e)?e:e==null?"":z(e)||pe(e)&&(e.toString===ll||!K(e.toString))?JSON.stringify(e,ul,2):String(e),ul=(e,t)=>t&&t.__v_isRef?ul(e,t.value):Bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:al(t)?{[`Set(${t.size})`]:[...t.values()]}:pe(t)&&!z(t)&&!cl(t)?String(t):t;let $e;class ui{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$e,!t&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=$e;try{return $e=this,t()}finally{$e=n}}}on(){$e=this}off(){$e=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function pi(e,t=$e){t&&t.active&&t.effects.push(e)}function fi(){return $e}const Dr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},pl=e=>(e.w&_t)>0,fl=e=>(e.n&_t)>0,hi=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=_t},di=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];pl(r)&&!fl(r)?r.delete(e):t[n++]=r,r.w&=~_t,r.n&=~_t}t.length=n}},tr=new WeakMap;let ln=0,_t=1;const nr=30;let Be;const It=Symbol(""),sr=Symbol("");class Nr{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,pi(this,s)}run(){if(!this.active)return this.fn();let t=Be,n=gt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Be,Be=this,gt=!0,_t=1<<++ln,ln<=nr?hi(this):oa(this),this.fn()}finally{ln<=nr&&di(this),_t=1<<--ln,Be=this.parent,gt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Be===this?this.deferStop=!0:this.active&&(oa(this),this.onStop&&this.onStop(),this.active=!1)}}function oa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let gt=!0;const hl=[];function Xt(){hl.push(gt),gt=!1}function en(){const e=hl.pop();gt=e===void 0?!0:e}function qe(e,t,n){if(gt&&Be){let s=tr.get(e);s||tr.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=Dr()),dl(r)}}function dl(e,t){let n=!1;ln<=nr?fl(e)||(e.n|=_t,n=!pl(e)):n=!e.has(Be),n&&(e.add(Be),Be.deps.push(e))}function it(e,t,n,s,r,a){const o=tr.get(e);if(!o)return;let c=[];if(t==="clear")c=[...o.values()];else if(n==="length"&&z(e)){const l=Number(s);o.forEach((u,i)=>{(i==="length"||i>=l)&&c.push(u)})}else switch(n!==void 0&&c.push(o.get(n)),t){case"add":z(e)?Tr(n)&&c.push(o.get("length")):(c.push(o.get(It)),Bt(e)&&c.push(o.get(sr)));break;case"delete":z(e)||(c.push(o.get(It)),Bt(e)&&c.push(o.get(sr)));break;case"set":Bt(e)&&c.push(o.get(It));break}if(c.length===1)c[0]&&rr(c[0]);else{const l=[];for(const u of c)u&&l.push(...u);rr(Dr(l))}}function rr(e,t){const n=z(e)?e:[...e];for(const s of n)s.computed&&la(s);for(const s of n)s.computed||la(s)}function la(e,t){(e!==Be||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const mi=Cr("__proto__,__v_isRef,__isVue"),ml=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(qr)),gi=Mr(),vi=Mr(!1,!0),_i=Mr(!0),ca=yi();function yi(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=se(this);for(let a=0,o=this.length;a<o;a++)qe(s,"get",a+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(se)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Xt();const s=se(this)[t].apply(this,n);return en(),s}}),e}function bi(e){const t=se(this);return qe(t,"has",e),t.hasOwnProperty(e)}function Mr(e=!1,t=!1){return function(s,r,a){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&a===(e?t?Ni:bl:t?yl:_l).get(s))return s;const o=z(s);if(!e){if(o&&Z(ca,r))return Reflect.get(ca,r,a);if(r==="hasOwnProperty")return bi}const c=Reflect.get(s,r,a);return(qr(r)?ml.has(r):mi(r))||(e||qe(s,"get",r),t)?c:Se(c)?o&&Tr(r)?c:c.value:pe(c)?e?jl(c):qn(c):c}}const ji=gl(),xi=gl(!0);function gl(e=!1){return function(n,s,r,a){let o=n[s];if(Wt(o)&&Se(o)&&!Se(r))return!1;if(!e&&(!as(r)&&!Wt(r)&&(o=se(o),r=se(r)),!z(n)&&Se(o)&&!Se(r)))return o.value=r,!0;const c=z(n)&&Tr(s)?Number(s)<n.length:Z(n,s),l=Reflect.set(n,s,r,a);return n===se(a)&&(c?bn(r,o)&&it(n,"set",s,r):it(n,"add",s,r)),l}}function wi(e,t){const n=Z(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&it(e,"delete",t,void 0),s}function Oi(e,t){const n=Reflect.has(e,t);return(!qr(t)||!ml.has(t))&&qe(e,"has",t),n}function Ei(e){return qe(e,"iterate",z(e)?"length":It),Reflect.ownKeys(e)}const vl={get:gi,set:ji,deleteProperty:wi,has:Oi,ownKeys:Ei},Si={get:_i,set(e,t){return!0},deleteProperty(e,t){return!0}},Ii=xe({},vl,{get:vi,set:xi}),Lr=e=>e,xs=e=>Reflect.getPrototypeOf(e);function Dn(e,t,n=!1,s=!1){e=e.__v_raw;const r=se(e),a=se(t);n||(t!==a&&qe(r,"get",t),qe(r,"get",a));const{has:o}=xs(r),c=s?Lr:n?Fr:xn;if(o.call(r,t))return c(e.get(t));if(o.call(r,a))return c(e.get(a));e!==r&&e.get(t)}function Nn(e,t=!1){const n=this.__v_raw,s=se(n),r=se(e);return t||(e!==r&&qe(s,"has",e),qe(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Mn(e,t=!1){return e=e.__v_raw,!t&&qe(se(e),"iterate",It),Reflect.get(e,"size",e)}function ia(e){e=se(e);const t=se(this);return xs(t).has.call(t,e)||(t.add(e),it(t,"add",e,e)),this}function ua(e,t){t=se(t);const n=se(this),{has:s,get:r}=xs(n);let a=s.call(n,e);a||(e=se(e),a=s.call(n,e));const o=r.call(n,e);return n.set(e,t),a?bn(t,o)&&it(n,"set",e,t):it(n,"add",e,t),this}function pa(e){const t=se(this),{has:n,get:s}=xs(t);let r=n.call(t,e);r||(e=se(e),r=n.call(t,e)),s&&s.call(t,e);const a=t.delete(e);return r&&it(t,"delete",e,void 0),a}function fa(){const e=se(this),t=e.size!==0,n=e.clear();return t&&it(e,"clear",void 0,void 0),n}function Ln(e,t){return function(s,r){const a=this,o=a.__v_raw,c=se(o),l=t?Lr:e?Fr:xn;return!e&&qe(c,"iterate",It),o.forEach((u,i)=>s.call(r,l(u),l(i),a))}}function Un(e,t,n){return function(...s){const r=this.__v_raw,a=se(r),o=Bt(a),c=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=r[e](...s),i=n?Lr:t?Fr:xn;return!t&&qe(a,"iterate",l?sr:It),{next(){const{value:p,done:f}=u.next();return f?{value:p,done:f}:{value:c?[i(p[0]),i(p[1])]:i(p),done:f}},[Symbol.iterator](){return this}}}}function ft(e){return function(...t){return e==="delete"?!1:this}}function Pi(){const e={get(a){return Dn(this,a)},get size(){return Mn(this)},has:Nn,add:ia,set:ua,delete:pa,clear:fa,forEach:Ln(!1,!1)},t={get(a){return Dn(this,a,!1,!0)},get size(){return Mn(this)},has:Nn,add:ia,set:ua,delete:pa,clear:fa,forEach:Ln(!1,!0)},n={get(a){return Dn(this,a,!0)},get size(){return Mn(this,!0)},has(a){return Nn.call(this,a,!0)},add:ft("add"),set:ft("set"),delete:ft("delete"),clear:ft("clear"),forEach:Ln(!0,!1)},s={get(a){return Dn(this,a,!0,!0)},get size(){return Mn(this,!0)},has(a){return Nn.call(this,a,!0)},add:ft("add"),set:ft("set"),delete:ft("delete"),clear:ft("clear"),forEach:Ln(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=Un(a,!1,!1),n[a]=Un(a,!0,!1),t[a]=Un(a,!1,!0),s[a]=Un(a,!0,!0)}),[e,n,t,s]}const[ki,Ci,Ai,Ri]=Pi();function Ur(e,t){const n=t?e?Ri:Ai:e?Ci:ki;return(s,r,a)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(Z(n,r)&&r in s?n:s,r,a)}const qi={get:Ur(!1,!1)},Ti={get:Ur(!1,!0)},Di={get:Ur(!0,!1)},_l=new WeakMap,yl=new WeakMap,bl=new WeakMap,Ni=new WeakMap;function Mi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Li(e){return e.__v_skip||!Object.isExtensible(e)?0:Mi(ei(e))}function qn(e){return Wt(e)?e:Hr(e,!1,vl,qi,_l)}function Ui(e){return Hr(e,!1,Ii,Ti,yl)}function jl(e){return Hr(e,!0,Si,Di,bl)}function Hr(e,t,n,s,r){if(!pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=r.get(e);if(a)return a;const o=Li(e);if(o===0)return e;const c=new Proxy(e,o===2?s:n);return r.set(e,c),c}function zt(e){return Wt(e)?zt(e.__v_raw):!!(e&&e.__v_isReactive)}function Wt(e){return!!(e&&e.__v_isReadonly)}function as(e){return!!(e&&e.__v_isShallow)}function xl(e){return zt(e)||Wt(e)}function se(e){const t=e&&e.__v_raw;return t?se(t):e}function wl(e){return rs(e,"__v_skip",!0),e}const xn=e=>pe(e)?qn(e):e,Fr=e=>pe(e)?jl(e):e;function Ol(e){gt&&Be&&(e=se(e),dl(e.dep||(e.dep=Dr())))}function El(e,t){e=se(e);const n=e.dep;n&&rr(n)}function Se(e){return!!(e&&e.__v_isRef===!0)}function Le(e){return Sl(e,!1)}function Hi(e){return Sl(e,!0)}function Sl(e,t){return Se(e)?e:new Fi(e,t)}class Fi{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:se(t),this._value=n?t:xn(t)}get value(){return Ol(this),this._value}set value(t){const n=this.__v_isShallow||as(t)||Wt(t);t=n?t:se(t),bn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:xn(t),El(this))}}function tt(e){return Se(e)?e.value:e}const $i={get:(e,t,n)=>tt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Se(r)&&!Se(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Il(e){return zt(e)?e:new Proxy(e,$i)}class Bi{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Nr(t,()=>{this._dirty||(this._dirty=!0,El(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=se(this);return Ol(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function zi(e,t,n=!1){let s,r;const a=K(e);return a?(s=e,r=Ve):(s=e.get,r=e.set),new Bi(s,r,a||!r,n)}function vt(e,t,n,s){let r;try{r=s?e(...s):e()}catch(a){ws(a,t,n)}return r}function We(e,t,n,s){if(K(e)){const a=vt(e,t,n,s);return a&&ol(a)&&a.catch(o=>{ws(o,t,n)}),a}const r=[];for(let a=0;a<e.length;a++)r.push(We(e[a],t,n,s));return r}function ws(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,c=n;for(;a;){const u=a.ec;if(u){for(let i=0;i<u.length;i++)if(u[i](e,o,c)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){vt(l,null,10,[e,o,c]);return}}Ki(e,n,r,s)}function Ki(e,t,n,s=!0){console.error(e)}let wn=!1,ar=!1;const Ee=[];let Xe=0;const Kt=[];let ot=null,Et=0;const Pl=Promise.resolve();let $r=null;function kl(e){const t=$r||Pl;return e?t.then(this?e.bind(this):e):t}function Vi(e){let t=Xe+1,n=Ee.length;for(;t<n;){const s=t+n>>>1;On(Ee[s])<e?t=s+1:n=s}return t}function Br(e){(!Ee.length||!Ee.includes(e,wn&&e.allowRecurse?Xe+1:Xe))&&(e.id==null?Ee.push(e):Ee.splice(Vi(e.id),0,e),Cl())}function Cl(){!wn&&!ar&&(ar=!0,$r=Pl.then(Rl))}function Wi(e){const t=Ee.indexOf(e);t>Xe&&Ee.splice(t,1)}function Ji(e){z(e)?Kt.push(...e):(!ot||!ot.includes(e,e.allowRecurse?Et+1:Et))&&Kt.push(e),Cl()}function ha(e,t=wn?Xe+1:0){for(;t<Ee.length;t++){const n=Ee[t];n&&n.pre&&(Ee.splice(t,1),t--,n())}}function Al(e){if(Kt.length){const t=[...new Set(Kt)];if(Kt.length=0,ot){ot.push(...t);return}for(ot=t,ot.sort((n,s)=>On(n)-On(s)),Et=0;Et<ot.length;Et++)ot[Et]();ot=null,Et=0}}const On=e=>e.id==null?1/0:e.id,Qi=(e,t)=>{const n=On(e)-On(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Rl(e){ar=!1,wn=!0,Ee.sort(Qi);const t=Ve;try{for(Xe=0;Xe<Ee.length;Xe++){const n=Ee[Xe];n&&n.active!==!1&&vt(n,null,14)}}finally{Xe=0,Ee.length=0,Al(),wn=!1,$r=null,(Ee.length||Kt.length)&&Rl()}}function Gi(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ue;let r=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in s){const i=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:f}=s[i]||ue;f&&(r=n.map(g=>je(g)?g.trim():g)),p&&(r=n.map(si))}let c,l=s[c=Ms(t)]||s[c=Ms(st(t))];!l&&a&&(l=s[c=Ms(Yt(t))]),l&&We(l,e,6,r);const u=s[c+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,We(u,e,6,r)}}function ql(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const a=e.emits;let o={},c=!1;if(!K(e)){const l=u=>{const i=ql(u,t,!0);i&&(c=!0,xe(o,i))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!c?(pe(e)&&s.set(e,null),null):(z(a)?a.forEach(l=>o[l]=null):xe(o,a),pe(e)&&s.set(e,o),o)}function Os(e,t){return!e||!_s(t)?!1:(t=t.slice(2).replace(/Once$/,""),Z(e,t[0].toLowerCase()+t.slice(1))||Z(e,Yt(t))||Z(e,t))}let ze=null,Es=null;function os(e){const t=ze;return ze=e,Es=e&&e.type.__scopeId||null,t}function Ss(e){Es=e}function Is(){Es=null}function Zi(e,t=ze,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Oa(-1);const a=os(t);let o;try{o=e(...r)}finally{os(a),s._d&&Oa(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Us(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:a,propsOptions:[o],slots:c,attrs:l,emit:u,render:i,renderCache:p,data:f,setupState:g,ctx:b,inheritAttrs:y}=e;let w,S;const O=os(e);try{if(n.shapeFlag&4){const E=r||s;w=Ye(i.call(E,E,p,a,g,f,b)),S=l}else{const E=t;w=Ye(E.length>1?E(a,{attrs:l,slots:c,emit:u}):E(a,null)),S=t.props?l:Yi(l)}}catch(E){dn.length=0,ws(E,e,1),w=be(Ct)}let C=w;if(S&&y!==!1){const E=Object.keys(S),{shapeFlag:A}=C;E.length&&A&7&&(o&&E.some(Ar)&&(S=Xi(S,o)),C=Jt(C,S))}return n.dirs&&(C=Jt(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),w=C,os(O),w}const Yi=e=>{let t;for(const n in e)(n==="class"||n==="style"||_s(n))&&((t||(t={}))[n]=e[n]);return t},Xi=(e,t)=>{const n={};for(const s in e)(!Ar(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function eu(e,t,n){const{props:s,children:r,component:a}=e,{props:o,children:c,patchFlag:l}=t,u=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?da(s,o,u):!!o;if(l&8){const i=t.dynamicProps;for(let p=0;p<i.length;p++){const f=i[p];if(o[f]!==s[f]&&!Os(u,f))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:s===o?!1:s?o?da(s,o,u):!0:!!o;return!1}function da(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const a=s[r];if(t[a]!==e[a]&&!Os(n,a))return!0}return!1}function tu({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const nu=e=>e.__isSuspense;function su(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):Ji(e)}const Hn={};function fn(e,t,n){return Tl(e,t,n)}function Tl(e,t,{immediate:n,deep:s,flush:r,onTrack:a,onTrigger:o}=ue){var c;const l=fi()===((c=we)==null?void 0:c.scope)?we:null;let u,i=!1,p=!1;if(Se(e)?(u=()=>e.value,i=as(e)):zt(e)?(u=()=>e,s=!0):z(e)?(p=!0,i=e.some(E=>zt(E)||as(E)),u=()=>e.map(E=>{if(Se(E))return E.value;if(zt(E))return Ut(E);if(K(E))return vt(E,l,2)})):K(e)?t?u=()=>vt(e,l,2):u=()=>{if(!(l&&l.isUnmounted))return f&&f(),We(e,l,3,[g])}:u=Ve,t&&s){const E=u;u=()=>Ut(E())}let f,g=E=>{f=O.onStop=()=>{vt(E,l,4)}},b;if(Sn)if(g=Ve,t?n&&We(t,l,3,[u(),p?[]:void 0,g]):u(),r==="sync"){const E=Zu();b=E.__watcherHandles||(E.__watcherHandles=[])}else return Ve;let y=p?new Array(e.length).fill(Hn):Hn;const w=()=>{if(!!O.active)if(t){const E=O.run();(s||i||(p?E.some((A,F)=>bn(A,y[F])):bn(E,y)))&&(f&&f(),We(t,l,3,[E,y===Hn?void 0:p&&y[0]===Hn?[]:y,g]),y=E)}else O.run()};w.allowRecurse=!!t;let S;r==="sync"?S=w:r==="post"?S=()=>Ae(w,l&&l.suspense):(w.pre=!0,l&&(w.id=l.uid),S=()=>Br(w));const O=new Nr(u,S);t?n?w():y=O.run():r==="post"?Ae(O.run.bind(O),l&&l.suspense):O.run();const C=()=>{O.stop(),l&&l.scope&&Rr(l.scope.effects,O)};return b&&b.push(C),C}function ru(e,t,n){const s=this.proxy,r=je(e)?e.includes(".")?Dl(s,e):()=>s[e]:e.bind(s,s);let a;K(t)?a=t:(a=t.handler,n=t);const o=we;Qt(this);const c=Tl(r,a.bind(s),n);return o?Qt(o):Pt(),c}function Dl(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ut(e,t){if(!pe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Se(e))Ut(e.value,t);else if(z(e))for(let n=0;n<e.length;n++)Ut(e[n],t);else if(al(e)||Bt(e))e.forEach(n=>{Ut(n,t)});else if(cl(e))for(const n in e)Ut(e[n],t);return e}function bt(e,t,n,s){const r=e.dirs,a=t&&t.dirs;for(let o=0;o<r.length;o++){const c=r[o];a&&(c.oldValue=a[o].value);let l=c.dir[s];l&&(Xt(),We(l,n,8,[e.el,c,e,t]),en())}}function zr(e,t){return K(e)?(()=>xe({name:e.name},t,{setup:e}))():e}const Zn=e=>!!e.type.__asyncLoader,Nl=e=>e.type.__isKeepAlive;function au(e,t){Ml(e,"a",t)}function ou(e,t){Ml(e,"da",t)}function Ml(e,t,n=we){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Ps(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Nl(r.parent.vnode)&&lu(s,t,n,r),r=r.parent}}function lu(e,t,n,s){const r=Ps(t,e,s,!0);Ll(()=>{Rr(s[t],r)},n)}function Ps(e,t,n=we,s=!1){if(n){const r=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Xt(),Qt(n);const c=We(t,n,e,o);return Pt(),en(),c});return s?r.unshift(a):r.push(a),a}}const ut=e=>(t,n=we)=>(!Sn||e==="sp")&&Ps(e,(...s)=>t(...s),n),cu=ut("bm"),At=ut("m"),iu=ut("bu"),uu=ut("u"),pu=ut("bum"),Ll=ut("um"),fu=ut("sp"),hu=ut("rtg"),du=ut("rtc");function mu(e,t=we){Ps("ec",e,t)}const Ul="components";function Hl(e,t){return vu(Ul,e,!0,t)||e}const gu=Symbol.for("v-ndc");function vu(e,t,n=!0,s=!1){const r=ze||we;if(r){const a=r.type;if(e===Ul){const c=Ju(a,!1);if(c&&(c===t||c===st(t)||c===js(st(t))))return a}const o=ma(r[e]||a[e],t)||ma(r.appContext[e],t);return!o&&s?a:o}}function ma(e,t){return e&&(e[t]||e[st(t)]||e[js(st(t))])}function kt(e,t,n,s){let r;const a=n&&n[s];if(z(e)||je(e)){r=new Array(e.length);for(let o=0,c=e.length;o<c;o++)r[o]=t(e[o],o,void 0,a&&a[o])}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,a&&a[o])}else if(pe(e))if(e[Symbol.iterator])r=Array.from(e,(o,c)=>t(o,c,void 0,a&&a[c]));else{const o=Object.keys(e);r=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const u=o[c];r[c]=t(e[u],u,c,a&&a[c])}}else r=[];return n&&(n[s]=r),r}const or=e=>e?Zl(e)?Gr(e)||e.proxy:or(e.parent):null,hn=xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>or(e.parent),$root:e=>or(e.root),$emit:e=>e.emit,$options:e=>Kr(e),$forceUpdate:e=>e.f||(e.f=()=>Br(e.update)),$nextTick:e=>e.n||(e.n=kl.bind(e.proxy)),$watch:e=>ru.bind(e)}),Hs=(e,t)=>e!==ue&&!e.__isScriptSetup&&Z(e,t),_u={get({_:e},t){const{ctx:n,setupState:s,data:r,props:a,accessCache:o,type:c,appContext:l}=e;let u;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return a[t]}else{if(Hs(s,t))return o[t]=1,s[t];if(r!==ue&&Z(r,t))return o[t]=2,r[t];if((u=e.propsOptions[0])&&Z(u,t))return o[t]=3,a[t];if(n!==ue&&Z(n,t))return o[t]=4,n[t];lr&&(o[t]=0)}}const i=hn[t];let p,f;if(i)return t==="$attrs"&&qe(e,"get",t),i(e);if((p=c.__cssModules)&&(p=p[t]))return p;if(n!==ue&&Z(n,t))return o[t]=4,n[t];if(f=l.config.globalProperties,Z(f,t))return f[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:a}=e;return Hs(r,t)?(r[t]=n,!0):s!==ue&&Z(s,t)?(s[t]=n,!0):Z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:a}},o){let c;return!!n[o]||e!==ue&&Z(e,o)||Hs(t,o)||(c=a[0])&&Z(c,o)||Z(s,o)||Z(hn,o)||Z(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ga(e){return z(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let lr=!0;function yu(e){const t=Kr(e),n=e.proxy,s=e.ctx;lr=!1,t.beforeCreate&&va(t.beforeCreate,e,"bc");const{data:r,computed:a,methods:o,watch:c,provide:l,inject:u,created:i,beforeMount:p,mounted:f,beforeUpdate:g,updated:b,activated:y,deactivated:w,beforeDestroy:S,beforeUnmount:O,destroyed:C,unmounted:E,render:A,renderTracked:F,renderTriggered:Y,errorCaptured:ie,serverPrefetch:le,expose:Q,inheritAttrs:ce,components:de,directives:he,filters:me}=t;if(u&&bu(u,s,null),o)for(const te in o){const W=o[te];K(W)&&(s[te]=W.bind(n))}if(r){const te=r.call(n,n);pe(te)&&(e.data=qn(te))}if(lr=!0,a)for(const te in a){const W=a[te],Te=K(W)?W.bind(n,n):K(W.get)?W.get.bind(n,n):Ve,He=!K(W)&&K(W.set)?W.set.bind(n):Ve,Ie=Me({get:Te,set:He});Object.defineProperty(s,te,{enumerable:!0,configurable:!0,get:()=>Ie.value,set:ge=>Ie.value=ge})}if(c)for(const te in c)Fl(c[te],s,n,te);if(l){const te=K(l)?l.call(n):l;Reflect.ownKeys(te).forEach(W=>{Yn(W,te[W])})}i&&va(i,e,"c");function ae(te,W){z(W)?W.forEach(Te=>te(Te.bind(n))):W&&te(W.bind(n))}if(ae(cu,p),ae(At,f),ae(iu,g),ae(uu,b),ae(au,y),ae(ou,w),ae(mu,ie),ae(du,F),ae(hu,Y),ae(pu,O),ae(Ll,E),ae(fu,le),z(Q))if(Q.length){const te=e.exposed||(e.exposed={});Q.forEach(W=>{Object.defineProperty(te,W,{get:()=>n[W],set:Te=>n[W]=Te})})}else e.exposed||(e.exposed={});A&&e.render===Ve&&(e.render=A),ce!=null&&(e.inheritAttrs=ce),de&&(e.components=de),he&&(e.directives=he)}function bu(e,t,n=Ve){z(e)&&(e=cr(e));for(const s in e){const r=e[s];let a;pe(r)?"default"in r?a=Je(r.from||s,r.default,!0):a=Je(r.from||s):a=Je(r),Se(a)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):t[s]=a}}function va(e,t,n){We(z(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Fl(e,t,n,s){const r=s.includes(".")?Dl(n,s):()=>n[s];if(je(e)){const a=t[e];K(a)&&fn(r,a)}else if(K(e))fn(r,e.bind(n));else if(pe(e))if(z(e))e.forEach(a=>Fl(a,t,n,s));else{const a=K(e.handler)?e.handler.bind(n):t[e.handler];K(a)&&fn(r,a,e)}}function Kr(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,c=a.get(t);let l;return c?l=c:!r.length&&!n&&!s?l=t:(l={},r.length&&r.forEach(u=>ls(l,u,o,!0)),ls(l,t,o)),pe(t)&&a.set(t,l),l}function ls(e,t,n,s=!1){const{mixins:r,extends:a}=t;a&&ls(e,a,n,!0),r&&r.forEach(o=>ls(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const c=ju[o]||n&&n[o];e[o]=c?c(e[o],t[o]):t[o]}return e}const ju={data:_a,props:ya,emits:ya,methods:cn,computed:cn,beforeCreate:ke,created:ke,beforeMount:ke,mounted:ke,beforeUpdate:ke,updated:ke,beforeDestroy:ke,beforeUnmount:ke,destroyed:ke,unmounted:ke,activated:ke,deactivated:ke,errorCaptured:ke,serverPrefetch:ke,components:cn,directives:cn,watch:wu,provide:_a,inject:xu};function _a(e,t){return t?e?function(){return xe(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function xu(e,t){return cn(cr(e),cr(t))}function cr(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ke(e,t){return e?[...new Set([].concat(e,t))]:t}function cn(e,t){return e?xe(Object.create(null),e,t):t}function ya(e,t){return e?z(e)&&z(t)?[...new Set([...e,...t])]:xe(Object.create(null),ga(e),ga(t!=null?t:{})):t}function wu(e,t){if(!e)return t;if(!t)return e;const n=xe(Object.create(null),e);for(const s in t)n[s]=ke(e[s],t[s]);return n}function $l(){return{app:null,config:{isNativeTag:Zc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ou=0;function Eu(e,t){return function(s,r=null){K(s)||(s=xe({},s)),r!=null&&!pe(r)&&(r=null);const a=$l(),o=new Set;let c=!1;const l=a.app={_uid:Ou++,_component:s,_props:r,_container:null,_context:a,_instance:null,version:Yu,get config(){return a.config},set config(u){},use(u,...i){return o.has(u)||(u&&K(u.install)?(o.add(u),u.install(l,...i)):K(u)&&(o.add(u),u(l,...i))),l},mixin(u){return a.mixins.includes(u)||a.mixins.push(u),l},component(u,i){return i?(a.components[u]=i,l):a.components[u]},directive(u,i){return i?(a.directives[u]=i,l):a.directives[u]},mount(u,i,p){if(!c){const f=be(s,r);return f.appContext=a,i&&t?t(f,u):e(f,u,p),c=!0,l._container=u,u.__vue_app__=l,Gr(f.component)||f.component.proxy}},unmount(){c&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,i){return a.provides[u]=i,l},runWithContext(u){cs=l;try{return u()}finally{cs=null}}};return l}}let cs=null;function Yn(e,t){if(we){let n=we.provides;const s=we.parent&&we.parent.provides;s===n&&(n=we.provides=Object.create(s)),n[e]=t}}function Je(e,t,n=!1){const s=we||ze;if(s||cs){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:cs._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&K(t)?t.call(s&&s.proxy):t}}function Su(e,t,n,s=!1){const r={},a={};rs(a,Cs,1),e.propsDefaults=Object.create(null),Bl(e,t,r,a);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:Ui(r):e.type.props?e.props=r:e.props=a,e.attrs=a}function Iu(e,t,n,s){const{props:r,attrs:a,vnode:{patchFlag:o}}=e,c=se(r),[l]=e.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const i=e.vnode.dynamicProps;for(let p=0;p<i.length;p++){let f=i[p];if(Os(e.emitsOptions,f))continue;const g=t[f];if(l)if(Z(a,f))g!==a[f]&&(a[f]=g,u=!0);else{const b=st(f);r[b]=ir(l,c,b,g,e,!1)}else g!==a[f]&&(a[f]=g,u=!0)}}}else{Bl(e,t,r,a)&&(u=!0);let i;for(const p in c)(!t||!Z(t,p)&&((i=Yt(p))===p||!Z(t,i)))&&(l?n&&(n[p]!==void 0||n[i]!==void 0)&&(r[p]=ir(l,c,p,void 0,e,!0)):delete r[p]);if(a!==c)for(const p in a)(!t||!Z(t,p)&&!0)&&(delete a[p],u=!0)}u&&it(e,"set","$attrs")}function Bl(e,t,n,s){const[r,a]=e.propsOptions;let o=!1,c;if(t)for(let l in t){if(Gn(l))continue;const u=t[l];let i;r&&Z(r,i=st(l))?!a||!a.includes(i)?n[i]=u:(c||(c={}))[i]=u:Os(e.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,o=!0)}if(a){const l=se(n),u=c||ue;for(let i=0;i<a.length;i++){const p=a[i];n[p]=ir(r,l,p,u[p],e,!Z(u,p))}}return o}function ir(e,t,n,s,r,a){const o=e[n];if(o!=null){const c=Z(o,"default");if(c&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&K(l)){const{propsDefaults:u}=r;n in u?s=u[n]:(Qt(r),s=u[n]=l.call(null,t),Pt())}else s=l}o[0]&&(a&&!c?s=!1:o[1]&&(s===""||s===Yt(n))&&(s=!0))}return s}function zl(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const a=e.props,o={},c=[];let l=!1;if(!K(e)){const i=p=>{l=!0;const[f,g]=zl(p,t,!0);xe(o,f),g&&c.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!a&&!l)return pe(e)&&s.set(e,$t),$t;if(z(a))for(let i=0;i<a.length;i++){const p=st(a[i]);ba(p)&&(o[p]=ue)}else if(a)for(const i in a){const p=st(i);if(ba(p)){const f=a[i],g=o[p]=z(f)||K(f)?{type:f}:xe({},f);if(g){const b=wa(Boolean,g.type),y=wa(String,g.type);g[0]=b>-1,g[1]=y<0||b<y,(b>-1||Z(g,"default"))&&c.push(p)}}}const u=[o,c];return pe(e)&&s.set(e,u),u}function ba(e){return e[0]!=="$"}function ja(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function xa(e,t){return ja(e)===ja(t)}function wa(e,t){return z(t)?t.findIndex(n=>xa(n,e)):K(t)&&xa(t,e)?0:-1}const Kl=e=>e[0]==="_"||e==="$stable",Vr=e=>z(e)?e.map(Ye):[Ye(e)],Pu=(e,t,n)=>{if(t._n)return t;const s=Zi((...r)=>Vr(t(...r)),n);return s._c=!1,s},Vl=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Kl(r))continue;const a=e[r];if(K(a))t[r]=Pu(r,a,s);else if(a!=null){const o=Vr(a);t[r]=()=>o}}},Wl=(e,t)=>{const n=Vr(t);e.slots.default=()=>n},ku=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=se(t),rs(t,"_",n)):Vl(t,e.slots={})}else e.slots={},t&&Wl(e,t);rs(e.slots,Cs,1)},Cu=(e,t,n)=>{const{vnode:s,slots:r}=e;let a=!0,o=ue;if(s.shapeFlag&32){const c=t._;c?n&&c===1?a=!1:(xe(r,t),!n&&c===1&&delete r._):(a=!t.$stable,Vl(t,r)),o=t}else t&&(Wl(e,t),o={default:1});if(a)for(const c in r)!Kl(c)&&!(c in o)&&delete r[c]};function ur(e,t,n,s,r=!1){if(z(e)){e.forEach((f,g)=>ur(f,t&&(z(t)?t[g]:t),n,s,r));return}if(Zn(s)&&!r)return;const a=s.shapeFlag&4?Gr(s.component)||s.component.proxy:s.el,o=r?null:a,{i:c,r:l}=e,u=t&&t.r,i=c.refs===ue?c.refs={}:c.refs,p=c.setupState;if(u!=null&&u!==l&&(je(u)?(i[u]=null,Z(p,u)&&(p[u]=null)):Se(u)&&(u.value=null)),K(l))vt(l,c,12,[o,i]);else{const f=je(l),g=Se(l);if(f||g){const b=()=>{if(e.f){const y=f?Z(p,l)?p[l]:i[l]:l.value;r?z(y)&&Rr(y,a):z(y)?y.includes(a)||y.push(a):f?(i[l]=[a],Z(p,l)&&(p[l]=i[l])):(l.value=[a],e.k&&(i[e.k]=l.value))}else f?(i[l]=o,Z(p,l)&&(p[l]=o)):g&&(l.value=o,e.k&&(i[e.k]=o))};o?(b.id=-1,Ae(b,n)):b()}}}const Ae=su;function Au(e){return Ru(e)}function Ru(e,t){const n=er();n.__VUE__=!0;const{insert:s,remove:r,patchProp:a,createElement:o,createText:c,createComment:l,setText:u,setElementText:i,parentNode:p,nextSibling:f,setScopeId:g=Ve,insertStaticContent:b}=e,y=(h,d,v,_=null,j=null,I=null,T=!1,P=null,R=!!d.dynamicChildren)=>{if(h===d)return;h&&!sn(h,d)&&(_=x(h),ge(h,j,I,!0),h=null),d.patchFlag===-2&&(R=!1,d.dynamicChildren=null);const{type:k,ref:U,shapeFlag:N}=d;switch(k){case ks:w(h,d,v,_);break;case Ct:S(h,d,v,_);break;case Fs:h==null&&O(d,v,_,T);break;case ye:de(h,d,v,_,j,I,T,P,R);break;default:N&1?A(h,d,v,_,j,I,T,P,R):N&6?he(h,d,v,_,j,I,T,P,R):(N&64||N&128)&&k.process(h,d,v,_,j,I,T,P,R,q)}U!=null&&j&&ur(U,h&&h.ref,I,d||h,!d)},w=(h,d,v,_)=>{if(h==null)s(d.el=c(d.children),v,_);else{const j=d.el=h.el;d.children!==h.children&&u(j,d.children)}},S=(h,d,v,_)=>{h==null?s(d.el=l(d.children||""),v,_):d.el=h.el},O=(h,d,v,_)=>{[h.el,h.anchor]=b(h.children,d,v,_,h.el,h.anchor)},C=({el:h,anchor:d},v,_)=>{let j;for(;h&&h!==d;)j=f(h),s(h,v,_),h=j;s(d,v,_)},E=({el:h,anchor:d})=>{let v;for(;h&&h!==d;)v=f(h),r(h),h=v;r(d)},A=(h,d,v,_,j,I,T,P,R)=>{T=T||d.type==="svg",h==null?F(d,v,_,j,I,T,P,R):le(h,d,j,I,T,P,R)},F=(h,d,v,_,j,I,T,P)=>{let R,k;const{type:U,props:N,shapeFlag:L,transition:$,dirs:B}=h;if(R=h.el=o(h.type,I,N&&N.is,N),L&8?i(R,h.children):L&16&&ie(h.children,R,null,_,j,I&&U!=="foreignObject",T,P),B&&bt(h,null,_,"created"),Y(R,h,h.scopeId,T,_),N){for(const G in N)G!=="value"&&!Gn(G)&&a(R,G,null,N[G],I,h.children,_,j,_e);"value"in N&&a(R,"value",null,N.value),(k=N.onVnodeBeforeMount)&&Ze(k,_,h)}B&&bt(h,null,_,"beforeMount");const ee=(!j||j&&!j.pendingBranch)&&$&&!$.persisted;ee&&$.beforeEnter(R),s(R,d,v),((k=N&&N.onVnodeMounted)||ee||B)&&Ae(()=>{k&&Ze(k,_,h),ee&&$.enter(R),B&&bt(h,null,_,"mounted")},j)},Y=(h,d,v,_,j)=>{if(v&&g(h,v),_)for(let I=0;I<_.length;I++)g(h,_[I]);if(j){let I=j.subTree;if(d===I){const T=j.vnode;Y(h,T,T.scopeId,T.slotScopeIds,j.parent)}}},ie=(h,d,v,_,j,I,T,P,R=0)=>{for(let k=R;k<h.length;k++){const U=h[k]=P?dt(h[k]):Ye(h[k]);y(null,U,d,v,_,j,I,T,P)}},le=(h,d,v,_,j,I,T)=>{const P=d.el=h.el;let{patchFlag:R,dynamicChildren:k,dirs:U}=d;R|=h.patchFlag&16;const N=h.props||ue,L=d.props||ue;let $;v&&jt(v,!1),($=L.onVnodeBeforeUpdate)&&Ze($,v,d,h),U&&bt(d,h,v,"beforeUpdate"),v&&jt(v,!0);const B=j&&d.type!=="foreignObject";if(k?Q(h.dynamicChildren,k,P,v,_,B,I):T||W(h,d,P,null,v,_,B,I,!1),R>0){if(R&16)ce(P,d,N,L,v,_,j);else if(R&2&&N.class!==L.class&&a(P,"class",null,L.class,j),R&4&&a(P,"style",N.style,L.style,j),R&8){const ee=d.dynamicProps;for(let G=0;G<ee.length;G++){const ve=ee[G],Fe=N[ve],Rt=L[ve];(Rt!==Fe||ve==="value")&&a(P,ve,Fe,Rt,j,h.children,v,_,_e)}}R&1&&h.children!==d.children&&i(P,d.children)}else!T&&k==null&&ce(P,d,N,L,v,_,j);(($=L.onVnodeUpdated)||U)&&Ae(()=>{$&&Ze($,v,d,h),U&&bt(d,h,v,"updated")},_)},Q=(h,d,v,_,j,I,T)=>{for(let P=0;P<d.length;P++){const R=h[P],k=d[P],U=R.el&&(R.type===ye||!sn(R,k)||R.shapeFlag&70)?p(R.el):v;y(R,k,U,null,_,j,I,T,!0)}},ce=(h,d,v,_,j,I,T)=>{if(v!==_){if(v!==ue)for(const P in v)!Gn(P)&&!(P in _)&&a(h,P,v[P],null,T,d.children,j,I,_e);for(const P in _){if(Gn(P))continue;const R=_[P],k=v[P];R!==k&&P!=="value"&&a(h,P,k,R,T,d.children,j,I,_e)}"value"in _&&a(h,"value",v.value,_.value)}},de=(h,d,v,_,j,I,T,P,R)=>{const k=d.el=h?h.el:c(""),U=d.anchor=h?h.anchor:c("");let{patchFlag:N,dynamicChildren:L,slotScopeIds:$}=d;$&&(P=P?P.concat($):$),h==null?(s(k,v,_),s(U,v,_),ie(d.children,v,U,j,I,T,P,R)):N>0&&N&64&&L&&h.dynamicChildren?(Q(h.dynamicChildren,L,v,j,I,T,P),(d.key!=null||j&&d===j.subTree)&&Jl(h,d,!0)):W(h,d,v,U,j,I,T,P,R)},he=(h,d,v,_,j,I,T,P,R)=>{d.slotScopeIds=P,h==null?d.shapeFlag&512?j.ctx.activate(d,v,_,T,R):me(d,v,_,j,I,T,R):Ue(h,d,R)},me=(h,d,v,_,j,I,T)=>{const P=h.component=Bu(h,_,j);if(Nl(h)&&(P.ctx.renderer=q),zu(P),P.asyncDep){if(j&&j.registerDep(P,ae),!h.el){const R=P.subTree=be(Ct);S(null,R,d,v)}return}ae(P,h,d,v,j,I,T)},Ue=(h,d,v)=>{const _=d.component=h.component;if(eu(h,d,v))if(_.asyncDep&&!_.asyncResolved){te(_,d,v);return}else _.next=d,Wi(_.update),_.update();else d.el=h.el,_.vnode=d},ae=(h,d,v,_,j,I,T)=>{const P=()=>{if(h.isMounted){let{next:U,bu:N,u:L,parent:$,vnode:B}=h,ee=U,G;jt(h,!1),U?(U.el=B.el,te(h,U,T)):U=B,N&&Ls(N),(G=U.props&&U.props.onVnodeBeforeUpdate)&&Ze(G,$,U,B),jt(h,!0);const ve=Us(h),Fe=h.subTree;h.subTree=ve,y(Fe,ve,p(Fe.el),x(Fe),h,j,I),U.el=ve.el,ee===null&&tu(h,ve.el),L&&Ae(L,j),(G=U.props&&U.props.onVnodeUpdated)&&Ae(()=>Ze(G,$,U,B),j)}else{let U;const{el:N,props:L}=d,{bm:$,m:B,parent:ee}=h,G=Zn(d);if(jt(h,!1),$&&Ls($),!G&&(U=L&&L.onVnodeBeforeMount)&&Ze(U,ee,d),jt(h,!0),N&&X){const ve=()=>{h.subTree=Us(h),X(N,h.subTree,h,j,null)};G?d.type.__asyncLoader().then(()=>!h.isUnmounted&&ve()):ve()}else{const ve=h.subTree=Us(h);y(null,ve,v,_,h,j,I),d.el=ve.el}if(B&&Ae(B,j),!G&&(U=L&&L.onVnodeMounted)){const ve=d;Ae(()=>Ze(U,ee,ve),j)}(d.shapeFlag&256||ee&&Zn(ee.vnode)&&ee.vnode.shapeFlag&256)&&h.a&&Ae(h.a,j),h.isMounted=!0,d=v=_=null}},R=h.effect=new Nr(P,()=>Br(k),h.scope),k=h.update=()=>R.run();k.id=h.uid,jt(h,!0),k()},te=(h,d,v)=>{d.component=h;const _=h.vnode.props;h.vnode=d,h.next=null,Iu(h,d.props,_,v),Cu(h,d.children,v),Xt(),ha(),en()},W=(h,d,v,_,j,I,T,P,R=!1)=>{const k=h&&h.children,U=h?h.shapeFlag:0,N=d.children,{patchFlag:L,shapeFlag:$}=d;if(L>0){if(L&128){He(k,N,v,_,j,I,T,P,R);return}else if(L&256){Te(k,N,v,_,j,I,T,P,R);return}}$&8?(U&16&&_e(k,j,I),N!==k&&i(v,N)):U&16?$&16?He(k,N,v,_,j,I,T,P,R):_e(k,j,I,!0):(U&8&&i(v,""),$&16&&ie(N,v,_,j,I,T,P,R))},Te=(h,d,v,_,j,I,T,P,R)=>{h=h||$t,d=d||$t;const k=h.length,U=d.length,N=Math.min(k,U);let L;for(L=0;L<N;L++){const $=d[L]=R?dt(d[L]):Ye(d[L]);y(h[L],$,v,null,j,I,T,P,R)}k>U?_e(h,j,I,!0,!1,N):ie(d,v,_,j,I,T,P,R,N)},He=(h,d,v,_,j,I,T,P,R)=>{let k=0;const U=d.length;let N=h.length-1,L=U-1;for(;k<=N&&k<=L;){const $=h[k],B=d[k]=R?dt(d[k]):Ye(d[k]);if(sn($,B))y($,B,v,null,j,I,T,P,R);else break;k++}for(;k<=N&&k<=L;){const $=h[N],B=d[L]=R?dt(d[L]):Ye(d[L]);if(sn($,B))y($,B,v,null,j,I,T,P,R);else break;N--,L--}if(k>N){if(k<=L){const $=L+1,B=$<U?d[$].el:_;for(;k<=L;)y(null,d[k]=R?dt(d[k]):Ye(d[k]),v,B,j,I,T,P,R),k++}}else if(k>L)for(;k<=N;)ge(h[k],j,I,!0),k++;else{const $=k,B=k,ee=new Map;for(k=B;k<=L;k++){const De=d[k]=R?dt(d[k]):Ye(d[k]);De.key!=null&&ee.set(De.key,k)}let G,ve=0;const Fe=L-B+1;let Rt=!1,na=0;const nn=new Array(Fe);for(k=0;k<Fe;k++)nn[k]=0;for(k=$;k<=N;k++){const De=h[k];if(ve>=Fe){ge(De,j,I,!0);continue}let Ge;if(De.key!=null)Ge=ee.get(De.key);else for(G=B;G<=L;G++)if(nn[G-B]===0&&sn(De,d[G])){Ge=G;break}Ge===void 0?ge(De,j,I,!0):(nn[Ge-B]=k+1,Ge>=na?na=Ge:Rt=!0,y(De,d[Ge],v,null,j,I,T,P,R),ve++)}const sa=Rt?qu(nn):$t;for(G=sa.length-1,k=Fe-1;k>=0;k--){const De=B+k,Ge=d[De],ra=De+1<U?d[De+1].el:_;nn[k]===0?y(null,Ge,v,ra,j,I,T,P,R):Rt&&(G<0||k!==sa[G]?Ie(Ge,v,ra,2):G--)}}},Ie=(h,d,v,_,j=null)=>{const{el:I,type:T,transition:P,children:R,shapeFlag:k}=h;if(k&6){Ie(h.component.subTree,d,v,_);return}if(k&128){h.suspense.move(d,v,_);return}if(k&64){T.move(h,d,v,q);return}if(T===ye){s(I,d,v);for(let N=0;N<R.length;N++)Ie(R[N],d,v,_);s(h.anchor,d,v);return}if(T===Fs){C(h,d,v);return}if(_!==2&&k&1&&P)if(_===0)P.beforeEnter(I),s(I,d,v),Ae(()=>P.enter(I),j);else{const{leave:N,delayLeave:L,afterLeave:$}=P,B=()=>s(I,d,v),ee=()=>{N(I,()=>{B(),$&&$()})};L?L(I,B,ee):ee()}else s(I,d,v)},ge=(h,d,v,_=!1,j=!1)=>{const{type:I,props:T,ref:P,children:R,dynamicChildren:k,shapeFlag:U,patchFlag:N,dirs:L}=h;if(P!=null&&ur(P,null,v,h,!0),U&256){d.ctx.deactivate(h);return}const $=U&1&&L,B=!Zn(h);let ee;if(B&&(ee=T&&T.onVnodeBeforeUnmount)&&Ze(ee,d,h),U&6)Ne(h.component,v,_);else{if(U&128){h.suspense.unmount(v,_);return}$&&bt(h,null,d,"beforeUnmount"),U&64?h.type.remove(h,d,v,j,q,_):k&&(I!==ye||N>0&&N&64)?_e(k,d,v,!1,!0):(I===ye&&N&384||!j&&U&16)&&_e(R,d,v),_&&Pe(h)}(B&&(ee=T&&T.onVnodeUnmounted)||$)&&Ae(()=>{ee&&Ze(ee,d,h),$&&bt(h,null,d,"unmounted")},v)},Pe=h=>{const{type:d,el:v,anchor:_,transition:j}=h;if(d===ye){rt(v,_);return}if(d===Fs){E(h);return}const I=()=>{r(v),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(h.shapeFlag&1&&j&&!j.persisted){const{leave:T,delayLeave:P}=j,R=()=>T(v,I);P?P(h.el,I,R):R()}else I()},rt=(h,d)=>{let v;for(;h!==d;)v=f(h),r(h),h=v;r(d)},Ne=(h,d,v)=>{const{bum:_,scope:j,update:I,subTree:T,um:P}=h;_&&Ls(_),j.stop(),I&&(I.active=!1,ge(T,h,d,v)),P&&Ae(P,d),Ae(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},_e=(h,d,v,_=!1,j=!1,I=0)=>{for(let T=I;T<h.length;T++)ge(h[T],d,v,_,j)},x=h=>h.shapeFlag&6?x(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),D=(h,d,v)=>{h==null?d._vnode&&ge(d._vnode,null,null,!0):y(d._vnode||null,h,d,null,null,null,v),ha(),Al(),d._vnode=h},q={p:y,um:ge,m:Ie,r:Pe,mt:me,mc:ie,pc:W,pbc:Q,n:x,o:e};let M,X;return t&&([M,X]=t(q)),{render:D,hydrate:M,createApp:Eu(D,M)}}function jt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Jl(e,t,n=!1){const s=e.children,r=t.children;if(z(s)&&z(r))for(let a=0;a<s.length;a++){const o=s[a];let c=r[a];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[a]=dt(r[a]),c.el=o.el),n||Jl(o,c)),c.type===ks&&(c.el=o.el)}}function qu(e){const t=e.slice(),n=[0];let s,r,a,o,c;const l=e.length;for(s=0;s<l;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(a=0,o=n.length-1;a<o;)c=a+o>>1,e[n[c]]<u?a=c+1:o=c;u<e[n[a]]&&(a>0&&(t[s]=n[a-1]),n[a]=s)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}const Tu=e=>e.__isTeleport,ye=Symbol.for("v-fgt"),ks=Symbol.for("v-txt"),Ct=Symbol.for("v-cmt"),Fs=Symbol.for("v-stc"),dn=[];let Ke=null;function oe(e=!1){dn.push(Ke=e?null:[])}function Du(){dn.pop(),Ke=dn[dn.length-1]||null}let En=1;function Oa(e){En+=e}function Ql(e){return e.dynamicChildren=En>0?Ke||$t:null,Du(),En>0&&Ke&&Ke.push(e),e}function fe(e,t,n,s,r,a){return Ql(V(e,t,n,s,r,a,!0))}function Wr(e,t,n,s,r){return Ql(be(e,t,n,s,r,!0))}function pr(e){return e?e.__v_isVNode===!0:!1}function sn(e,t){return e.type===t.type&&e.key===t.key}const Cs="__vInternal",Gl=({key:e})=>e!=null?e:null,Xn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?je(e)||Se(e)||K(e)?{i:ze,r:e,k:t,f:!!n}:e:null);function V(e,t=null,n=null,s=0,r=null,a=e===ye?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Gl(t),ref:t&&Xn(t),scopeId:Es,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ze};return c?(Jr(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=je(n)?8:16),En>0&&!o&&Ke&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&Ke.push(l),l}const be=Nu;function Nu(e,t=null,n=null,s=0,r=null,a=!1){if((!e||e===gu)&&(e=Ct),pr(e)){const c=Jt(e,t,!0);return n&&Jr(c,n),En>0&&!a&&Ke&&(c.shapeFlag&6?Ke[Ke.indexOf(e)]=c:Ke.push(c)),c.patchFlag|=-2,c}if(Qu(e)&&(e=e.__vccOpts),t){t=Mu(t);let{class:c,style:l}=t;c&&!je(c)&&(t.class=Rn(c)),pe(l)&&(xl(l)&&!z(l)&&(l=xe({},l)),t.style=jn(l))}const o=je(e)?1:nu(e)?128:Tu(e)?64:pe(e)?4:K(e)?2:0;return V(e,t,n,s,r,o,a,!0)}function Mu(e){return e?xl(e)||Cs in e?xe({},e):e:null}function Jt(e,t,n=!1){const{props:s,ref:r,patchFlag:a,children:o}=e,c=t?Hu(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Gl(c),ref:t&&t.ref?n&&r?z(r)?r.concat(Xn(t)):[r,Xn(t)]:Xn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ye?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Jt(e.ssContent),ssFallback:e.ssFallback&&Jt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Lu(e=" ",t=0){return be(ks,null,e,t)}function Uu(e="",t=!1){return t?(oe(),Wr(Ct,null,e)):be(Ct,null,e)}function Ye(e){return e==null||typeof e=="boolean"?be(Ct):z(e)?be(ye,null,e.slice()):typeof e=="object"?dt(e):be(ks,null,String(e))}function dt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Jt(e)}function Jr(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Jr(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(Cs in t)?t._ctx=ze:r===3&&ze&&(ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:ze},n=32):(t=String(t),s&64?(n=16,t=[Lu(t)]):n=8);e.children=t,e.shapeFlag|=n}function Hu(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Rn([t.class,s.class]));else if(r==="style")t.style=jn([t.style,s.style]);else if(_s(r)){const a=t[r],o=s[r];o&&a!==o&&!(z(a)&&a.includes(o))&&(t[r]=a?[].concat(a,o):o)}else r!==""&&(t[r]=s[r])}return t}function Ze(e,t,n,s=null){We(e,t,7,[n,s])}const Fu=$l();let $u=0;function Bu(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Fu,a={uid:$u++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ui(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zl(s,r),emitsOptions:ql(s,r),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:s.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Gi.bind(null,a),e.ce&&e.ce(a),a}let we=null,Qr,qt,Ea="__VUE_INSTANCE_SETTERS__";(qt=er()[Ea])||(qt=er()[Ea]=[]),qt.push(e=>we=e),Qr=e=>{qt.length>1?qt.forEach(t=>t(e)):qt[0](e)};const Qt=e=>{Qr(e),e.scope.on()},Pt=()=>{we&&we.scope.off(),Qr(null)};function Zl(e){return e.vnode.shapeFlag&4}let Sn=!1;function zu(e,t=!1){Sn=t;const{props:n,children:s}=e.vnode,r=Zl(e);Su(e,n,r,t),ku(e,s);const a=r?Ku(e,t):void 0;return Sn=!1,a}function Ku(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=wl(new Proxy(e.ctx,_u));const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?Wu(e):null;Qt(e),Xt();const a=vt(s,e,0,[e.props,r]);if(en(),Pt(),ol(a)){if(a.then(Pt,Pt),t)return a.then(o=>{Sa(e,o,t)}).catch(o=>{ws(o,e,0)});e.asyncDep=a}else Sa(e,a,t)}else Yl(e,t)}function Sa(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=Il(t)),Yl(e,n)}let Ia;function Yl(e,t,n){const s=e.type;if(!e.render){if(!t&&Ia&&!s.render){const r=s.template||Kr(e).template;if(r){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:c,compilerOptions:l}=s,u=xe(xe({isCustomElement:a,delimiters:c},o),l);s.render=Ia(r,u)}}e.render=s.render||Ve}Qt(e),Xt(),yu(e),en(),Pt()}function Vu(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return qe(e,"get","$attrs"),t[n]}}))}function Wu(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Vu(e)},slots:e.slots,emit:e.emit,expose:t}}function Gr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Il(wl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in hn)return hn[n](e)},has(t,n){return n in t||n in hn}}))}function Ju(e,t=!0){return K(e)?e.displayName||e.name:e.name||t&&e.__name}function Qu(e){return K(e)&&"__vccOpts"in e}const Me=(e,t)=>zi(e,t,Sn);function Xl(e,t,n){const s=arguments.length;return s===2?pe(t)&&!z(t)?pr(t)?be(e,null,[t]):be(e,t):be(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&pr(n)&&(n=[n]),be(e,t,n))}const Gu=Symbol.for("v-scx"),Zu=()=>Je(Gu),Yu="3.3.4",Xu="http://www.w3.org/2000/svg",St=typeof document!="undefined"?document:null,Pa=St&&St.createElement("template"),ep={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?St.createElementNS(Xu,e):St.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>St.createTextNode(e),createComment:e=>St.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>St.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,a){const o=n?n.previousSibling:t.lastChild;if(r&&(r===a||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===a||!(r=r.nextSibling)););else{Pa.innerHTML=s?`<svg>${e}</svg>`:e;const c=Pa.content;if(s){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}t.insertBefore(c,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function tp(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function np(e,t,n){const s=e.style,r=je(n);if(n&&!r){if(t&&!je(t))for(const a in t)n[a]==null&&fr(s,a,"");for(const a in n)fr(s,a,n[a])}else{const a=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=a)}}const ka=/\s*!important$/;function fr(e,t,n){if(z(n))n.forEach(s=>fr(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=sp(e,t);ka.test(n)?e.setProperty(Yt(s),n.replace(ka,""),"important"):e[s]=n}}const Ca=["Webkit","Moz","ms"],$s={};function sp(e,t){const n=$s[t];if(n)return n;let s=st(t);if(s!=="filter"&&s in e)return $s[t]=s;s=js(s);for(let r=0;r<Ca.length;r++){const a=Ca[r]+s;if(a in e)return $s[t]=a}return t}const Aa="http://www.w3.org/1999/xlink";function rp(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Aa,t.slice(6,t.length)):e.setAttributeNS(Aa,t,n);else{const a=ii(t);n==null||a&&!il(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function ap(e,t,n,s,r,a,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,r,a),e[t]=n==null?"":n;return}const c=e.tagName;if(t==="value"&&c!=="PROGRESS"&&!c.includes("-")){e._value=n;const u=c==="OPTION"?e.getAttribute("value"):e.value,i=n==null?"":n;u!==i&&(e.value=i),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=il(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function op(e,t,n,s){e.addEventListener(t,n,s)}function lp(e,t,n,s){e.removeEventListener(t,n,s)}function cp(e,t,n,s,r=null){const a=e._vei||(e._vei={}),o=a[t];if(s&&o)o.value=s;else{const[c,l]=ip(t);if(s){const u=a[t]=fp(s,r);op(e,c,u,l)}else o&&(lp(e,c,o,l),a[t]=void 0)}}const Ra=/(?:Once|Passive|Capture)$/;function ip(e){let t;if(Ra.test(e)){t={};let s;for(;s=e.match(Ra);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Yt(e.slice(2)),t]}let Bs=0;const up=Promise.resolve(),pp=()=>Bs||(up.then(()=>Bs=0),Bs=Date.now());function fp(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;We(hp(s,n.value),t,5,[s])};return n.value=e,n.attached=pp(),n}function hp(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const qa=/^on[a-z]/,dp=(e,t,n,s,r=!1,a,o,c,l)=>{t==="class"?tp(e,s,r):t==="style"?np(e,n,s):_s(t)?Ar(t)||cp(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):mp(e,t,s,r))?ap(e,t,s,a,o,c,l):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),rp(e,t,s,r))};function mp(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&qa.test(t)&&K(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||qa.test(t)&&je(n)?!1:t in e}const gp=xe({patchProp:dp},ep);let Ta;function vp(){return Ta||(Ta=Au(gp))}const _p=(...e)=>{const t=vp().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=yp(s);if(!r)return;const a=t._component;!K(a)&&!a.render&&!a.template&&(a.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function yp(e){return je(e)?document.querySelector(e):e}var pt=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n};const bp={};function jp(e,t){const n=Hl("router-view");return oe(),Wr(n)}var xp=pt(bp,[["render",jp]]);/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Mt=typeof window!="undefined";function wp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const re=Object.assign;function zs(e,t){const n={};for(const s in t){const r=t[s];n[s]=Qe(r)?r.map(e):e(r)}return n}const mn=()=>{},Qe=Array.isArray,Op=/\/$/,Ep=e=>e.replace(Op,"");function Ks(e,t,n="/"){let s,r={},a="",o="";const c=t.indexOf("#");let l=t.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(s=t.slice(0,l),a=t.slice(l+1,c>-1?c:t.length),r=e(a)),c>-1&&(s=s||t.slice(0,c),o=t.slice(c,t.length)),s=kp(s!=null?s:t,n),{fullPath:s+(a&&"?")+a+o,path:s,query:r,hash:o}}function Sp(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Da(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ip(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Gt(t.matched[s],n.matched[r])&&ec(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Gt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ec(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Pp(e[n],t[n]))return!1;return!0}function Pp(e,t){return Qe(e)?Na(e,t):Qe(t)?Na(t,e):e===t}function Na(e,t){return Qe(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function kp(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let a=n.length-1,o,c;for(o=0;o<s.length;o++)if(c=s[o],c!==".")if(c==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var In;(function(e){e.pop="pop",e.push="push"})(In||(In={}));var gn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(gn||(gn={}));function Cp(e){if(!e)if(Mt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ep(e)}const Ap=/^[^#]+#/;function Rp(e,t){return e.replace(Ap,"#")+t}function qp(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const As=()=>({left:window.pageXOffset,top:window.pageYOffset});function Tp(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=qp(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ma(e,t){return(history.state?history.state.position-t:-1)+e}const hr=new Map;function Dp(e,t){hr.set(e,t)}function Np(e){const t=hr.get(e);return hr.delete(e),t}let Mp=()=>location.protocol+"//"+location.host;function tc(e,t){const{pathname:n,search:s,hash:r}=t,a=e.indexOf("#");if(a>-1){let c=r.includes(e.slice(a))?e.slice(a).length:1,l=r.slice(c);return l[0]!=="/"&&(l="/"+l),Da(l,"")}return Da(n,e)+s+r}function Lp(e,t,n,s){let r=[],a=[],o=null;const c=({state:f})=>{const g=tc(e,location),b=n.value,y=t.value;let w=0;if(f){if(n.value=g,t.value=f,o&&o===b){o=null;return}w=y?f.position-y.position:0}else s(g);r.forEach(S=>{S(n.value,b,{delta:w,type:In.pop,direction:w?w>0?gn.forward:gn.back:gn.unknown})})};function l(){o=n.value}function u(f){r.push(f);const g=()=>{const b=r.indexOf(f);b>-1&&r.splice(b,1)};return a.push(g),g}function i(){const{history:f}=window;!f.state||f.replaceState(re({},f.state,{scroll:As()}),"")}function p(){for(const f of a)f();a=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",i)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",i,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function La(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?As():null}}function Up(e){const{history:t,location:n}=window,s={value:tc(e,n)},r={value:t.state};r.value||a(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(l,u,i){const p=e.indexOf("#"),f=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+l:Mp()+e+l;try{t[i?"replaceState":"pushState"](u,"",f),r.value=u}catch(g){console.error(g),n[i?"replace":"assign"](f)}}function o(l,u){const i=re({},t.state,La(r.value.back,l,r.value.forward,!0),u,{position:r.value.position});a(l,i,!0),s.value=l}function c(l,u){const i=re({},r.value,t.state,{forward:l,scroll:As()});a(i.current,i,!0);const p=re({},La(s.value,l,null),{position:i.position+1},u);a(l,p,!1),s.value=l}return{location:s,state:r,push:c,replace:o}}function Hp(e){e=Cp(e);const t=Up(e),n=Lp(e,t.state,t.location,t.replace);function s(a,o=!0){o||n.pauseListeners(),history.go(a)}const r=re({location:"",base:e,go:s,createHref:Rp.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Fp(e){return typeof e=="string"||e&&typeof e=="object"}function nc(e){return typeof e=="string"||typeof e=="symbol"}const ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},sc=Symbol("");var Ua;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ua||(Ua={}));function Zt(e,t){return re(new Error,{type:e,[sc]:!0},t)}function at(e,t){return e instanceof Error&&sc in e&&(t==null||!!(e.type&t))}const Ha="[^/]+?",$p={sensitive:!1,strict:!1,start:!0,end:!0},Bp=/[.+*?^${}()[\]/\\]/g;function zp(e,t){const n=re({},$p,t),s=[];let r=n.start?"^":"";const a=[];for(const u of e){const i=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let p=0;p<u.length;p++){const f=u[p];let g=40+(n.sensitive?.25:0);if(f.type===0)p||(r+="/"),r+=f.value.replace(Bp,"\\$&"),g+=40;else if(f.type===1){const{value:b,repeatable:y,optional:w,regexp:S}=f;a.push({name:b,repeatable:y,optional:w});const O=S||Ha;if(O!==Ha){g+=10;try{new RegExp(`(${O})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${b}" (${O}): `+E.message)}}let C=y?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;p||(C=w&&u.length<2?`(?:/${C})`:"/"+C),w&&(C+="?"),r+=C,g+=20,w&&(g+=-8),y&&(g+=-20),O===".*"&&(g+=-50)}i.push(g)}s.push(i)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function c(u){const i=u.match(o),p={};if(!i)return null;for(let f=1;f<i.length;f++){const g=i[f]||"",b=a[f-1];p[b.name]=g&&b.repeatable?g.split("/"):g}return p}function l(u){let i="",p=!1;for(const f of e){(!p||!i.endsWith("/"))&&(i+="/"),p=!1;for(const g of f)if(g.type===0)i+=g.value;else if(g.type===1){const{value:b,repeatable:y,optional:w}=g,S=b in u?u[b]:"";if(Qe(S)&&!y)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const O=Qe(S)?S.join("/"):S;if(!O)if(w)f.length<2&&(i.endsWith("/")?i=i.slice(0,-1):p=!0);else throw new Error(`Missing required param "${b}"`);i+=O}}return i||"/"}return{re:o,score:s,keys:a,parse:c,stringify:l}}function Kp(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Vp(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const a=Kp(s[n],r[n]);if(a)return a;n++}if(Math.abs(r.length-s.length)===1){if(Fa(s))return 1;if(Fa(r))return-1}return r.length-s.length}function Fa(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Wp={type:0,value:""},Jp=/[a-zA-Z0-9_]/;function Qp(e){if(!e)return[[]];if(e==="/")return[[Wp]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let a;function o(){a&&r.push(a),a=[]}let c=0,l,u="",i="";function p(){!u||(n===0?a.push({type:0,value:u}):n===1||n===2||n===3?(a.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:u,regexp:i,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=l}for(;c<e.length;){if(l=e[c++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:Jp.test(l)?f():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?i[i.length-1]=="\\"?i=i.slice(0,-1)+l:n=3:i+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,i="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),p(),o(),r}function Gp(e,t,n){const s=zp(Qp(e.path),n),r=re(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Zp(e,t){const n=[],s=new Map;t=za({strict:!1,end:!0,sensitive:!1},t);function r(i){return s.get(i)}function a(i,p,f){const g=!f,b=Yp(i);b.aliasOf=f&&f.record;const y=za(t,i),w=[b];if("alias"in i){const C=typeof i.alias=="string"?[i.alias]:i.alias;for(const E of C)w.push(re({},b,{components:f?f.record.components:b.components,path:E,aliasOf:f?f.record:b}))}let S,O;for(const C of w){const{path:E}=C;if(p&&E[0]!=="/"){const A=p.record.path,F=A[A.length-1]==="/"?"":"/";C.path=p.record.path+(E&&F+E)}if(S=Gp(C,p,y),f?f.alias.push(S):(O=O||S,O!==S&&O.alias.push(S),g&&i.name&&!Ba(S)&&o(i.name)),b.children){const A=b.children;for(let F=0;F<A.length;F++)a(A[F],S,f&&f.children[F])}f=f||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&l(S)}return O?()=>{o(O)}:mn}function o(i){if(nc(i)){const p=s.get(i);p&&(s.delete(i),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(i);p>-1&&(n.splice(p,1),i.record.name&&s.delete(i.record.name),i.children.forEach(o),i.alias.forEach(o))}}function c(){return n}function l(i){let p=0;for(;p<n.length&&Vp(i,n[p])>=0&&(i.record.path!==n[p].record.path||!rc(i,n[p]));)p++;n.splice(p,0,i),i.record.name&&!Ba(i)&&s.set(i.record.name,i)}function u(i,p){let f,g={},b,y;if("name"in i&&i.name){if(f=s.get(i.name),!f)throw Zt(1,{location:i});y=f.record.name,g=re($a(p.params,f.keys.filter(O=>!O.optional).map(O=>O.name)),i.params&&$a(i.params,f.keys.map(O=>O.name))),b=f.stringify(g)}else if("path"in i)b=i.path,f=n.find(O=>O.re.test(b)),f&&(g=f.parse(b),y=f.record.name);else{if(f=p.name?s.get(p.name):n.find(O=>O.re.test(p.path)),!f)throw Zt(1,{location:i,currentLocation:p});y=f.record.name,g=re({},p.params,i.params),b=f.stringify(g)}const w=[];let S=f;for(;S;)w.unshift(S.record),S=S.parent;return{name:y,path:b,params:g,matched:w,meta:ef(w)}}return e.forEach(i=>a(i)),{addRoute:a,resolve:u,removeRoute:o,getRoutes:c,getRecordMatcher:r}}function $a(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Yp(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Xp(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Xp(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function Ba(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ef(e){return e.reduce((t,n)=>re(t,n.meta),{})}function za(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function rc(e,t){return t.children.some(n=>n===e||rc(e,n))}const ac=/#/g,tf=/&/g,nf=/\//g,sf=/=/g,rf=/\?/g,oc=/\+/g,af=/%5B/g,of=/%5D/g,lc=/%5E/g,lf=/%60/g,cc=/%7B/g,cf=/%7C/g,ic=/%7D/g,uf=/%20/g;function Zr(e){return encodeURI(""+e).replace(cf,"|").replace(af,"[").replace(of,"]")}function pf(e){return Zr(e).replace(cc,"{").replace(ic,"}").replace(lc,"^")}function dr(e){return Zr(e).replace(oc,"%2B").replace(uf,"+").replace(ac,"%23").replace(tf,"%26").replace(lf,"`").replace(cc,"{").replace(ic,"}").replace(lc,"^")}function ff(e){return dr(e).replace(sf,"%3D")}function hf(e){return Zr(e).replace(ac,"%23").replace(rf,"%3F")}function df(e){return e==null?"":hf(e).replace(nf,"%2F")}function is(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function mf(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const a=s[r].replace(oc," "),o=a.indexOf("="),c=is(o<0?a:a.slice(0,o)),l=o<0?null:is(a.slice(o+1));if(c in t){let u=t[c];Qe(u)||(u=t[c]=[u]),u.push(l)}else t[c]=l}return t}function Ka(e){let t="";for(let n in e){const s=e[n];if(n=ff(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Qe(s)?s.map(a=>a&&dr(a)):[s&&dr(s)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function gf(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Qe(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const vf=Symbol(""),Va=Symbol(""),Rs=Symbol(""),Yr=Symbol(""),mr=Symbol("");function rn(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function mt(e,t,n,s,r){const a=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,c)=>{const l=p=>{p===!1?c(Zt(4,{from:n,to:t})):p instanceof Error?c(p):Fp(p)?c(Zt(2,{from:t,to:p})):(a&&s.enterCallbacks[r]===a&&typeof p=="function"&&a.push(p),o())},u=e.call(s&&s.instances[r],t,n,l);let i=Promise.resolve(u);e.length<3&&(i=i.then(l)),i.catch(p=>c(p))})}function Vs(e,t,n,s){const r=[];for(const a of e)for(const o in a.components){let c=a.components[o];if(!(t!=="beforeRouteEnter"&&!a.instances[o]))if(_f(c)){const u=(c.__vccOpts||c)[t];u&&r.push(mt(u,n,s,a,o))}else{let l=c();r.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${a.path}"`));const i=wp(u)?u.default:u;a.components[o]=i;const f=(i.__vccOpts||i)[t];return f&&mt(f,n,s,a,o)()}))}}return r}function _f(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Wa(e){const t=Je(Rs),n=Je(Yr),s=Me(()=>t.resolve(tt(e.to))),r=Me(()=>{const{matched:l}=s.value,{length:u}=l,i=l[u-1],p=n.matched;if(!i||!p.length)return-1;const f=p.findIndex(Gt.bind(null,i));if(f>-1)return f;const g=Ja(l[u-2]);return u>1&&Ja(i)===g&&p[p.length-1].path!==g?p.findIndex(Gt.bind(null,l[u-2])):f}),a=Me(()=>r.value>-1&&xf(n.params,s.value.params)),o=Me(()=>r.value>-1&&r.value===n.matched.length-1&&ec(n.params,s.value.params));function c(l={}){return jf(l)?t[tt(e.replace)?"replace":"push"](tt(e.to)).catch(mn):Promise.resolve()}return{route:s,href:Me(()=>s.value.href),isActive:a,isExactActive:o,navigate:c}}const yf=zr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wa,setup(e,{slots:t}){const n=qn(Wa(e)),{options:s}=Je(Rs),r=Me(()=>({[Qa(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Qa(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:Xl("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},a)}}}),bf=yf;function jf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function xf(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Qe(r)||r.length!==s.length||s.some((a,o)=>a!==r[o]))return!1}return!0}function Ja(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qa=(e,t,n)=>e!=null?e:t!=null?t:n,wf=zr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Je(mr),r=Me(()=>e.route||s.value),a=Je(Va,0),o=Me(()=>{let u=tt(a);const{matched:i}=r.value;let p;for(;(p=i[u])&&!p.components;)u++;return u}),c=Me(()=>r.value.matched[o.value]);Yn(Va,Me(()=>o.value+1)),Yn(vf,c),Yn(mr,r);const l=Le();return fn(()=>[l.value,c.value,e.name],([u,i,p],[f,g,b])=>{i&&(i.instances[p]=u,g&&g!==i&&u&&u===f&&(i.leaveGuards.size||(i.leaveGuards=g.leaveGuards),i.updateGuards.size||(i.updateGuards=g.updateGuards))),u&&i&&(!g||!Gt(i,g)||!f)&&(i.enterCallbacks[p]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=r.value,i=e.name,p=c.value,f=p&&p.components[i];if(!f)return Ga(n.default,{Component:f,route:u});const g=p.props[i],b=g?g===!0?u.params:typeof g=="function"?g(u):g:null,w=Xl(f,re({},b,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(p.instances[i]=null)},ref:l}));return Ga(n.default,{Component:w,route:u})||w}}});function Ga(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Of=wf;function Ef(e){const t=Zp(e.routes,e),n=e.parseQuery||mf,s=e.stringifyQuery||Ka,r=e.history,a=rn(),o=rn(),c=rn(),l=Hi(ht);let u=ht;Mt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const i=zs.bind(null,x=>""+x),p=zs.bind(null,df),f=zs.bind(null,is);function g(x,D){let q,M;return nc(x)?(q=t.getRecordMatcher(x),M=D):M=x,t.addRoute(M,q)}function b(x){const D=t.getRecordMatcher(x);D&&t.removeRoute(D)}function y(){return t.getRoutes().map(x=>x.record)}function w(x){return!!t.getRecordMatcher(x)}function S(x,D){if(D=re({},D||l.value),typeof x=="string"){const v=Ks(n,x,D.path),_=t.resolve({path:v.path},D),j=r.createHref(v.fullPath);return re(v,_,{params:f(_.params),hash:is(v.hash),redirectedFrom:void 0,href:j})}let q;if("path"in x)q=re({},x,{path:Ks(n,x.path,D.path).path});else{const v=re({},x.params);for(const _ in v)v[_]==null&&delete v[_];q=re({},x,{params:p(v)}),D.params=p(D.params)}const M=t.resolve(q,D),X=x.hash||"";M.params=i(f(M.params));const h=Sp(s,re({},x,{hash:pf(X),path:M.path})),d=r.createHref(h);return re({fullPath:h,hash:X,query:s===Ka?gf(x.query):x.query||{}},M,{redirectedFrom:void 0,href:d})}function O(x){return typeof x=="string"?Ks(n,x,l.value.path):re({},x)}function C(x,D){if(u!==x)return Zt(8,{from:D,to:x})}function E(x){return Y(x)}function A(x){return E(re(O(x),{replace:!0}))}function F(x){const D=x.matched[x.matched.length-1];if(D&&D.redirect){const{redirect:q}=D;let M=typeof q=="function"?q(x):q;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=O(M):{path:M},M.params={}),re({query:x.query,hash:x.hash,params:"path"in M?{}:x.params},M)}}function Y(x,D){const q=u=S(x),M=l.value,X=x.state,h=x.force,d=x.replace===!0,v=F(q);if(v)return Y(re(O(v),{state:typeof v=="object"?re({},X,v.state):X,force:h,replace:d}),D||q);const _=q;_.redirectedFrom=D;let j;return!h&&Ip(s,M,q)&&(j=Zt(16,{to:_,from:M}),Ie(M,M,!0,!1)),(j?Promise.resolve(j):Q(_,M)).catch(I=>at(I)?at(I,2)?I:He(I):W(I,_,M)).then(I=>{if(I){if(at(I,2))return Y(re({replace:d},O(I.to),{state:typeof I.to=="object"?re({},X,I.to.state):X,force:h}),D||_)}else I=de(_,M,!0,d,X);return ce(_,M,I),I})}function ie(x,D){const q=C(x,D);return q?Promise.reject(q):Promise.resolve()}function le(x){const D=rt.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(x):x()}function Q(x,D){let q;const[M,X,h]=Sf(x,D);q=Vs(M.reverse(),"beforeRouteLeave",x,D);for(const v of M)v.leaveGuards.forEach(_=>{q.push(mt(_,x,D))});const d=ie.bind(null,x,D);return q.push(d),_e(q).then(()=>{q=[];for(const v of a.list())q.push(mt(v,x,D));return q.push(d),_e(q)}).then(()=>{q=Vs(X,"beforeRouteUpdate",x,D);for(const v of X)v.updateGuards.forEach(_=>{q.push(mt(_,x,D))});return q.push(d),_e(q)}).then(()=>{q=[];for(const v of x.matched)if(v.beforeEnter&&!D.matched.includes(v))if(Qe(v.beforeEnter))for(const _ of v.beforeEnter)q.push(mt(_,x,D));else q.push(mt(v.beforeEnter,x,D));return q.push(d),_e(q)}).then(()=>(x.matched.forEach(v=>v.enterCallbacks={}),q=Vs(h,"beforeRouteEnter",x,D),q.push(d),_e(q))).then(()=>{q=[];for(const v of o.list())q.push(mt(v,x,D));return q.push(d),_e(q)}).catch(v=>at(v,8)?v:Promise.reject(v))}function ce(x,D,q){for(const M of c.list())le(()=>M(x,D,q))}function de(x,D,q,M,X){const h=C(x,D);if(h)return h;const d=D===ht,v=Mt?history.state:{};q&&(M||d?r.replace(x.fullPath,re({scroll:d&&v&&v.scroll},X)):r.push(x.fullPath,X)),l.value=x,Ie(x,D,q,d),He()}let he;function me(){he||(he=r.listen((x,D,q)=>{if(!Ne.listening)return;const M=S(x),X=F(M);if(X){Y(re(X,{replace:!0}),M).catch(mn);return}u=M;const h=l.value;Mt&&Dp(Ma(h.fullPath,q.delta),As()),Q(M,h).catch(d=>at(d,12)?d:at(d,2)?(Y(d.to,M).then(v=>{at(v,20)&&!q.delta&&q.type===In.pop&&r.go(-1,!1)}).catch(mn),Promise.reject()):(q.delta&&r.go(-q.delta,!1),W(d,M,h))).then(d=>{d=d||de(M,h,!1),d&&(q.delta&&!at(d,8)?r.go(-q.delta,!1):q.type===In.pop&&at(d,20)&&r.go(-1,!1)),ce(M,h,d)}).catch(mn)}))}let Ue=rn(),ae=rn(),te;function W(x,D,q){He(x);const M=ae.list();return M.length?M.forEach(X=>X(x,D,q)):console.error(x),Promise.reject(x)}function Te(){return te&&l.value!==ht?Promise.resolve():new Promise((x,D)=>{Ue.add([x,D])})}function He(x){return te||(te=!x,me(),Ue.list().forEach(([D,q])=>x?q(x):D()),Ue.reset()),x}function Ie(x,D,q,M){const{scrollBehavior:X}=e;if(!Mt||!X)return Promise.resolve();const h=!q&&Np(Ma(x.fullPath,0))||(M||!q)&&history.state&&history.state.scroll||null;return kl().then(()=>X(x,D,h)).then(d=>d&&Tp(d)).catch(d=>W(d,x,D))}const ge=x=>r.go(x);let Pe;const rt=new Set,Ne={currentRoute:l,listening:!0,addRoute:g,removeRoute:b,hasRoute:w,getRoutes:y,resolve:S,options:e,push:E,replace:A,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:a.add,beforeResolve:o.add,afterEach:c.add,onError:ae.add,isReady:Te,install(x){const D=this;x.component("RouterLink",bf),x.component("RouterView",Of),x.config.globalProperties.$router=D,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>tt(l)}),Mt&&!Pe&&l.value===ht&&(Pe=!0,E(r.location).catch(X=>{}));const q={};for(const X in ht)q[X]=Me(()=>l.value[X]);x.provide(Rs,D),x.provide(Yr,qn(q)),x.provide(mr,l);const M=x.unmount;rt.add(x),x.unmount=function(){rt.delete(x),rt.size<1&&(u=ht,he&&he(),he=null,l.value=ht,Pe=!1,te=!1),M()}}};function _e(x){return x.reduce((D,q)=>D.then(()=>le(q)),Promise.resolve())}return Ne}function Sf(e,t){const n=[],s=[],r=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){const c=t.matched[o];c&&(e.matched.find(u=>Gt(u,c))?s.push(c):n.push(c));const l=e.matched[o];l&&(t.matched.find(u=>Gt(u,l))||r.push(l))}return[n,s,r]}function If(){return Je(Rs)}function qs(){return Je(Yr)}/*! @docsearch/js 3.4.0 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */function Za(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Za(Object(n),!0).forEach(function(s){Pf(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Za(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function Pn(e){return Pn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pn(e)}function Pf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gr(){return gr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},gr.apply(this,arguments)}function kf(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function us(e,t){return function(n){if(Array.isArray(n))return n}(e)||function(n,s){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var a,o,c=[],l=!0,u=!1;try{for(r=r.call(n);!(l=(a=r.next()).done)&&(c.push(a.value),!s||c.length!==s);l=!0);}catch(i){u=!0,o=i}finally{try{l||r.return==null||r.return()}finally{if(u)throw o}}return c}}(e,t)||uc(e,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function ps(e){return function(t){if(Array.isArray(t))return vr(t)}(e)||function(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||uc(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function uc(e,t){if(e){if(typeof e=="string")return vr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?vr(e,t):void 0}}function vr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}var H,vn,pc,Ya,fc,fs={},Xr=[],Cf=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function lt(e,t){for(var n in t)e[n]=t[n];return e}function hc(e){var t=e.parentNode;t&&t.removeChild(e)}function et(e,t,n){var s,r,a,o=arguments,c={};for(a in t)a=="key"?s=t[a]:a=="ref"?r=t[a]:c[a]=t[a];if(arguments.length>3)for(n=[n],a=3;a<arguments.length;a++)n.push(o[a]);if(n!=null&&(c.children=n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)c[a]===void 0&&(c[a]=e.defaultProps[a]);return _n(e,c,s,r,null)}function _n(e,t,n,s,r){var a={type:e,props:t,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r==null?++H.__v:r};return H.vnode!=null&&H.vnode(a),a}function yt(e){return e.children}function nt(e,t){this.props=e,this.context=t}function kn(e,t){if(t==null)return e.__?kn(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?kn(e):null}function dc(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return dc(e)}}function _r(e){(!e.__d&&(e.__d=!0)&&vn.push(e)&&!hs.__r++||Ya!==H.debounceRendering)&&((Ya=H.debounceRendering)||pc)(hs)}function hs(){for(var e;hs.__r=vn.length;)e=vn.sort(function(t,n){return t.__v.__b-n.__v.__b}),vn=[],e.some(function(t){var n,s,r,a,o,c;t.__d&&(o=(a=(n=t).__v).__e,(c=n.__P)&&(s=[],(r=lt({},a)).__v=a.__v+1,ea(c,a,r,n.__n,c.ownerSVGElement!==void 0,a.__h!=null?[o]:null,s,o==null?kn(a):o,a.__h),_c(s,a),a.__e!=o&&dc(a)))})}function mc(e,t,n,s,r,a,o,c,l,u){var i,p,f,g,b,y,w,S=s&&s.__k||Xr,O=S.length;for(n.__k=[],i=0;i<t.length;i++)if((g=n.__k[i]=(g=t[i])==null||typeof g=="boolean"?null:typeof g=="string"||typeof g=="number"?_n(null,g,null,null,g):Array.isArray(g)?_n(yt,{children:g},null,null,null):g.__b>0?_n(g.type,g.props,g.key,null,g.__v):g)!=null){if(g.__=n,g.__b=n.__b+1,(f=S[i])===null||f&&g.key==f.key&&g.type===f.type)S[i]=void 0;else for(p=0;p<O;p++){if((f=S[p])&&g.key==f.key&&g.type===f.type){S[p]=void 0;break}f=null}ea(e,g,f=f||fs,r,a,o,c,l,u),b=g.__e,(p=g.ref)&&f.ref!=p&&(w||(w=[]),f.ref&&w.push(f.ref,null,g),w.push(p,g.__c||b,g)),b!=null?(y==null&&(y=b),typeof g.type=="function"&&g.__k!=null&&g.__k===f.__k?g.__d=l=gc(g,l,e):l=vc(e,g,f,S,b,l),u||n.type!=="option"?typeof n.type=="function"&&(n.__d=l):e.value=""):l&&f.__e==l&&l.parentNode!=e&&(l=kn(f))}for(n.__e=y,i=O;i--;)S[i]!=null&&(typeof n.type=="function"&&S[i].__e!=null&&S[i].__e==n.__d&&(n.__d=kn(s,i+1)),bc(S[i],S[i]));if(w)for(i=0;i<w.length;i++)yc(w[i],w[++i],w[++i])}function gc(e,t,n){var s,r;for(s=0;s<e.__k.length;s++)(r=e.__k[s])&&(r.__=e,t=typeof r.type=="function"?gc(r,t,n):vc(n,r,r,e.__k,r.__e,t));return t}function ct(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){ct(n,t)}):t.push(e)),t}function vc(e,t,n,s,r,a){var o,c,l;if(t.__d!==void 0)o=t.__d,t.__d=void 0;else if(n==null||r!=a||r.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(r),o=null;else{for(c=a,l=0;(c=c.nextSibling)&&l<s.length;l+=2)if(c==r)break e;e.insertBefore(r,a),o=a}return o!==void 0?o:r.nextSibling}function Xa(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Cf.test(t)?n:n+"px"}function Fn(e,t,n,s,r){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)n&&t in n||Xa(e.style,t,"");if(n)for(t in n)s&&n[t]===s[t]||Xa(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?s||e.addEventListener(t,a?to:eo,a):e.removeEventListener(t,a?to:eo,a);else if(t!=="dangerouslySetInnerHTML"){if(r)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function eo(e){this.l[e.type+!1](H.event?H.event(e):e)}function to(e){this.l[e.type+!0](H.event?H.event(e):e)}function ea(e,t,n,s,r,a,o,c,l){var u,i,p,f,g,b,y,w,S,O,C,E=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,c=t.__e=n.__e,t.__h=null,a=[c]),(u=H.__b)&&u(t);try{e:if(typeof E=="function"){if(w=t.props,S=(u=E.contextType)&&s[u.__c],O=u?S?S.props.value:u.__:s,n.__c?y=(i=t.__c=n.__c).__=i.__E:("prototype"in E&&E.prototype.render?t.__c=i=new E(w,O):(t.__c=i=new nt(w,O),i.constructor=E,i.render=Rf),S&&S.sub(i),i.props=w,i.state||(i.state={}),i.context=O,i.__n=s,p=i.__d=!0,i.__h=[]),i.__s==null&&(i.__s=i.state),E.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=lt({},i.__s)),lt(i.__s,E.getDerivedStateFromProps(w,i.__s))),f=i.props,g=i.state,p)E.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(E.getDerivedStateFromProps==null&&w!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(w,O),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(w,i.__s,O)===!1||t.__v===n.__v){i.props=w,i.state=i.__s,t.__v!==n.__v&&(i.__d=!1),i.__v=t,t.__e=n.__e,t.__k=n.__k,i.__h.length&&o.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(w,i.__s,O),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,g,b)})}i.context=O,i.props=w,i.state=i.__s,(u=H.__r)&&u(t),i.__d=!1,i.__v=t,i.__P=e,u=i.render(i.props,i.state,i.context),i.state=i.__s,i.getChildContext!=null&&(s=lt(lt({},s),i.getChildContext())),p||i.getSnapshotBeforeUpdate==null||(b=i.getSnapshotBeforeUpdate(f,g)),C=u!=null&&u.type===yt&&u.key==null?u.props.children:u,mc(e,Array.isArray(C)?C:[C],t,n,s,r,a,o,c,l),i.base=t.__e,t.__h=null,i.__h.length&&o.push(i),y&&(i.__E=i.__=null),i.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Af(n.__e,t,n,s,r,a,o,l);(u=H.diffed)&&u(t)}catch(A){t.__v=null,(l||a!=null)&&(t.__e=c,t.__h=!!l,a[a.indexOf(c)]=null),H.__e(A,t,n)}}function _c(e,t){H.__c&&H.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(s){s.call(n)})}catch(s){H.__e(s,n.__v)}})}function Af(e,t,n,s,r,a,o,c){var l,u,i,p,f=n.props,g=t.props,b=t.type,y=0;if(b==="svg"&&(r=!0),a!=null){for(;y<a.length;y++)if((l=a[y])&&(l===e||(b?l.localName==b:l.nodeType==3))){e=l,a[y]=null;break}}if(e==null){if(b===null)return document.createTextNode(g);e=r?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,g.is&&g),a=null,c=!1}if(b===null)f===g||c&&e.data===g||(e.data=g);else{if(a=a&&Xr.slice.call(e.childNodes),u=(f=n.props||fs).dangerouslySetInnerHTML,i=g.dangerouslySetInnerHTML,!c){if(a!=null)for(f={},p=0;p<e.attributes.length;p++)f[e.attributes[p].name]=e.attributes[p].value;(i||u)&&(i&&(u&&i.__html==u.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(function(w,S,O,C,E){var A;for(A in O)A==="children"||A==="key"||A in S||Fn(w,A,null,O[A],C);for(A in S)E&&typeof S[A]!="function"||A==="children"||A==="key"||A==="value"||A==="checked"||O[A]===S[A]||Fn(w,A,S[A],O[A],C)}(e,g,f,r,c),i)t.__k=[];else if(y=t.props.children,mc(e,Array.isArray(y)?y:[y],t,n,s,r&&b!=="foreignObject",a,o,e.firstChild,c),a!=null)for(y=a.length;y--;)a[y]!=null&&hc(a[y]);c||("value"in g&&(y=g.value)!==void 0&&(y!==e.value||b==="progress"&&!y)&&Fn(e,"value",y,f.value,!1),"checked"in g&&(y=g.checked)!==void 0&&y!==e.checked&&Fn(e,"checked",y,f.checked,!1))}return e}function yc(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(s){H.__e(s,n)}}function bc(e,t,n){var s,r,a;if(H.unmount&&H.unmount(e),(s=e.ref)&&(s.current&&s.current!==e.__e||yc(s,null,t)),n||typeof e.type=="function"||(n=(r=e.__e)!=null),e.__e=e.__d=void 0,(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(o){H.__e(o,t)}s.base=s.__P=null}if(s=e.__k)for(a=0;a<s.length;a++)s[a]&&bc(s[a],t,n);r!=null&&hc(r)}function Rf(e,t,n){return this.constructor(e,n)}function Cn(e,t,n){var s,r,a;H.__&&H.__(e,t),r=(s=typeof n=="function")?null:n&&n.__k||t.__k,a=[],ea(t,e=(!s&&n||t).__k=et(yt,null,[e]),r||fs,fs,t.ownerSVGElement!==void 0,!s&&n?[n]:r?null:t.firstChild?Xr.slice.call(t.childNodes):null,a,!s&&n?n:r?r.__e:t.firstChild,s),_c(a,e)}function jc(e,t){Cn(e,t,jc)}function qf(e,t,n){var s,r,a,o=arguments,c=lt({},e.props);for(a in t)a=="key"?s=t[a]:a=="ref"?r=t[a]:c[a]=t[a];if(arguments.length>3)for(n=[n],a=3;a<arguments.length;a++)n.push(o[a]);return n!=null&&(c.children=n),_n(e.type,c,s||e.key,r||e.ref,null)}H={__e:function(e,t){for(var n,s,r;t=t.__;)if((n=t.__c)&&!n.__)try{if((s=n.constructor)&&s.getDerivedStateFromError!=null&&(n.setState(s.getDerivedStateFromError(e)),r=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),r=n.__d),r)return n.__E=n}catch(a){e=a}throw e},__v:0},nt.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=lt({},this.state),typeof e=="function"&&(e=e(lt({},n),this.props)),e&&lt(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),_r(this))},nt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),_r(this))},nt.prototype.render=yt,vn=[],pc=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,hs.__r=0,fc=0;var tn,Ce,no,Vt=0,yr=[],so=H.__b,ro=H.__r,ao=H.diffed,oo=H.__c,lo=H.unmount;function Tn(e,t){H.__h&&H.__h(Ce,e,Vt||t),Vt=0;var n=Ce.__H||(Ce.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function xc(e){return Vt=1,wc(Ec,e)}function wc(e,t,n){var s=Tn(tn++,2);return s.t=e,s.__c||(s.__=[n?n(t):Ec(void 0,t),function(r){var a=s.t(s.__[0],r);s.__[0]!==a&&(s.__=[a,s.__[1]],s.__c.setState({}))}],s.__c=Ce),s.__}function Oc(e,t){var n=Tn(tn++,3);!H.__s&&ta(n.__H,t)&&(n.__=e,n.__H=t,Ce.__H.__h.push(n))}function co(e,t){var n=Tn(tn++,4);!H.__s&&ta(n.__H,t)&&(n.__=e,n.__H=t,Ce.__h.push(n))}function Ws(e,t){var n=Tn(tn++,7);return ta(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Tf(){yr.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(es),e.__H.__h.forEach(br),e.__H.__h=[]}catch(t){e.__H.__h=[],H.__e(t,e.__v)}}),yr=[]}H.__b=function(e){Ce=null,so&&so(e)},H.__r=function(e){ro&&ro(e),tn=0;var t=(Ce=e.__c).__H;t&&(t.__h.forEach(es),t.__h.forEach(br),t.__h=[])},H.diffed=function(e){ao&&ao(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(yr.push(t)!==1&&no===H.requestAnimationFrame||((no=H.requestAnimationFrame)||function(n){var s,r=function(){clearTimeout(a),io&&cancelAnimationFrame(s),setTimeout(n)},a=setTimeout(r,100);io&&(s=requestAnimationFrame(r))})(Tf)),Ce=void 0},H.__c=function(e,t){t.some(function(n){try{n.__h.forEach(es),n.__h=n.__h.filter(function(s){return!s.__||br(s)})}catch(s){t.some(function(r){r.__h&&(r.__h=[])}),t=[],H.__e(s,n.__v)}}),oo&&oo(e,t)},H.unmount=function(e){lo&&lo(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(es)}catch(n){H.__e(n,t.__v)}};var io=typeof requestAnimationFrame=="function";function es(e){var t=Ce;typeof e.__c=="function"&&e.__c(),Ce=t}function br(e){var t=Ce;e.__c=e.__(),Ce=t}function ta(e,t){return!e||e.length!==t.length||t.some(function(n,s){return n!==e[s]})}function Ec(e,t){return typeof t=="function"?t(e):t}function Sc(e,t){for(var n in t)e[n]=t[n];return e}function jr(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var s in t)if(s!=="__source"&&e[s]!==t[s])return!0;return!1}function xr(e){this.props=e}(xr.prototype=new nt).isPureReactComponent=!0,xr.prototype.shouldComponentUpdate=function(e,t){return jr(this.props,e)||jr(this.state,t)};var uo=H.__b;H.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),uo&&uo(e)};var Df=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.forward_ref")||3911,po=function(e,t){return e==null?null:ct(ct(e).map(t))},Nf={map:po,forEach:po,count:function(e){return e?ct(e).length:0},only:function(e){var t=ct(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:ct},Mf=H.__e;function ts(){this.__u=0,this.t=null,this.__b=null}function Ic(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function un(){this.u=null,this.o=null}H.__e=function(e,t,n){if(e.then){for(var s,r=t;r=r.__;)if((s=r.__c)&&s.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),s.__c(e,t)}Mf(e,t,n)},(ts.prototype=new nt).__c=function(e,t){var n=t.__c,s=this;s.t==null&&(s.t=[]),s.t.push(n);var r=Ic(s.__v),a=!1,o=function(){a||(a=!0,n.componentWillUnmount=n.__c,r?r(c):c())};n.__c=n.componentWillUnmount,n.componentWillUnmount=function(){o(),n.__c&&n.__c()};var c=function(){if(!--s.__u){if(s.state.__e){var u=s.state.__e;s.__v.__k[0]=function p(f,g,b){return f&&(f.__v=null,f.__k=f.__k&&f.__k.map(function(y){return p(y,g,b)}),f.__c&&f.__c.__P===g&&(f.__e&&b.insertBefore(f.__e,f.__d),f.__c.__e=!0,f.__c.__P=b)),f}(u,u.__c.__P,u.__c.__O)}var i;for(s.setState({__e:s.__b=null});i=s.t.pop();)i.forceUpdate()}},l=t.__h===!0;s.__u++||l||s.setState({__e:s.__b=s.__v.__k[0]}),e.then(o,o)},ts.prototype.componentWillUnmount=function(){this.t=[]},ts.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),s=this.__v.__k[0].__c;this.__v.__k[0]=function a(o,c,l){return o&&(o.__c&&o.__c.__H&&(o.__c.__H.__.forEach(function(u){typeof u.__c=="function"&&u.__c()}),o.__c.__H=null),(o=Sc({},o)).__c!=null&&(o.__c.__P===l&&(o.__c.__P=c),o.__c=null),o.__k=o.__k&&o.__k.map(function(u){return a(u,c,l)})),o}(this.__b,n,s.__O=s.__P)}this.__b=null}var r=t.__e&&et(yt,null,e.fallback);return r&&(r.__h=null),[et(yt,null,t.__e?null:e.children),r]};var fo=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function Lf(e){return this.getChildContext=function(){return e.context},e.children}function Uf(e){var t=this,n=e.i;t.componentWillUnmount=function(){Cn(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(s){this.childNodes.push(s),t.i.appendChild(s)},insertBefore:function(s,r){this.childNodes.push(s),t.i.appendChild(s)},removeChild:function(s){this.childNodes.splice(this.childNodes.indexOf(s)>>>1,1),t.i.removeChild(s)}}),Cn(et(Lf,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function Pc(e,t){return et(Uf,{__v:e,i:t})}(un.prototype=new nt).__e=function(e){var t=this,n=Ic(t.__v),s=t.o.get(e);return s[0]++,function(r){var a=function(){t.props.revealOrder?(s.push(r),fo(t,e,s)):r()};n?n(a):a()}},un.prototype.render=function(e){this.u=null,this.o=new Map;var t=ct(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},un.prototype.componentDidUpdate=un.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){fo(e,n,t)})};var kc=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,Hf=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ff=function(e){return(typeof Symbol!="undefined"&&Pn(Symbol())=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};function Cc(e,t,n){return t.__k==null&&(t.textContent=""),Cn(e,t),typeof n=="function"&&n(),e?e.__c:null}nt.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(nt.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var ho=H.event;function $f(){}function Bf(){return this.cancelBubble}function zf(){return this.defaultPrevented}H.event=function(e){return ho&&(e=ho(e)),e.persist=$f,e.isPropagationStopped=Bf,e.isDefaultPrevented=zf,e.nativeEvent=e};var Ac,mo={configurable:!0,get:function(){return this.class}},go=H.vnode;H.vnode=function(e){var t=e.type,n=e.props,s=n;if(typeof t=="string"){for(var r in s={},n){var a=n[r];r==="value"&&"defaultValue"in n&&a==null||(r==="defaultValue"&&"value"in n&&n.value==null?r="value":r==="download"&&a===!0?a="":/ondoubleclick/i.test(r)?r="ondblclick":/^onchange(textarea|input)/i.test(r+t)&&!Ff(n.type)?r="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(r)?r=r.toLowerCase():Hf.test(r)?r=r.replace(/[A-Z0-9]/,"-$&").toLowerCase():a===null&&(a=void 0),s[r]=a)}t=="select"&&s.multiple&&Array.isArray(s.value)&&(s.value=ct(n.children).forEach(function(o){o.props.selected=s.value.indexOf(o.props.value)!=-1})),t=="select"&&s.defaultValue!=null&&(s.value=ct(n.children).forEach(function(o){o.props.selected=s.multiple?s.defaultValue.indexOf(o.props.value)!=-1:s.defaultValue==o.props.value})),e.props=s}t&&n.class!=n.className&&(mo.enumerable="className"in n,n.className!=null&&(s.class=n.className),Object.defineProperty(s,"className",mo)),e.$$typeof=kc,go&&go(e)};var vo=H.__r;H.__r=function(e){vo&&vo(e),Ac=e.__c};var Kf={ReactCurrentDispatcher:{current:{readContext:function(e){return Ac.__n[e.__c].props.value}}}};(typeof performance=="undefined"?"undefined":Pn(performance))=="object"&&typeof performance.now=="function"&&performance.now.bind(performance);function _o(e){return!!e&&e.$$typeof===kc}var m={useState:xc,useReducer:wc,useEffect:Oc,useLayoutEffect:co,useRef:function(e){return Vt=5,Ws(function(){return{current:e}},[])},useImperativeHandle:function(e,t,n){Vt=6,co(function(){typeof e=="function"?e(t()):e&&(e.current=t())},n==null?n:n.concat(e))},useMemo:Ws,useCallback:function(e,t){return Vt=8,Ws(function(){return e},t)},useContext:function(e){var t=Ce.context[e.__c],n=Tn(tn++,9);return n.__c=e,t?(n.__==null&&(n.__=!0,t.sub(Ce)),t.props.value):e.__},useDebugValue:function(e,t){H.useDebugValue&&H.useDebugValue(t?t(e):e)},version:"16.8.0",Children:Nf,render:Cc,hydrate:function(e,t,n){return jc(e,t),typeof n=="function"&&n(),e?e.__c:null},unmountComponentAtNode:function(e){return!!e.__k&&(Cn(null,e),!0)},createPortal:Pc,createElement:et,createContext:function(e,t){var n={__c:t="__cC"+fc++,__:e,Consumer:function(s,r){return s.children(r)},Provider:function(s){var r,a;return this.getChildContext||(r=[],(a={})[t]=this,this.getChildContext=function(){return a},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&r.some(_r)},this.sub=function(o){r.push(o);var c=o.componentWillUnmount;o.componentWillUnmount=function(){r.splice(r.indexOf(o),1),c&&c.call(o)}}),s.children}};return n.Provider.__=n.Consumer.contextType=n},createFactory:function(e){return et.bind(null,e)},cloneElement:function(e){return _o(e)?qf.apply(null,arguments):e},createRef:function(){return{current:null}},Fragment:yt,isValidElement:_o,findDOMNode:function(e){return e&&(e.base||e.nodeType===1&&e)||null},Component:nt,PureComponent:xr,memo:function(e,t){function n(r){var a=this.props.ref,o=a==r.ref;return!o&&a&&(a.call?a(null):a.current=null),t?!t(this.props,r)||!o:jr(this.props,r)}function s(r){return this.shouldComponentUpdate=n,et(e,r)}return s.displayName="Memo("+(e.displayName||e.name)+")",s.prototype.isReactComponent=!0,s.__f=!0,s},forwardRef:function(e){function t(n,s){var r=Sc({},n);return delete r.ref,e(r,(s=n.ref||s)&&(Pn(s)!="object"||"current"in s)?s:null)}return t.$$typeof=Df,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t},unstable_batchedUpdates:function(e,t){return e(t)},StrictMode:yt,Suspense:ts,SuspenseList:un,lazy:function(e){var t,n,s;function r(a){if(t||(t=e()).then(function(o){n=o.default||o},function(o){s=o}),s)throw s;if(!n)throw t;return et(n,a)}return r.displayName="Lazy",r.__f=!0,r},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Kf};function Vf(){return m.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},m.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}function Rc(){return m.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},m.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}var Wf=["translations"];function wr(){return wr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},wr.apply(this,arguments)}function Jf(e,t){return function(n){if(Array.isArray(n))return n}(e)||function(n,s){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var a,o,c=[],l=!0,u=!1;try{for(r=r.call(n);!(l=(a=r.next()).done)&&(c.push(a.value),!s||c.length!==s);l=!0);}catch(i){u=!0,o=i}finally{try{l||r.return==null||r.return()}finally{if(u)throw o}}return c}}(e,t)||function(n,s){if(!!n){if(typeof n=="string")return yo(n,s);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return yo(n,s)}}(e,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function yo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function Qf(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Gf=m.forwardRef(function(e,t){var n=e.translations,s=n===void 0?{}:n,r=Qf(e,Wf),a=s.buttonText,o=a===void 0?"Search":a,c=s.buttonAriaLabel,l=c===void 0?"Search":c,u=Jf(xc(null),2),i=u[0],p=u[1];return Oc(function(){typeof navigator!="undefined"&&(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?p("\u2318"):p("Ctrl"))},[]),m.createElement("button",wr({type:"button",className:"DocSearch DocSearch-Button","aria-label":l},r,{ref:t}),m.createElement("span",{className:"DocSearch-Button-Container"},m.createElement(Rc,null),m.createElement("span",{className:"DocSearch-Button-Placeholder"},o)),m.createElement("span",{className:"DocSearch-Button-Keys"},i!==null&&m.createElement(m.Fragment,null,m.createElement("kbd",{className:"DocSearch-Button-Key"},i==="Ctrl"?m.createElement(Vf,null):i),m.createElement("kbd",{className:"DocSearch-Button-Key"},"K"))))});function An(e){return e.reduce(function(t,n){return t.concat(n)},[])}var Zf=0;function Or(e){return e.collections.length===0?0:e.collections.reduce(function(t,n){return t+n.items.length},0)}var Er=function(){},Yf=[{segment:"autocomplete-core",version:"1.8.2"}];function ns(e,t){var n=t;return{then:function(s,r){return ns(e.then($n(s,n,e),$n(r,n,e)),n)},catch:function(s){return ns(e.catch($n(s,n,e)),n)},finally:function(s){return s&&n.onCancelList.push(s),ns(e.finally($n(s&&function(){return n.onCancelList=[],s()},n,e)),n)},cancel:function(){n.isCanceled=!0;var s=n.onCancelList;n.onCancelList=[],s.forEach(function(r){r()})},isCanceled:function(){return n.isCanceled===!0}}}function bo(e){return ns(e,{isCanceled:!1,onCancelList:[]})}function $n(e,t,n){return e?function(s){return t.isCanceled?s:e(s)}:n}function jo(e,t,n,s){if(!n)return null;if(e<0&&(t===null||s!==null&&t===0))return n+e;var r=(t===null?-1:t)+e;return r<=-1||r>=n?s===null?null:0:r}function xo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function wo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xo(Object(n),!0).forEach(function(s){Xf(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xo(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function Xf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ht(e){var t=function(r){var a=r.collections.map(function(o){return o.items.length}).reduce(function(o,c,l){var u=(o[l-1]||0)+c;return o.push(u),o},[]).reduce(function(o,c){return c<=r.activeItemId?o+1:o},0);return r.collections[a]}(e);if(!t)return null;var n=t.items[function(r){for(var a=r.state,o=r.collection,c=!1,l=0,u=0;c===!1;){var i=a.collections[l];if(i===o){c=!0;break}u+=i.items.length,l++}return a.activeItemId-u}({state:e,collection:t})],s=t.source;return{item:n,itemInputValue:s.getItemInputValue({item:n,state:e}),itemUrl:s.getItemUrl({item:n,state:e}),source:s}}var eh=/((gt|sm)-|galaxy nexus)|samsung[- ]/i;function Oo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function Bn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Oo(Object(n),!0).forEach(function(s){th(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oo(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function th(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Eo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function nh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sh(e,t,n){var s,r=t.initialState;return{getState:function(){return r},dispatch:function(a,o){var c=function(l){for(var u=1;u<arguments.length;u++){var i=arguments[u]!=null?arguments[u]:{};u%2?Eo(Object(i),!0).forEach(function(p){nh(l,p,i[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(i)):Eo(Object(i)).forEach(function(p){Object.defineProperty(l,p,Object.getOwnPropertyDescriptor(i,p))})}return l}({},r);r=e(r,{type:a,props:t,payload:o}),n({state:r,prevState:c})},pendingRequests:(s=[],{add:function(a){return s.push(a),a.finally(function(){s=s.filter(function(o){return o!==a})})},cancelAll:function(){s.forEach(function(a){return a.cancel()})},isEmpty:function(){return s.length===0}})}}function So(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function zn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?So(Object(n),!0).forEach(function(s){rh(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):So(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function rh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ah(e){return function(t){if(Array.isArray(t))return Js(t)}(e)||function(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||function(t,n){if(!!t){if(typeof t=="string")return Js(t,n);var s=Object.prototype.toString.call(t).slice(8,-1);if(s==="Object"&&t.constructor&&(s=t.constructor.name),s==="Map"||s==="Set")return Array.from(t);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return Js(t,n)}}(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Js(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function Io(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function Tt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Io(Object(n),!0).forEach(function(s){oh(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Io(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function oh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lh(e,t){var n,s=typeof window!="undefined"?window:{},r=e.plugins||[];return Tt(Tt({debug:!1,openOnFocus:!1,placeholder:"",autoFocus:!1,defaultActiveItemId:null,stallThreshold:300,environment:s,shouldPanelOpen:function(a){return Or(a.state)>0},reshape:function(a){return a.sources}},e),{},{id:(n=e.id)!==null&&n!==void 0?n:"autocomplete-".concat(Zf++),plugins:r,initialState:Tt({activeItemId:null,query:"",completion:null,collections:[],isOpen:!1,status:"idle",context:{}},e.initialState),onStateChange:function(a){var o;(o=e.onStateChange)===null||o===void 0||o.call(e,a),r.forEach(function(c){var l;return(l=c.onStateChange)===null||l===void 0?void 0:l.call(c,a)})},onSubmit:function(a){var o;(o=e.onSubmit)===null||o===void 0||o.call(e,a),r.forEach(function(c){var l;return(l=c.onSubmit)===null||l===void 0?void 0:l.call(c,a)})},onReset:function(a){var o;(o=e.onReset)===null||o===void 0||o.call(e,a),r.forEach(function(c){var l;return(l=c.onReset)===null||l===void 0?void 0:l.call(c,a)})},getSources:function(a){return Promise.all([].concat(ah(r.map(function(o){return o.getSources})),[e.getSources]).filter(Boolean).map(function(o){return function(c,l){var u=[];return Promise.resolve(c(l)).then(function(i){return Promise.all(i.filter(function(p){return Boolean(p)}).map(function(p){if(p.sourceId,u.includes(p.sourceId))throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(p.sourceId)," is not unique."));u.push(p.sourceId);var f={getItemInputValue:function(b){return b.state.query},getItemUrl:function(){},onSelect:function(b){(0,b.setIsOpen)(!1)},onActive:Er,onResolve:Er};Object.keys(f).forEach(function(b){f[b].__default=!0});var g=wo(wo({},f),p);return Promise.resolve(g)}))})}(o,a)})).then(function(o){return An(o)}).then(function(o){return o.map(function(c){return Tt(Tt({},c),{},{onSelect:function(l){c.onSelect(l),t.forEach(function(u){var i;return(i=u.onSelect)===null||i===void 0?void 0:i.call(u,l)})},onActive:function(l){c.onActive(l),t.forEach(function(u){var i;return(i=u.onActive)===null||i===void 0?void 0:i.call(u,l)})},onResolve:function(l){c.onResolve(l),t.forEach(function(u){var i;return(i=u.onResolve)===null||i===void 0?void 0:i.call(u,l)})}})})})},navigator:Tt({navigate:function(a){var o=a.itemUrl;s.location.assign(o)},navigateNewTab:function(a){var o=a.itemUrl,c=s.open(o,"_blank","noopener");c==null||c.focus()},navigateNewWindow:function(a){var o=a.itemUrl;s.open(o,"_blank","noopener")}},e.navigator)})}function Po(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function Kn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Po(Object(n),!0).forEach(function(s){qc(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Po(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function qc(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ko(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function Dt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ko(Object(n),!0).forEach(function(s){ch(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ko(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function ch(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tc(e){return function(t){if(Array.isArray(t))return Qs(t)}(e)||function(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||function(t,n){if(!!t){if(typeof t=="string")return Qs(t,n);var s=Object.prototype.toString.call(t).slice(8,-1);if(s==="Object"&&t.constructor&&(s=t.constructor.name),s==="Map"||s==="Set")return Array.from(t);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return Qs(t,n)}}(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Qs(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function Vn(e){return Boolean(e.execute)}function ih(e,t,n){if(r=e,Boolean(r==null?void 0:r.execute)){var s=e.requesterId==="algolia"?Object.assign.apply(Object,[{}].concat(Tc(Object.keys(n.context).map(function(a){var o;return(o=n.context[a])===null||o===void 0?void 0:o.__algoliaSearchParameters})))):{};return Dt(Dt({},e),{},{requests:e.queries.map(function(a){return{query:e.requesterId==="algolia"?Dt(Dt({},a),{},{params:Dt(Dt({},s),a.params)}):a,sourceId:t,transformResponse:e.transformResponse}})})}var r;return{items:e,sourceId:t}}function uh(e){var t=e.reduce(function(n,s){if(!Vn(s))return n.push(s),n;var r=s.searchClient,a=s.execute,o=s.requesterId,c=s.requests,l=n.find(function(p){return Vn(s)&&Vn(p)&&p.searchClient===r&&Boolean(o)&&p.requesterId===o});if(l){var u;(u=l.items).push.apply(u,Tc(c))}else{var i={execute:a,requesterId:o,items:c,searchClient:r};n.push(i)}return n},[]).map(function(n){if(!Vn(n))return Promise.resolve(n);var s=n,r=s.execute,a=s.items;return r({searchClient:s.searchClient,requests:a})});return Promise.all(t).then(function(n){return An(n)})}function ph(e,t,n){return t.map(function(s){var r=e.filter(function(l){return l.sourceId===s.sourceId}),a=r.map(function(l){return l.items}),o=r[0].transformResponse,c=o?o(function(l){var u=l.map(function(i){var p;return Bn(Bn({},i),{},{hits:(p=i.hits)===null||p===void 0?void 0:p.map(function(f){return Bn(Bn({},f),{},{__autocomplete_indexName:i.index,__autocomplete_queryID:i.queryID})})})});return{results:u,hits:u.map(function(i){return i.hits}).filter(Boolean),facetHits:u.map(function(i){var p;return(p=i.facetHits)===null||p===void 0?void 0:p.map(function(f){return{label:f.value,count:f.count,_highlightResult:{label:{value:f.highlighted}}}})}).filter(Boolean)}}(a)):a;return s.onResolve({source:s,results:a,items:c,state:n.getState()}),c.every(Boolean),'The `getItems` function from source "'.concat(s.sourceId,'" must return an array of items but returned ').concat(JSON.stringify(void 0),`.

Did you forget to return items?

See: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems`),{source:s,items:c}})}var fh=["event","nextState","props","query","refresh","store"];function Co(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function an(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Co(Object(n),!0).forEach(function(s){hh(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Co(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function hh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dh(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ao,Gs,Wn,on=null,Ro=(Ao=-1,Gs=-1,Wn=void 0,function(e){var t=++Ao;return Promise.resolve(e).then(function(n){return Wn&&t<Gs?Wn:(Gs=t,Wn=n,n)})});function Lt(e){var t=e.event,n=e.nextState,s=n===void 0?{}:n,r=e.props,a=e.query,o=e.refresh,c=e.store,l=dh(e,fh);on&&r.environment.clearTimeout(on);var u=l.setCollections,i=l.setIsOpen,p=l.setQuery,f=l.setActiveItemId,g=l.setStatus;if(p(a),f(r.defaultActiveItemId),!a&&r.openOnFocus===!1){var b,y=c.getState().collections.map(function(O){return an(an({},O),{},{items:[]})});g("idle"),u(y),i((b=s.isOpen)!==null&&b!==void 0?b:r.shouldPanelOpen({state:c.getState()}));var w=bo(Ro(y).then(function(){return Promise.resolve()}));return c.pendingRequests.add(w)}g("loading"),on=r.environment.setTimeout(function(){g("stalled")},r.stallThreshold);var S=bo(Ro(r.getSources(an({query:a,refresh:o,state:c.getState()},l)).then(function(O){return Promise.all(O.map(function(C){return Promise.resolve(C.getItems(an({query:a,refresh:o,state:c.getState()},l))).then(function(E){return ih(E,C.sourceId,c.getState())})})).then(uh).then(function(C){return ph(C,O,c)}).then(function(C){return function(E){var A=E.collections,F=E.props,Y=E.state,ie=A.reduce(function(Q,ce){return Kn(Kn({},Q),{},qc({},ce.source.sourceId,Kn(Kn({},ce.source),{},{getItems:function(){return An(ce.items)}})))},{}),le=F.plugins.reduce(function(Q,ce){return ce.reshape?ce.reshape(Q):Q},{sourcesBySourceId:ie,state:Y}).sourcesBySourceId;return An(F.reshape({sourcesBySourceId:le,sources:Object.values(le),state:Y})).filter(Boolean).map(function(Q){return{source:Q,items:Q.getItems()}})}({collections:C,props:r,state:c.getState()})})}))).then(function(O){var C;g("idle"),u(O);var E=r.shouldPanelOpen({state:c.getState()});i((C=s.isOpen)!==null&&C!==void 0?C:r.openOnFocus&&!a&&E||E);var A=Ht(c.getState());if(c.getState().activeItemId!==null&&A){var F=A.item,Y=A.itemInputValue,ie=A.itemUrl,le=A.source;le.onActive(an({event:t,item:F,itemInputValue:Y,itemUrl:ie,refresh:o,source:le,state:c.getState()},l))}}).finally(function(){g("idle"),on&&r.environment.clearTimeout(on)});return c.pendingRequests.add(S)}var mh=["event","props","refresh","store"];function qo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function xt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qo(Object(n),!0).forEach(function(s){gh(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qo(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function gh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vh(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _h=["props","refresh","store"],yh=["inputElement","formElement","panelElement"],bh=["inputElement"],jh=["inputElement","maxLength"],xh=["sourceIndex"],wh=["sourceIndex"],Oh=["item","source","sourceIndex"];function To(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?To(Object(n),!0).forEach(function(s){Eh(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):To(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function Eh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wt(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Sh(e){var t=e.props,n=e.refresh,s=e.store,r=wt(e,_h),a=function(o,c){return c!==void 0?"".concat(o,"-").concat(c):o};return{getEnvironmentProps:function(o){var c=o.inputElement,l=o.formElement,u=o.panelElement;function i(p){!s.getState().isOpen&&s.pendingRequests.isEmpty()||p.target===c||[l,u].some(function(f){return g=f,b=p.target,g===b||g.contains(b);var g,b})===!1&&(s.dispatch("blur",null),t.debug||s.pendingRequests.cancelAll())}return Oe({onTouchStart:i,onMouseDown:i,onTouchMove:function(p){s.getState().isOpen!==!1&&c===t.environment.document.activeElement&&p.target!==c&&c.blur()}},wt(o,yh))},getRootProps:function(o){return Oe({role:"combobox","aria-expanded":s.getState().isOpen,"aria-haspopup":"listbox","aria-owns":s.getState().isOpen?"".concat(t.id,"-list"):void 0,"aria-labelledby":"".concat(t.id,"-label")},o)},getFormProps:function(o){return o.inputElement,Oe({action:"",noValidate:!0,role:"search",onSubmit:function(c){var l;c.preventDefault(),t.onSubmit(Oe({event:c,refresh:n,state:s.getState()},r)),s.dispatch("submit",null),(l=o.inputElement)===null||l===void 0||l.blur()},onReset:function(c){var l;c.preventDefault(),t.onReset(Oe({event:c,refresh:n,state:s.getState()},r)),s.dispatch("reset",null),(l=o.inputElement)===null||l===void 0||l.focus()}},wt(o,bh))},getLabelProps:function(o){var c=o||{},l=c.sourceIndex,u=wt(c,xh);return Oe({htmlFor:"".concat(a(t.id,l),"-input"),id:"".concat(a(t.id,l),"-label")},u)},getInputProps:function(o){var c;function l(w){(t.openOnFocus||Boolean(s.getState().query))&&Lt(Oe({event:w,props:t,query:s.getState().completion||s.getState().query,refresh:n,store:s},r)),s.dispatch("focus",null)}var u=o||{},i=(u.inputElement,u.maxLength),p=i===void 0?512:i,f=wt(u,jh),g=Ht(s.getState()),b=function(w){return Boolean(w&&w.match(eh))}(((c=t.environment.navigator)===null||c===void 0?void 0:c.userAgent)||""),y=g!=null&&g.itemUrl&&!b?"go":"search";return Oe({"aria-autocomplete":"both","aria-activedescendant":s.getState().isOpen&&s.getState().activeItemId!==null?"".concat(t.id,"-item-").concat(s.getState().activeItemId):void 0,"aria-controls":s.getState().isOpen?"".concat(t.id,"-list"):void 0,"aria-labelledby":"".concat(t.id,"-label"),value:s.getState().completion||s.getState().query,id:"".concat(t.id,"-input"),autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",enterKeyHint:y,spellCheck:"false",autoFocus:t.autoFocus,placeholder:t.placeholder,maxLength:p,type:"search",onChange:function(w){Lt(Oe({event:w,props:t,query:w.currentTarget.value.slice(0,p),refresh:n,store:s},r))},onKeyDown:function(w){(function(S){var O=S.event,C=S.props,E=S.refresh,A=S.store,F=vh(S,mh);if(O.key==="ArrowUp"||O.key==="ArrowDown"){var Y=function(){var me=C.environment.document.getElementById("".concat(C.id,"-item-").concat(A.getState().activeItemId));me&&(me.scrollIntoViewIfNeeded?me.scrollIntoViewIfNeeded(!1):me.scrollIntoView(!1))},ie=function(){var me=Ht(A.getState());if(A.getState().activeItemId!==null&&me){var Ue=me.item,ae=me.itemInputValue,te=me.itemUrl,W=me.source;W.onActive(xt({event:O,item:Ue,itemInputValue:ae,itemUrl:te,refresh:E,source:W,state:A.getState()},F))}};O.preventDefault(),A.getState().isOpen===!1&&(C.openOnFocus||Boolean(A.getState().query))?Lt(xt({event:O,props:C,query:A.getState().query,refresh:E,store:A},F)).then(function(){A.dispatch(O.key,{nextActiveItemId:C.defaultActiveItemId}),ie(),setTimeout(Y,0)}):(A.dispatch(O.key,{}),ie(),Y())}else if(O.key==="Escape")O.preventDefault(),A.dispatch(O.key,null),A.pendingRequests.cancelAll();else if(O.key==="Tab")A.dispatch("blur",null),A.pendingRequests.cancelAll();else if(O.key==="Enter"){if(A.getState().activeItemId===null||A.getState().collections.every(function(me){return me.items.length===0}))return void(C.debug||A.pendingRequests.cancelAll());O.preventDefault();var le=Ht(A.getState()),Q=le.item,ce=le.itemInputValue,de=le.itemUrl,he=le.source;if(O.metaKey||O.ctrlKey)de!==void 0&&(he.onSelect(xt({event:O,item:Q,itemInputValue:ce,itemUrl:de,refresh:E,source:he,state:A.getState()},F)),C.navigator.navigateNewTab({itemUrl:de,item:Q,state:A.getState()}));else if(O.shiftKey)de!==void 0&&(he.onSelect(xt({event:O,item:Q,itemInputValue:ce,itemUrl:de,refresh:E,source:he,state:A.getState()},F)),C.navigator.navigateNewWindow({itemUrl:de,item:Q,state:A.getState()}));else if(!O.altKey){if(de!==void 0)return he.onSelect(xt({event:O,item:Q,itemInputValue:ce,itemUrl:de,refresh:E,source:he,state:A.getState()},F)),void C.navigator.navigate({itemUrl:de,item:Q,state:A.getState()});Lt(xt({event:O,nextState:{isOpen:!1},props:C,query:ce,refresh:E,store:A},F)).then(function(){he.onSelect(xt({event:O,item:Q,itemInputValue:ce,itemUrl:de,refresh:E,source:he,state:A.getState()},F))})}}})(Oe({event:w,props:t,refresh:n,store:s},r))},onFocus:l,onBlur:Er,onClick:function(w){o.inputElement!==t.environment.document.activeElement||s.getState().isOpen||l(w)}},f)},getPanelProps:function(o){return Oe({onMouseDown:function(c){c.preventDefault()},onMouseLeave:function(){s.dispatch("mouseleave",null)}},o)},getListProps:function(o){var c=o||{},l=c.sourceIndex,u=wt(c,wh);return Oe({role:"listbox","aria-labelledby":"".concat(a(t.id,l),"-label"),id:"".concat(a(t.id,l),"-list")},u)},getItemProps:function(o){var c=o.item,l=o.source,u=o.sourceIndex,i=wt(o,Oh);return Oe({id:"".concat(a(t.id,u),"-item-").concat(c.__autocomplete_id),role:"option","aria-selected":s.getState().activeItemId===c.__autocomplete_id,onMouseMove:function(p){if(c.__autocomplete_id!==s.getState().activeItemId){s.dispatch("mousemove",c.__autocomplete_id);var f=Ht(s.getState());if(s.getState().activeItemId!==null&&f){var g=f.item,b=f.itemInputValue,y=f.itemUrl,w=f.source;w.onActive(Oe({event:p,item:g,itemInputValue:b,itemUrl:y,refresh:n,source:w,state:s.getState()},r))}}},onMouseDown:function(p){p.preventDefault()},onClick:function(p){var f=l.getItemInputValue({item:c,state:s.getState()}),g=l.getItemUrl({item:c,state:s.getState()});(g?Promise.resolve():Lt(Oe({event:p,nextState:{isOpen:!1},props:t,query:f,refresh:n,store:s},r))).then(function(){l.onSelect(Oe({event:p,item:c,itemInputValue:f,itemUrl:g,refresh:n,source:l,state:s.getState()},r))})}},i)}}}function Do(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function Ih(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Do(Object(n),!0).forEach(function(s){Dc(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Do(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function Dc(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ph(e){var t,n,s,r,a=e.plugins,o=e.options,c=(t=(((n=o.__autocomplete_metadata)===null||n===void 0?void 0:n.userAgents)||[])[0])===null||t===void 0?void 0:t.segment,l=c?Dc({},c,Object.keys(((s=o.__autocomplete_metadata)===null||s===void 0?void 0:s.options)||{})):{};return{plugins:a.map(function(u){return{name:u.name,options:Object.keys(u.__autocomplete_pluginOptions||[])}}),options:Ih({"autocomplete-core":Object.keys(o)},l),ua:Yf.concat(((r=o.__autocomplete_metadata)===null||r===void 0?void 0:r.userAgents)||[])}}function No(e){var t,n=e.state;return n.isOpen===!1||n.activeItemId===null?null:((t=Ht(n))===null||t===void 0?void 0:t.itemInputValue)||null}function Mo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mo(Object(n),!0).forEach(function(s){kh(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mo(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function kh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ch=function(e,t){switch(t.type){case"setActiveItemId":case"mousemove":return J(J({},e),{},{activeItemId:t.payload});case"setQuery":return J(J({},e),{},{query:t.payload,completion:null});case"setCollections":return J(J({},e),{},{collections:t.payload});case"setIsOpen":return J(J({},e),{},{isOpen:t.payload});case"setStatus":return J(J({},e),{},{status:t.payload});case"setContext":return J(J({},e),{},{context:J(J({},e.context),t.payload)});case"ArrowDown":var n=J(J({},e),{},{activeItemId:t.payload.hasOwnProperty("nextActiveItemId")?t.payload.nextActiveItemId:jo(1,e.activeItemId,Or(e),t.props.defaultActiveItemId)});return J(J({},n),{},{completion:No({state:n})});case"ArrowUp":var s=J(J({},e),{},{activeItemId:jo(-1,e.activeItemId,Or(e),t.props.defaultActiveItemId)});return J(J({},s),{},{completion:No({state:s})});case"Escape":return e.isOpen?J(J({},e),{},{activeItemId:null,isOpen:!1,completion:null}):J(J({},e),{},{activeItemId:null,query:"",status:"idle",collections:[]});case"submit":return J(J({},e),{},{activeItemId:null,isOpen:!1,status:"idle"});case"reset":return J(J({},e),{},{activeItemId:t.props.openOnFocus===!0?t.props.defaultActiveItemId:null,status:"idle",query:""});case"focus":return J(J({},e),{},{activeItemId:t.props.defaultActiveItemId,isOpen:(t.props.openOnFocus||Boolean(e.query))&&t.props.shouldPanelOpen({state:e})});case"blur":return t.props.debug?e:J(J({},e),{},{isOpen:!1,activeItemId:null});case"mouseleave":return J(J({},e),{},{activeItemId:t.props.defaultActiveItemId});default:return"The reducer action ".concat(JSON.stringify(t.type)," is not supported."),e}};function Lo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function Ot(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lo(Object(n),!0).forEach(function(s){Ah(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lo(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function Ah(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Rh(e){var t=[],n=lh(e,t),s=sh(Ch,n,function(c){var l=c.prevState,u=c.state;n.onStateChange(Ot({prevState:l,state:u,refresh:o,navigator:n.navigator},r))}),r=function(c){var l=c.store;return{setActiveItemId:function(u){l.dispatch("setActiveItemId",u)},setQuery:function(u){l.dispatch("setQuery",u)},setCollections:function(u){var i=0,p=u.map(function(f){return zn(zn({},f),{},{items:An(f.items).map(function(g){return zn(zn({},g),{},{__autocomplete_id:i++})})})});l.dispatch("setCollections",p)},setIsOpen:function(u){l.dispatch("setIsOpen",u)},setStatus:function(u){l.dispatch("setStatus",u)},setContext:function(u){l.dispatch("setContext",u)}}}({store:s}),a=Sh(Ot({props:n,refresh:o,store:s,navigator:n.navigator},r));function o(){return Lt(Ot({event:new Event("input"),nextState:{isOpen:s.getState().isOpen},props:n,navigator:n.navigator,query:s.getState().query,refresh:o,store:s},r))}return n.plugins.forEach(function(c){var l;return(l=c.subscribe)===null||l===void 0?void 0:l.call(c,Ot(Ot({},r),{},{navigator:n.navigator,refresh:o,onSelect:function(u){t.push({onSelect:u})},onActive:function(u){t.push({onActive:u})},onResolve:function(u){t.push({onResolve:u})}}))}),function(c){var l,u,i=c.metadata,p=c.environment;if(!((l=p.navigator)===null||l===void 0||(u=l.userAgent)===null||u===void 0)&&u.includes("Algolia Crawler")){var f=p.document.createElement("meta"),g=p.document.querySelector("head");f.name="algolia:metadata",setTimeout(function(){f.content=JSON.stringify(i),g.appendChild(f)},0)}}({metadata:Ph({plugins:n.plugins,options:e}),environment:n.environment}),Ot(Ot({refresh:o,navigator:n.navigator},a),r)}function qh(e){var t=e.translations,n=(t===void 0?{}:t).searchByText,s=n===void 0?"Search by":n;return m.createElement("a",{href:"https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname,"&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"),target:"_blank",rel:"noopener noreferrer"},m.createElement("span",{className:"DocSearch-Label"},s),m.createElement("svg",{width:"77",height:"19","aria-label":"Algolia",role:"img",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2196.2 500"},m.createElement("defs",null,m.createElement("style",null,".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")),m.createElement("path",{className:"cls-2",d:"M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z"}),m.createElement("rect",{className:"cls-1",x:"1845.88",y:"104.73",width:"62.58",height:"277.9",rx:"5.9",ry:"5.9"}),m.createElement("path",{className:"cls-2",d:"M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z"}),m.createElement("path",{className:"cls-2",d:"M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z"}),m.createElement("path",{className:"cls-2",d:"M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z"}),m.createElement("path",{className:"cls-2",d:"M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z"}),m.createElement("path",{className:"cls-2",d:"M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z"}),m.createElement("path",{className:"cls-2",d:"M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z"}),m.createElement("path",{className:"cls-1",d:"M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z"})))}function Jn(e){return m.createElement("svg",{width:"15",height:"15","aria-label":e.ariaLabel,role:"img"},m.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.2"},e.children))}function Th(e){var t=e.translations,n=t===void 0?{}:t,s=n.selectText,r=s===void 0?"to select":s,a=n.selectKeyAriaLabel,o=a===void 0?"Enter key":a,c=n.navigateText,l=c===void 0?"to navigate":c,u=n.navigateUpKeyAriaLabel,i=u===void 0?"Arrow up":u,p=n.navigateDownKeyAriaLabel,f=p===void 0?"Arrow down":p,g=n.closeText,b=g===void 0?"to close":g,y=n.closeKeyAriaLabel,w=y===void 0?"Escape key":y,S=n.searchByText,O=S===void 0?"Search by":S;return m.createElement(m.Fragment,null,m.createElement("div",{className:"DocSearch-Logo"},m.createElement(qh,{translations:{searchByText:O}})),m.createElement("ul",{className:"DocSearch-Commands"},m.createElement("li",null,m.createElement("kbd",{className:"DocSearch-Commands-Key"},m.createElement(Jn,{ariaLabel:o},m.createElement("path",{d:"M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"}))),m.createElement("span",{className:"DocSearch-Label"},r)),m.createElement("li",null,m.createElement("kbd",{className:"DocSearch-Commands-Key"},m.createElement(Jn,{ariaLabel:f},m.createElement("path",{d:"M7.5 3.5v8M10.5 8.5l-3 3-3-3"}))),m.createElement("kbd",{className:"DocSearch-Commands-Key"},m.createElement(Jn,{ariaLabel:i},m.createElement("path",{d:"M7.5 11.5v-8M10.5 6.5l-3-3-3 3"}))),m.createElement("span",{className:"DocSearch-Label"},l)),m.createElement("li",null,m.createElement("kbd",{className:"DocSearch-Commands-Key"},m.createElement(Jn,{ariaLabel:w},m.createElement("path",{d:"M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"}))),m.createElement("span",{className:"DocSearch-Label"},b))))}function Dh(e){var t=e.hit,n=e.children;return m.createElement("a",{href:t.url},n)}function Nh(){return m.createElement("svg",{viewBox:"0 0 38 38",stroke:"currentColor",strokeOpacity:".5"},m.createElement("g",{fill:"none",fillRule:"evenodd"},m.createElement("g",{transform:"translate(1 1)",strokeWidth:"2"},m.createElement("circle",{strokeOpacity:".3",cx:"18",cy:"18",r:"18"}),m.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},m.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})))))}function Mh(){return m.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},m.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},m.createElement("path",{d:"M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0"}),m.createElement("path",{d:"M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13"})))}function Sr(){return m.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},m.createElement("path",{d:"M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}function Lh(){return m.createElement("svg",{className:"DocSearch-Hit-Select-Icon",width:"20",height:"20",viewBox:"0 0 20 20"},m.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},m.createElement("path",{d:"M18 3v4c0 2-2 4-4 4H2"}),m.createElement("path",{d:"M8 17l-6-6 6-6"})))}var Uh=function(){return m.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},m.createElement("path",{d:"M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))};function Hh(e){switch(e.type){case"lvl1":return m.createElement(Uh,null);case"content":return m.createElement($h,null);default:return m.createElement(Fh,null)}}function Fh(){return m.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},m.createElement("path",{d:"M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}function $h(){return m.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},m.createElement("path",{d:"M17 5H3h14zm0 5H3h14zm0 5H3h14z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))}function Uo(){return m.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},m.createElement("path",{d:"M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))}function Bh(){return m.createElement("svg",{width:"40",height:"40",viewBox:"0 0 20 20",fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},m.createElement("path",{d:"M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0"}))}function zh(){return m.createElement("svg",{width:"40",height:"40",viewBox:"0 0 20 20",fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},m.createElement("path",{d:"M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"}))}function Kh(e){var t=e.translations,n=t===void 0?{}:t,s=n.titleText,r=s===void 0?"Unable to fetch results":s,a=n.helpText,o=a===void 0?"You might want to check your network connection.":a;return m.createElement("div",{className:"DocSearch-ErrorScreen"},m.createElement("div",{className:"DocSearch-Screen-Icon"},m.createElement(Bh,null)),m.createElement("p",{className:"DocSearch-Title"},r),m.createElement("p",{className:"DocSearch-Help"},o))}var Vh=["translations"];function Wh(e){return function(t){if(Array.isArray(t))return Zs(t)}(e)||function(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||function(t,n){if(!!t){if(typeof t=="string")return Zs(t,n);var s=Object.prototype.toString.call(t).slice(8,-1);if(s==="Object"&&t.constructor&&(s=t.constructor.name),s==="Map"||s==="Set")return Array.from(t);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return Zs(t,n)}}(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Zs(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function Jh(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Qh(e){var t=e.translations,n=t===void 0?{}:t,s=Jh(e,Vh),r=n.noResultsText,a=r===void 0?"No results for":r,o=n.suggestedQueryText,c=o===void 0?"Try searching for":o,l=n.reportMissingResultsText,u=l===void 0?"Believe this query should return results?":l,i=n.reportMissingResultsLinkText,p=i===void 0?"Let us know.":i,f=s.state.context.searchSuggestions;return m.createElement("div",{className:"DocSearch-NoResults"},m.createElement("div",{className:"DocSearch-Screen-Icon"},m.createElement(zh,null)),m.createElement("p",{className:"DocSearch-Title"},a,' "',m.createElement("strong",null,s.state.query),'"'),f&&f.length>0&&m.createElement("div",{className:"DocSearch-NoResults-Prefill-List"},m.createElement("p",{className:"DocSearch-Help"},c,":"),m.createElement("ul",null,f.slice(0,3).reduce(function(g,b){return[].concat(Wh(g),[m.createElement("li",{key:b},m.createElement("button",{className:"DocSearch-Prefill",key:b,type:"button",onClick:function(){s.setQuery(b.toLowerCase()+" "),s.refresh(),s.inputRef.current.focus()}},b))])},[]))),s.getMissingResultsUrl&&m.createElement("p",{className:"DocSearch-Help"},"".concat(u," "),m.createElement("a",{href:s.getMissingResultsUrl({query:s.state.query}),target:"_blank",rel:"noopener noreferrer"},p)))}var Gh=["hit","attribute","tagName"];function Ho(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function Fo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ho(Object(n),!0).forEach(function(s){Zh(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ho(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function Zh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yh(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function $o(e,t){return t.split(".").reduce(function(n,s){return n!=null&&n[s]?n[s]:null},e)}function Nt(e){var t=e.hit,n=e.attribute,s=e.tagName;return et(s===void 0?"span":s,Fo(Fo({},Yh(e,Gh)),{},{dangerouslySetInnerHTML:{__html:$o(t,"_snippetResult.".concat(n,".value"))||$o(t,n)}}))}function Bo(e,t){return function(n){if(Array.isArray(n))return n}(e)||function(n,s){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var a,o,c=[],l=!0,u=!1;try{for(r=r.call(n);!(l=(a=r.next()).done)&&(c.push(a.value),!s||c.length!==s);l=!0);}catch(i){u=!0,o=i}finally{try{l||r.return==null||r.return()}finally{if(u)throw o}}return c}}(e,t)||function(n,s){if(!!n){if(typeof n=="string")return zo(n,s);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return zo(n,s)}}(e,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function zo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function ds(){return ds=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ds.apply(this,arguments)}function Ir(e){return e.collection&&e.collection.items.length!==0?m.createElement("section",{className:"DocSearch-Hits"},m.createElement("div",{className:"DocSearch-Hit-source"},e.title),m.createElement("ul",e.getListProps(),e.collection.items.map(function(t,n){return m.createElement(Xh,ds({key:[e.title,t.objectID].join(":"),item:t,index:n},e))}))):null}function Xh(e){var t=e.item,n=e.index,s=e.renderIcon,r=e.renderAction,a=e.getItemProps,o=e.onItemClick,c=e.collection,l=e.hitComponent,u=Bo(m.useState(!1),2),i=u[0],p=u[1],f=Bo(m.useState(!1),2),g=f[0],b=f[1],y=m.useRef(null),w=l;return m.createElement("li",ds({className:["DocSearch-Hit",t.__docsearch_parent&&"DocSearch-Hit--Child",i&&"DocSearch-Hit--deleting",g&&"DocSearch-Hit--favoriting"].filter(Boolean).join(" "),onTransitionEnd:function(){y.current&&y.current()}},a({item:t,source:c.source,onClick:function(S){o(t,S)}})),m.createElement(w,{hit:t},m.createElement("div",{className:"DocSearch-Hit-Container"},s({item:t,index:n}),t.hierarchy[t.type]&&t.type==="lvl1"&&m.createElement("div",{className:"DocSearch-Hit-content-wrapper"},m.createElement(Nt,{className:"DocSearch-Hit-title",hit:t,attribute:"hierarchy.lvl1"}),t.content&&m.createElement(Nt,{className:"DocSearch-Hit-path",hit:t,attribute:"content"})),t.hierarchy[t.type]&&(t.type==="lvl2"||t.type==="lvl3"||t.type==="lvl4"||t.type==="lvl5"||t.type==="lvl6")&&m.createElement("div",{className:"DocSearch-Hit-content-wrapper"},m.createElement(Nt,{className:"DocSearch-Hit-title",hit:t,attribute:"hierarchy.".concat(t.type)}),m.createElement(Nt,{className:"DocSearch-Hit-path",hit:t,attribute:"hierarchy.lvl1"})),t.type==="content"&&m.createElement("div",{className:"DocSearch-Hit-content-wrapper"},m.createElement(Nt,{className:"DocSearch-Hit-title",hit:t,attribute:"content"}),m.createElement(Nt,{className:"DocSearch-Hit-path",hit:t,attribute:"hierarchy.lvl1"})),r({item:t,runDeleteTransition:function(S){p(!0),y.current=S},runFavoriteTransition:function(S){b(!0),y.current=S}}))))}function Ko(e,t,n){return e.reduce(function(s,r){var a=t(r);return s.hasOwnProperty(a)||(s[a]=[]),s[a].length<(n||5)&&s[a].push(r),s},{})}function Vo(e){return e}function Qn(e){return e.button===1||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey}function ed(){}var Nc=/(<mark>|<\/mark>)/g,td=RegExp(Nc.source);function Mc(e){var t,n,s,r,a,o=e;if(!o.__docsearch_parent&&!e._highlightResult)return e.hierarchy.lvl0;var c=((o.__docsearch_parent?(t=o.__docsearch_parent)===null||t===void 0||(n=t._highlightResult)===null||n===void 0||(s=n.hierarchy)===null||s===void 0?void 0:s.lvl0:(r=e._highlightResult)===null||r===void 0||(a=r.hierarchy)===null||a===void 0?void 0:a.lvl0)||{}).value;return c&&td.test(c)?c.replace(Nc,""):c}function Pr(){return Pr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Pr.apply(this,arguments)}function nd(e){return m.createElement("div",{className:"DocSearch-Dropdown-Container"},e.state.collections.map(function(t){if(t.items.length===0)return null;var n=Mc(t.items[0]);return m.createElement(Ir,Pr({},e,{key:t.source.sourceId,title:n,collection:t,renderIcon:function(s){var r,a=s.item,o=s.index;return m.createElement(m.Fragment,null,a.__docsearch_parent&&m.createElement("svg",{className:"DocSearch-Hit-Tree",viewBox:"0 0 24 54"},m.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},a.__docsearch_parent!==((r=t.items[o+1])===null||r===void 0?void 0:r.__docsearch_parent)?m.createElement("path",{d:"M8 6v21M20 27H8.3"}):m.createElement("path",{d:"M8 6v42M20 27H8.3"}))),m.createElement("div",{className:"DocSearch-Hit-icon"},m.createElement(Hh,{type:a.type})))},renderAction:function(){return m.createElement("div",{className:"DocSearch-Hit-action"},m.createElement(Lh,null))}}))}),e.resultsFooterComponent&&m.createElement("section",{className:"DocSearch-HitsFooter"},m.createElement(e.resultsFooterComponent,{state:e.state})))}var sd=["translations"];function ms(){return ms=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ms.apply(this,arguments)}function rd(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ad(e){var t=e.translations,n=t===void 0?{}:t,s=rd(e,sd),r=n.recentSearchesTitle,a=r===void 0?"Recent":r,o=n.noRecentSearchesText,c=o===void 0?"No recent searches":o,l=n.saveRecentSearchButtonTitle,u=l===void 0?"Save this search":l,i=n.removeRecentSearchButtonTitle,p=i===void 0?"Remove this search from history":i,f=n.favoriteSearchesTitle,g=f===void 0?"Favorite":f,b=n.removeFavoriteSearchButtonTitle,y=b===void 0?"Remove this search from favorites":b;return s.state.status==="idle"&&s.hasCollections===!1?s.disableUserPersonalization?null:m.createElement("div",{className:"DocSearch-StartScreen"},m.createElement("p",{className:"DocSearch-Help"},c)):s.hasCollections===!1?null:m.createElement("div",{className:"DocSearch-Dropdown-Container"},m.createElement(Ir,ms({},s,{title:a,collection:s.state.collections[0],renderIcon:function(){return m.createElement("div",{className:"DocSearch-Hit-icon"},m.createElement(Mh,null))},renderAction:function(w){var S=w.item,O=w.runFavoriteTransition,C=w.runDeleteTransition;return m.createElement(m.Fragment,null,m.createElement("div",{className:"DocSearch-Hit-action"},m.createElement("button",{className:"DocSearch-Hit-action-button",title:u,type:"submit",onClick:function(E){E.preventDefault(),E.stopPropagation(),O(function(){s.favoriteSearches.add(S),s.recentSearches.remove(S),s.refresh()})}},m.createElement(Uo,null))),m.createElement("div",{className:"DocSearch-Hit-action"},m.createElement("button",{className:"DocSearch-Hit-action-button",title:p,type:"submit",onClick:function(E){E.preventDefault(),E.stopPropagation(),C(function(){s.recentSearches.remove(S),s.refresh()})}},m.createElement(Sr,null))))}})),m.createElement(Ir,ms({},s,{title:g,collection:s.state.collections[1],renderIcon:function(){return m.createElement("div",{className:"DocSearch-Hit-icon"},m.createElement(Uo,null))},renderAction:function(w){var S=w.item,O=w.runDeleteTransition;return m.createElement("div",{className:"DocSearch-Hit-action"},m.createElement("button",{className:"DocSearch-Hit-action-button",title:y,type:"submit",onClick:function(C){C.preventDefault(),C.stopPropagation(),O(function(){s.favoriteSearches.remove(S),s.refresh()})}},m.createElement(Sr,null)))}})))}var od=["translations"];function gs(){return gs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},gs.apply(this,arguments)}function ld(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var cd=m.memo(function(e){var t=e.translations,n=t===void 0?{}:t,s=ld(e,od);if(s.state.status==="error")return m.createElement(Kh,{translations:n==null?void 0:n.errorScreen});var r=s.state.collections.some(function(a){return a.items.length>0});return s.state.query?r===!1?m.createElement(Qh,gs({},s,{translations:n==null?void 0:n.noResultsScreen})):m.createElement(nd,s):m.createElement(ad,gs({},s,{hasCollections:r,translations:n==null?void 0:n.startScreen}))},function(e,t){return t.state.status==="loading"||t.state.status==="stalled"}),id=["translations"];function vs(){return vs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},vs.apply(this,arguments)}function ud(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function pd(e){var t=e.translations,n=t===void 0?{}:t,s=ud(e,id),r=n.resetButtonTitle,a=r===void 0?"Clear the query":r,o=n.resetButtonAriaLabel,c=o===void 0?"Clear the query":o,l=n.cancelButtonText,u=l===void 0?"Cancel":l,i=n.cancelButtonAriaLabel,p=i===void 0?"Cancel":i,f=s.getFormProps({inputElement:s.inputRef.current}).onReset;return m.useEffect(function(){s.autoFocus&&s.inputRef.current&&s.inputRef.current.focus()},[s.autoFocus,s.inputRef]),m.useEffect(function(){s.isFromSelection&&s.inputRef.current&&s.inputRef.current.select()},[s.isFromSelection,s.inputRef]),m.createElement(m.Fragment,null,m.createElement("form",{className:"DocSearch-Form",onSubmit:function(g){g.preventDefault()},onReset:f},m.createElement("label",vs({className:"DocSearch-MagnifierLabel"},s.getLabelProps()),m.createElement(Rc,null)),m.createElement("div",{className:"DocSearch-LoadingIndicator"},m.createElement(Nh,null)),m.createElement("input",vs({className:"DocSearch-Input",ref:s.inputRef},s.getInputProps({inputElement:s.inputRef.current,autoFocus:s.autoFocus,maxLength:64}))),m.createElement("button",{type:"reset",title:a,className:"DocSearch-Reset","aria-label":c,hidden:!s.state.query},m.createElement(Sr,null))),m.createElement("button",{className:"DocSearch-Cancel",type:"reset","aria-label":p,onClick:s.onClose},u))}var fd=["_highlightResult","_snippetResult"];function hd(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function dd(e){return function(){var t="__TEST_KEY__";try{return localStorage.setItem(t,""),localStorage.removeItem(t),!0}catch{return!1}}()===!1?{setItem:function(){},getItem:function(){return[]}}:{setItem:function(t){return window.localStorage.setItem(e,JSON.stringify(t))},getItem:function(){var t=window.localStorage.getItem(e);return t?JSON.parse(t):[]}}}function Wo(e){var t=e.key,n=e.limit,s=n===void 0?5:n,r=dd(t),a=r.getItem().slice(0,s);return{add:function(o){var c=o,l=(c._highlightResult,c._snippetResult,hd(c,fd)),u=a.findIndex(function(i){return i.objectID===l.objectID});u>-1&&a.splice(u,1),a.unshift(l),a=a.slice(0,s),r.setItem(a)},remove:function(o){a=a.filter(function(c){return c.objectID!==o.objectID}),r.setItem(a)},getAll:function(){return a}}}var md=["facetName","facetQuery"];function gd(e){var t,n="algoliasearch-client-js-".concat(e.key),s=function(){return t===void 0&&(t=e.localStorage||window.localStorage),t},r=function(){return JSON.parse(s().getItem(n)||"{}")};return{get:function(a,o){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then(function(){var l=JSON.stringify(a),u=r()[l];return Promise.all([u||o(),u!==void 0])}).then(function(l){var u=us(l,2),i=u[0],p=u[1];return Promise.all([i,p||c.miss(i)])}).then(function(l){return us(l,1)[0]})},set:function(a,o){return Promise.resolve().then(function(){var c=r();return c[JSON.stringify(a)]=o,s().setItem(n,JSON.stringify(c)),o})},delete:function(a){return Promise.resolve().then(function(){var o=r();delete o[JSON.stringify(a)],s().setItem(n,JSON.stringify(o))})},clear:function(){return Promise.resolve().then(function(){s().removeItem(n)})}}}function pn(e){var t=ps(e.caches),n=t.shift();return n===void 0?{get:function(s,r){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}};return r().then(function(o){return Promise.all([o,a.miss(o)])}).then(function(o){return us(o,1)[0]})},set:function(s,r){return Promise.resolve(r)},delete:function(s){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(s,r){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}};return n.get(s,r,a).catch(function(){return pn({caches:t}).get(s,r,a)})},set:function(s,r){return n.set(s,r).catch(function(){return pn({caches:t}).set(s,r)})},delete:function(s){return n.delete(s).catch(function(){return pn({caches:t}).delete(s)})},clear:function(){return n.clear().catch(function(){return pn({caches:t}).clear()})}}}function Ys(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{serializable:!0},t={};return{get:function(n,s){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}},a=JSON.stringify(n);if(a in t)return Promise.resolve(e.serializable?JSON.parse(t[a]):t[a]);var o=s(),c=r&&r.miss||function(){return Promise.resolve()};return o.then(function(l){return c(l)}).then(function(){return o})},set:function(n,s){return t[JSON.stringify(n)]=e.serializable?JSON.stringify(s):s,Promise.resolve(s)},delete:function(n){return delete t[JSON.stringify(n)],Promise.resolve()},clear:function(){return t={},Promise.resolve()}}}function vd(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[n],e[n]=s}return e}function Lc(e,t){return t&&Object.keys(t).forEach(function(n){e[n]=t[n](e)}),e}function Ts(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];var r=0;return e.replace(/%s/g,function(){return encodeURIComponent(n[r++])})}var ss={WithinQueryParameters:0,WithinHeaders:1};function Jo(e,t){var n=e||{},s=n.data||{};return Object.keys(n).forEach(function(r){["timeout","headers","queryParameters","data","cacheable"].indexOf(r)===-1&&(s[r]=n[r])}),{data:Object.entries(s).length>0?s:void 0,timeout:n.timeout||t,headers:n.headers||{},queryParameters:n.queryParameters||{},cacheable:n.cacheable}}var Ft={Read:1,Write:2,Any:3},Uc=1,_d=2,Hc=3;function Fc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Uc;return ne(ne({},e),{},{status:t,lastUpdate:Date.now()})}function $c(e){return typeof e=="string"?{protocol:"https",url:e,accept:Ft.Any}:{protocol:e.protocol||"https",url:e.url,accept:e.accept||Ft.Any}}var Qo="GET",Ds="POST";function yd(e,t){return Promise.all(t.map(function(n){return e.get(n,function(){return Promise.resolve(Fc(n))})})).then(function(n){var s=n.filter(function(o){return function(c){return c.status===Uc||Date.now()-c.lastUpdate>12e4}(o)}),r=n.filter(function(o){return function(c){return c.status===Hc&&Date.now()-c.lastUpdate<=12e4}(o)}),a=[].concat(ps(s),ps(r));return{getTimeout:function(o,c){return(r.length===0&&o===0?1:r.length+3+o)*c},statelessHosts:a.length>0?a.map(function(o){return $c(o)}):t}})}function Go(e,t,n,s){var r=[],a=function(f,g){if(!(f.method===Qo||f.data===void 0&&g.data===void 0)){var b=Array.isArray(f.data)?f.data:ne(ne({},f.data),g.data);return JSON.stringify(b)}}(n,s),o=function(f,g){var b=ne(ne({},f.headers),g.headers),y={};return Object.keys(b).forEach(function(w){var S=b[w];y[w.toLowerCase()]=S}),y}(e,s),c=n.method,l=n.method!==Qo?{}:ne(ne({},n.data),s.data),u=ne(ne(ne({"x-algolia-agent":e.userAgent.value},e.queryParameters),l),s.queryParameters),i=0,p=function f(g,b){var y=g.pop();if(y===void 0)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:Zo(r)};var w={data:a,headers:o,method:c,url:jd(y,n.path,u),connectTimeout:b(i,e.timeouts.connect),responseTimeout:b(i,s.timeout)},S=function(C){var E={request:w,response:C,host:y,triesLeft:g.length};return r.push(E),E},O={onSucess:function(C){return function(E){try{return JSON.parse(E.content)}catch(A){throw function(F,Y){return{name:"DeserializationError",message:F,response:Y}}(A.message,E)}}(C)},onRetry:function(C){var E=S(C);return C.isTimedOut&&i++,Promise.all([e.logger.info("Retryable failure",zc(E)),e.hostsCache.set(y,Fc(y,C.isTimedOut?Hc:_d))]).then(function(){return f(g,b)})},onFail:function(C){throw S(C),function(E,A){var F=E.content,Y=E.status,ie=F;try{ie=JSON.parse(F).message}catch{}return function(le,Q,ce){return{name:"ApiError",message:le,status:Q,transporterStackTrace:ce}}(ie,Y,A)}(C,Zo(r))}};return e.requester.send(w).then(function(C){return function(E,A){return function(F){var Y=F.status;return F.isTimedOut||function(ie){var le=ie.isTimedOut,Q=ie.status;return!le&&~~Q==0}(F)||~~(Y/100)!=2&&~~(Y/100)!=4}(E)?A.onRetry(E):~~(E.status/100)==2?A.onSucess(E):A.onFail(E)}(C,O)})};return yd(e.hostsCache,t).then(function(f){return p(ps(f.statelessHosts).reverse(),f.getTimeout)})}function bd(e){var t={value:"Algolia for JavaScript (".concat(e,")"),add:function(n){var s="; ".concat(n.segment).concat(n.version!==void 0?" (".concat(n.version,")"):"");return t.value.indexOf(s)===-1&&(t.value="".concat(t.value).concat(s)),t}};return t}function jd(e,t,n){var s=Bc(n),r="".concat(e.protocol,"://").concat(e.url,"/").concat(t.charAt(0)==="/"?t.substr(1):t);return s.length&&(r+="?".concat(s)),r}function Bc(e){return Object.keys(e).map(function(t){return Ts("%s=%s",t,(n=e[t],Object.prototype.toString.call(n)==="[object Object]"||Object.prototype.toString.call(n)==="[object Array]"?JSON.stringify(e[t]):e[t]));var n}).join("&")}function Zo(e){return e.map(function(t){return zc(t)})}function zc(e){var t=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return ne(ne({},e),{},{request:ne(ne({},e.request),{},{headers:ne(ne({},e.request.headers),t)})})}var xd=function(e){var t=e.appId,n=function(a,o,c){var l={"x-algolia-api-key":c,"x-algolia-application-id":o};return{headers:function(){return a===ss.WithinHeaders?l:{}},queryParameters:function(){return a===ss.WithinQueryParameters?l:{}}}}(e.authMode!==void 0?e.authMode:ss.WithinHeaders,t,e.apiKey),s=function(a){var o=a.hostsCache,c=a.logger,l=a.requester,u=a.requestsCache,i=a.responsesCache,p=a.timeouts,f=a.userAgent,g=a.hosts,b=a.queryParameters,y={hostsCache:o,logger:c,requester:l,requestsCache:u,responsesCache:i,timeouts:p,userAgent:f,headers:a.headers,queryParameters:b,hosts:g.map(function(w){return $c(w)}),read:function(w,S){var O=Jo(S,y.timeouts.read),C=function(){return Go(y,y.hosts.filter(function(A){return(A.accept&Ft.Read)!=0}),w,O)};if((O.cacheable!==void 0?O.cacheable:w.cacheable)!==!0)return C();var E={request:w,mappedRequestOptions:O,transporter:{queryParameters:y.queryParameters,headers:y.headers}};return y.responsesCache.get(E,function(){return y.requestsCache.get(E,function(){return y.requestsCache.set(E,C()).then(function(A){return Promise.all([y.requestsCache.delete(E),A])},function(A){return Promise.all([y.requestsCache.delete(E),Promise.reject(A)])}).then(function(A){var F=us(A,2);return F[0],F[1]})})},{miss:function(A){return y.responsesCache.set(E,A)}})},write:function(w,S){return Go(y,y.hosts.filter(function(O){return(O.accept&Ft.Write)!=0}),w,Jo(S,y.timeouts.write))}};return y}(ne(ne({hosts:[{url:"".concat(t,"-dsn.algolia.net"),accept:Ft.Read},{url:"".concat(t,".algolia.net"),accept:Ft.Write}].concat(vd([{url:"".concat(t,"-1.algolianet.com")},{url:"".concat(t,"-2.algolianet.com")},{url:"".concat(t,"-3.algolianet.com")}]))},e),{},{headers:ne(ne(ne({},n.headers()),{"content-type":"application/x-www-form-urlencoded"}),e.headers),queryParameters:ne(ne({},n.queryParameters()),e.queryParameters)})),r={transporter:s,appId:t,addAlgoliaAgent:function(a,o){s.userAgent.add({segment:a,version:o})},clearCache:function(){return Promise.all([s.requestsCache.clear(),s.responsesCache.clear()]).then(function(){})}};return Lc(r,e.methods)},Kc=function(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s={transporter:e.transporter,appId:e.appId,indexName:t};return Lc(s,n.methods)}},Yo=function(e){return function(t,n){var s=t.map(function(r){return ne(ne({},r),{},{params:Bc(r.params||{})})});return e.transporter.read({method:Ds,path:"1/indexes/*/queries",data:{requests:s},cacheable:!0},n)}},Xo=function(e){return function(t,n){return Promise.all(t.map(function(s){var r=s.params,a=r.facetName,o=r.facetQuery,c=kf(r,md);return Kc(e)(s.indexName,{methods:{searchForFacetValues:Vc}}).searchForFacetValues(a,o,ne(ne({},n),c))}))}},wd=function(e){return function(t,n,s){return e.transporter.read({method:Ds,path:Ts("1/answers/%s/prediction",e.indexName),data:{query:t,queryLanguages:n},cacheable:!0},s)}},Od=function(e){return function(t,n){return e.transporter.read({method:Ds,path:Ts("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},n)}},Vc=function(e){return function(t,n,s){return e.transporter.read({method:Ds,path:Ts("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:n},cacheable:!0},s)}},Ed=1,Sd=2,Id=3;function Wc(e,t,n){var s,r={appId:e,apiKey:t,timeouts:{connect:1,read:2,write:30},requester:{send:function(a){return new Promise(function(o){var c=new XMLHttpRequest;c.open(a.method,a.url,!0),Object.keys(a.headers).forEach(function(p){return c.setRequestHeader(p,a.headers[p])});var l,u=function(p,f){return setTimeout(function(){c.abort(),o({status:0,content:f,isTimedOut:!0})},1e3*p)},i=u(a.connectTimeout,"Connection timeout");c.onreadystatechange=function(){c.readyState>c.OPENED&&l===void 0&&(clearTimeout(i),l=u(a.responseTimeout,"Socket timeout"))},c.onerror=function(){c.status===0&&(clearTimeout(i),clearTimeout(l),o({content:c.responseText||"Network request failed",status:c.status,isTimedOut:!1}))},c.onload=function(){clearTimeout(i),clearTimeout(l),o({content:c.responseText,status:c.status,isTimedOut:!1})},c.send(a.data)})}},logger:(s=Id,{debug:function(a,o){return Ed>=s&&console.debug(a,o),Promise.resolve()},info:function(a,o){return Sd>=s&&console.info(a,o),Promise.resolve()},error:function(a,o){return console.error(a,o),Promise.resolve()}}),responsesCache:Ys(),requestsCache:Ys({serializable:!1}),hostsCache:pn({caches:[gd({key:"".concat("4.8.5","-").concat(e)}),Ys()]}),userAgent:bd("4.8.5").add({segment:"Browser",version:"lite"}),authMode:ss.WithinQueryParameters};return xd(ne(ne(ne({},r),n),{},{methods:{search:Yo,searchForFacetValues:Xo,multipleQueries:Yo,multipleSearchForFacetValues:Xo,initIndex:function(a){return function(o){return Kc(a)(o,{methods:{search:Od,searchForFacetValues:Vc,findAnswers:wd}})}}}}))}Wc.version="4.8.5";var Pd=["footer","searchBox"];function yn(){return yn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},yn.apply(this,arguments)}function el(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function Xs(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?el(Object(n),!0).forEach(function(s){kd(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):el(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function kd(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Cd(e,t){return function(n){if(Array.isArray(n))return n}(e)||function(n,s){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var a,o,c=[],l=!0,u=!1;try{for(r=r.call(n);!(l=(a=r.next()).done)&&(c.push(a.value),!s||c.length!==s);l=!0);}catch(i){u=!0,o=i}finally{try{l||r.return==null||r.return()}finally{if(u)throw o}}return c}}(e,t)||function(n,s){if(!!n){if(typeof n=="string")return tl(n,s);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return tl(n,s)}}(e,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function tl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function Ad(e,t){if(e==null)return{};var n,s,r=function(o,c){if(o==null)return{};var l,u,i={},p=Object.keys(o);for(u=0;u<p.length;u++)l=p[u],c.indexOf(l)>=0||(i[l]=o[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Rd(e){var t=e.appId,n=e.apiKey,s=e.indexName,r=e.placeholder,a=r===void 0?"Search docs":r,o=e.searchParameters,c=e.maxResultsPerGroup,l=e.onClose,u=l===void 0?ed:l,i=e.transformItems,p=i===void 0?Vo:i,f=e.hitComponent,g=f===void 0?Dh:f,b=e.resultsFooterComponent,y=b===void 0?function(){return null}:b,w=e.navigator,S=e.initialScrollY,O=S===void 0?0:S,C=e.transformSearchClient,E=C===void 0?Vo:C,A=e.disableUserPersonalization,F=A!==void 0&&A,Y=e.initialQuery,ie=Y===void 0?"":Y,le=e.translations,Q=le===void 0?{}:le,ce=e.getMissingResultsUrl,de=Q.footer,he=Q.searchBox,me=Ad(Q,Pd),Ue=Cd(m.useState({query:"",collections:[],completion:null,context:{},isOpen:!1,activeItemId:null,status:"idle"}),2),ae=Ue[0],te=Ue[1],W=m.useRef(null),Te=m.useRef(null),He=m.useRef(null),Ie=m.useRef(null),ge=m.useRef(null),Pe=m.useRef(10),rt=m.useRef(typeof window!="undefined"?window.getSelection().toString().slice(0,64):"").current,Ne=m.useRef(ie||rt).current,_e=function(v,_,j){return m.useMemo(function(){var I=Wc(v,_);return I.addAlgoliaAgent("docsearch","3.4.0"),/docsearch.js \(.*\)/.test(I.transporter.userAgent.value)===!1&&I.addAlgoliaAgent("docsearch-react","3.4.0"),j(I)},[v,_,j])}(t,n,E),x=m.useRef(Wo({key:"__DOCSEARCH_FAVORITE_SEARCHES__".concat(s),limit:10})).current,D=m.useRef(Wo({key:"__DOCSEARCH_RECENT_SEARCHES__".concat(s),limit:x.getAll().length===0?7:4})).current,q=m.useCallback(function(v){if(!F){var _=v.type==="content"?v.__docsearch_parent:v;_&&x.getAll().findIndex(function(j){return j.objectID===_.objectID})===-1&&D.add(_)}},[x,D,F]),M=m.useMemo(function(){return Rh({id:"docsearch",defaultActiveItemId:0,placeholder:a,openOnFocus:!0,initialState:{query:Ne,context:{searchSuggestions:[]}},navigator:w,onStateChange:function(v){te(v.state)},getSources:function(v){var _=v.query,j=v.state,I=v.setContext,T=v.setStatus;return _?_e.search([{query:_,indexName:s,params:Xs({attributesToRetrieve:["hierarchy.lvl0","hierarchy.lvl1","hierarchy.lvl2","hierarchy.lvl3","hierarchy.lvl4","hierarchy.lvl5","hierarchy.lvl6","content","type","url"],attributesToSnippet:["hierarchy.lvl1:".concat(Pe.current),"hierarchy.lvl2:".concat(Pe.current),"hierarchy.lvl3:".concat(Pe.current),"hierarchy.lvl4:".concat(Pe.current),"hierarchy.lvl5:".concat(Pe.current),"hierarchy.lvl6:".concat(Pe.current),"content:".concat(Pe.current)],snippetEllipsisText:"\u2026",highlightPreTag:"<mark>",highlightPostTag:"</mark>",hitsPerPage:20},o)}]).catch(function(P){throw P.name==="RetryError"&&T("error"),P}).then(function(P){var R=P.results[0],k=R.hits,U=R.nbHits,N=Ko(k,function(L){return Mc(L)},c);return j.context.searchSuggestions.length<Object.keys(N).length&&I({searchSuggestions:Object.keys(N)}),I({nbHits:U}),Object.values(N).map(function(L,$){return{sourceId:"hits".concat($),onSelect:function(B){var ee=B.item,G=B.event;q(ee),Qn(G)||u()},getItemUrl:function(B){return B.item.url},getItems:function(){return Object.values(Ko(L,function(B){return B.hierarchy.lvl1},c)).map(p).map(function(B){return B.map(function(ee){return Xs(Xs({},ee),{},{__docsearch_parent:ee.type!=="lvl1"&&B.find(function(G){return G.type==="lvl1"&&G.hierarchy.lvl1===ee.hierarchy.lvl1})})})}).flat()}}})}):F?[]:[{sourceId:"recentSearches",onSelect:function(P){var R=P.item,k=P.event;q(R),Qn(k)||u()},getItemUrl:function(P){return P.item.url},getItems:function(){return D.getAll()}},{sourceId:"favoriteSearches",onSelect:function(P){var R=P.item,k=P.event;q(R),Qn(k)||u()},getItemUrl:function(P){return P.item.url},getItems:function(){return x.getAll()}}]}})},[s,o,c,_e,u,D,x,q,Ne,a,w,p,F]),X=M.getEnvironmentProps,h=M.getRootProps,d=M.refresh;return function(v){var _=v.getEnvironmentProps,j=v.panelElement,I=v.formElement,T=v.inputElement;m.useEffect(function(){if(j&&I&&T){var P=_({panelElement:j,formElement:I,inputElement:T}),R=P.onTouchStart,k=P.onTouchMove;return window.addEventListener("touchstart",R),window.addEventListener("touchmove",k),function(){window.removeEventListener("touchstart",R),window.removeEventListener("touchmove",k)}}},[_,j,I,T])}({getEnvironmentProps:X,panelElement:Ie.current,formElement:He.current,inputElement:ge.current}),function(v){var _=v.container;m.useEffect(function(){if(_){var j=_.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"),I=j[0],T=j[j.length-1];return _.addEventListener("keydown",P),function(){_.removeEventListener("keydown",P)}}function P(R){R.key==="Tab"&&(R.shiftKey?document.activeElement===I&&(R.preventDefault(),T.focus()):document.activeElement===T&&(R.preventDefault(),I.focus()))}},[_])}({container:W.current}),m.useEffect(function(){return document.body.classList.add("DocSearch--active"),function(){var v,_;document.body.classList.remove("DocSearch--active"),(v=(_=window).scrollTo)===null||v===void 0||v.call(_,0,O)}},[]),m.useEffect(function(){window.matchMedia("(max-width: 768px)").matches&&(Pe.current=5)},[]),m.useEffect(function(){Ie.current&&(Ie.current.scrollTop=0)},[ae.query]),m.useEffect(function(){Ne.length>0&&(d(),ge.current&&ge.current.focus())},[Ne,d]),m.useEffect(function(){function v(){if(Te.current){var _=.01*window.innerHeight;Te.current.style.setProperty("--docsearch-vh","".concat(_,"px"))}}return v(),window.addEventListener("resize",v),function(){window.removeEventListener("resize",v)}},[]),m.createElement("div",yn({ref:W},h({"aria-expanded":!0}),{className:["DocSearch","DocSearch-Container",ae.status==="stalled"&&"DocSearch-Container--Stalled",ae.status==="error"&&"DocSearch-Container--Errored"].filter(Boolean).join(" "),role:"button",tabIndex:0,onMouseDown:function(v){v.target===v.currentTarget&&u()}}),m.createElement("div",{className:"DocSearch-Modal",ref:Te},m.createElement("header",{className:"DocSearch-SearchBar",ref:He},m.createElement(pd,yn({},M,{state:ae,autoFocus:Ne.length===0,inputRef:ge,isFromSelection:Boolean(Ne)&&Ne===rt,translations:he,onClose:u}))),m.createElement("div",{className:"DocSearch-Dropdown",ref:Ie},m.createElement(cd,yn({},M,{indexName:s,state:ae,hitComponent:g,resultsFooterComponent:y,disableUserPersonalization:F,recentSearches:D,favoriteSearches:x,inputRef:ge,translations:me,getMissingResultsUrl:ce,onItemClick:function(v,_){q(v),Qn(_)||u()}}))),m.createElement("footer",{className:"DocSearch-Footer"},m.createElement(Th,{translations:de}))))}function kr(){return kr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},kr.apply(this,arguments)}function nl(e,t){return function(n){if(Array.isArray(n))return n}(e)||function(n,s){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var a,o,c=[],l=!0,u=!1;try{for(r=r.call(n);!(l=(a=r.next()).done)&&(c.push(a.value),!s||c.length!==s);l=!0);}catch(i){u=!0,o=i}finally{try{l||r.return==null||r.return()}finally{if(u)throw o}}return c}}(e,t)||function(n,s){if(!!n){if(typeof n=="string")return sl(n,s);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return sl(n,s)}}(e,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function sl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function qd(e){var t,n,s=m.useRef(null),r=nl(m.useState(!1),2),a=r[0],o=r[1],c=nl(m.useState((e==null?void 0:e.initialQuery)||void 0),2),l=c[0],u=c[1],i=m.useCallback(function(){o(!0)},[o]),p=m.useCallback(function(){o(!1)},[o]);return function(f){var g=f.isOpen,b=f.onOpen,y=f.onClose,w=f.onInput,S=f.searchButtonRef;m.useEffect(function(){function O(C){var E;(C.keyCode===27&&g||((E=C.key)===null||E===void 0?void 0:E.toLowerCase())==="k"&&(C.metaKey||C.ctrlKey)||!function(A){var F=A.target,Y=F.tagName;return F.isContentEditable||Y==="INPUT"||Y==="SELECT"||Y==="TEXTAREA"}(C)&&C.key==="/"&&!g)&&(C.preventDefault(),g?y():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||b()),S&&S.current===document.activeElement&&w&&/[a-zA-Z0-9]/.test(String.fromCharCode(C.keyCode))&&w(C)}return window.addEventListener("keydown",O),function(){window.removeEventListener("keydown",O)}},[g,b,y,w,S])}({isOpen:a,onOpen:i,onClose:p,onInput:m.useCallback(function(f){o(!0),u(f.key)},[o,u]),searchButtonRef:s}),m.createElement(m.Fragment,null,m.createElement(Gf,{ref:s,translations:e==null||(t=e.translations)===null||t===void 0?void 0:t.button,onClick:i}),a&&Pc(m.createElement(Rd,kr({},e,{initialScrollY:window.scrollY,initialQuery:l,translations:e==null||(n=e.translations)===null||n===void 0?void 0:n.modal,onClose:p})),document.body))}function Td(e){Cc(m.createElement(qd,gr({},e,{transformSearchClient:function(t){return t.addAlgoliaAgent("docsearch.js","3.4.0"),e.transformSearchClient?e.transformSearchClient(t):t}})),function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:window;return typeof t=="string"?n.document.querySelector(t):t}(e.container,e.environment))}const Dd={id:"docsearch"},Nd={__name:"search",setup(e){return At(()=>{Td({container:"#docsearch",appId:"NZ6NE3PZQJ",indexName:"poseidon_data",apiKey:"89ae2420035114468a5e96a0e1154423"})}),(t,n)=>(oe(),fe("div",Dd))}};const Md=e=>(Ss("data-v-32b230f5"),e=e(),Is(),e),Ld={class:"index-container"},Ud={class:"header-container"},Hd=Md(()=>V("h1",{class:"logo"},[V("a",{href:"/"},"\u65E7\u68A6")],-1)),Fd={class:"nav"},$d=["onClick"],Bd=["href"],zd={class:"main-container"},Kd={class:"main"},Vd={__name:"page-layout",setup(e){const t=qs(),n=Le(""),s=[{name:"\u5206\u7C7B",link:"/article-category"},{name:"\u5F52\u6863",link:"/article-archive"},{name:"\u53CB\u94FE",link:"/friend-links"},{name:"\u5173\u4E8E",link:"/about"}];return At(()=>{n.value=t.path}),(r,a)=>{const o=Hl("router-view");return oe(),fe("div",Ld,[V("div",Ud,[V("header",null,[Hd,V("ul",Fd,[be(Nd),(oe(),fe(ye,null,kt(s,c=>V("li",{class:Rn(["nav-item",{active:n.value===c.link}]),key:c.link,onClick:l=>n.value=c.link},[V("a",{href:c.link},Re(c.name),9,Bd)],10,$d)),64))])])]),V("div",zd,[V("div",Kd,[be(o)])])])}}};var Wd=pt(Vd,[["__scopeId","data-v-32b230f5"]]),Ns=[{name:"git-base",title:"Git\u57FA\u672C\u64CD\u4F5C",date:"Aug 11, 2021",category:["Git"],content:`<h3>\u521B\u5EFA\u4ED3\u5E93</h3>
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
<p><img src='markdown/images/upload-01.png' alt=''></p>
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
<p><img src='markdown/images/upload-02.png' alt=''>
<img src='markdown/images/upload-03.png' alt=''></p>
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
<p><img src='markdown/images/upload-04.png' alt=''></p>
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

`},{name:"vue_1",title:"Vue\u9879\u76EE\u5982\u4F55\u914D\u7F6E\u56FD\u9645\u5316",date:"Aug 15, 2021",category:["Vue"],content:`<p>::: warning
\u672C\u6587\u4F7F\u7528\u7684\u662F vue@3 + vue-i18n@9 \u7684\u5199\u6CD5
:::</p>
<h2>\u5B89\u88C5vue-i18n</h2>
<pre><code class='language-javascript'>npm install vue-i18n@<span class='hljs-number'>9</span> --save
</code></pre>
<h2>\u65B0\u5EFAi18n\u6587\u4EF6</h2>
<ol>
<li>
<p>\u6587\u4EF6\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A
<img src='/vue_1-1.png' alt='\u76EE\u5F55\u7ED3\u6784\u56FE'></p>
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
<p><img src='/vue_1-2.png' alt='\u6548\u679C\u56FE1'>
<img src='/vue_1-3.png' alt='\u6548\u679C\u56FE2'></p>
`,abstract:`::: warning
\u672C\u6587\u4F7F\u7528\u7684\u662F vue@3 + vue-i18n@9 \u7684\u5199\u6CD5
:::
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


`},{name:"vue_2",title:"Vue\u9879\u76EE\u4E2D\u4F7F\u7528vuex\u5B9E\u73B0\uFF08\u72B6\u6001\uFF09\u6570\u636E\u5171\u4EAB",date:"Aug 07, 2021",category:["Vue"],content:`<p>::: warning
\u672C\u6587\u4F7F\u7528\u7684\u662F vue3.0 + vuex4.0 \u7684\u5199\u6CD5\u3002
:::</p>
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
`,abstract:`::: warning
\u672C\u6587\u4F7F\u7528\u7684\u662F vue3.0 + vuex4.0 \u7684\u5199\u6CD5\u3002
:::
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

`}];const Jd={class:"pagination-container"},Qd={class:"page-index"},Gd={__name:"pagination",props:{pageIndex:Number,pageSize:Number,length:Number},emits:["pageChange"],setup(e,{emit:t}){const n=e;function s(){const a=n.pageIndex-1;t("pageChange",{pageIndex:a})}function r(){const a=n.pageIndex+1;t("pageChange",{pageIndex:a})}return(a,o)=>(oe(),fe("div",Jd,[V("a",{style:jn({visibility:e.pageIndex>1?"visible":"hidden"}),class:"arrow",onClick:o[0]||(o[0]=c=>s())}," \u2190 \u4E0A\u4E00\u9875 ",4),V("span",Qd,Re(e.pageIndex),1),V("a",{style:jn({visibility:e.pageIndex*e.pageSize<e.length?"visible":"hidden"}),class:"arrow",onClick:o[1]||(o[1]=c=>r())}," \u4E0B\u4E00\u9875 \u2192 ",4)]))}};const Zd={class:"footer-container"},Yd={__name:"footer",setup(e){const t=new Date().getFullYear();return(n,s)=>(oe(),fe("div",Zd," \xA9 2021-"+Re(tt(t))+" | \u65E7\u68A6 ",1))}};var Jc=pt(Yd,[["__scopeId","data-v-ea868832"]]);const Xd=e=>(Ss("data-v-12816bbe"),e=e(),Is(),e),em={class:"home-container"},tm={class:"article-time"},nm={class:"article-title"},sm=["href"],rm=Xd(()=>V("div",{class:"article-line"},null,-1)),am=["innerHTML"],om={__name:"article-list",setup(e){const t=Ns.sort((l,u)=>new Date(u.date).getTime()-new Date(l.date).getTime()),n=Le(t),s=qs(),r=Le(1),a=Le(5);fn(()=>s.params.page,l=>{r.value=+l||1,c()},{immediate:!0});function o(l){const{pageIndex:u}=l;location.href=`/article-list/${u}`}function c(){const l=r.value,u=a.value,i=(l-1)*u,p=i+u;n.value=t.slice(i,p)}return(l,u)=>(oe(),fe("div",em,[(oe(!0),fe(ye,null,kt(n.value,i=>(oe(),fe("div",{class:"article-item",key:i.name},[V("time",tm,Re(i.date),1),V("h2",nm,[V("a",{href:"/article-detail/"+i.name},Re(i.title),9,sm)]),rm,V("div",{class:"abstract",innerHTML:i.abstract},null,8,am)]))),128)),be(Gd,{"page-index":r.value,"onUpdate:pageIndex":u[0]||(u[0]=i=>r.value=i),"page-size":a.value,length:tt(t).length,onPageChange:o},null,8,["page-index","page-size","length"]),be(Jc)]))}};var lm=pt(om,[["__scopeId","data-v-12816bbe"]]);const cm="modulepreload",rl={},im="/",um=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${im}${s}`,s in rl)return;rl[s]=!0;const r=s.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":cm,r||(o.as="script",o.crossOrigin=""),o.href=s,document.head.appendChild(o),r)return new Promise((c,l)=>{o.addEventListener("load",c),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},pm=["id","host","repo","repoid","category","categoryid","mapping","term","strict","reactionsenabled","emitmetadata","inputposition","theme","lang","loading"],fm=zr({__name:"Giscus",props:{id:null,host:null,repo:null,repoId:null,category:null,categoryId:null,mapping:null,term:null,theme:null,strict:null,reactionsEnabled:null,emitMetadata:null,inputPosition:null,lang:null,loading:null},setup(e){const t=Le(!1);return At(()=>{t.value=!0,um(()=>import("./giscus-a53917f0.a14eedf1.js"),[])}),(n,s)=>t.value?(oe(),fe("giscus-widget",{key:0,id:e.id,host:e.host,repo:e.repo,repoid:e.repoId,category:e.category,categoryid:e.categoryId,mapping:e.mapping,term:e.term,strict:e.strict,reactionsenabled:e.reactionsEnabled,emitmetadata:e.emitMetadata,inputposition:e.inputPosition,theme:e.theme,lang:e.lang,loading:e.loading},null,8,pm)):Uu("",!0)}}),hm={__name:"comment",setup(e){return(t,n)=>(oe(),Wr(tt(fm),{id:"comments",repo:"hai-zou/poseidon",repoId:"R_kgDOIPqaJQ",category:"General",categoryId:"DIC_kwDOIPqaJc4CW4xW",mapping:"pathname",term:"Welcome to component!",inputPosition:"top",theme:"light",lang:"zh-CN",loading:"lazy"}))}};const dm={class:"article-content"},mm={class:"detail-title"},gm={class:"post-info"},vm={class:"detail-container"},_m=["innerHTML"],ym={__name:"article-detail",setup(e){const t=Le({}),n=qs();At(()=>{const{name:r}=n.params;t.value=s(r)});function s(r){return Ns.find(a=>a.name===r)||{}}return(r,a)=>(oe(),fe(ye,null,[V("div",dm,[V("h1",mm,Re(t.value.title),1),V("div",gm,[V("time",null,Re(t.value.date),1)]),V("div",vm,[V("div",{innerHTML:t.value.content},null,8,_m)]),be(hm)]),be(Jc)],64))}};var bm=pt(ym,[["__scopeId","data-v-0c0a4bec"]]);const jm=e=>(Ss("data-v-4fd2c506"),e=e(),Is(),e),xm={class:"category-list"},wm=["onClick"],Om={class:"category-item"},Em=["href"],Sm=jm(()=>V("span",null," \u2014 ",-1)),Im={__name:"article-category",setup(e){const t=qs(),n=If(),s=Le([]),r=Le({}),a=Le([]),o=Le("");At(()=>{const{category:u}=t.query;c(),u&&(o.value=u,l(u))});function c(){const u=[],i={};for(const p of Ns){const f=p.category||[];u.push(...f);for(const g of f)i[g]||(i[g]=[]),i[g].push(p)}s.value=new Set([...u]),r.value=i}function l(u){o.value=u,a.value=r.value[u],n.push(`/article-category?category=${u}`)}return(u,i)=>(oe(),fe(ye,null,[V("ul",xm,[(oe(!0),fe(ye,null,kt(s.value,p=>(oe(),fe("li",{key:p,class:Rn({active:o.value===p}),onClick:f=>l(p)},Re(p),11,wm))),128))]),V("ul",Om,[(oe(!0),fe(ye,null,kt(a.value,p=>(oe(),fe("li",{key:p},[V("a",{href:"/article-detail/"+p.name},[V("span",null,Re(p.title),1),Sm,V("span",null,Re(p.date),1)],8,Em)]))),128))])],64))}};var Pm=pt(Im,[["__scopeId","data-v-4fd2c506"]]);const km={class:"article-wrap"},Cm=["href"],Am={__name:"article-archive",setup(e){const t=Le([]);At(()=>{n()});function n(){const s=Ns.sort((a,o)=>new Date(o.date).getTime()-new Date(a.date).getTime()),r={};for(const a of s){const o=new Date(a.date).getFullYear();r[o]||(r[o]=[]),r[o].push(a)}t.value=Object.entries(r).map(a=>{const[o,c]=a;return{year:o,children:c}}).reverse()}return(s,r)=>(oe(!0),fe(ye,null,kt(t.value,a=>(oe(),fe("div",{class:"archive-container",key:a},[V("h3",null,Re(a.year),1),V("ul",km,[(oe(!0),fe(ye,null,kt(a.children,o=>(oe(),fe("li",{class:"article-item",key:o},[V("a",{href:"/article-detail/"+o.name},Re(o.title),9,Cm)]))),128))])]))),128))}};var Rm=pt(Am,[["__scopeId","data-v-edf8f1ec"]]),qm=[{name:"\u5DE6\u773C\u4F1A\u966A\u53F3\u773C\u54ED\u306E\u535A\u5BA2",desc:"\u53E6\u4E00\u4E2A\u4E16\u754C",link:"https://qkongtao.cn/"},{name:"\u5B89\u77E5\u9C7C",desc:"\u751F\u6D3B\u660E\u6717\uFF0C\u4E07\u7269\u53EF\u7231",link:"https://anzhiy.cn/"}];const Tm=e=>(Ss("data-v-2bd1ad42"),e=e(),Is(),e),Dm=Tm(()=>V("div",{class:"friend-header"},[V("a",{href:"https://github.com/hai-zou/Poseidon/edit/main/src/data/links.js",target:"_blank"},"\u5982\u4F55\u6DFB\u52A0\u53CB\u94FE")],-1)),Nm={class:"link-container"},Mm=["href"],Lm={class:"desc"},Um={__name:"friend-links",setup(e){return(t,n)=>(oe(),fe(ye,null,[Dm,V("ul",Nm,[(oe(!0),fe(ye,null,kt(tt(qm),s=>(oe(),fe("li",{class:"link-item",key:s},[V("a",{class:"name",href:s.link,target:"_blank"},Re(s.name),9,Mm),V("span",Lm,Re(s.desc),1)]))),128))])],64))}};var Hm=pt(Um,[["__scopeId","data-v-2bd1ad42"]]);const Fm={};function $m(e,t){return oe(),fe("div",null,"404")}var Bm=pt(Fm,[["render",$m]]);const zm=[{path:"/",component:Wd,redirect:"/article-list/1/",children:[{path:"/article-list/:page",component:lm},{path:"/article-detail/:name",component:bm},{path:"/article-category",component:Pm},{path:"/article-archive",component:Rm},{path:"/friend-links",component:Hm},{path:"/:catchAll(.*)",component:Bm}]}],Km=Ef({history:Hp(),routes:zm});const Qc=_p(xp);Qc.use(Km);Qc.mount("#app");
