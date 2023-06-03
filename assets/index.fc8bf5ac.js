const Ml=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function e(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}};Ml();function oe(s,n){const t=Object.create(null),e=s.split(",");for(let a=0;a<e.length;a++)t[e[a]]=!0;return n?a=>!!t[a.toLowerCase()]:a=>!!t[a]}const Z={},wn=[],qs=()=>{},Ll=()=>!1,Nl=/^on[^a-z]/,yt=s=>Nl.test(s),re=s=>s.startsWith("onUpdate:"),os=Object.assign,ce=(s,n)=>{const t=s.indexOf(n);t>-1&&s.splice(t,1)},Ul=Object.prototype.hasOwnProperty,B=(s,n)=>Ul.call(s,n),L=Array.isArray,kn=s=>bt(s)==="[object Map]",Ca=s=>bt(s)==="[object Set]",F=s=>typeof s=="function",as=s=>typeof s=="string",ie=s=>typeof s=="symbol",ss=s=>s!==null&&typeof s=="object",Aa=s=>ss(s)&&F(s.then)&&F(s.catch),Ra=Object.prototype.toString,bt=s=>Ra.call(s),Fl=s=>bt(s).slice(8,-1),Pa=s=>bt(s)==="[object Object]",pe=s=>as(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,pt=oe(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vt=s=>{const n=Object.create(null);return t=>n[t]||(n[t]=s(t))},zl=/-(\w)/g,Fs=vt(s=>s.replace(zl,(n,t)=>t?t.toUpperCase():"")),Bl=/\B([A-Z])/g,Tn=vt(s=>s.replace(Bl,"-$1").toLowerCase()),wt=vt(s=>s.charAt(0).toUpperCase()+s.slice(1)),Tt=vt(s=>s?`on${wt(s)}`:""),Vn=(s,n)=>!Object.is(s,n),Ot=(s,n)=>{for(let t=0;t<s.length;t++)s[t](n)},dt=(s,n,t)=>{Object.defineProperty(s,n,{configurable:!0,enumerable:!1,value:t})},Hl=s=>{const n=parseFloat(s);return isNaN(n)?s:n};let $e;const Ht=()=>$e||($e=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function Gn(s){if(L(s)){const n={};for(let t=0;t<s.length;t++){const e=s[t],a=as(e)?Vl(e):Gn(e);if(a)for(const l in a)n[l]=a[l]}return n}else{if(as(s))return s;if(ss(s))return s}}const Dl=/;(?![^(]*\))/g,Kl=/:([^]+)/,Wl=/\/\*[^]*?\*\//g;function Vl(s){const n={};return s.replace(Wl,"").split(Dl).forEach(t=>{if(t){const e=t.split(Kl);e.length>1&&(n[e[0].trim()]=e[1].trim())}}),n}function qn(s){let n="";if(as(s))n=s;else if(L(s))for(let t=0;t<s.length;t++){const e=qn(s[t]);e&&(n+=e+" ")}else if(ss(s))for(const t in s)s[t]&&(n+=t+" ");return n.trim()}const Gl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jl=oe(Gl);function Sa(s){return!!s||s===""}const cs=s=>as(s)?s:s==null?"":L(s)||ss(s)&&(s.toString===Ra||!F(s.toString))?JSON.stringify(s,Ta,2):String(s),Ta=(s,n)=>n&&n.__v_isRef?Ta(s,n.value):kn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[e,a])=>(t[`${e} =>`]=a,t),{})}:Ca(n)?{[`Set(${n.size})`]:[...n.values()]}:ss(n)&&!L(n)&&!Pa(n)?String(n):n;let ws;class Ql{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ws,!n&&ws&&(this.index=(ws.scopes||(ws.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const t=ws;try{return ws=this,n()}finally{ws=t}}}on(){ws=this}off(){ws=this.parent}stop(n){if(this._active){let t,e;for(t=0,e=this.effects.length;t<e;t++)this.effects[t].stop();for(t=0,e=this.cleanups.length;t<e;t++)this.cleanups[t]();if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Yl(s,n=ws){n&&n.active&&n.effects.push(s)}function Xl(){return ws}const ue=s=>{const n=new Set(s);return n.w=0,n.n=0,n},Oa=s=>(s.w&tn)>0,$a=s=>(s.n&tn)>0,Zl=({deps:s})=>{if(s.length)for(let n=0;n<s.length;n++)s[n].w|=tn},so=s=>{const{deps:n}=s;if(n.length){let t=0;for(let e=0;e<n.length;e++){const a=n[e];Oa(a)&&!$a(a)?a.delete(s):n[t++]=a,a.w&=~tn,a.n&=~tn}n.length=t}},Dt=new WeakMap;let Fn=0,tn=1;const Kt=30;let ks;const pn=Symbol(""),Wt=Symbol("");class he{constructor(n,t=null,e){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Yl(this,e)}run(){if(!this.active)return this.fn();let n=ks,t=sn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=ks,ks=this,sn=!0,tn=1<<++Fn,Fn<=Kt?Zl(this):Me(this),this.fn()}finally{Fn<=Kt&&so(this),tn=1<<--Fn,ks=this.parent,sn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ks===this?this.deferStop=!0:this.active&&(Me(this),this.onStop&&this.onStop(),this.active=!1)}}function Me(s){const{deps:n}=s;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(s);n.length=0}}let sn=!0;const Ma=[];function On(){Ma.push(sn),sn=!1}function $n(){const s=Ma.pop();sn=s===void 0?!0:s}function _s(s,n,t){if(sn&&ks){let e=Dt.get(s);e||Dt.set(s,e=new Map);let a=e.get(t);a||e.set(t,a=ue()),La(a)}}function La(s,n){let t=!1;Fn<=Kt?$a(s)||(s.n|=tn,t=!Oa(s)):t=!s.has(ks),t&&(s.add(ks),ks.deps.push(s))}function Ks(s,n,t,e,a,l){const o=Dt.get(s);if(!o)return;let c=[];if(n==="clear")c=[...o.values()];else if(t==="length"&&L(s)){const r=Number(e);o.forEach((u,p)=>{(p==="length"||p>=r)&&c.push(u)})}else switch(t!==void 0&&c.push(o.get(t)),n){case"add":L(s)?pe(t)&&c.push(o.get("length")):(c.push(o.get(pn)),kn(s)&&c.push(o.get(Wt)));break;case"delete":L(s)||(c.push(o.get(pn)),kn(s)&&c.push(o.get(Wt)));break;case"set":kn(s)&&c.push(o.get(pn));break}if(c.length===1)c[0]&&Vt(c[0]);else{const r=[];for(const u of c)u&&r.push(...u);Vt(ue(r))}}function Vt(s,n){const t=L(s)?s:[...s];for(const e of t)e.computed&&Le(e);for(const e of t)e.computed||Le(e)}function Le(s,n){(s!==ks||s.allowRecurse)&&(s.scheduler?s.scheduler():s.run())}const no=oe("__proto__,__v_isRef,__isVue"),Na=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(ie)),to=fe(),eo=fe(!1,!0),ao=fe(!0),Ne=lo();function lo(){const s={};return["includes","indexOf","lastIndexOf"].forEach(n=>{s[n]=function(...t){const e=K(this);for(let l=0,o=this.length;l<o;l++)_s(e,"get",l+"");const a=e[n](...t);return a===-1||a===!1?e[n](...t.map(K)):a}}),["push","pop","shift","unshift","splice"].forEach(n=>{s[n]=function(...t){On();const e=K(this)[n].apply(this,t);return $n(),e}}),s}function oo(s){const n=K(this);return _s(n,"has",s),n.hasOwnProperty(s)}function fe(s=!1,n=!1){return function(e,a,l){if(a==="__v_isReactive")return!s;if(a==="__v_isReadonly")return s;if(a==="__v_isShallow")return n;if(a==="__v_raw"&&l===(s?n?wo:Ha:n?Ba:za).get(e))return e;const o=L(e);if(!s){if(o&&B(Ne,a))return Reflect.get(Ne,a,l);if(a==="hasOwnProperty")return oo}const c=Reflect.get(e,a,l);return(ie(a)?Na.has(a):no(a))||(s||_s(e,"get",a),n)?c:hs(c)?o&&pe(a)?c:c.value:ss(c)?s?Da(c):nt(c):c}}const ro=Ua(),co=Ua(!0);function Ua(s=!1){return function(t,e,a,l){let o=t[e];if(Cn(o)&&hs(o)&&!hs(a))return!1;if(!s&&(!gt(a)&&!Cn(a)&&(o=K(o),a=K(a)),!L(t)&&hs(o)&&!hs(a)))return o.value=a,!0;const c=L(t)&&pe(e)?Number(e)<t.length:B(t,e),r=Reflect.set(t,e,a,l);return t===K(l)&&(c?Vn(a,o)&&Ks(t,"set",e,a):Ks(t,"add",e,a)),r}}function io(s,n){const t=B(s,n);s[n];const e=Reflect.deleteProperty(s,n);return e&&t&&Ks(s,"delete",n,void 0),e}function po(s,n){const t=Reflect.has(s,n);return(!ie(n)||!Na.has(n))&&_s(s,"has",n),t}function uo(s){return _s(s,"iterate",L(s)?"length":pn),Reflect.ownKeys(s)}const Fa={get:to,set:ro,deleteProperty:io,has:po,ownKeys:uo},ho={get:ao,set(s,n){return!0},deleteProperty(s,n){return!0}},fo=os({},Fa,{get:eo,set:co}),de=s=>s,kt=s=>Reflect.getPrototypeOf(s);function at(s,n,t=!1,e=!1){s=s.__v_raw;const a=K(s),l=K(n);t||(n!==l&&_s(a,"get",n),_s(a,"get",l));const{has:o}=kt(a),c=e?de:t?je:Jn;if(o.call(a,n))return c(s.get(n));if(o.call(a,l))return c(s.get(l));s!==a&&s.get(n)}function lt(s,n=!1){const t=this.__v_raw,e=K(t),a=K(s);return n||(s!==a&&_s(e,"has",s),_s(e,"has",a)),s===a?t.has(s):t.has(s)||t.has(a)}function ot(s,n=!1){return s=s.__v_raw,!n&&_s(K(s),"iterate",pn),Reflect.get(s,"size",s)}function Ue(s){s=K(s);const n=K(this);return kt(n).has.call(n,s)||(n.add(s),Ks(n,"add",s,s)),this}function Fe(s,n){n=K(n);const t=K(this),{has:e,get:a}=kt(t);let l=e.call(t,s);l||(s=K(s),l=e.call(t,s));const o=a.call(t,s);return t.set(s,n),l?Vn(n,o)&&Ks(t,"set",s,n):Ks(t,"add",s,n),this}function ze(s){const n=K(this),{has:t,get:e}=kt(n);let a=t.call(n,s);a||(s=K(s),a=t.call(n,s)),e&&e.call(n,s);const l=n.delete(s);return a&&Ks(n,"delete",s,void 0),l}function Be(){const s=K(this),n=s.size!==0,t=s.clear();return n&&Ks(s,"clear",void 0,void 0),t}function rt(s,n){return function(e,a){const l=this,o=l.__v_raw,c=K(o),r=n?de:s?je:Jn;return!s&&_s(c,"iterate",pn),o.forEach((u,p)=>e.call(a,r(u),r(p),l))}}function ct(s,n,t){return function(...e){const a=this.__v_raw,l=K(a),o=kn(l),c=s==="entries"||s===Symbol.iterator&&o,r=s==="keys"&&o,u=a[s](...e),p=t?de:n?je:Jn;return!n&&_s(l,"iterate",r?Wt:pn),{next(){const{value:d,done:g}=u.next();return g?{value:d,done:g}:{value:c?[p(d[0]),p(d[1])]:p(d),done:g}},[Symbol.iterator](){return this}}}}function Qs(s){return function(...n){return s==="delete"?!1:this}}function go(){const s={get(l){return at(this,l)},get size(){return ot(this)},has:lt,add:Ue,set:Fe,delete:ze,clear:Be,forEach:rt(!1,!1)},n={get(l){return at(this,l,!1,!0)},get size(){return ot(this)},has:lt,add:Ue,set:Fe,delete:ze,clear:Be,forEach:rt(!1,!0)},t={get(l){return at(this,l,!0)},get size(){return ot(this,!0)},has(l){return lt.call(this,l,!0)},add:Qs("add"),set:Qs("set"),delete:Qs("delete"),clear:Qs("clear"),forEach:rt(!0,!1)},e={get(l){return at(this,l,!0,!0)},get size(){return ot(this,!0)},has(l){return lt.call(this,l,!0)},add:Qs("add"),set:Qs("set"),delete:Qs("delete"),clear:Qs("clear"),forEach:rt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{s[l]=ct(l,!1,!1),t[l]=ct(l,!0,!1),n[l]=ct(l,!1,!0),e[l]=ct(l,!0,!0)}),[s,t,n,e]}const[mo,jo,_o,xo]=go();function ge(s,n){const t=n?s?xo:_o:s?jo:mo;return(e,a,l)=>a==="__v_isReactive"?!s:a==="__v_isReadonly"?s:a==="__v_raw"?e:Reflect.get(B(t,a)&&a in e?t:e,a,l)}const yo={get:ge(!1,!1)},bo={get:ge(!1,!0)},vo={get:ge(!0,!1)},za=new WeakMap,Ba=new WeakMap,Ha=new WeakMap,wo=new WeakMap;function ko(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Eo(s){return s.__v_skip||!Object.isExtensible(s)?0:ko(Fl(s))}function nt(s){return Cn(s)?s:me(s,!1,Fa,yo,za)}function Io(s){return me(s,!1,fo,bo,Ba)}function Da(s){return me(s,!0,ho,vo,Ha)}function me(s,n,t,e,a){if(!ss(s)||s.__v_raw&&!(n&&s.__v_isReactive))return s;const l=a.get(s);if(l)return l;const o=Eo(s);if(o===0)return s;const c=new Proxy(s,o===2?e:t);return a.set(s,c),c}function En(s){return Cn(s)?En(s.__v_raw):!!(s&&s.__v_isReactive)}function Cn(s){return!!(s&&s.__v_isReadonly)}function gt(s){return!!(s&&s.__v_isShallow)}function Ka(s){return En(s)||Cn(s)}function K(s){const n=s&&s.__v_raw;return n?K(n):s}function Wa(s){return dt(s,"__v_skip",!0),s}const Jn=s=>ss(s)?nt(s):s,je=s=>ss(s)?Da(s):s;function Va(s){sn&&ks&&(s=K(s),La(s.dep||(s.dep=ue())))}function Ga(s,n){s=K(s);const t=s.dep;t&&Vt(t)}function hs(s){return!!(s&&s.__v_isRef===!0)}function gs(s){return Ja(s,!1)}function qo(s){return Ja(s,!0)}function Ja(s,n){return hs(s)?s:new Co(s,n)}class Co{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:K(n),this._value=t?n:Jn(n)}get value(){return Va(this),this._value}set value(n){const t=this.__v_isShallow||gt(n)||Cn(n);n=t?n:K(n),Vn(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:Jn(n),Ga(this))}}function Ns(s){return hs(s)?s.value:s}const Ao={get:(s,n,t)=>Ns(Reflect.get(s,n,t)),set:(s,n,t,e)=>{const a=s[n];return hs(a)&&!hs(t)?(a.value=t,!0):Reflect.set(s,n,t,e)}};function Qa(s){return En(s)?s:new Proxy(s,Ao)}class Ro{constructor(n,t,e,a){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new he(n,()=>{this._dirty||(this._dirty=!0,Ga(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=e}get value(){const n=K(this);return Va(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function Po(s,n,t=!1){let e,a;const l=F(s);return l?(e=s,a=qs):(e=s.get,a=s.set),new Ro(e,a,l||!a,t)}function nn(s,n,t,e){let a;try{a=e?s(...e):s()}catch(l){Et(l,n,t)}return a}function Cs(s,n,t,e){if(F(s)){const l=nn(s,n,t,e);return l&&Aa(l)&&l.catch(o=>{Et(o,n,t)}),l}const a=[];for(let l=0;l<s.length;l++)a.push(Cs(s[l],n,t,e));return a}function Et(s,n,t,e=!0){const a=n?n.vnode:null;if(n){let l=n.parent;const o=n.proxy,c=t;for(;l;){const u=l.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](s,o,c)===!1)return}l=l.parent}const r=n.appContext.config.errorHandler;if(r){nn(r,null,10,[s,o,c]);return}}So(s,t,a,e)}function So(s,n,t,e=!0){console.error(s)}let Qn=!1,Gt=!1;const us=[];let Ls=0;const In=[];let Ds=null,rn=0;const Ya=Promise.resolve();let _e=null;function Xa(s){const n=_e||Ya;return s?n.then(this?s.bind(this):s):n}function To(s){let n=Ls+1,t=us.length;for(;n<t;){const e=n+t>>>1;Yn(us[e])<s?n=e+1:t=e}return n}function xe(s){(!us.length||!us.includes(s,Qn&&s.allowRecurse?Ls+1:Ls))&&(s.id==null?us.push(s):us.splice(To(s.id),0,s),Za())}function Za(){!Qn&&!Gt&&(Gt=!0,_e=Ya.then(nl))}function Oo(s){const n=us.indexOf(s);n>Ls&&us.splice(n,1)}function $o(s){L(s)?In.push(...s):(!Ds||!Ds.includes(s,s.allowRecurse?rn+1:rn))&&In.push(s),Za()}function He(s,n=Qn?Ls+1:0){for(;n<us.length;n++){const t=us[n];t&&t.pre&&(us.splice(n,1),n--,t())}}function sl(s){if(In.length){const n=[...new Set(In)];if(In.length=0,Ds){Ds.push(...n);return}for(Ds=n,Ds.sort((t,e)=>Yn(t)-Yn(e)),rn=0;rn<Ds.length;rn++)Ds[rn]();Ds=null,rn=0}}const Yn=s=>s.id==null?1/0:s.id,Mo=(s,n)=>{const t=Yn(s)-Yn(n);if(t===0){if(s.pre&&!n.pre)return-1;if(n.pre&&!s.pre)return 1}return t};function nl(s){Gt=!1,Qn=!0,us.sort(Mo);const n=qs;try{for(Ls=0;Ls<us.length;Ls++){const t=us[Ls];t&&t.active!==!1&&nn(t,null,14)}}finally{Ls=0,us.length=0,sl(),Qn=!1,_e=null,(us.length||In.length)&&nl()}}function Lo(s,n,...t){if(s.isUnmounted)return;const e=s.vnode.props||Z;let a=t;const l=n.startsWith("update:"),o=l&&n.slice(7);if(o&&o in e){const p=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:g}=e[p]||Z;g&&(a=t.map(b=>as(b)?b.trim():b)),d&&(a=t.map(Hl))}let c,r=e[c=Tt(n)]||e[c=Tt(Fs(n))];!r&&l&&(r=e[c=Tt(Tn(n))]),r&&Cs(r,s,6,a);const u=e[c+"Once"];if(u){if(!s.emitted)s.emitted={};else if(s.emitted[c])return;s.emitted[c]=!0,Cs(u,s,6,a)}}function tl(s,n,t=!1){const e=n.emitsCache,a=e.get(s);if(a!==void 0)return a;const l=s.emits;let o={},c=!1;if(!F(s)){const r=u=>{const p=tl(u,n,!0);p&&(c=!0,os(o,p))};!t&&n.mixins.length&&n.mixins.forEach(r),s.extends&&r(s.extends),s.mixins&&s.mixins.forEach(r)}return!l&&!c?(ss(s)&&e.set(s,null),null):(L(l)?l.forEach(r=>o[r]=null):os(o,l),ss(s)&&e.set(s,o),o)}function It(s,n){return!s||!yt(n)?!1:(n=n.slice(2).replace(/Once$/,""),B(s,n[0].toLowerCase()+n.slice(1))||B(s,Tn(n))||B(s,n))}let Es=null,qt=null;function mt(s){const n=Es;return Es=s,qt=s&&s.type.__scopeId||null,n}function fn(s){qt=s}function dn(){qt=null}function No(s,n=Es,t){if(!n||s._n)return s;const e=(...a)=>{e._d&&sa(-1);const l=mt(n);let o;try{o=s(...a)}finally{mt(l),e._d&&sa(1)}return o};return e._n=!0,e._c=!0,e._d=!0,e}function $t(s){const{type:n,vnode:t,proxy:e,withProxy:a,props:l,propsOptions:[o],slots:c,attrs:r,emit:u,render:p,renderCache:d,data:g,setupState:b,ctx:A,inheritAttrs:P}=s;let U,O;const $=mt(s);try{if(t.shapeFlag&4){const M=a||e;U=Ms(p.call(M,M,d,l,b,g,A)),O=r}else{const M=n;U=Ms(M.length>1?M(l,{attrs:r,slots:c,emit:u}):M(l,null)),O=n.props?r:Uo(r)}}catch(M){Dn.length=0,Et(M,s,1),U=ts(hn)}let D=U;if(O&&P!==!1){const M=Object.keys(O),{shapeFlag:is}=D;M.length&&is&7&&(o&&M.some(re)&&(O=Fo(O,o)),D=An(D,O))}return t.dirs&&(D=An(D),D.dirs=D.dirs?D.dirs.concat(t.dirs):t.dirs),t.transition&&(D.transition=t.transition),U=D,mt($),U}const Uo=s=>{let n;for(const t in s)(t==="class"||t==="style"||yt(t))&&((n||(n={}))[t]=s[t]);return n},Fo=(s,n)=>{const t={};for(const e in s)(!re(e)||!(e.slice(9)in n))&&(t[e]=s[e]);return t};function zo(s,n,t){const{props:e,children:a,component:l}=s,{props:o,children:c,patchFlag:r}=n,u=l.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&r>=0){if(r&1024)return!0;if(r&16)return e?De(e,o,u):!!o;if(r&8){const p=n.dynamicProps;for(let d=0;d<p.length;d++){const g=p[d];if(o[g]!==e[g]&&!It(u,g))return!0}}}else return(a||c)&&(!c||!c.$stable)?!0:e===o?!1:e?o?De(e,o,u):!0:!!o;return!1}function De(s,n,t){const e=Object.keys(n);if(e.length!==Object.keys(s).length)return!0;for(let a=0;a<e.length;a++){const l=e[a];if(n[l]!==s[l]&&!It(t,l))return!0}return!1}function Bo({vnode:s,parent:n},t){for(;n&&n.subTree===s;)(s=n.vnode).el=t,n=n.parent}const Ho=s=>s.__isSuspense;function Do(s,n){n&&n.pendingBranch?L(s)?n.effects.push(...s):n.effects.push(s):$o(s)}const it={};function Bn(s,n,t){return el(s,n,t)}function el(s,n,{immediate:t,deep:e,flush:a,onTrack:l,onTrigger:o}=Z){var c;const r=Xl()===((c=rs)==null?void 0:c.scope)?rs:null;let u,p=!1,d=!1;if(hs(s)?(u=()=>s.value,p=gt(s)):En(s)?(u=()=>s,e=!0):L(s)?(d=!0,p=s.some(M=>En(M)||gt(M)),u=()=>s.map(M=>{if(hs(M))return M.value;if(En(M))return vn(M);if(F(M))return nn(M,r,2)})):F(s)?n?u=()=>nn(s,r,2):u=()=>{if(!(r&&r.isUnmounted))return g&&g(),Cs(s,r,3,[b])}:u=qs,n&&e){const M=u;u=()=>vn(M())}let g,b=M=>{g=$.onStop=()=>{nn(M,r,4)}},A;if(Zn)if(b=qs,n?t&&Cs(n,r,3,[u(),d?[]:void 0,b]):u(),a==="sync"){const M=Lr();A=M.__watcherHandles||(M.__watcherHandles=[])}else return qs;let P=d?new Array(s.length).fill(it):it;const U=()=>{if(!!$.active)if(n){const M=$.run();(e||p||(d?M.some((is,fs)=>Vn(is,P[fs])):Vn(M,P)))&&(g&&g(),Cs(n,r,3,[M,P===it?void 0:d&&P[0]===it?[]:P,b]),P=M)}else $.run()};U.allowRecurse=!!n;let O;a==="sync"?O=U:a==="post"?O=()=>js(U,r&&r.suspense):(U.pre=!0,r&&(U.id=r.uid),O=()=>xe(U));const $=new he(u,O);n?t?U():P=$.run():a==="post"?js($.run.bind($),r&&r.suspense):$.run();const D=()=>{$.stop(),r&&r.scope&&ce(r.scope.effects,$)};return A&&A.push(D),D}function Ko(s,n,t){const e=this.proxy,a=as(s)?s.includes(".")?al(e,s):()=>e[s]:s.bind(e,e);let l;F(n)?l=n:(l=n.handler,t=n);const o=rs;Rn(this);const c=el(a,l.bind(e),t);return o?Rn(o):un(),c}function al(s,n){const t=n.split(".");return()=>{let e=s;for(let a=0;a<t.length&&e;a++)e=e[t[a]];return e}}function vn(s,n){if(!ss(s)||s.__v_skip||(n=n||new Set,n.has(s)))return s;if(n.add(s),hs(s))vn(s.value,n);else if(L(s))for(let t=0;t<s.length;t++)vn(s[t],n);else if(Ca(s)||kn(s))s.forEach(t=>{vn(t,n)});else if(Pa(s))for(const t in s)vn(s[t],n);return s}function ln(s,n,t,e){const a=s.dirs,l=n&&n.dirs;for(let o=0;o<a.length;o++){const c=a[o];l&&(c.oldValue=l[o].value);let r=c.dir[e];r&&(On(),Cs(r,t,8,[s.el,c,s,n]),$n())}}function ye(s,n){return F(s)?(()=>os({name:s.name},n,{setup:s}))():s}const ut=s=>!!s.type.__asyncLoader,ll=s=>s.type.__isKeepAlive;function Wo(s,n){ol(s,"a",n)}function Vo(s,n){ol(s,"da",n)}function ol(s,n,t=rs){const e=s.__wdc||(s.__wdc=()=>{let a=t;for(;a;){if(a.isDeactivated)return;a=a.parent}return s()});if(Ct(n,e,t),t){let a=t.parent;for(;a&&a.parent;)ll(a.parent.vnode)&&Go(e,n,t,a),a=a.parent}}function Go(s,n,t,e){const a=Ct(n,s,e,!0);be(()=>{ce(e[n],a)},t)}function Ct(s,n,t=rs,e=!1){if(t){const a=t[s]||(t[s]=[]),l=n.__weh||(n.__weh=(...o)=>{if(t.isUnmounted)return;On(),Rn(t);const c=Cs(n,t,s,o);return un(),$n(),c});return e?a.unshift(l):a.push(l),l}}const Vs=s=>(n,t=rs)=>(!Zn||s==="sp")&&Ct(s,(...e)=>n(...e),t),Jo=Vs("bm"),en=Vs("m"),Qo=Vs("bu"),Yo=Vs("u"),Xo=Vs("bum"),be=Vs("um"),Zo=Vs("sp"),sr=Vs("rtg"),nr=Vs("rtc");function tr(s,n=rs){Ct("ec",s,n)}const rl="components";function cl(s,n){return ar(rl,s,!0,n)||s}const er=Symbol.for("v-ndc");function ar(s,n,t=!0,e=!1){const a=Es||rs;if(a){const l=a.type;if(s===rl){const c=Or(l,!1);if(c&&(c===n||c===Fs(n)||c===wt(Fs(n))))return l}const o=Ke(a[s]||l[s],n)||Ke(a.appContext[s],n);return!o&&e?l:o}}function Ke(s,n){return s&&(s[n]||s[Fs(n)]||s[wt(Fs(n))])}function Ws(s,n,t,e){let a;const l=t&&t[e];if(L(s)||as(s)){a=new Array(s.length);for(let o=0,c=s.length;o<c;o++)a[o]=n(s[o],o,void 0,l&&l[o])}else if(typeof s=="number"){a=new Array(s);for(let o=0;o<s;o++)a[o]=n(o+1,o,void 0,l&&l[o])}else if(ss(s))if(s[Symbol.iterator])a=Array.from(s,(o,c)=>n(o,c,void 0,l&&l[c]));else{const o=Object.keys(s);a=new Array(o.length);for(let c=0,r=o.length;c<r;c++){const u=o[c];a[c]=n(s[u],u,c,l&&l[c])}}else a=[];return t&&(t[e]=a),a}const Jt=s=>s?xl(s)?qe(s)||s.proxy:Jt(s.parent):null,Hn=os(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>Jt(s.parent),$root:s=>Jt(s.root),$emit:s=>s.emit,$options:s=>ve(s),$forceUpdate:s=>s.f||(s.f=()=>xe(s.update)),$nextTick:s=>s.n||(s.n=Xa.bind(s.proxy)),$watch:s=>Ko.bind(s)}),Mt=(s,n)=>s!==Z&&!s.__isScriptSetup&&B(s,n),lr={get({_:s},n){const{ctx:t,setupState:e,data:a,props:l,accessCache:o,type:c,appContext:r}=s;let u;if(n[0]!=="$"){const b=o[n];if(b!==void 0)switch(b){case 1:return e[n];case 2:return a[n];case 4:return t[n];case 3:return l[n]}else{if(Mt(e,n))return o[n]=1,e[n];if(a!==Z&&B(a,n))return o[n]=2,a[n];if((u=s.propsOptions[0])&&B(u,n))return o[n]=3,l[n];if(t!==Z&&B(t,n))return o[n]=4,t[n];Qt&&(o[n]=0)}}const p=Hn[n];let d,g;if(p)return n==="$attrs"&&_s(s,"get",n),p(s);if((d=c.__cssModules)&&(d=d[n]))return d;if(t!==Z&&B(t,n))return o[n]=4,t[n];if(g=r.config.globalProperties,B(g,n))return g[n]},set({_:s},n,t){const{data:e,setupState:a,ctx:l}=s;return Mt(a,n)?(a[n]=t,!0):e!==Z&&B(e,n)?(e[n]=t,!0):B(s.props,n)||n[0]==="$"&&n.slice(1)in s?!1:(l[n]=t,!0)},has({_:{data:s,setupState:n,accessCache:t,ctx:e,appContext:a,propsOptions:l}},o){let c;return!!t[o]||s!==Z&&B(s,o)||Mt(n,o)||(c=l[0])&&B(c,o)||B(e,o)||B(Hn,o)||B(a.config.globalProperties,o)},defineProperty(s,n,t){return t.get!=null?s._.accessCache[n]=0:B(t,"value")&&this.set(s,n,t.value,null),Reflect.defineProperty(s,n,t)}};function We(s){return L(s)?s.reduce((n,t)=>(n[t]=null,n),{}):s}let Qt=!0;function or(s){const n=ve(s),t=s.proxy,e=s.ctx;Qt=!1,n.beforeCreate&&Ve(n.beforeCreate,s,"bc");const{data:a,computed:l,methods:o,watch:c,provide:r,inject:u,created:p,beforeMount:d,mounted:g,beforeUpdate:b,updated:A,activated:P,deactivated:U,beforeDestroy:O,beforeUnmount:$,destroyed:D,unmounted:M,render:is,renderTracked:fs,renderTriggered:Rs,errorCaptured:zs,serverPrefetch:gn,expose:Ps,inheritAttrs:Gs,components:an,directives:Ss,filters:Mn}=n;if(u&&rr(u,e,null),o)for(const Y in o){const W=o[Y];F(W)&&(e[Y]=W.bind(t))}if(a){const Y=a.call(t,t);ss(Y)&&(s.data=nt(Y))}if(Qt=!0,l)for(const Y in l){const W=l[Y],Bs=F(W)?W.bind(t,t):F(W.get)?W.get.bind(t,t):qs,Js=!F(W)&&F(W.set)?W.set.bind(t):qs,Ts=ys({get:Bs,set:Js});Object.defineProperty(e,Y,{enumerable:!0,configurable:!0,get:()=>Ts.value,set:ms=>Ts.value=ms})}if(c)for(const Y in c)il(c[Y],e,t,Y);if(r){const Y=F(r)?r.call(t):r;Reflect.ownKeys(Y).forEach(W=>{ht(W,Y[W])})}p&&Ve(p,s,"c");function ls(Y,W){L(W)?W.forEach(Bs=>Y(Bs.bind(t))):W&&Y(W.bind(t))}if(ls(Jo,d),ls(en,g),ls(Qo,b),ls(Yo,A),ls(Wo,P),ls(Vo,U),ls(tr,zs),ls(nr,fs),ls(sr,Rs),ls(Xo,$),ls(be,M),ls(Zo,gn),L(Ps))if(Ps.length){const Y=s.exposed||(s.exposed={});Ps.forEach(W=>{Object.defineProperty(Y,W,{get:()=>t[W],set:Bs=>t[W]=Bs})})}else s.exposed||(s.exposed={});is&&s.render===qs&&(s.render=is),Gs!=null&&(s.inheritAttrs=Gs),an&&(s.components=an),Ss&&(s.directives=Ss)}function rr(s,n,t=qs){L(s)&&(s=Yt(s));for(const e in s){const a=s[e];let l;ss(a)?"default"in a?l=Us(a.from||e,a.default,!0):l=Us(a.from||e):l=Us(a),hs(l)?Object.defineProperty(n,e,{enumerable:!0,configurable:!0,get:()=>l.value,set:o=>l.value=o}):n[e]=l}}function Ve(s,n,t){Cs(L(s)?s.map(e=>e.bind(n.proxy)):s.bind(n.proxy),n,t)}function il(s,n,t,e){const a=e.includes(".")?al(t,e):()=>t[e];if(as(s)){const l=n[s];F(l)&&Bn(a,l)}else if(F(s))Bn(a,s.bind(t));else if(ss(s))if(L(s))s.forEach(l=>il(l,n,t,e));else{const l=F(s.handler)?s.handler.bind(t):n[s.handler];F(l)&&Bn(a,l,s)}}function ve(s){const n=s.type,{mixins:t,extends:e}=n,{mixins:a,optionsCache:l,config:{optionMergeStrategies:o}}=s.appContext,c=l.get(n);let r;return c?r=c:!a.length&&!t&&!e?r=n:(r={},a.length&&a.forEach(u=>jt(r,u,o,!0)),jt(r,n,o)),ss(n)&&l.set(n,r),r}function jt(s,n,t,e=!1){const{mixins:a,extends:l}=n;l&&jt(s,l,t,!0),a&&a.forEach(o=>jt(s,o,t,!0));for(const o in n)if(!(e&&o==="expose")){const c=cr[o]||t&&t[o];s[o]=c?c(s[o],n[o]):n[o]}return s}const cr={data:Ge,props:Je,emits:Je,methods:zn,computed:zn,beforeCreate:ds,created:ds,beforeMount:ds,mounted:ds,beforeUpdate:ds,updated:ds,beforeDestroy:ds,beforeUnmount:ds,destroyed:ds,unmounted:ds,activated:ds,deactivated:ds,errorCaptured:ds,serverPrefetch:ds,components:zn,directives:zn,watch:pr,provide:Ge,inject:ir};function Ge(s,n){return n?s?function(){return os(F(s)?s.call(this,this):s,F(n)?n.call(this,this):n)}:n:s}function ir(s,n){return zn(Yt(s),Yt(n))}function Yt(s){if(L(s)){const n={};for(let t=0;t<s.length;t++)n[s[t]]=s[t];return n}return s}function ds(s,n){return s?[...new Set([].concat(s,n))]:n}function zn(s,n){return s?os(Object.create(null),s,n):n}function Je(s,n){return s?L(s)&&L(n)?[...new Set([...s,...n])]:os(Object.create(null),We(s),We(n!=null?n:{})):n}function pr(s,n){if(!s)return n;if(!n)return s;const t=os(Object.create(null),s);for(const e in n)t[e]=ds(s[e],n[e]);return t}function pl(){return{app:null,config:{isNativeTag:Ll,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ur=0;function hr(s,n){return function(e,a=null){F(e)||(e=os({},e)),a!=null&&!ss(a)&&(a=null);const l=pl(),o=new Set;let c=!1;const r=l.app={_uid:ur++,_component:e,_props:a,_container:null,_context:l,_instance:null,version:Nr,get config(){return l.config},set config(u){},use(u,...p){return o.has(u)||(u&&F(u.install)?(o.add(u),u.install(r,...p)):F(u)&&(o.add(u),u(r,...p))),r},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),r},component(u,p){return p?(l.components[u]=p,r):l.components[u]},directive(u,p){return p?(l.directives[u]=p,r):l.directives[u]},mount(u,p,d){if(!c){const g=ts(e,a);return g.appContext=l,p&&n?n(g,u):s(g,u,d),c=!0,r._container=u,u.__vue_app__=r,qe(g.component)||g.component.proxy}},unmount(){c&&(s(null,r._container),delete r._container.__vue_app__)},provide(u,p){return l.provides[u]=p,r},runWithContext(u){_t=r;try{return u()}finally{_t=null}}};return r}}let _t=null;function ht(s,n){if(rs){let t=rs.provides;const e=rs.parent&&rs.parent.provides;e===t&&(t=rs.provides=Object.create(e)),t[s]=n}}function Us(s,n,t=!1){const e=rs||Es;if(e||_t){const a=e?e.parent==null?e.vnode.appContext&&e.vnode.appContext.provides:e.parent.provides:_t._context.provides;if(a&&s in a)return a[s];if(arguments.length>1)return t&&F(n)?n.call(e&&e.proxy):n}}function fr(s,n,t,e=!1){const a={},l={};dt(l,Rt,1),s.propsDefaults=Object.create(null),ul(s,n,a,l);for(const o in s.propsOptions[0])o in a||(a[o]=void 0);t?s.props=e?a:Io(a):s.type.props?s.props=a:s.props=l,s.attrs=l}function dr(s,n,t,e){const{props:a,attrs:l,vnode:{patchFlag:o}}=s,c=K(a),[r]=s.propsOptions;let u=!1;if((e||o>0)&&!(o&16)){if(o&8){const p=s.vnode.dynamicProps;for(let d=0;d<p.length;d++){let g=p[d];if(It(s.emitsOptions,g))continue;const b=n[g];if(r)if(B(l,g))b!==l[g]&&(l[g]=b,u=!0);else{const A=Fs(g);a[A]=Xt(r,c,A,b,s,!1)}else b!==l[g]&&(l[g]=b,u=!0)}}}else{ul(s,n,a,l)&&(u=!0);let p;for(const d in c)(!n||!B(n,d)&&((p=Tn(d))===d||!B(n,p)))&&(r?t&&(t[d]!==void 0||t[p]!==void 0)&&(a[d]=Xt(r,c,d,void 0,s,!0)):delete a[d]);if(l!==c)for(const d in l)(!n||!B(n,d)&&!0)&&(delete l[d],u=!0)}u&&Ks(s,"set","$attrs")}function ul(s,n,t,e){const[a,l]=s.propsOptions;let o=!1,c;if(n)for(let r in n){if(pt(r))continue;const u=n[r];let p;a&&B(a,p=Fs(r))?!l||!l.includes(p)?t[p]=u:(c||(c={}))[p]=u:It(s.emitsOptions,r)||(!(r in e)||u!==e[r])&&(e[r]=u,o=!0)}if(l){const r=K(t),u=c||Z;for(let p=0;p<l.length;p++){const d=l[p];t[d]=Xt(a,r,d,u[d],s,!B(u,d))}}return o}function Xt(s,n,t,e,a,l){const o=s[t];if(o!=null){const c=B(o,"default");if(c&&e===void 0){const r=o.default;if(o.type!==Function&&!o.skipFactory&&F(r)){const{propsDefaults:u}=a;t in u?e=u[t]:(Rn(a),e=u[t]=r.call(null,n),un())}else e=r}o[0]&&(l&&!c?e=!1:o[1]&&(e===""||e===Tn(t))&&(e=!0))}return e}function hl(s,n,t=!1){const e=n.propsCache,a=e.get(s);if(a)return a;const l=s.props,o={},c=[];let r=!1;if(!F(s)){const p=d=>{r=!0;const[g,b]=hl(d,n,!0);os(o,g),b&&c.push(...b)};!t&&n.mixins.length&&n.mixins.forEach(p),s.extends&&p(s.extends),s.mixins&&s.mixins.forEach(p)}if(!l&&!r)return ss(s)&&e.set(s,wn),wn;if(L(l))for(let p=0;p<l.length;p++){const d=Fs(l[p]);Qe(d)&&(o[d]=Z)}else if(l)for(const p in l){const d=Fs(p);if(Qe(d)){const g=l[p],b=o[d]=L(g)||F(g)?{type:g}:os({},g);if(b){const A=Ze(Boolean,b.type),P=Ze(String,b.type);b[0]=A>-1,b[1]=P<0||A<P,(A>-1||B(b,"default"))&&c.push(d)}}}const u=[o,c];return ss(s)&&e.set(s,u),u}function Qe(s){return s[0]!=="$"}function Ye(s){const n=s&&s.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:s===null?"null":""}function Xe(s,n){return Ye(s)===Ye(n)}function Ze(s,n){return L(n)?n.findIndex(t=>Xe(t,s)):F(n)&&Xe(n,s)?0:-1}const fl=s=>s[0]==="_"||s==="$stable",we=s=>L(s)?s.map(Ms):[Ms(s)],gr=(s,n,t)=>{if(n._n)return n;const e=No((...a)=>we(n(...a)),t);return e._c=!1,e},dl=(s,n,t)=>{const e=s._ctx;for(const a in s){if(fl(a))continue;const l=s[a];if(F(l))n[a]=gr(a,l,e);else if(l!=null){const o=we(l);n[a]=()=>o}}},gl=(s,n)=>{const t=we(n);s.slots.default=()=>t},mr=(s,n)=>{if(s.vnode.shapeFlag&32){const t=n._;t?(s.slots=K(n),dt(n,"_",t)):dl(n,s.slots={})}else s.slots={},n&&gl(s,n);dt(s.slots,Rt,1)},jr=(s,n,t)=>{const{vnode:e,slots:a}=s;let l=!0,o=Z;if(e.shapeFlag&32){const c=n._;c?t&&c===1?l=!1:(os(a,n),!t&&c===1&&delete a._):(l=!n.$stable,dl(n,a)),o=n}else n&&(gl(s,n),o={default:1});if(l)for(const c in a)!fl(c)&&!(c in o)&&delete a[c]};function Zt(s,n,t,e,a=!1){if(L(s)){s.forEach((g,b)=>Zt(g,n&&(L(n)?n[b]:n),t,e,a));return}if(ut(e)&&!a)return;const l=e.shapeFlag&4?qe(e.component)||e.component.proxy:e.el,o=a?null:l,{i:c,r}=s,u=n&&n.r,p=c.refs===Z?c.refs={}:c.refs,d=c.setupState;if(u!=null&&u!==r&&(as(u)?(p[u]=null,B(d,u)&&(d[u]=null)):hs(u)&&(u.value=null)),F(r))nn(r,c,12,[o,p]);else{const g=as(r),b=hs(r);if(g||b){const A=()=>{if(s.f){const P=g?B(d,r)?d[r]:p[r]:r.value;a?L(P)&&ce(P,l):L(P)?P.includes(l)||P.push(l):g?(p[r]=[l],B(d,r)&&(d[r]=p[r])):(r.value=[l],s.k&&(p[s.k]=r.value))}else g?(p[r]=o,B(d,r)&&(d[r]=o)):b&&(r.value=o,s.k&&(p[s.k]=o))};o?(A.id=-1,js(A,t)):A()}}}const js=Do;function _r(s){return xr(s)}function xr(s,n){const t=Ht();t.__VUE__=!0;const{insert:e,remove:a,patchProp:l,createElement:o,createText:c,createComment:r,setText:u,setElementText:p,parentNode:d,nextSibling:g,setScopeId:b=qs,insertStaticContent:A}=s,P=(i,h,f,m=null,_=null,x=null,E=!1,v=null,w=!!h.dynamicChildren)=>{if(i===h)return;i&&!Nn(i,h)&&(m=j(i),ms(i,_,x,!0),i=null),h.patchFlag===-2&&(w=!1,h.dynamicChildren=null);const{type:y,ref:S,shapeFlag:q}=h;switch(y){case At:U(i,h,f,m);break;case hn:O(i,h,f,m);break;case Lt:i==null&&$(h,f,m,E);break;case ns:an(i,h,f,m,_,x,E,v,w);break;default:q&1?is(i,h,f,m,_,x,E,v,w):q&6?Ss(i,h,f,m,_,x,E,v,w):(q&64||q&128)&&y.process(i,h,f,m,_,x,E,v,w,k)}S!=null&&_&&Zt(S,i&&i.ref,x,h||i,!h)},U=(i,h,f,m)=>{if(i==null)e(h.el=c(h.children),f,m);else{const _=h.el=i.el;h.children!==i.children&&u(_,h.children)}},O=(i,h,f,m)=>{i==null?e(h.el=r(h.children||""),f,m):h.el=i.el},$=(i,h,f,m)=>{[i.el,i.anchor]=A(i.children,h,f,m,i.el,i.anchor)},D=({el:i,anchor:h},f,m)=>{let _;for(;i&&i!==h;)_=g(i),e(i,f,m),i=_;e(h,f,m)},M=({el:i,anchor:h})=>{let f;for(;i&&i!==h;)f=g(i),a(i),i=f;a(h)},is=(i,h,f,m,_,x,E,v,w)=>{E=E||h.type==="svg",i==null?fs(h,f,m,_,x,E,v,w):gn(i,h,_,x,E,v,w)},fs=(i,h,f,m,_,x,E,v)=>{let w,y;const{type:S,props:q,shapeFlag:T,transition:N,dirs:z}=i;if(w=i.el=o(i.type,x,q&&q.is,q),T&8?p(w,i.children):T&16&&zs(i.children,w,null,m,_,x&&S!=="foreignObject",E,v),z&&ln(i,null,m,"created"),Rs(w,i,i.scopeId,E,m),q){for(const Q in q)Q!=="value"&&!pt(Q)&&l(w,Q,null,q[Q],x,i.children,m,_,ps);"value"in q&&l(w,"value",null,q.value),(y=q.onVnodeBeforeMount)&&$s(y,m,i)}z&&ln(i,null,m,"beforeMount");const X=(!_||_&&!_.pendingBranch)&&N&&!N.persisted;X&&N.beforeEnter(w),e(w,h,f),((y=q&&q.onVnodeMounted)||X||z)&&js(()=>{y&&$s(y,m,i),X&&N.enter(w),z&&ln(i,null,m,"mounted")},_)},Rs=(i,h,f,m,_)=>{if(f&&b(i,f),m)for(let x=0;x<m.length;x++)b(i,m[x]);if(_){let x=_.subTree;if(h===x){const E=_.vnode;Rs(i,E,E.scopeId,E.slotScopeIds,_.parent)}}},zs=(i,h,f,m,_,x,E,v,w=0)=>{for(let y=w;y<i.length;y++){const S=i[y]=v?Xs(i[y]):Ms(i[y]);P(null,S,h,f,m,_,x,E,v)}},gn=(i,h,f,m,_,x,E)=>{const v=h.el=i.el;let{patchFlag:w,dynamicChildren:y,dirs:S}=h;w|=i.patchFlag&16;const q=i.props||Z,T=h.props||Z;let N;f&&on(f,!1),(N=T.onVnodeBeforeUpdate)&&$s(N,f,h,i),S&&ln(h,i,f,"beforeUpdate"),f&&on(f,!0);const z=_&&h.type!=="foreignObject";if(y?Ps(i.dynamicChildren,y,v,f,m,z,x):E||W(i,h,v,null,f,m,z,x,!1),w>0){if(w&16)Gs(v,h,q,T,f,m,_);else if(w&2&&q.class!==T.class&&l(v,"class",null,T.class,_),w&4&&l(v,"style",q.style,T.style,_),w&8){const X=h.dynamicProps;for(let Q=0;Q<X.length;Q++){const es=X[Q],vs=q[es],xn=T[es];(xn!==vs||es==="value")&&l(v,es,vs,xn,_,i.children,f,m,ps)}}w&1&&i.children!==h.children&&p(v,h.children)}else!E&&y==null&&Gs(v,h,q,T,f,m,_);((N=T.onVnodeUpdated)||S)&&js(()=>{N&&$s(N,f,h,i),S&&ln(h,i,f,"updated")},m)},Ps=(i,h,f,m,_,x,E)=>{for(let v=0;v<h.length;v++){const w=i[v],y=h[v],S=w.el&&(w.type===ns||!Nn(w,y)||w.shapeFlag&70)?d(w.el):f;P(w,y,S,null,m,_,x,E,!0)}},Gs=(i,h,f,m,_,x,E)=>{if(f!==m){if(f!==Z)for(const v in f)!pt(v)&&!(v in m)&&l(i,v,f[v],null,E,h.children,_,x,ps);for(const v in m){if(pt(v))continue;const w=m[v],y=f[v];w!==y&&v!=="value"&&l(i,v,y,w,E,h.children,_,x,ps)}"value"in m&&l(i,"value",f.value,m.value)}},an=(i,h,f,m,_,x,E,v,w)=>{const y=h.el=i?i.el:c(""),S=h.anchor=i?i.anchor:c("");let{patchFlag:q,dynamicChildren:T,slotScopeIds:N}=h;N&&(v=v?v.concat(N):N),i==null?(e(y,f,m),e(S,f,m),zs(h.children,f,S,_,x,E,v,w)):q>0&&q&64&&T&&i.dynamicChildren?(Ps(i.dynamicChildren,T,f,_,x,E,v),(h.key!=null||_&&h===_.subTree)&&ml(i,h,!0)):W(i,h,f,S,_,x,E,v,w)},Ss=(i,h,f,m,_,x,E,v,w)=>{h.slotScopeIds=v,i==null?h.shapeFlag&512?_.ctx.activate(h,f,m,E,w):Mn(h,f,m,_,x,E,w):mn(i,h,w)},Mn=(i,h,f,m,_,x,E)=>{const v=i.component=Ar(i,m,_);if(ll(i)&&(v.ctx.renderer=k),Rr(v),v.asyncDep){if(_&&_.registerDep(v,ls),!i.el){const w=v.subTree=ts(hn);O(null,w,h,f)}return}ls(v,i,h,f,_,x,E)},mn=(i,h,f)=>{const m=h.component=i.component;if(zo(i,h,f))if(m.asyncDep&&!m.asyncResolved){Y(m,h,f);return}else m.next=h,Oo(m.update),m.update();else h.el=i.el,m.vnode=h},ls=(i,h,f,m,_,x,E)=>{const v=()=>{if(i.isMounted){let{next:S,bu:q,u:T,parent:N,vnode:z}=i,X=S,Q;on(i,!1),S?(S.el=z.el,Y(i,S,E)):S=z,q&&Ot(q),(Q=S.props&&S.props.onVnodeBeforeUpdate)&&$s(Q,N,S,z),on(i,!0);const es=$t(i),vs=i.subTree;i.subTree=es,P(vs,es,d(vs.el),j(vs),i,_,x),S.el=es.el,X===null&&Bo(i,es.el),T&&js(T,_),(Q=S.props&&S.props.onVnodeUpdated)&&js(()=>$s(Q,N,S,z),_)}else{let S;const{el:q,props:T}=h,{bm:N,m:z,parent:X}=i,Q=ut(h);if(on(i,!1),N&&Ot(N),!Q&&(S=T&&T.onVnodeBeforeMount)&&$s(S,X,h),on(i,!0),q&&V){const es=()=>{i.subTree=$t(i),V(q,i.subTree,i,_,null)};Q?h.type.__asyncLoader().then(()=>!i.isUnmounted&&es()):es()}else{const es=i.subTree=$t(i);P(null,es,f,m,i,_,x),h.el=es.el}if(z&&js(z,_),!Q&&(S=T&&T.onVnodeMounted)){const es=h;js(()=>$s(S,X,es),_)}(h.shapeFlag&256||X&&ut(X.vnode)&&X.vnode.shapeFlag&256)&&i.a&&js(i.a,_),i.isMounted=!0,h=f=m=null}},w=i.effect=new he(v,()=>xe(y),i.scope),y=i.update=()=>w.run();y.id=i.uid,on(i,!0),y()},Y=(i,h,f)=>{h.component=i;const m=i.vnode.props;i.vnode=h,i.next=null,dr(i,h.props,m,f),jr(i,h.children,f),On(),He(),$n()},W=(i,h,f,m,_,x,E,v,w=!1)=>{const y=i&&i.children,S=i?i.shapeFlag:0,q=h.children,{patchFlag:T,shapeFlag:N}=h;if(T>0){if(T&128){Js(y,q,f,m,_,x,E,v,w);return}else if(T&256){Bs(y,q,f,m,_,x,E,v,w);return}}N&8?(S&16&&ps(y,_,x),q!==y&&p(f,q)):S&16?N&16?Js(y,q,f,m,_,x,E,v,w):ps(y,_,x,!0):(S&8&&p(f,""),N&16&&zs(q,f,m,_,x,E,v,w))},Bs=(i,h,f,m,_,x,E,v,w)=>{i=i||wn,h=h||wn;const y=i.length,S=h.length,q=Math.min(y,S);let T;for(T=0;T<q;T++){const N=h[T]=w?Xs(h[T]):Ms(h[T]);P(i[T],N,f,null,_,x,E,v,w)}y>S?ps(i,_,x,!0,!1,q):zs(h,f,m,_,x,E,v,w,q)},Js=(i,h,f,m,_,x,E,v,w)=>{let y=0;const S=h.length;let q=i.length-1,T=S-1;for(;y<=q&&y<=T;){const N=i[y],z=h[y]=w?Xs(h[y]):Ms(h[y]);if(Nn(N,z))P(N,z,f,null,_,x,E,v,w);else break;y++}for(;y<=q&&y<=T;){const N=i[q],z=h[T]=w?Xs(h[T]):Ms(h[T]);if(Nn(N,z))P(N,z,f,null,_,x,E,v,w);else break;q--,T--}if(y>q){if(y<=T){const N=T+1,z=N<S?h[N].el:m;for(;y<=T;)P(null,h[y]=w?Xs(h[y]):Ms(h[y]),f,z,_,x,E,v,w),y++}}else if(y>T)for(;y<=q;)ms(i[y],_,x,!0),y++;else{const N=y,z=y,X=new Map;for(y=z;y<=T;y++){const xs=h[y]=w?Xs(h[y]):Ms(h[y]);xs.key!=null&&X.set(xs.key,y)}let Q,es=0;const vs=T-z+1;let xn=!1,Se=0;const Ln=new Array(vs);for(y=0;y<vs;y++)Ln[y]=0;for(y=N;y<=q;y++){const xs=i[y];if(es>=vs){ms(xs,_,x,!0);continue}let Os;if(xs.key!=null)Os=X.get(xs.key);else for(Q=z;Q<=T;Q++)if(Ln[Q-z]===0&&Nn(xs,h[Q])){Os=Q;break}Os===void 0?ms(xs,_,x,!0):(Ln[Os-z]=y+1,Os>=Se?Se=Os:xn=!0,P(xs,h[Os],f,null,_,x,E,v,w),es++)}const Te=xn?yr(Ln):wn;for(Q=Te.length-1,y=vs-1;y>=0;y--){const xs=z+y,Os=h[xs],Oe=xs+1<S?h[xs+1].el:m;Ln[y]===0?P(null,Os,f,Oe,_,x,E,v,w):xn&&(Q<0||y!==Te[Q]?Ts(Os,f,Oe,2):Q--)}}},Ts=(i,h,f,m,_=null)=>{const{el:x,type:E,transition:v,children:w,shapeFlag:y}=i;if(y&6){Ts(i.component.subTree,h,f,m);return}if(y&128){i.suspense.move(h,f,m);return}if(y&64){E.move(i,h,f,k);return}if(E===ns){e(x,h,f);for(let q=0;q<w.length;q++)Ts(w[q],h,f,m);e(i.anchor,h,f);return}if(E===Lt){D(i,h,f);return}if(m!==2&&y&1&&v)if(m===0)v.beforeEnter(x),e(x,h,f),js(()=>v.enter(x),_);else{const{leave:q,delayLeave:T,afterLeave:N}=v,z=()=>e(x,h,f),X=()=>{q(x,()=>{z(),N&&N()})};T?T(x,z,X):X()}else e(x,h,f)},ms=(i,h,f,m=!1,_=!1)=>{const{type:x,props:E,ref:v,children:w,dynamicChildren:y,shapeFlag:S,patchFlag:q,dirs:T}=i;if(v!=null&&Zt(v,null,f,i,!0),S&256){h.ctx.deactivate(i);return}const N=S&1&&T,z=!ut(i);let X;if(z&&(X=E&&E.onVnodeBeforeUnmount)&&$s(X,h,i),S&6)et(i.component,f,m);else{if(S&128){i.suspense.unmount(f,m);return}N&&ln(i,null,h,"beforeUnmount"),S&64?i.type.remove(i,h,f,_,k,m):y&&(x!==ns||q>0&&q&64)?ps(y,h,f,!1,!0):(x===ns&&q&384||!_&&S&16)&&ps(w,h,f),m&&jn(i)}(z&&(X=E&&E.onVnodeUnmounted)||N)&&js(()=>{X&&$s(X,h,i),N&&ln(i,null,h,"unmounted")},f)},jn=i=>{const{type:h,el:f,anchor:m,transition:_}=i;if(h===ns){_n(f,m);return}if(h===Lt){M(i);return}const x=()=>{a(f),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(i.shapeFlag&1&&_&&!_.persisted){const{leave:E,delayLeave:v}=_,w=()=>E(f,x);v?v(i.el,x,w):w()}else x()},_n=(i,h)=>{let f;for(;i!==h;)f=g(i),a(i),i=f;a(h)},et=(i,h,f)=>{const{bum:m,scope:_,update:x,subTree:E,um:v}=i;m&&Ot(m),_.stop(),x&&(x.active=!1,ms(E,i,h,f)),v&&js(v,h),js(()=>{i.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&i.asyncDep&&!i.asyncResolved&&i.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},ps=(i,h,f,m=!1,_=!1,x=0)=>{for(let E=x;E<i.length;E++)ms(i[E],h,f,m,_)},j=i=>i.shapeFlag&6?j(i.component.subTree):i.shapeFlag&128?i.suspense.next():g(i.anchor||i.el),I=(i,h,f)=>{i==null?h._vnode&&ms(h._vnode,null,null,!0):P(h._vnode||null,i,h,null,null,null,f),He(),sl(),h._vnode=i},k={p:P,um:ms,m:Ts,r:jn,mt:Mn,mc:zs,pc:W,pbc:Ps,n:j,o:s};let R,V;return n&&([R,V]=n(k)),{render:I,hydrate:R,createApp:hr(I,R)}}function on({effect:s,update:n},t){s.allowRecurse=n.allowRecurse=t}function ml(s,n,t=!1){const e=s.children,a=n.children;if(L(e)&&L(a))for(let l=0;l<e.length;l++){const o=e[l];let c=a[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=a[l]=Xs(a[l]),c.el=o.el),t||ml(o,c)),c.type===At&&(c.el=o.el)}}function yr(s){const n=s.slice(),t=[0];let e,a,l,o,c;const r=s.length;for(e=0;e<r;e++){const u=s[e];if(u!==0){if(a=t[t.length-1],s[a]<u){n[e]=a,t.push(e);continue}for(l=0,o=t.length-1;l<o;)c=l+o>>1,s[t[c]]<u?l=c+1:o=c;u<s[t[l]]&&(l>0&&(n[e]=t[l-1]),t[l]=e)}}for(l=t.length,o=t[l-1];l-- >0;)t[l]=o,o=n[o];return t}const br=s=>s.__isTeleport,ns=Symbol.for("v-fgt"),At=Symbol.for("v-txt"),hn=Symbol.for("v-cmt"),Lt=Symbol.for("v-stc"),Dn=[];let Is=null;function H(s=!1){Dn.push(Is=s?null:[])}function vr(){Dn.pop(),Is=Dn[Dn.length-1]||null}let Xn=1;function sa(s){Xn+=s}function jl(s){return s.dynamicChildren=Xn>0?Is||wn:null,vr(),Xn>0&&Is&&Is.push(s),s}function G(s,n,t,e,a,l){return jl(C(s,n,t,e,a,l,!0))}function ke(s,n,t,e,a){return jl(ts(s,n,t,e,a,!0))}function se(s){return s?s.__v_isVNode===!0:!1}function Nn(s,n){return s.type===n.type&&s.key===n.key}const Rt="__vInternal",_l=({key:s})=>s!=null?s:null,ft=({ref:s,ref_key:n,ref_for:t})=>(typeof s=="number"&&(s=""+s),s!=null?as(s)||hs(s)||F(s)?{i:Es,r:s,k:n,f:!!t}:s:null);function C(s,n=null,t=null,e=0,a=null,l=s===ns?0:1,o=!1,c=!1){const r={__v_isVNode:!0,__v_skip:!0,type:s,props:n,key:n&&_l(n),ref:n&&ft(n),scopeId:qt,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:e,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Es};return c?(Ee(r,t),l&128&&s.normalize(r)):t&&(r.shapeFlag|=as(t)?8:16),Xn>0&&!o&&Is&&(r.patchFlag>0||l&6)&&r.patchFlag!==32&&Is.push(r),r}const ts=wr;function wr(s,n=null,t=null,e=0,a=null,l=!1){if((!s||s===er)&&(s=hn),se(s)){const c=An(s,n,!0);return t&&Ee(c,t),Xn>0&&!l&&Is&&(c.shapeFlag&6?Is[Is.indexOf(s)]=c:Is.push(c)),c.patchFlag|=-2,c}if($r(s)&&(s=s.__vccOpts),n){n=kr(n);let{class:c,style:r}=n;c&&!as(c)&&(n.class=qn(c)),ss(r)&&(Ka(r)&&!L(r)&&(r=os({},r)),n.style=Gn(r))}const o=as(s)?1:Ho(s)?128:br(s)?64:ss(s)?4:F(s)?2:0;return C(s,n,t,e,a,o,l,!0)}function kr(s){return s?Ka(s)||Rt in s?os({},s):s:null}function An(s,n,t=!1){const{props:e,ref:a,patchFlag:l,children:o}=s,c=n?Ir(e||{},n):e;return{__v_isVNode:!0,__v_skip:!0,type:s.type,props:c,key:c&&_l(c),ref:n&&n.ref?t&&a?L(a)?a.concat(ft(n)):[a,ft(n)]:ft(n):a,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:o,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:n&&s.type!==ns?l===-1?16:l|16:l,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:s.transition,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&An(s.ssContent),ssFallback:s.ssFallback&&An(s.ssFallback),el:s.el,anchor:s.anchor,ctx:s.ctx,ce:s.ce}}function ne(s=" ",n=0){return ts(At,null,s,n)}function Er(s="",n=!1){return n?(H(),ke(hn,null,s)):ts(hn,null,s)}function Ms(s){return s==null||typeof s=="boolean"?ts(hn):L(s)?ts(ns,null,s.slice()):typeof s=="object"?Xs(s):ts(At,null,String(s))}function Xs(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:An(s)}function Ee(s,n){let t=0;const{shapeFlag:e}=s;if(n==null)n=null;else if(L(n))t=16;else if(typeof n=="object")if(e&65){const a=n.default;a&&(a._c&&(a._d=!1),Ee(s,a()),a._c&&(a._d=!0));return}else{t=32;const a=n._;!a&&!(Rt in n)?n._ctx=Es:a===3&&Es&&(Es.slots._===1?n._=1:(n._=2,s.patchFlag|=1024))}else F(n)?(n={default:n,_ctx:Es},t=32):(n=String(n),e&64?(t=16,n=[ne(n)]):t=8);s.children=n,s.shapeFlag|=t}function Ir(...s){const n={};for(let t=0;t<s.length;t++){const e=s[t];for(const a in e)if(a==="class")n.class!==e.class&&(n.class=qn([n.class,e.class]));else if(a==="style")n.style=Gn([n.style,e.style]);else if(yt(a)){const l=n[a],o=e[a];o&&l!==o&&!(L(l)&&l.includes(o))&&(n[a]=l?[].concat(l,o):o)}else a!==""&&(n[a]=e[a])}return n}function $s(s,n,t,e=null){Cs(s,n,7,[t,e])}const qr=pl();let Cr=0;function Ar(s,n,t){const e=s.type,a=(n?n.appContext:s.appContext)||qr,l={uid:Cr++,vnode:s,type:e,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ql(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hl(e,a),emitsOptions:tl(e,a),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:e.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=n?n.root:l,l.emit=Lo.bind(null,l),s.ce&&s.ce(l),l}let rs=null,Ie,yn,na="__VUE_INSTANCE_SETTERS__";(yn=Ht()[na])||(yn=Ht()[na]=[]),yn.push(s=>rs=s),Ie=s=>{yn.length>1?yn.forEach(n=>n(s)):yn[0](s)};const Rn=s=>{Ie(s),s.scope.on()},un=()=>{rs&&rs.scope.off(),Ie(null)};function xl(s){return s.vnode.shapeFlag&4}let Zn=!1;function Rr(s,n=!1){Zn=n;const{props:t,children:e}=s.vnode,a=xl(s);fr(s,t,a,n),mr(s,e);const l=a?Pr(s,n):void 0;return Zn=!1,l}function Pr(s,n){const t=s.type;s.accessCache=Object.create(null),s.proxy=Wa(new Proxy(s.ctx,lr));const{setup:e}=t;if(e){const a=s.setupContext=e.length>1?Tr(s):null;Rn(s),On();const l=nn(e,s,0,[s.props,a]);if($n(),un(),Aa(l)){if(l.then(un,un),n)return l.then(o=>{ta(s,o,n)}).catch(o=>{Et(o,s,0)});s.asyncDep=l}else ta(s,l,n)}else yl(s,n)}function ta(s,n,t){F(n)?s.type.__ssrInlineRender?s.ssrRender=n:s.render=n:ss(n)&&(s.setupState=Qa(n)),yl(s,t)}let ea;function yl(s,n,t){const e=s.type;if(!s.render){if(!n&&ea&&!e.render){const a=e.template||ve(s).template;if(a){const{isCustomElement:l,compilerOptions:o}=s.appContext.config,{delimiters:c,compilerOptions:r}=e,u=os(os({isCustomElement:l,delimiters:c},o),r);e.render=ea(a,u)}}s.render=e.render||qs}Rn(s),On(),or(s),$n(),un()}function Sr(s){return s.attrsProxy||(s.attrsProxy=new Proxy(s.attrs,{get(n,t){return _s(s,"get","$attrs"),n[t]}}))}function Tr(s){const n=t=>{s.exposed=t||{}};return{get attrs(){return Sr(s)},slots:s.slots,emit:s.emit,expose:n}}function qe(s){if(s.exposed)return s.exposeProxy||(s.exposeProxy=new Proxy(Qa(Wa(s.exposed)),{get(n,t){if(t in n)return n[t];if(t in Hn)return Hn[t](s)},has(n,t){return t in n||t in Hn}}))}function Or(s,n=!0){return F(s)?s.displayName||s.name:s.name||n&&s.__name}function $r(s){return F(s)&&"__vccOpts"in s}const ys=(s,n)=>Po(s,n,Zn);function bl(s,n,t){const e=arguments.length;return e===2?ss(n)&&!L(n)?se(n)?ts(s,null,[n]):ts(s,n):ts(s,null,n):(e>3?t=Array.prototype.slice.call(arguments,2):e===3&&se(t)&&(t=[t]),ts(s,n,t))}const Mr=Symbol.for("v-scx"),Lr=()=>Us(Mr),Nr="3.3.4",Ur="http://www.w3.org/2000/svg",cn=typeof document!="undefined"?document:null,aa=cn&&cn.createElement("template"),Fr={insert:(s,n,t)=>{n.insertBefore(s,t||null)},remove:s=>{const n=s.parentNode;n&&n.removeChild(s)},createElement:(s,n,t,e)=>{const a=n?cn.createElementNS(Ur,s):cn.createElement(s,t?{is:t}:void 0);return s==="select"&&e&&e.multiple!=null&&a.setAttribute("multiple",e.multiple),a},createText:s=>cn.createTextNode(s),createComment:s=>cn.createComment(s),setText:(s,n)=>{s.nodeValue=n},setElementText:(s,n)=>{s.textContent=n},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>cn.querySelector(s),setScopeId(s,n){s.setAttribute(n,"")},insertStaticContent(s,n,t,e,a,l){const o=t?t.previousSibling:n.lastChild;if(a&&(a===l||a.nextSibling))for(;n.insertBefore(a.cloneNode(!0),t),!(a===l||!(a=a.nextSibling)););else{aa.innerHTML=e?`<svg>${s}</svg>`:s;const c=aa.content;if(e){const r=c.firstChild;for(;r.firstChild;)c.appendChild(r.firstChild);c.removeChild(r)}n.insertBefore(c,t)}return[o?o.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function zr(s,n,t){const e=s._vtc;e&&(n=(n?[n,...e]:[...e]).join(" ")),n==null?s.removeAttribute("class"):t?s.setAttribute("class",n):s.className=n}function Br(s,n,t){const e=s.style,a=as(t);if(t&&!a){if(n&&!as(n))for(const l in n)t[l]==null&&te(e,l,"");for(const l in t)te(e,l,t[l])}else{const l=e.display;a?n!==t&&(e.cssText=t):n&&s.removeAttribute("style"),"_vod"in s&&(e.display=l)}}const la=/\s*!important$/;function te(s,n,t){if(L(t))t.forEach(e=>te(s,n,e));else if(t==null&&(t=""),n.startsWith("--"))s.setProperty(n,t);else{const e=Hr(s,n);la.test(t)?s.setProperty(Tn(e),t.replace(la,""),"important"):s[e]=t}}const oa=["Webkit","Moz","ms"],Nt={};function Hr(s,n){const t=Nt[n];if(t)return t;let e=Fs(n);if(e!=="filter"&&e in s)return Nt[n]=e;e=wt(e);for(let a=0;a<oa.length;a++){const l=oa[a]+e;if(l in s)return Nt[n]=l}return n}const ra="http://www.w3.org/1999/xlink";function Dr(s,n,t,e,a){if(e&&n.startsWith("xlink:"))t==null?s.removeAttributeNS(ra,n.slice(6,n.length)):s.setAttributeNS(ra,n,t);else{const l=Jl(n);t==null||l&&!Sa(t)?s.removeAttribute(n):s.setAttribute(n,l?"":t)}}function Kr(s,n,t,e,a,l,o){if(n==="innerHTML"||n==="textContent"){e&&o(e,a,l),s[n]=t==null?"":t;return}const c=s.tagName;if(n==="value"&&c!=="PROGRESS"&&!c.includes("-")){s._value=t;const u=c==="OPTION"?s.getAttribute("value"):s.value,p=t==null?"":t;u!==p&&(s.value=p),t==null&&s.removeAttribute(n);return}let r=!1;if(t===""||t==null){const u=typeof s[n];u==="boolean"?t=Sa(t):t==null&&u==="string"?(t="",r=!0):u==="number"&&(t=0,r=!0)}try{s[n]=t}catch{}r&&s.removeAttribute(n)}function Wr(s,n,t,e){s.addEventListener(n,t,e)}function Vr(s,n,t,e){s.removeEventListener(n,t,e)}function Gr(s,n,t,e,a=null){const l=s._vei||(s._vei={}),o=l[n];if(e&&o)o.value=e;else{const[c,r]=Jr(n);if(e){const u=l[n]=Xr(e,a);Wr(s,c,u,r)}else o&&(Vr(s,c,o,r),l[n]=void 0)}}const ca=/(?:Once|Passive|Capture)$/;function Jr(s){let n;if(ca.test(s)){n={};let e;for(;e=s.match(ca);)s=s.slice(0,s.length-e[0].length),n[e[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):Tn(s.slice(2)),n]}let Ut=0;const Qr=Promise.resolve(),Yr=()=>Ut||(Qr.then(()=>Ut=0),Ut=Date.now());function Xr(s,n){const t=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=t.attached)return;Cs(Zr(e,t.value),n,5,[e])};return t.value=s,t.attached=Yr(),t}function Zr(s,n){if(L(n)){const t=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{t.call(s),s._stopped=!0},n.map(e=>a=>!a._stopped&&e&&e(a))}else return n}const ia=/^on[a-z]/,sc=(s,n,t,e,a=!1,l,o,c,r)=>{n==="class"?zr(s,e,a):n==="style"?Br(s,t,e):yt(n)?re(n)||Gr(s,n,t,e,o):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):nc(s,n,e,a))?Kr(s,n,e,l,o,c,r):(n==="true-value"?s._trueValue=e:n==="false-value"&&(s._falseValue=e),Dr(s,n,e,a))};function nc(s,n,t,e){return e?!!(n==="innerHTML"||n==="textContent"||n in s&&ia.test(n)&&F(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&s.tagName==="INPUT"||n==="type"&&s.tagName==="TEXTAREA"||ia.test(n)&&as(t)?!1:n in s}const tc=os({patchProp:sc},Fr);let pa;function ec(){return pa||(pa=_r(tc))}const ac=(...s)=>{const n=ec().createApp(...s),{mount:t}=n;return n.mount=e=>{const a=lc(e);if(!a)return;const l=n._component;!F(l)&&!l.render&&!l.template&&(l.template=a.innerHTML),a.innerHTML="";const o=t(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},n};function lc(s){return as(s)?document.querySelector(s):s}var bs=(s,n)=>{const t=s.__vccOpts||s;for(const[e,a]of n)t[e]=a;return t};const oc={};function rc(s,n){const t=cl("router-view");return H(),ke(t)}var cc=bs(oc,[["render",rc]]);/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const bn=typeof window!="undefined";function ic(s){return s.__esModule||s[Symbol.toStringTag]==="Module"}const J=Object.assign;function Ft(s,n){const t={};for(const e in n){const a=n[e];t[e]=As(a)?a.map(s):s(a)}return t}const Kn=()=>{},As=Array.isArray,pc=/\/$/,uc=s=>s.replace(pc,"");function zt(s,n,t="/"){let e,a={},l="",o="";const c=n.indexOf("#");let r=n.indexOf("?");return c<r&&c>=0&&(r=-1),r>-1&&(e=n.slice(0,r),l=n.slice(r+1,c>-1?c:n.length),a=s(l)),c>-1&&(e=e||n.slice(0,c),o=n.slice(c,n.length)),e=gc(e!=null?e:n,t),{fullPath:e+(l&&"?")+l+o,path:e,query:a,hash:o}}function hc(s,n){const t=n.query?s(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function ua(s,n){return!n||!s.toLowerCase().startsWith(n.toLowerCase())?s:s.slice(n.length)||"/"}function fc(s,n,t){const e=n.matched.length-1,a=t.matched.length-1;return e>-1&&e===a&&Pn(n.matched[e],t.matched[a])&&vl(n.params,t.params)&&s(n.query)===s(t.query)&&n.hash===t.hash}function Pn(s,n){return(s.aliasOf||s)===(n.aliasOf||n)}function vl(s,n){if(Object.keys(s).length!==Object.keys(n).length)return!1;for(const t in s)if(!dc(s[t],n[t]))return!1;return!0}function dc(s,n){return As(s)?ha(s,n):As(n)?ha(n,s):s===n}function ha(s,n){return As(n)?s.length===n.length&&s.every((t,e)=>t===n[e]):s.length===1&&s[0]===n}function gc(s,n){if(s.startsWith("/"))return s;if(!s)return n;const t=n.split("/"),e=s.split("/"),a=e[e.length-1];(a===".."||a===".")&&e.push("");let l=t.length-1,o,c;for(o=0;o<e.length;o++)if(c=e[o],c!==".")if(c==="..")l>1&&l--;else break;return t.slice(0,l).join("/")+"/"+e.slice(o-(o===e.length?1:0)).join("/")}var st;(function(s){s.pop="pop",s.push="push"})(st||(st={}));var Wn;(function(s){s.back="back",s.forward="forward",s.unknown=""})(Wn||(Wn={}));function mc(s){if(!s)if(bn){const n=document.querySelector("base");s=n&&n.getAttribute("href")||"/",s=s.replace(/^\w+:\/\/[^\/]+/,"")}else s="/";return s[0]!=="/"&&s[0]!=="#"&&(s="/"+s),uc(s)}const jc=/^[^#]+#/;function _c(s,n){return s.replace(jc,"#")+n}function xc(s,n){const t=document.documentElement.getBoundingClientRect(),e=s.getBoundingClientRect();return{behavior:n.behavior,left:e.left-t.left-(n.left||0),top:e.top-t.top-(n.top||0)}}const Pt=()=>({left:window.pageXOffset,top:window.pageYOffset});function yc(s){let n;if("el"in s){const t=s.el,e=typeof t=="string"&&t.startsWith("#"),a=typeof t=="string"?e?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!a)return;n=xc(a,s)}else n=s;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function fa(s,n){return(history.state?history.state.position-n:-1)+s}const ee=new Map;function bc(s,n){ee.set(s,n)}function vc(s){const n=ee.get(s);return ee.delete(s),n}let wc=()=>location.protocol+"//"+location.host;function wl(s,n){const{pathname:t,search:e,hash:a}=n,l=s.indexOf("#");if(l>-1){let c=a.includes(s.slice(l))?s.slice(l).length:1,r=a.slice(c);return r[0]!=="/"&&(r="/"+r),ua(r,"")}return ua(t,s)+e+a}function kc(s,n,t,e){let a=[],l=[],o=null;const c=({state:g})=>{const b=wl(s,location),A=t.value,P=n.value;let U=0;if(g){if(t.value=b,n.value=g,o&&o===A){o=null;return}U=P?g.position-P.position:0}else e(b);a.forEach(O=>{O(t.value,A,{delta:U,type:st.pop,direction:U?U>0?Wn.forward:Wn.back:Wn.unknown})})};function r(){o=t.value}function u(g){a.push(g);const b=()=>{const A=a.indexOf(g);A>-1&&a.splice(A,1)};return l.push(b),b}function p(){const{history:g}=window;!g.state||g.replaceState(J({},g.state,{scroll:Pt()}),"")}function d(){for(const g of l)g();l=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:r,listen:u,destroy:d}}function da(s,n,t,e=!1,a=!1){return{back:s,current:n,forward:t,replaced:e,position:window.history.length,scroll:a?Pt():null}}function Ec(s){const{history:n,location:t}=window,e={value:wl(s,t)},a={value:n.state};a.value||l(e.value,{back:null,current:e.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function l(r,u,p){const d=s.indexOf("#"),g=d>-1?(t.host&&document.querySelector("base")?s:s.slice(d))+r:wc()+s+r;try{n[p?"replaceState":"pushState"](u,"",g),a.value=u}catch(b){console.error(b),t[p?"replace":"assign"](g)}}function o(r,u){const p=J({},n.state,da(a.value.back,r,a.value.forward,!0),u,{position:a.value.position});l(r,p,!0),e.value=r}function c(r,u){const p=J({},a.value,n.state,{forward:r,scroll:Pt()});l(p.current,p,!0);const d=J({},da(e.value,r,null),{position:p.position+1},u);l(r,d,!1),e.value=r}return{location:e,state:a,push:c,replace:o}}function Ic(s){s=mc(s);const n=Ec(s),t=kc(s,n.state,n.location,n.replace);function e(l,o=!0){o||t.pauseListeners(),history.go(l)}const a=J({location:"",base:s,go:e,createHref:_c.bind(null,s)},n,t);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>n.state.value}),a}function qc(s){return typeof s=="string"||s&&typeof s=="object"}function kl(s){return typeof s=="string"||typeof s=="symbol"}const Ys={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},El=Symbol("");var ga;(function(s){s[s.aborted=4]="aborted",s[s.cancelled=8]="cancelled",s[s.duplicated=16]="duplicated"})(ga||(ga={}));function Sn(s,n){return J(new Error,{type:s,[El]:!0},n)}function Hs(s,n){return s instanceof Error&&El in s&&(n==null||!!(s.type&n))}const ma="[^/]+?",Cc={sensitive:!1,strict:!1,start:!0,end:!0},Ac=/[.+*?^${}()[\]/\\]/g;function Rc(s,n){const t=J({},Cc,n),e=[];let a=t.start?"^":"";const l=[];for(const u of s){const p=u.length?[]:[90];t.strict&&!u.length&&(a+="/");for(let d=0;d<u.length;d++){const g=u[d];let b=40+(t.sensitive?.25:0);if(g.type===0)d||(a+="/"),a+=g.value.replace(Ac,"\\$&"),b+=40;else if(g.type===1){const{value:A,repeatable:P,optional:U,regexp:O}=g;l.push({name:A,repeatable:P,optional:U});const $=O||ma;if($!==ma){b+=10;try{new RegExp(`(${$})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${A}" (${$}): `+M.message)}}let D=P?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;d||(D=U&&u.length<2?`(?:/${D})`:"/"+D),U&&(D+="?"),a+=D,b+=20,U&&(b+=-8),P&&(b+=-20),$===".*"&&(b+=-50)}p.push(b)}e.push(p)}if(t.strict&&t.end){const u=e.length-1;e[u][e[u].length-1]+=.7000000000000001}t.strict||(a+="/?"),t.end?a+="$":t.strict&&(a+="(?:/|$)");const o=new RegExp(a,t.sensitive?"":"i");function c(u){const p=u.match(o),d={};if(!p)return null;for(let g=1;g<p.length;g++){const b=p[g]||"",A=l[g-1];d[A.name]=b&&A.repeatable?b.split("/"):b}return d}function r(u){let p="",d=!1;for(const g of s){(!d||!p.endsWith("/"))&&(p+="/"),d=!1;for(const b of g)if(b.type===0)p+=b.value;else if(b.type===1){const{value:A,repeatable:P,optional:U}=b,O=A in u?u[A]:"";if(As(O)&&!P)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const $=As(O)?O.join("/"):O;if(!$)if(U)g.length<2&&(p.endsWith("/")?p=p.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);p+=$}}return p||"/"}return{re:o,score:e,keys:l,parse:c,stringify:r}}function Pc(s,n){let t=0;for(;t<s.length&&t<n.length;){const e=n[t]-s[t];if(e)return e;t++}return s.length<n.length?s.length===1&&s[0]===40+40?-1:1:s.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function Sc(s,n){let t=0;const e=s.score,a=n.score;for(;t<e.length&&t<a.length;){const l=Pc(e[t],a[t]);if(l)return l;t++}if(Math.abs(a.length-e.length)===1){if(ja(e))return 1;if(ja(a))return-1}return a.length-e.length}function ja(s){const n=s[s.length-1];return s.length>0&&n[n.length-1]<0}const Tc={type:0,value:""},Oc=/[a-zA-Z0-9_]/;function $c(s){if(!s)return[[]];if(s==="/")return[[Tc]];if(!s.startsWith("/"))throw new Error(`Invalid path "${s}"`);function n(b){throw new Error(`ERR (${t})/"${u}": ${b}`)}let t=0,e=t;const a=[];let l;function o(){l&&a.push(l),l=[]}let c=0,r,u="",p="";function d(){!u||(t===0?l.push({type:0,value:u}):t===1||t===2||t===3?(l.length>1&&(r==="*"||r==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:p,repeatable:r==="*"||r==="+",optional:r==="*"||r==="?"})):n("Invalid state to consume buffer"),u="")}function g(){u+=r}for(;c<s.length;){if(r=s[c++],r==="\\"&&t!==2){e=t,t=4;continue}switch(t){case 0:r==="/"?(u&&d(),o()):r===":"?(d(),t=1):g();break;case 4:g(),t=e;break;case 1:r==="("?t=2:Oc.test(r)?g():(d(),t=0,r!=="*"&&r!=="?"&&r!=="+"&&c--);break;case 2:r===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+r:t=3:p+=r;break;case 3:d(),t=0,r!=="*"&&r!=="?"&&r!=="+"&&c--,p="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${u}"`),d(),o(),a}function Mc(s,n,t){const e=Rc($c(s.path),t),a=J(e,{record:s,parent:n,children:[],alias:[]});return n&&!a.record.aliasOf==!n.record.aliasOf&&n.children.push(a),a}function Lc(s,n){const t=[],e=new Map;n=ya({strict:!1,end:!0,sensitive:!1},n);function a(p){return e.get(p)}function l(p,d,g){const b=!g,A=Nc(p);A.aliasOf=g&&g.record;const P=ya(n,p),U=[A];if("alias"in p){const D=typeof p.alias=="string"?[p.alias]:p.alias;for(const M of D)U.push(J({},A,{components:g?g.record.components:A.components,path:M,aliasOf:g?g.record:A}))}let O,$;for(const D of U){const{path:M}=D;if(d&&M[0]!=="/"){const is=d.record.path,fs=is[is.length-1]==="/"?"":"/";D.path=d.record.path+(M&&fs+M)}if(O=Mc(D,d,P),g?g.alias.push(O):($=$||O,$!==O&&$.alias.push(O),b&&p.name&&!xa(O)&&o(p.name)),A.children){const is=A.children;for(let fs=0;fs<is.length;fs++)l(is[fs],O,g&&g.children[fs])}g=g||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&r(O)}return $?()=>{o($)}:Kn}function o(p){if(kl(p)){const d=e.get(p);d&&(e.delete(p),t.splice(t.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=t.indexOf(p);d>-1&&(t.splice(d,1),p.record.name&&e.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return t}function r(p){let d=0;for(;d<t.length&&Sc(p,t[d])>=0&&(p.record.path!==t[d].record.path||!Il(p,t[d]));)d++;t.splice(d,0,p),p.record.name&&!xa(p)&&e.set(p.record.name,p)}function u(p,d){let g,b={},A,P;if("name"in p&&p.name){if(g=e.get(p.name),!g)throw Sn(1,{location:p});P=g.record.name,b=J(_a(d.params,g.keys.filter($=>!$.optional).map($=>$.name)),p.params&&_a(p.params,g.keys.map($=>$.name))),A=g.stringify(b)}else if("path"in p)A=p.path,g=t.find($=>$.re.test(A)),g&&(b=g.parse(A),P=g.record.name);else{if(g=d.name?e.get(d.name):t.find($=>$.re.test(d.path)),!g)throw Sn(1,{location:p,currentLocation:d});P=g.record.name,b=J({},d.params,p.params),A=g.stringify(b)}const U=[];let O=g;for(;O;)U.unshift(O.record),O=O.parent;return{name:P,path:A,params:b,matched:U,meta:Fc(U)}}return s.forEach(p=>l(p)),{addRoute:l,resolve:u,removeRoute:o,getRoutes:c,getRecordMatcher:a}}function _a(s,n){const t={};for(const e of n)e in s&&(t[e]=s[e]);return t}function Nc(s){return{path:s.path,redirect:s.redirect,name:s.name,meta:s.meta||{},aliasOf:void 0,beforeEnter:s.beforeEnter,props:Uc(s),children:s.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in s?s.components||null:s.component&&{default:s.component}}}function Uc(s){const n={},t=s.props||!1;if("component"in s)n.default=t;else for(const e in s.components)n[e]=typeof t=="boolean"?t:t[e];return n}function xa(s){for(;s;){if(s.record.aliasOf)return!0;s=s.parent}return!1}function Fc(s){return s.reduce((n,t)=>J(n,t.meta),{})}function ya(s,n){const t={};for(const e in s)t[e]=e in n?n[e]:s[e];return t}function Il(s,n){return n.children.some(t=>t===s||Il(s,t))}const ql=/#/g,zc=/&/g,Bc=/\//g,Hc=/=/g,Dc=/\?/g,Cl=/\+/g,Kc=/%5B/g,Wc=/%5D/g,Al=/%5E/g,Vc=/%60/g,Rl=/%7B/g,Gc=/%7C/g,Pl=/%7D/g,Jc=/%20/g;function Ce(s){return encodeURI(""+s).replace(Gc,"|").replace(Kc,"[").replace(Wc,"]")}function Qc(s){return Ce(s).replace(Rl,"{").replace(Pl,"}").replace(Al,"^")}function ae(s){return Ce(s).replace(Cl,"%2B").replace(Jc,"+").replace(ql,"%23").replace(zc,"%26").replace(Vc,"`").replace(Rl,"{").replace(Pl,"}").replace(Al,"^")}function Yc(s){return ae(s).replace(Hc,"%3D")}function Xc(s){return Ce(s).replace(ql,"%23").replace(Dc,"%3F")}function Zc(s){return s==null?"":Xc(s).replace(Bc,"%2F")}function xt(s){try{return decodeURIComponent(""+s)}catch{}return""+s}function si(s){const n={};if(s===""||s==="?")return n;const e=(s[0]==="?"?s.slice(1):s).split("&");for(let a=0;a<e.length;++a){const l=e[a].replace(Cl," "),o=l.indexOf("="),c=xt(o<0?l:l.slice(0,o)),r=o<0?null:xt(l.slice(o+1));if(c in n){let u=n[c];As(u)||(u=n[c]=[u]),u.push(r)}else n[c]=r}return n}function ba(s){let n="";for(let t in s){const e=s[t];if(t=Yc(t),e==null){e!==void 0&&(n+=(n.length?"&":"")+t);continue}(As(e)?e.map(l=>l&&ae(l)):[e&&ae(e)]).forEach(l=>{l!==void 0&&(n+=(n.length?"&":"")+t,l!=null&&(n+="="+l))})}return n}function ni(s){const n={};for(const t in s){const e=s[t];e!==void 0&&(n[t]=As(e)?e.map(a=>a==null?null:""+a):e==null?e:""+e)}return n}const ti=Symbol(""),va=Symbol(""),Ae=Symbol(""),Re=Symbol(""),le=Symbol("");function Un(){let s=[];function n(e){return s.push(e),()=>{const a=s.indexOf(e);a>-1&&s.splice(a,1)}}function t(){s=[]}return{add:n,list:()=>s,reset:t}}function Zs(s,n,t,e,a){const l=e&&(e.enterCallbacks[a]=e.enterCallbacks[a]||[]);return()=>new Promise((o,c)=>{const r=d=>{d===!1?c(Sn(4,{from:t,to:n})):d instanceof Error?c(d):qc(d)?c(Sn(2,{from:n,to:d})):(l&&e.enterCallbacks[a]===l&&typeof d=="function"&&l.push(d),o())},u=s.call(e&&e.instances[a],n,t,r);let p=Promise.resolve(u);s.length<3&&(p=p.then(r)),p.catch(d=>c(d))})}function Bt(s,n,t,e){const a=[];for(const l of s)for(const o in l.components){let c=l.components[o];if(!(n!=="beforeRouteEnter"&&!l.instances[o]))if(ei(c)){const u=(c.__vccOpts||c)[n];u&&a.push(Zs(u,t,e,l,o))}else{let r=c();a.push(()=>r.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${l.path}"`));const p=ic(u)?u.default:u;l.components[o]=p;const g=(p.__vccOpts||p)[n];return g&&Zs(g,t,e,l,o)()}))}}return a}function ei(s){return typeof s=="object"||"displayName"in s||"props"in s||"__vccOpts"in s}function wa(s){const n=Us(Ae),t=Us(Re),e=ys(()=>n.resolve(Ns(s.to))),a=ys(()=>{const{matched:r}=e.value,{length:u}=r,p=r[u-1],d=t.matched;if(!p||!d.length)return-1;const g=d.findIndex(Pn.bind(null,p));if(g>-1)return g;const b=ka(r[u-2]);return u>1&&ka(p)===b&&d[d.length-1].path!==b?d.findIndex(Pn.bind(null,r[u-2])):g}),l=ys(()=>a.value>-1&&ri(t.params,e.value.params)),o=ys(()=>a.value>-1&&a.value===t.matched.length-1&&vl(t.params,e.value.params));function c(r={}){return oi(r)?n[Ns(s.replace)?"replace":"push"](Ns(s.to)).catch(Kn):Promise.resolve()}return{route:e,href:ys(()=>e.value.href),isActive:l,isExactActive:o,navigate:c}}const ai=ye({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wa,setup(s,{slots:n}){const t=nt(wa(s)),{options:e}=Us(Ae),a=ys(()=>({[Ea(s.activeClass,e.linkActiveClass,"router-link-active")]:t.isActive,[Ea(s.exactActiveClass,e.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const l=n.default&&n.default(t);return s.custom?l:bl("a",{"aria-current":t.isExactActive?s.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:a.value},l)}}}),li=ai;function oi(s){if(!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&!s.defaultPrevented&&!(s.button!==void 0&&s.button!==0)){if(s.currentTarget&&s.currentTarget.getAttribute){const n=s.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return s.preventDefault&&s.preventDefault(),!0}}function ri(s,n){for(const t in n){const e=n[t],a=s[t];if(typeof e=="string"){if(e!==a)return!1}else if(!As(a)||a.length!==e.length||e.some((l,o)=>l!==a[o]))return!1}return!0}function ka(s){return s?s.aliasOf?s.aliasOf.path:s.path:""}const Ea=(s,n,t)=>s!=null?s:n!=null?n:t,ci=ye({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(s,{attrs:n,slots:t}){const e=Us(le),a=ys(()=>s.route||e.value),l=Us(va,0),o=ys(()=>{let u=Ns(l);const{matched:p}=a.value;let d;for(;(d=p[u])&&!d.components;)u++;return u}),c=ys(()=>a.value.matched[o.value]);ht(va,ys(()=>o.value+1)),ht(ti,c),ht(le,a);const r=gs();return Bn(()=>[r.value,c.value,s.name],([u,p,d],[g,b,A])=>{p&&(p.instances[d]=u,b&&b!==p&&u&&u===g&&(p.leaveGuards.size||(p.leaveGuards=b.leaveGuards),p.updateGuards.size||(p.updateGuards=b.updateGuards))),u&&p&&(!b||!Pn(p,b)||!g)&&(p.enterCallbacks[d]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=a.value,p=s.name,d=c.value,g=d&&d.components[p];if(!g)return Ia(t.default,{Component:g,route:u});const b=d.props[p],A=b?b===!0?u.params:typeof b=="function"?b(u):b:null,U=bl(g,J({},A,n,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(d.instances[p]=null)},ref:r}));return Ia(t.default,{Component:U,route:u})||U}}});function Ia(s,n){if(!s)return null;const t=s(n);return t.length===1?t[0]:t}const ii=ci;function pi(s){const n=Lc(s.routes,s),t=s.parseQuery||si,e=s.stringifyQuery||ba,a=s.history,l=Un(),o=Un(),c=Un(),r=qo(Ys);let u=Ys;bn&&s.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Ft.bind(null,j=>""+j),d=Ft.bind(null,Zc),g=Ft.bind(null,xt);function b(j,I){let k,R;return kl(j)?(k=n.getRecordMatcher(j),R=I):R=j,n.addRoute(R,k)}function A(j){const I=n.getRecordMatcher(j);I&&n.removeRoute(I)}function P(){return n.getRoutes().map(j=>j.record)}function U(j){return!!n.getRecordMatcher(j)}function O(j,I){if(I=J({},I||r.value),typeof j=="string"){const f=zt(t,j,I.path),m=n.resolve({path:f.path},I),_=a.createHref(f.fullPath);return J(f,m,{params:g(m.params),hash:xt(f.hash),redirectedFrom:void 0,href:_})}let k;if("path"in j)k=J({},j,{path:zt(t,j.path,I.path).path});else{const f=J({},j.params);for(const m in f)f[m]==null&&delete f[m];k=J({},j,{params:d(f)}),I.params=d(I.params)}const R=n.resolve(k,I),V=j.hash||"";R.params=p(g(R.params));const i=hc(e,J({},j,{hash:Qc(V),path:R.path})),h=a.createHref(i);return J({fullPath:i,hash:V,query:e===ba?ni(j.query):j.query||{}},R,{redirectedFrom:void 0,href:h})}function $(j){return typeof j=="string"?zt(t,j,r.value.path):J({},j)}function D(j,I){if(u!==j)return Sn(8,{from:I,to:j})}function M(j){return Rs(j)}function is(j){return M(J($(j),{replace:!0}))}function fs(j){const I=j.matched[j.matched.length-1];if(I&&I.redirect){const{redirect:k}=I;let R=typeof k=="function"?k(j):k;return typeof R=="string"&&(R=R.includes("?")||R.includes("#")?R=$(R):{path:R},R.params={}),J({query:j.query,hash:j.hash,params:"path"in R?{}:j.params},R)}}function Rs(j,I){const k=u=O(j),R=r.value,V=j.state,i=j.force,h=j.replace===!0,f=fs(k);if(f)return Rs(J($(f),{state:typeof f=="object"?J({},V,f.state):V,force:i,replace:h}),I||k);const m=k;m.redirectedFrom=I;let _;return!i&&fc(e,R,k)&&(_=Sn(16,{to:m,from:R}),Ts(R,R,!0,!1)),(_?Promise.resolve(_):Ps(m,R)).catch(x=>Hs(x)?Hs(x,2)?x:Js(x):W(x,m,R)).then(x=>{if(x){if(Hs(x,2))return Rs(J({replace:h},$(x.to),{state:typeof x.to=="object"?J({},V,x.to.state):V,force:i}),I||m)}else x=an(m,R,!0,h,V);return Gs(m,R,x),x})}function zs(j,I){const k=D(j,I);return k?Promise.reject(k):Promise.resolve()}function gn(j){const I=_n.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(j):j()}function Ps(j,I){let k;const[R,V,i]=ui(j,I);k=Bt(R.reverse(),"beforeRouteLeave",j,I);for(const f of R)f.leaveGuards.forEach(m=>{k.push(Zs(m,j,I))});const h=zs.bind(null,j,I);return k.push(h),ps(k).then(()=>{k=[];for(const f of l.list())k.push(Zs(f,j,I));return k.push(h),ps(k)}).then(()=>{k=Bt(V,"beforeRouteUpdate",j,I);for(const f of V)f.updateGuards.forEach(m=>{k.push(Zs(m,j,I))});return k.push(h),ps(k)}).then(()=>{k=[];for(const f of j.matched)if(f.beforeEnter&&!I.matched.includes(f))if(As(f.beforeEnter))for(const m of f.beforeEnter)k.push(Zs(m,j,I));else k.push(Zs(f.beforeEnter,j,I));return k.push(h),ps(k)}).then(()=>(j.matched.forEach(f=>f.enterCallbacks={}),k=Bt(i,"beforeRouteEnter",j,I),k.push(h),ps(k))).then(()=>{k=[];for(const f of o.list())k.push(Zs(f,j,I));return k.push(h),ps(k)}).catch(f=>Hs(f,8)?f:Promise.reject(f))}function Gs(j,I,k){for(const R of c.list())gn(()=>R(j,I,k))}function an(j,I,k,R,V){const i=D(j,I);if(i)return i;const h=I===Ys,f=bn?history.state:{};k&&(R||h?a.replace(j.fullPath,J({scroll:h&&f&&f.scroll},V)):a.push(j.fullPath,V)),r.value=j,Ts(j,I,k,h),Js()}let Ss;function Mn(){Ss||(Ss=a.listen((j,I,k)=>{if(!et.listening)return;const R=O(j),V=fs(R);if(V){Rs(J(V,{replace:!0}),R).catch(Kn);return}u=R;const i=r.value;bn&&bc(fa(i.fullPath,k.delta),Pt()),Ps(R,i).catch(h=>Hs(h,12)?h:Hs(h,2)?(Rs(h.to,R).then(f=>{Hs(f,20)&&!k.delta&&k.type===st.pop&&a.go(-1,!1)}).catch(Kn),Promise.reject()):(k.delta&&a.go(-k.delta,!1),W(h,R,i))).then(h=>{h=h||an(R,i,!1),h&&(k.delta&&!Hs(h,8)?a.go(-k.delta,!1):k.type===st.pop&&Hs(h,20)&&a.go(-1,!1)),Gs(R,i,h)}).catch(Kn)}))}let mn=Un(),ls=Un(),Y;function W(j,I,k){Js(j);const R=ls.list();return R.length?R.forEach(V=>V(j,I,k)):console.error(j),Promise.reject(j)}function Bs(){return Y&&r.value!==Ys?Promise.resolve():new Promise((j,I)=>{mn.add([j,I])})}function Js(j){return Y||(Y=!j,Mn(),mn.list().forEach(([I,k])=>j?k(j):I()),mn.reset()),j}function Ts(j,I,k,R){const{scrollBehavior:V}=s;if(!bn||!V)return Promise.resolve();const i=!k&&vc(fa(j.fullPath,0))||(R||!k)&&history.state&&history.state.scroll||null;return Xa().then(()=>V(j,I,i)).then(h=>h&&yc(h)).catch(h=>W(h,j,I))}const ms=j=>a.go(j);let jn;const _n=new Set,et={currentRoute:r,listening:!0,addRoute:b,removeRoute:A,hasRoute:U,getRoutes:P,resolve:O,options:s,push:M,replace:is,go:ms,back:()=>ms(-1),forward:()=>ms(1),beforeEach:l.add,beforeResolve:o.add,afterEach:c.add,onError:ls.add,isReady:Bs,install(j){const I=this;j.component("RouterLink",li),j.component("RouterView",ii),j.config.globalProperties.$router=I,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>Ns(r)}),bn&&!jn&&r.value===Ys&&(jn=!0,M(a.location).catch(V=>{}));const k={};for(const V in Ys)k[V]=ys(()=>r.value[V]);j.provide(Ae,I),j.provide(Re,nt(k)),j.provide(le,r);const R=j.unmount;_n.add(j),j.unmount=function(){_n.delete(j),_n.size<1&&(u=Ys,Ss&&Ss(),Ss=null,r.value=Ys,jn=!1,Y=!1),R()}}};function ps(j){return j.reduce((I,k)=>I.then(()=>gn(k)),Promise.resolve())}return et}function ui(s,n){const t=[],e=[],a=[],l=Math.max(n.matched.length,s.matched.length);for(let o=0;o<l;o++){const c=n.matched[o];c&&(s.matched.find(u=>Pn(u,c))?e.push(c):t.push(c));const r=s.matched[o];r&&(n.matched.find(u=>Pn(u,r))||a.push(r))}return[t,e,a]}function tt(){return Us(Re)}var hi="/assets/close.32d69e24.svg",fi="/assets/more.2b04406d.svg";function di(s,n){let t;return function(e){t&&clearTimeout(t),t=setTimeout(()=>{s(e)},n)}}const gi=s=>(fn("data-v-3c3845c0"),s=s(),dn(),s),mi={class:"header-container"},ji=gi(()=>C("h1",{class:"logo"},[C("a",{href:"/"},"\u65E7\u68A6")],-1)),_i={class:"nav"},xi=["onClick"],yi=["href"],bi={key:0,src:hi},vi={key:1,src:fi},wi={class:"main-container"},ki={class:"main"},Ei={class:"mobile-menus-container"},Ii={class:"navbar-links"},qi=["href"],Ci={__name:"page-layout",setup(s){const n=tt(),t=gs(""),e=[{name:"\u5206\u7C7B",link:"/article-category/Git"},{name:"\u5F52\u6863",link:"/article-archive"},{name:"\u53CB\u94FE",link:"/friend-links"},{name:"\u5173\u4E8E",link:"/custom/about"}],a=gs(!1),l=di(()=>{window.innerWidth>768&&o()},300);function o(){a.value=!1}return en(()=>{t.value=n.path,window.addEventListener("resize",l)}),be(()=>{window.removeEventListener("resize",l)}),(c,r)=>{const u=cl("router-view");return H(),G("div",{class:qn(["index-container",{active:a.value}])},[C("div",mi,[C("header",null,[ji,C("ul",_i,[(H(),G(ns,null,Ws(e,p=>C("li",{class:qn(["nav-item",{active:t.value===p.link}]),key:p.link,onClick:d=>t.value=p.link},[C("a",{href:p.link},cs(p.name),9,yi)],10,xi)),64)),C("div",{class:"toggle-menus",onClick:r[0]||(r[0]=p=>a.value=!a.value)},[a.value?(H(),G("img",bi)):(H(),G("img",vi))])])])]),C("div",wi,[C("div",ki,[ts(u)])]),C("div",Ei,[C("nav",Ii,[(H(),G(ns,null,Ws(e,p=>C("div",{class:"navbar-links__item",key:p.link},[C("a",{href:p.link,onClick:o},cs(p.name),9,qi)])),64))])])],2)}}};var Ai=bs(Ci,[["__scopeId","data-v-3c3845c0"]]),St=[{name:"git-base",title:"Git\u57FA\u672C\u64CD\u4F5C",date:"Aug 11, 2021",category:["Git"],content:`<h3>\u521B\u5EFA\u4ED3\u5E93</h3>
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

`}];const Ri={class:"pagination-container"},Pi={class:"page-index"},Si={__name:"pagination",props:{pageIndex:Number,pageSize:Number,length:Number},emits:["pageChange"],setup(s,{emit:n}){const t=s;function e(){const l=t.pageIndex-1;n("pageChange",{pageIndex:l})}function a(){const l=t.pageIndex+1;n("pageChange",{pageIndex:l})}return(l,o)=>(H(),G("div",Ri,[C("a",{style:Gn({visibility:s.pageIndex>1?"visible":"hidden"}),class:"arrow",onClick:o[0]||(o[0]=c=>e())}," \u2190 \u4E0A\u4E00\u9875 ",4),C("span",Pi,cs(s.pageIndex),1),C("a",{style:Gn({visibility:s.pageIndex*s.pageSize<s.length?"visible":"hidden"}),class:"arrow",onClick:o[1]||(o[1]=c=>a())}," \u4E0B\u4E00\u9875 \u2192 ",4)]))}};const Sl=s=>(fn("data-v-3fef2317"),s=s(),dn(),s),Ti={class:"footer-container"},Oi=Sl(()=>C("div",{class:"site-pv"},[C("span",{id:"busuanzi_container_site_pv"},[ne(" \u672C\u7AD9\u603B\u8BBF\u95EE\u91CF"),C("span",{id:"busuanzi_value_site_pv"}),ne("\u6B21 ")])],-1)),$i=Sl(()=>C("div",{class:"tip"},"\u7AD9\u70B9\u6301\u7EED\u4F18\u5316\u4E2D...",-1)),Mi={__name:"footer",setup(s){const n=new Date().getFullYear();return(t,e)=>(H(),G("div",Ti,[C("div",null,"\xA9 2021-"+cs(Ns(n))+" | \u65E7\u68A6",1),Oi,$i]))}};var Pe=bs(Mi,[["__scopeId","data-v-3fef2317"]]);const Li=s=>(fn("data-v-585ba1ea"),s=s(),dn(),s),Ni={class:"home-container"},Ui={class:"article-time"},Fi={class:"article-title"},zi=["href"],Bi=Li(()=>C("div",{class:"article-line"},null,-1)),Hi=["innerHTML"],Di={__name:"article-list",setup(s){const n=St.sort((r,u)=>new Date(u.date).getTime()-new Date(r.date).getTime()),t=gs(n),e=tt(),a=gs(1),l=gs(5);Bn(()=>e.params.page,r=>{a.value=+r||1,c()},{immediate:!0});function o(r){const{pageIndex:u}=r;location.href=`/article-list/${u}`}function c(){const r=a.value,u=l.value,p=(r-1)*u,d=p+u;t.value=n.slice(p,d)}return(r,u)=>(H(),G("div",Ni,[(H(!0),G(ns,null,Ws(t.value,p=>(H(),G("div",{class:"article-item",key:p.name},[C("time",Ui,cs(p.date),1),C("h2",Fi,[C("a",{href:"/article-detail/"+p.name},cs(p.title),9,zi)]),Bi,C("div",{class:"abstract",innerHTML:p.abstract},null,8,Hi)]))),128)),ts(Si,{"page-index":a.value,"onUpdate:pageIndex":u[0]||(u[0]=p=>a.value=p),"page-size":l.value,length:Ns(n).length,onPageChange:o},null,8,["page-index","page-size","length"]),ts(Pe)]))}};var Ki=bs(Di,[["__scopeId","data-v-585ba1ea"]]);const Wi="modulepreload",qa={},Vi="/",Gi=function(n,t){return!t||t.length===0?n():Promise.all(t.map(e=>{if(e=`${Vi}${e}`,e in qa)return;qa[e]=!0;const a=e.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${l}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":Wi,a||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),a)return new Promise((c,r)=>{o.addEventListener("load",c),o.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n())},Ji=["id","host","repo","repoid","category","categoryid","mapping","term","strict","reactionsenabled","emitmetadata","inputposition","theme","lang","loading"],Qi=ye({__name:"Giscus",props:{id:null,host:null,repo:null,repoId:null,category:null,categoryId:null,mapping:null,term:null,theme:null,strict:null,reactionsEnabled:null,emitMetadata:null,inputPosition:null,lang:null,loading:null},setup(s){const n=gs(!1);return en(()=>{n.value=!0,Gi(()=>import("./giscus-a53917f0.a14eedf1.js"),[])}),(t,e)=>n.value?(H(),G("giscus-widget",{key:0,id:s.id,host:s.host,repo:s.repo,repoid:s.repoId,category:s.category,categoryid:s.categoryId,mapping:s.mapping,term:s.term,strict:s.strict,reactionsenabled:s.reactionsEnabled,emitmetadata:s.emitMetadata,inputposition:s.inputPosition,theme:s.theme,lang:s.lang,loading:s.loading},null,8,Ji)):Er("",!0)}}),Tl={__name:"comment",setup(s){return(n,t)=>(H(),ke(Ns(Qi),{id:"comments",repo:"hai-zou/poseidon",repoId:"R_kgDOIPqaJQ",category:"General",categoryId:"DIC_kwDOIPqaJc4CW4xW",mapping:"pathname",term:"Welcome to component!",inputPosition:"top",theme:"light",lang:"zh-CN",loading:"lazy"}))}};var Yi="/assets/view.3e5c4e53.svg";const Xi={},Ol=s=>(fn("data-v-3213da64"),s=s(),dn(),s),Zi={id:"busuanzi_container_page_pv"},sp=Ol(()=>C("img",{src:Yi},null,-1)),np=Ol(()=>C("span",{id:"busuanzi_value_page_pv"},null,-1)),tp=[sp,np];function ep(s,n){return H(),G("span",Zi,tp)}var ap=bs(Xi,[["render",ep],["__scopeId","data-v-3213da64"]]);const lp={class:"article-content"},op={class:"detail-title"},rp={class:"post-info"},cp={class:"detail-container markdown-body"},ip=["innerHTML"],pp={__name:"article-detail",setup(s){const n=gs({}),t=tt();en(()=>{const{name:a}=t.params;n.value=e(a)});function e(a){return St.find(l=>l.name===a)||{}}return(a,l)=>(H(),G(ns,null,[C("div",lp,[C("h1",op,cs(n.value.title),1),C("div",rp,[C("time",null,cs(n.value.date),1),ts(ap)]),C("div",cp,[C("div",{innerHTML:n.value.content},null,8,ip)]),ts(Tl)]),ts(Pe)],64))}};var up=bs(pp,[["__scopeId","data-v-3a5aed2d"]]);const hp=s=>(fn("data-v-39146a8d"),s=s(),dn(),s),fp={class:"category-list"},dp=["href"],gp=["href"],mp=hp(()=>C("span",null," \u2014 ",-1)),jp={__name:"article-category",setup(s){const n=tt(),t=gs([]),e=gs({}),a=gs([]),l=gs("");en(()=>{const{category:r}=n.params;o(),r&&(l.value=r,c(r))});function o(){const r=[],u={};for(const p of St){const d=p.category||[];r.push(...d);for(const g of d)u[g]||(u[g]=[]),u[g].push(p)}t.value=new Set([...r]),e.value=u}function c(r){l.value=r,a.value=e.value[r]}return(r,u)=>(H(),G(ns,null,[C("ul",fp,[(H(!0),G(ns,null,Ws(t.value,p=>(H(),G("li",{key:p,class:qn({active:l.value===p})},[C("a",{href:"/article-category/"+p},cs(p),9,dp)],2))),128))]),(H(!0),G(ns,null,Ws(a.value,p=>(H(),G("ul",{class:"category-item",key:p},[C("li",null,[C("a",{href:"/article-detail/"+p.name},[C("span",null,cs(p.title),1),mp,C("span",null,cs(p.date),1)],8,gp)])]))),128))],64))}};var _p=bs(jp,[["__scopeId","data-v-39146a8d"]]);const xp={class:"article-wrap"},yp=["href"],bp={__name:"article-archive",setup(s){const n=gs([]);en(()=>{t()});function t(){const e=St.sort((l,o)=>new Date(o.date).getTime()-new Date(l.date).getTime()),a={};for(const l of e){const o=new Date(l.date).getFullYear();a[o]||(a[o]=[]),a[o].push(l)}n.value=Object.entries(a).map(l=>{const[o,c]=l;return{year:o,children:c}}).reverse()}return(e,a)=>(H(!0),G(ns,null,Ws(n.value,l=>(H(),G("div",{class:"archive-container",key:l},[C("h3",null,cs(l.year),1),C("ul",xp,[(H(!0),G(ns,null,Ws(l.children,o=>(H(),G("li",{class:"article-item",key:o},[C("a",{href:"/article-detail/"+o.name},cs(o.title),9,yp)]))),128))])]))),128))}};var vp=bs(bp,[["__scopeId","data-v-7a7fc9fe"]]),wp=[{name:"\u5DE6\u773C\u4F1A\u966A\u53F3\u773C\u54ED\u306E\u535A\u5BA2",desc:"\u53E6\u4E00\u4E2A\u4E16\u754C",link:"https://qkongtao.cn/"},{name:"\u5B89\u77E5\u9C7C",desc:"\u751F\u6D3B\u660E\u6717\uFF0C\u4E07\u7269\u53EF\u7231",link:"https://anzhiy.cn/"}];const kp=s=>(fn("data-v-63db2140"),s=s(),dn(),s),Ep=kp(()=>C("div",{class:"friend-header"},[C("a",{class:"add-link",href:"https://github.com/hai-zou/Poseidon/edit/main/src/data/links.js",target:"_blank"}," \u5982\u4F55\u6DFB\u52A0\u53CB\u94FE ")],-1)),Ip={class:"link-container"},qp=["href"],Cp={class:"desc"},Ap={__name:"friend-links",setup(s){return(n,t)=>(H(),G(ns,null,[Ep,C("ul",Ip,[(H(!0),G(ns,null,Ws(Ns(wp),e=>(H(),G("li",{class:"link-item",key:e},[C("a",{class:"name",href:e.link,target:"_blank"},cs(e.name),9,qp),C("span",Cp,cs(e.desc),1)]))),128))])],64))}};var Rp=bs(Ap,[["__scopeId","data-v-63db2140"]]),Pp=[{name:"about",date:"",content:`<h2>\u5173\u4E8E\u6211</h2>
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
<li>\u611F\u5174\u8DA3\u7684\u8BDD\uFF0C\u70B9\u51FB<a href='/site-commits'>\u8FD9\u91CC</a>\u67E5\u770B\u672C\u7AD9\u7684\u53D1\u5C55\u5386\u7A0B\u3002</li>
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
<li><code>@docsearch/js</code> \u57FA\u4E8EAlgolia\u5F00\u53D1\u7684\u641C\u7D22\u63D2\u4EF6\uFF08\u6682\u672A\u7533\u8BF7\u6210\u529F\uFF09</li>
<li><code>@giscus/vue</code> \u4E00\u6B3E\u57FA\u4E8EGitHub\u7684\u8BC4\u8BBA\u63D2\u4EF6</li>
<li><code>\u4E0D\u849C\u5B50</code> \u6781\u7B80\u7F51\u9875\u8BA1\u6570\u5668</li>
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
\u611F\u5174\u8DA3\u7684\u8BDD\uFF0C\u70B9\u51FB\u8FD9\u91CC\u67E5\u770B\u672C\u7AD9\u7684\u53D1\u5C55\u5386\u7A0B\u3002

UI\u98CE\u683C

\u672C\u7AD9\u662F\u501F\u9274 \u80E1\u6D82\u8BF4 \u7684UI\uFF0C\u91C7\u7528\u6781\u7B80\u98CE\u683C\u3002
\u9009\u62E9\u6781\u7B80\u98CE\u683C\u4E3B\u9898\u7684\u535A\u5BA2\uFF0C\u8BA9\u81EA\u5DF1\u66F4\u4E13\u6CE8\u4E8E\u6587\u7AE0\u7684\u8D28\u91CF\uFF0C\u4E0D\u53BB\u7BA1\u90A3\u4E9B\u82B1\u54E8\u7684\u529F\u80FD\u3002

\u6280\u672F

Vite \u6781\u901F\u7684\u670D\u52A1\u542F\u52A8, \u8F7B\u91CF\u5FEB\u901F\u7684\u70ED\u91CD\u8F7D
markdown-it yaml-front-matter \u5904\u7406md\u6587\u4EF6
highlight.js \u4EE3\u7801\u9AD8\u4EAE
@docsearch/js \u57FA\u4E8EAlgolia\u5F00\u53D1\u7684\u641C\u7D22\u63D2\u4EF6\uFF08\u6682\u672A\u7533\u8BF7\u6210\u529F\uFF09
@giscus/vue \u4E00\u6B3E\u57FA\u4E8EGitHub\u7684\u8BC4\u8BBA\u63D2\u4EF6
\u4E0D\u849C\u5B50 \u6781\u7B80\u7F51\u9875\u8BA1\u6570\u5668

`}];const Sp={class:"custom-comtainer"},Tp={class:"markdown-body"},Op=["innerHTML"],$p={__name:"custom",setup(s){const n=gs({}),t=tt();en(()=>{const{link:a}=t.params;n.value=e(a)});function e(a){return Pp.find(l=>l.name===a)||{}}return(a,l)=>(H(),G(ns,null,[C("div",Sp,[C("div",Tp,[C("div",{innerHTML:n.value.content},null,8,Op)]),ts(Tl)]),ts(Pe)],64))}};var Mp=bs($p,[["__scopeId","data-v-2c42665d"]]);const Lp=s=>(fn("data-v-459700c1"),s=s(),dn(),s),Np=Lp(()=>C("h2",{class:"title"},"Commits",-1)),Up={class:"commit-list"},Fp={class:"message"},zp={class:"date"},Bp={__name:"site-commits",setup(s){const n=gs([]);en(()=>{t()});function t(){fetch("https://api.github.com/repos/hai-zou/poseidon/commits").then(e=>e.json()).then(e=>{n.value=e})}return(e,a)=>(H(),G(ns,null,[Np,C("ul",Up,[(H(!0),G(ns,null,Ws(n.value,l=>(H(),G("li",{key:l.sha,class:"commit-item"},[C("p",Fp,cs(l.commit.message),1),C("p",zp,cs(l.commit.committer.date),1)]))),128))])],64))}};var Hp=bs(Bp,[["__scopeId","data-v-459700c1"]]);const Dp={};function Kp(s,n){return H(),G("div",null,"404")}var Wp=bs(Dp,[["render",Kp]]);const Vp=[{path:"/",component:Ai,redirect:"/article-list/1/",children:[{path:"/article-list/:page",component:Ki},{path:"/article-detail/:name",component:up},{path:"/article-category/:category",component:_p},{path:"/article-archive",component:vp},{path:"/friend-links",component:Rp},{path:"/custom/:link",component:Mp},{path:"/site-commits",component:Hp},{path:"/:catchAll(.*)",component:Wp}]}],Gp=pi({history:Ic(),routes:Vp});const $l=ac(cc);$l.use(Gp);$l.mount("#app");
