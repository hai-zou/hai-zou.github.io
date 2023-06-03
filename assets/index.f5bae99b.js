const Ml=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function e(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}};Ml();function oe(n,s){const t=Object.create(null),e=n.split(",");for(let a=0;a<e.length;a++)t[e[a]]=!0;return s?a=>!!t[a.toLowerCase()]:a=>!!t[a]}const Z={},bs=[],qn=()=>{},Ll=()=>!1,Nl=/^on[^a-z]/,yt=n=>Nl.test(n),re=n=>n.startsWith("onUpdate:"),on=Object.assign,ce=(n,s)=>{const t=n.indexOf(s);t>-1&&n.splice(t,1)},Ul=Object.prototype.hasOwnProperty,B=(n,s)=>Ul.call(n,s),L=Array.isArray,vs=n=>bt(n)==="[object Map]",Ca=n=>bt(n)==="[object Set]",F=n=>typeof n=="function",an=n=>typeof n=="string",ie=n=>typeof n=="symbol",nn=n=>n!==null&&typeof n=="object",Aa=n=>nn(n)&&F(n.then)&&F(n.catch),Ra=Object.prototype.toString,bt=n=>Ra.call(n),Fl=n=>bt(n).slice(8,-1),Pa=n=>bt(n)==="[object Object]",pe=n=>an(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,pt=oe(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vt=n=>{const s=Object.create(null);return t=>s[t]||(s[t]=n(t))},zl=/-(\w)/g,zn=vt(n=>n.replace(zl,(s,t)=>t?t.toUpperCase():"")),Bl=/\B([A-Z])/g,Ps=vt(n=>n.replace(Bl,"-$1").toLowerCase()),wt=vt(n=>n.charAt(0).toUpperCase()+n.slice(1)),Tt=vt(n=>n?`on${wt(n)}`:""),Vs=(n,s)=>!Object.is(n,s),Ot=(n,s)=>{for(let t=0;t<n.length;t++)n[t](s)},dt=(n,s,t)=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,value:t})},Hl=n=>{const s=parseFloat(n);return isNaN(s)?n:s};let $e;const Ht=()=>$e||($e=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function Gs(n){if(L(n)){const s={};for(let t=0;t<n.length;t++){const e=n[t],a=an(e)?Vl(e):Gs(e);if(a)for(const l in a)s[l]=a[l]}return s}else{if(an(n))return n;if(nn(n))return n}}const Dl=/;(?![^(]*\))/g,Kl=/:([^]+)/,Wl=/\/\*[^]*?\*\//g;function Vl(n){const s={};return n.replace(Wl,"").split(Dl).forEach(t=>{if(t){const e=t.split(Kl);e.length>1&&(s[e[0].trim()]=e[1].trim())}}),s}function Es(n){let s="";if(an(n))s=n;else if(L(n))for(let t=0;t<n.length;t++){const e=Es(n[t]);e&&(s+=e+" ")}else if(nn(n))for(const t in n)n[t]&&(s+=t+" ");return s.trim()}const Gl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jl=oe(Gl);function Sa(n){return!!n||n===""}const gn=n=>an(n)?n:n==null?"":L(n)||nn(n)&&(n.toString===Ra||!F(n.toString))?JSON.stringify(n,Ta,2):String(n),Ta=(n,s)=>s&&s.__v_isRef?Ta(n,s.value):vs(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((t,[e,a])=>(t[`${e} =>`]=a,t),{})}:Ca(s)?{[`Set(${s.size})`]:[...s.values()]}:nn(s)&&!L(s)&&!Pa(s)?String(s):s;let wn;class Ql{constructor(s=!1){this.detached=s,this._active=!0,this.effects=[],this.cleanups=[],this.parent=wn,!s&&wn&&(this.index=(wn.scopes||(wn.scopes=[])).push(this)-1)}get active(){return this._active}run(s){if(this._active){const t=wn;try{return wn=this,s()}finally{wn=t}}}on(){wn=this}off(){wn=this.parent}stop(s){if(this._active){let t,e;for(t=0,e=this.effects.length;t<e;t++)this.effects[t].stop();for(t=0,e=this.cleanups.length;t<e;t++)this.cleanups[t]();if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!s){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Yl(n,s=wn){s&&s.active&&s.effects.push(n)}function Xl(){return wn}const ue=n=>{const s=new Set(n);return s.w=0,s.n=0,s},Oa=n=>(n.w&ts)>0,$a=n=>(n.n&ts)>0,Zl=({deps:n})=>{if(n.length)for(let s=0;s<n.length;s++)n[s].w|=ts},no=n=>{const{deps:s}=n;if(s.length){let t=0;for(let e=0;e<s.length;e++){const a=s[e];Oa(a)&&!$a(a)?a.delete(n):s[t++]=a,a.w&=~ts,a.n&=~ts}s.length=t}},Dt=new WeakMap;let Fs=0,ts=1;const Kt=30;let kn;const is=Symbol(""),Wt=Symbol("");class he{constructor(s,t=null,e){this.fn=s,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Yl(this,e)}run(){if(!this.active)return this.fn();let s=kn,t=ns;for(;s;){if(s===this)return;s=s.parent}try{return this.parent=kn,kn=this,ns=!0,ts=1<<++Fs,Fs<=Kt?Zl(this):Me(this),this.fn()}finally{Fs<=Kt&&no(this),ts=1<<--Fs,kn=this.parent,ns=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){kn===this?this.deferStop=!0:this.active&&(Me(this),this.onStop&&this.onStop(),this.active=!1)}}function Me(n){const{deps:s}=n;if(s.length){for(let t=0;t<s.length;t++)s[t].delete(n);s.length=0}}let ns=!0;const Ma=[];function Ss(){Ma.push(ns),ns=!1}function Ts(){const n=Ma.pop();ns=n===void 0?!0:n}function xn(n,s,t){if(ns&&kn){let e=Dt.get(n);e||Dt.set(n,e=new Map);let a=e.get(t);a||e.set(t,a=ue()),La(a)}}function La(n,s){let t=!1;Fs<=Kt?$a(n)||(n.n|=ts,t=!Oa(n)):t=!n.has(kn),t&&(n.add(kn),kn.deps.push(n))}function Wn(n,s,t,e,a,l){const o=Dt.get(n);if(!o)return;let c=[];if(s==="clear")c=[...o.values()];else if(t==="length"&&L(n)){const r=Number(e);o.forEach((u,p)=>{(p==="length"||p>=r)&&c.push(u)})}else switch(t!==void 0&&c.push(o.get(t)),s){case"add":L(n)?pe(t)&&c.push(o.get("length")):(c.push(o.get(is)),vs(n)&&c.push(o.get(Wt)));break;case"delete":L(n)||(c.push(o.get(is)),vs(n)&&c.push(o.get(Wt)));break;case"set":vs(n)&&c.push(o.get(is));break}if(c.length===1)c[0]&&Vt(c[0]);else{const r=[];for(const u of c)u&&r.push(...u);Vt(ue(r))}}function Vt(n,s){const t=L(n)?n:[...n];for(const e of t)e.computed&&Le(e);for(const e of t)e.computed||Le(e)}function Le(n,s){(n!==kn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const so=oe("__proto__,__v_isRef,__isVue"),Na=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ie)),to=fe(),eo=fe(!1,!0),ao=fe(!0),Ne=lo();function lo(){const n={};return["includes","indexOf","lastIndexOf"].forEach(s=>{n[s]=function(...t){const e=D(this);for(let l=0,o=this.length;l<o;l++)xn(e,"get",l+"");const a=e[s](...t);return a===-1||a===!1?e[s](...t.map(D)):a}}),["push","pop","shift","unshift","splice"].forEach(s=>{n[s]=function(...t){Ss();const e=D(this)[s].apply(this,t);return Ts(),e}}),n}function oo(n){const s=D(this);return xn(s,"has",n),s.hasOwnProperty(n)}function fe(n=!1,s=!1){return function(e,a,l){if(a==="__v_isReactive")return!n;if(a==="__v_isReadonly")return n;if(a==="__v_isShallow")return s;if(a==="__v_raw"&&l===(n?s?wo:Ha:s?Ba:za).get(e))return e;const o=L(e);if(!n){if(o&&B(Ne,a))return Reflect.get(Ne,a,l);if(a==="hasOwnProperty")return oo}const c=Reflect.get(e,a,l);return(ie(a)?Na.has(a):so(a))||(n||xn(e,"get",a),s)?c:hn(c)?o&&pe(a)?c:c.value:nn(c)?n?Da(c):st(c):c}}const ro=Ua(),co=Ua(!0);function Ua(n=!1){return function(t,e,a,l){let o=t[e];if(Is(o)&&hn(o)&&!hn(a))return!1;if(!n&&(!gt(a)&&!Is(a)&&(o=D(o),a=D(a)),!L(t)&&hn(o)&&!hn(a)))return o.value=a,!0;const c=L(t)&&pe(e)?Number(e)<t.length:B(t,e),r=Reflect.set(t,e,a,l);return t===D(l)&&(c?Vs(a,o)&&Wn(t,"set",e,a):Wn(t,"add",e,a)),r}}function io(n,s){const t=B(n,s);n[s];const e=Reflect.deleteProperty(n,s);return e&&t&&Wn(n,"delete",s,void 0),e}function po(n,s){const t=Reflect.has(n,s);return(!ie(s)||!Na.has(s))&&xn(n,"has",s),t}function uo(n){return xn(n,"iterate",L(n)?"length":is),Reflect.ownKeys(n)}const Fa={get:to,set:ro,deleteProperty:io,has:po,ownKeys:uo},ho={get:ao,set(n,s){return!0},deleteProperty(n,s){return!0}},fo=on({},Fa,{get:eo,set:co}),de=n=>n,kt=n=>Reflect.getPrototypeOf(n);function at(n,s,t=!1,e=!1){n=n.__v_raw;const a=D(n),l=D(s);t||(s!==l&&xn(a,"get",s),xn(a,"get",l));const{has:o}=kt(a),c=e?de:t?je:Js;if(o.call(a,s))return c(n.get(s));if(o.call(a,l))return c(n.get(l));n!==a&&n.get(s)}function lt(n,s=!1){const t=this.__v_raw,e=D(t),a=D(n);return s||(n!==a&&xn(e,"has",n),xn(e,"has",a)),n===a?t.has(n):t.has(n)||t.has(a)}function ot(n,s=!1){return n=n.__v_raw,!s&&xn(D(n),"iterate",is),Reflect.get(n,"size",n)}function Ue(n){n=D(n);const s=D(this);return kt(s).has.call(s,n)||(s.add(n),Wn(s,"add",n,n)),this}function Fe(n,s){s=D(s);const t=D(this),{has:e,get:a}=kt(t);let l=e.call(t,n);l||(n=D(n),l=e.call(t,n));const o=a.call(t,n);return t.set(n,s),l?Vs(s,o)&&Wn(t,"set",n,s):Wn(t,"add",n,s),this}function ze(n){const s=D(this),{has:t,get:e}=kt(s);let a=t.call(s,n);a||(n=D(n),a=t.call(s,n)),e&&e.call(s,n);const l=s.delete(n);return a&&Wn(s,"delete",n,void 0),l}function Be(){const n=D(this),s=n.size!==0,t=n.clear();return s&&Wn(n,"clear",void 0,void 0),t}function rt(n,s){return function(e,a){const l=this,o=l.__v_raw,c=D(o),r=s?de:n?je:Js;return!n&&xn(c,"iterate",is),o.forEach((u,p)=>e.call(a,r(u),r(p),l))}}function ct(n,s,t){return function(...e){const a=this.__v_raw,l=D(a),o=vs(l),c=n==="entries"||n===Symbol.iterator&&o,r=n==="keys"&&o,u=a[n](...e),p=t?de:s?je:Js;return!s&&xn(l,"iterate",r?Wt:is),{next(){const{value:d,done:g}=u.next();return g?{value:d,done:g}:{value:c?[p(d[0]),p(d[1])]:p(d),done:g}},[Symbol.iterator](){return this}}}}function Qn(n){return function(...s){return n==="delete"?!1:this}}function go(){const n={get(l){return at(this,l)},get size(){return ot(this)},has:lt,add:Ue,set:Fe,delete:ze,clear:Be,forEach:rt(!1,!1)},s={get(l){return at(this,l,!1,!0)},get size(){return ot(this)},has:lt,add:Ue,set:Fe,delete:ze,clear:Be,forEach:rt(!1,!0)},t={get(l){return at(this,l,!0)},get size(){return ot(this,!0)},has(l){return lt.call(this,l,!0)},add:Qn("add"),set:Qn("set"),delete:Qn("delete"),clear:Qn("clear"),forEach:rt(!0,!1)},e={get(l){return at(this,l,!0,!0)},get size(){return ot(this,!0)},has(l){return lt.call(this,l,!0)},add:Qn("add"),set:Qn("set"),delete:Qn("delete"),clear:Qn("clear"),forEach:rt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{n[l]=ct(l,!1,!1),t[l]=ct(l,!0,!1),s[l]=ct(l,!1,!0),e[l]=ct(l,!0,!0)}),[n,t,s,e]}const[mo,jo,_o,xo]=go();function ge(n,s){const t=s?n?xo:_o:n?jo:mo;return(e,a,l)=>a==="__v_isReactive"?!n:a==="__v_isReadonly"?n:a==="__v_raw"?e:Reflect.get(B(t,a)&&a in e?t:e,a,l)}const yo={get:ge(!1,!1)},bo={get:ge(!1,!0)},vo={get:ge(!0,!1)},za=new WeakMap,Ba=new WeakMap,Ha=new WeakMap,wo=new WeakMap;function ko(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Eo(n){return n.__v_skip||!Object.isExtensible(n)?0:ko(Fl(n))}function st(n){return Is(n)?n:me(n,!1,Fa,yo,za)}function Io(n){return me(n,!1,fo,bo,Ba)}function Da(n){return me(n,!0,ho,vo,Ha)}function me(n,s,t,e,a){if(!nn(n)||n.__v_raw&&!(s&&n.__v_isReactive))return n;const l=a.get(n);if(l)return l;const o=Eo(n);if(o===0)return n;const c=new Proxy(n,o===2?e:t);return a.set(n,c),c}function ws(n){return Is(n)?ws(n.__v_raw):!!(n&&n.__v_isReactive)}function Is(n){return!!(n&&n.__v_isReadonly)}function gt(n){return!!(n&&n.__v_isShallow)}function Ka(n){return ws(n)||Is(n)}function D(n){const s=n&&n.__v_raw;return s?D(s):n}function Wa(n){return dt(n,"__v_skip",!0),n}const Js=n=>nn(n)?st(n):n,je=n=>nn(n)?Da(n):n;function Va(n){ns&&kn&&(n=D(n),La(n.dep||(n.dep=ue())))}function Ga(n,s){n=D(n);const t=n.dep;t&&Vt(t)}function hn(n){return!!(n&&n.__v_isRef===!0)}function _n(n){return Ja(n,!1)}function qo(n){return Ja(n,!0)}function Ja(n,s){return hn(n)?n:new Co(n,s)}class Co{constructor(s,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?s:D(s),this._value=t?s:Js(s)}get value(){return Va(this),this._value}set value(s){const t=this.__v_isShallow||gt(s)||Is(s);s=t?s:D(s),Vs(s,this._rawValue)&&(this._rawValue=s,this._value=t?s:Js(s),Ga(this))}}function Un(n){return hn(n)?n.value:n}const Ao={get:(n,s,t)=>Un(Reflect.get(n,s,t)),set:(n,s,t,e)=>{const a=n[s];return hn(a)&&!hn(t)?(a.value=t,!0):Reflect.set(n,s,t,e)}};function Qa(n){return ws(n)?n:new Proxy(n,Ao)}class Ro{constructor(s,t,e,a){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new he(s,()=>{this._dirty||(this._dirty=!0,Ga(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=e}get value(){const s=D(this);return Va(s),(s._dirty||!s._cacheable)&&(s._dirty=!1,s._value=s.effect.run()),s._value}set value(s){this._setter(s)}}function Po(n,s,t=!1){let e,a;const l=F(n);return l?(e=n,a=qn):(e=n.get,a=n.set),new Ro(e,a,l||!a,t)}function ss(n,s,t,e){let a;try{a=e?n(...e):n()}catch(l){Et(l,s,t)}return a}function Cn(n,s,t,e){if(F(n)){const l=ss(n,s,t,e);return l&&Aa(l)&&l.catch(o=>{Et(o,s,t)}),l}const a=[];for(let l=0;l<n.length;l++)a.push(Cn(n[l],s,t,e));return a}function Et(n,s,t,e=!0){const a=s?s.vnode:null;if(s){let l=s.parent;const o=s.proxy,c=t;for(;l;){const u=l.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](n,o,c)===!1)return}l=l.parent}const r=s.appContext.config.errorHandler;if(r){ss(r,null,10,[n,o,c]);return}}So(n,t,a,e)}function So(n,s,t,e=!0){console.error(n)}let Qs=!1,Gt=!1;const un=[];let Nn=0;const ks=[];let Kn=null,rs=0;const Ya=Promise.resolve();let _e=null;function Xa(n){const s=_e||Ya;return n?s.then(this?n.bind(this):n):s}function To(n){let s=Nn+1,t=un.length;for(;s<t;){const e=s+t>>>1;Ys(un[e])<n?s=e+1:t=e}return s}function xe(n){(!un.length||!un.includes(n,Qs&&n.allowRecurse?Nn+1:Nn))&&(n.id==null?un.push(n):un.splice(To(n.id),0,n),Za())}function Za(){!Qs&&!Gt&&(Gt=!0,_e=Ya.then(sl))}function Oo(n){const s=un.indexOf(n);s>Nn&&un.splice(s,1)}function $o(n){L(n)?ks.push(...n):(!Kn||!Kn.includes(n,n.allowRecurse?rs+1:rs))&&ks.push(n),Za()}function He(n,s=Qs?Nn+1:0){for(;s<un.length;s++){const t=un[s];t&&t.pre&&(un.splice(s,1),s--,t())}}function nl(n){if(ks.length){const s=[...new Set(ks)];if(ks.length=0,Kn){Kn.push(...s);return}for(Kn=s,Kn.sort((t,e)=>Ys(t)-Ys(e)),rs=0;rs<Kn.length;rs++)Kn[rs]();Kn=null,rs=0}}const Ys=n=>n.id==null?1/0:n.id,Mo=(n,s)=>{const t=Ys(n)-Ys(s);if(t===0){if(n.pre&&!s.pre)return-1;if(s.pre&&!n.pre)return 1}return t};function sl(n){Gt=!1,Qs=!0,un.sort(Mo);const s=qn;try{for(Nn=0;Nn<un.length;Nn++){const t=un[Nn];t&&t.active!==!1&&ss(t,null,14)}}finally{Nn=0,un.length=0,nl(),Qs=!1,_e=null,(un.length||ks.length)&&sl()}}function Lo(n,s,...t){if(n.isUnmounted)return;const e=n.vnode.props||Z;let a=t;const l=s.startsWith("update:"),o=l&&s.slice(7);if(o&&o in e){const p=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:g}=e[p]||Z;g&&(a=t.map(b=>an(b)?b.trim():b)),d&&(a=t.map(Hl))}let c,r=e[c=Tt(s)]||e[c=Tt(zn(s))];!r&&l&&(r=e[c=Tt(Ps(s))]),r&&Cn(r,n,6,a);const u=e[c+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Cn(u,n,6,a)}}function tl(n,s,t=!1){const e=s.emitsCache,a=e.get(n);if(a!==void 0)return a;const l=n.emits;let o={},c=!1;if(!F(n)){const r=u=>{const p=tl(u,s,!0);p&&(c=!0,on(o,p))};!t&&s.mixins.length&&s.mixins.forEach(r),n.extends&&r(n.extends),n.mixins&&n.mixins.forEach(r)}return!l&&!c?(nn(n)&&e.set(n,null),null):(L(l)?l.forEach(r=>o[r]=null):on(o,l),nn(n)&&e.set(n,o),o)}function It(n,s){return!n||!yt(s)?!1:(s=s.slice(2).replace(/Once$/,""),B(n,s[0].toLowerCase()+s.slice(1))||B(n,Ps(s))||B(n,s))}let En=null,qt=null;function mt(n){const s=En;return En=n,qt=n&&n.type.__scopeId||null,s}function Os(n){qt=n}function $s(){qt=null}function No(n,s=En,t){if(!s||n._n)return n;const e=(...a)=>{e._d&&na(-1);const l=mt(s);let o;try{o=n(...a)}finally{mt(l),e._d&&na(1)}return o};return e._n=!0,e._c=!0,e._d=!0,e}function $t(n){const{type:s,vnode:t,proxy:e,withProxy:a,props:l,propsOptions:[o],slots:c,attrs:r,emit:u,render:p,renderCache:d,data:g,setupState:b,ctx:C,inheritAttrs:P}=n;let U,O;const $=mt(n);try{if(t.shapeFlag&4){const M=a||e;U=Ln(p.call(M,M,d,l,b,g,C)),O=r}else{const M=s;U=Ln(M.length>1?M(l,{attrs:r,slots:c,emit:u}):M(l,null)),O=s.props?r:Uo(r)}}catch(M){Ds.length=0,Et(M,n,1),U=tn(us)}let H=U;if(O&&P!==!1){const M=Object.keys(O),{shapeFlag:cn}=H;M.length&&cn&7&&(o&&M.some(re)&&(O=Fo(O,o)),H=qs(H,O))}return t.dirs&&(H=qs(H),H.dirs=H.dirs?H.dirs.concat(t.dirs):t.dirs),t.transition&&(H.transition=t.transition),U=H,mt($),U}const Uo=n=>{let s;for(const t in n)(t==="class"||t==="style"||yt(t))&&((s||(s={}))[t]=n[t]);return s},Fo=(n,s)=>{const t={};for(const e in n)(!re(e)||!(e.slice(9)in s))&&(t[e]=n[e]);return t};function zo(n,s,t){const{props:e,children:a,component:l}=n,{props:o,children:c,patchFlag:r}=s,u=l.emitsOptions;if(s.dirs||s.transition)return!0;if(t&&r>=0){if(r&1024)return!0;if(r&16)return e?De(e,o,u):!!o;if(r&8){const p=s.dynamicProps;for(let d=0;d<p.length;d++){const g=p[d];if(o[g]!==e[g]&&!It(u,g))return!0}}}else return(a||c)&&(!c||!c.$stable)?!0:e===o?!1:e?o?De(e,o,u):!0:!!o;return!1}function De(n,s,t){const e=Object.keys(s);if(e.length!==Object.keys(n).length)return!0;for(let a=0;a<e.length;a++){const l=e[a];if(s[l]!==n[l]&&!It(t,l))return!0}return!1}function Bo({vnode:n,parent:s},t){for(;s&&s.subTree===n;)(n=s.vnode).el=t,s=s.parent}const Ho=n=>n.__isSuspense;function Do(n,s){s&&s.pendingBranch?L(n)?s.effects.push(...n):s.effects.push(n):$o(n)}const it={};function Bs(n,s,t){return el(n,s,t)}function el(n,s,{immediate:t,deep:e,flush:a,onTrack:l,onTrigger:o}=Z){var c;const r=Xl()===((c=rn)==null?void 0:c.scope)?rn:null;let u,p=!1,d=!1;if(hn(n)?(u=()=>n.value,p=gt(n)):ws(n)?(u=()=>n,e=!0):L(n)?(d=!0,p=n.some(M=>ws(M)||gt(M)),u=()=>n.map(M=>{if(hn(M))return M.value;if(ws(M))return ys(M);if(F(M))return ss(M,r,2)})):F(n)?s?u=()=>ss(n,r,2):u=()=>{if(!(r&&r.isUnmounted))return g&&g(),Cn(n,r,3,[b])}:u=qn,s&&e){const M=u;u=()=>ys(M())}let g,b=M=>{g=$.onStop=()=>{ss(M,r,4)}},C;if(Zs)if(b=qn,s?t&&Cn(s,r,3,[u(),d?[]:void 0,b]):u(),a==="sync"){const M=Lr();C=M.__watcherHandles||(M.__watcherHandles=[])}else return qn;let P=d?new Array(n.length).fill(it):it;const U=()=>{if(!!$.active)if(s){const M=$.run();(e||p||(d?M.some((cn,fn)=>Vs(cn,P[fn])):Vs(M,P)))&&(g&&g(),Cn(s,r,3,[M,P===it?void 0:d&&P[0]===it?[]:P,b]),P=M)}else $.run()};U.allowRecurse=!!s;let O;a==="sync"?O=U:a==="post"?O=()=>jn(U,r&&r.suspense):(U.pre=!0,r&&(U.id=r.uid),O=()=>xe(U));const $=new he(u,O);s?t?U():P=$.run():a==="post"?jn($.run.bind($),r&&r.suspense):$.run();const H=()=>{$.stop(),r&&r.scope&&ce(r.scope.effects,$)};return C&&C.push(H),H}function Ko(n,s,t){const e=this.proxy,a=an(n)?n.includes(".")?al(e,n):()=>e[n]:n.bind(e,e);let l;F(s)?l=s:(l=s.handler,t=s);const o=rn;Cs(this);const c=el(a,l.bind(e),t);return o?Cs(o):ps(),c}function al(n,s){const t=s.split(".");return()=>{let e=n;for(let a=0;a<t.length&&e;a++)e=e[t[a]];return e}}function ys(n,s){if(!nn(n)||n.__v_skip||(s=s||new Set,s.has(n)))return n;if(s.add(n),hn(n))ys(n.value,s);else if(L(n))for(let t=0;t<n.length;t++)ys(n[t],s);else if(Ca(n)||vs(n))n.forEach(t=>{ys(t,s)});else if(Pa(n))for(const t in n)ys(n[t],s);return n}function ls(n,s,t,e){const a=n.dirs,l=s&&s.dirs;for(let o=0;o<a.length;o++){const c=a[o];l&&(c.oldValue=l[o].value);let r=c.dir[e];r&&(Ss(),Cn(r,t,8,[n.el,c,n,s]),Ts())}}function ye(n,s){return F(n)?(()=>on({name:n.name},s,{setup:n}))():n}const ut=n=>!!n.type.__asyncLoader,ll=n=>n.type.__isKeepAlive;function Wo(n,s){ol(n,"a",s)}function Vo(n,s){ol(n,"da",s)}function ol(n,s,t=rn){const e=n.__wdc||(n.__wdc=()=>{let a=t;for(;a;){if(a.isDeactivated)return;a=a.parent}return n()});if(Ct(s,e,t),t){let a=t.parent;for(;a&&a.parent;)ll(a.parent.vnode)&&Go(e,s,t,a),a=a.parent}}function Go(n,s,t,e){const a=Ct(s,n,e,!0);be(()=>{ce(e[s],a)},t)}function Ct(n,s,t=rn,e=!1){if(t){const a=t[n]||(t[n]=[]),l=s.__weh||(s.__weh=(...o)=>{if(t.isUnmounted)return;Ss(),Cs(t);const c=Cn(s,t,n,o);return ps(),Ts(),c});return e?a.unshift(l):a.push(l),l}}const Vn=n=>(s,t=rn)=>(!Zs||n==="sp")&&Ct(n,(...e)=>s(...e),t),Jo=Vn("bm"),hs=Vn("m"),Qo=Vn("bu"),Yo=Vn("u"),Xo=Vn("bum"),be=Vn("um"),Zo=Vn("sp"),nr=Vn("rtg"),sr=Vn("rtc");function tr(n,s=rn){Ct("ec",n,s)}const rl="components";function cl(n,s){return ar(rl,n,!0,s)||n}const er=Symbol.for("v-ndc");function ar(n,s,t=!0,e=!1){const a=En||rn;if(a){const l=a.type;if(n===rl){const c=Or(l,!1);if(c&&(c===s||c===zn(s)||c===wt(zn(s))))return l}const o=Ke(a[n]||l[n],s)||Ke(a.appContext[n],s);return!o&&e?l:o}}function Ke(n,s){return n&&(n[s]||n[zn(s)]||n[wt(zn(s))])}function es(n,s,t,e){let a;const l=t&&t[e];if(L(n)||an(n)){a=new Array(n.length);for(let o=0,c=n.length;o<c;o++)a[o]=s(n[o],o,void 0,l&&l[o])}else if(typeof n=="number"){a=new Array(n);for(let o=0;o<n;o++)a[o]=s(o+1,o,void 0,l&&l[o])}else if(nn(n))if(n[Symbol.iterator])a=Array.from(n,(o,c)=>s(o,c,void 0,l&&l[c]));else{const o=Object.keys(n);a=new Array(o.length);for(let c=0,r=o.length;c<r;c++){const u=o[c];a[c]=s(n[u],u,c,l&&l[c])}}else a=[];return t&&(t[e]=a),a}const Jt=n=>n?xl(n)?qe(n)||n.proxy:Jt(n.parent):null,Hs=on(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Jt(n.parent),$root:n=>Jt(n.root),$emit:n=>n.emit,$options:n=>ve(n),$forceUpdate:n=>n.f||(n.f=()=>xe(n.update)),$nextTick:n=>n.n||(n.n=Xa.bind(n.proxy)),$watch:n=>Ko.bind(n)}),Mt=(n,s)=>n!==Z&&!n.__isScriptSetup&&B(n,s),lr={get({_:n},s){const{ctx:t,setupState:e,data:a,props:l,accessCache:o,type:c,appContext:r}=n;let u;if(s[0]!=="$"){const b=o[s];if(b!==void 0)switch(b){case 1:return e[s];case 2:return a[s];case 4:return t[s];case 3:return l[s]}else{if(Mt(e,s))return o[s]=1,e[s];if(a!==Z&&B(a,s))return o[s]=2,a[s];if((u=n.propsOptions[0])&&B(u,s))return o[s]=3,l[s];if(t!==Z&&B(t,s))return o[s]=4,t[s];Qt&&(o[s]=0)}}const p=Hs[s];let d,g;if(p)return s==="$attrs"&&xn(n,"get",s),p(n);if((d=c.__cssModules)&&(d=d[s]))return d;if(t!==Z&&B(t,s))return o[s]=4,t[s];if(g=r.config.globalProperties,B(g,s))return g[s]},set({_:n},s,t){const{data:e,setupState:a,ctx:l}=n;return Mt(a,s)?(a[s]=t,!0):e!==Z&&B(e,s)?(e[s]=t,!0):B(n.props,s)||s[0]==="$"&&s.slice(1)in n?!1:(l[s]=t,!0)},has({_:{data:n,setupState:s,accessCache:t,ctx:e,appContext:a,propsOptions:l}},o){let c;return!!t[o]||n!==Z&&B(n,o)||Mt(s,o)||(c=l[0])&&B(c,o)||B(e,o)||B(Hs,o)||B(a.config.globalProperties,o)},defineProperty(n,s,t){return t.get!=null?n._.accessCache[s]=0:B(t,"value")&&this.set(n,s,t.value,null),Reflect.defineProperty(n,s,t)}};function We(n){return L(n)?n.reduce((s,t)=>(s[t]=null,s),{}):n}let Qt=!0;function or(n){const s=ve(n),t=n.proxy,e=n.ctx;Qt=!1,s.beforeCreate&&Ve(s.beforeCreate,n,"bc");const{data:a,computed:l,methods:o,watch:c,provide:r,inject:u,created:p,beforeMount:d,mounted:g,beforeUpdate:b,updated:C,activated:P,deactivated:U,beforeDestroy:O,beforeUnmount:$,destroyed:H,unmounted:M,render:cn,renderTracked:fn,renderTriggered:Pn,errorCaptured:Bn,serverPrefetch:fs,expose:Sn,inheritAttrs:Gn,components:as,directives:Tn,filters:Ms}=s;if(u&&rr(u,e,null),o)for(const Q in o){const K=o[Q];F(K)&&(e[Q]=K.bind(t))}if(a){const Q=a.call(t,t);nn(Q)&&(n.data=st(Q))}if(Qt=!0,l)for(const Q in l){const K=l[Q],Hn=F(K)?K.bind(t,t):F(K.get)?K.get.bind(t,t):qn,Jn=!F(K)&&F(K.set)?K.set.bind(t):qn,On=bn({get:Hn,set:Jn});Object.defineProperty(e,Q,{enumerable:!0,configurable:!0,get:()=>On.value,set:mn=>On.value=mn})}if(c)for(const Q in c)il(c[Q],e,t,Q);if(r){const Q=F(r)?r.call(t):r;Reflect.ownKeys(Q).forEach(K=>{ht(K,Q[K])})}p&&Ve(p,n,"c");function ln(Q,K){L(K)?K.forEach(Hn=>Q(Hn.bind(t))):K&&Q(K.bind(t))}if(ln(Jo,d),ln(hs,g),ln(Qo,b),ln(Yo,C),ln(Wo,P),ln(Vo,U),ln(tr,Bn),ln(sr,fn),ln(nr,Pn),ln(Xo,$),ln(be,M),ln(Zo,fs),L(Sn))if(Sn.length){const Q=n.exposed||(n.exposed={});Sn.forEach(K=>{Object.defineProperty(Q,K,{get:()=>t[K],set:Hn=>t[K]=Hn})})}else n.exposed||(n.exposed={});cn&&n.render===qn&&(n.render=cn),Gn!=null&&(n.inheritAttrs=Gn),as&&(n.components=as),Tn&&(n.directives=Tn)}function rr(n,s,t=qn){L(n)&&(n=Yt(n));for(const e in n){const a=n[e];let l;nn(a)?"default"in a?l=Fn(a.from||e,a.default,!0):l=Fn(a.from||e):l=Fn(a),hn(l)?Object.defineProperty(s,e,{enumerable:!0,configurable:!0,get:()=>l.value,set:o=>l.value=o}):s[e]=l}}function Ve(n,s,t){Cn(L(n)?n.map(e=>e.bind(s.proxy)):n.bind(s.proxy),s,t)}function il(n,s,t,e){const a=e.includes(".")?al(t,e):()=>t[e];if(an(n)){const l=s[n];F(l)&&Bs(a,l)}else if(F(n))Bs(a,n.bind(t));else if(nn(n))if(L(n))n.forEach(l=>il(l,s,t,e));else{const l=F(n.handler)?n.handler.bind(t):s[n.handler];F(l)&&Bs(a,l,n)}}function ve(n){const s=n.type,{mixins:t,extends:e}=s,{mixins:a,optionsCache:l,config:{optionMergeStrategies:o}}=n.appContext,c=l.get(s);let r;return c?r=c:!a.length&&!t&&!e?r=s:(r={},a.length&&a.forEach(u=>jt(r,u,o,!0)),jt(r,s,o)),nn(s)&&l.set(s,r),r}function jt(n,s,t,e=!1){const{mixins:a,extends:l}=s;l&&jt(n,l,t,!0),a&&a.forEach(o=>jt(n,o,t,!0));for(const o in s)if(!(e&&o==="expose")){const c=cr[o]||t&&t[o];n[o]=c?c(n[o],s[o]):s[o]}return n}const cr={data:Ge,props:Je,emits:Je,methods:zs,computed:zs,beforeCreate:dn,created:dn,beforeMount:dn,mounted:dn,beforeUpdate:dn,updated:dn,beforeDestroy:dn,beforeUnmount:dn,destroyed:dn,unmounted:dn,activated:dn,deactivated:dn,errorCaptured:dn,serverPrefetch:dn,components:zs,directives:zs,watch:pr,provide:Ge,inject:ir};function Ge(n,s){return s?n?function(){return on(F(n)?n.call(this,this):n,F(s)?s.call(this,this):s)}:s:n}function ir(n,s){return zs(Yt(n),Yt(s))}function Yt(n){if(L(n)){const s={};for(let t=0;t<n.length;t++)s[n[t]]=n[t];return s}return n}function dn(n,s){return n?[...new Set([].concat(n,s))]:s}function zs(n,s){return n?on(Object.create(null),n,s):s}function Je(n,s){return n?L(n)&&L(s)?[...new Set([...n,...s])]:on(Object.create(null),We(n),We(s!=null?s:{})):s}function pr(n,s){if(!n)return s;if(!s)return n;const t=on(Object.create(null),n);for(const e in s)t[e]=dn(n[e],s[e]);return t}function pl(){return{app:null,config:{isNativeTag:Ll,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ur=0;function hr(n,s){return function(e,a=null){F(e)||(e=on({},e)),a!=null&&!nn(a)&&(a=null);const l=pl(),o=new Set;let c=!1;const r=l.app={_uid:ur++,_component:e,_props:a,_container:null,_context:l,_instance:null,version:Nr,get config(){return l.config},set config(u){},use(u,...p){return o.has(u)||(u&&F(u.install)?(o.add(u),u.install(r,...p)):F(u)&&(o.add(u),u(r,...p))),r},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),r},component(u,p){return p?(l.components[u]=p,r):l.components[u]},directive(u,p){return p?(l.directives[u]=p,r):l.directives[u]},mount(u,p,d){if(!c){const g=tn(e,a);return g.appContext=l,p&&s?s(g,u):n(g,u,d),c=!0,r._container=u,u.__vue_app__=r,qe(g.component)||g.component.proxy}},unmount(){c&&(n(null,r._container),delete r._container.__vue_app__)},provide(u,p){return l.provides[u]=p,r},runWithContext(u){_t=r;try{return u()}finally{_t=null}}};return r}}let _t=null;function ht(n,s){if(rn){let t=rn.provides;const e=rn.parent&&rn.parent.provides;e===t&&(t=rn.provides=Object.create(e)),t[n]=s}}function Fn(n,s,t=!1){const e=rn||En;if(e||_t){const a=e?e.parent==null?e.vnode.appContext&&e.vnode.appContext.provides:e.parent.provides:_t._context.provides;if(a&&n in a)return a[n];if(arguments.length>1)return t&&F(s)?s.call(e&&e.proxy):s}}function fr(n,s,t,e=!1){const a={},l={};dt(l,Rt,1),n.propsDefaults=Object.create(null),ul(n,s,a,l);for(const o in n.propsOptions[0])o in a||(a[o]=void 0);t?n.props=e?a:Io(a):n.type.props?n.props=a:n.props=l,n.attrs=l}function dr(n,s,t,e){const{props:a,attrs:l,vnode:{patchFlag:o}}=n,c=D(a),[r]=n.propsOptions;let u=!1;if((e||o>0)&&!(o&16)){if(o&8){const p=n.vnode.dynamicProps;for(let d=0;d<p.length;d++){let g=p[d];if(It(n.emitsOptions,g))continue;const b=s[g];if(r)if(B(l,g))b!==l[g]&&(l[g]=b,u=!0);else{const C=zn(g);a[C]=Xt(r,c,C,b,n,!1)}else b!==l[g]&&(l[g]=b,u=!0)}}}else{ul(n,s,a,l)&&(u=!0);let p;for(const d in c)(!s||!B(s,d)&&((p=Ps(d))===d||!B(s,p)))&&(r?t&&(t[d]!==void 0||t[p]!==void 0)&&(a[d]=Xt(r,c,d,void 0,n,!0)):delete a[d]);if(l!==c)for(const d in l)(!s||!B(s,d)&&!0)&&(delete l[d],u=!0)}u&&Wn(n,"set","$attrs")}function ul(n,s,t,e){const[a,l]=n.propsOptions;let o=!1,c;if(s)for(let r in s){if(pt(r))continue;const u=s[r];let p;a&&B(a,p=zn(r))?!l||!l.includes(p)?t[p]=u:(c||(c={}))[p]=u:It(n.emitsOptions,r)||(!(r in e)||u!==e[r])&&(e[r]=u,o=!0)}if(l){const r=D(t),u=c||Z;for(let p=0;p<l.length;p++){const d=l[p];t[d]=Xt(a,r,d,u[d],n,!B(u,d))}}return o}function Xt(n,s,t,e,a,l){const o=n[t];if(o!=null){const c=B(o,"default");if(c&&e===void 0){const r=o.default;if(o.type!==Function&&!o.skipFactory&&F(r)){const{propsDefaults:u}=a;t in u?e=u[t]:(Cs(a),e=u[t]=r.call(null,s),ps())}else e=r}o[0]&&(l&&!c?e=!1:o[1]&&(e===""||e===Ps(t))&&(e=!0))}return e}function hl(n,s,t=!1){const e=s.propsCache,a=e.get(n);if(a)return a;const l=n.props,o={},c=[];let r=!1;if(!F(n)){const p=d=>{r=!0;const[g,b]=hl(d,s,!0);on(o,g),b&&c.push(...b)};!t&&s.mixins.length&&s.mixins.forEach(p),n.extends&&p(n.extends),n.mixins&&n.mixins.forEach(p)}if(!l&&!r)return nn(n)&&e.set(n,bs),bs;if(L(l))for(let p=0;p<l.length;p++){const d=zn(l[p]);Qe(d)&&(o[d]=Z)}else if(l)for(const p in l){const d=zn(p);if(Qe(d)){const g=l[p],b=o[d]=L(g)||F(g)?{type:g}:on({},g);if(b){const C=Ze(Boolean,b.type),P=Ze(String,b.type);b[0]=C>-1,b[1]=P<0||C<P,(C>-1||B(b,"default"))&&c.push(d)}}}const u=[o,c];return nn(n)&&e.set(n,u),u}function Qe(n){return n[0]!=="$"}function Ye(n){const s=n&&n.toString().match(/^\s*(function|class) (\w+)/);return s?s[2]:n===null?"null":""}function Xe(n,s){return Ye(n)===Ye(s)}function Ze(n,s){return L(s)?s.findIndex(t=>Xe(t,n)):F(s)&&Xe(s,n)?0:-1}const fl=n=>n[0]==="_"||n==="$stable",we=n=>L(n)?n.map(Ln):[Ln(n)],gr=(n,s,t)=>{if(s._n)return s;const e=No((...a)=>we(s(...a)),t);return e._c=!1,e},dl=(n,s,t)=>{const e=n._ctx;for(const a in n){if(fl(a))continue;const l=n[a];if(F(l))s[a]=gr(a,l,e);else if(l!=null){const o=we(l);s[a]=()=>o}}},gl=(n,s)=>{const t=we(s);n.slots.default=()=>t},mr=(n,s)=>{if(n.vnode.shapeFlag&32){const t=s._;t?(n.slots=D(s),dt(s,"_",t)):dl(s,n.slots={})}else n.slots={},s&&gl(n,s);dt(n.slots,Rt,1)},jr=(n,s,t)=>{const{vnode:e,slots:a}=n;let l=!0,o=Z;if(e.shapeFlag&32){const c=s._;c?t&&c===1?l=!1:(on(a,s),!t&&c===1&&delete a._):(l=!s.$stable,dl(s,a)),o=s}else s&&(gl(n,s),o={default:1});if(l)for(const c in a)!fl(c)&&!(c in o)&&delete a[c]};function Zt(n,s,t,e,a=!1){if(L(n)){n.forEach((g,b)=>Zt(g,s&&(L(s)?s[b]:s),t,e,a));return}if(ut(e)&&!a)return;const l=e.shapeFlag&4?qe(e.component)||e.component.proxy:e.el,o=a?null:l,{i:c,r}=n,u=s&&s.r,p=c.refs===Z?c.refs={}:c.refs,d=c.setupState;if(u!=null&&u!==r&&(an(u)?(p[u]=null,B(d,u)&&(d[u]=null)):hn(u)&&(u.value=null)),F(r))ss(r,c,12,[o,p]);else{const g=an(r),b=hn(r);if(g||b){const C=()=>{if(n.f){const P=g?B(d,r)?d[r]:p[r]:r.value;a?L(P)&&ce(P,l):L(P)?P.includes(l)||P.push(l):g?(p[r]=[l],B(d,r)&&(d[r]=p[r])):(r.value=[l],n.k&&(p[n.k]=r.value))}else g?(p[r]=o,B(d,r)&&(d[r]=o)):b&&(r.value=o,n.k&&(p[n.k]=o))};o?(C.id=-1,jn(C,t)):C()}}}const jn=Do;function _r(n){return xr(n)}function xr(n,s){const t=Ht();t.__VUE__=!0;const{insert:e,remove:a,patchProp:l,createElement:o,createText:c,createComment:r,setText:u,setElementText:p,parentNode:d,nextSibling:g,setScopeId:b=qn,insertStaticContent:C}=n,P=(i,h,f,m=null,_=null,x=null,E=!1,v=null,w=!!h.dynamicChildren)=>{if(i===h)return;i&&!Ns(i,h)&&(m=j(i),mn(i,_,x,!0),i=null),h.patchFlag===-2&&(w=!1,h.dynamicChildren=null);const{type:y,ref:S,shapeFlag:q}=h;switch(y){case At:U(i,h,f,m);break;case us:O(i,h,f,m);break;case Lt:i==null&&$(h,f,m,E);break;case sn:as(i,h,f,m,_,x,E,v,w);break;default:q&1?cn(i,h,f,m,_,x,E,v,w):q&6?Tn(i,h,f,m,_,x,E,v,w):(q&64||q&128)&&y.process(i,h,f,m,_,x,E,v,w,k)}S!=null&&_&&Zt(S,i&&i.ref,x,h||i,!h)},U=(i,h,f,m)=>{if(i==null)e(h.el=c(h.children),f,m);else{const _=h.el=i.el;h.children!==i.children&&u(_,h.children)}},O=(i,h,f,m)=>{i==null?e(h.el=r(h.children||""),f,m):h.el=i.el},$=(i,h,f,m)=>{[i.el,i.anchor]=C(i.children,h,f,m,i.el,i.anchor)},H=({el:i,anchor:h},f,m)=>{let _;for(;i&&i!==h;)_=g(i),e(i,f,m),i=_;e(h,f,m)},M=({el:i,anchor:h})=>{let f;for(;i&&i!==h;)f=g(i),a(i),i=f;a(h)},cn=(i,h,f,m,_,x,E,v,w)=>{E=E||h.type==="svg",i==null?fn(h,f,m,_,x,E,v,w):fs(i,h,_,x,E,v,w)},fn=(i,h,f,m,_,x,E,v)=>{let w,y;const{type:S,props:q,shapeFlag:T,transition:N,dirs:z}=i;if(w=i.el=o(i.type,x,q&&q.is,q),T&8?p(w,i.children):T&16&&Bn(i.children,w,null,m,_,x&&S!=="foreignObject",E,v),z&&ls(i,null,m,"created"),Pn(w,i,i.scopeId,E,m),q){for(const J in q)J!=="value"&&!pt(J)&&l(w,J,null,q[J],x,i.children,m,_,pn);"value"in q&&l(w,"value",null,q.value),(y=q.onVnodeBeforeMount)&&Mn(y,m,i)}z&&ls(i,null,m,"beforeMount");const X=(!_||_&&!_.pendingBranch)&&N&&!N.persisted;X&&N.beforeEnter(w),e(w,h,f),((y=q&&q.onVnodeMounted)||X||z)&&jn(()=>{y&&Mn(y,m,i),X&&N.enter(w),z&&ls(i,null,m,"mounted")},_)},Pn=(i,h,f,m,_)=>{if(f&&b(i,f),m)for(let x=0;x<m.length;x++)b(i,m[x]);if(_){let x=_.subTree;if(h===x){const E=_.vnode;Pn(i,E,E.scopeId,E.slotScopeIds,_.parent)}}},Bn=(i,h,f,m,_,x,E,v,w=0)=>{for(let y=w;y<i.length;y++){const S=i[y]=v?Xn(i[y]):Ln(i[y]);P(null,S,h,f,m,_,x,E,v)}},fs=(i,h,f,m,_,x,E)=>{const v=h.el=i.el;let{patchFlag:w,dynamicChildren:y,dirs:S}=h;w|=i.patchFlag&16;const q=i.props||Z,T=h.props||Z;let N;f&&os(f,!1),(N=T.onVnodeBeforeUpdate)&&Mn(N,f,h,i),S&&ls(h,i,f,"beforeUpdate"),f&&os(f,!0);const z=_&&h.type!=="foreignObject";if(y?Sn(i.dynamicChildren,y,v,f,m,z,x):E||K(i,h,v,null,f,m,z,x,!1),w>0){if(w&16)Gn(v,h,q,T,f,m,_);else if(w&2&&q.class!==T.class&&l(v,"class",null,T.class,_),w&4&&l(v,"style",q.style,T.style,_),w&8){const X=h.dynamicProps;for(let J=0;J<X.length;J++){const en=X[J],vn=q[en],js=T[en];(js!==vn||en==="value")&&l(v,en,vn,js,_,i.children,f,m,pn)}}w&1&&i.children!==h.children&&p(v,h.children)}else!E&&y==null&&Gn(v,h,q,T,f,m,_);((N=T.onVnodeUpdated)||S)&&jn(()=>{N&&Mn(N,f,h,i),S&&ls(h,i,f,"updated")},m)},Sn=(i,h,f,m,_,x,E)=>{for(let v=0;v<h.length;v++){const w=i[v],y=h[v],S=w.el&&(w.type===sn||!Ns(w,y)||w.shapeFlag&70)?d(w.el):f;P(w,y,S,null,m,_,x,E,!0)}},Gn=(i,h,f,m,_,x,E)=>{if(f!==m){if(f!==Z)for(const v in f)!pt(v)&&!(v in m)&&l(i,v,f[v],null,E,h.children,_,x,pn);for(const v in m){if(pt(v))continue;const w=m[v],y=f[v];w!==y&&v!=="value"&&l(i,v,y,w,E,h.children,_,x,pn)}"value"in m&&l(i,"value",f.value,m.value)}},as=(i,h,f,m,_,x,E,v,w)=>{const y=h.el=i?i.el:c(""),S=h.anchor=i?i.anchor:c("");let{patchFlag:q,dynamicChildren:T,slotScopeIds:N}=h;N&&(v=v?v.concat(N):N),i==null?(e(y,f,m),e(S,f,m),Bn(h.children,f,S,_,x,E,v,w)):q>0&&q&64&&T&&i.dynamicChildren?(Sn(i.dynamicChildren,T,f,_,x,E,v),(h.key!=null||_&&h===_.subTree)&&ml(i,h,!0)):K(i,h,f,S,_,x,E,v,w)},Tn=(i,h,f,m,_,x,E,v,w)=>{h.slotScopeIds=v,i==null?h.shapeFlag&512?_.ctx.activate(h,f,m,E,w):Ms(h,f,m,_,x,E,w):ds(i,h,w)},Ms=(i,h,f,m,_,x,E)=>{const v=i.component=Ar(i,m,_);if(ll(i)&&(v.ctx.renderer=k),Rr(v),v.asyncDep){if(_&&_.registerDep(v,ln),!i.el){const w=v.subTree=tn(us);O(null,w,h,f)}return}ln(v,i,h,f,_,x,E)},ds=(i,h,f)=>{const m=h.component=i.component;if(zo(i,h,f))if(m.asyncDep&&!m.asyncResolved){Q(m,h,f);return}else m.next=h,Oo(m.update),m.update();else h.el=i.el,m.vnode=h},ln=(i,h,f,m,_,x,E)=>{const v=()=>{if(i.isMounted){let{next:S,bu:q,u:T,parent:N,vnode:z}=i,X=S,J;os(i,!1),S?(S.el=z.el,Q(i,S,E)):S=z,q&&Ot(q),(J=S.props&&S.props.onVnodeBeforeUpdate)&&Mn(J,N,S,z),os(i,!0);const en=$t(i),vn=i.subTree;i.subTree=en,P(vn,en,d(vn.el),j(vn),i,_,x),S.el=en.el,X===null&&Bo(i,en.el),T&&jn(T,_),(J=S.props&&S.props.onVnodeUpdated)&&jn(()=>Mn(J,N,S,z),_)}else{let S;const{el:q,props:T}=h,{bm:N,m:z,parent:X}=i,J=ut(h);if(os(i,!1),N&&Ot(N),!J&&(S=T&&T.onVnodeBeforeMount)&&Mn(S,X,h),os(i,!0),q&&W){const en=()=>{i.subTree=$t(i),W(q,i.subTree,i,_,null)};J?h.type.__asyncLoader().then(()=>!i.isUnmounted&&en()):en()}else{const en=i.subTree=$t(i);P(null,en,f,m,i,_,x),h.el=en.el}if(z&&jn(z,_),!J&&(S=T&&T.onVnodeMounted)){const en=h;jn(()=>Mn(S,X,en),_)}(h.shapeFlag&256||X&&ut(X.vnode)&&X.vnode.shapeFlag&256)&&i.a&&jn(i.a,_),i.isMounted=!0,h=f=m=null}},w=i.effect=new he(v,()=>xe(y),i.scope),y=i.update=()=>w.run();y.id=i.uid,os(i,!0),y()},Q=(i,h,f)=>{h.component=i;const m=i.vnode.props;i.vnode=h,i.next=null,dr(i,h.props,m,f),jr(i,h.children,f),Ss(),He(),Ts()},K=(i,h,f,m,_,x,E,v,w=!1)=>{const y=i&&i.children,S=i?i.shapeFlag:0,q=h.children,{patchFlag:T,shapeFlag:N}=h;if(T>0){if(T&128){Jn(y,q,f,m,_,x,E,v,w);return}else if(T&256){Hn(y,q,f,m,_,x,E,v,w);return}}N&8?(S&16&&pn(y,_,x),q!==y&&p(f,q)):S&16?N&16?Jn(y,q,f,m,_,x,E,v,w):pn(y,_,x,!0):(S&8&&p(f,""),N&16&&Bn(q,f,m,_,x,E,v,w))},Hn=(i,h,f,m,_,x,E,v,w)=>{i=i||bs,h=h||bs;const y=i.length,S=h.length,q=Math.min(y,S);let T;for(T=0;T<q;T++){const N=h[T]=w?Xn(h[T]):Ln(h[T]);P(i[T],N,f,null,_,x,E,v,w)}y>S?pn(i,_,x,!0,!1,q):Bn(h,f,m,_,x,E,v,w,q)},Jn=(i,h,f,m,_,x,E,v,w)=>{let y=0;const S=h.length;let q=i.length-1,T=S-1;for(;y<=q&&y<=T;){const N=i[y],z=h[y]=w?Xn(h[y]):Ln(h[y]);if(Ns(N,z))P(N,z,f,null,_,x,E,v,w);else break;y++}for(;y<=q&&y<=T;){const N=i[q],z=h[T]=w?Xn(h[T]):Ln(h[T]);if(Ns(N,z))P(N,z,f,null,_,x,E,v,w);else break;q--,T--}if(y>q){if(y<=T){const N=T+1,z=N<S?h[N].el:m;for(;y<=T;)P(null,h[y]=w?Xn(h[y]):Ln(h[y]),f,z,_,x,E,v,w),y++}}else if(y>T)for(;y<=q;)mn(i[y],_,x,!0),y++;else{const N=y,z=y,X=new Map;for(y=z;y<=T;y++){const yn=h[y]=w?Xn(h[y]):Ln(h[y]);yn.key!=null&&X.set(yn.key,y)}let J,en=0;const vn=T-z+1;let js=!1,Se=0;const Ls=new Array(vn);for(y=0;y<vn;y++)Ls[y]=0;for(y=N;y<=q;y++){const yn=i[y];if(en>=vn){mn(yn,_,x,!0);continue}let $n;if(yn.key!=null)$n=X.get(yn.key);else for(J=z;J<=T;J++)if(Ls[J-z]===0&&Ns(yn,h[J])){$n=J;break}$n===void 0?mn(yn,_,x,!0):(Ls[$n-z]=y+1,$n>=Se?Se=$n:js=!0,P(yn,h[$n],f,null,_,x,E,v,w),en++)}const Te=js?yr(Ls):bs;for(J=Te.length-1,y=vn-1;y>=0;y--){const yn=z+y,$n=h[yn],Oe=yn+1<S?h[yn+1].el:m;Ls[y]===0?P(null,$n,f,Oe,_,x,E,v,w):js&&(J<0||y!==Te[J]?On($n,f,Oe,2):J--)}}},On=(i,h,f,m,_=null)=>{const{el:x,type:E,transition:v,children:w,shapeFlag:y}=i;if(y&6){On(i.component.subTree,h,f,m);return}if(y&128){i.suspense.move(h,f,m);return}if(y&64){E.move(i,h,f,k);return}if(E===sn){e(x,h,f);for(let q=0;q<w.length;q++)On(w[q],h,f,m);e(i.anchor,h,f);return}if(E===Lt){H(i,h,f);return}if(m!==2&&y&1&&v)if(m===0)v.beforeEnter(x),e(x,h,f),jn(()=>v.enter(x),_);else{const{leave:q,delayLeave:T,afterLeave:N}=v,z=()=>e(x,h,f),X=()=>{q(x,()=>{z(),N&&N()})};T?T(x,z,X):X()}else e(x,h,f)},mn=(i,h,f,m=!1,_=!1)=>{const{type:x,props:E,ref:v,children:w,dynamicChildren:y,shapeFlag:S,patchFlag:q,dirs:T}=i;if(v!=null&&Zt(v,null,f,i,!0),S&256){h.ctx.deactivate(i);return}const N=S&1&&T,z=!ut(i);let X;if(z&&(X=E&&E.onVnodeBeforeUnmount)&&Mn(X,h,i),S&6)et(i.component,f,m);else{if(S&128){i.suspense.unmount(f,m);return}N&&ls(i,null,h,"beforeUnmount"),S&64?i.type.remove(i,h,f,_,k,m):y&&(x!==sn||q>0&&q&64)?pn(y,h,f,!1,!0):(x===sn&&q&384||!_&&S&16)&&pn(w,h,f),m&&gs(i)}(z&&(X=E&&E.onVnodeUnmounted)||N)&&jn(()=>{X&&Mn(X,h,i),N&&ls(i,null,h,"unmounted")},f)},gs=i=>{const{type:h,el:f,anchor:m,transition:_}=i;if(h===sn){ms(f,m);return}if(h===Lt){M(i);return}const x=()=>{a(f),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(i.shapeFlag&1&&_&&!_.persisted){const{leave:E,delayLeave:v}=_,w=()=>E(f,x);v?v(i.el,x,w):w()}else x()},ms=(i,h)=>{let f;for(;i!==h;)f=g(i),a(i),i=f;a(h)},et=(i,h,f)=>{const{bum:m,scope:_,update:x,subTree:E,um:v}=i;m&&Ot(m),_.stop(),x&&(x.active=!1,mn(E,i,h,f)),v&&jn(v,h),jn(()=>{i.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&i.asyncDep&&!i.asyncResolved&&i.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},pn=(i,h,f,m=!1,_=!1,x=0)=>{for(let E=x;E<i.length;E++)mn(i[E],h,f,m,_)},j=i=>i.shapeFlag&6?j(i.component.subTree):i.shapeFlag&128?i.suspense.next():g(i.anchor||i.el),I=(i,h,f)=>{i==null?h._vnode&&mn(h._vnode,null,null,!0):P(h._vnode||null,i,h,null,null,null,f),He(),nl(),h._vnode=i},k={p:P,um:mn,m:On,r:gs,mt:Ms,mc:Bn,pc:K,pbc:Sn,n:j,o:n};let A,W;return s&&([A,W]=s(k)),{render:I,hydrate:A,createApp:hr(I,A)}}function os({effect:n,update:s},t){n.allowRecurse=s.allowRecurse=t}function ml(n,s,t=!1){const e=n.children,a=s.children;if(L(e)&&L(a))for(let l=0;l<e.length;l++){const o=e[l];let c=a[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=a[l]=Xn(a[l]),c.el=o.el),t||ml(o,c)),c.type===At&&(c.el=o.el)}}function yr(n){const s=n.slice(),t=[0];let e,a,l,o,c;const r=n.length;for(e=0;e<r;e++){const u=n[e];if(u!==0){if(a=t[t.length-1],n[a]<u){s[e]=a,t.push(e);continue}for(l=0,o=t.length-1;l<o;)c=l+o>>1,n[t[c]]<u?l=c+1:o=c;u<n[t[l]]&&(l>0&&(s[e]=t[l-1]),t[l]=e)}}for(l=t.length,o=t[l-1];l-- >0;)t[l]=o,o=s[o];return t}const br=n=>n.__isTeleport,sn=Symbol.for("v-fgt"),At=Symbol.for("v-txt"),us=Symbol.for("v-cmt"),Lt=Symbol.for("v-stc"),Ds=[];let In=null;function V(n=!1){Ds.push(In=n?null:[])}function vr(){Ds.pop(),In=Ds[Ds.length-1]||null}let Xs=1;function na(n){Xs+=n}function jl(n){return n.dynamicChildren=Xs>0?In||bs:null,vr(),Xs>0&&In&&In.push(n),n}function Y(n,s,t,e,a,l){return jl(R(n,s,t,e,a,l,!0))}function ke(n,s,t,e,a){return jl(tn(n,s,t,e,a,!0))}function ne(n){return n?n.__v_isVNode===!0:!1}function Ns(n,s){return n.type===s.type&&n.key===s.key}const Rt="__vInternal",_l=({key:n})=>n!=null?n:null,ft=({ref:n,ref_key:s,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?an(n)||hn(n)||F(n)?{i:En,r:n,k:s,f:!!t}:n:null);function R(n,s=null,t=null,e=0,a=null,l=n===sn?0:1,o=!1,c=!1){const r={__v_isVNode:!0,__v_skip:!0,type:n,props:s,key:s&&_l(s),ref:s&&ft(s),scopeId:qt,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:e,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:En};return c?(Ee(r,t),l&128&&n.normalize(r)):t&&(r.shapeFlag|=an(t)?8:16),Xs>0&&!o&&In&&(r.patchFlag>0||l&6)&&r.patchFlag!==32&&In.push(r),r}const tn=wr;function wr(n,s=null,t=null,e=0,a=null,l=!1){if((!n||n===er)&&(n=us),ne(n)){const c=qs(n,s,!0);return t&&Ee(c,t),Xs>0&&!l&&In&&(c.shapeFlag&6?In[In.indexOf(n)]=c:In.push(c)),c.patchFlag|=-2,c}if($r(n)&&(n=n.__vccOpts),s){s=kr(s);let{class:c,style:r}=s;c&&!an(c)&&(s.class=Es(c)),nn(r)&&(Ka(r)&&!L(r)&&(r=on({},r)),s.style=Gs(r))}const o=an(n)?1:Ho(n)?128:br(n)?64:nn(n)?4:F(n)?2:0;return R(n,s,t,e,a,o,l,!0)}function kr(n){return n?Ka(n)||Rt in n?on({},n):n:null}function qs(n,s,t=!1){const{props:e,ref:a,patchFlag:l,children:o}=n,c=s?Ir(e||{},s):e;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&_l(c),ref:s&&s.ref?t&&a?L(a)?a.concat(ft(s)):[a,ft(s)]:ft(s):a,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:s&&n.type!==sn?l===-1?16:l|16:l,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&qs(n.ssContent),ssFallback:n.ssFallback&&qs(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function se(n=" ",s=0){return tn(At,null,n,s)}function Er(n="",s=!1){return s?(V(),ke(us,null,n)):tn(us,null,n)}function Ln(n){return n==null||typeof n=="boolean"?tn(us):L(n)?tn(sn,null,n.slice()):typeof n=="object"?Xn(n):tn(At,null,String(n))}function Xn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:qs(n)}function Ee(n,s){let t=0;const{shapeFlag:e}=n;if(s==null)s=null;else if(L(s))t=16;else if(typeof s=="object")if(e&65){const a=s.default;a&&(a._c&&(a._d=!1),Ee(n,a()),a._c&&(a._d=!0));return}else{t=32;const a=s._;!a&&!(Rt in s)?s._ctx=En:a===3&&En&&(En.slots._===1?s._=1:(s._=2,n.patchFlag|=1024))}else F(s)?(s={default:s,_ctx:En},t=32):(s=String(s),e&64?(t=16,s=[se(s)]):t=8);n.children=s,n.shapeFlag|=t}function Ir(...n){const s={};for(let t=0;t<n.length;t++){const e=n[t];for(const a in e)if(a==="class")s.class!==e.class&&(s.class=Es([s.class,e.class]));else if(a==="style")s.style=Gs([s.style,e.style]);else if(yt(a)){const l=s[a],o=e[a];o&&l!==o&&!(L(l)&&l.includes(o))&&(s[a]=l?[].concat(l,o):o)}else a!==""&&(s[a]=e[a])}return s}function Mn(n,s,t,e=null){Cn(n,s,7,[t,e])}const qr=pl();let Cr=0;function Ar(n,s,t){const e=n.type,a=(s?s.appContext:n.appContext)||qr,l={uid:Cr++,vnode:n,type:e,parent:s,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ql(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hl(e,a),emitsOptions:tl(e,a),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:e.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=s?s.root:l,l.emit=Lo.bind(null,l),n.ce&&n.ce(l),l}let rn=null,Ie,_s,sa="__VUE_INSTANCE_SETTERS__";(_s=Ht()[sa])||(_s=Ht()[sa]=[]),_s.push(n=>rn=n),Ie=n=>{_s.length>1?_s.forEach(s=>s(n)):_s[0](n)};const Cs=n=>{Ie(n),n.scope.on()},ps=()=>{rn&&rn.scope.off(),Ie(null)};function xl(n){return n.vnode.shapeFlag&4}let Zs=!1;function Rr(n,s=!1){Zs=s;const{props:t,children:e}=n.vnode,a=xl(n);fr(n,t,a,s),mr(n,e);const l=a?Pr(n,s):void 0;return Zs=!1,l}function Pr(n,s){const t=n.type;n.accessCache=Object.create(null),n.proxy=Wa(new Proxy(n.ctx,lr));const{setup:e}=t;if(e){const a=n.setupContext=e.length>1?Tr(n):null;Cs(n),Ss();const l=ss(e,n,0,[n.props,a]);if(Ts(),ps(),Aa(l)){if(l.then(ps,ps),s)return l.then(o=>{ta(n,o,s)}).catch(o=>{Et(o,n,0)});n.asyncDep=l}else ta(n,l,s)}else yl(n,s)}function ta(n,s,t){F(s)?n.type.__ssrInlineRender?n.ssrRender=s:n.render=s:nn(s)&&(n.setupState=Qa(s)),yl(n,t)}let ea;function yl(n,s,t){const e=n.type;if(!n.render){if(!s&&ea&&!e.render){const a=e.template||ve(n).template;if(a){const{isCustomElement:l,compilerOptions:o}=n.appContext.config,{delimiters:c,compilerOptions:r}=e,u=on(on({isCustomElement:l,delimiters:c},o),r);e.render=ea(a,u)}}n.render=e.render||qn}Cs(n),Ss(),or(n),Ts(),ps()}function Sr(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(s,t){return xn(n,"get","$attrs"),s[t]}}))}function Tr(n){const s=t=>{n.exposed=t||{}};return{get attrs(){return Sr(n)},slots:n.slots,emit:n.emit,expose:s}}function qe(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Qa(Wa(n.exposed)),{get(s,t){if(t in s)return s[t];if(t in Hs)return Hs[t](n)},has(s,t){return t in s||t in Hs}}))}function Or(n,s=!0){return F(n)?n.displayName||n.name:n.name||s&&n.__name}function $r(n){return F(n)&&"__vccOpts"in n}const bn=(n,s)=>Po(n,s,Zs);function bl(n,s,t){const e=arguments.length;return e===2?nn(s)&&!L(s)?ne(s)?tn(n,null,[s]):tn(n,s):tn(n,null,s):(e>3?t=Array.prototype.slice.call(arguments,2):e===3&&ne(t)&&(t=[t]),tn(n,s,t))}const Mr=Symbol.for("v-scx"),Lr=()=>Fn(Mr),Nr="3.3.4",Ur="http://www.w3.org/2000/svg",cs=typeof document!="undefined"?document:null,aa=cs&&cs.createElement("template"),Fr={insert:(n,s,t)=>{s.insertBefore(n,t||null)},remove:n=>{const s=n.parentNode;s&&s.removeChild(n)},createElement:(n,s,t,e)=>{const a=s?cs.createElementNS(Ur,n):cs.createElement(n,t?{is:t}:void 0);return n==="select"&&e&&e.multiple!=null&&a.setAttribute("multiple",e.multiple),a},createText:n=>cs.createTextNode(n),createComment:n=>cs.createComment(n),setText:(n,s)=>{n.nodeValue=s},setElementText:(n,s)=>{n.textContent=s},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>cs.querySelector(n),setScopeId(n,s){n.setAttribute(s,"")},insertStaticContent(n,s,t,e,a,l){const o=t?t.previousSibling:s.lastChild;if(a&&(a===l||a.nextSibling))for(;s.insertBefore(a.cloneNode(!0),t),!(a===l||!(a=a.nextSibling)););else{aa.innerHTML=e?`<svg>${n}</svg>`:n;const c=aa.content;if(e){const r=c.firstChild;for(;r.firstChild;)c.appendChild(r.firstChild);c.removeChild(r)}s.insertBefore(c,t)}return[o?o.nextSibling:s.firstChild,t?t.previousSibling:s.lastChild]}};function zr(n,s,t){const e=n._vtc;e&&(s=(s?[s,...e]:[...e]).join(" ")),s==null?n.removeAttribute("class"):t?n.setAttribute("class",s):n.className=s}function Br(n,s,t){const e=n.style,a=an(t);if(t&&!a){if(s&&!an(s))for(const l in s)t[l]==null&&te(e,l,"");for(const l in t)te(e,l,t[l])}else{const l=e.display;a?s!==t&&(e.cssText=t):s&&n.removeAttribute("style"),"_vod"in n&&(e.display=l)}}const la=/\s*!important$/;function te(n,s,t){if(L(t))t.forEach(e=>te(n,s,e));else if(t==null&&(t=""),s.startsWith("--"))n.setProperty(s,t);else{const e=Hr(n,s);la.test(t)?n.setProperty(Ps(e),t.replace(la,""),"important"):n[e]=t}}const oa=["Webkit","Moz","ms"],Nt={};function Hr(n,s){const t=Nt[s];if(t)return t;let e=zn(s);if(e!=="filter"&&e in n)return Nt[s]=e;e=wt(e);for(let a=0;a<oa.length;a++){const l=oa[a]+e;if(l in n)return Nt[s]=l}return s}const ra="http://www.w3.org/1999/xlink";function Dr(n,s,t,e,a){if(e&&s.startsWith("xlink:"))t==null?n.removeAttributeNS(ra,s.slice(6,s.length)):n.setAttributeNS(ra,s,t);else{const l=Jl(s);t==null||l&&!Sa(t)?n.removeAttribute(s):n.setAttribute(s,l?"":t)}}function Kr(n,s,t,e,a,l,o){if(s==="innerHTML"||s==="textContent"){e&&o(e,a,l),n[s]=t==null?"":t;return}const c=n.tagName;if(s==="value"&&c!=="PROGRESS"&&!c.includes("-")){n._value=t;const u=c==="OPTION"?n.getAttribute("value"):n.value,p=t==null?"":t;u!==p&&(n.value=p),t==null&&n.removeAttribute(s);return}let r=!1;if(t===""||t==null){const u=typeof n[s];u==="boolean"?t=Sa(t):t==null&&u==="string"?(t="",r=!0):u==="number"&&(t=0,r=!0)}try{n[s]=t}catch{}r&&n.removeAttribute(s)}function Wr(n,s,t,e){n.addEventListener(s,t,e)}function Vr(n,s,t,e){n.removeEventListener(s,t,e)}function Gr(n,s,t,e,a=null){const l=n._vei||(n._vei={}),o=l[s];if(e&&o)o.value=e;else{const[c,r]=Jr(s);if(e){const u=l[s]=Xr(e,a);Wr(n,c,u,r)}else o&&(Vr(n,c,o,r),l[s]=void 0)}}const ca=/(?:Once|Passive|Capture)$/;function Jr(n){let s;if(ca.test(n)){s={};let e;for(;e=n.match(ca);)n=n.slice(0,n.length-e[0].length),s[e[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ps(n.slice(2)),s]}let Ut=0;const Qr=Promise.resolve(),Yr=()=>Ut||(Qr.then(()=>Ut=0),Ut=Date.now());function Xr(n,s){const t=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=t.attached)return;Cn(Zr(e,t.value),s,5,[e])};return t.value=n,t.attached=Yr(),t}function Zr(n,s){if(L(s)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},s.map(e=>a=>!a._stopped&&e&&e(a))}else return s}const ia=/^on[a-z]/,nc=(n,s,t,e,a=!1,l,o,c,r)=>{s==="class"?zr(n,e,a):s==="style"?Br(n,t,e):yt(s)?re(s)||Gr(n,s,t,e,o):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):sc(n,s,e,a))?Kr(n,s,e,l,o,c,r):(s==="true-value"?n._trueValue=e:s==="false-value"&&(n._falseValue=e),Dr(n,s,e,a))};function sc(n,s,t,e){return e?!!(s==="innerHTML"||s==="textContent"||s in n&&ia.test(s)&&F(t)):s==="spellcheck"||s==="draggable"||s==="translate"||s==="form"||s==="list"&&n.tagName==="INPUT"||s==="type"&&n.tagName==="TEXTAREA"||ia.test(s)&&an(t)?!1:s in n}const tc=on({patchProp:nc},Fr);let pa;function ec(){return pa||(pa=_r(tc))}const ac=(...n)=>{const s=ec().createApp(...n),{mount:t}=s;return s.mount=e=>{const a=lc(e);if(!a)return;const l=s._component;!F(l)&&!l.render&&!l.template&&(l.template=a.innerHTML),a.innerHTML="";const o=t(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},s};function lc(n){return an(n)?document.querySelector(n):n}var Rn=(n,s)=>{const t=n.__vccOpts||n;for(const[e,a]of s)t[e]=a;return t};const oc={};function rc(n,s){const t=cl("router-view");return V(),ke(t)}var cc=Rn(oc,[["render",rc]]);/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const xs=typeof window!="undefined";function ic(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const G=Object.assign;function Ft(n,s){const t={};for(const e in s){const a=s[e];t[e]=An(a)?a.map(n):n(a)}return t}const Ks=()=>{},An=Array.isArray,pc=/\/$/,uc=n=>n.replace(pc,"");function zt(n,s,t="/"){let e,a={},l="",o="";const c=s.indexOf("#");let r=s.indexOf("?");return c<r&&c>=0&&(r=-1),r>-1&&(e=s.slice(0,r),l=s.slice(r+1,c>-1?c:s.length),a=n(l)),c>-1&&(e=e||s.slice(0,c),o=s.slice(c,s.length)),e=gc(e!=null?e:s,t),{fullPath:e+(l&&"?")+l+o,path:e,query:a,hash:o}}function hc(n,s){const t=s.query?n(s.query):"";return s.path+(t&&"?")+t+(s.hash||"")}function ua(n,s){return!s||!n.toLowerCase().startsWith(s.toLowerCase())?n:n.slice(s.length)||"/"}function fc(n,s,t){const e=s.matched.length-1,a=t.matched.length-1;return e>-1&&e===a&&As(s.matched[e],t.matched[a])&&vl(s.params,t.params)&&n(s.query)===n(t.query)&&s.hash===t.hash}function As(n,s){return(n.aliasOf||n)===(s.aliasOf||s)}function vl(n,s){if(Object.keys(n).length!==Object.keys(s).length)return!1;for(const t in n)if(!dc(n[t],s[t]))return!1;return!0}function dc(n,s){return An(n)?ha(n,s):An(s)?ha(s,n):n===s}function ha(n,s){return An(s)?n.length===s.length&&n.every((t,e)=>t===s[e]):n.length===1&&n[0]===s}function gc(n,s){if(n.startsWith("/"))return n;if(!n)return s;const t=s.split("/"),e=n.split("/"),a=e[e.length-1];(a===".."||a===".")&&e.push("");let l=t.length-1,o,c;for(o=0;o<e.length;o++)if(c=e[o],c!==".")if(c==="..")l>1&&l--;else break;return t.slice(0,l).join("/")+"/"+e.slice(o-(o===e.length?1:0)).join("/")}var nt;(function(n){n.pop="pop",n.push="push"})(nt||(nt={}));var Ws;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ws||(Ws={}));function mc(n){if(!n)if(xs){const s=document.querySelector("base");n=s&&s.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),uc(n)}const jc=/^[^#]+#/;function _c(n,s){return n.replace(jc,"#")+s}function xc(n,s){const t=document.documentElement.getBoundingClientRect(),e=n.getBoundingClientRect();return{behavior:s.behavior,left:e.left-t.left-(s.left||0),top:e.top-t.top-(s.top||0)}}const Pt=()=>({left:window.pageXOffset,top:window.pageYOffset});function yc(n){let s;if("el"in n){const t=n.el,e=typeof t=="string"&&t.startsWith("#"),a=typeof t=="string"?e?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!a)return;s=xc(a,n)}else s=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(s):window.scrollTo(s.left!=null?s.left:window.pageXOffset,s.top!=null?s.top:window.pageYOffset)}function fa(n,s){return(history.state?history.state.position-s:-1)+n}const ee=new Map;function bc(n,s){ee.set(n,s)}function vc(n){const s=ee.get(n);return ee.delete(n),s}let wc=()=>location.protocol+"//"+location.host;function wl(n,s){const{pathname:t,search:e,hash:a}=s,l=n.indexOf("#");if(l>-1){let c=a.includes(n.slice(l))?n.slice(l).length:1,r=a.slice(c);return r[0]!=="/"&&(r="/"+r),ua(r,"")}return ua(t,n)+e+a}function kc(n,s,t,e){let a=[],l=[],o=null;const c=({state:g})=>{const b=wl(n,location),C=t.value,P=s.value;let U=0;if(g){if(t.value=b,s.value=g,o&&o===C){o=null;return}U=P?g.position-P.position:0}else e(b);a.forEach(O=>{O(t.value,C,{delta:U,type:nt.pop,direction:U?U>0?Ws.forward:Ws.back:Ws.unknown})})};function r(){o=t.value}function u(g){a.push(g);const b=()=>{const C=a.indexOf(g);C>-1&&a.splice(C,1)};return l.push(b),b}function p(){const{history:g}=window;!g.state||g.replaceState(G({},g.state,{scroll:Pt()}),"")}function d(){for(const g of l)g();l=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:r,listen:u,destroy:d}}function da(n,s,t,e=!1,a=!1){return{back:n,current:s,forward:t,replaced:e,position:window.history.length,scroll:a?Pt():null}}function Ec(n){const{history:s,location:t}=window,e={value:wl(n,t)},a={value:s.state};a.value||l(e.value,{back:null,current:e.value,forward:null,position:s.length-1,replaced:!0,scroll:null},!0);function l(r,u,p){const d=n.indexOf("#"),g=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+r:wc()+n+r;try{s[p?"replaceState":"pushState"](u,"",g),a.value=u}catch(b){console.error(b),t[p?"replace":"assign"](g)}}function o(r,u){const p=G({},s.state,da(a.value.back,r,a.value.forward,!0),u,{position:a.value.position});l(r,p,!0),e.value=r}function c(r,u){const p=G({},a.value,s.state,{forward:r,scroll:Pt()});l(p.current,p,!0);const d=G({},da(e.value,r,null),{position:p.position+1},u);l(r,d,!1),e.value=r}return{location:e,state:a,push:c,replace:o}}function Ic(n){n=mc(n);const s=Ec(n),t=kc(n,s.state,s.location,s.replace);function e(l,o=!0){o||t.pauseListeners(),history.go(l)}const a=G({location:"",base:n,go:e,createHref:_c.bind(null,n)},s,t);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>s.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>s.state.value}),a}function qc(n){return typeof n=="string"||n&&typeof n=="object"}function kl(n){return typeof n=="string"||typeof n=="symbol"}const Yn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},El=Symbol("");var ga;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(ga||(ga={}));function Rs(n,s){return G(new Error,{type:n,[El]:!0},s)}function Dn(n,s){return n instanceof Error&&El in n&&(s==null||!!(n.type&s))}const ma="[^/]+?",Cc={sensitive:!1,strict:!1,start:!0,end:!0},Ac=/[.+*?^${}()[\]/\\]/g;function Rc(n,s){const t=G({},Cc,s),e=[];let a=t.start?"^":"";const l=[];for(const u of n){const p=u.length?[]:[90];t.strict&&!u.length&&(a+="/");for(let d=0;d<u.length;d++){const g=u[d];let b=40+(t.sensitive?.25:0);if(g.type===0)d||(a+="/"),a+=g.value.replace(Ac,"\\$&"),b+=40;else if(g.type===1){const{value:C,repeatable:P,optional:U,regexp:O}=g;l.push({name:C,repeatable:P,optional:U});const $=O||ma;if($!==ma){b+=10;try{new RegExp(`(${$})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${C}" (${$}): `+M.message)}}let H=P?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;d||(H=U&&u.length<2?`(?:/${H})`:"/"+H),U&&(H+="?"),a+=H,b+=20,U&&(b+=-8),P&&(b+=-20),$===".*"&&(b+=-50)}p.push(b)}e.push(p)}if(t.strict&&t.end){const u=e.length-1;e[u][e[u].length-1]+=.7000000000000001}t.strict||(a+="/?"),t.end?a+="$":t.strict&&(a+="(?:/|$)");const o=new RegExp(a,t.sensitive?"":"i");function c(u){const p=u.match(o),d={};if(!p)return null;for(let g=1;g<p.length;g++){const b=p[g]||"",C=l[g-1];d[C.name]=b&&C.repeatable?b.split("/"):b}return d}function r(u){let p="",d=!1;for(const g of n){(!d||!p.endsWith("/"))&&(p+="/"),d=!1;for(const b of g)if(b.type===0)p+=b.value;else if(b.type===1){const{value:C,repeatable:P,optional:U}=b,O=C in u?u[C]:"";if(An(O)&&!P)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const $=An(O)?O.join("/"):O;if(!$)if(U)g.length<2&&(p.endsWith("/")?p=p.slice(0,-1):d=!0);else throw new Error(`Missing required param "${C}"`);p+=$}}return p||"/"}return{re:o,score:e,keys:l,parse:c,stringify:r}}function Pc(n,s){let t=0;for(;t<n.length&&t<s.length;){const e=s[t]-n[t];if(e)return e;t++}return n.length<s.length?n.length===1&&n[0]===40+40?-1:1:n.length>s.length?s.length===1&&s[0]===40+40?1:-1:0}function Sc(n,s){let t=0;const e=n.score,a=s.score;for(;t<e.length&&t<a.length;){const l=Pc(e[t],a[t]);if(l)return l;t++}if(Math.abs(a.length-e.length)===1){if(ja(e))return 1;if(ja(a))return-1}return a.length-e.length}function ja(n){const s=n[n.length-1];return n.length>0&&s[s.length-1]<0}const Tc={type:0,value:""},Oc=/[a-zA-Z0-9_]/;function $c(n){if(!n)return[[]];if(n==="/")return[[Tc]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function s(b){throw new Error(`ERR (${t})/"${u}": ${b}`)}let t=0,e=t;const a=[];let l;function o(){l&&a.push(l),l=[]}let c=0,r,u="",p="";function d(){!u||(t===0?l.push({type:0,value:u}):t===1||t===2||t===3?(l.length>1&&(r==="*"||r==="+")&&s(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:p,repeatable:r==="*"||r==="+",optional:r==="*"||r==="?"})):s("Invalid state to consume buffer"),u="")}function g(){u+=r}for(;c<n.length;){if(r=n[c++],r==="\\"&&t!==2){e=t,t=4;continue}switch(t){case 0:r==="/"?(u&&d(),o()):r===":"?(d(),t=1):g();break;case 4:g(),t=e;break;case 1:r==="("?t=2:Oc.test(r)?g():(d(),t=0,r!=="*"&&r!=="?"&&r!=="+"&&c--);break;case 2:r===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+r:t=3:p+=r;break;case 3:d(),t=0,r!=="*"&&r!=="?"&&r!=="+"&&c--,p="";break;default:s("Unknown state");break}}return t===2&&s(`Unfinished custom RegExp for param "${u}"`),d(),o(),a}function Mc(n,s,t){const e=Rc($c(n.path),t),a=G(e,{record:n,parent:s,children:[],alias:[]});return s&&!a.record.aliasOf==!s.record.aliasOf&&s.children.push(a),a}function Lc(n,s){const t=[],e=new Map;s=ya({strict:!1,end:!0,sensitive:!1},s);function a(p){return e.get(p)}function l(p,d,g){const b=!g,C=Nc(p);C.aliasOf=g&&g.record;const P=ya(s,p),U=[C];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const M of H)U.push(G({},C,{components:g?g.record.components:C.components,path:M,aliasOf:g?g.record:C}))}let O,$;for(const H of U){const{path:M}=H;if(d&&M[0]!=="/"){const cn=d.record.path,fn=cn[cn.length-1]==="/"?"":"/";H.path=d.record.path+(M&&fn+M)}if(O=Mc(H,d,P),g?g.alias.push(O):($=$||O,$!==O&&$.alias.push(O),b&&p.name&&!xa(O)&&o(p.name)),C.children){const cn=C.children;for(let fn=0;fn<cn.length;fn++)l(cn[fn],O,g&&g.children[fn])}g=g||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&r(O)}return $?()=>{o($)}:Ks}function o(p){if(kl(p)){const d=e.get(p);d&&(e.delete(p),t.splice(t.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=t.indexOf(p);d>-1&&(t.splice(d,1),p.record.name&&e.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return t}function r(p){let d=0;for(;d<t.length&&Sc(p,t[d])>=0&&(p.record.path!==t[d].record.path||!Il(p,t[d]));)d++;t.splice(d,0,p),p.record.name&&!xa(p)&&e.set(p.record.name,p)}function u(p,d){let g,b={},C,P;if("name"in p&&p.name){if(g=e.get(p.name),!g)throw Rs(1,{location:p});P=g.record.name,b=G(_a(d.params,g.keys.filter($=>!$.optional).map($=>$.name)),p.params&&_a(p.params,g.keys.map($=>$.name))),C=g.stringify(b)}else if("path"in p)C=p.path,g=t.find($=>$.re.test(C)),g&&(b=g.parse(C),P=g.record.name);else{if(g=d.name?e.get(d.name):t.find($=>$.re.test(d.path)),!g)throw Rs(1,{location:p,currentLocation:d});P=g.record.name,b=G({},d.params,p.params),C=g.stringify(b)}const U=[];let O=g;for(;O;)U.unshift(O.record),O=O.parent;return{name:P,path:C,params:b,matched:U,meta:Fc(U)}}return n.forEach(p=>l(p)),{addRoute:l,resolve:u,removeRoute:o,getRoutes:c,getRecordMatcher:a}}function _a(n,s){const t={};for(const e of s)e in n&&(t[e]=n[e]);return t}function Nc(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Uc(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Uc(n){const s={},t=n.props||!1;if("component"in n)s.default=t;else for(const e in n.components)s[e]=typeof t=="boolean"?t:t[e];return s}function xa(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Fc(n){return n.reduce((s,t)=>G(s,t.meta),{})}function ya(n,s){const t={};for(const e in n)t[e]=e in s?s[e]:n[e];return t}function Il(n,s){return s.children.some(t=>t===n||Il(n,t))}const ql=/#/g,zc=/&/g,Bc=/\//g,Hc=/=/g,Dc=/\?/g,Cl=/\+/g,Kc=/%5B/g,Wc=/%5D/g,Al=/%5E/g,Vc=/%60/g,Rl=/%7B/g,Gc=/%7C/g,Pl=/%7D/g,Jc=/%20/g;function Ce(n){return encodeURI(""+n).replace(Gc,"|").replace(Kc,"[").replace(Wc,"]")}function Qc(n){return Ce(n).replace(Rl,"{").replace(Pl,"}").replace(Al,"^")}function ae(n){return Ce(n).replace(Cl,"%2B").replace(Jc,"+").replace(ql,"%23").replace(zc,"%26").replace(Vc,"`").replace(Rl,"{").replace(Pl,"}").replace(Al,"^")}function Yc(n){return ae(n).replace(Hc,"%3D")}function Xc(n){return Ce(n).replace(ql,"%23").replace(Dc,"%3F")}function Zc(n){return n==null?"":Xc(n).replace(Bc,"%2F")}function xt(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function ni(n){const s={};if(n===""||n==="?")return s;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let a=0;a<e.length;++a){const l=e[a].replace(Cl," "),o=l.indexOf("="),c=xt(o<0?l:l.slice(0,o)),r=o<0?null:xt(l.slice(o+1));if(c in s){let u=s[c];An(u)||(u=s[c]=[u]),u.push(r)}else s[c]=r}return s}function ba(n){let s="";for(let t in n){const e=n[t];if(t=Yc(t),e==null){e!==void 0&&(s+=(s.length?"&":"")+t);continue}(An(e)?e.map(l=>l&&ae(l)):[e&&ae(e)]).forEach(l=>{l!==void 0&&(s+=(s.length?"&":"")+t,l!=null&&(s+="="+l))})}return s}function si(n){const s={};for(const t in n){const e=n[t];e!==void 0&&(s[t]=An(e)?e.map(a=>a==null?null:""+a):e==null?e:""+e)}return s}const ti=Symbol(""),va=Symbol(""),Ae=Symbol(""),Re=Symbol(""),le=Symbol("");function Us(){let n=[];function s(e){return n.push(e),()=>{const a=n.indexOf(e);a>-1&&n.splice(a,1)}}function t(){n=[]}return{add:s,list:()=>n,reset:t}}function Zn(n,s,t,e,a){const l=e&&(e.enterCallbacks[a]=e.enterCallbacks[a]||[]);return()=>new Promise((o,c)=>{const r=d=>{d===!1?c(Rs(4,{from:t,to:s})):d instanceof Error?c(d):qc(d)?c(Rs(2,{from:s,to:d})):(l&&e.enterCallbacks[a]===l&&typeof d=="function"&&l.push(d),o())},u=n.call(e&&e.instances[a],s,t,r);let p=Promise.resolve(u);n.length<3&&(p=p.then(r)),p.catch(d=>c(d))})}function Bt(n,s,t,e){const a=[];for(const l of n)for(const o in l.components){let c=l.components[o];if(!(s!=="beforeRouteEnter"&&!l.instances[o]))if(ei(c)){const u=(c.__vccOpts||c)[s];u&&a.push(Zn(u,t,e,l,o))}else{let r=c();a.push(()=>r.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${l.path}"`));const p=ic(u)?u.default:u;l.components[o]=p;const g=(p.__vccOpts||p)[s];return g&&Zn(g,t,e,l,o)()}))}}return a}function ei(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function wa(n){const s=Fn(Ae),t=Fn(Re),e=bn(()=>s.resolve(Un(n.to))),a=bn(()=>{const{matched:r}=e.value,{length:u}=r,p=r[u-1],d=t.matched;if(!p||!d.length)return-1;const g=d.findIndex(As.bind(null,p));if(g>-1)return g;const b=ka(r[u-2]);return u>1&&ka(p)===b&&d[d.length-1].path!==b?d.findIndex(As.bind(null,r[u-2])):g}),l=bn(()=>a.value>-1&&ri(t.params,e.value.params)),o=bn(()=>a.value>-1&&a.value===t.matched.length-1&&vl(t.params,e.value.params));function c(r={}){return oi(r)?s[Un(n.replace)?"replace":"push"](Un(n.to)).catch(Ks):Promise.resolve()}return{route:e,href:bn(()=>e.value.href),isActive:l,isExactActive:o,navigate:c}}const ai=ye({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wa,setup(n,{slots:s}){const t=st(wa(n)),{options:e}=Fn(Ae),a=bn(()=>({[Ea(n.activeClass,e.linkActiveClass,"router-link-active")]:t.isActive,[Ea(n.exactActiveClass,e.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const l=s.default&&s.default(t);return n.custom?l:bl("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:a.value},l)}}}),li=ai;function oi(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const s=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(s))return}return n.preventDefault&&n.preventDefault(),!0}}function ri(n,s){for(const t in s){const e=s[t],a=n[t];if(typeof e=="string"){if(e!==a)return!1}else if(!An(a)||a.length!==e.length||e.some((l,o)=>l!==a[o]))return!1}return!0}function ka(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Ea=(n,s,t)=>n!=null?n:s!=null?s:t,ci=ye({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:s,slots:t}){const e=Fn(le),a=bn(()=>n.route||e.value),l=Fn(va,0),o=bn(()=>{let u=Un(l);const{matched:p}=a.value;let d;for(;(d=p[u])&&!d.components;)u++;return u}),c=bn(()=>a.value.matched[o.value]);ht(va,bn(()=>o.value+1)),ht(ti,c),ht(le,a);const r=_n();return Bs(()=>[r.value,c.value,n.name],([u,p,d],[g,b,C])=>{p&&(p.instances[d]=u,b&&b!==p&&u&&u===g&&(p.leaveGuards.size||(p.leaveGuards=b.leaveGuards),p.updateGuards.size||(p.updateGuards=b.updateGuards))),u&&p&&(!b||!As(p,b)||!g)&&(p.enterCallbacks[d]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=a.value,p=n.name,d=c.value,g=d&&d.components[p];if(!g)return Ia(t.default,{Component:g,route:u});const b=d.props[p],C=b?b===!0?u.params:typeof b=="function"?b(u):b:null,U=bl(g,G({},C,s,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(d.instances[p]=null)},ref:r}));return Ia(t.default,{Component:U,route:u})||U}}});function Ia(n,s){if(!n)return null;const t=n(s);return t.length===1?t[0]:t}const ii=ci;function pi(n){const s=Lc(n.routes,n),t=n.parseQuery||ni,e=n.stringifyQuery||ba,a=n.history,l=Us(),o=Us(),c=Us(),r=qo(Yn);let u=Yn;xs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Ft.bind(null,j=>""+j),d=Ft.bind(null,Zc),g=Ft.bind(null,xt);function b(j,I){let k,A;return kl(j)?(k=s.getRecordMatcher(j),A=I):A=j,s.addRoute(A,k)}function C(j){const I=s.getRecordMatcher(j);I&&s.removeRoute(I)}function P(){return s.getRoutes().map(j=>j.record)}function U(j){return!!s.getRecordMatcher(j)}function O(j,I){if(I=G({},I||r.value),typeof j=="string"){const f=zt(t,j,I.path),m=s.resolve({path:f.path},I),_=a.createHref(f.fullPath);return G(f,m,{params:g(m.params),hash:xt(f.hash),redirectedFrom:void 0,href:_})}let k;if("path"in j)k=G({},j,{path:zt(t,j.path,I.path).path});else{const f=G({},j.params);for(const m in f)f[m]==null&&delete f[m];k=G({},j,{params:d(f)}),I.params=d(I.params)}const A=s.resolve(k,I),W=j.hash||"";A.params=p(g(A.params));const i=hc(e,G({},j,{hash:Qc(W),path:A.path})),h=a.createHref(i);return G({fullPath:i,hash:W,query:e===ba?si(j.query):j.query||{}},A,{redirectedFrom:void 0,href:h})}function $(j){return typeof j=="string"?zt(t,j,r.value.path):G({},j)}function H(j,I){if(u!==j)return Rs(8,{from:I,to:j})}function M(j){return Pn(j)}function cn(j){return M(G($(j),{replace:!0}))}function fn(j){const I=j.matched[j.matched.length-1];if(I&&I.redirect){const{redirect:k}=I;let A=typeof k=="function"?k(j):k;return typeof A=="string"&&(A=A.includes("?")||A.includes("#")?A=$(A):{path:A},A.params={}),G({query:j.query,hash:j.hash,params:"path"in A?{}:j.params},A)}}function Pn(j,I){const k=u=O(j),A=r.value,W=j.state,i=j.force,h=j.replace===!0,f=fn(k);if(f)return Pn(G($(f),{state:typeof f=="object"?G({},W,f.state):W,force:i,replace:h}),I||k);const m=k;m.redirectedFrom=I;let _;return!i&&fc(e,A,k)&&(_=Rs(16,{to:m,from:A}),On(A,A,!0,!1)),(_?Promise.resolve(_):Sn(m,A)).catch(x=>Dn(x)?Dn(x,2)?x:Jn(x):K(x,m,A)).then(x=>{if(x){if(Dn(x,2))return Pn(G({replace:h},$(x.to),{state:typeof x.to=="object"?G({},W,x.to.state):W,force:i}),I||m)}else x=as(m,A,!0,h,W);return Gn(m,A,x),x})}function Bn(j,I){const k=H(j,I);return k?Promise.reject(k):Promise.resolve()}function fs(j){const I=ms.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(j):j()}function Sn(j,I){let k;const[A,W,i]=ui(j,I);k=Bt(A.reverse(),"beforeRouteLeave",j,I);for(const f of A)f.leaveGuards.forEach(m=>{k.push(Zn(m,j,I))});const h=Bn.bind(null,j,I);return k.push(h),pn(k).then(()=>{k=[];for(const f of l.list())k.push(Zn(f,j,I));return k.push(h),pn(k)}).then(()=>{k=Bt(W,"beforeRouteUpdate",j,I);for(const f of W)f.updateGuards.forEach(m=>{k.push(Zn(m,j,I))});return k.push(h),pn(k)}).then(()=>{k=[];for(const f of j.matched)if(f.beforeEnter&&!I.matched.includes(f))if(An(f.beforeEnter))for(const m of f.beforeEnter)k.push(Zn(m,j,I));else k.push(Zn(f.beforeEnter,j,I));return k.push(h),pn(k)}).then(()=>(j.matched.forEach(f=>f.enterCallbacks={}),k=Bt(i,"beforeRouteEnter",j,I),k.push(h),pn(k))).then(()=>{k=[];for(const f of o.list())k.push(Zn(f,j,I));return k.push(h),pn(k)}).catch(f=>Dn(f,8)?f:Promise.reject(f))}function Gn(j,I,k){for(const A of c.list())fs(()=>A(j,I,k))}function as(j,I,k,A,W){const i=H(j,I);if(i)return i;const h=I===Yn,f=xs?history.state:{};k&&(A||h?a.replace(j.fullPath,G({scroll:h&&f&&f.scroll},W)):a.push(j.fullPath,W)),r.value=j,On(j,I,k,h),Jn()}let Tn;function Ms(){Tn||(Tn=a.listen((j,I,k)=>{if(!et.listening)return;const A=O(j),W=fn(A);if(W){Pn(G(W,{replace:!0}),A).catch(Ks);return}u=A;const i=r.value;xs&&bc(fa(i.fullPath,k.delta),Pt()),Sn(A,i).catch(h=>Dn(h,12)?h:Dn(h,2)?(Pn(h.to,A).then(f=>{Dn(f,20)&&!k.delta&&k.type===nt.pop&&a.go(-1,!1)}).catch(Ks),Promise.reject()):(k.delta&&a.go(-k.delta,!1),K(h,A,i))).then(h=>{h=h||as(A,i,!1),h&&(k.delta&&!Dn(h,8)?a.go(-k.delta,!1):k.type===nt.pop&&Dn(h,20)&&a.go(-1,!1)),Gn(A,i,h)}).catch(Ks)}))}let ds=Us(),ln=Us(),Q;function K(j,I,k){Jn(j);const A=ln.list();return A.length?A.forEach(W=>W(j,I,k)):console.error(j),Promise.reject(j)}function Hn(){return Q&&r.value!==Yn?Promise.resolve():new Promise((j,I)=>{ds.add([j,I])})}function Jn(j){return Q||(Q=!j,Ms(),ds.list().forEach(([I,k])=>j?k(j):I()),ds.reset()),j}function On(j,I,k,A){const{scrollBehavior:W}=n;if(!xs||!W)return Promise.resolve();const i=!k&&vc(fa(j.fullPath,0))||(A||!k)&&history.state&&history.state.scroll||null;return Xa().then(()=>W(j,I,i)).then(h=>h&&yc(h)).catch(h=>K(h,j,I))}const mn=j=>a.go(j);let gs;const ms=new Set,et={currentRoute:r,listening:!0,addRoute:b,removeRoute:C,hasRoute:U,getRoutes:P,resolve:O,options:n,push:M,replace:cn,go:mn,back:()=>mn(-1),forward:()=>mn(1),beforeEach:l.add,beforeResolve:o.add,afterEach:c.add,onError:ln.add,isReady:Hn,install(j){const I=this;j.component("RouterLink",li),j.component("RouterView",ii),j.config.globalProperties.$router=I,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>Un(r)}),xs&&!gs&&r.value===Yn&&(gs=!0,M(a.location).catch(W=>{}));const k={};for(const W in Yn)k[W]=bn(()=>r.value[W]);j.provide(Ae,I),j.provide(Re,st(k)),j.provide(le,r);const A=j.unmount;ms.add(j),j.unmount=function(){ms.delete(j),ms.size<1&&(u=Yn,Tn&&Tn(),Tn=null,r.value=Yn,gs=!1,Q=!1),A()}}};function pn(j){return j.reduce((I,k)=>I.then(()=>fs(k)),Promise.resolve())}return et}function ui(n,s){const t=[],e=[],a=[],l=Math.max(s.matched.length,n.matched.length);for(let o=0;o<l;o++){const c=s.matched[o];c&&(n.matched.find(u=>As(u,c))?e.push(c):t.push(c));const r=n.matched[o];r&&(s.matched.find(u=>As(u,r))||a.push(r))}return[t,e,a]}function tt(){return Fn(Re)}var hi="/assets/close.32d69e24.svg",fi="/assets/more.2b04406d.svg";function di(n,s){let t;return function(e){t&&clearTimeout(t),t=setTimeout(()=>{n(e)},s)}}const gi=n=>(Os("data-v-3c3845c0"),n=n(),$s(),n),mi={class:"header-container"},ji=gi(()=>R("h1",{class:"logo"},[R("a",{href:"/"},"\u65E7\u68A6")],-1)),_i={class:"nav"},xi=["onClick"],yi=["href"],bi={key:0,src:hi},vi={key:1,src:fi},wi={class:"main-container"},ki={class:"main"},Ei={class:"mobile-menus-container"},Ii={class:"navbar-links"},qi=["href"],Ci={__name:"page-layout",setup(n){const s=tt(),t=_n(""),e=[{name:"\u5206\u7C7B",link:"/article-category/Git"},{name:"\u5F52\u6863",link:"/article-archive"},{name:"\u53CB\u94FE",link:"/friend-links"},{name:"\u5173\u4E8E",link:"/custom/about"}],a=_n(!1),l=di(()=>{window.innerWidth>768&&o()},300);function o(){a.value=!1}return hs(()=>{t.value=s.path,window.addEventListener("resize",l)}),be(()=>{window.removeEventListener("resize",l)}),(c,r)=>{const u=cl("router-view");return V(),Y("div",{class:Es(["index-container",{active:a.value}])},[R("div",mi,[R("header",null,[ji,R("ul",_i,[(V(),Y(sn,null,es(e,p=>R("li",{class:Es(["nav-item",{active:t.value===p.link}]),key:p.link,onClick:d=>t.value=p.link},[R("a",{href:p.link},gn(p.name),9,yi)],10,xi)),64)),R("div",{class:"toggle-menus",onClick:r[0]||(r[0]=p=>a.value=!a.value)},[a.value?(V(),Y("img",bi)):(V(),Y("img",vi))])])])]),R("div",wi,[R("div",ki,[tn(u)])]),R("div",Ei,[R("nav",Ii,[(V(),Y(sn,null,es(e,p=>R("div",{class:"navbar-links__item",key:p.link},[R("a",{href:p.link,onClick:o},gn(p.name),9,qi)])),64))])])],2)}}};var Ai=Rn(Ci,[["__scopeId","data-v-3c3845c0"]]),St=[{name:"git-base",title:"Git\u57FA\u672C\u64CD\u4F5C",date:"Aug 11, 2021",category:["Git"],content:`<h3>\u521B\u5EFA\u4ED3\u5E93</h3>
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

`}];const Ri={class:"pagination-container"},Pi={class:"page-index"},Si={__name:"pagination",props:{pageIndex:Number,pageSize:Number,length:Number},emits:["pageChange"],setup(n,{emit:s}){const t=n;function e(){const l=t.pageIndex-1;s("pageChange",{pageIndex:l})}function a(){const l=t.pageIndex+1;s("pageChange",{pageIndex:l})}return(l,o)=>(V(),Y("div",Ri,[R("a",{style:Gs({visibility:n.pageIndex>1?"visible":"hidden"}),class:"arrow",onClick:o[0]||(o[0]=c=>e())}," \u2190 \u4E0A\u4E00\u9875 ",4),R("span",Pi,gn(n.pageIndex),1),R("a",{style:Gs({visibility:n.pageIndex*n.pageSize<n.length?"visible":"hidden"}),class:"arrow",onClick:o[1]||(o[1]=c=>a())}," \u4E0B\u4E00\u9875 \u2192 ",4)]))}};const Sl=n=>(Os("data-v-3fef2317"),n=n(),$s(),n),Ti={class:"footer-container"},Oi=Sl(()=>R("div",{class:"site-pv"},[R("span",{id:"busuanzi_container_site_pv"},[se(" \u672C\u7AD9\u603B\u8BBF\u95EE\u91CF"),R("span",{id:"busuanzi_value_site_pv"}),se("\u6B21 ")])],-1)),$i=Sl(()=>R("div",{class:"tip"},"\u7AD9\u70B9\u6301\u7EED\u4F18\u5316\u4E2D...",-1)),Mi={__name:"footer",setup(n){const s=new Date().getFullYear();return(t,e)=>(V(),Y("div",Ti,[R("div",null,"\xA9 2021-"+gn(Un(s))+" | \u65E7\u68A6",1),Oi,$i]))}};var Pe=Rn(Mi,[["__scopeId","data-v-3fef2317"]]);const Li=n=>(Os("data-v-585ba1ea"),n=n(),$s(),n),Ni={class:"home-container"},Ui={class:"article-time"},Fi={class:"article-title"},zi=["href"],Bi=Li(()=>R("div",{class:"article-line"},null,-1)),Hi=["innerHTML"],Di={__name:"article-list",setup(n){const s=St.sort((r,u)=>new Date(u.date).getTime()-new Date(r.date).getTime()),t=_n(s),e=tt(),a=_n(1),l=_n(5);Bs(()=>e.params.page,r=>{a.value=+r||1,c()},{immediate:!0});function o(r){const{pageIndex:u}=r;location.href=`/article-list/${u}`}function c(){const r=a.value,u=l.value,p=(r-1)*u,d=p+u;t.value=s.slice(p,d)}return(r,u)=>(V(),Y("div",Ni,[(V(!0),Y(sn,null,es(t.value,p=>(V(),Y("div",{class:"article-item",key:p.name},[R("time",Ui,gn(p.date),1),R("h2",Fi,[R("a",{href:"/article-detail/"+p.name},gn(p.title),9,zi)]),Bi,R("div",{class:"abstract",innerHTML:p.abstract},null,8,Hi)]))),128)),tn(Si,{"page-index":a.value,"onUpdate:pageIndex":u[0]||(u[0]=p=>a.value=p),"page-size":l.value,length:Un(s).length,onPageChange:o},null,8,["page-index","page-size","length"]),tn(Pe)]))}};var Ki=Rn(Di,[["__scopeId","data-v-585ba1ea"]]);const Wi="modulepreload",qa={},Vi="/",Gi=function(s,t){return!t||t.length===0?s():Promise.all(t.map(e=>{if(e=`${Vi}${e}`,e in qa)return;qa[e]=!0;const a=e.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${l}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":Wi,a||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),a)return new Promise((c,r)=>{o.addEventListener("load",c),o.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s())},Ji=["id","host","repo","repoid","category","categoryid","mapping","term","strict","reactionsenabled","emitmetadata","inputposition","theme","lang","loading"],Qi=ye({__name:"Giscus",props:{id:null,host:null,repo:null,repoId:null,category:null,categoryId:null,mapping:null,term:null,theme:null,strict:null,reactionsEnabled:null,emitMetadata:null,inputPosition:null,lang:null,loading:null},setup(n){const s=_n(!1);return hs(()=>{s.value=!0,Gi(()=>import("./giscus-a53917f0.a14eedf1.js"),[])}),(t,e)=>s.value?(V(),Y("giscus-widget",{key:0,id:n.id,host:n.host,repo:n.repo,repoid:n.repoId,category:n.category,categoryid:n.categoryId,mapping:n.mapping,term:n.term,strict:n.strict,reactionsenabled:n.reactionsEnabled,emitmetadata:n.emitMetadata,inputposition:n.inputPosition,theme:n.theme,lang:n.lang,loading:n.loading},null,8,Ji)):Er("",!0)}}),Tl={__name:"comment",setup(n){return(s,t)=>(V(),ke(Un(Qi),{id:"comments",repo:"hai-zou/poseidon",repoId:"R_kgDOIPqaJQ",category:"General",categoryId:"DIC_kwDOIPqaJc4CW4xW",mapping:"pathname",term:"Welcome to component!",inputPosition:"top",theme:"light",lang:"zh-CN",loading:"lazy"}))}};var Yi="/assets/view.3e5c4e53.svg";const Xi={},Ol=n=>(Os("data-v-11513e0f"),n=n(),$s(),n),Zi={id:"busuanzi_container_page_pv"},np=Ol(()=>R("img",{src:Yi},null,-1)),sp=Ol(()=>R("span",{id:"busuanzi_value_page_pv"},null,-1)),tp=[np,sp];function ep(n,s){return V(),Y("span",Zi,tp)}var ap=Rn(Xi,[["render",ep],["__scopeId","data-v-11513e0f"]]);const lp={class:"article-content"},op={class:"detail-title"},rp={class:"post-info"},cp={class:"detail-container markdown-body"},ip=["innerHTML"],pp={__name:"article-detail",setup(n){const s=_n({}),t=tt();hs(()=>{const{name:a}=t.params;s.value=e(a)});function e(a){return St.find(l=>l.name===a)||{}}return(a,l)=>(V(),Y(sn,null,[R("div",lp,[R("h1",op,gn(s.value.title),1),R("div",rp,[R("time",null,gn(s.value.date),1),tn(ap)]),R("div",cp,[R("div",{innerHTML:s.value.content},null,8,ip)]),tn(Tl)]),tn(Pe)],64))}};var up=Rn(pp,[["__scopeId","data-v-3a5aed2d"]]);const hp=n=>(Os("data-v-39146a8d"),n=n(),$s(),n),fp={class:"category-list"},dp=["href"],gp=["href"],mp=hp(()=>R("span",null," \u2014 ",-1)),jp={__name:"article-category",setup(n){const s=tt(),t=_n([]),e=_n({}),a=_n([]),l=_n("");hs(()=>{const{category:r}=s.params;o(),r&&(l.value=r,c(r))});function o(){const r=[],u={};for(const p of St){const d=p.category||[];r.push(...d);for(const g of d)u[g]||(u[g]=[]),u[g].push(p)}t.value=new Set([...r]),e.value=u}function c(r){l.value=r,a.value=e.value[r]}return(r,u)=>(V(),Y(sn,null,[R("ul",fp,[(V(!0),Y(sn,null,es(t.value,p=>(V(),Y("li",{key:p,class:Es({active:l.value===p})},[R("a",{href:"/article-category/"+p},gn(p),9,dp)],2))),128))]),(V(!0),Y(sn,null,es(a.value,p=>(V(),Y("ul",{class:"category-item",key:p},[R("li",null,[R("a",{href:"/article-detail/"+p.name},[R("span",null,gn(p.title),1),mp,R("span",null,gn(p.date),1)],8,gp)])]))),128))],64))}};var _p=Rn(jp,[["__scopeId","data-v-39146a8d"]]);const xp={class:"article-wrap"},yp=["href"],bp={__name:"article-archive",setup(n){const s=_n([]);hs(()=>{t()});function t(){const e=St.sort((l,o)=>new Date(o.date).getTime()-new Date(l.date).getTime()),a={};for(const l of e){const o=new Date(l.date).getFullYear();a[o]||(a[o]=[]),a[o].push(l)}s.value=Object.entries(a).map(l=>{const[o,c]=l;return{year:o,children:c}}).reverse()}return(e,a)=>(V(!0),Y(sn,null,es(s.value,l=>(V(),Y("div",{class:"archive-container",key:l},[R("h3",null,gn(l.year),1),R("ul",xp,[(V(!0),Y(sn,null,es(l.children,o=>(V(),Y("li",{class:"article-item",key:o},[R("a",{href:"/article-detail/"+o.name},gn(o.title),9,yp)]))),128))])]))),128))}};var vp=Rn(bp,[["__scopeId","data-v-7a7fc9fe"]]),wp=[{name:"\u5DE6\u773C\u4F1A\u966A\u53F3\u773C\u54ED\u306E\u535A\u5BA2",desc:"\u53E6\u4E00\u4E2A\u4E16\u754C",link:"https://qkongtao.cn/"},{name:"\u5B89\u77E5\u9C7C",desc:"\u751F\u6D3B\u660E\u6717\uFF0C\u4E07\u7269\u53EF\u7231",link:"https://anzhiy.cn/"}];const kp=n=>(Os("data-v-63db2140"),n=n(),$s(),n),Ep=kp(()=>R("div",{class:"friend-header"},[R("a",{class:"add-link",href:"https://github.com/hai-zou/Poseidon/edit/main/src/data/links.js",target:"_blank"}," \u5982\u4F55\u6DFB\u52A0\u53CB\u94FE ")],-1)),Ip={class:"link-container"},qp=["href"],Cp={class:"desc"},Ap={__name:"friend-links",setup(n){return(s,t)=>(V(),Y(sn,null,[Ep,R("ul",Ip,[(V(!0),Y(sn,null,es(Un(wp),e=>(V(),Y("li",{class:"link-item",key:e},[R("a",{class:"name",href:e.link,target:"_blank"},gn(e.name),9,qp),R("span",Cp,gn(e.desc),1)]))),128))])],64))}};var Rp=Rn(Ap,[["__scopeId","data-v-63db2140"]]),Pp=[{name:"about",date:"",content:`<h2>\u5173\u4E8E\u6211</h2>
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

`}];const Sp={class:"custom-comtainer"},Tp={class:"markdown-body"},Op=["innerHTML"],$p={__name:"custom",setup(n){const s=_n({}),t=tt();hs(()=>{const{link:a}=t.params;s.value=e(a)});function e(a){return Pp.find(l=>l.name===a)||{}}return(a,l)=>(V(),Y(sn,null,[R("div",Sp,[R("div",Tp,[R("div",{innerHTML:s.value.content},null,8,Op)]),tn(Tl)]),tn(Pe)],64))}};var Mp=Rn($p,[["__scopeId","data-v-2c42665d"]]);const Lp={};function Np(n,s){return V(),Y("div",null,"404")}var Up=Rn(Lp,[["render",Np]]);const Fp=[{path:"/",component:Ai,redirect:"/article-list/1/",children:[{path:"/article-list/:page",component:Ki},{path:"/article-detail/:name",component:up},{path:"/article-category/:category",component:_p},{path:"/article-archive",component:vp},{path:"/friend-links",component:Rp},{path:"/custom/:link",component:Mp},{path:"/:catchAll(.*)",component:Up}]}],zp=pi({history:Ic(),routes:Fp});const $l=ac(cc);$l.use(zp);$l.mount("#app");
