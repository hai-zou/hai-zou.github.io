const zu=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}};zu();function Ve(e,t){const n=Object.create(null),s=e.split(",");for(let l=0;l<s.length;l++)n[s[l]]=!0;return t?l=>!!n[l.toLowerCase()]:l=>!!n[l]}const ge={},Sn=[],$e=()=>{},Zs=()=>!1,Wu=/^on[^a-z]/,dn=e=>Wu.test(e),Fa=e=>e.startsWith("onUpdate:"),ae=Object.assign,Da=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Gu=Object.prototype.hasOwnProperty,ce=(e,t)=>Gu.call(e,t),H=Array.isArray,Tn=e=>Vn(e)==="[object Map]",gn=e=>Vn(e)==="[object Set]",Hr=e=>Vn(e)==="[object Date]",Ju=e=>Vn(e)==="[object RegExp]",Y=e=>typeof e=="function",X=e=>typeof e=="string",Dt=e=>typeof e=="symbol",me=e=>e!==null&&typeof e=="object",Ba=e=>me(e)&&Y(e.then)&&Y(e.catch),co=Object.prototype.toString,Vn=e=>co.call(e),Yu=e=>Vn(e).slice(8,-1),uo=e=>Vn(e)==="[object Object]",Ha=e=>X(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,tn=Ve(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qu=Ve("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),wl=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Zu=/-(\w)/g,ke=wl(e=>e.replace(Zu,(t,n)=>n?n.toUpperCase():"")),Xu=/\B([A-Z])/g,Je=wl(e=>e.replace(Xu,"-$1").toLowerCase()),mn=wl(e=>e.charAt(0).toUpperCase()+e.slice(1)),In=wl(e=>e?`on${mn(e)}`:""),Nn=(e,t)=>!Object.is(e,t),Rn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},sl=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ll=e=>{const t=parseFloat(e);return isNaN(t)?e:t},al=e=>{const t=X(e)?Number(e):NaN;return isNaN(t)?e:t};let Vr;const ca=()=>Vr||(Vr=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{}),ep="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",tp=Ve(ep);function on(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],l=X(s)?po(s):on(s);if(l)for(const a in l)t[a]=l[a]}return t}else{if(X(e))return e;if(me(e))return e}}const np=/;(?![^(]*\))/g,sp=/:([^]+)/,lp=/\/\*[^]*?\*\//g;function po(e){const t={};return e.replace(lp,"").split(np).forEach(n=>{if(n){const s=n.split(sp);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function kt(e){let t="";if(X(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const s=kt(e[n]);s&&(t+=s+" ")}else if(me(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function ap(e){if(!e)return null;let{class:t,style:n}=e;return t&&!X(t)&&(e.class=kt(t)),n&&(e.style=on(n)),e}const rp="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",ip="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",op="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",cp=Ve(rp),up=Ve(ip),pp=Ve(op),fp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hp=Ve(fp);function fo(e){return!!e||e===""}function dp(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=Bt(e[s],t[s]);return n}function Bt(e,t){if(e===t)return!0;let n=Hr(e),s=Hr(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=Dt(e),s=Dt(t),n||s)return e===t;if(n=H(e),s=H(t),n||s)return n&&s?dp(e,t):!1;if(n=me(e),s=me(t),n||s){if(!n||!s)return!1;const l=Object.keys(e).length,a=Object.keys(t).length;if(l!==a)return!1;for(const r in e){const i=e.hasOwnProperty(r),o=t.hasOwnProperty(r);if(i&&!o||!i&&o||!Bt(e[r],t[r]))return!1}}return String(e)===String(t)}function kl(e,t){return e.findIndex(n=>Bt(n,t))}const Se=e=>X(e)?e:e==null?"":H(e)||me(e)&&(e.toString===co||!Y(e.toString))?JSON.stringify(e,ho,2):String(e),ho=(e,t)=>t&&t.__v_isRef?ho(e,t.value):Tn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,l])=>(n[`${s} =>`]=l,n),{})}:gn(t)?{[`Set(${t.size})`]:[...t.values()]}:me(t)&&!H(t)&&!uo(t)?String(t):t;let We;class Va{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=We,!t&&We&&(this.index=(We.scopes||(We.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=We;try{return We=this,t()}finally{We=n}}}on(){We=this}off(){We=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function gp(e){return new Va(e)}function go(e,t=We){t&&t.active&&t.effects.push(e)}function mo(){return We}function mp(e){We&&We.cleanups.push(e)}const Ua=e=>{const t=new Set(e);return t.w=0,t.n=0,t},yo=e=>(e.w&Ht)>0,_o=e=>(e.n&Ht)>0,yp=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ht},_p=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const l=t[s];yo(l)&&!_o(l)?l.delete(e):t[n++]=l,l.w&=~Ht,l.n&=~Ht}t.length=n}},rl=new WeakMap;let Xn=0,Ht=1;const ua=30;let ot;const nn=Symbol(""),pa=Symbol("");class Ts{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,go(this,s)}run(){if(!this.active)return this.fn();let t=ot,n=$t;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ot,ot=this,$t=!0,Ht=1<<++Xn,Xn<=ua?yp(this):Ur(this),this.fn()}finally{Xn<=ua&&_p(this),Ht=1<<--Xn,ot=this.parent,$t=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ot===this?this.deferStop=!0:this.active&&(Ur(this),this.onStop&&this.onStop(),this.active=!1)}}function Ur(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function vp(e,t){e.effect&&(e=e.effect.fn);const n=new Ts(e);t&&(ae(n,t),t.scope&&go(n,t.scope)),(!t||!t.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function bp(e){e.effect.stop()}let $t=!0;const vo=[];function Un(){vo.push($t),$t=!1}function Kn(){const e=vo.pop();$t=e===void 0?!0:e}function He(e,t,n){if($t&&ot){let s=rl.get(e);s||rl.set(e,s=new Map);let l=s.get(n);l||s.set(n,l=Ua()),bo(l)}}function bo(e,t){let n=!1;Xn<=ua?_o(e)||(e.n|=Ht,n=!yo(e)):n=!e.has(ot),n&&(e.add(ot),ot.deps.push(e))}function Ct(e,t,n,s,l,a){const r=rl.get(e);if(!r)return;let i=[];if(t==="clear")i=[...r.values()];else if(n==="length"&&H(e)){const o=Number(s);r.forEach((c,u)=>{(u==="length"||u>=o)&&i.push(c)})}else switch(n!==void 0&&i.push(r.get(n)),t){case"add":H(e)?Ha(n)&&i.push(r.get("length")):(i.push(r.get(nn)),Tn(e)&&i.push(r.get(pa)));break;case"delete":H(e)||(i.push(r.get(nn)),Tn(e)&&i.push(r.get(pa)));break;case"set":Tn(e)&&i.push(r.get(nn));break}if(i.length===1)i[0]&&fa(i[0]);else{const o=[];for(const c of i)c&&o.push(...c);fa(Ua(o))}}function fa(e,t){const n=H(e)?e:[...e];for(const s of n)s.computed&&Kr(s);for(const s of n)s.computed||Kr(s)}function Kr(e,t){(e!==ot||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function jp(e,t){var n;return(n=rl.get(e))==null?void 0:n.get(t)}const Ep=Ve("__proto__,__v_isRef,__isVue"),jo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Dt)),xp=Cl(),wp=Cl(!1,!0),kp=Cl(!0),Cp=Cl(!0,!0),zr=Sp();function Sp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=re(this);for(let a=0,r=this.length;a<r;a++)He(s,"get",a+"");const l=s[t](...n);return l===-1||l===!1?s[t](...n.map(re)):l}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Un();const s=re(this)[t].apply(this,n);return Kn(),s}}),e}function Tp(e){const t=re(this);return He(t,"has",e),t.hasOwnProperty(e)}function Cl(e=!1,t=!1){return function(s,l,a){if(l==="__v_isReactive")return!e;if(l==="__v_isReadonly")return e;if(l==="__v_isShallow")return t;if(l==="__v_raw"&&a===(e?t?To:So:t?Co:ko).get(s))return s;const r=H(s);if(!e){if(r&&ce(zr,l))return Reflect.get(zr,l,a);if(l==="hasOwnProperty")return Tp}const i=Reflect.get(s,l,a);return(Dt(l)?jo.has(l):Ep(l))||(e||He(s,"get",l),t)?i:Ce(i)?r&&Ha(l)?i:i.value:me(i)?e?za(i):zn(i):i}}const Ip=Eo(),Rp=Eo(!0);function Eo(e=!1){return function(n,s,l,a){let r=n[s];if(cn(r)&&Ce(r)&&!Ce(l))return!1;if(!e&&(!ps(l)&&!cn(l)&&(r=re(r),l=re(l)),!H(n)&&Ce(r)&&!Ce(l)))return r.value=l,!0;const i=H(n)&&Ha(s)?Number(s)<n.length:ce(n,s),o=Reflect.set(n,s,l,a);return n===re(a)&&(i?Nn(l,r)&&Ct(n,"set",s,l):Ct(n,"add",s,l)),o}}function Pp(e,t){const n=ce(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Ct(e,"delete",t,void 0),s}function Ap(e,t){const n=Reflect.has(e,t);return(!Dt(t)||!jo.has(t))&&He(e,"has",t),n}function Np(e){return He(e,"iterate",H(e)?"length":nn),Reflect.ownKeys(e)}const xo={get:xp,set:Ip,deleteProperty:Pp,has:Ap,ownKeys:Np},wo={get:kp,set(e,t){return!0},deleteProperty(e,t){return!0}},Op=ae({},xo,{get:wp,set:Rp}),qp=ae({},wo,{get:Cp}),Ka=e=>e,Sl=e=>Reflect.getPrototypeOf(e);function Ls(e,t,n=!1,s=!1){e=e.__v_raw;const l=re(e),a=re(t);n||(t!==a&&He(l,"get",t),He(l,"get",a));const{has:r}=Sl(l),i=s?Ka:n?Ja:fs;if(r.call(l,t))return i(e.get(t));if(r.call(l,a))return i(e.get(a));e!==l&&e.get(t)}function Fs(e,t=!1){const n=this.__v_raw,s=re(n),l=re(e);return t||(e!==l&&He(s,"has",e),He(s,"has",l)),e===l?n.has(e):n.has(e)||n.has(l)}function Ds(e,t=!1){return e=e.__v_raw,!t&&He(re(e),"iterate",nn),Reflect.get(e,"size",e)}function Wr(e){e=re(e);const t=re(this);return Sl(t).has.call(t,e)||(t.add(e),Ct(t,"add",e,e)),this}function Gr(e,t){t=re(t);const n=re(this),{has:s,get:l}=Sl(n);let a=s.call(n,e);a||(e=re(e),a=s.call(n,e));const r=l.call(n,e);return n.set(e,t),a?Nn(t,r)&&Ct(n,"set",e,t):Ct(n,"add",e,t),this}function Jr(e){const t=re(this),{has:n,get:s}=Sl(t);let l=n.call(t,e);l||(e=re(e),l=n.call(t,e)),s&&s.call(t,e);const a=t.delete(e);return l&&Ct(t,"delete",e,void 0),a}function Yr(){const e=re(this),t=e.size!==0,n=e.clear();return t&&Ct(e,"clear",void 0,void 0),n}function Bs(e,t){return function(s,l){const a=this,r=a.__v_raw,i=re(r),o=t?Ka:e?Ja:fs;return!e&&He(i,"iterate",nn),r.forEach((c,u)=>s.call(l,o(c),o(u),a))}}function Hs(e,t,n){return function(...s){const l=this.__v_raw,a=re(l),r=Tn(a),i=e==="entries"||e===Symbol.iterator&&r,o=e==="keys"&&r,c=l[e](...s),u=n?Ka:t?Ja:fs;return!t&&He(a,"iterate",o?pa:nn),{next(){const{value:p,done:f}=c.next();return f?{value:p,done:f}:{value:i?[u(p[0]),u(p[1])]:u(p),done:f}},[Symbol.iterator](){return this}}}}function Rt(e){return function(...t){return e==="delete"?!1:this}}function Mp(){const e={get(a){return Ls(this,a)},get size(){return Ds(this)},has:Fs,add:Wr,set:Gr,delete:Jr,clear:Yr,forEach:Bs(!1,!1)},t={get(a){return Ls(this,a,!1,!0)},get size(){return Ds(this)},has:Fs,add:Wr,set:Gr,delete:Jr,clear:Yr,forEach:Bs(!1,!0)},n={get(a){return Ls(this,a,!0)},get size(){return Ds(this,!0)},has(a){return Fs.call(this,a,!0)},add:Rt("add"),set:Rt("set"),delete:Rt("delete"),clear:Rt("clear"),forEach:Bs(!0,!1)},s={get(a){return Ls(this,a,!0,!0)},get size(){return Ds(this,!0)},has(a){return Fs.call(this,a,!0)},add:Rt("add"),set:Rt("set"),delete:Rt("delete"),clear:Rt("clear"),forEach:Bs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=Hs(a,!1,!1),n[a]=Hs(a,!0,!1),t[a]=Hs(a,!1,!0),s[a]=Hs(a,!0,!0)}),[e,n,t,s]}const[$p,Lp,Fp,Dp]=Mp();function Tl(e,t){const n=t?e?Dp:Fp:e?Lp:$p;return(s,l,a)=>l==="__v_isReactive"?!e:l==="__v_isReadonly"?e:l==="__v_raw"?s:Reflect.get(ce(n,l)&&l in s?n:s,l,a)}const Bp={get:Tl(!1,!1)},Hp={get:Tl(!1,!0)},Vp={get:Tl(!0,!1)},Up={get:Tl(!0,!0)},ko=new WeakMap,Co=new WeakMap,So=new WeakMap,To=new WeakMap;function Kp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zp(e){return e.__v_skip||!Object.isExtensible(e)?0:Kp(Yu(e))}function zn(e){return cn(e)?e:Il(e,!1,xo,Bp,ko)}function Io(e){return Il(e,!1,Op,Hp,Co)}function za(e){return Il(e,!0,wo,Vp,So)}function Wp(e){return Il(e,!0,qp,Up,To)}function Il(e,t,n,s,l){if(!me(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=l.get(e);if(a)return a;const r=zp(e);if(r===0)return e;const i=new Proxy(e,r===2?s:n);return l.set(e,i),i}function sn(e){return cn(e)?sn(e.__v_raw):!!(e&&e.__v_isReactive)}function cn(e){return!!(e&&e.__v_isReadonly)}function ps(e){return!!(e&&e.__v_isShallow)}function Wa(e){return sn(e)||cn(e)}function re(e){const t=e&&e.__v_raw;return t?re(t):e}function Ga(e){return sl(e,"__v_skip",!0),e}const fs=e=>me(e)?zn(e):e,Ja=e=>me(e)?za(e):e;function Ya(e){$t&&ot&&(e=re(e),bo(e.dep||(e.dep=Ua())))}function Rl(e,t){e=re(e);const n=e.dep;n&&fa(n)}function Ce(e){return!!(e&&e.__v_isRef===!0)}function ve(e){return Po(e,!1)}function Ro(e){return Po(e,!0)}function Po(e,t){return Ce(e)?e:new Gp(e,t)}class Gp{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:re(t),this._value=n?t:fs(t)}get value(){return Ya(this),this._value}set value(t){const n=this.__v_isShallow||ps(t)||cn(t);t=n?t:re(t),Nn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:fs(t),Rl(this))}}function Jp(e){Rl(e)}function at(e){return Ce(e)?e.value:e}function Yp(e){return Y(e)?e():at(e)}const Qp={get:(e,t,n)=>at(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const l=e[t];return Ce(l)&&!Ce(n)?(l.value=n,!0):Reflect.set(e,t,n,s)}};function Qa(e){return sn(e)?e:new Proxy(e,Qp)}class Zp{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=t(()=>Ya(this),()=>Rl(this));this._get=n,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function Xp(e){return new Zp(e)}function ef(e){const t=H(e)?new Array(e.length):{};for(const n in e)t[n]=Ao(e,n);return t}class tf{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return jp(re(this._object),this._key)}}class nf{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function sf(e,t,n){return Ce(e)?e:Y(e)?new nf(e):me(e)&&arguments.length>1?Ao(e,t,n):ve(e)}function Ao(e,t,n){const s=e[t];return Ce(s)?s:new tf(e,t,n)}class lf{constructor(t,n,s,l){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ts(t,()=>{this._dirty||(this._dirty=!0,Rl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=s}get value(){const t=re(this);return Ya(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function af(e,t,n=!1){let s,l;const a=Y(e);return a?(s=e,l=$e):(s=e.get,l=e.set),new lf(s,l,a||!l,n)}function rf(e,...t){}function of(e,t){}function xt(e,t,n,s){let l;try{l=s?e(...s):e()}catch(a){yn(a,t,n)}return l}function Qe(e,t,n,s){if(Y(e)){const a=xt(e,t,n,s);return a&&Ba(a)&&a.catch(r=>{yn(r,t,n)}),a}const l=[];for(let a=0;a<e.length;a++)l.push(Qe(e[a],t,n,s));return l}function yn(e,t,n,s=!0){const l=t?t.vnode:null;if(t){let a=t.parent;const r=t.proxy,i=n;for(;a;){const c=a.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,r,i)===!1)return}a=a.parent}const o=t.appContext.config.errorHandler;if(o){xt(o,null,10,[e,r,i]);return}}cf(e,n,l,s)}function cf(e,t,n,s=!0){console.error(e)}let hs=!1,ha=!1;const Ae=[];let mt=0;const Pn=[];let jt=null,Qt=0;const No=Promise.resolve();let Za=null;function Pl(e){const t=Za||No;return e?t.then(this?e.bind(this):e):t}function uf(e){let t=mt+1,n=Ae.length;for(;t<n;){const s=t+n>>>1;ds(Ae[s])<e?t=s+1:n=s}return t}function Al(e){(!Ae.length||!Ae.includes(e,hs&&e.allowRecurse?mt+1:mt))&&(e.id==null?Ae.push(e):Ae.splice(uf(e.id),0,e),Oo())}function Oo(){!hs&&!ha&&(ha=!0,Za=No.then(qo))}function pf(e){const t=Ae.indexOf(e);t>mt&&Ae.splice(t,1)}function Xa(e){H(e)?Pn.push(...e):(!jt||!jt.includes(e,e.allowRecurse?Qt+1:Qt))&&Pn.push(e),Oo()}function Qr(e,t=hs?mt+1:0){for(;t<Ae.length;t++){const n=Ae[t];n&&n.pre&&(Ae.splice(t,1),t--,n())}}function il(e){if(Pn.length){const t=[...new Set(Pn)];if(Pn.length=0,jt){jt.push(...t);return}for(jt=t,jt.sort((n,s)=>ds(n)-ds(s)),Qt=0;Qt<jt.length;Qt++)jt[Qt]();jt=null,Qt=0}}const ds=e=>e.id==null?1/0:e.id,ff=(e,t)=>{const n=ds(e)-ds(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function qo(e){ha=!1,hs=!0,Ae.sort(ff);const t=$e;try{for(mt=0;mt<Ae.length;mt++){const n=Ae[mt];n&&n.active!==!1&&xt(n,null,14)}}finally{mt=0,Ae.length=0,il(),hs=!1,Za=null,(Ae.length||Pn.length)&&qo()}}let wn,Vs=[];function Mo(e,t){var n,s;wn=e,wn?(wn.enabled=!0,Vs.forEach(({event:l,args:a})=>wn.emit(l,...a)),Vs=[]):typeof window!="undefined"&&window.HTMLElement&&!((s=(n=window.navigator)==null?void 0:n.userAgent)!=null&&s.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(a=>{Mo(a,t)}),setTimeout(()=>{wn||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Vs=[])},3e3)):Vs=[]}function hf(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ge;let l=n;const a=t.startsWith("update:"),r=a&&t.slice(7);if(r&&r in s){const u=`${r==="modelValue"?"model":r}Modifiers`,{number:p,trim:f}=s[u]||ge;f&&(l=n.map(d=>X(d)?d.trim():d)),p&&(l=n.map(ll))}let i,o=s[i=In(t)]||s[i=In(ke(t))];!o&&a&&(o=s[i=In(Je(t))]),o&&Qe(o,e,6,l);const c=s[i+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Qe(c,e,6,l)}}function $o(e,t,n=!1){const s=t.emitsCache,l=s.get(e);if(l!==void 0)return l;const a=e.emits;let r={},i=!1;if(!Y(e)){const o=c=>{const u=$o(c,t,!0);u&&(i=!0,ae(r,u))};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return!a&&!i?(me(e)&&s.set(e,null),null):(H(a)?a.forEach(o=>r[o]=null):ae(r,a),me(e)&&s.set(e,r),r)}function Nl(e,t){return!e||!dn(t)?!1:(t=t.slice(2).replace(/Once$/,""),ce(e,t[0].toLowerCase()+t.slice(1))||ce(e,Je(t))||ce(e,t))}let Ie=null,Ol=null;function gs(e){const t=Ie;return Ie=e,Ol=e&&e.type.__scopeId||null,t}function Wt(e){Ol=e}function Gt(){Ol=null}const df=e=>er;function er(e,t=Ie,n){if(!t||e._n)return e;const s=(...l)=>{s._d&&ba(-1);const a=gs(t);let r;try{r=e(...l)}finally{gs(a),s._d&&ba(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function Xs(e){const{type:t,vnode:n,proxy:s,withProxy:l,props:a,propsOptions:[r],slots:i,attrs:o,emit:c,render:u,renderCache:p,data:f,setupState:d,ctx:_,inheritAttrs:E}=e;let w,y;const m=gs(e);try{if(n.shapeFlag&4){const b=l||s;w=Ge(u.call(b,b,p,a,d,f,_)),y=o}else{const b=t;w=Ge(b.length>1?b(a,{attrs:o,slots:i,emit:c}):b(a,null)),y=t.props?o:mf(o)}}catch(b){as.length=0,yn(b,e,1),w=ue(Oe)}let k=w;if(y&&E!==!1){const b=Object.keys(y),{shapeFlag:S}=k;b.length&&S&7&&(r&&b.some(Fa)&&(y=yf(y,r)),k=_t(k,y))}return n.dirs&&(k=_t(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),w=k,gs(m),w}function gf(e){let t;for(let n=0;n<e.length;n++){const s=e[n];if(Ut(s)){if(s.type!==Oe||s.children==="v-if"){if(t)return;t=s}}else return}return t}const mf=e=>{let t;for(const n in e)(n==="class"||n==="style"||dn(n))&&((t||(t={}))[n]=e[n]);return t},yf=(e,t)=>{const n={};for(const s in e)(!Fa(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function _f(e,t,n){const{props:s,children:l,component:a}=e,{props:r,children:i,patchFlag:o}=t,c=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&o>=0){if(o&1024)return!0;if(o&16)return s?Zr(s,r,c):!!r;if(o&8){const u=t.dynamicProps;for(let p=0;p<u.length;p++){const f=u[p];if(r[f]!==s[f]&&!Nl(c,f))return!0}}}else return(l||i)&&(!i||!i.$stable)?!0:s===r?!1:s?r?Zr(s,r,c):!0:!!r;return!1}function Zr(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let l=0;l<s.length;l++){const a=s[l];if(t[a]!==e[a]&&!Nl(n,a))return!0}return!1}function tr({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Lo=e=>e.__isSuspense,vf={name:"Suspense",__isSuspense:!0,process(e,t,n,s,l,a,r,i,o,c){e==null?jf(t,n,s,l,a,r,i,o,c):Ef(e,t,n,s,l,r,i,o,c)},hydrate:xf,create:nr,normalize:wf},bf=vf;function ms(e,t){const n=e.props&&e.props[t];Y(n)&&n()}function jf(e,t,n,s,l,a,r,i,o){const{p:c,o:{createElement:u}}=o,p=u("div"),f=e.suspense=nr(e,l,s,t,p,n,a,r,i,o);c(null,f.pendingBranch=e.ssContent,p,null,s,f,a,r),f.deps>0?(ms(e,"onPending"),ms(e,"onFallback"),c(null,e.ssFallback,t,n,s,null,a,r),An(f,e.ssFallback)):f.resolve(!1,!0)}function Ef(e,t,n,s,l,a,r,i,{p:o,um:c,o:{createElement:u}}){const p=t.suspense=e.suspense;p.vnode=t,t.el=e.el;const f=t.ssContent,d=t.ssFallback,{activeBranch:_,pendingBranch:E,isInFallback:w,isHydrating:y}=p;if(E)p.pendingBranch=f,ct(f,E)?(o(E,f,p.hiddenContainer,null,l,p,a,r,i),p.deps<=0?p.resolve():w&&(o(_,d,n,s,l,null,a,r,i),An(p,d))):(p.pendingId++,y?(p.isHydrating=!1,p.activeBranch=E):c(E,l,p),p.deps=0,p.effects.length=0,p.hiddenContainer=u("div"),w?(o(null,f,p.hiddenContainer,null,l,p,a,r,i),p.deps<=0?p.resolve():(o(_,d,n,s,l,null,a,r,i),An(p,d))):_&&ct(f,_)?(o(_,f,n,s,l,p,a,r,i),p.resolve(!0)):(o(null,f,p.hiddenContainer,null,l,p,a,r,i),p.deps<=0&&p.resolve()));else if(_&&ct(f,_))o(_,f,n,s,l,p,a,r,i),An(p,f);else if(ms(t,"onPending"),p.pendingBranch=f,p.pendingId++,o(null,f,p.hiddenContainer,null,l,p,a,r,i),p.deps<=0)p.resolve();else{const{timeout:m,pendingId:k}=p;m>0?setTimeout(()=>{p.pendingId===k&&p.fallback(d)},m):m===0&&p.fallback(d)}}function nr(e,t,n,s,l,a,r,i,o,c,u=!1){const{p,m:f,um:d,n:_,o:{parentNode:E,remove:w}}=c;let y;const m=kf(e);m&&t!=null&&t.pendingBranch&&(y=t.pendingId,t.deps++);const k=e.props?al(e.props.timeout):void 0,b={vnode:e,parent:t,parentComponent:n,isSVG:r,container:s,hiddenContainer:l,anchor:a,deps:0,pendingId:0,timeout:typeof k=="number"?k:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(S=!1,L=!1){const{vnode:I,activeBranch:j,pendingBranch:N,pendingId:q,effects:O,parentComponent:P,container:D}=b;if(b.isHydrating)b.isHydrating=!1;else if(!S){const ee=j&&N.transition&&N.transition.mode==="out-in";ee&&(j.transition.afterLeave=()=>{q===b.pendingId&&f(N,D,ie,0)});let{anchor:ie}=b;j&&(ie=_(j),d(j,P,b,!0)),ee||f(N,D,ie,0)}An(b,N),b.pendingBranch=null,b.isInFallback=!1;let $=b.parent,ne=!1;for(;$;){if($.pendingBranch){$.effects.push(...O),ne=!0;break}$=$.parent}ne||Xa(O),b.effects=[],m&&t&&t.pendingBranch&&y===t.pendingId&&(t.deps--,t.deps===0&&!L&&t.resolve()),ms(I,"onResolve")},fallback(S){if(!b.pendingBranch)return;const{vnode:L,activeBranch:I,parentComponent:j,container:N,isSVG:q}=b;ms(L,"onFallback");const O=_(I),P=()=>{!b.isInFallback||(p(null,S,N,O,j,null,q,i,o),An(b,S))},D=S.transition&&S.transition.mode==="out-in";D&&(I.transition.afterLeave=P),b.isInFallback=!0,d(I,j,null,!0),D||P()},move(S,L,I){b.activeBranch&&f(b.activeBranch,S,L,I),b.container=S},next(){return b.activeBranch&&_(b.activeBranch)},registerDep(S,L){const I=!!b.pendingBranch;I&&b.deps++;const j=S.vnode.el;S.asyncDep.catch(N=>{yn(N,S,0)}).then(N=>{if(S.isUnmounted||b.isUnmounted||b.pendingId!==S.suspenseId)return;S.asyncResolved=!0;const{vnode:q}=S;ja(S,N,!1),j&&(q.el=j);const O=!j&&S.subTree.el;L(S,q,E(j||S.subTree.el),j?null:_(S.subTree),b,r,o),O&&w(O),tr(S,q.el),I&&--b.deps===0&&b.resolve()})},unmount(S,L){b.isUnmounted=!0,b.activeBranch&&d(b.activeBranch,n,S,L),b.pendingBranch&&d(b.pendingBranch,n,S,L)}};return b}function xf(e,t,n,s,l,a,r,i,o){const c=t.suspense=nr(t,s,n,e.parentNode,document.createElement("div"),null,l,a,r,i,!0),u=o(e,c.pendingBranch=t.ssContent,n,c,a,r);return c.deps===0&&c.resolve(!1,!0),u}function wf(e){const{shapeFlag:t,children:n}=e,s=t&32;e.ssContent=Xr(s?n.default:n),e.ssFallback=s?Xr(n.fallback):ue(Oe)}function Xr(e){let t;if(Y(e)){const n=fn&&e._c;n&&(e._d=!1,Z()),e=e(),n&&(e._d=!0,t=De,hc())}return H(e)&&(e=gf(e)),e=Ge(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function Fo(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Xa(e)}function An(e,t){e.activeBranch=t;const{vnode:n,parentComponent:s}=e,l=n.el=t.el;s&&s.subTree===n&&(s.vnode.el=l,tr(s,l))}function kf(e){var t;return((t=e.props)==null?void 0:t.suspensible)!=null&&e.props.suspensible!==!1}function Cf(e,t){return Is(e,null,t)}function Do(e,t){return Is(e,null,{flush:"post"})}function Sf(e,t){return Is(e,null,{flush:"sync"})}const Us={};function wt(e,t,n){return Is(e,t,n)}function Is(e,t,{immediate:n,deep:s,flush:l,onTrack:a,onTrigger:r}=ge){var i;const o=mo()===((i=we)==null?void 0:i.scope)?we:null;let c,u=!1,p=!1;if(Ce(e)?(c=()=>e.value,u=ps(e)):sn(e)?(c=()=>e,s=!0):H(e)?(p=!0,u=e.some(b=>sn(b)||ps(b)),c=()=>e.map(b=>{if(Ce(b))return b.value;if(sn(b))return Xt(b);if(Y(b))return xt(b,o,2)})):Y(e)?t?c=()=>xt(e,o,2):c=()=>{if(!(o&&o.isUnmounted))return f&&f(),Qe(e,o,3,[d])}:c=$e,t&&s){const b=c;c=()=>Xt(b())}let f,d=b=>{f=m.onStop=()=>{xt(b,o,4)}},_;if(qn)if(d=$e,t?n&&Qe(t,o,3,[c(),p?[]:void 0,d]):c(),l==="sync"){const b=kc();_=b.__watcherHandles||(b.__watcherHandles=[])}else return $e;let E=p?new Array(e.length).fill(Us):Us;const w=()=>{if(!!m.active)if(t){const b=m.run();(s||u||(p?b.some((S,L)=>Nn(S,E[L])):Nn(b,E)))&&(f&&f(),Qe(t,o,3,[b,E===Us?void 0:p&&E[0]===Us?[]:E,d]),E=b)}else m.run()};w.allowRecurse=!!t;let y;l==="sync"?y=w:l==="post"?y=()=>Re(w,o&&o.suspense):(w.pre=!0,o&&(w.id=o.uid),y=()=>Al(w));const m=new Ts(c,y);t?n?w():E=m.run():l==="post"?Re(m.run.bind(m),o&&o.suspense):m.run();const k=()=>{m.stop(),o&&o.scope&&Da(o.scope.effects,m)};return _&&_.push(k),k}function Tf(e,t,n){const s=this.proxy,l=X(e)?e.includes(".")?Bo(s,e):()=>s[e]:e.bind(s,s);let a;Y(t)?a=t:(a=t.handler,n=t);const r=we;Kt(this);const i=Is(l,a.bind(s),n);return r?Kt(r):Lt(),i}function Bo(e,t){const n=t.split(".");return()=>{let s=e;for(let l=0;l<n.length&&s;l++)s=s[n[l]];return s}}function Xt(e,t){if(!me(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ce(e))Xt(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)Xt(e[n],t);else if(gn(e)||Tn(e))e.forEach(n=>{Xt(n,t)});else if(uo(e))for(const n in e)Xt(e[n],t);return e}function If(e,t){const n=Ie;if(n===null)return e;const s=Dl(n)||n.proxy,l=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[r,i,o,c=ge]=t[a];r&&(Y(r)&&(r={mounted:r,updated:r}),r.deep&&Xt(i),l.push({dir:r,instance:s,value:i,oldValue:void 0,arg:o,modifiers:c}))}return e}function gt(e,t,n,s){const l=e.dirs,a=t&&t.dirs;for(let r=0;r<l.length;r++){const i=l[r];a&&(i.oldValue=a[r].value);let o=i.dir[s];o&&(Un(),Qe(o,n,8,[e.el,i,e,t]),Kn())}}function sr(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Xe(()=>{e.isMounted=!0}),Ll(()=>{e.isUnmounting=!0}),e}const tt=[Function,Array],lr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tt,onEnter:tt,onAfterEnter:tt,onEnterCancelled:tt,onBeforeLeave:tt,onLeave:tt,onAfterLeave:tt,onLeaveCancelled:tt,onBeforeAppear:tt,onAppear:tt,onAfterAppear:tt,onAppearCancelled:tt},Rf={name:"BaseTransition",props:lr,setup(e,{slots:t}){const n=Tt(),s=sr();let l;return()=>{const a=t.default&&ql(t.default(),!0);if(!a||!a.length)return;let r=a[0];if(a.length>1){for(const E of a)if(E.type!==Oe){r=E;break}}const i=re(e),{mode:o}=i;if(s.isLeaving)return Yl(r);const c=ei(r);if(!c)return Yl(r);const u=On(c,i,s,n);un(c,u);const p=n.subTree,f=p&&ei(p);let d=!1;const{getTransitionKey:_}=c.type;if(_){const E=_();l===void 0?l=E:E!==l&&(l=E,d=!0)}if(f&&f.type!==Oe&&(!ct(c,f)||d)){const E=On(f,i,s,n);if(un(f,E),o==="out-in")return s.isLeaving=!0,E.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Yl(r);o==="in-out"&&c.type!==Oe&&(E.delayLeave=(w,y,m)=>{const k=Vo(s,f);k[String(f.key)]=f,w._leaveCb=()=>{y(),w._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=m})}return r}}},Ho=Rf;function Vo(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function On(e,t,n,s){const{appear:l,mode:a,persisted:r=!1,onBeforeEnter:i,onEnter:o,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:p,onLeave:f,onAfterLeave:d,onLeaveCancelled:_,onBeforeAppear:E,onAppear:w,onAfterAppear:y,onAppearCancelled:m}=t,k=String(e.key),b=Vo(n,e),S=(j,N)=>{j&&Qe(j,s,9,N)},L=(j,N)=>{const q=N[1];S(j,N),H(j)?j.every(O=>O.length<=1)&&q():j.length<=1&&q()},I={mode:a,persisted:r,beforeEnter(j){let N=i;if(!n.isMounted)if(l)N=E||i;else return;j._leaveCb&&j._leaveCb(!0);const q=b[k];q&&ct(e,q)&&q.el._leaveCb&&q.el._leaveCb(),S(N,[j])},enter(j){let N=o,q=c,O=u;if(!n.isMounted)if(l)N=w||o,q=y||c,O=m||u;else return;let P=!1;const D=j._enterCb=$=>{P||(P=!0,$?S(O,[j]):S(q,[j]),I.delayedLeave&&I.delayedLeave(),j._enterCb=void 0)};N?L(N,[j,D]):D()},leave(j,N){const q=String(e.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return N();S(p,[j]);let O=!1;const P=j._leaveCb=D=>{O||(O=!0,N(),D?S(_,[j]):S(d,[j]),j._leaveCb=void 0,b[q]===e&&delete b[q])};b[q]=e,f?L(f,[j,P]):P()},clone(j){return On(j,t,n,s)}};return I}function Yl(e){if(Rs(e))return e=_t(e),e.children=null,e}function ei(e){return Rs(e)?e.children?e.children[0]:void 0:e}function un(e,t){e.shapeFlag&6&&e.component?un(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ql(e,t=!1,n){let s=[],l=0;for(let a=0;a<e.length;a++){let r=e[a];const i=n==null?r.key:String(n)+String(r.key!=null?r.key:a);r.type===fe?(r.patchFlag&128&&l++,s=s.concat(ql(r.children,t,i))):(t||r.type!==Oe)&&s.push(i!=null?_t(r,{key:i}):r)}if(l>1)for(let a=0;a<s.length;a++)s[a].patchFlag=-2;return s}function _n(e,t){return Y(e)?(()=>ae({name:e.name},t,{setup:e}))():e}const ln=e=>!!e.type.__asyncLoader;function Pf(e){Y(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:s,delay:l=200,timeout:a,suspensible:r=!0,onError:i}=e;let o=null,c,u=0;const p=()=>(u++,o=null,f()),f=()=>{let d;return o||(d=o=t().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),i)return new Promise((E,w)=>{i(_,()=>E(p()),()=>w(_),u+1)});throw _}).then(_=>d!==o&&o?o:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),c=_,_)))};return _n({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const d=we;if(c)return()=>Ql(c,d);const _=m=>{o=null,yn(m,d,13,!s)};if(r&&d.suspense||qn)return f().then(m=>()=>Ql(m,d)).catch(m=>(_(m),()=>s?ue(s,{error:m}):null));const E=ve(!1),w=ve(),y=ve(!!l);return l&&setTimeout(()=>{y.value=!1},l),a!=null&&setTimeout(()=>{if(!E.value&&!w.value){const m=new Error(`Async component timed out after ${a}ms.`);_(m),w.value=m}},a),f().then(()=>{E.value=!0,d.parent&&Rs(d.parent.vnode)&&Al(d.parent.update)}).catch(m=>{_(m),w.value=m}),()=>{if(E.value&&c)return Ql(c,d);if(w.value&&s)return ue(s,{error:w.value});if(n&&!y.value)return ue(n)}}})}function Ql(e,t){const{ref:n,props:s,children:l,ce:a}=t.vnode,r=ue(e,s,l);return r.ref=n,r.ce=a,delete t.vnode.ce,r}const Rs=e=>e.type.__isKeepAlive,Af={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Tt(),s=n.ctx;if(!s.renderer)return()=>{const m=t.default&&t.default();return m&&m.length===1?m[0]:m};const l=new Map,a=new Set;let r=null;const i=n.suspense,{renderer:{p:o,m:c,um:u,o:{createElement:p}}}=s,f=p("div");s.activate=(m,k,b,S,L)=>{const I=m.component;c(m,k,b,0,i),o(I.vnode,m,k,b,I,i,S,m.slotScopeIds,L),Re(()=>{I.isDeactivated=!1,I.a&&Rn(I.a);const j=m.props&&m.props.onVnodeMounted;j&&Fe(j,I.parent,m)},i)},s.deactivate=m=>{const k=m.component;c(m,f,null,1,i),Re(()=>{k.da&&Rn(k.da);const b=m.props&&m.props.onVnodeUnmounted;b&&Fe(b,k.parent,m),k.isDeactivated=!0},i)};function d(m){Zl(m),u(m,n,i,!0)}function _(m){l.forEach((k,b)=>{const S=xa(k.type);S&&(!m||!m(S))&&E(b)})}function E(m){const k=l.get(m);!r||!ct(k,r)?d(k):r&&Zl(r),l.delete(m),a.delete(m)}wt(()=>[e.include,e.exclude],([m,k])=>{m&&_(b=>es(m,b)),k&&_(b=>!es(k,b))},{flush:"post",deep:!0});let w=null;const y=()=>{w!=null&&l.set(w,Xl(n.subTree))};return Xe(y),$l(y),Ll(()=>{l.forEach(m=>{const{subTree:k,suspense:b}=n,S=Xl(k);if(m.type===S.type&&m.key===S.key){Zl(S);const L=S.component.da;L&&Re(L,b);return}d(m)})}),()=>{if(w=null,!t.default)return null;const m=t.default(),k=m[0];if(m.length>1)return r=null,m;if(!Ut(k)||!(k.shapeFlag&4)&&!(k.shapeFlag&128))return r=null,k;let b=Xl(k);const S=b.type,L=xa(ln(b)?b.type.__asyncResolved||{}:S),{include:I,exclude:j,max:N}=e;if(I&&(!L||!es(I,L))||j&&L&&es(j,L))return r=b,k;const q=b.key==null?S:b.key,O=l.get(q);return b.el&&(b=_t(b),k.shapeFlag&128&&(k.ssContent=b)),w=q,O?(b.el=O.el,b.component=O.component,b.transition&&un(b,b.transition),b.shapeFlag|=512,a.delete(q),a.add(q)):(a.add(q),N&&a.size>parseInt(N,10)&&E(a.values().next().value)),b.shapeFlag|=256,r=b,Lo(k.type)?k:b}}},Nf=Af;function es(e,t){return H(e)?e.some(n=>es(n,t)):X(e)?e.split(",").includes(t):Ju(e)?e.test(t):!1}function Uo(e,t){zo(e,"a",t)}function Ko(e,t){zo(e,"da",t)}function zo(e,t,n=we){const s=e.__wdc||(e.__wdc=()=>{let l=n;for(;l;){if(l.isDeactivated)return;l=l.parent}return e()});if(Ml(t,s,n),n){let l=n.parent;for(;l&&l.parent;)Rs(l.parent.vnode)&&Of(s,t,n,l),l=l.parent}}function Of(e,t,n,s){const l=Ml(t,e,s,!0);Wn(()=>{Da(s[t],l)},n)}function Zl(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Xl(e){return e.shapeFlag&128?e.ssContent:e}function Ml(e,t,n=we,s=!1){if(n){const l=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;Un(),Kt(n);const i=Qe(t,n,e,r);return Lt(),Kn(),i});return s?l.unshift(a):l.push(a),a}}const St=e=>(t,n=we)=>(!qn||e==="sp")&&Ml(e,(...s)=>t(...s),n),Wo=St("bm"),Xe=St("m"),Go=St("bu"),$l=St("u"),Ll=St("bum"),Wn=St("um"),Jo=St("sp"),Yo=St("rtg"),Qo=St("rtc");function Zo(e,t=we){Ml("ec",e,t)}const ar="components",qf="directives";function rr(e,t){return ir(ar,e,!0,t)||e}const Xo=Symbol.for("v-ndc");function Mf(e){return X(e)?ir(ar,e,!1)||e:e||Xo}function $f(e){return ir(qf,e)}function ir(e,t,n=!0,s=!1){const l=Ie||we;if(l){const a=l.type;if(e===ar){const i=xa(a,!1);if(i&&(i===t||i===ke(t)||i===mn(ke(t))))return a}const r=ti(l[e]||a[e],t)||ti(l.appContext[e],t);return!r&&s?a:r}}function ti(e,t){return e&&(e[t]||e[ke(t)]||e[mn(ke(t))])}function yt(e,t,n,s){let l;const a=n&&n[s];if(H(e)||X(e)){l=new Array(e.length);for(let r=0,i=e.length;r<i;r++)l[r]=t(e[r],r,void 0,a&&a[r])}else if(typeof e=="number"){l=new Array(e);for(let r=0;r<e;r++)l[r]=t(r+1,r,void 0,a&&a[r])}else if(me(e))if(e[Symbol.iterator])l=Array.from(e,(r,i)=>t(r,i,void 0,a&&a[i]));else{const r=Object.keys(e);l=new Array(r.length);for(let i=0,o=r.length;i<o;i++){const c=r[i];l[i]=t(e[c],c,i,a&&a[i])}}else l=[];return n&&(n[s]=l),l}function Lf(e,t){for(let n=0;n<t.length;n++){const s=t[n];if(H(s))for(let l=0;l<s.length;l++)e[s[l].name]=s[l].fn;else s&&(e[s.name]=s.key?(...l)=>{const a=s.fn(...l);return a&&(a.key=s.key),a}:s.fn)}return e}function Ff(e,t,n={},s,l){if(Ie.isCE||Ie.parent&&ln(Ie.parent)&&Ie.parent.isCE)return t!=="default"&&(n.name=t),ue("slot",n,s&&s());let a=e[t];a&&a._c&&(a._d=!1),Z();const r=a&&ec(a(n)),i=Vt(fe,{key:n.key||r&&r.key||`_${t}`},r||(s?s():[]),r&&e._===1?64:-2);return!l&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),a&&a._c&&(a._d=!0),i}function ec(e){return e.some(t=>Ut(t)?!(t.type===Oe||t.type===fe&&!ec(t.children)):!0)?e:null}function Df(e,t){const n={};for(const s in e)n[t&&/[A-Z]/.test(s)?`on:${s}`:In(s)]=e[s];return n}const da=e=>e?vc(e)?Dl(e)||e.proxy:da(e.parent):null,ns=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>da(e.parent),$root:e=>da(e.root),$emit:e=>e.emit,$options:e=>or(e),$forceUpdate:e=>e.f||(e.f=()=>Al(e.update)),$nextTick:e=>e.n||(e.n=Pl.bind(e.proxy)),$watch:e=>Tf.bind(e)}),ea=(e,t)=>e!==ge&&!e.__isScriptSetup&&ce(e,t),ga={get({_:e},t){const{ctx:n,setupState:s,data:l,props:a,accessCache:r,type:i,appContext:o}=e;let c;if(t[0]!=="$"){const d=r[t];if(d!==void 0)switch(d){case 1:return s[t];case 2:return l[t];case 4:return n[t];case 3:return a[t]}else{if(ea(s,t))return r[t]=1,s[t];if(l!==ge&&ce(l,t))return r[t]=2,l[t];if((c=e.propsOptions[0])&&ce(c,t))return r[t]=3,a[t];if(n!==ge&&ce(n,t))return r[t]=4,n[t];ma&&(r[t]=0)}}const u=ns[t];let p,f;if(u)return t==="$attrs"&&He(e,"get",t),u(e);if((p=i.__cssModules)&&(p=p[t]))return p;if(n!==ge&&ce(n,t))return r[t]=4,n[t];if(f=o.config.globalProperties,ce(f,t))return f[t]},set({_:e},t,n){const{data:s,setupState:l,ctx:a}=e;return ea(l,t)?(l[t]=n,!0):s!==ge&&ce(s,t)?(s[t]=n,!0):ce(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:l,propsOptions:a}},r){let i;return!!n[r]||e!==ge&&ce(e,r)||ea(t,r)||(i=a[0])&&ce(i,r)||ce(s,r)||ce(ns,r)||ce(l.config.globalProperties,r)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ce(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Bf=ae({},ga,{get(e,t){if(t!==Symbol.unscopables)return ga.get(e,t,e)},has(e,t){return t[0]!=="_"&&!tp(t)}});function Hf(){return null}function Vf(){return null}function Uf(e){}function Kf(e){}function zf(){return null}function Wf(){}function Gf(e,t){return null}function Jf(){return tc().slots}function Yf(){return tc().attrs}function Qf(e,t,n){const s=Tt();if(n&&n.local){const l=ve(e[t]);return wt(()=>e[t],a=>l.value=a),wt(l,a=>{a!==e[t]&&s.emit(`update:${t}`,a)}),l}else return{__v_isRef:!0,get value(){return e[t]},set value(l){s.emit(`update:${t}`,l)}}}function tc(){const e=Tt();return e.setupContext||(e.setupContext=xc(e))}function ys(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function Zf(e,t){const n=ys(e);for(const s in t){if(s.startsWith("__skip"))continue;let l=n[s];l?H(l)||Y(l)?l=n[s]={type:l,default:t[s]}:l.default=t[s]:l===null&&(l=n[s]={default:t[s]}),l&&t[`__skip_${s}`]&&(l.skipFactory=!0)}return n}function Xf(e,t){return!e||!t?e||t:H(e)&&H(t)?e.concat(t):ae({},ys(e),ys(t))}function eh(e,t){const n={};for(const s in e)t.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>e[s]});return n}function th(e){const t=Tt();let n=e();return Lt(),Ba(n)&&(n=n.catch(s=>{throw Kt(t),s})),[n,()=>Kt(t)]}let ma=!0;function nh(e){const t=or(e),n=e.proxy,s=e.ctx;ma=!1,t.beforeCreate&&ni(t.beforeCreate,e,"bc");const{data:l,computed:a,methods:r,watch:i,provide:o,inject:c,created:u,beforeMount:p,mounted:f,beforeUpdate:d,updated:_,activated:E,deactivated:w,beforeDestroy:y,beforeUnmount:m,destroyed:k,unmounted:b,render:S,renderTracked:L,renderTriggered:I,errorCaptured:j,serverPrefetch:N,expose:q,inheritAttrs:O,components:P,directives:D,filters:$}=t;if(c&&sh(c,s,null),r)for(const ie in r){const oe=r[ie];Y(oe)&&(s[ie]=oe.bind(n))}if(l){const ie=l.call(n,n);me(ie)&&(e.data=zn(ie))}if(ma=!0,a)for(const ie in a){const oe=a[ie],Ke=Y(oe)?oe.bind(n,n):Y(oe.get)?oe.get.bind(n,n):$e,It=!Y(oe)&&Y(oe.set)?oe.set.bind(n):$e,ht=Ye({get:Ke,set:It});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>ht.value,set:Le=>ht.value=Le})}if(i)for(const ie in i)nc(i[ie],s,n,ie);if(o){const ie=Y(o)?o.call(n):o;Reflect.ownKeys(ie).forEach(oe=>{ss(oe,ie[oe])})}u&&ni(u,e,"c");function ee(ie,oe){H(oe)?oe.forEach(Ke=>ie(Ke.bind(n))):oe&&ie(oe.bind(n))}if(ee(Wo,p),ee(Xe,f),ee(Go,d),ee($l,_),ee(Uo,E),ee(Ko,w),ee(Zo,j),ee(Qo,L),ee(Yo,I),ee(Ll,m),ee(Wn,b),ee(Jo,N),H(q))if(q.length){const ie=e.exposed||(e.exposed={});q.forEach(oe=>{Object.defineProperty(ie,oe,{get:()=>n[oe],set:Ke=>n[oe]=Ke})})}else e.exposed||(e.exposed={});S&&e.render===$e&&(e.render=S),O!=null&&(e.inheritAttrs=O),P&&(e.components=P),D&&(e.directives=D)}function sh(e,t,n=$e){H(e)&&(e=ya(e));for(const s in e){const l=e[s];let a;me(l)?"default"in l?a=ut(l.from||s,l.default,!0):a=ut(l.from||s):a=ut(l),Ce(a)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:r=>a.value=r}):t[s]=a}}function ni(e,t,n){Qe(H(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function nc(e,t,n,s){const l=s.includes(".")?Bo(n,s):()=>n[s];if(X(e)){const a=t[e];Y(a)&&wt(l,a)}else if(Y(e))wt(l,e.bind(n));else if(me(e))if(H(e))e.forEach(a=>nc(a,t,n,s));else{const a=Y(e.handler)?e.handler.bind(n):t[e.handler];Y(a)&&wt(l,a,e)}}function or(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:l,optionsCache:a,config:{optionMergeStrategies:r}}=e.appContext,i=a.get(t);let o;return i?o=i:!l.length&&!n&&!s?o=t:(o={},l.length&&l.forEach(c=>ol(o,c,r,!0)),ol(o,t,r)),me(t)&&a.set(t,o),o}function ol(e,t,n,s=!1){const{mixins:l,extends:a}=t;a&&ol(e,a,n,!0),l&&l.forEach(r=>ol(e,r,n,!0));for(const r in t)if(!(s&&r==="expose")){const i=lh[r]||n&&n[r];e[r]=i?i(e[r],t[r]):t[r]}return e}const lh={data:si,props:li,emits:li,methods:ts,computed:ts,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:ts,directives:ts,watch:rh,provide:si,inject:ah};function si(e,t){return t?e?function(){return ae(Y(e)?e.call(this,this):e,Y(t)?t.call(this,this):t)}:t:e}function ah(e,t){return ts(ya(e),ya(t))}function ya(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Me(e,t){return e?[...new Set([].concat(e,t))]:t}function ts(e,t){return e?ae(Object.create(null),e,t):t}function li(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:ae(Object.create(null),ys(e),ys(t!=null?t:{})):t}function rh(e,t){if(!e)return t;if(!t)return e;const n=ae(Object.create(null),e);for(const s in t)n[s]=Me(e[s],t[s]);return n}function sc(){return{app:null,config:{isNativeTag:Zs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ih=0;function oh(e,t){return function(s,l=null){Y(s)||(s=ae({},s)),l!=null&&!me(l)&&(l=null);const a=sc(),r=new Set;let i=!1;const o=a.app={_uid:ih++,_component:s,_props:l,_container:null,_context:a,_instance:null,version:Sc,get config(){return a.config},set config(c){},use(c,...u){return r.has(c)||(c&&Y(c.install)?(r.add(c),c.install(o,...u)):Y(c)&&(r.add(c),c(o,...u))),o},mixin(c){return a.mixins.includes(c)||a.mixins.push(c),o},component(c,u){return u?(a.components[c]=u,o):a.components[c]},directive(c,u){return u?(a.directives[c]=u,o):a.directives[c]},mount(c,u,p){if(!i){const f=ue(s,l);return f.appContext=a,u&&t?t(f,c):e(f,c,p),i=!0,o._container=c,c.__vue_app__=o,Dl(f.component)||f.component.proxy}},unmount(){i&&(e(null,o._container),delete o._container.__vue_app__)},provide(c,u){return a.provides[c]=u,o},runWithContext(c){_s=o;try{return c()}finally{_s=null}}};return o}}let _s=null;function ss(e,t){if(we){let n=we.provides;const s=we.parent&&we.parent.provides;s===n&&(n=we.provides=Object.create(s)),n[e]=t}}function ut(e,t,n=!1){const s=we||Ie;if(s||_s){const l=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:_s._context.provides;if(l&&e in l)return l[e];if(arguments.length>1)return n&&Y(t)?t.call(s&&s.proxy):t}}function ch(){return!!(we||Ie||_s)}function uh(e,t,n,s=!1){const l={},a={};sl(a,Fl,1),e.propsDefaults=Object.create(null),lc(e,t,l,a);for(const r in e.propsOptions[0])r in l||(l[r]=void 0);n?e.props=s?l:Io(l):e.type.props?e.props=l:e.props=a,e.attrs=a}function ph(e,t,n,s){const{props:l,attrs:a,vnode:{patchFlag:r}}=e,i=re(l),[o]=e.propsOptions;let c=!1;if((s||r>0)&&!(r&16)){if(r&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let f=u[p];if(Nl(e.emitsOptions,f))continue;const d=t[f];if(o)if(ce(a,f))d!==a[f]&&(a[f]=d,c=!0);else{const _=ke(f);l[_]=_a(o,i,_,d,e,!1)}else d!==a[f]&&(a[f]=d,c=!0)}}}else{lc(e,t,l,a)&&(c=!0);let u;for(const p in i)(!t||!ce(t,p)&&((u=Je(p))===p||!ce(t,u)))&&(o?n&&(n[p]!==void 0||n[u]!==void 0)&&(l[p]=_a(o,i,p,void 0,e,!0)):delete l[p]);if(a!==i)for(const p in a)(!t||!ce(t,p)&&!0)&&(delete a[p],c=!0)}c&&Ct(e,"set","$attrs")}function lc(e,t,n,s){const[l,a]=e.propsOptions;let r=!1,i;if(t)for(let o in t){if(tn(o))continue;const c=t[o];let u;l&&ce(l,u=ke(o))?!a||!a.includes(u)?n[u]=c:(i||(i={}))[u]=c:Nl(e.emitsOptions,o)||(!(o in s)||c!==s[o])&&(s[o]=c,r=!0)}if(a){const o=re(n),c=i||ge;for(let u=0;u<a.length;u++){const p=a[u];n[p]=_a(l,o,p,c[p],e,!ce(c,p))}}return r}function _a(e,t,n,s,l,a){const r=e[n];if(r!=null){const i=ce(r,"default");if(i&&s===void 0){const o=r.default;if(r.type!==Function&&!r.skipFactory&&Y(o)){const{propsDefaults:c}=l;n in c?s=c[n]:(Kt(l),s=c[n]=o.call(null,t),Lt())}else s=o}r[0]&&(a&&!i?s=!1:r[1]&&(s===""||s===Je(n))&&(s=!0))}return s}function ac(e,t,n=!1){const s=t.propsCache,l=s.get(e);if(l)return l;const a=e.props,r={},i=[];let o=!1;if(!Y(e)){const u=p=>{o=!0;const[f,d]=ac(p,t,!0);ae(r,f),d&&i.push(...d)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!a&&!o)return me(e)&&s.set(e,Sn),Sn;if(H(a))for(let u=0;u<a.length;u++){const p=ke(a[u]);ai(p)&&(r[p]=ge)}else if(a)for(const u in a){const p=ke(u);if(ai(p)){const f=a[u],d=r[p]=H(f)||Y(f)?{type:f}:ae({},f);if(d){const _=oi(Boolean,d.type),E=oi(String,d.type);d[0]=_>-1,d[1]=E<0||_<E,(_>-1||ce(d,"default"))&&i.push(p)}}}const c=[r,i];return me(e)&&s.set(e,c),c}function ai(e){return e[0]!=="$"}function ri(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ii(e,t){return ri(e)===ri(t)}function oi(e,t){return H(t)?t.findIndex(n=>ii(n,e)):Y(t)&&ii(t,e)?0:-1}const rc=e=>e[0]==="_"||e==="$stable",cr=e=>H(e)?e.map(Ge):[Ge(e)],fh=(e,t,n)=>{if(t._n)return t;const s=er((...l)=>cr(t(...l)),n);return s._c=!1,s},ic=(e,t,n)=>{const s=e._ctx;for(const l in e){if(rc(l))continue;const a=e[l];if(Y(a))t[l]=fh(l,a,s);else if(a!=null){const r=cr(a);t[l]=()=>r}}},oc=(e,t)=>{const n=cr(t);e.slots.default=()=>n},hh=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=re(t),sl(t,"_",n)):ic(t,e.slots={})}else e.slots={},t&&oc(e,t);sl(e.slots,Fl,1)},dh=(e,t,n)=>{const{vnode:s,slots:l}=e;let a=!0,r=ge;if(s.shapeFlag&32){const i=t._;i?n&&i===1?a=!1:(ae(l,t),!n&&i===1&&delete l._):(a=!t.$stable,ic(t,l)),r=t}else t&&(oc(e,t),r={default:1});if(a)for(const i in l)!rc(i)&&!(i in r)&&delete l[i]};function cl(e,t,n,s,l=!1){if(H(e)){e.forEach((f,d)=>cl(f,t&&(H(t)?t[d]:t),n,s,l));return}if(ln(s)&&!l)return;const a=s.shapeFlag&4?Dl(s.component)||s.component.proxy:s.el,r=l?null:a,{i,r:o}=e,c=t&&t.r,u=i.refs===ge?i.refs={}:i.refs,p=i.setupState;if(c!=null&&c!==o&&(X(c)?(u[c]=null,ce(p,c)&&(p[c]=null)):Ce(c)&&(c.value=null)),Y(o))xt(o,i,12,[r,u]);else{const f=X(o),d=Ce(o);if(f||d){const _=()=>{if(e.f){const E=f?ce(p,o)?p[o]:u[o]:o.value;l?H(E)&&Da(E,a):H(E)?E.includes(a)||E.push(a):f?(u[o]=[a],ce(p,o)&&(p[o]=u[o])):(o.value=[a],e.k&&(u[e.k]=o.value))}else f?(u[o]=r,ce(p,o)&&(p[o]=r)):d&&(o.value=r,e.k&&(u[e.k]=r))};r?(_.id=-1,Re(_,n)):_()}}}let Pt=!1;const Ks=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",zs=e=>e.nodeType===8;function gh(e){const{mt:t,p:n,o:{patchProp:s,createText:l,nextSibling:a,parentNode:r,remove:i,insert:o,createComment:c}}=e,u=(y,m)=>{if(!m.hasChildNodes()){n(null,y,m),il(),m._vnode=y;return}Pt=!1,p(m.firstChild,y,null,null,null),il(),m._vnode=y,Pt&&console.error("Hydration completed but contains mismatches.")},p=(y,m,k,b,S,L=!1)=>{const I=zs(y)&&y.data==="[",j=()=>E(y,m,k,b,S,I),{type:N,ref:q,shapeFlag:O,patchFlag:P}=m;let D=y.nodeType;m.el=y,P===-2&&(L=!1,m.dynamicChildren=null);let $=null;switch(N){case pn:D!==3?m.children===""?(o(m.el=l(""),r(y),y),$=y):$=j():(y.data!==m.children&&(Pt=!0,y.data=m.children),$=a(y));break;case Oe:D!==8||I?$=j():$=a(y);break;case an:if(I&&(y=a(y),D=y.nodeType),D===1||D===3){$=y;const ne=!m.children.length;for(let ee=0;ee<m.staticCount;ee++)ne&&(m.children+=$.nodeType===1?$.outerHTML:$.data),ee===m.staticCount-1&&(m.anchor=$),$=a($);return I?a($):$}else j();break;case fe:I?$=_(y,m,k,b,S,L):$=j();break;default:if(O&1)D!==1||m.type.toLowerCase()!==y.tagName.toLowerCase()?$=j():$=f(y,m,k,b,S,L);else if(O&6){m.slotScopeIds=S;const ne=r(y);if(t(m,ne,null,k,b,Ks(ne),L),$=I?w(y):a(y),$&&zs($)&&$.data==="teleport end"&&($=a($)),ln(m)){let ee;I?(ee=ue(fe),ee.anchor=$?$.previousSibling:ne.lastChild):ee=y.nodeType===3?vs(""):ue("div"),ee.el=y,m.component.subTree=ee}}else O&64?D!==8?$=j():$=m.type.hydrate(y,m,k,b,S,L,e,d):O&128&&($=m.type.hydrate(y,m,k,b,Ks(r(y)),S,L,e,p))}return q!=null&&cl(q,null,b,m),$},f=(y,m,k,b,S,L)=>{L=L||!!m.dynamicChildren;const{type:I,props:j,patchFlag:N,shapeFlag:q,dirs:O}=m,P=I==="input"&&O||I==="option";if(P||N!==-1){if(O&&gt(m,null,k,"created"),j)if(P||!L||N&48)for(const $ in j)(P&&$.endsWith("value")||dn($)&&!tn($))&&s(y,$,null,j[$],!1,void 0,k);else j.onClick&&s(y,"onClick",null,j.onClick,!1,void 0,k);let D;if((D=j&&j.onVnodeBeforeMount)&&Fe(D,k,m),O&&gt(m,null,k,"beforeMount"),((D=j&&j.onVnodeMounted)||O)&&Fo(()=>{D&&Fe(D,k,m),O&&gt(m,null,k,"mounted")},b),q&16&&!(j&&(j.innerHTML||j.textContent))){let $=d(y.firstChild,m,y,k,b,S,L);for(;$;){Pt=!0;const ne=$;$=$.nextSibling,i(ne)}}else q&8&&y.textContent!==m.children&&(Pt=!0,y.textContent=m.children)}return y.nextSibling},d=(y,m,k,b,S,L,I)=>{I=I||!!m.dynamicChildren;const j=m.children,N=j.length;for(let q=0;q<N;q++){const O=I?j[q]:j[q]=Ge(j[q]);if(y)y=p(y,O,b,S,L,I);else{if(O.type===pn&&!O.children)continue;Pt=!0,n(null,O,k,null,b,S,Ks(k),L)}}return y},_=(y,m,k,b,S,L)=>{const{slotScopeIds:I}=m;I&&(S=S?S.concat(I):I);const j=r(y),N=d(a(y),m,j,k,b,S,L);return N&&zs(N)&&N.data==="]"?a(m.anchor=N):(Pt=!0,o(m.anchor=c("]"),j,N),N)},E=(y,m,k,b,S,L)=>{if(Pt=!0,m.el=null,L){const N=w(y);for(;;){const q=a(y);if(q&&q!==N)i(q);else break}}const I=a(y),j=r(y);return i(y),n(null,m,j,I,k,b,Ks(j),S),I},w=y=>{let m=0;for(;y;)if(y=a(y),y&&zs(y)&&(y.data==="["&&m++,y.data==="]")){if(m===0)return a(y);m--}return y};return[u,p]}const Re=Fo;function cc(e){return pc(e)}function uc(e){return pc(e,gh)}function pc(e,t){const n=ca();n.__VUE__=!0;const{insert:s,remove:l,patchProp:a,createElement:r,createText:i,createComment:o,setText:c,setElementText:u,parentNode:p,nextSibling:f,setScopeId:d=$e,insertStaticContent:_}=e,E=(h,g,v,x=null,T=null,R=null,V=!1,M=null,F=!!g.dynamicChildren)=>{if(h===g)return;h&&!ct(h,g)&&(x=C(h),Le(h,T,R,!0),h=null),g.patchFlag===-2&&(F=!1,g.dynamicChildren=null);const{type:A,ref:G,shapeFlag:z}=g;switch(A){case pn:w(h,g,v,x);break;case Oe:y(h,g,v,x);break;case an:h==null&&m(g,v,x,V);break;case fe:P(h,g,v,x,T,R,V,M,F);break;default:z&1?S(h,g,v,x,T,R,V,M,F):z&6?D(h,g,v,x,T,R,V,M,F):(z&64||z&128)&&A.process(h,g,v,x,T,R,V,M,F,B)}G!=null&&T&&cl(G,h&&h.ref,R,g||h,!g)},w=(h,g,v,x)=>{if(h==null)s(g.el=i(g.children),v,x);else{const T=g.el=h.el;g.children!==h.children&&c(T,g.children)}},y=(h,g,v,x)=>{h==null?s(g.el=o(g.children||""),v,x):g.el=h.el},m=(h,g,v,x)=>{[h.el,h.anchor]=_(h.children,g,v,x,h.el,h.anchor)},k=({el:h,anchor:g},v,x)=>{let T;for(;h&&h!==g;)T=f(h),s(h,v,x),h=T;s(g,v,x)},b=({el:h,anchor:g})=>{let v;for(;h&&h!==g;)v=f(h),l(h),h=v;l(g)},S=(h,g,v,x,T,R,V,M,F)=>{V=V||g.type==="svg",h==null?L(g,v,x,T,R,V,M,F):N(h,g,T,R,V,M,F)},L=(h,g,v,x,T,R,V,M)=>{let F,A;const{type:G,props:z,shapeFlag:J,transition:Q,dirs:se}=h;if(F=h.el=r(h.type,R,z&&z.is,z),J&8?u(F,h.children):J&16&&j(h.children,F,null,x,T,R&&G!=="foreignObject",V,M),se&&gt(h,null,x,"created"),I(F,h,h.scopeId,V,x),z){for(const ye in z)ye!=="value"&&!tn(ye)&&a(F,ye,null,z[ye],R,h.children,x,T,Pe);"value"in z&&a(F,"value",null,z.value),(A=z.onVnodeBeforeMount)&&Fe(A,x,h)}se&&gt(h,null,x,"beforeMount");const _e=(!T||T&&!T.pendingBranch)&&Q&&!Q.persisted;_e&&Q.beforeEnter(F),s(F,g,v),((A=z&&z.onVnodeMounted)||_e||se)&&Re(()=>{A&&Fe(A,x,h),_e&&Q.enter(F),se&&gt(h,null,x,"mounted")},T)},I=(h,g,v,x,T)=>{if(v&&d(h,v),x)for(let R=0;R<x.length;R++)d(h,x[R]);if(T){let R=T.subTree;if(g===R){const V=T.vnode;I(h,V,V.scopeId,V.slotScopeIds,T.parent)}}},j=(h,g,v,x,T,R,V,M,F=0)=>{for(let A=F;A<h.length;A++){const G=h[A]=M?qt(h[A]):Ge(h[A]);E(null,G,g,v,x,T,R,V,M)}},N=(h,g,v,x,T,R,V)=>{const M=g.el=h.el;let{patchFlag:F,dynamicChildren:A,dirs:G}=g;F|=h.patchFlag&16;const z=h.props||ge,J=g.props||ge;let Q;v&&Jt(v,!1),(Q=J.onVnodeBeforeUpdate)&&Fe(Q,v,g,h),G&&gt(g,h,v,"beforeUpdate"),v&&Jt(v,!0);const se=T&&g.type!=="foreignObject";if(A?q(h.dynamicChildren,A,M,v,x,se,R):V||oe(h,g,M,null,v,x,se,R,!1),F>0){if(F&16)O(M,g,z,J,v,x,T);else if(F&2&&z.class!==J.class&&a(M,"class",null,J.class,T),F&4&&a(M,"style",z.style,J.style,T),F&8){const _e=g.dynamicProps;for(let ye=0;ye<_e.length;ye++){const Ee=_e[ye],it=z[Ee],jn=J[Ee];(jn!==it||Ee==="value")&&a(M,Ee,it,jn,T,h.children,v,x,Pe)}}F&1&&h.children!==g.children&&u(M,g.children)}else!V&&A==null&&O(M,g,z,J,v,x,T);((Q=J.onVnodeUpdated)||G)&&Re(()=>{Q&&Fe(Q,v,g,h),G&&gt(g,h,v,"updated")},x)},q=(h,g,v,x,T,R,V)=>{for(let M=0;M<g.length;M++){const F=h[M],A=g[M],G=F.el&&(F.type===fe||!ct(F,A)||F.shapeFlag&70)?p(F.el):v;E(F,A,G,null,x,T,R,V,!0)}},O=(h,g,v,x,T,R,V)=>{if(v!==x){if(v!==ge)for(const M in v)!tn(M)&&!(M in x)&&a(h,M,v[M],null,V,g.children,T,R,Pe);for(const M in x){if(tn(M))continue;const F=x[M],A=v[M];F!==A&&M!=="value"&&a(h,M,A,F,V,g.children,T,R,Pe)}"value"in x&&a(h,"value",v.value,x.value)}},P=(h,g,v,x,T,R,V,M,F)=>{const A=g.el=h?h.el:i(""),G=g.anchor=h?h.anchor:i("");let{patchFlag:z,dynamicChildren:J,slotScopeIds:Q}=g;Q&&(M=M?M.concat(Q):Q),h==null?(s(A,v,x),s(G,v,x),j(g.children,v,G,T,R,V,M,F)):z>0&&z&64&&J&&h.dynamicChildren?(q(h.dynamicChildren,J,v,T,R,V,M),(g.key!=null||T&&g===T.subTree)&&ur(h,g,!0)):oe(h,g,v,G,T,R,V,M,F)},D=(h,g,v,x,T,R,V,M,F)=>{g.slotScopeIds=M,h==null?g.shapeFlag&512?T.ctx.activate(g,v,x,V,F):$(g,v,x,T,R,V,F):ne(h,g,F)},$=(h,g,v,x,T,R,V)=>{const M=h.component=_c(h,x,T);if(Rs(h)&&(M.ctx.renderer=B),bc(M),M.asyncDep){if(T&&T.registerDep(M,ee),!h.el){const F=M.subTree=ue(Oe);y(null,F,g,v)}return}ee(M,h,g,v,T,R,V)},ne=(h,g,v)=>{const x=g.component=h.component;if(_f(h,g,v))if(x.asyncDep&&!x.asyncResolved){ie(x,g,v);return}else x.next=g,pf(x.update),x.update();else g.el=h.el,x.vnode=g},ee=(h,g,v,x,T,R,V)=>{const M=()=>{if(h.isMounted){let{next:G,bu:z,u:J,parent:Q,vnode:se}=h,_e=G,ye;Jt(h,!1),G?(G.el=se.el,ie(h,G,V)):G=se,z&&Rn(z),(ye=G.props&&G.props.onVnodeBeforeUpdate)&&Fe(ye,Q,G,se),Jt(h,!0);const Ee=Xs(h),it=h.subTree;h.subTree=Ee,E(it,Ee,p(it.el),C(it),h,T,R),G.el=Ee.el,_e===null&&tr(h,Ee.el),J&&Re(J,T),(ye=G.props&&G.props.onVnodeUpdated)&&Re(()=>Fe(ye,Q,G,se),T)}else{let G;const{el:z,props:J}=g,{bm:Q,m:se,parent:_e}=h,ye=ln(g);if(Jt(h,!1),Q&&Rn(Q),!ye&&(G=J&&J.onVnodeBeforeMount)&&Fe(G,_e,g),Jt(h,!0),z&&pe){const Ee=()=>{h.subTree=Xs(h),pe(z,h.subTree,h,T,null)};ye?g.type.__asyncLoader().then(()=>!h.isUnmounted&&Ee()):Ee()}else{const Ee=h.subTree=Xs(h);E(null,Ee,v,x,h,T,R),g.el=Ee.el}if(se&&Re(se,T),!ye&&(G=J&&J.onVnodeMounted)){const Ee=g;Re(()=>Fe(G,_e,Ee),T)}(g.shapeFlag&256||_e&&ln(_e.vnode)&&_e.vnode.shapeFlag&256)&&h.a&&Re(h.a,T),h.isMounted=!0,g=v=x=null}},F=h.effect=new Ts(M,()=>Al(A),h.scope),A=h.update=()=>F.run();A.id=h.uid,Jt(h,!0),A()},ie=(h,g,v)=>{g.component=h;const x=h.vnode.props;h.vnode=g,h.next=null,ph(h,g.props,x,v),dh(h,g.children,v),Un(),Qr(),Kn()},oe=(h,g,v,x,T,R,V,M,F=!1)=>{const A=h&&h.children,G=h?h.shapeFlag:0,z=g.children,{patchFlag:J,shapeFlag:Q}=g;if(J>0){if(J&128){It(A,z,v,x,T,R,V,M,F);return}else if(J&256){Ke(A,z,v,x,T,R,V,M,F);return}}Q&8?(G&16&&Pe(A,T,R),z!==A&&u(v,z)):G&16?Q&16?It(A,z,v,x,T,R,V,M,F):Pe(A,T,R,!0):(G&8&&u(v,""),Q&16&&j(z,v,x,T,R,V,M,F))},Ke=(h,g,v,x,T,R,V,M,F)=>{h=h||Sn,g=g||Sn;const A=h.length,G=g.length,z=Math.min(A,G);let J;for(J=0;J<z;J++){const Q=g[J]=F?qt(g[J]):Ge(g[J]);E(h[J],Q,v,null,T,R,V,M,F)}A>G?Pe(h,T,R,!0,!1,z):j(g,v,x,T,R,V,M,F,z)},It=(h,g,v,x,T,R,V,M,F)=>{let A=0;const G=g.length;let z=h.length-1,J=G-1;for(;A<=z&&A<=J;){const Q=h[A],se=g[A]=F?qt(g[A]):Ge(g[A]);if(ct(Q,se))E(Q,se,v,null,T,R,V,M,F);else break;A++}for(;A<=z&&A<=J;){const Q=h[z],se=g[J]=F?qt(g[J]):Ge(g[J]);if(ct(Q,se))E(Q,se,v,null,T,R,V,M,F);else break;z--,J--}if(A>z){if(A<=J){const Q=J+1,se=Q<G?g[Q].el:x;for(;A<=J;)E(null,g[A]=F?qt(g[A]):Ge(g[A]),v,se,T,R,V,M,F),A++}}else if(A>J)for(;A<=z;)Le(h[A],T,R,!0),A++;else{const Q=A,se=A,_e=new Map;for(A=se;A<=J;A++){const ze=g[A]=F?qt(g[A]):Ge(g[A]);ze.key!=null&&_e.set(ze.key,A)}let ye,Ee=0;const it=J-se+1;let jn=!1,Fr=0;const Gn=new Array(it);for(A=0;A<it;A++)Gn[A]=0;for(A=Q;A<=z;A++){const ze=h[A];if(Ee>=it){Le(ze,T,R,!0);continue}let dt;if(ze.key!=null)dt=_e.get(ze.key);else for(ye=se;ye<=J;ye++)if(Gn[ye-se]===0&&ct(ze,g[ye])){dt=ye;break}dt===void 0?Le(ze,T,R,!0):(Gn[dt-se]=A+1,dt>=Fr?Fr=dt:jn=!0,E(ze,g[dt],v,null,T,R,V,M,F),Ee++)}const Dr=jn?mh(Gn):Sn;for(ye=Dr.length-1,A=it-1;A>=0;A--){const ze=se+A,dt=g[ze],Br=ze+1<G?g[ze+1].el:x;Gn[A]===0?E(null,dt,v,Br,T,R,V,M,F):jn&&(ye<0||A!==Dr[ye]?ht(dt,v,Br,2):ye--)}}},ht=(h,g,v,x,T=null)=>{const{el:R,type:V,transition:M,children:F,shapeFlag:A}=h;if(A&6){ht(h.component.subTree,g,v,x);return}if(A&128){h.suspense.move(g,v,x);return}if(A&64){V.move(h,g,v,B);return}if(V===fe){s(R,g,v);for(let z=0;z<F.length;z++)ht(F[z],g,v,x);s(h.anchor,g,v);return}if(V===an){k(h,g,v);return}if(x!==2&&A&1&&M)if(x===0)M.beforeEnter(R),s(R,g,v),Re(()=>M.enter(R),T);else{const{leave:z,delayLeave:J,afterLeave:Q}=M,se=()=>s(R,g,v),_e=()=>{z(R,()=>{se(),Q&&Q()})};J?J(R,se,_e):_e()}else s(R,g,v)},Le=(h,g,v,x=!1,T=!1)=>{const{type:R,props:V,ref:M,children:F,dynamicChildren:A,shapeFlag:G,patchFlag:z,dirs:J}=h;if(M!=null&&cl(M,null,v,h,!0),G&256){g.ctx.deactivate(h);return}const Q=G&1&&J,se=!ln(h);let _e;if(se&&(_e=V&&V.onVnodeBeforeUnmount)&&Fe(_e,g,h),G&6)$s(h.component,v,x);else{if(G&128){h.suspense.unmount(v,x);return}Q&&gt(h,null,g,"beforeUnmount"),G&64?h.type.remove(h,g,v,T,B,x):A&&(R!==fe||z>0&&z&64)?Pe(A,g,v,!1,!0):(R===fe&&z&384||!T&&G&16)&&Pe(F,g,v),x&&vn(h)}(se&&(_e=V&&V.onVnodeUnmounted)||Q)&&Re(()=>{_e&&Fe(_e,g,h),Q&&gt(h,null,g,"unmounted")},v)},vn=h=>{const{type:g,el:v,anchor:x,transition:T}=h;if(g===fe){bn(v,x);return}if(g===an){b(h);return}const R=()=>{l(v),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(h.shapeFlag&1&&T&&!T.persisted){const{leave:V,delayLeave:M}=T,F=()=>V(v,R);M?M(h.el,R,F):F()}else R()},bn=(h,g)=>{let v;for(;h!==g;)v=f(h),l(h),h=v;l(g)},$s=(h,g,v)=>{const{bum:x,scope:T,update:R,subTree:V,um:M}=h;x&&Rn(x),T.stop(),R&&(R.active=!1,Le(V,h,g,v)),M&&Re(M,g),Re(()=>{h.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Pe=(h,g,v,x=!1,T=!1,R=0)=>{for(let V=R;V<h.length;V++)Le(h[V],g,v,x,T)},C=h=>h.shapeFlag&6?C(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),U=(h,g,v)=>{h==null?g._vnode&&Le(g._vnode,null,null,!0):E(g._vnode||null,h,g,null,null,null,v),Qr(),il(),g._vnode=h},B={p:E,um:Le,m:ht,r:vn,mt:$,mc:j,pc:oe,pbc:q,n:C,o:e};let W,pe;return t&&([W,pe]=t(B)),{render:U,hydrate:W,createApp:oh(U,W)}}function Jt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ur(e,t,n=!1){const s=e.children,l=t.children;if(H(s)&&H(l))for(let a=0;a<s.length;a++){const r=s[a];let i=l[a];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=l[a]=qt(l[a]),i.el=r.el),n||ur(r,i)),i.type===pn&&(i.el=r.el)}}function mh(e){const t=e.slice(),n=[0];let s,l,a,r,i;const o=e.length;for(s=0;s<o;s++){const c=e[s];if(c!==0){if(l=n[n.length-1],e[l]<c){t[s]=l,n.push(s);continue}for(a=0,r=n.length-1;a<r;)i=a+r>>1,e[n[i]]<c?a=i+1:r=i;c<e[n[a]]&&(a>0&&(t[s]=n[a-1]),n[a]=s)}}for(a=n.length,r=n[a-1];a-- >0;)n[a]=r,r=t[r];return n}const yh=e=>e.__isTeleport,ls=e=>e&&(e.disabled||e.disabled===""),ci=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,va=(e,t)=>{const n=e&&e.to;return X(n)?t?t(n):null:n},_h={__isTeleport:!0,process(e,t,n,s,l,a,r,i,o,c){const{mc:u,pc:p,pbc:f,o:{insert:d,querySelector:_,createText:E,createComment:w}}=c,y=ls(t.props);let{shapeFlag:m,children:k,dynamicChildren:b}=t;if(e==null){const S=t.el=E(""),L=t.anchor=E("");d(S,n,s),d(L,n,s);const I=t.target=va(t.props,_),j=t.targetAnchor=E("");I&&(d(j,I),r=r||ci(I));const N=(q,O)=>{m&16&&u(k,q,O,l,a,r,i,o)};y?N(n,L):I&&N(I,j)}else{t.el=e.el;const S=t.anchor=e.anchor,L=t.target=e.target,I=t.targetAnchor=e.targetAnchor,j=ls(e.props),N=j?n:L,q=j?S:I;if(r=r||ci(L),b?(f(e.dynamicChildren,b,N,l,a,r,i),ur(e,t,!0)):o||p(e,t,N,q,l,a,r,i,!1),y)j||Ws(t,n,S,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const O=t.target=va(t.props,_);O&&Ws(t,O,null,c,0)}else j&&Ws(t,L,I,c,1)}fc(t)},remove(e,t,n,s,{um:l,o:{remove:a}},r){const{shapeFlag:i,children:o,anchor:c,targetAnchor:u,target:p,props:f}=e;if(p&&a(u),(r||!ls(f))&&(a(c),i&16))for(let d=0;d<o.length;d++){const _=o[d];l(_,t,n,!0,!!_.dynamicChildren)}},move:Ws,hydrate:vh};function Ws(e,t,n,{o:{insert:s},m:l},a=2){a===0&&s(e.targetAnchor,t,n);const{el:r,anchor:i,shapeFlag:o,children:c,props:u}=e,p=a===2;if(p&&s(r,t,n),(!p||ls(u))&&o&16)for(let f=0;f<c.length;f++)l(c[f],t,n,2);p&&s(i,t,n)}function vh(e,t,n,s,l,a,{o:{nextSibling:r,parentNode:i,querySelector:o}},c){const u=t.target=va(t.props,o);if(u){const p=u._lpa||u.firstChild;if(t.shapeFlag&16)if(ls(t.props))t.anchor=c(r(e),t,i(e),n,s,l,a),t.targetAnchor=p;else{t.anchor=r(e);let f=p;for(;f;)if(f=r(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,u._lpa=t.targetAnchor&&r(t.targetAnchor);break}c(p,t,u,n,s,l,a)}fc(t)}return t.anchor&&r(t.anchor)}const bh=_h;function fc(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const fe=Symbol.for("v-fgt"),pn=Symbol.for("v-txt"),Oe=Symbol.for("v-cmt"),an=Symbol.for("v-stc"),as=[];let De=null;function Z(e=!1){as.push(De=e?null:[])}function hc(){as.pop(),De=as[as.length-1]||null}let fn=1;function ba(e){fn+=e}function dc(e){return e.dynamicChildren=fn>0?De||Sn:null,hc(),fn>0&&De&&De.push(e),e}function le(e,t,n,s,l,a){return dc(K(e,t,n,s,l,a,!0))}function Vt(e,t,n,s,l){return dc(ue(e,t,n,s,l,!0))}function Ut(e){return e?e.__v_isVNode===!0:!1}function ct(e,t){return e.type===t.type&&e.key===t.key}function jh(e){}const Fl="__vInternal",gc=({key:e})=>e!=null?e:null,el=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?X(e)||Ce(e)||Y(e)?{i:Ie,r:e,k:t,f:!!n}:e:null);function K(e,t=null,n=null,s=0,l=null,a=e===fe?0:1,r=!1,i=!1){const o={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&gc(t),ref:t&&el(t),scopeId:Ol,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:s,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:Ie};return i?(pr(o,n),a&128&&e.normalize(o)):n&&(o.shapeFlag|=X(n)?8:16),fn>0&&!r&&De&&(o.patchFlag>0||a&6)&&o.patchFlag!==32&&De.push(o),o}const ue=Eh;function Eh(e,t=null,n=null,s=0,l=null,a=!1){if((!e||e===Xo)&&(e=Oe),Ut(e)){const i=_t(e,t,!0);return n&&pr(i,n),fn>0&&!a&&De&&(i.shapeFlag&6?De[De.indexOf(e)]=i:De.push(i)),i.patchFlag|=-2,i}if(Ih(e)&&(e=e.__vccOpts),t){t=mc(t);let{class:i,style:o}=t;i&&!X(i)&&(t.class=kt(i)),me(o)&&(Wa(o)&&!H(o)&&(o=ae({},o)),t.style=on(o))}const r=X(e)?1:Lo(e)?128:yh(e)?64:me(e)?4:Y(e)?2:0;return K(e,t,n,s,l,r,a,!0)}function mc(e){return e?Wa(e)||Fl in e?ae({},e):e:null}function _t(e,t,n=!1){const{props:s,ref:l,patchFlag:a,children:r}=e,i=t?yc(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&gc(i),ref:t&&t.ref?n&&l?H(l)?l.concat(el(t)):[l,el(t)]:el(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==fe?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&_t(e.ssContent),ssFallback:e.ssFallback&&_t(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function vs(e=" ",t=0){return ue(pn,null,e,t)}function xh(e,t){const n=ue(an,null,e);return n.staticCount=t,n}function bs(e="",t=!1){return t?(Z(),Vt(Oe,null,e)):ue(Oe,null,e)}function Ge(e){return e==null||typeof e=="boolean"?ue(Oe):H(e)?ue(fe,null,e.slice()):typeof e=="object"?qt(e):ue(pn,null,String(e))}function qt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:_t(e)}function pr(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(s&65){const l=t.default;l&&(l._c&&(l._d=!1),pr(e,l()),l._c&&(l._d=!0));return}else{n=32;const l=t._;!l&&!(Fl in t)?t._ctx=Ie:l===3&&Ie&&(Ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Y(t)?(t={default:t,_ctx:Ie},n=32):(t=String(t),s&64?(n=16,t=[vs(t)]):n=8);e.children=t,e.shapeFlag|=n}function yc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const l in s)if(l==="class")t.class!==s.class&&(t.class=kt([t.class,s.class]));else if(l==="style")t.style=on([t.style,s.style]);else if(dn(l)){const a=t[l],r=s[l];r&&a!==r&&!(H(a)&&a.includes(r))&&(t[l]=a?[].concat(a,r):r)}else l!==""&&(t[l]=s[l])}return t}function Fe(e,t,n,s=null){Qe(e,t,7,[n,s])}const wh=sc();let kh=0;function _c(e,t,n){const s=e.type,l=(t?t.appContext:e.appContext)||wh,a={uid:kh++,vnode:e,type:s,parent:t,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new Va(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ac(s,l),emitsOptions:$o(s,l),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:s.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=hf.bind(null,a),e.ce&&e.ce(a),a}let we=null;const Tt=()=>we||Ie;let fr,En,ui="__VUE_INSTANCE_SETTERS__";(En=ca()[ui])||(En=ca()[ui]=[]),En.push(e=>we=e),fr=e=>{En.length>1?En.forEach(t=>t(e)):En[0](e)};const Kt=e=>{fr(e),e.scope.on()},Lt=()=>{we&&we.scope.off(),fr(null)};function vc(e){return e.vnode.shapeFlag&4}let qn=!1;function bc(e,t=!1){qn=t;const{props:n,children:s}=e.vnode,l=vc(e);uh(e,n,l,t),hh(e,s);const a=l?Ch(e,t):void 0;return qn=!1,a}function Ch(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ga(new Proxy(e.ctx,ga));const{setup:s}=n;if(s){const l=e.setupContext=s.length>1?xc(e):null;Kt(e),Un();const a=xt(s,e,0,[e.props,l]);if(Kn(),Lt(),Ba(a)){if(a.then(Lt,Lt),t)return a.then(r=>{ja(e,r,t)}).catch(r=>{yn(r,e,0)});e.asyncDep=a}else ja(e,a,t)}else Ec(e,t)}function ja(e,t,n){Y(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:me(t)&&(e.setupState=Qa(t)),Ec(e,n)}let ul,Ea;function jc(e){ul=e,Ea=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,Bf))}}const Sh=()=>!ul;function Ec(e,t,n){const s=e.type;if(!e.render){if(!t&&ul&&!s.render){const l=s.template||or(e).template;if(l){const{isCustomElement:a,compilerOptions:r}=e.appContext.config,{delimiters:i,compilerOptions:o}=s,c=ae(ae({isCustomElement:a,delimiters:i},r),o);s.render=ul(l,c)}}e.render=s.render||$e,Ea&&Ea(e)}Kt(e),Un(),nh(e),Kn(),Lt()}function Th(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return He(e,"get","$attrs"),t[n]}}))}function xc(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Th(e)},slots:e.slots,emit:e.emit,expose:t}}function Dl(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Qa(Ga(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ns)return ns[n](e)},has(t,n){return n in t||n in ns}}))}function xa(e,t=!0){return Y(e)?e.displayName||e.name:e.name||t&&e.__name}function Ih(e){return Y(e)&&"__vccOpts"in e}const Ye=(e,t)=>af(e,t,qn);function Ps(e,t,n){const s=arguments.length;return s===2?me(t)&&!H(t)?Ut(t)?ue(e,null,[t]):ue(e,t):ue(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ut(n)&&(n=[n]),ue(e,t,n))}const wc=Symbol.for("v-scx"),kc=()=>ut(wc);function Rh(){}function Ph(e,t,n,s){const l=n[s];if(l&&Cc(l,e))return l;const a=t();return a.memo=e.slice(),n[s]=a}function Cc(e,t){const n=e.memo;if(n.length!=t.length)return!1;for(let s=0;s<n.length;s++)if(Nn(n[s],t[s]))return!1;return fn>0&&De&&De.push(e),!0}const Sc="3.3.4",Ah={createComponentInstance:_c,setupComponent:bc,renderComponentRoot:Xs,setCurrentRenderingInstance:gs,isVNode:Ut,normalizeVNode:Ge},Nh=Ah,Oh=null,qh=null,Mh="http://www.w3.org/2000/svg",Zt=typeof document!="undefined"?document:null,pi=Zt&&Zt.createElement("template"),$h={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const l=t?Zt.createElementNS(Mh,e):Zt.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&l.setAttribute("multiple",s.multiple),l},createText:e=>Zt.createTextNode(e),createComment:e=>Zt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Zt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,l,a){const r=n?n.previousSibling:t.lastChild;if(l&&(l===a||l.nextSibling))for(;t.insertBefore(l.cloneNode(!0),n),!(l===a||!(l=l.nextSibling)););else{pi.innerHTML=s?`<svg>${e}</svg>`:e;const i=pi.content;if(s){const o=i.firstChild;for(;o.firstChild;)i.appendChild(o.firstChild);i.removeChild(o)}t.insertBefore(i,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Lh(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Fh(e,t,n){const s=e.style,l=X(n);if(n&&!l){if(t&&!X(t))for(const a in t)n[a]==null&&wa(s,a,"");for(const a in n)wa(s,a,n[a])}else{const a=s.display;l?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=a)}}const fi=/\s*!important$/;function wa(e,t,n){if(H(n))n.forEach(s=>wa(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Dh(e,t);fi.test(n)?e.setProperty(Je(s),n.replace(fi,""),"important"):e[s]=n}}const hi=["Webkit","Moz","ms"],ta={};function Dh(e,t){const n=ta[t];if(n)return n;let s=ke(t);if(s!=="filter"&&s in e)return ta[t]=s;s=mn(s);for(let l=0;l<hi.length;l++){const a=hi[l]+s;if(a in e)return ta[t]=a}return t}const di="http://www.w3.org/1999/xlink";function Bh(e,t,n,s,l){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(di,t.slice(6,t.length)):e.setAttributeNS(di,t,n);else{const a=hp(t);n==null||a&&!fo(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function Hh(e,t,n,s,l,a,r){if(t==="innerHTML"||t==="textContent"){s&&r(s,l,a),e[t]=n==null?"":n;return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){e._value=n;const c=i==="OPTION"?e.getAttribute("value"):e.value,u=n==null?"":n;c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let o=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=fo(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(t)}function Et(e,t,n,s){e.addEventListener(t,n,s)}function Vh(e,t,n,s){e.removeEventListener(t,n,s)}function Uh(e,t,n,s,l=null){const a=e._vei||(e._vei={}),r=a[t];if(s&&r)r.value=s;else{const[i,o]=Kh(t);if(s){const c=a[t]=Gh(s,l);Et(e,i,c,o)}else r&&(Vh(e,i,r,o),a[t]=void 0)}}const gi=/(?:Once|Passive|Capture)$/;function Kh(e){let t;if(gi.test(e)){t={};let s;for(;s=e.match(gi);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Je(e.slice(2)),t]}let na=0;const zh=Promise.resolve(),Wh=()=>na||(zh.then(()=>na=0),na=Date.now());function Gh(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Qe(Jh(s,n.value),t,5,[s])};return n.value=e,n.attached=Wh(),n}function Jh(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>l=>!l._stopped&&s&&s(l))}else return t}const mi=/^on[a-z]/,Yh=(e,t,n,s,l=!1,a,r,i,o)=>{t==="class"?Lh(e,s,l):t==="style"?Fh(e,n,s):dn(t)?Fa(t)||Uh(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Qh(e,t,s,l))?Hh(e,t,s,a,r,i,o):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Bh(e,t,s,l))};function Qh(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&mi.test(t)&&Y(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||mi.test(t)&&X(n)?!1:t in e}function Tc(e,t){const n=_n(e);class s extends Bl{constructor(a){super(n,a,t)}}return s.def=n,s}const Zh=e=>Tc(e,Uc),Xh=typeof HTMLElement!="undefined"?HTMLElement:class{};class Bl extends Xh{constructor(t,n={},s){super(),this._def=t,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Pl(()=>{this._connected||(Sa(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);new MutationObserver(s=>{for(const l of s)this._setAttr(l.attributeName)}).observe(this,{attributes:!0});const t=(s,l=!1)=>{const{props:a,styles:r}=s;let i;if(a&&!H(a))for(const o in a){const c=a[o];(c===Number||c&&c.type===Number)&&(o in this._props&&(this._props[o]=al(this._props[o])),(i||(i=Object.create(null)))[ke(o)]=!0)}this._numberProps=i,l&&this._resolveProps(s),this._applyStyles(r),this._update()},n=this._def.__asyncLoader;n?n().then(s=>t(s,!0)):t(this._def)}_resolveProps(t){const{props:n}=t,s=H(n)?n:Object.keys(n||{});for(const l of Object.keys(this))l[0]!=="_"&&s.includes(l)&&this._setProp(l,this[l],!0,!1);for(const l of s.map(ke))Object.defineProperty(this,l,{get(){return this._getProp(l)},set(a){this._setProp(l,a)}})}_setAttr(t){let n=this.getAttribute(t);const s=ke(t);this._numberProps&&this._numberProps[s]&&(n=al(n)),this._setProp(s,n,!1)}_getProp(t){return this._props[t]}_setProp(t,n,s=!0,l=!0){n!==this._props[t]&&(this._props[t]=n,l&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(Je(t),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Je(t),n+""):n||this.removeAttribute(Je(t))))}_update(){Sa(this._createVNode(),this.shadowRoot)}_createVNode(){const t=ue(this._def,ae({},this._props));return this._instance||(t.ce=n=>{this._instance=n,n.isCE=!0;const s=(a,r)=>{this.dispatchEvent(new CustomEvent(a,{detail:r}))};n.emit=(a,...r)=>{s(a,r),Je(a)!==a&&s(Je(a),r)};let l=this;for(;l=l&&(l.parentNode||l.host);)if(l instanceof Bl){n.parent=l._instance,n.provides=l._instance.provides;break}}),t}_applyStyles(t){t&&t.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function ed(e="$style"){{const t=Tt();if(!t)return ge;const n=t.type.__cssModules;if(!n)return ge;const s=n[e];return s||ge}}function td(e){const t=Tt();if(!t)return;const n=t.ut=(l=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(a=>Ca(a,l))},s=()=>{const l=e(t.proxy);ka(t.subTree,l),n(l)};Do(s),Xe(()=>{const l=new MutationObserver(s);l.observe(t.subTree.el.parentNode,{childList:!0}),Wn(()=>l.disconnect())})}function ka(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{ka(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)Ca(e.el,t);else if(e.type===fe)e.children.forEach(n=>ka(n,t));else if(e.type===an){let{el:n,anchor:s}=e;for(;n&&(Ca(n,t),n!==s);)n=n.nextSibling}}function Ca(e,t){if(e.nodeType===1){const n=e.style;for(const s in t)n.setProperty(`--${s}`,t[s])}}const At="transition",Jn="animation",hr=(e,{slots:t})=>Ps(Ho,Rc(e),t);hr.displayName="Transition";const Ic={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},nd=hr.props=ae({},lr,Ic),Yt=(e,t=[])=>{H(e)?e.forEach(n=>n(...t)):e&&e(...t)},yi=e=>e?H(e)?e.some(t=>t.length>1):e.length>1:!1;function Rc(e){const t={};for(const P in e)P in Ic||(t[P]=e[P]);if(e.css===!1)return t;const{name:n="v",type:s,duration:l,enterFromClass:a=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:o=a,appearActiveClass:c=r,appearToClass:u=i,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=e,_=sd(l),E=_&&_[0],w=_&&_[1],{onBeforeEnter:y,onEnter:m,onEnterCancelled:k,onLeave:b,onLeaveCancelled:S,onBeforeAppear:L=y,onAppear:I=m,onAppearCancelled:j=k}=t,N=(P,D,$)=>{Ot(P,D?u:i),Ot(P,D?c:r),$&&$()},q=(P,D)=>{P._isLeaving=!1,Ot(P,p),Ot(P,d),Ot(P,f),D&&D()},O=P=>(D,$)=>{const ne=P?I:m,ee=()=>N(D,P,$);Yt(ne,[D,ee]),_i(()=>{Ot(D,P?o:a),bt(D,P?u:i),yi(ne)||vi(D,s,E,ee)})};return ae(t,{onBeforeEnter(P){Yt(y,[P]),bt(P,a),bt(P,r)},onBeforeAppear(P){Yt(L,[P]),bt(P,o),bt(P,c)},onEnter:O(!1),onAppear:O(!0),onLeave(P,D){P._isLeaving=!0;const $=()=>q(P,D);bt(P,p),Ac(),bt(P,f),_i(()=>{!P._isLeaving||(Ot(P,p),bt(P,d),yi(b)||vi(P,s,w,$))}),Yt(b,[P,$])},onEnterCancelled(P){N(P,!1),Yt(k,[P])},onAppearCancelled(P){N(P,!0),Yt(j,[P])},onLeaveCancelled(P){q(P),Yt(S,[P])}})}function sd(e){if(e==null)return null;if(me(e))return[sa(e.enter),sa(e.leave)];{const t=sa(e);return[t,t]}}function sa(e){return al(e)}function bt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Ot(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function _i(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ld=0;function vi(e,t,n,s){const l=e._endId=++ld,a=()=>{l===e._endId&&s()};if(n)return setTimeout(a,n);const{type:r,timeout:i,propCount:o}=Pc(e,t);if(!r)return s();const c=r+"end";let u=0;const p=()=>{e.removeEventListener(c,f),a()},f=d=>{d.target===e&&++u>=o&&p()};setTimeout(()=>{u<o&&p()},i+1),e.addEventListener(c,f)}function Pc(e,t){const n=window.getComputedStyle(e),s=_=>(n[_]||"").split(", "),l=s(`${At}Delay`),a=s(`${At}Duration`),r=bi(l,a),i=s(`${Jn}Delay`),o=s(`${Jn}Duration`),c=bi(i,o);let u=null,p=0,f=0;t===At?r>0&&(u=At,p=r,f=a.length):t===Jn?c>0&&(u=Jn,p=c,f=o.length):(p=Math.max(r,c),u=p>0?r>c?At:Jn:null,f=u?u===At?a.length:o.length:0);const d=u===At&&/\b(transform|all)(,|$)/.test(s(`${At}Property`).toString());return{type:u,timeout:p,propCount:f,hasTransform:d}}function bi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>ji(n)+ji(e[s])))}function ji(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Ac(){return document.body.offsetHeight}const Nc=new WeakMap,Oc=new WeakMap,qc={name:"TransitionGroup",props:ae({},nd,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Tt(),s=sr();let l,a;return $l(()=>{if(!l.length)return;const r=e.moveClass||`${e.name||"v"}-move`;if(!ud(l[0].el,n.vnode.el,r))return;l.forEach(id),l.forEach(od);const i=l.filter(cd);Ac(),i.forEach(o=>{const c=o.el,u=c.style;bt(c,r),u.transform=u.webkitTransform=u.transitionDuration="";const p=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",p),c._moveCb=null,Ot(c,r))};c.addEventListener("transitionend",p)})}),()=>{const r=re(e),i=Rc(r);let o=r.tag||fe;l=a,a=t.default?ql(t.default()):[];for(let c=0;c<a.length;c++){const u=a[c];u.key!=null&&un(u,On(u,i,s,n))}if(l)for(let c=0;c<l.length;c++){const u=l[c];un(u,On(u,i,s,n)),Nc.set(u,u.el.getBoundingClientRect())}return ue(o,null,a)}}},ad=e=>delete e.mode;qc.props;const rd=qc;function id(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function od(e){Oc.set(e,e.el.getBoundingClientRect())}function cd(e){const t=Nc.get(e),n=Oc.get(e),s=t.left-n.left,l=t.top-n.top;if(s||l){const a=e.el.style;return a.transform=a.webkitTransform=`translate(${s}px,${l}px)`,a.transitionDuration="0s",e}}function ud(e,t,n){const s=e.cloneNode();e._vtc&&e._vtc.forEach(r=>{r.split(/\s+/).forEach(i=>i&&s.classList.remove(i))}),n.split(/\s+/).forEach(r=>r&&s.classList.add(r)),s.style.display="none";const l=t.nodeType===1?t:t.parentNode;l.appendChild(s);const{hasTransform:a}=Pc(s);return l.removeChild(s),a}const zt=e=>{const t=e.props["onUpdate:modelValue"]||!1;return H(t)?n=>Rn(t,n):t};function pd(e){e.target.composing=!0}function Ei(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const pl={created(e,{modifiers:{lazy:t,trim:n,number:s}},l){e._assign=zt(l);const a=s||l.props&&l.props.type==="number";Et(e,t?"change":"input",r=>{if(r.target.composing)return;let i=e.value;n&&(i=i.trim()),a&&(i=ll(i)),e._assign(i)}),n&&Et(e,"change",()=>{e.value=e.value.trim()}),t||(Et(e,"compositionstart",pd),Et(e,"compositionend",Ei),Et(e,"change",Ei))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:l}},a){if(e._assign=zt(a),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(l||e.type==="number")&&ll(e.value)===t))return;const r=t==null?"":t;e.value!==r&&(e.value=r)}},dr={deep:!0,created(e,t,n){e._assign=zt(n),Et(e,"change",()=>{const s=e._modelValue,l=Mn(e),a=e.checked,r=e._assign;if(H(s)){const i=kl(s,l),o=i!==-1;if(a&&!o)r(s.concat(l));else if(!a&&o){const c=[...s];c.splice(i,1),r(c)}}else if(gn(s)){const i=new Set(s);a?i.add(l):i.delete(l),r(i)}else r($c(e,a))})},mounted:xi,beforeUpdate(e,t,n){e._assign=zt(n),xi(e,t,n)}};function xi(e,{value:t,oldValue:n},s){e._modelValue=t,H(t)?e.checked=kl(t,s.props.value)>-1:gn(t)?e.checked=t.has(s.props.value):t!==n&&(e.checked=Bt(t,$c(e,!0)))}const gr={created(e,{value:t},n){e.checked=Bt(t,n.props.value),e._assign=zt(n),Et(e,"change",()=>{e._assign(Mn(e))})},beforeUpdate(e,{value:t,oldValue:n},s){e._assign=zt(s),t!==n&&(e.checked=Bt(t,s.props.value))}},Mc={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const l=gn(t);Et(e,"change",()=>{const a=Array.prototype.filter.call(e.options,r=>r.selected).map(r=>n?ll(Mn(r)):Mn(r));e._assign(e.multiple?l?new Set(a):a:a[0])}),e._assign=zt(s)},mounted(e,{value:t}){wi(e,t)},beforeUpdate(e,t,n){e._assign=zt(n)},updated(e,{value:t}){wi(e,t)}};function wi(e,t){const n=e.multiple;if(!(n&&!H(t)&&!gn(t))){for(let s=0,l=e.options.length;s<l;s++){const a=e.options[s],r=Mn(a);if(n)H(t)?a.selected=kl(t,r)>-1:a.selected=t.has(r);else if(Bt(Mn(a),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Mn(e){return"_value"in e?e._value:e.value}function $c(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Lc={created(e,t,n){Gs(e,t,n,null,"created")},mounted(e,t,n){Gs(e,t,n,null,"mounted")},beforeUpdate(e,t,n,s){Gs(e,t,n,s,"beforeUpdate")},updated(e,t,n,s){Gs(e,t,n,s,"updated")}};function Fc(e,t){switch(e){case"SELECT":return Mc;case"TEXTAREA":return pl;default:switch(t){case"checkbox":return dr;case"radio":return gr;default:return pl}}}function Gs(e,t,n,s,l){const r=Fc(e.tagName,n.props&&n.props.type)[l];r&&r(e,t,n,s)}function fd(){pl.getSSRProps=({value:e})=>({value:e}),gr.getSSRProps=({value:e},t)=>{if(t.props&&Bt(t.props.value,e))return{checked:!0}},dr.getSSRProps=({value:e},t)=>{if(H(e)){if(t.props&&kl(e,t.props.value)>-1)return{checked:!0}}else if(gn(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},Lc.getSSRProps=(e,t)=>{if(typeof t.type!="string")return;const n=Fc(t.type.toUpperCase(),t.props&&t.props.type);if(n.getSSRProps)return n.getSSRProps(e,t)}}const hd=["ctrl","shift","alt","meta"],dd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>hd.some(n=>e[`${n}Key`]&&!t.includes(n))},gd=(e,t)=>(n,...s)=>{for(let l=0;l<t.length;l++){const a=dd[t[l]];if(a&&a(n,t))return}return e(n,...s)},md={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},yd=(e,t)=>n=>{if(!("key"in n))return;const s=Je(n.key);if(t.some(l=>l===s||md[l]===s))return e(n)},Dc={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Yn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),Yn(e,!0),s.enter(e)):s.leave(e,()=>{Yn(e,!1)}):Yn(e,t))},beforeUnmount(e,{value:t}){Yn(e,t)}};function Yn(e,t){e.style.display=t?e._vod:"none"}function _d(){Dc.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const Bc=ae({patchProp:Yh},$h);let rs,ki=!1;function Hc(){return rs||(rs=cc(Bc))}function Vc(){return rs=ki?rs:uc(Bc),ki=!0,rs}const Sa=(...e)=>{Hc().render(...e)},Uc=(...e)=>{Vc().hydrate(...e)},Kc=(...e)=>{const t=Hc().createApp(...e),{mount:n}=t;return t.mount=s=>{const l=zc(s);if(!l)return;const a=t._component;!Y(a)&&!a.render&&!a.template&&(a.template=l.innerHTML),l.innerHTML="";const r=n(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),r},t},vd=(...e)=>{const t=Vc().createApp(...e),{mount:n}=t;return t.mount=s=>{const l=zc(s);if(l)return n(l,!0,l instanceof SVGElement)},t};function zc(e){return X(e)?document.querySelector(e):e}let Ci=!1;const bd=()=>{Ci||(Ci=!0,fd(),_d())};var jd=Object.freeze(Object.defineProperty({__proto__:null,Transition:hr,TransitionGroup:rd,VueElement:Bl,createApp:Kc,createSSRApp:vd,defineCustomElement:Tc,defineSSRCustomElement:Zh,hydrate:Uc,initDirectivesForSSR:bd,render:Sa,useCssModule:ed,useCssVars:td,vModelCheckbox:dr,vModelDynamic:Lc,vModelRadio:gr,vModelSelect:Mc,vModelText:pl,vShow:Dc,withKeys:yd,withModifiers:gd,EffectScope:Va,ReactiveEffect:Ts,customRef:Xp,effect:vp,effectScope:gp,getCurrentScope:mo,isProxy:Wa,isReactive:sn,isReadonly:cn,isRef:Ce,isShallow:ps,markRaw:Ga,onScopeDispose:mp,proxyRefs:Qa,reactive:zn,readonly:za,ref:ve,shallowReactive:Io,shallowReadonly:Wp,shallowRef:Ro,stop:bp,toRaw:re,toRef:sf,toRefs:ef,toValue:Yp,triggerRef:Jp,unref:at,camelize:ke,capitalize:mn,normalizeClass:kt,normalizeProps:ap,normalizeStyle:on,toDisplayString:Se,toHandlerKey:In,BaseTransition:Ho,BaseTransitionPropsValidators:lr,Comment:Oe,Fragment:fe,KeepAlive:Nf,Static:an,Suspense:bf,Teleport:bh,Text:pn,assertNumber:of,callWithAsyncErrorHandling:Qe,callWithErrorHandling:xt,cloneVNode:_t,compatUtils:qh,computed:Ye,createBlock:Vt,createCommentVNode:bs,createElementBlock:le,createElementVNode:K,createHydrationRenderer:uc,createPropsRestProxy:eh,createRenderer:cc,createSlots:Lf,createStaticVNode:xh,createTextVNode:vs,createVNode:ue,defineAsyncComponent:Pf,defineComponent:_n,defineEmits:Vf,defineExpose:Uf,defineModel:Wf,defineOptions:Kf,defineProps:Hf,defineSlots:zf,get devtools(){return wn},getCurrentInstance:Tt,getTransitionRawChildren:ql,guardReactiveProps:mc,h:Ps,handleError:yn,hasInjectionContext:ch,initCustomFormatter:Rh,inject:ut,isMemoSame:Cc,isRuntimeOnly:Sh,isVNode:Ut,mergeDefaults:Zf,mergeModels:Xf,mergeProps:yc,nextTick:Pl,onActivated:Uo,onBeforeMount:Wo,onBeforeUnmount:Ll,onBeforeUpdate:Go,onDeactivated:Ko,onErrorCaptured:Zo,onMounted:Xe,onRenderTracked:Qo,onRenderTriggered:Yo,onServerPrefetch:Jo,onUnmounted:Wn,onUpdated:$l,openBlock:Z,popScopeId:Gt,provide:ss,pushScopeId:Wt,queuePostFlushCb:Xa,registerRuntimeCompiler:jc,renderList:yt,renderSlot:Ff,resolveComponent:rr,resolveDirective:$f,resolveDynamicComponent:Mf,resolveFilter:Oh,resolveTransitionHooks:On,setBlockTracking:ba,setDevtoolsHook:Mo,setTransitionHooks:un,ssrContextKey:wc,ssrUtils:Nh,toHandlers:Df,transformVNodeArgs:jh,useAttrs:Yf,useModel:Qf,useSSRContext:kc,useSlots:Jf,useTransitionState:sr,version:Sc,warn:rf,watch:wt,watchEffect:Cf,watchPostEffect:Do,watchSyncEffect:Sf,withAsyncContext:th,withCtx:er,withDefaults:Gf,withDirectives:If,withMemo:Ph,withScopeId:df},Symbol.toStringTag,{value:"Module"}));function mr(e){throw e}function Wc(e){}function be(e,t,n,s){const l=e,a=new SyntaxError(String(l));return a.code=e,a.loc=t,a}const js=Symbol(""),is=Symbol(""),yr=Symbol(""),fl=Symbol(""),Gc=Symbol(""),hn=Symbol(""),Jc=Symbol(""),Yc=Symbol(""),_r=Symbol(""),vr=Symbol(""),As=Symbol(""),br=Symbol(""),Qc=Symbol(""),jr=Symbol(""),hl=Symbol(""),Er=Symbol(""),xr=Symbol(""),wr=Symbol(""),kr=Symbol(""),Zc=Symbol(""),Xc=Symbol(""),Hl=Symbol(""),dl=Symbol(""),Cr=Symbol(""),Sr=Symbol(""),Es=Symbol(""),Ns=Symbol(""),Tr=Symbol(""),Ta=Symbol(""),Ed=Symbol(""),Ia=Symbol(""),gl=Symbol(""),xd=Symbol(""),wd=Symbol(""),Ir=Symbol(""),kd=Symbol(""),Cd=Symbol(""),Rr=Symbol(""),eu=Symbol(""),$n={[js]:"Fragment",[is]:"Teleport",[yr]:"Suspense",[fl]:"KeepAlive",[Gc]:"BaseTransition",[hn]:"openBlock",[Jc]:"createBlock",[Yc]:"createElementBlock",[_r]:"createVNode",[vr]:"createElementVNode",[As]:"createCommentVNode",[br]:"createTextVNode",[Qc]:"createStaticVNode",[jr]:"resolveComponent",[hl]:"resolveDynamicComponent",[Er]:"resolveDirective",[xr]:"resolveFilter",[wr]:"withDirectives",[kr]:"renderList",[Zc]:"renderSlot",[Xc]:"createSlots",[Hl]:"toDisplayString",[dl]:"mergeProps",[Cr]:"normalizeClass",[Sr]:"normalizeStyle",[Es]:"normalizeProps",[Ns]:"guardReactiveProps",[Tr]:"toHandlers",[Ta]:"camelize",[Ed]:"capitalize",[Ia]:"toHandlerKey",[gl]:"setBlockTracking",[xd]:"pushScopeId",[wd]:"popScopeId",[Ir]:"withCtx",[kd]:"unref",[Cd]:"isRef",[Rr]:"withMemo",[eu]:"isMemoSame"};function Sd(e){Object.getOwnPropertySymbols(e).forEach(t=>{$n[t]=e[t]})}const et={source:"",start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function Td(e,t=et){return{type:0,children:e,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:t}}function xs(e,t,n,s,l,a,r,i=!1,o=!1,c=!1,u=et){return e&&(i?(e.helper(hn),e.helper(Dn(e.inSSR,c))):e.helper(Fn(e.inSSR,c)),r&&e.helper(wr)),{type:13,tag:t,props:n,children:s,patchFlag:l,dynamicProps:a,directives:r,isBlock:i,disableTracking:o,isComponent:c,loc:u}}function Os(e,t=et){return{type:17,loc:t,elements:e}}function st(e,t=et){return{type:15,loc:t,properties:e}}function je(e,t){return{type:16,loc:et,key:X(e)?te(e,!0):e,value:t}}function te(e,t=!1,n=et,s=0){return{type:4,loc:n,content:e,isStatic:t,constType:t?3:s}}function pt(e,t=et){return{type:8,loc:t,children:e}}function xe(e,t=[],n=et){return{type:14,loc:n,callee:e,arguments:t}}function Ln(e,t=void 0,n=!1,s=!1,l=et){return{type:18,params:e,returns:t,newline:n,isSlot:s,loc:l}}function Ra(e,t,n,s=!0){return{type:19,test:e,consequent:t,alternate:n,newline:s,loc:et}}function Id(e,t,n=!1){return{type:20,index:e,value:t,isVNode:n,loc:et}}function Rd(e){return{type:21,body:e,loc:et}}function Fn(e,t){return e||t?_r:vr}function Dn(e,t){return e||t?Jc:Yc}function Pr(e,{helper:t,removeHelper:n,inSSR:s}){e.isBlock||(e.isBlock=!0,n(Fn(s,e.isComponent)),t(hn),t(Dn(s,e.isComponent)))}const Be=e=>e.type===4&&e.isStatic,Cn=(e,t)=>e===t||e===Je(t);function tu(e){if(Cn(e,"Teleport"))return is;if(Cn(e,"Suspense"))return yr;if(Cn(e,"KeepAlive"))return fl;if(Cn(e,"BaseTransition"))return Gc}const Pd=/^\d|[^\$\w]/,Ar=e=>!Pd.test(e),Ad=/[A-Za-z_$\xA0-\uFFFF]/,Nd=/[\.\?\w$\xA0-\uFFFF]/,Od=/\s+[.[]\s*|\s*[.[]\s+/g,qd=e=>{e=e.trim().replace(Od,r=>r.trim());let t=0,n=[],s=0,l=0,a=null;for(let r=0;r<e.length;r++){const i=e.charAt(r);switch(t){case 0:if(i==="[")n.push(t),t=1,s++;else if(i==="(")n.push(t),t=2,l++;else if(!(r===0?Ad:Nd).test(i))return!1;break;case 1:i==="'"||i==='"'||i==="`"?(n.push(t),t=3,a=i):i==="["?s++:i==="]"&&(--s||(t=n.pop()));break;case 2:if(i==="'"||i==='"'||i==="`")n.push(t),t=3,a=i;else if(i==="(")l++;else if(i===")"){if(r===e.length-1)return!1;--l||(t=n.pop())}break;case 3:i===a&&(t=n.pop(),a=null);break}}return!s&&!l},nu=qd;function su(e,t,n){const l={source:e.source.slice(t,t+n),start:ml(e.start,e.source,t),end:e.end};return n!=null&&(l.end=ml(e.start,e.source,t+n)),l}function ml(e,t,n=t.length){return yl(ae({},e),t,n)}function yl(e,t,n=t.length){let s=0,l=-1;for(let a=0;a<n;a++)t.charCodeAt(a)===10&&(s++,l=a);return e.offset+=n,e.line+=s,e.column=l===-1?e.column+n:n-l,e}function nt(e,t,n=!1){for(let s=0;s<e.props.length;s++){const l=e.props[s];if(l.type===7&&(n||l.exp)&&(X(t)?l.name===t:t.test(l.name)))return l}}function Vl(e,t,n=!1,s=!1){for(let l=0;l<e.props.length;l++){const a=e.props[l];if(a.type===6){if(n)continue;if(a.name===t&&(a.value||s))return a}else if(a.name==="bind"&&(a.exp||s)&&en(a.arg,t))return a}}function en(e,t){return!!(e&&Be(e)&&e.content===t)}function Md(e){return e.props.some(t=>t.type===7&&t.name==="bind"&&(!t.arg||t.arg.type!==4||!t.arg.isStatic))}function la(e){return e.type===5||e.type===2}function $d(e){return e.type===7&&e.name==="slot"}function _l(e){return e.type===1&&e.tagType===3}function vl(e){return e.type===1&&e.tagType===2}const Ld=new Set([Es,Ns]);function lu(e,t=[]){if(e&&!X(e)&&e.type===14){const n=e.callee;if(!X(n)&&Ld.has(n))return lu(e.arguments[0],t.concat(e))}return[e,t]}function bl(e,t,n){let s,l=e.type===13?e.props:e.arguments[2],a=[],r;if(l&&!X(l)&&l.type===14){const i=lu(l);l=i[0],a=i[1],r=a[a.length-1]}if(l==null||X(l))s=st([t]);else if(l.type===14){const i=l.arguments[0];!X(i)&&i.type===15?Si(t,i)||i.properties.unshift(t):l.callee===Tr?s=xe(n.helper(dl),[st([t]),l]):l.arguments.unshift(st([t])),!s&&(s=l)}else l.type===15?(Si(t,l)||l.properties.unshift(t),s=l):(s=xe(n.helper(dl),[st([t]),l]),r&&r.callee===Ns&&(r=a[a.length-2]));e.type===13?r?r.arguments[0]=s:e.props=s:r?r.arguments[0]=s:e.arguments[2]=s}function Si(e,t){let n=!1;if(e.key.type===4){const s=e.key.content;n=t.properties.some(l=>l.key.type===4&&l.key.content===s)}return n}function ws(e,t){return`_${t}_${e.replace(/[^\w]/g,(n,s)=>n==="-"?"_":e.charCodeAt(s).toString())}`}function Fd(e){return e.type===14&&e.callee===Rr?e.arguments[1].returns:e}function Ti(e,t){const n=t.options?t.options.compatConfig:t.compatConfig,s=n&&n[e];return e==="MODE"?s||3:s}function rn(e,t){const n=Ti("MODE",t),s=Ti(e,t);return n===3?s===!0:s!==!1}function ks(e,t,n,...s){return rn(e,t)}const Dd=/&(gt|lt|amp|apos|quot);/g,Bd={gt:">",lt:"<",amp:"&",apos:"'",quot:'"'},Ii={delimiters:["{{","}}"],getNamespace:()=>0,getTextMode:()=>0,isVoidTag:Zs,isPreTag:Zs,isCustomElement:Zs,decodeEntities:e=>e.replace(Dd,(t,n)=>Bd[n]),onError:mr,onWarn:Wc,comments:!1};function Hd(e,t={}){const n=Vd(e,t),s=Ze(n);return Td(Nr(n,0,[]),rt(n,s))}function Vd(e,t){const n=ae({},Ii);let s;for(s in t)n[s]=t[s]===void 0?Ii[s]:t[s];return{options:n,column:1,line:1,offset:0,originalSource:e,source:e,inPre:!1,inVPre:!1,onWarn:n.onWarn}}function Nr(e,t,n){const s=Ul(n),l=s?s.ns:0,a=[];for(;!Zd(e,t,n);){const i=e.source;let o;if(t===0||t===1){if(!e.inVPre&&Ne(i,e.options.delimiters[0]))o=Yd(e,t);else if(t===0&&i[0]==="<")if(i.length===1)de(e,5,1);else if(i[1]==="!")Ne(i,"<!--")?o=Kd(e):Ne(i,"<!DOCTYPE")?o=Qn(e):Ne(i,"<![CDATA[")?l!==0?o=Ud(e,n):(de(e,1),o=Qn(e)):(de(e,11),o=Qn(e));else if(i[1]==="/")if(i.length===2)de(e,5,2);else if(i[2]===">"){de(e,14,2),Te(e,3);continue}else if(/[a-z]/i.test(i[2])){de(e,23),Pa(e,jl.End,s);continue}else de(e,12,2),o=Qn(e);else/[a-z]/i.test(i[1])?(o=zd(e,n),rn("COMPILER_NATIVE_TEMPLATE",e)&&o&&o.tag==="template"&&!o.props.some(c=>c.type===7&&au(c.name))&&(o=o.children)):i[1]==="?"?(de(e,21,1),o=Qn(e)):de(e,12,1)}if(o||(o=Qd(e,t)),H(o))for(let c=0;c<o.length;c++)Ri(a,o[c]);else Ri(a,o)}let r=!1;if(t!==2&&t!==1){const i=e.options.whitespace!=="preserve";for(let o=0;o<a.length;o++){const c=a[o];if(c.type===2)if(e.inPre)c.content=c.content.replace(/\r\n/g,`
`);else if(/[^\t\r\n\f ]/.test(c.content))i&&(c.content=c.content.replace(/[\t\r\n\f ]+/g," "));else{const u=a[o-1],p=a[o+1];!u||!p||i&&(u.type===3&&p.type===3||u.type===3&&p.type===1||u.type===1&&p.type===3||u.type===1&&p.type===1&&/[\r\n]/.test(c.content))?(r=!0,a[o]=null):c.content=" "}else c.type===3&&!e.options.comments&&(r=!0,a[o]=null)}if(e.inPre&&s&&e.options.isPreTag(s.tag)){const o=a[0];o&&o.type===2&&(o.content=o.content.replace(/^\r?\n/,""))}}return r?a.filter(Boolean):a}function Ri(e,t){if(t.type===2){const n=Ul(e);if(n&&n.type===2&&n.loc.end.offset===t.loc.start.offset){n.content+=t.content,n.loc.end=t.loc.end,n.loc.source+=t.loc.source;return}}e.push(t)}function Ud(e,t){Te(e,9);const n=Nr(e,3,t);return e.source.length===0?de(e,6):Te(e,3),n}function Kd(e){const t=Ze(e);let n;const s=/--(\!)?>/.exec(e.source);if(!s)n=e.source.slice(4),Te(e,e.source.length),de(e,7);else{s.index<=3&&de(e,0),s[1]&&de(e,10),n=e.source.slice(4,s.index);const l=e.source.slice(0,s.index);let a=1,r=0;for(;(r=l.indexOf("<!--",a))!==-1;)Te(e,r-a+1),r+4<l.length&&de(e,16),a=r+1;Te(e,s.index+s[0].length-a+1)}return{type:3,content:n,loc:rt(e,t)}}function Qn(e){const t=Ze(e),n=e.source[1]==="?"?1:2;let s;const l=e.source.indexOf(">");return l===-1?(s=e.source.slice(n),Te(e,e.source.length)):(s=e.source.slice(n,l),Te(e,l+1)),{type:3,content:s,loc:rt(e,t)}}function zd(e,t){const n=e.inPre,s=e.inVPre,l=Ul(t),a=Pa(e,jl.Start,l),r=e.inPre&&!n,i=e.inVPre&&!s;if(a.isSelfClosing||e.options.isVoidTag(a.tag))return r&&(e.inPre=!1),i&&(e.inVPre=!1),a;t.push(a);const o=e.options.getTextMode(a,l),c=Nr(e,o,t);t.pop();{const u=a.props.find(p=>p.type===6&&p.name==="inline-template");if(u&&ks("COMPILER_INLINE_TEMPLATE",e,u.loc)){const p=rt(e,a.loc.end);u.value={type:2,content:p.source,loc:p}}}if(a.children=c,Aa(e.source,a.tag))Pa(e,jl.End,l);else if(de(e,24,0,a.loc.start),e.source.length===0&&a.tag.toLowerCase()==="script"){const u=c[0];u&&Ne(u.loc.source,"<!--")&&de(e,8)}return a.loc=rt(e,a.loc.start),r&&(e.inPre=!1),i&&(e.inVPre=!1),a}var jl=(e=>(e[e.Start=0]="Start",e[e.End=1]="End",e))(jl||{});const au=Ve("if,else,else-if,for,slot");function Pa(e,t,n){const s=Ze(e),l=/^<\/?([a-z][^\t\r\n\f />]*)/i.exec(e.source),a=l[1],r=e.options.getNamespace(a,n);Te(e,l[0].length),Cs(e);const i=Ze(e),o=e.source;e.options.isPreTag(a)&&(e.inPre=!0);let c=Pi(e,t);t===0&&!e.inVPre&&c.some(f=>f.type===7&&f.name==="pre")&&(e.inVPre=!0,ae(e,i),e.source=o,c=Pi(e,t).filter(f=>f.name!=="v-pre"));let u=!1;if(e.source.length===0?de(e,9):(u=Ne(e.source,"/>"),t===1&&u&&de(e,4),Te(e,u?2:1)),t===1)return;let p=0;return e.inVPre||(a==="slot"?p=2:a==="template"?c.some(f=>f.type===7&&au(f.name))&&(p=3):Wd(a,c,e)&&(p=1)),{type:1,ns:r,tag:a,tagType:p,props:c,isSelfClosing:u,children:[],loc:rt(e,s),codegenNode:void 0}}function Wd(e,t,n){const s=n.options;if(s.isCustomElement(e))return!1;if(e==="component"||/^[A-Z]/.test(e)||tu(e)||s.isBuiltInComponent&&s.isBuiltInComponent(e)||s.isNativeTag&&!s.isNativeTag(e))return!0;for(let l=0;l<t.length;l++){const a=t[l];if(a.type===6){if(a.name==="is"&&a.value){if(a.value.content.startsWith("vue:"))return!0;if(ks("COMPILER_IS_ON_ELEMENT",n,a.loc))return!0}}else{if(a.name==="is")return!0;if(a.name==="bind"&&en(a.arg,"is")&&!0&&ks("COMPILER_IS_ON_ELEMENT",n,a.loc))return!0}}}function Pi(e,t){const n=[],s=new Set;for(;e.source.length>0&&!Ne(e.source,">")&&!Ne(e.source,"/>");){if(Ne(e.source,"/")){de(e,22),Te(e,1),Cs(e);continue}t===1&&de(e,3);const l=Gd(e,s);l.type===6&&l.value&&l.name==="class"&&(l.value.content=l.value.content.replace(/\s+/g," ").trim()),t===0&&n.push(l),/^[^\t\r\n\f />]/.test(e.source)&&de(e,15),Cs(e)}return n}function Gd(e,t){var n;const s=Ze(e),a=/^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(e.source)[0];t.has(a)&&de(e,2),t.add(a),a[0]==="="&&de(e,19);{const o=/["'<]/g;let c;for(;c=o.exec(a);)de(e,17,c.index)}Te(e,a.length);let r;/^[\t\r\n\f ]*=/.test(e.source)&&(Cs(e),Te(e,1),Cs(e),r=Jd(e),r||de(e,13));const i=rt(e,s);if(!e.inVPre&&/^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(a)){const o=/(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(a);let c=Ne(a,"."),u=o[1]||(c||Ne(a,":")?"bind":Ne(a,"@")?"on":"slot"),p;if(o[2]){const d=u==="slot",_=a.lastIndexOf(o[2],a.length-(((n=o[3])==null?void 0:n.length)||0)),E=rt(e,Ai(e,s,_),Ai(e,s,_+o[2].length+(d&&o[3]||"").length));let w=o[2],y=!0;w.startsWith("[")?(y=!1,w.endsWith("]")?w=w.slice(1,w.length-1):(de(e,27),w=w.slice(1))):d&&(w+=o[3]||""),p={type:4,content:w,isStatic:y,constType:y?3:0,loc:E}}if(r&&r.isQuoted){const d=r.loc;d.start.offset++,d.start.column++,d.end=ml(d.start,r.content),d.source=d.source.slice(1,-1)}const f=o[3]?o[3].slice(1).split("."):[];return c&&f.push("prop"),u==="bind"&&p&&f.includes("sync")&&ks("COMPILER_V_BIND_SYNC",e,i,p.loc.source)&&(u="model",f.splice(f.indexOf("sync"),1)),{type:7,name:u,exp:r&&{type:4,content:r.content,isStatic:!1,constType:0,loc:r.loc},arg:p,modifiers:f,loc:i}}return!e.inVPre&&Ne(a,"v-")&&de(e,26),{type:6,name:a,value:r&&{type:2,content:r.content,loc:r.loc},loc:i}}function Jd(e){const t=Ze(e);let n;const s=e.source[0],l=s==='"'||s==="'";if(l){Te(e,1);const a=e.source.indexOf(s);a===-1?n=os(e,e.source.length,4):(n=os(e,a,4),Te(e,1))}else{const a=/^[^\t\r\n\f >]+/.exec(e.source);if(!a)return;const r=/["'<=`]/g;let i;for(;i=r.exec(a[0]);)de(e,18,i.index);n=os(e,a[0].length,4)}return{content:n,isQuoted:l,loc:rt(e,t)}}function Yd(e,t){const[n,s]=e.options.delimiters,l=e.source.indexOf(s,n.length);if(l===-1){de(e,25);return}const a=Ze(e);Te(e,n.length);const r=Ze(e),i=Ze(e),o=l-n.length,c=e.source.slice(0,o),u=os(e,o,t),p=u.trim(),f=u.indexOf(p);f>0&&yl(r,c,f);const d=o-(u.length-p.length-f);return yl(i,c,d),Te(e,s.length),{type:5,content:{type:4,isStatic:!1,constType:0,content:p,loc:rt(e,r,i)},loc:rt(e,a)}}function Qd(e,t){const n=t===3?["]]>"]:["<",e.options.delimiters[0]];let s=e.source.length;for(let r=0;r<n.length;r++){const i=e.source.indexOf(n[r],1);i!==-1&&s>i&&(s=i)}const l=Ze(e),a=os(e,s,t);return{type:2,content:a,loc:rt(e,l)}}function os(e,t,n){const s=e.source.slice(0,t);return Te(e,t),n===2||n===3||!s.includes("&")?s:e.options.decodeEntities(s,n===4)}function Ze(e){const{column:t,line:n,offset:s}=e;return{column:t,line:n,offset:s}}function rt(e,t,n){return n=n||Ze(e),{start:t,end:n,source:e.originalSource.slice(t.offset,n.offset)}}function Ul(e){return e[e.length-1]}function Ne(e,t){return e.startsWith(t)}function Te(e,t){const{source:n}=e;yl(e,n,t),e.source=n.slice(t)}function Cs(e){const t=/^[\t\r\n\f ]+/.exec(e.source);t&&Te(e,t[0].length)}function Ai(e,t,n){return ml(t,e.originalSource.slice(t.offset,n),n)}function de(e,t,n,s=Ze(e)){n&&(s.offset+=n,s.column+=n),e.options.onError(be(t,{start:s,end:s,source:""}))}function Zd(e,t,n){const s=e.source;switch(t){case 0:if(Ne(s,"</")){for(let l=n.length-1;l>=0;--l)if(Aa(s,n[l].tag))return!0}break;case 1:case 2:{const l=Ul(n);if(l&&Aa(s,l.tag))return!0;break}case 3:if(Ne(s,"]]>"))return!0;break}return!s}function Aa(e,t){return Ne(e,"</")&&e.slice(2,2+t.length).toLowerCase()===t.toLowerCase()&&/[\t\r\n\f />]/.test(e[2+t.length]||">")}function Xd(e,t){tl(e,t,ru(e,e.children[0]))}function ru(e,t){const{children:n}=e;return n.length===1&&t.type===1&&!vl(t)}function tl(e,t,n=!1){const{children:s}=e,l=s.length;let a=0;for(let r=0;r<s.length;r++){const i=s[r];if(i.type===1&&i.tagType===0){const o=n?0:lt(i,t);if(o>0){if(o>=2){i.codegenNode.patchFlag=-1+"",i.codegenNode=t.hoist(i.codegenNode),a++;continue}}else{const c=i.codegenNode;if(c.type===13){const u=uu(c);if((!u||u===512||u===1)&&ou(i,t)>=2){const p=cu(i);p&&(c.props=t.hoist(p))}c.dynamicProps&&(c.dynamicProps=t.hoist(c.dynamicProps))}}}if(i.type===1){const o=i.tagType===1;o&&t.scopes.vSlot++,tl(i,t),o&&t.scopes.vSlot--}else if(i.type===11)tl(i,t,i.children.length===1);else if(i.type===9)for(let o=0;o<i.branches.length;o++)tl(i.branches[o],t,i.branches[o].children.length===1)}a&&t.transformHoist&&t.transformHoist(s,t,e),a&&a===l&&e.type===1&&e.tagType===0&&e.codegenNode&&e.codegenNode.type===13&&H(e.codegenNode.children)&&(e.codegenNode.children=t.hoist(Os(e.codegenNode.children)))}function lt(e,t){const{constantCache:n}=t;switch(e.type){case 1:if(e.tagType!==0)return 0;const s=n.get(e);if(s!==void 0)return s;const l=e.codegenNode;if(l.type!==13||l.isBlock&&e.tag!=="svg"&&e.tag!=="foreignObject")return 0;if(uu(l))return n.set(e,0),0;{let i=3;const o=ou(e,t);if(o===0)return n.set(e,0),0;o<i&&(i=o);for(let c=0;c<e.children.length;c++){const u=lt(e.children[c],t);if(u===0)return n.set(e,0),0;u<i&&(i=u)}if(i>1)for(let c=0;c<e.props.length;c++){const u=e.props[c];if(u.type===7&&u.name==="bind"&&u.exp){const p=lt(u.exp,t);if(p===0)return n.set(e,0),0;p<i&&(i=p)}}if(l.isBlock){for(let c=0;c<e.props.length;c++)if(e.props[c].type===7)return n.set(e,0),0;t.removeHelper(hn),t.removeHelper(Dn(t.inSSR,l.isComponent)),l.isBlock=!1,t.helper(Fn(t.inSSR,l.isComponent))}return n.set(e,i),i}case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return lt(e.content,t);case 4:return e.constType;case 8:let r=3;for(let i=0;i<e.children.length;i++){const o=e.children[i];if(X(o)||Dt(o))continue;const c=lt(o,t);if(c===0)return 0;c<r&&(r=c)}return r;default:return 0}}const eg=new Set([Cr,Sr,Es,Ns]);function iu(e,t){if(e.type===14&&!X(e.callee)&&eg.has(e.callee)){const n=e.arguments[0];if(n.type===4)return lt(n,t);if(n.type===14)return iu(n,t)}return 0}function ou(e,t){let n=3;const s=cu(e);if(s&&s.type===15){const{properties:l}=s;for(let a=0;a<l.length;a++){const{key:r,value:i}=l[a],o=lt(r,t);if(o===0)return o;o<n&&(n=o);let c;if(i.type===4?c=lt(i,t):i.type===14?c=iu(i,t):c=0,c===0)return c;c<n&&(n=c)}}return n}function cu(e){const t=e.codegenNode;if(t.type===13)return t.props}function uu(e){const t=e.patchFlag;return t?parseInt(t,10):void 0}function tg(e,{filename:t="",prefixIdentifiers:n=!1,hoistStatic:s=!1,cacheHandlers:l=!1,nodeTransforms:a=[],directiveTransforms:r={},transformHoist:i=null,isBuiltInComponent:o=$e,isCustomElement:c=$e,expressionPlugins:u=[],scopeId:p=null,slotted:f=!0,ssr:d=!1,inSSR:_=!1,ssrCssVars:E="",bindingMetadata:w=ge,inline:y=!1,isTS:m=!1,onError:k=mr,onWarn:b=Wc,compatConfig:S}){const L=t.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),I={selfName:L&&mn(ke(L[1])),prefixIdentifiers:n,hoistStatic:s,cacheHandlers:l,nodeTransforms:a,directiveTransforms:r,transformHoist:i,isBuiltInComponent:o,isCustomElement:c,expressionPlugins:u,scopeId:p,slotted:f,ssr:d,inSSR:_,ssrCssVars:E,bindingMetadata:w,inline:y,isTS:m,onError:k,onWarn:b,compatConfig:S,root:e,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],constantCache:new Map,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,currentNode:e,childIndex:0,inVOnce:!1,helper(j){const N=I.helpers.get(j)||0;return I.helpers.set(j,N+1),j},removeHelper(j){const N=I.helpers.get(j);if(N){const q=N-1;q?I.helpers.set(j,q):I.helpers.delete(j)}},helperString(j){return`_${$n[I.helper(j)]}`},replaceNode(j){I.parent.children[I.childIndex]=I.currentNode=j},removeNode(j){const N=I.parent.children,q=j?N.indexOf(j):I.currentNode?I.childIndex:-1;!j||j===I.currentNode?(I.currentNode=null,I.onNodeRemoved()):I.childIndex>q&&(I.childIndex--,I.onNodeRemoved()),I.parent.children.splice(q,1)},onNodeRemoved:()=>{},addIdentifiers(j){},removeIdentifiers(j){},hoist(j){X(j)&&(j=te(j)),I.hoists.push(j);const N=te(`_hoisted_${I.hoists.length}`,!1,j.loc,2);return N.hoisted=j,N},cache(j,N=!1){return Id(I.cached++,j,N)}};return I.filters=new Set,I}function ng(e,t){const n=tg(e,t);Kl(e,n),t.hoistStatic&&Xd(e,n),t.ssr||sg(e,n),e.helpers=new Set([...n.helpers.keys()]),e.components=[...n.components],e.directives=[...n.directives],e.imports=n.imports,e.hoists=n.hoists,e.temps=n.temps,e.cached=n.cached,e.filters=[...n.filters]}function sg(e,t){const{helper:n}=t,{children:s}=e;if(s.length===1){const l=s[0];if(ru(e,l)&&l.codegenNode){const a=l.codegenNode;a.type===13&&Pr(a,t),e.codegenNode=a}else e.codegenNode=l}else if(s.length>1){let l=64;e.codegenNode=xs(t,n(js),void 0,e.children,l+"",void 0,void 0,!0,void 0,!1)}}function lg(e,t){let n=0;const s=()=>{n--};for(;n<e.children.length;n++){const l=e.children[n];X(l)||(t.parent=e,t.childIndex=n,t.onNodeRemoved=s,Kl(l,t))}}function Kl(e,t){t.currentNode=e;const{nodeTransforms:n}=t,s=[];for(let a=0;a<n.length;a++){const r=n[a](e,t);if(r&&(H(r)?s.push(...r):s.push(r)),t.currentNode)e=t.currentNode;else return}switch(e.type){case 3:t.ssr||t.helper(As);break;case 5:t.ssr||t.helper(Hl);break;case 9:for(let a=0;a<e.branches.length;a++)Kl(e.branches[a],t);break;case 10:case 11:case 1:case 0:lg(e,t);break}t.currentNode=e;let l=s.length;for(;l--;)s[l]()}function pu(e,t){const n=X(e)?s=>s===e:s=>e.test(s);return(s,l)=>{if(s.type===1){const{props:a}=s;if(s.tagType===3&&a.some($d))return;const r=[];for(let i=0;i<a.length;i++){const o=a[i];if(o.type===7&&n(o.name)){a.splice(i,1),i--;const c=t(s,o,l);c&&r.push(c)}}return r}}}const zl="/*#__PURE__*/",fu=e=>`${$n[e]}: _${$n[e]}`;function Ni(e,{mode:t="function",prefixIdentifiers:n=t==="module",sourceMap:s=!1,filename:l="template.vue.html",scopeId:a=null,optimizeImports:r=!1,runtimeGlobalName:i="Vue",runtimeModuleName:o="vue",ssrRuntimeModuleName:c="vue/server-renderer",ssr:u=!1,isTS:p=!1,inSSR:f=!1}){const d={mode:t,prefixIdentifiers:n,sourceMap:s,filename:l,scopeId:a,optimizeImports:r,runtimeGlobalName:i,runtimeModuleName:o,ssrRuntimeModuleName:c,ssr:u,isTS:p,inSSR:f,source:e.loc.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(E){return`_${$n[E]}`},push(E,w){d.code+=E},indent(){_(++d.indentLevel)},deindent(E=!1){E?--d.indentLevel:_(--d.indentLevel)},newline(){_(d.indentLevel)}};function _(E){d.push(`
`+"  ".repeat(E))}return d}function ag(e,t={}){const n=Ni(e,t);t.onContextCreated&&t.onContextCreated(n);const{mode:s,push:l,prefixIdentifiers:a,indent:r,deindent:i,newline:o,scopeId:c,ssr:u}=n,p=Array.from(e.helpers),f=p.length>0,d=!a&&s!=="module",_=!1,E=_?Ni(e,t):n;rg(e,E);const w=u?"ssrRender":"render",m=(u?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(l(`function ${w}(${m}) {`),r(),d&&(l("with (_ctx) {"),r(),f&&(l(`const { ${p.map(fu).join(", ")} } = _Vue`),l(`
`),o())),e.components.length&&(aa(e.components,"component",n),(e.directives.length||e.temps>0)&&o()),e.directives.length&&(aa(e.directives,"directive",n),e.temps>0&&o()),e.filters&&e.filters.length&&(o(),aa(e.filters,"filter",n),o()),e.temps>0){l("let ");for(let k=0;k<e.temps;k++)l(`${k>0?", ":""}_temp${k}`)}return(e.components.length||e.directives.length||e.temps)&&(l(`
`),o()),u||l("return "),e.codegenNode?qe(e.codegenNode,n):l("null"),d&&(i(),l("}")),i(),l("}"),{ast:e,code:n.code,preamble:_?E.code:"",map:n.map?n.map.toJSON():void 0}}function rg(e,t){const{ssr:n,prefixIdentifiers:s,push:l,newline:a,runtimeModuleName:r,runtimeGlobalName:i,ssrRuntimeModuleName:o}=t,c=i,u=Array.from(e.helpers);if(u.length>0&&(l(`const _Vue = ${c}
`),e.hoists.length)){const p=[_r,vr,As,br,Qc].filter(f=>u.includes(f)).map(fu).join(", ");l(`const { ${p} } = _Vue
`)}ig(e.hoists,t),a(),l("return ")}function aa(e,t,{helper:n,push:s,newline:l,isTS:a}){const r=n(t==="filter"?xr:t==="component"?jr:Er);for(let i=0;i<e.length;i++){let o=e[i];const c=o.endsWith("__self");c&&(o=o.slice(0,-6)),s(`const ${ws(o,t)} = ${r}(${JSON.stringify(o)}${c?", true":""})${a?"!":""}`),i<e.length-1&&l()}}function ig(e,t){if(!e.length)return;t.pure=!0;const{push:n,newline:s,helper:l,scopeId:a,mode:r}=t;s();for(let i=0;i<e.length;i++){const o=e[i];o&&(n(`const _hoisted_${i+1} = `),qe(o,t),s())}t.pure=!1}function Or(e,t){const n=e.length>3||!1;t.push("["),n&&t.indent(),qs(e,t,n),n&&t.deindent(),t.push("]")}function qs(e,t,n=!1,s=!0){const{push:l,newline:a}=t;for(let r=0;r<e.length;r++){const i=e[r];X(i)?l(i):H(i)?Or(i,t):qe(i,t),r<e.length-1&&(n?(s&&l(","),a()):s&&l(", "))}}function qe(e,t){if(X(e)){t.push(e);return}if(Dt(e)){t.push(t.helper(e));return}switch(e.type){case 1:case 9:case 11:qe(e.codegenNode,t);break;case 2:og(e,t);break;case 4:hu(e,t);break;case 5:cg(e,t);break;case 12:qe(e.codegenNode,t);break;case 8:du(e,t);break;case 3:pg(e,t);break;case 13:fg(e,t);break;case 14:dg(e,t);break;case 15:gg(e,t);break;case 17:mg(e,t);break;case 18:yg(e,t);break;case 19:_g(e,t);break;case 20:vg(e,t);break;case 21:qs(e.body,t,!0,!1);break}}function og(e,t){t.push(JSON.stringify(e.content),e)}function hu(e,t){const{content:n,isStatic:s}=e;t.push(s?JSON.stringify(n):n,e)}function cg(e,t){const{push:n,helper:s,pure:l}=t;l&&n(zl),n(`${s(Hl)}(`),qe(e.content,t),n(")")}function du(e,t){for(let n=0;n<e.children.length;n++){const s=e.children[n];X(s)?t.push(s):qe(s,t)}}function ug(e,t){const{push:n}=t;if(e.type===8)n("["),du(e,t),n("]");else if(e.isStatic){const s=Ar(e.content)?e.content:JSON.stringify(e.content);n(s,e)}else n(`[${e.content}]`,e)}function pg(e,t){const{push:n,helper:s,pure:l}=t;l&&n(zl),n(`${s(As)}(${JSON.stringify(e.content)})`,e)}function fg(e,t){const{push:n,helper:s,pure:l}=t,{tag:a,props:r,children:i,patchFlag:o,dynamicProps:c,directives:u,isBlock:p,disableTracking:f,isComponent:d}=e;u&&n(s(wr)+"("),p&&n(`(${s(hn)}(${f?"true":""}), `),l&&n(zl);const _=p?Dn(t.inSSR,d):Fn(t.inSSR,d);n(s(_)+"(",e),qs(hg([a,r,i,o,c]),t),n(")"),p&&n(")"),u&&(n(", "),qe(u,t),n(")"))}function hg(e){let t=e.length;for(;t--&&e[t]==null;);return e.slice(0,t+1).map(n=>n||"null")}function dg(e,t){const{push:n,helper:s,pure:l}=t,a=X(e.callee)?e.callee:s(e.callee);l&&n(zl),n(a+"(",e),qs(e.arguments,t),n(")")}function gg(e,t){const{push:n,indent:s,deindent:l,newline:a}=t,{properties:r}=e;if(!r.length){n("{}",e);return}const i=r.length>1||!1;n(i?"{":"{ "),i&&s();for(let o=0;o<r.length;o++){const{key:c,value:u}=r[o];ug(c,t),n(": "),qe(u,t),o<r.length-1&&(n(","),a())}i&&l(),n(i?"}":" }")}function mg(e,t){Or(e.elements,t)}function yg(e,t){const{push:n,indent:s,deindent:l}=t,{params:a,returns:r,body:i,newline:o,isSlot:c}=e;c&&n(`_${$n[Ir]}(`),n("(",e),H(a)?qs(a,t):a&&qe(a,t),n(") => "),(o||i)&&(n("{"),s()),r?(o&&n("return "),H(r)?Or(r,t):qe(r,t)):i&&qe(i,t),(o||i)&&(l(),n("}")),c&&(e.isNonScopedSlot&&n(", undefined, true"),n(")"))}function _g(e,t){const{test:n,consequent:s,alternate:l,newline:a}=e,{push:r,indent:i,deindent:o,newline:c}=t;if(n.type===4){const p=!Ar(n.content);p&&r("("),hu(n,t),p&&r(")")}else r("("),qe(n,t),r(")");a&&i(),t.indentLevel++,a||r(" "),r("? "),qe(s,t),t.indentLevel--,a&&c(),a||r(" "),r(": ");const u=l.type===19;u||t.indentLevel++,qe(l,t),u||t.indentLevel--,a&&o(!0)}function vg(e,t){const{push:n,helper:s,indent:l,deindent:a,newline:r}=t;n(`_cache[${e.index}] || (`),e.isVNode&&(l(),n(`${s(gl)}(-1),`),r()),n(`_cache[${e.index}] = `),qe(e.value,t),e.isVNode&&(n(","),r(),n(`${s(gl)}(1),`),r(),n(`_cache[${e.index}]`),a()),n(")")}new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");const bg=pu(/^(if|else|else-if)$/,(e,t,n)=>jg(e,t,n,(s,l,a)=>{const r=n.parent.children;let i=r.indexOf(s),o=0;for(;i-->=0;){const c=r[i];c&&c.type===9&&(o+=c.branches.length)}return()=>{if(a)s.codegenNode=qi(l,o,n);else{const c=Eg(s.codegenNode);c.alternate=qi(l,o+s.branches.length-1,n)}}}));function jg(e,t,n,s){if(t.name!=="else"&&(!t.exp||!t.exp.content.trim())){const l=t.exp?t.exp.loc:e.loc;n.onError(be(28,t.loc)),t.exp=te("true",!1,l)}if(t.name==="if"){const l=Oi(e,t),a={type:9,loc:e.loc,branches:[l]};if(n.replaceNode(a),s)return s(a,l,!0)}else{const l=n.parent.children;let a=l.indexOf(e);for(;a-->=-1;){const r=l[a];if(r&&r.type===3){n.removeNode(r);continue}if(r&&r.type===2&&!r.content.trim().length){n.removeNode(r);continue}if(r&&r.type===9){t.name==="else-if"&&r.branches[r.branches.length-1].condition===void 0&&n.onError(be(30,e.loc)),n.removeNode();const i=Oi(e,t);r.branches.push(i);const o=s&&s(r,i,!1);Kl(i,n),o&&o(),n.currentNode=null}else n.onError(be(30,e.loc));break}}}function Oi(e,t){const n=e.tagType===3;return{type:10,loc:e.loc,condition:t.name==="else"?void 0:t.exp,children:n&&!nt(e,"for")?e.children:[e],userKey:Vl(e,"key"),isTemplateIf:n}}function qi(e,t,n){return e.condition?Ra(e.condition,Mi(e,t,n),xe(n.helper(As),['""',"true"])):Mi(e,t,n)}function Mi(e,t,n){const{helper:s}=n,l=je("key",te(`${t}`,!1,et,2)),{children:a}=e,r=a[0];if(a.length!==1||r.type!==1)if(a.length===1&&r.type===11){const o=r.codegenNode;return bl(o,l,n),o}else{let o=64;return xs(n,s(js),st([l]),a,o+"",void 0,void 0,!0,!1,!1,e.loc)}else{const o=r.codegenNode,c=Fd(o);return c.type===13&&Pr(c,n),bl(c,l,n),o}}function Eg(e){for(;;)if(e.type===19)if(e.alternate.type===19)e=e.alternate;else return e;else e.type===20&&(e=e.value)}const xg=pu("for",(e,t,n)=>{const{helper:s,removeHelper:l}=n;return wg(e,t,n,a=>{const r=xe(s(kr),[a.source]),i=_l(e),o=nt(e,"memo"),c=Vl(e,"key"),u=c&&(c.type===6?te(c.value.content,!0):c.exp),p=c?je("key",u):null,f=a.source.type===4&&a.source.constType>0,d=f?64:c?128:256;return a.codegenNode=xs(n,s(js),void 0,r,d+"",void 0,void 0,!0,!f,!1,e.loc),()=>{let _;const{children:E}=a,w=E.length!==1||E[0].type!==1,y=vl(e)?e:i&&e.children.length===1&&vl(e.children[0])?e.children[0]:null;if(y?(_=y.codegenNode,i&&p&&bl(_,p,n)):w?_=xs(n,s(js),p?st([p]):void 0,e.children,64+"",void 0,void 0,!0,void 0,!1):(_=E[0].codegenNode,i&&p&&bl(_,p,n),_.isBlock!==!f&&(_.isBlock?(l(hn),l(Dn(n.inSSR,_.isComponent))):l(Fn(n.inSSR,_.isComponent))),_.isBlock=!f,_.isBlock?(s(hn),s(Dn(n.inSSR,_.isComponent))):s(Fn(n.inSSR,_.isComponent))),o){const m=Ln(Na(a.parseResult,[te("_cached")]));m.body=Rd([pt(["const _memo = (",o.exp,")"]),pt(["if (_cached",...u?[" && _cached.key === ",u]:[],` && ${n.helperString(eu)}(_cached, _memo)) return _cached`]),pt(["const _item = ",_]),te("_item.memo = _memo"),te("return _item")]),r.arguments.push(m,te("_cache"),te(String(n.cached++)))}else r.arguments.push(Ln(Na(a.parseResult),_,!0))}})});function wg(e,t,n,s){if(!t.exp){n.onError(be(31,t.loc));return}const l=gu(t.exp);if(!l){n.onError(be(32,t.loc));return}const{addIdentifiers:a,removeIdentifiers:r,scopes:i}=n,{source:o,value:c,key:u,index:p}=l,f={type:11,loc:t.loc,source:o,valueAlias:c,keyAlias:u,objectIndexAlias:p,parseResult:l,children:_l(e)?e.children:[e]};n.replaceNode(f),i.vFor++;const d=s&&s(f);return()=>{i.vFor--,d&&d()}}const kg=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,$i=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Cg=/^\(|\)$/g;function gu(e,t){const n=e.loc,s=e.content,l=s.match(kg);if(!l)return;const[,a,r]=l,i={source:Js(n,r.trim(),s.indexOf(r,a.length)),value:void 0,key:void 0,index:void 0};let o=a.trim().replace(Cg,"").trim();const c=a.indexOf(o),u=o.match($i);if(u){o=o.replace($i,"").trim();const p=u[1].trim();let f;if(p&&(f=s.indexOf(p,c+o.length),i.key=Js(n,p,f)),u[2]){const d=u[2].trim();d&&(i.index=Js(n,d,s.indexOf(d,i.key?f+p.length:c+o.length)))}}return o&&(i.value=Js(n,o,c)),i}function Js(e,t,n){return te(t,!1,su(e,n,t.length))}function Na({value:e,key:t,index:n},s=[]){return Sg([e,t,n,...s])}function Sg(e){let t=e.length;for(;t--&&!e[t];);return e.slice(0,t+1).map((n,s)=>n||te("_".repeat(s+1),!1))}const Li=te("undefined",!1),Tg=(e,t)=>{if(e.type===1&&(e.tagType===1||e.tagType===3)){const n=nt(e,"slot");if(n)return n.exp,t.scopes.vSlot++,()=>{t.scopes.vSlot--}}},Ig=(e,t,n)=>Ln(e,t,!1,!0,t.length?t[0].loc:n);function Rg(e,t,n=Ig){t.helper(Ir);const{children:s,loc:l}=e,a=[],r=[];let i=t.scopes.vSlot>0||t.scopes.vFor>0;const o=nt(e,"slot",!0);if(o){const{arg:w,exp:y}=o;w&&!Be(w)&&(i=!0),a.push(je(w||te("default",!0),n(y,s,l)))}let c=!1,u=!1;const p=[],f=new Set;let d=0;for(let w=0;w<s.length;w++){const y=s[w];let m;if(!_l(y)||!(m=nt(y,"slot",!0))){y.type!==3&&p.push(y);continue}if(o){t.onError(be(37,m.loc));break}c=!0;const{children:k,loc:b}=y,{arg:S=te("default",!0),exp:L,loc:I}=m;let j;Be(S)?j=S?S.content:"default":i=!0;const N=n(L,k,b);let q,O,P;if(q=nt(y,"if"))i=!0,r.push(Ra(q.exp,Ys(S,N,d++),Li));else if(O=nt(y,/^else(-if)?$/,!0)){let D=w,$;for(;D--&&($=s[D],$.type===3););if($&&_l($)&&nt($,"if")){s.splice(w,1),w--;let ne=r[r.length-1];for(;ne.alternate.type===19;)ne=ne.alternate;ne.alternate=O.exp?Ra(O.exp,Ys(S,N,d++),Li):Ys(S,N,d++)}else t.onError(be(30,O.loc))}else if(P=nt(y,"for")){i=!0;const D=P.parseResult||gu(P.exp);D?r.push(xe(t.helper(kr),[D.source,Ln(Na(D),Ys(S,N),!0)])):t.onError(be(32,P.loc))}else{if(j){if(f.has(j)){t.onError(be(38,I));continue}f.add(j),j==="default"&&(u=!0)}a.push(je(S,N))}}if(!o){const w=(y,m)=>{const k=n(y,m,l);return t.compatConfig&&(k.isNonScopedSlot=!0),je("default",k)};c?p.length&&p.some(y=>mu(y))&&(u?t.onError(be(39,p[0].loc)):a.push(w(void 0,p))):a.push(w(void 0,s))}const _=i?2:nl(e.children)?3:1;let E=st(a.concat(je("_",te(_+"",!1))),l);return r.length&&(E=xe(t.helper(Xc),[E,Os(r)])),{slots:E,hasDynamicSlots:i}}function Ys(e,t,n){const s=[je("name",e),je("fn",t)];return n!=null&&s.push(je("key",te(String(n),!0))),st(s)}function nl(e){for(let t=0;t<e.length;t++){const n=e[t];switch(n.type){case 1:if(n.tagType===2||nl(n.children))return!0;break;case 9:if(nl(n.branches))return!0;break;case 10:case 11:if(nl(n.children))return!0;break}}return!1}function mu(e){return e.type!==2&&e.type!==12?!0:e.type===2?!!e.content.trim():mu(e.content)}const yu=new WeakMap,Pg=(e,t)=>function(){if(e=t.currentNode,!(e.type===1&&(e.tagType===0||e.tagType===1)))return;const{tag:s,props:l}=e,a=e.tagType===1;let r=a?Ag(e,t):`"${s}"`;const i=me(r)&&r.callee===hl;let o,c,u,p=0,f,d,_,E=i||r===is||r===yr||!a&&(s==="svg"||s==="foreignObject");if(l.length>0){const w=_u(e,t,void 0,a,i);o=w.props,p=w.patchFlag,d=w.dynamicPropNames;const y=w.directives;_=y&&y.length?Os(y.map(m=>Og(m,t))):void 0,w.shouldUseBlock&&(E=!0)}if(e.children.length>0)if(r===fl&&(E=!0,p|=1024),a&&r!==is&&r!==fl){const{slots:y,hasDynamicSlots:m}=Rg(e,t);c=y,m&&(p|=1024)}else if(e.children.length===1&&r!==is){const y=e.children[0],m=y.type,k=m===5||m===8;k&&lt(y,t)===0&&(p|=1),k||m===2?c=y:c=e.children}else c=e.children;p!==0&&(u=String(p),d&&d.length&&(f=qg(d))),e.codegenNode=xs(t,r,o,c,u,f,_,!!E,!1,a,e.loc)};function Ag(e,t,n=!1){let{tag:s}=e;const l=Oa(s),a=Vl(e,"is");if(a)if(l||rn("COMPILER_IS_ON_ELEMENT",t)){const o=a.type===6?a.value&&te(a.value.content,!0):a.exp;if(o)return xe(t.helper(hl),[o])}else a.type===6&&a.value.content.startsWith("vue:")&&(s=a.value.content.slice(4));const r=!l&&nt(e,"is");if(r&&r.exp)return xe(t.helper(hl),[r.exp]);const i=tu(s)||t.isBuiltInComponent(s);return i?(n||t.helper(i),i):(t.helper(jr),t.components.add(s),ws(s,"component"))}function _u(e,t,n=e.props,s,l,a=!1){const{tag:r,loc:i,children:o}=e;let c=[];const u=[],p=[],f=o.length>0;let d=!1,_=0,E=!1,w=!1,y=!1,m=!1,k=!1,b=!1;const S=[],L=N=>{c.length&&(u.push(st(Fi(c),i)),c=[]),N&&u.push(N)},I=({key:N,value:q})=>{if(Be(N)){const O=N.content,P=dn(O);if(P&&(!s||l)&&O.toLowerCase()!=="onclick"&&O!=="onUpdate:modelValue"&&!tn(O)&&(m=!0),P&&tn(O)&&(b=!0),q.type===20||(q.type===4||q.type===8)&&lt(q,t)>0)return;O==="ref"?E=!0:O==="class"?w=!0:O==="style"?y=!0:O!=="key"&&!S.includes(O)&&S.push(O),s&&(O==="class"||O==="style")&&!S.includes(O)&&S.push(O)}else k=!0};for(let N=0;N<n.length;N++){const q=n[N];if(q.type===6){const{loc:O,name:P,value:D}=q;let $=!0;if(P==="ref"&&(E=!0,t.scopes.vFor>0&&c.push(je(te("ref_for",!0),te("true")))),P==="is"&&(Oa(r)||D&&D.content.startsWith("vue:")||rn("COMPILER_IS_ON_ELEMENT",t)))continue;c.push(je(te(P,!0,su(O,0,P.length)),te(D?D.content:"",$,D?D.loc:O)))}else{const{name:O,arg:P,exp:D,loc:$}=q,ne=O==="bind",ee=O==="on";if(O==="slot"){s||t.onError(be(40,$));continue}if(O==="once"||O==="memo"||O==="is"||ne&&en(P,"is")&&(Oa(r)||rn("COMPILER_IS_ON_ELEMENT",t))||ee&&a)continue;if((ne&&en(P,"key")||ee&&f&&en(P,"vue:before-update"))&&(d=!0),ne&&en(P,"ref")&&t.scopes.vFor>0&&c.push(je(te("ref_for",!0),te("true"))),!P&&(ne||ee)){if(k=!0,D)if(ne){if(L(),rn("COMPILER_V_BIND_OBJECT_ORDER",t)){u.unshift(D);continue}u.push(D)}else L({type:14,loc:$,callee:t.helper(Tr),arguments:s?[D]:[D,"true"]});else t.onError(be(ne?34:35,$));continue}const ie=t.directiveTransforms[O];if(ie){const{props:oe,needRuntime:Ke}=ie(q,e,t);!a&&oe.forEach(I),ee&&P&&!Be(P)?L(st(oe,i)):c.push(...oe),Ke&&(p.push(q),Dt(Ke)&&yu.set(q,Ke))}else Qu(O)||(p.push(q),f&&(d=!0))}}let j;if(u.length?(L(),u.length>1?j=xe(t.helper(dl),u,i):j=u[0]):c.length&&(j=st(Fi(c),i)),k?_|=16:(w&&!s&&(_|=2),y&&!s&&(_|=4),S.length&&(_|=8),m&&(_|=32)),!d&&(_===0||_===32)&&(E||b||p.length>0)&&(_|=512),!t.inSSR&&j)switch(j.type){case 15:let N=-1,q=-1,O=!1;for(let $=0;$<j.properties.length;$++){const ne=j.properties[$].key;Be(ne)?ne.content==="class"?N=$:ne.content==="style"&&(q=$):ne.isHandlerKey||(O=!0)}const P=j.properties[N],D=j.properties[q];O?j=xe(t.helper(Es),[j]):(P&&!Be(P.value)&&(P.value=xe(t.helper(Cr),[P.value])),D&&(y||D.value.type===4&&D.value.content.trim()[0]==="["||D.value.type===17)&&(D.value=xe(t.helper(Sr),[D.value])));break;case 14:break;default:j=xe(t.helper(Es),[xe(t.helper(Ns),[j])]);break}return{props:j,directives:p,patchFlag:_,dynamicPropNames:S,shouldUseBlock:d}}function Fi(e){const t=new Map,n=[];for(let s=0;s<e.length;s++){const l=e[s];if(l.key.type===8||!l.key.isStatic){n.push(l);continue}const a=l.key.content,r=t.get(a);r?(a==="style"||a==="class"||dn(a))&&Ng(r,l):(t.set(a,l),n.push(l))}return n}function Ng(e,t){e.value.type===17?e.value.elements.push(t.value):e.value=Os([e.value,t.value],e.loc)}function Og(e,t){const n=[],s=yu.get(e);s?n.push(t.helperString(s)):(t.helper(Er),t.directives.add(e.name),n.push(ws(e.name,"directive")));const{loc:l}=e;if(e.exp&&n.push(e.exp),e.arg&&(e.exp||n.push("void 0"),n.push(e.arg)),Object.keys(e.modifiers).length){e.arg||(e.exp||n.push("void 0"),n.push("void 0"));const a=te("true",!1,l);n.push(st(e.modifiers.map(r=>je(r,a)),l))}return Os(n,e.loc)}function qg(e){let t="[";for(let n=0,s=e.length;n<s;n++)t+=JSON.stringify(e[n]),n<s-1&&(t+=", ");return t+"]"}function Oa(e){return e==="component"||e==="Component"}const Mg=(e,t)=>{if(vl(e)){const{children:n,loc:s}=e,{slotName:l,slotProps:a}=$g(e,t),r=[t.prefixIdentifiers?"_ctx.$slots":"$slots",l,"{}","undefined","true"];let i=2;a&&(r[2]=a,i=3),n.length&&(r[3]=Ln([],n,!1,!1,s),i=4),t.scopeId&&!t.slotted&&(i=5),r.splice(i),e.codegenNode=xe(t.helper(Zc),r,s)}};function $g(e,t){let n='"default"',s;const l=[];for(let a=0;a<e.props.length;a++){const r=e.props[a];r.type===6?r.value&&(r.name==="name"?n=JSON.stringify(r.value.content):(r.name=ke(r.name),l.push(r))):r.name==="bind"&&en(r.arg,"name")?r.exp&&(n=r.exp):(r.name==="bind"&&r.arg&&Be(r.arg)&&(r.arg.content=ke(r.arg.content)),l.push(r))}if(l.length>0){const{props:a,directives:r}=_u(e,t,l,!1,!1);s=a,r.length&&t.onError(be(36,r[0].loc))}return{slotName:n,slotProps:s}}const Lg=/^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,vu=(e,t,n,s)=>{const{loc:l,modifiers:a,arg:r}=e;!e.exp&&!a.length&&n.onError(be(35,l));let i;if(r.type===4)if(r.isStatic){let p=r.content;p.startsWith("vue:")&&(p=`vnode-${p.slice(4)}`);const f=t.tagType!==0||p.startsWith("vnode")||!/[A-Z]/.test(p)?In(ke(p)):`on:${p}`;i=te(f,!0,r.loc)}else i=pt([`${n.helperString(Ia)}(`,r,")"]);else i=r,i.children.unshift(`${n.helperString(Ia)}(`),i.children.push(")");let o=e.exp;o&&!o.content.trim()&&(o=void 0);let c=n.cacheHandlers&&!o&&!n.inVOnce;if(o){const p=nu(o.content),f=!(p||Lg.test(o.content)),d=o.content.includes(";");(f||c&&p)&&(o=pt([`${f?"$event":"(...args)"} => ${d?"{":"("}`,o,d?"}":")"]))}let u={props:[je(i,o||te("() => {}",!1,l))]};return s&&(u=s(u)),c&&(u.props[0].value=n.cache(u.props[0].value)),u.props.forEach(p=>p.key.isHandlerKey=!0),u},Fg=(e,t,n)=>{const{exp:s,modifiers:l,loc:a}=e,r=e.arg;return r.type!==4?(r.children.unshift("("),r.children.push(') || ""')):r.isStatic||(r.content=`${r.content} || ""`),l.includes("camel")&&(r.type===4?r.isStatic?r.content=ke(r.content):r.content=`${n.helperString(Ta)}(${r.content})`:(r.children.unshift(`${n.helperString(Ta)}(`),r.children.push(")"))),n.inSSR||(l.includes("prop")&&Di(r,"."),l.includes("attr")&&Di(r,"^")),!s||s.type===4&&!s.content.trim()?(n.onError(be(34,a)),{props:[je(r,te("",!0,a))]}):{props:[je(r,s)]}},Di=(e,t)=>{e.type===4?e.isStatic?e.content=t+e.content:e.content=`\`${t}\${${e.content}}\``:(e.children.unshift(`'${t}' + (`),e.children.push(")"))},Dg=(e,t)=>{if(e.type===0||e.type===1||e.type===11||e.type===10)return()=>{const n=e.children;let s,l=!1;for(let a=0;a<n.length;a++){const r=n[a];if(la(r)){l=!0;for(let i=a+1;i<n.length;i++){const o=n[i];if(la(o))s||(s=n[a]=pt([r],r.loc)),s.children.push(" + ",o),n.splice(i,1),i--;else{s=void 0;break}}}}if(!(!l||n.length===1&&(e.type===0||e.type===1&&e.tagType===0&&!e.props.find(a=>a.type===7&&!t.directiveTransforms[a.name])&&e.tag!=="template")))for(let a=0;a<n.length;a++){const r=n[a];if(la(r)||r.type===8){const i=[];(r.type!==2||r.content!==" ")&&i.push(r),!t.ssr&&lt(r,t)===0&&i.push(1+""),n[a]={type:12,content:r,loc:r.loc,codegenNode:xe(t.helper(br),i)}}}}},Bi=new WeakSet,Bg=(e,t)=>{if(e.type===1&&nt(e,"once",!0))return Bi.has(e)||t.inVOnce||t.inSSR?void 0:(Bi.add(e),t.inVOnce=!0,t.helper(gl),()=>{t.inVOnce=!1;const n=t.currentNode;n.codegenNode&&(n.codegenNode=t.cache(n.codegenNode,!0))})},bu=(e,t,n)=>{const{exp:s,arg:l}=e;if(!s)return n.onError(be(41,e.loc)),Qs();const a=s.loc.source,r=s.type===4?s.content:a,i=n.bindingMetadata[a];if(i==="props"||i==="props-aliased")return n.onError(be(44,s.loc)),Qs();const o=!1;if(!r.trim()||!nu(r)&&!o)return n.onError(be(42,s.loc)),Qs();const c=l||te("modelValue",!0),u=l?Be(l)?`onUpdate:${ke(l.content)}`:pt(['"onUpdate:" + ',l]):"onUpdate:modelValue";let p;const f=n.isTS?"($event: any)":"$event";p=pt([`${f} => ((`,s,") = $event)"]);const d=[je(c,e.exp),je(u,p)];if(e.modifiers.length&&t.tagType===1){const _=e.modifiers.map(w=>(Ar(w)?w:JSON.stringify(w))+": true").join(", "),E=l?Be(l)?`${l.content}Modifiers`:pt([l,' + "Modifiers"']):"modelModifiers";d.push(je(E,te(`{ ${_} }`,!1,e.loc,2)))}return Qs(d)};function Qs(e=[]){return{props:e}}const Hg=/[\w).+\-_$\]]/,Vg=(e,t)=>{!rn("COMPILER_FILTER",t)||(e.type===5&&El(e.content,t),e.type===1&&e.props.forEach(n=>{n.type===7&&n.name!=="for"&&n.exp&&El(n.exp,t)}))};function El(e,t){if(e.type===4)Hi(e,t);else for(let n=0;n<e.children.length;n++){const s=e.children[n];typeof s=="object"&&(s.type===4?Hi(s,t):s.type===8?El(e,t):s.type===5&&El(s.content,t))}}function Hi(e,t){const n=e.content;let s=!1,l=!1,a=!1,r=!1,i=0,o=0,c=0,u=0,p,f,d,_,E=[];for(d=0;d<n.length;d++)if(f=p,p=n.charCodeAt(d),s)p===39&&f!==92&&(s=!1);else if(l)p===34&&f!==92&&(l=!1);else if(a)p===96&&f!==92&&(a=!1);else if(r)p===47&&f!==92&&(r=!1);else if(p===124&&n.charCodeAt(d+1)!==124&&n.charCodeAt(d-1)!==124&&!i&&!o&&!c)_===void 0?(u=d+1,_=n.slice(0,d).trim()):w();else{switch(p){case 34:l=!0;break;case 39:s=!0;break;case 96:a=!0;break;case 40:c++;break;case 41:c--;break;case 91:o++;break;case 93:o--;break;case 123:i++;break;case 125:i--;break}if(p===47){let y=d-1,m;for(;y>=0&&(m=n.charAt(y),m===" ");y--);(!m||!Hg.test(m))&&(r=!0)}}_===void 0?_=n.slice(0,d).trim():u!==0&&w();function w(){E.push(n.slice(u,d).trim()),u=d+1}if(E.length){for(d=0;d<E.length;d++)_=Ug(_,E[d],t);e.content=_}}function Ug(e,t,n){n.helper(xr);const s=t.indexOf("(");if(s<0)return n.filters.add(t),`${ws(t,"filter")}(${e})`;{const l=t.slice(0,s),a=t.slice(s+1);return n.filters.add(l),`${ws(l,"filter")}(${e}${a!==")"?","+a:a}`}}const Vi=new WeakSet,Kg=(e,t)=>{if(e.type===1){const n=nt(e,"memo");return!n||Vi.has(e)?void 0:(Vi.add(e),()=>{const s=e.codegenNode||t.currentNode.codegenNode;s&&s.type===13&&(e.tagType!==1&&Pr(s,t),e.codegenNode=xe(t.helper(Rr),[n.exp,Ln(void 0,s),"_cache",String(t.cached++)]))})}};function zg(e){return[[Bg,bg,Kg,xg,Vg,Mg,Pg,Tg,Dg],{on:vu,bind:Fg,model:bu}]}function Wg(e,t={}){const n=t.onError||mr,s=t.mode==="module";t.prefixIdentifiers===!0?n(be(47)):s&&n(be(48));const l=!1;t.cacheHandlers&&n(be(49)),t.scopeId&&!s&&n(be(50));const a=X(e)?Hd(e,t):e,[r,i]=zg();return ng(a,ae({},t,{prefixIdentifiers:l,nodeTransforms:[...r,...t.nodeTransforms||[]],directiveTransforms:ae({},i,t.directiveTransforms||{})})),ag(a,ae({},t,{prefixIdentifiers:l}))}const Gg=()=>({props:[]}),ju=Symbol(""),Eu=Symbol(""),xu=Symbol(""),wu=Symbol(""),qa=Symbol(""),ku=Symbol(""),Cu=Symbol(""),Su=Symbol(""),Tu=Symbol(""),Iu=Symbol("");Sd({[ju]:"vModelRadio",[Eu]:"vModelCheckbox",[xu]:"vModelText",[wu]:"vModelSelect",[qa]:"vModelDynamic",[ku]:"withModifiers",[Cu]:"withKeys",[Su]:"vShow",[Tu]:"Transition",[Iu]:"TransitionGroup"});let xn;function Jg(e,t=!1){return xn||(xn=document.createElement("div")),t?(xn.innerHTML=`<div foo="${e.replace(/"/g,"&quot;")}">`,xn.children[0].getAttribute("foo")):(xn.innerHTML=e,xn.textContent)}const Yg=Ve("style,iframe,script,noscript",!0),Qg={isVoidTag:pp,isNativeTag:e=>cp(e)||up(e),isPreTag:e=>e==="pre",decodeEntities:Jg,isBuiltInComponent:e=>{if(Cn(e,"Transition"))return Tu;if(Cn(e,"TransitionGroup"))return Iu},getNamespace(e,t){let n=t?t.ns:0;if(t&&n===2)if(t.tag==="annotation-xml"){if(e==="svg")return 1;t.props.some(s=>s.type===6&&s.name==="encoding"&&s.value!=null&&(s.value.content==="text/html"||s.value.content==="application/xhtml+xml"))&&(n=0)}else/^m(?:[ions]|text)$/.test(t.tag)&&e!=="mglyph"&&e!=="malignmark"&&(n=0);else t&&n===1&&(t.tag==="foreignObject"||t.tag==="desc"||t.tag==="title")&&(n=0);if(n===0){if(e==="svg")return 1;if(e==="math")return 2}return n},getTextMode({tag:e,ns:t}){if(t===0){if(e==="textarea"||e==="title")return 1;if(Yg(e))return 2}return 0}},Zg=e=>{e.type===1&&e.props.forEach((t,n)=>{t.type===6&&t.name==="style"&&t.value&&(e.props[n]={type:7,name:"bind",arg:te("style",!0,t.loc),exp:Xg(t.value.content,t.loc),modifiers:[],loc:t.loc})})},Xg=(e,t)=>{const n=po(e);return te(JSON.stringify(n),!1,t,3)};function Ft(e,t){return be(e,t)}const em=(e,t,n)=>{const{exp:s,loc:l}=e;return s||n.onError(Ft(53,l)),t.children.length&&(n.onError(Ft(54,l)),t.children.length=0),{props:[je(te("innerHTML",!0,l),s||te("",!0))]}},tm=(e,t,n)=>{const{exp:s,loc:l}=e;return s||n.onError(Ft(55,l)),t.children.length&&(n.onError(Ft(56,l)),t.children.length=0),{props:[je(te("textContent",!0),s?lt(s,n)>0?s:xe(n.helperString(Hl),[s],l):te("",!0))]}},nm=(e,t,n)=>{const s=bu(e,t,n);if(!s.props.length||t.tagType===1)return s;e.arg&&n.onError(Ft(58,e.arg.loc));const{tag:l}=t,a=n.isCustomElement(l);if(l==="input"||l==="textarea"||l==="select"||a){let r=xu,i=!1;if(l==="input"||a){const o=Vl(t,"type");if(o){if(o.type===7)r=qa;else if(o.value)switch(o.value.content){case"radio":r=ju;break;case"checkbox":r=Eu;break;case"file":i=!0,n.onError(Ft(59,e.loc));break}}else Md(t)&&(r=qa)}else l==="select"&&(r=wu);i||(s.needRuntime=n.helper(r))}else n.onError(Ft(57,e.loc));return s.props=s.props.filter(r=>!(r.key.type===4&&r.key.content==="modelValue")),s},sm=Ve("passive,once,capture"),lm=Ve("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),am=Ve("left,right"),Ru=Ve("onkeyup,onkeydown,onkeypress",!0),rm=(e,t,n,s)=>{const l=[],a=[],r=[];for(let i=0;i<t.length;i++){const o=t[i];o==="native"&&ks("COMPILER_V_ON_NATIVE",n)||sm(o)?r.push(o):am(o)?Be(e)?Ru(e.content)?l.push(o):a.push(o):(l.push(o),a.push(o)):lm(o)?a.push(o):l.push(o)}return{keyModifiers:l,nonKeyModifiers:a,eventOptionModifiers:r}},Ui=(e,t)=>Be(e)&&e.content.toLowerCase()==="onclick"?te(t,!0):e.type!==4?pt(["(",e,`) === "onClick" ? "${t}" : (`,e,")"]):e,im=(e,t,n)=>vu(e,t,n,s=>{const{modifiers:l}=e;if(!l.length)return s;let{key:a,value:r}=s.props[0];const{keyModifiers:i,nonKeyModifiers:o,eventOptionModifiers:c}=rm(a,l,n,e.loc);if(o.includes("right")&&(a=Ui(a,"onContextmenu")),o.includes("middle")&&(a=Ui(a,"onMouseup")),o.length&&(r=xe(n.helper(ku),[r,JSON.stringify(o)])),i.length&&(!Be(a)||Ru(a.content))&&(r=xe(n.helper(Cu),[r,JSON.stringify(i)])),c.length){const u=c.map(mn).join("");a=Be(a)?te(`${a.content}${u}`,!0):pt(["(",a,`) + "${u}"`])}return{props:[je(a,r)]}}),om=(e,t,n)=>{const{exp:s,loc:l}=e;return s||n.onError(Ft(61,l)),{props:[],needRuntime:n.helper(Su)}},cm=(e,t)=>{e.type===1&&e.tagType===0&&(e.tag==="script"||e.tag==="style")&&t.removeNode()},um=[Zg],pm={cloak:Gg,html:em,text:tm,model:nm,on:im,show:om};function fm(e,t={}){return Wg(e,ae({},Qg,t,{nodeTransforms:[cm,...um,...t.nodeTransforms||[]],directiveTransforms:ae({},pm,t.directiveTransforms||{}),transformHoist:null}))}const Ki=Object.create(null);function Pu(e,t){if(!X(e))if(e.nodeType)e=e.innerHTML;else return $e;const n=e,s=Ki[n];if(s)return s;if(e[0]==="#"){const i=document.querySelector(e);e=i?i.innerHTML:""}const l=ae({hoistStatic:!0,onError:void 0,onWarn:$e},t);!l.isCustomElement&&typeof customElements!="undefined"&&(l.isCustomElement=i=>!!customElements.get(i));const{code:a}=fm(e,l),r=new Function("Vue",a)(jd);return r._rc=!0,Ki[n]=r}jc(Pu);var Ue=(e,t)=>{const n=e.__vccOpts||e;for(const[s,l]of t)n[s]=l;return n};const hm={};function dm(e,t){const n=rr("router-view");return Z(),Vt(n)}var gm=Ue(hm,[["render",dm]]);/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const kn=typeof window!="undefined";function mm(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const he=Object.assign;function ra(e,t){const n={};for(const s in t){const l=t[s];n[s]=ft(l)?l.map(e):e(l)}return n}const cs=()=>{},ft=Array.isArray,ym=/\/$/,_m=e=>e.replace(ym,"");function ia(e,t,n="/"){let s,l={},a="",r="";const i=t.indexOf("#");let o=t.indexOf("?");return i<o&&i>=0&&(o=-1),o>-1&&(s=t.slice(0,o),a=t.slice(o+1,i>-1?i:t.length),l=e(a)),i>-1&&(s=s||t.slice(0,i),r=t.slice(i,t.length)),s=Em(s!=null?s:t,n),{fullPath:s+(a&&"?")+a+r,path:s,query:l,hash:r}}function vm(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function zi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function bm(e,t,n){const s=t.matched.length-1,l=n.matched.length-1;return s>-1&&s===l&&Bn(t.matched[s],n.matched[l])&&Au(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Bn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Au(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!jm(e[n],t[n]))return!1;return!0}function jm(e,t){return ft(e)?Wi(e,t):ft(t)?Wi(t,e):e===t}function Wi(e,t){return ft(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Em(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),l=s[s.length-1];(l===".."||l===".")&&s.push("");let a=n.length-1,r,i;for(r=0;r<s.length;r++)if(i=s[r],i!==".")if(i==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Ss;(function(e){e.pop="pop",e.push="push"})(Ss||(Ss={}));var us;(function(e){e.back="back",e.forward="forward",e.unknown=""})(us||(us={}));function xm(e){if(!e)if(kn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),_m(e)}const wm=/^[^#]+#/;function km(e,t){return e.replace(wm,"#")+t}function Cm(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Wl=()=>({left:window.pageXOffset,top:window.pageYOffset});function Sm(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),l=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!l)return;t=Cm(l,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Gi(e,t){return(history.state?history.state.position-t:-1)+e}const Ma=new Map;function Tm(e,t){Ma.set(e,t)}function Im(e){const t=Ma.get(e);return Ma.delete(e),t}let Rm=()=>location.protocol+"//"+location.host;function Nu(e,t){const{pathname:n,search:s,hash:l}=t,a=e.indexOf("#");if(a>-1){let i=l.includes(e.slice(a))?e.slice(a).length:1,o=l.slice(i);return o[0]!=="/"&&(o="/"+o),zi(o,"")}return zi(n,e)+s+l}function Pm(e,t,n,s){let l=[],a=[],r=null;const i=({state:f})=>{const d=Nu(e,location),_=n.value,E=t.value;let w=0;if(f){if(n.value=d,t.value=f,r&&r===_){r=null;return}w=E?f.position-E.position:0}else s(d);l.forEach(y=>{y(n.value,_,{delta:w,type:Ss.pop,direction:w?w>0?us.forward:us.back:us.unknown})})};function o(){r=n.value}function c(f){l.push(f);const d=()=>{const _=l.indexOf(f);_>-1&&l.splice(_,1)};return a.push(d),d}function u(){const{history:f}=window;!f.state||f.replaceState(he({},f.state,{scroll:Wl()}),"")}function p(){for(const f of a)f();a=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:o,listen:c,destroy:p}}function Ji(e,t,n,s=!1,l=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:l?Wl():null}}function Am(e){const{history:t,location:n}=window,s={value:Nu(e,n)},l={value:t.state};l.value||a(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(o,c,u){const p=e.indexOf("#"),f=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+o:Rm()+e+o;try{t[u?"replaceState":"pushState"](c,"",f),l.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function r(o,c){const u=he({},t.state,Ji(l.value.back,o,l.value.forward,!0),c,{position:l.value.position});a(o,u,!0),s.value=o}function i(o,c){const u=he({},l.value,t.state,{forward:o,scroll:Wl()});a(u.current,u,!0);const p=he({},Ji(s.value,o,null),{position:u.position+1},c);a(o,p,!1),s.value=o}return{location:s,state:l,push:i,replace:r}}function Nm(e){e=xm(e);const t=Am(e),n=Pm(e,t.state,t.location,t.replace);function s(a,r=!0){r||n.pauseListeners(),history.go(a)}const l=he({location:"",base:e,go:s,createHref:km.bind(null,e)},t,n);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>t.state.value}),l}function Om(e){return typeof e=="string"||e&&typeof e=="object"}function Ou(e){return typeof e=="string"||typeof e=="symbol"}const Nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qu=Symbol("");var Yi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Yi||(Yi={}));function Hn(e,t){return he(new Error,{type:e,[qu]:!0},t)}function vt(e,t){return e instanceof Error&&qu in e&&(t==null||!!(e.type&t))}const Qi="[^/]+?",qm={sensitive:!1,strict:!1,start:!0,end:!0},Mm=/[.+*?^${}()[\]/\\]/g;function $m(e,t){const n=he({},qm,t),s=[];let l=n.start?"^":"";const a=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(l+="/");for(let p=0;p<c.length;p++){const f=c[p];let d=40+(n.sensitive?.25:0);if(f.type===0)p||(l+="/"),l+=f.value.replace(Mm,"\\$&"),d+=40;else if(f.type===1){const{value:_,repeatable:E,optional:w,regexp:y}=f;a.push({name:_,repeatable:E,optional:w});const m=y||Qi;if(m!==Qi){d+=10;try{new RegExp(`(${m})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${_}" (${m}): `+b.message)}}let k=E?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;p||(k=w&&c.length<2?`(?:/${k})`:"/"+k),w&&(k+="?"),l+=k,d+=20,w&&(d+=-8),E&&(d+=-20),m===".*"&&(d+=-50)}u.push(d)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(l+="/?"),n.end?l+="$":n.strict&&(l+="(?:/|$)");const r=new RegExp(l,n.sensitive?"":"i");function i(c){const u=c.match(r),p={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",_=a[f-1];p[_.name]=d&&_.repeatable?d.split("/"):d}return p}function o(c){let u="",p=!1;for(const f of e){(!p||!u.endsWith("/"))&&(u+="/"),p=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:_,repeatable:E,optional:w}=d,y=_ in c?c[_]:"";if(ft(y)&&!E)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const m=ft(y)?y.join("/"):y;if(!m)if(w)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):p=!0);else throw new Error(`Missing required param "${_}"`);u+=m}}return u||"/"}return{re:r,score:s,keys:a,parse:i,stringify:o}}function Lm(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Fm(e,t){let n=0;const s=e.score,l=t.score;for(;n<s.length&&n<l.length;){const a=Lm(s[n],l[n]);if(a)return a;n++}if(Math.abs(l.length-s.length)===1){if(Zi(s))return 1;if(Zi(l))return-1}return l.length-s.length}function Zi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Dm={type:0,value:""},Bm=/[a-zA-Z0-9_]/;function Hm(e){if(!e)return[[]];if(e==="/")return[[Dm]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,s=n;const l=[];let a;function r(){a&&l.push(a),a=[]}let i=0,o,c="",u="";function p(){!c||(n===0?a.push({type:0,value:c}):n===1||n===2||n===3?(a.length>1&&(o==="*"||o==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:c,regexp:u,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=o}for(;i<e.length;){if(o=e[i++],o==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:o==="/"?(c&&p(),r()):o===":"?(p(),n=1):f();break;case 4:f(),n=s;break;case 1:o==="("?n=2:Bm.test(o)?f():(p(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&i--);break;case 2:o===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+o:n=3:u+=o;break;case 3:p(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&i--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),p(),r(),l}function Vm(e,t,n){const s=$m(Hm(e.path),n),l=he(s,{record:e,parent:t,children:[],alias:[]});return t&&!l.record.aliasOf==!t.record.aliasOf&&t.children.push(l),l}function Um(e,t){const n=[],s=new Map;t=to({strict:!1,end:!0,sensitive:!1},t);function l(u){return s.get(u)}function a(u,p,f){const d=!f,_=Km(u);_.aliasOf=f&&f.record;const E=to(t,u),w=[_];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of k)w.push(he({},_,{components:f?f.record.components:_.components,path:b,aliasOf:f?f.record:_}))}let y,m;for(const k of w){const{path:b}=k;if(p&&b[0]!=="/"){const S=p.record.path,L=S[S.length-1]==="/"?"":"/";k.path=p.record.path+(b&&L+b)}if(y=Vm(k,p,E),f?f.alias.push(y):(m=m||y,m!==y&&m.alias.push(y),d&&u.name&&!eo(y)&&r(u.name)),_.children){const S=_.children;for(let L=0;L<S.length;L++)a(S[L],y,f&&f.children[L])}f=f||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&o(y)}return m?()=>{r(m)}:cs}function r(u){if(Ou(u)){const p=s.get(u);p&&(s.delete(u),n.splice(n.indexOf(p),1),p.children.forEach(r),p.alias.forEach(r))}else{const p=n.indexOf(u);p>-1&&(n.splice(p,1),u.record.name&&s.delete(u.record.name),u.children.forEach(r),u.alias.forEach(r))}}function i(){return n}function o(u){let p=0;for(;p<n.length&&Fm(u,n[p])>=0&&(u.record.path!==n[p].record.path||!Mu(u,n[p]));)p++;n.splice(p,0,u),u.record.name&&!eo(u)&&s.set(u.record.name,u)}function c(u,p){let f,d={},_,E;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Hn(1,{location:u});E=f.record.name,d=he(Xi(p.params,f.keys.filter(m=>!m.optional).map(m=>m.name)),u.params&&Xi(u.params,f.keys.map(m=>m.name))),_=f.stringify(d)}else if("path"in u)_=u.path,f=n.find(m=>m.re.test(_)),f&&(d=f.parse(_),E=f.record.name);else{if(f=p.name?s.get(p.name):n.find(m=>m.re.test(p.path)),!f)throw Hn(1,{location:u,currentLocation:p});E=f.record.name,d=he({},p.params,u.params),_=f.stringify(d)}const w=[];let y=f;for(;y;)w.unshift(y.record),y=y.parent;return{name:E,path:_,params:d,matched:w,meta:Wm(w)}}return e.forEach(u=>a(u)),{addRoute:a,resolve:c,removeRoute:r,getRoutes:i,getRecordMatcher:l}}function Xi(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Km(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:zm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function zm(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function eo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Wm(e){return e.reduce((t,n)=>he(t,n.meta),{})}function to(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Mu(e,t){return t.children.some(n=>n===e||Mu(e,n))}const $u=/#/g,Gm=/&/g,Jm=/\//g,Ym=/=/g,Qm=/\?/g,Lu=/\+/g,Zm=/%5B/g,Xm=/%5D/g,Fu=/%5E/g,ey=/%60/g,Du=/%7B/g,ty=/%7C/g,Bu=/%7D/g,ny=/%20/g;function qr(e){return encodeURI(""+e).replace(ty,"|").replace(Zm,"[").replace(Xm,"]")}function sy(e){return qr(e).replace(Du,"{").replace(Bu,"}").replace(Fu,"^")}function $a(e){return qr(e).replace(Lu,"%2B").replace(ny,"+").replace($u,"%23").replace(Gm,"%26").replace(ey,"`").replace(Du,"{").replace(Bu,"}").replace(Fu,"^")}function ly(e){return $a(e).replace(Ym,"%3D")}function ay(e){return qr(e).replace($u,"%23").replace(Qm,"%3F")}function ry(e){return e==null?"":ay(e).replace(Jm,"%2F")}function xl(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function iy(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let l=0;l<s.length;++l){const a=s[l].replace(Lu," "),r=a.indexOf("="),i=xl(r<0?a:a.slice(0,r)),o=r<0?null:xl(a.slice(r+1));if(i in t){let c=t[i];ft(c)||(c=t[i]=[c]),c.push(o)}else t[i]=o}return t}function no(e){let t="";for(let n in e){const s=e[n];if(n=ly(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(ft(s)?s.map(a=>a&&$a(a)):[s&&$a(s)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function oy(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=ft(s)?s.map(l=>l==null?null:""+l):s==null?s:""+s)}return t}const cy=Symbol(""),so=Symbol(""),Mr=Symbol(""),$r=Symbol(""),La=Symbol("");function Zn(){let e=[];function t(s){return e.push(s),()=>{const l=e.indexOf(s);l>-1&&e.splice(l,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Mt(e,t,n,s,l){const a=s&&(s.enterCallbacks[l]=s.enterCallbacks[l]||[]);return()=>new Promise((r,i)=>{const o=p=>{p===!1?i(Hn(4,{from:n,to:t})):p instanceof Error?i(p):Om(p)?i(Hn(2,{from:t,to:p})):(a&&s.enterCallbacks[l]===a&&typeof p=="function"&&a.push(p),r())},c=e.call(s&&s.instances[l],t,n,o);let u=Promise.resolve(c);e.length<3&&(u=u.then(o)),u.catch(p=>i(p))})}function oa(e,t,n,s){const l=[];for(const a of e)for(const r in a.components){let i=a.components[r];if(!(t!=="beforeRouteEnter"&&!a.instances[r]))if(uy(i)){const c=(i.__vccOpts||i)[t];c&&l.push(Mt(c,n,s,a,r))}else{let o=i();l.push(()=>o.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));const u=mm(c)?c.default:c;a.components[r]=u;const f=(u.__vccOpts||u)[t];return f&&Mt(f,n,s,a,r)()}))}}return l}function uy(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function lo(e){const t=ut(Mr),n=ut($r),s=Ye(()=>t.resolve(at(e.to))),l=Ye(()=>{const{matched:o}=s.value,{length:c}=o,u=o[c-1],p=n.matched;if(!u||!p.length)return-1;const f=p.findIndex(Bn.bind(null,u));if(f>-1)return f;const d=ao(o[c-2]);return c>1&&ao(u)===d&&p[p.length-1].path!==d?p.findIndex(Bn.bind(null,o[c-2])):f}),a=Ye(()=>l.value>-1&&dy(n.params,s.value.params)),r=Ye(()=>l.value>-1&&l.value===n.matched.length-1&&Au(n.params,s.value.params));function i(o={}){return hy(o)?t[at(e.replace)?"replace":"push"](at(e.to)).catch(cs):Promise.resolve()}return{route:s,href:Ye(()=>s.value.href),isActive:a,isExactActive:r,navigate:i}}const py=_n({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:lo,setup(e,{slots:t}){const n=zn(lo(e)),{options:s}=ut(Mr),l=Ye(()=>({[ro(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ro(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:Ps("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:l.value},a)}}}),fy=py;function hy(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function dy(e,t){for(const n in t){const s=t[n],l=e[n];if(typeof s=="string"){if(s!==l)return!1}else if(!ft(l)||l.length!==s.length||s.some((a,r)=>a!==l[r]))return!1}return!0}function ao(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ro=(e,t,n)=>e!=null?e:t!=null?t:n,gy=_n({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=ut(La),l=Ye(()=>e.route||s.value),a=ut(so,0),r=Ye(()=>{let c=at(a);const{matched:u}=l.value;let p;for(;(p=u[c])&&!p.components;)c++;return c}),i=Ye(()=>l.value.matched[r.value]);ss(so,Ye(()=>r.value+1)),ss(cy,i),ss(La,l);const o=ve();return wt(()=>[o.value,i.value,e.name],([c,u,p],[f,d,_])=>{u&&(u.instances[p]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Bn(u,d)||!f)&&(u.enterCallbacks[p]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=l.value,u=e.name,p=i.value,f=p&&p.components[u];if(!f)return io(n.default,{Component:f,route:c});const d=p.props[u],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,w=Ps(f,he({},_,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(p.instances[u]=null)},ref:o}));return io(n.default,{Component:w,route:c})||w}}});function io(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const my=gy;function yy(e){const t=Um(e.routes,e),n=e.parseQuery||iy,s=e.stringifyQuery||no,l=e.history,a=Zn(),r=Zn(),i=Zn(),o=Ro(Nt);let c=Nt;kn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ra.bind(null,C=>""+C),p=ra.bind(null,ry),f=ra.bind(null,xl);function d(C,U){let B,W;return Ou(C)?(B=t.getRecordMatcher(C),W=U):W=C,t.addRoute(W,B)}function _(C){const U=t.getRecordMatcher(C);U&&t.removeRoute(U)}function E(){return t.getRoutes().map(C=>C.record)}function w(C){return!!t.getRecordMatcher(C)}function y(C,U){if(U=he({},U||o.value),typeof C=="string"){const v=ia(n,C,U.path),x=t.resolve({path:v.path},U),T=l.createHref(v.fullPath);return he(v,x,{params:f(x.params),hash:xl(v.hash),redirectedFrom:void 0,href:T})}let B;if("path"in C)B=he({},C,{path:ia(n,C.path,U.path).path});else{const v=he({},C.params);for(const x in v)v[x]==null&&delete v[x];B=he({},C,{params:p(v)}),U.params=p(U.params)}const W=t.resolve(B,U),pe=C.hash||"";W.params=u(f(W.params));const h=vm(s,he({},C,{hash:sy(pe),path:W.path})),g=l.createHref(h);return he({fullPath:h,hash:pe,query:s===no?oy(C.query):C.query||{}},W,{redirectedFrom:void 0,href:g})}function m(C){return typeof C=="string"?ia(n,C,o.value.path):he({},C)}function k(C,U){if(c!==C)return Hn(8,{from:U,to:C})}function b(C){return I(C)}function S(C){return b(he(m(C),{replace:!0}))}function L(C){const U=C.matched[C.matched.length-1];if(U&&U.redirect){const{redirect:B}=U;let W=typeof B=="function"?B(C):B;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=m(W):{path:W},W.params={}),he({query:C.query,hash:C.hash,params:"path"in W?{}:C.params},W)}}function I(C,U){const B=c=y(C),W=o.value,pe=C.state,h=C.force,g=C.replace===!0,v=L(B);if(v)return I(he(m(v),{state:typeof v=="object"?he({},pe,v.state):pe,force:h,replace:g}),U||B);const x=B;x.redirectedFrom=U;let T;return!h&&bm(s,W,B)&&(T=Hn(16,{to:x,from:W}),ht(W,W,!0,!1)),(T?Promise.resolve(T):q(x,W)).catch(R=>vt(R)?vt(R,2)?R:It(R):oe(R,x,W)).then(R=>{if(R){if(vt(R,2))return I(he({replace:g},m(R.to),{state:typeof R.to=="object"?he({},pe,R.to.state):pe,force:h}),U||x)}else R=P(x,W,!0,g,pe);return O(x,W,R),R})}function j(C,U){const B=k(C,U);return B?Promise.reject(B):Promise.resolve()}function N(C){const U=bn.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(C):C()}function q(C,U){let B;const[W,pe,h]=_y(C,U);B=oa(W.reverse(),"beforeRouteLeave",C,U);for(const v of W)v.leaveGuards.forEach(x=>{B.push(Mt(x,C,U))});const g=j.bind(null,C,U);return B.push(g),Pe(B).then(()=>{B=[];for(const v of a.list())B.push(Mt(v,C,U));return B.push(g),Pe(B)}).then(()=>{B=oa(pe,"beforeRouteUpdate",C,U);for(const v of pe)v.updateGuards.forEach(x=>{B.push(Mt(x,C,U))});return B.push(g),Pe(B)}).then(()=>{B=[];for(const v of C.matched)if(v.beforeEnter&&!U.matched.includes(v))if(ft(v.beforeEnter))for(const x of v.beforeEnter)B.push(Mt(x,C,U));else B.push(Mt(v.beforeEnter,C,U));return B.push(g),Pe(B)}).then(()=>(C.matched.forEach(v=>v.enterCallbacks={}),B=oa(h,"beforeRouteEnter",C,U),B.push(g),Pe(B))).then(()=>{B=[];for(const v of r.list())B.push(Mt(v,C,U));return B.push(g),Pe(B)}).catch(v=>vt(v,8)?v:Promise.reject(v))}function O(C,U,B){for(const W of i.list())N(()=>W(C,U,B))}function P(C,U,B,W,pe){const h=k(C,U);if(h)return h;const g=U===Nt,v=kn?history.state:{};B&&(W||g?l.replace(C.fullPath,he({scroll:g&&v&&v.scroll},pe)):l.push(C.fullPath,pe)),o.value=C,ht(C,U,B,g),It()}let D;function $(){D||(D=l.listen((C,U,B)=>{if(!$s.listening)return;const W=y(C),pe=L(W);if(pe){I(he(pe,{replace:!0}),W).catch(cs);return}c=W;const h=o.value;kn&&Tm(Gi(h.fullPath,B.delta),Wl()),q(W,h).catch(g=>vt(g,12)?g:vt(g,2)?(I(g.to,W).then(v=>{vt(v,20)&&!B.delta&&B.type===Ss.pop&&l.go(-1,!1)}).catch(cs),Promise.reject()):(B.delta&&l.go(-B.delta,!1),oe(g,W,h))).then(g=>{g=g||P(W,h,!1),g&&(B.delta&&!vt(g,8)?l.go(-B.delta,!1):B.type===Ss.pop&&vt(g,20)&&l.go(-1,!1)),O(W,h,g)}).catch(cs)}))}let ne=Zn(),ee=Zn(),ie;function oe(C,U,B){It(C);const W=ee.list();return W.length?W.forEach(pe=>pe(C,U,B)):console.error(C),Promise.reject(C)}function Ke(){return ie&&o.value!==Nt?Promise.resolve():new Promise((C,U)=>{ne.add([C,U])})}function It(C){return ie||(ie=!C,$(),ne.list().forEach(([U,B])=>C?B(C):U()),ne.reset()),C}function ht(C,U,B,W){const{scrollBehavior:pe}=e;if(!kn||!pe)return Promise.resolve();const h=!B&&Im(Gi(C.fullPath,0))||(W||!B)&&history.state&&history.state.scroll||null;return Pl().then(()=>pe(C,U,h)).then(g=>g&&Sm(g)).catch(g=>oe(g,C,U))}const Le=C=>l.go(C);let vn;const bn=new Set,$s={currentRoute:o,listening:!0,addRoute:d,removeRoute:_,hasRoute:w,getRoutes:E,resolve:y,options:e,push:b,replace:S,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:a.add,beforeResolve:r.add,afterEach:i.add,onError:ee.add,isReady:Ke,install(C){const U=this;C.component("RouterLink",fy),C.component("RouterView",my),C.config.globalProperties.$router=U,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>at(o)}),kn&&!vn&&o.value===Nt&&(vn=!0,b(l.location).catch(pe=>{}));const B={};for(const pe in Nt)B[pe]=Ye(()=>o.value[pe]);C.provide(Mr,U),C.provide($r,zn(B)),C.provide(La,o);const W=C.unmount;bn.add(C),C.unmount=function(){bn.delete(C),bn.size<1&&(c=Nt,D&&D(),D=null,o.value=Nt,vn=!1,ie=!1),W()}}};function Pe(C){return C.reduce((U,B)=>U.then(()=>N(B)),Promise.resolve())}return $s}function _y(e,t){const n=[],s=[],l=[],a=Math.max(t.matched.length,e.matched.length);for(let r=0;r<a;r++){const i=t.matched[r];i&&(e.matched.find(c=>Bn(c,i))?s.push(i):n.push(i));const o=e.matched[r];o&&(t.matched.find(c=>Bn(c,o))||l.push(o))}return[n,s,l]}function Ms(){return ut($r)}var vy="/assets/close.32d69e24.svg",by="/assets/more.2b04406d.svg";function jy(e,t){let n;return function(s){n&&clearTimeout(n),n=setTimeout(()=>{e(s)},t)}}var Ey="/assets/top.4e31b01b.svg";const xy=e=>(Wt("data-v-0eb73926"),e=e(),Gt(),e),wy=xy(()=>K("img",{src:Ey},null,-1)),ky=[wy],Cy={__name:"back-top",setup(e){const t=ve(!1),n=ve(null),s=a=>{a.target.scrollTop>50?t.value=!0:t.value=!1};function l(){n.value.scrollTop=0}return Xe(()=>{n.value=document.querySelector(".index-container"),n.value.addEventListener("scroll",s)}),Wn(()=>{n.value.removeEventListener("scroll",s)}),(a,r)=>(Z(),le("div",{class:kt(["back-top",{hide:!t.value}]),title:"\u8FD4\u56DE\u9876\u90E8",onClick:l},ky,2))}};var Sy=Ue(Cy,[["__scopeId","data-v-0eb73926"]]);function Ty(){setTimeout(()=>{var n;const e=document.title,t=(n=document.querySelector("h1"))==null?void 0:n.innerHTML;!t||(document.title=`${t} | ${e}`)},0)}const Iy=e=>(Wt("data-v-ba0f0a9a"),e=e(),Gt(),e),Ry={class:"header-container"},Py=Iy(()=>K("h2",{class:"logo"},[K("a",{href:"/"},"\u65E7\u68A6")],-1)),Ay={class:"nav"},Ny=["onClick"],Oy=["href"],qy={key:0,src:vy},My={key:1,src:by},$y={class:"main-container"},Ly={class:"main"},Fy={class:"mobile-menus-container"},Dy={class:"navbar-links"},By=["href"],Hy={__name:"page-layout",setup(e){const t=Ms(),n=ve(""),s=[{name:"\u5206\u7C7B",link:"/article-category/Git"},{name:"\u5F52\u6863",link:"/custom/archive"},{name:"\u53CB\u94FE",link:"/custom/friends"},{name:"\u7559\u8A00",link:"/custom/messages"},{name:"\u5173\u4E8E",link:"/custom/about"}],l=ve(!1),a=jy(()=>{window.innerWidth>768&&r()},300);function r(){l.value=!1}return Xe(()=>{n.value=t.path,window.addEventListener("resize",a),Ty()}),Wn(()=>{window.removeEventListener("resize",a)}),(i,o)=>{const c=rr("router-view");return Z(),le(fe,null,[K("div",{class:kt(["index-container",{active:l.value}])},[K("div",Ry,[K("header",null,[Py,K("ul",Ay,[(Z(),le(fe,null,yt(s,u=>K("li",{class:kt(["nav-item",{active:n.value===u.link}]),key:u.link,onClick:p=>n.value=u.link},[K("a",{href:u.link},Se(u.name),9,Oy)],10,Ny)),64)),K("div",{class:"toggle-menus",onClick:o[0]||(o[0]=u=>l.value=!l.value)},[l.value?(Z(),le("img",qy)):(Z(),le("img",My))])])])]),K("div",$y,[K("div",Ly,[ue(c)])]),K("div",Fy,[K("nav",Dy,[(Z(),le(fe,null,yt(s,u=>K("div",{class:"navbar-links__item",key:u.link},[K("a",{href:u.link,onClick:r},Se(u.name),9,By)])),64))])])],2),ue(Sy)],64)}}};var Vy=Ue(Hy,[["__scopeId","data-v-ba0f0a9a"]]),Gl=[{name:"giscus",title:"\u5982\u4F55\u5728\u9875\u9762\u4E2D\u63A5\u5165giscus\u8BC4\u8BBA\u63D2\u4EF6",date:"Jun 05, 2023",category:["\u63D2\u4EF6"],content:`<h2>\u4ECB\u7ECD</h2>
<p>Giscus \u662F\u4E00\u4E2A\u57FA\u4E8E GitHub Discussion \u7684\u8BC4\u8BBA\u7CFB\u7EDF\u3002
\u4ED3\u5E93\u4E2D\u7684 <code>Discussions</code> \u4FBF\u662F\u5B58\u653E\u8BC4\u8BBA\u7684\u5730\u65B9\u3002</p>
<h2>\u51C6\u5907</h2>
<ol>
<li>
<p>\u65B0\u5EFA\u4E00\u4E2A\u516C\u5F00\u7684\u4ED3\u5E93
<img src='/article/giscus_1.png' alt='\u521B\u5EFA\u516C\u5F00\u4ED3\u5E93'></p>
</li>
<li>
<p>\u627E\u5230\u4ED3\u5E93\u4E2D\u7684Settings\u8BBE\u7F6E\uFF0C\u52FE\u9009 Discussions\uFF0C\u5E76\u70B9\u51FB Set up discussions\uFF0C\u5F00\u542F\u8BC4\u8BBA\u533A
<img src='/article/giscus_2.png' alt='\u5F00\u542F\u8BC4\u8BBA\u533A'></p>
</li>
<li>
<p>\u5B89\u88C5 <a href='https://github.com/apps/giscus'>Giscus App</a>
<img src='/article/giscus_3.png' alt='\u5B89\u88C5'></p>
</li>
<li>
<p>\u9009\u62E9\u521A\u521A\u521B\u5EFA\u597D\u7684\u4ED3\u5E93\uFF0C\u70B9\u51FB\u4FDD\u5B58
<img src='/article/giscus_4.png' alt='\u9009\u62E9\u4ED3\u5E93'></p>
</li>
<li>
<p>\u524D\u5F80 <a href='https://giscus.app/zh-CN'>Giscus \u9875\u9762</a>\uFF0C\u53EA\u9700\u8981\u586B\u5199\u4ED3\u5E93\u540D\u79F0\u548CDiscussion \u5206\u7C7B
<img src='/article/giscus_5.png' alt='\u586B\u5199\u540D\u79F0'>
<img src='/article/giscus_6.png' alt='\u9009\u62E9\u5206\u7C7B'></p>
</li>
<li>
<p>\u83B7\u53D6 <code>data-repo</code>, <code>data-repo-id</code>, <code>data-category</code> \u548C <code>data-category-id</code> \u8FD9\u56DB\u4E2A\u5C5E\u6027
<img src='/article/giscus_7.png' alt='\u83B7\u53D6\u5C5E\u6027'></p>
</li>
</ol>
<h2>\u4F7F\u7528</h2>
<p>\u652F\u6301 React\u3001Vue \u548C Svelte \u4E2D\u4F7F\u7528 giscus\uFF0C\u53EF\u4EE5\u53C2\u8003<a href='https://github.com/giscus/giscus-component'>giscus\u7EC4\u4EF6\u5E93</a></p>
<p>\u672C\u6587\u4EE5 Vue \u4E3A\u4F8B</p>
<pre><code class='language-bash'>npm i @giscus/vue
</code></pre>
<p>\u5C01\u88C5\u4E00\u4E2Acomment.vue\u7684\u7EC4\u4EF6</p>
<pre><code class='language-vue'>&lt;template&gt;
    &lt;Giscus
        id=&quot;comments&quot;
        repo=&quot;hai-zou/poseidon&quot;
        repoId=&quot;R_kgDOIPqaJQ&quot;
        category=&quot;General&quot;
        categoryId=&quot;DIC_kwDOIPqaJc4CW4xW&quot;
        mapping=&quot;pathname&quot;
        term=&quot;Welcome to component!&quot;
        inputPosition=&quot;top&quot;
        theme=&quot;light&quot;
        lang=&quot;zh-CN&quot;
        loading=&quot;lazy&quot;
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import Giscus from &quot;@giscus/vue&quot;;
&lt;/script&gt;
</code></pre>
`,comment:!0,footer:!0,abstract:`\u4ECB\u7ECD
Giscus \u662F\u4E00\u4E2A\u57FA\u4E8E GitHub Discussion \u7684\u8BC4\u8BBA\u7CFB\u7EDF\u3002
\u4ED3\u5E93\u4E2D\u7684 Discussions \u4FBF\u662F\u5B58\u653E\u8BC4\u8BBA\u7684\u5730\u65B9\u3002
\u51C6\u5907


\u65B0\u5EFA\u4E00\u4E2A\u516C\u5F00\u7684\u4ED3\u5E93



\u627E\u5230\u4ED3\u5E93\u4E2D\u7684Settings\u8BBE\u7F6E\uFF0C\u52FE\u9009 Discussions\uFF0C\u5E76\u70B9\u51FB Set up discussions\uFF0C\u5F00\u542F\u8BC4\u8BBA\u533A



\u5B89\u88C5 Giscus App



\u9009\u62E9\u521A\u521A\u521B\u5EFA\u597D\u7684\u4ED3\u5E93\uFF0C\u70B9\u51FB\u4FDD\u5B58



\u524D\u5F80 Giscus \u9875\u9762\uFF0C\u53EA\u9700\u8981\u586B\u5199\u4ED3\u5E93\u540D\u79F0\u548CDiscussion \u5206\u7C7B




\u83B7\u53D6 data-repo, data-repo-id, data-category \u548C data-category-id \u8FD9\u56DB\u4E2A\u5C5E\u6027



\u4F7F\u7528
\u652F\u6301 React\u3001Vue \u548C Svelte \u4E2D\u4F7F\u7528 giscus\uFF0C\u53EF\u4EE5\u53C2\u8003giscus\u7EC4\u4EF6\u5E93
\u672C\u6587\u4EE5 Vue \u4E3A\u4F8B
npm i @giscus/vue

\u5C01\u88C5\u4E00\u4E2Acomment.vue\u7684\u7EC4\u4EF6
&lt;template&gt;
    &lt;Giscus
        id=&quot;comments&quot;
        repo=&quot;hai-zou/poseidon&quot;
        repoId=&quot;R_kgDOIPqaJQ&quot;
        category=&quot;General&quot;
        categoryId=&quot;DIC_kwDOIPqaJc4CW4xW&quot;
        mapping=&quot;pathname&quot;
        term=&quot;Welcome to component!&quot;
        inputPosition=&quot;top&quot;
        theme=&quot;light&quot;
        lang=&quot;zh-CN&quot;
        loading=&quot;lazy&quot;
    /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import Giscus from &quot;@giscus/vue&quot;;
&lt;/script&gt;

`},{name:"git-base",title:"Git\u57FA\u672C\u64CD\u4F5C",date:"Aug 11, 2021",category:["Git"],content:`<h3>\u521B\u5EFA\u4ED3\u5E93</h3>
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

`}];const Uy={class:"pagination-container"},Ky={class:"page-index"},zy={__name:"pagination",props:{pageIndex:Number,pageSize:Number,length:Number},emits:["pageChange"],setup(e,{emit:t}){const n=e;function s(){const a=n.pageIndex-1;t("pageChange",{pageIndex:a})}function l(){const a=n.pageIndex+1;t("pageChange",{pageIndex:a})}return(a,r)=>(Z(),le("div",Uy,[K("a",{style:on({visibility:e.pageIndex>1?"visible":"hidden"}),class:"arrow",onClick:r[0]||(r[0]=i=>s())}," \u2190 \u4E0A\u4E00\u9875 ",4),K("span",Ky,Se(e.pageIndex),1),K("a",{style:on({visibility:e.pageIndex*e.pageSize<e.length?"visible":"hidden"}),class:"arrow",onClick:r[1]||(r[1]=i=>l())}," \u4E0B\u4E00\u9875 \u2192 ",4)]))}};const Hu=e=>(Wt("data-v-287fa42e"),e=e(),Gt(),e),Wy={class:"footer-container"},Gy=Hu(()=>K("div",{class:"site-pv"},[K("span",{id:"busuanzi_container_site_pv"},[vs(" \u672C\u7AD9\u603B\u8BBF\u95EE\u91CF"),K("span",{id:"busuanzi_value_site_pv"}),vs("\u6B21 ")])],-1)),Jy=Hu(()=>K("div",{class:"tip"},"\u7AD9\u70B9\u6301\u7EED\u4F18\u5316\u4E2D...",-1)),Yy={__name:"footer",setup(e){const t=new Date().getFullYear();return(n,s)=>(Z(),le("div",Wy,[K("div",null,"\xA9 2021-"+Se(at(t))+" | \u65E7\u68A6",1),Gy,Jy]))}};var Lr=Ue(Yy,[["__scopeId","data-v-287fa42e"]]);const Qy=e=>(Wt("data-v-6106dd9d"),e=e(),Gt(),e),Zy={class:"home-container"},Xy={class:"article-time"},e_={class:"article-title"},t_=["href"],n_=Qy(()=>K("div",{class:"article-line"},null,-1)),s_=["innerHTML"],l_={__name:"article-list",setup(e){const t=Gl.sort((o,c)=>new Date(c.date).getTime()-new Date(o.date).getTime()),n=ve(t),s=Ms(),l=ve(1),a=ve(5);wt(()=>s.params.page,o=>{l.value=+o||1,i()},{immediate:!0});function r(o){const{pageIndex:c}=o;location.href=`/article-list/${c}`}function i(){const o=l.value,c=a.value,u=(o-1)*c,p=u+c;n.value=t.slice(u,p)}return(o,c)=>(Z(),le("div",Zy,[(Z(!0),le(fe,null,yt(n.value,u=>(Z(),le("div",{class:"article-item",key:u.name},[K("time",Xy,Se(u.date),1),K("h2",e_,[K("a",{href:"/article-detail/"+u.name},Se(u.title),9,t_)]),n_,K("div",{class:"abstract",innerHTML:u.abstract},null,8,s_)]))),128)),ue(zy,{"page-index":l.value,"onUpdate:pageIndex":c[0]||(c[0]=u=>l.value=u),"page-size":a.value,length:at(t).length,onPageChange:r},null,8,["page-index","page-size","length"]),ue(Lr)]))}};var a_=Ue(l_,[["__scopeId","data-v-6106dd9d"]]);const r_="modulepreload",oo={},i_="/",o_=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${i_}${s}`,s in oo)return;oo[s]=!0;const l=s.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const r=document.createElement("link");if(r.rel=l?"stylesheet":r_,l||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),l)return new Promise((i,o)=>{r.addEventListener("load",i),r.addEventListener("error",()=>o(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},c_=["id","host","repo","repoid","category","categoryid","mapping","term","strict","reactionsenabled","emitmetadata","inputposition","theme","lang","loading"],u_=_n({__name:"Giscus",props:{id:null,host:null,repo:null,repoId:null,category:null,categoryId:null,mapping:null,term:null,theme:null,strict:null,reactionsEnabled:null,emitMetadata:null,inputPosition:null,lang:null,loading:null},setup(e){const t=ve(!1);return Xe(()=>{t.value=!0,o_(()=>import("./giscus-a53917f0.a14eedf1.js"),[])}),(n,s)=>t.value?(Z(),le("giscus-widget",{key:0,id:e.id,host:e.host,repo:e.repo,repoid:e.repoId,category:e.category,categoryid:e.categoryId,mapping:e.mapping,term:e.term,strict:e.strict,reactionsenabled:e.reactionsEnabled,emitmetadata:e.emitMetadata,inputposition:e.inputPosition,theme:e.theme,lang:e.lang,loading:e.loading},null,8,c_)):bs("",!0)}}),Vu={__name:"comment",setup(e){return(t,n)=>(Z(),Vt(at(u_),{id:"comments",repo:"hai-zou/poseidon",repoId:"R_kgDOIPqaJQ",category:"General",categoryId:"DIC_kwDOIPqaJc4CW4xW",mapping:"pathname",term:"Welcome to component!",inputPosition:"top",theme:"light",lang:"zh-CN",loading:"lazy"}))}};var p_="/assets/view.3e5c4e53.svg";const f_={},Uu=e=>(Wt("data-v-3213da64"),e=e(),Gt(),e),h_={id:"busuanzi_container_page_pv"},d_=Uu(()=>K("img",{src:p_},null,-1)),g_=Uu(()=>K("span",{id:"busuanzi_value_page_pv"},null,-1)),m_=[d_,g_];function y_(e,t){return Z(),le("span",h_,m_)}var __=Ue(f_,[["render",y_],["__scopeId","data-v-3213da64"]]);const v_={class:"article-content"},b_={class:"detail-title"},j_={class:"post-info"},E_={class:"detail-container markdown-body"},x_=["innerHTML"],w_={__name:"article-detail",setup(e){const t=ve({}),n=Ms();Xe(()=>{const{name:l}=n.params;t.value=s(l)});function s(l){return Gl.find(a=>a.name===l)||{}}return(l,a)=>(Z(),le(fe,null,[K("div",v_,[K("h1",b_,Se(t.value.title),1),K("div",j_,[K("time",null,Se(t.value.date),1),ue(__)]),K("div",E_,[K("div",{innerHTML:t.value.content},null,8,x_)]),ue(Vu)]),ue(Lr)],64))}};var k_=Ue(w_,[["__scopeId","data-v-7c598ebd"]]);const Ku=e=>(Wt("data-v-3d98bfaa"),e=e(),Gt(),e),C_={class:"category-container"},S_=Ku(()=>K("h1",{align:"center"},"\u5206\u7C7B",-1)),T_={class:"category-list"},I_=["href"],R_=["href"],P_=Ku(()=>K("span",null," \u2014 ",-1)),A_={__name:"article-category",setup(e){const t=Ms(),n=ve([]),s=ve({}),l=ve([]),a=ve("");Xe(()=>{const{category:o}=t.params;r(),o&&(a.value=o,i(o))});function r(){const o=[],c={};for(const u of Gl){const p=u.category||[];o.push(...p);for(const f of p)c[f]||(c[f]=[]),c[f].push(u)}n.value=new Set([...o]),s.value=c}function i(o){a.value=o,l.value=s.value[o]}return(o,c)=>(Z(),le("div",C_,[S_,K("ul",T_,[(Z(!0),le(fe,null,yt(n.value,u=>(Z(),le("li",{key:u,class:kt({active:a.value===u})},[K("a",{href:"/article-category/"+u},Se(u),9,I_)],2))),128))]),(Z(!0),le(fe,null,yt(l.value,u=>(Z(),le("ul",{class:"category-item",key:u},[K("li",null,[K("a",{href:"/article-detail/"+u.name},[K("span",null,Se(u.title),1),P_,K("span",null,Se(u.date),1)],8,R_)])]))),128))]))}};var N_=Ue(A_,[["__scopeId","data-v-3d98bfaa"]]),O_=[{name:"about",title:"\u5173\u4E8E",date:"",content:`<h2>\u5173\u4E8E\u6211</h2>
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

`},{name:"archive",title:"\u5F52\u6863",date:"",content:"<archive />",comment:!1,footer:!1,abstract:""},{name:"friends",title:"\u53CB\u94FE",date:"",content:`<blockquote>
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

`}];const q_=_n({props:{html:{type:String,required:!0}},computed:{template(){return this.html||""}},render(){return Ps(Pu(this.template),{...this.$attrs})}});const M_={class:"custom-comtainer"},$_={class:"title"},L_={class:"markdown-body"},F_={__name:"custom",setup(e){const t=ve({}),n=Ms();Xe(()=>{const{link:l}=n.params;t.value=s(l)});function s(l){return O_.find(a=>a.name===l)||{}}return(l,a)=>(Z(),le(fe,null,[K("div",M_,[K("h1",$_,Se(t.value.title),1),K("div",L_,[ue(q_,{html:t.value.content||""},null,8,["html"])]),t.value.comment?(Z(),Vt(Vu,{key:0})):bs("",!0)]),t.value.footer?(Z(),Vt(Lr,{key:0})):bs("",!0)],64))}};var D_=Ue(F_,[["__scopeId","data-v-cefc71e6"]]),B_="/assets/loading.ffeb9370.svg";const H_={},V_={class:"spin-icon",src:B_};function U_(e,t){return Z(),le("img",V_)}var K_=Ue(H_,[["render",U_],["__scopeId","data-v-f5ee1996"]]);const z_=e=>(Wt("data-v-754c6fce"),e=e(),Gt(),e),W_=z_(()=>K("h1",{class:"title"},"Commits",-1)),G_={class:"commit-list"},J_={class:"message"},Y_={class:"date"},Q_={class:"commit-footer"},Z_={key:0,class:"loading-more"},X_={key:1,class:"no-data"},ev={__name:"site-commits",setup(e){const t=ve([]),n=ve(!1),s=ve(1);function l(r){n.value=!0,fetch(`https://api.github.com/repos/hai-zou/poseidon/commits?page=${r}&per_page=10`).then(i=>i.json()).then(i=>{n.value=!1,t.value.push(...i)}).catch(()=>{n.value=!1})}function a(){l(++s.value)}return Xe(()=>{l(s.value)}),(r,i)=>(Z(),le(fe,null,[W_,K("ul",G_,[(Z(!0),le(fe,null,yt(t.value,o=>(Z(),le("li",{key:o.sha,class:"commit-item"},[K("p",J_,Se(o.commit.message),1),K("p",Y_,Se(o.commit.committer.date),1)]))),128))]),K("footer",Q_,[t.value.length?(Z(),le("div",Z_,[K("a",{onClick:a},"\u52A0\u8F7D\u66F4\u591A"),n.value?(Z(),Vt(K_,{key:0})):bs("",!0)])):(Z(),le("div",X_,"\u6682\u65E0\u6570\u636E"))])],64))}};var tv=Ue(ev,[["__scopeId","data-v-754c6fce"]]);const nv={};function sv(e,t){return Z(),le("div",null,"404")}var lv=Ue(nv,[["render",sv]]);const av=[{path:"/",component:Vy,redirect:"/article-list/1/",children:[{path:"/article-list/:page",component:a_},{path:"/article-detail/:name",component:k_},{path:"/article-category/:category",component:N_},{path:"/custom/:link",component:D_},{path:"/site-commits",component:tv},{path:"/:catchAll(.*)",component:lv}]}],rv=yy({history:Nm(),routes:av});var iv=[{name:"\u5DE6\u773C\u4F1A\u966A\u53F3\u773C\u54ED\u306E\u535A\u5BA2",desc:"\u53E6\u4E00\u4E2A\u4E16\u754C",link:"https://qkongtao.cn/"},{name:"\u5B89\u77E5\u9C7C",desc:"\u751F\u6D3B\u660E\u6717\uFF0C\u4E07\u7269\u53EF\u7231",link:"https://anzhiy.cn/"},{name:"\u80E1\u6D82\u8BF4",desc:"hutusi.com",link:"https://hutusi.com/"},{name:"CC\u7684\u90E8\u843D\u683C",desc:"CC\u5EB7\u7EB3\u767E\u5DDD",link:"https://blog.ccknbc.cc/"}];const ov={class:"link-container"},cv=["href"],uv={class:"desc"},pv={__name:"friend-links",setup(e){return(t,n)=>(Z(),le("ul",ov,[(Z(!0),le(fe,null,yt(at(iv),s=>(Z(),le("li",{class:"link-item",key:s},[K("a",{class:"name",href:s.link,target:"_blank"},Se(s.name),9,cv),K("span",uv,Se(s.desc),1)]))),128))]))}};var fv=Ue(pv,[["__scopeId","data-v-56a2f2ac"]]);const hv={class:"article-wrap"},dv=["href"],gv={__name:"archive",setup(e){const t=ve([]);Xe(()=>{n()});function n(){const s=Gl.sort((a,r)=>new Date(r.date).getTime()-new Date(a.date).getTime()),l={};for(const a of s){const r=new Date(a.date).getFullYear();l[r]||(l[r]=[]),l[r].push(a)}t.value=Object.entries(l).map(a=>{const[r,i]=a;return{year:r,children:i}}).reverse()}return(s,l)=>(Z(!0),le(fe,null,yt(t.value,a=>(Z(),le("div",{class:"archive-container",key:a},[K("h3",null,Se(a.year),1),K("ul",hv,[(Z(!0),le(fe,null,yt(a.children,r=>(Z(),le("li",{class:"article-item",key:r},[K("a",{href:"/article-detail/"+r.name},Se(r.title),9,dv)]))),128))])]))),128))}};var mv=Ue(gv,[["__scopeId","data-v-92419846"]]);const Jl=Kc(gm);Jl.use(rv);Jl.component("friend-links",fv);Jl.component("archive",mv);Jl.mount("#app");
