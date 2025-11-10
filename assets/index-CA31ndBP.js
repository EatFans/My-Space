(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Sl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ct={},tr=[],En=()=>{},Ju=()=>!1,ra=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ml=n=>n.startsWith("onUpdate:"),Dt=Object.assign,bl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},$d=Object.prototype.hasOwnProperty,tt=(n,e)=>$d.call(n,e),ke=Array.isArray,Ur=n=>sa(n)==="[object Map]",Zd=n=>sa(n)==="[object Set]",Xe=n=>typeof n=="function",Tt=n=>typeof n=="string",xr=n=>typeof n=="symbol",xt=n=>n!==null&&typeof n=="object",Qu=n=>(xt(n)||Xe(n))&&Xe(n.then)&&Xe(n.catch),Jd=Object.prototype.toString,sa=n=>Jd.call(n),Qd=n=>sa(n).slice(8,-1),eh=n=>sa(n)==="[object Object]",El=n=>Tt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Nr=Sl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),aa=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},th=/-\w/g,hi=aa(n=>n.replace(th,e=>e.slice(1).toUpperCase())),nh=/\B([A-Z])/g,Ni=aa(n=>n.replace(nh,"-$1").toLowerCase()),ef=aa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ma=aa(n=>n?`on${ef(n)}`:""),ui=(n,e)=>!Object.is(n,e),ba=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},tf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ih=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let fc;const oa=()=>fc||(fc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yl(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Tt(i)?oh(i):yl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Tt(n)||xt(n))return n}const rh=/;(?![^(]*\))/g,sh=/:([^]+)/,ah=/\/\*[^]*?\*\//g;function oh(n){const e={};return n.replace(ah,"").split(rh).forEach(t=>{if(t){const i=t.split(sh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Tl(n){let e="";if(Tt(n))e=n;else if(ke(n))for(let t=0;t<n.length;t++){const i=Tl(n[t]);i&&(e+=i+" ")}else if(xt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const lh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ch=Sl(lh);function nf(n){return!!n||n===""}let kt;class rf{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=kt;try{return kt=this,e()}finally{kt=t}}}on(){++this._on===1&&(this.prevScope=kt,kt=this)}off(){this._on>0&&--this._on===0&&(kt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function uh(n){return new rf(n)}function fh(){return kt}let lt;const Ea=new WeakSet;class sf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,kt&&kt.active&&kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ea.has(this)&&(Ea.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||of(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,dc(this),lf(this);const e=lt,t=hn;lt=this,hn=!0;try{return this.fn()}finally{cf(this),lt=e,hn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)wl(e);this.deps=this.depsTail=void 0,dc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ea.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){mo(this)&&this.run()}get dirty(){return mo(this)}}let af=0,Fr,Or;function of(n,e=!1){if(n.flags|=8,e){n.next=Or,Or=n;return}n.next=Fr,Fr=n}function Al(){af++}function Rl(){if(--af>0)return;if(Or){let e=Or;for(Or=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Fr;){let e=Fr;for(Fr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function lf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function cf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),wl(i),dh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function mo(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(uf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function uf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Wr)||(n.globalVersion=Wr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!mo(n))))return;n.flags|=2;const e=n.dep,t=lt,i=hn;lt=n,hn=!0;try{lf(n);const r=n.fn(n._value);(e.version===0||ui(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{lt=t,hn=i,cf(n),n.flags&=-3}}function wl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)wl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function dh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let hn=!0;const ff=[];function Wn(){ff.push(hn),hn=!1}function Xn(){const n=ff.pop();hn=n===void 0?!0:n}function dc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=lt;lt=void 0;try{e()}finally{lt=t}}}let Wr=0;class hh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Cl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!lt||!hn||lt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==lt)t=this.activeLink=new hh(lt,this),lt.deps?(t.prevDep=lt.depsTail,lt.depsTail.nextDep=t,lt.depsTail=t):lt.deps=lt.depsTail=t,df(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=lt.depsTail,t.nextDep=void 0,lt.depsTail.nextDep=t,lt.depsTail=t,lt.deps===t&&(lt.deps=i)}return t}trigger(e){this.version++,Wr++,this.notify(e)}notify(e){Al();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Rl()}}}function df(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)df(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const xo=new WeakMap,Di=Symbol(""),go=Symbol(""),Xr=Symbol("");function wt(n,e,t){if(hn&&lt){let i=xo.get(n);i||xo.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Cl),r.map=i,r.key=t),r.track()}}function On(n,e,t,i,r,s){const a=xo.get(n);if(!a){Wr++;return}const o=l=>{l&&l.trigger()};if(Al(),e==="clear")a.forEach(o);else{const l=ke(n),c=l&&El(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===Xr||!xr(d)&&d>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Xr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Di)),Ur(n)&&o(a.get(go)));break;case"delete":l||(o(a.get(Di)),Ur(n)&&o(a.get(go)));break;case"set":Ur(n)&&o(a.get(Di));break}}Rl()}function Oi(n){const e=et(n);return e===n?e:(wt(e,"iterate",Xr),pn(n)?e:e.map(Ft))}function Pl(n){return wt(n=et(n),"iterate",Xr),n}const ph={__proto__:null,[Symbol.iterator](){return ya(this,Symbol.iterator,Ft)},concat(...n){return Oi(this).concat(...n.map(e=>ke(e)?Oi(e):e))},entries(){return ya(this,"entries",n=>(n[1]=Ft(n[1]),n))},every(n,e){return An(this,"every",n,e,void 0,arguments)},filter(n,e){return An(this,"filter",n,e,t=>t.map(Ft),arguments)},find(n,e){return An(this,"find",n,e,Ft,arguments)},findIndex(n,e){return An(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return An(this,"findLast",n,e,Ft,arguments)},findLastIndex(n,e){return An(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return An(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ta(this,"includes",n)},indexOf(...n){return Ta(this,"indexOf",n)},join(n){return Oi(this).join(n)},lastIndexOf(...n){return Ta(this,"lastIndexOf",n)},map(n,e){return An(this,"map",n,e,void 0,arguments)},pop(){return br(this,"pop")},push(...n){return br(this,"push",n)},reduce(n,...e){return hc(this,"reduce",n,e)},reduceRight(n,...e){return hc(this,"reduceRight",n,e)},shift(){return br(this,"shift")},some(n,e){return An(this,"some",n,e,void 0,arguments)},splice(...n){return br(this,"splice",n)},toReversed(){return Oi(this).toReversed()},toSorted(n){return Oi(this).toSorted(n)},toSpliced(...n){return Oi(this).toSpliced(...n)},unshift(...n){return br(this,"unshift",n)},values(){return ya(this,"values",Ft)}};function ya(n,e,t){const i=Pl(n),r=i[e]();return i!==n&&!pn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const mh=Array.prototype;function An(n,e,t,i,r,s){const a=Pl(n),o=a!==n&&!pn(n),l=a[e];if(l!==mh[e]){const f=l.apply(n,s);return o?Ft(f):f}let c=t;a!==n&&(o?c=function(f,d){return t.call(this,Ft(f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function hc(n,e,t,i){const r=Pl(n);let s=t;return r!==n&&(pn(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,Ft(o),l,n)}),r[e](s,...i)}function Ta(n,e,t){const i=et(n);wt(i,"iterate",Xr);const r=i[e](...t);return(r===-1||r===!1)&&Il(t[0])?(t[0]=et(t[0]),i[e](...t)):r}function br(n,e,t=[]){Wn(),Al();const i=et(n)[e].apply(n,t);return Rl(),Xn(),i}const xh=Sl("__proto__,__v_isRef,__isVue"),hf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(xr));function gh(n){xr(n)||(n=String(n));const e=et(this);return wt(e,"has",n),e.hasOwnProperty(n)}class pf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Rh:_f:s?gf:xf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=ke(e);if(!r){let l;if(a&&(l=ph[t]))return l;if(t==="hasOwnProperty")return gh}const o=Reflect.get(e,t,Ct(e)?e:i);if((xr(t)?hf.has(t):xh(t))||(r||wt(e,"get",t),s))return o;if(Ct(o)){const l=a&&El(t)?o:o.value;return r&&xt(l)?vo(l):l}return xt(o)?r?vo(o):la(o):o}}class mf extends pf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Li(s);if(!pn(i)&&!Li(i)&&(s=et(s),i=et(i)),!ke(e)&&Ct(s)&&!Ct(i))return l||(s.value=i),!0}const a=ke(e)&&El(t)?Number(t)<e.length:tt(e,t),o=Reflect.set(e,t,i,Ct(e)?e:r);return e===et(r)&&(a?ui(i,s)&&On(e,"set",t,i):On(e,"add",t,i)),o}deleteProperty(e,t){const i=tt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&On(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!xr(t)||!hf.has(t))&&wt(e,"has",t),i}ownKeys(e){return wt(e,"iterate",ke(e)?"length":Di),Reflect.ownKeys(e)}}class _h extends pf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const vh=new mf,Sh=new _h,Mh=new mf(!0);const _o=n=>n,us=n=>Reflect.getPrototypeOf(n);function bh(n,e,t){return function(...i){const r=this.__v_raw,s=et(r),a=Ur(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?_o:e?So:Ft;return!e&&wt(s,"iterate",l?go:Di),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function fs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Eh(n,e){const t={get(r){const s=this.__v_raw,a=et(s),o=et(r);n||(ui(r,o)&&wt(a,"get",r),wt(a,"get",o));const{has:l}=us(a),c=e?_o:n?So:Ft;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&wt(et(r),"iterate",Di),r.size},has(r){const s=this.__v_raw,a=et(s),o=et(r);return n||(ui(r,o)&&wt(a,"has",r),wt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=et(o),c=e?_o:n?So:Ft;return!n&&wt(l,"iterate",Di),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return Dt(t,n?{add:fs("add"),set:fs("set"),delete:fs("delete"),clear:fs("clear")}:{add(r){!e&&!pn(r)&&!Li(r)&&(r=et(r));const s=et(this);return us(s).has.call(s,r)||(s.add(r),On(s,"add",r,r)),this},set(r,s){!e&&!pn(s)&&!Li(s)&&(s=et(s));const a=et(this),{has:o,get:l}=us(a);let c=o.call(a,r);c||(r=et(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?ui(s,u)&&On(a,"set",r,s):On(a,"add",r,s),this},delete(r){const s=et(this),{has:a,get:o}=us(s);let l=a.call(s,r);l||(r=et(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&On(s,"delete",r,void 0),c},clear(){const r=et(this),s=r.size!==0,a=r.clear();return s&&On(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=bh(r,n,e)}),t}function Dl(n,e){const t=Eh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(tt(t,r)&&r in i?t:i,r,s)}const yh={get:Dl(!1,!1)},Th={get:Dl(!1,!0)},Ah={get:Dl(!0,!1)};const xf=new WeakMap,gf=new WeakMap,_f=new WeakMap,Rh=new WeakMap;function wh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ch(n){return n.__v_skip||!Object.isExtensible(n)?0:wh(Qd(n))}function la(n){return Li(n)?n:Ll(n,!1,vh,yh,xf)}function vf(n){return Ll(n,!1,Mh,Th,gf)}function vo(n){return Ll(n,!0,Sh,Ah,_f)}function Ll(n,e,t,i,r){if(!xt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Ch(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function Br(n){return Li(n)?Br(n.__v_raw):!!(n&&n.__v_isReactive)}function Li(n){return!!(n&&n.__v_isReadonly)}function pn(n){return!!(n&&n.__v_isShallow)}function Il(n){return n?!!n.__v_raw:!1}function et(n){const e=n&&n.__v_raw;return e?et(e):n}function Sf(n){return!tt(n,"__v_skip")&&Object.isExtensible(n)&&tf(n,"__v_skip",!0),n}const Ft=n=>xt(n)?la(n):n,So=n=>xt(n)?vo(n):n;function Ct(n){return n?n.__v_isRef===!0:!1}function Ul(n){return Mf(n,!1)}function Ph(n){return Mf(n,!0)}function Mf(n,e){return Ct(n)?n:new Dh(n,e)}class Dh{constructor(e,t){this.dep=new Cl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:et(e),this._value=t?e:Ft(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||pn(e)||Li(e);e=i?e:et(e),ui(e,t)&&(this._rawValue=e,this._value=i?e:Ft(e),this.dep.trigger())}}function nr(n){return Ct(n)?n.value:n}const Lh={get:(n,e,t)=>e==="__v_raw"?n:nr(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ct(r)&&!Ct(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function bf(n){return Br(n)?n:new Proxy(n,Lh)}class Ih{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Cl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&lt!==this)return of(this,!0),!0}get value(){const e=this.dep.track();return uf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Uh(n,e,t=!1){let i,r;return Xe(n)?i=n:(i=n.get,r=n.set),new Ih(i,r,t)}const ds={},qs=new WeakMap;let Ti;function Nh(n,e=!1,t=Ti){if(t){let i=qs.get(t);i||qs.set(t,i=[]),i.push(n)}}function Fh(n,e,t=ct){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=A=>r?A:pn(A)||r===!1||r===0?oi(A,1):oi(A);let u,f,d,h,g=!1,_=!1;if(Ct(n)?(f=()=>n.value,g=pn(n)):Br(n)?(f=()=>c(n),g=!0):ke(n)?(_=!0,g=n.some(A=>Br(A)||pn(A)),f=()=>n.map(A=>{if(Ct(A))return A.value;if(Br(A))return c(A);if(Xe(A))return l?l(A,2):A()})):Xe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Wn();try{d()}finally{Xn()}}const A=Ti;Ti=u;try{return l?l(n,3,[h]):n(h)}finally{Ti=A}}:f=En,e&&r){const A=f,L=r===!0?1/0:r;f=()=>oi(A(),L)}const m=fh(),p=()=>{u.stop(),m&&m.active&&bl(m.effects,u)};if(s&&e){const A=e;e=(...L)=>{A(...L),p()}}let y=_?new Array(n.length).fill(ds):ds;const E=A=>{if(!(!(u.flags&1)||!u.dirty&&!A))if(e){const L=u.run();if(r||g||(_?L.some((C,P)=>ui(C,y[P])):ui(L,y))){d&&d();const C=Ti;Ti=u;try{const P=[L,y===ds?void 0:_&&y[0]===ds?[]:y,h];y=L,l?l(e,3,P):e(...P)}finally{Ti=C}}}else u.run()};return o&&o(E),u=new sf(f),u.scheduler=a?()=>a(E,!1):E,h=A=>Nh(A,!1,u),d=u.onStop=()=>{const A=qs.get(u);if(A){if(l)l(A,4);else for(const L of A)L();qs.delete(u)}},e?i?E(!0):y=u.run():a?a(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function oi(n,e=1/0,t){if(e<=0||!xt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ct(n))oi(n.value,e,t);else if(ke(n))for(let i=0;i<n.length;i++)oi(n[i],e,t);else if(Zd(n)||Ur(n))n.forEach(i=>{oi(i,e,t)});else if(eh(n)){for(const i in n)oi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&oi(n[i],e,t)}return n}function ns(n,e,t,i){try{return i?n(...i):n()}catch(r){ca(r,e,t)}}function Tn(n,e,t,i){if(Xe(n)){const r=ns(n,e,t,i);return r&&Qu(r)&&r.catch(s=>{ca(s,e,t)}),r}if(ke(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Tn(n[s],e,t,i));return r}}function ca(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ct;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){Wn(),ns(s,null,10,[n,l,c]),Xn();return}}Oh(n,t,r,i,a)}function Oh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ot=[];let _n=-1;const ir=[];let ri=null,Qi=0;const Ef=Promise.resolve();let Ys=null;function yf(n){const e=Ys||Ef;return n?e.then(this?n.bind(this):n):e}function Bh(n){let e=_n+1,t=Ot.length;for(;e<t;){const i=e+t>>>1,r=Ot[i],s=qr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Nl(n){if(!(n.flags&1)){const e=qr(n),t=Ot[Ot.length-1];!t||!(n.flags&2)&&e>=qr(t)?Ot.push(n):Ot.splice(Bh(e),0,n),n.flags|=1,Tf()}}function Tf(){Ys||(Ys=Ef.then(Rf))}function zh(n){ke(n)?ir.push(...n):ri&&n.id===-1?ri.splice(Qi+1,0,n):n.flags&1||(ir.push(n),n.flags|=1),Tf()}function pc(n,e,t=_n+1){for(;t<Ot.length;t++){const i=Ot[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ot.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Af(n){if(ir.length){const e=[...new Set(ir)].sort((t,i)=>qr(t)-qr(i));if(ir.length=0,ri){ri.push(...e);return}for(ri=e,Qi=0;Qi<ri.length;Qi++){const t=ri[Qi];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ri=null,Qi=0}}const qr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Rf(n){try{for(_n=0;_n<Ot.length;_n++){const e=Ot[_n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ns(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;_n<Ot.length;_n++){const e=Ot[_n];e&&(e.flags&=-2)}_n=-1,Ot.length=0,Af(),Ys=null,(Ot.length||ir.length)&&Rf()}}let Mn=null,wf=null;function Ks(n){const e=Mn;return Mn=n,wf=n&&n.type.__scopeId||null,e}function Vh(n,e=Mn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Zs(-1);const s=Ks(e);let a;try{a=n(...r)}finally{Ks(s),i._d&&Zs(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function gi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Wn(),Tn(l,t,8,[n.el,o,n,e]),Xn())}}const Gh=Symbol("_vte"),Hh=n=>n.__isTeleport,kh=Symbol("_leaveCb");function Fl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Fl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Ol(n,e){return Xe(n)?Dt({name:n.name},e,{setup:n}):n}function Cf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const js=new WeakMap;function zr(n,e,t,i,r=!1){if(ke(n)){n.forEach((g,_)=>zr(g,e&&(ke(e)?e[_]:e),t,i,r));return}if(Vr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&zr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?kl(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===ct?o.refs={}:o.refs,f=o.setupState,d=et(f),h=f===ct?Ju:g=>tt(d,g);if(c!=null&&c!==l){if(mc(e),Tt(c))u[c]=null,h(c)&&(f[c]=null);else if(Ct(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(Xe(l))ns(l,o,12,[a,u]);else{const g=Tt(l),_=Ct(l);if(g||_){const m=()=>{if(n.f){const p=g?h(l)?f[l]:u[l]:l.value;if(r)ke(p)&&bl(p,s);else if(ke(p))p.includes(s)||p.push(s);else if(g)u[l]=[s],h(l)&&(f[l]=u[l]);else{const y=[s];l.value=y,n.k&&(u[n.k]=y)}}else g?(u[l]=a,h(l)&&(f[l]=a)):_&&(l.value=a,n.k&&(u[n.k]=a))};if(a){const p=()=>{m(),js.delete(n)};p.id=-1,js.set(n,p),$t(p,t)}else mc(n),m()}}}function mc(n){const e=js.get(n);e&&(e.flags|=8,js.delete(n))}oa().requestIdleCallback;oa().cancelIdleCallback;const Vr=n=>!!n.type.__asyncLoader,Pf=n=>n.type.__isKeepAlive;function Wh(n,e){Df(n,"a",e)}function Xh(n,e){Df(n,"da",e)}function Df(n,e,t=Bt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ua(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Pf(r.parent.vnode)&&qh(i,e,t,r),r=r.parent}}function qh(n,e,t,i){const r=ua(e,n,i,!0);Bl(()=>{bl(i[e],r)},t)}function ua(n,e,t=Bt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Wn();const o=is(t),l=Tn(e,t,n,a);return o(),Xn(),l});return i?r.unshift(s):r.push(s),s}}const $n=n=>(e,t=Bt)=>{(!Kr||n==="sp")&&ua(n,(...i)=>e(...i),t)},Yh=$n("bm"),Lf=$n("m"),Kh=$n("bu"),jh=$n("u"),$h=$n("bum"),Bl=$n("um"),Zh=$n("sp"),Jh=$n("rtg"),Qh=$n("rtc");function ep(n,e=Bt){ua("ec",n,e)}const tp=Symbol.for("v-ndc"),Mo=n=>n?Zf(n)?kl(n):Mo(n.parent):null,Gr=Dt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Mo(n.parent),$root:n=>Mo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Uf(n),$forceUpdate:n=>n.f||(n.f=()=>{Nl(n.update)}),$nextTick:n=>n.n||(n.n=yf.bind(n.proxy)),$watch:n=>bp.bind(n)}),Aa=(n,e)=>n!==ct&&!n.__isScriptSetup&&tt(n,e),np={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Aa(i,e))return a[e]=1,i[e];if(r!==ct&&tt(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&tt(c,e))return a[e]=3,s[e];if(t!==ct&&tt(t,e))return a[e]=4,t[e];bo&&(a[e]=0)}}const u=Gr[e];let f,d;if(u)return e==="$attrs"&&wt(n.attrs,"get",""),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==ct&&tt(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,tt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Aa(r,e)?(r[e]=t,!0):i!==ct&&tt(i,e)?(i[e]=t,!0):tt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s,type:a}},o){let l,c;return!!(t[o]||n!==ct&&o[0]!=="$"&&tt(n,o)||Aa(e,o)||(l=s[0])&&tt(l,o)||tt(i,o)||tt(Gr,o)||tt(r.config.globalProperties,o)||(c=a.__cssModules)&&c[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:tt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function xc(n){return ke(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let bo=!0;function ip(n){const e=Uf(n),t=n.proxy,i=n.ctx;bo=!1,e.beforeCreate&&gc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:y,destroyed:E,unmounted:A,render:L,renderTracked:C,renderTriggered:P,errorCaptured:W,serverPrefetch:T,expose:b,inheritAttrs:N,components:X,directives:Z,filters:se}=e;if(c&&rp(c,i,null),a)for(const ne in a){const V=a[ne];Xe(V)&&(i[ne]=V.bind(t))}if(r){const ne=r.call(t,t);xt(ne)&&(n.data=la(ne))}if(bo=!0,s)for(const ne in s){const V=s[ne],he=Xe(V)?V.bind(t,t):Xe(V.get)?V.get.bind(t,t):En,me=!Xe(V)&&Xe(V.set)?V.set.bind(t):En,we=cn({get:he,set:me});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>we.value,set:Fe=>we.value=Fe})}if(o)for(const ne in o)If(o[ne],i,t,ne);if(l){const ne=Xe(l)?l.call(t):l;Reflect.ownKeys(ne).forEach(V=>{Fs(V,ne[V])})}u&&gc(u,n,"c");function te(ne,V){ke(V)?V.forEach(he=>ne(he.bind(t))):V&&ne(V.bind(t))}if(te(Yh,f),te(Lf,d),te(Kh,h),te(jh,g),te(Wh,_),te(Xh,m),te(ep,W),te(Qh,C),te(Jh,P),te($h,y),te(Bl,A),te(Zh,T),ke(b))if(b.length){const ne=n.exposed||(n.exposed={});b.forEach(V=>{Object.defineProperty(ne,V,{get:()=>t[V],set:he=>t[V]=he,enumerable:!0})})}else n.exposed||(n.exposed={});L&&n.render===En&&(n.render=L),N!=null&&(n.inheritAttrs=N),X&&(n.components=X),Z&&(n.directives=Z),T&&Cf(n)}function rp(n,e,t=En){ke(n)&&(n=Eo(n));for(const i in n){const r=n[i];let s;xt(r)?"default"in r?s=Gn(r.from||i,r.default,!0):s=Gn(r.from||i):s=Gn(r),Ct(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function gc(n,e,t){Tn(ke(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function If(n,e,t,i){let r=i.includes(".")?Yf(t,i):()=>t[i];if(Tt(n)){const s=e[n];Xe(s)&&Os(r,s)}else if(Xe(n))Os(r,n.bind(t));else if(xt(n))if(ke(n))n.forEach(s=>If(s,e,t,i));else{const s=Xe(n.handler)?n.handler.bind(t):e[n.handler];Xe(s)&&Os(r,s,n)}}function Uf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>$s(l,c,a,!0)),$s(l,e,a)),xt(e)&&s.set(e,l),l}function $s(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&$s(n,s,t,!0),r&&r.forEach(a=>$s(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=sp[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const sp={data:_c,props:vc,emits:vc,methods:Lr,computed:Lr,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:Lr,directives:Lr,watch:op,provide:_c,inject:ap};function _c(n,e){return e?n?function(){return Dt(Xe(n)?n.call(this,this):n,Xe(e)?e.call(this,this):e)}:e:n}function ap(n,e){return Lr(Eo(n),Eo(e))}function Eo(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function It(n,e){return n?[...new Set([].concat(n,e))]:e}function Lr(n,e){return n?Dt(Object.create(null),n,e):e}function vc(n,e){return n?ke(n)&&ke(e)?[...new Set([...n,...e])]:Dt(Object.create(null),xc(n),xc(e??{})):e}function op(n,e){if(!n)return e;if(!e)return n;const t=Dt(Object.create(null),n);for(const i in e)t[i]=It(n[i],e[i]);return t}function Nf(){return{app:null,config:{isNativeTag:Ju,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lp=0;function cp(n,e){return function(i,r=null){Xe(i)||(i=Dt({},i)),r!=null&&!xt(r)&&(r=null);const s=Nf(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:lp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Kp,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&Xe(u.install)?(a.add(u),u.install(c,...f)):Xe(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||fn(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(h,u,d),l=!0,c._container=u,u.__vue_app__=c,kl(h.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Tn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=rr;rr=c;try{return u()}finally{rr=f}}};return c}}let rr=null;function Fs(n,e){if(Bt){let t=Bt.provides;const i=Bt.parent&&Bt.parent.provides;i===t&&(t=Bt.provides=Object.create(i)),t[n]=e}}function Gn(n,e,t=!1){const i=Hp();if(i||rr){let r=rr?rr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Xe(e)?e.call(i&&i.proxy):e}}const Ff={},Of=()=>Object.create(Ff),Bf=n=>Object.getPrototypeOf(n)===Ff;function up(n,e,t,i=!1){const r={},s=Of();n.propsDefaults=Object.create(null),zf(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:vf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function fp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=et(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(fa(n.emitsOptions,d))continue;const h=e[d];if(l)if(tt(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const g=hi(d);r[g]=yo(l,o,g,h,n,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{zf(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!tt(e,f)&&((u=Ni(f))===f||!tt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=yo(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!tt(e,f))&&(delete s[f],c=!0)}c&&On(n.attrs,"set","")}function zf(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Nr(l))continue;const c=e[l];let u;r&&tt(r,u=hi(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:fa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=et(t),c=o||ct;for(let u=0;u<s.length;u++){const f=s[u];t[f]=yo(r,l,f,c[f],n,!tt(c,f))}}return a}function yo(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=tt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Xe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=is(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Ni(t))&&(i=!0))}return i}const dp=new WeakMap;function Vf(n,e,t=!1){const i=t?dp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Xe(n)){const u=f=>{l=!0;const[d,h]=Vf(f,e,!0);Dt(a,d),h&&o.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return xt(n)&&i.set(n,tr),tr;if(ke(s))for(let u=0;u<s.length;u++){const f=hi(s[u]);Sc(f)&&(a[f]=ct)}else if(s)for(const u in s){const f=hi(u);if(Sc(f)){const d=s[u],h=a[f]=ke(d)||Xe(d)?{type:d}:Dt({},d),g=h.type;let _=!1,m=!0;if(ke(g))for(let p=0;p<g.length;++p){const y=g[p],E=Xe(y)&&y.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(m=!1)}else _=Xe(g)&&g.name==="Boolean";h[0]=_,h[1]=m,(_||tt(h,"default"))&&o.push(f)}}const c=[a,o];return xt(n)&&i.set(n,c),c}function Sc(n){return n[0]!=="$"&&!Nr(n)}const zl=n=>n==="_"||n==="_ctx"||n==="$stable",Vl=n=>ke(n)?n.map(vn):[vn(n)],hp=(n,e,t)=>{if(e._n)return e;const i=Vh((...r)=>Vl(e(...r)),t);return i._c=!1,i},Gf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(zl(r))continue;const s=n[r];if(Xe(s))e[r]=hp(r,s,i);else if(s!=null){const a=Vl(s);e[r]=()=>a}}},Hf=(n,e)=>{const t=Vl(e);n.slots.default=()=>t},kf=(n,e,t)=>{for(const i in e)(t||!zl(i))&&(n[i]=e[i])},pp=(n,e,t)=>{const i=n.slots=Of();if(n.vnode.shapeFlag&32){const r=e._;r?(kf(i,e,t),t&&tf(i,"_",r,!0)):Gf(e,i)}else e&&Hf(n,e)},mp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=ct;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:kf(r,e,t):(s=!e.$stable,Gf(e,r)),a=e}else e&&(Hf(n,e),a={default:1});if(s)for(const o in r)!zl(o)&&a[o]==null&&delete r[o]},$t=Pp;function xp(n){return gp(n)}function gp(n,e){const t=oa();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=En,insertStaticContent:g}=n,_=(R,w,F,S=null,q=null,G=null,ue=void 0,j=null,le=!!w.dynamicChildren)=>{if(R===w)return;R&&!Er(R,w)&&(S=D(R),Fe(R,q,G,!0),R=null),w.patchFlag===-2&&(le=!1,w.dynamicChildren=null);const{type:H,ref:fe,shapeFlag:v}=w;switch(H){case da:m(R,w,F,S);break;case or:p(R,w,F,S);break;case wa:R==null&&y(w,F,S,ue);break;case Fn:X(R,w,F,S,q,G,ue,j,le);break;default:v&1?L(R,w,F,S,q,G,ue,j,le):v&6?Z(R,w,F,S,q,G,ue,j,le):(v&64||v&128)&&H.process(R,w,F,S,q,G,ue,j,le,oe)}fe!=null&&q?zr(fe,R&&R.ref,G,w||R,!w):fe==null&&R&&R.ref!=null&&zr(R.ref,null,G,R,!0)},m=(R,w,F,S)=>{if(R==null)i(w.el=o(w.children),F,S);else{const q=w.el=R.el;w.children!==R.children&&c(q,w.children)}},p=(R,w,F,S)=>{R==null?i(w.el=l(w.children||""),F,S):w.el=R.el},y=(R,w,F,S)=>{[R.el,R.anchor]=g(R.children,w,F,S,R.el,R.anchor)},E=({el:R,anchor:w},F,S)=>{let q;for(;R&&R!==w;)q=d(R),i(R,F,S),R=q;i(w,F,S)},A=({el:R,anchor:w})=>{let F;for(;R&&R!==w;)F=d(R),r(R),R=F;r(w)},L=(R,w,F,S,q,G,ue,j,le)=>{if(w.type==="svg"?ue="svg":w.type==="math"&&(ue="mathml"),R==null)C(w,F,S,q,G,ue,j,le);else{const H=R.el&&R.el._isVueCE?R.el:null;try{H&&H._beginPatch(),T(R,w,q,G,ue,j,le)}finally{H&&H._endPatch()}}},C=(R,w,F,S,q,G,ue,j)=>{let le,H;const{props:fe,shapeFlag:v,transition:x,dirs:U}=R;if(le=R.el=a(R.type,G,fe&&fe.is,fe),v&8?u(le,R.children):v&16&&W(R.children,le,null,S,q,Ra(R,G),ue,j),U&&gi(R,null,S,"created"),P(le,R,R.scopeId,ue,S),fe){for(const Q in fe)Q!=="value"&&!Nr(Q)&&s(le,Q,null,fe[Q],G,S);"value"in fe&&s(le,"value",null,fe.value,G),(H=fe.onVnodeBeforeMount)&&gn(H,S,R)}U&&gi(R,null,S,"beforeMount");const k=_p(q,x);k&&x.beforeEnter(le),i(le,w,F),((H=fe&&fe.onVnodeMounted)||k||U)&&$t(()=>{H&&gn(H,S,R),k&&x.enter(le),U&&gi(R,null,S,"mounted")},q)},P=(R,w,F,S,q)=>{if(F&&h(R,F),S)for(let G=0;G<S.length;G++)h(R,S[G]);if(q){let G=q.subTree;if(w===G||jf(G.type)&&(G.ssContent===w||G.ssFallback===w)){const ue=q.vnode;P(R,ue,ue.scopeId,ue.slotScopeIds,q.parent)}}},W=(R,w,F,S,q,G,ue,j,le=0)=>{for(let H=le;H<R.length;H++){const fe=R[H]=j?si(R[H]):vn(R[H]);_(null,fe,w,F,S,q,G,ue,j)}},T=(R,w,F,S,q,G,ue)=>{const j=w.el=R.el;let{patchFlag:le,dynamicChildren:H,dirs:fe}=w;le|=R.patchFlag&16;const v=R.props||ct,x=w.props||ct;let U;if(F&&_i(F,!1),(U=x.onVnodeBeforeUpdate)&&gn(U,F,w,R),fe&&gi(w,R,F,"beforeUpdate"),F&&_i(F,!0),(v.innerHTML&&x.innerHTML==null||v.textContent&&x.textContent==null)&&u(j,""),H?b(R.dynamicChildren,H,j,F,S,Ra(w,q),G):ue||V(R,w,j,null,F,S,Ra(w,q),G,!1),le>0){if(le&16)N(j,v,x,F,q);else if(le&2&&v.class!==x.class&&s(j,"class",null,x.class,q),le&4&&s(j,"style",v.style,x.style,q),le&8){const k=w.dynamicProps;for(let Q=0;Q<k.length;Q++){const z=k[Q],ye=v[z],pe=x[z];(pe!==ye||z==="value")&&s(j,z,ye,pe,q,F)}}le&1&&R.children!==w.children&&u(j,w.children)}else!ue&&H==null&&N(j,v,x,F,q);((U=x.onVnodeUpdated)||fe)&&$t(()=>{U&&gn(U,F,w,R),fe&&gi(w,R,F,"updated")},S)},b=(R,w,F,S,q,G,ue)=>{for(let j=0;j<w.length;j++){const le=R[j],H=w[j],fe=le.el&&(le.type===Fn||!Er(le,H)||le.shapeFlag&198)?f(le.el):F;_(le,H,fe,null,S,q,G,ue,!0)}},N=(R,w,F,S,q)=>{if(w!==F){if(w!==ct)for(const G in w)!Nr(G)&&!(G in F)&&s(R,G,w[G],null,q,S);for(const G in F){if(Nr(G))continue;const ue=F[G],j=w[G];ue!==j&&G!=="value"&&s(R,G,j,ue,q,S)}"value"in F&&s(R,"value",w.value,F.value,q)}},X=(R,w,F,S,q,G,ue,j,le)=>{const H=w.el=R?R.el:o(""),fe=w.anchor=R?R.anchor:o("");let{patchFlag:v,dynamicChildren:x,slotScopeIds:U}=w;U&&(j=j?j.concat(U):U),R==null?(i(H,F,S),i(fe,F,S),W(w.children||[],F,fe,q,G,ue,j,le)):v>0&&v&64&&x&&R.dynamicChildren?(b(R.dynamicChildren,x,F,q,G,ue,j),(w.key!=null||q&&w===q.subTree)&&Wf(R,w,!0)):V(R,w,F,fe,q,G,ue,j,le)},Z=(R,w,F,S,q,G,ue,j,le)=>{w.slotScopeIds=j,R==null?w.shapeFlag&512?q.ctx.activate(w,F,S,ue,le):se(w,F,S,q,G,ue,le):ie(R,w,le)},se=(R,w,F,S,q,G,ue)=>{const j=R.component=Gp(R,S,q);if(Pf(R)&&(j.ctx.renderer=oe),kp(j,!1,ue),j.asyncDep){if(q&&q.registerDep(j,te,ue),!R.el){const le=j.subTree=fn(or);p(null,le,w,F),R.placeholder=le.el}}else te(j,R,w,F,q,G,ue)},ie=(R,w,F)=>{const S=w.component=R.component;if(wp(R,w,F))if(S.asyncDep&&!S.asyncResolved){ne(S,w,F);return}else S.next=w,S.update();else w.el=R.el,S.vnode=w},te=(R,w,F,S,q,G,ue)=>{const j=()=>{if(R.isMounted){let{next:v,bu:x,u:U,parent:k,vnode:Q}=R;{const Ae=Xf(R);if(Ae){v&&(v.el=Q.el,ne(R,v,ue)),Ae.asyncDep.then(()=>{R.isUnmounted||j()});return}}let z=v,ye;_i(R,!1),v?(v.el=Q.el,ne(R,v,ue)):v=Q,x&&ba(x),(ye=v.props&&v.props.onVnodeBeforeUpdate)&&gn(ye,k,v,Q),_i(R,!0);const pe=bc(R),Ce=R.subTree;R.subTree=pe,_(Ce,pe,f(Ce.el),D(Ce),R,q,G),v.el=pe.el,z===null&&Cp(R,pe.el),U&&$t(U,q),(ye=v.props&&v.props.onVnodeUpdated)&&$t(()=>gn(ye,k,v,Q),q)}else{let v;const{el:x,props:U}=w,{bm:k,m:Q,parent:z,root:ye,type:pe}=R,Ce=Vr(w);_i(R,!1),k&&ba(k),!Ce&&(v=U&&U.onVnodeBeforeMount)&&gn(v,z,w),_i(R,!0);{ye.ce&&ye.ce._def.shadowRoot!==!1&&ye.ce._injectChildStyle(pe);const Ae=R.subTree=bc(R);_(null,Ae,F,S,R,q,G),w.el=Ae.el}if(Q&&$t(Q,q),!Ce&&(v=U&&U.onVnodeMounted)){const Ae=w;$t(()=>gn(v,z,Ae),q)}(w.shapeFlag&256||z&&Vr(z.vnode)&&z.vnode.shapeFlag&256)&&R.a&&$t(R.a,q),R.isMounted=!0,w=F=S=null}};R.scope.on();const le=R.effect=new sf(j);R.scope.off();const H=R.update=le.run.bind(le),fe=R.job=le.runIfDirty.bind(le);fe.i=R,fe.id=R.uid,le.scheduler=()=>Nl(fe),_i(R,!0),H()},ne=(R,w,F)=>{w.component=R;const S=R.vnode.props;R.vnode=w,R.next=null,fp(R,w.props,S,F),mp(R,w.children,F),Wn(),pc(R),Xn()},V=(R,w,F,S,q,G,ue,j,le=!1)=>{const H=R&&R.children,fe=R?R.shapeFlag:0,v=w.children,{patchFlag:x,shapeFlag:U}=w;if(x>0){if(x&128){me(H,v,F,S,q,G,ue,j,le);return}else if(x&256){he(H,v,F,S,q,G,ue,j,le);return}}U&8?(fe&16&&ee(H,q,G),v!==H&&u(F,v)):fe&16?U&16?me(H,v,F,S,q,G,ue,j,le):ee(H,q,G,!0):(fe&8&&u(F,""),U&16&&W(v,F,S,q,G,ue,j,le))},he=(R,w,F,S,q,G,ue,j,le)=>{R=R||tr,w=w||tr;const H=R.length,fe=w.length,v=Math.min(H,fe);let x;for(x=0;x<v;x++){const U=w[x]=le?si(w[x]):vn(w[x]);_(R[x],U,F,null,q,G,ue,j,le)}H>fe?ee(R,q,G,!0,!1,v):W(w,F,S,q,G,ue,j,le,v)},me=(R,w,F,S,q,G,ue,j,le)=>{let H=0;const fe=w.length;let v=R.length-1,x=fe-1;for(;H<=v&&H<=x;){const U=R[H],k=w[H]=le?si(w[H]):vn(w[H]);if(Er(U,k))_(U,k,F,null,q,G,ue,j,le);else break;H++}for(;H<=v&&H<=x;){const U=R[v],k=w[x]=le?si(w[x]):vn(w[x]);if(Er(U,k))_(U,k,F,null,q,G,ue,j,le);else break;v--,x--}if(H>v){if(H<=x){const U=x+1,k=U<fe?w[U].el:S;for(;H<=x;)_(null,w[H]=le?si(w[H]):vn(w[H]),F,k,q,G,ue,j,le),H++}}else if(H>x)for(;H<=v;)Fe(R[H],q,G,!0),H++;else{const U=H,k=H,Q=new Map;for(H=k;H<=x;H++){const Pe=w[H]=le?si(w[H]):vn(w[H]);Pe.key!=null&&Q.set(Pe.key,H)}let z,ye=0;const pe=x-k+1;let Ce=!1,Ae=0;const ce=new Array(pe);for(H=0;H<pe;H++)ce[H]=0;for(H=U;H<=v;H++){const Pe=R[H];if(ye>=pe){Fe(Pe,q,G,!0);continue}let De;if(Pe.key!=null)De=Q.get(Pe.key);else for(z=k;z<=x;z++)if(ce[z-k]===0&&Er(Pe,w[z])){De=z;break}De===void 0?Fe(Pe,q,G,!0):(ce[De-k]=H+1,De>=Ae?Ae=De:Ce=!0,_(Pe,w[De],F,null,q,G,ue,j,le),ye++)}const xe=Ce?vp(ce):tr;for(z=xe.length-1,H=pe-1;H>=0;H--){const Pe=k+H,De=w[Pe],Ee=w[Pe+1],Oe=Pe+1<fe?Ee.el||Ee.placeholder:S;ce[H]===0?_(null,De,F,Oe,q,G,ue,j,le):Ce&&(z<0||H!==xe[z]?we(De,F,Oe,2):z--)}}},we=(R,w,F,S,q=null)=>{const{el:G,type:ue,transition:j,children:le,shapeFlag:H}=R;if(H&6){we(R.component.subTree,w,F,S);return}if(H&128){R.suspense.move(w,F,S);return}if(H&64){ue.move(R,w,F,oe);return}if(ue===Fn){i(G,w,F);for(let v=0;v<le.length;v++)we(le[v],w,F,S);i(R.anchor,w,F);return}if(ue===wa){E(R,w,F);return}if(S!==2&&H&1&&j)if(S===0)j.beforeEnter(G),i(G,w,F),$t(()=>j.enter(G),q);else{const{leave:v,delayLeave:x,afterLeave:U}=j,k=()=>{R.ctx.isUnmounted?r(G):i(G,w,F)},Q=()=>{G._isLeaving&&G[kh](!0),v(G,()=>{k(),U&&U()})};x?x(G,k,Q):Q()}else i(G,w,F)},Fe=(R,w,F,S=!1,q=!1)=>{const{type:G,props:ue,ref:j,children:le,dynamicChildren:H,shapeFlag:fe,patchFlag:v,dirs:x,cacheIndex:U}=R;if(v===-2&&(q=!1),j!=null&&(Wn(),zr(j,null,F,R,!0),Xn()),U!=null&&(w.renderCache[U]=void 0),fe&256){w.ctx.deactivate(R);return}const k=fe&1&&x,Q=!Vr(R);let z;if(Q&&(z=ue&&ue.onVnodeBeforeUnmount)&&gn(z,w,R),fe&6)je(R.component,F,S);else{if(fe&128){R.suspense.unmount(F,S);return}k&&gi(R,null,w,"beforeUnmount"),fe&64?R.type.remove(R,w,F,oe,S):H&&!H.hasOnce&&(G!==Fn||v>0&&v&64)?ee(H,w,F,!1,!0):(G===Fn&&v&384||!q&&fe&16)&&ee(le,w,F),S&&Ye(R)}(Q&&(z=ue&&ue.onVnodeUnmounted)||k)&&$t(()=>{z&&gn(z,w,R),k&&gi(R,null,w,"unmounted")},F)},Ye=R=>{const{type:w,el:F,anchor:S,transition:q}=R;if(w===Fn){$e(F,S);return}if(w===wa){A(R);return}const G=()=>{r(F),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(R.shapeFlag&1&&q&&!q.persisted){const{leave:ue,delayLeave:j}=q,le=()=>ue(F,G);j?j(R.el,G,le):le()}else G()},$e=(R,w)=>{let F;for(;R!==w;)F=d(R),r(R),R=F;r(w)},je=(R,w,F)=>{const{bum:S,scope:q,job:G,subTree:ue,um:j,m:le,a:H}=R;Mc(le),Mc(H),S&&ba(S),q.stop(),G&&(G.flags|=8,Fe(ue,R,w,F)),j&&$t(j,w),$t(()=>{R.isUnmounted=!0},w)},ee=(R,w,F,S=!1,q=!1,G=0)=>{for(let ue=G;ue<R.length;ue++)Fe(R[ue],w,F,S,q)},D=R=>{if(R.shapeFlag&6)return D(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const w=d(R.anchor||R.el),F=w&&w[Gh];return F?d(F):w};let J=!1;const re=(R,w,F)=>{R==null?w._vnode&&Fe(w._vnode,null,null,!0):_(w._vnode||null,R,w,null,null,null,F),w._vnode=R,J||(J=!0,pc(),Af(),J=!1)},oe={p:_,um:Fe,m:we,r:Ye,mt:se,mc:W,pc:V,pbc:b,n:D,o:n};return{render:re,hydrate:void 0,createApp:cp(re)}}function Ra({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function _i({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function _p(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Wf(n,e,t=!1){const i=n.children,r=e.children;if(ke(i)&&ke(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=si(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Wf(a,o)),o.type===da&&o.patchFlag!==-1&&(o.el=a.el),o.type===or&&!o.el&&(o.el=a.el)}}function vp(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Xf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Xf(e)}function Mc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Sp=Symbol.for("v-scx"),Mp=()=>Gn(Sp);function Os(n,e,t){return qf(n,e,t)}function qf(n,e,t=ct){const{immediate:i,deep:r,flush:s,once:a}=t,o=Dt({},t),l=e&&i||!e&&s!=="post";let c;if(Kr){if(s==="sync"){const h=Mp();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=En,h.resume=En,h.pause=En,h}}const u=Bt;o.call=(h,g,_)=>Tn(h,u,g,_);let f=!1;s==="post"?o.scheduler=h=>{$t(h,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(h,g)=>{g?h():Nl(h)}),o.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=Fh(n,e,o);return Kr&&(c?c.push(d):l&&d()),d}function bp(n,e,t){const i=this.proxy,r=Tt(n)?n.includes(".")?Yf(i,n):()=>i[n]:n.bind(i,i);let s;Xe(e)?s=e:(s=e.handler,t=e);const a=is(this),o=qf(r,s.bind(i),t);return a(),o}function Yf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Ep=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${hi(e)}Modifiers`]||n[`${Ni(e)}Modifiers`];function yp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ct;let r=t;const s=e.startsWith("update:"),a=s&&Ep(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>Tt(u)?u.trim():u)),a.number&&(r=t.map(ih)));let o,l=i[o=Ma(e)]||i[o=Ma(hi(e))];!l&&s&&(l=i[o=Ma(Ni(e))]),l&&Tn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Tn(c,n,6,r)}}const Tp=new WeakMap;function Kf(n,e,t=!1){const i=t?Tp:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Xe(n)){const l=c=>{const u=Kf(c,e,!0);u&&(o=!0,Dt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(xt(n)&&i.set(n,null),null):(ke(s)?s.forEach(l=>a[l]=null):Dt(a,s),xt(n)&&i.set(n,a),a)}function fa(n,e){return!n||!ra(e)?!1:(e=e.slice(2).replace(/Once$/,""),tt(n,e[0].toLowerCase()+e.slice(1))||tt(n,Ni(e))||tt(n,e))}function bc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:_}=n,m=Ks(n);let p,y;try{if(t.shapeFlag&4){const A=r||i,L=A;p=vn(c.call(L,A,u,f,h,d,g)),y=o}else{const A=e;p=vn(A.length>1?A(f,{attrs:o,slots:a,emit:l}):A(f,null)),y=e.props?o:Ap(o)}}catch(A){Hr.length=0,ca(A,n,1),p=fn(or)}let E=p;if(y&&_!==!1){const A=Object.keys(y),{shapeFlag:L}=E;A.length&&L&7&&(s&&A.some(Ml)&&(y=Rp(y,s)),E=lr(E,y,!1,!0))}return t.dirs&&(E=lr(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&Fl(E,t.transition),p=E,Ks(m),p}const Ap=n=>{let e;for(const t in n)(t==="class"||t==="style"||ra(t))&&((e||(e={}))[t]=n[t]);return e},Rp=(n,e)=>{const t={};for(const i in n)(!Ml(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function wp(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ec(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!fa(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Ec(i,a,c):!0:!!a;return!1}function Ec(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!fa(t,s))return!0}return!1}function Cp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const jf=n=>n.__isSuspense;function Pp(n,e){e&&e.pendingBranch?ke(n)?e.effects.push(...n):e.effects.push(n):zh(n)}const Fn=Symbol.for("v-fgt"),da=Symbol.for("v-txt"),or=Symbol.for("v-cmt"),wa=Symbol.for("v-stc"),Hr=[];let Zt=null;function Dp(n=!1){Hr.push(Zt=n?null:[])}function Lp(){Hr.pop(),Zt=Hr[Hr.length-1]||null}let Yr=1;function Zs(n,e=!1){Yr+=n,n<0&&Zt&&e&&(Zt.hasOnce=!0)}function Ip(n){return n.dynamicChildren=Yr>0?Zt||tr:null,Lp(),Yr>0&&Zt&&Zt.push(n),n}function Up(n,e,t,i,r,s){return Ip(Gl(n,e,t,i,r,s,!0))}function Js(n){return n?n.__v_isVNode===!0:!1}function Er(n,e){return n.type===e.type&&n.key===e.key}const $f=({key:n})=>n??null,Bs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Tt(n)||Ct(n)||Xe(n)?{i:Mn,r:n,k:e,f:!!t}:n:null);function Gl(n,e=null,t=null,i=0,r=null,s=n===Fn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&$f(e),ref:e&&Bs(e),scopeId:wf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Mn};return o?(Hl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Tt(t)?8:16),Yr>0&&!a&&Zt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Zt.push(l),l}const fn=Np;function Np(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===tp)&&(n=or),Js(n)){const o=lr(n,e,!0);return t&&Hl(o,t),Yr>0&&!s&&Zt&&(o.shapeFlag&6?Zt[Zt.indexOf(n)]=o:Zt.push(o)),o.patchFlag=-2,o}if(Yp(n)&&(n=n.__vccOpts),e){e=Fp(e);let{class:o,style:l}=e;o&&!Tt(o)&&(e.class=Tl(o)),xt(l)&&(Il(l)&&!ke(l)&&(l=Dt({},l)),e.style=yl(l))}const a=Tt(n)?1:jf(n)?128:Hh(n)?64:xt(n)?4:Xe(n)?2:0;return Gl(n,e,t,i,r,a,s,!0)}function Fp(n){return n?Il(n)||Bf(n)?Dt({},n):n:null}function lr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?Bp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&$f(c),ref:e&&e.ref?t&&s?ke(s)?s.concat(Bs(e)):[s,Bs(e)]:Bs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Fn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&lr(n.ssContent),ssFallback:n.ssFallback&&lr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Fl(u,l.clone(u)),u}function Op(n=" ",e=0){return fn(da,null,n,e)}function vn(n){return n==null||typeof n=="boolean"?fn(or):ke(n)?fn(Fn,null,n.slice()):Js(n)?si(n):fn(da,null,String(n))}function si(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:lr(n)}function Hl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ke(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Hl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Bf(e)?e._ctx=Mn:r===3&&Mn&&(Mn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:Mn},t=32):(e=String(e),i&64?(t=16,e=[Op(e)]):t=8);n.children=e,n.shapeFlag|=t}function Bp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Tl([e.class,i.class]));else if(r==="style")e.style=yl([e.style,i.style]);else if(ra(r)){const s=e[r],a=i[r];a&&s!==a&&!(ke(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function gn(n,e,t,i=null){Tn(n,e,7,[t,i])}const zp=Nf();let Vp=0;function Gp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||zp,s={uid:Vp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new rf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vf(i,r),emitsOptions:Kf(i,r),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=yp.bind(null,s),n.ce&&n.ce(s),s}let Bt=null;const Hp=()=>Bt||Mn;let Qs,To;{const n=oa(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Qs=e("__VUE_INSTANCE_SETTERS__",t=>Bt=t),To=e("__VUE_SSR_SETTERS__",t=>Kr=t)}const is=n=>{const e=Bt;return Qs(n),n.scope.on(),()=>{n.scope.off(),Qs(e)}},yc=()=>{Bt&&Bt.scope.off(),Qs(null)};function Zf(n){return n.vnode.shapeFlag&4}let Kr=!1;function kp(n,e=!1,t=!1){e&&To(e);const{props:i,children:r}=n.vnode,s=Zf(n);up(n,i,s,e),pp(n,r,t||e);const a=s?Wp(n,e):void 0;return e&&To(!1),a}function Wp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,np);const{setup:i}=t;if(i){Wn();const r=n.setupContext=i.length>1?qp(n):null,s=is(n),a=ns(i,n,0,[n.props,r]),o=Qu(a);if(Xn(),s(),(o||n.sp)&&!Vr(n)&&Cf(n),o){if(a.then(yc,yc),e)return a.then(l=>{Tc(n,l)}).catch(l=>{ca(l,n,0)});n.asyncDep=a}else Tc(n,a)}else Jf(n)}function Tc(n,e,t){Xe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:xt(e)&&(n.setupState=bf(e)),Jf(n)}function Jf(n,e,t){const i=n.type;n.render||(n.render=i.render||En);{const r=is(n);Wn();try{ip(n)}finally{Xn(),r()}}}const Xp={get(n,e){return wt(n,"get",""),n[e]}};function qp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Xp),slots:n.slots,emit:n.emit,expose:e}}function kl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(bf(Sf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Gr)return Gr[t](n)},has(e,t){return t in e||t in Gr}})):n.proxy}function Yp(n){return Xe(n)&&"__vccOpts"in n}const cn=(n,e)=>Uh(n,e,Kr);function Qf(n,e,t){try{Zs(-1);const i=arguments.length;return i===2?xt(e)&&!ke(e)?Js(e)?fn(n,null,[e]):fn(n,e):fn(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Js(t)&&(t=[t]),fn(n,e,t))}finally{Zs(1)}}const Kp="3.5.24";let Ao;const Ac=typeof window<"u"&&window.trustedTypes;if(Ac)try{Ao=Ac.createPolicy("vue",{createHTML:n=>n})}catch{}const ed=Ao?n=>Ao.createHTML(n):n=>n,jp="http://www.w3.org/2000/svg",$p="http://www.w3.org/1998/Math/MathML",Nn=typeof document<"u"?document:null,Rc=Nn&&Nn.createElement("template"),Zp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Nn.createElementNS(jp,n):e==="mathml"?Nn.createElementNS($p,n):t?Nn.createElement(n,{is:t}):Nn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Nn.createTextNode(n),createComment:n=>Nn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Nn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Rc.innerHTML=ed(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Rc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Jp=Symbol("_vtc");function Qp(n,e,t){const i=n[Jp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const wc=Symbol("_vod"),em=Symbol("_vsh"),tm=Symbol(""),nm=/(?:^|;)\s*display\s*:/;function im(n,e,t){const i=n.style,r=Tt(t);let s=!1;if(t&&!r){if(e)if(Tt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&zs(i,o,"")}else for(const a in e)t[a]==null&&zs(i,a,"");for(const a in t)a==="display"&&(s=!0),zs(i,a,t[a])}else if(r){if(e!==t){const a=i[tm];a&&(t+=";"+a),i.cssText=t,s=nm.test(t)}}else e&&n.removeAttribute("style");wc in n&&(n[wc]=s?i.display:"",n[em]&&(i.display="none"))}const Cc=/\s*!important$/;function zs(n,e,t){if(ke(t))t.forEach(i=>zs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=rm(n,e);Cc.test(t)?n.setProperty(Ni(i),t.replace(Cc,""),"important"):n[i]=t}}const Pc=["Webkit","Moz","ms"],Ca={};function rm(n,e){const t=Ca[e];if(t)return t;let i=hi(e);if(i!=="filter"&&i in n)return Ca[e]=i;i=ef(i);for(let r=0;r<Pc.length;r++){const s=Pc[r]+i;if(s in n)return Ca[e]=s}return e}const Dc="http://www.w3.org/1999/xlink";function Lc(n,e,t,i,r,s=ch(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Dc,e.slice(6,e.length)):n.setAttributeNS(Dc,e,t):t==null||s&&!nf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":xr(t)?String(t):t)}function Ic(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ed(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=nf(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function sm(n,e,t,i){n.addEventListener(e,t,i)}function am(n,e,t,i){n.removeEventListener(e,t,i)}const Uc=Symbol("_vei");function om(n,e,t,i,r=null){const s=n[Uc]||(n[Uc]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=lm(e);if(i){const c=s[e]=fm(i,r);sm(n,o,c,l)}else a&&(am(n,o,a,l),s[e]=void 0)}}const Nc=/(?:Once|Passive|Capture)$/;function lm(n){let e;if(Nc.test(n)){e={};let i;for(;i=n.match(Nc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ni(n.slice(2)),e]}let Pa=0;const cm=Promise.resolve(),um=()=>Pa||(cm.then(()=>Pa=0),Pa=Date.now());function fm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Tn(dm(i,t.value),e,5,[i])};return t.value=n,t.attached=um(),t}function dm(n,e){if(ke(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Fc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,hm=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?Qp(n,i,a):e==="style"?im(n,t,i):ra(e)?Ml(e)||om(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pm(n,e,i,a))?(Ic(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Lc(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Tt(i))?Ic(n,hi(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Lc(n,e,i,a))};function pm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Fc(e)&&Xe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Fc(e)&&Tt(t)?!1:e in n}const mm=Dt({patchProp:hm},Zp);let Oc;function xm(){return Oc||(Oc=xp(mm))}const gm=((...n)=>{const e=xm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=vm(i);if(!r)return;const s=e._component;!Xe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,_m(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function _m(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function vm(n){return Tt(n)?document.querySelector(n):n}const Sm=Symbol();var Bc;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Bc||(Bc={}));function Mm(){const n=uh(!0),e=n.run(()=>Ul({}));let t=[],i=[];const r=Sf({install(s){r._a=s,s.provide(Sm,r),s.config.globalProperties.$pinia=r,i.forEach(a=>t.push(a)),i=[]},use(s){return this._a?t.push(s):i.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const Wl="181",bm=0,zc=1,Em=2,td=1,ym=2,Un=3,pi=0,Wt=1,Bn=2,Hn=0,sr=1,Vc=2,Gc=3,Hc=4,Tm=5,Ri=100,Am=101,Rm=102,wm=103,Cm=104,Pm=200,Dm=201,Lm=202,Im=203,Ro=204,wo=205,Um=206,Nm=207,Fm=208,Om=209,Bm=210,zm=211,Vm=212,Gm=213,Hm=214,Co=0,Po=1,Do=2,cr=3,Lo=4,Io=5,Uo=6,No=7,nd=0,km=1,Wm=2,fi=0,Xm=1,qm=2,Ym=3,Km=4,jm=5,$m=6,Zm=7,id=300,ur=301,fr=302,Fo=303,Oo=304,ha=306,Bo=1e3,zn=1001,zo=1002,zt=1003,Jm=1004,hs=1005,nn=1006,Da=1007,Ci=1008,qn=1009,rd=1010,sd=1011,jr=1012,Xl=1013,Ii=1014,Vn=1015,gr=1016,ql=1017,Yl=1018,$r=1020,ad=35902,od=35899,ld=1021,cd=1022,dn=1023,Zr=1026,Jr=1027,ud=1028,Kl=1029,jl=1030,$l=1031,Zl=1033,Vs=33776,Gs=33777,Hs=33778,ks=33779,Vo=35840,Go=35841,Ho=35842,ko=35843,Wo=36196,Xo=37492,qo=37496,Yo=37808,Ko=37809,jo=37810,$o=37811,Zo=37812,Jo=37813,Qo=37814,el=37815,tl=37816,nl=37817,il=37818,rl=37819,sl=37820,al=37821,ol=36492,ll=36494,cl=36495,ul=36283,fl=36284,dl=36285,hl=36286,Qm=3200,e0=3201,t0=0,n0=1,li="",en="srgb",dr="srgb-linear",ea="linear",st="srgb",Bi=7680,kc=519,i0=512,r0=513,s0=514,fd=515,a0=516,o0=517,l0=518,c0=519,Wc=35044,Xc="300 es",bn=2e3,ta=2001;function dd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function u0(){const n=Qr("canvas");return n.style.display="block",n}const qc={};function Yc(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ge(...n){const e="THREE."+n.shift();console.warn(e,...n)}function gt(...n){const e="THREE."+n.shift();console.error(e,...n)}function es(...n){const e=n.join(" ");e in qc||(qc[e]=!0,Ge(...n))}function f0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class _r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],La=Math.PI/180,pl=180/Math.PI;function rs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function d0(n,e){return(n%e+e)%e}function Ia(n,e,t){return(1-t)*n+t*e}function yr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ss{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let m=l*d+c*h+u*g+f*_;m<0&&(d=-d,h=-h,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),E=Math.sin(y);p=Math.sin(p*y)/E,o=Math.sin(o*y)/E,l=l*p+d*o,c=c*p+h*o,u=u*p+g*o,f=f*p+_*o}else{l=l*p+d*o,c=c*p+h*o,u=u*p+g*o,f=f*p+_*o;const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*h-c*d,e[t+1]=l*g+u*d+c*f-o*h,e[t+2]=c*g+u*h+o*d-l*f,e[t+3]=u*g-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ua.copy(this).projectOnVector(e),this.sub(Ua)}reflect(e){return this.sub(Ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ua=new Y,Kc=new ss;class He{constructor(e,t,i,r,s,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],y=r[1],E=r[4],A=r[7],L=r[2],C=r[5],P=r[8];return s[0]=a*_+o*y+l*L,s[3]=a*m+o*E+l*C,s[6]=a*p+o*A+l*P,s[1]=c*_+u*y+f*L,s[4]=c*m+u*E+f*C,s[7]=c*p+u*A+f*P,s[2]=d*_+h*y+g*L,s[5]=d*m+h*E+g*C,s[8]=d*p+h*A+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,h=c*s-a*l,g=t*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=h*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Na.makeScale(e,t)),this}rotate(e){return this.premultiply(Na.makeRotation(-e)),this}translate(e,t){return this.premultiply(Na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Na=new He,jc=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$c=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function h0(){const n={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=kn(r.r),r.g=kn(r.g),r.b=kn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=ar(r.r),r.g=ar(r.g),r.b=ar(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===li?ea:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[dr]:{primaries:e,whitePoint:i,transfer:ea,toXYZ:jc,fromXYZ:$c,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:i,transfer:st,toXYZ:jc,fromXYZ:$c,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),n}const Je=h0();function kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let zi;class p0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{zi===void 0&&(zi=Qr("canvas")),zi.width=e.width,zi.height=e.height;const r=zi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=zi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=kn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(kn(t[i]/255)*255):t[i]=kn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let m0=0;class Jl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Fa(r[a].image)):s.push(Fa(r[a]))}else s=Fa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Fa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?p0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let x0=0;const Oa=new Y;class Pt extends _r{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,i=zn,r=zn,s=nn,a=Ci,o=dn,l=qn,c=Pt.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=rs(),this.name="",this.source=new Jl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Oa).x}get height(){return this.source.getSize(Oa).y}get depth(){return this.source.getSize(Oa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bo:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bo:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=id;Pt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,A=(h+1)/2,L=(p+1)/2,C=(u+d)/4,P=(f+_)/4,W=(g+m)/4;return E>A&&E>L?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=C/i,s=P/i):A>L?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=C/r,s=W/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=P/s,r=W/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class g0 extends _r{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Pt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Jl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends g0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hd extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _0 extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class as{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,an):an.fromBufferAttribute(s,a),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ps.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ps.copy(i.boundingBox)),ps.applyMatrix4(e.matrixWorld),this.union(ps)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),ms.subVectors(this.max,Tr),Vi.subVectors(e.a,Tr),Gi.subVectors(e.b,Tr),Hi.subVectors(e.c,Tr),Zn.subVectors(Gi,Vi),Jn.subVectors(Hi,Gi),vi.subVectors(Vi,Hi);let t=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-vi.z,vi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,vi.z,0,-vi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-vi.y,vi.x,0];return!Ba(t,Vi,Gi,Hi,ms)||(t=[1,0,0,0,1,0,0,0,1],!Ba(t,Vi,Gi,Hi,ms))?!1:(xs.crossVectors(Zn,Jn),t=[xs.x,xs.y,xs.z],Ba(t,Vi,Gi,Hi,ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Rn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],an=new Y,ps=new as,Vi=new Y,Gi=new Y,Hi=new Y,Zn=new Y,Jn=new Y,vi=new Y,Tr=new Y,ms=new Y,xs=new Y,Si=new Y;function Ba(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Si.fromArray(n,s);const o=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),l=e.dot(Si),c=t.dot(Si),u=i.dot(Si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const v0=new as,Ar=new Y,za=new Y;class pa{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):v0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ar,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(za)),this.expandByPoint(Ar.copy(e.center).sub(za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wn=new Y,Va=new Y,gs=new Y,Qn=new Y,Ga=new Y,_s=new Y,Ha=new Y;class pd{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Va.copy(e).add(t).multiplyScalar(.5),gs.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(Va);const s=e.distanceTo(t)*.5,a=-this.direction.dot(gs),o=Qn.dot(this.direction),l=-Qn.dot(gs),c=Qn.lengthSq(),u=Math.abs(1-a*a);let f,d,h,g;if(u>0)if(f=a*l-o,d=a*o-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Va).addScaledVector(gs,d),h}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const i=wn.dot(this.direction),r=wn.dot(wn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,i,r,s){Ga.subVectors(t,e),_s.subVectors(i,e),Ha.crossVectors(Ga,_s);let a=this.direction.dot(Ha),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,e);const l=o*this.direction.dot(_s.crossVectors(Qn,_s));if(l<0)return null;const c=o*this.direction.dot(Ga.cross(Qn));if(c<0||l+c>a)return null;const u=-o*Qn.dot(Ha);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,t,i,r,s,a,o,l,c,u,f,d,h,g,_,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,d,h,g,_,m)}set(e,t,i,r,s,a,o,l,c,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ki.setFromMatrixColumn(e,0).length(),s=1/ki.setFromMatrixColumn(e,1).length(),a=1/ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+h*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d+_*o,t[4]=g*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d-_*o,t[4]=-a*f,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-h,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=h*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,h=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=a*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(S0,e,M0)}lookAt(e,t,i){const r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),ei.crossVectors(i,Kt),ei.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),ei.crossVectors(i,Kt)),ei.normalize(),vs.crossVectors(Kt,ei),r[0]=ei.x,r[4]=vs.x,r[8]=Kt.x,r[1]=ei.y,r[5]=vs.y,r[9]=Kt.y,r[2]=ei.z,r[6]=vs.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],E=i[7],A=i[11],L=i[15],C=r[0],P=r[4],W=r[8],T=r[12],b=r[1],N=r[5],X=r[9],Z=r[13],se=r[2],ie=r[6],te=r[10],ne=r[14],V=r[3],he=r[7],me=r[11],we=r[15];return s[0]=a*C+o*b+l*se+c*V,s[4]=a*P+o*N+l*ie+c*he,s[8]=a*W+o*X+l*te+c*me,s[12]=a*T+o*Z+l*ne+c*we,s[1]=u*C+f*b+d*se+h*V,s[5]=u*P+f*N+d*ie+h*he,s[9]=u*W+f*X+d*te+h*me,s[13]=u*T+f*Z+d*ne+h*we,s[2]=g*C+_*b+m*se+p*V,s[6]=g*P+_*N+m*ie+p*he,s[10]=g*W+_*X+m*te+p*me,s[14]=g*T+_*Z+m*ne+p*we,s[3]=y*C+E*b+A*se+L*V,s[7]=y*P+E*N+A*ie+L*he,s[11]=y*W+E*X+A*te+L*me,s[15]=y*T+E*Z+A*ne+L*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*h-i*l*h)+_*(+t*l*h-t*c*d+s*a*d-r*a*h+r*c*u-s*l*u)+m*(+t*c*f-t*o*h-s*a*f+i*a*h+s*o*u-i*c*u)+p*(-r*o*u-t*l*f+t*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=f*m*c-_*d*c+_*l*h-o*m*h-f*l*p+o*d*p,E=g*d*c-u*m*c-g*l*h+a*m*h+u*l*p-a*d*p,A=u*_*c-g*f*c+g*o*h-a*_*h-u*o*p+a*f*p,L=g*f*l-u*_*l-g*o*d+a*_*d+u*o*m-a*f*m,C=t*y+i*E+r*A+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=y*P,e[1]=(_*d*s-f*m*s-_*r*h+i*m*h+f*r*p-i*d*p)*P,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*p+i*l*p)*P,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*h-i*l*h)*P,e[4]=E*P,e[5]=(u*m*s-g*d*s+g*r*h-t*m*h-u*r*p+t*d*p)*P,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*P,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*h+t*l*h)*P,e[8]=A*P,e[9]=(g*f*s-u*_*s-g*i*h+t*_*h+u*i*p-t*f*p)*P,e[10]=(a*_*s-g*o*s+g*i*c-t*_*c-a*i*p+t*o*p)*P,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*h-t*o*h)*P,e[12]=L*P,e[13]=(u*_*r-g*f*r+g*i*d-t*_*d-u*i*m+t*f*m)*P,e[14]=(g*o*r-a*_*r-g*i*l+t*_*l+a*i*m-t*o*m)*P,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*d+t*o*d)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,h=s*u,g=s*f,_=a*u,m=a*f,p=o*f,y=l*c,E=l*u,A=l*f,L=i.x,C=i.y,P=i.z;return r[0]=(1-(_+p))*L,r[1]=(h+A)*L,r[2]=(g-E)*L,r[3]=0,r[4]=(h-A)*C,r[5]=(1-(d+p))*C,r[6]=(m+y)*C,r[7]=0,r[8]=(g+E)*P,r[9]=(m-y)*P,r[10]=(1-(d+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ki.set(r[0],r[1],r[2]).length();const a=ki.set(r[4],r[5],r[6]).length(),o=ki.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],on.copy(this);const c=1/s,u=1/a,f=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,t.setFromRotationMatrix(on),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=bn,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===bn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ta)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=bn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),h=-(i+r)/(i-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===bn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===ta)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ki=new Y,on=new St,S0=new Y(0,0,0),M0=new Y(1,1,1),ei=new Y,vs=new Y,Kt=new Y,Zc=new St,Jc=new ss;class Yn{constructor(e=0,t=0,i=0,r=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class md{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let b0=0;const Qc=new Y,Wi=new ss,Cn=new St,Ss=new Y,Rr=new Y,E0=new Y,y0=new ss,eu=new Y(1,0,0),tu=new Y(0,1,0),nu=new Y(0,0,1),iu={type:"added"},T0={type:"removed"},Xi={type:"childadded",child:null},ka={type:"childremoved",child:null};class Xt extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new Y,t=new Yn,i=new ss,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new He}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new md,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(eu,e)}rotateY(e){return this.rotateOnAxis(tu,e)}rotateZ(e){return this.rotateOnAxis(nu,e)}translateOnAxis(e,t){return Qc.copy(e).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eu,e)}translateY(e){return this.translateOnAxis(tu,e)}translateZ(e){return this.translateOnAxis(nu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ss.copy(e):Ss.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Rr,Ss,this.up):Cn.lookAt(Ss,Rr,this.up),this.quaternion.setFromRotationMatrix(Cn),r&&(Cn.extractRotation(r.matrixWorld),Wi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(iu),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(T0),ka.child=e,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(iu),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,E0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,y0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new Y(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new Y,Pn=new Y,Wa=new Y,Dn=new Y,qi=new Y,Yi=new Y,ru=new Y,Xa=new Y,qa=new Y,Ya=new Y,Ka=new _t,ja=new _t,$a=new _t;class un{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ln.subVectors(e,t),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ln.subVectors(r,t),Pn.subVectors(i,t),Wa.subVectors(e,t);const a=ln.dot(ln),o=ln.dot(Pn),l=ln.dot(Wa),c=Pn.dot(Pn),u=Pn.dot(Wa),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ka.setScalar(0),ja.setScalar(0),$a.setScalar(0),Ka.fromBufferAttribute(e,t),ja.fromBufferAttribute(e,i),$a.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ka,s.x),a.addScaledVector(ja,s.y),a.addScaledVector($a,s.z),a}static isFrontFacing(e,t,i,r){return ln.subVectors(i,t),Pn.subVectors(e,t),ln.cross(Pn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),ln.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return un.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;qi.subVectors(r,i),Yi.subVectors(s,i),Xa.subVectors(e,i);const l=qi.dot(Xa),c=Yi.dot(Xa);if(l<=0&&c<=0)return t.copy(i);qa.subVectors(e,r);const u=qi.dot(qa),f=Yi.dot(qa);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(qi,a);Ya.subVectors(e,s);const h=qi.dot(Ya),g=Yi.dot(Ya);if(g>=0&&h<=g)return t.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Yi,o);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return ru.subVectors(s,r),o=(f-u)/(f-u+(h-g)),t.copy(r).addScaledVector(ru,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(i).addScaledVector(qi,a).addScaledVector(Yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function Za(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=d0(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Za(a,s,e+1/3),this.g=Za(a,s,e),this.b=Za(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=en){function i(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const i=xd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return Je.workingToColorSpace(Rt.copy(this),e),Math.round(Ke(Rt.r*255,0,255))*65536+Math.round(Ke(Rt.g*255,0,255))*256+Math.round(Ke(Rt.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Rt.copy(this),t);const i=Rt.r,r=Rt.g,s=Rt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=en){Je.workingToColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,r=Rt.b;return e!==en?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(Ms);const i=Ia(ti.h,Ms.h,t),r=Ia(ti.s,Ms.s,t),s=Ia(ti.l,Ms.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new nt;nt.NAMES=xd;let A0=0;class os extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=sr,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ro,this.blendDst=wo,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(i.blending=this.blending),this.side!==pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ro&&(i.blendSrc=this.blendSrc),this.blendDst!==wo&&(i.blendDst=this.blendDst),this.blendEquation!==Ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ql extends os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new Y,bs=new at;let R0=0;class yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:R0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wc,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bs.fromBufferAttribute(this,t),bs.applyMatrix3(e),this.setXY(t,bs.x,bs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wc&&(e.usage=this.usage),e}}class gd extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _d extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class di extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let w0=0;const Qt=new St,Ja=new Xt,Ki=new Y,jt=new as,wr=new as,yt=new Y;class rn extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dd(e)?_d:gd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return Ja.lookAt(e),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new di(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];wr.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(jt.min,wr.min),jt.expandByPoint(yt),yt.addVectors(jt.max,wr.max),jt.expandByPoint(yt)):(jt.expandByPoint(wr.min),jt.expandByPoint(wr.max))}jt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)yt.fromBufferAttribute(o,c),l&&(Ki.fromBufferAttribute(e,c),yt.add(Ki)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let W=0;W<i.count;W++)o[W]=new Y,l[W]=new Y;const c=new Y,u=new Y,f=new Y,d=new at,h=new at,g=new at,_=new Y,m=new Y;function p(W,T,b){c.fromBufferAttribute(i,W),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,b),d.fromBufferAttribute(s,W),h.fromBufferAttribute(s,T),g.fromBufferAttribute(s,b),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const N=1/(h.x*g.y-g.x*h.y);isFinite(N)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(N),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(N),o[W].add(_),o[T].add(_),o[b].add(_),l[W].add(m),l[T].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let W=0,T=y.length;W<T;++W){const b=y[W],N=b.start,X=b.count;for(let Z=N,se=N+X;Z<se;Z+=3)p(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const E=new Y,A=new Y,L=new Y,C=new Y;function P(W){L.fromBufferAttribute(r,W),C.copy(L);const T=o[W];E.copy(T),E.sub(L.multiplyScalar(L.dot(T))).normalize(),A.crossVectors(C,T);const N=A.dot(l[W])<0?-1:1;a.setXYZW(W,E.x,E.y,E.z,N)}for(let W=0,T=y.length;W<T;++W){const b=y[W],N=b.start,X=b.count;for(let Z=N,se=N+X;Z<se;Z+=3)P(e.getX(Z+0)),P(e.getX(Z+1)),P(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new Y,s=new Y,a=new Y,o=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new yn(d,u,f)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const su=new St,Mi=new pd,Es=new pa,au=new Y,ys=new Y,Ts=new Y,As=new Y,Qa=new Y,Rs=new Y,ou=new Y,ws=new Y;class Kn extends Xt{constructor(e=new rn,t=new Ql){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Rs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Qa.fromBufferAttribute(f,e),a?Rs.addScaledVector(Qa,u):Rs.addScaledVector(Qa.sub(t),u))}t.add(Rs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere),Es.applyMatrix4(s),Mi.copy(e.ray).recast(e.near),!(Es.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Es,au)===null||Mi.origin.distanceToSquared(au)>(e.far-e.near)**2))&&(su.copy(s).invert(),Mi.copy(e.ray).applyMatrix4(su),!(i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,h.start),E=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let A=y,L=E;A<L;A+=3){const C=o.getX(A),P=o.getX(A+1),W=o.getX(A+2);r=Cs(this,p,e,i,c,u,f,C,P,W),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),E=o.getX(m+1),A=o.getX(m+2);r=Cs(this,a,e,i,c,u,f,y,E,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,h.start),E=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let A=y,L=E;A<L;A+=3){const C=A,P=A+1,W=A+2;r=Cs(this,p,e,i,c,u,f,C,P,W),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const y=m,E=m+1,A=m+2;r=Cs(this,a,e,i,c,u,f,y,E,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function C0(n,e,t,i,r,s,a,o){let l;if(e.side===Wt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===pi,o),l===null)return null;ws.copy(o),ws.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ws);return c<t.near||c>t.far?null:{distance:c,point:ws.clone(),object:n}}function Cs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ys),n.getVertexPosition(l,Ts),n.getVertexPosition(c,As);const u=C0(n,e,t,i,ys,Ts,As,ou);if(u){const f=new Y;un.getBarycoord(ou,ys,Ts,As,f),r&&(u.uv=un.getInterpolatedAttribute(r,o,l,c,f,new at)),s&&(u.uv1=un.getInterpolatedAttribute(s,o,l,c,f,new at)),a&&(u.normal=un.getInterpolatedAttribute(a,o,l,c,f,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new Y,materialIndex:0};un.getNormal(ys,Ts,As,d.normal),u.face=d,u.barycoord=f}return u}class vr extends rn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new di(c,3)),this.setAttribute("normal",new di(u,3)),this.setAttribute("uv",new di(f,2));function g(_,m,p,y,E,A,L,C,P,W,T){const b=A/P,N=L/W,X=A/2,Z=L/2,se=C/2,ie=P+1,te=W+1;let ne=0,V=0;const he=new Y;for(let me=0;me<te;me++){const we=me*N-Z;for(let Fe=0;Fe<ie;Fe++){const Ye=Fe*b-X;he[_]=Ye*y,he[m]=we*E,he[p]=se,c.push(he.x,he.y,he.z),he[_]=0,he[m]=0,he[p]=C>0?1:-1,u.push(he.x,he.y,he.z),f.push(Fe/P),f.push(1-me/W),ne+=1}}for(let me=0;me<W;me++)for(let we=0;we<P;we++){const Fe=d+we+ie*me,Ye=d+we+ie*(me+1),$e=d+(we+1)+ie*(me+1),je=d+(we+1)+ie*me;l.push(Fe,Ye,je),l.push(Ye,$e,je),V+=6}o.addGroup(h,V,T),h+=V,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=hr(n[t]);for(const r in i)e[r]=i[r]}return e}function P0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const D0={clone:hr,merge:Ut};var L0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L0,this.fragmentShader=I0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=P0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Sd extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new Y,lu=new at,cu=new at;class tn extends Sd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pl*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,lu,cu),t.subVectors(cu,lu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(La*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,$i=1;class U0 extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(ji,$i,e,t);r.layers=this.layers,this.add(r);const s=new tn(ji,$i,e,t);s.layers=this.layers,this.add(s);const a=new tn(ji,$i,e,t);a.layers=this.layers,this.add(a);const o=new tn(ji,$i,e,t);o.layers=this.layers,this.add(o);const l=new tn(ji,$i,e,t);l.layers=this.layers,this.add(l);const c=new tn(ji,$i,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Md extends Pt{constructor(e=[],t=ur,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class N0 extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Md(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new vr(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:Hn});s.uniforms.tEquirect.value=t;const a=new Kn(r,s),o=t.minFilter;return t.minFilter===Ci&&(t.minFilter=nn),new U0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Ps extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F0={type:"move"};class eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(F0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ps;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class O0 extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class B0 extends Pt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=zt,u=zt,f,d){super(null,a,o,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const to=new Y,z0=new Y,V0=new He;class Ai{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=to.subVectors(i,t).cross(z0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(to),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||V0.getNormalMatrix(e),r=this.coplanarPoint(to).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new pa,G0=new at(.5,.5),Ds=new Y;class bd{constructor(e=new Ai,t=new Ai,i=new Ai,r=new Ai,s=new Ai,a=new Ai){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],g=s[8],_=s[9],m=s[10],p=s[11],y=s[12],E=s[13],A=s[14],L=s[15];if(r[0].setComponents(c-a,h-u,p-g,L-y).normalize(),r[1].setComponents(c+a,h+u,p+g,L+y).normalize(),r[2].setComponents(c+o,h+f,p+_,L+E).normalize(),r[3].setComponents(c-o,h-f,p-_,L-E).normalize(),i)r[4].setComponents(l,d,m,A).normalize(),r[5].setComponents(c-l,h-d,p-m,L-A).normalize();else if(r[4].setComponents(c-l,h-d,p-m,L-A).normalize(),t===bn)r[5].setComponents(c+l,h+d,p+m,L+A).normalize();else if(t===ta)r[5].setComponents(l,d,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){bi.center.set(0,0,0);const t=G0.distanceTo(e.center);return bi.radius=.7071067811865476+t,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ds.x=r.normal.x>0?e.max.x:e.min.x,Ds.y=r.normal.y>0?e.max.y:e.min.y,Ds.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ws extends os{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const na=new Y,ia=new Y,uu=new St,Cr=new pd,Ls=new pa,no=new Y,fu=new Y;class io extends Xt{constructor(e=new rn,t=new Ws){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)na.fromBufferAttribute(t,r-1),ia.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=na.distanceTo(ia);e.setAttribute("lineDistance",new di(i,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(r),Ls.radius+=s,e.ray.intersectsSphere(Ls)===!1)return;uu.copy(r).invert(),Cr.copy(e.ray).applyMatrix4(uu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=c){const p=u.getX(_),y=u.getX(_+1),E=Is(this,e,Cr,l,p,y,_);E&&t.push(E)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(h),p=Is(this,e,Cr,l,_,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=c){const p=Is(this,e,Cr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Is(this,e,Cr,l,g-1,h,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Is(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(na.fromBufferAttribute(o,r),ia.fromBufferAttribute(o,s),t.distanceSqToSegment(na,ia,no,fu)>i)return;no.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(no);if(!(c<e.near||c>e.far))return{distance:c,point:fu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class Ed extends Pt{constructor(e,t,i=Ii,r,s,a,o=zt,l=zt,c,u=Zr,f=1){if(u!==Zr&&u!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yd extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ma extends rn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*d-a;for(let E=0;E<c;E++){const A=E*f-s;g.push(A,-y,0),_.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const E=y+c*p,A=y+c*(p+1),L=y+1+c*(p+1),C=y+1+c*p;h.push(E,A,C),h.push(A,L,C)}this.setIndex(h),this.setAttribute("position",new di(g,3)),this.setAttribute("normal",new di(_,3)),this.setAttribute("uv",new di(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.width,e.height,e.widthSegments,e.heightSegments)}}class H0 extends os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class k0 extends os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ro={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class W0{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const X0=new W0;class ec{constructor(e){this.manager=e!==void 0?e:X0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ec.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zi=new WeakMap;class q0 extends ec{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ro.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=Zi.get(a);f===void 0&&(f=[],Zi.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=Qr("img");function l(){u(),t&&t(this);const f=Zi.get(this)||[];for(let d=0;d<f.length;d++){const h=f[d];h.onLoad&&h.onLoad(this)}Zi.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),ro.remove(`image:${e}`);const d=Zi.get(this)||[];for(let h=0;h<d.length;h++){const g=d[h];g.onError&&g.onError(f)}Zi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ro.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Y0 extends ec{constructor(e){super(e)}load(e,t,i,r){const s=new Pt,a=new q0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class K0 extends Sd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class j0 extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function du(n,e,t,i){const r=$0(i);switch(t){case ld:return n*e;case ud:return n*e/r.components*r.byteLength;case Kl:return n*e/r.components*r.byteLength;case jl:return n*e*2/r.components*r.byteLength;case $l:return n*e*2/r.components*r.byteLength;case cd:return n*e*3/r.components*r.byteLength;case dn:return n*e*4/r.components*r.byteLength;case Zl:return n*e*4/r.components*r.byteLength;case Vs:case Gs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hs:case ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Go:case ko:return Math.max(n,16)*Math.max(e,8)/4;case Vo:case Ho:return Math.max(n,8)*Math.max(e,8)/2;case Wo:case Xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case jo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $o:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case el:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case tl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case nl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case sl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case al:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ol:case ll:case cl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ul:case fl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case dl:case hl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $0(n){switch(n){case qn:case rd:return{byteLength:1,components:1};case jr:case sd:case gr:return{byteLength:2,components:1};case ql:case Yl:return{byteLength:2,components:4};case Ii:case Xl:case Vn:return{byteLength:4,components:1};case ad:case od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wl}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wl);function Td(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Z0(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var J0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ex=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ix=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ax=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ox=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ux=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Mx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ex=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Px=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$x=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,og=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ag=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$g=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,r_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,s_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,a_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,d_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,x_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,__=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,b_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,A_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,C_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:J0,alphahash_pars_fragment:Q0,alphamap_fragment:ex,alphamap_pars_fragment:tx,alphatest_fragment:nx,alphatest_pars_fragment:ix,aomap_fragment:rx,aomap_pars_fragment:sx,batching_pars_vertex:ax,batching_vertex:ox,begin_vertex:lx,beginnormal_vertex:cx,bsdfs:ux,iridescence_fragment:fx,bumpmap_pars_fragment:dx,clipping_planes_fragment:hx,clipping_planes_pars_fragment:px,clipping_planes_pars_vertex:mx,clipping_planes_vertex:xx,color_fragment:gx,color_pars_fragment:_x,color_pars_vertex:vx,color_vertex:Sx,common:Mx,cube_uv_reflection_fragment:bx,defaultnormal_vertex:Ex,displacementmap_pars_vertex:yx,displacementmap_vertex:Tx,emissivemap_fragment:Ax,emissivemap_pars_fragment:Rx,colorspace_fragment:wx,colorspace_pars_fragment:Cx,envmap_fragment:Px,envmap_common_pars_fragment:Dx,envmap_pars_fragment:Lx,envmap_pars_vertex:Ix,envmap_physical_pars_fragment:Wx,envmap_vertex:Ux,fog_vertex:Nx,fog_pars_vertex:Fx,fog_fragment:Ox,fog_pars_fragment:Bx,gradientmap_pars_fragment:zx,lightmap_pars_fragment:Vx,lights_lambert_fragment:Gx,lights_lambert_pars_fragment:Hx,lights_pars_begin:kx,lights_toon_fragment:Xx,lights_toon_pars_fragment:qx,lights_phong_fragment:Yx,lights_phong_pars_fragment:Kx,lights_physical_fragment:jx,lights_physical_pars_fragment:$x,lights_fragment_begin:Zx,lights_fragment_maps:Jx,lights_fragment_end:Qx,logdepthbuf_fragment:eg,logdepthbuf_pars_fragment:tg,logdepthbuf_pars_vertex:ng,logdepthbuf_vertex:ig,map_fragment:rg,map_pars_fragment:sg,map_particle_fragment:ag,map_particle_pars_fragment:og,metalnessmap_fragment:lg,metalnessmap_pars_fragment:cg,morphinstance_vertex:ug,morphcolor_vertex:fg,morphnormal_vertex:dg,morphtarget_pars_vertex:hg,morphtarget_vertex:pg,normal_fragment_begin:mg,normal_fragment_maps:xg,normal_pars_fragment:gg,normal_pars_vertex:_g,normal_vertex:vg,normalmap_pars_fragment:Sg,clearcoat_normal_fragment_begin:Mg,clearcoat_normal_fragment_maps:bg,clearcoat_pars_fragment:Eg,iridescence_pars_fragment:yg,opaque_fragment:Tg,packing:Ag,premultiplied_alpha_fragment:Rg,project_vertex:wg,dithering_fragment:Cg,dithering_pars_fragment:Pg,roughnessmap_fragment:Dg,roughnessmap_pars_fragment:Lg,shadowmap_pars_fragment:Ig,shadowmap_pars_vertex:Ug,shadowmap_vertex:Ng,shadowmask_pars_fragment:Fg,skinbase_vertex:Og,skinning_pars_vertex:Bg,skinning_vertex:zg,skinnormal_vertex:Vg,specularmap_fragment:Gg,specularmap_pars_fragment:Hg,tonemapping_fragment:kg,tonemapping_pars_fragment:Wg,transmission_fragment:Xg,transmission_pars_fragment:qg,uv_pars_fragment:Yg,uv_pars_vertex:Kg,uv_vertex:jg,worldpos_vertex:$g,background_vert:Zg,background_frag:Jg,backgroundCube_vert:Qg,backgroundCube_frag:e_,cube_vert:t_,cube_frag:n_,depth_vert:i_,depth_frag:r_,distanceRGBA_vert:s_,distanceRGBA_frag:a_,equirect_vert:o_,equirect_frag:l_,linedashed_vert:c_,linedashed_frag:u_,meshbasic_vert:f_,meshbasic_frag:d_,meshlambert_vert:h_,meshlambert_frag:p_,meshmatcap_vert:m_,meshmatcap_frag:x_,meshnormal_vert:g_,meshnormal_frag:__,meshphong_vert:v_,meshphong_frag:S_,meshphysical_vert:M_,meshphysical_frag:b_,meshtoon_vert:E_,meshtoon_frag:y_,points_vert:T_,points_frag:A_,shadow_vert:R_,shadow_frag:w_,sprite_vert:C_,sprite_frag:P_},Se={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Sn={basic:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new nt(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ut([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ut([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new nt(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ut([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ut([Se.points,Se.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ut([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ut([Se.common,Se.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ut([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ut([Se.sprite,Se.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Ut([Se.common,Se.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Ut([Se.lights,Se.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Sn.physical={uniforms:Ut([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Us={r:0,b:0,g:0},Ei=new Yn,D_=new St;function L_(n,e,t,i,r,s,a){const o=new nt(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(E){let A=E.isScene===!0?E.background:null;return A&&A.isTexture&&(A=(E.backgroundBlurriness>0?t:e).get(A)),A}function _(E){let A=!1;const L=g(E);L===null?p(o,l):L&&L.isColor&&(p(L,1),A=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,A){const L=g(A);L&&(L.isCubeTexture||L.mapping===ha)?(u===void 0&&(u=new Kn(new vr(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:hr(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ei.copy(A.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(D_.makeRotationFromEuler(Ei)),u.material.toneMapped=Je.getTransfer(L.colorSpace)!==st,(f!==L||d!==L.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=L,d=L.version,h=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new Kn(new ma(2,2),new jn({name:"BackgroundMaterial",uniforms:hr(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Je.getTransfer(L.colorSpace)!==st,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||d!==L.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=L,d=L.version,h=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,A){E.getRGB(Us,vd(n)),i.buffers.color.setClear(Us.r,Us.g,Us.b,A,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,A=1){o.set(E),l=A,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:_,addToRenderList:m,dispose:y}}function I_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(b,N,X,Z,se){let ie=!1;const te=f(Z,X,N);s!==te&&(s=te,c(s.object)),ie=h(b,Z,X,se),ie&&g(b,Z,X,se),se!==null&&e.update(se,n.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,A(b,N,X,Z),se!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function f(b,N,X){const Z=X.wireframe===!0;let se=i[b.id];se===void 0&&(se={},i[b.id]=se);let ie=se[N.id];ie===void 0&&(ie={},se[N.id]=ie);let te=ie[Z];return te===void 0&&(te=d(l()),ie[Z]=te),te}function d(b){const N=[],X=[],Z=[];for(let se=0;se<t;se++)N[se]=0,X[se]=0,Z[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:X,attributeDivisors:Z,object:b,attributes:{},index:null}}function h(b,N,X,Z){const se=s.attributes,ie=N.attributes;let te=0;const ne=X.getAttributes();for(const V in ne)if(ne[V].location>=0){const me=se[V];let we=ie[V];if(we===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(we=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(we=b.instanceColor)),me===void 0||me.attribute!==we||we&&me.data!==we.data)return!0;te++}return s.attributesNum!==te||s.index!==Z}function g(b,N,X,Z){const se={},ie=N.attributes;let te=0;const ne=X.getAttributes();for(const V in ne)if(ne[V].location>=0){let me=ie[V];me===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(me=b.instanceColor));const we={};we.attribute=me,me&&me.data&&(we.data=me.data),se[V]=we,te++}s.attributes=se,s.attributesNum=te,s.index=Z}function _(){const b=s.newAttributes;for(let N=0,X=b.length;N<X;N++)b[N]=0}function m(b){p(b,0)}function p(b,N){const X=s.newAttributes,Z=s.enabledAttributes,se=s.attributeDivisors;X[b]=1,Z[b]===0&&(n.enableVertexAttribArray(b),Z[b]=1),se[b]!==N&&(n.vertexAttribDivisor(b,N),se[b]=N)}function y(){const b=s.newAttributes,N=s.enabledAttributes;for(let X=0,Z=N.length;X<Z;X++)N[X]!==b[X]&&(n.disableVertexAttribArray(X),N[X]=0)}function E(b,N,X,Z,se,ie,te){te===!0?n.vertexAttribIPointer(b,N,X,se,ie):n.vertexAttribPointer(b,N,X,Z,se,ie)}function A(b,N,X,Z){_();const se=Z.attributes,ie=X.getAttributes(),te=N.defaultAttributeValues;for(const ne in ie){const V=ie[ne];if(V.location>=0){let he=se[ne];if(he===void 0&&(ne==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),ne==="instanceColor"&&b.instanceColor&&(he=b.instanceColor)),he!==void 0){const me=he.normalized,we=he.itemSize,Fe=e.get(he);if(Fe===void 0)continue;const Ye=Fe.buffer,$e=Fe.type,je=Fe.bytesPerElement,ee=$e===n.INT||$e===n.UNSIGNED_INT||he.gpuType===Xl;if(he.isInterleavedBufferAttribute){const D=he.data,J=D.stride,re=he.offset;if(D.isInstancedInterleavedBuffer){for(let oe=0;oe<V.locationSize;oe++)p(V.location+oe,D.meshPerAttribute);b.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let oe=0;oe<V.locationSize;oe++)m(V.location+oe);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let oe=0;oe<V.locationSize;oe++)E(V.location+oe,we/V.locationSize,$e,me,J*je,(re+we/V.locationSize*oe)*je,ee)}else{if(he.isInstancedBufferAttribute){for(let D=0;D<V.locationSize;D++)p(V.location+D,he.meshPerAttribute);b.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let D=0;D<V.locationSize;D++)m(V.location+D);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let D=0;D<V.locationSize;D++)E(V.location+D,we/V.locationSize,$e,me,we*je,we/V.locationSize*D*je,ee)}}else if(te!==void 0){const me=te[ne];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(V.location,me);break;case 3:n.vertexAttrib3fv(V.location,me);break;case 4:n.vertexAttrib4fv(V.location,me);break;default:n.vertexAttrib1fv(V.location,me)}}}}y()}function L(){W();for(const b in i){const N=i[b];for(const X in N){const Z=N[X];for(const se in Z)u(Z[se].object),delete Z[se];delete N[X]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;const N=i[b.id];for(const X in N){const Z=N[X];for(const se in Z)u(Z[se].object),delete Z[se];delete N[X]}delete i[b.id]}function P(b){for(const N in i){const X=i[N];if(X[b.id]===void 0)continue;const Z=X[b.id];for(const se in Z)u(Z[se].object),delete Z[se];delete X[b.id]}}function W(){T(),a=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:W,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function U_(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];t.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function N_(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==dn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const W=P===gr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==qn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Vn&&!W)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ge("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:A,vertexTextures:L,maxSamples:C}}function F_(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ai,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,E=y*4;let A=p.clippingState||null;l.value=A,A=u(g,d,E,h);for(let L=0;L!==E;++L)A[L]=t[L];p.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,A=h;E!==_;++E,A+=4)a.copy(f[E]).applyMatrix4(y,o),a.normal.toArray(m,A),m[A+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function O_(n){let e=new WeakMap;function t(a,o){return o===Fo?a.mapping=ur:o===Oo&&(a.mapping=fr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Fo||o===Oo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new N0(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ci=4,hu=[.125,.215,.35,.446,.526,.582],wi=20,B_=512,Pr=new K0,pu=new nt;let so=null,ao=0,oo=0,lo=!1;const z_=new Y;class mu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=z_}=s;so=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(so,ao,oo),this._renderer.xr.enabled=lo,e.scissorTest=!1,Ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ur||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),so=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:gr,format:dn,colorSpace:dr,depthBuffer:!1},r=xu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xu(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=V_(s)),this._blurMaterial=H_(s,e,t)}return r}_compileMaterial(e){const t=new Kn(new rn,e);this._renderer.compile(t,Pr)}_sceneToCubeUV(e,t,i,r,s){const l=new tn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(pu),f.toneMapping=fi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Kn(new vr,new Ql({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(pu),p=!0);for(let E=0;E<6;E++){const A=E%3;A===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):A===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const L=this._cubeSize;Ji(r,A*L,E>2?L:0,L,L),f.setRenderTarget(r),p&&f.render(_,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ur||e.mapping===fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_u()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ji(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Pr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget;if(this._ggxMaterial===null){const y=3*Math.max(this._cubeSize,16),E=4*this._cubeSize;this._ggxMaterial=G_(this._lodMax,y,E)}const a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=.05+c*.95,h=f*d,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-ci?i-g+ci:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-t,Ji(s,m,p,3*_,2*_),r.setRenderTarget(s),r.render(o,Pr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Ji(e,m,p,3*_,2*_),r.setRenderTarget(e),r.render(o,Pr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&gt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*wi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):wi;m>wi&&Ge(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);const p=[];let y=0;for(let P=0;P<wi;++P){const W=P/_,T=Math.exp(-W*W/2);p.push(T),P===0?y+=T:P<m&&(y+=2*T)}for(let P=0;P<p.length;P++)p[P]=p[P]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const A=this._sizeLods[r],L=3*A*(r>E-ci?r-E+ci:0),C=4*(this._cubeSize-A);Ji(t,L,C,3*A,2*A),l.setRenderTarget(t),l.render(f,Pr)}}function V_(n){const e=[],t=[],i=[];let r=n;const s=n-ci+1+hu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-ci?l=hu[a-n+ci-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*h),E=new Float32Array(m*g*h),A=new Float32Array(p*g*h);for(let C=0;C<h;C++){const P=C%3*2/3-1,W=C>2?0:-1,T=[P,W,0,P+2/3,W,0,P+2/3,W+1,0,P,W,0,P+2/3,W+1,0,P,W+1,0];y.set(T,_*g*C),E.set(d,m*g*C);const b=[C,C,C,C,C,C];A.set(b,p*g*C)}const L=new rn;L.setAttribute("position",new yn(y,_)),L.setAttribute("uv",new yn(E,m)),L.setAttribute("faceIndex",new yn(A,p)),i.push(new Kn(L,null)),r>ci&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function xu(n,e,t){const i=new Ui(n,e,t);return i.texture.mapping=ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ji(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function G_(n,e,t){return new jn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:B_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function H_(n,e,t){const i=new Float32Array(wi),r=new Y(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function gu(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function _u(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function xa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function k_(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Fo||l===Oo,u=l===ur||l===fr;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new mu(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new mu(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function W_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&es("WebGLRenderer: "+i+" extension not supported."),r}}}function X_(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],n.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const y=h.array;_=h.version;for(let E=0,A=y.length;E<A;E+=3){const L=y[E+0],C=y[E+1],P=y[E+2];d.push(L,C,C,P,P,L)}}else if(g!==void 0){const y=g.array;_=g.version;for(let E=0,A=y.length/3-1;E<A;E+=3){const L=E+0,C=E+1,P=E+2;d.push(L,C,C,P,P,L)}}else return;const m=new(dd(d)?_d:gd)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function q_(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*a),t.update(h,i,1)}function c(d,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,d*a,g),t.update(h,i,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=h[y]*_[y];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Y_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:gt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function K_(n,e,t){const i=new WeakMap,r=new _t;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let b=function(){W.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var h=b;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let A=0;g===!0&&(A=1),_===!0&&(A=2),m===!0&&(A=3);let L=o.attributes.position.count*A,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const P=new Float32Array(L*C*4*f),W=new hd(P,L,C,f);W.type=Vn,W.needsUpdate=!0;const T=A*4;for(let N=0;N<f;N++){const X=p[N],Z=y[N],se=E[N],ie=L*C*4*N;for(let te=0;te<X.count;te++){const ne=te*T;g===!0&&(r.fromBufferAttribute(X,te),P[ie+ne+0]=r.x,P[ie+ne+1]=r.y,P[ie+ne+2]=r.z,P[ie+ne+3]=0),_===!0&&(r.fromBufferAttribute(Z,te),P[ie+ne+4]=r.x,P[ie+ne+5]=r.y,P[ie+ne+6]=r.z,P[ie+ne+7]=0),m===!0&&(r.fromBufferAttribute(se,te),P[ie+ne+8]=r.x,P[ie+ne+9]=r.y,P[ie+ne+10]=r.z,P[ie+ne+11]=se.itemSize===4?r.w:1)}}d={count:f,texture:W,size:new at(L,C)},i.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function j_(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Ad=new Pt,vu=new Ed(1,1),Rd=new hd,wd=new _0,Cd=new Md,Su=[],Mu=[],bu=new Float32Array(16),Eu=new Float32Array(9),yu=new Float32Array(4);function Sr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Su[r];if(s===void 0&&(s=new Float32Array(r),Su[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ga(n,e){let t=Mu[e];t===void 0&&(t=new Int32Array(e),Mu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Z_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function J_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function Q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function ev(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,i))return;yu.set(i),n.uniformMatrix2fv(this.addr,!1,yu),Et(t,i)}}function tv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,i))return;Eu.set(i),n.uniformMatrix3fv(this.addr,!1,Eu),Et(t,i)}}function nv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,i))return;bu.set(i),n.uniformMatrix4fv(this.addr,!1,bu),Et(t,i)}}function iv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function ov(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function cv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function uv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function fv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(vu.compareFunction=fd,s=vu):s=Ad,t.setTexture2D(e||s,r)}function dv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||wd,r)}function hv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Cd,r)}function pv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Rd,r)}function mv(n){switch(n){case 5126:return $_;case 35664:return Z_;case 35665:return J_;case 35666:return Q_;case 35674:return ev;case 35675:return tv;case 35676:return nv;case 5124:case 35670:return iv;case 35667:case 35671:return rv;case 35668:case 35672:return sv;case 35669:case 35673:return av;case 5125:return ov;case 36294:return lv;case 36295:return cv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return pv}}function xv(n,e){n.uniform1fv(this.addr,e)}function gv(n,e){const t=Sr(e,this.size,2);n.uniform2fv(this.addr,t)}function _v(n,e){const t=Sr(e,this.size,3);n.uniform3fv(this.addr,t)}function vv(n,e){const t=Sr(e,this.size,4);n.uniform4fv(this.addr,t)}function Sv(n,e){const t=Sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Mv(n,e){const t=Sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bv(n,e){const t=Sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ev(n,e){n.uniform1iv(this.addr,e)}function yv(n,e){n.uniform2iv(this.addr,e)}function Tv(n,e){n.uniform3iv(this.addr,e)}function Av(n,e){n.uniform4iv(this.addr,e)}function Rv(n,e){n.uniform1uiv(this.addr,e)}function wv(n,e){n.uniform2uiv(this.addr,e)}function Cv(n,e){n.uniform3uiv(this.addr,e)}function Pv(n,e){n.uniform4uiv(this.addr,e)}function Dv(n,e,t){const i=this.cache,r=e.length,s=ga(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ad,s[a])}function Lv(n,e,t){const i=this.cache,r=e.length,s=ga(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||wd,s[a])}function Iv(n,e,t){const i=this.cache,r=e.length,s=ga(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Cd,s[a])}function Uv(n,e,t){const i=this.cache,r=e.length,s=ga(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Rd,s[a])}function Nv(n){switch(n){case 5126:return xv;case 35664:return gv;case 35665:return _v;case 35666:return vv;case 35674:return Sv;case 35675:return Mv;case 35676:return bv;case 5124:case 35670:return Ev;case 35667:case 35671:return yv;case 35668:case 35672:return Tv;case 35669:case 35673:return Av;case 5125:return Rv;case 36294:return wv;case 36295:return Cv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Uv}}class Fv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mv(t.type)}}class Ov{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nv(t.type)}}class Bv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const co=/(\w+)(\])?(\[|\.)?/g;function Tu(n,e){n.seq.push(e),n.map[e.id]=e}function zv(n,e,t){const i=n.name,r=i.length;for(co.lastIndex=0;;){const s=co.exec(i),a=co.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Tu(t,c===void 0?new Fv(o,n,e):new Ov(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Bv(o),Tu(t,f)),t=f}}}class Xs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);zv(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Au(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Vv=37297;let Gv=0;function Hv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Ru=new He;function kv(n){Je._getMatrix(Ru,Je.workingColorSpace,n);const e=`mat3( ${Ru.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case ea:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function wu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Hv(n.getShaderSource(e),o)}else return s}function Wv(n,e){const t=kv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xv(n,e){let t;switch(e){case Xm:t="Linear";break;case qm:t="Reinhard";break;case Ym:t="Cineon";break;case Km:t="ACESFilmic";break;case $m:t="AgX";break;case Zm:t="Neutral";break;case jm:t="Custom";break;default:Ge("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ns=new Y;function qv(){Je.getLuminanceCoefficients(Ns);const n=Ns.x.toFixed(4),e=Ns.y.toFixed(4),t=Ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function Kv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ir(n){return n!==""}function Cu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $v=/^[ \t]*#include +<([\w\d./]+)>/gm;function ml(n){return n.replace($v,Jv)}const Zv=new Map;function Jv(n,e){let t=We[e];if(t===void 0){const i=Zv.get(e);if(i!==void 0)t=We[i],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ml(t)}const Qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(n){return n.replace(Qv,eS)}function eS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===td?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ym?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function nS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ur:case fr:e="ENVMAP_TYPE_CUBE";break;case ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fr:e="ENVMAP_MODE_REFRACTION";break}return e}function rS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case nd:e="ENVMAP_BLENDING_MULTIPLY";break;case km:e="ENVMAP_BLENDING_MIX";break;case Wm:e="ENVMAP_BLENDING_ADD";break}return e}function sS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function aS(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=tS(t),c=nS(t),u=iS(t),f=rS(t),d=sS(t),h=Yv(t),g=Kv(s),_=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),p.length>0&&(p+=`
`)):(m=[Lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),p=[Lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?We.tonemapping_pars_fragment:"",t.toneMapping!==fi?Xv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Wv("linearToOutputTexel",t.outputColorSpace),qv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),a=ml(a),a=Cu(a,t),a=Pu(a,t),o=ml(o),o=Cu(o,t),o=Pu(o,t),a=Du(a),o=Du(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=y+m+a,A=y+p+o,L=Au(r,r.VERTEX_SHADER,E),C=Au(r,r.FRAGMENT_SHADER,A);r.attachShader(_,L),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(N){if(n.debug.checkShaderErrors){const X=r.getProgramInfoLog(_)||"",Z=r.getShaderInfoLog(L)||"",se=r.getShaderInfoLog(C)||"",ie=X.trim(),te=Z.trim(),ne=se.trim();let V=!0,he=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,L,C);else{const me=wu(r,L,"vertex"),we=wu(r,C,"fragment");gt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+ie+`
`+me+`
`+we)}else ie!==""?Ge("WebGLProgram: Program Info Log:",ie):(te===""||ne==="")&&(he=!1);he&&(N.diagnostics={runnable:V,programLog:ie,vertexShader:{log:te,prefix:m},fragmentShader:{log:ne,prefix:p}})}r.deleteShader(L),r.deleteShader(C),W=new Xs(r,_),T=jv(r,_)}let W;this.getUniforms=function(){return W===void 0&&P(this),W};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,Vv)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=C,this}let oS=0;class lS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new cS(e),t.set(e,i)),i}}class cS{constructor(e){this.id=oS++,this.code=e,this.usedTimes=0}}function uS(n,e,t,i,r,s,a){const o=new md,l=new lS,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,b,N,X,Z){const se=X.fog,ie=Z.geometry,te=T.isMeshStandardMaterial?X.environment:null,ne=(T.isMeshStandardMaterial?t:e).get(T.envMap||te),V=ne&&ne.mapping===ha?ne.image.height:null,he=g[T.type];T.precision!==null&&(h=r.getMaxPrecision(T.precision),h!==T.precision&&Ge("WebGLProgram.getParameters:",T.precision,"not supported, using",h,"instead."));const me=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,we=me!==void 0?me.length:0;let Fe=0;ie.morphAttributes.position!==void 0&&(Fe=1),ie.morphAttributes.normal!==void 0&&(Fe=2),ie.morphAttributes.color!==void 0&&(Fe=3);let Ye,$e,je,ee;if(he){const it=Sn[he];Ye=it.vertexShader,$e=it.fragmentShader}else Ye=T.vertexShader,$e=T.fragmentShader,l.update(T),je=l.getVertexShaderID(T),ee=l.getFragmentShaderID(T);const D=n.getRenderTarget(),J=n.state.buffers.depth.getReversed(),re=Z.isInstancedMesh===!0,oe=Z.isBatchedMesh===!0,be=!!T.map,R=!!T.matcap,w=!!ne,F=!!T.aoMap,S=!!T.lightMap,q=!!T.bumpMap,G=!!T.normalMap,ue=!!T.displacementMap,j=!!T.emissiveMap,le=!!T.metalnessMap,H=!!T.roughnessMap,fe=T.anisotropy>0,v=T.clearcoat>0,x=T.dispersion>0,U=T.iridescence>0,k=T.sheen>0,Q=T.transmission>0,z=fe&&!!T.anisotropyMap,ye=v&&!!T.clearcoatMap,pe=v&&!!T.clearcoatNormalMap,Ce=v&&!!T.clearcoatRoughnessMap,Ae=U&&!!T.iridescenceMap,ce=U&&!!T.iridescenceThicknessMap,xe=k&&!!T.sheenColorMap,Pe=k&&!!T.sheenRoughnessMap,De=!!T.specularMap,Ee=!!T.specularColorMap,Oe=!!T.specularIntensityMap,I=Q&&!!T.transmissionMap,Me=Q&&!!T.thicknessMap,_e=!!T.gradientMap,ve=!!T.alphaMap,de=T.alphaTest>0,ae=!!T.alphaHash,Le=!!T.extensions;let Ve=fi;T.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ve=n.toneMapping);const ut={shaderID:he,shaderType:T.type,shaderName:T.name,vertexShader:Ye,fragmentShader:$e,defines:T.defines,customVertexShaderID:je,customFragmentShaderID:ee,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:h,batching:oe,batchingColor:oe&&Z._colorsTexture!==null,instancing:re,instancingColor:re&&Z.instanceColor!==null,instancingMorph:re&&Z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:D===null?n.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:dr,alphaToCoverage:!!T.alphaToCoverage,map:be,matcap:R,envMap:w,envMapMode:w&&ne.mapping,envMapCubeUVHeight:V,aoMap:F,lightMap:S,bumpMap:q,normalMap:G,displacementMap:d&&ue,emissiveMap:j,normalMapObjectSpace:G&&T.normalMapType===n0,normalMapTangentSpace:G&&T.normalMapType===t0,metalnessMap:le,roughnessMap:H,anisotropy:fe,anisotropyMap:z,clearcoat:v,clearcoatMap:ye,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ce,dispersion:x,iridescence:U,iridescenceMap:Ae,iridescenceThicknessMap:ce,sheen:k,sheenColorMap:xe,sheenRoughnessMap:Pe,specularMap:De,specularColorMap:Ee,specularIntensityMap:Oe,transmission:Q,transmissionMap:I,thicknessMap:Me,gradientMap:_e,opaque:T.transparent===!1&&T.blending===sr&&T.alphaToCoverage===!1,alphaMap:ve,alphaTest:de,alphaHash:ae,combine:T.combine,mapUv:be&&_(T.map.channel),aoMapUv:F&&_(T.aoMap.channel),lightMapUv:S&&_(T.lightMap.channel),bumpMapUv:q&&_(T.bumpMap.channel),normalMapUv:G&&_(T.normalMap.channel),displacementMapUv:ue&&_(T.displacementMap.channel),emissiveMapUv:j&&_(T.emissiveMap.channel),metalnessMapUv:le&&_(T.metalnessMap.channel),roughnessMapUv:H&&_(T.roughnessMap.channel),anisotropyMapUv:z&&_(T.anisotropyMap.channel),clearcoatMapUv:ye&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:pe&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(T.sheenRoughnessMap.channel),specularMapUv:De&&_(T.specularMap.channel),specularColorMapUv:Ee&&_(T.specularColorMap.channel),specularIntensityMapUv:Oe&&_(T.specularIntensityMap.channel),transmissionMapUv:I&&_(T.transmissionMap.channel),thicknessMapUv:Me&&_(T.thicknessMap.channel),alphaMapUv:ve&&_(T.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(G||fe),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ie.attributes.uv&&(be||ve),fog:!!se,useFog:T.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:J,skinning:Z.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Fe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,decodeVideoTexture:be&&T.map.isVideoTexture===!0&&Je.getTransfer(T.map.colorSpace)===st,decodeVideoTextureEmissive:j&&T.emissiveMap.isVideoTexture===!0&&Je.getTransfer(T.emissiveMap.colorSpace)===st,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Bn,flipSided:T.side===Wt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Le&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&T.extensions.multiDraw===!0||oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function p(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const N in T.defines)b.push(N),b.push(T.defines[N]);return T.isRawShaderMaterial===!1&&(y(b,T),E(b,T),b.push(n.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function y(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function E(T,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),T.push(o.mask)}function A(T){const b=g[T.type];let N;if(b){const X=Sn[b];N=D0.clone(X.uniforms)}else N=T.uniforms;return N}function L(T,b){let N;for(let X=0,Z=u.length;X<Z;X++){const se=u[X];if(se.cacheKey===b){N=se,++N.usedTimes;break}}return N===void 0&&(N=new aS(n,b,T,s),u.push(N)),N}function C(T){if(--T.usedTimes===0){const b=u.indexOf(T);u[b]=u[u.length-1],u.pop(),T.destroy()}}function P(T){l.remove(T)}function W(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:A,acquireProgram:L,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:W}}function fS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function dS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Iu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Uu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,h,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||dS),i.length>1&&i.sort(d||Iu),r.length>1&&r.sort(d||Iu)}function u(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function hS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Uu,n.set(i,[a])):r>=s.length?(a=new Uu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function pS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new nt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function mS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let xS=0;function gS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _S(n){const e=new pS,t=mS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new St,a=new St;function o(c){let u=0,f=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,y=0,E=0,A=0,L=0,C=0,P=0;c.sort(gS);for(let T=0,b=c.length;T<b;T++){const N=c[T],X=N.color,Z=N.intensity,se=N.distance,ie=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=X.r*Z,f+=X.g*Z,d+=X.b*Z;else if(N.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(N.sh.coefficients[te],Z);P++}else if(N.isDirectionalLight){const te=e.get(N);if(te.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ne=N.shadow,V=t.get(N);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=ie,i.directionalShadowMatrix[h]=N.shadow.matrix,y++}i.directional[h]=te,h++}else if(N.isSpotLight){const te=e.get(N);te.position.setFromMatrixPosition(N.matrixWorld),te.color.copy(X).multiplyScalar(Z),te.distance=se,te.coneCos=Math.cos(N.angle),te.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),te.decay=N.decay,i.spot[_]=te;const ne=N.shadow;if(N.map&&(i.spotLightMap[L]=N.map,L++,ne.updateMatrices(N),N.castShadow&&C++),i.spotLightMatrix[_]=ne.matrix,N.castShadow){const V=t.get(N);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=ie,A++}_++}else if(N.isRectAreaLight){const te=e.get(N);te.color.copy(X).multiplyScalar(Z),te.halfWidth.set(N.width*.5,0,0),te.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=te,m++}else if(N.isPointLight){const te=e.get(N);if(te.color.copy(N.color).multiplyScalar(N.intensity),te.distance=N.distance,te.decay=N.decay,N.castShadow){const ne=N.shadow,V=t.get(N);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,V.shadowCameraNear=ne.camera.near,V.shadowCameraFar=ne.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=ie,i.pointShadowMatrix[g]=N.shadow.matrix,E++}i.point[g]=te,g++}else if(N.isHemisphereLight){const te=e.get(N);te.skyColor.copy(N.color).multiplyScalar(Z),te.groundColor.copy(N.groundColor).multiplyScalar(Z),i.hemi[p]=te,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const W=i.hash;(W.directionalLength!==h||W.pointLength!==g||W.spotLength!==_||W.rectAreaLength!==m||W.hemiLength!==p||W.numDirectionalShadows!==y||W.numPointShadows!==E||W.numSpotShadows!==A||W.numSpotMaps!==L||W.numLightProbes!==P)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=A+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,W.directionalLength=h,W.pointLength=g,W.spotLength=_,W.rectAreaLength=m,W.hemiLength=p,W.numDirectionalShadows=y,W.numPointShadows=E,W.numSpotShadows=A,W.numSpotMaps=L,W.numLightProbes=P,i.version=xS++)}function l(c,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const E=c[p];if(E.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),f++}else if(E.isSpotLight){const A=i.spot[h];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),h++}else if(E.isRectAreaLight){const A=i.rectArea[g];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const A=i.point[d];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const A=i.hemi[_];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Nu(n){const e=new _S(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function vS(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Nu(n),e.set(r,[o])):s>=a.length?(o=new Nu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const SS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bS(n,e,t){let i=new bd;const r=new at,s=new at,a=new _t,o=new H0({depthPacking:e0}),l=new k0,c={},u=t.maxTextureSize,f={[pi]:Wt,[Wt]:pi,[Bn]:Bn},d=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:SS,fragmentShader:MS}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Kn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=td;let p=this.type;this.render=function(C,P,W){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const T=n.getRenderTarget(),b=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Hn),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const Z=p!==Un&&this.type===Un,se=p===Un&&this.type!==Un;for(let ie=0,te=C.length;ie<te;ie++){const ne=C[ie],V=ne.shadow;if(V===void 0){Ge("WebGLShadowMap:",ne,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const he=V.getFrameExtents();if(r.multiply(he),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,V.mapSize.y=s.y)),V.map===null||Z===!0||se===!0){const we=this.type!==Un?{minFilter:zt,magFilter:zt}:{};V.map!==null&&V.map.dispose(),V.map=new Ui(r.x,r.y,we),V.map.texture.name=ne.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const me=V.getViewportCount();for(let we=0;we<me;we++){const Fe=V.getViewport(we);a.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),X.viewport(a),V.updateMatrices(ne,we),i=V.getFrustum(),A(P,W,V.camera,ne,this.type)}V.isPointLightShadow!==!0&&this.type===Un&&y(V,W),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,b,N)};function y(C,P){const W=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ui(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,W,d,_,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,W,h,_,null)}function E(C,P,W,T){let b=null;const N=W.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(N!==void 0)b=N;else if(b=W.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const X=b.uuid,Z=P.uuid;let se=c[X];se===void 0&&(se={},c[X]=se);let ie=se[Z];ie===void 0&&(ie=b.clone(),se[Z]=ie,P.addEventListener("dispose",L)),b=ie}if(b.visible=P.visible,b.wireframe=P.wireframe,T===Un?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:f[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,W.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const X=n.properties.get(b);X.light=W}return b}function A(C,P,W,T,b){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Un)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld);const Z=e.update(C),se=C.material;if(Array.isArray(se)){const ie=Z.groups;for(let te=0,ne=ie.length;te<ne;te++){const V=ie[te],he=se[V.materialIndex];if(he&&he.visible){const me=E(C,he,T,b);C.onBeforeShadow(n,C,P,W,Z,me,V),n.renderBufferDirect(W,null,Z,me,C,V),C.onAfterShadow(n,C,P,W,Z,me,V)}}}else if(se.visible){const ie=E(C,se,T,b);C.onBeforeShadow(n,C,P,W,Z,ie,null),n.renderBufferDirect(W,null,Z,ie,C,null),C.onAfterShadow(n,C,P,W,Z,ie,null)}}const X=C.children;for(let Z=0,se=X.length;Z<se;Z++)A(X[Z],P,W,T,b)}function L(C){C.target.removeEventListener("dispose",L);for(const W in c){const T=c[W],b=C.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const ES={[Co]:Po,[Do]:Uo,[Lo]:No,[cr]:Io,[Po]:Co,[Uo]:Do,[No]:Lo,[Io]:cr};function yS(n,e){function t(){let I=!1;const Me=new _t;let _e=null;const ve=new _t(0,0,0,0);return{setMask:function(de){_e!==de&&!I&&(n.colorMask(de,de,de,de),_e=de)},setLocked:function(de){I=de},setClear:function(de,ae,Le,Ve,ut){ut===!0&&(de*=Ve,ae*=Ve,Le*=Ve),Me.set(de,ae,Le,Ve),ve.equals(Me)===!1&&(n.clearColor(de,ae,Le,Ve),ve.copy(Me))},reset:function(){I=!1,_e=null,ve.set(-1,0,0,0)}}}function i(){let I=!1,Me=!1,_e=null,ve=null,de=null;return{setReversed:function(ae){if(Me!==ae){const Le=e.get("EXT_clip_control");ae?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),Me=ae;const Ve=de;de=null,this.setClear(Ve)}},getReversed:function(){return Me},setTest:function(ae){ae?D(n.DEPTH_TEST):J(n.DEPTH_TEST)},setMask:function(ae){_e!==ae&&!I&&(n.depthMask(ae),_e=ae)},setFunc:function(ae){if(Me&&(ae=ES[ae]),ve!==ae){switch(ae){case Co:n.depthFunc(n.NEVER);break;case Po:n.depthFunc(n.ALWAYS);break;case Do:n.depthFunc(n.LESS);break;case cr:n.depthFunc(n.LEQUAL);break;case Lo:n.depthFunc(n.EQUAL);break;case Io:n.depthFunc(n.GEQUAL);break;case Uo:n.depthFunc(n.GREATER);break;case No:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=ae}},setLocked:function(ae){I=ae},setClear:function(ae){de!==ae&&(Me&&(ae=1-ae),n.clearDepth(ae),de=ae)},reset:function(){I=!1,_e=null,ve=null,de=null,Me=!1}}}function r(){let I=!1,Me=null,_e=null,ve=null,de=null,ae=null,Le=null,Ve=null,ut=null;return{setTest:function(it){I||(it?D(n.STENCIL_TEST):J(n.STENCIL_TEST))},setMask:function(it){Me!==it&&!I&&(n.stencilMask(it),Me=it)},setFunc:function(it,xn,sn){(_e!==it||ve!==xn||de!==sn)&&(n.stencilFunc(it,xn,sn),_e=it,ve=xn,de=sn)},setOp:function(it,xn,sn){(ae!==it||Le!==xn||Ve!==sn)&&(n.stencilOp(it,xn,sn),ae=it,Le=xn,Ve=sn)},setLocked:function(it){I=it},setClear:function(it){ut!==it&&(n.clearStencil(it),ut=it)},reset:function(){I=!1,Me=null,_e=null,ve=null,de=null,ae=null,Le=null,Ve=null,ut=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,y=null,E=null,A=null,L=null,C=null,P=new nt(0,0,0),W=0,T=!1,b=null,N=null,X=null,Z=null,se=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ne=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(V)[1]),te=ne>=1):V.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),te=ne>=2);let he=null,me={};const we=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),Ye=new _t().fromArray(we),$e=new _t().fromArray(Fe);function je(I,Me,_e,ve){const de=new Uint8Array(4),ae=n.createTexture();n.bindTexture(I,ae),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Le=0;Le<_e;Le++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(Me+Le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return ae}const ee={};ee[n.TEXTURE_2D]=je(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),D(n.DEPTH_TEST),a.setFunc(cr),q(!1),G(zc),D(n.CULL_FACE),F(Hn);function D(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function J(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function re(I,Me){return f[I]!==Me?(n.bindFramebuffer(I,Me),f[I]=Me,I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Me),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function oe(I,Me){let _e=h,ve=!1;if(I){_e=d.get(Me),_e===void 0&&(_e=[],d.set(Me,_e));const de=I.textures;if(_e.length!==de.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Le=de.length;ae<Le;ae++)_e[ae]=n.COLOR_ATTACHMENT0+ae;_e.length=de.length,ve=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,ve=!0);ve&&n.drawBuffers(_e)}function be(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const R={[Ri]:n.FUNC_ADD,[Am]:n.FUNC_SUBTRACT,[Rm]:n.FUNC_REVERSE_SUBTRACT};R[wm]=n.MIN,R[Cm]=n.MAX;const w={[Pm]:n.ZERO,[Dm]:n.ONE,[Lm]:n.SRC_COLOR,[Ro]:n.SRC_ALPHA,[Bm]:n.SRC_ALPHA_SATURATE,[Fm]:n.DST_COLOR,[Um]:n.DST_ALPHA,[Im]:n.ONE_MINUS_SRC_COLOR,[wo]:n.ONE_MINUS_SRC_ALPHA,[Om]:n.ONE_MINUS_DST_COLOR,[Nm]:n.ONE_MINUS_DST_ALPHA,[zm]:n.CONSTANT_COLOR,[Vm]:n.ONE_MINUS_CONSTANT_COLOR,[Gm]:n.CONSTANT_ALPHA,[Hm]:n.ONE_MINUS_CONSTANT_ALPHA};function F(I,Me,_e,ve,de,ae,Le,Ve,ut,it){if(I===Hn){_===!0&&(J(n.BLEND),_=!1);return}if(_===!1&&(D(n.BLEND),_=!0),I!==Tm){if(I!==m||it!==T){if((p!==Ri||A!==Ri)&&(n.blendEquation(n.FUNC_ADD),p=Ri,A=Ri),it)switch(I){case sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vc:n.blendFunc(n.ONE,n.ONE);break;case Gc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:gt("WebGLState: Invalid blending: ",I);break}else switch(I){case sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Gc:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hc:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",I);break}y=null,E=null,L=null,C=null,P.set(0,0,0),W=0,m=I,T=it}return}de=de||Me,ae=ae||_e,Le=Le||ve,(Me!==p||de!==A)&&(n.blendEquationSeparate(R[Me],R[de]),p=Me,A=de),(_e!==y||ve!==E||ae!==L||Le!==C)&&(n.blendFuncSeparate(w[_e],w[ve],w[ae],w[Le]),y=_e,E=ve,L=ae,C=Le),(Ve.equals(P)===!1||ut!==W)&&(n.blendColor(Ve.r,Ve.g,Ve.b,ut),P.copy(Ve),W=ut),m=I,T=!1}function S(I,Me){I.side===Bn?J(n.CULL_FACE):D(n.CULL_FACE);let _e=I.side===Wt;Me&&(_e=!_e),q(_e),I.blending===sr&&I.transparent===!1?F(Hn):F(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const ve=I.stencilWrite;o.setTest(ve),ve&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),j(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?D(n.SAMPLE_ALPHA_TO_COVERAGE):J(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(I){b!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),b=I)}function G(I){I!==bm?(D(n.CULL_FACE),I!==N&&(I===zc?n.cullFace(n.BACK):I===Em?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):J(n.CULL_FACE),N=I}function ue(I){I!==X&&(te&&n.lineWidth(I),X=I)}function j(I,Me,_e){I?(D(n.POLYGON_OFFSET_FILL),(Z!==Me||se!==_e)&&(n.polygonOffset(Me,_e),Z=Me,se=_e)):J(n.POLYGON_OFFSET_FILL)}function le(I){I?D(n.SCISSOR_TEST):J(n.SCISSOR_TEST)}function H(I){I===void 0&&(I=n.TEXTURE0+ie-1),he!==I&&(n.activeTexture(I),he=I)}function fe(I,Me,_e){_e===void 0&&(he===null?_e=n.TEXTURE0+ie-1:_e=he);let ve=me[_e];ve===void 0&&(ve={type:void 0,texture:void 0},me[_e]=ve),(ve.type!==I||ve.texture!==Me)&&(he!==_e&&(n.activeTexture(_e),he=_e),n.bindTexture(I,Me||ee[I]),ve.type=I,ve.texture=Me)}function v(){const I=me[he];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function k(){try{n.texSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Q(){try{n.texSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function pe(){try{n.texStorage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Ce(){try{n.texStorage3D(...arguments)}catch(I){I("WebGLState:",I)}}function Ae(){try{n.texImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function ce(){try{n.texImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function xe(I){Ye.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ye.copy(I))}function Pe(I){$e.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),$e.copy(I))}function De(I,Me){let _e=c.get(Me);_e===void 0&&(_e=new WeakMap,c.set(Me,_e));let ve=_e.get(I);ve===void 0&&(ve=n.getUniformBlockIndex(Me,I.name),_e.set(I,ve))}function Ee(I,Me){const ve=c.get(Me).get(I);l.get(Me)!==ve&&(n.uniformBlockBinding(Me,ve,I.__bindingPointIndex),l.set(Me,ve))}function Oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},he=null,me={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,y=null,E=null,A=null,L=null,C=null,P=new nt(0,0,0),W=0,T=!1,b=null,N=null,X=null,Z=null,se=null,Ye.set(0,0,n.canvas.width,n.canvas.height),$e.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:D,disable:J,bindFramebuffer:re,drawBuffers:oe,useProgram:be,setBlending:F,setMaterial:S,setFlipSided:q,setCullFace:G,setLineWidth:ue,setPolygonOffset:j,setScissorTest:le,activeTexture:H,bindTexture:fe,unbindTexture:v,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:Ae,texImage3D:ce,updateUBOMapping:De,uniformBlockBinding:Ee,texStorage2D:pe,texStorage3D:Ce,texSubImage2D:k,texSubImage3D:Q,compressedTexSubImage2D:z,compressedTexSubImage3D:ye,scissor:xe,viewport:Pe,reset:Oe}}function TS(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(v,x){return h?new OffscreenCanvas(v,x):Qr("canvas")}function _(v,x,U){let k=1;const Q=fe(v);if((Q.width>U||Q.height>U)&&(k=U/Math.max(Q.width,Q.height)),k<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const z=Math.floor(k*Q.width),ye=Math.floor(k*Q.height);f===void 0&&(f=g(z,ye));const pe=x?g(z,ye):f;return pe.width=z,pe.height=ye,pe.getContext("2d").drawImage(v,0,0,z,ye),Ge("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+z+"x"+ye+")."),pe}else return"data"in v&&Ge("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),v;return v}function m(v){return v.generateMipmaps}function p(v){n.generateMipmap(v)}function y(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(v,x,U,k,Q=!1){if(v!==null){if(n[v]!==void 0)return n[v];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let z=x;if(x===n.RED&&(U===n.FLOAT&&(z=n.R32F),U===n.HALF_FLOAT&&(z=n.R16F),U===n.UNSIGNED_BYTE&&(z=n.R8)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(z=n.R8UI),U===n.UNSIGNED_SHORT&&(z=n.R16UI),U===n.UNSIGNED_INT&&(z=n.R32UI),U===n.BYTE&&(z=n.R8I),U===n.SHORT&&(z=n.R16I),U===n.INT&&(z=n.R32I)),x===n.RG&&(U===n.FLOAT&&(z=n.RG32F),U===n.HALF_FLOAT&&(z=n.RG16F),U===n.UNSIGNED_BYTE&&(z=n.RG8)),x===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(z=n.RG8UI),U===n.UNSIGNED_SHORT&&(z=n.RG16UI),U===n.UNSIGNED_INT&&(z=n.RG32UI),U===n.BYTE&&(z=n.RG8I),U===n.SHORT&&(z=n.RG16I),U===n.INT&&(z=n.RG32I)),x===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(z=n.RGB8UI),U===n.UNSIGNED_SHORT&&(z=n.RGB16UI),U===n.UNSIGNED_INT&&(z=n.RGB32UI),U===n.BYTE&&(z=n.RGB8I),U===n.SHORT&&(z=n.RGB16I),U===n.INT&&(z=n.RGB32I)),x===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),U===n.UNSIGNED_INT&&(z=n.RGBA32UI),U===n.BYTE&&(z=n.RGBA8I),U===n.SHORT&&(z=n.RGBA16I),U===n.INT&&(z=n.RGBA32I)),x===n.RGB&&(U===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(z=n.R11F_G11F_B10F)),x===n.RGBA){const ye=Q?ea:Je.getTransfer(k);U===n.FLOAT&&(z=n.RGBA32F),U===n.HALF_FLOAT&&(z=n.RGBA16F),U===n.UNSIGNED_BYTE&&(z=ye===st?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function A(v,x){let U;return v?x===null||x===Ii||x===$r?U=n.DEPTH24_STENCIL8:x===Vn?U=n.DEPTH32F_STENCIL8:x===jr&&(U=n.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ii||x===$r?U=n.DEPTH_COMPONENT24:x===Vn?U=n.DEPTH_COMPONENT32F:x===jr&&(U=n.DEPTH_COMPONENT16),U}function L(v,x){return m(v)===!0||v.isFramebufferTexture&&v.minFilter!==zt&&v.minFilter!==nn?Math.log2(Math.max(x.width,x.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?x.mipmaps.length:1}function C(v){const x=v.target;x.removeEventListener("dispose",C),W(x),x.isVideoTexture&&u.delete(x)}function P(v){const x=v.target;x.removeEventListener("dispose",P),b(x)}function W(v){const x=i.get(v);if(x.__webglInit===void 0)return;const U=v.source,k=d.get(U);if(k){const Q=k[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(v),Object.keys(k).length===0&&d.delete(U)}i.remove(v)}function T(v){const x=i.get(v);n.deleteTexture(x.__webglTexture);const U=v.source,k=d.get(U);delete k[x.__cacheKey],a.memory.textures--}function b(v){const x=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(x.__webglFramebuffer[k]))for(let Q=0;Q<x.__webglFramebuffer[k].length;Q++)n.deleteFramebuffer(x.__webglFramebuffer[k][Q]);else n.deleteFramebuffer(x.__webglFramebuffer[k]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[k])}else{if(Array.isArray(x.__webglFramebuffer))for(let k=0;k<x.__webglFramebuffer.length;k++)n.deleteFramebuffer(x.__webglFramebuffer[k]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let k=0;k<x.__webglColorRenderbuffer.length;k++)x.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[k]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=v.textures;for(let k=0,Q=U.length;k<Q;k++){const z=i.get(U[k]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),a.memory.textures--),i.remove(U[k])}i.remove(v)}let N=0;function X(){N=0}function Z(){const v=N;return v>=r.maxTextures&&Ge("WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+r.maxTextures),N+=1,v}function se(v){const x=[];return x.push(v.wrapS),x.push(v.wrapT),x.push(v.wrapR||0),x.push(v.magFilter),x.push(v.minFilter),x.push(v.anisotropy),x.push(v.internalFormat),x.push(v.format),x.push(v.type),x.push(v.generateMipmaps),x.push(v.premultiplyAlpha),x.push(v.flipY),x.push(v.unpackAlignment),x.push(v.colorSpace),x.join()}function ie(v,x){const U=i.get(v);if(v.isVideoTexture&&le(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&U.__version!==v.version){const k=v.image;if(k===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(U,v,x);return}}else v.isExternalTexture&&(U.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x)}function te(v,x){const U=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&U.__version!==v.version){ee(U,v,x);return}else v.isExternalTexture&&(U.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x)}function ne(v,x){const U=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&U.__version!==v.version){ee(U,v,x);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x)}function V(v,x){const U=i.get(v);if(v.version>0&&U.__version!==v.version){D(U,v,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x)}const he={[Bo]:n.REPEAT,[zn]:n.CLAMP_TO_EDGE,[zo]:n.MIRRORED_REPEAT},me={[zt]:n.NEAREST,[Jm]:n.NEAREST_MIPMAP_NEAREST,[hs]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[Da]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},we={[i0]:n.NEVER,[c0]:n.ALWAYS,[r0]:n.LESS,[fd]:n.LEQUAL,[s0]:n.EQUAL,[l0]:n.GEQUAL,[a0]:n.GREATER,[o0]:n.NOTEQUAL};function Fe(v,x){if(x.type===Vn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===nn||x.magFilter===Da||x.magFilter===hs||x.magFilter===Ci||x.minFilter===nn||x.minFilter===Da||x.minFilter===hs||x.minFilter===Ci)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,he[x.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,he[x.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,he[x.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,me[x.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,me[x.minFilter]),x.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,we[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===zt||x.minFilter!==hs&&x.minFilter!==Ci||x.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(v,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ye(v,x){let U=!1;v.__webglInit===void 0&&(v.__webglInit=!0,x.addEventListener("dispose",C));const k=x.source;let Q=d.get(k);Q===void 0&&(Q={},d.set(k,Q));const z=se(x);if(z!==v.__cacheKey){Q[z]===void 0&&(Q[z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Q[z].usedTimes++;const ye=Q[v.__cacheKey];ye!==void 0&&(Q[v.__cacheKey].usedTimes--,ye.usedTimes===0&&T(x)),v.__cacheKey=z,v.__webglTexture=Q[z].texture}return U}function $e(v,x,U){return Math.floor(Math.floor(v/U)/x)}function je(v,x,U,k){const z=v.updateRanges;if(z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,U,k,x.data);else{z.sort((ce,xe)=>ce.start-xe.start);let ye=0;for(let ce=1;ce<z.length;ce++){const xe=z[ye],Pe=z[ce],De=xe.start+xe.count,Ee=$e(Pe.start,x.width,4),Oe=$e(xe.start,x.width,4);Pe.start<=De+1&&Ee===Oe&&$e(Pe.start+Pe.count-1,x.width,4)===Ee?xe.count=Math.max(xe.count,Pe.start+Pe.count-xe.start):(++ye,z[ye]=Pe)}z.length=ye+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),Ce=n.getParameter(n.UNPACK_SKIP_PIXELS),Ae=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ce=0,xe=z.length;ce<xe;ce++){const Pe=z[ce],De=Math.floor(Pe.start/4),Ee=Math.ceil(Pe.count/4),Oe=De%x.width,I=Math.floor(De/x.width),Me=Ee,_e=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Oe),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Oe,I,Me,_e,U,k,x.data)}v.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ce),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ae)}}function ee(v,x,U){let k=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(k=n.TEXTURE_3D);const Q=Ye(v,x),z=x.source;t.bindTexture(k,v.__webglTexture,n.TEXTURE0+U);const ye=i.get(z);if(z.version!==ye.__version||Q===!0){t.activeTexture(n.TEXTURE0+U);const pe=Je.getPrimaries(Je.workingColorSpace),Ce=x.colorSpace===li?null:Je.getPrimaries(x.colorSpace),Ae=x.colorSpace===li||pe===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ce=_(x.image,!1,r.maxTextureSize);ce=H(x,ce);const xe=s.convert(x.format,x.colorSpace),Pe=s.convert(x.type);let De=E(x.internalFormat,xe,Pe,x.colorSpace,x.isVideoTexture);Fe(k,x);let Ee;const Oe=x.mipmaps,I=x.isVideoTexture!==!0,Me=ye.__version===void 0||Q===!0,_e=z.dataReady,ve=L(x,ce);if(x.isDepthTexture)De=A(x.format===Jr,x.type),Me&&(I?t.texStorage2D(n.TEXTURE_2D,1,De,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,De,ce.width,ce.height,0,xe,Pe,null));else if(x.isDataTexture)if(Oe.length>0){I&&Me&&t.texStorage2D(n.TEXTURE_2D,ve,De,Oe[0].width,Oe[0].height);for(let de=0,ae=Oe.length;de<ae;de++)Ee=Oe[de],I?_e&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Ee.width,Ee.height,xe,Pe,Ee.data):t.texImage2D(n.TEXTURE_2D,de,De,Ee.width,Ee.height,0,xe,Pe,Ee.data);x.generateMipmaps=!1}else I?(Me&&t.texStorage2D(n.TEXTURE_2D,ve,De,ce.width,ce.height),_e&&je(x,ce,xe,Pe)):t.texImage2D(n.TEXTURE_2D,0,De,ce.width,ce.height,0,xe,Pe,ce.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,De,Oe[0].width,Oe[0].height,ce.depth);for(let de=0,ae=Oe.length;de<ae;de++)if(Ee=Oe[de],x.format!==dn)if(xe!==null)if(I){if(_e)if(x.layerUpdates.size>0){const Le=du(Ee.width,Ee.height,x.format,x.type);for(const Ve of x.layerUpdates){const ut=Ee.data.subarray(Ve*Le/Ee.data.BYTES_PER_ELEMENT,(Ve+1)*Le/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,Ve,Ee.width,Ee.height,1,xe,ut)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,ce.depth,xe,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,De,Ee.width,Ee.height,ce.depth,0,Ee.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?_e&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,ce.depth,xe,Pe,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,De,Ee.width,Ee.height,ce.depth,0,xe,Pe,Ee.data)}else{I&&Me&&t.texStorage2D(n.TEXTURE_2D,ve,De,Oe[0].width,Oe[0].height);for(let de=0,ae=Oe.length;de<ae;de++)Ee=Oe[de],x.format!==dn?xe!==null?I?_e&&t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,Ee.width,Ee.height,xe,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,de,De,Ee.width,Ee.height,0,Ee.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?_e&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Ee.width,Ee.height,xe,Pe,Ee.data):t.texImage2D(n.TEXTURE_2D,de,De,Ee.width,Ee.height,0,xe,Pe,Ee.data)}else if(x.isDataArrayTexture)if(I){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,De,ce.width,ce.height,ce.depth),_e)if(x.layerUpdates.size>0){const de=du(ce.width,ce.height,x.format,x.type);for(const ae of x.layerUpdates){const Le=ce.data.subarray(ae*de/ce.data.BYTES_PER_ELEMENT,(ae+1)*de/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,ce.width,ce.height,1,xe,Pe,Le)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,xe,Pe,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ce.width,ce.height,ce.depth,0,xe,Pe,ce.data);else if(x.isData3DTexture)I?(Me&&t.texStorage3D(n.TEXTURE_3D,ve,De,ce.width,ce.height,ce.depth),_e&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,xe,Pe,ce.data)):t.texImage3D(n.TEXTURE_3D,0,De,ce.width,ce.height,ce.depth,0,xe,Pe,ce.data);else if(x.isFramebufferTexture){if(Me)if(I)t.texStorage2D(n.TEXTURE_2D,ve,De,ce.width,ce.height);else{let de=ce.width,ae=ce.height;for(let Le=0;Le<ve;Le++)t.texImage2D(n.TEXTURE_2D,Le,De,de,ae,0,xe,Pe,null),de>>=1,ae>>=1}}else if(Oe.length>0){if(I&&Me){const de=fe(Oe[0]);t.texStorage2D(n.TEXTURE_2D,ve,De,de.width,de.height)}for(let de=0,ae=Oe.length;de<ae;de++)Ee=Oe[de],I?_e&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,xe,Pe,Ee):t.texImage2D(n.TEXTURE_2D,de,De,xe,Pe,Ee);x.generateMipmaps=!1}else if(I){if(Me){const de=fe(ce);t.texStorage2D(n.TEXTURE_2D,ve,De,de.width,de.height)}_e&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Pe,ce)}else t.texImage2D(n.TEXTURE_2D,0,De,xe,Pe,ce);m(x)&&p(k),ye.__version=z.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function D(v,x,U){if(x.image.length!==6)return;const k=Ye(v,x),Q=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+U);const z=i.get(Q);if(Q.version!==z.__version||k===!0){t.activeTexture(n.TEXTURE0+U);const ye=Je.getPrimaries(Je.workingColorSpace),pe=x.colorSpace===li?null:Je.getPrimaries(x.colorSpace),Ce=x.colorSpace===li||ye===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ae=x.isCompressedTexture||x.image[0].isCompressedTexture,ce=x.image[0]&&x.image[0].isDataTexture,xe=[];for(let ae=0;ae<6;ae++)!Ae&&!ce?xe[ae]=_(x.image[ae],!0,r.maxCubemapSize):xe[ae]=ce?x.image[ae].image:x.image[ae],xe[ae]=H(x,xe[ae]);const Pe=xe[0],De=s.convert(x.format,x.colorSpace),Ee=s.convert(x.type),Oe=E(x.internalFormat,De,Ee,x.colorSpace),I=x.isVideoTexture!==!0,Me=z.__version===void 0||k===!0,_e=Q.dataReady;let ve=L(x,Pe);Fe(n.TEXTURE_CUBE_MAP,x);let de;if(Ae){I&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Oe,Pe.width,Pe.height);for(let ae=0;ae<6;ae++){de=xe[ae].mipmaps;for(let Le=0;Le<de.length;Le++){const Ve=de[Le];x.format!==dn?De!==null?I?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,0,0,Ve.width,Ve.height,De,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,Oe,Ve.width,Ve.height,0,Ve.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,0,0,Ve.width,Ve.height,De,Ee,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,Oe,Ve.width,Ve.height,0,De,Ee,Ve.data)}}}else{if(de=x.mipmaps,I&&Me){de.length>0&&ve++;const ae=fe(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Oe,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ce){I?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,xe[ae].width,xe[ae].height,De,Ee,xe[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Oe,xe[ae].width,xe[ae].height,0,De,Ee,xe[ae].data);for(let Le=0;Le<de.length;Le++){const ut=de[Le].image[ae].image;I?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,0,0,ut.width,ut.height,De,Ee,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,Oe,ut.width,ut.height,0,De,Ee,ut.data)}}else{I?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,De,Ee,xe[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Oe,De,Ee,xe[ae]);for(let Le=0;Le<de.length;Le++){const Ve=de[Le];I?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,0,0,De,Ee,Ve.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,Oe,De,Ee,Ve.image[ae])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),z.__version=Q.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function J(v,x,U,k,Q,z){const ye=s.convert(U.format,U.colorSpace),pe=s.convert(U.type),Ce=E(U.internalFormat,ye,pe,U.colorSpace),Ae=i.get(x),ce=i.get(U);if(ce.__renderTarget=x,!Ae.__hasExternalTextures){const xe=Math.max(1,x.width>>z),Pe=Math.max(1,x.height>>z);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,z,Ce,xe,Pe,x.depth,0,ye,pe,null):t.texImage2D(Q,z,Ce,xe,Pe,0,ye,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,v),j(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,Q,ce.__webglTexture,0,ue(x)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,Q,ce.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(v,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,v),x.depthBuffer){const k=x.depthTexture,Q=k&&k.isDepthTexture?k.type:null,z=A(x.stencilBuffer,Q),ye=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=ue(x);j(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,z,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,z,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,z,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,v)}else{const k=x.textures;for(let Q=0;Q<k.length;Q++){const z=k[Q],ye=s.convert(z.format,z.colorSpace),pe=s.convert(z.type),Ce=E(z.internalFormat,ye,pe,z.colorSpace),Ae=ue(x);U&&j(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Ce,x.width,x.height):j(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,Ce,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function oe(v,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,v),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=i.get(x.depthTexture);k.__renderTarget=x,(!k.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ie(x.depthTexture,0);const Q=k.__webglTexture,z=ue(x);if(x.depthTexture.format===Zr)j(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(x.depthTexture.format===Jr)j(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function be(v){const x=i.get(v),U=v.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==v.depthTexture){const k=v.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),k){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,k.removeEventListener("dispose",Q)};k.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=k}if(v.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const k=v.texture.mipmaps;k&&k.length>0?oe(x.__webglFramebuffer[0],v):oe(x.__webglFramebuffer,v)}else if(U){x.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[k]),x.__webglDepthbuffer[k]===void 0)x.__webglDepthbuffer[k]=n.createRenderbuffer(),re(x.__webglDepthbuffer[k],v,!1);else{const Q=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=x.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,z)}}else{const k=v.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),re(x.__webglDepthbuffer,v,!1);else{const Q=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(v,x,U){const k=i.get(v);x!==void 0&&J(k.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&be(v)}function w(v){const x=v.texture,U=i.get(v),k=i.get(x);v.addEventListener("dispose",P);const Q=v.textures,z=v.isWebGLCubeRenderTarget===!0,ye=Q.length>1;if(ye||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=x.version,a.memory.textures++),z){U.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[pe]=[];for(let Ce=0;Ce<x.mipmaps.length;Ce++)U.__webglFramebuffer[pe][Ce]=n.createFramebuffer()}else U.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let pe=0;pe<x.mipmaps.length;pe++)U.__webglFramebuffer[pe]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(ye)for(let pe=0,Ce=Q.length;pe<Ce;pe++){const Ae=i.get(Q[pe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),a.memory.textures++)}if(v.samples>0&&j(v)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let pe=0;pe<Q.length;pe++){const Ce=Q[pe];U.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[pe]);const Ae=s.convert(Ce.format,Ce.colorSpace),ce=s.convert(Ce.type),xe=E(Ce.internalFormat,Ae,ce,Ce.colorSpace,v.isXRRenderTarget===!0),Pe=ue(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,xe,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,U.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),re(U.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,x);for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ce=0;Ce<x.mipmaps.length;Ce++)J(U.__webglFramebuffer[pe][Ce],v,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce);else J(U.__webglFramebuffer[pe],v,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let pe=0,Ce=Q.length;pe<Ce;pe++){const Ae=Q[pe],ce=i.get(Ae);let xe=n.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(xe=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,ce.__webglTexture),Fe(xe,Ae),J(U.__webglFramebuffer,v,Ae,n.COLOR_ATTACHMENT0+pe,xe,0),m(Ae)&&p(xe)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(pe=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,k.__webglTexture),Fe(pe,x),x.mipmaps&&x.mipmaps.length>0)for(let Ce=0;Ce<x.mipmaps.length;Ce++)J(U.__webglFramebuffer[Ce],v,x,n.COLOR_ATTACHMENT0,pe,Ce);else J(U.__webglFramebuffer,v,x,n.COLOR_ATTACHMENT0,pe,0);m(x)&&p(pe),t.unbindTexture()}v.depthBuffer&&be(v)}function F(v){const x=v.textures;for(let U=0,k=x.length;U<k;U++){const Q=x[U];if(m(Q)){const z=y(v),ye=i.get(Q).__webglTexture;t.bindTexture(z,ye),p(z),t.unbindTexture()}}}const S=[],q=[];function G(v){if(v.samples>0){if(j(v)===!1){const x=v.textures,U=v.width,k=v.height;let Q=n.COLOR_BUFFER_BIT;const z=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(v),pe=x.length>1;if(pe)for(let Ae=0;Ae<x.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const Ce=v.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ae=0;Ae<x.length;Ae++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Ae]);const ce=i.get(x[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,U,k,0,0,U,k,Q,n.NEAREST),l===!0&&(S.length=0,q.length=0,S.push(n.COLOR_ATTACHMENT0+Ae),v.depthBuffer&&v.resolveDepthBuffer===!1&&(S.push(z),q.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,S))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Ae=0;Ae<x.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Ae]);const ce=i.get(x[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&l){const x=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ue(v){return Math.min(r.maxSamples,v.samples)}function j(v){const x=i.get(v);return v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function le(v){const x=a.render.frame;u.get(v)!==x&&(u.set(v,x),v.update())}function H(v,x){const U=v.colorSpace,k=v.format,Q=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||U!==dr&&U!==li&&(Je.getTransfer(U)===st?(k!==dn||Q!==qn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",U)),x}function fe(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(c.width=v.naturalWidth||v.width,c.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(c.width=v.displayWidth,c.height=v.displayHeight):(c.width=v.width,c.height=v.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=X,this.setTexture2D=ie,this.setTexture2DArray=te,this.setTexture3D=ne,this.setTextureCube=V,this.rebindTextures=R,this.setupRenderTarget=w,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=J,this.useMultisampledRTT=j}function AS(n,e){function t(i,r=li){let s;const a=Je.getTransfer(r);if(i===qn)return n.UNSIGNED_BYTE;if(i===ql)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ad)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===od)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===rd)return n.BYTE;if(i===sd)return n.SHORT;if(i===jr)return n.UNSIGNED_SHORT;if(i===Xl)return n.INT;if(i===Ii)return n.UNSIGNED_INT;if(i===Vn)return n.FLOAT;if(i===gr)return n.HALF_FLOAT;if(i===ld)return n.ALPHA;if(i===cd)return n.RGB;if(i===dn)return n.RGBA;if(i===Zr)return n.DEPTH_COMPONENT;if(i===Jr)return n.DEPTH_STENCIL;if(i===ud)return n.RED;if(i===Kl)return n.RED_INTEGER;if(i===jl)return n.RG;if(i===$l)return n.RG_INTEGER;if(i===Zl)return n.RGBA_INTEGER;if(i===Vs||i===Gs||i===Hs||i===ks)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ks)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vo||i===Go||i===Ho||i===ko)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Go)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ho)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ko)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wo||i===Xo||i===qo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wo||i===Xo)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===qo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yo||i===Ko||i===jo||i===$o||i===Zo||i===Jo||i===Qo||i===el||i===tl||i===nl||i===il||i===rl||i===sl||i===al)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ko)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$o)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===el)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===il)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===al)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ol||i===ll||i===cl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ol)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ll)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ul||i===fl||i===dl||i===hl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ul)return s.COMPRESSED_RED_RGTC1_EXT;if(i===fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const RS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new yd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new jn({vertexShader:RS,fragmentShader:wS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kn(new ma(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PS extends _r{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",m=new CS,p={},y=t.getContextAttributes();let E=null,A=null;const L=[],C=[],P=new at;let W=null;const T=new tn;T.viewport=new _t;const b=new tn;b.viewport=new _t;const N=[T,b],X=new j0;let Z=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let D=L[ee];return D===void 0&&(D=new eo,L[ee]=D),D.getTargetRaySpace()},this.getControllerGrip=function(ee){let D=L[ee];return D===void 0&&(D=new eo,L[ee]=D),D.getGripSpace()},this.getHand=function(ee){let D=L[ee];return D===void 0&&(D=new eo,L[ee]=D),D.getHandSpace()};function ie(ee){const D=C.indexOf(ee.inputSource);if(D===-1)return;const J=L[D];J!==void 0&&(J.update(ee.inputSource,ee.frame,c||a),J.dispatchEvent({type:ee.type,data:ee.inputSource}))}function te(){r.removeEventListener("select",ie),r.removeEventListener("selectstart",ie),r.removeEventListener("selectend",ie),r.removeEventListener("squeeze",ie),r.removeEventListener("squeezestart",ie),r.removeEventListener("squeezeend",ie),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",ne);for(let ee=0;ee<L.length;ee++){const D=C[ee];D!==null&&(C[ee]=null,L[ee].disconnect(D))}Z=null,se=null,m.reset();for(const ee in p)delete p[ee];e.setRenderTarget(E),h=null,d=null,f=null,r=null,A=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(W),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",ie),r.addEventListener("selectstart",ie),r.addEventListener("selectend",ie),r.addEventListener("squeeze",ie),r.addEventListener("squeezestart",ie),r.addEventListener("squeezeend",ie),r.addEventListener("end",te),r.addEventListener("inputsourceschange",ne),y.xrCompatible!==!0&&await t.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,re=null,oe=null;y.depth&&(oe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=y.stencil?Jr:Zr,re=y.stencil?$r:Ii);const be={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(be),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Ui(d.textureWidth,d.textureHeight,{format:dn,type:qn,depthTexture:new Ed(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const J={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),A=new Ui(h.framebufferWidth,h.framebufferHeight,{format:dn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(ee){for(let D=0;D<ee.removed.length;D++){const J=ee.removed[D],re=C.indexOf(J);re>=0&&(C[re]=null,L[re].disconnect(J))}for(let D=0;D<ee.added.length;D++){const J=ee.added[D];let re=C.indexOf(J);if(re===-1){for(let be=0;be<L.length;be++)if(be>=C.length){C.push(J),re=be;break}else if(C[be]===null){C[be]=J,re=be;break}if(re===-1)break}const oe=L[re];oe&&oe.connect(J)}}const V=new Y,he=new Y;function me(ee,D,J){V.setFromMatrixPosition(D.matrixWorld),he.setFromMatrixPosition(J.matrixWorld);const re=V.distanceTo(he),oe=D.projectionMatrix.elements,be=J.projectionMatrix.elements,R=oe[14]/(oe[10]-1),w=oe[14]/(oe[10]+1),F=(oe[9]+1)/oe[5],S=(oe[9]-1)/oe[5],q=(oe[8]-1)/oe[0],G=(be[8]+1)/be[0],ue=R*q,j=R*G,le=re/(-q+G),H=le*-q;if(D.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(H),ee.translateZ(le),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),oe[10]===-1)ee.projectionMatrix.copy(D.projectionMatrix),ee.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{const fe=R+le,v=w+le,x=ue-H,U=j+(re-H),k=F*w/v*fe,Q=S*w/v*fe;ee.projectionMatrix.makePerspective(x,U,k,Q,fe,v),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function we(ee,D){D===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(D.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let D=ee.near,J=ee.far;m.texture!==null&&(m.depthNear>0&&(D=m.depthNear),m.depthFar>0&&(J=m.depthFar)),X.near=b.near=T.near=D,X.far=b.far=T.far=J,(Z!==X.near||se!==X.far)&&(r.updateRenderState({depthNear:X.near,depthFar:X.far}),Z=X.near,se=X.far),X.layers.mask=ee.layers.mask|6,T.layers.mask=X.layers.mask&3,b.layers.mask=X.layers.mask&5;const re=ee.parent,oe=X.cameras;we(X,re);for(let be=0;be<oe.length;be++)we(oe[be],re);oe.length===2?me(X,T,b):X.projectionMatrix.copy(T.projectionMatrix),Fe(ee,X,re)};function Fe(ee,D,J){J===null?ee.matrix.copy(D.matrixWorld):(ee.matrix.copy(J.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(D.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(D.projectionMatrix),ee.projectionMatrixInverse.copy(D.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=pl*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(ee){return p[ee]};let Ye=null;function $e(ee,D){if(u=D.getViewerPose(c||a),g=D,u!==null){const J=u.views;h!==null&&(e.setRenderTargetFramebuffer(A,h.framebuffer),e.setRenderTarget(A));let re=!1;J.length!==X.cameras.length&&(X.cameras.length=0,re=!0);for(let w=0;w<J.length;w++){const F=J[w];let S=null;if(h!==null)S=h.getViewport(F);else{const G=f.getViewSubImage(d,F);S=G.viewport,w===0&&(e.setRenderTargetTextures(A,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(A))}let q=N[w];q===void 0&&(q=new tn,q.layers.enable(w),q.viewport=new _t,N[w]=q),q.matrix.fromArray(F.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(F.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(S.x,S.y,S.width,S.height),w===0&&(X.matrix.copy(q.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),re===!0&&X.cameras.push(q)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const w=f.getDepthInformation(J[0]);w&&w.isValid&&w.texture&&m.init(w,r.renderState)}if(oe&&oe.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let w=0;w<J.length;w++){const F=J[w].camera;if(F){let S=p[F];S||(S=new yd,p[F]=S);const q=f.getCameraImage(F);S.sourceTexture=q}}}}for(let J=0;J<L.length;J++){const re=C[J],oe=L[J];re!==null&&oe!==void 0&&oe.update(re,D,c||a)}Ye&&Ye(ee,D),D.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:D}),g=null}const je=new Td;je.setAnimationLoop($e),this.setAnimationLoop=function(ee){Ye=ee},this.dispose=function(){}}}const yi=new Yn,DS=new St;function LS(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,vd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,E,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,A)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),E=y.envMap,A=y.envMapRotation;E&&(m.envMap.value=E,yi.copy(A),yi.x*=-1,yi.y*=-1,yi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),m.envMapRotation.value.setFromMatrix4(DS.makeRotationFromEuler(yi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function IS(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const A=E.program;i.uniformBlockBinding(y,A)}function c(y,E){let A=r[y.id];A===void 0&&(g(y),A=u(y),r[y.id]=A,y.addEventListener("dispose",m));const L=E.program;i.updateUBOMapping(y,L);const C=e.render.frame;s[y.id]!==C&&(d(y),s[y.id]=C)}function u(y){const E=f();y.__bindingPointIndex=E;const A=n.createBuffer(),L=y.__size,C=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,L,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,A),A}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const E=r[y.id],A=y.uniforms,L=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let C=0,P=A.length;C<P;C++){const W=Array.isArray(A[C])?A[C]:[A[C]];for(let T=0,b=W.length;T<b;T++){const N=W[T];if(h(N,C,T,L)===!0){const X=N.__offset,Z=Array.isArray(N.value)?N.value:[N.value];let se=0;for(let ie=0;ie<Z.length;ie++){const te=Z[ie],ne=_(te);typeof te=="number"||typeof te=="boolean"?(N.__data[0]=te,n.bufferSubData(n.UNIFORM_BUFFER,X+se,N.__data)):te.isMatrix3?(N.__data[0]=te.elements[0],N.__data[1]=te.elements[1],N.__data[2]=te.elements[2],N.__data[3]=0,N.__data[4]=te.elements[3],N.__data[5]=te.elements[4],N.__data[6]=te.elements[5],N.__data[7]=0,N.__data[8]=te.elements[6],N.__data[9]=te.elements[7],N.__data[10]=te.elements[8],N.__data[11]=0):(te.toArray(N.__data,se),se+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,E,A,L){const C=y.value,P=E+"_"+A;if(L[P]===void 0)return typeof C=="number"||typeof C=="boolean"?L[P]=C:L[P]=C.clone(),!0;{const W=L[P];if(typeof C=="number"||typeof C=="boolean"){if(W!==C)return L[P]=C,!0}else if(W.equals(C)===!1)return W.copy(C),!0}return!1}function g(y){const E=y.uniforms;let A=0;const L=16;for(let P=0,W=E.length;P<W;P++){const T=Array.isArray(E[P])?E[P]:[E[P]];for(let b=0,N=T.length;b<N;b++){const X=T[b],Z=Array.isArray(X.value)?X.value:[X.value];for(let se=0,ie=Z.length;se<ie;se++){const te=Z[se],ne=_(te),V=A%L,he=V%ne.boundary,me=V+he;A+=he,me!==0&&L-me<ne.storage&&(A+=L-me),X.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=A,A+=ne.storage}}}const C=A%L;return C>0&&(A+=L-C),y.__size=A,y.__cache={},this}function _(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ge("WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}const US=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Ln=null;function NS(){return Ln===null&&(Ln=new B0(US,32,32,jl,gr),Ln.minFilter=nn,Ln.magFilter=nn,Ln.wrapS=zn,Ln.wrapT=zn,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}class FS{constructor(e={}){const{canvas:t=u0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const g=new Set([Zl,$l,Kl]),_=new Set([qn,Ii,jr,$r,ql,Yl]),m=new Uint32Array(4),p=new Int32Array(4);let y=null,E=null;const A=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1;this._outputColorSpace=en;let W=0,T=0,b=null,N=-1,X=null;const Z=new _t,se=new _t;let ie=null;const te=new nt(0);let ne=0,V=t.width,he=t.height,me=1,we=null,Fe=null;const Ye=new _t(0,0,V,he),$e=new _t(0,0,V,he);let je=!1;const ee=new bd;let D=!1,J=!1;const re=new St,oe=new Y,be=new _t,R={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function F(){return b===null?me:1}let S=i;function q(M,O){return t.getContext(M,O)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wl}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",Le,!1),S===null){const O="webgl2";if(S=q(O,M),S===null)throw q(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw M("WebGLRenderer: "+M.message),M}let G,ue,j,le,H,fe,v,x,U,k,Q,z,ye,pe,Ce,Ae,ce,xe,Pe,De,Ee,Oe,I,Me;function _e(){G=new W_(S),G.init(),Oe=new AS(S,G),ue=new N_(S,G,e,Oe),j=new yS(S,G),ue.reversedDepthBuffer&&d&&j.buffers.depth.setReversed(!0),le=new Y_(S),H=new fS,fe=new TS(S,G,j,H,ue,Oe,le),v=new O_(C),x=new k_(C),U=new Z0(S),I=new I_(S,U),k=new X_(S,U,le,I),Q=new j_(S,k,U,le),Pe=new K_(S,ue,fe),Ae=new F_(H),z=new uS(C,v,x,G,ue,I,Ae),ye=new LS(C,H),pe=new hS,Ce=new vS(G),xe=new L_(C,v,x,j,Q,h,l),ce=new bS(C,Q,ue),Me=new IS(S,le,ue,j),De=new U_(S,G,le),Ee=new q_(S,G,le),le.programs=z.programs,C.capabilities=ue,C.extensions=G,C.properties=H,C.renderLists=pe,C.shadowMap=ce,C.state=j,C.info=le}_e();const ve=new PS(C,S);this.xr=ve,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const M=G.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=G.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(M){M!==void 0&&(me=M,this.setSize(V,he,!1))},this.getSize=function(M){return M.set(V,he)},this.setSize=function(M,O,K=!0){if(ve.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}V=M,he=O,t.width=Math.floor(M*me),t.height=Math.floor(O*me),K===!0&&(t.style.width=M+"px",t.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(V*me,he*me).floor()},this.setDrawingBufferSize=function(M,O,K){V=M,he=O,me=K,t.width=Math.floor(M*K),t.height=Math.floor(O*K),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(Z)},this.getViewport=function(M){return M.copy(Ye)},this.setViewport=function(M,O,K,$){M.isVector4?Ye.set(M.x,M.y,M.z,M.w):Ye.set(M,O,K,$),j.viewport(Z.copy(Ye).multiplyScalar(me).round())},this.getScissor=function(M){return M.copy($e)},this.setScissor=function(M,O,K,$){M.isVector4?$e.set(M.x,M.y,M.z,M.w):$e.set(M,O,K,$),j.scissor(se.copy($e).multiplyScalar(me).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(M){j.setScissorTest(je=M)},this.setOpaqueSort=function(M){we=M},this.setTransparentSort=function(M){Fe=M},this.getClearColor=function(M){return M.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,K=!0){let $=0;if(M){let B=!1;if(b!==null){const ge=b.texture.format;B=g.has(ge)}if(B){const ge=b.texture.type,Te=_.has(ge),Ie=xe.getClearColor(),Re=xe.getClearAlpha(),Be=Ie.r,ze=Ie.g,Ue=Ie.b;Te?(m[0]=Be,m[1]=ze,m[2]=Ue,m[3]=Re,S.clearBufferuiv(S.COLOR,0,m)):(p[0]=Be,p[1]=ze,p[2]=Ue,p[3]=Re,S.clearBufferiv(S.COLOR,0,p))}else $|=S.COLOR_BUFFER_BIT}O&&($|=S.DEPTH_BUFFER_BIT),K&&($|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),xe.dispose(),pe.dispose(),Ce.dispose(),H.dispose(),v.dispose(),x.dispose(),Q.dispose(),I.dispose(),Me.dispose(),z.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",rc),ve.removeEventListener("sessionend",sc),mi.stop()};function de(M){M.preventDefault(),Yc("WebGLRenderer: Context Lost."),P=!0}function ae(){Yc("WebGLRenderer: Context Restored."),P=!1;const M=le.autoReset,O=ce.enabled,K=ce.autoUpdate,$=ce.needsUpdate,B=ce.type;_e(),le.autoReset=M,ce.enabled=O,ce.autoUpdate=K,ce.needsUpdate=$,ce.type=B}function Le(M){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ve(M){const O=M.target;O.removeEventListener("dispose",Ve),ut(O)}function ut(M){it(M),H.remove(M)}function it(M){const O=H.get(M).programs;O!==void 0&&(O.forEach(function(K){z.releaseProgram(K)}),M.isShaderMaterial&&z.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,K,$,B,ge){O===null&&(O=R);const Te=B.isMesh&&B.matrixWorld.determinant()<0,Ie=Wd(M,O,K,$,B);j.setMaterial($,Te);let Re=K.index,Be=1;if($.wireframe===!0){if(Re=k.getWireframeAttribute(K),Re===void 0)return;Be=2}const ze=K.drawRange,Ue=K.attributes.position;let qe=ze.start*Be,rt=(ze.start+ze.count)*Be;ge!==null&&(qe=Math.max(qe,ge.start*Be),rt=Math.min(rt,(ge.start+ge.count)*Be)),Re!==null?(qe=Math.max(qe,0),rt=Math.min(rt,Re.count)):Ue!=null&&(qe=Math.max(qe,0),rt=Math.min(rt,Ue.count));const ht=rt-qe;if(ht<0||ht===1/0)return;I.setup(B,$,Ie,K,Re);let pt,ot=De;if(Re!==null&&(pt=U.get(Re),ot=Ee,ot.setIndex(pt)),B.isMesh)$.wireframe===!0?(j.setLineWidth($.wireframeLinewidth*F()),ot.setMode(S.LINES)):ot.setMode(S.TRIANGLES);else if(B.isLine){let Ne=$.linewidth;Ne===void 0&&(Ne=1),j.setLineWidth(Ne*F()),B.isLineSegments?ot.setMode(S.LINES):B.isLineLoop?ot.setMode(S.LINE_LOOP):ot.setMode(S.LINE_STRIP)}else B.isPoints?ot.setMode(S.POINTS):B.isSprite&&ot.setMode(S.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)es("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))ot.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ne=B._multiDrawStarts,ft=B._multiDrawCounts,Ze=B._multiDrawCount,qt=Re?U.get(Re).bytesPerElement:1,Fi=H.get($).currentProgram.getUniforms();for(let Yt=0;Yt<Ze;Yt++)Fi.setValue(S,"_gl_DrawID",Yt),ot.render(Ne[Yt]/qt,ft[Yt])}else if(B.isInstancedMesh)ot.renderInstances(qe,ht,B.count);else if(K.isInstancedBufferGeometry){const Ne=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ft=Math.min(K.instanceCount,Ne);ot.renderInstances(qe,ht,ft)}else ot.render(qe,ht)};function xn(M,O,K){M.transparent===!0&&M.side===Bn&&M.forceSinglePass===!1?(M.side=Wt,M.needsUpdate=!0,cs(M,O,K),M.side=pi,M.needsUpdate=!0,cs(M,O,K),M.side=Bn):cs(M,O,K)}this.compile=function(M,O,K=null){K===null&&(K=M),E=Ce.get(K),E.init(O),L.push(E),K.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),M!==K&&M.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),E.setupLights();const $=new Set;return M.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ge=B.material;if(ge)if(Array.isArray(ge))for(let Te=0;Te<ge.length;Te++){const Ie=ge[Te];xn(Ie,K,B),$.add(Ie)}else xn(ge,K,B),$.add(ge)}),E=L.pop(),$},this.compileAsync=function(M,O,K=null){const $=this.compile(M,O,K);return new Promise(B=>{function ge(){if($.forEach(function(Te){H.get(Te).currentProgram.isReady()&&$.delete(Te)}),$.size===0){B(M);return}setTimeout(ge,10)}G.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let sn=null;function kd(M){sn&&sn(M)}function rc(){mi.stop()}function sc(){mi.start()}const mi=new Td;mi.setAnimationLoop(kd),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(M){sn=M,ve.setAnimationLoop(M),M===null?mi.stop():mi.start()},ve.addEventListener("sessionstart",rc),ve.addEventListener("sessionend",sc),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(O),O=ve.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,O,b),E=Ce.get(M,L.length),E.init(O),L.push(E),re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ee.setFromProjectionMatrix(re,bn,O.reversedDepth),J=this.localClippingEnabled,D=Ae.init(this.clippingPlanes,J),y=pe.get(M,A.length),y.init(),A.push(y),ve.enabled===!0&&ve.isPresenting===!0){const ge=C.xr.getDepthSensingMesh();ge!==null&&va(ge,O,-1/0,C.sortObjects)}va(M,O,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(we,Fe),w=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,w&&xe.addToRenderList(y,M),this.info.render.frame++,D===!0&&Ae.beginShadows();const K=E.state.shadowsArray;ce.render(K,M,O),D===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=y.opaque,B=y.transmissive;if(E.setupLights(),O.isArrayCamera){const ge=O.cameras;if(B.length>0)for(let Te=0,Ie=ge.length;Te<Ie;Te++){const Re=ge[Te];oc($,B,M,Re)}w&&xe.render(M);for(let Te=0,Ie=ge.length;Te<Ie;Te++){const Re=ge[Te];ac(y,M,Re,Re.viewport)}}else B.length>0&&oc($,B,M,O),w&&xe.render(M),ac(y,M,O);b!==null&&T===0&&(fe.updateMultisampleRenderTarget(b),fe.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(C,M,O),I.resetDefaultState(),N=-1,X=null,L.pop(),L.length>0?(E=L[L.length-1],D===!0&&Ae.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?y=A[A.length-1]:y=null};function va(M,O,K,$){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)K=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ee.intersectsSprite(M)){$&&be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(re);const Te=Q.update(M),Ie=M.material;Ie.visible&&y.push(M,Te,Ie,K,be.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ee.intersectsObject(M))){const Te=Q.update(M),Ie=M.material;if($&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),be.copy(M.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),be.copy(Te.boundingSphere.center)),be.applyMatrix4(M.matrixWorld).applyMatrix4(re)),Array.isArray(Ie)){const Re=Te.groups;for(let Be=0,ze=Re.length;Be<ze;Be++){const Ue=Re[Be],qe=Ie[Ue.materialIndex];qe&&qe.visible&&y.push(M,Te,qe,K,be.z,Ue)}}else Ie.visible&&y.push(M,Te,Ie,K,be.z,null)}}const ge=M.children;for(let Te=0,Ie=ge.length;Te<Ie;Te++)va(ge[Te],O,K,$)}function ac(M,O,K,$){const{opaque:B,transmissive:ge,transparent:Te}=M;E.setupLightsView(K),D===!0&&Ae.setGlobalState(C.clippingPlanes,K),$&&j.viewport(Z.copy($)),B.length>0&&ls(B,O,K),ge.length>0&&ls(ge,O,K),Te.length>0&&ls(Te,O,K),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function oc(M,O,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;E.state.transmissionRenderTarget[$.id]===void 0&&(E.state.transmissionRenderTarget[$.id]=new Ui(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?gr:qn,minFilter:Ci,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ge=E.state.transmissionRenderTarget[$.id],Te=$.viewport||Z;ge.setSize(Te.z*C.transmissionResolutionScale,Te.w*C.transmissionResolutionScale);const Ie=C.getRenderTarget(),Re=C.getActiveCubeFace(),Be=C.getActiveMipmapLevel();C.setRenderTarget(ge),C.getClearColor(te),ne=C.getClearAlpha(),ne<1&&C.setClearColor(16777215,.5),C.clear(),w&&xe.render(K);const ze=C.toneMapping;C.toneMapping=fi;const Ue=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),E.setupLightsView($),D===!0&&Ae.setGlobalState(C.clippingPlanes,$),ls(M,K,$),fe.updateMultisampleRenderTarget(ge),fe.updateRenderTargetMipmap(ge),G.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let rt=0,ht=O.length;rt<ht;rt++){const pt=O[rt],{object:ot,geometry:Ne,material:ft,group:Ze}=pt;if(ft.side===Bn&&ot.layers.test($.layers)){const qt=ft.side;ft.side=Wt,ft.needsUpdate=!0,lc(ot,K,$,Ne,ft,Ze),ft.side=qt,ft.needsUpdate=!0,qe=!0}}qe===!0&&(fe.updateMultisampleRenderTarget(ge),fe.updateRenderTargetMipmap(ge))}C.setRenderTarget(Ie,Re,Be),C.setClearColor(te,ne),Ue!==void 0&&($.viewport=Ue),C.toneMapping=ze}function ls(M,O,K){const $=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ge=M.length;B<ge;B++){const Te=M[B],{object:Ie,geometry:Re,group:Be}=Te;let ze=Te.material;ze.allowOverride===!0&&$!==null&&(ze=$),Ie.layers.test(K.layers)&&lc(Ie,O,K,Re,ze,Be)}}function lc(M,O,K,$,B,ge){M.onBeforeRender(C,O,K,$,B,ge),M.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(C,O,K,$,M,ge),B.transparent===!0&&B.side===Bn&&B.forceSinglePass===!1?(B.side=Wt,B.needsUpdate=!0,C.renderBufferDirect(K,O,$,B,M,ge),B.side=pi,B.needsUpdate=!0,C.renderBufferDirect(K,O,$,B,M,ge),B.side=Bn):C.renderBufferDirect(K,O,$,B,M,ge),M.onAfterRender(C,O,K,$,B,ge)}function cs(M,O,K){O.isScene!==!0&&(O=R);const $=H.get(M),B=E.state.lights,ge=E.state.shadowsArray,Te=B.state.version,Ie=z.getParameters(M,B.state,ge,O,K),Re=z.getProgramCacheKey(Ie);let Be=$.programs;$.environment=M.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(M.isMeshStandardMaterial?x:v).get(M.envMap||$.environment),$.envMapRotation=$.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Be===void 0&&(M.addEventListener("dispose",Ve),Be=new Map,$.programs=Be);let ze=Be.get(Re);if(ze!==void 0){if($.currentProgram===ze&&$.lightsStateVersion===Te)return uc(M,Ie),ze}else Ie.uniforms=z.getUniforms(M),M.onBeforeCompile(Ie,C),ze=z.acquireProgram(Ie,Re),Be.set(Re,ze),$.uniforms=Ie.uniforms;const Ue=$.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=Ae.uniform),uc(M,Ie),$.needsLights=qd(M),$.lightsStateVersion=Te,$.needsLights&&(Ue.ambientLightColor.value=B.state.ambient,Ue.lightProbe.value=B.state.probe,Ue.directionalLights.value=B.state.directional,Ue.directionalLightShadows.value=B.state.directionalShadow,Ue.spotLights.value=B.state.spot,Ue.spotLightShadows.value=B.state.spotShadow,Ue.rectAreaLights.value=B.state.rectArea,Ue.ltc_1.value=B.state.rectAreaLTC1,Ue.ltc_2.value=B.state.rectAreaLTC2,Ue.pointLights.value=B.state.point,Ue.pointLightShadows.value=B.state.pointShadow,Ue.hemisphereLights.value=B.state.hemi,Ue.directionalShadowMap.value=B.state.directionalShadowMap,Ue.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ue.spotShadowMap.value=B.state.spotShadowMap,Ue.spotLightMatrix.value=B.state.spotLightMatrix,Ue.spotLightMap.value=B.state.spotLightMap,Ue.pointShadowMap.value=B.state.pointShadowMap,Ue.pointShadowMatrix.value=B.state.pointShadowMatrix),$.currentProgram=ze,$.uniformsList=null,ze}function cc(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=Xs.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function uc(M,O){const K=H.get(M);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function Wd(M,O,K,$,B){O.isScene!==!0&&(O=R),fe.resetTextureUnits();const ge=O.fog,Te=$.isMeshStandardMaterial?O.environment:null,Ie=b===null?C.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:dr,Re=($.isMeshStandardMaterial?x:v).get($.envMap||Te),Be=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ze=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ue=!!K.morphAttributes.position,qe=!!K.morphAttributes.normal,rt=!!K.morphAttributes.color;let ht=fi;$.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ht=C.toneMapping);const pt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ot=pt!==void 0?pt.length:0,Ne=H.get($),ft=E.state.lights;if(D===!0&&(J===!0||M!==X)){const Lt=M===X&&$.id===N;Ae.setState($,M,Lt)}let Ze=!1;$.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==ft.state.version||Ne.outputColorSpace!==Ie||B.isBatchedMesh&&Ne.batching===!1||!B.isBatchedMesh&&Ne.batching===!0||B.isBatchedMesh&&Ne.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ne.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ne.instancing===!1||!B.isInstancedMesh&&Ne.instancing===!0||B.isSkinnedMesh&&Ne.skinning===!1||!B.isSkinnedMesh&&Ne.skinning===!0||B.isInstancedMesh&&Ne.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ne.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ne.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ne.instancingMorph===!1&&B.morphTexture!==null||Ne.envMap!==Re||$.fog===!0&&Ne.fog!==ge||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Ae.numPlanes||Ne.numIntersection!==Ae.numIntersection)||Ne.vertexAlphas!==Be||Ne.vertexTangents!==ze||Ne.morphTargets!==Ue||Ne.morphNormals!==qe||Ne.morphColors!==rt||Ne.toneMapping!==ht||Ne.morphTargetsCount!==ot)&&(Ze=!0):(Ze=!0,Ne.__version=$.version);let qt=Ne.currentProgram;Ze===!0&&(qt=cs($,O,B));let Fi=!1,Yt=!1,Mr=!1;const dt=qt.getUniforms(),Vt=Ne.uniforms;if(j.useProgram(qt.program)&&(Fi=!0,Yt=!0,Mr=!0),$.id!==N&&(N=$.id,Yt=!0),Fi||X!==M){j.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),dt.setValue(S,"projectionMatrix",M.projectionMatrix),dt.setValue(S,"viewMatrix",M.matrixWorldInverse);const Gt=dt.map.cameraPosition;Gt!==void 0&&Gt.setValue(S,oe.setFromMatrixPosition(M.matrixWorld)),ue.logarithmicDepthBuffer&&dt.setValue(S,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&dt.setValue(S,"isOrthographic",M.isOrthographicCamera===!0),X!==M&&(X=M,Yt=!0,Mr=!0)}if(B.isSkinnedMesh){dt.setOptional(S,B,"bindMatrix"),dt.setOptional(S,B,"bindMatrixInverse");const Lt=B.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),dt.setValue(S,"boneTexture",Lt.boneTexture,fe))}B.isBatchedMesh&&(dt.setOptional(S,B,"batchingTexture"),dt.setValue(S,"batchingTexture",B._matricesTexture,fe),dt.setOptional(S,B,"batchingIdTexture"),dt.setValue(S,"batchingIdTexture",B._indirectTexture,fe),dt.setOptional(S,B,"batchingColorTexture"),B._colorsTexture!==null&&dt.setValue(S,"batchingColorTexture",B._colorsTexture,fe));const Jt=K.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&Pe.update(B,K,qt),(Yt||Ne.receiveShadow!==B.receiveShadow)&&(Ne.receiveShadow=B.receiveShadow,dt.setValue(S,"receiveShadow",B.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Vt.envMap.value=Re,Vt.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&O.environment!==null&&(Vt.envMapIntensity.value=O.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=NS()),Yt&&(dt.setValue(S,"toneMappingExposure",C.toneMappingExposure),Ne.needsLights&&Xd(Vt,Mr),ge&&$.fog===!0&&ye.refreshFogUniforms(Vt,ge),ye.refreshMaterialUniforms(Vt,$,me,he,E.state.transmissionRenderTarget[M.id]),Xs.upload(S,cc(Ne),Vt,fe)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Xs.upload(S,cc(Ne),Vt,fe),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&dt.setValue(S,"center",B.center),dt.setValue(S,"modelViewMatrix",B.modelViewMatrix),dt.setValue(S,"normalMatrix",B.normalMatrix),dt.setValue(S,"modelMatrix",B.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Lt=$.uniformsGroups;for(let Gt=0,Sa=Lt.length;Gt<Sa;Gt++){const xi=Lt[Gt];Me.update(xi,qt),Me.bind(xi,qt)}}return qt}function Xd(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function qd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,O,K){const $=H.get(M);$.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),H.get(M.texture).__webglTexture=O,H.get(M.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){const K=H.get(M);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0};const Yd=S.createFramebuffer();this.setRenderTarget=function(M,O=0,K=0){b=M,W=O,T=K;let $=!0,B=null,ge=!1,Te=!1;if(M){const Re=H.get(M);if(Re.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(S.FRAMEBUFFER,null),$=!1;else if(Re.__webglFramebuffer===void 0)fe.setupRenderTarget(M);else if(Re.__hasExternalTextures)fe.rebindTextures(M,H.get(M.texture).__webglTexture,H.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ue=M.depthTexture;if(Re.__boundDepthTexture!==Ue){if(Ue!==null&&H.has(Ue)&&(M.width!==Ue.image.width||M.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(M)}}const Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Te=!0);const ze=H.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?B=ze[O][K]:B=ze[O],ge=!0):M.samples>0&&fe.useMultisampledRTT(M)===!1?B=H.get(M).__webglMultisampledFramebuffer:Array.isArray(ze)?B=ze[K]:B=ze,Z.copy(M.viewport),se.copy(M.scissor),ie=M.scissorTest}else Z.copy(Ye).multiplyScalar(me).floor(),se.copy($e).multiplyScalar(me).floor(),ie=je;if(K!==0&&(B=Yd),j.bindFramebuffer(S.FRAMEBUFFER,B)&&$&&j.drawBuffers(M,B),j.viewport(Z),j.scissor(se),j.setScissorTest(ie),ge){const Re=H.get(M.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+O,Re.__webglTexture,K)}else if(Te){const Re=O;for(let Be=0;Be<M.textures.length;Be++){const ze=H.get(M.textures[Be]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+Be,ze.__webglTexture,K,Re)}}else if(M!==null&&K!==0){const Re=H.get(M.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Re.__webglTexture,K)}N=-1},this.readRenderTargetPixels=function(M,O,K,$,B,ge,Te,Ie=0){if(!(M&&M.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){j.bindFramebuffer(S.FRAMEBUFFER,Re);try{const Be=M.textures[Ie],ze=Be.format,Ue=Be.type;if(!ue.textureFormatReadable(ze)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Ue)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-$&&K>=0&&K<=M.height-B&&(M.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Ie),S.readPixels(O,K,$,B,Oe.convert(ze),Oe.convert(Ue),ge))}finally{const Be=b!==null?H.get(b).__webglFramebuffer:null;j.bindFramebuffer(S.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(M,O,K,$,B,ge,Te,Ie=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re)if(O>=0&&O<=M.width-$&&K>=0&&K<=M.height-B){j.bindFramebuffer(S.FRAMEBUFFER,Re);const Be=M.textures[Ie],ze=Be.format,Ue=Be.type;if(!ue.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,qe),S.bufferData(S.PIXEL_PACK_BUFFER,ge.byteLength,S.STREAM_READ),M.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Ie),S.readPixels(O,K,$,B,Oe.convert(ze),Oe.convert(Ue),0);const rt=b!==null?H.get(b).__webglFramebuffer:null;j.bindFramebuffer(S.FRAMEBUFFER,rt);const ht=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await f0(S,ht,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,qe),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,ge),S.deleteBuffer(qe),S.deleteSync(ht),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,K=0){const $=Math.pow(2,-K),B=Math.floor(M.image.width*$),ge=Math.floor(M.image.height*$),Te=O!==null?O.x:0,Ie=O!==null?O.y:0;fe.setTexture2D(M,0),S.copyTexSubImage2D(S.TEXTURE_2D,K,0,0,Te,Ie,B,ge),j.unbindTexture()};const Kd=S.createFramebuffer(),jd=S.createFramebuffer();this.copyTextureToTexture=function(M,O,K=null,$=null,B=0,ge=null){ge===null&&(B!==0?(es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=B,B=0):ge=0);let Te,Ie,Re,Be,ze,Ue,qe,rt,ht;const pt=M.isCompressedTexture?M.mipmaps[ge]:M.image;if(K!==null)Te=K.max.x-K.min.x,Ie=K.max.y-K.min.y,Re=K.isBox3?K.max.z-K.min.z:1,Be=K.min.x,ze=K.min.y,Ue=K.isBox3?K.min.z:0;else{const Jt=Math.pow(2,-B);Te=Math.floor(pt.width*Jt),Ie=Math.floor(pt.height*Jt),M.isDataArrayTexture?Re=pt.depth:M.isData3DTexture?Re=Math.floor(pt.depth*Jt):Re=1,Be=0,ze=0,Ue=0}$!==null?(qe=$.x,rt=$.y,ht=$.z):(qe=0,rt=0,ht=0);const ot=Oe.convert(O.format),Ne=Oe.convert(O.type);let ft;O.isData3DTexture?(fe.setTexture3D(O,0),ft=S.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(fe.setTexture2DArray(O,0),ft=S.TEXTURE_2D_ARRAY):(fe.setTexture2D(O,0),ft=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,O.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,O.unpackAlignment);const Ze=S.getParameter(S.UNPACK_ROW_LENGTH),qt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Fi=S.getParameter(S.UNPACK_SKIP_PIXELS),Yt=S.getParameter(S.UNPACK_SKIP_ROWS),Mr=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,pt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,pt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Be),S.pixelStorei(S.UNPACK_SKIP_ROWS,ze),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ue);const dt=M.isDataArrayTexture||M.isData3DTexture,Vt=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const Jt=H.get(M),Lt=H.get(O),Gt=H.get(Jt.__renderTarget),Sa=H.get(Lt.__renderTarget);j.bindFramebuffer(S.READ_FRAMEBUFFER,Gt.__webglFramebuffer),j.bindFramebuffer(S.DRAW_FRAMEBUFFER,Sa.__webglFramebuffer);for(let xi=0;xi<Re;xi++)dt&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,H.get(M).__webglTexture,B,Ue+xi),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,H.get(O).__webglTexture,ge,ht+xi)),S.blitFramebuffer(Be,ze,Te,Ie,qe,rt,Te,Ie,S.DEPTH_BUFFER_BIT,S.NEAREST);j.bindFramebuffer(S.READ_FRAMEBUFFER,null),j.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(B!==0||M.isRenderTargetTexture||H.has(M)){const Jt=H.get(M),Lt=H.get(O);j.bindFramebuffer(S.READ_FRAMEBUFFER,Kd),j.bindFramebuffer(S.DRAW_FRAMEBUFFER,jd);for(let Gt=0;Gt<Re;Gt++)dt?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Jt.__webglTexture,B,Ue+Gt):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Jt.__webglTexture,B),Vt?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Lt.__webglTexture,ge,ht+Gt):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Lt.__webglTexture,ge),B!==0?S.blitFramebuffer(Be,ze,Te,Ie,qe,rt,Te,Ie,S.COLOR_BUFFER_BIT,S.NEAREST):Vt?S.copyTexSubImage3D(ft,ge,qe,rt,ht+Gt,Be,ze,Te,Ie):S.copyTexSubImage2D(ft,ge,qe,rt,Be,ze,Te,Ie);j.bindFramebuffer(S.READ_FRAMEBUFFER,null),j.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else Vt?M.isDataTexture||M.isData3DTexture?S.texSubImage3D(ft,ge,qe,rt,ht,Te,Ie,Re,ot,Ne,pt.data):O.isCompressedArrayTexture?S.compressedTexSubImage3D(ft,ge,qe,rt,ht,Te,Ie,Re,ot,pt.data):S.texSubImage3D(ft,ge,qe,rt,ht,Te,Ie,Re,ot,Ne,pt):M.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,ge,qe,rt,Te,Ie,ot,Ne,pt.data):M.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,ge,qe,rt,pt.width,pt.height,ot,pt.data):S.texSubImage2D(S.TEXTURE_2D,ge,qe,rt,Te,Ie,ot,Ne,pt);S.pixelStorei(S.UNPACK_ROW_LENGTH,Ze),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,qt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Fi),S.pixelStorei(S.UNPACK_SKIP_ROWS,Yt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Mr),ge===0&&O.generateMipmaps&&S.generateMipmap(ft),j.unbindTexture()},this.initRenderTarget=function(M){H.get(M).__webglFramebuffer===void 0&&fe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?fe.setTextureCube(M,0):M.isData3DTexture?fe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?fe.setTexture2DArray(M,0):fe.setTexture2D(M,0),j.unbindTexture()},this.resetState=function(){W=0,T=0,b=null,j.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const OS="/My-Space/assets/textures/blocks/cobblestone.png",BS="/My-Space/assets/textures/blocks/gold_ore.png";class zS{camera;domElement;moveSpeed=.15;lookSpeed=.002;keys={};pitch=0;yaw=0;isLocked=!1;constructor(e,t){this.camera=e,this.domElement=t,this.initEventListeners()}initEventListeners(){window.addEventListener("keydown",e=>this.keys[e.key.toLowerCase()]=!0),window.addEventListener("keyup",e=>this.keys[e.key.toLowerCase()]=!1),this.domElement.addEventListener("click",()=>{this.domElement.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===this.domElement}),document.addEventListener("mousemove",e=>{this.isLocked&&(this.yaw-=e.movementX*this.lookSpeed,this.pitch-=e.movementY*this.lookSpeed,this.pitch=Math.max(-Math.PI/2,Math.min(Math.PI/2,this.pitch)))})}update(){this.camera.rotation.set(this.pitch,this.yaw,0);const e=new Y;this.camera.getWorldDirection(e),e.y=0,e.normalize();const t=new Y;t.crossVectors(e,new Y(0,1,0)).normalize(),this.keys.w&&this.camera.position.addScaledVector(e,this.moveSpeed),this.keys.s&&this.camera.position.addScaledVector(e,-this.moveSpeed),this.keys.a&&this.camera.position.addScaledVector(t,-this.moveSpeed),this.keys.d&&this.camera.position.addScaledVector(t,this.moveSpeed)}}const VS={class:"container"},GS=Ol({__name:"App",setup(n){const e=Ul(null);let t,i,r,s,a,o,l;function c(f,d,h){const g=new vr,_=new Y0().load(f);_.magFilter=zt,_.minFilter=zt;const m=new Ql({map:_}),p=new Kn(g,m);return p.position.x=d,p.position.y=h,p}function u(){if(!e.value)return;const f=window.innerWidth,d=window.innerHeight;r.setSize(f,d),i.aspect=f/d,i.updateProjectionMatrix()}return Lf(()=>{if(!e.value)return;r=new FS({canvas:e.value,antialias:!0}),t=new O0,t.background=new nt(16777215),i=new tn(75,window.innerWidth/window.innerHeight,.1,1e3),i.position.set(0,2,5),l=new zS(i,r.domElement);const f=new Ws({color:16711680}),d=new Ws({color:65280}),h=new Ws({color:255}),g=[new Y(0,0,0),new Y(5,0,0)],_=[new Y(0,0,0),new Y(0,5,0)],m=[new Y(0,0,0),new Y(0,0,5)],p=new rn().setFromPoints(g),y=new rn().setFromPoints(_),E=new rn().setFromPoints(m),A=new io(p,f),L=new io(y,d),C=new io(E,h);t.add(A,L,C),s=c(OS,-1,2),a=c(BS,1,2),t.add(s,a),u(),window.addEventListener("resize",u);const P=()=>{s.rotation.x+=.01,s.rotation.y+=.02,a.rotation.x+=.02,a.rotation.y+=.01,l.update(),r.render(t,i),o=requestAnimationFrame(P)};P()}),Bl(()=>{cancelAnimationFrame(o),r.dispose(),window.removeEventListener("resize",u)}),(f,d)=>(Dp(),Up("div",VS,[Gl("canvas",{ref_key:"canvas",ref:e},null,512)]))}});const er=typeof document<"u";function Pd(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function HS(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Pd(n.default)}const Qe=Object.assign;function uo(n,e){const t={};for(const i in e){const r=e[i];t[i]=mn(r)?r.map(n):n(r)}return t}const kr=()=>{},mn=Array.isArray;function Fu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const Dd=/#/g,kS=/&/g,WS=/\//g,XS=/=/g,qS=/\?/g,Ld=/\+/g,YS=/%5B/g,KS=/%5D/g,Id=/%5E/g,jS=/%60/g,Ud=/%7B/g,$S=/%7C/g,Nd=/%7D/g,ZS=/%20/g;function tc(n){return n==null?"":encodeURI(""+n).replace($S,"|").replace(YS,"[").replace(KS,"]")}function JS(n){return tc(n).replace(Ud,"{").replace(Nd,"}").replace(Id,"^")}function xl(n){return tc(n).replace(Ld,"%2B").replace(ZS,"+").replace(Dd,"%23").replace(kS,"%26").replace(jS,"`").replace(Ud,"{").replace(Nd,"}").replace(Id,"^")}function QS(n){return xl(n).replace(XS,"%3D")}function eM(n){return tc(n).replace(Dd,"%23").replace(qS,"%3F")}function tM(n){return eM(n).replace(WS,"%2F")}function ts(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const nM=/\/$/,iM=n=>n.replace(nM,"");function fo(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,o>0?o:e.length),r=n(s.slice(1))),o>=0&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=oM(i??e,t),{fullPath:i+s+a,path:i,query:r,hash:ts(a)}}function rM(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Ou(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function sM(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&pr(e.matched[i],t.matched[r])&&Fd(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function pr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Fd(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!aM(n[t],e[t]))return!1;return!0}function aM(n,e){return mn(n)?Bu(n,e):mn(e)?Bu(e,n):n===e}function Bu(n,e){return mn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function oM(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const ii={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let gl=(function(n){return n.pop="pop",n.push="push",n})({}),ho=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function lM(n){if(!n)if(er){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),iM(n)}const cM=/^[^#]+#/;function uM(n,e){return n.replace(cM,"#")+e}function fM(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const _a=()=>({left:window.scrollX,top:window.scrollY});function dM(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=fM(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function zu(n,e){return(history.state?history.state.position-e:-1)+n}const _l=new Map;function hM(n,e){_l.set(n,e)}function pM(n){const e=_l.get(n);return _l.delete(n),e}function mM(n){return typeof n=="string"||n&&typeof n=="object"}function Od(n){return typeof n=="string"||typeof n=="symbol"}let mt=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const Bd=Symbol("");mt.MATCHER_NOT_FOUND+"",mt.NAVIGATION_GUARD_REDIRECT+"",mt.NAVIGATION_ABORTED+"",mt.NAVIGATION_CANCELLED+"",mt.NAVIGATION_DUPLICATED+"";function mr(n,e){return Qe(new Error,{type:n,[Bd]:!0},e)}function In(n,e){return n instanceof Error&&Bd in n&&(e==null||!!(n.type&e))}const xM=["params","query","hash"];function gM(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of xM)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function _M(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const r=t[i].replace(Ld," "),s=r.indexOf("="),a=ts(s<0?r:r.slice(0,s)),o=s<0?null:ts(r.slice(s+1));if(a in e){let l=e[a];mn(l)||(l=e[a]=[l]),l.push(o)}else e[a]=o}return e}function Vu(n){let e="";for(let t in n){const i=n[t];if(t=QS(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(mn(i)?i.map(r=>r&&xl(r)):[i&&xl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function vM(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=mn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const SM=Symbol(""),Gu=Symbol(""),nc=Symbol(""),zd=Symbol(""),vl=Symbol("");function Dr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ai(n,e,t,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=d=>{d===!1?l(mr(mt.NAVIGATION_ABORTED,{from:t,to:e})):d instanceof Error?l(d):mM(d)?l(mr(mt.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(a&&i.enterCallbacks[r]===a&&typeof d=="function"&&a.push(d),o())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function po(n,e,t,i,r=s=>s()){const s=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(Pd(l)){const c=(l.__vccOpts||l)[e];c&&s.push(ai(c,t,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=HS(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const d=(f.__vccOpts||f)[e];return d&&ai(d,t,i,a,o,r)()}))}}return s}function MM(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>pr(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>pr(c,l))||r.push(l))}return[t,i,r]}let bM=()=>location.protocol+"//"+location.host;function Vd(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,o=r.slice(a);return o[0]!=="/"&&(o="/"+o),Ou(o,"")}return Ou(t,n)+i+r}function EM(n,e,t,i){let r=[],s=[],a=null;const o=({state:d})=>{const h=Vd(n,location),g=t.value,_=e.value;let m=0;if(d){if(t.value=h,e.value=d,a&&a===g){a=null;return}m=_?d.position-_.position:0}else i(h);r.forEach(p=>{p(t.value,g,{delta:m,type:gl.pop,direction:m?m>0?ho.forward:ho.back:ho.unknown})})};function l(){a=t.value}function c(d){r.push(d);const h=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(Qe({},d.state,{scroll:_a()}),"")}}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function Hu(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?_a():null}}function yM(n){const{history:e,location:t}=window,i={value:Vd(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),d=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:bM()+n+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),t[u?"replace":"assign"](d)}}function a(l,c){s(l,Qe({},e.state,Hu(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function o(l,c){const u=Qe({},r.value,e.state,{forward:l,scroll:_a()});s(u.current,u,!0),s(l,Qe({},Hu(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function TM(n){n=lM(n);const e=yM(n),t=EM(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=Qe({location:"",base:n,go:i,createHref:uM.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let Pi=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var Mt=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(Mt||{});const AM={type:Pi.Static,value:""},RM=/[a-zA-Z0-9_]/;function wM(n){if(!n)return[[]];if(n==="/")return[[AM]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(h){throw new Error(`ERR (${t})/"${c}": ${h}`)}let t=Mt.Static,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(t===Mt.Static?s.push({type:Pi.Static,value:c}):t===Mt.Param||t===Mt.ParamRegExp||t===Mt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Pi.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==Mt.ParamRegExp){i=t,t=Mt.EscapeNext;continue}switch(t){case Mt.Static:l==="/"?(c&&f(),a()):l===":"?(f(),t=Mt.Param):d();break;case Mt.EscapeNext:d(),t=i;break;case Mt.Param:l==="("?t=Mt.ParamRegExp:RM.test(l)?d():(f(),t=Mt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case Mt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=Mt.ParamRegExpEnd:u+=l;break;case Mt.ParamRegExpEnd:f(),t=Mt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===Mt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}const ku="[^/]+?",CM={sensitive:!1,strict:!1,start:!0,end:!0};var Nt=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(Nt||{});const PM=/[.+*?^${}()[\]/\\]/g;function DM(n,e){const t=Qe({},CM,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[Nt.Root];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=Nt.Segment+(t.sensitive?Nt.BonusCaseSensitive:0);if(d.type===Pi.Static)f||(r+="/"),r+=d.value.replace(PM,"\\$&"),h+=Nt.Static;else if(d.type===Pi.Param){const{value:g,repeatable:_,optional:m,regexp:p}=d;s.push({name:g,repeatable:_,optional:m});const y=p||ku;if(y!==ku){h+=Nt.BonusCustomRegExp;try{`${y}`}catch(A){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+A.message)}}let E=_?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),r+=E,h+=Nt.Dynamic,m&&(h+=Nt.BonusOptional),_&&(h+=Nt.BonusRepeatable),y===".*"&&(h+=Nt.BonusWildcard)}u.push(h)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=Nt.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",g=s[d-1];f[g.name]=h&&g.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===Pi.Static)u+=h.value;else if(h.type===Pi.Param){const{value:g,repeatable:_,optional:m}=h,p=g in c?c[g]:"";if(mn(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=mn(p)?p.join("/"):p;if(!y)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function LM(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===Nt.Static+Nt.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===Nt.Static+Nt.Segment?1:-1:0}function Gd(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=LM(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Wu(i))return 1;if(Wu(r))return-1}return r.length-i.length}function Wu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const IM={strict:!1,end:!0,sensitive:!1};function UM(n,e,t){const i=DM(wM(n.path),t),r=Qe(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function NM(n,e){const t=[],i=new Map;e=Fu(IM,e);function r(f){return i.get(f)}function s(f,d,h){const g=!h,_=qu(f);_.aliasOf=h&&h.record;const m=Fu(e,f),p=[_];if("alias"in f){const A=typeof f.alias=="string"?[f.alias]:f.alias;for(const L of A)p.push(qu(Qe({},_,{components:h?h.record.components:_.components,path:L,aliasOf:h?h.record:_})))}let y,E;for(const A of p){const{path:L}=A;if(d&&L[0]!=="/"){const C=d.record.path,P=C[C.length-1]==="/"?"":"/";A.path=d.record.path+(L&&P+L)}if(y=UM(A,d,m),h?h.alias.push(y):(E=E||y,E!==y&&E.alias.push(y),g&&f.name&&!Yu(y)&&a(f.name)),Hd(y)&&l(y),_.children){const C=_.children;for(let P=0;P<C.length;P++)s(C[P],y,h&&h.children[P])}h=h||y}return E?()=>{a(E)}:kr}function a(f){if(Od(f)){const d=i.get(f);d&&(i.delete(f),t.splice(t.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=t.indexOf(f);d>-1&&(t.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return t}function l(f){const d=BM(f,t);t.splice(d,0,f),f.record.name&&!Yu(f)&&i.set(f.record.name,f)}function c(f,d){let h,g={},_,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw mr(mt.MATCHER_NOT_FOUND,{location:f});m=h.record.name,g=Qe(Xu(d.params,h.keys.filter(E=>!E.optional).concat(h.parent?h.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),f.params&&Xu(f.params,h.keys.map(E=>E.name))),_=h.stringify(g)}else if(f.path!=null)_=f.path,h=t.find(E=>E.re.test(_)),h&&(g=h.parse(_),m=h.record.name);else{if(h=d.name?i.get(d.name):t.find(E=>E.re.test(d.path)),!h)throw mr(mt.MATCHER_NOT_FOUND,{location:f,currentLocation:d});m=h.record.name,g=Qe({},d.params,f.params),_=h.stringify(g)}const p=[];let y=h;for(;y;)p.unshift(y.record),y=y.parent;return{name:m,path:_,params:g,matched:p,meta:OM(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function Xu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function qu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:FM(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function FM(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Yu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function OM(n){return n.reduce((e,t)=>Qe(e,t.meta),{})}function BM(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;Gd(n,e[s])<0?i=s:t=s+1}const r=zM(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function zM(n){let e=n;for(;e=e.parent;)if(Hd(e)&&Gd(n,e)===0)return e}function Hd({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Ku(n){const e=Gn(nc),t=Gn(zd),i=cn(()=>{const l=nr(n.to);return e.resolve(l)}),r=cn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const d=f.findIndex(pr.bind(null,u));if(d>-1)return d;const h=ju(l[c-2]);return c>1&&ju(u)===h&&f[f.length-1].path!==h?f.findIndex(pr.bind(null,l[c-2])):d}),s=cn(()=>r.value>-1&&WM(t.params,i.value.params)),a=cn(()=>r.value>-1&&r.value===t.matched.length-1&&Fd(t.params,i.value.params));function o(l={}){if(kM(l)){const c=e[nr(n.replace)?"replace":"push"](nr(n.to)).catch(kr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:cn(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function VM(n){return n.length===1?n[0]:n}const GM=Ol({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ku,setup(n,{slots:e}){const t=la(Ku(n)),{options:i}=Gn(nc),r=cn(()=>({[$u(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[$u(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&VM(e.default(t));return n.custom?s:Qf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),HM=GM;function kM(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function WM(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!mn(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function ju(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const $u=(n,e,t)=>n??e??t,XM=Ol({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Gn(vl),r=cn(()=>n.route||i.value),s=Gn(Gu,0),a=cn(()=>{let c=nr(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=cn(()=>r.value.matched[a.value]);Fs(Gu,cn(()=>a.value+1)),Fs(SM,o),Fs(vl,r);const l=Ul();return Os(()=>[l.value,o.value,n.name],([c,u,f],[d,h,g])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!pr(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,d=f&&f.components[u];if(!d)return Zu(t.default,{Component:d,route:c});const h=f.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Qf(d,Qe({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Zu(t.default,{Component:m,route:c})||m}}});function Zu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const qM=XM;function YM(n){const e=NM(n.routes,n),t=n.parseQuery||_M,i=n.stringifyQuery||Vu,r=n.history,s=Dr(),a=Dr(),o=Dr(),l=Ph(ii);let c=ii;er&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=uo.bind(null,D=>""+D),f=uo.bind(null,tM),d=uo.bind(null,ts);function h(D,J){let re,oe;return Od(D)?(re=e.getRecordMatcher(D),oe=J):oe=D,e.addRoute(oe,re)}function g(D){const J=e.getRecordMatcher(D);J&&e.removeRoute(J)}function _(){return e.getRoutes().map(D=>D.record)}function m(D){return!!e.getRecordMatcher(D)}function p(D,J){if(J=Qe({},J||l.value),typeof D=="string"){const F=fo(t,D,J.path),S=e.resolve({path:F.path},J),q=r.createHref(F.fullPath);return Qe(F,S,{params:d(S.params),hash:ts(F.hash),redirectedFrom:void 0,href:q})}let re;if(D.path!=null)re=Qe({},D,{path:fo(t,D.path,J.path).path});else{const F=Qe({},D.params);for(const S in F)F[S]==null&&delete F[S];re=Qe({},D,{params:f(F)}),J.params=f(J.params)}const oe=e.resolve(re,J),be=D.hash||"";oe.params=u(d(oe.params));const R=rM(i,Qe({},D,{hash:JS(be),path:oe.path})),w=r.createHref(R);return Qe({fullPath:R,hash:be,query:i===Vu?vM(D.query):D.query||{}},oe,{redirectedFrom:void 0,href:w})}function y(D){return typeof D=="string"?fo(t,D,l.value.path):Qe({},D)}function E(D,J){if(c!==D)return mr(mt.NAVIGATION_CANCELLED,{from:J,to:D})}function A(D){return P(D)}function L(D){return A(Qe(y(D),{replace:!0}))}function C(D,J){const re=D.matched[D.matched.length-1];if(re&&re.redirect){const{redirect:oe}=re;let be=typeof oe=="function"?oe(D,J):oe;return typeof be=="string"&&(be=be.includes("?")||be.includes("#")?be=y(be):{path:be},be.params={}),Qe({query:D.query,hash:D.hash,params:be.path!=null?{}:D.params},be)}}function P(D,J){const re=c=p(D),oe=l.value,be=D.state,R=D.force,w=D.replace===!0,F=C(re,oe);if(F)return P(Qe(y(F),{state:typeof F=="object"?Qe({},be,F.state):be,force:R,replace:w}),J||re);const S=re;S.redirectedFrom=J;let q;return!R&&sM(i,oe,re)&&(q=mr(mt.NAVIGATION_DUPLICATED,{to:S,from:oe}),we(oe,oe,!0,!1)),(q?Promise.resolve(q):b(S,oe)).catch(G=>In(G)?In(G,mt.NAVIGATION_GUARD_REDIRECT)?G:me(G):V(G,S,oe)).then(G=>{if(G){if(In(G,mt.NAVIGATION_GUARD_REDIRECT))return P(Qe({replace:w},y(G.to),{state:typeof G.to=="object"?Qe({},be,G.to.state):be,force:R}),J||S)}else G=X(S,oe,!0,w,be);return N(S,oe,G),G})}function W(D,J){const re=E(D,J);return re?Promise.reject(re):Promise.resolve()}function T(D){const J=$e.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(D):D()}function b(D,J){let re;const[oe,be,R]=MM(D,J);re=po(oe.reverse(),"beforeRouteLeave",D,J);for(const F of oe)F.leaveGuards.forEach(S=>{re.push(ai(S,D,J))});const w=W.bind(null,D,J);return re.push(w),ee(re).then(()=>{re=[];for(const F of s.list())re.push(ai(F,D,J));return re.push(w),ee(re)}).then(()=>{re=po(be,"beforeRouteUpdate",D,J);for(const F of be)F.updateGuards.forEach(S=>{re.push(ai(S,D,J))});return re.push(w),ee(re)}).then(()=>{re=[];for(const F of R)if(F.beforeEnter)if(mn(F.beforeEnter))for(const S of F.beforeEnter)re.push(ai(S,D,J));else re.push(ai(F.beforeEnter,D,J));return re.push(w),ee(re)}).then(()=>(D.matched.forEach(F=>F.enterCallbacks={}),re=po(R,"beforeRouteEnter",D,J,T),re.push(w),ee(re))).then(()=>{re=[];for(const F of a.list())re.push(ai(F,D,J));return re.push(w),ee(re)}).catch(F=>In(F,mt.NAVIGATION_CANCELLED)?F:Promise.reject(F))}function N(D,J,re){o.list().forEach(oe=>T(()=>oe(D,J,re)))}function X(D,J,re,oe,be){const R=E(D,J);if(R)return R;const w=J===ii,F=er?history.state:{};re&&(oe||w?r.replace(D.fullPath,Qe({scroll:w&&F&&F.scroll},be)):r.push(D.fullPath,be)),l.value=D,we(D,J,re,w),me()}let Z;function se(){Z||(Z=r.listen((D,J,re)=>{if(!je.listening)return;const oe=p(D),be=C(oe,je.currentRoute.value);if(be){P(Qe(be,{replace:!0,force:!0}),oe).catch(kr);return}c=oe;const R=l.value;er&&hM(zu(R.fullPath,re.delta),_a()),b(oe,R).catch(w=>In(w,mt.NAVIGATION_ABORTED|mt.NAVIGATION_CANCELLED)?w:In(w,mt.NAVIGATION_GUARD_REDIRECT)?(P(Qe(y(w.to),{force:!0}),oe).then(F=>{In(F,mt.NAVIGATION_ABORTED|mt.NAVIGATION_DUPLICATED)&&!re.delta&&re.type===gl.pop&&r.go(-1,!1)}).catch(kr),Promise.reject()):(re.delta&&r.go(-re.delta,!1),V(w,oe,R))).then(w=>{w=w||X(oe,R,!1),w&&(re.delta&&!In(w,mt.NAVIGATION_CANCELLED)?r.go(-re.delta,!1):re.type===gl.pop&&In(w,mt.NAVIGATION_ABORTED|mt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),N(oe,R,w)}).catch(kr)}))}let ie=Dr(),te=Dr(),ne;function V(D,J,re){me(D);const oe=te.list();return oe.length?oe.forEach(be=>be(D,J,re)):console.error(D),Promise.reject(D)}function he(){return ne&&l.value!==ii?Promise.resolve():new Promise((D,J)=>{ie.add([D,J])})}function me(D){return ne||(ne=!D,se(),ie.list().forEach(([J,re])=>D?re(D):J()),ie.reset()),D}function we(D,J,re,oe){const{scrollBehavior:be}=n;if(!er||!be)return Promise.resolve();const R=!re&&pM(zu(D.fullPath,0))||(oe||!re)&&history.state&&history.state.scroll||null;return yf().then(()=>be(D,J,R)).then(w=>w&&dM(w)).catch(w=>V(w,D,J))}const Fe=D=>r.go(D);let Ye;const $e=new Set,je={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:n,push:A,replace:L,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:te.add,isReady:he,install(D){D.component("RouterLink",HM),D.component("RouterView",qM),D.config.globalProperties.$router=je,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>nr(l)}),er&&!Ye&&l.value===ii&&(Ye=!0,A(r.location).catch(oe=>{}));const J={};for(const oe in ii)Object.defineProperty(J,oe,{get:()=>l.value[oe],enumerable:!0});D.provide(nc,je),D.provide(zd,vf(J)),D.provide(vl,l);const re=D.unmount;$e.add(D),D.unmount=function(){$e.delete(D),$e.size<1&&(c=ii,Z&&Z(),Z=null,l.value=ii,Ye=!1,ne=!1),re()}}};function ee(D){return D.reduce((J,re)=>J.then(()=>T(re)),Promise.resolve())}return je}const KM=YM({history:TM("/My-Space/"),routes:[]}),ic=gm(GS);ic.use(Mm());ic.use(KM);ic.mount("#app");
