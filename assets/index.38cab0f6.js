const Kp=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(l){if(l.ep)return;l.ep=!0;const a=t(l);fetch(l.href,a)}};Kp();function Ve(e,n){const t=Object.create(null),s=e.split(",");for(let l=0;l<s.length;l++)t[s[l]]=!0;return n?l=>!!t[l.toLowerCase()]:l=>!!t[l]}const me={},St=[],qe=()=>{},Zs=()=>!1,zp=/^on[^a-z]/,dt=e=>zp.test(e),La=e=>e.startsWith("onUpdate:"),ae=Object.assign,Fa=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Wp=Object.prototype.hasOwnProperty,ce=(e,n)=>Wp.call(e,n),H=Array.isArray,Tt=e=>Vt(e)==="[object Map]",mt=e=>Vt(e)==="[object Set]",Hr=e=>Vt(e)==="[object Date]",Gp=e=>Vt(e)==="[object RegExp]",Y=e=>typeof e=="function",X=e=>typeof e=="string",Dn=e=>typeof e=="symbol",ge=e=>e!==null&&typeof e=="object",Ba=e=>ge(e)&&Y(e.then)&&Y(e.catch),co=Object.prototype.toString,Vt=e=>co.call(e),Jp=e=>Vt(e).slice(8,-1),po=e=>Vt(e)==="[object Object]",Da=e=>X(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,tt=Ve(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yp=Ve("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),wl=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},Qp=/-(\w)/g,ke=wl(e=>e.replace(Qp,(n,t)=>t?t.toUpperCase():"")),Zp=/\B([A-Z])/g,Je=wl(e=>e.replace(Zp,"-$1").toLowerCase()),gt=wl(e=>e.charAt(0).toUpperCase()+e.slice(1)),It=wl(e=>e?`on${gt(e)}`:""),Nt=(e,n)=>!Object.is(e,n),Rt=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},sl=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},ll=e=>{const n=parseFloat(e);return isNaN(n)?e:n},al=e=>{const n=X(e)?Number(e):NaN;return isNaN(n)?e:n};let Vr;const oa=()=>Vr||(Vr=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{}),Xp="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",eu=Ve(Xp);function ot(e){if(H(e)){const n={};for(let t=0;t<e.length;t++){const s=e[t],l=X(s)?uo(s):ot(s);if(l)for(const a in l)n[a]=l[a]}return n}else{if(X(e))return e;if(ge(e))return e}}const nu=/;(?![^(]*\))/g,tu=/:([^]+)/,su=/\/\*[^]*?\*\//g;function uo(e){const n={};return e.replace(su,"").split(nu).forEach(t=>{if(t){const s=t.split(tu);s.length>1&&(n[s[0].trim()]=s[1].trim())}}),n}function Cn(e){let n="";if(X(e))n=e;else if(H(e))for(let t=0;t<e.length;t++){const s=Cn(e[t]);s&&(n+=s+" ")}else if(ge(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}function lu(e){if(!e)return null;let{class:n,style:t}=e;return n&&!X(n)&&(e.class=Cn(n)),t&&(e.style=ot(t)),e}const au="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",ru="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",iu="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",ou=Ve(au),cu=Ve(ru),pu=Ve(iu),uu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fu=Ve(uu);function fo(e){return!!e||e===""}function hu(e,n){if(e.length!==n.length)return!1;let t=!0;for(let s=0;t&&s<e.length;s++)t=Hn(e[s],n[s]);return t}function Hn(e,n){if(e===n)return!0;let t=Hr(e),s=Hr(n);if(t||s)return t&&s?e.getTime()===n.getTime():!1;if(t=Dn(e),s=Dn(n),t||s)return e===n;if(t=H(e),s=H(n),t||s)return t&&s?hu(e,n):!1;if(t=ge(e),s=ge(n),t||s){if(!t||!s)return!1;const l=Object.keys(e).length,a=Object.keys(n).length;if(l!==a)return!1;for(const r in e){const i=e.hasOwnProperty(r),o=n.hasOwnProperty(r);if(i&&!o||!i&&o||!Hn(e[r],n[r]))return!1}}return String(e)===String(n)}function kl(e,n){return e.findIndex(t=>Hn(t,n))}const Ie=e=>X(e)?e:e==null?"":H(e)||ge(e)&&(e.toString===co||!Y(e.toString))?JSON.stringify(e,ho,2):String(e),ho=(e,n)=>n&&n.__v_isRef?ho(e,n.value):Tt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[s,l])=>(t[`${s} =>`]=l,t),{})}:mt(n)?{[`Set(${n.size})`]:[...n.values()]}:ge(n)&&!H(n)&&!po(n)?String(n):n;let We;class Ha{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=We,!n&&We&&(this.index=(We.scopes||(We.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const t=We;try{return We=this,n()}finally{We=t}}}on(){We=this}off(){We=this.parent}stop(n){if(this._active){let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function du(e){return new Ha(e)}function mo(e,n=We){n&&n.active&&n.effects.push(e)}function go(){return We}function mu(e){We&&We.cleanups.push(e)}const Va=e=>{const n=new Set(e);return n.w=0,n.n=0,n},yo=e=>(e.w&Vn)>0,_o=e=>(e.n&Vn)>0,gu=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Vn},yu=e=>{const{deps:n}=e;if(n.length){let t=0;for(let s=0;s<n.length;s++){const l=n[s];yo(l)&&!_o(l)?l.delete(e):n[t++]=l,l.w&=~Vn,l.n&=~Vn}n.length=t}},rl=new WeakMap;let Xt=0,Vn=1;const ca=30;let cn;const st=Symbol(""),pa=Symbol("");class Ts{constructor(n,t=null,s){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,mo(this,s)}run(){if(!this.active)return this.fn();let n=cn,t=Ln;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=cn,cn=this,Ln=!0,Vn=1<<++Xt,Xt<=ca?gu(this):Ur(this),this.fn()}finally{Xt<=ca&&yu(this),Vn=1<<--Xt,cn=this.parent,Ln=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){cn===this?this.deferStop=!0:this.active&&(Ur(this),this.onStop&&this.onStop(),this.active=!1)}}function Ur(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}function _u(e,n){e.effect&&(e=e.effect.fn);const t=new Ts(e);n&&(ae(t,n),n.scope&&mo(t,n.scope)),(!n||!n.lazy)&&t.run();const s=t.run.bind(t);return s.effect=t,s}function vu(e){e.effect.stop()}let Ln=!0;const vo=[];function Ut(){vo.push(Ln),Ln=!1}function Kt(){const e=vo.pop();Ln=e===void 0?!0:e}function He(e,n,t){if(Ln&&cn){let s=rl.get(e);s||rl.set(e,s=new Map);let l=s.get(t);l||s.set(t,l=Va()),bo(l)}}function bo(e,n){let t=!1;Xt<=ca?_o(e)||(e.n|=Vn,t=!yo(e)):t=!e.has(cn),t&&(e.add(cn),cn.deps.push(e))}function Sn(e,n,t,s,l,a){const r=rl.get(e);if(!r)return;let i=[];if(n==="clear")i=[...r.values()];else if(t==="length"&&H(e)){const o=Number(s);r.forEach((c,p)=>{(p==="length"||p>=o)&&i.push(c)})}else switch(t!==void 0&&i.push(r.get(t)),n){case"add":H(e)?Da(t)&&i.push(r.get("length")):(i.push(r.get(st)),Tt(e)&&i.push(r.get(pa)));break;case"delete":H(e)||(i.push(r.get(st)),Tt(e)&&i.push(r.get(pa)));break;case"set":Tt(e)&&i.push(r.get(st));break}if(i.length===1)i[0]&&ua(i[0]);else{const o=[];for(const c of i)c&&o.push(...c);ua(Va(o))}}function ua(e,n){const t=H(e)?e:[...e];for(const s of t)s.computed&&Kr(s);for(const s of t)s.computed||Kr(s)}function Kr(e,n){(e!==cn||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function bu(e,n){var t;return(t=rl.get(e))==null?void 0:t.get(n)}const ju=Ve("__proto__,__v_isRef,__isVue"),jo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Dn)),Eu=Cl(),xu=Cl(!1,!0),wu=Cl(!0),ku=Cl(!0,!0),zr=Cu();function Cu(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const s=re(this);for(let a=0,r=this.length;a<r;a++)He(s,"get",a+"");const l=s[n](...t);return l===-1||l===!1?s[n](...t.map(re)):l}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){Ut();const s=re(this)[n].apply(this,t);return Kt(),s}}),e}function Su(e){const n=re(this);return He(n,"has",e),n.hasOwnProperty(e)}function Cl(e=!1,n=!1){return function(s,l,a){if(l==="__v_isReactive")return!e;if(l==="__v_isReadonly")return e;if(l==="__v_isShallow")return n;if(l==="__v_raw"&&a===(e?n?To:So:n?Co:ko).get(s))return s;const r=H(s);if(!e){if(r&&ce(zr,l))return Reflect.get(zr,l,a);if(l==="hasOwnProperty")return Su}const i=Reflect.get(s,l,a);return(Dn(l)?jo.has(l):ju(l))||(e||He(s,"get",l),n)?i:Ce(i)?r&&Da(l)?i:i.value:ge(i)?e?Ka(i):zt(i):i}}const Tu=Eo(),Iu=Eo(!0);function Eo(e=!1){return function(t,s,l,a){let r=t[s];if(ct(r)&&Ce(r)&&!Ce(l))return!1;if(!e&&(!us(l)&&!ct(l)&&(r=re(r),l=re(l)),!H(t)&&Ce(r)&&!Ce(l)))return r.value=l,!0;const i=H(t)&&Da(s)?Number(s)<t.length:ce(t,s),o=Reflect.set(t,s,l,a);return t===re(a)&&(i?Nt(l,r)&&Sn(t,"set",s,l):Sn(t,"add",s,l)),o}}function Ru(e,n){const t=ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&t&&Sn(e,"delete",n,void 0),s}function Pu(e,n){const t=Reflect.has(e,n);return(!Dn(n)||!jo.has(n))&&He(e,"has",n),t}function Au(e){return He(e,"iterate",H(e)?"length":st),Reflect.ownKeys(e)}const xo={get:Eu,set:Tu,deleteProperty:Ru,has:Pu,ownKeys:Au},wo={get:wu,set(e,n){return!0},deleteProperty(e,n){return!0}},Nu=ae({},xo,{get:xu,set:Iu}),Ou=ae({},wo,{get:ku}),Ua=e=>e,Sl=e=>Reflect.getPrototypeOf(e);function Ls(e,n,t=!1,s=!1){e=e.__v_raw;const l=re(e),a=re(n);t||(n!==a&&He(l,"get",n),He(l,"get",a));const{has:r}=Sl(l),i=s?Ua:t?Ga:fs;if(r.call(l,n))return i(e.get(n));if(r.call(l,a))return i(e.get(a));e!==l&&e.get(n)}function Fs(e,n=!1){const t=this.__v_raw,s=re(t),l=re(e);return n||(e!==l&&He(s,"has",e),He(s,"has",l)),e===l?t.has(e):t.has(e)||t.has(l)}function Bs(e,n=!1){return e=e.__v_raw,!n&&He(re(e),"iterate",st),Reflect.get(e,"size",e)}function Wr(e){e=re(e);const n=re(this);return Sl(n).has.call(n,e)||(n.add(e),Sn(n,"add",e,e)),this}function Gr(e,n){n=re(n);const t=re(this),{has:s,get:l}=Sl(t);let a=s.call(t,e);a||(e=re(e),a=s.call(t,e));const r=l.call(t,e);return t.set(e,n),a?Nt(n,r)&&Sn(t,"set",e,n):Sn(t,"add",e,n),this}function Jr(e){const n=re(this),{has:t,get:s}=Sl(n);let l=t.call(n,e);l||(e=re(e),l=t.call(n,e)),s&&s.call(n,e);const a=n.delete(e);return l&&Sn(n,"delete",e,void 0),a}function Yr(){const e=re(this),n=e.size!==0,t=e.clear();return n&&Sn(e,"clear",void 0,void 0),t}function Ds(e,n){return function(s,l){const a=this,r=a.__v_raw,i=re(r),o=n?Ua:e?Ga:fs;return!e&&He(i,"iterate",st),r.forEach((c,p)=>s.call(l,o(c),o(p),a))}}function Hs(e,n,t){return function(...s){const l=this.__v_raw,a=re(l),r=Tt(a),i=e==="entries"||e===Symbol.iterator&&r,o=e==="keys"&&r,c=l[e](...s),p=t?Ua:n?Ga:fs;return!n&&He(a,"iterate",o?pa:st),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:i?[p(u[0]),p(u[1])]:p(u),done:f}},[Symbol.iterator](){return this}}}}function Pn(e){return function(...n){return e==="delete"?!1:this}}function Mu(){const e={get(a){return Ls(this,a)},get size(){return Bs(this)},has:Fs,add:Wr,set:Gr,delete:Jr,clear:Yr,forEach:Ds(!1,!1)},n={get(a){return Ls(this,a,!1,!0)},get size(){return Bs(this)},has:Fs,add:Wr,set:Gr,delete:Jr,clear:Yr,forEach:Ds(!1,!0)},t={get(a){return Ls(this,a,!0)},get size(){return Bs(this,!0)},has(a){return Fs.call(this,a,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:Ds(!0,!1)},s={get(a){return Ls(this,a,!0,!0)},get size(){return Bs(this,!0)},has(a){return Fs.call(this,a,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:Ds(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=Hs(a,!1,!1),t[a]=Hs(a,!0,!1),n[a]=Hs(a,!1,!0),s[a]=Hs(a,!0,!0)}),[e,t,n,s]}const[$u,qu,Lu,Fu]=Mu();function Tl(e,n){const t=n?e?Fu:Lu:e?qu:$u;return(s,l,a)=>l==="__v_isReactive"?!e:l==="__v_isReadonly"?e:l==="__v_raw"?s:Reflect.get(ce(t,l)&&l in s?t:s,l,a)}const Bu={get:Tl(!1,!1)},Du={get:Tl(!1,!0)},Hu={get:Tl(!0,!1)},Vu={get:Tl(!0,!0)},ko=new WeakMap,Co=new WeakMap,So=new WeakMap,To=new WeakMap;function Uu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ku(e){return e.__v_skip||!Object.isExtensible(e)?0:Uu(Jp(e))}function zt(e){return ct(e)?e:Il(e,!1,xo,Bu,ko)}function Io(e){return Il(e,!1,Nu,Du,Co)}function Ka(e){return Il(e,!0,wo,Hu,So)}function zu(e){return Il(e,!0,Ou,Vu,To)}function Il(e,n,t,s,l){if(!ge(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const a=l.get(e);if(a)return a;const r=Ku(e);if(r===0)return e;const i=new Proxy(e,r===2?s:t);return l.set(e,i),i}function lt(e){return ct(e)?lt(e.__v_raw):!!(e&&e.__v_isReactive)}function ct(e){return!!(e&&e.__v_isReadonly)}function us(e){return!!(e&&e.__v_isShallow)}function za(e){return lt(e)||ct(e)}function re(e){const n=e&&e.__v_raw;return n?re(n):e}function Wa(e){return sl(e,"__v_skip",!0),e}const fs=e=>ge(e)?zt(e):e,Ga=e=>ge(e)?Ka(e):e;function Ja(e){Ln&&cn&&(e=re(e),bo(e.dep||(e.dep=Va())))}function Rl(e,n){e=re(e);const t=e.dep;t&&ua(t)}function Ce(e){return!!(e&&e.__v_isRef===!0)}function ve(e){return Po(e,!1)}function Ro(e){return Po(e,!0)}function Po(e,n){return Ce(e)?e:new Wu(e,n)}class Wu{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:re(n),this._value=t?n:fs(n)}get value(){return Ja(this),this._value}set value(n){const t=this.__v_isShallow||us(n)||ct(n);n=t?n:re(n),Nt(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:fs(n),Rl(this))}}function Gu(e){Rl(e)}function an(e){return Ce(e)?e.value:e}function Ju(e){return Y(e)?e():an(e)}const Yu={get:(e,n,t)=>an(Reflect.get(e,n,t)),set:(e,n,t,s)=>{const l=e[n];return Ce(l)&&!Ce(t)?(l.value=t,!0):Reflect.set(e,n,t,s)}};function Ya(e){return lt(e)?e:new Proxy(e,Yu)}class Qu{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:s}=n(()=>Ja(this),()=>Rl(this));this._get=t,this._set=s}get value(){return this._get()}set value(n){this._set(n)}}function Zu(e){return new Qu(e)}function Xu(e){const n=H(e)?new Array(e.length):{};for(const t in e)n[t]=Ao(e,t);return n}class ef{constructor(n,t,s){this._object=n,this._key=t,this._defaultValue=s,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return bu(re(this._object),this._key)}}class nf{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function tf(e,n,t){return Ce(e)?e:Y(e)?new nf(e):ge(e)&&arguments.length>1?Ao(e,n,t):ve(e)}function Ao(e,n,t){const s=e[n];return Ce(s)?s:new ef(e,n,t)}class sf{constructor(n,t,s,l){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ts(n,()=>{this._dirty||(this._dirty=!0,Rl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=s}get value(){const n=re(this);return Ja(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function lf(e,n,t=!1){let s,l;const a=Y(e);return a?(s=e,l=qe):(s=e.get,l=e.set),new sf(s,l,a||!l,t)}function af(e,...n){}function rf(e,n){}function wn(e,n,t,s){let l;try{l=s?e(...s):e()}catch(a){yt(a,n,t)}return l}function Qe(e,n,t,s){if(Y(e)){const a=wn(e,n,t,s);return a&&Ba(a)&&a.catch(r=>{yt(r,n,t)}),a}const l=[];for(let a=0;a<e.length;a++)l.push(Qe(e[a],n,t,s));return l}function yt(e,n,t,s=!0){const l=n?n.vnode:null;if(n){let a=n.parent;const r=n.proxy,i=t;for(;a;){const c=a.ec;if(c){for(let p=0;p<c.length;p++)if(c[p](e,r,i)===!1)return}a=a.parent}const o=n.appContext.config.errorHandler;if(o){wn(o,null,10,[e,r,i]);return}}of(e,t,l,s)}function of(e,n,t,s=!0){console.error(e)}let hs=!1,fa=!1;const Ae=[];let yn=0;const Pt=[];let En=null,Zn=0;const No=Promise.resolve();let Qa=null;function Pl(e){const n=Qa||No;return e?n.then(this?e.bind(this):e):n}function cf(e){let n=yn+1,t=Ae.length;for(;n<t;){const s=n+t>>>1;ds(Ae[s])<e?n=s+1:t=s}return n}function Al(e){(!Ae.length||!Ae.includes(e,hs&&e.allowRecurse?yn+1:yn))&&(e.id==null?Ae.push(e):Ae.splice(cf(e.id),0,e),Oo())}function Oo(){!hs&&!fa&&(fa=!0,Qa=No.then(Mo))}function pf(e){const n=Ae.indexOf(e);n>yn&&Ae.splice(n,1)}function Za(e){H(e)?Pt.push(...e):(!En||!En.includes(e,e.allowRecurse?Zn+1:Zn))&&Pt.push(e),Oo()}function Qr(e,n=hs?yn+1:0){for(;n<Ae.length;n++){const t=Ae[n];t&&t.pre&&(Ae.splice(n,1),n--,t())}}function il(e){if(Pt.length){const n=[...new Set(Pt)];if(Pt.length=0,En){En.push(...n);return}for(En=n,En.sort((t,s)=>ds(t)-ds(s)),Zn=0;Zn<En.length;Zn++)En[Zn]();En=null,Zn=0}}const ds=e=>e.id==null?1/0:e.id,uf=(e,n)=>{const t=ds(e)-ds(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function Mo(e){fa=!1,hs=!0,Ae.sort(uf);const n=qe;try{for(yn=0;yn<Ae.length;yn++){const t=Ae[yn];t&&t.active!==!1&&wn(t,null,14)}}finally{yn=0,Ae.length=0,il(),hs=!1,Qa=null,(Ae.length||Pt.length)&&Mo()}}let wt,Vs=[];function $o(e,n){var t,s;wt=e,wt?(wt.enabled=!0,Vs.forEach(({event:l,args:a})=>wt.emit(l,...a)),Vs=[]):typeof window!="undefined"&&window.HTMLElement&&!((s=(t=window.navigator)==null?void 0:t.userAgent)!=null&&s.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(a=>{$o(a,n)}),setTimeout(()=>{wt||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Vs=[])},3e3)):Vs=[]}function ff(e,n,...t){if(e.isUnmounted)return;const s=e.vnode.props||me;let l=t;const a=n.startsWith("update:"),r=a&&n.slice(7);if(r&&r in s){const p=`${r==="modelValue"?"model":r}Modifiers`,{number:u,trim:f}=s[p]||me;f&&(l=t.map(d=>X(d)?d.trim():d)),u&&(l=t.map(ll))}let i,o=s[i=It(n)]||s[i=It(ke(n))];!o&&a&&(o=s[i=It(Je(n))]),o&&Qe(o,e,6,l);const c=s[i+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Qe(c,e,6,l)}}function qo(e,n,t=!1){const s=n.emitsCache,l=s.get(e);if(l!==void 0)return l;const a=e.emits;let r={},i=!1;if(!Y(e)){const o=c=>{const p=qo(c,n,!0);p&&(i=!0,ae(r,p))};!t&&n.mixins.length&&n.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return!a&&!i?(ge(e)&&s.set(e,null),null):(H(a)?a.forEach(o=>r[o]=null):ae(r,a),ge(e)&&s.set(e,r),r)}function Nl(e,n){return!e||!dt(n)?!1:(n=n.slice(2).replace(/Once$/,""),ce(e,n[0].toLowerCase()+n.slice(1))||ce(e,Je(n))||ce(e,n))}let Te=null,Ol=null;function ms(e){const n=Te;return Te=e,Ol=e&&e.type.__scopeId||null,n}function Gn(e){Ol=e}function Jn(){Ol=null}const hf=e=>Xa;function Xa(e,n=Te,t){if(!n||e._n)return e;const s=(...l)=>{s._d&&va(-1);const a=ms(n);let r;try{r=e(...l)}finally{ms(a),s._d&&va(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function Xs(e){const{type:n,vnode:t,proxy:s,withProxy:l,props:a,propsOptions:[r],slots:i,attrs:o,emit:c,render:p,renderCache:u,data:f,setupState:d,ctx:_,inheritAttrs:E}=e;let w,y;const g=ms(e);try{if(t.shapeFlag&4){const b=l||s;w=Ge(p.call(b,b,u,a,d,f,_)),y=o}else{const b=n;w=Ge(b.length>1?b(a,{attrs:o,slots:i,emit:c}):b(a,null)),y=n.props?o:mf(o)}}catch(b){as.length=0,yt(b,e,1),w=pe(Oe)}let k=w;if(y&&E!==!1){const b=Object.keys(y),{shapeFlag:S}=k;b.length&&S&7&&(r&&b.some(La)&&(y=gf(y,r)),k=vn(k,y))}return t.dirs&&(k=vn(k),k.dirs=k.dirs?k.dirs.concat(t.dirs):t.dirs),t.transition&&(k.transition=t.transition),w=k,ms(g),w}function df(e){let n;for(let t=0;t<e.length;t++){const s=e[t];if(Kn(s)){if(s.type!==Oe||s.children==="v-if"){if(n)return;n=s}}else return}return n}const mf=e=>{let n;for(const t in e)(t==="class"||t==="style"||dt(t))&&((n||(n={}))[t]=e[t]);return n},gf=(e,n)=>{const t={};for(const s in e)(!La(s)||!(s.slice(9)in n))&&(t[s]=e[s]);return t};function yf(e,n,t){const{props:s,children:l,component:a}=e,{props:r,children:i,patchFlag:o}=n,c=a.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&o>=0){if(o&1024)return!0;if(o&16)return s?Zr(s,r,c):!!r;if(o&8){const p=n.dynamicProps;for(let u=0;u<p.length;u++){const f=p[u];if(r[f]!==s[f]&&!Nl(c,f))return!0}}}else return(l||i)&&(!i||!i.$stable)?!0:s===r?!1:s?r?Zr(s,r,c):!0:!!r;return!1}function Zr(e,n,t){const s=Object.keys(n);if(s.length!==Object.keys(e).length)return!0;for(let l=0;l<s.length;l++){const a=s[l];if(n[a]!==e[a]&&!Nl(t,a))return!0}return!1}function er({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const Lo=e=>e.__isSuspense,_f={name:"Suspense",__isSuspense:!0,process(e,n,t,s,l,a,r,i,o,c){e==null?bf(n,t,s,l,a,r,i,o,c):jf(e,n,t,s,l,r,i,o,c)},hydrate:Ef,create:nr,normalize:xf},vf=_f;function gs(e,n){const t=e.props&&e.props[n];Y(t)&&t()}function bf(e,n,t,s,l,a,r,i,o){const{p:c,o:{createElement:p}}=o,u=p("div"),f=e.suspense=nr(e,l,s,n,u,t,a,r,i,o);c(null,f.pendingBranch=e.ssContent,u,null,s,f,a,r),f.deps>0?(gs(e,"onPending"),gs(e,"onFallback"),c(null,e.ssFallback,n,t,s,null,a,r),At(f,e.ssFallback)):f.resolve(!1,!0)}function jf(e,n,t,s,l,a,r,i,{p:o,um:c,o:{createElement:p}}){const u=n.suspense=e.suspense;u.vnode=n,n.el=e.el;const f=n.ssContent,d=n.ssFallback,{activeBranch:_,pendingBranch:E,isInFallback:w,isHydrating:y}=u;if(E)u.pendingBranch=f,pn(f,E)?(o(E,f,u.hiddenContainer,null,l,u,a,r,i),u.deps<=0?u.resolve():w&&(o(_,d,t,s,l,null,a,r,i),At(u,d))):(u.pendingId++,y?(u.isHydrating=!1,u.activeBranch=E):c(E,l,u),u.deps=0,u.effects.length=0,u.hiddenContainer=p("div"),w?(o(null,f,u.hiddenContainer,null,l,u,a,r,i),u.deps<=0?u.resolve():(o(_,d,t,s,l,null,a,r,i),At(u,d))):_&&pn(f,_)?(o(_,f,t,s,l,u,a,r,i),u.resolve(!0)):(o(null,f,u.hiddenContainer,null,l,u,a,r,i),u.deps<=0&&u.resolve()));else if(_&&pn(f,_))o(_,f,t,s,l,u,a,r,i),At(u,f);else if(gs(n,"onPending"),u.pendingBranch=f,u.pendingId++,o(null,f,u.hiddenContainer,null,l,u,a,r,i),u.deps<=0)u.resolve();else{const{timeout:g,pendingId:k}=u;g>0?setTimeout(()=>{u.pendingId===k&&u.fallback(d)},g):g===0&&u.fallback(d)}}function nr(e,n,t,s,l,a,r,i,o,c,p=!1){const{p:u,m:f,um:d,n:_,o:{parentNode:E,remove:w}}=c;let y;const g=wf(e);g&&n!=null&&n.pendingBranch&&(y=n.pendingId,n.deps++);const k=e.props?al(e.props.timeout):void 0,b={vnode:e,parent:n,parentComponent:t,isSVG:r,container:s,hiddenContainer:l,anchor:a,deps:0,pendingId:0,timeout:typeof k=="number"?k:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:p,isUnmounted:!1,effects:[],resolve(S=!1,L=!1){const{vnode:I,activeBranch:j,pendingBranch:N,pendingId:M,effects:O,parentComponent:P,container:B}=b;if(b.isHydrating)b.isHydrating=!1;else if(!S){const ee=j&&N.transition&&N.transition.mode==="out-in";ee&&(j.transition.afterLeave=()=>{M===b.pendingId&&f(N,B,ie,0)});let{anchor:ie}=b;j&&(ie=_(j),d(j,P,b,!0)),ee||f(N,B,ie,0)}At(b,N),b.pendingBranch=null,b.isInFallback=!1;let q=b.parent,te=!1;for(;q;){if(q.pendingBranch){q.effects.push(...O),te=!0;break}q=q.parent}te||Za(O),b.effects=[],g&&n&&n.pendingBranch&&y===n.pendingId&&(n.deps--,n.deps===0&&!L&&n.resolve()),gs(I,"onResolve")},fallback(S){if(!b.pendingBranch)return;const{vnode:L,activeBranch:I,parentComponent:j,container:N,isSVG:M}=b;gs(L,"onFallback");const O=_(I),P=()=>{!b.isInFallback||(u(null,S,N,O,j,null,M,i,o),At(b,S))},B=S.transition&&S.transition.mode==="out-in";B&&(I.transition.afterLeave=P),b.isInFallback=!0,d(I,j,null,!0),B||P()},move(S,L,I){b.activeBranch&&f(b.activeBranch,S,L,I),b.container=S},next(){return b.activeBranch&&_(b.activeBranch)},registerDep(S,L){const I=!!b.pendingBranch;I&&b.deps++;const j=S.vnode.el;S.asyncDep.catch(N=>{yt(N,S,0)}).then(N=>{if(S.isUnmounted||b.isUnmounted||b.pendingId!==S.suspenseId)return;S.asyncResolved=!0;const{vnode:M}=S;ba(S,N,!1),j&&(M.el=j);const O=!j&&S.subTree.el;L(S,M,E(j||S.subTree.el),j?null:_(S.subTree),b,r,o),O&&w(O),er(S,M.el),I&&--b.deps===0&&b.resolve()})},unmount(S,L){b.isUnmounted=!0,b.activeBranch&&d(b.activeBranch,t,S,L),b.pendingBranch&&d(b.pendingBranch,t,S,L)}};return b}function Ef(e,n,t,s,l,a,r,i,o){const c=n.suspense=nr(n,s,t,e.parentNode,document.createElement("div"),null,l,a,r,i,!0),p=o(e,c.pendingBranch=n.ssContent,t,c,a,r);return c.deps===0&&c.resolve(!1,!0),p}function xf(e){const{shapeFlag:n,children:t}=e,s=n&32;e.ssContent=Xr(s?t.default:t),e.ssFallback=s?Xr(t.fallback):pe(Oe)}function Xr(e){let n;if(Y(e)){const t=ft&&e._c;t&&(e._d=!1,Z()),e=e(),t&&(e._d=!0,n=Be,hc())}return H(e)&&(e=df(e)),e=Ge(e),n&&!e.dynamicChildren&&(e.dynamicChildren=n.filter(t=>t!==e)),e}function Fo(e,n){n&&n.pendingBranch?H(e)?n.effects.push(...e):n.effects.push(e):Za(e)}function At(e,n){e.activeBranch=n;const{vnode:t,parentComponent:s}=e,l=t.el=n.el;s&&s.subTree===t&&(s.vnode.el=l,er(s,l))}function wf(e){var n;return((n=e.props)==null?void 0:n.suspensible)!=null&&e.props.suspensible!==!1}function kf(e,n){return Is(e,null,n)}function Bo(e,n){return Is(e,null,{flush:"post"})}function Cf(e,n){return Is(e,null,{flush:"sync"})}const Us={};function kn(e,n,t){return Is(e,n,t)}function Is(e,n,{immediate:t,deep:s,flush:l,onTrack:a,onTrigger:r}=me){var i;const o=go()===((i=we)==null?void 0:i.scope)?we:null;let c,p=!1,u=!1;if(Ce(e)?(c=()=>e.value,p=us(e)):lt(e)?(c=()=>e,s=!0):H(e)?(u=!0,p=e.some(b=>lt(b)||us(b)),c=()=>e.map(b=>{if(Ce(b))return b.value;if(lt(b))return et(b);if(Y(b))return wn(b,o,2)})):Y(e)?n?c=()=>wn(e,o,2):c=()=>{if(!(o&&o.isUnmounted))return f&&f(),Qe(e,o,3,[d])}:c=qe,n&&s){const b=c;c=()=>et(b())}let f,d=b=>{f=g.onStop=()=>{wn(b,o,4)}},_;if(Mt)if(d=qe,n?t&&Qe(n,o,3,[c(),u?[]:void 0,d]):c(),l==="sync"){const b=kc();_=b.__watcherHandles||(b.__watcherHandles=[])}else return qe;let E=u?new Array(e.length).fill(Us):Us;const w=()=>{if(!!g.active)if(n){const b=g.run();(s||p||(u?b.some((S,L)=>Nt(S,E[L])):Nt(b,E)))&&(f&&f(),Qe(n,o,3,[b,E===Us?void 0:u&&E[0]===Us?[]:E,d]),E=b)}else g.run()};w.allowRecurse=!!n;let y;l==="sync"?y=w:l==="post"?y=()=>Re(w,o&&o.suspense):(w.pre=!0,o&&(w.id=o.uid),y=()=>Al(w));const g=new Ts(c,y);n?t?w():E=g.run():l==="post"?Re(g.run.bind(g),o&&o.suspense):g.run();const k=()=>{g.stop(),o&&o.scope&&Fa(o.scope.effects,g)};return _&&_.push(k),k}function Sf(e,n,t){const s=this.proxy,l=X(e)?e.includes(".")?Do(s,e):()=>s[e]:e.bind(s,s);let a;Y(n)?a=n:(a=n.handler,t=n);const r=we;zn(this);const i=Is(l,a.bind(s),t);return r?zn(r):Fn(),i}function Do(e,n){const t=n.split(".");return()=>{let s=e;for(let l=0;l<t.length&&s;l++)s=s[t[l]];return s}}function et(e,n){if(!ge(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),Ce(e))et(e.value,n);else if(H(e))for(let t=0;t<e.length;t++)et(e[t],n);else if(mt(e)||Tt(e))e.forEach(t=>{et(t,n)});else if(po(e))for(const t in e)et(e[t],n);return e}function Tf(e,n){const t=Te;if(t===null)return e;const s=Bl(t)||t.proxy,l=e.dirs||(e.dirs=[]);for(let a=0;a<n.length;a++){let[r,i,o,c=me]=n[a];r&&(Y(r)&&(r={mounted:r,updated:r}),r.deep&&et(i),l.push({dir:r,instance:s,value:i,oldValue:void 0,arg:o,modifiers:c}))}return e}function gn(e,n,t,s){const l=e.dirs,a=n&&n.dirs;for(let r=0;r<l.length;r++){const i=l[r];a&&(i.oldValue=a[r].value);let o=i.dir[s];o&&(Ut(),Qe(o,t,8,[e.el,i,e,n]),Kt())}}function tr(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Xe(()=>{e.isMounted=!0}),Ll(()=>{e.isUnmounting=!0}),e}const nn=[Function,Array],sr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn},If={name:"BaseTransition",props:sr,setup(e,{slots:n}){const t=In(),s=tr();let l;return()=>{const a=n.default&&Ml(n.default(),!0);if(!a||!a.length)return;let r=a[0];if(a.length>1){for(const E of a)if(E.type!==Oe){r=E;break}}const i=re(e),{mode:o}=i;if(s.isLeaving)return Jl(r);const c=ei(r);if(!c)return Jl(r);const p=Ot(c,i,s,t);pt(c,p);const u=t.subTree,f=u&&ei(u);let d=!1;const{getTransitionKey:_}=c.type;if(_){const E=_();l===void 0?l=E:E!==l&&(l=E,d=!0)}if(f&&f.type!==Oe&&(!pn(c,f)||d)){const E=Ot(f,i,s,t);if(pt(f,E),o==="out-in")return s.isLeaving=!0,E.afterLeave=()=>{s.isLeaving=!1,t.update.active!==!1&&t.update()},Jl(r);o==="in-out"&&c.type!==Oe&&(E.delayLeave=(w,y,g)=>{const k=Vo(s,f);k[String(f.key)]=f,w._leaveCb=()=>{y(),w._leaveCb=void 0,delete p.delayedLeave},p.delayedLeave=g})}return r}}},Ho=If;function Vo(e,n){const{leavingVNodes:t}=e;let s=t.get(n.type);return s||(s=Object.create(null),t.set(n.type,s)),s}function Ot(e,n,t,s){const{appear:l,mode:a,persisted:r=!1,onBeforeEnter:i,onEnter:o,onAfterEnter:c,onEnterCancelled:p,onBeforeLeave:u,onLeave:f,onAfterLeave:d,onLeaveCancelled:_,onBeforeAppear:E,onAppear:w,onAfterAppear:y,onAppearCancelled:g}=n,k=String(e.key),b=Vo(t,e),S=(j,N)=>{j&&Qe(j,s,9,N)},L=(j,N)=>{const M=N[1];S(j,N),H(j)?j.every(O=>O.length<=1)&&M():j.length<=1&&M()},I={mode:a,persisted:r,beforeEnter(j){let N=i;if(!t.isMounted)if(l)N=E||i;else return;j._leaveCb&&j._leaveCb(!0);const M=b[k];M&&pn(e,M)&&M.el._leaveCb&&M.el._leaveCb(),S(N,[j])},enter(j){let N=o,M=c,O=p;if(!t.isMounted)if(l)N=w||o,M=y||c,O=g||p;else return;let P=!1;const B=j._enterCb=q=>{P||(P=!0,q?S(O,[j]):S(M,[j]),I.delayedLeave&&I.delayedLeave(),j._enterCb=void 0)};N?L(N,[j,B]):B()},leave(j,N){const M=String(e.key);if(j._enterCb&&j._enterCb(!0),t.isUnmounting)return N();S(u,[j]);let O=!1;const P=j._leaveCb=B=>{O||(O=!0,N(),B?S(_,[j]):S(d,[j]),j._leaveCb=void 0,b[M]===e&&delete b[M])};b[M]=e,f?L(f,[j,P]):P()},clone(j){return Ot(j,n,t,s)}};return I}function Jl(e){if(Rs(e))return e=vn(e),e.children=null,e}function ei(e){return Rs(e)?e.children?e.children[0]:void 0:e}function pt(e,n){e.shapeFlag&6&&e.component?pt(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Ml(e,n=!1,t){let s=[],l=0;for(let a=0;a<e.length;a++){let r=e[a];const i=t==null?r.key:String(t)+String(r.key!=null?r.key:a);r.type===ue?(r.patchFlag&128&&l++,s=s.concat(Ml(r.children,n,i))):(n||r.type!==Oe)&&s.push(i!=null?vn(r,{key:i}):r)}if(l>1)for(let a=0;a<s.length;a++)s[a].patchFlag=-2;return s}function _t(e,n){return Y(e)?(()=>ae({name:e.name},n,{setup:e}))():e}const at=e=>!!e.type.__asyncLoader;function Rf(e){Y(e)&&(e={loader:e});const{loader:n,loadingComponent:t,errorComponent:s,delay:l=200,timeout:a,suspensible:r=!0,onError:i}=e;let o=null,c,p=0;const u=()=>(p++,o=null,f()),f=()=>{let d;return o||(d=o=n().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),i)return new Promise((E,w)=>{i(_,()=>E(u()),()=>w(_),p+1)});throw _}).then(_=>d!==o&&o?o:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),c=_,_)))};return _t({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const d=we;if(c)return()=>Yl(c,d);const _=g=>{o=null,yt(g,d,13,!s)};if(r&&d.suspense||Mt)return f().then(g=>()=>Yl(g,d)).catch(g=>(_(g),()=>s?pe(s,{error:g}):null));const E=ve(!1),w=ve(),y=ve(!!l);return l&&setTimeout(()=>{y.value=!1},l),a!=null&&setTimeout(()=>{if(!E.value&&!w.value){const g=new Error(`Async component timed out after ${a}ms.`);_(g),w.value=g}},a),f().then(()=>{E.value=!0,d.parent&&Rs(d.parent.vnode)&&Al(d.parent.update)}).catch(g=>{_(g),w.value=g}),()=>{if(E.value&&c)return Yl(c,d);if(w.value&&s)return pe(s,{error:w.value});if(t&&!y.value)return pe(t)}}})}function Yl(e,n){const{ref:t,props:s,children:l,ce:a}=n.vnode,r=pe(e,s,l);return r.ref=t,r.ce=a,delete n.vnode.ce,r}const Rs=e=>e.type.__isKeepAlive,Pf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const t=In(),s=t.ctx;if(!s.renderer)return()=>{const g=n.default&&n.default();return g&&g.length===1?g[0]:g};const l=new Map,a=new Set;let r=null;const i=t.suspense,{renderer:{p:o,m:c,um:p,o:{createElement:u}}}=s,f=u("div");s.activate=(g,k,b,S,L)=>{const I=g.component;c(g,k,b,0,i),o(I.vnode,g,k,b,I,i,S,g.slotScopeIds,L),Re(()=>{I.isDeactivated=!1,I.a&&Rt(I.a);const j=g.props&&g.props.onVnodeMounted;j&&Fe(j,I.parent,g)},i)},s.deactivate=g=>{const k=g.component;c(g,f,null,1,i),Re(()=>{k.da&&Rt(k.da);const b=g.props&&g.props.onVnodeUnmounted;b&&Fe(b,k.parent,g),k.isDeactivated=!0},i)};function d(g){Ql(g),p(g,t,i,!0)}function _(g){l.forEach((k,b)=>{const S=Ea(k.type);S&&(!g||!g(S))&&E(b)})}function E(g){const k=l.get(g);!r||!pn(k,r)?d(k):r&&Ql(r),l.delete(g),a.delete(g)}kn(()=>[e.include,e.exclude],([g,k])=>{g&&_(b=>es(g,b)),k&&_(b=>!es(k,b))},{flush:"post",deep:!0});let w=null;const y=()=>{w!=null&&l.set(w,Zl(t.subTree))};return Xe(y),ql(y),Ll(()=>{l.forEach(g=>{const{subTree:k,suspense:b}=t,S=Zl(k);if(g.type===S.type&&g.key===S.key){Ql(S);const L=S.component.da;L&&Re(L,b);return}d(g)})}),()=>{if(w=null,!n.default)return null;const g=n.default(),k=g[0];if(g.length>1)return r=null,g;if(!Kn(k)||!(k.shapeFlag&4)&&!(k.shapeFlag&128))return r=null,k;let b=Zl(k);const S=b.type,L=Ea(at(b)?b.type.__asyncResolved||{}:S),{include:I,exclude:j,max:N}=e;if(I&&(!L||!es(I,L))||j&&L&&es(j,L))return r=b,k;const M=b.key==null?S:b.key,O=l.get(M);return b.el&&(b=vn(b),k.shapeFlag&128&&(k.ssContent=b)),w=M,O?(b.el=O.el,b.component=O.component,b.transition&&pt(b,b.transition),b.shapeFlag|=512,a.delete(M),a.add(M)):(a.add(M),N&&a.size>parseInt(N,10)&&E(a.values().next().value)),b.shapeFlag|=256,r=b,Lo(k.type)?k:b}}},Af=Pf;function es(e,n){return H(e)?e.some(t=>es(t,n)):X(e)?e.split(",").includes(n):Gp(e)?e.test(n):!1}function Uo(e,n){zo(e,"a",n)}function Ko(e,n){zo(e,"da",n)}function zo(e,n,t=we){const s=e.__wdc||(e.__wdc=()=>{let l=t;for(;l;){if(l.isDeactivated)return;l=l.parent}return e()});if($l(n,s,t),t){let l=t.parent;for(;l&&l.parent;)Rs(l.parent.vnode)&&Nf(s,n,t,l),l=l.parent}}function Nf(e,n,t,s){const l=$l(n,e,s,!0);Wt(()=>{Fa(s[n],l)},t)}function Ql(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Zl(e){return e.shapeFlag&128?e.ssContent:e}function $l(e,n,t=we,s=!1){if(t){const l=t[e]||(t[e]=[]),a=n.__weh||(n.__weh=(...r)=>{if(t.isUnmounted)return;Ut(),zn(t);const i=Qe(n,t,e,r);return Fn(),Kt(),i});return s?l.unshift(a):l.push(a),a}}const Tn=e=>(n,t=we)=>(!Mt||e==="sp")&&$l(e,(...s)=>n(...s),t),Wo=Tn("bm"),Xe=Tn("m"),Go=Tn("bu"),ql=Tn("u"),Ll=Tn("bum"),Wt=Tn("um"),Jo=Tn("sp"),Yo=Tn("rtg"),Qo=Tn("rtc");function Zo(e,n=we){$l("ec",e,n)}const lr="components",Of="directives";function ar(e,n){return rr(lr,e,!0,n)||e}const Xo=Symbol.for("v-ndc");function Mf(e){return X(e)?rr(lr,e,!1)||e:e||Xo}function $f(e){return rr(Of,e)}function rr(e,n,t=!0,s=!1){const l=Te||we;if(l){const a=l.type;if(e===lr){const i=Ea(a,!1);if(i&&(i===n||i===ke(n)||i===gt(ke(n))))return a}const r=ni(l[e]||a[e],n)||ni(l.appContext[e],n);return!r&&s?a:r}}function ni(e,n){return e&&(e[n]||e[ke(n)]||e[gt(ke(n))])}function _n(e,n,t,s){let l;const a=t&&t[s];if(H(e)||X(e)){l=new Array(e.length);for(let r=0,i=e.length;r<i;r++)l[r]=n(e[r],r,void 0,a&&a[r])}else if(typeof e=="number"){l=new Array(e);for(let r=0;r<e;r++)l[r]=n(r+1,r,void 0,a&&a[r])}else if(ge(e))if(e[Symbol.iterator])l=Array.from(e,(r,i)=>n(r,i,void 0,a&&a[i]));else{const r=Object.keys(e);l=new Array(r.length);for(let i=0,o=r.length;i<o;i++){const c=r[i];l[i]=n(e[c],c,i,a&&a[i])}}else l=[];return t&&(t[s]=l),l}function qf(e,n){for(let t=0;t<n.length;t++){const s=n[t];if(H(s))for(let l=0;l<s.length;l++)e[s[l].name]=s[l].fn;else s&&(e[s.name]=s.key?(...l)=>{const a=s.fn(...l);return a&&(a.key=s.key),a}:s.fn)}return e}function Lf(e,n,t={},s,l){if(Te.isCE||Te.parent&&at(Te.parent)&&Te.parent.isCE)return n!=="default"&&(t.name=n),pe("slot",t,s&&s());let a=e[n];a&&a._c&&(a._d=!1),Z();const r=a&&ec(a(t)),i=Un(ue,{key:t.key||r&&r.key||`_${n}`},r||(s?s():[]),r&&e._===1?64:-2);return!l&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),a&&a._c&&(a._d=!0),i}function ec(e){return e.some(n=>Kn(n)?!(n.type===Oe||n.type===ue&&!ec(n.children)):!0)?e:null}function Ff(e,n){const t={};for(const s in e)t[n&&/[A-Z]/.test(s)?`on:${s}`:It(s)]=e[s];return t}const ha=e=>e?vc(e)?Bl(e)||e.proxy:ha(e.parent):null,ts=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ha(e.parent),$root:e=>ha(e.root),$emit:e=>e.emit,$options:e=>ir(e),$forceUpdate:e=>e.f||(e.f=()=>Al(e.update)),$nextTick:e=>e.n||(e.n=Pl.bind(e.proxy)),$watch:e=>Sf.bind(e)}),Xl=(e,n)=>e!==me&&!e.__isScriptSetup&&ce(e,n),da={get({_:e},n){const{ctx:t,setupState:s,data:l,props:a,accessCache:r,type:i,appContext:o}=e;let c;if(n[0]!=="$"){const d=r[n];if(d!==void 0)switch(d){case 1:return s[n];case 2:return l[n];case 4:return t[n];case 3:return a[n]}else{if(Xl(s,n))return r[n]=1,s[n];if(l!==me&&ce(l,n))return r[n]=2,l[n];if((c=e.propsOptions[0])&&ce(c,n))return r[n]=3,a[n];if(t!==me&&ce(t,n))return r[n]=4,t[n];ma&&(r[n]=0)}}const p=ts[n];let u,f;if(p)return n==="$attrs"&&He(e,"get",n),p(e);if((u=i.__cssModules)&&(u=u[n]))return u;if(t!==me&&ce(t,n))return r[n]=4,t[n];if(f=o.config.globalProperties,ce(f,n))return f[n]},set({_:e},n,t){const{data:s,setupState:l,ctx:a}=e;return Xl(l,n)?(l[n]=t,!0):s!==me&&ce(s,n)?(s[n]=t,!0):ce(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(a[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:s,appContext:l,propsOptions:a}},r){let i;return!!t[r]||e!==me&&ce(e,r)||Xl(n,r)||(i=a[0])&&ce(i,r)||ce(s,r)||ce(ts,r)||ce(l.config.globalProperties,r)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:ce(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}},Bf=ae({},da,{get(e,n){if(n!==Symbol.unscopables)return da.get(e,n,e)},has(e,n){return n[0]!=="_"&&!eu(n)}});function Df(){return null}function Hf(){return null}function Vf(e){}function Uf(e){}function Kf(){return null}function zf(){}function Wf(e,n){return null}function Gf(){return nc().slots}function Jf(){return nc().attrs}function Yf(e,n,t){const s=In();if(t&&t.local){const l=ve(e[n]);return kn(()=>e[n],a=>l.value=a),kn(l,a=>{a!==e[n]&&s.emit(`update:${n}`,a)}),l}else return{__v_isRef:!0,get value(){return e[n]},set value(l){s.emit(`update:${n}`,l)}}}function nc(){const e=In();return e.setupContext||(e.setupContext=xc(e))}function ys(e){return H(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}function Qf(e,n){const t=ys(e);for(const s in n){if(s.startsWith("__skip"))continue;let l=t[s];l?H(l)||Y(l)?l=t[s]={type:l,default:n[s]}:l.default=n[s]:l===null&&(l=t[s]={default:n[s]}),l&&n[`__skip_${s}`]&&(l.skipFactory=!0)}return t}function Zf(e,n){return!e||!n?e||n:H(e)&&H(n)?e.concat(n):ae({},ys(e),ys(n))}function Xf(e,n){const t={};for(const s in e)n.includes(s)||Object.defineProperty(t,s,{enumerable:!0,get:()=>e[s]});return t}function eh(e){const n=In();let t=e();return Fn(),Ba(t)&&(t=t.catch(s=>{throw zn(n),s})),[t,()=>zn(n)]}let ma=!0;function nh(e){const n=ir(e),t=e.proxy,s=e.ctx;ma=!1,n.beforeCreate&&ti(n.beforeCreate,e,"bc");const{data:l,computed:a,methods:r,watch:i,provide:o,inject:c,created:p,beforeMount:u,mounted:f,beforeUpdate:d,updated:_,activated:E,deactivated:w,beforeDestroy:y,beforeUnmount:g,destroyed:k,unmounted:b,render:S,renderTracked:L,renderTriggered:I,errorCaptured:j,serverPrefetch:N,expose:M,inheritAttrs:O,components:P,directives:B,filters:q}=n;if(c&&th(c,s,null),r)for(const ie in r){const oe=r[ie];Y(oe)&&(s[ie]=oe.bind(t))}if(l){const ie=l.call(t,t);ge(ie)&&(e.data=zt(ie))}if(ma=!0,a)for(const ie in a){const oe=a[ie],Ke=Y(oe)?oe.bind(t,t):Y(oe.get)?oe.get.bind(t,t):qe,Rn=!Y(oe)&&Y(oe.set)?oe.set.bind(t):qe,dn=Ye({get:Ke,set:Rn});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>dn.value,set:Le=>dn.value=Le})}if(i)for(const ie in i)tc(i[ie],s,t,ie);if(o){const ie=Y(o)?o.call(t):o;Reflect.ownKeys(ie).forEach(oe=>{ss(oe,ie[oe])})}p&&ti(p,e,"c");function ee(ie,oe){H(oe)?oe.forEach(Ke=>ie(Ke.bind(t))):oe&&ie(oe.bind(t))}if(ee(Wo,u),ee(Xe,f),ee(Go,d),ee(ql,_),ee(Uo,E),ee(Ko,w),ee(Zo,j),ee(Qo,L),ee(Yo,I),ee(Ll,g),ee(Wt,b),ee(Jo,N),H(M))if(M.length){const ie=e.exposed||(e.exposed={});M.forEach(oe=>{Object.defineProperty(ie,oe,{get:()=>t[oe],set:Ke=>t[oe]=Ke})})}else e.exposed||(e.exposed={});S&&e.render===qe&&(e.render=S),O!=null&&(e.inheritAttrs=O),P&&(e.components=P),B&&(e.directives=B)}function th(e,n,t=qe){H(e)&&(e=ga(e));for(const s in e){const l=e[s];let a;ge(l)?"default"in l?a=un(l.from||s,l.default,!0):a=un(l.from||s):a=un(l),Ce(a)?Object.defineProperty(n,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:r=>a.value=r}):n[s]=a}}function ti(e,n,t){Qe(H(e)?e.map(s=>s.bind(n.proxy)):e.bind(n.proxy),n,t)}function tc(e,n,t,s){const l=s.includes(".")?Do(t,s):()=>t[s];if(X(e)){const a=n[e];Y(a)&&kn(l,a)}else if(Y(e))kn(l,e.bind(t));else if(ge(e))if(H(e))e.forEach(a=>tc(a,n,t,s));else{const a=Y(e.handler)?e.handler.bind(t):n[e.handler];Y(a)&&kn(l,a,e)}}function ir(e){const n=e.type,{mixins:t,extends:s}=n,{mixins:l,optionsCache:a,config:{optionMergeStrategies:r}}=e.appContext,i=a.get(n);let o;return i?o=i:!l.length&&!t&&!s?o=n:(o={},l.length&&l.forEach(c=>ol(o,c,r,!0)),ol(o,n,r)),ge(n)&&a.set(n,o),o}function ol(e,n,t,s=!1){const{mixins:l,extends:a}=n;a&&ol(e,a,t,!0),l&&l.forEach(r=>ol(e,r,t,!0));for(const r in n)if(!(s&&r==="expose")){const i=sh[r]||t&&t[r];e[r]=i?i(e[r],n[r]):n[r]}return e}const sh={data:si,props:li,emits:li,methods:ns,computed:ns,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:ns,directives:ns,watch:ah,provide:si,inject:lh};function si(e,n){return n?e?function(){return ae(Y(e)?e.call(this,this):e,Y(n)?n.call(this,this):n)}:n:e}function lh(e,n){return ns(ga(e),ga(n))}function ga(e){if(H(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function $e(e,n){return e?[...new Set([].concat(e,n))]:n}function ns(e,n){return e?ae(Object.create(null),e,n):n}function li(e,n){return e?H(e)&&H(n)?[...new Set([...e,...n])]:ae(Object.create(null),ys(e),ys(n!=null?n:{})):n}function ah(e,n){if(!e)return n;if(!n)return e;const t=ae(Object.create(null),e);for(const s in n)t[s]=$e(e[s],n[s]);return t}function sc(){return{app:null,config:{isNativeTag:Zs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rh=0;function ih(e,n){return function(s,l=null){Y(s)||(s=ae({},s)),l!=null&&!ge(l)&&(l=null);const a=sc(),r=new Set;let i=!1;const o=a.app={_uid:rh++,_component:s,_props:l,_container:null,_context:a,_instance:null,version:Sc,get config(){return a.config},set config(c){},use(c,...p){return r.has(c)||(c&&Y(c.install)?(r.add(c),c.install(o,...p)):Y(c)&&(r.add(c),c(o,...p))),o},mixin(c){return a.mixins.includes(c)||a.mixins.push(c),o},component(c,p){return p?(a.components[c]=p,o):a.components[c]},directive(c,p){return p?(a.directives[c]=p,o):a.directives[c]},mount(c,p,u){if(!i){const f=pe(s,l);return f.appContext=a,p&&n?n(f,c):e(f,c,u),i=!0,o._container=c,c.__vue_app__=o,Bl(f.component)||f.component.proxy}},unmount(){i&&(e(null,o._container),delete o._container.__vue_app__)},provide(c,p){return a.provides[c]=p,o},runWithContext(c){_s=o;try{return c()}finally{_s=null}}};return o}}let _s=null;function ss(e,n){if(we){let t=we.provides;const s=we.parent&&we.parent.provides;s===t&&(t=we.provides=Object.create(s)),t[e]=n}}function un(e,n,t=!1){const s=we||Te;if(s||_s){const l=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:_s._context.provides;if(l&&e in l)return l[e];if(arguments.length>1)return t&&Y(n)?n.call(s&&s.proxy):n}}function oh(){return!!(we||Te||_s)}function ch(e,n,t,s=!1){const l={},a={};sl(a,Fl,1),e.propsDefaults=Object.create(null),lc(e,n,l,a);for(const r in e.propsOptions[0])r in l||(l[r]=void 0);t?e.props=s?l:Io(l):e.type.props?e.props=l:e.props=a,e.attrs=a}function ph(e,n,t,s){const{props:l,attrs:a,vnode:{patchFlag:r}}=e,i=re(l),[o]=e.propsOptions;let c=!1;if((s||r>0)&&!(r&16)){if(r&8){const p=e.vnode.dynamicProps;for(let u=0;u<p.length;u++){let f=p[u];if(Nl(e.emitsOptions,f))continue;const d=n[f];if(o)if(ce(a,f))d!==a[f]&&(a[f]=d,c=!0);else{const _=ke(f);l[_]=ya(o,i,_,d,e,!1)}else d!==a[f]&&(a[f]=d,c=!0)}}}else{lc(e,n,l,a)&&(c=!0);let p;for(const u in i)(!n||!ce(n,u)&&((p=Je(u))===u||!ce(n,p)))&&(o?t&&(t[u]!==void 0||t[p]!==void 0)&&(l[u]=ya(o,i,u,void 0,e,!0)):delete l[u]);if(a!==i)for(const u in a)(!n||!ce(n,u)&&!0)&&(delete a[u],c=!0)}c&&Sn(e,"set","$attrs")}function lc(e,n,t,s){const[l,a]=e.propsOptions;let r=!1,i;if(n)for(let o in n){if(tt(o))continue;const c=n[o];let p;l&&ce(l,p=ke(o))?!a||!a.includes(p)?t[p]=c:(i||(i={}))[p]=c:Nl(e.emitsOptions,o)||(!(o in s)||c!==s[o])&&(s[o]=c,r=!0)}if(a){const o=re(t),c=i||me;for(let p=0;p<a.length;p++){const u=a[p];t[u]=ya(l,o,u,c[u],e,!ce(c,u))}}return r}function ya(e,n,t,s,l,a){const r=e[t];if(r!=null){const i=ce(r,"default");if(i&&s===void 0){const o=r.default;if(r.type!==Function&&!r.skipFactory&&Y(o)){const{propsDefaults:c}=l;t in c?s=c[t]:(zn(l),s=c[t]=o.call(null,n),Fn())}else s=o}r[0]&&(a&&!i?s=!1:r[1]&&(s===""||s===Je(t))&&(s=!0))}return s}function ac(e,n,t=!1){const s=n.propsCache,l=s.get(e);if(l)return l;const a=e.props,r={},i=[];let o=!1;if(!Y(e)){const p=u=>{o=!0;const[f,d]=ac(u,n,!0);ae(r,f),d&&i.push(...d)};!t&&n.mixins.length&&n.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!a&&!o)return ge(e)&&s.set(e,St),St;if(H(a))for(let p=0;p<a.length;p++){const u=ke(a[p]);ai(u)&&(r[u]=me)}else if(a)for(const p in a){const u=ke(p);if(ai(u)){const f=a[p],d=r[u]=H(f)||Y(f)?{type:f}:ae({},f);if(d){const _=oi(Boolean,d.type),E=oi(String,d.type);d[0]=_>-1,d[1]=E<0||_<E,(_>-1||ce(d,"default"))&&i.push(u)}}}const c=[r,i];return ge(e)&&s.set(e,c),c}function ai(e){return e[0]!=="$"}function ri(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function ii(e,n){return ri(e)===ri(n)}function oi(e,n){return H(n)?n.findIndex(t=>ii(t,e)):Y(n)&&ii(n,e)?0:-1}const rc=e=>e[0]==="_"||e==="$stable",or=e=>H(e)?e.map(Ge):[Ge(e)],uh=(e,n,t)=>{if(n._n)return n;const s=Xa((...l)=>or(n(...l)),t);return s._c=!1,s},ic=(e,n,t)=>{const s=e._ctx;for(const l in e){if(rc(l))continue;const a=e[l];if(Y(a))n[l]=uh(l,a,s);else if(a!=null){const r=or(a);n[l]=()=>r}}},oc=(e,n)=>{const t=or(n);e.slots.default=()=>t},fh=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=re(n),sl(n,"_",t)):ic(n,e.slots={})}else e.slots={},n&&oc(e,n);sl(e.slots,Fl,1)},hh=(e,n,t)=>{const{vnode:s,slots:l}=e;let a=!0,r=me;if(s.shapeFlag&32){const i=n._;i?t&&i===1?a=!1:(ae(l,n),!t&&i===1&&delete l._):(a=!n.$stable,ic(n,l)),r=n}else n&&(oc(e,n),r={default:1});if(a)for(const i in l)!rc(i)&&!(i in r)&&delete l[i]};function cl(e,n,t,s,l=!1){if(H(e)){e.forEach((f,d)=>cl(f,n&&(H(n)?n[d]:n),t,s,l));return}if(at(s)&&!l)return;const a=s.shapeFlag&4?Bl(s.component)||s.component.proxy:s.el,r=l?null:a,{i,r:o}=e,c=n&&n.r,p=i.refs===me?i.refs={}:i.refs,u=i.setupState;if(c!=null&&c!==o&&(X(c)?(p[c]=null,ce(u,c)&&(u[c]=null)):Ce(c)&&(c.value=null)),Y(o))wn(o,i,12,[r,p]);else{const f=X(o),d=Ce(o);if(f||d){const _=()=>{if(e.f){const E=f?ce(u,o)?u[o]:p[o]:o.value;l?H(E)&&Fa(E,a):H(E)?E.includes(a)||E.push(a):f?(p[o]=[a],ce(u,o)&&(u[o]=p[o])):(o.value=[a],e.k&&(p[e.k]=o.value))}else f?(p[o]=r,ce(u,o)&&(u[o]=r)):d&&(o.value=r,e.k&&(p[e.k]=r))};r?(_.id=-1,Re(_,t)):_()}}}let An=!1;const Ks=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",zs=e=>e.nodeType===8;function dh(e){const{mt:n,p:t,o:{patchProp:s,createText:l,nextSibling:a,parentNode:r,remove:i,insert:o,createComment:c}}=e,p=(y,g)=>{if(!g.hasChildNodes()){t(null,y,g),il(),g._vnode=y;return}An=!1,u(g.firstChild,y,null,null,null),il(),g._vnode=y,An&&console.error("Hydration completed but contains mismatches.")},u=(y,g,k,b,S,L=!1)=>{const I=zs(y)&&y.data==="[",j=()=>E(y,g,k,b,S,I),{type:N,ref:M,shapeFlag:O,patchFlag:P}=g;let B=y.nodeType;g.el=y,P===-2&&(L=!1,g.dynamicChildren=null);let q=null;switch(N){case ut:B!==3?g.children===""?(o(g.el=l(""),r(y),y),q=y):q=j():(y.data!==g.children&&(An=!0,y.data=g.children),q=a(y));break;case Oe:B!==8||I?q=j():q=a(y);break;case rt:if(I&&(y=a(y),B=y.nodeType),B===1||B===3){q=y;const te=!g.children.length;for(let ee=0;ee<g.staticCount;ee++)te&&(g.children+=q.nodeType===1?q.outerHTML:q.data),ee===g.staticCount-1&&(g.anchor=q),q=a(q);return I?a(q):q}else j();break;case ue:I?q=_(y,g,k,b,S,L):q=j();break;default:if(O&1)B!==1||g.type.toLowerCase()!==y.tagName.toLowerCase()?q=j():q=f(y,g,k,b,S,L);else if(O&6){g.slotScopeIds=S;const te=r(y);if(n(g,te,null,k,b,Ks(te),L),q=I?w(y):a(y),q&&zs(q)&&q.data==="teleport end"&&(q=a(q)),at(g)){let ee;I?(ee=pe(ue),ee.anchor=q?q.previousSibling:te.lastChild):ee=y.nodeType===3?vs(""):pe("div"),ee.el=y,g.component.subTree=ee}}else O&64?B!==8?q=j():q=g.type.hydrate(y,g,k,b,S,L,e,d):O&128&&(q=g.type.hydrate(y,g,k,b,Ks(r(y)),S,L,e,u))}return M!=null&&cl(M,null,b,g),q},f=(y,g,k,b,S,L)=>{L=L||!!g.dynamicChildren;const{type:I,props:j,patchFlag:N,shapeFlag:M,dirs:O}=g,P=I==="input"&&O||I==="option";if(P||N!==-1){if(O&&gn(g,null,k,"created"),j)if(P||!L||N&48)for(const q in j)(P&&q.endsWith("value")||dt(q)&&!tt(q))&&s(y,q,null,j[q],!1,void 0,k);else j.onClick&&s(y,"onClick",null,j.onClick,!1,void 0,k);let B;if((B=j&&j.onVnodeBeforeMount)&&Fe(B,k,g),O&&gn(g,null,k,"beforeMount"),((B=j&&j.onVnodeMounted)||O)&&Fo(()=>{B&&Fe(B,k,g),O&&gn(g,null,k,"mounted")},b),M&16&&!(j&&(j.innerHTML||j.textContent))){let q=d(y.firstChild,g,y,k,b,S,L);for(;q;){An=!0;const te=q;q=q.nextSibling,i(te)}}else M&8&&y.textContent!==g.children&&(An=!0,y.textContent=g.children)}return y.nextSibling},d=(y,g,k,b,S,L,I)=>{I=I||!!g.dynamicChildren;const j=g.children,N=j.length;for(let M=0;M<N;M++){const O=I?j[M]:j[M]=Ge(j[M]);if(y)y=u(y,O,b,S,L,I);else{if(O.type===ut&&!O.children)continue;An=!0,t(null,O,k,null,b,S,Ks(k),L)}}return y},_=(y,g,k,b,S,L)=>{const{slotScopeIds:I}=g;I&&(S=S?S.concat(I):I);const j=r(y),N=d(a(y),g,j,k,b,S,L);return N&&zs(N)&&N.data==="]"?a(g.anchor=N):(An=!0,o(g.anchor=c("]"),j,N),N)},E=(y,g,k,b,S,L)=>{if(An=!0,g.el=null,L){const N=w(y);for(;;){const M=a(y);if(M&&M!==N)i(M);else break}}const I=a(y),j=r(y);return i(y),t(null,g,j,I,k,b,Ks(j),S),I},w=y=>{let g=0;for(;y;)if(y=a(y),y&&zs(y)&&(y.data==="["&&g++,y.data==="]")){if(g===0)return a(y);g--}return y};return[p,u]}const Re=Fo;function cc(e){return uc(e)}function pc(e){return uc(e,dh)}function uc(e,n){const t=oa();t.__VUE__=!0;const{insert:s,remove:l,patchProp:a,createElement:r,createText:i,createComment:o,setText:c,setElementText:p,parentNode:u,nextSibling:f,setScopeId:d=qe,insertStaticContent:_}=e,E=(h,m,v,x=null,T=null,R=null,V=!1,$=null,F=!!m.dynamicChildren)=>{if(h===m)return;h&&!pn(h,m)&&(x=C(h),Le(h,T,R,!0),h=null),m.patchFlag===-2&&(F=!1,m.dynamicChildren=null);const{type:A,ref:G,shapeFlag:K}=m;switch(A){case ut:w(h,m,v,x);break;case Oe:y(h,m,v,x);break;case rt:h==null&&g(m,v,x,V);break;case ue:P(h,m,v,x,T,R,V,$,F);break;default:K&1?S(h,m,v,x,T,R,V,$,F):K&6?B(h,m,v,x,T,R,V,$,F):(K&64||K&128)&&A.process(h,m,v,x,T,R,V,$,F,D)}G!=null&&T&&cl(G,h&&h.ref,R,m||h,!m)},w=(h,m,v,x)=>{if(h==null)s(m.el=i(m.children),v,x);else{const T=m.el=h.el;m.children!==h.children&&c(T,m.children)}},y=(h,m,v,x)=>{h==null?s(m.el=o(m.children||""),v,x):m.el=h.el},g=(h,m,v,x)=>{[h.el,h.anchor]=_(h.children,m,v,x,h.el,h.anchor)},k=({el:h,anchor:m},v,x)=>{let T;for(;h&&h!==m;)T=f(h),s(h,v,x),h=T;s(m,v,x)},b=({el:h,anchor:m})=>{let v;for(;h&&h!==m;)v=f(h),l(h),h=v;l(m)},S=(h,m,v,x,T,R,V,$,F)=>{V=V||m.type==="svg",h==null?L(m,v,x,T,R,V,$,F):N(h,m,T,R,V,$,F)},L=(h,m,v,x,T,R,V,$)=>{let F,A;const{type:G,props:K,shapeFlag:J,transition:Q,dirs:se}=h;if(F=h.el=r(h.type,R,K&&K.is,K),J&8?p(F,h.children):J&16&&j(h.children,F,null,x,T,R&&G!=="foreignObject",V,$),se&&gn(h,null,x,"created"),I(F,h,h.scopeId,V,x),K){for(const ye in K)ye!=="value"&&!tt(ye)&&a(F,ye,null,K[ye],R,h.children,x,T,Pe);"value"in K&&a(F,"value",null,K.value),(A=K.onVnodeBeforeMount)&&Fe(A,x,h)}se&&gn(h,null,x,"beforeMount");const _e=(!T||T&&!T.pendingBranch)&&Q&&!Q.persisted;_e&&Q.beforeEnter(F),s(F,m,v),((A=K&&K.onVnodeMounted)||_e||se)&&Re(()=>{A&&Fe(A,x,h),_e&&Q.enter(F),se&&gn(h,null,x,"mounted")},T)},I=(h,m,v,x,T)=>{if(v&&d(h,v),x)for(let R=0;R<x.length;R++)d(h,x[R]);if(T){let R=T.subTree;if(m===R){const V=T.vnode;I(h,V,V.scopeId,V.slotScopeIds,T.parent)}}},j=(h,m,v,x,T,R,V,$,F=0)=>{for(let A=F;A<h.length;A++){const G=h[A]=$?$n(h[A]):Ge(h[A]);E(null,G,m,v,x,T,R,V,$)}},N=(h,m,v,x,T,R,V)=>{const $=m.el=h.el;let{patchFlag:F,dynamicChildren:A,dirs:G}=m;F|=h.patchFlag&16;const K=h.props||me,J=m.props||me;let Q;v&&Yn(v,!1),(Q=J.onVnodeBeforeUpdate)&&Fe(Q,v,m,h),G&&gn(m,h,v,"beforeUpdate"),v&&Yn(v,!0);const se=T&&m.type!=="foreignObject";if(A?M(h.dynamicChildren,A,$,v,x,se,R):V||oe(h,m,$,null,v,x,se,R,!1),F>0){if(F&16)O($,m,K,J,v,x,T);else if(F&2&&K.class!==J.class&&a($,"class",null,J.class,T),F&4&&a($,"style",K.style,J.style,T),F&8){const _e=m.dynamicProps;for(let ye=0;ye<_e.length;ye++){const Ee=_e[ye],on=K[Ee],jt=J[Ee];(jt!==on||Ee==="value")&&a($,Ee,on,jt,T,h.children,v,x,Pe)}}F&1&&h.children!==m.children&&p($,m.children)}else!V&&A==null&&O($,m,K,J,v,x,T);((Q=J.onVnodeUpdated)||G)&&Re(()=>{Q&&Fe(Q,v,m,h),G&&gn(m,h,v,"updated")},x)},M=(h,m,v,x,T,R,V)=>{for(let $=0;$<m.length;$++){const F=h[$],A=m[$],G=F.el&&(F.type===ue||!pn(F,A)||F.shapeFlag&70)?u(F.el):v;E(F,A,G,null,x,T,R,V,!0)}},O=(h,m,v,x,T,R,V)=>{if(v!==x){if(v!==me)for(const $ in v)!tt($)&&!($ in x)&&a(h,$,v[$],null,V,m.children,T,R,Pe);for(const $ in x){if(tt($))continue;const F=x[$],A=v[$];F!==A&&$!=="value"&&a(h,$,A,F,V,m.children,T,R,Pe)}"value"in x&&a(h,"value",v.value,x.value)}},P=(h,m,v,x,T,R,V,$,F)=>{const A=m.el=h?h.el:i(""),G=m.anchor=h?h.anchor:i("");let{patchFlag:K,dynamicChildren:J,slotScopeIds:Q}=m;Q&&($=$?$.concat(Q):Q),h==null?(s(A,v,x),s(G,v,x),j(m.children,v,G,T,R,V,$,F)):K>0&&K&64&&J&&h.dynamicChildren?(M(h.dynamicChildren,J,v,T,R,V,$),(m.key!=null||T&&m===T.subTree)&&cr(h,m,!0)):oe(h,m,v,G,T,R,V,$,F)},B=(h,m,v,x,T,R,V,$,F)=>{m.slotScopeIds=$,h==null?m.shapeFlag&512?T.ctx.activate(m,v,x,V,F):q(m,v,x,T,R,V,F):te(h,m,F)},q=(h,m,v,x,T,R,V)=>{const $=h.component=_c(h,x,T);if(Rs(h)&&($.ctx.renderer=D),bc($),$.asyncDep){if(T&&T.registerDep($,ee),!h.el){const F=$.subTree=pe(Oe);y(null,F,m,v)}return}ee($,h,m,v,T,R,V)},te=(h,m,v)=>{const x=m.component=h.component;if(yf(h,m,v))if(x.asyncDep&&!x.asyncResolved){ie(x,m,v);return}else x.next=m,pf(x.update),x.update();else m.el=h.el,x.vnode=m},ee=(h,m,v,x,T,R,V)=>{const $=()=>{if(h.isMounted){let{next:G,bu:K,u:J,parent:Q,vnode:se}=h,_e=G,ye;Yn(h,!1),G?(G.el=se.el,ie(h,G,V)):G=se,K&&Rt(K),(ye=G.props&&G.props.onVnodeBeforeUpdate)&&Fe(ye,Q,G,se),Yn(h,!0);const Ee=Xs(h),on=h.subTree;h.subTree=Ee,E(on,Ee,u(on.el),C(on),h,T,R),G.el=Ee.el,_e===null&&er(h,Ee.el),J&&Re(J,T),(ye=G.props&&G.props.onVnodeUpdated)&&Re(()=>Fe(ye,Q,G,se),T)}else{let G;const{el:K,props:J}=m,{bm:Q,m:se,parent:_e}=h,ye=at(m);if(Yn(h,!1),Q&&Rt(Q),!ye&&(G=J&&J.onVnodeBeforeMount)&&Fe(G,_e,m),Yn(h,!0),K&&fe){const Ee=()=>{h.subTree=Xs(h),fe(K,h.subTree,h,T,null)};ye?m.type.__asyncLoader().then(()=>!h.isUnmounted&&Ee()):Ee()}else{const Ee=h.subTree=Xs(h);E(null,Ee,v,x,h,T,R),m.el=Ee.el}if(se&&Re(se,T),!ye&&(G=J&&J.onVnodeMounted)){const Ee=m;Re(()=>Fe(G,_e,Ee),T)}(m.shapeFlag&256||_e&&at(_e.vnode)&&_e.vnode.shapeFlag&256)&&h.a&&Re(h.a,T),h.isMounted=!0,m=v=x=null}},F=h.effect=new Ts($,()=>Al(A),h.scope),A=h.update=()=>F.run();A.id=h.uid,Yn(h,!0),A()},ie=(h,m,v)=>{m.component=h;const x=h.vnode.props;h.vnode=m,h.next=null,ph(h,m.props,x,v),hh(h,m.children,v),Ut(),Qr(),Kt()},oe=(h,m,v,x,T,R,V,$,F=!1)=>{const A=h&&h.children,G=h?h.shapeFlag:0,K=m.children,{patchFlag:J,shapeFlag:Q}=m;if(J>0){if(J&128){Rn(A,K,v,x,T,R,V,$,F);return}else if(J&256){Ke(A,K,v,x,T,R,V,$,F);return}}Q&8?(G&16&&Pe(A,T,R),K!==A&&p(v,K)):G&16?Q&16?Rn(A,K,v,x,T,R,V,$,F):Pe(A,T,R,!0):(G&8&&p(v,""),Q&16&&j(K,v,x,T,R,V,$,F))},Ke=(h,m,v,x,T,R,V,$,F)=>{h=h||St,m=m||St;const A=h.length,G=m.length,K=Math.min(A,G);let J;for(J=0;J<K;J++){const Q=m[J]=F?$n(m[J]):Ge(m[J]);E(h[J],Q,v,null,T,R,V,$,F)}A>G?Pe(h,T,R,!0,!1,K):j(m,v,x,T,R,V,$,F,K)},Rn=(h,m,v,x,T,R,V,$,F)=>{let A=0;const G=m.length;let K=h.length-1,J=G-1;for(;A<=K&&A<=J;){const Q=h[A],se=m[A]=F?$n(m[A]):Ge(m[A]);if(pn(Q,se))E(Q,se,v,null,T,R,V,$,F);else break;A++}for(;A<=K&&A<=J;){const Q=h[K],se=m[J]=F?$n(m[J]):Ge(m[J]);if(pn(Q,se))E(Q,se,v,null,T,R,V,$,F);else break;K--,J--}if(A>K){if(A<=J){const Q=J+1,se=Q<G?m[Q].el:x;for(;A<=J;)E(null,m[A]=F?$n(m[A]):Ge(m[A]),v,se,T,R,V,$,F),A++}}else if(A>J)for(;A<=K;)Le(h[A],T,R,!0),A++;else{const Q=A,se=A,_e=new Map;for(A=se;A<=J;A++){const ze=m[A]=F?$n(m[A]):Ge(m[A]);ze.key!=null&&_e.set(ze.key,A)}let ye,Ee=0;const on=J-se+1;let jt=!1,Fr=0;const Gt=new Array(on);for(A=0;A<on;A++)Gt[A]=0;for(A=Q;A<=K;A++){const ze=h[A];if(Ee>=on){Le(ze,T,R,!0);continue}let mn;if(ze.key!=null)mn=_e.get(ze.key);else for(ye=se;ye<=J;ye++)if(Gt[ye-se]===0&&pn(ze,m[ye])){mn=ye;break}mn===void 0?Le(ze,T,R,!0):(Gt[mn-se]=A+1,mn>=Fr?Fr=mn:jt=!0,E(ze,m[mn],v,null,T,R,V,$,F),Ee++)}const Br=jt?mh(Gt):St;for(ye=Br.length-1,A=on-1;A>=0;A--){const ze=se+A,mn=m[ze],Dr=ze+1<G?m[ze+1].el:x;Gt[A]===0?E(null,mn,v,Dr,T,R,V,$,F):jt&&(ye<0||A!==Br[ye]?dn(mn,v,Dr,2):ye--)}}},dn=(h,m,v,x,T=null)=>{const{el:R,type:V,transition:$,children:F,shapeFlag:A}=h;if(A&6){dn(h.component.subTree,m,v,x);return}if(A&128){h.suspense.move(m,v,x);return}if(A&64){V.move(h,m,v,D);return}if(V===ue){s(R,m,v);for(let K=0;K<F.length;K++)dn(F[K],m,v,x);s(h.anchor,m,v);return}if(V===rt){k(h,m,v);return}if(x!==2&&A&1&&$)if(x===0)$.beforeEnter(R),s(R,m,v),Re(()=>$.enter(R),T);else{const{leave:K,delayLeave:J,afterLeave:Q}=$,se=()=>s(R,m,v),_e=()=>{K(R,()=>{se(),Q&&Q()})};J?J(R,se,_e):_e()}else s(R,m,v)},Le=(h,m,v,x=!1,T=!1)=>{const{type:R,props:V,ref:$,children:F,dynamicChildren:A,shapeFlag:G,patchFlag:K,dirs:J}=h;if($!=null&&cl($,null,v,h,!0),G&256){m.ctx.deactivate(h);return}const Q=G&1&&J,se=!at(h);let _e;if(se&&(_e=V&&V.onVnodeBeforeUnmount)&&Fe(_e,m,h),G&6)qs(h.component,v,x);else{if(G&128){h.suspense.unmount(v,x);return}Q&&gn(h,null,m,"beforeUnmount"),G&64?h.type.remove(h,m,v,T,D,x):A&&(R!==ue||K>0&&K&64)?Pe(A,m,v,!1,!0):(R===ue&&K&384||!T&&G&16)&&Pe(F,m,v),x&&vt(h)}(se&&(_e=V&&V.onVnodeUnmounted)||Q)&&Re(()=>{_e&&Fe(_e,m,h),Q&&gn(h,null,m,"unmounted")},v)},vt=h=>{const{type:m,el:v,anchor:x,transition:T}=h;if(m===ue){bt(v,x);return}if(m===rt){b(h);return}const R=()=>{l(v),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(h.shapeFlag&1&&T&&!T.persisted){const{leave:V,delayLeave:$}=T,F=()=>V(v,R);$?$(h.el,R,F):F()}else R()},bt=(h,m)=>{let v;for(;h!==m;)v=f(h),l(h),h=v;l(m)},qs=(h,m,v)=>{const{bum:x,scope:T,update:R,subTree:V,um:$}=h;x&&Rt(x),T.stop(),R&&(R.active=!1,Le(V,h,m,v)),$&&Re($,m),Re(()=>{h.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Pe=(h,m,v,x=!1,T=!1,R=0)=>{for(let V=R;V<h.length;V++)Le(h[V],m,v,x,T)},C=h=>h.shapeFlag&6?C(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),U=(h,m,v)=>{h==null?m._vnode&&Le(m._vnode,null,null,!0):E(m._vnode||null,h,m,null,null,null,v),Qr(),il(),m._vnode=h},D={p:E,um:Le,m:dn,r:vt,mt:q,mc:j,pc:oe,pbc:M,n:C,o:e};let W,fe;return n&&([W,fe]=n(D)),{render:U,hydrate:W,createApp:ih(U,W)}}function Yn({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function cr(e,n,t=!1){const s=e.children,l=n.children;if(H(s)&&H(l))for(let a=0;a<s.length;a++){const r=s[a];let i=l[a];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=l[a]=$n(l[a]),i.el=r.el),t||cr(r,i)),i.type===ut&&(i.el=r.el)}}function mh(e){const n=e.slice(),t=[0];let s,l,a,r,i;const o=e.length;for(s=0;s<o;s++){const c=e[s];if(c!==0){if(l=t[t.length-1],e[l]<c){n[s]=l,t.push(s);continue}for(a=0,r=t.length-1;a<r;)i=a+r>>1,e[t[i]]<c?a=i+1:r=i;c<e[t[a]]&&(a>0&&(n[s]=t[a-1]),t[a]=s)}}for(a=t.length,r=t[a-1];a-- >0;)t[a]=r,r=n[r];return t}const gh=e=>e.__isTeleport,ls=e=>e&&(e.disabled||e.disabled===""),ci=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,_a=(e,n)=>{const t=e&&e.to;return X(t)?n?n(t):null:t},yh={__isTeleport:!0,process(e,n,t,s,l,a,r,i,o,c){const{mc:p,pc:u,pbc:f,o:{insert:d,querySelector:_,createText:E,createComment:w}}=c,y=ls(n.props);let{shapeFlag:g,children:k,dynamicChildren:b}=n;if(e==null){const S=n.el=E(""),L=n.anchor=E("");d(S,t,s),d(L,t,s);const I=n.target=_a(n.props,_),j=n.targetAnchor=E("");I&&(d(j,I),r=r||ci(I));const N=(M,O)=>{g&16&&p(k,M,O,l,a,r,i,o)};y?N(t,L):I&&N(I,j)}else{n.el=e.el;const S=n.anchor=e.anchor,L=n.target=e.target,I=n.targetAnchor=e.targetAnchor,j=ls(e.props),N=j?t:L,M=j?S:I;if(r=r||ci(L),b?(f(e.dynamicChildren,b,N,l,a,r,i),cr(e,n,!0)):o||u(e,n,N,M,l,a,r,i,!1),y)j||Ws(n,t,S,c,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const O=n.target=_a(n.props,_);O&&Ws(n,O,null,c,0)}else j&&Ws(n,L,I,c,1)}fc(n)},remove(e,n,t,s,{um:l,o:{remove:a}},r){const{shapeFlag:i,children:o,anchor:c,targetAnchor:p,target:u,props:f}=e;if(u&&a(p),(r||!ls(f))&&(a(c),i&16))for(let d=0;d<o.length;d++){const _=o[d];l(_,n,t,!0,!!_.dynamicChildren)}},move:Ws,hydrate:_h};function Ws(e,n,t,{o:{insert:s},m:l},a=2){a===0&&s(e.targetAnchor,n,t);const{el:r,anchor:i,shapeFlag:o,children:c,props:p}=e,u=a===2;if(u&&s(r,n,t),(!u||ls(p))&&o&16)for(let f=0;f<c.length;f++)l(c[f],n,t,2);u&&s(i,n,t)}function _h(e,n,t,s,l,a,{o:{nextSibling:r,parentNode:i,querySelector:o}},c){const p=n.target=_a(n.props,o);if(p){const u=p._lpa||p.firstChild;if(n.shapeFlag&16)if(ls(n.props))n.anchor=c(r(e),n,i(e),t,s,l,a),n.targetAnchor=u;else{n.anchor=r(e);let f=u;for(;f;)if(f=r(f),f&&f.nodeType===8&&f.data==="teleport anchor"){n.targetAnchor=f,p._lpa=n.targetAnchor&&r(n.targetAnchor);break}c(u,n,p,t,s,l,a)}fc(n)}return n.anchor&&r(n.anchor)}const vh=yh;function fc(e){const n=e.ctx;if(n&&n.ut){let t=e.children[0].el;for(;t!==e.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",n.uid),t=t.nextSibling;n.ut()}}const ue=Symbol.for("v-fgt"),ut=Symbol.for("v-txt"),Oe=Symbol.for("v-cmt"),rt=Symbol.for("v-stc"),as=[];let Be=null;function Z(e=!1){as.push(Be=e?null:[])}function hc(){as.pop(),Be=as[as.length-1]||null}let ft=1;function va(e){ft+=e}function dc(e){return e.dynamicChildren=ft>0?Be||St:null,hc(),ft>0&&Be&&Be.push(e),e}function le(e,n,t,s,l,a){return dc(z(e,n,t,s,l,a,!0))}function Un(e,n,t,s,l){return dc(pe(e,n,t,s,l,!0))}function Kn(e){return e?e.__v_isVNode===!0:!1}function pn(e,n){return e.type===n.type&&e.key===n.key}function bh(e){}const Fl="__vInternal",mc=({key:e})=>e!=null?e:null,el=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?X(e)||Ce(e)||Y(e)?{i:Te,r:e,k:n,f:!!t}:e:null);function z(e,n=null,t=null,s=0,l=null,a=e===ue?0:1,r=!1,i=!1){const o={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&mc(n),ref:n&&el(n),scopeId:Ol,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:s,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:Te};return i?(pr(o,t),a&128&&e.normalize(o)):t&&(o.shapeFlag|=X(t)?8:16),ft>0&&!r&&Be&&(o.patchFlag>0||a&6)&&o.patchFlag!==32&&Be.push(o),o}const pe=jh;function jh(e,n=null,t=null,s=0,l=null,a=!1){if((!e||e===Xo)&&(e=Oe),Kn(e)){const i=vn(e,n,!0);return t&&pr(i,t),ft>0&&!a&&Be&&(i.shapeFlag&6?Be[Be.indexOf(e)]=i:Be.push(i)),i.patchFlag|=-2,i}if(Th(e)&&(e=e.__vccOpts),n){n=gc(n);let{class:i,style:o}=n;i&&!X(i)&&(n.class=Cn(i)),ge(o)&&(za(o)&&!H(o)&&(o=ae({},o)),n.style=ot(o))}const r=X(e)?1:Lo(e)?128:gh(e)?64:ge(e)?4:Y(e)?2:0;return z(e,n,t,s,l,r,a,!0)}function gc(e){return e?za(e)||Fl in e?ae({},e):e:null}function vn(e,n,t=!1){const{props:s,ref:l,patchFlag:a,children:r}=e,i=n?yc(s||{},n):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&mc(i),ref:n&&n.ref?t&&l?H(l)?l.concat(el(n)):[l,el(n)]:el(n):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==ue?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&vn(e.ssContent),ssFallback:e.ssFallback&&vn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function vs(e=" ",n=0){return pe(ut,null,e,n)}function Eh(e,n){const t=pe(rt,null,e);return t.staticCount=n,t}function bs(e="",n=!1){return n?(Z(),Un(Oe,null,e)):pe(Oe,null,e)}function Ge(e){return e==null||typeof e=="boolean"?pe(Oe):H(e)?pe(ue,null,e.slice()):typeof e=="object"?$n(e):pe(ut,null,String(e))}function $n(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:vn(e)}function pr(e,n){let t=0;const{shapeFlag:s}=e;if(n==null)n=null;else if(H(n))t=16;else if(typeof n=="object")if(s&65){const l=n.default;l&&(l._c&&(l._d=!1),pr(e,l()),l._c&&(l._d=!0));return}else{t=32;const l=n._;!l&&!(Fl in n)?n._ctx=Te:l===3&&Te&&(Te.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else Y(n)?(n={default:n,_ctx:Te},t=32):(n=String(n),s&64?(t=16,n=[vs(n)]):t=8);e.children=n,e.shapeFlag|=t}function yc(...e){const n={};for(let t=0;t<e.length;t++){const s=e[t];for(const l in s)if(l==="class")n.class!==s.class&&(n.class=Cn([n.class,s.class]));else if(l==="style")n.style=ot([n.style,s.style]);else if(dt(l)){const a=n[l],r=s[l];r&&a!==r&&!(H(a)&&a.includes(r))&&(n[l]=a?[].concat(a,r):r)}else l!==""&&(n[l]=s[l])}return n}function Fe(e,n,t,s=null){Qe(e,n,7,[t,s])}const xh=sc();let wh=0;function _c(e,n,t){const s=e.type,l=(n?n.appContext:e.appContext)||xh,a={uid:wh++,vnode:e,type:s,parent:n,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ha(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ac(s,l),emitsOptions:qo(s,l),emit:null,emitted:null,propsDefaults:me,inheritAttrs:s.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=n?n.root:a,a.emit=ff.bind(null,a),e.ce&&e.ce(a),a}let we=null;const In=()=>we||Te;let ur,Et,pi="__VUE_INSTANCE_SETTERS__";(Et=oa()[pi])||(Et=oa()[pi]=[]),Et.push(e=>we=e),ur=e=>{Et.length>1?Et.forEach(n=>n(e)):Et[0](e)};const zn=e=>{ur(e),e.scope.on()},Fn=()=>{we&&we.scope.off(),ur(null)};function vc(e){return e.vnode.shapeFlag&4}let Mt=!1;function bc(e,n=!1){Mt=n;const{props:t,children:s}=e.vnode,l=vc(e);ch(e,t,l,n),fh(e,s);const a=l?kh(e,n):void 0;return Mt=!1,a}function kh(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=Wa(new Proxy(e.ctx,da));const{setup:s}=t;if(s){const l=e.setupContext=s.length>1?xc(e):null;zn(e),Ut();const a=wn(s,e,0,[e.props,l]);if(Kt(),Fn(),Ba(a)){if(a.then(Fn,Fn),n)return a.then(r=>{ba(e,r,n)}).catch(r=>{yt(r,e,0)});e.asyncDep=a}else ba(e,a,n)}else Ec(e,n)}function ba(e,n,t){Y(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:ge(n)&&(e.setupState=Ya(n)),Ec(e,t)}let pl,ja;function jc(e){pl=e,ja=n=>{n.render._rc&&(n.withProxy=new Proxy(n.ctx,Bf))}}const Ch=()=>!pl;function Ec(e,n,t){const s=e.type;if(!e.render){if(!n&&pl&&!s.render){const l=s.template||ir(e).template;if(l){const{isCustomElement:a,compilerOptions:r}=e.appContext.config,{delimiters:i,compilerOptions:o}=s,c=ae(ae({isCustomElement:a,delimiters:i},r),o);s.render=pl(l,c)}}e.render=s.render||qe,ja&&ja(e)}zn(e),Ut(),nh(e),Kt(),Fn()}function Sh(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(n,t){return He(e,"get","$attrs"),n[t]}}))}function xc(e){const n=t=>{e.exposed=t||{}};return{get attrs(){return Sh(e)},slots:e.slots,emit:e.emit,expose:n}}function Bl(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ya(Wa(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in ts)return ts[t](e)},has(n,t){return t in n||t in ts}}))}function Ea(e,n=!0){return Y(e)?e.displayName||e.name:e.name||n&&e.__name}function Th(e){return Y(e)&&"__vccOpts"in e}const Ye=(e,n)=>lf(e,n,Mt);function Ps(e,n,t){const s=arguments.length;return s===2?ge(n)&&!H(n)?Kn(n)?pe(e,null,[n]):pe(e,n):pe(e,null,n):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&Kn(t)&&(t=[t]),pe(e,n,t))}const wc=Symbol.for("v-scx"),kc=()=>un(wc);function Ih(){}function Rh(e,n,t,s){const l=t[s];if(l&&Cc(l,e))return l;const a=n();return a.memo=e.slice(),t[s]=a}function Cc(e,n){const t=e.memo;if(t.length!=n.length)return!1;for(let s=0;s<t.length;s++)if(Nt(t[s],n[s]))return!1;return ft>0&&Be&&Be.push(e),!0}const Sc="3.3.4",Ph={createComponentInstance:_c,setupComponent:bc,renderComponentRoot:Xs,setCurrentRenderingInstance:ms,isVNode:Kn,normalizeVNode:Ge},Ah=Ph,Nh=null,Oh=null,Mh="http://www.w3.org/2000/svg",Xn=typeof document!="undefined"?document:null,ui=Xn&&Xn.createElement("template"),$h={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,s)=>{const l=n?Xn.createElementNS(Mh,e):Xn.createElement(e,t?{is:t}:void 0);return e==="select"&&s&&s.multiple!=null&&l.setAttribute("multiple",s.multiple),l},createText:e=>Xn.createTextNode(e),createComment:e=>Xn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,s,l,a){const r=t?t.previousSibling:n.lastChild;if(l&&(l===a||l.nextSibling))for(;n.insertBefore(l.cloneNode(!0),t),!(l===a||!(l=l.nextSibling)););else{ui.innerHTML=s?`<svg>${e}</svg>`:e;const i=ui.content;if(s){const o=i.firstChild;for(;o.firstChild;)i.appendChild(o.firstChild);i.removeChild(o)}n.insertBefore(i,t)}return[r?r.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function qh(e,n,t){const s=e._vtc;s&&(n=(n?[n,...s]:[...s]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function Lh(e,n,t){const s=e.style,l=X(t);if(t&&!l){if(n&&!X(n))for(const a in n)t[a]==null&&xa(s,a,"");for(const a in t)xa(s,a,t[a])}else{const a=s.display;l?n!==t&&(s.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(s.display=a)}}const fi=/\s*!important$/;function xa(e,n,t){if(H(t))t.forEach(s=>xa(e,n,s));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const s=Fh(e,n);fi.test(t)?e.setProperty(Je(s),t.replace(fi,""),"important"):e[s]=t}}const hi=["Webkit","Moz","ms"],ea={};function Fh(e,n){const t=ea[n];if(t)return t;let s=ke(n);if(s!=="filter"&&s in e)return ea[n]=s;s=gt(s);for(let l=0;l<hi.length;l++){const a=hi[l]+s;if(a in e)return ea[n]=a}return n}const di="http://www.w3.org/1999/xlink";function Bh(e,n,t,s,l){if(s&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(di,n.slice(6,n.length)):e.setAttributeNS(di,n,t);else{const a=fu(n);t==null||a&&!fo(t)?e.removeAttribute(n):e.setAttribute(n,a?"":t)}}function Dh(e,n,t,s,l,a,r){if(n==="innerHTML"||n==="textContent"){s&&r(s,l,a),e[n]=t==null?"":t;return}const i=e.tagName;if(n==="value"&&i!=="PROGRESS"&&!i.includes("-")){e._value=t;const c=i==="OPTION"?e.getAttribute("value"):e.value,p=t==null?"":t;c!==p&&(e.value=p),t==null&&e.removeAttribute(n);return}let o=!1;if(t===""||t==null){const c=typeof e[n];c==="boolean"?t=fo(t):t==null&&c==="string"?(t="",o=!0):c==="number"&&(t=0,o=!0)}try{e[n]=t}catch{}o&&e.removeAttribute(n)}function xn(e,n,t,s){e.addEventListener(n,t,s)}function Hh(e,n,t,s){e.removeEventListener(n,t,s)}function Vh(e,n,t,s,l=null){const a=e._vei||(e._vei={}),r=a[n];if(s&&r)r.value=s;else{const[i,o]=Uh(n);if(s){const c=a[n]=Wh(s,l);xn(e,i,c,o)}else r&&(Hh(e,i,r,o),a[n]=void 0)}}const mi=/(?:Once|Passive|Capture)$/;function Uh(e){let n;if(mi.test(e)){n={};let s;for(;s=e.match(mi);)e=e.slice(0,e.length-s[0].length),n[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Je(e.slice(2)),n]}let na=0;const Kh=Promise.resolve(),zh=()=>na||(Kh.then(()=>na=0),na=Date.now());function Wh(e,n){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;Qe(Gh(s,t.value),n,5,[s])};return t.value=e,t.attached=zh(),t}function Gh(e,n){if(H(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(s=>l=>!l._stopped&&s&&s(l))}else return n}const gi=/^on[a-z]/,Jh=(e,n,t,s,l=!1,a,r,i,o)=>{n==="class"?qh(e,s,l):n==="style"?Lh(e,t,s):dt(n)?La(n)||Vh(e,n,t,s,r):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Yh(e,n,s,l))?Dh(e,n,s,a,r,i,o):(n==="true-value"?e._trueValue=s:n==="false-value"&&(e._falseValue=s),Bh(e,n,s,l))};function Yh(e,n,t,s){return s?!!(n==="innerHTML"||n==="textContent"||n in e&&gi.test(n)&&Y(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||gi.test(n)&&X(t)?!1:n in e}function Tc(e,n){const t=_t(e);class s extends Dl{constructor(a){super(t,a,n)}}return s.def=t,s}const Qh=e=>Tc(e,Uc),Zh=typeof HTMLElement!="undefined"?HTMLElement:class{};class Dl extends Zh{constructor(n,t={},s){super(),this._def=n,this._props=t,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Pl(()=>{this._connected||(Ca(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);new MutationObserver(s=>{for(const l of s)this._setAttr(l.attributeName)}).observe(this,{attributes:!0});const n=(s,l=!1)=>{const{props:a,styles:r}=s;let i;if(a&&!H(a))for(const o in a){const c=a[o];(c===Number||c&&c.type===Number)&&(o in this._props&&(this._props[o]=al(this._props[o])),(i||(i=Object.create(null)))[ke(o)]=!0)}this._numberProps=i,l&&this._resolveProps(s),this._applyStyles(r),this._update()},t=this._def.__asyncLoader;t?t().then(s=>n(s,!0)):n(this._def)}_resolveProps(n){const{props:t}=n,s=H(t)?t:Object.keys(t||{});for(const l of Object.keys(this))l[0]!=="_"&&s.includes(l)&&this._setProp(l,this[l],!0,!1);for(const l of s.map(ke))Object.defineProperty(this,l,{get(){return this._getProp(l)},set(a){this._setProp(l,a)}})}_setAttr(n){let t=this.getAttribute(n);const s=ke(n);this._numberProps&&this._numberProps[s]&&(t=al(t)),this._setProp(s,t,!1)}_getProp(n){return this._props[n]}_setProp(n,t,s=!0,l=!0){t!==this._props[n]&&(this._props[n]=t,l&&this._instance&&this._update(),s&&(t===!0?this.setAttribute(Je(n),""):typeof t=="string"||typeof t=="number"?this.setAttribute(Je(n),t+""):t||this.removeAttribute(Je(n))))}_update(){Ca(this._createVNode(),this.shadowRoot)}_createVNode(){const n=pe(this._def,ae({},this._props));return this._instance||(n.ce=t=>{this._instance=t,t.isCE=!0;const s=(a,r)=>{this.dispatchEvent(new CustomEvent(a,{detail:r}))};t.emit=(a,...r)=>{s(a,r),Je(a)!==a&&s(Je(a),r)};let l=this;for(;l=l&&(l.parentNode||l.host);)if(l instanceof Dl){t.parent=l._instance,t.provides=l._instance.provides;break}}),n}_applyStyles(n){n&&n.forEach(t=>{const s=document.createElement("style");s.textContent=t,this.shadowRoot.appendChild(s)})}}function Xh(e="$style"){{const n=In();if(!n)return me;const t=n.type.__cssModules;if(!t)return me;const s=t[e];return s||me}}function ed(e){const n=In();if(!n)return;const t=n.ut=(l=e(n.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${n.uid}"]`)).forEach(a=>ka(a,l))},s=()=>{const l=e(n.proxy);wa(n.subTree,l),t(l)};Bo(s),Xe(()=>{const l=new MutationObserver(s);l.observe(n.subTree.el.parentNode,{childList:!0}),Wt(()=>l.disconnect())})}function wa(e,n){if(e.shapeFlag&128){const t=e.suspense;e=t.activeBranch,t.pendingBranch&&!t.isHydrating&&t.effects.push(()=>{wa(t.activeBranch,n)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)ka(e.el,n);else if(e.type===ue)e.children.forEach(t=>wa(t,n));else if(e.type===rt){let{el:t,anchor:s}=e;for(;t&&(ka(t,n),t!==s);)t=t.nextSibling}}function ka(e,n){if(e.nodeType===1){const t=e.style;for(const s in n)t.setProperty(`--${s}`,n[s])}}const Nn="transition",Jt="animation",fr=(e,{slots:n})=>Ps(Ho,Rc(e),n);fr.displayName="Transition";const Ic={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},nd=fr.props=ae({},sr,Ic),Qn=(e,n=[])=>{H(e)?e.forEach(t=>t(...n)):e&&e(...n)},yi=e=>e?H(e)?e.some(n=>n.length>1):e.length>1:!1;function Rc(e){const n={};for(const P in e)P in Ic||(n[P]=e[P]);if(e.css===!1)return n;const{name:t="v",type:s,duration:l,enterFromClass:a=`${t}-enter-from`,enterActiveClass:r=`${t}-enter-active`,enterToClass:i=`${t}-enter-to`,appearFromClass:o=a,appearActiveClass:c=r,appearToClass:p=i,leaveFromClass:u=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=e,_=td(l),E=_&&_[0],w=_&&_[1],{onBeforeEnter:y,onEnter:g,onEnterCancelled:k,onLeave:b,onLeaveCancelled:S,onBeforeAppear:L=y,onAppear:I=g,onAppearCancelled:j=k}=n,N=(P,B,q)=>{Mn(P,B?p:i),Mn(P,B?c:r),q&&q()},M=(P,B)=>{P._isLeaving=!1,Mn(P,u),Mn(P,d),Mn(P,f),B&&B()},O=P=>(B,q)=>{const te=P?I:g,ee=()=>N(B,P,q);Qn(te,[B,ee]),_i(()=>{Mn(B,P?o:a),jn(B,P?p:i),yi(te)||vi(B,s,E,ee)})};return ae(n,{onBeforeEnter(P){Qn(y,[P]),jn(P,a),jn(P,r)},onBeforeAppear(P){Qn(L,[P]),jn(P,o),jn(P,c)},onEnter:O(!1),onAppear:O(!0),onLeave(P,B){P._isLeaving=!0;const q=()=>M(P,B);jn(P,u),Ac(),jn(P,f),_i(()=>{!P._isLeaving||(Mn(P,u),jn(P,d),yi(b)||vi(P,s,w,q))}),Qn(b,[P,q])},onEnterCancelled(P){N(P,!1),Qn(k,[P])},onAppearCancelled(P){N(P,!0),Qn(j,[P])},onLeaveCancelled(P){M(P),Qn(S,[P])}})}function td(e){if(e==null)return null;if(ge(e))return[ta(e.enter),ta(e.leave)];{const n=ta(e);return[n,n]}}function ta(e){return al(e)}function jn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(n)}function Mn(e,n){n.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const{_vtc:t}=e;t&&(t.delete(n),t.size||(e._vtc=void 0))}function _i(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let sd=0;function vi(e,n,t,s){const l=e._endId=++sd,a=()=>{l===e._endId&&s()};if(t)return setTimeout(a,t);const{type:r,timeout:i,propCount:o}=Pc(e,n);if(!r)return s();const c=r+"end";let p=0;const u=()=>{e.removeEventListener(c,f),a()},f=d=>{d.target===e&&++p>=o&&u()};setTimeout(()=>{p<o&&u()},i+1),e.addEventListener(c,f)}function Pc(e,n){const t=window.getComputedStyle(e),s=_=>(t[_]||"").split(", "),l=s(`${Nn}Delay`),a=s(`${Nn}Duration`),r=bi(l,a),i=s(`${Jt}Delay`),o=s(`${Jt}Duration`),c=bi(i,o);let p=null,u=0,f=0;n===Nn?r>0&&(p=Nn,u=r,f=a.length):n===Jt?c>0&&(p=Jt,u=c,f=o.length):(u=Math.max(r,c),p=u>0?r>c?Nn:Jt:null,f=p?p===Nn?a.length:o.length:0);const d=p===Nn&&/\b(transform|all)(,|$)/.test(s(`${Nn}Property`).toString());return{type:p,timeout:u,propCount:f,hasTransform:d}}function bi(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,s)=>ji(t)+ji(e[s])))}function ji(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Ac(){return document.body.offsetHeight}const Nc=new WeakMap,Oc=new WeakMap,Mc={name:"TransitionGroup",props:ae({},nd,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=In(),s=tr();let l,a;return ql(()=>{if(!l.length)return;const r=e.moveClass||`${e.name||"v"}-move`;if(!cd(l[0].el,t.vnode.el,r))return;l.forEach(rd),l.forEach(id);const i=l.filter(od);Ac(),i.forEach(o=>{const c=o.el,p=c.style;jn(c,r),p.transform=p.webkitTransform=p.transitionDuration="";const u=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",u),c._moveCb=null,Mn(c,r))};c.addEventListener("transitionend",u)})}),()=>{const r=re(e),i=Rc(r);let o=r.tag||ue;l=a,a=n.default?Ml(n.default()):[];for(let c=0;c<a.length;c++){const p=a[c];p.key!=null&&pt(p,Ot(p,i,s,t))}if(l)for(let c=0;c<l.length;c++){const p=l[c];pt(p,Ot(p,i,s,t)),Nc.set(p,p.el.getBoundingClientRect())}return pe(o,null,a)}}},ld=e=>delete e.mode;Mc.props;const ad=Mc;function rd(e){const n=e.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function id(e){Oc.set(e,e.el.getBoundingClientRect())}function od(e){const n=Nc.get(e),t=Oc.get(e),s=n.left-t.left,l=n.top-t.top;if(s||l){const a=e.el.style;return a.transform=a.webkitTransform=`translate(${s}px,${l}px)`,a.transitionDuration="0s",e}}function cd(e,n,t){const s=e.cloneNode();e._vtc&&e._vtc.forEach(r=>{r.split(/\s+/).forEach(i=>i&&s.classList.remove(i))}),t.split(/\s+/).forEach(r=>r&&s.classList.add(r)),s.style.display="none";const l=n.nodeType===1?n:n.parentNode;l.appendChild(s);const{hasTransform:a}=Pc(s);return l.removeChild(s),a}const Wn=e=>{const n=e.props["onUpdate:modelValue"]||!1;return H(n)?t=>Rt(n,t):n};function pd(e){e.target.composing=!0}function Ei(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const ul={created(e,{modifiers:{lazy:n,trim:t,number:s}},l){e._assign=Wn(l);const a=s||l.props&&l.props.type==="number";xn(e,n?"change":"input",r=>{if(r.target.composing)return;let i=e.value;t&&(i=i.trim()),a&&(i=ll(i)),e._assign(i)}),t&&xn(e,"change",()=>{e.value=e.value.trim()}),n||(xn(e,"compositionstart",pd),xn(e,"compositionend",Ei),xn(e,"change",Ei))},mounted(e,{value:n}){e.value=n==null?"":n},beforeUpdate(e,{value:n,modifiers:{lazy:t,trim:s,number:l}},a){if(e._assign=Wn(a),e.composing||document.activeElement===e&&e.type!=="range"&&(t||s&&e.value.trim()===n||(l||e.type==="number")&&ll(e.value)===n))return;const r=n==null?"":n;e.value!==r&&(e.value=r)}},hr={deep:!0,created(e,n,t){e._assign=Wn(t),xn(e,"change",()=>{const s=e._modelValue,l=$t(e),a=e.checked,r=e._assign;if(H(s)){const i=kl(s,l),o=i!==-1;if(a&&!o)r(s.concat(l));else if(!a&&o){const c=[...s];c.splice(i,1),r(c)}}else if(mt(s)){const i=new Set(s);a?i.add(l):i.delete(l),r(i)}else r(qc(e,a))})},mounted:xi,beforeUpdate(e,n,t){e._assign=Wn(t),xi(e,n,t)}};function xi(e,{value:n,oldValue:t},s){e._modelValue=n,H(n)?e.checked=kl(n,s.props.value)>-1:mt(n)?e.checked=n.has(s.props.value):n!==t&&(e.checked=Hn(n,qc(e,!0)))}const dr={created(e,{value:n},t){e.checked=Hn(n,t.props.value),e._assign=Wn(t),xn(e,"change",()=>{e._assign($t(e))})},beforeUpdate(e,{value:n,oldValue:t},s){e._assign=Wn(s),n!==t&&(e.checked=Hn(n,s.props.value))}},$c={deep:!0,created(e,{value:n,modifiers:{number:t}},s){const l=mt(n);xn(e,"change",()=>{const a=Array.prototype.filter.call(e.options,r=>r.selected).map(r=>t?ll($t(r)):$t(r));e._assign(e.multiple?l?new Set(a):a:a[0])}),e._assign=Wn(s)},mounted(e,{value:n}){wi(e,n)},beforeUpdate(e,n,t){e._assign=Wn(t)},updated(e,{value:n}){wi(e,n)}};function wi(e,n){const t=e.multiple;if(!(t&&!H(n)&&!mt(n))){for(let s=0,l=e.options.length;s<l;s++){const a=e.options[s],r=$t(a);if(t)H(n)?a.selected=kl(n,r)>-1:a.selected=n.has(r);else if(Hn($t(a),n)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function $t(e){return"_value"in e?e._value:e.value}function qc(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const Lc={created(e,n,t){Gs(e,n,t,null,"created")},mounted(e,n,t){Gs(e,n,t,null,"mounted")},beforeUpdate(e,n,t,s){Gs(e,n,t,s,"beforeUpdate")},updated(e,n,t,s){Gs(e,n,t,s,"updated")}};function Fc(e,n){switch(e){case"SELECT":return $c;case"TEXTAREA":return ul;default:switch(n){case"checkbox":return hr;case"radio":return dr;default:return ul}}}function Gs(e,n,t,s,l){const r=Fc(e.tagName,t.props&&t.props.type)[l];r&&r(e,n,t,s)}function ud(){ul.getSSRProps=({value:e})=>({value:e}),dr.getSSRProps=({value:e},n)=>{if(n.props&&Hn(n.props.value,e))return{checked:!0}},hr.getSSRProps=({value:e},n)=>{if(H(e)){if(n.props&&kl(e,n.props.value)>-1)return{checked:!0}}else if(mt(e)){if(n.props&&e.has(n.props.value))return{checked:!0}}else if(e)return{checked:!0}},Lc.getSSRProps=(e,n)=>{if(typeof n.type!="string")return;const t=Fc(n.type.toUpperCase(),n.props&&n.props.type);if(t.getSSRProps)return t.getSSRProps(e,n)}}const fd=["ctrl","shift","alt","meta"],hd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>fd.some(t=>e[`${t}Key`]&&!n.includes(t))},dd=(e,n)=>(t,...s)=>{for(let l=0;l<n.length;l++){const a=hd[n[l]];if(a&&a(t,n))return}return e(t,...s)},md={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},gd=(e,n)=>t=>{if(!("key"in t))return;const s=Je(t.key);if(n.some(l=>l===s||md[l]===s))return e(t)},Bc={beforeMount(e,{value:n},{transition:t}){e._vod=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):Yt(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:s}){!n!=!t&&(s?n?(s.beforeEnter(e),Yt(e,!0),s.enter(e)):s.leave(e,()=>{Yt(e,!1)}):Yt(e,n))},beforeUnmount(e,{value:n}){Yt(e,n)}};function Yt(e,n){e.style.display=n?e._vod:"none"}function yd(){Bc.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const Dc=ae({patchProp:Jh},$h);let rs,ki=!1;function Hc(){return rs||(rs=cc(Dc))}function Vc(){return rs=ki?rs:pc(Dc),ki=!0,rs}const Ca=(...e)=>{Hc().render(...e)},Uc=(...e)=>{Vc().hydrate(...e)},Kc=(...e)=>{const n=Hc().createApp(...e),{mount:t}=n;return n.mount=s=>{const l=zc(s);if(!l)return;const a=n._component;!Y(a)&&!a.render&&!a.template&&(a.template=l.innerHTML),l.innerHTML="";const r=t(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),r},n},_d=(...e)=>{const n=Vc().createApp(...e),{mount:t}=n;return n.mount=s=>{const l=zc(s);if(l)return t(l,!0,l instanceof SVGElement)},n};function zc(e){return X(e)?document.querySelector(e):e}let Ci=!1;const vd=()=>{Ci||(Ci=!0,ud(),yd())};var bd=Object.freeze(Object.defineProperty({__proto__:null,Transition:fr,TransitionGroup:ad,VueElement:Dl,createApp:Kc,createSSRApp:_d,defineCustomElement:Tc,defineSSRCustomElement:Qh,hydrate:Uc,initDirectivesForSSR:vd,render:Ca,useCssModule:Xh,useCssVars:ed,vModelCheckbox:hr,vModelDynamic:Lc,vModelRadio:dr,vModelSelect:$c,vModelText:ul,vShow:Bc,withKeys:gd,withModifiers:dd,EffectScope:Ha,ReactiveEffect:Ts,customRef:Zu,effect:_u,effectScope:du,getCurrentScope:go,isProxy:za,isReactive:lt,isReadonly:ct,isRef:Ce,isShallow:us,markRaw:Wa,onScopeDispose:mu,proxyRefs:Ya,reactive:zt,readonly:Ka,ref:ve,shallowReactive:Io,shallowReadonly:zu,shallowRef:Ro,stop:vu,toRaw:re,toRef:tf,toRefs:Xu,toValue:Ju,triggerRef:Gu,unref:an,camelize:ke,capitalize:gt,normalizeClass:Cn,normalizeProps:lu,normalizeStyle:ot,toDisplayString:Ie,toHandlerKey:It,BaseTransition:Ho,BaseTransitionPropsValidators:sr,Comment:Oe,Fragment:ue,KeepAlive:Af,Static:rt,Suspense:vf,Teleport:vh,Text:ut,assertNumber:rf,callWithAsyncErrorHandling:Qe,callWithErrorHandling:wn,cloneVNode:vn,compatUtils:Oh,computed:Ye,createBlock:Un,createCommentVNode:bs,createElementBlock:le,createElementVNode:z,createHydrationRenderer:pc,createPropsRestProxy:Xf,createRenderer:cc,createSlots:qf,createStaticVNode:Eh,createTextVNode:vs,createVNode:pe,defineAsyncComponent:Rf,defineComponent:_t,defineEmits:Hf,defineExpose:Vf,defineModel:zf,defineOptions:Uf,defineProps:Df,defineSlots:Kf,get devtools(){return wt},getCurrentInstance:In,getTransitionRawChildren:Ml,guardReactiveProps:gc,h:Ps,handleError:yt,hasInjectionContext:oh,initCustomFormatter:Ih,inject:un,isMemoSame:Cc,isRuntimeOnly:Ch,isVNode:Kn,mergeDefaults:Qf,mergeModels:Zf,mergeProps:yc,nextTick:Pl,onActivated:Uo,onBeforeMount:Wo,onBeforeUnmount:Ll,onBeforeUpdate:Go,onDeactivated:Ko,onErrorCaptured:Zo,onMounted:Xe,onRenderTracked:Qo,onRenderTriggered:Yo,onServerPrefetch:Jo,onUnmounted:Wt,onUpdated:ql,openBlock:Z,popScopeId:Jn,provide:ss,pushScopeId:Gn,queuePostFlushCb:Za,registerRuntimeCompiler:jc,renderList:_n,renderSlot:Lf,resolveComponent:ar,resolveDirective:$f,resolveDynamicComponent:Mf,resolveFilter:Nh,resolveTransitionHooks:Ot,setBlockTracking:va,setDevtoolsHook:$o,setTransitionHooks:pt,ssrContextKey:wc,ssrUtils:Ah,toHandlers:Ff,transformVNodeArgs:bh,useAttrs:Jf,useModel:Yf,useSSRContext:kc,useSlots:Gf,useTransitionState:tr,version:Sc,warn:af,watch:kn,watchEffect:kf,watchPostEffect:Bo,watchSyncEffect:Cf,withAsyncContext:eh,withCtx:Xa,withDefaults:Wf,withDirectives:Tf,withMemo:Rh,withScopeId:hf},Symbol.toStringTag,{value:"Module"}));function mr(e){throw e}function Wc(e){}function be(e,n,t,s){const l=e,a=new SyntaxError(String(l));return a.code=e,a.loc=n,a}const js=Symbol(""),is=Symbol(""),gr=Symbol(""),fl=Symbol(""),Gc=Symbol(""),ht=Symbol(""),Jc=Symbol(""),Yc=Symbol(""),yr=Symbol(""),_r=Symbol(""),As=Symbol(""),vr=Symbol(""),Qc=Symbol(""),br=Symbol(""),hl=Symbol(""),jr=Symbol(""),Er=Symbol(""),xr=Symbol(""),wr=Symbol(""),Zc=Symbol(""),Xc=Symbol(""),Hl=Symbol(""),dl=Symbol(""),kr=Symbol(""),Cr=Symbol(""),Es=Symbol(""),Ns=Symbol(""),Sr=Symbol(""),Sa=Symbol(""),jd=Symbol(""),Ta=Symbol(""),ml=Symbol(""),Ed=Symbol(""),xd=Symbol(""),Tr=Symbol(""),wd=Symbol(""),kd=Symbol(""),Ir=Symbol(""),ep=Symbol(""),qt={[js]:"Fragment",[is]:"Teleport",[gr]:"Suspense",[fl]:"KeepAlive",[Gc]:"BaseTransition",[ht]:"openBlock",[Jc]:"createBlock",[Yc]:"createElementBlock",[yr]:"createVNode",[_r]:"createElementVNode",[As]:"createCommentVNode",[vr]:"createTextVNode",[Qc]:"createStaticVNode",[br]:"resolveComponent",[hl]:"resolveDynamicComponent",[jr]:"resolveDirective",[Er]:"resolveFilter",[xr]:"withDirectives",[wr]:"renderList",[Zc]:"renderSlot",[Xc]:"createSlots",[Hl]:"toDisplayString",[dl]:"mergeProps",[kr]:"normalizeClass",[Cr]:"normalizeStyle",[Es]:"normalizeProps",[Ns]:"guardReactiveProps",[Sr]:"toHandlers",[Sa]:"camelize",[jd]:"capitalize",[Ta]:"toHandlerKey",[ml]:"setBlockTracking",[Ed]:"pushScopeId",[xd]:"popScopeId",[Tr]:"withCtx",[wd]:"unref",[kd]:"isRef",[Ir]:"withMemo",[ep]:"isMemoSame"};function Cd(e){Object.getOwnPropertySymbols(e).forEach(n=>{qt[n]=e[n]})}const en={source:"",start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function Sd(e,n=en){return{type:0,children:e,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:n}}function xs(e,n,t,s,l,a,r,i=!1,o=!1,c=!1,p=en){return e&&(i?(e.helper(ht),e.helper(Bt(e.inSSR,c))):e.helper(Ft(e.inSSR,c)),r&&e.helper(xr)),{type:13,tag:n,props:t,children:s,patchFlag:l,dynamicProps:a,directives:r,isBlock:i,disableTracking:o,isComponent:c,loc:p}}function Os(e,n=en){return{type:17,loc:n,elements:e}}function sn(e,n=en){return{type:15,loc:n,properties:e}}function je(e,n){return{type:16,loc:en,key:X(e)?ne(e,!0):e,value:n}}function ne(e,n=!1,t=en,s=0){return{type:4,loc:t,content:e,isStatic:n,constType:n?3:s}}function fn(e,n=en){return{type:8,loc:n,children:e}}function xe(e,n=[],t=en){return{type:14,loc:t,callee:e,arguments:n}}function Lt(e,n=void 0,t=!1,s=!1,l=en){return{type:18,params:e,returns:n,newline:t,isSlot:s,loc:l}}function Ia(e,n,t,s=!0){return{type:19,test:e,consequent:n,alternate:t,newline:s,loc:en}}function Td(e,n,t=!1){return{type:20,index:e,value:n,isVNode:t,loc:en}}function Id(e){return{type:21,body:e,loc:en}}function Ft(e,n){return e||n?yr:_r}function Bt(e,n){return e||n?Jc:Yc}function Rr(e,{helper:n,removeHelper:t,inSSR:s}){e.isBlock||(e.isBlock=!0,t(Ft(s,e.isComponent)),n(ht),n(Bt(s,e.isComponent)))}const De=e=>e.type===4&&e.isStatic,Ct=(e,n)=>e===n||e===Je(n);function np(e){if(Ct(e,"Teleport"))return is;if(Ct(e,"Suspense"))return gr;if(Ct(e,"KeepAlive"))return fl;if(Ct(e,"BaseTransition"))return Gc}const Rd=/^\d|[^\$\w]/,Pr=e=>!Rd.test(e),Pd=/[A-Za-z_$\xA0-\uFFFF]/,Ad=/[\.\?\w$\xA0-\uFFFF]/,Nd=/\s+[.[]\s*|\s*[.[]\s+/g,Od=e=>{e=e.trim().replace(Nd,r=>r.trim());let n=0,t=[],s=0,l=0,a=null;for(let r=0;r<e.length;r++){const i=e.charAt(r);switch(n){case 0:if(i==="[")t.push(n),n=1,s++;else if(i==="(")t.push(n),n=2,l++;else if(!(r===0?Pd:Ad).test(i))return!1;break;case 1:i==="'"||i==='"'||i==="`"?(t.push(n),n=3,a=i):i==="["?s++:i==="]"&&(--s||(n=t.pop()));break;case 2:if(i==="'"||i==='"'||i==="`")t.push(n),n=3,a=i;else if(i==="(")l++;else if(i===")"){if(r===e.length-1)return!1;--l||(n=t.pop())}break;case 3:i===a&&(n=t.pop(),a=null);break}}return!s&&!l},tp=Od;function sp(e,n,t){const l={source:e.source.slice(n,n+t),start:gl(e.start,e.source,n),end:e.end};return t!=null&&(l.end=gl(e.start,e.source,n+t)),l}function gl(e,n,t=n.length){return yl(ae({},e),n,t)}function yl(e,n,t=n.length){let s=0,l=-1;for(let a=0;a<t;a++)n.charCodeAt(a)===10&&(s++,l=a);return e.offset+=t,e.line+=s,e.column=l===-1?e.column+t:t-l,e}function tn(e,n,t=!1){for(let s=0;s<e.props.length;s++){const l=e.props[s];if(l.type===7&&(t||l.exp)&&(X(n)?l.name===n:n.test(l.name)))return l}}function Vl(e,n,t=!1,s=!1){for(let l=0;l<e.props.length;l++){const a=e.props[l];if(a.type===6){if(t)continue;if(a.name===n&&(a.value||s))return a}else if(a.name==="bind"&&(a.exp||s)&&nt(a.arg,n))return a}}function nt(e,n){return!!(e&&De(e)&&e.content===n)}function Md(e){return e.props.some(n=>n.type===7&&n.name==="bind"&&(!n.arg||n.arg.type!==4||!n.arg.isStatic))}function sa(e){return e.type===5||e.type===2}function $d(e){return e.type===7&&e.name==="slot"}function _l(e){return e.type===1&&e.tagType===3}function vl(e){return e.type===1&&e.tagType===2}const qd=new Set([Es,Ns]);function lp(e,n=[]){if(e&&!X(e)&&e.type===14){const t=e.callee;if(!X(t)&&qd.has(t))return lp(e.arguments[0],n.concat(e))}return[e,n]}function bl(e,n,t){let s,l=e.type===13?e.props:e.arguments[2],a=[],r;if(l&&!X(l)&&l.type===14){const i=lp(l);l=i[0],a=i[1],r=a[a.length-1]}if(l==null||X(l))s=sn([n]);else if(l.type===14){const i=l.arguments[0];!X(i)&&i.type===15?Si(n,i)||i.properties.unshift(n):l.callee===Sr?s=xe(t.helper(dl),[sn([n]),l]):l.arguments.unshift(sn([n])),!s&&(s=l)}else l.type===15?(Si(n,l)||l.properties.unshift(n),s=l):(s=xe(t.helper(dl),[sn([n]),l]),r&&r.callee===Ns&&(r=a[a.length-2]));e.type===13?r?r.arguments[0]=s:e.props=s:r?r.arguments[0]=s:e.arguments[2]=s}function Si(e,n){let t=!1;if(e.key.type===4){const s=e.key.content;t=n.properties.some(l=>l.key.type===4&&l.key.content===s)}return t}function ws(e,n){return`_${n}_${e.replace(/[^\w]/g,(t,s)=>t==="-"?"_":e.charCodeAt(s).toString())}`}function Ld(e){return e.type===14&&e.callee===Ir?e.arguments[1].returns:e}function Ti(e,n){const t=n.options?n.options.compatConfig:n.compatConfig,s=t&&t[e];return e==="MODE"?s||3:s}function it(e,n){const t=Ti("MODE",n),s=Ti(e,n);return t===3?s===!0:s!==!1}function ks(e,n,t,...s){return it(e,n)}const Fd=/&(gt|lt|amp|apos|quot);/g,Bd={gt:">",lt:"<",amp:"&",apos:"'",quot:'"'},Ii={delimiters:["{{","}}"],getNamespace:()=>0,getTextMode:()=>0,isVoidTag:Zs,isPreTag:Zs,isCustomElement:Zs,decodeEntities:e=>e.replace(Fd,(n,t)=>Bd[t]),onError:mr,onWarn:Wc,comments:!1};function Dd(e,n={}){const t=Hd(e,n),s=Ze(t);return Sd(Ar(t,0,[]),rn(t,s))}function Hd(e,n){const t=ae({},Ii);let s;for(s in n)t[s]=n[s]===void 0?Ii[s]:n[s];return{options:t,column:1,line:1,offset:0,originalSource:e,source:e,inPre:!1,inVPre:!1,onWarn:t.onWarn}}function Ar(e,n,t){const s=Ul(t),l=s?s.ns:0,a=[];for(;!Qd(e,n,t);){const i=e.source;let o;if(n===0||n===1){if(!e.inVPre&&Ne(i,e.options.delimiters[0]))o=Jd(e,n);else if(n===0&&i[0]==="<")if(i.length===1)de(e,5,1);else if(i[1]==="!")Ne(i,"<!--")?o=Ud(e):Ne(i,"<!DOCTYPE")?o=Qt(e):Ne(i,"<![CDATA[")?l!==0?o=Vd(e,t):(de(e,1),o=Qt(e)):(de(e,11),o=Qt(e));else if(i[1]==="/")if(i.length===2)de(e,5,2);else if(i[2]===">"){de(e,14,2),Se(e,3);continue}else if(/[a-z]/i.test(i[2])){de(e,23),Ra(e,jl.End,s);continue}else de(e,12,2),o=Qt(e);else/[a-z]/i.test(i[1])?(o=Kd(e,t),it("COMPILER_NATIVE_TEMPLATE",e)&&o&&o.tag==="template"&&!o.props.some(c=>c.type===7&&ap(c.name))&&(o=o.children)):i[1]==="?"?(de(e,21,1),o=Qt(e)):de(e,12,1)}if(o||(o=Yd(e,n)),H(o))for(let c=0;c<o.length;c++)Ri(a,o[c]);else Ri(a,o)}let r=!1;if(n!==2&&n!==1){const i=e.options.whitespace!=="preserve";for(let o=0;o<a.length;o++){const c=a[o];if(c.type===2)if(e.inPre)c.content=c.content.replace(/\r\n/g,`
`);else if(/[^\t\r\n\f ]/.test(c.content))i&&(c.content=c.content.replace(/[\t\r\n\f ]+/g," "));else{const p=a[o-1],u=a[o+1];!p||!u||i&&(p.type===3&&u.type===3||p.type===3&&u.type===1||p.type===1&&u.type===3||p.type===1&&u.type===1&&/[\r\n]/.test(c.content))?(r=!0,a[o]=null):c.content=" "}else c.type===3&&!e.options.comments&&(r=!0,a[o]=null)}if(e.inPre&&s&&e.options.isPreTag(s.tag)){const o=a[0];o&&o.type===2&&(o.content=o.content.replace(/^\r?\n/,""))}}return r?a.filter(Boolean):a}function Ri(e,n){if(n.type===2){const t=Ul(e);if(t&&t.type===2&&t.loc.end.offset===n.loc.start.offset){t.content+=n.content,t.loc.end=n.loc.end,t.loc.source+=n.loc.source;return}}e.push(n)}function Vd(e,n){Se(e,9);const t=Ar(e,3,n);return e.source.length===0?de(e,6):Se(e,3),t}function Ud(e){const n=Ze(e);let t;const s=/--(\!)?>/.exec(e.source);if(!s)t=e.source.slice(4),Se(e,e.source.length),de(e,7);else{s.index<=3&&de(e,0),s[1]&&de(e,10),t=e.source.slice(4,s.index);const l=e.source.slice(0,s.index);let a=1,r=0;for(;(r=l.indexOf("<!--",a))!==-1;)Se(e,r-a+1),r+4<l.length&&de(e,16),a=r+1;Se(e,s.index+s[0].length-a+1)}return{type:3,content:t,loc:rn(e,n)}}function Qt(e){const n=Ze(e),t=e.source[1]==="?"?1:2;let s;const l=e.source.indexOf(">");return l===-1?(s=e.source.slice(t),Se(e,e.source.length)):(s=e.source.slice(t,l),Se(e,l+1)),{type:3,content:s,loc:rn(e,n)}}function Kd(e,n){const t=e.inPre,s=e.inVPre,l=Ul(n),a=Ra(e,jl.Start,l),r=e.inPre&&!t,i=e.inVPre&&!s;if(a.isSelfClosing||e.options.isVoidTag(a.tag))return r&&(e.inPre=!1),i&&(e.inVPre=!1),a;n.push(a);const o=e.options.getTextMode(a,l),c=Ar(e,o,n);n.pop();{const p=a.props.find(u=>u.type===6&&u.name==="inline-template");if(p&&ks("COMPILER_INLINE_TEMPLATE",e,p.loc)){const u=rn(e,a.loc.end);p.value={type:2,content:u.source,loc:u}}}if(a.children=c,Pa(e.source,a.tag))Ra(e,jl.End,l);else if(de(e,24,0,a.loc.start),e.source.length===0&&a.tag.toLowerCase()==="script"){const p=c[0];p&&Ne(p.loc.source,"<!--")&&de(e,8)}return a.loc=rn(e,a.loc.start),r&&(e.inPre=!1),i&&(e.inVPre=!1),a}var jl=(e=>(e[e.Start=0]="Start",e[e.End=1]="End",e))(jl||{});const ap=Ve("if,else,else-if,for,slot");function Ra(e,n,t){const s=Ze(e),l=/^<\/?([a-z][^\t\r\n\f />]*)/i.exec(e.source),a=l[1],r=e.options.getNamespace(a,t);Se(e,l[0].length),Cs(e);const i=Ze(e),o=e.source;e.options.isPreTag(a)&&(e.inPre=!0);let c=Pi(e,n);n===0&&!e.inVPre&&c.some(f=>f.type===7&&f.name==="pre")&&(e.inVPre=!0,ae(e,i),e.source=o,c=Pi(e,n).filter(f=>f.name!=="v-pre"));let p=!1;if(e.source.length===0?de(e,9):(p=Ne(e.source,"/>"),n===1&&p&&de(e,4),Se(e,p?2:1)),n===1)return;let u=0;return e.inVPre||(a==="slot"?u=2:a==="template"?c.some(f=>f.type===7&&ap(f.name))&&(u=3):zd(a,c,e)&&(u=1)),{type:1,ns:r,tag:a,tagType:u,props:c,isSelfClosing:p,children:[],loc:rn(e,s),codegenNode:void 0}}function zd(e,n,t){const s=t.options;if(s.isCustomElement(e))return!1;if(e==="component"||/^[A-Z]/.test(e)||np(e)||s.isBuiltInComponent&&s.isBuiltInComponent(e)||s.isNativeTag&&!s.isNativeTag(e))return!0;for(let l=0;l<n.length;l++){const a=n[l];if(a.type===6){if(a.name==="is"&&a.value){if(a.value.content.startsWith("vue:"))return!0;if(ks("COMPILER_IS_ON_ELEMENT",t,a.loc))return!0}}else{if(a.name==="is")return!0;if(a.name==="bind"&&nt(a.arg,"is")&&!0&&ks("COMPILER_IS_ON_ELEMENT",t,a.loc))return!0}}}function Pi(e,n){const t=[],s=new Set;for(;e.source.length>0&&!Ne(e.source,">")&&!Ne(e.source,"/>");){if(Ne(e.source,"/")){de(e,22),Se(e,1),Cs(e);continue}n===1&&de(e,3);const l=Wd(e,s);l.type===6&&l.value&&l.name==="class"&&(l.value.content=l.value.content.replace(/\s+/g," ").trim()),n===0&&t.push(l),/^[^\t\r\n\f />]/.test(e.source)&&de(e,15),Cs(e)}return t}function Wd(e,n){var t;const s=Ze(e),a=/^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(e.source)[0];n.has(a)&&de(e,2),n.add(a),a[0]==="="&&de(e,19);{const o=/["'<]/g;let c;for(;c=o.exec(a);)de(e,17,c.index)}Se(e,a.length);let r;/^[\t\r\n\f ]*=/.test(e.source)&&(Cs(e),Se(e,1),Cs(e),r=Gd(e),r||de(e,13));const i=rn(e,s);if(!e.inVPre&&/^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(a)){const o=/(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(a);let c=Ne(a,"."),p=o[1]||(c||Ne(a,":")?"bind":Ne(a,"@")?"on":"slot"),u;if(o[2]){const d=p==="slot",_=a.lastIndexOf(o[2],a.length-(((t=o[3])==null?void 0:t.length)||0)),E=rn(e,Ai(e,s,_),Ai(e,s,_+o[2].length+(d&&o[3]||"").length));let w=o[2],y=!0;w.startsWith("[")?(y=!1,w.endsWith("]")?w=w.slice(1,w.length-1):(de(e,27),w=w.slice(1))):d&&(w+=o[3]||""),u={type:4,content:w,isStatic:y,constType:y?3:0,loc:E}}if(r&&r.isQuoted){const d=r.loc;d.start.offset++,d.start.column++,d.end=gl(d.start,r.content),d.source=d.source.slice(1,-1)}const f=o[3]?o[3].slice(1).split("."):[];return c&&f.push("prop"),p==="bind"&&u&&f.includes("sync")&&ks("COMPILER_V_BIND_SYNC",e,i,u.loc.source)&&(p="model",f.splice(f.indexOf("sync"),1)),{type:7,name:p,exp:r&&{type:4,content:r.content,isStatic:!1,constType:0,loc:r.loc},arg:u,modifiers:f,loc:i}}return!e.inVPre&&Ne(a,"v-")&&de(e,26),{type:6,name:a,value:r&&{type:2,content:r.content,loc:r.loc},loc:i}}function Gd(e){const n=Ze(e);let t;const s=e.source[0],l=s==='"'||s==="'";if(l){Se(e,1);const a=e.source.indexOf(s);a===-1?t=os(e,e.source.length,4):(t=os(e,a,4),Se(e,1))}else{const a=/^[^\t\r\n\f >]+/.exec(e.source);if(!a)return;const r=/["'<=`]/g;let i;for(;i=r.exec(a[0]);)de(e,18,i.index);t=os(e,a[0].length,4)}return{content:t,isQuoted:l,loc:rn(e,n)}}function Jd(e,n){const[t,s]=e.options.delimiters,l=e.source.indexOf(s,t.length);if(l===-1){de(e,25);return}const a=Ze(e);Se(e,t.length);const r=Ze(e),i=Ze(e),o=l-t.length,c=e.source.slice(0,o),p=os(e,o,n),u=p.trim(),f=p.indexOf(u);f>0&&yl(r,c,f);const d=o-(p.length-u.length-f);return yl(i,c,d),Se(e,s.length),{type:5,content:{type:4,isStatic:!1,constType:0,content:u,loc:rn(e,r,i)},loc:rn(e,a)}}function Yd(e,n){const t=n===3?["]]>"]:["<",e.options.delimiters[0]];let s=e.source.length;for(let r=0;r<t.length;r++){const i=e.source.indexOf(t[r],1);i!==-1&&s>i&&(s=i)}const l=Ze(e),a=os(e,s,n);return{type:2,content:a,loc:rn(e,l)}}function os(e,n,t){const s=e.source.slice(0,n);return Se(e,n),t===2||t===3||!s.includes("&")?s:e.options.decodeEntities(s,t===4)}function Ze(e){const{column:n,line:t,offset:s}=e;return{column:n,line:t,offset:s}}function rn(e,n,t){return t=t||Ze(e),{start:n,end:t,source:e.originalSource.slice(n.offset,t.offset)}}function Ul(e){return e[e.length-1]}function Ne(e,n){return e.startsWith(n)}function Se(e,n){const{source:t}=e;yl(e,t,n),e.source=t.slice(n)}function Cs(e){const n=/^[\t\r\n\f ]+/.exec(e.source);n&&Se(e,n[0].length)}function Ai(e,n,t){return gl(n,e.originalSource.slice(n.offset,t),t)}function de(e,n,t,s=Ze(e)){t&&(s.offset+=t,s.column+=t),e.options.onError(be(n,{start:s,end:s,source:""}))}function Qd(e,n,t){const s=e.source;switch(n){case 0:if(Ne(s,"</")){for(let l=t.length-1;l>=0;--l)if(Pa(s,t[l].tag))return!0}break;case 1:case 2:{const l=Ul(t);if(l&&Pa(s,l.tag))return!0;break}case 3:if(Ne(s,"]]>"))return!0;break}return!s}function Pa(e,n){return Ne(e,"</")&&e.slice(2,2+n.length).toLowerCase()===n.toLowerCase()&&/[\t\r\n\f />]/.test(e[2+n.length]||">")}function Zd(e,n){nl(e,n,rp(e,e.children[0]))}function rp(e,n){const{children:t}=e;return t.length===1&&n.type===1&&!vl(n)}function nl(e,n,t=!1){const{children:s}=e,l=s.length;let a=0;for(let r=0;r<s.length;r++){const i=s[r];if(i.type===1&&i.tagType===0){const o=t?0:ln(i,n);if(o>0){if(o>=2){i.codegenNode.patchFlag=-1+"",i.codegenNode=n.hoist(i.codegenNode),a++;continue}}else{const c=i.codegenNode;if(c.type===13){const p=pp(c);if((!p||p===512||p===1)&&op(i,n)>=2){const u=cp(i);u&&(c.props=n.hoist(u))}c.dynamicProps&&(c.dynamicProps=n.hoist(c.dynamicProps))}}}if(i.type===1){const o=i.tagType===1;o&&n.scopes.vSlot++,nl(i,n),o&&n.scopes.vSlot--}else if(i.type===11)nl(i,n,i.children.length===1);else if(i.type===9)for(let o=0;o<i.branches.length;o++)nl(i.branches[o],n,i.branches[o].children.length===1)}a&&n.transformHoist&&n.transformHoist(s,n,e),a&&a===l&&e.type===1&&e.tagType===0&&e.codegenNode&&e.codegenNode.type===13&&H(e.codegenNode.children)&&(e.codegenNode.children=n.hoist(Os(e.codegenNode.children)))}function ln(e,n){const{constantCache:t}=n;switch(e.type){case 1:if(e.tagType!==0)return 0;const s=t.get(e);if(s!==void 0)return s;const l=e.codegenNode;if(l.type!==13||l.isBlock&&e.tag!=="svg"&&e.tag!=="foreignObject")return 0;if(pp(l))return t.set(e,0),0;{let i=3;const o=op(e,n);if(o===0)return t.set(e,0),0;o<i&&(i=o);for(let c=0;c<e.children.length;c++){const p=ln(e.children[c],n);if(p===0)return t.set(e,0),0;p<i&&(i=p)}if(i>1)for(let c=0;c<e.props.length;c++){const p=e.props[c];if(p.type===7&&p.name==="bind"&&p.exp){const u=ln(p.exp,n);if(u===0)return t.set(e,0),0;u<i&&(i=u)}}if(l.isBlock){for(let c=0;c<e.props.length;c++)if(e.props[c].type===7)return t.set(e,0),0;n.removeHelper(ht),n.removeHelper(Bt(n.inSSR,l.isComponent)),l.isBlock=!1,n.helper(Ft(n.inSSR,l.isComponent))}return t.set(e,i),i}case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return ln(e.content,n);case 4:return e.constType;case 8:let r=3;for(let i=0;i<e.children.length;i++){const o=e.children[i];if(X(o)||Dn(o))continue;const c=ln(o,n);if(c===0)return 0;c<r&&(r=c)}return r;default:return 0}}const Xd=new Set([kr,Cr,Es,Ns]);function ip(e,n){if(e.type===14&&!X(e.callee)&&Xd.has(e.callee)){const t=e.arguments[0];if(t.type===4)return ln(t,n);if(t.type===14)return ip(t,n)}return 0}function op(e,n){let t=3;const s=cp(e);if(s&&s.type===15){const{properties:l}=s;for(let a=0;a<l.length;a++){const{key:r,value:i}=l[a],o=ln(r,n);if(o===0)return o;o<t&&(t=o);let c;if(i.type===4?c=ln(i,n):i.type===14?c=ip(i,n):c=0,c===0)return c;c<t&&(t=c)}}return t}function cp(e){const n=e.codegenNode;if(n.type===13)return n.props}function pp(e){const n=e.patchFlag;return n?parseInt(n,10):void 0}function em(e,{filename:n="",prefixIdentifiers:t=!1,hoistStatic:s=!1,cacheHandlers:l=!1,nodeTransforms:a=[],directiveTransforms:r={},transformHoist:i=null,isBuiltInComponent:o=qe,isCustomElement:c=qe,expressionPlugins:p=[],scopeId:u=null,slotted:f=!0,ssr:d=!1,inSSR:_=!1,ssrCssVars:E="",bindingMetadata:w=me,inline:y=!1,isTS:g=!1,onError:k=mr,onWarn:b=Wc,compatConfig:S}){const L=n.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),I={selfName:L&&gt(ke(L[1])),prefixIdentifiers:t,hoistStatic:s,cacheHandlers:l,nodeTransforms:a,directiveTransforms:r,transformHoist:i,isBuiltInComponent:o,isCustomElement:c,expressionPlugins:p,scopeId:u,slotted:f,ssr:d,inSSR:_,ssrCssVars:E,bindingMetadata:w,inline:y,isTS:g,onError:k,onWarn:b,compatConfig:S,root:e,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],constantCache:new Map,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,currentNode:e,childIndex:0,inVOnce:!1,helper(j){const N=I.helpers.get(j)||0;return I.helpers.set(j,N+1),j},removeHelper(j){const N=I.helpers.get(j);if(N){const M=N-1;M?I.helpers.set(j,M):I.helpers.delete(j)}},helperString(j){return`_${qt[I.helper(j)]}`},replaceNode(j){I.parent.children[I.childIndex]=I.currentNode=j},removeNode(j){const N=I.parent.children,M=j?N.indexOf(j):I.currentNode?I.childIndex:-1;!j||j===I.currentNode?(I.currentNode=null,I.onNodeRemoved()):I.childIndex>M&&(I.childIndex--,I.onNodeRemoved()),I.parent.children.splice(M,1)},onNodeRemoved:()=>{},addIdentifiers(j){},removeIdentifiers(j){},hoist(j){X(j)&&(j=ne(j)),I.hoists.push(j);const N=ne(`_hoisted_${I.hoists.length}`,!1,j.loc,2);return N.hoisted=j,N},cache(j,N=!1){return Td(I.cached++,j,N)}};return I.filters=new Set,I}function nm(e,n){const t=em(e,n);Kl(e,t),n.hoistStatic&&Zd(e,t),n.ssr||tm(e,t),e.helpers=new Set([...t.helpers.keys()]),e.components=[...t.components],e.directives=[...t.directives],e.imports=t.imports,e.hoists=t.hoists,e.temps=t.temps,e.cached=t.cached,e.filters=[...t.filters]}function tm(e,n){const{helper:t}=n,{children:s}=e;if(s.length===1){const l=s[0];if(rp(e,l)&&l.codegenNode){const a=l.codegenNode;a.type===13&&Rr(a,n),e.codegenNode=a}else e.codegenNode=l}else if(s.length>1){let l=64;e.codegenNode=xs(n,t(js),void 0,e.children,l+"",void 0,void 0,!0,void 0,!1)}}function sm(e,n){let t=0;const s=()=>{t--};for(;t<e.children.length;t++){const l=e.children[t];X(l)||(n.parent=e,n.childIndex=t,n.onNodeRemoved=s,Kl(l,n))}}function Kl(e,n){n.currentNode=e;const{nodeTransforms:t}=n,s=[];for(let a=0;a<t.length;a++){const r=t[a](e,n);if(r&&(H(r)?s.push(...r):s.push(r)),n.currentNode)e=n.currentNode;else return}switch(e.type){case 3:n.ssr||n.helper(As);break;case 5:n.ssr||n.helper(Hl);break;case 9:for(let a=0;a<e.branches.length;a++)Kl(e.branches[a],n);break;case 10:case 11:case 1:case 0:sm(e,n);break}n.currentNode=e;let l=s.length;for(;l--;)s[l]()}function up(e,n){const t=X(e)?s=>s===e:s=>e.test(s);return(s,l)=>{if(s.type===1){const{props:a}=s;if(s.tagType===3&&a.some($d))return;const r=[];for(let i=0;i<a.length;i++){const o=a[i];if(o.type===7&&t(o.name)){a.splice(i,1),i--;const c=n(s,o,l);c&&r.push(c)}}return r}}}const zl="/*#__PURE__*/",fp=e=>`${qt[e]}: _${qt[e]}`;function Ni(e,{mode:n="function",prefixIdentifiers:t=n==="module",sourceMap:s=!1,filename:l="template.vue.html",scopeId:a=null,optimizeImports:r=!1,runtimeGlobalName:i="Vue",runtimeModuleName:o="vue",ssrRuntimeModuleName:c="vue/server-renderer",ssr:p=!1,isTS:u=!1,inSSR:f=!1}){const d={mode:n,prefixIdentifiers:t,sourceMap:s,filename:l,scopeId:a,optimizeImports:r,runtimeGlobalName:i,runtimeModuleName:o,ssrRuntimeModuleName:c,ssr:p,isTS:u,inSSR:f,source:e.loc.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(E){return`_${qt[E]}`},push(E,w){d.code+=E},indent(){_(++d.indentLevel)},deindent(E=!1){E?--d.indentLevel:_(--d.indentLevel)},newline(){_(d.indentLevel)}};function _(E){d.push(`
`+"  ".repeat(E))}return d}function lm(e,n={}){const t=Ni(e,n);n.onContextCreated&&n.onContextCreated(t);const{mode:s,push:l,prefixIdentifiers:a,indent:r,deindent:i,newline:o,scopeId:c,ssr:p}=t,u=Array.from(e.helpers),f=u.length>0,d=!a&&s!=="module",_=!1,E=_?Ni(e,n):t;am(e,E);const w=p?"ssrRender":"render",g=(p?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(l(`function ${w}(${g}) {`),r(),d&&(l("with (_ctx) {"),r(),f&&(l(`const { ${u.map(fp).join(", ")} } = _Vue`),l(`
`),o())),e.components.length&&(la(e.components,"component",t),(e.directives.length||e.temps>0)&&o()),e.directives.length&&(la(e.directives,"directive",t),e.temps>0&&o()),e.filters&&e.filters.length&&(o(),la(e.filters,"filter",t),o()),e.temps>0){l("let ");for(let k=0;k<e.temps;k++)l(`${k>0?", ":""}_temp${k}`)}return(e.components.length||e.directives.length||e.temps)&&(l(`
`),o()),p||l("return "),e.codegenNode?Me(e.codegenNode,t):l("null"),d&&(i(),l("}")),i(),l("}"),{ast:e,code:t.code,preamble:_?E.code:"",map:t.map?t.map.toJSON():void 0}}function am(e,n){const{ssr:t,prefixIdentifiers:s,push:l,newline:a,runtimeModuleName:r,runtimeGlobalName:i,ssrRuntimeModuleName:o}=n,c=i,p=Array.from(e.helpers);if(p.length>0&&(l(`const _Vue = ${c}
`),e.hoists.length)){const u=[yr,_r,As,vr,Qc].filter(f=>p.includes(f)).map(fp).join(", ");l(`const { ${u} } = _Vue
`)}rm(e.hoists,n),a(),l("return ")}function la(e,n,{helper:t,push:s,newline:l,isTS:a}){const r=t(n==="filter"?Er:n==="component"?br:jr);for(let i=0;i<e.length;i++){let o=e[i];const c=o.endsWith("__self");c&&(o=o.slice(0,-6)),s(`const ${ws(o,n)} = ${r}(${JSON.stringify(o)}${c?", true":""})${a?"!":""}`),i<e.length-1&&l()}}function rm(e,n){if(!e.length)return;n.pure=!0;const{push:t,newline:s,helper:l,scopeId:a,mode:r}=n;s();for(let i=0;i<e.length;i++){const o=e[i];o&&(t(`const _hoisted_${i+1} = `),Me(o,n),s())}n.pure=!1}function Nr(e,n){const t=e.length>3||!1;n.push("["),t&&n.indent(),Ms(e,n,t),t&&n.deindent(),n.push("]")}function Ms(e,n,t=!1,s=!0){const{push:l,newline:a}=n;for(let r=0;r<e.length;r++){const i=e[r];X(i)?l(i):H(i)?Nr(i,n):Me(i,n),r<e.length-1&&(t?(s&&l(","),a()):s&&l(", "))}}function Me(e,n){if(X(e)){n.push(e);return}if(Dn(e)){n.push(n.helper(e));return}switch(e.type){case 1:case 9:case 11:Me(e.codegenNode,n);break;case 2:im(e,n);break;case 4:hp(e,n);break;case 5:om(e,n);break;case 12:Me(e.codegenNode,n);break;case 8:dp(e,n);break;case 3:pm(e,n);break;case 13:um(e,n);break;case 14:hm(e,n);break;case 15:dm(e,n);break;case 17:mm(e,n);break;case 18:gm(e,n);break;case 19:ym(e,n);break;case 20:_m(e,n);break;case 21:Ms(e.body,n,!0,!1);break}}function im(e,n){n.push(JSON.stringify(e.content),e)}function hp(e,n){const{content:t,isStatic:s}=e;n.push(s?JSON.stringify(t):t,e)}function om(e,n){const{push:t,helper:s,pure:l}=n;l&&t(zl),t(`${s(Hl)}(`),Me(e.content,n),t(")")}function dp(e,n){for(let t=0;t<e.children.length;t++){const s=e.children[t];X(s)?n.push(s):Me(s,n)}}function cm(e,n){const{push:t}=n;if(e.type===8)t("["),dp(e,n),t("]");else if(e.isStatic){const s=Pr(e.content)?e.content:JSON.stringify(e.content);t(s,e)}else t(`[${e.content}]`,e)}function pm(e,n){const{push:t,helper:s,pure:l}=n;l&&t(zl),t(`${s(As)}(${JSON.stringify(e.content)})`,e)}function um(e,n){const{push:t,helper:s,pure:l}=n,{tag:a,props:r,children:i,patchFlag:o,dynamicProps:c,directives:p,isBlock:u,disableTracking:f,isComponent:d}=e;p&&t(s(xr)+"("),u&&t(`(${s(ht)}(${f?"true":""}), `),l&&t(zl);const _=u?Bt(n.inSSR,d):Ft(n.inSSR,d);t(s(_)+"(",e),Ms(fm([a,r,i,o,c]),n),t(")"),u&&t(")"),p&&(t(", "),Me(p,n),t(")"))}function fm(e){let n=e.length;for(;n--&&e[n]==null;);return e.slice(0,n+1).map(t=>t||"null")}function hm(e,n){const{push:t,helper:s,pure:l}=n,a=X(e.callee)?e.callee:s(e.callee);l&&t(zl),t(a+"(",e),Ms(e.arguments,n),t(")")}function dm(e,n){const{push:t,indent:s,deindent:l,newline:a}=n,{properties:r}=e;if(!r.length){t("{}",e);return}const i=r.length>1||!1;t(i?"{":"{ "),i&&s();for(let o=0;o<r.length;o++){const{key:c,value:p}=r[o];cm(c,n),t(": "),Me(p,n),o<r.length-1&&(t(","),a())}i&&l(),t(i?"}":" }")}function mm(e,n){Nr(e.elements,n)}function gm(e,n){const{push:t,indent:s,deindent:l}=n,{params:a,returns:r,body:i,newline:o,isSlot:c}=e;c&&t(`_${qt[Tr]}(`),t("(",e),H(a)?Ms(a,n):a&&Me(a,n),t(") => "),(o||i)&&(t("{"),s()),r?(o&&t("return "),H(r)?Nr(r,n):Me(r,n)):i&&Me(i,n),(o||i)&&(l(),t("}")),c&&(e.isNonScopedSlot&&t(", undefined, true"),t(")"))}function ym(e,n){const{test:t,consequent:s,alternate:l,newline:a}=e,{push:r,indent:i,deindent:o,newline:c}=n;if(t.type===4){const u=!Pr(t.content);u&&r("("),hp(t,n),u&&r(")")}else r("("),Me(t,n),r(")");a&&i(),n.indentLevel++,a||r(" "),r("? "),Me(s,n),n.indentLevel--,a&&c(),a||r(" "),r(": ");const p=l.type===19;p||n.indentLevel++,Me(l,n),p||n.indentLevel--,a&&o(!0)}function _m(e,n){const{push:t,helper:s,indent:l,deindent:a,newline:r}=n;t(`_cache[${e.index}] || (`),e.isVNode&&(l(),t(`${s(ml)}(-1),`),r()),t(`_cache[${e.index}] = `),Me(e.value,n),e.isVNode&&(t(","),r(),t(`${s(ml)}(1),`),r(),t(`_cache[${e.index}]`),a()),t(")")}new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");const vm=up(/^(if|else|else-if)$/,(e,n,t)=>bm(e,n,t,(s,l,a)=>{const r=t.parent.children;let i=r.indexOf(s),o=0;for(;i-->=0;){const c=r[i];c&&c.type===9&&(o+=c.branches.length)}return()=>{if(a)s.codegenNode=Mi(l,o,t);else{const c=jm(s.codegenNode);c.alternate=Mi(l,o+s.branches.length-1,t)}}}));function bm(e,n,t,s){if(n.name!=="else"&&(!n.exp||!n.exp.content.trim())){const l=n.exp?n.exp.loc:e.loc;t.onError(be(28,n.loc)),n.exp=ne("true",!1,l)}if(n.name==="if"){const l=Oi(e,n),a={type:9,loc:e.loc,branches:[l]};if(t.replaceNode(a),s)return s(a,l,!0)}else{const l=t.parent.children;let a=l.indexOf(e);for(;a-->=-1;){const r=l[a];if(r&&r.type===3){t.removeNode(r);continue}if(r&&r.type===2&&!r.content.trim().length){t.removeNode(r);continue}if(r&&r.type===9){n.name==="else-if"&&r.branches[r.branches.length-1].condition===void 0&&t.onError(be(30,e.loc)),t.removeNode();const i=Oi(e,n);r.branches.push(i);const o=s&&s(r,i,!1);Kl(i,t),o&&o(),t.currentNode=null}else t.onError(be(30,e.loc));break}}}function Oi(e,n){const t=e.tagType===3;return{type:10,loc:e.loc,condition:n.name==="else"?void 0:n.exp,children:t&&!tn(e,"for")?e.children:[e],userKey:Vl(e,"key"),isTemplateIf:t}}function Mi(e,n,t){return e.condition?Ia(e.condition,$i(e,n,t),xe(t.helper(As),['""',"true"])):$i(e,n,t)}function $i(e,n,t){const{helper:s}=t,l=je("key",ne(`${n}`,!1,en,2)),{children:a}=e,r=a[0];if(a.length!==1||r.type!==1)if(a.length===1&&r.type===11){const o=r.codegenNode;return bl(o,l,t),o}else{let o=64;return xs(t,s(js),sn([l]),a,o+"",void 0,void 0,!0,!1,!1,e.loc)}else{const o=r.codegenNode,c=Ld(o);return c.type===13&&Rr(c,t),bl(c,l,t),o}}function jm(e){for(;;)if(e.type===19)if(e.alternate.type===19)e=e.alternate;else return e;else e.type===20&&(e=e.value)}const Em=up("for",(e,n,t)=>{const{helper:s,removeHelper:l}=t;return xm(e,n,t,a=>{const r=xe(s(wr),[a.source]),i=_l(e),o=tn(e,"memo"),c=Vl(e,"key"),p=c&&(c.type===6?ne(c.value.content,!0):c.exp),u=c?je("key",p):null,f=a.source.type===4&&a.source.constType>0,d=f?64:c?128:256;return a.codegenNode=xs(t,s(js),void 0,r,d+"",void 0,void 0,!0,!f,!1,e.loc),()=>{let _;const{children:E}=a,w=E.length!==1||E[0].type!==1,y=vl(e)?e:i&&e.children.length===1&&vl(e.children[0])?e.children[0]:null;if(y?(_=y.codegenNode,i&&u&&bl(_,u,t)):w?_=xs(t,s(js),u?sn([u]):void 0,e.children,64+"",void 0,void 0,!0,void 0,!1):(_=E[0].codegenNode,i&&u&&bl(_,u,t),_.isBlock!==!f&&(_.isBlock?(l(ht),l(Bt(t.inSSR,_.isComponent))):l(Ft(t.inSSR,_.isComponent))),_.isBlock=!f,_.isBlock?(s(ht),s(Bt(t.inSSR,_.isComponent))):s(Ft(t.inSSR,_.isComponent))),o){const g=Lt(Aa(a.parseResult,[ne("_cached")]));g.body=Id([fn(["const _memo = (",o.exp,")"]),fn(["if (_cached",...p?[" && _cached.key === ",p]:[],` && ${t.helperString(ep)}(_cached, _memo)) return _cached`]),fn(["const _item = ",_]),ne("_item.memo = _memo"),ne("return _item")]),r.arguments.push(g,ne("_cache"),ne(String(t.cached++)))}else r.arguments.push(Lt(Aa(a.parseResult),_,!0))}})});function xm(e,n,t,s){if(!n.exp){t.onError(be(31,n.loc));return}const l=mp(n.exp);if(!l){t.onError(be(32,n.loc));return}const{addIdentifiers:a,removeIdentifiers:r,scopes:i}=t,{source:o,value:c,key:p,index:u}=l,f={type:11,loc:n.loc,source:o,valueAlias:c,keyAlias:p,objectIndexAlias:u,parseResult:l,children:_l(e)?e.children:[e]};t.replaceNode(f),i.vFor++;const d=s&&s(f);return()=>{i.vFor--,d&&d()}}const wm=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,qi=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,km=/^\(|\)$/g;function mp(e,n){const t=e.loc,s=e.content,l=s.match(wm);if(!l)return;const[,a,r]=l,i={source:Js(t,r.trim(),s.indexOf(r,a.length)),value:void 0,key:void 0,index:void 0};let o=a.trim().replace(km,"").trim();const c=a.indexOf(o),p=o.match(qi);if(p){o=o.replace(qi,"").trim();const u=p[1].trim();let f;if(u&&(f=s.indexOf(u,c+o.length),i.key=Js(t,u,f)),p[2]){const d=p[2].trim();d&&(i.index=Js(t,d,s.indexOf(d,i.key?f+u.length:c+o.length)))}}return o&&(i.value=Js(t,o,c)),i}function Js(e,n,t){return ne(n,!1,sp(e,t,n.length))}function Aa({value:e,key:n,index:t},s=[]){return Cm([e,n,t,...s])}function Cm(e){let n=e.length;for(;n--&&!e[n];);return e.slice(0,n+1).map((t,s)=>t||ne("_".repeat(s+1),!1))}const Li=ne("undefined",!1),Sm=(e,n)=>{if(e.type===1&&(e.tagType===1||e.tagType===3)){const t=tn(e,"slot");if(t)return t.exp,n.scopes.vSlot++,()=>{n.scopes.vSlot--}}},Tm=(e,n,t)=>Lt(e,n,!1,!0,n.length?n[0].loc:t);function Im(e,n,t=Tm){n.helper(Tr);const{children:s,loc:l}=e,a=[],r=[];let i=n.scopes.vSlot>0||n.scopes.vFor>0;const o=tn(e,"slot",!0);if(o){const{arg:w,exp:y}=o;w&&!De(w)&&(i=!0),a.push(je(w||ne("default",!0),t(y,s,l)))}let c=!1,p=!1;const u=[],f=new Set;let d=0;for(let w=0;w<s.length;w++){const y=s[w];let g;if(!_l(y)||!(g=tn(y,"slot",!0))){y.type!==3&&u.push(y);continue}if(o){n.onError(be(37,g.loc));break}c=!0;const{children:k,loc:b}=y,{arg:S=ne("default",!0),exp:L,loc:I}=g;let j;De(S)?j=S?S.content:"default":i=!0;const N=t(L,k,b);let M,O,P;if(M=tn(y,"if"))i=!0,r.push(Ia(M.exp,Ys(S,N,d++),Li));else if(O=tn(y,/^else(-if)?$/,!0)){let B=w,q;for(;B--&&(q=s[B],q.type===3););if(q&&_l(q)&&tn(q,"if")){s.splice(w,1),w--;let te=r[r.length-1];for(;te.alternate.type===19;)te=te.alternate;te.alternate=O.exp?Ia(O.exp,Ys(S,N,d++),Li):Ys(S,N,d++)}else n.onError(be(30,O.loc))}else if(P=tn(y,"for")){i=!0;const B=P.parseResult||mp(P.exp);B?r.push(xe(n.helper(wr),[B.source,Lt(Aa(B),Ys(S,N),!0)])):n.onError(be(32,P.loc))}else{if(j){if(f.has(j)){n.onError(be(38,I));continue}f.add(j),j==="default"&&(p=!0)}a.push(je(S,N))}}if(!o){const w=(y,g)=>{const k=t(y,g,l);return n.compatConfig&&(k.isNonScopedSlot=!0),je("default",k)};c?u.length&&u.some(y=>gp(y))&&(p?n.onError(be(39,u[0].loc)):a.push(w(void 0,u))):a.push(w(void 0,s))}const _=i?2:tl(e.children)?3:1;let E=sn(a.concat(je("_",ne(_+"",!1))),l);return r.length&&(E=xe(n.helper(Xc),[E,Os(r)])),{slots:E,hasDynamicSlots:i}}function Ys(e,n,t){const s=[je("name",e),je("fn",n)];return t!=null&&s.push(je("key",ne(String(t),!0))),sn(s)}function tl(e){for(let n=0;n<e.length;n++){const t=e[n];switch(t.type){case 1:if(t.tagType===2||tl(t.children))return!0;break;case 9:if(tl(t.branches))return!0;break;case 10:case 11:if(tl(t.children))return!0;break}}return!1}function gp(e){return e.type!==2&&e.type!==12?!0:e.type===2?!!e.content.trim():gp(e.content)}const yp=new WeakMap,Rm=(e,n)=>function(){if(e=n.currentNode,!(e.type===1&&(e.tagType===0||e.tagType===1)))return;const{tag:s,props:l}=e,a=e.tagType===1;let r=a?Pm(e,n):`"${s}"`;const i=ge(r)&&r.callee===hl;let o,c,p,u=0,f,d,_,E=i||r===is||r===gr||!a&&(s==="svg"||s==="foreignObject");if(l.length>0){const w=_p(e,n,void 0,a,i);o=w.props,u=w.patchFlag,d=w.dynamicPropNames;const y=w.directives;_=y&&y.length?Os(y.map(g=>Nm(g,n))):void 0,w.shouldUseBlock&&(E=!0)}if(e.children.length>0)if(r===fl&&(E=!0,u|=1024),a&&r!==is&&r!==fl){const{slots:y,hasDynamicSlots:g}=Im(e,n);c=y,g&&(u|=1024)}else if(e.children.length===1&&r!==is){const y=e.children[0],g=y.type,k=g===5||g===8;k&&ln(y,n)===0&&(u|=1),k||g===2?c=y:c=e.children}else c=e.children;u!==0&&(p=String(u),d&&d.length&&(f=Om(d))),e.codegenNode=xs(n,r,o,c,p,f,_,!!E,!1,a,e.loc)};function Pm(e,n,t=!1){let{tag:s}=e;const l=Na(s),a=Vl(e,"is");if(a)if(l||it("COMPILER_IS_ON_ELEMENT",n)){const o=a.type===6?a.value&&ne(a.value.content,!0):a.exp;if(o)return xe(n.helper(hl),[o])}else a.type===6&&a.value.content.startsWith("vue:")&&(s=a.value.content.slice(4));const r=!l&&tn(e,"is");if(r&&r.exp)return xe(n.helper(hl),[r.exp]);const i=np(s)||n.isBuiltInComponent(s);return i?(t||n.helper(i),i):(n.helper(br),n.components.add(s),ws(s,"component"))}function _p(e,n,t=e.props,s,l,a=!1){const{tag:r,loc:i,children:o}=e;let c=[];const p=[],u=[],f=o.length>0;let d=!1,_=0,E=!1,w=!1,y=!1,g=!1,k=!1,b=!1;const S=[],L=N=>{c.length&&(p.push(sn(Fi(c),i)),c=[]),N&&p.push(N)},I=({key:N,value:M})=>{if(De(N)){const O=N.content,P=dt(O);if(P&&(!s||l)&&O.toLowerCase()!=="onclick"&&O!=="onUpdate:modelValue"&&!tt(O)&&(g=!0),P&&tt(O)&&(b=!0),M.type===20||(M.type===4||M.type===8)&&ln(M,n)>0)return;O==="ref"?E=!0:O==="class"?w=!0:O==="style"?y=!0:O!=="key"&&!S.includes(O)&&S.push(O),s&&(O==="class"||O==="style")&&!S.includes(O)&&S.push(O)}else k=!0};for(let N=0;N<t.length;N++){const M=t[N];if(M.type===6){const{loc:O,name:P,value:B}=M;let q=!0;if(P==="ref"&&(E=!0,n.scopes.vFor>0&&c.push(je(ne("ref_for",!0),ne("true")))),P==="is"&&(Na(r)||B&&B.content.startsWith("vue:")||it("COMPILER_IS_ON_ELEMENT",n)))continue;c.push(je(ne(P,!0,sp(O,0,P.length)),ne(B?B.content:"",q,B?B.loc:O)))}else{const{name:O,arg:P,exp:B,loc:q}=M,te=O==="bind",ee=O==="on";if(O==="slot"){s||n.onError(be(40,q));continue}if(O==="once"||O==="memo"||O==="is"||te&&nt(P,"is")&&(Na(r)||it("COMPILER_IS_ON_ELEMENT",n))||ee&&a)continue;if((te&&nt(P,"key")||ee&&f&&nt(P,"vue:before-update"))&&(d=!0),te&&nt(P,"ref")&&n.scopes.vFor>0&&c.push(je(ne("ref_for",!0),ne("true"))),!P&&(te||ee)){if(k=!0,B)if(te){if(L(),it("COMPILER_V_BIND_OBJECT_ORDER",n)){p.unshift(B);continue}p.push(B)}else L({type:14,loc:q,callee:n.helper(Sr),arguments:s?[B]:[B,"true"]});else n.onError(be(te?34:35,q));continue}const ie=n.directiveTransforms[O];if(ie){const{props:oe,needRuntime:Ke}=ie(M,e,n);!a&&oe.forEach(I),ee&&P&&!De(P)?L(sn(oe,i)):c.push(...oe),Ke&&(u.push(M),Dn(Ke)&&yp.set(M,Ke))}else Yp(O)||(u.push(M),f&&(d=!0))}}let j;if(p.length?(L(),p.length>1?j=xe(n.helper(dl),p,i):j=p[0]):c.length&&(j=sn(Fi(c),i)),k?_|=16:(w&&!s&&(_|=2),y&&!s&&(_|=4),S.length&&(_|=8),g&&(_|=32)),!d&&(_===0||_===32)&&(E||b||u.length>0)&&(_|=512),!n.inSSR&&j)switch(j.type){case 15:let N=-1,M=-1,O=!1;for(let q=0;q<j.properties.length;q++){const te=j.properties[q].key;De(te)?te.content==="class"?N=q:te.content==="style"&&(M=q):te.isHandlerKey||(O=!0)}const P=j.properties[N],B=j.properties[M];O?j=xe(n.helper(Es),[j]):(P&&!De(P.value)&&(P.value=xe(n.helper(kr),[P.value])),B&&(y||B.value.type===4&&B.value.content.trim()[0]==="["||B.value.type===17)&&(B.value=xe(n.helper(Cr),[B.value])));break;case 14:break;default:j=xe(n.helper(Es),[xe(n.helper(Ns),[j])]);break}return{props:j,directives:u,patchFlag:_,dynamicPropNames:S,shouldUseBlock:d}}function Fi(e){const n=new Map,t=[];for(let s=0;s<e.length;s++){const l=e[s];if(l.key.type===8||!l.key.isStatic){t.push(l);continue}const a=l.key.content,r=n.get(a);r?(a==="style"||a==="class"||dt(a))&&Am(r,l):(n.set(a,l),t.push(l))}return t}function Am(e,n){e.value.type===17?e.value.elements.push(n.value):e.value=Os([e.value,n.value],e.loc)}function Nm(e,n){const t=[],s=yp.get(e);s?t.push(n.helperString(s)):(n.helper(jr),n.directives.add(e.name),t.push(ws(e.name,"directive")));const{loc:l}=e;if(e.exp&&t.push(e.exp),e.arg&&(e.exp||t.push("void 0"),t.push(e.arg)),Object.keys(e.modifiers).length){e.arg||(e.exp||t.push("void 0"),t.push("void 0"));const a=ne("true",!1,l);t.push(sn(e.modifiers.map(r=>je(r,a)),l))}return Os(t,e.loc)}function Om(e){let n="[";for(let t=0,s=e.length;t<s;t++)n+=JSON.stringify(e[t]),t<s-1&&(n+=", ");return n+"]"}function Na(e){return e==="component"||e==="Component"}const Mm=(e,n)=>{if(vl(e)){const{children:t,loc:s}=e,{slotName:l,slotProps:a}=$m(e,n),r=[n.prefixIdentifiers?"_ctx.$slots":"$slots",l,"{}","undefined","true"];let i=2;a&&(r[2]=a,i=3),t.length&&(r[3]=Lt([],t,!1,!1,s),i=4),n.scopeId&&!n.slotted&&(i=5),r.splice(i),e.codegenNode=xe(n.helper(Zc),r,s)}};function $m(e,n){let t='"default"',s;const l=[];for(let a=0;a<e.props.length;a++){const r=e.props[a];r.type===6?r.value&&(r.name==="name"?t=JSON.stringify(r.value.content):(r.name=ke(r.name),l.push(r))):r.name==="bind"&&nt(r.arg,"name")?r.exp&&(t=r.exp):(r.name==="bind"&&r.arg&&De(r.arg)&&(r.arg.content=ke(r.arg.content)),l.push(r))}if(l.length>0){const{props:a,directives:r}=_p(e,n,l,!1,!1);s=a,r.length&&n.onError(be(36,r[0].loc))}return{slotName:t,slotProps:s}}const qm=/^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,vp=(e,n,t,s)=>{const{loc:l,modifiers:a,arg:r}=e;!e.exp&&!a.length&&t.onError(be(35,l));let i;if(r.type===4)if(r.isStatic){let u=r.content;u.startsWith("vue:")&&(u=`vnode-${u.slice(4)}`);const f=n.tagType!==0||u.startsWith("vnode")||!/[A-Z]/.test(u)?It(ke(u)):`on:${u}`;i=ne(f,!0,r.loc)}else i=fn([`${t.helperString(Ta)}(`,r,")"]);else i=r,i.children.unshift(`${t.helperString(Ta)}(`),i.children.push(")");let o=e.exp;o&&!o.content.trim()&&(o=void 0);let c=t.cacheHandlers&&!o&&!t.inVOnce;if(o){const u=tp(o.content),f=!(u||qm.test(o.content)),d=o.content.includes(";");(f||c&&u)&&(o=fn([`${f?"$event":"(...args)"} => ${d?"{":"("}`,o,d?"}":")"]))}let p={props:[je(i,o||ne("() => {}",!1,l))]};return s&&(p=s(p)),c&&(p.props[0].value=t.cache(p.props[0].value)),p.props.forEach(u=>u.key.isHandlerKey=!0),p},Lm=(e,n,t)=>{const{exp:s,modifiers:l,loc:a}=e,r=e.arg;return r.type!==4?(r.children.unshift("("),r.children.push(') || ""')):r.isStatic||(r.content=`${r.content} || ""`),l.includes("camel")&&(r.type===4?r.isStatic?r.content=ke(r.content):r.content=`${t.helperString(Sa)}(${r.content})`:(r.children.unshift(`${t.helperString(Sa)}(`),r.children.push(")"))),t.inSSR||(l.includes("prop")&&Bi(r,"."),l.includes("attr")&&Bi(r,"^")),!s||s.type===4&&!s.content.trim()?(t.onError(be(34,a)),{props:[je(r,ne("",!0,a))]}):{props:[je(r,s)]}},Bi=(e,n)=>{e.type===4?e.isStatic?e.content=n+e.content:e.content=`\`${n}\${${e.content}}\``:(e.children.unshift(`'${n}' + (`),e.children.push(")"))},Fm=(e,n)=>{if(e.type===0||e.type===1||e.type===11||e.type===10)return()=>{const t=e.children;let s,l=!1;for(let a=0;a<t.length;a++){const r=t[a];if(sa(r)){l=!0;for(let i=a+1;i<t.length;i++){const o=t[i];if(sa(o))s||(s=t[a]=fn([r],r.loc)),s.children.push(" + ",o),t.splice(i,1),i--;else{s=void 0;break}}}}if(!(!l||t.length===1&&(e.type===0||e.type===1&&e.tagType===0&&!e.props.find(a=>a.type===7&&!n.directiveTransforms[a.name])&&e.tag!=="template")))for(let a=0;a<t.length;a++){const r=t[a];if(sa(r)||r.type===8){const i=[];(r.type!==2||r.content!==" ")&&i.push(r),!n.ssr&&ln(r,n)===0&&i.push(1+""),t[a]={type:12,content:r,loc:r.loc,codegenNode:xe(n.helper(vr),i)}}}}},Di=new WeakSet,Bm=(e,n)=>{if(e.type===1&&tn(e,"once",!0))return Di.has(e)||n.inVOnce||n.inSSR?void 0:(Di.add(e),n.inVOnce=!0,n.helper(ml),()=>{n.inVOnce=!1;const t=n.currentNode;t.codegenNode&&(t.codegenNode=n.cache(t.codegenNode,!0))})},bp=(e,n,t)=>{const{exp:s,arg:l}=e;if(!s)return t.onError(be(41,e.loc)),Qs();const a=s.loc.source,r=s.type===4?s.content:a,i=t.bindingMetadata[a];if(i==="props"||i==="props-aliased")return t.onError(be(44,s.loc)),Qs();const o=!1;if(!r.trim()||!tp(r)&&!o)return t.onError(be(42,s.loc)),Qs();const c=l||ne("modelValue",!0),p=l?De(l)?`onUpdate:${ke(l.content)}`:fn(['"onUpdate:" + ',l]):"onUpdate:modelValue";let u;const f=t.isTS?"($event: any)":"$event";u=fn([`${f} => ((`,s,") = $event)"]);const d=[je(c,e.exp),je(p,u)];if(e.modifiers.length&&n.tagType===1){const _=e.modifiers.map(w=>(Pr(w)?w:JSON.stringify(w))+": true").join(", "),E=l?De(l)?`${l.content}Modifiers`:fn([l,' + "Modifiers"']):"modelModifiers";d.push(je(E,ne(`{ ${_} }`,!1,e.loc,2)))}return Qs(d)};function Qs(e=[]){return{props:e}}const Dm=/[\w).+\-_$\]]/,Hm=(e,n)=>{!it("COMPILER_FILTER",n)||(e.type===5&&El(e.content,n),e.type===1&&e.props.forEach(t=>{t.type===7&&t.name!=="for"&&t.exp&&El(t.exp,n)}))};function El(e,n){if(e.type===4)Hi(e,n);else for(let t=0;t<e.children.length;t++){const s=e.children[t];typeof s=="object"&&(s.type===4?Hi(s,n):s.type===8?El(e,n):s.type===5&&El(s.content,n))}}function Hi(e,n){const t=e.content;let s=!1,l=!1,a=!1,r=!1,i=0,o=0,c=0,p=0,u,f,d,_,E=[];for(d=0;d<t.length;d++)if(f=u,u=t.charCodeAt(d),s)u===39&&f!==92&&(s=!1);else if(l)u===34&&f!==92&&(l=!1);else if(a)u===96&&f!==92&&(a=!1);else if(r)u===47&&f!==92&&(r=!1);else if(u===124&&t.charCodeAt(d+1)!==124&&t.charCodeAt(d-1)!==124&&!i&&!o&&!c)_===void 0?(p=d+1,_=t.slice(0,d).trim()):w();else{switch(u){case 34:l=!0;break;case 39:s=!0;break;case 96:a=!0;break;case 40:c++;break;case 41:c--;break;case 91:o++;break;case 93:o--;break;case 123:i++;break;case 125:i--;break}if(u===47){let y=d-1,g;for(;y>=0&&(g=t.charAt(y),g===" ");y--);(!g||!Dm.test(g))&&(r=!0)}}_===void 0?_=t.slice(0,d).trim():p!==0&&w();function w(){E.push(t.slice(p,d).trim()),p=d+1}if(E.length){for(d=0;d<E.length;d++)_=Vm(_,E[d],n);e.content=_}}function Vm(e,n,t){t.helper(Er);const s=n.indexOf("(");if(s<0)return t.filters.add(n),`${ws(n,"filter")}(${e})`;{const l=n.slice(0,s),a=n.slice(s+1);return t.filters.add(l),`${ws(l,"filter")}(${e}${a!==")"?","+a:a}`}}const Vi=new WeakSet,Um=(e,n)=>{if(e.type===1){const t=tn(e,"memo");return!t||Vi.has(e)?void 0:(Vi.add(e),()=>{const s=e.codegenNode||n.currentNode.codegenNode;s&&s.type===13&&(e.tagType!==1&&Rr(s,n),e.codegenNode=xe(n.helper(Ir),[t.exp,Lt(void 0,s),"_cache",String(n.cached++)]))})}};function Km(e){return[[Bm,vm,Um,Em,Hm,Mm,Rm,Sm,Fm],{on:vp,bind:Lm,model:bp}]}function zm(e,n={}){const t=n.onError||mr,s=n.mode==="module";n.prefixIdentifiers===!0?t(be(47)):s&&t(be(48));const l=!1;n.cacheHandlers&&t(be(49)),n.scopeId&&!s&&t(be(50));const a=X(e)?Dd(e,n):e,[r,i]=Km();return nm(a,ae({},n,{prefixIdentifiers:l,nodeTransforms:[...r,...n.nodeTransforms||[]],directiveTransforms:ae({},i,n.directiveTransforms||{})})),lm(a,ae({},n,{prefixIdentifiers:l}))}const Wm=()=>({props:[]}),jp=Symbol(""),Ep=Symbol(""),xp=Symbol(""),wp=Symbol(""),Oa=Symbol(""),kp=Symbol(""),Cp=Symbol(""),Sp=Symbol(""),Tp=Symbol(""),Ip=Symbol("");Cd({[jp]:"vModelRadio",[Ep]:"vModelCheckbox",[xp]:"vModelText",[wp]:"vModelSelect",[Oa]:"vModelDynamic",[kp]:"withModifiers",[Cp]:"withKeys",[Sp]:"vShow",[Tp]:"Transition",[Ip]:"TransitionGroup"});let xt;function Gm(e,n=!1){return xt||(xt=document.createElement("div")),n?(xt.innerHTML=`<div foo="${e.replace(/"/g,"&quot;")}">`,xt.children[0].getAttribute("foo")):(xt.innerHTML=e,xt.textContent)}const Jm=Ve("style,iframe,script,noscript",!0),Ym={isVoidTag:pu,isNativeTag:e=>ou(e)||cu(e),isPreTag:e=>e==="pre",decodeEntities:Gm,isBuiltInComponent:e=>{if(Ct(e,"Transition"))return Tp;if(Ct(e,"TransitionGroup"))return Ip},getNamespace(e,n){let t=n?n.ns:0;if(n&&t===2)if(n.tag==="annotation-xml"){if(e==="svg")return 1;n.props.some(s=>s.type===6&&s.name==="encoding"&&s.value!=null&&(s.value.content==="text/html"||s.value.content==="application/xhtml+xml"))&&(t=0)}else/^m(?:[ions]|text)$/.test(n.tag)&&e!=="mglyph"&&e!=="malignmark"&&(t=0);else n&&t===1&&(n.tag==="foreignObject"||n.tag==="desc"||n.tag==="title")&&(t=0);if(t===0){if(e==="svg")return 1;if(e==="math")return 2}return t},getTextMode({tag:e,ns:n}){if(n===0){if(e==="textarea"||e==="title")return 1;if(Jm(e))return 2}return 0}},Qm=e=>{e.type===1&&e.props.forEach((n,t)=>{n.type===6&&n.name==="style"&&n.value&&(e.props[t]={type:7,name:"bind",arg:ne("style",!0,n.loc),exp:Zm(n.value.content,n.loc),modifiers:[],loc:n.loc})})},Zm=(e,n)=>{const t=uo(e);return ne(JSON.stringify(t),!1,n,3)};function Bn(e,n){return be(e,n)}const Xm=(e,n,t)=>{const{exp:s,loc:l}=e;return s||t.onError(Bn(53,l)),n.children.length&&(t.onError(Bn(54,l)),n.children.length=0),{props:[je(ne("innerHTML",!0,l),s||ne("",!0))]}},eg=(e,n,t)=>{const{exp:s,loc:l}=e;return s||t.onError(Bn(55,l)),n.children.length&&(t.onError(Bn(56,l)),n.children.length=0),{props:[je(ne("textContent",!0),s?ln(s,t)>0?s:xe(t.helperString(Hl),[s],l):ne("",!0))]}},ng=(e,n,t)=>{const s=bp(e,n,t);if(!s.props.length||n.tagType===1)return s;e.arg&&t.onError(Bn(58,e.arg.loc));const{tag:l}=n,a=t.isCustomElement(l);if(l==="input"||l==="textarea"||l==="select"||a){let r=xp,i=!1;if(l==="input"||a){const o=Vl(n,"type");if(o){if(o.type===7)r=Oa;else if(o.value)switch(o.value.content){case"radio":r=jp;break;case"checkbox":r=Ep;break;case"file":i=!0,t.onError(Bn(59,e.loc));break}}else Md(n)&&(r=Oa)}else l==="select"&&(r=wp);i||(s.needRuntime=t.helper(r))}else t.onError(Bn(57,e.loc));return s.props=s.props.filter(r=>!(r.key.type===4&&r.key.content==="modelValue")),s},tg=Ve("passive,once,capture"),sg=Ve("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),lg=Ve("left,right"),Rp=Ve("onkeyup,onkeydown,onkeypress",!0),ag=(e,n,t,s)=>{const l=[],a=[],r=[];for(let i=0;i<n.length;i++){const o=n[i];o==="native"&&ks("COMPILER_V_ON_NATIVE",t)||tg(o)?r.push(o):lg(o)?De(e)?Rp(e.content)?l.push(o):a.push(o):(l.push(o),a.push(o)):sg(o)?a.push(o):l.push(o)}return{keyModifiers:l,nonKeyModifiers:a,eventOptionModifiers:r}},Ui=(e,n)=>De(e)&&e.content.toLowerCase()==="onclick"?ne(n,!0):e.type!==4?fn(["(",e,`) === "onClick" ? "${n}" : (`,e,")"]):e,rg=(e,n,t)=>vp(e,n,t,s=>{const{modifiers:l}=e;if(!l.length)return s;let{key:a,value:r}=s.props[0];const{keyModifiers:i,nonKeyModifiers:o,eventOptionModifiers:c}=ag(a,l,t,e.loc);if(o.includes("right")&&(a=Ui(a,"onContextmenu")),o.includes("middle")&&(a=Ui(a,"onMouseup")),o.length&&(r=xe(t.helper(kp),[r,JSON.stringify(o)])),i.length&&(!De(a)||Rp(a.content))&&(r=xe(t.helper(Cp),[r,JSON.stringify(i)])),c.length){const p=c.map(gt).join("");a=De(a)?ne(`${a.content}${p}`,!0):fn(["(",a,`) + "${p}"`])}return{props:[je(a,r)]}}),ig=(e,n,t)=>{const{exp:s,loc:l}=e;return s||t.onError(Bn(61,l)),{props:[],needRuntime:t.helper(Sp)}},og=(e,n)=>{e.type===1&&e.tagType===0&&(e.tag==="script"||e.tag==="style")&&n.removeNode()},cg=[Qm],pg={cloak:Wm,html:Xm,text:eg,model:ng,on:rg,show:ig};function ug(e,n={}){return zm(e,ae({},Ym,n,{nodeTransforms:[og,...cg,...n.nodeTransforms||[]],directiveTransforms:ae({},pg,n.directiveTransforms||{}),transformHoist:null}))}const Ki=Object.create(null);function Pp(e,n){if(!X(e))if(e.nodeType)e=e.innerHTML;else return qe;const t=e,s=Ki[t];if(s)return s;if(e[0]==="#"){const i=document.querySelector(e);e=i?i.innerHTML:""}const l=ae({hoistStatic:!0,onError:void 0,onWarn:qe},n);!l.isCustomElement&&typeof customElements!="undefined"&&(l.isCustomElement=i=>!!customElements.get(i));const{code:a}=ug(e,l),r=new Function("Vue",a)(bd);return r._rc=!0,Ki[t]=r}jc(Pp);var Ue=(e,n)=>{const t=e.__vccOpts||e;for(const[s,l]of n)t[s]=l;return t};const fg={};function hg(e,n){const t=ar("router-view");return Z(),Un(t)}var dg=Ue(fg,[["render",hg]]);/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const kt=typeof window!="undefined";function mg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const he=Object.assign;function aa(e,n){const t={};for(const s in n){const l=n[s];t[s]=hn(l)?l.map(e):e(l)}return t}const cs=()=>{},hn=Array.isArray,gg=/\/$/,yg=e=>e.replace(gg,"");function ra(e,n,t="/"){let s,l={},a="",r="";const i=n.indexOf("#");let o=n.indexOf("?");return i<o&&i>=0&&(o=-1),o>-1&&(s=n.slice(0,o),a=n.slice(o+1,i>-1?i:n.length),l=e(a)),i>-1&&(s=s||n.slice(0,i),r=n.slice(i,n.length)),s=jg(s!=null?s:n,t),{fullPath:s+(a&&"?")+a+r,path:s,query:l,hash:r}}function _g(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function zi(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function vg(e,n,t){const s=n.matched.length-1,l=t.matched.length-1;return s>-1&&s===l&&Dt(n.matched[s],t.matched[l])&&Ap(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function Dt(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Ap(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!bg(e[t],n[t]))return!1;return!0}function bg(e,n){return hn(e)?Wi(e,n):hn(n)?Wi(n,e):e===n}function Wi(e,n){return hn(n)?e.length===n.length&&e.every((t,s)=>t===n[s]):e.length===1&&e[0]===n}function jg(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),s=e.split("/"),l=s[s.length-1];(l===".."||l===".")&&s.push("");let a=t.length-1,r,i;for(r=0;r<s.length;r++)if(i=s[r],i!==".")if(i==="..")a>1&&a--;else break;return t.slice(0,a).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Ss;(function(e){e.pop="pop",e.push="push"})(Ss||(Ss={}));var ps;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ps||(ps={}));function Eg(e){if(!e)if(kt){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),yg(e)}const xg=/^[^#]+#/;function wg(e,n){return e.replace(xg,"#")+n}function kg(e,n){const t=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:n.behavior,left:s.left-t.left-(n.left||0),top:s.top-t.top-(n.top||0)}}const Wl=()=>({left:window.pageXOffset,top:window.pageYOffset});function Cg(e){let n;if("el"in e){const t=e.el,s=typeof t=="string"&&t.startsWith("#"),l=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!l)return;n=kg(l,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Gi(e,n){return(history.state?history.state.position-n:-1)+e}const Ma=new Map;function Sg(e,n){Ma.set(e,n)}function Tg(e){const n=Ma.get(e);return Ma.delete(e),n}let Ig=()=>location.protocol+"//"+location.host;function Np(e,n){const{pathname:t,search:s,hash:l}=n,a=e.indexOf("#");if(a>-1){let i=l.includes(e.slice(a))?e.slice(a).length:1,o=l.slice(i);return o[0]!=="/"&&(o="/"+o),zi(o,"")}return zi(t,e)+s+l}function Rg(e,n,t,s){let l=[],a=[],r=null;const i=({state:f})=>{const d=Np(e,location),_=t.value,E=n.value;let w=0;if(f){if(t.value=d,n.value=f,r&&r===_){r=null;return}w=E?f.position-E.position:0}else s(d);l.forEach(y=>{y(t.value,_,{delta:w,type:Ss.pop,direction:w?w>0?ps.forward:ps.back:ps.unknown})})};function o(){r=t.value}function c(f){l.push(f);const d=()=>{const _=l.indexOf(f);_>-1&&l.splice(_,1)};return a.push(d),d}function p(){const{history:f}=window;!f.state||f.replaceState(he({},f.state,{scroll:Wl()}),"")}function u(){for(const f of a)f();a=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:o,listen:c,destroy:u}}function Ji(e,n,t,s=!1,l=!1){return{back:e,current:n,forward:t,replaced:s,position:window.history.length,scroll:l?Wl():null}}function Pg(e){const{history:n,location:t}=window,s={value:Np(e,t)},l={value:n.state};l.value||a(s.value,{back:null,current:s.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function a(o,c,p){const u=e.indexOf("#"),f=u>-1?(t.host&&document.querySelector("base")?e:e.slice(u))+o:Ig()+e+o;try{n[p?"replaceState":"pushState"](c,"",f),l.value=c}catch(d){console.error(d),t[p?"replace":"assign"](f)}}function r(o,c){const p=he({},n.state,Ji(l.value.back,o,l.value.forward,!0),c,{position:l.value.position});a(o,p,!0),s.value=o}function i(o,c){const p=he({},l.value,n.state,{forward:o,scroll:Wl()});a(p.current,p,!0);const u=he({},Ji(s.value,o,null),{position:p.position+1},c);a(o,u,!1),s.value=o}return{location:s,state:l,push:i,replace:r}}function Ag(e){e=Eg(e);const n=Pg(e),t=Rg(e,n.state,n.location,n.replace);function s(a,r=!0){r||t.pauseListeners(),history.go(a)}const l=he({location:"",base:e,go:s,createHref:wg.bind(null,e)},n,t);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>n.state.value}),l}function Ng(e){return typeof e=="string"||e&&typeof e=="object"}function Op(e){return typeof e=="string"||typeof e=="symbol"}const On={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Mp=Symbol("");var Yi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Yi||(Yi={}));function Ht(e,n){return he(new Error,{type:e,[Mp]:!0},n)}function bn(e,n){return e instanceof Error&&Mp in e&&(n==null||!!(e.type&n))}const Qi="[^/]+?",Og={sensitive:!1,strict:!1,start:!0,end:!0},Mg=/[.+*?^${}()[\]/\\]/g;function $g(e,n){const t=he({},Og,n),s=[];let l=t.start?"^":"";const a=[];for(const c of e){const p=c.length?[]:[90];t.strict&&!c.length&&(l+="/");for(let u=0;u<c.length;u++){const f=c[u];let d=40+(t.sensitive?.25:0);if(f.type===0)u||(l+="/"),l+=f.value.replace(Mg,"\\$&"),d+=40;else if(f.type===1){const{value:_,repeatable:E,optional:w,regexp:y}=f;a.push({name:_,repeatable:E,optional:w});const g=y||Qi;if(g!==Qi){d+=10;try{new RegExp(`(${g})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${_}" (${g}): `+b.message)}}let k=E?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;u||(k=w&&c.length<2?`(?:/${k})`:"/"+k),w&&(k+="?"),l+=k,d+=20,w&&(d+=-8),E&&(d+=-20),g===".*"&&(d+=-50)}p.push(d)}s.push(p)}if(t.strict&&t.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}t.strict||(l+="/?"),t.end?l+="$":t.strict&&(l+="(?:/|$)");const r=new RegExp(l,t.sensitive?"":"i");function i(c){const p=c.match(r),u={};if(!p)return null;for(let f=1;f<p.length;f++){const d=p[f]||"",_=a[f-1];u[_.name]=d&&_.repeatable?d.split("/"):d}return u}function o(c){let p="",u=!1;for(const f of e){(!u||!p.endsWith("/"))&&(p+="/"),u=!1;for(const d of f)if(d.type===0)p+=d.value;else if(d.type===1){const{value:_,repeatable:E,optional:w}=d,y=_ in c?c[_]:"";if(hn(y)&&!E)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const g=hn(y)?y.join("/"):y;if(!g)if(w)f.length<2&&(p.endsWith("/")?p=p.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);p+=g}}return p||"/"}return{re:r,score:s,keys:a,parse:i,stringify:o}}function qg(e,n){let t=0;for(;t<e.length&&t<n.length;){const s=n[t]-e[t];if(s)return s;t++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function Lg(e,n){let t=0;const s=e.score,l=n.score;for(;t<s.length&&t<l.length;){const a=qg(s[t],l[t]);if(a)return a;t++}if(Math.abs(l.length-s.length)===1){if(Zi(s))return 1;if(Zi(l))return-1}return l.length-s.length}function Zi(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const Fg={type:0,value:""},Bg=/[a-zA-Z0-9_]/;function Dg(e){if(!e)return[[]];if(e==="/")return[[Fg]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,s=t;const l=[];let a;function r(){a&&l.push(a),a=[]}let i=0,o,c="",p="";function u(){!c||(t===0?a.push({type:0,value:c}):t===1||t===2||t===3?(a.length>1&&(o==="*"||o==="+")&&n(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:c,regexp:p,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):n("Invalid state to consume buffer"),c="")}function f(){c+=o}for(;i<e.length;){if(o=e[i++],o==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:o==="/"?(c&&u(),r()):o===":"?(u(),t=1):f();break;case 4:f(),t=s;break;case 1:o==="("?t=2:Bg.test(o)?f():(u(),t=0,o!=="*"&&o!=="?"&&o!=="+"&&i--);break;case 2:o===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+o:t=3:p+=o;break;case 3:u(),t=0,o!=="*"&&o!=="?"&&o!=="+"&&i--,p="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${c}"`),u(),r(),l}function Hg(e,n,t){const s=$g(Dg(e.path),t),l=he(s,{record:e,parent:n,children:[],alias:[]});return n&&!l.record.aliasOf==!n.record.aliasOf&&n.children.push(l),l}function Vg(e,n){const t=[],s=new Map;n=no({strict:!1,end:!0,sensitive:!1},n);function l(p){return s.get(p)}function a(p,u,f){const d=!f,_=Ug(p);_.aliasOf=f&&f.record;const E=no(n,p),w=[_];if("alias"in p){const k=typeof p.alias=="string"?[p.alias]:p.alias;for(const b of k)w.push(he({},_,{components:f?f.record.components:_.components,path:b,aliasOf:f?f.record:_}))}let y,g;for(const k of w){const{path:b}=k;if(u&&b[0]!=="/"){const S=u.record.path,L=S[S.length-1]==="/"?"":"/";k.path=u.record.path+(b&&L+b)}if(y=Hg(k,u,E),f?f.alias.push(y):(g=g||y,g!==y&&g.alias.push(y),d&&p.name&&!eo(y)&&r(p.name)),_.children){const S=_.children;for(let L=0;L<S.length;L++)a(S[L],y,f&&f.children[L])}f=f||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&o(y)}return g?()=>{r(g)}:cs}function r(p){if(Op(p)){const u=s.get(p);u&&(s.delete(p),t.splice(t.indexOf(u),1),u.children.forEach(r),u.alias.forEach(r))}else{const u=t.indexOf(p);u>-1&&(t.splice(u,1),p.record.name&&s.delete(p.record.name),p.children.forEach(r),p.alias.forEach(r))}}function i(){return t}function o(p){let u=0;for(;u<t.length&&Lg(p,t[u])>=0&&(p.record.path!==t[u].record.path||!$p(p,t[u]));)u++;t.splice(u,0,p),p.record.name&&!eo(p)&&s.set(p.record.name,p)}function c(p,u){let f,d={},_,E;if("name"in p&&p.name){if(f=s.get(p.name),!f)throw Ht(1,{location:p});E=f.record.name,d=he(Xi(u.params,f.keys.filter(g=>!g.optional).map(g=>g.name)),p.params&&Xi(p.params,f.keys.map(g=>g.name))),_=f.stringify(d)}else if("path"in p)_=p.path,f=t.find(g=>g.re.test(_)),f&&(d=f.parse(_),E=f.record.name);else{if(f=u.name?s.get(u.name):t.find(g=>g.re.test(u.path)),!f)throw Ht(1,{location:p,currentLocation:u});E=f.record.name,d=he({},u.params,p.params),_=f.stringify(d)}const w=[];let y=f;for(;y;)w.unshift(y.record),y=y.parent;return{name:E,path:_,params:d,matched:w,meta:zg(w)}}return e.forEach(p=>a(p)),{addRoute:a,resolve:c,removeRoute:r,getRoutes:i,getRecordMatcher:l}}function Xi(e,n){const t={};for(const s of n)s in e&&(t[s]=e[s]);return t}function Ug(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Kg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Kg(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const s in e.components)n[s]=typeof t=="boolean"?t:t[s];return n}function eo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function zg(e){return e.reduce((n,t)=>he(n,t.meta),{})}function no(e,n){const t={};for(const s in e)t[s]=s in n?n[s]:e[s];return t}function $p(e,n){return n.children.some(t=>t===e||$p(e,t))}const qp=/#/g,Wg=/&/g,Gg=/\//g,Jg=/=/g,Yg=/\?/g,Lp=/\+/g,Qg=/%5B/g,Zg=/%5D/g,Fp=/%5E/g,Xg=/%60/g,Bp=/%7B/g,ey=/%7C/g,Dp=/%7D/g,ny=/%20/g;function Or(e){return encodeURI(""+e).replace(ey,"|").replace(Qg,"[").replace(Zg,"]")}function ty(e){return Or(e).replace(Bp,"{").replace(Dp,"}").replace(Fp,"^")}function $a(e){return Or(e).replace(Lp,"%2B").replace(ny,"+").replace(qp,"%23").replace(Wg,"%26").replace(Xg,"`").replace(Bp,"{").replace(Dp,"}").replace(Fp,"^")}function sy(e){return $a(e).replace(Jg,"%3D")}function ly(e){return Or(e).replace(qp,"%23").replace(Yg,"%3F")}function ay(e){return e==null?"":ly(e).replace(Gg,"%2F")}function xl(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function ry(e){const n={};if(e===""||e==="?")return n;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let l=0;l<s.length;++l){const a=s[l].replace(Lp," "),r=a.indexOf("="),i=xl(r<0?a:a.slice(0,r)),o=r<0?null:xl(a.slice(r+1));if(i in n){let c=n[i];hn(c)||(c=n[i]=[c]),c.push(o)}else n[i]=o}return n}function to(e){let n="";for(let t in e){const s=e[t];if(t=sy(t),s==null){s!==void 0&&(n+=(n.length?"&":"")+t);continue}(hn(s)?s.map(a=>a&&$a(a)):[s&&$a(s)]).forEach(a=>{a!==void 0&&(n+=(n.length?"&":"")+t,a!=null&&(n+="="+a))})}return n}function iy(e){const n={};for(const t in e){const s=e[t];s!==void 0&&(n[t]=hn(s)?s.map(l=>l==null?null:""+l):s==null?s:""+s)}return n}const oy=Symbol(""),so=Symbol(""),Mr=Symbol(""),$r=Symbol(""),qa=Symbol("");function Zt(){let e=[];function n(s){return e.push(s),()=>{const l=e.indexOf(s);l>-1&&e.splice(l,1)}}function t(){e=[]}return{add:n,list:()=>e,reset:t}}function qn(e,n,t,s,l){const a=s&&(s.enterCallbacks[l]=s.enterCallbacks[l]||[]);return()=>new Promise((r,i)=>{const o=u=>{u===!1?i(Ht(4,{from:t,to:n})):u instanceof Error?i(u):Ng(u)?i(Ht(2,{from:n,to:u})):(a&&s.enterCallbacks[l]===a&&typeof u=="function"&&a.push(u),r())},c=e.call(s&&s.instances[l],n,t,o);let p=Promise.resolve(c);e.length<3&&(p=p.then(o)),p.catch(u=>i(u))})}function ia(e,n,t,s){const l=[];for(const a of e)for(const r in a.components){let i=a.components[r];if(!(n!=="beforeRouteEnter"&&!a.instances[r]))if(cy(i)){const c=(i.__vccOpts||i)[n];c&&l.push(qn(c,t,s,a,r))}else{let o=i();l.push(()=>o.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));const p=mg(c)?c.default:c;a.components[r]=p;const f=(p.__vccOpts||p)[n];return f&&qn(f,t,s,a,r)()}))}}return l}function cy(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function lo(e){const n=un(Mr),t=un($r),s=Ye(()=>n.resolve(an(e.to))),l=Ye(()=>{const{matched:o}=s.value,{length:c}=o,p=o[c-1],u=t.matched;if(!p||!u.length)return-1;const f=u.findIndex(Dt.bind(null,p));if(f>-1)return f;const d=ao(o[c-2]);return c>1&&ao(p)===d&&u[u.length-1].path!==d?u.findIndex(Dt.bind(null,o[c-2])):f}),a=Ye(()=>l.value>-1&&hy(t.params,s.value.params)),r=Ye(()=>l.value>-1&&l.value===t.matched.length-1&&Ap(t.params,s.value.params));function i(o={}){return fy(o)?n[an(e.replace)?"replace":"push"](an(e.to)).catch(cs):Promise.resolve()}return{route:s,href:Ye(()=>s.value.href),isActive:a,isExactActive:r,navigate:i}}const py=_t({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:lo,setup(e,{slots:n}){const t=zt(lo(e)),{options:s}=un(Mr),l=Ye(()=>({[ro(e.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[ro(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const a=n.default&&n.default(t);return e.custom?a:Ps("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:l.value},a)}}}),uy=py;function fy(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function hy(e,n){for(const t in n){const s=n[t],l=e[t];if(typeof s=="string"){if(s!==l)return!1}else if(!hn(l)||l.length!==s.length||s.some((a,r)=>a!==l[r]))return!1}return!0}function ao(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ro=(e,n,t)=>e!=null?e:n!=null?n:t,dy=_t({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const s=un(qa),l=Ye(()=>e.route||s.value),a=un(so,0),r=Ye(()=>{let c=an(a);const{matched:p}=l.value;let u;for(;(u=p[c])&&!u.components;)c++;return c}),i=Ye(()=>l.value.matched[r.value]);ss(so,Ye(()=>r.value+1)),ss(oy,i),ss(qa,l);const o=ve();return kn(()=>[o.value,i.value,e.name],([c,p,u],[f,d,_])=>{p&&(p.instances[u]=c,d&&d!==p&&c&&c===f&&(p.leaveGuards.size||(p.leaveGuards=d.leaveGuards),p.updateGuards.size||(p.updateGuards=d.updateGuards))),c&&p&&(!d||!Dt(p,d)||!f)&&(p.enterCallbacks[u]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=l.value,p=e.name,u=i.value,f=u&&u.components[p];if(!f)return io(t.default,{Component:f,route:c});const d=u.props[p],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,w=Ps(f,he({},_,n,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(u.instances[p]=null)},ref:o}));return io(t.default,{Component:w,route:c})||w}}});function io(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const my=dy;function gy(e){const n=Vg(e.routes,e),t=e.parseQuery||ry,s=e.stringifyQuery||to,l=e.history,a=Zt(),r=Zt(),i=Zt(),o=Ro(On);let c=On;kt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=aa.bind(null,C=>""+C),u=aa.bind(null,ay),f=aa.bind(null,xl);function d(C,U){let D,W;return Op(C)?(D=n.getRecordMatcher(C),W=U):W=C,n.addRoute(W,D)}function _(C){const U=n.getRecordMatcher(C);U&&n.removeRoute(U)}function E(){return n.getRoutes().map(C=>C.record)}function w(C){return!!n.getRecordMatcher(C)}function y(C,U){if(U=he({},U||o.value),typeof C=="string"){const v=ra(t,C,U.path),x=n.resolve({path:v.path},U),T=l.createHref(v.fullPath);return he(v,x,{params:f(x.params),hash:xl(v.hash),redirectedFrom:void 0,href:T})}let D;if("path"in C)D=he({},C,{path:ra(t,C.path,U.path).path});else{const v=he({},C.params);for(const x in v)v[x]==null&&delete v[x];D=he({},C,{params:u(v)}),U.params=u(U.params)}const W=n.resolve(D,U),fe=C.hash||"";W.params=p(f(W.params));const h=_g(s,he({},C,{hash:ty(fe),path:W.path})),m=l.createHref(h);return he({fullPath:h,hash:fe,query:s===to?iy(C.query):C.query||{}},W,{redirectedFrom:void 0,href:m})}function g(C){return typeof C=="string"?ra(t,C,o.value.path):he({},C)}function k(C,U){if(c!==C)return Ht(8,{from:U,to:C})}function b(C){return I(C)}function S(C){return b(he(g(C),{replace:!0}))}function L(C){const U=C.matched[C.matched.length-1];if(U&&U.redirect){const{redirect:D}=U;let W=typeof D=="function"?D(C):D;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=g(W):{path:W},W.params={}),he({query:C.query,hash:C.hash,params:"path"in W?{}:C.params},W)}}function I(C,U){const D=c=y(C),W=o.value,fe=C.state,h=C.force,m=C.replace===!0,v=L(D);if(v)return I(he(g(v),{state:typeof v=="object"?he({},fe,v.state):fe,force:h,replace:m}),U||D);const x=D;x.redirectedFrom=U;let T;return!h&&vg(s,W,D)&&(T=Ht(16,{to:x,from:W}),dn(W,W,!0,!1)),(T?Promise.resolve(T):M(x,W)).catch(R=>bn(R)?bn(R,2)?R:Rn(R):oe(R,x,W)).then(R=>{if(R){if(bn(R,2))return I(he({replace:m},g(R.to),{state:typeof R.to=="object"?he({},fe,R.to.state):fe,force:h}),U||x)}else R=P(x,W,!0,m,fe);return O(x,W,R),R})}function j(C,U){const D=k(C,U);return D?Promise.reject(D):Promise.resolve()}function N(C){const U=bt.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(C):C()}function M(C,U){let D;const[W,fe,h]=yy(C,U);D=ia(W.reverse(),"beforeRouteLeave",C,U);for(const v of W)v.leaveGuards.forEach(x=>{D.push(qn(x,C,U))});const m=j.bind(null,C,U);return D.push(m),Pe(D).then(()=>{D=[];for(const v of a.list())D.push(qn(v,C,U));return D.push(m),Pe(D)}).then(()=>{D=ia(fe,"beforeRouteUpdate",C,U);for(const v of fe)v.updateGuards.forEach(x=>{D.push(qn(x,C,U))});return D.push(m),Pe(D)}).then(()=>{D=[];for(const v of C.matched)if(v.beforeEnter&&!U.matched.includes(v))if(hn(v.beforeEnter))for(const x of v.beforeEnter)D.push(qn(x,C,U));else D.push(qn(v.beforeEnter,C,U));return D.push(m),Pe(D)}).then(()=>(C.matched.forEach(v=>v.enterCallbacks={}),D=ia(h,"beforeRouteEnter",C,U),D.push(m),Pe(D))).then(()=>{D=[];for(const v of r.list())D.push(qn(v,C,U));return D.push(m),Pe(D)}).catch(v=>bn(v,8)?v:Promise.reject(v))}function O(C,U,D){for(const W of i.list())N(()=>W(C,U,D))}function P(C,U,D,W,fe){const h=k(C,U);if(h)return h;const m=U===On,v=kt?history.state:{};D&&(W||m?l.replace(C.fullPath,he({scroll:m&&v&&v.scroll},fe)):l.push(C.fullPath,fe)),o.value=C,dn(C,U,D,m),Rn()}let B;function q(){B||(B=l.listen((C,U,D)=>{if(!qs.listening)return;const W=y(C),fe=L(W);if(fe){I(he(fe,{replace:!0}),W).catch(cs);return}c=W;const h=o.value;kt&&Sg(Gi(h.fullPath,D.delta),Wl()),M(W,h).catch(m=>bn(m,12)?m:bn(m,2)?(I(m.to,W).then(v=>{bn(v,20)&&!D.delta&&D.type===Ss.pop&&l.go(-1,!1)}).catch(cs),Promise.reject()):(D.delta&&l.go(-D.delta,!1),oe(m,W,h))).then(m=>{m=m||P(W,h,!1),m&&(D.delta&&!bn(m,8)?l.go(-D.delta,!1):D.type===Ss.pop&&bn(m,20)&&l.go(-1,!1)),O(W,h,m)}).catch(cs)}))}let te=Zt(),ee=Zt(),ie;function oe(C,U,D){Rn(C);const W=ee.list();return W.length?W.forEach(fe=>fe(C,U,D)):console.error(C),Promise.reject(C)}function Ke(){return ie&&o.value!==On?Promise.resolve():new Promise((C,U)=>{te.add([C,U])})}function Rn(C){return ie||(ie=!C,q(),te.list().forEach(([U,D])=>C?D(C):U()),te.reset()),C}function dn(C,U,D,W){const{scrollBehavior:fe}=e;if(!kt||!fe)return Promise.resolve();const h=!D&&Tg(Gi(C.fullPath,0))||(W||!D)&&history.state&&history.state.scroll||null;return Pl().then(()=>fe(C,U,h)).then(m=>m&&Cg(m)).catch(m=>oe(m,C,U))}const Le=C=>l.go(C);let vt;const bt=new Set,qs={currentRoute:o,listening:!0,addRoute:d,removeRoute:_,hasRoute:w,getRoutes:E,resolve:y,options:e,push:b,replace:S,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:a.add,beforeResolve:r.add,afterEach:i.add,onError:ee.add,isReady:Ke,install(C){const U=this;C.component("RouterLink",uy),C.component("RouterView",my),C.config.globalProperties.$router=U,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>an(o)}),kt&&!vt&&o.value===On&&(vt=!0,b(l.location).catch(fe=>{}));const D={};for(const fe in On)D[fe]=Ye(()=>o.value[fe]);C.provide(Mr,U),C.provide($r,zt(D)),C.provide(qa,o);const W=C.unmount;bt.add(C),C.unmount=function(){bt.delete(C),bt.size<1&&(c=On,B&&B(),B=null,o.value=On,vt=!1,ie=!1),W()}}};function Pe(C){return C.reduce((U,D)=>U.then(()=>N(D)),Promise.resolve())}return qs}function yy(e,n){const t=[],s=[],l=[],a=Math.max(n.matched.length,e.matched.length);for(let r=0;r<a;r++){const i=n.matched[r];i&&(e.matched.find(c=>Dt(c,i))?s.push(i):t.push(i));const o=e.matched[r];o&&(n.matched.find(c=>Dt(c,o))||l.push(o))}return[t,s,l]}function $s(){return un($r)}var _y="/assets/close.32d69e24.svg",vy="/assets/more.2b04406d.svg";function by(e,n){let t;return function(s){t&&clearTimeout(t),t=setTimeout(()=>{e(s)},n)}}var jy="/assets/top.4e31b01b.svg";const Ey=e=>(Gn("data-v-4c27e79f"),e=e(),Jn(),e),xy=Ey(()=>z("img",{src:jy},null,-1)),wy=[xy],ky={__name:"back-top",setup(e){const n=ve(!1),t=ve(null),s=a=>{a.target.scrollTop>50?n.value=!0:n.value=!1};function l(){t.value.scrollTop=0}return Xe(()=>{t.value=document.querySelector(".index-container"),t.value.addEventListener("scroll",s)}),Wt(()=>{t.value.removeEventListener("scroll",s)}),(a,r)=>(Z(),le("div",{class:Cn(["back-top",{hide:!n.value}]),title:"\u8FD4\u56DE\u9876\u90E8",onClick:l},wy,2))}};var Cy=Ue(ky,[["__scopeId","data-v-4c27e79f"]]);const Sy=e=>(Gn("data-v-73d9fe7a"),e=e(),Jn(),e),Ty={class:"header-container"},Iy=Sy(()=>z("h1",{class:"logo"},[z("a",{href:"/"},"\u65E7\u68A6")],-1)),Ry={class:"nav"},Py=["onClick"],Ay=["href"],Ny={key:0,src:_y},Oy={key:1,src:vy},My={class:"main-container"},$y={class:"main"},qy={class:"mobile-menus-container"},Ly={class:"navbar-links"},Fy=["href"],By={__name:"page-layout",setup(e){const n=$s(),t=ve(""),s=[{name:"\u5206\u7C7B",link:"/article-category/Git"},{name:"\u5F52\u6863",link:"/article-archive"},{name:"\u53CB\u94FE",link:"/custom/friends"},{name:"\u7559\u8A00",link:"/custom/messages"},{name:"\u5173\u4E8E",link:"/custom/about"}],l=ve(!1),a=by(()=>{window.innerWidth>768&&r()},300);function r(){l.value=!1}return Xe(()=>{t.value=n.path,window.addEventListener("resize",a)}),Wt(()=>{window.removeEventListener("resize",a)}),(i,o)=>{const c=ar("router-view");return Z(),le(ue,null,[z("div",{class:Cn(["index-container",{active:l.value}])},[z("div",Ty,[z("header",null,[Iy,z("ul",Ry,[(Z(),le(ue,null,_n(s,p=>z("li",{class:Cn(["nav-item",{active:t.value===p.link}]),key:p.link,onClick:u=>t.value=p.link},[z("a",{href:p.link},Ie(p.name),9,Ay)],10,Py)),64)),z("div",{class:"toggle-menus",onClick:o[0]||(o[0]=p=>l.value=!l.value)},[l.value?(Z(),le("img",Ny)):(Z(),le("img",Oy))])])])]),z("div",My,[z("div",$y,[pe(c)])]),z("div",qy,[z("nav",Ly,[(Z(),le(ue,null,_n(s,p=>z("div",{class:"navbar-links__item",key:p.link},[z("a",{href:p.link,onClick:r},Ie(p.name),9,Fy)])),64))])])],2),pe(Cy)],64)}}};var Dy=Ue(By,[["__scopeId","data-v-73d9fe7a"]]),Gl=[{name:"git-base",title:"Git\u57FA\u672C\u64CD\u4F5C",date:"Aug 11, 2021",category:["Git"],content:`<h3>\u521B\u5EFA\u4ED3\u5E93</h3>
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
`,comment:!0,footer:!0,abstract:`\u521B\u5EFA\u4ED3\u5E93
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
`,comment:!0,footer:!0,abstract:`\u4E00\u3001\u914D\u7F6EESlint
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
`,comment:!0,footer:!0,abstract:`\u9632\u6296
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
`,comment:!0,footer:!0,abstract:`JSONP
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
`,comment:!0,footer:!0,abstract:`\u529F\u80FD\u4ECB\u7ECD

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
`,comment:!0,footer:!0,abstract:`\u5355\u884C\u7701\u7565
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
`,comment:!0,footer:!0,abstract:`\u4E00\u3001\u4FEE\u6539\u539F\u751F input \u6837\u5F0F
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
`,comment:!0,footer:!0,abstract:`
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
`,comment:!0,footer:!0,abstract:`
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

`}];const Hy={class:"pagination-container"},Vy={class:"page-index"},Uy={__name:"pagination",props:{pageIndex:Number,pageSize:Number,length:Number},emits:["pageChange"],setup(e,{emit:n}){const t=e;function s(){const a=t.pageIndex-1;n("pageChange",{pageIndex:a})}function l(){const a=t.pageIndex+1;n("pageChange",{pageIndex:a})}return(a,r)=>(Z(),le("div",Hy,[z("a",{style:ot({visibility:e.pageIndex>1?"visible":"hidden"}),class:"arrow",onClick:r[0]||(r[0]=i=>s())}," \u2190 \u4E0A\u4E00\u9875 ",4),z("span",Vy,Ie(e.pageIndex),1),z("a",{style:ot({visibility:e.pageIndex*e.pageSize<e.length?"visible":"hidden"}),class:"arrow",onClick:r[1]||(r[1]=i=>l())}," \u4E0B\u4E00\u9875 \u2192 ",4)]))}};const Hp=e=>(Gn("data-v-3fef2317"),e=e(),Jn(),e),Ky={class:"footer-container"},zy=Hp(()=>z("div",{class:"site-pv"},[z("span",{id:"busuanzi_container_site_pv"},[vs(" \u672C\u7AD9\u603B\u8BBF\u95EE\u91CF"),z("span",{id:"busuanzi_value_site_pv"}),vs("\u6B21 ")])],-1)),Wy=Hp(()=>z("div",{class:"tip"},"\u7AD9\u70B9\u6301\u7EED\u4F18\u5316\u4E2D...",-1)),Gy={__name:"footer",setup(e){const n=new Date().getFullYear();return(t,s)=>(Z(),le("div",Ky,[z("div",null,"\xA9 2021-"+Ie(an(n))+" | \u65E7\u68A6",1),zy,Wy]))}};var qr=Ue(Gy,[["__scopeId","data-v-3fef2317"]]);const Jy=e=>(Gn("data-v-585ba1ea"),e=e(),Jn(),e),Yy={class:"home-container"},Qy={class:"article-time"},Zy={class:"article-title"},Xy=["href"],e_=Jy(()=>z("div",{class:"article-line"},null,-1)),n_=["innerHTML"],t_={__name:"article-list",setup(e){const n=Gl.sort((o,c)=>new Date(c.date).getTime()-new Date(o.date).getTime()),t=ve(n),s=$s(),l=ve(1),a=ve(5);kn(()=>s.params.page,o=>{l.value=+o||1,i()},{immediate:!0});function r(o){const{pageIndex:c}=o;location.href=`/article-list/${c}`}function i(){const o=l.value,c=a.value,p=(o-1)*c,u=p+c;t.value=n.slice(p,u)}return(o,c)=>(Z(),le("div",Yy,[(Z(!0),le(ue,null,_n(t.value,p=>(Z(),le("div",{class:"article-item",key:p.name},[z("time",Qy,Ie(p.date),1),z("h2",Zy,[z("a",{href:"/article-detail/"+p.name},Ie(p.title),9,Xy)]),e_,z("div",{class:"abstract",innerHTML:p.abstract},null,8,n_)]))),128)),pe(Uy,{"page-index":l.value,"onUpdate:pageIndex":c[0]||(c[0]=p=>l.value=p),"page-size":a.value,length:an(n).length,onPageChange:r},null,8,["page-index","page-size","length"]),pe(qr)]))}};var s_=Ue(t_,[["__scopeId","data-v-585ba1ea"]]);const l_="modulepreload",oo={},a_="/",r_=function(n,t){return!t||t.length===0?n():Promise.all(t.map(s=>{if(s=`${a_}${s}`,s in oo)return;oo[s]=!0;const l=s.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const r=document.createElement("link");if(r.rel=l?"stylesheet":l_,l||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),l)return new Promise((i,o)=>{r.addEventListener("load",i),r.addEventListener("error",()=>o(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>n())},i_=["id","host","repo","repoid","category","categoryid","mapping","term","strict","reactionsenabled","emitmetadata","inputposition","theme","lang","loading"],o_=_t({__name:"Giscus",props:{id:null,host:null,repo:null,repoId:null,category:null,categoryId:null,mapping:null,term:null,theme:null,strict:null,reactionsEnabled:null,emitMetadata:null,inputPosition:null,lang:null,loading:null},setup(e){const n=ve(!1);return Xe(()=>{n.value=!0,r_(()=>import("./giscus-a53917f0.a14eedf1.js"),[])}),(t,s)=>n.value?(Z(),le("giscus-widget",{key:0,id:e.id,host:e.host,repo:e.repo,repoid:e.repoId,category:e.category,categoryid:e.categoryId,mapping:e.mapping,term:e.term,strict:e.strict,reactionsenabled:e.reactionsEnabled,emitmetadata:e.emitMetadata,inputposition:e.inputPosition,theme:e.theme,lang:e.lang,loading:e.loading},null,8,i_)):bs("",!0)}}),Vp={__name:"comment",setup(e){return(n,t)=>(Z(),Un(an(o_),{id:"comments",repo:"hai-zou/poseidon",repoId:"R_kgDOIPqaJQ",category:"General",categoryId:"DIC_kwDOIPqaJc4CW4xW",mapping:"pathname",term:"Welcome to component!",inputPosition:"top",theme:"light",lang:"zh-CN",loading:"lazy"}))}};var c_="/assets/view.3e5c4e53.svg";const p_={},Up=e=>(Gn("data-v-3213da64"),e=e(),Jn(),e),u_={id:"busuanzi_container_page_pv"},f_=Up(()=>z("img",{src:c_},null,-1)),h_=Up(()=>z("span",{id:"busuanzi_value_page_pv"},null,-1)),d_=[f_,h_];function m_(e,n){return Z(),le("span",u_,d_)}var g_=Ue(p_,[["render",m_],["__scopeId","data-v-3213da64"]]);const y_={class:"article-content"},__={class:"detail-title"},v_={class:"post-info"},b_={class:"detail-container markdown-body"},j_=["innerHTML"],E_={__name:"article-detail",setup(e){const n=ve({}),t=$s();Xe(()=>{const{name:l}=t.params;n.value=s(l)});function s(l){return Gl.find(a=>a.name===l)||{}}return(l,a)=>(Z(),le(ue,null,[z("div",y_,[z("h1",__,Ie(n.value.title),1),z("div",v_,[z("time",null,Ie(n.value.date),1),pe(g_)]),z("div",b_,[z("div",{innerHTML:n.value.content},null,8,j_)]),pe(Vp)]),pe(qr)],64))}};var x_=Ue(E_,[["__scopeId","data-v-3a5aed2d"]]);const w_=e=>(Gn("data-v-39146a8d"),e=e(),Jn(),e),k_={class:"category-list"},C_=["href"],S_=["href"],T_=w_(()=>z("span",null," \u2014 ",-1)),I_={__name:"article-category",setup(e){const n=$s(),t=ve([]),s=ve({}),l=ve([]),a=ve("");Xe(()=>{const{category:o}=n.params;r(),o&&(a.value=o,i(o))});function r(){const o=[],c={};for(const p of Gl){const u=p.category||[];o.push(...u);for(const f of u)c[f]||(c[f]=[]),c[f].push(p)}t.value=new Set([...o]),s.value=c}function i(o){a.value=o,l.value=s.value[o]}return(o,c)=>(Z(),le(ue,null,[z("ul",k_,[(Z(!0),le(ue,null,_n(t.value,p=>(Z(),le("li",{key:p,class:Cn({active:a.value===p})},[z("a",{href:"/article-category/"+p},Ie(p),9,C_)],2))),128))]),(Z(!0),le(ue,null,_n(l.value,p=>(Z(),le("ul",{class:"category-item",key:p},[z("li",null,[z("a",{href:"/article-detail/"+p.name},[z("span",null,Ie(p.title),1),T_,z("span",null,Ie(p.date),1)],8,S_)])]))),128))],64))}};var R_=Ue(I_,[["__scopeId","data-v-39146a8d"]]);const P_={class:"article-wrap"},A_=["href"],N_={__name:"article-archive",setup(e){const n=ve([]);Xe(()=>{t()});function t(){const s=Gl.sort((a,r)=>new Date(r.date).getTime()-new Date(a.date).getTime()),l={};for(const a of s){const r=new Date(a.date).getFullYear();l[r]||(l[r]=[]),l[r].push(a)}n.value=Object.entries(l).map(a=>{const[r,i]=a;return{year:r,children:i}}).reverse()}return(s,l)=>(Z(!0),le(ue,null,_n(n.value,a=>(Z(),le("div",{class:"archive-container",key:a},[z("h3",null,Ie(a.year),1),z("ul",P_,[(Z(!0),le(ue,null,_n(a.children,r=>(Z(),le("li",{class:"article-item",key:r},[z("a",{href:"/article-detail/"+r.name},Ie(r.title),9,A_)]))),128))])]))),128))}};var O_=Ue(N_,[["__scopeId","data-v-7a7fc9fe"]]),M_=[{name:"about",date:"",content:`<h2>\u5173\u4E8E\u6211</h2>
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
<blockquote>
<p>\u611F\u5174\u8DA3\u7684\u8BDD\uFF0C\u70B9\u51FB <a href='/site-commits'>\u8FD9\u91CC</a> \u67E5\u770B\u672C\u7AD9\u7684\u53D1\u5C55\u5386\u7A0B\u3002</p>
</blockquote>
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
<li><code>@docsearch/js</code> \u57FA\u4E8EAlgolia\u5F00\u53D1\u7684\u641C\u7D22\u63D2\u4EF6\uFF08\u6682\u672A\u7533\u8BF7\u6210\u529F\uFF09</li>
<li><code>@giscus/vue</code> \u4E00\u6B3E\u57FA\u4E8EGitHub\u7684\u8BC4\u8BBA\u63D2\u4EF6</li>
<li><code>\u4E0D\u849C\u5B50</code> \u6781\u7B80\u7F51\u9875\u8BA1\u6570\u5668</li>
</ul>
`,comment:!1,footer:!0,abstract:`\u5173\u4E8E\u6211
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

\u611F\u5174\u8DA3\u7684\u8BDD\uFF0C\u70B9\u51FB \u8FD9\u91CC \u67E5\u770B\u672C\u7AD9\u7684\u53D1\u5C55\u5386\u7A0B\u3002


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
@docsearch/js \u57FA\u4E8EAlgolia\u5F00\u53D1\u7684\u641C\u7D22\u63D2\u4EF6\uFF08\u6682\u672A\u7533\u8BF7\u6210\u529F\uFF09
@giscus/vue \u4E00\u6B3E\u57FA\u4E8EGitHub\u7684\u8BC4\u8BBA\u63D2\u4EF6
\u4E0D\u849C\u5B50 \u6781\u7B80\u7F51\u9875\u8BA1\u6570\u5668

`},{name:"friends",date:"",content:`<blockquote>
<p><a href='https://github.com/hai-zou/Poseidon/edit/main/src/data/links.js'>\u5982\u4F55\u6DFB\u52A0\u53CB\u94FE</a></p>
</blockquote>
<friend-links />`,comment:!1,footer:!1,abstract:`
\u5982\u4F55\u6DFB\u52A0\u53CB\u94FE

`},{name:"messages",title:"\u7559\u8A00\u677F",date:"",content:`<blockquote>
<p>\u6709\u4EC0\u4E48\u95EE\u9898\u5C31\u7ED9\u6211\u7559\u8A00\u5427\uFF01
\u6B22\u8FCE\u5927\u5BB6\u4E00\u8D77\u6765\u4EA4\u6D41\u63A2\u8BA8\uFF01</p>
</blockquote>
`,comment:!0,footer:!0,abstract:`
\u6709\u4EC0\u4E48\u95EE\u9898\u5C31\u7ED9\u6211\u7559\u8A00\u5427\uFF01
\u6B22\u8FCE\u5927\u5BB6\u4E00\u8D77\u6765\u4EA4\u6D41\u63A2\u8BA8\uFF01

`}];const $_=_t({props:{html:{type:String,required:!0}},computed:{template(){return this.html||""}},render(){return Ps(Pp(this.template),{...this.$attrs})}});const q_={class:"custom-comtainer"},L_={class:"markdown-body"},F_={__name:"custom",setup(e){const n=ve({}),t=$s();Xe(()=>{const{link:l}=t.params;n.value=s(l)});function s(l){return M_.find(a=>a.name===l)||{}}return(l,a)=>(Z(),le(ue,null,[z("div",q_,[z("div",L_,[pe($_,{html:n.value.content||""},null,8,["html"])]),n.value.comment?(Z(),Un(Vp,{key:0})):bs("",!0)]),n.value.footer?(Z(),Un(qr,{key:0})):bs("",!0)],64))}};var B_=Ue(F_,[["__scopeId","data-v-6432a46a"]]),D_="/assets/loading.ffeb9370.svg";const H_={},V_={class:"spin-icon",src:D_};function U_(e,n){return Z(),le("img",V_)}var K_=Ue(H_,[["render",U_],["__scopeId","data-v-f5ee1996"]]);const z_=e=>(Gn("data-v-28157d8e"),e=e(),Jn(),e),W_=z_(()=>z("h2",{class:"title"},"Commits",-1)),G_={class:"commit-list"},J_={class:"message"},Y_={class:"date"},Q_={class:"commit-footer"},Z_={key:0,class:"loading-more"},X_={key:1,class:"no-data"},ev={__name:"site-commits",setup(e){const n=ve([]),t=ve(!1),s=ve(1);function l(r){t.value=!0,fetch(`https://api.github.com/repos/hai-zou/poseidon/commits?page=${r}&per_page=10`).then(i=>i.json()).then(i=>{t.value=!1,n.value.push(...i)}).catch(()=>{t.value=!1})}function a(){l(++s.value)}return Xe(()=>{l(s.value)}),(r,i)=>(Z(),le(ue,null,[W_,z("ul",G_,[(Z(!0),le(ue,null,_n(n.value,o=>(Z(),le("li",{key:o.sha,class:"commit-item"},[z("p",J_,Ie(o.commit.message),1),z("p",Y_,Ie(o.commit.committer.date),1)]))),128))]),z("footer",Q_,[n.value.length?(Z(),le("div",Z_,[z("a",{onClick:a},"\u52A0\u8F7D\u66F4\u591A"),t.value?(Z(),Un(K_,{key:0})):bs("",!0)])):(Z(),le("div",X_,"\u6682\u65E0\u6570\u636E"))])],64))}};var nv=Ue(ev,[["__scopeId","data-v-28157d8e"]]);const tv={};function sv(e,n){return Z(),le("div",null,"404")}var lv=Ue(tv,[["render",sv]]);const av=[{path:"/",component:Dy,redirect:"/article-list/1/",children:[{path:"/article-list/:page",component:s_},{path:"/article-detail/:name",component:x_},{path:"/article-category/:category",component:R_},{path:"/article-archive",component:O_},{path:"/custom/:link",component:B_},{path:"/site-commits",component:nv},{path:"/:catchAll(.*)",component:lv}]}],rv=gy({history:Ag(),routes:av});var iv=[{name:"\u5DE6\u773C\u4F1A\u966A\u53F3\u773C\u54ED\u306E\u535A\u5BA2",desc:"\u53E6\u4E00\u4E2A\u4E16\u754C",link:"https://qkongtao.cn/"},{name:"\u5B89\u77E5\u9C7C",desc:"\u751F\u6D3B\u660E\u6717\uFF0C\u4E07\u7269\u53EF\u7231",link:"https://anzhiy.cn/"},{name:"\u80E1\u6D82\u8BF4",desc:"hutusi.com",link:"https://hutusi.com/"},{name:"CC\u7684\u90E8\u843D\u683C",desc:"CC\u5EB7\u7EB3\u767E\u5DDD",link:"https://blog.ccknbc.cc/"}];const ov={class:"link-container"},cv=["href"],pv={class:"desc"},uv={__name:"friend-links",setup(e){return(n,t)=>(Z(),le("ul",ov,[(Z(!0),le(ue,null,_n(an(iv),s=>(Z(),le("li",{class:"link-item",key:s},[z("a",{class:"name",href:s.link,target:"_blank"},Ie(s.name),9,cv),z("span",pv,Ie(s.desc),1)]))),128))]))}};var fv=Ue(uv,[["__scopeId","data-v-56a2f2ac"]]);const Lr=Kc(dg);Lr.use(rv);Lr.component("friend-links",fv);Lr.mount("#app");
